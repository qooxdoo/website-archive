qx.$$packageData['48572f0cbe95']={"locales":{},"resources":{},"translations":{}};

qx.Part.$$notifyLoad("48572f0cbe95", function() {
(function(){var r="Boolean",q="changeInvalidMessage",p="changeValue",o="String",n="_applyAllowEmptySelection",m="_applyInvalidMessage",k="qx.ui.form.RadioGroup",j="_applyValid",h="",g="changeRequired",c="changeValid",f="changeEnabled",d="__a",b="changeSelection",a="_applyEnabled";
qx.Class.define(k,{extend:qx.core.Object,implement:[qx.ui.core.ISingleSelection,qx.ui.form.IForm,qx.ui.form.IModelSelection],include:[qx.ui.core.MSingleSelectionHandling,qx.ui.form.MModelSelection],construct:function(L){qx.core.Object.call(this);
this.__a=[];
this.addListener(b,this.__b,this);

if(L!=null){this.add.apply(this,arguments);
}},properties:{enabled:{check:r,apply:a,event:f,init:true},wrap:{check:r,init:true},allowEmptySelection:{check:r,init:false,apply:n},valid:{check:r,init:true,apply:j,event:c},required:{check:r,init:false,event:g},invalidMessage:{check:o,init:h,event:q,apply:m},requiredInvalidMessage:{check:o,nullable:true,event:q}},members:{__a:null,getItems:function(){return this.__a;
},add:function(F){var G=this.__a;
var H;

for(var i=0,l=arguments.length;i<l;i++){H=arguments[i];

if(qx.lang.Array.contains(G,H)){continue;
}H.addListener(p,this._onItemChangeChecked,this);
G.push(H);
H.setGroup(this);
if(H.getValue()){this.setSelection([H]);
}}if(!this.isAllowEmptySelection()&&G.length>0&&!this.getSelection()[0]){this.setSelection([G[0]]);
}},remove:function(J){var K=this.__a;

if(qx.lang.Array.contains(K,J)){qx.lang.Array.remove(K,J);
if(J.getGroup()===this){J.resetGroup();
}J.removeListener(p,this._onItemChangeChecked,this);
if(J.getValue()){this.resetSelection();
}}},getChildren:function(){return this.__a;
},_onItemChangeChecked:function(e){var I=e.getTarget();

if(I.getValue()){this.setSelection([I]);
}else if(this.getSelection()[0]==I){this.resetSelection();
}},_applyInvalidMessage:function(O,P){for(var i=0;i<this.__a.length;i++){this.__a[i].setInvalidMessage(O);
}},_applyValid:function(s,t){for(var i=0;i<this.__a.length;i++){this.__a[i].setValid(s);
}},_applyEnabled:function(C,D){var E=this.__a;

if(C==null){for(var i=0,l=E.length;i<l;i++){E[i].resetEnabled();
}}else{for(var i=0,l=E.length;i<l;i++){E[i].setEnabled(C);
}}},_applyAllowEmptySelection:function(u,v){if(!u&&this.isSelectionEmpty()){this.resetSelection();
}},selectNext:function(){var w=this.getSelection()[0];
var y=this.__a;
var x=y.indexOf(w);

if(x==-1){return;
}var i=0;
var length=y.length;
if(this.getWrap()){x=(x+1)%length;
}else{x=Math.min(x+1,length-1);
}
while(i<length&&!y[x].getEnabled()){x=(x+1)%length;
i++;
}this.setSelection([y[x]]);
},selectPrevious:function(){var z=this.getSelection()[0];
var B=this.__a;
var A=B.indexOf(z);

if(A==-1){return;
}var i=0;
var length=B.length;
if(this.getWrap()){A=(A-1+length)%length;
}else{A=Math.max(A-1,0);
}
while(i<length&&!B[A].getEnabled()){A=(A-1+length)%length;
i++;
}this.setSelection([B[A]]);
},_getItems:function(){return this.getItems();
},_isAllowEmptySelection:function(){return this.isAllowEmptySelection();
},__b:function(e){var N=e.getData()[0];
var M=e.getOldData()[0];

if(M){M.setValue(false);
}
if(N){N.setValue(true);
}}},destruct:function(){this._disposeArray(d);
}});
})();
(function(){var v="popup",u="list",t="",s="mousewheel",r="resize",q="Function",p="blur",o="abstract",n="keypress",m="Number",f="qx.ui.form.AbstractSelectBox",l="changeSelection",i="PageUp",c="_applyMaxListHeight",b="PageDown",h="mouseup",g="Escape",j="changeVisibility",a="one",k="middle",d="mousedown";
qx.Class.define(f,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.form.MForm],implement:[qx.ui.form.IForm],type:o,construct:function(){qx.ui.core.Widget.call(this);
var x=new qx.ui.layout.HBox();
this._setLayout(x);
x.setAlignY(k);
this.addListener(n,this._onKeyPress);
this.addListener(p,this._onBlur,this);
var w=qx.core.Init.getApplication().getRoot();
w.addListener(s,this._onMousewheel,this,true);
this.addListener(r,this._onResize,this);
},properties:{focusable:{refine:true,init:true},width:{refine:true,init:120},maxListHeight:{check:m,apply:c,nullable:true,init:200},format:{check:q,init:function(B){return this._defaultFormat(B);
},nullable:true}},members:{_createChildControlImpl:function(F){var G;

switch(F){case u:G=new qx.ui.form.List().set({focusable:false,keepFocus:true,height:null,width:null,maxHeight:this.getMaxListHeight(),selectionMode:a,quickSelection:true});
G.addListener(l,this._onListChangeSelection,this);
G.addListener(d,this._onListMouseDown,this);
break;
case v:G=new qx.ui.popup.Popup(new qx.ui.layout.VBox);
G.setAutoHide(false);
G.setKeepActive(true);
G.addListener(h,this.close,this);
G.add(this.getChildControl(u));
G.addListener(j,this._onPopupChangeVisibility,this);
break;
}return G||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,F);
},_applyMaxListHeight:function(H,I){this.getChildControl(u).setMaxHeight(H);
},getChildrenContainer:function(){return this.getChildControl(u);
},open:function(){var C=this.getChildControl(v);
C.placeToWidget(this,true);
C.show();
},close:function(){this.getChildControl(v).hide();
},toggle:function(){var J=this.getChildControl(v).isVisible();

if(J){this.close();
}else{this.open();
}},_defaultFormat:function(y){var z=y?y.getLabel():t;
var A=y?y.getRich():false;

if(A){z=z.replace(/<[^>]+?>/g,t);
z=qx.bom.String.unescape(z);
}return z;
},_onBlur:function(e){this.close();
},_onKeyPress:function(e){var D=e.getKeyIdentifier();
var E=this.getChildControl(v);
if(E.isHidden()&&(D==b||D==i)){e.stopPropagation();
}else if(!E.isHidden()&&D==g){this.close();
e.stop();
}else{this.getChildControl(u).handleKeyPress(e);
}},_onMousewheel:function(e){var M=e.getTarget();
var L=this.getChildControl(v,true);

if(L==null){return;
}
if(qx.ui.core.Widget.contains(L,M)){e.preventDefault();
}else{this.close();
}},_onResize:function(e){this.getChildControl(v).setMinWidth(e.getData().width);
},_onListChangeSelection:function(e){throw new Error("Abstract method: _onListChangeSelection()");
},_onListMouseDown:function(e){throw new Error("Abstract method: _onListMouseDown()");
},_onPopupChangeVisibility:function(e){throw new Error("Abstract method: _onPopupChangeVisibility()");
}},destruct:function(){var K=qx.core.Init.getApplication().getRoot();

if(K){K.removeListener(s,this._onMousewheel,this,true);
}}});
})();
(function(){var k="list",j="pressed",i="abandoned",h="popup",g="hovered",f="changeLabel",d="changeIcon",c="arrow",b="spacer",a="atom",y="Enter",x="one",w="mouseout",v="Space",u="key",t="mousewheel",s="keyinput",r="changeSelection",q="quick",p="qx.ui.form.SelectBox",n="mouseover",o="selectbox",l="click",m=" ";
qx.Class.define(p,{extend:qx.ui.form.AbstractSelectBox,implement:[qx.ui.core.ISingleSelection,qx.ui.form.IModelSelection],include:[qx.ui.core.MSingleSelectionHandling,qx.ui.form.MModelSelection],construct:function(){qx.ui.form.AbstractSelectBox.call(this);
this._createChildControl(a);
this._createChildControl(b);
this._createChildControl(c);
this.addListener(n,this._onMouseOver,this);
this.addListener(w,this._onMouseOut,this);
this.addListener(l,this._onClick,this);
this.addListener(t,this._onMouseWheel,this);
this.addListener(s,this._onKeyInput,this);
this.addListener(r,this.__CE,this);
},properties:{appearance:{refine:true,init:o}},members:{__CD:null,_createChildControlImpl:function(ba){var bb;

switch(ba){case b:bb=new qx.ui.core.Spacer();
this._add(bb,{flex:1});
break;
case a:bb=new qx.ui.basic.Atom(m);
bb.setCenter(false);
bb.setAnonymous(true);
this._add(bb,{flex:1});
break;
case c:bb=new qx.ui.basic.Image();
bb.setAnonymous(true);
this._add(bb);
break;
}return bb||qx.ui.form.AbstractSelectBox.prototype._createChildControlImpl.call(this,ba);
},_forwardStates:{focused:true},_getItems:function(){return this.getChildrenContainer().getChildren();
},_isAllowEmptySelection:function(){return this.getChildrenContainer().getSelectionMode()!==x;
},__CE:function(e){var bd=e.getData()[0];
var bc=this.getChildControl("list");

if(bc.getSelection()[0]!=bd){if(bd){bc.setSelection([bd]);
}else{bc.resetSelection();
}}this.__CF();
this.__CG();
},__CF:function(){var O=this.getChildControl("list").getSelection()[0];
var P=this.getChildControl("atom");
var N=O?O.getIcon():"";
N==null?P.resetIcon():P.setIcon(N);
},__CG:function(){var B=this.getChildControl("list").getSelection()[0];
var C=this.getChildControl("atom");
var A=B?B.getLabel():"";
var z=this.getFormat();

if(z!=null){A=z.call(this,B);
}if(A&&A.translate){A=A.translate();
}A==null?C.resetLabel():C.setLabel(A);
},_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}
if(this.hasState(i)){this.removeState(i);
this.addState(j);
}this.addState(g);
},_onMouseOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.removeState(g);

if(this.hasState(j)){this.removeState(j);
this.addState(i);
}},_onClick:function(e){this.toggle();
},_onMouseWheel:function(e){if(this.getChildControl(h).isVisible()){return;
}var E=e.getWheelDelta()>0?1:-1;
var G=this.getSelectables();
var F=this.getSelection()[0];

if(!F){F=G[0];
}var D=G.indexOf(F)+E;
var H=G.length-1;
if(D<0){D=0;
}else if(D>=H){D=H;
}this.setSelection([G[D]]);
e.stopPropagation();
e.preventDefault();
},_onKeyPress:function(e){var be=e.getKeyIdentifier();

if(be==y||be==v){if(this.__CD){this.setSelection([this.__CD]);
this.__CD=null;
}this.toggle();
}else{qx.ui.form.AbstractSelectBox.prototype._onKeyPress.call(this,e);
}},_onKeyInput:function(e){var Q=e.clone();
Q.setTarget(this._list);
Q.setBubbles(false);
this.getChildControl(k).dispatchEvent(Q);
},_onListMouseDown:function(e){if(this.__CD){this.setSelection([this.__CD]);
this.__CD=null;
}},_onListChangeSelection:function(e){var I=e.getData();
var L=e.getOldData();
if(L&&L.length>0){L[0].removeListener(d,this.__CF,this);
L[0].removeListener(f,this.__CG,this);
}
if(I.length>0){var K=this.getChildControl(h);
var J=this.getChildControl(k);
var M=J.getSelectionContext();

if(K.isVisible()&&(M==q||M==u)){this.__CD=I[0];
}else{this.setSelection([I[0]]);
this.__CD=null;
}I[0].addListener(d,this.__CF,this);
I[0].addListener(f,this.__CG,this);
}else{this.resetSelection();
}},_onPopupChangeVisibility:function(e){var S=this.getChildControl(h);

if(!S.isVisible()){var U=this.getChildControl(k);
if(U.hasChildren()){U.setSelection(this.getSelection());
}}else{var R=S.getLayoutLocation(this);
var W=qx.bom.Viewport.getHeight();
var V=R.top;
var X=W-R.bottom;
var T=V>X?V:X;
var Y=this.getMaxListHeight();
var U=this.getChildControl(k);

if(Y==null||Y>T){U.setMaxHeight(T);
}else if(Y<T){U.setMaxHeight(Y);
}}}},destruct:function(){this.__CD=null;
}});
})();
(function(){var b="qx.ui.form.IRadioItem",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(d){},getValue:function(){},setGroup:function(c){this.assertInstance(c,qx.ui.form.RadioGroup);
},getGroup:function(){}}});
})();
(function(){var e="inherit",d="toolbar-button",c="keydown",b="qx.ui.toolbar.Button",a="keyup";
qx.Class.define(b,{extend:qx.ui.form.Button,construct:function(f,g,h){qx.ui.form.Button.call(this,f,g,h);
this.removeListener(c,this._onKeyDown);
this.removeListener(a,this._onKeyUp);
},properties:{appearance:{refine:true,init:d},show:{refine:true,init:e},focusable:{refine:true,init:false}}});
})();
(function(){var j="checked",i="qx.ui.form.RadioGroup",h="Boolean",g="menu-radiobutton",f="_applyValue",d="qx.ui.menu.RadioButton",c="changeValue",b="_applyGroup",a="execute";
qx.Class.define(d,{extend:qx.ui.menu.AbstractButton,include:[qx.ui.form.MModelProperty],implement:[qx.ui.form.IRadioItem,qx.ui.form.IBooleanForm,qx.ui.form.IModel],construct:function(o,p){qx.ui.menu.AbstractButton.call(this);
if(o!=null){this.setLabel(o);
}
if(p!=null){this.setMenu(p);
}this.addListener(a,this._onExecute,this);
},properties:{appearance:{refine:true,init:g},value:{check:h,nullable:true,event:c,apply:f,init:false},group:{check:i,nullable:true,apply:b}},members:{_applyValue:function(m,n){m?this.addState(j):this.removeState(j);
},_applyGroup:function(k,l){if(l){l.remove(this);
}
if(k){k.add(this);
}},_onExecute:function(e){this.setValue(true);
},_onMouseUp:function(e){if(e.isLeftPressed()){this.execute();
}qx.ui.menu.Manager.getInstance().hideAll();
},_onKeyPress:function(e){this.execute();
}}});
})();

});