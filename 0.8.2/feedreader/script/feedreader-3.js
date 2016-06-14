(function(){var k="",j="Add",i="Title:",h="Add a feed",g="feedreader.view.AddFeedWindow",f="URL:",e="icon/16/actions/document-new.png",d="icon/16/actions/dialog-apply.png",c="right",b="Feed Information",a="execute";
qx.Class.define(g,{extend:qx.ui.window.Window,construct:function(n){arguments.callee.base.call(this,this.tr(h),e);
this._controller=n;
this.set({modal:true,showMinimize:false,showMaximize:false,allowMaximize:false});
this._addContent();
},members:{_addContent:function(){this.setLayout(new qx.ui.layout.VBox(10));
var s=new qx.ui.groupbox.GroupBox(this.tr(b));
this.add(s);
var p=new qx.ui.layout.Grid();
p.setSpacing(10);
s.setLayout(p);
var q=new qx.ui.basic.Label(this.tr(i));
var o=this._titleTextfield=new qx.ui.form.TextField();
var t=new qx.ui.basic.Label(this.tr(f));
var u=this._urlTextfield=new qx.ui.form.TextField();
s.add(q,{row:0,column:0});
s.add(o,{row:0,column:1});
s.add(t,{row:1,column:0});
s.add(u,{row:1,column:1});
u.setWidth(200);
var r=new qx.ui.form.Button(this.tr(j),d);
r.set({alignX:c,allowGrowX:false});
this.add(r);
r.addListener(a,this._addFeed,this);
},_addFeed:function(e){var m=this._titleTextfield.getValue();

if(m==k){alert(this.tr("Please enter a title."));
return;
}var l=this._urlTextfield.getValue();

if(l==k){alert(this.tr("Please enter a url."));
return;
}this._controller.addFeed(m,l);
this.close();
}}});
})();
(function(){var i="wrap",h="value",g="textarea",f="",e="input",d="qx.html.Input",c="select";
qx.Class.define(d,{extend:qx.html.Element,construct:function(n){arguments.callee.base.call(this);
this.__lG=n;
if(n===c||n===g){this.setNodeName(n);
}else{this.setNodeName(e);
}},members:{__lG:null,_createDomElement:function(){return qx.bom.Input.create(this.__lG);
},_applyProperty:function(name,j){arguments.callee.base.call(this,name,j);
var k=this.getDomElement();

if(name===h){qx.bom.Input.setValue(k,j);
}else if(name===i){qx.bom.Input.setWrap(k,j);
}},setValue:function(a){var b=this.getDomElement();

if(b){if(b.value!=a){qx.bom.Input.setValue(b,a);
}}else{this._setProperty(h,a);
}return this;
},getValue:function(){var m=this.getDomElement();

if(m){return qx.bom.Input.getValue(m);
}return this._getProperty(h)||f;
},setWrap:function(l){if(this.__lG===g){this._setProperty(i,l);
}else{throw new Error("Text wrapping is only support by textareas!");
}return this;
},getWrap:function(){if(this.__lG===g){return this._getProperty(i);
}else{throw new Error("Text wrapping is only support by textareas!");
}}}});
})();
(function(){var y="change",x="input",w="checkbox",v="radio",u="textarea",t="text",s="qx.client",r="propertychange",q="keypress",p="select-multiple",k="checked",n="value",m="select",j="qx.event.handler.Input",h="Enter";
qx.Class.define(j,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){arguments.callee.base.call(this);
this._onChangeCheckedWrapper=qx.lang.Function.listener(this._onChangeChecked,this);
this._onChangeValueWrapper=qx.lang.Function.listener(this._onChangeValue,this);
this._onInputWrapper=qx.lang.Function.listener(this._onInput,this);
this._onPropertyWrapper=qx.lang.Function.listener(this._onProperty,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{input:1,change:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(B,C){var D=B.tagName.toLowerCase();

if(C===x&&(D===x||D===u)){return true;
}
if(C===y&&(D===x||D===u||D===m)){return true;
}return false;
},registerEvent:qx.core.Variant.select(s,{"mshtml":function(M,N,O){if(!M.__lH){var P=M.tagName.toLowerCase();
var Q=M.type;

if(Q===t||P===u||Q===w||Q===v){qx.bom.Event.addNativeListener(M,r,this._onPropertyWrapper);
}
if(Q!==w&&Q!==v){qx.bom.Event.addNativeListener(M,y,this._onChangeValueWrapper);
}this.__lI(M,Q);
M.__lH=true;
}},"default":function(T,U,V){if(U===x){qx.bom.Event.addNativeListener(T,x,this._onInputWrapper);
}else if(U===y){if(T.type===v||T.type===w){qx.bom.Event.addNativeListener(T,y,this._onChangeCheckedWrapper);
}else{qx.bom.Event.addNativeListener(T,y,this._onChangeValueWrapper);
}this.__lI(T,T.type);
}}}),unregisterEvent:qx.core.Variant.select(s,{"mshtml":function(G,H){if(G.__lH){var I=G.tagName.toLowerCase();
var J=G.type;

if(J===t||I===u||J===w||J===v){qx.bom.Event.removeNativeListener(G,r,this._onPropertyWrapper);
}
if(J!==w&&J!==v){qx.bom.Event.removeNativeListener(G,y,this._onChangeValueWrapper);
}
try{delete G.__lH;
}catch(L){G.__lH=null;
}}},"default":function(E,F){if(F===x){qx.bom.Event.removeNativeListener(E,x,this._onInputWrapper);
}else if(F===y){if(E.type===v||E.type===w){qx.bom.Event.removeNativeListener(E,y,this._onChangeCheckedWrapper);
}else{qx.bom.Event.removeNativeListener(E,y,this._onChangeValueWrapper);
}}}}),__lI:qx.core.Variant.select(s,{"mshtml|opera":function(c,d){if(d===t){qx.event.Registration.addListener(c,q,function(e){if(e.getKeyIdentifier()===h){qx.event.Registration.fireEvent(c,y,qx.event.type.Data,[c.value]);
}});
}},"default":function(a,b){}}),_onInput:function(e){var S=e.target;
qx.event.Registration.fireEvent(S,x,qx.event.type.Data,[S.value]);
},_onChangeValue:function(e){var A=e.target||e.srcElement;
var z=A.value;

if(A.type===p){var z=[];

for(var i=0,o=A.options,l=o.length;i<l;i++){if(o[i].selected){z.push(o[i].value);
}}}qx.event.Registration.fireEvent(A,y,qx.event.type.Data,[z]);
},_onChangeChecked:function(e){var R=e.target;

if(R.type===v){if(R.checked){qx.event.Registration.fireEvent(R,y,qx.event.type.Data,[R.value]);
}}else{qx.event.Registration.fireEvent(R,y,qx.event.type.Data,[R.checked]);
}},_onProperty:qx.core.Variant.select(s,{"mshtml":function(e){var f=e.target||e.srcElement;
var g=e.propertyName;

if(g===n&&(f.type===t||f.tagName.toLowerCase()===u)){if(!f.__inValueSet){qx.event.Registration.fireEvent(f,x,qx.event.type.Data,[f.value]);
}}else if(g===k){if(f.type===w){qx.event.Registration.fireEvent(f,y,qx.event.type.Data,[f.checked]);
}else if(f.checked){qx.event.Registration.fireEvent(f,y,qx.event.type.Data,[f.value]);
}}},"default":function(){}})},defer:function(K){qx.event.Registration.addHandler(K);
}});
})();
(function(){var V="",U="select",T="soft",S="off",R="qx.client",Q="wrap",P="text",O="mshtml",N="number",M="checkbox",F="select-one",L="input",I="option",E="value",D="radio",H="qx.bom.Input",G="nowrap",J="textarea",C="auto",K="normal";
qx.Class.define(H,{statics:{__lJ:{text:1,textarea:1,select:1,checkbox:1,radio:1,password:1,hidden:1,submit:1,image:1,file:1,search:1,reset:1,button:1},create:function(W,X,Y){{};
var X=X?qx.lang.Object.clone(X):{};
var ba;

if(W===J||W===U){ba=W;
}else{ba=L;
X.type=W;
}return qx.bom.Element.create(ba,X,Y);
},setValue:function(e,f){var k=e.nodeName.toLowerCase();
var m=e.type;
var Array=qx.lang.Array;

if(typeof f===N){f+=V;
}
if((m===M||m===D)){if(Array.isArray(f)){e.checked=Array.contains(f,e.value);
}else{e.checked=e.value==f;
}}else if(k===U){var g=Array.isArray(f);
var n=e.options;
var h,j;

for(var i=0,l=n.length;i<l;i++){h=n[i];
j=h.getAttribute(E);

if(j==null){j=h.text;
}h.selected=g?Array.contains(f,j):f==j;
}
if(g&&f.length==0){e.selectedIndex=-1;
}}else if(m===P&&qx.core.Variant.isSet(R,O)){e.__lK=true;
e.value=f;
e.__lK=null;
}else{e.value=f;
}},getValue:function(o){var u=o.nodeName.toLowerCase();

if(u===I){return (o.attributes.value||{}).specified?o.value:o.text;
}
if(u===U){var p=o.selectedIndex;
if(p<0){return null;
}var v=[];
var x=o.options;
var w=o.type==F;
var t=qx.bom.Input;
var s;
for(var i=w?p:0,r=w?p+1:x.length;i<r;i++){var q=x[i];

if(q.selected){s=t.getValue(q);
if(w){return s;
}v.push(s);
}}return v;
}else{return (o.value||V).replace(/\r/g,V);
}},setWrap:qx.core.Variant.select(R,{"mshtml":function(A,B){A.wrap=B?T:S;
},"gecko":function(a,b){var d=b?T:S;
var c=b?V:C;
a.setAttribute(Q,d);
a.style.overflow=c;
},"default":function(y,z){y.style.whiteSpace=z?K:G;
}})}});
})();
(function(){var k="none",j="qx.client",i="color",h="qx.event.type.Data",g="readonly",f="off",d="changeValue",c="readOnly",b="text",a="_applyTextAlign",H="Boolean",G="gecko",F="A",E="string",D="change",C="textAlign",B="center",A="disabled",z="_applyReadOnly",y="resize",r="qx.ui.form.AbstractField",s="transparent",p="spellcheck",q="on",n="false",o="right",l="abstract",m="block",t="changeName",u="webkit",w="String",v="qxKeepFocus",x="left";
qx.Class.define(r,{extend:qx.ui.core.Widget,implement:qx.ui.form.IFormElement,type:l,construct:function(M){arguments.callee.base.call(this);

if(M!=null){this.setValue(M);
}this.getContentElement().addListener(D,this._onChangeContent,this);
},events:{"input":h,"changeValue":h},properties:{name:{check:w,nullable:true,event:t},textAlign:{check:[x,B,o],nullable:true,themeable:true,apply:a},readOnly:{check:H,apply:z,init:false},selectable:{refine:true,init:true},focusable:{refine:true,init:true}},members:{getFocusElement:function(){return this.getContentElement();
},_createInputElement:function(){return new qx.html.Input(b);
},_createContentElement:function(){var bb=this._createInputElement();
if(qx.core.Variant.isSet(j,G)){bb.setAttribute(p,n);
}bb.setStyles({"border":k,"padding":0,"margin":0,"display":m,"background":s,"outline":k,"appearance":k,"autoComplete":f});
if(qx.core.Variant.isSet(j,u)){bb.setStyle(y,k);
}return bb;
},_applyEnabled:function(P,Q){arguments.callee.base.call(this,P,Q);
this.getContentElement().setAttribute(A,P===false);
},__lF:{width:16,height:16},_getContentHint:function(){return {width:this.__lF.width*10,height:this.__lF.height||16};
},_applyFont:function(R,S){var T;

if(R){var U=qx.theme.manager.Font.getInstance().resolve(R);
T=U.getStyles();
}else{T=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(T);
if(R){this.__lF=qx.bom.Label.getTextSize(F,T);
}else{delete this.__lF;
}qx.ui.core.queue.Layout.add(this);
},_applyTextColor:function(I,J){if(I){this.getContentElement().setStyle(i,qx.theme.manager.Color.getInstance().resolve(I));
}else{this.getContentElement().removeStyle(i);
}},tabFocus:function(){arguments.callee.base.call(this);
this.selectAll();
},_getTextSize:function(){return this.__lF;
},setValue:function(N){if(typeof N===E||N instanceof String){var O=this.getContentElement();

if(O.getValue()!=N){O.setValue(N);
this.fireNonBubblingEvent(d,qx.event.type.Data,[N]);
}return N;
}throw new Error("Invalid value type: "+N);
},getValue:function(){return this.getContentElement().getValue();
},_onChangeContent:function(e){this.fireNonBubblingEvent(d,qx.event.type.Data,[e.getData()]);
},getSelection:function(){return this.getContentElement().getSelection();
},getSelectionLength:function(){return this.getContentElement().getSelectionLength();
},setSelection:function(K,L){this.getContentElement().setSelection(K,L);
},clearSelection:function(){this.getContentElement().clearSelection();
},selectAll:function(){this.setSelection(0);
},_applyTextAlign:function(Y,ba){this.getContentElement().setStyle(C,Y);
},_applyReadOnly:function(V,W){var X=this.getContentElement();
X.setAttribute(c,V);
X.setAttribute(v,V?q:f);

if(V){this.addState(g);
this.setFocusable(false);
}else{this.removeState(g);
this.setFocusable(true);
}}}});
})();
(function(){var l="input",k="text",j="qx.ui.form.TextField",i="",h="_applyMaxLength",g="textfield",f="Integer",d="maxLength",c="qx.event.type.Data";
qx.Class.define(j,{extend:qx.ui.form.AbstractField,properties:{maxLength:{check:f,apply:h,nullable:true},appearance:{refine:true,init:g},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},events:{"input":c},members:{_createInputElement:function(){var m=new qx.html.Input(k);
m.addListener(l,this._onHtmlInput,this);
return m;
},_onHtmlInput:function(e){this.fireDataEvent(l,e.getData());
},_applyMaxLength:function(a,b){this.getContentElement().setAttribute(d,a==null?i:a);
}}});
})();
