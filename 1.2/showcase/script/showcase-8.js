qx.$$packageData['a545da1b3556']={"locales":{},"resources":{"qx/icon/Tango/22/actions/document-send.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/mail-mark-important.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/mail-mark-junk.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/mail-message-new.png":[22,22,"png","qx"],"qx/icon/Tango/22/apps/internet-mail.png":[22,22,"png","qx"],"qx/icon/Tango/22/apps/office-chart.png":[22,22,"png","qx"],"qx/icon/Tango/22/devices/drive-harddisk.png":[22,22,"png","qx"],"qx/icon/Tango/22/devices/drive-optical.png":[22,22,"png","qx"],"qx/icon/Tango/22/mimetypes/media-image.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder-open.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder-remote.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/network-server.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/network-workgroup.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/user-desktop.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/user-home.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/user-trash-full.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/user-trash.png":[22,22,"png","qx"]},"translations":{}};

qx.Part.$$notifyLoad("a545da1b3556", function() {
(function(){var k="right",j="above",h="left",g="under",f="qx.ui.tree.SelectionManager";
qx.Class.define(f,{extend:qx.ui.core.selection.ScrollArea,members:{_getSelectableLocationY:function(l){var m=l.getBounds();

if(m){var top=this._getWidget().getItemTop(l);
return {top:top,bottom:top+m.height};
}},_isSelectable:function(x){return this._isItemSelectable(x)&&x instanceof qx.ui.tree.AbstractTreeItem;
},_getSelectableFromMouseEvent:function(event){return this._getWidget().getTreeItem(event.getTarget());
},getSelectables:function(r){var u=false;

if(!r){u=this._userInteraction;
this._userInteraction=true;
}var t=this._getWidget();
var v=[];

if(t.getRoot()!=null){var s=t.getRoot().getItems(true,!!r,t.getHideRoot());

for(var i=0;i<s.length;i++){if(this._isSelectable(s[i])){v.push(s[i]);
}}}this._userInteraction=u;
return v;
},_getSelectableRange:function(a,b){if(a===b){return [a];
}var c=this.getSelectables();
var d=c.indexOf(a);
var e=c.indexOf(b);

if(d<0||e<0){return [];
}
if(d<e){return c.slice(d,e+1);
}else{return c.slice(e,d+1);
}},_getFirstSelectable:function(){return this.getSelectables()[0]||null;
},_getLastSelectable:function(){var w=this.getSelectables();

if(w.length>0){return w[w.length-1];
}else{return null;
}},_getRelatedSelectable:function(n,o){var p=this._getWidget();
var q=null;

switch(o){case j:q=p.getPreviousNodeOf(n,false);
break;
case g:q=p.getNextNodeOf(n,false);
break;
case h:case k:break;
}
if(!q){return null;
}
if(this._isSelectable(q)){return q;
}else{return this._getRelatedSelectable(q,o);
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
(function(){var l="dblclick",k="click",j="Boolean",h="excluded",g="visible",f="qx.event.type.Data",d="_applyOpenMode",c="Space",b="Left",a="Enter",z="changeOpenMode",y="_applyRootOpenClose",x="changeSelection",w="qx.ui.tree.Tree",v="tree",u="_applyHideRoot",t="changeRoot",s="_applyRoot",r="__rl",q="keypress",o="none",p="pane",m="Right",n="qx.ui.tree.AbstractTreeItem";
qx.Class.define(w,{extend:qx.ui.core.scroll.AbstractScrollArea,implement:[qx.ui.core.IMultiSelection,qx.ui.form.IModelSelection,qx.ui.form.IForm],include:[qx.ui.core.MMultiSelectionHandling,qx.ui.core.MContentPadding,qx.ui.form.MModelSelection,qx.ui.form.MForm],construct:function(){qx.ui.core.scroll.AbstractScrollArea.call(this);
this.__rl=new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({allowShrinkY:false,allowGrowX:true});
this.getChildControl(p).add(this.__rl);
this.initOpenMode();
this.initRootOpenClose();
this.addListener(x,this._onChangeSelection,this);
this.addListener(q,this._onKeyPress,this);
},events:{addItem:f,removeItem:f},properties:{openMode:{check:[k,l,o],init:l,apply:d,event:z,themeable:true},root:{check:n,init:null,nullable:true,event:t,apply:s},hideRoot:{check:j,init:false,apply:u},rootOpenClose:{check:j,init:false,apply:y},appearance:{refine:true,init:v},focusable:{refine:true,init:true}},members:{__rl:null,SELECTION_MANAGER:qx.ui.tree.SelectionManager,getChildrenContainer:function(){return this.__rl;
},_applyRoot:function(be,bf){var bg=this.getChildrenContainer();

if(bf){bg.remove(bf);

if(bf.hasChildren()){bg.remove(bf.getChildrenContainer());
}}
if(be){bg.add(be);

if(be.hasChildren()){bg.add(be.getChildrenContainer());
}be.setVisibility(this.getHideRoot()?h:g);
be.recursiveAddToWidgetQueue();
}},_applyHideRoot:function(D,E){var F=this.getRoot();

if(!F){return;
}F.setVisibility(D?h:g);
F.recursiveAddToWidgetQueue();
},_applyRootOpenClose:function(N,O){var P=this.getRoot();

if(!P){return;
}P.recursiveAddToWidgetQueue();
},_getContentPaddingTarget:function(){return this.__rl;
},getNextNodeOf:function(H,I){if((I!==false||H.isOpen())&&H.hasChildren()){return H.getChildren()[0];
}
while(H){var parent=H.getParent();

if(!parent){return null;
}var K=parent.getChildren();
var J=K.indexOf(H);

if(J>-1&&J<K.length-1){return K[J+1];
}H=parent;
}return null;
},getPreviousNodeOf:function(V,W){var parent=V.getParent();

if(!parent){return null;
}
if(this.getHideRoot()){if(parent==this.getRoot()){if(parent.getChildren()[0]==V){return null;
}}}else{if(V==this.getRoot()){return null;
}}var ba=parent.getChildren();
var X=ba.indexOf(V);

if(X>0){var Y=ba[X-1];

while((W!==false||Y.isOpen())&&Y.hasChildren()){var bb=Y.getChildren();
Y=bb[bb.length-1];
}return Y;
}else{return parent;
}},getNextSiblingOf:function(A){if(A==this.getRoot()){return null;
}var parent=A.getParent();
var B=parent.getChildren();
var C=B.indexOf(A);

if(C<B.length-1){return B[C+1];
}return null;
},getPreviousSiblingOf:function(R){if(R==this.getRoot()){return null;
}var parent=R.getParent();
var S=parent.getChildren();
var T=S.indexOf(R);

if(T>0){return S[T-1];
}return null;
},getItems:function(bh,bi){if(this.getRoot()!=null){return this.getRoot().getItems(bh,bi,this.getHideRoot());
}else{return [];
}},getChildren:function(){if(this.getRoot()!=null){return [this.getRoot()];
}else{return [];
}},getTreeItem:function(G){while(G){if(G==this){return null;
}
if(G instanceof qx.ui.tree.AbstractTreeItem){return G;
}G=G.getLayoutParent();
}return null;
},_applyOpenMode:function(bc,bd){if(bd==k){this.removeListener(k,this._onOpen,this);
}else if(bd==l){this.removeListener(l,this._onOpen,this);
}
if(bc==k){this.addListener(k,this._onOpen,this);
}else if(bc==l){this.addListener(l,this._onOpen,this);
}},_onOpen:function(e){var Q=this.getTreeItem(e.getTarget());

if(!Q||!Q.isOpenable()){return;
}Q.setOpen(!Q.isOpen());
e.stopPropagation();
},_onChangeSelection:function(e){var M=e.getData();
for(var i=0;i<M.length;i++){var L=M[i];
while(L.getParent()!=null){L=L.getParent();
L.setOpen(true);
}}},_onKeyPress:function(e){var U=this._getLeadItem();

if(U!==null){switch(e.getKeyIdentifier()){case b:if(U.isOpenable()&&U.isOpen()){U.setOpen(false);
}break;
case m:if(U.isOpenable()&&!U.isOpen()){U.setOpen(true);
}break;
case a:case c:if(U.isOpenable()){U.toggleOpen();
}break;
}}}},destruct:function(){this._disposeObjects(r);
}});
})();
(function(){var C="open",B="auto",A="middle",z="icon",y="label",x="changeOpen",w="excluded",v="visible",u="String",t="opened",V="always",U="qx.ui.tree.AbstractTreeItem",T="addItem",S="Boolean",R="Integer",Q="_applyIndent",P="changeOpenSymbolMode",O="_applyOpenSymbolMode",N="__pj",M="resize",J="",K="removeItem",H="__pn",I="abstract",F="never",G="_applyIcon",D="__pk",E="_applyOpen",L="_applyLabel";
qx.Class.define(U,{extend:qx.ui.core.Widget,type:I,include:[qx.ui.form.MModelProperty],implement:[qx.ui.form.IModel],construct:function(){qx.ui.core.Widget.call(this);
this.__pj=[];
this._setLayout(new qx.ui.layout.HBox());
this._addWidgets();
this.initOpen();
},properties:{open:{check:S,init:false,event:x,apply:E},openSymbolMode:{check:[V,F,B],init:B,event:P,apply:O},indent:{check:R,init:19,apply:Q,themeable:true},parent:{check:U,nullable:true},icon:{check:u,apply:G,nullable:true,themeable:true},label:{check:u,apply:L,init:J}},members:{__pj:null,__pk:null,__pl:null,__pm:null,__pn:null,_addWidgets:function(){throw new Error("Abstract method call.");
},_createChildControlImpl:function(bn){var bo;

switch(bn){case y:bo=new qx.ui.basic.Label().set({alignY:A,value:this.getLabel()});
break;
case z:bo=new qx.ui.basic.Image().set({alignY:A,source:this.getIcon()});
break;
case C:bo=new qx.ui.tree.FolderOpenButton().set({alignY:A});
bo.addListener(x,this._onChangeOpen,this);
bo.addListener(M,this._updateIndent,this);
break;
}return bo||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,bn);
},getTree:function(){var s=this;

while(s.getParent()){s=s.getParent();
}var r=s.getLayoutParent()?s.getLayoutParent().getLayoutParent():0;

if(r&&r instanceof qx.ui.core.scroll.ScrollPane){return r.getLayoutParent();
}return null;
},addWidget:function(bi,bj){this._add(bi,bj);
},addSpacer:function(){if(!this.__pn){this.__pn=new qx.ui.core.Spacer();
}else{this._remove(this.__pn);
}this._add(this.__pn);
},addOpenButton:function(){this._add(this.getChildControl(C));
},_onChangeOpen:function(e){if(this.isOpenable()){this.setOpen(e.getData());
}},addIcon:function(){var be=this.getChildControl(z);

if(this.__pm){this._remove(be);
}this._add(be);
this.__pm=true;
},addLabel:function(bA){var bB=this.getChildControl(y);

if(this.__pl){this._remove(bB);
}
if(bA){this.setLabel(bA);
}else{bB.setValue(this.getLabel());
}this._add(bB);
this.__pl=true;
},addState:function(W){qx.ui.core.Widget.prototype.addState.call(this,W);
var Y=this._getChildren();

for(var i=0,l=Y.length;i<l;i++){var X=Y[i];

if(X.addState){Y[i].addState(W);
}}},removeState:function(k){qx.ui.core.Widget.prototype.removeState.call(this,k);
var n=this._getChildren();

for(var i=0,l=n.length;i<l;i++){var m=n[i];

if(m.addState){n[i].removeState(k);
}}},_applyIcon:function(a,b){var c=this.getChildControl(z,true);

if(c){c.setSource(a);
}},_applyLabel:function(bC,bD){var bE=this.getChildControl(y,true);

if(bE){bE.setValue(bC);
}},_applyOpen:function(bf,bg){if(this.hasChildren()){this.getChildrenContainer().setVisibility(bf?v:w);
}var open=this.getChildControl(C,true);

if(open){open.setOpen(bf);
}bf?this.addState(t):this.removeState(t);
},isOpenable:function(){var bm=this.getOpenSymbolMode();
return (bm===V||bm===B&&this.hasChildren());
},_shouldShowOpenSymbol:function(){var open=this.getChildControl(C,true);

if(!open){return false;
}var bN=this.getTree();

if(!bN.getRootOpenClose()){if(bN.getHideRoot()){if(bN.getRoot()==this.getParent()){return false;
}}else{if(bN.getRoot()==this){return false;
}}}return this.isOpenable();
},_applyOpenSymbolMode:function(bc,bd){this._updateIndent();
},_updateIndent:function(){if(!this.getTree()){return;
}var bq=0;
var open=this.getChildControl(C,true);

if(open){if(this._shouldShowOpenSymbol()){open.show();
var bp=open.getBounds();

if(bp){bq=bp.width;
}else{return;
}}else{open.exclude();
}}
if(this.__pn){this.__pn.setWidth((this.getLevel()+1)*this.getIndent()-bq);
}},_applyIndent:function(br,bs){this._updateIndent();
},getLevel:function(){var o=this.getTree();

if(!o){return;
}var p=this;
var q=-1;

while(p){p=p.getParent();
q+=1;
}if(o.getHideRoot()){q-=1;
}
if(!o.getRootOpenClose()){q-=1;
}return q;
},syncWidget:function(){this._updateIndent();
},getChildrenContainer:function(){if(!this.__pk){this.__pk=new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({visibility:this.isOpen()?v:w});
}return this.__pk;
},hasChildrenContainer:function(){return this.__pk;
},getParentChildrenContainer:function(){if(this.getParent()){return this.getParent().getChildrenContainer();
}else if(this.getLayoutParent()){return this.getLayoutParent();
}else{return null;
}},getChildren:function(){return this.__pj;
},hasChildren:function(){return this.__pj?this.__pj.length>0:false;
},getItems:function(bO,bP,bQ){if(bQ!==false){var bR=[];
}else{var bR=[this];
}var bU=this.hasChildren()&&(bP!==false||this.isOpen());

if(bU){var bT=this.getChildren();

if(bO===false){bR=bR.concat(bT);
}else{for(var i=0,bS=bT.length;i<bS;i++){bR=bR.concat(bT[i].getItems(bO,bP,false));
}}}return bR;
},recursiveAddToWidgetQueue:function(){var bh=this.getItems(true,true,false);

for(var i=0,l=bh.length;i<l;i++){qx.ui.core.queue.Widget.add(bh[i]);
}},__po:function(){if(this.getParentChildrenContainer()){this.getParentChildrenContainer()._addAfter(this.getChildrenContainer(),this);
}},add:function(bH){var bI=this.getChildrenContainer();
var bL=this.getTree();

for(var i=0,l=arguments.length;i<l;i++){var bM=arguments[i];
var bK=bM.getParent();

if(bK){bK.remove(bM);
}bM.setParent(this);
var bJ=this.hasChildren();
bI.add(bM);

if(bM.hasChildren()){bI.add(bM.getChildrenContainer());
}this.__pj.push(bM);

if(!bJ){this.__po();
}
if(bL){bM.recursiveAddToWidgetQueue();
bL.fireNonBubblingEvent(T,qx.event.type.Data,[bM]);
}}
if(bL){qx.ui.core.queue.Widget.add(this);
}},addAt:function(bu,bv){{};

if(bv==this.__pj.length){this.add(bu);
return;
}var bz=bu.getParent();

if(bz){bz.remove(bu);
}var bx=this.getChildrenContainer();
bu.setParent(this);
var by=this.hasChildren();
var bw=this.__pj[bv];
bx.addBefore(bu,bw);

if(bu.hasChildren()){bx.addAfter(bu.getChildrenContainer(),bu);
}qx.lang.Array.insertAt(this.__pj,bu,bv);

if(!by){this.__po();
}
if(this.getTree()){bu.recursiveAddToWidgetQueue();
qx.ui.core.queue.Widget.add(this);
}},addBefore:function(bk,bl){{};
this.addAt(bk,this.__pj.indexOf(bl));
},addAfter:function(ba,bb){{};
this.addAt(ba,this.__pj.indexOf(bb)+1);
},addAtBegin:function(bt){this.addAt(bt,0);
},remove:function(d){for(var i=0,l=arguments.length;i<l;i++){var j=arguments[i];

if(this.__pj.indexOf(j)==-1){this.warn("Cannot remove treeitem '"+j+"'. It is not a child of this tree item.");
return;
}var f=this.getChildrenContainer();

if(j.hasChildrenContainer()){var h=j.getChildrenContainer();

if(f.getChildren().indexOf(h)>=0){f.remove(h);
}}qx.lang.Array.remove(this.__pj,j);
j.setParent(null);
f.remove(j);
}var g=this.getTree();

if(g){g.fireNonBubblingEvent(K,qx.event.type.Data,[j]);
}qx.ui.core.queue.Widget.add(this);
},removeAt:function(bF){var bG=this.__pj[bF];

if(bG){this.remove(bG);
}},removeAll:function(){for(var i=this.__pj.length-1;i>=0;i--){this.remove(this.__pj[i]);
}}},destruct:function(){this._disposeArray(N);
this._disposeObjects(H,D);
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
qx.Class.define(Q,{extend:showcase.page.AbstractDesktopContent,construct:function(cq){showcase.page.AbstractDesktopContent.call(this,cq);
var cr=this.__Jf();
this.getView().add(cr);
cr.moveTo(260,20);
cr.open();
},members:{_addWindowContent:function(bk){bk.set({caption:m,minWidth:200});
bk.setLayout(new qx.ui.layout.Grow());
var bv=new qx.ui.tree.Tree().set({width:200,height:400,selectionMode:bf,dragSelection:true,decorator:null,backgroundColor:c});
bk.add(bv);
var bA=new qx.ui.tree.TreeFolder(be).set({icon:q});
bA.setOpen(true);
bv.setRoot(bA);
var by=new qx.ui.tree.TreeFolder(e).set({icon:g});
by.setOpen(true);
bA.add(by);
var bq=new qx.ui.tree.TreeFolder(bg);
var bo=new qx.ui.tree.TreeFolder(bb);
var bp=new qx.ui.tree.TreeFolder(b).set({icon:r});
var bn=new qx.ui.tree.TreeFolder(l).set({icon:t});
by.add(bq,bo,bp,bn);
var bw=new qx.ui.tree.TreeFile(j).set({icon:k});
var bm=new qx.ui.tree.TreeFile(h).set({icon:k});
var bl=new qx.ui.tree.TreeFile(N).set({icon:E});
bo.add(bw,bm,bl);
var bz=new qx.ui.tree.TreeFolder(f).set({icon:bd,open:true});
var br=new qx.ui.tree.TreeFolder(bj).set({icon:d});
var bu=new qx.ui.tree.TreeFolder(bi).set({icon:o});
var bt=new qx.ui.tree.TreeFolder(l).set({icon:bc});

for(var i=0;i<30;i++){bt.add(new qx.ui.tree.TreeFile(J+i).set({icon:H}));
}var bx=new qx.ui.tree.TreeFolder(s).set({icon:ba});
var bs=new qx.ui.tree.TreeFolder(B).set({icon:T});
bz.add(br,bu,bt,bx,bs);
bA.add(bz);
},__Jf:function(){var bL=new qx.ui.window.Window().set({showClose:false,showMinimize:false,width:310,height:425,minWidth:200,caption:S,layout:new qx.ui.layout.Grow(),contentPadding:0});
var co=new qx.ui.tree.Tree().set({width:600,height:500,decorator:null,selectionMode:bf,dragSelection:true,backgroundColor:c});
bL.add(co);
var cp=this.configureTreeItem(new qx.ui.tree.TreeFolder(),be,q);
cp.setOpen(true);
co.setRoot(cp);
var ch=this.configureTreeItem(new qx.ui.tree.TreeFolder(),e,g);
ch.setOpen(true);
cp.add(ch);
var bJ=this.configureTreeItem(new qx.ui.tree.TreeFolder(),bg);
var bH=this.configureTreeItem(new qx.ui.tree.TreeFolder(),bb);
var bI=this.configureTreeItem(new qx.ui.tree.TreeFolder(),b,r);
var bG=this.configureTreeItem(new qx.ui.tree.TreeFolder(),l,bc);
ch.add(bJ,bH,bI,bG);
var cn=this.configureTreeItem(new qx.ui.tree.TreeFile(),j,k);
var cm=this.configureTreeItem(new qx.ui.tree.TreeFile(),h,k);
bH.add(cn,cm);
var ci=this.configureTreeItem(new qx.ui.tree.TreeFolder(),f,bd);
ci.setOpen(true);
var bK=this.configureTreeItem(new qx.ui.tree.TreeFolder(),bj,d);
var bN=this.configureTreeItem(new qx.ui.tree.TreeFolder(),bi,o);
var bM=this.configureTreeItem(new qx.ui.tree.TreeFolder(),l,t);
var bP=this.configureTreeItem(new qx.ui.tree.TreeFolder(),s,ba);
var bO=this.configureTreeItem(new qx.ui.tree.TreeFolder(),a);
var cc=this.configureTreeItem(new qx.ui.tree.TreeFolder(),P);
var cb=this.configureTreeItem(new qx.ui.tree.TreeFolder(),R);
var ca=this.configureTreeItem(new qx.ui.tree.TreeFolder(),x);
var cl=this.configureTreeItem(new qx.ui.tree.TreeFolder(),D);
var ck=this.configureTreeItem(new qx.ui.tree.TreeFolder(),C);
ca.add(cl,ck);
bO.add(cc,cb,ca);
var bR=this.configureTreeItem(new qx.ui.tree.TreeFolder(),W);
var bW=this.configureTreeItem(new qx.ui.tree.TreeFolder(),M);
var bX=this.configureTreeItem(new qx.ui.tree.TreeFolder(),v);
var bY=this.configureTreeItem(new qx.ui.tree.TreeFolder(),Y);
var bS=this.configureTreeItem(new qx.ui.tree.TreeFolder(),A);
var bT=this.configureTreeItem(new qx.ui.tree.TreeFolder(),p);
var bU=this.configureTreeItem(new qx.ui.tree.TreeFolder(),u);
var bV=this.configureTreeItem(new qx.ui.tree.TreeFolder(),F);
var cd=this.configureTreeItem(new qx.ui.tree.TreeFolder(),V);
bR.add(bW,bX,bY,bS,bT,bU,bV,cd);
var bQ=this.configureTreeItem(new qx.ui.tree.TreeFolder(),z);
var cf=this.configureTreeItem(new qx.ui.tree.TreeFolder(),n);
var cj=this.configureTreeItem(new qx.ui.tree.TreeFolder(),w);
var cg=this.configureTreeItem(new qx.ui.tree.TreeFolder(),y);
var ce=this.configureTreeItem(new qx.ui.tree.TreeFolder(),G);
bQ.add(cf,cj,cg,ce);
var bF=this.configureTreeItem(new qx.ui.tree.TreeFolder(),K);

for(var i=0;i<50;i++){bF.add(this.configureTreeItem(new qx.ui.tree.TreeFolder(),X+(i+1),I));
}ci.add(bK,bN,bM,bP,bO,bR,bQ,bF);
cp.add(ci);
return bL;
},configureTreeItem:function(bB,bC,bD){bB.addSpacer();

if(bB instanceof qx.ui.tree.TreeFolder){bB.addOpenButton();
}bB.addIcon();

if(arguments.length>=3){bB.setIcon(bD);
}bB.addLabel(bC);
bB.addWidget(new qx.ui.core.Spacer(),{flex:1});
var bE=new qx.ui.basic.Label(Math.round(Math.random()*99)+L);
bE.setWidth(30);
bE.setAlignY(bh);
bE.setMargin([0,8]);
bB.addWidget(bE);
bE=new qx.ui.basic.Label(U+Math.round(Math.random()*30+1)+O);
bE.setWidth(80);
bE.setAlignY(bh);
bB.addWidget(bE);
return bB;
}}});
})();

});