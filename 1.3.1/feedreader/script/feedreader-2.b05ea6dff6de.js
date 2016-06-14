qx.$$packageData['b05ea6dff6de']={"locales":{},"resources":{"feedreader/images/combined/icons16.png":[16,96,"png","feedreader"],"qx/icon/Tango/16/actions/dialog-apply.png":[16,16,"png","qx","feedreader/images/combined/icons16.png",0,0],"qx/icon/Tango/16/actions/document-new.png":[16,16,"png","qx","feedreader/images/combined/icons16.png",0,-48]},"translations":{}};

qx.Part.$$notifyLoad("b05ea6dff6de", function() {
(function(){var k="showingPlaceholder",j="",i="none",h="qx.client",g="qx.dynlocale",f="Boolean",d="gecko",c="color",b="qx.event.type.Data",a="readonly",bd="placeholder",bc="input",bb="focusin",ba="visibility",Y="focusout",X="changeLocale",W="hidden",V="on",U="absolute",T="readOnly",r="text",s="_applyTextAlign",p="px",q="RegExp",n=")",o="syncAppearance",l="changeValue",m="A",v="change",w="textAlign",E="focused",C="center",L="visible",G="disabled",P="url(",N="off",y="String",S="resize",R="qx.ui.form.AbstractField",Q="transparent",x="spellcheck",A="false",B="right",D="PositiveInteger",F="mshtml",H="abstract",M="block",O="webkit",t="_applyReadOnly",u="_applyPlaceholder",z="left",K="qx/static/blank.gif",J="text-placeholder",I="changeReadOnly";
qx.Class.define(R,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm,qx.ui.form.IForm],include:[qx.ui.form.MForm],type:H,construct:function(be){qx.ui.core.Widget.call(this);
this.__mT=!qx.bom.client.Feature.PLACEHOLDER||(qx.bom.client.Engine.NAME==d&&qx.bom.client.Engine.VERSION==2.0);

if(be!=null){this.setValue(be);
}this.getContentElement().addListener(v,this._onChangeContent,this);
if(this.__mT){this.addListener(o,this._syncPlaceholder,this);
}if(qx.core.Variant.isSet(g,V)){qx.locale.Manager.getInstance().addListener(X,this._onChangeLocale,this);
}},events:{"input":b,"changeValue":b},properties:{textAlign:{check:[z,C,B],nullable:true,themeable:true,apply:s},readOnly:{check:f,apply:t,event:I,init:false},selectable:{refine:true,init:true},focusable:{refine:true,init:true},maxLength:{check:D,init:Infinity},liveUpdate:{check:f,init:false},placeholder:{check:y,nullable:true,apply:u},filter:{check:q,nullable:true,init:null}},members:{__mU:true,__mV:null,__mW:null,__mX:null,__mT:true,getFocusElement:function(){var bf=this.getContentElement();

if(bf){return bf;
}},_createInputElement:function(){return new qx.html.Input(r);
},renderLayout:function(bg,top,bh,bi){var bj=this._updateInsets;
var bn=qx.ui.core.Widget.prototype.renderLayout.call(this,bg,top,bh,bi);
if(!bn){return;
}var bl=bn.size||bj;
var bo=p;

if(bl||bn.local||bn.margin){var bk=this.getInsets();
var innerWidth=bh-bk.left-bk.right;
var innerHeight=bi-bk.top-bk.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}var bm=this.getContentElement();
if(bj&&this.__mT){this.__nb().setStyles({"left":bk.left+bo,"top":bk.top+bo});
}
if(bl){if(this.__mT){this.__nb().setStyles({"width":innerWidth+bo,"height":innerHeight+bo});
}bm.setStyles({"width":innerWidth+bo,"height":innerHeight+bo});
this._renderContentElement(innerHeight,bm);
}},_renderContentElement:function(innerHeight,bp){},_createContentElement:function(){var bq=this._createInputElement();
bq.setStyles({"border":i,"padding":0,"margin":0,"display":M,"background":Q,"outline":i,"appearance":i,"position":U,"autoComplete":N});
bq.setSelectable(this.getSelectable());
bq.setEnabled(this.getEnabled());
bq.addListener(bc,this._onHtmlInput,this);
bq.setAttribute(x,A);
if(qx.core.Variant.isSet(h,O)||qx.core.Variant.isSet(h,d)){bq.setStyle(S,i);
}if(qx.core.Variant.isSet(h,F)){bq.setStyles({backgroundImage:P+qx.util.ResourceManager.getInstance().toUri(K)+n});
}return bq;
},_applyEnabled:function(br,bs){qx.ui.core.Widget.prototype._applyEnabled.call(this,br,bs);
this.getContentElement().setEnabled(br);

if(this.__mT){if(br){this._showPlaceholder();
}else{this._removePlaceholder();
}}else{var bt=this.getContentElement();
bt.setAttribute(bd,br?this.getPlaceholder():j);
}},__mY:{width:16,height:16},_getContentHint:function(){return {width:this.__mY.width*10,height:this.__mY.height||16};
},_applyFont:function(bu,bv){var bw;

if(bu){var bx=qx.theme.manager.Font.getInstance().resolve(bu);
bw=bx.getStyles();
}else{bw=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(bw);
if(this.__mT){this.__nb().setStyles(bw);
}if(bu){this.__mY=qx.bom.Label.getTextSize(m,bw);
}else{delete this.__mY;
}qx.ui.core.queue.Layout.add(this);
},_applyTextColor:function(by,bz){if(by){this.getContentElement().setStyle(c,qx.theme.manager.Color.getInstance().resolve(by));
}else{this.getContentElement().removeStyle(c);
}},tabFocus:function(){qx.ui.core.Widget.prototype.tabFocus.call(this);
this.selectAllText();
},_getTextSize:function(){return this.__mY;
},_onHtmlInput:function(e){var bD=e.getData();
var bC=true;
this.__mU=false;
if(this.getFilter()!=null){var bE=j;
var bA=bD.search(this.getFilter());
var bB=bD;

while(bA>=0){bE=bE+(bB.charAt(bA));
bB=bB.substring(bA+1,bB.length);
bA=bB.search(this.getFilter());
}
if(bE!=bD){bC=false;
bD=bE;
this.getContentElement().setValue(bD);
}}if(bD.length>this.getMaxLength()){var bC=false;
this.getContentElement().setValue(bD.substr(0,this.getMaxLength()));
}if(bC){this.fireDataEvent(bc,bD,this.__mX);
this.__mX=bD;
if(this.getLiveUpdate()){this.__na(bD);
}}},__na:function(bF){var bG=this.__mW;
this.__mW=bF;

if(bG!=bF){this.fireNonBubblingEvent(l,qx.event.type.Data,[bF,bG]);
}},setValue:function(bH){if(bH===null){if(this.__mU){return bH;
}bH=j;
this.__mU=true;
}else{this.__mU=false;
if(this.__mT){this._removePlaceholder();
}}
if(qx.lang.Type.isString(bH)){var bJ=this.getContentElement();

if(bH.length>this.getMaxLength()){bH=bH.substr(0,this.getMaxLength());
}
if(bJ.getValue()!=bH){var bK=bJ.getValue();
bJ.setValue(bH);
var bI=this.__mU?null:bH;
this.__mW=bK;
this.__na(bI);
}if(this.__mT){this._showPlaceholder();
}return bH;
}throw new Error("Invalid value type: "+bH);
},getValue:function(){var bL=this.getContentElement().getValue();
return this.__mU?null:bL;
},resetValue:function(){this.setValue(null);
},_onChangeContent:function(e){this.__mU=e.getData()===null;
this.__na(e.getData());
},getTextSelection:function(){return this.getContentElement().getTextSelection();
},getTextSelectionLength:function(){return this.getContentElement().getTextSelectionLength();
},getTextSelectionStart:function(){return this.getContentElement().getTextSelectionStart();
},getTextSelectionEnd:function(){return this.getContentElement().getTextSelectionEnd();
},setTextSelection:function(bM,bN){this.getContentElement().setTextSelection(bM,bN);
},clearTextSelection:function(){this.getContentElement().clearTextSelection();
},selectAllText:function(){this.setTextSelection(0);
},_showPlaceholder:function(){var bP=this.getValue()||j;
var bO=this.getPlaceholder();

if(bO!=null&&bP==j&&!this.hasState(E)&&!this.hasState(G)){if(this.hasState(k)){this._syncPlaceholder();
}else{this.addState(k);
}}},_removePlaceholder:function(){if(this.hasState(k)){this.__nb().setStyle(ba,W);
this.removeState(k);
}},_syncPlaceholder:function(){if(this.hasState(k)){this.__nb().setStyle(ba,L);
}},__nb:function(){if(this.__mV==null){this.__mV=new qx.html.Label();
var bQ=qx.theme.manager.Color.getInstance();
this.__mV.setStyles({"visibility":W,"zIndex":6,"position":U,"color":bQ.resolve(J)});
this.getContainerElement().add(this.__mV);
}return this.__mV;
},_onChangeLocale:qx.core.Variant.select(g,{"on":function(e){var content=this.getPlaceholder();

if(content&&content.translate){this.setPlaceholder(content.translate());
}},"off":null}),_applyPlaceholder:function(bR,bS){if(this.__mT){this.__nb().setValue(bR);

if(bR!=null){this.addListener(bb,this._removePlaceholder,this);
this.addListener(Y,this._showPlaceholder,this);
this._showPlaceholder();
}else{this.removeListener(bb,this._removePlaceholder,this);
this.removeListener(Y,this._showPlaceholder,this);
this._removePlaceholder();
}}else{if(this.getEnabled()){this.getContentElement().setAttribute(bd,bR);
}}},_applyTextAlign:function(bT,bU){this.getContentElement().setStyle(w,bT);
},_applyReadOnly:function(bV,bW){var bX=this.getContentElement();
bX.setAttribute(T,bV);

if(bV){this.addState(a);
this.setFocusable(false);
}else{this.removeState(a);
this.setFocusable(true);
}}},destruct:function(){this.__mV=null;

if(qx.core.Variant.isSet(g,V)){qx.locale.Manager.getInstance().removeListener(X,this._onChangeLocale,this);
}}});
})();
(function(){var e='px',d="mshtml",c="qx.ui.form.TextField",b="qx.client",a="textfield";
qx.Class.define(c,{extend:qx.ui.form.AbstractField,properties:{appearance:{refine:true,init:a},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{_renderContentElement:function(innerHeight,f){if(qx.core.Variant.isSet(b,d)&&qx.bom.client.Engine.VERSION<9){f.setStyles({"line-height":innerHeight+e});
}}}});
})();
(function(){var n="wrap",m="value",l="textarea",k="none",j="qx.client",i="",h="overflow",g="input",f="qx.html.Input",e="select",b="disabled",d="read-only",c="overflowX",a="overflowY";
qx.Class.define(f,{extend:qx.html.Element,construct:function(o,p,q){if(o===e||o===l){var r=o;
}else{r=g;
}qx.html.Element.call(this,r,p,q);
this.__nc=o;
},members:{__nc:null,__nd:null,__ne:null,_createDomElement:function(){return qx.bom.Input.create(this.__nc);
},_applyProperty:function(name,s){qx.html.Element.prototype._applyProperty.call(this,name,s);
var t=this.getDomElement();

if(name===m){qx.bom.Input.setValue(t,s);
}else if(name===n){qx.bom.Input.setWrap(t,s);
this.setStyle(h,t.style.overflow,true);
this.setStyle(c,t.style.overflowX,true);
this.setStyle(a,t.style.overflowY,true);
}},setEnabled:qx.core.Variant.select(j,{"webkit":function(u){this.__ne=u;

if(!u){this.setStyles({"userModify":d,"userSelect":k});
}else{this.setStyles({"userModify":null,"userSelect":this.__nd?null:k});
}},"default":function(v){this.setAttribute(b,v===false);
}}),setSelectable:qx.core.Variant.select(j,{"webkit":function(w){this.__nd=w;
qx.html.Element.prototype.setSelectable.call(this,this.__ne&&w);
},"default":function(x){qx.html.Element.prototype.setSelectable.call(this,x);
}}),setValue:function(y){var z=this.getDomElement();

if(z){if(z.value!=y){qx.bom.Input.setValue(z,y);
}}else{this._setProperty(m,y);
}return this;
},getValue:function(){var A=this.getDomElement();

if(A){return qx.bom.Input.getValue(A);
}return this._getProperty(m)||i;
},setWrap:function(B){if(this.__nc===l){this._setProperty(n,B);
}else{throw new Error("Text wrapping is only support by textareas!");
}return this;
},getWrap:function(){if(this.__nc===l){return this._getProperty(n);
}else{throw new Error("Text wrapping is only support by textareas!");
}}}});
})();
(function(){var x="input",w="change",v="qx.client",u="text",t="password",s="checkbox",r="radio",q="textarea",p="keypress",n="opera",d="keyup",m="propertychange",h="mshtml",c="blur",b="keydown",g="select-multiple",f="checked",j="value",a="select",k="qx.event.handler.Input";
qx.Class.define(k,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){qx.core.Object.call(this);
this._onChangeCheckedWrapper=qx.lang.Function.listener(this._onChangeChecked,this);
this._onChangeValueWrapper=qx.lang.Function.listener(this._onChangeValue,this);
this._onInputWrapper=qx.lang.Function.listener(this._onInput,this);
this._onPropertyWrapper=qx.lang.Function.listener(this._onProperty,this);
if(qx.core.Variant.isSet(v,n)){this._onKeyDownWrapper=qx.lang.Function.listener(this._onKeyDown,this);
this._onKeyUpWrapper=qx.lang.Function.listener(this._onKeyUp,this);
this._onBlurWrapper=qx.lang.Function.listener(this._onBlur,this);
}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{input:1,change:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{__nf:false,__ng:null,__nh:null,__ni:null,canHandleEvent:function(y,z){var A=y.tagName.toLowerCase();

if(z===x&&(A===x||A===q)){return true;
}
if(z===w&&(A===x||A===q||A===a)){return true;
}return false;
},registerEvent:function(B,C,D){if(qx.bom.client.Engine.MSHTML&&qx.bom.client.Engine.VERSION<9&&qx.bom.client.Engine.DOCUMENT_MODE<9){if(!B.__nj){var E=B.tagName.toLowerCase();
var F=B.type;

if(F===u||F===t||E===q||F===s||F===r){qx.bom.Event.addNativeListener(B,m,this._onPropertyWrapper);
}
if(F!==s&&F!==r){qx.bom.Event.addNativeListener(B,w,this._onChangeValueWrapper);
}
if(F===u||F===t){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,B);
qx.bom.Event.addNativeListener(B,p,this._onKeyPressWrapped);
}B.__nj=true;
}}else{if(C===x){this.__nk(B);
}else if(C===w){if(B.type===r||B.type===s){qx.bom.Event.addNativeListener(B,w,this._onChangeCheckedWrapper);
}else{qx.bom.Event.addNativeListener(B,w,this._onChangeValueWrapper);
}if(qx.core.Variant.isSet(v,n)||qx.core.Variant.isSet(v,h)){if(B.type===u||B.type===t){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,B);
qx.bom.Event.addNativeListener(B,p,this._onKeyPressWrapped);
}}}}},__nk:qx.core.Variant.select(v,{"mshtml":function(G){if(qx.bom.client.Engine.VERSION>=9&&qx.bom.client.Engine.DOCUMENT_MODE>=9){qx.bom.Event.addNativeListener(G,x,this._onInputWrapper);

if(G.type===u||G.type===t){this._inputFixWrapper=qx.lang.Function.listener(this._inputFix,this,G);
qx.bom.Event.addNativeListener(G,d,this._inputFixWrapper);
}}},"webkit":function(H){var I=H.tagName.toLowerCase();
if(qx.bom.client.Engine.VERSION<532&&I==q){qx.bom.Event.addNativeListener(H,p,this._onInputWrapper);
}qx.bom.Event.addNativeListener(H,x,this._onInputWrapper);
},"opera":function(J){qx.bom.Event.addNativeListener(J,d,this._onKeyUpWrapper);
qx.bom.Event.addNativeListener(J,b,this._onKeyDownWrapper);
qx.bom.Event.addNativeListener(J,c,this._onBlurWrapper);
qx.bom.Event.addNativeListener(J,x,this._onInputWrapper);
},"default":function(K){qx.bom.Event.addNativeListener(K,x,this._onInputWrapper);
}}),unregisterEvent:function(L,M){if(qx.bom.client.Engine.MSHTML&&qx.bom.client.Engine.VERSION<9&&qx.bom.client.Engine.DOCUMENT_MODE<9){if(L.__nj){var N=L.tagName.toLowerCase();
var O=L.type;

if(O===u||O===t||N===q||O===s||O===r){qx.bom.Event.removeNativeListener(L,m,this._onPropertyWrapper);
}
if(O!==s&&O!==r){qx.bom.Event.removeNativeListener(L,w,this._onChangeValueWrapper);
}
if(O===u||O===t){qx.bom.Event.removeNativeListener(L,p,this._onKeyPressWrapped);
}
try{delete L.__nj;
}catch(P){L.__nj=null;
}}}else{if(M===x){this.__nl(L);
}else if(M===w){if(L.type===r||L.type===s){qx.bom.Event.removeNativeListener(L,w,this._onChangeCheckedWrapper);
}else{qx.bom.Event.removeNativeListener(L,w,this._onChangeValueWrapper);
}}
if(qx.core.Variant.isSet(v,n)||qx.core.Variant.isSet(v,h)){if(L.type===u||L.type===t){qx.bom.Event.removeNativeListener(L,p,this._onKeyPressWrapped);
}}}},__nl:qx.core.Variant.select(v,{"mshtml":function(Q){if(qx.bom.client.Engine.VERSION>=9&&qx.bom.client.Engine.DOCUMENT_MODE>=9){qx.bom.Event.removeNativeListener(Q,x,this._onInputWrapper);

if(Q.type===u||Q.type===t){qx.bom.Event.removeNativeListener(Q,d,this._inputFixWrapper);
}}},"webkit":function(R){var S=R.tagName.toLowerCase();
if(qx.bom.client.Engine.VERSION<532&&S==q){qx.bom.Event.removeNativeListener(R,p,this._onInputWrapper);
}qx.bom.Event.removeNativeListener(R,x,this._onInputWrapper);
},"opera":function(T){qx.bom.Event.removeNativeListener(T,d,this._onKeyUpWrapper);
qx.bom.Event.removeNativeListener(T,b,this._onKeyDownWrapper);
qx.bom.Event.removeNativeListener(T,c,this._onBlurWrapper);
qx.bom.Event.removeNativeListener(T,x,this._onInputWrapper);
},"default":function(U){qx.bom.Event.removeNativeListener(U,x,this._onInputWrapper);
}}),_onKeyPress:qx.core.Variant.select(v,{"mshtml|opera":function(e,V){if(e.keyCode===13){if(V.value!==this.__nh){this.__nh=V.value;
qx.event.Registration.fireEvent(V,w,qx.event.type.Data,[V.value]);
}}},"default":null}),_inputFix:qx.core.Variant.select(v,{"mshtml":function(e,W){if(e.keyCode===46||e.keyCode===8){if(W.value!==this.__ni){this.__ni=W.value;
qx.event.Registration.fireEvent(W,x,qx.event.type.Data,[W.value]);
}}},"default":null}),_onKeyDown:qx.core.Variant.select(v,{"opera":function(e){if(e.keyCode===13){this.__nf=true;
}},"default":null}),_onKeyUp:qx.core.Variant.select(v,{"opera":function(e){if(e.keyCode===13){this.__nf=false;
}},"default":null}),_onBlur:qx.core.Variant.select(v,{"opera":function(e){if(this.__ng){window.clearTimeout(this.__ng);
}},"default":null}),_onInput:qx.event.GlobalError.observeMethod(function(e){var Y=qx.bom.Event.getTarget(e);
var X=Y.tagName.toLowerCase();
if(!this.__nf||X!==x){if(qx.core.Variant.isSet(v,n)){this.__ng=window.setTimeout(function(){qx.event.Registration.fireEvent(Y,x,qx.event.type.Data,[Y.value]);
},0);
}else{qx.event.Registration.fireEvent(Y,x,qx.event.type.Data,[Y.value]);
}}}),_onChangeValue:qx.event.GlobalError.observeMethod(function(e){var bb=qx.bom.Event.getTarget(e);
var ba=bb.value;

if(bb.type===g){var ba=[];

for(var i=0,o=bb.options,l=o.length;i<l;i++){if(o[i].selected){ba.push(o[i].value);
}}}qx.event.Registration.fireEvent(bb,w,qx.event.type.Data,[ba]);
}),_onChangeChecked:qx.event.GlobalError.observeMethod(function(e){var bc=qx.bom.Event.getTarget(e);

if(bc.type===r){if(bc.checked){qx.event.Registration.fireEvent(bc,w,qx.event.type.Data,[bc.value]);
}}else{qx.event.Registration.fireEvent(bc,w,qx.event.type.Data,[bc.checked]);
}}),_onProperty:qx.core.Variant.select(v,{"mshtml":qx.event.GlobalError.observeMethod(function(e){var bd=qx.bom.Event.getTarget(e);
var be=e.propertyName;

if(be===j&&(bd.type===u||bd.type===t||bd.tagName.toLowerCase()===q)){if(!bd.$$inValueSet){qx.event.Registration.fireEvent(bd,x,qx.event.type.Data,[bd.value]);
}}else if(be===f){if(bd.type===s){qx.event.Registration.fireEvent(bd,w,qx.event.type.Data,[bd.checked]);
}else if(bd.checked){qx.event.Registration.fireEvent(bd,w,qx.event.type.Data,[bd.value]);
}}}),"default":function(){}})},defer:function(bf){qx.event.Registration.addHandler(bf);
}});
})();
(function(){var v="",u="select",t="soft",s="off",r="qx.client",q="textarea",p="auto",o="wrap",n="text",m="mshtml",d="number",k="checkbox",g="select-one",c="input",b="option",f="value",e="radio",h="qx.bom.Input",a="nowrap",j="normal";
qx.Class.define(h,{statics:{__nm:{text:1,textarea:1,select:1,checkbox:1,radio:1,password:1,hidden:1,submit:1,image:1,file:1,search:1,reset:1,button:1},create:function(w,x,y){{};
var x=x?qx.lang.Object.clone(x):{};
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
}}else if((D===n||D===q)&&qx.core.Variant.isSet(r,m)){A.$$inValueSet=true;
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
}},setWrap:qx.core.Variant.select(r,{"mshtml":function(T,U){var W=U?t:s;
var V=U?p:v;
T.wrap=W;
T.style.overflowY=V;
},"gecko|webkit":function(X,Y){var bb=Y?t:s;
var ba=Y?v:p;
X.setAttribute(o,bb);
X.style.overflow=ba;
},"default":function(bc,bd){bc.style.whiteSpace=bd?j:a;
}})}});
})();
(function(){var b="qx.ui.form.IDateForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var a="qx.ui.form.renderer.IFormRenderer";
qx.Interface.define(a,{members:{addItems:function(b,c,d,e,f){},addButton:function(g,h){}}});
})();
(function(){var n="Validation Error",m="%1 is not a number.",l="%1 is not a color! %2",k="",j="%1 is not a string.",i="number",h="'%1' is not an email address.",g="qx.util.Validate",f="%1 is not an url.",d="%1 is not in %2",a="%1 does not fit %2.",c="string",b="%1 is not in the range from [%2, %3].";
qx.Class.define(g,{statics:{number:function(o){return function(p){qx.util.Validate.checkNumber(p,null,o);
};
},checkNumber:function(q,r,s){s=s||qx.locale.Manager.tr(m,q);

if((typeof q!==i&&(!(q instanceof Number)))||(!(isFinite(q)))){throw new qx.core.ValidationError(n,s);
}},email:function(t){return function(u){qx.util.Validate.checkEmail(u,null,t);
};
},checkEmail:function(v,w,x){x=x||qx.locale.Manager.tr(h,(v||k));
var y=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

if(y.test(v)===false){throw new qx.core.ValidationError(n,x);
}},string:function(z){return function(A){qx.util.Validate.checkString(A,null,z);
};
},checkString:function(B,C,D){D=D||qx.locale.Manager.tr(j,B);

if(typeof B!==c&&(!(B instanceof String))){throw new qx.core.ValidationError(n,D);
}},url:function(E){return function(F){qx.util.Validate.checkUrl(F,null,E);
};
},checkUrl:function(G,H,I){I=I||qx.locale.Manager.tr(f,G);
var J=/([A-Za-z0-9])+:\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

if(!J.test(G)){throw new qx.core.ValidationError(n,I);
}},color:function(K){return function(L){qx.util.Validate.checkColor(L,null,K);
};
},checkColor:function(M,N,O){try{qx.util.ColorUtil.stringToRgb(M);
}catch(e){O=O||qx.locale.Manager.tr(l,M,e);
throw new qx.core.ValidationError(n,O);
}},range:function(P,Q,R){return function(S){R=R||qx.locale.Manager.tr(b,S,P,Q);

if(S<P||S>Q){throw new qx.core.ValidationError(n,R);
}};
},inArray:function(T,U){return function(V){U=U||qx.locale.Manager.tr(d,V,T);

if(T.indexOf(V)===-1){throw new qx.core.ValidationError(n,U);
}};
},regExp:function(W,X){return function(Y){X=X||qx.locale.Manager.tr(a,Y,W);

if(!W.test(Y)){throw new qx.core.ValidationError(n,X);
}};
}}});
})();
(function(){var b="qx.ui.form.IColorForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var a="qx.ui.form.Resetter";
qx.Class.define(a,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__Br=[];
},members:{__Br:null,add:function(b){if(this._supportsValue(b)){var c=b.getValue();
}else if(this.__Bu(b)){var c=b.getSelection();
}else{throw new Error("Item "+b+" not supported for reseting.");
}this.__Br.push({item:b,init:c});
},reset:function(){for(var i=0;i<this.__Br.length;i++){var d=this.__Br[i];
this.__Bs(d.item,d.init);
}},resetItem:function(e){var f;

for(var i=0;i<this.__Br.length;i++){var g=this.__Br[i];

if(g.item===e){f=g.init;
break;
}}if(f===undefined){throw new Error("The given item has not been added.");
}this.__Bs(e,f);
},__Bs:function(h,j){if(this._supportsValue(h)){h.setValue(j);
}else if(this.__Bu(h)){h.setSelection(j);
}},redefine:function(){for(var i=0;i<this.__Br.length;i++){var k=this.__Br[i].item;
this.__Br[i].init=this.__Bt(k);
}},redefineItem:function(l){var m;

for(var i=0;i<this.__Br.length;i++){if(this.__Br[i].item===l){m=this.__Br[i];
break;
}}if(m===undefined){throw new Error("The given item has not been added.");
}m.init=this.__Bt(m.item);
},__Bt:function(n){if(this._supportsValue(n)){return n.getValue();
}else if(this.__Bu(n)){return n.getSelection();
}},__Bu:function(o){var p=o.constructor;
return qx.Class.hasInterface(p,qx.ui.core.ISingleSelection);
},_supportsValue:function(q){var r=q.constructor;
return (qx.Class.hasInterface(r,qx.ui.form.IBooleanForm)||qx.Class.hasInterface(r,qx.ui.form.IColorForm)||qx.Class.hasInterface(r,qx.ui.form.IDateForm)||qx.Class.hasInterface(r,qx.ui.form.INumberForm)||qx.Class.hasInterface(r,qx.ui.form.IStringForm));
}},destruct:function(){this.__Br=null;
}});
})();
(function(){var s="",r="URL",q="__Bv",p="Add",o="__Bw",n="keypress",m="Title",l="Add a feed",k="feedreader.view.AddFeedWindow",j="user",c="this.__form",i="icon/16/actions/document-new.png",g="icon/16/actions/dialog-apply.png",b="__Bx",a="right",f="Feed Information",d="execute",h="Enter";
qx.Class.define(k,{extend:qx.ui.window.Window,construct:function(t){qx.ui.window.Window.call(this,this.tr(l),i);
this.__Bv=t;
this.set({modal:true,showMinimize:false,showMaximize:false,allowMaximize:false});
this._addContent();
},members:{__Bw:null,__Bx:null,__Bv:null,__By:null,_addContent:function(){this.setLayout(new qx.ui.layout.VBox(10));
this.__By=new qx.ui.form.Form();
this.__By.addGroupHeader(this.tr(f));
this.__Bx=new qx.ui.form.TextField().set({required:true,width:250});
this.__By.add(this.__Bx,this.tr(m));
this.__Bw=new qx.ui.form.TextField().set({required:true});
this.__By.add(this.__Bw,this.tr(r),qx.util.Validate.checkUrl);
var u=new qx.ui.form.Button(this.tr(p),g);
u.set({alignX:a,allowGrowX:false});
u.addListener(d,this._addFeed,this);
this.__By.addButton(u);
this.addListener(n,function(e){if(e.getTarget() instanceof qx.ui.form.TextField&&e.getKeyIdentifier()===h){this._addFeed();
}});
this.add(new qx.ui.form.renderer.SinglePlaceholder(this.__By));
},_addFeed:function(e){if(this.__By.validate()){var w=this.__Bx.getValue();
var v=this.__Bw.getValue();
this.__Bv.addFeed(w,v,j);
this.__Bx.setValue(s);
this.__Bw.setValue(s);
this.close();
}}},destruct:function(){this.__Bz=null;
this._disposeObjects(q,b,o,c);
}});
})();
(function(){var k="qx.dynlocale",j="",h="changeLocale",g="visibility",f="on",d=" <span style='color:red'>*</span> ",c="abstract",b="qx.ui.form.renderer.AbstractRenderer",a=" :";
qx.Class.define(b,{type:c,extend:qx.ui.core.Widget,implement:qx.ui.form.renderer.IFormRenderer,construct:function(l){qx.ui.core.Widget.call(this);
this._visibilityBindingIds=[];
if(qx.core.Variant.isSet(k,f)){qx.locale.Manager.getInstance().addListener(h,this._onChangeLocale,this);
this._names=[];
}var p=l.getGroups();

for(var i=0;i<p.length;i++){var o=p[i];
this.addItems(o.items,o.labels,o.title,o.options,o.headerOptions);
}var m=l.getButtons();
var n=l.getButtonOptions();

for(var i=0;i<m.length;i++){this.addButton(m[i],n[i]);
}},members:{_names:null,_visibilityBindingIds:null,_connectVisibility:function(q,r){var s=q.bind(g,r,g);
this._visibilityBindingIds.push({id:s,item:q});
},_onChangeLocale:qx.core.Variant.select(k,{"on":function(e){for(var i=0;i<this._names.length;i++){var t=this._names[i];

if(t.name&&t.name.translate){t.name=t.name.translate();
}var u=this._createLabelText(t.name,t.item);
t.label.setValue(u);
}},"off":null}),_createLabelText:function(name,v){var w=j;

if(v.getRequired()){w=d;
}var x=name.length>0||v.getRequired()?a:j;
return name+w+x;
},addItems:function(y,z,A){throw new Error("Abstract method call");
},addButton:function(B){throw new Error("Abstract method call");
}},destruct:function(){if(qx.core.Variant.isSet(k,f)){qx.locale.Manager.getInstance().removeListener(h,this._onChangeLocale,this);
}this._names=null;
for(var i=0;i<this._visibilityBindingIds.length;i++){var C=this._visibilityBindingIds[i];
C.item.removeBinding(C.id);
}}});
})();
(function(){var h="right",g="bold",f="_buttonRow",e="qx.ui.form.renderer.Single",d="left",c="qx.dynlocale",b="top",a="on";
qx.Class.define(e,{extend:qx.ui.form.renderer.AbstractRenderer,construct:function(j){var k=new qx.ui.layout.Grid();
k.setSpacing(6);
k.setColumnFlex(0,1);
k.setColumnAlign(0,h,b);
this._setLayout(k);
qx.ui.form.renderer.AbstractRenderer.call(this,j);
},members:{_row:0,_buttonRow:null,addItems:function(l,m,n){if(n!=null){this._add(this._createHeader(n),{row:this._row,column:0,colSpan:2});
this._row++;
}for(var i=0;i<l.length;i++){var p=this._createLabel(m[i],l[i]);
this._add(p,{row:this._row,column:0});
var o=l[i];
p.setBuddy(o);
this._add(o,{row:this._row,column:1});
this._row++;
this._connectVisibility(o,p);
if(qx.core.Variant.isSet(c,a)){this._names.push({name:m[i],label:p,item:l[i]});
}}},addButton:function(q){if(this._buttonRow==null){this._buttonRow=new qx.ui.container.Composite();
this._buttonRow.setMarginTop(5);
var r=new qx.ui.layout.HBox();
r.setAlignX(h);
r.setSpacing(5);
this._buttonRow.setLayout(r);
this._add(this._buttonRow,{row:this._row,column:0,colSpan:2});
this._row++;
}this._buttonRow.add(q);
},getLayout:function(){return this._getLayout();
},_createLabel:function(name,s){var t=new qx.ui.basic.Label(this._createLabelText(name,s));
t.setRich(true);
return t;
},_createHeader:function(u){var v=new qx.ui.basic.Label(u);
v.setFont(g);

if(this._row!=0){v.setMarginTop(10);
}v.setAlignX(d);
return v;
}},destruct:function(){if(this._buttonRow){this._buttonRow.removeAll();
this._disposeObjects(f);
}}});
})();
(function(){var j="",h="String",g="complete",f="qx.event.type.Event",d="value instanceof Function || qx.Class.isSubClassOf(value.constructor, qx.ui.form.validation.AsyncValidator)",c="qx.ui.form.validation.Manager",b="This field is required",a="qx.event.type.Data";
qx.Class.define(c,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__BA=[];
this.__BB={};
this.setRequiredFieldMessage(qx.locale.Manager.tr(b));
},events:{"changeValid":a,"complete":f},properties:{validator:{check:d,init:null,nullable:true},invalidMessage:{check:h,init:j},requiredFieldMessage:{check:h,init:j},context:{nullable:true}},members:{__BA:null,__BC:null,__BB:null,__BD:null,add:function(k,l,m){if(!this.__BI(k)){throw new Error("Added widget not supported.");
}if(this.__BJ(k)){if(l!=null){throw new Error("Widgets supporting selection can only be validated "+"in the form validator");
}}var n={item:k,validator:l,valid:null,context:m};
this.__BA.push(n);
},validate:function(){var s=true;
this.__BD=true;
var p=[];
for(var i=0;i<this.__BA.length;i++){var q=this.__BA[i].item;
var t=this.__BA[i].validator;
p.push(q);
if(t==null){var o=this.__BE(q);
s=s&&o;
this.__BD=o&&this.__BD;
continue;
}var o=this.__BF(this.__BA[i],q.getValue());
s=o&&s;

if(o!=null){this.__BD=o&&this.__BD;
}}var r=this.__BG(p);

if(qx.lang.Type.isBoolean(r)){this.__BD=r&&this.__BD;
}s=r&&s;
this.__BK(s);

if(qx.lang.Object.isEmpty(this.__BB)){this.fireEvent(g);
}return s;
},__BE:function(u){if(u.getRequired()){if(this.__BJ(u)){var v=!!u.getSelection()[0];
}else{var v=!!u.getValue();
}u.setValid(v);
var x=u.getRequiredInvalidMessage();
var w=x?x:this.getRequiredFieldMessage();
u.setInvalidMessage(w);
return v;
}return true;
},__BF:function(y,z){var E=y.item;
var D=y.context;
var C=y.validator;
if(this.__BH(C)){this.__BB[E.toHashCode()]=null;
C.validate(E,E.getValue(),this,D);
return null;
}var B=null;

try{var B=C.call(D||this,z,E);

if(B===undefined){B=true;
}}catch(e){if(e instanceof qx.core.ValidationError){B=false;

if(e.message&&e.message!=qx.type.BaseError.DEFAULTMESSAGE){var A=e.message;
}else{var A=e.getComment();
}E.setInvalidMessage(A);
}else{throw e;
}}E.setValid(B);
y.valid=B;
return B;
},__BG:function(F){var H=this.getValidator();
var I=this.getContext()||this;

if(H==null){return true;
}this.setInvalidMessage("");

if(this.__BH(H)){this.__BB[this.toHashCode()]=null;
H.validateForm(F,this,I);
return null;
}
try{var J=H.call(I,F,this);

if(J===undefined){J=true;
}}catch(e){if(e instanceof qx.core.ValidationError){J=false;

if(e.message&&e.message!=qx.type.BaseError.DEFAULTMESSAGE){var G=e.message;
}else{var G=e.getComment();
}this.setInvalidMessage(G);
}else{throw e;
}}return J;
},__BH:function(K){var L=false;

if(!qx.lang.Type.isFunction(K)){L=qx.Class.isSubClassOf(K.constructor,qx.ui.form.validation.AsyncValidator);
}return L;
},__BI:function(M){var N=M.constructor;
return qx.Class.hasInterface(N,qx.ui.form.IForm);
},__BJ:function(O){var P=O.constructor;
return qx.Class.hasInterface(P,qx.ui.core.ISingleSelection);
},__BK:function(Q){var R=this.__BC;
this.__BC=Q;
if(R!=Q){this.fireDataEvent("changeValid",Q,R);
}},getValid:function(){return this.__BC;
},isValid:function(){return this.getValid();
},getInvalidMessages:function(){var S=[];
for(var i=0;i<this.__BA.length;i++){var T=this.__BA[i].item;

if(!T.getValid()){S.push(T.getInvalidMessage());
}}if(this.getInvalidMessage()!=j){S.push(this.getInvalidMessage());
}return S;
},reset:function(){for(var i=0;i<this.__BA.length;i++){var U=this.__BA[i];
U.item.setValid(true);
}this.__BC=null;
},setItemValid:function(V,W){this.__BB[V.toHashCode()]=W;
V.setValid(W);
this.__BL();
},setFormValid:function(X){this.__BB[this.toHashCode()]=X;
this.__BL();
},__BL:function(){var ba=this.__BD;
for(var bb in this.__BB){var Y=this.__BB[bb];
ba=Y&&ba;
if(Y==null){return;
}}this.__BK(ba);
this.__BB={};
this.fireEvent("complete");
}},destruct:function(){this.__BA=null;
}});
})();
(function(){var a="qx.ui.form.renderer.SinglePlaceholder";
qx.Class.define(a,{extend:qx.ui.form.renderer.Single,implement:qx.ui.form.renderer.IFormRenderer,members:{addItems:function(b,c,d){if(d!=null){this._add(this._createHeader(d),{row:this._row,column:0,colSpan:2});
this._row++;
}for(var i=0;i<b.length;i++){if(b[i].setPlaceholder===undefined){throw new Error("Only widgets with placeholders supported.");
}b[i].setPlaceholder(c[i]);
this._add(b[i],{row:this._row,column:0});
this._row++;
}}}});
})();
(function(){var a="qx.ui.form.validation.AsyncValidator";
qx.Class.define(a,{extend:qx.core.Object,construct:function(b){qx.core.Object.call(this);
this.__BM=b;
},members:{__BM:null,__BN:null,__BO:null,__BP:null,validate:function(c,d,e,f){this.__BP=false;
this.__BN=c;
this.__BO=e;
this.__BM.call(f||this,this,d);
},validateForm:function(g,h,i){this.__BP=true;
this.__BO=h;
this.__BM.call(i,g,this);
},setValid:function(j,k){if(this.__BP){if(k!==undefined){this.__BO.setInvalidMessage(k);
}this.__BO.setFormValid(j);
}else{if(k!==undefined){this.__BN.setInvalidMessage(k);
}this.__BO.setItemValid(this.__BN,j);
}}},destruct:function(){this.__BO=this.__BN=null;
}});
})();
(function(){var b="qx.ui.form.Form",a="";
qx.Class.define(b,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__BQ=[];
this._buttons=[];
this._buttonOptions=[];
this._validationManager=new qx.ui.form.validation.Manager();
this._resetter=new qx.ui.form.Resetter();
},members:{__BQ:null,_validationManager:null,_groupCounter:0,_buttons:null,_buttonOptions:null,_resetter:null,add:function(c,d,e,name,f,g){if(this.__BR()){this.__BQ.push({title:null,items:[],labels:[],names:[],options:[],headerOptions:{}});
}this.__BQ[this._groupCounter].items.push(c);
this.__BQ[this._groupCounter].labels.push(d);
this.__BQ[this._groupCounter].options.push(g);
if(name==null){name=d.replace(/\s+|&|-|\+|\*|\/|\||!|\.|,|:|\?|;|~|%|\{|\}|\(|\)|\[|\]|<|>|=|\^|@|\\/g,a);
}this.__BQ[this._groupCounter].names.push(name);
this._validationManager.add(c,e,f);
this._resetter.add(c);
},addGroupHeader:function(h,k){if(!this.__BR()){this._groupCounter++;
}this.__BQ.push({title:h,items:[],labels:[],names:[],options:[],headerOptions:k});
},addButton:function(l,m){this._buttons.push(l);
this._buttonOptions.push(m||null);
},__BR:function(){return this.__BQ.length===0;
},reset:function(){this._resetter.reset();
this._validationManager.reset();
},redefineResetter:function(){this._resetter.redefine();
},validate:function(){return this._validationManager.validate();
},getValidationManager:function(){return this._validationManager;
},getGroups:function(){return this.__BQ;
},getButtons:function(){return this._buttons;
},getButtonOptions:function(){return this._buttonOptions;
},getItems:function(){var n={};
for(var i=0;i<this.__BQ.length;i++){var o=this.__BQ[i];
for(var j=0;j<o.names.length;j++){var name=o.names[j];
n[name]=o.items[j];
}}return n;
}},destruct:function(){this.__BQ=this._buttons=this._buttonOptions=null;
}});
})();

});