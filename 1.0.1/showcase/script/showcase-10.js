qx.$$packageData['1d13b61b08f1']={"resources":{"qx/static/blank.gif":[1,1,"gif","qx"]}};
(function(){var O="failed",N="sending",M="completed",L="receiving",K="aborted",J="timeout",I="qx.event.type.Event",H="Connection dropped",G="qx.io.remote.Response",F="configured",bK="Proxy authentication required",bJ="qx.io.remote.transport.Abstract",bI="MSHTML-specific HTTP status code",bH="Not available",bG="Precondition failed",bF="Server error",bE="Moved temporarily",bD="qx.io.remote.Exchange",bC="Bad gateway",bB="Gone",V="See other",W="Partial content",T="Server timeout",U="qx.io.remote.transport.Script",R="HTTP version not supported",S="Unauthorized",P="Multiple choices",Q="Payment required",ba="Not implemented",bb="Request-URL too large",bj="Length required",bh="_applyState",br="changeState",bm="Not modified",bx="qx.io.remote.Request",bv="Connection closed by server",bd="Moved permanently",bA="_applyImplementation",bz="Method not allowed",by="Forbidden",bc="Use proxy",bf="Ok",bg="Not found",bi="Not acceptable",bk="Request time-out",bn="Bad request",bs="Conflict",bw="No content",X="qx.io.remote.transport.XmlHttp",Y="qx.io.remote.transport.Iframe",be="Request entity too large",bq="Unknown status code",bp="Unsupported media type",bo="Gateway time-out",bu="created",bt="Out of resources",bl="undefined";
qx.Class.define(bD,{extend:qx.core.Object,construct:function(t){arguments.callee.base.call(this);
this.setRequest(t);
t.setTransport(this);
},events:{"sending":I,"receiving":I,"completed":G,"aborted":I,"failed":G,"timeout":G},statics:{typesOrder:[X,Y,U],typesReady:false,typesAvailable:{},typesSupported:{},registerType:function(bM,bN){qx.io.remote.Exchange.typesAvailable[bN]=bM;
},initTypes:function(){if(qx.io.remote.Exchange.typesReady){return;
}
for(var bP in qx.io.remote.Exchange.typesAvailable){var bO=qx.io.remote.Exchange.typesAvailable[bP];

if(bO.isSupported()){qx.io.remote.Exchange.typesSupported[bP]=bO;
}}qx.io.remote.Exchange.typesReady=true;

if(qx.lang.Object.isEmpty(qx.io.remote.Exchange.typesSupported)){throw new Error("No supported transport types were found!");
}},canHandle:function(u,v,w){if(!qx.lang.Array.contains(u.handles.responseTypes,w)){return false;
}
for(var x in v){if(!u.handles[x]){return false;
}}return true;
},_nativeMap:{0:bu,1:F,2:N,3:L,4:M},wasSuccessful:function(q,r,s){if(s){switch(q){case null:case 0:return true;
case -1:return r<4;
default:return typeof q===bl;
}}else{switch(q){case -1:{};
return r<4;
case 200:case 304:return true;
case 201:case 202:case 203:case 204:case 205:return true;
case 206:{};
return r!==4;
case 300:case 301:case 302:case 303:case 305:case 400:case 401:case 402:case 403:case 404:case 405:case 406:case 407:case 408:case 409:case 410:case 411:case 412:case 413:case 414:case 415:case 500:case 501:case 502:case 503:case 504:case 505:{};
return false;
case 12002:case 12007:case 12029:case 12030:case 12031:case 12152:case 13030:{};
return false;
default:if(q>206&&q<300){return true;
}qx.log.Logger.debug(this,"Unknown status code: "+q+" ("+r+")");
return false;
}}},statusCodeToString:function(f){switch(f){case -1:return bH;
case 200:return bf;
case 304:return bm;
case 206:return W;
case 204:return bw;
case 300:return P;
case 301:return bd;
case 302:return bE;
case 303:return V;
case 305:return bc;
case 400:return bn;
case 401:return S;
case 402:return Q;
case 403:return by;
case 404:return bg;
case 405:return bz;
case 406:return bi;
case 407:return bK;
case 408:return bk;
case 409:return bs;
case 410:return bB;
case 411:return bj;
case 412:return bG;
case 413:return be;
case 414:return bb;
case 415:return bp;
case 500:return bF;
case 501:return ba;
case 502:return bC;
case 503:return bt;
case 504:return bo;
case 505:return R;
case 12002:return T;
case 12029:return H;
case 12030:return H;
case 12031:return H;
case 12152:return bv;
case 13030:return bI;
default:return bq;
}}},properties:{request:{check:bx,nullable:true},implementation:{check:bJ,nullable:true,apply:bA},state:{check:[F,N,L,M,K,J,O],init:F,event:br,apply:bh}},members:{send:function(){var k=this.getRequest();

if(!k){return this.error("Please attach a request object first");
}qx.io.remote.Exchange.initTypes();
var h=qx.io.remote.Exchange.typesOrder;
var g=qx.io.remote.Exchange.typesSupported;
var n=k.getResponseType();
var o={};

if(k.getAsynchronous()){o.asynchronous=true;
}else{o.synchronous=true;
}
if(k.getCrossDomain()){o.crossDomain=true;
}
if(k.getFileUpload()){o.fileUpload=true;
}for(var m in k.getFormFields()){o.programaticFormFields=true;
break;
}var p,j;

for(var i=0,l=h.length;i<l;i++){p=g[h[i]];

if(p){if(!qx.io.remote.Exchange.canHandle(p,o,n)){continue;
}
try{{};
j=new p;
this.setImplementation(j);
j.setUseBasicHttpAuth(k.getUseBasicHttpAuth());
j.send();
return true;
}catch(bQ){this.error("Request handler throws error");
this.error(bQ);
return;
}}}this.error("There is no transport implementation available to handle this request: "+k);
},abort:function(){var E=this.getImplementation();

if(E){{};
E.abort();
}else{{};
this.setState(K);
}},timeout:function(){var bL=this.getImplementation();

if(bL){this.warn("Timeout: implementation "+bL.toHashCode());
bL.timeout();
}else{this.warn("Timeout: forcing state to timeout");
this.setState(J);
}this.__dh();
},__dh:function(){var y=this.getRequest();

if(y){y.setTimeout(0);
}},_onsending:function(e){this.setState(N);
},_onreceiving:function(e){this.setState(L);
},_oncompleted:function(e){this.setState(M);
},_onabort:function(e){this.setState(K);
},_onfailed:function(e){this.setState(O);
},_ontimeout:function(e){this.setState(J);
},_applyImplementation:function(b,c){if(c){c.removeListener(N,this._onsending,this);
c.removeListener(L,this._onreceiving,this);
c.removeListener(M,this._oncompleted,this);
c.removeListener(K,this._onabort,this);
c.removeListener(J,this._ontimeout,this);
c.removeListener(O,this._onfailed,this);
}
if(b){var d=this.getRequest();
b.setUrl(d.getUrl());
b.setMethod(d.getMethod());
b.setAsynchronous(d.getAsynchronous());
b.setUsername(d.getUsername());
b.setPassword(d.getPassword());
b.setParameters(d.getParameters());
b.setFormFields(d.getFormFields());
b.setRequestHeaders(d.getRequestHeaders());
b.setData(d.getData());
b.setResponseType(d.getResponseType());
b.addListener(N,this._onsending,this);
b.addListener(L,this._onreceiving,this);
b.addListener(M,this._oncompleted,this);
b.addListener(K,this._onabort,this);
b.addListener(J,this._ontimeout,this);
b.addListener(O,this._onfailed,this);
}},_applyState:function(z,A){{};

switch(z){case N:this.fireEvent(N);
break;
case L:this.fireEvent(L);
break;
case M:case K:case J:case O:var C=this.getImplementation();

if(!C){break;
}this.__dh();

if(this.hasListener(z)){var D=qx.event.Registration.createEvent(z,qx.io.remote.Response);

if(z==M){var B=C.getResponseContent();
D.setContent(B);
if(B===null){{};
z=O;
}}else if(z==O){D.setContent(C.getResponseContent());
}D.setStatusCode(C.getStatusCode());
D.setResponseHeaders(C.getResponseHeaders());
this.dispatchEvent(D);
}this.setImplementation(null);
C.dispose();
break;
}}},settings:{"qx.ioRemoteDebug":false,"qx.ioRemoteDebugData":false},destruct:function(){var a=this.getImplementation();

if(a){this.setImplementation(null);
a.dispose();
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
},setRequestHeader:function(r,s){throw new Error("setRequestHeader is abstract");
},getResponseHeader:function(t){throw new Error("getResponseHeader is abstract");
},getResponseHeaders:function(){throw new Error("getResponseHeaders is abstract");
},getStatusCode:function(){throw new Error("getStatusCode is abstract");
},getStatusText:function(){throw new Error("getStatusText is abstract");
},getResponseText:function(){throw new Error("getResponseText is abstract");
},getResponseXml:function(){throw new Error("getResponseXml is abstract");
},getFetchedLength:function(){throw new Error("getFetchedLength is abstract");
},_applyState:function(u,v){{};

switch(u){case m:this.fireEvent(m);
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
(function(){var u="configured",t="completed",s="changeState",r="changeModel",q="qx.data.store.Json",p="GET",o="_marshaler",n="__do",m="sending",l="application/json",e="changeUrl",k="failed",h="loaded",d="timeout",c="queued",g="String",f="aborted",i="_applyUrl",b="receiving",j="qx.event.type.Data";
qx.Class.define(q,{extend:qx.core.Object,construct:function(A,B){arguments.callee.base.call(this);
this._marshaler=new qx.data.marshal.Json(B);
this._delegate=B;

if(A!=null){this.setUrl(A);
}},events:{"loaded":j},properties:{model:{nullable:true,event:r},state:{check:[u,c,m,b,t,f,d,k],init:u,event:s},url:{check:g,apply:i,event:e}},members:{__do:null,_delegate:null,_applyUrl:function(y,z){if(y!=null){this._createRequest(y);
}},_createRequest:function(w){this.__do=new qx.io.remote.Request(w,p,l);
var x=this._delegate;

if(x&&qx.lang.Type.isFunction(x.configureRequest)){this._delegate.configureRequest(this.__do);
}this.__do.addListener(t,this.__dp,this);
this.__do.addListener(s,function(a){this.setState(a.getData());
},this);
this.__do.send();
},__dp:function(C){var E=C.getContent();
var D=this._delegate;

if(D&&qx.lang.Type.isFunction(D.manipulateData)){E=this._delegate.manipulateData(E);
}this._marshaler.toClass(E,true);
this.setModel(this._marshaler.toModel(E));
this.fireDataEvent(h,this.getModel());
},reload:function(){var v=this.getUrl();

if(v!=null){this._createRequest(v);
}}},destruct:function(){this._disposeObjects(o,n);
this._delegate=null;
}});
})();
(function(){var j="?",i="&",h="loaded",g='qx.data.store.Jsonp[',f='].callback',e="failed",d="=",c="qx.data.store.Jsonp",b="String";
qx.Class.define(c,{extend:qx.data.store.Json,construct:function(p,q,r){if(r!=undefined){this.setCallbackParam(r);
}arguments.callee.base.call(this,p,q);
},properties:{callbackParam:{check:b,nullable:false}},members:{__di:null,_createRequest:function(k){if(this.__di){this.__di.dispose();
}this.__di=new qx.io.ScriptLoader();
var m=this._delegate;

if(m&&qx.lang.Type.isFunction(m.configureRequest)){this._delegate.configureRequest(this.__di);
}var l=k.indexOf(j)==-1?j:i;
k+=l+this.getCallbackParam()+d;
var n=parseInt(this.toHashCode(),36);
qx.data.store.Jsonp[n]=this;
k+=g+n+f;
this.__di.load(k,function(o){delete this[n];
},this);
},callback:function(a){if(this.isDisposed()){return;
}this.__dj(a);
},__dj:function(s){if(s==undefined){this.setState(e);
return;
}var t=this._delegate;

if(t&&qx.lang.Type.isFunction(t.manipulateData)){s=this._delegate.manipulateData(s);
}this._marshaler.toClass(s);
this.setModel(this._marshaler.toModel(s));
this.fireDataEvent(h,this.getModel());
}},destruct:function(){if(this.__di){this.__di.dispose();
}this.__di=null;
}});
})();
(function(){var l="=",k="&",j="application/xml",h="application/json",g="text/html",f="qx.client",d="textarea",c="none",b="text/plain",a="text/javascript",F="",E="completed",D="?",C="qx.io.remote.transport.Iframe",B="gecko",A="frame_",z="aborted",y="_data_",x="pre",w="javascript:void(0)",s="sending",t="form",q="failed",r='<iframe name="',o="mshtml",p="form_",m='"></iframe>',n="iframe",u="timeout",v="qx/static/blank.gif";
qx.Class.define(C,{extend:qx.io.remote.transport.Abstract,construct:function(){arguments.callee.base.call(this);
var L=(new Date).valueOf();
var M=A+L;
var N=p+L;
if(qx.core.Variant.isSet(f,o)){this.__dk=document.createElement(r+M+m);
}else{this.__dk=document.createElement(n);
}this.__dk.src=w;
this.__dk.id=this.__dk.name=M;
this.__dk.onload=qx.lang.Function.bind(this._onload,this);
this.__dk.style.display=c;
document.body.appendChild(this.__dk);
this.__dl=document.createElement(t);
this.__dl.target=M;
this.__dl.id=this.__dl.name=N;
this.__dl.style.display=c;
document.body.appendChild(this.__dl);
this.__dm=document.createElement(d);
this.__dm.id=this.__dm.name=y;
this.__dl.appendChild(this.__dm);
this.__dk.onreadystatechange=qx.lang.Function.bind(this._onreadystatechange,this);
},statics:{handles:{synchronous:false,asynchronous:true,crossDomain:false,fileUpload:true,programaticFormFields:true,responseTypes:[b,a,h,j,g]},isSupported:function(){return true;
},_numericMap:{"uninitialized":1,"loading":2,"loaded":2,"interactive":3,"complete":4}},members:{__dm:null,__dn:0,__dl:null,__dk:null,send:function(){var P=this.getMethod();
var R=this.getUrl();
var V=this.getParameters(false);
var U=[];

for(var Q in V){var S=V[Q];

if(S instanceof Array){for(var i=0;i<S.length;i++){U.push(encodeURIComponent(Q)+l+encodeURIComponent(S[i]));
}}else{U.push(encodeURIComponent(Q)+l+encodeURIComponent(S));
}}
if(U.length>0){R+=(R.indexOf(D)>=0?k:D)+U.join(k);
}if(this.getData()===null){var V=this.getParameters(true);
var U=[];

for(var Q in V){var S=V[Q];

if(S instanceof Array){for(var i=0;i<S.length;i++){U.push(encodeURIComponent(Q)+l+encodeURIComponent(S[i]));
}}else{U.push(encodeURIComponent(Q)+l+encodeURIComponent(S));
}}
if(U.length>0){this.setData(U.join(k));
}}var O=this.getFormFields();

for(var Q in O){var T=document.createElement(d);
T.name=Q;
T.appendChild(document.createTextNode(O[Q]));
this.__dl.appendChild(T);
}this.__dl.action=R;
this.__dl.method=P;
this.__dm.appendChild(document.createTextNode(this.getData()));
this.__dl.submit();
this.setState(s);
},_onload:qx.event.GlobalError.observeMethod(function(e){if(this.__dl.src){return;
}this._switchReadyState(qx.io.remote.transport.Iframe._numericMap.complete);
}),_onreadystatechange:qx.event.GlobalError.observeMethod(function(e){this._switchReadyState(qx.io.remote.transport.Iframe._numericMap[this.__dk.readyState]);
}),_switchReadyState:function(ba){switch(this.getState()){case E:case z:case q:case u:this.warn("Ignore Ready State Change");
return;
}while(this.__dn<ba){this.setState(qx.io.remote.Exchange._nativeMap[++this.__dn]);
}},setRequestHeader:function(J,K){},getResponseHeader:function(Y){return null;
},getResponseHeaders:function(){return {};
},getStatusCode:function(){return 200;
},getStatusText:function(){return F;
},getIframeWindow:function(){return qx.bom.Iframe.getWindow(this.__dk);
},getIframeDocument:function(){return qx.bom.Iframe.getDocument(this.__dk);
},getIframeBody:function(){return qx.bom.Iframe.getBody(this.__dk);
},getIframeTextContent:function(){var W=this.getIframeBody();

if(!W){return null;
}
if(!W.firstChild){return F;
}if(W.firstChild.tagName&&W.firstChild.tagName.toLowerCase()==x){return W.firstChild.innerHTML;
}else{return W.innerHTML;
}},getIframeHtmlContent:function(){var G=this.getIframeBody();
return G?G.innerHTML:null;
},getFetchedLength:function(){return 0;
},getResponseContent:function(){if(this.getState()!==E){{};
return null;
}{};
var H=this.getIframeTextContent();

switch(this.getResponseType()){case b:{};
return H;
break;
case g:H=this.getIframeHtmlContent();
{};
return H;
break;
case h:H=this.getIframeHtmlContent();
{};

try{return H&&H.length>0?qx.util.Json.parse(H,false):null;
}catch(X){return this.error("Could not execute json: ("+H+")",X);
}case a:H=this.getIframeHtmlContent();
{};

try{return H&&H.length>0?window.eval(H):null;
}catch(I){return this.error("Could not execute javascript: ("+H+")",I);
}case j:H=this.getIframeDocument();
{};
return H;
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}}},defer:function(bb,bc,bd){qx.io.remote.Exchange.registerType(qx.io.remote.transport.Iframe,C);
},destruct:function(){if(this.__dk){this.__dk.onload=null;
this.__dk.onreadystatechange=null;
if(qx.core.Variant.isSet(f,B)){this.__dk.src=qx.util.ResourceManager.getInstance().toUri(v);
}document.body.removeChild(this.__dk);
}
if(this.__dl){document.body.removeChild(this.__dl);
}this.__dk=this.__dl=null;
}});
})();
(function(){var M=",",L="",K="string",J="null",I='"',H="qx.jsonDebugging",G='\\u00',F="new Date(Date.UTC(",E='\\\\',D='\\f',bj="__dD",bi='\\"',bh="))",bg="}",bf="__du",be="__ds",bd="{",bc='\\r',bb=":",ba='(',T='\\t',U="]",R=')',S="[",P="Use 'parse' instead!",Q="qx.jsonEncodeUndefined",N="__dC",O='\\b',V="qx.util.Json",W="__dt",Y='\\n',X="__dv";
qx.Class.define(V,{statics:{__dq:null,BEAUTIFYING_INDENT:"  ",BEAUTIFYING_LINE_END:"\n",__dr:{"function":be,"boolean":W,"number":bf,"string":X,"object":N,"undefined":bj},__ds:function(bm,bn){return String(bm);
},__dt:function(x,y){return String(x);
},__du:function(z,A){return isFinite(z)?String(z):J;
},__dv:function(br,bs){var bt;

if(/["\\\x00-\x1f]/.test(br)){bt=br.replace(/([\x00-\x1f\\"])/g,qx.util.Json.__dx);
}else{bt=br;
}return I+bt+I;
},__dw:{'\b':O,'\t':T,'\n':Y,'\f':D,'\r':bc,'"':bi,'\\':E},__dx:function(a,b){var bk=qx.util.Json.__dw[b];

if(bk){return bk;
}bk=b.charCodeAt();
return G+Math.floor(bk/16).toString(16)+(bk%16).toString(16);
},__dy:function(f,g){var j=[],n=true,m,h;
var k=qx.util.Json.__dF;
j.push(S);

if(k){qx.util.Json.__dz+=qx.util.Json.BEAUTIFYING_INDENT;
j.push(qx.util.Json.__dz);
}
for(var i=0,l=f.length;i<l;i++){h=f[i];
m=this.__dr[typeof h];

if(m){h=this[m](h,i+L);

if(typeof h==K){if(!n){j.push(M);

if(k){j.push(qx.util.Json.__dz);
}}j.push(h);
n=false;
}}}
if(k){qx.util.Json.__dz=qx.util.Json.__dz.substring(0,qx.util.Json.__dz.length-qx.util.Json.BEAUTIFYING_INDENT.length);
j.push(qx.util.Json.__dz);
}j.push(U);
return j.join(L);
},__dA:function(bu,bv){var bw=bu.getUTCFullYear()+M+bu.getUTCMonth()+M+bu.getUTCDate()+M+bu.getUTCHours()+M+bu.getUTCMinutes()+M+bu.getUTCSeconds()+M+bu.getUTCMilliseconds();
return F+bw+bh;
},__dB:function(q,r){var u=[],w=true,t,s;
var v=qx.util.Json.__dF;
u.push(bd);

if(v){qx.util.Json.__dz+=qx.util.Json.BEAUTIFYING_INDENT;
u.push(qx.util.Json.__dz);
}
for(var r in q){s=q[r];
t=this.__dr[typeof s];

if(t){s=this[t](s,r);

if(typeof s==K){if(!w){u.push(M);

if(v){u.push(qx.util.Json.__dz);
}}u.push(this.__dv(r),bb,s);
w=false;
}}}
if(v){qx.util.Json.__dz=qx.util.Json.__dz.substring(0,qx.util.Json.__dz.length-qx.util.Json.BEAUTIFYING_INDENT.length);
u.push(qx.util.Json.__dz);
}u.push(bg);
return u.join(L);
},__dC:function(c,d){if(c){if(qx.lang.Type.isFunction(c.toJSON)&&c.toJSON!==this.__dq){return this.__dE(c.toJSON(d),d);
}else if(qx.lang.Type.isDate(c)){return this.__dA(c,d);
}else if(qx.lang.Type.isArray(c)){return this.__dy(c,d);
}else if(qx.lang.Type.isObject(c)){return this.__dB(c,d);
}return L;
}return J;
},__dD:function(B,C){if(qx.core.Setting.get(Q)){return J;
}},__dE:function(o,p){return this[this.__dr[typeof o]](o,p);
},stringify:function(by,bz){this.__dF=bz;
this.__dz=this.BEAUTIFYING_LINE_END;
var bA=this.__dE(by,L);

if(typeof bA!=K){bA=null;
}if(qx.core.Setting.get(H)){qx.log.Logger.debug(this,"JSON request: "+bA);
}return bA;
},parse:function(bo,bp){if(bp===undefined){bp=true;
}
if(qx.core.Setting.get(H)){qx.log.Logger.debug(this,"JSON response: "+bo);
}
if(bp){if(/[^,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]/.test(bo.replace(/"(\\.|[^"\\])*"/g,L))){throw new Error("Could not parse JSON string!");
}}
try{var bq=(bo&&bo.length>0)?eval(ba+bo+R):null;
return bq;
}catch(bx){throw new Error("Could not evaluate JSON string: "+bx.message);
}},parseQx:function(bl){qx.log.Logger.deprecatedMethodWarning(arguments.callee,P);
return qx.util.Json.parse(bl,false);
}},settings:{"qx.jsonEncodeUndefined":true,"qx.jsonDebugging":false},defer:function(e){e.__dq=Date.prototype.toJSON;
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
(function(){var A="Integer",z="aborted",y="_onaborted",x="_on",w="__dJ",v="_applyEnabled",u="__dH",t="Boolean",s="sending",r="interval",m="failed",q="qx.io.remote.RequestQueue",p="timeout",l="completed",k="queued",o="receiving",n="singleton";
qx.Class.define(q,{type:n,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__dG=[];
this.__dH=[];
this.__dI=0;
this.__dJ=new qx.event.Timer(500);
this.__dJ.addListener(r,this._oninterval,this);
},properties:{enabled:{init:true,check:t,apply:v},maxTotalRequests:{check:A,nullable:true},maxConcurrentRequests:{check:A,init:qx.bom.client.Transport.getMaxConcurrentRequestCount()},defaultTimeout:{check:A,init:5000}},members:{__dG:null,__dH:null,__dI:null,__dJ:null,getRequestQueue:function(){return this.__dG;
},getActiveQueue:function(){return this.__dH;
},_debug:function(){var g;
{};
},_check:function(){this._debug();
if(this.__dH.length==0&&this.__dG.length==0){this.__dJ.stop();
}if(!this.getEnabled()){return;
}if(this.__dG.length==0||(this.__dG[0].isAsynchronous()&&this.__dH.length>=this.getMaxConcurrentRequests())){return;
}if(this.getMaxTotalRequests()!=null&&this.__dI>=this.getMaxTotalRequests()){return;
}var M=this.__dG.shift();
var N=new qx.io.remote.Exchange(M);
this.__dI++;
this.__dH.push(N);
this._debug();
N.addListener(s,this._onsending,this);
N.addListener(o,this._onreceiving,this);
N.addListener(l,this._oncompleted,this);
N.addListener(z,this._oncompleted,this);
N.addListener(p,this._oncompleted,this);
N.addListener(m,this._oncompleted,this);
N._start=(new Date).valueOf();
N.send();
if(this.__dG.length>0){this._check();
}},_remove:function(E){qx.lang.Array.remove(this.__dH,E);
E.dispose();
this._check();
},__dK:0,_onsending:function(e){{};
e.getTarget().getRequest()._onsending(e);
},_onreceiving:function(e){e.getTarget().getRequest()._onreceiving(e);
},_oncompleted:function(e){{};
var f=e.getTarget().getRequest();
var d=x+e.getType();
try{if(f[d]){f[d](e);
}}catch(a){var c=qx.dev.StackTrace.getStackTraceFromError(a);
this.error("Request "+f+" handler "+d+" threw an error: "+a+"\nStack Trace:\n"+c);
try{if(f[y]){var event=qx.event.Registration.createEvent(z,qx.event.type.Event);
f[y](event);
}}catch(B){}}finally{this._remove(e.getTarget());
}},_oninterval:function(e){var L=this.__dH;

if(L.length==0){this.__dJ.stop();
return;
}var G=(new Date).valueOf();
var J;
var H;
var K=this.getDefaultTimeout();
var I;
var F;

for(var i=L.length-1;i>=0;i--){J=L[i];
H=J.getRequest();

if(H.isAsynchronous()){I=H.getTimeout();
if(I==0){continue;
}
if(I==null){I=K;
}F=G-J._start;

if(F>I){this.warn("Timeout: transport "+J.toHashCode());
this.warn(F+"ms > "+I+"ms");
J.timeout();
}}}},_applyEnabled:function(C,D){if(C){this._check();
}this.__dJ.setEnabled(C);
},add:function(b){b.setState(k);

if(b.isAsynchronous()){this.__dG.push(b);
}else{this.__dG.unshift(b);
}this._check();

if(this.getEnabled()){this.__dJ.start();
}},abort:function(h){var j=h.getTransport();

if(j){j.abort();
}else if(qx.lang.Array.contains(this.__dG,h)){qx.lang.Array.remove(this.__dG,h);
}}},destruct:function(){this._disposeArray(u);
this._disposeObjects(w);
this.__dG=null;
}});
})();
(function(){var v="&",u="=",t="?",s="application/json",r="completed",q="text/plain",p="text/javascript",o="qx.io.remote.transport.Script",n="",m="_ScriptTransport_data",g="script",l="timeout",k="_ScriptTransport_",f="_ScriptTransport_id",e="aborted",j="utf-8",h="failed";
qx.Class.define(o,{extend:qx.io.remote.transport.Abstract,construct:function(){arguments.callee.base.call(this);
var a=++qx.io.remote.transport.Script.__dL;

if(a>=2000000000){qx.io.remote.transport.Script.__dL=a=1;
}this.__dM=null;
this.__dL=a;
},statics:{__dL:0,_instanceRegistry:{},ScriptTransport_PREFIX:k,ScriptTransport_ID_PARAM:f,ScriptTransport_DATA_PARAM:m,handles:{synchronous:false,asynchronous:true,crossDomain:true,fileUpload:false,programaticFormFields:false,responseTypes:[q,p,s]},isSupported:function(){return true;
},_numericMap:{"uninitialized":1,"loading":2,"loaded":2,"interactive":3,"complete":4},_requestFinished:qx.event.GlobalError.observeMethod(function(c,content){var d=qx.io.remote.transport.Script._instanceRegistry[c];

if(d==null){{};
}else{d._responseContent=content;
d._switchReadyState(qx.io.remote.transport.Script._numericMap.complete);
}})},members:{__dN:0,__dM:null,__dL:null,send:function(){var D=this.getUrl();
D+=(D.indexOf(t)>=0?v:t)+qx.io.remote.transport.Script.ScriptTransport_ID_PARAM+u+this.__dL;
var G=this.getParameters();
var F=[];

for(var C in G){if(C.indexOf(qx.io.remote.transport.Script.ScriptTransport_PREFIX)==0){this.error("Illegal parameter name. The following prefix is used internally by qooxdoo): "+qx.io.remote.transport.Script.ScriptTransport_PREFIX);
}var E=G[C];

if(E instanceof Array){for(var i=0;i<E.length;i++){F.push(encodeURIComponent(C)+u+encodeURIComponent(E[i]));
}}else{F.push(encodeURIComponent(C)+u+encodeURIComponent(E));
}}
if(F.length>0){D+=v+F.join(v);
}var B=this.getData();

if(B!=null){D+=v+qx.io.remote.transport.Script.ScriptTransport_DATA_PARAM+u+encodeURIComponent(B);
}qx.io.remote.transport.Script._instanceRegistry[this.__dL]=this;
this.__dM=document.createElement(g);
this.__dM.charset=j;
this.__dM.src=D;
{};
document.body.appendChild(this.__dM);
},_switchReadyState:function(I){switch(this.getState()){case r:case e:case h:case l:this.warn("Ignore Ready State Change");
return;
}while(this.__dN<I){this.setState(qx.io.remote.Exchange._nativeMap[++this.__dN]);
}},setRequestHeader:function(z,A){},getResponseHeader:function(b){return null;
},getResponseHeaders:function(){return {};
},getStatusCode:function(){return 200;
},getStatusText:function(){return n;
},getFetchedLength:function(){return 0;
},getResponseContent:function(){if(this.getState()!==r){{};
return null;
}{};

switch(this.getResponseType()){case q:case s:case p:{};
var H=this._responseContent;
return (H===0?0:(H||null));
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}}},defer:function(w,x,y){qx.io.remote.Exchange.registerType(qx.io.remote.transport.Script,o);
},destruct:function(){if(this.__dM){delete qx.io.remote.transport.Script._instanceRegistry[this.__dL];
document.body.removeChild(this.__dM);
}this.__dM=this._responseContent=null;
}});
})();
(function(){var m="value",l="icon",k="model",j="text",h="qx.client",g="execute",f="source",e="mshtml",d=" ",c="user.profile_image_url",N="showcase/databinding/twitter_logo_outline.png",M="Enter",L="one",K="http",J="keydown",I="http://twitter.com/statuses/user_timeline/1and1.json",H="Friends",G="<a href='",F="1and1",E="callback",t="selection[0]",u="username",r="showcase.page.databinding.Content",s="Location: ",p="Details",q="user.name",n="Name: ",o="</a>",v="Posted with: ",w="' target='_blank'>",z="http://twitter.com/statuses/friends_timeline.json",y="Show",B="user.location",A=".json",D="http://twitter.com/statuses/user_timeline/",C="Avatar: ",x="Message: ";
qx.Class.define(r,{extend:showcase.AbstractContent,construct:function(Q){arguments.callee.base.call(this,Q);
this.setView(this._createView());
},members:{_createView:function(){var bh=new qx.ui.container.Composite(new qx.ui.layout.Canvas());
var bd=new qx.ui.basic.Image(N);
bh.add(bd,{left:10,top:15});
var X=new qx.ui.form.List();
bh.add(X,{left:10,top:135,bottom:5});
X.set({selectionMode:L,width:300,maxHeight:400});
var bb=new qx.data.controller.List(null,X);
bb.setDelegate(this);
bb.setLabelPath(j);
if(!qx.core.Variant.isSet(h,e)){bb.setIconPath(c);
}var U=I;
var bg=new qx.data.store.Jsonp(U,null,E);
bg.bind(k,bb,k);
var Y=new qx.ui.container.Composite(new qx.ui.layout.HBox(5));
Y.set({width:300});
var V=new qx.ui.form.Button(H);
Y.add(V);
V.addListener(g,function(){bg.setUrl(z);
},this);
Y.add(new qx.ui.core.Spacer(),{flex:1});
var S=new qx.ui.form.TextField(F);
S.setPlaceholder(u);
Y.add(S);
var bc=new qx.ui.form.Button(y);
Y.add(bc);
bc.addListener(g,function(){var b=D+S.getValue()+A;

if(bg.getUrl()==b){bg.reload();
}else{bg.setUrl(b);
}},this);
S.addListener(J,function(R){if(R.getKeyIdentifier()==M){bc.execute();
}},this);
bh.add(Y,{left:10,top:105});
var W=new qx.ui.groupbox.GroupBox(p);
bh.add(W,{left:320,top:116,bottom:5});
W.setWidth(270);
W.setHeight(220);
W.setAllowGrowY(false);
W.setLayout(new qx.ui.layout.Grid(5,5));
W.add(new qx.ui.basic.Label(n),{row:0,column:0});
W.add(new qx.ui.basic.Label(s),{row:1,column:0});
W.add(new qx.ui.basic.Label(x),{row:2,column:0});
W.add(new qx.ui.basic.Label(v),{row:3,column:0});
var name=new qx.ui.basic.Label();
W.add(name,{row:0,column:1});
var location=new qx.ui.basic.Label();
W.add(location,{row:1,column:1});
var be=new qx.ui.basic.Label();
be.setRich(true);
be.setWidth(150);
be.setSelectable(true);
W.add(be,{row:2,column:1});
var bf=new qx.ui.basic.Label();
bf.setRich(true);
W.add(bf,{row:3,column:1});
var T=new qx.data.controller.Object();
T.addTarget(name,m,q);
T.addTarget(location,m,B);
T.addTarget(be,m,j,false,{converter:function(O){var P=O.split(d);

for(var i=P.length-1;i>=0;i--){if(P[i].indexOf(K)==0){P[i]=G+P[i]+w+P[i]+o;
}}return P.join(d);
}});
T.addTarget(bf,m,f);

if(!qx.core.Variant.isSet(h,e)){W.add(new qx.ui.basic.Label(C),{row:4,column:0});
var ba=new qx.ui.basic.Image();
W.add(ba,{row:4,column:1});
T.addTarget(ba,f,c);
}bb.bind(t,T,k);
return bh;
},configureItem:function(a){a.setRich(true);
a.getChildControl(l).setWidth(48);
a.getChildControl(l).setHeight(48);
a.getChildControl(l).setScale(true);
}}});
})();
(function(){var t="failed",r="completed",q="=",p="aborted",o="",n="sending",m="&",k="configured",j="timeout",h="application/xml",O="qx.io.remote.transport.XmlHttp",N="application/json",M="text/html",L="qx.client",K="receiving",J="text/plain",I="text/javascript",H="?",G="created",F='Referer',A='Basic ',B="\n</pre>",y="string",z='Authorization',w="<pre>Could not execute json: \n",x="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",u=':',v="parseerror",C="file:",D="webkit",E="object";
qx.Class.define(O,{extend:qx.io.remote.transport.Abstract,statics:{handles:{synchronous:true,asynchronous:true,crossDomain:false,fileUpload:false,programaticFormFields:false,responseTypes:[J,I,N,h,M]},requestObjects:[],requestObjectCount:0,createRequestObject:qx.core.Variant.select(L,{"default":function(){return new XMLHttpRequest;
},"mshtml":function(){if(window.ActiveXObject&&qx.xml.Document.XMLHTTP){return new ActiveXObject(qx.xml.Document.XMLHTTP);
}
if(window.XMLHttpRequest){return new XMLHttpRequest;
}}}),isSupported:function(){return !!this.createRequestObject();
}},members:{__dO:false,__dP:0,__dQ:null,getRequest:function(){if(this.__dQ===null){this.__dQ=qx.io.remote.transport.XmlHttp.createRequestObject();
this.__dQ.onreadystatechange=qx.lang.Function.bind(this._onreadystatechange,this);
}return this.__dQ;
},send:function(){this.__dP=0;
var bq=this.getRequest();
var bm=this.getMethod();
var bt=this.getAsynchronous();
var bs=this.getUrl();
var bo=(window.location.protocol===C&&!(/^http(s){0,1}\:/.test(bs)));
this.__dO=bo;
var bw=this.getParameters(false);
var bu=[];

for(var bn in bw){var br=bw[bn];

if(br instanceof Array){for(var i=0;i<br.length;i++){bu.push(encodeURIComponent(bn)+q+encodeURIComponent(br[i]));
}}else{bu.push(encodeURIComponent(bn)+q+encodeURIComponent(br));
}}
if(bu.length>0){bs+=(bs.indexOf(H)>=0?m:H)+bu.join(m);
}if(this.getData()===null){var bw=this.getParameters(true);
var bu=[];

for(var bn in bw){var br=bw[bn];

if(br instanceof Array){for(var i=0;i<br.length;i++){bu.push(encodeURIComponent(bn)+q+encodeURIComponent(br[i]));
}}else{bu.push(encodeURIComponent(bn)+q+encodeURIComponent(br));
}}
if(bu.length>0){this.setData(bu.join(m));
}}var bv=function(bc){var bh=x;
var bl=o;
var bf,be,bd;
var bi,bj,bk,bg;
var i=0;

do{bf=bc.charCodeAt(i++);
be=bc.charCodeAt(i++);
bd=bc.charCodeAt(i++);
bi=bf>>2;
bj=((bf&3)<<4)|(be>>4);
bk=((be&15)<<2)|(bd>>6);
bg=bd&63;

if(isNaN(be)){bk=bg=64;
}else if(isNaN(bd)){bg=64;
}bl+=bh.charAt(bi)+bh.charAt(bj)+bh.charAt(bk)+bh.charAt(bg);
}while(i<bc.length);
return bl;
};
try{if(this.getUsername()){if(this.getUseBasicHttpAuth()){bq.open(bm,bs,bt);
bq.setRequestHeader(z,A+bv(this.getUsername()+u+this.getPassword()));
}else{bq.open(bm,bs,bt,this.getUsername(),this.getPassword());
}}else{bq.open(bm,bs,bt);
}}catch(bz){this.error("Failed with exception: "+bz);
this.failed();
return;
}if(!qx.core.Variant.isSet(L,D)){bq.setRequestHeader(F,window.location.href);
}var bp=this.getRequestHeaders();

for(var bn in bp){bq.setRequestHeader(bn,bp[bn]);
}try{{};
bq.send(this.getData());
}catch(bC){if(bo){this.failedLocally();
}else{this.error("Failed to send data: "+bC,"send");
this.failed();
}return;
}if(!bt){this._onreadystatechange();
}},failedLocally:function(){if(this.getState()===t){return;
}this.warn("Could not load from file: "+this.getUrl());
this.failed();
},_onreadystatechange:qx.event.GlobalError.observeMethod(function(e){switch(this.getState()){case r:case p:case t:case j:{};
return;
}var bH=this.getReadyState();

if(bH==4){if(!qx.io.remote.Exchange.wasSuccessful(this.getStatusCode(),bH,this.__dO)){if(this.getState()===k){this.setState(n);
}return this.failed();
}}while(this.__dP<bH){this.setState(qx.io.remote.Exchange._nativeMap[++this.__dP]);
}}),getReadyState:function(){var bL=null;

try{bL=this.getRequest().readyState;
}catch(X){}return bL;
},setRequestHeader:function(bA,bB){this.getRequestHeaders()[bA]=bB;
},getResponseHeader:function(bJ){var bK=null;

try{bK=this.getRequest().getResponseHeader(bJ)||null;
}catch(bI){}return bK;
},getStringResponseHeaders:function(){var by=null;

try{var bx=this.getRequest().getAllResponseHeaders();

if(bx){by=bx;
}}catch(bE){}return by;
},getResponseHeaders:function(){var bP=this.getStringResponseHeaders();
var bQ={};

if(bP){var bN=bP.split(/[\r\n]+/g);

for(var i=0,l=bN.length;i<l;i++){var bO=bN[i].match(/^([^:]+)\s*:\s*(.+)$/i);

if(bO){bQ[bO[1]]=bO[2];
}}}return bQ;
},getStatusCode:function(){var V=-1;

try{V=this.getRequest().status;
}catch(U){}return V;
},getStatusText:function(){var Y=o;

try{Y=this.getRequest().statusText;
}catch(bG){}return Y;
},getResponseText:function(){var bD=null;

try{bD=this.getRequest().responseText;
}catch(g){bD=null;
}return bD;
},getResponseXml:function(){var f=null;
var c=this.getStatusCode();
var d=this.getReadyState();

if(qx.io.remote.Exchange.wasSuccessful(c,d,this.__dO)){try{f=this.getRequest().responseXML;
}catch(b){}}if(typeof f==E&&f!=null){if(!f.documentElement){var s=String(this.getRequest().responseText).replace(/<\?xml[^\?]*\?>/,o);
f.loadXML(s);
}if(!f.documentElement){throw new Error("Missing Document Element!");
}
if(f.documentElement.tagName==v){throw new Error("XML-File is not well-formed!");
}}else{throw new Error("Response was not a valid xml document ["+this.getRequest().responseText+"]");
}return f;
},getFetchedLength:function(){var W=this.getResponseText();
return typeof W==y?W.length:0;
},getResponseContent:function(){var P=this.getState();

if(P!==r&&P!=t){{};
return null;
}{};
var R=this.getResponseText();

if(P==t){{};
return R;
}
switch(this.getResponseType()){case J:case M:{};
return R;
case N:{};

try{if(R&&R.length>0){var Q=qx.util.Json.parse(R,false);
return (Q===0?0:(Q||null));
}else{return null;
}}catch(bM){this.error("Could not execute json: ["+R+"]",bM);
return w+R+B;
}case I:{};

try{if(R&&R.length>0){var Q=window.eval(R);
return (Q===0?0:(Q||null));
}else{return null;
}}catch(a){this.error("Could not execute javascript: ["+R+"]",a);
return null;
}case h:R=this.getResponseXml();
{};
return (R===0?0:(R||null));
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}},_applyState:function(ba,bb){{};

switch(ba){case G:this.fireEvent(G);
break;
case k:this.fireEvent(k);
break;
case n:this.fireEvent(n);
break;
case K:this.fireEvent(K);
break;
case r:this.fireEvent(r);
break;
case t:this.fireEvent(t);
break;
case p:this.getRequest().abort();
this.fireEvent(p);
break;
case j:this.getRequest().abort();
this.fireEvent(j);
break;
}}},defer:function(S,T){qx.io.remote.Exchange.registerType(qx.io.remote.transport.XmlHttp,O);
},destruct:function(){var bF=this.getRequest();

if(bF){bF.onreadystatechange=qx.lang.Function.empty;
switch(bF.readyState){case 1:case 2:case 3:bF.abort();
}}this.__dQ=null;
}});
})();
(function(){var z="qx.event.type.Event",y="Boolean",x="queued",w="String",u="sending",t="receiving",s="aborted",r="failed",q="nocache",p="completed",be="qx.io.remote.Response",bd="POST",bc="configured",bb="timeout",ba="GET",Y="Pragma",X="no-url-params-on-post",W="no-cache",V="Cache-Control",U="Content-Type",G="text/plain",H="application/xml",E="application/json",F="text/html",C="application/x-www-form-urlencoded",D="qx.io.remote.Exchange",A="Integer",B="X-Qooxdoo-Response-Type",I="HEAD",J="qx.io.remote.Request",M="_applyResponseType",L="_applyState",O="text/javascript",N="changeState",Q="PUT",P="_applyProhibitCaching",K="",T="_applyMethod",S="DELETE",R="boolean";
qx.Class.define(J,{extend:qx.core.Object,construct:function(g,h,i){arguments.callee.base.call(this);
this.__dR={};
this.__dS={};
this.__dT={};
this.__dU={};

if(g!==undefined){this.setUrl(g);
}
if(h!==undefined){this.setMethod(h);
}
if(i!==undefined){this.setResponseType(i);
}this.setProhibitCaching(true);
this.__dV=++qx.io.remote.Request.__dV;
},events:{"created":z,"configured":z,"sending":z,"receiving":z,"completed":be,"aborted":z,"failed":be,"timeout":be},statics:{__dV:0},properties:{url:{check:w,init:K},method:{check:[ba,bd,Q,I,S],apply:T,init:ba},asynchronous:{check:y,init:true},data:{check:w,nullable:true},username:{check:w,nullable:true},password:{check:w,nullable:true},state:{check:[bc,x,u,t,p,s,bb,r],init:bc,apply:L,event:N},responseType:{check:[G,O,E,H,F],init:G,apply:M},timeout:{check:A,nullable:true},prohibitCaching:{check:function(v){return typeof v==R||v===X;
},init:true,apply:P},crossDomain:{check:y,init:false},fileUpload:{check:y,init:false},transport:{check:D,nullable:true},useBasicHttpAuth:{check:y,init:false}},members:{__dR:null,__dS:null,__dT:null,__dU:null,__dV:null,send:function(){qx.io.remote.RequestQueue.getInstance().add(this);
},abort:function(){qx.io.remote.RequestQueue.getInstance().abort(this);
},reset:function(){switch(this.getState()){case u:case t:this.error("Aborting already sent request!");
case x:this.abort();
break;
}},isConfigured:function(){return this.getState()===bc;
},isQueued:function(){return this.getState()===x;
},isSending:function(){return this.getState()===u;
},isReceiving:function(){return this.getState()===t;
},isCompleted:function(){return this.getState()===p;
},isAborted:function(){return this.getState()===s;
},isTimeout:function(){return this.getState()===bb;
},isFailed:function(){return this.getState()===r;
},__dW:function(e){var bf=e.clone();
bf.setTarget(this);
this.dispatchEvent(bf);
},_onqueued:function(e){this.setState(x);
this.__dW(e);
},_onsending:function(e){this.setState(u);
this.__dW(e);
},_onreceiving:function(e){this.setState(t);
this.__dW(e);
},_oncompleted:function(e){this.setState(p);
this.__dW(e);
this.dispose();
},_onaborted:function(e){this.setState(s);
this.__dW(e);
this.dispose();
},_ontimeout:function(e){this.setState(bb);
this.__dW(e);
this.dispose();
},_onfailed:function(e){this.setState(r);
this.__dW(e);
this.dispose();
},_applyState:function(bm,bn){{};
},_applyProhibitCaching:function(bg,bh){if(!bg){this.removeParameter(q);
this.removeRequestHeader(Y);
this.removeRequestHeader(V);
return;
}if(bg!==X||this.getMethod()!=bd){this.setParameter(q,new Date().valueOf());
}else{this.removeParameter(q);
}this.setRequestHeader(Y,W);
this.setRequestHeader(V,W);
},_applyMethod:function(bq,br){if(bq===bd){this.setRequestHeader(U,C);
}else{this.removeRequestHeader(U);
}var bs=this.getProhibitCaching();
this._applyProhibitCaching(bs,bs);
},_applyResponseType:function(j,k){this.setRequestHeader(B,j);
},setRequestHeader:function(d,f){this.__dR[d]=f;
},removeRequestHeader:function(m){delete this.__dR[m];
},getRequestHeader:function(bl){return this.__dR[bl]||null;
},getRequestHeaders:function(){return this.__dR;
},setParameter:function(bi,bj,bk){if(bk){this.__dT[bi]=bj;
}else{this.__dS[bi]=bj;
}},removeParameter:function(a,b){if(b){delete this.__dT[a];
}else{delete this.__dS[a];
}},getParameter:function(n,o){if(o){return this.__dT[n]||null;
}else{return this.__dS[n]||null;
}},getParameters:function(c){return (c?this.__dT:this.__dS);
},setFormField:function(bo,bp){this.__dU[bo]=bp;
},removeFormField:function(bt){delete this.__dU[bt];
},getFormField:function(l){return this.__dU[l]||null;
},getFormFields:function(){return this.__dU;
},getSequenceNumber:function(){return this.__dV;
}},destruct:function(){this.setTransport(null);
this.__dR=this.__dS=this.__dT=this.__dU=null;
}});
})();
(function(){var l="changeModel",k="qx.core.Object",j="reset",h="qx.data.controller.Object",g="_applyModel";
qx.Class.define(h,{extend:qx.core.Object,construct:function(M){arguments.callee.base.call(this);
this.__dX={};
this.__dY=[];

if(M!=null){this.setModel(M);
}},properties:{model:{check:k,event:l,apply:g,nullable:true}},members:{__dY:null,__dX:null,_applyModel:function(m,n){for(var i=0;i<this.__dY.length;i++){var t=this.__dY[i][0];
var q=this.__dY[i][1];
var p=this.__dY[i][2];
var r=this.__dY[i][3];
var s=this.__dY[i][4];
var o=this.__dY[i][5];
if(n!=undefined){this.__eb(t,q,p,n);
}if(m!=undefined){this.__ea(t,q,p,r,s,o);
}else{t[j+qx.lang.String.firstUp(q)]();
}}},addTarget:function(G,H,I,J,K,L){this.__dY.push([G,H,I,J,K,L]);
this.__ea(G,H,I,J,K,L);
},__ea:function(u,v,w,x,y,z){if(this.getModel()==null){return;
}var A=this.getModel().bind(w,u,v,y);
var B=null;

if(x){B=u.bind(v,this.getModel(),w,z);
}var C=u.toHashCode();

if(this.__dX[C]==undefined){this.__dX[C]=[];
}this.__dX[C].push([A,B,v,w,y,z]);
},removeTarget:function(D,E,F){this.__eb(D,E,F,this.getModel());
for(var i=0;i<this.__dY.length;i++){if(this.__dY[i][0]==D&&this.__dY[i][1]==E&&this.__dY[i][2]==F){this.__dY.splice(i,1);
}}},__eb:function(a,b,c,d){if(!(a instanceof qx.core.Object)){return ;
}var e=this.__dX[a.toHashCode()];
if(e==undefined||e.length==0){return;
}for(var i=0;i<e.length;i++){if(e[i][2]==b&&e[i][3]==c){var f=e[i][0];
d.removeBinding(f);
if(e[i][1]!=null){a.removeBinding(e[i][1]);
}e.splice(i,1);
return;
}}}},destruct:function(){this.__dX=this.__dY=null;
}});
})();
