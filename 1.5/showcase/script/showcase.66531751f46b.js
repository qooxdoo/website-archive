qx.$$packageData['4']={"locales":{},"resources":{"qx/icon/Tango/22/actions/document-send.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/mail-mark-important.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/mail-mark-junk.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/mail-message-new.png":[22,22,"png","qx"],"qx/icon/Tango/22/apps/internet-mail.png":[22,22,"png","qx"],"qx/icon/Tango/22/apps/office-chart.png":[22,22,"png","qx"],"qx/icon/Tango/22/devices/drive-harddisk.png":[22,22,"png","qx"],"qx/icon/Tango/22/devices/drive-optical.png":[22,22,"png","qx"],"qx/icon/Tango/22/mimetypes/media-image.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder-open.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder-remote.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/network-server.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/network-workgroup.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/user-desktop.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/user-home.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/user-trash-full.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/user-trash.png":[22,22,"png","qx"]},"translations":{}};
qx.Part.$$notifyLoad("4", function() {
(function(){var i="opened",h="click",g="mousedown",f="Boolean",d="changeOpen",c="_applyOpen",b="mouseup",a="qx.ui.tree.core.FolderOpenButton";
qx.Class.define(a,{extend:qx.ui.basic.Image,include:qx.ui.core.MExecutable,construct:function(){qx.ui.basic.Image.call(this);
this.initOpen();
this.addListener(h,this._onClick);
this.addListener(g,this._stopPropagation,this);
this.addListener(b,this._stopPropagation,this);
},properties:{open:{check:f,init:false,event:d,apply:c}},members:{_applyOpen:function(j,k){j?this.addState(i):this.removeState(i);
this.execute();
},_stopPropagation:function(e){e.stopPropagation();
},_onClick:function(e){this.toggleOpen();
e.stopPropagation();
}}});
})();
(function(){var e="qx.ui.tree.selection.SelectionManager",d="above",c="under",b="right",a="left";
qx.Class.define(e,{extend:qx.ui.core.selection.ScrollArea,members:{_getSelectableLocationY:function(f){var g=f.getBounds();

if(g){var top=this._getWidget().getItemTop(f);
return {top:top,bottom:top+g.height};
}},_isSelectable:function(h){return this._isItemSelectable(h)&&h instanceof qx.ui.tree.core.AbstractTreeItem;
},_getSelectableFromMouseEvent:function(event){return this._getWidget().getTreeItem(event.getTarget());
},getSelectables:function(j){var m=false;

if(!j){m=this._userInteraction;
this._userInteraction=true;
}var l=this._getWidget();
var n=[];

if(l.getRoot()!=null){var k=l.getRoot().getItems(true,!!j,l.getHideRoot());

for(var i=0;i<k.length;i++){if(this._isSelectable(k[i])){n.push(k[i]);
}}}this._userInteraction=m;
return n;
},_getSelectableRange:function(o,p){if(o===p){return [o];
}var q=this.getSelectables();
var r=q.indexOf(o);
var s=q.indexOf(p);

if(r<0||s<0){return [];
}
if(r<s){return q.slice(r,s+1);
}else{return q.slice(s,r+1);
}},_getFirstSelectable:function(){return this.getSelectables()[0]||null;
},_getLastSelectable:function(){var t=this.getSelectables();

if(t.length>0){return t[t.length-1];
}else{return null;
}},_getRelatedSelectable:function(u,v){var w=this._getWidget();
var x=null;

switch(v){case d:x=w.getPreviousNodeOf(u,false);
break;
case c:x=w.getNextNodeOf(u,false);
break;
case a:case b:break;
}
if(!x){return null;
}
if(this._isSelectable(x)){return x;
}else{return this._getRelatedSelectable(x,v);
}}}});
})();
(function(){var l="dblclick",k="click",j="Boolean",h="excluded",g="visible",f="qx.event.type.Data",d="_applyOpenMode",c="Space",b="Left",a="Enter",z="changeOpenMode",y="_applyRootOpenClose",x="changeSelection",w="qx.ui.tree.Tree",v="qx.ui.tree.core.AbstractTreeItem",u="tree",t="_applyHideRoot",s="changeRoot",r="_applyRoot",q="__oF",o="keypress",p="none",m="pane",n="Right";
qx.Class.define(w,{extend:qx.ui.core.scroll.AbstractScrollArea,implement:[qx.ui.core.IMultiSelection,qx.ui.form.IModelSelection,qx.ui.form.IForm],include:[qx.ui.core.MMultiSelectionHandling,qx.ui.core.MContentPadding,qx.ui.form.MModelSelection,qx.ui.form.MForm],construct:function(){qx.ui.core.scroll.AbstractScrollArea.call(this);
this.__oF=new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({allowShrinkY:false,allowGrowX:true});
this.getChildControl(m).add(this.__oF);
this.initOpenMode();
this.initRootOpenClose();
this.addListener(x,this._onChangeSelection,this);
this.addListener(o,this._onKeyPress,this);
},events:{addItem:f,removeItem:f},properties:{openMode:{check:[k,l,p],init:l,apply:d,event:z,themeable:true},root:{check:v,init:null,nullable:true,event:s,apply:r},hideRoot:{check:j,init:false,apply:t},rootOpenClose:{check:j,init:false,apply:y},appearance:{refine:true,init:u},focusable:{refine:true,init:true}},members:{__oF:null,SELECTION_MANAGER:qx.ui.tree.selection.SelectionManager,getChildrenContainer:function(){return this.__oF;
},_applyRoot:function(A,B){var C=this.getChildrenContainer();

if(B){C.remove(B);

if(B.hasChildren()){C.remove(B.getChildrenContainer());
}}
if(A){C.add(A);

if(A.hasChildren()){C.add(A.getChildrenContainer());
}A.setVisibility(this.getHideRoot()?h:g);
A.recursiveAddToWidgetQueue();
}},_applyHideRoot:function(D,E){var F=this.getRoot();

if(!F){return;
}F.setVisibility(D?h:g);
F.recursiveAddToWidgetQueue();
},_applyRootOpenClose:function(G,H){var I=this.getRoot();

if(!I){return;
}I.recursiveAddToWidgetQueue();
},_getContentPaddingTarget:function(){return this.__oF;
},getNextNodeOf:function(J,K){if((K!==false||J.isOpen())&&J.hasChildren()){return J.getChildren()[0];
}
while(J){var parent=J.getParent();

if(!parent){return null;
}var M=parent.getChildren();
var L=M.indexOf(J);

if(L>-1&&L<M.length-1){return M[L+1];
}J=parent;
}return null;
},getPreviousNodeOf:function(N,O){var parent=N.getParent();

if(!parent){return null;
}
if(this.getHideRoot()){if(parent==this.getRoot()){if(parent.getChildren()[0]==N){return null;
}}}else{if(N==this.getRoot()){return null;
}}var R=parent.getChildren();
var P=R.indexOf(N);

if(P>0){var Q=R[P-1];

while((O!==false||Q.isOpen())&&Q.hasChildren()){var S=Q.getChildren();
Q=S[S.length-1];
}return Q;
}else{return parent;
}},getNextSiblingOf:function(T){if(T==this.getRoot()){return null;
}var parent=T.getParent();
var U=parent.getChildren();
var V=U.indexOf(T);

if(V<U.length-1){return U[V+1];
}return null;
},getPreviousSiblingOf:function(W){if(W==this.getRoot()){return null;
}var parent=W.getParent();
var X=parent.getChildren();
var Y=X.indexOf(W);

if(Y>0){return X[Y-1];
}return null;
},getItems:function(ba,bb){if(this.getRoot()!=null){return this.getRoot().getItems(ba,bb,this.getHideRoot());
}else{return [];
}},getChildren:function(){if(this.getRoot()!=null){return [this.getRoot()];
}else{return [];
}},getTreeItem:function(bc){while(bc){if(bc==this){return null;
}
if(bc instanceof qx.ui.tree.core.AbstractTreeItem){return bc;
}bc=bc.getLayoutParent();
}return null;
},_applyOpenMode:function(bd,be){if(be==k){this.removeListener(k,this._onOpen,this);
}else if(be==l){this.removeListener(l,this._onOpen,this);
}
if(bd==k){this.addListener(k,this._onOpen,this);
}else if(bd==l){this.addListener(l,this._onOpen,this);
}},_onOpen:function(e){var bf=this.getTreeItem(e.getTarget());

if(!bf||!bf.isOpenable()){return;
}bf.setOpen(!bf.isOpen());
e.stopPropagation();
},_onChangeSelection:function(e){var bh=e.getData();
for(var i=0;i<bh.length;i++){var bg=bh[i];
while(bg.getParent()!=null){bg=bg.getParent();
bg.setOpen(true);
}}},_onKeyPress:function(e){var bi=this._getLeadItem();

if(bi!==null){switch(e.getKeyIdentifier()){case b:if(bi.isOpenable()&&bi.isOpen()){bi.setOpen(false);
}else if(bi.getParent()){this.setSelection([bi.getParent()]);
}break;
case n:if(bi.isOpenable()&&!bi.isOpen()){bi.setOpen(true);
}break;
case a:case c:if(bi.isOpenable()){bi.toggleOpen();
}break;
}}}},destruct:function(){this._disposeObjects(q);
}});
})();
(function(){var k="open",j="icon",i="auto",h="middle",g="String",f="label",d="changeOpen",c="opened",b="always",a="_applyIconOpened",D="Boolean",C="changeIcon",B="changeIconOpened",A="changeLabel",z="Integer",y="_applyIndent",x="changeOpenSymbolMode",w="_applyOpenSymbolMode",v="resize",u="",r="__qb",s="iconOpened",p="abstract",q="never",n="_applyIcon",o="_applyOpen",l="changeIndent",m="qx.ui.tree.core.AbstractItem",t="_applyLabel";
qx.Class.define(m,{extend:qx.ui.core.Widget,type:p,include:[qx.ui.form.MModelProperty],implement:[qx.ui.form.IModel],construct:function(E){qx.ui.core.Widget.call(this);

if(E!=null){this.setLabel(E);
}this._setLayout(new qx.ui.layout.HBox());
this._addWidgets();
this.initOpen();
},properties:{open:{check:D,init:false,event:d,apply:o},openSymbolMode:{check:[b,q,i],init:i,event:x,apply:w},indent:{check:z,init:19,apply:y,event:l,themeable:true},icon:{check:g,apply:n,event:C,nullable:true,themeable:true},iconOpened:{check:g,apply:a,event:B,nullable:true,themeable:true},label:{check:g,apply:t,event:A,init:u}},members:{__pY:null,__qa:null,__qb:null,_addWidgets:function(){throw new Error("Abstract method call.");
},_createChildControlImpl:function(F,G){var H;

switch(F){case f:H=new qx.ui.basic.Label().set({alignY:h,anonymous:true,value:this.getLabel()});
break;
case j:H=new qx.ui.basic.Image().set({alignY:h,anonymous:true,source:this.getIcon()});
break;
case k:H=new qx.ui.tree.core.FolderOpenButton().set({alignY:h});
H.addListener(d,this._onChangeOpen,this);
H.addListener(v,this._updateIndent,this);
break;
}return H||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,F);
},addWidget:function(I,J){this._add(I,J);
},addSpacer:function(){if(!this.__qb){this.__qb=new qx.ui.core.Spacer();
}else{this._remove(this.__qb);
}this._add(this.__qb);
},addOpenButton:function(){this._add(this.getChildControl(k));
},_onChangeOpen:function(e){if(this.isOpenable()){this.setOpen(e.getData());
}},addIcon:function(){var K=this.getChildControl(j);

if(this.__qa){this._remove(K);
}this._add(K);
this.__qa=true;
},addLabel:function(L){var M=this.getChildControl(f);

if(this.__pY){this._remove(M);
}
if(L){this.setLabel(L);
}else{M.setValue(this.getLabel());
}this._add(M);
this.__pY=true;
},_applyIcon:function(N,O){if(!this.__qd()){this.__qe(N);
}else if(!this.isOpen()){this.__qe(N);
}},_applyIconOpened:function(P,Q){if(this.isOpen()){if(this.__qc()&&this.__qd()){this.__qe(P);
}else if(!this.__qc()&&this.__qd()){this.__qe(P);
}}},_applyLabel:function(R,S){var T=this.getChildControl(f,true);

if(T){T.setValue(R);
}},_applyOpen:function(U,V){var open=this.getChildControl(k,true);

if(open){open.setOpen(U);
}var W;
if(U){W=this.__qd()?this.getIconOpened():null;
}else{W=this.getIcon();
}
if(W){this.__qe(W);
}U?this.addState(c):this.removeState(c);
},__qc:function(){return qx.util.PropertyUtil.getUserValue(this,j);
},__qd:function(){return qx.util.PropertyUtil.getUserValue(this,s);
},__qe:function(X){var Y=this.getChildControl(j,true);

if(Y){Y.setSource(X);
}},isOpenable:function(){var ba=this.getOpenSymbolMode();
return (ba===b||ba===i&&this.hasChildren());
},_shouldShowOpenSymbol:function(){throw new Error("Abstract method call.");
},_applyOpenSymbolMode:function(bb,bc){this._updateIndent();
},_updateIndent:function(){var be=0;
var open=this.getChildControl(k,true);

if(open){if(this._shouldShowOpenSymbol()){open.show();
var bd=open.getBounds();

if(bd){be=bd.width;
}else{return;
}}else{open.exclude();
}}
if(this.__qb){this.__qb.setWidth((this.getLevel()+1)*this.getIndent()-be);
}},_applyIndent:function(bf,bg){this._updateIndent();
},getLevel:function(){throw new Error("Abstract method call.");
},syncWidget:function(){this._updateIndent();
},hasChildren:function(){throw new Error("Abstract method call.");
}},destruct:function(){this._disposeObjects(r);
}});
})();
(function(){var j="visible",h="excluded",g="qx.ui.tree.core.AbstractTreeItem",f="open",e="abstract",d="__ra",c="addItem",b="removeItem",a="__iL";
qx.Class.define(g,{extend:qx.ui.tree.core.AbstractItem,type:e,construct:function(k){qx.ui.tree.core.AbstractItem.call(this,k);
this.__iL=[];
},properties:{parent:{check:g,nullable:true}},members:{__iL:null,__ra:null,getTree:function(){var n=this;

while(n.getParent()){n=n.getParent();
}var m=n.getLayoutParent()?n.getLayoutParent().getLayoutParent():0;

if(m&&m instanceof qx.ui.core.scroll.ScrollPane){return m.getLayoutParent();
}return null;
},_applyOpen:function(o,p){if(this.hasChildren()){this.getChildrenContainer().setVisibility(o?j:h);
}qx.ui.tree.core.AbstractItem.prototype._applyOpen.call(this,o,p);
},_shouldShowOpenSymbol:function(){var open=this.getChildControl(f,true);

if(!open){return false;
}var q=this.getTree();

if(!q.getRootOpenClose()){if(q.getHideRoot()){if(q.getRoot()==this.getParent()){return false;
}}else{if(q.getRoot()==this){return false;
}}}return this.isOpenable();
},_updateIndent:function(){if(!this.getTree()){return;
}qx.ui.tree.core.AbstractItem.prototype._updateIndent.call(this);
},getLevel:function(){var r=this.getTree();

if(!r){return;
}var s=this;
var t=-1;

while(s){s=s.getParent();
t+=1;
}if(r.getHideRoot()){t-=1;
}
if(!r.getRootOpenClose()){t-=1;
}return t;
},addState:function(u){qx.ui.tree.core.AbstractItem.prototype.addState.call(this,u);
var w=this._getChildren();

for(var i=0,l=w.length;i<l;i++){var v=w[i];

if(v.addState){w[i].addState(u);
}}},removeState:function(x){qx.ui.tree.core.AbstractItem.prototype.removeState.call(this,x);
var z=this._getChildren();

for(var i=0,l=z.length;i<l;i++){var y=z[i];

if(y.removeState){z[i].removeState(x);
}}},getChildrenContainer:function(){if(!this.__ra){this.__ra=new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({visibility:this.isOpen()?j:h});
}return this.__ra;
},hasChildrenContainer:function(){return this.__ra;
},getParentChildrenContainer:function(){if(this.getParent()){return this.getParent().getChildrenContainer();
}else if(this.getLayoutParent()){return this.getLayoutParent();
}else{return null;
}},getChildren:function(){return this.__iL;
},hasChildren:function(){return this.__iL?this.__iL.length>0:false;
},getItems:function(A,B,C){if(C!==false){var D=[];
}else{var D=[this];
}var G=this.hasChildren()&&(B!==false||this.isOpen());

if(G){var F=this.getChildren();

if(A===false){D=D.concat(F);
}else{for(var i=0,E=F.length;i<E;i++){D=D.concat(F[i].getItems(A,B,false));
}}}return D;
},recursiveAddToWidgetQueue:function(){var H=this.getItems(true,true,false);

for(var i=0,l=H.length;i<l;i++){qx.ui.core.queue.Widget.add(H[i]);
}},__rb:function(){if(this.getParentChildrenContainer()){this.getParentChildrenContainer()._addAfter(this.getChildrenContainer(),this);
}},add:function(I){var J=this.getChildrenContainer();
var M=this.getTree();

for(var i=0,l=arguments.length;i<l;i++){var N=arguments[i];
var L=N.getParent();

if(L){L.remove(N);
}N.setParent(this);
var K=this.hasChildren();
J.add(N);

if(N.hasChildren()){J.add(N.getChildrenContainer());
}this.__iL.push(N);

if(!K){this.__rb();
}
if(M){N.recursiveAddToWidgetQueue();
M.fireNonBubblingEvent(c,qx.event.type.Data,[N]);
}}
if(M){qx.ui.core.queue.Widget.add(this);
}},addAt:function(O,P){if(P==this.__iL.length){this.add(O);
return;
}var T=O.getParent();

if(T){T.remove(O);
}var R=this.getChildrenContainer();
O.setParent(this);
var S=this.hasChildren();
var Q=this.__iL[P];
R.addBefore(O,Q);

if(O.hasChildren()){R.addAfter(O.getChildrenContainer(),O);
}qx.lang.Array.insertAt(this.__iL,O,P);

if(!S){this.__rb();
}
if(this.getTree()){O.recursiveAddToWidgetQueue();
qx.ui.core.queue.Widget.add(this);
}},addBefore:function(U,V){var W=U.getParent();

if(W){W.remove(U);
}this.addAt(U,this.__iL.indexOf(V));
},addAfter:function(X,Y){var ba=X.getParent();

if(ba){ba.remove(X);
}this.addAt(X,this.__iL.indexOf(Y)+1);
},addAtBegin:function(bb){this.addAt(bb,0);
},remove:function(bc){for(var i=0,l=arguments.length;i<l;i++){var bg=arguments[i];

if(this.__iL.indexOf(bg)==-1){this.warn("Cannot remove treeitem '"+bg+"'. It is not a child of this tree item.");
return;
}var bd=this.getChildrenContainer();

if(bg.hasChildrenContainer()){var bf=bg.getChildrenContainer();

if(bd.getChildren().indexOf(bf)>=0){bd.remove(bf);
}}qx.lang.Array.remove(this.__iL,bg);
bg.setParent(null);
bd.remove(bg);
}var be=this.getTree();

if(be){be.fireNonBubblingEvent(b,qx.event.type.Data,[bg]);
}qx.ui.core.queue.Widget.add(this);
},removeAt:function(bh){var bi=this.__iL[bh];

if(bi){this.remove(bi);
}},removeAll:function(){var bj=this.__iL.concat();

for(var i=this.__iL.length-1;i>=0;i--){this.remove(this.__iL[i]);
}return bj;
}},destruct:function(){this._disposeArray(a);
this._disposeObjects(d);
}});
})();
(function(){var b="tree-folder",a="qx.ui.tree.TreeFolder";
qx.Class.define(a,{extend:qx.ui.tree.core.AbstractTreeItem,properties:{appearance:{refine:true,init:b}},members:{_addWidgets:function(){this.addSpacer();
this.addOpenButton();
this.addIcon();
this.addLabel();
}}});
})();
(function(){var b="qx.ui.tree.TreeFile",a="tree-file";
qx.Class.define(b,{extend:qx.ui.tree.core.AbstractTreeItem,properties:{appearance:{refine:true,init:a}},members:{_addWidgets:function(){this.addSpacer();
this.addIcon();
this.addLabel();
}}});
})();
(function(){var k="Trash",j="icon/22/devices/drive-harddisk.png",h="middle",g="Windows (C:)",f="Simple View",e="Documents (D:)",d="icon/22/places/user-desktop.png",c="Inbox",b="Desktop",a="DVD (E:)",K="icon/22/actions/mail-mark-junk.png",J="rgb(228,228,228)",I="Network",H="Junk",G="Sent",F="Files",E="Important",D="multi",C="Home",B="icon/22/devices/drive-optical.png",r="icon/22/apps/internet-mail.png",s="icon/22/places/user-trash-full.png",p="Workspace",q="Junk #",n="icon/22/apps/office-chart.png",o="Data",l="May ",m="kb",t="icon/22/places/user-trash.png",u="icon/22/places/user-home.png",w="showcase.page.tree.Content",v="icon/22/places/network-server.png",y="icon/22/actions/document-send.png",x="icon/22/actions/mail-message-new.png",A=" 2005",z="icon/22/actions/mail-mark-important.png";
qx.Class.define(w,{extend:showcase.page.AbstractDesktopContent,construct:function(L){showcase.page.AbstractDesktopContent.call(this,L);
var M=this.__JY();
this.getView().add(M);
M.moveTo(260,20);
M.open();
},members:{_addWindowContent:function(N){N.set({caption:f,minWidth:200});
N.setLayout(new qx.ui.layout.Grow());
var Y=new qx.ui.tree.Tree().set({width:200,height:400,selectionMode:D,dragSelection:true,decorator:null,backgroundColor:J});
N.add(Y);
var be=new qx.ui.tree.TreeFolder(C).set({icon:u});
be.setOpen(true);
Y.setRoot(be);
var bc=new qx.ui.tree.TreeFolder(b).set({icon:d});
bc.setOpen(true);
be.add(bc);
var T=new qx.ui.tree.TreeFolder(F);
var R=new qx.ui.tree.TreeFolder(p);
var S=new qx.ui.tree.TreeFolder(I).set({icon:v});
var Q=new qx.ui.tree.TreeFolder(k).set({icon:t});
bc.add(T,R,S,Q);
var ba=new qx.ui.tree.TreeFile(g).set({icon:j});
var P=new qx.ui.tree.TreeFile(e).set({icon:j});
var O=new qx.ui.tree.TreeFile(a).set({icon:B});
R.add(ba,P,O);
var bd=new qx.ui.tree.TreeFolder(c).set({icon:r,open:true});
var U=new qx.ui.tree.TreeFolder(H).set({icon:K});
var X=new qx.ui.tree.TreeFolder(G).set({icon:y});
var W=new qx.ui.tree.TreeFolder(k).set({icon:s});

for(var i=0;i<30;i++){W.add(new qx.ui.tree.TreeFile(q+i).set({icon:x}));
}var bb=new qx.ui.tree.TreeFolder(o).set({icon:n});
var V=new qx.ui.tree.TreeFolder(E).set({icon:z});
bd.add(U,X,W,bb,V);
be.add(bd);
},__JY:function(){var bl=new qx.ui.window.Window().set({showClose:false,showMinimize:false,width:310,height:425,minWidth:200,caption:"Detailed View",layout:new qx.ui.layout.Grow(),contentPadding:0});
var bN=new qx.ui.tree.Tree().set({width:600,height:500,decorator:null,selectionMode:"multi",dragSelection:true,backgroundColor:"rgb(228,228,228)"});
bl.add(bN);
var bO=this.configureTreeItem(new qx.ui.tree.TreeFolder(),"Home","icon/22/places/user-home.png");
bO.setOpen(true);
bN.setRoot(bO);
var bG=this.configureTreeItem(new qx.ui.tree.TreeFolder(),"Desktop","icon/22/places/user-desktop.png");
bG.setOpen(true);
bO.add(bG);
var bj=this.configureTreeItem(new qx.ui.tree.TreeFolder(),"Files");
var bh=this.configureTreeItem(new qx.ui.tree.TreeFolder(),"Workspace");
var bi=this.configureTreeItem(new qx.ui.tree.TreeFolder(),"Network","icon/22/places/network-server.png");
var bg=this.configureTreeItem(new qx.ui.tree.TreeFolder(),"Trash","icon/22/places/user-trash-full.png");
bG.add(bj,bh,bi,bg);
var bM=this.configureTreeItem(new qx.ui.tree.TreeFile(),"Windows (C:)","icon/22/devices/drive-harddisk.png");
var bL=this.configureTreeItem(new qx.ui.tree.TreeFile(),"Documents (D:)","icon/22/devices/drive-harddisk.png");
bh.add(bM,bL);
var bH=this.configureTreeItem(new qx.ui.tree.TreeFolder(),"Inbox","icon/22/apps/internet-mail.png");
bH.setOpen(true);
var bk=this.configureTreeItem(new qx.ui.tree.TreeFolder(),"Junk","icon/22/actions/mail-mark-junk.png");
var bn=this.configureTreeItem(new qx.ui.tree.TreeFolder(),"Sent","icon/22/actions/document-send.png");
var bm=this.configureTreeItem(new qx.ui.tree.TreeFolder(),"Trash","icon/22/places/user-trash.png");
var bp=this.configureTreeItem(new qx.ui.tree.TreeFolder(),"Data","icon/22/apps/office-chart.png");
var bo=this.configureTreeItem(new qx.ui.tree.TreeFolder(),"Edit");
var bB=this.configureTreeItem(new qx.ui.tree.TreeFolder(),"Chat");
var bA=this.configureTreeItem(new qx.ui.tree.TreeFolder(),"Pustefix");
var bz=this.configureTreeItem(new qx.ui.tree.TreeFolder(),"TINC");
var bK=this.configureTreeItem(new qx.ui.tree.TreeFolder(),"Announce");
var bJ=this.configureTreeItem(new qx.ui.tree.TreeFolder(),"Devel");
bz.add(bK,bJ);
bo.add(bB,bA,bz);
var br=this.configureTreeItem(new qx.ui.tree.TreeFolder(),"Lists");
var bw=this.configureTreeItem(new qx.ui.tree.TreeFolder(),"Relations");
var bx=this.configureTreeItem(new qx.ui.tree.TreeFolder(),"Company");
var by=this.configureTreeItem(new qx.ui.tree.TreeFolder(),"Questions");
var bs=this.configureTreeItem(new qx.ui.tree.TreeFolder(),"Internal");
var bt=this.configureTreeItem(new qx.ui.tree.TreeFolder(),"Products");
var bu=this.configureTreeItem(new qx.ui.tree.TreeFolder(),"Press");
var bv=this.configureTreeItem(new qx.ui.tree.TreeFolder(),"Development");
var bC=this.configureTreeItem(new qx.ui.tree.TreeFolder(),"Competition");
br.add(bw,bx,by,bs,bt,bu,bv,bC);
var bq=this.configureTreeItem(new qx.ui.tree.TreeFolder(),"Personal");
var bE=this.configureTreeItem(new qx.ui.tree.TreeFolder(),"Bugs");
var bI=this.configureTreeItem(new qx.ui.tree.TreeFolder(),"Family");
var bF=this.configureTreeItem(new qx.ui.tree.TreeFolder(),"Projects");
var bD=this.configureTreeItem(new qx.ui.tree.TreeFolder(),"Holiday");
bq.add(bE,bI,bF,bD);
var bf=this.configureTreeItem(new qx.ui.tree.TreeFolder(),"Images");

for(var i=0;i<50;i++){bf.add(this.configureTreeItem(new qx.ui.tree.TreeFolder(),"Vacation"+(i+1),"icon/22/mimetypes/media-image.png"));
}bH.add(bk,bn,bm,bp,bo,br,bq,bf);
bO.add(bH);
return bl;
},configureTreeItem:function(bP,bQ,bR){bP.addSpacer();

if(bP instanceof qx.ui.tree.TreeFolder){bP.addOpenButton();
}bP.addIcon();

if(arguments.length>=3){bP.setIcon(bR);
}bP.addLabel(bQ);
bP.addWidget(new qx.ui.core.Spacer(),{flex:1});
var bS=new qx.ui.basic.Label(Math.round(Math.random()*99)+m);
bS.setWidth(30);
bS.setAlignY(h);
bS.setMargin([0,8]);
bP.addWidget(bS);
bS=new qx.ui.basic.Label(l+Math.round(Math.random()*30+1)+A);
bS.setWidth(80);
bS.setAlignY(h);
bP.addWidget(bS);
return bP;
}}});
})();

});