qx.$$packageData['9bbf4fb45115']={"resources":{}};
(function(){var x="change",w="input",v="qx.client",u="text",t="password",s="checkbox",r="radio",q="textarea",p="keypress",n="opera",f="propertychange",m="blur",j="keydown",d="keyup",c="select-multiple",h="checked",g="value",k="select",b="qx.event.handler.Input";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){arguments.callee.base.call(this);
this._onChangeCheckedWrapper=qx.lang.Function.listener(this._onChangeChecked,this);
this._onChangeValueWrapper=qx.lang.Function.listener(this._onChangeValue,this);
this._onInputWrapper=qx.lang.Function.listener(this._onInput,this);
this._onPropertyWrapper=qx.lang.Function.listener(this._onProperty,this);
if(qx.core.Variant.isSet(v,n)){this._onKeyDownWrapper=qx.lang.Function.listener(this._onKeyDown,this);
this._onKeyUpWrapper=qx.lang.Function.listener(this._onKeyUp,this);
this._onBlurWrapper=qx.lang.Function.listener(this._onBlur,this);
}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{input:1,change:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{__iJ:false,__iK:null,__iL:null,canHandleEvent:function(B,C){var D=B.tagName.toLowerCase();

if(C===w&&(D===w||D===q)){return true;
}
if(C===x&&(D===w||D===q||D===k)){return true;
}return false;
},registerEvent:qx.core.Variant.select(v,{"mshtml":function(I,J,K){if(!I.__iM){var L=I.tagName.toLowerCase();
var M=I.type;

if(M===u||M===t||L===q||M===s||M===r){qx.bom.Event.addNativeListener(I,f,this._onPropertyWrapper);
}
if(M!==s&&M!==r){qx.bom.Event.addNativeListener(I,x,this._onChangeValueWrapper);
}
if(M===u||M===t){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,I);
qx.bom.Event.addNativeListener(I,p,this._onKeyPressWrapped);
}I.__iM=true;
}},"default":function(E,F,G){if(F===w){this.__iN(E);
}else if(F===x){if(E.type===r||E.type===s){qx.bom.Event.addNativeListener(E,x,this._onChangeCheckedWrapper);
}else{qx.bom.Event.addNativeListener(E,x,this._onChangeValueWrapper);
}if(qx.core.Variant.isSet(v,n)){if(E.type===u||E.type===t){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,E);
qx.bom.Event.addNativeListener(E,p,this._onKeyPressWrapped);
}}}}}),__iN:qx.core.Variant.select(v,{"mshtml":null,"webkit":function(U){var V=U.tagName.toLowerCase();
if(qx.bom.client.Engine.VERSION<532&&V==q){qx.bom.Event.addNativeListener(U,p,this._onInputWrapper);
}qx.bom.Event.addNativeListener(U,w,this._onInputWrapper);
},"opera":function(y){qx.bom.Event.addNativeListener(y,d,this._onKeyUpWrapper);
qx.bom.Event.addNativeListener(y,j,this._onKeyDownWrapper);
qx.bom.Event.addNativeListener(y,m,this._onBlurWrapper);
qx.bom.Event.addNativeListener(y,w,this._onInputWrapper);
},"default":function(H){qx.bom.Event.addNativeListener(H,w,this._onInputWrapper);
}}),unregisterEvent:qx.core.Variant.select(v,{"mshtml":function(ba,bb){if(ba.__iM){var bc=ba.tagName.toLowerCase();
var bd=ba.type;

if(bd===u||bd===t||bc===q||bd===s||bd===r){qx.bom.Event.removeNativeListener(ba,f,this._onPropertyWrapper);
}
if(bd!==s&&bd!==r){qx.bom.Event.removeNativeListener(ba,x,this._onChangeValueWrapper);
}
if(bd===u||bd===t){qx.bom.Event.removeNativeListener(ba,p,this._onKeyPressWrapped);
}
try{delete ba.__iM;
}catch(S){ba.__iM=null;
}}},"default":function(be,bf){if(bf===w){this.__iN(be);
}else if(bf===x){if(be.type===r||be.type===s){qx.bom.Event.removeNativeListener(be,x,this._onChangeCheckedWrapper);
}else{qx.bom.Event.removeNativeListener(be,x,this._onChangeValueWrapper);
}}
if(qx.core.Variant.isSet(v,n)){if(be.type===u||be.type===t){qx.bom.Event.removeNativeListener(be,p,this._onKeyPressWrapped);
}}}}),__iO:qx.core.Variant.select(v,{"mshtml":null,"webkit":function(Q){var R=Q.tagName.toLowerCase();
if(qx.bom.client.Engine.VERSION<532&&R==q){qx.bom.Event.removeNativeListener(Q,p,this._onInputWrapper);
}qx.bom.Event.removeNativeListener(Q,w,this._onInputWrapper);
},"opera":function(Y){qx.bom.Event.removeNativeListener(Y,d,this._onKeyUpWrapper);
qx.bom.Event.removeNativeListener(Y,j,this._onKeyDownWrapper);
qx.bom.Event.removeNativeListener(Y,m,this._onBlurWrapper);
qx.bom.Event.removeNativeListener(Y,w,this._onInputWrapper);
},"default":function(X){qx.bom.Event.removeNativeListener(X,w,this._onInputWrapper);
}}),_onKeyPress:qx.core.Variant.select(v,{"mshtml|opera":function(e,W){if(e.keyCode===13){if(W.value!==this.__iL){this.__iL=W.value;
qx.event.Registration.fireEvent(W,x,qx.event.type.Data,[W.value]);
}}},"default":null}),_onKeyDown:qx.core.Variant.select(v,{"opera":function(e){if(e.keyCode===13){this.__iJ=true;
}},"default":null}),_onKeyUp:qx.core.Variant.select(v,{"opera":function(e){if(e.keyCode===13){this.__iJ=false;
}},"default":null}),_onBlur:qx.core.Variant.select(v,{"opera":function(e){if(this.__iK){window.clearTimeout(this.__iK);
}},"default":null}),_onInput:qx.event.GlobalError.observeMethod(function(e){var P=e.target;
if(!this.__iJ){if(qx.core.Variant.isSet(v,n)){this.__iK=window.setTimeout(function(){qx.event.Registration.fireEvent(P,w,qx.event.type.Data,[P.value]);
},0);
}else{qx.event.Registration.fireEvent(P,w,qx.event.type.Data,[P.value]);
}}}),_onChangeValue:qx.event.GlobalError.observeMethod(function(e){var A=e.target||e.srcElement;
var z=A.value;

if(A.type===c){var z=[];

for(var i=0,o=A.options,l=o.length;i<l;i++){if(o[i].selected){z.push(o[i].value);
}}}qx.event.Registration.fireEvent(A,x,qx.event.type.Data,[z]);
}),_onChangeChecked:qx.event.GlobalError.observeMethod(function(e){var a=e.target;

if(a.type===r){if(a.checked){qx.event.Registration.fireEvent(a,x,qx.event.type.Data,[a.value]);
}}else{qx.event.Registration.fireEvent(a,x,qx.event.type.Data,[a.checked]);
}}),_onProperty:qx.core.Variant.select(v,{"mshtml":qx.event.GlobalError.observeMethod(function(e){var N=e.target||e.srcElement;
var O=e.propertyName;

if(O===g&&(N.type===u||N.type===t||N.tagName.toLowerCase()===q)){if(!N.__inValueSet){qx.event.Registration.fireEvent(N,w,qx.event.type.Data,[N.value]);
}}else if(O===h){if(N.type===s){qx.event.Registration.fireEvent(N,x,qx.event.type.Data,[N.checked]);
}else if(N.checked){qx.event.Registration.fireEvent(N,x,qx.event.type.Data,[N.value]);
}}}),"default":function(){}})},defer:function(T){qx.event.Registration.addHandler(T);
}});
})();
(function(){var q="showingPlaceholder",p="color",o="",n="none",m="qx.client",l="Boolean",k="qx.event.type.Data",j="readonly",i="input",h="focusin",bd="visibility",bc="focusout",bb="hidden",ba="absolute",Y="readOnly",X="text",W="_applyTextAlign",V="px",U="RegExp",T=")",x="syncAppearance",y="gecko",v="A",w="change",t="textAlign",u="focused",r="center",s="visible",z="disabled",A="url(",H="String",F="resize",L="qx.ui.form.AbstractField",J="transparent",P="off",N="spellcheck",C="false",S="right",R="PositiveInteger",Q="mshtml",B="abstract",D="block",E="webkit",G="_applyReadOnly",I="_applyPlaceholder",K="left",M="changeValue",O="qx/static/blank.gif";
qx.Class.define(L,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm,qx.ui.form.IForm],include:[qx.ui.form.MForm],type:B,construct:function(br){arguments.callee.base.call(this);

if(br!=null){this.setValue(br);
}this.getContentElement().addListener(w,this._onChangeContent,this);
this.addListener(x,this._syncPlaceholder,this);
},events:{"input":k,"changeValue":k},properties:{textAlign:{check:[K,r,S],nullable:true,themeable:true,apply:W},readOnly:{check:l,apply:G,init:false},selectable:{refine:true,init:true},focusable:{refine:true,init:true},maxLength:{check:R,init:Infinity},liveUpdate:{check:l,init:false},placeholder:{check:H,nullable:true,apply:I},filter:{check:U,nullable:true,init:null}},members:{__iU:true,__iV:null,__iW:null,__iX:null,getFocusElement:function(){var g=this.getContentElement();

if(g){return g;
}},_createInputElement:function(){return new qx.html.Input(X);
},renderLayout:function(bi,top,bj,bk){var bl=this._updateInsets;
var bp=arguments.callee.base.call(this,bi,top,bj,bk);
if(!bp){return;
}var bn=bp.size||bl;
var bq=V;

if(bn||bp.local||bp.margin){var bm=this.getInsets();
var innerWidth=bj-bm.left-bm.right;
var innerHeight=bk-bm.top-bm.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}var bo=this.getContentElement();

if(bl){this.__jb().setStyles({"left":bm.left+bq,"top":bm.top+bq});
}
if(bn){this.__jb().setStyles({"width":innerWidth+bq,"height":innerHeight+bq});
bo.setStyles({"width":innerWidth+bq,"height":innerHeight+bq});
}},_createContentElement:function(){var bs=this._createInputElement();
bs.setStyles({"border":n,"padding":0,"margin":0,"display":D,"background":J,"outline":n,"appearance":n,"position":ba,"autoComplete":P});
bs.setSelectable(this.getSelectable());
bs.setEnabled(this.getEnabled());
bs.addListener(i,this._onHtmlInput,this);
if(qx.core.Variant.isSet(m,y)){bs.setAttribute(N,C);
}if(qx.core.Variant.isSet(m,E)){bs.setStyle(F,n);
}if(qx.core.Variant.isSet(m,Q)){bs.setStyles({backgroundImage:A+qx.util.ResourceManager.getInstance().toUri(O)+T});
}return bs;
},_applyEnabled:function(be,bf){arguments.callee.base.call(this,be,bf);
this.getContentElement().setEnabled(be);

if(be){this._showPlaceholder();
}else{this._removePlaceholder();
}},__iY:{width:16,height:16},_getContentHint:function(){return {width:this.__iY.width*10,height:this.__iY.height||16};
},_applyFont:function(bG,bH){var bI;

if(bG){var bJ=qx.theme.manager.Font.getInstance().resolve(bG);
bI=bJ.getStyles();
}else{bI=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(bI);
this.__jb().setStyles(bI);
if(bG){this.__iY=qx.bom.Label.getTextSize(v,bI);
}else{delete this.__iY;
}qx.ui.core.queue.Layout.add(this);
},_applyTextColor:function(bt,bu){if(bt){this.getContentElement().setStyle(p,qx.theme.manager.Color.getInstance().resolve(bt));
this.__jb().setStyle(p,qx.theme.manager.Color.getInstance().resolve(bt));
}else{this.getContentElement().removeStyle(p);
this.__jb().removeStyle(p);
}},tabFocus:function(){arguments.callee.base.call(this);
this.selectAllText();
},_getTextSize:function(){return this.__iY;
},_onHtmlInput:function(e){var bE=e.getData();
var bD=true;
this.__iU=false;
if(this.getFilter()!=null){var bF=o;
var bB=bE.search(this.getFilter());
var bC=bE;

while(bB>=0){bF=bF+(bC.charAt(bB));
bC=bC.substring(bB+1,bC.length);
bB=bC.search(this.getFilter());
}
if(bF!=bE){bD=false;
bE=bF;
this.getContentElement().setValue(bE);
}}if(bE.length>this.getMaxLength()){var bD=false;
this.getContentElement().setValue(bE.substr(0,this.getMaxLength()));
}if(bD){this.fireDataEvent(i,bE,this.__iX);
this.__iX=bE;
if(this.getLiveUpdate()){this.__ja(bE);
}}},__ja:function(bv){this.fireNonBubblingEvent(M,qx.event.type.Data,[bv,this.__iW]);
this.__iW=bv;
},setValue:function(bK){if(bK===null){if(this.__iU){return bK;
}bK=o;
this.__iU=true;
}else{this.__iU=false;
this._removePlaceholder();
}
if(qx.lang.Type.isString(bK)){var bM=this.getContentElement();

if(bK.length>this.getMaxLength()){bK=bK.substr(0,this.getMaxLength());
}
if(bM.getValue()!=bK){var bN=bM.getValue();
bM.setValue(bK);
var bL=this.__iU?null:bK;
this.__iW=bN;
this.__ja(bL);
}this._showPlaceholder();
return bK;
}throw new Error("Invalid value type: "+bK);
},getValue:function(){var bA=this.getContentElement().getValue();
return this.__iU?null:bA;
},resetValue:function(){this.setValue(null);
},_onChangeContent:function(e){this.__iU=e.getData()===null;
this.__ja(e.getData());
},getTextSelection:function(){return this.getContentElement().getTextSelection();
},getTextSelectionLength:function(){return this.getContentElement().getTextSelectionLength();
},getTextSelectionStart:function(){return this.getContentElement().getTextSelectionStart();
},getTextSelectionEnd:function(){return this.getContentElement().getTextSelectionEnd();
},setTextSelection:function(by,bz){this.getContentElement().setTextSelection(by,bz);
},clearTextSelection:function(){this.getContentElement().clearTextSelection();
},selectAllText:function(){this.setTextSelection(0);
},_showPlaceholder:function(){var bx=this.getValue()||o;
var bw=this.getPlaceholder();

if(bw!=null&&bx==o&&!this.hasState(u)&&!this.hasState(z)){if(this.hasState(q)){this._syncPlaceholder();
}else{this.addState(q);
}}},_removePlaceholder:function(){if(this.hasState(q)){this.__jb().setStyle(bd,bb);
this.removeState(q);
}},_syncPlaceholder:function(){if(this.hasState(q)){this.__jb().setStyle(bd,s);
}},__jb:function(){if(this.__iV==null){this.__iV=new qx.html.Label();
this.__iV.setStyles({"visibility":bb,"zIndex":6,"position":ba});
this.getContainerElement().add(this.__iV);
}return this.__iV;
},_applyPlaceholder:function(d,f){this.__jb().setValue(d);

if(d!=null){this.addListener(h,this._removePlaceholder,this);
this.addListener(bc,this._showPlaceholder,this);
this._showPlaceholder();
}else{this.removeListener(h,this._removePlaceholder,this);
this.removeListener(bc,this._showPlaceholder,this);
this._removePlaceholder();
}},_applyTextAlign:function(bg,bh){this.getContentElement().setStyle(t,bg);
},_applyReadOnly:function(a,b){var c=this.getContentElement();
c.setAttribute(Y,a);

if(a){this.addState(j);
this.setFocusable(false);
}else{this.removeState(j);
this.setFocusable(true);
}}},destruct:function(){this.__iV=null;
}});
})();
(function(){var b="qx.ui.form.TextField",a="textfield";
qx.Class.define(b,{extend:qx.ui.form.AbstractField,properties:{appearance:{refine:true,init:a},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}}});
})();
(function(){var t="none",s="wrap",r="value",q="qx.client",p="textarea",o="off",n="on",m="qxSelectable",l="",k="webkit",g="input",j="qx.html.Input",i="select",f="disabled",e="read-only",h="userSelect";
qx.Class.define(j,{extend:qx.html.Element,construct:function(d){arguments.callee.base.call(this);
this.__iP=d;
if(d===i||d===p){this.setNodeName(d);
}else{this.setNodeName(g);
}},members:{__iP:null,__iQ:null,__iR:null,_createDomElement:function(){return qx.bom.Input.create(this.__iP);
},_applyProperty:function(name,y){arguments.callee.base.call(this,name,y);
var z=this.getDomElement();

if(name===r){qx.bom.Input.setValue(z,y);
}else if(name===s){qx.bom.Input.setWrap(z,y);
}},setEnabled:qx.core.Variant.select(q,{"webkit":function(x){this.__iR=x;

if(!x){this.setStyles({"userModify":e,"userSelect":t});
}else{this.setStyles({"userModify":null,"userSelect":this.__iQ?null:t});
}},"default":function(u){this.setAttribute(f,u===false);
}}),setSelectable:qx.core.Variant.select(q,{"webkit":function(A){this.__iQ=A;
this.setAttribute(m,A?n:o);
if(qx.core.Variant.isSet(q,k)){var B=this.__iR?A?null:t:t;
this.setStyle(h,B);
}},"default":function(c){this.setAttribute(m,c?n:o);
}}),setValue:function(v){var w=this.getDomElement();

if(w){if(w.value!=v){qx.bom.Input.setValue(w,v);
}}else{this._setProperty(r,v);
}return this;
},getValue:function(){var a=this.getDomElement();

if(a){return qx.bom.Input.getValue(a);
}return this._getProperty(r)||l;
},setWrap:function(b){if(this.__iP===p){this._setProperty(s,b);
}else{throw new Error("Text wrapping is only support by textareas!");
}return this;
},getWrap:function(){if(this.__iP===p){return this._getProperty(s);
}else{throw new Error("Text wrapping is only support by textareas!");
}}}});
})();
(function(){var z="",y="select",x="soft",w="off",v="qx.client",u="wrap",t="text",s="mshtml",r="number",q="checkbox",h="select-one",p="input",m="option",g="value",f="radio",k="qx.bom.Input",j="nowrap",n="textarea",e="auto",o="normal";
qx.Class.define(k,{statics:{__iS:{text:1,textarea:1,select:1,checkbox:1,radio:1,password:1,hidden:1,submit:1,image:1,file:1,search:1,reset:1,button:1},create:function(a,b,c){{};
var b=b?qx.lang.Object.clone(b):{};
var d;

if(a===n||a===y){d=a;
}else{d=p;
b.type=a;
}return qx.bom.Element.create(d,b,c);
},setValue:function(I,J){var O=I.nodeName.toLowerCase();
var L=I.type;
var Array=qx.lang.Array;
var P=qx.lang.Type;

if(typeof J===r){J+=z;
}
if((L===q||L===f)){if(P.isArray(J)){I.checked=Array.contains(J,I.value);
}else{I.checked=I.value==J;
}}else if(O===y){var K=P.isArray(J);
var Q=I.options;
var M,N;

for(var i=0,l=Q.length;i<l;i++){M=Q[i];
N=M.getAttribute(g);

if(N==null){N=M.text;
}M.selected=K?Array.contains(J,N):J==N;
}
if(K&&J.length==0){I.selectedIndex=-1;
}}else if(L===t&&qx.core.Variant.isSet(v,s)){I.__iT=true;
I.value=J;
I.__iT=null;
}else{I.value=J;
}},getValue:function(R){var X=R.nodeName.toLowerCase();

if(X===m){return (R.attributes.value||{}).specified?R.value:R.text;
}
if(X===y){var S=R.selectedIndex;
if(S<0){return null;
}var Y=[];
var bb=R.options;
var ba=R.type==h;
var W=qx.bom.Input;
var V;
for(var i=ba?S:0,U=ba?S+1:bb.length;i<U;i++){var T=bb[i];

if(T.selected){V=W.getValue(T);
if(ba){return V;
}Y.push(V);
}}return Y;
}else{return (R.value||z).replace(/\r/g,z);
}},setWrap:qx.core.Variant.select(v,{"mshtml":function(C,D){C.wrap=D?x:w;
},"gecko|webkit":function(E,F){var H=F?x:w;
var G=F?z:e;
E.setAttribute(u,H);
E.style.overflow=G;
},"default":function(A,B){A.style.whiteSpace=B?o:j;
}})}});
})();
(function(){var o="legend",n="frame",m="middle",l="top",k="resize",j="qx.ui.groupbox.GroupBox",i="groupbox",h="_applyLegendPosition";
qx.Class.define(j,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MRemoteLayoutHandling,qx.ui.core.MContentPadding,qx.ui.form.MForm],implement:[qx.ui.form.IForm],construct:function(p,q){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Canvas);
this._createChildControl(n);
this._createChildControl(o);
if(p!=null){this.setLegend(p);
}
if(q!=null){this.setIcon(q);
}},properties:{appearance:{refine:true,init:i},legendPosition:{check:[l,m],init:m,apply:h,themeable:true}},members:{_forwardStates:{invalid:true},_createChildControlImpl:function(r){var s;

switch(r){case n:s=new qx.ui.container.Composite();
this._add(s,{left:0,top:6,right:0,bottom:0});
break;
case o:s=new qx.ui.basic.Atom();
s.addListener(k,this._repositionFrame,this);
this._add(s);
break;
}return s||arguments.callee.base.call(this,r);
},_getContentPaddingTarget:function(){return this.getChildControl(n);
},_applyLegendPosition:function(e){if(this.getChildControl(o).getBounds()){this._repositionFrame();
}},_repositionFrame:function(){var f=this.getChildControl(o);
var d=this.getChildControl(n);
var g=f.getBounds().height;
if(this.getLegendPosition()==m){d.setLayoutProperties({"top":Math.round(g/2)});
}else if(this.getLegendPosition()==l){d.setLayoutProperties({"top":g});
}},getChildrenContainer:function(){return this.getChildControl(n);
},setLegend:function(a){var b=this.getChildControl(o);

if(a!==null){b.setLabel(a);
b.show();
}else{b.exclude();
}},getLegend:function(){return this.getChildControl(o).getLabel();
},setIcon:function(c){this.getChildControl(o).setIcon(c);
},getIcon:function(){this.getChildControl(o).getIcon();
}}});
})();
