qx.$$packageData['32063c65e6d7']={"locales":{},"resources":{"feedreader/images/combined/icons16.png":[16,96,"png","feedreader"],"qx/icon/Tango/16/actions/dialog-apply.png":[16,16,"png","qx","feedreader/images/combined/icons16.png",0,-80],"qx/icon/Tango/16/actions/document-new.png":[16,16,"png","qx","feedreader/images/combined/icons16.png",0,-16]},"translations":{}};

qx.Part.$$notifyLoad("32063c65e6d7", function() {
(function(){var Q="showingPlaceholder",P="",O="none",N="qx.dynlocale",M="Boolean",L="qx.client",K="color",J="qx.event.type.Data",I="readonly",H="input",bF="focusin",bE="visibility",bD="focusout",bC="changeLocale",bB="hidden",bA="on",bz="absolute",by="readOnly",bx="text",bw="_applyTextAlign",X="px",Y="RegExp",V=")",W="syncAppearance",T="changeValue",U="A",R="change",S="textAlign",bc="focused",bd="center",bk="visible",bi="disabled",bo="url(",bm="off",bs="String",bq="resize",bf="qx.ui.form.AbstractField",bv="transparent",bu="spellcheck",bt="false",be="right",bg="PositiveInteger",bh="mshtml",bj="abstract",bl="block",bn="webkit",bp="_applyReadOnly",br="_applyPlaceholder",ba="left",bb="qx/static/blank.gif";
qx.Class.define(bf,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm,qx.ui.form.IForm],include:[qx.ui.form.MForm],type:bj,construct:function(C){qx.ui.core.Widget.call(this);

if(C!=null){this.setValue(C);
}this.getContentElement().addListener(R,this._onChangeContent,this);
this.addListener(W,this._syncPlaceholder,this);
if(qx.core.Variant.isSet(N,bA)){qx.locale.Manager.getInstance().addListener(bC,this._onChangeLocale,this);
}},events:{"input":J,"changeValue":J},properties:{textAlign:{check:[ba,bd,be],nullable:true,themeable:true,apply:bw},readOnly:{check:M,apply:bp,init:false},selectable:{refine:true,init:true},focusable:{refine:true,init:true},maxLength:{check:bg,init:Infinity},liveUpdate:{check:M,init:false},placeholder:{check:bs,nullable:true,apply:br},filter:{check:Y,nullable:true,init:null}},members:{__lY:true,__ma:null,__mb:null,__mc:null,getFocusElement:function(){var o=this.getContentElement();

if(o){return o;
}},_createInputElement:function(){return new qx.html.Input(bx);
},renderLayout:function(bJ,top,bK,bL){var bM=this._updateInsets;
var bQ=qx.ui.core.Widget.prototype.renderLayout.call(this,bJ,top,bK,bL);
if(!bQ){return;
}var bO=bQ.size||bM;
var bR=X;

if(bO||bQ.local||bQ.margin){var bN=this.getInsets();
var innerWidth=bK-bN.left-bN.right;
var innerHeight=bL-bN.top-bN.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}var bP=this.getContentElement();

if(bM){this.__mf().setStyles({"left":bN.left+bR,"top":bN.top+bR});
}
if(bO){this.__mf().setStyles({"width":innerWidth+bR,"height":innerHeight+bR});
bP.setStyles({"width":innerWidth+bR,"height":innerHeight+bR});
this._renderContentElement(innerHeight,bP);
}},_renderContentElement:function(innerHeight,w){},_createContentElement:function(){var z=this._createInputElement();
z.setStyles({"border":O,"padding":0,"margin":0,"display":bl,"background":bv,"outline":O,"appearance":O,"position":bz,"autoComplete":bm});
z.setSelectable(this.getSelectable());
z.setEnabled(this.getEnabled());
z.addListener(H,this._onHtmlInput,this);
z.setAttribute(bu,bt);
if(qx.core.Variant.isSet(L,bn)){z.setStyle(bq,O);
}if(qx.core.Variant.isSet(L,bh)){z.setStyles({backgroundImage:bo+qx.util.ResourceManager.getInstance().toUri(bb)+V});
}return z;
},_applyEnabled:function(a,b){qx.ui.core.Widget.prototype._applyEnabled.call(this,a,b);
this.getContentElement().setEnabled(a);

if(a){this._showPlaceholder();
}else{this._removePlaceholder();
}},__md:{width:16,height:16},_getContentHint:function(){return {width:this.__md.width*10,height:this.__md.height||16};
},_applyFont:function(s,t){var u;

if(s){var v=qx.theme.manager.Font.getInstance().resolve(s);
u=v.getStyles();
}else{u=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(u);
this.__mf().setStyles(u);
if(s){this.__md=qx.bom.Label.getTextSize(U,u);
}else{delete this.__md;
}qx.ui.core.queue.Layout.add(this);
},_applyTextColor:function(h,i){if(h){this.getContentElement().setStyle(K,qx.theme.manager.Color.getInstance().resolve(h));
}else{this.getContentElement().removeStyle(K);
}},tabFocus:function(){qx.ui.core.Widget.prototype.tabFocus.call(this);
this.selectAllText();
},_getTextSize:function(){return this.__md;
},_onHtmlInput:function(e){var m=e.getData();
var l=true;
this.__lY=false;
if(this.getFilter()!=null){var n=P;
var j=m.search(this.getFilter());
var k=m;

while(j>=0){n=n+(k.charAt(j));
k=k.substring(j+1,k.length);
j=k.search(this.getFilter());
}
if(n!=m){l=false;
m=n;
this.getContentElement().setValue(m);
}}if(m.length>this.getMaxLength()){var l=false;
this.getContentElement().setValue(m.substr(0,this.getMaxLength()));
}if(l){this.fireDataEvent(H,m,this.__mc);
this.__mc=m;
if(this.getLiveUpdate()){this.__me(m);
}}},__me:function(F){var G=this.__mb;
this.__mb=F;

if(G!=F){this.fireNonBubblingEvent(T,qx.event.type.Data,[F,G]);
}},setValue:function(c){if(c===null){if(this.__lY){return c;
}c=P;
this.__lY=true;
}else{this.__lY=false;
this._removePlaceholder();
}
if(qx.lang.Type.isString(c)){var f=this.getContentElement();

if(c.length>this.getMaxLength()){c=c.substr(0,this.getMaxLength());
}
if(f.getValue()!=c){var g=f.getValue();
f.setValue(c);
var d=this.__lY?null:c;
this.__mb=g;
this.__me(d);
}this._showPlaceholder();
return c;
}throw new Error("Invalid value type: "+c);
},getValue:function(){var bI=this.getContentElement().getValue();
return this.__lY?null:bI;
},resetValue:function(){this.setValue(null);
},_onChangeContent:function(e){this.__lY=e.getData()===null;
this.__me(e.getData());
},getTextSelection:function(){return this.getContentElement().getTextSelection();
},getTextSelectionLength:function(){return this.getContentElement().getTextSelectionLength();
},getTextSelectionStart:function(){return this.getContentElement().getTextSelectionStart();
},getTextSelectionEnd:function(){return this.getContentElement().getTextSelectionEnd();
},setTextSelection:function(A,B){this.getContentElement().setTextSelection(A,B);
},clearTextSelection:function(){this.getContentElement().clearTextSelection();
},selectAllText:function(){this.setTextSelection(0);
},_showPlaceholder:function(){var bH=this.getValue()||P;
var bG=this.getPlaceholder();

if(bG!=null&&bH==P&&!this.hasState(bc)&&!this.hasState(bi)){if(this.hasState(Q)){this._syncPlaceholder();
}else{this.addState(Q);
}}},_removePlaceholder:function(){if(this.hasState(Q)){this.__mf().setStyle(bE,bB);
this.removeState(Q);
}},_syncPlaceholder:function(){if(this.hasState(Q)){this.__mf().setStyle(bE,bk);
}},__mf:function(){if(this.__ma==null){this.__ma=new qx.html.Label();
this.__ma.setStyles({"visibility":bB,"zIndex":6,"position":bz});
this.getContainerElement().add(this.__ma);
}return this.__ma;
},_onChangeLocale:qx.core.Variant.select(N,{"on":function(e){var content=this.getPlaceholder();

if(content&&content.translate){this.setPlaceholder(content.translate());
}},"off":null}),_applyPlaceholder:function(x,y){this.__mf().setValue(x);

if(x!=null){this.addListener(bF,this._removePlaceholder,this);
this.addListener(bD,this._showPlaceholder,this);
this._showPlaceholder();
}else{this.removeListener(bF,this._removePlaceholder,this);
this.removeListener(bD,this._showPlaceholder,this);
this._removePlaceholder();
}},_applyTextAlign:function(D,E){this.getContentElement().setStyle(S,D);
},_applyReadOnly:function(p,q){var r=this.getContentElement();
r.setAttribute(by,p);

if(p){this.addState(I);
this.setFocusable(false);
}else{this.removeState(I);
this.setFocusable(true);
}}},destruct:function(){this.__ma=null;

if(qx.core.Variant.isSet(N,bA)){qx.locale.Manager.getInstance().removeListener(bC,this._onChangeLocale,this);
}}});
})();
(function(){var b="qx.ui.form.TextField",a="textfield";
qx.Class.define(b,{extend:qx.ui.form.AbstractField,properties:{appearance:{refine:true,init:a},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{_renderContentElement:function(innerHeight,c){}}});
})();
(function(){var q="none",p="wrap",o="value",n="qx.client",m="textarea",l="off",k="on",j="qxSelectable",i="",h="webkit",d="input",g="qx.html.Input",f="select",c="disabled",b="read-only",e="userSelect";
qx.Class.define(g,{extend:qx.html.Element,construct:function(s,t,u){if(s===f||s===m){var v=s;
}else{v=d;
}qx.html.Element.call(this,v,t,u);
this.__mg=s;
},members:{__mg:null,__mh:null,__mi:null,_createDomElement:function(){return qx.bom.Input.create(this.__mg);
},_applyProperty:function(name,y){qx.html.Element.prototype._applyProperty.call(this,name,y);
var z=this.getDomElement();

if(name===o){qx.bom.Input.setValue(z,y);
}else if(name===p){qx.bom.Input.setWrap(z,y);
}},setEnabled:qx.core.Variant.select(n,{"webkit":function(x){this.__mi=x;

if(!x){this.setStyles({"userModify":b,"userSelect":q});
}else{this.setStyles({"userModify":null,"userSelect":this.__mh?null:q});
}},"default":function(r){this.setAttribute(c,r===false);
}}),setSelectable:qx.core.Variant.select(n,{"webkit":function(A){this.__mh=A;
this.setAttribute(j,A?k:l);
if(qx.core.Variant.isSet(n,h)){var B=this.__mi?A?null:q:q;
this.setStyle(e,B);
}},"default":function(a){this.setAttribute(j,a?k:l);
}}),setValue:function(D){var E=this.getDomElement();

if(E){if(E.value!=D){qx.bom.Input.setValue(E,D);
}}else{this._setProperty(o,D);
}return this;
},getValue:function(){var C=this.getDomElement();

if(C){return qx.bom.Input.getValue(C);
}return this._getProperty(o)||i;
},setWrap:function(w){if(this.__mg===m){this._setProperty(p,w);
}else{throw new Error("Text wrapping is only support by textareas!");
}return this;
},getWrap:function(){if(this.__mg===m){return this._getProperty(p);
}else{throw new Error("Text wrapping is only support by textareas!");
}}}});
})();
(function(){var W="change",V="input",U="qx.client",T="text",S="password",R="checkbox",Q="radio",P="textarea",O="keypress",N="opera",H="propertychange",M="blur",K="keydown",G="keyup",F="select-multiple",J="checked",I="value",L="select",E="qx.event.handler.Input";
qx.Class.define(E,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){qx.core.Object.call(this);
this._onChangeCheckedWrapper=qx.lang.Function.listener(this._onChangeChecked,this);
this._onChangeValueWrapper=qx.lang.Function.listener(this._onChangeValue,this);
this._onInputWrapper=qx.lang.Function.listener(this._onInput,this);
this._onPropertyWrapper=qx.lang.Function.listener(this._onProperty,this);
if(qx.core.Variant.isSet(U,N)){this._onKeyDownWrapper=qx.lang.Function.listener(this._onKeyDown,this);
this._onKeyUpWrapper=qx.lang.Function.listener(this._onKeyUp,this);
this._onBlurWrapper=qx.lang.Function.listener(this._onBlur,this);
}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{input:1,change:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{__mj:false,__mk:null,__ml:null,canHandleEvent:function(ba,bb){var bc=ba.tagName.toLowerCase();

if(bb===V&&(bc===V||bc===P)){return true;
}
if(bb===W&&(bc===V||bc===P||bc===L)){return true;
}return false;
},registerEvent:qx.core.Variant.select(U,{"mshtml":function(g,h,j){if(!g.__mm){var k=g.tagName.toLowerCase();
var m=g.type;

if(m===T||m===S||k===P||m===R||m===Q){qx.bom.Event.addNativeListener(g,H,this._onPropertyWrapper);
}
if(m!==R&&m!==Q){qx.bom.Event.addNativeListener(g,W,this._onChangeValueWrapper);
}
if(m===T||m===S){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,g);
qx.bom.Event.addNativeListener(g,O,this._onKeyPressWrapped);
}g.__mm=true;
}},"default":function(q,r,s){if(r===V){this.__mn(q);
}else if(r===W){if(q.type===Q||q.type===R){qx.bom.Event.addNativeListener(q,W,this._onChangeCheckedWrapper);
}else{qx.bom.Event.addNativeListener(q,W,this._onChangeValueWrapper);
}if(qx.core.Variant.isSet(U,N)){if(q.type===T||q.type===S){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,q);
qx.bom.Event.addNativeListener(q,O,this._onKeyPressWrapped);
}}}}}),__mn:qx.core.Variant.select(U,{"mshtml":null,"webkit":function(d){var f=d.tagName.toLowerCase();
if(qx.bom.client.Engine.VERSION<532&&f==P){qx.bom.Event.addNativeListener(d,O,this._onInputWrapper);
}qx.bom.Event.addNativeListener(d,V,this._onInputWrapper);
},"opera":function(n){qx.bom.Event.addNativeListener(n,G,this._onKeyUpWrapper);
qx.bom.Event.addNativeListener(n,K,this._onKeyDownWrapper);
qx.bom.Event.addNativeListener(n,M,this._onBlurWrapper);
qx.bom.Event.addNativeListener(n,V,this._onInputWrapper);
},"default":function(w){qx.bom.Event.addNativeListener(w,V,this._onInputWrapper);
}}),unregisterEvent:qx.core.Variant.select(U,{"mshtml":function(x,y){if(x.__mm){var z=x.tagName.toLowerCase();
var A=x.type;

if(A===T||A===S||z===P||A===R||A===Q){qx.bom.Event.removeNativeListener(x,H,this._onPropertyWrapper);
}
if(A!==R&&A!==Q){qx.bom.Event.removeNativeListener(x,W,this._onChangeValueWrapper);
}
if(A===T||A===S){qx.bom.Event.removeNativeListener(x,O,this._onKeyPressWrapped);
}
try{delete x.__mm;
}catch(X){x.__mm=null;
}}},"default":function(u,v){if(v===V){this.__mn(u);
}else if(v===W){if(u.type===Q||u.type===R){qx.bom.Event.removeNativeListener(u,W,this._onChangeCheckedWrapper);
}else{qx.bom.Event.removeNativeListener(u,W,this._onChangeValueWrapper);
}}
if(qx.core.Variant.isSet(U,N)){if(u.type===T||u.type===S){qx.bom.Event.removeNativeListener(u,O,this._onKeyPressWrapped);
}}}}),__mo:qx.core.Variant.select(U,{"mshtml":null,"webkit":function(B){var C=B.tagName.toLowerCase();
if(qx.bom.client.Engine.VERSION<532&&C==P){qx.bom.Event.removeNativeListener(B,O,this._onInputWrapper);
}qx.bom.Event.removeNativeListener(B,V,this._onInputWrapper);
},"opera":function(bd){qx.bom.Event.removeNativeListener(bd,G,this._onKeyUpWrapper);
qx.bom.Event.removeNativeListener(bd,K,this._onKeyDownWrapper);
qx.bom.Event.removeNativeListener(bd,M,this._onBlurWrapper);
qx.bom.Event.removeNativeListener(bd,V,this._onInputWrapper);
},"default":function(c){qx.bom.Event.removeNativeListener(c,V,this._onInputWrapper);
}}),_onKeyPress:qx.core.Variant.select(U,{"mshtml|opera":function(e,p){if(e.keyCode===13){if(p.value!==this.__ml){this.__ml=p.value;
qx.event.Registration.fireEvent(p,W,qx.event.type.Data,[p.value]);
}}},"default":null}),_onKeyDown:qx.core.Variant.select(U,{"opera":function(e){if(e.keyCode===13){this.__mj=true;
}},"default":null}),_onKeyUp:qx.core.Variant.select(U,{"opera":function(e){if(e.keyCode===13){this.__mj=false;
}},"default":null}),_onBlur:qx.core.Variant.select(U,{"opera":function(e){if(this.__mk){window.clearTimeout(this.__mk);
}},"default":null}),_onInput:qx.event.GlobalError.observeMethod(function(e){var Y=e.target;
if(!this.__mj){if(qx.core.Variant.isSet(U,N)){this.__mk=window.setTimeout(function(){qx.event.Registration.fireEvent(Y,V,qx.event.type.Data,[Y.value]);
},0);
}else{qx.event.Registration.fireEvent(Y,V,qx.event.type.Data,[Y.value]);
}}}),_onChangeValue:qx.event.GlobalError.observeMethod(function(e){var bf=e.target||e.srcElement;
var be=bf.value;

if(bf.type===F){var be=[];

for(var i=0,o=bf.options,l=o.length;i<l;i++){if(o[i].selected){be.push(o[i].value);
}}}qx.event.Registration.fireEvent(bf,W,qx.event.type.Data,[be]);
}),_onChangeChecked:qx.event.GlobalError.observeMethod(function(e){var t=e.target;

if(t.type===Q){if(t.checked){qx.event.Registration.fireEvent(t,W,qx.event.type.Data,[t.value]);
}}else{qx.event.Registration.fireEvent(t,W,qx.event.type.Data,[t.checked]);
}}),_onProperty:qx.core.Variant.select(U,{"mshtml":qx.event.GlobalError.observeMethod(function(e){var a=e.target||e.srcElement;
var b=e.propertyName;

if(b===I&&(a.type===T||a.type===S||a.tagName.toLowerCase()===P)){if(!a.$$inValueSet){qx.event.Registration.fireEvent(a,V,qx.event.type.Data,[a.value]);
}}else if(b===J){if(a.type===R){qx.event.Registration.fireEvent(a,W,qx.event.type.Data,[a.checked]);
}else if(a.checked){qx.event.Registration.fireEvent(a,W,qx.event.type.Data,[a.value]);
}}}),"default":function(){}})},defer:function(D){qx.event.Registration.addHandler(D);
}});
})();
(function(){var v="",u="select",t="soft",s="off",r="qx.client",q="textarea",p="wrap",o="text",n="mshtml",m="number",d="checkbox",k="select-one",g="input",c="option",b="value",f="radio",e="qx.bom.Input",h="nowrap",a="auto",j="normal";
qx.Class.define(e,{statics:{__mp:{text:1,textarea:1,select:1,checkbox:1,radio:1,password:1,hidden:1,submit:1,image:1,file:1,search:1,reset:1,button:1},create:function(X,Y,ba){{};
var Y=Y?qx.lang.Object.clone(Y):{};
var bb;

if(X===q||X===u){bb=X;
}else{bb=g;
Y.type=X;
}return qx.bom.Element.create(bb,Y,ba);
},setValue:function(K,L){var Q=K.nodeName.toLowerCase();
var N=K.type;
var Array=qx.lang.Array;
var R=qx.lang.Type;

if(typeof L===m){L+=v;
}
if((N===d||N===f)){if(R.isArray(L)){K.checked=Array.contains(L,K.value);
}else{K.checked=K.value==L;
}}else if(Q===u){var M=R.isArray(L);
var S=K.options;
var O,P;

for(var i=0,l=S.length;i<l;i++){O=S[i];
P=O.getAttribute(b);

if(P==null){P=O.text;
}O.selected=M?Array.contains(L,P):L==P;
}
if(M&&L.length==0){K.selectedIndex=-1;
}}else if((N===o||N===q)&&qx.core.Variant.isSet(r,n)){K.$$inValueSet=true;
K.value=L;
K.$$inValueSet=null;
}else{K.value=L;
}},getValue:function(y){var E=y.nodeName.toLowerCase();

if(E===c){return (y.attributes.value||{}).specified?y.value:y.text;
}
if(E===u){var z=y.selectedIndex;
if(z<0){return null;
}var F=[];
var H=y.options;
var G=y.type==k;
var D=qx.bom.Input;
var C;
for(var i=G?z:0,B=G?z+1:H.length;i<B;i++){var A=H[i];

if(A.selected){C=D.getValue(A);
if(G){return C;
}F.push(C);
}}return F;
}else{return (y.value||v).replace(/\r/g,v);
}},setWrap:qx.core.Variant.select(r,{"mshtml":function(I,J){I.wrap=J?t:s;
},"gecko|webkit":function(T,U){var W=U?t:s;
var V=U?v:a;
T.setAttribute(p,W);
T.style.overflow=V;
},"default":function(w,x){w.style.whiteSpace=x?j:h;
}})}});
})();
(function(){var b="qx.ui.form.IDateForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var a="qx.ui.form.renderer.IFormRenderer";
qx.Interface.define(a,{members:{addItems:function(c,d,e){},addButton:function(b){}}});
})();
(function(){var o="Validation Error",n="%1 is not a number.",m="%1 is not a color! %2",l="",k="%1 is not a string.",j="number",i="'%1' is not an email address.",h="qx.util.Validate",g="%1 is not an url.",f="%1 is not in %2",b="%1 does not fit %2.",d="string",c="%1 is not in the range from [%2, %3].";
qx.Class.define(h,{statics:{number:function(p){return function(v){qx.util.Validate.checkNumber(v,p);
};
},checkNumber:function(z,A){A=A||qx.locale.Manager.tr(n,z);

if((typeof z!==j&&(!(z instanceof Number)))||(!(isFinite(z)))){throw new qx.core.ValidationError(o,A);
}},email:function(a){return function(r){qx.util.Validate.checkEmail(r,a);
};
},checkEmail:function(w,x){x=x||qx.locale.Manager.tr(i,(w||l));
var y=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

if(y.test(w)===false){throw new qx.core.ValidationError(o,x);
}},string:function(C){return function(q){qx.util.Validate.checkString(q,C);
};
},checkString:function(S,T){T=T||qx.locale.Manager.tr(k,S);

if(typeof S!==d&&(!(S instanceof String))){throw new qx.core.ValidationError(o,T);
}},url:function(I){return function(J){qx.util.Validate.checkUrl(J,I);
};
},checkUrl:function(F,G){G=G||qx.locale.Manager.tr(g,F);
var H=/([A-Za-z0-9])+:\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

if(!H.test(F)){throw new qx.core.ValidationError(o,G);
}},color:function(K){return function(O){qx.util.Validate.checkColor(O,K);
};
},checkColor:function(P,Q){try{qx.util.ColorUtil.stringToRgb(P);
}catch(e){Q=Q||qx.locale.Manager.tr(m,P,e);
throw new qx.core.ValidationError(o,Q);
}},range:function(s,t,u){return function(B){u=u||qx.locale.Manager.tr(c,B,s,t);

if(B<s||B>t){throw new qx.core.ValidationError(o,u);
}};
},inArray:function(D,E){return function(L){E=E||qx.locale.Manager.tr(f,L,D);

if(D.indexOf(L)===-1){throw new qx.core.ValidationError(o,E);
}};
},regExp:function(M,N){return function(R){N=N||qx.locale.Manager.tr(b,R,M);

if(!M.test(R)){throw new qx.core.ValidationError(o,N);
}};
}}});
})();
(function(){var b="qx.ui.form.IColorForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var a="qx.ui.form.Resetter";
qx.Class.define(a,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__zY=[];
},members:{__zY:null,add:function(q){if(this.__Ad(q)){var r=q.getValue();
}else if(this.__Ac(q)){var r=q.getSelection();
}else{throw new Error("Item "+q+" not supported for reseting.");
}this.__zY.push({item:q,init:r});
},reset:function(){for(var i=0;i<this.__zY.length;i++){var p=this.__zY[i];
this.__Aa(p.item,p.init);
}},resetItem:function(e){var f;

for(var i=0;i<this.__zY.length;i++){var g=this.__zY[i];

if(g.item===e){f=g.init;
break;
}}if(f===undefined){throw new Error("The given item has not been added.");
}this.__Aa(e,f);
},__Aa:function(k,l){if(this.__Ad(k)){k.setValue(l);
}else if(this.__Ac(k)){k.setSelection(l);
}},redefine:function(){for(var i=0;i<this.__zY.length;i++){var d=this.__zY[i].item;
this.__zY[i].init=this.__Ab(d);
}},redefineItem:function(b){var c;

for(var i=0;i<this.__zY.length;i++){if(this.__zY[i].item===b){c=this.__zY[i];
break;
}}if(c===undefined){throw new Error("The given item has not been added.");
}c.init=this.__Ab(c.item);
},__Ab:function(o){if(this.__Ad(o)){return o.getValue();
}else if(this.__Ac(o)){return o.getSelection();
}},__Ac:function(m){var n=m.constructor;
return qx.Class.hasInterface(n,qx.ui.core.ISingleSelection);
},__Ad:function(h){var j=h.constructor;
return (qx.Class.hasInterface(j,qx.ui.form.IBooleanForm)||qx.Class.hasInterface(j,qx.ui.form.IColorForm)||qx.Class.hasInterface(j,qx.ui.form.IDateForm)||qx.Class.hasInterface(j,qx.ui.form.INumberForm)||qx.Class.hasInterface(j,qx.ui.form.IStringForm));
}},destruct:function(){this.__zY=null;
}});
})();
(function(){var s="",r="URL",q="Add",p="keypress",o="Title",n="Add a feed",m="feedreader.view.AddFeedWindow",l="__Af",k="user",j="this.__form",c="__Ae",i="icon/16/actions/document-new.png",g="icon/16/actions/dialog-apply.png",b="__Ag",a="right",f="Feed Information",d="execute",h="Enter";
qx.Class.define(m,{extend:qx.ui.window.Window,construct:function(w){qx.ui.window.Window.call(this,this.tr(n),i);
this.__Ae=w;
this.set({modal:true,showMinimize:false,showMaximize:false,allowMaximize:false});
this._addContent();
},members:{__Af:null,__Ag:null,__Ae:null,__Ah:null,_addContent:function(){this.setLayout(new qx.ui.layout.VBox(10));
this.__Ah=new qx.ui.form.Form();
this.__Ah.addGroupHeader(this.tr(f));
this.__Ag=new qx.ui.form.TextField().set({required:true,width:250});
this.__Ah.add(this.__Ag,this.tr(o));
this.__Af=new qx.ui.form.TextField().set({required:true});
this.__Ah.add(this.__Af,this.tr(r),qx.util.Validate.checkUrl);
var t=new qx.ui.form.Button(this.tr(q),g);
t.set({alignX:a,allowGrowX:false});
t.addListener(d,this._addFeed,this);
this.__Ah.addButton(t);
this.addListener(p,function(e){if(e.getTarget() instanceof qx.ui.form.TextField&&e.getKeyIdentifier()===h){this._addFeed();
}});
this.add(new qx.ui.form.renderer.SinglePlaceholder(this.__Ah));
},_addFeed:function(e){if(this.__Ah.validate()){var v=this.__Ag.getValue();
var u=this.__Af.getValue();
this.__Ae.addFeed(v,u,k);
this.__Ag.setValue(s);
this.__Af.setValue(s);
this.close();
}}},destruct:function(){this.__Ai=null;
this._disposeObjects(c,b,l,j);
}});
})();
(function(){var k="qx.dynlocale",j="",h="changeLocale",g="visibility",f="on",d=" <span style='color:red'>*</span> ",c="abstract",b="qx.ui.form.renderer.AbstractRenderer",a=" :";
qx.Class.define(b,{type:c,extend:qx.ui.core.Widget,implement:qx.ui.form.renderer.IFormRenderer,construct:function(y){qx.ui.core.Widget.call(this);
this._visibilityBindingIds=[];
if(qx.core.Variant.isSet(k,f)){qx.locale.Manager.getInstance().addListener(h,this._onChangeLocale,this);
this._names=[];
}var B=y.getGroups();

for(var i=0;i<B.length;i++){var A=B[i];
this.addItems(A.items,A.labels,A.title);
}var z=y.getButtons();

for(var i=0;i<z.length;i++){this.addButton(z[i]);
}},members:{_names:null,_visibilityBindingIds:null,_connectVisibility:function(m,n){var o=m.bind(g,n,g);
this._visibilityBindingIds.push({id:o,item:m});
},_onChangeLocale:qx.core.Variant.select(k,{"on":function(e){for(var i=0;i<this._names.length;i++){var t=this._names[i];

if(t.name&&t.name.translate){t.name=t.name.translate();
}var u=this._createLabelText(t.name,t.item);
t.label.setValue(u);
}},"off":null}),_createLabelText:function(name,v){var w=j;

if(v.getRequired()){w=d;
}var x=name.length>0||v.getRequired()?a:j;
return name+w+x;
},addItems:function(p,q,r){throw new Error("Abstract method call");
},addButton:function(s){throw new Error("Abstract method call");
}},destruct:function(){if(qx.core.Variant.isSet(k,f)){qx.locale.Manager.getInstance().removeListener(h,this._onChangeLocale,this);
}this._names=null;
for(var i=0;i<this._visibilityBindingIds.length;i++){var l=this._visibilityBindingIds[i];
l.item.removeBinding(l.id);
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
}}},addButton:function(u){if(this._buttonRow==null){this._buttonRow=new qx.ui.container.Composite();
this._buttonRow.setMarginTop(5);
var v=new qx.ui.layout.HBox();
v.setAlignX(h);
v.setSpacing(5);
this._buttonRow.setLayout(v);
this._add(this._buttonRow,{row:this._row,column:0,colSpan:2});
this._row++;
}this._buttonRow.add(u);
},getLayout:function(){return this._getLayout();
},_createLabel:function(name,s){var t=new qx.ui.basic.Label(this._createLabelText(name,s));
t.setRich(true);
return t;
},_createHeader:function(q){var r=new qx.ui.basic.Label(q);
r.setFont(g);

if(this._row!=0){r.setMarginTop(10);
}r.setAlignX(d);
return r;
}},destruct:function(){if(this._buttonRow){this._buttonRow.removeAll();
this._disposeObjects(f);
}}});
})();
(function(){var k="",j="complete",h="String",g="changeValid",f="qx.event.type.Event",d="value instanceof Function || qx.Class.isSubClassOf(value.constructor, qx.ui.form.validation.AsyncValidator)",c="qx.ui.form.validation.Manager",b="This field is required",a="qx.event.type.Data";
qx.Class.define(c,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__Aj=[];
this.__Ak={};
this.setRequiredFieldMessage(qx.locale.Manager.tr(b));
},events:{"changeValid":a,"complete":f},properties:{validator:{check:d,init:null,nullable:true},invalidMessage:{check:h,init:k},requiredFieldMessage:{check:h,init:k},context:{nullable:true}},members:{__Aj:null,__Al:null,__Ak:null,__Am:null,add:function(B,C,D){if(!this.__Ar(B)){throw new Error("Added widget not supported.");
}if(this.__As(B)){if(C!=null){throw new Error("Widgets supporting selection can only be validated "+"in the form validator");
}}var E={item:B,validator:C,valid:null,context:D};
this.__Aj.push(E);
},validate:function(){var bb=true;
this.__Am=true;
var X=[];
for(var i=0;i<this.__Aj.length;i++){var Y=this.__Aj[i].item;
var bc=this.__Aj[i].validator;
X.push(Y);
if(bc==null){var W=this.__An(Y);
bb=bb&&W;
this.__Am=W&&this.__Am;
continue;
}var W=this.__Ao(this.__Aj[i],Y.getValue());
bb=W&&bb;

if(W!=null){this.__Am=W&&this.__Am;
}}var ba=this.__Ap(X);

if(qx.lang.Type.isBoolean(ba)){this.__Am=ba&&this.__Am;
}bb=ba&&bb;
this.__Au(bb);

if(qx.lang.Object.isEmpty(this.__Ak)){this.fireEvent(j);
}return bb;
},__An:function(x){if(x.getRequired()){if(this.__As(x)){var y=!!x.getSelection()[0];
}else{var y=!!x.getValue();
}x.setValid(y);
var A=x.getRequiredInvalidMessage();
var z=A?A:this.getRequiredFieldMessage();
x.setInvalidMessage(z);
return y;
}return true;
},__Ao:function(M,N){var S=M.item;
var R=M.context;
var Q=M.validator;
if(this.__Aq(Q)){this.__Ak[S.toHashCode()]=null;
Q.validate(S,S.getValue(),this,R);
return null;
}var P=null;

try{var P=Q.call(R||this,N,S);

if(P===undefined){P=true;
}}catch(e){if(e instanceof qx.core.ValidationError){P=false;

if(e.message&&e.message!=qx.type.BaseError.DEFAULTMESSAGE){var O=e.message;
}else{var O=e.getComment();
}S.setInvalidMessage(O);
}else{throw e;
}}S.setValid(P);
M.valid=P;
return P;
},__Ap:function(r){var t=this.getValidator();
var u=this.getContext()||this;

if(t==null){return true;
}this.setInvalidMessage(k);

if(this.__Aq(t)){this.__Ak[this.toHashCode()]=null;
t.validateForm(r,this,u);
return null;
}
try{var v=t.call(u,r,this);

if(v===undefined){v=true;
}}catch(e){if(e instanceof qx.core.ValidationError){v=false;

if(e.message&&e.message!=qx.type.BaseError.DEFAULTMESSAGE){var s=e.message;
}else{var s=e.getComment();
}this.setInvalidMessage(s);
}else{throw e;
}}return v;
},__Aq:function(p){var q=false;

if(!qx.lang.Type.isFunction(p)){q=qx.Class.isSubClassOf(p.constructor,qx.ui.form.validation.AsyncValidator);
}return q;
},__Ar:function(n){var o=n.constructor;
return qx.Class.hasInterface(o,qx.ui.form.IForm);
},__As:function(I){var J=I.constructor;
return qx.Class.hasInterface(J,qx.ui.core.ISingleSelection);
},__At:function(l){var m=l.constructor;
return (qx.Class.hasInterface(m,qx.ui.form.IBooleanForm)||qx.Class.hasInterface(m,qx.ui.form.IColorForm)||qx.Class.hasInterface(m,qx.ui.form.IDateForm)||qx.Class.hasInterface(m,qx.ui.form.INumberForm)||qx.Class.hasInterface(m,qx.ui.form.IStringForm));
},__Au:function(U){var V=this.__Al;
this.__Al=U;
if(V!=U){this.fireDataEvent(g,U,V);
}},getValid:function(){return this.__Al;
},isValid:function(){return this.getValid();
},getInvalidMessages:function(){var bd=[];
for(var i=0;i<this.__Aj.length;i++){var be=this.__Aj[i].item;

if(!be.getValid()){bd.push(be.getInvalidMessage());
}}if(this.getInvalidMessage()!=k){bd.push(this.getInvalidMessage());
}return bd;
},reset:function(){for(var i=0;i<this.__Aj.length;i++){var T=this.__Aj[i];
T.item.setValid(true);
}this.__Al=null;
},setItemValid:function(K,L){this.__Ak[K.toHashCode()]=L;
K.setValid(L);
this.__Av();
},setFormValid:function(w){this.__Ak[this.toHashCode()]=w;
this.__Av();
},__Av:function(){var G=this.__Am;
for(var H in this.__Ak){var F=this.__Ak[H];
G=F&&G;
if(F==null){return;
}}this.__Au(G);
this.__Ak={};
this.fireEvent(j);
}},destruct:function(){this.__Aj=null;
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
qx.Class.define(a,{extend:qx.core.Object,construct:function(g){qx.core.Object.call(this);
this.__Aw=g;
},members:{__Aw:null,__Ax:null,__Ay:null,__Az:null,validate:function(h,i,j,k){this.__Az=false;
this.__Ax=h;
this.__Ay=j;
this.__Aw.call(k||this,this,i);
},validateForm:function(d,e,f){this.__Az=true;
this.__Ay=e;
this.__Aw.call(f,d,this);
},setValid:function(b,c){if(this.__Az){if(c!==undefined){this.__Ay.setInvalidMessage(c);
}this.__Ay.setFormValid(b);
}else{if(c!==undefined){this.__Ax.setInvalidMessage(c);
}this.__Ay.setItemValid(this.__Ax,b);
}}},destruct:function(){this.__Ay=this.__Ax=null;
}});
})();
(function(){var b="qx.ui.form.Form",a="";
qx.Class.define(b,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__AA=[];
this.__AB=[];
this._validationManager=new qx.ui.form.validation.Manager();
this._resetter=new qx.ui.form.Resetter();
},members:{__AA:null,_validationManager:null,__AC:0,__AB:null,_resetter:null,add:function(g,h,k,name,l){if(this.__AD()){this.__AA.push({title:null,items:[],labels:[],names:[]});
}this.__AA[this.__AC].items.push(g);
this.__AA[this.__AC].labels.push(h);
if(name==null){name=h.replace(/\s+|&|-|\+|\*|\/|\||!|\.|,|:|\?|;|~|%|\{|\}|\(|\)|\[|\]|<|>|=|\^|@|\\/g,a);
}this.__AA[this.__AC].names.push(name);
this._validationManager.add(g,k,l);
this._resetter.add(g);
},addGroupHeader:function(c){if(!this.__AD()){this.__AC++;
}this.__AA.push({title:c,items:[],labels:[],names:[]});
},addButton:function(f){this.__AB.push(f);
},__AD:function(){return this.__AA.length===0;
},reset:function(){this._resetter.reset();
this._validationManager.reset();
},redefineResetter:function(){this._resetter.redefine();
},validate:function(){return this._validationManager.validate();
},getValidationManager:function(){return this._validationManager;
},getGroups:function(){return this.__AA;
},getButtons:function(){return this.__AB;
},getItems:function(){var d={};
for(var i=0;i<this.__AA.length;i++){var e=this.__AA[i];
for(var j=0;j<e.names.length;j++){var name=e.names[j];
d[name]=e.items[j];
}}return d;
}},destruct:function(){this.__AA=this._buttons=this._buttonOptions=null;
}});
})();

});