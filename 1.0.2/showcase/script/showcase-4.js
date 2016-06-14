qx.$$packageData['b627ef03374c']={"resources":{}};
(function(){var d="cldr_number_decimal_separator",c="cldr_number_percent_format",b="qx.locale.Number",a="cldr_number_group_separator";
qx.Class.define(b,{statics:{getDecimalSeparator:function(e){return qx.locale.Manager.getInstance().localize(d,[],e);
},getGroupSeparator:function(f){return qx.locale.Manager.getInstance().localize(a,[],f);
},getPercentFormat:function(g){return qx.locale.Manager.getInstance().localize(c,[],g);
}}});
})();
(function(){var a="qx.util.format.IFormat";
qx.Interface.define(a,{members:{format:function(b){},parse:function(c){}}});
})();
(function(){var k="_",j="format",h="thu",g="sat",f="cldr_day_",e="cldr_month_",d="wed",c="fri",b="tue",a="mon",B="sun",A="short",z="HH:mm",y="HHmmsszz",x="HHmm",w="HHmmss",v="cldr_date_format_",u="HH:mm:ss zz",t="full",s="cldr_pm",q="long",r="medium",o="cldr_am",p="qx.locale.Date",m="cldr_date_time_format_",n="cldr_time_format_",l="HH:mm:ss";
qx.Class.define(p,{statics:{__lz:qx.locale.Manager.getInstance(),getAmMarker:function(be){return this.__lz.localize(o,[],be);
},getPmMarker:function(Y){return this.__lz.localize(s,[],Y);
},getDayNames:function(length,K,L){var L=L?L:j;
{};
var N=[B,a,b,d,h,c,g];
var O=[];

for(var i=0;i<N.length;i++){var M=f+L+k+length+k+N[i];
O.push(this.__lz.localize(M,[],K));
}return O;
},getDayName:function(length,bf,bg,bh){var bh=bh?bh:j;
{};
var bj=[B,a,b,d,h,c,g];
var bi=f+bh+k+length+k+bj[bf];
return this.__lz.localize(bi,[],bg);
},getMonthNames:function(length,bk,bl){var bl=bl?bl:j;
{};
var bn=[];

for(var i=0;i<12;i++){var bm=e+bl+k+length+k+(i+1);
bn.push(this.__lz.localize(bm,[],bk));
}return bn;
},getMonthName:function(length,U,V,W){var W=W?W:j;
{};
var X=e+W+k+length+k+(U+1);
return this.__lz.localize(X,[],V);
},getDateFormat:function(P,Q){{};
var R=v+P;
return this.__lz.localize(R,[],Q);
},getDateTimeFormat:function(F,G,H){var J=m+F;
var I=this.__lz.localize(J,[],H);

if(I==J){I=G;
}return I;
},getTimeFormat:function(bu,bv){{};
var bx=n+bu;
var bw=this.__lz.localize(bx,[],bv);

if(bw!=bx){return bw;
}
switch(bu){case A:case r:return qx.locale.Date.getDateTimeFormat(x,z);
case q:return qx.locale.Date.getDateTimeFormat(w,l);
case t:return qx.locale.Date.getDateTimeFormat(y,u);
default:throw new Error("This case should never happen.");
}},getWeekStart:function(C){var D={"MV":5,"AE":6,"AF":6,"BH":6,"DJ":6,"DZ":6,"EG":6,"ER":6,"ET":6,"IQ":6,"IR":6,"JO":6,"KE":6,"KW":6,"LB":6,"LY":6,"MA":6,"OM":6,"QA":6,"SA":6,"SD":6,"SO":6,"TN":6,"YE":6,"AS":0,"AU":0,"AZ":0,"BW":0,"CA":0,"CN":0,"FO":0,"GE":0,"GL":0,"GU":0,"HK":0,"IE":0,"IL":0,"IS":0,"JM":0,"JP":0,"KG":0,"KR":0,"LA":0,"MH":0,"MN":0,"MO":0,"MP":0,"MT":0,"NZ":0,"PH":0,"PK":0,"SG":0,"TH":0,"TT":0,"TW":0,"UM":0,"US":0,"UZ":0,"VI":0,"ZA":0,"ZW":0,"MW":0,"NG":0,"TJ":0};
var E=qx.locale.Date._getTerritory(C);
return D[E]!=null?D[E]:1;
},getWeekendStart:function(br){var bt={"EG":5,"IL":5,"SY":5,"IN":0,"AE":4,"BH":4,"DZ":4,"IQ":4,"JO":4,"KW":4,"LB":4,"LY":4,"MA":4,"OM":4,"QA":4,"SA":4,"SD":4,"TN":4,"YE":4};
var bs=qx.locale.Date._getTerritory(br);
return bt[bs]!=null?bt[bs]:6;
},getWeekendEnd:function(bo){var bp={"AE":5,"BH":5,"DZ":5,"IQ":5,"JO":5,"KW":5,"LB":5,"LY":5,"MA":5,"OM":5,"QA":5,"SA":5,"SD":5,"TN":5,"YE":5,"AF":5,"IR":5,"EG":6,"IL":6,"SY":6};
var bq=qx.locale.Date._getTerritory(bo);
return bp[bq]!=null?bp[bq]:0;
},isWeekend:function(ba,bb){var bd=qx.locale.Date.getWeekendStart(bb);
var bc=qx.locale.Date.getWeekendEnd(bb);

if(bc>bd){return ((ba>=bd)&&(ba<=bc));
}else{return ((ba>=bd)||(ba<=bc));
}},_getTerritory:function(S){if(S){var T=S.split(k)[1]||S;
}else{T=this.__lz.getTerritory()||this.__lz.getLanguage();
}return T.toUpperCase();
}}});
})();
(function(){var ce="(\\d\\d?)",cd="format",cc="",cb="abbreviated",ca="wide",bY="(",bX=")",bW="|",bV="stand-alone",bU="wildcard",bJ="default",bI="literal",bH="'",bG="hour",bF="(\\d\\d?\\d?)",bE="ms",bD="narrow",bC="-",bB="quoted_literal",bA='a',cl="HH:mm:ss",cm="+",cj="HHmmss",ck="long",ch='z',ci="0",cf="sec",cg="day",cn='Z',co=" ",bN="min",bM="mm",bP="(\\d+)",bO="h",bR="KK",bQ='L',bT="Z",bS="(\\d\\d+)",bL="EEEE",bK="^",B=":",C='y',D="K",E="a",F="([\\+\\-]\\d\\d:?\\d\\d)",G="GMT",H="dd",I="qx.util.format.DateFormat",J="yyy",K="H",cs="YYYY",cr="y",cq="HH",cp="EE",cw='h',cv="S",cu='s',ct='A',cy="yyyyyy",cx="kk",bk="ss",bl='H',bi='S',bj="MMMM",bo='c',bp="d",bm="([a-zA-Z]+)",bn='k',bg="m",bh='Y',S='D',R="yyyyy",U='K',T="hh",O="SSS",N="MM",Q="yy",P="(\\d\\d\\d\\d\\d\\d+)",M="yyyy-MM-dd HH:mm:ss",L="(\\d\\d\\d\\d\\d+)",bu="short",bv='d',bw="unkown",bx='m',bq="(\\d\\d\\d\\d)",br="(\\d\\d\\d+)",bs="k",bt='M',by="(\\d\\d\\d\\d+)",bz="SS",bd="MMM",bc="s",bb="M",ba='w',Y="EEE",X="$",W="?",V='E',bf="z",be="yyyy";
qx.Class.define(I,{extend:qx.core.Object,implement:qx.util.format.IFormat,construct:function(cV,cW){arguments.callee.base.call(this);

if(!cW){this.__ln=qx.locale.Manager.getInstance().getLocale();
}else{this.__ln=cW;
}
if(cV!=null){this.__lo=cV.toString();
}else{this.__lo=qx.locale.Date.getDateFormat(ck,this.__ln)+co+qx.locale.Date.getDateTimeFormat(cj,cl,this.__ln);
}},statics:{getDateTimeInstance:function(){var cU=qx.util.format.DateFormat;
var cT=qx.locale.Date.getDateFormat(ck)+co+qx.locale.Date.getDateTimeFormat(cj,cl);

if(cU._dateInstance==null||cU._dateInstance.__lo!=cT){cU._dateTimeInstance=new cU();
}return cU._dateTimeInstance;
},getDateInstance:function(){var y=qx.util.format.DateFormat;
var x=qx.locale.Date.getDateFormat(bu)+cc;

if(y._dateInstance==null||y._dateInstance.__lo!=x){y._dateInstance=new y(x);
}return y._dateInstance;
},ASSUME_YEAR_2000_THRESHOLD:30,LOGGING_DATE_TIME__format:M,AM_MARKER:"am",PM_MARKER:"pm",MEDIUM_TIMEZONE_NAMES:["GMT"],FULL_TIMEZONE_NAMES:["Greenwich Mean Time"]},members:{__ln:null,__lo:null,__lp:null,__lq:null,__lr:null,__ls:function(cX,cY){var da=cc+cX;

while(da.length<cY){da=ci+da;
}return da;
},__lt:function(u){var v=new Date(u.getTime());
var w=v.getDate();

while(v.getMonth()!=0){v.setDate(-1);
w+=v.getDate()+1;
}return w;
},__lu:function(dN){return new Date(dN.getTime()+(3-((dN.getDay()+6)%7))*86400000);
},__lv:function(dd){var df=this.__lu(dd);
var dg=df.getFullYear();
var de=this.__lu(new Date(dg,0,4));
return Math.floor(1.5+(df.getTime()-de.getTime())/86400000/7);
},format:function(dr){if(dr==null){return null;
}var dx=qx.util.format.DateFormat;
var dy=this.__ln;
var dI=dr.getFullYear();
var dC=dr.getMonth();
var dK=dr.getDate();
var ds=dr.getDay();
var dD=dr.getHours();
var dz=dr.getMinutes();
var dE=dr.getSeconds();
var dG=dr.getMilliseconds();
var dJ=dr.getTimezoneOffset();
var dv=dJ>0?1:-1;
var dt=Math.floor(Math.abs(dJ)/60);
var dA=Math.abs(dJ)%60;
this.__lw();
var dH=cc;

for(var i=0;i<this.__lr.length;i++){var dF=this.__lr[i];

if(dF.type==bI){dH+=dF.text;
}else{var dw=dF.character;
var dB=dF.size;
var du=W;

switch(dw){case C:case bh:if(dB==2){du=this.__ls(dI%100,2);
}else{du=dI+cc;

if(dB>du.length){for(var i=du.length;i<dB;i++){du=ci+du;
}}}break;
case S:du=this.__ls(this.__lt(dr),dB);
break;
case bv:du=this.__ls(dK,dB);
break;
case ba:du=this.__ls(this.__lv(dr),dB);
break;
case V:if(dB==2){du=qx.locale.Date.getDayName(bD,ds,dy,cd);
}else if(dB==3){du=qx.locale.Date.getDayName(cb,ds,dy,cd);
}else if(dB==4){du=qx.locale.Date.getDayName(ca,ds,dy,cd);
}break;
case bo:if(dB==2){du=qx.locale.Date.getDayName(bD,ds,dy,bV);
}else if(dB==3){du=qx.locale.Date.getDayName(cb,ds,dy,bV);
}else if(dB==4){du=qx.locale.Date.getDayName(ca,ds,dy,bV);
}break;
case bt:if(dB==1||dB==2){du=this.__ls(dC+1,dB);
}else if(dB==3){du=qx.locale.Date.getMonthName(cb,dC,dy,cd);
}else if(dB==4){du=qx.locale.Date.getMonthName(ca,dC,dy,cd);
}break;
case bQ:if(dB==1||dB==2){du=this.__ls(dC+1,dB);
}else if(dB==3){du=qx.locale.Date.getMonthName(cb,dC,dy,bV);
}else if(dB==4){du=qx.locale.Date.getMonthName(ca,dC,dy,bV);
}break;
case bA:du=(dD<12)?qx.locale.Date.getAmMarker(dy):qx.locale.Date.getPmMarker(dy);
break;
case bl:du=this.__ls(dD,dB);
break;
case bn:du=this.__ls((dD==0)?24:dD,dB);
break;
case U:du=this.__ls(dD%12,dB);
break;
case cw:du=this.__ls(((dD%12)==0)?12:(dD%12),dB);
break;
case bx:du=this.__ls(dz,dB);
break;
case cu:du=this.__ls(dE,dB);
break;
case bi:du=this.__ls(dG,dB);
break;
case ch:if(dB==1){du=G+((dv>0)?bC:cm)+this.__ls(Math.abs(dt))+B+this.__ls(dA,2);
}else if(dB==2){du=dx.MEDIUM_TIMEZONE_NAMES[dt];
}else if(dB==3){du=dx.FULL_TIMEZONE_NAMES[dt];
}break;
case cn:du=((dv>0)?bC:cm)+this.__ls(Math.abs(dt),2)+this.__ls(dA,2);
break;
}dH+=du;
}}return dH;
},parse:function(dO){this.__lx();
var dU=this.__lp.regex.exec(dO);

if(dU==null){throw new Error("Date string '"+dO+"' does not match the date format: "+this.__lo);
}var dP={year:1970,month:0,day:1,hour:0,ispm:false,min:0,sec:0,ms:0};
var dQ=1;

for(var i=0;i<this.__lp.usedRules.length;i++){var dS=this.__lp.usedRules[i];
var dR=dU[dQ];

if(dS.field!=null){dP[dS.field]=parseInt(dR,10);
}else{dS.manipulator(dP,dR);
}dQ+=(dS.groups==null)?1:dS.groups;
}var dT=new Date(dP.year,dP.month,dP.day,(dP.ispm)?(dP.hour+12):dP.hour,dP.min,dP.sec,dP.ms);

if(dP.month!=dT.getMonth()||dP.year!=dT.getFullYear()){throw new Error("Error parsing date '"+dO+"': the value for day or month is too large");
}return dT;
},__lw:function(){if(this.__lr!=null){return;
}this.__lr=[];
var ea;
var dX=0;
var ec=cc;
var dV=this.__lo;
var dY=bJ;
var i=0;

while(i<dV.length){var eb=dV.charAt(i);

switch(dY){case bB:if(eb==bH){if(i+1>=dV.length){i++;
break;
}var dW=dV.charAt(i+1);

if(dW==bH){ec+=eb;
i++;
}else{i++;
dY=bw;
}}else{ec+=eb;
i++;
}break;
case bU:if(eb==ea){dX++;
i++;
}else{this.__lr.push({type:bU,character:ea,size:dX});
ea=null;
dX=0;
dY=bJ;
}break;
default:if((eb>=bA&&eb<=ch)||(eb>=ct&&eb<=cn)){ea=eb;
dY=bU;
}else if(eb==bH){if(i+1>=dV.length){ec+=eb;
i++;
break;
}var dW=dV.charAt(i+1);

if(dW==bH){ec+=eb;
i++;
}i++;
dY=bB;
}else{dY=bJ;
}
if(dY!=bJ){if(ec.length>0){this.__lr.push({type:bI,text:ec});
ec=cc;
}}else{ec+=eb;
i++;
}break;
}}if(ea!=null){this.__lr.push({type:bU,character:ea,size:dX});
}else if(ec.length>0){this.__lr.push({type:bI,text:ec});
}},__lx:function(){if(this.__lp!=null){return ;
}var cE=this.__lo;
this.__ly();
this.__lw();
var cK=[];
var cG=bK;

for(var cC=0;cC<this.__lr.length;cC++){var cL=this.__lr[cC];

if(cL.type==bI){cG+=qx.lang.String.escapeRegexpChars(cL.text);
}else{var cD=cL.character;
var cH=cL.size;
var cF;

for(var cM=0;cM<this.__lq.length;cM++){var cI=this.__lq[cM];

if(cD==cI.pattern.charAt(0)&&cH==cI.pattern.length){cF=cI;
break;
}}if(cF==null){var cJ=cc;

for(var i=0;i<cH;i++){cJ+=cD;
}throw new Error("Malformed date format: "+cE+". Wildcard "+cJ+" is not supported");
}else{cK.push(cF);
cG+=cF.regex;
}}}cG+=X;
var cB;

try{cB=new RegExp(cG);
}catch(dl){throw new Error("Malformed date format: "+cE);
}this.__lp={regex:cB,"usedRules":cK,pattern:cG};
},__ly:function(){var f=qx.util.format.DateFormat;
var m=qx.lang.String;

if(this.__lq!=null){return ;
}var g=this.__lq=[];
var t=function(dp,dq){dq=parseInt(dq,10);

if(dq<f.ASSUME_YEAR_2000_THRESHOLD){dq+=2000;
}else if(dq<100){dq+=1900;
}dp.year=dq;
};
var n=function(dL,dM){dL.month=parseInt(dM,10)-1;
};
var k=function(db,dc){db.ispm=(dc==f.PM_MARKER);
};
var j=function(cN,cO){cN.hour=parseInt(cO,10)%24;
};
var h=function(cz,cA){cz.hour=parseInt(cA,10)%12;
};
var q=function(dm,dn){return;
};
var o=qx.locale.Date.getMonthNames(cb,this.__ln,cd);

for(var i=0;i<o.length;i++){o[i]=m.escapeRegexpChars(o[i].toString());
}var p=function(dh,di){di=m.escapeRegexpChars(di);
dh.month=o.indexOf(di);
};
var c=qx.locale.Date.getMonthNames(ca,this.__ln,cd);

for(var i=0;i<c.length;i++){c[i]=m.escapeRegexpChars(c[i].toString());
}var b=function(cP,cQ){cQ=m.escapeRegexpChars(cQ);
cP.month=c.indexOf(cQ);
};
var e=qx.locale.Date.getDayNames(bD,this.__ln,cd);

for(var i=0;i<e.length;i++){e[i]=m.escapeRegexpChars(e[i].toString());
}var a=function(cR,cS){cS=m.escapeRegexpChars(cS);
cR.month=e.indexOf(cS);
};
var r=qx.locale.Date.getDayNames(cb,this.__ln,cd);

for(var i=0;i<r.length;i++){r[i]=m.escapeRegexpChars(r[i].toString());
}var l=function(z,A){A=m.escapeRegexpChars(A);
z.month=r.indexOf(A);
};
var s=qx.locale.Date.getDayNames(ca,this.__ln,cd);

for(var i=0;i<s.length;i++){s[i]=m.escapeRegexpChars(s[i].toString());
}var d=function(dj,dk){dk=m.escapeRegexpChars(dk);
dj.month=s.indexOf(dk);
};
g.push({pattern:cs,regex:bq,manipulator:t});
g.push({pattern:cr,regex:bP,manipulator:t});
g.push({pattern:Q,regex:bS,manipulator:t});
g.push({pattern:J,regex:br,manipulator:t});
g.push({pattern:be,regex:by,manipulator:t});
g.push({pattern:R,regex:L,manipulator:t});
g.push({pattern:cy,regex:P,manipulator:t});
g.push({pattern:bb,regex:ce,manipulator:n});
g.push({pattern:N,regex:ce,manipulator:n});
g.push({pattern:bd,regex:bY+o.join(bW)+bX,manipulator:p});
g.push({pattern:bj,regex:bY+c.join(bW)+bX,manipulator:b});
g.push({pattern:H,regex:ce,field:cg});
g.push({pattern:bp,regex:ce,field:cg});
g.push({pattern:cp,regex:bY+e.join(bW)+bX,manipulator:a});
g.push({pattern:Y,regex:bY+r.join(bW)+bX,manipulator:l});
g.push({pattern:bL,regex:bY+s.join(bW)+bX,manipulator:d});
g.push({pattern:E,regex:bY+f.AM_MARKER+bW+f.PM_MARKER+bX,manipulator:k});
g.push({pattern:cq,regex:ce,field:bG});
g.push({pattern:K,regex:ce,field:bG});
g.push({pattern:cx,regex:ce,manipulator:j});
g.push({pattern:bs,regex:ce,manipulator:j});
g.push({pattern:bR,regex:ce,field:bG});
g.push({pattern:D,regex:ce,field:bG});
g.push({pattern:T,regex:ce,manipulator:h});
g.push({pattern:bO,regex:ce,manipulator:h});
g.push({pattern:bM,regex:ce,field:bN});
g.push({pattern:bg,regex:ce,field:bN});
g.push({pattern:bk,regex:ce,field:cf});
g.push({pattern:bc,regex:ce,field:cf});
g.push({pattern:O,regex:bF,field:bE});
g.push({pattern:bz,regex:bF,field:bE});
g.push({pattern:cv,regex:bF,field:bE});
g.push({pattern:bT,regex:F,manipulator:q});
g.push({pattern:bf,regex:bm,manipulator:q});
}},destruct:function(){this.__lr=this.__lp=this.__lq=null;
}});
})();
