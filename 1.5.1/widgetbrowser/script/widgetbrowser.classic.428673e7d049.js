qx.$$packageData['5130']={"locales":{},"resources":{},"translations":{}};
qx.Part.$$notifyLoad("5130", function() {
(function(){var t="icon",s="label",r="arrow",q="shortcut",p="changeLocale",o="qx.dynlocale",n="submenu",m="String",l="changeCommand",k="qx.ui.menu.Menu",d="qx.ui.menu.AbstractButton",j="keypress",h="",c="_applyIcon",b="mouseup",g="abstract",f="_applyLabel",i="click",a="_applyMenu";
qx.Class.define(d,{extend:qx.ui.core.Widget,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],type:g,construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.menu.ButtonLayout);
this.addListener(i,this._onClick);
this.addListener(j,this._onKeyPress);
this.addListener(b,this._onMouseUp);
this.addListener(l,this._onChangeCommand,this);
},properties:{blockToolTip:{refine:true,init:true},label:{check:m,apply:f,nullable:true},menu:{check:k,apply:a,nullable:true,dereference:true},icon:{check:m,apply:c,themeable:true,nullable:true}},members:{_createChildControlImpl:function(u,v){var w;

switch(u){case t:w=new qx.ui.basic.Image;
w.setAnonymous(true);
this._add(w,{column:0});
break;
case s:w=new qx.ui.basic.Label;
w.setAnonymous(true);
this._add(w,{column:1});
break;
case q:w=new qx.ui.basic.Label;
w.setAnonymous(true);
this._add(w,{column:2});
break;
case r:w=new qx.ui.basic.Image;
w.setAnonymous(true);
this._add(w,{column:3});
break;
}return w||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,u);
},_forwardStates:{selected:1},getChildrenSizes:function(){var x=0,y=0,z=0,D=0;

if(this._isChildControlVisible(t)){var E=this.getChildControl(t);
x=E.getMarginLeft()+E.getSizeHint().width+E.getMarginRight();
}
if(this._isChildControlVisible(s)){var B=this.getChildControl(s);
y=B.getMarginLeft()+B.getSizeHint().width+B.getMarginRight();
}
if(this._isChildControlVisible(q)){var A=this.getChildControl(q);
z=A.getMarginLeft()+A.getSizeHint().width+A.getMarginRight();
}
if(this._isChildControlVisible(r)){var C=this.getChildControl(r);
D=C.getMarginLeft()+C.getSizeHint().width+C.getMarginRight();
}return [x,y,z,D];
},_onMouseUp:function(e){},_onClick:function(e){},_onKeyPress:function(e){},_onChangeCommand:function(e){var H=e.getData();
if(H==null){return;
}
if(qx.core.Environment.get(o)){var F=e.getOldData();

if(!F){qx.locale.Manager.getInstance().addListener(p,this._onChangeLocale,this);
}
if(!H){qx.locale.Manager.getInstance().removeListener(p,this._onChangeLocale,this);
}}var G=H!=null?H.toString():h;
this.getChildControl(q).setValue(G);
},_onChangeLocale:qx.core.Environment.select(o,{"true":function(e){var I=this.getCommand();

if(I!=null){this.getChildControl(q).setValue(I.toString());
}},"false":null}),_applyIcon:function(J,K){if(J){this._showChildControl(t).setSource(J);
}else{this._excludeChildControl(t);
}},_applyLabel:function(L,M){if(L){this._showChildControl(s).setValue(L);
}else{this._excludeChildControl(s);
}},_applyMenu:function(N,O){if(O){O.resetOpener();
O.removeState(n);
}
if(N){this._showChildControl(r);
N.setOpener(this);
N.addState(n);
}else{this._excludeChildControl(r);
}}},destruct:function(){this.removeListener(l,this._onChangeCommand,this);

if(this.getMenu()){if(!qx.core.ObjectRegistry.inShutDown){this.getMenu().destroy();
}}
if(qx.core.Environment.get(o)){qx.locale.Manager.getInstance().removeListener(p,this._onChangeLocale,this);
}}});
})();
(function(){var n="pressed",m="hovered",l="changeVisibility",k="qx.ui.menu.Menu",j="submenu",i="Enter",h="abandoned",g="contextmenu",f="changeMenu",d="qx.ui.form.MenuButton",a="visible",c="left",b="_applyMenu";
qx.Class.define(d,{extend:qx.ui.form.Button,construct:function(o,p,q){qx.ui.form.Button.call(this,o,p);
if(q!=null){this.setMenu(q);
}},properties:{menu:{check:k,nullable:true,apply:b,event:f}},members:{_applyVisibility:function(r,s){qx.ui.form.Button.prototype._applyVisibility.call(this,r,s);
var t=this.getMenu();

if(r!=a&&t){t.hide();
}},_applyMenu:function(u,v){if(v){v.removeListener(l,this._onMenuChange,this);
v.resetOpener();
}
if(u){u.addListener(l,this._onMenuChange,this);
u.setOpener(this);
u.removeState(j);
u.removeState(g);
}},open:function(w){var x=this.getMenu();

if(x){qx.ui.menu.Manager.getInstance().hideAll();
x.setOpener(this);
x.open();
if(w){var y=x.getSelectables()[0];

if(y){x.setSelectedButton(y);
}}}},_onMenuChange:function(e){var z=this.getMenu();

if(z.isVisible()){this.addState(n);
}else{this.removeState(n);
}},_onMouseDown:function(e){qx.ui.form.Button.prototype._onMouseDown.call(this,e);
if(e.getButton()!=c){return;
}var A=this.getMenu();

if(A){if(!A.isVisible()){this.open();
}else{A.exclude();
}e.stopPropagation();
}},_onMouseUp:function(e){qx.ui.form.Button.prototype._onMouseUp.call(this,e);
e.stopPropagation();
},_onMouseOver:function(e){this.addState(m);
},_onMouseOut:function(e){this.removeState(m);
},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case i:this.removeState(h);
this.addState(n);
var B=this.getMenu();

if(B){if(!B.isVisible()){this.open();
}else{B.exclude();
}}e.stopPropagation();
}},_onKeyUp:function(e){}}});
})();
(function(){var h="pressed",g="hovered",f="inherit",d="qx.ui.menubar.Button",c="keydown",b="menubar-button",a="keyup";
qx.Class.define(d,{extend:qx.ui.form.MenuButton,construct:function(i,j,k){qx.ui.form.MenuButton.call(this,i,j,k);
this.removeListener(c,this._onKeyDown);
this.removeListener(a,this._onKeyUp);
},properties:{appearance:{refine:true,init:b},show:{refine:true,init:f},focusable:{refine:true,init:false}},members:{getMenuBar:function(){var parent=this;

while(parent){if(parent instanceof qx.ui.toolbar.ToolBar){return parent;
}parent=parent.getLayoutParent();
}return null;
},open:function(l){qx.ui.form.MenuButton.prototype.open.call(this,l);
var menubar=this.getMenuBar();
menubar._setAllowMenuOpenHover(true);
},_onMenuChange:function(e){var m=this.getMenu();
var menubar=this.getMenuBar();

if(m.isVisible()){this.addState(h);
if(menubar){menubar.setOpenMenu(m);
}}else{this.removeState(h);
if(menubar&&menubar.getOpenMenu()==m){menubar.resetOpenMenu();
menubar._setAllowMenuOpenHover(false);
}}},_onMouseUp:function(e){qx.ui.form.MenuButton.prototype._onMouseUp.call(this,e);
var n=this.getMenu();

if(n&&n.isVisible()&&!this.hasState(h)){this.addState(h);
}},_onMouseOver:function(e){this.addState(g);
if(this.getMenu()){var menubar=this.getMenuBar();

if(menubar._isAllowMenuOpenHover()){qx.ui.menu.Manager.getInstance().hideAll();
menubar._setAllowMenuOpenHover(true);
if(this.isEnabled()){this.open();
}}}}}});
})();
(function(){var u="keypress",t="interval",s="keydown",r="mousedown",q="keyup",p="__oU",o="blur",n="Enter",m="__jw",l="Up",d="__oT",k="Escape",h="event.touch",c="qx.ui.menu.Manager",b="Left",g="Down",f="Right",j="singleton",a="Space";
qx.Class.define(c,{type:j,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__jw=[];
var v=document.body;
var w=qx.event.Registration;
w.addListener(window.document.documentElement,r,this._onMouseDown,this,true);
w.addListener(v,s,this._onKeyUpDown,this,true);
w.addListener(v,q,this._onKeyUpDown,this,true);
w.addListener(v,u,this._onKeyPress,this,true);
if(!qx.core.Environment.get(h)){qx.bom.Element.addListener(window,o,this.hideAll,this);
}this.__oT=new qx.event.Timer;
this.__oT.addListener(t,this._onOpenInterval,this);
this.__oU=new qx.event.Timer;
this.__oU.addListener(t,this._onCloseInterval,this);
},members:{__oV:null,__oW:null,__oT:null,__oU:null,__jw:null,_getChild:function(x,y,z,A){var B=x.getChildren();
var length=B.length;
var C;

for(var i=y;i<length&&i>=0;i+=z){C=B[i];

if(C.isEnabled()&&!C.isAnonymous()&&C.isVisible()){return C;
}}
if(A){i=i==length?0:length-1;

for(;i!=y;i+=z){C=B[i];

if(C.isEnabled()&&!C.isAnonymous()&&C.isVisible()){return C;
}}}return null;
},_isInMenu:function(D){while(D){if(D instanceof qx.ui.menu.Menu){return true;
}D=D.getLayoutParent();
}return false;
},_getMenuButton:function(E){while(E){if(E instanceof qx.ui.menu.AbstractButton){return E;
}E=E.getLayoutParent();
}return null;
},add:function(F){var G=this.__jw;
G.push(F);
F.setZIndex(1e6+G.length);
},remove:function(H){var I=this.__jw;

if(I){qx.lang.Array.remove(I,H);
}},hideAll:function(){var J=this.__jw;

if(J){for(var i=J.length-1;i>=0;i--){J[i].exclude();
}}},getActiveMenu:function(){var K=this.__jw;
return K.length>0?K[K.length-1]:null;
},scheduleOpen:function(L){this.cancelClose(L);
if(L.isVisible()){if(this.__oV){this.cancelOpen(this.__oV);
}}else if(this.__oV!=L){this.__oV=L;
this.__oT.restartWith(L.getOpenInterval());
}},scheduleClose:function(M){this.cancelOpen(M);
if(!M.isVisible()){if(this.__oW){this.cancelClose(this.__oW);
}}else if(this.__oW!=M){this.__oW=M;
this.__oU.restartWith(M.getCloseInterval());
}},cancelOpen:function(N){if(this.__oV==N){this.__oT.stop();
this.__oV=null;
}},cancelClose:function(O){if(this.__oW==O){this.__oU.stop();
this.__oW=null;
}},_onOpenInterval:function(e){this.__oT.stop();
this.__oV.open();
this.__oV=null;
},_onCloseInterval:function(e){this.__oU.stop();
this.__oW.exclude();
this.__oW=null;
},_onMouseDown:function(e){var P=e.getTarget();
P=qx.ui.core.Widget.getWidgetByElement(P,true);
if(P==null){this.hideAll();
return;
}if(P.getMenu&&P.getMenu()&&P.getMenu().isVisible()){return;
}if(this.__jw.length>0&&!this._isInMenu(P)){this.hideAll();
}},__oX:{"Enter":1,"Space":1},__mY:{"Escape":1,"Up":1,"Down":1,"Left":1,"Right":1},_onKeyUpDown:function(e){var Q=this.getActiveMenu();

if(!Q){return;
}var R=e.getKeyIdentifier();

if(this.__mY[R]||(this.__oX[R]&&Q.getSelectedButton())){e.stopPropagation();
}},_onKeyPress:function(e){var S=this.getActiveMenu();

if(!S){return;
}var T=e.getKeyIdentifier();
var V=this.__mY[T];
var U=this.__oX[T];

if(V){switch(T){case l:this._onKeyPressUp(S);
break;
case g:this._onKeyPressDown(S);
break;
case b:this._onKeyPressLeft(S);
break;
case f:this._onKeyPressRight(S);
break;
case k:this.hideAll();
break;
}e.stopPropagation();
e.preventDefault();
}else if(U){var W=S.getSelectedButton();

if(W){switch(T){case n:this._onKeyPressEnter(S,W,e);
break;
case a:this._onKeyPressSpace(S,W,e);
break;
}e.stopPropagation();
e.preventDefault();
}}},_onKeyPressUp:function(X){var Y=X.getSelectedButton();
var ba=X.getChildren();
var bc=Y?X.indexOf(Y)-1:ba.length-1;
var bb=this._getChild(X,bc,-1,true);
if(bb){X.setSelectedButton(bb);
}else{X.resetSelectedButton();
}},_onKeyPressDown:function(bd){var be=bd.getSelectedButton();
var bg=be?bd.indexOf(be)+1:0;
var bf=this._getChild(bd,bg,1,true);
if(bf){bd.setSelectedButton(bf);
}else{bd.resetSelectedButton();
}},_onKeyPressLeft:function(bh){var bm=bh.getOpener();

if(!bm){return;
}if(bm instanceof qx.ui.menu.AbstractButton){var bj=bm.getLayoutParent();
bj.resetOpenedButton();
bj.setSelectedButton(bm);
}else if(bm instanceof qx.ui.menubar.Button){var bl=bm.getMenuBar().getMenuButtons();
var bi=bl.indexOf(bm);
if(bi===-1){return;
}var bn=null;
var length=bl.length;

for(var i=1;i<=length;i++){var bk=bl[(bi-i+length)%length];

if(bk.isEnabled()&&bk.isVisible()){bn=bk;
break;
}}
if(bn&&bn!=bm){bn.open(true);
}}},_onKeyPressRight:function(bo){var bq=bo.getSelectedButton();
if(bq){var bp=bq.getMenu();

if(bp){bo.setOpenedButton(bq);
var bw=this._getChild(bp,0,1);

if(bw){bp.setSelectedButton(bw);
}return;
}}else if(!bo.getOpenedButton()){var bw=this._getChild(bo,0,1);

if(bw){bo.setSelectedButton(bw);

if(bw.getMenu()){bo.setOpenedButton(bw);
}return;
}}var bu=bo.getOpener();
if(bu instanceof qx.ui.menu.Button&&bq){while(bu){bu=bu.getLayoutParent();

if(bu instanceof qx.ui.menu.Menu){bu=bu.getOpener();

if(bu instanceof qx.ui.menubar.Button){break;
}}else{break;
}}
if(!bu){return;
}}if(bu instanceof qx.ui.menubar.Button){var bt=bu.getMenuBar().getMenuButtons();
var br=bt.indexOf(bu);
if(br===-1){return;
}var bv=null;
var length=bt.length;

for(var i=1;i<=length;i++){var bs=bt[(br+i)%length];

if(bs.isEnabled()&&bs.isVisible()){bv=bs;
break;
}}
if(bv&&bv!=bu){bv.open(true);
}}},_onKeyPressEnter:function(bx,by,e){if(by.hasListener(u)){var bz=e.clone();
bz.setBubbles(false);
bz.setTarget(by);
by.dispatchEvent(bz);
}this.hideAll();
},_onKeyPressSpace:function(bA,bB,e){if(bB.hasListener(u)){var bC=e.clone();
bC.setBubbles(false);
bC.setTarget(bB);
bB.dispatchEvent(bC);
}}},destruct:function(){var bE=qx.event.Registration;
var bD=document.body;
bE.removeListener(window.document.documentElement,r,this._onMouseDown,this,true);
bE.removeListener(bD,s,this._onKeyUpDown,this,true);
bE.removeListener(bD,q,this._onKeyUpDown,this,true);
bE.removeListener(bD,u,this._onKeyPress,this,true);
this._disposeObjects(d,p);
this._disposeArray(m);
}});
})();
(function(){var b="toolbar-separator",a="qx.ui.toolbar.Separator";
qx.Class.define(a,{extend:qx.ui.core.Widget,properties:{appearance:{refine:true,init:b},anonymous:{refine:true,init:true},width:{refine:true,init:0},height:{refine:true,init:0}}});
})();
(function(){var b="qx.ui.menu.Button",a="menu-button";
qx.Class.define(b,{extend:qx.ui.menu.AbstractButton,construct:function(c,d,f,g){qx.ui.menu.AbstractButton.call(this);
if(c!=null){this.setLabel(c);
}
if(d!=null){this.setIcon(d);
}
if(f!=null){this.setCommand(f);
}
if(g!=null){this.setMenu(g);
}},properties:{appearance:{refine:true,init:a}},members:{_onClick:function(e){if(e.isLeftPressed()){this.execute();
if(this.getMenu()){return;
}}else{if(this.getContextMenu()){return;
}}qx.ui.menu.Manager.getInstance().hideAll();
},_onKeyPress:function(e){this.execute();
}}});
})();
(function(){var w="visible",v="excluded",u="resize",t="qx.event.type.Data",s="both",r="qx.ui.menu.Menu",q="_applySpacing",p="showItem",o="Boolean",n="icon",d="label",m="qx.ui.core.Widget",h="_applyOverflowIndicator",c="_applyOverflowHandling",b="changeShow",g="Integer",f="qx.ui.toolbar.ToolBar",j="hideItem",a="toolbar",k="changeOpenMenu";
qx.Class.define(f,{extend:qx.ui.core.Widget,include:qx.ui.core.MChildrenHandling,construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.HBox());
this.__pk=[];
this.__pl=[];
},properties:{appearance:{refine:true,init:a},openMenu:{check:r,event:k,nullable:true},show:{init:s,check:[s,d,n],inheritable:true,event:b},spacing:{nullable:true,check:g,themeable:true,apply:q},overflowIndicator:{check:m,nullable:true,apply:h},overflowHandling:{init:false,check:o,apply:c}},events:{"hideItem":t,"showItem":t},members:{__pk:null,__pl:null,_computeSizeHint:function(){var z=qx.ui.core.Widget.prototype._computeSizeHint.call(this);

if(true&&this.getOverflowHandling()){var x=0;
var y=this.getOverflowIndicator();

if(y){x=y.getSizeHint().width+this.getSpacing();
}z.minWidth=x;
}return z;
},_onResize:function(e){this._recalculateOverflow(e.getData().width);
},_recalculateOverflow:function(A,B){if(!this.getOverflowHandling()){return;
}B=B||this.getSizeHint().width;
var C=this.getOverflowIndicator();
var I=0;

if(C){I=C.getSizeHint().width;
}
if(A==undefined&&this.getBounds()!=null){A=this.getBounds().width;
}if(A==undefined){return ;
}if(A<B){do{var J=this._getNextToHide();
if(!J){return;
}var L=J.getMarginLeft()+J.getMarginRight();
L=Math.max(L,this.getSpacing());
var G=J.getSizeHint().width+L;
this.__pn(J);
B-=G;
if(C&&C.getVisibility()!=w){C.setVisibility(w);
B+=I;
var E=C.getMarginLeft()+C.getMarginRight();
B+=Math.max(E,this.getSpacing());
}}while(B>A);
}else if(this.__pk.length>0){do{var M=this.__pk[0];
if(M){var L=M.getMarginLeft()+M.getMarginRight();
L=Math.max(L,this.getSpacing());
if(M.getDecoratorElement()==null){M.syncAppearance();
M.invalidateLayoutCache();
}var F=M.getSizeHint().width;
var K=false;
if(this.__pk.length==1&&I>0){var D=L-this.getSpacing();
var H=B-I+F+D;
K=A>H;
}if(A>B+F+L||K){this.__pm(M);
B+=F;
if(C&&this.__pk.length==0){C.setVisibility(v);
}}else{return;
}}}while(A>=B&&this.__pk.length>0);
}},__pm:function(N){N.setVisibility(w);
this.__pk.shift();
this.fireDataEvent(p,N);
},__pn:function(O){if(!O){return;
}this.__pk.unshift(O);
O.setVisibility(v);
this.fireDataEvent(j,O);
},_getNextToHide:function(){for(var i=this.__pl.length-1;i>=0;i--){var P=this.__pl[i];
if(P&&P.getVisibility&&P.getVisibility()==w){return P;
}}var Q=this._getChildren();

for(var i=Q.length-1;i>=0;i--){var R=Q[i];
if(R==this.getOverflowIndicator()){continue;
}if(R.getVisibility&&R.getVisibility()==w){return R;
}}},setRemovePriority:function(S,T,U){if(!U&&this.__pl[T]!=undefined){throw new Error("Priority already in use!");
}this.__pl[T]=S;
},_applyOverflowHandling:function(V,W){this.invalidateLayoutCache();
var parent=this.getLayoutParent();

if(parent){parent.invalidateLayoutCache();
}var Y=this.getBounds();

if(Y&&Y.width){this._recalculateOverflow(Y.width);
}if(V){this.addListener(u,this._onResize,this);
}else{this.removeListener(u,this._onResize,this);
var X=this.getOverflowIndicator();

if(X){X.setVisibility(v);
}for(var i=0;i<this.__pk.length;i++){this.__pk[i].setVisibility(w);
}this.__pk=[];
}},_applyOverflowIndicator:function(ba,bb){if(bb){this._remove(bb);
}
if(ba){if(this._indexOf(ba)==-1){throw new Error("Widget must be child of the toolbar.");
}ba.setVisibility(v);
}},__po:false,_setAllowMenuOpenHover:function(bc){this.__po=bc;
},_isAllowMenuOpenHover:function(){return this.__po;
},_applySpacing:function(bd,be){var bf=this._getLayout();
bd==null?bf.resetSpacing():bf.setSpacing(bd);
},_add:function(bg,bh){qx.ui.core.Widget.prototype._add.call(this,bg,bh);
var bi=this.getSizeHint().width+bg.getSizeHint().width+2*this.getSpacing();
this._recalculateOverflow(null,bi);
},_addAt:function(bj,bk,bl){qx.ui.core.Widget.prototype._addAt.call(this,bj,bk,bl);
var bm=this.getSizeHint().width+bj.getSizeHint().width+2*this.getSpacing();
this._recalculateOverflow(null,bm);
},_addBefore:function(bn,bo,bp){qx.ui.core.Widget.prototype._addBefore.call(this,bn,bo,bp);
var bq=this.getSizeHint().width+bn.getSizeHint().width+2*this.getSpacing();
this._recalculateOverflow(null,bq);
},_addAfter:function(br,bs,bt){qx.ui.core.Widget.prototype._addAfter.call(this,br,bs,bt);
var bu=this.getSizeHint().width+br.getSizeHint().width+2*this.getSpacing();
this._recalculateOverflow(null,bu);
},_remove:function(bv){qx.ui.core.Widget.prototype._remove.call(this,bv);
var bw=this.getSizeHint().width-bv.getSizeHint().width-2*this.getSpacing();
this._recalculateOverflow(null,bw);
},_removeAt:function(bx){var bz=this._getChildren()[bx];
qx.ui.core.Widget.prototype._removeAt.call(this,bx);
var by=this.getSizeHint().width-bz.getSizeHint().width-2*this.getSpacing();
this._recalculateOverflow(null,by);
},_removeAll:function(){qx.ui.core.Widget.prototype._removeAll.call(this);
this._recalculateOverflow(null,0);
},addSpacer:function(){var bA=new qx.ui.core.Spacer;
this._add(bA,{flex:1});
return bA;
},addSeparator:function(){this.add(new qx.ui.toolbar.Separator);
},getMenuButtons:function(){var bC=this.getChildren();
var bB=[];
var bD;

for(var i=0,l=bC.length;i<l;i++){bD=bC[i];

if(bD instanceof qx.ui.menubar.Button){bB.push(bD);
}else if(bD instanceof qx.ui.toolbar.Part){bB.push.apply(bB,bD.getMenuButtons());
}}return bB;
}},destruct:function(){if(this.hasListener(u)){this.removeListener(u,this._onResize,this);
}}});
})();
(function(){var c="Integer",b="_applyLayoutChange",a="qx.ui.menu.Layout";
qx.Class.define(a,{extend:qx.ui.layout.VBox,properties:{columnSpacing:{check:c,init:0,apply:b},spanColumn:{check:c,init:1,nullable:true,apply:b},iconColumnWidth:{check:c,init:0,themeable:true,apply:b},arrowColumnWidth:{check:c,init:0,themeable:true,apply:b}},members:{__pe:null,_computeSizeHint:function(){var q=this._getLayoutChildren();
var o,g,j;
var e=this.getSpanColumn();
var h=this.__pe=[0,0,0,0];
var m=this.getColumnSpacing();
var k=0;
var f=0;
for(var i=0,l=q.length;i<l;i++){o=q[i];

if(o.isAnonymous()){continue;
}g=o.getChildrenSizes();

for(var n=0;n<g.length;n++){if(e!=null&&n==e&&g[e+1]==0){k=Math.max(k,g[n]);
}else{h[n]=Math.max(h[n],g[n]);
}}var d=q[i].getInsets();
f=Math.max(f,d.left+d.right);
}if(e!=null&&h[e]+m+h[e+1]<k){h[e]=k-h[e+1]-m;
}if(k==0){j=m*2;
}else{j=m*3;
}if(h[0]==0){h[0]=this.getIconColumnWidth();
}if(h[3]==0){h[3]=this.getArrowColumnWidth();
}var p=qx.ui.layout.VBox.prototype._computeSizeHint.call(this).height;
return {minHeight:p,height:p,width:qx.lang.Array.sum(h)+f+j};
},getColumnSizes:function(){return this.__pe||null;
}},destruct:function(){this.__pe=null;
}});
})();
(function(){var f="both",e="toolbar/part/container",d="icon",c="changeShow",b="qx.ui.toolbar.PartContainer",a="label";
qx.Class.define(b,{extend:qx.ui.container.Composite,construct:function(){qx.ui.container.Composite.call(this);
this._setLayout(new qx.ui.layout.HBox);
},properties:{appearance:{refine:true,init:e},show:{init:f,check:[f,a,d],inheritable:true,event:c}}});
})();
(function(){var p="middle",o="left",n="right",m="container",k="handle",j="both",h="Integer",g="qx.ui.toolbar.Part",f="icon",e="label",b="syncAppearance",d="changeShow",c="_applySpacing",a="toolbar/part";
qx.Class.define(g,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling],construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.HBox);
this._createChildControl(k);
},properties:{appearance:{refine:true,init:a},show:{init:j,check:[j,e,f],inheritable:true,event:d},spacing:{nullable:true,check:h,themeable:true,apply:c}},members:{_createChildControlImpl:function(q,r){var s;

switch(q){case k:s=new qx.ui.basic.Image();
s.setAlignY(p);
this._add(s);
break;
case m:s=new qx.ui.toolbar.PartContainer();
s.addListener(b,this.__pp,this);
this._add(s);
break;
}return s||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,q);
},getChildrenContainer:function(){return this.getChildControl(m);
},_applySpacing:function(t,u){var v=this.getChildControl(m).getLayout();
t==null?v.resetSpacing():v.setSpacing(t);
},__pp:function(){var w=this.getChildrenContainer().getChildren();

for(var i=0;i<w.length;i++){if(i==0&&i!=w.length-1){w[i].addState(o);
w[i].removeState(n);
w[i].removeState(p);
}else if(i==w.length-1&&i!=0){w[i].addState(n);
w[i].removeState(o);
w[i].removeState(p);
}else if(i==0&&i==w.length-1){w[i].removeState(o);
w[i].removeState(p);
w[i].removeState(n);
}else{w[i].addState(p);
w[i].removeState(n);
w[i].removeState(o);
}}},addSeparator:function(){this.add(new qx.ui.toolbar.Separator);
},getMenuButtons:function(){var y=this.getChildren();
var x=[];
var z;

for(var i=0,l=y.length;i<l;i++){z=y[i];

if(z instanceof qx.ui.menubar.Button){x.push(z);
}}return x;
}}});
})();
(function(){var l="slidebar",k="Integer",j="resize",h="qx.ui.core.Widget",g="selected",f="visible",d="Boolean",c="mouseout",b="excluded",a="menu",A="_applySelectedButton",z="_applySpacingY",y="_blocker",x="_applyCloseInterval",w="_applyBlockerColor",v="_applyIconColumnWidth",u="mouseover",t="_applyArrowColumnWidth",s="qx.ui.menu.Menu",r="Color",p="Number",q="_applyOpenInterval",n="_applySpacingX",o="_applyBlockerOpacity",m="_applyOpenedButton";
qx.Class.define(s,{extend:qx.ui.core.Widget,include:[qx.ui.core.MPlacement,qx.ui.core.MRemoteChildrenHandling],construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.menu.Layout);
var B=this.getApplicationRoot();
B.add(this);
this.addListener(u,this._onMouseOver);
this.addListener(c,this._onMouseOut);
this.addListener(j,this._onResize,this);
B.addListener(j,this._onResize,this);
this._blocker=new qx.ui.core.Blocker(B);
this.initVisibility();
this.initKeepFocus();
this.initKeepActive();
},properties:{appearance:{refine:true,init:a},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},visibility:{refine:true,init:b},keepFocus:{refine:true,init:true},keepActive:{refine:true,init:true},spacingX:{check:k,apply:n,init:0,themeable:true},spacingY:{check:k,apply:z,init:0,themeable:true},iconColumnWidth:{check:k,init:0,themeable:true,apply:v},arrowColumnWidth:{check:k,init:0,themeable:true,apply:t},blockerColor:{check:r,init:null,nullable:true,apply:w,themeable:true},blockerOpacity:{check:p,init:1,apply:o,themeable:true},selectedButton:{check:h,nullable:true,apply:A},openedButton:{check:h,nullable:true,apply:m},opener:{check:h,nullable:true},openInterval:{check:k,themeable:true,init:250,apply:q},closeInterval:{check:k,themeable:true,init:250,apply:x},blockBackground:{check:d,themeable:true,init:false}},members:{__pa:null,__pb:null,_blocker:null,open:function(){if(this.getOpener()!=null){this.placeToWidget(this.getOpener());
this.__pd();
this.show();
this._placementTarget=this.getOpener();
}else{this.warn("The menu instance needs a configured 'opener' widget!");
}},openAtMouse:function(e){this.placeToMouse(e);
this.__pd();
this.show();
this._placementTarget={left:e.getDocumentLeft(),top:e.getDocumentTop()};
},openAtPoint:function(C){this.placeToPoint(C);
this.__pd();
this.show();
this._placementTarget=C;
},addSeparator:function(){this.add(new qx.ui.menu.Separator);
},getColumnSizes:function(){return this._getMenuLayout().getColumnSizes();
},getSelectables:function(){var D=[];
var E=this.getChildren();

for(var i=0;i<E.length;i++){if(E[i].isEnabled()){D.push(E[i]);
}}return D;
},_applyIconColumnWidth:function(F,G){this._getMenuLayout().setIconColumnWidth(F);
},_applyArrowColumnWidth:function(H,I){this._getMenuLayout().setArrowColumnWidth(H);
},_applySpacingX:function(J,K){this._getMenuLayout().setColumnSpacing(J);
},_applySpacingY:function(L,M){this._getMenuLayout().setSpacing(L);
},_applyVisibility:function(N,O){qx.ui.core.Widget.prototype._applyVisibility.call(this,N,O);
var P=qx.ui.menu.Manager.getInstance();

if(N===f){P.add(this);
var Q=this.getParentMenu();

if(Q){Q.setOpenedButton(this.getOpener());
}}else if(O===f){P.remove(this);
var Q=this.getParentMenu();

if(Q&&Q.getOpenedButton()==this.getOpener()){Q.resetOpenedButton();
}this.resetOpenedButton();
this.resetSelectedButton();
}this.__pc();
},__pc:function(){if(this.isVisible()){if(this.getBlockBackground()){var R=this.getZIndex();
this._blocker.blockContent(R-1);
}}else{if(this._blocker.isContentBlocked()){this._blocker.unblockContent();
}}},getParentMenu:function(){var S=this.getOpener();

if(!S||!(S instanceof qx.ui.menu.AbstractButton)){return null;
}
if(S&&S.getContextMenu()===this){return null;
}
while(S&&!(S instanceof qx.ui.menu.Menu)){S=S.getLayoutParent();
}return S;
},_applySelectedButton:function(T,U){if(U){U.removeState(g);
}
if(T){T.addState(g);
}},_applyOpenedButton:function(V,W){if(W&&W.getMenu()){W.getMenu().exclude();
}
if(V){V.getMenu().open();
}},_applyBlockerColor:function(X,Y){this._blocker.setColor(X);
},_applyBlockerOpacity:function(ba,bb){this._blocker.setOpacity(ba);
},getChildrenContainer:function(){return this.getChildControl(l,true)||this;
},_createChildControlImpl:function(bc,bd){var be;

switch(bc){case l:var be=new qx.ui.menu.MenuSlideBar();
var bg=this._getLayout();
this._setLayout(new qx.ui.layout.Grow());
var bf=be.getLayout();
be.setLayout(bg);
bf.dispose();
var bh=qx.lang.Array.clone(this.getChildren());

for(var i=0;i<bh.length;i++){be.add(bh[i]);
}this.removeListener(j,this._onResize,this);
be.getChildrenContainer().addListener(j,this._onResize,this);
this._add(be);
break;
}return be||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,bc);
},_getMenuLayout:function(){if(this.hasChildControl(l)){return this.getChildControl(l).getChildrenContainer().getLayout();
}else{return this._getLayout();
}},_getMenuBounds:function(){if(this.hasChildControl(l)){return this.getChildControl(l).getChildrenContainer().getBounds();
}else{return this.getBounds();
}},_computePlacementSize:function(){return this._getMenuBounds();
},__pd:function(){var bj=this._getMenuBounds();

if(!bj){this.addListenerOnce(j,this.__pd,this);
return;
}var bi=this.getLayoutParent().getBounds().height;
var top=this.getLayoutProperties().top;
var bk=this.getLayoutProperties().left;
if(top<0){this._assertSlideBar(function(){this.setHeight(bj.height+top);
this.moveTo(bk,0);
});
}else if(top+bj.height>bi){this._assertSlideBar(function(){this.setHeight(bi-top);
});
}else{this.setHeight(null);
}},_assertSlideBar:function(bl){if(this.hasChildControl(l)){return bl.call(this);
}this.__pb=bl;
qx.ui.core.queue.Widget.add(this);
},syncWidget:function(){this.getChildControl(l);

if(this.__pb){this.__pb.call(this);
delete this.__pb;
}},_onResize:function(){if(this.isVisible()){var bm=this._placementTarget;

if(!bm){return;
}else if(bm instanceof qx.ui.core.Widget){this.placeToWidget(bm);
}else if(bm.top!==undefined){this.placeToPoint(bm);
}else{throw new Error("Unknown target: "+bm);
}this.__pd();
}},_onMouseOver:function(e){var bo=qx.ui.menu.Manager.getInstance();
bo.cancelClose(this);
var bp=e.getTarget();

if(bp.isEnabled()&&bp instanceof qx.ui.menu.AbstractButton){this.setSelectedButton(bp);
var bn=bp.getMenu&&bp.getMenu();

if(bn){bn.setOpener(bp);
bo.scheduleOpen(bn);
this.__pa=bn;
}else{var bq=this.getOpenedButton();

if(bq){bo.scheduleClose(bq.getMenu());
}
if(this.__pa){bo.cancelOpen(this.__pa);
this.__pa=null;
}}}else if(!this.getOpenedButton()){this.resetSelectedButton();
}},_onMouseOut:function(e){var br=qx.ui.menu.Manager.getInstance();
if(!qx.ui.core.Widget.contains(this,e.getRelatedTarget())){var bs=this.getOpenedButton();
bs?this.setSelectedButton(bs):this.resetSelectedButton();
if(bs){br.cancelClose(bs.getMenu());
}if(this.__pa){br.cancelOpen(this.__pa);
}}}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.ui.menu.Manager.getInstance().remove(this);
}this.getApplicationRoot().removeListener(j,this._onResize,this);
this._placementTarget=null;
this._disposeObjects(y);
}});
})();
(function(){var i="Integer",h="hovered",g="hover-button",f="interval",d="mouseover",c="mouseout",b="__iY",a="qx.ui.form.HoverButton";
qx.Class.define(a,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],construct:function(j,k){qx.ui.basic.Atom.call(this,j,k);
this.addListener(d,this._onMouseOver,this);
this.addListener(c,this._onMouseOut,this);
this.__iY=new qx.event.AcceleratingTimer();
this.__iY.addListener(f,this._onInterval,this);
},properties:{appearance:{refine:true,init:g},interval:{check:i,init:80},firstInterval:{check:i,init:200},minTimer:{check:i,init:20},timerDecrease:{check:i,init:2}},members:{__iY:null,_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.__iY.set({interval:this.getInterval(),firstInterval:this.getFirstInterval(),minimum:this.getMinTimer(),decrease:this.getTimerDecrease()}).start();
this.addState(h);
},_onMouseOut:function(e){this.__iY.stop();
this.removeState(h);

if(!this.isEnabled()||e.getTarget()!==this){return;
}},_onInterval:function(){if(this.isEnabled()){this.execute();
}else{this.__iY.stop();
}}},destruct:function(){this._disposeObjects(b);
}});
})();
(function(){var b="menu-separator",a="qx.ui.menu.Separator";
qx.Class.define(a,{extend:qx.ui.core.Widget,properties:{appearance:{refine:true,init:b},anonymous:{refine:true,init:true}}});
})();
(function(){var c="middle",b="qx.ui.menu.ButtonLayout",a="left";
qx.Class.define(b,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(d,e){var q=this._getLayoutChildren();
var p;
var g;
var h=[];

for(var i=0,l=q.length;i<l;i++){p=q[i];
g=p.getLayoutProperties().column;
h[g]=p;
}var o=this.__pf(q[0]);
var r=o.getColumnSizes();
var k=o.getSpacingX();
var j=qx.lang.Array.sum(r)+k*(r.length-1);

if(j<d){r[1]+=d-j;
}var s=0,top=0;
var m=qx.ui.layout.Util;

for(var i=0,l=r.length;i<l;i++){p=h[i];

if(p){var f=p.getSizeHint();
var top=m.computeVerticalAlignOffset(p.getAlignY()||c,f.height,e,0,0);
var n=m.computeHorizontalAlignOffset(p.getAlignX()||a,f.width,r[i],p.getMarginLeft(),p.getMarginRight());
p.renderLayout(s+n,top,f.width,f.height);
}s+=r[i]+k;
}},__pf:function(t){while(!(t instanceof qx.ui.menu.Menu)){t=t.getLayoutParent();
}return t;
},_computeSizeHint:function(){var w=this._getLayoutChildren();
var v=0;
var x=0;

for(var i=0,l=w.length;i<l;i++){var u=w[i].getSizeHint();
x+=u.width;
v=Math.max(v,u.height);
}return {width:x,height:v};
}}});
})();
(function(){var f="execute",e="button-backward",d="vertical",c="button-forward",b="menu-slidebar",a="qx.ui.menu.MenuSlideBar";
qx.Class.define(a,{extend:qx.ui.container.SlideBar,construct:function(){qx.ui.container.SlideBar.call(this,d);
},properties:{appearance:{refine:true,init:b}},members:{_createChildControlImpl:function(g,h){var i;

switch(g){case c:i=new qx.ui.form.HoverButton();
i.addListener(f,this._onExecuteForward,this);
this._addAt(i,2);
break;
case e:i=new qx.ui.form.HoverButton();
i.addListener(f,this._onExecuteBackward,this);
this._addAt(i,0);
break;
}return i||qx.ui.container.SlideBar.prototype._createChildControlImpl.call(this,g);
}}});
})();

});