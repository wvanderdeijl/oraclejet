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
define(["ojs/ojcore","jquery","ojs/ojeditablevalue","ojs/ojinputtext","ojs/ojvalidation","ojs/ojpopup","ojs/ojbutton"],function(b,f){function a(a){return this.options.converter.parse(a)}function d(a,c){var d=a.translations.dateTimeRange||{},e=[{category:"hint",entries:["min","max","inRange"]},{category:"messageDetail",entries:["rangeUnderflow","rangeOverflow"]},{category:"messageSummary",entries:["rangeUnderflow","rangeOverflow"]}],g={min:a.min,max:a.max,converter:c};if(!f.isEmptyObject(d))for(var h=
0,k=e.length;h<k;h++){var l=d[e[h].category];if(l){for(var x={},u=e[h].entries,v=0,y=u.length;v<y;v++)x[u[v]]=l[u[v]];g[e[h].category]=x}}return b.pa.Ir(b.bd.VALIDATOR_TYPE_DATETIMERANGE).createValidator(g)}function c(a,b){var c=a.filter("span");b?c.addClass("oj-disabled").removeClass("oj-enabled oj-default"):c.removeClass("oj-disabled").addClass("oj-enabled oj-default")}function e(a,b,c){if(!a||b===c.length)return a;var d=b+1;return e(a[c[b]],d,c)||e(a["*"],d,c)}function g(a,b){b.setHours(a.getHours());
b.setMinutes(a.getMinutes());b.setSeconds(a.getSeconds());b.setMilliseconds(a.getMilliseconds());return b}function h(a){return a.delegate(".oj-datepicker-prev-icon, .oj-datepicker-prev-icon .oj-clickable-icon-nocontext.oj-component-icon, .oj-datepicker-next-icon, .oj-datepicker-next-icon .oj-clickable-icon-nocontext.oj-component-icon, .oj-datepicker-calendar td a","mouseout",function(){f(this).removeClass("oj-hover")}).delegate(".oj-datepicker-prev-icon, .oj-datepicker-prev-icon .oj-clickable-icon-nocontext.oj-component-icon, .oj-datepicker-next-icon, .oj-datepicker-next-icon .oj-clickable-icon-nocontext.oj-component-icon, .oj-datepicker-calendar td a",
"mouseover",function(){f(this).addClass("oj-hover")}).delegate(".oj-datepicker-prev-icon, .oj-datepicker-prev-icon .oj-clickable-icon-nocontext.oj-component-icon, .oj-datepicker-next-icon, .oj-datepicker-next-icon .oj-clickable-icon-nocontext.oj-component-icon, .oj-datepicker-calendar td a","focus",function(){f(this).addClass("oj-focus")}).delegate(".oj-datepicker-prev-icon, .oj-datepicker-prev-icon .oj-clickable-icon-nocontext.oj-component-icon, .oj-datepicker-next-icon, .oj-datepicker-next-icon .oj-clickable-icon-nocontext.oj-component-icon, .oj-datepicker-calendar td a",
"blur",function(){f(this).removeClass("oj-focus")})}function k(a){var b=f(a.element[0]).parent().parent();a.Np(b)}var l=b.pa.em(b.Rj.CONVERTER_TYPE_DATETIME).createConverter({year:"numeric"});b.ya("oj.ojInputDate",f.oj.inputBase,{version:"1.0.0",widgetEventPrefix:"oj",_CLASS_NAMES:"oj-inputdatetime-input",_WIDGET_CLASS_NAMES:"oj-inputdatetime-date-only oj-component oj-inputdatetime",_ELEMENT_TRIGGER_WRAPPER_CLASS_NAMES:"",_INPUT_HELPER_KEY:"inputHelp",_ATTR_CHECK:[{attr:"type",setMandatory:"text"}],
_GET_INIT_OPTIONS_PROPS:[{V:"disabled",xc:!0},{V:"pattern"},{V:"title"},{V:"placeholder"},{V:"value",Ye:a},{V:"required",Ye:!0,xc:!0},{V:"readonly",option:"readOnly",xc:!0},{V:"min",Ye:a},{V:"max",Ye:a}],IG:"oj-inputdatetime-input-trigger",HG:"oj-inputdatetime-calendar-icon",IQ:"oj-datepicker-current-day",OQ:"oj-datepicker-days-cell-over",yS:"oj-datepicker-unselectable",NQ:"oj-datepicker-desc",PF:"oj-datepicker-calendar",b8:"oj-datepicker-div",J7:"oj-datepicker-inline",ZF:" oj-inputdatetime-input-container",
K7:" oj-inputdatetime-inline",options:{datePicker:{footerLayout:"",changeMonth:"select",changeYear:"select",currentMonthPos:0,daysOutsideMonth:"hidden",numberOfMonths:1,showOn:"image",stepMonths:"numberOfMonths",stepBigMonths:12,weekDisplay:"none",yearRange:"c-10:c+10"},converter:b.pa.em(b.Rj.CONVERTER_TYPE_DATETIME).createConverter({day:"2-digit",month:"2-digit",year:"2-digit"}),max:void 0,min:void 0,dayFormatter:null},Nz:function(){this.kd=null;this.dK=!1;this.ex=4;this.En=this.mk=this.Cl=this.gj=
this.lk=0;this.qw={};var a=this.element[0].nodeName.toLowerCase();this.be="div"===a||"span"===a;this.Kd=h(f("\x3cdiv id\x3d'"+this.dn(this.b8)+"' role\x3d'region' aria-describedby\x3d'"+this.dn(this.NQ)+"' class\x3d'oj-datepicker-content'\x3e\x3c/div\x3e"));f("body").append(this.Kd);if(this.be)this._WIDGET_CLASS_NAMES+=this.K7,this._CLASS_NAMES="";else{this._ELEMENT_TRIGGER_WRAPPER_CLASS_NAMES+=this.ZF;var b=this;this.PK=this.Kd.ojPopup({initialFocus:"none",modality:"modeless",open:function(){b.Kd.find(".oj-datepicker-calendar").focus()},
rootAttributes:{"class":"oj-datepicker-popup"}})}},_ComponentCreate:function(){this.Nz();var a=this._super();this.options.dayMetaData&&(this.options.dayFormatter=function(a){return function(b){return e(a,0,[b.fullYear,b.month,b.date])}}(this.options.dayMetaData));this.TC(this.yB());this.be?(this.element.append(this.Kd),this.element.addClass(this.J7),this.Kd.css("display","block")):this.VG();k(this);return a},kf:function(){var a=this._superApply(arguments);this.KU(this.options.disabled);return a},
_setOption:function(a,c,d){var g=null;if("value"===a)return c||(c=null),g=this._super(a,c,d),this.TC(c),this.Al()&&this.po(!0),g;if("dayMetaData"===a)this._setOption("dayFormatter",function(a){return e(c,0,[a.fullYear,a.month,a.date])},d);else return g=this._super(a,c,d),"disabled"===a?this.KU(c):"max"===a||"min"===a?(this.qw[b.bd.VALIDATOR_TYPE_DATETIMERANGE]=this.UB("min"),this.$r()):"readOnly"===a&&c?this.hide():"dayFormatter"===a&&(this.qw[b.bd.VALIDATOR_TYPE_DATERESTRICTION]=this.UB("dayFormatter"),
this.$r()),"datePicker"===a&&"currentMonthPos"===d.subkey&&this.TC(this.options.value),d={max:!0,min:!0,dayFormatter:!0,datePicker:!0,translations:!0},this.Al()&&a in d&&this.po(),g},LF:function(){return this.kd},_destroy:function(){var a=this._super();this.element.off("focus");this.kd&&this.kd.remove();this.be&&(this.element.removeProp("disabled"),this.element.removeProp("readonly"));this.Kd.remove();return a},Al:function(){return this.be||this.PK.ojPopup("isOpen")},VG:function(){var a=this.options.datePicker.showOn,
b=f("\x3cspan\x3e").addClass(this.IG);if("focus"===a)this.element.on("focus",f.proxy(this.show,this));a=f("\x3cspan title\x3d'"+this.GI()+"'/\x3e").addClass(this.HG+" oj-clickable-icon-nocontext oj-component-icon");b.append(a);var c=this;a.on("click",function(){c.Al()?c.hide():c.show();return!1});this.Np(a);this._hoverable(a);this.qM=a;this.kd=b;this.element.after(b)},Mba:function(a){var b;b=!1;var c=f.ui.keyCode,d=this.wj;if(this.Al())switch(a.keyCode){case 84:a.altKey&&a.ctrlKey&&(this.Kd.find(".oj-datepicker-current").focus(),
b=!0);break;case c.TAB:this.hide();break;case c.ENTER:return b=f("td."+this.OQ+":not(."+this.IQ+")",this.Kd),b[0]&&this.x_(this.gj,this.mk,b[0],a),a.preventDefault(),a.stopPropagation(),!1;case c.ESCAPE:this.hide();this.element.focus();b=!0;break;case c.PAGE_UP:a.ctrlKey&&a.altKey?this.tf(-this.options.datePicker.stepBigMonths,"M",!0):a.altKey?this.tf(-1,"Y",!0):this.tf(-this.Mw(),"M",!0);b=!0;break;case c.PAGE_DOWN:a.ctrlKey&&a.altKey?this.tf(+this.options.datePicker.stepBigMonths,"M",!0):a.altKey?
this.tf(1,"Y",!0):this.tf(+this.Mw(),"M",!0);b=!0;break;case c.END:this.lk=this.Aw(this.mk,this.gj);this.po(!0);b=!0;break;case c.HOME:this.lk=1;this.po(!0);b=!0;break;case c.LEFT:this.tf(d?1:-1,"D",!0);a.originalEvent.altKey&&this.tf(a.ctrlKey?-this.options.datePicker.stepBigMonths:-this.Mw(),"M",!0);b=!0;break;case c.UP:this.tf(-7,"D",!0);b=!0;break;case c.RIGHT:this.tf(d?-1:1,"D",!0);a.originalEvent.altKey&&this.tf(a.ctrlKey?+this.options.datePicker.stepBigMonths:+this.Mw(),"M",!0);b=!0;break;
case c.DOWN:this.tf(7,"D",!0),b=!0}else a.keyCode===c.HOME&&a.ctrlKey&&(this.show(),b=!0);b&&(a.preventDefault(),a.stopPropagation())},po:function(a){this.ex=4;var b=this.Fca();this.Kd.empty().append(b.html);var c=f("button",this.Kd);0<c.length&&(1===c.length&&f(c[0]).addClass("oj-datepicker-single-button"),f.each(c,function(a,b){f(b).ojButton()}));this.m$();b.W1&&this.Kd.find(".oj-datepicker-calendar").attr("aria-activedescendant",b.W1);b=this.hJ();c=b[1];this.Kd.removeClass("oj-datepicker-multi-2 oj-datepicker-multi-3 oj-datepicker-multi-4").width("");
1<c&&this.Kd.addClass("oj-datepicker-multi-"+c).css("width",17*c+"em");this.Kd[(1!==b[0]||1!==b[1]?"add":"remove")+"Class"]("oj-datepicker-multi");this.Al()&&this.element.is(":visible")&&!this.element.is(":disabled")&&(a?(a=this.Kd.find(".oj-datepicker-calendar"),a[0]!==document.activeElement&&a.focus()):this.be||this.element[0]===document.activeElement||this.element.focus())},tf:function(a,b,c){this.options.disabled||(this.MS(a+("M"===b?this.options.datePicker.currentMonthPos:0),b),this.po(c))},
rea:function(){var a=new Date;this.lk=a.getDate();this.Cl=this.gj=a.getMonth();this.En=this.mk=a.getFullYear();this.tf()},y_:function(a,c){var d=parseInt(a.options[a.selectedIndex].value,10);"M"===c?this.gj=this.Cl=d:this.mk=this.En=d;f("#"+this.dn(this.PF)).html(this.Yj(this.options.monthWide[this.Cl])+" "+l.format(b.qb.dateToLocalIso(new Date(this.En,this.Cl,1))));this.tf(0,0,!0)},x_:function(a,c,d,e){f(d).hasClass(this.yS)||this.options.disabled||(this.lk=f("a",d).html(),this.gj=a,this.mk=c,a=
b.qb,(c=this.options.value?a.isoToLocalDate(this.options.value):null)?(d=new Date(this.mk,this.gj,this.lk),g(c,d),c=d):c=new Date(this.mk,this.gj,this.lk),a=a.dateToLocalIso(c),c=this.Sc().format(a),this.ni(c),this.gc(a,e),this.hide())},cI:function(a,c){return a?"string"===typeof a?b.qb.isoToLocalDate(a):new Date(a.getTime()):c},TC:function(a){a=this.cI(a,this.OW());this.lk=a.getDate();this.Cl=this.gj=a.getMonth();this.En=this.mk=a.getFullYear();this.MS()},Mw:function(){var a=this.options.datePicker.stepMonths;
return f.isNumeric(a)?a:this.options.datePicker.numberOfMonths},m$:function(){var a=this.Mw(),b=this;this.Kd.find("[data-handler]").map(function(){f(this).bind(this.getAttribute("data-event"),{prev:function(c){b.tf(-a,"M",!0);c.preventDefault()},next:function(c){b.tf(+a,"M",!0);c.preventDefault()},today:function(a){if("keyup"===a.type&&13===a.keyCode||"click"===a.type)b.rea(),a.preventDefault(),a.stopPropagation()},selectDay:function(a){b.x_(+this.getAttribute("data-month"),+this.getAttribute("data-year"),
this,a);return!1},selectMonth:function(){b.y_(this,"M");return!1},selectYear:function(){b.y_(this,"Y");return!1},calendarKey:function(a){b.Mba(a)}}[this.getAttribute("data-handler")])})},eia:function(a,b,c){b=b?new Date(b.getFullYear(),b.getMonth(),b.getDate()):null;c=c?new Date(c.getFullYear(),c.getMonth(),c.getDate()):null;return null!==b&&a<b||null!==c&&a>c},Fca:function(){var a,c,d,e,g,f,h=this.options.dayWide,k=this.options.dayNarrow,l=this.options.monthWide,u=this.options.monthAbbreviated,v=
this.options.firstDayOfWeek,y,B,M,I,F,D,A,z="",E,J,C,N,Q,H,L,G,O=new Date,O=new Date(O.getFullYear(),O.getMonth(),O.getDate()),P=this.wj;f=this.options.datePicker.footerLayout;var W=this.hJ(),K=this.options.datePicker.currentMonthPos,V=this.options.dayFormatter;G=null;var Z=1!==W[0]||1!==W[1],X=this.HB("min"),R=this.HB("max"),K=this.Cl-K,U=this.En,ha=new Date(this.mk,this.gj,this.lk),Y=new Date(this.yB()),T=Y.getDate(),aa=Y.getMonth(),fa=Y.getFullYear(),ba=this.options.disabled,S=this.Yj(this.A("weekText")),
ca=b.qb;Y.setHours(0);Y.setMinutes(0);Y.setSeconds(0);Y.setMilliseconds(0);0>K&&(K+=12,U--);if(X)for(a=new Date(X.getFullYear(),X.getMonth(),X.getDate()),a=R&&R<a?R:a;new Date(U,K,this.Aw(U,K))<a;)K++,11<K&&(K=0,U++);if(R)for(a=new Date(R.getFullYear(),R.getMonth()-W[0]*W[1]+1,R.getDate()),a=X&&a<X?X:a;new Date(U,K,1)>a;)K--,0>K&&(K=11,U--);this.Cl=K;this.En=U;a=this.Yj(this.A("prevText"));a=this.uT(-1,U,K)&&!ba?"\x3ca href\x3d'#' class\x3d'oj-datepicker-prev-icon oj-enabled oj-default oj-component-icon oj-clickable-icon-nocontext' data-handler\x3d'prev' data-event\x3d'click' title\x3d'"+
a+"'\x3e\x3c/a\x3e":"\x3ca class\x3d'oj-datepicker-prev-icon oj-disabled oj-component-icon oj-clickable-icon-nocontext' title\x3d'"+a+"'\x3e\x3c/a\x3e";c=this.Yj(this.A("nextText"));c=this.uT(1,U,K)&&!ba?"\x3ca href\x3d'#' class\x3d'oj-datepicker-next-icon oj-enabled oj-default oj-component-icon oj-clickable-icon-nocontext' data-handler\x3d'next' data-event\x3d'click' title\x3d'"+c+"'\x3e\x3c/a\x3e":"\x3ca class\x3d'oj-datepicker-next-icon oj-disabled oj-component-icon oj-clickable-icon-nocontext' title\x3d'"+
c+"'\x3e\x3c/a\x3e";d=this.Yj(this.A("currentText"));g="";e="\x3cbutton type\x3d'button' class\x3d'oj-datepicker-current oj-priority-secondary' data-handler\x3d'today' data-event\x3d'click keyup'\x3e"+d+"\x3c/button\x3e";if(1<f.length){d=0;f=[{index:f.indexOf("today"),content:this.ZX(O)?e:""}];for(f.sort(function(a,b){return a.index-b.index});d<f.length&&0>f[d].index;)d++;for(;d<f.length;)g+=f[d++].content;0<g.length&&(g="\x3cdiv class\x3d'oj-datepicker-buttonpane'\x3e"+g+"\x3c/div\x3e")}f=this.options.datePicker.weekDisplay;
d=this.options.datePicker.daysOutsideMonth;e="";y="all";for(B=0;B<W[0];B++){M="";this.ex=4;for(I=0;I<W[1];I++){y="all";E="";if(Z){E+="\x3cdiv class\x3d'oj-datepicker-group";if(1<W[1])switch(I){case 0:E+=" oj-datepicker-group-first";y=P?"right":"left";break;case W[1]-1:E+=" oj-datepicker-group-last";y=P?"left":"right";break;default:E+=" oj-datepicker-group-middle",y=""}E+="'\x3e"}E+="\x3cdiv class\x3d'oj-datepicker-header"+(ba?" oj-disabled ":" oj-enabled oj-default ")+"'\x3e"+(/all|left/.test(y)&&
0===B?P?c:a:"")+(/all|right/.test(y)&&0===B?P?a:c:"")+this.Gca(K,U,X,R,0<B||0<I,l,u,Z)+"\x3c/div\x3e\x3ctable class\x3d'oj-datepicker-calendar"+(ba?" oj-disabled ":" oj-enabled oj-default ")+"' tabindex\x3d-1 data-handler\x3d'calendarKey' data-event\x3d'keydown' aria-readonly\x3d'true' role\x3d'grid' aria-labelledby\x3d'"+this.dn(this.PF)+"'\x3e\x3cthead role\x3d'presentation'\x3e\x3ctr role\x3d'row'\x3e";J="number"===f?"\x3cth class\x3d'oj-datepicker-week-col'\x3e"+this.Yj(this.A("weekHeader"))+
"\x3c/th\x3e":"";for(y=0;7>y;y++)C=(y+parseInt(v,10))%7,J+="\x3cth role\x3d'columnheader' aria-label\x3d'"+h[C]+"'"+(5<=(y+v+6)%7?" class\x3d'oj-datepicker-week-end'":"")+"\x3e\x3cspan title\x3d'"+h[C]+"'\x3e"+k[C]+"\x3c/span\x3e\x3c/th\x3e";E+=J+"\x3c/tr\x3e\x3c/thead\x3e\x3ctbody role\x3d'presentation'\x3e";J=this.Aw(U,K);U===fa&&K===aa&&(T=Math.min(T,J));y=(this.kda(U,K)-v+7)%7;J=Math.ceil((y+J)/7);this.ex=J=Z?this.ex>J?this.ex:J:J;C=new Date(U,K,1-y);for(N=0;N<J;N++){E+="\x3ctr role\x3d'row'\x3e";
y=this.Sc().yo(ca.dateToLocalIso(C));Q="none"===f?"":"\x3ctd class\x3d'oj-datepicker-week-col' role\x3d'rowheader' aria-label\x3d'"+S+" "+y+"'\x3e"+y+"\x3c/td\x3e";for(y=0;7>y;y++){L=C.getMonth()!==K;F=C.getTime()===Y.getTime();D="oj-dp-"+this.uuid+"-"+N+"-"+y+"-"+B+"-"+I;(A=C.getTime()===ha.getTime()&&K===this.gj)&&(z=D);H=[!0,""];G=C.getFullYear();var da=C.getMonth(),ga=C.getDate();V&&(G=V({fullYear:G,month:da+1,date:ga}))&&(H=[!G.disabled,G.className||""],G.tooltip&&H.push(G.tooltip));da=C.getTime()===
Y.getTime();G=L&&"selectable"!==d||!H[0]||this.eia(C,X,R);Q+="\x3ctd role\x3d'gridcell' aria-disabled\x3d'"+!!G+"' aria-selected\x3d'"+F+"' id\x3d'"+D+"' class\x3d'"+(5<=(y+v+6)%7?" oj-datepicker-week-end":"")+(L?" oj-datepicker-other-month":"")+(A?" "+this.OQ:"")+(G||ba?" "+this.yS+" oj-disabled":" oj-enabled ")+(L&&"hidden"===d?"":" "+H[1]+(F?" "+this.IQ:"")+(C.getTime()===O.getTime()?" oj-datepicker-today":""))+"'"+(L&&"hidden"===d||!H[2]?"":" title\x3d'"+H[2].replace(/'/g,"\x26#39;")+"'")+(G?
"":" data-handler\x3d'selectDay' data-event\x3d'click' data-month\x3d'"+C.getMonth()+"' data-year\x3d'"+C.getFullYear()+"'")+"\x3e"+(L&&"hidden"===d?"\x26#xa0;":G||ba?"\x3cspan class\x3d'oj-disabled'\x3e"+C.getDate()+"\x3c/span\x3e":"\x3ca class\x3d'oj-enabled"+(da?" oj-selected":"")+(L?" oj-priority-secondary":"")+"' "+(da||A?"":"tabindex\x3d'-1' ")+" href\x3d'#'\x3e"+C.getDate()+"\x3c/a\x3e")+"\x3c/td\x3e";C.setDate(C.getDate()+1)}E+=Q+"\x3c/tr\x3e"}K++;11<K&&(K=0,U++);E+="\x3c/tbody\x3e\x3c/table\x3e"+
(Z?"\x3c/div\x3e"+(0<W[0]&&I===W[1]-1?"\x3cdiv class\x3d'oj-datepicker-row-break'\x3e\x3c/div\x3e":""):"");M+=E}e+=M}return{html:e+g,W1:z}},Gca:function(a,c,d,e,g,f,h,k){var x,u,v,y,B=this.options.datePicker.changeMonth,M=this.options.datePicker.changeYear,I=b.Ja.D3()?"before":"after",F="\x3cdiv class\x3d'oj-datepicker-title' role\x3d'header'\x3e",D="",A=this.options.disabled,z=b.qb;if(g||"none"===B)D+="\x3cspan class\x3d'oj-datepicker-month'\x3e"+f[a]+"\x3c/span\x3e";else{x=d&&d.getFullYear()===
c;u=e&&e.getFullYear()===c;D+="\x3cselect tabindex\x3d'-1' class\x3d'oj-datepicker-month "+(A?"oj-disabled' disabled":"oj-enabled'")+" data-handler\x3d'selectMonth' data-event\x3d'change' role\x3d'listbox'\x3e";for(v=0;12>v;v++)(!x||v>=d.getMonth())&&(!u||v<=e.getMonth())&&(D+="\x3coption role\x3d'option' value\x3d'"+v+"' aria-selected\x3d'"+(v===a?"true' selected\x3d'selected'":"false'")+"\x3e"+h[v]+"\x3c/option\x3e");D+="\x3c/select\x3e"}"before"===I&&(F+=D+(g||"select"!==B||"select"!==M?"\x26#xa0;":
""));if(!this.Mm)if(this.Mm="",g||"none"===M)F+="\x3cspan class\x3d'oj-datepicker-year'\x3e"+l.format(z.dateToLocalIso(new Date(c,a,1)))+"\x3c/span\x3e";else{x=this.options.datePicker.yearRange.split(":");y=(new Date).getFullYear();u=function(a){a=a.match(/c[+\-].*/)?c+parseInt(a.substring(1),10):a.match(/[+\-].*/)?y+parseInt(a,10):parseInt(a,10);return isNaN(a)?y:a};h=u(x[0]);x=Math.max(h,u(x[1]||""));h=d?Math.max(h,d.getFullYear()):h;x=e?Math.min(x,e.getFullYear()):x;for(this.Mm+="\x3cselect tabindex\x3d'-1' class\x3d'oj-datepicker-year "+
(A?"oj-disabled' disabled":"oj-enabled'")+" data-handler\x3d'selectYear' data-event\x3d'change' role\x3d'listbox'\x3e";h<=x;h++)this.Mm+="\x3coption role\x3d'option' value\x3d'"+h+"' aria-selected\x3d'"+(h===c?"true' selected\x3d'selected'":"false'")+"\x3e"+l.format(z.dateToLocalIso(new Date(h,a,1)))+"\x3c/option\x3e";this.Mm+="\x3c/select\x3e";F+=this.Mm;this.Mm=null}"after"===I&&(F+=(g||"select"!==B||"select"!==M?"\x26#xa0;":"")+D);k&&g||(F+="\x3cspan class\x3d'oj-helper-hidden-accessible' id\x3d'"+
this.dn(this.PF)+"'\x3e"+f[a]+" "+l.format(z.dateToLocalIso(new Date(c,a,1)))+"\x3c/span\x3e",F+="\x3cspan class\x3d'oj-helper-hidden-accessible' id\x3d'"+this.dn(this.NQ)+"'\x3e"+this.Yj(this.A("datePicker"))+"\x3c/span\x3e");return F+"\x3c/div\x3e"},MS:function(a,b){var c=this.En+("Y"===b?a:0),d=this.Cl+("M"===b?a:0),e=Math.min(this.lk,this.Aw(c,d))+("D"===b?a:0),c=new Date(c,d,e);this.lk=c.getDate();this.Cl=this.gj=c.getMonth();this.En=this.mk=c.getFullYear()},hJ:function(){var a=this.options.datePicker.numberOfMonths,
a="string"===typeof a?parseInt(a,10):a;return null==a?[1,1]:"number"===typeof a?[1,a]:a},HB:function(a){return this.cI(this.options[a],null)},Aw:function(a,b){return 32-(new Date(a,b,32)).getDate()},kda:function(a,b){return(new Date(a,b,1)).getDay()},uT:function(a,b,c){var d=this.hJ();b=new Date(b,c+(0>a?a:d[0]*d[1]),1);0>a&&b.setDate(this.Aw(b.getFullYear(),b.getMonth()));return this.ZX(b)},ZX:function(a){var b,c,d=this.HB("min"),e=this.HB("max"),g=null,f=null;if(b=this.options.datePicker.yearRange)b=
b.split(":"),c=(new Date).getFullYear(),g=parseInt(b[0],10),f=parseInt(b[1],10),b[0].match(/[+\-].*/)&&(g+=c),b[1].match(/[+\-].*/)&&(f+=c);return(!d||a.getTime()>=d.getTime())&&(!e||a.getTime()<=e.getTime())&&(!g||a.getFullYear()>=g)&&(!f||a.getFullYear()<=f)},GI:function(){return this.Yj(this.A("tooltipCalendar"+(this.options.disabled?"Disabled":"")))},KU:function(a){this.kd&&(c(this.kd.children(),a),this.kd.find("."+this.HG).attr("title",this.GI()));a&&this.hide();this.be&&this.po()},KF:function(){this.be||
this._superApply(arguments)},JK:function(a){this.be||this._superApply(arguments)},BC:function(a){if(!this.be){this._superApply(arguments);var b=f.ui.keyCode,c=!1;if(this.Al())switch(a.keyCode){case b.TAB:this.hide();break;case b.ESCAPE:this.hide();c=!0;break;case b.UP:case b.DOWN:this.Kd.find(".oj-datepicker-calendar").focus(),c=!0}else switch(a.keyCode){case b.UP:case b.DOWN:this.gc(this.dg(),a),this.show(),c=!0}if(c)return a.preventDefault(),a.stopPropagation(),!1}},ni:function(a){this.be||this._superApply(arguments);
this.TC(this.yB());this.Al()&&this.po(!0)},Sc:function(){return this.options.converter?this._superApply(arguments):f.oj.ojInputDate.prototype.options.converter},ls:function(){return this.options.value||""},_GetDefaultStyleClass:function(){return"oj-inputdate"},Bv:function(){var a=this._superApply(arguments);if(null!=this.options.min||null!=this.options.max)this.qw[b.bd.VALIDATOR_TYPE_DATETIMERANGE]=this.UB("min");null!=this.options.dayFormatter&&(this.qw[b.bd.VALIDATOR_TYPE_DATERESTRICTION]=this.UB("dayFormatter"));
return f.extend(this.qw,a)},ki:function(){this.hide()},ol:function(){this.hide()},UB:function(a){var c=null;"min"===a||"max"===a?c=d(this.options,this.Sc()):"dayFormatter"===a&&(a={dayFormatter:this.options.dayFormatter,converter:this.Sc()},f.extend(a,this.options.translations.dateRestriction||{}),c=b.pa.Ir(b.bd.VALIDATOR_TYPE_DATERESTRICTION).createValidator(a));return c},OW:function(){var a=new Date;a.setHours(0);a.setMinutes(0);a.setSeconds(0);a.setMilliseconds(0);return a},yB:function(){return this.cI(this.options.value,
this.OW())},getNodeBySubId:function(a){var b=null,c=a&&a.subId,d=this.Kd;if(c)switch(c){case "oj-datepicker-content":b=d[0];break;case "oj-inputdatetime-calendar-icon":b=f(".oj-inputdatetime-calendar-icon",this.kd)[0];break;case "oj-datepicker-prev-icon":b=f(".oj-datepicker-prev-icon",d)[0];break;case "oj-datepicker-next-icon":b=f(".oj-datepicker-next-icon",d)[0];break;case "oj-datepicker-month":b=f(".oj-datepicker-month",d)[0];break;case "oj-datepicker-year":b=f(".oj-datepicker-year",d)[0];break;
case "oj-datepicker-current":b=f(".oj-datepicker-current",d)[0];break;case "oj-inputdatetime-date-input":b=this.be?null:this.element[0];break;default:b=null}return b||this._superApply(arguments)},getSubIdByNode:function(a){var b=this.Kd,c=null,d=[{selector:".oj-inputdatetime-calendar-icon",ele:this.kd},{selector:".oj-datepicker-prev-icon",ele:b},{selector:".oj-datepicker-next-icon",ele:b},{selector:".oj-datepicker-month",ele:b},{selector:".oj-datepicker-year",ele:b},{selector:".oj-datepicker-current",
ele:b}];if(a===b[0])return"oj-datepicker-content";if(!this.be&&a===this.element[0])return"oj-inputdatetime-date-input";for(var b=0,e=d.length;b<e;b++){var g=d[b],h=f(g.selector,g.ele);if(1===h.length&&h[0]===a){c=g.selector.substr(1);break}}return c||this._superApply(arguments)},hide:function(){this.Al()&&!this.be&&(this.PK.ojPopup("close"),"focus"===this.options.datePicker.showOn&&(this.dK=!0),this.element.focus());return this},refresh:function(){this.kd&&this.kd.find("."+this.HG).attr("title",this.GI());
return this._superApply(arguments)||this},show:function(){if(!(this.Al()||this.options.disabled||this.options.readOnly))if(this.dK)this.dK=!1;else{var a=this.wj;this.Kd.empty();this.po();a=b.pc.Ag({my:"start top",at:"start bottom",of:this.element,collision:"flipfit flipfit"},a);this.PK.ojPopup("open",this.qM,a);return this}}});b.Components.Gm({ojInputDate:{firstDayOfWeek:b.Components.kh(function(){return b.Ja.C2()}),dayWide:b.Components.kh(function(){return b.Ja.vy("wide")}),dayNarrow:b.Components.kh(function(){return b.Ja.vy("narrow")}),
monthWide:b.Components.kh(function(){return b.Ja.xy("wide")}),monthAbbreviated:b.Components.kh(function(){return b.Ja.xy("abbreviated")}),datePicker:b.Components.kh(function(){return b.ye.Qk("inputDate").datePicker})}});b.ya("oj.ojInputTime",f.oj.inputBase,{version:"1.0.0",widgetEventPrefix:"oj",_CLASS_NAMES:"oj-inputdatetime-input",_WIDGET_CLASS_NAMES:"oj-inputdatetime-time-only oj-component oj-inputdatetime",ZF:"oj-inputdatetime-input-container",_ELEMENT_TRIGGER_WRAPPER_CLASS_NAMES:"",_INPUT_HELPER_KEY:"inputHelp",
_ATTR_CHECK:[{attr:"type",setMandatory:"text"}],_GET_INIT_OPTIONS_PROPS:[{V:"disabled",xc:!0},{V:"pattern"},{V:"title"},{V:"placeholder"},{V:"value",Ye:a},{V:"required",Ye:!0,xc:!0},{V:"readonly",option:"readOnly",xc:!0},{V:"min",Ye:a},{V:"max",Ye:a}],q9:"ojInputTime",IG:"oj-inputdatetime-input-trigger",JG:"oj-inputdatetime-time-icon",options:{converter:b.pa.em(b.Rj.CONVERTER_TYPE_DATETIME).createConverter({hour:"2-digit",hour12:!0,minute:"2-digit"}),max:void 0,min:void 0,datePickerComp:null,timePicker:{timeIncrement:"00:30:00:00"}},
Wd:function(a,c){this._super(a,c);null===this.options.datePickerComp&&b.ue.Tk(this._GET_INIT_OPTIONS_PROPS,c,this)},Nz:function(){this.$L={};this.zl=this.options.datePickerComp;this.ng=f("\x3cdiv id\x3d'"+this.dn(this.q9)+"' class\x3d'oj-listbox-drop' style\x3d'display:none'\x3e\x3c/div\x3e");f("body").append(this.ng);var a=this;this.QK=this.ng.ojPopup({initialFocus:"none",rootAttributes:{"class":"datetimepicker-dropdown"},chrome:"none",modality:"modeless",open:function(){var b=f("[aria-selected]",
a.ng);1===b.length&&a.yT(b.parent(),!0);f("ul",a.ng).focus()},beforeClose:function(){a.L0=f("ul",a.ng).scrollTop()}});this.Tn()&&(this._ELEMENT_TRIGGER_WRAPPER_CLASS_NAMES+=this.ZF)},Wx:function(){return this.QK.ojPopup("isOpen")},_ComponentCreate:function(){this.Nz();var a=this._superApply(arguments);this.Pl()&&!this.TX()?this._CLASS_NAMES="":k(this);this.VG();return a},kf:function(){var a=this._superApply(arguments);c(this.kd.children(),this.options.disabled);return a},_setOption:function(a,e,g){var f=
null;if("value"===a)return e||(e=null),f=this._super(a,e,g),this.qB(),f;f=this._superApply(arguments);"disabled"===a?(e&&this.hide(),this.kd.find("."+this.JG).attr("title",this.xJ()),c(this.kd.children(),e)):"max"!==a&&"min"!==a||this.Pl()?"readOnly"===a&&e&&this.hide():(this.$L[b.bd.VALIDATOR_TYPE_DATETIMERANGE]=d(this.options,this.Sc()),this.$r());a in{max:!0,min:!0,converter:!0,timePicker:!0}&&this.qB();return f},_destroy:function(){var a=this._super();this.kd&&this.kd.remove();this.ng.remove();
return a},KF:function(){this.Tn()&&this._superApply(arguments)},LF:function(){return this.kd},BC:function(a){if(this.Tn()){this._superApply(arguments);var b=f.ui.keyCode,c=!1;if(this.Wx())switch(a.keyCode){case b.TAB:this.hide();break;case b.ESCAPE:this.hide();c=!0;break;case b.UP:case b.DOWN:f("ul",this.ng).focus(),c=!0}else switch(a.keyCode){case b.UP:case b.DOWN:this.gc(this.dg(),a),this.show(),c=!0}if(c||a.keyCode===b.ENTER)return a.preventDefault(),a.stopPropagation(),!1}},xJ:function(){return this.Yj(this.A("tooltipTime"+
(this.options.disabled?"Disabled":"")))},VG:function(){var a=this.Tn(),b=a?f("\x3cspan\x3e").addClass(this.IG):f("+ span",this.element),c=f("\x3cspan title\x3d'"+this.xJ()+"'/\x3e").addClass(this.JG+" oj-clickable-icon-nocontext oj-component-icon");b.append(c);var d=this;c.on("click",function(){d.Wx()?d.hide():d.show()});this.Np(c);this._hoverable(c);this.qM=c;this.kd=b;a&&this.element.after(b)},Wfa:function(a,b,c){return null!==b&&a<b||null!==c&&a>c},pq:function(){return this.Pl()?this.zl.widget.g3():
this.options.value},qB:function(){var a=this.pq(),c=this.Sc(),d=f("\x3cul class\x3d'oj-listbox-results' tabindex\x3d'-1' role\x3d'listbox'\x3e\x3c/ul\x3e"),c=a?c.format(a):"",e=[],g,a=a?b.qb.isoToLocalDate(a):new Date;a.setHours(0);a.setMinutes(0);a.setSeconds(0);a.setMilliseconds(0);e=this.jea(a);c=c||e[0].value;this.ng.empty();a=0;for(g=e.length;a<g;a++){var h=e[a].value,k=e[a].minMaxRange,l=f("\x3cli class\x3d'oj-listbox-result "+(k?"oj-disabled":"")+"' role\x3d'presentation'\x3e"),x=this.uuid+
"_sel"+a,k=f("\x3cdiv class\x3d'oj-listbox-result-label' "+(k?"aria-disabled ":"")+"data-value\x3d'"+h+"' role\x3d'option' id\x3d'"+x+"'\x3e"+e[a].label+"\x3c/li\x3e");c===h&&(k.attr("aria-selected","true"),l.addClass("oj-hover"),d.attr("aria-activedescendant",x));l.append(k);d.append(l)}this.ng.append(d);f(".oj-listbox-result",d).on("mousemove",function(){var a=f(this);a.hasClass("oj-disabled")||(f(".oj-hover",d).removeClass("oj-hover"),a.addClass("oj-hover"),d.attr("aria-activedescendant",a.children()[0].id))});
var u=this;d.on("click",function(a){var b=f(a.target);b.hasClass("oj-disabled")||void 0!==b.attr("aria-disabled")||(u.qZ(a),u.hide())}).on("keydown",function(a){u.Ela(a)})},jea:function(a){var c=[],d=this.Sc();if(a){var e=this.options.timePicker.timeIncrement.split(":"),g=b.qb,f=this.Pl(),h=g.dateToLocalIso(a),k=f?this.zl.widget.options.min:this.options.min,f=f?this.zl.widget.options.max:this.options.max,k=k?g.isoToLocalDate(g._minMaxIsoString(k,h)):null,f=f?g.isoToLocalDate(g._minMaxIsoString(f,
h)):null;if(4===e.length){var h=parseInt(e[0].substring(0),10),l=parseInt(e[1],10),u=parseInt(e[2],10),e=parseInt(e[3],10),v=new Date(a),y="";do y=d.format(g.dateToLocalIso(v)),c.push({label:y,value:y,minMaxRange:this.Wfa(v,k,f)}),v.setHours(v.getHours()+h),v.setMinutes(v.getMinutes()+l),v.setSeconds(v.getSeconds()+u),v.setMilliseconds(v.getMilliseconds()+e);while(v.getDate()===a.getDate())}else throw Error("timeIncrement value should be in the format of hh:mm:ss:SS");}return c},Ela:function(a){if(this.Wx()){var b=
f.ui.keyCode,c=!1;switch(a.keyCode){case b.TAB:this.hide();break;case b.ESCAPE:this.hide();this.element.focus();c=!0;break;case b.UP:this.lZ(a,"prev");c=!0;break;case b.DOWN:this.lZ(a,"next");c=!0;break;case b.ENTER:this.qZ(a),c=!0}if(c)return a.preventDefault(),a.stopPropagation(),!1}},lZ:function(a,b){var c=f(".oj-hover",this.ng),d=f("ul",this.ng),e=null;1===c.length?(e=c[b](),1===e.length&&c.removeClass("oj-hover")):e=f(d.children()[0]);e&&1===e.length&&(e.addClass("oj-hover"),d.attr("aria-activedescendant",
e.children()[0].id),this.yT(e))},qZ:function(a){var b=this.ng,c=f("[aria-selected]",b),d=f("ul",b),b=f(".oj-hover div",b);1===b.length&&(1===c.length&&(c.removeAttr("aria-selected"),c.parent().removeClass("oj-hover")),b.attr("aria-selected","true"),b.parent().addClass("oj-hover"),this.hide(),this.ni(b.attr("data-value")),this.gc(b.attr("data-value"),a),d.attr("aria-activedescendant",b[0].id),this.element.focus(),this.Pl()&&this.zl.widget.hide())},JK:function(a){this.Tn()&&this._superApply(arguments)},
show:function(){if(!this.options.disabled&&!this.options.readOnly){this.Pl()&&this.zl.widget.hide();this.qB();var a=this.ng,c=this.QK;a.width(this.element.parent().width());a.css({position:"relative"});var d=b.pc.Ag({my:"start top",at:"start bottom",of:this.element,collision:"flipfit flipfit"},this.wj);c.ojPopup("open",this.qM,d);a.find("[aria-selected]").parent().addClass("oj-hover")}},hide:function(){this.Wx()&&(this.QK.ojPopup("close"),this.element.focus())},refresh:function(){this.kd&&this.kd.find("."+
this.JG).attr("title",this.xJ());return this._superApply(arguments)||this},ni:function(a){this.Tn()&&this._superApply(arguments);this.Wx()&&this.qB()},gc:function(a,c,d){if(this.Pl()){this._super(a,null,d);try{var e=this.Sc().parse(a),f=b.qb,h=this.zl.widget,k=h.g3(),l=k?f.isoToLocalDate(k):new Date,x=g(e?f.isoToLocalDate(e):new Date,new Date(l)),u=f.dateToLocalIso(x);l.getTime()!=x.getTime()&&h.cqa(u,c)}catch(v){}}else this._superApply(arguments)},zv:function(){return this.Tn()},Tn:function(){return!this.Pl()||
this.TX()},_GetDefaultStyleClass:function(){return"oj-inputtime"},ls:function(){return this.options.value||""},Bv:function(){var a=this._superApply(arguments);null==this.options.min&&null==this.options.max||this.Pl()||(this.$L[b.bd.VALIDATOR_TYPE_DATETIMERANGE]=d(this.options,this.Sc()));return f.extend(this.$L,a)},Sc:function(){return this.options.converter?this._superApply(arguments):f.oj.ojInputTime.prototype.options.converter},yT:function(a,b){var c=a.parent();b&&this.L0&&f(c).scrollTop(this.L0);
var d=f(c).scrollTop(),e=d+f(c).height(),g=a[0].offsetTop,h=g+f(a).height();g<d?f(c).scrollTop(g):h>e&&f(c).scrollTop(h-f(c).height())},Pl:function(){return null!==this.zl},TX:function(){return this.zl.inline},ki:function(){this.hide()},ol:function(){this.hide()},getNodeBySubId:function(a){var b=null,c=a&&a.subId;if(c)switch(c){case "oj-listbox-drop":b=this.ng[0];break;case "oj-inputdatetime-time-icon":b=f(".oj-inputdatetime-time-icon",this.kd)[0];break;case "oj-inputdatetime-time-input":b=this.element[0];
break;default:b=null}return b||this._superApply(arguments)},getSubIdByNode:function(a){var b=f(".oj-inputdatetime-time-icon",this.kd),c=null;a===this.ng[0]?c="oj-listbox-drop":a===b[0]?c="oj-inputdatetime-time-icon":a===this.element[0]&&(c="oj-inputdatetime-time-input");return c||this._superApply(arguments)},widget:function(){return this.Tn()?this._super():this.zl.widget.widget()}});b.ya("oj.ojInputDateTime",f.oj.ojInputDate,{version:"1.0.0",widgetEventPrefix:"oj",_WIDGET_CLASS_NAMES:"oj-inputdatetime-date-time oj-component oj-inputdatetime",
_INPUT_HELPER_KEY:"inputHelpBoth",options:{converter:b.pa.em(b.Rj.CONVERTER_TYPE_DATETIME).createConverter({day:"2-digit",month:"2-digit",year:"2-digit",hour:"2-digit",hour12:!0,minute:"2-digit"}),timePicker:{timeIncrement:"00:30:00:00"}},Nz:function(){this._super();this.cu=this.element;this.FC=this.iD=this.mg=null},_ComponentCreate:function(){var a=this._super(),c=this.NW(this.Sc());if(null===c)throw Error("Please use ojInputDate if you do not have time portion");if(this.be){var d=f("\x3cinput type\x3d'text'\x3e");
d.insertAfter(this.element);this.cu=d}for(var d=["title","placeholder","disabled","required","readOnly"],e={},g=0,h=d.length;g<h;g++)e[d[g]]=this.options[d[g]];this.mg=this.cu.ojInputTime(f.extend(e,{converter:c,displayOptions:{converterHint:"none",title:"none",messages:this.options.displayOptions.messages},value:b.qb.dateToLocalIso(this.yB()),timePicker:this.options.timePicker,datePickerComp:{widget:this,inline:this.be}}));return a},_setOption:function(a,b,c){var d=this._superApply(arguments);"value"===
a&&(this.FC=b);this.mg&&(a in{disabled:!0,readOnly:!0}?this.mg.ojInputTime("option",a,b):"timePicker"===a?this.mg.ojInputTime("option","timePicker.timeIncrement",b.timeIncrement):"converter"===a&&(this.iD=null,this.mg.ojInputTime("option",a,this.NW(this.Sc()))));return d},_destroy:function(){var a=this._super();this.mg.ojInputTime("destroy");this.be&&this.cu.remove();return a},NW:function(a){if(null!==this.iD)return this.iD;a=a.resolvedOptions();var c={},d="hour hour12 minute second millisecond timeFormat".split(" "),
e,g;e=0;for(g=d.length;e<g;e++)d[e]in a&&("timeFormat"===d[e]&&(c.formatType="time"),c[d[e]]=a[d[e]]);if(f.isEmptyObject(c))throw Error("Plase use ojInputDateTime's converter is lacking the time portion");return this.iD=a=b.pa.em(b.Rj.CONVERTER_TYPE_DATETIME).createConverter(c)},cqa:function(a,b){this.ni(this.Sc().format(a));this.gc(a,b)},g3:function(){if(this.isValid())return this.options.value;if(this.FC)try{return this.Sc().parse(this.FC)}catch(a){return this.options.value}else return null},gc:function(a,
b,c){this._superApply(arguments);this.FC=a},BC:function(a){var b=f.ui.keyCode,c=!1;switch(a.keyCode){case b.UP:case b.DOWN:a.shiftKey&&(this.gc(this.dg(),a),this.mg.ojInputTime("show"),c=!0)}return c?(a.preventDefault(),a.stopPropagation(),!1):this._superApply(arguments)},show:function(){this.mg.ojInputTime("hide");return this._super()},showTimePicker:function(){this.hide();return this.mg.ojInputTime("show")},hideTimePicker:function(){return this.mg.ojInputTime("hide")},refresh:function(){var a=this._superApply(arguments)||
this;this.mg.ojInputTime("refresh");return a},getNodeBySubId:function(a){var b=a&&a.subId,c=null;b&&("oj-listbox-drop"===b||"oj-inputdatetime-time-icon"===b?c=this.mg.ojInputTime("getNodeBySubId",a):"oj-inputdatetime-date-input"===b&&(c=this.be?this.cu[0]:this.element[0]));return c||this._superApply(arguments)},getSubIdByNode:function(a){var b=null;this.be?a===this.cu[0]&&(b="oj-inputdatetime-date-input"):a===this.element[0]&&(b="oj-inputdatetime-date-input");return b||this.mg.ojInputTime("getSubIdByNode",
a)||this._superApply(arguments)},Sc:function(){return this.options.converter?this._superApply(arguments):f.oj.ojInputDateTime.prototype.options.converter},ki:function(){this._superApply(arguments);this.mg&&this.hideTimePicker()},ol:function(){this._superApply(arguments);this.mg&&this.hideTimePicker()},_GetMessagingLauncherElement:function(){return this.be?this.cu:this._super()},_GetDefaultStyleClass:function(){return"oj-inputdatetime"},Jz:function(){return"oj-ojInputDate"}})});