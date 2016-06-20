qx.$$packageData['e323e104e5b0']={"locales":{},"resources":{"qx/icon/Tango/22/actions/document-send.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/mail-mark-important.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/mail-mark-junk.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/mail-message-new.png":[22,22,"png","qx"],"qx/icon/Tango/22/apps/internet-mail.png":[22,22,"png","qx"],"qx/icon/Tango/22/apps/office-chart.png":[22,22,"png","qx"],"qx/icon/Tango/22/devices/drive-harddisk.png":[22,22,"png","qx"],"qx/icon/Tango/22/devices/drive-optical.png":[22,22,"png","qx"],"qx/icon/Tango/22/mimetypes/media-image.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder-open.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder-remote.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/network-server.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/network-workgroup.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/user-desktop.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/user-home.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/user-trash-full.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/user-trash.png":[22,22,"png","qx"]},"translations":{}};

qx.Part.$$notifyLoad("e323e104e5b0", function() {
(function(){var e="right",d="above",c="left",b="under",a="qx.ui.tree.SelectionManager";
qx.Class.define(a,{extend:qx.ui.core.selection.ScrollArea,members:{_getSelectableLocationY:function(f){var g=f.getBounds();

if(g){var top=this._getWidget().getItemTop(f);
return {top:top,bottom:top+g.height};
}},_isSelectable:function(h){return this._isItemSelectable(h)&&h instanceof qx.ui.tree.AbstractTreeItem;
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
case b:x=w.getNextNodeOf(u,false);
break;
case c:case e:break;
}
if(!x){return null;
}
if(this._isSelectable(x)){return x;
}else{return this._getRelatedSelectable(x,v);
}}}});
})();
(function(){var i="opened",h="click",g="changeOpen",f="Boolean",d="qx.ui.tree.FolderOpenButton",c="_applyOpen",b="mouseup",a="mousedown";
qx.Class.define(d,{extend:qx.ui.basic.Image,include:qx.ui.core.MExecutable,construct:function(){qx.ui.basic.Image.call(this);
this.initOpen();
this.addListener(h,this._onClick);
this.addListener(a,this._stopPropagation,this);
this.addListener(b,this._stopPropagation,this);
},properties:{open:{check:f,init:false,event:g,apply:c}},members:{_applyOpen:function(j,k){j?this.addState(i):this.removeState(i);
this.execute();
},_stopPropagation:function(e){e.stopPropagation();
},_onClick:function(e){this.toggleOpen();
e.stopPropagation();
}}});
})();
(function(){var l="dblclick",k="click",j="Boolean",h="excluded",g="visible",f="qx.event.type.Data",d="_applyOpenMode",c="Space",b="Left",a="Enter",z="__lG",y="changeOpenMode",x="_applyRootOpenClose",w="changeSelection",v="qx.ui.tree.Tree",u="tree",t="_applyHideRoot",s="changeRoot",r="_applyRoot",q="keypress",o="none",p="pane",m="Right",n="qx.ui.tree.AbstractTreeItem";
qx.Class.define(v,{extend:qx.ui.core.scroll.AbstractScrollArea,implement:[qx.ui.core.IMultiSelection,qx.ui.form.IModelSelection,qx.ui.form.IForm],include:[qx.ui.core.MMultiSelectionHandling,qx.ui.core.MContentPadding,qx.ui.form.MModelSelection,qx.ui.form.MForm],construct:function(){qx.ui.core.scroll.AbstractScrollArea.call(this);
this.__lG=new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({allowShrinkY:false,allowGrowX:true});
this.getChildControl(p).add(this.__lG);
this.initOpenMode();
this.initRootOpenClose();
this.addListener(w,this._onChangeSelection,this);
this.addListener(q,this._onKeyPress,this);
},events:{addItem:f,removeItem:f},properties:{openMode:{check:[k,l,o],init:l,apply:d,event:y,themeable:true},root:{check:n,init:null,nullable:true,event:s,apply:r},hideRoot:{check:j,init:false,apply:t},rootOpenClose:{check:j,init:false,apply:x},appearance:{refine:true,init:u},focusable:{refine:true,init:true}},members:{__lG:null,SELECTION_MANAGER:qx.ui.tree.SelectionManager,getChildrenContainer:function(){return this.__lG;
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
},_getContentPaddingTarget:function(){return this.__lG;
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
if(bc instanceof qx.ui.tree.AbstractTreeItem){return bc;
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
}break;
case m:if(bi.isOpenable()&&!bi.isOpen()){bi.setOpen(true);
}break;
case a:case c:if(bi.isOpenable()){bi.toggleOpen();
}break;
}}}},destruct:function(){this._disposeObjects(z);
}});
})();
(function(){var m="open",k="icon",j="auto",h="middle",g="String",f="label",d="changeOpen",c="excluded",b="visible",a="opened",H="always",G="qx.ui.tree.AbstractTreeItem",F="_applyIconOpened",E="Boolean",D="__mu",C="Integer",B="_applyIndent",A="changeOpenSymbolMode",z="_applyOpenSymbolMode",y="resize",t="",u="removeItem",r="addItem",s="__mt",p="__mx",q="iconOpened",n="abstract",o="never",v="_applyIcon",w="_applyOpen",x="_applyLabel";
qx.Class.define(G,{extend:qx.ui.core.Widget,type:n,include:[qx.ui.form.MModelProperty],implement:[qx.ui.form.IModel],construct:function(){qx.ui.core.Widget.call(this);
this.__mt=[];
this._setLayout(new qx.ui.layout.HBox());
this._addWidgets();
this.initOpen();
},properties:{open:{check:E,init:false,event:d,apply:w},openSymbolMode:{check:[H,o,j],init:j,event:A,apply:z},indent:{check:C,init:19,apply:B,themeable:true},parent:{check:G,nullable:true},icon:{check:g,apply:v,nullable:true,themeable:true},iconOpened:{check:g,apply:F,nullable:true,themeable:true},label:{check:g,apply:x,init:t}},members:{__mt:null,__mu:null,__mv:null,__mw:null,__mx:null,__my:null,_addWidgets:function(){throw new Error("Abstract method call.");
},_createChildControlImpl:function(I,J){var K;

switch(I){case f:K=new qx.ui.basic.Label().set({alignY:h,value:this.getLabel()});
break;
case k:K=new qx.ui.basic.Image().set({alignY:h,source:this.getIcon()});
break;
case m:K=new qx.ui.tree.FolderOpenButton().set({alignY:h});
K.addListener(d,this._onChangeOpen,this);
K.addListener(y,this._updateIndent,this);
break;
}return K||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,I);
},getTree:function(){var M=this;

while(M.getParent()){M=M.getParent();
}var L=M.getLayoutParent()?M.getLayoutParent().getLayoutParent():0;

if(L&&L instanceof qx.ui.core.scroll.ScrollPane){return L.getLayoutParent();
}return null;
},addWidget:function(N,O){this._add(N,O);
},addSpacer:function(){if(!this.__mx){this.__mx=new qx.ui.core.Spacer();
}else{this._remove(this.__mx);
}this._add(this.__mx);
},addOpenButton:function(){this._add(this.getChildControl(m));
},_onChangeOpen:function(e){if(this.isOpenable()){this.setOpen(e.getData());
}},addIcon:function(){var P=this.getChildControl(k);

if(this.__mw){this._remove(P);
}this._add(P);
this.__mw=true;
},addLabel:function(Q){var R=this.getChildControl(f);

if(this.__mv){this._remove(R);
}
if(Q){this.setLabel(Q);
}else{R.setValue(this.getLabel());
}this._add(R);
this.__mv=true;
},addState:function(S){qx.ui.core.Widget.prototype.addState.call(this,S);
var U=this._getChildren();

for(var i=0,l=U.length;i<l;i++){var T=U[i];

if(T.addState){U[i].addState(S);
}}},removeState:function(V){qx.ui.core.Widget.prototype.removeState.call(this,V);
var X=this._getChildren();

for(var i=0,l=X.length;i<l;i++){var W=X[i];

if(W.addState){X[i].removeState(V);
}}},_applyIcon:function(Y,ba){if(!this.__mA()){this.__mB(Y);
}else if(!this.isOpen()){this.__mB(Y);
}},_applyIconOpened:function(bb,bc){if(this.isOpen()){if(this.__mz()&&this.__mA()){this.__mB(bb);
}else if(!this.__mz()&&this.__mA()){this.__mB(bb);
}}},_applyLabel:function(bd,be){var bf=this.getChildControl(f,true);

if(bf){bf.setValue(bd);
}},_applyOpen:function(bg,bh){if(this.hasChildren()){this.getChildrenContainer().setVisibility(bg?b:c);
}var open=this.getChildControl(m,true);

if(open){open.setOpen(bg);
}var bi;
if(bg){bi=this.__mA()?this.getIconOpened():null;
}else{bi=this.getIcon();
}
if(bi){this.__mB(bi);
}bg?this.addState(a):this.removeState(a);
},__mz:function(){return qx.util.PropertyUtil.getUserValue(this,k);
},__mA:function(){return qx.util.PropertyUtil.getUserValue(this,q);
},__mB:function(bj){var bk=this.getChildControl(k,true);

if(bk){bk.setSource(bj);
}},isOpenable:function(){var bl=this.getOpenSymbolMode();
return (bl===H||bl===j&&this.hasChildren());
},_shouldShowOpenSymbol:function(){var open=this.getChildControl(m,true);

if(!open){return false;
}var bm=this.getTree();

if(!bm.getRootOpenClose()){if(bm.getHideRoot()){if(bm.getRoot()==this.getParent()){return false;
}}else{if(bm.getRoot()==this){return false;
}}}return this.isOpenable();
},_applyOpenSymbolMode:function(bn,bo){this._updateIndent();
},_updateIndent:function(){if(!this.getTree()){return;
}var bq=0;
var open=this.getChildControl(m,true);

if(open){if(this._shouldShowOpenSymbol()){open.show();
var bp=open.getBounds();

if(bp){bq=bp.width;
}else{return;
}}else{open.exclude();
}}
if(this.__mx){this.__mx.setWidth((this.getLevel()+1)*this.getIndent()-bq);
}},_applyIndent:function(br,bs){this._updateIndent();
},getLevel:function(){var bt=this.getTree();

if(!bt){return;
}var bu=this;
var bv=-1;

while(bu){bu=bu.getParent();
bv+=1;
}if(bt.getHideRoot()){bv-=1;
}
if(!bt.getRootOpenClose()){bv-=1;
}return bv;
},syncWidget:function(){this._updateIndent();
},getChildrenContainer:function(){if(!this.__mu){this.__mu=new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({visibility:this.isOpen()?b:c});
}return this.__mu;
},hasChildrenContainer:function(){return this.__mu;
},getParentChildrenContainer:function(){if(this.getParent()){return this.getParent().getChildrenContainer();
}else if(this.getLayoutParent()){return this.getLayoutParent();
}else{return null;
}},getChildren:function(){return this.__mt;
},hasChildren:function(){return this.__mt?this.__mt.length>0:false;
},getItems:function(bw,bx,by){if(by!==false){var bz=[];
}else{var bz=[this];
}var bC=this.hasChildren()&&(bx!==false||this.isOpen());

if(bC){var bB=this.getChildren();

if(bw===false){bz=bz.concat(bB);
}else{for(var i=0,bA=bB.length;i<bA;i++){bz=bz.concat(bB[i].getItems(bw,bx,false));
}}}return bz;
},recursiveAddToWidgetQueue:function(){var bD=this.getItems(true,true,false);

for(var i=0,l=bD.length;i<l;i++){qx.ui.core.queue.Widget.add(bD[i]);
}},__mC:function(){if(this.getParentChildrenContainer()){this.getParentChildrenContainer()._addAfter(this.getChildrenContainer(),this);
}},add:function(bE){var bF=this.getChildrenContainer();
var bI=this.getTree();

for(var i=0,l=arguments.length;i<l;i++){var bJ=arguments[i];
var bH=bJ.getParent();

if(bH){bH.remove(bJ);
}bJ.setParent(this);
var bG=this.hasChildren();
bF.add(bJ);

if(bJ.hasChildren()){bF.add(bJ.getChildrenContainer());
}this.__mt.push(bJ);

if(!bG){this.__mC();
}
if(bI){bJ.recursiveAddToWidgetQueue();
bI.fireNonBubblingEvent(r,qx.event.type.Data,[bJ]);
}}
if(bI){qx.ui.core.queue.Widget.add(this);
}},addAt:function(bK,bL){{};

if(bL==this.__mt.length){this.add(bK);
return;
}var bP=bK.getParent();

if(bP){bP.remove(bK);
}var bN=this.getChildrenContainer();
bK.setParent(this);
var bO=this.hasChildren();
var bM=this.__mt[bL];
bN.addBefore(bK,bM);

if(bK.hasChildren()){bN.addAfter(bK.getChildrenContainer(),bK);
}qx.lang.Array.insertAt(this.__mt,bK,bL);

if(!bO){this.__mC();
}
if(this.getTree()){bK.recursiveAddToWidgetQueue();
qx.ui.core.queue.Widget.add(this);
}},addBefore:function(bQ,bR){{};
var bS=bQ.getParent();

if(bS){bS.remove(bQ);
}this.addAt(bQ,this.__mt.indexOf(bR));
},addAfter:function(bT,bU){{};
var bV=bT.getParent();

if(bV){bV.remove(bT);
}this.addAt(bT,this.__mt.indexOf(bU)+1);
},addAtBegin:function(bW){this.addAt(bW,0);
},remove:function(bX){for(var i=0,l=arguments.length;i<l;i++){var cc=arguments[i];

if(this.__mt.indexOf(cc)==-1){this.warn("Cannot remove treeitem '"+cc+"'. It is not a child of this tree item.");
return;
}var bY=this.getChildrenContainer();

if(cc.hasChildrenContainer()){var cb=cc.getChildrenContainer();

if(bY.getChildren().indexOf(cb)>=0){bY.remove(cb);
}}qx.lang.Array.remove(this.__mt,cc);
cc.setParent(null);
bY.remove(cc);
}var ca=this.getTree();

if(ca){ca.fireNonBubblingEvent(u,qx.event.type.Data,[cc]);
}qx.ui.core.queue.Widget.add(this);
},removeAt:function(cd){var ce=this.__mt[cd];

if(ce){this.remove(ce);
}},removeAll:function(){for(var i=this.__mt.length-1;i>=0;i--){this.remove(this.__mt[i]);
}}},destruct:function(){this._disposeArray(s);
this._disposeObjects(p,D);
}});
})();
(function(){var b="tree-folder",a="qx.ui.tree.TreeFolder";
qx.Class.define(a,{extend:qx.ui.tree.AbstractTreeItem,construct:function(c){qx.ui.tree.AbstractTreeItem.call(this);

if(c){this.setLabel(c);
}},properties:{appearance:{refine:true,init:b}},members:{_addWidgets:function(){this.addSpacer();
this.addOpenButton();
this.addIcon();
this.addLabel();
}}});
})();
(function(){var b="qx.ui.tree.TreeFile",a="tree-file";
qx.Class.define(b,{extend:qx.ui.tree.AbstractTreeItem,construct:function(c){qx.ui.tree.AbstractTreeItem.call(this);

if(c){this.setLabel(c);
}},properties:{appearance:{refine:true,init:a}},members:{_addWidgets:function(){this.addSpacer();
this.addIcon();
this.addLabel();
}}});
})();
(function(){var l="Trash",k="icon/22/devices/drive-harddisk.png",j="Windows (C:)",h="Documents (D:)",g="icon/22/places/user-desktop.png",f="Inbox",e="Desktop",d="icon/22/actions/mail-mark-junk.png",c="rgb(228,228,228)",b="Network",bj="Junk",bi="Sent",bh="middle",bg="Files",bf="multi",be="Home",bd="icon/22/apps/internet-mail.png",bc="icon/22/places/user-trash-full.png",bb="Workspace",ba="icon/22/apps/office-chart.png",s="Data",t="icon/22/places/user-trash.png",q="icon/22/places/user-home.png",r="icon/22/places/network-server.png",o="icon/22/actions/document-send.png",p="Products",m="Simple View",n="Bugs",w="Family",x="TINC",F="Development",D="Announce",N="DVD (E:)",I="icon/22/mimetypes/media-image.png",V="Competition",S="Detailed View",z="Personal",Y="Questions",X="Vacation",W="Lists",y="Projects",B="Important",C="Devel",E="icon/22/devices/drive-optical.png",G="Holiday",J="Junk #",P="Chat",U="May ",u="Press",v="Company",A="Internal",M="Relations",L="kb",K="Images",R="Pustefix",Q="showcase.page.tree.Content",H="icon/22/actions/mail-message-new.png",O=" 2005",a="Edit",T="icon/22/actions/mail-mark-important.png";
qx.Class.define(Q,{extend:showcase.page.AbstractDesktopContent,construct:function(bk){showcase.page.AbstractDesktopContent.call(this,bk);
var bl=this.__xS();
this.getView().add(bl);
bl.moveTo(260,20);
bl.open();
},members:{_addWindowContent:function(bm){bm.set({caption:m,minWidth:200});
bm.setLayout(new qx.ui.layout.Grow());
var bx=new qx.ui.tree.Tree().set({width:200,height:400,selectionMode:bf,dragSelection:true,decorator:null,backgroundColor:c});
bm.add(bx);
var bC=new qx.ui.tree.TreeFolder(be).set({icon:q});
bC.setOpen(true);
bx.setRoot(bC);
var bA=new qx.ui.tree.TreeFolder(e).set({icon:g});
bA.setOpen(true);
bC.add(bA);
var bs=new qx.ui.tree.TreeFolder(bg);
var bq=new qx.ui.tree.TreeFolder(bb);
var br=new qx.ui.tree.TreeFolder(b).set({icon:r});
var bp=new qx.ui.tree.TreeFolder(l).set({icon:t});
bA.add(bs,bq,br,bp);
var by=new qx.ui.tree.TreeFile(j).set({icon:k});
var bo=new qx.ui.tree.TreeFile(h).set({icon:k});
var bn=new qx.ui.tree.TreeFile(N).set({icon:E});
bq.add(by,bo,bn);
var bB=new qx.ui.tree.TreeFolder(f).set({icon:bd,open:true});
var bt=new qx.ui.tree.TreeFolder(bj).set({icon:d});
var bw=new qx.ui.tree.TreeFolder(bi).set({icon:o});
var bv=new qx.ui.tree.TreeFolder(l).set({icon:bc});

for(var i=0;i<30;i++){bv.add(new qx.ui.tree.TreeFile(J+i).set({icon:H}));
}var bz=new qx.ui.tree.TreeFolder(s).set({icon:ba});
var bu=new qx.ui.tree.TreeFolder(B).set({icon:T});
bB.add(bt,bw,bv,bz,bu);
bC.add(bB);
},__xS:function(){var bJ=new qx.ui.window.Window().set({showClose:false,showMinimize:false,width:310,height:425,minWidth:200,caption:S,layout:new qx.ui.layout.Grow(),contentPadding:0});
var cm=new qx.ui.tree.Tree().set({width:600,height:500,decorator:null,selectionMode:bf,dragSelection:true,backgroundColor:c});
bJ.add(cm);
var cn=this.configureTreeItem(new qx.ui.tree.TreeFolder(),be,q);
cn.setOpen(true);
cm.setRoot(cn);
var cf=this.configureTreeItem(new qx.ui.tree.TreeFolder(),e,g);
cf.setOpen(true);
cn.add(cf);
var bH=this.configureTreeItem(new qx.ui.tree.TreeFolder(),bg);
var bF=this.configureTreeItem(new qx.ui.tree.TreeFolder(),bb);
var bG=this.configureTreeItem(new qx.ui.tree.TreeFolder(),b,r);
var bE=this.configureTreeItem(new qx.ui.tree.TreeFolder(),l,bc);
cf.add(bH,bF,bG,bE);
var cl=this.configureTreeItem(new qx.ui.tree.TreeFile(),j,k);
var ck=this.configureTreeItem(new qx.ui.tree.TreeFile(),h,k);
bF.add(cl,ck);
var cg=this.configureTreeItem(new qx.ui.tree.TreeFolder(),f,bd);
cg.setOpen(true);
var bI=this.configureTreeItem(new qx.ui.tree.TreeFolder(),bj,d);
var bL=this.configureTreeItem(new qx.ui.tree.TreeFolder(),bi,o);
var bK=this.configureTreeItem(new qx.ui.tree.TreeFolder(),l,t);
var bN=this.configureTreeItem(new qx.ui.tree.TreeFolder(),s,ba);
var bM=this.configureTreeItem(new qx.ui.tree.TreeFolder(),a);
var ca=this.configureTreeItem(new qx.ui.tree.TreeFolder(),P);
var bY=this.configureTreeItem(new qx.ui.tree.TreeFolder(),R);
var bX=this.configureTreeItem(new qx.ui.tree.TreeFolder(),x);
var cj=this.configureTreeItem(new qx.ui.tree.TreeFolder(),D);
var ci=this.configureTreeItem(new qx.ui.tree.TreeFolder(),C);
bX.add(cj,ci);
bM.add(ca,bY,bX);
var bP=this.configureTreeItem(new qx.ui.tree.TreeFolder(),W);
var bU=this.configureTreeItem(new qx.ui.tree.TreeFolder(),M);
var bV=this.configureTreeItem(new qx.ui.tree.TreeFolder(),v);
var bW=this.configureTreeItem(new qx.ui.tree.TreeFolder(),Y);
var bQ=this.configureTreeItem(new qx.ui.tree.TreeFolder(),A);
var bR=this.configureTreeItem(new qx.ui.tree.TreeFolder(),p);
var bS=this.configureTreeItem(new qx.ui.tree.TreeFolder(),u);
var bT=this.configureTreeItem(new qx.ui.tree.TreeFolder(),F);
var cb=this.configureTreeItem(new qx.ui.tree.TreeFolder(),V);
bP.add(bU,bV,bW,bQ,bR,bS,bT,cb);
var bO=this.configureTreeItem(new qx.ui.tree.TreeFolder(),z);
var cd=this.configureTreeItem(new qx.ui.tree.TreeFolder(),n);
var ch=this.configureTreeItem(new qx.ui.tree.TreeFolder(),w);
var ce=this.configureTreeItem(new qx.ui.tree.TreeFolder(),y);
var cc=this.configureTreeItem(new qx.ui.tree.TreeFolder(),G);
bO.add(cd,ch,ce,cc);
var bD=this.configureTreeItem(new qx.ui.tree.TreeFolder(),K);

for(var i=0;i<50;i++){bD.add(this.configureTreeItem(new qx.ui.tree.TreeFolder(),X+(i+1),I));
}cg.add(bI,bL,bK,bN,bM,bP,bO,bD);
cn.add(cg);
return bJ;
},configureTreeItem:function(co,cp,cq){co.addSpacer();

if(co instanceof qx.ui.tree.TreeFolder){co.addOpenButton();
}co.addIcon();

if(arguments.length>=3){co.setIcon(cq);
}co.addLabel(cp);
co.addWidget(new qx.ui.core.Spacer(),{flex:1});
var cr=new qx.ui.basic.Label(Math.round(Math.random()*99)+L);
cr.setWidth(30);
cr.setAlignY(bh);
cr.setMargin([0,8]);
co.addWidget(cr);
cr=new qx.ui.basic.Label(U+Math.round(Math.random()*30+1)+O);
cr.setWidth(80);
cr.setAlignY(bh);
co.addWidget(cr);
return co;
}}});
})();

});