/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojdatasource-common"],function(b){b.ps=function(){this.id=null;this.depth=0;this.parent=null;this.children=[];this.aO=this.attr=this.title=null};b.ps.prototype.l$=function(b){return function(a,d){return a.attr&&d.attr&&a.attr[b]&&d.attr[b]?a.attr[b]<d.attr[b]?-1:a.attr[b]===d.attr[b]?0:1:a[b]<d[b]?-1:a[b]===d[b]?0:1}};b.ps.prototype.Bba=function(b){return function(a,d){return a.attr&&d.attr&&a.attr[b]&&d.attr[b]?a.attr[b]<d.attr[b]?1:a.attr[b]===d.attr[b]?0:-1:a[b]<
d[b]?1:a[b]===d[b]?0:-1}};b.ps.prototype.p0=function(b){var a=b.key;"ascending"===b.direction?this.children.sort(this.l$(a)):"descending"===b.direction&&this.children.sort(this.Bba(a));for(var a=0,d=this.children.length;a<d;a++)this.children[a].p0(b)};b.hc=function(f){var a;a=new b.ps;f.id||(a.id="root");this.data=this.mU({count:0},a,f);b.hc.q.constructor.call(this,a)};o_("JsonTreeDataSource",b.hc,b);b.b.ga(b.hc,b.qp,"oj.JsonTreeDataSource");b.hc.prototype.Init=function(){b.hc.q.Init.call(this)};
b.b.g("JsonTreeDataSource.prototype.Init",{Init:b.hc.prototype.Init});b.hc.prototype.mU=function(f,a,d,c){var e,g,h,k,l,m,n;c||(c=0);for(k in d)if("children"==k||0==c&&d instanceof Array)for(e=0==c&&d instanceof Array?d:d[k],c++,n=0;n<e.length;n++){h=e[n];g=new b.ps;h.id||(f.count++,h.attr?h.attr.id||(h.attr.id="rid_"+f.count):g.id="rid_"+f.count);for(l in h)for(m in g)l==m&&"children"!=l&&(g[m]=h[l]),"depth"==m&&(g[m]=c);a.children.push(g);for(m in h)"children"==m&&this.mU(f,a.children[n],h,c)}return a};
b.hc.prototype.$e=function(b){b||(b=this.data.id);b=this.fo(this.data,b);return b.children?b.children.length:0};b.b.g("JsonTreeDataSource.prototype.getChildCount",{$e:b.hc.prototype.$e});b.hc.prototype.Hf=function(f,a,d){var c,e,g,h,k;g=[];f||(f=this.data.id);h=this.fo(this.data,f);a||(a=[],a.start=0,a.count=h.children.length);a.count||(a.count=h.children.length);a.start||(a.start=0);c=a.start;e=Math.min(h.children.length,c+a.count);for(a=c;a<e;a+=1)k=new b.ps,h.children[a].attr&&(k.attr=h.children[a].attr),
h.children[a].id&&(k.id=h.children[a].id),h.children[a].depth&&(k.depth=h.children[a].depth),h.children[a].title&&(k.title=h.children[a].title),h.children[a].parent&&(k.parent=h.children[a].parent),k.aO=0<h.children[a].children.length?!1:!0,g.push(k);f=new b.Re(c,e,g,f);null!=d&&null!=d.success&&d.success.call(null,f)};b.b.g("JsonTreeDataSource.prototype.fetchChildren",{Hf:b.hc.prototype.Hf});b.hc.prototype.vu=function(f,a){var d,c,e,g;e=[];f||(f=this.data.id);g=this.fo(this.data,f);d=[];d.start=
0;d.count=g.children.length;c=d.start;for(d=Math.min(g.children.length,c+d.count);c<d;c+=1)g.children[c].aO=0<g.children[c].children.length?!1:!0,e.push(g.children[c]);e=new b.Re(0,e.length,e,f);null!=a&&null!=a.success&&a.success.call(null,e)};b.b.g("JsonTreeDataSource.prototype.fetchDescendants",{vu:b.hc.prototype.vu});b.hc.prototype.od=function(){return"valid"};b.b.g("JsonTreeDataSource.prototype.moveOK",{od:b.hc.prototype.od});b.hc.prototype.move=function(f,a,d,c){var e;e=a;if(!e||e==this.data.id){if("inside"!=
d){b.r.log("Error: root can not be the reference node if position equals to "+d);return}e||(e=this.data.id)}f=this.fo(null,f);this.fo(f,e)?b.r.log("Error: the node to move contains the reference node as its sub-tree."):(a=this.fo(null,e),e=this.lJ(e),this.sja(f),"inside"==d?(this.bm(f,f.depth-(a.depth+1)),a.children.push(f)):"before"==d?(this.bm(f,f.depth-a.depth),d=e.children.indexOf(a),-1<d&&(0!=d?e.children.splice(d-1,0,f):e.children.unshift(f))):"after"==d?(this.bm(f,f.depth-a.depth),d=e.children.indexOf(a),
-1<d&&e.children.splice(d,0,f)):"first"==d?(this.bm(f,f.depth-a.depth),e.children.unshift(f)):"last"==d&&(this.bm(f,f.depth-a.depth),e.children.push(f)),null!=c&&null!=c.success&&c.success.call(null,this.data))};b.b.g("JsonTreeDataSource.prototype.move",{move:b.hc.prototype.move});b.hc.prototype.sort=function(b,a){var d;d=this.fo(this.data,this.data.id);d.p0(b);null!=a&&null!=a.success&&a.success.call(null,d)};b.b.g("JsonTreeDataSource.prototype.sort",{sort:b.hc.prototype.sort});b.hc.prototype.nm=
function(){return{key:null,direction:"none"}};b.b.g("JsonTreeDataSource.prototype.getSortCriteria",{nm:b.hc.prototype.nm});b.hc.prototype.lJ=function(b,a){var d,c=null;if(b==this.data.id)return null;a||(a=this.data);if(a.children&&0<a.children.length){for(d=0;d<a.children.length;d++)if(a.children[d].id&&a.children[d].id==b||a.children[d].attr&&a.children[d].attr.id==b)return a;for(d=0;d<a.children.length&&!(c=this.lJ(b,a.children[d]));d++);}return c};b.hc.prototype.fo=function(b,a){var d,c=null;b||
(b=this.data);if(b.id&&b.id==a||b.attr&&b.attr.id==a)return b;if(null!=b.children)for(d=0;d<b.children.length&&!c;d++)c=b.children[d].id&&b.children[d].id==a||b.children[d].attr&&b.children[d].attr.id==a?b.children[d]:this.fo(b.children[d],a);return c};b.hc.prototype.bm=function(b,a){var d;b.depth-=a;if(b.children&&0!=b.children.length)for(d=0;d<b.children.length;d++)this.bm(b.children[d],a)};b.hc.prototype.sja=function(b){var a;b.id?a=b.id:b.attr&&(a=b.attr.id);(a=this.lJ(a))||(a=this.data);b=a.children.indexOf(b);
-1<b&&a.children.splice(b,1)};b.hc.prototype.getCapability=function(b){return"fetchDescendants"===b?"enable":"sort"===b?"default":"batchFetch"===b?"disable":"move"===b?"full":null};b.b.g("JsonTreeDataSource.prototype.getCapability",{getCapability:b.hc.prototype.getCapability});b.Re=function(f,a,d,c){b.l.cm(f,null);b.l.cm(a,null);this.Voa=c;this.Po=f;this.qE=a;this.Of=d};o_("JsonNodeSet",b.Re,b);b.Re.prototype.getParent=function(){return this.Voa};b.b.g("JsonNodeSet.prototype.getParent",{getParent:b.Re.prototype.getParent});
b.Re.prototype.ta=function(){return this.Po};b.b.g("JsonNodeSet.prototype.getStart",{ta:b.Re.prototype.ta});b.Re.prototype.R=function(){return Math.max(0,this.qE-this.Po)};b.b.g("JsonNodeSet.prototype.getCount",{R:b.Re.prototype.R});b.Re.prototype.getData=function(f){b.l.assert(f<=this.qE&&f>=this.Po);f-=this.Po;return this.Of[f]?this.Of[f].attr:null};b.b.g("JsonNodeSet.prototype.getData",{getData:b.Re.prototype.getData});b.Re.prototype.getMetadata=function(f){var a=[];b.l.assert(f<=this.qE&&f>=this.Po);
f-=this.Po;a.key=this.Of[f].id?this.Of[f].id:this.Of[f].attr.id;a.leaf=this.Of[f].aO;a.depth=this.Of[f].depth;null==a.leaf&&(a.leaf=this.Of[f].children&&0<this.Of[f].children.length?!1:!0);return a};b.b.g("JsonNodeSet.prototype.getMetadata",{getMetadata:b.Re.prototype.getMetadata});b.Re.prototype.bm=function(b,a){var d;a++;b.depth=a;if(b.children&&0!=b.children.length)for(d=0;d<b.children.length;d++)this.bm(b.children[d],a)};b.Re.prototype.Kf=function(f){var a,d,c;b.l.assert(f<=this.qE&&f>=this.Po);
f-=this.Po;d=this.Of[f].depth;a=this.Of[f].children;if(0==a.length)return null;f=this.Of[f].id?this.Of[f].id:this.Of[f].attr.id;for(c=0;c<a.length;c++)this.bm(a[c],d);return new b.Re(0,a.length,a,f)};b.b.g("JsonNodeSet.prototype.getChildNodeSet",{Kf:b.Re.prototype.Kf})});