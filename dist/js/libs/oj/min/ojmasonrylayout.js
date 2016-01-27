/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojdnd"],function(b,f){function a(b,c,e,f,h,k){null==a.QG&&(a.QG=a.Hca());this.rc=b;this.wj=c;this.q$=e;f&&f.o5&&(this.Dla=f.o5);h&&(h.r5&&(this.gM=h.r5),h.q5&&(this.fM=h.q5),h.v5&&(this.lM=h.v5),h.u5&&(this.kM=h.u5),h.s5&&(this.iM=h.s5),h.t5&&(this.qD=h.t5),h.x5&&(this.nM=h.x5),h.y5&&(this.oM=h.y5),h.w5&&(this.mM=h.w5));k&&(k.i1&&(this.sn=k.i1),k.E4&&(this.eh=k.E4),k.V2&&(this.EW=k.V2),k.e3&&(this.wJ=k.e3),k.a5&&(this.io=k.a5),k.q3&&(this.st=k.q3),
k.N3&&(this.Ft=k.N3),k.M3&&(this.xk=k.M3),k.L3&&(this.Xn=k.L3),k.c5&&(this.Px=k.c5),k.Pf&&(this.v0=k.Pf),k.Eg&&(this.w0=k.Eg));c=document.createElement("div");e=c.style;e.display="inline-block";e.overflow="hidden";e.visibility="hidden";f=document.createElement("div");e=f.style;e.display="inline-block";c.appendChild(f);b.insertBefore(c,b.firstChild);this.k0=c;this.Nq=f;var l=this;this.tk=function(a){l.tq(a)};this.vX=function(){l.Sfa()};this.qq=function(a){l.LJ(a)};this.sq=function(a){l.SJ(a)}}(function(){function d(a){for(;a;){a=
a.nextSibling;var b=!0;if(a){var c=a.style;!c||c.visibility!==p&&c.display!==r||(b=!1)}if(a&&1===a.nodeType&&b)return a}return null}function c(a,b){for(var c=a;c;){var d=c.style;if(d&&(d.visibility===p||d.display===r))break;d=c.parentNode;if(d===b)return c;c=d}return null}function e(a,b){return b.sc<a.sc?1:a.sc<b.sc?-1:0}function g(a){a&&a.sort(e);return a}function h(a){var b=null;a=f(a);a.hasClass("oj-masonrylayout-tile-1x1")?b={colSpan:1,rowSpan:1}:a.hasClass("oj-masonrylayout-tile-2x1")?b={colSpan:2,
rowSpan:1}:a.hasClass("oj-masonrylayout-tile-3x1")?b={colSpan:3,rowSpan:1}:a.hasClass("oj-masonrylayout-tile-1x2")?b={colSpan:1,rowSpan:2}:a.hasClass("oj-masonrylayout-tile-1x3")?b={colSpan:1,rowSpan:3}:a.hasClass("oj-masonrylayout-tile-2x2")?b={colSpan:2,rowSpan:2}:a.hasClass("oj-masonrylayout-tile-2x3")?b={colSpan:2,rowSpan:3}:a.hasClass("oj-masonrylayout-tile-3x2")&&(b={colSpan:3,rowSpan:2});return b}function k(a){var b=null;a=f(a);a.hasClass("oj-masonrylayout-tile-1x1")?b="oj-masonrylayout-tile-1x1":
a.hasClass("oj-masonrylayout-tile-2x1")?b="oj-masonrylayout-tile-2x1":a.hasClass("oj-masonrylayout-tile-3x1")?b="oj-masonrylayout-tile-3x1":a.hasClass("oj-masonrylayout-tile-1x2")?b="oj-masonrylayout-tile-1x2":a.hasClass("oj-masonrylayout-tile-1x3")?b="oj-masonrylayout-tile-1x3":a.hasClass("oj-masonrylayout-tile-2x2")?b="oj-masonrylayout-tile-2x2":a.hasClass("oj-masonrylayout-tile-2x3")?b="oj-masonrylayout-tile-2x3":a.hasClass("oj-masonrylayout-tile-3x2")&&(b="oj-masonrylayout-tile-3x2");return b}
function l(a,b){f(a).removeClass(b)}function m(a,b){f(a).addClass(b)}b.ya("oj.ojMasonryLayout",f.oj.baseComponent,{defaultElement:"\x3cdiv\x3e",widgetEventPrefix:"oj",options:{reorderHandle:null,beforeInsert:null,insert:null,beforeRemove:null,remove:null,beforeResize:null,resize:null,beforeReorder:null,reorder:null},_ComponentCreate:function(){this._super();this.element.addClass("oj-masonrylayout oj-component");this.options.disabled&&b.r.warn(u);this.zr=this.eventNamespace+"ReorderHandle";this.oa=
{};this.oa.uh=!1;this.oa.Ie=!1;this.oa.kP=!1;this.oa.Om=!1;this.oa.ep=!1;this.Qn();this.Uv();this.Aa(!0)},refresh:function(){this._super();var a="rtl"===this.dc()!==this.vf;a&&this.FU();this.Aa(a)},ql:function(){this._super();this.Wc&&this.Aa(this.Wc[0])},jn:function(){this._super();this.Wc&&this.Aa(this.Wc[0])},nf:function(a,b,c){this.tia(b);this.qf(b,c,{launcher:f(b.target).closest(":tabbable")})},Aa:function(c){if(this.aw()){this.Wc=null;this.vf="rtl"===this.dc();this.vn=b.v.Qd();var d=this.element,
e=this.options;if(c){var f=this;this.io=function(a){f.jla(a)};this.st=function(a){f.Rfa(a)};this.Ft=function(){f.jha()};this.xk=function(){f.iha()};this.Xn=function(){f.hha()};if(!this.Af){var n={};n.o5=w;var p={r5:"oj-masonrylayout-transition-resize-to",q5:"oj-masonrylayout-transition-resize-to-fast",v5:"oj-masonrylayout-tile-transition-move-to",u5:"oj-masonrylayout-tile-transition-move-to-fast",s5:"oj-masonrylayout-tile-transition-hide-from",t5:"oj-masonrylayout-tile-transition-hide-to"};p.x5=x;
p.y5="oj-masonrylayout-tile-transition-show-to";p.w5="oj-masonrylayout-tile-transition-resize-to";var q={};q.i1=m;q.E4=l;q.V2=k;q.e3=h;q.a5=this.io;q.q3=this.st;q.N3=this.Ft;q.M3=this.xk;q.L3=this.Xn;q.c5=g;q.Pf=b.Components.Pf;q.Eg=b.Components.Eg;this.cka();this.Af=new a(d[0],this.vf,"enabled"===b.ba.qN(),n,p,q)}this.ZW=function(a){f.Tea(a)};this.WW=function(a){f.Pea(a)};this.YW=function(a){f.Sea(a)};this.XW=function(a){f.Qea(a)};this.UW=function(a){f.Oea(a)};this.$W=function(a){f.Uea(a)};e.reorderHandle&&
this.$_()}else e=d.children(),this.YL(e),this.KL(e),this.aaa();this.Af.Hm(c);c&&(this.Yg=function(){f.Ue()},b.v.gh(d[0],this.Yg))}else d=!1,this.Wc&&(d=this.Wc[0]),this.Wc=[c||d]},_destroy:function(){this.Sp();var a=this.element;b.v.Sh(a[0],this.Yg);this.Yg=null;this.$ja();for(var c=this.qk(),d=c.length,e=0;e<d;e++)delete c[e].sc;this.FU();a.removeClass("oj-masonrylayout oj-component");this.options.reorderHandle&&this.I0();this.Is=this.Xn=this.xk=this.Ft=this.st=this.io=this.$W=this.UW=this.XW=this.YW=
this.WW=this.ZW=null;this._super()},_setOption:function(a,c,d){var e=!1;switch(a){case "reorderHandle":this.I0();e=!0;break;case "disabled":b.r.warn(u);break;case "contextMenu":b.v.Qd()||(this.Sp(),c&&this.Qn(c))}this._super(a,c,d);e&&c&&this.$_()},resizeTile:function(a,b){var c=this.Af;c.kE()&&c.ZD();var d=f(a),e=d[0],g=k(e);if(b==g)throw Error("JET MasonryLayout: Unable to resize child "+a+" to style class "+b+" because "+b+" is already applied.");!1!==this._trigger("beforeResize",null,{tile:d,
previousSizeStyleClass:g,sizeStyleClass:b})&&(this.Wv||(this.Wv=[]),this.Wv.push(e,g,b),c.resizeTile(a,b))},insertTile:function(a,c){var d=this.Af;d.kE()&&d.ZD();isNaN(c)&&(c=-1);var e=f(a),g=e[0];!1!==this._trigger("beforeInsert",null,{tile:e,index:c})&&(g.rY=c,d.xg()&&e.addClass(x),e=g.style,e.top="-1px",this.vf?e.right="-1px":e.left="-1px",this.Rn(g,c),d.Goa(g,c),b.Components.Pf(g),this.Is||(this.Is=[]),this.Is.push(a))},removeTile:function(a){var c=this.Af;c.kE()&&c.ZD();var d=f(a),e=d[0];if(b.rd.ND(e)){var g=
this.qk(!0),e=g.indexOf(e);0<e&&(this.aI=g[e-1])}!1!==this._trigger("beforeRemove",null,{tile:d})&&c.zoa(a)},Ue:function(){this.$v||this.zX||this.Af.ypa()},jla:function(a){var b=f(a),c=a.rY;delete a.rY;this.options.reorderHandle&&this.KL(b);this._trigger("insert",null,{tile:b,index:c})},Rfa:function(a){var c=f(a);this.options.reorderHandle&&this.YL(c);b.Components.Eg(a);a.parentNode.removeChild(a);this.OC(a);this._trigger("remove",null,{tile:c})},jha:function(){if(this.Is){for(var a=this.Af,b=this.Is,
c=0;c<b.length;c++)a.Opa(b[c]);this.Is=null}if(this.Wv){a=this.Wv;for(c=0;c<a.length;c+=3){var b=a[c+1],d=a[c+2],b={tile:f(a[c]),previousSizeStyleClass:b,sizeStyleClass:d};this._trigger("resize",null,b)}this.Wv=null}this.$v&&(this.xA?this.Rea():this.XG&&this.VW())},iha:function(){this.zX=!0;this.sC=null;var a=document.activeElement;a&&b.v.Uk(this.element[0],a)&&(this.sC=a)},hha:function(){this.zX=!1;var a=this.element[0];if(this.sC){var c=this.sC;this.sC=null;if(this.aI){if(c=this.aI,this.aI=null,
c&&b.v.Uk(a,c)){var a=this.qk(a,!0),d=a.indexOf(c);0<=d&&d<a.length-1?b.rd.nN(a[d+1]):b.rd.nN(c)}}else b.v.Uk(a,c)?b.rd.sy(c):b.rd.nN(a)}},FU:function(){var a=this.Af;a&&a.destroy();this.Af=null},aw:function(){var a=document.createElement("div"),b=a.style;b.width="10px";b.height="10px";b=this.element[0];b.appendChild(a);var c=!1;try{c=0<a.offsetWidth&&0<a.offsetHeight}catch(d){}b.removeChild(a);return c},qk:function(a){for(var b=this.element.children(w),c=b.length,d=[],e=0;e<c;e++){var f=b[e];if(!a||
a&&f!==this.yd){var g=f.style;g.visibility!==p&&g.display!==r&&d.push(f)}}return d},cka:function(){var a=this.qk();if(a)for(var b=0;b<a.length;b++){var c=a[b];c.sc||(c.sc=b+1)}},aaa:function(){var a=this.qk();if(a)for(var b=0;b<a.length;b++){var c=a[b];c.sc||this.Rn(c,b)}},$ja:function(){var a=this.qk(),c=this.qk();g(c);for(var d=0;d<a.length;d++){var e=a[d],f=c[d];e!=f&&(b.Components.Eg(f),e.parentNode.insertBefore(f,e),b.Components.Pf(f),e=a.indexOf(f),e>d&&(a.splice(e,1),a.splice(d,0,f)))}},Rn:function(a,
b){var c=this.qk();0>b&&(b=c.length);if(c)for(var d=0;d<c.length;d++){var e=c[d];e.sc&&e.sc>=b+1&&e.sc++}a.sc=b+1},OC:function(a){if(a.sc){var b=this.qk();if(b)for(var c=0;c<b.length;c++){var d=b[c];d.sc&&d.sc>a.sc&&d.sc--}delete a.sc}},Qn:function(a){var b=null,c=null;a||this.options.contextMenu||(b=this.element.attr("contextmenu"))&&(this.options.contextMenu="#"+b);if(a||this.options.contextMenu){b=a||this.options.contextMenu;c=f.type(b);if("function"==c){try{b=b()}catch(d){b=null}c=f.type(b)}if("string"===
c){if(b=f(b)){b.css("display",r);c=this.oa;if(!c)return;c.Ie=b;c.uh=!0}this.oa.uh&&a&&this.Uv()}}},Uv:function(){if(this.oa&&this.oa.uh&&this.options.reorderHandle){var a=this.oa.Ie,b=this;a.on("ojselect",f.proxy(this.nj,this));var c=!1;a.find("[data-oj-command]").each(function(){if(0===f(this).children("a").length){var a=f(this).attr("data-oj-command").slice(17);f(this).replaceWith(b.pi(a));f(this).addClass("oj-menu-item");c=!0}});c&&a.ojMenu("refresh");this.oa.kP=a.find("#"+v);this.oa.Om=a.find("#"+
y);this.oa.ep=a.find("#"+B)}},Sp:function(){var a=this.oa;a&&a.uh&&(a.uh=!1,a.Ie.off("ojselect"),a.Ie=null)},tia:function(a){a=c(a.originalEvent.target,this.element[0]);this.oa.tile=a;if(this.oa.uh){var b=this.oa.QD,e=!1,f=this.oa.kP;if(f){var g=f.hasClass(q),h=!1;b&&a===b&&(h=!0);h&&!g?(f.addClass(q),e=!0):!h&&g&&(f.removeClass(q),e=!0)}if(f=this.oa.Om)g=f.hasClass(q),h=!1,b&&a!==b&&a!==d(b)||(h=!0),h&&!g?(f.addClass(q),e=!0):!h&&g&&(f.removeClass(q),e=!0);if(f=this.oa.ep)g=f.hasClass(q),h=!1,b&&
b!==a&&b!==d(a)||(h=!0),h&&!g?(f.addClass(q),e=!0):!h&&g&&(f.removeClass(q),e=!0);e&&this.oa.Ie.ojMenu("refresh")}},pi:function(a){var b=M[a];a=I[a];var c=f('\x3ca href\x3d"#"\x3e\x3c/a\x3e');c.text(this.A(a));c.wrap("\x3cli id\x3d"+b+"\x3e\x3c/li\x3e");return c.parent()},yha:function(a){a&&(this.oa.QD=a)},JY:function(a,b){if(a&&this.oa.QD){var c=this.oa.QD;this.oa.QD=!1;this.Oba(c,a,b)}},Oba:function(a,b,c){var e=a.sc-1,g=f(a);if(!1!==this._trigger("beforeReorder",null,{tile:g,fromIndex:e})){this.OC(a);
var h=b.sc-1;c||h++;var k=this.element[0];c||(b=d(b));this.Rn(a,h);k.insertBefore(a,b);this.Af.Hm(!0);this._trigger("reorder",null,{tile:g,fromIndex:e,toIndex:h})}},nj:function(a,b){var c=b?b.item.attr("id"):void 0;c===v?this.yha(this.oa.tile):c===y?this.JY(this.oa.tile,!0):c===B&&this.JY(this.oa.tile,!1)},MW:function(a){var b=this.qk(!0);g(b);for(var c=b.length,d=0;d<c;d++)if(b[d]===a)return d;return-1},$_:function(){var a=this.element,b=a.children();this.KL(b);a.on("dragstart"+this.zr,this.ZW).on("dragenter"+
this.zr,this.WW).on("dragover"+this.zr,this.YW).on("dragleave"+this.zr,this.XW).on("dragend"+this.zr,this.UW).on("drop"+this.zr,this.$W)},KL:function(a){var b=this.options;a.filter(b.reorderHandle).attr(s,"true").addClass(t);a.find(b.reorderHandle).attr(s,"true").addClass(t)},I0:function(){var a=this.element,b=a.children();this.YL(b);a.off(this.zr)},YL:function(a){var b=this.options;a.filter(b.reorderHandle).removeAttr(s).removeClass(t);a.find(b.reorderHandle).removeAttr(s).removeClass(t)},Tea:function(a){if(this.options.reorderHandle&&
!this.$v){var b=c(a.target,this.element[0]);if(b){var d=this.MW(b);b.sK=d;d={tile:f(b),fromIndex:d};!1!==this._trigger("beforeReorder",null,d)&&(a=a.originalEvent,this.lI(b,a.pageX,a.pageY,a.dataTransfer))}}},Pea:function(a){a=a.originalEvent;var c=a.relatedTarget,d=this.element[0],e=!1;c?e=d!=c&&!b.v.Uk(d,c):this.UU&&(e=(c=document.elementFromPoint(a.clientX,a.clientY))&&(c==d||b.v.Uk(d,c)));e&&((this.UU=!1,this.Dn)?this.yd&&(f(this.yd).css("display",""),this.Af.Hm(!1,!0)):a.dataTransfer.dropEffect=
"none")},Sea:function(a){var b=a.originalEvent;b.dataTransfer.dropEffect="move";this.Vba(b.pageX,b.clientX,b.clientY);a.preventDefault();return!1},Qea:function(a){var c=a.originalEvent,d=c.relatedTarget;a=this.element[0];var e=!1;e=d?a!=d&&!b.v.Uk(a,d):(c=document.elementFromPoint(c.clientX,c.clientY))&&c!=a&&!b.v.Uk(a,c);e&&(this.UU=!0,this.yd&&(f(this.yd).css("display",r),this.Af.Hm(!1,!0)))},DT:function(){if(this.aB){clearTimeout(this.aB);this.aB=null;var a=this.Dn;a&&f(a).removeClass("oj-drag")}},
Oea:function(){this.DT();if(!this.ZG){var a=this.Dn;if(a&&this.yd){var c=this.yd;b.v.Uk(this.element[0],a)&&(f(c).css("display",""),this.OC(c),c.parentNode.removeChild(c),f(a).css("display",""),this.Rn(a,a.sc-1),this.Af.Hm(!1,!0));delete a.sK}this.yd=this.Dn=null;this.zA=this.xA=!1;this.kI=null;this.$v=this.XG=!1}},Uea:function(a){var b=this.Af;b.kE()&&b.ZD();this.DT();b=a.originalEvent;this.cca(this.Dn,b.pageX,b.pageY);a.stopPropagation();return!1},lI:function(a,c,d,e){this.$v=!0;this.YG=this.zA=
this.ZG=!1;this.Dn=a;var g=this.element[0],h=k(a),l=this.yd=document.createElement("div");l.sc=a.sc;l.className=h+" oj-drop";var h=l.style,m=a.style;h.top=m.top;this.vf?h.right=m.right:h.left=m.left;h=f(a).offset();g.insertBefore(l,a);this.kI=c={left:c-h.left,top:d-h.top};f(a).addClass("oj-drag");e.effectAllowed="move";e.setData("text/html",a.outerHTML);e.setDragImage(a,c.left,c.top);var n=this;this.aB=setTimeout(function(){n.YG=!0;m.display=r;f(a).removeClass("oj-drag");n.aB=null;b.Components.ap(a)},
0)},Vba:function(a,b,e){this.zA=!0;if(this.YG&&!this.xA){var g=this.element[0];b=document.elementFromPoint(b,e);if((b=c(b,g))&&b!==this.yd&&b!==this.Dn){var h=f(g).offset();e=d(this.yd);a=a-h.left>=b.offsetLeft+.5*b.offsetWidth;this.OC(this.yd);a&&!this.vf||!a&&this.vf?(a=d(b))?(this.Rn(this.yd,a.sc-1),g.insertBefore(this.yd,a)):(this.Rn(this.yd,b.sc),g.appendChild(this.yd)):(this.Rn(this.yd,b.sc-1),g.insertBefore(this.yd,b));e!==d(this.yd)&&(this.xA=this.Af.Hm(!1,!0))}}},Rea:function(){this.xA=!1},
cca:function(a,c,d){this.ZG=!0;var e=this.element[0],g=this.yd;this.yd=null;b.Components.Eg(a);e.replaceChild(a,g);b.Components.Pf(a);a.sc=g.sc;g=a.style;g.display="";b.Components.Jm(a);var h=f(e).offset(),k=this.kI;g.top=d-k.top-h.top+n;c=c-k.left-h.left;this.vf?(g.right=e.offsetWidth-(c+f(a).outerWidth(!0))+n,g.left=""):g.left=c+n;this.kI=null;this.zA?this.XG=this.Af.Hm(!1,!0):this.VW()},VW:function(){this.YG=this.zA=this.ZG=this.$v=this.XG=!1;var a=this.Dn;this.Dn=null;var b=a.sK;delete a.sK;var c=
this.MW(a),a={tile:f(a),fromIndex:b,toIndex:c};this._trigger("reorder",null,a)},getNodeBySubId:function(a){return this._super(a)},getSubIdByNode:function(a){return this._super(a)}});var n="px",p="hidden",r="none",s="draggable",q="oj-disabled",t="oj-draggable",w=".oj-masonrylayout-tile-1x1, .oj-masonrylayout-tile-1x2, .oj-masonrylayout-tile-1x3, .oj-masonrylayout-tile-2x1, .oj-masonrylayout-tile-2x2, .oj-masonrylayout-tile-2x3, .oj-masonrylayout-tile-3x1, .oj-masonrylayout-tile-3x2",x="oj-masonrylayout-tile-transition-show-from",
u="JET MasonryLayout: 'disabled' option not supported",v="ojmasonrylayoutcut",y="ojmasonrylayoutpastebefore",B="ojmasonrylayoutpasteafter",M={cut:v,"paste-before":y,"paste-after":B},I={cut:"labelCut","paste-before":"labelPasteBefore","paste-after":"labelPasteAfter"}})();a.prototype.Hm=function(a,b){var e=!1;a?(e=this.ah()?!0:!1,this.c_()):(this.xk&&this.xk(),this.pM(b),e=this.jM());return e};a.prototype.destroy=function(){for(var a=this.rc,b=this.oq(),e=0;e<b.length;e++){var f=b[e].style;this.wj?
f.right="":f.left="";f.top=""}a.removeChild(this.k0);this.w0=this.v0=this.Px=this.Xn=this.xk=this.Ft=this.st=this.io=this.wJ=this.EW=this.eh=this.sn=this.rc=this.vl=this.ek=this.oi=this.fk=this.dj=this.sq=this.qq=this.vX=this.tk=this.Nq=this.k0=null};a.prototype.resizeTile=function(a,b){var e=this.rc.querySelector(a);if(e){this.fk||(this.fk=[]);var f=this.fk;f.push(e);f.push(b);this.j_=!0;this.yx()}};a.prototype.Goa=function(a,b){var e=this.oq();this.Px&&this.Px(e);var f=null;0<=b&&b<e.length&&(f=
e[b]);this.rc.insertBefore(a,f);this.yx()};a.prototype.Opa=function(b){if(b=this.rc.querySelector(b))this.oi||(this.oi=[]),this.oi.push(b),this.PL=!0,this.rj!==a.WR&&this.rj!==a.Yz?this.yx():this.PL=!1};a.prototype.zoa=function(a){if(a=this.rc.querySelector(a))this.ek||(this.ek=[]),this.ek.push(a),this.wX=!0,this.yx()};a.prototype.ypa=function(){this.j_||this.wX||this.PL||(this.xk&&this.xk(),this.pM(!1),this.jM())};a.prototype.xg=function(){if(this.K0)return!1;this.L$||(this.g$=this.q$?!1:a.Nga(a.QG[0],
a.QG[1]),this.L$=!0);return this.g$};a.prototype.kE=function(){return null!=this.rj||null!=this.dj&&0<this.dj.length};a.prototype.ZD=function(){this.K0=!0;this.Wl(this.lM);this.Wl(this.kM);this.Wl(this.iM);this.Wl(this.qD);this.Wl(this.nM);this.Wl(this.oM);this.Wl(this.mM);this.eh(this.Nq,this.gM);this.eh(this.Nq,this.fM);a.ge(this.rc,"transitionend",this.tk);a.ge(this.rc,"webkitTransitionEnd",this.tk);for(var b=this.oq(),c=0;c<b.length;c++){var e=b[c];e.uA&&delete e.uA;a.ge(e,"transitionend",this.qq);
a.ge(e,"webkitTransitionEnd",this.qq);a.ge(e,"transitionend",this.sq);a.ge(e,"webkitTransitionEnd",this.sq)}this.tt?(clearTimeout(this.tt),this.tt=null,this.LJ(null)):this.Yt?(clearTimeout(this.Yt),this.Yt=null,this.NL()):this.rj===a.Yz||null!=this.dj&&0<this.dj.length?this.tq(null):this.rj===a.XR&&this.SJ(null);this.K0=!1};a.ida=function(b){var c=a.xw(b);return{Qf:b.offsetWidth+(a.jg(c.marginLeft)+a.jg(c.marginRight)),nh:b.offsetHeight+(a.jg(c.marginTop)+a.jg(c.marginBottom))}};a.hda=function(b){b=
a.xw(b);return{paddingLeft:a.jg(b.paddingLeft),paddingRight:a.jg(b.paddingRight),paddingTop:a.jg(b.paddingTop),paddingBottom:a.jg(b.paddingBottom),borderLeftWidth:a.jg(b.borderLeftWidth),borderRightWidth:a.jg(b.borderRightWidth),borderTopWidth:a.jg(b.borderTopWidth),borderBottomWidth:a.jg(b.borderBottomWidth)}};a.xw=function(a){var b=a.ownerDocument.defaultView,e=null;return e=b?b.getComputedStyle(a,null):a.currentStyle};a.jg=function(a){return 0<a.length&&"auto"!=a?(a=parseInt(a,10),isNaN(a)&&(a=
0),a):0};a.sf=function(a,b,e){a.addEventListener?a.addEventListener(b,e,!1):a.attachEvent&&a.attachEvent("on"+b,e)};a.ge=function(a,b,e){a.removeEventListener?a.removeEventListener(b,e,!1):a.detachEvent&&a.detachEvent("on"+b,e)};a.ZS=function(a,b){if(a)for(var e=0;e<a.length;e++)if(a[e]==b)return e;return-1};a.Nga=function(a,b){var e=["gecko",16,"trident",6,"webkit",533.1],f=e.length;if(0==f%2)for(var h=0;h<=f-2;h+=2)if(a==e[h]){if(b>=e[1+h])return!0;break}return!1};a.Hca=function(){var b=a.zi,c=
null,e=-1,f=navigator.userAgent.toLowerCase();-1!=f.indexOf("msie")||-1!=f.indexOf("trident")?(c="trident",e=b(f,/trident\/(\d+[.]\d+)/),-1==e&&(e=b(f,/msie (\d+\.\d+);/),-1==e&&(e=b(f,/msie (\d+\.\d+)b;/)),e-=4),null!=document.documentMode&&(e=Math.min(e,document.documentMode-4))):-1!=f.indexOf("applewebkit")?(c="webkit",e=b(f,/applewebkit\/(\d+([.]\d+)*)/)):-1!=f.indexOf("gecko/")&&(c="gecko",e=b(f,/rv:(\d+[.]\d+)/));return[c,e]};a.zi=function(a,b){var e=a.match(b);return e&&(e=e[1])?parseFloat(e):
-1};a.taa=function(a,b){return a.LE>b.LE?1:a.LE<b.LE?-1:a.KE>b.KE?1:a.KE<b.KE?-1:0};a.prototype.yx=function(){this.cC||(this.rj?this.ZK||(this.ZK=!0):this.cC=setTimeout(this.vX,0))};a.prototype.oq=function(){for(var a=this.rc.querySelectorAll(this.Dla),b=[],e=0;e<a.length;e++){var f=a[e],h=f.style;0<f.offsetWidth&&0<f.offsetHeight&&"hidden"!=h.visibility&&b.push(f)}return b};a.prototype.jM=function(){var b=this.dj,c=this.ah();if(this.fk){var e=this.fk;c||(c=[]);for(var f=0;f<e.length;f+=2){var h=
e[f];0>a.ZS(c,h)&&c.push(h)}}e=!1;if(!c||1>c.length){if(!b||1>b.length)this.dj=null,this.tq(null),e=!0}else this.dj=c;b=null!=c&&0<c.length;this.xg()||e||this.tq(null);return b};a.prototype.ah=function(){var b=this.rc,c=this.oq();this.Px&&this.Px(c);var e=this.uH=null;this.yn=0;this.qa=1;this.Lt=null;var f=[],h=[],k=[],l=this.wj,m=a.hda(b),n=0,p=[];this.YS=p;for(var r=0;r<c.length;r++){var s=c[r],q=this.wJ(s);(e=s.uA)&&delete s.uA;if(!this.uH){var t=q;e&&(t=document.createElement("div"),t.className=
e,t=this.wJ(t));this.uH=this.M$(s,t)}e=this.uH;this.Lt||(this.yn=Math.max(Math.floor((b.offsetWidth-m.paddingLeft-m.paddingRight-m.borderLeftWidth-m.borderRightWidth)/e.Qf),1),this.jga(this.yn,this.qa),n=this.yn);q.colSpan>n&&(n=q.colSpan);q.colSpan>this.yn&&(q.colSpan=this.yn);for(var w=!1,t=0;t<this.qa;t++){for(var x=0;x<this.yn;x++)if(this.Bca(x,t,q)){var w=s.style,u={top:w.top};l?u.right=w.right:u.left=w.left;h.push(u);this.SK(s,x,t,q,e,m);l&&k.push(x);w=!0;p.push({KE:x,LE:t,tile:s});break}if(w)break;
t===this.qa-1&&this.HS()}}e&&(b=this.Nq.style,b.width=n*e.Qf+"px",b.height=this.qa*e.nh+"px");for(r=0;r<c.length;r++)s=c[r],w=s.style,u=h[r],""!=u.top&&(l&&parseInt(w.right,10)!==parseInt(u.right,10)||!l&&parseInt(w.left,10)!==parseInt(u.left,10)||parseInt(w.top,10)!==parseInt(u.top,10))&&f.push(s);1>f.length&&(f=null);return f};a.prototype.c_=function(){var b=this.YS;this.YS=null;for(var b=b.sort(a.taa),c=this.oq(),e=0;e<c.length;e++){var f=c[e],h=b[e].tile;f!=h&&(this.w0(h),f.parentNode.insertBefore(h,
f),this.v0(h),f=a.ZS(c,h),f>e&&(c.splice(f,1),c.splice(e,0,h)))}};a.prototype.jga=function(a,b){for(var e=this.Lt=[],f=0;f<b;f++){var h=[];e.push(h);for(var k=0;k<a;k++)h[k]=!1}};a.prototype.HS=function(){this.qa++;var a=[];this.Lt.push(a);for(var b=0;b<this.yn;b++)a[b]=!1};a.prototype.Bca=function(a,b,e){var f=e.colSpan;e=e.rowSpan;for(var h=b;h<b+e;h++){h>=this.qa&&this.HS();for(var k=a;k<a+f;k++)if(k>=this.yn||this.Lt[h][k])return!1}return!0};a.prototype.SK=function(a,b,e,f,h,k){var l=f.colSpan;
f=f.rowSpan;for(var m=this.Lt,n=e;n<e+f;n++)for(var p=b;p<b+l;p++)m[n][p]=!0;a=a.style;a.top=k.paddingTop+e*h.nh+"px";this.wj?a.right=k.paddingRight+b*h.Qf+"px":a.left=k.paddingLeft+b*h.Qf+"px"};a.prototype.S9=function(a){for(var b=this.oq(),e=0;e<b.length;e++)this.sn(b[e],a)};a.prototype.Wl=function(a){for(var b=this.oq(),e=0;e<b.length;e++)this.eh(b[e],a)};a.prototype.pM=function(b){this.vY||(this.d_=b,this.xg()&&(this.S9(b?this.kM:this.lM),this.sn(this.Nq,b?this.fM:this.gM),a.sf(this.rc,"transitionend",
this.tk),a.sf(this.rc,"webkitTransitionEnd",this.tk)),this.vY=!0)};a.prototype.tq=function(b){var c=!0;if(this.dj){var e=this.dj;if(b){var f=b.target;for(b=0;b<e.length;b++)if(f===e[b]){e.splice(b,1);break}}else this.xg()||(e=this.dj=[]);0<e.length&&(c=!1)}if(c){if(this.fk&&(c=this.fk,this.fk=null,this.xg()))for(b=0;b<c.length;b+=2)this.eh(c[b],this.mM);this.d_?(this.xg()&&(this.Wl(this.kM),this.eh(this.Nq,this.fM)),this.d_=!1):this.xg()&&(this.Wl(this.lM),this.eh(this.Nq,this.gM));this.xg()&&(a.ge(this.rc,
"transitionend",this.tk),a.ge(this.rc,"webkitTransitionEnd",this.tk));this.PL=this.wX=this.j_=this.vY=!1;this.c_();this.Ft&&this.Ft();if(this.rj===a.Yz)if(this.xg()){var h=this;this.Yt=setTimeout(function(){h.NL()},0)}else this.NL();else this.rj||this.Xn&&this.Xn()}};a.prototype.M$=function(b,c){var e=a.ida(b);return{Qf:e.Qf/c.colSpan,nh:e.nh/c.rowSpan}};a.prototype.Sfa=function(){this.cC&&(clearTimeout(this.cC),this.cC=null);this.xk&&this.xk();this.rj=a.WR;if(this.ek&&this.xg()){for(var b=this.ek,
c=0;c<b.length;c++){var e=b[c];a.sf(e,"transitionend",this.qq);a.sf(e,"webkitTransitionEnd",this.qq);this.sn(e,this.iM)}var f=this;this.tt=setTimeout(function(){for(var a=0;a<b.length;a++){var c=b[a];f.eh(c,f.iM);f.sn(c,f.qD)}},0)}else this.LJ(null)};a.prototype.LJ=function(b){this.tt&&(clearTimeout(this.tt),this.tt=null);if(b){b.preventDefault();b.stopPropagation();b=b.target;this.eh(b,this.qD);a.ge(b,"transitionend",this.qq);a.ge(b,"webkitTransitionEnd",this.qq);var c=this.ek;if(c){for(var e=0;e<
c.length;e++){var f=c[e];if(f===b){c.splice(e,1);this.vl||(this.vl=[]);var h=this.vl;h.push(b);break}}1>c.length&&(this.ek=null)}}else if(!this.xg()&&(c=this.ek)){for(e=0;e<c.length;e++)f=c[e],this.vl||(this.vl=[]),h=this.vl,h.push(f);this.ek=null}if(!this.ek){if(this.vl){h=this.vl;for(e=0;e<h.length;e++)b=h[e],this.xg()&&this.eh(b,this.qD),c=b.style,this.wj?c.right="":c.left="",c.top="",this.st&&this.st(b);this.vl=null}this.rj=a.Yz;this.pM(!1);if(this.fk)for(h=this.fk,e=0;e<h.length;e+=2)b=h[e],
c=h[e+1],f=this.EW(b),this.eh(b,f),this.sn(b,c),this.xg()&&(this.sn(b,this.mM),b.uA=f);this.jM()}};a.prototype.NL=function(){this.Yt&&(clearTimeout(this.Yt),this.Yt=null);this.rj=a.XR;if(this.oi&&this.xg())for(var b=this.oi,c=0;c<b.length;c++){var e=b[c];a.sf(e,"transitionend",this.sq);a.sf(e,"webkitTransitionEnd",this.sq);this.sn(e,this.oM);this.eh(e,this.nM)}else{if(this.oi)for(b=this.oi,c=0;c<b.length;c++)e=b[c],this.eh(e,this.nM);this.SJ(null)}};a.prototype.SJ=function(b){if(b){b.preventDefault();
b.stopPropagation();b=b.target;this.eh(b,this.oM);a.ge(b,"transitionend",this.sq);a.ge(b,"webkitTransitionEnd",this.sq);var c=this.oi;if(c){for(var e=0;e<c.length;e++){var f=c[e];if(f===b){c.splice(e,1);this.io&&this.io(b);break}}1>c.length&&(this.oi=null)}}else if(!this.xg()&&(c=this.oi)){for(e=0;e<c.length;e++)f=c[e],this.io&&this.io(f);this.oi=null}this.oi||(this.rj=null,this.Xn&&this.Xn(),this.ZK&&(this.ZK=!1,this.yx()))};a.WR=1;a.Yz=2;a.XR=3});