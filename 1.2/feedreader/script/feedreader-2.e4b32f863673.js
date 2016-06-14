qx.$$packageData['e4b32f863673']={"locales":{},"resources":{"feedreader/images/combined/icons16.png":[16,96,"png","feedreader"],"qx/icon/Tango/16/actions/dialog-apply.png":[16,16,"png","qx","feedreader/images/combined/icons16.png",0,-80],"qx/icon/Tango/16/actions/document-new.png":[16,16,"png","qx","feedreader/images/combined/icons16.png",0,-16]},"translations":{}};

qx.Part.$$notifyLoad("e4b32f863673", function() {
(function(){var l="showingPlaceholder",k="color",j="",i="none",h="qx.dynlocale",g="Boolean",f="qx.client",d="qx.event.type.Data",c="readonly",b="input",X="focusin",W="visibility",V="focusout",U="changeLocale",T="on",S="readOnly",R="text",Q="_applyTextAlign",P="px",O="RegExp",s=")",t="syncAppearance",q="change",r="textAlign",o="focused",p="center",m="visible",n="disabled",u="url(",v="off",C="String",A="resize",G="qx.ui.form.AbstractField",E="transparent",K="spellcheck",I="false",x="right",N="PositiveInteger",M="mshtml",L="abstract",w="block",y="webkit",z="_applyReadOnly",B="_applyPlaceholder",D="hidden",F="left",H="qx/static/blank.gif",J="absolute";
qx.Class.define(G,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm,qx.ui.form.IForm],include:[qx.ui.form.MForm],type:L,construct:function(bu){qx.ui.core.Widget.call(this);

if(bu!=null){this.setValue(bu);
}this.getContentElement().addListener(q,this._onChangeContent,this);
this.addListener(t,this._syncPlaceholder,this);
if(qx.core.Variant.isSet(h,T)){qx.locale.Manager.getInstance().addListener(U,this._onChangeLocale,this);
}},events:{"input":d,"changeValue":d},properties:{textAlign:{check:[F,p,x],nullable:true,themeable:true,apply:Q},readOnly:{check:g,apply:z,init:false},selectable:{refine:true,init:true},focusable:{refine:true,init:true},maxLength:{check:N,init:Infinity},liveUpdate:{check:g,init:false},placeholder:{check:C,nullable:true,apply:B},filter:{check:O,nullable:true,init:null}},members:{__J:true,__K:null,__L:null,__M:null,getFocusElement:function(){var bb=this.getContentElement();

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

if(bf){this.__P().setStyles({"left":bg.left+bk,"top":bg.top+bk});
}
if(bh){this.__P().setStyles({"width":innerWidth+bk,"height":innerHeight+bk});
bi.setStyles({"width":innerWidth+bk,"height":innerHeight+bk});
}},_createContentElement:function(){var bF=this._createInputElement();
bF.setStyles({"border":i,"padding":0,"margin":0,"display":w,"background":E,"outline":i,"appearance":i,"position":J,"autoComplete":v});
bF.setSelectable(this.getSelectable());
bF.setEnabled(this.getEnabled());
bF.addListener(b,this._onHtmlInput,this);
bF.setAttribute(K,I);
if(qx.core.Variant.isSet(f,y)){bF.setStyle(A,i);
}if(qx.core.Variant.isSet(f,M)){bF.setStyles({backgroundImage:u+qx.util.ResourceManager.getInstance().toUri(H)+s});
}return bF;
},_applyEnabled:function(bG,bH){qx.ui.core.Widget.prototype._applyEnabled.call(this,bG,bH);
this.getContentElement().setEnabled(bG);

if(bG){this._showPlaceholder();
}else{this._removePlaceholder();
}},__N:{width:16,height:16},_getContentHint:function(){return {width:this.__N.width*10,height:this.__N.height||16};
},_applyFont:function(bv,bw){var bx;

if(bv){var by=qx.theme.manager.Font.getInstance().resolve(bv);
bx=by.getStyles();
}else{bx=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(bx);
this.__P().setStyles(bx);
if(bv){this.__N=qx.bom.Label.getTextSize("A",bx);
}else{delete this.__N;
}qx.ui.core.queue.Layout.add(this);
},_applyTextColor:function(bD,bE){if(bD){this.getContentElement().setStyle(k,qx.theme.manager.Color.getInstance().resolve(bD));
this.__P().setStyle(k,qx.theme.manager.Color.getInstance().resolve(bD));
}else{this.getContentElement().removeStyle(k);
this.__P().removeStyle(k);
}},tabFocus:function(){qx.ui.core.Widget.prototype.tabFocus.call(this);
this.selectAllText();
},_getTextSize:function(){return this.__N;
},_onHtmlInput:function(e){var bs=e.getData();
var br=true;
this.__J=false;
if(this.getFilter()!=null){var bt=j;
var bp=bs.search(this.getFilter());
var bq=bs;

while(bp>=0){bt=bt+(bq.charAt(bp));
bq=bq.substring(bp+1,bq.length);
bp=bq.search(this.getFilter());
}
if(bt!=bs){br=false;
bs=bt;
this.getContentElement().setValue(bs);
}}if(bs.length>this.getMaxLength()){var br=false;
this.getContentElement().setValue(bs.substr(0,this.getMaxLength()));
}if(br){this.fireDataEvent(b,bs,this.__M);
this.__M=bs;
if(this.getLiveUpdate()){this.__O(bs);
}}},__O:function(a){if(this.__L!=a){this.fireNonBubblingEvent("changeValue",qx.event.type.Data,[a,this.__L]);
this.__L=a;
}},setValue:function(bl){if(bl===null){if(this.__J){return bl;
}bl=j;
this.__J=true;
}else{this.__J=false;
this._removePlaceholder();
}
if(qx.lang.Type.isString(bl)){var bn=this.getContentElement();

if(bl.length>this.getMaxLength()){bl=bl.substr(0,this.getMaxLength());
}
if(bn.getValue()!=bl){var bo=bn.getValue();
bn.setValue(bl);
var bm=this.__J?null:bl;
this.__L=bo;
this.__O(bm);
}this._showPlaceholder();
return bl;
}throw new Error("Invalid value type: "+bl);
},getValue:function(){var bI=this.getContentElement().getValue();
return this.__J?null:bI;
},resetValue:function(){this.setValue(null);
},_onChangeContent:function(e){this.__J=e.getData()===null;
this.__O(e.getData());
},getTextSelection:function(){return this.getContentElement().getTextSelection();
},getTextSelectionLength:function(){return this.getContentElement().getTextSelectionLength();
},getTextSelectionStart:function(){return this.getContentElement().getTextSelectionStart();
},getTextSelectionEnd:function(){return this.getContentElement().getTextSelectionEnd();
},setTextSelection:function(Y,ba){this.getContentElement().setTextSelection(Y,ba);
},clearTextSelection:function(){this.getContentElement().clearTextSelection();
},selectAllText:function(){this.setTextSelection(0);
},_showPlaceholder:function(){var bC=this.getValue()||j;
var bB=this.getPlaceholder();

if(bB!=null&&bC==j&&!this.hasState(o)&&!this.hasState(n)){if(this.hasState(l)){this._syncPlaceholder();
}else{this.addState(l);
}}},_removePlaceholder:function(){if(this.hasState(l)){this.__P().setStyle(W,D);
this.removeState(l);
}},_syncPlaceholder:function(){if(this.hasState(l)){this.__P().setStyle(W,m);
}},__P:function(){if(this.__K==null){this.__K=new qx.html.Label();
this.__K.setStyles({"visibility":"hidden","zIndex":6,"position":"absolute"});
this.getContainerElement().add(this.__K);
}return this.__K;
},_onChangeLocale:qx.core.Variant.select(h,{"on":function(e){var content=this.getPlaceholder();

if(content&&content.translate){this.setPlaceholder(content.translate());
}},"off":null}),_applyPlaceholder:function(bJ,bK){this.__P().setValue(bJ);

if(bJ!=null){this.addListener(X,this._removePlaceholder,this);
this.addListener(V,this._showPlaceholder,this);
this._showPlaceholder();
}else{this.removeListener(X,this._removePlaceholder,this);
this.removeListener(V,this._showPlaceholder,this);
this._removePlaceholder();
}},_applyTextAlign:function(bz,bA){this.getContentElement().setStyle(r,bz);
},_applyReadOnly:function(bL,bM){var bN=this.getContentElement();
bN.setAttribute(S,bL);

if(bL){this.addState(c);
this.setFocusable(false);
}else{this.removeState(c);
this.setFocusable(true);
}}},destruct:function(){this.__K=null;

if(qx.core.Variant.isSet(h,T)){qx.locale.Manager.getInstance().removeListener(U,this._onChangeLocale,this);
}}});
})();
(function(){var b="qx.ui.form.TextField",a="textfield";
qx.Class.define(b,{extend:qx.ui.form.AbstractField,properties:{appearance:{refine:true,init:a},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}}});
})();
(function(){var q="none",p="wrap",o="value",n="qx.client",m="textarea",l="off",k="on",j="qxSelectable",i="",h="webkit",d="input",g="qx.html.Input",f="select",c="disabled",b="read-only",e="userSelect";
qx.Class.define(g,{extend:qx.html.Element,construct:function(z,A,B){if(z===f||z===m){var C=z;
}else{C=d;
}qx.html.Element.call(this,C,A,B);
this.__c=z;
},members:{__c:null,__d:null,__e:null,_createDomElement:function(){return qx.bom.Input.create(this.__c);
},_applyProperty:function(name,x){qx.html.Element.prototype._applyProperty.call(this,name,x);
var y=this.getDomElement();

if(name===o){qx.bom.Input.setValue(y,x);
}else if(name===p){qx.bom.Input.setWrap(y,x);
}},setEnabled:qx.core.Variant.select(n,{"webkit":function(D){this.__e=D;

if(!D){this.setStyles({"userModify":b,"userSelect":q});
}else{this.setStyles({"userModify":null,"userSelect":this.__d?null:q});
}},"default":function(a){this.setAttribute(c,a===false);
}}),setSelectable:qx.core.Variant.select(n,{"webkit":function(s){this.__d=s;
this.setAttribute(j,s?k:l);
if(qx.core.Variant.isSet(n,h)){var t=this.__e?s?null:q:q;
this.setStyle(e,t);
}},"default":function(r){this.setAttribute(j,r?k:l);
}}),setValue:function(u){var v=this.getDomElement();

if(v){if(v.value!=u){qx.bom.Input.setValue(v,u);
}}else{this._setProperty(o,u);
}return this;
},getValue:function(){var E=this.getDomElement();

if(E){return qx.bom.Input.getValue(E);
}return this._getProperty(o)||i;
},setWrap:function(w){if(this.__c===m){this._setProperty(p,w);
}else{throw new Error("Text wrapping is only support by textareas!");
}return this;
},getWrap:function(){if(this.__c===m){return this._getProperty(p);
}else{throw new Error("Text wrapping is only support by textareas!");
}}}});
})();
(function(){var Y="change",X="input",W="qx.client",V="text",U="password",T="checkbox",S="radio",R="textarea",Q="keypress",P="opera",J="propertychange",O="blur",M="keydown",I="keyup",H="select-multiple",L="checked",K="value",N="select",G="qx.event.handler.Input";
qx.Class.define(G,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){qx.core.Object.call(this);
this._onChangeCheckedWrapper=qx.lang.Function.listener(this._onChangeChecked,this);
this._onChangeValueWrapper=qx.lang.Function.listener(this._onChangeValue,this);
this._onInputWrapper=qx.lang.Function.listener(this._onInput,this);
this._onPropertyWrapper=qx.lang.Function.listener(this._onProperty,this);
if(qx.core.Variant.isSet(W,P)){this._onKeyDownWrapper=qx.lang.Function.listener(this._onKeyDown,this);
this._onKeyUpWrapper=qx.lang.Function.listener(this._onKeyUp,this);
this._onBlurWrapper=qx.lang.Function.listener(this._onBlur,this);
}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{input:1,change:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{__g:false,__h:null,__i:null,canHandleEvent:function(w,x){var y=w.tagName.toLowerCase();

if(x===X&&(y===X||y===R)){return true;
}
if(x===Y&&(y===X||y===R||y===N)){return true;
}return false;
},registerEvent:qx.core.Variant.select(W,{"mshtml":function(A,B,C){if(!A.__j){var D=A.tagName.toLowerCase();
var E=A.type;

if(E===V||E===U||D===R||E===T||E===S){qx.bom.Event.addNativeListener(A,J,this._onPropertyWrapper);
}
if(E!==T&&E!==S){qx.bom.Event.addNativeListener(A,Y,this._onChangeValueWrapper);
}
if(E===V||E===U){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,A);
qx.bom.Event.addNativeListener(A,Q,this._onKeyPressWrapped);
}A.__j=true;
}},"default":function(t,u,v){if(u===X){this.__k(t);
}else if(u===Y){if(t.type===S||t.type===T){qx.bom.Event.addNativeListener(t,Y,this._onChangeCheckedWrapper);
}else{qx.bom.Event.addNativeListener(t,Y,this._onChangeValueWrapper);
}if(qx.core.Variant.isSet(W,P)){if(t.type===V||t.type===U){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,t);
qx.bom.Event.addNativeListener(t,Q,this._onKeyPressWrapped);
}}}}}),__k:qx.core.Variant.select(W,{"mshtml":null,"webkit":function(p){var q=p.tagName.toLowerCase();
if(qx.bom.client.Engine.VERSION<532&&q==R){qx.bom.Event.addNativeListener(p,Q,this._onInputWrapper);
}qx.bom.Event.addNativeListener(p,X,this._onInputWrapper);
},"opera":function(n){qx.bom.Event.addNativeListener(n,I,this._onKeyUpWrapper);
qx.bom.Event.addNativeListener(n,M,this._onKeyDownWrapper);
qx.bom.Event.addNativeListener(n,O,this._onBlurWrapper);
qx.bom.Event.addNativeListener(n,X,this._onInputWrapper);
},"default":function(z){qx.bom.Event.addNativeListener(z,X,this._onInputWrapper);
}}),unregisterEvent:qx.core.Variant.select(W,{"mshtml":function(ba,bb){if(ba.__j){var bc=ba.tagName.toLowerCase();
var bd=ba.type;

if(bd===V||bd===U||bc===R||bd===T||bd===S){qx.bom.Event.removeNativeListener(ba,J,this._onPropertyWrapper);
}
if(bd!==T&&bd!==S){qx.bom.Event.removeNativeListener(ba,Y,this._onChangeValueWrapper);
}
if(bd===V||bd===U){qx.bom.Event.removeNativeListener(ba,Q,this._onKeyPressWrapped);
}
try{delete ba.__j;
}catch(d){ba.__j=null;
}}},"default":function(k,m){if(m===X){this.__k(k);
}else if(m===Y){if(k.type===S||k.type===T){qx.bom.Event.removeNativeListener(k,Y,this._onChangeCheckedWrapper);
}else{qx.bom.Event.removeNativeListener(k,Y,this._onChangeValueWrapper);
}}
if(qx.core.Variant.isSet(W,P)){if(k.type===V||k.type===U){qx.bom.Event.removeNativeListener(k,Q,this._onKeyPressWrapped);
}}}}),__l:qx.core.Variant.select(W,{"mshtml":null,"webkit":function(g){var h=g.tagName.toLowerCase();
if(qx.bom.client.Engine.VERSION<532&&h==R){qx.bom.Event.removeNativeListener(g,Q,this._onInputWrapper);
}qx.bom.Event.removeNativeListener(g,X,this._onInputWrapper);
},"opera":function(c){qx.bom.Event.removeNativeListener(c,I,this._onKeyUpWrapper);
qx.bom.Event.removeNativeListener(c,M,this._onKeyDownWrapper);
qx.bom.Event.removeNativeListener(c,O,this._onBlurWrapper);
qx.bom.Event.removeNativeListener(c,X,this._onInputWrapper);
},"default":function(b){qx.bom.Event.removeNativeListener(b,X,this._onInputWrapper);
}}),_onKeyPress:qx.core.Variant.select(W,{"mshtml|opera":function(e,f){if(e.keyCode===13){if(f.value!==this.__i){this.__i=f.value;
qx.event.Registration.fireEvent(f,Y,qx.event.type.Data,[f.value]);
}}},"default":null}),_onKeyDown:qx.core.Variant.select(W,{"opera":function(e){if(e.keyCode===13){this.__g=true;
}},"default":null}),_onKeyUp:qx.core.Variant.select(W,{"opera":function(e){if(e.keyCode===13){this.__g=false;
}},"default":null}),_onBlur:qx.core.Variant.select(W,{"opera":function(e){if(this.__h){window.clearTimeout(this.__h);
}},"default":null}),_onInput:qx.event.GlobalError.observeMethod(function(e){var F=e.target;
if(!this.__g){if(qx.core.Variant.isSet(W,P)){this.__h=window.setTimeout(function(){qx.event.Registration.fireEvent(F,X,qx.event.type.Data,[F.value]);
},0);
}else{qx.event.Registration.fireEvent(F,X,qx.event.type.Data,[F.value]);
}}}),_onChangeValue:qx.event.GlobalError.observeMethod(function(e){var s=e.target||e.srcElement;
var r=s.value;

if(s.type===H){var r=[];

for(var i=0,o=s.options,l=o.length;i<l;i++){if(o[i].selected){r.push(o[i].value);
}}}qx.event.Registration.fireEvent(s,Y,qx.event.type.Data,[r]);
}),_onChangeChecked:qx.event.GlobalError.observeMethod(function(e){var j=e.target;

if(j.type===S){if(j.checked){qx.event.Registration.fireEvent(j,Y,qx.event.type.Data,[j.value]);
}}else{qx.event.Registration.fireEvent(j,Y,qx.event.type.Data,[j.checked]);
}}),_onProperty:qx.core.Variant.select(W,{"mshtml":qx.event.GlobalError.observeMethod(function(e){var be=e.target||e.srcElement;
var bf=e.propertyName;

if(bf===K&&(be.type===V||be.type===U||be.tagName.toLowerCase()===R)){if(!be.$$inValueSet){qx.event.Registration.fireEvent(be,X,qx.event.type.Data,[be.value]);
}}else if(bf===L){if(be.type===T){qx.event.Registration.fireEvent(be,Y,qx.event.type.Data,[be.checked]);
}else if(be.checked){qx.event.Registration.fireEvent(be,Y,qx.event.type.Data,[be.value]);
}}}),"default":function(){}})},defer:function(a){qx.event.Registration.addHandler(a);
}});
})();
(function(){var v="",u="select",t="soft",s="off",r="qx.client",q="wrap",p="text",o="mshtml",n="number",m="checkbox",d="select-one",k="input",g="option",c="value",b="radio",f="qx.bom.Input",e="nowrap",h="textarea",a="auto",j="normal";
qx.Class.define(f,{statics:{__f:{text:1,textarea:1,select:1,checkbox:1,radio:1,password:1,hidden:1,submit:1,image:1,file:1,search:1,reset:1,button:1},create:function(y,z,A){{};
var z=z?qx.lang.Object.clone(z):{};
var B;

if(y===h||y===u){B=y;
}else{B=k;
z.type=y;
}return qx.bom.Element.create(B,z,A);
},setValue:function(E,F){var K=E.nodeName.toLowerCase();
var H=E.type;
var Array=qx.lang.Array;
var L=qx.lang.Type;

if(typeof F===n){F+=v;
}
if((H===m||H===b)){if(L.isArray(F)){E.checked=Array.contains(F,E.value);
}else{E.checked=E.value==F;
}}else if(K===u){var G=L.isArray(F);
var M=E.options;
var I,J;

for(var i=0,l=M.length;i<l;i++){I=M[i];
J=I.getAttribute(c);

if(J==null){J=I.text;
}I.selected=G?Array.contains(F,J):F==J;
}
if(G&&F.length==0){E.selectedIndex=-1;
}}else if(H===p&&qx.core.Variant.isSet(r,o)){E.$$inValueSet=true;
E.value=F;
E.$$inValueSet=null;
}else{E.value=F;
}},getValue:function(R){var X=R.nodeName.toLowerCase();

if(X===g){return (R.attributes.value||{}).specified?R.value:R.text;
}
if(X===u){var S=R.selectedIndex;
if(S<0){return null;
}var Y=[];
var bb=R.options;
var ba=R.type==d;
var W=qx.bom.Input;
var V;
for(var i=ba?S:0,U=ba?S+1:bb.length;i<U;i++){var T=bb[i];

if(T.selected){V=W.getValue(T);
if(ba){return V;
}Y.push(V);
}}return Y;
}else{return (R.value||v).replace(/\r/g,v);
}},setWrap:qx.core.Variant.select(r,{"mshtml":function(C,D){C.wrap=D?t:s;
},"gecko|webkit":function(N,O){var Q=O?t:s;
var P=O?v:a;
N.setAttribute(q,Q);
N.style.overflow=P;
},"default":function(w,x){w.style.whiteSpace=x?j:e;
}})}});
})();
(function(){var b="qx.ui.form.IDateForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var a="qx.ui.form.renderer.IFormRenderer";
qx.Interface.define(a,{members:{addItems:function(b,c,d){},addButton:function(e){}}});
})();
(function(){var G="Validation Error",F="%1 is not a number.",E="%1 is not a color! %2",D="",C="%1 is not a string.",B="number",A="'%1' is not an email address.",z="qx.util.Validate",y="%1 is not an url.",x="%1 is not in %2",u="%1 does not fit %2.",w="string",v="%1 is not in the range from [%2, %3].";
qx.Class.define(z,{statics:{number:function(H){return function(R){qx.util.Validate.checkNumber(R,H);
};
},checkNumber:function(g,h){h=h||qx.locale.Manager.tr(F,g);

if((typeof g!==B&&(!(g instanceof Number)))||(!(isFinite(g)))){throw new qx.core.ValidationError(G,h);
}},email:function(S){return function(O){qx.util.Validate.checkEmail(O,S);
};
},checkEmail:function(a,b){b=b||qx.locale.Manager.tr(A,(a||D));
var c=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

if(c.test(a)===false){throw new qx.core.ValidationError(G,b);
}},string:function(t){return function(m){qx.util.Validate.checkString(m,t);
};
},checkString:function(n,o){o=o||qx.locale.Manager.tr(C,n);

if(typeof n!==w&&(!(n instanceof String))){throw new qx.core.ValidationError(G,o);
}},url:function(T){return function(d){qx.util.Validate.checkUrl(d,T);
};
},checkUrl:function(I,J){J=J||qx.locale.Manager.tr(y,I);
var K=/([A-Za-z0-9])+:\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

if(!K.test(I)){throw new qx.core.ValidationError(G,J);
}},color:function(s){return function(i){qx.util.Validate.checkColor(i,s);
};
},checkColor:function(p,q){try{qx.util.ColorUtil.stringToRgb(p);
}catch(e){q=q||qx.locale.Manager.tr(E,p,e);
throw new qx.core.ValidationError(G,q);
}},range:function(L,M,N){return function(j){N=N||qx.locale.Manager.tr(v,j,L,M);

if(j<L||j>M){throw new qx.core.ValidationError(G,N);
}};
},inArray:function(k,l){return function(r){l=l||qx.locale.Manager.tr(x,r,k);

if(k.indexOf(r)===-1){throw new qx.core.ValidationError(G,l);
}};
},regExp:function(P,Q){return function(f){Q=Q||qx.locale.Manager.tr(u,f,P);

if(!P.test(f)){throw new qx.core.ValidationError(G,Q);
}};
}}});
})();
(function(){var b="qx.ui.form.IColorForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var c="qx.ui.form.Resetter";
qx.Class.define(c,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__m=[];
},members:{__m:null,add:function(g){if(this.__q(g)){var h=g.getValue();
}else if(this.__p(g)){var h=g.getSelection();
}else{throw new Error("Item "+g+" not supported for reseting.");
}this.__m.push({item:g,init:h});
},reset:function(){for(var i=0;i<this.__m.length;i++){var q=this.__m[i];
this.__n(q.item,q.init);
}},resetItem:function(n){var o;

for(var i=0;i<this.__m.length;i++){var p=this.__m[i];

if(p.item===n){o=p.init;
break;
}}if(o===undefined){throw new Error("The given item has not been added.");
}this.__n(n,o);
},__n:function(j,k){if(this.__q(j)){j.setValue(k);
}else if(this.__p(j)){j.setSelection(k);
}},redefine:function(){for(var i=0;i<this.__m.length;i++){var d=this.__m[i].item;
this.__m[i].init=this.__o(d);
}},redefineItem:function(a){var b;

for(var i=0;i<this.__m.length;i++){if(this.__m[i].item===a){b=this.__m[i];
break;
}}if(b===undefined){throw new Error("The given item has not been added.");
}b.init=this.__o(b.item);
},__o:function(r){if(this.__q(r)){return r.getValue();
}else if(this.__p(r)){return r.getSelection();
}},__p:function(l){var m=l.constructor;
return qx.Class.hasInterface(m,qx.ui.core.ISingleSelection);
},__q:function(e){var f=e.constructor;
return (qx.Class.hasInterface(f,qx.ui.form.IBooleanForm)||qx.Class.hasInterface(f,qx.ui.form.IColorForm)||qx.Class.hasInterface(f,qx.ui.form.IDateForm)||qx.Class.hasInterface(f,qx.ui.form.INumberForm)||qx.Class.hasInterface(f,qx.ui.form.IStringForm));
}}});
})();
(function(){var s="",r="URL",q="Add",p="keypress",o="Title",n="Add a feed",m="feedreader.view.AddFeedWindow",l="__s",k="user",j="__r",c="icon/16/actions/document-new.png",i="icon/16/actions/dialog-apply.png",g="this.__form",b="right",a="__t",f="Feed Information",d="execute",h="Enter";
qx.Class.define(m,{extend:qx.ui.window.Window,construct:function(v){qx.ui.window.Window.call(this,this.tr(n),c);
this.__r=v;
this.set({modal:true,showMinimize:false,showMaximize:false,allowMaximize:false});
this._addContent();
},members:{__s:null,__t:null,__r:null,__u:null,_addContent:function(){this.setLayout(new qx.ui.layout.VBox(10));
this.__u=new qx.ui.form.Form();
this.__u.addGroupHeader(this.tr(f));
this.__t=new qx.ui.form.TextField().set({required:true,width:250});
this.__u.add(this.__t,this.tr(o));
this.__s=new qx.ui.form.TextField().set({required:true});
this.__u.add(this.__s,this.tr(r),qx.util.Validate.checkUrl);
var w=new qx.ui.form.Button(this.tr(q),i);
w.set({alignX:b,allowGrowX:false});
w.addListener(d,this._addFeed,this);
this.__u.addButton(w);
this.addListener(p,function(e){if(e.getTarget() instanceof qx.ui.form.TextField&&e.getKeyIdentifier()===h){this._addFeed();
}});
this.add(new qx.ui.form.renderer.SinglePlaceholder(this.__u));
},_addFeed:function(e){if(this.__u.validate()){var u=this.__t.getValue();
var t=this.__s.getValue();
this.__r.addFeed(u,t,k);
this.__t.setValue(s);
this.__s.setValue(s);
this.close();
}}},destruct:function(){this.__v=null;
this._disposeObjects(j,a,l,g);
}});
})();
(function(){var k="qx.dynlocale",j="",h="changeLocale",g="visibility",f="on",d=" <span style='color:red'>*</span> ",c="abstract",b="qx.ui.form.renderer.AbstractRenderer",a=" :";
qx.Class.define(b,{type:c,extend:qx.ui.core.Widget,implement:qx.ui.form.renderer.IFormRenderer,construct:function(l){qx.ui.core.Widget.call(this);
this._visibilityBindingIds=[];
if(qx.core.Variant.isSet(k,f)){qx.locale.Manager.getInstance().addListener(h,this._onChangeLocale,this);
this._names=[];
}var o=l.getGroups();

for(var i=0;i<o.length;i++){var n=o[i];
this.addItems(n.items,n.labels,n.title);
}var m=l.getButtons();

for(var i=0;i<m.length;i++){this.addButton(m[i]);
}},members:{_names:null,_visibilityBindingIds:null,_connectVisibility:function(w,x){var y=w.bind(g,x,g);
this._visibilityBindingIds.push({id:y,item:w});
},_onChangeLocale:qx.core.Variant.select(k,{"on":function(e){for(var i=0;i<this._names.length;i++){var p=this._names[i];

if(p.name&&p.name.translate){p.name=p.name.translate();
}var q=this._createLabelText(p.name,p.item);
p.label.setValue(q);
}},"off":null}),_createLabelText:function(name,z){var A=j;

if(z.getRequired()){A=d;
}var B=name.length>0||z.getRequired()?a:j;
return name+A+B;
},addItems:function(t,u,v){throw new Error("Abstract method call");
},addButton:function(r){throw new Error("Abstract method call");
}},destruct:function(){if(qx.core.Variant.isSet(k,f)){qx.locale.Manager.getInstance().removeListener(h,this._onChangeLocale,this);
}this._names=null;
for(var i=0;i<this._visibilityBindingIds.length;i++){var s=this._visibilityBindingIds[i];
s.item.removeBinding(s.id);
}}});
})();
(function(){var h="right",g="bold",f="_buttonRow",e="qx.ui.form.renderer.Single",d="left",c="qx.dynlocale",b="top",a="on";
qx.Class.define(e,{extend:qx.ui.form.renderer.AbstractRenderer,construct:function(p){var q=new qx.ui.layout.Grid();
q.setSpacing(6);
q.setColumnFlex(0,1);
q.setColumnAlign(0,h,b);
this._setLayout(q);
qx.ui.form.renderer.AbstractRenderer.call(this,p);
},members:{_row:0,_buttonRow:null,addItems:function(r,s,t){if(t!=null){this._add(this._createHeader(t),{row:this._row,column:0,colSpan:2});
this._row++;
}for(var i=0;i<r.length;i++){var v=this._createLabel(s[i],r[i]);
this._add(v,{row:this._row,column:0});
var u=r[i];
v.setBuddy(u);
this._add(u,{row:this._row,column:1});
this._row++;
this._connectVisibility(u,v);
if(qx.core.Variant.isSet(c,a)){this._names.push({name:s[i],label:v,item:r[i]});
}}},addButton:function(n){if(this._buttonRow==null){this._buttonRow=new qx.ui.container.Composite();
this._buttonRow.setMarginTop(5);
var o=new qx.ui.layout.HBox();
o.setAlignX(h);
o.setSpacing(5);
this._buttonRow.setLayout(o);
this._add(this._buttonRow,{row:this._row,column:0,colSpan:2});
this._row++;
}this._buttonRow.add(n);
},getLayout:function(){return this._getLayout();
},_createLabel:function(name,j){var k=new qx.ui.basic.Label(this._createLabelText(name,j));
k.setRich(true);
return k;
},_createHeader:function(l){var m=new qx.ui.basic.Label(l);
m.setFont(g);

if(this._row!=0){m.setMarginTop(10);
}m.setAlignX(d);
return m;
}},destruct:function(){if(this._buttonRow){this._buttonRow.removeAll();
this._disposeObjects(f);
}}});
})();
(function(){var n="",m="String",l="complete",k="qx.event.type.Event",j="value instanceof Function || qx.Class.isSubClassOf(value.constructor, qx.ui.form.validation.AsyncValidator)",h="qx.ui.form.validation.Manager",g="This field is required",f="qx.event.type.Data";
qx.Class.define(h,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__w=[];
this.__x={};
this.setRequiredFieldMessage(qx.locale.Manager.tr(g));
},events:{"changeValid":f,"complete":k},properties:{validator:{check:j,init:null,nullable:true},invalidMessage:{check:m,init:n},requiredFieldMessage:{check:m,init:n},context:{nullable:true}},members:{__w:null,__y:null,__x:null,__z:null,add:function(p,q,r){if(!this.__E(p)){throw new Error("Added widget not supported.");
}if(this.__F(p)){if(q!=null){throw new Error("Widgets suporting selection can only be validated "+"in the form validator");
}}var s={item:p,validator:q,valid:null,context:r};
this.__w.push(s);
},validate:function(){var A=true;
this.__z=true;
var x=[];
for(var i=0;i<this.__w.length;i++){var y=this.__w[i].item;
var B=this.__w[i].validator;
x.push(y);
if(B==null){var w=this.__A(y);
A=A&&w;
this.__z=w&&this.__z;
continue;
}var w=this.__B(this.__w[i],y.getValue());
A=w&&A;

if(w!=null){this.__z=w&&this.__z;
}}var z=this.__C(x);

if(qx.lang.Type.isBoolean(z)){this.__z=z&&this.__z;
}A=z&&A;
this.__H(A);

if(qx.lang.Object.isEmpty(this.__x)){this.fireEvent(l);
}return A;
},__A:function(N){if(N.getRequired()){if(this.__F(N)){var O=!!N.getSelection()[0];
}else{var O=!!N.getValue();
}N.setValid(O);
var Q=N.getRequiredInvalidMessage();
var P=Q?Q:this.getRequiredFieldMessage();
N.setInvalidMessage(P);
return O;
}return true;
},__B:function(U,V){var bb=U.item;
var ba=U.context;
var Y=U.validator;
if(this.__D(Y)){this.__x[bb.toHashCode()]=null;
Y.validate(bb,bb.getValue(),this,ba);
return null;
}var X=null;

try{var X=Y.call(ba||this,V,bb);

if(X===undefined){X=true;
}}catch(e){if(e instanceof qx.core.ValidationError){X=false;

if(e.message&&e.message!=qx.type.BaseError.DEFAULTMESSAGE){var W=e.message;
}else{var W=e.getComment();
}bb.setInvalidMessage(W);
}else{throw e;
}}bb.setValid(X);
U.valid=X;
return X;
},__C:function(I){var K=this.getValidator();
var L=this.getContext()||this;

if(K==null){return true;
}this.setInvalidMessage("");

if(this.__D(K)){this.__x[this.toHashCode()]=null;
K.validateForm(I,this,L);
return null;
}
try{var M=K.call(L,I,this);

if(M===undefined){M=true;
}}catch(e){if(e instanceof qx.core.ValidationError){M=false;

if(e.message&&e.message!=qx.type.BaseError.DEFAULTMESSAGE){var J=e.message;
}else{var J=e.getComment();
}this.setInvalidMessage(J);
}else{throw e;
}}return M;
},__D:function(a){var b=false;

if(!qx.lang.Type.isFunction(a)){b=qx.Class.isSubClassOf(a.constructor,qx.ui.form.validation.AsyncValidator);
}return b;
},__E:function(c){var d=c.constructor;
return qx.Class.hasInterface(d,qx.ui.form.IForm);
},__F:function(C){var D=C.constructor;
return qx.Class.hasInterface(D,qx.ui.core.ISingleSelection);
},__G:function(u){var v=u.constructor;
return (qx.Class.hasInterface(v,qx.ui.form.IBooleanForm)||qx.Class.hasInterface(v,qx.ui.form.IColorForm)||qx.Class.hasInterface(v,qx.ui.form.IDateForm)||qx.Class.hasInterface(v,qx.ui.form.INumberForm)||qx.Class.hasInterface(v,qx.ui.form.IStringForm));
},__H:function(G){var H=this.__y;
this.__y=G;
if(H!=G){this.fireDataEvent("changeValid",G,H);
}},getValid:function(){return this.__y;
},isValid:function(){return this.getValid();
},getInvalidMessages:function(){var bc=[];
for(var i=0;i<this.__w.length;i++){var bd=this.__w[i].item;

if(!bd.getValid()){bc.push(bd.getInvalidMessage());
}}if(this.getInvalidMessage()!=n){bc.push(this.getInvalidMessage());
}return bc;
},reset:function(){for(var i=0;i<this.__w.length;i++){var t=this.__w[i];
t.item.setValid(true);
}this.__y=null;
},setItemValid:function(E,F){this.__x[E.toHashCode()]=F;
E.setValid(F);
this.__I();
},setFormValid:function(o){this.__x[this.toHashCode()]=o;
this.__I();
},__I:function(){var S=this.__z;
for(var T in this.__x){var R=this.__x[T];
S=R&&S;
if(R==null){return;
}}this.__H(S);
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
},members:{__Q:null,__R:null,__S:null,__T:null,validate:function(f,g,h,i){this.__T=false;
this.__R=f;
this.__S=h;
this.__Q.call(i||this,this,g);
},validateForm:function(c,d,e){this.__T=true;
this.__S=d;
this.__Q.call(e,c,this);
},setValid:function(j,k){if(this.__T){if(k!==undefined){this.__S.setInvalidMessage(k);
}this.__S.setFormValid(j);
}else{if(k!==undefined){this.__R.setInvalidMessage(k);
}this.__S.setItemValid(this.__R,j);
}}},destruct:function(){this.__S=this.__R=null;
}});
})();
(function(){var b="qx.ui.form.Form",a="";
qx.Class.define(b,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__U=[];
this.__V=[];
this._validationManager=new qx.ui.form.validation.Manager();
this._resetter=new qx.ui.form.Resetter();
},members:{__U:null,_validationManager:null,__W:0,__V:null,_resetter:null,add:function(f,g,h,name,k){if(this.__X()){this.__U.push({title:null,items:[],labels:[],names:[]});
}this.__U[this.__W].items.push(f);
this.__U[this.__W].labels.push(g);
if(name==null){name=g.replace(/\s+|&|-|\+|\*|\/|\||!|\.|,|:|\?|;|~|%|\{|\}|\(|\)|\[|\]|<|>|=|\^|@|\\/g,a);
}this.__U[this.__W].names.push(name);
this._validationManager.add(f,h,k);
this._resetter.add(f);
},addGroupHeader:function(c){if(!this.__X()){this.__W++;
}this.__U.push({title:c,items:[],labels:[],names:[]});
},addButton:function(l){this.__V.push(l);
},__X:function(){return this.__U.length===0;
},reset:function(){this._resetter.reset();
this._validationManager.reset();
},redefineResetter:function(){this._resetter.redefine();
},validate:function(){return this._validationManager.validate();
},getValidationManager:function(){return this._validationManager;
},getGroups:function(){return this.__U;
},getButtons:function(){return this.__V;
},getItems:function(){var d={};
for(var i=0;i<this.__U.length;i++){var e=this.__U[i];
for(var j=0;j<e.names.length;j++){var name=e.names[j];
d[name]=e.items[j];
}}return d;
}}});
})();

});