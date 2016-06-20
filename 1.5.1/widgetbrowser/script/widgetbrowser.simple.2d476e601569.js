qx.$$packageData['80']={"locales":{},"resources":{},"translations":{}};
qx.Part.$$notifyLoad("80", function() {
(function(){var j="qx.event.type.Event",i="qx.debug.io",h="fail",g="GET",f="qx.event.type.Data",e="load",d="abort",c="loadEnd",b="Map",a="qx.io.request.AbstractRequest",E="changePhase",D="Please use setRequestHeader() instead.",C="sent",B="qx.io.request.authentication.IAuthentication",A="error",z="loading",y="success",x="String",w="",v="opened",q="Please use getRequestHeader() instead.",r="POST",o="statusError",p="readyStateChange",m="abstract",n="unsent",k="changeResponse",l="Number",s="Content-Type",t="timeout",u="undefined";
qx.Class.define(a,{type:m,extend:qx.core.Object,construct:function(F){qx.core.Object.call(this);

if(F!==undefined){this.setUrl(F);
}this.__rM={};
var G=this._transport=this._createTransport();
this._setPhase(n);
this.__rN=qx.lang.Function.bind(this._onReadyStateChange,this);
this.__rO=qx.lang.Function.bind(this._onLoad,this);
this.__rP=qx.lang.Function.bind(this._onLoadEnd,this);
this.__rQ=qx.lang.Function.bind(this._onAbort,this);
this.__rR=qx.lang.Function.bind(this._onTimeout,this);
this.__rS=qx.lang.Function.bind(this._onError,this);
G.onreadystatechange=this.__rN;
G.onload=this.__rO;
G.onloadend=this.__rP;
G.onabort=this.__rQ;
G.ontimeout=this.__rR;
G.onerror=this.__rS;
},events:{"readyStateChange":j,"success":j,"load":j,"loadEnd":j,"abort":j,"timeout":j,"error":j,"statusError":j,"fail":j,"changeResponse":f,"changePhase":f},properties:{url:{check:x},requestHeaders:{check:b,nullable:true},timeout:{check:l,nullable:true,init:0},requestData:{check:function(H){return qx.lang.Type.isString(H)||qx.Class.isSubClassOf(H.constructor,qx.core.Object)||qx.lang.Type.isObject(H);
},nullable:true},authentication:{check:B,nullable:true}},members:{__rN:null,__rO:null,__rP:null,__rQ:null,__rR:null,__rS:null,__rT:null,__rU:null,__rV:null,__rM:null,__rW:null,_transport:null,_createTransport:function(){throw new Error("Abstract method call");
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
}this.__rU=true;
this.__rV=d;
this._transport.abort();
},_setRequestHeaders:function(){var P=this._transport,N=this._getAllRequestHeaders();

for(var O in N){P.setRequestHeader(O,N[O]);
}},_getAllRequestHeaders:function(){var Q=qx.lang.Object.merge({},this._getConfiguredRequestHeaders(),this.__rX(),this.__rW,this.__rM);
return Q;
},__rX:function(){var S=this.getAuthentication(),R={};

if(S){S.getAuthHeaders().forEach(function(T){R[T.key]=T.value;
});
return R;
}},setRequestHeader:function(U,V){this.__rM[U]=V;
},getRequestHeader:function(W){return this.__rM[W];
},removeRequestHeader:function(X){if(this.__rM[X]){delete this.__rM[X];
}},setRequestHeaders:function(Y){qx.log.Logger.deprecatedMethodWarning(arguments.callee,D);
qx.core.Assert.assertObject(Y);
this.__rW=Y;
},getRequestHeaders:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,q);
return this.__rW;
},getTransport:function(){return this._transport;
},getReadyState:function(){return this._transport.readyState;
},getPhase:function(){return this.__rV;
},getStatus:function(){return this._transport.status;
},getStatusText:function(){return this._transport.statusText;
},getResponseText:function(){return this._transport.responseText;
},getAllResponseHeaders:function(){return this._transport.getAllResponseHeaders();
},getResponseHeader:function(ba){return this._transport.getResponseHeader(ba);
},getResponseContentType:function(){return this.getResponseHeader(s);
},isDone:function(){return this.getReadyState()===4;
},getResponse:function(){return this.__rT;
},_setResponse:function(bb){var bc=bb;

if(this.__rT!==bb){this.__rT=bb;
this.fireEvent(k,qx.event.type.Data,[this.__rT,bc]);
}},_onReadyStateChange:function(){var bd=this.getReadyState();

if(qx.core.Environment.get(i)){this.debug("Fire readyState: "+bd);
}this.fireEvent(p);
if(this.__rU){return;
}
if(bd===3){this._setPhase(z);
}
if(this.isDone()){this.__rY();
}},__rY:function(){var be;

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
},_setPhase:function(bg){var bh=this.__rV;
this.__rV=bg;
this.fireDataEvent(E,bg,bh);
},_serializeData:function(bi){var bj=typeof this.getMethod!==u&&this.getMethod()==r;

if(!bi){return;
}
if(qx.lang.Type.isString(bi)){return bi;
}
if(qx.Class.isSubClassOf(bi.constructor,qx.core.Object)){return qx.util.Serializer.toUriParameter(bi);
}
if(qx.lang.Type.isObject(bi)){return qx.lang.Object.toUriParameter(bi,bj);
}},__sa:function(){var bk;
bk=this._getAllRequestHeaders();

if(bk){for(var bl in bk){this._transport.setRequestHeader(bl,bk[bl]);
}}},__sb:function(){var bm;
bm=this.__rW;

if(bm){for(var bn in bm){this._transport.setRequestHeader(bn,bm[bn]);
}}}},environment:{"qx.debug.io":false},destruct:function(){var bp=this._transport,bo=function(){};

if(this._transport){bp.onreadystatechange=bp.onload=bp.onloadend=bp.onabort=bp.ontimeout=bp.onerror=bo;
bp.dispose();
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
(function(){var q="qx.event.type.Event",p="function",o="xml",n="GET",m="null",l="XMLHttpRequest",k="Boolean",j="X-Requested-With",i="",h="application/x-www-form-urlencoded",c="Cache-Control",g="Content-Type",f="qx.debug.io",b="qx.io.request.Xhr",a="json",e="Accept",d="String";
qx.Class.define(b,{extend:qx.io.request.AbstractRequest,construct:function(r,s){if(s!==undefined){this.setMethod(s);
}qx.io.request.AbstractRequest.call(this,r);
},events:{"readyStateChange":q,"success":q,"load":q,"statusError":q},statics:{PARSER:{json:qx.lang.Json.parse,xml:qx.xml.Document.fromString}},properties:{method:{init:n},async:{check:k,init:true},accept:{check:d,nullable:true},cache:{check:function(t){return qx.lang.Type.isBoolean(t)||qx.lang.Type.isString(t);
},init:true}},members:{__sc:null,_createTransport:function(){return new qx.bom.request.Xhr();
},_getConfiguredUrl:function(){var u=this.getUrl(),v;

if(this.getMethod()===n&&this.getRequestData()){v=this._serializeData(this.getRequestData());
u=qx.util.Uri.appendParamsToUrl(u,v);
}
if(this.getCache()===false){u=qx.util.Uri.appendParamsToUrl(u,{nocache:new Date().valueOf()});
}return u;
},_getConfiguredRequestHeaders:function(){var w={},x=qx.util.Request.methodAllowsRequestBody(this.getMethod());
if(!qx.util.Request.isCrossDomain(this.getUrl())){w[j]=l;
}if(qx.lang.Type.isString(this.getCache())){w[c]=this.getCache();
}if(this.getRequestData()!==m&&x){w[g]=h;
}if(this.getAccept()){if(qx.core.Environment.get(f)){this.debug("Accepting: '"+this.getAccept()+"'");
}w[e]=this.getAccept();
}return w;
},_getMethod:function(){return this.getMethod();
},_isAsync:function(){return this.isAsync();
},_getParsedResponse:function(){var z=this._transport.responseText,y=this._getParser();

if(typeof y===p){if(z!==i){return y.call(this,z);
}}return z;
},setParser:function(A){var B=qx.io.request.Xhr;
if(typeof B.PARSER[A]===p){return this.__sc=B.PARSER[A];
}return this.__sc=A;
},_getParser:function(){var C=this.__sc,D;
if(C){return C;
}if(!this.isDone()){return;
}D=this.getResponseContentType();

if((/^application\/json/).test(D)){C=qx.io.request.Xhr.PARSER[a];
}
if((/^application\/xml/).test(D)){C=qx.io.request.Xhr.PARSER[o];
}if((/[^\/]+\/[^\+]+\+xml/).test(this.getResponseContentType())){C=qx.io.request.Xhr.PARSER[o];
}return C;
}}});
})();
(function(){var k="engine.name",j="qx.debug.io",i="",h="mshtml",g="opera",f="gecko",d="file:",c="engine.version",b="onunload",a="undefined",w="activex",v="If-None-Match",u="xhr",t="If-Modified-Since",s="If-Match",r="Microsoft.XMLHTTP",q="browser.version",p="qx.bom.request.Xhr",o="Microsoft.XMLDOM",n="If-Range",l="Content-Type",m="io.xhr";
qx.Bootstrap.define(p,{construct:function(){this.__sd=qx.Bootstrap.bind(this.__so,this);
this.__se=qx.Bootstrap.bind(this.__sn,this);
this.__rR=qx.Bootstrap.bind(this.__sr,this);
this.__sm();
if(window.attachEvent){this.__sf=qx.Bootstrap.bind(this.__su,this);
window.attachEvent(b,this.__sf);
}},statics:{UNSENT:0,OPENED:1,HEADERS_RECEIVED:2,LOADING:3,DONE:4},members:{readyState:0,responseText:i,responseXML:null,status:0,statusText:i,timeout:0,open:function(x,y,z,A,B){if(this.__ly){return;
}this.__rU=false;
this.__sg=false;
this.__sh=false;

if(typeof z==a){z=true;
}this.__si=z;
if(!this.__sv()&&this.readyState>qx.bom.request.Xhr.UNSENT){this.dispose();
this.__sm();
}this.__sk.onreadystatechange=this.__sd;

try{if(qx.core.Environment.get(j)){qx.Bootstrap.debug(qx.bom.request.Xhr,"Open native request with method: "+x+", url: "+y+", async: "+z);
}this.__sk.open(x,y,z,A,B);
}catch(C){if(!qx.util.Request.isCrossDomain(y)){throw C;
}
if(!this.__si){this.__sj=C;
}
if(this.__si){if(window.XDomainRequest){this.readyState=4;
this.__sk=new XDomainRequest();
this.__sk.onerror=qx.Bootstrap.bind(function(){this.onreadystatechange();
this.onerror();
this.onloadend();
},this);

if(qx.core.Environment.get(j)){qx.Bootstrap.debug(qx.bom.request.Xhr,"Retry open native request with method: "+x+", url: "+y+", async: "+z);
}this.__sk.open(x,y,z,A,B);
return;
}window.setTimeout(qx.Bootstrap.bind(function(){this.readyState=4;
this.onreadystatechange();
this.onerror();
this.onloadend();
},this));
}}if(qx.core.Environment.get(k)===f&&parseInt(qx.core.Environment.get(c),10)<2&&!this.__si){this.readyState=qx.bom.request.Xhr.OPENED;
this.onreadystatechange();
}},setRequestHeader:function(D,E){if(this.__ly){return;
}if(D==s||D==t||D==v||D==n){this.__sh=true;
}this.__sk.setRequestHeader(D,E);
},send:function(F){if(this.__ly){return;
}if(!this.__si&&this.__sj){throw this.__sj;
}if(qx.core.Environment.get(k)===g&&this.timeout===0){this.timeout=10000;
}if(this.timeout>0){this.__sl=window.setTimeout(this.__rR,this.timeout);
}F=typeof F==a?null:F;
try{if(qx.core.Environment.get(j)){qx.Bootstrap.debug(qx.bom.request.Xhr,"Send native request");
}this.__sk.send(F);
}catch(H){if(!this.__si){throw H;
}if(this._getProtocol()===d){this.readyState=2;
this.__sp();
var G=this;
window.setTimeout(function(){G.readyState=3;
G.__sp();
G.readyState=4;
G.__sp();
});
}}if(qx.core.Environment.get(k)===f&&!this.__si){this.__so();
}this.__sg=true;
},abort:function(){if(this.__ly){return;
}this.__rU=true;
this.__sk.abort();

if(this.__sk){this.readyState=this.__sk.readyState;
}},onreadystatechange:function(){},onload:function(){},onloadend:function(){},onerror:function(){},onabort:function(){},ontimeout:function(){},getResponseHeader:function(I){if(this.__ly){return;
}return this.__sk.getResponseHeader(I);
},getAllResponseHeaders:function(){if(this.__ly){return;
}return this.__sk.getAllResponseHeaders();
},getRequest:function(){return this.__sk;
},dispose:function(){if(this.__ly){return false;
}if(window.detachEvent){window.detachEvent(b,this.__sf);
}try{this.__sk.onreadystatechange;
}catch(K){return;
}var J=function(){};
this.__sk.onreadystatechange=J;
this.__sk.onload=J;
this.__sk.onerror=J;
this.abort();
this.__sk=null;
this.__ly=true;
return true;
},_createNativeXhr:function(){var L=qx.core.Environment.get(m);

if(L===u){return new XMLHttpRequest();
}
if(L==w){return new window.ActiveXObject(r);
}qx.log.Logger.error(this,"No XHR support available.");
},_getProtocol:function(){return window.location.protocol;
},__sk:null,__si:null,__sd:null,__se:null,__sf:null,__rR:null,__sg:null,__rU:null,__eY:null,__ly:null,__sl:null,__sj:null,__sh:null,__sm:function(){this.__sk=this._createNativeXhr();
this.__sk.onreadystatechange=this.__sd;
if(this.__sk.onabort){this.__sk.onabort=this.__se;
}this.__ly=this.__sg=this.__rU=false;
},__sn:function(){if(!this.__rU){this.abort();
}},__so:function(){var M=this.__sk,N=true;

if(qx.core.Environment.get(j)){qx.Bootstrap.debug(qx.bom.request.Xhr,"Received native readyState: "+M.readyState);
}if(this.readyState==M.readyState){return;
}this.readyState=M.readyState;
if(this.readyState===qx.bom.request.Xhr.DONE&&this.__rU&&!this.__sg){return;
}if(!this.__si&&(M.readyState==2||M.readyState==3)){return;
}this.status=0;
this.statusText=this.responseText=i;
this.responseXML=null;

if(this.readyState>qx.bom.request.Xhr.OPENED){try{this.status=M.status;
this.statusText=M.statusText;
this.responseText=M.responseText;
this.responseXML=M.responseXML;
}catch(O){N=false;
}
if(N){this.__ss();
this.__st();
}}this.__sp();
if(this.readyState==qx.bom.request.Xhr.DONE){if(M){M.onreadystatechange=function(){};
}}},__sp:function(){var P=this;
if(qx.core.Environment.get(k)==h&&qx.core.Environment.get(c)<8){if(this.__si&&!this.__sg&&this.readyState>=qx.bom.request.Xhr.LOADING){if(this.readyState==qx.bom.request.Xhr.LOADING){return ;
}
if(this.readyState==qx.bom.request.Xhr.DONE){window.setTimeout(function(){P.readyState=3;
P.onreadystatechange();
P.readyState=4;
P.onreadystatechange();
P.__sq();
});
return;
}}}this.onreadystatechange();

if(this.readyState===qx.bom.request.Xhr.DONE){this.__sq();
}},__sq:function(){window.clearTimeout(this.__sl);
if(this.__eY){this.ontimeout();
if(qx.core.Environment.get(k)===g){this.onerror();
}this.__eY=false;
}else{if(this.__rU){this.onabort();
}else{if(this._getProtocol()===d){this.responseText?this.onload():this.onerror();
}else{this.statusText?this.onload():this.onerror();
}}}this.onloadend();
},__sr:function(){var Q=this.__sk;
this.readyState=qx.bom.request.Xhr.DONE;
this.__eY=true;
Q.abort();
this.responseText=i;
this.responseXML=null;
this.__sp();
},__ss:function(){var R=this.readyState===qx.bom.request.Xhr.DONE;
if(this._getProtocol()===d&&this.status===0){this.status=200;
}if(this.status===1223){this.status=204;
}if(qx.core.Environment.get(k)===g){if(R&&this.__sh&&!this.__rU&&this.status===0){this.status=304;
}}},__st:function(){if(qx.core.Environment.get(k)==h&&(this.getResponseHeader(l)||i).match(/[^\/]+\/[^\+]+\+xml/)&&this.responseXML&&!this.responseXML.documentElement){var S=new window.ActiveXObject(o);
S.async=false;
S.validateOnParse=false;
S.loadXML(this.responseText);
this.responseXML=S;
}},__su:function(){try{if(this){this.dispose();
}}catch(e){}},__sv:function(){var name=qx.core.Environment.get(k);
var T=qx.core.Environment.get(q);
return !(name==h&&T<9||name==f&&T<3.5);
}},defer:function(){qx.core.Environment.add(j,false);
}});
})();
(function(){var j="configured",i="aborted",h="qx.event.type.Data",g="receiving",f="sending",e="completed",d="failed",c="timeout",b="changeModel",a="application/json",x="json",w="loaded",v="error",u="fail",t="queued",s="changeState",r="success",q="__sx",p="String",o="changePhase",m="_marshaler",n="qx.data.store.Json",k="changeUrl",l="_applyUrl";
qx.Class.define(n,{extend:qx.core.Object,construct:function(y,z){qx.core.Object.call(this);
this._marshaler=new qx.data.marshal.Json(z);
this._delegate=z;
this.__sw=false;

if(y!=null){this.setUrl(y);
}},events:{"loaded":h,"error":h},properties:{model:{nullable:true,event:b},state:{check:[j,t,f,g,e,i,c,d],init:j,event:s},url:{check:p,apply:l,event:k,nullable:true}},members:{_marshaler:null,_delegate:null,__sx:null,__sw:null,_applyUrl:function(A,B){if(A!=null){A=qx.util.AliasManager.getInstance().resolve(A);
A=qx.util.ResourceManager.getInstance().toUri(A);
this._createRequest(A);
}},_getRequest:function(){return this.__sx;
},_setRequest:function(C){this.__sx=C;
},_createRequest:function(D){var E=new qx.io.request.Xhr(D);
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
},_onSuccess:function(M){var O=M.getTarget(),P=O.getResponse();
var N=this._delegate;

if(N&&qx.lang.Type.isFunction(N.manipulateData)){P=this._delegate.manipulateData(P);
}this._marshaler.toClass(P,true);
var Q=this.getModel();
this.setModel(this._marshaler.toModel(P));
if(Q&&Q.dispose){Q.dispose();
}this.fireDataEvent(w,this.getModel());
},reload:function(){var R=this.getUrl();

if(R!=null){this._createRequest(R);
}}},destruct:function(){this._disposeObjects(q);
this._disposeSingletonObjects(m);
this._delegate=null;
}});
})();
(function(){var a="qx.data.marshal.IMarshaler";
qx.Interface.define(a,{members:{toClass:function(b,c){},toModel:function(d){}}});
})();
(function(){var u='"',t="{",s="[",r=",",q="",p="get",o="}",n="]",m='":',l="&",d="null",k='\\t',g='\\"',c='\\n',b='\\b',f="=",e="qx.util.Serializer",h='\\r',a='\\\\',j='\\f';
qx.Class.define(e,{statics:{toUriParameter:function(v,w,x){var B=q;
var C=qx.util.PropertyUtil.getProperties(v.constructor);

for(var name in C){var y=v[p+qx.lang.String.firstUp(name)]();
if(qx.lang.Type.isArray(y)){var A=qx.data&&qx.data.IListData&&qx.Class.hasInterface(y&&y.constructor,qx.data.IListData);

for(var i=0;i<y.length;i++){var z=A?y.getItem(i):y[i];
B+=this.__sy(name,z,w);
}}else if(qx.lang.Type.isDate(y)&&x!=null){B+=this.__sy(name,x.format(y),w);
}else{B+=this.__sy(name,y,w);
}}return B.substring(0,B.length-1);
},__sy:function(name,D,E){if(D instanceof qx.core.Object&&E!=null){var F=encodeURIComponent(E(D));

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
(function(){var j="qx.data.model.",h="",g="Array",f="_validate",e='"',d="change",c="qx.data.marshal.Json",b="set",a="_applyEventPropagation";
qx.Class.define(c,{extend:qx.core.Object,implement:[qx.data.marshal.IMarshaler],construct:function(k){qx.core.Object.call(this);
this.__sz=k;
},statics:{$$instance:null,createModel:function(l,m){if(this.$$instance===null){this.$$instance=new qx.data.marshal.Json();
}this.$$instance.toClass(l,m);
return this.$$instance.toModel(l);
}},members:{__sz:null,__sA:function(n){return qx.Bootstrap.getKeys(n).sort().join(e);
},toClass:function(o,p){if(!qx.lang.Type.isObject(o)||!!o.$$isString||o instanceof qx.core.Object){if(o instanceof Array||qx.Bootstrap.getClass(o)==g){for(var i=0;i<o.length;i++){this.toClass(o[i],p);
}}return ;
}var r=this.__sA(o);
for(var s in o){this.toClass(o[s],p);
}if(qx.Class.isDefined(j+r)){return;
}if(this.__sz&&this.__sz.getModelClass&&this.__sz.getModelClass(r)!=null){return;
}var y={};
var x={__sB:this.__sB};

for(var s in o){s=s.replace(/-/g,h);
y[s]={};
y[s].nullable=true;
y[s].event=d+qx.lang.String.firstUp(s);
if(p){y[s].apply=a;
}if(this.__sz&&this.__sz.getValidationRule){var u=this.__sz.getValidationRule(r,s);

if(u){y[s].validate=f+s;
x[f+s]=u;
}}}if(this.__sz&&this.__sz.getModelSuperClass){var w=this.__sz.getModelSuperClass(r)||qx.core.Object;
}else{var w=qx.core.Object;
}var t=[];

if(this.__sz&&this.__sz.getModelMixins){var v=this.__sz.getModelMixins(r);
if(!qx.lang.Type.isArray(v)){if(v!=null){t=[v];
}}}if(p){t.push(qx.data.marshal.MEventBubbling);
}var q={extend:w,include:t,properties:y,members:x,destruct:this.__sC};
qx.Class.define(j+r,q);
},__sC:function(){var z=qx.util.PropertyUtil.getAllProperties(this.constructor);

for(var A in z){this.__sB(this.get(z[A].name));
}},__sB:function(B){if(!(B instanceof qx.core.Object)){return ;
}if(B.isDisposed()){return;
}B.dispose();
},__sD:function(C){var D;
if(this.__sz&&this.__sz.getModelClass){D=this.__sz.getModelClass(C);
}
if(D!=null){return (new D());
}else{var E=qx.Class.getByName(j+C);
return (new E());
}},toModel:function(F){var J=qx.lang.Type.isObject(F);
var G=F instanceof Array||qx.Bootstrap.getClass(F)==g;

if((!J&&!G)||!!F.$$isString||F instanceof qx.core.Object){return F;
}else if(G){var L=new qx.data.Array();
L.setAutoDisposeItems(true);

for(var i=0;i<F.length;i++){L.push(this.toModel(F[i]));
}return L;
}else if(J){var H=this.__sA(F);
var M=this.__sD(H);
for(var K in F){var I=K.replace(/-/g,h);
if((false)&&false){if(K!=I){this.warn("The model contained an illegal name: '"+K+"'. Replaced it with '"+I+"'.");
}}M[b+qx.lang.String.firstUp(I)](this.toModel(F[K]));
}return M;
}throw new Error("Unsupported type!");
}},destruct:function(){this.__sz=null;
}});
})();

});