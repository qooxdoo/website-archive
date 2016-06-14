qx.$$packageData['dbadcec90a0f']={"locales":{},"resources":{"feedreader/images/combined/icons16.png":[16,96,"png","feedreader"],"qx/icon/Tango/16/actions/dialog-apply.png":[16,16,"png","qx","feedreader/images/combined/icons16.png",0,-80],"qx/icon/Tango/16/actions/document-new.png":[16,16,"png","qx","feedreader/images/combined/icons16.png",0,-16]},"translations":{}};

qx.Part.$$notifyLoad("dbadcec90a0f", function() {
(function(){var Y="showingPlaceholder",X="",W="none",V="qx.dynlocale",U="Boolean",T="qx.client",S="color",R="qx.event.type.Data",Q="readonly",P="input",bL="focusin",bK="visibility",bJ="focusout",bI="changeLocale",bH="on",bG="readOnly",bF="text",bE="_applyTextAlign",bD="px",bC="RegExp",bg=")",bh="syncAppearance",be="change",bf="textAlign",bc="focused",bd="center",ba="visible",bb="disabled",bi="url(",bj="off",bq="String",bo="resize",bu="qx.ui.form.AbstractField",bs="transparent",by="spellcheck",bw="false",bl="right",bB="PositiveInteger",bA="mshtml",bz="abstract",bk="block",bm="webkit",bn="_applyReadOnly",bp="_applyPlaceholder",br="hidden",bt="left",bv="qx/static/blank.gif",bx="absolute";
qx.Class.define(bu,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm,qx.ui.form.IForm],include:[qx.ui.form.MForm],type:bz,construct:function(E){qx.ui.core.Widget.call(this);

if(E!=null){this.setValue(E);
}this.getContentElement().addListener(be,this._onChangeContent,this);
this.addListener(bh,this._syncPlaceholder,this);
if(qx.core.Variant.isSet(V,bH)){qx.locale.Manager.getInstance().addListener(bI,this._onChangeLocale,this);
}},events:{"input":R,"changeValue":R},properties:{textAlign:{check:[bt,bd,bl],nullable:true,themeable:true,apply:bE},readOnly:{check:U,apply:bn,init:false},selectable:{refine:true,init:true},focusable:{refine:true,init:true},maxLength:{check:bB,init:Infinity},liveUpdate:{check:U,init:false},placeholder:{check:bq,nullable:true,apply:bp},filter:{check:bC,nullable:true,init:null}},members:{__J:true,__K:null,__L:null,__M:null,getFocusElement:function(){var bM=this.getContentElement();

if(bM){return bM;
}},_createInputElement:function(){return new qx.html.Input(bF);
},renderLayout:function(t,top,u,v){var w=this._updateInsets;
var A=qx.ui.core.Widget.prototype.renderLayout.call(this,t,top,u,v);
if(!A){return;
}var y=A.size||w;
var B=bD;

if(y||A.local||A.margin){var x=this.getInsets();
var innerWidth=u-x.left-x.right;
var innerHeight=v-x.top-x.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}var z=this.getContentElement();

if(w){this.__P().setStyles({"left":x.left+B,"top":x.top+B});
}
if(y){this.__P().setStyles({"width":innerWidth+B,"height":innerHeight+B});
z.setStyles({"width":innerWidth+B,"height":innerHeight+B});
this._renderContentElement(innerHeight,z);
}},_renderContentElement:function(innerHeight,F){},_createContentElement:function(){var M=this._createInputElement();
M.setStyles({"border":W,"padding":0,"margin":0,"display":bk,"background":bs,"outline":W,"appearance":W,"position":bx,"autoComplete":bj});
M.setSelectable(this.getSelectable());
M.setEnabled(this.getEnabled());
M.addListener(P,this._onHtmlInput,this);
M.setAttribute(by,bw);
if(qx.core.Variant.isSet(T,bm)){M.setStyle(bo,W);
}if(qx.core.Variant.isSet(T,bA)){M.setStyles({backgroundImage:bi+qx.util.ResourceManager.getInstance().toUri(bv)+bg});
}return M;
},_applyEnabled:function(G,H){qx.ui.core.Widget.prototype._applyEnabled.call(this,G,H);
this.getContentElement().setEnabled(G);

if(G){this._showPlaceholder();
}else{this._removePlaceholder();
}},__N:{width:16,height:16},_getContentHint:function(){return {width:this.__N.width*10,height:this.__N.height||16};
},_applyFont:function(I,J){var K;

if(I){var L=qx.theme.manager.Font.getInstance().resolve(I);
K=L.getStyles();
}else{K=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(K);
this.__P().setStyles(K);
if(I){this.__N=qx.bom.Label.getTextSize("A",K);
}else{delete this.__N;
}qx.ui.core.queue.Layout.add(this);
},_applyTextColor:function(c,d){if(c){this.getContentElement().setStyle(S,qx.theme.manager.Color.getInstance().resolve(c));
}else{this.getContentElement().removeStyle(S);
}},tabFocus:function(){qx.ui.core.Widget.prototype.tabFocus.call(this);
this.selectAllText();
},_getTextSize:function(){return this.__N;
},_onHtmlInput:function(e){var i=e.getData();
var h=true;
this.__J=false;
if(this.getFilter()!=null){var j=X;
var f=i.search(this.getFilter());
var g=i;

while(f>=0){j=j+(g.charAt(f));
g=g.substring(f+1,g.length);
f=g.search(this.getFilter());
}
if(j!=i){h=false;
i=j;
this.getContentElement().setValue(i);
}}if(i.length>this.getMaxLength()){var h=false;
this.getContentElement().setValue(i.substr(0,this.getMaxLength()));
}if(h){this.fireDataEvent(P,i,this.__M);
this.__M=i;
if(this.getLiveUpdate()){this.__O(i);
}}},__O:function(bP){var bQ=this.__L;
this.__L=bP;

if(bQ!=bP){this.fireNonBubblingEvent("changeValue",qx.event.type.Data,[bP,bQ]);
}},setValue:function(p){if(p===null){if(this.__J){return p;
}p=X;
this.__J=true;
}else{this.__J=false;
this._removePlaceholder();
}
if(qx.lang.Type.isString(p)){var r=this.getContentElement();

if(p.length>this.getMaxLength()){p=p.substr(0,this.getMaxLength());
}
if(r.getValue()!=p){var s=r.getValue();
r.setValue(p);
var q=this.__J?null:p;
this.__L=s;
this.__O(q);
}this._showPlaceholder();
return p;
}throw new Error("Invalid value type: "+p);
},getValue:function(){var o=this.getContentElement().getValue();
return this.__J?null:o;
},resetValue:function(){this.setValue(null);
},_onChangeContent:function(e){this.__J=e.getData()===null;
this.__O(e.getData());
},getTextSelection:function(){return this.getContentElement().getTextSelection();
},getTextSelectionLength:function(){return this.getContentElement().getTextSelectionLength();
},getTextSelectionStart:function(){return this.getContentElement().getTextSelectionStart();
},getTextSelectionEnd:function(){return this.getContentElement().getTextSelectionEnd();
},setTextSelection:function(a,b){this.getContentElement().setTextSelection(a,b);
},clearTextSelection:function(){this.getContentElement().clearTextSelection();
},selectAllText:function(){this.setTextSelection(0);
},_showPlaceholder:function(){var O=this.getValue()||X;
var N=this.getPlaceholder();

if(N!=null&&O==X&&!this.hasState(bc)&&!this.hasState(bb)){if(this.hasState(Y)){this._syncPlaceholder();
}else{this.addState(Y);
}}},_removePlaceholder:function(){if(this.hasState(Y)){this.__P().setStyle(bK,br);
this.removeState(Y);
}},_syncPlaceholder:function(){if(this.hasState(Y)){this.__P().setStyle(bK,ba);
}},__P:function(){if(this.__K==null){this.__K=new qx.html.Label();
var k=qx.theme.manager.Color.getInstance();
this.__K.setStyles({"visibility":"hidden","zIndex":6,"position":"absolute","color":k.resolve("text-placeholder")});
this.getContainerElement().add(this.__K);
}return this.__K;
},_onChangeLocale:qx.core.Variant.select(V,{"on":function(e){var content=this.getPlaceholder();

if(content&&content.translate){this.setPlaceholder(content.translate());
}},"off":null}),_applyPlaceholder:function(bN,bO){this.__P().setValue(bN);

if(bN!=null){this.addListener(bL,this._removePlaceholder,this);
this.addListener(bJ,this._showPlaceholder,this);
this._showPlaceholder();
}else{this.removeListener(bL,this._removePlaceholder,this);
this.removeListener(bJ,this._showPlaceholder,this);
this._removePlaceholder();
}},_applyTextAlign:function(C,D){this.getContentElement().setStyle(bf,C);
},_applyReadOnly:function(l,m){var n=this.getContentElement();
n.setAttribute(bG,l);

if(l){this.addState(Q);
this.setFocusable(false);
}else{this.removeState(Q);
this.setFocusable(true);
}}},destruct:function(){this.__K=null;

if(qx.core.Variant.isSet(V,bH)){qx.locale.Manager.getInstance().removeListener(bI,this._onChangeLocale,this);
}}});
})();
(function(){var b="qx.ui.form.TextField",a="textfield";
qx.Class.define(b,{extend:qx.ui.form.AbstractField,properties:{appearance:{refine:true,init:a},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{_renderContentElement:function(innerHeight,c){}}});
})();
(function(){var r="none",q="wrap",p="value",o="qx.client",n="textarea",m="off",l="on",k="qxSelectable",j="",i="webkit",e="input",h="qx.html.Input",g="select",d="disabled",c="read-only",f="userSelect";
qx.Class.define(h,{extend:qx.html.Element,construct:function(A,B,C){if(A===g||A===n){var D=A;
}else{D=e;
}qx.html.Element.call(this,D,B,C);
this.__c=A;
},members:{__c:null,__d:null,__e:null,_createDomElement:function(){return qx.bom.Input.create(this.__c);
},_applyProperty:function(name,a){qx.html.Element.prototype._applyProperty.call(this,name,a);
var b=this.getDomElement();

if(name===p){qx.bom.Input.setValue(b,a);
}else if(name===q){qx.bom.Input.setWrap(b,a);
}},setEnabled:qx.core.Variant.select(o,{"webkit":function(y){this.__e=y;

if(!y){this.setStyles({"userModify":c,"userSelect":r});
}else{this.setStyles({"userModify":null,"userSelect":this.__d?null:r});
}},"default":function(E){this.setAttribute(d,E===false);
}}),setSelectable:qx.core.Variant.select(o,{"webkit":function(v){this.__d=v;
this.setAttribute(k,v?l:m);
if(qx.core.Variant.isSet(o,i)){var w=this.__e?v?null:r:r;
this.setStyle(f,w);
}},"default":function(s){this.setAttribute(k,s?l:m);
}}),setValue:function(t){var u=this.getDomElement();

if(u){if(u.value!=t){qx.bom.Input.setValue(u,t);
}}else{this._setProperty(p,t);
}return this;
},getValue:function(){var x=this.getDomElement();

if(x){return qx.bom.Input.getValue(x);
}return this._getProperty(p)||j;
},setWrap:function(z){if(this.__c===n){this._setProperty(q,z);
}else{throw new Error("Text wrapping is only support by textareas!");
}return this;
},getWrap:function(){if(this.__c===n){return this._getProperty(q);
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
}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{input:1,change:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{__g:false,__h:null,__i:null,canHandleEvent:function(bd,be){var bf=bd.tagName.toLowerCase();

if(be===v&&(bf===v||bf===p)){return true;
}
if(be===w&&(bf===v||bf===p||bf===j)){return true;
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
}},"default":function(W,X,Y){if(X===v){this.__k(W);
}else if(X===w){if(W.type===q||W.type===r){qx.bom.Event.addNativeListener(W,w,this._onChangeCheckedWrapper);
}else{qx.bom.Event.addNativeListener(W,w,this._onChangeValueWrapper);
}if(qx.core.Variant.isSet(u,m)){if(W.type===t||W.type===s){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,W);
qx.bom.Event.addNativeListener(W,n,this._onKeyPressWrapped);
}}}}}),__k:qx.core.Variant.select(u,{"mshtml":null,"webkit":function(bb){var bc=bb.tagName.toLowerCase();
if(qx.bom.client.Engine.VERSION<532&&bc==p){qx.bom.Event.addNativeListener(bb,n,this._onInputWrapper);
}qx.bom.Event.addNativeListener(bb,v,this._onInputWrapper);
},"opera":function(V){qx.bom.Event.addNativeListener(V,c,this._onKeyUpWrapper);
qx.bom.Event.addNativeListener(V,h,this._onKeyDownWrapper);
qx.bom.Event.addNativeListener(V,k,this._onBlurWrapper);
qx.bom.Event.addNativeListener(V,v,this._onInputWrapper);
},"default":function(K){qx.bom.Event.addNativeListener(K,v,this._onInputWrapper);
}}),unregisterEvent:qx.core.Variant.select(u,{"mshtml":function(P,Q){if(P.__j){var R=P.tagName.toLowerCase();
var S=P.type;

if(S===t||S===s||R===p||S===r||S===q){qx.bom.Event.removeNativeListener(P,d,this._onPropertyWrapper);
}
if(S!==r&&S!==q){qx.bom.Event.removeNativeListener(P,w,this._onChangeValueWrapper);
}
if(S===t||S===s){qx.bom.Event.removeNativeListener(P,n,this._onKeyPressWrapped);
}
try{delete P.__j;
}catch(G){P.__j=null;
}}},"default":function(L,M){if(M===v){this.__k(L);
}else if(M===w){if(L.type===q||L.type===r){qx.bom.Event.removeNativeListener(L,w,this._onChangeCheckedWrapper);
}else{qx.bom.Event.removeNativeListener(L,w,this._onChangeValueWrapper);
}}
if(qx.core.Variant.isSet(u,m)){if(L.type===t||L.type===s){qx.bom.Event.removeNativeListener(L,n,this._onKeyPressWrapped);
}}}}),__l:qx.core.Variant.select(u,{"mshtml":null,"webkit":function(I){var J=I.tagName.toLowerCase();
if(qx.bom.client.Engine.VERSION<532&&J==p){qx.bom.Event.removeNativeListener(I,n,this._onInputWrapper);
}qx.bom.Event.removeNativeListener(I,v,this._onInputWrapper);
},"opera":function(ba){qx.bom.Event.removeNativeListener(ba,c,this._onKeyUpWrapper);
qx.bom.Event.removeNativeListener(ba,h,this._onKeyDownWrapper);
qx.bom.Event.removeNativeListener(ba,k,this._onBlurWrapper);
qx.bom.Event.removeNativeListener(ba,v,this._onInputWrapper);
},"default":function(F){qx.bom.Event.removeNativeListener(F,v,this._onInputWrapper);
}}),_onKeyPress:qx.core.Variant.select(u,{"mshtml|opera":function(e,N){if(e.keyCode===13){if(N.value!==this.__i){this.__i=N.value;
qx.event.Registration.fireEvent(N,w,qx.event.type.Data,[N.value]);
}}},"default":null}),_onKeyDown:qx.core.Variant.select(u,{"opera":function(e){if(e.keyCode===13){this.__g=true;
}},"default":null}),_onKeyUp:qx.core.Variant.select(u,{"opera":function(e){if(e.keyCode===13){this.__g=false;
}},"default":null}),_onBlur:qx.core.Variant.select(u,{"opera":function(e){if(this.__h){window.clearTimeout(this.__h);
}},"default":null}),_onInput:qx.event.GlobalError.observeMethod(function(e){var H=e.target;
if(!this.__g){if(qx.core.Variant.isSet(u,m)){this.__h=window.setTimeout(function(){qx.event.Registration.fireEvent(H,v,qx.event.type.Data,[H.value]);
},0);
}else{qx.event.Registration.fireEvent(H,v,qx.event.type.Data,[H.value]);
}}}),_onChangeValue:qx.event.GlobalError.observeMethod(function(e){var U=e.target||e.srcElement;
var T=U.value;

if(U.type===b){var T=[];

for(var i=0,o=U.options,l=o.length;i<l;i++){if(o[i].selected){T.push(o[i].value);
}}}qx.event.Registration.fireEvent(U,w,qx.event.type.Data,[T]);
}),_onChangeChecked:qx.event.GlobalError.observeMethod(function(e){var O=e.target;

if(O.type===q){if(O.checked){qx.event.Registration.fireEvent(O,w,qx.event.type.Data,[O.value]);
}}else{qx.event.Registration.fireEvent(O,w,qx.event.type.Data,[O.checked]);
}}),_onProperty:qx.core.Variant.select(u,{"mshtml":qx.event.GlobalError.observeMethod(function(e){var x=e.target||e.srcElement;
var y=e.propertyName;

if(y===f&&(x.type===t||x.type===s||x.tagName.toLowerCase()===p)){if(!x.$$inValueSet){qx.event.Registration.fireEvent(x,v,qx.event.type.Data,[x.value]);
}}else if(y===g){if(x.type===r){qx.event.Registration.fireEvent(x,w,qx.event.type.Data,[x.checked]);
}else if(x.checked){qx.event.Registration.fireEvent(x,w,qx.event.type.Data,[x.value]);
}}}),"default":function(){}})},defer:function(z){qx.event.Registration.addHandler(z);
}});
})();
(function(){var z="",y="select",x="soft",w="off",v="qx.client",u="textarea",t="wrap",s="text",r="mshtml",q="number",h="checkbox",p="select-one",m="input",g="option",f="value",k="radio",j="qx.bom.Input",n="nowrap",e="auto",o="normal";
qx.Class.define(j,{statics:{__f:{text:1,textarea:1,select:1,checkbox:1,radio:1,password:1,hidden:1,submit:1,image:1,file:1,search:1,reset:1,button:1},create:function(J,K,L){{};
var K=K?qx.lang.Object.clone(K):{};
var M;

if(J===u||J===y){M=J;
}else{M=m;
K.type=J;
}return qx.bom.Element.create(M,K,L);
},setValue:function(A,B){var G=A.nodeName.toLowerCase();
var D=A.type;
var Array=qx.lang.Array;
var H=qx.lang.Type;

if(typeof B===q){B+=z;
}
if((D===h||D===k)){if(H.isArray(B)){A.checked=Array.contains(B,A.value);
}else{A.checked=A.value==B;
}}else if(G===y){var C=H.isArray(B);
var I=A.options;
var E,F;

for(var i=0,l=I.length;i<l;i++){E=I[i];
F=E.getAttribute(f);

if(F==null){F=E.text;
}E.selected=C?Array.contains(B,F):B==F;
}
if(C&&B.length==0){A.selectedIndex=-1;
}}else if((D===s||D===u)&&qx.core.Variant.isSet(v,r)){A.$$inValueSet=true;
A.value=B;
A.$$inValueSet=null;
}else{A.value=B;
}},getValue:function(R){var X=R.nodeName.toLowerCase();

if(X===g){return (R.attributes.value||{}).specified?R.value:R.text;
}
if(X===y){var S=R.selectedIndex;
if(S<0){return null;
}var Y=[];
var bb=R.options;
var ba=R.type==p;
var W=qx.bom.Input;
var V;
for(var i=ba?S:0,U=ba?S+1:bb.length;i<U;i++){var T=bb[i];

if(T.selected){V=W.getValue(T);
if(ba){return V;
}Y.push(V);
}}return Y;
}else{return (R.value||z).replace(/\r/g,z);
}},setWrap:qx.core.Variant.select(v,{"mshtml":function(P,Q){P.wrap=Q?x:w;
},"gecko|webkit":function(a,b){var d=b?x:w;
var c=b?z:e;
a.setAttribute(t,d);
a.style.overflow=c;
},"default":function(N,O){N.style.whiteSpace=O?o:n;
}})}});
})();
(function(){var b="qx.ui.form.IDateForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var a="qx.ui.form.renderer.IFormRenderer";
qx.Interface.define(a,{members:{addItems:function(b,c,d){},addButton:function(e){}}});
})();
(function(){var r="Validation Error",q="%1 is not a number.",p="%1 is not a color! %2",o="",n="%1 is not a string.",m="number",l="'%1' is not an email address.",k="qx.util.Validate",j="%1 is not an url.",i="%1 is not in %2",f="%1 does not fit %2.",h="string",g="%1 is not in the range from [%2, %3].";
qx.Class.define(k,{statics:{number:function(v){return function(S){qx.util.Validate.checkNumber(S,v);
};
},checkNumber:function(c,d){d=d||qx.locale.Manager.tr(q,c);

if((typeof c!==m&&(!(c instanceof Number)))||(!(isFinite(c)))){throw new qx.core.ValidationError(r,d);
}},email:function(P){return function(w){qx.util.Validate.checkEmail(w,P);
};
},checkEmail:function(K,L){L=L||qx.locale.Manager.tr(l,(K||o));
var M=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

if(M.test(K)===false){throw new qx.core.ValidationError(r,L);
}},string:function(J){return function(G){qx.util.Validate.checkString(G,J);
};
},checkString:function(Q,R){R=R||qx.locale.Manager.tr(n,Q);

if(typeof Q!==h&&(!(Q instanceof String))){throw new qx.core.ValidationError(r,R);
}},url:function(x){return function(F){qx.util.Validate.checkUrl(F,x);
};
},checkUrl:function(s,t){t=t||qx.locale.Manager.tr(j,s);
var u=/([A-Za-z0-9])+:\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

if(!u.test(s)){throw new qx.core.ValidationError(r,t);
}},color:function(O){return function(b){qx.util.Validate.checkColor(b,O);
};
},checkColor:function(D,E){try{qx.util.ColorUtil.stringToRgb(D);
}catch(e){E=E||qx.locale.Manager.tr(p,D,e);
throw new qx.core.ValidationError(r,E);
}},range:function(A,B,C){return function(N){C=C||qx.locale.Manager.tr(g,N,A,B);

if(N<A||N>B){throw new qx.core.ValidationError(r,C);
}};
},inArray:function(H,I){return function(T){I=I||qx.locale.Manager.tr(i,T,H);

if(H.indexOf(T)===-1){throw new qx.core.ValidationError(r,I);
}};
},regExp:function(y,z){return function(a){z=z||qx.locale.Manager.tr(f,a,y);

if(!y.test(a)){throw new qx.core.ValidationError(r,z);
}};
}}});
})();
(function(){var b="qx.ui.form.IColorForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var d="qx.ui.form.Resetter";
qx.Class.define(d,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__m=[];
},members:{__m:null,add:function(l){if(this.__q(l)){var m=l.getValue();
}else if(this.__p(l)){var m=l.getSelection();
}else{throw new Error("Item "+l+" not supported for reseting.");
}this.__m.push({item:l,init:m});
},reset:function(){for(var i=0;i<this.__m.length;i++){var g=this.__m[i];
this.__n(g.item,g.init);
}},resetItem:function(a){var b;

for(var i=0;i<this.__m.length;i++){var c=this.__m[i];

if(c.item===a){b=c.init;
break;
}}if(b===undefined){throw new Error("The given item has not been added.");
}this.__n(a,b);
},__n:function(e,f){if(this.__q(e)){e.setValue(f);
}else if(this.__p(e)){e.setSelection(f);
}},redefine:function(){for(var i=0;i<this.__m.length;i++){var k=this.__m[i].item;
this.__m[i].init=this.__o(k);
}},redefineItem:function(q){var r;

for(var i=0;i<this.__m.length;i++){if(this.__m[i].item===q){r=this.__m[i];
break;
}}if(r===undefined){throw new Error("The given item has not been added.");
}r.init=this.__o(r.item);
},__o:function(n){if(this.__q(n)){return n.getValue();
}else if(this.__p(n)){return n.getSelection();
}},__p:function(h){var j=h.constructor;
return qx.Class.hasInterface(j,qx.ui.core.ISingleSelection);
},__q:function(o){var p=o.constructor;
return (qx.Class.hasInterface(p,qx.ui.form.IBooleanForm)||qx.Class.hasInterface(p,qx.ui.form.IColorForm)||qx.Class.hasInterface(p,qx.ui.form.IDateForm)||qx.Class.hasInterface(p,qx.ui.form.INumberForm)||qx.Class.hasInterface(p,qx.ui.form.IStringForm));
}},destruct:function(){this.__m=null;
}});
})();
(function(){var s="",r="URL",q="Add",p="keypress",o="Title",n="Add a feed",m="feedreader.view.AddFeedWindow",l="__s",k="user",j="__r",c="icon/16/actions/document-new.png",i="icon/16/actions/dialog-apply.png",g="this.__form",b="right",a="__t",f="Feed Information",d="execute",h="Enter";
qx.Class.define(m,{extend:qx.ui.window.Window,construct:function(w){qx.ui.window.Window.call(this,this.tr(n),c);
this.__r=w;
this.set({modal:true,showMinimize:false,showMaximize:false,allowMaximize:false});
this._addContent();
},members:{__s:null,__t:null,__r:null,__u:null,_addContent:function(){this.setLayout(new qx.ui.layout.VBox(10));
this.__u=new qx.ui.form.Form();
this.__u.addGroupHeader(this.tr(f));
this.__t=new qx.ui.form.TextField().set({required:true,width:250});
this.__u.add(this.__t,this.tr(o));
this.__s=new qx.ui.form.TextField().set({required:true});
this.__u.add(this.__s,this.tr(r),qx.util.Validate.checkUrl);
var t=new qx.ui.form.Button(this.tr(q),i);
t.set({alignX:b,allowGrowX:false});
t.addListener(d,this._addFeed,this);
this.__u.addButton(t);
this.addListener(p,function(e){if(e.getTarget() instanceof qx.ui.form.TextField&&e.getKeyIdentifier()===h){this._addFeed();
}});
this.add(new qx.ui.form.renderer.SinglePlaceholder(this.__u));
},_addFeed:function(e){if(this.__u.validate()){var v=this.__t.getValue();
var u=this.__s.getValue();
this.__r.addFeed(v,u,k);
this.__t.setValue(s);
this.__s.setValue(s);
this.close();
}}},destruct:function(){this.__v=null;
this._disposeObjects(j,a,l,g);
}});
})();
(function(){var k="qx.dynlocale",j="",h="changeLocale",g="visibility",f="on",d=" <span style='color:red'>*</span> ",c="abstract",b="qx.ui.form.renderer.AbstractRenderer",a=" :";
qx.Class.define(b,{type:c,extend:qx.ui.core.Widget,implement:qx.ui.form.renderer.IFormRenderer,construct:function(t){qx.ui.core.Widget.call(this);
this._visibilityBindingIds=[];
if(qx.core.Variant.isSet(k,f)){qx.locale.Manager.getInstance().addListener(h,this._onChangeLocale,this);
this._names=[];
}var w=t.getGroups();

for(var i=0;i<w.length;i++){var v=w[i];
this.addItems(v.items,v.labels,v.title);
}var u=t.getButtons();

for(var i=0;i<u.length;i++){this.addButton(u[i]);
}},members:{_names:null,_visibilityBindingIds:null,_connectVisibility:function(l,m){var n=l.bind(g,m,g);
this._visibilityBindingIds.push({id:n,item:l});
},_onChangeLocale:qx.core.Variant.select(k,{"on":function(e){for(var i=0;i<this._names.length;i++){var x=this._names[i];

if(x.name&&x.name.translate){x.name=x.name.translate();
}var y=this._createLabelText(x.name,x.item);
x.label.setValue(y);
}},"off":null}),_createLabelText:function(name,p){var q=j;

if(p.getRequired()){q=d;
}var r=name.length>0||p.getRequired()?a:j;
return name+q+r;
},addItems:function(z,A,B){throw new Error("Abstract method call");
},addButton:function(o){throw new Error("Abstract method call");
}},destruct:function(){if(qx.core.Variant.isSet(k,f)){qx.locale.Manager.getInstance().removeListener(h,this._onChangeLocale,this);
}this._names=null;
for(var i=0;i<this._visibilityBindingIds.length;i++){var s=this._visibilityBindingIds[i];
s.item.removeBinding(s.id);
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
}}},addButton:function(s){if(this._buttonRow==null){this._buttonRow=new qx.ui.container.Composite();
this._buttonRow.setMarginTop(5);
var t=new qx.ui.layout.HBox();
t.setAlignX(h);
t.setSpacing(5);
this._buttonRow.setLayout(t);
this._add(this._buttonRow,{row:this._row,column:0,colSpan:2});
this._row++;
}this._buttonRow.add(s);
},getLayout:function(){return this._getLayout();
},_createLabel:function(name,u){var v=new qx.ui.basic.Label(this._createLabelText(name,u));
v.setRich(true);
return v;
},_createHeader:function(q){var r=new qx.ui.basic.Label(q);
r.setFont(g);

if(this._row!=0){r.setMarginTop(10);
}r.setAlignX(d);
return r;
}},destruct:function(){if(this._buttonRow){this._buttonRow.removeAll();
this._disposeObjects(f);
}}});
})();
(function(){var R="",Q="String",P="complete",O="qx.event.type.Event",N="value instanceof Function || qx.Class.isSubClassOf(value.constructor, qx.ui.form.validation.AsyncValidator)",M="qx.ui.form.validation.Manager",L="This field is required",K="qx.event.type.Data";
qx.Class.define(M,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__w=[];
this.__x={};
this.setRequiredFieldMessage(qx.locale.Manager.tr(L));
},events:{"changeValid":K,"complete":O},properties:{validator:{check:N,init:null,nullable:true},invalidMessage:{check:Q,init:R},requiredFieldMessage:{check:Q,init:R},context:{nullable:true}},members:{__w:null,__y:null,__x:null,__z:null,add:function(f,g,h){if(!this.__E(f)){throw new Error("Added widget not supported.");
}if(this.__F(f)){if(g!=null){throw new Error("Widgets supporting selection can only be validated "+"in the form validator");
}}var j={item:f,validator:g,valid:null,context:h};
this.__w.push(j);
},validate:function(){var v=true;
this.__z=true;
var s=[];
for(var i=0;i<this.__w.length;i++){var t=this.__w[i].item;
var w=this.__w[i].validator;
s.push(t);
if(w==null){var r=this.__A(t);
v=v&&r;
this.__z=r&&this.__z;
continue;
}var r=this.__B(this.__w[i],t.getValue());
v=r&&v;

if(r!=null){this.__z=r&&this.__z;
}}var u=this.__C(s);

if(qx.lang.Type.isBoolean(u)){this.__z=u&&this.__z;
}v=u&&v;
this.__H(v);

if(qx.lang.Object.isEmpty(this.__x)){this.fireEvent(P);
}return v;
},__A:function(ba){if(ba.getRequired()){if(this.__F(ba)){var bb=!!ba.getSelection()[0];
}else{var bb=!!ba.getValue();
}ba.setValid(bb);
var bd=ba.getRequiredInvalidMessage();
var bc=bd?bd:this.getRequiredFieldMessage();
ba.setInvalidMessage(bc);
return bb;
}return true;
},__B:function(z,A){var F=z.item;
var E=z.context;
var D=z.validator;
if(this.__D(D)){this.__x[F.toHashCode()]=null;
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
},__C:function(U){var W=this.getValidator();
var X=this.getContext()||this;

if(W==null){return true;
}this.setInvalidMessage("");

if(this.__D(W)){this.__x[this.toHashCode()]=null;
W.validateForm(U,this,X);
return null;
}
try{var Y=W.call(X,U,this);

if(Y===undefined){Y=true;
}}catch(e){if(e instanceof qx.core.ValidationError){Y=false;

if(e.message&&e.message!=qx.type.BaseError.DEFAULTMESSAGE){var V=e.message;
}else{var V=e.getComment();
}this.setInvalidMessage(V);
}else{throw e;
}}return Y;
},__D:function(k){var l=false;

if(!qx.lang.Type.isFunction(k)){l=qx.Class.isSubClassOf(k.constructor,qx.ui.form.validation.AsyncValidator);
}return l;
},__E:function(I){var J=I.constructor;
return qx.Class.hasInterface(J,qx.ui.form.IForm);
},__F:function(m){var n=m.constructor;
return qx.Class.hasInterface(n,qx.ui.core.ISingleSelection);
},__G:function(S){var T=S.constructor;
return (qx.Class.hasInterface(T,qx.ui.form.IBooleanForm)||qx.Class.hasInterface(T,qx.ui.form.IColorForm)||qx.Class.hasInterface(T,qx.ui.form.IDateForm)||qx.Class.hasInterface(T,qx.ui.form.INumberForm)||qx.Class.hasInterface(T,qx.ui.form.IStringForm));
},__H:function(o){var p=this.__y;
this.__y=o;
if(p!=o){this.fireDataEvent("changeValid",o,p);
}},getValid:function(){return this.__y;
},isValid:function(){return this.getValid();
},getInvalidMessages:function(){var x=[];
for(var i=0;i<this.__w.length;i++){var y=this.__w[i].item;

if(!y.getValid()){x.push(y.getInvalidMessage());
}}if(this.getInvalidMessage()!=R){x.push(this.getInvalidMessage());
}return x;
},reset:function(){for(var i=0;i<this.__w.length;i++){var a=this.__w[i];
a.item.setValid(true);
}this.__y=null;
},setItemValid:function(G,H){this.__x[G.toHashCode()]=H;
G.setValid(H);
this.__I();
},setFormValid:function(q){this.__x[this.toHashCode()]=q;
this.__I();
},__I:function(){var c=this.__z;
for(var d in this.__x){var b=this.__x[d];
c=b&&c;
if(b==null){return;
}}this.__H(c);
this.__x={};
this.fireEvent("complete");
}},destruct:function(){this.__w=null;
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
this.__Q=b;
},members:{__Q:null,__R:null,__S:null,__T:null,validate:function(e,f,g,h){this.__T=false;
this.__R=e;
this.__S=g;
this.__Q.call(h||this,this,f);
},validateForm:function(i,j,k){this.__T=true;
this.__S=j;
this.__Q.call(k,i,this);
},setValid:function(c,d){if(this.__T){if(d!==undefined){this.__S.setInvalidMessage(d);
}this.__S.setFormValid(c);
}else{if(d!==undefined){this.__R.setInvalidMessage(d);
}this.__S.setItemValid(this.__R,c);
}}},destruct:function(){this.__S=this.__R=null;
}});
})();
(function(){var b="qx.ui.form.Form",a="";
qx.Class.define(b,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__U=[];
this.__V=[];
this._validationManager=new qx.ui.form.validation.Manager();
this._resetter=new qx.ui.form.Resetter();
},members:{__U:null,_validationManager:null,__W:0,__V:null,_resetter:null,add:function(c,d,e,name,f){if(this.__X()){this.__U.push({title:null,items:[],labels:[],names:[]});
}this.__U[this.__W].items.push(c);
this.__U[this.__W].labels.push(d);
if(name==null){name=d.replace(/\s+|&|-|\+|\*|\/|\||!|\.|,|:|\?|;|~|%|\{|\}|\(|\)|\[|\]|<|>|=|\^|@|\\/g,a);
}this.__U[this.__W].names.push(name);
this._validationManager.add(c,e,f);
this._resetter.add(c);
},addGroupHeader:function(g){if(!this.__X()){this.__W++;
}this.__U.push({title:g,items:[],labels:[],names:[]});
},addButton:function(h){this.__V.push(h);
},__X:function(){return this.__U.length===0;
},reset:function(){this._resetter.reset();
this._validationManager.reset();
},redefineResetter:function(){this._resetter.redefine();
},validate:function(){return this._validationManager.validate();
},getValidationManager:function(){return this._validationManager;
},getGroups:function(){return this.__U;
},getButtons:function(){return this.__V;
},getItems:function(){var k={};
for(var i=0;i<this.__U.length;i++){var l=this.__U[i];
for(var j=0;j<l.names.length;j++){var name=l.names[j];
k[name]=l.items[j];
}}return k;
}},destruct:function(){this.__U=this._buttons=this._buttonOptions=null;
}});
})();

});