qx.$$packageData['4e0855d77c53']={"resources":{}};
(function(){var W="change",V="input",U="qx.client",T="text",S="password",R="checkbox",Q="radio",P="textarea",O="keypress",N="opera",H="propertychange",M="blur",K="keydown",G="keyup",F="select-multiple",J="checked",I="value",L="select",E="qx.event.handler.Input";
qx.Class.define(E,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){arguments.callee.base.call(this);
this._onChangeCheckedWrapper=qx.lang.Function.listener(this._onChangeChecked,this);
this._onChangeValueWrapper=qx.lang.Function.listener(this._onChangeValue,this);
this._onInputWrapper=qx.lang.Function.listener(this._onInput,this);
this._onPropertyWrapper=qx.lang.Function.listener(this._onProperty,this);
if(qx.core.Variant.isSet(U,N)){this._onKeyDownWrapper=qx.lang.Function.listener(this._onKeyDown,this);
this._onKeyUpWrapper=qx.lang.Function.listener(this._onKeyUp,this);
this._onBlurWrapper=qx.lang.Function.listener(this._onBlur,this);
}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{input:1,change:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{__kE:false,__kF:null,__kG:null,canHandleEvent:function(a,b){var c=a.tagName.toLowerCase();

if(b===V&&(c===V||c===P)){return true;
}
if(b===W&&(c===V||c===P||c===L)){return true;
}return false;
},registerEvent:qx.core.Variant.select(U,{"mshtml":function(f,g,h){if(!f.__kH){var j=f.tagName.toLowerCase();
var k=f.type;

if(k===T||k===S||j===P||k===R||k===Q){qx.bom.Event.addNativeListener(f,H,this._onPropertyWrapper);
}
if(k!==R&&k!==Q){qx.bom.Event.addNativeListener(f,W,this._onChangeValueWrapper);
}
if(k===T||k===S){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,f);
qx.bom.Event.addNativeListener(f,O,this._onKeyPressWrapped);
}f.__kH=true;
}},"default":function(Y,ba,bb){if(ba===V){this.__kI(Y);
}else if(ba===W){if(Y.type===Q||Y.type===R){qx.bom.Event.addNativeListener(Y,W,this._onChangeCheckedWrapper);
}else{qx.bom.Event.addNativeListener(Y,W,this._onChangeValueWrapper);
}if(qx.core.Variant.isSet(U,N)){if(Y.type===T||Y.type===S){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,Y);
qx.bom.Event.addNativeListener(Y,O,this._onKeyPressWrapped);
}}}}}),__kI:qx.core.Variant.select(U,{"mshtml":null,"webkit":function(bd){var be=bd.tagName.toLowerCase();
if(qx.bom.client.Engine.VERSION<532&&be==P){qx.bom.Event.addNativeListener(bd,O,this._onInputWrapper);
}qx.bom.Event.addNativeListener(bd,V,this._onInputWrapper);
},"opera":function(p){qx.bom.Event.addNativeListener(p,G,this._onKeyUpWrapper);
qx.bom.Event.addNativeListener(p,K,this._onKeyDownWrapper);
qx.bom.Event.addNativeListener(p,M,this._onBlurWrapper);
qx.bom.Event.addNativeListener(p,V,this._onInputWrapper);
},"default":function(u){qx.bom.Event.addNativeListener(u,V,this._onInputWrapper);
}}),unregisterEvent:qx.core.Variant.select(U,{"mshtml":function(v,w){if(v.__kH){var x=v.tagName.toLowerCase();
var y=v.type;

if(y===T||y===S||x===P||y===R||y===Q){qx.bom.Event.removeNativeListener(v,H,this._onPropertyWrapper);
}
if(y!==R&&y!==Q){qx.bom.Event.removeNativeListener(v,W,this._onChangeValueWrapper);
}
if(y===T||y===S){qx.bom.Event.removeNativeListener(v,O,this._onKeyPressWrapped);
}
try{delete v.__kH;
}catch(bc){v.__kH=null;
}}},"default":function(m,n){if(n===V){this.__kI(m);
}else if(n===W){if(m.type===Q||m.type===R){qx.bom.Event.removeNativeListener(m,W,this._onChangeCheckedWrapper);
}else{qx.bom.Event.removeNativeListener(m,W,this._onChangeValueWrapper);
}}
if(qx.core.Variant.isSet(U,N)){if(m.type===T||m.type===S){qx.bom.Event.removeNativeListener(m,O,this._onKeyPressWrapped);
}}}}),__kJ:qx.core.Variant.select(U,{"mshtml":null,"webkit":function(B){var C=B.tagName.toLowerCase();
if(qx.bom.client.Engine.VERSION<532&&C==P){qx.bom.Event.removeNativeListener(B,O,this._onInputWrapper);
}qx.bom.Event.removeNativeListener(B,V,this._onInputWrapper);
},"opera":function(t){qx.bom.Event.removeNativeListener(t,G,this._onKeyUpWrapper);
qx.bom.Event.removeNativeListener(t,K,this._onKeyDownWrapper);
qx.bom.Event.removeNativeListener(t,M,this._onBlurWrapper);
qx.bom.Event.removeNativeListener(t,V,this._onInputWrapper);
},"default":function(d){qx.bom.Event.removeNativeListener(d,V,this._onInputWrapper);
}}),_onKeyPress:qx.core.Variant.select(U,{"mshtml|opera":function(e,bf){if(e.keyCode===13){if(bf.value!==this.__kG){this.__kG=bf.value;
qx.event.Registration.fireEvent(bf,W,qx.event.type.Data,[bf.value]);
}}},"default":null}),_onKeyDown:qx.core.Variant.select(U,{"opera":function(e){if(e.keyCode===13){this.__kE=true;
}},"default":null}),_onKeyUp:qx.core.Variant.select(U,{"opera":function(e){if(e.keyCode===13){this.__kE=false;
}},"default":null}),_onBlur:qx.core.Variant.select(U,{"opera":function(e){if(this.__kF){window.clearTimeout(this.__kF);
}},"default":null}),_onInput:qx.event.GlobalError.observeMethod(function(e){var D=e.target;
if(!this.__kE){if(qx.core.Variant.isSet(U,N)){this.__kF=window.setTimeout(function(){qx.event.Registration.fireEvent(D,V,qx.event.type.Data,[D.value]);
},0);
}else{qx.event.Registration.fireEvent(D,V,qx.event.type.Data,[D.value]);
}}}),_onChangeValue:qx.event.GlobalError.observeMethod(function(e){var A=e.target||e.srcElement;
var z=A.value;

if(A.type===F){var z=[];

for(var i=0,o=A.options,l=o.length;i<l;i++){if(o[i].selected){z.push(o[i].value);
}}}qx.event.Registration.fireEvent(A,W,qx.event.type.Data,[z]);
}),_onChangeChecked:qx.event.GlobalError.observeMethod(function(e){var s=e.target;

if(s.type===Q){if(s.checked){qx.event.Registration.fireEvent(s,W,qx.event.type.Data,[s.value]);
}}else{qx.event.Registration.fireEvent(s,W,qx.event.type.Data,[s.checked]);
}}),_onProperty:qx.core.Variant.select(U,{"mshtml":qx.event.GlobalError.observeMethod(function(e){var q=e.target||e.srcElement;
var r=e.propertyName;

if(r===I&&(q.type===T||q.type===S||q.tagName.toLowerCase()===P)){if(!q.__inValueSet){qx.event.Registration.fireEvent(q,V,qx.event.type.Data,[q.value]);
}}else if(r===J){if(q.type===R){qx.event.Registration.fireEvent(q,W,qx.event.type.Data,[q.checked]);
}else if(q.checked){qx.event.Registration.fireEvent(q,W,qx.event.type.Data,[q.value]);
}}}),"default":function(){}})},defer:function(X){qx.event.Registration.addHandler(X);
}});
})();
(function(){var r="showingPlaceholder",q="color",p="",o="none",n="qx.client",m="qx.dynlocale",l="Boolean",k="qx.event.type.Data",j="readonly",i="input",bh="focusin",bg="visibility",bf="focusout",be="changeLocale",bd="hidden",bc="on",bb="absolute",ba="readOnly",Y="text",X="_applyTextAlign",y="px",z="RegExp",w=")",x="syncAppearance",u="changeValue",v="gecko",s="A",t="change",C="textAlign",D="focused",L="center",J="visible",P="disabled",N="url(",T="off",R="String",F="resize",W="qx.ui.form.AbstractField",V="transparent",U="spellcheck",E="false",H="right",I="PositiveInteger",K="mshtml",M="abstract",O="block",Q="webkit",S="_applyReadOnly",A="_applyPlaceholder",B="left",G="qx/static/blank.gif";
qx.Class.define(W,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm,qx.ui.form.IForm],include:[qx.ui.form.MForm],type:M,construct:function(bB){arguments.callee.base.call(this);

if(bB!=null){this.setValue(bB);
}this.getContentElement().addListener(t,this._onChangeContent,this);
this.addListener(x,this._syncPlaceholder,this);
if(qx.core.Variant.isSet(m,bc)){qx.locale.Manager.getInstance().addListener(be,this._onChangeLocale,this);
}},events:{"input":k,"changeValue":k},properties:{textAlign:{check:[B,L,H],nullable:true,themeable:true,apply:X},readOnly:{check:l,apply:S,init:false},selectable:{refine:true,init:true},focusable:{refine:true,init:true},maxLength:{check:I,init:Infinity},liveUpdate:{check:l,init:false},placeholder:{check:R,nullable:true,apply:A},filter:{check:z,nullable:true,init:null}},members:{__ku:true,__kv:null,__kw:null,__kx:null,getFocusElement:function(){var h=this.getContentElement();

if(h){return h;
}},_createInputElement:function(){return new qx.html.Input(Y);
},renderLayout:function(bC,top,bD,bE){var bF=this._updateInsets;
var bJ=arguments.callee.base.call(this,bC,top,bD,bE);
if(!bJ){return;
}var bH=bJ.size||bF;
var bK=y;

if(bH||bJ.local||bJ.margin){var bG=this.getInsets();
var innerWidth=bD-bG.left-bG.right;
var innerHeight=bE-bG.top-bG.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}var bI=this.getContentElement();

if(bF){this.__kA().setStyles({"left":bG.left+bK,"top":bG.top+bK});
}
if(bH){this.__kA().setStyles({"width":innerWidth+bK,"height":innerHeight+bK});
bI.setStyles({"width":innerWidth+bK,"height":innerHeight+bK});
}},_createContentElement:function(){var by=this._createInputElement();
by.setStyles({"border":o,"padding":0,"margin":0,"display":O,"background":V,"outline":o,"appearance":o,"position":bb,"autoComplete":T});
by.setSelectable(this.getSelectable());
by.setEnabled(this.getEnabled());
by.addListener(i,this._onHtmlInput,this);
if(qx.core.Variant.isSet(n,v)){by.setAttribute(U,E);
}if(qx.core.Variant.isSet(n,Q)){by.setStyle(F,o);
}if(qx.core.Variant.isSet(n,K)){by.setStyles({backgroundImage:N+qx.util.ResourceManager.getInstance().toUri(G)+w});
}return by;
},_applyEnabled:function(bL,bM){arguments.callee.base.call(this,bL,bM);
this.getContentElement().setEnabled(bL);

if(bL){this._showPlaceholder();
}else{this._removePlaceholder();
}},__ky:{width:16,height:16},_getContentHint:function(){return {width:this.__ky.width*10,height:this.__ky.height||16};
},_applyFont:function(a,b){var c;

if(a){var d=qx.theme.manager.Font.getInstance().resolve(a);
c=d.getStyles();
}else{c=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(c);
this.__kA().setStyles(c);
if(a){this.__ky=qx.bom.Label.getTextSize(s,c);
}else{delete this.__ky;
}qx.ui.core.queue.Layout.add(this);
},_applyTextColor:function(bi,bj){if(bi){this.getContentElement().setStyle(q,qx.theme.manager.Color.getInstance().resolve(bi));
this.__kA().setStyle(q,qx.theme.manager.Color.getInstance().resolve(bi));
}else{this.getContentElement().removeStyle(q);
this.__kA().removeStyle(q);
}},tabFocus:function(){arguments.callee.base.call(this);
this.selectAllText();
},_getTextSize:function(){return this.__ky;
},_onHtmlInput:function(e){var bs=e.getData();
var br=true;
this.__ku=false;
if(this.getFilter()!=null){var bt=p;
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
}if(br){this.fireDataEvent(i,bs,this.__kx);
this.__kx=bs;
if(this.getLiveUpdate()){this.__kz(bs);
}}},__kz:function(bw){this.fireNonBubblingEvent(u,qx.event.type.Data,[bw,this.__kw]);
this.__kw=bw;
},setValue:function(bN){if(bN===null){if(this.__ku){return bN;
}bN=p;
this.__ku=true;
}else{this.__ku=false;
this._removePlaceholder();
}
if(qx.lang.Type.isString(bN)){var bP=this.getContentElement();

if(bN.length>this.getMaxLength()){bN=bN.substr(0,this.getMaxLength());
}
if(bP.getValue()!=bN){var bQ=bP.getValue();
bP.setValue(bN);
var bO=this.__ku?null:bN;
this.__kw=bQ;
this.__kz(bO);
}this._showPlaceholder();
return bN;
}throw new Error("Invalid value type: "+bN);
},getValue:function(){var bx=this.getContentElement().getValue();
return this.__ku?null:bx;
},resetValue:function(){this.setValue(null);
},_onChangeContent:function(e){this.__ku=e.getData()===null;
this.__kz(e.getData());
},getTextSelection:function(){return this.getContentElement().getTextSelection();
},getTextSelectionLength:function(){return this.getContentElement().getTextSelectionLength();
},getTextSelectionStart:function(){return this.getContentElement().getTextSelectionStart();
},getTextSelectionEnd:function(){return this.getContentElement().getTextSelectionEnd();
},setTextSelection:function(bu,bv){this.getContentElement().setTextSelection(bu,bv);
},clearTextSelection:function(){this.getContentElement().clearTextSelection();
},selectAllText:function(){this.setTextSelection(0);
},_showPlaceholder:function(){var bo=this.getValue()||p;
var bn=this.getPlaceholder();

if(bn!=null&&bo==p&&!this.hasState(D)&&!this.hasState(P)){if(this.hasState(r)){this._syncPlaceholder();
}else{this.addState(r);
}}},_removePlaceholder:function(){if(this.hasState(r)){this.__kA().setStyle(bg,bd);
this.removeState(r);
}},_syncPlaceholder:function(){if(this.hasState(r)){this.__kA().setStyle(bg,J);
}},__kA:function(){if(this.__kv==null){this.__kv=new qx.html.Label();
this.__kv.setStyles({"visibility":bd,"zIndex":6,"position":bb});
this.getContainerElement().add(this.__kv);
}return this.__kv;
},_onChangeLocale:qx.core.Variant.select(m,{"on":function(e){var content=this.getPlaceholder();

if(content&&content.translate){this.setPlaceholder(content.translate());
}},"off":null}),_applyPlaceholder:function(bz,bA){this.__kA().setValue(bz);

if(bz!=null){this.addListener(bh,this._removePlaceholder,this);
this.addListener(bf,this._showPlaceholder,this);
this._showPlaceholder();
}else{this.removeListener(bh,this._removePlaceholder,this);
this.removeListener(bf,this._showPlaceholder,this);
this._removePlaceholder();
}},_applyTextAlign:function(f,g){this.getContentElement().setStyle(C,f);
},_applyReadOnly:function(bk,bl){var bm=this.getContentElement();
bm.setAttribute(ba,bk);

if(bk){this.addState(j);
this.setFocusable(false);
}else{this.removeState(j);
this.setFocusable(true);
}}},destruct:function(){this.__kv=null;

if(qx.core.Variant.isSet(m,bc)){qx.locale.Manager.getInstance().removeListener(be,this._onChangeLocale,this);
}}});
})();
(function(){var b="qx.ui.form.TextField",a="textfield";
qx.Class.define(b,{extend:qx.ui.form.AbstractField,properties:{appearance:{refine:true,init:a},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}}});
})();
(function(){var p="none",o="wrap",n="value",m="qx.client",l="textarea",k="off",j="on",i="qxSelectable",h="",g="webkit",c="input",f="qx.html.Input",e="select",b="disabled",a="read-only",d="userSelect";
qx.Class.define(f,{extend:qx.html.Element,construct:function(s){arguments.callee.base.call(this);
this.__kB=s;
if(s===e||s===l){this.setNodeName(s);
}else{this.setNodeName(c);
}},members:{__kB:null,__kC:null,__kD:null,_createDomElement:function(){return qx.bom.Input.create(this.__kB);
},_applyProperty:function(name,t){arguments.callee.base.call(this,name,t);
var u=this.getDomElement();

if(name===n){qx.bom.Input.setValue(u,t);
}else if(name===o){qx.bom.Input.setWrap(u,t);
}},setEnabled:qx.core.Variant.select(m,{"webkit":function(B){this.__kD=B;

if(!B){this.setStyles({"userModify":a,"userSelect":p});
}else{this.setStyles({"userModify":null,"userSelect":this.__kC?null:p});
}},"default":function(r){this.setAttribute(b,r===false);
}}),setSelectable:qx.core.Variant.select(m,{"webkit":function(x){this.__kC=x;
this.setAttribute(i,x?j:k);
if(qx.core.Variant.isSet(m,g)){var y=this.__kD?x?null:p:p;
this.setStyle(d,y);
}},"default":function(z){this.setAttribute(i,z?j:k);
}}),setValue:function(v){var w=this.getDomElement();

if(w){if(w.value!=v){qx.bom.Input.setValue(w,v);
}}else{this._setProperty(n,v);
}return this;
},getValue:function(){var A=this.getDomElement();

if(A){return qx.bom.Input.getValue(A);
}return this._getProperty(n)||h;
},setWrap:function(q){if(this.__kB===l){this._setProperty(o,q);
}else{throw new Error("Text wrapping is only support by textareas!");
}return this;
},getWrap:function(){if(this.__kB===l){return this._getProperty(o);
}else{throw new Error("Text wrapping is only support by textareas!");
}}}});
})();
(function(){var v="",u="select",t="soft",s="off",r="qx.client",q="wrap",p="text",o="mshtml",n="number",m="checkbox",d="select-one",k="input",g="option",c="value",b="radio",f="qx.bom.Input",e="nowrap",h="textarea",a="auto",j="normal";
qx.Class.define(f,{statics:{__kK:{text:1,textarea:1,select:1,checkbox:1,radio:1,password:1,hidden:1,submit:1,image:1,file:1,search:1,reset:1,button:1},create:function(A,B,C){{};
var B=B?qx.lang.Object.clone(B):{};
var D;

if(A===h||A===u){D=A;
}else{D=k;
B.type=A;
}return qx.bom.Element.create(D,B,C);
},setValue:function(G,H){var M=G.nodeName.toLowerCase();
var J=G.type;
var Array=qx.lang.Array;
var N=qx.lang.Type;

if(typeof H===n){H+=v;
}
if((J===m||J===b)){if(N.isArray(H)){G.checked=Array.contains(H,G.value);
}else{G.checked=G.value==H;
}}else if(M===u){var I=N.isArray(H);
var O=G.options;
var K,L;

for(var i=0,l=O.length;i<l;i++){K=O[i];
L=K.getAttribute(c);

if(L==null){L=K.text;
}K.selected=I?Array.contains(H,L):H==L;
}
if(I&&H.length==0){G.selectedIndex=-1;
}}else if(J===p&&qx.core.Variant.isSet(r,o)){G.__kL=true;
G.value=H;
G.__kL=null;
}else{G.value=H;
}},getValue:function(P){var V=P.nodeName.toLowerCase();

if(V===g){return (P.attributes.value||{}).specified?P.value:P.text;
}
if(V===u){var Q=P.selectedIndex;
if(Q<0){return null;
}var W=[];
var Y=P.options;
var X=P.type==d;
var U=qx.bom.Input;
var T;
for(var i=X?Q:0,S=X?Q+1:Y.length;i<S;i++){var R=Y[i];

if(R.selected){T=U.getValue(R);
if(X){return T;
}W.push(T);
}}return W;
}else{return (P.value||v).replace(/\r/g,v);
}},setWrap:qx.core.Variant.select(r,{"mshtml":function(E,F){E.wrap=F?t:s;
},"gecko|webkit":function(w,x){var z=x?t:s;
var y=x?v:a;
w.setAttribute(q,z);
w.style.overflow=y;
},"default":function(ba,bb){ba.style.whiteSpace=bb?j:e;
}})}});
})();
