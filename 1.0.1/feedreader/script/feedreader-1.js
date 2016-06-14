qx.$$packageData['fefbf83d8380']={"resources":{"qx/icon/Tango/16/actions/dialog-apply.png":[16,16,"png","feedreader","feedreader/images/combined/icons16.png",0,-80],"qx/icon/Tango/16/actions/document-new.png":[16,16,"png","feedreader","feedreader/images/combined/icons16.png",0,-16]}};
(function(){var o="showingPlaceholder",n="color",m="",l="none",k="qx.client",j="Boolean",i="qx.event.type.Data",h="readonly",g="input",f="focusin",bb="visibility",ba="focusout",Y="hidden",X="absolute",W="readOnly",V="text",U="_applyTextAlign",T="px",S="RegExp",R=")",v="syncAppearance",w="gecko",t="A",u="change",r="textAlign",s="focused",p="center",q="visible",x="disabled",y="url(",F="String",D="resize",J="qx.ui.form.AbstractField",H="transparent",N="off",L="spellcheck",A="false",Q="right",P="PositiveInteger",O="mshtml",z="abstract",B="block",C="webkit",E="_applyReadOnly",G="_applyPlaceholder",I="left",K="changeValue",M="qx/static/blank.gif";
qx.Class.define(J,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm,qx.ui.form.IForm],include:[qx.ui.form.MForm],type:z,construct:function(bM){arguments.callee.base.call(this);

if(bM!=null){this.setValue(bM);
}this.getContentElement().addListener(u,this._onChangeContent,this);
this.addListener(v,this._syncPlaceholder,this);
},events:{"input":i,"changeValue":i},properties:{textAlign:{check:[I,p,Q],nullable:true,themeable:true,apply:U},readOnly:{check:j,apply:E,init:false},selectable:{refine:true,init:true},focusable:{refine:true,init:true},maxLength:{check:P,init:Infinity},liveUpdate:{check:j,init:false},placeholder:{check:F,nullable:true,apply:G},filter:{check:S,nullable:true,init:null}},members:{__r:true,__s:null,__t:null,__u:null,getFocusElement:function(){var by=this.getContentElement();

if(by){return by;
}},_createInputElement:function(){return new qx.html.Input(V);
},renderLayout:function(bm,top,bn,bo){var bp=this._updateInsets;
var bt=arguments.callee.base.call(this,bm,top,bn,bo);
if(!bt){return;
}var br=bt.size||bp;
var bu=T;

if(br||bt.local||bt.margin){var bq=this.getInsets();
var innerWidth=bn-bq.left-bq.right;
var innerHeight=bo-bq.top-bq.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}var bs=this.getContentElement();

if(bp){this.__x().setStyles({"left":bq.left+bu,"top":bq.top+bu});
}
if(br){this.__x().setStyles({"width":innerWidth+bu,"height":innerHeight+bu});
bs.setStyles({"width":innerWidth+bu,"height":innerHeight+bu});
}},_createContentElement:function(){var bz=this._createInputElement();
bz.setStyles({"border":l,"padding":0,"margin":0,"display":B,"background":H,"outline":l,"appearance":l,"position":X,"autoComplete":N});
bz.setSelectable(this.getSelectable());
bz.setEnabled(this.getEnabled());
bz.addListener(g,this._onHtmlInput,this);
if(qx.core.Variant.isSet(k,w)){bz.setAttribute(L,A);
}if(qx.core.Variant.isSet(k,C)){bz.setStyle(D,l);
}if(qx.core.Variant.isSet(k,O)){bz.setStyles({backgroundImage:y+qx.util.ResourceManager.getInstance().toUri(M)+R});
}return bz;
},_applyEnabled:function(bk,bl){arguments.callee.base.call(this,bk,bl);
this.getContentElement().setEnabled(bk);

if(bk){this._showPlaceholder();
}else{this._removePlaceholder();
}},__v:{width:16,height:16},_getContentHint:function(){return {width:this.__v.width*10,height:this.__v.height||16};
},_applyFont:function(a,b){var c;

if(a){var d=qx.theme.manager.Font.getInstance().resolve(a);
c=d.getStyles();
}else{c=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(c);
this.__x().setStyles(c);
if(a){this.__v=qx.bom.Label.getTextSize(t,c);
}else{delete this.__v;
}qx.ui.core.queue.Layout.add(this);
},_applyTextColor:function(bG,bH){if(bG){this.getContentElement().setStyle(n,qx.theme.manager.Color.getInstance().resolve(bG));
this.__x().setStyle(n,qx.theme.manager.Color.getInstance().resolve(bG));
}else{this.getContentElement().removeStyle(n);
this.__x().removeStyle(n);
}},tabFocus:function(){arguments.callee.base.call(this);
this.selectAllText();
},_getTextSize:function(){return this.__v;
},_onHtmlInput:function(e){var bi=e.getData();
var bh=true;
this.__r=false;
if(this.getFilter()!=null){var bj=m;
var bf=bi.search(this.getFilter());
var bg=bi;

while(bf>=0){bj=bj+(bg.charAt(bf));
bg=bg.substring(bf+1,bg.length);
bf=bg.search(this.getFilter());
}
if(bj!=bi){bh=false;
bi=bj;
this.getContentElement().setValue(bi);
}}if(bi.length>this.getMaxLength()){var bh=false;
this.getContentElement().setValue(bi.substr(0,this.getMaxLength()));
}if(bh){this.fireDataEvent(g,bi,this.__u);
this.__u=bi;
if(this.getLiveUpdate()){this.__w(bi);
}}},__w:function(bN){this.fireNonBubblingEvent(K,qx.event.type.Data,[bN,this.__t]);
this.__t=bN;
},setValue:function(bI){if(bI===null){if(this.__r){return bI;
}bI=m;
this.__r=true;
}else{this.__r=false;
this._removePlaceholder();
}
if(qx.lang.Type.isString(bI)){var bK=this.getContentElement();

if(bI.length>this.getMaxLength()){bI=bI.substr(0,this.getMaxLength());
}
if(bK.getValue()!=bI){var bL=bK.getValue();
bK.setValue(bI);
var bJ=this.__r?null:bI;
this.__t=bL;
this.__w(bJ);
}this._showPlaceholder();
return bI;
}throw new Error("Invalid value type: "+bI);
},getValue:function(){var be=this.getContentElement().getValue();
return this.__r?null:be;
},resetValue:function(){this.setValue(null);
},_onChangeContent:function(e){this.__r=e.getData()===null;
this.__w(e.getData());
},getTextSelection:function(){return this.getContentElement().getTextSelection();
},getTextSelectionLength:function(){return this.getContentElement().getTextSelectionLength();
},getTextSelectionStart:function(){return this.getContentElement().getTextSelectionStart();
},getTextSelectionEnd:function(){return this.getContentElement().getTextSelectionEnd();
},setTextSelection:function(bC,bD){this.getContentElement().setTextSelection(bC,bD);
},clearTextSelection:function(){this.getContentElement().clearTextSelection();
},selectAllText:function(){this.setTextSelection(0);
},_showPlaceholder:function(){var bB=this.getValue()||m;
var bA=this.getPlaceholder();

if(bA!=null&&bB==m&&!this.hasState(s)&&!this.hasState(x)){if(this.hasState(o)){this._syncPlaceholder();
}else{this.addState(o);
}}},_removePlaceholder:function(){if(this.hasState(o)){this.__x().setStyle(bb,Y);
this.removeState(o);
}},_syncPlaceholder:function(){if(this.hasState(o)){this.__x().setStyle(bb,q);
}},__x:function(){if(this.__s==null){this.__s=new qx.html.Label();
this.__s.setStyles({"visibility":Y,"zIndex":6,"position":X});
this.getContainerElement().add(this.__s);
}return this.__s;
},_applyPlaceholder:function(bE,bF){this.__x().setValue(bE);

if(bE!=null){this.addListener(f,this._removePlaceholder,this);
this.addListener(ba,this._showPlaceholder,this);
this._showPlaceholder();
}else{this.removeListener(f,this._removePlaceholder,this);
this.removeListener(ba,this._showPlaceholder,this);
this._removePlaceholder();
}},_applyTextAlign:function(bc,bd){this.getContentElement().setStyle(r,bc);
},_applyReadOnly:function(bv,bw){var bx=this.getContentElement();
bx.setAttribute(W,bv);

if(bv){this.addState(h);
this.setFocusable(false);
}else{this.removeState(h);
this.setFocusable(true);
}}},destruct:function(){this.__s=null;
}});
})();
(function(){var b="qx.ui.form.TextField",a="textfield";
qx.Class.define(b,{extend:qx.ui.form.AbstractField,properties:{appearance:{refine:true,init:a},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}}});
})();
(function(){var u="none",t="wrap",s="value",r="qx.client",q="textarea",p="off",o="on",n="qxSelectable",m="",l="webkit",h="input",k="qx.html.Input",j="select",g="disabled",f="read-only",i="userSelect";
qx.Class.define(k,{extend:qx.html.Element,construct:function(z){arguments.callee.base.call(this);
this.__c=z;
if(z===j||z===q){this.setNodeName(z);
}else{this.setNodeName(h);
}},members:{__c:null,__d:null,__e:null,_createDomElement:function(){return qx.bom.Input.create(this.__c);
},_applyProperty:function(name,a){arguments.callee.base.call(this,name,a);
var b=this.getDomElement();

if(name===s){qx.bom.Input.setValue(b,a);
}else if(name===t){qx.bom.Input.setWrap(b,a);
}},setEnabled:qx.core.Variant.select(r,{"webkit":function(c){this.__e=c;

if(!c){this.setStyles({"userModify":f,"userSelect":u});
}else{this.setStyles({"userModify":null,"userSelect":this.__d?null:u});
}},"default":function(A){this.setAttribute(g,A===false);
}}),setSelectable:qx.core.Variant.select(r,{"webkit":function(d){this.__d=d;
this.setAttribute(n,d?o:p);
if(qx.core.Variant.isSet(r,l)){var e=this.__e?d?null:u:u;
this.setStyle(i,e);
}},"default":function(y){this.setAttribute(n,y?o:p);
}}),setValue:function(v){var w=this.getDomElement();

if(w){if(w.value!=v){qx.bom.Input.setValue(w,v);
}}else{this._setProperty(s,v);
}return this;
},getValue:function(){var B=this.getDomElement();

if(B){return qx.bom.Input.getValue(B);
}return this._getProperty(s)||m;
},setWrap:function(x){if(this.__c===q){this._setProperty(t,x);
}else{throw new Error("Text wrapping is only support by textareas!");
}return this;
},getWrap:function(){if(this.__c===q){return this._getProperty(t);
}else{throw new Error("Text wrapping is only support by textareas!");
}}}});
})();
(function(){var x="change",w="input",v="qx.client",u="text",t="password",s="checkbox",r="radio",q="textarea",p="keypress",n="opera",f="propertychange",m="blur",j="keydown",d="keyup",c="select-multiple",h="checked",g="value",k="select",b="qx.event.handler.Input";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){arguments.callee.base.call(this);
this._onChangeCheckedWrapper=qx.lang.Function.listener(this._onChangeChecked,this);
this._onChangeValueWrapper=qx.lang.Function.listener(this._onChangeValue,this);
this._onInputWrapper=qx.lang.Function.listener(this._onInput,this);
this._onPropertyWrapper=qx.lang.Function.listener(this._onProperty,this);
if(qx.core.Variant.isSet(v,n)){this._onKeyDownWrapper=qx.lang.Function.listener(this._onKeyDown,this);
this._onKeyUpWrapper=qx.lang.Function.listener(this._onKeyUp,this);
this._onBlurWrapper=qx.lang.Function.listener(this._onBlur,this);
}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{input:1,change:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{__h:false,__i:null,__j:null,canHandleEvent:function(D,E){var F=D.tagName.toLowerCase();

if(E===w&&(F===w||F===q)){return true;
}
if(E===x&&(F===w||F===q||F===k)){return true;
}return false;
},registerEvent:qx.core.Variant.select(v,{"mshtml":function(J,K,L){if(!J.__k){var M=J.tagName.toLowerCase();
var N=J.type;

if(N===u||N===t||M===q||N===s||N===r){qx.bom.Event.addNativeListener(J,f,this._onPropertyWrapper);
}
if(N!==s&&N!==r){qx.bom.Event.addNativeListener(J,x,this._onChangeValueWrapper);
}
if(N===u||N===t){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,J);
qx.bom.Event.addNativeListener(J,p,this._onKeyPressWrapped);
}J.__k=true;
}},"default":function(bd,be,bf){if(be===w){this.__l(bd);
}else if(be===x){if(bd.type===r||bd.type===s){qx.bom.Event.addNativeListener(bd,x,this._onChangeCheckedWrapper);
}else{qx.bom.Event.addNativeListener(bd,x,this._onChangeValueWrapper);
}if(qx.core.Variant.isSet(v,n)){if(bd.type===u||bd.type===t){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,bd);
qx.bom.Event.addNativeListener(bd,p,this._onKeyPressWrapped);
}}}}}),__l:qx.core.Variant.select(v,{"mshtml":null,"webkit":function(z){var A=z.tagName.toLowerCase();
if(qx.bom.client.Engine.VERSION<532&&A==q){qx.bom.Event.addNativeListener(z,p,this._onInputWrapper);
}qx.bom.Event.addNativeListener(z,w,this._onInputWrapper);
},"opera":function(B){qx.bom.Event.addNativeListener(B,d,this._onKeyUpWrapper);
qx.bom.Event.addNativeListener(B,j,this._onKeyDownWrapper);
qx.bom.Event.addNativeListener(B,m,this._onBlurWrapper);
qx.bom.Event.addNativeListener(B,w,this._onInputWrapper);
},"default":function(bc){qx.bom.Event.addNativeListener(bc,w,this._onInputWrapper);
}}),unregisterEvent:qx.core.Variant.select(v,{"mshtml":function(V,W){if(V.__k){var X=V.tagName.toLowerCase();
var Y=V.type;

if(Y===u||Y===t||X===q||Y===s||Y===r){qx.bom.Event.removeNativeListener(V,f,this._onPropertyWrapper);
}
if(Y!==s&&Y!==r){qx.bom.Event.removeNativeListener(V,x,this._onChangeValueWrapper);
}
if(Y===u||Y===t){qx.bom.Event.removeNativeListener(V,p,this._onKeyPressWrapped);
}
try{delete V.__k;
}catch(Q){V.__k=null;
}}},"default":function(O,P){if(P===w){this.__l(O);
}else if(P===x){if(O.type===r||O.type===s){qx.bom.Event.removeNativeListener(O,x,this._onChangeCheckedWrapper);
}else{qx.bom.Event.removeNativeListener(O,x,this._onChangeValueWrapper);
}}
if(qx.core.Variant.isSet(v,n)){if(O.type===u||O.type===t){qx.bom.Event.removeNativeListener(O,p,this._onKeyPressWrapped);
}}}}),__m:qx.core.Variant.select(v,{"mshtml":null,"webkit":function(R){var S=R.tagName.toLowerCase();
if(qx.bom.client.Engine.VERSION<532&&S==q){qx.bom.Event.removeNativeListener(R,p,this._onInputWrapper);
}qx.bom.Event.removeNativeListener(R,w,this._onInputWrapper);
},"opera":function(U){qx.bom.Event.removeNativeListener(U,d,this._onKeyUpWrapper);
qx.bom.Event.removeNativeListener(U,j,this._onKeyDownWrapper);
qx.bom.Event.removeNativeListener(U,m,this._onBlurWrapper);
qx.bom.Event.removeNativeListener(U,w,this._onInputWrapper);
},"default":function(C){qx.bom.Event.removeNativeListener(C,w,this._onInputWrapper);
}}),_onKeyPress:qx.core.Variant.select(v,{"mshtml|opera":function(e,T){if(e.keyCode===13){if(T.value!==this.__j){this.__j=T.value;
qx.event.Registration.fireEvent(T,x,qx.event.type.Data,[T.value]);
}}},"default":null}),_onKeyDown:qx.core.Variant.select(v,{"opera":function(e){if(e.keyCode===13){this.__h=true;
}},"default":null}),_onKeyUp:qx.core.Variant.select(v,{"opera":function(e){if(e.keyCode===13){this.__h=false;
}},"default":null}),_onBlur:qx.core.Variant.select(v,{"opera":function(e){if(this.__i){window.clearTimeout(this.__i);
}},"default":null}),_onInput:qx.event.GlobalError.observeMethod(function(e){var y=e.target;
if(!this.__h){if(qx.core.Variant.isSet(v,n)){this.__i=window.setTimeout(function(){qx.event.Registration.fireEvent(y,w,qx.event.type.Data,[y.value]);
},0);
}else{qx.event.Registration.fireEvent(y,w,qx.event.type.Data,[y.value]);
}}}),_onChangeValue:qx.event.GlobalError.observeMethod(function(e){var I=e.target||e.srcElement;
var H=I.value;

if(I.type===c){var H=[];

for(var i=0,o=I.options,l=o.length;i<l;i++){if(o[i].selected){H.push(o[i].value);
}}}qx.event.Registration.fireEvent(I,x,qx.event.type.Data,[H]);
}),_onChangeChecked:qx.event.GlobalError.observeMethod(function(e){var G=e.target;

if(G.type===r){if(G.checked){qx.event.Registration.fireEvent(G,x,qx.event.type.Data,[G.value]);
}}else{qx.event.Registration.fireEvent(G,x,qx.event.type.Data,[G.checked]);
}}),_onProperty:qx.core.Variant.select(v,{"mshtml":qx.event.GlobalError.observeMethod(function(e){var ba=e.target||e.srcElement;
var bb=e.propertyName;

if(bb===g&&(ba.type===u||ba.type===t||ba.tagName.toLowerCase()===q)){if(!ba.__inValueSet){qx.event.Registration.fireEvent(ba,w,qx.event.type.Data,[ba.value]);
}}else if(bb===h){if(ba.type===s){qx.event.Registration.fireEvent(ba,x,qx.event.type.Data,[ba.checked]);
}else if(ba.checked){qx.event.Registration.fireEvent(ba,x,qx.event.type.Data,[ba.value]);
}}}),"default":function(){}})},defer:function(a){qx.event.Registration.addHandler(a);
}});
})();
(function(){var x="",w="select",v="soft",u="off",t="qx.client",s="wrap",r="text",q="mshtml",p="number",o="checkbox",f="select-one",n="input",j="option",e="value",d="radio",h="qx.bom.Input",g="nowrap",k="textarea",c="auto",m="normal";
qx.Class.define(h,{statics:{__f:{text:1,textarea:1,select:1,checkbox:1,radio:1,password:1,hidden:1,submit:1,image:1,file:1,search:1,reset:1,button:1},create:function(T,U,V){{};
var U=U?qx.lang.Object.clone(U):{};
var W;

if(T===k||T===w){W=T;
}else{W=n;
U.type=T;
}return qx.bom.Element.create(W,U,V);
},setValue:function(K,L){var Q=K.nodeName.toLowerCase();
var N=K.type;
var Array=qx.lang.Array;
var R=qx.lang.Type;

if(typeof L===p){L+=x;
}
if((N===o||N===d)){if(R.isArray(L)){K.checked=Array.contains(L,K.value);
}else{K.checked=K.value==L;
}}else if(Q===w){var M=R.isArray(L);
var S=K.options;
var O,P;

for(var i=0,l=S.length;i<l;i++){O=S[i];
P=O.getAttribute(e);

if(P==null){P=O.text;
}O.selected=M?Array.contains(L,P):L==P;
}
if(M&&L.length==0){K.selectedIndex=-1;
}}else if(N===r&&qx.core.Variant.isSet(t,q)){K.__g=true;
K.value=L;
K.__g=null;
}else{K.value=L;
}},getValue:function(A){var G=A.nodeName.toLowerCase();

if(G===j){return (A.attributes.value||{}).specified?A.value:A.text;
}
if(G===w){var B=A.selectedIndex;
if(B<0){return null;
}var H=[];
var J=A.options;
var I=A.type==f;
var F=qx.bom.Input;
var E;
for(var i=I?B:0,D=I?B+1:J.length;i<D;i++){var C=J[i];

if(C.selected){E=F.getValue(C);
if(I){return E;
}H.push(E);
}}return H;
}else{return (A.value||x).replace(/\r/g,x);
}},setWrap:qx.core.Variant.select(t,{"mshtml":function(y,z){y.wrap=z?v:u;
},"gecko|webkit":function(X,Y){var bb=Y?v:u;
var ba=Y?x:c;
X.setAttribute(s,bb);
X.style.overflow=ba;
},"default":function(a,b){a.style.whiteSpace=b?m:g;
}})}});
})();
(function(){var w="",v="Add",u="__p",t="Title:",s="Add a feed",r="feedreader.view.AddFeedWindow",q="user",p="URL:",o="__n",n="icon/16/actions/document-new.png",k="icon/16/actions/dialog-apply.png",m="__o",l="right",j="Feed Information",i="execute";
qx.Class.define(r,{extend:qx.ui.window.Window,construct:function(x){arguments.callee.base.call(this,this.tr(s),n);
this.__n=x;
this.set({modal:true,showMinimize:false,showMaximize:false,allowMaximize:false});
this._addContent();
},members:{__o:null,__p:null,__n:null,_addContent:function(){this.setLayout(new qx.ui.layout.VBox(10));
var f=new qx.ui.groupbox.GroupBox(this.tr(j));
this.add(f);
var b=new qx.ui.layout.Grid();
b.setSpacing(10);
f.setLayout(b);
var c=new qx.ui.basic.Label(this.tr(t));
var a=this.__p=new qx.ui.form.TextField();
var g=new qx.ui.basic.Label(this.tr(p));
var h=this.__o=new qx.ui.form.TextField();
f.add(c,{row:0,column:0});
f.add(a,{row:0,column:1});
f.add(g,{row:1,column:0});
f.add(h,{row:1,column:1});
h.setWidth(200);
var d=new qx.ui.form.Button(this.tr(v),k);
d.set({alignX:l,allowGrowX:false});
this.add(d);
d.addListener(i,this._addFeed,this);
},_addFeed:function(e){var z=this.__p.getValue();

if(z==null||z==w){alert(this.tr("Please enter a title."));
return;
}var y=this.__o.getValue();

if(y==null||z==w){alert(this.tr("Please enter a url."));
return;
}this.__n.addFeed(z,y,q);
this.close();
}},destruct:function(){this.__q=null;
this._disposeObjects(o,u,m);
}});
})();
