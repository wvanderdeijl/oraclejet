/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","hammerjs","ojs/ojjquery-hammer","ojs/ojcomponentcore","ojs/ojvalidation","ojs/ojpopup"],function(b,f,a){b.ue={};o_("EditableValueUtils",b.ue,b);b.ue.Ina=function(a,b){var c,d,e={};if(a&&b)switch(b){case "disabled":c=void 0!==a.attr("disabled")?!!a.prop("disabled"):void 0;break;case "pattern":c=a.prop("pattern")||void 0;break;case "placeholder":c=a.prop("placeholder")||void 0;break;case "readonly":c=void 0!==a.attr("readonly")?!!a.prop("readonly"):void 0;break;case "required":c=
a.attr("required");d=a.prop("required");c=void 0!==c?void 0!==d?!!d:!!c:void 0;break;case "title":c=void 0!==a.attr("title")?a.prop("title"):void 0;break;case "value":c=a.val()||void 0;break;default:c=a.attr(b)||void 0}void 0!==c?(e.k2=!0,e.value=c):e.k2=!1;return e};b.ue.Tk=function(a,c,d,e){for(var g={},f=0;f<a.length;f++){var h,k;h=a[f];k=h.V;var l=h.option||k,u=h.Ye,v=h.xc,y=d.element,B=d.options[l];void 0===c[l]&&(B=d.options[l],k=b.ue.Ina(y,k),k.k2?(h=k.value,u&&("boolean"===typeof u?h=b.ue.Qma(l,
h):"function"===typeof u&&(h=u.call(d,h))),g[l]=h):void 0===B&&(g[l]=h.SD));u=l in g?g[l]:B;v&&"boolean"===typeof v&&b.ue.lqa(l,u)}null!=e&&e(g);d.option(g,{_context:{Hc:!0,Za:!0}})};b.ue.lqa=function(a,b){var c=!1;switch(a){case "required":null!==b&&"boolean"!==typeof b&&(c=!0);break;case "readOnly":case "disabled":null!==b&&"boolean"!==typeof b&&(c=!0)}if(c)throw"Option '"+a+"' has invalid value set: "+b;};b.ue.Qma=function(a,b){var c=b;switch(a){case "required":c=b?!0:!1}return c};b.gb=function(a){this.Init(a)};
b.Sa.FE(b.Sa.cd.pz,b.gb);b.b.ga(b.gb,b.oc,"oj.PopupMessagingStrategy");b.gb.gs={ojRadioset:{position:"launcher",Dj:{open:"focus focusin mouseover",close:"mouseout"}},ojCheckboxset:{position:"launcher",Dj:{open:"focusin mouseover",close:"mouseout"}},ojInputText:{position:"launcher",Dj:{open:"focusin"}},ojTextArea:{position:"launcher",Dj:{open:"focusin"}},ojInputPassword:{position:"launcher",Dj:{open:"focusin"}},ojSwitch:{position:"launcher",Dj:{open:"focusin mouseover",close:"mouseout"}},ojSlider:{position:"launcher",
Dj:{open:"focusin mouseover",close:"mouseout"}},"default":{position:"launcher-wrapper",Dj:{open:"focusin"}}};b.gb.tG="oj-form-control-hint";b.gb.S8="oj-form-control-hint-converter";b.gb.U8="oj-form-control-hint-validator";b.gb.T8="oj-form-control-hint-title";b.gb.prototype.vo=function(a){b.gb.q.vo.call(this,a);this.iga()};b.gb.prototype.yr=function(a){b.gb.q.yr.call(this,a);this.Y0()};b.gb.prototype.update=function(){b.gb.q.update.call(this);this.Y0()};b.gb.prototype.Nk=function(){this.Rla();this.Dba();
b.gb.q.Nk.call(this)};b.gb.prototype.NT=function(){this.gY()&&this.Je.ojPopup("close")};b.gb.prototype.iga=function(){this.CC||this.gja()};b.gb.prototype.$Y=function(){var a,c;if(this.T$()&&(c=this.iT(),!b.Ea.Ii(c))){var d=this.pW();a=d.ojPopup("isOpen");a?a&&(a=d[0],a.innerHTML="",a.innerHTML=c,d.ojPopup("refresh")):(a=d[0],a.innerHTML="",a.innerHTML=c,d.ojPopup("open",this.Xh()))}};b.gb.prototype.T$=function(){var a=this.Ui().options,b=a.readOnly||!1;return!(a.disabled||b)};b.gb.prototype.Y0=function(){var a;
a=!1;var b,c;if(this.gY()){var d=this.pW();a=d.ojPopup("isOpen");b=this.iT();c=document.activeElement===this.Xh()[0]?!0:!1;a?b?(a=d[0],a.innerHTML="",a.innerHTML=b,d.ojPopup("refresh")):d.ojPopup("close"):c&&b&&this.$Y()}};b.gb.prototype.Rla=function(){var a=b.gb.gs[this.Ui().widgetName],a=a?a.Dj:b.gb.gs["default"].Dj;if(a.open){var c=this.CC;delete this.CC;c&&this.Xh().off(a.open,c)}a.close&&(c=this.OT)&&this.Xh().off(a.close,c)};b.gb.prototype.gja=function(){var a=this.Xh(),c=b.gb.gs[this.Ui().widgetName],
c=c?c.Dj:b.gb.gs["default"].Dj;if(c.open){var d=this.CC;d||(d=this.CC=f.proxy(this.$Y,this));a.on(c.open,d)}c.close&&(d=this.OT,d||(d=this.OT=f.proxy(this.NT,this)),a.on(c.close,d))};b.gb.prototype.Wda=function(){var a,c=b.gb.gs[this.Ui().widgetName];(c=c?c.position:b.gb.gs["default"].position)&&("launcher"===c?a=this.Xh():"launcher-wrapper"===c&&(a=this.Xh().parent()));a||(a=this.Ui().widget());return{my:"start bottom",at:"end top",collision:"flipcenter",of:a}};b.gb.prototype.pW=function(){if(this.Je)return this.Je;
var a=b.td.L2(),c=this.Wda();a.ojPopup("option","position",c);a.ojPopup("option","close",f.proxy(this.pia,this));a.ojPopup("option","open",f.proxy(this.qia,this));return this.Je=a};b.gb.prototype.qia=function(a){var c=f(a.target),d=this;window.setTimeout(function(){b.Components.QN(c)?c.ojPopup("option","autoDismiss","focusLoss"):delete d.Je},10)};b.gb.prototype.pia=function(a){a=f(a.target);b.Components.QN(a)&&(a.ojPopup("option","autoDismiss","none"),a.ojPopup("option","open",null),a.ojPopup("option",
"close",null));delete this.Je;a.children().remove()};b.gb.prototype.Dba=function(){this.NT();b.td.sna()};b.gb.prototype.iT=function(){var a="",c=this.Ui().document[0],d=[],e=!1;this.kQ()&&d.push(this.dH(c));(this.AF()||this.mQ()||this.lQ())&&d.push(this.B$(c));f.each(d,function(d,g){g&&(e?a=a.concat(b.Na.Sna(c)):e=!0,a=a.concat(g))});return a};b.gb.prototype.dH=function(a){var c;c="";var d=this.fF();this.oF()&&(c=this.gF(),c=b.Na.u1(a,c,d,!1));return c};b.gb.prototype.B$=function(a){var c=[],d,e=
"";this.AF()&&(c=this.FP(),c=c.length?c[0]:"",e+=b.Na.NM(a,b.gb.S8,c,!1,b.gb.tG));if(this.mQ())for(c=this.g6(),d=0;d<c.length;d++)e+=b.Na.NM(a,b.gb.U8,c[d],!1,b.gb.tG);this.lQ()&&(e+=b.Na.NM(a,b.gb.T8,this.f6(),!0,b.gb.tG));return e?"\x3cdiv class\x3d'oj-form-control-hints'\x3e"+e+"\x3c/div\x3e":""};b.gb.prototype.gY=function(){return this.Je?b.Components.QN(this.Je):!1};b.Na={};b.Na.NM=function(a,c,d,e,g){var h;d&&(h=f(a.createElement("div")),h.addClass(g+(" "+c)),h.append(b.Na.LW(a,d,e)));return h?
h.get(0).outerHTML:""};b.Na.T2=function(a){var c;switch(a){case b.X.Sb.FATAL:c=b.ha.A("oj-message.fatal");break;case b.X.Sb.ERROR:c=b.ha.A("oj-message.error");break;case b.X.Sb.WARNING:c=b.ha.A("oj-message.warning");break;case b.X.Sb.INFO:c=b.ha.A("oj-message.info");break;case b.X.Sb.CONFIRMATION:c=b.ha.A("oj-message.confirmation")}return c};b.Na.Sna=function(a){return(a=f(a.createElement("hr")))?a.get(0).outerHTML:""};b.Na.u1=function(a,c,d,e){var g="",f,h,k,l,u={};l=[];for(f=0;f<c.length;f++)k=
c[f],l=k instanceof b.X?k:new b.X(k.summary,k.detail,k.severity),h=b.X.Au(l.severity),u[h]||(u[h]=[]),u[h].push(l);for(f=d;f>=b.X.Sb.CONFIRMATION;f--)for(l=u[f]||[],c=0;c<l.length;c++)k=l[c],b.l.zd(k,b.X),h=b.X.Au(k.severity),d=b.Na.T2(h),d=k.summary||d,k=k.detail||"",g=g.concat(b.Na.t1(a,d,k,h,e));return g};b.Na.t1=function(a,c,d,e,g){var h,k;k=b.Na.T2(e);h=f(a.createElement("div"));h.addClass(b.Na.V8);g&&h.addClass(b.Na.eea(e));g=f(a.createElement("span"));g.addClass(b.Na.dea(e)).attr("title",k).attr("role",
"img");h.append(g);e=f(a.createElement("span"));e.addClass(b.Na.Y8);k=f(a.createElement("div"));k.addClass(b.Na.c9).text(c);e.append(k);d&&(c=b.Na.LW(a,d,!0),a=f(a.createElement("div")),a.addClass(b.Na.Z8).append(c),e.append(a));h.append(e);return h?h.get(0).outerHTML:""};b.Na.dea=function(a){var c;switch(a){case b.X.Sb.FATAL:c=b.Na.aS;break;case b.X.Sb.ERROR:c=b.Na.aS;break;case b.X.Sb.WARNING:c=b.Na.e9;break;case b.X.Sb.INFO:c=b.Na.b9;break;case b.X.Sb.CONFIRMATION:c=b.Na.X8}return b.Na.c7+c};b.Na.eea=
function(a){switch(a){case b.X.Sb.FATAL:a=b.Na.$R;break;case b.X.Sb.ERROR:a=b.Na.$R;break;case b.X.Sb.WARNING:a=b.Na.d9;break;case b.X.Sb.INFO:a=b.Na.a9;break;default:a=b.Na.W8}return a};b.Na.LW=function(a,c,d){var e=null;b.Ea.md(c)&&(d&&b.v.Moa(c)?e=b.v.Nma(c.substring(6,c.length-7)):(e=a.createElement("span"),e.textContent=c));return e};b.Na.c7="oj-component-icon oj-message-status-icon ";b.Na.V8="oj-message";b.Na.c9="oj-message-summary";b.Na.Z8="oj-message-detail";b.Na.Y8="oj-message-content";b.Na.aS=
"oj-message-error-icon";b.Na.e9="oj-message-warning-icon";b.Na.b9="oj-message-info-icon";b.Na.X8="oj-message-confirmation-icon";b.Na.$R="oj-message-error";b.Na.d9="oj-message-warning";b.Na.a9="oj-message-info";b.Na.W8="oj-message-confirmation";b.td={};b.td.L2=function(){var a=b.td.oW(),c=a.find("."+b.td.uG);0===c.length?(c=f(b.td.Vda()).hide(),c.appendTo(a),c.ojPopup({rootAttributes:{"class":b.td.f9},initialFocus:"none",tail:"simple",autoDismiss:"none",modality:"modeless"})):c=f(c[0]);return c};b.td.sna=
function(){if(0<b.td.mda()){var a=b.td.L2();a.ojPopup("destroy");a.remove()}};b.td.oW=function(){var a=f("#"+b.td.vR);if(0<a.length)return a;a=f("\x3cdiv\x3e");a.attr("id",b.td.vR);a.attr("role","presentation");a.appendTo(f(document.body));return a};b.td.mda=function(){return b.td.oW().find("."+b.td.uG).length};b.td.Vda=function(){return"\x3cdiv class\x3d'"+b.td.uG+"'\x3e\x3c/div\x3e"};b.td.uG="oj-messaging-popup-container";b.td.f9="oj-messaging-popup";b.td.vR="__oj_messaging_popup_pool";(function(){b.ya("oj._ojLabel",
f.oj.baseComponent,{version:"1.0.0",defaultElement:"\x3clabel\x3e",widgetEventPrefix:"oj",options:{ariaRequiredUnsupported:!1,describedById:null,help:{definition:null,source:null},required:!1,rootAttributes:null},xa:{wS:"tooltipHelp",xS:"tooltipRequired"},widget:function(){return this.Hr},refresh:function(){this._super();this.CZ();this.yZ()},Wd:function(a,b){this._super(a,b);this.$$();this.wH()},_ComponentCreate:function(){this._super();this.lD=this.eventNamespace+"TouchEatClick";this.$B=this.eventNamespace+
"HelpDefPopup";this.vn=b.v.Qd();this.$ba()},Jv:function(a){this.Mx=a.attr("class")},ys:function(){this.Mx?this.element.attr("class",this.Mx):this.element.removeAttr("class")},$ba:function(){var a=this.options,b=a.required,a=a.ariaRequiredUnsupported,c=this.RY(),d=null;this.Hr=this.element.wrap(this.hba()).closest(".oj-component");this.Mha();c&&(d=this.NH());this.aU(d);b&&(a?d.appendChild(this.RA()):this.element.before(this.RA()))},aU:function(a){var b=this.options,c=b.help.definition;if(b.help.source||
c)this.wga(a),this.J9(),this.n$()},$$:function(){var a=this.options.required;if(null!==a&&"boolean"!==typeof a)throw Error("Option 'required' has invalid value set: "+a);},wH:function(){var a=this.options;if(this.RY()&&null==a.describedById)throw Error("ojLabel's describedById option must be set if help source is set\n\r\n      or (ariaRequiredUnsupported and required is set).");},Mha:function(){var a=this.element.attr("class"),b;if(a&&(a=a.split(/\s+/),null!=a)){b=a.length;for(var c=0;c<b;c++){var d=
a[c];0<d.indexOf("-label")&&(this.Hr.addClass(d),this.element.removeClass(d))}}},NH:function(){var a=this.Hr.find(".oj-label-group"),b=document.createElement("span");b.setAttribute("id",this.options.describedById);a.prepend(b);return b},hba:function(){var a=this.options.rootAttributes,b,c;c="oj-label oj-component";a&&(b=a["class"]);null!==b&&(c=c+" "+b);a=document.createElement("div");a.className=c;c=document.createElement("div");c.className="oj-label-group";a.appendChild(c);return a},RA:function(){var a=
this.A(this.xa.xS),b=document.createElement("span");b.className="oj-label-required-icon oj-component-icon";b.setAttribute("role","img");b.setAttribute("title",a);return b},Laa:function(a,c){var d;if(this.xC()){d=document.createElement("a");d.setAttribute("tabindex","0");d.setAttribute("target","_blank");d.className="oj-label-help-icon-anchor oj-label-help-icon oj-component-icon oj-clickable-icon-nocontext";if(c)try{b.v.kqa(c),d.setAttribute("href",c)}catch(e){throw Error(e+". The source option ("+
c+") is invalid.");}a?d.setAttribute("title",a):d.setAttribute("title",this.A(this.xa.wS))}return d},n$:function(){var b;b=this.options.help.definition;var c,d,e;d=this.widget().find(".oj-label-help-icon-anchor");if(0!=d.length){c=b?b:this.A(this.xa.wS);this.Sw?(e=f(document.getElementById(this.Sw)))&&e.text(c):(b=document.createElement("div"),b.style.display="none",e=f(b),e.uniqueId(),this.Sw=e.prop("id"),e.text(c),c=document.getElementsByTagName("body")[0],c.appendChild(b));this.vn&&(this.bB&&this.widget().off(this.lD),
this.bB=function(){return!1});var g=this;this.DC||(this.DC=function(a){g.vfa(a,e,d,!1)});if(this.vn)d.al({recognizers:[[a.Press,{time:750}]]}).on("press",this.DC);else d.on("focusin"+this.$B+" mousedown"+this.$B,this.DC);b={my:"start bottom",at:"end top",collision:"flipcenter",of:d};e.ojPopup({position:b,modality:"modeless"})}},vfa:function(a,b,c,d){if("mousedown"===a.type)d=!0;else if("focusin"===a.type&&d)d=!1;else{if(this.vn)if("press"===a.type){var e=this.widget();e.on("click"+this.lD,this.bB);
var g=this;b.on("ojclose",function(){e.off(g.lD);g.bB=null})}else b.off("ojclose");b.ojPopup("isOpen")||b.ojPopup("open",c)}},J9:function(){var a=this.element,b=this.options.help.definition,c;b&&(a.addClass("oj-label-help-def"),(c=a.attr("title"))?a.attr("title",c+" "+b):a.attr("title",b))},VZ:function(a){this.vn&&(this.widget().off(this.lD),this.bB=null,a.al().off(this.$B));a.off(this.$B);this.DC=null},WZ:function(){var a;if(null!=this.Sw){if(a=f(document.getElementById(this.Sw)))a.ojPopup("destroy"),
a.remove();this.Sw=null}},uja:function(){this.element.removeClass("oj-label-help-def");this.element.attr("title","")},wga:function(a){var b=this.options.help.source,c=this.options.help.definition;this.xC()&&f(a).prepend(this.Laa(c,b))},RY:function(){var a=this.options;return this.xC()||a.ariaRequiredUnsupported&&a.required},xC:function(){var a=this.options;return a.help.source||a.help.definition},yZ:function(){var a,b;this.wH();this.uja();a=this.Hr.find(".oj-label-help-icon");1===a.length&&(this.VZ(a),
this.WZ(),a.remove());a=this.xC();b=document.getElementById(this.options.describedById);null!=a&&null==b?b=this.NH():null==a&&null!==b&&0===b.children.length&&b.remove();this.aU(b)},CZ:function(){var a,b;b=this.Hr.find(".oj-label-required-icon");a=this.options.describedById;this.options.required?(this.wH(),0===b.length?this.options.ariaRequiredUnsupported?(b=document.getElementById(a),null==b&&(b=this.NH()),b.appendChild(this.RA())):this.element.before(this.RA()):(a=this.A(this.xa.xS),b.attr("title",
a))):(b.remove(),b=document.getElementById(a),null!==b&&0===b.children.length&&b.remove())},_setOption:function(a,b){this._superApply(arguments);"required"===a&&this.CZ();"help"===a&&this.yZ()},getNodeBySubId:function(a){var b;b=this._super(a);b||(a=a.subId,"oj-label-help-icon"===a&&(b=this.widget().find(".oj-label-help-icon")[0]),"oj-label-required-icon"===a&&(b=this.widget().find(".oj-label-required-icon")[0]));return b||null},getSubIdByNode:function(a){var b=null;null!=a&&(a===this.widget().find(".oj-label-help-icon")[0]?
b={subId:"oj-label-help-icon"}:a===this.widget().find(".oj-label-required-icon")[0]&&(b={subId:"oj-label-required-icon"}));return b||this._superApply(arguments)},_destroy:function(){var a=this.Hr.find(".oj-label-help-icon");this.VZ(a);this.WZ();b.v.unwrap(this.element,this.Hr);return this._super()}})})();var d={N5:1,qP:2,tP:3,ZP:4,$P:5,aQ:6,B6:7,J6:8,qQ:9,rQ:10,M6:11},c={Bo:!0,Ni:d.qP},e={Bo:!0,Ni:d.tP},g={Bo:!0,Ni:d.aQ},h={Bo:!0,Ni:d.ZP},k={Bo:!0,Ni:d.$P},l={Bo:!0,Ni:d.rQ};b.ya("oj.editableValue",
f.oj.baseComponent,{widgetEventPrefix:"oj",options:{disabled:!1,displayOptions:void 0,help:{definition:null,source:null},messagesCustom:void 0,messagesHidden:void 0,messagesShown:void 0,required:!1,title:"",validators:void 0,value:void 0},getNodeBySubId:function(a){return this._super(a)},isValid:function(){void 0===this.BM&&(this.BM=this.lea());return this.BM},refresh:function(){this._super();this.QU(!0)},reset:function(){this.IA();this.Lx(this.cj.B6);this.cL(this.options.value,!0)},showMessages:function(){var a=
this.options.messagesHidden,c,d=!1,e,g=[];for(e=0;e<a.length;e++)d=!0,c=a[e],c instanceof b.Ic&&c.Dca(),g.push(c.clone());d&&(this.fw("messagesHidden"),this.vD("messagesShown",g))},validate:function(){return this.gc(this.dg(),null,this.jA)},Nv:{zP:1,L6:2,bQ:3},cj:d,jA:{br:!1,Ni:d.qQ},Wd:function(a,b){this._super(a,b)},_ComponentCreate:function(){var a=this.element,b=this.dR(a);this._super();this.options.messagesCustom=this.options.messagesCustom||[];this.options.messagesHidden=[];this.options.messagesShown=
0<this.options.messagesCustom.length?this.kaa(this.options.messagesCustom):[];this.vG(a);this.yp()&&(this.qn(this.options.placeholder),this.XH=!0);f.each(["required","title"],function(c,d){d in b&&a.removeAttr(d)})},kf:function(){this._super();this.Uaa();this.QU(!1);this.eC();this.Lx(this.cj.N5);0<this.options.messagesShown.length&&this.Ox("messagesShown",this.options.messagesShown,null,!0);this.widget().addClass("oj-form-control")},Jv:function(a){this.k9(a)},ys:function(a){this.Q8(a)},wQ:function(a,
b){switch(a){case "disabled":this.xQ(a,e);break;case "converter":this.O6(a);break;case "displayOptions":this.eC();break;case "help":this.Qg(a,this.options[a]);break;case "messagesCustom":this.Dha(b);break;case "placeholder":this.oia(b);break;case "readOnly":this.xQ(a,h);break;case "required":this.P6(a);break;case "title":this.Fla();break;case "translations":this.refresh();break;case "value":this.Q6(a,b);break;case "validators":this.$r(a)}},O6:function(a){var b=!1;this.O8();this.XB()&&(b=!0);b?(this.JA(),
this.xD(c)):this.Qg(a,this.options[a],!0)},xQ:function(a,b){var c=!this.options[a];this.Qg(a,this.options[a]);c&&this.p_(b)},P6:function(a){this.Qg(a,this.options[a]);this.p_(g)},Q6:function(a,b){var c=!1,d,e=b?b._context:null;e&&(c=e.originalEvent?!0:!1,d=e.Bo||!1);c||(d||this.IA(null),this.Lx(this.cj.M6));this.Qg(a,this.options[a],!0)},$r:function(){var a=!1;this.ZR();this.XB()&&(a=!0);a&&(this.JA(),this.xD(l))},xv:function(){var a=this.options.readOnly||!1;return this.options.disabled||a?!1:!0},
_destroy:function(){this.widget();var a=this._super();this.IA(null,!0);this.et().Nk();this.Qb&&null!=b.Components.vg(this.Qb[0])&&this.Qb._ojLabel("destroy");return a},Focus:function(){this.Vd().focus();return!0},_setOption:function(a,c,d){var e;e=!1;if("string"===typeof a&&void 0!==c)switch(a){case "messagesHidden":e=!0;break;case "messagesShown":e=!0;break;case "rawValue":e=!0}if(e)return b.r.error(a+" option cannot be set"),this;e=this._superApply(arguments);this.wQ(a,d);return e},Vd:function(){return this.element},
C7:function(){var a=this.wV(this.element);if(null!==a&&0!==a.length)return a;a=this.element.prop("id");if(void 0!==a&&(a=f("label[for\x3d'"+a+"']"),0!==a.length))return a;a=this.element.closest("[aria-labelledby]");return 0!==a.length&&(a=this.wV(a),null!==a&&0!==a.length)?a:null},ls:function(){return this.element.val()},_GetMessagingLauncherElement:function(){return this.Vd()},Sc:function(){this.Jc||(this.Jc=b.qb.getConverterInstance(this.options.converter));return this.Jc||null},Bv:function(){this.yX||
(this.yX={});return this.yX},dg:function(){return this.Vd().val()},bR:function(){if(!this.Tv){var a=[],c=this.options.validators,d,e=!0,g=this.Bv(),f=[],h,k;k=Object.keys(g);h=k.length;if(0<h){for(var l=0;l<h;l++)d=k[l],f.push(g[d]);a=a.concat(f)}if(c){f=[];for(k=0;k<c.length;k++)d=c[k],"object"===typeof d?(d.validate&&"function"===typeof d.validate||(e=!1),e||(h=d.type)&&"string"===typeof h&&((g=b.pa.Ir(h))?(d=b.nc.Ze({},d.options)||{},d.converter=d.converter||this.Sc(),d.label=d.label||this.YI(),
d=g.createValidator(d)):b.r.error("Unable to locate a validatorFactory for the requested type: "+h)),f.push(d)):b.r.error("Unable to parse the validator provided:"+d);a=a.concat(f)}this.Tv=a}return this.Tv||[]},ZR:function(){this.Tv&&(this.Tv.length=0);this.Tv=null;this.et().update(this.si(this.Dh.sQ))},O8:function(){this.Jc=null;this.et().update(this.si(this.Dh.pP))},en:function(){return this.options.required},Kz:function(a){var b=this.dg();this.gc(b,a)},As:function(a,b){var c={};c._context={originalEvent:b,
Hc:!0,Za:!0};this.options.rawValue!==a&&this.option("rawValue",a,c)},Qg:function(a,b,c){switch(a){case "converter":b=this.options.value;this.cL(b,c);break;case "disabled":this.HZ("disabled",this.options.disabled);break;case "help":b=this.options.help.definition;c=this.options.help.source;a=this.DI();this.Qb&&(this.Qb._ojLabel("option","describedById",a),this.Qb._ojLabel("option","help",{definition:b,source:c}));break;case "required":this.HZ("required",this.en());this.rG(b);this.Qb&&(a=this.DI(),this.Qb._ojLabel("option",
{describedById:a,ariaRequiredUnsupported:this.xz()}),this.Qb._ojLabel("option","required",b));break;case "value":this.cL(b,c)}},rG:function(a){var b=this.Vd();a&&b?b.attr("aria-required",a):b.removeAttr("aria-required")},xz:function(){return!1},sG:function(){this.Qb&&this.Qb._ojLabel("refresh");this.Jc=this.eK=null;this.ZR()},ni:function(a){var b=this.Vd();b.val()!==a&&b.val(a)},vG:function(a){"boolean"===typeof this.options.disabled&&a.prop("disabled",this.options.disabled)},qn:function(a){this.Vd().attr("placeholder",
a)},cS:function(a){this.options.placeholder=a},yp:function(){return this.options.placeholder},KQ:function(){this.cS("");this.qn("")},gc:function(a,c,d){var e=d&&"boolean"===typeof d.br?d.br:!0;if(void 0===a)return b.r.warn("Attempt to set a value of undefined"),!1;if(e&&a===this.xda())b.r.Sy>b.r.Vm&&b.r.info("Validation skipped and value option not updated as submitted value '"+a.toString?a.toString():a+" same as previous.");else if(a=this.zS(a,c,d),void 0!==a&&this.isValid()){var g;d&&d._context&&
(g=d._context);this.$0(a,c,d&&d.Ni,g);return!0}return!1},zS:function(a,c,d){var e=d&&d.mqa?d.mqa:this.Nv.zP,g=d&&d.Ni?d.Ni:this.cj.J6;d=d&&d.Bo||!1;if(void 0===a)b.r.warn("Attempt to set a value of undefined");else if(this.xv()){d||this.IA(c);this.L_(a);try{return this.bka(a,e,g,c)}catch(f){}}else b.r.Sy>b.r.Vm&&b.r.info("Validation skipped and value option not set as component state does not  allow setting value. For example if the component is readonly or disabled.")},yv:function(a,c,d){return"value"===
a?b.b.jh(c,d):0===a.indexOf("messages")?this.Eha(c,d):this._superApply(arguments)},_GetDefaultStyleClass:function(){b.l.Yb();return""},Dh:{Uu:1,tQ:2,pP:3,sQ:4,oQ:5},pn:{disabled:"oj-disabled",required:"oj-required"},IA:function(a,b){b?(this.options.messagesHidden=[],this.options.messagesShown=[],this.options.messagesCustom=[]):(this.fw("messagesHidden",a),this.fw("messagesShown",a),this.fw("messagesCustom",a))},JA:function(){var a=this.options.messagesShown,c=a.length,d;this.fw("messagesHidden");
for(var e=c-1;0<=e;e--)d=a[e],d instanceof b.Ic&&a.splice(e,1);a.length!==c&&this.Ox("messagesShown",a,null,!0)},Ox:function(a,b,c,d){var e={},g=0===b.length&&0===this.options[a].length;if(d||!g)e._context={originalEvent:c,Hc:!0,Za:!0},e.changed=d||!g,this.Rja(),this.option(a,b,e),this.cma()},fw:function(a,b){this.Ox(a,[],b)},kaa:function(a){var c,d=[],e;if(a&&0<a.length)for(e=0;e<a.length;e++)c=a[e],c instanceof b.X?d.push(c.clone()):(c=new b.X(c.summary,c.detail,c.severity),c=Object.freeze?Object.freeze(c):
c,d.push(c));return d},Uaa:function(){if(this.Qb=this.C7()){var a=this.options.help.definition,b=this.options.help.source,c=this.xz(),d=this.A9(b,a,this.options.required,c);this.Qb._ojLabel({rootAttributes:{"class":this._GetDefaultStyleClass()+"-label"},describedById:d,required:this.options.required,ariaRequiredUnsupported:c,help:{definition:a,source:b}})}},QU:function(a){var b=!1;a?(this.sG(),this.eC(),this.XB()&&(b=!0),this.JA(),b?this.xD(k):(this.en()&&this.Lx(k.Ni),this.Qg("value",this.options.value,
!0))):(this.Qg("value",this.options.value),this.Qg("required",this.options.required));this.Qg("disabled",this.options.disabled)},Xqa:function(){return this.VY},xda:function(){void 0===this.IK&&(this.IK="");return this.IK},wV:function(a){a=a.attr("aria-labelledby");return void 0!==a?f("label[id\x3d'"+a+"']"):null},DI:function(){this.element.uniqueId();return this.element.prop("id")+"Icons"},A9:function(a,b,c,d){var e=this.DI();(a||b||c&&d)&&this.NG(e);return e},NG:function(a){this.Vd().each(function(){var b=
f(this).attr("aria-describedby");b?f(this).attr("aria-describedby",b+" "+a):f(this).attr("aria-describedby",a)})},GB:function(){return this.options.messagesShown.concat(this.options.messagesHidden)},YI:function(){if(this.Qb)return this.Qb.text()},RW:function(){this.c1||(this.c1=new b.Oi(this.isValid(),this.GB()));return this.c1},XJ:function(){return!b.X.isValid(this.GB())},XB:function(){return!this.isValid()&&0<this.options.messagesShown.length},Lfa:function(){for(var a=this.options.messagesShown,
c,d,e=0;e<a.length;e++)c=a[e],c instanceof b.Ic&&c.$X()&&(d=d||[],d.push(c));return void 0===d?!1:!b.X.isValid(d)},eC:function(){var a=this.et(),b=this._GetMessagingLauncherElement(),c=this.si(this.Dh.Uu);this.XH||this.KQ();a.vo(b,c)},Dha:function(a){var c=this.options.messagesCustom,d=[],e,g,f=this.options.messagesShown,h=a?a._context:null;for(g=0;g<f.length;g++)e=f[g],e instanceof b.Ic&&e.$X()&&d.push(e);for(g=0;g<c.length;g++)d.push(c[g]);this.Ox("messagesShown",d,h?h.originalEvent:null,a&&a.changed)},
oia:function(a){a=(a&&a._context||{}).Koa?!1:!0;this.qn(this.options.placeholder);a?(this.XH=!0,this.Sc()&&this.eC()):this.XH=!1},Dka:function(a){this.VY=a},L_:function(a){this.IK=a},Fla:function(){this.et().update(this.si(this.Dh.oQ))},vD:function(a,b,c){var d,e,g;if("object"===typeof b&&Array.isArray(b))for(g=this.options[a],d=b.length,e=0;e<d;e++)g.push(b[e]);this.Ox(a,g,c,!0)},cma:function(){this.et().update(this.si())},$0:function(a,b,c,d){d=d||{};b&&(d.originalEvent=b);switch(c){case this.cj.qP:case this.cj.tP:case this.cj.ZP:case this.cj.$P:case this.cj.aQ:case this.cj.qQ:case this.cj.rQ:d.Hc=
!0,d.Bo=!0}this.option({value:a},{_context:d})},Rja:function(){this.BM=void 0},lea:function(){var a=this.GB(),b=!0;a&&0!==a.length&&(b=!this.XJ());return b},bq:function(a){var c=a,d=this.Sc();d&&"object"===typeof d&&(d.format&&"function"===typeof d.format?c=d.format(a):b.r.Sy>b.r.Vm&&b.r.info("converter does not support the format method."));return c},et:function(){this.Wp||(this.Wp=new b.Sa(this));return this.Wp},tda:function(a){var b,c=[];b="";var d;this.en()&&(b=this.XV(),b.getHint&&"function"===
typeof b.getHint&&(b=b.getHint())&&c.push(b));for(d=0;d<a.length;d++)b=a[d],"object"===typeof b&&b.getHint&&"function"===typeof b.getHint&&(b=b.getHint())&&c.push(b);return c},XV:function(){var a;a={};var c;null==this.eK&&(a=this.options.translations?this.options.translations.required||{}:{},c={hint:a.hint||null,label:this.YI(),messageSummary:a.messageSummary||null,messageDetail:a.messageDetail||null},this.eK=(a=b.pa.Ir(b.bd.VALIDATOR_TYPE_REQUIRED))?a.createValidator(c):null);return this.eK},si:function(a){var b=
{},c=this.Sc(),d="",e=[];a=a||this.Dh.tQ;if(a===this.Dh.Uu||a===this.Dh.tQ)e=this.GB(),this.RW().update(this.isValid(),e),b.E5=this.RW();if(a===this.Dh.Uu||a===this.Dh.pP)c&&"object"===typeof c&&c.getHint&&"function"===typeof c.getHint&&(d=c.getHint()||""),b.J1=d;if(a===this.Dh.Uu||a===this.Dh.sQ)c=this.bR(),e=this.tda(c)||[],b.nqa=e;if(a===this.Dh.Uu||a===this.Dh.oQ)b.title=this.options.title||"";return b},Eha:function(a,c){var d=-1,e,g=!0,h=f.extend([],a),k=f.extend([],c);if(h.length!==k.length)return!1;
f.each(h,function(a,c){c instanceof b.X?e=c:(e=new b.X(c.summary,c.detail,c.severity),e=Object.freeze?Object.freeze(e):e);d=-1;f.each(k,function(a,b){e.Co(b)&&(d=a)});-1<d?k.splice(d,1):g=!1});return g},EC:function(a){var c=this.Sc(),d=a;c&&"object"===typeof c&&(c.parse&&"function"===typeof c.parse?d=c.parse(a):b.r.Sy>b.r.Vm&&b.r.info("converter does not support the parse method."));return d},PG:function(a,c){var d,e,g;a instanceof b.Le||a instanceof b.Ah?(d=a.zu(),b.l.zd(d,b.X),g=d.severity,e=d.summary,
d=d.detail):(g=b.X.Sb.ERROR,e=b.ha.A("oj-message.error"),d=a.message||b.ha.A("oj-converter.detail"));c.push({summary:e,detail:d,severity:g})},XK:function(a,c,d){var e={},g=[],f=a.hx||[];e.context=c||0;e.display=d||b.Ic.Mr.xF;0===f.length&&this.PG(a,f);for(c=0;c<f.length;c++)a=f[c],g.push(this.Haa(a.summary,a.detail,a.severity,e));return g||null},Haa:function(a,c,d,e){a=new b.Ic(a,c,d,e);return a=Object.seal?Object.seal(a):a},cL:function(a,b){var c=a||this.options.value,d;d=this.VY;(b||c!==d)&&this.ama(c)},
HZ:function(a,b){-1!==Object.keys(this.pn).indexOf(a)&&this.widget().toggleClass(this.pn[a],!!b)},Lx:function(a){if(this.xv())try{this.b1(this.options.value,this.Nv.bQ)}catch(c){(a=this.XK(c,a,b.Ic.Mr.jF))&&this.vD("messagesHidden",a)}else b.r.Sy>b.r.Vm&&b.r.info("Deferred validation skipped as component is readonly or disabled.")},bka:function(a,b,c,d){var e=a;try{b===this.Nv.zP&&(e=this.EC(a)),this.b1(e,b===this.Nv.bQ)}catch(g){throw a=this.XK(g,c),this.vD("messagesShown",a,d),g;}return e},p_:function(a){var b=
!0;this.XB()&&(b=!1);this.JA();b?this.en()&&this.Lx(a.Ni):this.xD(a)},ama:function(a,b){var c,d;this.Dka(a);c=a;try{c=this.bq(a)}catch(e){d=this.XK(e),this.vD("messagesShown",d,b)}this.ni(c);c=this.dg();this.L_(c);this.As(c,null)},xD:function(a){var b;b=this.zS(this.dg(),null,a);void 0===b||!this.isValid()&&this.Lfa()||this.$0(b,null,a.Ni)},b1:function(a,c){var d=this.bR(),e,g,f=[];if(this.en()){e=this.XV();try{e.validate(b.Ea.trim(a))}catch(h){this.PG(h,f)}}if(!c)for(g=0;g<d.length;g++)if(e=d[g],
"object"===typeof e)if(e.validate&&"function"===typeof e.validate)try{e.validate(a)}catch(k){this.PG(k,f)}else b.r.Sy>b.r.Vm&&b.r.info("validator does not support the validate method.");if(0<f.length)throw d=Error(),d.hx=f,d;}},!0);b.Components.Gm({editableValue:{displayOptions:{messages:["inline"],converterHint:["placeholder","notewindow"],validatorHint:["notewindow"],title:["notewindow"]}}});b.df=function(a){this.Init(a)};b.Sa.FE(b.Sa.cd.dv,b.df);b.b.ga(b.df,b.oc,"oj.InlineMessagingStrategy");b.df.prototype.yr=
function(a){b.df.q.yr.call(this,a);this.zZ()};b.df.prototype.SO=function(a){return a&&void 0!==a.E5?!0:!1};b.df.prototype.update=function(){b.df.q.update.call(this);this.zZ()};b.df.prototype.Nk=function(){this.YZ();b.df.q.Nk.call(this)};b.df.prototype.zZ=function(){var a,b;a=this.Ui().widget();this.SU()||(this.Je=f("\x3cdiv class\x3d'oj-messaging-inline-container'\x3e\x3c/div\x3e"),this.NG(this.Je),a.append(this.Je));(b=this.C$())?(a=this.Je[0],a.innerHTML="",a.innerHTML=b):this.YZ()};b.df.prototype.YZ=
function(){this.SU()&&this.Je&&(this.kja(this.Je),this.Je.remove(),this.Je=null)};b.df.prototype.NG=function(a){var c=this.Xh();b.l.zd(c,jQuery);b.l.zd(a,jQuery);a=a.uniqueId().attr("id");var d=c.attr("aria-describedby"),d=d?d.split(/\s+/):[];d.push(a);d=f.trim(d.join(" "));c.attr("aria-describedby",d)};b.df.prototype.kja=function(a){var c=this.Xh();b.l.zd(c,jQuery);b.l.zd(a,jQuery);a=a.attr("id");var d=c.attr("aria-describedby"),d=d?d.split(/\s+/):[];a=f.inArray(a,d);-1!==a&&d.splice(a,1);(d=f.trim(d.join(" ")))?
c.attr("aria-describedby",d):c.removeAttr("aria-describedby")};b.df.prototype.C$=function(){var a=this.Ui().document[0];return this.kQ()?this.dH(a):""};b.df.prototype.dH=function(a){var c;c="";var d=this.fF();this.oF()&&(c=this.gF(),c=b.Na.u1(a,c,d,!0));return c};b.df.prototype.SU=function(){return null!=this.Je}});