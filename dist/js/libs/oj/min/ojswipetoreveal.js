/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","hammerjs","promise","ojs/ojjquery-hammer","ojs/ojoffcanvas"],function(b,f){b.qv={};o_("SwipeToRevealUtils",b.qv,b);b.qv.Npa=function(a,d){var c,e,g,h,k,l,m,n,p,r,s;c=f(a);c.hasClass("oj-swipetoreveal")||(c.addClass("oj-swipetoreveal"),e=c.hasClass("oj-offcanvas-start")?"end":"start",g={},g.selector=c,b.o.Z4(g),h=b.o.jt(c),null!=d&&(k=d.threshold),null!=k?(k=parseInt(k,10),/%$/.test(d.threshold)&&(k=k/100*h.outerWidth())):k=.55*h.outerWidth(),l=Math.min(.3*h.outerWidth(),
c.outerWidth()),m=!1,h.on("click.swipetoreveal",function(a){m&&(a.stopImmediatePropagation(),m=!1)}),c.on("ojpanstart",function(a,b){b.direction!=e?a.preventDefault():(c.children().addClass("oj-swipetoreveal-action"),r=c.children(".oj-swipetoreveal-default").get(0),p=(new Date).getTime())}).on("ojpanmove",function(a,b){m=!0;null!=r&&(b.distance>k?c.children().each(function(){this!=r&&f(this).addClass("oj-swipetoreveal-hide-when-full")}):c.children().removeClass("oj-swipetoreveal-hide-when-full"))}).on("ojpanend",
function(a,b){s=b.distance;null!=r&&s>k&&(n=f.Event("ojdefaultaction"),c.trigger(n,g),a.preventDefault());s<l&&(200<(new Date).getTime()-p||10>s)&&a.preventDefault()}))};o_("SwipeToRevealUtils.setupSwipeActions",b.qv.Npa,b);b.qv.aqa=function(a){var d;d=f(a);a={};a.selector=d;d=b.o.jt(d);null!=d&&d.off("click.swipetoreveal");b.o.m5(a)};o_("SwipeToRevealUtils.tearDownSwipeActions",b.qv.aqa,b)});