qx.$$packageData['514']={"locales":{},"resources":{},"translations":{}};
qx.Part.$$notifyLoad("514", function() {
(function(){var a="qx.ui.list.provider.IListProvider";
qx.Interface.define(a,{members:{createLayer:function(){},createItemRenderer:function(){},createGroupRenderer:function(){},styleSelectabled:function(b){},styleUnselectabled:function(c){},isSelectable:function(d){},setLabelPath:function(e){},setIconPath:function(f){},setLabelOptions:function(g){},setIconOptions:function(h){},setDelegate:function(i){},removeBindings:function(){}}});
})();
(function(){var a="qx.ui.virtual.core.IWidgetCellProvider";
qx.Interface.define(a,{members:{getCellWidget:function(b,c){},poolCellWidget:function(d){}}});
})();
(function(){var k="cell.type",j="String",i="model",h="",g="changeDelegate",f="label",d="qx.ui.list.core.MWidgetController",c="icon",b="value",a="group";
qx.Mixin.define(d,{construct:function(){this.__AK=[];
},properties:{labelPath:{check:j,nullable:true},iconPath:{check:j,nullable:true},groupLabelPath:{check:j,nullable:true},labelOptions:{nullable:true},iconOptions:{nullable:true},groupLabelOptions:{nullable:true},delegate:{event:g,init:null,nullable:true}},members:{__AK:null,bindDefaultProperties:function(l,m){if(l.getUserData(k)!=a){this.bindProperty(h,i,null,l,m);
this.bindProperty(this.getLabelPath(),f,this.getLabelOptions(),l,m);

if(this.getIconPath()!=null){this.bindProperty(this.getIconPath(),c,this.getIconOptions(),l,m);
}}else{this.bindProperty(this.getGroupLabelPath(),b,this.getGroupLabelOptions(),l,m);
}},bindProperty:function(n,o,p,q,r){var t=q.getUserData(k);
var s=this.__AL(r,n,t);
var u=this._list.bind(s,q,o,p);
this.__rw(q,u);
},bindPropertyReverse:function(v,w,x,y,z){var B=y.getUserData(k);
var A=this.__AL(z,v,B);
var C=y.bind(w,this._list,A,x);
this.__rw(y,C);
},removeBindings:function(){while(this.__AK.length>0){var D=this.__AK.pop();
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
}},_removeBindingsFrom:function(O){var P=this.__AM(O);

while(P.length>0){var Q=P.pop();

try{this._list.removeBinding(Q);
}catch(e){O.removeBinding(Q);
}}
if(qx.lang.Array.contains(this.__AK,O)){qx.lang.Array.remove(this.__AK,O);
}},__AL:function(R,S,T){var U="model["+R+"]";

if(T=="group"){U="groups["+R+"]";
}
if(S!=null&&S!=""){U+="."+S;
}return U;
},__rw:function(V,W){var X=this.__AM(V);

if(!qx.lang.Array.contains(X,W)){X.push(W);
}
if(!qx.lang.Array.contains(this.__AK,V)){this.__AK.push(V);
}},__AM:function(Y){var ba=Y.getUserData("BindingIds");

if(ba==null){ba=[];
Y.setUserData("BindingIds",ba);
}return ba;
}},destruct:function(){this.__AK=null;
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
},styleSelectabled:function(t){var u=this.__AN(t);
this._styleSelectabled(u);
},styleUnselectabled:function(v){var w=this.__AN(v);
this._styleUnselectabled(w);
},isSelectable:function(x){if(this._list._isGroup(x)){return false;
}var y=this._list._layer.getRenderedCellWidget(x,0);

if(y!=null){return y.isEnabled();
}else{return true;
}},_styleSelectabled:function(z){this.__AO(z,{selected:1});
},_styleUnselectabled:function(A){this.__AO(A,{});
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
},__AN:function(D){return this._list._layer.getRenderedCellWidget(D,0);
},__AO:function(E,F){if(E==null){return;
}this._itemRenderer.updateStates(E,F);
}},destruct:function(){this._itemRenderer.dispose();
this._groupRenderer.dispose();
this._itemRenderer=this._groupRenderer=null;
}});
})();
(function(){var f="pane",d="scrollY",c="qx.ui.virtual.core.Scroller",b="update",a="scrollX";
qx.Class.define(c,{extend:qx.ui.core.scroll.AbstractScrollArea,construct:function(g,h,i,j){qx.ui.core.scroll.AbstractScrollArea.call(this);
this.__Bb=new qx.ui.virtual.core.Pane(g,h,i,j);
this.__Bb.addListener(b,this._computeScrollbars,this);
this.__Bb.addListener(a,this._onScrollPaneX,this);
this.__Bb.addListener(d,this._onScrollPaneY,this);
this._add(this.__Bb,{row:0,column:0});
},properties:{width:{refine:true,init:null},height:{refine:true,init:null}},members:{__Bb:null,getPane:function(){return this.__Bb;
},_createChildControlImpl:function(k,l){if(k==f){return this.__Bb;
}else{return qx.ui.core.scroll.AbstractScrollArea.prototype._createChildControlImpl.call(this,k);
}},getItemTop:function(m){throw new Error("The method 'getItemTop' is not implemented!");
},getItemBottom:function(n){throw new Error("The method 'getItemBottom' is not implemented!");
},getItemLeft:function(o){throw new Error("The method 'getItemLeft' is not implemented!");
},getItemRight:function(p){throw new Error("The method 'getItemRight' is not implemented!");
},_onScrollBarX:function(e){this.__Bb.setScrollX(e.getData());
},_onScrollBarY:function(e){this.__Bb.setScrollY(e.getData());
}},destruct:function(){this.__Bb.dispose();
this.__Bb=null;
}});
})();
(function(){var p="Boolean",o="change",n="single",m="changeSelection",l="one",k="qx.ui.virtual.selection.MModel",j="qx.data.Array",h="multi",g="selected",f="_applySelection",b="_applyDragSelection",d="_applyQuickSelection",c="_applySelectionMode",a="additive";
qx.Mixin.define(k,{construct:function(){this._initSelectionManager();
this.initSelection(new qx.data.Array());
},properties:{selection:{check:j,event:m,apply:f,nullable:false,deferredInit:true},selectionMode:{check:[n,h,a,l],init:n,apply:c},dragSelection:{check:p,init:false,apply:b},quickSelection:{check:p,init:false,apply:d}},members:{_manager:null,__Bc:false,__Bd:false,_initSelectionManager:function(){var self=this;
var q={isItemSelectable:function(r){return self._provider.isSelectable(r);
},styleSelectable:function(s,t,u){if(t!=g){return;
}
if(u){self._provider.styleSelectabled(s);
}else{self._provider.styleUnselectabled(s);
}}};
this._manager=new qx.ui.virtual.selection.Row(this.getPane(),q);
this._manager.attachMouseEvents(this.getPane());
this._manager.attachKeyEvents(this);
this._manager.addListener(m,this._onManagerChangeSelection,this);
},_updateSelection:function(){if(this._manager==null){return;
}this._onChangeSelection();
},_applySelection:function(v,w){v.addListener(o,this._onChangeSelection,this);

if(w!=null){w.removeListener(o,this._onChangeSelection,this);
}this._onChangeSelection();
},_applySelectionMode:function(x,y){this._manager.setMode(x);
},_applyDragSelection:function(z,A){this._manager.setDrag(z);
},_applyQuickSelection:function(B,C){this._manager.setQuick(B);
},_onChangeSelection:function(e){if(this.__Bd==true){return;
}this.__Bc=true;
var E=this.getSelection();
var G=[];

for(var i=0;i<E.getLength();i++){var F=E.getItem(i);
var D=this._getSelectables().indexOf(F);
var H=this._reverseLookup(D);

if(H>=0){G.push(H);
}}
if(this._beforeApplySelection!=null&&qx.lang.Type.isFunction(this._beforeApplySelection)){this._beforeApplySelection(G);
}
try{this._manager.replaceSelection(G);
}catch(e){this._manager.selectItem(G[G.length-1]);
}this.__AV();

if(this._afterApplySelection!=null&&qx.lang.Type.isFunction(this._afterApplySelection)){this._afterApplySelection();
}this.__Bc=false;
},_onManagerChangeSelection:function(e){if(this.__Bc==true){return;
}this.__Bd=true;
this.__AV();
this.__Bd=false;
},__AV:function(){if(this.__Bf()){return;
}var I=this._manager.getSelection();
var J=[];

for(var i=0;i<I.length;i++){J.push(this._getDataFromRow(I[i]));
}this.__Be(J);
},__Be:function(K){var L=this.getSelection();

if(K.length>0){var M=[0,L.getLength()];
M=M.concat(K);
L.splice.apply(L,M);
}else{L.removeAll();
}},__Bf:function(){var O=this.getSelection();
var P=this._manager.getSelection();

if(O.getLength()!==P.length){return false;
}
for(var i=0;i<O.getLength();i++){var Q=O.getItem(i);
var N=this._getSelectables().indexOf(Q);
var R=this._reverseLookup(N);

if(R!==P[i]){return false;
}}return true;
},_applyDefaultSelection:function(){if(this._manager!=null){this._manager._applyDefaultSelection();
}}},destruct:function(){this._manager.dispose();
this._manager=null;
}});
})();
(function(){var p="String",o="qx.data.Array",n="change",m="row-layer",j="group",h="changeModel",g="resize",f="_applyLabelOptions",d="_applyLabelPath",c="_applyGroupLabelOptions",E="filter",D="Integer",C="_applyModel",B="changeGroups",A="Boolean",z="sorter",y="_applyIconPath",x="_applyDelegate",w="changeDelegate",v="???",t="_applyRowHeight",u="virtual-list",r="_applyGroupLabelPath",s="_applyIconOptions",q="qx.ui.list.List";
qx.Class.define(q,{extend:qx.ui.virtual.core.Scroller,include:[qx.ui.virtual.selection.MModel],construct:function(F){qx.ui.virtual.core.Scroller.call(this,0,1,20,100);
this._init();
this.initGroups(new qx.data.Array());

if(F!=null){this.initModel(F);
}else{this.initModel(new qx.data.Array());
}this.initItemHeight();
},properties:{appearance:{refine:true,init:u},focusable:{refine:true,init:true},width:{refine:true,init:100},height:{refine:true,init:200},model:{check:o,apply:C,event:h,nullable:false,deferredInit:true},itemHeight:{check:D,init:25,apply:t,themeable:true},labelPath:{check:p,apply:d,nullable:true},iconPath:{check:p,apply:y,nullable:true},groupLabelPath:{check:p,apply:r,nullable:true},labelOptions:{apply:f,nullable:true},iconOptions:{apply:s,nullable:true},groupLabelOptions:{apply:c,nullable:true},delegate:{apply:x,event:w,init:null,nullable:true},autoGrouping:{check:A,init:true},groups:{check:o,event:B,nullable:false,deferredInit:true}},members:{_background:null,_provider:null,_layer:null,__nD:null,__Bg:null,__Bh:null,__Bi:false,__Bj:false,__Bk:false,refresh:function(){this.__nR();
},_createChildControlImpl:function(G,H){var I;

switch(G){case m:I=new qx.ui.virtual.layer.Row(null,null);
break;
}return I||qx.ui.virtual.core.Scroller.prototype._createChildControlImpl.call(this,G);
},_init:function(){this._provider=new qx.ui.list.provider.WidgetProvider(this);
this.__nD=[];
this.__Bg=[];
this.__Bh={};
this.__Bi=false;
this.__Bj=false;
this.__Bk=false;
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
}},_getLookupTable:function(){return this.__nD;
},_lookup:function(L){return this.__nD[L];
},_lookupGroup:function(M){return this.__Bg.indexOf(M);
},_reverseLookup:function(N){return this.__nD.indexOf(N);
},_isGroup:function(O){return this._lookup(O)==-1;
},_getSelectables:function(){return this.getModel();
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
this.__nR();
},_onResize:function(e){this.getPane().getColumnConfig().setItemSize(0,e.getData().width);
},_onModelChange:function(e){this.__nR();
this._applyDefaultSelection();
},__Bl:function(){this.getPane().getRowConfig().setItemCount(this.__nD.length);
this.getPane().fullUpdate();
},__nR:function(){this.__nD=[];
this.__Bg=[];
this.__Bh={};

if(this.isAutoGrouping()){this.getGroups().removeAll();
}var bi=this.getModel();

if(bi==null){return;
}this._runDelegateFilter(bi);
this._runDelegateSorter(bi);
this._runDelegateGroup(bi);
this._updateSelection();
this.__Bl();
},_runDelegateFilter:function(bj){var bk=qx.util.Delegate.getMethod(this.getDelegate(),E);

for(var i=0,l=bj.length;i<l;++i){if(bk==null||bk(bj.getItem(i))){this.__nD.push(i);
}}},_runDelegateSorter:function(bl){if(this.__nD.length==0){return;
}var bm=qx.util.Delegate.getMethod(this.getDelegate(),z);

if(bm!=null){this.__nD.sort(function(a,b){return bm(bl.getItem(a),bl.getItem(b));
});
}},_runDelegateGroup:function(bn){var br=qx.util.Delegate.getMethod(this.getDelegate(),j);

if(br!=null){for(var i=0,l=this.__nD.length;i<l;++i){var bo=this.__nD[i];
var bq=this.getModel().getItem(bo);
var bp=br(bq);
this.__Bm(bp,bo);
}this.__nD=this.__Bn();
}},__Bm:function(bs,bt){if(bs==null){this.__Bk=true;
bs=v;
}var name=this.__Bo(bs);

if(this.__Bh[name]==null){this.__Bh[name]=[];

if(this.isAutoGrouping()){this.getGroups().push(bs);
}}this.__Bh[name].push(bt);
},__Bn:function(){this.__Bp();
var bx=[];
var bz=0;
var bv=this.getGroups();

for(var i=0;i<bv.getLength();i++){var bu=bv.getItem(i);
bx.push(-1);
this.__Bg.push(bz);
bz++;
var by=this.__Bo(bu);
var bw=this.__Bh[by];

if(bw!=null){for(var k=0;k<bw.length;k++){bx.push(bw[k]);
bz++;
}}}return bx;
},__Bo:function(bA){var name=null;

if(!qx.lang.Type.isString(bA)){var bB=this.getGroups().indexOf(bA);
this.__Bj=true;
name=j;

if(bB==-1){name+=this.getGroups().getLength();
}else{name+=bB;
}}else{this.__Bi=true;
var name=bA;
}return name;
},__Bp:function(){if(this.__Bj&&this.__Bk||this.__Bj&&this.__Bi){throw new Error("GroupingTypeError: You can't mix 'Objects' and 'Strings' as"+" group identifier!");
}}},destruct:function(){this._background.dispose();
this._provider.dispose();
this._layer.dispose();
this._background=this._provider=this._layer=this.__nD=this.__Bg=this.__Bh=null;
}});
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
this.__eL={};
},properties:{anonymous:{refine:true,init:true}},members:{__eL:null,__kF:null,__Az:null,__AA:null,__zx:null,__pi:null,getFirstRow:function(){return this.__Az;
},getFirstColumn:function(){return this.__AA;
},getRowSizes:function(){return this.__zx||[];
},getColumnSizes:function(){return this.__pi||[];
},syncWidget:function(){if(!this.getContentElement().getDomElement()){return;
}
if(this.__eL.fullUpdate||this.__eL.updateLayerWindow&&this.__eL.updateLayerData){this._fullUpdate.apply(this,this.__kF);
}else if(this.__eL.updateLayerWindow){this._updateLayerWindow.apply(this,this.__kF);
}else if(this.__eL.updateLayerData&&this.__zx){this._updateLayerData();
}
if(this.__eL.fullUpdate||this.__eL.updateLayerWindow){var c=this.__kF;
this.__Az=c[0];
this.__AA=c[1];
this.__zx=c[2];
this.__pi=c[3];
}this.__eL={};
},_updateLayerData:function(){this._fullUpdate(this.__Az,this.__AA,this.__zx,this.__pi);
},_fullUpdate:function(d,e,f,g){throw new Error("Abstract method '_fullUpdate' called!");
},_updateLayerWindow:function(h,i,j,k){this._fullUpdate(h,i,j,k);
},updateLayerData:function(){this.__eL.updateLayerData=true;
qx.ui.core.queue.Widget.add(this);
},fullUpdate:function(l,m,n,o){this.__kF=arguments;
this.__eL.fullUpdate=true;
qx.ui.core.queue.Widget.add(this);
},updateLayerWindow:function(p,q,r,s){this.__kF=arguments;
this.__eL.updateLayerWindow=true;
qx.ui.core.queue.Widget.add(this);
}},destruct:function(){this.__eL=this.__kF=this.__zx=this.__pi=null;
}});
})();
(function(){var v="appear",u="qx.ui.virtual.core.CellEvent",t="update",s="change",r="qx.event.type.Data",q="qx.ui.virtual.core.Pane",p="resize",o="__zp",n="click",m="__zv",d="scrollX",l="dblclick",h="contextmenu",c="cellClick",b="__zq",g="cellContextmenu",f="qx.event.type.Event",j="__zu",a="cellDblclick",k="scrollY";
qx.Class.define(q,{extend:qx.ui.core.Widget,construct:function(w,x,y,z){qx.ui.core.Widget.call(this);
this.__zp=new qx.ui.virtual.core.Axis(y,w);
this.__zq=new qx.ui.virtual.core.Axis(z,x);
this.__rJ=0;
this.__rI=0;
this.__zr=0;
this.__zs=0;
this.__zt={};
this.__eL={};
this.__zu=new qx.ui.container.Composite();
this.__zu.setUserBounds(0,0,0,0);
this._add(this.__zu);
this.__zv=[];
this.__zp.addListener(s,this.fullUpdate,this);
this.__zq.addListener(s,this.fullUpdate,this);
this.addListener(p,this._onResize,this);
this.addListenerOnce(v,this._onAppear,this);
this.addListener(n,this._onClick,this);
this.addListener(l,this._onDblclick,this);
this.addListener(h,this._onContextmenu,this);
},events:{cellClick:u,cellContextmenu:u,cellDblclick:u,update:f,scrollX:r,scrollY:r},properties:{width:{refine:true,init:400},height:{refine:true,init:300}},members:{__zp:null,__zq:null,__rJ:null,__rI:null,__zr:null,__zs:null,__zt:null,__eL:null,__zu:null,__zv:null,__zw:null,__pi:null,__zx:null,getRowConfig:function(){return this.__zp;
},getColumnConfig:function(){return this.__zq;
},getChildren:function(){return [this.__zu];
},addLayer:function(A){this.__zv.push(A);
A.setUserBounds(0,0,0,0);
this.__zu.add(A);
},getLayers:function(){return this.__zv;
},getVisibleLayers:function(){var B=[];

for(var i=0;i<this.__zv.length;i++){var C=this.__zv[i];

if(C.isVisible()){B.push(C);
}}return B;
},getScrollMaxX:function(){var D=this.getBounds();

if(D){return Math.max(0,this.__zq.getTotalSize()-D.width);
}return 0;
},getScrollMaxY:function(){var E=this.getBounds();

if(E){return Math.max(0,this.__zp.getTotalSize()-E.height);
}return 0;
},setScrollY:function(F){var G=this.getScrollMaxY();

if(F<0){F=0;
}else if(F>G){F=G;
}
if(this.__rJ!==F){var H=this.__rJ;
this.__rJ=F;
this._deferredUpdateScrollPosition();
this.fireDataEvent(k,F,H);
}},getScrollY:function(){return this.__rJ;
},setScrollX:function(I){var J=this.getScrollMaxX();

if(I<0){I=0;
}else if(I>J){I=J;
}
if(I!==this.__rI){var K=this.__rI;
this.__rI=I;
this._deferredUpdateScrollPosition();
this.fireDataEvent(d,I,K);
}},getScrollX:function(){return this.__rI;
},getScrollSize:function(){return {width:this.__zq.getTotalSize(),height:this.__zp.getTotalSize()};
},scrollRowIntoView:function(L){var O=this.getBounds();

if(!O){this.addListenerOnce(v,function(){qx.event.Timer.once(function(){this.scrollRowIntoView(L);
},this,0);
},this);
return;
}var P=this.__zp.getItemPosition(L);
var N=P+this.__zp.getItemSize(L);
var M=this.getScrollY();

if(P<M){this.setScrollY(P);
}else if(N>M+O.height){this.setScrollY(N-O.height);
}},scrollColumnIntoView:function(Q){var T=this.getBounds();

if(!T){this.addListenerOnce(v,function(){qx.event.Timer.once(function(){this.scrollColumnIntoView(Q);
},this,0);
},this);
return;
}var S=this.__zq.getItemPosition(Q);
var R=S+this.__zq.getItemSize(Q);
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
}bb=this.__zp.getItemAtPosition(this.getScrollY()+ba-bd.top);
bc=this.__zq.getItemAtPosition(this.getScrollX()+Y-bd.left);

if(!bb||!bc){return null;
}return {row:bb.index,column:bc.index};
},prefetchX:function(be,bf,bg,bh){var bi=this.getVisibleLayers();

if(bi.length==0){return;
}var bk=this.getBounds();

if(!bk){return;
}var bl=this.__rI+bk.width;
var bm=this.__zs-bl;

if(this.__rI-this.__zt.left<Math.min(this.__rI,be)||this.__zt.right-bl<Math.min(bm,bg)){var bn=Math.min(this.__rI,bf);
var bj=Math.min(bm,bh);
this._setLayerWindow(bi,this.__rI-bn,this.__rJ,bk.width+bn+bj,bk.height,false);
}},prefetchY:function(bo,bp,bq,br){var bs=this.getVisibleLayers();

if(bs.length==0){return;
}var bv=this.getBounds();

if(!bv){return;
}var bt=this.__rJ+bv.height;
var bu=this.__zr-bt;

if(this.__rJ-this.__zt.top<Math.min(this.__rJ,bo)||this.__zt.bottom-bt<Math.min(bu,bq)){var bx=Math.min(this.__rJ,bp);
var bw=Math.min(bu,br);
this._setLayerWindow(bs,this.__rI,this.__rJ-bx,bv.width,bv.height+bx+bw,false);
}},_onResize:function(){if(this.getContainerElement().getDomElement()){this.__zw=true;
this._updateScrollPosition();
this.__zw=null;
this.fireEvent(t);
}},_onAppear:function(){this.fullUpdate();
},_onClick:function(e){this.__zy(e,c);
},_onContextmenu:function(e){this.__zy(e,g);
},_onDblclick:function(e){this.__zy(e,a);
},__zy:function(e,by){var bz=this.getCellAtPosition(e.getDocumentLeft(),e.getDocumentTop());

if(!bz){return;
}this.fireNonBubblingEvent(by,qx.ui.virtual.core.CellEvent,[this,e,bz.row,bz.column]);
},syncWidget:function(){if(this.__eL._fullUpdate){this._fullUpdate();
}else if(this.__eL._updateScrollPosition){this._updateScrollPosition();
}this.__eL={};
},_setLayerWindow:function(bA,bB,top,bC,bD,bE){var bJ=this.__zp.getItemAtPosition(top);

if(bJ){var bL=bJ.index;
var bP=this.__zp.getItemSizes(bL,bD+bJ.offset);
var bK=qx.lang.Array.sum(bP);
var bR=top-bJ.offset;
var bO=top-bJ.offset+bK;
}else{var bL=0;
var bP=[];
var bK=0;
var bR=0;
var bO=0;
}var bN=this.__zq.getItemAtPosition(bB);

if(bN){var bH=bN.index;
var bG=this.__zq.getItemSizes(bH,bC+bN.offset);
var bM=qx.lang.Array.sum(bG);
var bQ=bB-bN.offset;
var bI=bB-bN.offset+bM;
}else{var bH=0;
var bG=[];
var bM=0;
var bQ=0;
var bI=0;
}this.__zt={top:bR,bottom:bO,left:bQ,right:bI};
this.__zu.setUserBounds(this.__zt.left-this.__rI,this.__zt.top-this.__rJ,bM,bK);
this.__pi=bG;
this.__zx=bP;

for(var i=0;i<this.__zv.length;i++){var bF=this.__zv[i];
bF.setUserBounds(0,0,bM,bK);

if(bE){bF.fullUpdate(bL,bH,bP,bG);
}else{bF.updateLayerWindow(bL,bH,bP,bG);
}}},__zz:function(){if(this.__zw){return;
}var bS=this.getScrollSize();

if(this.__zr!==bS.height||this.__zs!==bS.width){this.__zr=bS.height;
this.__zs=bS.width;
this.fireEvent(t);
}},fullUpdate:function(){this.__eL._fullUpdate=1;
qx.ui.core.queue.Widget.add(this);
},isUpdatePending:function(){return !!this.__eL._fullUpdate;
},_fullUpdate:function(){var bT=this.getVisibleLayers();

if(bT.length==0){this.__zz();
return;
}
if(!this.getContainerElement().getDomElement()){return ;
}var bU=this.getBounds();
this._setLayerWindow(bT,this.__rI,this.__rJ,bU.width,bU.height,true);
this.__zz();
},_deferredUpdateScrollPosition:function(){this.__eL._updateScrollPosition=1;
qx.ui.core.queue.Widget.add(this);
},_updateScrollPosition:function(){var bV=this.getVisibleLayers();

if(bV.length==0){this.__zz();
return;
}var bX=this.getBounds();

if(!bX){return ;
}var bW={top:this.__rJ,bottom:this.__rJ+bX.height,left:this.__rI,right:this.__rI+bX.width};

if(this.__zt.top<=bW.top&&this.__zt.bottom>=bW.bottom&&this.__zt.left<=bW.left&&this.__zt.right>=bW.right){this.__zu.setUserBounds(this.__zt.left-bW.left,this.__zt.top-bW.top,this.__zt.right-this.__zt.left,this.__zt.bottom-this.__zt.top);
}else{this._setLayerWindow(bV,this.__rI,this.__rJ,bX.width,bX.height,false);
}this.__zz();
}},destruct:function(){this._disposeArray(m);
this._disposeObjects(o,b,j);
this.__zt=this.__eL=this.__pi=this.__zx=null;
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
this.__AP=[];
},properties:{anonymous:{refine:true,init:false}},events:{updated:b},members:{__AP:null,getRenderedCellWidget:function(h,j){var k=this.getColumnSizes().length;
var p=this.getRowSizes().length;
var o=this.getFirstRow();
var n=this.getFirstColumn();

if(h<o||h>=o+p||j<n||j>=n+k){return null;
}var m=(j-n)+(h-o)*k;
var l=this._getChildren()[m];

if(l.getUserData(f)){return null;
}else{return l;
}},_getSpacer:function(){var q=this.__AP.pop();

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

if(D.getUserData(f)){this.__AP.push(D);
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

if(V.getUserData(f)){this.__AP.push(V);
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
}this._cellProvider=this.__AP=null;
}});
})();
(function(){var n="list",m="change",l="Invalid parameter 'target'!",k="changeModel",j="mouseup",h="one",g="Enter",f="changeDelegate",e="qx.data.Array",d="changeVisibility",a="qx.ui.form.core.VirtualDropDownList",c="_applySelection",b="changeSelection";
qx.Class.define(a,{extend:qx.ui.popup.Popup,construct:function(o){qx.core.Assert.assertNotNull(o,l);
qx.core.Assert.assertNotUndefined(o,l);
qx.core.Assert.assertInterface(o,qx.ui.form.core.AbstractVirtualBox,l);
qx.ui.popup.Popup.call(this,new qx.ui.layout.VBox());
this._target=o;
this._createChildControl(n);
this.addListener(d,this.__AT,this);
this.initSelection(new qx.data.Array());
},properties:{autoHide:{refine:true,init:false},keepActive:{refine:true,init:true},selection:{check:e,event:b,apply:c,nullable:false,deferredInit:true}},members:{_target:null,_preselected:null,__AR:false,__AS:false,open:function(){this.placeToWidget(this._target,true);
this.show();
},close:function(){this.hide();
},setPreselected:function(p){this._preselected=p;
this.__AS=true;
var q=this.getChildControl(n).getSelection();
this.__AV(new qx.data.Array([p]),q);
this.__AS=false;
},_createChildControlImpl:function(r,s){var t;

switch(r){case n:t=new qx.ui.list.List().set({focusable:false,keepFocus:true,height:null,width:null,maxHeight:this._target.getMaxListHeight(),selectionMode:h,quickSelection:true});
t.getSelection().addListener(m,this._onListChangeSelection,this);
t.addListener(j,this._handleMouse,this);
t.addListener(k,this._onChangeModel,this);
t.addListener(f,this._onChangeDelegate,this);
this.add(t,{flex:1});
break;
}return t||qx.ui.popup.Popup.prototype._createChildControlImpl.call(this,r,s);
},_handleKeyboard:function(event){if(this.isVisible()&&event.getKeyIdentifier()===g){this.__AU();
return;
}var u=event.clone();
u.setTarget(this.getChildControl(n));
u.setBubbles(false);
this.getChildControl(n).dispatchEvent(u);
},_handleMouse:function(event){this.__AU();
},__b:function(event){if(this.__AR){return;
}var v=this.getSelection();
var w=this.getChildControl(n).getSelection();
this.__AS=true;
this.__AV(v,w);
this.__AS=false;
this.__AR=true;
this.__AV(w,v);
this.__AR=false;
},_onListChangeSelection:function(event){if(this.__AS){return;
}var x=this.getChildControl(n).getSelection();

if(this.isVisible()){this.setPreselected(x.getItem(0));
}else{this.__AR=true;
this.__AV(x,this.getSelection());
this.__AR=false;
}},__AT:function(event){if(this.isVisible()){if(this._preselected==null){var y=this.getSelection();
var z=this.getChildControl("list").getSelection();
this.__AV(y,z);
}this.__AW();
}else{this.setPreselected(null);
}},_onChangeModel:function(event){this.getSelection().removeAll();
},_onChangeDelegate:function(event){this.getSelection().removeAll();
},_applySelection:function(A,B){A.addListener(m,this.__b,this);

if(B!=null){B.removeListener(m,this.__b,this);
}this.__AV(A,this.getChildControl(n).getSelection(A));
},__AU:function(){if(this._preselected!=null){var C=this.getSelection();
C.splice(0,1,this._preselected);
this._preselected=null;
this.close();
}},__AV:function(D,E){if(D.equals(E)){return;
}
if(D.getLength()<=0){E.removeAll();
}else{var F=E.toArray();
qx.lang.Array.removeAll(F);

for(var i=0;i<D.getLength();i++){F.push(D.getItem(i));
}E.length=F.length;
var G=E.getLength()-1;
E.splice(G,1,E.getItem(G));
}},__AW:function(){this.__AX();
this.__AY();
},__AX:function(){var H=this._target.getBounds().width;
this.setWidth(H);
},__AY:function(){var I=this.__Ba();
var L=this._target.getMaxListHeight();
var J=this.getChildControl("list");
var K=J.getPane().getRowConfig().getTotalSize();

if(L==null||K<L){L=K;
}
if(L>I){J.setMaxHeight(I);
}else if(L<I){J.setMaxHeight(L);
}},__Ba:function(){var M=this.getLayoutLocation(this._target);
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
}this.__Bq={};
this.__Br={};
},properties:{colorEven:{nullable:true,check:d,apply:b,themeable:true},colorOdd:{nullable:true,check:d,apply:c,themeable:true}},members:{__Bs:null,__Bt:null,__Bq:null,__Br:null,setColor:function(g,h){if(h){this.__Bq[g]=qx.theme.manager.Color.getInstance().resolve(h);
}else{delete (this.__Bq[g]);
}},clearCustomColors:function(){this.__Bq={};
this.updateLayerData();
},getColor:function(i){var j=this.__Bq[i];

if(j){return j;
}else{return i%2==0?this.__Bs:this.__Bt;
}},_applyColorEven:function(k,l){if(k){this.__Bs=qx.theme.manager.Color.getInstance().resolve(k);
}else{this.__Bs=null;
}this.updateLayerData();
},_applyColorOdd:function(m,n){if(m){this.__Bt=qx.theme.manager.Color.getInstance().resolve(m);
}else{this.__Bt=null;
}this.updateLayerData();
},setBackground:function(o,p){if(p){this.__Br[o]=qx.theme.manager.Decoration.getInstance().resolve(p);
}else{delete (this.__Br[o]);
}this.updateLayerData();
},getBackground:function(q){return this.__Br[q];
}},destruct:function(){this.__Bq=this.__Br=null;
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
},getCellWidget:function(k,l){var m=this.__AQ();
this.updateStates(m,l);
this.updateData(m,k);
return m;
},pool:function(n){this.__bL.push(n);
},_cleanupPool:function(){var o=this.__bL.pop();

while(o){o.destroy();
o=this.__bL.pop();
}},__AQ:function(){var p=this.__bL.pop();

if(p==null){p=this._createWidget();
this.fireDataEvent("created",p);
}return p;
}},destruct:function(){this.__bL=null;
}});
})();
(function(){var c="qx.ui.virtual.selection.Row",b="above",a="under";
qx.Class.define(c,{extend:qx.ui.virtual.selection.Abstract,members:{_getItemCount:function(){return this._pane.getRowConfig().getItemCount();
},_getSelectableFromMouseEvent:function(event){var d=this._pane.getCellAtPosition(event.getDocumentLeft(),event.getDocumentTop());

if(!d){return null;
}return this._isSelectable(d.row)?d.row:null;
},getSelectables:function(e){var f=[];

for(var i=0,l=this._getItemCount();i<l;i++){if(this._isSelectable(i)){f.push(i);
}}return f;
},_getSelectableRange:function(g,h){var j=[];
var m=Math.min(g,h);
var k=Math.max(g,h);

for(var i=m;i<=k;i++){if(this._isSelectable(i)){j.push(i);
}}return j;
},_getFirstSelectable:function(){var n=this._getItemCount();

for(var i=0;i<n;i++){if(this._isSelectable(i)){return i;
}}return null;
},_getLastSelectable:function(){var o=this._getItemCount();

for(var i=o-1;i>=0;i--){if(this._isSelectable(i)){return i;
}}return null;
},_getRelatedSelectable:function(p,q){if(q==b){var s=p-1;
var r=0;
var t=-1;
}else if(q==a){var s=p+1;
var r=this._getItemCount()-1;
var t=1;
}else{return null;
}
for(var i=s;i!==r+t;i+=t){if(this._isSelectable(i)){return i;
}}return null;
},_getPage:function(u,v){if(v){return this._getFirstSelectable();
}else{return this._getLastSelectable();
}},_selectableToHashCode:function(w){return w;
},_scrollItemIntoView:function(x){this._pane.scrollRowIntoView(x);
},_getSelectableLocationX:function(y){return {left:0,right:this._pane.getColumnConfig().getTotalSize()-1};
},_getSelectableLocationY:function(z){var C=this._pane.getRowConfig();
var B=C.getItemPosition(z);
var A=B+C.getItemSize(z)-1;
return {top:B,bottom:A};
}}});
})();
(function(){var v="textfield",u="value",t="dropdown",s="button",r="inner",q="list",p="change",o="select",n="Function",m="",d="Enter",k="virtual-combobox",g="click",c="_applyValue",b="_applyPlaceholder",f="single",e="changeValue",h="qx.ui.form.VirtualComboBox",a="String",j="converter";
qx.Class.define(h,{extend:qx.ui.form.core.AbstractVirtualBox,implement:[qx.ui.form.IStringForm],construct:function(w){qx.ui.form.core.AbstractVirtualBox.call(this,w);
var x=this._createChildControl(v);
this._createChildControl(s);
var y=this.getChildControl(t);
y.getChildControl(q).setSelectionMode(f);
this.__iC=y.getSelection();
this.__iC.addListener(p,this.__Ip,this);
this.bind(u,x,u);
x.bind(u,this,u);
},properties:{appearance:{refine:true,init:k},width:{refine:true,init:120},value:{nullable:true,event:e,apply:c},placeholder:{check:a,nullable:true,apply:b},defaultFormat:{check:n,init:null,nullable:true}},members:{__In:null,__Io:null,__iC:null,__Bc:null,getTextSelection:function(){return this.getChildControl(v).getTextSelection();
},getTextSelectionLength:function(){return this.getChildControl(v).getTextSelectionLength();
},setTextSelection:function(z,A){this.getChildControl(v).setTextSelection(z,A);
},clearTextSelection:function(){this.getChildControl(v).clearTextSelection();
},selectAllText:function(){this.getChildControl(v).selectAllText();
},resetAllTextSelection:function(){this.clearTextSelection();
this.selectAllText();
},tabFocus:function(){var B=this.getChildControl(v);
B.getFocusElement().focus();
B.selectAllText();
},focus:function(){qx.ui.form.core.AbstractVirtualBox.prototype.focus.call(this);
this.getChildControl(v).getFocusElement().focus();
},_createChildControlImpl:function(C,D){var E;

switch(C){case v:E=new qx.ui.form.TextField();
E.setFocusable(false);
E.addState(r);
this._add(E,{flex:1});
break;
case s:E=new qx.ui.form.Button();
E.setFocusable(false);
E.setKeepActive(true);
E.addState(r);
this._add(E);
break;
}return E||qx.ui.form.core.AbstractVirtualBox.prototype._createChildControlImpl.call(this,C,D);
},_beforeOpen:function(){this.__Iq();
},_handleKeyboard:function(event){var F=this._getAction(event);

switch(F){case o:this.setValue(this.getChildControl(v).getValue());
break;
default:qx.ui.form.core.AbstractVirtualBox.prototype._handleKeyboard.call(this,event);
break;
}},_getAction:function(event){var G=event.getKeyIdentifier();
var I=this.getChildControl(t).isVisible();
var H=this._isModifierPressed(event);

if(!I&&!H&&G===d){return o;
}else{return qx.ui.form.core.AbstractVirtualBox.prototype._getAction.call(this,event);
}},_handleMouse:function(event){qx.ui.form.core.AbstractVirtualBox.prototype._handleMouse.call(this,event);
var J=event.getType();

if(J!==g){return;
}var K=event.getTarget();

if(K==this.getChildControl(s)){this.toggle();
}else{this.close();
}},__Ip:function(event){if(this.__Bc==true){return;
}var L=this.__iC.getItem(0);
L=this.__ko(L);
this.setValue(L);
},_applyValue:function(M,N){},_applyPlaceholder:function(O,P){this.getChildControl(v).setPlaceholder(O);
},__Iq:function(){var S=this.getValue();
var R=this.getChildControl(t);
var Q=R.getSelection();

if(this.__ko(Q.getItem(0))!==S){this.__Bc=true;
Q.removeAll();
this.__Bc=false;
if(S==null||S==m){return;
}var W=this.getModel();
var V=R.getChildControl(q)._getLookupTable();

for(var i=0,l=V.length;i<l;i++){var T=W.getItem(V[i]);
var U=this.__ko(T);

if(U&&U.indexOf(S)==0){R.setPreselected(T);
break;
}}}},__ko:function(X){var ba=this.getLabelOptions();
var Y=this.getDefaultFormat();
var bc=this.getLabelPath();
var bb=null;

if(bc!=null){bb=qx.data.SingleValueBinding.getValueFromObject(X,bc);
}else if(qx.lang.Type.isString(X)){bb=X;
}var bd=qx.util.Delegate.getMethod(ba,j);

if(bd!=null){bb=bd(bb);
}
if(bb!=null&&Y!=null){bb=Y(qx.lang.String.stripTags(bb));
}return bb;
}},destruct:function(){var be=this.getChildControl(v);
this.removeAllBindings();
be.removeAllBindings();
this.__iC.removeListener(p,this.__Ip,this);
this.__iC=null;
}});
})();
(function(){var e="change",d="qx.event.type.Event",c="qx.ui.virtual.core.Axis";
qx.Class.define(c,{extend:qx.core.Object,construct:function(f,g){qx.core.Object.call(this);
this.itemCount=g;
this.defaultItemSize=f;
this.customSizes={};
},events:{"change":d},members:{__zA:null,getDefaultItemSize:function(){return this.defaultItemSize;
},setDefaultItemSize:function(h){if(this.defaultItemSize!==h){this.defaultItemSize=h;
this.__zA=null;
this.fireNonBubblingEvent(e);
}},getItemCount:function(){return this.itemCount;
},setItemCount:function(j){if(this.itemCount!==j){this.itemCount=j;
this.__zA=null;
this.fireNonBubblingEvent(e);
}},setItemSize:function(k,l){if(this.customSizes[k]==l){return;
}
if(l===null){delete this.customSizes[k];
}else{this.customSizes[k]=l;
}this.__zA=null;
this.fireNonBubblingEvent(e);
},getItemSize:function(m){return this.customSizes[m]||this.defaultItemSize;
},resetItemSizes:function(){this.customSizes={};
this.__zA=null;
this.fireNonBubblingEvent(e);
},__zB:function(){if(this.__zA){return this.__zA;
}var p=this.defaultItemSize;
var w=this.itemCount;
var r=[];

for(var t in this.customSizes){var n=parseInt(t,10);

if(n<w){r.push(n);
}}
if(r.length==0){var s=[{startIndex:0,endIndex:w-1,firstItemSize:p,rangeStart:0,rangeEnd:w*p-1}];
this.__zA=s;
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
this.__zA=s;
return s;
},__zC:function(y){var z=this.__zA||this.__zB();
var A=0;
var C=z.length-1;
while(true){var D=A+((C-A)>>1);
var B=z[D];

if(B.rangeEnd<y){A=D+1;
}else if(B.rangeStart>y){C=D-1;
}else{return B;
}}},getItemAtPosition:function(E){if(E<0||E>=this.getTotalSize()){return null;
}var G=this.__zC(E);
var I=G.rangeStart;
var F=G.startIndex;
var J=G.firstItemSize;

if(I+J>E){return {index:F,offset:E-I};
}else{var H=this.defaultItemSize;
return {index:F+1+Math.floor((E-I-J)/H),offset:(E-I-J)%H};
}},__zD:function(K){var L=this.__zA||this.__zB();
var M=0;
var O=L.length-1;
while(true){var P=M+((O-M)>>1);
var N=L[P];

if(N.endIndex<K){M=P+1;
}else if(N.startIndex>K){O=P-1;
}else{return N;
}}},getItemPosition:function(Q){if(Q<0||Q>=this.itemCount){return null;
}var R=this.__zD(Q);

if(R.startIndex==Q){return R.rangeStart;
}else{return R.rangeStart+R.firstItemSize+(Q-R.startIndex-1)*this.defaultItemSize;
}},getTotalSize:function(){var S=this.__zA||this.__zB();
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
}},destruct:function(){this.customSizes=this.__zA=null;
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

if(this.__Bu(J)){this.updateLayerData();
}},setBackground:function(L,M){qx.ui.virtual.layer.AbstractBackground.prototype.setBackground.call(this,L,M);

if(this.__Bu(L)){this.updateLayerData();
}},__Bu:function(N){var P=this.getFirstRow();
var O=P+this.getRowSizes().length-1;
return N>=P&&N<=O;
}}});
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
(function(){var a="qx.util.Delegate";
qx.Class.define(a,{statics:{getMethod:function(b,c){if(qx.util.Delegate.containsMethod(b,c)){return qx.lang.Function.bind(b[c],b);
}return null;
},containsMethod:function(d,e){var f=qx.lang.Type;

if(f.isObject(d)){return f.isFunction(d[e]);
}return false;
}}});
})();

});