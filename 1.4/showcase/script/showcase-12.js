qx.$$packageData['3571210948ce']={"locales":{},"resources":{"qx/static/blank.gif":[1,1,"gif","qx"]},"translations":{}};

qx.Part.$$notifyLoad("3571210948ce", function() {
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
}this.__sa();
},__sa:function(){var bR=this.getRequest();

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
}this.__sa();

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
(function(){var j="aborted",i="changeState",h="completed",g="failed",f="configured",e="timeout",d="changeModel",c="application/json",b="GET",a="loaded",v="qx.event.type.Data",u="error",t="receiving",s="qx.event.type.Event",r="queued",q="String",p="sending",o="_marshaler",n="__zf",m="qx.data.store.Json",k="changeUrl",l="_applyUrl";
qx.Class.define(m,{extend:qx.core.Object,construct:function(w,x){qx.core.Object.call(this);
this._marshaler=new qx.data.marshal.Json(x);
this._delegate=x;

if(w!=null){this.setUrl(w);
}},events:{"loaded":v,"error":s},properties:{model:{nullable:true,event:d},state:{check:[f,r,p,t,h,j,e,g],init:f,event:i},url:{check:q,apply:l,event:k,nullable:true}},members:{__zf:null,_delegate:null,_applyUrl:function(y,z){if(y!=null){this._createRequest(y);
}},_createRequest:function(A){this.__zf=new qx.io.remote.Request(A,b,c);
this.__zf.addListener(h,this.__zg,this);
var B=this._delegate;

if(B&&qx.lang.Type.isFunction(B.configureRequest)){this._delegate.configureRequest(this.__zf);
}this.__zf.addListener(i,function(C){var D=C.getData();
this.setState(D);

if(D===g||D===j||D===e){this.fireEvent(u);
}},this);
this.__zf.send();
},__zg:function(E){var G=E.getContent();
var F=this._delegate;

if(F&&qx.lang.Type.isFunction(F.manipulateData)){G=this._delegate.manipulateData(G);
}this._marshaler.toClass(G,true);
var H=this.getModel();
this.setModel(this._marshaler.toModel(G));
if(H&&H.dispose){H.dispose();
}this.fireDataEvent(a,this.getModel());
},reload:function(){var I=this.getUrl();

if(I!=null){this._createRequest(I);
}}},destruct:function(){this._disposeObjects(o,n);
this._delegate=null;
}});
})();
(function(){var k="error",j="?",i="&",h="loaded",g='qx.data.store.Jsonp[',f='].callback',e="failed",d="=",c="fail",b="qx.data.store.Jsonp",a="String";
qx.Class.define(b,{extend:qx.data.store.Json,construct:function(l,m,n){if(n!=undefined){this.setCallbackParam(n);
}qx.data.store.Json.call(this,l,m);
},properties:{callbackParam:{check:a,nullable:false}},members:{__zh:null,_createRequest:function(o){if(this.__zh){this.__zh.dispose();
}this.__zh=new qx.io.ScriptLoader();
var q=this._delegate;

if(q&&qx.lang.Type.isFunction(q.configureRequest)){this._delegate.configureRequest(this.__zh);
}var p=o.indexOf(j)==-1?j:i;
o+=p+this.getCallbackParam()+d;
var r=parseInt(this.toHashCode(),10);
qx.data.store.Jsonp[r]=this;
o+=g+r+f;
this.__zh.load(o,function(status){delete this[r];

if(status===c){this.fireEvent(k);
}},this);
},callback:function(s){if(this.isDisposed()){return;
}this.__zi(s);
},__zi:function(t){if(t==undefined){this.setState(e);
this.fireEvent(k);
return;
}var u=this._delegate;

if(u&&qx.lang.Type.isFunction(u.manipulateData)){t=this._delegate.manipulateData(t);
}this._marshaler.toClass(t);
this.setModel(this._marshaler.toModel(t));
this.fireDataEvent(h,this.getModel());
}},destruct:function(){if(this.__zh){this.__zh.dispose();
}this.__zh=null;
}});
})();
(function(){var l="=",k="",j="engine.name",h="&",g="application/xml",f="application/json",d="text/html",c="textarea",b="_data_",a="load",G="text/plain",F="text/javascript",E="readystatechange",D="completed",C="?",B="qx.io.remote.transport.Iframe",A="none",z="display",y="gecko",x="frame_",s="aborted",t="pre",q="javascript:void(0)",r="sending",o="form",p="failed",m="mshtml",n="form_",u="opera",v="timeout",w="qx/static/blank.gif";
qx.Class.define(B,{extend:qx.io.remote.transport.Abstract,construct:function(){qx.io.remote.transport.Abstract.call(this);
var H=(new Date).valueOf();
var I=x+H;
var J=n+H;
var K;

if((qx.core.Environment.get(j)==m)){K=q;
}this.__sb=qx.bom.Iframe.create({id:I,name:I,src:K});
qx.bom.element.Style.set(this.__sb,z,A);
this.__sc=qx.bom.Element.create(o,{id:J,name:J,target:I});
qx.bom.element.Style.set(this.__sc,z,A);
qx.dom.Element.insertEnd(this.__sc,qx.dom.Node.getBodyElement(document));
this.__sd=qx.bom.Element.create(c,{id:b,name:b});
qx.dom.Element.insertEnd(this.__sd,this.__sc);
qx.dom.Element.insertEnd(this.__sb,qx.dom.Node.getBodyElement(document));
qx.event.Registration.addListener(this.__sb,a,this._onload,this);
this.__se=qx.lang.Function.listener(this._onreadystatechange,this);
qx.bom.Event.addNativeListener(this.__sb,E,this.__se);
},statics:{handles:{synchronous:false,asynchronous:true,crossDomain:false,fileUpload:true,programaticFormFields:true,responseTypes:[G,F,f,g,d]},isSupported:function(){return true;
},_numericMap:{"uninitialized":1,"loading":2,"loaded":2,"interactive":3,"complete":4}},members:{__sd:null,__sf:0,__sc:null,__sb:null,__se:null,send:function(){var M=this.getMethod();
var O=this.getUrl();
var S=this.getParameters(false);
var R=[];

for(var N in S){var P=S[N];

if(P instanceof Array){for(var i=0;i<P.length;i++){R.push(encodeURIComponent(N)+l+encodeURIComponent(P[i]));
}}else{R.push(encodeURIComponent(N)+l+encodeURIComponent(P));
}}
if(R.length>0){O+=(O.indexOf(C)>=0?h:C)+R.join(h);
}if(this.getData()===null){var S=this.getParameters(true);
var R=[];

for(var N in S){var P=S[N];

if(P instanceof Array){for(var i=0;i<P.length;i++){R.push(encodeURIComponent(N)+l+encodeURIComponent(P[i]));
}}else{R.push(encodeURIComponent(N)+l+encodeURIComponent(P));
}}
if(R.length>0){this.setData(R.join(h));
}}var L=this.getFormFields();

for(var N in L){var Q=document.createElement(c);
Q.name=N;
Q.appendChild(document.createTextNode(L[N]));
this.__sc.appendChild(Q);
}this.__sc.action=O;
this.__sc.method=M;
this.__sd.appendChild(document.createTextNode(this.getData()));
this.__sc.submit();
this.setState(r);
},_onload:qx.event.GlobalError.observeMethod(function(e){if(qx.core.Environment.get(j)==u&&this.getIframeHtmlContent()==k){return;
}
if(this.__sc.src){return;
}this._switchReadyState(qx.io.remote.transport.Iframe._numericMap.complete);
}),_onreadystatechange:qx.event.GlobalError.observeMethod(function(e){this._switchReadyState(qx.io.remote.transport.Iframe._numericMap[this.__sb.readyState]);
}),_switchReadyState:function(T){switch(this.getState()){case D:case s:case p:case v:this.warn("Ignore Ready State Change");
return;
}while(this.__sf<T){this.setState(qx.io.remote.Exchange._nativeMap[++this.__sf]);
}},setRequestHeader:function(U,V){},getResponseHeader:function(W){return null;
},getResponseHeaders:function(){return {};
},getStatusCode:function(){return 200;
},getStatusText:function(){return k;
},getIframeWindow:function(){return qx.bom.Iframe.getWindow(this.__sb);
},getIframeDocument:function(){return qx.bom.Iframe.getDocument(this.__sb);
},getIframeBody:function(){return qx.bom.Iframe.getBody(this.__sb);
},getIframeTextContent:function(){var X=this.getIframeBody();

if(!X){return null;
}
if(!X.firstChild){return k;
}if(X.firstChild.tagName&&X.firstChild.tagName.toLowerCase()==t){return X.firstChild.innerHTML;
}else{return X.innerHTML;
}},getIframeHtmlContent:function(){var Y=this.getIframeBody();
return Y?Y.innerHTML:null;
},getFetchedLength:function(){return 0;
},getResponseContent:function(){if(this.getState()!==D){return null;
}var ba=this.getIframeTextContent();

switch(this.getResponseType()){case G:{};
return ba;
break;
case d:ba=this.getIframeHtmlContent();
{};
return ba;
break;
case f:ba=this.getIframeHtmlContent();
{};

try{return ba&&ba.length>0?qx.util.Json.parse(ba,false):null;
}catch(bb){return this.error("Could not execute json: ("+ba+")",bb);
}case F:ba=this.getIframeHtmlContent();
{};

try{return ba&&ba.length>0?window.eval(ba):null;
}catch(bc){return this.error("Could not execute javascript: ("+ba+")",bc);
}case g:ba=this.getIframeDocument();
{};
return ba;
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}}},defer:function(){qx.io.remote.Exchange.registerType(qx.io.remote.transport.Iframe,B);
},destruct:function(){if(this.__sb){qx.event.Registration.removeListener(this.__sb,a,this._onload,this);
qx.bom.Event.removeNativeListener(this.__sb,E,this.__se);
if((qx.core.Environment.get(j)==y)){this.__sb.src=qx.util.ResourceManager.getInstance().toUri(w);
}qx.dom.Element.remove(this.__sb);
}
if(this.__sc){qx.dom.Element.remove(this.__sc);
}this.__sb=this.__sc=this.__sd=null;
}});
})();
(function(){var n=",",m="",k='"',j="string",h="null",g=':',f="engine.name",e="qx.jsonDebugging",d='-',c='\\u00',Q="__rl",P="new Date(Date.UTC(",O="__rk",N="__rm",M='\\\\',L='\\f',K="__rt",J='\\"',I="))",H='T',u="}",v='(',s='.',t="{",q='\\r',r=":",o="__rj",p='\\t',w="]",x="opera",A="[",z="__ru",C="mshtml",B="qx.jsonEncodeUndefined",E='\\b',D="qx.util.Json",y='Z"',G=')',F='\\n';
qx.Class.define(D,{statics:{__rh:null,BEAUTIFYING_INDENT:"  ",BEAUTIFYING_LINE_END:"\n",CONVERT_DATES:null,__ri:{"function":o,"boolean":O,"number":Q,"string":N,"object":K,"undefined":z},NUMBER_FORMAT:new qx.util.format.NumberFormat(),__rj:function(R,S){return String(R);
},__rk:function(T,U){return String(T);
},__rl:function(V,W){return isFinite(V)?String(V):h;
},__rm:function(X,Y){var ba;

if(/["\\\x00-\x1f]/.test(X)){ba=X.replace(/([\x00-\x1f\\"])/g,qx.util.Json.__ro);
}else{ba=X;
}return k+ba+k;
},__rn:{'\b':E,'\t':p,'\n':F,'\f':L,'\r':q,'"':J,'\\':M},__ro:function(a,b){var bb=qx.util.Json.__rn[b];

if(bb){return bb;
}bb=b.charCodeAt();
return c+Math.floor(bb/16).toString(16)+(bb%16).toString(16);
},__rp:function(bc,bd){var bf=[],bi=true,bh,be;
var bg=qx.util.Json.__rw;
bf.push(A);

if(bg){qx.util.Json.__rq+=qx.util.Json.BEAUTIFYING_INDENT;
bf.push(qx.util.Json.__rq);
}
for(var i=0,l=bc.length;i<l;i++){be=bc[i];
bh=this.__ri[typeof be];

if(bh){be=this[bh](be,i+m);

if(typeof be==j){if(!bi){bf.push(n);

if(bg){bf.push(qx.util.Json.__rq);
}}bf.push(be);
bi=false;
}}}
if(bg){qx.util.Json.__rq=qx.util.Json.__rq.substring(0,qx.util.Json.__rq.length-qx.util.Json.BEAUTIFYING_INDENT.length);
bf.push(qx.util.Json.__rq);
}bf.push(w);
return bf.join(m);
},__rr:function(bj,bk){if(!qx.util.Json.CONVERT_DATES){if(bj.toJSON&&qx.core.Environment.get(f)!=x&&qx.core.Environment.get(f)!=C){return k+bj.toJSON()+k;
}var bl=this.NUMBER_FORMAT;
bl.setMinimumIntegerDigits(2);
var bn=bj.getUTCFullYear()+d+bl.format(bj.getUTCMonth()+1)+d+bl.format(bj.getUTCDate())+H+bl.format(bj.getUTCHours())+g+bl.format(bj.getUTCMinutes())+g+bl.format(bj.getUTCSeconds())+s;
bl.setMinimumIntegerDigits(3);
return k+bn+bl.format(bj.getUTCMilliseconds())+y;
}else{var bm=bj.getUTCFullYear()+n+bj.getUTCMonth()+n+bj.getUTCDate()+n+bj.getUTCHours()+n+bj.getUTCMinutes()+n+bj.getUTCSeconds()+n+bj.getUTCMilliseconds();
return P+bm+I;
}},__rs:function(bo,bp){var bs=[],bu=true,br,bq;
var bt=qx.util.Json.__rw;
bs.push(t);

if(bt){qx.util.Json.__rq+=qx.util.Json.BEAUTIFYING_INDENT;
bs.push(qx.util.Json.__rq);
}
for(var bp in bo){bq=bo[bp];
br=this.__ri[typeof bq];

if(br){bq=this[br](bq,bp);

if(typeof bq==j){if(!bu){bs.push(n);

if(bt){bs.push(qx.util.Json.__rq);
}}bs.push(this.__rm(bp),r,bq);
bu=false;
}}}
if(bt){qx.util.Json.__rq=qx.util.Json.__rq.substring(0,qx.util.Json.__rq.length-qx.util.Json.BEAUTIFYING_INDENT.length);
bs.push(qx.util.Json.__rq);
}bs.push(u);
return bs.join(m);
},__rt:function(bv,bw){if(bv){if(qx.lang.Type.isFunction(bv.toJSON)&&bv.toJSON!==this.__rh){return this.__rv(bv.toJSON(bw),bw);
}else if(qx.lang.Type.isDate(bv)){return this.__rr(bv,bw);
}else if(qx.lang.Type.isArray(bv)){return this.__rp(bv,bw);
}else if(qx.lang.Type.isObject(bv)){return this.__rs(bv,bw);
}return m;
}return h;
},__ru:function(bx,by){if(qx.core.Environment.get(B)){return h;
}},__rv:function(bz,bA){return this[this.__ri[typeof bz]](bz,bA);
},stringify:function(bB,bC){this.__rw=bC;
this.__rq=this.BEAUTIFYING_LINE_END;
var bD=this.__rv(bB,m);

if(typeof bD!=j){bD=null;
}if(qx.core.Environment.get(e)){qx.log.Logger.debug(this,"JSON request: "+bD);
}return bD;
},parse:function(bE,bF){if(bF===undefined){bF=true;
}
if(qx.core.Environment.get(e)){qx.log.Logger.debug(this,"JSON response: "+bE);
}
if(bF){if(/[^,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]/.test(bE.replace(/"(\\.|[^"\\])*"/g,m))){throw new Error("Could not parse JSON string!");
}}
try{var bG=(bE&&bE.length>0)?eval(v+bE+G):null;
return bG;
}catch(bH){throw new Error("Could not evaluate JSON string: "+bH.message);
}}},environment:{"qx.jsonEncodeUndefined":true,"qx.jsonDebugging":false},defer:function(bI){bI.__rh=Date.prototype.toJSON;
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
(function(){var t="Integer",s="aborted",r="_onaborted",q="_on",p="_applyEnabled",o="Boolean",n="sending",m="interval",l="__rX",k="failed",c="qx.io.remote.RequestQueue",j="timeout",g="completed",b="__rV",a="queued",f="io.maxrequests",d="receiving",h="singleton";
qx.Class.define(c,{type:h,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__rU=[];
this.__rV=[];
this.__rW=0;
this.__rX=new qx.event.Timer(500);
this.__rX.addListener(m,this._oninterval,this);
},properties:{enabled:{init:true,check:o,apply:p},maxTotalRequests:{check:t,nullable:true},maxConcurrentRequests:{check:t,init:qx.core.Environment.get(f)},defaultTimeout:{check:t,init:5000}},members:{__rU:null,__rV:null,__rW:null,__rX:null,getRequestQueue:function(){return this.__rU;
},getActiveQueue:function(){return this.__rV;
},_debug:function(){var u;
},_check:function(){this._debug();
if(this.__rV.length==0&&this.__rU.length==0){this.__rX.stop();
}if(!this.getEnabled()){return;
}if(this.__rU.length==0||(this.__rU[0].isAsynchronous()&&this.__rV.length>=this.getMaxConcurrentRequests())){return;
}if(this.getMaxTotalRequests()!=null&&this.__rW>=this.getMaxTotalRequests()){return;
}var v=this.__rU.shift();
var w=new qx.io.remote.Exchange(v);
this.__rW++;
this.__rV.push(w);
this._debug();
w.addListener(n,this._onsending,this);
w.addListener(d,this._onreceiving,this);
w.addListener(g,this._oncompleted,this);
w.addListener(s,this._oncompleted,this);
w.addListener(j,this._oncompleted,this);
w.addListener(k,this._oncompleted,this);
w._start=(new Date).valueOf();
w.send();
if(this.__rU.length>0){this._check();
}},_remove:function(x){qx.lang.Array.remove(this.__rV,x);
x.dispose();
this._check();
},__rY:0,_onsending:function(e){e.getTarget().getRequest()._onsending(e);
},_onreceiving:function(e){e.getTarget().getRequest()._onreceiving(e);
},_oncompleted:function(e){var z=e.getTarget().getRequest();
var y=q+e.getType();
this._remove(e.getTarget());
try{if(z[y]){z[y](e);
}}catch(A){this.error("Request "+z+" handler "+y+" threw an error: ",A);
try{if(z[r]){var event=qx.event.Registration.createEvent(s,qx.event.type.Event);
z[r](event);
}}catch(B){}}},_oninterval:function(e){var I=this.__rV;

if(I.length==0){this.__rX.stop();
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
}this.__rX.setEnabled(J);
},add:function(L){L.setState(a);

if(L.isAsynchronous()){this.__rU.push(L);
}else{this.__rU.unshift(L);
}this._check();

if(this.getEnabled()){this.__rX.start();
}},abort:function(M){var N=M.getTransport();

if(N){N.abort();
}else if(qx.lang.Array.contains(this.__rU,M)){qx.lang.Array.remove(this.__rU,M);
}}},destruct:function(){this._disposeArray(b);
this._disposeObjects(l);
this.__rU=null;
}});
})();
(function(){var r="&",q="=",p="?",o="application/json",n="completed",m="text/plain",l="text/javascript",k="qx.io.remote.transport.Script",j="",h="_ScriptTransport_data",c="script",g="timeout",f="_ScriptTransport_",b="_ScriptTransport_id",a="aborted",e="utf-8",d="failed";
qx.Class.define(k,{extend:qx.io.remote.transport.Abstract,construct:function(){qx.io.remote.transport.Abstract.call(this);
var s=++qx.io.remote.transport.Script.__sh;

if(s>=2000000000){qx.io.remote.transport.Script.__sh=s=1;
}this.__si=null;
this.__sh=s;
},statics:{__sh:0,_instanceRegistry:{},ScriptTransport_PREFIX:f,ScriptTransport_ID_PARAM:b,ScriptTransport_DATA_PARAM:h,handles:{synchronous:false,asynchronous:true,crossDomain:true,fileUpload:false,programaticFormFields:false,responseTypes:[m,l,o]},isSupported:function(){return true;
},_numericMap:{"uninitialized":1,"loading":2,"loaded":2,"interactive":3,"complete":4},_requestFinished:qx.event.GlobalError.observeMethod(function(t,content){var u=qx.io.remote.transport.Script._instanceRegistry[t];

if(u==null){}else{u._responseContent=content;
u._switchReadyState(qx.io.remote.transport.Script._numericMap.complete);
}})},members:{__sj:0,__si:null,__sh:null,send:function(){var x=this.getUrl();
x+=(x.indexOf(p)>=0?r:p)+qx.io.remote.transport.Script.ScriptTransport_ID_PARAM+q+this.__sh;
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
}qx.io.remote.transport.Script._instanceRegistry[this.__sh]=this;
this.__si=document.createElement(c);
this.__si.charset=e;
this.__si.src=x;
document.body.appendChild(this.__si);
},_switchReadyState:function(B){switch(this.getState()){case n:case a:case d:case g:this.warn("Ignore Ready State Change");
return;
}while(this.__sj<B){this.setState(qx.io.remote.Exchange._nativeMap[++this.__sj]);
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
},destruct:function(){if(this.__si){delete qx.io.remote.transport.Script._instanceRegistry[this.__sh];
document.body.removeChild(this.__si);
}this.__si=this._responseContent=null;
}});
})();
(function(){var k="value",j=" ",h="icon",g="model",f="text",e="source",d="mshtml",c="engine.name",b="user.profile_image_url",a="showcase/databinding/twitter_logo_outline.png",K="Enter",J="one",I="http",H="keydown",G="http://twitter.com/statuses/user_timeline/1and1.json",F="<a href='",E="execute",D="1and1",C="callback",B="selection[0]",r="username",s="showcase.page.databinding.Content",p="Location: ",q="Details",n="user.name",o="Name: ",l="target='_blank'",m="</a>",t="Posted with: ",u="' target='_blank'>",w="Show",v="user.location",y=".json",x="http://twitter.com/statuses/user_timeline/",A="Avatar: ",z="Message: ";
qx.Class.define(s,{extend:showcase.AbstractContent,construct:function(L){showcase.AbstractContent.call(this,L);
this.setView(this._createView());
},members:{_createView:function(){var ba=new qx.ui.container.Composite(new qx.ui.layout.Canvas());
var V=new qx.ui.basic.Image(a);
ba.add(V,{left:10,top:15});
var Q=new qx.ui.form.List();
ba.add(Q,{left:10,top:135,bottom:5});
Q.set({selectionMode:J,width:300,maxHeight:400});
var T=new qx.data.controller.List(null,Q);
T.setDelegate(this);
T.setLabelPath(f);
if(qx.core.Environment.get(c)!=d){T.setIconPath(b);
}var O=G;
var Y=new qx.data.store.Jsonp(O,null,C);
Y.bind(g,T,g);
var R=new qx.ui.container.Composite(new qx.ui.layout.HBox(5));
R.set({width:300});
R.add(new qx.ui.core.Spacer(),{flex:1});
var M=new qx.ui.form.TextField(D);
M.setPlaceholder(r);
R.add(M);
var U=new qx.ui.form.Button(w);
R.add(U);
U.addListener(E,function(){var bb=x+M.getValue()+y;

if(Y.getUrl()==bb){Y.reload();
}else{Y.setUrl(bb);
}},this);
M.addListener(H,function(bc){if(bc.getKeyIdentifier()==K){U.execute();
}},this);
ba.add(R,{left:10,top:105});
var P=new qx.ui.groupbox.GroupBox(q);
ba.add(P,{left:320,top:116,bottom:5});
P.setWidth(270);
P.setHeight(220);
P.setAllowGrowY(false);
P.setLayout(new qx.ui.layout.Grid(5,5));
P.add(new qx.ui.basic.Label(o),{row:0,column:0});
P.add(new qx.ui.basic.Label(p),{row:1,column:0});
P.add(new qx.ui.basic.Label(z),{row:2,column:0});
P.add(new qx.ui.basic.Label(t),{row:3,column:0});
var name=new qx.ui.basic.Label();
P.add(name,{row:0,column:1});
var location=new qx.ui.basic.Label();
P.add(location,{row:1,column:1});
var W=new qx.ui.basic.Label();
W.setRich(true);
W.setWidth(150);
W.setSelectable(true);
P.add(W,{row:2,column:1});
var X=new qx.ui.basic.Label();
X.setRich(true);
P.add(X,{row:3,column:1});
var N=new qx.data.controller.Object();
N.addTarget(name,k,n);
N.addTarget(location,k,v);
N.addTarget(W,k,f,false,{converter:function(bd){var be=bd.split(j);

for(var i=be.length-1;i>=0;i--){if(be[i].indexOf(I)==0){be[i]=F+be[i]+u+be[i]+m;
}}return be.join(j);
}});
N.addTarget(X,k,e,false,{converter:function(bf){bf=bf.split(j);
bf.splice(1,0,l);
return bf.join(j);
}});

if(qx.core.Environment.get(c)!=d){P.add(new qx.ui.basic.Label(A),{row:4,column:0});
var S=new qx.ui.basic.Image();
P.add(S,{row:4,column:1});
N.addTarget(S,e,b);
}T.bind(B,N,g);
return ba;
},configureItem:function(bg){bg.setRich(true);
bg.getChildControl(h).setWidth(48);
bg.getChildControl(h).setHeight(48);
bg.getChildControl(h).setScale(true);
}}});
})();
(function(){var m="failed",k="completed",j="=",h="aborted",g="sending",f="",d="&",c="engine.name",b="configured",a="timeout",L="application/xml",K="qx.io.remote.transport.XmlHttp",J="application/json",I="text/html",H="receiving",G="text/plain",F="text/javascript",E="?",D="created",C="Boolean",u='Referer',v="engine.version",r='Basic ',t="\n</pre>",p="string",q='Authorization',n="<pre>Could not execute json: \n",o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",w="mshtml",x=':',z="parseerror",y="file:",B="webkit",A="object";
qx.Class.define(K,{extend:qx.io.remote.transport.Abstract,statics:{handles:{synchronous:true,asynchronous:true,crossDomain:false,fileUpload:false,programaticFormFields:false,responseTypes:[G,F,J,L,I]},createRequestObject:qx.core.Environment.select(c,{"default":function(){return new XMLHttpRequest;
},"mshtml":function(){if(window.ActiveXObject&&qx.xml.Document.XMLHTTP){return new ActiveXObject(qx.xml.Document.XMLHTTP);
}
if(window.XMLHttpRequest){return new XMLHttpRequest;
}}}),isSupported:function(){return !!this.createRequestObject();
}},properties:{parseJson:{check:C,init:true}},members:{__sk:false,__sl:0,__sm:null,getRequest:function(){if(this.__sm===null){this.__sm=qx.io.remote.transport.XmlHttp.createRequestObject();
this.__sm.onreadystatechange=qx.lang.Function.bind(this._onreadystatechange,this);
}return this.__sm;
},send:function(){this.__sl=0;
var Q=this.getRequest();
var M=this.getMethod();
var T=this.getAsynchronous();
var S=this.getUrl();
var O=(window.location.protocol===y&&!(/^http(s){0,1}\:/.test(S)));
this.__sk=O;
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

if(bk==4){if(!qx.io.remote.Exchange.wasSuccessful(this.getStatusCode(),bk,this.__sk)){if(this.getState()===b){this.setState(g);
}this.failed();
return;
}}if(bk==3&&this.__sl==1){this.setState(qx.io.remote.Exchange._nativeMap[++this.__sl]);
}while(this.__sl<bk){this.setState(qx.io.remote.Exchange._nativeMap[++this.__sl]);
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

if(qx.io.remote.Exchange.wasSuccessful(bF,bG,this.__sk)){try{bH=this.getRequest().responseXML;
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

if(this.getParseJson()){bL=qx.util.Json.parse(bM,false);
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
}}this.__sm=null;
}});
})();
(function(){var k="Boolean",j="qx.event.type.Event",i="queued",h="String",g="sending",f="receiving",d="aborted",c="failed",b="nocache",a="completed",P="qx.io.remote.Response",O="POST",N="configured",M="timeout",L="GET",K="Pragma",J="no-url-params-on-post",I="PUT",H="no-cache",G="Cache-Control",r="Content-Type",s="text/plain",p="application/xml",q="application/json",n="text/html",o="application/x-www-form-urlencoded",l="qx.io.remote.Exchange",m="Integer",t="X-Qooxdoo-Response-Type",u="HEAD",y="qx.io.remote.Request",x="_applyResponseType",A="_applyState",z="text/javascript",C="changeState",B="_applyProhibitCaching",w="",F="_applyMethod",E="DELETE",D="boolean";
qx.Class.define(y,{extend:qx.core.Object,construct:function(Q,R,S){qx.core.Object.call(this);
this.__rO={};
this.__rP={};
this.__rQ={};
this.__rR={};

if(Q!==undefined){this.setUrl(Q);
}
if(R!==undefined){this.setMethod(R);
}
if(S!==undefined){this.setResponseType(S);
}this.setProhibitCaching(true);
this.__rS=++qx.io.remote.Request.__rS;
},events:{"created":j,"configured":j,"sending":j,"receiving":j,"completed":P,"aborted":j,"failed":P,"timeout":P},statics:{__rS:0,methodAllowsRequestBody:function(T){return (T==O)||(T==I);
}},properties:{url:{check:h,init:w},method:{check:[L,O,I,u,E],apply:F,init:L},asynchronous:{check:k,init:true},data:{check:h,nullable:true},username:{check:h,nullable:true},password:{check:h,nullable:true},state:{check:[N,i,g,f,a,d,M,c],init:N,apply:A,event:C},responseType:{check:[s,z,q,p,n],init:s,apply:x},timeout:{check:m,nullable:true},prohibitCaching:{check:function(v){return typeof v==D||v===J;
},init:true,apply:B},crossDomain:{check:k,init:false},fileUpload:{check:k,init:false},transport:{check:l,nullable:true},useBasicHttpAuth:{check:k,init:false},parseJson:{check:k,init:true}},members:{__rO:null,__rP:null,__rQ:null,__rR:null,__rS:null,send:function(){qx.io.remote.RequestQueue.getInstance().add(this);
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
},__rT:qx.event.GlobalError.observeMethod(function(e){var U=e.clone();
U.setTarget(this);
this.dispatchEvent(U);
}),_onqueued:function(e){this.setState(i);
this.__rT(e);
},_onsending:function(e){this.setState(g);
this.__rT(e);
},_onreceiving:function(e){this.setState(f);
this.__rT(e);
},_oncompleted:function(e){this.setState(a);
this.__rT(e);
this.dispose();
},_onaborted:function(e){this.setState(d);
this.__rT(e);
this.dispose();
},_ontimeout:function(e){this.setState(M);
this.__rT(e);
this.dispose();
},_onfailed:function(e){this.setState(c);
this.__rT(e);
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
},setRequestHeader:function(bf,bg){this.__rO[bf]=bg;
},removeRequestHeader:function(bh){delete this.__rO[bh];
},getRequestHeader:function(bi){return this.__rO[bi]||null;
},getRequestHeaders:function(){return this.__rO;
},setParameter:function(bj,bk,bl){if(bl){this.__rQ[bj]=bk;
}else{this.__rP[bj]=bk;
}},removeParameter:function(bm,bn){if(bn){delete this.__rQ[bm];
}else{delete this.__rP[bm];
}},getParameter:function(bo,bp){if(bp){return this.__rQ[bo]||null;
}else{return this.__rP[bo]||null;
}},getParameters:function(bq){return (bq?this.__rQ:this.__rP);
},setFormField:function(br,bs){this.__rR[br]=bs;
},removeFormField:function(bt){delete this.__rR[bt];
},getFormField:function(bu){return this.__rR[bu]||null;
},getFormFields:function(){return this.__rR;
},getSequenceNumber:function(){return this.__rS;
}},destruct:function(){this.setTransport(null);
this.__rO=this.__rP=this.__rQ=this.__rR=null;
}});
})();
(function(){var h="[",g="changeModel",f="qx.core.Object",e="qx.data.controller.Object",d="get",c="reset",b="_applyModel",a="last";
qx.Class.define(e,{extend:qx.core.Object,construct:function(j){qx.core.Object.call(this);
this.__zj={};
this.__zk=[];

if(j!=null){this.setModel(j);
}},properties:{model:{check:f,event:g,apply:b,nullable:true,dereference:true}},members:{__zk:null,__zj:null,_applyModel:function(k,l){for(var i=0;i<this.__zk.length;i++){var t=this.__zk[i][0];
var q=this.__zk[i][1];
var o=this.__zk[i][2];
var r=this.__zk[i][3];
var s=this.__zk[i][4];
var n=this.__zk[i][5];
if(l!=undefined&&!l.isDisposed()){this.__zm(t,q,o,l);
}if(k!=undefined){this.__zl(t,q,o,r,s,n);
}else{if(t.isDisposed()||qx.core.ObjectRegistry.inShutDown){continue;
}if(q.indexOf(h)==-1){t[c+qx.lang.String.firstUp(q)]();
}else{var open=q.indexOf(h);
var m=parseInt(q.substring(open+1,q.length-1),10);
q=q.substring(0,open);
var p=t[d+qx.lang.String.firstUp(q)]();

if(m==a){m=p.length;
}
if(p){p.setItem(m,null);
}}}}},addTarget:function(u,v,w,x,y,z){this.__zk.push([u,v,w,x,y,z]);
this.__zl(u,v,w,x,y,z);
},__zl:function(A,B,C,D,E,F){if(this.getModel()==null){return;
}var G=this.getModel().bind(C,A,B,E);
var H=null;

if(D){H=A.bind(B,this.getModel(),C,F);
}var I=A.toHashCode();

if(this.__zj[I]==undefined){this.__zj[I]=[];
}this.__zj[I].push([G,H,B,C,E,F]);
},removeTarget:function(J,K,L){this.__zm(J,K,L,this.getModel());
for(var i=0;i<this.__zk.length;i++){if(this.__zk[i][0]==J&&this.__zk[i][1]==K&&this.__zk[i][2]==L){this.__zk.splice(i,1);
}}},__zm:function(M,N,O,P){if(!(M instanceof qx.core.Object)){return ;
}var Q=this.__zj[M.toHashCode()];
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