(function(){ 

if (!this.window) window = this;

if (!window.navigator) window.navigator = {
  userAgent: "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_4; de-de) AppleWebKit/533.17.8 (KHTML, like Gecko) Version/5.0.1 Safari/533.17.8", 
  product: "", 
  cpuClass: ""
}; 

if (!window.qx) window.qx = {};

if (!window.qxvariants) qxvariants = {};
  
if (!qx.$$environment) qx.$$environment = {};
var envinfo = {"qx.aspects":false,"qx.debug":false,"qx.globalErrorHandling":false};
for (var k in envinfo) qx.$$environment[k] = envinfo[k];

qx.$$packageData = {};
qx.$$loader = {};
})();

qx.$$packageData['3f9548b73c62']={"locales":{},"resources":{},"translations":{}};
(function(){var m="toString",k=".",j="default",h="Object",g='"',f="Array",e="()",d="String",c="Function",b=".prototype",L="function",K="Boolean",J="Error",I="constructor",H="warn",G="hasOwnProperty",F="string",E="toLocaleString",D="RegExp",C='\", "',t="info",u="BROKEN_IE",r="isPrototypeOf",s="Date",p="",q="qx.Bootstrap",n="]",o="Class",v="error",w="[Class ",y="valueOf",x="Number",A="count",z="debug",B="ES5";
if(!window.qx){window.qx={};
}qx.Bootstrap={genericToString:function(){return w+this.classname+n;
},createNamespace:function(name,M){var O=name.split(k);
var parent=window;
var N=O[0];

for(var i=0,P=O.length-1;i<P;i++,N=O[i]){if(!parent[N]){parent=parent[N]={};
}else{parent=parent[N];
}}parent[N]=M;
return N;
},setDisplayName:function(Q,R,name){Q.displayName=R+k+name+e;
},setDisplayNames:function(S,T){for(var name in S){var U=S[name];

if(U instanceof Function){U.displayName=T+k+name+e;
}}},define:function(name,V){if(!V){var V={statics:{}};
}var bb;
var Y=null;
qx.Bootstrap.setDisplayNames(V.statics,name);

if(V.members||V.extend){qx.Bootstrap.setDisplayNames(V.members,name+b);
bb=V.construct||new Function;

if(V.extend){this.extendClass(bb,bb,V.extend,name,ba);
}var W=V.statics||{};
for(var i=0,bc=qx.Bootstrap.getKeys(W),l=bc.length;i<l;i++){var bd=bc[i];
bb[bd]=W[bd];
}Y=bb.prototype;
var X=V.members||{};
for(var i=0,bc=qx.Bootstrap.getKeys(X),l=bc.length;i<l;i++){var bd=bc[i];
Y[bd]=X[bd];
}}else{bb=V.statics||{};
}var ba=this.createNamespace(name,bb);
bb.name=bb.classname=name;
bb.basename=ba;
bb.$$type=o;
if(!bb.hasOwnProperty(m)){bb.toString=this.genericToString;
}if(V.defer){V.defer(bb,Y);
}qx.Bootstrap.$$registry[name]=V.statics;
return bb;
}};
qx.Bootstrap.define(q,{statics:{LOADSTART:qx.$$start||new Date(),DEBUG:(function(){var be=true;

if(qx.$$environment&&qx.$$environment["qx.debug"]===false){be=false;
}
if(window.qxvariants&&window.qxvariants["qx.debug"]=="off"){be=false;
}return be;
})(),createNamespace:qx.Bootstrap.createNamespace,define:qx.Bootstrap.define,setDisplayName:qx.Bootstrap.setDisplayName,setDisplayNames:qx.Bootstrap.setDisplayNames,genericToString:qx.Bootstrap.genericToString,extendClass:function(bf,bg,bh,name,bi){var bl=bh.prototype;
var bk=new Function;
bk.prototype=bl;
var bj=new bk;
bf.prototype=bj;
bj.name=bj.classname=name;
bj.basename=bi;
bg.base=bf.superclass=bh;
bg.self=bf.constructor=bj.constructor=bf;
},getByName:function(name){return qx.Bootstrap.$$registry[name];
},$$registry:{},objectGetLength:({"count":function(bm){return bm.__count__;
},"default":function(bn){var length=0;

for(var bo in bn){length++;
}return length;
}})[(({}).__count__==0)?A:j],objectMergeWith:function(bp,bq,br){if(br===undefined){br=true;
}
for(var bs in bq){if(br||bp[bs]===undefined){bp[bs]=bq[bs];
}}return bp;
},__a:[r,G,E,m,y,I],getKeys:({"ES5":Object.keys,"BROKEN_IE":function(bt){var bu=[];
var bw=Object.prototype.hasOwnProperty;

for(var bx in bt){if(bw.call(bt,bx)){bu.push(bx);
}}var bv=qx.Bootstrap.__a;

for(var i=0,a=bv,l=a.length;i<l;i++){if(bw.call(bt,a[i])){bu.push(a[i]);
}}return bu;
},"default":function(by){var bz=[];
var bA=Object.prototype.hasOwnProperty;

for(var bB in by){if(bA.call(by,bB)){bz.push(bB);
}}return bz;
}})[typeof (Object.keys)==
L?B:
(function(){for(var bC in {toString:1}){return bC;
}})()!==m?u:j],getKeysAsString:function(bD){var bE=qx.Bootstrap.getKeys(bD);

if(bE.length==0){return p;
}return g+bE.join(C)+g;
},__b:{"[object String]":d,"[object Array]":f,"[object Object]":h,"[object RegExp]":D,"[object Number]":x,"[object Boolean]":K,"[object Date]":s,"[object Function]":c,"[object Error]":J},bind:function(bF,self,bG){var bH=Array.prototype.slice.call(arguments,2,arguments.length);
return function(){var bI=Array.prototype.slice.call(arguments,0,arguments.length);
return bF.apply(self,bH.concat(bI));
};
},firstUp:function(bJ){return bJ.charAt(0).toUpperCase()+bJ.substr(1);
},firstLow:function(bK){return bK.charAt(0).toLowerCase()+bK.substr(1);
},getClass:function(bL){var bM=Object.prototype.toString.call(bL);
return (qx.Bootstrap.__b[bM]||bM.slice(8,-1));
},isString:function(bN){return (bN!==null&&(typeof bN===F||qx.Bootstrap.getClass(bN)==d||bN instanceof String||(!!bN&&!!bN.$$isString)));
},isArray:function(bO){return (bO!==null&&(bO instanceof Array||(bO&&qx.data&&qx.data.IListData&&qx.Bootstrap.hasInterface(bO.constructor,qx.data.IListData))||qx.Bootstrap.getClass(bO)==f||(!!bO&&!!bO.$$isArray)));
},isObject:function(bP){return (bP!==undefined&&bP!==null&&qx.Bootstrap.getClass(bP)==h);
},isFunction:function(bQ){return qx.Bootstrap.getClass(bQ)==c;
},classIsDefined:function(name){return qx.Bootstrap.getByName(name)!==undefined;
},getPropertyDefinition:function(bR,name){while(bR){if(bR.$$properties&&bR.$$properties[name]){return bR.$$properties[name];
}bR=bR.superclass;
}return null;
},hasProperty:function(bS,name){return !!qx.Bootstrap.getPropertyDefinition(bS,name);
},getEventType:function(bT,name){var bT=bT.constructor;

while(bT.superclass){if(bT.$$events&&bT.$$events[name]!==undefined){return bT.$$events[name];
}bT=bT.superclass;
}return null;
},supportsEvent:function(bU,name){return !!qx.Bootstrap.getEventType(bU,name);
},getByInterface:function(bV,bW){var bX,i,l;

while(bV){if(bV.$$implements){bX=bV.$$flatImplements;

for(i=0,l=bX.length;i<l;i++){if(bX[i]===bW){return bV;
}}}bV=bV.superclass;
}return null;
},hasInterface:function(bY,ca){return !!qx.Bootstrap.getByInterface(bY,ca);
},getMixins:function(cb){var cc=[];

while(cb){if(cb.$$includes){cc.push.apply(cc,cb.$$flatIncludes);
}cb=cb.superclass;
}return cc;
},$$logs:[],debug:function(cd,ce){qx.Bootstrap.$$logs.push([z,arguments]);
},info:function(cf,cg){qx.Bootstrap.$$logs.push([t,arguments]);
},warn:function(ch,ci){qx.Bootstrap.$$logs.push([H,arguments]);
},error:function(cj,ck){qx.Bootstrap.$$logs.push([v,arguments]);
},trace:function(cl){}}});
})();
(function(){var g="qx.Mixin",f=".prototype",e="constructor",d="[Mixin ",c="]",b="destruct",a="Mixin";
qx.Bootstrap.define(g,{statics:{define:function(name,h){if(h){if(h.include&&!(h.include instanceof Array)){h.include=[h.include];
}var k=h.statics?h.statics:{};
qx.Bootstrap.setDisplayNames(k,name);

for(var j in k){if(k[j] instanceof Function){k[j].$$mixin=k;
}}if(h.construct){k.$$constructor=h.construct;
qx.Bootstrap.setDisplayName(h.construct,name,e);
}
if(h.include){k.$$includes=h.include;
}
if(h.properties){k.$$properties=h.properties;
}
if(h.members){k.$$members=h.members;
qx.Bootstrap.setDisplayNames(h.members,name+f);
}
for(var j in k.$$members){if(k.$$members[j] instanceof Function){k.$$members[j].$$mixin=k;
}}
if(h.events){k.$$events=h.events;
}
if(h.destruct){k.$$destructor=h.destruct;
qx.Bootstrap.setDisplayName(h.destruct,name,b);
}}else{var k={};
}k.$$type=a;
k.name=name;
k.toString=this.genericToString;
k.basename=qx.Bootstrap.createNamespace(name,k);
this.$$registry[name]=k;
return k;
},checkCompatibility:function(m){var p=this.flatten(m);
var q=p.length;

if(q<2){return true;
}var t={};
var s={};
var r={};
var o;

for(var i=0;i<q;i++){o=p[i];

for(var n in o.events){if(r[n]){throw new Error('Conflict between mixin "'+o.name+'" and "'+r[n]+'" in member "'+n+'"!');
}r[n]=o.name;
}
for(var n in o.properties){if(t[n]){throw new Error('Conflict between mixin "'+o.name+'" and "'+t[n]+'" in property "'+n+'"!');
}t[n]=o.name;
}
for(var n in o.members){if(s[n]){throw new Error('Conflict between mixin "'+o.name+'" and "'+s[n]+'" in member "'+n+'"!');
}s[n]=o.name;
}}return true;
},isCompatible:function(u,v){var w=qx.Bootstrap.getMixins(v);
w.push(u);
return qx.Mixin.checkCompatibility(w);
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(x){if(!x){return [];
}var y=x.concat();

for(var i=0,l=x.length;i<l;i++){if(x[i].$$includes){y.push.apply(y,this.flatten(x[i].$$includes));
}}return y;
},genericToString:function(){return d+this.name+c;
},$$registry:{},__c:null,__d:function(){}}});
})();
(function(){var j="",i="10.1",h="10.3",g="10.7",f="10.5",e="95",d="10.2",c="98",b="2000",a="10.6",T="10.0",S="10.4",R="2003",Q=")",P="iPhone",O="android",N="unix",M="ce",L="7",K="SymbianOS",q="MacPPC",r="iPod",o="\.",p="Win64",m="linux",n="me",k="Macintosh",l="Android",s="Windows",t="ios",A="vista",y="(",E="win",C="Linux",G="BSD",F="iPad",v="X11",J="xp",I="symbian",H="qx.bom.client.OperatingSystem",u="g",w="Win32",x="osx",z="|",B="nt4",D="MacIntel";
qx.Bootstrap.define(H,{statics:{getName:function(){var U=navigator&&navigator.platform;

if(!U){return j;
}
if(U.indexOf(s)!=-1||U.indexOf(w)!=-1||U.indexOf(p)!=-1){return E;
}else if(U.indexOf(k)!=-1||U.indexOf(q)!=-1||U.indexOf(D)!=-1){return x;
}else if(U.indexOf(r)!=-1||U.indexOf(P)!=-1||U.indexOf(F)!=-1){return t;
}else if(U.indexOf(C)!=-1){return m;
}else if(U.indexOf(v)!=-1||U.indexOf(G)!=-1){return N;
}else if(U.indexOf(l)!=-1){return O;
}else if(U.indexOf(K)!=-1){return I;
}return j;
},__e:{"Windows NT 6.1":L,"Windows NT 6.0":A,"Windows NT 5.2":R,"Windows NT 5.1":J,"Windows NT 5.0":b,"Windows 2000":b,"Windows NT 4.0":B,"Win 9x 4.90":n,"Windows CE":M,"Windows 98":c,"Win98":c,"Windows 95":e,"Win95":e,"Mac OS X 10_7":g,"Mac OS X 10.7":g,"Mac OS X 10_6":a,"Mac OS X 10.6":a,"Mac OS X 10_5":f,"Mac OS X 10.5":f,"Mac OS X 10_4":S,"Mac OS X 10.4":S,"Mac OS X 10_3":h,"Mac OS X 10.3":h,"Mac OS X 10_2":d,"Mac OS X 10.2":d,"Mac OS X 10_1":i,"Mac OS X 10.1":i,"Mac OS X 10_0":T,"Mac OS X 10.0":T},getVersion:function(){var X=[];

for(var W in qx.bom.client.OperatingSystem.__e){X.push(W);
}var Y=new RegExp(y+X.join(z).replace(/\./g,o)+Q,u);
var V=Y.exec(navigator.userAgent);

if(V&&V[1]){return qx.bom.client.OperatingSystem.__e[V[1]];
}return j;
}}});
})();
(function(){var n="-",m="",l="qx.bom.client.Locale",k="LOCALE",j="\n",h="VARIANT",g="Please check the API documentation of qx.core.Environment.",f="android",e="\nTrace:",d="' of '",a="'is deprecated: ",b="The constant '";
qx.Bootstrap.define(l,{statics:{LOCALE:"",VARIANT:"",getLocale:function(){var o=qx.bom.client.Locale.__f();
var p=o.indexOf(n);

if(p!=-1){o=o.substr(0,p);
}return o;
},getVariant:function(){var q=qx.bom.client.Locale.__f();
var s=m;
var r=q.indexOf(n);

if(r!=-1){s=q.substr(r+1);
}return s;
},__f:function(){var t=(navigator.userLanguage||navigator.language||m);
if(qx.bom.client.OperatingSystem.getName()==f){var u=/(\w{2})-(\w{2})/i.exec(navigator.userAgent);

if(u){t=u[0];
}}return t.toLowerCase();
}},defer:function(v){v.LOCALE=v.getLocale();
v.VARIANT=v.getVariant();
if(qx.Bootstrap.DEBUG){var w=[k,h];

for(var i=0;i<w.length;i++){if(v.__defineGetter__){var x=v[w[i]];
v.__defineGetter__(w[i],qx.Bootstrap.bind(function(y,c){var z=b+y+d+v.classname+a+g;

if(qx.dev&&qx.dev.StackTrace){z+=e+qx.dev.StackTrace.getStackTrace().join(j);
}qx.Bootstrap.warn(z);
return c;
},v,w[i],x));
}}}}});
})();
(function(){var l="",k="audio",j="video",i='video/ogg; codecs="theora, vorbis"',h="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",g="http://www.w3.org/TR/SVG11/feature#BasicStructure",f='audio',d='video/mp4; codecs="avc1.42E01E, mp4a.40.2"',c="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",b="audio/mpeg",z="org.w3c.dom.svg",y="DOMTokenList",x="1.1",w="audio/x-wav",u="audio/ogg",t="audio/x-aiff",s="qx.bom.client.Html",r='video',q="mshtml",p="label",n='video/webm; codecs="vp8, vorbis"',o="1.0",m="audio/basic";
qx.Bootstrap.define(s,{statics:{getWebWorker:function(){return window.Worker!=null;
},getGeoLocation:function(){return navigator.geolocation!=null;
},getAudio:function(){return !!document.createElement(f).canPlayType;
},getAudioOgg:function(){if(!qx.bom.client.Html.getAudio()){return l;
}var a=document.createElement(k);
return a.canPlayType(u);
},getAudioMp3:function(){if(!qx.bom.client.Html.getAudio()){return l;
}var a=document.createElement(k);
return a.canPlayType(b);
},getAudioWav:function(){if(!qx.bom.client.Html.getAudio()){return l;
}var a=document.createElement(k);
return a.canPlayType(w);
},getAudioAu:function(){if(!qx.bom.client.Html.getAudio()){return l;
}var a=document.createElement(k);
return a.canPlayType(m);
},getAudioAif:function(){if(!qx.bom.client.Html.getAudio()){return l;
}var a=document.createElement(k);
return a.canPlayType(t);
},getVideo:function(){return !!document.createElement(r).canPlayType;
},getVideoOgg:function(){if(!qx.bom.client.Html.getVideo()){return l;
}var v=document.createElement(j);
return v.canPlayType(i);
},getVideoH264:function(){if(!qx.bom.client.Html.getVideo()){return l;
}var v=document.createElement(j);
return v.canPlayType(d);
},getVideoWebm:function(){if(!qx.bom.client.Html.getVideo()){return l;
}var v=document.createElement(j);
return v.canPlayType(n);
},getLocalStorage:function(){try{return window.localStorage!=null;
}catch(A){return false;
}},getSessionStorage:function(){try{return window.sessionStorage!=null;
}catch(B){return false;
}},getClassList:function(){return !!(document.documentElement.classList&&qx.Bootstrap.getClass(document.documentElement.classList)===y);
},getXPath:function(){return !!document.evaluate;
},getXul:function(){try{document.createElementNS(h,p);
return true;
}catch(e){return false;
}},getSvg:function(){return document.implementation&&document.implementation.hasFeature&&(document.implementation.hasFeature(z,o)||document.implementation.hasFeature(g,x));
},getVml:function(){return qx.bom.client.Engine.getName()==q;
},getCanvas:function(){return !!window.CanvasRenderingContext2D;
},getDataUrl:function(C){var D=new Image();
D.onload=D.onerror=function(){window.setTimeout(function(){C.call(null,(D.width==1&&D.height==1));
},0);
};
D.src=c;
}}});
})();
(function(){var k="xhr",j="Microsoft.XMLHTTP",i="",h="file:",g="https:",f="webkit",e="gecko",d="activex",c="opera",b=".",a="qx.bom.client.Transport";
qx.Bootstrap.define(a,{statics:{getMaxConcurrentRequestCount:function(){var l;
var o=qx.bom.client.Engine.getVersion().split(b);
var m=0;
var p=0;
var n=0;
if(o[0]){m=o[0];
}if(o[1]){p=o[1];
}if(o[2]){n=o[2];
}if(window.maxConnectionsPerServer){l=window.maxConnectionsPerServer;
}else if(qx.bom.client.Engine.getName()==c){l=8;
}else if(qx.bom.client.Engine.getName()==f){l=4;
}else if(qx.bom.client.Engine.getName()==e&&((m>1)||((m==1)&&(p>9))||((m==1)&&(p==9)&&(n>=1)))){l=6;
}else{l=2;
}return l;
},getSsl:function(){return window.location.protocol===g;
},getXmlHttpRequest:function(){var q=window.ActiveXObject?
(function(){if(window.location.protocol!==h){try{new window.XMLHttpRequest();
return k;
}catch(r){}}
try{new window.ActiveXObject(j);
return d;
}catch(s){}})():
(function(){try{new window.XMLHttpRequest();
return k;
}catch(t){}})();
return q||i;
}}});
})();
(function(){var p="",o="silverlight",n="wmv",m="mshtml",l="quicktime",k="divx",j="Windows Media",h="qx.bom.client.Plugin",g="WMPlayer.OCX.7",f="Silverlight",c="QuickTimeCheckObject.QuickTimeCheck.1",e="QuickTime",d="npdivx.DivXBrowserPlugin.1",b="DivX Web Player",a="AgControl.AgControl";
qx.Bootstrap.define(h,{statics:{getGears:function(){return !!(window.google&&window.google.gears);
},__g:{quicktime:{plugin:e,control:c},wmv:{plugin:j,control:g},divx:{plugin:b,control:d},silverlight:{plugin:f,control:a}},getQuicktimeVersion:function(){var q=qx.bom.client.Plugin.__g[l];
return qx.bom.client.Plugin.__h(q.control,q.plugin);
},getWindowsMediaVersion:function(){var r=qx.bom.client.Plugin.__g[n];
return qx.bom.client.Plugin.__h(r.control,r.plugin);
},getDivXVersion:function(){var s=qx.bom.client.Plugin.__g[k];
return qx.bom.client.Plugin.__h(s.control,s.plugin);
},getSilverlightVersion:function(){var t=qx.bom.client.Plugin.__g[o];
return qx.bom.client.Plugin.__h(t.control,t.plugin);
},getQuicktime:function(){var u=qx.bom.client.Plugin.__g[l];
return qx.bom.client.Plugin.__i(u.control,u.plugin);
},getWindowsMedia:function(){var v=qx.bom.client.Plugin.__g[n];
return qx.bom.client.Plugin.__i(v.control,v.plugin);
},getDivX:function(){var w=qx.bom.client.Plugin.__g[k];
return qx.bom.client.Plugin.__i(w.control,w.plugin);
},getSilverlight:function(){var x=qx.bom.client.Plugin.__g[o];
return qx.bom.client.Plugin.__i(x.control,x.plugin);
},__h:function(y,z){var A=qx.bom.client.Plugin.__i(y,z);
if(!A){return p;
}if(qx.bom.client.Engine.getName()==m){var B=new ActiveXObject(y);

try{var E=B.versionInfo;

if(E!=undefined){return E;
}E=B.version;

if(E!=undefined){return E;
}E=B.settings.version;

if(E!=undefined){return E;
}}catch(G){return p;
}return p;
}else{var F=navigator.plugins;
var D=/([0-9]\.[0-9])/g;

for(var i=0;i<F.length;i++){var C=F[i];

if(C.name.indexOf(z)!==-1){if(D.test(C.name)||D.test(C.description)){return RegExp.$1;
}else{return p;
}return p;
}}}},__i:function(H,I){if(qx.bom.client.Engine.getName()==m){var J=window.ActiveXObject;

if(!J){return false;
}
try{new ActiveXObject(H);
}catch(L){return false;
}return true;
}else{var K=navigator.plugins;

if(!K){return false;
}var name;

for(var i=0;i<K.length;i++){name=K[i].name;

if(name.indexOf(I)!==-1){return true;
}}return false;
}}}});
})();
(function(){var l="",k="function",j="gecko",h=".",g="[object Opera]",f="[^\\.0-9]",e="4.0",d="\nTrace:",b="1.9.0.0",a="WEBKIT",I="Please check the API documentation of qx.core.Environment.",H="9.0",G="UNKNOWN_VERSION",F="GECKO",E="8.0",D="FULLVERSION",C="Gecko",B="OPERA",A="AppleWebKit/",z="'is deprecated: ",s="NAME",t="UNKNOWN_ENGINE",q="MSHTML",r="VERSION",o="DOCUMENT_MODE",p="' of '",m="opera",n="mshtml",u="\n",v="The constant '",x="webkit",w="5.0",y="qx.bom.client.Engine";
qx.Bootstrap.define(y,{statics:{NAME:"",FULLVERSION:"0.0.0",VERSION:0.0,OPERA:false,WEBKIT:false,GECKO:false,MSHTML:false,UNKNOWN_ENGINE:false,UNKNOWN_VERSION:false,DOCUMENT_MODE:null,getVersion:function(){var M=window.navigator.userAgent;
var K=l;

if(qx.bom.client.Engine.__j()){if(/Opera[\s\/]([0-9]+)\.([0-9])([0-9]*)/.test(M)){K=RegExp.$1+h+RegExp.$2;

if(RegExp.$3!=l){K+=h+RegExp.$3;
}}}else if(qx.bom.client.Engine.__k()){if(/AppleWebKit\/([^ ]+)/.test(M)){K=RegExp.$1;
var L=RegExp(f).exec(K);

if(L){K=K.slice(0,L.index);
}}}else if(qx.bom.client.Engine.__l()){if(/rv\:([^\);]+)(\)|;)/.test(M)){K=RegExp.$1;
}}else if(qx.bom.client.Engine.__m()){if(/MSIE\s+([^\);]+)(\)|;)/.test(M)){K=RegExp.$1;
if(K<8&&/Trident\/([^\);]+)(\)|;)/.test(M)){if(RegExp.$1==e){K=E;
}else if(RegExp.$1==w){K=H;
}}}}else{var J=window.qxFail;

if(J&&typeof J===k){K=J().FULLVERSION;
}else{K=b;
qx.Bootstrap.warn("Unsupported client: "+M+"! Assumed gecko version 1.9.0.0 (Firefox 3.0).");
}}return K;
},getName:function(){var name;

if(qx.bom.client.Engine.__j()){name=m;
}else if(qx.bom.client.Engine.__k()){name=x;
}else if(qx.bom.client.Engine.__l()){name=j;
}else if(qx.bom.client.Engine.__m()){name=n;
}else{var N=window.qxFail;

if(N&&typeof N===k){name=N().NAME;
}else{name=j;
qx.Bootstrap.warn("Unsupported client: "+window.navigator.userAgent+"! Assumed gecko version 1.9.0.0 (Firefox 3.0).");
}}return name;
},__j:function(){return window.opera&&Object.prototype.toString.call(window.opera)==g;
},__k:function(){return window.navigator.userAgent.indexOf(A)!=-1;
},__l:function(){return window.controllers&&window.navigator.product===C;
},__m:function(){return window.navigator.cpuClass&&/MSIE\s+([^\);]+)(\)|;)/.test(window.navigator.userAgent);
}},defer:function(O){O.NAME=O.getName();
O.FULLVERSION=O.getVersion();

if(O.FULLVERSION==l){O.UNKNOWN_VERSION=true;
}
if(O.__j()){O.OPERA=true;

if(O.FULLVERSION==l){O.FULLVERSION="9.6.0";
}}else if(O.__k()){O.WEBKIT=true;

if(O.FULLVERSION==l){O.FULLVERSION="525.26";
}}else if(O.__l()){O.GECKO=true;

if(O.FULLVERSION==l){O.FULLVERSION="1.9.0.0";
}}else if(O.__m()){O.MSHTML=true;

if(document.documentMode){O.DOCUMENT_MODE=document.documentMode;
}}else{var P=window.qxFail;

if(P&&typeof P===k){if(P().NAME){O[P().NAME.toUpperCase()]=true;
}}else{O.GECKO=true;
O.UNKNOWN_ENGINE=true;
O.UNKNOWN_VERSION=true;
}}O.VERSION=parseFloat(O.FULLVERSION);
if(qx.Bootstrap.DEBUG){var Q=[s,D,r,B,a,F,q,t,G,o];

for(var i=0;i<Q.length;i++){if(O.__defineGetter__){var R=O[Q[i]];
O.__defineGetter__(Q[i],qx.Bootstrap.bind(function(S,c){var T=v+S+p+O.classname+z+I;

if(qx.dev&&qx.dev.StackTrace){T+=d+qx.dev.StackTrace.getStackTrace().join(u);
}qx.Bootstrap.warn(T);
return c;
},O,Q[i],R));
}}}}});
})();
(function(){var l="",k="mshtml",j="msie",h=")(/| )([0-9]+\.[0-9])",g="(",f="ce",e="CSS1Compat",d="android",b="operamini",a="\nTrace:",M="'is deprecated: ",L="Please check the API documentation of qx.core.Environment.",K="mobile chrome",J="iemobile",I="FULLVERSION",H="opera mobi",G="Mobile Safari",F="UNKNOWN",E="operamobile",D="ie",s="mobile safari",t="IEMobile|Maxthon|MSIE",q="NAME",r="qx.bom.client.Browser",o="opera mini",p="VERSION",m="' of '",n="opera",u="TITLE",v="\n",y="Opera Mini|Opera Mobi|Opera",x="AdobeAIR|Titanium|Fluid|Chrome|Android|Epiphany|Konqueror|iCab|OmniWeb|Maxthon|Pre|Mobile Safari|Safari",A="The constant '",z="webkit",C="5.0",B="prism|Fennec|Camino|Kmeleon|Galeon|Netscape|SeaMonkey|Firefox",w="Mobile/";
qx.Bootstrap.define(r,{statics:{UNKNOWN:true,NAME:"unknown",TITLE:"unknown 0.0",VERSION:0.0,FULLVERSION:"0.0.0",getName:function(){var Q=navigator.userAgent;
var P=new RegExp(g+qx.bom.client.Browser.__n+h);
var O=Q.match(P);

if(!O){return l;
}var name=O[1].toLowerCase();
var N=qx.bom.client.Engine.getName();

if(N===z){if(name===d){name=K;
}else if(Q.indexOf(G)!==-1||Q.indexOf(w)!==-1){name=s;
}}else if(N===k){if(name===j){name=D;
if(qx.bom.client.OperatingSystem.getVersion()===f){name=J;
}}}else if(N===n){if(name===H){name=E;
}else if(name===o){name=b;
}}return name;
},getVersion:function(){var U=navigator.userAgent;
var T=new RegExp(g+qx.bom.client.Browser.__n+h);
var S=U.match(T);

if(!S){return l;
}var name=S[1].toLowerCase();
var R=S[3];
if(U.match(/Version(\/| )([0-9]+\.[0-9])/)){R=RegExp.$2;
}
if(qx.bom.client.Engine.getName()==k){R=qx.bom.client.Engine.getVersion();

if(name===j&&qx.bom.client.OperatingSystem.getVersion()==f){R=C;
}}return R;
},getDocumentMode:function(){if(document.documentMode){return document.documentMode;
}return 0;
},getQuirksMode:function(){if(qx.bom.client.Engine.getName()==k&&parseFloat(qx.bom.client.Engine.getVersion())>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;
}else{return document.compatMode!==e;
}},__n:{"webkit":x,"gecko":B,"mshtml":t,"opera":y}[qx.bom.client.Engine.getName()]},defer:function(V){V.NAME=V.getName();
V.FULLVERSION=V.getVersion();
V.VERSION=parseFloat(V.FULLVERSION);
V.TITLE=V.NAME+" "+V.VERSION;

if(V.NAME!==l){V.UNKNOWN=false;
}if(qx.Bootstrap.DEBUG){var W=[I,p,q,u,F];

for(var i=0;i<W.length;i++){if(V.__defineGetter__){var X=V[W[i]];
V.__defineGetter__(W[i],qx.Bootstrap.bind(function(Y,c){var ba=A+Y+m+V.classname+M+L;

if(qx.dev&&qx.dev.StackTrace){ba+=a+qx.dev.StackTrace.getStackTrace().join(v);
}qx.Bootstrap.warn(ba);
return c;
},V,W[i],X));
}}}}});
})();
(function(){var k="background",j="linear-gradient(0deg, white 0%, red 100%)",h="placeholder",g="content",f="div",e="OTextOverflow",d="MozBorderRadius",c="qx.bom.client.Css",b='m11',a="input",x="-moz-linear-gradient(0deg, white 0%, red 100%)",w="gradient",v="MozBoxShadow",u="-o-linear-gradient(0deg, white 0%, red 100%)",t="borderRadius",s='WebKitCSSMatrix',r="WebkitBorderRadius",q="-webkit-gradient(linear,0% 0%,100% 100%,from(white), to(red))",p="mshtml",o="WebkitBoxShadow",m="textOverflow",n="boxShadow",l="border";
qx.Bootstrap.define(c,{statics:{getBoxModel:function(){var content=qx.bom.client.Engine.getName()!==p||!qx.bom.client.Browser.getQuirksMode();
return content?g:l;
},getTextOverflow:function(){return m in document.documentElement.style||e in document.documentElement.style;
},getPlaceholder:function(){var i=document.createElement(a);
return h in i;
},getBorderRadius:function(){return t in document.documentElement.style||d in document.documentElement.style||r in document.documentElement.style;
},getBoxShadow:function(){return n in document.documentElement.style||v in document.documentElement.style||o in document.documentElement.style;
},getTranslate3d:function(){return s in window&&b in new WebKitCSSMatrix();
},getGradients:function(){var y;

try{y=document.createElement(f);
}catch(A){y=document.createElement();
}var z=[q,x,u,j];

for(var i=0;i<z.length;i++){try{y.style[k]=z[i];

if(y.style[k].indexOf(w)!=-1){return true;
}}catch(B){}}return false;
}}});
})();
(function(){var c="notification",b="PhoneGap",a="qx.bom.client.PhoneGap";
qx.Bootstrap.define(a,{statics:{getPhoneGap:function(){return b in window;
},getNotification:function(){return c in navigator;
}}});
})();
(function(){var l=".",k="$1",j="",h="object",g="Shockwave Flash",f="undefined",e="REVISION",d="qx.bom.client.Flash",b="\nTrace:",a="ShockwaveFlash.ShockwaveFlash.7",H="STRICT_SECURITY_MODEL",G="osx",F="FULLVERSION",E="10.0.12",D="'is deprecated: ",C="win",B="ShockwaveFlash.ShockwaveFlash.6",A="VERSION",z="$version",y="' of '",s="EXPRESSINSTALL",t="6.0.65",q="mshtml",r="AVAILABLE",o="boolean",p="\n",m="always",n="Please check the API documentation of qx.core.Environment.",u="9.0.151",v="ShockwaveFlash.ShockwaveFlash",x="The constant '",w=",";
qx.Bootstrap.define(d,{statics:{AVAILABLE:false,FULLVERSION:"0.0.0",REVISION:"0",VERSION:0.0,EXPRESSINSTALL:false,STRICT_SECURITY_MODEL:false,isAvailable:function(){return parseFloat(qx.bom.client.Flash.getVersion())>0;
},getVersion:function(){if(qx.bom.client.Engine.getName()==q){if(!window.ActiveXObject){return j;
}var K=[0,0,0];
var J=false;

try{var L=new ActiveXObject(a);
}catch(N){try{var L=new ActiveXObject(B);
K=[6,0,21];
L.AllowScriptAccess=m;
}catch(O){if(K[0]==6){J=true;
}}
if(!J){try{L=new ActiveXObject(v);
}catch(P){}}}
if(!J&&typeof L==h){var I=L.GetVariable(z);

if(typeof I!=f){I=I.split(" ")[1].split(w);
K[0]=parseInt(I[0],10);
K[1]=parseInt(I[1],10);
K[2]=parseInt(I[2],10);
}}return K.join(l);
}else{if(!navigator.plugins||typeof navigator.plugins[g]!==h){return j;
}var K=[0,0,0];
var M=navigator.plugins[g].description;

if(typeof M!=f){M=M.replace(/^.*\s+(\S+\s+\S+$)/,k);
K[0]=parseInt(M.replace(/^(.*)\..*$/,k),10);
K[1]=parseInt(M.replace(/^.*\.(.*)\s.*$/,k),10);
K[2]=/r/.test(M)?parseInt(M.replace(/^.*r(.*)$/,k),10):0;
}return K.join(l);
}},getExpressInstall:function(){var R=qx.bom.client.Flash.getVersion();

if(R==j){return false;
}var Q=qx.bom.client.OperatingSystem.getName();
return (Q==C||Q==G)&&qx.bom.client.Flash.__o(t,R);
},getStrictSecurityModel:function(){var S=qx.bom.client.Flash.getVersion();

if(S==j){return false;
}var T=S.split(l);

if(T[0]<10){return qx.bom.client.Flash.__o(u,S);
}else{return qx.bom.client.Flash.__o(E,S);
}},_cachedSupportsVersion:{},supportsVersion:function(U){if(typeof this._cachedSupportsVersion[U]===o){return this._cachedSupportsVersion[U];
}else{var X=U.split(l);
var W=this.FULLVERSION.split(l);

for(var i=0;i<X.length;i++){var V=parseInt(W[i],10)-parseInt(X[i],10);

if(V>0){return (this._cachedSupportsVersion[U]=true);
}else if(V<0){return (this._cachedSupportsVersion[U]=false);
}}return (this._cachedSupportsVersion[U]=true);
}},__o:function(Y,ba){var bd=Y.split(l);
var bc=ba||qx.bom.client.Flash.getVersion();
bc=bc.split(l);

for(var i=0;i<bd.length;i++){var bb=parseInt(bc[i],10)-parseInt(bd[i],10);

if(bb>0){return true;
}else if(bb<0){return false;
}}return true;
}},defer:function(be){be.FULLVERSION=be.getVersion();
be.VERSION=parseFloat(be.FULLVERSION);
be.AVAILABLE=be.isAvailable();
var bh=be.FULLVERSION.split(l);
be.REVISION=bh[bh.length-1];
be.STRICT_SECURITY_MODEL=be.getStrictSecurityModel();
be.EXPRESSINSTALL=be.getExpressInstall();
if(qx.Bootstrap.DEBUG){var bf=[F,A,r,e,H,s];

for(var i=0;i<bf.length;i++){if(be.__defineGetter__){var bg=be[bf[i]];
be.__defineGetter__(bf[i],qx.Bootstrap.bind(function(bi,c){var bj=x+bi+y+be.classname+D+n;

if(qx.dev&&qx.dev.StackTrace){bj+=b+qx.dev.StackTrace.getStackTrace().join(p);
}qx.Bootstrap.warn(bj);
return c;
},be,bf[i],bg));
}}}}});
})();
(function(){var a="qx.bom.client.EcmaScript";
qx.Bootstrap.define(a,{statics:{getObjectCount:function(){return (({}).__count__==0);
}}});
})();
(function(){var m="ipod",l="g",k="xbox",j="pc",i="\.",h="(",g=")",f="iPhone",e="|",d="qx.bom.client.Device",a="wii",c="ipad",b="ds";
qx.Bootstrap.define(d,{statics:{__p:{"iPod":m,"iPad":c,"iPhone":f,"PSP":"psp","PLAYSTATION 3":"ps3","Nintendo Wii":a,"Nintendo DS":b,"XBOX":"xbox","Xbox":k},getName:function(){var p=[];

for(var o in this.__p){p.push(o);
}var q=new RegExp(h+p.join(e).replace(/\./g,i)+g,l);
var n=q.exec(navigator.userAgent);

if(n&&n[1]){return qx.bom.client.Device.__p[n[1]];
}return j;
}}});
})();
(function(){var e="qx.bom.client.Event",d="ontouchstart",c="mshtml",b="opera",a="pointerEvents";
qx.Bootstrap.define(e,{statics:{getTouch:function(){return (d in window);
},getPointer:function(){if(a in document.documentElement.style){var f=qx.bom.client.Engine.getName();
return f!=b&&f!=c;
}return false;
}}});
})();
(function(){var o="on",n="off",m="os.name",l="html.storage.local",k="plugin.silverlight.version",j="os.version",h="html.xul",g="plugin.windowsmedia.version",f="html.video.ogg",e="default",bF="html.xpath",bE="plugin.flash.express",bD="plugin.windowsmedia",bC="html.webworker",bB="phonegap",bA="browser.quirksmode",bz="browser.name",by="plugin.silverlight",bx="event.pointer",bw="qx.aspects",v="plugin.gears",w="io.ssl",t="css.translate3d",u="html.classlist",r="locale.variant",s="css.textoverflow",p="qx.debug",q="html.video",D="plugin.flash",E="css.boxshadow",W="event.touch",S="html.storage.session",bf="plugin.divx",ba="css.boxmodel",br="plugin.flash.version",bl="qx.allowUrlSettings",L="css.gradients",bv="browser.documentmode",bt="html.vml",bs="html.canvas",J="html.audio",O="html.audio.mp3",Q="css.borderradius",U="ecmascript.objectcount",X="locale",bb="html.audio.au",bh="html.geolocation",bn="qx.mobile.emulatetouch",x="qx.dynlocale",y="plugin.quicktime",N="engine.version",be="io.maxrequests",bd="engine.name",bc="html.audio.aif",bj="html.audio.ogg",bi="qx.mobile.nativescroll",Y="plugin.divx.version",bg="html.video.h264",a="css.placeholder",bm="plugin.quicktime.version",z="|",A="browser.version",T="io.xhr",b="html.audio.wav",d="device.name",I="phonegap.notification",B="html.svg",C="html.dataurl",G="html.video.webm",V="plugin.flash.strictsecurity",bp="qx.core.Environment",bo="qx.debug.databinding",P="true",bq="qxenv",K="qx.propertyDebugLevel",bk="qx.dynamicmousewheel",F=":",H="false",c="&",R="qx.allowUrlVariants",M="qx.bom.htmlarea.HtmlArea.debug",bu="qx.globalErrorHandling";
qx.Bootstrap.define(bp,{statics:{_checks:{},_asyncChecks:{},__q:{},get:function(bG){if(this.__q[bG]!=undefined){return this.__q[bG];
}var bH=this._checks[bG];

if(bH){var bI=bH();
this.__q[bG]=bI;
return bI;
}if(qx.Bootstrap.DEBUG){qx.Bootstrap.warn(bG+" is not a valid key. Please see the API-doc of "+"qx.core.Environment for a list of predefined keys.");
qx.Bootstrap.trace(this);
}},getAsync:function(bJ,bK,self){var bM=this;

if(this.__q[bJ]!=undefined){window.setTimeout(function(){bK.call(self,bM.__q[bJ]);
},0);
return;
}var bL=this._asyncChecks[bJ];

if(bL){bL(function(bN){bM.__q[bJ]=bN;
bK.call(self,bN);
});
return;
}if(qx.Bootstrap.DEBUG){qx.Bootstrap.warn(bJ+" is not a valid key. Please see the API-doc of "+"qx.core.Environment for a list of predefined keys.");
qx.Bootstrap.trace(this);
}},select:function(bO,bP){return this.__r(this.get(bO),bP);
},selectAsync:function(bQ,bR,self){this.getAsync(bQ,function(bS){var bT=this.__r(bQ,bR);
bT.call(self,bS);
},this);
},__r:function(bU,bV){var bX=bV[bU];

if(bV.hasOwnProperty(bU)){return bX;
}for(var bW in bV){if(bW.indexOf(z)!=-1){var bY=bW.split(z);

for(var i=0;i<bY.length;i++){if(bY[i]==bU){return bV[bW];
}}}}if(bX===true&&bV[o]!=undefined){if(qx.Bootstrap.DEBUG){qx.Bootstrap.warn("The check '"+bU+"' is a boolean value. "+"Please change your select map from 'on' to 'true'.");
qx.Bootstrap.trace(this);
}return bV[o];
}if(bX===false&&bV[n]!=undefined){if(qx.Bootstrap.DEBUG){qx.Bootstrap.warn("The check '"+bU+"' is a boolean value. "+"Please change your select map from 'off' to 'false'.");
qx.Bootstrap.trace(this);
}return bV[n];
}
if(bV[e]!==undefined){return bV[e];
}
if(qx.Bootstrap.DEBUG){throw new Error('No match for variant "'+bU+'" ('+(typeof bU)+' type)'+' in variants ['+qx.Bootstrap.getKeysAsString(bV)+'] found, and no default ("default") given');
}},invalidateCacheKey:function(ca){delete this.__q[ca];
},add:function(cb,cc){if(this._checks[cb]==undefined){if(cc instanceof Function){this._checks[cb]=cc;
}else{this._checks[cb]=this.__u(cc);
}}},addAsync:function(cd,ce){if(this._checks[cd]==undefined){this._asyncChecks[cd]=ce;
}},_initDefaultQxValues:function(){this.add(bl,function(){return false;
});
this.add(R,function(){return false;
});
this.add(K,function(){return 0;
});
this.add(p,function(){return true;
});
this.add(bw,function(){return false;
});
this.add(x,function(){return true;
});
this.add(bn,function(){return false;
});
this.add(bi,function(){return false;
});
this.add(bk,function(){return true;
});
this.add(bo,function(){return false;
});
},__s:function(){if(window.qxsettings){for(var cg in window.qxsettings){var cf=window.qxsettings[cg];

if(cg==M||cg==bu){if(cf==o){cf=true;
}else if(cf==n){cf=false;
}}this._checks[cg]=this.__u(cf);
}}if(window.qxvariants){for(var cg in window.qxvariants){var cf=window.qxvariants[cg];

if(cg==bw||cg==p||cg==x||cg==bn||cg==bi){if(cf==o){cf=true;
}else if(cf==n){cf=false;
}}this._checks[cg]=this.__u(cf);
}}if(qx&&qx.$$environment){for(var cg in qx.$$environment){var cf=qx.$$environment[cg];
this._checks[cg]=this.__u(cf);
}}},__t:function(){if(window.document&&window.document.location){var ch=window.document.location.search.slice(1).split(c);

for(var i=0;i<ch.length;i++){var cj=ch[i].split(F);

if(cj.length!=3||cj[0]!=bq){continue;
}var ck=cj[1];
var ci=decodeURIComponent(cj[2]);
if(ci==P){ci=true;
}else if(ci==H){ci=false;
}else if(/^(\d|\.)+$/.test(ci)){ci=parseFloat(ci);
}this._checks[ck]=this.__u(ci);
}}},__u:function(cl){return qx.Bootstrap.bind(function(cm){return cm;
},null,cl);
},useCheck:function(cn){return true;
},_initChecksMap:function(){if(this.useCheck(N)){this._checks[N]=qx.bom.client.Engine.getVersion;
}
if(this.useCheck(bd)){this._checks[bd]=qx.bom.client.Engine.getName;
}if(this.useCheck(bz)){this._checks[bz]=qx.bom.client.Browser.getName;
}
if(this.useCheck(A)){this._checks[A]=qx.bom.client.Browser.getVersion;
}
if(this.useCheck(bv)){this._checks[bv]=qx.bom.client.Browser.getDocumentMode;
}
if(this.useCheck(bA)){this._checks[bA]=qx.bom.client.Browser.getQuirksMode;
}if(this.useCheck(d)){this._checks[d]=qx.bom.client.Device.getName;
}if(this.useCheck(X)){this._checks[X]=qx.bom.client.Locale.getLocale;
}
if(this.useCheck(r)){this._checks[r]=qx.bom.client.Locale.getVariant;
}if(this.useCheck(m)){this._checks[m]=qx.bom.client.OperatingSystem.getName;
}
if(this.useCheck(j)){this._checks[j]=qx.bom.client.OperatingSystem.getVersion;
}if(this.useCheck(v)){this._checks[v]=qx.bom.client.Plugin.getGears;
}
if(this.useCheck(y)){this._checks[y]=qx.bom.client.Plugin.getQuicktime;
}
if(this.useCheck(bm)){this._checks[bm]=qx.bom.client.Plugin.getQuicktimeVersion;
}
if(this.useCheck(bD)){this._checks[bD]=qx.bom.client.Plugin.getWindowsMedia;
}
if(this.useCheck(g)){this._checks[g]=qx.bom.client.Plugin.getWindowsMediaVersion;
}
if(this.useCheck(bf)){this._checks[bf]=qx.bom.client.Plugin.getDivX;
}
if(this.useCheck(Y)){this._checks[Y]=qx.bom.client.Plugin.getDivXVersion;
}
if(this.useCheck(by)){this._checks[by]=qx.bom.client.Plugin.getSilverlight;
}
if(this.useCheck(k)){this._checks[k]=qx.bom.client.Plugin.getSilverlightVersion;
}
if(this.useCheck(D)){this._checks[D]=qx.bom.client.Flash.isAvailable;
}
if(this.useCheck(br)){this._checks[br]=qx.bom.client.Flash.getVersion;
}
if(this.useCheck(bE)){this._checks[bE]=qx.bom.client.Flash.getExpressInstall;
}
if(this.useCheck(V)){this._checks[V]=qx.bom.client.Flash.getStrictSecurityModel;
}if(this.useCheck(be)){this._checks[be]=qx.bom.client.Transport.getMaxConcurrentRequestCount;
}
if(this.useCheck(w)){this._checks[w]=qx.bom.client.Transport.getSsl;
}
if(this.useCheck(T)){this._checks[T]=qx.bom.client.Transport.getXmlHttpRequest;
}if(this.useCheck(W)){this._checks[W]=qx.bom.client.Event.getTouch;
}
if(this.useCheck(bx)){this._checks[bx]=qx.bom.client.Event.getPointer;
}if(this.useCheck(U)){this._checks[U]=qx.bom.client.EcmaScript.getObjectCount;
}if(this.useCheck(bC)){this._checks[bC]=qx.bom.client.Html.getWebWorker;
}
if(this.useCheck(bh)){this._checks[bh]=qx.bom.client.Html.getGeoLocation;
}
if(this.useCheck(J)){this._checks[J]=qx.bom.client.Html.getAudio;
}
if(this.useCheck(bj)){this._checks[bj]=qx.bom.client.Html.getAudioOgg;
}
if(this.useCheck(O)){this._checks[O]=qx.bom.client.Html.getAudioMp3;
}
if(this.useCheck(b)){this._checks[b]=qx.bom.client.Html.getAudioWav;
}
if(this.useCheck(bb)){this._checks[bb]=qx.bom.client.Html.getAudioAu;
}
if(this.useCheck(bc)){this._checks[bc]=qx.bom.client.Html.getAudioAif;
}
if(this.useCheck(q)){this._checks[q]=qx.bom.client.Html.getVideo;
}
if(this.useCheck(f)){this._checks[f]=qx.bom.client.Html.getVideoOgg;
}
if(this.useCheck(bg)){this._checks[bg]=qx.bom.client.Html.getVideoH264;
}
if(this.useCheck(G)){this._checks[G]=qx.bom.client.Html.getVideoWebm;
}
if(this.useCheck(l)){this._checks[l]=qx.bom.client.Html.getLocalStorage;
}
if(this.useCheck(S)){this._checks[S]=qx.bom.client.Html.getSessionStorage;
}
if(this.useCheck(u)){this._checks[u]=qx.bom.client.Html.getClassList;
}
if(this.useCheck(bF)){this._checks[bF]=qx.bom.client.Html.getXPath;
}
if(this.useCheck(h)){this._checks[h]=qx.bom.client.Html.getXul;
}
if(this.useCheck(bs)){this._checks[bs]=qx.bom.client.Html.getCanvas;
}
if(this.useCheck(B)){this._checks[B]=qx.bom.client.Html.getSvg;
}
if(this.useCheck(bt)){this._checks[bt]=qx.bom.client.Html.getVml;
}
if(this.useCheck(C)){this._asyncChecks[C]=qx.bom.client.Html.getDataUrl;
}if(this.useCheck(s)){this._checks[s]=qx.bom.client.Css.getTextOverflow;
}
if(this.useCheck(a)){this._checks[a]=qx.bom.client.Css.getPlaceholder;
}
if(this.useCheck(Q)){this._checks[Q]=qx.bom.client.Css.getBorderRadius;
}
if(this.useCheck(E)){this._checks[E]=qx.bom.client.Css.getBoxShadow;
}
if(this.useCheck(L)){this._checks[L]=qx.bom.client.Css.getGradients;
}
if(this.useCheck(ba)){this._checks[ba]=qx.bom.client.Css.getBoxModel;
}
if(this.useCheck(t)){this._checks[t]=qx.bom.client.Css.getTranslate3d;
}if(this.useCheck(bB)){this._checks[bB]=qx.bom.client.PhoneGap.getPhoneGap;
}
if(this.useCheck(I)){this._checks[I]=qx.bom.client.PhoneGap.getNotification;
}}},defer:function(co){co._initDefaultQxValues();
co._initChecksMap();
co.__s();
if(co.get(bl)!=true){co.__t();
}}});
})();
(function(){var h="qx.allowUrlSettings",g="&",f="qx.core.Setting",e="qx.allowUrlVariants",d="qx.propertyDebugLevel",c="qxsetting",b=":",a=".";
qx.Bootstrap.define(f,{statics:{__v:{},define:function(j,k){this.defineDeprecated(j,k);
},defineDeprecated:function(l,m){if(m===undefined){throw new Error('Default value of setting "'+l+'" must be defined!');
}
if(!this.__v[l]){this.__v[l]={};
}else if(this.__v[l].defaultValue!==undefined){throw new Error('Setting "'+l+'" is already defined!');
}this.__v[l].defaultValue=m;
},get:function(n){var o=this.__v[n];

if(o===undefined){throw new Error('Setting "'+n+'" is not defined.');
}
if(o.value!==undefined){return o.value;
}return o.defaultValue;
},set:function(p,q){this.setDeprecated(p,q);
},setDeprecated:function(r,s){if((r.split(a)).length<2){throw new Error('Malformed settings key "'+r+'". Must be following the schema "namespace.key".');
}
if(!this.__v[r]){this.__v[r]={};
}this.__v[r].value=s;
},__w:function(){if(window.qxsettings){for(var t in window.qxsettings){this.setDeprecated(t,window.qxsettings[t]);
}window.qxsettings=undefined;

try{delete window.qxsettings;
}catch(u){}this.__x();
}},__x:function(){if(qx.core.Environment.get(h)!=true){return;
}var w=document.location.search.slice(1).split(g);

for(var i=0;i<w.length;i++){var v=w[i].split(b);

if(v.length!=3||v[0]!=c){continue;
}this.set(v[1],decodeURIComponent(v[2]));
}}},defer:function(x){x.defineDeprecated(h,false);
x.defineDeprecated(e,false);
x.defineDeprecated(d,0);
x.__w();
}});
})();
(function(){var h="function",g="Boolean",f="qx.Interface",e="]",d="toggle",c="Interface",b="is",a="[Interface ";
qx.Bootstrap.define(f,{statics:{define:function(name,j){if(j){if(j.extend&&!(j.extend instanceof Array)){j.extend=[j.extend];
}var k=j.statics?j.statics:{};
if(j.extend){k.$$extends=j.extend;
}
if(j.properties){k.$$properties=j.properties;
}
if(j.members){k.$$members=j.members;
}
if(j.events){k.$$events=j.events;
}}else{var k={};
}k.$$type=c;
k.name=name;
k.toString=this.genericToString;
k.basename=qx.Bootstrap.createNamespace(name,k);
qx.Interface.$$registry[name]=k;
return k;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(m){if(!m){return [];
}var n=m.concat();

for(var i=0,l=m.length;i<l;i++){if(m[i].$$extends){n.push.apply(n,this.flatten(m[i].$$extends));
}}return n;
},__y:function(o,p,q,r){var v=q.$$members;

if(v){for(var u in v){if(qx.Bootstrap.isFunction(v[u])){var t=this.__z(p,u);
var s=t||qx.Bootstrap.isFunction(o[u]);

if(!s){throw new Error('Implementation of method "'+u+'" is missing in class "'+p.classname+'" required by interface "'+q.name+'"');
}var w=r===true&&!t&&!qx.Bootstrap.hasInterface(p,q);

if(w){o[u]=this.__C(q,o[u],u,v[u]);
}}else{if(typeof o[u]===undefined){if(typeof o[u]!==h){throw new Error('Implementation of member "'+u+'" is missing in class "'+p.classname+'" required by interface "'+q.name+'"');
}}}}}},__z:function(x,y){var C=y.match(/^(is|toggle|get|set|reset)(.*)$/);

if(!C){return false;
}var z=qx.Bootstrap.firstLow(C[2]);
var A=qx.Bootstrap.getPropertyDefinition(x,z);

if(!A){return false;
}var B=C[0]==b||C[0]==d;

if(B){return qx.Bootstrap.getPropertyDefinition(x,z).check==g;
}return true;
},__A:function(D,E){if(E.$$properties){for(var F in E.$$properties){if(!qx.Bootstrap.getPropertyDefinition(D,F)){throw new Error('The property "'+F+'" is not supported by Class "'+D.classname+'"!');
}}}},__B:function(G,H){if(H.$$events){for(var I in H.$$events){if(!qx.Bootstrap.supportsEvent(G,I)){throw new Error('The event "'+I+'" is not supported by Class "'+G.classname+'"!');
}}}},assertObject:function(J,K){var M=J.constructor;
this.__y(J,M,K,false);
this.__A(M,K);
this.__B(M,K);
var L=K.$$extends;

if(L){for(var i=0,l=L.length;i<l;i++){this.assertObject(J,L[i]);
}}},assert:function(N,O,P){this.__y(N.prototype,N,O,P);
this.__A(N,O);
this.__B(N,O);
var Q=O.$$extends;

if(Q){for(var i=0,l=Q.length;i<l;i++){this.assert(N,Q[i],P);
}}},genericToString:function(){return a+this.name+e;
},$$registry:{},__C:function(){},__D:null,__E:function(){}}});
})();
(function(){var g="emulated",f="native",e='"',d="qx.lang.Core",c="\\\\",b="\\\"",a="[object Error]";
qx.Bootstrap.define(d,{statics:{errorToString:{"native":Error.prototype.toString,"emulated":function(){return this.message;
}}[(!Error.prototype.toString||Error.prototype.toString()==a)?g:f],arrayIndexOf:{"native":Array.prototype.indexOf,"emulated":function(h,j){if(j==null){j=0;
}else if(j<0){j=Math.max(0,this.length+j);
}
for(var i=j;i<this.length;i++){if(this[i]===h){return i;
}}return -1;
}}[Array.prototype.indexOf?f:g],arrayLastIndexOf:{"native":Array.prototype.lastIndexOf,"emulated":function(k,m){if(m==null){m=this.length-1;
}else if(m<0){m=Math.max(0,this.length+m);
}
for(var i=m;i>=0;i--){if(this[i]===k){return i;
}}return -1;
}}[Array.prototype.lastIndexOf?f:g],arrayForEach:{"native":Array.prototype.forEach,"emulated":function(n,o){var l=this.length;

for(var i=0;i<l;i++){var p=this[i];

if(p!==undefined){n.call(o||window,p,i,this);
}}}}[Array.prototype.forEach?f:g],arrayFilter:{"native":Array.prototype.filter,"emulated":function(q,r){var s=[];
var l=this.length;

for(var i=0;i<l;i++){var t=this[i];

if(t!==undefined){if(q.call(r||window,t,i,this)){s.push(this[i]);
}}}return s;
}}[Array.prototype.filter?f:g],arrayMap:{"native":Array.prototype.map,"emulated":function(u,v){var w=[];
var l=this.length;

for(var i=0;i<l;i++){var x=this[i];

if(x!==undefined){w[i]=u.call(v||window,x,i,this);
}}return w;
}}[Array.prototype.map?f:g],arraySome:{"native":Array.prototype.some,"emulated":function(y,z){var l=this.length;

for(var i=0;i<l;i++){var A=this[i];

if(A!==undefined){if(y.call(z||window,A,i,this)){return true;
}}}return false;
}}[Array.prototype.some?f:g],arrayEvery:{"native":Array.prototype.every,"emulated":function(B,C){var l=this.length;

for(var i=0;i<l;i++){var D=this[i];

if(D!==undefined){if(!B.call(C||window,D,i,this)){return false;
}}}return true;
}}[Array.prototype.every?f:g],stringQuote:{"native":String.prototype.quote,"emulated":function(){return e+this.replace(/\\/g,c).replace(/\"/g,b)+e;
}}[String.prototype.quote?f:g]}});
Error.prototype.toString=qx.lang.Core.errorToString;
Array.prototype.indexOf=qx.lang.Core.arrayIndexOf;
Array.prototype.lastIndexOf=qx.lang.Core.arrayLastIndexOf;
Array.prototype.forEach=qx.lang.Core.arrayForEach;
Array.prototype.filter=qx.lang.Core.arrayFilter;
Array.prototype.map=qx.lang.Core.arrayMap;
Array.prototype.some=qx.lang.Core.arraySome;
Array.prototype.every=qx.lang.Core.arrayEvery;
String.prototype.quote=qx.lang.Core.stringQuote;
})();
(function(){var m=';',k='return this.',j="boolean",h="string",g='!==undefined)',f='else if(this.',e='if(this.',d='else ',c=' of an instance of ',b=' is not (yet) ready!");',W="init",V="': ",U=" of class ",T='(computed, old, "',S='return value;',R='if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ',Q='return init;',P='var init=this.',O="')){",N="if(reg.hasListener(this, '",t="Error in property ",u='var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){',r='if(init==qx.core.Property.$$inherit)init=null;',s="rv:1.8.1",p="set",q='if(a[i].',n="var reg=qx.event.Registration;",o=" in method ",v='throw new Error("Property ',w='(backup);',D='var inherit=prop.$$inherit;',B='return null;',H='this.',F=")}",J="setRuntime",I=')a[i].',y='");',M="setThemed",L="inherit",K="MSIE 6.0",x=" with incoming value '",z="', qx.event.type.Data, [computed, old]",A="object",C='}',E="reg.fireEvent(this, '",G="qx.core.Property";
qx.Bootstrap.define(G,{statics:{__F:{"Boolean":'qx.core.Assert.assertBoolean(value, msg) || true',"String":'qx.core.Assert.assertString(value, msg) || true',"Number":'qx.core.Assert.assertNumber(value, msg) || true',"Integer":'qx.core.Assert.assertInteger(value, msg) || true',"PositiveNumber":'qx.core.Assert.assertPositiveNumber(value, msg) || true',"PositiveInteger":'qx.core.Assert.assertPositiveInteger(value, msg) || true',"Error":'qx.core.Assert.assertInstance(value, Error, msg) || true',"RegExp":'qx.core.Assert.assertInstance(value, RegExp, msg) || true',"Object":'qx.core.Assert.assertObject(value, msg) || true',"Array":'qx.core.Assert.assertArray(value, msg) || true',"Map":'qx.core.Assert.assertMap(value, msg) || true',"Function":'qx.core.Assert.assertFunction(value, msg) || true',"Date":'qx.core.Assert.assertInstance(value, Date, msg) || true',"Node":'value !== null && value.nodeType !== undefined',"Element":'value !== null && value.nodeType === 1 && value.attributes',"Document":'value !== null && value.nodeType === 9 && value.documentElement',"Window":'value !== null && value.document',"Event":'value !== null && value.type !== undefined',"Class":'value !== null && value.$$type === "Class"',"Mixin":'value !== null && value.$$type === "Mixin"',"Interface":'value !== null && value.$$type === "Interface"',"Theme":'value !== null && value.$$type === "Theme"',"Color":'qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)',"Decorator":'value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',"Font":'value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)'},__G:{"Node":true,"Element":true,"Document":true,"Window":true,"Event":true},$$inherit:L,$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},set:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{name:h,dereference:j,inheritable:j,nullable:j,themeable:j,refine:j,init:null,apply:h,event:h,check:null,transform:h,deferredInit:j,validate:null},$$allowedGroupKeys:{name:h,group:A,mode:h,themeable:j},$$inheritable:{},__H:function(X){var Y=this.__I(X);

if(!Y.length){var ba=function(){};
}else{ba=this.__J(Y);
}X.prototype.$$refreshInheritables=ba;
},__I:function(bb){var bd=[];

while(bb){var bc=bb.$$properties;

if(bc){for(var name in this.$$inheritable){if(bc[name]&&bc[name].inheritable){bd.push(name);
}}}bb=bb.superclass;
}return bd;
},__J:function(be){var bi=this.$$store.inherit;
var bh=this.$$store.init;
var bg=this.$$method.refresh;
var bf=["var parent = this.getLayoutParent();","if (!parent) return;"];

for(var i=0,l=be.length;i<l;i++){var name=be[i];
bf.push("var value = parent.",bi[name],";","if (value===undefined) value = parent.",bh[name],";","this.",bg[name],"(value);");
}return new Function(bf.join(""));
},attachRefreshInheritables:function(bj){bj.prototype.$$refreshInheritables=function(){qx.core.Property.__H(bj);
return this.$$refreshInheritables();
};
},attachMethods:function(bk,name,bl){bl.group?this.__K(bk,bl,name):this.__L(bk,bl,name);
},__K:function(bm,bn,name){var bu=qx.Bootstrap.firstUp(name);
var bt=bm.prototype;
var bv=bn.themeable===true;
var bw=[];
var bq=[];

if(bv){var bo=[];
var bs=[];
}var br="var a=arguments[0] instanceof Array?arguments[0]:arguments;";
bw.push(br);

if(bv){bo.push(br);
}
if(bn.mode=="shorthand"){var bp="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));";
bw.push(bp);

if(bv){bo.push(bp);
}}
for(var i=0,a=bn.group,l=a.length;i<l;i++){bw.push("this.",this.$$method.set[a[i]],"(a[",i,"]);");
bq.push("this.",this.$$method.reset[a[i]],"();");

if(bv){bo.push("this.",this.$$method.setThemed[a[i]],"(a[",i,"]);");
bs.push("this.",this.$$method.resetThemed[a[i]],"();");
}}this.$$method.set[name]="set"+bu;
bt[this.$$method.set[name]]=new Function(bw.join(""));
this.$$method.reset[name]="reset"+bu;
bt[this.$$method.reset[name]]=new Function(bq.join(""));

if(bv){this.$$method.setThemed[name]="setThemed"+bu;
bt[this.$$method.setThemed[name]]=new Function(bo.join(""));
this.$$method.resetThemed[name]="resetThemed"+bu;
bt[this.$$method.resetThemed[name]]=new Function(bs.join(""));
}},__L:function(bx,by,name){var bA=qx.Bootstrap.firstUp(name);
var bC=bx.prototype;
if(by.dereference===undefined&&typeof by.check==="string"){by.dereference=this.__M(by.check);
}var bB=this.$$method;
var bz=this.$$store;
bz.runtime[name]="$$runtime_"+name;
bz.user[name]="$$user_"+name;
bz.theme[name]="$$theme_"+name;
bz.init[name]="$$init_"+name;
bz.inherit[name]="$$inherit_"+name;
bz.useinit[name]="$$useinit_"+name;
bB.get[name]="get"+bA;
bC[bB.get[name]]=function(){return qx.core.Property.executeOptimizedGetter(this,bx,name,"get");
};
bB.set[name]="set"+bA;
bC[bB.set[name]]=function(bD){return qx.core.Property.executeOptimizedSetter(this,bx,name,"set",arguments);
};
bB.reset[name]="reset"+bA;
bC[bB.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,bx,name,"reset");
};

if(by.inheritable||by.apply||by.event||by.deferredInit){bB.init[name]="init"+bA;
bC[bB.init[name]]=function(bE){return qx.core.Property.executeOptimizedSetter(this,bx,name,"init",arguments);
};
}
if(by.inheritable){bB.refresh[name]="refresh"+bA;
bC[bB.refresh[name]]=function(bF){return qx.core.Property.executeOptimizedSetter(this,bx,name,"refresh",arguments);
};
}bB.setRuntime[name]="setRuntime"+bA;
bC[bB.setRuntime[name]]=function(bG){return qx.core.Property.executeOptimizedSetter(this,bx,name,"setRuntime",arguments);
};
bB.resetRuntime[name]="resetRuntime"+bA;
bC[bB.resetRuntime[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,bx,name,"resetRuntime");
};

if(by.themeable){bB.setThemed[name]="setThemed"+bA;
bC[bB.setThemed[name]]=function(bH){return qx.core.Property.executeOptimizedSetter(this,bx,name,"setThemed",arguments);
};
bB.resetThemed[name]="resetThemed"+bA;
bC[bB.resetThemed[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,bx,name,"resetThemed");
};
}
if(by.check==="Boolean"){bC["toggle"+bA]=new Function("return this."+bB.set[name]+"(!this."+bB.get[name]+"())");
bC["is"+bA]=new Function("return this."+bB.get[name]+"()");
}},__M:function(bI){return !!this.__G[bI];
},__N:function(bJ){return this.__G[bJ]||qx.Bootstrap.classIsDefined(bJ)||(qx.Interface&&qx.Interface.isDefined(bJ));
},__O:{0:'Could not change or apply init value after constructing phase!',1:'Requires exactly one argument!',2:'Undefined value is not allowed!',3:'Does not allow any arguments!',4:'Null value is not allowed!',5:'Is invalid!'},error:function(bK,bL,bM,bN,bO){var bP=bK.constructor.classname;
var bQ=t+bM+U+bP+o+this.$$method[bN][bM]+x+bO+V;
throw new Error(bQ+(this.__O[bL]||"Unknown reason: "+bL));
},__P:function(bR,bS,name,bT,bU,bV){var bW=this.$$method[bT][name];
{bS[bW]=new Function("value",bU.join(""));
};
qx.Bootstrap.setDisplayName(bS[bW],bR.classname+".prototype",bW);
if(bV===undefined){return bR[bW]();
}else{return bR[bW](bV[0]);
}},executeOptimizedGetter:function(bX,bY,name,ca){var cc=bY.$$properties[name];
var ce=bY.prototype;
var cb=[];
var cd=this.$$store;
cb.push(e,cd.runtime[name],g);
cb.push(k,cd.runtime[name],m);

if(cc.inheritable){cb.push(f,cd.inherit[name],g);
cb.push(k,cd.inherit[name],m);
cb.push(d);
}cb.push(e,cd.user[name],g);
cb.push(k,cd.user[name],m);

if(cc.themeable){cb.push(f,cd.theme[name],g);
cb.push(k,cd.theme[name],m);
}
if(cc.deferredInit&&cc.init===undefined){cb.push(f,cd.init[name],g);
cb.push(k,cd.init[name],m);
}cb.push(d);

if(cc.init!==undefined){if(cc.inheritable){cb.push(P,cd.init[name],m);

if(cc.nullable){cb.push(r);
}else if(cc.init!==undefined){cb.push(k,cd.init[name],m);
}else{cb.push(R,name,c,bY.classname,b);
}cb.push(Q);
}else{cb.push(k,cd.init[name],m);
}}else if(cc.inheritable||cc.nullable){cb.push(B);
}else{cb.push(v,name,c,bY.classname,b);
}return this.__P(bX,ce,name,ca,cb);
},executeOptimizedSetter:function(cf,cg,name,ch,ci){var cn=cg.$$properties[name];
var cm=cg.prototype;
var ck=[];
var cj=ch===p||ch===M||ch===J||(ch===W&&cn.init===undefined);
var cl=cn.apply||cn.event||cn.inheritable;
var co=this.__Q(ch,name);
this.__R(ck,cn,name,ch,cj);

if(cj){this.__S(ck,cg,cn,name);
}
if(cl){this.__T(ck,cj,co,ch);
}
if(cn.inheritable){ck.push(D);
}
if(!cl){this.__V(ck,name,ch,cj);
}else{this.__W(ck,cn,name,ch,cj);
}
if(cn.inheritable){this.__X(ck,cn,name,ch);
}else if(cl){this.__Y(ck,cn,name,ch);
}
if(cl){this.__ba(ck,cn,name);
if(cn.inheritable&&cm._getChildren){this.__bb(ck,name);
}}if(cj){ck.push(S);
}return this.__P(cf,cm,name,ch,ck,ci);
},__Q:function(cp,name){if(cp==="setRuntime"||cp==="resetRuntime"){var cq=this.$$store.runtime[name];
}else if(cp==="setThemed"||cp==="resetThemed"){cq=this.$$store.theme[name];
}else if(cp==="init"){cq=this.$$store.init[name];
}else{cq=this.$$store.user[name];
}return cq;
},__R:function(cr,cs,name,ct,cu){{if(!cs.nullable||cs.check||cs.inheritable){cr.push('var prop=qx.core.Property;');
}if(ct==="set"){cr.push('if(value===undefined)prop.error(this,2,"',name,'","',ct,'",value);');
}};
},__S:function(cv,cw,cx,name){if(cx.transform){cv.push('value=this.',cx.transform,'(value);');
}if(cx.validate){if(typeof cx.validate==="string"){cv.push('this.',cx.validate,'(value);');
}else if(cx.validate instanceof Function){cv.push(cw.classname,'.$$properties.',name);
cv.push('.validate.call(this, value);');
}}},__T:function(cy,cz,cA,cB){var cC=(cB==="reset"||cB==="resetThemed"||cB==="resetRuntime");

if(cz){cy.push('if(this.',cA,'===value)return value;');
}else if(cC){cy.push('if(this.',cA,'===undefined)return;');
}},__U:undefined,__V:function(cD,name,cE,cF){if(cE==="setRuntime"){cD.push('this.',this.$$store.runtime[name],'=value;');
}else if(cE==="resetRuntime"){cD.push('if(this.',this.$$store.runtime[name],'!==undefined)');
cD.push('delete this.',this.$$store.runtime[name],';');
}else if(cE==="set"){cD.push('this.',this.$$store.user[name],'=value;');
}else if(cE==="reset"){cD.push('if(this.',this.$$store.user[name],'!==undefined)');
cD.push('delete this.',this.$$store.user[name],';');
}else if(cE==="setThemed"){cD.push('this.',this.$$store.theme[name],'=value;');
}else if(cE==="resetThemed"){cD.push('if(this.',this.$$store.theme[name],'!==undefined)');
cD.push('delete this.',this.$$store.theme[name],';');
}else if(cE==="init"&&cF){cD.push('this.',this.$$store.init[name],'=value;');
}},__W:function(cG,cH,name,cI,cJ){if(cH.inheritable){cG.push('var computed, old=this.',this.$$store.inherit[name],';');
}else{cG.push('var computed, old;');
}cG.push('if(this.',this.$$store.runtime[name],'!==undefined){');

if(cI==="setRuntime"){cG.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(cI==="resetRuntime"){cG.push('delete this.',this.$$store.runtime[name],';');
cG.push('if(this.',this.$$store.user[name],'!==undefined)');
cG.push('computed=this.',this.$$store.user[name],';');
cG.push('else if(this.',this.$$store.theme[name],'!==undefined)');
cG.push('computed=this.',this.$$store.theme[name],';');
cG.push('else if(this.',this.$$store.init[name],'!==undefined){');
cG.push('computed=this.',this.$$store.init[name],';');
cG.push('this.',this.$$store.useinit[name],'=true;');
cG.push('}');
}else{cG.push('old=computed=this.',this.$$store.runtime[name],';');
if(cI==="set"){cG.push('this.',this.$$store.user[name],'=value;');
}else if(cI==="reset"){cG.push('delete this.',this.$$store.user[name],';');
}else if(cI==="setThemed"){cG.push('this.',this.$$store.theme[name],'=value;');
}else if(cI==="resetThemed"){cG.push('delete this.',this.$$store.theme[name],';');
}else if(cI==="init"&&cJ){cG.push('this.',this.$$store.init[name],'=value;');
}}cG.push('}');
cG.push('else if(this.',this.$$store.user[name],'!==undefined){');

if(cI==="set"){if(!cH.inheritable){cG.push('old=this.',this.$$store.user[name],';');
}cG.push('computed=this.',this.$$store.user[name],'=value;');
}else if(cI==="reset"){if(!cH.inheritable){cG.push('old=this.',this.$$store.user[name],';');
}cG.push('delete this.',this.$$store.user[name],';');
cG.push('if(this.',this.$$store.runtime[name],'!==undefined)');
cG.push('computed=this.',this.$$store.runtime[name],';');
cG.push('if(this.',this.$$store.theme[name],'!==undefined)');
cG.push('computed=this.',this.$$store.theme[name],';');
cG.push('else if(this.',this.$$store.init[name],'!==undefined){');
cG.push('computed=this.',this.$$store.init[name],';');
cG.push('this.',this.$$store.useinit[name],'=true;');
cG.push('}');
}else{if(cI==="setRuntime"){cG.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(cH.inheritable){cG.push('computed=this.',this.$$store.user[name],';');
}else{cG.push('old=computed=this.',this.$$store.user[name],';');
}if(cI==="setThemed"){cG.push('this.',this.$$store.theme[name],'=value;');
}else if(cI==="resetThemed"){cG.push('delete this.',this.$$store.theme[name],';');
}else if(cI==="init"&&cJ){cG.push('this.',this.$$store.init[name],'=value;');
}}cG.push('}');
if(cH.themeable){cG.push('else if(this.',this.$$store.theme[name],'!==undefined){');

if(!cH.inheritable){cG.push('old=this.',this.$$store.theme[name],';');
}
if(cI==="setRuntime"){cG.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(cI==="set"){cG.push('computed=this.',this.$$store.user[name],'=value;');
}else if(cI==="setThemed"){cG.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(cI==="resetThemed"){cG.push('delete this.',this.$$store.theme[name],';');
cG.push('if(this.',this.$$store.init[name],'!==undefined){');
cG.push('computed=this.',this.$$store.init[name],';');
cG.push('this.',this.$$store.useinit[name],'=true;');
cG.push('}');
}else if(cI==="init"){if(cJ){cG.push('this.',this.$$store.init[name],'=value;');
}cG.push('computed=this.',this.$$store.theme[name],';');
}else if(cI==="refresh"){cG.push('computed=this.',this.$$store.theme[name],';');
}cG.push('}');
}cG.push('else if(this.',this.$$store.useinit[name],'){');

if(!cH.inheritable){cG.push('old=this.',this.$$store.init[name],';');
}
if(cI==="init"){if(cJ){cG.push('computed=this.',this.$$store.init[name],'=value;');
}else{cG.push('computed=this.',this.$$store.init[name],';');
}}else if(cI==="set"||cI==="setRuntime"||cI==="setThemed"||cI==="refresh"){cG.push('delete this.',this.$$store.useinit[name],';');

if(cI==="setRuntime"){cG.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(cI==="set"){cG.push('computed=this.',this.$$store.user[name],'=value;');
}else if(cI==="setThemed"){cG.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(cI==="refresh"){cG.push('computed=this.',this.$$store.init[name],';');
}}cG.push('}');
if(cI==="set"||cI==="setRuntime"||cI==="setThemed"||cI==="init"){cG.push('else{');

if(cI==="setRuntime"){cG.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(cI==="set"){cG.push('computed=this.',this.$$store.user[name],'=value;');
}else if(cI==="setThemed"){cG.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(cI==="init"){if(cJ){cG.push('computed=this.',this.$$store.init[name],'=value;');
}else{cG.push('computed=this.',this.$$store.init[name],';');
}cG.push('this.',this.$$store.useinit[name],'=true;');
}cG.push('}');
}},__X:function(cK,cL,name,cM){cK.push('if(computed===undefined||computed===inherit){');

if(cM==="refresh"){cK.push('computed=value;');
}else{cK.push('var pa=this.getLayoutParent();if(pa)computed=pa.',this.$$store.inherit[name],';');
}cK.push('if((computed===undefined||computed===inherit)&&');
cK.push('this.',this.$$store.init[name],'!==undefined&&');
cK.push('this.',this.$$store.init[name],'!==inherit){');
cK.push('computed=this.',this.$$store.init[name],';');
cK.push('this.',this.$$store.useinit[name],'=true;');
cK.push('}else{');
cK.push('delete this.',this.$$store.useinit[name],';}');
cK.push('}');
cK.push('if(old===computed)return value;');
cK.push('if(computed===inherit){');
cK.push('computed=undefined;delete this.',this.$$store.inherit[name],';');
cK.push('}');
cK.push('else if(computed===undefined)');
cK.push('delete this.',this.$$store.inherit[name],';');
cK.push('else this.',this.$$store.inherit[name],'=computed;');
cK.push('var backup=computed;');
if(cL.init!==undefined&&cM!=="init"){cK.push('if(old===undefined)old=this.',this.$$store.init[name],";");
}else{cK.push('if(old===undefined)old=null;');
}cK.push('if(computed===undefined||computed==inherit)computed=null;');
},__Y:function(cN,cO,name,cP){if(cP!=="set"&&cP!=="setRuntime"&&cP!=="setThemed"){cN.push('if(computed===undefined)computed=null;');
}cN.push('if(old===computed)return value;');
if(cO.init!==undefined&&cP!=="init"){cN.push('if(old===undefined)old=this.',this.$$store.init[name],";");
}else{cN.push('if(old===undefined)old=null;');
}},__ba:function(cQ,cR,name){if(cR.apply){cQ.push(H,cR.apply,T,name,y);
}if(cR.event){cQ.push(n,N,cR.event,O,E,cR.event,z,F);
}},__bb:function(cS,name){cS.push(u);
cS.push(q,this.$$method.refresh[name],I,this.$$method.refresh[name],w);
cS.push(C);
}},defer:function(cT){var cV=navigator.userAgent.indexOf(K)!=-1;
var cU=navigator.userAgent.indexOf(s)!=-1;
if(cV||cU){cT.__M=cT.__N;
}}});
})();
(function(){var r="[Class ",q="]",p="qx.aspects",o="toString",n="constructor",m="singleton",k="$$init_",j=".prototype",h="extend",g="Class",d="destruct",f="qx.Class",e=".",c="static",b="qx.event.type.Data";
qx.Bootstrap.define(f,{statics:{define:function(name,s){if(!s){var s={};
}if(s.include&&!(s.include instanceof Array)){s.include=[s.include];
}if(s.implement&&!(s.implement instanceof Array)){s.implement=[s.implement];
}var t=false;

if(!s.hasOwnProperty(h)&&!s.type){s.type=c;
t=true;
}var u=this.__bg(name,s.type,s.extend,s.statics,s.construct,s.destruct,s.include);
if(s.extend){if(s.properties){this.__bi(u,s.properties,true);
}if(s.members){this.__bk(u,s.members,true,true,false);
}if(s.events){this.__bh(u,s.events,true);
}if(s.include){for(var i=0,l=s.include.length;i<l;i++){this.__bo(u,s.include[i],false);
}}}if(s.environment){for(var v in s.environment){qx.core.Environment.add(v,s.environment[v]);
}for(var v in s.environment){qx.core.Setting.defineDeprecated(v,s.environment[v]);
}}if(s.settings){for(var v in s.settings){qx.core.Setting.define(v,s.settings[v]);
}}if(s.variants){for(var v in s.variants){qx.core.Variant.define(v,s.variants[v].allowedValues,s.variants[v].defaultValue);
}}if(s.implement){for(var i=0,l=s.implement.length;i<l;i++){this.__bm(u,s.implement[i]);
}}if(s.defer){s.defer.self=u;
s.defer(u,u.prototype,{add:function(name,w){var x={};
x[name]=w;
qx.Class.__bi(u,x,true);
}});
}return u;
},undefine:function(name){delete this.$$registry[name];
var y=name.split(e);
var A=[window];

for(var i=0;i<y.length;i++){A.push(A[i][y[i]]);
}for(var i=A.length-1;i>=1;i--){var z=A[i];
var parent=A[i-1];

if(qx.Bootstrap.isFunction(z)||qx.Bootstrap.objectGetLength(z)===0){delete parent[y[i-1]];
}else{break;
}}},isDefined:qx.Bootstrap.classIsDefined,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},getByName:qx.Bootstrap.getByName,include:function(B,C){qx.Class.__bo(B,C,false);
},patch:function(D,E){qx.Class.__bo(D,E,true);
},isSubClassOf:function(F,G){if(!F){return false;
}
if(F==G){return true;
}
if(F.prototype instanceof G){return true;
}return false;
},getPropertyDefinition:qx.Bootstrap.getPropertyDefinition,getProperties:function(H){var I=[];

while(H){if(H.$$properties){I.push.apply(I,qx.Bootstrap.getKeys(H.$$properties));
}H=H.superclass;
}return I;
},getByProperty:function(J,name){while(J){if(J.$$properties&&J.$$properties[name]){return J;
}J=J.superclass;
}return null;
},hasProperty:qx.Bootstrap.hasProperty,getEventType:qx.Bootstrap.getEventType,supportsEvent:qx.Bootstrap.supportsEvent,hasOwnMixin:function(K,L){return K.$$includes&&K.$$includes.indexOf(L)!==-1;
},getByMixin:function(M,N){var O,i,l;

while(M){if(M.$$includes){O=M.$$flatIncludes;

for(i=0,l=O.length;i<l;i++){if(O[i]===N){return M;
}}}M=M.superclass;
}return null;
},getMixins:qx.Bootstrap.getMixins,hasMixin:function(P,Q){return !!this.getByMixin(P,Q);
},hasOwnInterface:function(R,S){return R.$$implements&&R.$$implements.indexOf(S)!==-1;
},getByInterface:qx.Bootstrap.getByInterface,getInterfaces:function(T){var U=[];

while(T){if(T.$$implements){U.push.apply(U,T.$$flatImplements);
}T=T.superclass;
}return U;
},hasInterface:qx.Bootstrap.hasInterface,implementsInterface:function(V,W){var X=V.constructor;

if(this.hasInterface(X,W)){return true;
}
try{qx.Interface.assertObject(V,W);
return true;
}catch(Y){}
try{qx.Interface.assert(X,W,false);
return true;
}catch(ba){}return false;
},getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;
this.$$instance=new this;
delete this.$$allowconstruct;
}return this.$$instance;
},genericToString:function(){return r+this.classname+q;
},$$registry:qx.Bootstrap.$$registry,__bc:null,__bd:null,__be:function(){},__bf:function(){},__bg:function(name,bb,bc,bd,be,bf,bg){var bj;

if(!bc&&qx.core.Environment.get(p)==false){bj=bd||{};
qx.Bootstrap.setDisplayNames(bj,name);
}else{var bj={};

if(bc){if(!be){be=this.__bp();
}
if(this.__br(bc,bg)){bj=this.__bs(be,name,bb);
}else{bj=be;
}if(bb===m){bj.getInstance=this.getInstance;
}qx.Bootstrap.setDisplayName(be,name,n);
}if(bd){qx.Bootstrap.setDisplayNames(bd,name);
var bk;

for(var i=0,a=qx.Bootstrap.getKeys(bd),l=a.length;i<l;i++){bk=a[i];
var bh=bd[bk];
{bj[bk]=bh;
};
}}}var bi=qx.Bootstrap.createNamespace(name,bj);
bj.name=bj.classname=name;
bj.basename=bi;
bj.$$type=g;

if(bb){bj.$$classtype=bb;
}if(!bj.hasOwnProperty(o)){bj.toString=this.genericToString;
}
if(bc){qx.Bootstrap.extendClass(bj,be,bc,name,bi);
if(bf){bj.$$destructor=bf;
qx.Bootstrap.setDisplayName(bf,name,d);
}}this.$$registry[name]=bj;
return bj;
},__bh:function(bl,bm,bn){var bo,bo;

if(bl.$$events){for(var bo in bm){bl.$$events[bo]=bm[bo];
}}else{bl.$$events=bm;
}},__bi:function(bp,bq,br){var bs;

if(br===undefined){br=false;
}var bt=bp.prototype;

for(var name in bq){bs=bq[name];
bs.name=name;
if(!bs.refine){if(bp.$$properties===undefined){bp.$$properties={};
}bp.$$properties[name]=bs;
}if(bs.init!==undefined){bp.prototype[k+name]=bs.init;
}if(bs.event!==undefined){var event={};
event[bs.event]=b;
this.__bh(bp,event,br);
}if(bs.inheritable){qx.core.Property.$$inheritable[name]=true;

if(!bt.$$refreshInheritables){qx.core.Property.attachRefreshInheritables(bp);
}}
if(!bs.refine){qx.core.Property.attachMethods(bp,name,bs);
}}},__bj:null,__bk:function(bu,bv,bw,bx,by){var bz=bu.prototype;
var bB,bA;
qx.Bootstrap.setDisplayNames(bv,bu.classname+j);

for(var i=0,a=qx.Bootstrap.getKeys(bv),l=a.length;i<l;i++){bB=a[i];
bA=bv[bB];
if(bx!==false&&bA instanceof Function&&bA.$$type==null){if(by==true){bA=this.__bl(bA,bz[bB]);
}else{if(bz[bB]){bA.base=bz[bB];
}bA.self=bu;
}}bz[bB]=bA;
}},__bl:function(bC,bD){if(bD){return function(){var bF=bC.base;
bC.base=bD;
var bE=bC.apply(this,arguments);
bC.base=bF;
return bE;
};
}else{return bC;
}},__bm:function(bG,bH){var bI=qx.Interface.flatten([bH]);

if(bG.$$implements){bG.$$implements.push(bH);
bG.$$flatImplements.push.apply(bG.$$flatImplements,bI);
}else{bG.$$implements=[bH];
bG.$$flatImplements=bI;
}},__bn:function(bJ){var name=bJ.classname;
var bK=this.__bs(bJ,name,bJ.$$classtype);
for(var i=0,a=qx.Bootstrap.getKeys(bJ),l=a.length;i<l;i++){bL=a[i];
bK[bL]=bJ[bL];
}bK.prototype=bJ.prototype;
var bN=bJ.prototype;

for(var i=0,a=qx.Bootstrap.getKeys(bN),l=a.length;i<l;i++){bL=a[i];
var bO=bN[bL];
if(bO&&bO.self==bJ){bO.self=bK;
}}for(var bL in this.$$registry){var bM=this.$$registry[bL];

if(!bM){continue;
}
if(bM.base==bJ){bM.base=bK;
}
if(bM.superclass==bJ){bM.superclass=bK;
}
if(bM.$$original){if(bM.$$original.base==bJ){bM.$$original.base=bK;
}
if(bM.$$original.superclass==bJ){bM.$$original.superclass=bK;
}}}qx.Bootstrap.createNamespace(name,bK);
this.$$registry[name]=bK;
return bK;
},__bo:function(bP,bQ,bR){if(this.hasMixin(bP,bQ)){return;
}var bU=bP.$$original;

if(bQ.$$constructor&&!bU){bP=this.__bn(bP);
}var bT=qx.Mixin.flatten([bQ]);
var bS;

for(var i=0,l=bT.length;i<l;i++){bS=bT[i];
if(bS.$$events){this.__bh(bP,bS.$$events,bR);
}if(bS.$$properties){this.__bi(bP,bS.$$properties,bR);
}if(bS.$$members){this.__bk(bP,bS.$$members,bR,bR,bR);
}}if(bP.$$includes){bP.$$includes.push(bQ);
bP.$$flatIncludes.push.apply(bP.$$flatIncludes,bT);
}else{bP.$$includes=[bQ];
bP.$$flatIncludes=bT;
}},__bp:function(){function bV(){bV.base.apply(this,arguments);
}return bV;
},__bq:function(){return function(){};
},__br:function(bW,bX){if(bW&&bW.$$includes){var bY=bW.$$flatIncludes;

for(var i=0,l=bY.length;i<l;i++){if(bY[i].$$constructor){return true;
}}}if(bX){var ca=qx.Mixin.flatten(bX);

for(var i=0,l=ca.length;i<l;i++){if(ca[i].$$constructor){return true;
}}}return false;
},__bs:function(cb,name,cc){var cd;
var ce=function(){var ch=ce;
var cg=ch.$$original.apply(this,arguments);
if(ch.$$includes){var cf=ch.$$flatIncludes;

for(var i=0,l=cf.length;i<l;i++){if(cf[i].$$constructor){cf[i].$$constructor.apply(this,arguments);
}}}return cg;
};
ce.$$original=cb;
cb.wrapper=ce;
return ce;
}},defer:function(){var ci,cj,ck;
}});
})();
(function(){var m=":",l="engine.name",k="Error created at",j="...",h="qx.dev.StackTrace",g="",f="\n",e="?",d="/source/class/",c="anonymous",a="of linked script",b=".";
qx.Bootstrap.define(h,{statics:{getStackTrace:qx.core.Environment.select(l,{"gecko":function(){try{throw new Error();
}catch(A){var u=this.getStackTraceFromError(A);
qx.lang.Array.removeAt(u,0);
var s=this.getStackTraceFromCaller(arguments);
var q=s.length>u.length?s:u;

for(var i=0;i<Math.min(s.length,u.length);i++){var r=s[i];

if(r.indexOf(c)>=0){continue;
}var y=r.split(m);

if(y.length!=2){continue;
}var w=y[0];
var p=y[1];
var o=u[i];
var z=o.split(m);
var v=z[0];
var n=z[1];

if(qx.Class.getByName(v)){var t=v;
}else{t=w;
}var x=t+m;

if(p){x+=p+m;
}x+=n;
q[i]=x;
}return q;
}},"mshtml|webkit":function(){return this.getStackTraceFromCaller(arguments);
},"opera":function(){var B;

try{B.bar();
}catch(D){var C=this.getStackTraceFromError(D);
qx.lang.Array.removeAt(C,0);
return C;
}return [];
}}),getStackTraceFromCaller:qx.core.Environment.select(l,{"opera":function(E){return [];
},"default":function(F){var K=[];
var J=qx.lang.Function.getCaller(F);
var G={};

while(J){var H=qx.lang.Function.getName(J);
K.push(H);

try{J=J.caller;
}catch(L){break;
}
if(!J){break;
}var I=qx.core.ObjectRegistry.toHashCode(J);

if(G[I]){K.push(j);
break;
}G[I]=J;
}return K;
}}),getStackTraceFromError:qx.core.Environment.select(l,{"gecko":function(M){if(!M.stack){return [];
}var S=/@(.+):(\d+)$/gm;
var N;
var O=[];

while((N=S.exec(M.stack))!=null){var P=N[1];
var R=N[2];
var Q=this.__bO(P);
O.push(Q+m+R);
}return O;
},"webkit":function(T){if(T.stack){var bb=/at (.*)/gm;
var ba=/\((.*?)(:[^\/].*)\)/;
var X=/(.*?)(:[^\/].*)/;
var U;
var V=[];

while((U=bb.exec(T.stack))!=null){var W=ba.exec(U[1]);

if(!W){W=X.exec(U[1]);
}
if(W){var Y=this.__bO(W[1]);
V.push(Y+W[2]);
}else{V.push(U[1]);
}}return V;
}else if(T.sourceURL&&T.line){return [this.__bO(T.sourceURL)+m+T.line];
}else{return [];
}},"opera":function(bc){if(bc.stacktrace){var be=bc.stacktrace;

if(be.indexOf(k)>=0){be=be.split(k)[0];
}if(be.indexOf(a)>=0){var bo=/Line\ (\d+?)\ of\ linked\ script\ (.*?)$/gm;
var bf;
var bg=[];

while((bf=bo.exec(be))!=null){var bn=bf[1];
var bi=bf[2];
var bm=this.__bO(bi);
bg.push(bm+m+bn);
}}else{var bo=/line\ (\d+?),\ column\ (\d+?)\ in\ (?:.*?)\ in\ (.*?):[^\/]/gm;
var bf;
var bg=[];

while((bf=bo.exec(be))!=null){var bn=bf[1];
var bh=bf[2];
var bi=bf[3];
var bm=this.__bO(bi);
bg.push(bm+m+bn+m+bh);
}}return bg;
}else if(bc.message.indexOf("Backtrace:")>=0){var bg=[];
var bj=qx.lang.String.trim(bc.message.split("Backtrace:")[1]);
var bk=bj.split(f);

for(var i=0;i<bk.length;i++){var bd=bk[i].match(/\s*Line ([0-9]+) of.* (\S.*)/);

if(bd&&bd.length>=2){var bn=bd[1];
var bl=this.__bO(bd[2]);
bg.push(bl+m+bn);
}}return bg;
}else{return [];
}},"default":function(){return [];
}}),__bO:function(bp){var bt=d;
var bq=bp.indexOf(bt);
var bs=bp.indexOf(e);

if(bs>=0){bp=bp.substring(0,bs);
}var br=(bq==-1)?bp:bp.substring(bq+bt.length).replace(/\//g,b).replace(/\.js$/,g);
return br;
}}});
})();
(function(){var x="off",w="on",u="|",t="default",s="object",r="&",q="qx.aspects",p="qx.mobile.nativescroll",o="qx.mobile.emulatetouch",n="$",e="qx.allowUrlVariants",m="qx.debug",h="qx.client",c="qx.dynlocale",b="webkit",g="qxvariant",f="opera",j=":",a="qx.core.Variant",k="mshtml",d="gecko";
qx.Bootstrap.define(a,{statics:{__bt:{},__bu:{},compilerIsSet:function(){return true;
},define:function(y,z,A){this.defineDeprecated(y,z,A);
},defineDeprecated:function(B,C,D){if(!this.__bt[B]){this.__bt[B]={};
}else{}this.__bt[B].allowedValues=C;
this.__bt[B].defaultValue=D;
},get:function(E){var F=this.__bt[E];

if(F.value!==undefined){return F.value;
}return F.defaultValue;
},__bv:function(){if(window.qxvariants){for(var G in qxvariants){if(!this.__bt[G]){this.__bt[G]={};
}this.__bt[G].value=qxvariants[G];
}window.qxvariants=undefined;

try{delete window.qxvariants;
}catch(H){}this.__bw(this.__bt);
}},__bw:function(){if(qx.core.Environment.get(e)!=true){return;
}var I=document.location.search.slice(1).split(r);

for(var i=0;i<I.length;i++){var J=I[i].split(j);

if(J.length!=3||J[0]!=g){continue;
}var K=J[1];

if(!this.__bt[K]){this.__bt[K]={};
}this.__bt[K].value=decodeURIComponent(J[2]);
}},select:function(L,M){for(var N in M){if(this.isSet(L,N)){return M[N];
}}
if(M[t]!==undefined){return M[t];
}},isSet:function(O,P){var Q=O+n+P;

if(this.__bu[Q]!==undefined){return this.__bu[Q];
}var S=false;
if(P.indexOf(u)<0){S=this.get(O)===P;
}else{var R=P.split(u);

for(var i=0,l=R.length;i<l;i++){if(this.get(O)===R[i]){S=true;
break;
}}}this.__bu[Q]=S;
return S;
},__bx:function(v){return typeof v===s&&v!==null&&v instanceof Array;
},__by:function(v){return typeof v===s&&v!==null&&!(v instanceof Array);
},__bz:function(T,U){for(var i=0,l=T.length;i<l;i++){if(T[i]==U){return true;
}}return false;
}},defer:function(V){V.defineDeprecated(h,[d,k,f,b],qx.bom.client.Engine.getName());
V.defineDeprecated(m,[w,x],w);
V.defineDeprecated(q,[w,x],x);
V.defineDeprecated(c,[w,x],w);
V.defineDeprecated(o,[w,x],x);
V.defineDeprecated(p,[w,x],x);
V.__bv();
}});
})();
(function(){var g="mshtml",f="engine.name",e="[object Array]",d="qx.lang.Array",c="qx",b="number",a="string";
qx.Class.define(d,{statics:{toArray:function(h,j){return this.cast(h,Array,j);
},cast:function(k,m,n){if(k.constructor===m){return k;
}
if(qx.Class.hasInterface(k,qx.data.IListData)){var k=k.toArray();
}var o=new m;
if((qx.core.Environment.get(f)==g)){if(k.item){for(var i=n||0,l=k.length;i<l;i++){o.push(k[i]);
}return o;
}}if(Object.prototype.toString.call(k)===e&&n==null){o.push.apply(o,k);
}else{o.push.apply(o,Array.prototype.slice.call(k,n||0));
}return o;
},fromArguments:function(p,q){return Array.prototype.slice.call(p,q||0);
},fromCollection:function(r){if((qx.core.Environment.get(f)==g)){if(r.item){var s=[];

for(var i=0,l=r.length;i<l;i++){s[i]=r[i];
}return s;
}}return Array.prototype.slice.call(r,0);
},fromShortHand:function(t){var v=t.length;
var u=qx.lang.Array.clone(t);
switch(v){case 1:u[1]=u[2]=u[3]=u[0];
break;
case 2:u[2]=u[0];
case 3:u[3]=u[1];
}return u;
},clone:function(w){return w.concat();
},insertAt:function(x,y,i){x.splice(i,0,y);
return x;
},insertBefore:function(z,A,B){var i=z.indexOf(B);

if(i==-1){z.push(A);
}else{z.splice(i,0,A);
}return z;
},insertAfter:function(C,D,E){var i=C.indexOf(E);

if(i==-1||i==(C.length-1)){C.push(D);
}else{C.splice(i+1,0,D);
}return C;
},removeAt:function(F,i){return F.splice(i,1)[0];
},removeAll:function(G){G.length=0;
return this;
},append:function(H,I){Array.prototype.push.apply(H,I);
return H;
},exclude:function(J,K){for(var i=0,M=K.length,L;i<M;i++){L=J.indexOf(K[i]);

if(L!=-1){J.splice(L,1);
}}return J;
},remove:function(N,O){var i=N.indexOf(O);

if(i!=-1){N.splice(i,1);
return O;
}},contains:function(P,Q){return P.indexOf(Q)!==-1;
},equals:function(R,S){var length=R.length;

if(length!==S.length){return false;
}
for(var i=0;i<length;i++){if(R[i]!==S[i]){return false;
}}return true;
},sum:function(T){var U=0;

for(var i=0,l=T.length;i<l;i++){U+=T[i];
}return U;
},max:function(V){var i,X=V.length,W=V[0];

for(i=1;i<X;i++){if(V[i]>W){W=V[i];
}}return W===undefined?null:W;
},min:function(Y){var i,bb=Y.length,ba=Y[0];

for(i=1;i<bb;i++){if(Y[i]<ba){ba=Y[i];
}}return ba===undefined?null:ba;
},unique:function(bc){var bm=[],be={},bh={},bj={};
var bi,bd=0;
var bn=c+qx.lang.Date.now();
var bf=false,bl=false,bo=false;
for(var i=0,bk=bc.length;i<bk;i++){bi=bc[i];
if(bi===null){if(!bf){bf=true;
bm.push(bi);
}}else if(bi===undefined){}else if(bi===false){if(!bl){bl=true;
bm.push(bi);
}}else if(bi===true){if(!bo){bo=true;
bm.push(bi);
}}else if(typeof bi===a){if(!be[bi]){be[bi]=1;
bm.push(bi);
}}else if(typeof bi===b){if(!bh[bi]){bh[bi]=1;
bm.push(bi);
}}else{bg=bi[bn];

if(bg==null){bg=bi[bn]=bd++;
}
if(!bj[bg]){bj[bg]=bi;
bm.push(bi);
}}}for(var bg in bj){try{delete bj[bg][bn];
}catch(bp){try{bj[bg][bn]=null;
}catch(bq){throw new Error("Cannot clean-up map entry doneObjects["+bg+"]["+bn+"]");
}}}return bm;
}}});
})();
(function(){var a="qx.data.MBinding";
qx.Mixin.define(a,{members:{bind:function(b,c,d,e){return qx.data.SingleValueBinding.bind(this,b,c,d,e);
},removeBinding:function(f){qx.data.SingleValueBinding.removeBindingFromObject(this,f);
},removeAllBindings:function(){qx.data.SingleValueBinding.removeAllBindingsForObject(this);
},getBindings:function(){return qx.data.SingleValueBinding.getAllBindingsForObject(this);
}}});
})();
(function(){var e="$$hash",d="",c="qx.core.ObjectRegistry";
qx.Class.define(c,{statics:{inShutDown:false,__cf:{},__cg:0,__ch:[],register:function(f){var j=this.__cf;

if(!j){return;
}var h=f.$$hash;

if(h==null){var g=this.__ch;

if(g.length>0){h=g.pop();
}else{h=(this.__cg++)+d;
}f.$$hash=h;
}j[h]=f;
},unregister:function(k){var m=k.$$hash;

if(m==null){return;
}var n=this.__cf;

if(n&&n[m]){delete n[m];
this.__ch.push(m);
}try{delete k.$$hash;
}catch(o){if(k.removeAttribute){k.removeAttribute(e);
}}},toHashCode:function(p){var r=p.$$hash;

if(r!=null){return r;
}var q=this.__ch;

if(q.length>0){r=q.pop();
}else{r=(this.__cg++)+d;
}return p.$$hash=r;
},clearHashCode:function(s){var t=s.$$hash;

if(t!=null){this.__ch.push(t);
try{delete s.$$hash;
}catch(u){if(s.removeAttribute){s.removeAttribute(e);
}}}},fromHashCode:function(v){return this.__cf[v]||null;
},shutdown:function(){this.inShutDown=true;
var x=this.__cf;
var z=[];

for(var y in x){z.push(y);
}z.sort(function(a,b){return parseInt(b,10)-parseInt(a,10);
});
var w,i=0,l=z.length;

while(true){try{for(;i<l;i++){y=z[i];
w=x[y];

if(w&&w.dispose){w.dispose();
}}}catch(A){qx.Bootstrap.error(this,"Could not dispose object "+w.toString()+": "+A);

if(i!==l){i++;
continue;
}}break;
}qx.Bootstrap.debug(this,"Disposed "+l+" objects");
delete this.__cf;
},getRegistry:function(){return this.__cf;
}}});
})();
(function(){var d="qx.dom.Node",c="engine.name",b="";
qx.Class.define(d,{statics:{ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12,getDocument:function(e){return e.nodeType===
this.DOCUMENT?e:
e.ownerDocument||e.document;
},getWindow:qx.core.Environment.select(c,{"mshtml":function(f){if(f.nodeType==null){return f;
}if(f.nodeType!==this.DOCUMENT){f=f.ownerDocument;
}return f.parentWindow;
},"default":function(g){if(g.nodeType==null){return g;
}if(g.nodeType!==this.DOCUMENT){g=g.ownerDocument;
}return g.defaultView;
}}),getDocumentElement:function(h){return this.getDocument(h).documentElement;
},getBodyElement:function(j){return this.getDocument(j).body;
},isNode:function(k){return !!(k&&k.nodeType!=null);
},isElement:function(l){return !!(l&&l.nodeType===this.ELEMENT);
},isDocument:function(m){return !!(m&&m.nodeType===this.DOCUMENT);
},isText:function(n){return !!(n&&n.nodeType===this.TEXT);
},isWindow:function(o){return !!(o&&o.history&&o.location&&o.document);
},isNodeName:function(p,q){if(!q||!p||!p.nodeName){return false;
}return q.toLowerCase()==qx.dom.Node.getName(p);
},getName:function(r){if(!r||!r.nodeName){return null;
}return r.nodeName.toLowerCase();
},getText:function(s){if(!s||!s.nodeType){return null;
}
switch(s.nodeType){case 1:var i,a=[],t=s.childNodes,length=t.length;

for(i=0;i<length;i++){a[i]=this.getText(t[i]);
}return a.join(b);
case 2:case 3:case 4:return s.nodeValue;
}return null;
},isBlockNode:function(u){if(!qx.dom.Node.isElement(u)){return false;
}u=qx.dom.Node.getName(u);
return /^(body|form|textarea|fieldset|ul|ol|dl|dt|dd|li|div|hr|p|h[1-6]|quote|pre|table|thead|tbody|tfoot|tr|td|th|iframe|address|blockquote)$/.test(u);
}}});
})();
(function(){var f="()",e=".",d=".prototype.",c='anonymous()',b="qx.lang.Function",a=".constructor()";
qx.Class.define(b,{statics:{getCaller:function(g){return g.caller?g.caller.callee:g.callee.caller;
},getName:function(h){if(h.displayName){return h.displayName;
}
if(h.$$original||h.wrapper||h.classname){return h.classname+a;
}
if(h.$$mixin){for(var j in h.$$mixin.$$members){if(h.$$mixin.$$members[j]==h){return h.$$mixin.name+d+j+f;
}}for(var j in h.$$mixin){if(h.$$mixin[j]==h){return h.$$mixin.name+e+j+f;
}}}
if(h.self){var k=h.self.constructor;

if(k){for(var j in k.prototype){if(k.prototype[j]==h){return k.classname+d+j+f;
}}for(var j in k){if(k[j]==h){return k.classname+e+j+f;
}}}}var i=h.toString().match(/function\s*(\w*)\s*\(.*/);

if(i&&i.length>=1&&i[1]){return i[1]+f;
}return c;
},globalEval:function(l){if(window.execScript){return window.execScript(l);
}else{return eval.call(window,l);
}},empty:function(){},returnTrue:function(){return true;
},returnFalse:function(){return false;
},returnNull:function(){return null;
},returnThis:function(){return this;
},returnZero:function(){return 0;
},create:function(m,n){if(!n){return m;
}if(!(n.self||n.args||n.delay!=null||n.periodical!=null||n.attempt)){return m;
}return function(event){var p=qx.lang.Array.fromArguments(arguments);
if(n.args){p=n.args.concat(p);
}
if(n.delay||n.periodical){var o=qx.event.GlobalError.observeMethod(function(){return m.apply(n.self||this,p);
});

if(n.delay){return window.setTimeout(o,n.delay);
}
if(n.periodical){return window.setInterval(o,n.periodical);
}}else if(n.attempt){var q=false;

try{q=m.apply(n.self||this,p);
}catch(r){}return q;
}else{return m.apply(n.self||this,p);
}};
},bind:function(s,self,t){return this.create(s,{self:self,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null});
},curry:function(u,v){return this.create(u,{args:arguments.length>1?qx.lang.Array.fromArguments(arguments,1):null});
},listener:function(w,self,x){if(arguments.length<3){return function(event){return w.call(self||this,event||window.event);
};
}else{var y=qx.lang.Array.fromArguments(arguments,2);
return function(event){var z=[event||window.event];
z.push.apply(z,y);
w.apply(self||this,z);
};
}},attempt:function(A,self,B){return this.create(A,{self:self,attempt:true,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null})();
},delay:function(C,D,self,E){return this.create(C,{delay:D,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
},periodical:function(F,G,self,H){return this.create(F,{periodical:G,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
}}});
})();
(function(){var k="on",j="engine.name",i="gecko",h="engine.version",g="function",f="mousedown",d="qx.bom.Event",c="return;",b="mouseover",a="HTMLEvents";
qx.Class.define(d,{statics:{addNativeListener:function(l,m,n,o){if(l.addEventListener){l.addEventListener(m,n,!!o);
}else if(l.attachEvent){l.attachEvent(k+m,n);
}},removeNativeListener:function(p,q,r,s){if(p.removeEventListener){p.removeEventListener(q,r,!!s);
}else if(p.detachEvent){try{p.detachEvent(k+q,r);
}catch(e){if(e.number!==-2146828218){throw e;
}}}},getTarget:function(e){return e.target||e.srcElement;
},getRelatedTarget:function(e){if(e.relatedTarget!==undefined){if((qx.core.Environment.get(j)==i)){try{e.relatedTarget&&e.relatedTarget.nodeType;
}catch(e){return null;
}}return e.relatedTarget;
}else if(e.fromElement!==undefined&&e.type===b){return e.fromElement;
}else if(e.toElement!==undefined){return e.toElement;
}else{return null;
}},preventDefault:function(e){if(e.preventDefault){if((qx.core.Environment.get(j)==i)&&parseFloat(qx.core.Environment.get(h))>=1.9&&e.type==f&&e.button==2){return;
}e.preventDefault();
if((qx.core.Environment.get(j)==i)&&parseFloat(qx.core.Environment.get(h))<1.9){try{e.keyCode=0;
}catch(t){}}}else{try{e.keyCode=0;
}catch(u){}e.returnValue=false;
}},stopPropagation:function(e){if(e.stopPropagation){e.stopPropagation();
}else{e.cancelBubble=true;
}},fire:function(v,w){if(document.createEvent){var x=document.createEvent(a);
x.initEvent(w,true,true);
return !v.dispatchEvent(x);
}else{var x=document.createEventObject();
return v.fireEvent(k+w,x);
}},supportsEvent:qx.core.Environment.select(j,{"webkit":function(y,z){return y.hasOwnProperty(k+z);
},"default":function(A,B){var C=k+B;
var D=(C in A);

if(!D){D=typeof A[C]==g;

if(!D&&A.setAttribute){A.setAttribute(C,c);
D=typeof A[C]==g;
A.removeAttribute(C);
}}return D;
}})}});
})();
(function(){var r="|bubble",q="|capture",p="|",o="",n="_",m="unload",k="UNKNOWN_",j="c",h="__bF",g="DOM_",c="__bE",f="WIN_",e="QX_",b="qx.event.Manager",a="capture",d="DOCUMENT_";
qx.Class.define(b,{extend:Object,construct:function(s,t){this.__bA=s;
this.__bB=qx.core.ObjectRegistry.toHashCode(s);
this.__bC=t;
if(s.qx!==qx){var self=this;
qx.bom.Event.addNativeListener(s,m,qx.event.GlobalError.observeMethod(function(){qx.bom.Event.removeNativeListener(s,m,arguments.callee);
self.dispose();
}));
}this.__bD={};
this.__bE={};
this.__bF={};
this.__bG={};
},statics:{__bH:0,getNextUniqueId:function(){return (this.__bH++)+o;
}},members:{__bC:null,__bD:null,__bF:null,__bI:null,__bE:null,__bG:null,__bA:null,__bB:null,getWindow:function(){return this.__bA;
},getWindowId:function(){return this.__bB;
},getHandler:function(u){var v=this.__bE[u.classname];

if(v){return v;
}return this.__bE[u.classname]=new u(this);
},getDispatcher:function(w){var x=this.__bF[w.classname];

if(x){return x;
}return this.__bF[w.classname]=new w(this,this.__bC);
},getListeners:function(y,z,A){var B=y.$$hash||qx.core.ObjectRegistry.toHashCode(y);
var D=this.__bD[B];

if(!D){return null;
}var E=z+(A?q:r);
var C=D[E];
return C?C.concat():null;
},serializeListeners:function(F){var M=F.$$hash||qx.core.ObjectRegistry.toHashCode(F);
var O=this.__bD[M];
var K=[];

if(O){var I,N,G,J,L;

for(var H in O){I=H.indexOf(p);
N=H.substring(0,I);
G=H.charAt(I+1)==j;
J=O[H];

for(var i=0,l=J.length;i<l;i++){L=J[i];
K.push({self:L.context,handler:L.handler,type:N,capture:G});
}}}return K;
},toggleAttachedEvents:function(P,Q){var V=P.$$hash||qx.core.ObjectRegistry.toHashCode(P);
var X=this.__bD[V];

if(X){var S,W,R,T;

for(var U in X){S=U.indexOf(p);
W=U.substring(0,S);
R=U.charCodeAt(S+1)===99;
T=X[U];

if(Q){this.__bJ(P,W,R);
}else{this.__bK(P,W,R);
}}}},hasListener:function(Y,ba,bb){var bc=Y.$$hash||qx.core.ObjectRegistry.toHashCode(Y);
var be=this.__bD[bc];

if(!be){return false;
}var bf=ba+(bb?q:r);
var bd=be[bf];
return !!(bd&&bd.length>0);
},importListeners:function(bg,bh){var bn=bg.$$hash||qx.core.ObjectRegistry.toHashCode(bg);
var bo=this.__bD[bn]={};
var bk=qx.event.Manager;

for(var bi in bh){var bl=bh[bi];
var bm=bl.type+(bl.capture?q:r);
var bj=bo[bm];

if(!bj){bj=bo[bm]=[];
this.__bJ(bg,bl.type,bl.capture);
}bj.push({handler:bl.listener,context:bl.self,unique:bl.unique||(bk.__bH++)+o});
}},addListener:function(bp,bq,br,self,bs){var bw;
var bx=bp.$$hash||qx.core.ObjectRegistry.toHashCode(bp);
var bz=this.__bD[bx];

if(!bz){bz=this.__bD[bx]={};
}var bv=bq+(bs?q:r);
var bu=bz[bv];

if(!bu){bu=bz[bv]=[];
}if(bu.length===0){this.__bJ(bp,bq,bs);
}var by=(qx.event.Manager.__bH++)+o;
var bt={handler:br,context:self,unique:by};
bu.push(bt);
return bv+p+by;
},findHandler:function(bA,bB){var bN=false,bF=false,bO=false,bC=false;
var bL;

if(bA.nodeType===1){bN=true;
bL=g+bA.tagName.toLowerCase()+n+bB;
}else if(bA.nodeType===9){bC=true;
bL=d+bB;
}else if(bA==this.__bA){bF=true;
bL=f+bB;
}else if(bA.classname){bO=true;
bL=e+bA.classname+n+bB;
}else{bL=k+bA+n+bB;
}var bH=this.__bG;

if(bH[bL]){return bH[bL];
}var bK=this.__bC.getHandlers();
var bG=qx.event.IEventHandler;
var bI,bJ,bE,bD;

for(var i=0,l=bK.length;i<l;i++){bI=bK[i];
bE=bI.SUPPORTED_TYPES;

if(bE&&!bE[bB]){continue;
}bD=bI.TARGET_CHECK;

if(bD){var bM=false;

if(bN&&((bD&bG.TARGET_DOMNODE)!=0)){bM=true;
}else if(bF&&((bD&bG.TARGET_WINDOW)!=0)){bM=true;
}else if(bO&&((bD&bG.TARGET_OBJECT)!=0)){bM=true;
}else if(bC&&((bD&bG.TARGET_DOCUMENT)!=0)){bM=true;
}
if(!bM){continue;
}}bJ=this.getHandler(bK[i]);

if(bI.IGNORE_CAN_HANDLE||bJ.canHandleEvent(bA,bB)){bH[bL]=bJ;
return bJ;
}}return null;
},__bJ:function(bP,bQ,bR){var bS=this.findHandler(bP,bQ);

if(bS){bS.registerEvent(bP,bQ,bR);
return;
}},removeListener:function(bT,bU,bV,self,bW){var cb;
var cc=bT.$$hash||qx.core.ObjectRegistry.toHashCode(bT);
var cd=this.__bD[cc];

if(!cd){return false;
}var bX=bU+(bW?q:r);
var bY=cd[bX];

if(!bY){return false;
}var ca;

for(var i=0,l=bY.length;i<l;i++){ca=bY[i];

if(ca.handler===bV&&ca.context===self){qx.lang.Array.removeAt(bY,i);

if(bY.length==0){this.__bK(bT,bU,bW);
}return true;
}}return false;
},removeListenerById:function(ce,cf){var cl;
var cj=cf.split(p);
var co=cj[0];
var cg=cj[1].charCodeAt(0)==99;
var cn=cj[2];
var cm=ce.$$hash||qx.core.ObjectRegistry.toHashCode(ce);
var cp=this.__bD[cm];

if(!cp){return false;
}var ck=co+(cg?q:r);
var ci=cp[ck];

if(!ci){return false;
}var ch;

for(var i=0,l=ci.length;i<l;i++){ch=ci[i];

if(ch.unique===cn){qx.lang.Array.removeAt(ci,i);

if(ci.length==0){this.__bK(ce,co,cg);
}return true;
}}return false;
},removeAllListeners:function(cq){var cu=cq.$$hash||qx.core.ObjectRegistry.toHashCode(cq);
var cw=this.__bD[cu];

if(!cw){return false;
}var cs,cv,cr;

for(var ct in cw){if(cw[ct].length>0){cs=ct.split(p);
cv=cs[0];
cr=cs[1]===a;
this.__bK(cq,cv,cr);
}}delete this.__bD[cu];
return true;
},deleteAllListeners:function(cx){delete this.__bD[cx];
},__bK:function(cy,cz,cA){var cB=this.findHandler(cy,cz);

if(cB){cB.unregisterEvent(cy,cz,cA);
return;
}},dispatchEvent:function(cC,event){var cH;
var cI=event.getType();

if(!event.getBubbles()&&!this.hasListener(cC,cI)){qx.event.Pool.getInstance().poolObject(event);
return true;
}
if(!event.getTarget()){event.setTarget(cC);
}var cG=this.__bC.getDispatchers();
var cF;
var cE=false;

for(var i=0,l=cG.length;i<l;i++){cF=this.getDispatcher(cG[i]);
if(cF.canDispatchEvent(cC,event,cI)){cF.dispatchEvent(cC,event,cI);
cE=true;
break;
}}
if(!cE){return true;
}var cD=event.getDefaultPrevented();
qx.event.Pool.getInstance().poolObject(event);
return !cD;
},dispose:function(){this.__bC.removeManager(this);
qx.util.DisposeUtil.disposeMap(this,c);
qx.util.DisposeUtil.disposeMap(this,h);
this.__bD=this.__bA=this.__bI=null;
this.__bC=this.__bG=null;
}}});
})();
(function(){var c="qx.event.Registration";
qx.Class.define(c,{statics:{__bL:{},getManager:function(d){if(d==null){d=window;
}else if(d.nodeType){d=qx.dom.Node.getWindow(d);
}else if(!qx.dom.Node.isWindow(d)){d=window;
}var f=d.$$hash||qx.core.ObjectRegistry.toHashCode(d);
var e=this.__bL[f];

if(!e){e=new qx.event.Manager(d,this);
this.__bL[f]=e;
}return e;
},removeManager:function(g){var h=g.getWindowId();
delete this.__bL[h];
},addListener:function(i,j,k,self,l){return this.getManager(i).addListener(i,j,k,self,l);
},removeListener:function(m,n,o,self,p){return this.getManager(m).removeListener(m,n,o,self,p);
},removeListenerById:function(q,r){return this.getManager(q).removeListenerById(q,r);
},removeAllListeners:function(s){return this.getManager(s).removeAllListeners(s);
},deleteAllListeners:function(t){var u=t.$$hash;

if(u){this.getManager(t).deleteAllListeners(u);
}},hasListener:function(v,w,x){return this.getManager(v).hasListener(v,w,x);
},serializeListeners:function(y){return this.getManager(y).serializeListeners(y);
},createEvent:function(z,A,B){if(A==null){A=qx.event.type.Event;
}var C=qx.event.Pool.getInstance().getObject(A);
B?C.init.apply(C,B):C.init();
if(z){C.setType(z);
}return C;
},dispatchEvent:function(D,event){return this.getManager(D).dispatchEvent(D,event);
},fireEvent:function(E,F,G,H){var I;
var J=this.createEvent(F,G||null,H);
return this.getManager(E).dispatchEvent(E,J);
},fireNonBubblingEvent:function(K,L,M,N){var O=this.getManager(K);

if(!O.hasListener(K,L,false)){return true;
}var P=this.createEvent(L,M||null,N);
return O.dispatchEvent(K,P);
},PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__bM:[],addHandler:function(Q){this.__bM.push(Q);
this.__bM.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getHandlers:function(){return this.__bM;
},__bN:[],addDispatcher:function(R,S){this.__bN.push(R);
this.__bN.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getDispatchers:function(){return this.__bN;
}}});
})();
(function(){var k="",j="g",h="0",g='\\$1',f="%",e='-',d="qx.lang.String",c=' ',b='\n',a="undefined";
qx.Class.define(d,{statics:{camelCase:function(l){return l.replace(/\-([a-z])/g,function(m,n){return n.toUpperCase();
});
},hyphenate:function(o){return o.replace(/[A-Z]/g,function(p){return (e+p.charAt(0).toLowerCase());
});
},capitalize:function(q){return q.replace(/\b[a-z]/g,function(r){return r.toUpperCase();
});
},clean:function(s){return this.trim(s.replace(/\s+/g,c));
},trimLeft:function(t){return t.replace(/^\s+/,k);
},trimRight:function(u){return u.replace(/\s+$/,k);
},trim:function(v){return v.replace(/^\s+|\s+$/g,k);
},startsWith:function(w,x){return w.indexOf(x)===0;
},endsWith:function(y,z){return y.substring(y.length-z.length,y.length)===z;
},repeat:function(A,B){return A.length>0?new Array(B+1).join(A):k;
},pad:function(C,length,D){var E=length-C.length;

if(E>0){if(typeof D===a){D=h;
}return this.repeat(D,E)+C;
}else{return C;
}},firstUp:qx.Bootstrap.firstUp,firstLow:qx.Bootstrap.firstLow,contains:function(F,G){return F.indexOf(G)!=-1;
},format:function(H,I){var J=H;

for(var i=0;i<I.length;i++){J=J.replace(new RegExp(f+(i+1),j),I[i]+k);
}return J;
},escapeRegexpChars:function(K){return K.replace(/([.*+?^${}()|[\]\/\\])/g,g);
},toArray:function(L){return L.split(/\B|\b/g);
},stripTags:function(M){return M.replace(/<\/?[^>]+>/gi,k);
},stripScripts:function(N,O){var Q=k;
var P=N.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(){Q+=arguments[1]+b;
return k;
});

if(O===true){qx.lang.Function.globalEval(Q);
}return P;
}}});
})();
(function(){var a="qx.lang.RingBuffer";
qx.Class.define(a,{extend:Object,construct:function(b){this.setMaxEntries(b||50);
},members:{__bP:0,__bQ:0,__bR:false,__bS:0,__bT:null,__bU:null,setMaxEntries:function(c){this.__bU=c;
this.clear();
},getMaxEntries:function(){return this.__bU;
},addEntry:function(d){this.__bT[this.__bP]=d;
this.__bP=this.__bV(this.__bP,1);
var e=this.getMaxEntries();

if(this.__bQ<e){this.__bQ++;
}if(this.__bR&&(this.__bS<e)){this.__bS++;
}},mark:function(){this.__bR=true;
this.__bS=0;
},clearMark:function(){this.__bR=false;
},getAllEntries:function(){return this.getEntries(this.getMaxEntries(),false);
},getEntries:function(f,g){if(f>this.__bQ){f=this.__bQ;
}if(g&&this.__bR&&(f>this.__bS)){f=this.__bS;
}
if(f>0){var i=this.__bV(this.__bP,-1);
var h=this.__bV(i,-f+1);
var j;

if(h<=i){j=this.__bT.slice(h,i+1);
}else{j=this.__bT.slice(h,this.__bQ).concat(this.__bT.slice(0,i+1));
}}else{j=[];
}return j;
},clear:function(){this.__bT=new Array(this.getMaxEntries());
this.__bQ=0;
this.__bS=0;
this.__bP=0;
},__bV:function(k,l){var m=this.getMaxEntries();
var n=(k+l)%m;
if(n<0){n+=m;
}return n;
}}});
})();
(function(){var a="qx.log.appender.RingBuffer";
qx.Class.define(a,{extend:qx.lang.RingBuffer,construct:function(b){this.setMaxMessages(b||50);
},members:{setMaxMessages:function(c){this.setMaxEntries(c);
},getMaxMessages:function(){return this.getMaxEntries();
},process:function(d){this.addEntry(d);
},getAllLogEvents:function(){return this.getAllEntries();
},retrieveLogEvents:function(e,f){return this.getEntries(e,f);
},clearHistory:function(){this.clear();
}}});
})();
(function(){var k="node",j="error",h="...(+",g="array",f=")",e="info",d="instance",c="string",b="null",a="class",H="number",G="stringify",F="]",E="date",D="unknown",C="function",B="boolean",A="debug",z="map",y="undefined",s="qx.log.Logger",t="[",q="#",r="warn",o="document",p="{...(",m="text[",n="[...(",u="\n",v=")}",x=")]",w="object";
qx.Class.define(s,{statics:{__bW:A,setLevel:function(I){this.__bW=I;
},getLevel:function(){return this.__bW;
},setTreshold:function(J){this.__ca.setMaxMessages(J);
},getTreshold:function(){return this.__ca.getMaxMessages();
},__bX:{},__bY:0,register:function(K){if(K.$$id){return;
}var M=this.__bY++;
this.__bX[M]=K;
K.$$id=M;
var L=this.__cb;
var N=this.__ca.getAllLogEvents();

for(var i=0,l=N.length;i<l;i++){if(L[N[i].level]>=L[this.__bW]){K.process(N[i]);
}}},unregister:function(O){var P=O.$$id;

if(P==null){return;
}delete this.__bX[P];
delete O.$$id;
},debug:function(Q,R){qx.log.Logger.__cc(A,arguments);
},info:function(S,T){qx.log.Logger.__cc(e,arguments);
},warn:function(U,V){qx.log.Logger.__cc(r,arguments);
},error:function(W,X){qx.log.Logger.__cc(j,arguments);
},trace:function(Y){qx.log.Logger.__cc(e,[Y,qx.dev.StackTrace.getStackTrace().join(u)]);
},deprecatedMethodWarning:function(ba,bb){var bc;
},deprecatedClassWarning:function(bd,be){var bf;
},deprecatedEventWarning:function(bg,event,bh){var bi;
},deprecatedMixinWarning:function(bj,bk){var bl;
},deprecatedConstantWarning:function(bm,bn,bo){var self,bp;
},deprecateMethodOverriding:function(bq,br,bs,bt){var bu;
},clear:function(){this.__ca.clearHistory();
},__ca:new qx.log.appender.RingBuffer(50),__cb:{debug:0,info:1,warn:2,error:3},__cc:function(bv,bw){var bB=this.__cb;

if(bB[bv]<bB[this.__bW]){return;
}var by=bw.length<2?null:bw[0];
var bA=by?1:0;
var bx=[];

for(var i=bA,l=bw.length;i<l;i++){bx.push(this.__ce(bw[i],true));
}var bC=new Date;
var bD={time:bC,offset:bC-qx.Bootstrap.LOADSTART,level:bv,items:bx,win:window};
if(by){if(by.$$hash!==undefined){bD.object=by.$$hash;
}else if(by.$$type){bD.clazz=by;
}}this.__ca.process(bD);
var bE=this.__bX;

for(var bz in bE){bE[bz].process(bD);
}},__cd:function(bF){if(bF===undefined){return y;
}else if(bF===null){return b;
}
if(bF.$$type){return a;
}var bG=typeof bF;

if(bG===C||bG==c||bG===H||bG===B){return bG;
}else if(bG===w){if(bF.nodeType){return k;
}else if(bF.classname){return d;
}else if(bF instanceof Array){return g;
}else if(bF instanceof Error){return j;
}else if(bF instanceof Date){return E;
}else{return z;
}}
if(bF.toString){return G;
}return D;
},__ce:function(bH,bI){var bP=this.__cd(bH);
var bL=D;
var bK=[];

switch(bP){case b:case y:bL=bP;
break;
case c:case H:case B:case E:bL=bH;
break;
case k:if(bH.nodeType===9){bL=o;
}else if(bH.nodeType===3){bL=m+bH.nodeValue+F;
}else if(bH.nodeType===1){bL=bH.nodeName.toLowerCase();

if(bH.id){bL+=q+bH.id;
}}else{bL=k;
}break;
case C:bL=qx.lang.Function.getName(bH)||bP;
break;
case d:bL=bH.basename+t+bH.$$hash+F;
break;
case a:case G:bL=bH.toString();
break;
case j:bK=qx.dev.StackTrace.getStackTraceFromError(bH);
bL=bH.toString();
break;
case g:if(bI){bL=[];

for(var i=0,l=bH.length;i<l;i++){if(bL.length>20){bL.push(h+(l-i)+f);
break;
}bL.push(this.__ce(bH[i],false));
}}else{bL=n+bH.length+x;
}break;
case z:if(bI){var bJ;
var bO=[];

for(var bN in bH){bO.push(bN);
}bO.sort();
bL=[];

for(var i=0,l=bO.length;i<l;i++){if(bL.length>20){bL.push(h+(l-i)+f);
break;
}bN=bO[i];
bJ=this.__ce(bH[bN],false);
bJ.key=bN;
bL.push(bJ);
}}else{var bM=0;

for(var bN in bH){bM++;
}bL=p+bM+v;
}break;
}return {type:bP,text:bL,trace:bK};
}},defer:function(bQ){var bR=qx.Bootstrap.$$logs;

for(var i=0;i<bR.length;i++){bQ.__cc(bR[i][0],bR[i][1]);
}qx.Bootstrap.debug=bQ.debug;
qx.Bootstrap.info=bQ.info;
qx.Bootstrap.warn=bQ.warn;
qx.Bootstrap.error=bQ.error;
qx.Bootstrap.trace=bQ.trace;
}});
})();
(function(){var q="set",p="get",o="reset",n="MSIE 6.0",m="info",k="qx.core.Object",j="error",h="warn",g="]",f="debug",b="[",d="$$user_",c="rv:1.8.1",a="Object";
qx.Class.define(k,{extend:Object,include:[qx.data.MBinding],construct:function(){qx.core.ObjectRegistry.register(this);
},statics:{$$type:a},members:{toHashCode:function(){return this.$$hash;
},toString:function(){return this.classname+b+this.$$hash+g;
},base:function(r,s){if(arguments.length===1){return r.callee.base.call(this);
}else{return r.callee.base.apply(this,Array.prototype.slice.call(arguments,1));
}},self:function(t){return t.callee.self;
},clone:function(){var v=this.constructor;
var u=new v;
var x=qx.Class.getProperties(v);
var w=qx.core.Property.$$store.user;
var y=qx.core.Property.$$method.set;
var name;
for(var i=0,l=x.length;i<l;i++){name=x[i];

if(this.hasOwnProperty(w[name])){u[y[name]](this[w[name]]);
}}return u;
},set:function(z,A){var C=qx.core.Property.$$method.set;

if(qx.Bootstrap.isString(z)){if(!this[C[z]]){if(this[q+qx.Bootstrap.firstUp(z)]!=undefined){this[q+qx.Bootstrap.firstUp(z)](A);
return this;
}}return this[C[z]](A);
}else{for(var B in z){if(!this[C[B]]){if(this[q+qx.Bootstrap.firstUp(B)]!=undefined){this[q+qx.Bootstrap.firstUp(B)](z[B]);
continue;
}}this[C[B]](z[B]);
}return this;
}},get:function(D){var E=qx.core.Property.$$method.get;

if(!this[E[D]]){if(this[p+qx.Bootstrap.firstUp(D)]!=undefined){return this[p+qx.Bootstrap.firstUp(D)]();
}}return this[E[D]]();
},reset:function(F){var G=qx.core.Property.$$method.reset;

if(!this[G[F]]){if(this[o+qx.Bootstrap.firstUp(F)]!=undefined){this[o+qx.Bootstrap.firstUp(F)]();
return;
}}this[G[F]]();
},__cm:qx.event.Registration,addListener:function(H,I,self,J){if(!this.$$disposed){return this.__cm.addListener(this,H,I,self,J);
}return null;
},addListenerOnce:function(K,L,self,M){var N=function(e){this.removeListener(K,N,this,M);
L.call(self||this,e);
};
return this.addListener(K,N,this,M);
},removeListener:function(O,P,self,Q){if(!this.$$disposed){return this.__cm.removeListener(this,O,P,self,Q);
}return false;
},removeListenerById:function(R){if(!this.$$disposed){return this.__cm.removeListenerById(this,R);
}return false;
},hasListener:function(S,T){return this.__cm.hasListener(this,S,T);
},dispatchEvent:function(U){if(!this.$$disposed){return this.__cm.dispatchEvent(this,U);
}return true;
},fireEvent:function(V,W,X){if(!this.$$disposed){return this.__cm.fireEvent(this,V,W,X);
}return true;
},fireNonBubblingEvent:function(Y,ba,bb){if(!this.$$disposed){return this.__cm.fireNonBubblingEvent(this,Y,ba,bb);
}return true;
},fireDataEvent:function(bc,bd,be,bf){if(!this.$$disposed){if(be===undefined){be=null;
}return this.__cm.fireNonBubblingEvent(this,bc,qx.event.type.Data,[bd,be,!!bf]);
}return true;
},__cn:null,setUserData:function(bg,bh){if(!this.__cn){this.__cn={};
}this.__cn[bg]=bh;
},getUserData:function(bi){if(!this.__cn){return null;
}var bj=this.__cn[bi];
return bj===undefined?null:bj;
},__co:qx.log.Logger,debug:function(bk){this.__cp(f,arguments);
},info:function(bl){this.__cp(m,arguments);
},warn:function(bm){this.__cp(h,arguments);
},error:function(bn){this.__cp(j,arguments);
},trace:function(){this.__co.trace(this);
},__cp:function(bo,bp){var bq=qx.lang.Array.fromArguments(bp);
bq.unshift(this);
this.__co[bo].apply(this.__co,bq);
},isDisposed:function(){return this.$$disposed||false;
},dispose:function(){var bv,bt,bs,bw;
if(this.$$disposed){return;
}this.$$disposed=true;
this.$$instance=null;
this.$$allowconstruct=null;
var bu=this.constructor;
var br;

while(bu.superclass){if(bu.$$destructor){bu.$$destructor.call(this);
}if(bu.$$includes){br=bu.$$flatIncludes;

for(var i=0,l=br.length;i<l;i++){if(br[i].$$destructor){br[i].$$destructor.call(this);
}}}bu=bu.superclass;
}if(this.__cq){this.__cq();
}},__cq:null,__cr:function(){var bx=qx.Class.getProperties(this.constructor);

for(var i=0,l=bx.length;i<l;i++){delete this[d+bx[i]];
}},_disposeObjects:function(by){qx.util.DisposeUtil.disposeObjects(this,arguments);
},_disposeSingletonObjects:function(bz){qx.util.DisposeUtil.disposeObjects(this,arguments,true);
},_disposeArray:function(bA){qx.util.DisposeUtil.disposeArray(this,bA);
},_disposeMap:function(bB){qx.util.DisposeUtil.disposeMap(this,bB);
}},environment:{"qx.disposerDebugLevel":0},defer:function(bC,bD){var bF=navigator.userAgent.indexOf(n)!=-1;
var bE=navigator.userAgent.indexOf(c)!=-1;
if(bF||bE){bD.__cq=bD.__cr;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.event.Registration.removeAllListeners(this);
}else{qx.event.Registration.deleteAllListeners(this);
}qx.core.ObjectRegistry.unregister(this);
this.__cn=null;
var bI=this.constructor;
var bM;
var bN=qx.core.Property.$$store;
var bK=bN.user;
var bL=bN.theme;
var bG=bN.inherit;
var bJ=bN.useinit;
var bH=bN.init;

while(bI){bM=bI.$$properties;

if(bM){for(var name in bM){if(bM[name].dereference){this[bK[name]]=this[bL[name]]=this[bG[name]]=this[bJ[name]]=this[bH[name]]=undefined;
}}}bI=bI.superclass;
}}});
})();
(function(){var a="qx.event.type.Event";
qx.Class.define(a,{extend:qx.core.Object,statics:{CAPTURING_PHASE:1,AT_TARGET:2,BUBBLING_PHASE:3},members:{init:function(b,c){this._type=null;
this._target=null;
this._currentTarget=null;
this._relatedTarget=null;
this._originalTarget=null;
this._stopPropagation=false;
this._preventDefault=false;
this._bubbles=!!b;
this._cancelable=!!c;
this._timeStamp=(new Date()).getTime();
this._eventPhase=null;
return this;
},clone:function(d){if(d){var e=d;
}else{var e=qx.event.Pool.getInstance().getObject(this.constructor);
}e._type=this._type;
e._target=this._target;
e._currentTarget=this._currentTarget;
e._relatedTarget=this._relatedTarget;
e._originalTarget=this._originalTarget;
e._stopPropagation=this._stopPropagation;
e._bubbles=this._bubbles;
e._preventDefault=this._preventDefault;
e._cancelable=this._cancelable;
return e;
},stop:function(){if(this._bubbles){this.stopPropagation();
}
if(this._cancelable){this.preventDefault();
}},stopPropagation:function(){this._stopPropagation=true;
},getPropagationStopped:function(){return !!this._stopPropagation;
},preventDefault:function(){this._preventDefault=true;
},getDefaultPrevented:function(){return !!this._preventDefault;
},getType:function(){return this._type;
},setType:function(f){this._type=f;
},getEventPhase:function(){return this._eventPhase;
},setEventPhase:function(g){this._eventPhase=g;
},getTimeStamp:function(){return this._timeStamp;
},getTarget:function(){return this._target;
},setTarget:function(h){this._target=h;
},getCurrentTarget:function(){return this._currentTarget||this._target;
},setCurrentTarget:function(i){this._currentTarget=i;
},getRelatedTarget:function(){return this._relatedTarget;
},setRelatedTarget:function(j){this._relatedTarget=j;
},getOriginalTarget:function(){return this._originalTarget;
},setOriginalTarget:function(k){this._originalTarget=k;
},getBubbles:function(){return this._bubbles;
},setBubbles:function(l){this._bubbles=l;
},isCancelable:function(){return this._cancelable;
},setCancelable:function(m){this._cancelable=m;
}},destruct:function(){this._target=this._currentTarget=this._relatedTarget=this._originalTarget=null;
}});
})();
(function(){var a="qx.event.type.Data";
qx.Class.define(a,{extend:qx.event.type.Event,members:{__di:null,__dj:null,init:function(b,c,d){qx.event.type.Event.prototype.init.call(this,false,d);
this.__di=b;
this.__dj=c;
return this;
},clone:function(e){var f=qx.event.type.Event.prototype.clone.call(this,e);
f.__di=this.__di;
f.__dj=this.__dj;
return f;
},getData:function(){return this.__di;
},getOldData:function(){return this.__dj;
}},destruct:function(){this.__di=this.__dj=null;
}});
})();
(function(){var m="get",l="",k="[",h="last",g="change",f="]",d=".",c="Number",b="String",a="qx.debug.databinding",G="set",F="deepBinding",E="item",D="reset",C="qx.data.SingleValueBinding",B="' (",A="Boolean",z=") to the object '",y="Integer",x=" of object ",u="Binding property ",v="DEBUG_ON",s="Binding from '",t="PositiveNumber",q="PositiveInteger",r="Binding does not exist!",n=").",p="Date",w=" not possible: No event available. ";
qx.Class.define(C,{statics:{DEBUG_ON:false,__dk:{},bind:function(H,I,J,K,L){var W=this.__dm(H,I,J,K,L);
var R=I.split(d);
var N=this.__ds(R);
var V=[];
var S=[];
var T=[];
var P=[];
var Q=H;
try{for(var i=0;i<R.length;i++){if(N[i]!==l){P.push(g);
}else{P.push(this.__dn(Q,R[i]));
}V[i]=Q;
if(i==R.length-1){if(N[i]!==l){var bb=N[i]===h?Q.length-1:N[i];
var M=Q.getItem(bb);
this.__dr(M,J,K,L,H);
T[i]=this.__dt(Q,P[i],J,K,L,N[i]);
}else{if(R[i]!=null&&Q[m+qx.lang.String.firstUp(R[i])]!=null){var M=Q[m+qx.lang.String.firstUp(R[i])]();
this.__dr(M,J,K,L,H);
}T[i]=this.__dt(Q,P[i],J,K,L);
}}else{var X={index:i,propertyNames:R,sources:V,listenerIds:T,arrayIndexValues:N,targetObject:J,targetPropertyChain:K,options:L,listeners:S};
var U=qx.lang.Function.bind(this.__dl,this,X);
S.push(U);
T[i]=Q.addListener(P[i],U);
}if(Q[m+qx.lang.String.firstUp(R[i])]==null){Q=null;
}else if(N[i]!==l){Q=Q[m+qx.lang.String.firstUp(R[i])](N[i]);
}else{Q=Q[m+qx.lang.String.firstUp(R[i])]();
}
if(!Q){break;
}}}catch(bc){for(var i=0;i<V.length;i++){if(V[i]&&T[i]){V[i].removeListenerById(T[i]);
}}var ba=W.targets;
var O=W.listenerIds[i];
for(var i=0;i<ba.length;i++){if(ba[i]&&O[i]){ba[i].removeListenerById(O[i]);
}}throw bc;
}var Y={type:F,listenerIds:T,sources:V,targetListenerIds:W.listenerIds,targets:W.targets};
this.__du(Y,H,I,J,K);
return Y;
},__dl:function(bd){if(bd.options&&bd.options.onUpdate){bd.options.onUpdate(bd.sources[bd.index],bd.targetObject);
}for(var j=bd.index+1;j<bd.propertyNames.length;j++){var bh=bd.sources[j];
bd.sources[j]=null;

if(!bh){continue;
}bh.removeListenerById(bd.listenerIds[j]);
}var bh=bd.sources[bd.index];
for(var j=bd.index+1;j<bd.propertyNames.length;j++){if(bd.arrayIndexValues[j-1]!==l){bh=bh[m+qx.lang.String.firstUp(bd.propertyNames[j-1])](bd.arrayIndexValues[j-1]);
}else{bh=bh[m+qx.lang.String.firstUp(bd.propertyNames[j-1])]();
}bd.sources[j]=bh;
if(!bh){this.__do(bd.targetObject,bd.targetPropertyChain);
break;
}if(j==bd.propertyNames.length-1){if(qx.Class.implementsInterface(bh,qx.data.IListData)){var bi=bd.arrayIndexValues[j]===h?bh.length-1:bd.arrayIndexValues[j];
var bf=bh.getItem(bi);
this.__dr(bf,bd.targetObject,bd.targetPropertyChain,bd.options,bd.sources[bd.index]);
bd.listenerIds[j]=this.__dt(bh,g,bd.targetObject,bd.targetPropertyChain,bd.options,bd.arrayIndexValues[j]);
}else{if(bd.propertyNames[j]!=null&&bh[m+qx.lang.String.firstUp(bd.propertyNames[j])]!=null){var bf=bh[m+qx.lang.String.firstUp(bd.propertyNames[j])]();
this.__dr(bf,bd.targetObject,bd.targetPropertyChain,bd.options,bd.sources[bd.index]);
}var bg=this.__dn(bh,bd.propertyNames[j]);
bd.listenerIds[j]=this.__dt(bh,bg,bd.targetObject,bd.targetPropertyChain,bd.options);
}}else{if(bd.listeners[j]==null){var be=qx.lang.Function.bind(this.__dl,this,bd);
bd.listeners.push(be);
}if(qx.Class.implementsInterface(bh,qx.data.IListData)){var bg=g;
}else{var bg=this.__dn(bh,bd.propertyNames[j]);
}bd.listenerIds[j]=bh.addListener(bg,bd.listeners[j]);
}}},__dm:function(bj,bk,bl,bm,bn){var br=bm.split(d);
var bp=this.__ds(br);
var bw=[];
var bv=[];
var bt=[];
var bs=[];
var bq=bl;
for(var i=0;i<br.length-1;i++){if(bp[i]!==l){bs.push(g);
}else{try{bs.push(this.__dn(bq,br[i]));
}catch(e){break;
}}bw[i]=bq;
var bu=function(){for(var j=i+1;j<br.length-1;j++){var bz=bw[j];
bw[j]=null;

if(!bz){continue;
}bz.removeListenerById(bt[j]);
}var bz=bw[i];
for(var j=i+1;j<br.length-1;j++){var bx=qx.lang.String.firstUp(br[j-1]);
if(bp[j-1]!==l){var bA=bp[j-1]===h?bz.getLength()-1:bp[j-1];
bz=bz[m+bx](bA);
}else{bz=bz[m+bx]();
}bw[j]=bz;
if(bv[j]==null){bv.push(bu);
}if(qx.Class.implementsInterface(bz,qx.data.IListData)){var by=g;
}else{try{var by=qx.data.SingleValueBinding.__dn(bz,br[j]);
}catch(e){break;
}}bt[j]=bz.addListener(by,bv[j]);
}qx.data.SingleValueBinding.updateTarget(bj,bk,bl,bm,bn);
};
bv.push(bu);
bt[i]=bq.addListener(bs[i],bu);
var bo=qx.lang.String.firstUp(br[i]);
if(bq[m+bo]==null){bq=null;
}else if(bp[i]!==l){bq=bq[m+bo](bp[i]);
}else{bq=bq[m+bo]();
}
if(!bq){break;
}}return {listenerIds:bt,targets:bw};
},updateTarget:function(bB,bC,bD,bE,bF){var bG=this.getValueFromObject(bB,bC);
bG=qx.data.SingleValueBinding.__dv(bG,bD,bE,bF,bB);
this.__dp(bD,bE,bG);
},getValueFromObject:function(o,bH){var bL=this.__dq(o,bH);
var bJ;

if(bL!=null){var bN=bH.substring(bH.lastIndexOf(d)+1,bH.length);
if(bN.charAt(bN.length-1)==f){var bI=bN.substring(bN.lastIndexOf(k)+1,bN.length-1);
var bK=bN.substring(0,bN.lastIndexOf(k));
var bM=bL[m+qx.lang.String.firstUp(bK)]();

if(bI==h){bI=bM.length-1;
}
if(bM!=null){bJ=bM.getItem(bI);
}}else{bJ=bL[m+qx.lang.String.firstUp(bN)]();
}}return bJ;
},__dn:function(bO,bP){var bQ=this.__dw(bO,bP);
if(bQ==null){if(qx.Class.supportsEvent(bO.constructor,bP)){bQ=bP;
}else if(qx.Class.supportsEvent(bO.constructor,g+qx.lang.String.firstUp(bP))){bQ=g+qx.lang.String.firstUp(bP);
}else{throw new qx.core.AssertionError(u+bP+x+bO+w);
}}return bQ;
},__do:function(bR,bS){var bT=this.__dq(bR,bS);

if(bT!=null){var bU=bS.substring(bS.lastIndexOf(d)+1,bS.length);
if(bU.charAt(bU.length-1)==f){this.__dp(bR,bS,null);
return;
}if(bT[D+qx.lang.String.firstUp(bU)]!=undefined){bT[D+qx.lang.String.firstUp(bU)]();
}else{bT[G+qx.lang.String.firstUp(bU)](null);
}}},__dp:function(bV,bW,bX){var cc=this.__dq(bV,bW);

if(cc!=null){var cd=bW.substring(bW.lastIndexOf(d)+1,bW.length);
if(cd.charAt(cd.length-1)==f){var bY=cd.substring(cd.lastIndexOf(k)+1,cd.length-1);
var cb=cd.substring(0,cd.lastIndexOf(k));
var ca=bV;

if(!qx.Class.implementsInterface(ca,qx.data.IListData)){ca=cc[m+qx.lang.String.firstUp(cb)]();
}
if(bY==h){bY=ca.length-1;
}
if(ca!=null){ca.setItem(bY,bX);
}}else{cc[G+qx.lang.String.firstUp(cd)](bX);
}}},__dq:function(ce,cf){var ci=cf.split(d);
var cj=ce;
for(var i=0;i<ci.length-1;i++){try{var ch=ci[i];
if(ch.indexOf(f)==ch.length-1){var cg=ch.substring(ch.indexOf(k)+1,ch.length-1);
ch=ch.substring(0,ch.indexOf(k));
}if(ch!=l){cj=cj[m+qx.lang.String.firstUp(ch)]();
}if(cg!=null){if(cg==h){cg=cj.length-1;
}cj=cj.getItem(cg);
cg=null;
}}catch(ck){return null;
}}return cj;
},__dr:function(cl,cm,cn,co,cp){cl=this.__dv(cl,cm,cn,co,cp);
if(cl===undefined){this.__do(cm,cn);
}if(cl!==undefined){try{this.__dp(cm,cn,cl);
if(co&&co.onUpdate){co.onUpdate(cp,cm,cl);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(co&&co.onSetFail){co.onSetFail(e);
}else{qx.log.Logger.warn("Failed so set value "+cl+" on "+cm+". Error message: "+e);
}}}},__ds:function(cq){var cr=[];
for(var i=0;i<cq.length;i++){var name=cq[i];
if(qx.lang.String.endsWith(name,f)){var cs=name.substring(name.indexOf(k)+1,name.indexOf(f));
if(name.indexOf(f)!=name.length-1){throw new Error("Please use only one array at a time: "+name+" does not work.");
}
if(cs!==h){if(cs==l||isNaN(parseInt(cs,10))){throw new Error("No number or 'last' value hast been given"+" in an array binding: "+name+" does not work.");
}}if(name.indexOf(k)!=0){cq[i]=name.substring(0,name.indexOf(k));
cr[i]=l;
cr[i+1]=cs;
cq.splice(i+1,0,E);
i++;
}else{cr[i]=cs;
cq.splice(i,1,E);
}}else{cr[i]=l;
}}return cr;
},__dt:function(ct,cu,cv,cw,cx,cy){var cz;
var cB=function(cC,e){if(cC!==l){if(cC===h){cC=ct.length-1;
}var cF=ct.getItem(cC);
if(cF===undefined){qx.data.SingleValueBinding.__do(cv,cw);
}var cD=e.getData().start;
var cE=e.getData().end;

if(cC<cD||cC>cE){return;
}}else{var cF=e.getData();
}if(qx.core.Environment.get(a)){qx.log.Logger.debug("Binding executed from "+ct+" by "+cu+" to "+cv+" ("+cw+")");
qx.log.Logger.debug("Data before conversion: "+cF);
}cF=qx.data.SingleValueBinding.__dv(cF,cv,cw,cx,ct);
if(qx.core.Environment.get(a)){qx.log.Logger.debug("Data after conversion: "+cF);
}try{if(cF!==undefined){qx.data.SingleValueBinding.__dp(cv,cw,cF);
}else{qx.data.SingleValueBinding.__do(cv,cw);
}if(cx&&cx.onUpdate){cx.onUpdate(ct,cv,cF);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(cx&&cx.onSetFail){cx.onSetFail(e);
}else{qx.log.Logger.warn("Failed so set value "+cF+" on "+cv+". Error message: "+e);
}}};
if(!cy){cy=l;
}cB=qx.lang.Function.bind(cB,ct,cy);
var cA=ct.addListener(cu,cB);
return cA;
},__du:function(cG,cH,cI,cJ,cK){if(this.__dk[cH.toHashCode()]===undefined){this.__dk[cH.toHashCode()]=[];
}this.__dk[cH.toHashCode()].push([cG,cH,cI,cJ,cK]);
},__dv:function(cL,cM,cN,cO,cP){if(cO&&cO.converter){var cR;

if(cM.getModel){cR=cM.getModel();
}return cO.converter(cL,cR,cP,cM);
}else{var cT=this.__dq(cM,cN);
var cU=cN.substring(cN.lastIndexOf(d)+1,cN.length);
if(cT==null){return cL;
}var cS=qx.Class.getPropertyDefinition(cT.constructor,cU);
var cQ=cS==null?l:cS.check;
return this.__dx(cL,cQ);
}},__dw:function(cV,cW){var cX=qx.Class.getPropertyDefinition(cV.constructor,cW);

if(cX==null){return null;
}return cX.event;
},__dx:function(cY,da){var db=qx.lang.Type.getClass(cY);
if((db==c||db==b)&&(da==y||da==q)){cY=parseInt(cY,10);
}if((db==A||db==c||db==p)&&da==b){cY=cY+l;
}if((db==c||db==b)&&(da==c||da==t)){cY=parseFloat(cY);
}return cY;
},removeBindingFromObject:function(dc,dd){if(dd.type==F){for(var i=0;i<dd.sources.length;i++){if(dd.sources[i]){dd.sources[i].removeListenerById(dd.listenerIds[i]);
}}for(var i=0;i<dd.targets.length;i++){if(dd.targets[i]){dd.targets[i].removeListenerById(dd.targetListenerIds[i]);
}}}else{dc.removeListenerById(dd);
}var de=this.__dk[dc.toHashCode()];
if(de!=undefined){for(var i=0;i<de.length;i++){if(de[i][0]==dd){qx.lang.Array.remove(de,de[i]);
return;
}}}throw new Error("Binding could not be found!");
},removeAllBindingsForObject:function(df){var dg=this.__dk[df.toHashCode()];

if(dg!=undefined){for(var i=dg.length-1;i>=0;i--){this.removeBindingFromObject(df,dg[i][0]);
}}},getAllBindingsForObject:function(dh){if(this.__dk[dh.toHashCode()]===undefined){this.__dk[dh.toHashCode()]=[];
}return this.__dk[dh.toHashCode()];
},removeAllBindings:function(){for(var dj in this.__dk){var di=qx.core.ObjectRegistry.fromHashCode(dj);
if(di==null){delete this.__dk[dj];
continue;
}this.removeAllBindingsForObject(di);
}this.__dk={};
},getAllBindings:function(){return this.__dk;
},showBindingInLog:function(dk,dl){var dn;
for(var i=0;i<this.__dk[dk.toHashCode()].length;i++){if(this.__dk[dk.toHashCode()][i][0]==dl){dn=this.__dk[dk.toHashCode()][i];
break;
}}
if(dn===undefined){var dm=r;
}else{var dm=s+dn[1]+B+dn[2]+z+dn[3]+B+dn[4]+n;
}qx.log.Logger.debug(dm);
},showAllBindingsInLog:function(){for(var dq in this.__dk){var dp=qx.core.ObjectRegistry.fromHashCode(dq);

for(var i=0;i<this.__dk[dq].length;i++){this.showBindingInLog(dp,this.__dk[dq][i][0]);
}}}}});
qx.log.Logger.deprecatedConstantWarning(C,v);
})();
(function(){var c="qx.event.type.Data",b="qx.event.type.Event",a="qx.data.IListData";
qx.Interface.define(a,{events:{"change":c,"changeLength":b},members:{getItem:function(d){},setItem:function(e,f){},splice:function(g,h,i){},contains:function(j){},getLength:function(){},toArray:function(){}}});
})();
(function(){var c="",b=": ",a="qx.type.BaseError";
qx.Class.define(a,{extend:Error,construct:function(d,e){Error.call(this,e);
this.__dy=d||c;
this.message=e||qx.type.BaseError.DEFAULTMESSAGE;
},statics:{DEFAULTMESSAGE:"error"},members:{__dy:null,message:null,getComment:function(){return this.__dy;
},toString:function(){return this.__dy+(this.message?b+this.message:c);
}}});
})();
(function(){var a="qx.core.AssertionError";
qx.Class.define(a,{extend:qx.type.BaseError,construct:function(b,c){qx.type.BaseError.call(this,b,c);
this.__dz=qx.dev.StackTrace.getStackTrace();
},members:{__dz:null,getStackTrace:function(){return this.__dz;
}}});
})();
(function(){var a="qx.core.ValidationError";
qx.Class.define(a,{extend:qx.type.BaseError});
})();
(function(){var f="qx.lang.Type",e="Error",d="RegExp",c="Date",b="Number",a="Boolean";
qx.Class.define(f,{statics:{getClass:qx.Bootstrap.getClass,isString:qx.Bootstrap.isString,isArray:qx.Bootstrap.isArray,isObject:qx.Bootstrap.isObject,isFunction:qx.Bootstrap.isFunction,isRegExp:function(g){return this.getClass(g)==d;
},isNumber:function(h){return (h!==null&&(this.getClass(h)==b||h instanceof Number));
},isBoolean:function(i){return (i!==null&&(this.getClass(i)==a||i instanceof Boolean));
},isDate:function(j){return (j!==null&&(this.getClass(j)==c||j instanceof Date));
},isError:function(k){return (k!==null&&(this.getClass(k)==e||k instanceof Error));
}}});
})();
(function(){var a="qx.event.IEventHandler";
qx.Interface.define(a,{statics:{TARGET_DOMNODE:1,TARGET_WINDOW:2,TARGET_OBJECT:4,TARGET_DOCUMENT:8},members:{canHandleEvent:function(b,c){},registerEvent:function(d,e,f){},unregisterEvent:function(g,h,i){}}});
})();
(function(){var b="qx.util.ObjectPool",a="Integer";
qx.Class.define(b,{extend:qx.core.Object,construct:function(c){qx.core.Object.call(this);
this.__dR={};

if(c!=null){this.setSize(c);
}},properties:{size:{check:a,init:Infinity}},members:{__dR:null,getObject:function(d){if(this.$$disposed){return new d;
}
if(!d){throw new Error("Class needs to be defined!");
}var e=null;
var f=this.__dR[d.classname];

if(f){e=f.pop();
}
if(e){e.$$pooled=false;
}else{e=new d;
}return e;
},poolObject:function(g){if(!this.__dR){return;
}var h=g.classname;
var j=this.__dR[h];

if(g.$$pooled){throw new Error("Object is already pooled: "+g);
}
if(!j){this.__dR[h]=j=[];
}if(j.length>this.getSize()){if(g.destroy){g.destroy();
}else{g.dispose();
}return;
}g.$$pooled=true;
j.push(g);
}},destruct:function(){var n=this.__dR;
var k,m,i,l;

for(k in n){m=n[k];

for(i=0,l=m.length;i<l;i++){m[i].dispose();
}}delete this.__dR;
}});
})();
(function(){var b="singleton",a="qx.event.Pool";
qx.Class.define(a,{extend:qx.util.ObjectPool,type:b,construct:function(){qx.util.ObjectPool.call(this,30);
}});
})();
(function(){var a="qx.util.DisposeUtil";
qx.Class.define(a,{statics:{disposeObjects:function(b,c,d){var name;

for(var i=0,l=c.length;i<l;i++){name=c[i];

if(b[name]==null||!b.hasOwnProperty(name)){continue;
}
if(!qx.core.ObjectRegistry.inShutDown){if(b[name].dispose){if(!d&&b[name].constructor.$$instance){throw new Error("The object stored in key "+name+" is a singleton! Please use disposeSingleton instead.");
}else{b[name].dispose();
}}else{throw new Error("Has no disposable object under key: "+name+"!");
}}b[name]=null;
}},disposeArray:function(e,f){var h=e[f];

if(!h){return;
}if(qx.core.ObjectRegistry.inShutDown){e[f]=null;
return;
}try{var g;

for(var i=h.length-1;i>=0;i--){g=h[i];

if(g){g.dispose();
}}}catch(j){throw new Error("The array field: "+f+" of object: "+e+" has non disposable entries: "+j);
}h.length=0;
e[f]=null;
},disposeMap:function(k,m){var o=k[m];

if(!o){return;
}if(qx.core.ObjectRegistry.inShutDown){k[m]=null;
return;
}try{var n;

for(var p in o){n=o[p];

if(o.hasOwnProperty(p)&&n){n.dispose();
}}}catch(q){throw new Error("The map field: "+m+" of object: "+k+" has non disposable entries: "+q);
}k[m]=null;
},disposeTriggeredBy:function(r,s){var t=s.dispose;
s.dispose=function(){t.call(s);
r.dispose();
};
}}});
})();
(function(){var a="qx.event.IEventDispatcher";
qx.Interface.define(a,{members:{canDispatchEvent:function(b,event,c){this.assertInstance(event,qx.event.type.Event);
this.assertString(c);
},dispatchEvent:function(d,event,e){this.assertInstance(event,qx.event.type.Event);
this.assertString(e);
}}});
})();
(function(){var a="qx.event.dispatch.Direct";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,construct:function(b){this._manager=b;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST},members:{canDispatchEvent:function(c,event,d){return !event.getBubbles();
},dispatchEvent:function(e,event,f){var j,g;
event.setEventPhase(qx.event.type.Event.AT_TARGET);
var k=this._manager.getListeners(e,f,false);

if(k){for(var i=0,l=k.length;i<l;i++){var h=k[i].context||e;
k[i].handler.call(h,event);
}}}},defer:function(m){qx.event.Registration.addDispatcher(m);
}});
})();
(function(){var a="qx.event.handler.Object";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST,SUPPORTED_TYPES:null,TARGET_CHECK:qx.event.IEventHandler.TARGET_OBJECT,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(b,c){return qx.Class.supportsEvent(b.constructor,c);
},registerEvent:function(d,e,f){},unregisterEvent:function(g,h,i){}},defer:function(j){qx.event.Registration.addHandler(j);
}});
})();
(function(){var a="qx.lang.Date";
qx.Class.define(a,{statics:{now:function(){return +new Date;
}}});
})();
(function(){var k="indexOf",j="lastIndexOf",h="slice",g="concat",f="join",e="toLocaleUpperCase",d="shift",c="substr",b="filter",a="unshift",I="match",H="quote",G="qx.lang.Generics",F="localeCompare",E="sort",D="some",C="charAt",B="split",A="substring",z="pop",t="toUpperCase",u="replace",q="push",r="charCodeAt",o="every",p="reverse",m="search",n="forEach",v="map",w="toLowerCase",y="splice",x="toLocaleLowerCase";
qx.Class.define(G,{statics:{__dS:{"Array":[f,p,E,q,z,d,a,y,g,h,k,j,n,v,b,D,o],"String":[H,A,w,t,C,r,k,j,x,e,F,I,m,u,B,c,g,h]},__dT:function(J,K){return function(s){return J.prototype[K].apply(s,Array.prototype.slice.call(arguments,1));
};
},__dU:function(){var L=qx.lang.Generics.__dS;

for(var P in L){var N=window[P];
var M=L[P];

for(var i=0,l=M.length;i<l;i++){var O=M[i];

if(!N[O]){N[O]=qx.lang.Generics.__dT(N,O);
}}}}},defer:function(Q){Q.__dU();
}});
})();


if (typeof exports != "undefined") {for (var key in qx) {exports[key] = qx[key];}}