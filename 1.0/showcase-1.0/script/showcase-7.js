qx.$$packageData['24a2b2310614']={"resources":{"qx/icon/Tango/22/actions/document-send.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/mail-mark-important.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/mail-mark-junk.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/mail-message-new.png":[22,22,"png","qx"],"qx/icon/Tango/22/apps/internet-mail.png":[22,22,"png","qx"],"qx/icon/Tango/22/apps/office-chart.png":[22,22,"png","qx"],"qx/icon/Tango/22/devices/drive-harddisk.png":[22,22,"png","qx"],"qx/icon/Tango/22/devices/drive-optical.png":[22,22,"png","qx"],"qx/icon/Tango/22/mimetypes/media-image.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder-open.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder-remote.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/network-server.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/network-workgroup.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/user-desktop.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/user-home.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/user-trash-full.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/user-trash.png":[22,22,"png","qx"]}};
(function(){var g="right",f="above",e="left",d="under",c="qx.ui.tree.SelectionManager";
qx.Class.define(c,{extend:qx.ui.core.selection.ScrollArea,members:{_getSelectableLocationY:function(n){var o=n.getBounds();

if(o){var top=this._getWidget().getItemTop(n);
return {top:top,bottom:top+o.height};
}},_isSelectable:function(b){return b instanceof qx.ui.tree.AbstractTreeItem&&b.isEnabled()&&b.isVisible();
},_getSelectableFromMouseEvent:function(event){return this._getWidget().getTreeItem(event.getTarget());
},getSelectables:function(){var q=this._getWidget();
var r=[];

if(q.getRoot()!=null){var p=q.getRoot().getItems(true,false,q.getHideRoot());

for(var i=0;i<p.length;i++){if(this._isSelectable(p[i])){r.push(p[i]);
}}}return r;
},_getSelectableRange:function(h,j){if(h===j){return [h];
}var k=this.getSelectables();
var l=k.indexOf(h);
var m=k.indexOf(j);

if(l<0||m<0){return [];
}
if(l<m){return k.slice(l,m+1);
}else{return k.slice(m,l+1);
}},_getFirstSelectable:function(){return this.getSelectables()[0]||null;
},_getLastSelectable:function(){var a=this.getSelectables();

if(a.length>0){return a[a.length-1];
}else{return null;
}},_getRelatedSelectable:function(s,t){var u=this._getWidget();
var v=null;

switch(t){case f:v=u.getPreviousSiblingOf(s,false);
break;
case d:v=u.getNextSiblingOf(s,false);
break;
case e:case g:break;
}
if(!v){return null;
}
if(this._isSelectable(v)){return v;
}else{return this._getRelatedSelectable(v,t);
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
(function(){var v="dblclick",u="click",t="Boolean",s="excluded",r="visible",q="qx.event.type.Data",p="_applyOpenMode",o="Space",n="Left",m="__pP",J="Enter",I="changeOpenMode",H="_applyRootOpenClose",G="changeSelection",F="qx.ui.tree.Tree",E="tree",D="_applyHideRoot",C="changeRoot",B="_applyRoot",A="keypress",y="none",z="pane",w="Right",x="qx.ui.tree.AbstractTreeItem";
qx.Class.define(F,{extend:qx.ui.core.scroll.AbstractScrollArea,implement:[qx.ui.core.IMultiSelection,qx.ui.form.IModelSelection],include:[qx.ui.core.MMultiSelectionHandling,qx.ui.core.MContentPadding,qx.ui.form.MModelSelection],construct:function(){arguments.callee.base.call(this);
this.__pP=new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({allowShrinkY:false,allowGrowX:true});
this.getChildControl(z).add(this.__pP);
this.initOpenMode();
this.initRootOpenClose();
this.addListener(G,this._onChangeSelection,this);
this.addListener(A,this._onKeyPress,this);
},events:{addItem:q,removeItem:q},properties:{openMode:{check:[u,v,y],init:v,apply:p,event:I,themeable:true},root:{check:x,init:null,nullable:true,event:C,apply:B},hideRoot:{check:t,init:false,apply:D},rootOpenClose:{check:t,init:false,apply:H},appearance:{refine:true,init:E},focusable:{refine:true,init:true}},members:{__pP:null,SELECTION_MANAGER:qx.ui.tree.SelectionManager,getChildrenContainer:function(){return this.__pP;
},_applyRoot:function(W,X){var Y=this.getChildrenContainer();

if(X){Y.remove(X);

if(X.hasChildren()){Y.remove(X.getChildrenContainer());
}}
if(W){Y.add(W);

if(W.hasChildren()){Y.add(W.getChildrenContainer());
}W.setVisibility(this.getHideRoot()?s:r);
W.recursiveAddToWidgetQueue();
}},_applyHideRoot:function(T,U){var V=this.getRoot();

if(!V){return;
}V.setVisibility(T?s:r);
V.recursiveAddToWidgetQueue();
},_applyRootOpenClose:function(Q,R){var S=this.getRoot();

if(!S){return;
}S.recursiveAddToWidgetQueue();
},_getContentPaddingTarget:function(){return this.__pP;
},getNextSiblingOf:function(ba,bb,bc){if((bb!==false||ba.isOpen())&&!(bc==true)&&ba.hasChildren()){return ba.getChildren()[0];
}
while(ba){var parent=ba.getParent();

if(!parent){return null;
}var be=parent.getChildren();
var bd=be.indexOf(ba);

if(bd>-1&&bd<be.length-1){return be[bd+1];
}ba=parent;
}return null;
},getPreviousSiblingOf:function(c,d,f){var parent=c.getParent();

if(!parent){return null;
}
if(this.getHideRoot()){if(parent==this.getRoot()){if(parent.getChildren()[0]==c){return null;
}}}else{if(c==this.getRoot()){return null;
}}var j=parent.getChildren();
var g=j.indexOf(c);

if(g>0){var h=j[g-1];

while((d!==false||h.isOpen())&&!(f==true)&&h.hasChildren()){var k=h.getChildren();
h=k[k.length-1];
}return h;
}else{return parent;
}},getItems:function(K,L){if(this.getRoot()!=null){return this.getRoot().getItems(K,L,this.getHideRoot());
}else{return [];
}},getChildren:function(){if(this.getRoot()!=null){return [this.getRoot()];
}else{return [];
}},getTreeItem:function(l){while(l){if(l==this){return null;
}
if(l instanceof qx.ui.tree.AbstractTreeItem){return l;
}l=l.getLayoutParent();
}return null;
},_applyOpenMode:function(M,N){if(N==u){this.removeListener(u,this._onOpen,this);
}else if(N==v){this.removeListener(v,this._onOpen,this);
}
if(M==u){this.addListener(u,this._onOpen,this);
}else if(M==v){this.addListener(v,this._onOpen,this);
}},_onOpen:function(e){var O=this.getTreeItem(e.getTarget());

if(!O||!O.isOpenable()){return;
}O.setOpen(!O.isOpen());
e.stopPropagation();
},_onChangeSelection:function(e){var b=e.getData();
for(var i=0;i<b.length;i++){var a=b[i];
while(a.getParent()!=null){a=a.getParent();
a.setOpen(true);
}}},_onKeyPress:function(e){var P=this._getLeadItem();

if(P!==null){switch(e.getKeyIdentifier()){case n:if(P.isOpenable()&&P.isOpen()){P.setOpen(false);
}break;
case w:if(P.isOpenable()&&!P.isOpen()){P.setOpen(true);
}break;
case J:case o:if(P.isOpenable()){P.toggleOpen();
}break;
}}}},destruct:function(){this._disposeObjects(m);
}});
})();
(function(){var bj="open",bi="auto",bh="middle",bg="icon",bf="label",be="changeOpen",bd="excluded",bc="visible",bb="String",ba="opened",bC="always",bB="qx.ui.tree.AbstractTreeItem",bA="addItem",bz="Boolean",by="__nq",bx="Integer",bw="_applyIndent",bv="changeOpenSymbolMode",bu="_applyOpenSymbolMode",bt="resize",bq="__nt",br="",bo="removeItem",bp="__np",bm="abstract",bn="never",bk="_applyIcon",bl="_applyOpen",bs="_applyLabel";
qx.Class.define(bB,{extend:qx.ui.core.Widget,type:bm,include:[qx.ui.form.MModelProperty],implement:[qx.ui.form.IModel],construct:function(){arguments.callee.base.call(this);
this.__np=[];
this._setLayout(new qx.ui.layout.HBox());
this._addWidgets();
this.initOpen();
},properties:{open:{check:bz,init:false,event:be,apply:bl},openSymbolMode:{check:[bC,bn,bi],init:bi,event:bv,apply:bu},indent:{check:bx,init:19,apply:bw,themeable:true},parent:{check:bB,nullable:true},icon:{check:bb,apply:bk,nullable:true,themeable:true},label:{check:bb,apply:bs,init:br}},members:{__np:null,__nq:null,__nr:null,__ns:null,__nt:null,_addWidgets:function(){throw new Error("Abstract method call.");
},_createChildControlImpl:function(z){var A;

switch(z){case bf:A=new qx.ui.basic.Label().set({alignY:bh,value:this.getLabel()});
break;
case bg:A=new qx.ui.basic.Image().set({alignY:bh,source:this.getIcon()});
break;
case bj:A=new qx.ui.tree.FolderOpenButton().set({alignY:bh});
A.addListener(be,this._onChangeOpen,this);
A.addListener(bt,this._updateIndent,this);
break;
}return A||arguments.callee.base.call(this,z);
},getTree:function(){var d=this;

while(d.getParent()){d=d.getParent();
}var c=d.getLayoutParent()?d.getLayoutParent().getLayoutParent():0;

if(c&&c instanceof qx.ui.core.scroll.ScrollPane){return c.getLayoutParent();
}return null;
},addWidget:function(S,T){this._add(S,T);
},addSpacer:function(){if(!this.__nt){this.__nt=new qx.ui.core.Spacer();
}else{this._remove(this.__nt);
}this._add(this.__nt);
},addOpenButton:function(){this._add(this.getChildControl(bj));
},_onChangeOpen:function(e){if(this.isOpenable()){this.setOpen(e.getData());
}},addIcon:function(){var B=this.getChildControl(bg);

if(this.__ns){this._remove(B);
}this._add(B);
this.__ns=true;
},addLabel:function(a){var b=this.getChildControl(bf);

if(this.__nr){this._remove(b);
}
if(a){this.setLabel(a);
}else{b.setValue(this.getLabel());
}this._add(b);
this.__nr=true;
},addState:function(w){arguments.callee.base.call(this,w);
var y=this._getChildren();

for(var i=0,l=y.length;i<l;i++){var x=y[i];

if(x.addState){y[i].addState(w);
}}},removeState:function(bM){arguments.callee.base.call(this,bM);
var bO=this._getChildren();

for(var i=0,l=bO.length;i<l;i++){var bN=bO[i];

if(bN.addState){bO[i].removeState(bM);
}}},_applyIcon:function(P,Q){var R=this.getChildControl(bg,true);

if(R){R.setSource(P);
}},_applyLabel:function(o,p){var q=this.getChildControl(bf,true);

if(q){q.setValue(o);
}},_applyOpen:function(N,O){if(this.hasChildren()){this.getChildrenContainer().setVisibility(N?bc:bd);
}var open=this.getChildControl(bj,true);

if(open){open.setOpen(N);
}N?this.addState(ba):this.removeState(ba);
},isOpenable:function(){var Y=this.getOpenSymbolMode();
return (Y===bC||Y===bi&&this.hasChildren());
},_shouldShowOpenSymbol:function(){var open=this.getChildControl(bj,true);

if(!open){return false;
}var t=this.getTree();

if(!t.getRootOpenClose()){if(t.getHideRoot()){if(t.getRoot()==this.getParent()){return false;
}}else{if(t.getRoot()==this){return false;
}}}return this.isOpenable();
},_applyOpenSymbolMode:function(u,v){this._updateIndent();
},_updateIndent:function(){if(!this.getTree()){return;
}var V=0;
var open=this.getChildControl(bj,true);

if(open){if(this._shouldShowOpenSymbol()){open.show();
var U=open.getBounds();

if(U){V=U.width;
}else{return;
}}else{open.exclude();
}}
if(this.__nt){this.__nt.setWidth((this.getLevel()+1)*this.getIndent()-V);
}},_applyIndent:function(bD,bE){this._updateIndent();
},getLevel:function(){var E=this.getTree();

if(!E){return;
}var F=this;
var G=-1;

while(F){F=F.getParent();
G+=1;
}if(E.getHideRoot()){G-=1;
}
if(!E.getRootOpenClose()){G-=1;
}return G;
},syncWidget:function(){this._updateIndent();
},getChildrenContainer:function(){if(!this.__nq){this.__nq=new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({visibility:this.isOpen()?bc:bd});
}return this.__nq;
},hasChildrenContainer:function(){return this.__nq;
},getParentChildrenContainer:function(){if(this.getParent()){return this.getParent().getChildrenContainer();
}else if(this.getLayoutParent()){return this.getLayoutParent();
}else{return null;
}},getChildren:function(){return this.__np;
},hasChildren:function(){return this.__np?this.__np.length>0:false;
},getItems:function(f,g,h){if(h!==false){var j=[];
}else{var j=[this];
}var n=this.hasChildren()&&(g!==false||this.isOpen());

if(n){var m=this.getChildren();

if(f===false){j=j.concat(m);
}else{for(var i=0,k=m.length;i<k;i++){j=j.concat(m[i].getItems(f,g,false));
}}}return j;
},recursiveAddToWidgetQueue:function(){var r=this.getItems(true,true,false);

for(var i=0,l=r.length;i<l;i++){qx.ui.core.queue.Widget.add(r[i]);
}},__nu:function(){if(this.getParentChildrenContainer()){this.getParentChildrenContainer()._addAfter(this.getChildrenContainer(),this);
}},add:function(bP){var bQ=this.getChildrenContainer();
var bT=this.getTree();

for(var i=0,l=arguments.length;i<l;i++){var bU=arguments[i];
var bS=bU.getParent();

if(bS){bS.remove(bU);
}bU.setParent(this);
var bR=this.hasChildren();
bQ.add(bU);

if(bU.hasChildren()){bQ.add(bU.getChildrenContainer());
}this.__np.push(bU);

if(!bR){this.__nu();
}
if(bT){bU.recursiveAddToWidgetQueue();
bT.fireNonBubblingEvent(bA,qx.event.type.Data,[bU]);
}}
if(bT){qx.ui.core.queue.Widget.add(this);
}},addAt:function(H,I){{};

if(I==this.__np.length){this.add(H);
return;
}var M=H.getParent();

if(M){M.remove(H);
}var K=this.getChildrenContainer();
H.setParent(this);
var L=this.hasChildren();
var J=this.__np[I];
K.addBefore(H,J);

if(H.hasChildren()){K.addAfter(H.getChildrenContainer(),H);
}qx.lang.Array.insertAt(this.__np,H,I);

if(!L){this.__nu();
}
if(this.getTree()){H.recursiveAddToWidgetQueue();
qx.ui.core.queue.Widget.add(this);
}},addBefore:function(W,X){{};
this.addAt(W,this.__np.indexOf(X));
},addAfter:function(bF,bG){{};
this.addAt(bF,this.__np.indexOf(bG)+1);
},addAtBegin:function(s){this.addAt(s,0);
},remove:function(bH){for(var i=0,l=arguments.length;i<l;i++){var bL=arguments[i];

if(this.__np.indexOf(bL)==-1){this.warn("Cannot remove treeitem '"+bL+"'. It is not a child of this tree item.");
return;
}var bI=this.getChildrenContainer();

if(bL.hasChildrenContainer()){var bK=bL.getChildrenContainer();

if(bI.getChildren().indexOf(bK)>=0){bI.remove(bK);
}}qx.lang.Array.remove(this.__np,bL);
bL.setParent(null);
bI.remove(bL);
}var bJ=this.getTree();

if(bJ){bJ.fireNonBubblingEvent(bo,qx.event.type.Data,[bL]);
}qx.ui.core.queue.Widget.add(this);
},removeAt:function(C){var D=this.__np[C];

if(D){this.remove(D);
}},removeAll:function(){for(var i=this.__np.length-1;i>=0;i--){this.remove(this.__np[i]);
}}},destruct:function(){this._disposeArray(bp);
this._disposeObjects(bq,by);
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
(function(){var H="Trash",G="icon/22/devices/drive-harddisk.png",F="middle",E="Windows (C:)",D="Simple View",C="Documents (D:)",B="icon/22/places/user-desktop.png",A="Inbox",z="Desktop",y="DVD (E:)",bi="icon/22/actions/mail-mark-junk.png",bh="rgb(228,228,228)",bg="Network",bf="Junk",be="Sent",bd="Files",bc="Important",bb="multi",ba="Home",Y="icon/22/devices/drive-optical.png",O="icon/22/apps/internet-mail.png",P="icon/22/places/user-trash-full.png",M="Workspace",N="Junk #",K="icon/22/apps/office-chart.png",L="Data",I="May ",J="kb",Q="icon/22/places/user-trash.png",R="icon/22/places/user-home.png",T="showcase.page.tree.Content",S="icon/22/places/network-server.png",V="icon/22/actions/document-send.png",U="icon/22/actions/mail-message-new.png",X=" 2005",W="icon/22/actions/mail-mark-important.png";
qx.Class.define(T,{extend:showcase.page.AbstractDesktopContent,construct:function(w){arguments.callee.base.call(this,w);
var x=this.__GY();
this.getView().add(x);
x.moveTo(260,20);
x.open();
},members:{_addWindowContent:function(a){a.set({caption:D,minWidth:200});
a.setLayout(new qx.ui.layout.Grow());
var m=new qx.ui.tree.Tree().set({width:200,height:400,selectionMode:bb,dragSelection:true,decorator:null,backgroundColor:bh});
a.add(m);
var r=new qx.ui.tree.TreeFolder(ba).set({icon:R});
r.setOpen(true);
m.setRoot(r);
var p=new qx.ui.tree.TreeFolder(z).set({icon:B});
p.setOpen(true);
r.add(p);
var g=new qx.ui.tree.TreeFolder(bd);
var e=new qx.ui.tree.TreeFolder(M);
var f=new qx.ui.tree.TreeFolder(bg).set({icon:S});
var d=new qx.ui.tree.TreeFolder(H).set({icon:Q});
p.add(g,e,f,d);
var n=new qx.ui.tree.TreeFile(E).set({icon:G});
var c=new qx.ui.tree.TreeFile(C).set({icon:G});
var b=new qx.ui.tree.TreeFile(y).set({icon:Y});
e.add(n,c,b);
var q=new qx.ui.tree.TreeFolder(A).set({icon:O,open:true});
var h=new qx.ui.tree.TreeFolder(bf).set({icon:bi});
var l=new qx.ui.tree.TreeFolder(be).set({icon:V});
var k=new qx.ui.tree.TreeFolder(H).set({icon:P});

for(var i=0;i<30;i++){k.add(new qx.ui.tree.TreeFile(N+i).set({icon:U}));
}var o=new qx.ui.tree.TreeFolder(L).set({icon:K});
var j=new qx.ui.tree.TreeFolder(bc).set({icon:W});
q.add(h,l,k,o,j);
r.add(q);
},__GY:function(){var bp=new qx.ui.window.Window().set({showClose:false,showMinimize:false,width:310,height:425,minWidth:200,caption:"Detailed View",layout:new qx.ui.layout.Grow(),contentPadding:0});
var bR=new qx.ui.tree.Tree().set({width:600,height:500,decorator:null,selectionMode:"multi",dragSelection:true,backgroundColor:"rgb(228,228,228)"});
bp.add(bR);
var bS=this.configureTreeItem(new qx.ui.tree.TreeFolder(),"Home","icon/22/places/user-home.png");
bS.setOpen(true);
bR.setRoot(bS);
var bK=this.configureTreeItem(new qx.ui.tree.TreeFolder(),"Desktop","icon/22/places/user-desktop.png");
bK.setOpen(true);
bS.add(bK);
var bn=this.configureTreeItem(new qx.ui.tree.TreeFolder(),"Files");
var bl=this.configureTreeItem(new qx.ui.tree.TreeFolder(),"Workspace");
var bm=this.configureTreeItem(new qx.ui.tree.TreeFolder(),"Network","icon/22/places/network-server.png");
var bk=this.configureTreeItem(new qx.ui.tree.TreeFolder(),"Trash","icon/22/places/user-trash-full.png");
bK.add(bn,bl,bm,bk);
var bQ=this.configureTreeItem(new qx.ui.tree.TreeFile(),"Windows (C:)","icon/22/devices/drive-harddisk.png");
var bP=this.configureTreeItem(new qx.ui.tree.TreeFile(),"Documents (D:)","icon/22/devices/drive-harddisk.png");
bl.add(bQ,bP);
var bL=this.configureTreeItem(new qx.ui.tree.TreeFolder(),"Inbox","icon/22/apps/internet-mail.png");
bL.setOpen(true);
var bo=this.configureTreeItem(new qx.ui.tree.TreeFolder(),"Junk","icon/22/actions/mail-mark-junk.png");
var br=this.configureTreeItem(new qx.ui.tree.TreeFolder(),"Sent","icon/22/actions/document-send.png");
var bq=this.configureTreeItem(new qx.ui.tree.TreeFolder(),"Trash","icon/22/places/user-trash.png");
var bt=this.configureTreeItem(new qx.ui.tree.TreeFolder(),"Data","icon/22/apps/office-chart.png");
var bs=this.configureTreeItem(new qx.ui.tree.TreeFolder(),"Edit");
var bF=this.configureTreeItem(new qx.ui.tree.TreeFolder(),"Chat");
var bE=this.configureTreeItem(new qx.ui.tree.TreeFolder(),"Pustefix");
var bD=this.configureTreeItem(new qx.ui.tree.TreeFolder(),"TINC");
var bO=this.configureTreeItem(new qx.ui.tree.TreeFolder(),"Announce");
var bN=this.configureTreeItem(new qx.ui.tree.TreeFolder(),"Devel");
bD.add(bO,bN);
bs.add(bF,bE,bD);
var bv=this.configureTreeItem(new qx.ui.tree.TreeFolder(),"Lists");
var bA=this.configureTreeItem(new qx.ui.tree.TreeFolder(),"Relations");
var bB=this.configureTreeItem(new qx.ui.tree.TreeFolder(),"Company");
var bC=this.configureTreeItem(new qx.ui.tree.TreeFolder(),"Questions");
var bw=this.configureTreeItem(new qx.ui.tree.TreeFolder(),"Internal");
var bx=this.configureTreeItem(new qx.ui.tree.TreeFolder(),"Products");
var by=this.configureTreeItem(new qx.ui.tree.TreeFolder(),"Press");
var bz=this.configureTreeItem(new qx.ui.tree.TreeFolder(),"Development");
var bG=this.configureTreeItem(new qx.ui.tree.TreeFolder(),"Competition");
bv.add(bA,bB,bC,bw,bx,by,bz,bG);
var bu=this.configureTreeItem(new qx.ui.tree.TreeFolder(),"Personal");
var bI=this.configureTreeItem(new qx.ui.tree.TreeFolder(),"Bugs");
var bM=this.configureTreeItem(new qx.ui.tree.TreeFolder(),"Family");
var bJ=this.configureTreeItem(new qx.ui.tree.TreeFolder(),"Projects");
var bH=this.configureTreeItem(new qx.ui.tree.TreeFolder(),"Holiday");
bu.add(bI,bM,bJ,bH);
var bj=this.configureTreeItem(new qx.ui.tree.TreeFolder(),"Images");

for(var i=0;i<50;i++){bj.add(this.configureTreeItem(new qx.ui.tree.TreeFolder(),"Vacation"+(i+1),"icon/22/mimetypes/media-image.png"));
}bL.add(bo,br,bq,bt,bs,bv,bu,bj);
bS.add(bL);
return bp;
},configureTreeItem:function(s,t,u){s.addSpacer();

if(s instanceof qx.ui.tree.TreeFolder){s.addOpenButton();
}s.addIcon();

if(arguments.length>=3){s.setIcon(u);
}s.addLabel(t);
s.addWidget(new qx.ui.core.Spacer(),{flex:1});
var v=new qx.ui.basic.Label(Math.round(Math.random()*99)+J);
v.setWidth(30);
v.setAlignY(F);
v.setMargin([0,8]);
s.addWidget(v);
v=new qx.ui.basic.Label(I+Math.round(Math.random()*30+1)+X);
v.setWidth(80);
v.setAlignY(F);
s.addWidget(v);
return s;
}}});
})();
