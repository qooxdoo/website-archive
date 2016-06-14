qx.$$packageData['1024']={"locales":{},"resources":{"qxc/application/twitterdemo/twitter_logo_outline.png":[300,78,"png","qxc.application.twitterdemo"]},"translations":{}};
qx.Part.$$notifyLoad("1024", function() {
(function(){var j="qx.event.type.Event",i="qx.debug.io",h="fail",g="GET",f="qx.event.type.Data",e="load",d="abort",c="loadEnd",b="Map",a="qx.io.request.AbstractRequest",E="changePhase",D="Please use setRequestHeader() instead.",C="sent",B="qx.io.request.authentication.IAuthentication",A="error",z="loading",y="success",x="String",w="",v="opened",q="Please use getRequestHeader() instead.",r="POST",o="statusError",p="readyStateChange",m="abstract",n="unsent",k="changeResponse",l="Number",s="Content-Type",t="timeout",u="undefined";
qx.Class.define(a,{type:m,extend:qx.core.Object,construct:function(F){qx.core.Object.call(this);

if(F!==undefined){this.setUrl(F);
}this.__nD={};
var G=this._transport=this._createTransport();
this._setPhase(n);
this.__nE=qx.lang.Function.bind(this._onReadyStateChange,this);
this.__nF=qx.lang.Function.bind(this._onLoad,this);
this.__nG=qx.lang.Function.bind(this._onLoadEnd,this);
this.__nH=qx.lang.Function.bind(this._onAbort,this);
this.__ni=qx.lang.Function.bind(this._onTimeout,this);
this.__nI=qx.lang.Function.bind(this._onError,this);
G.onreadystatechange=this.__nE;
G.onload=this.__nF;
G.onloadend=this.__nG;
G.onabort=this.__nH;
G.ontimeout=this.__ni;
G.onerror=this.__nI;
},events:{"readyStateChange":j,"success":j,"load":j,"loadEnd":j,"abort":j,"timeout":j,"error":j,"statusError":j,"fail":j,"changeResponse":f,"changePhase":f},properties:{url:{check:x},requestHeaders:{check:b,nullable:true},timeout:{check:l,nullable:true,init:0},requestData:{check:function(H){return qx.lang.Type.isString(H)||qx.Class.isSubClassOf(H.constructor,qx.core.Object)||qx.lang.Type.isObject(H);
},nullable:true},authentication:{check:B,nullable:true}},members:{__nE:null,__nF:null,__nG:null,__nH:null,__ni:null,__nI:null,__nJ:null,__nl:null,__nK:null,__nD:null,__nL:null,_transport:null,_createTransport:function(){throw new Error("Abstract method call");
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
}this.__nl=true;
this.__nK=d;
this._transport.abort();
},_setRequestHeaders:function(){var P=this._transport,N=this._getAllRequestHeaders();

for(var O in N){P.setRequestHeader(O,N[O]);
}},_getAllRequestHeaders:function(){var Q=qx.lang.Object.merge({},this._getConfiguredRequestHeaders(),this.__nM(),this.__nL,this.__nD);
return Q;
},__nM:function(){var S=this.getAuthentication(),R={};

if(S){S.getAuthHeaders().forEach(function(T){R[T.key]=T.value;
});
return R;
}},setRequestHeader:function(U,V){this.__nD[U]=V;
},getRequestHeader:function(W){return this.__nD[W];
},removeRequestHeader:function(X){if(this.__nD[X]){delete this.__nD[X];
}},setRequestHeaders:function(Y){qx.log.Logger.deprecatedMethodWarning(arguments.callee,D);
qx.core.Assert.assertObject(Y);
this.__nL=Y;
},getRequestHeaders:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,q);
return this.__nL;
},getTransport:function(){return this._transport;
},getReadyState:function(){return this._transport.readyState;
},getPhase:function(){return this.__nK;
},getStatus:function(){return this._transport.status;
},getStatusText:function(){return this._transport.statusText;
},getResponseText:function(){return this._transport.responseText;
},getAllResponseHeaders:function(){return this._transport.getAllResponseHeaders();
},getResponseHeader:function(ba){return this._transport.getResponseHeader(ba);
},getResponseContentType:function(){return this.getResponseHeader(s);
},isDone:function(){return this.getReadyState()===4;
},getResponse:function(){return this.__nJ;
},_setResponse:function(bb){var bc=bb;

if(this.__nJ!==bb){this.__nJ=bb;
this.fireEvent(k,qx.event.type.Data,[this.__nJ,bc]);
}},_onReadyStateChange:function(){var bd=this.getReadyState();

if(qx.core.Environment.get(i)){this.debug("Fire readyState: "+bd);
}this.fireEvent(p);
if(this.__nl){return;
}
if(bd===3){this._setPhase(z);
}
if(this.isDone()){this.__nN();
}},__nN:function(){var be;

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
},_setPhase:function(bg){var bh=this.__nK;
this.__nK=bg;
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
(function(){var j="configured",i="aborted",h="qx.event.type.Data",g="receiving",f="sending",e="completed",d="failed",c="timeout",b="changeModel",a="application/json",x="json",w="loaded",v="error",u="fail",t="queued",s="changeState",r="success",q="String",p="__qY",o="changePhase",m="_marshaler",n="qx.data.store.Json",k="changeUrl",l="_applyUrl";
qx.Class.define(n,{extend:qx.core.Object,construct:function(y,z){qx.core.Object.call(this);
this._marshaler=new qx.data.marshal.Json(z);
this._delegate=z;
this.__qX=false;

if(y!=null){this.setUrl(y);
}},events:{"loaded":h,"error":h},properties:{model:{nullable:true,event:b},state:{check:[j,t,f,g,e,i,c,d],init:j,event:s},url:{check:q,apply:l,event:k,nullable:true}},members:{_marshaler:null,_delegate:null,__qY:null,__qX:null,_applyUrl:function(A,B){if(A!=null){A=qx.util.AliasManager.getInstance().resolve(A);
A=qx.util.ResourceManager.getInstance().toUri(A);
this._createRequest(A);
}},_getRequest:function(){return this.__qY;
},_setRequest:function(C){this.__qY=C;
},_createRequest:function(D){if(this.__qY){this.__qY.dispose();
this.__qY=null;
}var E=new qx.io.request.Xhr(D);
this._setRequest(E);
E.setAccept(a);
E.setParser(x);
E.addListener(r,this._onSuccess,this);
var F=this._delegate;

if(F&&qx.lang.Type.isFunction(F.configureRequest)){this._delegate.configureRequest(E);
}E.addListener(o,this._onChangePhase,this);
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
if(this.__qY){this.__qY.dispose();
this.__qY=null;
}},reload:function(){var R=this.getUrl();

if(R!=null){this._createRequest(R);
}}},destruct:function(){if(this.__qY!=null){this._disposeObjects(p);
}this._disposeSingletonObjects(m);
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
},init:true}},members:{__ow:null,_createTransport:function(){return new qx.bom.request.Xhr();
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
if(typeof B.PARSER[A]===o){return this.__ow=B.PARSER[A];
}return this.__ow=A;
},_getParser:function(){var C=this.__ow,D;
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
(function(){var k="qx.debug.io",j="engine.name",i="mshtml",h="",g="engine.version",f="head",e="script",d="opera",c="Unknown response headers",b="unknown",a="qx.bom.request.Script";
qx.Bootstrap.define(a,{construct:function(){this.__no();
this.__ng=qx.Bootstrap.bind(this._onNativeLoad,this);
this.__nh=qx.Bootstrap.bind(this._onNativeError,this);
this.__ni=qx.Bootstrap.bind(this._onTimeout,this);
this.__nj=document.head||document.getElementsByTagName(f)[0]||document.documentElement;
this.timeout=this.__ns()?0:15000;
},members:{readyState:null,status:null,statusText:null,timeout:null,__nk:null,open:function(l,m){if(this.__mL){return;
}this.__no();
this.__nl=null;
this.__nm=m;

if(qx.core.Environment.get(k)){qx.Bootstrap.debug(qx.bom.request.Script,"Open native request with "+"url: "+m);
}this.__np(1);
},setRequestHeader:function(n,o){if(this.__mL){return;
}var p={};

if(this.readyState!==1){throw new Error("Invalid state");
}p[n]=o;
this.__nm=qx.util.Uri.appendParamsToUrl(this.__nm,p);
},send:function(){if(this.__mL){return;
}var s=this.__nt(),q=this.__nj,r=this;

if(this.timeout>0){this.__ht=window.setTimeout(this.__ni,this.timeout);
}
if(qx.core.Environment.get(k)){qx.Bootstrap.debug(qx.bom.request.Script,"Send native request");
}q.insertBefore(s,q.firstChild);
window.setTimeout(function(){r.__np(2);
r.__np(3);
});
},abort:function(){if(this.__mL){return;
}this.__nl=true;
this.__nu();
this.onabort();
},onreadystatechange:function(){},onload:function(){},onloadend:function(){},onerror:function(){},onabort:function(){},ontimeout:function(){},getResponseHeader:function(t){if(this.__mL){return;
}return b;
},getAllResponseHeaders:function(){if(this.__mL){return;
}return c;
},setDetermineSuccess:function(u){qx.core.Assert.assertFunction(u);
this.__nk=u;
},dispose:function(){var v=this.__nn;

if(!this.__mL){if(v){v.onload=v.onreadystatechange=null;
this.__nu();
}
if(this.__ht){window.clearTimeout(this.__ht);
}this.__mL=true;
}},_getUrl:function(){return this.__nm;
},_getScriptElement:function(){return this.__nn;
},_onTimeout:function(){this.__nr();

if(!this.__ns()){this.onerror();
}this.ontimeout();

if(!this.__ns()){this.onloadend();
}},_onNativeLoad:function(){var y=this.__nn,w=this.__nk,x=this;
if(this.__nl){return;
}if(qx.core.Environment.get(j)===i&&qx.core.Environment.get(g)<9){if(!(/loaded|complete/).test(y.readyState)){return;
}else{if(qx.core.Environment.get(k)){qx.Bootstrap.debug(qx.bom.request.Script,"Received native readyState: loaded");
}}}
if(qx.core.Environment.get(k)){qx.Bootstrap.debug(qx.bom.request.Script,"Received native load");
}if(w){if(!this.status){this.status=w()?200:500;
}}
if(this.status===500){if(qx.core.Environment.get(k)){qx.Bootstrap.debug(qx.bom.request.Script,"Detected error");
}}
if(this.__ht){window.clearTimeout(this.__ht);
}window.setTimeout(function(){x.__nq();
x.__np(4);
x.onload();
x.onloadend();
});
},_onNativeError:function(){this.__nr();
this.onerror();
this.onloadend();
},__nn:null,__nj:null,__nm:h,__ng:null,__nh:null,__ni:null,__ht:null,__nl:null,__mL:null,__no:function(){this.readyState=0;
this.status=0;
this.statusText=h;
},__np:function(z){this.readyState=z;
this.onreadystatechange();
},__nq:function(){this.__nu();
this.readyState=4;
if(!this.status){this.status=200;
}this.statusText=h+this.status;
},__nr:function(){this.__nu();
this.readyState=4;
this.status=0;
this.statusText=null;
},__ns:function(){var B=qx.core.Environment.get(j)===i&&qx.core.Environment.get(g)<9;
var A=qx.core.Environment.get(j)===d;
return !(B||A);
},__nt:function(){var C=this.__nn=document.createElement(e);
C.src=this.__nm;
C.onerror=this.__nh;
C.onload=this.__ng;
if(qx.core.Environment.get(j)===i&&qx.core.Environment.get(g)<9){C.onreadystatechange=this.__ng;
}return C;
},__nu:function(){var D=this.__nn;

if(D&&D.parentNode){this.__nj.removeChild(D);
}}},defer:function(){qx.core.Environment.add(k,false);
}});
})();
(function(){var i="qx.debug.io",h="qx.bom.request.Jsonp",g="callback",f="open",e="dispose",d="",c="_onNativeLoad",b="].callback",a="qx.bom.request.Jsonp[";
qx.Bootstrap.define(h,{extend:qx.bom.request.Script,construct:function(){qx.bom.request.Script.apply(this);
this.__ol();
},members:{responseJson:null,__cq:null,__of:null,__og:null,__oh:null,__oi:null,__mL:null,open:function(j,k){if(this.__mL){return;
}var l={},n,m,o=this;
this.responseJson=null;
this.__oh=false;
n=this.__of||g;
m=this.__og||a+this.__cq+b;
if(!this.__og){this.constructor[this.__cq]=this;
}else{if(!window[this.__og]){this.__oi=true;
window[this.__og]=function(p){o.callback(p);
};
}else{if(qx.core.Environment.get(i)){qx.log.Logger.debug(qx.bom.request.Jsonp,"Callback "+this.__og+" already exists");
}}}
if(qx.core.Environment.get(i)){qx.Bootstrap.debug(qx.bom.request.Jsonp,"Expecting JavaScript response to call: "+m);
}l[n]=m;
k=qx.util.Uri.appendParamsToUrl(k,l);
this.__ok(f,[j,k]);
},callback:function(q){if(this.__mL){return;
}this.__oh=true;
this.responseJson=q;
this.constructor[this.__cq]=undefined;
this.__oj();
},setCallbackParam:function(r){this.__of=r;
},setCallbackName:function(name){this.__og=name;
},dispose:function(){this.__oj();
this.__ok(e);
},_onNativeLoad:function(){this.status=this.__oh?200:500;
this.__ok(c);
},__oj:function(){if(this.__oi&&window[this.__og]){window[this.__og]=undefined;
this.__oi=false;
}},__ok:function(s,t){qx.bom.request.Script.prototype[s].apply(this,t||[]);
},__ol:function(){this.__cq=(new Date().valueOf())+(d+Math.random()).substring(2,5);
}}});
})();
(function(){var a="showcase.page.databinding.Content";
qx.Class.define(a,{extend:showcase.AbstractContent,construct:function(b){showcase.AbstractContent.call(this,b);
this.setView(new qxc.application.twitterdemo.Demo());
}});
})();
(function(){var k="engine.name",j="qx.debug.io",i="",h="undefined",g="mshtml",f="opera",d="gecko",c="file:",b="engine.version",a="onunload",w="activex",v="If-None-Match",u="xhr",t="If-Modified-Since",s="If-Match",r="Microsoft.XMLHTTP",q="browser.version",p="qx.bom.request.Xhr",o="Microsoft.XMLDOM",n="If-Range",l="Content-Type",m="io.xhr";
qx.Bootstrap.define(p,{construct:function(){this.__qD=qx.Bootstrap.bind(this.__qO,this);
this.__qE=qx.Bootstrap.bind(this.__qN,this);
this.__ni=qx.Bootstrap.bind(this.__qR,this);
this.__qM();
if(window.attachEvent){this.__qF=qx.Bootstrap.bind(this.__qU,this);
window.attachEvent(a,this.__qF);
}},statics:{UNSENT:0,OPENED:1,HEADERS_RECEIVED:2,LOADING:3,DONE:4},members:{readyState:0,responseText:i,responseXML:null,status:0,statusText:i,timeout:0,open:function(x,y,z,A,B){this.__qW();
if(typeof x===h||typeof y===h){throw new Error("Not enough arguments");
}this.__nl=false;
this.__qG=false;
this.__qH=false;
this.__nm=y;

if(typeof z==h){z=true;
}this.__qI=z;
if(!this.__qV()&&this.readyState>qx.bom.request.Xhr.UNSENT){this.dispose();
this.__qM();
}this.__qK.onreadystatechange=this.__qD;

try{if(qx.core.Environment.get(j)){qx.Bootstrap.debug(qx.bom.request.Xhr,"Open native request with method: "+x+", url: "+y+", async: "+z);
}this.__qK.open(x,y,z,A,B);
}catch(C){if(!qx.util.Request.isCrossDomain(y)){throw C;
}
if(!this.__qI){this.__qJ=C;
}
if(this.__qI){if(window.XDomainRequest){this.readyState=4;
this.__qK=new XDomainRequest();
this.__qK.onerror=qx.Bootstrap.bind(function(){this.onreadystatechange();
this.onerror();
this.onloadend();
},this);

if(qx.core.Environment.get(j)){qx.Bootstrap.debug(qx.bom.request.Xhr,"Retry open native request with method: "+x+", url: "+y+", async: "+z);
}this.__qK.open(x,y,z,A,B);
return;
}window.setTimeout(qx.Bootstrap.bind(function(){if(this.__mL){return;
}this.readyState=4;
this.onreadystatechange();
this.onerror();
this.onloadend();
},this));
}}if(qx.core.Environment.get(k)===d&&parseInt(qx.core.Environment.get(b),10)<2&&!this.__qI){this.readyState=qx.bom.request.Xhr.OPENED;
this.onreadystatechange();
}},setRequestHeader:function(D,E){this.__qW();
if(D==s||D==t||D==v||D==n){this.__qH=true;
}this.__qK.setRequestHeader(D,E);
},send:function(F){this.__qW();
if(!this.__qI&&this.__qJ){throw this.__qJ;
}if(qx.core.Environment.get(k)===f&&this.timeout===0){this.timeout=10000;
}if(this.timeout>0){this.__qL=window.setTimeout(this.__ni,this.timeout);
}F=typeof F==h?null:F;
try{if(qx.core.Environment.get(j)){qx.Bootstrap.debug(qx.bom.request.Xhr,"Send native request");
}this.__qK.send(F);
}catch(H){if(!this.__qI){throw H;
}if(this._getProtocol()===c){this.readyState=2;
this.__np();
var G=this;
window.setTimeout(function(){if(G.__mL){return;
}G.readyState=3;
G.__np();
G.readyState=4;
G.__np();
});
}}if(qx.core.Environment.get(k)===d&&!this.__qI){this.__qO();
}this.__qG=true;
},abort:function(){this.__qW();
this.__nl=true;
this.__qK.abort();

if(this.__qK){this.readyState=this.__qK.readyState;
}},onreadystatechange:function(){},onload:function(){},onloadend:function(){},onerror:function(){},onabort:function(){},ontimeout:function(){},getResponseHeader:function(I){this.__qW();
return this.__qK.getResponseHeader(I);
},getAllResponseHeaders:function(){this.__qW();
return this.__qK.getAllResponseHeaders();
},getRequest:function(){return this.__qK;
},dispose:function(){if(this.__mL){return false;
}window.clearTimeout(this.__qL);
if(window.detachEvent){window.detachEvent(a,this.__qF);
}try{this.__qK.onreadystatechange;
}catch(K){return;
}var J=function(){};
this.__qK.onreadystatechange=J;
this.__qK.onload=J;
this.__qK.onerror=J;
this.abort();
this.__qK=null;
this.__mL=true;
return true;
},_createNativeXhr:function(){var L=qx.core.Environment.get(m);

if(L===u){return new XMLHttpRequest();
}
if(L==w){return new window.ActiveXObject(r);
}qx.log.Logger.error(this,"No XHR support available.");
},_getProtocol:function(){var M=this.__nm;
var N=/^(\w+:)\/\//;
if(M!==null&&M.match){var O=M.match(N);

if(O&&O[1]){return O[1];
}}return window.location.protocol;
},__qK:null,__qI:null,__qD:null,__qE:null,__qF:null,__ni:null,__qG:null,__nm:null,__nl:null,__hv:null,__mL:null,__qL:null,__qJ:null,__qH:null,__qM:function(){this.__qK=this._createNativeXhr();
this.__qK.onreadystatechange=this.__qD;
if(this.__qK.onabort){this.__qK.onabort=this.__qE;
}this.__mL=this.__qG=this.__nl=false;
},__qN:function(){if(!this.__nl){this.abort();
}},__qO:function(){var P=this.__qK,Q=true;

if(qx.core.Environment.get(j)){qx.Bootstrap.debug(qx.bom.request.Xhr,"Received native readyState: "+P.readyState);
}if(this.readyState==P.readyState){return;
}this.readyState=P.readyState;
if(this.readyState===qx.bom.request.Xhr.DONE&&this.__nl&&!this.__qG){return;
}if(!this.__qI&&(P.readyState==2||P.readyState==3)){return;
}this.status=0;
this.statusText=this.responseText=i;
this.responseXML=null;

if(this.readyState>=qx.bom.request.Xhr.HEADERS_RECEIVED){try{this.status=P.status;
this.statusText=P.statusText;
this.responseText=P.responseText;
this.responseXML=P.responseXML;
}catch(R){Q=false;
}
if(Q){this.__qS();
this.__qT();
}}this.__np();
if(this.readyState==qx.bom.request.Xhr.DONE){if(P){P.onreadystatechange=function(){};
}}},__np:function(){var S=this;
if(this.readyState===qx.bom.request.Xhr.DONE){window.clearTimeout(this.__qL);
}if(qx.core.Environment.get(k)==g&&qx.core.Environment.get(b)<8){if(this.__qI&&!this.__qG&&this.readyState>=qx.bom.request.Xhr.LOADING){if(this.readyState==qx.bom.request.Xhr.LOADING){return ;
}
if(this.readyState==qx.bom.request.Xhr.DONE){window.setTimeout(function(){if(S.__mL){return;
}S.readyState=3;
S.onreadystatechange();
S.readyState=4;
S.onreadystatechange();
S.__qP();
});
return;
}}}this.onreadystatechange();

if(this.readyState===qx.bom.request.Xhr.DONE){this.__qP();
}},__qP:function(){if(this.__hv){this.ontimeout();
if(qx.core.Environment.get(k)===f){this.onerror();
}this.__hv=false;
}else{if(this.__nl){this.onabort();
}else{this.__qQ()?this.onerror():this.onload();
}}this.onloadend();
},__qQ:function(){var T;
if(this._getProtocol()===c){T=!this.responseText;
}else{T=!this.statusText;
}return T;
},__qR:function(){var U=this.__qK;
this.readyState=qx.bom.request.Xhr.DONE;
this.__hv=true;
U.abort();
this.responseText=i;
this.responseXML=null;
this.__np();
},__qS:function(){var V=this.readyState===qx.bom.request.Xhr.DONE;
if(this._getProtocol()===c&&this.status===0&&V){if(!this.__qQ()){this.status=200;
}}if(this.status===1223){this.status=204;
}if(qx.core.Environment.get(k)===f){if(V&&this.__qH&&!this.__nl&&this.status===0){this.status=304;
}}},__qT:function(){if(qx.core.Environment.get(k)==g&&(this.getResponseHeader(l)||i).match(/[^\/]+\/[^\+]+\+xml/)&&this.responseXML&&!this.responseXML.documentElement){var W=new window.ActiveXObject(o);
W.async=false;
W.validateOnParse=false;
W.loadXML(this.responseText);
this.responseXML=W;
}},__qU:function(){try{if(this){this.dispose();
}}catch(e){}},__qV:function(){var name=qx.core.Environment.get(k);
var X=qx.core.Environment.get(q);
return !(name==g&&X<9||name==d&&X<3.5);
},__qW:function(){if(this.__mL){throw new Error("Already disposed");
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
var C=qx.util.PropertyUtil.getProperties(v.constructor);

for(var name in C){var y=v[p+qx.lang.String.firstUp(name)]();
if(qx.lang.Type.isArray(y)){var A=qx.data&&qx.data.IListData&&qx.Class.hasInterface(y&&y.constructor,qx.data.IListData);

for(var i=0;i<y.length;i++){var z=A?y.getItem(i):y[i];
B+=this.__du(name,z,w);
}}else if(qx.lang.Type.isDate(y)&&x!=null){B+=this.__du(name,x.format(y),w);
}else{B+=this.__du(name,y,w);
}}return B.substring(0,B.length-1);
},__du:function(name,D,E){if(D instanceof qx.core.Object&&E!=null){var F=encodeURIComponent(E(D));

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
var V=qx.util.PropertyUtil.getProperties(O.constructor);

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