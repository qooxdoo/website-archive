qx.$$packageData['6f341c0c4d69']={"locales":{},"resources":{},"translations":{}};

qx.Part.$$notifyLoad("6f341c0c4d69", function() {
(function(){var j="checked",i="qx.ui.form.RadioGroup",h="Boolean",g="menu-radiobutton",f="_applyValue",d="qx.ui.menu.RadioButton",c="changeValue",b="_applyGroup",a="execute";
qx.Class.define(d,{extend:qx.ui.menu.AbstractButton,include:[qx.ui.form.MModelProperty],implement:[qx.ui.form.IRadioItem,qx.ui.form.IBooleanForm,qx.ui.form.IModel],construct:function(k,l){qx.ui.menu.AbstractButton.call(this);
if(k!=null){this.setLabel(k);
}
if(l!=null){this.setMenu(l);
}this.addListener(a,this._onExecute,this);
},properties:{appearance:{refine:true,init:g},value:{check:h,nullable:true,event:c,apply:f,init:false},group:{check:i,nullable:true,apply:b}},members:{_applyValue:function(m,n){m?this.addState(j):this.removeState(j);
},_applyGroup:function(o,p){if(p){p.remove(this);
}
if(o){o.add(this);
}},_onExecute:function(e){this.setValue(true);
},_onMouseUp:function(e){if(e.isLeftPressed()){this.execute();
}else{if(this.getContextMenu()){return;
}}qx.ui.menu.Manager.getInstance().hideAll();
},_onKeyPress:function(e){this.execute();
}}});
})();
(function(){var k="button",j="hovered",i="pressed",h="arrow",g="Enter",f="Space",d="abandoned",c="both",b="String",a="changeVisibility",A="splitbutton",z="changeShow",y="mouseout",x="keydown",w="execute",v="_applyMenu",u="icon",t="mouseover",s="keyup",r="qx.ui.menu.Menu",p="_applyIcon",q="label",n="_applyShow",o="changeMenu",l="_applyLabel",m="qx.ui.form.SplitButton";
qx.Class.define(m,{extend:qx.ui.core.Widget,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],construct:function(B,C,D,E){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.HBox);
this._createChildControl(h);
this.addListener(t,this._onMouseOver,this,true);
this.addListener(y,this._onMouseOut,this,true);
this.addListener(x,this._onKeyDown);
this.addListener(s,this._onKeyUp);
if(B!=null){this.setLabel(B);
}
if(C!=null){this.setIcon(C);
}
if(D!=null){this.setMenu(D);
}
if(E!=null){this.setCommand(E);
}},properties:{appearance:{refine:true,init:A},focusable:{refine:true,init:true},label:{apply:l,nullable:true,check:b},icon:{check:b,apply:p,nullable:true,themeable:true},show:{init:c,check:[c,q,u],themeable:true,inheritable:true,apply:n,event:z},menu:{check:r,nullable:true,apply:v,event:o}},members:{__yM:null,_createChildControlImpl:function(F,G){var H;

switch(F){case k:H=new qx.ui.form.Button;
H.addListener(w,this._onButtonExecute,this);
H.setFocusable(false);
this._addAt(H,0,{flex:1});
break;
case h:H=new qx.ui.form.MenuButton;
H.setFocusable(false);
this._addAt(H,1);
break;
}return H||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,F);
},_forwardStates:{hovered:1,focused:1},_applyLabel:function(I,J){var K=this.getChildControl(k);
I==null?K.resetLabel():K.setLabel(I);
},_applyIcon:function(L,M){var N=this.getChildControl(k);
L==null?N.resetIcon():N.setIcon(L);
},_applyMenu:function(O,P){var Q=this.getChildControl(h);

if(O){Q.resetEnabled();
Q.setMenu(O);
O.setOpener(this);
O.addListener(a,this._onChangeMenuVisibility,this);
}else{Q.setEnabled(false);
Q.resetMenu();
}
if(P){P.removeListener(a,this._onChangeMenuVisibility,this);
P.resetOpener();
}},_applyShow:function(R,S){},_onMouseOver:function(e){e.stopPropagation();
this.addState(j);
delete this.__yM;
},_onMouseOut:function(e){e.stopPropagation();
if(!this.hasState(j)){return;
}var U=e.getRelatedTarget();

if(qx.ui.core.Widget.contains(this,U)){return;
}var T=this.getMenu();

if(T&&T.isVisible()){this.__yM=true;
return;
}this.removeState(j);
},_onKeyDown:function(e){var V=this.getChildControl(k);

switch(e.getKeyIdentifier()){case g:case f:V.removeState(d);
V.addState(i);
}},_onKeyUp:function(e){var W=this.getChildControl(k);

switch(e.getKeyIdentifier()){case g:case f:if(W.hasState(i)){W.removeState(d);
W.removeState(i);
W.execute();
}}},_onButtonExecute:function(e){this.execute();
},_onChangeMenuVisibility:function(e){if(!this.getMenu().isVisible()&&this.__yM){this.removeState(j);
}}}});
})();

});