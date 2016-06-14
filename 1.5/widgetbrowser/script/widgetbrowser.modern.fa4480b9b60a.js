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
(function(){var l="dblclick",k="cellDblclick",j="cellClick",h="Boolean",g="click",f="String",d="one",c="qx.event.type.Data",b="updated",a="changeBubble",N="changeModel",M="_applyLabelOptions",L="_applyOpenMode",K="qx.core.Object",J="Space",I="Left",H="Integer",G="_applyModel",F="_applyShowTopLevelOpenCloseIcons",E="_applyLabelPath",s="open",t="changeOpenMode",q="changeDelegate",r="virtual-tree",o="_applyChildProperty",p="_applyIconPath",m="_applyDelegate",n="_applyHideRoot",u="close",v="_applyRowHeight",y="Right",x="Enter",A="qx.ui.tree.VirtualTree",z="keypress",C="none",B="_applyShowLeafs",w="_applyIconOptions",D=".";
qx.Class.define(A,{extend:qx.ui.virtual.core.Scroller,implement:qx.ui.tree.core.IVirtualTree,include:[qx.ui.virtual.selection.MModel,qx.ui.core.MContentPadding],construct:function(O,P,Q){qx.ui.virtual.core.Scroller.call(this,0,1,20,100);
this._init();

if(P!=null){this.setLabelPath(P);
}
if(Q!=null){this.setChildProperty(Q);
}
if(O!=null){this.initModel(O);
}this.initItemHeight();
this.initOpenMode();
this.addListener(z,this._onKeyPress,this);
},events:{open:c,close:c},properties:{appearance:{refine:true,init:r},focusable:{refine:true,init:true},width:{refine:true,init:100},height:{refine:true,init:200},itemHeight:{check:H,init:25,apply:v,themeable:true},openMode:{check:[g,l,C],init:l,apply:L,event:t,themeable:true},hideRoot:{check:h,init:false,apply:n},showTopLevelOpenCloseIcons:{check:h,init:false,apply:F},showLeafs:{check:h,init:true,apply:B},childProperty:{check:f,apply:o,nullable:true},labelPath:{check:f,apply:E,nullable:true},iconPath:{check:f,apply:p,nullable:true},labelOptions:{apply:M,nullable:true},iconOptions:{apply:w,nullable:true},model:{check:K,apply:G,event:N,nullable:true,deferredInit:true},delegate:{event:q,apply:m,init:null,nullable:true}},members:{_provider:null,_layer:null,__nD:null,__BY:null,__Ca:null,__eR:null,__Cb:0,__Cc:null,syncWidget:function(){var U=this._layer.getFirstRow();
var R=this._layer.getRowSizes().length;

for(var V=U;V<U+R;V++){var S=this._layer.getRenderedCellWidget(V,0);

if(S!=null){this.__Cb=Math.max(this.__Cb,S.getSizeHint().width);
}}var T=this.getPane().getBounds().width;
this.getPane().getColumnConfig().setItemSize(0,Math.max(this.__Cb,T));
},openNode:function(W){this.__Cf(W);
this.buildLookupTable();
},refresh:function(){this.buildLookupTable();
},openNodeAndParents:function(X){this.__Cg(this.getModel(),X);
this.buildLookupTable();
},closeNode:function(Y){if(qx.lang.Array.contains(this.__BY,Y)){qx.lang.Array.remove(this.__BY,Y);
this.fireDataEvent(u,Y);
this.buildLookupTable();
}},isNodeOpen:function(ba){return qx.lang.Array.contains(this.__BY,ba);
},_init:function(){this.__nD=new qx.data.Array();
this.__BY=[];
this.__Ca=[];
this._initLayer();
},_initLayer:function(){this._provider=new qx.ui.tree.provider.WidgetProvider(this);
this._layer=this._provider.createLayer();
this._layer.addListener(b,this._onUpdated,this);
this.getPane().addLayer(this._layer);
},getLookupTable:function(){return this.__nD;
},_reverseLookup:function(bb){return bb;
},_getDataFromRow:function(bc){return this.__nD.getItem(bc);
},_getSelectables:function(){return this.__nD;
},getOpenNodes:function(){return this.__BY;
},isNode:function(bd){return qx.Class.hasProperty(bd.constructor,this.getChildProperty());
},getLevel:function(be){return this.__Ca[be];
},hasChildren:function(bf){var bg=bf.get(this.getChildProperty());

if(bg==null){return false;
}
if(this.isShowLeafs()){return bg.length>0;
}else{for(var i=0;i<bg.getLength();i++){var bh=bg.getItem(i);

if(this.isNode(bh)){return true;
}}}return false;
},_getContentPaddingTarget:function(){return this.getPane();
},_applyRowHeight:function(bi,bj){this.getPane().getRowConfig().setDefaultItemSize(bi);
},_applyOpenMode:function(bk,bl){var bm=this.getPane();
if(bk===l){bm.addListener(k,this._onOpen,this);
}else if(bk===g){bm.addListener(j,this._onOpen,this);
}
if(bl===l){bm.removeListener(k,this._onOpen,this);
}else if(bl===g){bm.removeListener(j,this._onOpen,this);
}},_applyHideRoot:function(bn,bo){this.buildLookupTable();
},_applyShowTopLevelOpenCloseIcons:function(bp,bq){this.buildLookupTable();
},_applyShowLeafs:function(br,bs){this.buildLookupTable();
},_applyChildProperty:function(bt,bu){this._provider.setChildProperty(bt);
},_applyLabelPath:function(bv,bw){this._provider.setLabelPath(bv);
},_applyIconPath:function(bx,by){this._provider.setIconPath(bx);
},_applyLabelOptions:function(bz,bA){this._provider.setLabelOptions(bz);
},_applyIconOptions:function(bB,bC){this._provider.setIconOptions(bB);
},_applyModel:function(bD,bE){this.__BY=[];

if(bD!=null){bD.addListener(a,this._onChangeBubble,this);
this.__Cf(bD);
}
if(bE!=null){bE.removeListener(a,this._onChangeBubble,this);
}this.__Cd();
},_applyDelegate:function(bF,bG){this._provider.setDelegate(bF);
this.buildLookupTable();
},_onChangeBubble:function(event){var bI=event.getData().name;
var bH=bI.lastIndexOf(D);

if(bH!=-1){bI=bI.substr(bH+1,bI.length);
}
if(qx.lang.String.startsWith(bI,this.getChildProperty())){this.__Cd();
}},_onUpdated:function(event){if(this.__eR==null){this.__eR=new qx.util.DeferredCall(function(){qx.ui.core.queue.Widget.add(this);
},this);
}this.__eR.schedule();
},_onOpen:function(event){var bK=event.getRow();
var bJ=this.__nD.getItem(bK);

if(this.isNode(bJ)){if(this.isNodeOpen(bJ)){this.closeNode(bJ);
}else{this.openNode(bJ);
}}},_onKeyPress:function(e){var bN=this.getSelection();

if(bN.getLength()>0){var bL=bN.getItem(0);
var bM=this.isNode(bL);

switch(e.getKeyIdentifier()){case I:if(bM&&this.isNodeOpen(bL)){this.closeNode(bL);
}else{var parent=this.getParent(bL);

if(parent!=null){bN.splice(0,1,parent);
}}break;
case y:if(bM&&!this.isNodeOpen(bL)){this.openNode(bL);
}else{if(bM){var bO=bL.get(this.getChildProperty());

if(bO!=null&&bO.getLength()>0){bN.splice(0,1,bO.getItem(0));
}}}break;
case x:case J:if(!bM){return;
}
if(this.isNodeOpen(bL)){this.closeNode(bL);
}else{this.openNode(bL);
}break;
}}},_beforeApplySelection:function(bP){if(bP.length===0&&this.getSelectionMode()===d){var bQ=this.__Ci();
var bR=this.getLookupTable().indexOf(bQ);

if(bR>=0){bP.push(bR);
}}},_afterApplySelection:function(){var bS=this.getSelection();

if(bS.getLength()>0&&this.getSelectionMode()===d){this.__Ch(bS.getItem(0));
}else{this.__Cc=[];
}},__Cd:function(){this.buildLookupTable();
this._applyDefaultSelection();
},buildLookupTable:function(){if(this.getModel()!=null&&(this.getChildProperty()==null||this.getLabelPath()==null)){throw new Error("Could not build tree, because 'childProperty' and/"+"or 'labelPath' is 'null'!");
}this.__Cb=0;
var bW=[];
this.__Ca=[];
var bU=-1;
var bV=this.getModel();

if(bV!=null){if(!this.isHideRoot()){bU++;
bW.push(bV);
this.__Ca.push(bU);
}
if(this.isNodeOpen(bV)){var bT=this.__Ce(bV,bU);
bW=bW.concat(bT);
}}this._provider.removeBindings();
this.__nD.removeAll();
this.__nD.append(bW);
this._updateSelection();
this.__Bl();
},__Ce:function(bX,bY){var ca=[];
bY++;

if(!this.isNode(bX)){return ca;
}var cc=bX.get(this.getChildProperty());

if(cc==null){return ca;
}
for(var i=0;i<cc.getLength();i++){var cd=cc.getItem(i);

if(this.isNode(cd)){this.__Ca.push(bY);
ca.push(cd);

if(this.isNodeOpen(cd)){var cb=this.__Ce(cd,bY);
ca=ca.concat(cb);
}}else{if(this.isShowLeafs()){this.__Ca.push(bY);
ca.push(cd);
}}}return ca;
},__Cf:function(ce){if(!qx.lang.Array.contains(this.__BY,ce)){this.__BY.push(ce);
this.fireDataEvent(s,ce);
}},__Cg:function(cf,cg){if(cf===cg){this.__Cf(cg);
return true;
}
if(!this.isNode(cf)){return false;
}var ci=cf.get(this.getChildProperty());

if(ci==null){return false;
}
for(var i=0;i<ci.getLength();i++){var cj=ci.getItem(i);
var ch=this.__Cg(cj,cg);

if(ch===true){this.__Cf(cj);
return true;
}}return false;
},__Bl:function(){this.getPane().getRowConfig().setItemCount(this.__nD.getLength());
this.getPane().fullUpdate();
},getParent:function(ck){var cm=this.__nD.indexOf(ck);

if(cm<0){return null;
}var cn=this.__Ca[cm];

while(cm>0){cm--;
var cl=this.__Ca[cm];

if(cl<cn){return this.__nD.getItem(cm);
}}return null;
},__Ch:function(co){this.__Cc=[];
var parent=this.getParent(co);

while(parent!=null){this.__Cc.unshift(parent);
parent=this.getParent(parent);
}},__Ci:function(){if(this.__Cc==null){return this.getModel();
}var cp=this.getLookupTable();
var parent=this.__Cc.pop();

while(parent!=null){if(cp.contains(parent)){return parent;
}parent=this.__Cc.pop();
}return this.getModel();
}},destruct:function(){var cq=this.getPane();

if(cq!=null){if(cq.hasListener(k)){cq.addListener(k,this._onOpen,this);
}else if(cq.hasListener(j)){cq.removeListener(j,this._onOpen,this);
}}this._layer.removeListener(b,this._onUpdated,this);
this._layer.destroy();
this._provider.dispose();
this.__nD.dispose();
this._layer=this._provider=this.__nD=this.__BY=null;
}});
})();
(function(){var m="String",l="model",k="",j="changeDelegate",i="virtual-tree-file",h="label",g="appearance",f="icon",d="bindItem",c=".length",a="virtual-tree-folder",b="qx.ui.tree.core.MWidgetController";
qx.Mixin.define(b,{construct:function(){this.__AK=[];
},properties:{labelPath:{check:m,nullable:true},iconPath:{check:m,nullable:true},labelOptions:{nullable:true},iconOptions:{nullable:true},childProperty:{check:m,nullable:true},delegate:{event:j,init:null,nullable:true}},members:{__AK:null,bindDefaultProperties:function(n,o){this.bindProperty(k,l,null,n,o);
this.bindProperty(this.getLabelPath(),h,this.getLabelOptions(),n,o);

try{this.bindProperty(this.getChildProperty()+c,g,{converter:function(){return a;
}},n,o);
}catch(p){n.setAppearance(i);
}
if(this.getIconPath()!=null){this.bindProperty(this.getIconPath(),f,this.getIconOptions(),n,o);
}},bindProperty:function(q,r,s,t,u){var v=this.__AL(u,q);
var w=this._tree.getLookupTable();
var x=w.bind(v,t,r,s);
this.__rw(t,x);
},bindPropertyReverse:function(y,z,A,B,C){var D=this.__AL(C,y);
var E=this._tree.getLookupTable();
var F=B.bind(z,E,D,A);
this.__rw(B,F);
},removeBindings:function(){while(this.__AK.length>0){var G=this.__AK.pop();
this._removeBindingsFrom(G);
}},_bindItem:function(H,I){var J=qx.util.Delegate.getMethod(this.getDelegate(),d);

if(J!=null){J(this,H,I);
}else{this.bindDefaultProperties(H,I);
}},_removeBindingsFrom:function(K){var L=this.__AM(K);

while(L.length>0){var M=L.pop();

try{this._tree.getLookupTable().removeBinding(M);
}catch(e){K.removeBinding(M);
}}
if(qx.lang.Array.contains(this.__AK,K)){qx.lang.Array.remove(this.__AK,K);
}},__AL:function(N,O){var P="["+N+"]";

if(O!=null&&O!=""){P+="."+O;
}return P;
},__rw:function(Q,R){var S=this.__AM(Q);

if(!qx.lang.Array.contains(S,R)){S.push(R);
}
if(!qx.lang.Array.contains(this.__AK,Q)){this.__AK.push(Q);
}},__AM:function(T){var U=T.getUserData("BindingIds");

if(U==null){U=[];
T.setUserData("BindingIds",U);
}return U;
}},destruct:function(){this.__AK=null;
}});
})();
(function(){var c="VirtualTree",b="Tree",a="widgetbrowser.pages.Tree";
qx.Class.define(a,{extend:widgetbrowser.pages.AbstractPage,construct:function(){widgetbrowser.pages.AbstractPage.call(this);
this.__hv=new qx.ui.container.Composite(new qx.ui.layout.Grid(10));
this.add(this.__hv);
this.initWidgets();
},members:{initWidgets:function(){var g;
var d=this._widgets;
g=new qx.ui.basic.Label(b);
this.__hv.add(g,{row:0,column:0});
var f=this.__KV();
this.__hv.add(f,{row:1,column:0});
d.push(f);
g=new qx.ui.basic.Label(c);
this.__hv.add(g,{row:0,column:1});
var e=this.__KW();
this.__hv.add(e,{row:1,column:1});
d.push(e);
},__KV:function(){var r=new qx.ui.tree.Tree().set({width:200,height:400});
var w=new qx.ui.tree.TreeFolder("root");
w.setOpen(true);
r.setRoot(w);
var u=new qx.ui.tree.TreeFolder("Desktop");
u.setOpen(true);
w.add(u);
var m=new qx.ui.tree.TreeFolder("Files");
var k=new qx.ui.tree.TreeFolder("Workspace");
var l=new qx.ui.tree.TreeFolder("Network");
var j=new qx.ui.tree.TreeFolder("Trash");
u.add(m,k,l,j);
var s=new qx.ui.tree.TreeFile("Windows (C:)");
var h=new qx.ui.tree.TreeFile("Documents (D:)");
k.add(s,h);
var v=new qx.ui.tree.TreeFolder("Inbox");
var n=new qx.ui.tree.TreeFolder("Presets");
var q=new qx.ui.tree.TreeFolder("Sent");
var p=new qx.ui.tree.TreeFolder("Trash");

for(var i=0;i<30;i++){p.add(new qx.ui.tree.TreeFile("Junk #"+i));
}var t=new qx.ui.tree.TreeFolder("Data");
var o=new qx.ui.tree.TreeFolder("Edit");
v.add(n,q,p,t,o);
w.add(v);
return r;
},__KW:function(){var y=new qx.ui.tree.VirtualTree(null,"name","children").set({width:200,height:400});
var x="widgetbrowser/tree.json";
var z=new qx.data.store.Json(x);
z.bind("model",y,"model");
z.addListener("loaded",function(){y.openNode(y.getModel().getChildren().getItem(0));
},this);
return y;
}}});
})();
(function(){var l="dblclick",k="click",j="Boolean",h="excluded",g="visible",f="qx.event.type.Data",d="_applyOpenMode",c="Space",b="Left",a="Enter",z="changeOpenMode",y="_applyRootOpenClose",x="changeSelection",w="qx.ui.tree.Tree",v="qx.ui.tree.core.AbstractTreeItem",u="tree",t="_applyHideRoot",s="changeRoot",r="_applyRoot",q="keypress",o="none",p="pane",m="__oG",n="Right";
qx.Class.define(w,{extend:qx.ui.core.scroll.AbstractScrollArea,implement:[qx.ui.core.IMultiSelection,qx.ui.form.IModelSelection,qx.ui.form.IForm],include:[qx.ui.core.MMultiSelectionHandling,qx.ui.core.MContentPadding,qx.ui.form.MModelSelection,qx.ui.form.MForm],construct:function(){qx.ui.core.scroll.AbstractScrollArea.call(this);
this.__oG=new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({allowShrinkY:false,allowGrowX:true});
this.getChildControl(p).add(this.__oG);
this.initOpenMode();
this.initRootOpenClose();
this.addListener(x,this._onChangeSelection,this);
this.addListener(q,this._onKeyPress,this);
},events:{addItem:f,removeItem:f},properties:{openMode:{check:[k,l,o],init:l,apply:d,event:z,themeable:true},root:{check:v,init:null,nullable:true,event:s,apply:r},hideRoot:{check:j,init:false,apply:t},rootOpenClose:{check:j,init:false,apply:y},appearance:{refine:true,init:u},focusable:{refine:true,init:true}},members:{__oG:null,SELECTION_MANAGER:qx.ui.tree.selection.SelectionManager,getChildrenContainer:function(){return this.__oG;
},_applyRoot:function(A,B){var C=this.getChildrenContainer();

if(B&&!B.isDisposed()){C.remove(B);

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
},_getContentPaddingTarget:function(){return this.__oG;
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
}}}},destruct:function(){this._disposeObjects(m);
}});
})();
(function(){var k="open",j="icon",i="auto",h="middle",g="String",f="label",d="changeOpen",c="opened",b="always",a="_applyIconOpened",D="Boolean",C="__qc",B="changeIcon",A="changeIconOpened",z="changeLabel",y="Integer",x="_applyIndent",w="changeOpenSymbolMode",v="_applyOpenSymbolMode",u="resize",r="",s="iconOpened",p="abstract",q="never",n="_applyIcon",o="_applyOpen",l="changeIndent",m="qx.ui.tree.core.AbstractItem",t="_applyLabel";
qx.Class.define(m,{extend:qx.ui.core.Widget,type:p,include:[qx.ui.form.MModelProperty],implement:[qx.ui.form.IModel],construct:function(E){qx.ui.core.Widget.call(this);

if(E!=null){this.setLabel(E);
}this._setLayout(new qx.ui.layout.HBox());
this._addWidgets();
this.initOpen();
},properties:{open:{check:D,init:false,event:d,apply:o},openSymbolMode:{check:[b,q,i],init:i,event:w,apply:v},indent:{check:y,init:19,apply:x,event:l,themeable:true},icon:{check:g,apply:n,event:B,nullable:true,themeable:true},iconOpened:{check:g,apply:a,event:A,nullable:true,themeable:true},label:{check:g,apply:t,event:z,init:r}},members:{__qa:null,__qb:null,__qc:null,_addWidgets:function(){throw new Error("Abstract method call.");
},_createChildControlImpl:function(F,G){var H;

switch(F){case f:H=new qx.ui.basic.Label().set({alignY:h,anonymous:true,value:this.getLabel()});
break;
case j:H=new qx.ui.basic.Image().set({alignY:h,anonymous:true,source:this.getIcon()});
break;
case k:H=new qx.ui.tree.core.FolderOpenButton().set({alignY:h});
H.addListener(d,this._onChangeOpen,this);
H.addListener(u,this._updateIndent,this);
break;
}return H||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,F);
},addWidget:function(I,J){this._add(I,J);
},addSpacer:function(){if(!this.__qc){this.__qc=new qx.ui.core.Spacer();
}else{this._remove(this.__qc);
}this._add(this.__qc);
},addOpenButton:function(){this._add(this.getChildControl(k));
},_onChangeOpen:function(e){if(this.isOpenable()){this.setOpen(e.getData());
}},addIcon:function(){var K=this.getChildControl(j);

if(this.__qb){this._remove(K);
}this._add(K);
this.__qb=true;
},addLabel:function(L){var M=this.getChildControl(f);

if(this.__qa){this._remove(M);
}
if(L){this.setLabel(L);
}else{M.setValue(this.getLabel());
}this._add(M);
this.__qa=true;
},_applyIcon:function(N,O){if(!this.__qe()){this.__qf(N);
}else if(!this.isOpen()){this.__qf(N);
}},_applyIconOpened:function(P,Q){if(this.isOpen()){if(this.__qd()&&this.__qe()){this.__qf(P);
}else if(!this.__qd()&&this.__qe()){this.__qf(P);
}}},_applyLabel:function(R,S){var T=this.getChildControl(f,true);

if(T){T.setValue(R);
}},_applyOpen:function(U,V){var open=this.getChildControl(k,true);

if(open){open.setOpen(U);
}var W;
if(U){W=this.__qe()?this.getIconOpened():null;
}else{W=this.getIcon();
}
if(W){this.__qf(W);
}U?this.addState(c):this.removeState(c);
},__qd:function(){return qx.util.PropertyUtil.getUserValue(this,j);
},__qe:function(){return qx.util.PropertyUtil.getUserValue(this,s);
},__qf:function(X){var Y=this.getChildControl(j,true);

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
if(this.__qc){this.__qc.setWidth((this.getLevel()+1)*this.getIndent()-be);
}},_applyIndent:function(bf,bg){this._updateIndent();
},getLevel:function(){throw new Error("Abstract method call.");
},syncWidget:function(){this._updateIndent();
},hasChildren:function(){throw new Error("Abstract method call.");
}},destruct:function(){this._disposeObjects(C);
}});
})();
(function(){var j="visible",h="excluded",g="qx.ui.tree.core.AbstractTreeItem",f="open",e="abstract",d="addItem",c="removeItem",b="__iU",a="__rb";
qx.Class.define(g,{extend:qx.ui.tree.core.AbstractItem,type:e,construct:function(k){qx.ui.tree.core.AbstractItem.call(this,k);
this.__iU=[];
},properties:{parent:{check:g,nullable:true}},members:{__iU:null,__rb:null,getTree:function(){var n=this;

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
}}},getChildrenContainer:function(){if(!this.__rb){this.__rb=new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({visibility:this.isOpen()?j:h});
}return this.__rb;
},hasChildrenContainer:function(){return this.__rb;
},getParentChildrenContainer:function(){if(this.getParent()){return this.getParent().getChildrenContainer();
}else if(this.getLayoutParent()){return this.getLayoutParent();
}else{return null;
}},getChildren:function(){return this.__iU;
},hasChildren:function(){return this.__iU?this.__iU.length>0:false;
},getItems:function(A,B,C){if(C!==false){var D=[];
}else{var D=[this];
}var G=this.hasChildren()&&(B!==false||this.isOpen());

if(G){var F=this.getChildren();

if(A===false){D=D.concat(F);
}else{for(var i=0,E=F.length;i<E;i++){D=D.concat(F[i].getItems(A,B,false));
}}}return D;
},recursiveAddToWidgetQueue:function(){var H=this.getItems(true,true,false);

for(var i=0,l=H.length;i<l;i++){qx.ui.core.queue.Widget.add(H[i]);
}},__rc:function(){if(this.getParentChildrenContainer()){this.getParentChildrenContainer()._addAfter(this.getChildrenContainer(),this);
}},add:function(I){var J=this.getChildrenContainer();
var M=this.getTree();

for(var i=0,l=arguments.length;i<l;i++){var N=arguments[i];
var L=N.getParent();

if(L){L.remove(N);
}N.setParent(this);
var K=this.hasChildren();
J.add(N);

if(N.hasChildren()){J.add(N.getChildrenContainer());
}this.__iU.push(N);

if(!K){this.__rc();
}
if(M){N.recursiveAddToWidgetQueue();
M.fireNonBubblingEvent(d,qx.event.type.Data,[N]);
}}
if(M){qx.ui.core.queue.Widget.add(this);
}},addAt:function(O,P){if(P==this.__iU.length){this.add(O);
return;
}var T=O.getParent();

if(T){T.remove(O);
}var R=this.getChildrenContainer();
O.setParent(this);
var S=this.hasChildren();
var Q=this.__iU[P];
R.addBefore(O,Q);

if(O.hasChildren()){R.addAfter(O.getChildrenContainer(),O);
}qx.lang.Array.insertAt(this.__iU,O,P);

if(!S){this.__rc();
}
if(this.getTree()){O.recursiveAddToWidgetQueue();
qx.ui.core.queue.Widget.add(this);
}},addBefore:function(U,V){var W=U.getParent();

if(W){W.remove(U);
}this.addAt(U,this.__iU.indexOf(V));
},addAfter:function(X,Y){var ba=X.getParent();

if(ba){ba.remove(X);
}this.addAt(X,this.__iU.indexOf(Y)+1);
},addAtBegin:function(bb){this.addAt(bb,0);
},remove:function(bc){for(var i=0,l=arguments.length;i<l;i++){var bg=arguments[i];

if(this.__iU.indexOf(bg)==-1){this.warn("Cannot remove treeitem '"+bg+"'. It is not a child of this tree item.");
return;
}var bd=this.getChildrenContainer();

if(bg.hasChildrenContainer()){var bf=bg.getChildrenContainer();

if(bd.getChildren().indexOf(bf)>=0){bd.remove(bf);
}}qx.lang.Array.remove(this.__iU,bg);
bg.setParent(null);
bd.remove(bg);
}var be=this.getTree();

if(be){be.fireNonBubblingEvent(c,qx.event.type.Data,[bg]);
}qx.ui.core.queue.Widget.add(this);
},removeAt:function(bh){var bi=this.__iU[bh];

if(bi){this.remove(bi);
}},removeAll:function(){var bj=this.__iU.concat();

for(var i=this.__iU.length-1;i>=0;i--){this.remove(this.__iU[i]);
}return bj;
}},destruct:function(){this._disposeArray(b);
this._disposeObjects(a);
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
(function(){var k="changeOpen",j="never",i="changeDelegate",h="cell.level",g="createItem",f="auto",e="cell.children",d="configureItem",c="created",b="cell.row",a="qx.ui.tree.provider.WidgetProvider";
qx.Class.define(a,{extend:qx.core.Object,implement:[qx.ui.virtual.core.IWidgetCellProvider,qx.ui.tree.provider.IVirtualTreeProvider],include:[qx.ui.tree.core.MWidgetController],construct:function(l){qx.core.Object.call(this);
this._tree=l;
this.addListener(i,this._onChangeDelegate,this);
this._onChangeDelegate();
},members:{_tree:null,_renderer:null,getCellWidget:function(m,n){var o=this._tree.getLookupTable().getItem(m);
var q=false;

if(this._tree.isNode(o)){q=this._tree.hasChildren(o);
}var p=this._renderer.getCellWidget();
p.setOpen(q&&this._tree.isNodeOpen(o));
p.setUserData(e,q);
p.addListener(k,this.__Cj,this);

if(this._tree.getSelection().contains(o)){this._styleSelectabled(p);
}else{this._styleUnselectabled(p);
}var r=this._tree.getLevel(m);

if(!this._tree.isShowTopLevelOpenCloseIcons()){r-=1;
}p.setUserData(h,r);

if(!this._tree.isShowTopLevelOpenCloseIcons()&&r==-1){p.setOpenSymbolMode(j);
}else{p.setOpenSymbolMode(f);
}this._bindItem(p,m);
qx.ui.core.queue.Widget.add(p);
return p;
},poolCellWidget:function(s){s.removeListener(k,this.__Cj,this);
this._removeBindingsFrom(s);
this._renderer.pool(s);
},createLayer:function(){return new qx.ui.virtual.layer.WidgetCell(this);
},createRenderer:function(){var t=qx.util.Delegate.getMethod(this.getDelegate(),g);

if(t==null){t=function(){return new qx.ui.tree.VirtualTreeItem();
};
}var u=new qx.ui.virtual.cell.WidgetCell();
u.setDelegate({createWidget:t});
return u;
},styleSelectabled:function(v){var w=this._tree._layer.getRenderedCellWidget(v,0);
this._styleSelectabled(w);
},styleUnselectabled:function(x){var y=this._tree._layer.getRenderedCellWidget(x,0);
this._styleUnselectabled(y);
},isSelectable:function(z){var A=this._tree._layer.getRenderedCellWidget(z,0);

if(A!=null){return A.isEnabled();
}else{return true;
}},_styleSelectabled:function(B){if(B==null){return;
}this._renderer.updateStates(B,{selected:1});
},_styleUnselectabled:function(C){if(C==null){return;
}this._renderer.updateStates(C,{});
},_onItemCreated:function(event){var E=qx.util.Delegate.getMethod(this.getDelegate(),d);

if(E!=null){var D=event.getData();
E(D);
}},_onChangeDelegate:function(event){if(this._renderer!=null){this._renderer.dispose();
this.removeBindings();
}this._renderer=this.createRenderer();
this._renderer.addListener(c,this._onItemCreated,this);
},__Cj:function(event){var G=event.getTarget();
var H=G.getUserData(b);
var F=this._tree.getLookupTable().getItem(H);

if(event.getData()){this._tree.openNode(F);
}else{this._tree.closeNode(F);
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