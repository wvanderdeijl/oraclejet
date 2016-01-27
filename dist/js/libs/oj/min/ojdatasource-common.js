/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore","jquery"],function(b){b.Ri=function(b){this.data=b;this.Init()};o_("DataSource",b.Ri,b);b.b.ga(b.Ri,b.Jg,"oj.DataSource");b.Ri.prototype.Init=function(){b.Ri.q.Init.call(this)};b.b.g("DataSource.prototype.Init",{Init:b.Ri.prototype.Init});b.qp=function(f){b.qp.q.constructor.call(this,f)};o_("TreeDataSource",b.qp,b);b.b.ga(b.qp,b.Ri,"oj.TreeDataSource");b.T=function(f,a){if(this.constructor==b.T)throw Error(b.T.fc.Dqa+"\n"+b.T.fc.Cqa);this.data=f;this.options=a;this.$=0;this.Init()};
o_("TableDataSource",b.T,b);b.b.ga(b.T,b.Ri,"oj.TableDataSource");b.T.prototype.Init=function(){b.T.q.Init.call(this)};b.b.g("TableDataSource.prototype.Init",{Init:b.T.prototype.Init});b.T.prototype.totalSizeConfidence=function(){return"actual"};b.b.g("TableDataSource.prototype.totalSizeConfidence",{totalSizeConfidence:b.T.prototype.totalSizeConfidence});b.T.D={ADD:"add",REMOVE:"remove",RESET:"reset",REFRESH:"refresh",SORT:"sort",CHANGE:"change",REQUEST:"request",SYNC:"sync",ERROR:"error"};o_("TableDataSource.EventType",
b.T.D,b);b.T.fc={_ERR_TABLE_DATASOURCE_INSTANTIATED_SUMMARY:"oj.TableDataSource constructor called.",_ERR_TABLE_DATASOURCE_INSTANTIATED_DETAIL:"Please do not instantiate oj.TableDataSource. Please use one of the subclasses instead such as oj.ArrayTableDataSource or oj.CollectionTableDataSource.",_ERR_DATA_INVALID_TYPE_SUMMARY:"Invalid data type.",_ERR_DATA_INVALID_TYPE_DETAIL:"Please specify the appropriate data type."};b.Qm=function(f){b.Qm.q.constructor.call(this,f)};o_("DataGridDataSource",b.Qm,
b);b.b.ga(b.Qm,b.Ri,"oj.DataGridDataSource")});