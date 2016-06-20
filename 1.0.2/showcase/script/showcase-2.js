qx.$$packageData['e9018bab16a1']={"resources":{}};
(function(){var m="container",k="handle",j="both",h="Integer",g="middle",f="qx.ui.toolbar.Part",e="icon",d="label",c="changeShow",b="_applySpacing",a="toolbar/part";
qx.Class.define(f,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling],construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.HBox);
this._createChildControl(k);
},properties:{appearance:{refine:true,init:a},show:{init:j,check:[j,d,e],inheritable:true,event:c},spacing:{nullable:true,check:h,themeable:true,apply:b}},members:{_createChildControlImpl:function(q){var r;

switch(q){case k:r=new qx.ui.basic.Image();
r.setAlignY(g);
this._add(r);
break;
case m:r=new qx.ui.toolbar.PartContainer;
this._add(r);
break;
}return r||arguments.callee.base.call(this,q);
},getChildrenContainer:function(){return this.getChildControl(m);
},_applySpacing:function(n,o){var p=this.getChildControl(m).getLayout();
n==null?p.resetSpacing():p.setSpacing(n);
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
qx.Class.define(d,{extend:qx.ui.core.Widget,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],type:g,construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.menu.ButtonLayout);
this.addListener(b,this._onMouseUp);
this.addListener(j,this._onKeyPress);
this.addListener(a,this._onChangeCommand,this);
},properties:{blockToolTip:{refine:true,init:true},label:{check:l,apply:f,nullable:true},menu:{check:k,apply:i,nullable:true},icon:{check:l,apply:c,themeable:true,nullable:true}},members:{_createChildControlImpl:function(D){var E;

switch(D){case t:E=new qx.ui.basic.Image;
E.setAnonymous(true);
this._add(E,{column:0});
break;
case s:E=new qx.ui.basic.Label;
E.setAnonymous(true);
this._add(E,{column:1});
break;
case q:E=new qx.ui.basic.Label;
E.setAnonymous(true);
this._add(E,{column:2});
break;
case r:E=new qx.ui.basic.Image;
E.setAnonymous(true);
this._add(E,{column:3});
break;
}return E||arguments.callee.base.call(this,D);
},_forwardStates:{selected:1},getChildrenSizes:function(){var G=0,H=0,I=0,M=0;

if(this._isChildControlVisible(t)){var N=this.getChildControl(t);
G=N.getMarginLeft()+N.getSizeHint().width+N.getMarginRight();
}
if(this._isChildControlVisible(s)){var K=this.getChildControl(s);
H=K.getMarginLeft()+K.getSizeHint().width+K.getMarginRight();
}
if(this._isChildControlVisible(q)){var J=this.getChildControl(q);
I=J.getMarginLeft()+J.getSizeHint().width+J.getMarginRight();
}
if(this._isChildControlVisible(r)){var L=this.getChildControl(r);
M=L.getMarginLeft()+L.getSizeHint().width+L.getMarginRight();
}return [G,H,I,M];
},_onMouseUp:function(e){},_onKeyPress:function(e){},_onChangeCommand:function(e){var A=e.getData();

if(qx.core.Variant.isSet(o,m)){var y=e.getOldData();

if(!y){qx.locale.Manager.getInstance().addListener(p,this._onChangeLocale,this);
}
if(!A){qx.locale.Manager.getInstance().removeListener(p,this._onChangeLocale,this);
}}var z=A!=null?A.toString():h;
this.getChildControl(q).setValue(z);
},_onChangeLocale:qx.core.Variant.select(o,{"on":function(e){var F=this.getCommand();

if(F!=null){this.getChildControl(q).setValue(F.toString());
}},"off":null}),_applyIcon:function(u,v){if(u){this._showChildControl(t).setSource(u);
}else{this._excludeChildControl(t);
}},_applyLabel:function(B,C){if(B){this._showChildControl(s).setValue(B);
}else{this._excludeChildControl(s);
}},_applyMenu:function(w,x){if(x){x.resetOpener();
x.removeState(n);
}
if(w){this._showChildControl(r);
w.setOpener(this);
w.addState(n);
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
qx.Class.define(c,{extend:qx.ui.form.Button,construct:function(u,v,w){arguments.callee.base.call(this,u,v);
if(w!=null){this.setMenu(w);
}},properties:{menu:{check:i,nullable:true,apply:a,event:d}},members:{_applyMenu:function(n,o){if(o){o.removeListener(j,this._onMenuChange,this);
o.resetOpener();
}
if(n){n.addListener(j,this._onMenuChange,this);
n.setOpener(this);
n.removeState(h);
n.removeState(f);
}},open:function(q){var r=this.getMenu();

if(r){qx.ui.menu.Manager.getInstance().hideAll();
r.setOpener(this);
r.open();
if(q){var s=r.getSelectables()[0];

if(s){r.setSelectedButton(s);
}}}},_onMenuChange:function(e){var m=this.getMenu();

if(m.isVisible()){this.addState(l);
}else{this.removeState(l);
}},_onMouseDown:function(e){var p=this.getMenu();

if(p){if(!p.isVisible()){this.open();
}else{p.exclude();
}e.stopPropagation();
}},_onMouseUp:function(e){arguments.callee.base.call(this,e);
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
(function(){var k="pressed",j="hovered",i="inherit",h="qx.ui.menubar.Button",g="keydown",f="menubar-button",d="keyup";
qx.Class.define(h,{extend:qx.ui.form.MenuButton,construct:function(a,b,c){arguments.callee.base.call(this,a,b,c);
this.removeListener(g,this._onKeyDown);
this.removeListener(d,this._onKeyUp);
},properties:{appearance:{refine:true,init:f},show:{refine:true,init:i},focusable:{refine:true,init:false}},members:{getMenuBar:function(){var parent=this;

while(parent){if(parent instanceof qx.ui.toolbar.ToolBar){return parent;
}parent=parent.getLayoutParent();
}return null;
},open:function(l){arguments.callee.base.call(this,l);
var menubar=this.getMenuBar();
menubar._setAllowMenuOpenHover(true);
},_onMenuChange:function(e){var n=this.getMenu();
var menubar=this.getMenuBar();

if(n.isVisible()){this.addState(k);
if(menubar){menubar.setOpenMenu(n);
}}else{this.removeState(k);
if(menubar&&menubar.getOpenMenu()==n){menubar.resetOpenMenu();
menubar._setAllowMenuOpenHover(false);
}}},_onMouseUp:function(e){arguments.callee.base.call(this,e);
var m=this.getMenu();

if(m&&m.isVisible()&&!this.hasState(k)){this.addState(k);
}},_onMouseOver:function(e){this.addState(j);
if(this.getMenu()){var menubar=this.getMenuBar();

if(menubar._isAllowMenuOpenHover()){qx.ui.menu.Manager.getInstance().hideAll();
menubar._setAllowMenuOpenHover(true);
if(this.isEnabled()){this.open();
}}}}}});
})();
(function(){var bf="keypress",be="interval",bd="keydown",bc="mousedown",bb="keyup",ba="blur",Y="Enter",X="__lY",W="Up",V="__ma",P="Escape",U="qx.ui.menu.Manager",S="Left",O="Down",N="Right",R="__lX",Q="singleton",T="Space";
qx.Class.define(U,{type:Q,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__lX=[];
var L=document.body;
var M=qx.event.Registration;
M.addListener(window.document.documentElement,bc,this._onMouseDown,this,true);
M.addListener(L,bd,this._onKeyUpDown,this,true);
M.addListener(L,bb,this._onKeyUpDown,this,true);
M.addListener(L,bf,this._onKeyPress,this,true);
qx.bom.Element.addListener(window,ba,this.hideAll,this);
this.__lY=new qx.event.Timer;
this.__lY.addListener(be,this._onOpenInterval,this);
this.__ma=new qx.event.Timer;
this.__ma.addListener(be,this._onCloseInterval,this);
},members:{__mb:null,__mc:null,__lY:null,__ma:null,__lX:null,_getChild:function(bm,bn,bo,bp){var bq=bm.getChildren();
var length=bq.length;
var br;

for(var i=bn;i<length&&i>=0;i+=bo){br=bq[i];

if(br.isEnabled()&&!br.isAnonymous()){return br;
}}
if(bp){i=i==length?0:length-1;

for(;i!=bn;i+=bo){br=bq[i];

if(br.isEnabled()&&!br.isAnonymous()){return br;
}}}return null;
},_isInMenu:function(bx){while(bx){if(bx instanceof qx.ui.menu.Menu){return true;
}bx=bx.getLayoutParent();
}return false;
},_getMenuButton:function(K){while(K){if(K instanceof qx.ui.menu.AbstractButton){return K;
}K=K.getLayoutParent();
}return null;
},add:function(bu){{};
var bv=this.__lX;
bv.push(bu);
bu.setZIndex(1e6+bv.length);
},remove:function(bs){{};
var bt=this.__lX;

if(bt){qx.lang.Array.remove(bt,bs);
}},hideAll:function(){var a=this.__lX;

if(a){for(var i=a.length-1;i>=0;i--){a[i].exclude();
}}},getActiveMenu:function(){var bD=this.__lX;
return bD.length>0?bD[bD.length-1]:null;
},scheduleOpen:function(z){this.cancelClose(z);
if(z.isVisible()){if(this.__mb){this.cancelOpen(this.__mb);
}}else if(this.__mb!=z){this.__mb=z;
this.__lY.restartWith(z.getOpenInterval());
}},scheduleClose:function(bB){this.cancelOpen(bB);
if(!bB.isVisible()){if(this.__mc){this.cancelClose(this.__mc);
}}else if(this.__mc!=bB){this.__mc=bB;
this.__ma.restartWith(bB.getCloseInterval());
}},cancelOpen:function(bg){if(this.__mb==bg){this.__lY.stop();
this.__mb=null;
}},cancelClose:function(bw){if(this.__mc==bw){this.__ma.stop();
this.__mc=null;
}},_onOpenInterval:function(e){this.__lY.stop();
this.__mb.open();
this.__mb=null;
},_onCloseInterval:function(e){this.__ma.stop();
this.__mc.exclude();
this.__mc=null;
},_onMouseDown:function(e){var bC=e.getTarget();
bC=qx.ui.core.Widget.getWidgetByElement(bC);
if(bC==null){this.hideAll();
return;
}if(bC.getMenu&&bC.getMenu()&&bC.getMenu().isVisible()){return;
}if(this.__lX.length>0&&!this._isInMenu(bC)){this.hideAll();
}},__md:{"Enter":1,"Space":1},__me:{"Escape":1,"Up":1,"Down":1,"Left":1,"Right":1},_onKeyUpDown:function(e){var o=this.getActiveMenu();

if(!o){return;
}var p=e.getKeyIdentifier();

if(this.__me[p]||(this.__md[p]&&o.getSelectedButton())){e.stopPropagation();
}},_onKeyPress:function(e){var bh=this.getActiveMenu();

if(!bh){return;
}var bi=e.getKeyIdentifier();
var bk=this.__me[bi];
var bj=this.__md[bi];

if(bk){switch(bi){case W:this._onKeyPressUp(bh);
break;
case O:this._onKeyPressDown(bh);
break;
case S:this._onKeyPressLeft(bh);
break;
case N:this._onKeyPressRight(bh);
break;
case P:this.hideAll();
break;
}e.stopPropagation();
e.preventDefault();
}else if(bj){var bl=bh.getSelectedButton();

if(bl){switch(bi){case Y:this._onKeyPressEnter(bh,bl,e);
break;
case T:this._onKeyPressSpace(bh,bl,e);
break;
}e.stopPropagation();
e.preventDefault();
}}},_onKeyPressUp:function(j){var k=j.getSelectedButton();
var l=j.getChildren();
var n=k?j.indexOf(k)-1:l.length-1;
var m=this._getChild(j,n,-1,true);
if(m){j.setSelectedButton(m);
}else{j.resetSelectedButton();
}},_onKeyPressDown:function(b){var c=b.getSelectedButton();
var f=c?b.indexOf(c)+1:0;
var d=this._getChild(b,f,1,true);
if(d){b.setSelectedButton(d);
}else{b.resetSelectedButton();
}},_onKeyPressLeft:function(A){var F=A.getOpener();

if(!F){return;
}if(F instanceof qx.ui.menu.Button){var C=F.getLayoutParent();
C.resetOpenedButton();
C.setSelectedButton(F);
}else if(F instanceof qx.ui.menubar.Button){var E=F.getMenuBar().getMenuButtons();
var B=E.indexOf(F);
if(B===-1){return;
}var G=null;
var length=E.length;

for(var i=1;i<=length;i++){var D=E[(B-i+length)%length];

if(D.isEnabled()){G=D;
break;
}}
if(G&&G!=F){G.open(true);
}}},_onKeyPressRight:function(q){var s=q.getSelectedButton();
if(s){var r=s.getMenu();

if(r){q.setOpenedButton(s);
var y=this._getChild(r,0,1);

if(y){r.setSelectedButton(y);
}return;
}}else if(!q.getOpenedButton()){var y=this._getChild(q,0,1);

if(y){q.setSelectedButton(y);

if(y.getMenu()){q.setOpenedButton(y);
}return;
}}var w=q.getOpener();
if(w instanceof qx.ui.menu.Button&&s){while(w){w=w.getLayoutParent();

if(w instanceof qx.ui.menu.Menu){w=w.getOpener();

if(w instanceof qx.ui.menubar.Button){break;
}}else{break;
}}
if(!w){return;
}}if(w instanceof qx.ui.menubar.Button){var v=w.getMenuBar().getMenuButtons();
var t=v.indexOf(w);
if(t===-1){return;
}var x=null;
var length=v.length;

for(var i=1;i<=length;i++){var u=v[(t+i)%length];

if(u.isEnabled()){x=u;
break;
}}
if(x&&x!=w){x.open(true);
}}},_onKeyPressEnter:function(H,I,e){if(I.hasListener(bf)){var J=e.clone();
J.setBubbles(false);
J.setTarget(I);
I.dispatchEvent(J);
}this.hideAll();
},_onKeyPressSpace:function(by,bz,e){if(bz.hasListener(bf)){var bA=e.clone();
bA.setBubbles(false);
bA.setTarget(bz);
bz.dispatchEvent(bA);
}}},destruct:function(){var h=qx.event.Registration;
var g=document.body;
h.removeListener(window.document.documentElement,bc,this._onMouseDown,this,true);
h.removeListener(g,bd,this._onKeyUpDown,this,true);
h.removeListener(g,bb,this._onKeyUpDown,this,true);
h.removeListener(g,bf,this._onKeyPress,this,true);
this._disposeObjects(X,V);
this._disposeArray(R);
}});
})();
(function(){var b="toolbar-separator",a="qx.ui.toolbar.Separator";
qx.Class.define(a,{extend:qx.ui.core.Widget,properties:{appearance:{refine:true,init:b},anonymous:{refine:true,init:true},width:{refine:true,init:0},height:{refine:true,init:0}}});
})();
(function(){var b="qx.ui.menu.Button",a="menu-button";
qx.Class.define(b,{extend:qx.ui.menu.AbstractButton,construct:function(c,d,f,g){arguments.callee.base.call(this);
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
qx.Class.define(c,{extend:qx.ui.core.Widget,include:qx.ui.core.MChildrenHandling,construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.HBox());
},properties:{appearance:{refine:true,init:b},openMenu:{check:j,event:a,nullable:true},show:{init:k,check:[k,f,g],inheritable:true,event:e},spacing:{nullable:true,check:d,themeable:true,apply:h}},members:{__mF:false,_setAllowMenuOpenHover:function(q){this.__mF=q;
},_isAllowMenuOpenHover:function(){return this.__mF;
},_applySpacing:function(n,o){var p=this._getLayout();
n==null?p.resetSpacing():p.setSpacing(n);
},addSpacer:function(){var m=new qx.ui.core.Spacer;
this._add(m,{flex:1});
return m;
},addSeparator:function(){this.add(new qx.ui.toolbar.Separator);
},getMenuButtons:function(){var s=this.getChildren();
var r=[];
var t;

for(var i=0,l=s.length;i<l;i++){t=s[i];

if(t instanceof qx.ui.menubar.Button){r.push(t);
}else if(t instanceof qx.ui.toolbar.Part){r.push.apply(r,t.getMenuButtons());
}}return r;
}}});
})();
(function(){var c="Integer",b="_applyLayoutChange",a="qx.ui.menu.Layout";
qx.Class.define(a,{extend:qx.ui.layout.VBox,properties:{columnSpacing:{check:c,init:0,apply:b},spanColumn:{check:c,init:1,nullable:true,apply:b},iconColumnWidth:{check:c,init:0,themeable:true,apply:b},arrowColumnWidth:{check:c,init:0,themeable:true,apply:b}},members:{__mk:null,_computeSizeHint:function(){var q=this._getLayoutChildren();
var o,g,j;
var e=this.getSpanColumn();
var h=this.__mk=[0,0,0,0];
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
}var p=arguments.callee.base.call(this).height;
return {minHeight:p,height:p,width:qx.lang.Array.sum(h)+f+j};
},getColumnSizes:function(){return this.__mk||null;
}},destruct:function(){this.__mk=null;
}});
})();
(function(){var f="both",e="toolbar/part/container",d="icon",c="changeShow",b="qx.ui.toolbar.PartContainer",a="label";
qx.Class.define(b,{extend:qx.ui.container.Composite,construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.HBox);
},properties:{appearance:{refine:true,init:e},show:{init:f,check:[f,a,d],inheritable:true,event:c}}});
})();
(function(){var s="horizontal",r="scrollpane",q="vertical",p="button-backward",o="button-forward",n="content",m="execute",l="qx.ui.container.SlideBar",k="scrollY",j="removeChildWidget",f="scrollX",i="_applyOrientation",h="mousewheel",d="Integer",c="slidebar",g="update";
qx.Class.define(l,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MRemoteLayoutHandling],construct:function(t){arguments.callee.base.call(this);
var u=this.getChildControl(r);
this._add(u,{flex:1});

if(t!=null){this.setOrientation(t);
}else{this.initOrientation();
}this.addListener(h,this._onMouseWheel,this);
},properties:{appearance:{refine:true,init:c},orientation:{check:[s,q],init:s,apply:i},scrollStep:{check:d,init:15,themeable:true}},members:{getChildrenContainer:function(){return this.getChildControl(n);
},_createChildControlImpl:function(v){var w;

switch(v){case o:w=new qx.ui.form.RepeatButton;
w.addListener(m,this._onExecuteForward,this);
w.setFocusable(false);
this._addAt(w,2);
break;
case p:w=new qx.ui.form.RepeatButton;
w.addListener(m,this._onExecuteBackward,this);
w.setFocusable(false);
this._addAt(w,0);
break;
case n:w=new qx.ui.container.Composite();
if(qx.bom.client.Engine.GECKO){w.addListener(j,this._onRemoveChild,this);
}this.getChildControl(r).add(w);
break;
case r:w=new qx.ui.core.scroll.ScrollPane();
w.addListener(g,this._onResize,this);
w.addListener(f,this._onScroll,this);
w.addListener(k,this._onScroll,this);
break;
}return w||arguments.callee.base.call(this,v);
},_forwardStates:{barLeft:true,barTop:true,barRight:true,barBottom:true},scrollBy:function(D){var E=this.getChildControl(r);

if(this.getOrientation()===s){E.scrollByX(D);
}else{E.scrollByY(D);
}},scrollTo:function(a){var b=this.getChildControl(r);

if(this.getOrientation()===s){b.scrollToX(a);
}else{b.scrollToY(a);
}},_applyOrientation:function(F,G){var J=[this.getLayout(),this._getLayout()];
var I=this.getChildControl(o);
var H=this.getChildControl(p);
if(G==q){I.removeState(q);
H.removeState(q);
I.addState(s);
H.addState(s);
}else if(G==s){I.removeState(s);
H.removeState(s);
I.addState(q);
H.addState(q);
}
if(F==s){this._setLayout(new qx.ui.layout.HBox());
this.setLayout(new qx.ui.layout.HBox());
}else{this._setLayout(new qx.ui.layout.VBox());
this.setLayout(new qx.ui.layout.VBox());
}
if(J[0]){J[0].dispose();
}
if(J[1]){J[1].dispose();
}},_onMouseWheel:function(e){this.scrollBy(e.getWheelDelta()*this.getScrollStep());
e.stop();
},_onScroll:function(){this._updateArrowsEnabled();
},_onResize:function(e){var content=this.getChildControl(r).getChildren()[0];

if(!content){return;
}var x=this.getInnerSize();
var z=content.getBounds();
var y=(this.getOrientation()===s)?z.width>x.width:z.height>x.height;

if(y){this._showArrows();
this._updateArrowsEnabled();
}else{this._hideArrows();
}},_onExecuteBackward:function(){this.scrollBy(-this.getScrollStep());
},_onExecuteForward:function(){this.scrollBy(this.getScrollStep());
},_onRemoveChild:function(){qx.event.Timer.once(function(){this.scrollBy(this.getChildControl(r).getScrollX());
},this,50);
},_updateArrowsEnabled:function(){var B=this.getChildControl(r);

if(this.getOrientation()===s){var A=B.getScrollX();
var C=B.getScrollMaxX();
}else{var A=B.getScrollY();
var C=B.getScrollMaxY();
}this.getChildControl(p).setEnabled(A>0);
this.getChildControl(o).setEnabled(A<C);
},_showArrows:function(){this._showChildControl(o);
this._showChildControl(p);
},_hideArrows:function(){this._excludeChildControl(o);
this._excludeChildControl(p);
this.scrollTo(0);
}}});
})();
(function(){var Q="slidebar",P="Integer",O="resize",N="qx.ui.core.Widget",M="selected",L="visible",K="Boolean",J="mouseout",I="excluded",H="menu",bg="_applySelectedButton",bf="_applyOpenInterval",be="_applySpacingY",bd="_blocker",bc="_applyCloseInterval",bb="_applyBlockerColor",ba="_applyIconColumnWidth",Y="mouseover",X="qx.ui.menu.Menu",W="Color",U="Number",V="_applyOpenedButton",S="_applySpacingX",T="_applyBlockerOpacity",R="_applyArrowColumnWidth";
qx.Class.define(X,{extend:qx.ui.core.Widget,include:[qx.ui.core.MPlacement,qx.ui.core.MRemoteChildrenHandling],construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.menu.Layout);
var B=this.getApplicationRoot();
B.add(this);
this.addListener(Y,this._onMouseOver);
this.addListener(J,this._onMouseOut);
this.addListener(O,this._onResize,this);
B.addListener(O,this._onResize,this);
this._blocker=new qx.ui.core.Blocker(B);
this.initVisibility();
this.initKeepFocus();
this.initKeepActive();
},properties:{appearance:{refine:true,init:H},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},visibility:{refine:true,init:I},keepFocus:{refine:true,init:true},keepActive:{refine:true,init:true},spacingX:{check:P,apply:S,init:0,themeable:true},spacingY:{check:P,apply:be,init:0,themeable:true},iconColumnWidth:{check:P,init:0,themeable:true,apply:ba},arrowColumnWidth:{check:P,init:0,themeable:true,apply:R},blockerColor:{check:W,init:null,nullable:true,apply:bb,themeable:true},blockerOpacity:{check:U,init:1,apply:T,themeable:true},selectedButton:{check:N,nullable:true,apply:bg},openedButton:{check:N,nullable:true,apply:V},opener:{check:N,nullable:true},openInterval:{check:P,themeable:true,init:250,apply:bf},closeInterval:{check:P,themeable:true,init:250,apply:bc},blockBackground:{check:K,themeable:true,init:false}},members:{__mg:null,__mh:null,_blocker:null,open:function(){if(this.getOpener()!=null){this.placeToWidget(this.getOpener());
this.__mj();
this.show();
this._placementTarget=this.getOpener();
}else{this.warn("The menu instance needs a configured 'opener' widget!");
}},openAtMouse:function(e){this.placeToMouse(e);
this.__mj();
this.show();
this._placementTarget={left:e.getDocumentLeft(),top:e.getDocumentTop()};
},openAtPoint:function(E){this.placeToPoint(E);
this.__mj();
this.show();
this._placementTarget=E;
},addSeparator:function(){this.add(new qx.ui.menu.Separator);
},getColumnSizes:function(){return this._getMenuLayout().getColumnSizes();
},getSelectables:function(){var bj=[];
var bk=this.getChildren();

for(var i=0;i<bk.length;i++){if(bk[i].isEnabled()){bj.push(bk[i]);
}}return bj;
},_applyIconColumnWidth:function(o,p){this._getMenuLayout().setIconColumnWidth(o);
},_applyArrowColumnWidth:function(F,G){this._getMenuLayout().setArrowColumnWidth(F);
},_applySpacingX:function(C,D){this._getMenuLayout().setColumnSpacing(C);
},_applySpacingY:function(bq,br){this._getMenuLayout().setSpacing(bq);
},_applyVisibility:function(s,t){arguments.callee.base.call(this,s,t);
var u=qx.ui.menu.Manager.getInstance();

if(s===L){u.add(this);
var v=this.getParentMenu();

if(v){v.setOpenedButton(this.getOpener());
}}else if(t===L){u.remove(this);
var v=this.getParentMenu();

if(v&&v.getOpenedButton()==this.getOpener()){v.resetOpenedButton();
}this.resetOpenedButton();
this.resetSelectedButton();
}this.__mi();
},__mi:function(){if(this.isVisible()){if(this.getBlockBackground()){var r=this.getZIndex();
this._blocker.blockContent(r-1);
}}else{if(this._blocker.isContentBlocked()){this._blocker.unblockContent();
}}},getParentMenu:function(){var w=this.getOpener();

if(!w||!(w instanceof qx.ui.menu.AbstractButton)){return null;
}
while(w&&!(w instanceof qx.ui.menu.Menu)){w=w.getLayoutParent();
}return w;
},_applySelectedButton:function(a,b){if(b){b.removeState(M);
}
if(a){a.addState(M);
}},_applyOpenedButton:function(k,l){if(l){l.getMenu().exclude();
}
if(k){k.getMenu().open();
}},_applyBlockerColor:function(m,n){this._blocker.setColor(m);
},_applyBlockerOpacity:function(c,d){this._blocker.setOpacity(c);
},getChildrenContainer:function(){return this.getChildControl(Q,true)||this;
},_createChildControlImpl:function(bl){var bm;

switch(bl){case Q:var bm=new qx.ui.menu.MenuSlideBar();
var bo=this._getLayout();
this._setLayout(new qx.ui.layout.Grow());
var bn=bm.getLayout();
bm.setLayout(bo);
bn.dispose();
var bp=qx.lang.Array.clone(this.getChildren());

for(var i=0;i<bp.length;i++){bm.add(bp[i]);
}this.removeListener(O,this._onResize,this);
bm.getChildrenContainer().addListener(O,this._onResize,this);
this._add(bm);
break;
}return bm||arguments.callee.base.call(this,bl);
},_getMenuLayout:function(){if(this.hasChildControl(Q)){return this.getChildControl(Q).getChildrenContainer().getLayout();
}else{return this._getLayout();
}},_getMenuBounds:function(){if(this.hasChildControl(Q)){return this.getChildControl(Q).getChildrenContainer().getBounds();
}else{return this.getBounds();
}},_computePlacementSize:function(){return this._getMenuBounds();
},__mj:function(){var z=this._getMenuBounds();

if(!z){this.addListenerOnce(O,this.__mj,this);
return;
}var y=this.getLayoutParent().getBounds().height;
var top=this.getLayoutProperties().top;
var A=this.getLayoutProperties().left;
if(top<0){this._assertSlideBar(function(){this.setHeight(z.height+top);
this.moveTo(A,0);
});
}else if(top+z.height>y){this._assertSlideBar(function(){this.setHeight(y-top);
});
}else{this.setHeight(null);
}},_assertSlideBar:function(q){if(this.hasChildControl(Q)){return q.call(this);
}this.__mh=q;
qx.ui.core.queue.Widget.add(this);
},syncWidget:function(){this.getChildControl(Q);

if(this.__mh){this.__mh.call(this);
delete this.__mh;
}},_onResize:function(){if(this.isVisible()){var x=this._placementTarget;

if(!x){return;
}else if(x instanceof qx.ui.core.Widget){this.placeToWidget(x);
}else if(x.top!==undefined){this.placeToPoint(x);
}else{throw new Error("Unknown target: "+x);
}this.__mj();
}},_onMouseOver:function(e){var g=qx.ui.menu.Manager.getInstance();
g.cancelClose(this);
var h=e.getTarget();

if(h.isEnabled()&&h instanceof qx.ui.menu.AbstractButton){this.setSelectedButton(h);
var f=h.getMenu&&h.getMenu();

if(f){f.setOpener(h);
g.scheduleOpen(f);
this.__mg=f;
}else{var j=this.getOpenedButton();

if(j){g.scheduleClose(j.getMenu());
}
if(this.__mg){g.cancelOpen(this.__mg);
this.__mg=null;
}}}else if(!this.getOpenedButton()){this.resetSelectedButton();
}},_onMouseOut:function(e){var bh=qx.ui.menu.Manager.getInstance();
if(!qx.ui.core.Widget.contains(this,e.getRelatedTarget())){var bi=this.getOpenedButton();
bi?this.setSelectedButton(bi):this.resetSelectedButton();
if(bi){bh.cancelClose(bi.getMenu());
}if(this.__mg){bh.cancelOpen(this.__mg);
}}}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.ui.menu.Manager.getInstance().remove(this);
}this.getApplicationRoot().removeListener(O,this._onResize,this);
this._placementTarget=null;
this._disposeObjects(bd);
}});
})();
(function(){var i="Integer",h="hovered",g="hover-button",f="__mE",d="interval",c="mouseover",b="mouseout",a="qx.ui.form.HoverButton";
qx.Class.define(a,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],construct:function(j,k){arguments.callee.base.call(this,j,k);
this.addListener(c,this._onMouseOver,this);
this.addListener(b,this._onMouseOut,this);
this.__mE=new qx.event.AcceleratingTimer();
this.__mE.addListener(d,this._onInterval,this);
},properties:{appearance:{refine:true,init:g},interval:{check:i,init:80},firstInterval:{check:i,init:200},minTimer:{check:i,init:20},timerDecrease:{check:i,init:2}},members:{__mE:null,_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.__mE.set({interval:this.getInterval(),firstInterval:this.getFirstInterval(),minimum:this.getMinTimer(),decrease:this.getTimerDecrease()}).start();
this.addState(h);
},_onMouseOut:function(e){this.__mE.stop();
this.removeState(h);

if(!this.isEnabled()||e.getTarget()!==this){return;
}},_onInterval:function(){if(this.isEnabled()){this.execute();
}else{this.__mE.stop();
}}},destruct:function(){this._disposeObjects(f);
}});
})();
(function(){var b="qx.ui.form.IBooleanForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var c="middle",b="qx.ui.menu.ButtonLayout",a="left";
qx.Class.define(b,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(j,k){var v=this._getLayoutChildren();
var u;
var n;
var o=[];

for(var i=0,l=v.length;i<l;i++){u=v[i];
n=u.getLayoutProperties().column;
o[n]=u;
}var t=this.__mD(v[0]);
var w=t.getColumnSizes();
var q=t.getSpacingX();
var p=qx.lang.Array.sum(w)+q*(w.length-1);

if(p<j){w[1]+=j-p;
}var x=0,top=0;
var r=qx.ui.layout.Util;

for(var i=0,l=w.length;i<l;i++){u=o[i];

if(u){var m=u.getSizeHint();
var top=r.computeVerticalAlignOffset(u.getAlignY()||c,m.height,k,0,0);
var s=r.computeHorizontalAlignOffset(u.getAlignX()||a,m.width,w[i],u.getMarginLeft(),u.getMarginRight());
u.renderLayout(x+s,top,m.width,m.height);
}x+=w[i]+q;
}},__mD:function(d){while(!(d instanceof qx.ui.menu.Menu)){d=d.getLayoutParent();
}return d;
},_computeSizeHint:function(){var g=this._getLayoutChildren();
var f=0;
var h=0;

for(var i=0,l=g.length;i<l;i++){var e=g[i].getSizeHint();
h+=e.width;
f=Math.max(f,e.height);
}return {width:h,height:f};
}}});
})();
(function(){var f="execute",e="button-backward",d="vertical",c="button-forward",b="menu-slidebar",a="qx.ui.menu.MenuSlideBar";
qx.Class.define(a,{extend:qx.ui.container.SlideBar,construct:function(){arguments.callee.base.call(this,d);
},properties:{appearance:{refine:true,init:b}},members:{_createChildControlImpl:function(g){var h;

switch(g){case c:h=new qx.ui.form.HoverButton();
h.addListener(f,this._onExecuteForward,this);
this._addAt(h,2);
break;
case e:h=new qx.ui.form.HoverButton();
h.addListener(f,this._onExecuteBackward,this);
this._addAt(h,0);
break;
}return h||arguments.callee.base.call(this,g);
}}});
})();
(function(){var g="",f="<br",e=" &nbsp;",d="<br>",c=" ",b="\n",a="qx.bom.String";
qx.Class.define(a,{statics:{TO_CHARCODE:{"quot":34,"amp":38,"lt":60,"gt":62,"nbsp":160,"iexcl":161,"cent":162,"pound":163,"curren":164,"yen":165,"brvbar":166,"sect":167,"uml":168,"copy":169,"ordf":170,"laquo":171,"not":172,"shy":173,"reg":174,"macr":175,"deg":176,"plusmn":177,"sup2":178,"sup3":179,"acute":180,"micro":181,"para":182,"middot":183,"cedil":184,"sup1":185,"ordm":186,"raquo":187,"frac14":188,"frac12":189,"frac34":190,"iquest":191,"Agrave":192,"Aacute":193,"Acirc":194,"Atilde":195,"Auml":196,"Aring":197,"AElig":198,"Ccedil":199,"Egrave":200,"Eacute":201,"Ecirc":202,"Euml":203,"Igrave":204,"Iacute":205,"Icirc":206,"Iuml":207,"ETH":208,"Ntilde":209,"Ograve":210,"Oacute":211,"Ocirc":212,"Otilde":213,"Ouml":214,"times":215,"Oslash":216,"Ugrave":217,"Uacute":218,"Ucirc":219,"Uuml":220,"Yacute":221,"THORN":222,"szlig":223,"agrave":224,"aacute":225,"acirc":226,"atilde":227,"auml":228,"aring":229,"aelig":230,"ccedil":231,"egrave":232,"eacute":233,"ecirc":234,"euml":235,"igrave":236,"iacute":237,"icirc":238,"iuml":239,"eth":240,"ntilde":241,"ograve":242,"oacute":243,"ocirc":244,"otilde":245,"ouml":246,"divide":247,"oslash":248,"ugrave":249,"uacute":250,"ucirc":251,"uuml":252,"yacute":253,"thorn":254,"yuml":255,"fnof":402,"Alpha":913,"Beta":914,"Gamma":915,"Delta":916,"Epsilon":917,"Zeta":918,"Eta":919,"Theta":920,"Iota":921,"Kappa":922,"Lambda":923,"Mu":924,"Nu":925,"Xi":926,"Omicron":927,"Pi":928,"Rho":929,"Sigma":931,"Tau":932,"Upsilon":933,"Phi":934,"Chi":935,"Psi":936,"Omega":937,"alpha":945,"beta":946,"gamma":947,"delta":948,"epsilon":949,"zeta":950,"eta":951,"theta":952,"iota":953,"kappa":954,"lambda":955,"mu":956,"nu":957,"xi":958,"omicron":959,"pi":960,"rho":961,"sigmaf":962,"sigma":963,"tau":964,"upsilon":965,"phi":966,"chi":967,"psi":968,"omega":969,"thetasym":977,"upsih":978,"piv":982,"bull":8226,"hellip":8230,"prime":8242,"Prime":8243,"oline":8254,"frasl":8260,"weierp":8472,"image":8465,"real":8476,"trade":8482,"alefsym":8501,"larr":8592,"uarr":8593,"rarr":8594,"darr":8595,"harr":8596,"crarr":8629,"lArr":8656,"uArr":8657,"rArr":8658,"dArr":8659,"hArr":8660,"forall":8704,"part":8706,"exist":8707,"empty":8709,"nabla":8711,"isin":8712,"notin":8713,"ni":8715,"prod":8719,"sum":8721,"minus":8722,"lowast":8727,"radic":8730,"prop":8733,"infin":8734,"ang":8736,"and":8743,"or":8744,"cap":8745,"cup":8746,"int":8747,"there4":8756,"sim":8764,"cong":8773,"asymp":8776,"ne":8800,"equiv":8801,"le":8804,"ge":8805,"sub":8834,"sup":8835,"sube":8838,"supe":8839,"oplus":8853,"otimes":8855,"perp":8869,"sdot":8901,"lceil":8968,"rceil":8969,"lfloor":8970,"rfloor":8971,"lang":9001,"rang":9002,"loz":9674,"spades":9824,"clubs":9827,"hearts":9829,"diams":9830,"OElig":338,"oelig":339,"Scaron":352,"scaron":353,"Yuml":376,"circ":710,"tilde":732,"ensp":8194,"emsp":8195,"thinsp":8201,"zwnj":8204,"zwj":8205,"lrm":8206,"rlm":8207,"ndash":8211,"mdash":8212,"lsquo":8216,"rsquo":8217,"sbquo":8218,"ldquo":8220,"rdquo":8221,"bdquo":8222,"dagger":8224,"Dagger":8225,"permil":8240,"lsaquo":8249,"rsaquo":8250,"euro":8364},escape:function(h){return qx.util.StringEscape.escape(h,qx.bom.String.FROM_CHARCODE);
},unescape:function(i){return qx.util.StringEscape.unescape(i,qx.bom.String.TO_CHARCODE);
},fromText:function(l){return qx.bom.String.escape(l).replace(/(  |\n)/g,function(j){var k={"  ":e,"\n":d};
return k[j]||j;
});
},toText:function(m){return qx.bom.String.unescape(m.replace(/\s+|<([^>])+>/gi,function(q){if(q.indexOf(f)===0){return b;
}else if(q.length>0&&q.replace(/^\s*/,g).replace(/\s*$/,g)==g){return c;
}else{return g;
}}));
}},defer:function(n,o,p){n.FROM_CHARCODE=qx.lang.Object.invert(n.TO_CHARCODE);
}});
})();
