qx.$$packageData['60b4cd0af92e']={"locales":{},"resources":{"feedreader/images/combined/icons16.png":[16,96,"png","feedreader"],"qx/icon/Tango/16/actions/dialog-apply.png":[16,16,"png","qx","feedreader/images/combined/icons16.png",0,0],"qx/icon/Tango/16/actions/document-new.png":[16,16,"png","qx","feedreader/images/combined/icons16.png",0,-48]},"translations":{}};

qx.Part.$$notifyLoad("60b4cd0af92e", function() {
(function(){var k="showingPlaceholder",j="",i="none",h="qx.dynlocale",g="Boolean",f="qx.client",d="color",c="qx.event.type.Data",b="readonly",a="placeholder",bb="input",ba="focusin",Y="visibility",X="focusout",W="changeLocale",V="hidden",U="on",T="absolute",S="readOnly",R="text",r="_applyTextAlign",s="px",p="RegExp",q=")",n="syncAppearance",o="changeValue",l="A",m="change",v="textAlign",w="focused",E="center",C="visible",J="disabled",G="url(",N="off",L="String",y="resize",Q="qx.ui.form.AbstractField",P="transparent",O="spellcheck",x="false",A="right",B="PositiveInteger",D="mshtml",F="abstract",H="block",K="webkit",M="_applyReadOnly",t="_applyPlaceholder",u="left",z="qx/static/blank.gif",I="changeReadOnly";
qx.Class.define(Q,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm,qx.ui.form.IForm],include:[qx.ui.form.MForm],type:F,construct:function(bc){qx.ui.core.Widget.call(this);
this.__me=!qx.bom.client.Feature.PLACEHOLDER;

if(bc!=null){this.setValue(bc);
}this.getContentElement().addListener(m,this._onChangeContent,this);
if(this.__me){this.addListener(n,this._syncPlaceholder,this);
}if(qx.core.Variant.isSet(h,U)){qx.locale.Manager.getInstance().addListener(W,this._onChangeLocale,this);
}},events:{"input":c,"changeValue":c},properties:{textAlign:{check:[u,E,A],nullable:true,themeable:true,apply:r},readOnly:{check:g,apply:M,event:I,init:false},selectable:{refine:true,init:true},focusable:{refine:true,init:true},maxLength:{check:B,init:Infinity},liveUpdate:{check:g,init:false},placeholder:{check:L,nullable:true,apply:t},filter:{check:p,nullable:true,init:null}},members:{__mf:true,__mg:null,__mh:null,__mi:null,__me:true,getFocusElement:function(){var bd=this.getContentElement();

if(bd){return bd;
}},_createInputElement:function(){return new qx.html.Input(R);
},renderLayout:function(be,top,bf,bg){var bh=this._updateInsets;
var bl=qx.ui.core.Widget.prototype.renderLayout.call(this,be,top,bf,bg);
if(!bl){return;
}var bj=bl.size||bh;
var bm=s;

if(bj||bl.local||bl.margin){var bi=this.getInsets();
var innerWidth=bf-bi.left-bi.right;
var innerHeight=bg-bi.top-bi.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}var bk=this.getContentElement();
if(bh&&this.__me){this.__ml().setStyles({"left":bi.left+bm,"top":bi.top+bm});
}
if(bj){if(this.__me){this.__ml().setStyles({"width":innerWidth+bm,"height":innerHeight+bm});
}bk.setStyles({"width":innerWidth+bm,"height":innerHeight+bm});
this._renderContentElement(innerHeight,bk);
}},_renderContentElement:function(innerHeight,bn){},_createContentElement:function(){var bo=this._createInputElement();
bo.setStyles({"border":i,"padding":0,"margin":0,"display":H,"background":P,"outline":i,"appearance":i,"position":T,"autoComplete":N});
bo.setSelectable(this.getSelectable());
bo.setEnabled(this.getEnabled());
bo.addListener(bb,this._onHtmlInput,this);
bo.setAttribute(O,x);
if(qx.core.Variant.isSet(f,K)){bo.setStyle(y,i);
}if(qx.core.Variant.isSet(f,D)){bo.setStyles({backgroundImage:G+qx.util.ResourceManager.getInstance().toUri(z)+q});
}return bo;
},_applyEnabled:function(bp,bq){qx.ui.core.Widget.prototype._applyEnabled.call(this,bp,bq);
this.getContentElement().setEnabled(bp);

if(this.__me){if(bp){this._showPlaceholder();
}else{this._removePlaceholder();
}}else{var br=this.getContentElement();
br.setAttribute(a,bp?this.getPlaceholder():j);
}},__mj:{width:16,height:16},_getContentHint:function(){return {width:this.__mj.width*10,height:this.__mj.height||16};
},_applyFont:function(bs,bt){var bu;

if(bs){var bv=qx.theme.manager.Font.getInstance().resolve(bs);
bu=bv.getStyles();
}else{bu=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(bu);
if(this.__me){this.__ml().setStyles(bu);
}if(bs){this.__mj=qx.bom.Label.getTextSize(l,bu);
}else{delete this.__mj;
}qx.ui.core.queue.Layout.add(this);
},_applyTextColor:function(bw,bx){if(bw){this.getContentElement().setStyle(d,qx.theme.manager.Color.getInstance().resolve(bw));
}else{this.getContentElement().removeStyle(d);
}},tabFocus:function(){qx.ui.core.Widget.prototype.tabFocus.call(this);
this.selectAllText();
},_getTextSize:function(){return this.__mj;
},_onHtmlInput:function(e){var bB=e.getData();
var bA=true;
this.__mf=false;
if(this.getFilter()!=null){var bC=j;
var by=bB.search(this.getFilter());
var bz=bB;

while(by>=0){bC=bC+(bz.charAt(by));
bz=bz.substring(by+1,bz.length);
by=bz.search(this.getFilter());
}
if(bC!=bB){bA=false;
bB=bC;
this.getContentElement().setValue(bB);
}}if(bB.length>this.getMaxLength()){var bA=false;
this.getContentElement().setValue(bB.substr(0,this.getMaxLength()));
}if(bA){this.fireDataEvent(bb,bB,this.__mi);
this.__mi=bB;
if(this.getLiveUpdate()){this.__mk(bB);
}}},__mk:function(bD){var bE=this.__mh;
this.__mh=bD;

if(bE!=bD){this.fireNonBubblingEvent(o,qx.event.type.Data,[bD,bE]);
}},setValue:function(bF){if(bF===null){if(this.__mf){return bF;
}bF=j;
this.__mf=true;
}else{this.__mf=false;
if(this.__me){this._removePlaceholder();
}}
if(qx.lang.Type.isString(bF)){var bH=this.getContentElement();

if(bF.length>this.getMaxLength()){bF=bF.substr(0,this.getMaxLength());
}
if(bH.getValue()!=bF){var bI=bH.getValue();
bH.setValue(bF);
var bG=this.__mf?null:bF;
this.__mh=bI;
this.__mk(bG);
}if(this.__me){this._showPlaceholder();
}return bF;
}throw new Error("Invalid value type: "+bF);
},getValue:function(){var bJ=this.getContentElement().getValue();
return this.__mf?null:bJ;
},resetValue:function(){this.setValue(null);
},_onChangeContent:function(e){this.__mf=e.getData()===null;
this.__mk(e.getData());
},getTextSelection:function(){return this.getContentElement().getTextSelection();
},getTextSelectionLength:function(){return this.getContentElement().getTextSelectionLength();
},getTextSelectionStart:function(){return this.getContentElement().getTextSelectionStart();
},getTextSelectionEnd:function(){return this.getContentElement().getTextSelectionEnd();
},setTextSelection:function(bK,bL){this.getContentElement().setTextSelection(bK,bL);
},clearTextSelection:function(){this.getContentElement().clearTextSelection();
},selectAllText:function(){this.setTextSelection(0);
},_showPlaceholder:function(){var bN=this.getValue()||j;
var bM=this.getPlaceholder();

if(bM!=null&&bN==j&&!this.hasState(w)&&!this.hasState(J)){if(this.hasState(k)){this._syncPlaceholder();
}else{this.addState(k);
}}},_removePlaceholder:function(){if(this.hasState(k)){this.__ml().setStyle(Y,V);
this.removeState(k);
}},_syncPlaceholder:function(){if(this.hasState(k)){this.__ml().setStyle(Y,C);
}},__ml:function(){if(this.__mg==null){this.__mg=new qx.html.Label();
this.__mg.setStyles({"visibility":V,"zIndex":6,"position":T});
this.getContainerElement().add(this.__mg);
}return this.__mg;
},_onChangeLocale:qx.core.Variant.select(h,{"on":function(e){var content=this.getPlaceholder();

if(content&&content.translate){this.setPlaceholder(content.translate());
}},"off":null}),_applyPlaceholder:function(bO,bP){if(this.__me){this.__ml().setValue(bO);

if(bO!=null){this.addListener(ba,this._removePlaceholder,this);
this.addListener(X,this._showPlaceholder,this);
this._showPlaceholder();
}else{this.removeListener(ba,this._removePlaceholder,this);
this.removeListener(X,this._showPlaceholder,this);
this._removePlaceholder();
}}else{if(this.getEnabled()){this.getContentElement().setAttribute(a,bO);
}}},_applyTextAlign:function(bQ,bR){this.getContentElement().setStyle(v,bQ);
},_applyReadOnly:function(bS,bT){var bU=this.getContentElement();
bU.setAttribute(S,bS);

if(bS){this.addState(b);
this.setFocusable(false);
}else{this.removeState(b);
this.setFocusable(true);
}}},destruct:function(){this.__mg=null;

if(qx.core.Variant.isSet(h,U)){qx.locale.Manager.getInstance().removeListener(W,this._onChangeLocale,this);
}}});
})();
(function(){var b="qx.ui.form.TextField",a="textfield";
qx.Class.define(b,{extend:qx.ui.form.AbstractField,properties:{appearance:{refine:true,init:a},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{_renderContentElement:function(innerHeight,c){}}});
})();
(function(){var k="wrap",j="value",i="textarea",h="none",g="qx.client",f="",e="input",d="qx.html.Input",c="select",b="disabled",a="read-only";
qx.Class.define(d,{extend:qx.html.Element,construct:function(l,m,n){if(l===c||l===i){var o=l;
}else{o=e;
}qx.html.Element.call(this,o,m,n);
this.__mm=l;
},members:{__mm:null,__mn:null,__mo:null,_createDomElement:function(){return qx.bom.Input.create(this.__mm);
},_applyProperty:function(name,p){qx.html.Element.prototype._applyProperty.call(this,name,p);
var q=this.getDomElement();

if(name===j){qx.bom.Input.setValue(q,p);
}else if(name===k){qx.bom.Input.setWrap(q,p);
}},setEnabled:qx.core.Variant.select(g,{"webkit":function(r){this.__mo=r;

if(!r){this.setStyles({"userModify":a,"userSelect":h});
}else{this.setStyles({"userModify":null,"userSelect":this.__mn?null:h});
}},"default":function(s){this.setAttribute(b,s===false);
}}),setSelectable:qx.core.Variant.select(g,{"webkit":function(t){this.__mn=t;
qx.html.Element.prototype.setSelectable.call(this,this.__mo&&t);
},"default":function(u){qx.html.Element.prototype.setSelectable.call(this,u);
}}),setValue:function(v){var w=this.getDomElement();

if(w){if(w.value!=v){qx.bom.Input.setValue(w,v);
}}else{this._setProperty(j,v);
}return this;
},getValue:function(){var x=this.getDomElement();

if(x){return qx.bom.Input.getValue(x);
}return this._getProperty(j)||f;
},setWrap:function(y){if(this.__mm===i){this._setProperty(k,y);
}else{throw new Error("Text wrapping is only support by textareas!");
}return this;
},getWrap:function(){if(this.__mm===i){return this._getProperty(k);
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
}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{input:1,change:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{__mp:false,__mq:null,__mr:null,canHandleEvent:function(x,y){var z=x.tagName.toLowerCase();

if(y===v&&(z===v||z===p)){return true;
}
if(y===w&&(z===v||z===p||z===j)){return true;
}return false;
},registerEvent:qx.core.Variant.select(u,{"mshtml":function(A,B,C){if(!A.__ms){var D=A.tagName.toLowerCase();
var E=A.type;

if(E===t||E===s||D===p||E===r||E===q){qx.bom.Event.addNativeListener(A,d,this._onPropertyWrapper);
}
if(E!==r&&E!==q){qx.bom.Event.addNativeListener(A,w,this._onChangeValueWrapper);
}
if(E===t||E===s){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,A);
qx.bom.Event.addNativeListener(A,n,this._onKeyPressWrapped);
}A.__ms=true;
}},"default":function(F,G,H){if(G===v){this.__mt(F);
}else if(G===w){if(F.type===q||F.type===r){qx.bom.Event.addNativeListener(F,w,this._onChangeCheckedWrapper);
}else{qx.bom.Event.addNativeListener(F,w,this._onChangeValueWrapper);
}if(qx.core.Variant.isSet(u,m)){if(F.type===t||F.type===s){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,F);
qx.bom.Event.addNativeListener(F,n,this._onKeyPressWrapped);
}}}}}),__mt:qx.core.Variant.select(u,{"mshtml":null,"webkit":function(I){var J=I.tagName.toLowerCase();
if(qx.bom.client.Engine.VERSION<532&&J==p){qx.bom.Event.addNativeListener(I,n,this._onInputWrapper);
}qx.bom.Event.addNativeListener(I,v,this._onInputWrapper);
},"opera":function(K){qx.bom.Event.addNativeListener(K,c,this._onKeyUpWrapper);
qx.bom.Event.addNativeListener(K,h,this._onKeyDownWrapper);
qx.bom.Event.addNativeListener(K,k,this._onBlurWrapper);
qx.bom.Event.addNativeListener(K,v,this._onInputWrapper);
},"default":function(L){qx.bom.Event.addNativeListener(L,v,this._onInputWrapper);
}}),unregisterEvent:qx.core.Variant.select(u,{"mshtml":function(M,N){if(M.__ms){var O=M.tagName.toLowerCase();
var P=M.type;

if(P===t||P===s||O===p||P===r||P===q){qx.bom.Event.removeNativeListener(M,d,this._onPropertyWrapper);
}
if(P!==r&&P!==q){qx.bom.Event.removeNativeListener(M,w,this._onChangeValueWrapper);
}
if(P===t||P===s){qx.bom.Event.removeNativeListener(M,n,this._onKeyPressWrapped);
}
try{delete M.__ms;
}catch(Q){M.__ms=null;
}}},"default":function(R,S){if(S===v){this.__mt(R);
}else if(S===w){if(R.type===q||R.type===r){qx.bom.Event.removeNativeListener(R,w,this._onChangeCheckedWrapper);
}else{qx.bom.Event.removeNativeListener(R,w,this._onChangeValueWrapper);
}}
if(qx.core.Variant.isSet(u,m)){if(R.type===t||R.type===s){qx.bom.Event.removeNativeListener(R,n,this._onKeyPressWrapped);
}}}}),__mu:qx.core.Variant.select(u,{"mshtml":null,"webkit":function(T){var U=T.tagName.toLowerCase();
if(qx.bom.client.Engine.VERSION<532&&U==p){qx.bom.Event.removeNativeListener(T,n,this._onInputWrapper);
}qx.bom.Event.removeNativeListener(T,v,this._onInputWrapper);
},"opera":function(V){qx.bom.Event.removeNativeListener(V,c,this._onKeyUpWrapper);
qx.bom.Event.removeNativeListener(V,h,this._onKeyDownWrapper);
qx.bom.Event.removeNativeListener(V,k,this._onBlurWrapper);
qx.bom.Event.removeNativeListener(V,v,this._onInputWrapper);
},"default":function(W){qx.bom.Event.removeNativeListener(W,v,this._onInputWrapper);
}}),_onKeyPress:qx.core.Variant.select(u,{"mshtml|opera":function(e,X){if(e.keyCode===13){if(X.value!==this.__mr){this.__mr=X.value;
qx.event.Registration.fireEvent(X,w,qx.event.type.Data,[X.value]);
}}},"default":null}),_onKeyDown:qx.core.Variant.select(u,{"opera":function(e){if(e.keyCode===13){this.__mp=true;
}},"default":null}),_onKeyUp:qx.core.Variant.select(u,{"opera":function(e){if(e.keyCode===13){this.__mp=false;
}},"default":null}),_onBlur:qx.core.Variant.select(u,{"opera":function(e){if(this.__mq){window.clearTimeout(this.__mq);
}},"default":null}),_onInput:qx.event.GlobalError.observeMethod(function(e){var Y=qx.bom.Event.getTarget(e);
if(!this.__mp){if(qx.core.Variant.isSet(u,m)){this.__mq=window.setTimeout(function(){qx.event.Registration.fireEvent(Y,v,qx.event.type.Data,[Y.value]);
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
qx.Class.define(e,{statics:{__mv:{text:1,textarea:1,select:1,checkbox:1,radio:1,password:1,hidden:1,submit:1,image:1,file:1,search:1,reset:1,button:1},create:function(w,x,y){{};
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
this.__qB=[];
},members:{__qB:null,add:function(b){if(this._supportsValue(b)){var c=b.getValue();
}else if(this.__qE(b)){var c=b.getSelection();
}else{throw new Error("Item "+b+" not supported for reseting.");
}this.__qB.push({item:b,init:c});
},reset:function(){for(var i=0;i<this.__qB.length;i++){var d=this.__qB[i];
this.__qC(d.item,d.init);
}},resetItem:function(e){var f;

for(var i=0;i<this.__qB.length;i++){var g=this.__qB[i];

if(g.item===e){f=g.init;
break;
}}if(f===undefined){throw new Error("The given item has not been added.");
}this.__qC(e,f);
},__qC:function(h,j){if(this._supportsValue(h)){h.setValue(j);
}else if(this.__qE(h)){h.setSelection(j);
}},redefine:function(){for(var i=0;i<this.__qB.length;i++){var k=this.__qB[i].item;
this.__qB[i].init=this.__qD(k);
}},redefineItem:function(l){var m;

for(var i=0;i<this.__qB.length;i++){if(this.__qB[i].item===l){m=this.__qB[i];
break;
}}if(m===undefined){throw new Error("The given item has not been added.");
}m.init=this.__qD(m.item);
},__qD:function(n){if(this._supportsValue(n)){return n.getValue();
}else if(this.__qE(n)){return n.getSelection();
}},__qE:function(o){var p=o.constructor;
return qx.Class.hasInterface(p,qx.ui.core.ISingleSelection);
},_supportsValue:function(q){var r=q.constructor;
return (qx.Class.hasInterface(r,qx.ui.form.IBooleanForm)||qx.Class.hasInterface(r,qx.ui.form.IColorForm)||qx.Class.hasInterface(r,qx.ui.form.IDateForm)||qx.Class.hasInterface(r,qx.ui.form.INumberForm)||qx.Class.hasInterface(r,qx.ui.form.IStringForm));
}},destruct:function(){this.__qB=null;
}});
})();
(function(){var s="",r="URL",q="Add",p="keypress",o="Title",n="__qF",m="Add a feed",l="feedreader.view.AddFeedWindow",k="user",j="this.__form",c="icon/16/actions/document-new.png",i="icon/16/actions/dialog-apply.png",g="__qH",b="right",a="__qG",f="Feed Information",d="execute",h="Enter";
qx.Class.define(l,{extend:qx.ui.window.Window,construct:function(t){qx.ui.window.Window.call(this,this.tr(m),c);
this.__qF=t;
this.set({modal:true,showMinimize:false,showMaximize:false,allowMaximize:false});
this._addContent();
},members:{__qG:null,__qH:null,__qF:null,__qI:null,_addContent:function(){this.setLayout(new qx.ui.layout.VBox(10));
this.__qI=new qx.ui.form.Form();
this.__qI.addGroupHeader(this.tr(f));
this.__qH=new qx.ui.form.TextField().set({required:true,width:250});
this.__qI.add(this.__qH,this.tr(o));
this.__qG=new qx.ui.form.TextField().set({required:true});
this.__qI.add(this.__qG,this.tr(r),qx.util.Validate.checkUrl);
var u=new qx.ui.form.Button(this.tr(q),i);
u.set({alignX:b,allowGrowX:false});
u.addListener(d,this._addFeed,this);
this.__qI.addButton(u);
this.addListener(p,function(e){if(e.getTarget() instanceof qx.ui.form.TextField&&e.getKeyIdentifier()===h){this._addFeed();
}});
this.add(new qx.ui.form.renderer.SinglePlaceholder(this.__qI));
},_addFeed:function(e){if(this.__qI.validate()){var w=this.__qH.getValue();
var v=this.__qG.getValue();
this.__qF.addFeed(w,v,k);
this.__qH.setValue(s);
this.__qG.setValue(s);
this.close();
}}},destruct:function(){this.__qJ=null;
this._disposeObjects(n,g,a,j);
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
(function(){var k="",j="complete",h="String",g="changeValid",f="qx.event.type.Event",d="value instanceof Function || qx.Class.isSubClassOf(value.constructor, qx.ui.form.validation.AsyncValidator)",c="qx.ui.form.validation.Manager",b="This field is required",a="qx.event.type.Data";
qx.Class.define(c,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__qK=[];
this.__qL={};
this.setRequiredFieldMessage(qx.locale.Manager.tr(b));
},events:{"changeValid":a,"complete":f},properties:{validator:{check:d,init:null,nullable:true},invalidMessage:{check:h,init:k},requiredFieldMessage:{check:h,init:k},context:{nullable:true}},members:{__qK:null,__qM:null,__qL:null,__qN:null,add:function(l,m,n){if(!this.__qS(l)){throw new Error("Added widget not supported.");
}if(this.__qT(l)){if(m!=null){throw new Error("Widgets supporting selection can only be validated "+"in the form validator");
}}var o={item:l,validator:m,valid:null,context:n};
this.__qK.push(o);
},validate:function(){var t=true;
this.__qN=true;
var q=[];
for(var i=0;i<this.__qK.length;i++){var r=this.__qK[i].item;
var u=this.__qK[i].validator;
q.push(r);
if(u==null){var p=this.__qO(r);
t=t&&p;
this.__qN=p&&this.__qN;
continue;
}var p=this.__qP(this.__qK[i],r.getValue());
t=p&&t;

if(p!=null){this.__qN=p&&this.__qN;
}}var s=this.__qQ(q);

if(qx.lang.Type.isBoolean(s)){this.__qN=s&&this.__qN;
}t=s&&t;
this.__qU(t);

if(qx.lang.Object.isEmpty(this.__qL)){this.fireEvent(j);
}return t;
},__qO:function(v){if(v.getRequired()){if(this.__qT(v)){var w=!!v.getSelection()[0];
}else{var w=!!v.getValue();
}v.setValid(w);
var y=v.getRequiredInvalidMessage();
var x=y?y:this.getRequiredFieldMessage();
v.setInvalidMessage(x);
return w;
}return true;
},__qP:function(z,A){var F=z.item;
var E=z.context;
var D=z.validator;
if(this.__qR(D)){this.__qL[F.toHashCode()]=null;
D.validate(F,F.getValue(),this,E);
return null;
}var C=null;

try{var C=D.call(E||this,A,F);

if(C===undefined){C=true;
}}catch(e){if(e instanceof qx.core.ValidationError){C=false;

if(e.message&&e.message!=qx.type.BaseError.DEFAULTMESSAGE){var B=e.message;
}else{var B=e.getComment();
}F.setInvalidMessage(B);
}else{throw e;
}}F.setValid(C);
z.valid=C;
return C;
},__qQ:function(G){var I=this.getValidator();
var J=this.getContext()||this;

if(I==null){return true;
}this.setInvalidMessage(k);

if(this.__qR(I)){this.__qL[this.toHashCode()]=null;
I.validateForm(G,this,J);
return null;
}
try{var K=I.call(J,G,this);

if(K===undefined){K=true;
}}catch(e){if(e instanceof qx.core.ValidationError){K=false;

if(e.message&&e.message!=qx.type.BaseError.DEFAULTMESSAGE){var H=e.message;
}else{var H=e.getComment();
}this.setInvalidMessage(H);
}else{throw e;
}}return K;
},__qR:function(L){var M=false;

if(!qx.lang.Type.isFunction(L)){M=qx.Class.isSubClassOf(L.constructor,qx.ui.form.validation.AsyncValidator);
}return M;
},__qS:function(N){var O=N.constructor;
return qx.Class.hasInterface(O,qx.ui.form.IForm);
},__qT:function(P){var Q=P.constructor;
return qx.Class.hasInterface(Q,qx.ui.core.ISingleSelection);
},__qU:function(R){var S=this.__qM;
this.__qM=R;
if(S!=R){this.fireDataEvent(g,R,S);
}},getValid:function(){return this.__qM;
},isValid:function(){return this.getValid();
},getInvalidMessages:function(){var T=[];
for(var i=0;i<this.__qK.length;i++){var U=this.__qK[i].item;

if(!U.getValid()){T.push(U.getInvalidMessage());
}}if(this.getInvalidMessage()!=k){T.push(this.getInvalidMessage());
}return T;
},reset:function(){for(var i=0;i<this.__qK.length;i++){var V=this.__qK[i];
V.item.setValid(true);
}this.__qM=null;
},setItemValid:function(W,X){this.__qL[W.toHashCode()]=X;
W.setValid(X);
this.__qV();
},setFormValid:function(Y){this.__qL[this.toHashCode()]=Y;
this.__qV();
},__qV:function(){var bb=this.__qN;
for(var bc in this.__qL){var ba=this.__qL[bc];
bb=ba&&bb;
if(ba==null){return;
}}this.__qU(bb);
this.__qL={};
this.fireEvent(j);
}},destruct:function(){this.__qK=null;
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
this.__qW=b;
},members:{__qW:null,__qX:null,__qY:null,__ra:null,validate:function(c,d,e,f){this.__ra=false;
this.__qX=c;
this.__qY=e;
this.__qW.call(f||this,this,d);
},validateForm:function(g,h,i){this.__ra=true;
this.__qY=h;
this.__qW.call(i,g,this);
},setValid:function(j,k){if(this.__ra){if(k!==undefined){this.__qY.setInvalidMessage(k);
}this.__qY.setFormValid(j);
}else{if(k!==undefined){this.__qX.setInvalidMessage(k);
}this.__qY.setItemValid(this.__qX,j);
}}},destruct:function(){this.__qY=this.__qX=null;
}});
})();
(function(){var b="qx.ui.form.Form",a="";
qx.Class.define(b,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__rb=[];
this._buttons=[];
this._buttonOptions=[];
this._validationManager=new qx.ui.form.validation.Manager();
this._resetter=new qx.ui.form.Resetter();
},members:{__rb:null,_validationManager:null,_groupCounter:0,_buttons:null,_buttonOptions:null,_resetter:null,add:function(c,d,e,name,f,g){if(this.__rc()){this.__rb.push({title:null,items:[],labels:[],names:[],options:[],headerOptions:{}});
}this.__rb[this._groupCounter].items.push(c);
this.__rb[this._groupCounter].labels.push(d);
this.__rb[this._groupCounter].options.push(g);
if(name==null){name=d.replace(/\s+|&|-|\+|\*|\/|\||!|\.|,|:|\?|;|~|%|\{|\}|\(|\)|\[|\]|<|>|=|\^|@|\\/g,a);
}this.__rb[this._groupCounter].names.push(name);
this._validationManager.add(c,e,f);
this._resetter.add(c);
},addGroupHeader:function(h,k){if(!this.__rc()){this._groupCounter++;
}this.__rb.push({title:h,items:[],labels:[],names:[],options:[],headerOptions:k});
},addButton:function(l,m){this._buttons.push(l);
this._buttonOptions.push(m||null);
},__rc:function(){return this.__rb.length===0;
},reset:function(){this._resetter.reset();
this._validationManager.reset();
},redefineResetter:function(){this._resetter.redefine();
},validate:function(){return this._validationManager.validate();
},getValidationManager:function(){return this._validationManager;
},getGroups:function(){return this.__rb;
},getButtons:function(){return this._buttons;
},getButtonOptions:function(){return this._buttonOptions;
},getItems:function(){var n={};
for(var i=0;i<this.__rb.length;i++){var o=this.__rb[i];
for(var j=0;j<o.names.length;j++){var name=o.names[j];
n[name]=o.items[j];
}}return n;
}},destruct:function(){this.__rb=this._buttons=this._buttonOptions=null;
}});
})();

});