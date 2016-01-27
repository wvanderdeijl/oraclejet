/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojs/ojdvt-base","ojs/internal-deps/dvt/DvtPictoChart"],function(b,f,a,d,c){b.ya("oj.ojPictoChart",f.oj.dvtBaseComponent,{widgetEventPrefix:"oj",options:{optionChange:null,drill:null},lf:function(a,b,d){return c.DvtPictoChart.newInstance(a,b,d)},ci:function(a){var b=a.subId;"oj-pictochart-item"==b?b="item["+a.index+"]":"oj-pictochart-tooltip"==b&&(b="tooltip");return b},cg:function(a){var b={};0==a.indexOf("item")?(b.subId="oj-pictochart-item",b.index=
this.Ch(a)):"tooltip"==a&&(b.subId="oj-pictochart-tooltip");return b},Ae:function(){var a=this._super();a.push("oj-pictochart");return a},di:function(){var a=this._super();a["oj-pictochart-item"]={path:"_defaultColor",property:"background-color"};return a},gi:function(){return["optionChange"]},ji:function(a){var b=a&&a.getType?a.getType():null;b===c.DvtSelectionEvent.TYPE?this.ic("selection",a.getSelection()):b===c.DvtCategoryRolloverEvent.TYPE_OVER||b===c.DvtCategoryRolloverEvent.TYPE_OUT?this.ic("highlightedCategories",
a.categories):b===c.DvtDrillEvent.TYPE?this._trigger("drill",null,{id:a.getId()}):this._super(a)},getItem:function(a){return this.na.getAutomation().getItem(a)},getItemCount:function(){return this.na.getAutomation().getItemCount()},getContextByNode:function(a){return(a=this.getSubIdByNode(a))&&"oj-pictochart-tooltip"!==a.subId?a:null},ei:function(){return{root:["items"]}},Oz:function(){return!0}})});