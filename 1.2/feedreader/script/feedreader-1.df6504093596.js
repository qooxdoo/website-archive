qx.$$packageData['df6504093596']={"locales":{},"resources":{"feedreader/images/combined/icons16.png":[16,96,"png","feedreader"],"qx/icon/Tango/16/actions/dialog-cancel.png":[16,16,"png","qx","feedreader/images/combined/icons16.png",0,-64],"qx/icon/Tango/16/actions/dialog-ok.png":[16,16,"png","qx","feedreader/images/combined/icons16.png",0,0],"qx/icon/Tango/16/apps/preferences-locale.png":[16,16,"png","qx","feedreader/images/combined/icons16.png",0,-48],"qx/icon/Tango/16/apps/preferences-theme.png":[16,16,"png","qx","feedreader/images/combined/icons16.png",0,-32]},"translations":{}};

qx.Part.$$notifyLoad("df6504093596", function() {
(function(){var q="move",p="Boolean",o="mouseup",n="mousedown",m="losecapture",l="qx.ui.core.MMovable",k="__Y",j="__ba",i="mousemove",h="maximized",g="move-frame";
qx.Mixin.define(l,{properties:{movable:{check:p,init:true},useMoveFrame:{check:p,init:false}},members:{__Y:null,__ba:null,__bb:null,__bc:null,__bd:null,__be:null,__bf:null,__bg:false,__bh:null,__bi:0,_activateMoveHandle:function(r){if(this.__Y){throw new Error("The move handle could not be redefined!");
}this.__Y=r;
r.addListener(n,this._onMoveMouseDown,this);
r.addListener(o,this._onMoveMouseUp,this);
r.addListener(i,this._onMoveMouseMove,this);
r.addListener(m,this.__bm,this);
},__bj:function(){var z=this.__ba;

if(!z){z=this.__ba=new qx.ui.core.Widget();
z.setAppearance(g);
z.exclude();
qx.core.Init.getApplication().getRoot().add(z);
}return z;
},__bk:function(){var location=this.getContainerLocation();
var v=this.getBounds();
var u=this.__bj();
u.setUserBounds(location.left,location.top,v.width,v.height);
u.show();
u.setZIndex(this.getZIndex()+1);
},__bl:function(e){var b=this.__bb;
var f=Math.max(b.left,Math.min(b.right,e.getDocumentLeft()));
var d=Math.max(b.top,Math.min(b.bottom,e.getDocumentTop()));
var a=this.__bc+f;
var c=this.__bd+d;
return {viewportLeft:a,viewportTop:c,parentLeft:a-this.__be,parentTop:c-this.__bf};
},_onMoveMouseDown:function(e){if(!this.getMovable()||this.hasState(h)){return;
}var parent=this.getLayoutParent();
var x=parent.getContentLocation();
var y=parent.getBounds();
if(qx.Class.implementsInterface(parent,qx.ui.window.IDesktop)){if(!parent.isContentBlocked()){this.__bg=true;
this.__bh=parent.getBlockerColor();
this.__bi=parent.getBlockerOpacity();
parent.setBlockerColor(null);
parent.setBlockerOpacity(1);
parent.blockContent(this.getZIndex()-1);
}}this.__bb={left:x.left,top:x.top,right:x.left+y.width,bottom:x.top+y.height};
var w=this.getContainerLocation();
this.__be=x.left;
this.__bf=x.top;
this.__bc=w.left-e.getDocumentLeft();
this.__bd=w.top-e.getDocumentTop();
this.addState(q);
this.__Y.capture();
if(this.getUseMoveFrame()){this.__bk();
}e.stop();
},_onMoveMouseMove:function(e){if(!this.hasState(q)){return;
}var s=this.__bl(e);

if(this.getUseMoveFrame()){this.__bj().setDomPosition(s.viewportLeft,s.viewportTop);
}else{this.setDomPosition(s.parentLeft,s.parentTop);
}e.stopPropagation();
},_onMoveMouseUp:function(e){if(!this.hasState(q)){return;
}this.removeState(q);
var parent=this.getLayoutParent();

if(qx.Class.implementsInterface(parent,qx.ui.window.IDesktop)){if(this.__bg){parent.unblockContent();
parent.setBlockerColor(this.__bh);
parent.setBlockerOpacity(this.__bi);
this.__bh=null;
this.__bi=0;
}}this.__Y.releaseCapture();
var t=this.__bl(e);
this.setLayoutProperties({left:t.parentLeft,top:t.parentTop});
if(this.getUseMoveFrame()){this.__bj().exclude();
}e.stopPropagation();
},__bm:function(e){if(!this.hasState(q)){return;
}this.removeState(q);
if(this.getUseMoveFrame()){this.__bj().exclude();
}}},destruct:function(){this._disposeObjects(j,k);
this.__bb=null;
}});
})();
(function(){var a="qx.ui.window.IDesktop";
qx.Interface.define(a,{members:{setWindowManager:function(c){this.assertInterface(c,qx.ui.window.IWindowManager);
},getWindows:function(){},supportsMaximize:function(){},blockContent:function(b){this.assertInteger(b);
},unblockContent:function(){},isContentBlocked:function(){}}});
})();
(function(){var l="Boolean",k="resize",j="mousedown",i="w-resize",h="sw-resize",g="n-resize",f="resizableRight",d="ne-resize",c="se-resize",b="Integer",A="e-resize",z="resizableLeft",y="mousemove",x="move",w="shorthand",v="maximized",u="nw-resize",t="mouseout",s="qx.ui.core.MResizable",r="mouseup",p="losecapture",q="resize-frame",n="resizableBottom",o="s-resize",m="resizableTop";
qx.Mixin.define(s,{construct:function(){this.addListener(j,this.__bC,this,true);
this.addListener(r,this.__bD,this);
this.addListener(y,this.__bF,this);
this.addListener(t,this.__bG,this);
this.addListener(p,this.__bE,this);
var R=this.getContainerElement().getDomElement();

if(R==null){R=window;
}this.__bq=qx.event.Registration.getManager(R).getHandler(qx.event.handler.DragDrop);
},properties:{resizableTop:{check:l,init:true},resizableRight:{check:l,init:true},resizableBottom:{check:l,init:true},resizableLeft:{check:l,init:true},resizable:{group:[m,f,n,z],mode:w},resizeSensitivity:{check:b,init:5},useResizeFrame:{check:l,init:true}},members:{__bq:null,__br:null,__bs:null,__bt:null,__bu:null,__bv:null,__bw:null,RESIZE_TOP:1,RESIZE_BOTTOM:2,RESIZE_LEFT:4,RESIZE_RIGHT:8,__bx:function(){var a=this.__br;

if(!a){a=this.__br=new qx.ui.core.Widget();
a.setAppearance(q);
a.exclude();
qx.core.Init.getApplication().getRoot().add(a);
}return a;
},__by:function(){var C=this.__bv;
var B=this.__bx();
B.setUserBounds(C.left,C.top,C.width,C.height);
B.show();
B.setZIndex(this.getZIndex()+1);
},__bz:function(e){var K=this.__bs;
var L=this.getSizeHint();
var O=this.__bw;
var N=this.__bv;
var J=N.width;
var M=N.height;
var Q=N.left;
var top=N.top;
var P;

if((K&this.RESIZE_TOP)||(K&this.RESIZE_BOTTOM)){P=Math.max(O.top,Math.min(O.bottom,e.getDocumentTop()))-this.__bu;

if(K&this.RESIZE_TOP){M-=P;
}else{M+=P;
}
if(M<L.minHeight){M=L.minHeight;
}else if(M>L.maxHeight){M=L.maxHeight;
}
if(K&this.RESIZE_TOP){top+=N.height-M;
}}
if((K&this.RESIZE_LEFT)||(K&this.RESIZE_RIGHT)){P=Math.max(O.left,Math.min(O.right,e.getDocumentLeft()))-this.__bt;

if(K&this.RESIZE_LEFT){J-=P;
}else{J+=P;
}
if(J<L.minWidth){J=L.minWidth;
}else if(J>L.maxWidth){J=L.maxWidth;
}
if(K&this.RESIZE_LEFT){Q+=N.width-J;
}}return {viewportLeft:Q,viewportTop:top,parentLeft:N.bounds.left+Q-N.left,parentTop:N.bounds.top+top-N.top,width:J,height:M};
},__bA:{1:g,2:o,4:i,8:A,5:u,6:h,9:d,10:c},__bB:function(e){var G=this.getContentLocation();
var E=this.getResizeSensitivity();
var I=e.getDocumentLeft();
var H=e.getDocumentTop();
var F=0;

if(this.getResizableTop()&&Math.abs(G.top-H)<E){F+=this.RESIZE_TOP;
}else if(this.getResizableBottom()&&Math.abs(G.bottom-H)<E){F+=this.RESIZE_BOTTOM;
}
if(this.getResizableLeft()&&Math.abs(G.left-I)<E){F+=this.RESIZE_LEFT;
}else if(this.getResizableRight()&&Math.abs(G.right-I)<E){F+=this.RESIZE_RIGHT;
}this.__bs=F;
},__bC:function(e){if(!this.__bs){return;
}this.addState(k);
this.__bt=e.getDocumentLeft();
this.__bu=e.getDocumentTop();
var location=this.getContainerLocation();
var U=this.getBounds();
this.__bv={top:location.top,left:location.left,width:U.width,height:U.height,bounds:qx.lang.Object.clone(U)};
var parent=this.getLayoutParent();
var S=parent.getContentLocation();
var T=parent.getBounds();
this.__bw={left:S.left,top:S.top,right:S.left+T.width,bottom:S.top+T.height};
if(this.getUseResizeFrame()){this.__by();
}this.capture();
e.stop();
},__bD:function(e){if(!this.hasState(k)){return;
}if(this.getUseResizeFrame()){this.__bx().exclude();
}var D=this.__bz(e);
this.setWidth(D.width);
this.setHeight(D.height);
if(this.getResizableLeft()||this.getResizableTop()){this.setLayoutProperties({left:D.parentLeft,top:D.parentTop});
}this.__bs=0;
this.removeState(k);
this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
this.releaseCapture();
e.stopPropagation();
},__bE:function(e){if(!this.__bs){return;
}this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
this.removeState(x);
if(this.getUseResizeFrame()){this.__bx().exclude();
}},__bF:function(e){if(this.hasState(k)){var Y=this.__bz(e);
if(this.getUseResizeFrame()){var W=this.__bx();
W.setUserBounds(Y.viewportLeft,Y.viewportTop,Y.width,Y.height);
}else{this.setWidth(Y.width);
this.setHeight(Y.height);
if(this.getResizableLeft()||this.getResizableTop()){this.setLayoutProperties({left:Y.parentLeft,top:Y.parentTop});
}}e.stopPropagation();
}else if(!this.hasState(v)&&!this.__bq.isSessionActive()){this.__bB(e);
var ba=this.__bs;
var X=this.getApplicationRoot();

if(ba){var V=this.__bA[ba];
this.setCursor(V);
X.setGlobalCursor(V);
}else if(this.getCursor()){this.resetCursor();
X.resetGlobalCursor();
}}},__bG:function(e){if(this.getCursor()&&!this.hasState(k)){this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
}}},destruct:function(){if(this.__br!=null&&!qx.core.ObjectRegistry.inShutDown){this.__br.destroy();
this.__br=null;
}this.__bq=null;
}});
})();
(function(){var a="qx.ui.window.IWindowManager";
qx.Interface.define(a,{members:{setDesktop:function(e){this.assertInterface(e,qx.ui.window.IDesktop);
},changeActiveWindow:function(c,d){},updateStack:function(){},bringToFront:function(f){this.assertInstance(f,qx.ui.window.Window);
},sendToBack:function(b){this.assertInstance(b,qx.ui.window.Window);
}}});
})();
(function(){var b="__bp",a="qx.ui.window.Manager";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.ui.window.IWindowManager,members:{__bp:null,setDesktop:function(p){this.__bp=p;
this.updateStack();
},getDesktop:function(){return this.__bp;
},changeActiveWindow:function(c,d){if(c){this.updateStack();
this.bringToFront(c);
c.setActive(true);
}
if(d){d.resetActive();
}},_minZIndex:1e5,updateStack:function(){qx.ui.core.queue.Widget.add(this);
},syncWidget:function(){this.__bp.forceUnblockContent();
var h=this.__bp.getWindows();
var k=this._minZIndex;
var o=k+h.length*2;
var m=k+h.length*4;
var n=null;

for(var i=0,l=h.length;i<l;i++){var j=h[i];
if(!j.isVisible()){continue;
}if(n==null){n=j;
}if(j.isModal()){j.setZIndex(m);
this.__bp.blockContent(m-1);
m+=2;
}else if(j.isAlwaysOnTop()){j.setZIndex(o);
o+=2;
}else{j.setZIndex(k);
k+=2;
}if(j.isActive()){n=j;
}else{if(!n.isActive()){if(j.getZIndex()>n.getZIndex()){n=j;
}}}}
if(n){this.__bp.setActiveWindow(n);
}},bringToFront:function(q){var r=this.__bp.getWindows();
var s=qx.lang.Array.remove(r,q);

if(s){r.push(q);
this.updateStack();
}},sendToBack:function(e){var f=this.__bp.getWindows();
var g=qx.lang.Array.remove(f,e);

if(g){f.unshift(e);
this.updateStack();
}}},destruct:function(){this._disposeObjects(b);
}});
})();
(function(){var m="Boolean",l="qx.event.type.Event",k="captionbar",j="_applyCaptionBarChange",i="maximize-button",h="restore-button",g="minimize-button",f="close-button",d="maximized",c="execute",S="pane",R="title",Q="icon",P="statusbar-text",O="statusbar",N="String",M="normal",L="active",K="beforeClose",J="beforeMinimize",t="mousedown",u="changeStatus",r="changeIcon",s="excluded",p="dblclick",q="_applyActive",n="beforeRestore",o="minimize",v="changeModal",w="changeAlwaysOnTop",B="_applyShowStatusbar",A="_applyStatus",D="qx.ui.window.Window",C="changeCaption",F="focusout",E="beforeMaximize",y="maximize",I="restore",H="window",G="close",x="changeActive",z="minimized";
qx.Class.define(D,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MRemoteLayoutHandling,qx.ui.core.MResizable,qx.ui.core.MMovable,qx.ui.core.MContentPadding],construct:function(bh,bi){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.VBox());
this._createChildControl(k);
this._createChildControl(S);
if(bi!=null){this.setIcon(bi);
}
if(bh!=null){this.setCaption(bh);
}this._updateCaptionBar();
this.addListener(t,this._onWindowMouseDown,this,true);
this.addListener(F,this._onWindowFocusOut,this);
qx.core.Init.getApplication().getRoot().add(this);
this.initVisibility();
qx.ui.core.FocusHandler.getInstance().addRoot(this);
},statics:{DEFAULT_MANAGER_CLASS:qx.ui.window.Manager},events:{"beforeClose":l,"close":l,"beforeMinimize":l,"minimize":l,"beforeMaximize":l,"maximize":l,"beforeRestore":l,"restore":l},properties:{appearance:{refine:true,init:H},visibility:{refine:true,init:s},focusable:{refine:true,init:true},active:{check:m,init:false,apply:q,event:x},alwaysOnTop:{check:m,init:false,event:w},modal:{check:m,init:false,event:v},caption:{apply:j,event:C,nullable:true},icon:{check:N,nullable:true,apply:j,event:r,themeable:true},status:{check:N,nullable:true,apply:A,event:u},showClose:{check:m,init:true,apply:j,themeable:true},showMaximize:{check:m,init:true,apply:j,themeable:true},showMinimize:{check:m,init:true,apply:j,themeable:true},allowClose:{check:m,init:true,apply:j},allowMaximize:{check:m,init:true,apply:j},allowMinimize:{check:m,init:true,apply:j},showStatusbar:{check:m,init:false,apply:B}},members:{__bn:null,__bo:null,getChildrenContainer:function(){return this.getChildControl(S);
},_forwardStates:{active:true,maximized:true},setLayoutParent:function(parent){{};
qx.ui.core.Widget.prototype.setLayoutParent.call(this,parent);
},_createChildControlImpl:function(bl){var bm;

switch(bl){case O:bm=new qx.ui.container.Composite(new qx.ui.layout.HBox());
this._add(bm);
bm.add(this.getChildControl(P));
break;
case P:bm=new qx.ui.basic.Label();
bm.setValue(this.getStatus());
break;
case S:bm=new qx.ui.container.Composite();
this._add(bm,{flex:1});
break;
case k:var bo=new qx.ui.layout.Grid();
bo.setRowFlex(0,1);
bo.setColumnFlex(1,1);
bm=new qx.ui.container.Composite(bo);
this._add(bm);
bm.addListener(p,this._onCaptionMouseDblClick,this);
this._activateMoveHandle(bm);
break;
case Q:bm=new qx.ui.basic.Image(this.getIcon());
this.getChildControl(k).add(bm,{row:0,column:0});
break;
case R:bm=new qx.ui.basic.Label(this.getCaption());
bm.setWidth(0);
bm.setAllowGrowX(true);
var bn=this.getChildControl(k);
bn.add(bm,{row:0,column:1});
break;
case g:bm=new qx.ui.form.Button();
bm.setFocusable(false);
bm.addListener(c,this._onMinimizeButtonClick,this);
this.getChildControl(k).add(bm,{row:0,column:2});
break;
case h:bm=new qx.ui.form.Button();
bm.setFocusable(false);
bm.addListener(c,this._onRestoreButtonClick,this);
this.getChildControl(k).add(bm,{row:0,column:3});
break;
case i:bm=new qx.ui.form.Button();
bm.setFocusable(false);
bm.addListener(c,this._onMaximizeButtonClick,this);
this.getChildControl(k).add(bm,{row:0,column:4});
break;
case f:bm=new qx.ui.form.Button();
bm.setFocusable(false);
bm.addListener(c,this._onCloseButtonClick,this);
this.getChildControl(k).add(bm,{row:0,column:6});
break;
}return bm||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,bl);
},_updateCaptionBar:function(){var bb;
var bc=this.getIcon();

if(bc){this.getChildControl(Q).setSource(bc);
this._showChildControl(Q);
}else{this._excludeChildControl(Q);
}var ba=this.getCaption();

if(ba){this.getChildControl(R).setValue(ba);
this._showChildControl(R);
}else{this._excludeChildControl(R);
}
if(this.getShowMinimize()){this._showChildControl(g);
bb=this.getChildControl(g);
this.getAllowMinimize()?bb.resetEnabled():bb.setEnabled(false);
}else{this._excludeChildControl(g);
}
if(this.getShowMaximize()){if(this.isMaximized()){this._showChildControl(h);
this._excludeChildControl(i);
}else{this._showChildControl(i);
this._excludeChildControl(h);
}bb=this.getChildControl(i);
this.getAllowMaximize()?bb.resetEnabled():bb.setEnabled(false);
}else{this._excludeChildControl(i);
this._excludeChildControl(h);
}
if(this.getShowClose()){this._showChildControl(f);
bb=this.getChildControl(f);
this.getAllowClose()?bb.resetEnabled():bb.setEnabled(false);
}else{this._excludeChildControl(f);
}},close:function(){if(!this.isVisible()){return;
}
if(this.fireNonBubblingEvent(K,qx.event.type.Event,[false,true])){this.hide();
this.fireEvent(G);
}},open:function(){this.show();
this.setActive(true);
this.focus();
},center:function(){var parent=this.getLayoutParent();

if(parent){var be=parent.getBounds();

if(be){var bf=this.getSizeHint();
var bd=Math.round((be.width-bf.width)/2);
var top=Math.round((be.height-bf.height)/2);

if(top<0){top=0;
}this.moveTo(bd,top);
return;
}}{};
},maximize:function(){if(this.isMaximized()){return;
}var parent=this.getLayoutParent();

if(parent!=null&&parent.supportsMaximize()){if(this.fireNonBubblingEvent(E,qx.event.type.Event,[false,true])){if(!this.isVisible()){this.open();
}var bp=this.getLayoutProperties();
this.__bo=bp.left===undefined?0:bp.left;
this.__bn=bp.top===undefined?0:bp.top;
this.setLayoutProperties({left:null,top:null,edge:0});
this.addState(d);
this._updateCaptionBar();
this.fireEvent(y);
}}},minimize:function(){if(!this.isVisible()){return;
}
if(this.fireNonBubblingEvent(J,qx.event.type.Event,[false,true])){var Y=this.getLayoutProperties();
this.__bo=Y.left===undefined?0:Y.left;
this.__bn=Y.top===undefined?0:Y.top;
this.removeState(d);
this.hide();
this.fireEvent(o);
}},restore:function(){if(this.getMode()===M){return;
}
if(this.fireNonBubblingEvent(n,qx.event.type.Event,[false,true])){if(!this.isVisible()){this.open();
}var br=this.__bo;
var top=this.__bn;
this.setLayoutProperties({edge:null,left:br,top:top});
this.removeState(d);
this._updateCaptionBar();
this.fireEvent(I);
}},moveTo:function(bq,top){if(this.isMaximized()){return;
}this.setLayoutProperties({left:bq,top:top});
},isMaximized:function(){return this.hasState(d);
},getMode:function(){if(!this.isVisible()){return z;
}else{if(this.isMaximized()){return d;
}else{return M;
}}},_applyActive:function(T,U){if(U){this.removeState(L);
}else{this.addState(L);
}},_getContentPaddingTarget:function(){return this.getChildControl(S);
},_applyShowStatusbar:function(a,b){if(a){this._showChildControl(O);
}else{this._excludeChildControl(O);
}},_applyCaptionBarChange:function(bj,bk){this._updateCaptionBar();
},_applyStatus:function(V,W){var X=this.getChildControl(P,true);

if(X){X.setValue(V);
}},_onWindowEventStop:function(e){e.stopPropagation();
},_onWindowMouseDown:function(e){this.setActive(true);
},_onWindowFocusOut:function(e){if(this.getModal()){return;
}var bg=e.getRelatedTarget();

if(bg!=null&&!qx.ui.core.Widget.contains(this,bg)){this.setActive(false);
}},_onCaptionMouseDblClick:function(e){if(this.getAllowMaximize()){this.isMaximized()?this.restore():this.maximize();
}},_onMinimizeButtonClick:function(e){this.minimize();
this.getChildControl(g).reset();
},_onRestoreButtonClick:function(e){this.restore();
this.getChildControl(h).reset();
},_onMaximizeButtonClick:function(e){this.maximize();
this.getChildControl(i).reset();
},_onCloseButtonClick:function(e){this.close();
this.getChildControl(f).reset();
}}});
})();
(function(){var b="qx.ui.form.IBooleanForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
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
(function(){var b="qx.ui.form.IRadioItem",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){},getValue:function(){},setGroup:function(d){this.assertInstance(d,qx.ui.form.RadioGroup);
},getGroup:function(){}}});
})();
(function(){var p="checked",o="keypress",n="Boolean",m="Right",l="_applyValue",k="changeValue",j="qx.ui.form.RadioButton",i="radiobutton",h="Left",g="qx.ui.form.RadioGroup",c="Down",f="_applyGroup",d="Up",b="execute";
qx.Class.define(j,{extend:qx.ui.form.Button,include:[qx.ui.form.MForm,qx.ui.form.MModelProperty],implement:[qx.ui.form.IRadioItem,qx.ui.form.IForm,qx.ui.form.IBooleanForm,qx.ui.form.IModel],construct:function(q){{};
qx.ui.form.Button.call(this,q);
this.addListener(b,this._onExecute);
this.addListener(o,this._onKeyPress);
},properties:{group:{check:g,nullable:true,apply:f},value:{check:n,nullable:true,event:k,apply:l,init:false},appearance:{refine:true,init:i},allowGrowX:{refine:true,init:false}},members:{_applyValue:function(t,u){t?this.addState(p):this.removeState(p);

if(t&&this.getFocusable()){this.focus();
}},_applyGroup:function(r,s){if(s){s.remove(this);
}
if(r){r.add(this);
}},_onExecute:function(e){this.setValue(true);
},_onKeyPress:function(e){var a=this.getGroup();

if(!a){return;
}
switch(e.getKeyIdentifier()){case h:case d:a.selectPrevious();
break;
case m:case c:a.selectNext();
break;
}}}});
})();
(function(){var t="language",s="execute",r="icon/16/apps/preferences-locale.png",q="Français",p="icon/16/apps/preferences-theme.png",o="feedreader.view.PreferenceWindow",n="English",m="Nederlands",l="Italiano",k="Language",d="icon/16/actions/dialog-cancel.png",j="icon/16/actions/dialog-ok.png",h="Svenska",c="Preferences",b="Cancel",g="right",f="Deutsch",i="OK",a="Espanol";
qx.Class.define(o,{extend:qx.ui.window.Window,construct:function(){qx.ui.window.Window.call(this,this.tr(c),p);
this.set({modal:true,showMinimize:false,showMaximize:false,allowMaximize:false});
this._addContent();
},members:{_addContent:function(){var B,C;
var z=new qx.ui.layout.VBox(10);
this.setLayout(z);
this.setMinWidth(350);
var F=new qx.ui.groupbox.GroupBox(this.tr(k),r);
F.setMinWidth(150);
F.setLayout(new qx.ui.layout.VBox());
this.add(F);
var H=new qx.ui.form.RadioGroup();
var D={"en":n,"de":f,"es":a,"fr":q,"it":l,"nl":m,"sv":h};
var G=qx.locale.Manager.getInstance();
{};
var E;

for(var v in D){E=new qx.ui.form.RadioButton(D[v]);
E.setUserData(t,v);
H.add(E);
F.add(E);
if(G.getLanguage()==v){H.setSelection([E]);
}}var y=new qx.ui.layout.HBox(10,g);
var w=new qx.ui.container.Composite(y);
var A=new qx.ui.form.Button(this.tr(b),d);
A.addListener(s,this.close,this);
var x=new qx.ui.form.Button(this.tr(i),j);
x.addListener(s,function(e){var u=H.getSelection()[0].getUserData(t);
qx.io.PartLoader.require([u],function(){qx.locale.Manager.getInstance().setLocale(u);
},this);
this.close();
},this);
w.add(A);
w.add(x);
this.add(w);
}}});
})();
(function(){var k="legend",j="frame",i="middle",h="top",g="resize",f="qx.ui.groupbox.GroupBox",d="groupbox",c="_applyLegendPosition";
qx.Class.define(f,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MRemoteLayoutHandling,qx.ui.core.MContentPadding,qx.ui.form.MForm],implement:[qx.ui.form.IForm],construct:function(o,p){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.Canvas);
this._createChildControl(j);
this._createChildControl(k);
if(o!=null){this.setLegend(o);
}
if(p!=null){this.setIcon(p);
}},properties:{appearance:{refine:true,init:d},legendPosition:{check:[h,i],init:i,apply:c,themeable:true}},members:{_forwardStates:{invalid:true},_createChildControlImpl:function(q){var r;

switch(q){case j:r=new qx.ui.container.Composite();
this._add(r,{left:0,top:6,right:0,bottom:0});
break;
case k:r=new qx.ui.basic.Atom();
r.addListener(g,this._repositionFrame,this);
this._add(r);
break;
}return r||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,q);
},_getContentPaddingTarget:function(){return this.getChildControl(j);
},_applyLegendPosition:function(e){if(this.getChildControl(k).getBounds()){this._repositionFrame();
}},_repositionFrame:function(){var m=this.getChildControl(k);
var l=this.getChildControl(j);
var n=m.getBounds().height;
if(this.getLegendPosition()==i){l.setLayoutProperties({"top":Math.round(n/2)});
}else if(this.getLegendPosition()==h){l.setLayoutProperties({"top":n});
}},getChildrenContainer:function(){return this.getChildControl(j);
},setLegend:function(a){var b=this.getChildControl(k);

if(a!==null){b.setLabel(a);
b.show();
}else{b.exclude();
}},getLegend:function(){return this.getChildControl(k).getLabel();
},setIcon:function(s){this.getChildControl(k).setIcon(s);
},getIcon:function(){this.getChildControl(k).getIcon();
}}});
})();

});