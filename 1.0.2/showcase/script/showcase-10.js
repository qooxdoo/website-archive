qx.$$packageData['e4a7160b0f8e']={"resources":{"qx/icon/Tango/22/actions/document-send.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/mail-mark-important.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/mail-mark-junk.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/mail-message-new.png":[22,22,"png","qx"],"qx/icon/Tango/22/apps/internet-mail.png":[22,22,"png","qx"],"qx/icon/Tango/22/apps/office-chart.png":[22,22,"png","qx"],"qx/icon/Tango/22/devices/drive-harddisk.png":[22,22,"png","qx"],"qx/icon/Tango/22/devices/drive-optical.png":[22,22,"png","qx"],"qx/icon/Tango/22/mimetypes/media-image.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder-open.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder-remote.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/network-server.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/network-workgroup.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/user-desktop.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/user-home.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/user-trash-full.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/user-trash.png":[22,22,"png","qx"]}};
(function(){var e="right",d="above",c="left",b="under",a="qx.ui.tree.SelectionManager";
qx.Class.define(a,{extend:qx.ui.core.selection.ScrollArea,members:{_getSelectableLocationY:function(p){var q=p.getBounds();

if(q){var top=this._getWidget().getItemTop(p);
return {top:top,bottom:top+q.height};
}},_isSelectable:function(v){return v instanceof qx.ui.tree.AbstractTreeItem&&v.isEnabled()&&v.isVisible();
},_getSelectableFromMouseEvent:function(event){return this._getWidget().getTreeItem(event.getTarget());
},getSelectables:function(){var g=this._getWidget();
var h=[];

if(g.getRoot()!=null){var f=g.getRoot().getItems(true,false,g.getHideRoot());

for(var i=0;i<f.length;i++){if(this._isSelectable(f[i])){h.push(f[i]);
}}}return h;
},_getSelectableRange:function(j,k){if(j===k){return [j];
}var l=this.getSelectables();
var m=l.indexOf(j);
var n=l.indexOf(k);

if(m<0||n<0){return [];
}
if(m<n){return l.slice(m,n+1);
}else{return l.slice(n,m+1);
}},_getFirstSelectable:function(){return this.getSelectables()[0]||null;
},_getLastSelectable:function(){var o=this.getSelectables();

if(o.length>0){return o[o.length-1];
}else{return null;
}},_getRelatedSelectable:function(r,s){var t=this._getWidget();
var u=null;

switch(s){case d:u=t.getPreviousSiblingOf(r,false);
break;
case b:u=t.getNextSiblingOf(r,false);
break;
case c:case e:break;
}
if(!u){return null;
}
if(this._isSelectable(u)){return u;
}else{return this._getRelatedSelectable(u,s);
}}}});
})();
(function(){var i="opened",h="click",g="changeOpen",f="Boolean",d="qx.ui.tree.FolderOpenButton",c="_applyOpen",b="mouseup",a="mousedown";
qx.Class.define(d,{extend:qx.ui.basic.Image,include:qx.ui.core.MExecutable,construct:function(){arguments.callee.base.call(this);
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
(function(){var l="dblclick",k="click",j="Boolean",h="excluded",g="visible",f="qx.event.type.Data",d="__iP",c="_applyOpenMode",b="Space",a="Left",z="Enter",y="changeOpenMode",x="_applyRootOpenClose",w="changeSelection",v="qx.ui.tree.Tree",u="tree",t="_applyHideRoot",s="changeRoot",r="_applyRoot",q="keypress",o="none",p="pane",m="Right",n="qx.ui.tree.AbstractTreeItem";
qx.Class.define(v,{extend:qx.ui.core.scroll.AbstractScrollArea,implement:[qx.ui.core.IMultiSelection,qx.ui.form.IModelSelection],include:[qx.ui.core.MMultiSelectionHandling,qx.ui.core.MContentPadding,qx.ui.form.MModelSelection],construct:function(){arguments.callee.base.call(this);
this.__iP=new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({allowShrinkY:false,allowGrowX:true});
this.getChildControl(p).add(this.__iP);
this.initOpenMode();
this.initRootOpenClose();
this.addListener(w,this._onChangeSelection,this);
this.addListener(q,this._onKeyPress,this);
},events:{addItem:f,removeItem:f},properties:{openMode:{check:[k,l,o],init:l,apply:c,event:y,themeable:true},root:{check:n,init:null,nullable:true,event:s,apply:r},hideRoot:{check:j,init:false,apply:t},rootOpenClose:{check:j,init:false,apply:x},appearance:{refine:true,init:u},focusable:{refine:true,init:true}},members:{__iP:null,SELECTION_MANAGER:qx.ui.tree.SelectionManager,getChildrenContainer:function(){return this.__iP;
},_applyRoot:function(A,B){var C=this.getChildrenContainer();

if(B){C.remove(B);

if(B.hasChildren()){C.remove(B.getChildrenContainer());
}}
if(A){C.add(A);

if(A.hasChildren()){C.add(A.getChildrenContainer());
}A.setVisibility(this.getHideRoot()?h:g);
A.recursiveAddToWidgetQueue();
}},_applyHideRoot:function(Y,ba){var bb=this.getRoot();

if(!bb){return;
}bb.setVisibility(Y?h:g);
bb.recursiveAddToWidgetQueue();
},_applyRootOpenClose:function(D,E){var F=this.getRoot();

if(!F){return;
}F.recursiveAddToWidgetQueue();
},_getContentPaddingTarget:function(){return this.__iP;
},getNextSiblingOf:function(S,T,U){if((T!==false||S.isOpen())&&!(U==true)&&S.hasChildren()){return S.getChildren()[0];
}
while(S){var parent=S.getParent();

if(!parent){return null;
}var W=parent.getChildren();
var V=W.indexOf(S);

if(V>-1&&V<W.length-1){return W[V+1];
}S=parent;
}return null;
},getPreviousSiblingOf:function(L,M,N){var parent=L.getParent();

if(!parent){return null;
}
if(this.getHideRoot()){if(parent==this.getRoot()){if(parent.getChildren()[0]==L){return null;
}}}else{if(L==this.getRoot()){return null;
}}var Q=parent.getChildren();
var O=Q.indexOf(L);

if(O>0){var P=Q[O-1];

while((M!==false||P.isOpen())&&!(N==true)&&P.hasChildren()){var R=P.getChildren();
P=R[R.length-1];
}return P;
}else{return parent;
}},getItems:function(bc,bd){if(this.getRoot()!=null){return this.getRoot().getItems(bc,bd,this.getHideRoot());
}else{return [];
}},getChildren:function(){if(this.getRoot()!=null){return [this.getRoot()];
}else{return [];
}},getTreeItem:function(I){while(I){if(I==this){return null;
}
if(I instanceof qx.ui.tree.AbstractTreeItem){return I;
}I=I.getLayoutParent();
}return null;
},_applyOpenMode:function(J,K){if(K==k){this.removeListener(k,this._onOpen,this);
}else if(K==l){this.removeListener(l,this._onOpen,this);
}
if(J==k){this.addListener(k,this._onOpen,this);
}else if(J==l){this.addListener(l,this._onOpen,this);
}},_onOpen:function(e){var be=this.getTreeItem(e.getTarget());

if(!be||!be.isOpenable()){return;
}be.setOpen(!be.isOpen());
e.stopPropagation();
},_onChangeSelection:function(e){var H=e.getData();
for(var i=0;i<H.length;i++){var G=H[i];
while(G.getParent()!=null){G=G.getParent();
G.setOpen(true);
}}},_onKeyPress:function(e){var X=this._getLeadItem();

if(X!==null){switch(e.getKeyIdentifier()){case a:if(X.isOpenable()&&X.isOpen()){X.setOpen(false);
}break;
case m:if(X.isOpenable()&&!X.isOpen()){X.setOpen(true);
}break;
case z:case b:if(X.isOpenable()){X.toggleOpen();
}break;
}}}},destruct:function(){this._disposeObjects(d);
}});
})();
(function(){var bc="open",bb="auto",ba="middle",Y="icon",X="label",W="changeOpen",V="excluded",U="visible",T="String",S="opened",bv="always",bu="qx.ui.tree.AbstractTreeItem",bt="__ki",bs="addItem",br="Boolean",bq="__kj",bp="Integer",bo="_applyIndent",bn="changeOpenSymbolMode",bm="_applyOpenSymbolMode",bj="resize",bk="",bh="removeItem",bi="abstract",bf="never",bg="_applyIcon",bd="_applyOpen",be="_applyLabel",bl="__km";
qx.Class.define(bu,{extend:qx.ui.core.Widget,type:bi,include:[qx.ui.form.MModelProperty],implement:[qx.ui.form.IModel],construct:function(){arguments.callee.base.call(this);
this.__ki=[];
this._setLayout(new qx.ui.layout.HBox());
this._addWidgets();
this.initOpen();
},properties:{open:{check:br,init:false,event:W,apply:bd},openSymbolMode:{check:[bv,bf,bb],init:bb,event:bn,apply:bm},indent:{check:bp,init:19,apply:bo,themeable:true},parent:{check:bu,nullable:true},icon:{check:T,apply:bg,nullable:true,themeable:true},label:{check:T,apply:be,init:bk}},members:{__ki:null,__kj:null,__kk:null,__kl:null,__km:null,_addWidgets:function(){throw new Error("Abstract method call.");
},_createChildControlImpl:function(by){var bz;

switch(by){case X:bz=new qx.ui.basic.Label().set({alignY:ba,value:this.getLabel()});
break;
case Y:bz=new qx.ui.basic.Image().set({alignY:ba,source:this.getIcon()});
break;
case bc:bz=new qx.ui.tree.FolderOpenButton().set({alignY:ba});
bz.addListener(W,this._onChangeOpen,this);
bz.addListener(bj,this._updateIndent,this);
break;
}return bz||arguments.callee.base.call(this,by);
},getTree:function(){var G=this;

while(G.getParent()){G=G.getParent();
}var F=G.getLayoutParent()?G.getLayoutParent().getLayoutParent():0;

if(F&&F instanceof qx.ui.core.scroll.ScrollPane){return F.getLayoutParent();
}return null;
},addWidget:function(bL,bM){this._add(bL,bM);
},addSpacer:function(){if(!this.__km){this.__km=new qx.ui.core.Spacer();
}else{this._remove(this.__km);
}this._add(this.__km);
},addOpenButton:function(){this._add(this.getChildControl(bc));
},_onChangeOpen:function(e){if(this.isOpenable()){this.setOpen(e.getData());
}},addIcon:function(){var bN=this.getChildControl(Y);

if(this.__kl){this._remove(bN);
}this._add(bN);
this.__kl=true;
},addLabel:function(w){var x=this.getChildControl(X);

if(this.__kk){this._remove(x);
}
if(w){this.setLabel(w);
}else{x.setValue(this.getLabel());
}this._add(x);
this.__kk=true;
},addState:function(O){arguments.callee.base.call(this,O);
var Q=this._getChildren();

for(var i=0,l=Q.length;i<l;i++){var P=Q[i];

if(P.addState){Q[i].addState(O);
}}},removeState:function(bI){arguments.callee.base.call(this,bI);
var bK=this._getChildren();

for(var i=0,l=bK.length;i<l;i++){var bJ=bK[i];

if(bJ.addState){bK[i].removeState(bI);
}}},_applyIcon:function(L,M){var N=this.getChildControl(Y,true);

if(N){N.setSource(L);
}},_applyLabel:function(bP,bQ){var bR=this.getChildControl(X,true);

if(bR){bR.setValue(bP);
}},_applyOpen:function(j,k){if(this.hasChildren()){this.getChildrenContainer().setVisibility(j?U:V);
}var open=this.getChildControl(bc,true);

if(open){open.setOpen(j);
}j?this.addState(S):this.removeState(S);
},isOpenable:function(){var m=this.getOpenSymbolMode();
return (m===bv||m===bb&&this.hasChildren());
},_shouldShowOpenSymbol:function(){var open=this.getChildControl(bc,true);

if(!open){return false;
}var R=this.getTree();

if(!R.getRootOpenClose()){if(R.getHideRoot()){if(R.getRoot()==this.getParent()){return false;
}}else{if(R.getRoot()==this){return false;
}}}return this.isOpenable();
},_applyOpenSymbolMode:function(bA,bB){this._updateIndent();
},_updateIndent:function(){if(!this.getTree()){return;
}var I=0;
var open=this.getChildControl(bc,true);

if(open){if(this._shouldShowOpenSymbol()){open.show();
var H=open.getBounds();

if(H){I=H.width;
}else{return;
}}else{open.exclude();
}}
if(this.__km){this.__km.setWidth((this.getLevel()+1)*this.getIndent()-I);
}},_applyIndent:function(bw,bx){this._updateIndent();
},getLevel:function(){var bS=this.getTree();

if(!bS){return;
}var bT=this;
var bU=-1;

while(bT){bT=bT.getParent();
bU+=1;
}if(bS.getHideRoot()){bU-=1;
}
if(!bS.getRootOpenClose()){bU-=1;
}return bU;
},syncWidget:function(){this._updateIndent();
},getChildrenContainer:function(){if(!this.__kj){this.__kj=new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({visibility:this.isOpen()?U:V});
}return this.__kj;
},hasChildrenContainer:function(){return this.__kj;
},getParentChildrenContainer:function(){if(this.getParent()){return this.getParent().getChildrenContainer();
}else if(this.getLayoutParent()){return this.getLayoutParent();
}else{return null;
}},getChildren:function(){return this.__ki;
},hasChildren:function(){return this.__ki?this.__ki.length>0:false;
},getItems:function(n,o,p){if(p!==false){var q=[];
}else{var q=[this];
}var t=this.hasChildren()&&(o!==false||this.isOpen());

if(t){var s=this.getChildren();

if(n===false){q=q.concat(s);
}else{for(var i=0,r=s.length;i<r;i++){q=q.concat(s[i].getItems(n,o,false));
}}}return q;
},recursiveAddToWidgetQueue:function(){var h=this.getItems(true,true,false);

for(var i=0,l=h.length;i<l;i++){qx.ui.core.queue.Widget.add(h[i]);
}},__kn:function(){if(this.getParentChildrenContainer()){this.getParentChildrenContainer()._addAfter(this.getChildrenContainer(),this);
}},add:function(a){var b=this.getChildrenContainer();
var f=this.getTree();

for(var i=0,l=arguments.length;i<l;i++){var g=arguments[i];
var d=g.getParent();

if(d){d.remove(g);
}g.setParent(this);
var c=this.hasChildren();
b.add(g);

if(g.hasChildren()){b.add(g.getChildrenContainer());
}this.__ki.push(g);

if(!c){this.__kn();
}
if(f){g.recursiveAddToWidgetQueue();
f.fireNonBubblingEvent(bs,qx.event.type.Data,[g]);
}}
if(f){qx.ui.core.queue.Widget.add(this);
}},addAt:function(bC,bD){{};

if(bD==this.__ki.length){this.add(bC);
return;
}var bH=bC.getParent();

if(bH){bH.remove(bC);
}var bF=this.getChildrenContainer();
bC.setParent(this);
var bG=this.hasChildren();
var bE=this.__ki[bD];
bF.addBefore(bC,bE);

if(bC.hasChildren()){bF.addAfter(bC.getChildrenContainer(),bC);
}qx.lang.Array.insertAt(this.__ki,bC,bD);

if(!bG){this.__kn();
}
if(this.getTree()){bC.recursiveAddToWidgetQueue();
qx.ui.core.queue.Widget.add(this);
}},addBefore:function(u,v){{};
this.addAt(u,this.__ki.indexOf(v));
},addAfter:function(D,E){{};
this.addAt(D,this.__ki.indexOf(E)+1);
},addAtBegin:function(bO){this.addAt(bO,0);
},remove:function(y){for(var i=0,l=arguments.length;i<l;i++){var C=arguments[i];

if(this.__ki.indexOf(C)==-1){this.warn("Cannot remove treeitem '"+C+"'. It is not a child of this tree item.");
return;
}var z=this.getChildrenContainer();

if(C.hasChildrenContainer()){var B=C.getChildrenContainer();

if(z.getChildren().indexOf(B)>=0){z.remove(B);
}}qx.lang.Array.remove(this.__ki,C);
C.setParent(null);
z.remove(C);
}var A=this.getTree();

if(A){A.fireNonBubblingEvent(bh,qx.event.type.Data,[C]);
}qx.ui.core.queue.Widget.add(this);
},removeAt:function(J){var K=this.__ki[J];

if(K){this.remove(K);
}},removeAll:function(){for(var i=this.__ki.length-1;i>=0;i--){this.remove(this.__ki[i]);
}}},destruct:function(){this._disposeArray(bt);
this._disposeObjects(bl,bq);
}});
})();
(function(){var b="tree-folder",a="qx.ui.tree.TreeFolder";
qx.Class.define(a,{extend:qx.ui.tree.AbstractTreeItem,construct:function(c){arguments.callee.base.call(this);

if(c){this.setLabel(c);
}},properties:{appearance:{refine:true,init:b}},members:{_addWidgets:function(){this.addSpacer();
this.addOpenButton();
this.addIcon();
this.addLabel();
}}});
})();
(function(){var b="qx.ui.tree.TreeFile",a="tree-file";
qx.Class.define(b,{extend:qx.ui.tree.AbstractTreeItem,construct:function(c){arguments.callee.base.call(this);

if(c){this.setLabel(c);
}},properties:{appearance:{refine:true,init:a}},members:{_addWidgets:function(){this.addSpacer();
this.addIcon();
this.addLabel();
}}});
})();
(function(){var l="Trash",k="icon/22/devices/drive-harddisk.png",j="Windows (C:)",h="Documents (D:)",g="icon/22/places/user-desktop.png",f="Inbox",e="Desktop",d="icon/22/actions/mail-mark-junk.png",c="rgb(228,228,228)",b="Network",bj="Junk",bi="Sent",bh="middle",bg="Files",bf="multi",be="Home",bd="icon/22/apps/internet-mail.png",bc="icon/22/places/user-trash-full.png",bb="Workspace",ba="icon/22/apps/office-chart.png",s="Data",t="icon/22/places/user-trash.png",q="icon/22/places/user-home.png",r="icon/22/places/network-server.png",o="icon/22/actions/document-send.png",p="Products",m="Simple View",n="Bugs",w="Family",x="TINC",F="Development",D="Announce",N="DVD (E:)",I="icon/22/mimetypes/media-image.png",V="Competition",S="Detailed View",z="Personal",Y="Questions",X="Vacation",W="Lists",y="Projects",B="Important",C="Devel",E="icon/22/devices/drive-optical.png",G="Holiday",J="Junk #",P="Chat",U="May ",u="Press",v="Company",A="Internal",M="Relations",L="kb",K="Images",R="Pustefix",Q="showcase.page.tree.Content",H="icon/22/actions/mail-message-new.png",O=" 2005",a="Edit",T="icon/22/actions/mail-mark-important.png";
qx.Class.define(Q,{extend:showcase.page.AbstractDesktopContent,construct:function(bU){arguments.callee.base.call(this,bU);
var bV=this.__vD();
this.getView().add(bV);
bV.moveTo(260,20);
bV.open();
},members:{_addWindowContent:function(cb){cb.set({caption:m,minWidth:200});
cb.setLayout(new qx.ui.layout.Grow());
var cm=new qx.ui.tree.Tree().set({width:200,height:400,selectionMode:bf,dragSelection:true,decorator:null,backgroundColor:c});
cb.add(cm);
var cr=new qx.ui.tree.TreeFolder(be).set({icon:q});
cr.setOpen(true);
cm.setRoot(cr);
var cp=new qx.ui.tree.TreeFolder(e).set({icon:g});
cp.setOpen(true);
cr.add(cp);
var ch=new qx.ui.tree.TreeFolder(bg);
var cf=new qx.ui.tree.TreeFolder(bb);
var cg=new qx.ui.tree.TreeFolder(b).set({icon:r});
var ce=new qx.ui.tree.TreeFolder(l).set({icon:t});
cp.add(ch,cf,cg,ce);
var cn=new qx.ui.tree.TreeFile(j).set({icon:k});
var cd=new qx.ui.tree.TreeFile(h).set({icon:k});
var cc=new qx.ui.tree.TreeFile(N).set({icon:E});
cf.add(cn,cd,cc);
var cq=new qx.ui.tree.TreeFolder(f).set({icon:bd,open:true});
var ci=new qx.ui.tree.TreeFolder(bj).set({icon:d});
var cl=new qx.ui.tree.TreeFolder(bi).set({icon:o});
var ck=new qx.ui.tree.TreeFolder(l).set({icon:bc});

for(var i=0;i<30;i++){ck.add(new qx.ui.tree.TreeFile(J+i).set({icon:H}));
}var co=new qx.ui.tree.TreeFolder(s).set({icon:ba});
var cj=new qx.ui.tree.TreeFolder(B).set({icon:T});
cq.add(ci,cl,ck,co,cj);
cr.add(cq);
},__vD:function(){var bq=new qx.ui.window.Window().set({showClose:false,showMinimize:false,width:310,height:425,minWidth:200,caption:S,layout:new qx.ui.layout.Grow(),contentPadding:0});
var bS=new qx.ui.tree.Tree().set({width:600,height:500,decorator:null,selectionMode:bf,dragSelection:true,backgroundColor:c});
bq.add(bS);
var bT=this.configureTreeItem(new qx.ui.tree.TreeFolder(),be,q);
bT.setOpen(true);
bS.setRoot(bT);
var bL=this.configureTreeItem(new qx.ui.tree.TreeFolder(),e,g);
bL.setOpen(true);
bT.add(bL);
var bo=this.configureTreeItem(new qx.ui.tree.TreeFolder(),bg);
var bm=this.configureTreeItem(new qx.ui.tree.TreeFolder(),bb);
var bn=this.configureTreeItem(new qx.ui.tree.TreeFolder(),b,r);
var bl=this.configureTreeItem(new qx.ui.tree.TreeFolder(),l,bc);
bL.add(bo,bm,bn,bl);
var bR=this.configureTreeItem(new qx.ui.tree.TreeFile(),j,k);
var bQ=this.configureTreeItem(new qx.ui.tree.TreeFile(),h,k);
bm.add(bR,bQ);
var bM=this.configureTreeItem(new qx.ui.tree.TreeFolder(),f,bd);
bM.setOpen(true);
var bp=this.configureTreeItem(new qx.ui.tree.TreeFolder(),bj,d);
var bs=this.configureTreeItem(new qx.ui.tree.TreeFolder(),bi,o);
var br=this.configureTreeItem(new qx.ui.tree.TreeFolder(),l,t);
var bu=this.configureTreeItem(new qx.ui.tree.TreeFolder(),s,ba);
var bt=this.configureTreeItem(new qx.ui.tree.TreeFolder(),a);
var bG=this.configureTreeItem(new qx.ui.tree.TreeFolder(),P);
var bF=this.configureTreeItem(new qx.ui.tree.TreeFolder(),R);
var bE=this.configureTreeItem(new qx.ui.tree.TreeFolder(),x);
var bP=this.configureTreeItem(new qx.ui.tree.TreeFolder(),D);
var bO=this.configureTreeItem(new qx.ui.tree.TreeFolder(),C);
bE.add(bP,bO);
bt.add(bG,bF,bE);
var bw=this.configureTreeItem(new qx.ui.tree.TreeFolder(),W);
var bB=this.configureTreeItem(new qx.ui.tree.TreeFolder(),M);
var bC=this.configureTreeItem(new qx.ui.tree.TreeFolder(),v);
var bD=this.configureTreeItem(new qx.ui.tree.TreeFolder(),Y);
var bx=this.configureTreeItem(new qx.ui.tree.TreeFolder(),A);
var by=this.configureTreeItem(new qx.ui.tree.TreeFolder(),p);
var bz=this.configureTreeItem(new qx.ui.tree.TreeFolder(),u);
var bA=this.configureTreeItem(new qx.ui.tree.TreeFolder(),F);
var bH=this.configureTreeItem(new qx.ui.tree.TreeFolder(),V);
bw.add(bB,bC,bD,bx,by,bz,bA,bH);
var bv=this.configureTreeItem(new qx.ui.tree.TreeFolder(),z);
var bJ=this.configureTreeItem(new qx.ui.tree.TreeFolder(),n);
var bN=this.configureTreeItem(new qx.ui.tree.TreeFolder(),w);
var bK=this.configureTreeItem(new qx.ui.tree.TreeFolder(),y);
var bI=this.configureTreeItem(new qx.ui.tree.TreeFolder(),G);
bv.add(bJ,bN,bK,bI);
var bk=this.configureTreeItem(new qx.ui.tree.TreeFolder(),K);

for(var i=0;i<50;i++){bk.add(this.configureTreeItem(new qx.ui.tree.TreeFolder(),X+(i+1),I));
}bM.add(bp,bs,br,bu,bt,bw,bv,bk);
bT.add(bM);
return bq;
},configureTreeItem:function(bW,bX,bY){bW.addSpacer();

if(bW instanceof qx.ui.tree.TreeFolder){bW.addOpenButton();
}bW.addIcon();

if(arguments.length>=3){bW.setIcon(bY);
}bW.addLabel(bX);
bW.addWidget(new qx.ui.core.Spacer(),{flex:1});
var ca=new qx.ui.basic.Label(Math.round(Math.random()*99)+L);
ca.setWidth(30);
ca.setAlignY(bh);
ca.setMargin([0,8]);
bW.addWidget(ca);
ca=new qx.ui.basic.Label(U+Math.round(Math.random()*30+1)+O);
ca.setWidth(80);
ca.setAlignY(bh);
bW.addWidget(ca);
return bW;
}}});
})();
