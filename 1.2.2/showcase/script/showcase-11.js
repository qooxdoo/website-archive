qx.$$packageData['68544936b057']={"locales":{},"resources":{"qx/static/blank.gif":[1,1,"gif","qx"]},"translations":{}};

qx.Part.$$notifyLoad("68544936b057", function() {
(function(){var r="failed",q="sending",p="completed",o="receiving",n="aborted",m="timeout",k="qx.event.type.Event",j="Connection dropped",h="qx.io.remote.Response",g="configured",bs="Unknown status code. ",br="=",bq="qx.io.remote.transport.XmlHttp",bp="qx.io.remote.transport.Abstract",bo="Request-URL too large",bn="MSHTML-specific HTTP status code",bm="Not available",bl="Precondition failed",bk="Server error",bj="Moved temporarily",y="&",z="qx.io.remote.Exchange",w="Possibly due to a cross-domain request?",x="Bad gateway",u="Gone",v="See other",s="Partial content",t="Server timeout",E="qx.io.remote.transport.Script",F="HTTP version not supported",O="Unauthorized",L="Possibly due to application URL using 'file:' protocol?",W="Multiple choices",R="Payment required",bf="Not implemented",bc="Proxy authentication required",H="Length required",bi="_applyState",bh="changeState",bg="Not modified",G="qx.io.remote.Request",J="Connection closed by server",K="Moved permanently",N="_applyImplementation",P="Method not allowed",S="Forbidden",Y="Use proxy",be="Ok",A="Conflict",B="Not found",I="Not acceptable",V="Request time-out",U="Bad request",T="No content",bb="file:",ba="qx.io.remote.transport.Iframe",Q="Request entity too large",X="Unknown status code",f="Unsupported media type",bd="Gateway time-out",C="created",D="Out of resources",M="undefined";
qx.Class.define(z,{extend:qx.core.Object,construct:function(by){qx.core.Object.call(this);
this.setRequest(by);
by.setTransport(this);
},events:{"sending":k,"receiving":k,"completed":h,"aborted":k,"failed":h,"timeout":h},statics:{typesOrder:[bq,ba,E],typesReady:false,typesAvailable:{},typesSupported:{},registerType:function(bu,bv){qx.io.remote.Exchange.typesAvailable[bv]=bu;
},initTypes:function(){if(qx.io.remote.Exchange.typesReady){return;
}
for(var cd in qx.io.remote.Exchange.typesAvailable){var cc=qx.io.remote.Exchange.typesAvailable[cd];

if(cc.isSupported()){qx.io.remote.Exchange.typesSupported[cd]=cc;
}}qx.io.remote.Exchange.typesReady=true;

if(qx.lang.Object.isEmpty(qx.io.remote.Exchange.typesSupported)){throw new Error("No supported transport types were found!");
}},canHandle:function(a,b,c){if(!qx.lang.Array.contains(a.handles.responseTypes,c)){return false;
}
for(var d in b){if(!a.handles[d]){return false;
}}return true;
},_nativeMap:{0:C,1:g,2:q,3:o,4:p},wasSuccessful:function(bQ,bR,bS){if(bS){switch(bQ){case null:case 0:return true;
case -1:return bR<4;
default:return typeof bQ===M;
}}else{switch(bQ){case -1:{};
return bR<4;
case 200:case 304:return true;
case 201:case 202:case 203:case 204:case 205:return true;
case 206:{};
return bR!==4;
case 300:case 301:case 302:case 303:case 305:case 400:case 401:case 402:case 403:case 404:case 405:case 406:case 407:case 408:case 409:case 410:case 411:case 412:case 413:case 414:case 415:case 500:case 501:case 502:case 503:case 504:case 505:{};
return false;
case 12002:case 12007:case 12029:case 12030:case 12031:case 12152:case 13030:{};
return false;
default:if(bQ>206&&bQ<300){return true;
}qx.log.Logger.debug(this,"Unknown status code: "+bQ+" ("+bR+")");
return false;
}}},statusCodeToString:function(bI){switch(bI){case -1:return bm;
case 0:var bJ=window.location.href;
if(qx.lang.String.startsWith(bJ.toLowerCase(),bb)){return (bs+L);
}else{return (bs+w);
}break;
case 200:return be;
case 304:return bg;
case 206:return s;
case 204:return T;
case 300:return W;
case 301:return K;
case 302:return bj;
case 303:return v;
case 305:return Y;
case 400:return U;
case 401:return O;
case 402:return R;
case 403:return S;
case 404:return B;
case 405:return P;
case 406:return I;
case 407:return bc;
case 408:return V;
case 409:return A;
case 410:return u;
case 411:return H;
case 412:return bl;
case 413:return Q;
case 414:return bo;
case 415:return f;
case 500:return bk;
case 501:return bf;
case 502:return x;
case 503:return D;
case 504:return bd;
case 505:return F;
case 12002:return t;
case 12029:return j;
case 12030:return j;
case 12031:return j;
case 12152:return J;
case 13030:return bn;
default:return X;
}}},properties:{request:{check:G,nullable:true},implementation:{check:bp,nullable:true,apply:N},state:{check:[g,q,o,p,n,m,r],init:g,event:bh,apply:bi}},members:{send:function(){var bD=this.getRequest();

if(!bD){return this.error("Please attach a request object first");
}qx.io.remote.Exchange.initTypes();
var bB=qx.io.remote.Exchange.typesOrder;
var bA=qx.io.remote.Exchange.typesSupported;
var bF=bD.getResponseType();
var bG={};

if(bD.getAsynchronous()){bG.asynchronous=true;
}else{bG.synchronous=true;
}
if(bD.getCrossDomain()){bG.crossDomain=true;
}
if(bD.getFileUpload()){bG.fileUpload=true;
}for(var bE in bD.getFormFields()){bG.programaticFormFields=true;
break;
}var bH,bC;

for(var i=0,l=bB.length;i<l;i++){bH=bA[bB[i]];

if(bH){if(!qx.io.remote.Exchange.canHandle(bH,bG,bF)){continue;
}
try{{};
bC=new bH;
this.setImplementation(bC);
bC.setUseBasicHttpAuth(bD.getUseBasicHttpAuth());
bC.send();
return true;
}catch(bz){this.error("Request handler throws error");
this.error(bz);
return;
}}}this.error("There is no transport implementation available to handle this request: "+bD);
},abort:function(){var bt=this.getImplementation();

if(bt){{};
bt.abort();
}else{{};
this.setState(n);
}},timeout:function(){var bP=this.getImplementation();

if(bP){this.warn("Timeout: implementation "+bP.toHashCode());
bP.timeout();
}else{this.warn("Timeout: forcing state to timeout");
this.setState(m);
}this.__qK();
},__qK:function(){var bw=this.getRequest();

if(bw){bw.setTimeout(0);
}},_onsending:function(e){this.setState(q);
},_onreceiving:function(e){this.setState(o);
},_oncompleted:function(e){this.setState(p);
},_onabort:function(e){this.setState(n);
},_onfailed:function(e){this.setState(r);
},_ontimeout:function(e){this.setState(m);
},_applyImplementation:function(bT,bU){if(bU){bU.removeListener(q,this._onsending,this);
bU.removeListener(o,this._onreceiving,this);
bU.removeListener(p,this._oncompleted,this);
bU.removeListener(n,this._onabort,this);
bU.removeListener(m,this._ontimeout,this);
bU.removeListener(r,this._onfailed,this);
}
if(bT){var bW=this.getRequest();
bT.setUrl(bW.getUrl());
bT.setMethod(bW.getMethod());
bT.setAsynchronous(bW.getAsynchronous());
bT.setUsername(bW.getUsername());
bT.setPassword(bW.getPassword());
bT.setParameters(bW.getParameters(false));
bT.setFormFields(bW.getFormFields());
bT.setRequestHeaders(bW.getRequestHeaders());
if(bT instanceof qx.io.remote.transport.XmlHttp){bT.setParseJson(bW.getParseJson());
}var ca=bW.getData();

if(ca===null){var cb=bW.getParameters(true);
var bY=[];

for(var bV in cb){var bX=cb[bV];

if(bX instanceof Array){for(var i=0;i<bX.length;i++){bY.push(encodeURIComponent(bV)+br+encodeURIComponent(bX[i]));
}}else{bY.push(encodeURIComponent(bV)+br+encodeURIComponent(bX));
}}
if(bY.length>0){bT.setData(bY.join(y));
}}else{bT.setData(ca);
}bT.setResponseType(bW.getResponseType());
bT.addListener(q,this._onsending,this);
bT.addListener(o,this._onreceiving,this);
bT.addListener(p,this._oncompleted,this);
bT.addListener(n,this._onabort,this);
bT.addListener(m,this._ontimeout,this);
bT.addListener(r,this._onfailed,this);
}},_applyState:function(bK,bL){{};

switch(bK){case q:this.fireEvent(q);
break;
case o:this.fireEvent(o);
break;
case p:case n:case m:case r:var bN=this.getImplementation();

if(!bN){break;
}this.__qK();

if(this.hasListener(bK)){var bO=qx.event.Registration.createEvent(bK,qx.io.remote.Response);

if(bK==p){var bM=bN.getResponseContent();
bO.setContent(bM);
if(bM===null){{};
bK=r;
}}else if(bK==r){bO.setContent(bN.getResponseContent());
}bO.setStatusCode(bN.getStatusCode());
bO.setResponseHeaders(bN.getResponseHeaders());
this.dispatchEvent(bO);
}this.setImplementation(null);
bN.dispose();
break;
}}},settings:{"qx.ioRemoteDebug":false,"qx.ioRemoteDebugData":false},destruct:function(){var bx=this.getImplementation();

if(bx){this.setImplementation(null);
bx.dispose();
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
(function(){var v="configured",u="completed",t="changeState",s="changeModel",r="qx.data.store.Json",q="GET",p="_marshaler",o="sending",n="application/json",m="changeUrl",f="failed",l="loaded",i="timeout",e="queued",d="__ng",h="String",g="aborted",j="_applyUrl",c="receiving",k="qx.event.type.Data";
qx.Class.define(r,{extend:qx.core.Object,construct:function(B,C){qx.core.Object.call(this);
this._marshaler=new qx.data.marshal.Json(C);
this._delegate=C;

if(B!=null){this.setUrl(B);
}},events:{"loaded":k},properties:{model:{nullable:true,event:s},state:{check:[v,e,o,c,u,g,i,f],init:v,event:t},url:{check:h,apply:j,event:m}},members:{__ng:null,_delegate:null,_applyUrl:function(D,E){if(D!=null){this._createRequest(D);
}},_createRequest:function(a){this.__ng=new qx.io.remote.Request(a,q,n);
var b=this._delegate;

if(b&&qx.lang.Type.isFunction(b.configureRequest)){this._delegate.configureRequest(this.__ng);
}this.__ng.addListener(u,this.__nh,this);
this.__ng.addListener(t,function(w){this.setState(w.getData());
},this);
this.__ng.send();
},__nh:function(x){var z=x.getContent();
var y=this._delegate;

if(y&&qx.lang.Type.isFunction(y.manipulateData)){z=this._delegate.manipulateData(z);
}this._marshaler.toClass(z,true);
var A=this.getModel();
this.setModel(this._marshaler.toModel(z));
if(A&&A.dispose){A.dispose();
}this.fireDataEvent(l,this.getModel());
},reload:function(){var F=this.getUrl();

if(F!=null){this._createRequest(F);
}}},destruct:function(){this._disposeObjects(p,d);
this._delegate=null;
}});
})();
(function(){var i="?",h="&",g="loaded",f='qx.data.store.Jsonp[',e='].callback',d="failed",c="=",b="qx.data.store.Jsonp",a="String";
qx.Class.define(b,{extend:qx.data.store.Json,construct:function(l,m,n){if(n!=undefined){this.setCallbackParam(n);
}qx.data.store.Json.call(this,l,m);
},properties:{callbackParam:{check:a,nullable:false}},members:{__nk:null,_createRequest:function(q){if(this.__nk){this.__nk.dispose();
}this.__nk=new qx.io.ScriptLoader();
var s=this._delegate;

if(s&&qx.lang.Type.isFunction(s.configureRequest)){this._delegate.configureRequest(this.__nk);
}var r=q.indexOf(i)==-1?i:h;
q+=r+this.getCallbackParam()+c;
var t=parseInt(this.toHashCode());
qx.data.store.Jsonp[t]=this;
q+=f+t+e;
this.__nk.load(q,function(p){delete this[t];
},this);
},callback:function(o){if(this.isDisposed()){return;
}this.__nl(o);
},__nl:function(j){if(j==undefined){this.setState(d);
return;
}var k=this._delegate;

if(k&&qx.lang.Type.isFunction(k.manipulateData)){j=this._delegate.manipulateData(j);
}this._marshaler.toClass(j);
this.setModel(this._marshaler.toModel(j));
this.fireDataEvent(g,this.getModel());
}},destruct:function(){if(this.__nk){this.__nk.dispose();
}this.__nk=null;
}});
})();
(function(){var l="=",k="&",j="application/xml",h="application/json",g="text/html",f="qx.client",d="textarea",c="none",b="text/plain",a="text/javascript",F="",E="completed",D="?",C="qx.io.remote.transport.Iframe",B="gecko",A="frame_",z="aborted",y="_data_",x="pre",w="javascript:void(0)",s="sending",t="form",q="failed",r='<iframe name="',o="mshtml",p="form_",m='"></iframe>',n="iframe",u="timeout",v="qx/static/blank.gif";
qx.Class.define(C,{extend:qx.io.remote.transport.Abstract,construct:function(){qx.io.remote.transport.Abstract.call(this);
var I=(new Date).valueOf();
var J=A+I;
var K=p+I;
if(qx.core.Variant.isSet(f,o)){this.__nq=document.createElement(r+J+m);
}else{this.__nq=document.createElement(n);
}this.__nq.src=w;
this.__nq.id=this.__nq.name=J;
this.__nq.onload=qx.lang.Function.bind(this._onload,this);
this.__nq.style.display=c;
document.body.appendChild(this.__nq);
this.__nr=document.createElement(t);
this.__nr.target=J;
this.__nr.id=this.__nr.name=K;
this.__nr.style.display=c;
document.body.appendChild(this.__nr);
this.__ns=document.createElement(d);
this.__ns.id=this.__ns.name=y;
this.__nr.appendChild(this.__ns);
this.__nq.onreadystatechange=qx.lang.Function.bind(this._onreadystatechange,this);
},statics:{handles:{synchronous:false,asynchronous:true,crossDomain:false,fileUpload:true,programaticFormFields:true,responseTypes:[b,a,h,j,g]},isSupported:function(){return true;
},_numericMap:{"uninitialized":1,"loading":2,"loaded":2,"interactive":3,"complete":4}},members:{__ns:null,__nt:0,__nr:null,__nq:null,send:function(){var M=this.getMethod();
var O=this.getUrl();
var S=this.getParameters(false);
var R=[];

for(var N in S){var P=S[N];

if(P instanceof Array){for(var i=0;i<P.length;i++){R.push(encodeURIComponent(N)+l+encodeURIComponent(P[i]));
}}else{R.push(encodeURIComponent(N)+l+encodeURIComponent(P));
}}
if(R.length>0){O+=(O.indexOf(D)>=0?k:D)+R.join(k);
}if(this.getData()===null){var S=this.getParameters(true);
var R=[];

for(var N in S){var P=S[N];

if(P instanceof Array){for(var i=0;i<P.length;i++){R.push(encodeURIComponent(N)+l+encodeURIComponent(P[i]));
}}else{R.push(encodeURIComponent(N)+l+encodeURIComponent(P));
}}
if(R.length>0){this.setData(R.join(k));
}}var L=this.getFormFields();

for(var N in L){var Q=document.createElement(d);
Q.name=N;
Q.appendChild(document.createTextNode(L[N]));
this.__nr.appendChild(Q);
}this.__nr.action=O;
this.__nr.method=M;
this.__ns.appendChild(document.createTextNode(this.getData()));
this.__nr.submit();
this.setState(s);
},_onload:qx.event.GlobalError.observeMethod(function(e){if(this.__nr.src){return;
}this._switchReadyState(qx.io.remote.transport.Iframe._numericMap.complete);
}),_onreadystatechange:qx.event.GlobalError.observeMethod(function(e){this._switchReadyState(qx.io.remote.transport.Iframe._numericMap[this.__nq.readyState]);
}),_switchReadyState:function(Y){switch(this.getState()){case E:case z:case q:case u:this.warn("Ignore Ready State Change");
return;
}while(this.__nt<Y){this.setState(qx.io.remote.Exchange._nativeMap[++this.__nt]);
}},setRequestHeader:function(W,X){},getResponseHeader:function(U){return null;
},getResponseHeaders:function(){return {};
},getStatusCode:function(){return 200;
},getStatusText:function(){return F;
},getIframeWindow:function(){return qx.bom.Iframe.getWindow(this.__nq);
},getIframeDocument:function(){return qx.bom.Iframe.getDocument(this.__nq);
},getIframeBody:function(){return qx.bom.Iframe.getBody(this.__nq);
},getIframeTextContent:function(){var V=this.getIframeBody();

if(!V){return null;
}
if(!V.firstChild){return F;
}if(V.firstChild.tagName&&V.firstChild.tagName.toLowerCase()==x){return V.firstChild.innerHTML;
}else{return V.innerHTML;
}},getIframeHtmlContent:function(){var G=this.getIframeBody();
return G?G.innerHTML:null;
},getFetchedLength:function(){return 0;
},getResponseContent:function(){if(this.getState()!==E){{};
return null;
}{};
var ba=this.getIframeTextContent();

switch(this.getResponseType()){case b:{};
return ba;
break;
case g:ba=this.getIframeHtmlContent();
{};
return ba;
break;
case h:ba=this.getIframeHtmlContent();
{};

try{return ba&&ba.length>0?qx.util.Json.parse(ba,false):null;
}catch(T){return this.error("Could not execute json: ("+ba+")",T);
}case a:ba=this.getIframeHtmlContent();
{};

try{return ba&&ba.length>0?window.eval(ba):null;
}catch(H){return this.error("Could not execute javascript: ("+ba+")",H);
}case j:ba=this.getIframeDocument();
{};
return ba;
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}}},defer:function(){qx.io.remote.Exchange.registerType(qx.io.remote.transport.Iframe,C);
},destruct:function(){if(this.__nq){this.__nq.onload=null;
this.__nq.onreadystatechange=null;
if(qx.core.Variant.isSet(f,B)){this.__nq.src=qx.util.ResourceManager.getInstance().toUri(v);
}document.body.removeChild(this.__nq);
}
if(this.__nr){document.body.removeChild(this.__nr);
}this.__nq=this.__nr=this.__ns=null;
}});
})();
(function(){var p=",",o="",n="string",m="null",k="new Date(Date.UTC(",j='"',h="))",g=':',f="qx.jsonDebugging",e='-',Q='\\u00',P="__od",O='\\\\',N="__ob",M='\\f',L='\\"',K='Z',J='T',I="}",H='(',w='.',x="{",u='\\r',v="__ol",s=":",t='\\t',q="__oc",r="__oa",y="The default returned parsed date format will change. Use the CONVERT_DATES flag to change the behavior.",z="]",C="[",B="qx.jsonEncodeUndefined",E='\\b',D="qx.util.Json",G=')',F="__ok",A='\\n';
qx.Class.define(D,{statics:{__nX:null,BEAUTIFYING_INDENT:"  ",BEAUTIFYING_LINE_END:"\n",CONVERT_DATES:null,__nY:{"function":r,"boolean":N,"number":q,"string":P,"object":F,"undefined":v},__oa:function(R,S){return String(R);
},__ob:function(c,d){return String(c);
},__oc:function(bC,bD){return isFinite(bC)?String(bC):m;
},__od:function(bE,bF){var bG;

if(/["\\\x00-\x1f]/.test(bE)){bG=bE.replace(/([\x00-\x1f\\"])/g,qx.util.Json.__of);
}else{bG=bE;
}return j+bG+j;
},__oe:{'\b':E,'\t':t,'\n':A,'\f':M,'\r':u,'"':L,'\\':O},__of:function(a,b){var T=qx.util.Json.__oe[b];

if(T){return T;
}T=b.charCodeAt();
return Q+Math.floor(T/16).toString(16)+(T%16).toString(16);
},__og:function(bm,bn){var bp=[],bs=true,br,bo;
var bq=qx.util.Json.__on;
bp.push(C);

if(bq){qx.util.Json.__oh+=qx.util.Json.BEAUTIFYING_INDENT;
bp.push(qx.util.Json.__oh);
}
for(var i=0,l=bm.length;i<l;i++){bo=bm[i];
br=this.__nY[typeof bo];

if(br){bo=this[br](bo,i+o);

if(typeof bo==n){if(!bs){bp.push(p);

if(bq){bp.push(qx.util.Json.__oh);
}}bp.push(bo);
bs=false;
}}}
if(bq){qx.util.Json.__oh=qx.util.Json.__oh.substring(0,qx.util.Json.__oh.length-qx.util.Json.BEAUTIFYING_INDENT.length);
bp.push(qx.util.Json.__oh);
}bp.push(z);
return bp.join(o);
},__oi:function(U,V){if(qx.util.Json.CONVERT_DATES===null){qx.log.Logger.deprecatedMethodWarning(arguments.callee,y);
var X=U.getUTCFullYear()+p+U.getUTCMonth()+p+U.getUTCDate()+p+U.getUTCHours()+p+U.getUTCMinutes()+p+U.getUTCSeconds()+p+U.getUTCMilliseconds();
return k+X+h;
}else if(!qx.util.Json.CONVERT_DATES){if(U.toJSON){return U.toJSON();
}var W=qx.util.format.NumberFormat.getInstance();
W.setMinimumIntegerDigits(2);
var Y=U.getUTCFullYear()+e+W.format(U.getUTCMonth()+1)+e+W.format(U.getUTCDate())+J+W.format(U.getUTCHours())+g+W.format(U.getUTCMinutes())+g+W.format(U.getUTCSeconds())+w;
W.setMinimumIntegerDigits(3);
return Y+W.format(U.getUTCMilliseconds())+K;
}else{var X=U.getUTCFullYear()+p+U.getUTCMonth()+p+U.getUTCDate()+p+U.getUTCHours()+p+U.getUTCMinutes()+p+U.getUTCSeconds()+p+U.getUTCMilliseconds();
return k+X+h;
}},__oj:function(bc,bd){var bg=[],bi=true,bf,be;
var bh=qx.util.Json.__on;
bg.push(x);

if(bh){qx.util.Json.__oh+=qx.util.Json.BEAUTIFYING_INDENT;
bg.push(qx.util.Json.__oh);
}
for(var bd in bc){be=bc[bd];
bf=this.__nY[typeof be];

if(bf){be=this[bf](be,bd);

if(typeof be==n){if(!bi){bg.push(p);

if(bh){bg.push(qx.util.Json.__oh);
}}bg.push(this.__od(bd),s,be);
bi=false;
}}}
if(bh){qx.util.Json.__oh=qx.util.Json.__oh.substring(0,qx.util.Json.__oh.length-qx.util.Json.BEAUTIFYING_INDENT.length);
bg.push(qx.util.Json.__oh);
}bg.push(I);
return bg.join(o);
},__ok:function(bj,bk){if(bj){if(qx.lang.Type.isFunction(bj.toJSON)&&bj.toJSON!==this.__nX){return this.__om(bj.toJSON(bk),bk);
}else if(qx.lang.Type.isDate(bj)){return this.__oi(bj,bk);
}else if(qx.lang.Type.isArray(bj)){return this.__og(bj,bk);
}else if(qx.lang.Type.isObject(bj)){return this.__oj(bj,bk);
}return o;
}return m;
},__ol:function(ba,bb){if(qx.core.Setting.get(B)){return m;
}},__om:function(bx,by){return this[this.__nY[typeof bx]](bx,by);
},stringify:function(bz,bA){this.__on=bA;
this.__oh=this.BEAUTIFYING_LINE_END;
var bB=this.__om(bz,o);

if(typeof bB!=n){bB=null;
}if(qx.core.Setting.get(f)){qx.log.Logger.debug(this,"JSON request: "+bB);
}return bB;
},parse:function(bu,bv){if(bv===undefined){bv=true;
}
if(qx.core.Setting.get(f)){qx.log.Logger.debug(this,"JSON response: "+bu);
}
if(bv){if(/[^,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]/.test(bu.replace(/"(\\.|[^"\\])*"/g,o))){throw new Error("Could not parse JSON string!");
}}
try{var bw=(bu&&bu.length>0)?eval(H+bu+G):null;
return bw;
}catch(bt){throw new Error("Could not evaluate JSON string: "+bt.message);
}}},settings:{"qx.jsonEncodeUndefined":true,"qx.jsonDebugging":false},defer:function(bl){bl.__nX=Date.prototype.toJSON;
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
(function(){var s="Integer",r="aborted",q="_onaborted",p="_on",o="_applyEnabled",n="Boolean",m="__oO",l="sending",k="interval",j="failed",c="qx.io.remote.RequestQueue",h="timeout",g="completed",b="queued",a="__oM",f="receiving",d="singleton";
qx.Class.define(c,{type:d,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__oL=[];
this.__oM=[];
this.__oN=0;
this.__oO=new qx.event.Timer(500);
this.__oO.addListener(k,this._oninterval,this);
},properties:{enabled:{init:true,check:n,apply:o},maxTotalRequests:{check:s,nullable:true},maxConcurrentRequests:{check:s,init:qx.bom.client.Transport.getMaxConcurrentRequestCount()},defaultTimeout:{check:s,init:5000}},members:{__oL:null,__oM:null,__oN:null,__oO:null,getRequestQueue:function(){return this.__oL;
},getActiveQueue:function(){return this.__oM;
},_debug:function(){var M;
{};
},_check:function(){this._debug();
if(this.__oM.length==0&&this.__oL.length==0){this.__oO.stop();
}if(!this.getEnabled()){return;
}if(this.__oL.length==0||(this.__oL[0].isAsynchronous()&&this.__oM.length>=this.getMaxConcurrentRequests())){return;
}if(this.getMaxTotalRequests()!=null&&this.__oN>=this.getMaxTotalRequests()){return;
}var G=this.__oL.shift();
var H=new qx.io.remote.Exchange(G);
this.__oN++;
this.__oM.push(H);
this._debug();
H.addListener(l,this._onsending,this);
H.addListener(f,this._onreceiving,this);
H.addListener(g,this._oncompleted,this);
H.addListener(r,this._oncompleted,this);
H.addListener(h,this._oncompleted,this);
H.addListener(j,this._oncompleted,this);
H._start=(new Date).valueOf();
H.send();
if(this.__oL.length>0){this._check();
}},_remove:function(t){qx.lang.Array.remove(this.__oM,t);
t.dispose();
this._check();
},__oP:0,_onsending:function(e){{};
e.getTarget().getRequest()._onsending(e);
},_onreceiving:function(e){e.getTarget().getRequest()._onreceiving(e);
},_oncompleted:function(e){{};
var L=e.getTarget().getRequest();
var K=p+e.getType();
try{if(L[K]){L[K](e);
}}catch(F){this.error("Request "+L+" handler "+K+" threw an error: ",F);
try{if(L[q]){var event=qx.event.Registration.createEvent(r,qx.event.type.Event);
L[q](event);
}}catch(w){}}finally{this._remove(e.getTarget());
}},_oninterval:function(e){var D=this.__oM;

if(D.length==0){this.__oO.stop();
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
}this.__oO.setEnabled(u);
},add:function(E){E.setState(b);

if(E.isAsynchronous()){this.__oL.push(E);
}else{this.__oL.unshift(E);
}this._check();

if(this.getEnabled()){this.__oO.start();
}},abort:function(I){var J=I.getTransport();

if(J){J.abort();
}else if(qx.lang.Array.contains(this.__oL,I)){qx.lang.Array.remove(this.__oL,I);
}}},destruct:function(){this._disposeArray(a);
this._disposeObjects(m);
this.__oL=null;
}});
})();
(function(){var r="&",q="=",p="?",o="application/json",n="completed",m="text/plain",l="text/javascript",k="qx.io.remote.transport.Script",j="",h="_ScriptTransport_data",c="script",g="timeout",f="_ScriptTransport_",b="_ScriptTransport_id",a="aborted",e="utf-8",d="failed";
qx.Class.define(k,{extend:qx.io.remote.transport.Abstract,construct:function(){qx.io.remote.transport.Abstract.call(this);
var s=++qx.io.remote.transport.Script.__oQ;

if(s>=2000000000){qx.io.remote.transport.Script.__oQ=s=1;
}this.__oR=null;
this.__oQ=s;
},statics:{__oQ:0,_instanceRegistry:{},ScriptTransport_PREFIX:f,ScriptTransport_ID_PARAM:b,ScriptTransport_DATA_PARAM:h,handles:{synchronous:false,asynchronous:true,crossDomain:true,fileUpload:false,programaticFormFields:false,responseTypes:[m,l,o]},isSupported:function(){return true;
},_numericMap:{"uninitialized":1,"loading":2,"loaded":2,"interactive":3,"complete":4},_requestFinished:qx.event.GlobalError.observeMethod(function(E,content){var F=qx.io.remote.transport.Script._instanceRegistry[E];

if(F==null){{};
}else{F._responseContent=content;
F._switchReadyState(qx.io.remote.transport.Script._numericMap.complete);
}})},members:{__oS:0,__oR:null,__oQ:null,send:function(){var w=this.getUrl();
w+=(w.indexOf(p)>=0?r:p)+qx.io.remote.transport.Script.ScriptTransport_ID_PARAM+q+this.__oQ;
var z=this.getParameters();
var y=[];

for(var v in z){if(v.indexOf(qx.io.remote.transport.Script.ScriptTransport_PREFIX)==0){this.error("Illegal parameter name. The following prefix is used internally by qooxdoo): "+qx.io.remote.transport.Script.ScriptTransport_PREFIX);
}var x=z[v];

if(x instanceof Array){for(var i=0;i<x.length;i++){y.push(encodeURIComponent(v)+q+encodeURIComponent(x[i]));
}}else{y.push(encodeURIComponent(v)+q+encodeURIComponent(x));
}}
if(y.length>0){w+=r+y.join(r);
}var u=this.getData();

if(u!=null){w+=r+qx.io.remote.transport.Script.ScriptTransport_DATA_PARAM+q+encodeURIComponent(u);
}qx.io.remote.transport.Script._instanceRegistry[this.__oQ]=this;
this.__oR=document.createElement(c);
this.__oR.charset=e;
this.__oR.src=w;
{};
document.body.appendChild(this.__oR);
},_switchReadyState:function(B){switch(this.getState()){case n:case a:case d:case g:this.warn("Ignore Ready State Change");
return;
}while(this.__oS<B){this.setState(qx.io.remote.Exchange._nativeMap[++this.__oS]);
}},setRequestHeader:function(C,D){},getResponseHeader:function(t){return null;
},getResponseHeaders:function(){return {};
},getStatusCode:function(){return 200;
},getStatusText:function(){return j;
},getFetchedLength:function(){return 0;
},getResponseContent:function(){if(this.getState()!==n){{};
return null;
}{};

switch(this.getResponseType()){case m:case o:case l:{};
var A=this._responseContent;
return (A===0?0:(A||null));
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}}},defer:function(){qx.io.remote.Exchange.registerType(qx.io.remote.transport.Script,k);
},destruct:function(){if(this.__oR){delete qx.io.remote.transport.Script._instanceRegistry[this.__oQ];
document.body.removeChild(this.__oR);
}this.__oR=this._responseContent=null;
}});
})();
(function(){var l="value",k=" ",j="icon",h="model",g="text",f="qx.client",e="source",d="mshtml",c="user.profile_image_url",b="showcase/databinding/twitter_logo_outline.png",L="Enter",K="one",J="http",I="keydown",H="http://twitter.com/statuses/user_timeline/1and1.json",G="<a href='",F="execute",E="1and1",D="callback",C="selection[0]",s="username",t="showcase.page.databinding.Content",q="Location: ",r="Details",o="user.name",p="Name: ",m="target='_blank'",n="</a>",u="Posted with: ",v="' target='_blank'>",x="Show",w="user.location",z=".json",y="http://twitter.com/statuses/user_timeline/",B="Avatar: ",A="Message: ";
qx.Class.define(t,{extend:showcase.AbstractContent,construct:function(P){showcase.AbstractContent.call(this,P);
this.setView(this._createView());
},members:{_createView:function(){var be=new qx.ui.container.Composite(new qx.ui.layout.Canvas());
var ba=new qx.ui.basic.Image(b);
be.add(ba,{left:10,top:15});
var U=new qx.ui.form.List();
be.add(U,{left:10,top:135,bottom:5});
U.set({selectionMode:K,width:300,maxHeight:400});
var X=new qx.data.controller.List(null,U);
X.setDelegate(this);
X.setLabelPath(g);
if(!qx.core.Variant.isSet(f,d)){X.setIconPath(c);
}var S=H;
var bd=new qx.data.store.Jsonp(S,null,D);
bd.bind(h,X,h);
var V=new qx.ui.container.Composite(new qx.ui.layout.HBox(5));
V.set({width:300});
V.add(new qx.ui.core.Spacer(),{flex:1});
var Q=new qx.ui.form.TextField(E);
Q.setPlaceholder(s);
V.add(Q);
var Y=new qx.ui.form.Button(x);
V.add(Y);
Y.addListener(F,function(){var M=y+Q.getValue()+z;

if(bd.getUrl()==M){bd.reload();
}else{bd.setUrl(M);
}},this);
Q.addListener(I,function(N){if(N.getKeyIdentifier()==L){Y.execute();
}},this);
be.add(V,{left:10,top:105});
var T=new qx.ui.groupbox.GroupBox(r);
be.add(T,{left:320,top:116,bottom:5});
T.setWidth(270);
T.setHeight(220);
T.setAllowGrowY(false);
T.setLayout(new qx.ui.layout.Grid(5,5));
T.add(new qx.ui.basic.Label(p),{row:0,column:0});
T.add(new qx.ui.basic.Label(q),{row:1,column:0});
T.add(new qx.ui.basic.Label(A),{row:2,column:0});
T.add(new qx.ui.basic.Label(u),{row:3,column:0});
var name=new qx.ui.basic.Label();
T.add(name,{row:0,column:1});
var location=new qx.ui.basic.Label();
T.add(location,{row:1,column:1});
var bb=new qx.ui.basic.Label();
bb.setRich(true);
bb.setWidth(150);
bb.setSelectable(true);
T.add(bb,{row:2,column:1});
var bc=new qx.ui.basic.Label();
bc.setRich(true);
T.add(bc,{row:3,column:1});
var R=new qx.data.controller.Object();
R.addTarget(name,l,o);
R.addTarget(location,l,w);
R.addTarget(bb,l,g,false,{converter:function(bf){var bg=bf.split(k);

for(var i=bg.length-1;i>=0;i--){if(bg[i].indexOf(J)==0){bg[i]=G+bg[i]+v+bg[i]+n;
}}return bg.join(k);
}});
R.addTarget(bc,l,e,false,{converter:function(O){O=O.split(k);
O.splice(1,0,m);
return O.join(k);
}});

if(!qx.core.Variant.isSet(f,d)){T.add(new qx.ui.basic.Label(B),{row:4,column:0});
var W=new qx.ui.basic.Image();
T.add(W,{row:4,column:1});
R.addTarget(W,e,c);
}X.bind(C,R,h);
return be;
},configureItem:function(a){a.setRich(true);
a.getChildControl(j).setWidth(48);
a.getChildControl(j).setHeight(48);
a.getChildControl(j).setScale(true);
}}});
})();
(function(){var o="failed",n="completed",m="=",k="aborted",j="",h="sending",g="&",f="configured",d="timeout",c="application/xml",L="qx.io.remote.transport.XmlHttp",K="application/json",J="text/html",I="qx.client",H="receiving",G="text/plain",F="text/javascript",E="?",D="created",C="Boolean",w='Referer',x='Basic ',u="\n</pre>",v="string",r='Authorization',t="<pre>Could not execute json: \n",p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",q=':',y="parseerror",z="file:",B="webkit",A="object";
qx.Class.define(L,{extend:qx.io.remote.transport.Abstract,statics:{handles:{synchronous:true,asynchronous:true,crossDomain:false,fileUpload:false,programaticFormFields:false,responseTypes:[G,F,K,c,J]},requestObjects:[],requestObjectCount:0,createRequestObject:qx.core.Variant.select(I,{"default":function(){return new XMLHttpRequest;
},"mshtml":function(){if(window.ActiveXObject&&qx.xml.Document.XMLHTTP){return new ActiveXObject(qx.xml.Document.XMLHTTP);
}
if(window.XMLHttpRequest){return new XMLHttpRequest;
}}}),isSupported:function(){return !!this.createRequestObject();
}},properties:{parseJson:{check:C,init:true}},members:{__my:false,__mz:0,__mA:null,getRequest:function(){if(this.__mA===null){this.__mA=qx.io.remote.transport.XmlHttp.createRequestObject();
this.__mA.onreadystatechange=qx.lang.Function.bind(this._onreadystatechange,this);
}return this.__mA;
},send:function(){this.__mz=0;
var bf=this.getRequest();
var bb=this.getMethod();
var bi=this.getAsynchronous();
var bh=this.getUrl();
var bd=(window.location.protocol===z&&!(/^http(s){0,1}\:/.test(bh)));
this.__my=bd;
var bl=this.getParameters(false);
var bj=[];

for(var bc in bl){var bg=bl[bc];

if(bg instanceof Array){for(var i=0;i<bg.length;i++){bj.push(encodeURIComponent(bc)+m+encodeURIComponent(bg[i]));
}}else{bj.push(encodeURIComponent(bc)+m+encodeURIComponent(bg));
}}
if(bj.length>0){bh+=(bh.indexOf(E)>=0?g:E)+bj.join(g);
}if(this.getData()===null){var bl=this.getParameters(true);
var bj=[];

for(var bc in bl){var bg=bl[bc];

if(bg instanceof Array){for(var i=0;i<bg.length;i++){bj.push(encodeURIComponent(bc)+m+encodeURIComponent(bg[i]));
}}else{bj.push(encodeURIComponent(bc)+m+encodeURIComponent(bg));
}}
if(bj.length>0){this.setData(bj.join(g));
}}var bk=function(bm){var br=p;
var bv=j;
var bp,bo,bn;
var bs,bt,bu,bq;
var i=0;

do{bp=bm.charCodeAt(i++);
bo=bm.charCodeAt(i++);
bn=bm.charCodeAt(i++);
bs=bp>>2;
bt=((bp&3)<<4)|(bo>>4);
bu=((bo&15)<<2)|(bn>>6);
bq=bn&63;

if(isNaN(bo)){bu=bq=64;
}else if(isNaN(bn)){bq=64;
}bv+=br.charAt(bs)+br.charAt(bt)+br.charAt(bu)+br.charAt(bq);
}while(i<bm.length);
return bv;
};
try{if(this.getUsername()){if(this.getUseBasicHttpAuth()){bf.open(bb,bh,bi);
bf.setRequestHeader(r,x+bk(this.getUsername()+q+this.getPassword()));
}else{bf.open(bb,bh,bi,this.getUsername(),this.getPassword());
}}else{bf.open(bb,bh,bi);
}}catch(W){this.error("Failed with exception: "+W);
this.failed();
return;
}if(!qx.core.Variant.isSet(I,B)){bf.setRequestHeader(w,window.location.href);
}var be=this.getRequestHeaders();

for(var bc in be){bf.setRequestHeader(bc,be[bc]);
}try{{};
bf.send(this.getData());
}catch(X){if(bd){this.failedLocally();
}else{this.error("Failed to send data: "+X,"send");
this.failed();
}return;
}if(!bi){this._onreadystatechange();
}},failedLocally:function(){if(this.getState()===o){return;
}this.warn("Could not load from file: "+this.getUrl());
this.failed();
},_onreadystatechange:qx.event.GlobalError.observeMethod(function(e){switch(this.getState()){case n:case k:case o:case d:{};
return;
}var V=this.getReadyState();

if(V==4){if(!qx.io.remote.Exchange.wasSuccessful(this.getStatusCode(),V,this.__my)){if(this.getState()===f){this.setState(h);
}this.failed();
return;
}}while(this.__mz<V){this.setState(qx.io.remote.Exchange._nativeMap[++this.__mz]);
}}),getReadyState:function(){var bM=null;

try{bM=this.getRequest().readyState;
}catch(bP){}return bM;
},setRequestHeader:function(bH,bI){this.getRequestHeaders()[bH]=bI;
},getResponseHeader:function(bB){var bC=null;

try{bC=this.getRequest().getResponseHeader(bB)||null;
}catch(bJ){}return bC;
},getStringResponseHeaders:function(){var T=null;

try{var S=this.getRequest().getAllResponseHeaders();

if(S){T=S;
}}catch(by){}return T;
},getResponseHeaders:function(){var bF=this.getStringResponseHeaders();
var bG={};

if(bF){var bD=bF.split(/[\r\n]+/g);

for(var i=0,l=bD.length;i<l;i++){var bE=bD[i].match(/^([^:]+)\s*:\s*(.+)$/i);

if(bE){bG[bE[1]]=bE[2];
}}}return bG;
},getStatusCode:function(){var bK=-1;

try{bK=this.getRequest().status;
}catch(a){}return bK;
},getStatusText:function(){var bO=j;

try{bO=this.getRequest().statusText;
}catch(bL){}return bO;
},getResponseText:function(){var Y=null;

try{Y=this.getRequest().responseText;
}catch(U){Y=null;
}return Y;
},getResponseXml:function(){var O=null;
var M=this.getStatusCode();
var N=this.getReadyState();

if(qx.io.remote.Exchange.wasSuccessful(M,N,this.__my)){try{O=this.getRequest().responseXML;
}catch(bN){}}if(typeof O==A&&O!=null){if(!O.documentElement){var s=String(this.getRequest().responseText).replace(/<\?xml[^\?]*\?>/,j);
O.loadXML(s);
}if(!O.documentElement){throw new Error("Missing Document Element!");
}
if(O.documentElement.tagName==y){throw new Error("XML-File is not well-formed!");
}}else{throw new Error("Response was not a valid xml document ["+this.getRequest().responseText+"]");
}return O;
},getFetchedLength:function(){var bA=this.getResponseText();
return typeof bA==v?bA.length:0;
},getResponseContent:function(){var P=this.getState();

if(P!==n&&P!=o){{};
return null;
}{};
var R=this.getResponseText();

if(P==o){{};
return R;
}
switch(this.getResponseType()){case G:case J:{};
return R;
case K:{};

try{if(R&&R.length>0){var Q;

if(this.getParseJson()){Q=qx.util.Json.parse(R,false);
Q=(Q===0?0:(Q||null));
}else{Q=R;
}return Q;
}else{return null;
}}catch(ba){this.error("Could not execute json: ["+R+"]",ba);
return t+R+u;
}case F:{};

try{if(R&&R.length>0){var Q=window.eval(R);
return (Q===0?0:(Q||null));
}else{return null;
}}catch(bz){this.error("Could not execute javascript: ["+R+"]",bz);
return null;
}case c:R=this.getResponseXml();
{};
return (R===0?0:(R||null));
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}},_applyState:function(bw,bx){{};

switch(bw){case D:this.fireEvent(D);
break;
case f:this.fireEvent(f);
break;
case h:this.fireEvent(h);
break;
case H:this.fireEvent(H);
break;
case n:this.fireEvent(n);
break;
case o:this.fireEvent(o);
break;
case k:this.getRequest().abort();
this.fireEvent(k);
break;
case d:this.getRequest().abort();
this.fireEvent(d);
break;
}}},defer:function(){qx.io.remote.Exchange.registerType(qx.io.remote.transport.XmlHttp,L);
},destruct:function(){var b=this.getRequest();

if(b){b.onreadystatechange=qx.lang.Function.empty;
switch(b.readyState){case 1:case 2:case 3:b.abort();
}}this.__mA=null;
}});
})();
(function(){var n="Boolean",m="qx.event.type.Event",l="queued",k="String",j="sending",i="receiving",h="aborted",g="failed",f="nocache",d="completed",S="qx.io.remote.Response",R="POST",Q="configured",P="timeout",O="GET",N="Pragma",M="no-url-params-on-post",L="PUT",K="no-cache",J="Cache-Control",u="Content-Type",w="text/plain",s="application/xml",t="application/json",q="text/html",r="application/x-www-form-urlencoded",o="qx.io.remote.Exchange",p="Integer",x="X-Qooxdoo-Response-Type",y="HEAD",B="qx.io.remote.Request",A="_applyResponseType",D="_applyState",C="text/javascript",F="changeState",E="_applyProhibitCaching",z="",I="_applyMethod",H="DELETE",G="boolean";
qx.Class.define(B,{extend:qx.core.Object,construct:function(W,X,Y){qx.core.Object.call(this);
this.__ro={};
this.__rp={};
this.__rq={};
this.__rr={};

if(W!==undefined){this.setUrl(W);
}
if(X!==undefined){this.setMethod(X);
}
if(Y!==undefined){this.setResponseType(Y);
}this.setProhibitCaching(true);
this.__rs=++qx.io.remote.Request.__rs;
},events:{"created":m,"configured":m,"sending":m,"receiving":m,"completed":S,"aborted":m,"failed":S,"timeout":S},statics:{__rs:0,methodAllowsRequestBody:function(bl){return (bl==R)||(bl==L);
}},properties:{url:{check:k,init:z},method:{check:[O,R,L,y,H],apply:I,init:O},asynchronous:{check:n,init:true},data:{check:k,nullable:true},username:{check:k,nullable:true},password:{check:k,nullable:true},state:{check:[Q,l,j,i,d,h,P,g],init:Q,apply:D,event:F},responseType:{check:[w,C,t,s,q],init:w,apply:A},timeout:{check:p,nullable:true},prohibitCaching:{check:function(v){return typeof v==G||v===M;
},init:true,apply:E},crossDomain:{check:n,init:false},fileUpload:{check:n,init:false},transport:{check:o,nullable:true},useBasicHttpAuth:{check:n,init:false},parseJson:{check:n,init:true}},members:{__ro:null,__rp:null,__rq:null,__rr:null,__rs:null,send:function(){qx.io.remote.RequestQueue.getInstance().add(this);
},abort:function(){qx.io.remote.RequestQueue.getInstance().abort(this);
},reset:function(){switch(this.getState()){case j:case i:this.error("Aborting already sent request!");
case l:this.abort();
break;
}},isConfigured:function(){return this.getState()===Q;
},isQueued:function(){return this.getState()===l;
},isSending:function(){return this.getState()===j;
},isReceiving:function(){return this.getState()===i;
},isCompleted:function(){return this.getState()===d;
},isAborted:function(){return this.getState()===h;
},isTimeout:function(){return this.getState()===P;
},isFailed:function(){return this.getState()===g;
},__rt:function(e){var bs=e.clone();
bs.setTarget(this);
this.dispatchEvent(bs);
},_onqueued:function(e){this.setState(l);
this.__rt(e);
},_onsending:function(e){this.setState(j);
this.__rt(e);
},_onreceiving:function(e){this.setState(i);
this.__rt(e);
},_oncompleted:function(e){this.setState(d);
this.__rt(e);
this.dispose();
},_onaborted:function(e){this.setState(h);
this.__rt(e);
this.dispose();
},_ontimeout:function(e){this.setState(P);
this.__rt(e);
this.dispose();
},_onfailed:function(e){this.setState(g);
this.__rt(e);
this.dispose();
},_applyState:function(T,U){{};
},_applyProhibitCaching:function(bm,bn){if(!bm){this.removeParameter(f);
this.removeRequestHeader(N);
this.removeRequestHeader(J);
return;
}if(bm!==M||this.getMethod()!=R){this.setParameter(f,new Date().valueOf());
}else{this.removeParameter(f);
}this.setRequestHeader(N,K);
this.setRequestHeader(J,K);
},_applyMethod:function(bg,bh){if(qx.io.remote.Request.methodAllowsRequestBody(bg)){this.setRequestHeader(u,r);
}else{this.removeRequestHeader(u);
}var bi=this.getProhibitCaching();
this._applyProhibitCaching(bi,bi);
},_applyResponseType:function(bt,bu){this.setRequestHeader(x,bt);
},setRequestHeader:function(bj,bk){this.__ro[bj]=bk;
},removeRequestHeader:function(V){delete this.__ro[V];
},getRequestHeader:function(bf){return this.__ro[bf]||null;
},getRequestHeaders:function(){return this.__ro;
},setParameter:function(a,b,c){if(c){this.__rq[a]=b;
}else{this.__rp[a]=b;
}},removeParameter:function(bd,be){if(be){delete this.__rq[bd];
}else{delete this.__rp[bd];
}},getParameter:function(bq,br){if(br){return this.__rq[bq]||null;
}else{return this.__rp[bq]||null;
}},getParameters:function(bc){return (bc?this.__rq:this.__rp);
},setFormField:function(ba,bb){this.__rr[ba]=bb;
},removeFormField:function(bp){delete this.__rr[bp];
},getFormField:function(bo){return this.__rr[bo]||null;
},getFormFields:function(){return this.__rr;
},getSequenceNumber:function(){return this.__rs;
}},destruct:function(){this.setTransport(null);
this.__ro=this.__rp=this.__rq=this.__rr=null;
}});
})();
(function(){var j="[",h="changeModel",g="qx.core.Object",f="qx.data.controller.Object",e="get",d="reset",c="_applyModel",b="last";
qx.Class.define(f,{extend:qx.core.Object,construct:function(a){qx.core.Object.call(this);
this.__Gj={};
this.__Gk=[];

if(a!=null){this.setModel(a);
}},properties:{model:{check:g,event:h,apply:c,nullable:true,dereference:true}},members:{__Gk:null,__Gj:null,_applyModel:function(t,u){for(var i=0;i<this.__Gk.length;i++){var C=this.__Gk[i][0];
var z=this.__Gk[i][1];
var x=this.__Gk[i][2];
var A=this.__Gk[i][3];
var B=this.__Gk[i][4];
var w=this.__Gk[i][5];
if(u!=undefined){this.__Gm(C,z,x,u);
}if(t!=undefined){this.__Gl(C,z,x,A,B,w);
}else{if(C.isDisposed()||qx.core.ObjectRegistry.inShutDown){continue;
}if(z.indexOf(j)==-1){C[d+qx.lang.String.firstUp(z)]();
}else{var open=z.indexOf(j);
var v=parseInt(z.substring(open+1,z.length-1));
z=z.substring(0,open);
var y=C[e+qx.lang.String.firstUp(z)]();

if(v==b){v=y.length;
}
if(y){y.setItem(v,null);
}}}}},addTarget:function(D,E,F,G,H,I){this.__Gk.push([D,E,F,G,H,I]);
this.__Gl(D,E,F,G,H,I);
},__Gl:function(k,l,m,n,o,p){if(this.getModel()==null){return;
}var q=this.getModel().bind(m,k,l,o);
var r=null;

if(n){r=k.bind(l,this.getModel(),m,p);
}var s=k.toHashCode();

if(this.__Gj[s]==undefined){this.__Gj[s]=[];
}this.__Gj[s].push([q,r,l,m,o,p]);
},removeTarget:function(J,K,L){this.__Gm(J,K,L,this.getModel());
for(var i=0;i<this.__Gk.length;i++){if(this.__Gk[i][0]==J&&this.__Gk[i][1]==K&&this.__Gk[i][2]==L){this.__Gk.splice(i,1);
}}},__Gm:function(M,N,O,P){if(!(M instanceof qx.core.Object)){return ;
}var Q=this.__Gj[M.toHashCode()];
if(Q==undefined||Q.length==0){return;
}for(var i=0;i<Q.length;i++){if(Q[i][2]==N&&Q[i][3]==O){var R=Q[i][0];
P.removeBinding(R);
if(Q[i][1]!=null){M.removeBinding(Q[i][1]);
}Q.splice(i,1);
return;
}}}},destruct:function(){if(this.getModel()!=null&&!this.getModel().isDisposed()){this.setModel(null);
}}});
})();

});