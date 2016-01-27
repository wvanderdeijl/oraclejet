/**
 * Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(['./DvtToolkit', './DvtOverview'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.
  
  // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  
D.TU=function(a,b,c){this.Init(a,b,c)};(0,D.da)("DvtTimelineOverview",D.TU);D.A.q(D.TU,D.Co,"DvtTimelineOverview");D.TU.prototype.Init=function(a,b,c){D.TU.u.Init.call(this,a,b,c);a=[D.J.KD(D.J.Vm("#aadd77",0.35)),"#aadd77",D.J.KD(D.J.Go("#aadd77",0.5))];D.aP.om()&&(a=["#aadd77"]);this.a6=a;this.Pma=(0,D.go)();this.Ft=12};D.TU.prototype.lsa=function(){return new D.UU(this)};
D.TU.prototype.Xu=function(a){D.TU.u.Xu.call(this,a);this.Oq=a.qT;this.Dn=a.nNa;this.QY=a.$Na;this.b6=a.Nqa;this.r6="#267DB3 #68C182 #FAD55C #ED6647 #8561C8 #6DDBDB #FFB54D #E371B2 #47BDEF #A2BF39 #A75DBA #F7F37B".split(" ");a.nw&&(this.Fq=new D.I(a.nw));a="solid"==this.C("_","bs")?(0,window.parseInt)(this.C("_","bof"),10):1;var b="solid"==this.C("_as","bs")?(0,window.parseInt)(this.C("_as","bof"),10):1,c="solid"==this.C("_s","bs")?(0,window.parseInt)(this.C("_s","bof"),10):1;this.MX="none"!=this.Oq?
window.Math.max(b,c,a,1)/2+1:1;this.iP=this.Ya()?0:0.75;this.Vja=[this.iP,this.iP,this.iP];this.sFa=new D.gg(250,this.a6,this.Vja);this.bEa=new D.gg(180,this.a6,this.Vja);a=this.Ya()?0:1;this.aBa=new D.ig("#aadd77",a)};D.TU.prototype.rD=function(a,b,c,d,e,f){D.TU.u.rD.call(this,a,b,c,d,e,f,this.Fq)};D.GU=function(a,b){for(var c="_mrk_"+b,d="_drn_"+b,e=a.Qa(),f=0;f<e;f++){var g=a.na(f);if(g!=D.o&&(c==g.getId()||d==g.getId()))return g}return D.o};D.z=D.TU.prototype;D.z.vH=function(a){return a.getId().substr(5)};
D.z.C=function(a,b){return this.cBa[a+b]};D.z.qa=function(a){return a.Tb!=D.o?a.Tb.qa():a.Da().Hc};D.z.sa=function(a){return a.Tb!=D.o?a.Tb.sa():a.Da().Bc};D.z.Cc=function(a){a=a.Cc();a==D.o&&(a=this.Ya()?(this.Ma-this.IH()-4)/2:1);return a};D.z.Jc=function(a){a=a.Jc();a==D.o&&(a=1);return a};
D.z.Oca=function(a,b){D.TU.u.Oca.call(this,a,b);if(this.Dn!=D.o){for(var c=(0,D.VU)(this,this.xb,this.ic,a,b,this.Ft),d=[],e=0;e<this.Dn.length;e++){var f=this.Dn[e];if(f.ei==D.o){var g=c,h="_mrk_"+f.getId(),j=f.zb(),l=f.Z6,m=f.vba();m==D.o&&(m=this.iP,0==m&&j!=D.o&&(m=1));var n=this.Cc(f),q=this.Jc(f),r=f.Ab();if(this.Ya())var r="rectangle",n=2*n,g=2*q,q=f.sa()+n/2,s=f.qa()+g/2;else n*=g,g*=q,q=f.qa()+n/2,s=f.sa()+g/2;h=new D.fh(this.j(),r,D.o,q,s,n,g,D.o,h);h.Tb=f;j==D.o&&m==this.iP&&l==D.o?(l=
"circle"==r?this.sFa:this.bEa,j=this.aBa):(n=this.a6,j!=D.o&&(D.aP.om()?n=[j]:(n=D.J.Vm(j,0.5),g=D.J.Go(j,0.5),n=[n,j,g])),g=[m,m,m],l=l==D.o?"circle"==r?new D.gg(250,n,g):new D.gg(180,n,g):new D.Jn(j,g[0]),j=new D.ig(j,m));h.P(l);h.ba(j);"none"!=this.Oq&&h.Sf(D.k);j=this.Qa();m=this.na(j-1);j>this.Gq&&("tb"==m.getId()||"arr"==m.getId())?this.Sa(h,j-this.Gq):this.k(h);f.Hf(h);this.Kn(h,"_");(this.Ya()||"rectangle"==r||"diamond"==r||"triangleUp"==r||"triangleDown"==r||"plus"==r)&&"false"!=this.b6.Sca&&
(0,D.Ii)(h)}else d[d.length]=f}this.Q0(d);e=this.j();for(f=this.v8;0<f;f--)for(r=0;r<d.length;r++)j=d[r],f==j.xq&&(l=D.aP.me(this.xb,this.ic,j.getTime(),this.Ya()?this.Xa:this.Ma),h="_drn_"+j.getId(),m=9+5*j.xq,n=D.aP.me(this.xb,this.ic,j.ei,this.Ya()?this.Xa:this.Ma),l=this.Ya()?this.zh()?new D.Re(e,0,l,m,n-l,h):new D.Re(e,this.Ma-m,l,m,n-l,h):this.zh()?new D.Re(e,this.Ma-n,this.Xa-m-20,n-l,m,h):new D.Re(e,l,this.Xa-m-20,n-l,m,h),l.P(new D.Jn(j.Kz)),h=new D.ig(this.C("_","dbc"),1,1),l.ba(h),(0,D.Ii)(l),
l.Tb=j,this.k(l),j.UJ=l,j.VPa=m-2);this.removeChild(this.Dpa);this.k(this.Dpa);this.Ft=c}};D.z.Q0=function(a){this.v8=0;var b=D.o;this.VJ==D.o&&(this.VJ={});for(var c=0;c<a.length;c++){var d=a[c],e=d.getId(),f=e.substring(e.indexOf(":")+1,e.length),f=f.substring(0,f.indexOf(":"));f!=b&&(this.sx=0,b=f);d.xq=(0,D.WU)(this,d,a);d.Kz==D.o&&(this.VJ[e]==D.o?(this.VJ[e]=this.sx,d.Kz=this.r6[this.sx],this.sx++,this.sx==this.r6.length&&(this.sx=0)):d.Kz=this.r6[this.VJ[e]])}};
D.z.GJa=function(){return this.VJ?this.VJ:D.o};D.TU.prototype.getDurationColorMap=D.TU.prototype.GJa;
D.VU=function(a,b,c,d,e,f){for(var g,h,j={max:1,iaa:[]},l=a.Ya()?e:d,m=0;m<a.Dn.length;m++){var n=a.Dn[m];if(n.ei!=D.o){var q=D.aP.me(b,c,n.getTime(),l);(0,D.dP)(a)&&(q=l-q);n.ka(q)}else{var q=a,r=b,s=c,u=l,w=f/2,x=j,D$=e,Q=w*q.Cc(n)+q.MX,M=w*q.Jc(n)+q.MX,r=D.aP.me(r,s,n.getTime(),u);(0,D.dP)(q)&&(r=u-r-2*Q);if(q.Ya())w=0,"solid"==q.C("_","bs")&&(w=(0,window.parseInt)(q.C("_","bw"),10)),u=q.zh()?w+4:q.Ma-2*q.Cc(n)-w-4;else for(var u=3,L=0,s=0;1>s;){g=q;h=x;var W=n.Ab(),O=r,ca=u,qa=Q,Ja=M,jb=w,La=
D$;"above"==g.kY&&(ca+=(0,D.nP)(g));for(var Db=0;Db<h.iaa.length;Db++){var fb=h.iaa[Db],sb=fb.qa(),hd=fb.sa(),Ub=fb.Ab(),Ae=g.Cc(fb),fb=g.Jc(fb),sb=window.Math.abs(O-sb),sf=jb*Ae+g.MX+qa;if(!(sb>=sf)&&(Ub="circle"==W&&"circle"==Ub&&qa==Ja&&Ae==fb?window.Math.sqrt(sf*sf-sb*sb):jb*fb+g.MX+Ja,Ub>window.Math.abs(ca-hd)&&(ca=hd+Ub,L=window.Math.max(L,ca+Ub),1<=jb&&La!=D.i&&L>La)))break}g=ca;h=L;g==u&&(s=1);L=h;u=g;s++}n.ka(r);n.Aa(u);x.iaa.push(n);L>x.max&&(x.max=L);if(j.max>e)break}}return j.max>e&&1<
f?(0,D.VU)(a,b,c,d,e,f-1):f};D.WU=function(a,b,c){var d=c.length,e=b.getTime(),f=b.xq;f==D.o&&(f=1);for(var g=0;g<d;g++){var h=c[g];if(h!=b){var j=h.ei;if(j!=D.o){var l=h.getTime(),h=h.xq;h==D.o&&(h=1);e>=l&&(e<=j&&f==h)&&(f=h+1,b.xq=f,f=(0,D.WU)(a,b,c))}}}f>a.v8&&(a.v8=f);return f};
D.TU.prototype.pU=function(a){var b=D.TU.u.pU.call(this,a);if(b!=D.o){if(b.Tb!=D.o){var c=b.Tb.OJ;c!=D.o&&this.j().cd().lN(a.pageX,a.pageY,c,"#000000");this.OH()&&this.setCursor("pointer")}if("none"!=this.Oq){a=D.p;if(this.Ak!=D.o)for(c=0;c<this.Ak.length;c++)if(b==this.Ak[c]){a=D.k;break}a||(a=this.vH(b),c=new D.XU("highlight"),(0,D.Kl)(c,"itemId",a),this.dispatchEvent(c),(0,D.YU)(this,b))}}};
D.TU.prototype.oU=function(a){a=D.TU.u.oU.call(this,a);if(a!=D.o&&!(0,D.AP)(a)){this.j().cd().Lc();var b=D.p;if(this.Ak!=D.o)for(var c=0;c<this.Ak.length;c++)if(a==this.Ak[c]){b=D.k;break}b||(b=this.vH(a),c=new D.XU("unhighlight"),(0,D.Kl)(c,"itemId",b),this.dispatchEvent(c),(0,D.ZU)(this,a))}};
D.TU.prototype.HE=function(a,b,c){b=D.TU.u.HE.call(this,a,b,c);if(b!=D.o&&(a=a.ctrlKey||a.shiftKey||(0,D.Jf)(),"none"!=this.Oq)){c=this.vH(b);var d=new D.XU("selection");(0,D.Kl)(d,"itemId",c);(0,D.Kl)(d,"multiSelect",a);this.dispatchEvent(d);a=b.Tb.getTime();a!=D.o&&(c=new D.XU("scrollTime"),c.setTime(a),this.dispatchEvent(c),a=this.na(1),b=this.Ya()?this.qa(b)-a.getHeight()/2:this.qa(b)-a.getWidth()/2,(0,D.pP)(this,b))}};
D.YU=function(a,b){if(a.Ak!=D.o)for(var c=0;c<a.Ak.length;c++)if(b==a.Ak[c])return;a.Kn(b,"_h")};D.ZU=function(a,b){if(a.Ak!=D.o)for(var c=0;c<a.Ak.length;c++)if(b==a.Ak[c])return;a.Kn(b,"_")};D.HU=function(a,b){a.Ak==D.o&&(a.Ak=[]);var c=D.o;0<a.Ak.length&&(c=a.Ak[a.Ak.length-1]);a.Ak.push(b);c!=D.o&&a.Kn(c,"_s");a.Kn(b,"_as")};
D.TU.prototype.Kn=function(a,b){if(a instanceof D.fh){var c=D.p,d=D.p;if("solid"==this.C(b,"bs")){var c=D.k,e=this.C(b,"bc");e==D.o&&(e="#000000");var f=this.C(b,"gc");f!=D.o&&"none"!=f&&(d=D.k)}var g=a.Tia,h=a.X6;!c&&g!=D.o?(this.removeChild(g),a.Tia=D.o,h!=D.o&&(this.removeChild(h),a.X6=D.o)):!d&&h!=D.o&&(this.removeChild(h),a.X6=D.o);var j=a.$a();if(c){var c=(0,window.parseInt)(this.C(b,"bw"),10),l=(0,window.parseInt)(this.C(b,"bof"),10);if(g==D.o){if("circle"==j){this.OH()&&(l=0);var m=(a.I().e+
2*l)*a.Cc(),n=(a.I().g+2*l)*a.Jc(),q=this.qa(a)-l+m/2,r=this.sa(a)-l+n/2}else this.Ya()?(m=(a.I().e+(c+1))*a.Cc(),n=(a.I().g+(c+1))*a.Jc(),q=this.sa(a)-(c+1)/2+m/2,r=this.qa(a)-(c+1)/2+n/2):(m=(a.I().e+2*l)*a.Cc(),n=(a.I().g+2*l)*a.Jc(),q=this.qa(a)-l+m/2,r=this.sa(a)-l+n/2);g=new D.fh(this.j(),j,D.o,q,r,m,n,D.o,a.getId()+"_border");this.Sa(g,this.Xf(a));a.Tia=g;g.P(this.Pma)}e=new D.ig(e,this.C(b,"bo"),c);g.ba(e);(this.Ya()||"rectangle"==j||"diamond"==j||"triangleUp"==j||"triangleDown"==j||"plus"==
j)&&"false"!=this.b6.Sca&&(0,D.Ii)(g);d&&(h==D.o&&(h=l-c,"circle"==j?(this.OH()&&(h=0),m=(a.I().e+2*h)*a.Cc(),n=(a.I().g+2*h)*a.Jc(),q=this.qa(a)-h+m/2,r=this.sa(a)-h+n/2):this.Ya()?(m=(a.I().e+3)*a.Cc(),n=(a.I().g+3)*a.Jc(),q=this.sa(a)+m/2,r=this.qa(a)-1+n/2):(m=(a.I().e+2*h)*a.Cc(),n=(a.I().g+2*h)*a.Jc(),q=this.qa(a)-h+m/2,r=this.sa(a)-h+n/2),h=new D.fh(this.j(),j,D.o,q,r,m,n,D.o,a.getId()+"_glow"),this.Sa(h,this.Xf(g)),a.X6=h,h.P(this.Pma)),f=new D.ig(f,this.C(b,"go"),4),h.ba(f),(this.Ya()||"rectangle"==
j||"diamond"==j||"triangleUp"==j||"triangleDown"==j||"plus"==j)&&"false"!=this.b6.Sca&&(0,D.Ii)(h))}}else if((j=a.getId())&&"_drn_"==j.substring(0,5))j=this.C(b,"dbc"),j==D.o&&(j="#000000"),f=(0,window.parseInt)(this.C(b,"dbw"),10),a.ba(new D.ig(j,1,f))};D.TU.prototype.Pf=function(){this.pha||(this.pha=new D.$U(this));return this.pha};D.TU.prototype.getAutomation=D.TU.prototype.Pf;
D.UU=function(a){this.Init(a)};D.A.q(D.UU,D.A,"DvtTimelineOverviewParser");D.z=D.UU.prototype;D.z.Init=function(a){this.K=a;this.Gv=new D.rj};D.z.parse=function(a){var b=this.Gv.parse(a);a=this.QE(b);var b=b.Ic(),c;if(c=b[0]){var d={};d.width=c.B("width");d.height=c.B("height");d.wOa=c.Ic();c=d}else c=D.o;a.vua=c;a.nNa=this.k9(b[1],a.Nqa);2<b.length&&(a.MIa=!b[2]?D.o:b[2].Ic());return a};
D.z.QE=function(a){var b={};b.start=(0,window.parseInt)(a.B("start"));b.end=(0,window.parseInt)(a.B("end"));b.width=(0,window.parseInt)(a.B("width"));b.ida=(0,window.parseInt)(a.B("renstart"));b.currentTime=(0,window.parseInt)(a.B("ocd"));b.orientation=a.B("orn");b.Qta=a.B("ovp");b.qT=a.B("selmode");b.nca=a.B("rtl");b.borderTopStyle=a.B("_bts");b.borderTopColor=a.B("_btc");b.$Na=a.B("sid");b.gqa=a.B("_aoc");var c={};c.shape=a.B("_ds");c.gI=a.B("_dsx");c.hI=a.B("_dsy");c.opacity=a.B("_do");c.color=
a.B("_fc");c.Sca=a.B("_ph");b.Nqa=c;b.Vba=a.B("_hfc");b.Xba=a.B("_htc");b.Csa=a.B("_hbi");b.Osa=a.B("_hw");b.Lsa=a.B("_hh");b.Nda=a.B("_wbc");b.Vda=a.B("_wbts");b.Tda=a.B("_wbrs");b.Pda=a.B("_wbbs");b.Rda=a.B("_wbls");b.Uda=a.B("_wbtc");b.Sda=a.B("_wbrc");b.Oda=a.B("_wbbc");b.Qda=a.B("_wblc");b.Mca=a.B("_obc");b.uaa=a.B("_ctic");b.Gda=a.B("_tic");b.tua=a.B("_tabc");b.uua=a.B("_tabo");b.nw=a.B("_ls");c={};c._bs=a.B("_bs");c._bc=a.B("_bc");c._bw=a.B("_bw");c._bof=a.B("_bof");c._bo=a.B("_bo");c._gc=
a.B("_gc");c._go=a.B("_go");c._dbs=a.B("_dbs");c._dbc=a.B("_dbc");c._dbw=a.B("_dbw");c._hbs=a.B("_hbs");c._hbc=a.B("_hbc");c._hbw=a.B("_hbw");c._hbof=a.B("_hbof");c._hbo=a.B("_hbo");c._hgc=a.B("_hgc");c._hgo=a.B("_hgo");c._hdbs=a.B("_hdbs");c._hdbc=a.B("_hdbc");c._hdbw=a.B("_hdbw");c._sbs=a.B("_sbs");c._sbc=a.B("_sbc");c._sbw=a.B("_sbw");c._sbof=a.B("_sbof");c._sbo=a.B("_sbo");c._sgc=a.B("_sgc");c._sgo=a.B("_sgo");c._sdbs=a.B("_sdbs");c._sdbc=a.B("_sdbc");c._sdbw=a.B("_sdbw");c._asbs=a.B("_asbs");
c._asbc=a.B("_asbc");c._asbw=a.B("_asbw");c._asbof=a.B("_asbof");c._asbo=a.B("_asbo");c._asgc=a.B("_asgc");c._asgo=a.B("_asgo");c._asdbs=a.B("_asdbs");c._asdbc=a.B("_asdbc");c._asdbw=a.B("_asdbw");b.IHa=c;return b};D.z.k9=function(a,b){if(!a)return D.o;for(var c=[],d=a.Ic(),e=0;e<d.length;e++){var f=this.g3(d[e],b),f=new D.aV(this.K,f);c.push(f)}return c};
D.z.g3=function(a,b){var c={},d="true"==a.B("_sd");c.id=a.B("tid");c.lda=a.B("rk");c.time=a.B("t");c.uD=a.B("et");c.shape=a.B("s");d&&c.shape==D.o&&(c.shape=b.shape);c.UZ=a.B("d");c.color=a.B("c");c.YZ=a.B("dfc");d&&c.color==D.o&&(c.color=b.color);c.gI=a.B("sx");d&&c.gI==D.o&&(c.gI=b.gI);c.hI=a.B("sy");d&&c.hI==D.o&&(c.hI=b.hI);c.GLa=a.B("g");c.opacity=a.B("o");d&&c.opacity==D.o&&(c.opacity=b.opacity);return c};
D.aV=function(a,b){this.Init(a,b)};D.A.q(D.aV,D.A,"DvtTimelineOverviewNode");D.z=D.aV.prototype;
D.z.Init=function(a,b){this.K=a;this.dR=b.lda;this.ib=b.id;this.VGa=(0,window.parseInt)(b.time);this.ei=b.uD==D.o?D.o:(0,window.parseInt)(b.uD);this.J="circle";"square"==b.shape?this.J="rectangle":"plus"==b.shape?this.J="plus":"diamond"==b.shape?this.J="diamond":"triangleUp"==b.shape?this.J="triangleUp":"triangleDown"==b.shape&&(this.J="triangleDown");this.OJ=b.UZ;this.qk=b.color;this.Z6=b.GLa;b.opacity!=D.o&&(this.REa=(0,window.parseFloat)(b.opacity));b.gI!=D.o&&(this.AGa=(0,window.parseFloat)(b.gI));
b.hI!=D.o&&(this.BGa=(0,window.parseFloat)(b.hI));b.YZ!=D.o&&(this.Kz=b.YZ)};D.z.getId=(0,D.y)("ib");D.z.Cba=(0,D.y)("dR");D.z.getTime=(0,D.y)("VGa");D.z.Cc=(0,D.y)("AGa");D.z.Jc=(0,D.y)("BGa");D.z.zb=(0,D.y)("qk");D.z.Ab=(0,D.y)("J");D.z.vba=(0,D.y)("REa");D.z.ta=(0,D.y)("Dg");D.z.Hf=(0,D.v)("Dg");D.z.qa=(0,D.y)("Jb");D.z.ka=(0,D.v)("Jb");D.z.sa=(0,D.y)("fc");D.z.Aa=(0,D.v)("fc");
D.XU=function(a){this.Init("timeline");this.Qm=a};D.A.q(D.XU,D.DP,"DvtTimelineOverviewEvent");D.XU.prototype.vH=function(){return this.mj("itemId")};
D.$U=function(a){this.lc(a)};D.A.q(D.$U,D.Ij,"DvtTimelineOverviewAutomation");D.$U.prototype.lc=(0,D.v)("uc");
D.$U.prototype.Dl=function(a){var b=a.getId();if(a instanceof D.fh){a=b.split(":");if(4!=a.length)return D.o;b=this.uc.QY==D.o?D.o:this.uc.QY.split(" ");if(b!=D.o&&(b=b.indexOf(a[1]),-1<b))return"marker["+b+"]["+a[2]+"]"}else{if("window"==b)return"range_window";if("lh"==b||"lhb"==b||"lbgrh"==b)return"range_start_handle";if("rh"==b||"rhb"==b||"rbgrh"==b)return"range_end_handle";if("grpy"==b)return a=a.getParent().aS(a),this.Dl(a)}return D.o};
D.$U.prototype.Qf=function(a){for(var b=a.split("["),c=b.length,d=1;d<c;d++){var e=b[d],e=e.substr(0,e.length-1),f=(0,window.parseFloat)(e),e=(0,window.isNaN)(f)?e:f;b[d]=e}if(b&&3==b.length&&"marker"==b[0]){if(c=this.uc.QY==D.o?D.o:this.uc.QY.split(" "),c!=D.o&&(d=(0,window.parseInt)(b[1],10),-1<d&&d<c.length)){a:{a=this.uc.Dn;b="tl1:"+c[d]+":"+b[2]+":";for(c=0;c<a.length;c++)if(d=a[c],e=d.getId(),e!=D.o&&0==e.indexOf(b)){b=d;break a}b=D.o}return b?b.ta().ya():D.o}}else{if("range_window"==a)return this.uc.na(1).ya();
if("range_start_handle"==a)return this.uc.na(this.uc.Qa()-this.uc.Gq).ya();if("range_end_handle"==a)return(0,D.xP)(this.uc).ya()}return D.o};(0,D.da)("DvtTimelineOverviewAutomation.prototype.getDomElementForSubId",D.$U.prototype.Qf);

  return D;
});