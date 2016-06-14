qx.$$packageData['32']={"locales":{},"resources":{"widgetbrowser/tree.json":"widgetbrowser"},"translations":{}};
qx.Part.$$notifyLoad("32", function() {
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
(function(){var a="qx.ui.tree.provider.IVirtualTreeProvider";
qx.Interface.define(a,{members:{createLayer:function(){},createRenderer:function(){},setChildProperty:function(b){this.assertArgumentsCount(arguments,1,1);
this.assertString(b);
},setLabelPath:function(c){this.assertArgumentsCount(arguments,1,1);
this.assertString(c);
},styleSelectabled:function(d){this.assertArgumentsCount(arguments,1,1);
this.assertInteger(d);
},styleUnselectabled:function(e){this.assertArgumentsCount(arguments,1,1);
this.assertInteger(e);
},isSelectable:function(f){this.assertArgumentsCount(arguments,1,1);
this.assertInteger(f);
}}});
})();
(function(){var a="qx.ui.tree.core.IVirtualTree";
qx.Interface.define(a,{members:{isShowTopLevelOpenCloseIcons:function(){},getLookupTable:function(){},isNode:function(b){this.assertArgumentsCount(arguments,1,1);
this.assertInterface(b,qx.core.Object);
},isNodeOpen:function(c){this.assertArgumentsCount(arguments,1,1);
this.assertInterface(c,qx.core.Object);
},getLevel:function(d){this.assertArgumentsCount(arguments,1,1);
this.assertInteger(d);
},hasChildren:function(e){this.assertArgumentsCount(arguments,1,1);
this.assertInterface(e,qx.core.Object);
},openNode:function(f){this.assertArgumentsCount(arguments,1,1);
this.assertInterface(f,qx.core.Object);
},closeNode:function(g){this.assertArgumentsCount(arguments,1,1);
this.assertInterface(g,qx.core.Object);
},getSelection:function(){}}});
})();
(function(){var l="dblclick",k="cellDblclick",j="cellClick",h="Boolean",g="click",f="String",d="one",c="qx.event.type.Data",b="updated",a="changeBubble",M="changeModel",L="_applyLabelOptions",K="_applyOpenMode",J="qx.core.Object",I="Space",H="Left",G="Integer",F="_applyModel",E="_applyShowTopLevelOpenCloseIcons",D="_applyLabelPath",s="changeOpenMode",t="changeDelegate",q="virtual-tree",r="_applyChildProperty",o="_applyIconPath",p="_applyDelegate",m="_applyHideRoot",n="close",u="_applyRowHeight",v="Right",y="Enter",x="qx.ui.tree.VirtualTree",A="keypress",z="none",C="_applyShowLeafs",B="_applyIconOptions",w=".";
qx.Class.define(x,{extend:qx.ui.virtual.core.Scroller,implement:qx.ui.tree.core.IVirtualTree,include:qx.ui.virtual.selection.MModel,construct:function(N,O,P){qx.ui.virtual.core.Scroller.call(this,0,1,20,100);
this._init();

if(O!=null){this.setLabelPath(O);
}
if(P!=null){this.setChildProperty(P);
}
if(N!=null){this.initModel(N);
}this.initItemHeight();
this.initOpenMode();
this.addListener(A,this._onKeyPress,this);
},events:{open:c,close:c},properties:{appearance:{refine:true,init:q},focusable:{refine:true,init:true},width:{refine:true,init:100},height:{refine:true,init:200},itemHeight:{check:G,init:25,apply:u,themeable:true},openMode:{check:[g,l,z],init:l,apply:K,event:s,themeable:true},hideRoot:{check:h,init:false,apply:m},showTopLevelOpenCloseIcons:{check:h,init:false,apply:E},showLeafs:{check:h,init:true,apply:C},childProperty:{check:f,apply:r,nullable:true},labelPath:{check:f,apply:D,nullable:true},iconPath:{check:f,apply:o,nullable:true},labelOptions:{apply:L,nullable:true},iconOptions:{apply:B,nullable:true},model:{check:J,apply:F,event:M,nullable:true,deferredInit:true},delegate:{event:t,apply:p,init:null,nullable:true}},members:{_provider:null,_layer:null,__nB:null,__BR:null,__BS:null,__eO:null,__BT:0,__BN:null,syncWidget:function(){var T=this._layer.getFirstRow();
var Q=this._layer.getRowSizes().length;

for(var U=T;U<T+Q;U++){var R=this._layer.getRenderedCellWidget(U,0);
this.__BT=Math.max(this.__BT,R.getSizeHint().width);
}var S=this.getPane().getBounds().width;
this.getPane().getColumnConfig().setItemSize(0,Math.max(this.__BT,S));
},openNode:function(V){this.__BW(V);
this.buildLookupTable();
},refresh:function(){this.buildLookupTable();
},openNodeAndParents:function(W){this.__BX(this.getModel(),W);
this.buildLookupTable();
},closeNode:function(X){if(qx.lang.Array.contains(this.__BR,X)){qx.lang.Array.remove(this.__BR,X);
this.fireDataEvent(n,X);
this.buildLookupTable();
}},isNodeOpen:function(Y){return qx.lang.Array.contains(this.__BR,Y);
},_init:function(){this.__nB=new qx.data.Array();
this.__BR=[];
this.__BS=[];
this._initLayer();
},_initLayer:function(){this._provider=new qx.ui.tree.provider.WidgetProvider(this);
this._layer=this._provider.createLayer();
this._layer.addListener(b,this._onUpdated,this);
this.getPane().addLayer(this._layer);
},getLookupTable:function(){return this.__nB;
},_reverseLookup:function(ba){return ba;
},_getDataFromRow:function(bb){return this.__nB.getItem(bb);
},_getSelectables:function(){return this.__nB;
},getOpenNodes:function(){return this.__BR;
},isNode:function(bc){return qx.Class.hasProperty(bc.constructor,this.getChildProperty());
},getLevel:function(bd){return this.__BS[bd];
},hasChildren:function(be){var bf=be.get(this.getChildProperty());

if(bf==null){return false;
}
if(this.isShowLeafs()){return bf.length>0;
}else{for(var i=0;i<bf.getLength();i++){var bg=bf.getItem(i);

if(this.isNode(bg)){return true;
}}}return false;
},_applyRowHeight:function(bh,bi){this.getPane().getRowConfig().setDefaultItemSize(bh);
},_applyOpenMode:function(bj,bk){var bl=this.getPane();
if(bj===l){bl.addListener(k,this._onOpen,this);
}else if(bj===g){bl.addListener(j,this._onOpen,this);
}
if(bk===l){bl.removeListener(k,this._onOpen,this);
}else if(bk===g){bl.removeListener(j,this._onOpen,this);
}},_applyHideRoot:function(bm,bn){this.buildLookupTable();
},_applyShowTopLevelOpenCloseIcons:function(bo,bp){this.buildLookupTable();
},_applyShowLeafs:function(bq,br){this.buildLookupTable();
},_applyChildProperty:function(bs,bt){this._provider.setChildProperty(bs);
},_applyLabelPath:function(bu,bv){this._provider.setLabelPath(bu);
},_applyIconPath:function(bw,bx){this._provider.setIconPath(bw);
},_applyLabelOptions:function(by,bz){this._provider.setLabelOptions(by);
},_applyIconOptions:function(bA,bB){this._provider.setIconOptions(bA);
},_applyModel:function(bC,bD){this.__BR=[];

if(bC!=null){bC.addListener(a,this._onChangeBubble,this);
this.__BW(bC);
}
if(bD!=null){bD.removeListener(a,this._onChangeBubble,this);
}this.__BU();
},_applyDelegate:function(bE,bF){this._provider.setDelegate(bE);
this.getPane().fullUpdate();
},_onChangeBubble:function(event){var bH=event.getData().name;
var bG=bH.lastIndexOf(w);

if(bG!=-1){bH=bH.substr(bG+1,bH.length);
}
if(qx.lang.String.startsWith(bH,this.getChildProperty())){this.__BU();
}},_onUpdated:function(event){if(this.__eO==null){this.__eO=new qx.util.DeferredCall(function(){qx.ui.core.queue.Widget.add(this);
},this);
}this.__eO.schedule();
},_onOpen:function(event){var bJ=event.getRow();
var bI=this.__nB.getItem(bJ);

if(this.isNode(bI)){if(this.isNodeOpen(bI)){this.closeNode(bI);
}else{this.openNode(bI);
}}},_onKeyPress:function(e){var bM=this.getSelection();

if(bM.getLength()>0){var bK=bM.getItem(0);
var bL=this.isNode(bK);

switch(e.getKeyIdentifier()){case H:if(bL&&this.isNodeOpen(bK)){this.closeNode(bK);
}else{var parent=this.getParent(bK);

if(parent!=null){bM.splice(0,1,parent);
}}break;
case v:if(bL&&!this.isNodeOpen(bK)){this.openNode(bK);
}else{if(bL){var bN=bK.get(this.getChildProperty());

if(bN!=null&&bN.getLength()>0){bM.splice(0,1,bN.getItem(0));
}}}break;
case y:case I:if(!bL){return;
}
if(this.isNodeOpen(bK)){this.closeNode(bK);
}else{this.openNode(bK);
}break;
}}this.getPane().fullUpdate();
},_beforeApplySelection:function(bO){if(bO.length===0&&this.getSelectionMode()===d){var bP=this.__BQ();
var bQ=this.getLookupTable().indexOf(bP);

if(bQ>=0){bO.push(bQ);
}}},_afterApplySelection:function(){var bR=this.getSelection();

if(bR.getLength()>0&&this.getSelectionMode()===d){this.__BP(bR.getItem(0));
}else{this.__BN=[];
}},__BU:function(){this.buildLookupTable();
this._applyDefaultSelection();
},buildLookupTable:function(){if(this.getModel()!=null&&(this.getChildProperty()==null||this.getLabelPath()==null)){throw new Error("Could not build tree, because 'childProperty' and/"+"or 'labelPath' is 'null'!");
}this.__BT=0;
var bV=[];
this.__BS=[];
var bT=-1;
var bU=this.getModel();

if(bU!=null){if(!this.isHideRoot()){bT++;
bV.push(bU);
this.__BS.push(bT);
}
if(this.isNodeOpen(bU)){var bS=this.__BV(bU,bT);
bV=bV.concat(bS);
}}this._provider.removeBindings();
this.__nB.removeAll();
this.__nB.append(bV);
this._updateSelection();
this.__Be();
},__BV:function(bW,bX){var bY=[];
bX++;

if(!this.isNode(bW)){return bY;
}var cb=bW.get(this.getChildProperty());

if(cb==null){return bY;
}
for(var i=0;i<cb.getLength();i++){var cc=cb.getItem(i);

if(this.isNode(cc)){this.__BS.push(bX);
bY.push(cc);

if(this.isNodeOpen(cc)){var ca=this.__BV(cc,bX);
bY=bY.concat(ca);
}}else{if(this.isShowLeafs()){this.__BS.push(bX);
bY.push(cc);
}}}return bY;
},__BW:function(cd){if(!qx.lang.Array.contains(this.__BR,cd)){this.__BR.push(cd);
this.fireDataEvent("open",cd);
}},__BX:function(ce,cf){if(ce===cf){this.__BW(cf);
return true;
}
if(!this.isNode(ce)){return false;
}var ch=ce.get(this.getChildProperty());

if(ch==null){return false;
}
for(var i=0;i<ch.getLength();i++){var ci=ch.getItem(i);
var cg=this.__BX(ci,cf);

if(cg===true){this.__BW(ci);
return true;
}}return false;
},__Be:function(){this.getPane().getRowConfig().setItemCount(this.__nB.getLength());
this.getPane().fullUpdate();
},getParent:function(cj){var cl=this.__nB.indexOf(cj);

if(cl<0){return null;
}var cm=this.__BS[cl];

while(cl>0){cl--;
var ck=this.__BS[cl];

if(ck<cm){return this.__nB.getItem(cl);
}}return null;
},__BP:function(cn){this.__BN=[];
var parent=this.getParent(cn);

while(parent!=null){this.__BN.unshift(parent);
parent=this.getParent(parent);
}},__BQ:function(){if(this.__BN==null){return this.getModel();
}var co=this.getLookupTable();
var parent=this.__BN.pop();

while(parent!=null){if(co.contains(parent)){return parent;
}parent=this.__BN.pop();
}return this.getModel();
}},destruct:function(){var cp=this.getPane();

if(cp!=null){if(cp.hasListener(k)){cp.addListener(k,this._onOpen,this);
}else if(cp.hasListener(j)){cp.removeListener(j,this._onOpen,this);
}}this._layer.removeListener(b,this._onUpdated,this);
this._layer.destroy();
this._provider.dispose();
this.__nB.dispose();
this._layer=this._provider=this.__nB=this.__BR=null;
}});
})();
(function(){var m="String",l="model",k="",j="changeDelegate",i="virtual-tree-file",h="label",g="appearance",f="icon",d="bindItem",c=".length",a="virtual-tree-folder",b="qx.ui.tree.core.MWidgetController";
qx.Mixin.define(b,{construct:function(){this.__AB=[];
},properties:{labelPath:{check:m,nullable:true},iconPath:{check:m,nullable:true},labelOptions:{nullable:true},iconOptions:{nullable:true},childProperty:{check:m,nullable:true},delegate:{event:j,init:null,nullable:true}},members:{__AB:null,bindDefaultProperties:function(n,o){this.bindProperty(k,l,null,n,o);
this.bindProperty(this.getLabelPath(),h,this.getLabelOptions(),n,o);

try{this.bindProperty(this.getChildProperty()+c,g,{converter:function(){return a;
}},n,o);
}catch(p){n.setAppearance(i);
}
if(this.getIconPath()!=null){this.bindProperty(this.getIconPath(),f,this.getIconOptions(),n,o);
}},bindProperty:function(q,r,s,t,u){var v=this.__AC(u,q);
var w=this._tree.getLookupTable();
var x=w.bind(v,t,r,s);
this.__rt(t,x);
},bindPropertyReverse:function(y,z,A,B,C){var D=this.__AC(C,y);
var E=this._tree.getLookupTable();
var F=B.bind(z,E,D,A);
this.__rt(B,F);
},removeBindings:function(){while(this.__AB.length>0){var G=this.__AB.pop();
this._removeBindingsFrom(G);
}},_bindItem:function(H,I){var J=qx.util.Delegate.getMethod(this.getDelegate(),d);

if(J!=null){J(this,H,I);
}else{this.bindDefaultProperties(H,I);
}},_removeBindingsFrom:function(K){var L=this.__AD(K);

while(L.length>0){var M=L.pop();

try{this._tree.getLookupTable().removeBinding(M);
}catch(e){K.removeBinding(M);
}}
if(qx.lang.Array.contains(this.__AB,K)){qx.lang.Array.remove(this.__AB,K);
}},__AC:function(N,O){var P="["+N+"]";

if(O!=null&&O!=""){P+="."+O;
}return P;
},__rt:function(Q,R){var S=this.__AD(Q);

if(!qx.lang.Array.contains(S,R)){S.push(R);
}
if(!qx.lang.Array.contains(this.__AB,Q)){this.__AB.push(Q);
}},__AD:function(T){var U=T.getUserData("BindingIds");

if(U==null){U=[];
T.setUserData("BindingIds",U);
}return U;
}},destruct:function(){this.__AB=null;
}});
})();
(function(){var k="Trash",j="model",h="Windows (C:)",g="Documents (D:)",f="Inbox",e="Desktop",d="widgetbrowser.pages.Tree",c="loaded",b="Presets",a="Network",w="Sent",v="children",u="Files",t="name",s="root",r="Workspace",q="Junk #",p="Tree",o="Data",n="widgetbrowser/tree.json",l="VirtualTree",m="Edit";
qx.Class.define(d,{extend:widgetbrowser.pages.AbstractPage,construct:function(){widgetbrowser.pages.AbstractPage.call(this);
this.__hm=new qx.ui.container.Composite(new qx.ui.layout.Grid(10));
this.add(this.__hm);
this.initWidgets();
},members:{initWidgets:function(){var A;
var x=this._widgets;
A=new qx.ui.basic.Label(p);
this.__hm.add(A,{row:0,column:0});
var z=this.__Ky();
this.__hm.add(z,{row:1,column:0});
x.push(z);
A=new qx.ui.basic.Label(l);
this.__hm.add(A,{row:0,column:1});
var y=this.__Uz();
this.__hm.add(y,{row:1,column:1});
x.push(y);
},__Ky:function(){var K=new qx.ui.tree.Tree().set({width:200,height:400});
var P=new qx.ui.tree.TreeFolder(s);
P.setOpen(true);
K.setRoot(P);
var N=new qx.ui.tree.TreeFolder(e);
N.setOpen(true);
P.add(N);
var F=new qx.ui.tree.TreeFolder(u);
var D=new qx.ui.tree.TreeFolder(r);
var E=new qx.ui.tree.TreeFolder(a);
var C=new qx.ui.tree.TreeFolder(k);
N.add(F,D,E,C);
var L=new qx.ui.tree.TreeFile(h);
var B=new qx.ui.tree.TreeFile(g);
D.add(L,B);
var O=new qx.ui.tree.TreeFolder(f);
var G=new qx.ui.tree.TreeFolder(b);
var J=new qx.ui.tree.TreeFolder(w);
var I=new qx.ui.tree.TreeFolder(k);

for(var i=0;i<30;i++){I.add(new qx.ui.tree.TreeFile(q+i));
}var M=new qx.ui.tree.TreeFolder(o);
var H=new qx.ui.tree.TreeFolder(m);
O.add(G,J,I,M,H);
P.add(O);
return K;
},__Uz:function(){var R=new qx.ui.tree.VirtualTree(null,t,v).set({width:200,height:400});
var Q=n;
var S=new qx.data.store.Json(Q);
S.bind(j,R,j);
S.addListener(c,function(){R.openNode(R.getModel().getChildren().getItem(0));
},this);
return R;
}}});
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
(function(){var e="cell.level",d="qx.ui.tree.VirtualTreeItem",c="open",b="virtual-tree-folder",a="cell.children";
qx.Class.define(d,{extend:qx.ui.tree.core.AbstractItem,properties:{appearance:{refine:true,init:b}},members:{_forwardStates:{selected:true},_addWidgets:function(){this.addSpacer();
this.addOpenButton();
this.addIcon();
this.addLabel();
},_shouldShowOpenSymbol:function(){var open=this.getChildControl(c,true);

if(open==null){return false;
}return this.isOpenable();
},getLevel:function(){return this.getUserData(e);
},hasChildren:function(){return !!this.getUserData(a);
}}});
})();
(function(){var j="changeOpen",i="never",h="changeDelegate",g="cell.level",f="createItem",e="auto",d="cell.children",c="configureItem",b="created",a="qx.ui.tree.provider.WidgetProvider";
qx.Class.define(a,{extend:qx.core.Object,implement:[qx.ui.virtual.core.IWidgetCellProvider,qx.ui.tree.provider.IVirtualTreeProvider],include:[qx.ui.tree.core.MWidgetController],construct:function(k){qx.core.Object.call(this);
this._tree=k;
this.addListener(h,this._onChangeDelegate,this);
this._onChangeDelegate();
},members:{_tree:null,_renderer:null,getCellWidget:function(l,m){var n=this._tree.getLookupTable().getItem(l);
var p=false;

if(this._tree.isNode(n)){p=this._tree.hasChildren(n);
}var o=this._renderer.getCellWidget();
o.setOpen(p&&this._tree.isNodeOpen(n));
o.setUserData(d,p);
o.addListener(j,this.__BY,this);

if(this._tree.getSelection().contains(n)){this._styleSelectabled(o);
}else{this._styleUnselectabled(o);
}var q=this._tree.getLevel(l);

if(!this._tree.isShowTopLevelOpenCloseIcons()){q-=1;
}o.setUserData(g,q);

if(!this._tree.isShowTopLevelOpenCloseIcons()&&q==-1){o.setOpenSymbolMode(i);
}else{o.setOpenSymbolMode(e);
}this._bindItem(o,l);
qx.ui.core.queue.Widget.add(o);
return o;
},poolCellWidget:function(r){r.removeListener(j,this.__BY,this);
this._removeBindingsFrom(r);
this._renderer.pool(r);
},createLayer:function(){return new qx.ui.virtual.layer.WidgetCell(this);
},createRenderer:function(){var s=qx.util.Delegate.getMethod(this.getDelegate(),f);

if(s==null){s=function(){return new qx.ui.tree.VirtualTreeItem();
};
}var t=new qx.ui.virtual.cell.WidgetCell();
t.setDelegate({createWidget:s});
return t;
},styleSelectabled:function(u){var v=this._tree._layer.getRenderedCellWidget(u,0);
this._styleSelectabled(v);
},styleUnselectabled:function(w){var x=this._tree._layer.getRenderedCellWidget(w,0);
this._styleUnselectabled(x);
},isSelectable:function(y){var z=this._tree._layer.getRenderedCellWidget(y,0);

if(z!=null){return z.isEnabled();
}else{return true;
}},_styleSelectabled:function(A){if(A==null){return;
}this._renderer.updateStates(A,{selected:1});
},_styleUnselectabled:function(B){if(B==null){return;
}this._renderer.updateStates(B,{});
},_onItemCreated:function(event){var D=qx.util.Delegate.getMethod(this.getDelegate(),c);

if(D!=null){var C=event.getData();
D(C);
}},_onChangeDelegate:function(event){if(this._renderer!=null){this._renderer.dispose();
this.removeBindings();
}this._renderer=this.createRenderer();
this._renderer.addListener(b,this._onItemCreated,this);
},__BY:function(event){var F=event.getTarget();
var G=F.getUserData("cell.row");
var E=this._tree.getLookupTable().getItem(G);

if(event.getData()){this._tree.openNode(E);
}else{this._tree.closeNode(E);
}}},destruct:function(){this.removeBindings();
this._renderer.dispose();
this._tree=this._renderer=null;
}});
})();
(function(){var b="qx.ui.tree.TreeFile",a="tree-file";
qx.Class.define(b,{extend:qx.ui.tree.core.AbstractTreeItem,properties:{appearance:{refine:true,init:a}},members:{_addWidgets:function(){this.addSpacer();
this.addIcon();
this.addLabel();
}}});
})();

});