qx.$$packageData['dfae0fde37bc']={"locales":{},"resources":{"qx/icon/Tango/22/actions/document-send.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/mail-mark-important.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/mail-mark-junk.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/mail-message-new.png":[22,22,"png","qx"],"qx/icon/Tango/22/apps/internet-mail.png":[22,22,"png","qx"],"qx/icon/Tango/22/apps/office-chart.png":[22,22,"png","qx"],"qx/icon/Tango/22/devices/drive-harddisk.png":[22,22,"png","qx"],"qx/icon/Tango/22/devices/drive-optical.png":[22,22,"png","qx"],"qx/icon/Tango/22/mimetypes/media-image.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder-open.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder-remote.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/network-server.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/network-workgroup.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/user-desktop.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/user-home.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/user-trash-full.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/user-trash.png":[22,22,"png","qx"]},"translations":{}};

qx.Part.$$notifyLoad("dfae0fde37bc", function() {
(function(){var e="right",d="above",c="left",b="under",a="qx.ui.tree.SelectionManager";
qx.Class.define(a,{extend:qx.ui.core.selection.ScrollArea,members:{_getSelectableLocationY:function(v){var w=v.getBounds();

if(w){var top=this._getWidget().getItemTop(v);
return {top:top,bottom:top+w.height};
}},_isSelectable:function(x){return this._isItemSelectable(x)&&x instanceof qx.ui.tree.AbstractTreeItem;
},_getSelectableFromMouseEvent:function(event){return this._getWidget().getTreeItem(event.getTarget());
},getSelectables:function(l){var o=false;

if(!l){o=this._userInteraction;
this._userInteraction=true;
}var n=this._getWidget();
var p=[];

if(n.getRoot()!=null){var m=n.getRoot().getItems(true,!!l,n.getHideRoot());

for(var i=0;i<m.length;i++){if(this._isSelectable(m[i])){p.push(m[i]);
}}}this._userInteraction=o;
return p;
},_getSelectableRange:function(f,g){if(f===g){return [f];
}var h=this.getSelectables();
var j=h.indexOf(f);
var k=h.indexOf(g);

if(j<0||k<0){return [];
}
if(j<k){return h.slice(j,k+1);
}else{return h.slice(k,j+1);
}},_getFirstSelectable:function(){return this.getSelectables()[0]||null;
},_getLastSelectable:function(){var u=this.getSelectables();

if(u.length>0){return u[u.length-1];
}else{return null;
}},_getRelatedSelectable:function(q,r){var s=this._getWidget();
var t=null;

switch(r){case d:t=s.getPreviousNodeOf(q,false);
break;
case b:t=s.getNextNodeOf(q,false);
break;
case c:case e:break;
}
if(!t){return null;
}
if(this._isSelectable(t)){return t;
}else{return this._getRelatedSelectable(t,r);
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
(function(){var o="dblclick",n="click",m="Boolean",l="excluded",k="visible",j="qx.event.type.Data",h="_applyOpenMode",g="Space",f="Left",d="Enter",C="changeOpenMode",B="_applyRootOpenClose",A="changeSelection",z="qx.ui.tree.Tree",y="tree",x="_applyHideRoot",w="changeRoot",v="_applyRoot",u="__ru",t="keypress",r="none",s="pane",p="Right",q="qx.ui.tree.AbstractTreeItem";
qx.Class.define(z,{extend:qx.ui.core.scroll.AbstractScrollArea,implement:[qx.ui.core.IMultiSelection,qx.ui.form.IModelSelection,qx.ui.form.IForm],include:[qx.ui.core.MMultiSelectionHandling,qx.ui.core.MContentPadding,qx.ui.form.MModelSelection,qx.ui.form.MForm],construct:function(){qx.ui.core.scroll.AbstractScrollArea.call(this);
this.__ru=new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({allowShrinkY:false,allowGrowX:true});
this.getChildControl(s).add(this.__ru);
this.initOpenMode();
this.initRootOpenClose();
this.addListener(A,this._onChangeSelection,this);
this.addListener(t,this._onKeyPress,this);
},events:{addItem:j,removeItem:j},properties:{openMode:{check:[n,o,r],init:o,apply:h,event:C,themeable:true},root:{check:q,init:null,nullable:true,event:w,apply:v},hideRoot:{check:m,init:false,apply:x},rootOpenClose:{check:m,init:false,apply:B},appearance:{refine:true,init:y},focusable:{refine:true,init:true}},members:{__ru:null,SELECTION_MANAGER:qx.ui.tree.SelectionManager,getChildrenContainer:function(){return this.__ru;
},_applyRoot:function(a,b){var c=this.getChildrenContainer();

if(b){c.remove(b);

if(b.hasChildren()){c.remove(b.getChildrenContainer());
}}
if(a){c.add(a);

if(a.hasChildren()){c.add(a.getChildrenContainer());
}a.setVisibility(this.getHideRoot()?l:k);
a.recursiveAddToWidgetQueue();
}},_applyHideRoot:function(bg,bh){var bi=this.getRoot();

if(!bi){return;
}bi.setVisibility(bg?l:k);
bi.recursiveAddToWidgetQueue();
},_applyRootOpenClose:function(P,Q){var R=this.getRoot();

if(!R){return;
}R.recursiveAddToWidgetQueue();
},_getContentPaddingTarget:function(){return this.__ru;
},getNextNodeOf:function(D,E){if((E!==false||D.isOpen())&&D.hasChildren()){return D.getChildren()[0];
}
while(D){var parent=D.getParent();

if(!parent){return null;
}var G=parent.getChildren();
var F=G.indexOf(D);

if(F>-1&&F<G.length-1){return G[F+1];
}D=parent;
}return null;
},getPreviousNodeOf:function(H,I){var parent=H.getParent();

if(!parent){return null;
}
if(this.getHideRoot()){if(parent==this.getRoot()){if(parent.getChildren()[0]==H){return null;
}}}else{if(H==this.getRoot()){return null;
}}var L=parent.getChildren();
var J=L.indexOf(H);

if(J>0){var K=L[J-1];

while((I!==false||K.isOpen())&&K.hasChildren()){var M=K.getChildren();
K=M[M.length-1];
}return K;
}else{return parent;
}},getNextSiblingOf:function(bd){if(bd==this.getRoot()){return null;
}var parent=bd.getParent();
var be=parent.getChildren();
var bf=be.indexOf(bd);

if(bf<be.length-1){return be[bf+1];
}return null;
},getPreviousSiblingOf:function(ba){if(ba==this.getRoot()){return null;
}var parent=ba.getParent();
var bb=parent.getChildren();
var bc=bb.indexOf(ba);

if(bc>0){return bb[bc-1];
}return null;
},getItems:function(S,T){if(this.getRoot()!=null){return this.getRoot().getItems(S,T,this.getHideRoot());
}else{return [];
}},getChildren:function(){if(this.getRoot()!=null){return [this.getRoot()];
}else{return [];
}},getTreeItem:function(N){while(N){if(N==this){return null;
}
if(N instanceof qx.ui.tree.AbstractTreeItem){return N;
}N=N.getLayoutParent();
}return null;
},_applyOpenMode:function(V,W){if(W==n){this.removeListener(n,this._onOpen,this);
}else if(W==o){this.removeListener(o,this._onOpen,this);
}
if(V==n){this.addListener(n,this._onOpen,this);
}else if(V==o){this.addListener(o,this._onOpen,this);
}},_onOpen:function(e){var O=this.getTreeItem(e.getTarget());

if(!O||!O.isOpenable()){return;
}O.setOpen(!O.isOpen());
e.stopPropagation();
},_onChangeSelection:function(e){var Y=e.getData();
for(var i=0;i<Y.length;i++){var X=Y[i];
while(X.getParent()!=null){X=X.getParent();
X.setOpen(true);
}}},_onKeyPress:function(e){var U=this._getLeadItem();

if(U!==null){switch(e.getKeyIdentifier()){case f:if(U.isOpenable()&&U.isOpen()){U.setOpen(false);
}break;
case p:if(U.isOpenable()&&!U.isOpen()){U.setOpen(true);
}break;
case d:case g:if(U.isOpenable()){U.toggleOpen();
}break;
}}}},destruct:function(){this._disposeObjects(u);
}});
})();
(function(){var B="open",A="auto",z="middle",y="icon",x="label",w="changeOpen",v="excluded",u="visible",t="String",s="opened",U="always",T="qx.ui.tree.AbstractTreeItem",S="addItem",R="Boolean",Q="Integer",P="_applyIndent",O="changeOpenSymbolMode",N="_applyOpenSymbolMode",M="__pt",L="resize",I="__ps",J="",G="removeItem",H="abstract",E="never",F="_applyIcon",C="_applyOpen",D="_applyLabel",K="__pw";
qx.Class.define(T,{extend:qx.ui.core.Widget,type:H,include:[qx.ui.form.MModelProperty],implement:[qx.ui.form.IModel],construct:function(){qx.ui.core.Widget.call(this);
this.__ps=[];
this._setLayout(new qx.ui.layout.HBox());
this._addWidgets();
this.initOpen();
},properties:{open:{check:R,init:false,event:w,apply:C},openSymbolMode:{check:[U,E,A],init:A,event:O,apply:N},indent:{check:Q,init:19,apply:P,themeable:true},parent:{check:T,nullable:true},icon:{check:t,apply:F,nullable:true,themeable:true},label:{check:t,apply:D,init:J}},members:{__ps:null,__pt:null,__pu:null,__pv:null,__pw:null,_addWidgets:function(){throw new Error("Abstract method call.");
},_createChildControlImpl:function(bA){var bB;

switch(bA){case x:bB=new qx.ui.basic.Label().set({alignY:z,value:this.getLabel()});
break;
case y:bB=new qx.ui.basic.Image().set({alignY:z,source:this.getIcon()});
break;
case B:bB=new qx.ui.tree.FolderOpenButton().set({alignY:z});
bB.addListener(w,this._onChangeOpen,this);
bB.addListener(L,this._updateIndent,this);
break;
}return bB||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,bA);
},getTree:function(){var bg=this;

while(bg.getParent()){bg=bg.getParent();
}var bf=bg.getLayoutParent()?bg.getLayoutParent().getLayoutParent():0;

if(bf&&bf instanceof qx.ui.core.scroll.ScrollPane){return bf.getLayoutParent();
}return null;
},addWidget:function(bH,bI){this._add(bH,bI);
},addSpacer:function(){if(!this.__pw){this.__pw=new qx.ui.core.Spacer();
}else{this._remove(this.__pw);
}this._add(this.__pw);
},addOpenButton:function(){this._add(this.getChildControl(B));
},_onChangeOpen:function(e){if(this.isOpenable()){this.setOpen(e.getData());
}},addIcon:function(){var bW=this.getChildControl(y);

if(this.__pv){this._remove(bW);
}this._add(bW);
this.__pv=true;
},addLabel:function(bq){var br=this.getChildControl(x);

if(this.__pu){this._remove(br);
}
if(bq){this.setLabel(bq);
}else{br.setValue(this.getLabel());
}this._add(br);
this.__pu=true;
},addState:function(bK){qx.ui.core.Widget.prototype.addState.call(this,bK);
var bM=this._getChildren();

for(var i=0,l=bM.length;i<l;i++){var bL=bM[i];

if(bL.addState){bM[i].addState(bK);
}}},removeState:function(bE){qx.ui.core.Widget.prototype.removeState.call(this,bE);
var bG=this._getChildren();

for(var i=0,l=bG.length;i<l;i++){var bF=bG[i];

if(bF.addState){bG[i].removeState(bE);
}}},_applyIcon:function(bs,bt){var bu=this.getChildControl(y,true);

if(bu){bu.setSource(bs);
}},_applyLabel:function(m,n){var o=this.getChildControl(x,true);

if(o){o.setValue(m);
}},_applyOpen:function(bC,bD){if(this.hasChildren()){this.getChildrenContainer().setVisibility(bC?u:v);
}var open=this.getChildControl(B,true);

if(open){open.setOpen(bC);
}bC?this.addState(s):this.removeState(s);
},isOpenable:function(){var bp=this.getOpenSymbolMode();
return (bp===U||bp===A&&this.hasChildren());
},_shouldShowOpenSymbol:function(){var open=this.getChildControl(B,true);

if(!open){return false;
}var bJ=this.getTree();

if(!bJ.getRootOpenClose()){if(bJ.getHideRoot()){if(bJ.getRoot()==this.getParent()){return false;
}}else{if(bJ.getRoot()==this){return false;
}}}return this.isOpenable();
},_applyOpenSymbolMode:function(a,b){this._updateIndent();
},_updateIndent:function(){if(!this.getTree()){return;
}var bi=0;
var open=this.getChildControl(B,true);

if(open){if(this._shouldShowOpenSymbol()){open.show();
var bh=open.getBounds();

if(bh){bi=bh.width;
}else{return;
}}else{open.exclude();
}}
if(this.__pw){this.__pw.setWidth((this.getLevel()+1)*this.getIndent()-bi);
}},_applyIndent:function(bd,be){this._updateIndent();
},getLevel:function(){var bN=this.getTree();

if(!bN){return;
}var bO=this;
var bP=-1;

while(bO){bO=bO.getParent();
bP+=1;
}if(bN.getHideRoot()){bP-=1;
}
if(!bN.getRootOpenClose()){bP-=1;
}return bP;
},syncWidget:function(){this._updateIndent();
},getChildrenContainer:function(){if(!this.__pt){this.__pt=new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({visibility:this.isOpen()?u:v});
}return this.__pt;
},hasChildrenContainer:function(){return this.__pt;
},getParentChildrenContainer:function(){if(this.getParent()){return this.getParent().getChildrenContainer();
}else if(this.getLayoutParent()){return this.getLayoutParent();
}else{return null;
}},getChildren:function(){return this.__ps;
},hasChildren:function(){return this.__ps?this.__ps.length>0:false;
},getItems:function(V,W,X){if(X!==false){var Y=[];
}else{var Y=[this];
}var bc=this.hasChildren()&&(W!==false||this.isOpen());

if(bc){var bb=this.getChildren();

if(V===false){Y=Y.concat(bb);
}else{for(var i=0,ba=bb.length;i<ba;i++){Y=Y.concat(bb[i].getItems(V,W,false));
}}}return Y;
},recursiveAddToWidgetQueue:function(){var d=this.getItems(true,true,false);

for(var i=0,l=d.length;i<l;i++){qx.ui.core.queue.Widget.add(d[i]);
}},__px:function(){if(this.getParentChildrenContainer()){this.getParentChildrenContainer()._addAfter(this.getChildrenContainer(),this);
}},add:function(bQ){var bR=this.getChildrenContainer();
var bU=this.getTree();

for(var i=0,l=arguments.length;i<l;i++){var bV=arguments[i];
var bT=bV.getParent();

if(bT){bT.remove(bV);
}bV.setParent(this);
var bS=this.hasChildren();
bR.add(bV);

if(bV.hasChildren()){bR.add(bV.getChildrenContainer());
}this.__ps.push(bV);

if(!bS){this.__px();
}
if(bU){bV.recursiveAddToWidgetQueue();
bU.fireNonBubblingEvent(S,qx.event.type.Data,[bV]);
}}
if(bU){qx.ui.core.queue.Widget.add(this);
}},addAt:function(bj,bk){{};

if(bk==this.__ps.length){this.add(bj);
return;
}var bo=bj.getParent();

if(bo){bo.remove(bj);
}var bm=this.getChildrenContainer();
bj.setParent(this);
var bn=this.hasChildren();
var bl=this.__ps[bk];
bm.addBefore(bj,bl);

if(bj.hasChildren()){bm.addAfter(bj.getChildrenContainer(),bj);
}qx.lang.Array.insertAt(this.__ps,bj,bk);

if(!bn){this.__px();
}
if(this.getTree()){bj.recursiveAddToWidgetQueue();
qx.ui.core.queue.Widget.add(this);
}},addBefore:function(bx,by){{};
var bz=bx.getParent();

if(bz){bz.remove(bx);
}this.addAt(bx,this.__ps.indexOf(by));
},addAfter:function(p,q){{};
var r=p.getParent();

if(r){r.remove(p);
}this.addAt(p,this.__ps.indexOf(q)+1);
},addAtBegin:function(c){this.addAt(c,0);
},remove:function(f){for(var i=0,l=arguments.length;i<l;i++){var k=arguments[i];

if(this.__ps.indexOf(k)==-1){this.warn("Cannot remove treeitem '"+k+"'. It is not a child of this tree item.");
return;
}var g=this.getChildrenContainer();

if(k.hasChildrenContainer()){var j=k.getChildrenContainer();

if(g.getChildren().indexOf(j)>=0){g.remove(j);
}}qx.lang.Array.remove(this.__ps,k);
k.setParent(null);
g.remove(k);
}var h=this.getTree();

if(h){h.fireNonBubblingEvent(G,qx.event.type.Data,[k]);
}qx.ui.core.queue.Widget.add(this);
},removeAt:function(bv){var bw=this.__ps[bv];

if(bw){this.remove(bw);
}},removeAll:function(){for(var i=this.__ps.length-1;i>=0;i--){this.remove(this.__ps[i]);
}}},destruct:function(){this._disposeArray(I);
this._disposeObjects(K,M);
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
qx.Class.define(Q,{extend:showcase.page.AbstractDesktopContent,construct:function(bF){showcase.page.AbstractDesktopContent.call(this,bF);
var bG=this.__Js();
this.getView().add(bG);
bG.moveTo(260,20);
bG.open();
},members:{_addWindowContent:function(bo){bo.set({caption:m,minWidth:200});
bo.setLayout(new qx.ui.layout.Grow());
var bz=new qx.ui.tree.Tree().set({width:200,height:400,selectionMode:bf,dragSelection:true,decorator:null,backgroundColor:c});
bo.add(bz);
var bE=new qx.ui.tree.TreeFolder(be).set({icon:q});
bE.setOpen(true);
bz.setRoot(bE);
var bC=new qx.ui.tree.TreeFolder(e).set({icon:g});
bC.setOpen(true);
bE.add(bC);
var bu=new qx.ui.tree.TreeFolder(bg);
var bs=new qx.ui.tree.TreeFolder(bb);
var bt=new qx.ui.tree.TreeFolder(b).set({icon:r});
var br=new qx.ui.tree.TreeFolder(l).set({icon:t});
bC.add(bu,bs,bt,br);
var bA=new qx.ui.tree.TreeFile(j).set({icon:k});
var bq=new qx.ui.tree.TreeFile(h).set({icon:k});
var bp=new qx.ui.tree.TreeFile(N).set({icon:E});
bs.add(bA,bq,bp);
var bD=new qx.ui.tree.TreeFolder(f).set({icon:bd,open:true});
var bv=new qx.ui.tree.TreeFolder(bj).set({icon:d});
var by=new qx.ui.tree.TreeFolder(bi).set({icon:o});
var bx=new qx.ui.tree.TreeFolder(l).set({icon:bc});

for(var i=0;i<30;i++){bx.add(new qx.ui.tree.TreeFile(J+i).set({icon:H}));
}var bB=new qx.ui.tree.TreeFolder(s).set({icon:ba});
var bw=new qx.ui.tree.TreeFolder(B).set({icon:T});
bD.add(bv,by,bx,bB,bw);
bE.add(bD);
},__Js:function(){var bN=new qx.ui.window.Window().set({showClose:false,showMinimize:false,width:310,height:425,minWidth:200,caption:S,layout:new qx.ui.layout.Grow(),contentPadding:0});
var cq=new qx.ui.tree.Tree().set({width:600,height:500,decorator:null,selectionMode:bf,dragSelection:true,backgroundColor:c});
bN.add(cq);
var cr=this.configureTreeItem(new qx.ui.tree.TreeFolder(),be,q);
cr.setOpen(true);
cq.setRoot(cr);
var cj=this.configureTreeItem(new qx.ui.tree.TreeFolder(),e,g);
cj.setOpen(true);
cr.add(cj);
var bL=this.configureTreeItem(new qx.ui.tree.TreeFolder(),bg);
var bJ=this.configureTreeItem(new qx.ui.tree.TreeFolder(),bb);
var bK=this.configureTreeItem(new qx.ui.tree.TreeFolder(),b,r);
var bI=this.configureTreeItem(new qx.ui.tree.TreeFolder(),l,bc);
cj.add(bL,bJ,bK,bI);
var cp=this.configureTreeItem(new qx.ui.tree.TreeFile(),j,k);
var co=this.configureTreeItem(new qx.ui.tree.TreeFile(),h,k);
bJ.add(cp,co);
var ck=this.configureTreeItem(new qx.ui.tree.TreeFolder(),f,bd);
ck.setOpen(true);
var bM=this.configureTreeItem(new qx.ui.tree.TreeFolder(),bj,d);
var bP=this.configureTreeItem(new qx.ui.tree.TreeFolder(),bi,o);
var bO=this.configureTreeItem(new qx.ui.tree.TreeFolder(),l,t);
var bR=this.configureTreeItem(new qx.ui.tree.TreeFolder(),s,ba);
var bQ=this.configureTreeItem(new qx.ui.tree.TreeFolder(),a);
var ce=this.configureTreeItem(new qx.ui.tree.TreeFolder(),P);
var cd=this.configureTreeItem(new qx.ui.tree.TreeFolder(),R);
var cc=this.configureTreeItem(new qx.ui.tree.TreeFolder(),x);
var cn=this.configureTreeItem(new qx.ui.tree.TreeFolder(),D);
var cm=this.configureTreeItem(new qx.ui.tree.TreeFolder(),C);
cc.add(cn,cm);
bQ.add(ce,cd,cc);
var bT=this.configureTreeItem(new qx.ui.tree.TreeFolder(),W);
var bY=this.configureTreeItem(new qx.ui.tree.TreeFolder(),M);
var ca=this.configureTreeItem(new qx.ui.tree.TreeFolder(),v);
var cb=this.configureTreeItem(new qx.ui.tree.TreeFolder(),Y);
var bU=this.configureTreeItem(new qx.ui.tree.TreeFolder(),A);
var bV=this.configureTreeItem(new qx.ui.tree.TreeFolder(),p);
var bW=this.configureTreeItem(new qx.ui.tree.TreeFolder(),u);
var bX=this.configureTreeItem(new qx.ui.tree.TreeFolder(),F);
var cf=this.configureTreeItem(new qx.ui.tree.TreeFolder(),V);
bT.add(bY,ca,cb,bU,bV,bW,bX,cf);
var bS=this.configureTreeItem(new qx.ui.tree.TreeFolder(),z);
var ch=this.configureTreeItem(new qx.ui.tree.TreeFolder(),n);
var cl=this.configureTreeItem(new qx.ui.tree.TreeFolder(),w);
var ci=this.configureTreeItem(new qx.ui.tree.TreeFolder(),y);
var cg=this.configureTreeItem(new qx.ui.tree.TreeFolder(),G);
bS.add(ch,cl,ci,cg);
var bH=this.configureTreeItem(new qx.ui.tree.TreeFolder(),K);

for(var i=0;i<50;i++){bH.add(this.configureTreeItem(new qx.ui.tree.TreeFolder(),X+(i+1),I));
}ck.add(bM,bP,bO,bR,bQ,bT,bS,bH);
cr.add(ck);
return bN;
},configureTreeItem:function(bk,bl,bm){bk.addSpacer();

if(bk instanceof qx.ui.tree.TreeFolder){bk.addOpenButton();
}bk.addIcon();

if(arguments.length>=3){bk.setIcon(bm);
}bk.addLabel(bl);
bk.addWidget(new qx.ui.core.Spacer(),{flex:1});
var bn=new qx.ui.basic.Label(Math.round(Math.random()*99)+L);
bn.setWidth(30);
bn.setAlignY(bh);
bn.setMargin([0,8]);
bk.addWidget(bn);
bn=new qx.ui.basic.Label(U+Math.round(Math.random()*30+1)+O);
bn.setWidth(80);
bn.setAlignY(bh);
bk.addWidget(bn);
return bk;
}}});
})();

});