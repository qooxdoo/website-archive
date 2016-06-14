qx.$$packageData['1923']={"locales":{},"resources":{},"translations":{}};
qx.Part.$$notifyLoad("1923", function() {
(function(){var m="input",k="engine.name",j="change",h="text",g="textarea",f="password",d="engine.version",c="radio",b="checkbox",a="keypress",A="browser.documentmode",z="opera",y="keyup",x="mshtml",w="blur",v="keydown",u="propertychange",t="browser.version",s="select-multiple",r="value",p="select",q="qx.event.handler.Input",n="checked";
qx.Class.define(q,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){qx.core.Object.call(this);
this._onChangeCheckedWrapper=qx.lang.Function.listener(this._onChangeChecked,this);
this._onChangeValueWrapper=qx.lang.Function.listener(this._onChangeValue,this);
this._onInputWrapper=qx.lang.Function.listener(this._onInput,this);
this._onPropertyWrapper=qx.lang.Function.listener(this._onProperty,this);
if((qx.core.Environment.get(k)==z)){this._onKeyDownWrapper=qx.lang.Function.listener(this._onKeyDown,this);
this._onKeyUpWrapper=qx.lang.Function.listener(this._onKeyUp,this);
this._onBlurWrapper=qx.lang.Function.listener(this._onBlur,this);
}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{input:1,change:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{__mB:false,__mC:null,__mt:null,__mu:null,canHandleEvent:function(B,C){var D=B.tagName.toLowerCase();

if(C===m&&(D===m||D===g)){return true;
}
if(C===j&&(D===m||D===g||D===p)){return true;
}return false;
},registerEvent:function(E,F,G){if(qx.core.Environment.get(k)==x&&(qx.core.Environment.get(d)<9||(qx.core.Environment.get(d)>=9&&qx.core.Environment.get(A)<9))){if(!E.__mD){var H=E.tagName.toLowerCase();
var I=E.type;

if(I===h||I===f||H===g||I===b||I===c){qx.bom.Event.addNativeListener(E,u,this._onPropertyWrapper);
}
if(I!==b&&I!==c){qx.bom.Event.addNativeListener(E,j,this._onChangeValueWrapper);
}
if(I===h||I===f){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,E);
qx.bom.Event.addNativeListener(E,a,this._onKeyPressWrapped);
}E.__mD=true;
}}else{if(F===m){this.__mE(E);
}else if(F===j){if(E.type===c||E.type===b){qx.bom.Event.addNativeListener(E,j,this._onChangeCheckedWrapper);
}else{qx.bom.Event.addNativeListener(E,j,this._onChangeValueWrapper);
}if((qx.core.Environment.get(k)==z)||(qx.core.Environment.get(k)==x)){if(E.type===h||E.type===f){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,E);
qx.bom.Event.addNativeListener(E,a,this._onKeyPressWrapped);
}}}}},__mE:qx.core.Environment.select(k,{"mshtml":function(J){if(qx.core.Environment.get(d)>=9&&qx.core.Environment.get(A)>=9){qx.bom.Event.addNativeListener(J,m,this._onInputWrapper);

if(J.type===h||J.type===f||J.type===g){this._inputFixWrapper=qx.lang.Function.listener(this._inputFix,this,J);
qx.bom.Event.addNativeListener(J,y,this._inputFixWrapper);
}}},"webkit":function(K){var L=K.tagName.toLowerCase();
if(parseFloat(qx.core.Environment.get(d))<532&&L==g){qx.bom.Event.addNativeListener(K,a,this._onInputWrapper);
}qx.bom.Event.addNativeListener(K,m,this._onInputWrapper);
},"opera":function(M){qx.bom.Event.addNativeListener(M,y,this._onKeyUpWrapper);
qx.bom.Event.addNativeListener(M,v,this._onKeyDownWrapper);
qx.bom.Event.addNativeListener(M,w,this._onBlurWrapper);
qx.bom.Event.addNativeListener(M,m,this._onInputWrapper);
},"default":function(N){qx.bom.Event.addNativeListener(N,m,this._onInputWrapper);
}}),unregisterEvent:function(O,P){if(qx.core.Environment.get(k)==x&&qx.core.Environment.get(d)<9&&qx.core.Environment.get(A)<9){if(O.__mD){var Q=O.tagName.toLowerCase();
var R=O.type;

if(R===h||R===f||Q===g||R===b||R===c){qx.bom.Event.removeNativeListener(O,u,this._onPropertyWrapper);
}
if(R!==b&&R!==c){qx.bom.Event.removeNativeListener(O,j,this._onChangeValueWrapper);
}
if(R===h||R===f){qx.bom.Event.removeNativeListener(O,a,this._onKeyPressWrapped);
}
try{delete O.__mD;
}catch(S){O.__mD=null;
}}}else{if(P===m){this.__mF(O);
}else if(P===j){if(O.type===c||O.type===b){qx.bom.Event.removeNativeListener(O,j,this._onChangeCheckedWrapper);
}else{qx.bom.Event.removeNativeListener(O,j,this._onChangeValueWrapper);
}}
if((qx.core.Environment.get(k)==z)||(qx.core.Environment.get(k)==x)){if(O.type===h||O.type===f){qx.bom.Event.removeNativeListener(O,a,this._onKeyPressWrapped);
}}}},__mF:qx.core.Environment.select(k,{"mshtml":function(T){if(qx.core.Environment.get(d)>=9&&qx.core.Environment.get(A)>=9){qx.bom.Event.removeNativeListener(T,m,this._onInputWrapper);

if(T.type===h||T.type===f||T.type===g){qx.bom.Event.removeNativeListener(T,y,this._inputFixWrapper);
}}},"webkit":function(U){var V=U.tagName.toLowerCase();
if(parseFloat(qx.core.Environment.get(d))<532&&V==g){qx.bom.Event.removeNativeListener(U,a,this._onInputWrapper);
}qx.bom.Event.removeNativeListener(U,m,this._onInputWrapper);
},"opera":function(W){qx.bom.Event.removeNativeListener(W,y,this._onKeyUpWrapper);
qx.bom.Event.removeNativeListener(W,v,this._onKeyDownWrapper);
qx.bom.Event.removeNativeListener(W,w,this._onBlurWrapper);
qx.bom.Event.removeNativeListener(W,m,this._onInputWrapper);
},"default":function(X){qx.bom.Event.removeNativeListener(X,m,this._onInputWrapper);
}}),_onKeyPress:qx.core.Environment.select(k,{"mshtml|opera":function(e,Y){if(e.keyCode===13){if(Y.value!==this.__mt){this.__mt=Y.value;
qx.event.Registration.fireEvent(Y,j,qx.event.type.Data,[Y.value]);
}}},"default":null}),_inputFix:qx.core.Environment.select(k,{"mshtml":function(e,ba){if(e.keyCode===46||e.keyCode===8){if(ba.value!==this.__mu){this.__mu=ba.value;
qx.event.Registration.fireEvent(ba,m,qx.event.type.Data,[ba.value]);
}}},"default":null}),_onKeyDown:qx.core.Environment.select(k,{"opera":function(e){if(e.keyCode===13){this.__mB=true;
}},"default":null}),_onKeyUp:qx.core.Environment.select(k,{"opera":function(e){if(e.keyCode===13){this.__mB=false;
}},"default":null}),_onBlur:qx.core.Environment.select(k,{"opera":function(e){if(this.__mC&&qx.core.Environment.get(t)<10.6){window.clearTimeout(this.__mC);
}},"default":null}),_onInput:qx.event.GlobalError.observeMethod(function(e){var bc=qx.bom.Event.getTarget(e);
var bb=bc.tagName.toLowerCase();
if(!this.__mB||bb!==m){if((qx.core.Environment.get(k)==z)&&qx.core.Environment.get(t)<10.6){this.__mC=window.setTimeout(function(){qx.event.Registration.fireEvent(bc,m,qx.event.type.Data,[bc.value]);
},0);
}else{qx.event.Registration.fireEvent(bc,m,qx.event.type.Data,[bc.value]);
}}}),_onChangeValue:qx.event.GlobalError.observeMethod(function(e){var be=qx.bom.Event.getTarget(e);
var bd=be.value;

if(be.type===s){var bd=[];

for(var i=0,o=be.options,l=o.length;i<l;i++){if(o[i].selected){bd.push(o[i].value);
}}}qx.event.Registration.fireEvent(be,j,qx.event.type.Data,[bd]);
}),_onChangeChecked:qx.event.GlobalError.observeMethod(function(e){var bf=qx.bom.Event.getTarget(e);

if(bf.type===c){if(bf.checked){qx.event.Registration.fireEvent(bf,j,qx.event.type.Data,[bf.value]);
}}else{qx.event.Registration.fireEvent(bf,j,qx.event.type.Data,[bf.checked]);
}}),_onProperty:qx.core.Environment.select(k,{"mshtml":qx.event.GlobalError.observeMethod(function(e){var bg=qx.bom.Event.getTarget(e);
var bh=e.propertyName;

if(bh===r&&(bg.type===h||bg.type===f||bg.tagName.toLowerCase()===g)){if(!bg.$$inValueSet){qx.event.Registration.fireEvent(bg,m,qx.event.type.Data,[bg.value]);
}}else if(bh===n){if(bg.type===b){qx.event.Registration.fireEvent(bg,j,qx.event.type.Data,[bg.checked]);
}else if(bg.checked){qx.event.Registration.fireEvent(bg,j,qx.event.type.Data,[bg.value]);
}}}),"default":function(){}})},defer:function(bi){qx.event.Registration.addHandler(bi);
}});
})();
(function(){var k="showingPlaceholder",j="",i="engine.name",h="none",g="color",f="qx.dynlocale",d="Boolean",c="A",b="qx.event.type.Data",a="readonly",bf="placeholder",be="input",bd="focusin",bc="visibility",bb="gecko",ba="focusout",Y="changeLocale",X="hidden",W="absolute",V="readOnly",r="text",s="_applyTextAlign",p="px",q="RegExp",n=")",o="syncAppearance",l="changeValue",m="engine.version",v="change",w="changeStatus",E="textAlign",C="focused",L="center",G="visible",R="disabled",P="url(",y="String",U="resize",T="qx.ui.form.AbstractField",S="transparent",x="spellcheck",A="false",B="right",D="PositiveInteger",F="abstract",H="block",M="css.placeholder",Q="webkit",t="_applyReadOnly",u="_applyPlaceholder",z="left",K="off",J="mshtml",I="qx/static/blank.gif",O="text-placeholder",N="changeReadOnly";
qx.Class.define(T,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm,qx.ui.form.IForm],include:[qx.ui.form.MForm],type:F,construct:function(bg){qx.ui.core.Widget.call(this);
this.__mq=!qx.core.Environment.get(M)||(qx.core.Environment.get(i)==bb&&parseFloat(qx.core.Environment.get(m))>=2);

if(bg!=null){this.setValue(bg);
}this.getContentElement().addListener(v,this._onChangeContent,this);
if(this.__mq){this.addListener(o,this._syncPlaceholder,this);
}if(qx.core.Environment.get(f)){qx.locale.Manager.getInstance().addListener(Y,this._onChangeLocale,this);
}},events:{"input":b,"changeValue":b},properties:{textAlign:{check:[z,L,B],nullable:true,themeable:true,apply:s},readOnly:{check:d,apply:t,event:N,init:false},selectable:{refine:true,init:true},focusable:{refine:true,init:true},maxLength:{check:D,init:Infinity},liveUpdate:{check:d,init:false},placeholder:{check:y,nullable:true,apply:u},filter:{check:q,nullable:true,init:null}},members:{__mr:true,__ms:null,__mt:null,__mu:null,__mq:true,__lm:null,__lq:null,getFocusElement:function(){var bh=this.getContentElement();

if(bh){return bh;
}},_createInputElement:function(){return new qx.html.Input(r);
},renderLayout:function(bi,top,bj,bk){var bl=this._updateInsets;
var bp=qx.ui.core.Widget.prototype.renderLayout.call(this,bi,top,bj,bk);
if(!bp){return;
}var bn=bp.size||bl;
var bq=p;

if(bn||bp.local||bp.margin){var bm=this.getInsets();
var innerWidth=bj-bm.left-bm.right;
var innerHeight=bk-bm.top-bm.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}var bo=this.getContentElement();
if(bl&&this.__mq){this.__mx().setStyles({"left":bm.left+bq,"top":bm.top+bq});
}
if(bn){if(this.__mq){this.__mx().setStyles({"width":innerWidth+bq,"height":innerHeight+bq});
}bo.setStyles({"width":innerWidth+bq,"height":innerHeight+bq});
this._renderContentElement(innerHeight,bo);
}},_renderContentElement:function(innerHeight,br){},_createContentElement:function(){var bs=this._createInputElement();
bs.setStyles({"border":h,"padding":0,"margin":0,"display":H,"background":S,"outline":h,"appearance":h,"position":W,"autoComplete":K});
bs.setSelectable(this.getSelectable());
bs.setEnabled(this.getEnabled());
bs.addListener(be,this._onHtmlInput,this);
bs.setAttribute(x,A);
if(qx.core.Environment.get(i)==Q||qx.core.Environment.get(i)==bb){bs.setStyle(U,h);
}if((qx.core.Environment.get(i)==J)){bs.setStyles({backgroundImage:P+qx.util.ResourceManager.getInstance().toUri(I)+n});
}return bs;
},_applyEnabled:function(bt,bu){qx.ui.core.Widget.prototype._applyEnabled.call(this,bt,bu);
this.getContentElement().setEnabled(bt);

if(this.__mq){if(bt){this._showPlaceholder();
}else{this._removePlaceholder();
}}else{var bv=this.getContentElement();
bv.setAttribute(bf,bt?this.getPlaceholder():j);
}},__mv:{width:16,height:16},_getContentHint:function(){return {width:this.__mv.width*10,height:this.__mv.height||16};
},_applyFont:function(bw,bx){if(bx&&this.__lm&&this.__lq){this.__lm.removeListenerById(this.__lq);
this.__lq=null;
}var by;

if(bw){this.__lm=qx.theme.manager.Font.getInstance().resolve(bw);

if(this.__lm instanceof qx.bom.webfonts.WebFont){this.__lq=this.__lm.addListener(w,this._onWebFontStatusChange,this);
}by=this.__lm.getStyles();
}else{by=qx.bom.Font.getDefaultStyles();
}if(this.getTextColor()!=null){delete by[g];
}this.getContentElement().setStyles(by);
if(this.__mq){this.__mx().setStyles(by);
}if(bw){this.__mv=qx.bom.Label.getTextSize(c,by);
}else{delete this.__mv;
}qx.ui.core.queue.Layout.add(this);
},_applyTextColor:function(bz,bA){if(bz){this.getContentElement().setStyle(g,qx.theme.manager.Color.getInstance().resolve(bz));
}else{this.getContentElement().removeStyle(g);
}},tabFocus:function(){qx.ui.core.Widget.prototype.tabFocus.call(this);
this.selectAllText();
},_getTextSize:function(){return this.__mv;
},_onHtmlInput:function(e){var bE=e.getData();
var bD=true;
this.__mr=false;
if(this.__mu&&this.__mu===bE){bD=false;
}if(this.getFilter()!=null){var bF=j;
var bB=bE.search(this.getFilter());
var bC=bE;

while(bB>=0){bF=bF+(bC.charAt(bB));
bC=bC.substring(bB+1,bC.length);
bB=bC.search(this.getFilter());
}
if(bF!=bE){bD=false;
bE=bF;
this.getContentElement().setValue(bE);
}}if(bE.length>this.getMaxLength()){bD=false;
this.getContentElement().setValue(bE.substr(0,this.getMaxLength()));
}if(bD){this.fireDataEvent(be,bE,this.__mu);
this.__mu=bE;
if(this.getLiveUpdate()){this.__mw(bE);
}}},_onWebFontStatusChange:function(bG){if(bG.getData().valid===true){var bH=this.__lm.getStyles();
this.__mv=qx.bom.Label.getTextSize(c,bH);
qx.ui.core.queue.Layout.add(this);
}},__mw:function(bI){var bJ=this.__mt;
this.__mt=bI;

if(bJ!=bI){this.fireNonBubblingEvent(l,qx.event.type.Data,[bI,bJ]);
}},setValue:function(bK){if(bK===null){if(this.__mr){return bK;
}bK=j;
this.__mr=true;
}else{this.__mr=false;
if(this.__mq){this._removePlaceholder();
}}
if(qx.lang.Type.isString(bK)){var bM=this.getContentElement();

if(bK.length>this.getMaxLength()){bK=bK.substr(0,this.getMaxLength());
}
if(bM.getValue()!=bK){var bN=bM.getValue();
bM.setValue(bK);
var bL=this.__mr?null:bK;
this.__mt=bN;
this.__mw(bL);
}if(this.__mq){this._showPlaceholder();
}return bK;
}throw new Error("Invalid value type: "+bK);
},getValue:function(){var bO=this.getContentElement().getValue();
return this.__mr?null:bO;
},resetValue:function(){this.setValue(null);
},_onChangeContent:function(e){this.__mr=e.getData()===null;
this.__mw(e.getData());
},getTextSelection:function(){return this.getContentElement().getTextSelection();
},getTextSelectionLength:function(){return this.getContentElement().getTextSelectionLength();
},getTextSelectionStart:function(){return this.getContentElement().getTextSelectionStart();
},getTextSelectionEnd:function(){return this.getContentElement().getTextSelectionEnd();
},setTextSelection:function(bP,bQ){this.getContentElement().setTextSelection(bP,bQ);
},clearTextSelection:function(){this.getContentElement().clearTextSelection();
},selectAllText:function(){this.setTextSelection(0);
},_showPlaceholder:function(){var bS=this.getValue()||j;
var bR=this.getPlaceholder();

if(bR!=null&&bS==j&&!this.hasState(C)&&!this.hasState(R)){if(this.hasState(k)){this._syncPlaceholder();
}else{this.addState(k);
}}},_removePlaceholder:function(){if(this.hasState(k)){this.__mx().setStyle(bc,X);
this.removeState(k);
}},_syncPlaceholder:function(){if(this.hasState(k)){this.__mx().setStyle(bc,G);
}},__mx:function(){if(this.__ms==null){this.__ms=new qx.html.Label();
var bT=qx.theme.manager.Color.getInstance();
this.__ms.setStyles({"visibility":X,"zIndex":6,"position":W,"color":bT.resolve(O)});
this.getContainerElement().add(this.__ms);
}return this.__ms;
},_onChangeLocale:qx.core.Environment.select(f,{"true":function(e){var content=this.getPlaceholder();

if(content&&content.translate){this.setPlaceholder(content.translate());
}},"false":null}),_applyPlaceholder:function(bU,bV){if(this.__mq){this.__mx().setValue(bU);

if(bU!=null){this.addListener(bd,this._removePlaceholder,this);
this.addListener(ba,this._showPlaceholder,this);
this._showPlaceholder();
}else{this.removeListener(bd,this._removePlaceholder,this);
this.removeListener(ba,this._showPlaceholder,this);
this._removePlaceholder();
}}else{if(this.getEnabled()){this.getContentElement().setAttribute(bf,bU);
}}},_applyTextAlign:function(bW,bX){this.getContentElement().setStyle(E,bW);
},_applyReadOnly:function(bY,ca){var cb=this.getContentElement();
cb.setAttribute(V,bY);

if(bY){this.addState(a);
this.setFocusable(false);
}else{this.removeState(a);
this.setFocusable(true);
}}},destruct:function(){this.__ms=this.__lm=null;

if(qx.core.Environment.get(f)){qx.locale.Manager.getInstance().removeListener(Y,this._onChangeLocale,this);
}
if(this.__lm&&this.__lq){this.__lm.removeListenerById(this.__lq);
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
this.__my=o;
},members:{__my:null,__mz:null,__mA:null,_createDomElement:function(){return qx.bom.Input.create(this.__my);
},_applyProperty:function(name,s){qx.html.Element.prototype._applyProperty.call(this,name,s);
var t=this.getDomElement();

if(name===m){qx.bom.Input.setValue(t,s);
}else if(name===n){qx.bom.Input.setWrap(t,s);
this.setStyle(h,t.style.overflow,true);
this.setStyle(c,t.style.overflowX,true);
this.setStyle(a,t.style.overflowY,true);
}},setEnabled:qx.core.Environment.select(k,{"webkit":function(u){this.__mA=u;

if(!u){this.setStyles({"userModify":d,"userSelect":j});
}else{this.setStyles({"userModify":null,"userSelect":this.__mz?null:j});
}},"default":function(v){this.setAttribute(b,v===false);
}}),setSelectable:qx.core.Environment.select(k,{"webkit":function(w){this.__mz=w;
qx.html.Element.prototype.setSelectable.call(this,this.__mA&&w);
},"default":function(x){qx.html.Element.prototype.setSelectable.call(this,x);
}}),setValue:function(y){var z=this.getDomElement();

if(z){if(z.value!=y){qx.bom.Input.setValue(z,y);
}}else{this._setProperty(m,y);
}return this;
},getValue:function(){var A=this.getDomElement();

if(A){return qx.bom.Input.getValue(A);
}return this._getProperty(m)||i;
},setWrap:function(B,C){if(this.__my===l){this._setProperty(n,B,C);
}else{throw new Error("Text wrapping is only support by textareas!");
}return this;
},getWrap:function(){if(this.__my===l){return this._getProperty(n);
}else{throw new Error("Text wrapping is only support by textareas!");
}}}});
})();
(function(){var v="",u="select",t="engine.name",s="soft",r="off",q="textarea",p="auto",o="wrap",n="text",m="mshtml",d="number",k="checkbox",g="select-one",c="input",b="option",f="value",e="radio",h="qx.bom.Input",a="nowrap",j="normal";
qx.Class.define(h,{statics:{__gj:{text:1,textarea:1,select:1,checkbox:1,radio:1,password:1,hidden:1,submit:1,image:1,file:1,search:1,reset:1,button:1},create:function(w,x,y){var x=x?qx.lang.Object.clone(x):{};
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
this.__bj={};
this.__ff=[];

if(j!=null){this.setModel(j);
}},properties:{model:{check:f,event:g,apply:b,nullable:true,dereference:true}},members:{__ff:null,__bj:null,_applyModel:function(k,l){for(var i=0;i<this.__ff.length;i++){var t=this.__ff[i][0];
var q=this.__ff[i][1];
var o=this.__ff[i][2];
var r=this.__ff[i][3];
var s=this.__ff[i][4];
var n=this.__ff[i][5];
if(l!=undefined&&!l.isDisposed()){this.__yV(t,q,o,l);
}if(k!=undefined){this.__yU(t,q,o,r,s,n);
}else{if(t.isDisposed()||qx.core.ObjectRegistry.inShutDown){continue;
}if(q.indexOf(h)==-1){t[c+qx.lang.String.firstUp(q)]();
}else{var open=q.indexOf(h);
var m=parseInt(q.substring(open+1,q.length-1),10);
q=q.substring(0,open);
var p=t[d+qx.lang.String.firstUp(q)]();

if(m==a){m=p.length;
}
if(p){p.setItem(m,null);
}}}}},addTarget:function(u,v,w,x,y,z){this.__ff.push([u,v,w,x,y,z]);
this.__yU(u,v,w,x,y,z);
},__yU:function(A,B,C,D,E,F){if(this.getModel()==null){return;
}var G=this.getModel().bind(C,A,B,E);
var H=null;

if(D){H=A.bind(B,this.getModel(),C,F);
}var I=A.toHashCode();

if(this.__bj[I]==undefined){this.__bj[I]=[];
}this.__bj[I].push([G,H,B,C,E,F]);
},removeTarget:function(J,K,L){this.__yV(J,K,L,this.getModel());
for(var i=0;i<this.__ff.length;i++){if(this.__ff[i][0]==J&&this.__ff[i][1]==K&&this.__ff[i][2]==L){this.__ff.splice(i,1);
}}},__yV:function(M,N,O,P){if(!(M instanceof qx.core.Object)){return ;
}var Q=this.__bj[M.toHashCode()];
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