/**
 * Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(['./DvtToolkit'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.
  
  // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  
D.kR=(0,D.t)();D.A.q(D.kR,D.A,"DvtAttrGroups");D.kR.prototype.get=(0,D.t)();
D.mR=function(){this.cR=[]};D.A.q(D.mR,D.kR,"DvtDiscreteAttrGroups");D.mR.prototype.add=function(a,b,c){this.cR.push({group:a,ILa:b,Nca:c})};D.mR.prototype.get=function(a){if(a===D.o)return D.o;for(var b=0;b<this.cR.length;b++)if(this.cR[b].group==a)return this.cR[b].Nca;return D.o};
D.lR=function(a,b,c,d,e){this.ck=a;this.yk=b;this.oEa=c?c:this.ck;this.iEa=d?d:this.yk;this.fL=e;this.yoa=this.yk-this.ck};D.A.q(D.lR,D.kR,"DvtContinuousAttrGroups");D.lR.prototype.get=function(a){if((0,window.isNaN)(a)||a===D.o)return D.o;a=0<this.yoa?(a-this.ck)/this.yoa:0.5;a=window.Math.max(window.Math.min(a,1),0);a*=this.fL.length-1;return a===window.Math.round(a)?this.fL[a]:D.J.JM(this.fL[window.Math.floor(a)],this.fL[window.Math.ceil(a)],a-window.Math.floor(a))};D.lR.prototype.qS=(0,D.y)("oEa");
D.nR=(0,D.t)();D.A.q(D.nR,D.A,"DvtLegendAttrGroupsRenderer");D.nR.Dya=0.4;D.nR.tha=1;D.nR.vha=50;D.nR.uha=10;D.nR.U3=5;D.nR.Bya=11;D.nR.Jha="#636363";D.nR.jPa="#333333";D.nR.eda=function(a,b,c,d,e,f,g){var h=D.o;f&&(f instanceof D.lR?h=D.nR.yFa(a,b,c,d,f,g):f instanceof D.mR&&(h=D.nR.zFa(a,c,d,e,f,g)));return h};
D.nR.yFa=function(a,b,c,d,e,f){var g=(0,D.G)(a),h=D.nR.uha/2+D.nR.tha,j=new D.F(a);c.k(j);c=e.qS();var l=new D.Kf(a,c,0,h);l.Na(f.nw);l.Ff();j.k(l);var m=new D.Re(a,0,D.nR.tha,D.nR.vha,D.nR.uha),n=g?e.fL.slice(0).slice().reverse():e.fL.slice(0);m.P(new D.gg(0,n));f.borderColor&&m.Za(f.borderColor);j.k(m);n=D.nR.vha+D.nR.U3;e=e.iEa;a=new D.Kf(a,e,0,h);a.Na(f.nw);a.Ff();j.k(a);g?(f=a.Nb().e+D.nR.U3,m.N(f),l.ka(f+n)):(f=l.Nb().e+D.nR.U3,m.N(f),a.ka(f+n));b.La(m,new D.Kj(c+" - "+e));j.I().e>d&&(j.removeChild(l),
j.removeChild(a),m.N(0));return j};D.nR.zFa=function(a,b,c,d,e,f){var g=new D.F(a);b.k(g);b=[];e=e.cR.slice(0);for(var h=0;h<e.length;h++){var j=e[h];b.push({text:j.ILa,color:j.Nca.color,pattern:j.Nca.pattern,borderColor:f.borderColor})}f={sections:[{items:b}],orientation:"horizontal",layout:{outerGapWidth:0,outerGapHeight:0},textStyle:f.nw.toString()};b=(0,D.Hn)(a);b.setId(D.o);g.k(b);d=b.Pp(f,c,d*D.nR.Dya);b.W(f,c,d.g);c=b.rs();a=new D.Re(a,0,0,c.e,d.g);(0,D.Ai)(a);g.Sa(a,0);return g};
D.ct=function(a){this.Init("breadcrumbsDrill");this.ib=a};D.A.q(D.ct,D.Pi,"DvtBreadcrumbsDrillEvent");D.ct.prototype.getId=(0,D.y)("ib");
D.$r=function(a,b,c,d){this.Init(a,b,c,d)};D.A.q(D.$r,D.F,"DvtBreadcrumbs");D.z=D.$r.prototype;D.z.Init=function(a,b,c,d){D.$r.u.Init.call(this,a);this.le=D.oR.fk(d);this.rb=new D.pR(this,a,b,c);this.rb.Ge(this);this.setId("breadcrumbs1000"+window.Math.floor(1E9*window.Math.random()));this.oC=-1;this.tW=this.O7=D.o};D.z.W=function(a,b){this.wa=a?D.vl.ea(a):this.wa;this.Rj();this.tW=D.o;D.qR.W(this,this,b)};D.z.xh=(0,D.y)("rb");D.z.sc=function(){var a=this.oC;this.oC=-1;this.wA(a,this.oC)};
D.z.wA=function(a,b){var c=this.O7,d=D.o,e=(0,D.Rt)(this,b);if(e){var f=(0,D.Jj)(this.rb,e);f&&f.eh&&f.eh()?(d=this.j(),f=e.I(),e=e.Da(),this.O7=d=new D.Dg(d,this,f,e)):this.O7=D.o}c&&c.Po();d&&d.show()};D.Rt=function(a,b){var c=a.tW;return 0>b||!c||b>=c.length?D.o:c[b]};D.Pt=function(a,b){for(var c=a.tW,d=0;d<c.length;d++)if(c[d]==b)return d};
D.oR={};D.A.q(D.oR,D.A,"DvtBreadcrumbsDefaults");D.oR.ixa={labelStyle:"font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 11px; color: #003286;",disabledLabelStyle:"font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 11px;",bV:2,Nza:"\x3e"};D.oR.fk=function(a){var b=D.oR.O6(a);return a?D.vl.Xd(a,b):b};D.oR.O6=function(){return D.vl.ea(D.oR.ixa)};D.oR.fba=function(a,b){return window.Math.ceil(b*a.layout.gapRatio)};
D.pR=function(a,b,c,d){this.Init(b,c,d);this.tn=a};D.A.q(D.pR,D.Uj,"DvtBreadcrumbsEventManager");D.pR.prototype.Wh=function(a){D.pR.u.Wh.call(this,a);(0,D.rR)(this,(0,D.Jj)(this,a.target))};D.pR.prototype.zr=function(a){(0,D.rR)(this,(0,D.Jj)(this,a.target))};D.rR=function(a,b){if(b&&b instanceof D.sR&&b.eh()){var c=new D.ct(b.getId());a.jh(c,a.tn)}};
D.pR.prototype.gr=function(a){var b=D.k,c=a.keyCode;if(9==c){var c=this.tn,d=c.oC,e;e=d;var f=!a.shiftKey;e=-1==e?f?0:c.wa.gm.length-2:f?e==c.wa.gm.length-2?-1:++e:0==e?-1:--e;c.oC=e;c.wA(d,c.oC);c=c.oC;-1==c?b=D.p:this.Yw((0,D.Rt)(this.tn,c))}else 13==c&&(0,D.rR)(this,(0,D.Jj)(this,(0,D.Rt)(this.tn,this.tn.oC)));b&&(0,D.ki)(a);return b};
D.sR=function(a,b){this.Init();this.ib=a;this.xO=D.p;this.Dg=b};D.A.q(D.sR,D.Kj,"DvtBreadcrumbsPeer");D.sR.prototype.getId=(0,D.y)("ib");D.sR.prototype.eh=(0,D.y)("xO");D.sR.prototype.zda=(0,D.v)("xO");D.sR.prototype.ta=(0,D.y)("Dg");
D.qR={};D.A.q(D.qR,D.A,"DvtBreadcrumbsRenderer");D.qR.UB=3;D.qR.W=function(a,b,c){for(var d=a.j(),e=(a.wa?a.wa:{}).gm?(a.wa?a.wa:{}).gm:[],f=a.le,g=a.xh(),h=[],j=[],l=0;l<e.length;l++){var m=e[l];if(m){var n=D.qR.uF(d,m.label?m.label:"",f,l<e.length-1);h.push(n);m=new D.sR(m.id,n);g.La(n,m);j.push(m);l<e.length-1&&m.zda(D.k)}}a.tW=h;(0,D.G)(d)?D.qR.gFa(a,b,c,h,j):D.qR.fFa(a,b,c,h,j)};
D.qR.oW=function(a,b,c){b=new D.Kf(a,b,0,0);b.xa(D.p);b.Na(c);var d=(0,D.We)(c,"padding-top"),e=(0,D.We)(c,"padding-right"),f=(0,D.We)(c,"padding-bottom"),g=(0,D.We)(c,"padding-left"),h=(0,D.tg)(a,b);a=new D.Re(a,0,0,h.e+g+e,h.g+d+f);(0,D.Ai)(a);a.Na(c);(0,D.wk)(b,g,d);a.k(b);return a};
D.qR.uF=function(a,b,c,d){if(d&&(c.tca||c.sca)){var e=new D.I(c.nw);d=new D.I(c.tca);c=new D.I(c.sca);e=D.qR.oW(a,b,e);d=D.qR.oW(a,b,d);c=D.qR.oW(a,b,c);a=new D.Ne(a,e,d,c);a.kd("link");a.Rb("label",b)}else d=new D.I(d?c.nw:c.Pqa),(0,D.We)(d,"padding-left")||(0,D.We)(d,"padding-right")||(0,D.We)(d,"padding-top")||(0,D.We)(d,"padding-bottom")?a=D.qR.oW(a,b,d):(a=new D.Kf(a,b,0,0),a.Na(d));return a};
D.qR.Tka=function(a){if(a instanceof D.Ne)return a=a.pm.na(0),a.Kd();a instanceof D.Re&&(a=a.na(0));return a.Kd()};
D.qR.Rpa=function(a,b){if(a instanceof D.Ne){var c=a.pm.na(0);D.Ye.Yb(c,window.Math.max(b-c.R(),0),window.Infinity,c.getParent());c=a.Qj.na(0);D.Ye.Yb(c,window.Math.max(b-c.R(),0),window.Infinity,c.getParent());c=a.jj.na(0);D.Ye.Yb(c,window.Math.max(b-c.R(),0),window.Infinity,c.getParent())}else a instanceof D.Re?(c=a.na(0),D.Ye.Yb(c,window.Math.max(b-c.R(),0),window.Infinity,c.getParent())):D.Ye.Yb(a,b,window.Infinity,a.getParent())};
D.qR.fFa=function(a,b,c,d,e){for(var f=a.le,g=a.xh(),h=[],j=0,l=0;l<d.length;l++){b.k(d[l]);var m=d[l].I();h[l]=m;j=window.Math.max(m.g,j);b.removeChild(d[l])}for(var n=0,l=0;l<d.length;l++){b.k(d[l]);m=h[l];(0,D.wk)(d[l],n,0.5*(j-m.g));if((0,D.Jf)()){var q=new D.Re(b.j(),-D.qR.UB,-D.qR.UB,m.e+2*D.qR.UB,m.g+2*D.qR.UB);(0,D.Ai)(q);d[l].k(q);l<e.length&&g.La(q,e[l])}if(n+m.e>c){a=D.qR.Tka(d[l]);D.qR.Rpa(d[l],c-n);l<e.length?e[l].Gw(a):g.La(d[l],new D.Kj(a));break}else n+=m.e+f.bV;if(l<d.length-1){m=
D.qR.gna(a);b.k(m);q=m.I();(0,D.wk)(m,n,0.5*(j-q.g));q=q.e;if(n+q>c){b.removeChild(m);break}n+=q+f.bV}}};
D.qR.gFa=function(a,b,c,d,e){for(var f=a.le,g=a.xh(),h=0;h<d.length;h++){b.k(d[h]);var j=d[h].I();if((0,D.Jf)()){var l=new D.Re(b.j(),-D.qR.UB,-D.qR.UB,j.e+2*D.qR.UB,j.g+2*D.qR.UB);(0,D.Ai)(l);d[h].k(l);h<e.length&&g.La(l,e[h])}if(0>c-j.e){a=D.qR.Tka(d[h]);D.qR.Rpa(d[h],c);d[h].N(0);h<e.length?e[h].Gw(a):g.La(d[h],new D.Kj(a));break}else d[h].N(c-j.e),c-=j.e+f.bV;if(h<d.length-1)if(j=D.qR.gna(a),b.k(j),l=j.I().e,0>c-l){b.removeChild(j);break}else j.N(c-l),c-=l+f.bV}};
D.qR.gna=function(a){var b=a.le;a=new D.Kf(a.j(),b.Nza,0,0);a.Na(new D.I(b.nw));return a};
D.zR=function(a,b){this.Init("dvtPanelDrawerEvent");this.Qm=a;this.Qza=b};D.A.q(D.zR,D.Pi,"DvtPanelDrawerEvent");D.zR.prototype.Mj=(0,D.y)("Qm");
D.zr=function(a,b,c,d){this.Init(a,b,c,d)};D.A.q(D.zr,D.F,"DvtPanelDrawer");
D.zr.prototype.Init=function(a,b,c,d){D.zr.u.Init.call(this,a,D.o,"panelDrawer"+d);this.MGa=d;this.ha=new D.tR(a,b,c);this.ha.Ge(this);this.ha.Hv.push(D.zr);this.ha.La(this,this);(0,D.Jf)()||(0,D.Cj)(this.ha,new D.uR(this.ha,this));this.tb=b;this.ua=c;this.Ux={};this.gs=[];this.cj=this.hi=window.Number.MAX_VALUE;this.bs=5;this.jQ=0;this.nP;this.fA;this.sq=this.Ui=D.p;this.ja;this.gJ;this.Uf;this.C5;this.bk;this.tk;this.Ao={};this.ov="left";this.sC="top";this.Vz=D.p;this.da=D.o;c&&(this.da=c.xs());
this.Am=(0,D.fu)(this.da,"backgroundAlpha",1);this.it=(0,D.fu)(this.da,"border-color","#bbc7d0");this.$j=(0,window.parseInt)((0,D.fu)(this.da,"border-radius",2));this.wz=(0,D.fu)(this.da,"background-color","#ffffff");this.Ria=(0,D.fu)(this.da,"tab-color-inactive","#dee4e7");this.Sia=(0,D.fu)(this.da,"tab-border-color-inactive","#c1cede");(0,D.Ii)(this);this.Kr=10};D.Dr=function(a,b,c,d,e,f,g){a.Ux[g]={panel:b,iconUp:c,iconOver:d,iconDown:e,tooltip:f};a.gs.push(g);a.jQ=15+42*a.gs.length};D.z=D.zr.prototype;
D.z.Iu=(0,D.v)("hi");D.z.pS=function(){return this.hi-2*this.Kr};D.z.CT=(0,D.v)("cj");D.z.pM=function(){return this.cj-2*this.Kr};D.z.GN=function(a){return this.Ux[a].icon};D.Mr=function(a,b,c,d){a.fA=a.nP;a.nP=b;a.mb()&&(a.qN(),(0,D.vR)(a,b,c,d));a.fA=D.o};D.yr=function(a){var b=a.nP;return!b&&0<a.gs.length?a.gs[0]:b};
D.zr.prototype.qf=function(a,b,c){if(!this.sq){var d=this.Ui;this.Ui=a;if(d!=a)if(this.sq=D.k,a){(0,D.wR)(this,(0,D.yr)(this));a=-(0.8*this.Uf.getWidth());"right"==this.ov&&(a=-a,this.Uf.ka((0.8-1)*this.Uf.getWidth()));if(b)this.ja.N(a),c&&c(),this.sq=D.p;else if(b=new D.pr(this.j(),0.25),b.jm(D.wD),(0,D.T)(b,"typeNumber",this.ja,this.ja.R,this.ja.N,a),c&&(0,D.pl)(b,c),b){var e=this;(0,D.pl)(b,function(){e.sq=D.p});b.play()}this.qN()}else if(b)this.ja.N(0),this.Cga(),c&&c(),this.qN(),this.sq=D.p;
else{b=new D.pr(this.j(),0.25);b.jm(D.yD);(0,D.T)(b,"typeNumber",this.ja,this.ja.R,this.ja.N,0);(0,D.pl)(b,this.Cga,this);(0,D.pl)(b,this.qN,this);c&&(0,D.pl)(b,c);var f=this;(0,D.pl)(b,function(){f.sq=D.p});b.play()}}};D.zr.prototype.mb=(0,D.y)("Ui");
D.zr.prototype.qr=function(){this.ja||(this.ja=new D.F(this.j(),"pd_contentPane"),this.k(this.ja),this.gJ=new D.F(this.j(),"pdcp_activeContent"),this.ja.k(this.gJ));if(!this.Vz){var a=-42;"right"==this.ov&&(a=0);var b=15;if("top"==this.sC)for(var c=0;c<this.gs.length;c++){var d=this.gs[c],d=(0,D.xR)(this,d);(0,D.wk)(d,a,b);b+=42}else if("bottom"==this.sC){b=-57;for(c=this.gs.length-1;0<=c;c--)d=this.gs[c],d=(0,D.xR)(this,d),(0,D.wk)(d,a,b),b-=42}}};
D.xR=function(a,b){var c,d;switch(a.ov){case "right":d=["M",0,0,"L",42-a.$j,0,"A",a.$j,a.$j,0,0,1,42,a.$j,"L",42,42-a.$j,"A",a.$j,a.$j,0,0,1,42-a.$j,42,"L",0,42];break;default:d=["M",42,0,"L",a.$j,0,"A",a.$j,a.$j,0,0,0,0,a.$j,"L",0,42-a.$j,"A",a.$j,a.$j,0,0,0,a.$j,42,"L",42,42]}c=d;d=new D.yR(a.j(),c,b,a);(0,D.Ii)(d);d.setCursor("pointer");a.ja.Sa(d,0);d.va(a.Ria,a.Am);d.Za(a.Sia,1,1);var e=a.Ux[b],f=new D.Mh(a.j(),c);(0,D.Ai)(f);(0,D.wk)(e.iconUp,9,9);f.k(e.iconUp);var g=new D.Mh(a.j(),c);(0,D.Ai)(g);
(0,D.wk)(e.iconOver,9,9);g.k(e.iconOver);c=new D.Mh(a.j(),c);(0,D.Ai)(c);(0,D.wk)(e.iconDown,9,9);c.k(e.iconDown);f=new D.Ne(a.j(),f,g,c);f.mF=D.k;e.icon=f;d.k(f);a.Ao[b]=d;a.ha.La(d,{Ne:function(){a.fA=(0,D.yr)(a);a.nP=b;var c=a.Ao[b].xc(),d=function(){var b=a.j().cd();b&&b.Lc()};a.mb()?a.fA==b?a.qf(D.p,D.p,d):(a.qN(),(0,D.vR)(a,b,D.p)):(a.qf(D.k,D.p,d),a.wE());a.fA=D.o;a.Fc(new D.zR(a.mb()?"show":"hide",a.nP));c&&(0,D.cm)(a.j(),a)},af:function(){return a.Ux[b].tooltip}});d.Uq();return d};
D.vR=function(a,b,c,d){var e=D.o;c||(e=new D.pr(a.j(),0.25));a.fA&&(c=a.Ux[a.fA].panel)&&a.pt.removeChild(c);(0,D.wR)(a,b,e);e?(a.wE(),d&&(0,D.pl)(e,d),e.play()):d&&d()};D.zr.prototype.Cga=function(){this.Uf&&(this.C5=D.o,this.pt.Rj(),(0,D.Vz)(this.gJ),this.Uf.X(),this.gJ.removeChild(this.Uf),this.tk=this.bk=this.pt=this.Uf=D.o)};
D.wR=function(a,b,c){a.Uf||(a.Uf=new D.Re(a.j(),0,0,1,1,"pdcp_expandedContent"),a.gJ.k(a.Uf),a.Uf.va(a.wz,a.Am),a.pt=new D.F(a.$),a.Uf.k(a.pt),(0,D.wk)(a.pt,a.Kr,a.Kr));var d=a.Ux[b].panel;if(d){a.pt.k(d);if(a.fA){var e=a.Ux[a.fA].panel;e&&e.eb("dvtResizeEvent",a.Bfa,D.p,a)}d.pa("dvtResizeEvent",a.Bfa,D.p,a)}a.bk||(a.bk=new D.Mh(a.j(),["M",0,0,"L",1,1],"pdcp_expandedBorder"),a.tk=new D.Mh(a.j(),["M",0,0,"L",1,1],"pdcp_expandedBorderResizable"),a.Uf.k(a.bk),a.Uf.k(a.tk),a.bk.Za(a.it,1),a.bk.P(D.o),
a.tk.Za(a.it,1),a.tk.P(D.o),(0,D.Ii)(a.bk),(0,D.Ii)(a.tk));var f=a.Ux[b].panel,d=2*a.Kr,e=2*a.Kr,g=0,h=0;f&&(f=f.rs?f.rs():f.Tm(),d=(0,D.AR)(a,f.e),e=(0,D.Nr)(a,f.g),g=f.x,h=f.y);(0,D.BR)(a,b,c,d,e,g,h)};D.zr.prototype.Bfa=function(a){var b=new D.pr(this.j(),0.25),c=a.getWidth(),d=a.getHeight(),c=(0,D.AR)(this,c),d=(0,D.Nr)(this,d),e=a.qa()?a.qa():0;a=a.sa()?a.sa():0;(0,D.BR)(this,(0,D.yr)(this),b,c,d,e,a);b.play()};
D.BR=function(a,b,c,d,e,f,g){var h=a.Ux[b].panel;c?(0,D.T)(c,"typeNumber",h,h.R,h.N,-f):h.N(-f);c?(0,D.T)(c,"typeNumber",h,h.Q,h.U,-g):h.U(-g);f=new D.C(a.Kr,a.Kr,d-2*a.Kr,e-2*a.Kr);g=1.25*d;c?((0,D.T)(c,"typeNumber",a.Uf,a.Uf.getWidth,a.Uf.ra,g),(0,D.T)(c,"typeNumber",a.Uf,a.Uf.getHeight,a.Uf.Ha,e),(0,D.T)(c,"typeRectangle",a,a.yCa,a.gpa,f),"left"==a.ov?(0,D.T)(c,"typeNumber",a.ja,a.ja.R,a.ja.N,-d):"right"==a.ov&&((0,D.T)(c,"typeNumber",a.ja,a.ja.R,a.ja.N,d),(0,D.T)(c,"typeNumber",a.bk,a.bk.R,a.bk.N,
d),(0,D.T)(c,"typeNumber",a.tk,a.tk.R,a.tk.N,d),(0,D.T)(c,"typeNumber",a.Uf,a.Uf.R,a.Uf.N,-d)),"bottom"==a.sC&&((0,D.T)(c,"typeNumber",a.bk,a.bk.Q,a.bk.U,e),(0,D.T)(c,"typeNumber",a.tk,a.tk.Q,a.tk.U,e),(0,D.T)(c,"typeNumber",a.Uf,a.Uf.Q,a.Uf.U,-e))):(a.Uf.ra(g),a.Uf.Ha(e),"right"==a.ov&&(a.Uf.N(-d),a.bk.N(d),a.tk.N(d)),"bottom"==a.sC&&(a.Uf.U(-e),a.bk.U(e),a.tk.U(e)),a.gpa(f));f=a.Ao[b];var j;b=d;"right"==a.ov&&(b=-d);"top"==a.sC?f?(j=["M",0,0,"L",0,f.Q(),"M",0,f.Q()+42],d=a.Ao[a.gs[a.gs.length-1]],
j.push("L",0,d.Q()+42),a.bk.Wo(j),j=["M",0,d.Q()+42,"L",0,e,"L",1.25*b,e]):(j=["M",0,0,"L",0,e,"L",b,e],a.bk.Wo(j)):"bottom"==a.sC&&(f?(j=["M",0,0,"L",0,f.Q()+42,"M",0,f.Q()],d=a.Ao[a.gs[0]],j.push("L",0,d.Q()),a.bk.Wo(j),b*=1.25,j=["M",0,d.Q(),"L",0,-e,"L",b,-e]):(j=["M",0,0,"L",0,-e,"L",b,-e],a.bk.Wo(j)));c?(0,D.T)(c,"typePath",a.tk,a.tk.nH,a.tk.Wo,j):a.tk.Wo(j)};
D.zr.prototype.gpa=function(a){if(this.pt&&a){var b=new D.wg("pdcp"+this.MGa);(0,D.yg)(b,a.x,a.y,a.e,a.g);(0,D.zg)(this.pt,b)}this.C5=a};D.zr.prototype.yCa=(0,D.y)("C5");D.AR=function(a,b){var c=b+2*a.Kr;if((a.bs||0==a.bs)&&c<a.bs)c=a.bs;a.hi&&c>a.hi&&(c=a.hi);return c};D.Nr=function(a,b){var c=b+2*a.Kr;if((a.jQ||0==a.jQ)&&c<a.jQ)c=a.jQ;a.cj&&c>a.cj&&(c=a.cj);return c};D.CR=function(a,b){if(a.Uf){var c=a.Uf.Zb().ea();c.D(b);a.Uf.P(c)}for(var d in a.Ao){var e=a.Ao[d];e&&(c=e.Zb().ea(),c.D(b),e.P(c))}};
D.DR=function(a){if(a.bk){var b=a.bk.jc().ea();b.D(1);a.bk.ba(b)}a.tk&&(b=a.tk.jc().ea(),b.D(1),a.tk.ba(b));for(var c in a.Ao){var d=a.Ao[c];d&&(b=d.jc().ea(),b.D(1),d.ba(b))}};D.z=D.zr.prototype;D.z.waa=function(){this.xa(D.p);(0,D.CR)(this,1);(0,D.DR)(this);this.pt&&this.pt.D(1);for(var a in this.Ao){var b=this.GN(a);b&&b.D(1)}};D.z.vaa=function(){this.xa(D.k);(0,D.CR)(this,this.Am);(0,D.DR)(this);this.pt&&this.pt.D(1);for(var a in this.Ao){var b=this.GN(a);b&&b.D(1)}this.jq(D.o)};D.z.Ts=function(){this.wE()};
D.z.jq=function(){this.iF||this.r1()};D.z.wE=function(){(0,D.CR)(this,1)};D.z.r1=function(){(0,D.CR)(this,this.Am)};D.z.qN=function(){for(var a in this.Ao){var b=this.Ao[a];b&&(a==(0,D.yr)(this)&&this.mb()?(b.va(this.wz,this.Am),b.Za(this.it,1),b.qf(D.k)):(b.va(this.Ria,this.Am),b.Za(this.Sia,1),b.qf(D.p)));var c=this.mb()&&a==(0,D.yr)(this),d=this.GN(a);d&&(0,D.kh)(d,c);c?this.gJ.k(b):this.ja.Sa(b,0)}};D.Br=function(a,b){if(!a.t8||a.t8<b)a.t8=b};
D.zr.prototype.I=function(a){a=D.zr.u.I.call(this,a);a.e/=1.25;return a};D.zr.prototype.xh=(0,D.y)("ha");
D.yR=function(a,b,c,d){this.Init(a,b,c,d)};D.A.q(D.yR,D.Mh,"DvtPanelDrawerTab");D.z=D.yR.prototype;D.z.Init=function(a,b,c,d){D.yR.u.Init.call(this,a,b,"pdcp_tab_"+c);this.Hb=d;this.VF=D.p;this.bFa=c};D.z.jk=function(a){var b=a.keyCode;if(13==b||32==b){var b=this.Hb.xh(),c=(0,D.bf)(this,new D.H(0,0));a=D.cf.cM(a,b.$,c.x,c.y);a.target=this;b.TI(a)}};D.z.mb=(0,D.y)("VF");D.z.qf=function(a){this.VF!=a?(this.VF=a,this.Jda()):this.VF=a};
D.z.oc=function(){var a=[];a.push(this.mb()?(0,D.N)("DvtUtilBundle","STATE_EXPANDED"):(0,D.N)("DvtUtilBundle","STATE_COLLAPSED"));return(0,D.vk)(this.Hb.Ux[this.bFa].tooltip,a)};D.z.Uq=function(){this.kd("button");(0,D.af)()||this.Rb("label",this.oc())};D.z.Jda=function(){(0,D.af)()||this.Rb("label",this.oc())};D.z.Je=function(a){return this.I(a)};D.z.Nj=function(){return this.ya()};D.z.ce=function(){this.Sb=D.k;this.Km||this.qW();this.Km.show();(0,D.Cg)(this.$,this)};
D.z.sc=function(){this.Sb=D.p;this.Km||this.qW();this.Km.Po()};D.z.xc=(0,D.y)("Sb");D.z.Vd=function(a){return this.Hb.xh().$f.Vd(this,a)};D.z.qW=function(){var a=this.I();this.Km=new D.Dg(this.j(),this,new D.C(a.x+1,a.y+1,a.e-2,a.g-2),D.o,D.o,D.k)};
D.tR=function(a,b,c){this.Init(a,b,c)};D.A.q(D.tR,D.Uj,"DvtPanelDrawerEventManager");D.z=D.tR.prototype;D.z.Wh=function(a){var b=(0,D.Jj)(this,(0,D.ym)(this,a));D.tR.u.Wh.call(this,a);b&&(b.Ne&&b.Ne(a),a.stopPropagation())};D.z.Wy=function(a){var b=(0,D.Jj)(this,(0,D.ym)(this,a));b&&(b.Qh&&(b.Qh()&&b.iq)&&b.iq(a),a.stopPropagation())};D.z.Zy=function(a){D.tR.u.Zy.call(this,a);var b=(0,D.Jj)(this,(0,D.ym)(this,a));b&&b.Ts&&b.Ts(a)};
D.z.Yy=function(a){D.tR.u.Yy.call(this,a);var b=(0,D.Jj)(this,(0,D.ym)(this,a));b&&b.jq&&b.jq(a)};D.z.FB=function(a){var b=(0,D.Jj)(this,(0,D.ym)(this,a));D.tR.u.FB.call(this,a);b&&(b.Ne&&b.Ne(a),a.stopPropagation())};
D.uR=function(a,b){this.Init(a,b)};D.A.q(D.uR,D.qk,"DvtPanelDrawerKeyboardHandler");D.uR.prototype.Init=function(a,b){D.uR.u.Init.call(this,a);this.Hb=b};D.uR.prototype.Sh=function(a){var b=a.keyCode,c=this.ha.od();return 9==b?(b=D.o,(0,D.ki)(a),b=c?c:this.Hb.Ao[this.Hb.gs[0]]):13==b||32==b?(c.jk(a),D.o):D.uR.u.Sh.call(this,a)};
D.uR.prototype.Vd=function(a,b){if(!(40==b.keyCode||38==b.keyCode))return a;for(var c=a,d=40==b.keyCode?D.k:D.p,e=this.Hb.gs,f=-1,g=0;g<e.length;g++)if(a==this.Hb.Ao[e[g]]){f=d?g==e.length-1?-1:g+1:0==g?-1:g-1;break}0<=f&&(c=this.Hb.Ao[e[f]]);return c};
D.HA=function(a,b,c,d,e,f,g){this.Init(a,b,c,d,e,f,g)};D.A.q(D.HA,D.F,"DvtAccordion");D.HA.prototype.Init=function(a,b,c,d,e,f,g){D.HA.u.Init.call(this,a,D.o,b);this.An=f;this.da=(new D.VQ).fk(g);this.OY={};this.Mv=[];this.hi=c;this.bs=0;this.cj=d;this.zV=this.F4=D.p;this.ha=e};D.MA=function(a,b,c,d,e){e||(e="accordion_"+b.replace(/ /g,"_")+window.Math.floor(1E9*window.Math.random()));b=new D.SA(a.j(),c,b,d,D.k,a,a.ha,e,a.An,a.da);a.OY[e]=b;a.Mv.push(e);a.k(b)};
D.HA.prototype.W=function(){for(var a=(0,D.NA)(this),b=D.p,c=0;c<this.Mv.length;c++){var d=(0,D.WQ)(this,c);d.W(a);b&&!this.zV&&d.setActive(D.p);d.Xr&&d.UF&&(b=D.k)}!b&&(0<this.Mv.length&&!this.F4)&&(0,D.WQ)(this,0).setActive(D.k);(0,D.XQ)(this)};D.HA.prototype.CT=(0,D.v)("cj");D.HA.prototype.Iu=(0,D.v)("hi");
D.HA.prototype.update=function(a){a=this.OY[a];var b=a.Xr;if(b){if(b)if(a.UF)if(this.F4)b=D.k;else{for(var c=0,d=0;d<this.Mv.length;d++)b=(0,D.WQ)(this,d),b.Xr&&c++;b=1<c}else b=D.p;b&&a.setActive(D.p)}else{if(!this.zV)for(b=0;b<this.Mv.length;b++)(0,D.WQ)(this,b).setActive(D.p);a.setActive(D.k)}(0,D.XQ)(this)};
D.NA=function(a){if(!a.Rma){for(var b=0,c=a.da.paddingX,d=0;d<a.Mv.length;d++){var e=(0,D.WQ)(a,d),f;f=e;if(!f.GL){var g=new D.Kf(f.$,f.hj);g.Na(f.Gpa);if(g=g.Nb())g.e=g.e+f.Fla+f.UGa;f.GL=g}f=f.GL;f.e>b&&(b=f.e);e=e.rs().e+2*c;e>b&&(b=e)}b=window.Math.min(b,a.hi);b=window.Math.max(b,a.bs);a.Rma=b}return a.Rma};
D.HA.prototype.eba=function(){if(!this.cj){for(var a=0,b=0,c=0;c<this.Mv.length;c++){var d=(0,D.WQ)(this,c),e=d,f=D.o;0>e.Xf(e.th)?(e.k(e.th),e.th.N(e.lY),e.th.U(e.RF+e.mY),f=e.Tm(),e.removeChild(e.th)):f=e.Tm();e=f.g;if(d.UF&&e>a)a=e;else if(!d.UF||this.zV)b+=e}this.cj=a+b}return this.cj};D.WQ=function(a,b){return 0<=b&&b<a.Mv.length?a.OY[a.Mv[b]]:D.o};
D.XQ=function(a){for(var b=0,c=0;c<a.Mv.length;c++){var d=(0,D.WQ)(a,c);d.U(b);d.Xr?(d.expand(),b+=d.Tm().g,b+=a.da.paddingY):(d.collapse(),b+=a.da.sectionHeader.headerHeight)}b=a.Tm();a.Fc(new D.nC(b.e,b.g,0,0))};D.HA.prototype.M_=function(){for(var a=[],b=0;b<this.Mv.length;b++)a.push((0,D.WQ)(this,b));return a};
D.SA=function(a,b,c,d,e,f,g,h,j,l){this.Init(a,b,c,d,e,f,g,h,j,l)};D.A.q(D.SA,D.F,"DvtAccordionSection");D.z=D.SA.prototype;
D.z.Init=function(a,b,c,d,e,f,g,h,j,l){D.SA.u.Init.call(this,a,D.o,h);this.ug=f;this.An=j;this.hj=c;this.ib=h;this.th=b;this.kv=this.qv=D.o;this.Xr=(this.UF=e)?d:D.k;this.ha=g;this.da=l;this.RF=this.da.sectionHeader.headerHeight;this.lY=this.da.paddingX;this.mY=this.da.paddingY;this.Gpa=this.da.sectionHeader.styleEna;this.Fla=this.da.sectionHeader.imageWidth;this.CDa=this.da.sectionHeader.imageHeight;this.UGa=this.da.sectionHeader.textPadding};D.z.getId=(0,D.y)("ib");D.z.kw=(0,D.y)("hj");
D.z.setActive=(0,D.v)("Xr");D.z.rs=function(){var a=D.o;0>this.Xf(this.th)?(this.k(this.th),a=this.th.I(),this.removeChild(this.th)):a=this.th.I();return a};
D.z.W=function(a){var b=this.RF;if(this.UF){var c,d,e;this.An.B?(c=(0,D.$Q)(this,0,this.An.B("sectionExpEna"),this.hj,a,b),d=(0,D.$Q)(this,1,this.An.B("sectionExpOvr"),this.hj,a,b),e=(0,D.$Q)(this,2,this.An.B("sectionExpDwn"),this.hj,a,b)):(c=(0,D.$Q)(this,0,this.An.sectionExpEna,this.hj,a,b),d=(0,D.$Q)(this,1,this.An.sectionExpOvr,this.hj,a,b),e=(0,D.$Q)(this,2,this.An.sectionExpDwn,this.hj,a,b));this.qv=new D.Ne(this.$,c,d,e);this.qv.kd("button");c=(0,D.vk)(this.hj,[(0,D.N)("DvtUtilBundle","STATE_EXPANDED")]);
this.qv.Rb("label",c);this.An.B?(c=(0,D.$Q)(this,0,this.An.B("sectionColEna"),this.hj,a,b),d=(0,D.$Q)(this,1,this.An.B("sectionColOvr"),this.hj,a,b),e=(0,D.$Q)(this,2,this.An.B("sectionColDwn"),this.hj,a,b)):(c=(0,D.$Q)(this,0,this.An.sectionColEna,this.hj,a,b),d=(0,D.$Q)(this,1,this.An.sectionColOvr,this.hj,a,b),e=(0,D.$Q)(this,2,this.An.sectionColDwn,this.hj,a,b));this.kv=new D.Ne(this.$,c,d,e);this.kv.kd("button");c=(0,D.vk)(this.hj,[(0,D.N)("DvtUtilBundle","STATE_COLLAPSED")]);this.kv.Rb("label",
c);this.ha.La(this.qv,this);this.ha.La(this.kv,this)}else a=(0,D.aR)(this,3,a,b),b=(0,D.bR)(this,this.hj),this.g7=new D.F(this.$),this.g7.k(a),this.g7.k(b);this.UF?this.Xr?(this.Sa(this.qv,0),this.k(this.th),this.th.N(this.lY),this.th.U(this.RF+this.mY)):this.k(this.kv):(this.Sa(this.g7,0),this.k(this.th),this.th.N(this.lY),this.th.U(this.RF+this.mY))};
D.z.collapse=function(){this.UF&&(0<=this.Xf(this.qv)&&this.removeChild(this.qv),0<=this.Xf(this.th)&&this.removeChild(this.th),this.k(this.kv),this.setActive(D.p),this.xc()&&this.ce())};D.z.expand=function(){0<=this.Xf(this.kv)&&this.removeChild(this.kv);this.k(this.qv);this.k(this.th);this.th.N(this.lY);this.th.U(this.RF+this.mY);this.setActive(D.k);this.xc()&&this.ce()};
D.$Q=function(a,b,c,d,e,f){var g=a.Fla,h=a.CDa,j=(a.RF-h)/2,l=new D.F(a.$);b=(0,D.aR)(a,b,e,f);l.k(b);(c=c?new D.Se(a.$,c,0,j,g,h):D.o)&&l.k(c);d=(0,D.bR)(a,d,e-g-0,f,l);(0,D.G)(a.$)?(f=d.Nb(),d.N(e-f.e-g),c&&c.N(e-g)):d.N(g);a.Km||a.qW(c?c:d);return l};D.bR=function(a,b,c,d,e){var f=D.o;if(b){f=new D.Kf(a.$,b);f.Na(a.Gpa);D.Ye.Yb(f,c,d,e);b=f.Nb();if(!a.GL||a.GL.e<b.e||a.GL.g<b.g)a.GL=b;f.U((a.RF-b.g)/2)}return f};
D.aR=function(a,b,c,d){var e=D.o;switch(b){case 1:e=a.da.sectionHeader.styleOvr;break;case 2:e=a.da.sectionHeader.styleDwn;break;case 3:e=a.da.sectionHeader.styleDis;break;default:e=a.da.sectionHeader.styleEna}a=new D.Re(a.$,0,0,c,d);a.ba((0,D.cR)(e));a.P((0,D.dR)(e));return a};D.dR=function(a){var b=a.C("background-color");a=(0,D.fg)(a);var c=D.o;if(a&&a instanceof D.De){var b=a.ym,c=a.xm,d=a.kz;a=a.cm();c=new D.gg(a,b,c,d)}else b&&(c=new D.Jn(b,1));return c};
D.cR=function(a){a=a.C("border-color");return new D.ig(a,1,1)};D.z=D.SA.prototype;D.z.Je=function(){var a=this.Xr?this.qv:this.kv,b=a.I(),c=(0,D.bf)(a,new D.H(b.x,b.y)),a=(0,D.bf)(a,new D.H(b.x+b.e,b.y+b.g));return new D.C(c.x,c.y,a.x-c.x,a.y-c.y)};D.z.Nj=function(){return(this.Xr?this.qv:this.kv).ya()};D.z.ce=function(){this.Sb=D.k;this.Km.show();(0,D.Cg)(this.$,this.Xr?this.qv:this.kv)};D.z.sc=function(){this.Sb=D.p;this.Km.Po()};D.z.xc=(0,D.y)("Sb");
D.z.Vd=function(a){return this.ha.$f.Vd(this,a)};D.z.qW=function(a){var b=a.I(),c=a.R()||b.x;a=a.Q()||b.y;this.Km=new D.Dg(this.j(),this,new D.C(c,a,b.e,b.g),D.o,D.o,D.k)};
D.VQ=function(){this.Init({skyros:D.YQ,alta:D.ZQ})};D.A.q(D.VQ,D.Sj,"DvtAccordionDefaults");
D.YQ={skin:"alta",sectionHeader:{styleEna:new D.I("font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;font-weight:bold;color:#252525;border-color:#D9DFE3;background-color:#F5F5F5;"),styleOvr:new D.I("font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;font-weight:bold;color:#252525;border-color:#D9DFE3;background-color:#F5F5F5;"),styleDwn:new D.I("font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;font-weight:bold;color:#252525;border-color:#D9DFE3;background-color:#F5F5F5;"),styleDis:new D.I("font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;font-weight:bold;color:#252525;border-color:#D9DFE3;background-color:#F5F5F5;"),
headerHeight:33,imageWidth:24,imageHeight:24,textPadding:5},paddingX:0,paddingY:0};D.ZQ={};
D.hi=function(a,b,c,d,e,f){this.Init(a,b,c,d,e,f)};D.A.q(D.hi,D.F,"DvtTrain");D.hi.prototype.Init=function(a,b,c,d,e,f){D.hi.u.Init.call(this,a,D.o,e);this.uR=a.cd();this.Rl=c;this.gC=d;this.mW=c.length;this.xz=(0,window.Array)(this.mW);this.Nq=0;this.HDa=f;this.SE(b)};D.hi.prototype.ET=function(a){0<=a&&a<this.mW&&(0,D.hR)(this,this.Nq,a)};
D.hi.prototype.Ne=function(a){(0,D.ki)(a);for(var b=0;b<this.xz.length;b++){var c=a.target;if(this.xz[b]===c||this.xz[b]===c.getParent()){a=this.Nq;(0,D.hR)(this,a,b);a!=b&&(b=new D.iR(this.Nq),this.Fc(b,D.p));break}}};D.hR=function(a,b,c){a.Nq=c;if(b=a.xz[b])b.Qj&&b.Qj.setCursor("pointer"),b.jj&&b.jj.setCursor("pointer"),(0,D.kh)(b,D.p);if(b=a.xz[c])b.Qj&&b.Qj.setCursor("default"),b.jj&&b.jj.setCursor("default"),(0,D.kh)(b,D.k)};
D.hi.prototype.SE=function(a){var b=(0,D.G)(this.j()),c;if(!this.UV){if(this.gC&&(c=this.gC[0]))this.UV=(0,D.Gq)(c.getWidth());this.UV||(this.UV=8)}c=this.UV;for(var d=0;d<this.mW;d++){var e,f=e=this.Lw(c,d==this.Nq,this.Rl[d]);f.pa(D.mh.ag,this.Ne,D.p,this);(0,D.Jf)()||f.pa(D.rk,this.Ne,D.p,this);f=d;b&&(f=this.mW-1-d);a&&a.La(e,e);(0,D.wk)(e,f*(c+3),this.HDa?0:1);this.k(e);this.xz[d]=e}};D.hi.prototype.Os=function(a,b){return new D.Se(this.j(),a,0,0,b,b)};
D.jR=function(a,b,c,d){var e=a.gC?a.gC[c]:D.o;if(e=e?e.C("content"):D.o)a=a.Os(e,b);else{var f,g,h;2==c?(h=0,g="#61bde3",e="#0066ff",a.gC&&(f=a.gC[2])):(h=1,g="#c0cbd5",e="#5d7891",a.gC&&(f=a.gC[0]));f&&(f.C("border-color")&&(e=f.C("border-color")),f.C("background-color")&&(g=f.C("background-color")));a=new D.Re(a.j(),h,h,b-2*h,b-2*h);a.va(g);a.Za(e)}a.setCursor(0==c||d?"default":"pointer");return a};
D.hi.prototype.Lw=function(a,b,c){a=new D.Ne(this.j(),(0,D.jR)(this,a,0,b),(0,D.jR)(this,a,1,b),(0,D.jR)(this,a,2,b),D.o);a.Gw(c);a.mF=D.k;b&&(0,D.kh)(a,b);return a};
D.iR=function(a){this.Init("dvtTrain");this.type=this.$a();this.Ol=a};(0,D.da)("DvtTrainEvent",D.iR);D.A.q(D.iR,D.Pi,"DvtTrainEvent");D.iR.TYPE="dvtTrain";D.iR.prototype.Ta=(0,D.y)("Ol");D.iR.prototype.getIndex=D.iR.prototype.Ta;
D.DvtOverviewWindow=function(a,b,c,d,e,f){this.Init(a,b,c,d,e,f)};D.A.q(D.DvtOverviewWindow,D.F,"DvtOverviewWindow");D.DvtOverviewWindow.O3="viewport-bg-color";D.DvtOverviewWindow.P3="viewport-border-color";D.DvtOverviewWindow.jga="isOverviewDisclosed";D.z=D.DvtOverviewWindow.prototype;D.z.Init=function(a,b,c,d,e,f){D.DvtOverviewWindow.u.Init.call(this,a,D.o,b);this.Jb=c;this.fc=d;this.Ii=e;this.bj=f;this.kD=D.o};
D.z.W=function(){this.hQ=D.p;this.e9=D.k;this.uc&&((0,D.Jf)()?(this.uc.eb(D.mh.ag,this.TX,D.p,this),this.uc.eb(D.mh.Zk,this.UX,D.p,this),this.uc.eb(D.mh.vj,this.mQ,D.p,this)):(this.uc.eb(D.nh,this.TX,D.p,this),this.uc.eb(D.Yq,this.UX,D.p,this),this.uc.eb(D.Zq,this.mQ,D.p,this),this.uc.eb(D.Yz,this.bna,D.p,this)),(0,D.zg)(this.uc,D.o));this.Rj();this.uc=this.Fe=D.o;var a=new D.wg(this.getId());(0,D.yg)(a,0,0,this.Ii,this.bj);this.uc=new D.Re(this.$,0,0,this.Ii,this.bj);(0,D.zg)(this.uc,a);(0,D.Ai)(this.uc);
this.k(this.uc);this.Fe=new D.Re(this.$,0,0,0,0,this.getId()+":viewport");a=this.Q_(D.DvtOverviewWindow.O3);this.Fe.Za(this.Q_(D.DvtOverviewWindow.P3),D.o,2);this.Fe.va(a);this.Fe.xa(D.p);this.uc.k(this.Fe);(0,D.Jf)()?(this.uc.pa(D.mh.ag,this.TX,D.p,this),this.uc.pa(D.mh.Zk,this.UX,D.p,this),this.uc.pa(D.mh.vj,this.mQ,D.p,this)):(this.uc.pa(D.nh,this.TX,D.p,this),this.uc.pa(D.Yq,this.UX,D.p,this),this.uc.pa(D.Zq,this.mQ,D.p,this),this.uc.pa(D.Yz,this.bna,D.p,this))};D.z.mb=(0,D.y)("VF");D.z.qf=(0,D.v)("VF");
D.z.rs=function(){return new D.C(this.Jb,this.fc,this.Ii,this.bj)};D.Lr=function(a,b,c){var d=(0,D.eR)(a,b.x,b.y,c),e=(0,D.eR)(a,b.x+b.e,b.y+b.g,c);b=d.x;var f=d.y,g=e.x-d.x,d=e.y-d.y;c?((0,D.T)(c,"typeNumber",a.Fe,a.Fe.qa,a.Fe.ka,b),(0,D.T)(c,"typeNumber",a.Fe,a.Fe.sa,a.Fe.Aa,f),(0,D.T)(c,"typeNumber",a.Fe,a.Fe.getWidth,a.Fe.ra,g),(0,D.T)(c,"typeNumber",a.Fe,a.Fe.getHeight,a.Fe.Ha,d)):(a.Fe.ka(b),a.Fe.Aa(f),a.Fe.ra(g),a.Fe.Ha(d))};
D.Vr=function(a){var b=(0,D.fR)(a,a.Fe.qa(),a.Fe.sa());a=(0,D.fR)(a,a.Fe.qa()+a.Fe.getWidth(),a.Fe.sa()+a.Fe.getHeight());return new D.C(b.x,b.y,a.x-b.x,a.y-b.y)};D.z=D.DvtOverviewWindow.prototype;D.z.TX=function(a){if(!this.hQ&&this.e9){this.hQ=D.k;var b=this.Fg(a);a=new D.lF((0,D.Vr)(this),(0,D.gR)(this,b),a);this.Fc(a)}};D.z.UX=function(a){if(this.hQ&&this.e9){var b=this.Fg(a);a=new D.lF((0,D.Vr)(this),(0,D.gR)(this,b),a);this.Fc(a)}};D.z.mQ=function(){this.hQ&&this.e9&&(this.hQ=D.p)};
D.z.bna=function(){this.mQ()};D.z.Fg=function(a){var b,c;(0,D.Jf)()?(a=a.touches,0<a.length&&(b=a[0].pageX,c=a[0].pageY)):(b=a.pageX,c=a.pageY);return(0,D.Pu)(this.$,b,c)};D.fR=function(a,b,c){var d=0,e=0,f=1,g=1;a.Xi&&(d=a.Xi.R(),e=a.Xi.Q(),f=a.Xi.Cc(),g=a.Xi.Jc());return new D.H((b-d)/f,(c-e)/g)};
D.eR=function(a,b,c,d){var e=0,f=0,g=1,h=1;a.Xi&&(e=d?(0,D.Hp)(d,a.Xi,a.Xi.R,D.k):a.Xi.R(),f=d?(0,D.Hp)(d,a.Xi,a.Xi.Q,D.k):a.Xi.Q(),g=d?(0,D.Hp)(d,a.Xi,a.Xi.Cc,D.k):a.Xi.Cc(),h=d?(0,D.Hp)(d,a.Xi,a.Xi.Jc,D.k):a.Xi.Jc());return new D.H(b*g+e,c*h+f)};D.DvtOverviewWindow.prototype.AM=(0,D.y)("kD");D.DvtOverviewWindow.prototype.nI=(0,D.v)("kD");D.DvtOverviewWindow.prototype.Q_=function(a){return this.kD&&"undefined"!=this.kD[a]?this.kD[a]:D.o};
D.gR=function(a,b){var c=(0,D.bf)(a.uc,new D.H(0,0)),d=a.Fe.I(),e=b.x-c.x-d.e/2,f=b.y-c.y-d.g/2,c=(0,D.fR)(a,e,f),d=(0,D.fR)(a,e+d.e,f+d.g);return new D.C(c.x,c.y,d.x-c.x,d.y-c.y)};D.DvtOverviewWindow.prototype.Rga=function(a){this.Fe.ka(a.x);this.Fe.Aa(a.y);this.Fe.ra(a.e);this.Fe.Ha(a.g)};D.DvtOverviewWindow.prototype.r2=function(){return new D.C(this.Fe.qa(),this.Fe.sa(),this.Fe.getWidth(),this.Fe.getHeight())};
D.DvtOverviewWindow.prototype.I=function(a){var b=new D.C(0,0,this.Ii,this.bj);return!a||a===this?b:(0,D.Jg)(this,b,a)};D.DvtOverviewWindow.prototype.Tm=function(a){return this.I(a)};
(0,D.Fg)("DvtSubcomponentBundle",{CONTROL_PANEL:"Control Panel",CONTROL_PANEL_ZOOMANDCENTER:"Zoom and Center",CONTROL_PANEL_PAN:"Pan",CONTROL_PANEL_LAYOUT:"Layout",CONTROL_PANEL_LAYOUT_VERT_TOP:"Vertical, Top Down",CONTROL_PANEL_LAYOUT_VERT_BOTTOM:"Vertical, Bottom Up",CONTROL_PANEL_LAYOUT_HORIZ_START:"Horizontal, Start-to-End",CONTROL_PANEL_LAYOUT_HORIZ_LEFT:"Horizontal, Left-to-Right",CONTROL_PANEL_LAYOUT_HORIZ_RIGHT:"Horizontal, Right-to-Left",CONTROL_PANEL_LAYOUT_RADIAL:"Radial",CONTROL_PANEL_LAYOUT_TREE:"Tree",
CONTROL_PANEL_LAYOUT_CIRCLE:"Circle",CONTROL_PANEL_SYNC:"View",CONTROL_PANEL_ZOOMTOFIT:"Zoom to Fit",CONTROL_PANEL_ZOOMIN:"Zoom In",CONTROL_PANEL_ZOOMOUT:"Zoom Out",CONTROL_PANEL_RESET:"Reset Map",CONTROL_PANEL_DRILLUP:"Drill Up",CONTROL_PANEL_DRILLDOWN:"Drill Down",LEGEND:"Legend",OVERVIEW:"Overview",PALETTE:"Palette",SEARCH:"Search",SEARCH_TEXT:"Search",SEARCH_TEXT_ALTA:"Find",SEARCH_RESULTS:"Search Results [{0}]",SEARCH_RESULTS_ALTA:"{0} Results",SEARCH_RESULTS_CLOSE:"Close",SEARCH_RESULTS_NO_DATA:"No results to display"});

  return D;
});