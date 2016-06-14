qx.$$packageData['5aa464f0e577']={"resources":{"qx/icon/Tango/22/actions/document-send.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/mail-mark-important.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/mail-mark-junk.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/mail-message-new.png":[22,22,"png","qx"],"qx/icon/Tango/22/apps/internet-mail.png":[22,22,"png","qx"],"qx/icon/Tango/22/apps/office-chart.png":[22,22,"png","qx"],"qx/icon/Tango/22/devices/drive-harddisk.png":[22,22,"png","qx"],"qx/icon/Tango/22/devices/drive-optical.png":[22,22,"png","qx"],"qx/icon/Tango/22/mimetypes/media-image.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder-open.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder-remote.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/network-server.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/network-workgroup.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/user-desktop.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/user-home.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/user-trash-full.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/user-trash.png":[22,22,"png","qx"]}};
(function(){var e="right",d="above",c="left",b="under",a="qx.ui.tree.SelectionManager";
qx.Class.define(a,{extend:qx.ui.core.selection.ScrollArea,members:{_getSelectableLocationY:function(f){var g=f.getBounds();

if(g){var top=this._getWidget().getItemTop(f);
return {top:top,bottom:top+g.height};
}},_isSelectable:function(s){return s instanceof qx.ui.tree.AbstractTreeItem&&s.isEnabled()&&s.isVisible();
},_getSelectableFromMouseEvent:function(event){return this._getWidget().getTreeItem(event.getTarget());
},getSelectables:function(){var u=this._getWidget();
var v=[];

if(u.getRoot()!=null){var t=u.getRoot().getItems(true,false,u.getHideRoot());

for(var i=0;i<t.length;i++){if(this._isSelectable(t[i])){v.push(t[i]);
}}}return v;
},_getSelectableRange:function(m,n){if(m===n){return [m];
}var o=this.getSelectables();
var p=o.indexOf(m);
var q=o.indexOf(n);

if(p<0||q<0){return [];
}
if(p<q){return o.slice(p,q+1);
}else{return o.slice(q,p+1);
}},_getFirstSelectable:function(){return this.getSelectables()[0]||null;
},_getLastSelectable:function(){var r=this.getSelectables();

if(r.length>0){return r[r.length-1];
}else{return null;
}},_getRelatedSelectable:function(h,j){var k=this._getWidget();
var l=null;

switch(j){case d:l=k.getPreviousSiblingOf(h,false);
break;
case b:l=k.getNextSiblingOf(h,false);
break;
case c:case e:break;
}
if(!l){return null;
}
if(this._isSelectable(l)){return l;
}else{return this._getRelatedSelectable(l,j);
}}}});
})();
(function(){var k="opened",j="click",i="changeOpen",h="Boolean",g="qx.ui.tree.FolderOpenButton",f="_applyOpen",d="mouseup",c="mousedown";
qx.Class.define(g,{extend:qx.ui.basic.Image,include:qx.ui.core.MExecutable,construct:function(){arguments.callee.base.call(this);
this.initOpen();
this.addListener(j,this._onClick);
this.addListener(c,this._stopPropagation,this);
this.addListener(d,this._stopPropagation,this);
},properties:{open:{check:h,init:false,event:i,apply:f}},members:{_applyOpen:function(a,b){a?this.addState(k):this.removeState(k);
this.execute();
},_stopPropagation:function(e){e.stopPropagation();
},_onClick:function(e){this.toggleOpen();
e.stopPropagation();
}}});
})();
(function(){var p="dblclick",o="click",n="Boolean",m="excluded",l="visible",k="qx.event.type.Data",j="_applyOpenMode",h="Space",g="Left",f="Enter",D="changeOpenMode",C="_applyRootOpenClose",B="__ew",A="changeSelection",z="qx.ui.tree.Tree",y="tree",x="_applyHideRoot",w="changeRoot",v="_applyRoot",u="keypress",s="none",t="pane",q="Right",r="qx.ui.tree.AbstractTreeItem";
qx.Class.define(z,{extend:qx.ui.core.scroll.AbstractScrollArea,implement:[qx.ui.core.IMultiSelection,qx.ui.form.IModelSelection],include:[qx.ui.core.MMultiSelectionHandling,qx.ui.core.MContentPadding,qx.ui.form.MModelSelection],construct:function(){arguments.callee.base.call(this);
this.__ew=new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({allowShrinkY:false,allowGrowX:true});
this.getChildControl(t).add(this.__ew);
this.initOpenMode();
this.initRootOpenClose();
this.addListener(A,this._onChangeSelection,this);
this.addListener(u,this._onKeyPress,this);
},events:{addItem:k,removeItem:k},properties:{openMode:{check:[o,p,s],init:p,apply:j,event:D,themeable:true},root:{check:r,init:null,nullable:true,event:w,apply:v},hideRoot:{check:n,init:false,apply:x},rootOpenClose:{check:n,init:false,apply:C},appearance:{refine:true,init:y},focusable:{refine:true,init:true}},members:{__ew:null,SELECTION_MANAGER:qx.ui.tree.SelectionManager,getChildrenContainer:function(){return this.__ew;
},_applyRoot:function(M,N){var O=this.getChildrenContainer();

if(N){O.remove(N);

if(N.hasChildren()){O.remove(N.getChildrenContainer());
}}
if(M){O.add(M);

if(M.hasChildren()){O.add(M.getChildrenContainer());
}M.setVisibility(this.getHideRoot()?m:l);
M.recursiveAddToWidgetQueue();
}},_applyHideRoot:function(P,Q){var R=this.getRoot();

if(!R){return;
}R.setVisibility(P?m:l);
R.recursiveAddToWidgetQueue();
},_applyRootOpenClose:function(S,T){var U=this.getRoot();

if(!U){return;
}U.recursiveAddToWidgetQueue();
},_getContentPaddingTarget:function(){return this.__ew;
},getNextSiblingOf:function(E,F,G){if((F!==false||E.isOpen())&&!(G==true)&&E.hasChildren()){return E.getChildren()[0];
}
while(E){var parent=E.getParent();

if(!parent){return null;
}var I=parent.getChildren();
var H=I.indexOf(E);

if(H>-1&&H<I.length-1){return I[H+1];
}E=parent;
}return null;
},getPreviousSiblingOf:function(V,W,X){var parent=V.getParent();

if(!parent){return null;
}
if(this.getHideRoot()){if(parent==this.getRoot()){if(parent.getChildren()[0]==V){return null;
}}}else{if(V==this.getRoot()){return null;
}}var bb=parent.getChildren();
var Y=bb.indexOf(V);

if(Y>0){var ba=bb[Y-1];

while((W!==false||ba.isOpen())&&!(X==true)&&ba.hasChildren()){var bc=ba.getChildren();
ba=bc[bc.length-1];
}return ba;
}else{return parent;
}},getItems:function(K,L){if(this.getRoot()!=null){return this.getRoot().getItems(K,L,this.getHideRoot());
}else{return [];
}},getChildren:function(){if(this.getRoot()!=null){return [this.getRoot()];
}else{return [];
}},getTreeItem:function(be){while(be){if(be==this){return null;
}
if(be instanceof qx.ui.tree.AbstractTreeItem){return be;
}be=be.getLayoutParent();
}return null;
},_applyOpenMode:function(a,b){if(b==o){this.removeListener(o,this._onOpen,this);
}else if(b==p){this.removeListener(p,this._onOpen,this);
}
if(a==o){this.addListener(o,this._onOpen,this);
}else if(a==p){this.addListener(p,this._onOpen,this);
}},_onOpen:function(e){var J=this.getTreeItem(e.getTarget());

if(!J||!J.isOpenable()){return;
}J.setOpen(!J.isOpen());
e.stopPropagation();
},_onChangeSelection:function(e){var d=e.getData();
for(var i=0;i<d.length;i++){var c=d[i];
while(c.getParent()!=null){c=c.getParent();
c.setOpen(true);
}}},_onKeyPress:function(e){var bd=this._getLeadItem();

if(bd!==null){switch(e.getKeyIdentifier()){case g:if(bd.isOpenable()&&bd.isOpen()){bd.setOpen(false);
}break;
case q:if(bd.isOpenable()&&!bd.isOpen()){bd.setOpen(true);
}break;
case f:case h:if(bd.isOpenable()){bd.toggleOpen();
}break;
}}}},destruct:function(){this._disposeObjects(B);
}});
})();
(function(){var bt="open",bs="auto",br="middle",bq="icon",bp="label",bo="changeOpen",bn="excluded",bm="visible",bl="String",bk="opened",bM="always",bL="qx.ui.tree.AbstractTreeItem",bK="addItem",bJ="Boolean",bI="Integer",bH="_applyIndent",bG="changeOpenSymbolMode",bF="_applyOpenSymbolMode",bE="__ex",bD="resize",bA="",bB="removeItem",by="__ey",bz="__eB",bw="abstract",bx="never",bu="_applyIcon",bv="_applyOpen",bC="_applyLabel";
qx.Class.define(bL,{extend:qx.ui.core.Widget,type:bw,include:[qx.ui.form.MModelProperty],implement:[qx.ui.form.IModel],construct:function(){arguments.callee.base.call(this);
this.__ex=[];
this._setLayout(new qx.ui.layout.HBox());
this._addWidgets();
this.initOpen();
},properties:{open:{check:bJ,init:false,event:bo,apply:bv},openSymbolMode:{check:[bM,bx,bs],init:bs,event:bG,apply:bF},indent:{check:bI,init:19,apply:bH,themeable:true},parent:{check:bL,nullable:true},icon:{check:bl,apply:bu,nullable:true,themeable:true},label:{check:bl,apply:bC,init:bA}},members:{__ex:null,__ey:null,__ez:null,__eA:null,__eB:null,_addWidgets:function(){throw new Error("Abstract method call.");
},_createChildControlImpl:function(bf){var bg;

switch(bf){case bp:bg=new qx.ui.basic.Label().set({alignY:br,value:this.getLabel()});
break;
case bq:bg=new qx.ui.basic.Image().set({alignY:br,source:this.getIcon()});
break;
case bt:bg=new qx.ui.tree.FolderOpenButton().set({alignY:br});
bg.addListener(bo,this._onChangeOpen,this);
bg.addListener(bD,this._updateIndent,this);
break;
}return bg||arguments.callee.base.call(this,bf);
},getTree:function(){var bU=this;

while(bU.getParent()){bU=bU.getParent();
}var bT=bU.getLayoutParent()?bU.getLayoutParent().getLayoutParent():0;

if(bT&&bT instanceof qx.ui.core.scroll.ScrollPane){return bT.getLayoutParent();
}return null;
},addWidget:function(R,S){this._add(R,S);
},addSpacer:function(){if(!this.__eB){this.__eB=new qx.ui.core.Spacer();
}else{this._remove(this.__eB);
}this._add(this.__eB);
},addOpenButton:function(){this._add(this.getChildControl(bt));
},_onChangeOpen:function(e){if(this.isOpenable()){this.setOpen(e.getData());
}},addIcon:function(){var bQ=this.getChildControl(bq);

if(this.__eA){this._remove(bQ);
}this._add(bQ);
this.__eA=true;
},addLabel:function(bh){var bi=this.getChildControl(bp);

if(this.__ez){this._remove(bi);
}
if(bh){this.setLabel(bh);
}else{bi.setValue(this.getLabel());
}this._add(bi);
this.__ez=true;
},addState:function(k){arguments.callee.base.call(this,k);
var n=this._getChildren();

for(var i=0,l=n.length;i<l;i++){var m=n[i];

if(m.addState){n[i].addState(k);
}}},removeState:function(Y){arguments.callee.base.call(this,Y);
var bb=this._getChildren();

for(var i=0,l=bb.length;i<l;i++){var ba=bb[i];

if(ba.addState){bb[i].removeState(Y);
}}},_applyIcon:function(M,N){var O=this.getChildControl(bq,true);

if(O){O.setSource(M);
}},_applyLabel:function(B,C){var D=this.getChildControl(bp,true);

if(D){D.setValue(B);
}},_applyOpen:function(bR,bS){if(this.hasChildren()){this.getChildrenContainer().setVisibility(bR?bm:bn);
}var open=this.getChildControl(bt,true);

if(open){open.setOpen(bR);
}bR?this.addState(bk):this.removeState(bk);
},isOpenable:function(){var be=this.getOpenSymbolMode();
return (be===bM||be===bs&&this.hasChildren());
},_shouldShowOpenSymbol:function(){var open=this.getChildControl(bt,true);

if(!open){return false;
}var L=this.getTree();

if(!L.getRootOpenClose()){if(L.getHideRoot()){if(L.getRoot()==this.getParent()){return false;
}}else{if(L.getRoot()==this){return false;
}}}return this.isOpenable();
},_applyOpenSymbolMode:function(bO,bP){this._updateIndent();
},_updateIndent:function(){if(!this.getTree()){return;
}var p=0;
var open=this.getChildControl(bt,true);

if(open){if(this._shouldShowOpenSymbol()){open.show();
var o=open.getBounds();

if(o){p=o.width;
}else{return;
}}else{open.exclude();
}}
if(this.__eB){this.__eB.setWidth((this.getLevel()+1)*this.getIndent()-p);
}},_applyIndent:function(z,A){this._updateIndent();
},getLevel:function(){var q=this.getTree();

if(!q){return;
}var r=this;
var s=-1;

while(r){r=r.getParent();
s+=1;
}if(q.getHideRoot()){s-=1;
}
if(!q.getRootOpenClose()){s-=1;
}return s;
},syncWidget:function(){this._updateIndent();
},getChildrenContainer:function(){if(!this.__ey){this.__ey=new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({visibility:this.isOpen()?bm:bn});
}return this.__ey;
},hasChildrenContainer:function(){return this.__ey;
},getParentChildrenContainer:function(){if(this.getParent()){return this.getParent().getChildrenContainer();
}else if(this.getLayoutParent()){return this.getLayoutParent();
}else{return null;
}},getChildren:function(){return this.__ex;
},hasChildren:function(){return this.__ex?this.__ex.length>0:false;
},getItems:function(E,F,G){if(G!==false){var H=[];
}else{var H=[this];
}var K=this.hasChildren()&&(F!==false||this.isOpen());

if(K){var J=this.getChildren();

if(E===false){H=H.concat(J);
}else{for(var i=0,I=J.length;i<I;i++){H=H.concat(J[i].getItems(E,F,false));
}}}return H;
},recursiveAddToWidgetQueue:function(){var bN=this.getItems(true,true,false);

for(var i=0,l=bN.length;i<l;i++){qx.ui.core.queue.Widget.add(bN[i]);
}},__eC:function(){if(this.getParentChildrenContainer()){this.getParentChildrenContainer()._addAfter(this.getChildrenContainer(),this);
}},add:function(a){var b=this.getChildrenContainer();
var f=this.getTree();

for(var i=0,l=arguments.length;i<l;i++){var g=arguments[i];
var d=g.getParent();

if(d){d.remove(g);
}g.setParent(this);
var c=this.hasChildren();
b.add(g);

if(g.hasChildren()){b.add(g.getChildrenContainer());
}this.__ex.push(g);

if(!c){this.__eC();
}
if(f){g.recursiveAddToWidgetQueue();
f.fireNonBubblingEvent(bK,qx.event.type.Data,[g]);
}}
if(f){qx.ui.core.queue.Widget.add(this);
}},addAt:function(t,u){{};

if(u==this.__ex.length){this.add(t);
return;
}var y=t.getParent();

if(y){y.remove(t);
}var w=this.getChildrenContainer();
t.setParent(this);
var x=this.hasChildren();
var v=this.__ex[u];
w.addBefore(t,v);

if(t.hasChildren()){w.addAfter(t.getChildrenContainer(),t);
}qx.lang.Array.insertAt(this.__ex,t,u);

if(!x){this.__eC();
}
if(this.getTree()){t.recursiveAddToWidgetQueue();
qx.ui.core.queue.Widget.add(this);
}},addBefore:function(bc,bd){{};
this.addAt(bc,this.__ex.indexOf(bd));
},addAfter:function(P,Q){{};
this.addAt(P,this.__ex.indexOf(Q)+1);
},addAtBegin:function(bj){this.addAt(bj,0);
},remove:function(T){for(var i=0,l=arguments.length;i<l;i++){var X=arguments[i];

if(this.__ex.indexOf(X)==-1){this.warn("Cannot remove treeitem '"+X+"'. It is not a child of this tree item.");
return;
}var U=this.getChildrenContainer();

if(X.hasChildrenContainer()){var W=X.getChildrenContainer();

if(U.getChildren().indexOf(W)>=0){U.remove(W);
}}qx.lang.Array.remove(this.__ex,X);
X.setParent(null);
U.remove(X);
}var V=this.getTree();

if(V){V.fireNonBubblingEvent(bB,qx.event.type.Data,[X]);
}qx.ui.core.queue.Widget.add(this);
},removeAt:function(h){var j=this.__ex[h];

if(j){this.remove(j);
}},removeAll:function(){for(var i=this.__ex.length-1;i>=0;i--){this.remove(this.__ex[i]);
}}},destruct:function(){this._disposeArray(bE);
this._disposeObjects(bz,by);
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
(function(){var c="qx.ui.tree.TreeFile",b="tree-file";
qx.Class.define(c,{extend:qx.ui.tree.AbstractTreeItem,construct:function(a){arguments.callee.base.call(this);

if(a){this.setLabel(a);
}},properties:{appearance:{refine:true,init:b}},members:{_addWidgets:function(){this.addSpacer();
this.addIcon();
this.addLabel();
}}});
})();
(function(){var l="Trash",k="icon/22/devices/drive-harddisk.png",j="Windows (C:)",h="Documents (D:)",g="icon/22/places/user-desktop.png",f="Inbox",e="Desktop",d="icon/22/actions/mail-mark-junk.png",c="rgb(228,228,228)",b="Network",bj="Junk",bi="Sent",bh="middle",bg="Files",bf="multi",be="Home",bd="icon/22/apps/internet-mail.png",bc="icon/22/places/user-trash-full.png",bb="Workspace",ba="icon/22/apps/office-chart.png",s="Data",t="icon/22/places/user-trash.png",q="icon/22/places/user-home.png",r="icon/22/places/network-server.png",o="icon/22/actions/document-send.png",p="Products",m="Simple View",n="Bugs",w="Family",x="TINC",F="Development",D="Announce",N="DVD (E:)",I="icon/22/mimetypes/media-image.png",V="Competition",S="Detailed View",z="Personal",Y="Questions",X="Vacation",W="Lists",y="Projects",B="Important",C="Devel",E="icon/22/devices/drive-optical.png",G="Holiday",J="Junk #",P="Chat",U="May ",u="Press",v="Company",A="Internal",M="Relations",L="kb",K="Images",R="Pustefix",Q="showcase.page.tree.Content",H="icon/22/actions/mail-message-new.png",O=" 2005",a="Edit",T="icon/22/actions/mail-mark-important.png";
qx.Class.define(Q,{extend:showcase.page.AbstractDesktopContent,construct:function(bk){arguments.callee.base.call(this,bk);
var bl=this.__eD();
this.getView().add(bl);
bl.moveTo(260,20);
bl.open();
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
},__eD:function(){var bw=new qx.ui.window.Window().set({showClose:false,showMinimize:false,width:310,height:425,minWidth:200,caption:S,layout:new qx.ui.layout.Grow(),contentPadding:0});
var bY=new qx.ui.tree.Tree().set({width:600,height:500,decorator:null,selectionMode:bf,dragSelection:true,backgroundColor:c});
bw.add(bY);
var ca=this.configureTreeItem(new qx.ui.tree.TreeFolder(),be,q);
ca.setOpen(true);
bY.setRoot(ca);
var bR=this.configureTreeItem(new qx.ui.tree.TreeFolder(),e,g);
bR.setOpen(true);
ca.add(bR);
var bu=this.configureTreeItem(new qx.ui.tree.TreeFolder(),bg);
var bs=this.configureTreeItem(new qx.ui.tree.TreeFolder(),bb);
var bt=this.configureTreeItem(new qx.ui.tree.TreeFolder(),b,r);
var br=this.configureTreeItem(new qx.ui.tree.TreeFolder(),l,bc);
bR.add(bu,bs,bt,br);
var bX=this.configureTreeItem(new qx.ui.tree.TreeFile(),j,k);
var bW=this.configureTreeItem(new qx.ui.tree.TreeFile(),h,k);
bs.add(bX,bW);
var bS=this.configureTreeItem(new qx.ui.tree.TreeFolder(),f,bd);
bS.setOpen(true);
var bv=this.configureTreeItem(new qx.ui.tree.TreeFolder(),bj,d);
var by=this.configureTreeItem(new qx.ui.tree.TreeFolder(),bi,o);
var bx=this.configureTreeItem(new qx.ui.tree.TreeFolder(),l,t);
var bA=this.configureTreeItem(new qx.ui.tree.TreeFolder(),s,ba);
var bz=this.configureTreeItem(new qx.ui.tree.TreeFolder(),a);
var bM=this.configureTreeItem(new qx.ui.tree.TreeFolder(),P);
var bL=this.configureTreeItem(new qx.ui.tree.TreeFolder(),R);
var bK=this.configureTreeItem(new qx.ui.tree.TreeFolder(),x);
var bV=this.configureTreeItem(new qx.ui.tree.TreeFolder(),D);
var bU=this.configureTreeItem(new qx.ui.tree.TreeFolder(),C);
bK.add(bV,bU);
bz.add(bM,bL,bK);
var bC=this.configureTreeItem(new qx.ui.tree.TreeFolder(),W);
var bH=this.configureTreeItem(new qx.ui.tree.TreeFolder(),M);
var bI=this.configureTreeItem(new qx.ui.tree.TreeFolder(),v);
var bJ=this.configureTreeItem(new qx.ui.tree.TreeFolder(),Y);
var bD=this.configureTreeItem(new qx.ui.tree.TreeFolder(),A);
var bE=this.configureTreeItem(new qx.ui.tree.TreeFolder(),p);
var bF=this.configureTreeItem(new qx.ui.tree.TreeFolder(),u);
var bG=this.configureTreeItem(new qx.ui.tree.TreeFolder(),F);
var bN=this.configureTreeItem(new qx.ui.tree.TreeFolder(),V);
bC.add(bH,bI,bJ,bD,bE,bF,bG,bN);
var bB=this.configureTreeItem(new qx.ui.tree.TreeFolder(),z);
var bP=this.configureTreeItem(new qx.ui.tree.TreeFolder(),n);
var bT=this.configureTreeItem(new qx.ui.tree.TreeFolder(),w);
var bQ=this.configureTreeItem(new qx.ui.tree.TreeFolder(),y);
var bO=this.configureTreeItem(new qx.ui.tree.TreeFolder(),G);
bB.add(bP,bT,bQ,bO);
var bq=this.configureTreeItem(new qx.ui.tree.TreeFolder(),K);

for(var i=0;i<50;i++){bq.add(this.configureTreeItem(new qx.ui.tree.TreeFolder(),X+(i+1),I));
}bS.add(bv,by,bx,bA,bz,bC,bB,bq);
ca.add(bS);
return bw;
},configureTreeItem:function(bm,bn,bo){bm.addSpacer();

if(bm instanceof qx.ui.tree.TreeFolder){bm.addOpenButton();
}bm.addIcon();

if(arguments.length>=3){bm.setIcon(bo);
}bm.addLabel(bn);
bm.addWidget(new qx.ui.core.Spacer(),{flex:1});
var bp=new qx.ui.basic.Label(Math.round(Math.random()*99)+L);
bp.setWidth(30);
bp.setAlignY(bh);
bp.setMargin([0,8]);
bm.addWidget(bp);
bp=new qx.ui.basic.Label(U+Math.round(Math.random()*30+1)+O);
bp.setWidth(80);
bp.setAlignY(bh);
bm.addWidget(bp);
return bm;
}}});
})();
