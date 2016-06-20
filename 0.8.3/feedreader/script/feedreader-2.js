(function(){var u="",t="showingPlaceholder",s="none",r="changeValue",q="Boolean",p="qx.client",o="color",n="qx.event.type.Data",m="focusin",l="input",bd="readonly",bc="focusout",bb="readOnly",ba="text",Y="_applyTextAlign",X="RegExp",W="syncAppearance",V="gecko",U="A",T="change",B="textAlign",C="focused",z="center",A="Use public 'getTextSelectionLength' instead!",x="disabled",y="String",v="resize",w="qx.ui.form.AbstractField",D="Use public 'clearTextSelection' instead!",E="transparent",L="Use public 'selectAllText' instead!",J="off",N="spellcheck",M="false",P="right",O="PositiveInteger",G="abstract",S="block",R="webkit",Q="_applyReadOnly",F="Use public 'setTextSelection' instead!",H="_applyPlaceholder",I="left",K="Use public 'getTextSelection' instead!";
qx.Class.define(w,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IFormElement,qx.ui.form.IStringForm,qx.ui.form.IForm],include:[qx.ui.form.MFormElement,qx.ui.form.MForm],type:G,construct:function(bg){arguments.callee.base.call(this);

if(bg!=null){this.setValue(bg);
}this.getContentElement().addListener(T,this._onChangeContent,this);
this.addListener(W,function(e){if(this.hasState(t)){this.getContentElement().setValue(this.getPlaceholder());
}},this);
},events:{"input":n,"changeValue":n},properties:{textAlign:{check:[I,z,P],nullable:true,themeable:true,apply:Y},readOnly:{check:q,apply:Q,init:false},selectable:{refine:true,init:true},focusable:{refine:true,init:true},maxLength:{check:O,init:Infinity},liveUpdate:{check:q,init:false},placeholder:{check:y,nullable:true,apply:H},filter:{check:X,nullable:true,init:null}},members:{__p:true,getFocusElement:function(){return this.getContentElement();
},_createInputElement:function(){return new qx.html.Input(ba);
},_createContentElement:function(){var f=this._createInputElement();
f.setSelectable(this.getSelectable());
f.setEnabled(this.getEnabled());
f.addListener(l,this._onHtmlInput,this);
if(qx.core.Variant.isSet(p,V)){f.setAttribute(N,M);
}f.setStyles({"border":s,"padding":0,"margin":0,"display":S,"background":E,"outline":s,"appearance":s,"autoComplete":J});
if(qx.core.Variant.isSet(p,R)){f.setStyle(v,s);
}return f;
},_applyEnabled:function(a,b){arguments.callee.base.call(this,a,b);
this.getContentElement().setEnabled(a);

if(a){this._showPlaceholder();
}else{this._removePlaceholder();
}},__q:{width:16,height:16},_getContentHint:function(){return {width:this.__q.width*10,height:this.__q.height||16};
},_applyFont:function(bs,bt){var bu;

if(bs){var bv=qx.theme.manager.Font.getInstance().resolve(bs);
bu=bv.getStyles();
}else{bu=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(bu);
if(bs){this.__q=qx.bom.Label.getTextSize(U,bu);
}else{delete this.__q;
}qx.ui.core.queue.Layout.add(this);
},_applyTextColor:function(bq,br){if(bq){this.getContentElement().setStyle(o,qx.theme.manager.Color.getInstance().resolve(bq));
}else{this.getContentElement().removeStyle(o);
}},tabFocus:function(){arguments.callee.base.call(this);
this.selectAllText();
},_getTextSize:function(){return this.__q;
},_onHtmlInput:function(e){var j=e.getData();
var i=true;
this.__p=false;
if(this.getFilter()!=null){var k=u;
var g=j.search(this.getFilter());
var h=j;

while(g>=0){k=k+(h.charAt(g));
h=h.substring(g+1,h.length);
g=h.search(this.getFilter());
}
if(k!=j){i=false;
j=k;
this.getContentElement().setValue(j);
}}if(j.length>this.getMaxLength()){var i=false;
this.getContentElement().setValue(j.substr(0,this.getMaxLength()));
}if(i){this.fireDataEvent(l,j);
if(this.getLiveUpdate()){this.fireNonBubblingEvent(r,qx.event.type.Data,[j]);
}}},setValue:function(bw){if(bw===null){if(this.__p){return bw;
}bw=u;
this.__p=true;
}else{this.__p=false;
this._removePlaceholder();
}
if(qx.lang.Type.isString(bw)){var by=this.getContentElement();

if(bw.length>this.getMaxLength()){bw=bw.substr(0,this.getMaxLength());
}
if(by.getValue()!=bw){var bz=by.getValue();
by.setValue(bw);
var bx=this.__p?null:bw;
this.fireNonBubblingEvent(r,qx.event.type.Data,[bx,bz]);
}this._showPlaceholder();
return bw;
}throw new Error("Invalid value type: "+bw);
},getValue:function(){var bf=this.hasState(t);
var be=bf?u:this.getContentElement().getValue();
return this.__p?null:be;
},resetValue:function(){this.setValue(null);
},_onChangeContent:function(e){this.__p=e.getData()===null;
this.fireNonBubblingEvent(r,qx.event.type.Data,[e.getData()]);
},getSelection:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,K);
return this.getTextSelection();
},getSelectionLength:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,A);
return this.getTextSelectionLength();
},setSelection:function(bA,bB){qx.log.Logger.deprecatedMethodWarning(arguments.callee,F);
this.setTextSelection(bA,bB);
},clearSelection:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,D);
this.clearTextSelection();
},selectAll:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,L);
this.selectAllText();
},getTextSelection:function(){return this.getContentElement().getTextSelection();
},getTextSelectionLength:function(){return this.getContentElement().getTextSelectionLength();
},setTextSelection:function(c,d){this.getContentElement().setTextSelection(c,d);
},clearTextSelection:function(){this.getContentElement().clearTextSelection();
},selectAllText:function(){this.setTextSelection(0);
},_showPlaceholder:function(){var bn=this.getValue()||u;
var bm=this.getPlaceholder();

if(bm!=null&&!this.hasState(C)&&bn==u&&!this.hasState(x)){this.addState(t);
}},_removePlaceholder:function(){if(this.hasState(t)){this.getContentElement().setValue(u);
this.removeState(t);
}},_applyPlaceholder:function(bh,bi){if(bh!=null){this.addListener(m,this._removePlaceholder,this);
this.addListener(bc,this._showPlaceholder,this);
this._showPlaceholder();
}else{this.removeListener(m,this._removePlaceholder,this);
this.removeListener(bc,this._showPlaceholder,this);
this._removePlaceholder();
}},_applyTextAlign:function(bo,bp){this.getContentElement().setStyle(B,bo);
},_applyReadOnly:function(bj,bk){var bl=this.getContentElement();
bl.setAttribute(bb,bj);

if(bj){this.addState(bd);
this.setFocusable(false);
}else{this.removeState(bd);
this.setFocusable(true);
}}}});
})();
(function(){var b="qx.ui.form.TextField",a="textfield";
qx.Class.define(b,{extend:qx.ui.form.AbstractField,properties:{appearance:{refine:true,init:a},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}}});
})();
(function(){var t="none",s="wrap",r="value",q="qx.client",p="textarea",o="userSelect",n="on",m="off",l="userModify",k="qxSelectable",f="",j="webkit",i="input",e="qx.html.Input",d="select",h="disabled",g="read-only";
qx.Class.define(e,{extend:qx.html.Element,construct:function(v){arguments.callee.base.call(this);
this.__d=v;
if(v===d||v===p){this.setNodeName(v);
}else{this.setNodeName(i);
}},members:{__d:null,__e:null,__f:null,_createDomElement:function(){return qx.bom.Input.create(this.__d);
},_applyProperty:function(name,b){arguments.callee.base.call(this,name,b);
var c=this.getDomElement();

if(name===r){qx.bom.Input.setValue(c,b);
}else if(name===s){qx.bom.Input.setWrap(c,b);
}},setEnabled:qx.core.Variant.select(q,{"webkit":function(a){this.__f=a;

if(!a){this.setStyle(l,g);
this.setStyle(o,t);
}else{this.setStyle(l,null);
this.setStyle(o,this.__e?null:t);
}},"default":function(z){this.setAttribute(h,z===false);
}}),setSelectable:qx.core.Variant.select(q,{"webkit":function(w){this.__e=w;
this.setAttribute(k,w?n:m);
if(qx.core.Variant.isSet(q,j)){var x=this.__f?w?null:t:t;
this.setStyle(o,x);
}},"default":function(y){this.setAttribute(k,y?n:m);
}}),setValue:function(A){var B=this.getDomElement();

if(B){if(B.value!=A){qx.bom.Input.setValue(B,A);
}}else{this._setProperty(r,A);
}return this;
},getValue:function(){var u=this.getDomElement();

if(u){return qx.bom.Input.getValue(u);
}return this._getProperty(r)||f;
},setWrap:function(C){if(this.__d===p){this._setProperty(s,C);
}else{throw new Error("Text wrapping is only support by textareas!");
}return this;
},getWrap:function(){if(this.__d===p){return this._getProperty(s);
}else{throw new Error("Text wrapping is only support by textareas!");
}}}});
})();
(function(){var N="change",M="input",L="checkbox",K="radio",J="textarea",I="qx.client",H="text",G="password",F="keypress",E="propertychange",A="select-multiple",D="checked",C="value",z="select",y="qx.event.handler.Input",B="Enter";
qx.Class.define(y,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){arguments.callee.base.call(this);
this._onChangeCheckedWrapper=qx.lang.Function.listener(this._onChangeChecked,this);
this._onChangeValueWrapper=qx.lang.Function.listener(this._onChangeValue,this);
this._onInputWrapper=qx.lang.Function.listener(this._onInput,this);
this._onPropertyWrapper=qx.lang.Function.listener(this._onProperty,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{input:1,change:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(a,b){var c=a.tagName.toLowerCase();

if(b===M&&(c===M||c===J)){return true;
}
if(b===N&&(c===M||c===J||c===z)){return true;
}return false;
},registerEvent:qx.core.Variant.select(I,{"mshtml":function(j,k,m){if(!j.__i){var n=j.tagName.toLowerCase();
var p=j.type;

if(p===H||p===G||n===J||p===L||p===K){qx.bom.Event.addNativeListener(j,E,this._onPropertyWrapper);
}
if(p!==L&&p!==K){qx.bom.Event.addNativeListener(j,N,this._onChangeValueWrapper);
}this.__l(j,p);
j.__i=true;
}},"default":function(q,r,s){if(r===M){this.__j(q);
}else if(r===N){if(q.type===K||q.type===L){qx.bom.Event.addNativeListener(q,N,this._onChangeCheckedWrapper);
}else{qx.bom.Event.addNativeListener(q,N,this._onChangeValueWrapper);
}this.__l(q,q.type);
}}}),__j:qx.core.Variant.select(I,{"mshtml":null,"webkit":function(g){var h=g.tagName.toLowerCase();
if(qx.bom.client.Engine.VERSION<532&&h==J){qx.bom.Event.addNativeListener(g,F,this._onInputWrapper);
}qx.bom.Event.addNativeListener(g,M,this._onInputWrapper);
},"default":function(R){qx.bom.Event.addNativeListener(R,M,this._onInputWrapper);
}}),unregisterEvent:qx.core.Variant.select(I,{"mshtml":function(X,Y){if(X.__i){var ba=X.tagName.toLowerCase();
var bb=X.type;

if(bb===H||bb===G||ba===J||bb===L||bb===K){qx.bom.Event.removeNativeListener(X,E,this._onPropertyWrapper);
}
if(bb!==L&&bb!==K){qx.bom.Event.removeNativeListener(X,N,this._onChangeValueWrapper);
}
try{delete X.__i;
}catch(f){X.__i=null;
}}},"default":function(V,W){if(W===M){this.__j(V);
}else if(W===N){if(V.type===K||V.type===L){qx.bom.Event.removeNativeListener(V,N,this._onChangeCheckedWrapper);
}else{qx.bom.Event.removeNativeListener(V,N,this._onChangeValueWrapper);
}}}}),__k:qx.core.Variant.select(I,{"mshtml":null,"webkit":function(O){var P=O.tagName.toLowerCase();
if(qx.bom.client.Engine.VERSION<532&&P==J){qx.bom.Event.removeNativeListener(O,F,this._onInputWrapper);
}qx.bom.Event.removeNativeListener(O,M,this._onInputWrapper);
},"default":function(x){qx.bom.Event.removeNativeListener(x,M,this._onInputWrapper);
}}),__l:qx.core.Variant.select(I,{"mshtml|opera":function(bc,bd){if(bd===H||bd===G){qx.event.Registration.addListener(bc,F,function(e){if(e.getKeyIdentifier()===B){qx.event.Registration.fireEvent(bc,N,qx.event.type.Data,[bc.value]);
}});
}},"default":function(t,u){}}),_onInput:qx.event.GlobalError.observeMethod(function(e){var S=e.target;
qx.event.Registration.fireEvent(S,M,qx.event.type.Data,[S.value]);
}),_onChangeValue:qx.event.GlobalError.observeMethod(function(e){var U=e.target||e.srcElement;
var T=U.value;

if(U.type===A){var T=[];

for(var i=0,o=U.options,l=o.length;i<l;i++){if(o[i].selected){T.push(o[i].value);
}}}qx.event.Registration.fireEvent(U,N,qx.event.type.Data,[T]);
}),_onChangeChecked:qx.event.GlobalError.observeMethod(function(e){var d=e.target;

if(d.type===K){if(d.checked){qx.event.Registration.fireEvent(d,N,qx.event.type.Data,[d.value]);
}}else{qx.event.Registration.fireEvent(d,N,qx.event.type.Data,[d.checked]);
}}),_onProperty:qx.core.Variant.select(I,{"mshtml":qx.event.GlobalError.observeMethod(function(e){var v=e.target||e.srcElement;
var w=e.propertyName;

if(w===C&&(v.type===H||v.type===G||v.tagName.toLowerCase()===J)){if(!v.__inValueSet){qx.event.Registration.fireEvent(v,M,qx.event.type.Data,[v.value]);
}}else if(w===D){if(v.type===L){qx.event.Registration.fireEvent(v,N,qx.event.type.Data,[v.checked]);
}else if(v.checked){qx.event.Registration.fireEvent(v,N,qx.event.type.Data,[v.value]);
}}}),"default":function(){}})},defer:function(Q){qx.event.Registration.addHandler(Q);
}});
})();
(function(){var D="",C="select",B="soft",A="off",z="qx.client",y="wrap",x="text",w="mshtml",v="number",u="checkbox",n="select-one",t="input",q="option",m="value",k="radio",p="qx.bom.Input",o="nowrap",r="textarea",j="auto",s="normal";
qx.Class.define(p,{statics:{__g:{text:1,textarea:1,select:1,checkbox:1,radio:1,password:1,hidden:1,submit:1,image:1,file:1,search:1,reset:1,button:1},create:function(a,b,c){{};
var b=b?qx.lang.Object.clone(b):{};
var d;

if(a===r||a===C){d=a;
}else{d=t;
b.type=a;
}return qx.bom.Element.create(d,b,c);
},setValue:function(Q,R){var W=Q.nodeName.toLowerCase();
var T=Q.type;
var Array=qx.lang.Array;
var X=qx.lang.Type;

if(typeof R===v){R+=D;
}
if((T===u||T===k)){if(X.isArray(R)){Q.checked=Array.contains(R,Q.value);
}else{Q.checked=Q.value==R;
}}else if(W===C){var S=X.isArray(R);
var Y=Q.options;
var U,V;

for(var i=0,l=Y.length;i<l;i++){U=Y[i];
V=U.getAttribute(m);

if(V==null){V=U.text;
}U.selected=S?Array.contains(R,V):R==V;
}
if(S&&R.length==0){Q.selectedIndex=-1;
}}else if(T===x&&qx.core.Variant.isSet(z,w)){Q.__h=true;
Q.value=R;
Q.__h=null;
}else{Q.value=R;
}},getValue:function(G){var M=G.nodeName.toLowerCase();

if(M===q){return (G.attributes.value||{}).specified?G.value:G.text;
}
if(M===C){var H=G.selectedIndex;
if(H<0){return null;
}var N=[];
var P=G.options;
var O=G.type==n;
var L=qx.bom.Input;
var K;
for(var i=O?H:0,J=O?H+1:P.length;i<J;i++){var I=P[i];

if(I.selected){K=L.getValue(I);
if(O){return K;
}N.push(K);
}}return N;
}else{return (G.value||D).replace(/\r/g,D);
}},setWrap:qx.core.Variant.select(z,{"mshtml":function(E,F){E.wrap=F?B:A;
},"gecko":function(e,f){var h=f?B:A;
var g=f?D:j;
e.setAttribute(y,h);
e.style.overflow=g;
},"default":function(ba,bb){ba.style.whiteSpace=bb?s:o;
}})}});
})();
(function(){var o="",n="Add",m="Title:",l="Add a feed",k="feedreader.view.AddFeedWindow",j="user",i="URL:",h="icon/16/actions/document-new.png",g="icon/16/actions/dialog-apply.png",f="right",c="Feed Information",d="execute";
qx.Class.define(k,{extend:qx.ui.window.Window,construct:function(w){arguments.callee.base.call(this,this.tr(l),h);
this.__m=w;
this.set({modal:true,showMinimize:false,showMaximize:false,allowMaximize:false});
this._addContent();
},members:{__n:null,__o:null,__m:null,_addContent:function(){this.setLayout(new qx.ui.layout.VBox(10));
var t=new qx.ui.groupbox.GroupBox(this.tr(c));
this.add(t);
var q=new qx.ui.layout.Grid();
q.setSpacing(10);
t.setLayout(q);
var r=new qx.ui.basic.Label(this.tr(m));
var p=this.__o=new qx.ui.form.TextField();
var u=new qx.ui.basic.Label(this.tr(i));
var v=this.__n=new qx.ui.form.TextField();
t.add(r,{row:0,column:0});
t.add(p,{row:0,column:1});
t.add(u,{row:1,column:0});
t.add(v,{row:1,column:1});
v.setWidth(200);
var s=new qx.ui.form.Button(this.tr(n),g);
s.set({alignX:f,allowGrowX:false});
this.add(s);
s.addListener(d,this._addFeed,this);
},_addFeed:function(e){var b=this.__o.getValue();

if(b==null||b==o){alert(this.tr("Please enter a title."));
return;
}var a=this.__n.getValue();

if(a==null||b==o){alert(this.tr("Please enter a url."));
return;
}this.__m.addFeed(b,a,j);
this.close();
}}});
})();
