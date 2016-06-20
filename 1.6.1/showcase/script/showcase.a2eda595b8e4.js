qx.$$packageData['1024']={"locales":{},"resources":{"qxc/application/twitterdemo/twitter_logo_outline.png":[300,78,"png","qxc.application.twitterdemo"]},"translations":{}};
qx.Part.$$notifyLoad("1024", function() {
(function(){var j="qx.event.type.Event",i="qx.debug.io",h="fail",g="GET",f="qx.event.type.Data",e="load",d="abort",c="loadEnd",b="Map",a="qx.io.request.AbstractRequest",E="changePhase",D="Please use setRequestHeader() instead.",C="sent",B="qx.io.request.authentication.IAuthentication",A="error",z="loading",y="success",x="String",w="",v="opened",q="Please use getRequestHeader() instead.",r="POST",o="statusError",p="readyStateChange",m="abstract",n="unsent",k="changeResponse",l="Number",s="Content-Type",t="timeout",u="undefined";
qx.Class.define(a,{type:m,extend:qx.core.Object,construct:function(F){qx.core.Object.call(this);

if(F!==undefined){this.setUrl(F);
}this.__ql={};
var G=this._transport=this._createTransport();
this._setPhase(n);
this.__sF=qx.lang.Function.bind(this._onReadyStateChange,this);
this.__sG=qx.lang.Function.bind(this._onLoad,this);
this.__sH=qx.lang.Function.bind(this._onLoadEnd,this);
this.__sI=qx.lang.Function.bind(this._onAbort,this);
this.__sq=qx.lang.Function.bind(this._onTimeout,this);
this.__sJ=qx.lang.Function.bind(this._onError,this);
G.onreadystatechange=this.__sF;
G.onload=this.__sG;
G.onloadend=this.__sH;
G.onabort=this.__sI;
G.ontimeout=this.__sq;
G.onerror=this.__sJ;
},events:{"readyStateChange":j,"success":j,"load":j,"loadEnd":j,"abort":j,"timeout":j,"error":j,"statusError":j,"fail":j,"changeResponse":f,"changePhase":f},properties:{url:{check:x},requestHeaders:{check:b,nullable:true},timeout:{check:l,nullable:true,init:0},requestData:{check:function(H){return qx.lang.Type.isString(H)||qx.Class.isSubClassOf(H.constructor,qx.core.Object)||qx.lang.Type.isObject(H);
},nullable:true},authentication:{check:B,nullable:true}},members:{__sF:null,__sG:null,__sH:null,__sI:null,__sq:null,__sJ:null,__sK:null,__st:null,__sL:null,__ql:null,__sM:null,_transport:null,_createTransport:function(){throw new Error("Abstract method call");
},_getConfiguredUrl:function(){},_getConfiguredRequestHeaders:function(){},_getParsedResponse:function(){throw new Error("Abstract method call");
},_getMethod:function(){return g;
},_isAsync:function(){return true;
},send:function(){var M=this._transport,I,L,J,K;
I=this._getConfiguredUrl();
if(/\#/.test(I)){I=I.replace(/\#.*/,w);
}M.timeout=this.getTimeout();
L=this._getMethod();
J=this._isAsync();
if(qx.core.Environment.get(i)){this.debug("Open low-level request with method: "+L+", url: "+I+", async: "+J);
}M.open(L,I,J);
this._setPhase(v);
K=this._serializeData(this.getRequestData());
this._setRequestHeaders();
if(qx.core.Environment.get(i)){this.debug("Send low-level request");
}L==g?M.send():M.send(K);
this._setPhase(C);
},abort:function(){if(qx.core.Environment.get(i)){this.debug("Abort request");
}this.__st=true;
this.__sL=d;
this._transport.abort();
},_setRequestHeaders:function(){var P=this._transport,N=this._getAllRequestHeaders();

for(var O in N){P.setRequestHeader(O,N[O]);
}},_getAllRequestHeaders:function(){var Q=qx.lang.Object.merge({},this._getConfiguredRequestHeaders(),this.__sN(),this.__sM,this.__ql);
return Q;
},__sN:function(){var S=this.getAuthentication(),R={};

if(S){S.getAuthHeaders().forEach(function(T){R[T.key]=T.value;
});
return R;
}},setRequestHeader:function(U,V){this.__ql[U]=V;
},getRequestHeader:function(W){return this.__ql[W];
},removeRequestHeader:function(X){if(this.__ql[X]){delete this.__ql[X];
}},setRequestHeaders:function(Y){qx.log.Logger.deprecatedMethodWarning(arguments.callee,D);
qx.core.Assert.assertObject(Y);
this.__sM=Y;
},getRequestHeaders:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,q);
return this.__sM;
},getTransport:function(){return this._transport;
},getReadyState:function(){return this._transport.readyState;
},getPhase:function(){return this.__sL;
},getStatus:function(){return this._transport.status;
},getStatusText:function(){return this._transport.statusText;
},getResponseText:function(){return this._transport.responseText;
},getAllResponseHeaders:function(){return this._transport.getAllResponseHeaders();
},getResponseHeader:function(ba){return this._transport.getResponseHeader(ba);
},getResponseContentType:function(){return this.getResponseHeader(s);
},isDone:function(){return this.getReadyState()===4;
},getResponse:function(){return this.__sK;
},_setResponse:function(bb){var bc=bb;

if(this.__sK!==bb){this.__sK=bb;
this.fireEvent(k,qx.event.type.Data,[this.__sK,bc]);
}},_onReadyStateChange:function(){var bd=this.getReadyState();

if(qx.core.Environment.get(i)){this.debug("Fire readyState: "+bd);
}this.fireEvent(p);
if(this.__st){return;
}
if(bd===3){this._setPhase(z);
}
if(this.isDone()){this.__sO();
}},__sO:function(){var be;

if(qx.core.Environment.get(i)){this.debug("Request completed with HTTP status: "+this.getStatus());
}this._setPhase(e);
if(qx.util.Request.isSuccessful(this.getStatus())){if(qx.core.Environment.get(i)){this.debug("Response is of type: '"+this.getResponseContentType()+"'");
}be=this._getParsedResponse();
this._setResponse(be);
this._fireStatefulEvent(y);
}else{if(this.getStatus()!==0){this._fireStatefulEvent(o);
this.fireEvent(h);
}}},_onLoad:function(){this.fireEvent(e);
},_onLoadEnd:function(){this.fireEvent(c);
},_onAbort:function(){this._fireStatefulEvent(d);
},_onTimeout:function(){this._fireStatefulEvent(t);
this.fireEvent(h);
},_onError:function(){this.fireEvent(A);
this.fireEvent(h);
},_fireStatefulEvent:function(bf){this._setPhase(bf);
this.fireEvent(bf);
},_setPhase:function(bg){var bh=this.__sL;
this.__sL=bg;
this.fireDataEvent(E,bg,bh);
},_serializeData:function(bi){var bj=typeof this.getMethod!==u&&this.getMethod()==r;

if(!bi){return;
}
if(qx.lang.Type.isString(bi)){return bi;
}
if(qx.Class.isSubClassOf(bi.constructor,qx.core.Object)){return qx.util.Serializer.toUriParameter(bi);
}
if(qx.lang.Type.isObject(bi)){return qx.lang.Object.toUriParameter(bi,bj);
}}},environment:{"qx.debug.io":false},destruct:function(){var bl=this._transport,bk=function(){};

if(this._transport){bl.onreadystatechange=bl.onload=bl.onloadend=bl.onabort=bl.ontimeout=bl.onerror=bk;
bl.dispose();
}}});
})();
(function(){var b="//",a="qx.util.Request";
qx.Class.define(a,{statics:{isCrossDomain:function(c){var e=qx.util.Uri.parseUri(c),location=window.location,d=location.protocol;
if(!(c.indexOf(b)!==-1)){return false;
}
if(d.substr(0,d.length-1)==e.protocol&&location.host===e.host&&location.port===e.port){return false;
}return true;
},isSuccessful:function(status){return (status>=200&&status<300||status===304);
},methodAllowsRequestBody:function(f){return !((/^(GET)|(HEAD)$/).test(f));
}}});
})();
(function(){var j="configured",i="aborted",h="qx.event.type.Data",g="receiving",f="sending",e="completed",d="failed",c="timeout",b="changeModel",a="application/json",x="json",w="loaded",v="error",u="fail",t="queued",s="changeState",r="success",q="String",p="changePhase",o="_marshaler",m="qx.data.store.Json",n="__qC",k="changeUrl",l="_applyUrl";
qx.Class.define(m,{extend:qx.core.Object,construct:function(y,z){qx.core.Object.call(this);
this._marshaler=new qx.data.marshal.Json(z);
this._delegate=z;
this.__sE=false;

if(y!=null){this.setUrl(y);
}},events:{"loaded":h,"error":h},properties:{model:{nullable:true,event:b},state:{check:[j,t,f,g,e,i,c,d],init:j,event:s},url:{check:q,apply:l,event:k,nullable:true}},members:{_marshaler:null,_delegate:null,__qC:null,__sE:null,_applyUrl:function(A,B){if(A!=null){A=qx.util.AliasManager.getInstance().resolve(A);
A=qx.util.ResourceManager.getInstance().toUri(A);
this._createRequest(A);
}},_getRequest:function(){return this.__qC;
},_setRequest:function(C){this.__qC=C;
},_createRequest:function(D){if(this.__qC){this.__qC.dispose();
this.__qC=null;
}var E=new qx.io.request.Xhr(D);
this._setRequest(E);
E.setAccept(a);
E.setParser(x);
E.addListener(r,this._onSuccess,this);
var F=this._delegate;

if(F&&qx.lang.Type.isFunction(F.configureRequest)){this._delegate.configureRequest(E);
}E.addListener(p,this._onChangePhase,this);
E.addListener(u,this._onFail,this);
E.send();
},_onChangePhase:function(G){var H=G.getData(),J={},I;
J={"opened":j,"sent":f,"loading":g,"success":e,"abort":i,"timeout":c,"statusError":d};
I=J[H];

if(I){this.setState(I);
}},_onFail:function(K){var L=K.getTarget();
this.fireDataEvent(v,L);
},_onSuccess:function(M){if(this.isDisposed()){return;
}var O=M.getTarget(),P=O.getResponse();
var N=this._delegate;

if(N&&qx.lang.Type.isFunction(N.manipulateData)){P=this._delegate.manipulateData(P);
}this._marshaler.toClass(P,true);
var Q=this.getModel();
this.setModel(this._marshaler.toModel(P));
if(Q&&Q.dispose){Q.dispose();
}this.fireDataEvent(w,this.getModel());
if(this.__qC){this.__qC.dispose();
this.__qC=null;
}},reload:function(){var R=this.getUrl();

if(R!=null){this._createRequest(R);
}}},destruct:function(){if(this.__qC!=null){this._disposeObjects(n);
}this._disposeSingletonObjects(o);
this._delegate=null;
}});
})();
(function(){var f="String",e="callback",d="changePhase",c="fail",b="success",a="qx.data.store.Jsonp";
qx.Class.define(a,{extend:qx.data.store.Json,construct:function(g,h,i){if(i!=undefined){this.setCallbackParam(i);
}qx.data.store.Json.call(this,g,h);
},properties:{callbackParam:{check:f,init:e,nullable:true},callbackName:{check:f,nullable:true}},members:{_createRequest:function(j){if(this._getRequest()){this._getRequest().dispose();
}var k=new qx.io.request.Jsonp();
this._setRequest(k);
k.setCallbackParam(this.getCallbackParam());
k.setCallbackName(this.getCallbackName());
k.setUrl(j);
k.addListener(b,this._onSuccess,this);
var l=this._delegate;

if(l&&qx.lang.Type.isFunction(l.configureRequest)){this._delegate.configureRequest(k);
}k.addListener(d,this._onChangePhase,this);
k.addListener(c,this._onFail,this);
k.send();
}}});
})();
(function(){var q="qx.event.type.Event",p="",o="function",n="xml",m="GET",l="null",k="XMLHttpRequest",j="Boolean",i="X-Requested-With",h="application/x-www-form-urlencoded",c="Cache-Control",g="Content-Type",f="qx.debug.io",b="qx.io.request.Xhr",a="json",e="Accept",d="String";
qx.Class.define(b,{extend:qx.io.request.AbstractRequest,construct:function(r,s){if(s!==undefined){this.setMethod(s);
}qx.io.request.AbstractRequest.call(this,r);
},events:{"readyStateChange":q,"success":q,"load":q,"statusError":q},statics:{PARSER:{json:qx.lang.Json.parse,xml:qx.xml.Document.fromString}},properties:{method:{init:m},async:{check:j,init:true},accept:{check:d,nullable:true},cache:{check:function(t){return qx.lang.Type.isBoolean(t)||qx.lang.Type.isString(t);
},init:true}},members:{__sP:null,_createTransport:function(){return new qx.bom.request.Xhr();
},_getConfiguredUrl:function(){var u=this.getUrl(),v;

if(this.getMethod()===m&&this.getRequestData()){v=this._serializeData(this.getRequestData());
u=qx.util.Uri.appendParamsToUrl(u,v);
}
if(this.getCache()===false){u=qx.util.Uri.appendParamsToUrl(u,{nocache:new Date().valueOf()});
}return u;
},_getConfiguredRequestHeaders:function(){var w={},x=qx.util.Request.methodAllowsRequestBody(this.getMethod());
if(!qx.util.Request.isCrossDomain(this.getUrl())){w[i]=k;
}if(qx.lang.Type.isString(this.getCache())){w[c]=this.getCache();
}if(this.getRequestData()!==l&&x){w[g]=h;
}if(this.getAccept()){if(qx.core.Environment.get(f)){this.debug("Accepting: '"+this.getAccept()+"'");
}w[e]=this.getAccept();
}return w;
},_getMethod:function(){return this.getMethod();
},_isAsync:function(){return this.isAsync();
},_getParsedResponse:function(){var z=this._transport.responseText,y=this._getParser();

if(typeof y===o){if(z!==p){return y.call(this,z);
}}return z;
},setParser:function(A){var B=qx.io.request.Xhr;
if(typeof B.PARSER[A]===o){return this.__sP=B.PARSER[A];
}return this.__sP=A;
},_getParser:function(){var C=this.__sP,D;
if(C){return C;
}if(!this.isDone()){return;
}D=this.getResponseContentType()||p;
D=D.replace(/;.*$/,p);

if((/^application\/(\w|\.)*\+?json$/).test(D)){C=qx.io.request.Xhr.PARSER[a];
}
if((/^application\/xml$/).test(D)){C=qx.io.request.Xhr.PARSER[n];
}if((/[^\/]+\/[^\+]+\+xml$/).test(this.getResponseContentType())){C=qx.io.request.Xhr.PARSER[n];
}return C;
}}});
})();
(function(){var k="qx.debug.io",j="engine.name",i="mshtml",h="",g="browser.documentmode",f="head",e="script",d="opera",c="Unknown response headers",b="unknown",a="qx.bom.request.Script";
qx.Bootstrap.define(a,{construct:function(){this.__sx();
this.__so=qx.Bootstrap.bind(this._onNativeLoad,this);
this.__sp=qx.Bootstrap.bind(this._onNativeError,this);
this.__sq=qx.Bootstrap.bind(this._onTimeout,this);
this.__sr=document.head||document.getElementsByTagName(f)[0]||document.documentElement;
this.timeout=this.__sB()?0:15000;
},members:{readyState:null,status:null,statusText:null,timeout:null,__ss:null,open:function(l,m){if(this.__sv){return;
}this.__sx();
this.__st=null;
this.__su=m;

if(qx.core.Environment.get(k)){qx.Bootstrap.debug(qx.bom.request.Script,"Open native request with "+"url: "+m);
}this.__sy(1);
},setRequestHeader:function(n,o){if(this.__sv){return;
}var p={};

if(this.readyState!==1){throw new Error("Invalid state");
}p[n]=o;
this.__su=qx.util.Uri.appendParamsToUrl(this.__su,p);
},send:function(){if(this.__sv){return;
}var s=this.__sC(),q=this.__sr,r=this;

if(this.timeout>0){this.__ds=window.setTimeout(this.__sq,this.timeout);
}
if(qx.core.Environment.get(k)){qx.Bootstrap.debug(qx.bom.request.Script,"Send native request");
}q.insertBefore(s,q.firstChild);
window.setTimeout(function(){r.__sy(2);
r.__sy(3);
});
},abort:function(){if(this.__sv){return;
}this.__st=true;
this.__sD();
this.onabort();
},onreadystatechange:function(){},onload:function(){},onloadend:function(){},onerror:function(){},onabort:function(){},ontimeout:function(){},getResponseHeader:function(t){if(this.__sv){return;
}return b;
},getAllResponseHeaders:function(){if(this.__sv){return;
}return c;
},setDetermineSuccess:function(u){qx.core.Assert.assertFunction(u);
this.__ss=u;
},dispose:function(){var v=this.__sw;

if(!this.__sv){if(v){v.onload=v.onreadystatechange=null;
this.__sD();
}
if(this.__ds){window.clearTimeout(this.__ds);
}this.__sv=true;
}},_getUrl:function(){return this.__su;
},_getScriptElement:function(){return this.__sw;
},_onTimeout:function(){this.__sA();

if(!this.__sB()){this.onerror();
}this.ontimeout();

if(!this.__sB()){this.onloadend();
}},_onNativeLoad:function(){var y=this.__sw,w=this.__ss,x=this;
if(this.__st){return;
}if(qx.core.Environment.get(j)===i&&qx.core.Environment.get(g)<9){if(!(/loaded|complete/).test(y.readyState)){return;
}else{if(qx.core.Environment.get(k)){qx.Bootstrap.debug(qx.bom.request.Script,"Received native readyState: loaded");
}}}
if(qx.core.Environment.get(k)){qx.Bootstrap.debug(qx.bom.request.Script,"Received native load");
}if(w){if(!this.status){this.status=w()?200:500;
}}
if(this.status===500){if(qx.core.Environment.get(k)){qx.Bootstrap.debug(qx.bom.request.Script,"Detected error");
}}
if(this.__ds){window.clearTimeout(this.__ds);
}window.setTimeout(function(){x.__sz();
x.__sy(4);
x.onload();
x.onloadend();
});
},_onNativeError:function(){this.__sA();
this.onerror();
this.onloadend();
},__sw:null,__sr:null,__su:h,__so:null,__sp:null,__sq:null,__ds:null,__st:null,__sv:null,__sx:function(){this.readyState=0;
this.status=0;
this.statusText=h;
},__sy:function(z){this.readyState=z;
this.onreadystatechange();
},__sz:function(){this.__sD();
this.readyState=4;
if(!this.status){this.status=200;
}this.statusText=h+this.status;
},__sA:function(){this.__sD();
this.readyState=4;
this.status=0;
this.statusText=null;
},__sB:function(){var B=qx.core.Environment.get(j)===i&&qx.core.Environment.get(g)<9;
var A=qx.core.Environment.get(j)===d;
return !(B||A);
},__sC:function(){var C=this.__sw=document.createElement(e);
C.src=this.__su;
C.onerror=this.__sp;
C.onload=this.__so;
if(qx.core.Environment.get(j)===i&&qx.core.Environment.get(g)<9){C.onreadystatechange=this.__so;
}return C;
},__sD:function(){var D=this.__sw;

if(D&&D.parentNode){this.__sr.removeChild(D);
}}},defer:function(){qx.core.Environment.add(k,false);
}});
})();
(function(){var i="qx.debug.io",h="qx.bom.request.Jsonp",g="callback",f="open",e="dispose",d="",c="_onNativeLoad",b="].callback",a="qx.bom.request.Jsonp[";
qx.Bootstrap.define(h,{extend:qx.bom.request.Script,construct:function(){qx.bom.request.Script.apply(this);
this.__tr();
},members:{responseJson:null,__cq:null,__tl:null,__tm:null,__tn:null,__to:null,__sv:null,open:function(j,k){if(this.__sv){return;
}var l={},n,m,o=this;
this.responseJson=null;
this.__tn=false;
n=this.__tl||g;
m=this.__tm||a+this.__cq+b;
if(!this.__tm){this.constructor[this.__cq]=this;
}else{if(!window[this.__tm]){this.__to=true;
window[this.__tm]=function(p){o.callback(p);
};
}else{if(qx.core.Environment.get(i)){qx.log.Logger.debug(qx.bom.request.Jsonp,"Callback "+this.__tm+" already exists");
}}}
if(qx.core.Environment.get(i)){qx.Bootstrap.debug(qx.bom.request.Jsonp,"Expecting JavaScript response to call: "+m);
}l[n]=m;
k=qx.util.Uri.appendParamsToUrl(k,l);
this.__tq(f,[j,k]);
},callback:function(q){if(this.__sv){return;
}this.__tn=true;
this.responseJson=q;
this.constructor[this.__cq]=undefined;
this.__tp();
},setCallbackParam:function(r){this.__tl=r;
},setCallbackName:function(name){this.__tm=name;
},dispose:function(){this.__tp();
this.__tq(e);
},_onNativeLoad:function(){this.status=this.__tn?200:500;
this.__tq(c);
},__tp:function(){if(this.__to&&window[this.__tm]){window[this.__tm]=undefined;
this.__to=false;
}},__tq:function(s,t){qx.bom.request.Script.prototype[s].apply(this,t||[]);
},__tr:function(){this.__cq=(new Date().valueOf())+(d+Math.random()).substring(2,5);
}}});
})();
(function(){var a="showcase.page.databinding.Content";
qx.Class.define(a,{extend:showcase.AbstractContent,construct:function(b){showcase.AbstractContent.call(this,b);
this.setView(new qxc.application.twitterdemo.Demo());
}});
})();
(function(){var k="engine.name",j="qx.debug.io",i="",h="mshtml",g="undefined",f="opera",d="gecko",c="file:",b="If-Modified-Since",a="onunload",y="browser.documentmode",x="activex",w="If-None-Match",v="xhr",u="engine.version",t="-1",s="If-Match",r="Microsoft.XMLHTTP",q="browser.version",p="qx.bom.request.Xhr",n="Microsoft.XMLDOM",o="If-Range",l="Content-Type",m="io.xhr";
qx.Bootstrap.define(p,{construct:function(){this.__sQ=qx.Bootstrap.bind(this.__tc,this);
this.__sR=qx.Bootstrap.bind(this.__tb,this);
this.__sq=qx.Bootstrap.bind(this.__tf,this);
this.__ta();
if(window.attachEvent){this.__sS=qx.Bootstrap.bind(this.__ti,this);
window.attachEvent(a,this.__sS);
}},statics:{UNSENT:0,OPENED:1,HEADERS_RECEIVED:2,LOADING:3,DONE:4},members:{readyState:0,responseText:i,responseXML:null,status:0,statusText:i,timeout:0,open:function(z,A,B,C,D){this.__tk();
if(typeof z===g||typeof A===g){throw new Error("Not enough arguments");
}this.__st=false;
this.__sT=false;
this.__sU=false;
this.__su=A;

if(typeof B==g){B=true;
}this.__sV=B;
if(!this.__tj()&&this.readyState>qx.bom.request.Xhr.UNSENT){this.dispose();
this.__ta();
}this.__sX.onreadystatechange=this.__sQ;

try{if(qx.core.Environment.get(j)){qx.Bootstrap.debug(qx.bom.request.Xhr,"Open native request with method: "+z+", url: "+A+", async: "+B);
}this.__sX.open(z,A,B,C,D);
}catch(E){if(!qx.util.Request.isCrossDomain(A)){throw E;
}
if(!this.__sV){this.__sW=E;
}
if(this.__sV){if(window.XDomainRequest){this.readyState=4;
this.__sX=new XDomainRequest();
this.__sX.onerror=qx.Bootstrap.bind(function(){this.onreadystatechange();
this.onerror();
this.onloadend();
},this);

if(qx.core.Environment.get(j)){qx.Bootstrap.debug(qx.bom.request.Xhr,"Retry open native request with method: "+z+", url: "+A+", async: "+B);
}this.__sX.open(z,A,B,C,D);
return;
}window.setTimeout(qx.Bootstrap.bind(function(){if(this.__sv){return;
}this.readyState=4;
this.onreadystatechange();
this.onerror();
this.onloadend();
},this));
}}if(qx.core.Environment.get(k)===h&&qx.core.Environment.get(y)<9&&this.__sX.readyState>0){this.__sX.setRequestHeader(b,t);
}if(qx.core.Environment.get(k)===d&&parseInt(qx.core.Environment.get(u),10)<2&&!this.__sV){this.readyState=qx.bom.request.Xhr.OPENED;
this.onreadystatechange();
}},setRequestHeader:function(F,G){this.__tk();
if(F==s||F==b||F==w||F==o){this.__sU=true;
}this.__sX.setRequestHeader(F,G);
},send:function(H){this.__tk();
if(!this.__sV&&this.__sW){throw this.__sW;
}if(qx.core.Environment.get(k)===f&&this.timeout===0){this.timeout=10000;
}if(this.timeout>0){this.__sY=window.setTimeout(this.__sq,this.timeout);
}H=typeof H==g?null:H;
try{if(qx.core.Environment.get(j)){qx.Bootstrap.debug(qx.bom.request.Xhr,"Send native request");
}this.__sX.send(H);
}catch(J){if(!this.__sV){throw J;
}if(this._getProtocol()===c){this.readyState=2;
this.__sy();
var I=this;
window.setTimeout(function(){if(I.__sv){return;
}I.readyState=3;
I.__sy();
I.readyState=4;
I.__sy();
});
}}if(qx.core.Environment.get(k)===d&&!this.__sV){this.__tc();
}this.__sT=true;
},abort:function(){this.__tk();
this.__st=true;
this.__sX.abort();

if(this.__sX){this.readyState=this.__sX.readyState;
}},onreadystatechange:function(){},onload:function(){},onloadend:function(){},onerror:function(){},onabort:function(){},ontimeout:function(){},getResponseHeader:function(K){this.__tk();
return this.__sX.getResponseHeader(K);
},getAllResponseHeaders:function(){this.__tk();
return this.__sX.getAllResponseHeaders();
},getRequest:function(){return this.__sX;
},dispose:function(){if(this.__sv){return false;
}window.clearTimeout(this.__sY);
if(window.detachEvent){window.detachEvent(a,this.__sS);
}try{this.__sX.onreadystatechange;
}catch(M){return;
}var L=function(){};
this.__sX.onreadystatechange=L;
this.__sX.onload=L;
this.__sX.onerror=L;
this.abort();
this.__sX=null;
this.__sv=true;
return true;
},_createNativeXhr:function(){var N=qx.core.Environment.get(m);

if(N===v){return new XMLHttpRequest();
}
if(N==x){return new window.ActiveXObject(r);
}qx.log.Logger.error(this,"No XHR support available.");
},_getProtocol:function(){var O=this.__su;
var P=/^(\w+:)\/\//;
if(O!==null&&O.match){var Q=O.match(P);

if(Q&&Q[1]){return Q[1];
}}return window.location.protocol;
},__sX:null,__sV:null,__sQ:null,__sR:null,__sS:null,__sq:null,__sT:null,__su:null,__st:null,__du:null,__sv:null,__sY:null,__sW:null,__sU:null,__ta:function(){this.__sX=this._createNativeXhr();
this.__sX.onreadystatechange=this.__sQ;
if(this.__sX.onabort){this.__sX.onabort=this.__sR;
}this.__sv=this.__sT=this.__st=false;
},__tb:function(){if(!this.__st){this.abort();
}},__tc:function(){var R=this.__sX,S=true;

if(qx.core.Environment.get(j)){qx.Bootstrap.debug(qx.bom.request.Xhr,"Received native readyState: "+R.readyState);
}if(this.readyState==R.readyState){return;
}this.readyState=R.readyState;
if(this.readyState===qx.bom.request.Xhr.DONE&&this.__st&&!this.__sT){return;
}if(!this.__sV&&(R.readyState==2||R.readyState==3)){return;
}this.status=0;
this.statusText=this.responseText=i;
this.responseXML=null;

if(this.readyState>=qx.bom.request.Xhr.HEADERS_RECEIVED){try{this.status=R.status;
this.statusText=R.statusText;
this.responseText=R.responseText;
this.responseXML=R.responseXML;
}catch(T){S=false;
}
if(S){this.__tg();
this.__th();
}}this.__sy();
if(this.readyState==qx.bom.request.Xhr.DONE){if(R){R.onreadystatechange=function(){};
}}},__sy:function(){var U=this;
if(this.readyState===qx.bom.request.Xhr.DONE){window.clearTimeout(this.__sY);
}if(qx.core.Environment.get(k)==h&&qx.core.Environment.get(y)<8){if(this.__sV&&!this.__sT&&this.readyState>=qx.bom.request.Xhr.LOADING){if(this.readyState==qx.bom.request.Xhr.LOADING){return ;
}
if(this.readyState==qx.bom.request.Xhr.DONE){window.setTimeout(function(){if(U.__sv){return;
}U.readyState=3;
U.onreadystatechange();
U.readyState=4;
U.onreadystatechange();
U.__td();
});
return;
}}}this.onreadystatechange();

if(this.readyState===qx.bom.request.Xhr.DONE){this.__td();
}},__td:function(){if(this.__du){this.ontimeout();
if(qx.core.Environment.get(k)===f){this.onerror();
}this.__du=false;
}else{if(this.__st){this.onabort();
}else{this.__te()?this.onerror():this.onload();
}}this.onloadend();
},__te:function(){var V;
if(this._getProtocol()===c){V=!this.responseText;
}else{V=!this.statusText;
}return V;
},__tf:function(){var W=this.__sX;
this.readyState=qx.bom.request.Xhr.DONE;
this.__du=true;
W.abort();
this.responseText=i;
this.responseXML=null;
this.__sy();
},__tg:function(){var X=this.readyState===qx.bom.request.Xhr.DONE;
if(this._getProtocol()===c&&this.status===0&&X){if(!this.__te()){this.status=200;
}}if(this.status===1223){this.status=204;
}if(qx.core.Environment.get(k)===f){if(X&&this.__sU&&!this.__st&&this.status===0){this.status=304;
}}},__th:function(){if(qx.core.Environment.get(k)==h&&(this.getResponseHeader(l)||i).match(/[^\/]+\/[^\+]+\+xml/)&&this.responseXML&&!this.responseXML.documentElement){var Y=new window.ActiveXObject(n);
Y.async=false;
Y.validateOnParse=false;
Y.loadXML(this.responseText);
this.responseXML=Y;
}},__ti:function(){try{if(this){this.dispose();
}}catch(e){}},__tj:function(){var name=qx.core.Environment.get(k);
var ba=qx.core.Environment.get(q);
return !(name==h&&ba<9||name==d&&ba<3.5);
},__tk:function(){if(this.__sv){throw new Error("Already disposed");
}}},defer:function(){qx.core.Environment.add(j,false);
}});
})();
(function(){var c="qx.event.type.Event",b="qx.io.request.Jsonp",a="Boolean";
qx.Class.define(b,{extend:qx.io.request.AbstractRequest,events:{"success":c,"load":c,"statusError":c},properties:{cache:{check:a,init:true}},members:{_createTransport:function(){return new qx.bom.request.Jsonp();
},_getConfiguredUrl:function(){var d=this.getUrl(),e;

if(this.getRequestData()){e=this._serializeData(this.getRequestData());
d=qx.util.Uri.appendParamsToUrl(d,e);
}
if(!this.getCache()){d=qx.util.Uri.appendParamsToUrl(d,{nocache:new Date().valueOf()});
}return d;
},_getParsedResponse:function(){return this._transport.responseJson;
},setCallbackParam:function(f){this._transport.setCallbackParam(f);
},setCallbackName:function(name){this._transport.setCallbackName(name);
}}});
})();
(function(){var u='"',t="{",s="[",r=",",q="",p="get",o="}",n="]",m='":',l="&",d="null",k='\\t',g='\\"',c='\\n',b='\\b',f="=",e="qx.util.Serializer",h='\\r',a='\\\\',j='\\f';
qx.Class.define(e,{statics:{toUriParameter:function(v,w,x){var B=q;
var C=qx.util.PropertyUtil.getAllProperties(v.constructor);

for(var name in C){if(C[name].group!=undefined){continue;
}var y=v[p+qx.lang.String.firstUp(name)]();
if(qx.lang.Type.isArray(y)){var A=qx.data&&qx.data.IListData&&qx.Class.hasInterface(y&&y.constructor,qx.data.IListData);

for(var i=0;i<y.length;i++){var z=A?y.getItem(i):y[i];
B+=this.__da(name,z,w);
}}else if(qx.lang.Type.isDate(y)&&x!=null){B+=this.__da(name,x.format(y),w);
}else{B+=this.__da(name,y,w);
}}return B.substring(0,B.length-1);
},__da:function(name,D,E){if(D instanceof qx.core.Object&&E!=null){var F=encodeURIComponent(E(D));

if(F===undefined){var F=encodeURIComponent(D);
}}else{var F=encodeURIComponent(D);
}return encodeURIComponent(name)+f+F+l;
},toNativeObject:function(G,H,I){var L;
if(G==null){return null;
}if(qx.data&&qx.data.IListData&&qx.Class.hasInterface(G.constructor,qx.data.IListData)){L=[];

for(var i=0;i<G.getLength();i++){L.push(qx.util.Serializer.toNativeObject(G.getItem(i),H,I));
}return L;
}if(qx.lang.Type.isArray(G)){L=[];

for(var i=0;i<G.length;i++){L.push(qx.util.Serializer.toNativeObject(G[i],H,I));
}return L;
}if(G instanceof qx.core.Object){if(H!=null){var M=H(G);
if(M!=undefined){return M;
}}L={};
var N=qx.util.PropertyUtil.getAllProperties(G.constructor);

for(var name in N){if(N[name].group!=undefined){continue;
}var K=G[p+qx.lang.String.firstUp(name)]();
L[name]=qx.util.Serializer.toNativeObject(K,H,I);
}return L;
}if(qx.lang.Type.isDate(G)&&I!=null){return I.format(G);
}if(qx.locale&&qx.locale.LocalizedString&&G instanceof qx.locale.LocalizedString){return G.toString();
}if(qx.lang.Type.isObject(G)){L={};

for(var J in G){L[J]=qx.util.Serializer.toNativeObject(G[J],H,I);
}return L;
}return G;
},toJson:function(O,P,Q){var T=q;
if(O==null){return d;
}if(qx.data&&qx.data.IListData&&qx.Class.hasInterface(O.constructor,qx.data.IListData)){T+=s;

for(var i=0;i<O.getLength();i++){T+=qx.util.Serializer.toJson(O.getItem(i),P,Q)+r;
}
if(T!=s){T=T.substring(0,T.length-1);
}return T+n;
}if(qx.lang.Type.isArray(O)){T+=s;

for(var i=0;i<O.length;i++){T+=qx.util.Serializer.toJson(O[i],P,Q)+r;
}
if(T!=s){T=T.substring(0,T.length-1);
}return T+n;
}if(O instanceof qx.core.Object){if(P!=null){var U=P(O);
if(U!=undefined){return u+U+u;
}}T+=t;
var V=qx.util.PropertyUtil.getAllProperties(O.constructor);

for(var name in V){if(V[name].group!=undefined){continue;
}var S=O[p+qx.lang.String.firstUp(name)]();
T+=u+name+m+qx.util.Serializer.toJson(S,P,Q)+r;
}
if(T!=t){T=T.substring(0,T.length-1);
}return T+o;
}if(O instanceof qx.locale.LocalizedString){O=O.toString();
}if(qx.lang.Type.isDate(O)&&Q!=null){return u+Q.format(O)+u;
}if(qx.lang.Type.isObject(O)){T+=t;

for(var R in O){T+=u+R+m+qx.util.Serializer.toJson(O[R],P,Q)+r;
}
if(T!=t){T=T.substring(0,T.length-1);
}return T+o;
}if(qx.lang.Type.isString(O)){O=O.replace(/([\\])/g,a);
O=O.replace(/(["])/g,g);
O=O.replace(/([\r])/g,h);
O=O.replace(/([\f])/g,j);
O=O.replace(/([\n])/g,c);
O=O.replace(/([\t])/g,k);
O=O.replace(/([\b])/g,b);
return u+O+u;
}if(qx.lang.Type.isDate(O)||qx.lang.Type.isRegExp(O)){return u+O+u;
}return O+q;
}}});
})();
(function(){var k="value",j=" ",h="icon",g="model",f="text",e="source",d="mshtml",c="engine.name",b="user.profile_image_url",a="qxc/application/twitterdemo/twitter_logo_outline.png",J="Enter",I="one",H="http",G="keydown",F="http://twitter.com/statuses/user_timeline/1and1.json",E="<a href='",D="execute",C="1and1",B="selection[0]",A="username",r="Location: ",s="Details",p="user.name",q="Name: ",n="qxc.application.twitterdemo.Demo",o="target='_blank'",l="</a>",m="Posted with: ",t="' target='_blank'>",u="Show",w="user.location",v=".json",y="http://twitter.com/statuses/user_timeline/",x="Avatar: ",z="Message: ";
qx.Class.define(n,{extend:qx.ui.container.Composite,construct:function(){qx.ui.container.Composite.call(this);
this._createView();
},members:{_createView:function(){this.setLayout(new qx.ui.layout.Canvas());
var T=new qx.ui.basic.Image(a);
this.add(T,{left:10,top:15});
var O=new qx.ui.form.List();
this.add(O,{left:10,top:135,bottom:5});
O.set({selectionMode:I,width:300,maxHeight:400});
var R=new qx.data.controller.List(null,O);
R.setDelegate(this);
R.setLabelPath(f);
if(qx.core.Environment.get(c)!=d){R.setIconPath(b);
}var M=F;
var V=new qx.data.store.Jsonp(M);
V.bind(g,R,g);
var P=new qx.ui.container.Composite(new qx.ui.layout.HBox(5));
P.set({width:300});
P.add(new qx.ui.core.Spacer(),{flex:1});
var K=new qx.ui.form.TextField(C);
K.setPlaceholder(A);
P.add(K);
var S=new qx.ui.form.Button(u);
P.add(S);
S.addListener(D,function(){var X=y+K.getValue()+v;

if(V.getUrl()==X){V.reload();
}else{V.setUrl(X);
}},this);
K.addListener(G,function(Y){if(Y.getKeyIdentifier()==J){S.execute();
}},this);
this.add(P,{left:10,top:105});
var N=new qx.ui.groupbox.GroupBox(s);
this.add(N,{left:320,top:116,bottom:5});
N.setWidth(270);
N.setHeight(220);
N.setAllowGrowY(false);
N.setLayout(new qx.ui.layout.Grid(5,5));
N.add(new qx.ui.basic.Label(q),{row:0,column:0});
N.add(new qx.ui.basic.Label(r),{row:1,column:0});
N.add(new qx.ui.basic.Label(z),{row:2,column:0});
N.add(new qx.ui.basic.Label(m),{row:3,column:0});
var name=new qx.ui.basic.Label();
N.add(name,{row:0,column:1});
var location=new qx.ui.basic.Label();
N.add(location,{row:1,column:1});
var U=new qx.ui.basic.Label();
U.setRich(true);
U.setWidth(150);
U.setSelectable(true);
N.add(U,{row:2,column:1});
var W=new qx.ui.basic.Label();
W.setRich(true);
N.add(W,{row:3,column:1});
var L=new qx.data.controller.Object();
L.addTarget(name,k,p);
L.addTarget(location,k,w);
L.addTarget(U,k,f,false,{converter:function(ba){var bb=ba.split(j);

for(var i=bb.length-1;i>=0;i--){if(bb[i].indexOf(H)==0){bb[i]=E+bb[i]+t+bb[i]+l;
}}return bb.join(j);
}});
L.addTarget(W,k,e,false,{converter:function(bc){bc=bc.split(j);
bc.splice(1,0,o);
return bc.join(j);
}});

if(qx.core.Environment.get(c)!=d){N.add(new qx.ui.basic.Label(x),{row:4,column:0});
var Q=new qx.ui.basic.Image();
N.add(Q,{row:4,column:1});
L.addTarget(Q,e,b);
}R.bind(B,L,g);
},configureItem:function(bd){bd.setRich(true);
bd.getChildControl(h).setWidth(48);
bd.getChildControl(h).setHeight(48);
bd.getChildControl(h).setScale(true);
}}});
})();

});