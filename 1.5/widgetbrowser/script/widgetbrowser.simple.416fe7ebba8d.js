qx.$$packageData['160']={"locales":{},"resources":{"qx/static/blank.gif":[1,1,"gif","qx"]},"translations":{}};
qx.Part.$$notifyLoad("160", function() {
(function(){var o="failed",n="sending",m="completed",k="receiving",j="aborted",h="timeout",g="qx.event.type.Event",f="Connection dropped",d="qx.io.remote.Response",c="=",bp="configured",bo="&",bn="Unknown status code. ",bm="qx.io.remote.transport.XmlHttp",bl="qx.io.remote.transport.Abstract",bk="Request-URL too large",bj="MSHTML-specific HTTP status code",bi="Not available",bh="Precondition failed",bg="Server error",v="Moved temporarily",w="qx.io.remote.Exchange",t="Possibly due to a cross-domain request?",u="Bad gateway",r="Gone",s="See other",p="Partial content",q="Server timeout",B="qx.io.remote.transport.Script",C="HTTP version not supported",L="Unauthorized",I="Possibly due to application URL using 'file:' protocol?",T="Multiple choices",O="Payment required",bc="Not implemented",Y="Proxy authentication required",E="Length required",bf="_applyState",be="changeState",bd="Not modified",D="qx.io.remote.Request",G="Connection closed by server",H="Moved permanently",K="_applyImplementation",M="",P="Method not allowed",V="Forbidden",bb="Use proxy",x="Ok",y="Conflict",F="Not found",S="Not acceptable",R="Request time-out",Q="Bad request",X="No content",W="file:",N="qx.io.remote.transport.Iframe",U="Request entity too large",a="Unknown status code",ba="Unsupported media type",z="Gateway time-out",A="created",J="Out of resources",b="undefined";
qx.Class.define(w,{extend:qx.core.Object,construct:function(bq){qx.core.Object.call(this);
this.setRequest(bq);
bq.setTransport(this);
},events:{"sending":g,"receiving":g,"completed":d,"aborted":g,"failed":d,"timeout":d},statics:{typesOrder:[bm,N,B],typesReady:false,typesAvailable:{},typesSupported:{},registerType:function(br,bs){qx.io.remote.Exchange.typesAvailable[bs]=br;
},initTypes:function(){if(qx.io.remote.Exchange.typesReady){return;
}
for(var bu in qx.io.remote.Exchange.typesAvailable){var bt=qx.io.remote.Exchange.typesAvailable[bu];

if(bt.isSupported()){qx.io.remote.Exchange.typesSupported[bu]=bt;
}}qx.io.remote.Exchange.typesReady=true;

if(qx.lang.Object.isEmpty(qx.io.remote.Exchange.typesSupported)){throw new Error("No supported transport types were found!");
}},canHandle:function(bv,bw,bx){if(!qx.lang.Array.contains(bv.handles.responseTypes,bx)){return false;
}
for(var by in bw){if(!bv.handles[by]){return false;
}}return true;
},_nativeMap:{0:A,1:bp,2:n,3:k,4:m},wasSuccessful:function(bz,bA,bB){if(bB){switch(bz){case null:case 0:return true;
case -1:return bA<4;
default:return typeof bz===b;
}}else{switch(bz){case -1:{};
return bA<4;
case 200:case 304:return true;
case 201:case 202:case 203:case 204:case 205:return true;
case 206:{};
return bA!==4;
case 300:case 301:case 302:case 303:case 305:case 400:case 401:case 402:case 403:case 404:case 405:case 406:case 407:case 408:case 409:case 410:case 411:case 412:case 413:case 414:case 415:case 500:case 501:case 502:case 503:case 504:case 505:{};
return false;
case 12002:case 12007:case 12029:case 12030:case 12031:case 12152:case 13030:{};
return false;
default:if(bz>206&&bz<300){return true;
}qx.log.Logger.debug(this,"Unknown status code: "+bz+" ("+bA+")");
return false;
}}},statusCodeToString:function(bC){switch(bC){case -1:return bi;
case 0:var bD=window.location.href;
if(qx.lang.String.startsWith(bD.toLowerCase(),W)){return (bn+I);
}else{return (bn+t);
}break;
case 200:return x;
case 304:return bd;
case 206:return p;
case 204:return X;
case 300:return T;
case 301:return H;
case 302:return v;
case 303:return s;
case 305:return bb;
case 400:return Q;
case 401:return L;
case 402:return O;
case 403:return V;
case 404:return F;
case 405:return P;
case 406:return S;
case 407:return Y;
case 408:return R;
case 409:return y;
case 410:return r;
case 411:return E;
case 412:return bh;
case 413:return U;
case 414:return bk;
case 415:return ba;
case 500:return bg;
case 501:return bc;
case 502:return u;
case 503:return J;
case 504:return z;
case 505:return C;
case 12002:return q;
case 12029:return f;
case 12030:return f;
case 12031:return f;
case 12152:return G;
case 13030:return bj;
default:return a;
}}},properties:{request:{check:D,nullable:true},implementation:{check:bl,nullable:true,apply:K},state:{check:[bp,n,k,m,j,h,o],init:bp,event:be,apply:bf}},members:{send:function(){var bH=this.getRequest();

if(!bH){return this.error("Please attach a request object first");
}qx.io.remote.Exchange.initTypes();
var bF=qx.io.remote.Exchange.typesOrder;
var bE=qx.io.remote.Exchange.typesSupported;
var bJ=bH.getResponseType();
var bK={};

if(bH.getAsynchronous()){bK.asynchronous=true;
}else{bK.synchronous=true;
}
if(bH.getCrossDomain()){bK.crossDomain=true;
}
if(bH.getFileUpload()){bK.fileUpload=true;
}for(var bI in bH.getFormFields()){bK.programaticFormFields=true;
break;
}var bL,bG;

for(var i=0,l=bF.length;i<l;i++){bL=bE[bF[i]];

if(bL){if(!qx.io.remote.Exchange.canHandle(bL,bK,bJ)){continue;
}
try{bG=new bL;
this.setImplementation(bG);
bG.setUseBasicHttpAuth(bH.getUseBasicHttpAuth());
bG.send();
return true;
}catch(bM){this.error("Request handler throws error");
this.error(bM);
return;
}}}this.error("There is no transport implementation available to handle this request: "+bH);
},abort:function(){var bN=this.getImplementation();

if(bN){bN.abort();
}else{this.setState(j);
}},timeout:function(){var bQ=this.getImplementation();

if(bQ){var bP=M;

for(var bO in bQ.getParameters()){bP+=bo+bO+c+bQ.getParameters()[bO];
}this.warn("Timeout: implementation "+bQ.toHashCode()+", "+bQ.getUrl()+" ["+bQ.getMethod()+"], "+bP);
bQ.timeout();
}else{this.warn("Timeout: forcing state to timeout");
this.setState(h);
}this.__mG();
},__mG:function(){var bR=this.getRequest();

if(bR){bR.setTimeout(0);
}},_onsending:function(e){this.setState(n);
},_onreceiving:function(e){this.setState(k);
},_oncompleted:function(e){this.setState(m);
},_onabort:function(e){this.setState(j);
},_onfailed:function(e){this.setState(o);
},_ontimeout:function(e){this.setState(h);
},_applyImplementation:function(bS,bT){if(bT){bT.removeListener(n,this._onsending,this);
bT.removeListener(k,this._onreceiving,this);
bT.removeListener(m,this._oncompleted,this);
bT.removeListener(j,this._onabort,this);
bT.removeListener(h,this._ontimeout,this);
bT.removeListener(o,this._onfailed,this);
}
if(bS){var bV=this.getRequest();
bS.setUrl(bV.getUrl());
bS.setMethod(bV.getMethod());
bS.setAsynchronous(bV.getAsynchronous());
bS.setUsername(bV.getUsername());
bS.setPassword(bV.getPassword());
bS.setParameters(bV.getParameters(false));
bS.setFormFields(bV.getFormFields());
bS.setRequestHeaders(bV.getRequestHeaders());
if(bS instanceof qx.io.remote.transport.XmlHttp){bS.setParseJson(bV.getParseJson());
}var bY=bV.getData();

if(bY===null){var ca=bV.getParameters(true);
var bX=[];

for(var bU in ca){var bW=ca[bU];

if(bW instanceof Array){for(var i=0;i<bW.length;i++){bX.push(encodeURIComponent(bU)+c+encodeURIComponent(bW[i]));
}}else{bX.push(encodeURIComponent(bU)+c+encodeURIComponent(bW));
}}
if(bX.length>0){bS.setData(bX.join(bo));
}}else{bS.setData(bY);
}bS.setResponseType(bV.getResponseType());
bS.addListener(n,this._onsending,this);
bS.addListener(k,this._onreceiving,this);
bS.addListener(m,this._oncompleted,this);
bS.addListener(j,this._onabort,this);
bS.addListener(h,this._ontimeout,this);
bS.addListener(o,this._onfailed,this);
}},_applyState:function(cb,cc){switch(cb){case n:this.fireEvent(n);
break;
case k:this.fireEvent(k);
break;
case m:case j:case h:case o:var ce=this.getImplementation();

if(!ce){break;
}this.__mG();

if(this.hasListener(cb)){var cf=qx.event.Registration.createEvent(cb,qx.io.remote.Response);

if(cb==m){var cd=ce.getResponseContent();
cf.setContent(cd);
if(cd===null){cb=o;
}}else if(cb==o){cf.setContent(ce.getResponseContent());
}cf.setStatusCode(ce.getStatusCode());
cf.setResponseHeaders(ce.getResponseHeaders());
this.dispatchEvent(cf);
}this.setImplementation(null);
ce.dispose();
break;
}}},environment:{"qx.ioRemoteDebug":false,"qx.ioRemoteDebugData":false},destruct:function(){var cg=this.getImplementation();

if(cg){this.setImplementation(null);
cg.dispose();
}this.setRequest(null);
}});
})();
(function(){var a="qx.data.marshal.IMarshaler";
qx.Interface.define(a,{members:{toClass:function(b,c){},toModel:function(d){}}});
})();
(function(){var k="qx.data.model.",j="",h="Array",g="_validate",f='"',e="qx.debug.databinding",d="change",c="qx.data.marshal.Json",b="set",a="_applyEventPropagation";
qx.Class.define(c,{extend:qx.core.Object,implement:[qx.data.marshal.IMarshaler],construct:function(l){qx.core.Object.call(this);
this.__na=l;
},statics:{$$instance:null,createModel:function(m,n){if(this.$$instance===null){this.$$instance=new qx.data.marshal.Json();
}this.$$instance.toClass(m,n);
return this.$$instance.toModel(m);
}},members:{__na:null,__nb:function(o){return qx.Bootstrap.getKeys(o).sort().join(f);
},toClass:function(p,q){if(!qx.lang.Type.isObject(p)||p instanceof qx.core.Object){if(p instanceof Array||qx.Bootstrap.getClass(p)==h){for(var i=0;i<p.length;i++){this.toClass(p[i],q);
}}return ;
}var s=this.__nb(p);
for(var t in p){this.toClass(p[t],q);
}if(qx.Class.isDefined(k+s)){return;
}if(this.__na&&this.__na.getModelClass&&this.__na.getModelClass(s)!=null){return;
}var z={};
var y={__nc:this.__nc};

for(var t in p){t=t.replace(/-/g,j);
z[t]={};
z[t].nullable=true;
z[t].event=d+qx.lang.String.firstUp(t);
if(q){z[t].apply=a;
}if(this.__na&&this.__na.getValidationRule){var v=this.__na.getValidationRule(s,t);

if(v){z[t].validate=g+t;
y[g+t]=v;
}}}if(this.__na&&this.__na.getModelSuperClass){var x=this.__na.getModelSuperClass(s)||qx.core.Object;
}else{var x=qx.core.Object;
}var u=[];

if(this.__na&&this.__na.getModelMixins){var w=this.__na.getModelMixins(s);
if(!qx.lang.Type.isArray(w)){if(w!=null){u=[w];
}}}if(q){u.push(qx.data.marshal.MEventBubbling);
}var r={extend:x,include:u,properties:z,members:y,destruct:this.__nd};
qx.Class.define(k+s,r);
},__nd:function(){var A=qx.util.PropertyUtil.getAllProperties(this.constructor);

for(var B in A){this.__nc(this.get(A[B].name));
}},__nc:function(C){if(!(C instanceof qx.core.Object)){return ;
}if(C.isDisposed()){return;
}C.dispose();
},__ne:function(D){var E;
if(this.__na&&this.__na.getModelClass){E=this.__na.getModelClass(D);
}
if(E!=null){return (new E());
}else{var F=qx.Class.getByName(k+D);
return (new F());
}},toModel:function(G){var K=qx.lang.Type.isObject(G);
var H=G instanceof Array||qx.Bootstrap.getClass(G)==h;

if((!K&&!H)||G instanceof qx.core.Object){return G;
}else if(H){var M=new qx.data.Array();
M.setAutoDisposeItems(true);

for(var i=0;i<G.length;i++){M.push(this.toModel(G[i]));
}return M;
}else if(K){var I=this.__nb(G);
var N=this.__ne(I);
for(var L in G){var J=L.replace(/-/g,j);
if((false)&&qx.core.Environment.get(e)){if(L!=J){this.warn("The model contained an illegal name: '"+L+"'. Replaced it with '"+J+"'.");
}}N[b+qx.lang.String.firstUp(J)](this.toModel(G[L]));
}return N;
}throw new Error("Unsupported type!");
}},destruct:function(){this.__na=null;
}});
})();
(function(){var q="qx.event.type.Event",p="String",o="failed",n="timeout",m="created",l="aborted",k="sending",j="configured",i="receiving",h="completed",c="Object",g="Boolean",f="abstract",b="_applyState",a="GET",e="changeState",d="qx.io.remote.transport.Abstract";
qx.Class.define(d,{type:f,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.setRequestHeaders({});
this.setParameters({});
this.setFormFields({});
},events:{"created":q,"configured":q,"sending":q,"receiving":q,"completed":q,"aborted":q,"failed":q,"timeout":q},properties:{url:{check:p,nullable:true},method:{check:p,nullable:true,init:a},asynchronous:{check:g,nullable:true,init:true},data:{check:p,nullable:true},username:{check:p,nullable:true},password:{check:p,nullable:true},state:{check:[m,j,k,i,h,l,n,o],init:m,event:e,apply:b},requestHeaders:{check:c,nullable:true},parameters:{check:c,nullable:true},formFields:{check:c,nullable:true},responseType:{check:p,nullable:true},useBasicHttpAuth:{check:g,nullable:true}},members:{send:function(){throw new Error("send is abstract");
},abort:function(){this.setState(l);
},timeout:function(){this.setState(n);
},failed:function(){this.setState(o);
},setRequestHeader:function(r,s){throw new Error("setRequestHeader is abstract");
},getResponseHeader:function(t){throw new Error("getResponseHeader is abstract");
},getResponseHeaders:function(){throw new Error("getResponseHeaders is abstract");
},getStatusCode:function(){throw new Error("getStatusCode is abstract");
},getStatusText:function(){throw new Error("getStatusText is abstract");
},getResponseText:function(){throw new Error("getResponseText is abstract");
},getResponseXml:function(){throw new Error("getResponseXml is abstract");
},getFetchedLength:function(){throw new Error("getFetchedLength is abstract");
},_applyState:function(u,v){switch(u){case m:this.fireEvent(m);
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
(function(){var l="=",k="",j="engine.name",h="&",g="application/xml",f="application/json",d="text/html",c="textarea",b="_data_",a="load",F="text/plain",E="text/javascript",D="readystatechange",C="completed",B="?",A="qx.io.remote.transport.Iframe",z="none",y="display",x="gecko",w="frame_",s="aborted",t="pre",q="javascript:void(0)",r="sending",o="opera",p="failed",m="mshtml",n="form_",u="timeout",v="qx/static/blank.gif";
qx.Class.define(A,{extend:qx.io.remote.transport.Abstract,construct:function(){qx.io.remote.transport.Abstract.call(this);
var G=(new Date).valueOf();
var H=w+G;
var I=n+G;
var J;

if((qx.core.Environment.get(j)==m)){J=q;
}this.__nh=qx.bom.Iframe.create({id:H,name:H,src:J});
qx.bom.element.Style.set(this.__nh,y,z);
this.__C=qx.bom.Element.create("form",{id:I,name:I,target:H});
qx.bom.element.Style.set(this.__C,y,z);
qx.dom.Element.insertEnd(this.__C,qx.dom.Node.getBodyElement(document));
this.__cY=qx.bom.Element.create(c,{id:b,name:b});
qx.dom.Element.insertEnd(this.__cY,this.__C);
qx.dom.Element.insertEnd(this.__nh,qx.dom.Node.getBodyElement(document));
qx.event.Registration.addListener(this.__nh,a,this._onload,this);
this.__ni=qx.lang.Function.listener(this._onreadystatechange,this);
qx.bom.Event.addNativeListener(this.__nh,D,this.__ni);
},statics:{handles:{synchronous:false,asynchronous:true,crossDomain:false,fileUpload:true,programaticFormFields:true,responseTypes:[F,E,f,g,d]},isSupported:function(){return true;
},_numericMap:{"uninitialized":1,"loading":2,"loaded":2,"interactive":3,"complete":4}},members:{__cY:null,__nj:0,__C:null,__nh:null,__ni:null,send:function(){var L=this.getMethod();
var N=this.getUrl();
var R=this.getParameters(false);
var Q=[];

for(var M in R){var O=R[M];

if(O instanceof Array){for(var i=0;i<O.length;i++){Q.push(encodeURIComponent(M)+l+encodeURIComponent(O[i]));
}}else{Q.push(encodeURIComponent(M)+l+encodeURIComponent(O));
}}
if(Q.length>0){N+=(N.indexOf(B)>=0?h:B)+Q.join(h);
}if(this.getData()===null){var R=this.getParameters(true);
var Q=[];

for(var M in R){var O=R[M];

if(O instanceof Array){for(var i=0;i<O.length;i++){Q.push(encodeURIComponent(M)+l+encodeURIComponent(O[i]));
}}else{Q.push(encodeURIComponent(M)+l+encodeURIComponent(O));
}}
if(Q.length>0){this.setData(Q.join(h));
}}var K=this.getFormFields();

for(var M in K){var P=document.createElement(c);
P.name=M;
P.appendChild(document.createTextNode(K[M]));
this.__C.appendChild(P);
}this.__C.action=N;
this.__C.method=L;
this.__cY.appendChild(document.createTextNode(this.getData()));
this.__C.submit();
this.setState(r);
},_onload:qx.event.GlobalError.observeMethod(function(e){if(qx.core.Environment.get(j)==o&&this.getIframeHtmlContent()==k){return;
}
if(this.__C.src){return;
}this._switchReadyState(qx.io.remote.transport.Iframe._numericMap.complete);
}),_onreadystatechange:qx.event.GlobalError.observeMethod(function(e){this._switchReadyState(qx.io.remote.transport.Iframe._numericMap[this.__nh.readyState]);
}),_switchReadyState:function(S){switch(this.getState()){case C:case s:case p:case u:this.warn("Ignore Ready State Change");
return;
}while(this.__nj<S){this.setState(qx.io.remote.Exchange._nativeMap[++this.__nj]);
}},setRequestHeader:function(T,U){},getResponseHeader:function(V){return null;
},getResponseHeaders:function(){return {};
},getStatusCode:function(){return 200;
},getStatusText:function(){return k;
},getIframeWindow:function(){return qx.bom.Iframe.getWindow(this.__nh);
},getIframeDocument:function(){return qx.bom.Iframe.getDocument(this.__nh);
},getIframeBody:function(){return qx.bom.Iframe.getBody(this.__nh);
},getIframeTextContent:function(){var W=this.getIframeBody();

if(!W){return null;
}
if(!W.firstChild){return k;
}if(W.firstChild.tagName&&W.firstChild.tagName.toLowerCase()==t){return W.firstChild.innerHTML;
}else{return W.innerHTML;
}},getIframeHtmlContent:function(){var X=this.getIframeBody();
return X?X.innerHTML:null;
},getFetchedLength:function(){return 0;
},getResponseContent:function(){if(this.getState()!==C){return null;
}var Y=this.getIframeTextContent();

switch(this.getResponseType()){case F:{};
return Y;
break;
case d:Y=this.getIframeHtmlContent();
{};
return Y;
break;
case f:Y=this.getIframeHtmlContent();
{};

try{return Y&&Y.length>0?qx.lang.Json.parse(Y):null;
}catch(ba){return this.error("Could not execute json: ("+Y+")",ba);
}case E:Y=this.getIframeHtmlContent();
{};

try{return Y&&Y.length>0?window.eval(Y):null;
}catch(bb){return this.error("Could not execute javascript: ("+Y+")",bb);
}case g:Y=this.getIframeDocument();
{};
return Y;
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}}},defer:function(){qx.io.remote.Exchange.registerType(qx.io.remote.transport.Iframe,A);
},destruct:function(){if(this.__nh){qx.event.Registration.removeListener(this.__nh,a,this._onload,this);
qx.bom.Event.removeNativeListener(this.__nh,D,this.__ni);
if((qx.core.Environment.get(j)==x)){this.__nh.src=qx.util.ResourceManager.getInstance().toUri(v);
}qx.dom.Element.remove(this.__nh);
}
if(this.__C){qx.dom.Element.remove(this.__C);
}this.__nh=this.__C=this.__cY=null;
}});
})();
(function(){var j="aborted",i="completed",h="failed",g="configured",f="timeout",e="application/json",d="loaded",c="qx.event.type.Data",b="error",a="receiving",y="changeState",x="sending",w="changeModel",v="json",u="GET",t="fail",s="queued",r="success",q="String",p="changePhase",n="_marshaler",o="__nm",l="qx.data.store.Json",m="changeUrl",k="_applyUrl";
qx.Class.define(l,{extend:qx.core.Object,construct:function(z,A){qx.core.Object.call(this);
this._marshaler=new qx.data.marshal.Json(A);
this._delegate=A;
this.__qN=false;

if(z!=null){this.setUrl(z);
}},events:{"loaded":c,"error":c},properties:{model:{nullable:true,event:w},state:{check:[g,s,x,a,i,j,f,h],init:g,event:y},url:{check:q,apply:k,event:m,nullable:true}},members:{_marshaler:null,_delegate:null,__nm:null,__qN:null,_applyUrl:function(B,C){if(B!=null){B=qx.util.AliasManager.getInstance().resolve(B);
B=qx.util.ResourceManager.getInstance().toUri(B);
this._createRequest(B);
}},_getRequest:function(){return this.__nm;
},_setRequest:function(D){this.__nm=D;
},setDeprecatedTransport:function(E){qx.core.Assert.assertBoolean(E);

if(E){qx.log.Logger.deprecatedMethodWarning(arguments.callee);
}this.__qN=E;
},isDeprecatedTransport:function(){return !!this.__qN;
},_createRequest:function(F){if(this.isDeprecatedTransport()){this._warnDeprecated();
return this.__qO(F);
}var G=new qx.io.request.Xhr(F);
this._setRequest(G);
G.setAccept(e);
G.setParser(v);
G.addListener(r,this._onSuccess,this);
var H=this._delegate;

if(H&&qx.lang.Type.isFunction(H.configureRequest)){this._delegate.configureRequest(G);
}G.addListener(p,this._onChangePhase,this);
G.addListener(t,this._onFail,this);
G.send();
},__qO:function(I){var J=new qx.io.remote.Request(I,u,e);
this._setRequest(J);
J.addListener(i,this.__qQ,this);
var K=this._delegate;

if(K&&qx.lang.Type.isFunction(K.configureRequest)){this._delegate.configureRequest(J);
}J.addListener(y,function(L){var M=L.getData();
this.setState(M);
},this);
J.addListener(h,this.__qP,this);
J.addListener(j,this.__qP,this);
J.addListener(f,this.__qP,this);
J.send();
},_onChangePhase:function(N){var O=N.getData(),Q={},P;
Q={"opened":g,"sent":x,"loading":a,"success":i,"abort":j,"timeout":f,"statusError":h};
P=Q[O];

if(P){this.setState(P);
}},_onFail:function(R){var S=R.getTarget();
this.fireDataEvent(b,S);
},__qP:function(T){this.fireDataEvent(b,T);
},_onSuccess:function(U){var W=U.getTarget(),X=W.getResponse();
var V=this._delegate;

if(V&&qx.lang.Type.isFunction(V.manipulateData)){X=this._delegate.manipulateData(X);
}this._marshaler.toClass(X,true);
var Y=this.getModel();
this.setModel(this._marshaler.toModel(X));
if(Y&&Y.dispose){Y.dispose();
}this.fireDataEvent(d,this.getModel());
},__qQ:function(ba){var bc=ba.getContent();
var bb=this._delegate;

if(bb&&qx.lang.Type.isFunction(bb.manipulateData)){bc=this._delegate.manipulateData(bc);
}this._marshaler.toClass(bc,true);
var bd=this.getModel();
this.setModel(this._marshaler.toModel(bc));
if(bd&&bd.dispose){bd.dispose();
}this.fireDataEvent(d,this.getModel());
},reload:function(){var be=this.getUrl();

if(be!=null){this._createRequest(be);
}},_warnDeprecated:function(){qx.log.Logger.warn("Using qx.io.remote.Request in qx.data.store.Json "+"is deprecated. Please consult the API documentation.");
}},destruct:function(){this._disposeObjects(o);
this._disposeSingletonObjects(n);
this._delegate=null;
}});
})();
(function(){var m="failed",k="completed",j="=",h="aborted",g="sending",f="",d="&",c="engine.name",b="configured",a="timeout",L="application/xml",K="qx.io.remote.transport.XmlHttp",J="application/json",I="text/html",H="receiving",G="text/plain",F="text/javascript",E="?",D="created",C="Boolean",u='Referer',v="engine.version",r='Basic ',t="\n</pre>",p="string",q='Authorization',n="<pre>Could not execute json: \n",o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",w="mshtml",x=':',z="parseerror",y="file:",B="webkit",A="object";
qx.Class.define(K,{extend:qx.io.remote.transport.Abstract,statics:{handles:{synchronous:true,asynchronous:true,crossDomain:false,fileUpload:false,programaticFormFields:false,responseTypes:[G,F,J,L,I]},createRequestObject:qx.core.Environment.select(c,{"default":function(){return new XMLHttpRequest;
},"mshtml":function(){if(window.ActiveXObject&&qx.xml.Document.XMLHTTP){return new ActiveXObject(qx.xml.Document.XMLHTTP);
}
if(window.XMLHttpRequest){return new XMLHttpRequest;
}}}),isSupported:function(){return !!this.createRequestObject();
}},properties:{parseJson:{check:C,init:true}},members:{__nl:false,__nj:0,__nm:null,getRequest:function(){if(this.__nm===null){this.__nm=qx.io.remote.transport.XmlHttp.createRequestObject();
this.__nm.onreadystatechange=qx.lang.Function.bind(this._onreadystatechange,this);
}return this.__nm;
},send:function(){this.__nj=0;
var Q=this.getRequest();
var M=this.getMethod();
var T=this.getAsynchronous();
var S=this.getUrl();
var O=(window.location.protocol===y&&!(/^http(s){0,1}\:/.test(S)));
this.__nl=O;
var W=this.getParameters(false);
var U=[];

for(var N in W){var R=W[N];

if(R instanceof Array){for(var i=0;i<R.length;i++){U.push(encodeURIComponent(N)+j+encodeURIComponent(R[i]));
}}else{U.push(encodeURIComponent(N)+j+encodeURIComponent(R));
}}
if(U.length>0){S+=(S.indexOf(E)>=0?d:E)+U.join(d);
}if(this.getData()===null){var W=this.getParameters(true);
var U=[];

for(var N in W){var R=W[N];

if(R instanceof Array){for(var i=0;i<R.length;i++){U.push(encodeURIComponent(N)+j+encodeURIComponent(R[i]));
}}else{U.push(encodeURIComponent(N)+j+encodeURIComponent(R));
}}
if(U.length>0){this.setData(U.join(d));
}}var V=function(X){var bd=o;
var bh=f;
var bb,ba,Y;
var be,bf,bg,bc;
var i=0;

do{bb=X.charCodeAt(i++);
ba=X.charCodeAt(i++);
Y=X.charCodeAt(i++);
be=bb>>2;
bf=((bb&3)<<4)|(ba>>4);
bg=((ba&15)<<2)|(Y>>6);
bc=Y&63;

if(isNaN(ba)){bg=bc=64;
}else if(isNaN(Y)){bc=64;
}bh+=bd.charAt(be)+bd.charAt(bf)+bd.charAt(bg)+bd.charAt(bc);
}while(i<X.length);
return bh;
};
try{if(this.getUsername()){if(this.getUseBasicHttpAuth()){Q.open(M,S,T);
Q.setRequestHeader(q,r+V(this.getUsername()+x+this.getPassword()));
}else{Q.open(M,S,T,this.getUsername(),this.getPassword());
}}else{Q.open(M,S,T);
}}catch(bi){this.error("Failed with exception: "+bi);
this.failed();
return;
}if(!(qx.core.Environment.get(c)==B)){Q.setRequestHeader(u,window.location.href);
}var P=this.getRequestHeaders();

for(var N in P){Q.setRequestHeader(N,P[N]);
}try{if(O&&T&&qx.core.Environment.get(c)==w&&qx.core.Environment.get(v)==9){qx.event.Timer.once(function(){Q.send(this.getData());
},this,0);
}else{Q.send(this.getData());
}}catch(bj){if(O){this.failedLocally();
}else{this.error("Failed to send data: "+bj,"send");
this.failed();
}return;
}if(!T){this._onreadystatechange();
}},failedLocally:function(){if(this.getState()===m){return;
}this.warn("Could not load from file: "+this.getUrl());
this.failed();
},_onreadystatechange:qx.event.GlobalError.observeMethod(function(e){switch(this.getState()){case k:case h:case m:case a:{};
return;
}var bk=this.getReadyState();

if(bk==4){if(!qx.io.remote.Exchange.wasSuccessful(this.getStatusCode(),bk,this.__nl)){if(this.getState()===b){this.setState(g);
}this.failed();
return;
}}if(bk==3&&this.__nj==1){this.setState(qx.io.remote.Exchange._nativeMap[++this.__nj]);
}while(this.__nj<bk){this.setState(qx.io.remote.Exchange._nativeMap[++this.__nj]);
}}),getReadyState:function(){var bl=null;

try{bl=this.getRequest().readyState;
}catch(bm){}return bl;
},setRequestHeader:function(bn,bo){this.getRequestHeaders()[bn]=bo;
},getResponseHeader:function(bp){var bq=null;

try{bq=this.getRequest().getResponseHeader(bp)||null;
}catch(br){}return bq;
},getStringResponseHeaders:function(){var bt=null;

try{var bs=this.getRequest().getAllResponseHeaders();

if(bs){bt=bs;
}}catch(bu){}return bt;
},getResponseHeaders:function(){var bx=this.getStringResponseHeaders();
var by={};

if(bx){var bv=bx.split(/[\r\n]+/g);

for(var i=0,l=bv.length;i<l;i++){var bw=bv[i].match(/^([^:]+)\s*:\s*(.+)$/i);

if(bw){by[bw[1]]=bw[2];
}}}return by;
},getStatusCode:function(){var bz=-1;

try{bz=this.getRequest().status;
if(bz===1223){bz=204;
}}catch(bA){}return bz;
},getStatusText:function(){var bB=f;

try{bB=this.getRequest().statusText;
}catch(bC){}return bB;
},getResponseText:function(){var bD=null;

try{bD=this.getRequest().responseText;
}catch(bE){bD=null;
}return bD;
},getResponseXml:function(){var bH=null;
var bF=this.getStatusCode();
var bG=this.getReadyState();

if(qx.io.remote.Exchange.wasSuccessful(bF,bG,this.__nl)){try{bH=this.getRequest().responseXML;
}catch(bI){}}if(typeof bH==A&&bH!=null){if(!bH.documentElement){var s=String(this.getRequest().responseText).replace(/<\?xml[^\?]*\?>/,f);
bH.loadXML(s);
}if(!bH.documentElement){throw new Error("Missing Document Element!");
}
if(bH.documentElement.tagName==z){throw new Error("XML-File is not well-formed!");
}}else{throw new Error("Response was not a valid xml document ["+this.getRequest().responseText+"]");
}return bH;
},getFetchedLength:function(){var bJ=this.getResponseText();
return typeof bJ==p?bJ.length:0;
},getResponseContent:function(){var bK=this.getState();

if(bK!==k&&bK!=m){return null;
}var bM=this.getResponseText();

if(bK==m){return bM;
}
switch(this.getResponseType()){case G:case I:{};
return bM;
case J:{};

try{if(bM&&bM.length>0){var bL;

if(this.getParseJson()){bL=qx.lang.Json.parse(bM);
bL=(bL===0?0:(bL||null));
}else{bL=bM;
}return bL;
}else{return null;
}}catch(bN){this.error("Could not execute json: ["+bM+"]",bN);
return n+bM+t;
}case F:{};

try{if(bM&&bM.length>0){var bL=window.eval(bM);
return (bL===0?0:(bL||null));
}else{return null;
}}catch(bO){this.error("Could not execute javascript: ["+bM+"]",bO);
return null;
}case L:bM=this.getResponseXml();
{};
return (bM===0?0:(bM||null));
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}},_applyState:function(bP,bQ){switch(bP){case D:this.fireEvent(D);
break;
case b:this.fireEvent(b);
break;
case g:this.fireEvent(g);
break;
case H:this.fireEvent(H);
break;
case k:this.fireEvent(k);
break;
case m:this.fireEvent(m);
break;
case h:this.getRequest().abort();
this.fireEvent(h);
break;
case a:this.getRequest().abort();
this.fireEvent(a);
break;
}}},defer:function(){qx.io.remote.Exchange.registerType(qx.io.remote.transport.XmlHttp,K);
},destruct:function(){var bR=this.getRequest();

if(bR){bR.onreadystatechange=qx.lang.Function.empty;
switch(bR.readyState){case 1:case 2:case 3:bR.abort();
}}this.__nm=null;
}});
})();
(function(){var j="qx.event.type.Event",i="qx.debug.io",h="fail",g="GET",f="qx.event.type.Data",e="load",d="loadEnd",c="Map",b="qx.io.request.AbstractRequest",a="changePhase",C="sent",B="qx.io.request.authentication.IAuthentication",A="error",z="loading",y="abort",x="success",w="String",v="",u="opened",t="POST",q="statusError",r="readyStateChange",o="abstract",p="unsent",m="changeResponse",n="Number",k="Content-Type",l="timeout",s="undefined";
qx.Class.define(b,{type:o,extend:qx.core.Object,construct:function(D){qx.core.Object.call(this);

if(D!==undefined){this.setUrl(D);
}var E=this._transport=this._createTransport();
this._setPhase(p);
this.__nq=qx.lang.Function.bind(this._onReadyStateChange,this);
this.__nr=qx.lang.Function.bind(this._onLoad,this);
this.__ns=qx.lang.Function.bind(this._onLoadEnd,this);
this.__nt=qx.lang.Function.bind(this._onAbort,this);
this.__mJ=qx.lang.Function.bind(this._onTimeout,this);
this.__nu=qx.lang.Function.bind(this._onError,this);
E.onreadystatechange=this.__nq;
E.onload=this.__nr;
E.onloadend=this.__ns;
E.onabort=this.__nt;
E.ontimeout=this.__mJ;
E.onerror=this.__nu;
},events:{"readyStateChange":j,"success":j,"load":j,"loadEnd":j,"abort":j,"timeout":j,"error":j,"statusError":j,"fail":j,"changeResponse":f,"changePhase":f},properties:{url:{check:w},requestHeaders:{check:c,nullable:true},timeout:{check:n,nullable:true,init:0},requestData:{check:function(F){return qx.lang.Type.isString(F)||qx.Class.isSubClassOf(F.constructor,qx.core.Object)||qx.lang.Type.isObject(F);
},nullable:true},authentication:{check:B,nullable:true}},members:{__nq:null,__nr:null,__ns:null,__nt:null,__mJ:null,__nu:null,__nv:null,__nw:null,_transport:null,_createTransport:function(){throw new Error("Abstract method call");
},_getConfiguredUrl:function(){},_setRequestHeaders:function(){},_getParsedResponse:function(){throw new Error("Abstract method call");
},send:function(){var K=this._transport,G,J,H,I;
G=this._getConfiguredUrl();
if(/\#/.test(G)){G=G.replace(/\#.*/,v);
}K.timeout=this.getTimeout()*1000;
J=qx.lang.Type.isFunction(this.getMethod)?this.getMethod():g;
H=qx.lang.Type.isFunction(this.getAsync)?this.getAsync():true;
if(qx.core.Environment.get(i)){this.debug("Open low-level request with method: "+J+", url: "+G+", async: "+H);
}K.open(J,G,H);
this._setPhase(u);
I=this._serializeData(this.getRequestData());
this._setRequestHeaders();
this.__ny();
this.__nx();
if(qx.core.Environment.get(i)){this.debug("Send low-level request");
}J==g?K.send():K.send(I);
this._setPhase(C);
},abort:function(){if(qx.core.Environment.get(i)){this.debug("Abort request");
}this._transport.abort();
},getTransport:function(){return this._transport;
},getReadyState:function(){return this._transport.readyState;
},getPhase:function(){return this.__nw;
},getStatus:function(){return this._transport.status;
},getStatusText:function(){return this._transport.statusText;
},getResponseText:function(){return this._transport.responseText;
},getAllResponseHeaders:function(){return this._transport.getAllResponseHeaders();
},getResponseHeader:function(L){return this._transport.getResponseHeader(L);
},getResponseContentType:function(){return this.getResponseHeader(k);
},isDone:function(){return this.getReadyState()===4;
},getResponse:function(){return this.__nv;
},_setResponse:function(M){var N=M;

if(this.__nv!==M){this.__nv=M;
this.fireEvent(m,qx.event.type.Data,[this.__nv,N]);
}},_onReadyStateChange:function(){var O,P=this.getReadyState();

if(qx.core.Environment.get(i)){this.debug("Fire readyState: "+P);
}this.fireEvent(r);

if(P===3){this._setPhase(z);
}
if(this.isDone()){if(qx.core.Environment.get(i)){this.debug("Request completed with HTTP status: "+this.getStatus());
}this._setPhase(e);
if(qx.util.Request.isSuccessful(this.getStatus())){if(qx.core.Environment.get(i)){this.debug("Response is of type: '"+this.getResponseContentType()+"'");
}O=this._getParsedResponse();
this._setResponse(O);
this._fireStatefulEvent(x);
}else{this._fireStatefulEvent(q);
this.fireEvent(h);
}}},_onLoad:function(){this.fireEvent(e);
},_onLoadEnd:function(){this.fireEvent(d);
},_onAbort:function(){this._fireStatefulEvent(y);
},_onTimeout:function(){this._fireStatefulEvent(l);
this.fireEvent(h);
},_onError:function(){this.fireEvent(A);
this.fireEvent(h);
},_fireStatefulEvent:function(Q){this._setPhase(Q);
this.fireEvent(Q);
},_setPhase:function(R){var S=this.__nw;
this.__nw=R;
this.fireDataEvent(a,R,S);
},_serializeData:function(T){var U=typeof this.getMethod!==s&&this.getMethod()==t;

if(!T){return;
}
if(qx.lang.Type.isString(T)){return T;
}
if(qx.Class.isSubClassOf(T.constructor,qx.core.Object)){return qx.util.Serializer.toUriParameter(T);
}
if(qx.lang.Type.isObject(T)){return qx.lang.Object.toUriParameter(T,U);
}},__nx:function(){var V=this.getRequestHeaders();

if(V){qx.lang.Object.getKeys(V).forEach(function(W){this._transport.setRequestHeader(W,V[W]);
},this);
}},__ny:function(){var Y=this.getAuthentication(),X=this._transport;

if(Y){Y.getAuthHeaders().forEach(function(ba){if(ba.key&&ba.value){if(qx.core.Environment.get(i)){this.debug("Set authentication header '"+ba.key+"' to '"+ba.value+"'");
}X.setRequestHeader(ba.key,ba.value);
}},this);
}}},environment:{"qx.debug.io":false},destruct:function(){var bc=this._transport,bb=function(){};

if(this._transport){bc.onreadystatechange=bc.onload=bc.onloadend=bc.onabort=bc.ontimeout=bc.onerror=bb;
bc.dispose();
}}});
})();
(function(){var r="&",q="=",p="?",o="application/json",n="completed",m="text/plain",l="text/javascript",k="qx.io.remote.transport.Script",j="",h="_ScriptTransport_data",c="script",g="timeout",f="_ScriptTransport_",b="_ScriptTransport_id",a="aborted",e="utf-8",d="failed";
qx.Class.define(k,{extend:qx.io.remote.transport.Abstract,construct:function(){qx.io.remote.transport.Abstract.call(this);
var s=++qx.io.remote.transport.Script.__nA;

if(s>=2000000000){qx.io.remote.transport.Script.__nA=s=1;
}this.__iz=null;
this.__nA=s;
},statics:{__nA:0,_instanceRegistry:{},ScriptTransport_PREFIX:f,ScriptTransport_ID_PARAM:b,ScriptTransport_DATA_PARAM:h,handles:{synchronous:false,asynchronous:true,crossDomain:true,fileUpload:false,programaticFormFields:false,responseTypes:[m,l,o]},isSupported:function(){return true;
},_numericMap:{"uninitialized":1,"loading":2,"loaded":2,"interactive":3,"complete":4},_requestFinished:qx.event.GlobalError.observeMethod(function(t,content){var u=qx.io.remote.transport.Script._instanceRegistry[t];

if(u==null){}else{u._responseContent=content;
u._switchReadyState(qx.io.remote.transport.Script._numericMap.complete);
}})},members:{__nj:0,__iz:null,__nA:null,send:function(){var x=this.getUrl();
x+=(x.indexOf(p)>=0?r:p)+qx.io.remote.transport.Script.ScriptTransport_ID_PARAM+q+this.__nA;
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
}qx.io.remote.transport.Script._instanceRegistry[this.__nA]=this;
this.__iz=document.createElement(c);
this.__iz.charset=e;
this.__iz.src=x;
document.body.appendChild(this.__iz);
},_switchReadyState:function(B){switch(this.getState()){case n:case a:case d:case g:this.warn("Ignore Ready State Change");
return;
}while(this.__nj<B){this.setState(qx.io.remote.Exchange._nativeMap[++this.__nj]);
}},setRequestHeader:function(C,D){},getResponseHeader:function(E){return null;
},getResponseHeaders:function(){return {};
},getStatusCode:function(){return 200;
},getStatusText:function(){return j;
},getFetchedLength:function(){return 0;
},getResponseContent:function(){if(this.getState()!==n){return null;
}
switch(this.getResponseType()){case m:case o:case l:{};
var F=this._responseContent;
return (F===0?0:(F||null));
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}}},defer:function(){qx.io.remote.Exchange.registerType(qx.io.remote.transport.Script,k);
},destruct:function(){if(this.__iz){delete qx.io.remote.transport.Script._instanceRegistry[this.__nA];
document.body.removeChild(this.__iz);
}this.__iz=this._responseContent=null;
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
(function(){var t="qx.event.type.Event",s="GET",r="function",q="xml",p="POST",o="application/xml",n="HEAD",m="Boolean",l="PUT",k="Accept",d="application/json",j="application/x-www-form-urlencoded",g="Cache-Control",c="Content-Type",b="OPTIONS",f="qx.debug.io",e="qx.io.request.Xhr",h="json",a="DELETE",i="String";
qx.Class.define(e,{extend:qx.io.request.AbstractRequest,construct:function(u,v){if(v!==undefined){this.setMethod(v);
}qx.io.request.AbstractRequest.call(this,u);
},events:{"readystatechange":t,"success":t,"load":t,"statusError":t},statics:{PARSER:{json:qx.lang.Json.parse,xml:qx.xml.Document.fromString}},properties:{method:{check:[n,b,s,p,l,a],init:s},async:{check:m,init:true},accept:{check:i,nullable:true},cache:{check:function(w){return qx.lang.Type.isBoolean(w)||qx.lang.Type.isString(w);
},init:true}},members:{__ok:null,_createTransport:function(){return new qx.bom.request.Xhr();
},_getConfiguredUrl:function(){var x=this.getUrl(),y;

if(this.getMethod()===s&&this.getRequestData()){y=this._serializeData(this.getRequestData());
x=qx.util.Uri.appendParamsToUrl(x,y);
}
if(this.getCache()===false){x=qx.util.Uri.appendParamsToUrl(x,{nocache:new Date().valueOf()});
}return x;
},_setRequestHeaders:function(){var z=this._transport;
if(qx.lang.Type.isString(this.getCache())){z.setRequestHeader(g,this.getCache());
}if(this.getMethod()===p){z.setRequestHeader(c,j);
}if(this.getAccept()){if(qx.core.Environment.get(f)){this.debug("Accepting: '"+this.getAccept()+"'");
}z.setRequestHeader(k,this.getAccept());
}},_getParsedResponse:function(){var B=this._transport.responseText,A=this._getParser();

if(typeof A===r){return A.call(this,B);
}return B;
},setParser:function(C){var D=qx.io.request.Xhr;
if(typeof D.PARSER[C]===r){return this.__ok=D.PARSER[C];
}return this.__ok=C;
},_getParser:function(){var E=this.__ok;
if(E){return E;
}if(!this.isDone()){return;
}switch(this.getResponseContentType()){case d:E=qx.io.request.Xhr.PARSER[h];
break;
case o:E=qx.io.request.Xhr.PARSER[q];
break;
default:E=null;
break;
}if((/[^\/]+\/[^\+]+\+xml/).test(this.getResponseContentType())){E=qx.io.request.Xhr.PARSER[q];
}return E;
}}});
})();
(function(){var t="Integer",s="aborted",r="_onaborted",q="__ki",p="_on",o="_applyEnabled",n="Boolean",m="sending",l="interval",k="failed",c="qx.io.remote.RequestQueue",j="timeout",g="completed",b="queued",a="__om",f="io.maxrequests",d="receiving",h="singleton";
qx.Class.define(c,{type:h,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__cX=[];
this.__om=[];
this.__on=0;
this.__ki=new qx.event.Timer(500);
this.__ki.addListener(l,this._oninterval,this);
},properties:{enabled:{init:true,check:n,apply:o},maxTotalRequests:{check:t,nullable:true},maxConcurrentRequests:{check:t,init:qx.core.Environment.get(f)},defaultTimeout:{check:t,init:5000}},members:{__cX:null,__om:null,__on:null,__ki:null,getRequestQueue:function(){return this.__cX;
},getActiveQueue:function(){return this.__om;
},_debug:function(){var u;
},_check:function(){this._debug();
if(this.__om.length==0&&this.__cX.length==0){this.__ki.stop();
}if(!this.getEnabled()){return;
}if(this.__cX.length==0||(this.__cX[0].isAsynchronous()&&this.__om.length>=this.getMaxConcurrentRequests())){return;
}if(this.getMaxTotalRequests()!=null&&this.__on>=this.getMaxTotalRequests()){return;
}var v=this.__cX.shift();
var w=new qx.io.remote.Exchange(v);
this.__on++;
this.__om.push(w);
this._debug();
w.addListener(m,this._onsending,this);
w.addListener(d,this._onreceiving,this);
w.addListener(g,this._oncompleted,this);
w.addListener(s,this._oncompleted,this);
w.addListener(j,this._oncompleted,this);
w.addListener(k,this._oncompleted,this);
w._start=(new Date).valueOf();
w.send();
if(this.__cX.length>0){this._check();
}},_remove:function(x){qx.lang.Array.remove(this.__om,x);
x.dispose();
this._check();
},__oo:0,_onsending:function(e){e.getTarget().getRequest()._onsending(e);
},_onreceiving:function(e){e.getTarget().getRequest()._onreceiving(e);
},_oncompleted:function(e){var z=e.getTarget().getRequest();
var y=p+e.getType();
this._remove(e.getTarget());
try{if(z[y]){z[y](e);
}}catch(A){this.error("Request "+z+" handler "+y+" threw an error: ",A);
try{if(z[r]){var event=qx.event.Registration.createEvent(s,qx.event.type.Event);
z[r](event);
}}catch(B){}}},_oninterval:function(e){var I=this.__om;

if(I.length==0){this.__ki.stop();
return;
}var D=(new Date).valueOf();
var G;
var E;
var H=this.getDefaultTimeout();
var F;
var C;

for(var i=I.length-1;i>=0;i--){G=I[i];
E=G.getRequest();

if(E.isAsynchronous()){F=E.getTimeout();
if(F==0){continue;
}
if(F==null){F=H;
}C=D-G._start;

if(C>F){this.warn("Timeout: transport "+G.toHashCode());
this.warn(C+"ms > "+F+"ms");
G.timeout();
}}}},_applyEnabled:function(J,K){if(J){this._check();
}this.__ki.setEnabled(J);
},add:function(L){L.setState(b);

if(L.isAsynchronous()){this.__cX.push(L);
}else{this.__cX.unshift(L);
}this._check();

if(this.getEnabled()){this.__ki.start();
}},abort:function(M){var N=M.getTransport();

if(N){N.abort();
}else if(qx.lang.Array.contains(this.__cX,M)){qx.lang.Array.remove(this.__cX,M);
}}},destruct:function(){this._disposeArray(a);
this._disposeObjects(q);
this.__cX=null;
}});
})();
(function(){var u='"',t="{",s="[",r=",",q="",p="get",o="}",n="]",m='":',l="&",d="null",k='\\t',g='\\"',c='\\n',b='\\b',f="=",e="qx.util.Serializer",h='\\r',a='\\\\',j='\\f';
qx.Class.define(e,{statics:{toUriParameter:function(v,w,x){var B=q;
var C=qx.util.PropertyUtil.getProperties(v.constructor);

for(var name in C){var y=v[p+qx.lang.String.firstUp(name)]();
if(qx.lang.Type.isArray(y)){var A=qx.data&&qx.data.IListData&&qx.Class.hasInterface(y&&y.constructor,qx.data.IListData);

for(var i=0;i<y.length;i++){var z=A?y.getItem(i):y[i];
B+=this.__ov(name,z,w);
}}else if(qx.lang.Type.isDate(y)&&x!=null){B+=this.__ov(name,x.format(y),w);
}else{B+=this.__ov(name,y,w);
}}return B.substring(0,B.length-1);
},__ov:function(name,D,E){if(D instanceof qx.core.Object&&E!=null){var F=encodeURIComponent(E(D));

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
(function(){var x="source",w="password",v="qx.util.Uri",u="port",t="protocol",s="&",r="",q="userInfo",p="?",n="user",e="anchor",l="strict",h="queryKey",c="directory",b="loose",g="relative",f="path",j="host",a="file",k="authority",d="query";
qx.Class.define(v,{statics:{parseUri:function(y,z){var A={key:[x,t,k,q,n,w,j,u,g,f,c,a,d,e],q:{name:h,parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}};
var o=A,m=A.parser[z?l:b].exec(y),B={},i=14;

while(i--){B[o.key[i]]=m[i]||r;
}B[o.q.name]={};
B[o.key[12]].replace(o.q.parser,function(C,D,E){if(D){B[o.q.name][D]=E;
}});
return B;
},appendParamsToUrl:function(F,G){if(G===undefined){return F;
}
if(qx.lang.Type.isObject(G)){G=qx.lang.Object.toUriParameter(G);
}
if(!G){return F;
}return F+=(/\?/).test(F)?s+G:p+G;
}}});
})();
(function(){var b="//",a="qx.util.Request";
qx.Class.define(a,{statics:{isCrossDomain:function(c){var e=qx.util.Uri.parseUri(c),location=window.location,d=location.protocol;
if(!(c.indexOf(b)!==-1)){return false;
}
if(d.substr(0,d.length-1)==e.protocol&&location.host===e.host&&location.port===e.port){return false;
}return true;
},isSuccessful:function(status){return (status>=200&&status<300||status===304);
}}});
})();
(function(){var s="engine.name",r="",q="qx.debug.io",p="mshtml",o="gecko",n="engine.version",m="onunload",l="opera",k="undefined",j="activex",c="Microsoft.XMLHTTP",i="io.xhr",g="Microsoft.XMLDOM",b="xhr",a="Content-Type",f="browser.version",d="qx.bom.request.Xhr",h="file:";
qx.Bootstrap.define(d,{construct:function(){this.__qy=qx.Bootstrap.bind(this.__qG,this);
this.__mJ=qx.Bootstrap.bind(this.__qI,this);
this.__qF();
if(window.attachEvent){this.__qz=qx.Bootstrap.bind(this.__qL,this);
window.attachEvent(m,this.__qz);
}},statics:{UNSENT:0,OPENED:1,HEADERS_RECEIVED:2,LOADING:3,DONE:4},members:{readyState:0,responseText:r,responseXML:null,status:0,statusText:r,timeout:0,open:function(t,u,v,w,x){if(this.__mk){return;
}this.__qA=false;
this.__mM=false;

if(typeof v==k){v=true;
}this.__qB=v;
if(!this.__qM()&&this.readyState>qx.bom.request.Xhr.UNSENT){this.dispose();
this.__qF();
}this.__qD.onreadystatechange=this.__qy;

try{if(qx.core.Environment.get(q)){qx.Bootstrap.debug(qx.bom.request.Xhr,"Open native request with method: "+t+", url: "+u+", async: "+v);
}this.__qD.open(t,u,v,w,x);
}catch(y){if(!qx.util.Request.isCrossDomain(u)){throw y;
}
if(!this.__qB){this.__qC=y;
}
if(this.__qB){if(window.XDomainRequest){this.readyState=4;
this.__qD=new XDomainRequest();
this.__qD.onerror=qx.Bootstrap.bind(function(){this.onreadystatechange();
this.onerror();
this.onloadend();
},this);

if(qx.core.Environment.get(q)){qx.Bootstrap.debug(qx.bom.request.Xhr,"Retry open native request with method: "+t+", url: "+u+", async: "+v);
}this.__qD.open(t,u,v,w,x);
return;
}window.setTimeout(qx.Bootstrap.bind(function(){this.readyState=4;
this.onreadystatechange();
this.onerror();
this.onloadend();
},this));
}}if(qx.core.Environment.get(s)===o&&parseInt(qx.core.Environment.get(n),10)<2&&!this.__qB){this.readyState=qx.bom.request.Xhr.OPENED;
this.onreadystatechange();
}},setRequestHeader:function(z,A){if(this.__mk){return;
}this.__qD.setRequestHeader(z,A);
},send:function(B){if(this.__mk){return;
}if(!this.__qB&&this.__qC){throw this.__qC;
}B=typeof B==k?null:B;
try{if(qx.core.Environment.get(q)){qx.Bootstrap.debug(qx.bom.request.Xhr,"Send native request");
}this.__qD.send(B);
}catch(C){if(!this.__qB){throw C;
}}if(qx.core.Environment.get(s)===o&&!this.__qB){this.__qG();
}this.__qA=true;
if(qx.core.Environment.get(s)===l&&this.timeout===0){this.timeout=10000;
}if(this.timeout>0){this.__qE=window.setTimeout(this.__mJ,this.timeout);
}},abort:function(D){if(this.__mk){return;
}this.__mM=true;
this.__qD.abort();

if(this.__qD){this.readyState=this.__qD.readyState;
}
if(D){return;
}this.onabort();
},onreadystatechange:function(){},onload:function(){},onloadend:function(){},onerror:function(){},onabort:function(){},ontimeout:function(){},getResponseHeader:function(E){if(this.__mk){return;
}return this.__qD.getResponseHeader(E);
},getAllResponseHeaders:function(){if(this.__mk){return;
}return this.__qD.getAllResponseHeaders();
},getRequest:function(){return this.__qD;
},dispose:function(){if(this.__mk){return false;
}if(window.detachEvent){window.detachEvent(m,this.__qz);
}try{this.__qD.onreadystatechange;
}catch(G){return;
}var F=function(){};
this.__qD.onreadystatechange=F;
this.__qD.onload=F;
this.__qD.onerror=F;
this.abort(true);
this.__qD=null;
this.__mk=true;
return true;
},_createNativeXhr:function(){var H=qx.core.Environment.get(i);

if(H===b){return new XMLHttpRequest();
}
if(H==j){return new window.ActiveXObject(c);
}qx.log.Logger.error(this,"No XHR support available.");
},_getProtocol:function(){return window.location.protocol;
},__qD:null,__qB:null,__qy:null,__qz:null,__mJ:null,__qA:null,__mM:null,__ca:null,__mk:null,__qE:null,__qC:null,__qF:function(){this.__qD=this._createNativeXhr();
this.__qD.onreadystatechange=this.__qy;
this.__mk=this.__qA=this.__mM=false;
},__qG:function(){var I=this.__qD,J=true;

if(qx.core.Environment.get(q)){qx.Bootstrap.debug(qx.bom.request.Xhr,"Received native readyState: "+I.readyState);
}if(this.readyState==I.readyState){return;
}this.readyState=I.readyState;
if(this.readyState===qx.bom.request.Xhr.DONE&&this.__mM&&!this.__qA){return;
}if(!this.__qB&&(I.readyState==2||I.readyState==3)){return;
}this.status=0;
this.statusText=this.responseText=r;
this.responseXML=null;

if(this.readyState>qx.bom.request.Xhr.OPENED){try{this.status=I.status;
this.statusText=I.statusText;
this.responseText=I.responseText;
this.responseXML=I.responseXML;
}catch(K){J=false;
}
if(J){this.__qJ();
this.__qK();
}}this.__mQ();
if(this.readyState==qx.bom.request.Xhr.DONE){if(I){I.onreadystatechange=function(){};
}}},__mQ:function(){var L=this;
if(qx.core.Environment.get(s)==p&&qx.core.Environment.get(n)<8){if(this.__qB&&!this.__qA&&this.readyState>=qx.bom.request.Xhr.LOADING){if(this.readyState==qx.bom.request.Xhr.LOADING){return ;
}
if(this.readyState==qx.bom.request.Xhr.DONE){window.setTimeout(function(){L.readyState=3;
L.onreadystatechange();
L.readyState=4;
L.onreadystatechange();
L.__qH();
});
return;
}}}this.onreadystatechange();
this.__qH();
},__qH:function(){if(this.readyState===qx.bom.request.Xhr.DONE){window.clearTimeout(this.__qE);
if(this.__ca){this.ontimeout();
if(qx.core.Environment.get(s)===l){this.onerror();
}this.__ca=false;
}else{this.statusText?this.onload():this.onerror();
}this.onloadend();
}},__qI:function(){var M=this.__qD;
this.readyState=qx.bom.request.Xhr.DONE;
this.__ca=true;
M.abort();
this.responseText=r;
this.responseXML=null;
this.__mQ();
},__qJ:function(){var N=this.__qD;
if(this._getProtocol()===h&&this.status===0){this.status=200;
}if(this.status===1223){this.status=204;
}if(N.readyState===qx.bom.request.Xhr.DONE&&this.status===0){this.status=304;
}},__qK:function(){if(qx.core.Environment.get(s)==p&&(this.getResponseHeader(a)||r).match(/[^\/]+\/[^\+]+\+xml/)&&this.responseXML&&!this.responseXML.documentElement){var O=new window.ActiveXObject(g);
O.async=false;
O.validateOnParse=false;
O.loadXML(this.responseText);
this.responseXML=O;
}},__qL:function(){try{if(this){this.dispose();
}}catch(e){}},__qM:function(){var name=qx.core.Environment.get(s);
var P=qx.core.Environment.get(f);
return !(name==p&&P<9||name==o&&P<3.5);
}},defer:function(){qx.core.Environment.add(q,false);
}});
})();
(function(){var k="Boolean",j="qx.event.type.Event",i="queued",h="String",g="sending",f="receiving",d="aborted",c="failed",b="nocache",a="completed",P="qx.io.remote.Response",O="POST",N="configured",M="timeout",L="GET",K="Pragma",J="no-url-params-on-post",I="PUT",H="no-cache",G="Cache-Control",r="Content-Type",s="text/plain",p="application/xml",q="application/json",n="text/html",o="application/x-www-form-urlencoded",l="qx.io.remote.Exchange",m="Integer",t="X-Qooxdoo-Response-Type",u="HEAD",y="qx.io.remote.Request",x="_applyResponseType",A="_applyState",z="text/javascript",C="changeState",B="_applyProhibitCaching",w="",F="_applyMethod",E="DELETE",D="boolean";
qx.Class.define(y,{extend:qx.core.Object,construct:function(Q,R,S){qx.core.Object.call(this);
this.__rv={};
this.__rw={};
this.__rx={};
this.__ry={};

if(Q!==undefined){this.setUrl(Q);
}
if(R!==undefined){this.setMethod(R);
}
if(S!==undefined){this.setResponseType(S);
}this.setProhibitCaching(true);
this.__rz=++qx.io.remote.Request.__rz;
},events:{"created":j,"configured":j,"sending":j,"receiving":j,"completed":P,"aborted":j,"failed":P,"timeout":P},statics:{__rz:0,methodAllowsRequestBody:function(T){return (T==O)||(T==I);
}},properties:{url:{check:h,init:w},method:{check:[L,O,I,u,E],apply:F,init:L},asynchronous:{check:k,init:true},data:{check:h,nullable:true},username:{check:h,nullable:true},password:{check:h,nullable:true},state:{check:[N,i,g,f,a,d,M,c],init:N,apply:A,event:C},responseType:{check:[s,z,q,p,n],init:s,apply:x},timeout:{check:m,nullable:true},prohibitCaching:{check:function(v){return typeof v==D||v===J;
},init:true,apply:B},crossDomain:{check:k,init:false},fileUpload:{check:k,init:false},transport:{check:l,nullable:true},useBasicHttpAuth:{check:k,init:false},parseJson:{check:k,init:true}},members:{__rv:null,__rw:null,__rx:null,__ry:null,__rz:null,send:function(){qx.io.remote.RequestQueue.getInstance().add(this);
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
},__rA:qx.event.GlobalError.observeMethod(function(e){var U=e.clone();
U.setTarget(this);
this.dispatchEvent(U);
}),_onqueued:function(e){this.setState(i);
this.__rA(e);
},_onsending:function(e){this.setState(g);
this.__rA(e);
},_onreceiving:function(e){this.setState(f);
this.__rA(e);
},_oncompleted:function(e){this.setState(a);
this.__rA(e);
this.dispose();
},_onaborted:function(e){this.setState(d);
this.__rA(e);
this.dispose();
},_ontimeout:function(e){this.setState(M);
this.__rA(e);
this.dispose();
},_onfailed:function(e){this.setState(c);
this.__rA(e);
this.dispose();
},_applyState:function(V,W){},_applyProhibitCaching:function(X,Y){if(!X){this.removeParameter(b);
this.removeRequestHeader(K);
this.removeRequestHeader(G);
return;
}if(X!==J||this.getMethod()!=O){this.setParameter(b,new Date().valueOf());
}else{this.removeParameter(b);
}this.setRequestHeader(K,H);
this.setRequestHeader(G,H);
},_applyMethod:function(ba,bb){if(qx.io.remote.Request.methodAllowsRequestBody(ba)){this.setRequestHeader(r,o);
}else{this.removeRequestHeader(r);
}var bc=this.getProhibitCaching();
this._applyProhibitCaching(bc,bc);
},_applyResponseType:function(bd,be){this.setRequestHeader(t,bd);
},setRequestHeader:function(bf,bg){this.__rv[bf]=bg;
},removeRequestHeader:function(bh){delete this.__rv[bh];
},getRequestHeader:function(bi){return this.__rv[bi]||null;
},getRequestHeaders:function(){return this.__rv;
},setParameter:function(bj,bk,bl){if(bl){this.__rx[bj]=bk;
}else{this.__rw[bj]=bk;
}},removeParameter:function(bm,bn){if(bn){delete this.__rx[bm];
}else{delete this.__rw[bm];
}},getParameter:function(bo,bp){if(bp){return this.__rx[bo]||null;
}else{return this.__rw[bo]||null;
}},getParameters:function(bq){return (bq?this.__rx:this.__rw);
},setFormField:function(br,bs){this.__ry[br]=bs;
},removeFormField:function(bt){delete this.__ry[bt];
},getFormField:function(bu){return this.__ry[bu]||null;
},getFormFields:function(){return this.__ry;
},getSequenceNumber:function(){return this.__rz;
}},destruct:function(){this.setTransport(null);
this.__rv=this.__rw=this.__rx=this.__ry=null;
}});
})();

});