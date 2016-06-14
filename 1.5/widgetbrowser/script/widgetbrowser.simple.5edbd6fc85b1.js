qx.$$packageData['128']={"locales":{},"resources":{"qx/static/blank.gif":[1,1,"gif","qx"],"widgetbrowser/people.json":"widgetbrowser"},"translations":{}};
qx.Part.$$notifyLoad("128", function() {
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
(function(){var a="qx.ui.list.provider.IListProvider";
qx.Interface.define(a,{members:{createLayer:function(){},createItemRenderer:function(){},createGroupRenderer:function(){},styleSelectabled:function(b){},styleUnselectabled:function(c){},isSelectable:function(d){},setLabelPath:function(e){},setIconPath:function(f){},setLabelOptions:function(g){},setIconOptions:function(h){},setDelegate:function(i){},removeBindings:function(){}}});
})();
(function(){var a="qx.ui.virtual.core.IWidgetCellProvider";
qx.Interface.define(a,{members:{getCellWidget:function(b,c){},poolCellWidget:function(d){}}});
})();
(function(){var k="cell.type",j="String",i="model",h="",g="changeDelegate",f="label",d="qx.ui.list.core.MWidgetController",c="icon",b="value",a="group";
qx.Mixin.define(d,{construct:function(){this.__AB=[];
},properties:{labelPath:{check:j,nullable:true},iconPath:{check:j,nullable:true},groupLabelPath:{check:j,nullable:true},labelOptions:{nullable:true},iconOptions:{nullable:true},groupLabelOptions:{nullable:true},delegate:{event:g,init:null,nullable:true}},members:{__AB:null,bindDefaultProperties:function(l,m){if(l.getUserData(k)!=a){this.bindProperty(h,i,null,l,m);
this.bindProperty(this.getLabelPath(),f,this.getLabelOptions(),l,m);

if(this.getIconPath()!=null){this.bindProperty(this.getIconPath(),c,this.getIconOptions(),l,m);
}}else{this.bindProperty(this.getGroupLabelPath(),b,this.getGroupLabelOptions(),l,m);
}},bindProperty:function(n,o,p,q,r){var t=q.getUserData(k);
var s=this.__AC(r,n,t);
var u=this._list.bind(s,q,o,p);
this.__rt(q,u);
},bindPropertyReverse:function(v,w,x,y,z){var B=y.getUserData(k);
var A=this.__AC(z,v,B);
var C=y.bind(w,this._list,A,x);
this.__rt(y,C);
},removeBindings:function(){while(this.__AB.length>0){var D=this.__AB.pop();
this._removeBindingsFrom(D);
}},_configureItem:function(E){var F=this.getDelegate();

if(F!=null&&F.configureItem!=null){F.configureItem(E);
}},_configureGroupItem:function(G){var H=this.getDelegate();

if(H!=null&&H.configureGroupItem!=null){H.configureGroupItem(G);
}},_bindItem:function(I,J){var K=this.getDelegate();

if(K!=null&&K.bindItem!=null){K.bindItem(this,I,J);
}else{this.bindDefaultProperties(I,J);
}},_bindGroupItem:function(L,M){var N=this.getDelegate();

if(N!=null&&N.bindGroupItem!=null){N.bindGroupItem(this,L,M);
}else{this.bindDefaultProperties(L,M);
}},_removeBindingsFrom:function(O){var P=this.__AD(O);

while(P.length>0){var Q=P.pop();

try{this._list.removeBinding(Q);
}catch(e){O.removeBinding(Q);
}}
if(qx.lang.Array.contains(this.__AB,O)){qx.lang.Array.remove(this.__AB,O);
}},__AC:function(R,S,T){var U="model["+R+"]";

if(T=="group"){U="groups["+R+"]";
}
if(S!=null&&S!=""){U+="."+S;
}return U;
},__rt:function(V,W){var X=this.__AD(V);

if(!qx.lang.Array.contains(X,W)){X.push(W);
}
if(!qx.lang.Array.contains(this.__AB,V)){this.__AB.push(V);
}},__AD:function(Y){var ba=Y.getUserData("BindingIds");

if(ba==null){ba=[];
Y.setUserData("BindingIds",ba);
}return ba;
}},destruct:function(){this.__AB=null;
}});
})();
(function(){var i="cell.type",h="created",g="item",f="group",e="changeDelegate",d="qx.ui.list.provider.WidgetProvider",c="createItem",b="group-item",a="createGroupItem";
qx.Class.define(d,{extend:qx.core.Object,implement:[qx.ui.virtual.core.IWidgetCellProvider,qx.ui.list.provider.IListProvider],include:[qx.ui.list.core.MWidgetController],construct:function(j){qx.core.Object.call(this);
this._list=j;
this._itemRenderer=this.createItemRenderer();
this._groupRenderer=this.createGroupRenderer();
this._itemRenderer.addListener(h,this._onItemCreated,this);
this._groupRenderer.addListener(h,this._onGroupItemCreated,this);
this._list.addListener(e,this._onChangeDelegate,this);
},members:{_itemRenderer:null,_groupRenderer:null,getCellWidget:function(k,l){var m=null;

if(!this._list._isGroup(k)){m=this._itemRenderer.getCellWidget();
m.setUserData(i,g);
this._bindItem(m,this._list._lookup(k));

if(this._list._manager.isItemSelected(k)){this._styleSelectabled(m);
}else{this._styleUnselectabled(m);
}}else{m=this._groupRenderer.getCellWidget();
m.setUserData(i,f);
this._bindGroupItem(m,this._list._lookupGroup(k));
}return m;
},poolCellWidget:function(n){this._removeBindingsFrom(n);

if(n.getUserData(i)==g){this._itemRenderer.pool(n);
}else if(n.getUserData(i)==f){this._groupRenderer.pool(n);
}},createLayer:function(){return new qx.ui.virtual.layer.WidgetCell(this);
},createItemRenderer:function(){var o=qx.util.Delegate.getMethod(this.getDelegate(),c);

if(o==null){o=function(){return new qx.ui.form.ListItem();
};
}var p=new qx.ui.virtual.cell.WidgetCell();
p.setDelegate({createWidget:o});
return p;
},createGroupRenderer:function(){var q=qx.util.Delegate.getMethod(this.getDelegate(),a);

if(q==null){q=function(){var s=new qx.ui.basic.Label();
s.setAppearance(b);
return s;
};
}var r=new qx.ui.virtual.cell.WidgetCell();
r.setDelegate({createWidget:q});
return r;
},styleSelectabled:function(t){var u=this.__AE(t);
this._styleSelectabled(u);
},styleUnselectabled:function(v){var w=this.__AE(v);
this._styleUnselectabled(w);
},isSelectable:function(x){if(this._list._isGroup(x)){return false;
}var y=this._list._layer.getRenderedCellWidget(x,0);

if(y!=null){return y.isEnabled();
}else{return true;
}},_styleSelectabled:function(z){this.__AF(z,{selected:1});
},_styleUnselectabled:function(A){this.__AF(A,{});
},_onItemCreated:function(event){var B=event.getData();
this._configureItem(B);
},_onGroupItemCreated:function(event){var C=event.getData();
this._configureGroupItem(C);
},_onChangeDelegate:function(event){this._itemRenderer.dispose();
this._itemRenderer=this.createItemRenderer();
this._itemRenderer.addListener(h,this._onItemCreated,this);
this._groupRenderer.dispose();
this._groupRenderer=this.createGroupRenderer();
this._groupRenderer.addListener(h,this._onGroupItemCreated,this);
this.removeBindings();
this._list.getPane().fullUpdate();
},__AE:function(D){return this._list._layer.getRenderedCellWidget(D,0);
},__AF:function(E,F){if(E==null){return;
}this._itemRenderer.updateStates(E,F);
}},destruct:function(){this._itemRenderer.dispose();
this._groupRenderer.dispose();
this._itemRenderer=this._groupRenderer=null;
}});
})();
(function(){var a="qx.data.marshal.IMarshaler";
qx.Interface.define(a,{members:{toClass:function(b,c){},toModel:function(d){}}});
})();
(function(){var k="qx.data.model.",j="",h="Array",g="_validate",f='"',e="qx.debug.databinding",d="change",c="qx.data.marshal.Json",b="set",a="_applyEventPropagation";
qx.Class.define(c,{extend:qx.core.Object,implement:[qx.data.marshal.IMarshaler],construct:function(l){qx.core.Object.call(this);
this.__na=l;
},statics:{__dN:null,createModel:function(m,n){if(this.__dN===null){this.__dN=new qx.data.marshal.Json();
}this.__dN.toClass(m,n);
return this.__dN.toModel(m);
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
}if(qx.Class.implementsInterface(C,qx.data.IListData)){for(var i=0;i<C.getLength();i++){this.__nc(C.getItem(i));
}}C.dispose();
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
(function(){var p="Boolean",o="change",n="single",m="changeSelection",l="qx.ui.list.core.MSelectionHandling",k="one",j="_applyDragSelection",h="qx.data.Array",g="multi",f="selected",b="_applySelection",d="_applyQuickSelection",c="_applySelectionMode",a="additive";
qx.Mixin.define(l,{construct:function(){this._initSelectionManager();
this.initSelection(new qx.data.Array());
},properties:{selection:{check:h,event:m,apply:b,nullable:false,deferredInit:true},selectionMode:{check:[n,g,a,k],init:n,apply:c},dragSelection:{check:p,init:false,apply:j},quickSelection:{check:p,init:false,apply:d}},members:{_manager:null,__AV:false,__AW:false,_updateSelection:function(){if(this._manager==null){return;
}var r=this.getSelection();
var q=this.getModel();
this.__AW=true;

for(var i=r.getLength()-1;i>=0;i--){if(!q.contains(r.getItem(i))){r.removeAt(i);
}}this.__AW=false;
this._onChangeSelection();
},_initSelectionManager:function(){var self=this;
var s={isItemSelectable:function(t){return self._provider.isSelectable(t);
},styleSelectable:function(u,v,w){if(v!=f){return;
}
if(w){self._provider.styleSelectabled(u);
}else{self._provider.styleUnselectabled(u);
}}};
this._manager=new qx.ui.virtual.selection.Row(this.getPane(),s);
this._manager.attachMouseEvents(this.getPane());
this._manager.attachKeyEvents(this);
this._manager.addListener(m,this._onManagerChangeSelection,this);
this._manager._applyDefaultSelection();
},_applySelection:function(x,y){x.addListener(o,this._onChangeSelection,this);

if(y!=null){y.removeListener(o,this._onChangeSelection,this);
}this._onChangeSelection();
},_applySelectionMode:function(z,A){this._manager.setMode(z);
},_applyDragSelection:function(B,C){this._manager.setDrag(B);
},_applyQuickSelection:function(D,E){this._manager.setQuick(D);
},_onChangeSelection:function(e){if(this.__AW==true){return;
}this.__AV=true;
var G=this.getSelection();
var I=[];

for(var i=0;i<G.getLength();i++){var H=G.getItem(i);
var F=this.getModel().indexOf(H);
var J=this._reverseLookup(F);

if(J>=0){I.push(J);
}}
try{this._manager.replaceSelection(I);
}catch(e){this._manager.selectItem(I[I.length-1]);
}this.__AQ();
this.__AV=false;
},_onManagerChangeSelection:function(e){if(this.__AV==true){return;
}var K=e.getData();
var M=[];

for(var i=0;i<K.length;i++){M.push(this._getDataFromRow(K[i]));
}this.__AW=true;
var N=this.getSelection();

if(M.length>0){var L=[0,N.getLength()];
L=L.concat(M);
N.splice.apply(N,L);
}else{N.removeAll();
}this.__AW=false;
},__AQ:function(){var P=this.getSelection();
var O=P.toArray();
var Q=this._manager.getSelection();
qx.lang.Array.removeAll(O);

for(var i=0;i<Q.length;i++){O.push(this._getDataFromRow(Q[i]));
}P.length=O.length;
},_applyDefaultSelection:function(){if(this._manager!=null){this._manager._applyDefaultSelection();
}}},destruct:function(){this._manager.dispose();
this._manager=null;
}});
})();
(function(){var f="pane",d="scrollY",c="qx.ui.virtual.core.Scroller",b="update",a="scrollX";
qx.Class.define(c,{extend:qx.ui.core.scroll.AbstractScrollArea,construct:function(g,h,i,j){qx.ui.core.scroll.AbstractScrollArea.call(this);
this.__AX=new qx.ui.virtual.core.Pane(g,h,i,j);
this.__AX.addListener(b,this._computeScrollbars,this);
this.__AX.addListener(a,this._onScrollPaneX,this);
this.__AX.addListener(d,this._onScrollPaneY,this);
this._add(this.__AX,{row:0,column:0});
},properties:{width:{refine:true,init:null},height:{refine:true,init:null}},members:{__AX:null,getPane:function(){return this.__AX;
},_createChildControlImpl:function(k,l){if(k==f){return this.__AX;
}else{return qx.ui.core.scroll.AbstractScrollArea.prototype._createChildControlImpl.call(this,k);
}},getItemTop:function(m){throw new Error("The method 'getItemTop' is not implemented!");
},getItemBottom:function(n){throw new Error("The method 'getItemBottom' is not implemented!");
},getItemLeft:function(o){throw new Error("The method 'getItemLeft' is not implemented!");
},getItemRight:function(p){throw new Error("The method 'getItemRight' is not implemented!");
},_onScrollBarX:function(e){this.__AX.setScrollX(e.getData());
},_onScrollBarY:function(e){this.__AX.setScrollY(e.getData());
}},destruct:function(){this.__AX.dispose();
this.__AX=null;
}});
})();
(function(){var p="String",o="qx.data.Array",n="change",m="row-layer",j="group",h="changeModel",g="resize",f="_applyLabelOptions",d="_applyLabelPath",c="_applyGroupLabelOptions",E="filter",D="Integer",C="_applyModel",B="changeGroups",A="Boolean",z="sorter",y="_applyIconPath",x="_applyDelegate",w="changeDelegate",v="???",t="_applyRowHeight",u="virtual-list",r="_applyGroupLabelPath",s="_applyIconOptions",q="qx.ui.list.List";
qx.Class.define(q,{extend:qx.ui.virtual.core.Scroller,include:[qx.ui.list.core.MSelectionHandling],construct:function(F){qx.ui.virtual.core.Scroller.call(this,0,1,20,100);
this._init();
this.initGroups(new qx.data.Array());

if(F!=null){this.initModel(F);
}else{this.initModel(new qx.data.Array());
}this.initItemHeight();
},properties:{appearance:{refine:true,init:u},focusable:{refine:true,init:true},width:{refine:true,init:100},height:{refine:true,init:200},model:{check:o,apply:C,event:h,nullable:false,deferredInit:true},itemHeight:{check:D,init:25,apply:t,themeable:true},labelPath:{check:p,apply:d,nullable:true},iconPath:{check:p,apply:y,nullable:true},groupLabelPath:{check:p,apply:r,nullable:true},labelOptions:{apply:f,nullable:true},iconOptions:{apply:s,nullable:true},groupLabelOptions:{apply:c,nullable:true},delegate:{apply:x,event:w,init:null,nullable:true},autoGrouping:{check:A,init:true},groups:{check:o,event:B,nullable:false,deferredInit:true}},members:{_background:null,_provider:null,_layer:null,__nB:null,__AY:null,__Ba:null,__Bb:false,__Bc:false,__Bd:false,refresh:function(){this.__nQ();
},_createChildControlImpl:function(G,H){var I;

switch(G){case m:I=new qx.ui.virtual.layer.Row(null,null);
break;
}return I||qx.ui.virtual.core.Scroller.prototype._createChildControlImpl.call(this,G);
},_init:function(){this._provider=new qx.ui.list.provider.WidgetProvider(this);
this.__nB=[];
this.__AY=[];
this.__Ba={};
this.__Bb=false;
this.__Bc=false;
this.__Bd=false;
this.getPane().addListener(g,this._onResize,this);
this._initBackground();
this._initLayer();
},_initBackground:function(){this._background=this.getChildControl(m);
this.getPane().addLayer(this._background);
},_initLayer:function(){this._layer=this._provider.createLayer();
this.getPane().addLayer(this._layer);
},_getDataFromRow:function(J){var K=null;

if(this._isGroup(J)){K=this.getGroups().getItem(this._lookupGroup(J));
}else{K=this.getModel().getItem(this._lookup(J));
}
if(K!=null){return K;
}else{return null;
}},_getLookupTable:function(){return this.__nB;
},_lookup:function(L){return this.__nB[L];
},_lookupGroup:function(M){return this.__AY.indexOf(M);
},_reverseLookup:function(N){return this.__nB.indexOf(N);
},_isGroup:function(O){return this._lookup(O)==-1;
},_applyModel:function(P,Q){P.addListener(n,this._onModelChange,this);

if(Q!=null){Q.removeListener(n,this._onModelChange,this);
}this._provider.removeBindings();
this._onModelChange();
},_applyRowHeight:function(R,S){this.getPane().getRowConfig().setDefaultItemSize(R);
},_applyLabelPath:function(T,U){this._provider.setLabelPath(T);
},_applyIconPath:function(V,W){this._provider.setIconPath(V);
},_applyGroupLabelPath:function(X,Y){this._provider.setGroupLabelPath(X);
},_applyLabelOptions:function(ba,bb){this._provider.setLabelOptions(ba);
},_applyIconOptions:function(bc,bd){this._provider.setIconOptions(bc);
},_applyGroupLabelOptions:function(be,bf){this._provider.setGroupLabelOptions(be);
},_applyDelegate:function(bg,bh){this._provider.setDelegate(bg);
this.__nQ();
},_onResize:function(e){this.getPane().getColumnConfig().setItemSize(0,e.getData().width);
},_onModelChange:function(e){this.__nQ();
this._applyDefaultSelection();
},__Be:function(){this.getPane().getRowConfig().setItemCount(this.__nB.length);
this.getPane().fullUpdate();
},__nQ:function(){this.__nB=[];
this.__AY=[];
this.__Ba={};

if(this.isAutoGrouping()){this.getGroups().removeAll();
}var bi=this.getModel();

if(bi==null){return;
}this._runDelegateFilter(bi);
this._runDelegateSorter(bi);
this._runDelegateGroup(bi);
this._updateSelection();
this.__Be();
},_runDelegateFilter:function(bj){var bk=qx.util.Delegate.getMethod(this.getDelegate(),E);

for(var i=0,l=bj.length;i<l;++i){if(bk==null||bk(bj.getItem(i))){this.__nB.push(i);
}}},_runDelegateSorter:function(bl){if(this.__nB.length==0){return;
}var bm=qx.util.Delegate.getMethod(this.getDelegate(),z);

if(bm!=null){this.__nB.sort(function(a,b){return bm(bl.getItem(a),bl.getItem(b));
});
}},_runDelegateGroup:function(bn){var br=qx.util.Delegate.getMethod(this.getDelegate(),j);

if(br!=null){for(var i=0,l=this.__nB.length;i<l;++i){var bo=this.__nB[i];
var bq=this.getModel().getItem(bo);
var bp=br(bq);
this.__Bf(bp,bo);
}this.__nB=this.__Bg();
}},__Bf:function(bs,bt){if(bs==null){this.__Bd=true;
bs=v;
}var name=this.__Bh(bs);

if(this.__Ba[name]==null){this.__Ba[name]=[];

if(this.isAutoGrouping()){this.getGroups().push(bs);
}}this.__Ba[name].push(bt);
},__Bg:function(){this.__Bi();
var bx=[];
var bz=0;
var bv=this.getGroups();

for(var i=0;i<bv.getLength();i++){var bu=bv.getItem(i);
bx.push(-1);
this.__AY.push(bz);
bz++;
var by=this.__Bh(bu);
var bw=this.__Ba[by];

if(bw!=null){for(var k=0;k<bw.length;k++){bx.push(bw[k]);
bz++;
}}}return bx;
},__Bh:function(bA){var name=null;

if(!qx.lang.Type.isString(bA)){var bB=this.getGroups().indexOf(bA);
this.__Bc=true;
name=j;

if(bB==-1){name+=this.getGroups().getLength();
}else{name+=bB;
}}else{this.__Bb=true;
var name=bA;
}return name;
},__Bi:function(){if(this.__Bc&&this.__Bd||this.__Bc&&this.__Bb){throw new Error("GroupingTypeError: You can't mix 'Objects' and 'Strings' as"+" group identifier!");
}}},destruct:function(){this._background.dispose();
this._provider.dispose();
this._layer.dispose();
this._background=this._provider=this._layer=this.__nB=this.__AY=this.__Ba=null;
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
}},destruct:function(){this._disposeObjects(n,o);
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
(function(){var j="qx.event.type.Event",i="qx.debug.io",h="fail",g="GET",f="qx.event.type.Data",e="Map",d="qx.io.request.AbstractRequest",c="changePhase",b="sent",a="qx.io.request.authentication.IAuthentication",C="error",B="loadend",A="loading",z="load",y="abort",x="success",w="String",v="",u="opened",t="POST",q="statusError",r="readyStateChange",o="abstract",p="unsent",m="changeResponse",n="Number",k="Content-Type",l="timeout",s="undefined";
qx.Class.define(d,{type:o,extend:qx.core.Object,construct:function(D){qx.core.Object.call(this);

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
},events:{"readyStateChange":j,"success":j,"load":j,"loadend":j,"abort":j,"timeout":j,"error":j,"statusError":j,"fail":j,"changeResponse":f,"changePhase":f},properties:{url:{check:w},requestHeaders:{check:e,nullable:true},timeout:{check:n,nullable:true,init:0},requestData:{check:function(F){return qx.lang.Type.isString(F)||qx.Class.isSubClassOf(F.constructor,qx.core.Object)||qx.lang.Type.isObject(F);
},nullable:true},authentication:{check:a,nullable:true}},members:{__nq:null,__nr:null,__ns:null,__nt:null,__mJ:null,__nu:null,__nv:null,__nw:null,_transport:null,_createTransport:function(){throw new Error("Abstract method call");
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
this._setPhase(b);
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

if(P===3){this._setPhase(A);
}
if(this.isDone()){if(qx.core.Environment.get(i)){this.debug("Request completed with HTTP status: "+this.getStatus());
}if(qx.bom.request.Xhr.isSuccessful(this.getStatus())){if(qx.core.Environment.get(i)){this.debug("Response is of type: '"+this.getResponseContentType()+"'");
}O=this._getParsedResponse();
this._setResponse(O);
this._fireStatefulEvent(x);
}else{this._fireStatefulEvent(q);
this.fireEvent(h);
}}},_onLoad:function(){this.fireEvent(z);
},_onLoadEnd:function(){this.fireEvent(B);
},_onAbort:function(){this._fireStatefulEvent(y);
},_onTimeout:function(){this._fireStatefulEvent(l);
this.fireEvent(h);
},_onError:function(){this.fireEvent(C);
this.fireEvent(h);
},_fireStatefulEvent:function(Q){this._setPhase(Q);
this.fireEvent(Q);
},_setPhase:function(R){var S=this.__nw;
this.__nw=R;
this.fireDataEvent(c,R,S);
},_serializeData:function(T){var U=typeof this.getMethod!==s&&this.getMethod()==t;

if(!T){return;
}
if(qx.lang.Type.isString(T)){return T;
}
if(qx.Class.isSubClassOf(T.constructor,qx.core.Object)){return qx.util.Serializer.toUriParameter(T);
}
if(qx.lang.Type.isObject(T)){return qx.lang.Object.toUriParameter(T,U);
}},__nx:function(){var V=this.getRequestHeaders();

for(var W in V){if(V.hasOwnProperty(W)){this._transport.setRequestHeader(W,V[W]);
}}},__ny:function(){var Y=this.getAuthentication(),X=this._transport;

if(Y){Y.getAuthHeaders().forEach(function(ba){if(ba.key&&ba.value){if(qx.core.Environment.get(i)){this.debug("Set authentication header '"+ba.key+"' to '"+ba.value+"'");
}X.setRequestHeader(ba.key,ba.value);
}},this);
}}},environment:{"qx.debug.io":false},destruct:function(){var bc=this._transport,bb=function(){};

if(this._transport){bc.onreadystatechange=bc.onload=bc.onloadend=bc.onabort=bc.ontimeout=bc.onerror=bb;
bc.dispose();
}}});
})();
(function(){var b="Integer",a="qx.ui.virtual.core.CellEvent";
qx.Class.define(a,{extend:qx.event.type.Mouse,properties:{row:{check:b,nullable:true},column:{check:b,nullable:true}},members:{init:function(c,d,e,f){d.clone(this);
this.setBubbles(false);
this.setRow(e);
this.setColumn(f);
}}});
})();
(function(){var a="qx.ui.virtual.cell.IWidgetCell";
qx.Interface.define(a,{members:{getCellWidget:function(b,c){},pool:function(d){},updateStates:function(e,f){},updateData:function(g,h){}}});
})();
(function(){var c="cell.states",b="qx.ui.virtual.cell.AbstractWidget",a="qx.event.type.Data";
qx.Class.define(b,{extend:qx.core.Object,implement:[qx.ui.virtual.cell.IWidgetCell],construct:function(){qx.core.Object.call(this);
this.__bL=[];
},events:{"created":a},members:{__bL:null,_createWidget:function(){throw new Error("abstract method call");
},updateData:function(d,e){throw new Error("abstract method call");
},updateStates:function(f,g){var j=f.getUserData(c);
if(j){var h=g||{};

for(var i in j){if(!h[i]){f.removeState(i);
}}}else{j={};
}if(g){for(var i in g){if(!j.state){f.addState(i);
}}}f.setUserData(c,g);
},getCellWidget:function(k,l){var m=this.__AH();
this.updateStates(m,l);
this.updateData(m,k);
return m;
},pool:function(n){this.__bL.push(n);
},_cleanupPool:function(){var o=this.__bL.pop();

while(o){o.destroy();
o=this.__bL.pop();
}},__AH:function(){var p=this.__bL.pop();

if(p==null){p=this._createWidget();
this.fireDataEvent("created",p);
}return p;
}},destruct:function(){this.__bL=null;
}});
})();
(function(){var b="_applyDelegate",a="qx.ui.virtual.cell.WidgetCell";
qx.Class.define(a,{extend:qx.ui.virtual.cell.AbstractWidget,properties:{delegate:{apply:b,init:null,nullable:true}},members:{_applyDelegate:function(c,d){this._cleanupPool();
},_createWidget:function(){var e=this.getDelegate();

if(e!=null&&e.createWidget!=null){return e.createWidget();
}else{return new qx.ui.core.Widget();
}},updateData:function(f,g){for(var h in g){if(qx.Class.hasProperty(f.constructor,h)){qx.util.PropertyUtil.setUserValue(f,h,g[h]);
}else{throw new Error("Can't update data! The key '"+h+"' is not a Property!");
}}}}});
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
(function(){var a="qx.ui.virtual.core.ILayer";
qx.Interface.define(a,{members:{fullUpdate:function(b,c,d,e){this.assertArgumentsCount(arguments,6,6);
this.assertPositiveInteger(b);
this.assertPositiveInteger(c);
this.assertArray(d);
this.assertArray(e);
},updateLayerWindow:function(f,g,h,i){this.assertArgumentsCount(arguments,6,6);
this.assertPositiveInteger(f);
this.assertPositiveInteger(g);
this.assertArray(h);
this.assertArray(i);
},updateLayerData:function(){}}});
})();
(function(){var b="qx.ui.virtual.layer.Abstract",a="abstract";
qx.Class.define(b,{extend:qx.ui.core.Widget,type:a,implement:[qx.ui.virtual.core.ILayer],construct:function(){qx.ui.core.Widget.call(this);
this.__eI={};
},properties:{anonymous:{refine:true,init:true}},members:{__eI:null,__kw:null,__Aq:null,__Ar:null,__zo:null,__ph:null,getFirstRow:function(){return this.__Aq;
},getFirstColumn:function(){return this.__Ar;
},getRowSizes:function(){return this.__zo||[];
},getColumnSizes:function(){return this.__ph||[];
},syncWidget:function(){if(!this.getContentElement().getDomElement()){return;
}
if(this.__eI.fullUpdate||this.__eI.updateLayerWindow&&this.__eI.updateLayerData){this._fullUpdate.apply(this,this.__kw);
}else if(this.__eI.updateLayerWindow){this._updateLayerWindow.apply(this,this.__kw);
}else if(this.__eI.updateLayerData&&this.__zo){this._updateLayerData();
}
if(this.__eI.fullUpdate||this.__eI.updateLayerWindow){var c=this.__kw;
this.__Aq=c[0];
this.__Ar=c[1];
this.__zo=c[2];
this.__ph=c[3];
}this.__eI={};
},_updateLayerData:function(){this._fullUpdate(this.__Aq,this.__Ar,this.__zo,this.__ph);
},_fullUpdate:function(d,e,f,g){throw new Error("Abstract method '_fullUpdate' called!");
},_updateLayerWindow:function(h,i,j,k){this._fullUpdate(h,i,j,k);
},updateLayerData:function(){this.__eI.updateLayerData=true;
qx.ui.core.queue.Widget.add(this);
},fullUpdate:function(l,m,n,o){this.__kw=arguments;
this.__eI.fullUpdate=true;
qx.ui.core.queue.Widget.add(this);
},updateLayerWindow:function(p,q,r,s){this.__kw=arguments;
this.__eI.updateLayerWindow=true;
qx.ui.core.queue.Widget.add(this);
}},destruct:function(){this.__eI=this.__kw=this.__zo=this.__ph=null;
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
(function(){var v="appear",u="qx.ui.virtual.core.CellEvent",t="update",s="change",r="qx.event.type.Data",q="qx.ui.virtual.core.Pane",p="resize",o="click",n="scrollX",m="dblclick",d="contextmenu",l="__zh",h="cellClick",c="cellContextmenu",b="qx.event.type.Event",g="__zm",f="__zg",j="cellDblclick",a="scrollY",k="__zl";
qx.Class.define(q,{extend:qx.ui.core.Widget,construct:function(w,x,y,z){qx.ui.core.Widget.call(this);
this.__zg=new qx.ui.virtual.core.Axis(y,w);
this.__zh=new qx.ui.virtual.core.Axis(z,x);
this.__rG=0;
this.__rF=0;
this.__zi=0;
this.__zj=0;
this.__zk={};
this.__eI={};
this.__zl=new qx.ui.container.Composite();
this.__zl.setUserBounds(0,0,0,0);
this._add(this.__zl);
this.__zm=[];
this.__zg.addListener(s,this.fullUpdate,this);
this.__zh.addListener(s,this.fullUpdate,this);
this.addListener(p,this._onResize,this);
this.addListenerOnce(v,this._onAppear,this);
this.addListener(o,this._onClick,this);
this.addListener(m,this._onDblclick,this);
this.addListener(d,this._onContextmenu,this);
},events:{cellClick:u,cellContextmenu:u,cellDblclick:u,update:b,scrollX:r,scrollY:r},properties:{width:{refine:true,init:400},height:{refine:true,init:300}},members:{__zg:null,__zh:null,__rG:null,__rF:null,__zi:null,__zj:null,__zk:null,__eI:null,__zl:null,__zm:null,__zn:null,__ph:null,__zo:null,getRowConfig:function(){return this.__zg;
},getColumnConfig:function(){return this.__zh;
},getChildren:function(){return [this.__zl];
},addLayer:function(A){this.__zm.push(A);
A.setUserBounds(0,0,0,0);
this.__zl.add(A);
},getLayers:function(){return this.__zm;
},getVisibleLayers:function(){var B=[];

for(var i=0;i<this.__zm.length;i++){var C=this.__zm[i];

if(C.isVisible()){B.push(C);
}}return B;
},getScrollMaxX:function(){var D=this.getBounds();

if(D){return Math.max(0,this.__zh.getTotalSize()-D.width);
}return 0;
},getScrollMaxY:function(){var E=this.getBounds();

if(E){return Math.max(0,this.__zg.getTotalSize()-E.height);
}return 0;
},setScrollY:function(F){var G=this.getScrollMaxY();

if(F<0){F=0;
}else if(F>G){F=G;
}
if(this.__rG!==F){var H=this.__rG;
this.__rG=F;
this._deferredUpdateScrollPosition();
this.fireDataEvent(a,F,H);
}},getScrollY:function(){return this.__rG;
},setScrollX:function(I){var J=this.getScrollMaxX();

if(I<0){I=0;
}else if(I>J){I=J;
}
if(I!==this.__rF){var K=this.__rF;
this.__rF=I;
this._deferredUpdateScrollPosition();
this.fireDataEvent(n,I,K);
}},getScrollX:function(){return this.__rF;
},getScrollSize:function(){return {width:this.__zh.getTotalSize(),height:this.__zg.getTotalSize()};
},scrollRowIntoView:function(L){var O=this.getBounds();

if(!O){this.addListenerOnce(v,function(){qx.event.Timer.once(function(){this.scrollRowIntoView(L);
},this,0);
},this);
return;
}var P=this.__zg.getItemPosition(L);
var N=P+this.__zg.getItemSize(L);
var M=this.getScrollY();

if(P<M){this.setScrollY(P);
}else if(N>M+O.height){this.setScrollY(N-O.height);
}},scrollColumnIntoView:function(Q){var T=this.getBounds();

if(!T){this.addListenerOnce(v,function(){qx.event.Timer.once(function(){this.scrollColumnIntoView(Q);
},this,0);
},this);
return;
}var S=this.__zh.getItemPosition(Q);
var R=S+this.__zh.getItemSize(Q);
var U=this.getScrollX();

if(S<U){this.setScrollX(S);
}else if(R>U+T.width){this.setScrollX(R-T.width);
}},scrollCellIntoView:function(V,W){var X=this.getBounds();

if(!X){this.addListenerOnce(v,function(){qx.event.Timer.once(function(){this.scrollCellIntoView(V,W);
},this,0);
},this);
return;
}this.scrollColumnIntoView(V);
this.scrollRowIntoView(W);
},getCellAtPosition:function(Y,ba){var bb,bc;
var bd=this.getContentLocation();

if(!bd||ba<bd.top||ba>=bd.bottom||Y<bd.left||Y>=bd.right){return null;
}bb=this.__zg.getItemAtPosition(this.getScrollY()+ba-bd.top);
bc=this.__zh.getItemAtPosition(this.getScrollX()+Y-bd.left);

if(!bb||!bc){return null;
}return {row:bb.index,column:bc.index};
},prefetchX:function(be,bf,bg,bh){var bi=this.getVisibleLayers();

if(bi.length==0){return;
}var bk=this.getBounds();

if(!bk){return;
}var bl=this.__rF+bk.width;
var bm=this.__zj-bl;

if(this.__rF-this.__zk.left<Math.min(this.__rF,be)||this.__zk.right-bl<Math.min(bm,bg)){var bn=Math.min(this.__rF,bf);
var bj=Math.min(bm,bh);
this._setLayerWindow(bi,this.__rF-bn,this.__rG,bk.width+bn+bj,bk.height,false);
}},prefetchY:function(bo,bp,bq,br){var bs=this.getVisibleLayers();

if(bs.length==0){return;
}var bv=this.getBounds();

if(!bv){return;
}var bt=this.__rG+bv.height;
var bu=this.__zi-bt;

if(this.__rG-this.__zk.top<Math.min(this.__rG,bo)||this.__zk.bottom-bt<Math.min(bu,bq)){var bx=Math.min(this.__rG,bp);
var bw=Math.min(bu,br);
this._setLayerWindow(bs,this.__rF,this.__rG-bx,bv.width,bv.height+bx+bw,false);
}},_onResize:function(){if(this.getContainerElement().getDomElement()){this.__zn=true;
this._updateScrollPosition();
this.__zn=null;
this.fireEvent(t);
}},_onAppear:function(){this.fullUpdate();
},_onClick:function(e){this.__zp(e,h);
},_onContextmenu:function(e){this.__zp(e,c);
},_onDblclick:function(e){this.__zp(e,j);
},__zp:function(e,by){var bz=this.getCellAtPosition(e.getDocumentLeft(),e.getDocumentTop());

if(!bz){return;
}this.fireNonBubblingEvent(by,qx.ui.virtual.core.CellEvent,[this,e,bz.row,bz.column]);
},syncWidget:function(){if(this.__eI._fullUpdate){this._fullUpdate();
}else if(this.__eI._updateScrollPosition){this._updateScrollPosition();
}this.__eI={};
},_setLayerWindow:function(bA,bB,top,bC,bD,bE){var bJ=this.__zg.getItemAtPosition(top);

if(bJ){var bL=bJ.index;
var bP=this.__zg.getItemSizes(bL,bD+bJ.offset);
var bK=qx.lang.Array.sum(bP);
var bR=top-bJ.offset;
var bO=top-bJ.offset+bK;
}else{var bL=0;
var bP=[];
var bK=0;
var bR=0;
var bO=0;
}var bN=this.__zh.getItemAtPosition(bB);

if(bN){var bH=bN.index;
var bG=this.__zh.getItemSizes(bH,bC+bN.offset);
var bM=qx.lang.Array.sum(bG);
var bQ=bB-bN.offset;
var bI=bB-bN.offset+bM;
}else{var bH=0;
var bG=[];
var bM=0;
var bQ=0;
var bI=0;
}this.__zk={top:bR,bottom:bO,left:bQ,right:bI};
this.__zl.setUserBounds(this.__zk.left-this.__rF,this.__zk.top-this.__rG,bM,bK);
this.__ph=bG;
this.__zo=bP;

for(var i=0;i<this.__zm.length;i++){var bF=this.__zm[i];
bF.setUserBounds(0,0,bM,bK);

if(bE){bF.fullUpdate(bL,bH,bP,bG);
}else{bF.updateLayerWindow(bL,bH,bP,bG);
}}},__zq:function(){if(this.__zn){return;
}var bS=this.getScrollSize();

if(this.__zi!==bS.height||this.__zj!==bS.width){this.__zi=bS.height;
this.__zj=bS.width;
this.fireEvent(t);
}},fullUpdate:function(){this.__eI._fullUpdate=1;
qx.ui.core.queue.Widget.add(this);
},isUpdatePending:function(){return !!this.__eI._fullUpdate;
},_fullUpdate:function(){var bT=this.getVisibleLayers();

if(bT.length==0){this.__zq();
return;
}
if(!this.getContainerElement().getDomElement()){return ;
}var bU=this.getBounds();
this._setLayerWindow(bT,this.__rF,this.__rG,bU.width,bU.height,true);
this.__zq();
},_deferredUpdateScrollPosition:function(){this.__eI._updateScrollPosition=1;
qx.ui.core.queue.Widget.add(this);
},_updateScrollPosition:function(){var bV=this.getVisibleLayers();

if(bV.length==0){this.__zq();
return;
}var bX=this.getBounds();

if(!bX){return ;
}var bW={top:this.__rG,bottom:this.__rG+bX.height,left:this.__rF,right:this.__rF+bX.width};

if(this.__zk.top<=bW.top&&this.__zk.bottom>=bW.bottom&&this.__zk.left<=bW.left&&this.__zk.right>=bW.right){this.__zl.setUserBounds(this.__zk.left-bW.left,this.__zk.top-bW.top,this.__zk.right-this.__zk.left,this.__zk.bottom-this.__zk.top);
}else{this._setLayerWindow(bV,this.__rF,this.__rG,bX.width,bX.height,false);
}this.__zq();
}},destruct:function(){this._disposeArray(g);
this._disposeObjects(f,l,k);
this.__zk=this.__eI=this.__ph=this.__zo=null;
}});
})();
(function(){var j="qx.event.type.Event",i="GET",h="function",g="POST",f="force-validate",e="xml",d="application/xml",c="Boolean",b="application/json",a="application/x-www-form-urlencoded",v="json",u="qx.debug.io",t="HEAD",s="OPTIONS",r="PUT",q="String",p="qx.io.request.Xhr",o="DELETE",n="Accept",m="no-cache",k="Cache-Control",l="Content-Type";
qx.Class.define(p,{extend:qx.io.request.AbstractRequest,construct:function(w,x){if(x!==undefined){this.setMethod(x);
}qx.io.request.AbstractRequest.call(this,w);
},events:{"readystatechange":j,"success":j,"load":j,"statusError":j},statics:{PARSER:{json:qx.lang.Json.parse,xml:qx.xml.Document.fromString}},properties:{method:{check:[t,s,i,g,r,o],init:i},async:{check:c,init:true},accept:{check:q,nullable:true},cache:{check:function(y){return qx.lang.Type.isBoolean(y)||y===f;
},init:true}},members:{__ok:null,_createTransport:function(){return new qx.bom.request.Xhr();
},_getConfiguredUrl:function(){var z=this.getUrl(),A;

if(this.getMethod()===i&&this.getRequestData()){A=this._serializeData(this.getRequestData());
z=qx.util.Uri.appendParamsToUrl(z,A);
}
if(this.getCache()===false){z=qx.util.Uri.appendParamsToUrl(z,{nocache:new Date().valueOf()});
}return z;
},_setRequestHeaders:function(){var B=this._transport;
if(this.getCache()===f){B.setRequestHeader(k,m);
}if(this.getMethod()===g){B.setRequestHeader(l,a);
}if(this.getAccept()){if(qx.core.Environment.get(u)){this.debug("Accepting: '"+this.getAccept()+"'");
}B.setRequestHeader(n,this.getAccept());
}},_getParsedResponse:function(){var D=this._transport.responseText,C=this._getParser();

if(typeof C===h){return C.call(this,D);
}return D;
},setParser:function(E){var F=qx.io.request.Xhr;
if(typeof F.PARSER[E]===h){return this.__ok=F.PARSER[E];
}return this.__ok=E;
},_getParser:function(){var G=this.__ok;
if(G){return G;
}if(!this.isDone()){return;
}switch(this.getResponseContentType()){case b:G=qx.io.request.Xhr.PARSER[v];
break;
case d:G=qx.io.request.Xhr.PARSER[e];
break;
default:G=null;
break;
}if((/[^\/]+\/[^\+]+\+xml/).test(this.getResponseContentType())){G=qx.io.request.Xhr.PARSER[e];
}return G;
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
if(qx.lang.Type.isArray(y)){var A=y instanceof qx.data.Array;

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
}if(qx.Class.hasInterface(G.constructor,qx.data.IListData)){L=[];

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
}if(G instanceof qx.locale.LocalizedString){return G.toString();
}if(qx.lang.Type.isObject(G)){L={};

for(var J in G){L[J]=qx.util.Serializer.toNativeObject(G[J],H,I);
}return L;
}return G;
},toJson:function(O,P,Q){var T=q;
if(O==null){return d;
}if(qx.Class.hasInterface(O.constructor,qx.data.IListData)){T+=s;

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
(function(){var f="cell.empty",e="cell.column",d="updated",c="cell.row",b="qx.event.type.Event",a="qx.ui.virtual.layer.WidgetCell";
qx.Class.define(a,{extend:qx.ui.virtual.layer.Abstract,include:[qx.ui.core.MChildrenHandling],construct:function(g){qx.ui.virtual.layer.Abstract.call(this);
this.setZIndex(2);
this._cellProvider=g;
this.__AG=[];
},properties:{anonymous:{refine:true,init:false}},events:{updated:b},members:{__AG:null,getRenderedCellWidget:function(h,j){var k=this.getColumnSizes().length;
var p=this.getRowSizes().length;
var o=this.getFirstRow();
var n=this.getFirstColumn();

if(h<o||h>=o+p||j<n||j>=n+k){return null;
}var m=(j-n)+(h-o)*k;
var l=this._getChildren()[m];

if(l.getUserData(f)){return null;
}else{return l;
}},_getSpacer:function(){var q=this.__AG.pop();

if(!q){q=new qx.ui.core.Spacer();
q.setUserData(f,1);
}return q;
},_activateNotEmptyChild:function(r){var s=qx.ui.core.FocusHandler.getInstance().getActiveWidget();
if(s==r||qx.ui.core.Widget.contains(r,s)){var t=this._getChildren();

for(var i=t.length-1;i>=0;i--){if(!t[i].getUserData(f)){t[i].activate();
break;
}}}},_fullUpdate:function(u,v,w,z){var B=this._cellProvider;
var F=this._getChildren();

for(var i=0;i<F.length;i++){var D=F[i];

if(D.getUserData(f)){this.__AG.push(D);
}else{this._activateNotEmptyChild(D);
B.poolCellWidget(D);
}}this._removeAll();
var top=0;
var G=0;

for(var y=0;y<w.length;y++){for(var x=0;x<z.length;x++){var E=u+y;
var C=v+x;
var A=B.getCellWidget(E,C)||this._getSpacer();
A.setUserBounds(G,top,z[x],w[y]);
A.setUserData(c,E);
A.setUserData(e,C);
this._add(A);
G+=z[x];
}top+=w[y];
G=0;
}this.fireEvent(d);
},_updateLayerWindow:function(H,I,J,K){var W=H+J.length-1;
var N=I+K.length-1;
var S={firstRow:Math.max(H,this.getFirstRow()),lastRow:Math.min(W,this._lastRow),firstColumn:Math.max(I,this.getFirstColumn()),lastColumn:Math.min(N,this._lastColumn)};
this._lastColumn=N;
this._lastRow=W;

if(S.firstRow>S.lastRow||S.firstColumn>S.lastColumn){return this._fullUpdate(H,I,J,K);
}var X=this._getChildren();
var L=this.getColumnSizes().length;
var U=[];
var R={};

for(var Y=H;Y<=W;Y++){U[Y]=[];

for(var Q=I;Q<=N;Q++){if(Y>=S.firstRow&&Y<=S.lastRow&&Q>=S.firstColumn&&Q<=S.lastColumn){var x=Q-this.getFirstColumn();
var y=Y-this.getFirstRow();
var M=y*L+x;
U[Y][Q]=X[M];
R[M]=true;
}}}var T=this._cellProvider;
var X=this._getChildren();

for(var i=0;i<X.length;i++){if(!R[i]){var V=X[i];

if(V.getUserData(f)){this.__AG.push(V);
}else{this._activateNotEmptyChild(V);
T.poolCellWidget(V);
}}}this._removeAll();
var top=0;
var O=0;

for(var y=0;y<J.length;y++){for(var x=0;x<K.length;x++){var Y=H+y;
var Q=I+x;
var P=U[Y][Q]||T.getCellWidget(Y,Q)||this._getSpacer();
P.setUserBounds(O,top,K[x],J[y]);
P.setUserData(c,Y);
P.setUserData(e,Q);
this._add(P);
O+=K[x];
}top+=J[y];
O=0;
}this.fireEvent(d);
}},destruct:function(){var ba=this._getChildren();

for(var i=0;i<ba.length;i++){ba[i].dispose();
}this._cellProvider=this.__AG=null;
}});
})();
(function(){var i="mouseup",h="mousedown",g="losecapture",f="mouseover",e="mousemove",d="removeItem",c="keypress",b="addItem",a="qx.ui.virtual.selection.Abstract";
qx.Class.define(a,{extend:qx.ui.core.selection.Abstract,construct:function(j,k){qx.ui.core.selection.Abstract.call(this);
this._pane=j;
this._delegate=k||{};
},members:{_isSelectable:function(l){return this._delegate.isItemSelectable?this._delegate.isItemSelectable(l):true;
},_styleSelectable:function(m,n,o){if(this._delegate.styleSelectable){this._delegate.styleSelectable(m,n,o);
}},attachMouseEvents:function(){var p=this._pane.getContainerElement();
p.addListener(h,this.handleMouseDown,this);
p.addListener(i,this.handleMouseUp,this);
p.addListener(f,this.handleMouseOver,this);
p.addListener(e,this.handleMouseMove,this);
p.addListener(g,this.handleLoseCapture,this);
},detatchMouseEvents:function(){var q=this._pane.getContainerElement();
q.removeListener(h,this.handleMouseDown,this);
q.removeListener(i,this.handleMouseUp,this);
q.removeListener(f,this.handleMouseOver,this);
q.removeListener(e,this.handleMouseMove,this);
q.removeListener(g,this.handleLoseCapture,this);
},attachKeyEvents:function(r){r.addListener(c,this.handleKeyPress,this);
},detachKeyEvents:function(s){s.removeListener(c,this.handleKeyPress,this);
},attachListEvents:function(t){t.addListener(b,this.handleAddItem,this);
t.addListener(d,this.handleRemoveItem,this);
},detachListEvents:function(u){u.removeListener(b,this.handleAddItem,this);
u.removeListener(d,this.handleRemoveItem,this);
},_capture:function(){this._pane.capture();
},_releaseCapture:function(){this._pane.releaseCapture();
},_getScroll:function(){return {left:this._pane.getScrollX(),top:this._pane.getScrollY()};
},_scrollBy:function(v,w){this._pane.setScrollX(this._pane.getScrollX()+v);
this._pane.setScrollY(this._pane.getScrollY()+w);
},_getLocation:function(){var x=this._pane.getContentElement().getDomElement();
return x?qx.bom.element.Location.get(x):null;
},_getDimension:function(){return this._pane.getInnerSize();
}},destruct:function(){this._pane=this._delegate=null;
}});
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
(function(){var d="Color",c="_applyColorOdd",b="_applyColorEven",a="qx.ui.virtual.layer.AbstractBackground";
qx.Class.define(a,{extend:qx.ui.virtual.layer.Abstract,construct:function(e,f){qx.ui.virtual.layer.Abstract.call(this);

if(e){this.setColorEven(e);
}
if(f){this.setColorOdd(f);
}this.__Bj={};
this.__Bk={};
},properties:{colorEven:{nullable:true,check:d,apply:b,themeable:true},colorOdd:{nullable:true,check:d,apply:c,themeable:true}},members:{__Bl:null,__Bm:null,__Bj:null,__Bk:null,setColor:function(g,h){if(h){this.__Bj[g]=qx.theme.manager.Color.getInstance().resolve(h);
}else{delete (this.__Bj[g]);
}},clearCustomColors:function(){this.__Bj={};
this.updateLayerData();
},getColor:function(i){var j=this.__Bj[i];

if(j){return j;
}else{return i%2==0?this.__Bl:this.__Bm;
}},_applyColorEven:function(k,l){if(k){this.__Bl=qx.theme.manager.Color.getInstance().resolve(k);
}else{this.__Bl=null;
}this.updateLayerData();
},_applyColorOdd:function(m,n){if(m){this.__Bm=qx.theme.manager.Color.getInstance().resolve(m);
}else{this.__Bm=null;
}this.updateLayerData();
},setBackground:function(o,p){if(p){this.__Bk[o]=qx.theme.manager.Decoration.getInstance().resolve(p);
}else{delete (this.__Bk[o]);
}this.updateLayerData();
},getBackground:function(q){return this.__Bk[q];
}},destruct:function(){this.__Bj=this.__Bk=null;
}});
})();
(function(){var i="widgetbrowser/people.json",h="model",g="widgetbrowser.pages.List",f="no model...",e="model.people",d="firstname",c=", ";
qx.Class.define(g,{extend:widgetbrowser.pages.AbstractPage,construct:function(){widgetbrowser.pages.AbstractPage.call(this);
this.initWidgets();
this.loadData();
},members:{__Kr:null,initWidgets:function(){var j=this._widgets;
var k=this.__Kr=new qx.ui.list.List().set({height:280,width:150,labelPath:d,labelOptions:{converter:function(m,n){return n?n.getLastname()+c+m:f;
}}});
j.push(k);
this.add(k);
var l={sorter:function(a,b){a=a.getLastname();
b=b.getLastname();
return a>b?1:a<b?-1:0;
},group:function(o){return o.getLastname().charAt(0).toUpperCase();
}};
k.setDelegate(l);
},loadData:function(){var p=i;
p=qx.util.ResourceManager.getInstance().toUri(p);
var q=new qx.data.store.Json(p);
q.bind(e,this.__Kr,h);
}}});
})();
(function(){var d="qx.ui.virtual.selection.Row",c="above",b="under",a="one";
qx.Class.define(d,{extend:qx.ui.virtual.selection.Abstract,members:{_getItemCount:function(){return this._pane.getRowConfig().getItemCount();
},_getSelectableFromMouseEvent:function(event){var e=this._pane.getCellAtPosition(event.getDocumentLeft(),event.getDocumentTop());

if(!e){return null;
}return this._isSelectable(e.row)?e.row:null;
},getSelectables:function(f){var g=[];

for(var i=0,l=this._getItemCount();i<l;i++){if(this._isSelectable(i)){g.push(i);
}}return g;
},_getSelectableRange:function(h,j){var k=[];
var n=Math.min(h,j);
var m=Math.max(h,j);

for(var i=n;i<=m;i++){if(this._isSelectable(i)){k.push(i);
}}return k;
},_getFirstSelectable:function(){var o=this._getItemCount();

for(var i=0;i<o;i++){if(this._isSelectable(i)){return i;
}}return null;
},_getLastSelectable:function(){var p=this._getItemCount();

for(var i=p-1;i>=0;i--){if(this._isSelectable(i)){return i;
}}return null;
},_getRelatedSelectable:function(q,r){if(r==c){var t=q-1;
var s=0;
var u=-1;
}else if(r==b){var t=q+1;
var s=this._getItemCount()-1;
var u=1;
}else{return null;
}
for(var i=t;i!==s+u;i+=u){if(this._isSelectable(i)){return i;
}}return null;
},_getPage:function(v,w){if(w){return this._getFirstSelectable();
}else{return this._getLastSelectable();
}},_selectableToHashCode:function(x){return x;
},_scrollItemIntoView:function(y){this._pane.scrollRowIntoView(y);
},_getSelectableLocationX:function(z){return {left:0,right:this._pane.getColumnConfig().getTotalSize()-1};
},_getSelectableLocationY:function(A){var D=this._pane.getRowConfig();
var C=D.getItemPosition(A);
var B=C+D.getItemSize(A)-1;
return {top:C,bottom:B};
},_applyDefaultSelection:function(){if(this.getMode()===a&&this.isSelectionEmpty()){var E=this._getFirstSelectable();

if(E!=null){this.selectItem(E);
}}}}});
})();
(function(){var t="engine.name",s="",r="qx.debug.io",q="mshtml",p="gecko",o="engine.version",n="onunload",m="opera",l="undefined",k="activex",d="Microsoft.XMLHTTP",j="io.xhr",h="Microsoft.XMLDOM",c="xhr",b="Content-Type",g="browser.version",f="qx.bom.request.Xhr",i="//",a="file:";
qx.Bootstrap.define(f,{construct:function(){this.__qy=qx.Bootstrap.bind(this.__qG,this);
this.__mJ=qx.Bootstrap.bind(this.__qI,this);
this.__qF();
if(window.attachEvent){this.__qz=qx.Bootstrap.bind(this.__qL,this);
window.attachEvent(n,this.__qz);
}},statics:{UNSENT:0,OPENED:1,HEADERS_RECEIVED:2,LOADING:3,DONE:4,isCrossDomain:function(u){var w=qx.util.Uri.parseUri(u),location=window.location,v=location.protocol;
if(!(u.indexOf(i)!==-1)){return false;
}
if(v.substr(0,v.length-1)==w.protocol&&location.host===w.host&&location.port===w.port){return false;
}return true;
},isSuccessful:function(status){return (status>=200&&status<300||status===304);
}},members:{readyState:0,responseText:s,responseXML:null,status:0,statusText:s,timeout:0,open:function(x,y,z,A,B){if(this.__mk){return;
}this.__qA=false;
this.__mM=false;

if(typeof z==l){z=true;
}this.__qB=z;
if(!this.__qM()&&this.readyState>qx.bom.request.Xhr.UNSENT){this.dispose();
this.__qF();
}this.__qD.onreadystatechange=this.__qy;

try{if(qx.core.Environment.get(r)){qx.Bootstrap.debug(qx.bom.request.Xhr,"Open native request with method: "+x+", url: "+y+", async: "+z);
}this.__qD.open(x,y,z,A,B);
}catch(C){if(!qx.bom.request.Xhr.isCrossDomain(y)){throw C;
}
if(!this.__qB){this.__qC=C;
}
if(this.__qB){if(window.XDomainRequest){this.readyState=4;
this.__qD=new XDomainRequest();
this.__qD.onerror=qx.Bootstrap.bind(function(){this.onreadystatechange();
this.onerror();
this.onloadend();
},this);

if(qx.core.Environment.get(r)){qx.Bootstrap.debug(qx.bom.request.Xhr,"Retry open native request with method: "+x+", url: "+y+", async: "+z);
}this.__qD.open(x,y,z,A,B);
return;
}window.setTimeout(qx.Bootstrap.bind(function(){this.readyState=4;
this.onreadystatechange();
this.onerror();
this.onloadend();
},this));
}}if(qx.core.Environment.get(t)===p&&parseInt(qx.core.Environment.get(o),10)<2&&!this.__qB){this.readyState=qx.bom.request.Xhr.OPENED;
this.onreadystatechange();
}},setRequestHeader:function(D,E){if(this.__mk){return;
}this.__qD.setRequestHeader(D,E);
},send:function(F){if(this.__mk){return;
}if(!this.__qB&&this.__qC){throw this.__qC;
}F=typeof F==l?null:F;
try{if(qx.core.Environment.get(r)){qx.Bootstrap.debug(qx.bom.request.Xhr,"Send native request");
}this.__qD.send(F);
}catch(G){if(!this.__qB){throw G;
}}if(qx.core.Environment.get(t)===p&&!this.__qB){this.__qG();
}this.__qA=true;
if(qx.core.Environment.get(t)===m&&this.timeout===0){this.timeout=10000;
}if(this.timeout>0){this.__qE=window.setTimeout(this.__mJ,this.timeout);
}},abort:function(H){if(this.__mk){return;
}this.__mM=true;
this.__qD.abort();

if(this.__qD){this.readyState=this.__qD.readyState;
}
if(H){return;
}this.onabort();
},onreadystatechange:function(){},onload:function(){},onloadend:function(){},onerror:function(){},onabort:function(){},ontimeout:function(){},getResponseHeader:function(I){if(this.__mk){return;
}return this.__qD.getResponseHeader(I);
},getAllResponseHeaders:function(){if(this.__mk){return;
}return this.__qD.getAllResponseHeaders();
},dispose:function(){if(this.__mk){return false;
}if(window.detachEvent){window.detachEvent(n,this.__qz);
}try{this.__qD.onreadystatechange;
}catch(K){return;
}var J=function(){};
this.__qD.onreadystatechange=J;
this.__qD.onload=J;
this.__qD.onerror=J;
this.abort(true);
this.__qD=null;
this.__mk=true;
return true;
},_getNativeXhr:function(){return this.__qD;
},_createNativeXhr:function(){var L=qx.core.Environment.get(j);

if(L===c){return new XMLHttpRequest();
}
if(L==k){return new window.ActiveXObject(d);
}qx.log.Logger.error(this,"No XHR support available.");
},_getProtocol:function(){return window.location.protocol;
},__qD:null,__qB:null,__qy:null,__qz:null,__mJ:null,__qA:null,__mM:null,__ca:null,__mk:null,__qE:null,__qC:null,__qF:function(){this.__qD=this._createNativeXhr();
this.__qD.onreadystatechange=this.__qy;
this.__mk=this.__qA=this.__mM=false;
},__qG:function(){var M=this.__qD,N=true;

if(qx.core.Environment.get(r)){qx.Bootstrap.debug(qx.bom.request.Xhr,"Received native readyState: "+M.readyState);
}if(this.readyState==M.readyState){return;
}this.readyState=M.readyState;
if(this.readyState===qx.bom.request.Xhr.DONE&&this.__mM&&!this.__qA){return;
}if(!this.__qB&&(M.readyState==2||M.readyState==3)){return;
}this.status=0;
this.statusText=this.responseText=s;
this.responseXML=null;

if(this.readyState>qx.bom.request.Xhr.OPENED){try{this.status=M.status;
this.statusText=M.statusText;
this.responseText=M.responseText;
this.responseXML=M.responseXML;
}catch(O){N=false;
}
if(N){this.__qJ();
this.__qK();
}}this.__mQ();
if(this.readyState==qx.bom.request.Xhr.DONE){if(M){M.onreadystatechange=function(){};
}}},__mQ:function(){var P=this;
if(qx.core.Environment.get(t)==q&&qx.core.Environment.get(o)<8){if(this.__qB&&!this.__qA&&this.readyState>=qx.bom.request.Xhr.LOADING){if(this.readyState==qx.bom.request.Xhr.LOADING){return ;
}
if(this.readyState==qx.bom.request.Xhr.DONE){window.setTimeout(function(){P.readyState=3;
P.onreadystatechange();
P.readyState=4;
P.onreadystatechange();
P.__qH();
});
return;
}}}this.onreadystatechange();
this.__qH();
},__qH:function(){if(this.readyState===qx.bom.request.Xhr.DONE){window.clearTimeout(this.__qE);
if(this.__ca){this.ontimeout();
if(qx.core.Environment.get(t)===m){this.onerror();
}this.__ca=false;
}else{this.statusText?this.onload():this.onerror();
}this.onloadend();
}},__qI:function(){var Q=this.__qD;
this.readyState=qx.bom.request.Xhr.DONE;
this.__ca=true;
Q.abort();
this.responseText=s;
this.responseXML=null;
this.__mQ();
},__qJ:function(){var R=this.__qD;
if(this._getProtocol()===a&&this.status===0){this.status=200;
}if(this.status===1223){this.status=204;
}if(R.readyState===qx.bom.request.Xhr.DONE&&this.status===0){this.status=304;
}},__qK:function(){if(qx.core.Environment.get(t)==q&&(this.getResponseHeader(b)||s).match(/[^\/]+\/[^\+]+\+xml/)&&this.responseXML&&!this.responseXML.documentElement){var S=new window.ActiveXObject(h);
S.async=false;
S.validateOnParse=false;
S.loadXML(this.responseText);
this.responseXML=S;
}},__qL:function(){try{if(this){this.dispose();
}}catch(e){}},__qM:function(){var name=qx.core.Environment.get(t);
var T=qx.core.Environment.get(g);
return !(name==q&&T<9||name==p&&T<3.5);
}},defer:function(){qx.core.Environment.add(r,false);
}});
})();
(function(){var e="change",d="qx.event.type.Event",c="qx.ui.virtual.core.Axis";
qx.Class.define(c,{extend:qx.core.Object,construct:function(f,g){qx.core.Object.call(this);
this.itemCount=g;
this.defaultItemSize=f;
this.customSizes={};
},events:{"change":d},members:{__zr:null,getDefaultItemSize:function(){return this.defaultItemSize;
},setDefaultItemSize:function(h){if(this.defaultItemSize!==h){this.defaultItemSize=h;
this.__zr=null;
this.fireNonBubblingEvent(e);
}},getItemCount:function(){return this.itemCount;
},setItemCount:function(j){if(this.itemCount!==j){this.itemCount=j;
this.__zr=null;
this.fireNonBubblingEvent(e);
}},setItemSize:function(k,l){if(this.customSizes[k]==l){return;
}
if(l===null){delete this.customSizes[k];
}else{this.customSizes[k]=l;
}this.__zr=null;
this.fireNonBubblingEvent(e);
},getItemSize:function(m){return this.customSizes[m]||this.defaultItemSize;
},resetItemSizes:function(){this.customSizes={};
this.__zr=null;
this.fireNonBubblingEvent(e);
},__zs:function(){if(this.__zr){return this.__zr;
}var p=this.defaultItemSize;
var w=this.itemCount;
var r=[];

for(var t in this.customSizes){var n=parseInt(t,10);

if(n<w){r.push(n);
}}
if(r.length==0){var s=[{startIndex:0,endIndex:w-1,firstItemSize:p,rangeStart:0,rangeEnd:w*p-1}];
this.__zr=s;
return s;
}r.sort(function(a,b){return a>b?1:-1;
});
var s=[];
var o=0;

for(var i=0;i<r.length;i++){var n=r[i];

if(n>=w){break;
}var v=this.customSizes[n];
var q=n*p+o;
o+=v-p;
s[i]={startIndex:n,firstItemSize:v,rangeStart:q};

if(i>0){s[i-1].rangeEnd=q-1;
s[i-1].endIndex=n-1;
}}if(s[0].rangeStart>0){s.unshift({startIndex:0,endIndex:s[0].startIndex-1,firstItemSize:p,rangeStart:0,rangeEnd:s[0].rangeStart-1});
}var x=s[s.length-1];
var u=(w-x.startIndex-1)*p;
x.rangeEnd=x.rangeStart+x.firstItemSize+u-1;
x.endIndex=w-1;
this.__zr=s;
return s;
},__zt:function(y){var z=this.__zr||this.__zs();
var A=0;
var C=z.length-1;
while(true){var D=A+((C-A)>>1);
var B=z[D];

if(B.rangeEnd<y){A=D+1;
}else if(B.rangeStart>y){C=D-1;
}else{return B;
}}},getItemAtPosition:function(E){if(E<0||E>=this.getTotalSize()){return null;
}var G=this.__zt(E);
var I=G.rangeStart;
var F=G.startIndex;
var J=G.firstItemSize;

if(I+J>E){return {index:F,offset:E-I};
}else{var H=this.defaultItemSize;
return {index:F+1+Math.floor((E-I-J)/H),offset:(E-I-J)%H};
}},__zu:function(K){var L=this.__zr||this.__zs();
var M=0;
var O=L.length-1;
while(true){var P=M+((O-M)>>1);
var N=L[P];

if(N.endIndex<K){M=P+1;
}else if(N.startIndex>K){O=P-1;
}else{return N;
}}},getItemPosition:function(Q){if(Q<0||Q>=this.itemCount){return null;
}var R=this.__zu(Q);

if(R.startIndex==Q){return R.rangeStart;
}else{return R.rangeStart+R.firstItemSize+(Q-R.startIndex-1)*this.defaultItemSize;
}},getTotalSize:function(){var S=this.__zr||this.__zs();
return S[S.length-1].rangeEnd+1;
},getItemSizes:function(T,U){var V=this.customSizes;
var Y=this.defaultItemSize;
var X=0;
var W=[];
var i=0;

while(X<U){var ba=V[T++]||Y;
X+=ba;
W[i++]=ba;

if(T>=this.itemCount){break;
}}return W;
}},destruct:function(){this.customSizes=this.__zr=null;
}});
})();
(function(){var q="px;",p="left: 0;",o="</div>",n="top:",m="position: absolute;",k="<div style='",j="'>",h="background-color:",g="",f="qx.ui.virtual.layer.Row",c="block",e="width:",d="height:",b="row-layer",a="none";
qx.Class.define(f,{extend:qx.ui.virtual.layer.AbstractBackground,properties:{appearance:{refine:true,init:b}},members:{_fullUpdate:function(r,s,t,u){var B=[];
var A=qx.lang.Array.sum(u);
var C=[];
var top=0;
var E=r;
var x=0;

for(var y=0;y<t.length;y++){var D=this.getBackground(E);

if(D){C.push({childIndex:x,decorator:D,width:A,height:t[y]});
B.push(k,m,p,n,top,q,j,D.getMarkup(),o);
x++;
}else{var z=this.getColor(E);

if(z){B.push(k,m,p,n,top,q,d,t[y],q,e,A,q,h,z,j,o);
x++;
}}top+=t[y];
E+=1;
}var v=this.getContentElement().getDomElement();
v.style.display=a;
v.innerHTML=B.join(g);
for(var i=0,l=C.length;i<l;i++){var w=C[i];
w.decorator.resize(v.childNodes[w.childIndex].firstChild,w.width,w.height);
}v.style.display=c;
this._width=A;
},_updateLayerWindow:function(F,G,H,I){if(F!==this.getFirstRow()||H.length!==this.getRowSizes().length||this._width<qx.lang.Array.sum(I)){this._fullUpdate(F,G,H,I);
}},setColor:function(J,K){qx.ui.virtual.layer.AbstractBackground.prototype.setColor.call(this,J,K);

if(this.__Bn(J)){this.updateLayerData();
}},setBackground:function(L,M){qx.ui.virtual.layer.AbstractBackground.prototype.setBackground.call(this,L,M);

if(this.__Bn(L)){this.updateLayerData();
}},__Bn:function(N){var P=this.getFirstRow();
var O=P+this.getRowSizes().length-1;
return N>=P&&N<=O;
}}});
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
(function(){var a="qx.util.Delegate";
qx.Class.define(a,{statics:{getMethod:function(b,c){if(qx.util.Delegate.containsMethod(b,c)){return qx.lang.Function.bind(b[c],b);
}return null;
},containsMethod:function(d,e){var f=qx.lang.Type;

if(f.isObject(d)){return f.isFunction(d[e]);
}return false;
}}});
})();

});