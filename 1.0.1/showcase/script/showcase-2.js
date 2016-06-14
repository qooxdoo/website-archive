qx.$$packageData['4dd64145b417']={"resources":{}};
(function(){var p="container",o="handle",n="both",m="Integer",k="middle",j="qx.ui.toolbar.Part",h="icon",g="label",f="changeShow",e="_applySpacing",d="toolbar/part";
qx.Class.define(j,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling],construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.HBox);
this._createChildControl(o);
},properties:{appearance:{refine:true,init:d},show:{init:n,check:[n,g,h],inheritable:true,event:f},spacing:{nullable:true,check:m,themeable:true,apply:e}},members:{_createChildControlImpl:function(q){var r;

switch(q){case o:r=new qx.ui.basic.Image();
r.setAlignY(k);
this._add(r);
break;
case p:r=new qx.ui.toolbar.PartContainer;
this._add(r);
break;
}return r||arguments.callee.base.call(this,q);
},getChildrenContainer:function(){return this.getChildControl(p);
},_applySpacing:function(s,t){var u=this.getChildControl(p).getLayout();
s==null?u.resetSpacing():u.setSpacing(s);
},addSeparator:function(){this.add(new qx.ui.toolbar.Separator);
},getMenuButtons:function(){var b=this.getChildren();
var a=[];
var c;

for(var i=0,l=b.length;i<l;i++){c=b[i];

if(c instanceof qx.ui.menubar.Button){a.push(c);
}}return a;
}}});
})();
(function(){var w="icon",v="label",u="arrow",t="shortcut",s="changeLocale",r="qx.dynlocale",q="submenu",p="on",o="String",n="qx.ui.menu.Menu",h="qx.ui.menu.AbstractButton",m="keypress",k="",g="_applyIcon",f="mouseup",j="abstract",i="_applyLabel",l="_applyMenu",d="changeCommand";
qx.Class.define(h,{extend:qx.ui.core.Widget,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],type:j,construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.menu.ButtonLayout);
this.addListener(f,this._onMouseUp);
this.addListener(m,this._onKeyPress);
this.addListener(d,this._onChangeCommand,this);
},properties:{blockToolTip:{refine:true,init:true},label:{check:o,apply:i,nullable:true},menu:{check:n,apply:l,nullable:true},icon:{check:o,apply:g,themeable:true,nullable:true}},members:{_createChildControlImpl:function(x){var y;

switch(x){case w:y=new qx.ui.basic.Image;
y.setAnonymous(true);
this._add(y,{column:0});
break;
case v:y=new qx.ui.basic.Label;
y.setAnonymous(true);
this._add(y,{column:1});
break;
case t:y=new qx.ui.basic.Label;
y.setAnonymous(true);
this._add(y,{column:2});
break;
case u:y=new qx.ui.basic.Image;
y.setAnonymous(true);
this._add(y,{column:3});
break;
}return y||arguments.callee.base.call(this,x);
},_forwardStates:{selected:1},getChildrenSizes:function(){var A=0,B=0,C=0,G=0;

if(this._isChildControlVisible(w)){var H=this.getChildControl(w);
A=H.getMarginLeft()+H.getSizeHint().width+H.getMarginRight();
}
if(this._isChildControlVisible(v)){var E=this.getChildControl(v);
B=E.getMarginLeft()+E.getSizeHint().width+E.getMarginRight();
}
if(this._isChildControlVisible(t)){var D=this.getChildControl(t);
C=D.getMarginLeft()+D.getSizeHint().width+D.getMarginRight();
}
if(this._isChildControlVisible(u)){var F=this.getChildControl(u);
G=F.getMarginLeft()+F.getSizeHint().width+F.getMarginRight();
}return [A,B,C,G];
},_onMouseUp:function(e){},_onKeyPress:function(e){},_onChangeCommand:function(e){var c=e.getData();

if(qx.core.Variant.isSet(r,p)){var a=e.getOldData();

if(!a){qx.locale.Manager.getInstance().addListener(s,this._onChangeLocale,this);
}
if(!c){qx.locale.Manager.getInstance().removeListener(s,this._onChangeLocale,this);
}}var b=c!=null?c.toString():k;
this.getChildControl(t).setValue(b);
},_onChangeLocale:qx.core.Variant.select(r,{"on":function(e){var z=this.getCommand();

if(z!=null){this.getChildControl(t).setValue(z.toString());
}},"off":null}),_applyIcon:function(I,J){if(I){this._showChildControl(w).setSource(I);
}else{this._excludeChildControl(w);
}},_applyLabel:function(M,N){if(M){this._showChildControl(v).setValue(M);
}else{this._excludeChildControl(v);
}},_applyMenu:function(K,L){if(L){L.resetOpener();
L.removeState(q);
}
if(K){this._showChildControl(u);
K.setOpener(this);
K.addState(q);
}else{this._excludeChildControl(u);
}}},destruct:function(){if(this.getMenu()){if(!qx.core.ObjectRegistry.inShutDown){this.getMenu().destroy();
}}
if(qx.core.Variant.isSet(r,p)){qx.locale.Manager.getInstance().removeListener(s,this._onChangeLocale,this);
}}});
})();
(function(){var b="menu-separator",a="qx.ui.menu.Separator";
qx.Class.define(a,{extend:qx.ui.core.Widget,properties:{appearance:{refine:true,init:b},anonymous:{refine:true,init:true}}});
})();
(function(){var j=";",h="&",g='X',f="",e='#',d="&#",c="qx.util.StringEscape";
qx.Class.define(c,{statics:{escape:function(o,p){var r,t=f;

for(var i=0,l=o.length;i<l;i++){var s=o.charAt(i);
var q=s.charCodeAt(0);

if(p[q]){r=h+p[q]+j;
}else{if(q>0x7F){r=d+q+j;
}else{r=s;
}}t+=r;
}return t;
},unescape:function(a,b){return a.replace(/&[#\w]+;/gi,function(k){var m=k;
var k=k.substring(1,k.length-1);
var n=b[k];

if(n){m=String.fromCharCode(n);
}else{if(k.charAt(0)==e){if(k.charAt(1).toUpperCase()==g){n=k.substring(2);
if(n.match(/^[0-9A-Fa-f]+$/gi)){m=String.fromCharCode(parseInt(n,16));
}}else{n=k.substring(1);
if(n.match(/^\d+$/gi)){m=String.fromCharCode(parseInt(n,10));
}}}}return m;
});
}}});
})();
(function(){var n="pressed",m="hovered",l="changeVisibility",k="qx.ui.menu.Menu",j="submenu",i="Enter",h="contextmenu",g="changeMenu",f="qx.ui.form.MenuButton",d="abandoned",c="_applyMenu";
qx.Class.define(f,{extend:qx.ui.form.Button,construct:function(u,v,w){arguments.callee.base.call(this,u,v);
if(w!=null){this.setMenu(w);
}},properties:{menu:{check:k,nullable:true,apply:c,event:g}},members:{_applyMenu:function(r,s){if(s){s.removeListener(l,this._onMenuChange,this);
s.resetOpener();
}
if(r){r.addListener(l,this._onMenuChange,this);
r.setOpener(this);
r.removeState(j);
r.removeState(h);
}},open:function(o){var p=this.getMenu();

if(p){qx.ui.menu.Manager.getInstance().hideAll();
p.setOpener(this);
p.open();
if(o){var q=p.getSelectables()[0];

if(q){p.setSelectedButton(q);
}}}},_onMenuChange:function(e){var t=this.getMenu();

if(t.isVisible()){this.addState(n);
}else{this.removeState(n);
}},_onMouseDown:function(e){var b=this.getMenu();

if(b){if(!b.isVisible()){this.open();
}else{b.exclude();
}e.stopPropagation();
}},_onMouseUp:function(e){arguments.callee.base.call(this,e);
e.stopPropagation();
},_onMouseOver:function(e){this.addState(m);
},_onMouseOut:function(e){this.removeState(m);
},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case i:this.removeState(d);
this.addState(n);
var a=this.getMenu();

if(a){if(!a.isVisible()){this.open();
}else{a.exclude();
}}e.stopPropagation();
}},_onKeyUp:function(e){}},destruct:function(){if(this.getMenu()){if(!qx.core.ObjectRegistry.inShutDown){this.getMenu().destroy();
}}}});
})();
(function(){var i="pressed",h="hovered",g="inherit",f="qx.ui.menubar.Button",d="keydown",c="menubar-button",b="keyup";
qx.Class.define(f,{extend:qx.ui.form.MenuButton,construct:function(k,l,m){arguments.callee.base.call(this,k,l,m);
this.removeListener(d,this._onKeyDown);
this.removeListener(b,this._onKeyUp);
},properties:{appearance:{refine:true,init:c},show:{refine:true,init:g},focusable:{refine:true,init:false}},members:{getMenuBar:function(){var parent=this;

while(parent){if(parent instanceof qx.ui.toolbar.ToolBar){return parent;
}parent=parent.getLayoutParent();
}return null;
},open:function(j){arguments.callee.base.call(this,j);
var menubar=this.getMenuBar();
menubar._setAllowMenuOpenHover(true);
},_onMenuChange:function(e){var n=this.getMenu();
var menubar=this.getMenuBar();

if(n.isVisible()){this.addState(i);
if(menubar){menubar.setOpenMenu(n);
}}else{this.removeState(i);
if(menubar&&menubar.getOpenMenu()==n){menubar.resetOpenMenu();
menubar._setAllowMenuOpenHover(false);
}}},_onMouseUp:function(e){arguments.callee.base.call(this,e);
var a=this.getMenu();

if(a&&a.isVisible()&&!this.hasState(i)){this.addState(i);
}},_onMouseOver:function(e){this.addState(h);
if(this.getMenu()){var menubar=this.getMenuBar();

if(menubar._isAllowMenuOpenHover()){qx.ui.menu.Manager.getInstance().hideAll();
menubar._setAllowMenuOpenHover(true);
if(this.isEnabled()){this.open();
}}}}}});
})();
(function(){var R="keypress",Q="interval",P="keydown",O="mousedown",N="keyup",M="__hP",L="blur",K="Enter",J="Up",I="__hO",C="__hN",H="Escape",F="qx.ui.menu.Manager",B="Left",A="Down",E="Right",D="singleton",G="Space";
qx.Class.define(F,{type:D,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__hN=[];
var T=document.body;
var U=qx.event.Registration;
U.addListener(window.document.documentElement,O,this._onMouseDown,this,true);
U.addListener(T,P,this._onKeyUpDown,this,true);
U.addListener(T,N,this._onKeyUpDown,this,true);
U.addListener(T,R,this._onKeyPress,this,true);
qx.bom.Element.addListener(window,L,this.hideAll,this);
this.__hO=new qx.event.Timer;
this.__hO.addListener(Q,this._onOpenInterval,this);
this.__hP=new qx.event.Timer;
this.__hP.addListener(Q,this._onCloseInterval,this);
},members:{__hQ:null,__hR:null,__hO:null,__hP:null,__hN:null,_getChild:function(c,d,f,g){var h=c.getChildren();
var length=h.length;
var j;

for(var i=d;i<length&&i>=0;i+=f){j=h[i];

if(j.isEnabled()&&!j.isAnonymous()){return j;
}}
if(g){i=i==length?0:length-1;

for(;i!=d;i+=f){j=h[i];

if(j.isEnabled()&&!j.isAnonymous()){return j;
}}}return null;
},_isInMenu:function(bq){while(bq){if(bq instanceof qx.ui.menu.Menu){return true;
}bq=bq.getLayoutParent();
}return false;
},_getMenuButton:function(bz){while(bz){if(bz instanceof qx.ui.menu.AbstractButton){return bz;
}bz=bz.getLayoutParent();
}return null;
},add:function(bw){{};
var bx=this.__hN;
bx.push(bw);
bw.setZIndex(1e6+bx.length);
},remove:function(bn){{};
var bo=this.__hN;

if(bo){qx.lang.Array.remove(bo,bn);
}},hideAll:function(){var n=this.__hN;

if(n){for(var i=n.length-1;i>=0;i--){n[i].exclude();
}}},getActiveMenu:function(){var bv=this.__hN;
return bv.length>0?bv[bv.length-1]:null;
},scheduleOpen:function(by){this.cancelClose(by);
if(by.isVisible()){if(this.__hQ){this.cancelOpen(this.__hQ);
}}else if(this.__hQ!=by){this.__hQ=by;
this.__hO.restartWith(by.getOpenInterval());
}},scheduleClose:function(bp){this.cancelOpen(bp);
if(!bp.isVisible()){if(this.__hR){this.cancelClose(this.__hR);
}}else if(this.__hR!=bp){this.__hR=bp;
this.__hP.restartWith(bp.getCloseInterval());
}},cancelOpen:function(bm){if(this.__hQ==bm){this.__hO.stop();
this.__hQ=null;
}},cancelClose:function(bD){if(this.__hR==bD){this.__hP.stop();
this.__hR=null;
}},_onOpenInterval:function(e){this.__hO.stop();
this.__hQ.open();
this.__hQ=null;
},_onCloseInterval:function(e){this.__hP.stop();
this.__hR.exclude();
this.__hR=null;
},_onMouseDown:function(e){var S=e.getTarget();
S=qx.ui.core.Widget.getWidgetByElement(S);
if(S==null){this.hideAll();
return;
}if(S.getMenu&&S.getMenu()&&S.getMenu().isVisible()){return;
}if(this.__hN.length>0&&!this._isInMenu(S)){this.hideAll();
}},__hS:{"Enter":1,"Space":1},__hT:{"Escape":1,"Up":1,"Down":1,"Left":1,"Right":1},_onKeyUpDown:function(e){var a=this.getActiveMenu();

if(!a){return;
}var b=e.getKeyIdentifier();

if(this.__hT[b]||(this.__hS[b]&&a.getSelectedButton())){e.stopPropagation();
}},_onKeyPress:function(e){var v=this.getActiveMenu();

if(!v){return;
}var w=e.getKeyIdentifier();
var y=this.__hT[w];
var x=this.__hS[w];

if(y){switch(w){case J:this._onKeyPressUp(v);
break;
case A:this._onKeyPressDown(v);
break;
case B:this._onKeyPressLeft(v);
break;
case E:this._onKeyPressRight(v);
break;
case H:this.hideAll();
break;
}e.stopPropagation();
e.preventDefault();
}else if(x){var z=v.getSelectedButton();

if(z){switch(w){case K:this._onKeyPressEnter(v,z,e);
break;
case G:this._onKeyPressSpace(v,z,e);
break;
}e.stopPropagation();
e.preventDefault();
}}},_onKeyPressUp:function(V){var W=V.getSelectedButton();
var X=V.getChildren();
var ba=W?V.indexOf(W)-1:X.length-1;
var Y=this._getChild(V,ba,-1,true);
if(Y){V.setSelectedButton(Y);
}else{V.resetSelectedButton();
}},_onKeyPressDown:function(br){var bs=br.getSelectedButton();
var bu=bs?br.indexOf(bs)+1:0;
var bt=this._getChild(br,bu,1,true);
if(bt){br.setSelectedButton(bt);
}else{br.resetSelectedButton();
}},_onKeyPressLeft:function(o){var t=o.getOpener();

if(!t){return;
}if(t instanceof qx.ui.menu.Button){var q=t.getLayoutParent();
q.resetOpenedButton();
q.setSelectedButton(t);
}else if(t instanceof qx.ui.menubar.Button){var s=t.getMenuBar().getMenuButtons();
var p=s.indexOf(t);
if(p===-1){return;
}var u=null;
var length=s.length;

for(var i=1;i<=length;i++){var r=s[(p-i+length)%length];

if(r.isEnabled()){u=r;
break;
}}
if(u&&u!=t){u.open(true);
}}},_onKeyPressRight:function(bb){var bd=bb.getSelectedButton();
if(bd){var bc=bd.getMenu();

if(bc){bb.setOpenedButton(bd);
var bj=this._getChild(bc,0,1);

if(bj){bc.setSelectedButton(bj);
}return;
}}else if(!bb.getOpenedButton()){var bj=this._getChild(bb,0,1);

if(bj){bb.setSelectedButton(bj);

if(bj.getMenu()){bb.setOpenedButton(bj);
}return;
}}var bh=bb.getOpener();
if(bh instanceof qx.ui.menu.Button&&bd){while(bh){bh=bh.getLayoutParent();

if(bh instanceof qx.ui.menu.Menu){bh=bh.getOpener();

if(bh instanceof qx.ui.menubar.Button){break;
}}else{break;
}}
if(!bh){return;
}}if(bh instanceof qx.ui.menubar.Button){var bg=bh.getMenuBar().getMenuButtons();
var be=bg.indexOf(bh);
if(be===-1){return;
}var bi=null;
var length=bg.length;

for(var i=1;i<=length;i++){var bf=bg[(be+i)%length];

if(bf.isEnabled()){bi=bf;
break;
}}
if(bi&&bi!=bh){bi.open(true);
}}},_onKeyPressEnter:function(bA,bB,e){if(bB.hasListener(R)){var bC=e.clone();
bC.setBubbles(false);
bC.setTarget(bB);
bB.dispatchEvent(bC);
}this.hideAll();
},_onKeyPressSpace:function(k,l,e){if(l.hasListener(R)){var m=e.clone();
m.setBubbles(false);
m.setTarget(l);
l.dispatchEvent(m);
}}},destruct:function(){var bl=qx.event.Registration;
var bk=document.body;
bl.removeListener(window.document.documentElement,O,this._onMouseDown,this,true);
bl.removeListener(bk,P,this._onKeyUpDown,this,true);
bl.removeListener(bk,N,this._onKeyUpDown,this,true);
bl.removeListener(bk,R,this._onKeyPress,this,true);
this._disposeObjects(I,M);
this._disposeArray(C);
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
},properties:{appearance:{refine:true,init:b},openMenu:{check:j,event:a,nullable:true},show:{init:k,check:[k,f,g],inheritable:true,event:e},spacing:{nullable:true,check:d,themeable:true,apply:h}},members:{__hU:false,_setAllowMenuOpenHover:function(p){this.__hU=p;
},_isAllowMenuOpenHover:function(){return this.__hU;
},_applySpacing:function(m,n){var o=this._getLayout();
m==null?o.resetSpacing():o.setSpacing(m);
},addSpacer:function(){var t=new qx.ui.core.Spacer;
this._add(t,{flex:1});
return t;
},addSeparator:function(){this.add(new qx.ui.toolbar.Separator);
},getMenuButtons:function(){var r=this.getChildren();
var q=[];
var s;

for(var i=0,l=r.length;i<l;i++){s=r[i];

if(s instanceof qx.ui.menubar.Button){q.push(s);
}else if(s instanceof qx.ui.toolbar.Part){q.push.apply(q,s.getMenuButtons());
}}return q;
}}});
})();
(function(){var c="Integer",b="_applyLayoutChange",a="qx.ui.menu.Layout";
qx.Class.define(a,{extend:qx.ui.layout.VBox,properties:{columnSpacing:{check:c,init:0,apply:b},spanColumn:{check:c,init:1,nullable:true,apply:b},iconColumnWidth:{check:c,init:0,themeable:true,apply:b},arrowColumnWidth:{check:c,init:0,themeable:true,apply:b}},members:{__hV:null,_computeSizeHint:function(){var q=this._getLayoutChildren();
var o,g,j;
var e=this.getSpanColumn();
var h=this.__hV=[0,0,0,0];
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
},getColumnSizes:function(){return this.__hV||null;
}},destruct:function(){this.__hV=null;
}});
})();
(function(){var f="both",e="toolbar/part/container",d="icon",c="changeShow",b="qx.ui.toolbar.PartContainer",a="label";
qx.Class.define(b,{extend:qx.ui.container.Composite,construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.HBox);
},properties:{appearance:{refine:true,init:e},show:{init:f,check:[f,a,d],inheritable:true,event:c}}});
})();
(function(){var u="horizontal",t="scrollpane",s="vertical",r="button-backward",q="button-forward",p="content",o="execute",n="qx.ui.container.SlideBar",m="scrollY",l="removeChildWidget",h="scrollX",k="_applyOrientation",j="mousewheel",g="Integer",f="slidebar",i="update";
qx.Class.define(n,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MRemoteLayoutHandling],construct:function(v){arguments.callee.base.call(this);
var w=this.getChildControl(t);
this._add(w,{flex:1});

if(v!=null){this.setOrientation(v);
}else{this.initOrientation();
}this.addListener(j,this._onMouseWheel,this);
},properties:{appearance:{refine:true,init:f},orientation:{check:[u,s],init:u,apply:k},scrollStep:{check:g,init:15,themeable:true}},members:{getChildrenContainer:function(){return this.getChildControl(p);
},_createChildControlImpl:function(c){var d;

switch(c){case q:d=new qx.ui.form.RepeatButton;
d.addListener(o,this._onExecuteForward,this);
d.setFocusable(false);
this._addAt(d,2);
break;
case r:d=new qx.ui.form.RepeatButton;
d.addListener(o,this._onExecuteBackward,this);
d.setFocusable(false);
this._addAt(d,0);
break;
case p:d=new qx.ui.container.Composite();
if(qx.bom.client.Engine.GECKO){d.addListener(l,this._onRemoveChild,this);
}this.getChildControl(t).add(d);
break;
case t:d=new qx.ui.core.scroll.ScrollPane();
d.addListener(i,this._onResize,this);
d.addListener(h,this._onScroll,this);
d.addListener(m,this._onScroll,this);
break;
}return d||arguments.callee.base.call(this,c);
},_forwardStates:{barLeft:true,barTop:true,barRight:true,barBottom:true},scrollBy:function(x){var y=this.getChildControl(t);

if(this.getOrientation()===u){y.scrollByX(x);
}else{y.scrollByY(x);
}},scrollTo:function(a){var b=this.getChildControl(t);

if(this.getOrientation()===u){b.scrollToX(a);
}else{b.scrollToY(a);
}},_applyOrientation:function(C,D){var G=[this.getLayout(),this._getLayout()];
var F=this.getChildControl(q);
var E=this.getChildControl(r);
if(D==s){F.removeState(s);
E.removeState(s);
F.addState(u);
E.addState(u);
}else if(D==u){F.removeState(u);
E.removeState(u);
F.addState(s);
E.addState(s);
}
if(C==u){this._setLayout(new qx.ui.layout.HBox());
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
},_onResize:function(e){var content=this.getChildControl(t).getChildren()[0];

if(!content){return;
}var H=this.getInnerSize();
var J=content.getBounds();
var I=(this.getOrientation()===u)?J.width>H.width:J.height>H.height;

if(I){this._showArrows();
this._updateArrowsEnabled();
}else{this._hideArrows();
}},_onExecuteBackward:function(){this.scrollBy(-this.getScrollStep());
},_onExecuteForward:function(){this.scrollBy(this.getScrollStep());
},_onRemoveChild:function(){qx.event.Timer.once(function(){this.scrollBy(this.getChildControl(t).getScrollX());
},this,50);
},_updateArrowsEnabled:function(){var A=this.getChildControl(t);

if(this.getOrientation()===u){var z=A.getScrollX();
var B=A.getScrollMaxX();
}else{var z=A.getScrollY();
var B=A.getScrollMaxY();
}this.getChildControl(r).setEnabled(z>0);
this.getChildControl(q).setEnabled(z<B);
},_showArrows:function(){this._showChildControl(q);
this._showChildControl(r);
},_hideArrows:function(){this._excludeChildControl(q);
this._excludeChildControl(r);
this.scrollTo(0);
}}});
})();
(function(){var Y="slidebar",X="Integer",W="resize",V="qx.ui.core.Widget",U="selected",T="visible",S="Boolean",R="mouseout",Q="excluded",P="menu",bo="_applySelectedButton",bn="_applySpacingY",bm="_blocker",bl="_applyCloseInterval",bk="_applyBlockerColor",bj="_applyIconColumnWidth",bi="mouseover",bh="_applyArrowColumnWidth",bg="qx.ui.menu.Menu",bf="Color",bd="Number",be="_applyOpenInterval",bb="_applySpacingX",bc="_applyBlockerOpacity",ba="_applyOpenedButton";
qx.Class.define(bg,{extend:qx.ui.core.Widget,include:[qx.ui.core.MPlacement,qx.ui.core.MRemoteChildrenHandling],construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.menu.Layout);
var D=this.getApplicationRoot();
D.add(this);
this.addListener(bi,this._onMouseOver);
this.addListener(R,this._onMouseOut);
this.addListener(W,this._onResize,this);
D.addListener(W,this._onResize,this);
this._blocker=new qx.ui.core.Blocker(D);
this.initVisibility();
this.initKeepFocus();
this.initKeepActive();
},properties:{appearance:{refine:true,init:P},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},visibility:{refine:true,init:Q},keepFocus:{refine:true,init:true},keepActive:{refine:true,init:true},spacingX:{check:X,apply:bb,init:0,themeable:true},spacingY:{check:X,apply:bn,init:0,themeable:true},iconColumnWidth:{check:X,init:0,themeable:true,apply:bj},arrowColumnWidth:{check:X,init:0,themeable:true,apply:bh},blockerColor:{check:bf,init:null,nullable:true,apply:bk,themeable:true},blockerOpacity:{check:bd,init:1,apply:bc,themeable:true},selectedButton:{check:V,nullable:true,apply:bo},openedButton:{check:V,nullable:true,apply:ba},opener:{check:V,nullable:true},openInterval:{check:X,themeable:true,init:250,apply:be},closeInterval:{check:X,themeable:true,init:250,apply:bl},blockBackground:{check:S,themeable:true,init:false}},members:{__hW:null,__hX:null,_blocker:null,open:function(){if(this.getOpener()!=null){this.placeToWidget(this.getOpener());
this.__ia();
this.show();
this._placementTarget=this.getOpener();
}else{this.warn("The menu instance needs a configured 'opener' widget!");
}},openAtMouse:function(e){this.placeToMouse(e);
this.__ia();
this.show();
this._placementTarget={left:e.getDocumentLeft(),top:e.getDocumentTop()};
},openAtPoint:function(bp){this.placeToPoint(bp);
this.__ia();
this.show();
this._placementTarget=bp;
},addSeparator:function(){this.add(new qx.ui.menu.Separator);
},getColumnSizes:function(){return this._getMenuLayout().getColumnSizes();
},getSelectables:function(){var p=[];
var q=this.getChildren();

for(var i=0;i<q.length;i++){if(q[i].isEnabled()){p.push(q[i]);
}}return p;
},_applyIconColumnWidth:function(n,o){this._getMenuLayout().setIconColumnWidth(n);
},_applyArrowColumnWidth:function(B,C){this._getMenuLayout().setArrowColumnWidth(B);
},_applySpacingX:function(a,b){this._getMenuLayout().setColumnSpacing(a);
},_applySpacingY:function(N,O){this._getMenuLayout().setSpacing(N);
},_applyVisibility:function(x,y){arguments.callee.base.call(this,x,y);
var z=qx.ui.menu.Manager.getInstance();

if(x===T){z.add(this);
var A=this.getParentMenu();

if(A){A.setOpenedButton(this.getOpener());
}}else if(y===T){z.remove(this);
var A=this.getParentMenu();

if(A&&A.getOpenedButton()==this.getOpener()){A.resetOpenedButton();
}this.resetOpenedButton();
this.resetSelectedButton();
}this.__hY();
},__hY:function(){if(this.isVisible()){if(this.getBlockBackground()){var l=this.getZIndex();
this._blocker.blockContent(l-1);
}}else{if(this._blocker.isContentBlocked()){this._blocker.unblockContent();
}}},getParentMenu:function(){var E=this.getOpener();

if(!E||!(E instanceof qx.ui.menu.AbstractButton)){return null;
}
while(E&&!(E instanceof qx.ui.menu.Menu)){E=E.getLayoutParent();
}return E;
},_applySelectedButton:function(K,L){if(L){L.removeState(U);
}
if(K){K.addState(U);
}},_applyOpenedButton:function(j,k){if(k){k.getMenu().exclude();
}
if(j){j.getMenu().open();
}},_applyBlockerColor:function(bq,br){this._blocker.setColor(bq);
},_applyBlockerOpacity:function(F,G){this._blocker.setOpacity(F);
},getChildrenContainer:function(){return this.getChildControl(Y,true)||this;
},_createChildControlImpl:function(c){var d;

switch(c){case Y:var d=new qx.ui.menu.MenuSlideBar();
var g=this._getLayout();
this._setLayout(new qx.ui.layout.Grow());
var f=d.getLayout();
d.setLayout(g);
f.dispose();
var h=qx.lang.Array.clone(this.getChildren());

for(var i=0;i<h.length;i++){d.add(h[i]);
}this.removeListener(W,this._onResize,this);
d.getChildrenContainer().addListener(W,this._onResize,this);
this._add(d);
break;
}return d||arguments.callee.base.call(this,c);
},_getMenuLayout:function(){if(this.hasChildControl(Y)){return this.getChildControl(Y).getChildrenContainer().getLayout();
}else{return this._getLayout();
}},_getMenuBounds:function(){if(this.hasChildControl(Y)){return this.getChildControl(Y).getChildrenContainer().getBounds();
}else{return this.getBounds();
}},_computePlacementSize:function(){return this._getMenuBounds();
},__ia:function(){var I=this._getMenuBounds();

if(!I){this.addListenerOnce(W,this.__ia,this);
return;
}var H=this.getLayoutParent().getBounds().height;
var top=this.getLayoutProperties().top;
var J=this.getLayoutProperties().left;
if(top<0){this._assertSlideBar(function(){this.setHeight(I.height+top);
this.moveTo(J,0);
});
}else if(top+I.height>H){this._assertSlideBar(function(){this.setHeight(H-top);
});
}else{this.setHeight(null);
}},_assertSlideBar:function(m){if(this.hasChildControl(Y)){return m.call(this);
}this.__hX=m;
qx.ui.core.queue.Widget.add(this);
},syncWidget:function(){this.getChildControl(Y);

if(this.__hX){this.__hX.call(this);
delete this.__hX;
}},_onResize:function(){if(this.isVisible()){var M=this._placementTarget;

if(!M){return;
}else if(M instanceof qx.ui.core.Widget){this.placeToWidget(M);
}else if(M.top!==undefined){this.placeToPoint(M);
}else{throw new Error("Unknown target: "+M);
}this.__ia();
}},_onMouseOver:function(e){var u=qx.ui.menu.Manager.getInstance();
u.cancelClose(this);
var v=e.getTarget();

if(v.isEnabled()&&v instanceof qx.ui.menu.AbstractButton){this.setSelectedButton(v);
var t=v.getMenu&&v.getMenu();

if(t){t.setOpener(v);
u.scheduleOpen(t);
this.__hW=t;
}else{var w=this.getOpenedButton();

if(w){u.scheduleClose(w.getMenu());
}
if(this.__hW){u.cancelOpen(this.__hW);
this.__hW=null;
}}}else if(!this.getOpenedButton()){this.resetSelectedButton();
}},_onMouseOut:function(e){var r=qx.ui.menu.Manager.getInstance();
if(!qx.ui.core.Widget.contains(this,e.getRelatedTarget())){var s=this.getOpenedButton();
s?this.setSelectedButton(s):this.resetSelectedButton();
if(s){r.cancelClose(s.getMenu());
}if(this.__hW){r.cancelOpen(this.__hW);
}}}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.ui.menu.Manager.getInstance().remove(this);
}this.getApplicationRoot().removeListener(W,this._onResize,this);
this._placementTarget=null;
this._disposeObjects(bm);
}});
})();
(function(){var i="Integer",h="hovered",g="hover-button",f="interval",d="mouseover",c="mouseout",b="__ib",a="qx.ui.form.HoverButton";
qx.Class.define(a,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],construct:function(j,k){arguments.callee.base.call(this,j,k);
this.addListener(d,this._onMouseOver,this);
this.addListener(c,this._onMouseOut,this);
this.__ib=new qx.event.AcceleratingTimer();
this.__ib.addListener(f,this._onInterval,this);
},properties:{appearance:{refine:true,init:g},interval:{check:i,init:80},firstInterval:{check:i,init:200},minTimer:{check:i,init:20},timerDecrease:{check:i,init:2}},members:{__ib:null,_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.__ib.set({interval:this.getInterval(),firstInterval:this.getFirstInterval(),minimum:this.getMinTimer(),decrease:this.getTimerDecrease()}).start();
this.addState(h);
},_onMouseOut:function(e){this.__ib.stop();
this.removeState(h);

if(!this.isEnabled()||e.getTarget()!==this){return;
}},_onInterval:function(){if(this.isEnabled()){this.execute();
}else{this.__ib.stop();
}}},destruct:function(){this._disposeObjects(b);
}});
})();
(function(){var b="qx.ui.form.IBooleanForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var d="middle",c="qx.ui.menu.ButtonLayout",b="left";
qx.Class.define(c,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(j,k){var v=this._getLayoutChildren();
var u;
var n;
var o=[];

for(var i=0,l=v.length;i<l;i++){u=v[i];
n=u.getLayoutProperties().column;
o[n]=u;
}var t=this.__ic(v[0]);
var w=t.getColumnSizes();
var q=t.getSpacingX();
var p=qx.lang.Array.sum(w)+q*(w.length-1);

if(p<j){w[1]+=j-p;
}var x=0,top=0;
var r=qx.ui.layout.Util;

for(var i=0,l=w.length;i<l;i++){u=o[i];

if(u){var m=u.getSizeHint();
var top=r.computeVerticalAlignOffset(u.getAlignY()||d,m.height,k,0,0);
var s=r.computeHorizontalAlignOffset(u.getAlignX()||b,m.width,w[i],u.getMarginLeft(),u.getMarginRight());
u.renderLayout(x+s,top,m.width,m.height);
}x+=w[i]+q;
}},__ic:function(a){while(!(a instanceof qx.ui.menu.Menu)){a=a.getLayoutParent();
}return a;
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
(function(){var f="\n",e="",d=" &nbsp;",c="<br>",b=" ",a="qx.bom.String";
qx.Class.define(a,{statics:{TO_CHARCODE:{"quot":34,"amp":38,"lt":60,"gt":62,"nbsp":160,"iexcl":161,"cent":162,"pound":163,"curren":164,"yen":165,"brvbar":166,"sect":167,"uml":168,"copy":169,"ordf":170,"laquo":171,"not":172,"shy":173,"reg":174,"macr":175,"deg":176,"plusmn":177,"sup2":178,"sup3":179,"acute":180,"micro":181,"para":182,"middot":183,"cedil":184,"sup1":185,"ordm":186,"raquo":187,"frac14":188,"frac12":189,"frac34":190,"iquest":191,"Agrave":192,"Aacute":193,"Acirc":194,"Atilde":195,"Auml":196,"Aring":197,"AElig":198,"Ccedil":199,"Egrave":200,"Eacute":201,"Ecirc":202,"Euml":203,"Igrave":204,"Iacute":205,"Icirc":206,"Iuml":207,"ETH":208,"Ntilde":209,"Ograve":210,"Oacute":211,"Ocirc":212,"Otilde":213,"Ouml":214,"times":215,"Oslash":216,"Ugrave":217,"Uacute":218,"Ucirc":219,"Uuml":220,"Yacute":221,"THORN":222,"szlig":223,"agrave":224,"aacute":225,"acirc":226,"atilde":227,"auml":228,"aring":229,"aelig":230,"ccedil":231,"egrave":232,"eacute":233,"ecirc":234,"euml":235,"igrave":236,"iacute":237,"icirc":238,"iuml":239,"eth":240,"ntilde":241,"ograve":242,"oacute":243,"ocirc":244,"otilde":245,"ouml":246,"divide":247,"oslash":248,"ugrave":249,"uacute":250,"ucirc":251,"uuml":252,"yacute":253,"thorn":254,"yuml":255,"fnof":402,"Alpha":913,"Beta":914,"Gamma":915,"Delta":916,"Epsilon":917,"Zeta":918,"Eta":919,"Theta":920,"Iota":921,"Kappa":922,"Lambda":923,"Mu":924,"Nu":925,"Xi":926,"Omicron":927,"Pi":928,"Rho":929,"Sigma":931,"Tau":932,"Upsilon":933,"Phi":934,"Chi":935,"Psi":936,"Omega":937,"alpha":945,"beta":946,"gamma":947,"delta":948,"epsilon":949,"zeta":950,"eta":951,"theta":952,"iota":953,"kappa":954,"lambda":955,"mu":956,"nu":957,"xi":958,"omicron":959,"pi":960,"rho":961,"sigmaf":962,"sigma":963,"tau":964,"upsilon":965,"phi":966,"chi":967,"psi":968,"omega":969,"thetasym":977,"upsih":978,"piv":982,"bull":8226,"hellip":8230,"prime":8242,"Prime":8243,"oline":8254,"frasl":8260,"weierp":8472,"image":8465,"real":8476,"trade":8482,"alefsym":8501,"larr":8592,"uarr":8593,"rarr":8594,"darr":8595,"harr":8596,"crarr":8629,"lArr":8656,"uArr":8657,"rArr":8658,"dArr":8659,"hArr":8660,"forall":8704,"part":8706,"exist":8707,"empty":8709,"nabla":8711,"isin":8712,"notin":8713,"ni":8715,"prod":8719,"sum":8721,"minus":8722,"lowast":8727,"radic":8730,"prop":8733,"infin":8734,"ang":8736,"and":8743,"or":8744,"cap":8745,"cup":8746,"int":8747,"there4":8756,"sim":8764,"cong":8773,"asymp":8776,"ne":8800,"equiv":8801,"le":8804,"ge":8805,"sub":8834,"sup":8835,"sube":8838,"supe":8839,"oplus":8853,"otimes":8855,"perp":8869,"sdot":8901,"lceil":8968,"rceil":8969,"lfloor":8970,"rfloor":8971,"lang":9001,"rang":9002,"loz":9674,"spades":9824,"clubs":9827,"hearts":9829,"diams":9830,"OElig":338,"oelig":339,"Scaron":352,"scaron":353,"Yuml":376,"circ":710,"tilde":732,"ensp":8194,"emsp":8195,"thinsp":8201,"zwnj":8204,"zwj":8205,"lrm":8206,"rlm":8207,"ndash":8211,"mdash":8212,"lsquo":8216,"rsquo":8217,"sbquo":8218,"ldquo":8220,"rdquo":8221,"bdquo":8222,"dagger":8224,"Dagger":8225,"permil":8240,"lsaquo":8249,"rsaquo":8250,"euro":8364},escape:function(j){return qx.util.StringEscape.escape(j,qx.bom.String.FROM_CHARCODE);
},unescape:function(g){return qx.util.StringEscape.unescape(g,qx.bom.String.TO_CHARCODE);
},fromText:function(p){return qx.bom.String.escape(p).replace(/(  |\n)/g,function(h){var i={"  ":d,"\n":c};
return i[h]||h;
});
},toText:function(o){return qx.bom.String.unescape(o.replace(/\s+|<([^>])+>/gi,function(n){if(/\s+/.test(n)){return b;
}else if(/^<BR|^<br/gi.test(n)){return f;
}else{return e;
}}));
}},defer:function(k,l,m){k.FROM_CHARCODE=qx.lang.Object.invert(k.TO_CHARCODE);
}});
})();
