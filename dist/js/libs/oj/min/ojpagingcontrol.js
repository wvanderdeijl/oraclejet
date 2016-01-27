/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore","jquery","ojs/ojcomponentcore","hammerjs","ojs/ojpagingtabledatasource","ojs/ojinputtext","ojs/ojjquery-hammer"],function(b,f,a,d){(function(){b.ya("oj.ojPagingControl",f.oj.baseComponent,{version:"1.0.0",defaultElement:"\x3cdiv\x3e",widgetEventPrefix:"oj",options:{data:null,overflow:"fit",pageSize:25,pageOptions:{layout:["auto"],type:"numbers",maxPageLinks:6,orientation:"horizontal"},loadMoreOptions:{maxCount:500},mode:"page",ready:null},xa:{U7:"labelAccPaging",P7:"labelAccNavFirstPage",
Q7:"labelAccNavLastPage",R7:"labelAccNavNextPage",T7:"labelAccNavPreviousPage",S7:"labelAccNavPage",V7:"labelLoadMore",W7:"labelLoadMoreMaxRows",tR:"labelNavInputPage",aG:"labelNavInputPageMax",Gqa:"labelNavInputPageSummary",xR:"msgItemRangeCurrent",yR:"msgItemRangeCurrentSingle",zR:"msgItemRangeItems",k8:"msgItemRangeOfAtLeast",j8:"msgItemRangeOfApprox",l8:"msgItemRangeOf",sS:"tipNavInputPage",r9:"tipNavPageLink",uS:"tipNavNextPage",vS:"tipNavPreviousPage",rS:"tipNavFirstPage",tS:"tipNavLastPage",
vp:"pageInvalid.summary",Bqa:"pageInvalid.detail",XQ:"dataInvalidType.summary",WQ:"dataInvalidType.detail",w7:"maxPageLinksInvalid.summary",v7:"maxPageLinksInvalid.detail"},Ca:{KG:"oj-component",jf:"oj-active",sp:"oj-clickable-icon-nocontext",vb:"oj-disabled",mf:"oj-enabled",aj:"oj-focus",Zj:"oj-hover",fd:"oj-selected"},O:{u8:"oj-pagingcontrol",NR:"oj-pagingcontrol-acc-label",OR:"oj-pagingcontrol-content",PR:"oj-pagingcontrol-loadmore",Vz:"oj-pagingcontrol-loadmore-link",kG:"oj-pagingcontrol-loadmore-max-rows",
Wz:"oj-pagingcontrol-loadmore-range",lG:"oj-pagingcontrol-loadmore-range-current",mG:"oj-pagingcontrol-loadmore-range-max",RR:"oj-pagingcontrol-nav",Xz:"oj-pagingcontrol-nav-arrow",QR:"oj-pagingcontrol-nav-arrow-section",pG:"oj-pagingcontrol-nav-page",H8:"oj-pagingcontrol-nav-page-ellipsis",w8:"oj-pagingcontrol-nav-dot",v8:"oj-pagingcontrol-nav-dot-bullet",G8:"oj-pagingcontrol-nav-page-acc-label",TR:"oj-pagingcontrol-nav-label",SR:"oj-pagingcontrol-nav-input-section",Ep:"oj-pagingcontrol-nav-input",
Fv:"oj-pagingcontrol-nav-input-max",Gv:"oj-pagingcontrol-nav-input-summary",nG:"oj-pagingcontrol-nav-input-summary-current",oG:"oj-pagingcontrol-nav-input-summary-max",VR:"oj-pagingcontrol-nav-pages-section",UR:"oj-pagingcontrol-nav-pages-links",ts:"oj-pagingcontrol-nav-first",x8:"oj-pagingcontrol-nav-first-acc-label",ws:"oj-pagingcontrol-nav-previous",I8:"oj-pagingcontrol-nav-previous-acc-label",vs:"oj-pagingcontrol-nav-next",D8:"oj-pagingcontrol-nav-next-acc-label",us:"oj-pagingcontrol-nav-last",
A8:"oj-pagingcontrol-nav-last-acc-label",y8:"oj-pagingcontrol-nav-first-icon",J8:"oj-pagingcontrol-nav-previous-icon",E8:"oj-pagingcontrol-nav-next-icon",B8:"oj-pagingcontrol-nav-last-icon",z8:"oj-pagingcontrol-nav-first-vertical-icon",K8:"oj-pagingcontrol-nav-previous-vertical-icon",F8:"oj-pagingcontrol-nav-next-vertical-icon",C8:"oj-pagingcontrol-nav-last-vertical-icon",Kp:"oj-component-icon",ii:"oj-helper-hidden-accessible"},LQ:"data-oj-pagenum",Pg:"enabled",mn:"disabled",Rg:"tabindex",bk:{gn:"loadMore",
MR:"page"},rf:{Ng:"auto",tv:"all",Lz:"input",M8:"rangeText",s8:"pages",AR:"nav"},t8:6,iA:{Iqa:"numbers",o7:"dots"},firstPage:function(){return null!=this.Ya()?this.vi(0,!1):this.mt()},previousPage:function(){if(null!=this.Ya()){var a=this.wf();if(0<a)return this.vi(a-1,!1)}return this.mt()},nextPage:function(){if(null!=this.Ya()){var a=this.wf();if(a+1<=this.Md()-1||0>this.Md())return this.vi(a+1,!1)}return this.mt()},lastPage:function(){return null!=this.Ya()&&0<this.Md()?this.vi(this.Md()-1,!1):
this.mt()},page:function(a){return null!=this.Ya()&&(this.$g()&&a<=this.Md()-1||0>this.Md()||!this.$g())?this.vi(a,!1):this.mt()},loadNext:function(){return null!=this.Ya()?this.Aga():this.mt()},refresh:function(){this._super();this.Nd()},getNodeBySubId:function(a){if(null==a)return this.element?this.element[0]:null;var b=a.subId,d=null;"oj-pagingcontrol-nav-input"===b?d=this.Ld().find("."+this.O.Ep)[0]:"oj-pagingcontrol-nav-input-max"===b?d=this.Ld().find("."+this.O.Fv)[0]:"oj-pagingcontrol-nav-input-summary"===
b?d=this.Ld().find("."+this.O.Gv)[0]:"oj-pagingcontrol-nav-input-summary-current"===b?d=this.Ld().find("."+this.O.nG)[0]:"oj-pagingcontrol-nav-input-summary-max"===b?d=this.Ld().find("."+this.O.oG)[0]:"oj-pagingcontrol-nav-first"===b?d=this.Ld().find("."+this.O.ts)[0]:"oj-pagingcontrol-nav-next"===b?d=this.Ld().find("."+this.O.vs)[0]:"oj-pagingcontrol-nav-previous"===b?d=this.Ld().find("."+this.O.ws)[0]:"oj-pagingcontrol-nav-last"===b?d=this.Ld().find("."+this.O.us)[0]:"oj-pagingcontrol-nav-page"===
b?(a=a.index,d=this.Ld().find("["+this.LQ+"\x3d"+a+"]")[0]):"oj-pagingcontrol-load-more-link"===b?d=this.Ld().find("."+this.O.Vz)[0]:"oj-pagingcontrol-load-more-range"===b?d=this.Ld().find("."+this.O.Wz)[0]:"oj-pagingcontrol-load-more-range-current"===b?d=this.Ld().find("."+this.O.lG)[0]:"oj-pagingcontrol-load-more-range-max"===b?d=this.Ld().find("."+this.O.mG)[0]:"oj-pagingcontrol-load-more-max-rows"===b&&(d=this.Ld().find("."+this.O.kG)[0]);void 0===d&&(d=null);return d},getSubIdByNode:function(a){return f(a).hasClass(this.O.Ep)?
{subId:"oj-pagingcontrol-nav-input"}:f(a).hasClass(this.O.Fv)?{subId:"oj-pagingcontrol-nav-input-max"}:f(a).hasClass(this.O.Gv)?{subId:"oj-pagingcontrol-nav-input-summary"}:f(a).hasClass(this.O.nG)?{subId:"oj-pagingcontrol-nav-input-summary-current"}:f(a).hasClass(this.O.oG)?{subId:"oj-pagingcontrol-nav-input-summary-max"}:f(a).hasClass(this.O.ts)?{subId:"oj-pagingcontrol-nav-first"}:f(a).hasClass(this.O.vs)?{subId:"oj-pagingcontrol-nav-next"}:f(a).hasClass(this.O.ws)?{subId:"oj-pagingcontrol-nav-previous"}:
f(a).hasClass(this.O.us)?{subId:"oj-pagingcontrol-nav-last"}:f(a).hasClass(this.O.pG)?{subId:"oj-pagingcontrol-nav-page",index:f(a).attr(this.LQ)}:f(a).hasClass(this.O.Vz)?{subId:"oj-pagingcontrol-load-more-link"}:f(a).hasClass(this.O.Wz)?{subId:"oj-pagingcontrol-load-more-range"}:f(a).hasClass(this.O.lG)?{subId:"oj-pagingcontrol-load-more-range-current"}:f(a).hasClass(this.O.mG)?{subId:"oj-pagingcontrol-load-more-range-max"}:f(a).hasClass(this.O.kG)?{subId:"oj-pagingcontrol-load-more-max-rows"}:
null},_ComponentCreate:function(){this._super();this.Iq();this.rw();this.vj(this.Ld());this._on(this.El)},kf:function(){this._super();this.LC();this.vi(0,!0)},_destroy:function(){this.Fk();this.rD()},rw:function(){var a=this.options;this.element.addClass(this.O.u8);this.element.addClass(this.Ca.KG);this.Vaa();this.aba();this.MY=a.mode;a.mode==this.bk.gn?(this.eU(),this.fU(),this.gU()):this.hU()},El:{"mouseup .oj-pagingcontrol-loadmore-link":function(a){this.loadNext();f(a.target).data("_mouseup",
!0);a.preventDefault()},"click .oj-pagingcontrol-loadmore-link":function(a){f(a.target).data("_mouseup")?f(a.target).data("_mouseup",!1):this.loadNext();a.preventDefault()},"click .oj-pagingcontrol-nav-dot":function(a){var d=f(a.currentTarget).attr("data-oj-pagenum"),g=this;this.page(d).then(function(){},function(a){var c=g.A(g.xa.vp);b.r.error(c+"\n"+a)});a.preventDefault()},"click .oj-pagingcontrol-nav-page":function(a){var d=f(a.currentTarget).attr("data-oj-pagenum"),g=this;this.page(d).then(function(){},
function(a){var c=g.A(g.xa.vp);b.r.error(c+"\n"+a)});a.preventDefault()},"click .oj-pagingcontrol-nav-first":function(a){if(!f(a.currentTarget).hasClass(this.Ca.vb)){var d=this;this.firstPage().then(function(){},function(a){var c=d.A(d.xa.vp);b.r.error(c+"\n"+a)})}a.preventDefault()},"click .oj-pagingcontrol-nav-previous":function(a){if(!f(a.currentTarget).hasClass(this.Ca.vb)){var d=this;this.previousPage().then(function(){},function(a){var c=d.A(d.xa.vp);b.r.error(c+"\n"+a)})}a.preventDefault()},
"click .oj-pagingcontrol-nav-next":function(a){if(!f(a.currentTarget).hasClass(this.Ca.vb)){var d=this;this.nextPage().then(function(){},function(a){var c=d.A(d.xa.vp);b.r.error(c+"\n"+a)})}a.preventDefault()},"click .oj-pagingcontrol-nav-last":function(a){if(!f(a.currentTarget).hasClass(this.Ca.vb)){var d=this;this.lastPage().then(function(){},function(a){var c=d.A(d.xa.vp);b.r.error(c+"\n"+a)})}a.preventDefault()},"keypress .oj-pagingcontrol-nav-input":function(a){13==a.which&&a.preventDefault()},
"mousedown .oj-pagingcontrol-nav-first":function(a){f(a.currentTarget).hasClass(this.Ca.vb)||f(a.target).addClass(this.Ca.jf);a.preventDefault()},"mousedown .oj-pagingcontrol-nav-previous":function(a){f(a.currentTarget).hasClass(this.Ca.vb)||f(a.target).addClass(this.Ca.jf);a.preventDefault()},"mousedown .oj-pagingcontrol-nav-next":function(a){f(a.currentTarget).hasClass(this.Ca.vb)||f(a.target).addClass(this.Ca.jf);a.preventDefault()},"mousedown .oj-pagingcontrol-nav-last":function(a){f(a.currentTarget).hasClass(this.Ca.vb)||
f(a.target).addClass(this.Ca.jf);a.preventDefault()},"mouseup .oj-pagingcontrol-nav-first":function(a){f(a.target).removeClass(this.Ca.jf);a.preventDefault()},"mouseup .oj-pagingcontrol-nav-previous":function(a){f(a.target).removeClass(this.Ca.jf);a.preventDefault()},"mouseup .oj-pagingcontrol-nav-next":function(a){f(a.target).removeClass(this.Ca.jf);a.preventDefault()},"mouseup .oj-pagingcontrol-nav-last":function(a){f(a.target).removeClass(this.Ca.jf);a.preventDefault()},"mouseleave .oj-pagingcontrol-nav-first":function(a){f(a.target).removeClass(this.Ca.jf);
a.preventDefault()},"mouseleave .oj-pagingcontrol-nav-previous":function(a){f(a.target).removeClass(this.Ca.jf);a.preventDefault()},"mouseleave .oj-pagingcontrol-nav-next":function(a){f(a.target).removeClass(this.Ca.jf);a.preventDefault()},"mouseleave .oj-pagingcontrol-nav-last":function(a){f(a.target).removeClass(this.Ca.jf);a.preventDefault()}},Nd:function(){this.i!=this.options.data&&(this.BH(),this.vi(0,!0));var a=0,b=0;null!=this.i&&(b=this.i.getStartItemIndex());null!=this.i&&0!=this.i.totalSize()&&
0<=this.i.getEndItemIndex()&&(a=this.i.getEndItemIndex()-b+1);if(this.MY!=this.options.mode)this.MY=this.options.mode,this.options.mode==this.bk.gn?this.AZ(a,b):this.BZ(a,b);else if(this.options.mode==this.bk.gn){var d=this.Ya(),f=this.kt();null!=d&&(b+a==d.totalSize()&&this.$g()||0==d.totalSize())?f.css("display","none"):this.AZ(a,b)}else this.BZ(a,b)},_setOption:function(a,b){this._superApply(arguments);this.vi(0,!0);if(this.options.mode!=this.bk.gn&&"pageOptions"==a){var d=this.ti();null!=d&&(this.uM(d),
this.rD(),d.empty());this.eaa();this.hU();this.LC()}this.Nd()},BH:function(){null!=this.i&&this.Fk();this.i=null},daa:function(){this.hH=this.gH=this.fH=null},eaa:function(){this.kH=this.jH=this.iH=null},wf:function(){var a=this.Ya(),b=0;null!=a&&(b=a.getPage());return b},Ya:function(){this.i||null==this.options.data||(this.i=this.options.data,this.Iq());return this.i},XI:function(a,b){var d=0<=b?b:0,h=f(document.createElement("span")),k=f(document.createElement("span"));this.options.mode==this.bk.gn?
k.addClass(this.O.lG):k.addClass(this.O.nG);h.append(k);var l=this.Ya();if(null!=l&&null!=l.totalSize()&&null!=a){var m=this.A(this.xa.yR,{pageFrom:d}),m=parseInt(b,10)+parseInt(a,10),d=0<m?d+1:0;if(-1!=l.totalSize()){var m=m>l.totalSize()?l.totalSize():m,m=d==m?this.A(this.xa.yR,{pageFrom:d}):this.A(this.xa.xR,{pageFrom:d,pageTo:m}),d=this.A(this.xa.l8),n=null;"atLeast"==l.totalSizeConfidence()?n=this.A(this.xa.k8):"estimate"==l.totalSizeConfidence()&&(n=this.A(this.xa.j8));var p=f(document.createElement("span"));
null==n?p.text(" "+d+" "):p.text(" "+n+" ");h.append(p);d=f(document.createElement("span"));this.options.mode==this.bk.gn?d.addClass(this.O.mG):d.addClass(this.O.oG);d.text(l.totalSize());h.append(d)}else m=this.A(this.xa.xR,{pageFrom:d,pageTo:m});l=this.A(this.xa.zR);d=f(document.createElement("span"));d.text(" "+l);h.append(d);k.text(m)}return h},eW:function(){var a=this.options.pageOptions.maxPageLinks;this.options.pageOptions.type==this.iA.o7?a=Number.MAX_VALUE:a||(a=this.t8);return a},fW:function(a){var b=
0;0<this.Md()&&this.$g()?b=this.Md():0<a?(a=this.Ya(),b=null==a||"atLeast"!=a.totalSizeConfidence()&&"estimate"!=a.totalSizeConfidence()?this.wf()+2:this.Md()+1):b=this.wf()+1;return b},mt:function(){return Promise.reject()},Md:function(){var a=this.Ya(),b=0;null!=a&&(b=a.getPageCount());return-1<=b?b:0},FJ:function(){var a=f(document.activeElement);if(a.hasClass(this.O.pG)){var b=a.attr("data-oj-pagenum"),d=this;setTimeout(function(){0<=b&&d.ti().find("div[data-oj-pagenum\x3d"+b+"]").focus()},100)}else a.hasClass(this.O.ts)?
(d=this,setTimeout(function(){d.ti().find("."+d.O.ts).focus()},100)):a.hasClass(this.O.ws)?(d=this,setTimeout(function(){d.ti().find("."+d.O.ws).focus()},100)):a.hasClass(this.O.vs)?(d=this,setTimeout(function(){d.ti().find("."+d.O.vs).focus()},100)):a.hasClass(this.O.us)?(d=this,setTimeout(function(){d.ti().find("."+d.O.us).focus()},100)):a.hasClass(this.O.Ep)&&(d=this,setTimeout(function(){d.ti().find("."+d.O.Ep).focus()},100));this.Rt()},Jea:function(a){a.page!=a.previousPage&&this.Rt()},On:function(){this.vi(0,
!1)},VB:function(){this.Rt()},IJ:function(a){this.options.mode==this.bk.gn&&this.On(a)},GJ:function(a){this.options.mode==this.bk.MR&&this.cY(a)?this.vi(this.wf(),!0):this.Rt()},HJ:function(a){0<this.Md()&&this.wf()>this.Md()-1?this.vi(this.Md()-1,!0):this.cY(a)?this.vi(this.wf(),!0):this.Rt()},wfa:function(a,d){var g=d.value;if(g!=this.wf()+1&&!isNaN(g)&&0<g){var g=Math.round(g),f=this;this.page(g-1).then(function(){},function(a){var c=f.A(f.xa.vp);b.r.error(c+"\n"+a)})}},vi:function(a,b){try{a=
parseInt(a,10)}catch(d){return Promise.reject(d)}this.Fh=0;if(b)return this.Oia(a),Promise.resolve();var f=this.Ya(),k=this;return new Promise(function(b,d){null!=f?f.setPage(a,{pageSize:k.options.pageSize}).then(function(){b(null)},function(a){d(a)}):b(null)})},Aga:function(){var a=this.Ya(),b=this.options.pageSize;this.Fh=this.Fh?this.Fh+b:b;if(!this.$g()||a.totalSize()>this.Fh&&this.$g()){var d=this;return new Promise(function(f,k){a.fetch({startIndex:d.Fh,pageSize:b}).then(function(a){f(a)},function(){k(null)})})}return Promise.resolve()},
cY:function(a){var b=this.Ya(),d=this.options.pageSize,f;for(f=0;f<a.indexes.length;f++){var k=a.indexes[f],l=b.getStartItemIndex(),m=l+d;this.options.mode==this.bk.gn&&(l=0);if(k>=l&&k<m)return!0}return!1},$g:function(){var a=this.Ya();return null!=a&&"actual"==a.totalSizeConfidence()?!0:!1},Oia:function(a){var d=this;this.Nt||(this.Fq=0,this.Nt=Promise.resolve());this.Fq++;this.gia=a;this.Nt=this.Nt.then(function(){d.Fq--;if(0==d.Fq){d.Nt=void 0;var a=d.Ya();null!=a&&a.setPage(d.gia,{pageSize:d.options.pageSize}).then(function(){},
function(a){d.Fq--;0>=d.Fq&&(d.Nt=void 0,b.r.error(a))})}},function(a){d.Fq--;0>=d.Fq&&(d.Nt=void 0,b.r.error(a))})},Rt:function(){var a=this;this.rx||(this.Ex=0,this.rx=Promise.resolve());this.Ex++;this.rx=this.rx.then(function(){a.Ex--;0==a.Ex&&(a.rx=void 0,a.Nd(),a._trigger("ready"))},function(d){a.Ex--;0==a.Ex&&(a.rx=void 0,b.r.error(d))})},AZ:function(a,b){var d=this.ti();null!=d&&d.empty();this.daa();this.eU();d=-1;null!=a&&(d=b+a);0>d||d<this.options.loadMoreOptions.maxCount?(this.fU(),this.gU(a,
b)):this.bba()},BZ:function(a,b){var d=this.options.overflow;this.Wia(a,b);this.Via();this.Uia();this.Yia(a,b);this.Xia(a,b);this.Tia(a,b);if("fit"==d){var d=this.element.width(),f=this.jJ(),k=this.kJ(),l=this.Tda(),m=this.Sda(),n=null!=f?f[0].offsetWidth:0,p=null!=k?k[0].offsetWidth:0,k=null!=l?l.width():0,r=null!=m?m.width():0,n=n+p+r;n>d?n-k<=d?l.css("display","none"):n-k-r<=d?(null!=l&&l.css("display","none"),null!=m&&m.css("display","none")):(null!=l&&l.css("display","none"),null!=m&&m.css("display",
"none"),null!=f&&f.css("display","none")):0<n&&(null!=l&&l.css("display",""),null!=m&&m.css("display",""),null!=f&&f.css("display",""))}},Tia:function(a){var b=this.jJ(),d=b.children("."+this.O.ts);if(d&&0<d.length){var d=f(d[0]),h=this.A(this.xa.rS);d.attr("title",h);0==this.wf()?(d.addClass(this.Ca.vb),d.removeClass(this.Ca.mf),d.attr("tabindex","-1")):(d.addClass(this.Ca.mf),d.removeClass(this.Ca.vb),d.attr(this.Rg,"0"))}(d=b.children("."+this.O.ws))&&0<d.length&&(d=f(d[0]),h=this.A(this.xa.vS),
d.attr("title",h),0==this.wf()?(d.addClass(this.Ca.vb),d.removeClass(this.Ca.mf),d.attr(this.Rg,"-1")):(d.addClass(this.Ca.mf),d.removeClass(this.Ca.vb),d.attr(this.Rg,"0")));(d=b.children("."+this.O.us))&&0<d.length&&(d=f(d[0]),h=this.A(this.xa.tS),d.attr("title",h),this.wf()==this.Md()-1||0>=this.Md()||!this.$g()?(d.addClass(this.Ca.vb),d.removeClass(this.Ca.mf),d.attr(this.Rg,"-1")):(d.addClass(this.Ca.mf),d.removeClass(this.Ca.vb),d.attr(this.Rg,"0")));(b=b.children("."+this.O.vs))&&0<b.length&&
(b=f(b[0]),d=this.A(this.xa.uS),b.attr("title",d),this.wf()==this.Md()-1&&this.$g()||0===this.Md()||0>this.Md()&&0===a?(b.addClass(this.Ca.vb),b.removeClass(this.Ca.mf),b.attr(this.Rg,"-1")):(b.addClass(this.Ca.mf),b.removeClass(this.Ca.vb),b.attr(this.Rg,"0")))},Xia:function(a,b){var d=this.Kl().find("."+this.O.VR);null!=d&&0<d.length&&(d=f(d.get(0)),d.empty(),this.iU(d,this.eW(),a,b))},Via:function(){var a=this.kJ();if(null!=a&&(a=a.children("."+this.O.TR),null!=a&&0<a.length)){var a=f(a[0]),b=
this.A(this.xa.tR);a.text(b)}},Uia:function(){var a=this.Rda();if(null!=a){var b=this.A(this.xa.sS);a.attr("title",b);a.ojInputText("option","title",b)}},Yia:function(a,b){var d=this.Kl().children("."+this.O.Gv);if(null!=d&&0<d.length){var h=this.XI(a,b);0<h.text().length&&(d=f(d.get(0)),d.empty(),d.append("("),d.append(h),d.append(")"))}},Wia:function(a){a=this.fW(a);if(0<this.Md()&&this.$g()){var b=this.Kl().find("."+this.O.Fv);if(null!=b&&0<b.length){var b=f(b.get(0)),d=this.A(this.xa.aG,{pageMax:a});
b.text(d)}else d=this.kJ(),null!=d&&(b=f(document.createElement("span")),b.addClass(this.O.Fv),d.append(b),d=this.A(this.xa.aG,{pageMax:a}),b.text(d))}b=this.Kl().find("."+this.O.Ep);null!=b&&0<b.length&&(b=f(b.get(0)),b.val(this.wf()+1),b.ojInputText("option","validators",[{type:"numberRange",options:{min:1,max:a}}]))},Iq:function(){var a=this.Ya();if(null!=a){this.Fk();this.Ua=[];this.Ua.push({eventType:b.bc.D.PAGE,eventHandler:this.Jea.bind(this)});this.Ua.push({eventType:b.bc.D.PAGECOUNT,eventHandler:this.VB.bind(this)});
this.Ua.push({eventType:b.ka.D.ADD,eventHandler:this.GJ.bind(this)});this.Ua.push({eventType:b.ka.D.REMOVE,eventHandler:this.HJ.bind(this)});this.Ua.push({eventType:b.ka.D.RESET,eventHandler:this.On.bind(this)});this.Ua.push({eventType:b.ka.D.REFRESH,eventHandler:this.VB.bind(this)});this.Ua.push({eventType:b.ka.D.SYNC,eventHandler:this.FJ.bind(this)});this.Ua.push({eventType:b.ka.D.SORT,eventHandler:this.IJ.bind(this)});var d,g;for(d=0;d<this.Ua.length;d++)(g=a.on(this.Ua[d].eventType,this.Ua[d].eventHandler))&&
(this.Ua[d].eventHandler=g)}},vj:function(a){if(!this.nC){var d=this;b.v.gh(a[0],function(){d.Rt()},50);this.nC=!0}},LC:function(){if(b.v.Qd()&&this.options.mode==this.bk.MR){var a=this.jJ();if(null!=a){var e=this;if("vertical"==this.options.pageOptions.orientation){var g={recognizers:[[d.Swipe,{direction:d.DIRECTION_VERTICAL}]]};this.EJ=a.al(g).on("swipeup",function(a){a.preventDefault();e.nextPage()});this.BJ=a.al(g).on("swipedown",function(a){a.preventDefault();e.previousPage()})}else g={recognizers:[[d.Swipe,
{direction:d.DIRECTION_HORIZONTAL}]]},this.CJ=a.al(g).on("swipeleft",function(a){a.preventDefault();e.nextPage()}),this.DJ=a.al(g).on("swiperight",function(a){a.preventDefault();e.previousPage()})}}},Fk:function(){var a=this.Ya();if(null!=this.Ua&&null!=a){var b;for(b=0;b<this.Ua.length;b++)a.off(this.Ua[b].eventType,this.Ua[b].eventHandler)}},uM:function(a){var b=this;a.find("*").each(function(){b.Jp(this)})},rD:function(){b.v.Qd()&&("vertical"==this.options.pageOptions.orientation?(null!=this.EJ&&
(this.EJ.off("swipeup"),this.EJ=null),null!=this.BJ&&(this.BJ.off("swipedown"),this.BJ=null)):(null!=this.CJ&&(this.CJ.off("swipeleft"),this.CJ=null),null!=this.DJ&&(this.DJ.off("swiperight"),this.DJ=null)))},Ns:function(a,b){var d=f(document.createElement("span"));d.addClass(b);d.addClass(this.O.ii);d.text(a);return d},Vaa:function(){var a=this.Ld(),b=this.A(this.xa.U7),b=this.Ns(b,this.O.NR),d=this.element.attr("id")+"_oj_pgCtrl_acc_label";b.attr("id",d);a.append(b);return b},Zaa:function(){var a=
this.A(this.xa.S7);return this.Ns(a,this.O.G8)},Waa:function(){var a=this.A(this.xa.P7);return this.Ns(a,this.O.x8)},Xaa:function(){var a=this.A(this.xa.Q7);return this.Ns(a,this.O.A8)},Yaa:function(){var a=this.A(this.xa.R7);return this.Ns(a,this.O.D8)},$aa:function(){var a=this.A(this.xa.T7);return this.Ns(a,this.O.I8)},aba:function(){var a=this.Ld(),b=f(document.createElement("div"));b.addClass(this.O.OR);var d=this.Qda().attr("id");b.attr("role","navigation");b.attr("aria-labelledby",d);a.append(b);
return b},eU:function(){var a=this.ti(),b=f(document.createElement("div"));b.addClass(this.O.PR);a.append(b);return b},fU:function(){var a=this.kt(),b=f(document.createElement("a"));b.addClass(this.O.Vz);var d=this.A(this.xa.V7);b.text(d);b.attr(this.Rg,"0");b.attr("href","#");a.append(b);return b},bba:function(){var a=this.kt(),b=f(document.createElement("span"));b.addClass(this.O.kG);var d=this.A(this.xa.W7,{maxRows:this.options.loadMoreOptions.maxCount});b.text(d);a.append(b);return b},gU:function(a,
b){var d=this.kt(),h=f(document.createElement("span"));h.addClass(this.O.Wz);var k=this.XI(a,b);h.append(k);d.append(h);return h},hU:function(a,b){var d="vertical"==this.options.pageOptions.orientation?!0:!1,h="dots"==this.options.pageOptions.type?!0:!1,k=this.options.pageOptions.layout;null==k&&(k=[this.rf.Ng]);var l=this.ti(),m=f(document.createElement("div"));m.addClass(this.O.RR);l.append(m);if(-1!=f.inArray(this.rf.Ng,k)&&!h||-1!=f.inArray(this.rf.tv,k)||-1!=f.inArray(this.rf.Lz,k)){l=f(document.createElement("div"));
l.addClass(this.O.SR);m.append(l);var n=f(document.createElement("label"));n.attr("for",this.element.attr("id")+"_nav_input");n.addClass(this.O.TR);n.addClass("oj-label-inline");var p=this.A(this.xa.tR);n.text(p);l.append(n);n=f(document.createElement("input"));n.addClass(this.O.Ep);p=this.A(this.xa.sS);this._focusable(this.element);n.attr("id",this.element.attr("id")+"_nav_input");n.attr("title",p);n.attr(this.Rg,"0");n.val(this.wf()+1);l.append(n);p=this.fW(a);if(0<this.Md()&&this.$g()){var r=f(document.createElement("span"));
r.addClass(this.O.Fv);var s=this.A(this.xa.aG,{pageMax:p});r.text(s);l.append(r)}n.ojInputText({displayOptions:{messages:["notewindow"],converterHint:["notewindow"],validatorHint:["notewindow"]},rootAttributes:{style:"width: auto; min-width: 0;"},optionChange:this.wfa.bind(this),validators:[{type:"numberRange",options:{min:1,max:p}}]})}if(-1!=f.inArray(this.rf.Ng,k)&&!h||-1!=f.inArray(this.rf.tv,k)||-1!=f.inArray(this.rf.M8,k))l=f(document.createElement("span")),l.addClass(this.O.Gv),n=this.XI(a,
b),0<n.text().length&&(l.append("("),l.append(n),l.append(")")),m.append(l);l=f(document.createElement("div"));l.addClass(this.O.QR);m.append(l);if(-1!=f.inArray(this.rf.Ng,k)&&!h||-1!=f.inArray(this.rf.tv,k)||-1!=f.inArray(this.rf.AR,k))n=f(document.createElement("a")),n.addClass(this.O.Xz),n.addClass(this.O.ts),d?n.addClass(this.O.z8):n.addClass(this.O.y8),n.addClass(this.O.Kp),n.addClass(this.Ca.sp),n.addClass(this.Ca.vb),p=this.A(this.xa.rS),this._hoverable(n),this._focusable(n),n.attr("title",
p),n.attr(this.Rg,"0"),n.attr("href","#"),n.attr("oncontextmenu","return false;"),p=this.Waa(),n.append(p),d&&n.css("display","block"),l.append(n),n=f(document.createElement("a")),n.addClass(this.O.Xz),n.addClass(this.O.ws),d?n.addClass(this.O.K8):n.addClass(this.O.J8),n.addClass(this.O.Kp),n.addClass(this.Ca.sp),n.addClass(this.Ca.vb),p=this.A(this.xa.vS),this._hoverable(n),this._focusable(n),n.attr("title",p),n.attr(this.Rg,"0"),n.attr("href","#"),n.attr("oncontextmenu","return false;"),p=this.$aa(),
n.append(p),d&&n.css("display","block"),l.append(n);if(-1!=f.inArray(this.rf.Ng,k)||-1!=f.inArray(this.rf.tv,k)||-1!=f.inArray(this.rf.s8,k))n=f(document.createElement("div")),n.addClass(this.O.VR),l.append(n),this.iU(n,this.eW(),a,b);if(-1!=f.inArray(this.rf.Ng,k)&&!h||-1!=f.inArray(this.rf.tv,k)||-1!=f.inArray(this.rf.AR,k))h=f(document.createElement("a")),h.addClass(this.O.Xz),h.addClass(this.O.vs),d?h.addClass(this.O.F8):h.addClass(this.O.E8),h.addClass(this.O.Kp),h.addClass(this.Ca.sp),h.addClass(this.Ca.vb),
k=this.A(this.xa.uS),this._hoverable(h),this._focusable(h),h.attr("title",k),h.attr(this.Rg,"0"),h.attr("href","#"),h.attr("oncontextmenu","return false;"),k=this.Yaa(),h.append(k),d&&h.css("display","block"),l.append(h),h=f(document.createElement("a")),h.addClass(this.O.Xz),h.addClass(this.O.us),d?h.addClass(this.O.C8):h.addClass(this.O.B8),h.addClass(this.O.Kp),h.addClass(this.Ca.sp),h.addClass(this.Ca.vb),k=this.A(this.xa.tS),this._hoverable(h),this._focusable(h),h.attr("title",k),h.attr(this.Rg,
"0"),h.attr("href","#"),h.attr("oncontextmenu","return false;"),k=this.Xaa(),h.append(k),d&&h.css("display","block"),l.append(h);return m},iU:function(a,b,d){if(5>b){var h=this.A(this.xa.w7);d=this.A(this.xa.v7);throw Error(h+"\n"+d);}h=f(document.createElement("div"));h.addClass(this.O.UR);a.append(h);a=this.Md();var k=this.wf(),l=b;b=[];if(0<=k){if(this.$g()&&a<=l)for(b[0]=0,d=1;d<a;d++)b[d]=d;else{b.push(0);0!=k&&b.push(k);k!=a-1&&this.$g()&&b.push(a-1);var l=l-b.length,m=k-1,n=1;for(!this.$g()||
k!=a-1&&k!=a-2||(n=0);l>n&&1<=m;)b.push(m),m--,l--;k+=1;for(-1==a&&(l=0<d?1:0);0<l&&(k<=a||-1==a);)b.push(k),k++,l--}b.sort(function(a,b){return a-b});for(d=0;d<b.length;d++)a=b[d],this.PH(h,a),d!=b.length-1&&a!=b[d+1]-1&&this.PH(h,-1);this.$g()||this.PH(h,-1)}return h},PH:function(a,b){var d=this.wf(),h=null,k="rtl"===this.dc(),l="vertical"==this.options.pageOptions.orientation?!0:!1,m="dots"==this.options.pageOptions.type?!0:!1;if(-1==b)h=f(document.createElement("span")),h.addClass(this.O.H8),
h.text("...");else{d==b?(h=f(document.createElement("div")),h.addClass(this.Ca.fd),h.addClass(this.Ca.jf),h.addClass(this.Ca.vb),h.removeClass(this.Ca.mf)):(h=f(document.createElement("a")),h.removeClass(this.Ca.fd),h.removeClass(this.Ca.jf),h.removeClass(this.Ca.vb),h.addClass(this.Ca.mf),h.attr("href","#"));h.attr("data-oj-pagenum",b);m?h.addClass(this.O.w8):h.addClass(this.O.pG);var n=this.A(this.xa.r9,{pageNum:(b+1).toString()});this._hoverable(h);this._focusable(h);h.attr("title",n);h.attr(this.Rg,
"0");h.attr("oncontextmenu","return false;");n=this.Zaa();h.append(n);n=f(document.createElement("span"));n.append((b+1).toString());m&&(n.addClass(this.O.v8),this._hoverable(n),d==b&&(n.addClass(this.Ca.fd),n.addClass(this.Ca.jf)));n.attr("dir",k?"rtl":"ltr");h.append(n);this._hoverable(h);l&&h.css("display","block")}a.append(h);return h},Qda:function(){var a=this.Ld(),b=null;a&&(b=a.find("."+this.O.NR))&&0<b.length&&(b=f(b.get(0)));return b},Ld:function(){return f(this.element)},ti:function(){if(!this.jT){var a=
this.Ld(),b=null;a&&(b=a.find("."+this.O.OR))&&0<b.length&&(this.jT=f(b.get(0)))}return this.jT},kt:function(){if(!this.fH){var a=this.ti(),b=null;a&&(b=a.children("."+this.O.PR))&&0<b.length&&(this.fH=f(b.get(0)))}return this.fH},$qa:function(){if(!this.gH){var a=this.kt(),b=null;a&&(b=a.children("."+this.O.Vz))&&0<b.length&&(this.gH=f(b.get(0)))}return this.gH},ara:function(){if(!this.hH){var a=this.kt(),b=null;a&&(b=a.children("."+this.O.Wz))&&0<b.length&&(this.hH=f(b.get(0)))}return this.hH},
Kl:function(){if(!this.iH){var a=this.ti(),b=null;a&&(b=a.children("."+this.O.RR))&&0<b.length&&(this.iH=f(b.get(0)))}return this.iH},Rda:function(){if(!this.jH){var a=this.Kl(),b=null;a&&(b=a.find("."+this.O.Ep))&&0<b.length&&(this.jH=f(b.get(0)))}return this.jH},Sda:function(){if(!this.kH){var a=this.Kl(),b=null;a&&(b=a.find("."+this.O.Gv))&&0<b.length&&(this.kH=f(b.get(0)))}return this.kH},Tda:function(){var a=this.Kl(),b=null;a&&(b=a.find("."+this.O.UR))&&0<b.length&&(b=f(b.get(0)));return b},
jJ:function(){var a=this.Kl(),b=null;if(a)if((b=a.find("."+this.O.QR))&&0<b.length)b=f(b.get(0));else return null;return b},kJ:function(){var a=this.Kl(),b=null;if(a)if((b=a.find("."+this.O.SR))&&0<b.length)b=f(b.get(0));else return null;return b}})})()});