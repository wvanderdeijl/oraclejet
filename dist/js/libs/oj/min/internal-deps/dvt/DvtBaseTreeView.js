/**
 * Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(['./DvtToolkit', './DvtSubcomponent'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.
  
  // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  
D.FR=(0,D.t)();(0,D.da)("DvtBaseTreeView",D.FR);D.A.q(D.FR,D.xj,"DvtBaseTreeView");D.FR.prototype.Init=function(a,b,c){D.FR.u.Init.call(this,a,b,c);this.rb=this.CI(this,a,this.kb,this);this.rb.Ge(this);this.Qd=new D.ou(a);this.Ll=new D.jV(this);(0,D.Sq)(this.rb,this.Qd);this.Fb=D.o;this.tla=D.p;this.pQ=D.o};D.FR.prototype.Bd=function(a){a?(this.G=this.xf.fk(a),(0,D.fl)()||(this.G.animationOnDisplay="none",this.G.animationOnDataChange="none")):this.G||(this.G=(0,D.Ej)(this))};
D.FR.prototype.W=function(a,b,c){var d=a||!this.G;this.Bd(a);var e=this.v();if(e.nodes==D.o)a=D.o;else{a=[];for(var f=D.$f.kH(e.hiddenCategories),g=0;g<e.nodes.length;g++){var h=e.nodes[g];h._index=g;(h=(0,D.rV)(this,f,h))&&a.push(h)}if(1==a.length)a=a[0];else{for(var g=e=0;g<a.length;g++)e+=a[g].Zc();g=this.fq({value:e,FHa:D.k});(0,D.pV)(g,a);a=g}}this.pN({root:a});!(0,window.isNaN)(b)&&!(0,window.isNaN)(c)&&(this.Ma=b,this.Xa=c);this.rb&&this.rb.Lc();c=new D.C(0,0,this.Ma,this.Xa);this.kq(c);b=
new D.F(this.j());this.k(b);this.kZ&&(this.Gc=new D.Ng(this.j(),this.rb),this.Gc.kL=D.k);this.Vj(b,c);this.vr&&(this.q1=D.k,this.vr.stop());a=this.v().animationOnDataChange;g=new D.C(0,0,this.Ma,this.Xa);c=D.p;this.fa?a&&d&&(D.kl.isSupported(a)?(this.vr=D.kl.xD(this.j(),a,this.fa,b,g,this.uI),c=D.k):this.zQ&&"auto"==a&&(this.Af=this.i2(),this.k(this.Af),a=new D.gV(this.j(),this.Af),g=this.zQ,e=this.Pa,f=this.$X,h=this.iJ,a.wO=D.p,a.zQ=g,a.$X=f,(0,D.hV)(h,g)||(0,D.hV)(f,e)?(a.wO=D.k,f=(0,D.jS)(g),
h=(0,D.jS)(e),f.push(g),h.push(e),(0,D.Zm)(a,f,h)):(0,D.Zm)(a,[g],[e]),this.vr=a.Xq(D.k))):this.vr=this.j2(b,g);this.$X=this.zQ=D.o;this.vr&&(this.rb.Oi(this),this.vr.pe(this.Ar,this),this.vr.play());c?this.Yg=this.fa:this.fa&&this.removeChild(this.fa);this.fa=b;d?this.kA():this.w3();(0,D.sV)(this,!this.vr);this.vr||(0,D.tV)(this);this.fo()};D.FR.prototype.render=D.FR.prototype.W;D.FR.prototype.NE=(0,D.ba)(D.o);D.FR.prototype.kq=(0,D.t)();D.FR.prototype.Vj=(0,D.t)();
D.LR=function(a,b){var c=new D.Re(a.j(),0,0,a.Ma,a.Xa);(0,D.Ai)(c);b.k(c)};D.IR=function(a,b){if(0<a.iJ.length){var c=a.Pa?a.Pa.Yc():D.o;a.tn&&(0,D.as)(a.rb,a.tn.xh());a.tn=D.uV.W(a,b,a.iJ,c);(0,D.bs)(a.rb,a.tn.xh())}else a.tn&&(0,D.as)(a.rb,a.tn.xh()),a.tn=D.o};D.PR=function(a,b){var c=a.v(),d=c.emptyText;d||(d=(0,D.uk)(c,"labelNoData","DvtUtilBundle","NO_DATA"));D.Ye.cn(b,d,new D.C(0,0,a.Ma,a.Xa),a.Ia(),c._statusMessageStyle)};D.MR=function(a){return a.Pa&&0<a.Pa.Zc()};D.z=D.FR.prototype;
D.z.j2=function(a,b){var c=this.v().animationOnDisplay;return D.kl.isSupported(c)?D.kl.my(this.j(),c,a,b,this.uI):D.o};D.z.Ar=function(){this.Af&&(this.removeChild(this.Af),this.Af=D.o);this.Yg&&(this.removeChild(this.Yg),this.Yg=D.o);this.q1=D.p;this.vr=D.o;this.rb.Ge(this);(0,D.sV)(this,D.k);(0,D.tV)(this)};D.z.i2=function(){return new D.F(this.j())};D.z.Mw=function(a){return new D.oV(a)};D.z.CI=function(a,b,c,d){return new D.$R(a,b,c,d)};D.z.efa=function(a){if(a&&a.aC){var b=a.Ic();if(b&&0<b.length)return b[0]}return a};
D.z.Ke=function(a){this.v().highlightedCategories=D.vl.ea(a);(0,D.wl)(a,D.nV.WR(this.Pa),"any"==this.v().highlightMatch)};D.FR.prototype.highlight=D.FR.prototype.Ke;D.FR.prototype.select=function(a){var b=this.v();b.selection=D.vl.ea(a);this.Qb&&(a=D.nV.WR(this.Pa),(0,D.Ol)(this.Qb,b.selection,a))};D.FR.prototype.select=D.FR.prototype.select;D.FR.prototype.Ia=(0,D.y)("rb");
D.FR.prototype.pN=function(a){var b=this.v();this.zQ=this.Pa;this.$X=this.iJ;this.Pa=a.root;this.iJ=b._ancestors?b._ancestors:[];this.ds=this.Pa?D.nV.oqa(this.Pa):0;this.Ht=this.Pa?D.nV.nqa(this.Pa,0):0;this.uI=(0,D.np)(b.animationDuration)/1E3;this.FQa=a.tOa?a.tOa:{};(this.F8="none"==b.selectionMode?D.o:"single"==b.selectionMode?"s":"m")?(this.Qb=new D.gl(this.F8),this.x7=b.selection):this.Qb=D.o;this.rb.Ku(this.Qb);(0,D.Cj)(this.rb,this.Mw(this.rb));this.HX=D.o;this.xia=[];if(b.attributeGroups){a=
D.nV.WR(this.Pa);for(var c=0;c<b.attributeGroups.length;c++){var d=b.attributeGroups[c],e=D.o;if("continuous"==d.attributeType)D.nV.KHa(d,a),e=new D.lR(d.min,d.max,d.minLabel,d.maxLabel,d.colors);else for(var e=new D.mR,f=0;f<d.groups.length;f++){var g=d.groups[f];e.add(g.id,g.label,{color:g.color,pattern:g.pattern})}this.xia.push({CHa:e,sOa:d.S,id:d.id});!b._adf&&!b._legendSource&&0==c?this.HX=e:b._legendSource&&b._legendSource==d.id&&(this.HX=e)}D.nV.ENa(this.xia,a)}if((a=b._contextMenus)&&0<a.length)this.rb.sN=
new D.cw(this.j(),a);if(b=b._templates){this.kZ={};for(var h in b)a=D.B.mT(b[h]),this.kZ[h]=a}};D.FR.prototype.w3=function(){for(var a=this.Qb?this.Qb.getSelection():[],b=0;b<a.length;b++)a[b].qb(D.k)};D.FR.prototype.kA=function(){if(this.Qb&&this.x7){var a=D.nV.WR(this.Pa);(0,D.Ol)(this.Qb,this.x7,a);this.x7=D.o}};D.tV=function(a){var b=a.v().highlightedCategories;b&&0<b.length&&a.Ke(b)};
D.sV=function(a,b){var c=D.o,d=a.pQ;d&&(c=(0,D.qV)(a.Pa,d),a.rb.Fu(c));b&&(a.pQ=D.o);c||(c=a.efa(a.Pa),a.rb.Fu(c));b&&a.Xp(a.l0())};D.z=D.FR.prototype;D.z.Xp=function(a){this.tla=a;this.rb.Xp(a)};D.z.l0=(0,D.y)("tla");D.z.YE=function(a,b){return this.Pa.JD(a,b)};D.z.dJ=function(a){return this.Qb?a[0]:D.o};D.z.WB=function(a){a.Ga()||(this.Qb.bn(a,D.p),this.rb.Zv());a=[];for(var b=this.Qb.getSelection(),c=0;c<b.length;c++)a.push(b[c].getId());return a};
D.z.VB=function(){for(var a=[],b=this.Qb.getSelection(),c=0;c<b.length;c++)a.push(b[c].ta());return a};D.z.Uu=function(a){this.Lf&&(this.removeChild(this.Lf),this.Lf=D.o);if(a&&(this.Lf=a.rH()))a=this.v().styleDefaults,this.Lf.va(a._dropSiteFillColor,a._dropSiteOpacity),this.Lf.Za(a._dropSiteBorderColor),this.k(this.Lf);return this.Lf};D.z.Oza=function(a){a instanceof D.ct&&(0,D.mV)(this,a.getId(),D.p)};
D.mV=function(a,b,c){c&&a.Pa&&b==a.Pa.getId()&&0<a.iJ.length?(a.pQ=b,a.kb(new D.JC(a.iJ[0].id))):c||a.kb(new D.JC(b));a.j().cd().Lc()};D.FR.prototype.oba=function(a){return(0,D.Jj)(this.rb,a)};D.FR.prototype.fq=(0,D.ba)(D.o);D.FR.prototype.i_=(0,D.ba)(D.o);D.FR.prototype.Pf=function(){return new D.vV(this)};D.FR.prototype.getAutomation=D.FR.prototype.Pf;D.FR.prototype.Raa=(0,D.y)("tn");
D.rV=function(a,b,c){if(D.nV.CMa(b,c))return D.o;var d=a.fq(c);if(d.mb()){var e=[];c=c.nodes?c.nodes:[];for(var f=0;f<c.length;f++){var g=c[f];g._index=f;(g=(0,D.rV)(a,b,g))&&e.push(g)}(0,D.pV)(d,e)}return d};D.OR=function(a,b){if((0,D.Jf)()||(0,D.vf)())for(var c=D.nV.OIa(b),d=0;d<c.length-1;d++){var e=a.getId()+(c[d+1].getId()?c[d+1].getId():c[d+1].Yc()),e=e.replace(/\s+/g,"");c[d+1].ta().setId(e,D.k);c[d].ta().Rb("flowto",e)}};
D.z=D.FR.prototype;D.z.Oj=function(a,b,c){return this.Qd.Oj(c)};D.z.Hk=function(a,b){return this.Qd.Hk(a,b)};D.z.ku=function(a,b){return this.Qd.ku(a,b)};D.z.Lp=function(a,b){return this.Qd.Lp(a,b)};D.z.aw=function(a,b){return this.Qd.aw(a,b)};D.z.hw=function(a,b){return this.Qd.hw(a,b)};D.z.mw=function(){this.Qd.mw()};D.z.os=function(){this.Qd.os()};
D.FR.prototype.Co=function(a,b,c){return this.Ll.Co(a,b,c)};D.FR.prototype.us=function(a,b){return this.Ll.us(a,b)};
D.gV=function(a,b){this.Init(a,b)};D.A.q(D.gV,D.Ym,"DvtBaseTreeAnimationHandler");D.hV=function(a,b){if(!b||!a)return D.p;for(var c=0;c<a.length;c++)if(a[c].id==b.getId())return D.k;return D.p};
D.jV=(0,D.v)("K");D.A.q(D.jV,D.qu,"DvtBaseTreeDropTarget");D.jV.prototype.Co=function(a,b,c){if(a=this.K.YE(a,b))a!=this.GF&&(this.K.Uu(a),this.GF=a);else return this.K.Uu(D.o),D.o;return c[0]};D.jV.prototype.us=function(a,b){var c=this.K.YE(a,b);return c?{RHa:c.getId()}:D.o};
D.$R=function(a,b,c,d){this.Init(b,c,d);this.K=a};D.A.q(D.$R,D.Uj,"DvtBaseTreeEventManager");D.z=D.$R.prototype;D.z.Wy=function(a){var b=(0,D.Jj)(this,a.target);b&&b.Ea&&b.Ea()&&(0,D.kV)(this,b,a.shiftKey)};D.z.Wh=function(a){D.$R.u.Wh.call(this,a);var b=(0,D.Jj)(this,a.target);(0,D.lV)(this,b);b&&(!b.Ea||!b.Ea())&&(0,D.kV)(this,b,a.shiftKey)};D.z.Xy=function(a){D.$R.u.Xy.call(this,a);(a=(0,D.Jj)(this,a.target))&&a.uu&&a.uu()};
D.z.hn=function(a){D.$R.u.hn.call(this,a);var b=(0,D.Jj)(this,a.target);b&&b.su&&(a=(a=(0,D.Jj)(this,a.relatedTarget))&&a.getId?a.getId():D.o,(b.getId()==D.o||a!=b.getId())&&b.su())};D.z.Xh=function(a){var b=D.p,b=this.od();13==a.keyCode&&!a.ctrlKey?(b=this.od(),b.wu&&b.wu()&&(a.shiftKey&&(b=this.K.Pa),(0,D.mV)(this.K,b.getId(),a.shiftKey)),(0,D.ki)(a),b=D.k):b=D.$R.u.Xh.call(this,a);return b};
D.z.zr=function(a){var b=(0,D.Jj)(this,a.target);(0,D.lV)(this,b);this.bP&&this.bP!=b&&(this.bP.su(),this.bP=D.o);b&&(b instanceof D.dS&&this.bP!=b&&(this.bP=b,b.uu()),(!b.Ea||!b.Ea())&&(0,D.kV)(this,b,a.shiftKey))};D.z.BB=function(a){(a=(0,D.Jj)(this,a.target))&&a.Ea&&a.Ea()&&(0,D.kV)(this,a,D.p)};D.lV=function(a,b){b&&(b instanceof D.NR&&b.eh())&&(0,D.mV)(a.K,b.getId(),D.p)};D.kV=function(a,b,c){b.wu&&b.wu()&&(0,D.mV)(a.K,b.getId(),c)};
D.$R.prototype.tm=function(a,b,c){a=this.K.v();if("dim"==a.hoverBehavior){b=b.Tc?b.Tc():[];a.highlightedCategories=c?b.slice():D.o;c=new D.Fm(c?"categoryRollOver":"categoryRollOut",a.highlightedCategories);b=D.nV.WR(this.K.Pa);var d=(0,D.np)(a.hoverBehaviorDelay);this.LB.Yd(c,b,d,"any"==a.highlightMatch)}};D.$R.prototype.Pu=function(){return this.K.v().touchResponse};
D.dS=(0,D.t)();D.A.q(D.dS,D.A,"DvtBaseTreeNode");D.RR=new D.Qo("#000000",2,5,5,45,0.5);
D.dS.prototype.Init=function(a,b){this.K=a;this.le=b;var c=this.K.v().nodeDefaults;this.ib=b.id||b.label;this.qk=b.color?b.color:"#000000";this.oD=b.label;this.Fq="string"==typeof b.labelStyle?new D.I(b.labelStyle):b.labelStyle;this.hs=b.pattern;this.RG=b.selectable;this.Yt=b.shortDesc?b.shortDesc:b.tooltip;this.Kh=b.value;this.FF=b.drilling?b.drilling:c.drilling;this.nD=b.S;this.aC=b.FHa;this.ix=1;this.FX=D.o;this.RN=this.Sb=D.p};
D.pV=function(a,b){if(b!=D.o)for(var c=0;c<b.length;c++)b[c].ug=a;a.Il=b};D.dS.prototype.Ic=function(){return this.Il?this.Il:[]};D.jS=function(a){var b=[],c,d;if(!a.nf())return b;for(var e=0;e<a.Il.length;e++)d=a.Il[e],c=(0,D.jS)(d),b.push(d),b=b.concat(c);return b};D.lS=function(a){var b=a.ug;b&&(b.FX=a)};D.dS.prototype.WA=function(a){return!a||!this.ug?D.p:this.ug==a?D.k:this.ug.WA(a)};
D.gS=function(a,b,c){var d=[];if(0>c)return d;if(0==c)return[a];if(b.nf()){a=b.Ic();for(var e=0;e<a.length;e++)b=a[e],d=d.concat((0,D.gS)(b,b,c-1))}return d};D.qV=function(a,b){if(a.getId()==b)return a;for(var c=D.o,d=a.Ic(),e=d.length,c=D.o,f=0;f<e;f++)if(c=d[f],c=(0,D.qV)(c,b))return c;return D.o};D.z=D.dS.prototype;D.z.v=(0,D.y)("le");D.z.Tc=function(){if(this.aC)return[];var a=this.v().categories;a||(a=(a=(a=this.ug)?a.Tc():D.o)?a.slice():[],a.push(this.getId()));return a};D.z.getId=(0,D.y)("ib");
D.z.Zc=(0,D.y)("Kh");D.z.zb=(0,D.y)("qk");D.z.Ie=function(){var a=this.K.v().tooltip;return a?(0,D.op)(this.K.j().cd(),a,this.$v()):this.Yt};D.z.Ki=(0,D.y)("qk");D.z.Kc=(0,D.y)("Yt");D.z.$v=function(){return{id:this.getId(),label:this.Yc(),value:this.Zc(),color:this.zb()}};D.z.Ta=function(){return this.v()._index};D.z.ma=(0,D.y)("ix");D.z.D=function(a){this.ix=a;this.J&&this.J.D(this.ix)};D.z.qf=function(a){this.v()._expanded=a};D.z.mb=function(){return this.v()._expanded!==D.p};
D.z.wu=function(){return"replace"==this.FF||"insertAndReplace"==this.FF};D.z.Jd=function(){var a=this.K.v()._spb;if(!a||!a[this.nD])a=D.o;else{for(var a=a[this.nD],b=[],c=0;c<a.length;c++)b.push(new D.Ki(a[c].popupId,a[c].triggerType,a[c].alignId,a[c].align));a=b}return a};D.z.W=(0,D.t)();D.z.Iy=function(a){var b=this.Ic();if(b!=D.o)for(var c=0;c<b.length;c++)b[c].W(a)};D.z.Vd=function(){(0,D.lS)(this);return this};D.z.Je=function(){return new D.C(0,0,0,0)};D.z.Nj=(0,D.ba)(D.o);
D.z.ce=function(){this.Sb=D.k;this.Xb();this.uu&&this.uu()};D.z.sc=function(){this.Sb&&(this.Sb=D.p,this.Mb());this.su&&this.su()};D.z.xc=(0,D.y)("Sb");D.z.uu=function(){this.RN=D.k};D.z.su=function(){this.RN=D.p};D.z.Ea=function(){return"off"!=this.RG&&this.K.F8!=D.o};D.z.Ga=(0,D.y)("Re");D.z.qb=function(a){this.Re=a;this.rn()};D.z.Xb=(0,D.t)();D.z.Mb=(0,D.t)();D.z.Ke=function(a,b){this.D(b)};D.z.Oj=function(a){return this.K.dJ(a)};D.z.Hk=function(){return this.K.WB(this)};D.z.ju=function(){return this.K.VB()};
D.z.rH=(0,D.ba)(D.o);D.z.CH=(0,D.ba)(D.o);D.z.contains=(0,D.ba)(D.p);D.z.JD=(0,D.ba)(D.o);D.z.fn=function(){return[]};D.z.Cr=(0,D.t)();D.z.hf=function(a,b){a.wO||(0,D.Zm)(a,b.Ic(),this.Ic());var c=this.fn(),d=b.fn(c),e;if(!D.$f.gd(d,c)&&(e=new D.vn(this.K.j(),this,this.K.uI),(0,D.T)(e.O,"typeNumberArray",this,this.fn,this.Cr,c),a.add(e,1),c=this.Kh!=b.Kh,e=D.J.Aba(this.qk)!=D.J.Aba(b.qk),this.Cr(d),(d=this.K.v().animationUpdateColor)&&(c||e)))this.qk=d};
D.z.yg=function(a){if(!a.wO||!a.wO||!(a.zQ.getId()==this.getId()||(0,D.hV)(a.$X,this))){this.D(0);var b=new D.an(this.K.j(),this,this.K.uI);a.add(b,2);if(this.nf())for(b=0;b<this.Il.length;b++)this.Il[b].yg(a)}};D.z.vh=function(a,b){b.k(this.J);var c=new D.xn(this.K.j(),this,this.K.uI);a.add(c,0);if(!a.wO&&this.nf())for(c=0;c<this.Il.length;c++)this.Il[c].vh(a,b)};D.z.nf=function(){return this.Il!=D.o&&0<this.Il.length};D.hS=function(a){var b=0;for(a=a.ug;a;)b++,a=a.ug;return b};
D.dS.prototype.II=function(){return this.hs?new D.gh(this.hs,this.qk):new D.Jn(this.qk)};D.qS=function(a,b){var c=a.hs?"#000000":D.J.Ij(a.qk);b.va(c);var d=[];d.push(a.K.v().nodeDefaults.labelStyle);a.Fq&&d.push(a.Fq);b.Na((0,D.Lo)(d));D.No===D.k&&b.va(c)};D.fS=function(a){var b=11;(a=a.K.v().nodeDefaults.labelStyle.JA())&&(b=(0,window.parseFloat)(a));return b};D.dS.prototype.ta=(0,D.y)("J");D.dS.prototype.Yc=(0,D.y)("oD");D.eS=function(a){return a.K.kZ?a.K.kZ[a.nD]:D.o};D.dS.prototype.Qh=function(){return this.wu()};
D.dS.prototype.rn=(0,D.t)();
D.NR=function(a,b,c,d,e){this.Init(c,d,e);this.Tb=a;this.ib=b;this.xO=D.p};D.A.q(D.NR,D.Kj,"DvtBaseTreePeer");D.z=D.NR.prototype;D.z.getId=(0,D.y)("ib");D.z.eh=(0,D.y)("xO");D.z.zda=(0,D.v)("xO");D.z.uu=function(){this.Tb&&this.Tb.uu&&this.Tb.uu()};D.z.su=function(){this.Tb&&this.Tb.su&&this.Tb.su()};
D.uV=(0,D.t)();D.A.q(D.uV,D.A,"DvtTreeBreadcrumbsRenderer");D.uV.Fxa=6;D.uV.xya="color: #003286;";
D.uV.W=function(a,b,c,d){var e=a.j(),f=a.v().styleDefaults,g=[];g.push(new D.I(D.uV.xya));g.push(f._drillTextStyle);var g=(0,D.Lo)(g).toString(),h=g+"text-decoration: underline;",j=[];j.push(f._currentTextStyle);f=(0,D.Lo)(j).toString();e=new D.$r(e,a.Oza,a,{nw:g,tca:h,sca:h,Pqa:f});a.k(e);c=c.slice(0).reverse();c.push({label:d});e.W({items:c},b.e);d=e.I();(0,D.wk)(e,b.x,b.y);d=d.g+D.uV.Fxa;b.y+=d;b.g-=d;a.removeChild(e);return e};
D.JR=(0,D.t)();D.A.q(D.JR,D.A,"DvtTreeLegendRenderer");D.JR.Cya=4;D.JR.$w=7;D.JR.$U=24;D.JR.Bya=11;D.JR.Jha="#636363";D.JR.iPa="color:"+D.JR.Jha+";";
D.JR.W=function(a,b,c){var d=a.v(),e=d.sizeLabel,f=d.colorLabel;if(!(e==D.o&&f==D.o&&c==D.o)){var g=a.j(),h=a.Ia(),j=new D.F(g);a.k(j);var l=D.JR.YQ(g,a,j,b.e,e,f,c),m=(0,D.XH)(a.v().skin)?D.o:"#000000",n=[];n.push(d.styleDefaults._labelStyle);var m={borderColor:m,nw:(0,D.Lo)(n)},d=D.nR.eda(g,h,j,b.e,b.g,c,m),n=l?l.I():D.o,q=d?d.I():D.o;if(l&&!d)l.N(b.y+(b.e-n.e)/2);else if(d&&!l)d.N(b.y+(b.e-q.e)/2);else if(d&&l){var r=b.e-D.JR.$U;n.e+q.e>r&&(n.e>r/2&&q.e>r/2?(j.removeChild(l),j.removeChild(d),l=
D.JR.YQ(g,a,j,r/2,e,f,c),d=D.nR.eda(g,h,j,r/2,b.g,c,m)):n.e>q.e?(h=r-q.e,j.removeChild(l),l=D.JR.YQ(g,a,j,h,e,f,c)):(e=r-n.e,j.removeChild(d),d=D.nR.eda(g,h,j,e,b.g,c,m)),n=l.I(),q=d.I());(0,D.G)(g)?(d.N(b.x),l.N(b.x+b.e-n.e)):(l.N(b.x),d.N(b.x+b.e-q.e))}c=j.I();j.U(b.y+b.g-c.g);b.g-=c.g+D.JR.Cya;a.removeChild(j);return j}};
D.JR.YQ=function(a,b,c,d,e,f){var g=(0,D.G)(a),h=b.Ia(),j=b.v().styleDefaults,l=D.o;if(e||f){l=new D.F(a);c.k(l);var m=[];m.push(j._attributeTypeTextStyle);c=(0,D.Lo)(m);m=[];m.push(j._attributeValueTextStyle);var j=(0,D.Lo)(m),n,q,r,s,m=0;e&&(n=(0,D.uk)(b.v(),"labelSize",b.i_(),"SIZE"),n=new D.Kf(a,n,0,0),n.Na(c),l.k(n),r=n.Nb().e,q=new D.Kf(a,e,0,0),q.Na(j),l.k(q),s=q.Nb().e,m=r+s+D.JR.$w);var u,w,x,D$,Q=0;f&&(u=(0,D.uk)(b.v(),"labelColor",b.i_(),"COLOR"),u=new D.Kf(a,u,0,0),u.Na(c),l.k(u),x=u.Nb().e,
w=new D.Kf(a,f,0,0),w.Na(j),l.k(w),D$=w.Nb().e,Q=x+D$+D.JR.$w);d-=D.JR.$U;m+Q>d&&(a=d/2,m>a&&Q>a?(D.Ye.Yb(q,a-r-D.JR.$w,window.Infinity,l)?(s=q.Nb().e,h.La(q,new D.Kj(e))):(l.removeChild(n),l.removeChild(q),q=D.o,s=0),D.Ye.Yb(w,a-x-D.JR.$w,window.Infinity,l)?(D$=w.Nb().e,h.La(w,new D.Kj(f))):(l.removeChild(u),l.removeChild(w),w=D.o,D$=0)):m>Q?D.Ye.Yb(q,d-Q-r-D.JR.$w,window.Infinity,l)?(s=q.Nb().e,h.La(q,new D.Kj(e))):(l.removeChild(n),l.removeChild(q),q=D.o,s=0):D.Ye.Yb(w,d-m-x-D.JR.$w,window.Infinity,
l)?(D$=w.Nb().e,h.La(w,new D.Kj(f))):(l.removeChild(u),l.removeChild(w),w=D.o,D$=0));d=0;g?(w&&(w.ka(d),d+=D$+D.JR.$w,u.ka(d),d+=x+D.JR.$U),q&&(q.ka(d),d+=s+D.JR.$w,n.ka(d))):(q&&(n.ka(d),d+=r+D.JR.$w,q.ka(d),d+=s+D.JR.$U),w&&(u.ka(d),d+=x+D.JR.$w,w.ka(d)))}return l};
D.oV=function(a){this.Init(a)};D.A.q(D.oV,D.qk,"DvtBaseTreeKeyboardHandler");D.oV.prototype.By=function(a){return this.Bg(a)&&!a.ctrlKey};D.oV.prototype.hr=function(a){return 32==a.keyCode&&a.ctrlKey};
D.ZR=(0,D.t)();D.A.q(D.ZR,D.Sj,"DvtBaseTreeDefaults");
D.iV={skin:"alta",animationDuration:500,animationOnDataChange:"none",animationOnDisplay:"none",highlightMatch:"all",hoverBehavior:"none",hoverBehaviorDelay:200,nodeDefaults:{labelStyle:new D.I("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 11px;")},selectionMode:"multiple",sorting:"off",_statusMessageStyle:new D.I("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;"),styleDefaults:{_attributeTypeTextStyle:new D.I("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:12px;font-weight:bold;color:#4F4F4F"),_attributeValueTextStyle:new D.I("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:12px;"),
_currentTextStyle:new D.I("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:12px;"),_drillTextStyle:new D.I("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:12px;"),_labelStyle:new D.I("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;")},touchResponse:"auto",_resources:{}};D.ZR.prototype.Init=function(a){a={skyros:D.vl.Xd(a.skyros,D.iV),alta:D.vl.Xd(a.alta,{})};D.ZR.u.Init.call(this,a)};
D.nV={};D.A.q(D.nV,D.A,"DvtBaseTreeUtils");D.nV.nqa=function(a,b){var c=b,d=a.Ic();if(d)for(var e=0;e<d.length;e++)var f=D.nV.nqa(d[e],b+1),c=window.Math.max(c,f);return c};D.nV.oqa=function(a){var b=1;if(a=a.Ic())for(var c=0;c<a.length;c++)b+=D.nV.oqa(a[c]);return b};D.nV.WR=function(a){var b=[];D.nV.fV(a,b);return b};D.nV.OIa=function(a){var b=[];D.nV.fV(a,b,D.p,D.k);return b};D.nV.Rra=function(a){var b=[];D.nV.fV(a,b,D.k);return b};D.nV.CMa=function(a,b){return D.$f.HM(a,b.categories)};
D.nV.KHa=function(a,b){var c=a.S;if(!(c==D.o||a.min!=D.o&&a.max!=D.o)){for(var d=window.Infinity,e=-window.Infinity,f=0;f<b.length;f++){var g=b[f];c==g.nD&&(g=g.v()._cv,g!=D.o&&(e=window.Math.max(e,g),d=window.Math.min(d,g)))}a.min==D.o&&(a.min=d);a.max==D.o&&(a.max=e)}};D.nV.ENa=function(a,b){for(var c=0;c<a.length;c++){var d=a[c],e=d.CHa,d=d.sOa;if(e instanceof D.lR&&d!=D.o)for(var f=0;f<b.length;f++){var g=b[f];if(d==g.nD){var h=e.get(g.v()._cv);h&&(g.qk=h)}}}};
D.nV.fV=function(a,b,c,d){if(a){var e=a.Ic(),f=e?e.length:0;(!c||0==f)&&(!d||a.ta())&&b.push(a);for(a=0;a<f;a++)D.nV.fV(e[a],b,c,d)}};
D.vV=function(a){this.Qpa=a;this.Pa=a.Pa};(0,D.da)("DvtTreeAutomation",D.vV);D.A.q(D.vV,D.Ij,"DvtTreeAutomation");D.vV.prototype.Dl=function(a){var b=this.Qpa.oba(a);if(!b)return a.getParent()instanceof D.Ne&&(a=a.getParent()),b=a.getParent(),b instanceof D.$r?"breadcrumbs["+(0,D.Pt)(b,a)+"]":D.o;if(b instanceof D.dS){a="";if(!this.Pa.aC){if(b==this.Pa)return"node[0]";a+="[0]"}a=(b=this.BP(b,this.Pa.Ic()))?a+b:a;if(0<a.length)return"node"+a}return D.o};
D.vV.prototype.BP=function(a,b){if(b&&0<b.length)for(var c=0;c<b.length;c++){if(b[c]==a)return"["+c+"]";var d=this.BP(a,b[c].Ic());if(d)return"["+c+"]"+d}return D.o};
D.vV.prototype.Qf=function(a){return!a?D.o:"tooltip"==a?(0,D.hm)(this.Qpa):0==a.indexOf("breadcrumbs")?(a=(0,D.Rt)(this.Pa.K.Raa(),a.substring(a.indexOf("[")+1,a.indexOf("]"))))?a.ya():D.o:!this.Pa.aC&&(a=a.substring(0,a.indexOf("["))+a.substring(a.indexOf("]")+1),"node"==a)?this.Pa.ta().ya():(a=(0,D.wV)(this,this.Pa,a))?a.ta().ya():D.o};D.vV.prototype.getDomElementForSubId=D.vV.prototype.Qf;
D.wV=function(a,b,c){var d=c.indexOf("["),e=c.indexOf("]");if(0<=d&&0<=e){d=c.substring(d+1,e);c=c.substring(e+1);var e=c.indexOf("["),f=c.indexOf("]");return(b=(0,D.xV)(b.Ic(),d))&&0<=e&&0<=f?(0,D.wV)(a,b,c):b}};D.yV=function(a,b,c){var d=c.shift();b=(0,D.xV)(b.Ic(),d);return 0==c.length?b:0<c.length?(0,D.yV)(a,b,c):D.o};
D.vV.prototype.$b=function(a){!this.Pa.aC&&0==a[0]&&a.shift();a=0==a.length?this.Pa:(0,D.yV)(this,this.Pa,a);return{color:a.zb(),label:a.Yc(),selected:a.Ga()==D.i?D.p:a.Ga(),size:a.Zc(),tooltip:a.Kc()}};D.vV.prototype.getNode=D.vV.prototype.$b;D.xV=function(a,b){for(var c=0;c<a.length;c++)if(b==a[c].Ta())return a[c];return D.o};

  return D;
});