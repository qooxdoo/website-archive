qx.$$packageData['0773a417258e']={"resources":{}};
(function(){var s="container",r="handle",q="both",p="Integer",o="middle",n="qx.ui.toolbar.Part",m="icon",k="label",j="changeShow",h="_applySpacing",g="toolbar/part";
qx.Class.define(n,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling],construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.HBox);
this._createChildControl(r);
},properties:{appearance:{refine:true,init:g},show:{init:q,check:[q,k,m],inheritable:true,event:j},spacing:{nullable:true,check:p,themeable:true,apply:h}},members:{_createChildControlImpl:function(t){var u;

switch(t){case r:u=new qx.ui.basic.Image();
u.setAlignY(o);
this._add(u);
break;
case s:u=new qx.ui.toolbar.PartContainer;
this._add(u);
break;
}return u||arguments.callee.base.call(this,t);
},getChildrenContainer:function(){return this.getChildControl(s);
},_applySpacing:function(d,e){var f=this.getChildControl(s).getLayout();
d==null?f.resetSpacing():f.setSpacing(d);
},addSeparator:function(){this.add(new qx.ui.toolbar.Separator);
},getMenuButtons:function(){var b=this.getChildren();
var a=[];
var c;

for(var i=0,l=b.length;i<l;i++){c=b[i];

if(c instanceof qx.ui.menubar.Button){a.push(c);
}}return a;
}}});
})();
(function(){var A="icon",z="label",y="arrow",x="shortcut",w="changeLocale",v="qx.dynlocale",u="submenu",t="on",s="String",r="qx.ui.menu.Menu",l="qx.ui.menu.AbstractButton",q="keypress",o="",k="_applyIcon",j="mouseup",n="abstract",m="_applyLabel",p="_applyMenu",i="changeCommand";
qx.Class.define(l,{extend:qx.ui.core.Widget,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],type:n,construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.menu.ButtonLayout);
this.addListener(j,this._onMouseUp);
this.addListener(q,this._onKeyPress);
this.addListener(i,this._onChangeCommand,this);
},properties:{blockToolTip:{refine:true,init:true},label:{check:s,apply:m,nullable:true},menu:{check:r,apply:p,nullable:true},icon:{check:s,apply:k,themeable:true,nullable:true}},members:{_createChildControlImpl:function(d){var f;

switch(d){case A:f=new qx.ui.basic.Image;
f.setAnonymous(true);
this._add(f,{column:0});
break;
case z:f=new qx.ui.basic.Label;
f.setAnonymous(true);
this._add(f,{column:1});
break;
case x:f=new qx.ui.basic.Label;
f.setAnonymous(true);
this._add(f,{column:2});
break;
case y:f=new qx.ui.basic.Image;
f.setAnonymous(true);
this._add(f,{column:3});
break;
}return f||arguments.callee.base.call(this,d);
},_forwardStates:{selected:1},getChildrenSizes:function(){var D=0,E=0,F=0,J=0;

if(this._isChildControlVisible(A)){var K=this.getChildControl(A);
D=K.getMarginLeft()+K.getSizeHint().width+K.getMarginRight();
}
if(this._isChildControlVisible(z)){var H=this.getChildControl(z);
E=H.getMarginLeft()+H.getSizeHint().width+H.getMarginRight();
}
if(this._isChildControlVisible(x)){var G=this.getChildControl(x);
F=G.getMarginLeft()+G.getSizeHint().width+G.getMarginRight();
}
if(this._isChildControlVisible(y)){var I=this.getChildControl(y);
J=I.getMarginLeft()+I.getSizeHint().width+I.getMarginRight();
}return [D,E,F,J];
},_onMouseUp:function(e){},_onKeyPress:function(e){},_onChangeCommand:function(e){var c=e.getData();

if(qx.core.Variant.isSet(v,t)){var a=e.getOldData();

if(!a){qx.locale.Manager.getInstance().addListener(w,this._onChangeLocale,this);
}
if(!c){qx.locale.Manager.getInstance().removeListener(w,this._onChangeLocale,this);
}}var b=c!=null?c.toString():o;
this.getChildControl(x).setValue(b);
},_onChangeLocale:qx.core.Variant.select(v,{"on":function(e){var N=this.getCommand();

if(N!=null){this.getChildControl(x).setValue(N.toString());
}},"off":null}),_applyIcon:function(L,M){if(L){this._showChildControl(A).setSource(L);
}else{this._excludeChildControl(A);
}},_applyLabel:function(B,C){if(B){this._showChildControl(z).setValue(B);
}else{this._excludeChildControl(z);
}},_applyMenu:function(g,h){if(h){h.resetOpener();
h.removeState(u);
}
if(g){this._showChildControl(y);
g.setOpener(this);
g.addState(u);
}else{this._excludeChildControl(y);
}}},destruct:function(){if(this.getMenu()){if(!qx.core.ObjectRegistry.inShutDown){this.getMenu().destroy();
}}
if(qx.core.Variant.isSet(v,t)){qx.locale.Manager.getInstance().removeListener(w,this._onChangeLocale,this);
}}});
})();
(function(){var b="menu-separator",a="qx.ui.menu.Separator";
qx.Class.define(a,{extend:qx.ui.core.Widget,properties:{appearance:{refine:true,init:b},anonymous:{refine:true,init:true}}});
})();
(function(){var g=";",f="&",e='X',d="",c='#',b="&#",a="qx.util.StringEscape";
qx.Bootstrap.define(a,{statics:{escape:function(h,j){var m,o=d;

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
(function(){var r="pressed",q="hovered",p="changeVisibility",o="qx.ui.menu.Menu",n="submenu",m="Enter",l="contextmenu",k="changeMenu",j="qx.ui.form.MenuButton",i="abandoned",h="_applyMenu";
qx.Class.define(j,{extend:qx.ui.form.Button,construct:function(t,u,v){arguments.callee.base.call(this,t,u);
if(v!=null){this.setMenu(v);
}},properties:{menu:{check:o,nullable:true,apply:h,event:k}},members:{_applyMenu:function(a,b){if(b){b.removeListener(p,this._onMenuChange,this);
b.resetOpener();
}
if(a){a.addListener(p,this._onMenuChange,this);
a.setOpener(this);
a.removeState(n);
a.removeState(l);
}},open:function(c){var d=this.getMenu();

if(d){qx.ui.menu.Manager.getInstance().hideAll();
d.setOpener(this);
d.open();
if(c){var f=d.getSelectables()[0];

if(f){d.setSelectedButton(f);
}}}},_onMenuChange:function(e){var g=this.getMenu();

if(g.isVisible()){this.addState(r);
}else{this.removeState(r);
}},_onMouseDown:function(e){var w=this.getMenu();

if(w){if(!w.isVisible()){this.open();
}else{w.exclude();
}e.stopPropagation();
}},_onMouseUp:function(e){arguments.callee.base.call(this,e);
e.stopPropagation();
},_onMouseOver:function(e){this.addState(q);
},_onMouseOut:function(e){this.removeState(q);
},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case m:this.removeState(i);
this.addState(r);
var s=this.getMenu();

if(s){if(!s.isVisible()){this.open();
}else{s.exclude();
}}e.stopPropagation();
}},_onKeyUp:function(e){}},destruct:function(){if(this.getMenu()){if(!qx.core.ObjectRegistry.inShutDown){this.getMenu().destroy();
}}}});
})();
(function(){var h="pressed",g="hovered",f="inherit",d="qx.ui.menubar.Button",c="keydown",b="menubar-button",a="keyup";
qx.Class.define(d,{extend:qx.ui.form.MenuButton,construct:function(k,l,m){arguments.callee.base.call(this,k,l,m);
this.removeListener(c,this._onKeyDown);
this.removeListener(a,this._onKeyUp);
},properties:{appearance:{refine:true,init:b},show:{refine:true,init:f},focusable:{refine:true,init:false}},members:{getMenuBar:function(){var parent=this;

while(parent){if(parent instanceof qx.ui.toolbar.ToolBar){return parent;
}parent=parent.getLayoutParent();
}return null;
},open:function(i){arguments.callee.base.call(this,i);
var menubar=this.getMenuBar();
menubar._setAllowMenuOpenHover(true);
},_onMenuChange:function(e){var j=this.getMenu();
var menubar=this.getMenuBar();

if(j.isVisible()){this.addState(h);
if(menubar){menubar.setOpenMenu(j);
}}else{this.removeState(h);
if(menubar&&menubar.getOpenMenu()==j){menubar.resetOpenMenu();
menubar._setAllowMenuOpenHover(false);
}}},_onMouseUp:function(e){arguments.callee.base.call(this,e);
var n=this.getMenu();

if(n&&n.isVisible()&&!this.hasState(h)){this.addState(h);
}},_onMouseOver:function(e){this.addState(g);
if(this.getMenu()){var menubar=this.getMenuBar();

if(menubar._isAllowMenuOpenHover()){qx.ui.menu.Manager.getInstance().hideAll();
menubar._setAllowMenuOpenHover(true);
if(this.isEnabled()){this.open();
}}}}}});
})();
(function(){var Y="keypress",X="interval",W="keydown",V="mousedown",U="keyup",T="__lr",S="blur",R="Enter",Q="__lt",P="__ls",J="Up",O="Escape",M="qx.ui.menu.Manager",I="Left",H="Down",L="Right",K="singleton",N="Space";
qx.Class.define(M,{type:K,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__lr=[];
var a=document.body;
var b=qx.event.Registration;
b.addListener(window.document.documentElement,V,this._onMouseDown,this,true);
b.addListener(a,W,this._onKeyUpDown,this,true);
b.addListener(a,U,this._onKeyUpDown,this,true);
b.addListener(a,Y,this._onKeyPress,this,true);
qx.bom.Element.addListener(window,S,this.hideAll,this);
this.__ls=new qx.event.Timer;
this.__ls.addListener(X,this._onOpenInterval,this);
this.__lt=new qx.event.Timer;
this.__lt.addListener(X,this._onCloseInterval,this);
},members:{__lu:null,__lv:null,__ls:null,__lt:null,__lr:null,_getChild:function(bw,bx,by,bz){var bA=bw.getChildren();
var length=bA.length;
var bB;

for(var i=bx;i<length&&i>=0;i+=by){bB=bA[i];

if(bB.isEnabled()&&!bB.isAnonymous()){return bB;
}}
if(bz){i=i==length?0:length-1;

for(;i!=bx;i+=by){bB=bA[i];

if(bB.isEnabled()&&!bB.isAnonymous()){return bB;
}}}return null;
},_isInMenu:function(B){while(B){if(B instanceof qx.ui.menu.Menu){return true;
}B=B.getLayoutParent();
}return false;
},_getMenuButton:function(x){while(x){if(x instanceof qx.ui.menu.AbstractButton){return x;
}x=x.getLayoutParent();
}return null;
},add:function(v){{};
var w=this.__lr;
w.push(v);
v.setZIndex(1e6+w.length);
},remove:function(bt){{};
var bu=this.__lr;

if(bu){qx.lang.Array.remove(bu,bt);
}},hideAll:function(){var c=this.__lr;

if(c){for(var i=c.length-1;i>=0;i--){c[i].exclude();
}}},getActiveMenu:function(){var bv=this.__lr;
return bv.length>0?bv[bv.length-1]:null;
},scheduleOpen:function(bb){this.cancelClose(bb);
if(bb.isVisible()){if(this.__lu){this.cancelOpen(this.__lu);
}}else if(this.__lu!=bb){this.__lu=bb;
this.__ls.restartWith(bb.getOpenInterval());
}},scheduleClose:function(d){this.cancelOpen(d);
if(!d.isVisible()){if(this.__lv){this.cancelClose(this.__lv);
}}else if(this.__lv!=d){this.__lv=d;
this.__lt.restartWith(d.getCloseInterval());
}},cancelOpen:function(j){if(this.__lu==j){this.__ls.stop();
this.__lu=null;
}},cancelClose:function(h){if(this.__lv==h){this.__lt.stop();
this.__lv=null;
}},_onOpenInterval:function(e){this.__ls.stop();
this.__lu.open();
this.__lu=null;
},_onCloseInterval:function(e){this.__lt.stop();
this.__lv.exclude();
this.__lv=null;
},_onMouseDown:function(e){var ba=e.getTarget();
ba=qx.ui.core.Widget.getWidgetByElement(ba);
if(ba==null){this.hideAll();
return;
}if(ba.getMenu&&ba.getMenu()&&ba.getMenu().isVisible()){return;
}if(this.__lr.length>0&&!this._isInMenu(ba)){this.hideAll();
}},__lw:{"Enter":1,"Space":1},__lx:{"Escape":1,"Up":1,"Down":1,"Left":1,"Right":1},_onKeyUpDown:function(e){var f=this.getActiveMenu();

if(!f){return;
}var g=e.getKeyIdentifier();

if(this.__lx[g]||(this.__lw[g]&&f.getSelectedButton())){e.stopPropagation();
}},_onKeyPress:function(e){var bf=this.getActiveMenu();

if(!bf){return;
}var bg=e.getKeyIdentifier();
var bi=this.__lx[bg];
var bh=this.__lw[bg];

if(bi){switch(bg){case J:this._onKeyPressUp(bf);
break;
case H:this._onKeyPressDown(bf);
break;
case I:this._onKeyPressLeft(bf);
break;
case L:this._onKeyPressRight(bf);
break;
case O:this.hideAll();
break;
}e.stopPropagation();
e.preventDefault();
}else if(bh){var bj=bf.getSelectedButton();

if(bj){switch(bg){case R:this._onKeyPressEnter(bf,bj,e);
break;
case N:this._onKeyPressSpace(bf,bj,e);
break;
}e.stopPropagation();
e.preventDefault();
}}},_onKeyPressUp:function(C){var D=C.getSelectedButton();
var E=C.getChildren();
var G=D?C.indexOf(D)-1:E.length-1;
var F=this._getChild(C,G,-1,true);
if(F){C.setSelectedButton(F);
}else{C.resetSelectedButton();
}},_onKeyPressDown:function(r){var s=r.getSelectedButton();
var u=s?r.indexOf(s)+1:0;
var t=this._getChild(r,u,1,true);
if(t){r.setSelectedButton(t);
}else{r.resetSelectedButton();
}},_onKeyPressLeft:function(k){var p=k.getOpener();

if(!p){return;
}if(p instanceof qx.ui.menu.Button){var m=p.getLayoutParent();
m.resetOpenedButton();
m.setSelectedButton(p);
}else if(p instanceof qx.ui.menubar.Button){var o=p.getMenuBar().getMenuButtons();
var l=o.indexOf(p);
if(l===-1){return;
}var q=null;
var length=o.length;

for(var i=1;i<=length;i++){var n=o[(l-i+length)%length];

if(n.isEnabled()){q=n;
break;
}}
if(q&&q!=p){q.open(true);
}}},_onKeyPressRight:function(bk){var bm=bk.getSelectedButton();
if(bm){var bl=bm.getMenu();

if(bl){bk.setOpenedButton(bm);
var bs=this._getChild(bl,0,1);

if(bs){bl.setSelectedButton(bs);
}return;
}}else if(!bk.getOpenedButton()){var bs=this._getChild(bk,0,1);

if(bs){bk.setSelectedButton(bs);

if(bs.getMenu()){bk.setOpenedButton(bs);
}return;
}}var bq=bk.getOpener();
if(bq instanceof qx.ui.menu.Button&&bm){while(bq){bq=bq.getLayoutParent();

if(bq instanceof qx.ui.menu.Menu){bq=bq.getOpener();

if(bq instanceof qx.ui.menubar.Button){break;
}}else{break;
}}
if(!bq){return;
}}if(bq instanceof qx.ui.menubar.Button){var bp=bq.getMenuBar().getMenuButtons();
var bn=bp.indexOf(bq);
if(bn===-1){return;
}var br=null;
var length=bp.length;

for(var i=1;i<=length;i++){var bo=bp[(bn+i)%length];

if(bo.isEnabled()){br=bo;
break;
}}
if(br&&br!=bq){br.open(true);
}}},_onKeyPressEnter:function(bc,bd,e){if(bd.hasListener(Y)){var be=e.clone();
be.setBubbles(false);
be.setTarget(bd);
bd.dispatchEvent(be);
}this.hideAll();
},_onKeyPressSpace:function(y,z,e){if(z.hasListener(Y)){var A=e.clone();
A.setBubbles(false);
A.setTarget(z);
z.dispatchEvent(A);
}}},destruct:function(){var bD=qx.event.Registration;
var bC=document.body;
bD.removeListener(window.document.documentElement,V,this._onMouseDown,this,true);
bD.removeListener(bC,W,this._onKeyUpDown,this,true);
bD.removeListener(bC,U,this._onKeyUpDown,this,true);
bD.removeListener(bC,Y,this._onKeyPress,this,true);
this._disposeObjects(P,Q);
this._disposeArray(T);
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
(function(){var o="both",n="qx.ui.menu.Menu",m="_applySpacing",k="icon",j="label",h="changeShow",g="Integer",f="qx.ui.toolbar.ToolBar",e="toolbar",d="changeOpenMenu";
qx.Class.define(f,{extend:qx.ui.core.Widget,include:qx.ui.core.MChildrenHandling,construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.HBox());
},properties:{appearance:{refine:true,init:e},openMenu:{check:n,event:d,nullable:true},show:{init:o,check:[o,j,k],inheritable:true,event:h},spacing:{nullable:true,check:g,themeable:true,apply:m}},members:{__oC:false,_setAllowMenuOpenHover:function(p){this.__oC=p;
},_isAllowMenuOpenHover:function(){return this.__oC;
},_applySpacing:function(q,r){var s=this._getLayout();
q==null?s.resetSpacing():s.setSpacing(q);
},addSpacer:function(){var t=new qx.ui.core.Spacer;
this._add(t,{flex:1});
return t;
},addSeparator:function(){this.add(new qx.ui.toolbar.Separator);
},getMenuButtons:function(){var b=this.getChildren();
var a=[];
var c;

for(var i=0,l=b.length;i<l;i++){c=b[i];

if(c instanceof qx.ui.menubar.Button){a.push(c);
}else if(c instanceof qx.ui.toolbar.Part){a.push.apply(a,c.getMenuButtons());
}}return a;
}}});
})();
(function(){var c="Integer",b="_applyLayoutChange",a="qx.ui.menu.Layout";
qx.Class.define(a,{extend:qx.ui.layout.VBox,properties:{columnSpacing:{check:c,init:0,apply:b},spanColumn:{check:c,init:1,nullable:true,apply:b},iconColumnWidth:{check:c,init:0,themeable:true,apply:b},arrowColumnWidth:{check:c,init:0,themeable:true,apply:b}},members:{__og:null,_computeSizeHint:function(){var q=this._getLayoutChildren();
var o,g,j;
var e=this.getSpanColumn();
var h=this.__og=[0,0,0,0];
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
},getColumnSizes:function(){return this.__og||null;
}},destruct:function(){this.__og=null;
}});
})();
(function(){var f="both",e="toolbar/part/container",d="icon",c="changeShow",b="qx.ui.toolbar.PartContainer",a="label";
qx.Class.define(b,{extend:qx.ui.container.Composite,construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.HBox);
},properties:{appearance:{refine:true,init:e},show:{init:f,check:[f,a,d],inheritable:true,event:c}}});
})();
(function(){var t="horizontal",s="scrollpane",r="vertical",q="button-backward",p="button-forward",o="content",n="execute",m="qx.ui.container.SlideBar",l="scrollY",k="removeChildWidget",g="scrollX",j="_applyOrientation",i="mousewheel",f="Integer",d="slidebar",h="update";
qx.Class.define(m,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MRemoteLayoutHandling],construct:function(I){arguments.callee.base.call(this);
var J=this.getChildControl(s);
this._add(J,{flex:1});

if(I!=null){this.setOrientation(I);
}else{this.initOrientation();
}this.addListener(i,this._onMouseWheel,this);
},properties:{appearance:{refine:true,init:d},orientation:{check:[t,r],init:t,apply:j},scrollStep:{check:f,init:15,themeable:true}},members:{getChildrenContainer:function(){return this.getChildControl(o);
},_createChildControlImpl:function(w){var x;

switch(w){case p:x=new qx.ui.form.RepeatButton;
x.addListener(n,this._onExecuteForward,this);
x.setFocusable(false);
this._addAt(x,2);
break;
case q:x=new qx.ui.form.RepeatButton;
x.addListener(n,this._onExecuteBackward,this);
x.setFocusable(false);
this._addAt(x,0);
break;
case o:x=new qx.ui.container.Composite();
if(qx.bom.client.Engine.GECKO){x.addListener(k,this._onRemoveChild,this);
}this.getChildControl(s).add(x);
break;
case s:x=new qx.ui.core.scroll.ScrollPane();
x.addListener(h,this._onResize,this);
x.addListener(g,this._onScroll,this);
x.addListener(l,this._onScroll,this);
break;
}return x||arguments.callee.base.call(this,w);
},_forwardStates:{barLeft:true,barTop:true,barRight:true,barBottom:true},scrollBy:function(u){var v=this.getChildControl(s);

if(this.getOrientation()===t){v.scrollByX(u);
}else{v.scrollByY(u);
}},scrollTo:function(B){var C=this.getChildControl(s);

if(this.getOrientation()===t){C.scrollToX(B);
}else{C.scrollToY(B);
}},_applyOrientation:function(D,E){var H=[this.getLayout(),this._getLayout()];
var G=this.getChildControl(p);
var F=this.getChildControl(q);
if(E==r){G.removeState(r);
F.removeState(r);
G.addState(t);
F.addState(t);
}else if(E==t){G.removeState(t);
F.removeState(t);
G.addState(r);
F.addState(r);
}
if(D==t){this._setLayout(new qx.ui.layout.HBox());
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
},_onResize:function(e){var content=this.getChildControl(s).getChildren()[0];

if(!content){return;
}var y=this.getInnerSize();
var A=content.getBounds();
var z=(this.getOrientation()===t)?A.width>y.width:A.height>y.height;

if(z){this._showArrows();
this._updateArrowsEnabled();
}else{this._hideArrows();
}},_onExecuteBackward:function(){this.scrollBy(-this.getScrollStep());
},_onExecuteForward:function(){this.scrollBy(this.getScrollStep());
},_onRemoveChild:function(){qx.event.Timer.once(function(){this.scrollBy(this.getChildControl(s).getScrollX());
},this,50);
},_updateArrowsEnabled:function(){var b=this.getChildControl(s);

if(this.getOrientation()===t){var a=b.getScrollX();
var c=b.getScrollMaxX();
}else{var a=b.getScrollY();
var c=b.getScrollMaxY();
}this.getChildControl(q).setEnabled(a>0);
this.getChildControl(p).setEnabled(a<c);
},_showArrows:function(){this._showChildControl(p);
this._showChildControl(q);
},_hideArrows:function(){this._excludeChildControl(p);
this._excludeChildControl(q);
this.scrollTo(0);
}}});
})();
(function(){var O="slidebar",N="Integer",M="resize",L="qx.ui.core.Widget",K="selected",J="visible",I="Boolean",H="mouseout",G="excluded",F="menu",be="_applySelectedButton",bd="_applySpacingY",bc="_blocker",bb="_applyCloseInterval",ba="_applyBlockerColor",Y="_applyIconColumnWidth",X="mouseover",W="_applyArrowColumnWidth",V="qx.ui.menu.Menu",U="Color",S="Number",T="_applyOpenInterval",Q="_applySpacingX",R="_applyBlockerOpacity",P="_applyOpenedButton";
qx.Class.define(V,{extend:qx.ui.core.Widget,include:[qx.ui.core.MPlacement,qx.ui.core.MChildrenHandling],construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.menu.Layout);
var A=this.getApplicationRoot();
A.add(this);
this.addListener(X,this._onMouseOver);
this.addListener(H,this._onMouseOut);
this.addListener(M,this._onResize,this);
A.addListener(M,this._onResize,this);
this._blocker=new qx.ui.core.Blocker(A);
this.initVisibility();
this.initKeepFocus();
this.initKeepActive();
},properties:{appearance:{refine:true,init:F},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},visibility:{refine:true,init:G},keepFocus:{refine:true,init:true},keepActive:{refine:true,init:true},spacingX:{check:N,apply:Q,init:0,themeable:true},spacingY:{check:N,apply:bd,init:0,themeable:true},iconColumnWidth:{check:N,init:0,themeable:true,apply:Y},arrowColumnWidth:{check:N,init:0,themeable:true,apply:W},blockerColor:{check:U,init:null,nullable:true,apply:ba,themeable:true},blockerOpacity:{check:S,init:1,apply:R,themeable:true},selectedButton:{check:L,nullable:true,apply:be},openedButton:{check:L,nullable:true,apply:P},opener:{check:L,nullable:true},openInterval:{check:N,themeable:true,init:250,apply:T},closeInterval:{check:N,themeable:true,init:250,apply:bb},blockBackground:{check:I,themeable:true,init:false}},members:{__kL:null,__kM:null,_blocker:null,open:function(){if(this.getOpener()!=null){this.placeToWidget(this.getOpener());
this.__kO();
this.show();
this._placementTarget=this.getOpener();
}else{this.warn("The menu instance needs a configured 'opener' widget!");
}},openAtMouse:function(e){this.placeToMouse(e);
this.__kO();
this.show();
this._placementTarget={left:e.getDocumentLeft(),top:e.getDocumentTop()};
},openAtPoint:function(l){this.placeToPoint(l);
this.__kO();
this.show();
this._placementTarget=l;
},addSeparator:function(){this.add(new qx.ui.menu.Separator);
},getColumnSizes:function(){return this._getMenuLayout().getColumnSizes();
},getSelectables:function(){var bf=[];
var bg=this.getChildren();

for(var i=0;i<bg.length;i++){if(bg[i].isEnabled()){bf.push(bg[i]);
}}return bf;
},_applyIconColumnWidth:function(j,k){this._getMenuLayout().setIconColumnWidth(j);
},_applyArrowColumnWidth:function(bo,bp){this._getMenuLayout().setArrowColumnWidth(bo);
},_applySpacingX:function(B,C){this._getMenuLayout().setColumnSpacing(B);
},_applySpacingY:function(c,d){this._getMenuLayout().setSpacing(c);
},_applyVisibility:function(p,q){arguments.callee.base.call(this,p,q);
var r=qx.ui.menu.Manager.getInstance();

if(p===J){r.add(this);
var s=this.getParentMenu();

if(s){s.setOpenedButton(this.getOpener());
}}else if(q===J){r.remove(this);
var s=this.getParentMenu();

if(s&&s.getOpenedButton()==this.getOpener()){s.resetOpenedButton();
}this.resetOpenedButton();
this.resetSelectedButton();
}this.__kN();
},__kN:function(){if(this.isVisible()){if(this.getBlockBackground()){var m=this.getZIndex();
this._blocker.blockContent(m-1);
}}else{if(this._blocker.isContentBlocked()){this._blocker.unblockContent();
}}},getParentMenu:function(){var E=this.getOpener();

if(!E||!(E instanceof qx.ui.menu.AbstractButton)){return null;
}
while(E&&!(E instanceof qx.ui.menu.Menu)){E=E.getLayoutParent();
}return E;
},_applySelectedButton:function(n,o){if(o){o.removeState(K);
}
if(n){n.addState(K);
}},_applyOpenedButton:function(bm,bn){if(bn){bn.getMenu().exclude();
}
if(bm){bm.getMenu().open();
}},_applyBlockerColor:function(u,v){this._blocker.setColor(u);
},_applyBlockerOpacity:function(a,b){this._blocker.setOpacity(a);
},_createChildControlImpl:function(bh){var bi;

switch(bh){case O:var bi=new qx.ui.menu.MenuSlideBar();
var bk=this._getLayout();
this._setLayout(new qx.ui.layout.Grow());
var bj=bi.getLayout();
bi.setLayout(bk);
bj.dispose();
var bl=qx.lang.Array.clone(this.getChildren());

for(var i=0;i<bl.length;i++){bi.add(bl[i]);
}this.removeListener(M,this._onResize,this);
bi.getChildrenContainer().addListener(M,this._onResize,this);
this.add(bi);
break;
}return bi||arguments.callee.base.call(this,bh);
},_getMenuLayout:function(){if(this.hasChildControl(O)){return this.getChildControl(O).getChildrenContainer().getLayout();
}else{return this._getLayout();
}},_getMenuBounds:function(){if(this.hasChildControl(O)){return this.getChildControl(O).getChildrenContainer().getBounds();
}else{return this.getBounds();
}},_computePlacementSize:function(){return this._getMenuBounds();
},__kO:function(){var g=this._getMenuBounds();

if(!g){this.addListenerOnce(M,this.__kO,this);
return;
}var f=this.getLayoutParent().getBounds().height;
var top=this.getLayoutProperties().top;
var h=this.getLayoutProperties().left;
if(top<0){this._assertSlideBar(function(){this.setHeight(g.height+top);
this.moveTo(h,0);
});
}else if(top+g.height>f){this._assertSlideBar(function(){this.setHeight(f-top);
});
}else{this.setHeight(null);
}},_assertSlideBar:function(D){if(this.hasChildControl(O)){return D.call(this);
}this.__kM=D;
qx.ui.core.queue.Widget.add(this);
},syncWidget:function(){this.getChildControl(O);

if(this.__kM){this.__kM.call(this);
delete this.__kM;
}},_onResize:function(){if(this.isVisible()){var t=this._placementTarget;

if(!t){return;
}else if(t instanceof qx.ui.core.Widget){this.placeToWidget(t);
}else if(t.top!==undefined){this.placeToPoint(t);
}else{throw new Error("Unknown target: "+t);
}this.__kO();
}},_onMouseOver:function(e){var x=qx.ui.menu.Manager.getInstance();
x.cancelClose(this);
var y=e.getTarget();

if(y.isEnabled()&&y instanceof qx.ui.menu.AbstractButton){this.setSelectedButton(y);
var w=y.getMenu&&y.getMenu();

if(w){w.setOpener(y);
x.scheduleOpen(w);
this.__kL=w;
}else{var z=this.getOpenedButton();

if(z){x.scheduleClose(z.getMenu());
}
if(this.__kL){x.cancelOpen(this.__kL);
this.__kL=null;
}}}else if(!this.getOpenedButton()){this.resetSelectedButton();
}},_onMouseOut:function(e){var bq=qx.ui.menu.Manager.getInstance();
if(!qx.ui.core.Widget.contains(this,e.getRelatedTarget())){var br=this.getOpenedButton();
br?this.setSelectedButton(br):this.resetSelectedButton();
if(br){bq.cancelClose(br.getMenu());
}if(this.__kL){bq.cancelOpen(this.__kL);
}}}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.ui.menu.Manager.getInstance().remove(this);
}this.getApplicationRoot().removeListener(M,this._onResize,this);
this._placementTarget=null;
this._disposeObjects(bc);
}});
})();
(function(){var i="Integer",h="hovered",g="hover-button",f="interval",d="mouseover",c="mouseout",b="__kP",a="qx.ui.form.HoverButton";
qx.Class.define(a,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],construct:function(j,k){arguments.callee.base.call(this,j,k);
this.addListener(d,this._onMouseOver,this);
this.addListener(c,this._onMouseOut,this);
this.__kP=new qx.event.AcceleratingTimer();
this.__kP.addListener(f,this._onInterval,this);
},properties:{appearance:{refine:true,init:g},interval:{check:i,init:80},firstInterval:{check:i,init:200},minTimer:{check:i,init:20},timerDecrease:{check:i,init:2}},members:{__kP:null,_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.__kP.set({interval:this.getInterval(),firstInterval:this.getFirstInterval(),minimum:this.getMinTimer(),decrease:this.getTimerDecrease()}).start();
this.addState(h);
},_onMouseOut:function(e){this.__kP.stop();
this.removeState(h);

if(!this.isEnabled()||e.getTarget()!==this){return;
}},_onInterval:function(){if(this.isEnabled()){this.execute();
}else{this.__kP.stop();
}}},destruct:function(){this._disposeObjects(b);
}});
})();
(function(){var b="qx.ui.form.IBooleanForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var c="middle",b="qx.ui.menu.ButtonLayout",a="left";
qx.Class.define(b,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(e,f){var r=this._getLayoutChildren();
var q;
var h;
var j=[];

for(var i=0,l=r.length;i<l;i++){q=r[i];
h=q.getLayoutProperties().column;
j[h]=q;
}var p=this.__li(r[0]);
var s=p.getColumnSizes();
var m=p.getSpacingX();
var k=qx.lang.Array.sum(s)+m*(s.length-1);

if(k<e){s[1]+=e-k;
}var t=0,top=0;
var n=qx.ui.layout.Util;

for(var i=0,l=s.length;i<l;i++){q=j[i];

if(q){var g=q.getSizeHint();
var top=n.computeVerticalAlignOffset(q.getAlignY()||c,g.height,f,0,0);
var o=n.computeHorizontalAlignOffset(q.getAlignX()||a,g.width,s[i],q.getMarginLeft(),q.getMarginRight());
q.renderLayout(t+o,top,g.width,g.height);
}t+=s[i]+m;
}},__li:function(d){while(!(d instanceof qx.ui.menu.Menu)){d=d.getLayoutParent();
}return d;
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
(function(){var m="\n",l="",k=" &nbsp;",j="<br>",i=" ",h="qx.bom.String";
qx.Class.define(h,{statics:{TO_CHARCODE:{"quot":34,"amp":38,"lt":60,"gt":62,"nbsp":160,"iexcl":161,"cent":162,"pound":163,"curren":164,"yen":165,"brvbar":166,"sect":167,"uml":168,"copy":169,"ordf":170,"laquo":171,"not":172,"shy":173,"reg":174,"macr":175,"deg":176,"plusmn":177,"sup2":178,"sup3":179,"acute":180,"micro":181,"para":182,"middot":183,"cedil":184,"sup1":185,"ordm":186,"raquo":187,"frac14":188,"frac12":189,"frac34":190,"iquest":191,"Agrave":192,"Aacute":193,"Acirc":194,"Atilde":195,"Auml":196,"Aring":197,"AElig":198,"Ccedil":199,"Egrave":200,"Eacute":201,"Ecirc":202,"Euml":203,"Igrave":204,"Iacute":205,"Icirc":206,"Iuml":207,"ETH":208,"Ntilde":209,"Ograve":210,"Oacute":211,"Ocirc":212,"Otilde":213,"Ouml":214,"times":215,"Oslash":216,"Ugrave":217,"Uacute":218,"Ucirc":219,"Uuml":220,"Yacute":221,"THORN":222,"szlig":223,"agrave":224,"aacute":225,"acirc":226,"atilde":227,"auml":228,"aring":229,"aelig":230,"ccedil":231,"egrave":232,"eacute":233,"ecirc":234,"euml":235,"igrave":236,"iacute":237,"icirc":238,"iuml":239,"eth":240,"ntilde":241,"ograve":242,"oacute":243,"ocirc":244,"otilde":245,"ouml":246,"divide":247,"oslash":248,"ugrave":249,"uacute":250,"ucirc":251,"uuml":252,"yacute":253,"thorn":254,"yuml":255,"fnof":402,"Alpha":913,"Beta":914,"Gamma":915,"Delta":916,"Epsilon":917,"Zeta":918,"Eta":919,"Theta":920,"Iota":921,"Kappa":922,"Lambda":923,"Mu":924,"Nu":925,"Xi":926,"Omicron":927,"Pi":928,"Rho":929,"Sigma":931,"Tau":932,"Upsilon":933,"Phi":934,"Chi":935,"Psi":936,"Omega":937,"alpha":945,"beta":946,"gamma":947,"delta":948,"epsilon":949,"zeta":950,"eta":951,"theta":952,"iota":953,"kappa":954,"lambda":955,"mu":956,"nu":957,"xi":958,"omicron":959,"pi":960,"rho":961,"sigmaf":962,"sigma":963,"tau":964,"upsilon":965,"phi":966,"chi":967,"psi":968,"omega":969,"thetasym":977,"upsih":978,"piv":982,"bull":8226,"hellip":8230,"prime":8242,"Prime":8243,"oline":8254,"frasl":8260,"weierp":8472,"image":8465,"real":8476,"trade":8482,"alefsym":8501,"larr":8592,"uarr":8593,"rarr":8594,"darr":8595,"harr":8596,"crarr":8629,"lArr":8656,"uArr":8657,"rArr":8658,"dArr":8659,"hArr":8660,"forall":8704,"part":8706,"exist":8707,"empty":8709,"nabla":8711,"isin":8712,"notin":8713,"ni":8715,"prod":8719,"sum":8721,"minus":8722,"lowast":8727,"radic":8730,"prop":8733,"infin":8734,"ang":8736,"and":8743,"or":8744,"cap":8745,"cup":8746,"int":8747,"there4":8756,"sim":8764,"cong":8773,"asymp":8776,"ne":8800,"equiv":8801,"le":8804,"ge":8805,"sub":8834,"sup":8835,"sube":8838,"supe":8839,"oplus":8853,"otimes":8855,"perp":8869,"sdot":8901,"lceil":8968,"rceil":8969,"lfloor":8970,"rfloor":8971,"lang":9001,"rang":9002,"loz":9674,"spades":9824,"clubs":9827,"hearts":9829,"diams":9830,"OElig":338,"oelig":339,"Scaron":352,"scaron":353,"Yuml":376,"circ":710,"tilde":732,"ensp":8194,"emsp":8195,"thinsp":8201,"zwnj":8204,"zwj":8205,"lrm":8206,"rlm":8207,"ndash":8211,"mdash":8212,"lsquo":8216,"rsquo":8217,"sbquo":8218,"ldquo":8220,"rdquo":8221,"bdquo":8222,"dagger":8224,"Dagger":8225,"permil":8240,"lsaquo":8249,"rsaquo":8250,"euro":8364},escape:function(g){return qx.util.StringEscape.escape(g,qx.bom.String.FROM_CHARCODE);
},unescape:function(n){return qx.util.StringEscape.unescape(n,qx.bom.String.TO_CHARCODE);
},fromText:function(f){return qx.bom.String.escape(f).replace(/(  |\n)/g,function(a){var b={"  ":k,"\n":j};
return b[a]||a;
});
},toText:function(o){return qx.bom.String.unescape(o.replace(/\s+|<([^>])+>/gi,function(p){if(/\s+/.test(p)){return i;
}else if(/^<BR|^<br/gi.test(p)){return m;
}else{return l;
}}));
}},defer:function(c,d,e){c.FROM_CHARCODE=qx.lang.Object.invert(c.TO_CHARCODE);
}});
})();
