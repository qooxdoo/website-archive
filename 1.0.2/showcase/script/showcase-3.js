qx.$$packageData['c81ec01e193b']={"resources":{}};
(function(){var r="Boolean",q="changeValue",p="_applyAllowEmptySelection",o="_applyInvalidMessage",n="qx.ui.form.RadioGroup",m="_applyValid",k="",j="changeRequired",h="changeValid",g="changeEnabled",c="changeInvalidMessage",f="changeSelection",d="_applyEnabled",b="String",a="__qn";
qx.Class.define(n,{extend:qx.core.Object,implement:[qx.ui.core.ISingleSelection,qx.ui.form.IForm,qx.ui.form.IModelSelection],include:[qx.ui.core.MSingleSelectionHandling,qx.ui.form.MModelSelection],construct:function(M){arguments.callee.base.call(this);
this.__qn=[];
this.addListener(f,this.__qo,this);

if(M!=null){this.add.apply(this,arguments);
}},properties:{enabled:{check:r,apply:d,event:g,init:true},wrap:{check:r,init:true},allowEmptySelection:{check:r,init:false,apply:p},valid:{check:r,init:true,apply:m,event:h},required:{check:r,init:false,event:j},invalidMessage:{check:b,init:k,event:c,apply:o}},members:{__qn:null,getItems:function(){return this.__qn;
},add:function(J){var K=this.__qn;
var L;

for(var i=0,l=arguments.length;i<l;i++){L=arguments[i];

if(qx.lang.Array.contains(K,L)){continue;
}L.addListener(q,this._onItemChangeChecked,this);
K.push(L);
L.setGroup(this);
if(L.getValue()){this.setSelection([L]);
}}if(!this.isAllowEmptySelection()&&K.length>0&&!this.getSelection()[0]){this.setSelection([K[0]]);
}},remove:function(x){var y=this.__qn;

if(qx.lang.Array.contains(y,x)){qx.lang.Array.remove(y,x);
if(x.getGroup()===this){x.resetGroup();
}x.removeListener(q,this._onItemChangeChecked,this);
if(x.getValue()){this.resetSelection();
}}},getChildren:function(){return this.__qn;
},_onItemChangeChecked:function(e){var P=e.getTarget();

if(P.getValue()){this.setSelection([P]);
}else if(this.getSelection()[0]==P){this.resetSelection();
}},_applyInvalidMessage:function(N,O){for(var i=0;i<this.__qn.length;i++){this.__qn[i].setInvalidMessage(N);
}},_applyValid:function(H,I){for(var i=0;i<this.__qn.length;i++){this.__qn[i].setValid(H);
}},_applyEnabled:function(u,v){var w=this.__qn;

if(u==null){for(var i=0,l=w.length;i<l;i++){w[i].resetEnabled();
}}else{for(var i=0,l=w.length;i<l;i++){w[i].setEnabled(u);
}}},_applyAllowEmptySelection:function(C,D){if(!C&&this.isSelectionEmpty()){this.resetSelection();
}},selectNext:function(){var z=this.getSelection()[0];
var B=this.__qn;
var A=B.indexOf(z);

if(A==-1){return;
}var i=0;
var length=B.length;
if(this.getWrap()){A=(A+1)%length;
}else{A=Math.min(A+1,length-1);
}
while(i<length&&!B[A].getEnabled()){A=(A+1)%length;
i++;
}this.setSelection([B[A]]);
},selectPrevious:function(){var E=this.getSelection()[0];
var G=this.__qn;
var F=G.indexOf(E);

if(F==-1){return;
}var i=0;
var length=G.length;
if(this.getWrap()){F=(F-1+length)%length;
}else{F=Math.max(F-1,0);
}
while(i<length&&!G[F].getEnabled()){F=(F-1+length)%length;
i++;
}this.setSelection([G[F]]);
},_getItems:function(){return this.getItems();
},_isAllowEmptySelection:function(){return this.isAllowEmptySelection();
},__qo:function(e){var t=e.getData()[0];
var s=e.getOldData()[0];

if(s){s.setValue(false);
}
if(t){t.setValue(true);
}}},destruct:function(){this._disposeArray(a);
}});
})();
(function(){var v="popup",u="list",t="",s="mousewheel",r="resize",q="Function",p="blur",o="abstract",n="keypress",m="Number",f="qx.ui.form.AbstractSelectBox",l="changeSelection",i="PageUp",c="_applyMaxListHeight",b="PageDown",h="mouseup",g="Escape",j="changeVisibility",a="one",k="middle",d="mousedown";
qx.Class.define(f,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.form.MForm],implement:[qx.ui.form.IForm],type:o,construct:function(){arguments.callee.base.call(this);
var M=new qx.ui.layout.HBox();
this._setLayout(M);
M.setAlignY(k);
this.addListener(n,this._onKeyPress);
this.addListener(p,this._onBlur,this);
var L=qx.core.Init.getApplication().getRoot();
L.addListener(s,this._onMousewheel,this,true);
this.addListener(r,this._onResize,this);
},properties:{focusable:{refine:true,init:true},width:{refine:true,init:120},maxListHeight:{check:m,apply:c,nullable:true,init:200},format:{check:q,init:function(K){return this._defaultFormat(K);
},nullable:true}},members:{_createChildControlImpl:function(I){var J;

switch(I){case u:J=new qx.ui.form.List().set({focusable:false,keepFocus:true,height:null,width:null,maxHeight:this.getMaxListHeight(),selectionMode:a,quickSelection:true});
J.addListener(l,this._onListChangeSelection,this);
J.addListener(d,this._onListMouseDown,this);
break;
case v:J=new qx.ui.popup.Popup(new qx.ui.layout.VBox);
J.setAutoHide(false);
J.setKeepActive(true);
J.addListener(h,this.close,this);
J.add(this.getChildControl(u));
J.addListener(j,this._onPopupChangeVisibility,this);
break;
}return J||arguments.callee.base.call(this,I);
},_applyMaxListHeight:function(y,z){this.getChildControl(u).setMaxHeight(y);
},getChildrenContainer:function(){return this.getChildControl(u);
},open:function(){var C=this.getChildControl(v);
C.placeToWidget(this,true);
C.show();
},close:function(){this.getChildControl(v).hide();
},toggle:function(){var D=this.getChildControl(v).isVisible();

if(D){this.close();
}else{this.open();
}},_defaultFormat:function(F){var G=F?F.getLabel():t;
var H=F?F.getRich():false;

if(H){G=G.replace(/<[^>]+?>/g,t);
G=qx.bom.String.unescape(G);
}return G;
},_onBlur:function(e){this.close();
},_onKeyPress:function(e){var A=e.getKeyIdentifier();
var B=this.getChildControl(v);
if(B.isHidden()&&(A==b||A==i)){e.stopPropagation();
}else if(!B.isHidden()&&A==g){this.close();
e.stop();
}else{this.getChildControl(u).handleKeyPress(e);
}},_onMousewheel:function(e){var x=e.getTarget();
var w=this.getChildControl(v);

if(qx.ui.core.Widget.contains(w,x)){e.preventDefault();
}else{this.close();
}},_onResize:function(e){this.getChildControl(v).setMinWidth(e.getData().width);
},_onListChangeSelection:function(e){throw new Error("Abstract method: _onListChangeSelection()");
},_onListMouseDown:function(e){throw new Error("Abstract method: _onListMouseDown()");
},_onPopupChangeVisibility:function(e){throw new Error("Abstract method: _onPopupChangeVisibility()");
}},destruct:function(){var E=qx.core.Init.getApplication().getRoot();

if(E){E.removeListener(s,this._onMousewheel,this,true);
}}});
})();
(function(){var l="list",k="atom",j="pressed",i="abandoned",h="popup",g="hovered",f="changeLabel",d="changeIcon",c="arrow",b="",A="spacer",z="Enter",y="one",x="mouseout",w="Space",v="key",u="mousewheel",t="keyinput",s="changeSelection",r="quick",p="qx.ui.form.SelectBox",q="mouseover",n="selectbox",o="click",m=" ";
qx.Class.define(p,{extend:qx.ui.form.AbstractSelectBox,implement:[qx.ui.core.ISingleSelection,qx.ui.form.IModelSelection],include:[qx.ui.core.MSingleSelectionHandling,qx.ui.form.MModelSelection],construct:function(){arguments.callee.base.call(this);
this._createChildControl(k);
this._createChildControl(A);
this._createChildControl(c);
this.addListener(q,this._onMouseOver,this);
this.addListener(x,this._onMouseOut,this);
this.addListener(o,this._onClick,this);
this.addListener(u,this._onMouseWheel,this);
this.addListener(t,this._onKeyInput,this);
this.addListener(s,this.__wh,this);
},properties:{appearance:{refine:true,init:n}},members:{__wg:null,_createChildControlImpl:function(be){var bf;

switch(be){case A:bf=new qx.ui.core.Spacer();
this._add(bf,{flex:1});
break;
case k:bf=new qx.ui.basic.Atom(m);
bf.setCenter(false);
bf.setAnonymous(true);
this._add(bf,{flex:1});
break;
case c:bf=new qx.ui.basic.Image();
bf.setAnonymous(true);
this._add(bf);
break;
}return bf||arguments.callee.base.call(this,be);
},_forwardStates:{focused:true},_getItems:function(){return this.getChildrenContainer().getChildren();
},_isAllowEmptySelection:function(){return this.getChildrenContainer().getSelectionMode()!==y;
},__wh:function(e){var D=e.getData()[0];
var C=this.getChildControl(l);

if(C.getSelection()[0]!=D){if(D){C.setSelection([D]);
}else{C.resetSelection();
}}this.__wi();
this.__wj();
},__wi:function(){var bc=this.getChildControl(l).getSelection()[0];
var bd=this.getChildControl(k);
var bb=bc?bc.getIcon():b;
bb==null?bd.resetIcon():bd.setIcon(bb);
},__wj:function(){var L=this.getChildControl(l).getSelection()[0];
var M=this.getChildControl(k);
var K=L?L.getLabel():b;
var J=this.getFormat();

if(J!=null){K=J.call(this,L);
}if(K&&K.translate){K=K.translate();
}K==null?M.resetLabel():M.setLabel(K);
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
}var O=e.getWheelDelta()>0?1:-1;
var Q=this.getSelectables();
var P=this.getSelection()[0];

if(!P){P=Q[0];
}var N=Q.indexOf(P)+O;
var R=Q.length-1;
if(N<0){N=0;
}else if(N>=R){N=R;
}this.setSelection([Q[N]]);
e.stopPropagation();
e.preventDefault();
},_onKeyPress:function(e){var B=e.getKeyIdentifier();

if(B==z||B==w){if(this.__wg){this.setSelection([this.__wg]);
this.__wg=null;
}this.toggle();
}else{arguments.callee.base.call(this,e);
}},_onKeyInput:function(e){var a=e.clone();
a.setTarget(this._list);
a.setBubbles(false);
this.getChildControl(l).dispatchEvent(a);
},_onListMouseDown:function(e){if(this.__wg){this.setSelection([this.__wg]);
this.__wg=null;
}},_onListChangeSelection:function(e){var E=e.getData();
var H=e.getOldData();
if(H&&H.length>0){H[0].removeListener(d,this.__wi,this);
H[0].removeListener(f,this.__wj,this);
}
if(E.length>0){var G=this.getChildControl(h);
var F=this.getChildControl(l);
var I=F.getSelectionContext();

if(G.isVisible()&&(I==r||I==v)){this.__wg=E[0];
}else{this.setSelection([E[0]]);
this.__wg=null;
}E[0].addListener(d,this.__wi,this);
E[0].addListener(f,this.__wj,this);
}else{this.resetSelection();
}},_onPopupChangeVisibility:function(e){var T=this.getChildControl(h);

if(!T.isVisible()){var V=this.getChildControl(l);
if(V.hasChildren()){V.setSelection(this.getSelection());
}}else{var S=T.getLayoutLocation(this);
var X=qx.bom.Viewport.getHeight();
var W=S.top;
var Y=X-S.bottom;
var U=W>Y?W:Y;
var ba=this.getMaxListHeight();
var V=this.getChildControl(l);

if(ba==null||ba>U){V.setMaxHeight(U);
}else if(ba<U){V.setMaxHeight(ba);
}}}},destruct:function(){this.__wg=null;
}});
})();
(function(){var b="qx.ui.form.IRadioItem",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){},getValue:function(){},setGroup:function(d){this.assertInstance(d,qx.ui.form.RadioGroup);
},getGroup:function(){}}});
})();
(function(){var e="inherit",d="toolbar-button",c="keydown",b="qx.ui.toolbar.Button",a="keyup";
qx.Class.define(b,{extend:qx.ui.form.Button,construct:function(f,g,h){arguments.callee.base.call(this,f,g,h);
this.removeListener(c,this._onKeyDown);
this.removeListener(a,this._onKeyUp);
},properties:{appearance:{refine:true,init:d},show:{refine:true,init:e},focusable:{refine:true,init:false}}});
})();
