qx.$$packageData['512']={"locales":{},"resources":{"qx/icon/Tango/22/emotes/face-angel.png":[22,22,"png","qx"],"qx/icon/Tango/22/emotes/face-embarrassed.png":[22,22,"png","qx"],"qx/icon/Tango/22/emotes/face-kiss.png":[22,22,"png","qx"],"qx/icon/Tango/22/emotes/face-laugh.png":[22,22,"png","qx"],"qx/icon/Tango/22/emotes/face-plain.png":[22,22,"png","qx"],"qx/icon/Tango/22/emotes/face-raspberry.png":[22,22,"png","qx"],"qx/icon/Tango/22/emotes/face-sad.png":[22,22,"png","qx"],"qx/icon/Tango/22/emotes/face-smile-big.png":[22,22,"png","qx"],"qx/icon/Tango/22/emotes/face-smile.png":[22,22,"png","qx"],"qx/icon/Tango/22/emotes/face-surprise.png":[22,22,"png","qx"],"showcase/virtuallist/imicons/christian_hagendorn.png":[52,64,"png","showcase"],"showcase/virtuallist/imicons/martin_wittemann.png":[52,52,"png","showcase"],"showcase/virtuallist/imicons/readme.txt":"showcase","showcase/virtuallist/imicons/status_away.png":[16,16,"png","showcase"],"showcase/virtuallist/imicons/status_busy.png":[16,16,"png","showcase"],"showcase/virtuallist/imicons/status_offline.png":[16,16,"png","showcase"],"showcase/virtuallist/imicons/status_online.png":[16,16,"png","showcase"],"showcase/virtuallist/imicons/tino_butz.png":[48,48,"png","showcase"],"showcase/virtuallist/imicons/tristan_koch.png":[73,73,"png","showcase"],"showcase/virtuallist/imicons/user_add.png":[16,16,"png","showcase"],"showcase/virtuallist/imicons/user_delete.png":[16,16,"png","showcase"]},"translations":{}};
qx.Part.$$notifyLoad("512", function() {
(function(){var k="execute",j="middle",i="name",h="",g="away",f="offline",d="value",c="online",b="icon",a="busy",S="selection[0].status",R="right",Q="separator-vertical",P="Escape",O="Cancel",N="Group: ",M="Name:",L="Enter",K="source",J="Group:",r="selection[0]",s="showcase.page.virtuallist.Content",p="center",q="showcase/virtuallist/imicons/user_delete.png",n="enabled",o="icon/16/actions/list-add.png",l="group",m="Name: ",t="keypress",u="selection.length",B="modelSelection",z="top",D="Contacts",C="Status: ",F="selection",E="Add",w="Contact Details",I="Add user",H="model",G="appear",v="avatar",x="showcase/virtuallist/imicons/user_add.png",y="left",A="Avatar: ";
qx.Class.define(s,{extend:showcase.AbstractContent,construct:function(T){showcase.AbstractContent.call(this,T);
this.setView(this._createView());
},members:{messenger:null,__JB:null,__JC:null,_createView:function(){var X=new qx.ui.window.Desktop(new qx.ui.window.Manager());
var U=new qx.ui.window.Window(D);
U.set({showClose:false,showMinimize:false,contentPadding:0});
X.add(U);
U.moveTo(250,20);
U.open();
var W=new qx.ui.layout.VBox();
W.setSeparator(Q);
U.setLayout(W);
this.messenger=new showcase.page.virtuallist.messenger.Roster();
var V=showcase.page.virtuallist.messenger.BuddyModel.createBuddies(200);
this.messenger.setModel(V);
U.add(this.createToolbar());
U.add(this.messenger,{flex:1});
X.add(this.createDetailsView(),{left:20,top:20});
return X;
},createToolbar:function(){var toolbar=new qx.ui.toolbar.ToolBar();
var bb=new qx.ui.toolbar.Part();
toolbar.add(bb);
var Y=new qx.ui.toolbar.Button(h,x).set({show:b});
Y.addListener(k,this.showAddContactWindow,this);
bb.add(Y);
var ba=new qx.ui.toolbar.Button(h,q).set({show:b});
this.messenger.bind(u,ba,n,{converter:function(bc){return bc>0;
}});
ba.addListener(k,function(){this.messenger.getModel().remove(this.messenger.getSelection().getItem(0));
},this);
bb.add(ba);
return bb;
},createDetailsView:function(){var bg=new qx.data.controller.Object();
this.messenger.bind(r,bg,H);
var bd=new qx.ui.groupbox.GroupBox(w);
var bh=new qx.ui.layout.Grid(5,5);
bh.setColumnAlign(0,R,j);
bd.setLayout(bh);
bd.add(new qx.ui.basic.Label(m),{row:0,column:0});
var bj=new qx.ui.form.TextField();
bg.addTarget(bj,d,i,true);
bd.add(bj,{row:0,column:1});
bd.add(new qx.ui.basic.Label(N),{row:1,column:0});
var be=new qx.ui.form.VirtualComboBox();
be.setLabelPath(i);
be.setModel(this.messenger.getGroups());
bg.addTarget(be,d,l,true);
bd.add(be,{row:1,column:1});
bd.add(new qx.ui.basic.Label(C),{row:2,column:0});
var bi=new qx.ui.form.SelectBox();
bi.add(new qx.ui.form.ListItem(c).set({model:c}));
bi.add(new qx.ui.form.ListItem(g).set({model:g}));
bi.add(new qx.ui.form.ListItem(a).set({model:a}));
bi.add(new qx.ui.form.ListItem(f).set({model:f}));
this.messenger.bind(S,bi,B,{converter:function(bk){return [bk];
}});
bi.bind(F,this.messenger,S,{converter:function(bl){return bl[0].getModel();
}});
bd.add(bi,{row:2,column:1});
bd.add(new qx.ui.basic.Label(A).set({alignY:z}),{row:3,column:0});
var bf=new qx.ui.basic.Image().set({alignX:p,maxWidth:70,maxHeight:70,scale:true});
bg.addTarget(bf,K,v);
bd.add(bf,{row:3,column:1});
return bd;
},showAddContactWindow:function(){if(this.__JB==null){var bm=new qx.ui.layout.Grid(5,10);
var bo=new qx.ui.window.Window(I,o);
bo.set({width:165,height:100,showMinimize:false,showClose:false,showMaximize:false});
bo.setLayout(bm);
var br=new qx.ui.basic.Label(M);
var bs=new qx.ui.form.TextField();
var bp=new qx.ui.form.VirtualComboBox();
bp.setLabelPath(i);
bp.setModel(this.messenger.getGroups());
var bn=new qx.ui.basic.Label(J);
var bu=new qx.ui.form.Button(E);
var bt=new qx.ui.form.Button(O);
this.__JC=bs;
bu.setAllowGrowX(false);
bt.setAllowGrowX(false);
bo.addListener(G,bs.focus,bs);
bt.addListener(k,bo.close,bo);
var bq=function(){var bv=new showcase.page.virtuallist.messenger.BuddyModel();
bv.setName(bs.getValue());
bv.setGroup(bp.getValue());
this.messenger.getModel().push(bv);
this.messenger.getSelection().setItem(0,bv);
bo.close();
};
bu.addListener(k,bq,this);
bo.addListener(t,function(e){var bw=e.getKeyIdentifier();

if(bw==L){bq.call(this);
}else if(bw==P){bo.close();
}},this);
bo.add(br,{row:0,column:0});
bo.add(bs,{row:0,column:1,colSpan:2});
bo.add(bn,{row:1,column:0});
bo.add(bp,{row:1,column:1,colSpan:2});
bo.add(bu,{row:2,column:1});
bo.add(bt,{row:2,column:2});
bm.setColumnAlign(0,y,j);
bm.setColumnAlign(1,R,j);
this.getView().add(bo,{left:270,top:40});
this.__JB=bo;
}this.__JC.setValue(h);
this.__JB.open();
},removeContact:function(){this.messenger.getModel().pop();
}}});
})();
(function(){var a="qx.ui.list.provider.IListProvider";
qx.Interface.define(a,{members:{createLayer:function(){},createItemRenderer:function(){},createGroupRenderer:function(){},styleSelectabled:function(b){},styleUnselectabled:function(c){},isSelectable:function(d){},setLabelPath:function(e){},setIconPath:function(f){},setLabelOptions:function(g){},setIconOptions:function(h){},setDelegate:function(i){},removeBindings:function(){}}});
})();
(function(){var a="qx.ui.virtual.core.IWidgetCellProvider";
qx.Interface.define(a,{members:{getCellWidget:function(b,c){},poolCellWidget:function(d){}}});
})();
(function(){var k="cell.type",j="String",i="model",h="",g="changeDelegate",f="label",d="qx.ui.list.core.MWidgetController",c="icon",b="value",a="group";
qx.Mixin.define(d,{construct:function(){this.__AB=[];
},properties:{labelPath:{check:j,nullable:true},iconPath:{check:j,nullable:true},groupLabelPath:{check:j,nullable:true},labelOptions:{nullable:true},iconOptions:{nullable:true},groupLabelOptions:{nullable:true},delegate:{event:g,init:null,nullable:true}},members:{__AB:null,bindDefaultProperties:function(l,m){if(l.getUserData(k)!=a){this.bindProperty(h,i,null,l,m);
this.bindProperty(this.getLabelPath(),f,this.getLabelOptions(),l,m);

if(this.getIconPath()!=null){this.bindProperty(this.getIconPath(),c,this.getIconOptions(),l,m);
}}else{this.bindProperty(this.getGroupLabelPath(),b,this.getGroupLabelOptions(),l,m);
}},bindProperty:function(n,o,p,q,r){var t=q.getUserData(k);
var s=this.__AC(r,n,t);
var u=this._list.bind(s,q,o,p);
this.__rt(q,u);
},bindPropertyReverse:function(v,w,x,y,z){var B=y.getUserData(k);
var A=this.__AC(z,v,B);
var C=y.bind(w,this._list,A,x);
this.__rt(y,C);
},removeBindings:function(){while(this.__AB.length>0){var D=this.__AB.pop();
this._removeBindingsFrom(D);
}},_configureItem:function(E){var F=this.getDelegate();

if(F!=null&&F.configureItem!=null){F.configureItem(E);
}},_configureGroupItem:function(G){var H=this.getDelegate();

if(H!=null&&H.configureGroupItem!=null){H.configureGroupItem(G);
}},_bindItem:function(I,J){var K=this.getDelegate();

if(K!=null&&K.bindItem!=null){K.bindItem(this,I,J);
}else{this.bindDefaultProperties(I,J);
}},_bindGroupItem:function(L,M){var N=this.getDelegate();

if(N!=null&&N.bindGroupItem!=null){N.bindGroupItem(this,L,M);
}else{this.bindDefaultProperties(L,M);
}},_removeBindingsFrom:function(O){var P=this.__AD(O);

while(P.length>0){var Q=P.pop();

try{this._list.removeBinding(Q);
}catch(e){O.removeBinding(Q);
}}
if(qx.lang.Array.contains(this.__AB,O)){qx.lang.Array.remove(this.__AB,O);
}},__AC:function(R,S,T){var U="model["+R+"]";

if(T=="group"){U="groups["+R+"]";
}
if(S!=null&&S!=""){U+="."+S;
}return U;
},__rt:function(V,W){var X=this.__AD(V);

if(!qx.lang.Array.contains(X,W)){X.push(W);
}
if(!qx.lang.Array.contains(this.__AB,V)){this.__AB.push(V);
}},__AD:function(Y){var ba=Y.getUserData("BindingIds");

if(ba==null){ba=[];
Y.setUserData("BindingIds",ba);
}return ba;
}},destruct:function(){this.__AB=null;
}});
})();
(function(){var i="cell.type",h="created",g="item",f="group",e="changeDelegate",d="qx.ui.list.provider.WidgetProvider",c="createItem",b="group-item",a="createGroupItem";
qx.Class.define(d,{extend:qx.core.Object,implement:[qx.ui.virtual.core.IWidgetCellProvider,qx.ui.list.provider.IListProvider],include:[qx.ui.list.core.MWidgetController],construct:function(j){qx.core.Object.call(this);
this._list=j;
this._itemRenderer=this.createItemRenderer();
this._groupRenderer=this.createGroupRenderer();
this._itemRenderer.addListener(h,this._onItemCreated,this);
this._groupRenderer.addListener(h,this._onGroupItemCreated,this);
this._list.addListener(e,this._onChangeDelegate,this);
},members:{_itemRenderer:null,_groupRenderer:null,getCellWidget:function(k,l){var m=null;

if(!this._list._isGroup(k)){m=this._itemRenderer.getCellWidget();
m.setUserData(i,g);
this._bindItem(m,this._list._lookup(k));

if(this._list._manager.isItemSelected(k)){this._styleSelectabled(m);
}else{this._styleUnselectabled(m);
}}else{m=this._groupRenderer.getCellWidget();
m.setUserData(i,f);
this._bindGroupItem(m,this._list._lookupGroup(k));
}return m;
},poolCellWidget:function(n){this._removeBindingsFrom(n);

if(n.getUserData(i)==g){this._itemRenderer.pool(n);
}else if(n.getUserData(i)==f){this._groupRenderer.pool(n);
}},createLayer:function(){return new qx.ui.virtual.layer.WidgetCell(this);
},createItemRenderer:function(){var o=qx.util.Delegate.getMethod(this.getDelegate(),c);

if(o==null){o=function(){return new qx.ui.form.ListItem();
};
}var p=new qx.ui.virtual.cell.WidgetCell();
p.setDelegate({createWidget:o});
return p;
},createGroupRenderer:function(){var q=qx.util.Delegate.getMethod(this.getDelegate(),a);

if(q==null){q=function(){var s=new qx.ui.basic.Label();
s.setAppearance(b);
return s;
};
}var r=new qx.ui.virtual.cell.WidgetCell();
r.setDelegate({createWidget:q});
return r;
},styleSelectabled:function(t){var u=this.__AE(t);
this._styleSelectabled(u);
},styleUnselectabled:function(v){var w=this.__AE(v);
this._styleUnselectabled(w);
},isSelectable:function(x){if(this._list._isGroup(x)){return false;
}var y=this._list._layer.getRenderedCellWidget(x,0);

if(y!=null){return y.isEnabled();
}else{return true;
}},_styleSelectabled:function(z){this.__AF(z,{selected:1});
},_styleUnselectabled:function(A){this.__AF(A,{});
},_onItemCreated:function(event){var B=event.getData();
this._configureItem(B);
},_onGroupItemCreated:function(event){var C=event.getData();
this._configureGroupItem(C);
},_onChangeDelegate:function(event){this._itemRenderer.dispose();
this._itemRenderer=this.createItemRenderer();
this._itemRenderer.addListener(h,this._onItemCreated,this);
this._groupRenderer.dispose();
this._groupRenderer=this.createGroupRenderer();
this._groupRenderer.addListener(h,this._onGroupItemCreated,this);
this.removeBindings();
this._list.getPane().fullUpdate();
},__AE:function(D){return this._list._layer.getRenderedCellWidget(D,0);
},__AF:function(E,F){if(E==null){return;
}this._itemRenderer.updateStates(E,F);
}},destruct:function(){this._itemRenderer.dispose();
this._groupRenderer.dispose();
this._itemRenderer=this._groupRenderer=null;
}});
})();
(function(){var p="Boolean",o="change",n="single",m="changeSelection",l="qx.ui.list.core.MSelectionHandling",k="one",j="_applyDragSelection",h="qx.data.Array",g="multi",f="selected",b="_applySelection",d="_applyQuickSelection",c="_applySelectionMode",a="additive";
qx.Mixin.define(l,{construct:function(){this._initSelectionManager();
this.initSelection(new qx.data.Array());
},properties:{selection:{check:h,event:m,apply:b,nullable:false,deferredInit:true},selectionMode:{check:[n,g,a,k],init:n,apply:c},dragSelection:{check:p,init:false,apply:j},quickSelection:{check:p,init:false,apply:d}},members:{_manager:null,__AV:false,__AW:false,_updateSelection:function(){if(this._manager==null){return;
}var r=this.getSelection();
var q=this.getModel();
this.__AW=true;

for(var i=r.getLength()-1;i>=0;i--){if(!q.contains(r.getItem(i))){r.removeAt(i);
}}this.__AW=false;
this._onChangeSelection();
},_initSelectionManager:function(){var self=this;
var s={isItemSelectable:function(t){return self._provider.isSelectable(t);
},styleSelectable:function(u,v,w){if(v!=f){return;
}
if(w){self._provider.styleSelectabled(u);
}else{self._provider.styleUnselectabled(u);
}}};
this._manager=new qx.ui.virtual.selection.Row(this.getPane(),s);
this._manager.attachMouseEvents(this.getPane());
this._manager.attachKeyEvents(this);
this._manager.addListener(m,this._onManagerChangeSelection,this);
this._manager._applyDefaultSelection();
},_applySelection:function(x,y){x.addListener(o,this._onChangeSelection,this);

if(y!=null){y.removeListener(o,this._onChangeSelection,this);
}this._onChangeSelection();
},_applySelectionMode:function(z,A){this._manager.setMode(z);
},_applyDragSelection:function(B,C){this._manager.setDrag(B);
},_applyQuickSelection:function(D,E){this._manager.setQuick(D);
},_onChangeSelection:function(e){if(this.__AW==true){return;
}this.__AV=true;
var G=this.getSelection();
var I=[];

for(var i=0;i<G.getLength();i++){var H=G.getItem(i);
var F=this.getModel().indexOf(H);
var J=this._reverseLookup(F);

if(J>=0){I.push(J);
}}
try{this._manager.replaceSelection(I);
}catch(e){this._manager.selectItem(I[I.length-1]);
}this.__AQ();
this.__AV=false;
},_onManagerChangeSelection:function(e){if(this.__AV==true){return;
}var K=e.getData();
var M=[];

for(var i=0;i<K.length;i++){M.push(this._getDataFromRow(K[i]));
}this.__AW=true;
var N=this.getSelection();

if(M.length>0){var L=[0,N.getLength()];
L=L.concat(M);
N.splice.apply(N,L);
}else{N.removeAll();
}this.__AW=false;
},__AQ:function(){var P=this.getSelection();
var O=P.toArray();
var Q=this._manager.getSelection();
qx.lang.Array.removeAll(O);

for(var i=0;i<Q.length;i++){O.push(this._getDataFromRow(Q[i]));
}P.length=O.length;
},_applyDefaultSelection:function(){if(this._manager!=null){this._manager._applyDefaultSelection();
}}},destruct:function(){this._manager.dispose();
this._manager=null;
}});
})();
(function(){var f="pane",d="scrollY",c="qx.ui.virtual.core.Scroller",b="update",a="scrollX";
qx.Class.define(c,{extend:qx.ui.core.scroll.AbstractScrollArea,construct:function(g,h,i,j){qx.ui.core.scroll.AbstractScrollArea.call(this);
this.__AX=new qx.ui.virtual.core.Pane(g,h,i,j);
this.__AX.addListener(b,this._computeScrollbars,this);
this.__AX.addListener(a,this._onScrollPaneX,this);
this.__AX.addListener(d,this._onScrollPaneY,this);
this._add(this.__AX,{row:0,column:0});
},properties:{width:{refine:true,init:null},height:{refine:true,init:null}},members:{__AX:null,getPane:function(){return this.__AX;
},_createChildControlImpl:function(k,l){if(k==f){return this.__AX;
}else{return qx.ui.core.scroll.AbstractScrollArea.prototype._createChildControlImpl.call(this,k);
}},getItemTop:function(m){throw new Error("The method 'getItemTop' is not implemented!");
},getItemBottom:function(n){throw new Error("The method 'getItemBottom' is not implemented!");
},getItemLeft:function(o){throw new Error("The method 'getItemLeft' is not implemented!");
},getItemRight:function(p){throw new Error("The method 'getItemRight' is not implemented!");
},_onScrollBarX:function(e){this.__AX.setScrollX(e.getData());
},_onScrollBarY:function(e){this.__AX.setScrollY(e.getData());
}},destruct:function(){this.__AX.dispose();
this.__AX=null;
}});
})();
(function(){var p="String",o="qx.data.Array",n="change",m="row-layer",j="group",h="changeModel",g="resize",f="_applyLabelOptions",d="_applyLabelPath",c="_applyGroupLabelOptions",E="filter",D="Integer",C="_applyModel",B="changeGroups",A="Boolean",z="sorter",y="_applyIconPath",x="_applyDelegate",w="changeDelegate",v="???",t="_applyRowHeight",u="virtual-list",r="_applyGroupLabelPath",s="_applyIconOptions",q="qx.ui.list.List";
qx.Class.define(q,{extend:qx.ui.virtual.core.Scroller,include:[qx.ui.list.core.MSelectionHandling],construct:function(F){qx.ui.virtual.core.Scroller.call(this,0,1,20,100);
this._init();
this.initGroups(new qx.data.Array());

if(F!=null){this.initModel(F);
}else{this.initModel(new qx.data.Array());
}this.initItemHeight();
},properties:{appearance:{refine:true,init:u},focusable:{refine:true,init:true},width:{refine:true,init:100},height:{refine:true,init:200},model:{check:o,apply:C,event:h,nullable:false,deferredInit:true},itemHeight:{check:D,init:25,apply:t,themeable:true},labelPath:{check:p,apply:d,nullable:true},iconPath:{check:p,apply:y,nullable:true},groupLabelPath:{check:p,apply:r,nullable:true},labelOptions:{apply:f,nullable:true},iconOptions:{apply:s,nullable:true},groupLabelOptions:{apply:c,nullable:true},delegate:{apply:x,event:w,init:null,nullable:true},autoGrouping:{check:A,init:true},groups:{check:o,event:B,nullable:false,deferredInit:true}},members:{_background:null,_provider:null,_layer:null,__nB:null,__AY:null,__Ba:null,__Bb:false,__Bc:false,__Bd:false,refresh:function(){this.__nQ();
},_createChildControlImpl:function(G,H){var I;

switch(G){case m:I=new qx.ui.virtual.layer.Row(null,null);
break;
}return I||qx.ui.virtual.core.Scroller.prototype._createChildControlImpl.call(this,G);
},_init:function(){this._provider=new qx.ui.list.provider.WidgetProvider(this);
this.__nB=[];
this.__AY=[];
this.__Ba={};
this.__Bb=false;
this.__Bc=false;
this.__Bd=false;
this.getPane().addListener(g,this._onResize,this);
this._initBackground();
this._initLayer();
},_initBackground:function(){this._background=this.getChildControl(m);
this.getPane().addLayer(this._background);
},_initLayer:function(){this._layer=this._provider.createLayer();
this.getPane().addLayer(this._layer);
},_getDataFromRow:function(J){var K=null;

if(this._isGroup(J)){K=this.getGroups().getItem(this._lookupGroup(J));
}else{K=this.getModel().getItem(this._lookup(J));
}
if(K!=null){return K;
}else{return null;
}},_getLookupTable:function(){return this.__nB;
},_lookup:function(L){return this.__nB[L];
},_lookupGroup:function(M){return this.__AY.indexOf(M);
},_reverseLookup:function(N){return this.__nB.indexOf(N);
},_isGroup:function(O){return this._lookup(O)==-1;
},_applyModel:function(P,Q){P.addListener(n,this._onModelChange,this);

if(Q!=null){Q.removeListener(n,this._onModelChange,this);
}this._provider.removeBindings();
this._onModelChange();
},_applyRowHeight:function(R,S){this.getPane().getRowConfig().setDefaultItemSize(R);
},_applyLabelPath:function(T,U){this._provider.setLabelPath(T);
},_applyIconPath:function(V,W){this._provider.setIconPath(V);
},_applyGroupLabelPath:function(X,Y){this._provider.setGroupLabelPath(X);
},_applyLabelOptions:function(ba,bb){this._provider.setLabelOptions(ba);
},_applyIconOptions:function(bc,bd){this._provider.setIconOptions(bc);
},_applyGroupLabelOptions:function(be,bf){this._provider.setGroupLabelOptions(be);
},_applyDelegate:function(bg,bh){this._provider.setDelegate(bg);
this.__nQ();
},_onResize:function(e){this.getPane().getColumnConfig().setItemSize(0,e.getData().width);
},_onModelChange:function(e){this.__nQ();
this._applyDefaultSelection();
},__Be:function(){this.getPane().getRowConfig().setItemCount(this.__nB.length);
this.getPane().fullUpdate();
},__nQ:function(){this.__nB=[];
this.__AY=[];
this.__Ba={};

if(this.isAutoGrouping()){this.getGroups().removeAll();
}var bi=this.getModel();

if(bi==null){return;
}this._runDelegateFilter(bi);
this._runDelegateSorter(bi);
this._runDelegateGroup(bi);
this._updateSelection();
this.__Be();
},_runDelegateFilter:function(bj){var bk=qx.util.Delegate.getMethod(this.getDelegate(),E);

for(var i=0,l=bj.length;i<l;++i){if(bk==null||bk(bj.getItem(i))){this.__nB.push(i);
}}},_runDelegateSorter:function(bl){if(this.__nB.length==0){return;
}var bm=qx.util.Delegate.getMethod(this.getDelegate(),z);

if(bm!=null){this.__nB.sort(function(a,b){return bm(bl.getItem(a),bl.getItem(b));
});
}},_runDelegateGroup:function(bn){var br=qx.util.Delegate.getMethod(this.getDelegate(),j);

if(br!=null){for(var i=0,l=this.__nB.length;i<l;++i){var bo=this.__nB[i];
var bq=this.getModel().getItem(bo);
var bp=br(bq);
this.__Bf(bp,bo);
}this.__nB=this.__Bg();
}},__Bf:function(bs,bt){if(bs==null){this.__Bd=true;
bs=v;
}var name=this.__Bh(bs);

if(this.__Ba[name]==null){this.__Ba[name]=[];

if(this.isAutoGrouping()){this.getGroups().push(bs);
}}this.__Ba[name].push(bt);
},__Bg:function(){this.__Bi();
var bx=[];
var bz=0;
var bv=this.getGroups();

for(var i=0;i<bv.getLength();i++){var bu=bv.getItem(i);
bx.push(-1);
this.__AY.push(bz);
bz++;
var by=this.__Bh(bu);
var bw=this.__Ba[by];

if(bw!=null){for(var k=0;k<bw.length;k++){bx.push(bw[k]);
bz++;
}}}return bx;
},__Bh:function(bA){var name=null;

if(!qx.lang.Type.isString(bA)){var bB=this.getGroups().indexOf(bA);
this.__Bc=true;
name=j;

if(bB==-1){name+=this.getGroups().getLength();
}else{name+=bB;
}}else{this.__Bb=true;
var name=bA;
}return name;
},__Bi:function(){if(this.__Bc&&this.__Bd||this.__Bc&&this.__Bb){throw new Error("GroupingTypeError: You can't mix 'Objects' and 'Strings' as"+" group identifier!");
}}},destruct:function(){this._background.dispose();
this._provider.dispose();
this._layer.dispose();
this._background=this._provider=this._layer=this.__nB=this.__AY=this.__Ba=null;
}});
})();
(function(){var v="name",u="open",t="qx.data.Array",s="model",r="change",q="count",p="avatar",o="status",n="changeBubble",m="changeModel",f="rgb(238, 243, 255)",l="row-layer",j="off",e="white",d="changeSelection",h="changeGroup",g="showcase.page.virtuallist.messenger.Roster",k="_applyModel",c="auto";
qx.Class.define(g,{extend:qx.ui.core.Widget,construct:function(){qx.ui.core.Widget.call(this);
var y=new qx.ui.layout.VBox();
this._setLayout(y);
var w=this.list=new qx.ui.list.List();
w.set({scrollbarX:j,scrollbarY:c,width:200,height:300,itemHeight:28,decorator:null,autoGrouping:false});
w.setDelegate(this);
this._add(w,{flex:1});
this.initGroups(w.getGroups());
this.initModel(new qx.data.Array());
this.initSelection(w.getSelection());
this.bind(s,w,s);
var x=w.getChildControl(l);
x.set({colorEven:e,colorOdd:f});
new qx.ui.virtual.behavior.Prefetch(w,{minLeft:0,maxLeft:0,minRight:0,maxRight:0,minAbove:600,maxAbove:800,minBelow:600,maxBelow:800}).set({interval:500});
},properties:{model:{check:t,event:m,apply:k,nullable:false,deferredInit:true},selection:{check:t,event:d,nullable:false,deferredInit:true},groups:{check:t,event:h,nullable:false,deferredInit:true}},members:{createItem:function(){return new showcase.page.virtuallist.messenger.Buddy();
},createGroupItem:function(){return new showcase.page.virtuallist.messenger.Group();
},bindItem:function(z,A,B){z.bindProperty(v,v,null,A,B);
z.bindProperty(p,p,null,A,B);
z.bindProperty(o,o,null,A,B);
},bindGroupItem:function(C,D,E){C.bindProperty(v,v,null,D,E);
C.bindProperty(q,q,null,D,E);
C.bindProperty(u,u,null,D,E);
C.bindPropertyReverse(u,u,null,D,E);
},filter:function(F){return this.__JE(F.getGroup()).isOpen();
},sorter:function(a,b){return a.getName()<b.getName()?-1:1;
},group:function(G){return this.__JE(G.getGroup());
},_applyModel:function(H,I){H.addListener(r,this.__JD,this);
H.addListener(n,this.__JD,this);

if(I!=null){I.removeListener(r,this.__JD,this);
I.removeListener(n,this.__JD,this);
}this.__JD();
},__JD:function(event){var M=this.getModel();
var L=this.getGroups();
var N={};

for(var i=0;i<L.getLength();i++){var K=L.getItem(i);
N[K.getName()]=0;
}
for(var i=0;i<M.getLength();i++){var K=M.getItem(i).getGroup();

if(N[K]==null){N[K]=1;
}else{N[K]+=1;
}}
for(var name in N){var J=N[name];
var K=this.__JE(name);
K.setCount(J);
}
if(event&&event.getType()=="changeBubble"){this.list.refresh();
}},__JE:function(name){var Q=this.getGroups();
var P=null;

for(var i=0;i<Q.getLength();i++){var O=Q.getItem(i);

if(name==O.getName()){P=O;
break;
}}
if(P==null){P=new showcase.page.virtuallist.messenger.GroupModel(name);
P.addListener("changeOpen",this.__JF,this);
Q.push(P);
}return P;
},__JF:function(event){this.list.refresh();
}}});
})();
(function(){var b="Integer",a="qx.ui.virtual.core.CellEvent";
qx.Class.define(a,{extend:qx.event.type.Mouse,properties:{row:{check:b,nullable:true},column:{check:b,nullable:true}},members:{init:function(c,d,e,f){d.clone(this);
this.setBubbles(false);
this.setRow(e);
this.setColumn(f);
}}});
})();
(function(){var a="qx.ui.virtual.core.ILayer";
qx.Interface.define(a,{members:{fullUpdate:function(b,c,d,e){this.assertArgumentsCount(arguments,6,6);
this.assertPositiveInteger(b);
this.assertPositiveInteger(c);
this.assertArray(d);
this.assertArray(e);
},updateLayerWindow:function(f,g,h,i){this.assertArgumentsCount(arguments,6,6);
this.assertPositiveInteger(f);
this.assertPositiveInteger(g);
this.assertArray(h);
this.assertArray(i);
},updateLayerData:function(){}}});
})();
(function(){var b="qx.ui.virtual.layer.Abstract",a="abstract";
qx.Class.define(b,{extend:qx.ui.core.Widget,type:a,implement:[qx.ui.virtual.core.ILayer],construct:function(){qx.ui.core.Widget.call(this);
this.__eI={};
},properties:{anonymous:{refine:true,init:true}},members:{__eI:null,__kw:null,__Aq:null,__Ar:null,__zo:null,__ph:null,getFirstRow:function(){return this.__Aq;
},getFirstColumn:function(){return this.__Ar;
},getRowSizes:function(){return this.__zo||[];
},getColumnSizes:function(){return this.__ph||[];
},syncWidget:function(){if(!this.getContentElement().getDomElement()){return;
}
if(this.__eI.fullUpdate||this.__eI.updateLayerWindow&&this.__eI.updateLayerData){this._fullUpdate.apply(this,this.__kw);
}else if(this.__eI.updateLayerWindow){this._updateLayerWindow.apply(this,this.__kw);
}else if(this.__eI.updateLayerData&&this.__zo){this._updateLayerData();
}
if(this.__eI.fullUpdate||this.__eI.updateLayerWindow){var c=this.__kw;
this.__Aq=c[0];
this.__Ar=c[1];
this.__zo=c[2];
this.__ph=c[3];
}this.__eI={};
},_updateLayerData:function(){this._fullUpdate(this.__Aq,this.__Ar,this.__zo,this.__ph);
},_fullUpdate:function(d,e,f,g){throw new Error("Abstract method '_fullUpdate' called!");
},_updateLayerWindow:function(h,i,j,k){this._fullUpdate(h,i,j,k);
},updateLayerData:function(){this.__eI.updateLayerData=true;
qx.ui.core.queue.Widget.add(this);
},fullUpdate:function(l,m,n,o){this.__kw=arguments;
this.__eI.fullUpdate=true;
qx.ui.core.queue.Widget.add(this);
},updateLayerWindow:function(p,q,r,s){this.__kw=arguments;
this.__eI.updateLayerWindow=true;
qx.ui.core.queue.Widget.add(this);
}},destruct:function(){this.__eI=this.__kw=this.__zo=this.__ph=null;
}});
})();
(function(){var a="qx.ui.virtual.cell.IWidgetCell";
qx.Interface.define(a,{members:{getCellWidget:function(b,c){},pool:function(d){},updateStates:function(e,f){},updateData:function(g,h){}}});
})();
(function(){var c="cell.states",b="qx.ui.virtual.cell.AbstractWidget",a="qx.event.type.Data";
qx.Class.define(b,{extend:qx.core.Object,implement:[qx.ui.virtual.cell.IWidgetCell],construct:function(){qx.core.Object.call(this);
this.__bL=[];
},events:{"created":a},members:{__bL:null,_createWidget:function(){throw new Error("abstract method call");
},updateData:function(d,e){throw new Error("abstract method call");
},updateStates:function(f,g){var j=f.getUserData(c);
if(j){var h=g||{};

for(var i in j){if(!h[i]){f.removeState(i);
}}}else{j={};
}if(g){for(var i in g){if(!j.state){f.addState(i);
}}}f.setUserData(c,g);
},getCellWidget:function(k,l){var m=this.__AH();
this.updateStates(m,l);
this.updateData(m,k);
return m;
},pool:function(n){this.__bL.push(n);
},_cleanupPool:function(){var o=this.__bL.pop();

while(o){o.destroy();
o=this.__bL.pop();
}},__AH:function(){var p=this.__bL.pop();

if(p==null){p=this._createWidget();
this.fireDataEvent("created",p);
}return p;
}},destruct:function(){this.__bL=null;
}});
})();
(function(){var b="_applyDelegate",a="qx.ui.virtual.cell.WidgetCell";
qx.Class.define(a,{extend:qx.ui.virtual.cell.AbstractWidget,properties:{delegate:{apply:b,init:null,nullable:true}},members:{_applyDelegate:function(c,d){this._cleanupPool();
},_createWidget:function(){var e=this.getDelegate();

if(e!=null&&e.createWidget!=null){return e.createWidget();
}else{return new qx.ui.core.Widget();
}},updateData:function(f,g){for(var h in g){if(qx.Class.hasProperty(f.constructor,h)){qx.util.PropertyUtil.setUserValue(f,h,g[h]);
}else{throw new Error("Can't update data! The key '"+h+"' is not a Property!");
}}}}});
})();
(function(){var v="appear",u="qx.ui.virtual.core.CellEvent",t="update",s="change",r="qx.event.type.Data",q="qx.ui.virtual.core.Pane",p="resize",o="click",n="scrollX",m="dblclick",d="contextmenu",l="__zh",h="cellClick",c="cellContextmenu",b="qx.event.type.Event",g="__zm",f="__zg",j="cellDblclick",a="scrollY",k="__zl";
qx.Class.define(q,{extend:qx.ui.core.Widget,construct:function(w,x,y,z){qx.ui.core.Widget.call(this);
this.__zg=new qx.ui.virtual.core.Axis(y,w);
this.__zh=new qx.ui.virtual.core.Axis(z,x);
this.__rG=0;
this.__rF=0;
this.__zi=0;
this.__zj=0;
this.__zk={};
this.__eI={};
this.__zl=new qx.ui.container.Composite();
this.__zl.setUserBounds(0,0,0,0);
this._add(this.__zl);
this.__zm=[];
this.__zg.addListener(s,this.fullUpdate,this);
this.__zh.addListener(s,this.fullUpdate,this);
this.addListener(p,this._onResize,this);
this.addListenerOnce(v,this._onAppear,this);
this.addListener(o,this._onClick,this);
this.addListener(m,this._onDblclick,this);
this.addListener(d,this._onContextmenu,this);
},events:{cellClick:u,cellContextmenu:u,cellDblclick:u,update:b,scrollX:r,scrollY:r},properties:{width:{refine:true,init:400},height:{refine:true,init:300}},members:{__zg:null,__zh:null,__rG:null,__rF:null,__zi:null,__zj:null,__zk:null,__eI:null,__zl:null,__zm:null,__zn:null,__ph:null,__zo:null,getRowConfig:function(){return this.__zg;
},getColumnConfig:function(){return this.__zh;
},getChildren:function(){return [this.__zl];
},addLayer:function(A){this.__zm.push(A);
A.setUserBounds(0,0,0,0);
this.__zl.add(A);
},getLayers:function(){return this.__zm;
},getVisibleLayers:function(){var B=[];

for(var i=0;i<this.__zm.length;i++){var C=this.__zm[i];

if(C.isVisible()){B.push(C);
}}return B;
},getScrollMaxX:function(){var D=this.getBounds();

if(D){return Math.max(0,this.__zh.getTotalSize()-D.width);
}return 0;
},getScrollMaxY:function(){var E=this.getBounds();

if(E){return Math.max(0,this.__zg.getTotalSize()-E.height);
}return 0;
},setScrollY:function(F){var G=this.getScrollMaxY();

if(F<0){F=0;
}else if(F>G){F=G;
}
if(this.__rG!==F){var H=this.__rG;
this.__rG=F;
this._deferredUpdateScrollPosition();
this.fireDataEvent(a,F,H);
}},getScrollY:function(){return this.__rG;
},setScrollX:function(I){var J=this.getScrollMaxX();

if(I<0){I=0;
}else if(I>J){I=J;
}
if(I!==this.__rF){var K=this.__rF;
this.__rF=I;
this._deferredUpdateScrollPosition();
this.fireDataEvent(n,I,K);
}},getScrollX:function(){return this.__rF;
},getScrollSize:function(){return {width:this.__zh.getTotalSize(),height:this.__zg.getTotalSize()};
},scrollRowIntoView:function(L){var O=this.getBounds();

if(!O){this.addListenerOnce(v,function(){qx.event.Timer.once(function(){this.scrollRowIntoView(L);
},this,0);
},this);
return;
}var P=this.__zg.getItemPosition(L);
var N=P+this.__zg.getItemSize(L);
var M=this.getScrollY();

if(P<M){this.setScrollY(P);
}else if(N>M+O.height){this.setScrollY(N-O.height);
}},scrollColumnIntoView:function(Q){var T=this.getBounds();

if(!T){this.addListenerOnce(v,function(){qx.event.Timer.once(function(){this.scrollColumnIntoView(Q);
},this,0);
},this);
return;
}var S=this.__zh.getItemPosition(Q);
var R=S+this.__zh.getItemSize(Q);
var U=this.getScrollX();

if(S<U){this.setScrollX(S);
}else if(R>U+T.width){this.setScrollX(R-T.width);
}},scrollCellIntoView:function(V,W){var X=this.getBounds();

if(!X){this.addListenerOnce(v,function(){qx.event.Timer.once(function(){this.scrollCellIntoView(V,W);
},this,0);
},this);
return;
}this.scrollColumnIntoView(V);
this.scrollRowIntoView(W);
},getCellAtPosition:function(Y,ba){var bb,bc;
var bd=this.getContentLocation();

if(!bd||ba<bd.top||ba>=bd.bottom||Y<bd.left||Y>=bd.right){return null;
}bb=this.__zg.getItemAtPosition(this.getScrollY()+ba-bd.top);
bc=this.__zh.getItemAtPosition(this.getScrollX()+Y-bd.left);

if(!bb||!bc){return null;
}return {row:bb.index,column:bc.index};
},prefetchX:function(be,bf,bg,bh){var bi=this.getVisibleLayers();

if(bi.length==0){return;
}var bk=this.getBounds();

if(!bk){return;
}var bl=this.__rF+bk.width;
var bm=this.__zj-bl;

if(this.__rF-this.__zk.left<Math.min(this.__rF,be)||this.__zk.right-bl<Math.min(bm,bg)){var bn=Math.min(this.__rF,bf);
var bj=Math.min(bm,bh);
this._setLayerWindow(bi,this.__rF-bn,this.__rG,bk.width+bn+bj,bk.height,false);
}},prefetchY:function(bo,bp,bq,br){var bs=this.getVisibleLayers();

if(bs.length==0){return;
}var bv=this.getBounds();

if(!bv){return;
}var bt=this.__rG+bv.height;
var bu=this.__zi-bt;

if(this.__rG-this.__zk.top<Math.min(this.__rG,bo)||this.__zk.bottom-bt<Math.min(bu,bq)){var bx=Math.min(this.__rG,bp);
var bw=Math.min(bu,br);
this._setLayerWindow(bs,this.__rF,this.__rG-bx,bv.width,bv.height+bx+bw,false);
}},_onResize:function(){if(this.getContainerElement().getDomElement()){this.__zn=true;
this._updateScrollPosition();
this.__zn=null;
this.fireEvent(t);
}},_onAppear:function(){this.fullUpdate();
},_onClick:function(e){this.__zp(e,h);
},_onContextmenu:function(e){this.__zp(e,c);
},_onDblclick:function(e){this.__zp(e,j);
},__zp:function(e,by){var bz=this.getCellAtPosition(e.getDocumentLeft(),e.getDocumentTop());

if(!bz){return;
}this.fireNonBubblingEvent(by,qx.ui.virtual.core.CellEvent,[this,e,bz.row,bz.column]);
},syncWidget:function(){if(this.__eI._fullUpdate){this._fullUpdate();
}else if(this.__eI._updateScrollPosition){this._updateScrollPosition();
}this.__eI={};
},_setLayerWindow:function(bA,bB,top,bC,bD,bE){var bJ=this.__zg.getItemAtPosition(top);

if(bJ){var bL=bJ.index;
var bP=this.__zg.getItemSizes(bL,bD+bJ.offset);
var bK=qx.lang.Array.sum(bP);
var bR=top-bJ.offset;
var bO=top-bJ.offset+bK;
}else{var bL=0;
var bP=[];
var bK=0;
var bR=0;
var bO=0;
}var bN=this.__zh.getItemAtPosition(bB);

if(bN){var bH=bN.index;
var bG=this.__zh.getItemSizes(bH,bC+bN.offset);
var bM=qx.lang.Array.sum(bG);
var bQ=bB-bN.offset;
var bI=bB-bN.offset+bM;
}else{var bH=0;
var bG=[];
var bM=0;
var bQ=0;
var bI=0;
}this.__zk={top:bR,bottom:bO,left:bQ,right:bI};
this.__zl.setUserBounds(this.__zk.left-this.__rF,this.__zk.top-this.__rG,bM,bK);
this.__ph=bG;
this.__zo=bP;

for(var i=0;i<this.__zm.length;i++){var bF=this.__zm[i];
bF.setUserBounds(0,0,bM,bK);

if(bE){bF.fullUpdate(bL,bH,bP,bG);
}else{bF.updateLayerWindow(bL,bH,bP,bG);
}}},__zq:function(){if(this.__zn){return;
}var bS=this.getScrollSize();

if(this.__zi!==bS.height||this.__zj!==bS.width){this.__zi=bS.height;
this.__zj=bS.width;
this.fireEvent(t);
}},fullUpdate:function(){this.__eI._fullUpdate=1;
qx.ui.core.queue.Widget.add(this);
},isUpdatePending:function(){return !!this.__eI._fullUpdate;
},_fullUpdate:function(){var bT=this.getVisibleLayers();

if(bT.length==0){this.__zq();
return;
}
if(!this.getContainerElement().getDomElement()){return ;
}var bU=this.getBounds();
this._setLayerWindow(bT,this.__rF,this.__rG,bU.width,bU.height,true);
this.__zq();
},_deferredUpdateScrollPosition:function(){this.__eI._updateScrollPosition=1;
qx.ui.core.queue.Widget.add(this);
},_updateScrollPosition:function(){var bV=this.getVisibleLayers();

if(bV.length==0){this.__zq();
return;
}var bX=this.getBounds();

if(!bX){return ;
}var bW={top:this.__rG,bottom:this.__rG+bX.height,left:this.__rF,right:this.__rF+bX.width};

if(this.__zk.top<=bW.top&&this.__zk.bottom>=bW.bottom&&this.__zk.left<=bW.left&&this.__zk.right>=bW.right){this.__zl.setUserBounds(this.__zk.left-bW.left,this.__zk.top-bW.top,this.__zk.right-this.__zk.left,this.__zk.bottom-this.__zk.top);
}else{this._setLayerWindow(bV,this.__rF,this.__rG,bX.width,bX.height,false);
}this.__zq();
}},destruct:function(){this._disposeArray(g);
this._disposeObjects(f,l,k);
this.__zk=this.__eI=this.__ph=this.__zo=null;
}});
})();
(function(){var j="dropdown",i="list",h="open",g="close",f="String",e="changeModel",d="changeLabelOptions",c="_applyLabelOptions",b="_applyDelegate",a="_applyLabelPath",I="qx.data.Array",H="qx.ui.form.core.AbstractVirtualBox",G="changeIconOptions",F="blur",E="Down",D="Integer",C="_applyModel",B="Up",A="",z="_applyMaxListHeight",q="middle",r="_applyIconPath",o="resize",p="changeDelegate",m="changeLabelPath",n="keypress",k="changeIconPath",l="_applyRowHeight",s="click",t="abstract",v="Number",u="Escape",x="_applyIconOptions",w=".",y="[0]";
qx.Class.define(H,{extend:qx.ui.core.Widget,include:qx.ui.form.MForm,implement:qx.ui.form.IForm,type:t,construct:function(J){qx.ui.core.Widget.call(this);
var K=new qx.ui.layout.HBox();
this._setLayout(K);
K.setAlignY(q);
this.addListener(n,this._handleKeyboard,this);
this.addListener(s,this._handleMouse,this);
this.addListener(F,this._onBlur,this);
this.addListener(o,this._onResize,this);
this._createChildControl(j);

if(J!=null){this.initModel(J);
}else{this.initModel(new qx.data.Array());
}},properties:{focusable:{refine:true,init:true},width:{refine:true,init:120},model:{check:I,apply:C,event:e,nullable:false,deferredInit:true},delegate:{apply:b,event:p,init:null,nullable:true},labelPath:{check:f,apply:a,event:m,nullable:true},labelOptions:{apply:c,event:d,nullable:true},iconPath:{check:f,event:k,apply:r,nullable:true},iconOptions:{apply:x,event:G,nullable:true},itemHeight:{check:D,init:25,apply:l,themeable:true},maxListHeight:{check:v,apply:z,nullable:true,init:200}},members:{_forwardStates:{focused:true},refresh:function(){this.getChildControl(j).getChildControl(i).refresh();
qx.ui.core.queue.Widget.add(this);
},open:function(){this._beforeOpen();
this.getChildControl(j).open();
},close:function(){this._beforeClose();
this.getChildControl(j).close();
},toggle:function(){var L=this.getChildControl(j);

if(L.isVisible()){this.close();
}else{this.open();
}},_createChildControlImpl:function(M,N){var O;

switch(M){case j:O=new qx.ui.form.core.VirtualDropDownList(this);
break;
}return O||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,M,N);
},_beforeOpen:function(){},_beforeClose:function(){},_getAction:function(event){var P=event.getKeyIdentifier();
var R=this.getChildControl(j).isVisible();
var Q=this._isModifierPressed(event);

if(!R&&!Q&&(P===E||P===B)){return h;
}else if(R&&!Q&&P===u){return g;
}else{return null;
}},_getBindPath:function(S,T){var U=S+y;

if(T!=null&&T!=A){U+=w+T;
}return U;
},_isModifierPressed:function(event){var X=event.isAltPressed();
var Y=event.isCtrlOrCommandPressed();
var V=event.isShiftPressed();
var W=event.isMetaPressed();
return (X||Y||V||W);
},_onBlur:function(event){this.close();
},_handleKeyboard:function(event){var ba=this._getAction(event);
var bb=this.getChildControl(j).isVisible();

switch(ba){case h:this.open();
break;
case g:this.close();
break;
default:if(bb){this.getChildControl(j)._handleKeyboard(event);
}break;
}},_handleMouse:function(event){},_onResize:function(event){this.getChildControl(j).setMinWidth(event.getData().width);
},_applyModel:function(bc,bd){this.getChildControl(j).getChildControl(i).setModel(bc);
qx.ui.core.queue.Widget.add(this);
},_applyDelegate:function(be,bf){this.getChildControl(j).getChildControl(i).setDelegate(be);
},_applyLabelPath:function(bg,bh){this.getChildControl(j).getChildControl(i).setLabelPath(bg);
qx.ui.core.queue.Widget.add(this);
},_applyLabelOptions:function(bi,bj){this.getChildControl(j).getChildControl(i).setLabelOptions(bi);
qx.ui.core.queue.Widget.add(this);
},_applyIconPath:function(bk,bl){this.getChildControl(j).getChildControl(i).setIconPath(bk);
qx.ui.core.queue.Widget.add(this);
},_applyIconOptions:function(bm,bn){this.getChildControl(j).getChildControl(i).setIconOptions(bm);
qx.ui.core.queue.Widget.add(this);
},_applyRowHeight:function(bo,bp){this.getChildControl(j).getChildControl(i).setRowHeight(bo);
},_applyMaxListHeight:function(bq,br){this.getChildControl(j).getChildControl(i).setMaxHeight(bq);
}}});
})();
(function(){var f="cell.empty",e="cell.column",d="updated",c="cell.row",b="qx.event.type.Event",a="qx.ui.virtual.layer.WidgetCell";
qx.Class.define(a,{extend:qx.ui.virtual.layer.Abstract,include:[qx.ui.core.MChildrenHandling],construct:function(g){qx.ui.virtual.layer.Abstract.call(this);
this.setZIndex(2);
this._cellProvider=g;
this.__AG=[];
},properties:{anonymous:{refine:true,init:false}},events:{updated:b},members:{__AG:null,getRenderedCellWidget:function(h,j){var k=this.getColumnSizes().length;
var p=this.getRowSizes().length;
var o=this.getFirstRow();
var n=this.getFirstColumn();

if(h<o||h>=o+p||j<n||j>=n+k){return null;
}var m=(j-n)+(h-o)*k;
var l=this._getChildren()[m];

if(l.getUserData(f)){return null;
}else{return l;
}},_getSpacer:function(){var q=this.__AG.pop();

if(!q){q=new qx.ui.core.Spacer();
q.setUserData(f,1);
}return q;
},_activateNotEmptyChild:function(r){var s=qx.ui.core.FocusHandler.getInstance().getActiveWidget();
if(s==r||qx.ui.core.Widget.contains(r,s)){var t=this._getChildren();

for(var i=t.length-1;i>=0;i--){if(!t[i].getUserData(f)){t[i].activate();
break;
}}}},_fullUpdate:function(u,v,w,z){var B=this._cellProvider;
var F=this._getChildren();

for(var i=0;i<F.length;i++){var D=F[i];

if(D.getUserData(f)){this.__AG.push(D);
}else{this._activateNotEmptyChild(D);
B.poolCellWidget(D);
}}this._removeAll();
var top=0;
var G=0;

for(var y=0;y<w.length;y++){for(var x=0;x<z.length;x++){var E=u+y;
var C=v+x;
var A=B.getCellWidget(E,C)||this._getSpacer();
A.setUserBounds(G,top,z[x],w[y]);
A.setUserData(c,E);
A.setUserData(e,C);
this._add(A);
G+=z[x];
}top+=w[y];
G=0;
}this.fireEvent(d);
},_updateLayerWindow:function(H,I,J,K){var W=H+J.length-1;
var N=I+K.length-1;
var S={firstRow:Math.max(H,this.getFirstRow()),lastRow:Math.min(W,this._lastRow),firstColumn:Math.max(I,this.getFirstColumn()),lastColumn:Math.min(N,this._lastColumn)};
this._lastColumn=N;
this._lastRow=W;

if(S.firstRow>S.lastRow||S.firstColumn>S.lastColumn){return this._fullUpdate(H,I,J,K);
}var X=this._getChildren();
var L=this.getColumnSizes().length;
var U=[];
var R={};

for(var Y=H;Y<=W;Y++){U[Y]=[];

for(var Q=I;Q<=N;Q++){if(Y>=S.firstRow&&Y<=S.lastRow&&Q>=S.firstColumn&&Q<=S.lastColumn){var x=Q-this.getFirstColumn();
var y=Y-this.getFirstRow();
var M=y*L+x;
U[Y][Q]=X[M];
R[M]=true;
}}}var T=this._cellProvider;
var X=this._getChildren();

for(var i=0;i<X.length;i++){if(!R[i]){var V=X[i];

if(V.getUserData(f)){this.__AG.push(V);
}else{this._activateNotEmptyChild(V);
T.poolCellWidget(V);
}}}this._removeAll();
var top=0;
var O=0;

for(var y=0;y<J.length;y++){for(var x=0;x<K.length;x++){var Y=H+y;
var Q=I+x;
var P=U[Y][Q]||T.getCellWidget(Y,Q)||this._getSpacer();
P.setUserBounds(O,top,K[x],J[y]);
P.setUserData(c,Y);
P.setUserData(e,Q);
this._add(P);
O+=K[x];
}top+=J[y];
O=0;
}this.fireEvent(d);
}},destruct:function(){var ba=this._getChildren();

for(var i=0;i<ba.length;i++){ba[i].dispose();
}this._cellProvider=this.__AG=null;
}});
})();
(function(){var s="textfield",r="value",q="button",p="inner",o="change",n="dropdown",m="select",k="Function",j="Enter",h="list",c="virtual-combobox",g="_applyValue",f="click",b="single",a="changeValue",e="qx.ui.form.VirtualComboBox",d="converter";
qx.Class.define(e,{extend:qx.ui.form.core.AbstractVirtualBox,implement:[qx.ui.form.IStringForm],construct:function(t){qx.ui.form.core.AbstractVirtualBox.call(this,t);
var u=this._createChildControl(s);
this._createChildControl(q);
var v=this.getChildControl(n);
v.getChildControl(h).setSelectionMode(b);
this.__it=v.getSelection();
this.__it.addListener(o,this.__HR,this);
this.bind(r,u,r);
u.bind(r,this,r);
},properties:{appearance:{refine:true,init:c},width:{refine:true,init:120},value:{nullable:true,event:a,apply:g},defaultFormat:{check:k,init:null,nullable:true}},members:{__HP:null,__HQ:null,__it:null,__AV:null,getTextSelection:function(){return this.getChildControl(s).getTextSelection();
},getTextSelectionLength:function(){return this.getChildControl(s).getTextSelectionLength();
},setTextSelection:function(w,x){this.getChildControl(s).setTextSelection(w,x);
},clearTextSelection:function(){this.getChildControl(s).clearTextSelection();
},selectAllText:function(){this.getChildControl(s).selectAllText();
},resetAllTextSelection:function(){this.clearTextSelection();
this.selectAllText();
},tabFocus:function(){var y=this.getChildControl(s);
y.getFocusElement().focus();
y.selectAllText();
},focus:function(){qx.ui.form.core.AbstractVirtualBox.prototype.focus.call(this);
this.getChildControl(s).getFocusElement().focus();
},_createChildControlImpl:function(z,A){var B;

switch(z){case s:B=new qx.ui.form.TextField();
B.setFocusable(false);
B.addState(p);
this._add(B,{flex:1});
break;
case q:B=new qx.ui.form.Button();
B.setFocusable(false);
B.setKeepActive(true);
B.addState(p);
this._add(B);
break;
}return B||qx.ui.form.core.AbstractVirtualBox.prototype._createChildControlImpl.call(this,z,A);
},_beforeOpen:function(){this.__HS();
},_handleKeyboard:function(event){var C=this._getAction(event);

switch(C){case m:this.setValue(this.getChildControl(s).getValue());
break;
default:qx.ui.form.core.AbstractVirtualBox.prototype._handleKeyboard.call(this,event);
break;
}},_getAction:function(event){var D=event.getKeyIdentifier();
var F=this.getChildControl(n).isVisible();
var E=this._isModifierPressed(event);

if(!F&&!E&&D===j){return m;
}else{return qx.ui.form.core.AbstractVirtualBox.prototype._getAction.call(this,event);
}},_handleMouse:function(event){qx.ui.form.core.AbstractVirtualBox.prototype._handleMouse.call(this,event);
var G=event.getType();

if(G!==f){return;
}var H=event.getTarget();

if(H==this.getChildControl(q)){this.toggle();
}else{this.close();
}},__HR:function(event){if(this.__AV==true){return;
}var I=this.__it.getItem(0);
I=this.__kf(I);
this.setValue(I);
},_applyValue:function(J,K){},__HS:function(){var N=this.getValue();
var M=this.getChildControl("dropdown");
var L=M.getSelection();

if(this.__kf(L.getItem(0))!==N){this.__AV=true;
L.removeAll();
this.__AV=false;
if(N==null||N==""){return;
}var R=this.getModel();
var Q=M.getChildControl("list")._getLookupTable();

for(var i=0,l=Q.length;i<l;i++){var O=R.getItem(Q[i]);
var P=this.__kf(O);

if(P&&P.indexOf(N)==0){M.setPreselected(O);
break;
}}}},__kf:function(S){var U=this.getLabelOptions();
var T=this.getDefaultFormat();
var W=this.getLabelPath();
var V=null;

if(W!=null){V=qx.data.SingleValueBinding.getValueFromObject(S,W);
}else if(qx.lang.Type.isString(S)){V=S;
}var X=qx.util.Delegate.getMethod(U,d);

if(X!=null){V=X(V);
}
if(V!=null&&T!=null){V=T(qx.lang.String.stripTags(V));
}return V;
}},destruct:function(){var Y=this.getChildControl(s);
this.removeAllBindings();
Y.removeAllBindings();
this.__it.removeListener(o,this.__HR,this);
this.__it=null;
}});
})();
(function(){var n="list",m="change",l="Invalid parameter 'target'!",k="changeModel",j="mouseup",h="one",g="Enter",f="changeDelegate",e="qx.data.Array",d="changeVisibility",a="qx.ui.form.core.VirtualDropDownList",c="_applySelection",b="changeSelection";
qx.Class.define(a,{extend:qx.ui.popup.Popup,construct:function(o){qx.core.Assert.assertNotNull(o,l);
qx.core.Assert.assertNotUndefined(o,l);
qx.core.Assert.assertInterface(o,qx.ui.form.core.AbstractVirtualBox,l);
qx.ui.popup.Popup.call(this,new qx.ui.layout.VBox());
this._target=o;
this._createChildControl(n);
this.addListener(d,this.__AO,this);
this.initSelection(new qx.data.Array());
},properties:{autoHide:{refine:true,init:false},keepActive:{refine:true,init:true},selection:{check:e,event:b,apply:c,nullable:false,deferredInit:true}},members:{_target:null,_preselected:null,__AM:false,__AN:false,open:function(){this.placeToWidget(this._target,true);
this.show();
},close:function(){this.hide();
},setPreselected:function(p){this._preselected=p;
this.__AN=true;
var q=this.getChildControl(n).getSelection();
this.__AQ(new qx.data.Array([p]),q);
this.__AN=false;
},_createChildControlImpl:function(r,s){var t;

switch(r){case n:t=new qx.ui.list.List().set({focusable:false,keepFocus:true,height:null,width:null,maxHeight:this._target.getMaxListHeight(),selectionMode:h,quickSelection:true});
t.getSelection().addListener(m,this._onListChangeSelection,this);
t.addListener(j,this._handleMouse,this);
t.addListener(k,this._onChangeModel,this);
t.addListener(f,this._onChangeDelegate,this);
this.add(t,{flex:1});
break;
}return t||qx.ui.popup.Popup.prototype._createChildControlImpl.call(this,r,s);
},_handleKeyboard:function(event){if(this.isVisible()&&event.getKeyIdentifier()===g){this.__AP();
return;
}var u=event.clone();
u.setTarget(this.getChildControl(n));
u.setBubbles(false);
this.getChildControl(n).dispatchEvent(u);
},_handleMouse:function(event){this.__AP();
},__b:function(event){if(this.__AM){return;
}var v=this.getSelection();
var w=this.getChildControl(n).getSelection();
this.__AN=true;
this.__AQ(v,w);
this.__AN=false;
this.__AM=true;
this.__AQ(w,v);
this.__AM=false;
},_onListChangeSelection:function(event){if(this.__AN){return;
}var x=this.getChildControl(n).getSelection();

if(this.isVisible()){this.setPreselected(x.getItem(0));
}else{this.__AM=true;
this.__AQ(x,this.getSelection());
this.__AM=false;
}},__AO:function(event){if(this.isVisible()){if(this._preselected==null){var y=this.getSelection();
var z=this.getChildControl("list").getSelection();
this.__AQ(y,z);
}this.__AR();
}else{this.setPreselected(null);
}},_onChangeModel:function(event){this.getSelection().removeAll();
},_onChangeDelegate:function(event){this.getSelection().removeAll();
},_applySelection:function(A,B){A.addListener(m,this.__b,this);

if(B!=null){B.removeListener(m,this.__b,this);
}this.__AQ(A,this.getChildControl(n).getSelection(A));
},__AP:function(){if(this._preselected!=null){var C=this.getSelection();
C.splice(0,1,this._preselected);
this._preselected=null;
this.close();
}},__AQ:function(D,E){if(D.equals(E)){return;
}
if(D.getLength()<=0){E.removeAll();
}else{var F=E.toArray();
qx.lang.Array.removeAll(F);

for(var i=0;i<D.getLength();i++){F.push(D.getItem(i));
}E.length=F.length;
var G=E.getLength()-1;
E.splice(G,1,E.getItem(G));
}},__AR:function(){this.__AS();
this.__AT();
},__AS:function(){var H=this._target.getBounds().width;
this.setWidth(H);
},__AT:function(){var I=this.__AU();
var L=this._target.getMaxListHeight();
var J=this.getChildControl("list");
var K=J.getPane().getRowConfig().getTotalSize();

if(L==null||K<L){L=K;
}
if(L>I){J.setMaxHeight(I);
}else if(L<I){J.setMaxHeight(L);
}},__AU:function(){var M=this.getLayoutLocation(this._target);
var O=qx.bom.Viewport.getHeight();
var P=M.top;
var N=O-M.bottom;
return P>N?P:N;
}}});
})();
(function(){var i="mouseup",h="mousedown",g="losecapture",f="mouseover",e="mousemove",d="removeItem",c="keypress",b="addItem",a="qx.ui.virtual.selection.Abstract";
qx.Class.define(a,{extend:qx.ui.core.selection.Abstract,construct:function(j,k){qx.ui.core.selection.Abstract.call(this);
this._pane=j;
this._delegate=k||{};
},members:{_isSelectable:function(l){return this._delegate.isItemSelectable?this._delegate.isItemSelectable(l):true;
},_styleSelectable:function(m,n,o){if(this._delegate.styleSelectable){this._delegate.styleSelectable(m,n,o);
}},attachMouseEvents:function(){var p=this._pane.getContainerElement();
p.addListener(h,this.handleMouseDown,this);
p.addListener(i,this.handleMouseUp,this);
p.addListener(f,this.handleMouseOver,this);
p.addListener(e,this.handleMouseMove,this);
p.addListener(g,this.handleLoseCapture,this);
},detatchMouseEvents:function(){var q=this._pane.getContainerElement();
q.removeListener(h,this.handleMouseDown,this);
q.removeListener(i,this.handleMouseUp,this);
q.removeListener(f,this.handleMouseOver,this);
q.removeListener(e,this.handleMouseMove,this);
q.removeListener(g,this.handleLoseCapture,this);
},attachKeyEvents:function(r){r.addListener(c,this.handleKeyPress,this);
},detachKeyEvents:function(s){s.removeListener(c,this.handleKeyPress,this);
},attachListEvents:function(t){t.addListener(b,this.handleAddItem,this);
t.addListener(d,this.handleRemoveItem,this);
},detachListEvents:function(u){u.removeListener(b,this.handleAddItem,this);
u.removeListener(d,this.handleRemoveItem,this);
},_capture:function(){this._pane.capture();
},_releaseCapture:function(){this._pane.releaseCapture();
},_getScroll:function(){return {left:this._pane.getScrollX(),top:this._pane.getScrollY()};
},_scrollBy:function(v,w){this._pane.setScrollX(this._pane.getScrollX()+v);
this._pane.setScrollY(this._pane.getScrollY()+w);
},_getLocation:function(){var x=this._pane.getContentElement().getDomElement();
return x?qx.bom.element.Location.get(x):null;
},_getDimension:function(){return this._pane.getInnerSize();
}},destruct:function(){this._pane=this._delegate=null;
}});
})();
(function(){var d="Color",c="_applyColorOdd",b="_applyColorEven",a="qx.ui.virtual.layer.AbstractBackground";
qx.Class.define(a,{extend:qx.ui.virtual.layer.Abstract,construct:function(e,f){qx.ui.virtual.layer.Abstract.call(this);

if(e){this.setColorEven(e);
}
if(f){this.setColorOdd(f);
}this.__Bj={};
this.__Bk={};
},properties:{colorEven:{nullable:true,check:d,apply:b,themeable:true},colorOdd:{nullable:true,check:d,apply:c,themeable:true}},members:{__Bl:null,__Bm:null,__Bj:null,__Bk:null,setColor:function(g,h){if(h){this.__Bj[g]=qx.theme.manager.Color.getInstance().resolve(h);
}else{delete (this.__Bj[g]);
}},clearCustomColors:function(){this.__Bj={};
this.updateLayerData();
},getColor:function(i){var j=this.__Bj[i];

if(j){return j;
}else{return i%2==0?this.__Bl:this.__Bm;
}},_applyColorEven:function(k,l){if(k){this.__Bl=qx.theme.manager.Color.getInstance().resolve(k);
}else{this.__Bl=null;
}this.updateLayerData();
},_applyColorOdd:function(m,n){if(m){this.__Bm=qx.theme.manager.Color.getInstance().resolve(m);
}else{this.__Bm=null;
}this.updateLayerData();
},setBackground:function(o,p){if(p){this.__Bk[o]=qx.theme.manager.Decoration.getInstance().resolve(p);
}else{delete (this.__Bk[o]);
}this.updateLayerData();
},getBackground:function(q){return this.__Bk[q];
}},destruct:function(){this.__Bj=this.__Bk=null;
}});
})();
(function(){var k="scroll",j="scrollbar-x",i="scrollbar-y",h="__ki",g="_applyInterval",f="appear",e="interval",d="qx.ui.virtual.behavior.Prefetch",c="_applyScroller",b="qx.ui.virtual.core.Scroller",a="Integer";
qx.Class.define(d,{extend:qx.core.Object,construct:function(l,m){qx.core.Object.call(this);
this.setPrefetchX(m.minLeft,m.maxLeft,m.minRight,m.maxRight);
this.setPrefetchY(m.minAbove,m.maxAbove,m.minBelow,m.maxBelow);
this.__ki=new qx.event.Timer(this.getInterval());
this.__ki.addListener(e,this._onInterval,this);

if(l){this.setScroller(l);
}},properties:{scroller:{check:b,nullable:true,init:null,apply:c},interval:{check:a,init:200,apply:g}},members:{__Ie:null,__If:null,__ki:null,__Ig:null,__Ih:null,setPrefetchX:function(n,o,p,q){this.__Ie=[n,o,p,q];
},setPrefetchY:function(r,s,t,u){this.__If=[r,s,t,u];
},_onInterval:function(){var v=this.__Ie;

if(v[1]&&v[3]){this.getScroller().getPane().prefetchX(v[0],v[1],v[2],v[3]);
qx.ui.core.queue.Manager.flush();
}var w=this.__If;

if(w[1]&&w[3]){this.getScroller().getPane().prefetchY(w[0],w[1],w[2],w[3]);
qx.ui.core.queue.Manager.flush();
}},_applyScroller:function(x,y){if(y){if(this.__Ig){y.getChildControl(j).removeListenerById(this.__Ig);
}
if(this.__Ih){y.getChildControl(i).removeListenerById(this.__Ih);
}}
if(x){if(!x.getContainerElement().getDomElement()){this.__ki.stop();
x.addListenerOnce(f,this.__ki.start,this.__ki);
}else{this.__ki.restart();
}this.__Ig=x.getChildControl(j).addListener(k,this.__ki.restart,this.__ki);
this.__Ih=x.getChildControl(i).addListener(k,this.__ki.restart,this.__ki);
}else{this.__ki.stop();
}},_applyInterval:function(z,A){this.__ki.setInterval(z);
}},destruct:function(){this.setScroller(null);
this.__Ie=this.__If=null;
this._disposeObjects(h);
}});
})();
(function(){var d="qx.ui.virtual.selection.Row",c="above",b="under",a="one";
qx.Class.define(d,{extend:qx.ui.virtual.selection.Abstract,members:{_getItemCount:function(){return this._pane.getRowConfig().getItemCount();
},_getSelectableFromMouseEvent:function(event){var e=this._pane.getCellAtPosition(event.getDocumentLeft(),event.getDocumentTop());

if(!e){return null;
}return this._isSelectable(e.row)?e.row:null;
},getSelectables:function(f){var g=[];

for(var i=0,l=this._getItemCount();i<l;i++){if(this._isSelectable(i)){g.push(i);
}}return g;
},_getSelectableRange:function(h,j){var k=[];
var n=Math.min(h,j);
var m=Math.max(h,j);

for(var i=n;i<=m;i++){if(this._isSelectable(i)){k.push(i);
}}return k;
},_getFirstSelectable:function(){var o=this._getItemCount();

for(var i=0;i<o;i++){if(this._isSelectable(i)){return i;
}}return null;
},_getLastSelectable:function(){var p=this._getItemCount();

for(var i=p-1;i>=0;i--){if(this._isSelectable(i)){return i;
}}return null;
},_getRelatedSelectable:function(q,r){if(r==c){var t=q-1;
var s=0;
var u=-1;
}else if(r==b){var t=q+1;
var s=this._getItemCount()-1;
var u=1;
}else{return null;
}
for(var i=t;i!==s+u;i+=u){if(this._isSelectable(i)){return i;
}}return null;
},_getPage:function(v,w){if(w){return this._getFirstSelectable();
}else{return this._getLastSelectable();
}},_selectableToHashCode:function(x){return x;
},_scrollItemIntoView:function(y){this._pane.scrollRowIntoView(y);
},_getSelectableLocationX:function(z){return {left:0,right:this._pane.getColumnConfig().getTotalSize()-1};
},_getSelectableLocationY:function(A){var D=this._pane.getRowConfig();
var C=D.getItemPosition(A);
var B=C+D.getItemSize(A)-1;
return {top:C,bottom:B};
},_applyDefaultSelection:function(){if(this.getMode()===a&&this.isSelectionEmpty()){var E=this._getFirstSelectable();

if(E!=null){this.selectItem(E);
}}}}});
})();
(function(){var e="change",d="qx.event.type.Event",c="qx.ui.virtual.core.Axis";
qx.Class.define(c,{extend:qx.core.Object,construct:function(f,g){qx.core.Object.call(this);
this.itemCount=g;
this.defaultItemSize=f;
this.customSizes={};
},events:{"change":d},members:{__zr:null,getDefaultItemSize:function(){return this.defaultItemSize;
},setDefaultItemSize:function(h){if(this.defaultItemSize!==h){this.defaultItemSize=h;
this.__zr=null;
this.fireNonBubblingEvent(e);
}},getItemCount:function(){return this.itemCount;
},setItemCount:function(j){if(this.itemCount!==j){this.itemCount=j;
this.__zr=null;
this.fireNonBubblingEvent(e);
}},setItemSize:function(k,l){if(this.customSizes[k]==l){return;
}
if(l===null){delete this.customSizes[k];
}else{this.customSizes[k]=l;
}this.__zr=null;
this.fireNonBubblingEvent(e);
},getItemSize:function(m){return this.customSizes[m]||this.defaultItemSize;
},resetItemSizes:function(){this.customSizes={};
this.__zr=null;
this.fireNonBubblingEvent(e);
},__zs:function(){if(this.__zr){return this.__zr;
}var p=this.defaultItemSize;
var w=this.itemCount;
var r=[];

for(var t in this.customSizes){var n=parseInt(t,10);

if(n<w){r.push(n);
}}
if(r.length==0){var s=[{startIndex:0,endIndex:w-1,firstItemSize:p,rangeStart:0,rangeEnd:w*p-1}];
this.__zr=s;
return s;
}r.sort(function(a,b){return a>b?1:-1;
});
var s=[];
var o=0;

for(var i=0;i<r.length;i++){var n=r[i];

if(n>=w){break;
}var v=this.customSizes[n];
var q=n*p+o;
o+=v-p;
s[i]={startIndex:n,firstItemSize:v,rangeStart:q};

if(i>0){s[i-1].rangeEnd=q-1;
s[i-1].endIndex=n-1;
}}if(s[0].rangeStart>0){s.unshift({startIndex:0,endIndex:s[0].startIndex-1,firstItemSize:p,rangeStart:0,rangeEnd:s[0].rangeStart-1});
}var x=s[s.length-1];
var u=(w-x.startIndex-1)*p;
x.rangeEnd=x.rangeStart+x.firstItemSize+u-1;
x.endIndex=w-1;
this.__zr=s;
return s;
},__zt:function(y){var z=this.__zr||this.__zs();
var A=0;
var C=z.length-1;
while(true){var D=A+((C-A)>>1);
var B=z[D];

if(B.rangeEnd<y){A=D+1;
}else if(B.rangeStart>y){C=D-1;
}else{return B;
}}},getItemAtPosition:function(E){if(E<0||E>=this.getTotalSize()){return null;
}var G=this.__zt(E);
var I=G.rangeStart;
var F=G.startIndex;
var J=G.firstItemSize;

if(I+J>E){return {index:F,offset:E-I};
}else{var H=this.defaultItemSize;
return {index:F+1+Math.floor((E-I-J)/H),offset:(E-I-J)%H};
}},__zu:function(K){var L=this.__zr||this.__zs();
var M=0;
var O=L.length-1;
while(true){var P=M+((O-M)>>1);
var N=L[P];

if(N.endIndex<K){M=P+1;
}else if(N.startIndex>K){O=P-1;
}else{return N;
}}},getItemPosition:function(Q){if(Q<0||Q>=this.itemCount){return null;
}var R=this.__zu(Q);

if(R.startIndex==Q){return R.rangeStart;
}else{return R.rangeStart+R.firstItemSize+(Q-R.startIndex-1)*this.defaultItemSize;
}},getTotalSize:function(){var S=this.__zr||this.__zs();
return S[S.length-1].rangeEnd+1;
},getItemSizes:function(T,U){var V=this.customSizes;
var Y=this.defaultItemSize;
var X=0;
var W=[];
var i=0;

while(X<U){var ba=V[T++]||Y;
X+=ba;
W[i++]=ba;

if(T>=this.itemCount){break;
}}return W;
}},destruct:function(){this.customSizes=this.__zr=null;
}});
})();
(function(){var q="px;",p="left: 0;",o="</div>",n="top:",m="position: absolute;",k="<div style='",j="'>",h="background-color:",g="",f="qx.ui.virtual.layer.Row",c="block",e="width:",d="height:",b="row-layer",a="none";
qx.Class.define(f,{extend:qx.ui.virtual.layer.AbstractBackground,properties:{appearance:{refine:true,init:b}},members:{_fullUpdate:function(r,s,t,u){var B=[];
var A=qx.lang.Array.sum(u);
var C=[];
var top=0;
var E=r;
var x=0;

for(var y=0;y<t.length;y++){var D=this.getBackground(E);

if(D){C.push({childIndex:x,decorator:D,width:A,height:t[y]});
B.push(k,m,p,n,top,q,j,D.getMarkup(),o);
x++;
}else{var z=this.getColor(E);

if(z){B.push(k,m,p,n,top,q,d,t[y],q,e,A,q,h,z,j,o);
x++;
}}top+=t[y];
E+=1;
}var v=this.getContentElement().getDomElement();
v.style.display=a;
v.innerHTML=B.join(g);
for(var i=0,l=C.length;i<l;i++){var w=C[i];
w.decorator.resize(v.childNodes[w.childIndex].firstChild,w.width,w.height);
}v.style.display=c;
this._width=A;
},_updateLayerWindow:function(F,G,H,I){if(F!==this.getFirstRow()||H.length!==this.getRowSizes().length||this._width<qx.lang.Array.sum(I)){this._fullUpdate(F,G,H,I);
}},setColor:function(J,K){qx.ui.virtual.layer.AbstractBackground.prototype.setColor.call(this,J,K);

if(this.__Bn(J)){this.updateLayerData();
}},setBackground:function(L,M){qx.ui.virtual.layer.AbstractBackground.prototype.setBackground.call(this,L,M);

if(this.__Bn(L)){this.updateLayerData();
}},__Bn:function(N){var P=this.getFirstRow();
var O=P+this.getRowSizes().length-1;
return N>=P&&N<=O;
}}});
})();
(function(){var m="",l="icon",k="label",j="statusIcon",i="String",h="listitem",g="showcase.page.virtuallist.messenger.Buddy",f=".png",e="_applyAvatar",d="middle",a="_applyLabel",c="_applyStatus",b="showcase/virtuallist/imicons/status_";
qx.Class.define(g,{extend:qx.ui.core.Widget,construct:function(){qx.ui.core.Widget.call(this);
this.set({padding:[0,3]});
this._setLayout(new qx.ui.layout.HBox(3).set({alignY:d}));
this._add(this.getChildControl(j));
this._add(this.getChildControl(k),{flex:1});
this._add(this.getChildControl(l));
},properties:{appearance:{refine:true,init:h},name:{check:i,apply:a,init:m},avatar:{check:i,apply:e,init:m},status:{check:i,apply:c,init:m}},members:{_createChildControlImpl:function(n,o){var p;

switch(n){case k:p=new qx.ui.basic.Label().set({allowGrowX:true});
break;
case l:p=new qx.ui.basic.Image().set({width:26,height:26,scale:true});
break;
case j:p=new qx.ui.basic.Image();
break;
}return p||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,n);
},_applyLabel:function(q,r){this.getChildControl(k).setValue(q);
},_applyAvatar:function(s,t){this.getChildControl(l).setSource(s);
},_applyStatus:function(u,v){var w=b+u+f;
this.getChildControl(j).setSource(w);
}}});
})();
(function(){var h="changeOpen",g="Boolean",f="changeCount",e="changeName",d="showcase.page.virtuallist.messenger.GroupModel",c="Friends",b="Integer",a="String";
qx.Class.define(d,{extend:qx.core.Object,construct:function(name){qx.core.Object.call(this);

if(name!==undefined){this.setName(name);
}},properties:{name:{init:c,event:e,check:a},open:{check:g,init:true,event:h},count:{check:b,init:0,event:f}}});
})();
(function(){var u="icon",t="label",s="count",r="decoration/arrows/down-invert.png",q="white",p="bold",o="_applyName",n="_applyCount",m="rgb(60, 97, 226)",l="Boolean",e="changeOpen",k="",h="(",c="click",b="_applyOpen",g="middle",f=")",i="showcase.page.virtuallist.messenger.Group",a="decoration/arrows/right-invert.png",j="Integer",d="String";
qx.Class.define(i,{extend:qx.ui.core.Widget,construct:function(){qx.ui.core.Widget.call(this);
this.set({backgroundColor:m,padding:[0,3]});
this._setLayout(new qx.ui.layout.HBox(3).set({alignY:g}));
this._add(this.getChildControl(u));
this._add(this.getChildControl(t),{flex:1});
this._add(this.getChildControl(s));
},properties:{open:{check:l,event:e,apply:b,init:true},name:{check:d,apply:o,init:k},count:{check:j,apply:n,init:0}},members:{_createChildControlImpl:function(v,w){var x;

switch(v){case t:x=new qx.ui.basic.Label().set({allowGrowX:true,textColor:q,font:p});
break;
case u:x=new qx.ui.basic.Image().set({source:r});
x.addListener(c,this._onClick,this);
break;
case s:x=new qx.ui.basic.Label().set({textColor:q,font:p});
break;
}return x||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,v);
},_applyOpen:function(y,z){var A=r;

if(y==false){A=a;
}this.getChildControl(u).setSource(A);
},_applyName:function(B,C){this.getChildControl(t).setValue(B);
},_applyCount:function(D,E){this.getChildControl(s).setValue(h+D+f);
},_onClick:function(event){this.toggleOpen();
}}});
})();
(function(){var k="_applyEventPropagation",j="offline",h="String",g="Friends",f="away",e="online",d="busy",c="User #",b="qooxdoo",a="Alexander Steitz",Q=".png",P="kiss",O="Gabriel Munteanu",N="changeStatus",M="icon/22/emotes/face-smile.png",L="embarrassed",K="showcase/virtuallist/imicons/christian_hagendorn.png",J="showcase/virtuallist/imicons/tino_butz.png",I="plain",H="smile-big",r="surprise",s="smile",p="raspberry",q="sad",n="showcase/virtuallist/imicons/martin_wittemann.png",o="changeGroup",l="Tino Butz",m="showcase/virtuallist/imicons/tristan_koch.png",t="changeAvatar",u="Daniel Wagner",z="showcase.page.virtuallist.messenger.BuddyModel",y="(unnamed)",B="Andreas Ecker",A="Christian Hagendorn",D="laugh",C="Thomas Herchenröder",w="changeName",G="angel",F="icon/22/emotes/face-",E="Tristan Koch",v="Martin Wittemann",x="Adrian Olaru";
qx.Class.define(z,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,properties:{name:{init:y,event:w,check:h,apply:k},avatar:{init:M,event:t,check:h,apply:k},status:{init:j,event:N,check:[f,d,e,j],apply:k},group:{init:g,event:o,check:h,apply:k}},statics:{createBuddies:function(R){var T=[{name:a,img:this.getRandomBuddy(),statusIcon:this.getRandomStatus()},{name:B,img:this.getRandomBuddy(),statusIcon:this.getRandomStatus()},{name:v,img:n,statusIcon:this.getRandomStatus()},{name:C,img:this.getRandomBuddy(),statusIcon:this.getRandomStatus()},{name:u,img:this.getRandomBuddy(),statusIcon:this.getRandomStatus()},{name:A,img:K,statusIcon:this.getRandomStatus()},{name:x,img:this.getRandomBuddy(),statusIcon:this.getRandomStatus()},{name:l,img:J,statusIcon:this.getRandomStatus()},{name:E,img:m,statusIcon:this.getRandomStatus()},{name:O,img:this.getRandomBuddy(),statusIcon:this.getRandomStatus()}];

for(var i=0;i<T.length;i++){T[i].group=b;
}for(var i=T.length;i<R;i++){T[i]={name:c+i,img:this.getRandomBuddy(),statusIcon:this.getRandomStatus(),group:g};
}var S=[];

for(var i=0;i<T.length;i++){var U=new showcase.page.virtuallist.messenger.BuddyModel().set({name:T[i].name,avatar:T[i].img,status:T[i].statusIcon,group:T[i].group});
S.push(U);
}return new qx.data.Array(S);
},getRandomBuddy:function(){var V=[G,L,P,D,I,p,q,H,s,r];
return F+V[Math.floor(Math.random()*V.length)]+Q;
},getRandomStatus:function(){var W=[f,d,e,j];
return W[Math.floor(Math.random()*W.length)];
}}});
})();
(function(){var a="qx.util.Delegate";
qx.Class.define(a,{statics:{getMethod:function(b,c){if(qx.util.Delegate.containsMethod(b,c)){return qx.lang.Function.bind(b[c],b);
}return null;
},containsMethod:function(d,e){var f=qx.lang.Type;

if(f.isObject(d)){return f.isFunction(d[e]);
}return false;
}}});
})();

});