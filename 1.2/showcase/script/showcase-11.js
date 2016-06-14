qx.$$packageData['5bc23f3a8b2d']={"locales":{},"resources":{"qx/static/blank.gif":[1,1,"gif","qx"]},"translations":{}};

qx.Part.$$notifyLoad("5bc23f3a8b2d", function() {
(function(){var y="failed",x="sending",w="completed",v="receiving",u="aborted",t="timeout",s="qx.event.type.Event",r="Connection dropped",q="qx.io.remote.Response",p="configured",bz="Unknown status code. ",by="=",bx="qx.io.remote.transport.XmlHttp",bw="qx.io.remote.transport.Abstract",bv="Request-URL too large",bu="MSHTML-specific HTTP status code",bt="Not available",bs="Precondition failed",br="Server error",bq="Moved temporarily",F="&",G="qx.io.remote.Exchange",D="Possibly due to a cross-domain request?",E="Bad gateway",B="Gone",C="See other",z="Partial content",A="Server timeout",L="qx.io.remote.transport.Script",M="HTTP version not supported",V="Unauthorized",S="Possibly due to application URL using 'file:' protocol?",be="Multiple choices",Y="Payment required",bm="Not implemented",bj="Proxy authentication required",O="Length required",bp="_applyState",bo="changeState",bn="Not modified",N="qx.io.remote.Request",Q="Connection closed by server",R="Moved permanently",U="_applyImplementation",W="Method not allowed",ba="Forbidden",bg="Use proxy",bl="Ok",H="Conflict",I="Not found",P="Not acceptable",bd="Request time-out",bc="Bad request",bb="No content",bi="file:",bh="qx.io.remote.transport.Iframe",X="Request entity too large",bf="Unknown status code",o="Unsupported media type",bk="Gateway time-out",J="created",K="Out of resources",T="undefined";
qx.Class.define(G,{extend:qx.core.Object,construct:function(k){qx.core.Object.call(this);
this.setRequest(k);
k.setTransport(this);
},events:{"sending":s,"receiving":s,"completed":q,"aborted":s,"failed":q,"timeout":q},statics:{typesOrder:[bx,bh,L],typesReady:false,typesAvailable:{},typesSupported:{},registerType:function(bC,bD){qx.io.remote.Exchange.typesAvailable[bD]=bC;
},initTypes:function(){if(qx.io.remote.Exchange.typesReady){return;
}
for(var bF in qx.io.remote.Exchange.typesAvailable){var bE=qx.io.remote.Exchange.typesAvailable[bF];

if(bE.isSupported()){qx.io.remote.Exchange.typesSupported[bF]=bE;
}}qx.io.remote.Exchange.typesReady=true;

if(qx.lang.Object.isEmpty(qx.io.remote.Exchange.typesSupported)){throw new Error("No supported transport types were found!");
}},canHandle:function(ca,cb,cc){if(!qx.lang.Array.contains(ca.handles.responseTypes,cc)){return false;
}
for(var cd in cb){if(!ca.handles[cd]){return false;
}}return true;
},_nativeMap:{0:J,1:p,2:x,3:v,4:w},wasSuccessful:function(bV,bW,bX){if(bX){switch(bV){case null:case 0:return true;
case -1:return bW<4;
default:return typeof bV===T;
}}else{switch(bV){case -1:{};
return bW<4;
case 200:case 304:return true;
case 201:case 202:case 203:case 204:case 205:return true;
case 206:{};
return bW!==4;
case 300:case 301:case 302:case 303:case 305:case 400:case 401:case 402:case 403:case 404:case 405:case 406:case 407:case 408:case 409:case 410:case 411:case 412:case 413:case 414:case 415:case 500:case 501:case 502:case 503:case 504:case 505:{};
return false;
case 12002:case 12007:case 12029:case 12030:case 12031:case 12152:case 13030:{};
return false;
default:if(bV>206&&bV<300){return true;
}qx.log.Logger.debug(this,"Unknown status code: "+bV+" ("+bW+")");
return false;
}}},statusCodeToString:function(bA){switch(bA){case -1:return bt;
case 0:var bB=window.location.href;
if(qx.lang.String.startsWith(bB.toLowerCase(),bi)){return (bz+S);
}else{return (bz+D);
}break;
case 200:return bl;
case 304:return bn;
case 206:return z;
case 204:return bb;
case 300:return be;
case 301:return R;
case 302:return bq;
case 303:return C;
case 305:return bg;
case 400:return bc;
case 401:return V;
case 402:return Y;
case 403:return ba;
case 404:return I;
case 405:return W;
case 406:return P;
case 407:return bj;
case 408:return bd;
case 409:return H;
case 410:return B;
case 411:return O;
case 412:return bs;
case 413:return X;
case 414:return bv;
case 415:return o;
case 500:return br;
case 501:return bm;
case 502:return E;
case 503:return K;
case 504:return bk;
case 505:return M;
case 12002:return A;
case 12029:return r;
case 12030:return r;
case 12031:return r;
case 12152:return Q;
case 13030:return bu;
default:return bf;
}}},properties:{request:{check:N,nullable:true},implementation:{check:bw,nullable:true,apply:U},state:{check:[p,x,v,w,u,t,y],init:p,event:bo,apply:bp}},members:{send:function(){var bP=this.getRequest();

if(!bP){return this.error("Please attach a request object first");
}qx.io.remote.Exchange.initTypes();
var bN=qx.io.remote.Exchange.typesOrder;
var bM=qx.io.remote.Exchange.typesSupported;
var bR=bP.getResponseType();
var bS={};

if(bP.getAsynchronous()){bS.asynchronous=true;
}else{bS.synchronous=true;
}
if(bP.getCrossDomain()){bS.crossDomain=true;
}
if(bP.getFileUpload()){bS.fileUpload=true;
}for(var bQ in bP.getFormFields()){bS.programaticFormFields=true;
break;
}var bT,bO;

for(var i=0,l=bN.length;i<l;i++){bT=bM[bN[i]];

if(bT){if(!qx.io.remote.Exchange.canHandle(bT,bS,bR)){continue;
}
try{{};
bO=new bT;
this.setImplementation(bO);
bO.setUseBasicHttpAuth(bP.getUseBasicHttpAuth());
bO.send();
return true;
}catch(bG){this.error("Request handler throws error");
this.error(bG);
return;
}}}this.error("There is no transport implementation available to handle this request: "+bP);
},abort:function(){var bU=this.getImplementation();

if(bU){{};
bU.abort();
}else{{};
this.setState(u);
}},timeout:function(){var bY=this.getImplementation();

if(bY){this.warn("Timeout: implementation "+bY.toHashCode());
bY.timeout();
}else{this.warn("Timeout: forcing state to timeout");
this.setState(t);
}this.__qB();
},__qB:function(){var n=this.getRequest();

if(n){n.setTimeout(0);
}},_onsending:function(e){this.setState(x);
},_onreceiving:function(e){this.setState(v);
},_oncompleted:function(e){this.setState(w);
},_onabort:function(e){this.setState(u);
},_onfailed:function(e){this.setState(y);
},_ontimeout:function(e){this.setState(t);
},_applyImplementation:function(a,b){if(b){b.removeListener(x,this._onsending,this);
b.removeListener(v,this._onreceiving,this);
b.removeListener(w,this._oncompleted,this);
b.removeListener(u,this._onabort,this);
b.removeListener(t,this._ontimeout,this);
b.removeListener(y,this._onfailed,this);
}
if(a){var d=this.getRequest();
a.setUrl(d.getUrl());
a.setMethod(d.getMethod());
a.setAsynchronous(d.getAsynchronous());
a.setUsername(d.getUsername());
a.setPassword(d.getPassword());
a.setParameters(d.getParameters(false));
a.setFormFields(d.getFormFields());
a.setRequestHeaders(d.getRequestHeaders());
if(a instanceof qx.io.remote.transport.XmlHttp){a.setParseJson(d.getParseJson());
}var h=d.getData();

if(h===null){var j=d.getParameters(true);
var g=[];

for(var c in j){var f=j[c];

if(f instanceof Array){for(var i=0;i<f.length;i++){g.push(encodeURIComponent(c)+by+encodeURIComponent(f[i]));
}}else{g.push(encodeURIComponent(c)+by+encodeURIComponent(f));
}}
if(g.length>0){a.setData(g.join(F));
}}else{a.setData(h);
}a.setResponseType(d.getResponseType());
a.addListener(x,this._onsending,this);
a.addListener(v,this._onreceiving,this);
a.addListener(w,this._oncompleted,this);
a.addListener(u,this._onabort,this);
a.addListener(t,this._ontimeout,this);
a.addListener(y,this._onfailed,this);
}},_applyState:function(bH,bI){{};

switch(bH){case x:this.fireEvent(x);
break;
case v:this.fireEvent(v);
break;
case w:case u:case t:case y:var bK=this.getImplementation();

if(!bK){break;
}this.__qB();

if(this.hasListener(bH)){var bL=qx.event.Registration.createEvent(bH,qx.io.remote.Response);

if(bH==w){var bJ=bK.getResponseContent();
bL.setContent(bJ);
if(bJ===null){{};
bH=y;
}}else if(bH==y){bL.setContent(bK.getResponseContent());
}bL.setStatusCode(bK.getStatusCode());
bL.setResponseHeaders(bK.getResponseHeaders());
this.dispatchEvent(bL);
}this.setImplementation(null);
bK.dispose();
break;
}}},settings:{"qx.ioRemoteDebug":false,"qx.ioRemoteDebugData":false},destruct:function(){var m=this.getImplementation();

if(m){this.setImplementation(null);
m.dispose();
}this.setRequest(null);
}});
})();
(function(){var q="qx.event.type.Event",p="String",o="failed",n="timeout",m="created",l="aborted",k="sending",j="configured",i="receiving",h="completed",c="Object",g="Boolean",f="abstract",b="_applyState",a="GET",e="changeState",d="qx.io.remote.transport.Abstract";
qx.Class.define(d,{type:f,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.setRequestHeaders({});
this.setParameters({});
this.setFormFields({});
},events:{"created":q,"configured":q,"sending":q,"receiving":q,"completed":q,"aborted":q,"failed":q,"timeout":q},properties:{url:{check:p,nullable:true},method:{check:p,nullable:true,init:a},asynchronous:{check:g,nullable:true,init:true},data:{check:p,nullable:true},username:{check:p,nullable:true},password:{check:p,nullable:true},state:{check:[m,j,k,i,h,l,n,o],init:m,event:e,apply:b},requestHeaders:{check:c,nullable:true},parameters:{check:c,nullable:true},formFields:{check:c,nullable:true},responseType:{check:p,nullable:true},useBasicHttpAuth:{check:g,nullable:true}},members:{send:function(){throw new Error("send is abstract");
},abort:function(){{};
this.setState(l);
},timeout:function(){{};
this.setState(n);
},failed:function(){{};
this.setState(o);
},setRequestHeader:function(u,v){throw new Error("setRequestHeader is abstract");
},getResponseHeader:function(t){throw new Error("getResponseHeader is abstract");
},getResponseHeaders:function(){throw new Error("getResponseHeaders is abstract");
},getStatusCode:function(){throw new Error("getStatusCode is abstract");
},getStatusText:function(){throw new Error("getStatusText is abstract");
},getResponseText:function(){throw new Error("getResponseText is abstract");
},getResponseXml:function(){throw new Error("getResponseXml is abstract");
},getFetchedLength:function(){throw new Error("getFetchedLength is abstract");
},_applyState:function(r,s){{};

switch(r){case m:this.fireEvent(m);
break;
case j:this.fireEvent(j);
break;
case k:this.fireEvent(k);
break;
case i:this.fireEvent(i);
break;
case h:this.fireEvent(h);
break;
case l:this.fireEvent(l);
break;
case o:this.fireEvent(o);
break;
case n:this.fireEvent(n);
break;
}return true;
}},destruct:function(){this.setRequestHeaders(null);
this.setParameters(null);
this.setFormFields(null);
}});
})();
(function(){var b=".",a="qx.bom.client.Transport";
qx.Class.define(a,{statics:{getMaxConcurrentRequestCount:function(){var h;
var c=qx.bom.client.Engine;
var g=c.FULLVERSION.split(b);
var e=0;
var d=0;
var f=0;
if(g[0]){e=g[0];
}if(g[1]){d=g[1];
}if(g[2]){f=g[2];
}if(window.maxConnectionsPerServer){h=window.maxConnectionsPerServer;
}else if(c.OPERA){h=8;
}else if(c.WEBKIT){h=4;
}else if(c.GECKO&&((e>1)||((e==1)&&(d>9))||((e==1)&&(d==9)&&(f>=1)))){h=6;
}else{h=2;
}return h;
}}});
})();
(function(){var t="configured",s="completed",r="changeState",q="changeModel",p="qx.data.store.Json",o="GET",n="_marshaler",m="sending",l="application/json",k="changeUrl",d="__mX",j="failed",g="loaded",c="timeout",b="queued",f="String",e="aborted",h="_applyUrl",a="receiving",i="qx.event.type.Data";
qx.Class.define(p,{extend:qx.core.Object,construct:function(x,y){qx.core.Object.call(this);
this._marshaler=new qx.data.marshal.Json(y);
this._delegate=y;

if(x!=null){this.setUrl(x);
}},events:{"loaded":i},properties:{model:{nullable:true,event:q},state:{check:[t,b,m,a,s,e,c,j],init:t,event:r},url:{check:f,apply:h,event:k}},members:{__mX:null,_delegate:null,_applyUrl:function(B,C){if(B!=null){this._createRequest(B);
}},_createRequest:function(D){this.__mX=new qx.io.remote.Request(D,o,l);
var E=this._delegate;

if(E&&qx.lang.Type.isFunction(E.configureRequest)){this._delegate.configureRequest(this.__mX);
}this.__mX.addListener(s,this.__mY,this);
this.__mX.addListener(r,function(A){this.setState(A.getData());
},this);
this.__mX.send();
},__mY:function(u){var w=u.getContent();
var v=this._delegate;

if(v&&qx.lang.Type.isFunction(v.manipulateData)){w=this._delegate.manipulateData(w);
}this._marshaler.toClass(w,true);
this.setModel(this._marshaler.toModel(w));
this.fireDataEvent(g,this.getModel());
},reload:function(){var z=this.getUrl();

if(z!=null){this._createRequest(z);
}}},destruct:function(){this._disposeObjects(n,d);
this._delegate=null;
}});
})();
(function(){var i="?",h="&",g="loaded",f='qx.data.store.Jsonp[',e='].callback',d="failed",c="=",b="qx.data.store.Jsonp",a="String";
qx.Class.define(b,{extend:qx.data.store.Json,construct:function(q,r,s){if(s!=undefined){this.setCallbackParam(s);
}qx.data.store.Json.call(this,q,r);
},properties:{callbackParam:{check:a,nullable:false}},members:{__nc:null,_createRequest:function(j){if(this.__nc){this.__nc.dispose();
}this.__nc=new qx.io.ScriptLoader();
var l=this._delegate;

if(l&&qx.lang.Type.isFunction(l.configureRequest)){this._delegate.configureRequest(this.__nc);
}var k=j.indexOf(i)==-1?i:h;
j+=k+this.getCallbackParam()+c;
var m=parseInt(this.toHashCode());
qx.data.store.Jsonp[m]=this;
j+=f+m+e;
this.__nc.load(j,function(t){delete this[m];
},this);
},callback:function(n){if(this.isDisposed()){return;
}this.__nd(n);
},__nd:function(o){if(o==undefined){this.setState(d);
return;
}var p=this._delegate;

if(p&&qx.lang.Type.isFunction(p.manipulateData)){o=this._delegate.manipulateData(o);
}this._marshaler.toClass(o);
this.setModel(this._marshaler.toModel(o));
this.fireDataEvent(g,this.getModel());
}},destruct:function(){if(this.__nc){this.__nc.dispose();
}this.__nc=null;
}});
})();
(function(){var p="=",o="&",n="application/xml",m="application/json",l="text/html",k="qx.client",j="textarea",h="none",g="text/plain",f="text/javascript",J="",I="completed",H="?",G="qx.io.remote.transport.Iframe",F="gecko",E="frame_",D="aborted",C="_data_",B="pre",A="javascript:void(0)",w="sending",x="form",u="failed",v='<iframe name="',s="mshtml",t="form_",q='"></iframe>',r="iframe",y="timeout",z="qx/static/blank.gif";
qx.Class.define(G,{extend:qx.io.remote.transport.Abstract,construct:function(){qx.io.remote.transport.Abstract.call(this);
var b=(new Date).valueOf();
var c=E+b;
var d=t+b;
if(qx.core.Variant.isSet(k,s)){this.__ni=document.createElement(v+c+q);
}else{this.__ni=document.createElement(r);
}this.__ni.src=A;
this.__ni.id=this.__ni.name=c;
this.__ni.onload=qx.lang.Function.bind(this._onload,this);
this.__ni.style.display=h;
document.body.appendChild(this.__ni);
this.__nj=document.createElement(x);
this.__nj.target=c;
this.__nj.id=this.__nj.name=d;
this.__nj.style.display=h;
document.body.appendChild(this.__nj);
this.__nk=document.createElement(j);
this.__nk.id=this.__nk.name=C;
this.__nj.appendChild(this.__nk);
this.__ni.onreadystatechange=qx.lang.Function.bind(this._onreadystatechange,this);
},statics:{handles:{synchronous:false,asynchronous:true,crossDomain:false,fileUpload:true,programaticFormFields:true,responseTypes:[g,f,m,n,l]},isSupported:function(){return true;
},_numericMap:{"uninitialized":1,"loading":2,"loaded":2,"interactive":3,"complete":4}},members:{__nk:null,__nl:0,__nj:null,__ni:null,send:function(){var P=this.getMethod();
var R=this.getUrl();
var V=this.getParameters(false);
var U=[];

for(var Q in V){var S=V[Q];

if(S instanceof Array){for(var i=0;i<S.length;i++){U.push(encodeURIComponent(Q)+p+encodeURIComponent(S[i]));
}}else{U.push(encodeURIComponent(Q)+p+encodeURIComponent(S));
}}
if(U.length>0){R+=(R.indexOf(H)>=0?o:H)+U.join(o);
}if(this.getData()===null){var V=this.getParameters(true);
var U=[];

for(var Q in V){var S=V[Q];

if(S instanceof Array){for(var i=0;i<S.length;i++){U.push(encodeURIComponent(Q)+p+encodeURIComponent(S[i]));
}}else{U.push(encodeURIComponent(Q)+p+encodeURIComponent(S));
}}
if(U.length>0){this.setData(U.join(o));
}}var O=this.getFormFields();

for(var Q in O){var T=document.createElement(j);
T.name=Q;
T.appendChild(document.createTextNode(O[Q]));
this.__nj.appendChild(T);
}this.__nj.action=R;
this.__nj.method=P;
this.__nk.appendChild(document.createTextNode(this.getData()));
this.__nj.submit();
this.setState(w);
},_onload:qx.event.GlobalError.observeMethod(function(e){if(this.__nj.src){return;
}this._switchReadyState(qx.io.remote.transport.Iframe._numericMap.complete);
}),_onreadystatechange:qx.event.GlobalError.observeMethod(function(e){this._switchReadyState(qx.io.remote.transport.Iframe._numericMap[this.__ni.readyState]);
}),_switchReadyState:function(ba){switch(this.getState()){case I:case D:case u:case y:this.warn("Ignore Ready State Change");
return;
}while(this.__nl<ba){this.setState(qx.io.remote.Exchange._nativeMap[++this.__nl]);
}},setRequestHeader:function(K,L){},getResponseHeader:function(M){return null;
},getResponseHeaders:function(){return {};
},getStatusCode:function(){return 200;
},getStatusText:function(){return J;
},getIframeWindow:function(){return qx.bom.Iframe.getWindow(this.__ni);
},getIframeDocument:function(){return qx.bom.Iframe.getDocument(this.__ni);
},getIframeBody:function(){return qx.bom.Iframe.getBody(this.__ni);
},getIframeTextContent:function(){var N=this.getIframeBody();

if(!N){return null;
}
if(!N.firstChild){return J;
}if(N.firstChild.tagName&&N.firstChild.tagName.toLowerCase()==B){return N.firstChild.innerHTML;
}else{return N.innerHTML;
}},getIframeHtmlContent:function(){var Y=this.getIframeBody();
return Y?Y.innerHTML:null;
},getFetchedLength:function(){return 0;
},getResponseContent:function(){if(this.getState()!==I){{};
return null;
}{};
var X=this.getIframeTextContent();

switch(this.getResponseType()){case g:{};
return X;
break;
case l:X=this.getIframeHtmlContent();
{};
return X;
break;
case m:X=this.getIframeHtmlContent();
{};

try{return X&&X.length>0?qx.util.Json.parse(X,false):null;
}catch(a){return this.error("Could not execute json: ("+X+")",a);
}case f:X=this.getIframeHtmlContent();
{};

try{return X&&X.length>0?window.eval(X):null;
}catch(W){return this.error("Could not execute javascript: ("+X+")",W);
}case n:X=this.getIframeDocument();
{};
return X;
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}}},defer:function(){qx.io.remote.Exchange.registerType(qx.io.remote.transport.Iframe,G);
},destruct:function(){if(this.__ni){this.__ni.onload=null;
this.__ni.onreadystatechange=null;
if(qx.core.Variant.isSet(k,F)){this.__ni.src=qx.util.ResourceManager.getInstance().toUri(z);
}document.body.removeChild(this.__ni);
}
if(this.__nj){document.body.removeChild(this.__nj);
}this.__ni=this.__nj=this.__nk=null;
}});
})();
(function(){var p=",",o="",n="string",m="null",k="new Date(Date.UTC(",j="qx.jsonDebugging",h='"',g="))",f=':',e='-',Q='\\u00',P="__nU",O="__od",N='\\\\',M='\\f',L="__nT",K='\\"',J="__nR",I='Z',H='T',w="}",x='(',u='.',v="{",s='\\r',t=":",q='\\t',r="__oc",y="The default returned parsed date format will change. Use the CONVERT_DATES flag to change the behavior.",z="]",C="[",B="qx.jsonEncodeUndefined",E='\\b',D="__nS",G="qx.util.Json",F=')',A='\\n';
qx.Class.define(G,{statics:{__nP:null,BEAUTIFYING_INDENT:"  ",BEAUTIFYING_LINE_END:"\n",CONVERT_DATES:null,__nQ:{"function":J,"boolean":D,"number":L,"string":P,"object":r,"undefined":O},__nR:function(X,Y){return String(X);
},__nS:function(bp,bq){return String(bp);
},__nT:function(by,bz){return isFinite(by)?String(by):m;
},__nU:function(R,S){var T;

if(/["\\\x00-\x1f]/.test(R)){T=R.replace(/([\x00-\x1f\\"])/g,qx.util.Json.__nW);
}else{T=R;
}return h+T+h;
},__nV:{'\b':E,'\t':q,'\n':A,'\f':M,'\r':s,'"':K,'\\':N},__nW:function(a,b){var bt=qx.util.Json.__nV[b];

if(bt){return bt;
}bt=b.charCodeAt();
return Q+Math.floor(bt/16).toString(16)+(bt%16).toString(16);
},__nX:function(ba,bb){var bd=[],bg=true,bf,bc;
var be=qx.util.Json.__of;
bd.push(C);

if(be){qx.util.Json.__nY+=qx.util.Json.BEAUTIFYING_INDENT;
bd.push(qx.util.Json.__nY);
}
for(var i=0,l=ba.length;i<l;i++){bc=ba[i];
bf=this.__nQ[typeof bc];

if(bf){bc=this[bf](bc,i+o);

if(typeof bc==n){if(!bg){bd.push(p);

if(be){bd.push(qx.util.Json.__nY);
}}bd.push(bc);
bg=false;
}}}
if(be){qx.util.Json.__nY=qx.util.Json.__nY.substring(0,qx.util.Json.__nY.length-qx.util.Json.BEAUTIFYING_INDENT.length);
bd.push(qx.util.Json.__nY);
}bd.push(z);
return bd.join(o);
},__oa:function(bk,bl){if(qx.util.Json.CONVERT_DATES===null){qx.log.Logger.deprecatedMethodWarning(arguments.callee,y);
var bn=bk.getUTCFullYear()+p+bk.getUTCMonth()+p+bk.getUTCDate()+p+bk.getUTCHours()+p+bk.getUTCMinutes()+p+bk.getUTCSeconds()+p+bk.getUTCMilliseconds();
return k+bn+g;
}else if(!qx.util.Json.CONVERT_DATES){if(bk.toJSON){return bk.toJSON();
}var bm=qx.util.format.NumberFormat.getInstance();
bm.setMinimumIntegerDigits(2);
var bo=bk.getUTCFullYear()+e+bm.format(bk.getUTCMonth()+1)+e+bm.format(bk.getUTCDate())+H+bm.format(bk.getUTCHours())+f+bm.format(bk.getUTCMinutes())+f+bm.format(bk.getUTCSeconds())+u;
bm.setMinimumIntegerDigits(3);
return bo+bm.format(bk.getUTCMilliseconds())+I;
}else{var bn=bk.getUTCFullYear()+p+bk.getUTCMonth()+p+bk.getUTCDate()+p+bk.getUTCHours()+p+bk.getUTCMinutes()+p+bk.getUTCSeconds()+p+bk.getUTCMilliseconds();
return k+bn+g;
}},__ob:function(bA,bB){var bE=[],bG=true,bD,bC;
var bF=qx.util.Json.__of;
bE.push(v);

if(bF){qx.util.Json.__nY+=qx.util.Json.BEAUTIFYING_INDENT;
bE.push(qx.util.Json.__nY);
}
for(var bB in bA){bC=bA[bB];
bD=this.__nQ[typeof bC];

if(bD){bC=this[bD](bC,bB);

if(typeof bC==n){if(!bG){bE.push(p);

if(bF){bE.push(qx.util.Json.__nY);
}}bE.push(this.__nU(bB),t,bC);
bG=false;
}}}
if(bF){qx.util.Json.__nY=qx.util.Json.__nY.substring(0,qx.util.Json.__nY.length-qx.util.Json.BEAUTIFYING_INDENT.length);
bE.push(qx.util.Json.__nY);
}bE.push(w);
return bE.join(o);
},__oc:function(V,W){if(V){if(qx.lang.Type.isFunction(V.toJSON)&&V.toJSON!==this.__nP){return this.__oe(V.toJSON(W),W);
}else if(qx.lang.Type.isDate(V)){return this.__oa(V,W);
}else if(qx.lang.Type.isArray(V)){return this.__nX(V,W);
}else if(qx.lang.Type.isObject(V)){return this.__ob(V,W);
}return o;
}return m;
},__od:function(c,d){if(qx.core.Setting.get(B)){return m;
}},__oe:function(br,bs){return this[this.__nQ[typeof br]](br,bs);
},stringify:function(bh,bi){this.__of=bi;
this.__nY=this.BEAUTIFYING_LINE_END;
var bj=this.__oe(bh,o);

if(typeof bj!=n){bj=null;
}if(qx.core.Setting.get(j)){qx.log.Logger.debug(this,"JSON request: "+bj);
}return bj;
},parse:function(bv,bw){if(bw===undefined){bw=true;
}
if(qx.core.Setting.get(j)){qx.log.Logger.debug(this,"JSON response: "+bv);
}
if(bw){if(/[^,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]/.test(bv.replace(/"(\\.|[^"\\])*"/g,o))){throw new Error("Could not parse JSON string!");
}}
try{var bx=(bv&&bv.length>0)?eval(x+bv+F):null;
return bx;
}catch(U){throw new Error("Could not evaluate JSON string: "+U.message);
}}},settings:{"qx.jsonEncodeUndefined":true,"qx.jsonDebugging":false},defer:function(bu){bu.__nP=Date.prototype.toJSON;
}});
})();
(function(){var c="Integer",b="Object",a="qx.io.remote.Response";
qx.Class.define(a,{extend:qx.event.type.Event,properties:{state:{check:c,nullable:true},statusCode:{check:c,nullable:true},content:{nullable:true},responseHeaders:{check:b,nullable:true}},members:{clone:function(d){var e=qx.event.type.Event.prototype.clone.call(this,d);
e.setType(this.getType());
e.setState(this.getState());
e.setStatusCode(this.getStatusCode());
e.setContent(this.getContent());
e.setResponseHeaders(this.getResponseHeaders());
return e;
},getResponseHeader:function(f){var g=this.getResponseHeaders();

if(g){return g[f]||null;
}return null;
}}});
})();
(function(){var t="Integer",s="aborted",r="_onaborted",q="_on",p="_applyEnabled",o="Boolean",n="sending",m="interval",l="failed",k="qx.io.remote.RequestQueue",d="timeout",j="completed",h="__oD",c="queued",b="__oF",g="receiving",f="singleton";
qx.Class.define(k,{type:f,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__oC=[];
this.__oD=[];
this.__oE=0;
this.__oF=new qx.event.Timer(500);
this.__oF.addListener(m,this._oninterval,this);
},properties:{enabled:{init:true,check:o,apply:p},maxTotalRequests:{check:t,nullable:true},maxConcurrentRequests:{check:t,init:qx.bom.client.Transport.getMaxConcurrentRequestCount()},defaultTimeout:{check:t,init:5000}},members:{__oC:null,__oD:null,__oE:null,__oF:null,getRequestQueue:function(){return this.__oC;
},getActiveQueue:function(){return this.__oD;
},_debug:function(){var J;
{};
},_check:function(){this._debug();
if(this.__oD.length==0&&this.__oC.length==0){this.__oF.stop();
}if(!this.getEnabled()){return;
}if(this.__oC.length==0||(this.__oC[0].isAsynchronous()&&this.__oD.length>=this.getMaxConcurrentRequests())){return;
}if(this.getMaxTotalRequests()!=null&&this.__oE>=this.getMaxTotalRequests()){return;
}var E=this.__oC.shift();
var F=new qx.io.remote.Exchange(E);
this.__oE++;
this.__oD.push(F);
this._debug();
F.addListener(n,this._onsending,this);
F.addListener(g,this._onreceiving,this);
F.addListener(j,this._oncompleted,this);
F.addListener(s,this._oncompleted,this);
F.addListener(d,this._oncompleted,this);
F.addListener(l,this._oncompleted,this);
F._start=(new Date).valueOf();
F.send();
if(this.__oC.length>0){this._check();
}},_remove:function(a){qx.lang.Array.remove(this.__oD,a);
a.dispose();
this._check();
},__oG:0,_onsending:function(e){{};
e.getTarget().getRequest()._onsending(e);
},_onreceiving:function(e){e.getTarget().getRequest()._onreceiving(e);
},_oncompleted:function(e){{};
var M=e.getTarget().getRequest();
var L=q+e.getType();
try{if(M[L]){M[L](e);
}}catch(N){var K=qx.dev.StackTrace.getStackTraceFromError(N);
this.error("Request "+M+" handler "+L+" threw an error: "+N+"\nStack Trace:\n"+K);
try{if(M[r]){var event=qx.event.Registration.createEvent(s,qx.event.type.Event);
M[r](event);
}}catch(G){}}finally{this._remove(e.getTarget());
}},_oninterval:function(e){var D=this.__oD;

if(D.length==0){this.__oF.stop();
return;
}var y=(new Date).valueOf();
var B;
var z;
var C=this.getDefaultTimeout();
var A;
var x;

for(var i=D.length-1;i>=0;i--){B=D[i];
z=B.getRequest();

if(z.isAsynchronous()){A=z.getTimeout();
if(A==0){continue;
}
if(A==null){A=C;
}x=y-B._start;

if(x>A){this.warn("Timeout: transport "+B.toHashCode());
this.warn(x+"ms > "+A+"ms");
B.timeout();
}}}},_applyEnabled:function(u,v){if(u){this._check();
}this.__oF.setEnabled(u);
},add:function(w){w.setState(c);

if(w.isAsynchronous()){this.__oC.push(w);
}else{this.__oC.unshift(w);
}this._check();

if(this.getEnabled()){this.__oF.start();
}},abort:function(H){var I=H.getTransport();

if(I){I.abort();
}else if(qx.lang.Array.contains(this.__oC,H)){qx.lang.Array.remove(this.__oC,H);
}}},destruct:function(){this._disposeArray(h);
this._disposeObjects(b);
this.__oC=null;
}});
})();
(function(){var r="&",q="=",p="?",o="application/json",n="completed",m="text/plain",l="text/javascript",k="qx.io.remote.transport.Script",j="",h="_ScriptTransport_data",c="script",g="timeout",f="_ScriptTransport_",b="_ScriptTransport_id",a="aborted",e="utf-8",d="failed";
qx.Class.define(k,{extend:qx.io.remote.transport.Abstract,construct:function(){qx.io.remote.transport.Abstract.call(this);
var F=++qx.io.remote.transport.Script.__oH;

if(F>=2000000000){qx.io.remote.transport.Script.__oH=F=1;
}this.__oI=null;
this.__oH=F;
},statics:{__oH:0,_instanceRegistry:{},ScriptTransport_PREFIX:f,ScriptTransport_ID_PARAM:b,ScriptTransport_DATA_PARAM:h,handles:{synchronous:false,asynchronous:true,crossDomain:true,fileUpload:false,programaticFormFields:false,responseTypes:[m,l,o]},isSupported:function(){return true;
},_numericMap:{"uninitialized":1,"loading":2,"loaded":2,"interactive":3,"complete":4},_requestFinished:qx.event.GlobalError.observeMethod(function(s,content){var t=qx.io.remote.transport.Script._instanceRegistry[s];

if(t==null){{};
}else{t._responseContent=content;
t._switchReadyState(qx.io.remote.transport.Script._numericMap.complete);
}})},members:{__oJ:0,__oI:null,__oH:null,send:function(){var B=this.getUrl();
B+=(B.indexOf(p)>=0?r:p)+qx.io.remote.transport.Script.ScriptTransport_ID_PARAM+q+this.__oH;
var E=this.getParameters();
var D=[];

for(var A in E){if(A.indexOf(qx.io.remote.transport.Script.ScriptTransport_PREFIX)==0){this.error("Illegal parameter name. The following prefix is used internally by qooxdoo): "+qx.io.remote.transport.Script.ScriptTransport_PREFIX);
}var C=E[A];

if(C instanceof Array){for(var i=0;i<C.length;i++){D.push(encodeURIComponent(A)+q+encodeURIComponent(C[i]));
}}else{D.push(encodeURIComponent(A)+q+encodeURIComponent(C));
}}
if(D.length>0){B+=r+D.join(r);
}var z=this.getData();

if(z!=null){B+=r+qx.io.remote.transport.Script.ScriptTransport_DATA_PARAM+q+encodeURIComponent(z);
}qx.io.remote.transport.Script._instanceRegistry[this.__oH]=this;
this.__oI=document.createElement(c);
this.__oI.charset=e;
this.__oI.src=B;
{};
document.body.appendChild(this.__oI);
},_switchReadyState:function(x){switch(this.getState()){case n:case a:case d:case g:this.warn("Ignore Ready State Change");
return;
}while(this.__oJ<x){this.setState(qx.io.remote.Exchange._nativeMap[++this.__oJ]);
}},setRequestHeader:function(u,v){},getResponseHeader:function(w){return null;
},getResponseHeaders:function(){return {};
},getStatusCode:function(){return 200;
},getStatusText:function(){return j;
},getFetchedLength:function(){return 0;
},getResponseContent:function(){if(this.getState()!==n){{};
return null;
}{};

switch(this.getResponseType()){case m:case o:case l:{};
var y=this._responseContent;
return (y===0?0:(y||null));
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}}},defer:function(){qx.io.remote.Exchange.registerType(qx.io.remote.transport.Script,k);
},destruct:function(){if(this.__oI){delete qx.io.remote.transport.Script._instanceRegistry[this.__oH];
document.body.removeChild(this.__oI);
}this.__oI=this._responseContent=null;
}});
})();
(function(){var k="value",j=" ",h="icon",g="model",f="text",e="qx.client",d="execute",c="source",b="mshtml",a="user.profile_image_url",M="showcase/databinding/twitter_logo_outline.png",L="Enter",K="one",J="http",I="keydown",H="http://twitter.com/statuses/user_timeline/1and1.json",G="Friends",F="<a href='",E="1and1",D="callback",r="selection[0]",s="username",p="showcase.page.databinding.Content",q="Location: ",n="Details",o="user.name",l="Name: ",m="target='_blank'",t="</a>",u="Posted with: ",x="' target='_blank'>",w="http://twitter.com/statuses/friends_timeline.json",z="Show",y="user.location",B=".json",A="http://twitter.com/statuses/user_timeline/",v="Avatar: ",C="Message: ";
qx.Class.define(p,{extend:showcase.AbstractContent,construct:function(bf){showcase.AbstractContent.call(this,bf);
this.setView(this._createView());
},members:{_createView:function(){var bc=new qx.ui.container.Composite(new qx.ui.layout.Canvas());
var X=new qx.ui.basic.Image(M);
bc.add(X,{left:10,top:15});
var S=new qx.ui.form.List();
bc.add(S,{left:10,top:135,bottom:5});
S.set({selectionMode:K,width:300,maxHeight:400});
var V=new qx.data.controller.List(null,S);
V.setDelegate(this);
V.setLabelPath(f);
if(!qx.core.Variant.isSet(e,b)){V.setIconPath(a);
}var P=H;
var bb=new qx.data.store.Jsonp(P,null,D);
bb.bind(g,V,g);
var T=new qx.ui.container.Composite(new qx.ui.layout.HBox(5));
T.set({width:300});
var Q=new qx.ui.form.Button(G);
T.add(Q);
Q.addListener(d,function(){bb.setUrl(w);
},this);
T.add(new qx.ui.core.Spacer(),{flex:1});
var N=new qx.ui.form.TextField(E);
N.setPlaceholder(s);
T.add(N);
var W=new qx.ui.form.Button(z);
T.add(W);
W.addListener(d,function(){var bj=A+N.getValue()+B;

if(bb.getUrl()==bj){bb.reload();
}else{bb.setUrl(bj);
}},this);
N.addListener(I,function(be){if(be.getKeyIdentifier()==L){W.execute();
}},this);
bc.add(T,{left:10,top:105});
var R=new qx.ui.groupbox.GroupBox(n);
bc.add(R,{left:320,top:116,bottom:5});
R.setWidth(270);
R.setHeight(220);
R.setAllowGrowY(false);
R.setLayout(new qx.ui.layout.Grid(5,5));
R.add(new qx.ui.basic.Label(l),{row:0,column:0});
R.add(new qx.ui.basic.Label(q),{row:1,column:0});
R.add(new qx.ui.basic.Label(C),{row:2,column:0});
R.add(new qx.ui.basic.Label(u),{row:3,column:0});
var name=new qx.ui.basic.Label();
R.add(name,{row:0,column:1});
var location=new qx.ui.basic.Label();
R.add(location,{row:1,column:1});
var Y=new qx.ui.basic.Label();
Y.setRich(true);
Y.setWidth(150);
Y.setSelectable(true);
R.add(Y,{row:2,column:1});
var ba=new qx.ui.basic.Label();
ba.setRich(true);
R.add(ba,{row:3,column:1});
var O=new qx.data.controller.Object();
O.addTarget(name,k,o);
O.addTarget(location,k,y);
O.addTarget(Y,k,f,false,{converter:function(bg){var bh=bg.split(j);

for(var i=bh.length-1;i>=0;i--){if(bh[i].indexOf(J)==0){bh[i]=F+bh[i]+x+bh[i]+t;
}}return bh.join(j);
}});
O.addTarget(ba,k,c,false,{converter:function(bi){bi=bi.split(j);
bi.splice(1,0,m);
return bi.join(j);
}});

if(!qx.core.Variant.isSet(e,b)){R.add(new qx.ui.basic.Label(v),{row:4,column:0});
var U=new qx.ui.basic.Image();
R.add(U,{row:4,column:1});
O.addTarget(U,c,a);
}V.bind(r,O,g);
return bc;
},configureItem:function(bd){bd.setRich(true);
bd.getChildControl(h).setWidth(48);
bd.getChildControl(h).setHeight(48);
bd.getChildControl(h).setScale(true);
}}});
})();
(function(){var O="failed",N="completed",M="=",L="aborted",K="",J="sending",I="&",H="configured",G="timeout",F="application/xml",bl="qx.io.remote.transport.XmlHttp",bk="application/json",bj="text/html",bi="qx.client",bh="receiving",bg="text/plain",bf="text/javascript",be="?",bd="created",bc="Boolean",V='Referer',W='Basic ',T="\n</pre>",U="string",R='Authorization',S="<pre>Could not execute json: \n",P="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",Q=':',X="parseerror",Y="file:",bb="webkit",ba="object";
qx.Class.define(bl,{extend:qx.io.remote.transport.Abstract,statics:{handles:{synchronous:true,asynchronous:true,crossDomain:false,fileUpload:false,programaticFormFields:false,responseTypes:[bg,bf,bk,F,bj]},requestObjects:[],requestObjectCount:0,createRequestObject:qx.core.Variant.select(bi,{"default":function(){return new XMLHttpRequest;
},"mshtml":function(){if(window.ActiveXObject&&qx.xml.Document.XMLHTTP){return new ActiveXObject(qx.xml.Document.XMLHTTP);
}
if(window.XMLHttpRequest){return new XMLHttpRequest;
}}}),isSupported:function(){return !!this.createRequestObject();
}},properties:{parseJson:{check:bc,init:true}},members:{__ms:false,__mt:0,__mu:null,getRequest:function(){if(this.__mu===null){this.__mu=qx.io.remote.transport.XmlHttp.createRequestObject();
this.__mu.onreadystatechange=qx.lang.Function.bind(this._onreadystatechange,this);
}return this.__mu;
},send:function(){this.__mt=0;
var h=this.getRequest();
var c=this.getMethod();
var m=this.getAsynchronous();
var k=this.getUrl();
var f=(window.location.protocol===Y&&!(/^http(s){0,1}\:/.test(k)));
this.__ms=f;
var p=this.getParameters(false);
var n=[];

for(var d in p){var j=p[d];

if(j instanceof Array){for(var i=0;i<j.length;i++){n.push(encodeURIComponent(d)+M+encodeURIComponent(j[i]));
}}else{n.push(encodeURIComponent(d)+M+encodeURIComponent(j));
}}
if(n.length>0){k+=(k.indexOf(be)>=0?I:be)+n.join(I);
}if(this.getData()===null){var p=this.getParameters(true);
var n=[];

for(var d in p){var j=p[d];

if(j instanceof Array){for(var i=0;i<j.length;i++){n.push(encodeURIComponent(d)+M+encodeURIComponent(j[i]));
}}else{n.push(encodeURIComponent(d)+M+encodeURIComponent(j));
}}
if(n.length>0){this.setData(n.join(I));
}}var o=function(bF){var bK=P;
var bO=K;
var bI,bH,bG;
var bL,bM,bN,bJ;
var i=0;

do{bI=bF.charCodeAt(i++);
bH=bF.charCodeAt(i++);
bG=bF.charCodeAt(i++);
bL=bI>>2;
bM=((bI&3)<<4)|(bH>>4);
bN=((bH&15)<<2)|(bG>>6);
bJ=bG&63;

if(isNaN(bH)){bN=bJ=64;
}else if(isNaN(bG)){bJ=64;
}bO+=bK.charAt(bL)+bK.charAt(bM)+bK.charAt(bN)+bK.charAt(bJ);
}while(i<bF.length);
return bO;
};
try{if(this.getUsername()){if(this.getUseBasicHttpAuth()){h.open(c,k,m);
h.setRequestHeader(R,W+o(this.getUsername()+Q+this.getPassword()));
}else{h.open(c,k,m,this.getUsername(),this.getPassword());
}}else{h.open(c,k,m);
}}catch(bP){this.error("Failed with exception: "+bP);
this.failed();
return;
}if(!qx.core.Variant.isSet(bi,bb)){h.setRequestHeader(V,window.location.href);
}var g=this.getRequestHeaders();

for(var d in g){h.setRequestHeader(d,g[d]);
}try{{};
h.send(this.getData());
}catch(v){if(f){this.failedLocally();
}else{this.error("Failed to send data: "+v,"send");
this.failed();
}return;
}if(!m){this._onreadystatechange();
}},failedLocally:function(){if(this.getState()===O){return;
}this.warn("Could not load from file: "+this.getUrl());
this.failed();
},_onreadystatechange:qx.event.GlobalError.observeMethod(function(e){switch(this.getState()){case N:case L:case O:case G:{};
return;
}var q=this.getReadyState();

if(q==4){if(!qx.io.remote.Exchange.wasSuccessful(this.getStatusCode(),q,this.__ms)){if(this.getState()===H){this.setState(J);
}this.failed();
return;
}}while(this.__mt<q){this.setState(qx.io.remote.Exchange._nativeMap[++this.__mt]);
}}),getReadyState:function(){var bz=null;

try{bz=this.getRequest().readyState;
}catch(w){}return bz;
},setRequestHeader:function(bs,bt){this.getRequestHeaders()[bs]=bt;
},getResponseHeader:function(z){var A=null;

try{A=this.getRequest().getResponseHeader(z)||null;
}catch(E){}return A;
},getStringResponseHeaders:function(){var D=null;

try{var C=this.getRequest().getAllResponseHeaders();

if(C){D=C;
}}catch(B){}return D;
},getResponseHeaders:function(){var bC=this.getStringResponseHeaders();
var bD={};

if(bC){var bA=bC.split(/[\r\n]+/g);

for(var i=0,l=bA.length;i<l;i++){var bB=bA[i].match(/^([^:]+)\s*:\s*(.+)$/i);

if(bB){bD[bB[1]]=bB[2];
}}}return bD;
},getStatusCode:function(){var a=-1;

try{a=this.getRequest().status;
}catch(bn){}return a;
},getStatusText:function(){var bx=K;

try{bx=this.getRequest().statusText;
}catch(bm){}return bx;
},getResponseText:function(){var bE=null;

try{bE=this.getRequest().responseText;
}catch(b){bE=null;
}return bE;
},getResponseXml:function(){var bq=null;
var bo=this.getStatusCode();
var bp=this.getReadyState();

if(qx.io.remote.Exchange.wasSuccessful(bo,bp,this.__ms)){try{bq=this.getRequest().responseXML;
}catch(bw){}}if(typeof bq==ba&&bq!=null){if(!bq.documentElement){var s=String(this.getRequest().responseText).replace(/<\?xml[^\?]*\?>/,K);
bq.loadXML(s);
}if(!bq.documentElement){throw new Error("Missing Document Element!");
}
if(bq.documentElement.tagName==X){throw new Error("XML-File is not well-formed!");
}}else{throw new Error("Response was not a valid xml document ["+this.getRequest().responseText+"]");
}return bq;
},getFetchedLength:function(){var x=this.getResponseText();
return typeof x==U?x.length:0;
},getResponseContent:function(){var r=this.getState();

if(r!==N&&r!=O){{};
return null;
}{};
var u=this.getResponseText();

if(r==O){{};
return u;
}
switch(this.getResponseType()){case bg:case bj:{};
return u;
case bk:{};

try{if(u&&u.length>0){var t;

if(this.getParseJson()){t=qx.util.Json.parse(u,false);
t=(t===0?0:(t||null));
}else{t=u;
}return t;
}else{return null;
}}catch(br){this.error("Could not execute json: ["+u+"]",br);
return S+u+T;
}case bf:{};

try{if(u&&u.length>0){var t=window.eval(u);
return (t===0?0:(t||null));
}else{return null;
}}catch(y){this.error("Could not execute javascript: ["+u+"]",y);
return null;
}case F:u=this.getResponseXml();
{};
return (u===0?0:(u||null));
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}},_applyState:function(bu,bv){{};

switch(bu){case bd:this.fireEvent(bd);
break;
case H:this.fireEvent(H);
break;
case J:this.fireEvent(J);
break;
case bh:this.fireEvent(bh);
break;
case N:this.fireEvent(N);
break;
case O:this.fireEvent(O);
break;
case L:this.getRequest().abort();
this.fireEvent(L);
break;
case G:this.getRequest().abort();
this.fireEvent(G);
break;
}}},defer:function(){qx.io.remote.Exchange.registerType(qx.io.remote.transport.XmlHttp,bl);
},destruct:function(){var by=this.getRequest();

if(by){by.onreadystatechange=qx.lang.Function.empty;
switch(by.readyState){case 1:case 2:case 3:by.abort();
}}this.__mu=null;
}});
})();
(function(){var m="Boolean",l="qx.event.type.Event",k="queued",j="String",i="sending",h="receiving",g="aborted",f="failed",d="nocache",c="completed",R="qx.io.remote.Response",Q="POST",P="configured",O="timeout",N="GET",M="Pragma",L="no-url-params-on-post",K="PUT",J="no-cache",I="Cache-Control",t="Content-Type",u="text/plain",r="application/xml",s="application/json",p="text/html",q="application/x-www-form-urlencoded",n="qx.io.remote.Exchange",o="Integer",w="X-Qooxdoo-Response-Type",x="HEAD",A="qx.io.remote.Request",z="_applyResponseType",C="_applyState",B="text/javascript",E="changeState",D="_applyProhibitCaching",y="",H="_applyMethod",G="DELETE",F="boolean";
qx.Class.define(A,{extend:qx.core.Object,construct:function(bn,bo,bp){qx.core.Object.call(this);
this.__rf={};
this.__rg={};
this.__rh={};
this.__ri={};

if(bn!==undefined){this.setUrl(bn);
}
if(bo!==undefined){this.setMethod(bo);
}
if(bp!==undefined){this.setResponseType(bp);
}this.setProhibitCaching(true);
this.__rj=++qx.io.remote.Request.__rj;
},events:{"created":l,"configured":l,"sending":l,"receiving":l,"completed":R,"aborted":l,"failed":R,"timeout":R},statics:{__rj:0,methodAllowsRequestBody:function(bl){return (bl==Q)||(bl==K);
}},properties:{url:{check:j,init:y},method:{check:[N,Q,K,x,G],apply:H,init:N},asynchronous:{check:m,init:true},data:{check:j,nullable:true},username:{check:j,nullable:true},password:{check:j,nullable:true},state:{check:[P,k,i,h,c,g,O,f],init:P,apply:C,event:E},responseType:{check:[u,B,s,r,p],init:u,apply:z},timeout:{check:o,nullable:true},prohibitCaching:{check:function(v){return typeof v==F||v===L;
},init:true,apply:D},crossDomain:{check:m,init:false},fileUpload:{check:m,init:false},transport:{check:n,nullable:true},useBasicHttpAuth:{check:m,init:false},parseJson:{check:m,init:true}},members:{__rf:null,__rg:null,__rh:null,__ri:null,__rj:null,send:function(){qx.io.remote.RequestQueue.getInstance().add(this);
},abort:function(){qx.io.remote.RequestQueue.getInstance().abort(this);
},reset:function(){switch(this.getState()){case i:case h:this.error("Aborting already sent request!");
case k:this.abort();
break;
}},isConfigured:function(){return this.getState()===P;
},isQueued:function(){return this.getState()===k;
},isSending:function(){return this.getState()===i;
},isReceiving:function(){return this.getState()===h;
},isCompleted:function(){return this.getState()===c;
},isAborted:function(){return this.getState()===g;
},isTimeout:function(){return this.getState()===O;
},isFailed:function(){return this.getState()===f;
},__rk:function(e){var bg=e.clone();
bg.setTarget(this);
this.dispatchEvent(bg);
},_onqueued:function(e){this.setState(k);
this.__rk(e);
},_onsending:function(e){this.setState(i);
this.__rk(e);
},_onreceiving:function(e){this.setState(h);
this.__rk(e);
},_oncompleted:function(e){this.setState(c);
this.__rk(e);
this.dispose();
},_onaborted:function(e){this.setState(g);
this.__rk(e);
this.dispose();
},_ontimeout:function(e){this.setState(O);
this.__rk(e);
this.dispose();
},_onfailed:function(e){this.setState(f);
this.__rk(e);
this.dispose();
},_applyState:function(bq,br){{};
},_applyProhibitCaching:function(bj,bk){if(!bj){this.removeParameter(d);
this.removeRequestHeader(M);
this.removeRequestHeader(I);
return;
}if(bj!==L||this.getMethod()!=Q){this.setParameter(d,new Date().valueOf());
}else{this.removeParameter(d);
}this.setRequestHeader(M,J);
this.setRequestHeader(I,J);
},_applyMethod:function(bs,bt){if(qx.io.remote.Request.methodAllowsRequestBody(bs)){this.setRequestHeader(t,q);
}else{this.removeRequestHeader(t);
}var bu=this.getProhibitCaching();
this._applyProhibitCaching(bu,bu);
},_applyResponseType:function(bh,bi){this.setRequestHeader(w,bh);
},setRequestHeader:function(W,X){this.__rf[W]=X;
},removeRequestHeader:function(S){delete this.__rf[S];
},getRequestHeader:function(bc){return this.__rf[bc]||null;
},getRequestHeaders:function(){return this.__rf;
},setParameter:function(Y,ba,bb){if(bb){this.__rh[Y]=ba;
}else{this.__rg[Y]=ba;
}},removeParameter:function(be,bf){if(bf){delete this.__rh[be];
}else{delete this.__rg[be];
}},getParameter:function(T,U){if(U){return this.__rh[T]||null;
}else{return this.__rg[T]||null;
}},getParameters:function(V){return (V?this.__rh:this.__rg);
},setFormField:function(a,b){this.__ri[a]=b;
},removeFormField:function(bm){delete this.__ri[bm];
},getFormField:function(bd){return this.__ri[bd]||null;
},getFormFields:function(){return this.__ri;
},getSequenceNumber:function(){return this.__rj;
}},destruct:function(){this.setTransport(null);
this.__rf=this.__rg=this.__rh=this.__ri=null;
}});
})();
(function(){var o="[",n="changeModel",m="qx.core.Object",l="qx.data.controller.Object",k="get",j="reset",h="_applyModel",g="last";
qx.Class.define(l,{extend:qx.core.Object,construct:function(R){qx.core.Object.call(this);
this.__FW={};
this.__FX=[];

if(R!=null){this.setModel(R);
}},properties:{model:{check:m,event:n,apply:h,nullable:true}},members:{__FX:null,__FW:null,_applyModel:function(p,q){for(var i=0;i<this.__FX.length;i++){var y=this.__FX[i][0];
var v=this.__FX[i][1];
var t=this.__FX[i][2];
var w=this.__FX[i][3];
var x=this.__FX[i][4];
var s=this.__FX[i][5];
if(q!=undefined){this.__Ga(y,v,t,q);
}if(p!=undefined){this.__FY(y,v,t,w,x,s);
}else{if(v.indexOf(o)==-1){y[j+qx.lang.String.firstUp(v)]();
}else{var open=v.indexOf(o);
var r=parseInt(v.substring(open+1,v.length-1));
v=v.substring(0,open);
var u=y[k+qx.lang.String.firstUp(v)]();

if(r==g){r=u.length;
}
if(u){u.setItem(r,null);
}}}}},addTarget:function(a,b,c,d,e,f){this.__FX.push([a,b,c,d,e,f]);
this.__FY(a,b,c,d,e,f);
},__FY:function(C,D,E,F,G,H){if(this.getModel()==null){return;
}var I=this.getModel().bind(E,C,D,G);
var J=null;

if(F){J=C.bind(D,this.getModel(),E,H);
}var K=C.toHashCode();

if(this.__FW[K]==undefined){this.__FW[K]=[];
}this.__FW[K].push([I,J,D,E,G,H]);
},removeTarget:function(z,A,B){this.__Ga(z,A,B,this.getModel());
for(var i=0;i<this.__FX.length;i++){if(this.__FX[i][0]==z&&this.__FX[i][1]==A&&this.__FX[i][2]==B){this.__FX.splice(i,1);
}}},__Ga:function(L,M,N,O){if(!(L instanceof qx.core.Object)){return ;
}var P=this.__FW[L.toHashCode()];
if(P==undefined||P.length==0){return;
}for(var i=0;i<P.length;i++){if(P[i][2]==M&&P[i][3]==N){var Q=P[i][0];
O.removeBinding(Q);
if(P[i][1]!=null){L.removeBinding(P[i][1]);
}P.splice(i,1);
return;
}}}},destruct:function(){if(this.getModel()!=null&&!this.getModel().isDisposed()){this.setModel(null);
}}});
})();

});