qx.$$packageData['6b4050da9ace']={"locales":{},"resources":{},"translations":{}};

qx.Part.$$notifyLoad("6b4050da9ace", function() {
(function(){var m="container",k="handle",j="both",h="Integer",g="middle",f="qx.ui.toolbar.Part",e="icon",d="label",c="changeShow",b="_applySpacing",a="toolbar/part";
qx.Class.define(f,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling],construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.HBox);
this._createChildControl(k);
},properties:{appearance:{refine:true,init:a},show:{init:j,check:[j,d,e],inheritable:true,event:c},spacing:{nullable:true,check:h,themeable:true,apply:b}},members:{_createChildControlImpl:function(n){var o;

switch(n){case k:o=new qx.ui.basic.Image();
o.setAlignY(g);
this._add(o);
break;
case m:o=new qx.ui.toolbar.PartContainer;
this._add(o);
break;
}return o||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,n);
},getChildrenContainer:function(){return this.getChildControl(m);
},_applySpacing:function(p,q){var r=this.getChildControl(m).getLayout();
p==null?r.resetSpacing():r.setSpacing(p);
},addSeparator:function(){this.add(new qx.ui.toolbar.Separator);
},getMenuButtons:function(){var t=this.getChildren();
var s=[];
var u;

for(var i=0,l=t.length;i<l;i++){u=t[i];

if(u instanceof qx.ui.menubar.Button){s.push(u);
}}return s;
}}});
})();
(function(){var t="icon",s="label",r="arrow",q="shortcut",p="changeLocale",o="qx.dynlocale",n="submenu",m="on",l="String",k="qx.ui.menu.Menu",d="qx.ui.menu.AbstractButton",j="keypress",h="",c="_applyIcon",b="mouseup",g="abstract",f="_applyLabel",i="_applyMenu",a="changeCommand";
qx.Class.define(d,{extend:qx.ui.core.Widget,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],type:g,construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.menu.ButtonLayout);
this.addListener(b,this._onMouseUp);
this.addListener(j,this._onKeyPress);
this.addListener(a,this._onChangeCommand,this);
},properties:{blockToolTip:{refine:true,init:true},label:{check:l,apply:f,nullable:true},menu:{check:k,apply:i,nullable:true},icon:{check:l,apply:c,themeable:true,nullable:true}},members:{_createChildControlImpl:function(M){var N;

switch(M){case t:N=new qx.ui.basic.Image;
N.setAnonymous(true);
this._add(N,{column:0});
break;
case s:N=new qx.ui.basic.Label;
N.setAnonymous(true);
this._add(N,{column:1});
break;
case q:N=new qx.ui.basic.Label;
N.setAnonymous(true);
this._add(N,{column:2});
break;
case r:N=new qx.ui.basic.Image;
N.setAnonymous(true);
this._add(N,{column:3});
break;
}return N||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,M);
},_forwardStates:{selected:1},getChildrenSizes:function(){var u=0,v=0,w=0,A=0;

if(this._isChildControlVisible(t)){var B=this.getChildControl(t);
u=B.getMarginLeft()+B.getSizeHint().width+B.getMarginRight();
}
if(this._isChildControlVisible(s)){var y=this.getChildControl(s);
v=y.getMarginLeft()+y.getSizeHint().width+y.getMarginRight();
}
if(this._isChildControlVisible(q)){var x=this.getChildControl(q);
w=x.getMarginLeft()+x.getSizeHint().width+x.getMarginRight();
}
if(this._isChildControlVisible(r)){var z=this.getChildControl(r);
A=z.getMarginLeft()+z.getSizeHint().width+z.getMarginRight();
}return [u,v,w,A];
},_onMouseUp:function(e){},_onKeyPress:function(e){},_onChangeCommand:function(e){var L=e.getData();

if(qx.core.Variant.isSet(o,m)){var J=e.getOldData();

if(!J){qx.locale.Manager.getInstance().addListener(p,this._onChangeLocale,this);
}
if(!L){qx.locale.Manager.getInstance().removeListener(p,this._onChangeLocale,this);
}}var K=L!=null?L.toString():h;
this.getChildControl(q).setValue(K);
},_onChangeLocale:qx.core.Variant.select(o,{"on":function(e){var I=this.getCommand();

if(I!=null){this.getChildControl(q).setValue(I.toString());
}},"off":null}),_applyIcon:function(E,F){if(E){this._showChildControl(t).setSource(E);
}else{this._excludeChildControl(t);
}},_applyLabel:function(C,D){if(C){this._showChildControl(s).setValue(C);
}else{this._excludeChildControl(s);
}},_applyMenu:function(G,H){if(H){H.resetOpener();
H.removeState(n);
}
if(G){this._showChildControl(r);
G.setOpener(this);
G.addState(n);
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
}},properties:{menu:{check:i,nullable:true,apply:a,event:d}},members:{_applyMenu:function(r,s){if(s){s.removeListener(j,this._onMenuChange,this);
s.resetOpener();
}
if(r){r.addListener(j,this._onMenuChange,this);
r.setOpener(this);
r.removeState(h);
r.removeState(f);
}},open:function(u){var v=this.getMenu();

if(v){qx.ui.menu.Manager.getInstance().hideAll();
v.setOpener(this);
v.open();
if(u){var w=v.getSelectables()[0];

if(w){v.setSelectedButton(w);
}}}},_onMenuChange:function(e){var q=this.getMenu();

if(q.isVisible()){this.addState(l);
}else{this.removeState(l);
}},_onMouseDown:function(e){var p=this.getMenu();

if(p){if(!p.isVisible()){this.open();
}else{p.exclude();
}e.stopPropagation();
}},_onMouseUp:function(e){qx.ui.form.Button.prototype._onMouseUp.call(this,e);
e.stopPropagation();
},_onMouseOver:function(e){this.addState(k);
},_onMouseOut:function(e){this.removeState(k);
},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case g:this.removeState(b);
this.addState(l);
var t=this.getMenu();

if(t){if(!t.isVisible()){this.open();
}else{t.exclude();
}}e.stopPropagation();
}},_onKeyUp:function(e){}},destruct:function(){if(this.getMenu()){if(!qx.core.ObjectRegistry.inShutDown){this.getMenu().destroy();
}}}});
})();
(function(){var i="pressed",h="hovered",g="inherit",f="qx.ui.menubar.Button",d="keydown",c="menubar-button",b="keyup";
qx.Class.define(f,{extend:qx.ui.form.MenuButton,construct:function(k,l,m){qx.ui.form.MenuButton.call(this,k,l,m);
this.removeListener(d,this._onKeyDown);
this.removeListener(b,this._onKeyUp);
},properties:{appearance:{refine:true,init:c},show:{refine:true,init:g},focusable:{refine:true,init:false}},members:{getMenuBar:function(){var parent=this;

while(parent){if(parent instanceof qx.ui.toolbar.ToolBar){return parent;
}parent=parent.getLayoutParent();
}return null;
},open:function(n){qx.ui.form.MenuButton.prototype.open.call(this,n);
var menubar=this.getMenuBar();
menubar._setAllowMenuOpenHover(true);
},_onMenuChange:function(e){var a=this.getMenu();
var menubar=this.getMenuBar();

if(a.isVisible()){this.addState(i);
if(menubar){menubar.setOpenMenu(a);
}}else{this.removeState(i);
if(menubar&&menubar.getOpenMenu()==a){menubar.resetOpenMenu();
menubar._setAllowMenuOpenHover(false);
}}},_onMouseUp:function(e){qx.ui.form.MenuButton.prototype._onMouseUp.call(this,e);
var j=this.getMenu();

if(j&&j.isVisible()&&!this.hasState(i)){this.addState(i);
}},_onMouseOver:function(e){this.addState(h);
if(this.getMenu()){var menubar=this.getMenuBar();

if(menubar._isAllowMenuOpenHover()){qx.ui.menu.Manager.getInstance().hideAll();
menubar._setAllowMenuOpenHover(true);
if(this.isEnabled()){this.open();
}}}}}});
})();
(function(){var bf="keypress",be="interval",bd="keydown",bc="mousedown",bb="keyup",ba="blur",Y="Enter",X="__no",W="__nn",V="__nm",P="Up",U="Escape",S="qx.ui.menu.Manager",O="Left",N="Down",R="Right",Q="singleton",T="Space";
qx.Class.define(S,{type:Q,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__nm=[];
var h=document.body;
var j=qx.event.Registration;
j.addListener(window.document.documentElement,bc,this._onMouseDown,this,true);
j.addListener(h,bd,this._onKeyUpDown,this,true);
j.addListener(h,bb,this._onKeyUpDown,this,true);
j.addListener(h,bf,this._onKeyPress,this,true);
qx.bom.Element.addListener(window,ba,this.hideAll,this);
this.__nn=new qx.event.Timer;
this.__nn.addListener(be,this._onOpenInterval,this);
this.__no=new qx.event.Timer;
this.__no.addListener(be,this._onCloseInterval,this);
},members:{__np:null,__nq:null,__nn:null,__no:null,__nm:null,_getChild:function(bh,bi,bj,bk){var bl=bh.getChildren();
var length=bl.length;
var bm;

for(var i=bi;i<length&&i>=0;i+=bj){bm=bl[i];

if(bm.isEnabled()&&!bm.isAnonymous()){return bm;
}}
if(bk){i=i==length?0:length-1;

for(;i!=bi;i+=bj){bm=bl[i];

if(bm.isEnabled()&&!bm.isAnonymous()){return bm;
}}}return null;
},_isInMenu:function(M){while(M){if(M instanceof qx.ui.menu.Menu){return true;
}M=M.getLayoutParent();
}return false;
},_getMenuButton:function(g){while(g){if(g instanceof qx.ui.menu.AbstractButton){return g;
}g=g.getLayoutParent();
}return null;
},add:function(bo){{};
var bp=this.__nm;
bp.push(bo);
bo.setZIndex(1e6+bp.length);
},remove:function(J){{};
var K=this.__nm;

if(K){qx.lang.Array.remove(K,J);
}},hideAll:function(){var bq=this.__nm;

if(bq){for(var i=bq.length-1;i>=0;i--){bq[i].exclude();
}}},getActiveMenu:function(){var p=this.__nm;
return p.length>0?p[p.length-1]:null;
},scheduleOpen:function(bn){this.cancelClose(bn);
if(bn.isVisible()){if(this.__np){this.cancelOpen(this.__np);
}}else if(this.__np!=bn){this.__np=bn;
this.__nn.restartWith(bn.getOpenInterval());
}},scheduleClose:function(L){this.cancelOpen(L);
if(!L.isVisible()){if(this.__nq){this.cancelClose(this.__nq);
}}else if(this.__nq!=L){this.__nq=L;
this.__no.restartWith(L.getCloseInterval());
}},cancelOpen:function(bg){if(this.__np==bg){this.__nn.stop();
this.__np=null;
}},cancelClose:function(x){if(this.__nq==x){this.__no.stop();
this.__nq=null;
}},_onOpenInterval:function(e){this.__nn.stop();
this.__np.open();
this.__np=null;
},_onCloseInterval:function(e){this.__no.stop();
this.__nq.exclude();
this.__nq=null;
},_onMouseDown:function(e){var y=e.getTarget();
y=qx.ui.core.Widget.getWidgetByElement(y);
if(y==null){this.hideAll();
return;
}if(y.getMenu&&y.getMenu()&&y.getMenu().isVisible()){return;
}if(this.__nm.length>0&&!this._isInMenu(y)){this.hideAll();
}},__nr:{"Enter":1,"Space":1},__ns:{"Escape":1,"Up":1,"Down":1,"Left":1,"Right":1},_onKeyUpDown:function(e){var C=this.getActiveMenu();

if(!C){return;
}var D=e.getKeyIdentifier();

if(this.__ns[D]||(this.__nr[D]&&C.getSelectedButton())){e.stopPropagation();
}},_onKeyPress:function(e){var a=this.getActiveMenu();

if(!a){return;
}var b=e.getKeyIdentifier();
var d=this.__ns[b];
var c=this.__nr[b];

if(d){switch(b){case P:this._onKeyPressUp(a);
break;
case N:this._onKeyPressDown(a);
break;
case O:this._onKeyPressLeft(a);
break;
case R:this._onKeyPressRight(a);
break;
case U:this.hideAll();
break;
}e.stopPropagation();
e.preventDefault();
}else if(c){var f=a.getSelectedButton();

if(f){switch(b){case Y:this._onKeyPressEnter(a,f,e);
break;
case T:this._onKeyPressSpace(a,f,e);
break;
}e.stopPropagation();
e.preventDefault();
}}},_onKeyPressUp:function(k){var l=k.getSelectedButton();
var m=k.getChildren();
var o=l?k.indexOf(l)-1:m.length-1;
var n=this._getChild(k,o,-1,true);
if(n){k.setSelectedButton(n);
}else{k.resetSelectedButton();
}},_onKeyPressDown:function(br){var bs=br.getSelectedButton();
var bu=bs?br.indexOf(bs)+1:0;
var bt=this._getChild(br,bu,1,true);
if(bt){br.setSelectedButton(bt);
}else{br.resetSelectedButton();
}},_onKeyPressLeft:function(q){var v=q.getOpener();

if(!v){return;
}if(v instanceof qx.ui.menu.Button){var s=v.getLayoutParent();
s.resetOpenedButton();
s.setSelectedButton(v);
}else if(v instanceof qx.ui.menubar.Button){var u=v.getMenuBar().getMenuButtons();
var r=u.indexOf(v);
if(r===-1){return;
}var w=null;
var length=u.length;

for(var i=1;i<=length;i++){var t=u[(r-i+length)%length];

if(t.isEnabled()){w=t;
break;
}}
if(w&&w!=v){w.open(true);
}}},_onKeyPressRight:function(bv){var bx=bv.getSelectedButton();
if(bx){var bw=bx.getMenu();

if(bw){bv.setOpenedButton(bx);
var bD=this._getChild(bw,0,1);

if(bD){bw.setSelectedButton(bD);
}return;
}}else if(!bv.getOpenedButton()){var bD=this._getChild(bv,0,1);

if(bD){bv.setSelectedButton(bD);

if(bD.getMenu()){bv.setOpenedButton(bD);
}return;
}}var bB=bv.getOpener();
if(bB instanceof qx.ui.menu.Button&&bx){while(bB){bB=bB.getLayoutParent();

if(bB instanceof qx.ui.menu.Menu){bB=bB.getOpener();

if(bB instanceof qx.ui.menubar.Button){break;
}}else{break;
}}
if(!bB){return;
}}if(bB instanceof qx.ui.menubar.Button){var bA=bB.getMenuBar().getMenuButtons();
var by=bA.indexOf(bB);
if(by===-1){return;
}var bC=null;
var length=bA.length;

for(var i=1;i<=length;i++){var bz=bA[(by+i)%length];

if(bz.isEnabled()){bC=bz;
break;
}}
if(bC&&bC!=bB){bC.open(true);
}}},_onKeyPressEnter:function(z,A,e){if(A.hasListener(bf)){var B=e.clone();
B.setBubbles(false);
B.setTarget(A);
A.dispatchEvent(B);
}this.hideAll();
},_onKeyPressSpace:function(G,H,e){if(H.hasListener(bf)){var I=e.clone();
I.setBubbles(false);
I.setTarget(H);
H.dispatchEvent(I);
}}},destruct:function(){var F=qx.event.Registration;
var E=document.body;
F.removeListener(window.document.documentElement,bc,this._onMouseDown,this,true);
F.removeListener(E,bd,this._onKeyUpDown,this,true);
F.removeListener(E,bb,this._onKeyUpDown,this,true);
F.removeListener(E,bf,this._onKeyPress,this,true);
this._disposeObjects(W,X);
this._disposeArray(V);
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
}}qx.ui.menu.Manager.getInstance().hideAll();
},_onKeyPress:function(e){this.execute();
}}});
})();
(function(){var k="both",j="qx.ui.menu.Menu",h="_applySpacing",g="icon",f="label",e="changeShow",d="Integer",c="qx.ui.toolbar.ToolBar",b="toolbar",a="changeOpenMenu";
qx.Class.define(c,{extend:qx.ui.core.Widget,include:qx.ui.core.MChildrenHandling,construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.HBox());
},properties:{appearance:{refine:true,init:b},openMenu:{check:j,event:a,nullable:true},show:{init:k,check:[k,f,g],inheritable:true,event:e},spacing:{nullable:true,check:d,themeable:true,apply:h}},members:{__qx:false,_setAllowMenuOpenHover:function(p){this.__qx=p;
},_isAllowMenuOpenHover:function(){return this.__qx;
},_applySpacing:function(r,s){var t=this._getLayout();
r==null?t.resetSpacing():t.setSpacing(r);
},addSpacer:function(){var q=new qx.ui.core.Spacer;
this._add(q,{flex:1});
return q;
},addSeparator:function(){this.add(new qx.ui.toolbar.Separator);
},getMenuButtons:function(){var n=this.getChildren();
var m=[];
var o;

for(var i=0,l=n.length;i<l;i++){o=n[i];

if(o instanceof qx.ui.menubar.Button){m.push(o);
}else if(o instanceof qx.ui.toolbar.Part){m.push.apply(m,o.getMenuButtons());
}}return m;
}}});
})();
(function(){var c="Integer",b="_applyLayoutChange",a="qx.ui.menu.Layout";
qx.Class.define(a,{extend:qx.ui.layout.VBox,properties:{columnSpacing:{check:c,init:0,apply:b},spanColumn:{check:c,init:1,nullable:true,apply:b},iconColumnWidth:{check:c,init:0,themeable:true,apply:b},arrowColumnWidth:{check:c,init:0,themeable:true,apply:b}},members:{__pV:null,_computeSizeHint:function(){var q=this._getLayoutChildren();
var o,g,j;
var e=this.getSpanColumn();
var h=this.__pV=[0,0,0,0];
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
},getColumnSizes:function(){return this.__pV||null;
}},destruct:function(){this.__pV=null;
}});
})();
(function(){var f="both",e="toolbar/part/container",d="icon",c="changeShow",b="qx.ui.toolbar.PartContainer",a="label";
qx.Class.define(b,{extend:qx.ui.container.Composite,construct:function(){qx.ui.container.Composite.call(this);
this._setLayout(new qx.ui.layout.HBox);
},properties:{appearance:{refine:true,init:e},show:{init:f,check:[f,a,d],inheritable:true,event:c}}});
})();
(function(){var q="horizontal",p="scrollpane",o="vertical",n="button-backward",m="button-forward",l="content",k="execute",j="qx.ui.container.SlideBar",i="scrollY",h="removeChildWidget",c="scrollX",g="_applyOrientation",f="mousewheel",b="Integer",a="slidebar",d="update";
qx.Class.define(j,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MRemoteLayoutHandling],construct:function(I){qx.ui.core.Widget.call(this);
var J=this.getChildControl(p);
this._add(J,{flex:1});

if(I!=null){this.setOrientation(I);
}else{this.initOrientation();
}this.addListener(f,this._onMouseWheel,this);
},properties:{appearance:{refine:true,init:a},orientation:{check:[q,o],init:q,apply:g},scrollStep:{check:b,init:15,themeable:true}},members:{getChildrenContainer:function(){return this.getChildControl(l);
},_createChildControlImpl:function(r){var s;

switch(r){case m:s=new qx.ui.form.RepeatButton;
s.addListener(k,this._onExecuteForward,this);
s.setFocusable(false);
this._addAt(s,2);
break;
case n:s=new qx.ui.form.RepeatButton;
s.addListener(k,this._onExecuteBackward,this);
s.setFocusable(false);
this._addAt(s,0);
break;
case l:s=new qx.ui.container.Composite();
if(qx.bom.client.Engine.GECKO){s.addListener(h,this._onRemoveChild,this);
}this.getChildControl(p).add(s);
break;
case p:s=new qx.ui.core.scroll.ScrollPane();
s.addListener(d,this._onResize,this);
s.addListener(c,this._onScroll,this);
s.addListener(i,this._onScroll,this);
break;
}return s||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,r);
},_forwardStates:{barLeft:true,barTop:true,barRight:true,barBottom:true},scrollBy:function(y){var z=this.getChildControl(p);

if(this.getOrientation()===q){z.scrollByX(y);
}else{z.scrollByY(y);
}},scrollTo:function(w){var x=this.getChildControl(p);

if(this.getOrientation()===q){x.scrollToX(w);
}else{x.scrollToY(w);
}},_applyOrientation:function(D,E){var H=[this.getLayout(),this._getLayout()];
var G=this.getChildControl(m);
var F=this.getChildControl(n);
if(E==o){G.removeState(o);
F.removeState(o);
G.addState(q);
F.addState(q);
}else if(E==q){G.removeState(q);
F.removeState(q);
G.addState(o);
F.addState(o);
}
if(D==q){this._setLayout(new qx.ui.layout.HBox());
this.setLayout(new qx.ui.layout.HBox());
}else{this._setLayout(new qx.ui.layout.VBox());
this.setLayout(new qx.ui.layout.VBox());
}
if(H[0]){H[0].dispose();
}
if(H[1]){H[1].dispose();
}},_onMouseWheel:function(e){this.scrollBy(e.getWheelDelta()*this.getScrollStep());
e.stop();
},_onScroll:function(){this._updateArrowsEnabled();
},_onResize:function(e){var content=this.getChildControl(p).getChildren()[0];

if(!content){return;
}var A=this.getInnerSize();
var C=content.getBounds();
var B=(this.getOrientation()===q)?C.width>A.width:C.height>A.height;

if(B){this._showArrows();
this._updateArrowsEnabled();
}else{this._hideArrows();
}},_onExecuteBackward:function(){this.scrollBy(-this.getScrollStep());
},_onExecuteForward:function(){this.scrollBy(this.getScrollStep());
},_onRemoveChild:function(){qx.event.Timer.once(function(){this.scrollBy(this.getChildControl(p).getScrollX());
},this,50);
},_updateArrowsEnabled:function(){var u=this.getChildControl(p);

if(this.getOrientation()===q){var t=u.getScrollX();
var v=u.getScrollMaxX();
}else{var t=u.getScrollY();
var v=u.getScrollMaxY();
}this.getChildControl(n).setEnabled(t>0);
this.getChildControl(m).setEnabled(t<v);
},_showArrows:function(){this._showChildControl(m);
this._showChildControl(n);
},_hideArrows:function(){this._excludeChildControl(m);
this._excludeChildControl(n);
this.scrollTo(0);
}}});
})();
(function(){var Q="slidebar",P="Integer",O="resize",N="qx.ui.core.Widget",M="selected",L="visible",K="Boolean",J="mouseout",I="excluded",H="menu",bg="_applySelectedButton",bf="_applyOpenInterval",be="_applySpacingY",bd="_blocker",bc="_applyCloseInterval",bb="_applyBlockerColor",ba="_applyIconColumnWidth",Y="mouseover",X="qx.ui.menu.Menu",W="Color",U="Number",V="_applyOpenedButton",S="_applySpacingX",T="_applyBlockerOpacity",R="_applyArrowColumnWidth";
qx.Class.define(X,{extend:qx.ui.core.Widget,include:[qx.ui.core.MPlacement,qx.ui.core.MRemoteChildrenHandling],construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.menu.Layout);
var y=this.getApplicationRoot();
y.add(this);
this.addListener(Y,this._onMouseOver);
this.addListener(J,this._onMouseOut);
this.addListener(O,this._onResize,this);
y.addListener(O,this._onResize,this);
this._blocker=new qx.ui.core.Blocker(y);
this.initVisibility();
this.initKeepFocus();
this.initKeepActive();
},properties:{appearance:{refine:true,init:H},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},visibility:{refine:true,init:I},keepFocus:{refine:true,init:true},keepActive:{refine:true,init:true},spacingX:{check:P,apply:S,init:0,themeable:true},spacingY:{check:P,apply:be,init:0,themeable:true},iconColumnWidth:{check:P,init:0,themeable:true,apply:ba},arrowColumnWidth:{check:P,init:0,themeable:true,apply:R},blockerColor:{check:W,init:null,nullable:true,apply:bb,themeable:true},blockerOpacity:{check:U,init:1,apply:T,themeable:true},selectedButton:{check:N,nullable:true,apply:bg},openedButton:{check:N,nullable:true,apply:V},opener:{check:N,nullable:true},openInterval:{check:P,themeable:true,init:250,apply:bf},closeInterval:{check:P,themeable:true,init:250,apply:bc},blockBackground:{check:K,themeable:true,init:false}},members:{__mv:null,__mw:null,_blocker:null,open:function(){if(this.getOpener()!=null){this.placeToWidget(this.getOpener());
this.__my();
this.show();
this._placementTarget=this.getOpener();
}else{this.warn("The menu instance needs a configured 'opener' widget!");
}},openAtMouse:function(e){this.placeToMouse(e);
this.__my();
this.show();
this._placementTarget={left:e.getDocumentLeft(),top:e.getDocumentTop()};
},openAtPoint:function(c){this.placeToPoint(c);
this.__my();
this.show();
this._placementTarget=c;
},addSeparator:function(){this.add(new qx.ui.menu.Separator);
},getColumnSizes:function(){return this._getMenuLayout().getColumnSizes();
},getSelectables:function(){var u=[];
var v=this.getChildren();

for(var i=0;i<v.length;i++){if(v[i].isEnabled()){u.push(v[i]);
}}return u;
},_applyIconColumnWidth:function(s,t){this._getMenuLayout().setIconColumnWidth(s);
},_applyArrowColumnWidth:function(q,r){this._getMenuLayout().setArrowColumnWidth(q);
},_applySpacingX:function(f,g){this._getMenuLayout().setColumnSpacing(f);
},_applySpacingY:function(a,b){this._getMenuLayout().setSpacing(a);
},_applyVisibility:function(bo,bp){qx.ui.core.Widget.prototype._applyVisibility.call(this,bo,bp);
var bq=qx.ui.menu.Manager.getInstance();

if(bo===L){bq.add(this);
var br=this.getParentMenu();

if(br){br.setOpenedButton(this.getOpener());
}}else if(bp===L){bq.remove(this);
var br=this.getParentMenu();

if(br&&br.getOpenedButton()==this.getOpener()){br.resetOpenedButton();
}this.resetOpenedButton();
this.resetSelectedButton();
}this.__mx();
},__mx:function(){if(this.isVisible()){if(this.getBlockBackground()){var bi=this.getZIndex();
this._blocker.blockContent(bi-1);
}}else{if(this._blocker.isContentBlocked()){this._blocker.unblockContent();
}}},getParentMenu:function(){var G=this.getOpener();

if(!G||!(G instanceof qx.ui.menu.AbstractButton)){return null;
}
while(G&&!(G instanceof qx.ui.menu.Menu)){G=G.getLayoutParent();
}return G;
},_applySelectedButton:function(bj,bk){if(bk){bk.removeState(M);
}
if(bj){bj.addState(M);
}},_applyOpenedButton:function(o,p){if(p){p.getMenu().exclude();
}
if(o){o.getMenu().open();
}},_applyBlockerColor:function(w,x){this._blocker.setColor(w);
},_applyBlockerOpacity:function(E,F){this._blocker.setOpacity(E);
},getChildrenContainer:function(){return this.getChildControl(Q,true)||this;
},_createChildControlImpl:function(z){var A;

switch(z){case Q:var A=new qx.ui.menu.MenuSlideBar();
var C=this._getLayout();
this._setLayout(new qx.ui.layout.Grow());
var B=A.getLayout();
A.setLayout(C);
B.dispose();
var D=qx.lang.Array.clone(this.getChildren());

for(var i=0;i<D.length;i++){A.add(D[i]);
}this.removeListener(O,this._onResize,this);
A.getChildrenContainer().addListener(O,this._onResize,this);
this._add(A);
break;
}return A||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,z);
},_getMenuLayout:function(){if(this.hasChildControl(Q)){return this.getChildControl(Q).getChildrenContainer().getLayout();
}else{return this._getLayout();
}},_getMenuBounds:function(){if(this.hasChildControl(Q)){return this.getChildControl(Q).getChildrenContainer().getBounds();
}else{return this.getBounds();
}},_computePlacementSize:function(){return this._getMenuBounds();
},__my:function(){var bm=this._getMenuBounds();

if(!bm){this.addListenerOnce(O,this.__my,this);
return;
}var bl=this.getLayoutParent().getBounds().height;
var top=this.getLayoutProperties().top;
var bn=this.getLayoutProperties().left;
if(top<0){this._assertSlideBar(function(){this.setHeight(bm.height+top);
this.moveTo(bn,0);
});
}else if(top+bm.height>bl){this._assertSlideBar(function(){this.setHeight(bl-top);
});
}else{this.setHeight(null);
}},_assertSlideBar:function(bh){if(this.hasChildControl(Q)){return bh.call(this);
}this.__mw=bh;
qx.ui.core.queue.Widget.add(this);
},syncWidget:function(){this.getChildControl(Q);

if(this.__mw){this.__mw.call(this);
delete this.__mw;
}},_onResize:function(){if(this.isVisible()){var d=this._placementTarget;

if(!d){return;
}else if(d instanceof qx.ui.core.Widget){this.placeToWidget(d);
}else if(d.top!==undefined){this.placeToPoint(d);
}else{throw new Error("Unknown target: "+d);
}this.__my();
}},_onMouseOver:function(e){var l=qx.ui.menu.Manager.getInstance();
l.cancelClose(this);
var m=e.getTarget();

if(m.isEnabled()&&m instanceof qx.ui.menu.AbstractButton){this.setSelectedButton(m);
var k=m.getMenu&&m.getMenu();

if(k){k.setOpener(m);
l.scheduleOpen(k);
this.__mv=k;
}else{var n=this.getOpenedButton();

if(n){l.scheduleClose(n.getMenu());
}
if(this.__mv){l.cancelOpen(this.__mv);
this.__mv=null;
}}}else if(!this.getOpenedButton()){this.resetSelectedButton();
}},_onMouseOut:function(e){var h=qx.ui.menu.Manager.getInstance();
if(!qx.ui.core.Widget.contains(this,e.getRelatedTarget())){var j=this.getOpenedButton();
j?this.setSelectedButton(j):this.resetSelectedButton();
if(j){h.cancelClose(j.getMenu());
}if(this.__mv){h.cancelOpen(this.__mv);
}}}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.ui.menu.Manager.getInstance().remove(this);
}this.getApplicationRoot().removeListener(O,this._onResize,this);
this._placementTarget=null;
this._disposeObjects(bd);
}});
})();
(function(){var k="Integer",j="hovered",i="hover-button",h="interval",g="mouseover",f="mouseout",d="qx.ui.form.HoverButton",c="__mz";
qx.Class.define(d,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],construct:function(a,b){qx.ui.basic.Atom.call(this,a,b);
this.addListener(g,this._onMouseOver,this);
this.addListener(f,this._onMouseOut,this);
this.__mz=new qx.event.AcceleratingTimer();
this.__mz.addListener(h,this._onInterval,this);
},properties:{appearance:{refine:true,init:i},interval:{check:k,init:80},firstInterval:{check:k,init:200},minTimer:{check:k,init:20},timerDecrease:{check:k,init:2}},members:{__mz:null,_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.__mz.set({interval:this.getInterval(),firstInterval:this.getFirstInterval(),minimum:this.getMinTimer(),decrease:this.getTimerDecrease()}).start();
this.addState(j);
},_onMouseOut:function(e){this.__mz.stop();
this.removeState(j);

if(!this.isEnabled()||e.getTarget()!==this){return;
}},_onInterval:function(){if(this.isEnabled()){this.execute();
}else{this.__mz.stop();
}}},destruct:function(){this._disposeObjects(c);
}});
})();
(function(){var b="qx.ui.form.IBooleanForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var c="middle",b="qx.ui.menu.ButtonLayout",a="left";
qx.Class.define(b,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(h,j){var u=this._getLayoutChildren();
var t;
var m;
var n=[];

for(var i=0,l=u.length;i<l;i++){t=u[i];
m=t.getLayoutProperties().column;
n[m]=t;
}var s=this.__nb(u[0]);
var v=s.getColumnSizes();
var p=s.getSpacingX();
var o=qx.lang.Array.sum(v)+p*(v.length-1);

if(o<h){v[1]+=h-o;
}var w=0,top=0;
var q=qx.ui.layout.Util;

for(var i=0,l=v.length;i<l;i++){t=n[i];

if(t){var k=t.getSizeHint();
var top=q.computeVerticalAlignOffset(t.getAlignY()||c,k.height,j,0,0);
var r=q.computeHorizontalAlignOffset(t.getAlignX()||a,k.width,v[i],t.getMarginLeft(),t.getMarginRight());
t.renderLayout(w+r,top,k.width,k.height);
}w+=v[i]+p;
}},__nb:function(x){while(!(x instanceof qx.ui.menu.Menu)){x=x.getLayoutParent();
}return x;
},_computeSizeHint:function(){var f=this._getLayoutChildren();
var e=0;
var g=0;

for(var i=0,l=f.length;i<l;i++){var d=f[i].getSizeHint();
g+=d.width;
e=Math.max(e,d.height);
}return {width:g,height:e};
}}});
})();
(function(){var f="execute",e="button-backward",d="vertical",c="button-forward",b="menu-slidebar",a="qx.ui.menu.MenuSlideBar";
qx.Class.define(a,{extend:qx.ui.container.SlideBar,construct:function(){qx.ui.container.SlideBar.call(this,d);
},properties:{appearance:{refine:true,init:b}},members:{_createChildControlImpl:function(g){var h;

switch(g){case c:h=new qx.ui.form.HoverButton();
h.addListener(f,this._onExecuteForward,this);
this._addAt(h,2);
break;
case e:h=new qx.ui.form.HoverButton();
h.addListener(f,this._onExecuteBackward,this);
this._addAt(h,0);
break;
}return h||qx.ui.container.SlideBar.prototype._createChildControlImpl.call(this,g);
}}});
})();
(function(){var g="",f="<br",e=" &nbsp;",d="<br>",c=" ",b="\n",a="qx.bom.String";
qx.Class.define(a,{statics:{TO_CHARCODE:{"quot":34,"amp":38,"lt":60,"gt":62,"nbsp":160,"iexcl":161,"cent":162,"pound":163,"curren":164,"yen":165,"brvbar":166,"sect":167,"uml":168,"copy":169,"ordf":170,"laquo":171,"not":172,"shy":173,"reg":174,"macr":175,"deg":176,"plusmn":177,"sup2":178,"sup3":179,"acute":180,"micro":181,"para":182,"middot":183,"cedil":184,"sup1":185,"ordm":186,"raquo":187,"frac14":188,"frac12":189,"frac34":190,"iquest":191,"Agrave":192,"Aacute":193,"Acirc":194,"Atilde":195,"Auml":196,"Aring":197,"AElig":198,"Ccedil":199,"Egrave":200,"Eacute":201,"Ecirc":202,"Euml":203,"Igrave":204,"Iacute":205,"Icirc":206,"Iuml":207,"ETH":208,"Ntilde":209,"Ograve":210,"Oacute":211,"Ocirc":212,"Otilde":213,"Ouml":214,"times":215,"Oslash":216,"Ugrave":217,"Uacute":218,"Ucirc":219,"Uuml":220,"Yacute":221,"THORN":222,"szlig":223,"agrave":224,"aacute":225,"acirc":226,"atilde":227,"auml":228,"aring":229,"aelig":230,"ccedil":231,"egrave":232,"eacute":233,"ecirc":234,"euml":235,"igrave":236,"iacute":237,"icirc":238,"iuml":239,"eth":240,"ntilde":241,"ograve":242,"oacute":243,"ocirc":244,"otilde":245,"ouml":246,"divide":247,"oslash":248,"ugrave":249,"uacute":250,"ucirc":251,"uuml":252,"yacute":253,"thorn":254,"yuml":255,"fnof":402,"Alpha":913,"Beta":914,"Gamma":915,"Delta":916,"Epsilon":917,"Zeta":918,"Eta":919,"Theta":920,"Iota":921,"Kappa":922,"Lambda":923,"Mu":924,"Nu":925,"Xi":926,"Omicron":927,"Pi":928,"Rho":929,"Sigma":931,"Tau":932,"Upsilon":933,"Phi":934,"Chi":935,"Psi":936,"Omega":937,"alpha":945,"beta":946,"gamma":947,"delta":948,"epsilon":949,"zeta":950,"eta":951,"theta":952,"iota":953,"kappa":954,"lambda":955,"mu":956,"nu":957,"xi":958,"omicron":959,"pi":960,"rho":961,"sigmaf":962,"sigma":963,"tau":964,"upsilon":965,"phi":966,"chi":967,"psi":968,"omega":969,"thetasym":977,"upsih":978,"piv":982,"bull":8226,"hellip":8230,"prime":8242,"Prime":8243,"oline":8254,"frasl":8260,"weierp":8472,"image":8465,"real":8476,"trade":8482,"alefsym":8501,"larr":8592,"uarr":8593,"rarr":8594,"darr":8595,"harr":8596,"crarr":8629,"lArr":8656,"uArr":8657,"rArr":8658,"dArr":8659,"hArr":8660,"forall":8704,"part":8706,"exist":8707,"empty":8709,"nabla":8711,"isin":8712,"notin":8713,"ni":8715,"prod":8719,"sum":8721,"minus":8722,"lowast":8727,"radic":8730,"prop":8733,"infin":8734,"ang":8736,"and":8743,"or":8744,"cap":8745,"cup":8746,"int":8747,"there4":8756,"sim":8764,"cong":8773,"asymp":8776,"ne":8800,"equiv":8801,"le":8804,"ge":8805,"sub":8834,"sup":8835,"sube":8838,"supe":8839,"oplus":8853,"otimes":8855,"perp":8869,"sdot":8901,"lceil":8968,"rceil":8969,"lfloor":8970,"rfloor":8971,"lang":9001,"rang":9002,"loz":9674,"spades":9824,"clubs":9827,"hearts":9829,"diams":9830,"OElig":338,"oelig":339,"Scaron":352,"scaron":353,"Yuml":376,"circ":710,"tilde":732,"ensp":8194,"emsp":8195,"thinsp":8201,"zwnj":8204,"zwj":8205,"lrm":8206,"rlm":8207,"ndash":8211,"mdash":8212,"lsquo":8216,"rsquo":8217,"sbquo":8218,"ldquo":8220,"rdquo":8221,"bdquo":8222,"dagger":8224,"Dagger":8225,"permil":8240,"lsaquo":8249,"rsaquo":8250,"euro":8364},escape:function(i){return qx.util.StringEscape.escape(i,qx.bom.String.FROM_CHARCODE);
},unescape:function(m){return qx.util.StringEscape.unescape(m,qx.bom.String.TO_CHARCODE);
},fromText:function(j){return qx.bom.String.escape(j).replace(/(  |\n)/g,function(n){var o={"  ":e,"\n":d};
return o[n]||n;
});
},toText:function(l){return qx.bom.String.unescape(l.replace(/\s+|<([^>])+>/gi,function(h){if(h.indexOf(f)===0){return b;
}else if(h.length>0&&h.replace(/^\s*/,g).replace(/\s*$/,g)==g){return c;
}else{return g;
}}));
}},defer:function(k){k.FROM_CHARCODE=qx.lang.Object.invert(k.TO_CHARCODE);
}});
})();

});