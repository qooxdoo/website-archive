qx.$$packageData['b1e25445c398']={"locales":{},"resources":{"feedreader/images/combined/icons16.png":[16,96,"png","feedreader"],"qx/icon/Tango/16/actions/dialog-apply.png":[16,16,"png","qx","feedreader/images/combined/icons16.png",0,-80],"qx/icon/Tango/16/actions/document-new.png":[16,16,"png","qx","feedreader/images/combined/icons16.png",0,-16]},"translations":{}};

qx.Part.$$notifyLoad("b1e25445c398", function() {
(function(){var m="showingPlaceholder",l="",k="none",j="qx.dynlocale",i="Boolean",h="qx.client",g="color",f="qx.event.type.Data",d="readonly",c="input",Y="focusin",X="visibility",W="focusout",V="changeLocale",U="on",T="readOnly",S="text",R="_applyTextAlign",Q="px",P="RegExp",t=")",u="syncAppearance",r="change",s="textAlign",p="focused",q="center",n="visible",o="disabled",v="url(",w="off",D="String",B="resize",H="qx.ui.form.AbstractField",F="transparent",L="spellcheck",J="false",y="right",O="PositiveInteger",N="mshtml",M="abstract",x="block",z="webkit",A="_applyReadOnly",C="_applyPlaceholder",E="hidden",G="left",I="qx/static/blank.gif",K="absolute";
qx.Class.define(H,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm,qx.ui.form.IForm],include:[qx.ui.form.MForm],type:M,construct:function(by){qx.ui.core.Widget.call(this);

if(by!=null){this.setValue(by);
}this.getContentElement().addListener(r,this._onChangeContent,this);
this.addListener(u,this._syncPlaceholder,this);
if(qx.core.Variant.isSet(j,U)){qx.locale.Manager.getInstance().addListener(V,this._onChangeLocale,this);
}},events:{"input":f,"changeValue":f},properties:{textAlign:{check:[G,q,y],nullable:true,themeable:true,apply:R},readOnly:{check:i,apply:A,init:false},selectable:{refine:true,init:true},focusable:{refine:true,init:true},maxLength:{check:O,init:Infinity},liveUpdate:{check:i,init:false},placeholder:{check:D,nullable:true,apply:C},filter:{check:P,nullable:true,init:null}},members:{__J:true,__K:null,__L:null,__M:null,getFocusElement:function(){var bH=this.getContentElement();

if(bH){return bH;
}},_createInputElement:function(){return new qx.html.Input(S);
},renderLayout:function(bI,top,bJ,bK){var bL=this._updateInsets;
var bP=qx.ui.core.Widget.prototype.renderLayout.call(this,bI,top,bJ,bK);
if(!bP){return;
}var bN=bP.size||bL;
var bQ=Q;

if(bN||bP.local||bP.margin){var bM=this.getInsets();
var innerWidth=bJ-bM.left-bM.right;
var innerHeight=bK-bM.top-bM.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}var bO=this.getContentElement();

if(bL){this.__P().setStyles({"left":bM.left+bQ,"top":bM.top+bQ});
}
if(bN){this.__P().setStyles({"width":innerWidth+bQ,"height":innerHeight+bQ});
bO.setStyles({"width":innerWidth+bQ,"height":innerHeight+bQ});
this._renderContentElement(innerHeight,bO);
}},_renderContentElement:function(innerHeight,bm){},_createContentElement:function(){var bB=this._createInputElement();
bB.setStyles({"border":k,"padding":0,"margin":0,"display":x,"background":F,"outline":k,"appearance":k,"position":K,"autoComplete":w});
bB.setSelectable(this.getSelectable());
bB.setEnabled(this.getEnabled());
bB.addListener(c,this._onHtmlInput,this);
bB.setAttribute(L,J);
if(qx.core.Variant.isSet(h,z)){bB.setStyle(B,k);
}if(qx.core.Variant.isSet(h,N)){bB.setStyles({backgroundImage:v+qx.util.ResourceManager.getInstance().toUri(I)+t});
}return bB;
},_applyEnabled:function(a,b){qx.ui.core.Widget.prototype._applyEnabled.call(this,a,b);
this.getContentElement().setEnabled(a);

if(a){this._showPlaceholder();
}else{this._removePlaceholder();
}},__N:{width:16,height:16},_getContentHint:function(){return {width:this.__N.width*10,height:this.__N.height||16};
},_applyFont:function(bg,bh){var bi;

if(bg){var bj=qx.theme.manager.Font.getInstance().resolve(bg);
bi=bj.getStyles();
}else{bi=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(bi);
this.__P().setStyles(bi);
if(bg){this.__N=qx.bom.Label.getTextSize("A",bi);
}else{delete this.__N;
}qx.ui.core.queue.Layout.add(this);
},_applyTextColor:function(bz,bA){if(bz){this.getContentElement().setStyle(g,qx.theme.manager.Color.getInstance().resolve(bz));
}else{this.getContentElement().removeStyle(g);
}},tabFocus:function(){qx.ui.core.Widget.prototype.tabFocus.call(this);
this.selectAllText();
},_getTextSize:function(){return this.__N;
},_onHtmlInput:function(e){var bq=e.getData();
var bp=true;
this.__J=false;
if(this.getFilter()!=null){var br=l;
var bn=bq.search(this.getFilter());
var bo=bq;

while(bn>=0){br=br+(bo.charAt(bn));
bo=bo.substring(bn+1,bo.length);
bn=bo.search(this.getFilter());
}
if(br!=bq){bp=false;
bq=br;
this.getContentElement().setValue(bq);
}}if(bq.length>this.getMaxLength()){var bp=false;
this.getContentElement().setValue(bq.substr(0,this.getMaxLength()));
}if(bp){this.fireDataEvent(c,bq,this.__M);
this.__M=bq;
if(this.getLiveUpdate()){this.__O(bq);
}}},__O:function(bc){var bd=this.__L;
this.__L=bc;

if(bd!=bc){this.fireNonBubblingEvent("changeValue",qx.event.type.Data,[bc,bd]);
}},setValue:function(bD){if(bD===null){if(this.__J){return bD;
}bD=l;
this.__J=true;
}else{this.__J=false;
this._removePlaceholder();
}
if(qx.lang.Type.isString(bD)){var bF=this.getContentElement();

if(bD.length>this.getMaxLength()){bD=bD.substr(0,this.getMaxLength());
}
if(bF.getValue()!=bD){var bG=bF.getValue();
bF.setValue(bD);
var bE=this.__J?null:bD;
this.__L=bG;
this.__O(bE);
}this._showPlaceholder();
return bD;
}throw new Error("Invalid value type: "+bD);
},getValue:function(){var bC=this.getContentElement().getValue();
return this.__J?null:bC;
},resetValue:function(){this.setValue(null);
},_onChangeContent:function(e){this.__J=e.getData()===null;
this.__O(e.getData());
},getTextSelection:function(){return this.getContentElement().getTextSelection();
},getTextSelectionLength:function(){return this.getContentElement().getTextSelectionLength();
},getTextSelectionStart:function(){return this.getContentElement().getTextSelectionStart();
},getTextSelectionEnd:function(){return this.getContentElement().getTextSelectionEnd();
},setTextSelection:function(bk,bl){this.getContentElement().setTextSelection(bk,bl);
},clearTextSelection:function(){this.getContentElement().clearTextSelection();
},selectAllText:function(){this.setTextSelection(0);
},_showPlaceholder:function(){var bb=this.getValue()||l;
var ba=this.getPlaceholder();

if(ba!=null&&bb==l&&!this.hasState(p)&&!this.hasState(o)){if(this.hasState(m)){this._syncPlaceholder();
}else{this.addState(m);
}}},_removePlaceholder:function(){if(this.hasState(m)){this.__P().setStyle(X,E);
this.removeState(m);
}},_syncPlaceholder:function(){if(this.hasState(m)){this.__P().setStyle(X,n);
}},__P:function(){if(this.__K==null){this.__K=new qx.html.Label();
var bu=qx.theme.manager.Color.getInstance();
this.__K.setStyles({"visibility":"hidden","zIndex":6,"position":"absolute","color":bu.resolve("text-placeholder")});
this.getContainerElement().add(this.__K);
}return this.__K;
},_onChangeLocale:qx.core.Variant.select(j,{"on":function(e){var content=this.getPlaceholder();

if(content&&content.translate){this.setPlaceholder(content.translate());
}},"off":null}),_applyPlaceholder:function(bs,bt){this.__P().setValue(bs);

if(bs!=null){this.addListener(Y,this._removePlaceholder,this);
this.addListener(W,this._showPlaceholder,this);
this._showPlaceholder();
}else{this.removeListener(Y,this._removePlaceholder,this);
this.removeListener(W,this._showPlaceholder,this);
this._removePlaceholder();
}},_applyTextAlign:function(be,bf){this.getContentElement().setStyle(s,be);
},_applyReadOnly:function(bv,bw){var bx=this.getContentElement();
bx.setAttribute(T,bv);

if(bv){this.addState(d);
this.setFocusable(false);
}else{this.removeState(d);
this.setFocusable(true);
}}},destruct:function(){this.__K=null;

if(qx.core.Variant.isSet(j,U)){qx.locale.Manager.getInstance().removeListener(V,this._onChangeLocale,this);
}}});
})();
(function(){var b="qx.ui.form.TextField",a="textfield";
qx.Class.define(b,{extend:qx.ui.form.AbstractField,properties:{appearance:{refine:true,init:a},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{_renderContentElement:function(innerHeight,c){}}});
})();
(function(){var p="none",o="wrap",n="value",m="qx.client",l="textarea",k="off",j="on",i="qxSelectable",h="",g="webkit",c="input",f="qx.html.Input",e="select",b="disabled",a="read-only",d="userSelect";
qx.Class.define(f,{extend:qx.html.Element,construct:function(B,C,D){if(B===e||B===l){var E=B;
}else{E=c;
}qx.html.Element.call(this,E,C,D);
this.__c=B;
},members:{__c:null,__d:null,__e:null,_createDomElement:function(){return qx.bom.Input.create(this.__c);
},_applyProperty:function(name,q){qx.html.Element.prototype._applyProperty.call(this,name,q);
var r=this.getDomElement();

if(name===n){qx.bom.Input.setValue(r,q);
}else if(name===o){qx.bom.Input.setWrap(r,q);
}},setEnabled:qx.core.Variant.select(m,{"webkit":function(u){this.__e=u;

if(!u){this.setStyles({"userModify":a,"userSelect":p});
}else{this.setStyles({"userModify":null,"userSelect":this.__d?null:p});
}},"default":function(w){this.setAttribute(b,w===false);
}}),setSelectable:qx.core.Variant.select(m,{"webkit":function(s){this.__d=s;
this.setAttribute(i,s?j:k);
if(qx.core.Variant.isSet(m,g)){var t=this.__e?s?null:p:p;
this.setStyle(d,t);
}},"default":function(x){this.setAttribute(i,x?j:k);
}}),setValue:function(y){var z=this.getDomElement();

if(z){if(z.value!=y){qx.bom.Input.setValue(z,y);
}}else{this._setProperty(n,y);
}return this;
},getValue:function(){var v=this.getDomElement();

if(v){return qx.bom.Input.getValue(v);
}return this._getProperty(n)||h;
},setWrap:function(A){if(this.__c===l){this._setProperty(o,A);
}else{throw new Error("Text wrapping is only support by textareas!");
}return this;
},getWrap:function(){if(this.__c===l){return this._getProperty(o);
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
}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{input:1,change:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{__g:false,__h:null,__i:null,canHandleEvent:function(bb,bc){var bd=bb.tagName.toLowerCase();

if(bc===X&&(bd===X||bd===R)){return true;
}
if(bc===Y&&(bd===X||bd===R||bd===N)){return true;
}return false;
},registerEvent:qx.core.Variant.select(W,{"mshtml":function(n,p,q){if(!n.__j){var r=n.tagName.toLowerCase();
var s=n.type;

if(s===V||s===U||r===R||s===T||s===S){qx.bom.Event.addNativeListener(n,J,this._onPropertyWrapper);
}
if(s!==T&&s!==S){qx.bom.Event.addNativeListener(n,Y,this._onChangeValueWrapper);
}
if(s===V||s===U){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,n);
qx.bom.Event.addNativeListener(n,Q,this._onKeyPressWrapped);
}n.__j=true;
}},"default":function(D,E,F){if(E===X){this.__k(D);
}else if(E===Y){if(D.type===S||D.type===T){qx.bom.Event.addNativeListener(D,Y,this._onChangeCheckedWrapper);
}else{qx.bom.Event.addNativeListener(D,Y,this._onChangeValueWrapper);
}if(qx.core.Variant.isSet(W,P)){if(D.type===V||D.type===U){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,D);
qx.bom.Event.addNativeListener(D,Q,this._onKeyPressWrapped);
}}}}}),__k:qx.core.Variant.select(W,{"mshtml":null,"webkit":function(a){var b=a.tagName.toLowerCase();
if(qx.bom.client.Engine.VERSION<532&&b==R){qx.bom.Event.addNativeListener(a,Q,this._onInputWrapper);
}qx.bom.Event.addNativeListener(a,X,this._onInputWrapper);
},"opera":function(t){qx.bom.Event.addNativeListener(t,I,this._onKeyUpWrapper);
qx.bom.Event.addNativeListener(t,M,this._onKeyDownWrapper);
qx.bom.Event.addNativeListener(t,O,this._onBlurWrapper);
qx.bom.Event.addNativeListener(t,X,this._onInputWrapper);
},"default":function(be){qx.bom.Event.addNativeListener(be,X,this._onInputWrapper);
}}),unregisterEvent:qx.core.Variant.select(W,{"mshtml":function(d,f){if(d.__j){var g=d.tagName.toLowerCase();
var h=d.type;

if(h===V||h===U||g===R||h===T||h===S){qx.bom.Event.removeNativeListener(d,J,this._onPropertyWrapper);
}
if(h!==T&&h!==S){qx.bom.Event.removeNativeListener(d,Y,this._onChangeValueWrapper);
}
if(h===V||h===U){qx.bom.Event.removeNativeListener(d,Q,this._onKeyPressWrapped);
}
try{delete d.__j;
}catch(A){d.__j=null;
}}},"default":function(x,y){if(y===X){this.__k(x);
}else if(y===Y){if(x.type===S||x.type===T){qx.bom.Event.removeNativeListener(x,Y,this._onChangeCheckedWrapper);
}else{qx.bom.Event.removeNativeListener(x,Y,this._onChangeValueWrapper);
}}
if(qx.core.Variant.isSet(W,P)){if(x.type===V||x.type===U){qx.bom.Event.removeNativeListener(x,Q,this._onKeyPressWrapped);
}}}}),__l:qx.core.Variant.select(W,{"mshtml":null,"webkit":function(v){var w=v.tagName.toLowerCase();
if(qx.bom.client.Engine.VERSION<532&&w==R){qx.bom.Event.removeNativeListener(v,Q,this._onInputWrapper);
}qx.bom.Event.removeNativeListener(v,X,this._onInputWrapper);
},"opera":function(c){qx.bom.Event.removeNativeListener(c,I,this._onKeyUpWrapper);
qx.bom.Event.removeNativeListener(c,M,this._onKeyDownWrapper);
qx.bom.Event.removeNativeListener(c,O,this._onBlurWrapper);
qx.bom.Event.removeNativeListener(c,X,this._onInputWrapper);
},"default":function(bf){qx.bom.Event.removeNativeListener(bf,X,this._onInputWrapper);
}}),_onKeyPress:qx.core.Variant.select(W,{"mshtml|opera":function(e,u){if(e.keyCode===13){if(u.value!==this.__i){this.__i=u.value;
qx.event.Registration.fireEvent(u,Y,qx.event.type.Data,[u.value]);
}}},"default":null}),_onKeyDown:qx.core.Variant.select(W,{"opera":function(e){if(e.keyCode===13){this.__g=true;
}},"default":null}),_onKeyUp:qx.core.Variant.select(W,{"opera":function(e){if(e.keyCode===13){this.__g=false;
}},"default":null}),_onBlur:qx.core.Variant.select(W,{"opera":function(e){if(this.__h){window.clearTimeout(this.__h);
}},"default":null}),_onInput:qx.event.GlobalError.observeMethod(function(e){var m=e.target;
if(!this.__g){if(qx.core.Variant.isSet(W,P)){this.__h=window.setTimeout(function(){qx.event.Registration.fireEvent(m,X,qx.event.type.Data,[m.value]);
},0);
}else{qx.event.Registration.fireEvent(m,X,qx.event.type.Data,[m.value]);
}}}),_onChangeValue:qx.event.GlobalError.observeMethod(function(e){var C=e.target||e.srcElement;
var B=C.value;

if(C.type===H){var B=[];

for(var i=0,o=C.options,l=o.length;i<l;i++){if(o[i].selected){B.push(o[i].value);
}}}qx.event.Registration.fireEvent(C,Y,qx.event.type.Data,[B]);
}),_onChangeChecked:qx.event.GlobalError.observeMethod(function(e){var ba=e.target;

if(ba.type===S){if(ba.checked){qx.event.Registration.fireEvent(ba,Y,qx.event.type.Data,[ba.value]);
}}else{qx.event.Registration.fireEvent(ba,Y,qx.event.type.Data,[ba.checked]);
}}),_onProperty:qx.core.Variant.select(W,{"mshtml":qx.event.GlobalError.observeMethod(function(e){var j=e.target||e.srcElement;
var k=e.propertyName;

if(k===K&&(j.type===V||j.type===U||j.tagName.toLowerCase()===R)){if(!j.$$inValueSet){qx.event.Registration.fireEvent(j,X,qx.event.type.Data,[j.value]);
}}else if(k===L){if(j.type===T){qx.event.Registration.fireEvent(j,Y,qx.event.type.Data,[j.checked]);
}else if(j.checked){qx.event.Registration.fireEvent(j,Y,qx.event.type.Data,[j.value]);
}}}),"default":function(){}})},defer:function(z){qx.event.Registration.addHandler(z);
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
},setValue:function(E,F){var K=E.nodeName.toLowerCase();
var H=E.type;
var Array=qx.lang.Array;
var L=qx.lang.Type;

if(typeof F===m){F+=v;
}
if((H===d||H===f)){if(L.isArray(F)){E.checked=Array.contains(F,E.value);
}else{E.checked=E.value==F;
}}else if(K===u){var G=L.isArray(F);
var M=E.options;
var I,J;

for(var i=0,l=M.length;i<l;i++){I=M[i];
J=I.getAttribute(b);

if(J==null){J=I.text;
}I.selected=G?Array.contains(F,J):F==J;
}
if(G&&F.length==0){E.selectedIndex=-1;
}}else if((H===o||H===q)&&qx.core.Variant.isSet(r,n)){E.$$inValueSet=true;
E.value=F;
E.$$inValueSet=null;
}else{E.value=F;
}},getValue:function(R){var X=R.nodeName.toLowerCase();

if(X===c){return (R.attributes.value||{}).specified?R.value:R.text;
}
if(X===u){var S=R.selectedIndex;
if(S<0){return null;
}var Y=[];
var bb=R.options;
var ba=R.type==k;
var W=qx.bom.Input;
var V;
for(var i=ba?S:0,U=ba?S+1:bb.length;i<U;i++){var T=bb[i];

if(T.selected){V=W.getValue(T);
if(ba){return V;
}Y.push(V);
}}return Y;
}else{return (R.value||v).replace(/\r/g,v);
}},setWrap:qx.core.Variant.select(r,{"mshtml":function(N,O){N.wrap=O?t:s;
},"gecko|webkit":function(A,B){var D=B?t:s;
var C=B?v:a;
A.setAttribute(p,D);
A.style.overflow=C;
},"default":function(P,Q){P.style.whiteSpace=Q?j:h;
}})}});
})();
(function(){var b="qx.ui.form.IDateForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var a="qx.ui.form.renderer.IFormRenderer";
qx.Interface.define(a,{members:{addItems:function(b,c,d){},addButton:function(e){}}});
})();
(function(){var L="Validation Error",K="%1 is not a number.",J="%1 is not a color! %2",I="",H="%1 is not a string.",G="number",F="'%1' is not an email address.",E="qx.util.Validate",D="%1 is not an url.",C="%1 is not in %2",z="%1 does not fit %2.",B="string",A="%1 is not in the range from [%2, %3].";
qx.Class.define(E,{statics:{number:function(a){return function(l){qx.util.Validate.checkNumber(l,a);
};
},checkNumber:function(j,k){k=k||qx.locale.Manager.tr(K,j);

if((typeof j!==G&&(!(j instanceof Number)))||(!(isFinite(j)))){throw new qx.core.ValidationError(L,k);
}},email:function(b){return function(f){qx.util.Validate.checkEmail(f,b);
};
},checkEmail:function(v,w){w=w||qx.locale.Manager.tr(F,(v||I));
var x=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

if(x.test(v)===false){throw new qx.core.ValidationError(L,w);
}},string:function(i){return function(S){qx.util.Validate.checkString(S,i);
};
},checkString:function(Q,R){R=R||qx.locale.Manager.tr(H,Q);

if(typeof Q!==B&&(!(Q instanceof String))){throw new qx.core.ValidationError(L,R);
}},url:function(y){return function(g){qx.util.Validate.checkUrl(g,y);
};
},checkUrl:function(m,n){n=n||qx.locale.Manager.tr(D,m);
var o=/([A-Za-z0-9])+:\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

if(!o.test(m)){throw new qx.core.ValidationError(L,n);
}},color:function(r){return function(h){qx.util.Validate.checkColor(h,r);
};
},checkColor:function(O,P){try{qx.util.ColorUtil.stringToRgb(O);
}catch(e){P=P||qx.locale.Manager.tr(J,O,e);
throw new qx.core.ValidationError(L,P);
}},range:function(s,t,u){return function(c){u=u||qx.locale.Manager.tr(A,c,s,t);

if(c<s||c>t){throw new qx.core.ValidationError(L,u);
}};
},inArray:function(M,N){return function(d){N=N||qx.locale.Manager.tr(C,d,M);

if(M.indexOf(d)===-1){throw new qx.core.ValidationError(L,N);
}};
},regExp:function(p,q){return function(T){q=q||qx.locale.Manager.tr(z,T,p);

if(!p.test(T)){throw new qx.core.ValidationError(L,q);
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
},members:{__m:null,add:function(d){if(this.__q(d)){var e=d.getValue();
}else if(this.__p(d)){var e=d.getSelection();
}else{throw new Error("Item "+d+" not supported for reseting.");
}this.__m.push({item:d,init:e});
},reset:function(){for(var i=0;i<this.__m.length;i++){var o=this.__m[i];
this.__n(o.item,o.init);
}},resetItem:function(j){var k;

for(var i=0;i<this.__m.length;i++){var l=this.__m[i];

if(l.item===j){k=l.init;
break;
}}if(k===undefined){throw new Error("The given item has not been added.");
}this.__n(j,k);
},__n:function(b,c){if(this.__q(b)){b.setValue(c);
}else if(this.__p(b)){b.setSelection(c);
}},redefine:function(){for(var i=0;i<this.__m.length;i++){var f=this.__m[i].item;
this.__m[i].init=this.__o(f);
}},redefineItem:function(m){var n;

for(var i=0;i<this.__m.length;i++){if(this.__m[i].item===m){n=this.__m[i];
break;
}}if(n===undefined){throw new Error("The given item has not been added.");
}n.init=this.__o(n.item);
},__o:function(r){if(this.__q(r)){return r.getValue();
}else if(this.__p(r)){return r.getSelection();
}},__p:function(p){var q=p.constructor;
return qx.Class.hasInterface(q,qx.ui.core.ISingleSelection);
},__q:function(g){var h=g.constructor;
return (qx.Class.hasInterface(h,qx.ui.form.IBooleanForm)||qx.Class.hasInterface(h,qx.ui.form.IColorForm)||qx.Class.hasInterface(h,qx.ui.form.IDateForm)||qx.Class.hasInterface(h,qx.ui.form.INumberForm)||qx.Class.hasInterface(h,qx.ui.form.IStringForm));
}},destruct:function(){this.__m=null;
}});
})();
(function(){var s="",r="URL",q="Add",p="keypress",o="Title",n="Add a feed",m="feedreader.view.AddFeedWindow",l="__s",k="user",j="__r",c="icon/16/actions/document-new.png",i="icon/16/actions/dialog-apply.png",g="this.__form",b="right",a="__t",f="Feed Information",d="execute",h="Enter";
qx.Class.define(m,{extend:qx.ui.window.Window,construct:function(t){qx.ui.window.Window.call(this,this.tr(n),c);
this.__r=t;
this.set({modal:true,showMinimize:false,showMaximize:false,allowMaximize:false});
this._addContent();
},members:{__s:null,__t:null,__r:null,__u:null,_addContent:function(){this.setLayout(new qx.ui.layout.VBox(10));
this.__u=new qx.ui.form.Form();
this.__u.addGroupHeader(this.tr(f));
this.__t=new qx.ui.form.TextField().set({required:true,width:250});
this.__u.add(this.__t,this.tr(o));
this.__s=new qx.ui.form.TextField().set({required:true});
this.__u.add(this.__s,this.tr(r),qx.util.Validate.checkUrl);
var u=new qx.ui.form.Button(this.tr(q),i);
u.set({alignX:b,allowGrowX:false});
u.addListener(d,this._addFeed,this);
this.__u.addButton(u);
this.addListener(p,function(e){if(e.getTarget() instanceof qx.ui.form.TextField&&e.getKeyIdentifier()===h){this._addFeed();
}});
this.add(new qx.ui.form.renderer.SinglePlaceholder(this.__u));
},_addFeed:function(e){if(this.__u.validate()){var w=this.__t.getValue();
var v=this.__s.getValue();
this.__r.addFeed(w,v,k);
this.__t.setValue(s);
this.__s.setValue(s);
this.close();
}}},destruct:function(){this.__v=null;
this._disposeObjects(j,a,l,g);
}});
})();
(function(){var k="qx.dynlocale",j="",h="changeLocale",g="visibility",f="on",d=" <span style='color:red'>*</span> ",c="abstract",b="qx.ui.form.renderer.AbstractRenderer",a=" :";
qx.Class.define(b,{type:c,extend:qx.ui.core.Widget,implement:qx.ui.form.renderer.IFormRenderer,construct:function(v){qx.ui.core.Widget.call(this);
this._visibilityBindingIds=[];
if(qx.core.Variant.isSet(k,f)){qx.locale.Manager.getInstance().addListener(h,this._onChangeLocale,this);
this._names=[];
}var y=v.getGroups();

for(var i=0;i<y.length;i++){var x=y[i];
this.addItems(x.items,x.labels,x.title);
}var w=v.getButtons();

for(var i=0;i<w.length;i++){this.addButton(w[i]);
}},members:{_names:null,_visibilityBindingIds:null,_connectVisibility:function(s,t){var u=s.bind(g,t,g);
this._visibilityBindingIds.push({id:u,item:s});
},_onChangeLocale:qx.core.Variant.select(k,{"on":function(e){for(var i=0;i<this._names.length;i++){var l=this._names[i];

if(l.name&&l.name.translate){l.name=l.name.translate();
}var m=this._createLabelText(l.name,l.item);
l.label.setValue(m);
}},"off":null}),_createLabelText:function(name,p){var q=j;

if(p.getRequired()){q=d;
}var r=name.length>0||p.getRequired()?a:j;
return name+q+r;
},addItems:function(z,A,B){throw new Error("Abstract method call");
},addButton:function(o){throw new Error("Abstract method call");
}},destruct:function(){if(qx.core.Variant.isSet(k,f)){qx.locale.Manager.getInstance().removeListener(h,this._onChangeLocale,this);
}this._names=null;
for(var i=0;i<this._visibilityBindingIds.length;i++){var n=this._visibilityBindingIds[i];
n.item.removeBinding(n.id);
}}});
})();
(function(){var h="right",g="bold",f="_buttonRow",e="qx.ui.form.renderer.Single",d="left",c="qx.dynlocale",b="top",a="on";
qx.Class.define(e,{extend:qx.ui.form.renderer.AbstractRenderer,construct:function(n){var o=new qx.ui.layout.Grid();
o.setSpacing(6);
o.setColumnFlex(0,1);
o.setColumnAlign(0,h,b);
this._setLayout(o);
qx.ui.form.renderer.AbstractRenderer.call(this,n);
},members:{_row:0,_buttonRow:null,addItems:function(p,q,r){if(r!=null){this._add(this._createHeader(r),{row:this._row,column:0,colSpan:2});
this._row++;
}for(var i=0;i<p.length;i++){var t=this._createLabel(q[i],p[i]);
this._add(t,{row:this._row,column:0});
var s=p[i];
t.setBuddy(s);
this._add(s,{row:this._row,column:1});
this._row++;
this._connectVisibility(s,t);
if(qx.core.Variant.isSet(c,a)){this._names.push({name:q[i],label:t,item:p[i]});
}}},addButton:function(j){if(this._buttonRow==null){this._buttonRow=new qx.ui.container.Composite();
this._buttonRow.setMarginTop(5);
var k=new qx.ui.layout.HBox();
k.setAlignX(h);
k.setSpacing(5);
this._buttonRow.setLayout(k);
this._add(this._buttonRow,{row:this._row,column:0,colSpan:2});
this._row++;
}this._buttonRow.add(j);
},getLayout:function(){return this._getLayout();
},_createLabel:function(name,u){var v=new qx.ui.basic.Label(this._createLabelText(name,u));
v.setRich(true);
return v;
},_createHeader:function(l){var m=new qx.ui.basic.Label(l);
m.setFont(g);

if(this._row!=0){m.setMarginTop(10);
}m.setAlignX(d);
return m;
}},destruct:function(){if(this._buttonRow){this._buttonRow.removeAll();
this._disposeObjects(f);
}}});
})();
(function(){var j="",h="String",g="complete",f="qx.event.type.Event",d="value instanceof Function || qx.Class.isSubClassOf(value.constructor, qx.ui.form.validation.AsyncValidator)",c="qx.ui.form.validation.Manager",b="This field is required",a="qx.event.type.Data";
qx.Class.define(c,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__w=[];
this.__x={};
this.setRequiredFieldMessage(qx.locale.Manager.tr(b));
},events:{"changeValid":a,"complete":f},properties:{validator:{check:d,init:null,nullable:true},invalidMessage:{check:h,init:j},requiredFieldMessage:{check:h,init:j},context:{nullable:true}},members:{__w:null,__y:null,__x:null,__z:null,add:function(X,Y,ba){if(!this.__E(X)){throw new Error("Added widget not supported.");
}if(this.__F(X)){if(Y!=null){throw new Error("Widgets supporting selection can only be validated "+"in the form validator");
}}var bb={item:X,validator:Y,valid:null,context:ba};
this.__w.push(bb);
},validate:function(){var F=true;
this.__z=true;
var C=[];
for(var i=0;i<this.__w.length;i++){var D=this.__w[i].item;
var G=this.__w[i].validator;
C.push(D);
if(G==null){var B=this.__A(D);
F=F&&B;
this.__z=B&&this.__z;
continue;
}var B=this.__B(this.__w[i],D.getValue());
F=B&&F;

if(B!=null){this.__z=B&&this.__z;
}}var E=this.__C(C);

if(qx.lang.Type.isBoolean(E)){this.__z=E&&this.__z;
}F=E&&F;
this.__H(F);

if(qx.lang.Object.isEmpty(this.__x)){this.fireEvent(g);
}return F;
},__A:function(u){if(u.getRequired()){if(this.__F(u)){var v=!!u.getSelection()[0];
}else{var v=!!u.getValue();
}u.setValid(v);
var x=u.getRequiredInvalidMessage();
var w=x?x:this.getRequiredFieldMessage();
u.setInvalidMessage(w);
return v;
}return true;
},__B:function(n,o){var t=n.item;
var s=n.context;
var r=n.validator;
if(this.__D(r)){this.__x[t.toHashCode()]=null;
r.validate(t,t.getValue(),this,s);
return null;
}var q=null;

try{var q=r.call(s||this,o,t);

if(q===undefined){q=true;
}}catch(e){if(e instanceof qx.core.ValidationError){q=false;

if(e.message&&e.message!=qx.type.BaseError.DEFAULTMESSAGE){var p=e.message;
}else{var p=e.getComment();
}t.setInvalidMessage(p);
}else{throw e;
}}t.setValid(q);
n.valid=q;
return q;
},__C:function(H){var J=this.getValidator();
var K=this.getContext()||this;

if(J==null){return true;
}this.setInvalidMessage("");

if(this.__D(J)){this.__x[this.toHashCode()]=null;
J.validateForm(H,this,K);
return null;
}
try{var L=J.call(K,H,this);

if(L===undefined){L=true;
}}catch(e){if(e instanceof qx.core.ValidationError){L=false;

if(e.message&&e.message!=qx.type.BaseError.DEFAULTMESSAGE){var I=e.message;
}else{var I=e.getComment();
}this.setInvalidMessage(I);
}else{throw e;
}}return L;
},__D:function(M){var N=false;

if(!qx.lang.Type.isFunction(M)){N=qx.Class.isSubClassOf(M.constructor,qx.ui.form.validation.AsyncValidator);
}return N;
},__E:function(y){var z=y.constructor;
return qx.Class.hasInterface(z,qx.ui.form.IForm);
},__F:function(S){var T=S.constructor;
return qx.Class.hasInterface(T,qx.ui.core.ISingleSelection);
},__G:function(Q){var R=Q.constructor;
return (qx.Class.hasInterface(R,qx.ui.form.IBooleanForm)||qx.Class.hasInterface(R,qx.ui.form.IColorForm)||qx.Class.hasInterface(R,qx.ui.form.IDateForm)||qx.Class.hasInterface(R,qx.ui.form.INumberForm)||qx.Class.hasInterface(R,qx.ui.form.IStringForm));
},__H:function(U){var V=this.__y;
this.__y=U;
if(V!=U){this.fireDataEvent("changeValid",U,V);
}},getValid:function(){return this.__y;
},isValid:function(){return this.getValid();
},getInvalidMessages:function(){var bc=[];
for(var i=0;i<this.__w.length;i++){var bd=this.__w[i].item;

if(!bd.getValid()){bc.push(bd.getInvalidMessage());
}}if(this.getInvalidMessage()!=j){bc.push(this.getInvalidMessage());
}return bc;
},reset:function(){for(var i=0;i<this.__w.length;i++){var W=this.__w[i];
W.item.setValid(true);
}this.__y=null;
},setItemValid:function(O,P){this.__x[O.toHashCode()]=P;
O.setValid(P);
this.__I();
},setFormValid:function(A){this.__x[this.toHashCode()]=A;
this.__I();
},__I:function(){var l=this.__z;
for(var m in this.__x){var k=this.__x[m];
l=k&&l;
if(k==null){return;
}}this.__H(l);
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
},members:{__Q:null,__R:null,__S:null,__T:null,validate:function(c,d,e,f){this.__T=false;
this.__R=c;
this.__S=e;
this.__Q.call(f||this,this,d);
},validateForm:function(g,h,i){this.__T=true;
this.__S=h;
this.__Q.call(i,g,this);
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
},members:{__U:null,_validationManager:null,__W:0,__V:null,_resetter:null,add:function(e,f,g,name,h){if(this.__X()){this.__U.push({title:null,items:[],labels:[],names:[]});
}this.__U[this.__W].items.push(e);
this.__U[this.__W].labels.push(f);
if(name==null){name=f.replace(/\s+|&|-|\+|\*|\/|\||!|\.|,|:|\?|;|~|%|\{|\}|\(|\)|\[|\]|<|>|=|\^|@|\\/g,a);
}this.__U[this.__W].names.push(name);
this._validationManager.add(e,g,h);
this._resetter.add(e);
},addGroupHeader:function(k){if(!this.__X()){this.__W++;
}this.__U.push({title:k,items:[],labels:[],names:[]});
},addButton:function(l){this.__V.push(l);
},__X:function(){return this.__U.length===0;
},reset:function(){this._resetter.reset();
this._validationManager.reset();
},redefineResetter:function(){this._resetter.redefine();
},validate:function(){return this._validationManager.validate();
},getValidationManager:function(){return this._validationManager;
},getGroups:function(){return this.__U;
},getButtons:function(){return this.__V;
},getItems:function(){var c={};
for(var i=0;i<this.__U.length;i++){var d=this.__U[i];
for(var j=0;j<d.names.length;j++){var name=d.names[j];
c[name]=d.items[j];
}}return c;
}},destruct:function(){this.__U=this._buttons=this._buttonOptions=null;
}});
})();

});