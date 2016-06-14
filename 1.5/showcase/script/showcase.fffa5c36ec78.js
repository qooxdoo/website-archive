qx.$$packageData['1923']={"locales":{},"resources":{},"translations":{}};
qx.Part.$$notifyLoad("1923", function() {
(function(){var m="input",k="engine.name",j="change",h="text",g="password",f="engine.version",d="radio",c="textarea",b="checkbox",a="keypress",A="browser.documentmode",z="opera",y="keyup",x="mshtml",w="blur",v="keydown",u="propertychange",t="browser.version",s="select-multiple",r="value",p="select",q="qx.event.handler.Input",n="checked";
qx.Class.define(q,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){qx.core.Object.call(this);
this._onChangeCheckedWrapper=qx.lang.Function.listener(this._onChangeChecked,this);
this._onChangeValueWrapper=qx.lang.Function.listener(this._onChangeValue,this);
this._onInputWrapper=qx.lang.Function.listener(this._onInput,this);
this._onPropertyWrapper=qx.lang.Function.listener(this._onProperty,this);
if((qx.core.Environment.get(k)==z)){this._onKeyDownWrapper=qx.lang.Function.listener(this._onKeyDown,this);
this._onKeyUpWrapper=qx.lang.Function.listener(this._onKeyUp,this);
this._onBlurWrapper=qx.lang.Function.listener(this._onBlur,this);
}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{input:1,change:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{__c:false,__d:null,__e:null,__f:null,canHandleEvent:function(B,C){var D=B.tagName.toLowerCase();

if(C===m&&(D===m||D===c)){return true;
}
if(C===j&&(D===m||D===c||D===p)){return true;
}return false;
},registerEvent:function(E,F,G){if(qx.core.Environment.get(k)==x&&(qx.core.Environment.get(f)<9||(qx.core.Environment.get(f)>=9&&qx.core.Environment.get(A)<9))){if(!E.__g){var H=E.tagName.toLowerCase();
var I=E.type;

if(I===h||I===g||H===c||I===b||I===d){qx.bom.Event.addNativeListener(E,u,this._onPropertyWrapper);
}
if(I!==b&&I!==d){qx.bom.Event.addNativeListener(E,j,this._onChangeValueWrapper);
}
if(I===h||I===g){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,E);
qx.bom.Event.addNativeListener(E,a,this._onKeyPressWrapped);
}E.__g=true;
}}else{if(F===m){this.__h(E);
}else if(F===j){if(E.type===d||E.type===b){qx.bom.Event.addNativeListener(E,j,this._onChangeCheckedWrapper);
}else{qx.bom.Event.addNativeListener(E,j,this._onChangeValueWrapper);
}if((qx.core.Environment.get(k)==z)||(qx.core.Environment.get(k)==x)){if(E.type===h||E.type===g){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,E);
qx.bom.Event.addNativeListener(E,a,this._onKeyPressWrapped);
}}}}},__h:qx.core.Environment.select(k,{"mshtml":function(J){if(qx.core.Environment.get(f)>=9&&qx.core.Environment.get(A)>=9){qx.bom.Event.addNativeListener(J,m,this._onInputWrapper);

if(J.type===h||J.type===g){this._inputFixWrapper=qx.lang.Function.listener(this._inputFix,this,J);
qx.bom.Event.addNativeListener(J,y,this._inputFixWrapper);
}}},"webkit":function(K){var L=K.tagName.toLowerCase();
if(parseFloat(qx.core.Environment.get(f))<532&&L==c){qx.bom.Event.addNativeListener(K,a,this._onInputWrapper);
}qx.bom.Event.addNativeListener(K,m,this._onInputWrapper);
},"opera":function(M){qx.bom.Event.addNativeListener(M,y,this._onKeyUpWrapper);
qx.bom.Event.addNativeListener(M,v,this._onKeyDownWrapper);
qx.bom.Event.addNativeListener(M,w,this._onBlurWrapper);
qx.bom.Event.addNativeListener(M,m,this._onInputWrapper);
},"default":function(N){qx.bom.Event.addNativeListener(N,m,this._onInputWrapper);
}}),unregisterEvent:function(O,P){if(qx.core.Environment.get(k)==x&&qx.core.Environment.get(f)<9&&qx.core.Environment.get(A)<9){if(O.__g){var Q=O.tagName.toLowerCase();
var R=O.type;

if(R===h||R===g||Q===c||R===b||R===d){qx.bom.Event.removeNativeListener(O,u,this._onPropertyWrapper);
}
if(R!==b&&R!==d){qx.bom.Event.removeNativeListener(O,j,this._onChangeValueWrapper);
}
if(R===h||R===g){qx.bom.Event.removeNativeListener(O,a,this._onKeyPressWrapped);
}
try{delete O.__g;
}catch(S){O.__g=null;
}}}else{if(P===m){this.__i(O);
}else if(P===j){if(O.type===d||O.type===b){qx.bom.Event.removeNativeListener(O,j,this._onChangeCheckedWrapper);
}else{qx.bom.Event.removeNativeListener(O,j,this._onChangeValueWrapper);
}}
if((qx.core.Environment.get(k)==z)||(qx.core.Environment.get(k)==x)){if(O.type===h||O.type===g){qx.bom.Event.removeNativeListener(O,a,this._onKeyPressWrapped);
}}}},__i:qx.core.Environment.select(k,{"mshtml":function(T){if(qx.core.Environment.get(f)>=9&&qx.core.Environment.get(A)>=9){qx.bom.Event.removeNativeListener(T,m,this._onInputWrapper);

if(T.type===h||T.type===g){qx.bom.Event.removeNativeListener(T,y,this._inputFixWrapper);
}}},"webkit":function(U){var V=U.tagName.toLowerCase();
if(parseFloat(qx.core.Environment.get(f))<532&&V==c){qx.bom.Event.removeNativeListener(U,a,this._onInputWrapper);
}qx.bom.Event.removeNativeListener(U,m,this._onInputWrapper);
},"opera":function(W){qx.bom.Event.removeNativeListener(W,y,this._onKeyUpWrapper);
qx.bom.Event.removeNativeListener(W,v,this._onKeyDownWrapper);
qx.bom.Event.removeNativeListener(W,w,this._onBlurWrapper);
qx.bom.Event.removeNativeListener(W,m,this._onInputWrapper);
},"default":function(X){qx.bom.Event.removeNativeListener(X,m,this._onInputWrapper);
}}),_onKeyPress:qx.core.Environment.select(k,{"mshtml|opera":function(e,Y){if(e.keyCode===13){if(Y.value!==this.__e){this.__e=Y.value;
qx.event.Registration.fireEvent(Y,j,qx.event.type.Data,[Y.value]);
}}},"default":null}),_inputFix:qx.core.Environment.select(k,{"mshtml":function(e,ba){if(e.keyCode===46||e.keyCode===8){if(ba.value!==this.__f){this.__f=ba.value;
qx.event.Registration.fireEvent(ba,m,qx.event.type.Data,[ba.value]);
}}},"default":null}),_onKeyDown:qx.core.Environment.select(k,{"opera":function(e){if(e.keyCode===13){this.__c=true;
}},"default":null}),_onKeyUp:qx.core.Environment.select(k,{"opera":function(e){if(e.keyCode===13){this.__c=false;
}},"default":null}),_onBlur:qx.core.Environment.select(k,{"opera":function(e){if(this.__d&&qx.core.Environment.get(t)<10.6){window.clearTimeout(this.__d);
}},"default":null}),_onInput:qx.event.GlobalError.observeMethod(function(e){var bc=qx.bom.Event.getTarget(e);
var bb=bc.tagName.toLowerCase();
if(!this.__c||bb!==m){if((qx.core.Environment.get(k)==z)&&qx.core.Environment.get(t)<10.6){this.__d=window.setTimeout(function(){qx.event.Registration.fireEvent(bc,m,qx.event.type.Data,[bc.value]);
},0);
}else{qx.event.Registration.fireEvent(bc,m,qx.event.type.Data,[bc.value]);
}}}),_onChangeValue:qx.event.GlobalError.observeMethod(function(e){var be=qx.bom.Event.getTarget(e);
var bd=be.value;

if(be.type===s){var bd=[];

for(var i=0,o=be.options,l=o.length;i<l;i++){if(o[i].selected){bd.push(o[i].value);
}}}qx.event.Registration.fireEvent(be,j,qx.event.type.Data,[bd]);
}),_onChangeChecked:qx.event.GlobalError.observeMethod(function(e){var bf=qx.bom.Event.getTarget(e);

if(bf.type===d){if(bf.checked){qx.event.Registration.fireEvent(bf,j,qx.event.type.Data,[bf.value]);
}}else{qx.event.Registration.fireEvent(bf,j,qx.event.type.Data,[bf.checked]);
}}),_onProperty:qx.core.Environment.select(k,{"mshtml":qx.event.GlobalError.observeMethod(function(e){var bg=qx.bom.Event.getTarget(e);
var bh=e.propertyName;

if(bh===r&&(bg.type===h||bg.type===g||bg.tagName.toLowerCase()===c)){if(!bg.$$inValueSet){qx.event.Registration.fireEvent(bg,m,qx.event.type.Data,[bg.value]);
}}else if(bh===n){if(bg.type===b){qx.event.Registration.fireEvent(bg,j,qx.event.type.Data,[bg.checked]);
}else if(bg.checked){qx.event.Registration.fireEvent(bg,j,qx.event.type.Data,[bg.value]);
}}}),"default":function(){}})},defer:function(bi){qx.event.Registration.addHandler(bi);
}});
})();
(function(){var k="showingPlaceholder",j="",i="none",h="qx.dynlocale",g="engine.name",f="Boolean",d="color",c="qx.event.type.Data",b="readonly",a="placeholder",Y="input",X="focusin",W="visibility",V="focusout",U="changeLocale",T="readOnly",S="text",R="_applyTextAlign",Q="px",P="RegExp",r=")",s="syncAppearance",p="gecko",q="change",n="textAlign",o="focused",l="center",m="visible",v="disabled",w="url(",D="String",B="resize",H="qx.ui.form.AbstractField",F="transparent",L="spellcheck",J="false",y="right",O="PositiveInteger",N="mshtml",M="abstract",x="block",z="webkit",A="_applyReadOnly",C="_applyPlaceholder",E="hidden",G="left",I="off",K="qx/static/blank.gif",t="changeReadOnly",u="absolute";
qx.Class.define(H,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm,qx.ui.form.IForm],include:[qx.ui.form.MForm],type:M,construct:function(ba){qx.ui.core.Widget.call(this);
this.__I=!qx.core.Environment.get("css.placeholder")||(qx.core.Environment.get("engine.name")=="gecko"&&parseFloat(qx.core.Environment.get("engine.version"))>=2);

if(ba!=null){this.setValue(ba);
}this.getContentElement().addListener(q,this._onChangeContent,this);
if(this.__I){this.addListener(s,this._syncPlaceholder,this);
}if(qx.core.Environment.get(h)){qx.locale.Manager.getInstance().addListener(U,this._onChangeLocale,this);
}},events:{"input":c,"changeValue":c},properties:{textAlign:{check:[G,l,y],nullable:true,themeable:true,apply:R},readOnly:{check:f,apply:A,event:t,init:false},selectable:{refine:true,init:true},focusable:{refine:true,init:true},maxLength:{check:O,init:Infinity},liveUpdate:{check:f,init:false},placeholder:{check:D,nullable:true,apply:C},filter:{check:P,nullable:true,init:null}},members:{__J:true,__K:null,__e:null,__f:null,__I:true,__L:null,__M:null,getFocusElement:function(){var bb=this.getContentElement();

if(bb){return bb;
}},_createInputElement:function(){return new qx.html.Input(S);
},renderLayout:function(bc,top,bd,be){var bf=this._updateInsets;
var bj=qx.ui.core.Widget.prototype.renderLayout.call(this,bc,top,bd,be);
if(!bj){return;
}var bh=bj.size||bf;
var bk=Q;

if(bh||bj.local||bj.margin){var bg=this.getInsets();
var innerWidth=bd-bg.left-bg.right;
var innerHeight=be-bg.top-bg.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}var bi=this.getContentElement();
if(bf&&this.__I){this.__P().setStyles({"left":bg.left+bk,"top":bg.top+bk});
}
if(bh){if(this.__I){this.__P().setStyles({"width":innerWidth+bk,"height":innerHeight+bk});
}bi.setStyles({"width":innerWidth+bk,"height":innerHeight+bk});
this._renderContentElement(innerHeight,bi);
}},_renderContentElement:function(innerHeight,bl){},_createContentElement:function(){var bm=this._createInputElement();
bm.setStyles({"border":i,"padding":0,"margin":0,"display":x,"background":F,"outline":i,"appearance":i,"position":u,"autoComplete":I});
bm.setSelectable(this.getSelectable());
bm.setEnabled(this.getEnabled());
bm.addListener(Y,this._onHtmlInput,this);
bm.setAttribute(L,J);
if(qx.core.Environment.get(g)==z||qx.core.Environment.get(g)==p){bm.setStyle(B,i);
}if((qx.core.Environment.get(g)==N)){bm.setStyles({backgroundImage:w+qx.util.ResourceManager.getInstance().toUri(K)+r});
}return bm;
},_applyEnabled:function(bn,bo){qx.ui.core.Widget.prototype._applyEnabled.call(this,bn,bo);
this.getContentElement().setEnabled(bn);

if(this.__I){if(bn){this._showPlaceholder();
}else{this._removePlaceholder();
}}else{var bp=this.getContentElement();
bp.setAttribute(a,bn?this.getPlaceholder():j);
}},__N:{width:16,height:16},_getContentHint:function(){return {width:this.__N.width*10,height:this.__N.height||16};
},_applyFont:function(bq,br){if(br&&this.__L&&this.__M){this.__L.removeListenerById(this.__M);
this.__M=null;
}var bs;

if(bq){this.__L=qx.theme.manager.Font.getInstance().resolve(bq);

if(this.__L instanceof qx.bom.webfonts.WebFont){this.__M=this.__L.addListener("changeStatus",this._onWebFontStatusChange,this);
}bs=this.__L.getStyles();
}else{bs=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(bs);
if(this.__I){this.__P().setStyles(bs);
}if(bq){this.__N=qx.bom.Label.getTextSize("A",bs);
}else{delete this.__N;
}qx.ui.core.queue.Layout.add(this);
},_applyTextColor:function(bt,bu){if(bt){this.getContentElement().setStyle(d,qx.theme.manager.Color.getInstance().resolve(bt));
}else{this.getContentElement().removeStyle(d);
}},tabFocus:function(){qx.ui.core.Widget.prototype.tabFocus.call(this);
this.selectAllText();
},_getTextSize:function(){return this.__N;
},_onHtmlInput:function(e){var by=e.getData();
var bx=true;
this.__J=false;
if(this.getFilter()!=null){var bz=j;
var bv=by.search(this.getFilter());
var bw=by;

while(bv>=0){bz=bz+(bw.charAt(bv));
bw=bw.substring(bv+1,bw.length);
bv=bw.search(this.getFilter());
}
if(bz!=by){bx=false;
by=bz;
this.getContentElement().setValue(by);
}}if(by.length>this.getMaxLength()){bx=false;
this.getContentElement().setValue(by.substr(0,this.getMaxLength()));
}if(bx){this.fireDataEvent(Y,by,this.__f);
this.__f=by;
if(this.getLiveUpdate()){this.__O(by);
}}},_onWebFontStatusChange:function(bA){if(bA.getData().valid===true){var bB=this.__L.getStyles();
this.__N=qx.bom.Label.getTextSize("A",bB);
qx.ui.core.queue.Layout.add(this);
}},__O:function(bC){var bD=this.__e;
this.__e=bC;

if(bD!=bC){this.fireNonBubblingEvent("changeValue",qx.event.type.Data,[bC,bD]);
}},setValue:function(bE){if(bE===null){if(this.__J){return bE;
}bE=j;
this.__J=true;
}else{this.__J=false;
if(this.__I){this._removePlaceholder();
}}
if(qx.lang.Type.isString(bE)){var bG=this.getContentElement();

if(bE.length>this.getMaxLength()){bE=bE.substr(0,this.getMaxLength());
}
if(bG.getValue()!=bE){var bH=bG.getValue();
bG.setValue(bE);
var bF=this.__J?null:bE;
this.__e=bH;
this.__O(bF);
}if(this.__I){this._showPlaceholder();
}return bE;
}throw new Error("Invalid value type: "+bE);
},getValue:function(){var bI=this.getContentElement().getValue();
return this.__J?null:bI;
},resetValue:function(){this.setValue(null);
},_onChangeContent:function(e){this.__J=e.getData()===null;
this.__O(e.getData());
},getTextSelection:function(){return this.getContentElement().getTextSelection();
},getTextSelectionLength:function(){return this.getContentElement().getTextSelectionLength();
},getTextSelectionStart:function(){return this.getContentElement().getTextSelectionStart();
},getTextSelectionEnd:function(){return this.getContentElement().getTextSelectionEnd();
},setTextSelection:function(bJ,bK){this.getContentElement().setTextSelection(bJ,bK);
},clearTextSelection:function(){this.getContentElement().clearTextSelection();
},selectAllText:function(){this.setTextSelection(0);
},_showPlaceholder:function(){var bM=this.getValue()||j;
var bL=this.getPlaceholder();

if(bL!=null&&bM==j&&!this.hasState(o)&&!this.hasState(v)){if(this.hasState(k)){this._syncPlaceholder();
}else{this.addState(k);
}}},_removePlaceholder:function(){if(this.hasState(k)){this.__P().setStyle(W,E);
this.removeState(k);
}},_syncPlaceholder:function(){if(this.hasState(k)){this.__P().setStyle(W,m);
}},__P:function(){if(this.__K==null){this.__K=new qx.html.Label();
var bN=qx.theme.manager.Color.getInstance();
this.__K.setStyles({"visibility":"hidden","zIndex":6,"position":"absolute","color":bN.resolve("text-placeholder")});
this.getContainerElement().add(this.__K);
}return this.__K;
},_onChangeLocale:qx.core.Environment.select(h,{"true":function(e){var content=this.getPlaceholder();

if(content&&content.translate){this.setPlaceholder(content.translate());
}},"false":null}),_applyPlaceholder:function(bO,bP){if(this.__I){this.__P().setValue(bO);

if(bO!=null){this.addListener(X,this._removePlaceholder,this);
this.addListener(V,this._showPlaceholder,this);
this._showPlaceholder();
}else{this.removeListener(X,this._removePlaceholder,this);
this.removeListener(V,this._showPlaceholder,this);
this._removePlaceholder();
}}else{if(this.getEnabled()){this.getContentElement().setAttribute(a,bO);
}}},_applyTextAlign:function(bQ,bR){this.getContentElement().setStyle(n,bQ);
},_applyReadOnly:function(bS,bT){var bU=this.getContentElement();
bU.setAttribute(T,bS);

if(bS){this.addState(b);
this.setFocusable(false);
}else{this.removeState(b);
this.setFocusable(true);
}}},destruct:function(){this.__K=this.__L=null;

if(qx.core.Environment.get(h)){qx.locale.Manager.getInstance().removeListener(U,this._onChangeLocale,this);
}
if(this.__L&&this.__M){this.__L.removeListenerById(this.__M);
}}});
})();
(function(){var f="mshtml",e="engine.name",d="qx.ui.form.TextField",c='px',b="textfield",a="engine.version";
qx.Class.define(d,{extend:qx.ui.form.AbstractField,properties:{appearance:{refine:true,init:b},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{_renderContentElement:function(innerHeight,g){if((qx.core.Environment.get(e)==f)&&qx.core.Environment.get(a)<9){g.setStyles({"line-height":innerHeight+c});
}}}});
})();
(function(){var n="wrap",m="value",l="textarea",k="engine.name",j="none",i="",h="overflow",g="input",f="qx.html.Input",e="select",b="disabled",d="read-only",c="overflowX",a="overflowY";
qx.Class.define(f,{extend:qx.html.Element,construct:function(o,p,q){if(o===e||o===l){var r=o;
}else{r=g;
}qx.html.Element.call(this,r,p,q);
this.__E=o;
},members:{__E:null,__F:null,__G:null,_createDomElement:function(){return qx.bom.Input.create(this.__E);
},_applyProperty:function(name,s){qx.html.Element.prototype._applyProperty.call(this,name,s);
var t=this.getDomElement();

if(name===m){qx.bom.Input.setValue(t,s);
}else if(name===n){qx.bom.Input.setWrap(t,s);
this.setStyle(h,t.style.overflow,true);
this.setStyle(c,t.style.overflowX,true);
this.setStyle(a,t.style.overflowY,true);
}},setEnabled:qx.core.Environment.select(k,{"webkit":function(u){this.__G=u;

if(!u){this.setStyles({"userModify":d,"userSelect":j});
}else{this.setStyles({"userModify":null,"userSelect":this.__F?null:j});
}},"default":function(v){this.setAttribute(b,v===false);
}}),setSelectable:qx.core.Environment.select(k,{"webkit":function(w){this.__F=w;
qx.html.Element.prototype.setSelectable.call(this,this.__G&&w);
},"default":function(x){qx.html.Element.prototype.setSelectable.call(this,x);
}}),setValue:function(y){var z=this.getDomElement();

if(z){if(z.value!=y){qx.bom.Input.setValue(z,y);
}}else{this._setProperty(m,y);
}return this;
},getValue:function(){var A=this.getDomElement();

if(A){return qx.bom.Input.getValue(A);
}return this._getProperty(m)||i;
},setWrap:function(B,C){if(this.__E===l){this._setProperty(n,B,C);
}else{throw new Error("Text wrapping is only support by textareas!");
}return this;
},getWrap:function(){if(this.__E===l){return this._getProperty(n);
}else{throw new Error("Text wrapping is only support by textareas!");
}}}});
})();
(function(){var v="",u="select",t="engine.name",s="soft",r="off",q="textarea",p="auto",o="wrap",n="text",m="mshtml",d="number",k="checkbox",g="select-one",c="input",b="option",f="value",e="radio",h="qx.bom.Input",a="nowrap",j="normal";
qx.Class.define(h,{statics:{__H:{text:1,textarea:1,select:1,checkbox:1,radio:1,password:1,hidden:1,submit:1,image:1,file:1,search:1,reset:1,button:1},create:function(w,x,y){var x=x?qx.lang.Object.clone(x):{};
var z;

if(w===q||w===u){z=w;
}else{z=c;
x.type=w;
}return qx.bom.Element.create(z,x,y);
},setValue:function(A,B){var G=A.nodeName.toLowerCase();
var D=A.type;
var Array=qx.lang.Array;
var H=qx.lang.Type;

if(typeof B===d){B+=v;
}
if((D===k||D===e)){if(H.isArray(B)){A.checked=Array.contains(B,A.value);
}else{A.checked=A.value==B;
}}else if(G===u){var C=H.isArray(B);
var I=A.options;
var E,F;

for(var i=0,l=I.length;i<l;i++){E=I[i];
F=E.getAttribute(f);

if(F==null){F=E.text;
}E.selected=C?Array.contains(B,F):B==F;
}
if(C&&B.length==0){A.selectedIndex=-1;
}}else if((D===n||D===q)&&(qx.core.Environment.get(t)==m)){A.$$inValueSet=true;
A.value=B;
A.$$inValueSet=null;
}else{A.value=B;
}},getValue:function(J){var P=J.nodeName.toLowerCase();

if(P===b){return (J.attributes.value||{}).specified?J.value:J.text;
}
if(P===u){var K=J.selectedIndex;
if(K<0){return null;
}var Q=[];
var S=J.options;
var R=J.type==g;
var O=qx.bom.Input;
var N;
for(var i=R?K:0,M=R?K+1:S.length;i<M;i++){var L=S[i];

if(L.selected){N=O.getValue(L);
if(R){return N;
}Q.push(N);
}}return Q;
}else{return (J.value||v).replace(/\r/g,v);
}},setWrap:qx.core.Environment.select(t,{"mshtml":function(T,U){var W=U?s:r;
var V=U?p:v;
T.wrap=W;
T.style.overflowY=V;
},"gecko|webkit":function(X,Y){var bb=Y?s:r;
var ba=Y?v:p;
X.setAttribute(o,bb);
X.style.overflow=ba;
},"default":function(bc,bd){bc.style.whiteSpace=bd?j:a;
}})}});
})();
(function(){var i="legend",h="frame",g="middle",f="top",d="resize",c="qx.ui.groupbox.GroupBox",b="groupbox",a="_applyLegendPosition";
qx.Class.define(c,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MRemoteLayoutHandling,qx.ui.core.MContentPadding,qx.ui.form.MForm],implement:[qx.ui.form.IForm],construct:function(j,k){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.Canvas);
this._createChildControl(h);
this._createChildControl(i);
if(j!=null){this.setLegend(j);
}
if(k!=null){this.setIcon(k);
}},properties:{appearance:{refine:true,init:b},legendPosition:{check:[f,g],init:g,apply:a,themeable:true}},members:{_forwardStates:{invalid:true},_createChildControlImpl:function(l,m){var n;

switch(l){case h:n=new qx.ui.container.Composite();
this._add(n,{left:0,top:6,right:0,bottom:0});
break;
case i:n=new qx.ui.basic.Atom();
n.addListener(d,this._repositionFrame,this);
this._add(n,{left:0,right:0});
break;
}return n||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,l);
},_getContentPaddingTarget:function(){return this.getChildControl(h);
},_applyLegendPosition:function(e){if(this.getChildControl(i).getBounds()){this._repositionFrame();
}},_repositionFrame:function(){var p=this.getChildControl(i);
var o=this.getChildControl(h);
var q=p.getBounds().height;
if(this.getLegendPosition()==g){o.setLayoutProperties({"top":Math.round(q/2)});
}else if(this.getLegendPosition()==f){o.setLayoutProperties({"top":q});
}},getChildrenContainer:function(){return this.getChildControl(h);
},setLegend:function(r){var s=this.getChildControl(i);

if(r!==null){s.setLabel(r);
s.show();
}else{s.exclude();
}},getLegend:function(){return this.getChildControl(i).getLabel();
},setIcon:function(t){this.getChildControl(i).setIcon(t);
},getIcon:function(){this.getChildControl(i).getIcon();
}}});
})();
(function(){var h="[",g="changeModel",f="qx.core.Object",e="qx.data.controller.Object",d="get",c="reset",b="_applyModel",a="last";
qx.Class.define(e,{extend:qx.core.Object,construct:function(j){qx.core.Object.call(this);
this.__jT={};
this.__gs=[];

if(j!=null){this.setModel(j);
}},properties:{model:{check:f,event:g,apply:b,nullable:true,dereference:true}},members:{__gs:null,__jT:null,_applyModel:function(k,l){for(var i=0;i<this.__gs.length;i++){var t=this.__gs[i][0];
var q=this.__gs[i][1];
var o=this.__gs[i][2];
var r=this.__gs[i][3];
var s=this.__gs[i][4];
var n=this.__gs[i][5];
if(l!=undefined&&!l.isDisposed()){this.__Ip(t,q,o,l);
}if(k!=undefined){this.__Io(t,q,o,r,s,n);
}else{if(t.isDisposed()||qx.core.ObjectRegistry.inShutDown){continue;
}if(q.indexOf(h)==-1){t[c+qx.lang.String.firstUp(q)]();
}else{var open=q.indexOf(h);
var m=parseInt(q.substring(open+1,q.length-1),10);
q=q.substring(0,open);
var p=t[d+qx.lang.String.firstUp(q)]();

if(m==a){m=p.length;
}
if(p){p.setItem(m,null);
}}}}},addTarget:function(u,v,w,x,y,z){this.__gs.push([u,v,w,x,y,z]);
this.__Io(u,v,w,x,y,z);
},__Io:function(A,B,C,D,E,F){if(this.getModel()==null){return;
}var G=this.getModel().bind(C,A,B,E);
var H=null;

if(D){H=A.bind(B,this.getModel(),C,F);
}var I=A.toHashCode();

if(this.__jT[I]==undefined){this.__jT[I]=[];
}this.__jT[I].push([G,H,B,C,E,F]);
},removeTarget:function(J,K,L){this.__Ip(J,K,L,this.getModel());
for(var i=0;i<this.__gs.length;i++){if(this.__gs[i][0]==J&&this.__gs[i][1]==K&&this.__gs[i][2]==L){this.__gs.splice(i,1);
}}},__Ip:function(M,N,O,P){if(!(M instanceof qx.core.Object)){return ;
}var Q=this.__jT[M.toHashCode()];
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