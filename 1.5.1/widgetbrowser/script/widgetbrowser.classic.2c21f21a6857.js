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
qx.Class.define(x,{extend:qx.ui.virtual.core.Scroller,implement:qx.ui.tree.core.IVirtualTree,include:[qx.ui.virtual.selection.MModel,qx.ui.core.MContentPadding],construct:function(N,O,P){qx.ui.virtual.core.Scroller.call(this,0,1,20,100);
this._init();

if(O!=null){this.setLabelPath(O);
}
if(P!=null){this.setChildProperty(P);
}
if(N!=null){this.initModel(N);
}this.initItemHeight();
this.initOpenMode();
this.addListener(A,this._onKeyPress,this);
},events:{open:c,close:c},properties:{appearance:{refine:true,init:q},focusable:{refine:true,init:true},width:{refine:true,init:100},height:{refine:true,init:200},itemHeight:{check:G,init:25,apply:u,themeable:true},openMode:{check:[g,l,z],init:l,apply:K,event:s,themeable:true},hideRoot:{check:h,init:false,apply:m},showTopLevelOpenCloseIcons:{check:h,init:false,apply:E},showLeafs:{check:h,init:true,apply:C},childProperty:{check:f,apply:r,nullable:true},labelPath:{check:f,apply:D,nullable:true},iconPath:{check:f,apply:o,nullable:true},labelOptions:{apply:L,nullable:true},iconOptions:{apply:B,nullable:true},model:{check:J,apply:F,event:M,nullable:true,deferredInit:true},delegate:{event:t,apply:p,init:null,nullable:true}},members:{_provider:null,_layer:null,__yc:null,__HN:null,__HO:null,__fl:null,__HP:0,__HQ:null,syncWidget:function(){var T=this._layer.getFirstRow();
var Q=this._layer.getRowSizes().length;

for(var U=T;U<T+Q;U++){var R=this._layer.getRenderedCellWidget(U,0);

if(R!=null){this.__HP=Math.max(this.__HP,R.getSizeHint().width);
}}var S=this.getPane().getBounds().width;
this.getPane().getColumnConfig().setItemSize(0,Math.max(this.__HP,S));
},openNode:function(V){this.__HT(V);
this.buildLookupTable();
},refresh:function(){this.buildLookupTable();
},openNodeAndParents:function(W){this.__HU(this.getModel(),W);
this.buildLookupTable();
},closeNode:function(X){if(qx.lang.Array.contains(this.__HN,X)){qx.lang.Array.remove(this.__HN,X);
this.fireDataEvent(n,X);
this.buildLookupTable();
}},isNodeOpen:function(Y){return qx.lang.Array.contains(this.__HN,Y);
},_init:function(){this.__yc=new qx.data.Array();
this.__HN=[];
this.__HO=[];
this._initLayer();
},_initLayer:function(){this._provider=new qx.ui.tree.provider.WidgetProvider(this);
this._layer=this._provider.createLayer();
this._layer.addListener(b,this._onUpdated,this);
this.getPane().addLayer(this._layer);
},getLookupTable:function(){return this.__yc;
},_reverseLookup:function(ba){return ba;
},_getDataFromRow:function(bb){return this.__yc.getItem(bb);
},_getSelectables:function(){return this.__yc;
},getOpenNodes:function(){return this.__HN;
},isNode:function(bc){return qx.Class.hasProperty(bc.constructor,this.getChildProperty());
},getLevel:function(bd){return this.__HO[bd];
},hasChildren:function(be){var bf=be.get(this.getChildProperty());

if(bf==null){return false;
}
if(this.isShowLeafs()){return bf.length>0;
}else{for(var i=0;i<bf.getLength();i++){var bg=bf.getItem(i);

if(this.isNode(bg)){return true;
}}}return false;
},_getContentPaddingTarget:function(){return this.getPane();
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
},_applyModel:function(bC,bD){this.__HN=[];

if(bC!=null){bC.addListener(a,this._onChangeBubble,this);
this.__HT(bC);
}
if(bD!=null){bD.removeListener(a,this._onChangeBubble,this);
}this.__HR();
},_applyDelegate:function(bE,bF){this._provider.setDelegate(bE);
this.buildLookupTable();
},_onChangeBubble:function(event){var bH=event.getData().name;
var bG=bH.lastIndexOf(w);

if(bG!=-1){bH=bH.substr(bG+1,bH.length);
}
if(qx.lang.String.startsWith(bH,this.getChildProperty())){this.__HR();
}},_onUpdated:function(event){if(this.__fl==null){this.__fl=new qx.util.DeferredCall(function(){qx.ui.core.queue.Widget.add(this);
},this);
}this.__fl.schedule();
},_onOpen:function(event){var bJ=event.getRow();
var bI=this.__yc.getItem(bJ);

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
}}},_beforeApplySelection:function(bO){if(bO.length===0&&this.getSelectionMode()===d){var bP=this.__HW();
var bQ=this.getLookupTable().indexOf(bP);

if(bQ>=0){bO.push(bQ);
}}},_afterApplySelection:function(){var bR=this.getSelection();

if(bR.getLength()>0&&this.getSelectionMode()===d){this.__HV(bR.getItem(0));
}else{this.__HQ=[];
}},__HR:function(){this.buildLookupTable();
this._applyDefaultSelection();
},buildLookupTable:function(){if(this.getModel()!=null&&(this.getChildProperty()==null||this.getLabelPath()==null)){throw new Error("Could not build tree, because 'childProperty' and/"+"or 'labelPath' is 'null'!");
}this.__HP=0;
var bV=[];
this.__HO=[];
var bT=-1;
var bU=this.getModel();

if(bU!=null){if(!this.isHideRoot()){bT++;
bV.push(bU);
this.__HO.push(bT);
}
if(this.isNodeOpen(bU)){var bS=this.__HS(bU,bT);
bV=bV.concat(bS);
}}this._provider.removeBindings();
this.__yc.removeAll();
this.__yc.append(bV);
this._updateSelection();
this.__yi();
},__HS:function(bW,bX){var bY=[];
bX++;

if(!this.isNode(bW)){return bY;
}var cb=bW.get(this.getChildProperty());

if(cb==null){return bY;
}
for(var i=0;i<cb.getLength();i++){var cc=cb.getItem(i);

if(this.isNode(cc)){this.__HO.push(bX);
bY.push(cc);

if(this.isNodeOpen(cc)){var ca=this.__HS(cc,bX);
bY=bY.concat(ca);
}}else{if(this.isShowLeafs()){this.__HO.push(bX);
bY.push(cc);
}}}return bY;
},__HT:function(cd){if(!qx.lang.Array.contains(this.__HN,cd)){this.__HN.push(cd);
this.fireDataEvent("open",cd);
}},__HU:function(ce,cf){if(ce===cf){this.__HT(cf);
return true;
}
if(!this.isNode(ce)){return false;
}var ch=ce.get(this.getChildProperty());

if(ch==null){return false;
}
for(var i=0;i<ch.getLength();i++){var ci=ch.getItem(i);
var cg=this.__HU(ci,cf);

if(cg===true){this.__HT(ci);
return true;
}}return false;
},__yi:function(){this.getPane().getRowConfig().setItemCount(this.__yc.getLength());
this.getPane().fullUpdate();
},getParent:function(cj){var cl=this.__yc.indexOf(cj);

if(cl<0){return null;
}var cm=this.__HO[cl];

while(cl>0){cl--;
var ck=this.__HO[cl];

if(ck<cm){return this.__yc.getItem(cl);
}}return null;
},__HV:function(cn){this.__HQ=[];
var parent=this.getParent(cn);

while(parent!=null){this.__HQ.unshift(parent);
parent=this.getParent(parent);
}},__HW:function(){if(this.__HQ==null){return this.getModel();
}var co=this.getLookupTable();
var parent=this.__HQ.pop();

while(parent!=null){if(co.contains(parent)){return parent;
}parent=this.__HQ.pop();
}return this.getModel();
}},destruct:function(){var cp=this.getPane();

if(cp!=null){if(cp.hasListener(k)){cp.addListener(k,this._onOpen,this);
}else if(cp.hasListener(j)){cp.removeListener(j,this._onOpen,this);
}}this._layer.removeListener(b,this._onUpdated,this);
this._layer.destroy();
this._provider.dispose();
this.__yc.dispose();
this._layer=this._provider=this.__yc=this.__HN=null;
}});
})();
(function(){var q="String",p="BindingIds",o="",n="model",m="changeDelegate",l="virtual-tree-file",k="label",j="appearance",i="icon",h="bindItem",c=".length",g="]",f="virtual-tree-folder",b="[",a=".",d="qx.ui.tree.core.MWidgetController";
qx.Mixin.define(d,{construct:function(){this.__yo=[];
},properties:{labelPath:{check:q,nullable:true},iconPath:{check:q,nullable:true},labelOptions:{nullable:true},iconOptions:{nullable:true},childProperty:{check:q,nullable:true},delegate:{event:m,init:null,nullable:true}},members:{__yo:null,bindDefaultProperties:function(r,s){this.bindProperty(o,n,null,r,s);
this.bindProperty(this.getLabelPath(),k,this.getLabelOptions(),r,s);

try{this.bindProperty(this.getChildProperty()+c,j,{converter:function(){return f;
}},r,s);
}catch(t){r.setAppearance(l);
}
if(this.getIconPath()!=null){this.bindProperty(this.getIconPath(),i,this.getIconOptions(),r,s);
}},bindProperty:function(u,v,w,x,y){var z=this.__yp(y,u);
var A=this._tree.getLookupTable();
var B=A.bind(z,x,v,w);
this.__yq(x,B);
},bindPropertyReverse:function(C,D,E,F,G){var H=this.__yp(G,C);
var I=this._tree.getLookupTable();
var J=F.bind(D,I,H,E);
this.__yq(F,J);
},removeBindings:function(){while(this.__yo.length>0){var K=this.__yo.pop();
this._removeBindingsFrom(K);
}},_bindItem:function(L,M){var N=qx.util.Delegate.getMethod(this.getDelegate(),h);

if(N!=null){N(this,L,M);
}else{this.bindDefaultProperties(L,M);
}},_removeBindingsFrom:function(O){var P=this.__yr(O);

while(P.length>0){var Q=P.pop();

try{this._tree.getLookupTable().removeBinding(Q);
}catch(e){O.removeBinding(Q);
}}
if(qx.lang.Array.contains(this.__yo,O)){qx.lang.Array.remove(this.__yo,O);
}},__yp:function(R,S){var T=b+R+g;

if(S!=null&&S!=o){T+=a+S;
}return T;
},__yq:function(U,V){var W=this.__yr(U);

if(!qx.lang.Array.contains(W,V)){W.push(V);
}
if(!qx.lang.Array.contains(this.__yo,U)){this.__yo.push(U);
}},__yr:function(X){var Y=X.getUserData(p);

if(Y==null){Y=[];
X.setUserData(p,Y);
}return Y;
}},destruct:function(){this.__yo=null;
}});
})();
(function(){var c="VirtualTree",b="Tree",a="widgetbrowser.pages.Tree";
qx.Class.define(a,{extend:widgetbrowser.pages.AbstractPage,construct:function(){widgetbrowser.pages.AbstractPage.call(this);
this.__ll=new qx.ui.container.Composite(new qx.ui.layout.Grid(10));
this.add(this.__ll);
this.initWidgets();
},members:{__ll:null,initWidgets:function(){var g;
var d=this._widgets;
g=new qx.ui.basic.Label(b);
this.__ll.add(g,{row:0,column:0});
var f=this.__LU();
this.__ll.add(f,{row:1,column:0});
d.push(f);
g=new qx.ui.basic.Label(c);
this.__ll.add(g,{row:0,column:1});
var e=this.__LV();
this.__ll.add(e,{row:1,column:1});
d.push(e);
},__LU:function(){var r=new qx.ui.tree.Tree().set({width:200,height:400});
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
},__LV:function(){var y=new qx.ui.tree.VirtualTree(null,"name","children").set({width:200,height:400});
var x="widgetbrowser/tree.json";
var z=new qx.data.store.Json(x);
z.bind("model",y,"model");
z.addListener("loaded",function(){y.openNode(y.getModel().getChildren().getItem(0));
},this);
return y;
}}});
})();
(function(){var l="dblclick",k="click",j="Boolean",h="excluded",g="visible",f="qx.event.type.Data",d="__nw",c="_applyOpenMode",b="Space",a="Left",z="Enter",y="changeOpenMode",x="_applyRootOpenClose",w="changeSelection",v="qx.ui.tree.Tree",u="qx.ui.tree.core.AbstractTreeItem",t="tree",s="_applyHideRoot",r="changeRoot",q="_applyRoot",o="keypress",p="none",m="pane",n="Right";
qx.Class.define(v,{extend:qx.ui.core.scroll.AbstractScrollArea,implement:[qx.ui.core.IMultiSelection,qx.ui.form.IModelSelection,qx.ui.form.IForm],include:[qx.ui.core.MMultiSelectionHandling,qx.ui.core.MContentPadding,qx.ui.form.MModelSelection,qx.ui.form.MForm],construct:function(){qx.ui.core.scroll.AbstractScrollArea.call(this);
this.__nw=new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({allowShrinkY:false,allowGrowX:true});
this.getChildControl(m).add(this.__nw);
this.initOpenMode();
this.initRootOpenClose();
this.addListener(w,this._onChangeSelection,this);
this.addListener(o,this._onKeyPress,this);
},events:{addItem:f,removeItem:f},properties:{openMode:{check:[k,l,p],init:l,apply:c,event:y,themeable:true},root:{check:u,init:null,nullable:true,event:r,apply:q},hideRoot:{check:j,init:false,apply:s},rootOpenClose:{check:j,init:false,apply:x},appearance:{refine:true,init:t},focusable:{refine:true,init:true}},members:{__nw:null,SELECTION_MANAGER:qx.ui.tree.selection.SelectionManager,getChildrenContainer:function(){return this.__nw;
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
},_getContentPaddingTarget:function(){return this.__nw;
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

if(bi!==null){switch(e.getKeyIdentifier()){case a:if(bi.isOpenable()&&bi.isOpen()){bi.setOpen(false);
}else if(bi.getParent()){this.setSelection([bi.getParent()]);
}break;
case n:if(bi.isOpenable()&&!bi.isOpen()){bi.setOpen(true);
}break;
case z:case b:if(bi.isOpenable()){bi.toggleOpen();
}break;
}}}},destruct:function(){this._disposeObjects(d);
}});
})();
(function(){var k="open",j="icon",i="auto",h="middle",g="String",f="label",d="changeOpen",c="opened",b="always",a="_applyIconOpened",D="Boolean",C="changeIcon",B="changeIconOpened",A="changeLabel",z="Integer",y="_applyIndent",x="changeOpenSymbolMode",w="_applyOpenSymbolMode",v="__nd",u="resize",r="",s="iconOpened",p="abstract",q="never",n="_applyIcon",o="_applyOpen",l="changeIndent",m="qx.ui.tree.core.AbstractItem",t="_applyLabel";
qx.Class.define(m,{extend:qx.ui.core.Widget,type:p,include:[qx.ui.form.MModelProperty],implement:[qx.ui.form.IModel],construct:function(E){qx.ui.core.Widget.call(this);

if(E!=null){this.setLabel(E);
}this._setLayout(new qx.ui.layout.HBox());
this._addWidgets();
this.initOpen();
},properties:{open:{check:D,init:false,event:d,apply:o},openSymbolMode:{check:[b,q,i],init:i,event:x,apply:w},indent:{check:z,init:19,apply:y,event:l,themeable:true},icon:{check:g,apply:n,event:C,nullable:true,themeable:true},iconOpened:{check:g,apply:a,event:B,nullable:true,themeable:true},label:{check:g,apply:t,event:A,init:r}},members:{__nb:null,__nc:null,__nd:null,_addWidgets:function(){throw new Error("Abstract method call.");
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
},addSpacer:function(){if(!this.__nd){this.__nd=new qx.ui.core.Spacer();
}else{this._remove(this.__nd);
}this._add(this.__nd);
},addOpenButton:function(){this._add(this.getChildControl(k));
},_onChangeOpen:function(e){if(this.isOpenable()){this.setOpen(e.getData());
}},addIcon:function(){var K=this.getChildControl(j);

if(this.__nc){this._remove(K);
}this._add(K);
this.__nc=true;
},addLabel:function(L){var M=this.getChildControl(f);

if(this.__nb){this._remove(M);
}
if(L){this.setLabel(L);
}else{M.setValue(this.getLabel());
}this._add(M);
this.__nb=true;
},_applyIcon:function(N,O){if(!this.__nf()){this.__ng(N);
}else if(!this.isOpen()){this.__ng(N);
}},_applyIconOpened:function(P,Q){if(this.isOpen()){if(this.__ne()&&this.__nf()){this.__ng(P);
}else if(!this.__ne()&&this.__nf()){this.__ng(P);
}}},_applyLabel:function(R,S){var T=this.getChildControl(f,true);

if(T){T.setValue(R);
}},_applyOpen:function(U,V){var open=this.getChildControl(k,true);

if(open){open.setOpen(U);
}var W;
if(U){W=this.__nf()?this.getIconOpened():null;
}else{W=this.getIcon();
}
if(W){this.__ng(W);
}U?this.addState(c):this.removeState(c);
},__ne:function(){return qx.util.PropertyUtil.getUserValue(this,j);
},__nf:function(){return qx.util.PropertyUtil.getUserValue(this,s);
},__ng:function(X){var Y=this.getChildControl(j,true);

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
if(this.__nd){this.__nd.setWidth((this.getLevel()+1)*this.getIndent()-be);
}},_applyIndent:function(bf,bg){this._updateIndent();
},getLevel:function(){throw new Error("Abstract method call.");
},syncWidget:function(){this._updateIndent();
},hasChildren:function(){throw new Error("Abstract method call.");
}},destruct:function(){this._disposeObjects(v);
}});
})();
(function(){var j="visible",h="excluded",g="qx.ui.tree.core.AbstractTreeItem",f="open",e="abstract",d="__fa",c="addItem",b="removeItem",a="__nh";
qx.Class.define(g,{extend:qx.ui.tree.core.AbstractItem,type:e,construct:function(k){qx.ui.tree.core.AbstractItem.call(this,k);
this.__fa=[];
},properties:{parent:{check:g,nullable:true}},members:{__fa:null,__nh:null,getTree:function(){var n=this;

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
}}},getChildrenContainer:function(){if(!this.__nh){this.__nh=new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({visibility:this.isOpen()?j:h});
}return this.__nh;
},hasChildrenContainer:function(){return this.__nh;
},getParentChildrenContainer:function(){if(this.getParent()){return this.getParent().getChildrenContainer();
}else if(this.getLayoutParent()){return this.getLayoutParent();
}else{return null;
}},getChildren:function(){return this.__fa;
},hasChildren:function(){return this.__fa?this.__fa.length>0:false;
},getItems:function(A,B,C){if(C!==false){var D=[];
}else{var D=[this];
}var G=this.hasChildren()&&(B!==false||this.isOpen());

if(G){var F=this.getChildren();

if(A===false){D=D.concat(F);
}else{for(var i=0,E=F.length;i<E;i++){D=D.concat(F[i].getItems(A,B,false));
}}}return D;
},recursiveAddToWidgetQueue:function(){var H=this.getItems(true,true,false);

for(var i=0,l=H.length;i<l;i++){qx.ui.core.queue.Widget.add(H[i]);
}},__ni:function(){if(this.getParentChildrenContainer()){this.getParentChildrenContainer()._addAfter(this.getChildrenContainer(),this);
}},add:function(I){var J=this.getChildrenContainer();
var M=this.getTree();

for(var i=0,l=arguments.length;i<l;i++){var N=arguments[i];
var L=N.getParent();

if(L){L.remove(N);
}N.setParent(this);
var K=this.hasChildren();
J.add(N);

if(N.hasChildren()){J.add(N.getChildrenContainer());
}this.__fa.push(N);

if(!K){this.__ni();
}
if(M){N.recursiveAddToWidgetQueue();
M.fireNonBubblingEvent(c,qx.event.type.Data,[N]);
}}
if(M){qx.ui.core.queue.Widget.add(this);
}},addAt:function(O,P){if(P==this.__fa.length){this.add(O);
return;
}var T=O.getParent();

if(T){T.remove(O);
}var R=this.getChildrenContainer();
O.setParent(this);
var S=this.hasChildren();
var Q=this.__fa[P];
R.addBefore(O,Q);

if(O.hasChildren()){R.addAfter(O.getChildrenContainer(),O);
}qx.lang.Array.insertAt(this.__fa,O,P);

if(!S){this.__ni();
}
if(this.getTree()){O.recursiveAddToWidgetQueue();
qx.ui.core.queue.Widget.add(this);
}},addBefore:function(U,V){var W=U.getParent();

if(W){W.remove(U);
}this.addAt(U,this.__fa.indexOf(V));
},addAfter:function(X,Y){var ba=X.getParent();

if(ba){ba.remove(X);
}this.addAt(X,this.__fa.indexOf(Y)+1);
},addAtBegin:function(bb){this.addAt(bb,0);
},remove:function(bc){for(var i=0,l=arguments.length;i<l;i++){var bg=arguments[i];

if(this.__fa.indexOf(bg)==-1){this.warn("Cannot remove treeitem '"+bg+"'. It is not a child of this tree item.");
return;
}var bd=this.getChildrenContainer();

if(bg.hasChildrenContainer()){var bf=bg.getChildrenContainer();

if(bd.getChildren().indexOf(bf)>=0){bd.remove(bf);
}}qx.lang.Array.remove(this.__fa,bg);
bg.setParent(null);
bd.remove(bg);
}var be=this.getTree();

if(be){be.fireNonBubblingEvent(b,qx.event.type.Data,[bg]);
}qx.ui.core.queue.Widget.add(this);
},removeAt:function(bh){var bi=this.__fa[bh];

if(bi){this.remove(bi);
}},removeAll:function(){var bj=this.__fa.concat();

for(var i=this.__fa.length-1;i>=0;i--){this.remove(this.__fa[i]);
}return bj;
}},destruct:function(){this._disposeArray(d);
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
o.addListener(j,this.__HX,this);

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
},poolCellWidget:function(r){r.removeListener(j,this.__HX,this);
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
},__HX:function(event){var F=event.getTarget();
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