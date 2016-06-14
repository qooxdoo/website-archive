qx.$$packageData['643d0a5ca112']={"resources":{"qx/static/blank.gif":[1,1,"gif","qx"]}};
(function(){var p="failed",o="sending",n="completed",m="receiving",k="aborted",j="timeout",h="qx.event.type.Event",g="Connection dropped",f="qx.io.remote.Response",d="configured",bl="Proxy authentication required",bk="qx.io.remote.transport.Abstract",bj="MSHTML-specific HTTP status code",bi="Not available",bh="Precondition failed",bg="Server error",bf="Moved temporarily",be="qx.io.remote.Exchange",bd="Bad gateway",bc="Gone",w="See other",x="Partial content",u="Server timeout",v="qx.io.remote.transport.Script",s="HTTP version not supported",t="Unauthorized",q="Multiple choices",r="Payment required",A="Not implemented",B="Request-URL too large",J="Length required",H="_applyState",R="changeState",M="Not modified",X="qx.io.remote.Request",V="Connection closed by server",D="Moved permanently",bb="_applyImplementation",ba="Method not allowed",Y="Forbidden",C="Use proxy",F="Ok",G="Not found",I="Not acceptable",K="Request time-out",N="Bad request",S="Conflict",W="No content",y="qx.io.remote.transport.XmlHttp",z="qx.io.remote.transport.Iframe",E="Request entity too large",Q="Unknown status code",P="Unsupported media type",O="Gateway time-out",U="created",T="Out of resources",L="undefined";
qx.Class.define(be,{extend:qx.core.Object,construct:function(bI){arguments.callee.base.call(this);
this.setRequest(bI);
bI.setTransport(this);
},events:{"sending":h,"receiving":h,"completed":f,"aborted":h,"failed":f,"timeout":f},statics:{typesOrder:[y,z,v],typesReady:false,typesAvailable:{},typesSupported:{},registerType:function(bw,bx){qx.io.remote.Exchange.typesAvailable[bx]=bw;
},initTypes:function(){if(qx.io.remote.Exchange.typesReady){return;
}
for(var b in qx.io.remote.Exchange.typesAvailable){var a=qx.io.remote.Exchange.typesAvailable[b];

if(a.isSupported()){qx.io.remote.Exchange.typesSupported[b]=a;
}}qx.io.remote.Exchange.typesReady=true;

if(qx.lang.Object.isEmpty(qx.io.remote.Exchange.typesSupported)){throw new Error("No supported transport types were found!");
}},canHandle:function(br,bs,bt){if(!qx.lang.Array.contains(br.handles.responseTypes,bt)){return false;
}
for(var bu in bs){if(!br.handles[bu]){return false;
}}return true;
},_nativeMap:{0:U,1:d,2:o,3:m,4:n},wasSuccessful:function(bB,bC,bD){if(bD){switch(bB){case null:case 0:return true;
case -1:return bC<4;
default:return typeof bB===L;
}}else{switch(bB){case -1:{};
return bC<4;
case 200:case 304:return true;
case 201:case 202:case 203:case 204:case 205:return true;
case 206:{};
return bC!==4;
case 300:case 301:case 302:case 303:case 305:case 400:case 401:case 402:case 403:case 404:case 405:case 406:case 407:case 408:case 409:case 410:case 411:case 412:case 413:case 414:case 415:case 500:case 501:case 502:case 503:case 504:case 505:{};
return false;
case 12002:case 12007:case 12029:case 12030:case 12031:case 12152:case 13030:{};
return false;
default:if(bB>206&&bB<300){return true;
}qx.log.Logger.debug(this,"Unknown status code: "+bB+" ("+bC+")");
return false;
}}},statusCodeToString:function(bz){switch(bz){case -1:return bi;
case 200:return F;
case 304:return M;
case 206:return x;
case 204:return W;
case 300:return q;
case 301:return D;
case 302:return bf;
case 303:return w;
case 305:return C;
case 400:return N;
case 401:return t;
case 402:return r;
case 403:return Y;
case 404:return G;
case 405:return ba;
case 406:return I;
case 407:return bl;
case 408:return K;
case 409:return S;
case 410:return bc;
case 411:return J;
case 412:return bh;
case 413:return E;
case 414:return B;
case 415:return P;
case 500:return bg;
case 501:return A;
case 502:return bd;
case 503:return T;
case 504:return O;
case 505:return s;
case 12002:return u;
case 12029:return g;
case 12030:return g;
case 12031:return g;
case 12152:return V;
case 13030:return bj;
default:return Q;
}}},properties:{request:{check:X,nullable:true},implementation:{check:bk,nullable:true,apply:bb},state:{check:[d,o,m,n,k,j,p],init:d,event:R,apply:H}},members:{send:function(){var bM=this.getRequest();

if(!bM){return this.error("Please attach a request object first");
}qx.io.remote.Exchange.initTypes();
var bK=qx.io.remote.Exchange.typesOrder;
var bJ=qx.io.remote.Exchange.typesSupported;
var bO=bM.getResponseType();
var bP={};

if(bM.getAsynchronous()){bP.asynchronous=true;
}else{bP.synchronous=true;
}
if(bM.getCrossDomain()){bP.crossDomain=true;
}
if(bM.getFileUpload()){bP.fileUpload=true;
}for(var bN in bM.getFormFields()){bP.programaticFormFields=true;
break;
}var bQ,bL;

for(var i=0,l=bK.length;i<l;i++){bQ=bJ[bK[i]];

if(bQ){if(!qx.io.remote.Exchange.canHandle(bQ,bP,bO)){continue;
}
try{{};
bL=new bQ;
this.setImplementation(bL);
bL.setUseBasicHttpAuth(bM.getUseBasicHttpAuth());
bL.send();
return true;
}catch(c){this.error("Request handler throws error");
this.error(c);
return;
}}}this.error("There is no transport implementation available to handle this request: "+bM);
},abort:function(){var bH=this.getImplementation();

if(bH){{};
bH.abort();
}else{{};
this.setState(k);
}},timeout:function(){var bv=this.getImplementation();

if(bv){this.warn("Timeout: implementation "+bv.toHashCode());
bv.timeout();
}else{this.warn("Timeout: forcing state to timeout");
this.setState(j);
}this.__pS();
},__pS:function(){var by=this.getRequest();

if(by){by.setTimeout(0);
}},_onsending:function(e){this.setState(o);
},_onreceiving:function(e){this.setState(m);
},_oncompleted:function(e){this.setState(n);
},_onabort:function(e){this.setState(k);
},_onfailed:function(e){this.setState(p);
},_ontimeout:function(e){this.setState(j);
},_applyImplementation:function(bE,bF){if(bF){bF.removeListener(o,this._onsending,this);
bF.removeListener(m,this._onreceiving,this);
bF.removeListener(n,this._oncompleted,this);
bF.removeListener(k,this._onabort,this);
bF.removeListener(j,this._ontimeout,this);
bF.removeListener(p,this._onfailed,this);
}
if(bE){var bG=this.getRequest();
bE.setUrl(bG.getUrl());
bE.setMethod(bG.getMethod());
bE.setAsynchronous(bG.getAsynchronous());
bE.setUsername(bG.getUsername());
bE.setPassword(bG.getPassword());
bE.setParameters(bG.getParameters());
bE.setFormFields(bG.getFormFields());
bE.setRequestHeaders(bG.getRequestHeaders());
bE.setData(bG.getData());
bE.setResponseType(bG.getResponseType());
bE.addListener(o,this._onsending,this);
bE.addListener(m,this._onreceiving,this);
bE.addListener(n,this._oncompleted,this);
bE.addListener(k,this._onabort,this);
bE.addListener(j,this._ontimeout,this);
bE.addListener(p,this._onfailed,this);
}},_applyState:function(bm,bn){{};

switch(bm){case o:this.fireEvent(o);
break;
case m:this.fireEvent(m);
break;
case n:case k:case j:case p:var bp=this.getImplementation();

if(!bp){break;
}this.__pS();

if(this.hasListener(bm)){var bq=qx.event.Registration.createEvent(bm,qx.io.remote.Response);

if(bm==n){var bo=bp.getResponseContent();
bq.setContent(bo);
if(bo===null){{};
bm=p;
}}else if(bm==p){bq.setContent(bp.getResponseContent());
}bq.setStatusCode(bp.getStatusCode());
bq.setResponseHeaders(bp.getResponseHeaders());
this.dispatchEvent(bq);
}this.setImplementation(null);
bp.dispose();
break;
}}},settings:{"qx.ioRemoteDebug":false,"qx.ioRemoteDebugData":false},destruct:function(){var bA=this.getImplementation();

if(bA){this.setImplementation(null);
bA.dispose();
}this.setRequest(null);
}});
})();
(function(){var q="qx.event.type.Event",p="String",o="failed",n="timeout",m="created",l="aborted",k="sending",j="configured",i="receiving",h="completed",c="Object",g="Boolean",f="abstract",b="_applyState",a="GET",e="changeState",d="qx.io.remote.transport.Abstract";
qx.Class.define(d,{type:f,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
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
},getResponseHeader:function(r){throw new Error("getResponseHeader is abstract");
},getResponseHeaders:function(){throw new Error("getResponseHeaders is abstract");
},getStatusCode:function(){throw new Error("getStatusCode is abstract");
},getStatusText:function(){throw new Error("getStatusText is abstract");
},getResponseText:function(){throw new Error("getResponseText is abstract");
},getResponseXml:function(){throw new Error("getResponseXml is abstract");
},getFetchedLength:function(){throw new Error("getFetchedLength is abstract");
},_applyState:function(s,t){{};

switch(s){case m:this.fireEvent(m);
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
}}});
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
(function(){var v="configured",u="completed",t="changeState",s="changeModel",r="qx.data.store.Json",q="GET",p="_marshaler",o="sending",n="__vd",m="application/json",f="changeUrl",l="failed",i="loaded",e="timeout",d="queued",h="String",g="aborted",j="_applyUrl",c="receiving",k="qx.event.type.Data";
qx.Class.define(r,{extend:qx.core.Object,construct:function(a,b){arguments.callee.base.call(this);
this._marshaler=new qx.data.marshal.Json(b);
this._delegate=b;

if(a!=null){this.setUrl(a);
}},events:{"loaded":k},properties:{model:{nullable:true,event:s},state:{check:[v,d,o,c,u,g,e,l],init:v,event:t},url:{check:h,apply:j,event:f}},members:{__vd:null,_delegate:null,_applyUrl:function(D,E){if(D!=null){this._createRequest(D);
}},_createRequest:function(A){this.__vd=new qx.io.remote.Request(A,q,m);
var B=this._delegate;

if(B&&qx.lang.Type.isFunction(B.configureRequest)){this._delegate.configureRequest(this.__vd);
}this.__vd.addListener(u,this.__ve,this);
this.__vd.addListener(t,function(z){this.setState(z.getData());
},this);
this.__vd.send();
},__ve:function(w){var y=w.getContent();
var x=this._delegate;

if(x&&qx.lang.Type.isFunction(x.manipulateData)){y=this._delegate.manipulateData(y);
}this._marshaler.toClass(y,true);
this.setModel(this._marshaler.toModel(y));
this.fireDataEvent(i,this.getModel());
},reload:function(){var C=this.getUrl();

if(C!=null){this._createRequest(C);
}}},destruct:function(){this._disposeObjects(p,n);
this._delegate=null;
}});
})();
(function(){var l="?",k="&",j="loaded",i='qx.data.store.Jsonp[',h='].callback',g="failed",f="=",e="qx.data.store.Jsonp",d="String";
qx.Class.define(e,{extend:qx.data.store.Json,construct:function(a,b,c){if(c!=undefined){this.setCallbackParam(c);
}arguments.callee.base.call(this,a,b);
},properties:{callbackParam:{check:d,nullable:false}},members:{__vb:null,_createRequest:function(p){if(this.__vb){this.__vb.dispose();
}this.__vb=new qx.io.ScriptLoader();
var r=this._delegate;

if(r&&qx.lang.Type.isFunction(r.configureRequest)){this._delegate.configureRequest(this.__vb);
}var q=p.indexOf(l)==-1?l:k;
p+=q+this.getCallbackParam()+f;
var s=parseInt(this.toHashCode(),36);
qx.data.store.Jsonp[s]=this;
p+=i+s+h;
this.__vb.load(p,function(o){delete this[s];
},this);
},callback:function(t){if(this.isDisposed()){return;
}this.__vc(t);
},__vc:function(m){if(m==undefined){this.setState(g);
return;
}var n=this._delegate;

if(n&&qx.lang.Type.isFunction(n.manipulateData)){m=this._delegate.manipulateData(m);
}this._marshaler.toClass(m);
this.setModel(this._marshaler.toModel(m));
this.fireDataEvent(j,this.getModel());
}},destruct:function(){if(this.__vb){this.__vb.dispose();
}this.__vb=null;
}});
})();
(function(){var s="=",r="&",q="application/xml",p="application/json",o="text/html",n="qx.client",m="textarea",l="none",k="text/plain",j="text/javascript",M="",L="completed",K="?",J="qx.io.remote.transport.Iframe",I="gecko",H="frame_",G="aborted",F="_data_",E="pre",D="javascript:void(0)",z="sending",A="form",x="failed",y='<iframe name="',v="mshtml",w="form_",t='"></iframe>',u="iframe",B="timeout",C="qx/static/blank.gif";
qx.Class.define(J,{extend:qx.io.remote.transport.Abstract,construct:function(){arguments.callee.base.call(this);
var S=(new Date).valueOf();
var T=H+S;
var U=w+S;
if(qx.core.Variant.isSet(n,v)){this.__pW=document.createElement(y+T+t);
}else{this.__pW=document.createElement(u);
}this.__pW.src=D;
this.__pW.id=this.__pW.name=T;
this.__pW.onload=qx.lang.Function.bind(this._onload,this);
this.__pW.style.display=l;
document.body.appendChild(this.__pW);
this.__pX=document.createElement(A);
this.__pX.target=T;
this.__pX.id=this.__pX.name=U;
this.__pX.style.display=l;
document.body.appendChild(this.__pX);
this.__pY=document.createElement(m);
this.__pY.id=this.__pY.name=F;
this.__pX.appendChild(this.__pY);
this.__pW.onreadystatechange=qx.lang.Function.bind(this._onreadystatechange,this);
},statics:{handles:{synchronous:false,asynchronous:true,crossDomain:false,fileUpload:true,programaticFormFields:true,responseTypes:[k,j,p,q,o]},isSupported:function(){return true;
},_numericMap:{"uninitialized":1,"loading":2,"loaded":2,"interactive":3,"complete":4}},members:{__pY:null,__qa:0,__pX:null,__pW:null,send:function(){var W=this.getMethod();
var Y=this.getUrl();
var bd=this.getParameters(false);
var bc=[];

for(var X in bd){var ba=bd[X];

if(ba instanceof Array){for(var i=0;i<ba.length;i++){bc.push(encodeURIComponent(X)+s+encodeURIComponent(ba[i]));
}}else{bc.push(encodeURIComponent(X)+s+encodeURIComponent(ba));
}}
if(bc.length>0){Y+=(Y.indexOf(K)>=0?r:K)+bc.join(r);
}if(this.getData()===null){var bd=this.getParameters(true);
var bc=[];

for(var X in bd){var ba=bd[X];

if(ba instanceof Array){for(var i=0;i<ba.length;i++){bc.push(encodeURIComponent(X)+s+encodeURIComponent(ba[i]));
}}else{bc.push(encodeURIComponent(X)+s+encodeURIComponent(ba));
}}
if(bc.length>0){this.setData(bc.join(r));
}}var V=this.getFormFields();

for(var X in V){var bb=document.createElement(m);
bb.name=X;
bb.appendChild(document.createTextNode(V[X]));
this.__pX.appendChild(bb);
}this.__pX.action=Y;
this.__pX.method=W;
this.__pY.appendChild(document.createTextNode(this.getData()));
this.__pX.submit();
this.setState(z);
},_onload:qx.event.GlobalError.observeMethod(function(e){if(this.__pX.src){return;
}this._switchReadyState(qx.io.remote.transport.Iframe._numericMap.complete);
}),_onreadystatechange:qx.event.GlobalError.observeMethod(function(e){this._switchReadyState(qx.io.remote.transport.Iframe._numericMap[this.__pW.readyState]);
}),_switchReadyState:function(g){switch(this.getState()){case L:case G:case x:case B:this.warn("Ignore Ready State Change");
return;
}while(this.__qa<g){this.setState(qx.io.remote.Exchange._nativeMap[++this.__qa]);
}},setRequestHeader:function(a,b){},getResponseHeader:function(Q){return null;
},getResponseHeaders:function(){return {};
},getStatusCode:function(){return 200;
},getStatusText:function(){return M;
},getIframeWindow:function(){return qx.bom.Iframe.getWindow(this.__pW);
},getIframeDocument:function(){return qx.bom.Iframe.getDocument(this.__pW);
},getIframeBody:function(){return qx.bom.Iframe.getBody(this.__pW);
},getIframeTextContent:function(){var h=this.getIframeBody();

if(!h){return null;
}
if(!h.firstChild){return M;
}if(h.firstChild.tagName&&h.firstChild.tagName.toLowerCase()==E){return h.firstChild.innerHTML;
}else{return h.innerHTML;
}},getIframeHtmlContent:function(){var f=this.getIframeBody();
return f?f.innerHTML:null;
},getFetchedLength:function(){return 0;
},getResponseContent:function(){if(this.getState()!==L){{};
return null;
}{};
var c=this.getIframeTextContent();

switch(this.getResponseType()){case k:{};
return c;
break;
case o:c=this.getIframeHtmlContent();
{};
return c;
break;
case p:c=this.getIframeHtmlContent();
{};

try{return c&&c.length>0?qx.util.Json.parse(c,false):null;
}catch(R){return this.error("Could not execute json: ("+c+")",R);
}case j:c=this.getIframeHtmlContent();
{};

try{return c&&c.length>0?window.eval(c):null;
}catch(d){return this.error("Could not execute javascript: ("+c+")",d);
}case q:c=this.getIframeDocument();
{};
return c;
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}}},defer:function(N,O,P){qx.io.remote.Exchange.registerType(qx.io.remote.transport.Iframe,J);
},destruct:function(){if(this.__pW){this.__pW.onload=null;
this.__pW.onreadystatechange=null;
if(qx.core.Variant.isSet(n,I)){this.__pW.src=qx.util.ResourceManager.getInstance().toUri(C);
}document.body.removeChild(this.__pW);
}
if(this.__pX){document.body.removeChild(this.__pX);
}this.__pW=this.__pX=null;
}});
})();
(function(){var p=",",o="",n="string",m="null",k='"',j="qx.jsonDebugging",h='\\u00',g="new Date(Date.UTC(",f="__pe",e="__pg",L='\\\\',K='\\f',J='\\"',I="))",H="}",G='(',F=":",E="{",D='\\r',C="__pf",w="__pd",x='\\t',u="]",v="[",s="Use 'parse' instead!",t="__pn",q="qx.jsonEncodeUndefined",r="__po",y='\\b',z="qx.util.Json",B=')',A='\\n';
qx.Class.define(z,{statics:{__pb:null,BEAUTIFYING_INDENT:"  ",BEAUTIFYING_LINE_END:"\n",__pc:{"function":w,"boolean":f,"number":C,"string":e,"object":t,"undefined":r},__pd:function(bz,bA){return String(bz);
},__pe:function(M,N){return String(M);
},__pf:function(c,d){return isFinite(c)?String(c):m;
},__pg:function(S,T){var U;

if(/["\\\x00-\x1f]/.test(S)){U=S.replace(/([\x00-\x1f\\"])/g,qx.util.Json.__pi);
}else{U=S;
}return k+U+k;
},__ph:{'\b':y,'\t':x,'\n':A,'\f':K,'\r':D,'"':J,'\\':L},__pi:function(a,b){var V=qx.util.Json.__ph[b];

if(V){return V;
}V=b.charCodeAt();
return h+Math.floor(V/16).toString(16)+(V%16).toString(16);
},__pj:function(bf,bg){var bi=[],bl=true,bk,bh;
var bj=qx.util.Json.__pq;
bi.push(v);

if(bj){qx.util.Json.__pk+=qx.util.Json.BEAUTIFYING_INDENT;
bi.push(qx.util.Json.__pk);
}
for(var i=0,l=bf.length;i<l;i++){bh=bf[i];
bk=this.__pc[typeof bh];

if(bk){bh=this[bk](bh,i+o);

if(typeof bh==n){if(!bl){bi.push(p);

if(bj){bi.push(qx.util.Json.__pk);
}}bi.push(bh);
bl=false;
}}}
if(bj){qx.util.Json.__pk=qx.util.Json.__pk.substring(0,qx.util.Json.__pk.length-qx.util.Json.BEAUTIFYING_INDENT.length);
bi.push(qx.util.Json.__pk);
}bi.push(u);
return bi.join(o);
},__pl:function(bq,br){var bs=bq.getUTCFullYear()+p+bq.getUTCMonth()+p+bq.getUTCDate()+p+bq.getUTCHours()+p+bq.getUTCMinutes()+p+bq.getUTCSeconds()+p+bq.getUTCMilliseconds();
return g+bs+I;
},__pm:function(X,Y){var bc=[],be=true,bb,ba;
var bd=qx.util.Json.__pq;
bc.push(E);

if(bd){qx.util.Json.__pk+=qx.util.Json.BEAUTIFYING_INDENT;
bc.push(qx.util.Json.__pk);
}
for(var Y in X){ba=X[Y];
bb=this.__pc[typeof ba];

if(bb){ba=this[bb](ba,Y);

if(typeof ba==n){if(!be){bc.push(p);

if(bd){bc.push(qx.util.Json.__pk);
}}bc.push(this.__pg(Y),F,ba);
be=false;
}}}
if(bd){qx.util.Json.__pk=qx.util.Json.__pk.substring(0,qx.util.Json.__pk.length-qx.util.Json.BEAUTIFYING_INDENT.length);
bc.push(qx.util.Json.__pk);
}bc.push(H);
return bc.join(o);
},__pn:function(O,P){if(O){if(qx.lang.Type.isFunction(O.toJSON)&&O.toJSON!==this.__pb){return this.__pp(O.toJSON(P),P);
}else if(qx.lang.Type.isDate(O)){return this.__pl(O,P);
}else if(qx.lang.Type.isArray(O)){return this.__pj(O,P);
}else if(qx.lang.Type.isObject(O)){return this.__pm(O,P);
}return o;
}return m;
},__po:function(bx,by){if(qx.core.Setting.get(q)){return m;
}},__pp:function(Q,R){return this[this.__pc[typeof Q]](Q,R);
},stringify:function(bt,bu){this.__pq=bu;
this.__pk=this.BEAUTIFYING_LINE_END;
var bv=this.__pp(bt,o);

if(typeof bv!=n){bv=null;
}if(qx.core.Setting.get(j)){qx.log.Logger.debug(this,"JSON request: "+bv);
}return bv;
},parse:function(bn,bo){if(bo===undefined){bo=true;
}
if(qx.core.Setting.get(j)){qx.log.Logger.debug(this,"JSON response: "+bn);
}
if(bo){if(/[^,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]/.test(bn.replace(/"(\\.|[^"\\])*"/g,o))){throw new Error("Could not parse JSON string!");
}}
try{var bp=(bn&&bn.length>0)?eval(G+bn+B):null;
return bp;
}catch(W){throw new Error("Could not evaluate JSON string: "+W.message);
}},parseQx:function(bm){qx.log.Logger.deprecatedMethodWarning(arguments.callee,s);
return qx.util.Json.parse(bm,false);
}},settings:{"qx.jsonEncodeUndefined":true,"qx.jsonDebugging":false},defer:function(bw){bw.__pb=Date.prototype.toJSON;
}});
})();
(function(){var c="Integer",b="Object",a="qx.io.remote.Response";
qx.Class.define(a,{extend:qx.event.type.Event,properties:{state:{check:c,nullable:true},statusCode:{check:c,nullable:true},content:{nullable:true},responseHeaders:{check:b,nullable:true}},members:{clone:function(d){var e=arguments.callee.base.call(this,d);
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
(function(){var t="Integer",s="aborted",r="_onaborted",q="_on",p="_applyEnabled",o="Boolean",n="__pO",m="sending",l="interval",k="__pQ",d="failed",j="qx.io.remote.RequestQueue",h="timeout",c="completed",b="queued",g="receiving",f="singleton";
qx.Class.define(j,{type:f,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__pN=[];
this.__pO=[];
this.__pP=0;
this.__pQ=new qx.event.Timer(500);
this.__pQ.addListener(l,this._oninterval,this);
},properties:{enabled:{init:true,check:o,apply:p},maxTotalRequests:{check:t,nullable:true},maxConcurrentRequests:{check:t,init:qx.bom.client.Transport.getMaxConcurrentRequestCount()},defaultTimeout:{check:t,init:5000}},members:{__pN:null,__pO:null,__pP:null,__pQ:null,getRequestQueue:function(){return this.__pN;
},getActiveQueue:function(){return this.__pO;
},_debug:function(){var a;
{};
},_check:function(){this._debug();
if(this.__pO.length==0&&this.__pN.length==0){this.__pQ.stop();
}if(!this.getEnabled()){return;
}if(this.__pN.length==0||(this.__pN[0].isAsynchronous()&&this.__pO.length>=this.getMaxConcurrentRequests())){return;
}if(this.getMaxTotalRequests()!=null&&this.__pP>=this.getMaxTotalRequests()){return;
}var E=this.__pN.shift();
var F=new qx.io.remote.Exchange(E);
this.__pP++;
this.__pO.push(F);
this._debug();
F.addListener(m,this._onsending,this);
F.addListener(g,this._onreceiving,this);
F.addListener(c,this._oncompleted,this);
F.addListener(s,this._oncompleted,this);
F.addListener(h,this._oncompleted,this);
F.addListener(d,this._oncompleted,this);
F._start=(new Date).valueOf();
F.send();
if(this.__pN.length>0){this._check();
}},_remove:function(C){qx.lang.Array.remove(this.__pO,C);
C.dispose();
this._check();
},__pR:0,_onsending:function(e){{};
e.getTarget().getRequest()._onsending(e);
},_onreceiving:function(e){e.getTarget().getRequest()._onreceiving(e);
},_oncompleted:function(e){{};
var L=e.getTarget().getRequest();
var K=q+e.getType();
try{if(L[K]){L[K](e);
}}catch(D){var J=qx.dev.StackTrace.getStackTraceFromError(D);
this.error("Request "+L+" handler "+K+" threw an error: "+D+"\nStack Trace:\n"+J);
try{if(L[r]){var event=qx.event.Registration.createEvent(s,qx.event.type.Event);
L[r](event);
}}catch(I){}}finally{this._remove(e.getTarget());
}},_oninterval:function(e){var B=this.__pO;

if(B.length==0){this.__pQ.stop();
return;
}var w=(new Date).valueOf();
var z;
var x;
var A=this.getDefaultTimeout();
var y;
var v;

for(var i=B.length-1;i>=0;i--){z=B[i];
x=z.getRequest();

if(x.isAsynchronous()){y=x.getTimeout();
if(y==0){continue;
}
if(y==null){y=A;
}v=w-z._start;

if(v>y){this.warn("Timeout: transport "+z.toHashCode());
this.warn(v+"ms > "+y+"ms");
z.timeout();
}}}},_applyEnabled:function(M,N){if(M){this._check();
}this.__pQ.setEnabled(M);
},add:function(u){u.setState(b);

if(u.isAsynchronous()){this.__pN.push(u);
}else{this.__pN.unshift(u);
}this._check();

if(this.getEnabled()){this.__pQ.start();
}},abort:function(G){var H=G.getTransport();

if(H){H.abort();
}else if(qx.lang.Array.contains(this.__pN,G)){qx.lang.Array.remove(this.__pN,G);
}}},destruct:function(){this._disposeArray(n);
this._disposeObjects(k);
this.__pN=null;
}});
})();
(function(){var r="&",q="=",p="?",o="application/json",n="completed",m="text/plain",l="text/javascript",k="qx.io.remote.transport.Script",j="",h="_ScriptTransport_data",c="script",g="timeout",f="_ScriptTransport_",b="_ScriptTransport_id",a="aborted",e="utf-8",d="failed";
qx.Class.define(k,{extend:qx.io.remote.transport.Abstract,construct:function(){arguments.callee.base.call(this);
var s=++qx.io.remote.transport.Script.__qb;

if(s>=2000000000){qx.io.remote.transport.Script.__qb=s=1;
}this.__qc=null;
this.__qb=s;
},statics:{__qb:0,_instanceRegistry:{},ScriptTransport_PREFIX:f,ScriptTransport_ID_PARAM:b,ScriptTransport_DATA_PARAM:h,handles:{synchronous:false,asynchronous:true,crossDomain:true,fileUpload:false,programaticFormFields:false,responseTypes:[m,l,o]},isSupported:function(){return true;
},_numericMap:{"uninitialized":1,"loading":2,"loaded":2,"interactive":3,"complete":4},_requestFinished:qx.event.GlobalError.observeMethod(function(t,content){var u=qx.io.remote.transport.Script._instanceRegistry[t];

if(u==null){{};
}else{u._responseContent=content;
u._switchReadyState(qx.io.remote.transport.Script._numericMap.complete);
}})},members:{__qd:0,__qc:null,__qb:null,send:function(){var x=this.getUrl();
x+=(x.indexOf(p)>=0?r:p)+qx.io.remote.transport.Script.ScriptTransport_ID_PARAM+q+this.__qb;
var A=this.getParameters();
var z=[];

for(var w in A){if(w.indexOf(qx.io.remote.transport.Script.ScriptTransport_PREFIX)==0){this.error("Illegal parameter name. The following prefix is used internally by qooxdoo): "+qx.io.remote.transport.Script.ScriptTransport_PREFIX);
}var y=A[w];

if(y instanceof Array){for(var i=0;i<y.length;i++){z.push(encodeURIComponent(w)+q+encodeURIComponent(y[i]));
}}else{z.push(encodeURIComponent(w)+q+encodeURIComponent(y));
}}
if(z.length>0){x+=r+z.join(r);
}var v=this.getData();

if(v!=null){x+=r+qx.io.remote.transport.Script.ScriptTransport_DATA_PARAM+q+encodeURIComponent(v);
}qx.io.remote.transport.Script._instanceRegistry[this.__qb]=this;
this.__qc=document.createElement(c);
this.__qc.charset=e;
this.__qc.src=x;
{};
document.body.appendChild(this.__qc);
},_switchReadyState:function(B){switch(this.getState()){case n:case a:case d:case g:this.warn("Ignore Ready State Change");
return;
}while(this.__qd<B){this.setState(qx.io.remote.Exchange._nativeMap[++this.__qd]);
}},setRequestHeader:function(H,I){},getResponseHeader:function(F){return null;
},getResponseHeaders:function(){return {};
},getStatusCode:function(){return 200;
},getStatusText:function(){return j;
},getFetchedLength:function(){return 0;
},getResponseContent:function(){if(this.getState()!==n){{};
return null;
}{};

switch(this.getResponseType()){case m:case o:case l:{};
var G=this._responseContent;
return (G===0?0:(G||null));
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}}},defer:function(C,D,E){qx.io.remote.Exchange.registerType(qx.io.remote.transport.Script,k);
},destruct:function(){if(this.__qc){delete qx.io.remote.transport.Script._instanceRegistry[this.__qb];
document.body.removeChild(this.__qc);
}this.__qc=this._responseContent=null;
}});
})();
(function(){var k="value",j="icon",h="model",g="text",f="qx.client",e="execute",d="source",c="mshtml",b=" ",a="user.profile_image_url",L="showcase/databinding/twitter_logo_outline.png",K="Enter",J="one",I="http",H="keydown",G="http://twitter.com/statuses/user_timeline/1and1.json",F="Friends",E="<a href='",D="1and1",C="callback",r="selection[0]",s="username",p="showcase.page.databinding.Content",q="Location: ",n="Details",o="user.name",l="Name: ",m="</a>",t="Posted with: ",u="' target='_blank'>",x="http://twitter.com/statuses/friends_timeline.json",w="Show",z="user.location",y=".json",B="http://twitter.com/statuses/user_timeline/",A="Avatar: ",v="Message: ";
qx.Class.define(p,{extend:showcase.AbstractContent,construct:function(N){arguments.callee.base.call(this,N);
this.setView(this._createView());
},members:{_createView:function(){var bd=new qx.ui.container.Composite(new qx.ui.layout.Canvas());
var Y=new qx.ui.basic.Image(L);
bd.add(Y,{left:10,top:15});
var T=new qx.ui.form.List();
bd.add(T,{left:10,top:135,bottom:5});
T.set({selectionMode:J,width:300,maxHeight:400});
var W=new qx.data.controller.List(null,T);
W.setDelegate(this);
W.setLabelPath(g);
if(!qx.core.Variant.isSet(f,c)){W.setIconPath(a);
}var Q=G;
var bc=new qx.data.store.Jsonp(Q,null,C);
bc.bind(h,W,h);
var U=new qx.ui.container.Composite(new qx.ui.layout.HBox(5));
U.set({width:300});
var R=new qx.ui.form.Button(F);
U.add(R);
R.addListener(e,function(){bc.setUrl(x);
},this);
U.add(new qx.ui.core.Spacer(),{flex:1});
var O=new qx.ui.form.TextField(D);
O.setPlaceholder(s);
U.add(O);
var X=new qx.ui.form.Button(w);
U.add(X);
X.addListener(e,function(){var bf=B+O.getValue()+y;

if(bc.getUrl()==bf){bc.reload();
}else{bc.setUrl(bf);
}},this);
O.addListener(H,function(M){if(M.getKeyIdentifier()==K){X.execute();
}},this);
bd.add(U,{left:10,top:105});
var S=new qx.ui.groupbox.GroupBox(n);
bd.add(S,{left:320,top:116,bottom:5});
S.setWidth(270);
S.setHeight(220);
S.setAllowGrowY(false);
S.setLayout(new qx.ui.layout.Grid(5,5));
S.add(new qx.ui.basic.Label(l),{row:0,column:0});
S.add(new qx.ui.basic.Label(q),{row:1,column:0});
S.add(new qx.ui.basic.Label(v),{row:2,column:0});
S.add(new qx.ui.basic.Label(t),{row:3,column:0});
var name=new qx.ui.basic.Label();
S.add(name,{row:0,column:1});
var location=new qx.ui.basic.Label();
S.add(location,{row:1,column:1});
var ba=new qx.ui.basic.Label();
ba.setRich(true);
ba.setWidth(150);
ba.setSelectable(true);
S.add(ba,{row:2,column:1});
var bb=new qx.ui.basic.Label();
bb.setRich(true);
S.add(bb,{row:3,column:1});
var P=new qx.data.controller.Object();
P.addTarget(name,k,o);
P.addTarget(location,k,z);
P.addTarget(ba,k,g,false,{converter:function(bg){var bh=bg.split(b);

for(var i=bh.length-1;i>=0;i--){if(bh[i].indexOf(I)==0){bh[i]=E+bh[i]+u+bh[i]+m;
}}return bh.join(b);
}});
P.addTarget(bb,k,d);

if(!qx.core.Variant.isSet(f,c)){S.add(new qx.ui.basic.Label(A),{row:4,column:0});
var V=new qx.ui.basic.Image();
S.add(V,{row:4,column:1});
P.addTarget(V,d,a);
}W.bind(r,P,h);
return bd;
},configureItem:function(be){be.setRich(true);
be.getChildControl(j).setWidth(48);
be.getChildControl(j).setHeight(48);
be.getChildControl(j).setScale(true);
}}});
})();
(function(){var bk="failed",bj="completed",bi="=",bh="aborted",bg="",bf="sending",be="&",bd="configured",bc="timeout",bb="application/xml",bF="qx.io.remote.transport.XmlHttp",bE="application/json",bD="text/html",bC="qx.client",bB="receiving",bA="text/plain",bz="text/javascript",by="?",bx="created",bw='Referer',br='Basic ',bs="\n</pre>",bp="string",bq='Authorization',bn="<pre>Could not execute json: \n",bo="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",bl=':',bm="parseerror",bt="file:",bu="webkit",bv="object";
qx.Class.define(bF,{extend:qx.io.remote.transport.Abstract,statics:{handles:{synchronous:true,asynchronous:true,crossDomain:false,fileUpload:false,programaticFormFields:false,responseTypes:[bA,bz,bE,bb,bD]},requestObjects:[],requestObjectCount:0,createRequestObject:qx.core.Variant.select(bC,{"default":function(){return new XMLHttpRequest;
},"mshtml":function(){if(window.ActiveXObject&&qx.xml.Document.XMLHTTP){return new ActiveXObject(qx.xml.Document.XMLHTTP);
}
if(window.XMLHttpRequest){return new XMLHttpRequest;
}}}),isSupported:function(){return !!this.createRequestObject();
}},members:{__pT:false,__pU:0,__pV:null,getRequest:function(){if(this.__pV===null){this.__pV=qx.io.remote.transport.XmlHttp.createRequestObject();
this.__pV.onreadystatechange=qx.lang.Function.bind(this._onreadystatechange,this);
}return this.__pV;
},send:function(){this.__pU=0;
var D=this.getRequest();
var z=this.getMethod();
var G=this.getAsynchronous();
var F=this.getUrl();
var B=(window.location.protocol===bt&&!(/^http(s){0,1}\:/.test(F)));
this.__pT=B;
var J=this.getParameters(false);
var H=[];

for(var A in J){var E=J[A];

if(E instanceof Array){for(var i=0;i<E.length;i++){H.push(encodeURIComponent(A)+bi+encodeURIComponent(E[i]));
}}else{H.push(encodeURIComponent(A)+bi+encodeURIComponent(E));
}}
if(H.length>0){F+=(F.indexOf(by)>=0?be:by)+H.join(be);
}if(this.getData()===null){var J=this.getParameters(true);
var H=[];

for(var A in J){var E=J[A];

if(E instanceof Array){for(var i=0;i<E.length;i++){H.push(encodeURIComponent(A)+bi+encodeURIComponent(E[i]));
}}else{H.push(encodeURIComponent(A)+bi+encodeURIComponent(E));
}}
if(H.length>0){this.setData(H.join(be));
}}var I=function(bH){var bM=bo;
var bQ=bg;
var bK,bJ,bI;
var bN,bO,bP,bL;
var i=0;

do{bK=bH.charCodeAt(i++);
bJ=bH.charCodeAt(i++);
bI=bH.charCodeAt(i++);
bN=bK>>2;
bO=((bK&3)<<4)|(bJ>>4);
bP=((bJ&15)<<2)|(bI>>6);
bL=bI&63;

if(isNaN(bJ)){bP=bL=64;
}else if(isNaN(bI)){bL=64;
}bQ+=bM.charAt(bN)+bM.charAt(bO)+bM.charAt(bP)+bM.charAt(bL);
}while(i<bH.length);
return bQ;
};
try{if(this.getUsername()){if(this.getUseBasicHttpAuth()){D.open(z,F,G);
D.setRequestHeader(bq,br+I(this.getUsername()+bl+this.getPassword()));
}else{D.open(z,F,G,this.getUsername(),this.getPassword());
}}else{D.open(z,F,G);
}}catch(y){this.error("Failed with exception: "+y);
this.failed();
return;
}if(!qx.core.Variant.isSet(bC,bu)){D.setRequestHeader(bw,window.location.href);
}var C=this.getRequestHeaders();

for(var A in C){D.setRequestHeader(A,C[A]);
}try{{};
D.send(this.getData());
}catch(Y){if(B){this.failedLocally();
}else{this.error("Failed to send data: "+Y,"send");
this.failed();
}return;
}if(!G){this._onreadystatechange();
}},failedLocally:function(){if(this.getState()===bk){return;
}this.warn("Could not load from file: "+this.getUrl());
this.failed();
},_onreadystatechange:qx.event.GlobalError.observeMethod(function(e){switch(this.getState()){case bj:case bh:case bk:case bc:{};
return;
}var h=this.getReadyState();

if(h==4){if(!qx.io.remote.Exchange.wasSuccessful(this.getStatusCode(),h,this.__pT)){if(this.getState()===bd){this.setState(bf);
}return this.failed();
}}while(this.__pU<h){this.setState(qx.io.remote.Exchange._nativeMap[++this.__pU]);
}}),getReadyState:function(){var f=null;

try{f=this.getRequest().readyState;
}catch(O){}return f;
},setRequestHeader:function(r,t){this.getRequestHeaders()[r]=t;
},getResponseHeader:function(P){var Q=null;

try{Q=this.getRequest().getResponseHeader(P)||null;
}catch(u){}return Q;
},getStringResponseHeaders:function(){var n=null;

try{var m=this.getRequest().getAllResponseHeaders();

if(m){n=m;
}}catch(o){}return n;
},getResponseHeaders:function(){var W=this.getStringResponseHeaders();
var X={};

if(W){var U=W.split(/[\r\n]+/g);

for(var i=0,l=U.length;i<l;i++){var V=U[i].match(/^([^:]+)\s*:\s*(.+)$/i);

if(V){X[V[1]]=V[2];
}}}return X;
},getStatusCode:function(){var T=-1;

try{T=this.getRequest().status;
}catch(L){}return T;
},getStatusText:function(){var g=bg;

try{g=this.getRequest().statusText;
}catch(p){}return g;
},getResponseText:function(){var K=null;

try{K=this.getRequest().responseText;
}catch(bG){K=null;
}return K;
},getResponseXml:function(){var d=null;
var b=this.getStatusCode();
var c=this.getReadyState();

if(qx.io.remote.Exchange.wasSuccessful(b,c,this.__pT)){try{d=this.getRequest().responseXML;
}catch(q){}}if(typeof d==bv&&d!=null){if(!d.documentElement){var s=String(this.getRequest().responseText).replace(/<\?xml[^\?]*\?>/,bg);
d.loadXML(s);
}if(!d.documentElement){throw new Error("Missing Document Element!");
}
if(d.documentElement.tagName==bm){throw new Error("XML-File is not well-formed!");
}}else{throw new Error("Response was not a valid xml document ["+this.getRequest().responseText+"]");
}return d;
},getFetchedLength:function(){var ba=this.getResponseText();
return typeof ba==bp?ba.length:0;
},getResponseContent:function(){var v=this.getState();

if(v!==bj&&v!=bk){{};
return null;
}{};
var x=this.getResponseText();

if(v==bk){{};
return x;
}
switch(this.getResponseType()){case bA:case bD:{};
return x;
case bE:{};

try{if(x&&x.length>0){var w=qx.util.Json.parse(x,false);
return (w===0?0:(w||null));
}else{return null;
}}catch(N){this.error("Could not execute json: ["+x+"]",N);
return bn+x+bs;
}case bz:{};

try{if(x&&x.length>0){var w=window.eval(x);
return (w===0?0:(w||null));
}else{return null;
}}catch(a){this.error("Could not execute javascript: ["+x+"]",a);
return null;
}case bb:x=this.getResponseXml();
{};
return (x===0?0:(x||null));
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}},_applyState:function(R,S){{};

switch(R){case bx:this.fireEvent(bx);
break;
case bd:this.fireEvent(bd);
break;
case bf:this.fireEvent(bf);
break;
case bB:this.fireEvent(bB);
break;
case bj:this.fireEvent(bj);
break;
case bk:this.fireEvent(bk);
break;
case bh:this.getRequest().abort();
this.fireEvent(bh);
break;
case bc:this.getRequest().abort();
this.fireEvent(bc);
break;
}}},defer:function(j,k){qx.io.remote.Exchange.registerType(qx.io.remote.transport.XmlHttp,bF);
},destruct:function(){var M=this.getRequest();

if(M){M.onreadystatechange=qx.lang.Function.empty;
switch(M.readyState){case 1:case 2:case 3:M.abort();
}}this.__pV=null;
}});
})();
(function(){var k="qx.event.type.Event",j="Boolean",i="queued",h="String",g="sending",f="receiving",d="aborted",c="failed",b="nocache",a="completed",P="qx.io.remote.Response",O="POST",N="configured",M="timeout",L="GET",K="Pragma",J="no-url-params-on-post",I="no-cache",H="Cache-Control",G="Content-Type",r="text/plain",s="application/xml",p="application/json",q="text/html",n="application/x-www-form-urlencoded",o="qx.io.remote.Exchange",l="Integer",m="X-Qooxdoo-Response-Type",t="HEAD",u="qx.io.remote.Request",y="_applyResponseType",x="_applyState",A="text/javascript",z="changeState",C="PUT",B="_applyProhibitCaching",w="",F="_applyMethod",E="DELETE",D="boolean";
qx.Class.define(u,{extend:qx.core.Object,construct:function(bo,bp,bq){arguments.callee.base.call(this);
this.__pH={};
this.__pI={};
this.__pJ={};
this.__pK={};

if(bo!==undefined){this.setUrl(bo);
}
if(bp!==undefined){this.setMethod(bp);
}
if(bq!==undefined){this.setResponseType(bq);
}this.setProhibitCaching(true);
this.__pL=++qx.io.remote.Request.__pL;
},events:{"created":k,"configured":k,"sending":k,"receiving":k,"completed":P,"aborted":k,"failed":P,"timeout":P},statics:{__pL:0},properties:{url:{check:h,init:w},method:{check:[L,O,C,t,E],apply:F,init:L},asynchronous:{check:j,init:true},data:{check:h,nullable:true},username:{check:h,nullable:true},password:{check:h,nullable:true},state:{check:[N,i,g,f,a,d,M,c],init:N,apply:x,event:z},responseType:{check:[r,A,p,s,q],init:r,apply:y},timeout:{check:l,nullable:true},prohibitCaching:{check:function(v){return typeof v==D||v===J;
},init:true,apply:B},crossDomain:{check:j,init:false},fileUpload:{check:j,init:false},transport:{check:o,nullable:true},useBasicHttpAuth:{check:j,init:false}},members:{__pH:null,__pI:null,__pJ:null,__pK:null,__pL:null,send:function(){qx.io.remote.RequestQueue.getInstance().add(this);
},abort:function(){qx.io.remote.RequestQueue.getInstance().abort(this);
},reset:function(){switch(this.getState()){case g:case f:this.error("Aborting already sent request!");
case i:this.abort();
break;
}},isConfigured:function(){return this.getState()===N;
},isQueued:function(){return this.getState()===i;
},isSending:function(){return this.getState()===g;
},isReceiving:function(){return this.getState()===f;
},isCompleted:function(){return this.getState()===a;
},isAborted:function(){return this.getState()===d;
},isTimeout:function(){return this.getState()===M;
},isFailed:function(){return this.getState()===c;
},__pM:function(e){var S=e.clone();
S.setTarget(this);
this.dispatchEvent(S);
},_onqueued:function(e){this.setState(i);
this.__pM(e);
},_onsending:function(e){this.setState(g);
this.__pM(e);
},_onreceiving:function(e){this.setState(f);
this.__pM(e);
},_oncompleted:function(e){this.setState(a);
this.__pM(e);
this.dispose();
},_onaborted:function(e){this.setState(d);
this.__pM(e);
this.dispose();
},_ontimeout:function(e){this.setState(M);
this.__pM(e);
this.dispose();
},_onfailed:function(e){this.setState(c);
this.__pM(e);
this.dispose();
},_applyState:function(T,U){{};
},_applyProhibitCaching:function(br,bs){if(!br){this.removeParameter(b);
this.removeRequestHeader(K);
this.removeRequestHeader(H);
return;
}if(br!==J||this.getMethod()!=O){this.setParameter(b,new Date().valueOf());
}else{this.removeParameter(b);
}this.setRequestHeader(K,I);
this.setRequestHeader(H,I);
},_applyMethod:function(Y,ba){if(Y===O){this.setRequestHeader(G,n);
}else{this.removeRequestHeader(G);
}var bb=this.getProhibitCaching();
this._applyProhibitCaching(bb,bb);
},_applyResponseType:function(Q,R){this.setRequestHeader(m,Q);
},setRequestHeader:function(bl,bm){this.__pH[bl]=bm;
},removeRequestHeader:function(be){delete this.__pH[be];
},getRequestHeader:function(bk){return this.__pH[bk]||null;
},getRequestHeaders:function(){return this.__pH;
},setParameter:function(bf,bg,bh){if(bh){this.__pJ[bf]=bg;
}else{this.__pI[bf]=bg;
}},removeParameter:function(bc,bd){if(bd){delete this.__pJ[bc];
}else{delete this.__pI[bc];
}},getParameter:function(bi,bj){if(bj){return this.__pJ[bi]||null;
}else{return this.__pI[bi]||null;
}},getParameters:function(X){return (X?this.__pJ:this.__pI);
},setFormField:function(V,W){this.__pK[V]=W;
},removeFormField:function(bn){delete this.__pK[bn];
},getFormField:function(bt){return this.__pK[bt]||null;
},getFormFields:function(){return this.__pK;
},getSequenceNumber:function(){return this.__pL;
}},destruct:function(){this.setTransport(null);
this.__pH=this.__pI=this.__pJ=this.__pK=null;
}});
})();
(function(){var e="changeModel",d="qx.core.Object",c="reset",b="qx.data.controller.Object",a="_applyModel";
qx.Class.define(b,{extend:qx.core.Object,construct:function(B){arguments.callee.base.call(this);
this.__vf={};
this.__vg=[];

if(B!=null){this.setModel(B);
}},properties:{model:{check:d,event:e,apply:a,nullable:true}},members:{__vg:null,__vf:null,_applyModel:function(C,D){for(var i=0;i<this.__vg.length;i++){var J=this.__vg[i][0];
var G=this.__vg[i][1];
var F=this.__vg[i][2];
var H=this.__vg[i][3];
var I=this.__vg[i][4];
var E=this.__vg[i][5];
if(D!=undefined){this.__vi(J,G,F,D);
}if(C!=undefined){this.__vh(J,G,F,H,I,E);
}else{J[c+qx.lang.String.firstUp(G)]();
}}},addTarget:function(v,w,x,y,z,A){this.__vg.push([v,w,x,y,z,A]);
this.__vh(v,w,x,y,z,A);
},__vh:function(f,g,h,j,k,l){if(this.getModel()==null){return;
}var m=this.getModel().bind(h,f,g,k);
var n=null;

if(j){n=f.bind(g,this.getModel(),h,l);
}var o=f.toHashCode();

if(this.__vf[o]==undefined){this.__vf[o]=[];
}this.__vf[o].push([m,n,g,h,k,l]);
},removeTarget:function(K,L,M){this.__vi(K,L,M,this.getModel());
for(var i=0;i<this.__vg.length;i++){if(this.__vg[i][0]==K&&this.__vg[i][1]==L&&this.__vg[i][2]==M){this.__vg.splice(i,1);
}}},__vi:function(p,q,r,s){if(!(p instanceof qx.core.Object)){return ;
}var t=this.__vf[p.toHashCode()];
if(t==undefined||t.length==0){return;
}for(var i=0;i<t.length;i++){if(t[i][2]==q&&t[i][3]==r){var u=t[i][0];
s.removeBinding(u);
if(t[i][1]!=null){p.removeBinding(t[i][1]);
}t.splice(i,1);
return;
}}}},destruct:function(){this.__vf=this.__vg=null;
}});
})();
