qx.$$packageData['5205d1c4d623']={"locales":{},"resources":{"feedreader/images/combined/icons16.png":[16,96,"png","feedreader"],"qx/icon/Tango/16/actions/dialog-apply.png":[16,16,"png","qx","feedreader/images/combined/icons16.png",0,0],"qx/icon/Tango/16/actions/document-new.png":[16,16,"png","qx","feedreader/images/combined/icons16.png",0,-48]},"translations":{}};

qx.Part.$$notifyLoad("5205d1c4d623", function() {
(function(){var k="showingPlaceholder",j="",i="none",h="qx.dynlocale",g="Boolean",f="qx.client",d="color",c="qx.event.type.Data",b="readonly",a="placeholder",Y="input",X="focusin",W="visibility",V="focusout",U="changeLocale",T="on",S="readOnly",R="text",Q="_applyTextAlign",P="px",r="RegExp",s=")",p="syncAppearance",q="change",n="textAlign",o="focused",l="center",m="visible",v="disabled",w="url(",D="off",B="String",H="resize",F="qx.ui.form.AbstractField",L="transparent",J="spellcheck",y="false",O="right",N="PositiveInteger",M="mshtml",x="abstract",z="block",A="webkit",C="_applyReadOnly",E="_applyPlaceholder",G="hidden",I="left",K="qx/static/blank.gif",t="changeReadOnly",u="absolute";
qx.Class.define(F,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm,qx.ui.form.IForm],include:[qx.ui.form.MForm],type:x,construct:function(ba){qx.ui.core.Widget.call(this);
this.__H=!qx.bom.client.Feature.PLACEHOLDER;

if(ba!=null){this.setValue(ba);
}this.getContentElement().addListener(q,this._onChangeContent,this);
if(this.__H){this.addListener(p,this._syncPlaceholder,this);
}if(qx.core.Variant.isSet(h,T)){qx.locale.Manager.getInstance().addListener(U,this._onChangeLocale,this);
}},events:{"input":c,"changeValue":c},properties:{textAlign:{check:[I,l,O],nullable:true,themeable:true,apply:Q},readOnly:{check:g,apply:C,event:t,init:false},selectable:{refine:true,init:true},focusable:{refine:true,init:true},maxLength:{check:N,init:Infinity},liveUpdate:{check:g,init:false},placeholder:{check:B,nullable:true,apply:E},filter:{check:r,nullable:true,init:null}},members:{__I:true,__J:null,__K:null,__L:null,__H:true,getFocusElement:function(){var bb=this.getContentElement();

if(bb){return bb;
}},_createInputElement:function(){return new qx.html.Input(R);
},renderLayout:function(bc,top,bd,be){var bf=this._updateInsets;
var bj=qx.ui.core.Widget.prototype.renderLayout.call(this,bc,top,bd,be);
if(!bj){return;
}var bh=bj.size||bf;
var bk=P;

if(bh||bj.local||bj.margin){var bg=this.getInsets();
var innerWidth=bd-bg.left-bg.right;
var innerHeight=be-bg.top-bg.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}var bi=this.getContentElement();
if(bf&&this.__H){this.__O().setStyles({"left":bg.left+bk,"top":bg.top+bk});
}
if(bh){if(this.__H){this.__O().setStyles({"width":innerWidth+bk,"height":innerHeight+bk});
}bi.setStyles({"width":innerWidth+bk,"height":innerHeight+bk});
this._renderContentElement(innerHeight,bi);
}},_renderContentElement:function(innerHeight,bl){},_createContentElement:function(){var bm=this._createInputElement();
bm.setStyles({"border":i,"padding":0,"margin":0,"display":z,"background":L,"outline":i,"appearance":i,"position":u,"autoComplete":D});
bm.setSelectable(this.getSelectable());
bm.setEnabled(this.getEnabled());
bm.addListener(Y,this._onHtmlInput,this);
bm.setAttribute(J,y);
if(qx.core.Variant.isSet(f,A)){bm.setStyle(H,i);
}if(qx.core.Variant.isSet(f,M)){bm.setStyles({backgroundImage:w+qx.util.ResourceManager.getInstance().toUri(K)+s});
}return bm;
},_applyEnabled:function(bn,bo){qx.ui.core.Widget.prototype._applyEnabled.call(this,bn,bo);
this.getContentElement().setEnabled(bn);

if(this.__H){if(bn){this._showPlaceholder();
}else{this._removePlaceholder();
}}else{var bp=this.getContentElement();
bp.setAttribute(a,bn?this.getPlaceholder():j);
}},__M:{width:16,height:16},_getContentHint:function(){return {width:this.__M.width*10,height:this.__M.height||16};
},_applyFont:function(bq,br){var bs;

if(bq){var bt=qx.theme.manager.Font.getInstance().resolve(bq);
bs=bt.getStyles();
}else{bs=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(bs);
if(this.__H){this.__O().setStyles(bs);
}if(bq){this.__M=qx.bom.Label.getTextSize("A",bs);
}else{delete this.__M;
}qx.ui.core.queue.Layout.add(this);
},_applyTextColor:function(bu,bv){if(bu){this.getContentElement().setStyle(d,qx.theme.manager.Color.getInstance().resolve(bu));
}else{this.getContentElement().removeStyle(d);
}},tabFocus:function(){qx.ui.core.Widget.prototype.tabFocus.call(this);
this.selectAllText();
},_getTextSize:function(){return this.__M;
},_onHtmlInput:function(e){var bz=e.getData();
var by=true;
this.__I=false;
if(this.getFilter()!=null){var bA=j;
var bw=bz.search(this.getFilter());
var bx=bz;

while(bw>=0){bA=bA+(bx.charAt(bw));
bx=bx.substring(bw+1,bx.length);
bw=bx.search(this.getFilter());
}
if(bA!=bz){by=false;
bz=bA;
this.getContentElement().setValue(bz);
}}if(bz.length>this.getMaxLength()){var by=false;
this.getContentElement().setValue(bz.substr(0,this.getMaxLength()));
}if(by){this.fireDataEvent(Y,bz,this.__L);
this.__L=bz;
if(this.getLiveUpdate()){this.__N(bz);
}}},__N:function(bB){var bC=this.__K;
this.__K=bB;

if(bC!=bB){this.fireNonBubblingEvent("changeValue",qx.event.type.Data,[bB,bC]);
}},setValue:function(bD){if(bD===null){if(this.__I){return bD;
}bD=j;
this.__I=true;
}else{this.__I=false;
if(this.__H){this._removePlaceholder();
}}
if(qx.lang.Type.isString(bD)){var bF=this.getContentElement();

if(bD.length>this.getMaxLength()){bD=bD.substr(0,this.getMaxLength());
}
if(bF.getValue()!=bD){var bG=bF.getValue();
bF.setValue(bD);
var bE=this.__I?null:bD;
this.__K=bG;
this.__N(bE);
}if(this.__H){this._showPlaceholder();
}return bD;
}throw new Error("Invalid value type: "+bD);
},getValue:function(){var bH=this.getContentElement().getValue();
return this.__I?null:bH;
},resetValue:function(){this.setValue(null);
},_onChangeContent:function(e){this.__I=e.getData()===null;
this.__N(e.getData());
},getTextSelection:function(){return this.getContentElement().getTextSelection();
},getTextSelectionLength:function(){return this.getContentElement().getTextSelectionLength();
},getTextSelectionStart:function(){return this.getContentElement().getTextSelectionStart();
},getTextSelectionEnd:function(){return this.getContentElement().getTextSelectionEnd();
},setTextSelection:function(bI,bJ){this.getContentElement().setTextSelection(bI,bJ);
},clearTextSelection:function(){this.getContentElement().clearTextSelection();
},selectAllText:function(){this.setTextSelection(0);
},_showPlaceholder:function(){var bL=this.getValue()||j;
var bK=this.getPlaceholder();

if(bK!=null&&bL==j&&!this.hasState(o)&&!this.hasState(v)){if(this.hasState(k)){this._syncPlaceholder();
}else{this.addState(k);
}}},_removePlaceholder:function(){if(this.hasState(k)){this.__O().setStyle(W,G);
this.removeState(k);
}},_syncPlaceholder:function(){if(this.hasState(k)){this.__O().setStyle(W,m);
}},__O:function(){if(this.__J==null){this.__J=new qx.html.Label();
var bM=qx.theme.manager.Color.getInstance();
this.__J.setStyles({"visibility":"hidden","zIndex":6,"position":"absolute","color":bM.resolve("text-placeholder")});
this.getContainerElement().add(this.__J);
}return this.__J;
},_onChangeLocale:qx.core.Variant.select(h,{"on":function(e){var content=this.getPlaceholder();

if(content&&content.translate){this.setPlaceholder(content.translate());
}},"off":null}),_applyPlaceholder:function(bN,bO){if(this.__H){this.__O().setValue(bN);

if(bN!=null){this.addListener(X,this._removePlaceholder,this);
this.addListener(V,this._showPlaceholder,this);
this._showPlaceholder();
}else{this.removeListener(X,this._removePlaceholder,this);
this.removeListener(V,this._showPlaceholder,this);
this._removePlaceholder();
}}else{if(this.getEnabled()){this.getContentElement().setAttribute(a,bN);
}}},_applyTextAlign:function(bP,bQ){this.getContentElement().setStyle(n,bP);
},_applyReadOnly:function(bR,bS){var bT=this.getContentElement();
bT.setAttribute(S,bR);

if(bR){this.addState(b);
this.setFocusable(false);
}else{this.removeState(b);
this.setFocusable(true);
}}},destruct:function(){this.__J=null;

if(qx.core.Variant.isSet(h,T)){qx.locale.Manager.getInstance().removeListener(U,this._onChangeLocale,this);
}}});
})();
(function(){var b="qx.ui.form.TextField",a="textfield";
qx.Class.define(b,{extend:qx.ui.form.AbstractField,properties:{appearance:{refine:true,init:a},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{_renderContentElement:function(innerHeight,c){}}});
})();
(function(){var k="wrap",j="value",i="textarea",h="none",g="qx.client",f="",e="input",d="qx.html.Input",c="select",b="disabled",a="read-only";
qx.Class.define(d,{extend:qx.html.Element,construct:function(l,m,n){if(l===c||l===i){var o=l;
}else{o=e;
}qx.html.Element.call(this,o,m,n);
this.__c=l;
},members:{__c:null,__d:null,__e:null,_createDomElement:function(){return qx.bom.Input.create(this.__c);
},_applyProperty:function(name,p){qx.html.Element.prototype._applyProperty.call(this,name,p);
var q=this.getDomElement();

if(name===j){qx.bom.Input.setValue(q,p);
}else if(name===k){qx.bom.Input.setWrap(q,p);
}},setEnabled:qx.core.Variant.select(g,{"webkit":function(r){this.__e=r;

if(!r){this.setStyles({"userModify":a,"userSelect":h});
}else{this.setStyles({"userModify":null,"userSelect":this.__d?null:h});
}},"default":function(s){this.setAttribute(b,s===false);
}}),setSelectable:qx.core.Variant.select(g,{"webkit":function(t){this.__d=t;
qx.html.Element.prototype.setSelectable.call(this,this.__e&&t);
},"default":function(u){qx.html.Element.prototype.setSelectable.call(this,u);
}}),setValue:function(v){var w=this.getDomElement();

if(w){if(w.value!=v){qx.bom.Input.setValue(w,v);
}}else{this._setProperty(j,v);
}return this;
},getValue:function(){var x=this.getDomElement();

if(x){return qx.bom.Input.getValue(x);
}return this._getProperty(j)||f;
},setWrap:function(y){if(this.__c===i){this._setProperty(k,y);
}else{throw new Error("Text wrapping is only support by textareas!");
}return this;
},getWrap:function(){if(this.__c===i){return this._getProperty(k);
}else{throw new Error("Text wrapping is only support by textareas!");
}}}});
})();
(function(){var w="change",v="input",u="qx.client",t="text",s="password",r="checkbox",q="radio",p="textarea",n="keypress",m="opera",d="propertychange",k="blur",h="keydown",c="keyup",b="select-multiple",g="checked",f="value",j="select",a="qx.event.handler.Input";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){qx.core.Object.call(this);
this._onChangeCheckedWrapper=qx.lang.Function.listener(this._onChangeChecked,this);
this._onChangeValueWrapper=qx.lang.Function.listener(this._onChangeValue,this);
this._onInputWrapper=qx.lang.Function.listener(this._onInput,this);
this._onPropertyWrapper=qx.lang.Function.listener(this._onProperty,this);
if(qx.core.Variant.isSet(u,m)){this._onKeyDownWrapper=qx.lang.Function.listener(this._onKeyDown,this);
this._onKeyUpWrapper=qx.lang.Function.listener(this._onKeyUp,this);
this._onBlurWrapper=qx.lang.Function.listener(this._onBlur,this);
}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{input:1,change:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{__g:false,__h:null,__i:null,canHandleEvent:function(x,y){var z=x.tagName.toLowerCase();

if(y===v&&(z===v||z===p)){return true;
}
if(y===w&&(z===v||z===p||z===j)){return true;
}return false;
},registerEvent:qx.core.Variant.select(u,{"mshtml":function(A,B,C){if(!A.__j){var D=A.tagName.toLowerCase();
var E=A.type;

if(E===t||E===s||D===p||E===r||E===q){qx.bom.Event.addNativeListener(A,d,this._onPropertyWrapper);
}
if(E!==r&&E!==q){qx.bom.Event.addNativeListener(A,w,this._onChangeValueWrapper);
}
if(E===t||E===s){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,A);
qx.bom.Event.addNativeListener(A,n,this._onKeyPressWrapped);
}A.__j=true;
}},"default":function(F,G,H){if(G===v){this.__k(F);
}else if(G===w){if(F.type===q||F.type===r){qx.bom.Event.addNativeListener(F,w,this._onChangeCheckedWrapper);
}else{qx.bom.Event.addNativeListener(F,w,this._onChangeValueWrapper);
}if(qx.core.Variant.isSet(u,m)){if(F.type===t||F.type===s){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,F);
qx.bom.Event.addNativeListener(F,n,this._onKeyPressWrapped);
}}}}}),__k:qx.core.Variant.select(u,{"mshtml":null,"webkit":function(I){var J=I.tagName.toLowerCase();
if(qx.bom.client.Engine.VERSION<532&&J==p){qx.bom.Event.addNativeListener(I,n,this._onInputWrapper);
}qx.bom.Event.addNativeListener(I,v,this._onInputWrapper);
},"opera":function(K){qx.bom.Event.addNativeListener(K,c,this._onKeyUpWrapper);
qx.bom.Event.addNativeListener(K,h,this._onKeyDownWrapper);
qx.bom.Event.addNativeListener(K,k,this._onBlurWrapper);
qx.bom.Event.addNativeListener(K,v,this._onInputWrapper);
},"default":function(L){qx.bom.Event.addNativeListener(L,v,this._onInputWrapper);
}}),unregisterEvent:qx.core.Variant.select(u,{"mshtml":function(M,N){if(M.__j){var O=M.tagName.toLowerCase();
var P=M.type;

if(P===t||P===s||O===p||P===r||P===q){qx.bom.Event.removeNativeListener(M,d,this._onPropertyWrapper);
}
if(P!==r&&P!==q){qx.bom.Event.removeNativeListener(M,w,this._onChangeValueWrapper);
}
if(P===t||P===s){qx.bom.Event.removeNativeListener(M,n,this._onKeyPressWrapped);
}
try{delete M.__j;
}catch(Q){M.__j=null;
}}},"default":function(R,S){if(S===v){this.__k(R);
}else if(S===w){if(R.type===q||R.type===r){qx.bom.Event.removeNativeListener(R,w,this._onChangeCheckedWrapper);
}else{qx.bom.Event.removeNativeListener(R,w,this._onChangeValueWrapper);
}}
if(qx.core.Variant.isSet(u,m)){if(R.type===t||R.type===s){qx.bom.Event.removeNativeListener(R,n,this._onKeyPressWrapped);
}}}}),__l:qx.core.Variant.select(u,{"mshtml":null,"webkit":function(T){var U=T.tagName.toLowerCase();
if(qx.bom.client.Engine.VERSION<532&&U==p){qx.bom.Event.removeNativeListener(T,n,this._onInputWrapper);
}qx.bom.Event.removeNativeListener(T,v,this._onInputWrapper);
},"opera":function(V){qx.bom.Event.removeNativeListener(V,c,this._onKeyUpWrapper);
qx.bom.Event.removeNativeListener(V,h,this._onKeyDownWrapper);
qx.bom.Event.removeNativeListener(V,k,this._onBlurWrapper);
qx.bom.Event.removeNativeListener(V,v,this._onInputWrapper);
},"default":function(W){qx.bom.Event.removeNativeListener(W,v,this._onInputWrapper);
}}),_onKeyPress:qx.core.Variant.select(u,{"mshtml|opera":function(e,X){if(e.keyCode===13){if(X.value!==this.__i){this.__i=X.value;
qx.event.Registration.fireEvent(X,w,qx.event.type.Data,[X.value]);
}}},"default":null}),_onKeyDown:qx.core.Variant.select(u,{"opera":function(e){if(e.keyCode===13){this.__g=true;
}},"default":null}),_onKeyUp:qx.core.Variant.select(u,{"opera":function(e){if(e.keyCode===13){this.__g=false;
}},"default":null}),_onBlur:qx.core.Variant.select(u,{"opera":function(e){if(this.__h){window.clearTimeout(this.__h);
}},"default":null}),_onInput:qx.event.GlobalError.observeMethod(function(e){var Y=qx.bom.Event.getTarget(e);
if(!this.__g){if(qx.core.Variant.isSet(u,m)){this.__h=window.setTimeout(function(){qx.event.Registration.fireEvent(Y,v,qx.event.type.Data,[Y.value]);
},0);
}else{qx.event.Registration.fireEvent(Y,v,qx.event.type.Data,[Y.value]);
}}}),_onChangeValue:qx.event.GlobalError.observeMethod(function(e){var bb=qx.bom.Event.getTarget(e);
var ba=bb.value;

if(bb.type===b){var ba=[];

for(var i=0,o=bb.options,l=o.length;i<l;i++){if(o[i].selected){ba.push(o[i].value);
}}}qx.event.Registration.fireEvent(bb,w,qx.event.type.Data,[ba]);
}),_onChangeChecked:qx.event.GlobalError.observeMethod(function(e){var bc=qx.bom.Event.getTarget(e);

if(bc.type===q){if(bc.checked){qx.event.Registration.fireEvent(bc,w,qx.event.type.Data,[bc.value]);
}}else{qx.event.Registration.fireEvent(bc,w,qx.event.type.Data,[bc.checked]);
}}),_onProperty:qx.core.Variant.select(u,{"mshtml":qx.event.GlobalError.observeMethod(function(e){var bd=qx.bom.Event.getTarget(e);
var be=e.propertyName;

if(be===f&&(bd.type===t||bd.type===s||bd.tagName.toLowerCase()===p)){if(!bd.$$inValueSet){qx.event.Registration.fireEvent(bd,v,qx.event.type.Data,[bd.value]);
}}else if(be===g){if(bd.type===r){qx.event.Registration.fireEvent(bd,w,qx.event.type.Data,[bd.checked]);
}else if(bd.checked){qx.event.Registration.fireEvent(bd,w,qx.event.type.Data,[bd.value]);
}}}),"default":function(){}})},defer:function(bf){qx.event.Registration.addHandler(bf);
}});
})();
(function(){var v="",u="select",t="soft",s="off",r="qx.client",q="textarea",p="wrap",o="text",n="mshtml",m="number",d="checkbox",k="select-one",g="input",c="option",b="value",f="radio",e="qx.bom.Input",h="nowrap",a="auto",j="normal";
qx.Class.define(e,{statics:{__f:{text:1,textarea:1,select:1,checkbox:1,radio:1,password:1,hidden:1,submit:1,image:1,file:1,search:1,reset:1,button:1},create:function(w,x,y){{};
var x=x?qx.lang.Object.clone(x):{};
var z;

if(w===q||w===u){z=w;
}else{z=g;
x.type=w;
}return qx.bom.Element.create(z,x,y);
},setValue:function(A,B){var G=A.nodeName.toLowerCase();
var D=A.type;
var Array=qx.lang.Array;
var H=qx.lang.Type;

if(typeof B===m){B+=v;
}
if((D===d||D===f)){if(H.isArray(B)){A.checked=Array.contains(B,A.value);
}else{A.checked=A.value==B;
}}else if(G===u){var C=H.isArray(B);
var I=A.options;
var E,F;

for(var i=0,l=I.length;i<l;i++){E=I[i];
F=E.getAttribute(b);

if(F==null){F=E.text;
}E.selected=C?Array.contains(B,F):B==F;
}
if(C&&B.length==0){A.selectedIndex=-1;
}}else if((D===o||D===q)&&qx.core.Variant.isSet(r,n)){A.$$inValueSet=true;
A.value=B;
A.$$inValueSet=null;
}else{A.value=B;
}},getValue:function(J){var P=J.nodeName.toLowerCase();

if(P===c){return (J.attributes.value||{}).specified?J.value:J.text;
}
if(P===u){var K=J.selectedIndex;
if(K<0){return null;
}var Q=[];
var S=J.options;
var R=J.type==k;
var O=qx.bom.Input;
var N;
for(var i=R?K:0,M=R?K+1:S.length;i<M;i++){var L=S[i];

if(L.selected){N=O.getValue(L);
if(R){return N;
}Q.push(N);
}}return Q;
}else{return (J.value||v).replace(/\r/g,v);
}},setWrap:qx.core.Variant.select(r,{"mshtml":function(T,U){T.wrap=U?t:s;
},"gecko|webkit":function(V,W){var Y=W?t:s;
var X=W?v:a;
V.setAttribute(p,Y);
V.style.overflow=X;
},"default":function(ba,bb){ba.style.whiteSpace=bb?j:h;
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
this.__m=[];
},members:{__m:null,add:function(b){if(this._supportsValue(b)){var c=b.getValue();
}else if(this.__p(b)){var c=b.getSelection();
}else{throw new Error("Item "+b+" not supported for reseting.");
}this.__m.push({item:b,init:c});
},reset:function(){for(var i=0;i<this.__m.length;i++){var d=this.__m[i];
this.__n(d.item,d.init);
}},resetItem:function(e){var f;

for(var i=0;i<this.__m.length;i++){var g=this.__m[i];

if(g.item===e){f=g.init;
break;
}}if(f===undefined){throw new Error("The given item has not been added.");
}this.__n(e,f);
},__n:function(h,j){if(this._supportsValue(h)){h.setValue(j);
}else if(this.__p(h)){h.setSelection(j);
}},redefine:function(){for(var i=0;i<this.__m.length;i++){var k=this.__m[i].item;
this.__m[i].init=this.__o(k);
}},redefineItem:function(l){var m;

for(var i=0;i<this.__m.length;i++){if(this.__m[i].item===l){m=this.__m[i];
break;
}}if(m===undefined){throw new Error("The given item has not been added.");
}m.init=this.__o(m.item);
},__o:function(n){if(this._supportsValue(n)){return n.getValue();
}else if(this.__p(n)){return n.getSelection();
}},__p:function(o){var p=o.constructor;
return qx.Class.hasInterface(p,qx.ui.core.ISingleSelection);
},_supportsValue:function(q){var r=q.constructor;
return (qx.Class.hasInterface(r,qx.ui.form.IBooleanForm)||qx.Class.hasInterface(r,qx.ui.form.IColorForm)||qx.Class.hasInterface(r,qx.ui.form.IDateForm)||qx.Class.hasInterface(r,qx.ui.form.INumberForm)||qx.Class.hasInterface(r,qx.ui.form.IStringForm));
}},destruct:function(){this.__m=null;
}});
})();
(function(){var s="",r="URL",q="__q",p="Add",o="keypress",n="Title",m="Add a feed",l="feedreader.view.AddFeedWindow",k="__s",j="user",c="__r",i="icon/16/actions/document-new.png",g="icon/16/actions/dialog-apply.png",b="right",a="this.__form",f="Feed Information",d="execute",h="Enter";
qx.Class.define(l,{extend:qx.ui.window.Window,construct:function(t){qx.ui.window.Window.call(this,this.tr(m),i);
this.__q=t;
this.set({modal:true,showMinimize:false,showMaximize:false,allowMaximize:false});
this._addContent();
},members:{__r:null,__s:null,__q:null,__t:null,_addContent:function(){this.setLayout(new qx.ui.layout.VBox(10));
this.__t=new qx.ui.form.Form();
this.__t.addGroupHeader(this.tr(f));
this.__s=new qx.ui.form.TextField().set({required:true,width:250});
this.__t.add(this.__s,this.tr(n));
this.__r=new qx.ui.form.TextField().set({required:true});
this.__t.add(this.__r,this.tr(r),qx.util.Validate.checkUrl);
var u=new qx.ui.form.Button(this.tr(p),g);
u.set({alignX:b,allowGrowX:false});
u.addListener(d,this._addFeed,this);
this.__t.addButton(u);
this.addListener(o,function(e){if(e.getTarget() instanceof qx.ui.form.TextField&&e.getKeyIdentifier()===h){this._addFeed();
}});
this.add(new qx.ui.form.renderer.SinglePlaceholder(this.__t));
},_addFeed:function(e){if(this.__t.validate()){var w=this.__s.getValue();
var v=this.__r.getValue();
this.__q.addFeed(w,v,j);
this.__s.setValue(s);
this.__r.setValue(s);
this.close();
}}},destruct:function(){this.__u=null;
this._disposeObjects(q,k,c,a);
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
this.__v=[];
this.__w={};
this.setRequiredFieldMessage(qx.locale.Manager.tr(b));
},events:{"changeValid":a,"complete":f},properties:{validator:{check:d,init:null,nullable:true},invalidMessage:{check:h,init:j},requiredFieldMessage:{check:h,init:j},context:{nullable:true}},members:{__v:null,__x:null,__w:null,__y:null,add:function(k,l,m){if(!this.__D(k)){throw new Error("Added widget not supported.");
}if(this.__E(k)){if(l!=null){throw new Error("Widgets supporting selection can only be validated "+"in the form validator");
}}var n={item:k,validator:l,valid:null,context:m};
this.__v.push(n);
},validate:function(){var s=true;
this.__y=true;
var p=[];
for(var i=0;i<this.__v.length;i++){var q=this.__v[i].item;
var t=this.__v[i].validator;
p.push(q);
if(t==null){var o=this.__z(q);
s=s&&o;
this.__y=o&&this.__y;
continue;
}var o=this.__A(this.__v[i],q.getValue());
s=o&&s;

if(o!=null){this.__y=o&&this.__y;
}}var r=this.__B(p);

if(qx.lang.Type.isBoolean(r)){this.__y=r&&this.__y;
}s=r&&s;
this.__F(s);

if(qx.lang.Object.isEmpty(this.__w)){this.fireEvent(g);
}return s;
},__z:function(u){if(u.getRequired()){if(this.__E(u)){var v=!!u.getSelection()[0];
}else{var v=!!u.getValue();
}u.setValid(v);
var x=u.getRequiredInvalidMessage();
var w=x?x:this.getRequiredFieldMessage();
u.setInvalidMessage(w);
return v;
}return true;
},__A:function(y,z){var E=y.item;
var D=y.context;
var C=y.validator;
if(this.__C(C)){this.__w[E.toHashCode()]=null;
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
},__B:function(F){var H=this.getValidator();
var I=this.getContext()||this;

if(H==null){return true;
}this.setInvalidMessage("");

if(this.__C(H)){this.__w[this.toHashCode()]=null;
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
},__C:function(K){var L=false;

if(!qx.lang.Type.isFunction(K)){L=qx.Class.isSubClassOf(K.constructor,qx.ui.form.validation.AsyncValidator);
}return L;
},__D:function(M){var N=M.constructor;
return qx.Class.hasInterface(N,qx.ui.form.IForm);
},__E:function(O){var P=O.constructor;
return qx.Class.hasInterface(P,qx.ui.core.ISingleSelection);
},__F:function(Q){var R=this.__x;
this.__x=Q;
if(R!=Q){this.fireDataEvent("changeValid",Q,R);
}},getValid:function(){return this.__x;
},isValid:function(){return this.getValid();
},getInvalidMessages:function(){var S=[];
for(var i=0;i<this.__v.length;i++){var T=this.__v[i].item;

if(!T.getValid()){S.push(T.getInvalidMessage());
}}if(this.getInvalidMessage()!=j){S.push(this.getInvalidMessage());
}return S;
},reset:function(){for(var i=0;i<this.__v.length;i++){var U=this.__v[i];
U.item.setValid(true);
}this.__x=null;
},setItemValid:function(V,W){this.__w[V.toHashCode()]=W;
V.setValid(W);
this.__G();
},setFormValid:function(X){this.__w[this.toHashCode()]=X;
this.__G();
},__G:function(){var ba=this.__y;
for(var bb in this.__w){var Y=this.__w[bb];
ba=Y&&ba;
if(Y==null){return;
}}this.__F(ba);
this.__w={};
this.fireEvent("complete");
}},destruct:function(){this.__v=null;
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
this.__P=b;
},members:{__P:null,__Q:null,__R:null,__S:null,validate:function(c,d,e,f){this.__S=false;
this.__Q=c;
this.__R=e;
this.__P.call(f||this,this,d);
},validateForm:function(g,h,i){this.__S=true;
this.__R=h;
this.__P.call(i,g,this);
},setValid:function(j,k){if(this.__S){if(k!==undefined){this.__R.setInvalidMessage(k);
}this.__R.setFormValid(j);
}else{if(k!==undefined){this.__Q.setInvalidMessage(k);
}this.__R.setItemValid(this.__Q,j);
}}},destruct:function(){this.__R=this.__Q=null;
}});
})();
(function(){var b="qx.ui.form.Form",a="";
qx.Class.define(b,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__T=[];
this._buttons=[];
this._buttonOptions=[];
this._validationManager=new qx.ui.form.validation.Manager();
this._resetter=new qx.ui.form.Resetter();
},members:{__T:null,_validationManager:null,_groupCounter:0,_buttons:null,_buttonOptions:null,_resetter:null,add:function(c,d,e,name,f,g){if(this.__U()){this.__T.push({title:null,items:[],labels:[],names:[],options:[],headerOptions:{}});
}this.__T[this._groupCounter].items.push(c);
this.__T[this._groupCounter].labels.push(d);
this.__T[this._groupCounter].options.push(g);
if(name==null){name=d.replace(/\s+|&|-|\+|\*|\/|\||!|\.|,|:|\?|;|~|%|\{|\}|\(|\)|\[|\]|<|>|=|\^|@|\\/g,a);
}this.__T[this._groupCounter].names.push(name);
this._validationManager.add(c,e,f);
this._resetter.add(c);
},addGroupHeader:function(h,k){if(!this.__U()){this._groupCounter++;
}this.__T.push({title:h,items:[],labels:[],names:[],options:[],headerOptions:k});
},addButton:function(l,m){this._buttons.push(l);
this._buttonOptions.push(m||null);
},__U:function(){return this.__T.length===0;
},reset:function(){this._resetter.reset();
this._validationManager.reset();
},redefineResetter:function(){this._resetter.redefine();
},validate:function(){return this._validationManager.validate();
},getValidationManager:function(){return this._validationManager;
},getGroups:function(){return this.__T;
},getButtons:function(){return this._buttons;
},getButtonOptions:function(){return this._buttonOptions;
},getItems:function(){var n={};
for(var i=0;i<this.__T.length;i++){var o=this.__T[i];
for(var j=0;j<o.names.length;j++){var name=o.names[j];
n[name]=o.items[j];
}}return n;
}},destruct:function(){this.__T=this._buttons=this._buttonOptions=null;
}});
})();

});