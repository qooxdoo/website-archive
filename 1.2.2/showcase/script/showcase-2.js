qx.$$packageData['f9d8156dac8f']={"locales":{},"resources":{},"translations":{}};

qx.Part.$$notifyLoad("f9d8156dac8f", function() {
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
},properties:{blockToolTip:{refine:true,init:true},label:{check:l,apply:f,nullable:true},menu:{check:k,apply:i,nullable:true,dereference:true},icon:{check:l,apply:c,themeable:true,nullable:true}},members:{_createChildControlImpl:function(x){var y;

switch(x){case t:y=new qx.ui.basic.Image;
y.setAnonymous(true);
this._add(y,{column:0});
break;
case s:y=new qx.ui.basic.Label;
y.setAnonymous(true);
this._add(y,{column:1});
break;
case q:y=new qx.ui.basic.Label;
y.setAnonymous(true);
this._add(y,{column:2});
break;
case r:y=new qx.ui.basic.Image;
y.setAnonymous(true);
this._add(y,{column:3});
break;
}return y||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,x);
},_forwardStates:{selected:1},getChildrenSizes:function(){var E=0,F=0,G=0,K=0;

if(this._isChildControlVisible(t)){var L=this.getChildControl(t);
E=L.getMarginLeft()+L.getSizeHint().width+L.getMarginRight();
}
if(this._isChildControlVisible(s)){var I=this.getChildControl(s);
F=I.getMarginLeft()+I.getSizeHint().width+I.getMarginRight();
}
if(this._isChildControlVisible(q)){var H=this.getChildControl(q);
G=H.getMarginLeft()+H.getSizeHint().width+H.getMarginRight();
}
if(this._isChildControlVisible(r)){var J=this.getChildControl(r);
K=J.getMarginLeft()+J.getSizeHint().width+J.getMarginRight();
}return [E,F,G,K];
},_onMouseUp:function(e){},_onKeyPress:function(e){},_onChangeCommand:function(e){var D=e.getData();

if(qx.core.Variant.isSet(o,m)){var B=e.getOldData();

if(!B){qx.locale.Manager.getInstance().addListener(p,this._onChangeLocale,this);
}
if(!D){qx.locale.Manager.getInstance().removeListener(p,this._onChangeLocale,this);
}}var C=D!=null?D.toString():h;
this.getChildControl(q).setValue(C);
},_onChangeLocale:qx.core.Variant.select(o,{"on":function(e){var w=this.getCommand();

if(w!=null){this.getChildControl(q).setValue(w.toString());
}},"off":null}),_applyIcon:function(M,N){if(M){this._showChildControl(t).setSource(M);
}else{this._excludeChildControl(t);
}},_applyLabel:function(z,A){if(z){this._showChildControl(s).setValue(z);
}else{this._excludeChildControl(s);
}},_applyMenu:function(u,v){if(v){v.resetOpener();
v.removeState(n);
}
if(u){this._showChildControl(r);
u.setOpener(this);
u.addState(n);
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
qx.Class.define(c,{extend:qx.ui.form.Button,construct:function(u,v,w){qx.ui.form.Button.call(this,u,v);
if(w!=null){this.setMenu(w);
}},properties:{menu:{check:i,nullable:true,apply:a,event:d}},members:{_applyMenu:function(m,n){if(n){n.removeListener(j,this._onMenuChange,this);
n.resetOpener();
}
if(m){m.addListener(j,this._onMenuChange,this);
m.setOpener(this);
m.removeState(h);
m.removeState(f);
}},open:function(o){var p=this.getMenu();

if(p){qx.ui.menu.Manager.getInstance().hideAll();
p.setOpener(this);
p.open();
if(o){var q=p.getSelectables()[0];

if(q){p.setSelectedButton(q);
}}}},_onMenuChange:function(e){var r=this.getMenu();

if(r.isVisible()){this.addState(l);
}else{this.removeState(l);
}},_onMouseDown:function(e){qx.ui.form.Button.prototype._onMouseDown.call(this,e);
var t=this.getMenu();

if(t){if(!t.isVisible()){this.open();
}else{t.exclude();
}e.stopPropagation();
}},_onMouseUp:function(e){qx.ui.form.Button.prototype._onMouseUp.call(this,e);
e.stopPropagation();
},_onMouseOver:function(e){this.addState(k);
},_onMouseOut:function(e){this.removeState(k);
},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case g:this.removeState(b);
this.addState(l);
var s=this.getMenu();

if(s){if(!s.isVisible()){this.open();
}else{s.exclude();
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
},open:function(m){qx.ui.form.MenuButton.prototype.open.call(this,m);
var menubar=this.getMenuBar();
menubar._setAllowMenuOpenHover(true);
},_onMenuChange:function(e){var n=this.getMenu();
var menubar=this.getMenuBar();

if(n.isVisible()){this.addState(h);
if(menubar){menubar.setOpenMenu(n);
}}else{this.removeState(h);
if(menubar&&menubar.getOpenMenu()==n){menubar.resetOpenMenu();
menubar._setAllowMenuOpenHover(false);
}}},_onMouseUp:function(e){qx.ui.form.MenuButton.prototype._onMouseUp.call(this,e);
var l=this.getMenu();

if(l&&l.isVisible()&&!this.hasState(h)){this.addState(h);
}},_onMouseOver:function(e){this.addState(g);
if(this.getMenu()){var menubar=this.getMenuBar();

if(menubar._isAllowMenuOpenHover()){qx.ui.menu.Manager.getInstance().hideAll();
menubar._setAllowMenuOpenHover(true);
if(this.isEnabled()){this.open();
}}}}}});
})();
(function(){var v="keypress",u="interval",t="keydown",s="mousedown",r="keyup",q="blur",p="Enter",o="__nw",n="__nv",m="__nu",f="Up",l="Escape",j="qx.ui.menu.Manager",d="Left",c="Down",h="Right",g="singleton",k="Space";
qx.Class.define(j,{type:g,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__nu=[];
var bk=document.body;
var bl=qx.event.Registration;
bl.addListener(window.document.documentElement,s,this._onMouseDown,this,true);
bl.addListener(bk,t,this._onKeyUpDown,this,true);
bl.addListener(bk,r,this._onKeyUpDown,this,true);
bl.addListener(bk,v,this._onKeyPress,this,true);
qx.bom.Element.addListener(window,q,this.hideAll,this);
this.__nv=new qx.event.Timer;
this.__nv.addListener(u,this._onOpenInterval,this);
this.__nw=new qx.event.Timer;
this.__nw.addListener(u,this._onCloseInterval,this);
},members:{__nx:null,__ny:null,__nv:null,__nw:null,__nu:null,_getChild:function(bn,bo,bp,bq){var br=bn.getChildren();
var length=br.length;
var bs;

for(var i=bo;i<length&&i>=0;i+=bp){bs=br[i];

if(bs.isEnabled()&&!bs.isAnonymous()){return bs;
}}
if(bq){i=i==length?0:length-1;

for(;i!=bo;i+=bp){bs=br[i];

if(bs.isEnabled()&&!bs.isAnonymous()){return bs;
}}}return null;
},_isInMenu:function(y){while(y){if(y instanceof qx.ui.menu.Menu){return true;
}y=y.getLayoutParent();
}return false;
},_getMenuButton:function(b){while(b){if(b instanceof qx.ui.menu.AbstractButton){return b;
}b=b.getLayoutParent();
}return null;
},add:function(R){{};
var S=this.__nu;
S.push(R);
R.setZIndex(1e6+S.length);
},remove:function(T){{};
var U=this.__nu;

if(U){qx.lang.Array.remove(U,T);
}},hideAll:function(){var bc=this.__nu;

if(bc){for(var i=bc.length-1;i>=0;i--){bc[i].exclude();
}}},getActiveMenu:function(){var bm=this.__nu;
return bm.length>0?bm[bm.length-1]:null;
},scheduleOpen:function(bg){this.cancelClose(bg);
if(bg.isVisible()){if(this.__nx){this.cancelOpen(this.__nx);
}}else if(this.__nx!=bg){this.__nx=bg;
this.__nv.restartWith(bg.getOpenInterval());
}},scheduleClose:function(z){this.cancelOpen(z);
if(!z.isVisible()){if(this.__ny){this.cancelClose(this.__ny);
}}else if(this.__ny!=z){this.__ny=z;
this.__nw.restartWith(z.getCloseInterval());
}},cancelOpen:function(H){if(this.__nx==H){this.__nv.stop();
this.__nx=null;
}},cancelClose:function(a){if(this.__ny==a){this.__nw.stop();
this.__ny=null;
}},_onOpenInterval:function(e){this.__nv.stop();
this.__nx.open();
this.__nx=null;
},_onCloseInterval:function(e){this.__nw.stop();
this.__ny.exclude();
this.__ny=null;
},_onMouseDown:function(e){var bb=e.getTarget();
bb=qx.ui.core.Widget.getWidgetByElement(bb,true);
if(bb==null){this.hideAll();
return;
}if(bb.getMenu&&bb.getMenu()&&bb.getMenu().isVisible()){return;
}if(this.__nu.length>0&&!this._isInMenu(bb)){this.hideAll();
}},__nz:{"Enter":1,"Space":1},__nA:{"Escape":1,"Up":1,"Down":1,"Left":1,"Right":1},_onKeyUpDown:function(e){var bt=this.getActiveMenu();

if(!bt){return;
}var bu=e.getKeyIdentifier();

if(this.__nA[bu]||(this.__nz[bu]&&bt.getSelectedButton())){e.stopPropagation();
}},_onKeyPress:function(e){var bv=this.getActiveMenu();

if(!bv){return;
}var bw=e.getKeyIdentifier();
var by=this.__nA[bw];
var bx=this.__nz[bw];

if(by){switch(bw){case f:this._onKeyPressUp(bv);
break;
case c:this._onKeyPressDown(bv);
break;
case d:this._onKeyPressLeft(bv);
break;
case h:this._onKeyPressRight(bv);
break;
case l:this.hideAll();
break;
}e.stopPropagation();
e.preventDefault();
}else if(bx){var bz=bv.getSelectedButton();

if(bz){switch(bw){case p:this._onKeyPressEnter(bv,bz,e);
break;
case k:this._onKeyPressSpace(bv,bz,e);
break;
}e.stopPropagation();
e.preventDefault();
}}},_onKeyPressUp:function(V){var W=V.getSelectedButton();
var X=V.getChildren();
var ba=W?V.indexOf(W)-1:X.length-1;
var Y=this._getChild(V,ba,-1,true);
if(Y){V.setSelectedButton(Y);
}else{V.resetSelectedButton();
}},_onKeyPressDown:function(bA){var bB=bA.getSelectedButton();
var bD=bB?bA.indexOf(bB)+1:0;
var bC=this._getChild(bA,bD,1,true);
if(bC){bA.setSelectedButton(bC);
}else{bA.resetSelectedButton();
}},_onKeyPressLeft:function(A){var F=A.getOpener();

if(!F){return;
}if(F instanceof qx.ui.menu.AbstractButton){var C=F.getLayoutParent();
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
}}},_onKeyPressRight:function(I){var K=I.getSelectedButton();
if(K){var J=K.getMenu();

if(J){I.setOpenedButton(K);
var Q=this._getChild(J,0,1);

if(Q){J.setSelectedButton(Q);
}return;
}}else if(!I.getOpenedButton()){var Q=this._getChild(I,0,1);

if(Q){I.setSelectedButton(Q);

if(Q.getMenu()){I.setOpenedButton(Q);
}return;
}}var O=I.getOpener();
if(O instanceof qx.ui.menu.Button&&K){while(O){O=O.getLayoutParent();

if(O instanceof qx.ui.menu.Menu){O=O.getOpener();

if(O instanceof qx.ui.menubar.Button){break;
}}else{break;
}}
if(!O){return;
}}if(O instanceof qx.ui.menubar.Button){var N=O.getMenuBar().getMenuButtons();
var L=N.indexOf(O);
if(L===-1){return;
}var P=null;
var length=N.length;

for(var i=1;i<=length;i++){var M=N[(L+i)%length];

if(M.isEnabled()){P=M;
break;
}}
if(P&&P!=O){P.open(true);
}}},_onKeyPressEnter:function(bd,be,e){if(be.hasListener(v)){var bf=e.clone();
bf.setBubbles(false);
bf.setTarget(be);
be.dispatchEvent(bf);
}this.hideAll();
},_onKeyPressSpace:function(bh,bi,e){if(bi.hasListener(v)){var bj=e.clone();
bj.setBubbles(false);
bj.setTarget(bi);
bi.dispatchEvent(bj);
}}},destruct:function(){var x=qx.event.Registration;
var w=document.body;
x.removeListener(window.document.documentElement,s,this._onMouseDown,this,true);
x.removeListener(w,t,this._onKeyUpDown,this,true);
x.removeListener(w,r,this._onKeyUpDown,this,true);
x.removeListener(w,v,this._onKeyPress,this,true);
this._disposeObjects(n,o);
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
}},properties:{appearance:{refine:true,init:a}},members:{_onMouseUp:function(e){if(e.isLeftPressed()){this.execute();
if(this.getMenu()){return;
}}qx.ui.menu.Manager.getInstance().hideAll();
},_onKeyPress:function(e){this.execute();
}}});
})();
(function(){var k="both",j="qx.ui.menu.Menu",h="_applySpacing",g="icon",f="label",e="changeShow",d="Integer",c="qx.ui.toolbar.ToolBar",b="toolbar",a="changeOpenMenu";
qx.Class.define(c,{extend:qx.ui.core.Widget,include:qx.ui.core.MChildrenHandling,construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.HBox());
},properties:{appearance:{refine:true,init:b},openMenu:{check:j,event:a,nullable:true},show:{init:k,check:[k,f,g],inheritable:true,event:e},spacing:{nullable:true,check:d,themeable:true,apply:h}},members:{__qG:false,_setAllowMenuOpenHover:function(s){this.__qG=s;
},_isAllowMenuOpenHover:function(){return this.__qG;
},_applySpacing:function(m,n){var o=this._getLayout();
m==null?o.resetSpacing():o.setSpacing(m);
},addSpacer:function(){var t=new qx.ui.core.Spacer;
this._add(t,{flex:1});
return t;
},addSeparator:function(){this.add(new qx.ui.toolbar.Separator);
},getMenuButtons:function(){var q=this.getChildren();
var p=[];
var r;

for(var i=0,l=q.length;i<l;i++){r=q[i];

if(r instanceof qx.ui.menubar.Button){p.push(r);
}else if(r instanceof qx.ui.toolbar.Part){p.push.apply(p,r.getMenuButtons());
}}return p;
}}});
})();
(function(){var c="Integer",b="_applyLayoutChange",a="qx.ui.menu.Layout";
qx.Class.define(a,{extend:qx.ui.layout.VBox,properties:{columnSpacing:{check:c,init:0,apply:b},spanColumn:{check:c,init:1,nullable:true,apply:b},iconColumnWidth:{check:c,init:0,themeable:true,apply:b},arrowColumnWidth:{check:c,init:0,themeable:true,apply:b}},members:{__qf:null,_computeSizeHint:function(){var q=this._getLayoutChildren();
var o,g,j;
var e=this.getSpanColumn();
var h=this.__qf=[0,0,0,0];
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
},getColumnSizes:function(){return this.__qf||null;
}},destruct:function(){this.__qf=null;
}});
})();
(function(){var f="both",e="toolbar/part/container",d="icon",c="changeShow",b="qx.ui.toolbar.PartContainer",a="label";
qx.Class.define(b,{extend:qx.ui.container.Composite,construct:function(){qx.ui.container.Composite.call(this);
this._setLayout(new qx.ui.layout.HBox);
},properties:{appearance:{refine:true,init:e},show:{init:f,check:[f,a,d],inheritable:true,event:c}}});
})();
(function(){var q="horizontal",p="scrollpane",o="vertical",n="button-backward",m="button-forward",l="content",k="execute",j="qx.ui.container.SlideBar",i="scrollY",h="removeChildWidget",c="scrollX",g="_applyOrientation",f="mousewheel",b="Integer",a="slidebar",d="update";
qx.Class.define(j,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MRemoteLayoutHandling],construct:function(v){qx.ui.core.Widget.call(this);
var w=this.getChildControl(p);
this._add(w,{flex:1});

if(v!=null){this.setOrientation(v);
}else{this.initOrientation();
}this.addListener(f,this._onMouseWheel,this);
},properties:{appearance:{refine:true,init:a},orientation:{check:[q,o],init:q,apply:g},scrollStep:{check:b,init:15,themeable:true}},members:{getChildrenContainer:function(){return this.getChildControl(l);
},_createChildControlImpl:function(t){var u;

switch(t){case m:u=new qx.ui.form.RepeatButton;
u.addListener(k,this._onExecuteForward,this);
u.setFocusable(false);
this._addAt(u,2);
break;
case n:u=new qx.ui.form.RepeatButton;
u.addListener(k,this._onExecuteBackward,this);
u.setFocusable(false);
this._addAt(u,0);
break;
case l:u=new qx.ui.container.Composite();
if(qx.bom.client.Engine.GECKO){u.addListener(h,this._onRemoveChild,this);
}this.getChildControl(p).add(u);
break;
case p:u=new qx.ui.core.scroll.ScrollPane();
u.addListener(d,this._onResize,this);
u.addListener(c,this._onScroll,this);
u.addListener(i,this._onScroll,this);
break;
}return u||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,t);
},_forwardStates:{barLeft:true,barTop:true,barRight:true,barBottom:true},scrollBy:function(x){var y=this.getChildControl(p);

if(this.getOrientation()===q){y.scrollByX(x);
}else{y.scrollByY(x);
}},scrollTo:function(r){var s=this.getChildControl(p);

if(this.getOrientation()===q){s.scrollToX(r);
}else{s.scrollToY(r);
}},_applyOrientation:function(C,D){var G=[this.getLayout(),this._getLayout()];
var F=this.getChildControl(m);
var E=this.getChildControl(n);
if(D==o){F.removeState(o);
E.removeState(o);
F.addState(q);
E.addState(q);
}else if(D==q){F.removeState(q);
E.removeState(q);
F.addState(o);
E.addState(o);
}
if(C==q){this._setLayout(new qx.ui.layout.HBox());
this.setLayout(new qx.ui.layout.HBox());
}else{this._setLayout(new qx.ui.layout.VBox());
this.setLayout(new qx.ui.layout.VBox());
}
if(G[0]){G[0].dispose();
}
if(G[1]){G[1].dispose();
}},_onMouseWheel:function(e){this.scrollBy(e.getWheelDelta()*this.getScrollStep());
e.stop();
},_onScroll:function(){this._updateArrowsEnabled();
},_onResize:function(e){var content=this.getChildControl(p).getChildren()[0];

if(!content){return;
}var z=this.getInnerSize();
var B=content.getBounds();
var A=(this.getOrientation()===q)?B.width>z.width:B.height>z.height;

if(A){this._showArrows();
this._updateArrowsEnabled();
}else{this._hideArrows();
}},_onExecuteBackward:function(){this.scrollBy(-this.getScrollStep());
},_onExecuteForward:function(){this.scrollBy(this.getScrollStep());
},_onRemoveChild:function(){qx.event.Timer.once(function(){this.scrollBy(this.getChildControl(p).getScrollX());
},this,50);
},_updateArrowsEnabled:function(){var I=this.getChildControl(p);

if(this.getOrientation()===q){var H=I.getScrollX();
var J=I.getScrollMaxX();
}else{var H=I.getScrollY();
var J=I.getScrollMaxY();
}this.getChildControl(n).setEnabled(H>0);
this.getChildControl(m).setEnabled(H<J);
},_showArrows:function(){this._showChildControl(m);
this._showChildControl(n);
},_hideArrows:function(){this._excludeChildControl(m);
this._excludeChildControl(n);
this.scrollTo(0);
}}});
})();
(function(){var ba="slidebar",Y="Integer",X="resize",W="qx.ui.core.Widget",V="selected",U="visible",T="Boolean",S="mouseout",R="excluded",Q="menu",bp="_applySelectedButton",bo="_applyOpenInterval",bn="_applySpacingY",bm="_blocker",bl="_applyCloseInterval",bk="_applyBlockerColor",bj="_applyIconColumnWidth",bi="mouseover",bh="qx.ui.menu.Menu",bg="Color",be="Number",bf="_applyOpenedButton",bc="_applySpacingX",bd="_applyBlockerOpacity",bb="_applyArrowColumnWidth";
qx.Class.define(bh,{extend:qx.ui.core.Widget,include:[qx.ui.core.MPlacement,qx.ui.core.MRemoteChildrenHandling],construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.menu.Layout);
var F=this.getApplicationRoot();
F.add(this);
this.addListener(bi,this._onMouseOver);
this.addListener(S,this._onMouseOut);
this.addListener(X,this._onResize,this);
F.addListener(X,this._onResize,this);
this._blocker=new qx.ui.core.Blocker(F);
this.initVisibility();
this.initKeepFocus();
this.initKeepActive();
},properties:{appearance:{refine:true,init:Q},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},visibility:{refine:true,init:R},keepFocus:{refine:true,init:true},keepActive:{refine:true,init:true},spacingX:{check:Y,apply:bc,init:0,themeable:true},spacingY:{check:Y,apply:bn,init:0,themeable:true},iconColumnWidth:{check:Y,init:0,themeable:true,apply:bj},arrowColumnWidth:{check:Y,init:0,themeable:true,apply:bb},blockerColor:{check:bg,init:null,nullable:true,apply:bk,themeable:true},blockerOpacity:{check:be,init:1,apply:bd,themeable:true},selectedButton:{check:W,nullable:true,apply:bp},openedButton:{check:W,nullable:true,apply:bf},opener:{check:W,nullable:true},openInterval:{check:Y,themeable:true,init:250,apply:bo},closeInterval:{check:Y,themeable:true,init:250,apply:bl},blockBackground:{check:T,themeable:true,init:false}},members:{__mB:null,__mC:null,_blocker:null,open:function(){if(this.getOpener()!=null){this.placeToWidget(this.getOpener());
this.__mE();
this.show();
this._placementTarget=this.getOpener();
}else{this.warn("The menu instance needs a configured 'opener' widget!");
}},openAtMouse:function(e){this.placeToMouse(e);
this.__mE();
this.show();
this._placementTarget={left:e.getDocumentLeft(),top:e.getDocumentTop()};
},openAtPoint:function(br){this.placeToPoint(br);
this.__mE();
this.show();
this._placementTarget=br;
},addSeparator:function(){this.add(new qx.ui.menu.Separator);
},getColumnSizes:function(){return this._getMenuLayout().getColumnSizes();
},getSelectables:function(){var y=[];
var z=this.getChildren();

for(var i=0;i<z.length;i++){if(z[i].isEnabled()){y.push(z[i]);
}}return y;
},_applyIconColumnWidth:function(g,h){this._getMenuLayout().setIconColumnWidth(g);
},_applyArrowColumnWidth:function(G,H){this._getMenuLayout().setArrowColumnWidth(G);
},_applySpacingX:function(D,E){this._getMenuLayout().setColumnSpacing(D);
},_applySpacingY:function(w,x){this._getMenuLayout().setSpacing(w);
},_applyVisibility:function(j,k){qx.ui.core.Widget.prototype._applyVisibility.call(this,j,k);
var l=qx.ui.menu.Manager.getInstance();

if(j===U){l.add(this);
var m=this.getParentMenu();

if(m){m.setOpenedButton(this.getOpener());
}}else if(k===U){l.remove(this);
var m=this.getParentMenu();

if(m&&m.getOpenedButton()==this.getOpener()){m.resetOpenedButton();
}this.resetOpenedButton();
this.resetSelectedButton();
}this.__mD();
},__mD:function(){if(this.isVisible()){if(this.getBlockBackground()){var C=this.getZIndex();
this._blocker.blockContent(C-1);
}}else{if(this._blocker.isContentBlocked()){this._blocker.unblockContent();
}}},getParentMenu:function(){var n=this.getOpener();

if(!n||!(n instanceof qx.ui.menu.AbstractButton)){return null;
}
while(n&&!(n instanceof qx.ui.menu.Menu)){n=n.getLayoutParent();
}return n;
},_applySelectedButton:function(t,u){if(u){u.removeState(V);
}
if(t){t.addState(V);
}},_applyOpenedButton:function(M,N){if(N){N.getMenu().exclude();
}
if(M){M.getMenu().open();
}},_applyBlockerColor:function(d,f){this._blocker.setColor(d);
},_applyBlockerOpacity:function(O,P){this._blocker.setOpacity(O);
},getChildrenContainer:function(){return this.getChildControl(ba,true)||this;
},_createChildControlImpl:function(o){var p;

switch(o){case ba:var p=new qx.ui.menu.MenuSlideBar();
var r=this._getLayout();
this._setLayout(new qx.ui.layout.Grow());
var q=p.getLayout();
p.setLayout(r);
q.dispose();
var s=qx.lang.Array.clone(this.getChildren());

for(var i=0;i<s.length;i++){p.add(s[i]);
}this.removeListener(X,this._onResize,this);
p.getChildrenContainer().addListener(X,this._onResize,this);
this._add(p);
break;
}return p||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,o);
},_getMenuLayout:function(){if(this.hasChildControl(ba)){return this.getChildControl(ba).getChildrenContainer().getLayout();
}else{return this._getLayout();
}},_getMenuBounds:function(){if(this.hasChildControl(ba)){return this.getChildControl(ba).getChildrenContainer().getBounds();
}else{return this.getBounds();
}},_computePlacementSize:function(){return this._getMenuBounds();
},__mE:function(){var b=this._getMenuBounds();

if(!b){this.addListenerOnce(X,this.__mE,this);
return;
}var a=this.getLayoutParent().getBounds().height;
var top=this.getLayoutProperties().top;
var c=this.getLayoutProperties().left;
if(top<0){this._assertSlideBar(function(){this.setHeight(b.height+top);
this.moveTo(c,0);
});
}else if(top+b.height>a){this._assertSlideBar(function(){this.setHeight(a-top);
});
}else{this.setHeight(null);
}},_assertSlideBar:function(bq){if(this.hasChildControl(ba)){return bq.call(this);
}this.__mC=bq;
qx.ui.core.queue.Widget.add(this);
},syncWidget:function(){this.getChildControl(ba);

if(this.__mC){this.__mC.call(this);
delete this.__mC;
}},_onResize:function(){if(this.isVisible()){var v=this._placementTarget;

if(!v){return;
}else if(v instanceof qx.ui.core.Widget){this.placeToWidget(v);
}else if(v.top!==undefined){this.placeToPoint(v);
}else{throw new Error("Unknown target: "+v);
}this.__mE();
}},_onMouseOver:function(e){var J=qx.ui.menu.Manager.getInstance();
J.cancelClose(this);
var K=e.getTarget();

if(K.isEnabled()&&K instanceof qx.ui.menu.AbstractButton){this.setSelectedButton(K);
var I=K.getMenu&&K.getMenu();

if(I){I.setOpener(K);
J.scheduleOpen(I);
this.__mB=I;
}else{var L=this.getOpenedButton();

if(L){J.scheduleClose(L.getMenu());
}
if(this.__mB){J.cancelOpen(this.__mB);
this.__mB=null;
}}}else if(!this.getOpenedButton()){this.resetSelectedButton();
}},_onMouseOut:function(e){var A=qx.ui.menu.Manager.getInstance();
if(!qx.ui.core.Widget.contains(this,e.getRelatedTarget())){var B=this.getOpenedButton();
B?this.setSelectedButton(B):this.resetSelectedButton();
if(B){A.cancelClose(B.getMenu());
}if(this.__mB){A.cancelOpen(this.__mB);
}}}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.ui.menu.Manager.getInstance().remove(this);
}this.getApplicationRoot().removeListener(X,this._onResize,this);
this._placementTarget=null;
this._disposeObjects(bm);
}});
})();
(function(){var i="Integer",h="hovered",g="hover-button",f="__mF",d="interval",c="mouseover",b="mouseout",a="qx.ui.form.HoverButton";
qx.Class.define(a,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],construct:function(j,k){qx.ui.basic.Atom.call(this,j,k);
this.addListener(c,this._onMouseOver,this);
this.addListener(b,this._onMouseOut,this);
this.__mF=new qx.event.AcceleratingTimer();
this.__mF.addListener(d,this._onInterval,this);
},properties:{appearance:{refine:true,init:g},interval:{check:i,init:80},firstInterval:{check:i,init:200},minTimer:{check:i,init:20},timerDecrease:{check:i,init:2}},members:{__mF:null,_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.__mF.set({interval:this.getInterval(),firstInterval:this.getFirstInterval(),minimum:this.getMinTimer(),decrease:this.getTimerDecrease()}).start();
this.addState(h);
},_onMouseOut:function(e){this.__mF.stop();
this.removeState(h);

if(!this.isEnabled()||e.getTarget()!==this){return;
}},_onInterval:function(){if(this.isEnabled()){this.execute();
}else{this.__mF.stop();
}}},destruct:function(){this._disposeObjects(f);
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
}var o=this.__nj(q[0]);
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
}},__nj:function(t){while(!(t instanceof qx.ui.menu.Menu)){t=t.getLayoutParent();
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
(function(){var h="",g="<br",f=" &nbsp;",e="<br>",d=" ",c="\n",b="qx.bom.String";
qx.Class.define(b,{statics:{TO_CHARCODE:{"quot":34,"amp":38,"lt":60,"gt":62,"nbsp":160,"iexcl":161,"cent":162,"pound":163,"curren":164,"yen":165,"brvbar":166,"sect":167,"uml":168,"copy":169,"ordf":170,"laquo":171,"not":172,"shy":173,"reg":174,"macr":175,"deg":176,"plusmn":177,"sup2":178,"sup3":179,"acute":180,"micro":181,"para":182,"middot":183,"cedil":184,"sup1":185,"ordm":186,"raquo":187,"frac14":188,"frac12":189,"frac34":190,"iquest":191,"Agrave":192,"Aacute":193,"Acirc":194,"Atilde":195,"Auml":196,"Aring":197,"AElig":198,"Ccedil":199,"Egrave":200,"Eacute":201,"Ecirc":202,"Euml":203,"Igrave":204,"Iacute":205,"Icirc":206,"Iuml":207,"ETH":208,"Ntilde":209,"Ograve":210,"Oacute":211,"Ocirc":212,"Otilde":213,"Ouml":214,"times":215,"Oslash":216,"Ugrave":217,"Uacute":218,"Ucirc":219,"Uuml":220,"Yacute":221,"THORN":222,"szlig":223,"agrave":224,"aacute":225,"acirc":226,"atilde":227,"auml":228,"aring":229,"aelig":230,"ccedil":231,"egrave":232,"eacute":233,"ecirc":234,"euml":235,"igrave":236,"iacute":237,"icirc":238,"iuml":239,"eth":240,"ntilde":241,"ograve":242,"oacute":243,"ocirc":244,"otilde":245,"ouml":246,"divide":247,"oslash":248,"ugrave":249,"uacute":250,"ucirc":251,"uuml":252,"yacute":253,"thorn":254,"yuml":255,"fnof":402,"Alpha":913,"Beta":914,"Gamma":915,"Delta":916,"Epsilon":917,"Zeta":918,"Eta":919,"Theta":920,"Iota":921,"Kappa":922,"Lambda":923,"Mu":924,"Nu":925,"Xi":926,"Omicron":927,"Pi":928,"Rho":929,"Sigma":931,"Tau":932,"Upsilon":933,"Phi":934,"Chi":935,"Psi":936,"Omega":937,"alpha":945,"beta":946,"gamma":947,"delta":948,"epsilon":949,"zeta":950,"eta":951,"theta":952,"iota":953,"kappa":954,"lambda":955,"mu":956,"nu":957,"xi":958,"omicron":959,"pi":960,"rho":961,"sigmaf":962,"sigma":963,"tau":964,"upsilon":965,"phi":966,"chi":967,"psi":968,"omega":969,"thetasym":977,"upsih":978,"piv":982,"bull":8226,"hellip":8230,"prime":8242,"Prime":8243,"oline":8254,"frasl":8260,"weierp":8472,"image":8465,"real":8476,"trade":8482,"alefsym":8501,"larr":8592,"uarr":8593,"rarr":8594,"darr":8595,"harr":8596,"crarr":8629,"lArr":8656,"uArr":8657,"rArr":8658,"dArr":8659,"hArr":8660,"forall":8704,"part":8706,"exist":8707,"empty":8709,"nabla":8711,"isin":8712,"notin":8713,"ni":8715,"prod":8719,"sum":8721,"minus":8722,"lowast":8727,"radic":8730,"prop":8733,"infin":8734,"ang":8736,"and":8743,"or":8744,"cap":8745,"cup":8746,"int":8747,"there4":8756,"sim":8764,"cong":8773,"asymp":8776,"ne":8800,"equiv":8801,"le":8804,"ge":8805,"sub":8834,"sup":8835,"sube":8838,"supe":8839,"oplus":8853,"otimes":8855,"perp":8869,"sdot":8901,"lceil":8968,"rceil":8969,"lfloor":8970,"rfloor":8971,"lang":9001,"rang":9002,"loz":9674,"spades":9824,"clubs":9827,"hearts":9829,"diams":9830,"OElig":338,"oelig":339,"Scaron":352,"scaron":353,"Yuml":376,"circ":710,"tilde":732,"ensp":8194,"emsp":8195,"thinsp":8201,"zwnj":8204,"zwj":8205,"lrm":8206,"rlm":8207,"ndash":8211,"mdash":8212,"lsquo":8216,"rsquo":8217,"sbquo":8218,"ldquo":8220,"rdquo":8221,"bdquo":8222,"dagger":8224,"Dagger":8225,"permil":8240,"lsaquo":8249,"rsaquo":8250,"euro":8364},escape:function(j){return qx.util.StringEscape.escape(j,qx.bom.String.FROM_CHARCODE);
},unescape:function(o){return qx.util.StringEscape.unescape(o,qx.bom.String.TO_CHARCODE);
},fromText:function(n){return qx.bom.String.escape(n).replace(/(  |\n)/g,function(k){var l={"  ":f,"\n":e};
return l[k]||k;
});
},toText:function(i){return qx.bom.String.unescape(i.replace(/\s+|<([^>])+>/gi,function(a){if(a.indexOf(g)===0){return c;
}else if(a.length>0&&a.replace(/^\s*/,h).replace(/\s*$/,h)==h){return d;
}else{return h;
}}));
}},defer:function(m){m.FROM_CHARCODE=qx.lang.Object.invert(m.TO_CHARCODE);
}});
})();

});