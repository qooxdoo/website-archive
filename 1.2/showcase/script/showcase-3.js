qx.$$packageData['938aae132dee']={"locales":{},"resources":{},"translations":{}};

qx.Part.$$notifyLoad("938aae132dee", function() {
(function(){var t="Boolean",s="changeInvalidMessage",r="changeValue",q="String",p="_applyAllowEmptySelection",o="_applyInvalidMessage",n="qx.ui.form.RadioGroup",m="_applyValid",k="",j="changeRequired",f="changeValid",h="changeEnabled",g="__a",d="changeSelection",c="_applyEnabled";
qx.Class.define(n,{extend:qx.core.Object,implement:[qx.ui.core.ISingleSelection,qx.ui.form.IForm,qx.ui.form.IModelSelection],include:[qx.ui.core.MSingleSelectionHandling,qx.ui.form.MModelSelection],construct:function(u){qx.core.Object.call(this);
this.__a=[];
this.addListener(d,this.__b,this);

if(u!=null){this.add.apply(this,arguments);
}},properties:{enabled:{check:t,apply:c,event:h,init:true},wrap:{check:t,init:true},allowEmptySelection:{check:t,init:false,apply:p},valid:{check:t,init:true,apply:m,event:f},required:{check:t,init:false,event:j},invalidMessage:{check:q,init:k,event:s,apply:o},requiredInvalidMessage:{check:q,nullable:true,event:s}},members:{__a:null,getItems:function(){return this.__a;
},add:function(v){var w=this.__a;
var x;

for(var i=0,l=arguments.length;i<l;i++){x=arguments[i];

if(qx.lang.Array.contains(w,x)){continue;
}x.addListener(r,this._onItemChangeChecked,this);
w.push(x);
x.setGroup(this);
if(x.getValue()){this.setSelection([x]);
}}if(!this.isAllowEmptySelection()&&w.length>0&&!this.getSelection()[0]){this.setSelection([w[0]]);
}},remove:function(C){var D=this.__a;

if(qx.lang.Array.contains(D,C)){qx.lang.Array.remove(D,C);
if(C.getGroup()===this){C.resetGroup();
}C.removeListener(r,this._onItemChangeChecked,this);
if(C.getValue()){this.resetSelection();
}}},getChildren:function(){return this.__a;
},_onItemChangeChecked:function(e){var P=e.getTarget();

if(P.getValue()){this.setSelection([P]);
}else if(this.getSelection()[0]==P){this.resetSelection();
}},_applyInvalidMessage:function(y,z){for(var i=0;i<this.__a.length;i++){this.__a[i].setInvalidMessage(y);
}},_applyValid:function(A,B){for(var i=0;i<this.__a.length;i++){this.__a[i].setValid(A);
}},_applyEnabled:function(E,F){var G=this.__a;

if(E==null){for(var i=0,l=G.length;i<l;i++){G[i].resetEnabled();
}}else{for(var i=0,l=G.length;i<l;i++){G[i].setEnabled(E);
}}},_applyAllowEmptySelection:function(N,O){if(!N&&this.isSelectionEmpty()){this.resetSelection();
}},selectNext:function(){var H=this.getSelection()[0];
var J=this.__a;
var I=J.indexOf(H);

if(I==-1){return;
}var i=0;
var length=J.length;
if(this.getWrap()){I=(I+1)%length;
}else{I=Math.min(I+1,length-1);
}
while(i<length&&!J[I].getEnabled()){I=(I+1)%length;
i++;
}this.setSelection([J[I]]);
},selectPrevious:function(){var K=this.getSelection()[0];
var M=this.__a;
var L=M.indexOf(K);

if(L==-1){return;
}var i=0;
var length=M.length;
if(this.getWrap()){L=(L-1+length)%length;
}else{L=Math.max(L-1,0);
}
while(i<length&&!M[L].getEnabled()){L=(L-1+length)%length;
i++;
}this.setSelection([M[L]]);
},_getItems:function(){return this.getItems();
},_isAllowEmptySelection:function(){return this.isAllowEmptySelection();
},__b:function(e){var b=e.getData()[0];
var a=e.getOldData()[0];

if(a){a.setValue(false);
}
if(b){b.setValue(true);
}}},destruct:function(){this._disposeArray(g);
}});
})();
(function(){var x="popup",w="list",v="",u="mousewheel",t="resize",s="Function",r="blur",q="abstract",p="keypress",o="Number",h="qx.ui.form.AbstractSelectBox",n="changeSelection",k="PageUp",f="_applyMaxListHeight",d="PageDown",j="mouseup",i="Escape",l="changeVisibility",c="one",m="middle",g="mousedown";
qx.Class.define(h,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.form.MForm],implement:[qx.ui.form.IForm],type:q,construct:function(){qx.ui.core.Widget.call(this);
var b=new qx.ui.layout.HBox();
this._setLayout(b);
b.setAlignY(m);
this.addListener(p,this._onKeyPress);
this.addListener(r,this._onBlur,this);
var a=qx.core.Init.getApplication().getRoot();
a.addListener(u,this._onMousewheel,this,true);
this.addListener(t,this._onResize,this);
},properties:{focusable:{refine:true,init:true},width:{refine:true,init:120},maxListHeight:{check:o,apply:f,nullable:true,init:200},format:{check:s,init:function(F){return this._defaultFormat(F);
},nullable:true}},members:{_createChildControlImpl:function(y){var z;

switch(y){case w:z=new qx.ui.form.List().set({focusable:false,keepFocus:true,height:null,width:null,maxHeight:this.getMaxListHeight(),selectionMode:c,quickSelection:true});
z.addListener(n,this._onListChangeSelection,this);
z.addListener(g,this._onListMouseDown,this);
break;
case x:z=new qx.ui.popup.Popup(new qx.ui.layout.VBox);
z.setAutoHide(false);
z.setKeepActive(true);
z.addListener(j,this.close,this);
z.add(this.getChildControl(w));
z.addListener(l,this._onPopupChangeVisibility,this);
break;
}return z||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,y);
},_applyMaxListHeight:function(D,E){this.getChildControl(w).setMaxHeight(D);
},getChildrenContainer:function(){return this.getChildControl(w);
},open:function(){var G=this.getChildControl(x);
G.placeToWidget(this,true);
G.show();
},close:function(){this.getChildControl(x).hide();
},toggle:function(){var H=this.getChildControl(x).isVisible();

if(H){this.close();
}else{this.open();
}},_defaultFormat:function(A){var B=A?A.getLabel():v;
var C=A?A.getRich():false;

if(C){B=B.replace(/<[^>]+?>/g,v);
B=qx.bom.String.unescape(B);
}return B;
},_onBlur:function(e){this.close();
},_onKeyPress:function(e){var J=e.getKeyIdentifier();
var K=this.getChildControl(x);
if(K.isHidden()&&(J==d||J==k)){e.stopPropagation();
}else if(!K.isHidden()&&J==i){this.close();
e.stop();
}else{this.getChildControl(w).handleKeyPress(e);
}},_onMousewheel:function(e){var M=e.getTarget();
var L=this.getChildControl(x,true);

if(L==null){return;
}
if(qx.ui.core.Widget.contains(L,M)){e.preventDefault();
}else{this.close();
}},_onResize:function(e){this.getChildControl(x).setMinWidth(e.getData().width);
},_onListChangeSelection:function(e){throw new Error("Abstract method: _onListChangeSelection()");
},_onListMouseDown:function(e){throw new Error("Abstract method: _onListMouseDown()");
},_onPopupChangeVisibility:function(e){throw new Error("Abstract method: _onPopupChangeVisibility()");
}},destruct:function(){var I=qx.core.Init.getApplication().getRoot();

if(I){I.removeListener(u,this._onMousewheel,this,true);
}}});
})();
(function(){var p="list",o="atom",n="pressed",m="abandoned",l="popup",k="hovered",j="changeLabel",i="changeIcon",h="arrow",g="",E="spacer",D="Enter",C="one",B="mouseout",A="Space",z="key",y="mousewheel",x="keyinput",w="changeSelection",v="quick",t="qx.ui.form.SelectBox",u="mouseover",r="selectbox",s="click",q=" ";
qx.Class.define(t,{extend:qx.ui.form.AbstractSelectBox,implement:[qx.ui.core.ISingleSelection,qx.ui.form.IModelSelection],include:[qx.ui.core.MSingleSelectionHandling,qx.ui.form.MModelSelection],construct:function(){qx.ui.form.AbstractSelectBox.call(this);
this._createChildControl(o);
this._createChildControl(E);
this._createChildControl(h);
this.addListener(u,this._onMouseOver,this);
this.addListener(B,this._onMouseOut,this);
this.addListener(s,this._onClick,this);
this.addListener(y,this._onMouseWheel,this);
this.addListener(x,this._onKeyInput,this);
this.addListener(w,this.__Cs,this);
},properties:{appearance:{refine:true,init:r}},members:{__Cr:null,_createChildControlImpl:function(G){var H;

switch(G){case E:H=new qx.ui.core.Spacer();
this._add(H,{flex:1});
break;
case o:H=new qx.ui.basic.Atom(q);
H.setCenter(false);
H.setAnonymous(true);
this._add(H,{flex:1});
break;
case h:H=new qx.ui.basic.Image();
H.setAnonymous(true);
this._add(H);
break;
}return H||qx.ui.form.AbstractSelectBox.prototype._createChildControlImpl.call(this,G);
},_forwardStates:{focused:true},_getItems:function(){return this.getChildrenContainer().getChildren();
},_isAllowEmptySelection:function(){return this.getChildrenContainer().getSelectionMode()!==C;
},__Cs:function(e){var bf=e.getData()[0];
var be=this.getChildControl(p);

if(be.getSelection()[0]!=bf){if(bf){be.setSelection([bf]);
}else{be.resetSelection();
}}this.__Ct();
this.__Cu();
},__Ct:function(){var O=this.getChildControl(p).getSelection()[0];
var P=this.getChildControl(o);
var N=O?O.getIcon():g;
N==null?P.resetIcon():P.setIcon(N);
},__Cu:function(){var bb=this.getChildControl(p).getSelection()[0];
var bc=this.getChildControl(o);
var ba=bb?bb.getLabel():g;
var Y=this.getFormat();

if(Y!=null){ba=Y.call(this,bb);
}if(ba&&ba.translate){ba=ba.translate();
}ba==null?bc.resetLabel():bc.setLabel(ba);
},_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}
if(this.hasState(m)){this.removeState(m);
this.addState(n);
}this.addState(k);
},_onMouseOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.removeState(k);

if(this.hasState(n)){this.removeState(n);
this.addState(m);
}},_onClick:function(e){this.toggle();
},_onMouseWheel:function(e){if(this.getChildControl(l).isVisible()){return;
}var b=e.getWheelDelta()>0?1:-1;
var d=this.getSelectables();
var c=this.getSelection()[0];

if(!c){c=d[0];
}var a=d.indexOf(c)+b;
var f=d.length-1;
if(a<0){a=0;
}else if(a>=f){a=f;
}this.setSelection([d[a]]);
e.stopPropagation();
e.preventDefault();
},_onKeyPress:function(e){var F=e.getKeyIdentifier();

if(F==D||F==A){if(this.__Cr){this.setSelection([this.__Cr]);
this.__Cr=null;
}this.toggle();
}else{qx.ui.form.AbstractSelectBox.prototype._onKeyPress.call(this,e);
}},_onKeyInput:function(e){var bd=e.clone();
bd.setTarget(this._list);
bd.setBubbles(false);
this.getChildControl(p).dispatchEvent(bd);
},_onListMouseDown:function(e){if(this.__Cr){this.setSelection([this.__Cr]);
this.__Cr=null;
}},_onListChangeSelection:function(e){var I=e.getData();
var L=e.getOldData();
if(L&&L.length>0){L[0].removeListener(i,this.__Ct,this);
L[0].removeListener(j,this.__Cu,this);
}
if(I.length>0){var K=this.getChildControl(l);
var J=this.getChildControl(p);
var M=J.getSelectionContext();

if(K.isVisible()&&(M==v||M==z)){this.__Cr=I[0];
}else{this.setSelection([I[0]]);
this.__Cr=null;
}I[0].addListener(i,this.__Ct,this);
I[0].addListener(j,this.__Cu,this);
}else{this.resetSelection();
}},_onPopupChangeVisibility:function(e){var R=this.getChildControl(l);

if(!R.isVisible()){var T=this.getChildControl(p);
if(T.hasChildren()){T.setSelection(this.getSelection());
}}else{var Q=R.getLayoutLocation(this);
var V=qx.bom.Viewport.getHeight();
var U=Q.top;
var W=V-Q.bottom;
var S=U>W?U:W;
var X=this.getMaxListHeight();
var T=this.getChildControl(p);

if(X==null||X>S){T.setMaxHeight(S);
}else if(X<S){T.setMaxHeight(X);
}}}},destruct:function(){this.__Cr=null;
}});
})();
(function(){var b="qx.ui.form.IRadioItem",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){},getValue:function(){},setGroup:function(d){this.assertInstance(d,qx.ui.form.RadioGroup);
},getGroup:function(){}}});
})();
(function(){var e="inherit",d="toolbar-button",c="keydown",b="qx.ui.toolbar.Button",a="keyup";
qx.Class.define(b,{extend:qx.ui.form.Button,construct:function(f,g,h){qx.ui.form.Button.call(this,f,g,h);
this.removeListener(c,this._onKeyDown);
this.removeListener(a,this._onKeyUp);
},properties:{appearance:{refine:true,init:d},show:{refine:true,init:e},focusable:{refine:true,init:false}}});
})();
(function(){var j="checked",i="qx.ui.form.RadioGroup",h="Boolean",g="menu-radiobutton",f="_applyValue",d="qx.ui.menu.RadioButton",c="changeValue",b="_applyGroup",a="execute";
qx.Class.define(d,{extend:qx.ui.menu.AbstractButton,include:[qx.ui.form.MModelProperty],implement:[qx.ui.form.IRadioItem,qx.ui.form.IBooleanForm,qx.ui.form.IModel],construct:function(m,n){qx.ui.menu.AbstractButton.call(this);
if(m!=null){this.setLabel(m);
}
if(n!=null){this.setMenu(n);
}this.addListener(a,this._onExecute,this);
},properties:{appearance:{refine:true,init:g},value:{check:h,nullable:true,event:c,apply:f,init:false},group:{check:i,nullable:true,apply:b}},members:{_applyValue:function(o,p){o?this.addState(j):this.removeState(j);
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