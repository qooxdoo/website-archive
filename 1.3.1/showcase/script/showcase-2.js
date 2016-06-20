qx.$$packageData['a81e96acba30']={"locales":{},"resources":{},"translations":{}};

qx.Part.$$notifyLoad("a81e96acba30", function() {
(function(){var m="container",k="handle",j="both",h="Integer",g="middle",f="qx.ui.toolbar.Part",e="icon",d="label",c="changeShow",b="_applySpacing",a="toolbar/part";
qx.Class.define(f,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling],construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.HBox);
this._createChildControl(k);
},properties:{appearance:{refine:true,init:a},show:{init:j,check:[j,d,e],inheritable:true,event:c},spacing:{nullable:true,check:h,themeable:true,apply:b}},members:{_createChildControlImpl:function(n,o){var p;

switch(n){case k:p=new qx.ui.basic.Image();
p.setAlignY(g);
this._add(p);
break;
case m:p=new qx.ui.toolbar.PartContainer;
this._add(p);
break;
}return p||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,n);
},getChildrenContainer:function(){return this.getChildControl(m);
},_applySpacing:function(q,r){var s=this.getChildControl(m).getLayout();
q==null?s.resetSpacing():s.setSpacing(q);
},addSeparator:function(){this.add(new qx.ui.toolbar.Separator);
},getMenuButtons:function(){var u=this.getChildren();
var t=[];
var v;

for(var i=0,l=u.length;i<l;i++){v=u[i];

if(v instanceof qx.ui.menubar.Button){t.push(v);
}}return t;
}}});
})();
(function(){var t="icon",s="label",r="arrow",q="shortcut",p="changeLocale",o="qx.dynlocale",n="submenu",m="on",l="String",k="qx.ui.menu.Menu",d="qx.ui.menu.AbstractButton",j="keypress",h="",c="_applyIcon",b="mouseup",g="abstract",f="_applyLabel",i="_applyMenu",a="changeCommand";
qx.Class.define(d,{extend:qx.ui.core.Widget,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],type:g,construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.menu.ButtonLayout);
this.addListener(b,this._onMouseUp);
this.addListener(j,this._onKeyPress);
this.addListener(a,this._onChangeCommand,this);
},properties:{blockToolTip:{refine:true,init:true},label:{check:l,apply:f,nullable:true},menu:{check:k,apply:i,nullable:true,dereference:true},icon:{check:l,apply:c,themeable:true,nullable:true}},members:{_createChildControlImpl:function(u,v){var w;

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
},_onMouseUp:function(e){},_onKeyPress:function(e){},_onChangeCommand:function(e){var H=e.getData();
if(H==null){return;
}
if(qx.core.Variant.isSet(o,m)){var F=e.getOldData();

if(!F){qx.locale.Manager.getInstance().addListener(p,this._onChangeLocale,this);
}
if(!H){qx.locale.Manager.getInstance().removeListener(p,this._onChangeLocale,this);
}}var G=H!=null?H.toString():h;
this.getChildControl(q).setValue(G);
},_onChangeLocale:qx.core.Variant.select(o,{"on":function(e){var I=this.getCommand();

if(I!=null){this.getChildControl(q).setValue(I.toString());
}},"off":null}),_applyIcon:function(J,K){if(J){this._showChildControl(t).setSource(J);
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
}}},destruct:function(){if(this.getMenu()){if(!qx.core.ObjectRegistry.inShutDown){this.getMenu().destroy();
}}
if(qx.core.Variant.isSet(o,m)){qx.locale.Manager.getInstance().removeListener(p,this._onChangeLocale,this);
}}});
})();
(function(){var b="menu-separator",a="qx.ui.menu.Separator";
qx.Class.define(a,{extend:qx.ui.core.Widget,properties:{appearance:{refine:true,init:b},anonymous:{refine:true,init:true}}});
})();
(function(){var g=";",f="&",e='X',d="",c='#',b="&#",a="qx.util.StringEscape";
qx.Class.define(a,{statics:{escape:function(h,j){var m,o=d;

for(var i=0,l=h.length;i<l;i++){var n=h.charAt(i);
var k=n.charCodeAt(0);

if(j[k]){m=f+j[k]+g;
}else{if(k>0x7F){m=b+k+g;
}else{m=n;
}}o+=m;
}return o;
},unescape:function(p,q){return p.replace(/&[#\w]+;/gi,function(r){var s=r;
var r=r.substring(1,r.length-1);
var t=q[r];

if(t){s=String.fromCharCode(t);
}else{if(r.charAt(0)==c){if(r.charAt(1).toUpperCase()==e){t=r.substring(2);
if(t.match(/^[0-9A-Fa-f]+$/gi)){s=String.fromCharCode(parseInt(t,16));
}}else{t=r.substring(1);
if(t.match(/^\d+$/gi)){s=String.fromCharCode(parseInt(t,10));
}}}}return s;
});
}}});
})();
(function(){var l="pressed",k="hovered",j="changeVisibility",i="qx.ui.menu.Menu",h="submenu",g="Enter",f="contextmenu",d="changeMenu",c="qx.ui.form.MenuButton",b="abandoned",a="_applyMenu";
qx.Class.define(c,{extend:qx.ui.form.Button,construct:function(m,n,o){qx.ui.form.Button.call(this,m,n);
if(o!=null){this.setMenu(o);
}},properties:{menu:{check:i,nullable:true,apply:a,event:d}},members:{_applyMenu:function(p,q){if(q){q.removeListener(j,this._onMenuChange,this);
q.resetOpener();
}
if(p){p.addListener(j,this._onMenuChange,this);
p.setOpener(this);
p.removeState(h);
p.removeState(f);
}},open:function(r){var s=this.getMenu();

if(s){qx.ui.menu.Manager.getInstance().hideAll();
s.setOpener(this);
s.open();
if(r){var t=s.getSelectables()[0];

if(t){s.setSelectedButton(t);
}}}},_onMenuChange:function(e){var u=this.getMenu();

if(u.isVisible()){this.addState(l);
}else{this.removeState(l);
}},_onMouseDown:function(e){qx.ui.form.Button.prototype._onMouseDown.call(this,e);
var v=this.getMenu();

if(v){if(!v.isVisible()){this.open();
}else{v.exclude();
}e.stopPropagation();
}},_onMouseUp:function(e){qx.ui.form.Button.prototype._onMouseUp.call(this,e);
e.stopPropagation();
},_onMouseOver:function(e){this.addState(k);
},_onMouseOut:function(e){this.removeState(k);
},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case g:this.removeState(b);
this.addState(l);
var w=this.getMenu();

if(w){if(!w.isVisible()){this.open();
}else{w.exclude();
}}e.stopPropagation();
}},_onKeyUp:function(e){}},destruct:function(){if(this.getMenu()){if(!qx.core.ObjectRegistry.inShutDown){this.getMenu().destroy();
}}}});
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
(function(){var t="keypress",s="interval",r="keydown",q="mousedown",p="keyup",o="__oG",n="blur",m="Enter",l="__oF",k="Up",c="Escape",j="__oH",g="qx.ui.menu.Manager",b="Left",a="Down",f="Right",d="singleton",h="Space";
qx.Class.define(g,{type:d,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__oF=[];
var u=document.body;
var v=qx.event.Registration;
v.addListener(window.document.documentElement,q,this._onMouseDown,this,true);
v.addListener(u,r,this._onKeyUpDown,this,true);
v.addListener(u,p,this._onKeyUpDown,this,true);
v.addListener(u,t,this._onKeyPress,this,true);
if(!qx.bom.client.Feature.TOUCH){qx.bom.Element.addListener(window,n,this.hideAll,this);
}this.__oG=new qx.event.Timer;
this.__oG.addListener(s,this._onOpenInterval,this);
this.__oH=new qx.event.Timer;
this.__oH.addListener(s,this._onCloseInterval,this);
},members:{__oI:null,__oJ:null,__oG:null,__oH:null,__oF:null,_getChild:function(w,x,y,z){var A=w.getChildren();
var length=A.length;
var B;

for(var i=x;i<length&&i>=0;i+=y){B=A[i];

if(B.isEnabled()&&!B.isAnonymous()){return B;
}}
if(z){i=i==length?0:length-1;

for(;i!=x;i+=y){B=A[i];

if(B.isEnabled()&&!B.isAnonymous()){return B;
}}}return null;
},_isInMenu:function(C){while(C){if(C instanceof qx.ui.menu.Menu){return true;
}C=C.getLayoutParent();
}return false;
},_getMenuButton:function(D){while(D){if(D instanceof qx.ui.menu.AbstractButton){return D;
}D=D.getLayoutParent();
}return null;
},add:function(E){{};
var F=this.__oF;
F.push(E);
E.setZIndex(1e6+F.length);
},remove:function(G){{};
var H=this.__oF;

if(H){qx.lang.Array.remove(H,G);
}},hideAll:function(){var I=this.__oF;

if(I){for(var i=I.length-1;i>=0;i--){I[i].exclude();
}}},getActiveMenu:function(){var J=this.__oF;
return J.length>0?J[J.length-1]:null;
},scheduleOpen:function(K){this.cancelClose(K);
if(K.isVisible()){if(this.__oI){this.cancelOpen(this.__oI);
}}else if(this.__oI!=K){this.__oI=K;
this.__oG.restartWith(K.getOpenInterval());
}},scheduleClose:function(L){this.cancelOpen(L);
if(!L.isVisible()){if(this.__oJ){this.cancelClose(this.__oJ);
}}else if(this.__oJ!=L){this.__oJ=L;
this.__oH.restartWith(L.getCloseInterval());
}},cancelOpen:function(M){if(this.__oI==M){this.__oG.stop();
this.__oI=null;
}},cancelClose:function(N){if(this.__oJ==N){this.__oH.stop();
this.__oJ=null;
}},_onOpenInterval:function(e){this.__oG.stop();
this.__oI.open();
this.__oI=null;
},_onCloseInterval:function(e){this.__oH.stop();
this.__oJ.exclude();
this.__oJ=null;
},_onMouseDown:function(e){var O=e.getTarget();
O=qx.ui.core.Widget.getWidgetByElement(O,true);
if(O==null){this.hideAll();
return;
}if(O.getMenu&&O.getMenu()&&O.getMenu().isVisible()){return;
}if(this.__oF.length>0&&!this._isInMenu(O)){this.hideAll();
}},__oK:{"Enter":1,"Space":1},__oL:{"Escape":1,"Up":1,"Down":1,"Left":1,"Right":1},_onKeyUpDown:function(e){var P=this.getActiveMenu();

if(!P){return;
}var Q=e.getKeyIdentifier();

if(this.__oL[Q]||(this.__oK[Q]&&P.getSelectedButton())){e.stopPropagation();
}},_onKeyPress:function(e){var R=this.getActiveMenu();

if(!R){return;
}var S=e.getKeyIdentifier();
var U=this.__oL[S];
var T=this.__oK[S];

if(U){switch(S){case k:this._onKeyPressUp(R);
break;
case a:this._onKeyPressDown(R);
break;
case b:this._onKeyPressLeft(R);
break;
case f:this._onKeyPressRight(R);
break;
case c:this.hideAll();
break;
}e.stopPropagation();
e.preventDefault();
}else if(T){var V=R.getSelectedButton();

if(V){switch(S){case m:this._onKeyPressEnter(R,V,e);
break;
case h:this._onKeyPressSpace(R,V,e);
break;
}e.stopPropagation();
e.preventDefault();
}}},_onKeyPressUp:function(W){var X=W.getSelectedButton();
var Y=W.getChildren();
var bb=X?W.indexOf(X)-1:Y.length-1;
var ba=this._getChild(W,bb,-1,true);
if(ba){W.setSelectedButton(ba);
}else{W.resetSelectedButton();
}},_onKeyPressDown:function(bc){var bd=bc.getSelectedButton();
var bf=bd?bc.indexOf(bd)+1:0;
var be=this._getChild(bc,bf,1,true);
if(be){bc.setSelectedButton(be);
}else{bc.resetSelectedButton();
}},_onKeyPressLeft:function(bg){var bl=bg.getOpener();

if(!bl){return;
}if(bl instanceof qx.ui.menu.AbstractButton){var bi=bl.getLayoutParent();
bi.resetOpenedButton();
bi.setSelectedButton(bl);
}else if(bl instanceof qx.ui.menubar.Button){var bk=bl.getMenuBar().getMenuButtons();
var bh=bk.indexOf(bl);
if(bh===-1){return;
}var bm=null;
var length=bk.length;

for(var i=1;i<=length;i++){var bj=bk[(bh-i+length)%length];

if(bj.isEnabled()){bm=bj;
break;
}}
if(bm&&bm!=bl){bm.open(true);
}}},_onKeyPressRight:function(bn){var bp=bn.getSelectedButton();
if(bp){var bo=bp.getMenu();

if(bo){bn.setOpenedButton(bp);
var bv=this._getChild(bo,0,1);

if(bv){bo.setSelectedButton(bv);
}return;
}}else if(!bn.getOpenedButton()){var bv=this._getChild(bn,0,1);

if(bv){bn.setSelectedButton(bv);

if(bv.getMenu()){bn.setOpenedButton(bv);
}return;
}}var bt=bn.getOpener();
if(bt instanceof qx.ui.menu.Button&&bp){while(bt){bt=bt.getLayoutParent();

if(bt instanceof qx.ui.menu.Menu){bt=bt.getOpener();

if(bt instanceof qx.ui.menubar.Button){break;
}}else{break;
}}
if(!bt){return;
}}if(bt instanceof qx.ui.menubar.Button){var bs=bt.getMenuBar().getMenuButtons();
var bq=bs.indexOf(bt);
if(bq===-1){return;
}var bu=null;
var length=bs.length;

for(var i=1;i<=length;i++){var br=bs[(bq+i)%length];

if(br.isEnabled()){bu=br;
break;
}}
if(bu&&bu!=bt){bu.open(true);
}}},_onKeyPressEnter:function(bw,bx,e){if(bx.hasListener(t)){var by=e.clone();
by.setBubbles(false);
by.setTarget(bx);
bx.dispatchEvent(by);
}this.hideAll();
},_onKeyPressSpace:function(bz,bA,e){if(bA.hasListener(t)){var bB=e.clone();
bB.setBubbles(false);
bB.setTarget(bA);
bA.dispatchEvent(bB);
}}},destruct:function(){var bD=qx.event.Registration;
var bC=document.body;
bD.removeListener(window.document.documentElement,q,this._onMouseDown,this,true);
bD.removeListener(bC,r,this._onKeyUpDown,this,true);
bD.removeListener(bC,p,this._onKeyUpDown,this,true);
bD.removeListener(bC,t,this._onKeyPress,this,true);
this._disposeObjects(o,j);
this._disposeArray(l);
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
}},properties:{appearance:{refine:true,init:a}},members:{_onMouseUp:function(e){if(e.isLeftPressed()){this.execute();
if(this.getMenu()){return;
}}else{if(this.getContextMenu()){return;
}}qx.ui.menu.Manager.getInstance().hideAll();
},_onKeyPress:function(e){this.execute();
}}});
})();
(function(){var w="visible",v="excluded",u="resize",t="qx.event.type.Data",s="both",r="qx.ui.menu.Menu",q="_applySpacing",p="showItem",o="Boolean",n="icon",d="label",m="qx.ui.core.Widget",h="_applyOverflowIndicator",c="_applyOverflowHandling",b="changeShow",g="Integer",f="qx.ui.toolbar.ToolBar",j="hideItem",a="toolbar",k="changeOpenMenu";
qx.Class.define(f,{extend:qx.ui.core.Widget,include:qx.ui.core.MChildrenHandling,construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.HBox());
this.__pI=[];
this.__pJ=[];
},properties:{appearance:{refine:true,init:a},openMenu:{check:r,event:k,nullable:true},show:{init:s,check:[s,d,n],inheritable:true,event:b},spacing:{nullable:true,check:g,themeable:true,apply:q},overflowIndicator:{check:m,nullable:true,apply:h},overflowHandling:{init:false,check:o,apply:c}},events:{"hideItem":t,"showItem":t},members:{__pI:null,__pJ:null,_computeSizeHint:function(){var z=qx.ui.core.Widget.prototype._computeSizeHint.call(this);

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
this.__pL(J);
B-=G;
if(C&&C.getVisibility()!=w){C.setVisibility(w);
B+=I;
var E=C.getMarginLeft()+C.getMarginRight();
B+=Math.max(E,this.getSpacing());
}}while(B>A);
}else if(this.__pI.length>0){do{var M=this.__pI[0];
if(M){var L=M.getMarginLeft()+M.getMarginRight();
L=Math.max(L,this.getSpacing());
if(M.getDecoratorElement()==null){M.syncAppearance();
M.invalidateLayoutCache();
}var F=M.getSizeHint().width;
var K=false;
if(this.__pI.length==1&&I>0){var D=L-this.getSpacing();
var H=B-I+F+D;
K=A>H;
}if(A>B+F+L||K){this.__pK(M);
B+=F;
if(C&&this.__pI.length==0){C.setVisibility(v);
}}else{return;
}}}while(A>=B&&this.__pI.length>0);
}},__pK:function(N){N.setVisibility(w);
this.__pI.shift();
this.fireDataEvent(p,N);
},__pL:function(O){if(!O){return;
}this.__pI.unshift(O);
O.setVisibility(v);
this.fireDataEvent(j,O);
},_getNextToHide:function(){for(var i=this.__pJ.length-1;i>=0;i--){var P=this.__pJ[i];
if(P&&P.getVisibility&&P.getVisibility()==w){return P;
}}var Q=this._getChildren();

for(var i=Q.length-1;i>=0;i--){var R=Q[i];
if(R==this.getOverflowIndicator()){continue;
}if(R.getVisibility&&R.getVisibility()==w){return R;
}}},setRemovePriority:function(S,T,U){if(!U&&this.__pJ[T]!=undefined){throw new Error("Priority already in use!");
}this.__pJ[T]=S;
},_applyOverflowHandling:function(V,W){this.invalidateLayoutCache();
var parent=this.getLayoutParent();

if(parent){parent.invalidateLayoutCache();
}var Y=this.getBounds();

if(Y&&Y.width){this._recalculateOverflow(Y.width);
}if(V){this.addListener(u,this._onResize,this);
}else{this.removeListener(u,this._onResize,this);
var X=this.getOverflowIndicator();

if(X){X.setVisibility(v);
}for(var i=0;i<this.__pI.length;i++){this.__pI[i].setVisibility(w);
}this.__pI=[];
}},_applyOverflowIndicator:function(ba,bb){if(bb){this._remove(bb);
}
if(ba){if(this._indexOf(ba)==-1){throw new Error("Widget must be child of the toolbar.");
}ba.setVisibility(v);
}},__pM:false,_setAllowMenuOpenHover:function(bc){this.__pM=bc;
},_isAllowMenuOpenHover:function(){return this.__pM;
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
qx.Class.define(a,{extend:qx.ui.layout.VBox,properties:{columnSpacing:{check:c,init:0,apply:b},spanColumn:{check:c,init:1,nullable:true,apply:b},iconColumnWidth:{check:c,init:0,themeable:true,apply:b},arrowColumnWidth:{check:c,init:0,themeable:true,apply:b}},members:{__oR:null,_computeSizeHint:function(){var q=this._getLayoutChildren();
var o,g,j;
var e=this.getSpanColumn();
var h=this.__oR=[0,0,0,0];
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
},getColumnSizes:function(){return this.__oR||null;
}},destruct:function(){this.__oR=null;
}});
})();
(function(){var f="both",e="toolbar/part/container",d="icon",c="changeShow",b="qx.ui.toolbar.PartContainer",a="label";
qx.Class.define(b,{extend:qx.ui.container.Composite,construct:function(){qx.ui.container.Composite.call(this);
this._setLayout(new qx.ui.layout.HBox);
},properties:{appearance:{refine:true,init:e},show:{init:f,check:[f,a,d],inheritable:true,event:c}}});
})();
(function(){var q="horizontal",p="scrollpane",o="vertical",n="button-backward",m="button-forward",l="content",k="execute",j="qx.ui.container.SlideBar",i="scrollY",h="removeChildWidget",c="scrollX",g="_applyOrientation",f="mousewheel",b="Integer",a="slidebar",d="update";
qx.Class.define(j,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MRemoteLayoutHandling],construct:function(r){qx.ui.core.Widget.call(this);
var s=this.getChildControl(p);
this._add(s,{flex:1});

if(r!=null){this.setOrientation(r);
}else{this.initOrientation();
}this.addListener(f,this._onMouseWheel,this);
},properties:{appearance:{refine:true,init:a},orientation:{check:[q,o],init:q,apply:g},scrollStep:{check:b,init:15,themeable:true}},members:{getChildrenContainer:function(){return this.getChildControl(l);
},_createChildControlImpl:function(t,u){var v;

switch(t){case m:v=new qx.ui.form.RepeatButton;
v.addListener(k,this._onExecuteForward,this);
v.setFocusable(false);
this._addAt(v,2);
break;
case n:v=new qx.ui.form.RepeatButton;
v.addListener(k,this._onExecuteBackward,this);
v.setFocusable(false);
this._addAt(v,0);
break;
case l:v=new qx.ui.container.Composite();
if(qx.bom.client.Engine.GECKO){v.addListener(h,this._onRemoveChild,this);
}this.getChildControl(p).add(v);
break;
case p:v=new qx.ui.core.scroll.ScrollPane();
v.addListener(d,this._onResize,this);
v.addListener(c,this._onScroll,this);
v.addListener(i,this._onScroll,this);
break;
}return v||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,t);
},_forwardStates:{barLeft:true,barTop:true,barRight:true,barBottom:true},scrollBy:function(w){var x=this.getChildControl(p);

if(this.getOrientation()===q){x.scrollByX(w);
}else{x.scrollByY(w);
}},scrollTo:function(y){var z=this.getChildControl(p);

if(this.getOrientation()===q){z.scrollToX(y);
}else{z.scrollToY(y);
}},_applyOrientation:function(A,B){var E=[this.getLayout(),this._getLayout()];
var D=this.getChildControl(m);
var C=this.getChildControl(n);
if(B==o){D.removeState(o);
C.removeState(o);
D.addState(q);
C.addState(q);
}else if(B==q){D.removeState(q);
C.removeState(q);
D.addState(o);
C.addState(o);
}
if(A==q){this._setLayout(new qx.ui.layout.HBox());
this.setLayout(new qx.ui.layout.HBox());
}else{this._setLayout(new qx.ui.layout.VBox());
this.setLayout(new qx.ui.layout.VBox());
}
if(E[0]){E[0].dispose();
}
if(E[1]){E[1].dispose();
}},_onMouseWheel:function(e){this.scrollBy(e.getWheelDelta()*this.getScrollStep());
e.stop();
},_onScroll:function(){this._updateArrowsEnabled();
},_onResize:function(e){var content=this.getChildControl(p).getChildren()[0];

if(!content){return;
}var F=this.getInnerSize();
var H=content.getBounds();
var G=(this.getOrientation()===q)?H.width>F.width:H.height>F.height;

if(G){this._showArrows();
this._updateArrowsEnabled();
}else{this._hideArrows();
}},_onExecuteBackward:function(){this.scrollBy(-this.getScrollStep());
},_onExecuteForward:function(){this.scrollBy(this.getScrollStep());
},_onRemoveChild:function(){qx.event.Timer.once(function(){this.scrollBy(this.getChildControl(p).getScrollX());
},this,50);
},_updateArrowsEnabled:function(){var J=this.getChildControl(p);

if(this.getOrientation()===q){var I=J.getScrollX();
var K=J.getScrollMaxX();
}else{var I=J.getScrollY();
var K=J.getScrollMaxY();
}this.getChildControl(n).setEnabled(I>0);
this.getChildControl(m).setEnabled(I<K);
},_showArrows:function(){this._showChildControl(m);
this._showChildControl(n);
},_hideArrows:function(){this._excludeChildControl(m);
this._excludeChildControl(n);
this.scrollTo(0);
}}});
})();
(function(){var l="slidebar",k="Integer",j="resize",h="qx.ui.core.Widget",g="selected",f="visible",d="Boolean",c="mouseout",b="excluded",a="menu",A="_applySelectedButton",z="_applyOpenInterval",y="_applySpacingY",x="_blocker",w="_applyCloseInterval",v="_applyBlockerColor",u="_applyIconColumnWidth",t="mouseover",s="qx.ui.menu.Menu",r="Color",p="Number",q="_applyOpenedButton",n="_applySpacingX",o="_applyBlockerOpacity",m="_applyArrowColumnWidth";
qx.Class.define(s,{extend:qx.ui.core.Widget,include:[qx.ui.core.MPlacement,qx.ui.core.MRemoteChildrenHandling],construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.menu.Layout);
var B=this.getApplicationRoot();
B.add(this);
this.addListener(t,this._onMouseOver);
this.addListener(c,this._onMouseOut);
this.addListener(j,this._onResize,this);
B.addListener(j,this._onResize,this);
this._blocker=new qx.ui.core.Blocker(B);
this.initVisibility();
this.initKeepFocus();
this.initKeepActive();
},properties:{appearance:{refine:true,init:a},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},visibility:{refine:true,init:b},keepFocus:{refine:true,init:true},keepActive:{refine:true,init:true},spacingX:{check:k,apply:n,init:0,themeable:true},spacingY:{check:k,apply:y,init:0,themeable:true},iconColumnWidth:{check:k,init:0,themeable:true,apply:u},arrowColumnWidth:{check:k,init:0,themeable:true,apply:m},blockerColor:{check:r,init:null,nullable:true,apply:v,themeable:true},blockerOpacity:{check:p,init:1,apply:o,themeable:true},selectedButton:{check:h,nullable:true,apply:A},openedButton:{check:h,nullable:true,apply:q},opener:{check:h,nullable:true},openInterval:{check:k,themeable:true,init:250,apply:z},closeInterval:{check:k,themeable:true,init:250,apply:w},blockBackground:{check:d,themeable:true,init:false}},members:{__oN:null,__oO:null,_blocker:null,open:function(){if(this.getOpener()!=null){this.placeToWidget(this.getOpener());
this.__oQ();
this.show();
this._placementTarget=this.getOpener();
}else{this.warn("The menu instance needs a configured 'opener' widget!");
}},openAtMouse:function(e){this.placeToMouse(e);
this.__oQ();
this.show();
this._placementTarget={left:e.getDocumentLeft(),top:e.getDocumentTop()};
},openAtPoint:function(C){this.placeToPoint(C);
this.__oQ();
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
}this.__oP();
},__oP:function(){if(this.isVisible()){if(this.getBlockBackground()){var R=this.getZIndex();
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
}},_applyOpenedButton:function(V,W){if(W){W.getMenu().exclude();
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
},__oQ:function(){var bj=this._getMenuBounds();

if(!bj){this.addListenerOnce(j,this.__oQ,this);
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
}this.__oO=bl;
qx.ui.core.queue.Widget.add(this);
},syncWidget:function(){this.getChildControl(l);

if(this.__oO){this.__oO.call(this);
delete this.__oO;
}},_onResize:function(){if(this.isVisible()){var bm=this._placementTarget;

if(!bm){return;
}else if(bm instanceof qx.ui.core.Widget){this.placeToWidget(bm);
}else if(bm.top!==undefined){this.placeToPoint(bm);
}else{throw new Error("Unknown target: "+bm);
}this.__oQ();
}},_onMouseOver:function(e){var bo=qx.ui.menu.Manager.getInstance();
bo.cancelClose(this);
var bp=e.getTarget();

if(bp.isEnabled()&&bp instanceof qx.ui.menu.AbstractButton){this.setSelectedButton(bp);
var bn=bp.getMenu&&bp.getMenu();

if(bn){bn.setOpener(bp);
bo.scheduleOpen(bn);
this.__oN=bn;
}else{var bq=this.getOpenedButton();

if(bq){bo.scheduleClose(bq.getMenu());
}
if(this.__oN){bo.cancelOpen(this.__oN);
this.__oN=null;
}}}else if(!this.getOpenedButton()){this.resetSelectedButton();
}},_onMouseOut:function(e){var br=qx.ui.menu.Manager.getInstance();
if(!qx.ui.core.Widget.contains(this,e.getRelatedTarget())){var bs=this.getOpenedButton();
bs?this.setSelectedButton(bs):this.resetSelectedButton();
if(bs){br.cancelClose(bs.getMenu());
}if(this.__oN){br.cancelOpen(this.__oN);
}}}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.ui.menu.Manager.getInstance().remove(this);
}this.getApplicationRoot().removeListener(j,this._onResize,this);
this._placementTarget=null;
this._disposeObjects(x);
}});
})();
(function(){var i="Integer",h="hovered",g="__pH",f="hover-button",d="interval",c="mouseover",b="mouseout",a="qx.ui.form.HoverButton";
qx.Class.define(a,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],construct:function(j,k){qx.ui.basic.Atom.call(this,j,k);
this.addListener(c,this._onMouseOver,this);
this.addListener(b,this._onMouseOut,this);
this.__pH=new qx.event.AcceleratingTimer();
this.__pH.addListener(d,this._onInterval,this);
},properties:{appearance:{refine:true,init:f},interval:{check:i,init:80},firstInterval:{check:i,init:200},minTimer:{check:i,init:20},timerDecrease:{check:i,init:2}},members:{__pH:null,_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.__pH.set({interval:this.getInterval(),firstInterval:this.getFirstInterval(),minimum:this.getMinTimer(),decrease:this.getTimerDecrease()}).start();
this.addState(h);
},_onMouseOut:function(e){this.__pH.stop();
this.removeState(h);

if(!this.isEnabled()||e.getTarget()!==this){return;
}},_onInterval:function(){if(this.isEnabled()){this.execute();
}else{this.__pH.stop();
}}},destruct:function(){this._disposeObjects(g);
}});
})();
(function(){var b="qx.ui.form.IBooleanForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var c="middle",b="qx.ui.menu.ButtonLayout",a="left";
qx.Class.define(b,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(d,e){var q=this._getLayoutChildren();
var p;
var g;
var h=[];

for(var i=0,l=q.length;i<l;i++){p=q[i];
g=p.getLayoutProperties().column;
h[g]=p;
}var o=this.__pG(q[0]);
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
}},__pG:function(t){while(!(t instanceof qx.ui.menu.Menu)){t=t.getLayoutParent();
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
(function(){var g="",f="<br",e=" &nbsp;",d="<br>",c=" ",b="\n",a="qx.bom.String";
qx.Class.define(a,{statics:{TO_CHARCODE:{"quot":34,"amp":38,"lt":60,"gt":62,"nbsp":160,"iexcl":161,"cent":162,"pound":163,"curren":164,"yen":165,"brvbar":166,"sect":167,"uml":168,"copy":169,"ordf":170,"laquo":171,"not":172,"shy":173,"reg":174,"macr":175,"deg":176,"plusmn":177,"sup2":178,"sup3":179,"acute":180,"micro":181,"para":182,"middot":183,"cedil":184,"sup1":185,"ordm":186,"raquo":187,"frac14":188,"frac12":189,"frac34":190,"iquest":191,"Agrave":192,"Aacute":193,"Acirc":194,"Atilde":195,"Auml":196,"Aring":197,"AElig":198,"Ccedil":199,"Egrave":200,"Eacute":201,"Ecirc":202,"Euml":203,"Igrave":204,"Iacute":205,"Icirc":206,"Iuml":207,"ETH":208,"Ntilde":209,"Ograve":210,"Oacute":211,"Ocirc":212,"Otilde":213,"Ouml":214,"times":215,"Oslash":216,"Ugrave":217,"Uacute":218,"Ucirc":219,"Uuml":220,"Yacute":221,"THORN":222,"szlig":223,"agrave":224,"aacute":225,"acirc":226,"atilde":227,"auml":228,"aring":229,"aelig":230,"ccedil":231,"egrave":232,"eacute":233,"ecirc":234,"euml":235,"igrave":236,"iacute":237,"icirc":238,"iuml":239,"eth":240,"ntilde":241,"ograve":242,"oacute":243,"ocirc":244,"otilde":245,"ouml":246,"divide":247,"oslash":248,"ugrave":249,"uacute":250,"ucirc":251,"uuml":252,"yacute":253,"thorn":254,"yuml":255,"fnof":402,"Alpha":913,"Beta":914,"Gamma":915,"Delta":916,"Epsilon":917,"Zeta":918,"Eta":919,"Theta":920,"Iota":921,"Kappa":922,"Lambda":923,"Mu":924,"Nu":925,"Xi":926,"Omicron":927,"Pi":928,"Rho":929,"Sigma":931,"Tau":932,"Upsilon":933,"Phi":934,"Chi":935,"Psi":936,"Omega":937,"alpha":945,"beta":946,"gamma":947,"delta":948,"epsilon":949,"zeta":950,"eta":951,"theta":952,"iota":953,"kappa":954,"lambda":955,"mu":956,"nu":957,"xi":958,"omicron":959,"pi":960,"rho":961,"sigmaf":962,"sigma":963,"tau":964,"upsilon":965,"phi":966,"chi":967,"psi":968,"omega":969,"thetasym":977,"upsih":978,"piv":982,"bull":8226,"hellip":8230,"prime":8242,"Prime":8243,"oline":8254,"frasl":8260,"weierp":8472,"image":8465,"real":8476,"trade":8482,"alefsym":8501,"larr":8592,"uarr":8593,"rarr":8594,"darr":8595,"harr":8596,"crarr":8629,"lArr":8656,"uArr":8657,"rArr":8658,"dArr":8659,"hArr":8660,"forall":8704,"part":8706,"exist":8707,"empty":8709,"nabla":8711,"isin":8712,"notin":8713,"ni":8715,"prod":8719,"sum":8721,"minus":8722,"lowast":8727,"radic":8730,"prop":8733,"infin":8734,"ang":8736,"and":8743,"or":8744,"cap":8745,"cup":8746,"int":8747,"there4":8756,"sim":8764,"cong":8773,"asymp":8776,"ne":8800,"equiv":8801,"le":8804,"ge":8805,"sub":8834,"sup":8835,"sube":8838,"supe":8839,"oplus":8853,"otimes":8855,"perp":8869,"sdot":8901,"lceil":8968,"rceil":8969,"lfloor":8970,"rfloor":8971,"lang":9001,"rang":9002,"loz":9674,"spades":9824,"clubs":9827,"hearts":9829,"diams":9830,"OElig":338,"oelig":339,"Scaron":352,"scaron":353,"Yuml":376,"circ":710,"tilde":732,"ensp":8194,"emsp":8195,"thinsp":8201,"zwnj":8204,"zwj":8205,"lrm":8206,"rlm":8207,"ndash":8211,"mdash":8212,"lsquo":8216,"rsquo":8217,"sbquo":8218,"ldquo":8220,"rdquo":8221,"bdquo":8222,"dagger":8224,"Dagger":8225,"permil":8240,"lsaquo":8249,"rsaquo":8250,"euro":8364},escape:function(h){return qx.util.StringEscape.escape(h,qx.bom.String.FROM_CHARCODE);
},unescape:function(i){return qx.util.StringEscape.unescape(i,qx.bom.String.TO_CHARCODE);
},fromText:function(j){return qx.bom.String.escape(j).replace(/(  |\n)/g,function(k){var l={"  ":e,"\n":d};
return l[k]||k;
});
},toText:function(m){return qx.bom.String.unescape(m.replace(/\s+|<([^>])+>/gi,function(n){if(n.indexOf(f)===0){return b;
}else if(n.length>0&&n.replace(/^\s*/,g).replace(/\s*$/,g)==g){return c;
}else{return g;
}}));
}},defer:function(o){o.FROM_CHARCODE=qx.lang.Object.invert(o.TO_CHARCODE);
}});
})();

});