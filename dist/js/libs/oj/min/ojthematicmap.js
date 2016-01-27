/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojs/ojdvt-base","ojs/internal-deps/dvt/DvtThematicMap"],function(b,f,a,d,c){b.ya("oj.ojThematicMap",f.oj.dvtBaseComponent,{widgetEventPrefix:"oj",options:{load:null,optionChange:null},qU:"",tC:[],y0:{ar:"ar",cs:"cs",da:"da",de:"de",el:"el",es:"es",fi:"fi",fr:"fr","fr-ca":"fr_CA",he:"iw",hu:"hu",it:"it",ja:"ja",ko:"ko",nl:"nl",no:"no",pl:"pl",pt:"pt_BR","pt-pt":"pt",ro:"ro",ru:"ru",sk:"sk",sv:"sv",th:"th",tr:"tr","zh-hans":"zh_CN","zh-hant":"zh_TW"},
_ComponentCreate:function(){this._super();this.Qp=[];this.LX=!1;this.Ps=[]},lf:function(a,b,d){return c.DvtThematicMap.newInstance(a,b,d)},ci:function(a){var b=a.subId;"oj-thematicmap-area"==b?b=a.dataLayer+":area["+a.index+"]":"oj-thematicmap-marker"==b?b=a.dataLayer+":marker["+a.index+"]":"oj-thematicmap-tooltip"==b&&(b="tooltip");return b},cg:function(a){var b={};0<a.indexOf(":area")?(b.subId="oj-thematicmap-area",b.dataLayer=a.substring(0,a.indexOf(":")),b.index=this.Ch(a)):0<a.indexOf(":marker")?
(b.subId="oj-thematicmap-marker",b.dataLayer=a.substring(0,a.indexOf(":")),b.index=this.Ch(a)):"tooltip"==a&&(b.subId="oj-thematicmap-tooltip");return b},Ae:function(){var a=this._super();a.push("oj-thematicmap");return a},di:function(){var a=this._super();a["oj-dvtbase oj-thematicmap"]={path:"animationDuration",property:"animation-duration"};a["oj-thematicmap-arealayer"]=[{path:"styleDefaults/areaStyle",property:"CSS_BACKGROUND_PROPERTIES"},{path:"styleDefaults/labelStyle",property:"CSS_TEXT_PROPERTIES"}];
a["oj-thematicmap-area"]={path:"styleDefaults/dataAreaDefaults/borderColor",property:"border-top-color"};a["oj-thematicmap-area oj-hover"]={path:"styleDefaults/dataAreaDefaults/hoverColor",property:"border-top-color"};a["oj-thematicmap-area oj-selected"]=[{path:"styleDefaults/dataAreaDefaults/selectedInnerColor",property:"border-top-color"},{path:"styleDefaults/dataAreaDefaults/selectedOuterColor",property:"border-bottom-color"}];a["oj-thematicmap-marker"]=[{path:"styleDefaults/dataMarkerDefaults/labelStyle",
property:"CSS_TEXT_PROPERTIES"},{path:"styleDefaults/dataMarkerDefaults/color",property:"background-color"},{path:"styleDefaults/dataMarkerDefaults/opacity",property:"opacity"},{path:"styleDefaults/dataMarkerDefaults/borderColor",property:"border-top-color"}];return a},gi:function(){return["load","optionChange"]},_setOptions:function(a,c){var d=Object.keys(a).length,f=a.areaLayers,l=this.options.areaLayers,m=a.pointDataLayers;if(1==d&&f&&l&&0<l.length)for(d=0;d<f.length;d++){var m=f[d],n=l[d],p=!0,
r;for(r in m)"areaDataLayer"!=r&&m[r]!=n[r]&&(p=p&&!1);p&&!b.b.jh(n.areaDataLayer,m.areaDataLayer)&&this.Ps.push({options:m.areaDataLayer,parentLayer:m.layer,isADL:!0})}else if(1==d&&m&&this.options.pointDataLayers&&0<this.options.pointDataLayers.length)for(d=0;d<m.length;d++)b.b.jh(this.options.pointDataLayers[d],m[d])||this.Ps.push({options:m[d],parentLayer:m[d].id,isADL:!1});this._super(a,c)},eg:function(){this.lha();for(var a=0;a<this.Qp.length;a++)if(!this.tC[this.Qp[a]])return;this.Qp=[];this.Zla();
var b=this.options.areaLayers;if(b)for(a=0;a<b.length;a++){var c=b[a].areaDataLayer;if(c){var d=c._templateRenderer;d&&(c.renderer=this.RB(d,c.markers))}}if(b=this.options.pointDataLayers)for(a=0;a<b.length;a++)(c=b[a])&&(d=c._templateRenderer)&&(c.renderer=this.RB(d,c.markers));this.options._contextHandler=this.II();if(this.LX&&0<this.Ps.length){if(this.hg.isReadyToRender()){for(a=0;a<this.Ps.length;a++)d=this.Ps[a],this.na.updateLayer(d.options,d.parentLayer,d.isADL);this.Ps=[]}}else this._super(),
this.LX=!0;this._trigger("load",null,null)},RB:function(a){var b=this;return function(c){var d=document.createElement("div");d.style.display="none";d.nI=b.hg;b.element.append(d);a({parentElement:d,data:c.data});return(c=d.children[0])?"http://www.w3.org/2000/svg"===c.namespaceURI?(f(d).remove(),c):b.Av(c):null}},II:function(){var a=this;return function(c,d,f,l,m){return{component:b.Components.vg(a.element),parentElement:c,rootElement:d,data:f,state:l,previousState:m,id:f.id,label:f.label,color:f.color,
location:f.location,x:f.x,y:f.y}}},renderDefaultHover:function(a){a.previousState&&a.state.hovered==a.previousState.hovered||this.na.processDefaultHoverEffect(a.id,a.state.hovered)},renderDefaultSelection:function(a){a.previousState&&a.state.selected==a.previousState.selected||this.na.processDefaultSelectionEffect(a.id,a.state.selected)},renderDefaultFocus:function(a){a.previousState&&a.state.focused==a.previousState.focused||this.na.processDefaultFocusEffect(a.id,a.state.focused)},lha:function(){var a=
this.options.basemap;if(a){var c=b.ba.tg();c!==this.qU&&(this.qU=c,this.tC=[]);var a=a.charAt(0).toUpperCase()+a.slice(1),d=this.options.areaLayers;if(d)for(var f=0;f<d.length;f++){var l=d[f].layer;l&&(l=l.charAt(0).toUpperCase()+l.slice(1),this.yY(a,l,c))}(d=this.options.pointDataLayers)&&0<d.length&&this.yY(a,"Cities",c)}},BY:function(a){if(!this.tC[a]){var c=b.ba.jb(a),d=this,k=this.tC;f.getScript(c,function(){k[a]=!0;d.eg()})}},yY:function(a,b,c){var d="resources/internal-deps/dvt/thematicMap/basemaps/DvtBaseMap"+
a+b+".js";-1==this.Qp.indexOf(d)&&(this.Qp.push(d),this.BY(d));if(-1===c.indexOf("en"))for(d=c.toLowerCase().split("-"),c=[d[0]],1<d.length&&c.unshift(d[0]+"-"+d[1]),2<d.length&&c.unshift(d[0]+"-"+d[2],d[0]+"-"+d[1]+"-"+d[2]),a="resources/internal-deps/dvt/thematicMap/resourceBundles/"+a+b+"Bundle",b=0;b<c.length;b++)if(this.y0[c[b]]){a=a+"_"+this.y0[c[b]]+".js";-1==this.Qp.indexOf(a)&&(this.Qp.push(a),this.BY(a));break}},ji:function(a){var b,d;if((a&&a.getType?a.getType():null)===c.DvtSelectionEvent.TYPE){b=
{};d=a.getParamValue("clientId");b[d]=a.getSelection();if(this.options.selection)for(var f in this.options.selection)d!==f&&(b[f]=this.options.selection[f]);this.ic("selection",b)}else this._super(a)},hi:function(){var a=this.options.translations,b=this._super();b["DvtUtilBundle.THEMATIC_MAP"]=a.componentName;return b},Zla:function(){var a=this.options.selection;if(a){var b=this.options.pointDataLayers;if(b)for(var c=0;c<b.length;c++)a[b[c].id]&&(b[c].selection=a[b[c].id]);if(b=this.options.areaLayers)for(c=
0;c<b.length;c++){var d=b[c].areaDataLayer;d&&a[d.id]&&(d.selection=a[d.id])}}},getArea:function(a,b){var c=this.na.getAutomation().getData(a,"area",b);this.Og(c);return c},getMarker:function(a,b){var c=this.na.getAutomation().getData(a,"marker",b);this.Og(c);return c},getContextByNode:function(a){return(a=this.getSubIdByNode(a))&&"oj-thematicmap-tooltip"!==a.subId?a:null},ei:function(){return{areaLayers:["areaDataLayer/areas","areaDataLayer/markers"],pointDataLayers:["markers"]}},cR:function(a){var b=
this.options.basemap;a=a.layer?a.layer:"cities";return{basemap:b,layer:a,ids:c.DvtBaseMapManager.getLayerIds(b,a)}}})});