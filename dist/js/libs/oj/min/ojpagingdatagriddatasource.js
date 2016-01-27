/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojpagingtabledatasource"],function(b){b.we=function(b,a){this.pr=b;this.vm=a};o_("PagingHeaderSet",b.we,b);b.we.prototype.getData=function(b,a){return this.pr.getData(b+this.vm,a)};b.b.g("PagingHeaderSet.prototype.getData",{getData:b.we.prototype.getData});b.we.prototype.getMetadata=function(b,a){return this.pr.getMetadata(b+this.vm,a)};b.b.g("PagingHeaderSet.prototype.getMetadata",{getMetadata:b.we.prototype.getMetadata});b.we.prototype.R=function(){return this.pr.R()};
b.b.g("PagingHeaderSet.prototype.getCount",{R:b.we.prototype.R});b.we.prototype.sg=function(){return this.pr.sg()};b.b.g("PagingHeaderSet.prototype.getLevelCount",{sg:b.we.prototype.sg});b.we.prototype.Tb=function(b,a){return this.pr.Tb(b+this.vm,a)};b.b.g("PagingHeaderSet.prototype.getExtent",{Tb:b.we.prototype.Tb});b.we.prototype.ke=function(b,a){return this.pr.ke(b+this.vm,a)};b.b.g("PagingHeaderSet.prototype.getDepth",{ke:b.we.prototype.ke});b.we.prototype.F2=function(){return this.pr};b.b.g("PagingHeaderSet.prototype.getHeaderSet",
{F2:b.we.prototype.F2});b.we.prototype.By=function(){return this.vm};b.b.g("PagingHeaderSet.prototype.getStartIndex",{By:b.we.prototype.By});b.Ka=function(f){if(!(f instanceof b.Qm))throw new b.X("Not a datagridatasource","Not a datagridatasource",b.X.Sb.ERROR);this.uc=f;this.$=0;this.Init()};o_("PagingDataGridDataSource",b.Ka,b);b.b.ga(b.Ka,b.Qm,"oj.PagingDataGridDataSource");b.Ka.prototype.Init=function(){b.Ka.q.Init.call(this);this.fL()};b.b.g("PagingDataGridDataSource.prototype.Init",{Init:b.Ka.prototype.Init});
b.Ka.prototype.fL=function(){this.uc.on("change",this.Aea.bind(this))};b.Ka.prototype.getPage=function(){return this.Mc};b.b.g("PagingDataGridDataSource.prototype.getPage",{getPage:b.Ka.prototype.getPage});b.Ka.prototype.setPage=function(f,a){a=a||{};f=parseInt(f,10);try{b.Ka.q.handleEvent.call(this,b.bc.D.BEFOREPAGE,{page:f,previousPage:this.Mc})}catch(d){return Promise.reject(null)}this.La=null!=a.pageSize?a.pageSize:this.La;a.startIndex=f*this.La;var c=this.Mc;this.Mc=f;this.$=a.startIndex;var e=
this;return new Promise(function(b,d){e.Ce(a).then(function(){b(null)},function(){e.Mc=c;e.$=e.Mc*e.La;d(null)})})};b.b.g("PagingDataGridDataSource.prototype.setPage",{setPage:b.Ka.prototype.setPage});b.Ka.prototype.Ce=function(b){this.Ol=!0;this.$=b.startIndex;var a=this;return new Promise(function(b){a.handleEvent("change",{operation:"sync",pageSize:a.La});b(void 0)})};b.Ka.prototype.fetch=function(b){this.La=b.pageSize+b.startIndex;b.startIndex=0;return this.Ce(b)};b.b.g("PagingDataGridDataSource.prototype.fetch",
{fetch:b.Ka.prototype.fetch});b.Ka.prototype.getStartItemIndex=function(){return this.$};b.b.g("PagingDataGridDataSource.prototype.getStartItemIndex",{getStartItemIndex:b.Ka.prototype.getStartItemIndex});b.Ka.prototype.getEndItemIndex=function(){return this.ij};b.b.g("PagingDataGridDataSource.prototype.getEndItemIndex",{getEndItemIndex:b.Ka.prototype.getEndItemIndex});b.Ka.prototype.getPageCount=function(){var b=this.totalSize();return-1==b?-1:Math.ceil(b/this.La)};b.b.g("PagingDataGridDataSource.prototype.getPageCount",
{getPageCount:b.Ka.prototype.getPageCount});b.Ka.prototype.Aea=function(f){switch(f.operation){case "refresh":this.$=0;this.handleEvent("change",{operation:"sync",pageSize:this.La});this.handleEvent(b.ka.D.REFRESH,null);break;case "reset":this.handleEvent(b.ka.D.RESET,null);break;case "insert":this.handleEvent(b.ka.D.ADD,{index:f.indexes.row});break;case "delete":this.handleEvent(b.ka.D.REMOVE,null);break;case "update":f.indexes.row=0<=f.indexes.row-this.$?f.indexes.row-this.$:-1;this.handleEvent("change",
f);break;default:this.handleEvent("change",f),this.handleEvent(b.ka.D.SYNC,null)}};b.Ka.prototype.R=function(b){var a=this.uc.R(b);return"row"===b&&0<=a?this.$+this.La<a?this.La:a-this.$:a};b.b.g("PagingDataGridDataSource.prototype.getCount",{R:b.Ka.prototype.R});b.Ka.prototype.rg=function(b){return this.uc.rg(b)};b.b.g("PagingDataGridDataSource.prototype.getCountPrecision",{rg:b.Ka.prototype.rg});b.Ka.prototype.If=function(f,a,d){var c;null==this.Ol?(c=new b.Ed(0,0,f.axis,null),null!=a&&a.success&&
a.success.call(d.success,c,f)):"row"===f.axis?(f.start+=this.$,f.start+f.count>this.$+this.La&&(f.count=this.La-f.start),this.Ot={callbacks:a,callbackObjects:d},this.uc.If(f,{success:this.PJ.bind(this),error:this.Bfa.bind(this)},d)):this.uc.If(f,a,d)};b.b.g("PagingDataGridDataSource.prototype.fetchHeaders",{If:b.Ka.prototype.If});b.Ka.prototype.PJ=function(f,a){var d,c,e;a.start-=this.$;a.count+=1;d=new b.we(f,this.$);c=this.Ot.callbacks.success;e=this.Ot.callbackObjects.success;this.Ot=null;c.call(e,
d,a)};b.Ka.prototype.Bfa=function(b){var a,d;a=this.Ot.callbacks.error;d=this.Ot.callbackObjects.error;this.Ot=null;a.call(d,b)};b.Ka.prototype.qg=function(f,a,d){var c;if(null==this.Ol)c=new b.Sf(0,0,0,0,null),null!=a&&a.success&&a.success.call(d.success,c,f);else{for(c=0;c<f.length;c+=1)"row"===f[c].axis&&(f[c].start+=this.$,f[c].start+f[c].count>this.$+this.La&&(f[c].count=this.La-f[c].start));this.Mt={callbacks:a,callbackObjects:d};this.uc.qg(f,{success:this.zea.bind(this),error:this.yea.bind(this)},
d)}};b.b.g("PagingDataGridDataSource.prototype.fetchCells",{qg:b.Ka.prototype.qg});b.Ka.prototype.zea=function(f,a){var d,c,e;for(d=0;d<a.length;d+=1)"row"===a[d].axis&&(a[d].start-=this.$,a[d].count+=1);d=new b.$h(f,this.$);c=this.Mt.callbacks.success;e=this.Mt.callbackObjects.success;this.Mt=null;this.ij=this.$+f.R("row")-1;this.handleEvent("sync",{data:Array(f.R("row")),startIndex:this.$});c.call(e,d,a)};b.Ka.prototype.yea=function(b){var a,d;a=this.Mt.callbacks.error;d=this.Mt.callbackObjects.error;
this.Mt=null;a.call(d,b)};b.Ka.prototype.keys=function(b){return this.uc.keys({column:b.column,row:b.row+this.$})};b.b.g("PagingDataGridDataSource.prototype.keys",{keys:b.Ka.prototype.keys});b.Ka.prototype.wg=function(b){b=this.uc.wg(b);-1!=b.row&&(b.row-=this.$);return b};b.b.g("PagingDataGridDataSource.prototype.indexes",{wg:b.Ka.prototype.wg});b.Ka.prototype.getCapability=function(b){return this.uc.getCapability(b)};b.b.g("PagingDataGridDataSource.prototype.getCapability",{getCapability:b.Ka.prototype.getCapability});
b.Ka.prototype.size=function(){var b;if(null==this.Ol)return-1;b=this.uc.R("row");return this.uc.R("row")>this.La?this.La:b};b.b.g("PagingDataGridDataSource.prototype.size",{size:b.Ka.prototype.size});b.Ka.prototype.sort=function(b,a,d){this.uc.sort(b,a,d)};b.b.g("PagingDataGridDataSource.prototype.sort",{sort:b.Ka.prototype.sort});b.Ka.prototype.totalSize=function(){return null==this.Ol?-1:this.uc.R("row")};b.b.g("PagingDataGridDataSource.prototype.totalSize",{totalSize:b.Ka.prototype.totalSize});
b.Ka.prototype.totalSizeConfidence=function(){return"actual"};b.b.g("PagingDataGridDataSource.prototype.totalSizeConfidence",{totalSizeConfidence:b.Ka.prototype.totalSizeConfidence});b.Ka.prototype.od=function(b,a,d){return this.uc.od(b,a,d)};b.b.g("PagingDataGridDataSource.prototype.moveOK",{od:b.Ka.prototype.od});b.Ka.prototype.move=function(b,a,d,c,e){this.uc.move(b,a,d,c,e)};b.b.g("PagingDataGridDataSource.prototype.move",{move:b.Ka.prototype.move});b.$h=function(b,a){this.oE=b;this.vm=a};o_("PagingCellSet",
b.$h,b);b.$h.prototype.getData=function(b){return this.oE.getData({column:b.column,row:b.row+this.vm})};b.b.g("PagingCellSet.prototype.getData",{getData:b.$h.prototype.getData});b.$h.prototype.getMetadata=function(b){return this.oE.getMetadata({column:b.column,row:b.row+this.vm})};b.b.g("PagingCellSet.prototype.getMetadata",{getMetadata:b.$h.prototype.getMetadata});b.$h.prototype.R=function(b){return this.oE.R(b)};b.b.g("PagingCellSet.prototype.getCount",{R:b.$h.prototype.R});b.$h.prototype.q2=function(){return this.oE};
b.b.g("PagingCellSet.prototype.getCellSet",{q2:b.$h.prototype.q2});b.$h.prototype.By=function(){return this.vm};b.b.g("PagingCellSet.prototype.getStartIndex",{By:b.$h.prototype.By})});