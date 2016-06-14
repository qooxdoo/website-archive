qx.$$packageData['dbefb8aec30d']={"locales":{},"resources":{"feedreader/images/combined/icons16.png":[16,96,"png","feedreader"],"qx/icon/Tango/16/actions/dialog-apply.png":[16,16,"png","qx","feedreader/images/combined/icons16.png",0,-80],"qx/icon/Tango/16/actions/document-new.png":[16,16,"png","qx","feedreader/images/combined/icons16.png",0,-16]},"translations":{}};

qx.Part.$$notifyLoad("dbefb8aec30d", function() {
(function(){var p="showingPlaceholder",o="color",n="",m="none",l="qx.dynlocale",k="Boolean",j="qx.client",i="qx.event.type.Data",h="readonly",g="input",be="focusin",bd="visibility",bc="focusout",bb="changeLocale",ba="hidden",Y="on",X="absolute",W="readOnly",V="text",U="_applyTextAlign",w="px",x="RegExp",u=")",v="syncAppearance",s="changeValue",t="A",q="change",r="textAlign",A="focused",B="center",I="visible",G="disabled",M="url(",K="off",Q="String",O="resize",D="qx.ui.form.AbstractField",T="transparent",S="spellcheck",R="false",C="right",E="PositiveInteger",F="mshtml",H="abstract",J="block",L="webkit",N="_applyReadOnly",P="_applyPlaceholder",y="left",z="qx/static/blank.gif";
qx.Class.define(D,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm,qx.ui.form.IForm],include:[qx.ui.form.MForm],type:H,construct:function(bO){qx.ui.core.Widget.call(this);

if(bO!=null){this.setValue(bO);
}this.getContentElement().addListener(q,this._onChangeContent,this);
this.addListener(v,this._syncPlaceholder,this);
if(qx.core.Variant.isSet(l,Y)){qx.locale.Manager.getInstance().addListener(bb,this._onChangeLocale,this);
}},events:{"input":i,"changeValue":i},properties:{textAlign:{check:[y,B,C],nullable:true,themeable:true,apply:U},readOnly:{check:k,apply:N,init:false},selectable:{refine:true,init:true},focusable:{refine:true,init:true},maxLength:{check:E,init:Infinity},liveUpdate:{check:k,init:false},placeholder:{check:Q,nullable:true,apply:P},filter:{check:x,nullable:true,init:null}},members:{__lT:true,__lU:null,__lV:null,__lW:null,getFocusElement:function(){var bA=this.getContentElement();

if(bA){return bA;
}},_createInputElement:function(){return new qx.html.Input(V);
},renderLayout:function(bF,top,bG,bH){var bI=this._updateInsets;
var bM=qx.ui.core.Widget.prototype.renderLayout.call(this,bF,top,bG,bH);
if(!bM){return;
}var bK=bM.size||bI;
var bN=w;

if(bK||bM.local||bM.margin){var bJ=this.getInsets();
var innerWidth=bG-bJ.left-bJ.right;
var innerHeight=bH-bJ.top-bJ.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}var bL=this.getContentElement();

if(bI){this.__ma().setStyles({"left":bJ.left+bN,"top":bJ.top+bN});
}
if(bK){this.__ma().setStyles({"width":innerWidth+bN,"height":innerHeight+bN});
bL.setStyles({"width":innerWidth+bN,"height":innerHeight+bN});
}},_createContentElement:function(){var bx=this._createInputElement();
bx.setStyles({"border":m,"padding":0,"margin":0,"display":J,"background":T,"outline":m,"appearance":m,"position":X,"autoComplete":K});
bx.setSelectable(this.getSelectable());
bx.setEnabled(this.getEnabled());
bx.addListener(g,this._onHtmlInput,this);
bx.setAttribute(S,R);
if(qx.core.Variant.isSet(j,L)){bx.setStyle(O,m);
}if(qx.core.Variant.isSet(j,F)){bx.setStyles({backgroundImage:M+qx.util.ResourceManager.getInstance().toUri(z)+u});
}return bx;
},_applyEnabled:function(br,bs){qx.ui.core.Widget.prototype._applyEnabled.call(this,br,bs);
this.getContentElement().setEnabled(br);

if(br){this._showPlaceholder();
}else{this._removePlaceholder();
}},__lX:{width:16,height:16},_getContentHint:function(){return {width:this.__lX.width*10,height:this.__lX.height||16};
},_applyFont:function(bt,bu){var bv;

if(bt){var bw=qx.theme.manager.Font.getInstance().resolve(bt);
bv=bw.getStyles();
}else{bv=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(bv);
this.__ma().setStyles(bv);
if(bt){this.__lX=qx.bom.Label.getTextSize(t,bv);
}else{delete this.__lX;
}qx.ui.core.queue.Layout.add(this);
},_applyTextColor:function(by,bz){if(by){this.getContentElement().setStyle(o,qx.theme.manager.Color.getInstance().resolve(by));
this.__ma().setStyle(o,qx.theme.manager.Color.getInstance().resolve(by));
}else{this.getContentElement().removeStyle(o);
this.__ma().removeStyle(o);
}},tabFocus:function(){qx.ui.core.Widget.prototype.tabFocus.call(this);
this.selectAllText();
},_getTextSize:function(){return this.__lX;
},_onHtmlInput:function(e){var d=e.getData();
var c=true;
this.__lT=false;
if(this.getFilter()!=null){var f=n;
var a=d.search(this.getFilter());
var b=d;

while(a>=0){f=f+(b.charAt(a));
b=b.substring(a+1,b.length);
a=b.search(this.getFilter());
}
if(f!=d){c=false;
d=f;
this.getContentElement().setValue(d);
}}if(d.length>this.getMaxLength()){var c=false;
this.getContentElement().setValue(d.substr(0,this.getMaxLength()));
}if(c){this.fireDataEvent(g,d,this.__lW);
this.__lW=d;
if(this.getLiveUpdate()){this.__lY(d);
}}},__lY:function(bB){if(this.__lV!=bB){this.fireNonBubblingEvent(s,qx.event.type.Data,[bB,this.__lV]);
this.__lV=bB;
}},setValue:function(bl){if(bl===null){if(this.__lT){return bl;
}bl=n;
this.__lT=true;
}else{this.__lT=false;
this._removePlaceholder();
}
if(qx.lang.Type.isString(bl)){var bn=this.getContentElement();

if(bl.length>this.getMaxLength()){bl=bl.substr(0,this.getMaxLength());
}
if(bn.getValue()!=bl){var bo=bn.getValue();
bn.setValue(bl);
var bm=this.__lT?null:bl;
this.__lV=bo;
this.__lY(bm);
}this._showPlaceholder();
return bl;
}throw new Error("Invalid value type: "+bl);
},getValue:function(){var bP=this.getContentElement().getValue();
return this.__lT?null:bP;
},resetValue:function(){this.setValue(null);
},_onChangeContent:function(e){this.__lT=e.getData()===null;
this.__lY(e.getData());
},getTextSelection:function(){return this.getContentElement().getTextSelection();
},getTextSelectionLength:function(){return this.getContentElement().getTextSelectionLength();
},getTextSelectionStart:function(){return this.getContentElement().getTextSelectionStart();
},getTextSelectionEnd:function(){return this.getContentElement().getTextSelectionEnd();
},setTextSelection:function(bj,bk){this.getContentElement().setTextSelection(bj,bk);
},clearTextSelection:function(){this.getContentElement().clearTextSelection();
},selectAllText:function(){this.setTextSelection(0);
},_showPlaceholder:function(){var bg=this.getValue()||n;
var bf=this.getPlaceholder();

if(bf!=null&&bg==n&&!this.hasState(A)&&!this.hasState(G)){if(this.hasState(p)){this._syncPlaceholder();
}else{this.addState(p);
}}},_removePlaceholder:function(){if(this.hasState(p)){this.__ma().setStyle(bd,ba);
this.removeState(p);
}},_syncPlaceholder:function(){if(this.hasState(p)){this.__ma().setStyle(bd,I);
}},__ma:function(){if(this.__lU==null){this.__lU=new qx.html.Label();
this.__lU.setStyles({"visibility":ba,"zIndex":6,"position":X});
this.getContainerElement().add(this.__lU);
}return this.__lU;
},_onChangeLocale:qx.core.Variant.select(l,{"on":function(e){var content=this.getPlaceholder();

if(content&&content.translate){this.setPlaceholder(content.translate());
}},"off":null}),_applyPlaceholder:function(bp,bq){this.__ma().setValue(bp);

if(bp!=null){this.addListener(be,this._removePlaceholder,this);
this.addListener(bc,this._showPlaceholder,this);
this._showPlaceholder();
}else{this.removeListener(be,this._removePlaceholder,this);
this.removeListener(bc,this._showPlaceholder,this);
this._removePlaceholder();
}},_applyTextAlign:function(bh,bi){this.getContentElement().setStyle(r,bh);
},_applyReadOnly:function(bC,bD){var bE=this.getContentElement();
bE.setAttribute(W,bC);

if(bC){this.addState(h);
this.setFocusable(false);
}else{this.removeState(h);
this.setFocusable(true);
}}},destruct:function(){this.__lU=null;

if(qx.core.Variant.isSet(l,Y)){qx.locale.Manager.getInstance().removeListener(bb,this._onChangeLocale,this);
}}});
})();
(function(){var b="qx.ui.form.TextField",a="textfield";
qx.Class.define(b,{extend:qx.ui.form.AbstractField,properties:{appearance:{refine:true,init:a},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}}});
})();
(function(){var p="none",o="wrap",n="value",m="qx.client",l="textarea",k="off",j="on",i="qxSelectable",h="",g="webkit",c="input",f="qx.html.Input",e="select",b="disabled",a="read-only",d="userSelect";
qx.Class.define(f,{extend:qx.html.Element,construct:function(x,y,z){if(x===e||x===l){var A=x;
}else{A=c;
}qx.html.Element.call(this,A,y,z);
this.__mb=x;
},members:{__mb:null,__mc:null,__md:null,_createDomElement:function(){return qx.bom.Input.create(this.__mb);
},_applyProperty:function(name,r){qx.html.Element.prototype._applyProperty.call(this,name,r);
var s=this.getDomElement();

if(name===n){qx.bom.Input.setValue(s,r);
}else if(name===o){qx.bom.Input.setWrap(s,r);
}},setEnabled:qx.core.Variant.select(m,{"webkit":function(v){this.__md=v;

if(!v){this.setStyles({"userModify":a,"userSelect":p});
}else{this.setStyles({"userModify":null,"userSelect":this.__mc?null:p});
}},"default":function(q){this.setAttribute(b,q===false);
}}),setSelectable:qx.core.Variant.select(m,{"webkit":function(C){this.__mc=C;
this.setAttribute(i,C?j:k);
if(qx.core.Variant.isSet(m,g)){var D=this.__md?C?null:p:p;
this.setStyle(d,D);
}},"default":function(B){this.setAttribute(i,B?j:k);
}}),setValue:function(t){var u=this.getDomElement();

if(u){if(u.value!=t){qx.bom.Input.setValue(u,t);
}}else{this._setProperty(n,t);
}return this;
},getValue:function(){var w=this.getDomElement();

if(w){return qx.bom.Input.getValue(w);
}return this._getProperty(n)||h;
},setWrap:function(E){if(this.__mb===l){this._setProperty(o,E);
}else{throw new Error("Text wrapping is only support by textareas!");
}return this;
},getWrap:function(){if(this.__mb===l){return this._getProperty(o);
}else{throw new Error("Text wrapping is only support by textareas!");
}}}});
})();
(function(){var H="change",G="input",F="qx.client",E="text",D="password",C="checkbox",B="radio",A="textarea",z="keypress",y="opera",s="propertychange",x="blur",v="keydown",r="keyup",q="select-multiple",u="checked",t="value",w="select",p="qx.event.handler.Input";
qx.Class.define(p,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){qx.core.Object.call(this);
this._onChangeCheckedWrapper=qx.lang.Function.listener(this._onChangeChecked,this);
this._onChangeValueWrapper=qx.lang.Function.listener(this._onChangeValue,this);
this._onInputWrapper=qx.lang.Function.listener(this._onInput,this);
this._onPropertyWrapper=qx.lang.Function.listener(this._onProperty,this);
if(qx.core.Variant.isSet(F,y)){this._onKeyDownWrapper=qx.lang.Function.listener(this._onKeyDown,this);
this._onKeyUpWrapper=qx.lang.Function.listener(this._onKeyUp,this);
this._onBlurWrapper=qx.lang.Function.listener(this._onBlur,this);
}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{input:1,change:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{__me:false,__mf:null,__mg:null,canHandleEvent:function(h,j){var k=h.tagName.toLowerCase();

if(j===G&&(k===G||k===A)){return true;
}
if(j===H&&(k===G||k===A||k===w)){return true;
}return false;
},registerEvent:qx.core.Variant.select(F,{"mshtml":function(a,b,c){if(!a.__mh){var d=a.tagName.toLowerCase();
var f=a.type;

if(f===E||f===D||d===A||f===C||f===B){qx.bom.Event.addNativeListener(a,s,this._onPropertyWrapper);
}
if(f!==C&&f!==B){qx.bom.Event.addNativeListener(a,H,this._onChangeValueWrapper);
}
if(f===E||f===D){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,a);
qx.bom.Event.addNativeListener(a,z,this._onKeyPressWrapped);
}a.__mh=true;
}},"default":function(Q,R,S){if(R===G){this.__mi(Q);
}else if(R===H){if(Q.type===B||Q.type===C){qx.bom.Event.addNativeListener(Q,H,this._onChangeCheckedWrapper);
}else{qx.bom.Event.addNativeListener(Q,H,this._onChangeValueWrapper);
}if(qx.core.Variant.isSet(F,y)){if(Q.type===E||Q.type===D){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,Q);
qx.bom.Event.addNativeListener(Q,z,this._onKeyPressWrapped);
}}}}}),__mi:qx.core.Variant.select(F,{"mshtml":null,"webkit":function(O){var P=O.tagName.toLowerCase();
if(qx.bom.client.Engine.VERSION<532&&P==A){qx.bom.Event.addNativeListener(O,z,this._onInputWrapper);
}qx.bom.Event.addNativeListener(O,G,this._onInputWrapper);
},"opera":function(L){qx.bom.Event.addNativeListener(L,r,this._onKeyUpWrapper);
qx.bom.Event.addNativeListener(L,v,this._onKeyDownWrapper);
qx.bom.Event.addNativeListener(L,x,this._onBlurWrapper);
qx.bom.Event.addNativeListener(L,G,this._onInputWrapper);
},"default":function(g){qx.bom.Event.addNativeListener(g,G,this._onInputWrapper);
}}),unregisterEvent:qx.core.Variant.select(F,{"mshtml":function(U,V){if(U.__mh){var W=U.tagName.toLowerCase();
var X=U.type;

if(X===E||X===D||W===A||X===C||X===B){qx.bom.Event.removeNativeListener(U,s,this._onPropertyWrapper);
}
if(X!==C&&X!==B){qx.bom.Event.removeNativeListener(U,H,this._onChangeValueWrapper);
}
if(X===E||X===D){qx.bom.Event.removeNativeListener(U,z,this._onKeyPressWrapped);
}
try{delete U.__mh;
}catch(N){U.__mh=null;
}}},"default":function(m,n){if(n===G){this.__mi(m);
}else if(n===H){if(m.type===B||m.type===C){qx.bom.Event.removeNativeListener(m,H,this._onChangeCheckedWrapper);
}else{qx.bom.Event.removeNativeListener(m,H,this._onChangeValueWrapper);
}}
if(qx.core.Variant.isSet(F,y)){if(m.type===E||m.type===D){qx.bom.Event.removeNativeListener(m,z,this._onKeyPressWrapped);
}}}}),__mj:qx.core.Variant.select(F,{"mshtml":null,"webkit":function(J){var K=J.tagName.toLowerCase();
if(qx.bom.client.Engine.VERSION<532&&K==A){qx.bom.Event.removeNativeListener(J,z,this._onInputWrapper);
}qx.bom.Event.removeNativeListener(J,G,this._onInputWrapper);
},"opera":function(bf){qx.bom.Event.removeNativeListener(bf,r,this._onKeyUpWrapper);
qx.bom.Event.removeNativeListener(bf,v,this._onKeyDownWrapper);
qx.bom.Event.removeNativeListener(bf,x,this._onBlurWrapper);
qx.bom.Event.removeNativeListener(bf,G,this._onInputWrapper);
},"default":function(bc){qx.bom.Event.removeNativeListener(bc,G,this._onInputWrapper);
}}),_onKeyPress:qx.core.Variant.select(F,{"mshtml|opera":function(e,T){if(e.keyCode===13){if(T.value!==this.__mg){this.__mg=T.value;
qx.event.Registration.fireEvent(T,H,qx.event.type.Data,[T.value]);
}}},"default":null}),_onKeyDown:qx.core.Variant.select(F,{"opera":function(e){if(e.keyCode===13){this.__me=true;
}},"default":null}),_onKeyUp:qx.core.Variant.select(F,{"opera":function(e){if(e.keyCode===13){this.__me=false;
}},"default":null}),_onBlur:qx.core.Variant.select(F,{"opera":function(e){if(this.__mf){window.clearTimeout(this.__mf);
}},"default":null}),_onInput:qx.event.GlobalError.observeMethod(function(e){var bb=e.target;
if(!this.__me){if(qx.core.Variant.isSet(F,y)){this.__mf=window.setTimeout(function(){qx.event.Registration.fireEvent(bb,G,qx.event.type.Data,[bb.value]);
},0);
}else{qx.event.Registration.fireEvent(bb,G,qx.event.type.Data,[bb.value]);
}}}),_onChangeValue:qx.event.GlobalError.observeMethod(function(e){var be=e.target||e.srcElement;
var bd=be.value;

if(be.type===q){var bd=[];

for(var i=0,o=be.options,l=o.length;i<l;i++){if(o[i].selected){bd.push(o[i].value);
}}}qx.event.Registration.fireEvent(be,H,qx.event.type.Data,[bd]);
}),_onChangeChecked:qx.event.GlobalError.observeMethod(function(e){var M=e.target;

if(M.type===B){if(M.checked){qx.event.Registration.fireEvent(M,H,qx.event.type.Data,[M.value]);
}}else{qx.event.Registration.fireEvent(M,H,qx.event.type.Data,[M.checked]);
}}),_onProperty:qx.core.Variant.select(F,{"mshtml":qx.event.GlobalError.observeMethod(function(e){var Y=e.target||e.srcElement;
var ba=e.propertyName;

if(ba===t&&(Y.type===E||Y.type===D||Y.tagName.toLowerCase()===A)){if(!Y.$$inValueSet){qx.event.Registration.fireEvent(Y,G,qx.event.type.Data,[Y.value]);
}}else if(ba===u){if(Y.type===C){qx.event.Registration.fireEvent(Y,H,qx.event.type.Data,[Y.checked]);
}else if(Y.checked){qx.event.Registration.fireEvent(Y,H,qx.event.type.Data,[Y.value]);
}}}),"default":function(){}})},defer:function(I){qx.event.Registration.addHandler(I);
}});
})();
(function(){var x="",w="select",v="soft",u="off",t="qx.client",s="wrap",r="text",q="mshtml",p="number",o="checkbox",f="select-one",n="input",j="option",e="value",d="radio",h="qx.bom.Input",g="nowrap",k="textarea",c="auto",m="normal";
qx.Class.define(h,{statics:{__mk:{text:1,textarea:1,select:1,checkbox:1,radio:1,password:1,hidden:1,submit:1,image:1,file:1,search:1,reset:1,button:1},create:function(A,B,C){{};
var B=B?qx.lang.Object.clone(B):{};
var D;

if(A===k||A===w){D=A;
}else{D=n;
B.type=A;
}return qx.bom.Element.create(D,B,C);
},setValue:function(E,F){var K=E.nodeName.toLowerCase();
var H=E.type;
var Array=qx.lang.Array;
var L=qx.lang.Type;

if(typeof F===p){F+=x;
}
if((H===o||H===d)){if(L.isArray(F)){E.checked=Array.contains(F,E.value);
}else{E.checked=E.value==F;
}}else if(K===w){var G=L.isArray(F);
var M=E.options;
var I,J;

for(var i=0,l=M.length;i<l;i++){I=M[i];
J=I.getAttribute(e);

if(J==null){J=I.text;
}I.selected=G?Array.contains(F,J):F==J;
}
if(G&&F.length==0){E.selectedIndex=-1;
}}else if(H===r&&qx.core.Variant.isSet(t,q)){E.$$inValueSet=true;
E.value=F;
E.$$inValueSet=null;
}else{E.value=F;
}},getValue:function(N){var T=N.nodeName.toLowerCase();

if(T===j){return (N.attributes.value||{}).specified?N.value:N.text;
}
if(T===w){var O=N.selectedIndex;
if(O<0){return null;
}var U=[];
var W=N.options;
var V=N.type==f;
var S=qx.bom.Input;
var R;
for(var i=V?O:0,Q=V?O+1:W.length;i<Q;i++){var P=W[i];

if(P.selected){R=S.getValue(P);
if(V){return R;
}U.push(R);
}}return U;
}else{return (N.value||x).replace(/\r/g,x);
}},setWrap:qx.core.Variant.select(t,{"mshtml":function(y,z){y.wrap=z?v:u;
},"gecko|webkit":function(X,Y){var bb=Y?v:u;
var ba=Y?x:c;
X.setAttribute(s,bb);
X.style.overflow=ba;
},"default":function(a,b){a.style.whiteSpace=b?m:g;
}})}});
})();
(function(){var b="qx.ui.form.IDateForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var a="qx.ui.form.renderer.IFormRenderer";
qx.Interface.define(a,{members:{addItems:function(b,c,d){},addButton:function(e){}}});
})();
(function(){var J="Validation Error",I="%1 is not a number.",H="%1 is not a color! %2",G="",F="%1 is not a string.",E="number",D="'%1' is not an email address.",C="qx.util.Validate",B="%1 is not an url.",A="%1 is not in %2",x="%1 does not fit %2.",z="string",y="%1 is not in the range from [%2, %3].";
qx.Class.define(C,{statics:{number:function(b){return function(v){qx.util.Validate.checkNumber(v,b);
};
},checkNumber:function(p,q){q=q||qx.locale.Manager.tr(I,p);

if((typeof p!==E&&(!(p instanceof Number)))||(!(isFinite(p)))){throw new qx.core.ValidationError(J,q);
}},email:function(f){return function(K){qx.util.Validate.checkEmail(K,f);
};
},checkEmail:function(Q,R){R=R||qx.locale.Manager.tr(D,(Q||G));
var S=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

if(S.test(Q)===false){throw new qx.core.ValidationError(J,R);
}},string:function(c){return function(O){qx.util.Validate.checkString(O,c);
};
},checkString:function(n,o){o=o||qx.locale.Manager.tr(F,n);

if(typeof n!==z&&(!(n instanceof String))){throw new qx.core.ValidationError(J,o);
}},url:function(a){return function(N){qx.util.Validate.checkUrl(N,a);
};
},checkUrl:function(i,j){j=j||qx.locale.Manager.tr(B,i);
var k=/([A-Za-z0-9])+:\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

if(!k.test(i)){throw new qx.core.ValidationError(J,j);
}},color:function(u){return function(d){qx.util.Validate.checkColor(d,u);
};
},checkColor:function(g,h){try{qx.util.ColorUtil.stringToRgb(g);
}catch(e){h=h||qx.locale.Manager.tr(H,g,e);
throw new qx.core.ValidationError(J,h);
}},range:function(r,s,t){return function(P){t=t||qx.locale.Manager.tr(y,P,r,s);

if(P<r||P>s){throw new qx.core.ValidationError(J,t);
}};
},inArray:function(l,m){return function(w){m=m||qx.locale.Manager.tr(A,w,l);

if(l.indexOf(w)===-1){throw new qx.core.ValidationError(J,m);
}};
},regExp:function(L,M){return function(T){M=M||qx.locale.Manager.tr(x,T,L);

if(!L.test(T)){throw new qx.core.ValidationError(J,M);
}};
}}});
})();
(function(){var b="qx.ui.form.IColorForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var b="qx.ui.form.Resetter";
qx.Class.define(b,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__zN=[];
},members:{__zN:null,add:function(q){if(this.__zR(q)){var r=q.getValue();
}else if(this.__zQ(q)){var r=q.getSelection();
}else{throw new Error("Item "+q+" not supported for reseting.");
}this.__zN.push({item:q,init:r});
},reset:function(){for(var i=0;i<this.__zN.length;i++){var a=this.__zN[i];
this.__zO(a.item,a.init);
}},resetItem:function(f){var g;

for(var i=0;i<this.__zN.length;i++){var h=this.__zN[i];

if(h.item===f){g=h.init;
break;
}}if(g===undefined){throw new Error("The given item has not been added.");
}this.__zO(f,g);
},__zO:function(d,e){if(this.__zR(d)){d.setValue(e);
}else if(this.__zQ(d)){d.setSelection(e);
}},redefine:function(){for(var i=0;i<this.__zN.length;i++){var n=this.__zN[i].item;
this.__zN[i].init=this.__zP(n);
}},redefineItem:function(l){var m;

for(var i=0;i<this.__zN.length;i++){if(this.__zN[i].item===l){m=this.__zN[i];
break;
}}if(m===undefined){throw new Error("The given item has not been added.");
}m.init=this.__zP(m.item);
},__zP:function(c){if(this.__zR(c)){return c.getValue();
}else if(this.__zQ(c)){return c.getSelection();
}},__zQ:function(o){var p=o.constructor;
return qx.Class.hasInterface(p,qx.ui.core.ISingleSelection);
},__zR:function(j){var k=j.constructor;
return (qx.Class.hasInterface(k,qx.ui.form.IBooleanForm)||qx.Class.hasInterface(k,qx.ui.form.IColorForm)||qx.Class.hasInterface(k,qx.ui.form.IDateForm)||qx.Class.hasInterface(k,qx.ui.form.INumberForm)||qx.Class.hasInterface(k,qx.ui.form.IStringForm));
}}});
})();
(function(){var s="",r="URL",q="Add",p="keypress",o="Title",n="__zS",m="Add a feed",l="feedreader.view.AddFeedWindow",k="user",j="this.__form",c="__zU",i="icon/16/actions/document-new.png",g="icon/16/actions/dialog-apply.png",b="__zT",a="right",f="Feed Information",d="execute",h="Enter";
qx.Class.define(l,{extend:qx.ui.window.Window,construct:function(t){qx.ui.window.Window.call(this,this.tr(m),i);
this.__zS=t;
this.set({modal:true,showMinimize:false,showMaximize:false,allowMaximize:false});
this._addContent();
},members:{__zT:null,__zU:null,__zS:null,__zV:null,_addContent:function(){this.setLayout(new qx.ui.layout.VBox(10));
this.__zV=new qx.ui.form.Form();
this.__zV.addGroupHeader(this.tr(f));
this.__zU=new qx.ui.form.TextField().set({required:true,width:250});
this.__zV.add(this.__zU,this.tr(o));
this.__zT=new qx.ui.form.TextField().set({required:true});
this.__zV.add(this.__zT,this.tr(r),qx.util.Validate.checkUrl);
var u=new qx.ui.form.Button(this.tr(q),g);
u.set({alignX:a,allowGrowX:false});
u.addListener(d,this._addFeed,this);
this.__zV.addButton(u);
this.addListener(p,function(e){if(e.getTarget() instanceof qx.ui.form.TextField&&e.getKeyIdentifier()===h){this._addFeed();
}});
this.add(new qx.ui.form.renderer.SinglePlaceholder(this.__zV));
},_addFeed:function(e){if(this.__zV.validate()){var w=this.__zU.getValue();
var v=this.__zT.getValue();
this.__zS.addFeed(w,v,k);
this.__zU.setValue(s);
this.__zT.setValue(s);
this.close();
}}},destruct:function(){this.__zW=null;
this._disposeObjects(n,c,b,j);
}});
})();
(function(){var k="qx.dynlocale",j="",h="changeLocale",g="visibility",f="on",d=" <span style='color:red'>*</span> ",c="abstract",b="qx.ui.form.renderer.AbstractRenderer",a=" :";
qx.Class.define(b,{type:c,extend:qx.ui.core.Widget,implement:qx.ui.form.renderer.IFormRenderer,construct:function(o){qx.ui.core.Widget.call(this);
this._visibilityBindingIds=[];
if(qx.core.Variant.isSet(k,f)){qx.locale.Manager.getInstance().addListener(h,this._onChangeLocale,this);
this._names=[];
}var r=o.getGroups();

for(var i=0;i<r.length;i++){var q=r[i];
this.addItems(q.items,q.labels,q.title);
}var p=o.getButtons();

for(var i=0;i<p.length;i++){this.addButton(p[i]);
}},members:{_names:null,_visibilityBindingIds:null,_connectVisibility:function(t,u){var v=t.bind(g,u,g);
this._visibilityBindingIds.push({id:v,item:t});
},_onChangeLocale:qx.core.Variant.select(k,{"on":function(e){for(var i=0;i<this._names.length;i++){var A=this._names[i];

if(A.name&&A.name.translate){A.name=A.name.translate();
}var B=this._createLabelText(A.name,A.item);
A.label.setValue(B);
}},"off":null}),_createLabelText:function(name,l){var m=j;

if(l.getRequired()){m=d;
}var n=name.length>0||l.getRequired()?a:j;
return name+m+n;
},addItems:function(w,x,y){throw new Error("Abstract method call");
},addButton:function(s){throw new Error("Abstract method call");
}},destruct:function(){if(qx.core.Variant.isSet(k,f)){qx.locale.Manager.getInstance().removeListener(h,this._onChangeLocale,this);
}this._names=null;
for(var i=0;i<this._visibilityBindingIds.length;i++){var z=this._visibilityBindingIds[i];
z.item.removeBinding(z.id);
}}});
})();
(function(){var k="right",j="bold",h="_buttonRow",g="qx.ui.form.renderer.Single",f="left",e="qx.dynlocale",d="top",c="on";
qx.Class.define(g,{extend:qx.ui.form.renderer.AbstractRenderer,construct:function(s){var t=new qx.ui.layout.Grid();
t.setSpacing(6);
t.setColumnFlex(0,1);
t.setColumnAlign(0,k,d);
this._setLayout(t);
qx.ui.form.renderer.AbstractRenderer.call(this,s);
},members:{_row:0,_buttonRow:null,addItems:function(n,o,p){if(p!=null){this._add(this._createHeader(p),{row:this._row,column:0,colSpan:2});
this._row++;
}for(var i=0;i<n.length;i++){var r=this._createLabel(o[i],n[i]);
this._add(r,{row:this._row,column:0});
var q=n[i];
r.setBuddy(q);
this._add(q,{row:this._row,column:1});
this._row++;
this._connectVisibility(q,r);
if(qx.core.Variant.isSet(e,c)){this._names.push({name:o[i],label:r,item:n[i]});
}}},addButton:function(u){if(this._buttonRow==null){this._buttonRow=new qx.ui.container.Composite();
this._buttonRow.setMarginTop(5);
var v=new qx.ui.layout.HBox();
v.setAlignX(k);
v.setSpacing(5);
this._buttonRow.setLayout(v);
this._add(this._buttonRow,{row:this._row,column:0,colSpan:2});
this._row++;
}this._buttonRow.add(u);
},getLayout:function(){return this._getLayout();
},_createLabel:function(name,l){var m=new qx.ui.basic.Label(this._createLabelText(name,l));
m.setRich(true);
return m;
},_createHeader:function(a){var b=new qx.ui.basic.Label(a);
b.setFont(j);

if(this._row!=0){b.setMarginTop(10);
}b.setAlignX(f);
return b;
}},destruct:function(){if(this._buttonRow){this._buttonRow.removeAll();
this._disposeObjects(h);
}}});
})();
(function(){var S="",R="complete",Q="String",P="changeValid",O="qx.event.type.Event",N="value instanceof Function || qx.Class.isSubClassOf(value.constructor, qx.ui.form.validation.AsyncValidator)",M="qx.ui.form.validation.Manager",L="This field is required",K="qx.event.type.Data";
qx.Class.define(M,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__zX=[];
this.__zY={};
this.setRequiredFieldMessage(qx.locale.Manager.tr(L));
},events:{"changeValid":K,"complete":O},properties:{validator:{check:N,init:null,nullable:true},invalidMessage:{check:Q,init:S},requiredFieldMessage:{check:Q,init:S},context:{nullable:true}},members:{__zX:null,__Aa:null,__zY:null,__Ab:null,add:function(x,y,z){if(!this.__Ag(x)){throw new Error("Added widget not supported.");
}if(this.__Ah(x)){if(y!=null){throw new Error("Widgets suporting selection can only be validated "+"in the form validator");
}}var A={item:x,validator:y,valid:null,context:z};
this.__zX.push(A);
},validate:function(){var I=true;
this.__Ab=true;
var F=[];
for(var i=0;i<this.__zX.length;i++){var G=this.__zX[i].item;
var J=this.__zX[i].validator;
F.push(G);
if(J==null){var E=this.__Ac(G);
I=I&&E;
this.__Ab=E&&this.__Ab;
continue;
}var E=this.__Ad(this.__zX[i],G.getValue());
I=E&&I;

if(E!=null){this.__Ab=E&&this.__Ab;
}}var H=this.__Ae(F);

if(qx.lang.Type.isBoolean(H)){this.__Ab=H&&this.__Ab;
}I=H&&I;
this.__Aj(I);

if(qx.lang.Object.isEmpty(this.__zY)){this.fireEvent(R);
}return I;
},__Ac:function(m){if(m.getRequired()){if(this.__Ah(m)){var n=!!m.getSelection()[0];
}else{var n=!!m.getValue();
}m.setValid(n);
var p=m.getRequiredInvalidMessage();
var o=p?p:this.getRequiredFieldMessage();
m.setInvalidMessage(o);
return n;
}return true;
},__Ad:function(V,W){var bc=V.item;
var bb=V.context;
var ba=V.validator;
if(this.__Af(ba)){this.__zY[bc.toHashCode()]=null;
ba.validate(bc,bc.getValue(),this,bb);
return null;
}var Y=null;

try{var Y=ba.call(bb||this,W,bc);

if(Y===undefined){Y=true;
}}catch(e){if(e instanceof qx.core.ValidationError){Y=false;

if(e.message&&e.message!=qx.type.BaseError.DEFAULTMESSAGE){var X=e.message;
}else{var X=e.getComment();
}bc.setInvalidMessage(X);
}else{throw e;
}}bc.setValid(Y);
V.valid=Y;
return Y;
},__Ae:function(a){var c=this.getValidator();
var d=this.getContext()||this;

if(c==null){return true;
}this.setInvalidMessage(S);

if(this.__Af(c)){this.__zY[this.toHashCode()]=null;
c.validateForm(a,this,d);
return null;
}
try{var f=c.call(d,a,this);

if(f===undefined){f=true;
}}catch(e){if(e instanceof qx.core.ValidationError){f=false;

if(e.message&&e.message!=qx.type.BaseError.DEFAULTMESSAGE){var b=e.message;
}else{var b=e.getComment();
}this.setInvalidMessage(b);
}else{throw e;
}}return f;
},__Af:function(v){var w=false;

if(!qx.lang.Type.isFunction(v)){w=qx.Class.isSubClassOf(v.constructor,qx.ui.form.validation.AsyncValidator);
}return w;
},__Ag:function(q){var r=q.constructor;
return qx.Class.hasInterface(r,qx.ui.form.IForm);
},__Ah:function(B){var C=B.constructor;
return qx.Class.hasInterface(C,qx.ui.core.ISingleSelection);
},__Ai:function(k){var l=k.constructor;
return (qx.Class.hasInterface(l,qx.ui.form.IBooleanForm)||qx.Class.hasInterface(l,qx.ui.form.IColorForm)||qx.Class.hasInterface(l,qx.ui.form.IDateForm)||qx.Class.hasInterface(l,qx.ui.form.INumberForm)||qx.Class.hasInterface(l,qx.ui.form.IStringForm));
},__Aj:function(T){var U=this.__Aa;
this.__Aa=T;
if(U!=T){this.fireDataEvent(P,T,U);
}},getValid:function(){return this.__Aa;
},isValid:function(){return this.getValid();
},getInvalidMessages:function(){var g=[];
for(var i=0;i<this.__zX.length;i++){var h=this.__zX[i].item;

if(!h.getValid()){g.push(h.getInvalidMessage());
}}if(this.getInvalidMessage()!=S){g.push(this.getInvalidMessage());
}return g;
},reset:function(){for(var i=0;i<this.__zX.length;i++){var j=this.__zX[i];
j.item.setValid(true);
}this.__Aa=null;
},setItemValid:function(bd,be){this.__zY[bd.toHashCode()]=be;
bd.setValid(be);
this.__Ak();
},setFormValid:function(D){this.__zY[this.toHashCode()]=D;
this.__Ak();
},__Ak:function(){var t=this.__Ab;
for(var u in this.__zY){var s=this.__zY[u];
t=s&&t;
if(s==null){return;
}}this.__Aj(t);
this.__zY={};
this.fireEvent(R);
}},destruct:function(){this.__zX=null;
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
qx.Class.define(a,{extend:qx.core.Object,construct:function(k){qx.core.Object.call(this);
this.__Al=k;
},members:{__Al:null,__Am:null,__An:null,__Ao:null,validate:function(g,h,i,j){this.__Ao=false;
this.__Am=g;
this.__An=i;
this.__Al.call(j||this,this,h);
},validateForm:function(d,e,f){this.__Ao=true;
this.__An=e;
this.__Al.call(f,d,this);
},setValid:function(b,c){if(this.__Ao){if(c!==undefined){this.__An.setInvalidMessage(c);
}this.__An.setFormValid(b);
}else{if(c!==undefined){this.__Am.setInvalidMessage(c);
}this.__An.setItemValid(this.__Am,b);
}}},destruct:function(){this.__An=this.__Am=null;
}});
})();
(function(){var b="qx.ui.form.Form",a="";
qx.Class.define(b,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__Ap=[];
this.__Aq=[];
this._validationManager=new qx.ui.form.validation.Manager();
this._resetter=new qx.ui.form.Resetter();
},members:{__Ap:null,_validationManager:null,__Ar:0,__Aq:null,_resetter:null,add:function(d,e,f,name,g){if(this.__As()){this.__Ap.push({title:null,items:[],labels:[],names:[]});
}this.__Ap[this.__Ar].items.push(d);
this.__Ap[this.__Ar].labels.push(e);
if(name==null){name=e.replace(/\s+|&|-|\+|\*|\/|\||!|\.|,|:|\?|;|~|%|\{|\}|\(|\)|\[|\]|<|>|=|\^|@|\\/g,a);
}this.__Ap[this.__Ar].names.push(name);
this._validationManager.add(d,f,g);
this._resetter.add(d);
},addGroupHeader:function(c){if(!this.__As()){this.__Ar++;
}this.__Ap.push({title:c,items:[],labels:[],names:[]});
},addButton:function(h){this.__Aq.push(h);
},__As:function(){return this.__Ap.length===0;
},reset:function(){this._resetter.reset();
this._validationManager.reset();
},redefineResetter:function(){this._resetter.redefine();
},validate:function(){return this._validationManager.validate();
},getValidationManager:function(){return this._validationManager;
},getGroups:function(){return this.__Ap;
},getButtons:function(){return this.__Aq;
},getItems:function(){var k={};
for(var i=0;i<this.__Ap.length;i++){var l=this.__Ap[i];
for(var j=0;j<l.names.length;j++){var name=l.names[j];
k[name]=l.items[j];
}}return k;
}}});
})();

});