qx.$$packageData['514']={"locales":{},"resources":{},"translations":{}};
qx.Part.$$notifyLoad("514", function() {
(function(){var a="qx.ui.list.provider.IListProvider";
qx.Interface.define(a,{members:{createLayer:function(){},createItemRenderer:function(){},createGroupRenderer:function(){},styleSelectabled:function(b){},styleUnselectabled:function(c){},isSelectable:function(d){},setLabelPath:function(e){},setIconPath:function(f){},setLabelOptions:function(g){},setIconOptions:function(h){},setDelegate:function(i){},removeBindings:function(){}}});
})();
(function(){var a="qx.ui.virtual.core.IWidgetCellProvider";
qx.Interface.define(a,{members:{getCellWidget:function(b,c){},poolCellWidget:function(d){}}});
})();
(function(){var p="cell.type",o="String",n="",m="]",l="BindingIds",k="group",j="model[",i="groups[",h="model",g="changeDelegate",c="label",f="qx.ui.list.core.MWidgetController",d="icon",b="value",a=".";
qx.Mixin.define(f,{construct:function(){this.__yo=[];
},properties:{labelPath:{check:o,nullable:true},iconPath:{check:o,nullable:true},groupLabelPath:{check:o,nullable:true},labelOptions:{nullable:true},iconOptions:{nullable:true},groupLabelOptions:{nullable:true},delegate:{event:g,init:null,nullable:true}},members:{__yo:null,bindDefaultProperties:function(q,r){if(q.getUserData(p)!=k){this.bindProperty(n,h,null,q,r);
this.bindProperty(this.getLabelPath(),c,this.getLabelOptions(),q,r);

if(this.getIconPath()!=null){this.bindProperty(this.getIconPath(),d,this.getIconOptions(),q,r);
}}else{this.bindProperty(this.getGroupLabelPath(),b,this.getGroupLabelOptions(),q,r);
}},bindProperty:function(s,t,u,v,w){var y=v.getUserData(p);
var x=this.__yp(w,s,y);
var z=this._list.bind(x,v,t,u);
this.__yq(v,z);
},bindPropertyReverse:function(A,B,C,D,E){var G=D.getUserData(p);
var F=this.__yp(E,A,G);
var H=D.bind(B,this._list,F,C);
this.__yq(D,H);
},removeBindings:function(){while(this.__yo.length>0){var I=this.__yo.pop();
this._removeBindingsFrom(I);
}},_configureItem:function(J){var K=this.getDelegate();

if(K!=null&&K.configureItem!=null){K.configureItem(J);
}},_configureGroupItem:function(L){var M=this.getDelegate();

if(M!=null&&M.configureGroupItem!=null){M.configureGroupItem(L);
}},_bindItem:function(N,O){var P=this.getDelegate();

if(P!=null&&P.bindItem!=null){P.bindItem(this,N,O);
}else{this.bindDefaultProperties(N,O);
}},_bindGroupItem:function(Q,R){var S=this.getDelegate();

if(S!=null&&S.bindGroupItem!=null){S.bindGroupItem(this,Q,R);
}else{this.bindDefaultProperties(Q,R);
}},_removeBindingsFrom:function(T){var U=this.__yr(T);

while(U.length>0){var V=U.pop();

try{this._list.removeBinding(V);
}catch(e){T.removeBinding(V);
}}
if(qx.lang.Array.contains(this.__yo,T)){qx.lang.Array.remove(this.__yo,T);
}},__yp:function(W,X,Y){var ba=j+W+m;

if(Y==k){ba=i+W+m;
}
if(X!=null&&X!=n){ba+=a+X;
}return ba;
},__yq:function(bb,bc){var bd=this.__yr(bb);

if(!qx.lang.Array.contains(bd,bc)){bd.push(bc);
}
if(!qx.lang.Array.contains(this.__yo,bb)){this.__yo.push(bb);
}},__yr:function(be){var bf=be.getUserData(l);

if(bf==null){bf=[];
be.setUserData(l,bf);
}return bf;
}},destruct:function(){this.__yo=null;
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
},styleSelectabled:function(t){var u=this.__ya(t);
this._styleSelectabled(u);
},styleUnselectabled:function(v){var w=this.__ya(v);
this._styleUnselectabled(w);
},isSelectable:function(x){if(this._list._isGroup(x)){return false;
}var y=this._list._layer.getRenderedCellWidget(x,0);

if(y!=null){return y.isEnabled();
}else{return true;
}},_styleSelectabled:function(z){this.__yb(z,{selected:1});
},_styleUnselectabled:function(A){this.__yb(A,{});
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
},__ya:function(D){return this._list._layer.getRenderedCellWidget(D,0);
},__yb:function(E,F){if(E==null){return;
}this._itemRenderer.updateStates(E,F);
}},destruct:function(){this._itemRenderer.dispose();
this._groupRenderer.dispose();
this._itemRenderer=this._groupRenderer=null;
}});
})();
(function(){var g="scrollY",f="update",d="scrollX",c="pane",b="os.scrollBarOverlayed",a="qx.ui.virtual.core.Scroller";
qx.Class.define(a,{extend:qx.ui.core.scroll.AbstractScrollArea,construct:function(h,i,j,k){qx.ui.core.scroll.AbstractScrollArea.call(this);
this.__zg=new qx.ui.virtual.core.Pane(h,i,j,k);
this.__zg.addListener(f,this._computeScrollbars,this);
this.__zg.addListener(d,this._onScrollPaneX,this);
this.__zg.addListener(g,this._onScrollPaneY,this);

if(qx.core.Environment.get(b)){this._add(this.__zg,{edge:0});
}else{this._add(this.__zg,{row:0,column:0});
}},properties:{width:{refine:true,init:null},height:{refine:true,init:null}},members:{__zg:null,getPane:function(){return this.__zg;
},_createChildControlImpl:function(l,m){if(l==c){return this.__zg;
}else{return qx.ui.core.scroll.AbstractScrollArea.prototype._createChildControlImpl.call(this,l);
}},getItemTop:function(n){throw new Error("The method 'getItemTop' is not implemented!");
},getItemBottom:function(o){throw new Error("The method 'getItemBottom' is not implemented!");
},getItemLeft:function(p){throw new Error("The method 'getItemLeft' is not implemented!");
},getItemRight:function(q){throw new Error("The method 'getItemRight' is not implemented!");
},_onScrollBarX:function(e){this.__zg.setScrollX(e.getData());
},_onScrollBarY:function(e){this.__zg.setScrollY(e.getData());
}},destruct:function(){this.__zg.dispose();
this.__zg=null;
}});
})();
(function(){var p="Boolean",o="change",n="single",m="changeSelection",l="one",k="qx.ui.virtual.selection.MModel",j="qx.data.Array",h="multi",g="selected",f="_applySelection",b="_applyDragSelection",d="_applyQuickSelection",c="_applySelectionMode",a="additive";
qx.Mixin.define(k,{construct:function(){this._initSelectionManager();
this.initSelection(new qx.data.Array());
},properties:{selection:{check:j,event:m,apply:f,nullable:false,deferredInit:true},selectionMode:{check:[n,h,a,l],init:n,apply:c},dragSelection:{check:p,init:false,apply:b},quickSelection:{check:p,init:false,apply:d}},members:{_manager:null,__yY:false,__zh:false,_initSelectionManager:function(){var self=this;
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
},_onChangeSelection:function(e){if(this.__zh==true){return;
}this.__yY=true;
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
}this.__yM();

if(this._afterApplySelection!=null&&qx.lang.Type.isFunction(this._afterApplySelection)){this._afterApplySelection();
}this.__yY=false;
},_onManagerChangeSelection:function(e){if(this.__yY==true){return;
}this.__zh=true;
this.__yM();
this.__zh=false;
},__yM:function(){if(this.__zj()){return;
}var I=this._manager.getSelection();
var J=[];

for(var i=0;i<I.length;i++){J.push(this._getDataFromRow(I[i]));
}this.__zi(J);
},__zi:function(K){var L=this.getSelection();

if(K.length>0){var M=[0,L.getLength()];
M=M.concat(K);
L.splice.apply(L,M);
}else{L.removeAll();
}},__zj:function(){var O=this.getSelection();
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
},properties:{appearance:{refine:true,init:u},focusable:{refine:true,init:true},width:{refine:true,init:100},height:{refine:true,init:200},model:{check:o,apply:C,event:h,nullable:false,deferredInit:true},itemHeight:{check:D,init:25,apply:t,themeable:true},labelPath:{check:p,apply:d,nullable:true},iconPath:{check:p,apply:y,nullable:true},groupLabelPath:{check:p,apply:r,nullable:true},labelOptions:{apply:f,nullable:true},iconOptions:{apply:s,nullable:true},groupLabelOptions:{apply:c,nullable:true},delegate:{apply:x,event:w,init:null,nullable:true},autoGrouping:{check:A,init:true},groups:{check:o,event:B,nullable:false,deferredInit:true}},members:{_background:null,_provider:null,_layer:null,__yc:null,__yd:null,__ye:null,__yf:false,__yg:false,__yh:false,refresh:function(){this.__yj();
},_createChildControlImpl:function(G,H){var I;

switch(G){case m:I=new qx.ui.virtual.layer.Row(null,null);
break;
}return I||qx.ui.virtual.core.Scroller.prototype._createChildControlImpl.call(this,G);
},_init:function(){this._provider=new qx.ui.list.provider.WidgetProvider(this);
this.__yc=[];
this.__yd=[];
this.__ye={};
this.__yf=false;
this.__yg=false;
this.__yh=false;
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
}},_getLookupTable:function(){return this.__yc;
},_lookup:function(L){return this.__yc[L];
},_lookupGroup:function(M){return this.__yd.indexOf(M);
},_reverseLookup:function(N){if(N<0){return -1;
}return this.__yc.indexOf(N);
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
this.__yj();
},_onResize:function(e){this.getPane().getColumnConfig().setItemSize(0,e.getData().width);
},_onModelChange:function(e){this.__yj();
this._applyDefaultSelection();
},__yi:function(){this.getPane().getRowConfig().setItemCount(this.__yc.length);
this.getPane().fullUpdate();
},__yj:function(){this.__yc=[];
this.__yd=[];
this.__ye={};

if(this.isAutoGrouping()){this.getGroups().removeAll();
}var bi=this.getModel();

if(bi==null){return;
}this._runDelegateFilter(bi);
this._runDelegateSorter(bi);
this._runDelegateGroup(bi);
this._updateSelection();
this.__yi();
},_runDelegateFilter:function(bj){var bk=qx.util.Delegate.getMethod(this.getDelegate(),E);

for(var i=0,l=bj.length;i<l;++i){if(bk==null||bk(bj.getItem(i))){this.__yc.push(i);
}}},_runDelegateSorter:function(bl){if(this.__yc.length==0){return;
}var bm=qx.util.Delegate.getMethod(this.getDelegate(),z);

if(bm!=null){this.__yc.sort(function(a,b){return bm(bl.getItem(a),bl.getItem(b));
});
}},_runDelegateGroup:function(bn){var br=qx.util.Delegate.getMethod(this.getDelegate(),j);

if(br!=null){for(var i=0,l=this.__yc.length;i<l;++i){var bo=this.__yc[i];
var bq=this.getModel().getItem(bo);
var bp=br(bq);
this.__yk(bp,bo);
}this.__yc=this.__yl();
}},__yk:function(bs,bt){if(bs==null){this.__yh=true;
bs=v;
}var name=this.__ym(bs);

if(this.__ye[name]==null){this.__ye[name]=[];

if(this.isAutoGrouping()){this.getGroups().push(bs);
}}this.__ye[name].push(bt);
},__yl:function(){this.__yn();
var bx=[];
var bz=0;
var bv=this.getGroups();

for(var i=0;i<bv.getLength();i++){var bu=bv.getItem(i);
bx.push(-1);
this.__yd.push(bz);
bz++;
var by=this.__ym(bu);
var bw=this.__ye[by];

if(bw!=null){for(var k=0;k<bw.length;k++){bx.push(bw[k]);
bz++;
}}}return bx;
},__ym:function(bA){var name=null;

if(!qx.lang.Type.isString(bA)){var bB=this.getGroups().indexOf(bA);
this.__yg=true;
name=j;

if(bB==-1){name+=this.getGroups().getLength();
}else{name+=bB;
}}else{this.__yf=true;
var name=bA;
}return name;
},__yn:function(){if(this.__yg&&this.__yh||this.__yg&&this.__yf){throw new Error("GroupingTypeError: You can't mix 'Objects' and 'Strings' as"+" group identifier!");
}}},destruct:function(){this._background.dispose();
this._provider.dispose();
this._layer.dispose();
this._background=this._provider=this._layer=this.__yc=this.__yd=this.__ye=null;
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
this.__hF={};
},properties:{anonymous:{refine:true,init:true}},members:{__hF:null,__bK:null,__ys:null,__yt:null,__yu:null,__pe:null,getFirstRow:function(){return this.__ys;
},getFirstColumn:function(){return this.__yt;
},getRowSizes:function(){return this.__yu||[];
},getColumnSizes:function(){return this.__pe||[];
},syncWidget:function(){if(!this.getContentElement().getDomElement()){return;
}
if(this.__hF.fullUpdate||this.__hF.updateLayerWindow&&this.__hF.updateLayerData){this._fullUpdate.apply(this,this.__bK);
}else if(this.__hF.updateLayerWindow){this._updateLayerWindow.apply(this,this.__bK);
}else if(this.__hF.updateLayerData&&this.__yu){this._updateLayerData();
}
if(this.__hF.fullUpdate||this.__hF.updateLayerWindow){var c=this.__bK;
this.__ys=c[0];
this.__yt=c[1];
this.__yu=c[2];
this.__pe=c[3];
}this.__hF={};
},_updateLayerData:function(){this._fullUpdate(this.__ys,this.__yt,this.__yu,this.__pe);
},_fullUpdate:function(d,e,f,g){throw new Error("Abstract method '_fullUpdate' called!");
},_updateLayerWindow:function(h,i,j,k){this._fullUpdate(h,i,j,k);
},updateLayerData:function(){this.__hF.updateLayerData=true;
qx.ui.core.queue.Widget.add(this);
},fullUpdate:function(l,m,n,o){this.__bK=arguments;
this.__hF.fullUpdate=true;
qx.ui.core.queue.Widget.add(this);
},updateLayerWindow:function(p,q,r,s){this.__bK=arguments;
this.__hF.updateLayerWindow=true;
qx.ui.core.queue.Widget.add(this);
}},destruct:function(){this.__hF=this.__bK=this.__yu=this.__pe=null;
}});
})();
(function(){var v="appear",u="qx.ui.virtual.core.CellEvent",t="update",s="change",r="qx.event.type.Data",q="qx.ui.virtual.core.Pane",p="resize",o="click",n="scrollX",m="dblclick",d="contextmenu",l="cellClick",h="__yw",c="__yD",b="__yv",g="qx.event.type.Event",f="scrollY",j="__yC",a="cellDblclick",k="cellContextmenu";
qx.Class.define(q,{extend:qx.ui.core.Widget,construct:function(w,x,y,z){qx.ui.core.Widget.call(this);
this.__yv=new qx.ui.virtual.core.Axis(y,w);
this.__yw=new qx.ui.virtual.core.Axis(z,x);
this.__yx=0;
this.__yy=0;
this.__yz=0;
this.__yA=0;
this.__yB={};
this.__hF={};
this.__yC=new qx.ui.container.Composite();
this.__yC.setUserBounds(0,0,0,0);
this._add(this.__yC);
this.__yD=[];
this.__yv.addListener(s,this.fullUpdate,this);
this.__yw.addListener(s,this.fullUpdate,this);
this.addListener(p,this._onResize,this);
this.addListenerOnce(v,this._onAppear,this);
this.addListener(o,this._onClick,this);
this.addListener(m,this._onDblclick,this);
this.addListener(d,this._onContextmenu,this);
},events:{cellClick:u,cellContextmenu:u,cellDblclick:u,update:g,scrollX:r,scrollY:r},properties:{width:{refine:true,init:400},height:{refine:true,init:300}},members:{__yv:null,__yw:null,__yx:null,__yy:null,__yz:null,__yA:null,__yB:null,__hF:null,__yC:null,__yD:null,__yE:null,__pe:null,__yu:null,getRowConfig:function(){return this.__yv;
},getColumnConfig:function(){return this.__yw;
},getChildren:function(){return [this.__yC];
},addLayer:function(A){this.__yD.push(A);
A.setUserBounds(0,0,0,0);
this.__yC.add(A);
},getLayers:function(){return this.__yD;
},getVisibleLayers:function(){var B=[];

for(var i=0;i<this.__yD.length;i++){var C=this.__yD[i];

if(C.isVisible()){B.push(C);
}}return B;
},getScrollMaxX:function(){var D=this.getInnerSize();

if(D){return Math.max(0,this.__yw.getTotalSize()-D.width);
}return 0;
},getScrollMaxY:function(){var E=this.getInnerSize();

if(E){return Math.max(0,this.__yv.getTotalSize()-E.height);
}return 0;
},setScrollY:function(F){var G=this.getScrollMaxY();

if(F<0){F=0;
}else if(F>G){F=G;
}
if(this.__yx!==F){var H=this.__yx;
this.__yx=F;
this._deferredUpdateScrollPosition();
this.fireDataEvent(f,F,H);
}},getScrollY:function(){return this.__yx;
},setScrollX:function(I){var J=this.getScrollMaxX();

if(I<0){I=0;
}else if(I>J){I=J;
}
if(I!==this.__yy){var K=this.__yy;
this.__yy=I;
this._deferredUpdateScrollPosition();
this.fireDataEvent(n,I,K);
}},getScrollX:function(){return this.__yy;
},getScrollSize:function(){return {width:this.__yw.getTotalSize(),height:this.__yv.getTotalSize()};
},scrollRowIntoView:function(L){var O=this.getBounds();

if(!O){this.addListenerOnce(v,function(){qx.event.Timer.once(function(){this.scrollRowIntoView(L);
},this,0);
},this);
return;
}var P=this.__yv.getItemPosition(L);
var N=P+this.__yv.getItemSize(L);
var M=this.getScrollY();

if(P<M){this.setScrollY(P);
}else if(N>M+O.height){this.setScrollY(N-O.height);
}},scrollColumnIntoView:function(Q){var T=this.getBounds();

if(!T){this.addListenerOnce(v,function(){qx.event.Timer.once(function(){this.scrollColumnIntoView(Q);
},this,0);
},this);
return;
}var S=this.__yw.getItemPosition(Q);
var R=S+this.__yw.getItemSize(Q);
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
}bb=this.__yv.getItemAtPosition(this.getScrollY()+ba-bd.top);
bc=this.__yw.getItemAtPosition(this.getScrollX()+Y-bd.left);

if(!bb||!bc){return null;
}return {row:bb.index,column:bc.index};
},prefetchX:function(be,bf,bg,bh){var bi=this.getVisibleLayers();

if(bi.length==0){return;
}var bk=this.getBounds();

if(!bk){return;
}var bl=this.__yy+bk.width;
var bm=this.__yA-bl;

if(this.__yy-this.__yB.left<Math.min(this.__yy,be)||this.__yB.right-bl<Math.min(bm,bg)){var bn=Math.min(this.__yy,bf);
var bj=Math.min(bm,bh);
this._setLayerWindow(bi,this.__yy-bn,this.__yx,bk.width+bn+bj,bk.height,false);
}},prefetchY:function(bo,bp,bq,br){var bs=this.getVisibleLayers();

if(bs.length==0){return;
}var bv=this.getBounds();

if(!bv){return;
}var bt=this.__yx+bv.height;
var bu=this.__yz-bt;

if(this.__yx-this.__yB.top<Math.min(this.__yx,bo)||this.__yB.bottom-bt<Math.min(bu,bq)){var bx=Math.min(this.__yx,bp);
var bw=Math.min(bu,br);
this._setLayerWindow(bs,this.__yy,this.__yx-bx,bv.width,bv.height+bx+bw,false);
}},_onResize:function(){if(this.getContainerElement().getDomElement()){this.__yE=true;
this._updateScrollPosition();
this.__yE=null;
this.fireEvent(t);
}},_onAppear:function(){this.fullUpdate();
},_onClick:function(e){this.__yF(e,l);
},_onContextmenu:function(e){this.__yF(e,k);
},_onDblclick:function(e){this.__yF(e,a);
},__yF:function(e,by){var bz=this.getCellAtPosition(e.getDocumentLeft(),e.getDocumentTop());

if(!bz){return;
}this.fireNonBubblingEvent(by,qx.ui.virtual.core.CellEvent,[this,e,bz.row,bz.column]);
},syncWidget:function(){if(this.__hF._fullUpdate){this._fullUpdate();
}else if(this.__hF._updateScrollPosition){this._updateScrollPosition();
}this.__hF={};
},_setLayerWindow:function(bA,bB,top,bC,bD,bE){var bJ=this.__yv.getItemAtPosition(top);

if(bJ){var bL=bJ.index;
var bP=this.__yv.getItemSizes(bL,bD+bJ.offset);
var bK=qx.lang.Array.sum(bP);
var bR=top-bJ.offset;
var bO=top-bJ.offset+bK;
}else{var bL=0;
var bP=[];
var bK=0;
var bR=0;
var bO=0;
}var bN=this.__yw.getItemAtPosition(bB);

if(bN){var bH=bN.index;
var bG=this.__yw.getItemSizes(bH,bC+bN.offset);
var bM=qx.lang.Array.sum(bG);
var bQ=bB-bN.offset;
var bI=bB-bN.offset+bM;
}else{var bH=0;
var bG=[];
var bM=0;
var bQ=0;
var bI=0;
}this.__yB={top:bR,bottom:bO,left:bQ,right:bI};
this.__yC.setUserBounds(this.__yB.left-this.__yy,this.__yB.top-this.__yx,bM,bK);
this.__pe=bG;
this.__yu=bP;

for(var i=0;i<this.__yD.length;i++){var bF=this.__yD[i];
bF.setUserBounds(0,0,bM,bK);

if(bE){bF.fullUpdate(bL,bH,bP,bG);
}else{bF.updateLayerWindow(bL,bH,bP,bG);
}}},__yG:function(){if(this.__yE){return;
}var bS=this.getScrollSize();

if(this.__yz!==bS.height||this.__yA!==bS.width){this.__yz=bS.height;
this.__yA=bS.width;
this.fireEvent(t);
}},fullUpdate:function(){this.__hF._fullUpdate=1;
qx.ui.core.queue.Widget.add(this);
},isUpdatePending:function(){return !!this.__hF._fullUpdate;
},_fullUpdate:function(){var bT=this.getVisibleLayers();

if(bT.length==0){this.__yG();
return;
}
if(!this.getContainerElement().getDomElement()){return ;
}var bU=this.getBounds();
this._setLayerWindow(bT,this.__yy,this.__yx,bU.width,bU.height,true);
this.__yG();
},_deferredUpdateScrollPosition:function(){this.__hF._updateScrollPosition=1;
qx.ui.core.queue.Widget.add(this);
},_updateScrollPosition:function(){var bV=this.getVisibleLayers();

if(bV.length==0){this.__yG();
return;
}var bX=this.getBounds();

if(!bX){return ;
}var bW={top:this.__yx,bottom:this.__yx+bX.height,left:this.__yy,right:this.__yy+bX.width};

if(this.__yB.top<=bW.top&&this.__yB.bottom>=bW.bottom&&this.__yB.left<=bW.left&&this.__yB.right>=bW.right){this.__yC.setUserBounds(this.__yB.left-bW.left,this.__yB.top-bW.top,this.__yB.right-this.__yB.left,this.__yB.bottom-this.__yB.top);
}else{this._setLayerWindow(bV,this.__yy,this.__yx,bX.width,bX.height,false);
}this.__yG();
}},destruct:function(){this._disposeArray(c);
this._disposeObjects(b,h,j);
this.__yB=this.__hF=this.__pe=this.__yu=null;
}});
})();
(function(){var j="dropdown",i="list",h="String",g="open",f="close",e="changeModel",d="changeLabelOptions",c="blur",b="_applyDelegate",a="_applyLabelPath",I="qx.data.Array",H="qx.ui.form.core.AbstractVirtualBox",G="_applyLabelOptions",F="Down",E="Integer",D="_applyModel",C="Up",B="",A="_applyMaxListHeight",z="middle",q="changeIconOptions",r="resize",o="changeDelegate",p="changeLabelPath",m="keypress",n="changeIconPath",k="_applyRowHeight",l="click",s="abstract",t="Number",v="_applyIconPath",u="Escape",x="_applyIconOptions",w=".",y="[0]";
qx.Class.define(H,{extend:qx.ui.core.Widget,include:qx.ui.form.MForm,implement:qx.ui.form.IForm,type:s,construct:function(J){qx.ui.core.Widget.call(this);
var K=new qx.ui.layout.HBox();
this._setLayout(K);
K.setAlignY(z);
this.addListener(m,this._handleKeyboard,this);
this.addListener(l,this._handleMouse,this);
this.addListener(c,this._onBlur,this);
this.addListener(r,this._onResize,this);
this._createChildControl(j);

if(J!=null){this.initModel(J);
}else{this.initModel(new qx.data.Array());
}},properties:{focusable:{refine:true,init:true},width:{refine:true,init:120},model:{check:I,apply:D,event:e,nullable:false,deferredInit:true},delegate:{apply:b,event:o,init:null,nullable:true},labelPath:{check:h,apply:a,event:p,nullable:true},labelOptions:{apply:G,event:d,nullable:true},iconPath:{check:h,event:n,apply:v,nullable:true},iconOptions:{apply:x,event:q,nullable:true},itemHeight:{check:E,init:25,apply:k,themeable:true},maxListHeight:{check:t,apply:A,nullable:true,init:200}},members:{_forwardStates:{focused:true,invalid:true},refresh:function(){this.getChildControl(j).getChildControl(i).refresh();
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

if(!R&&!Q&&(P===F||P===C)){return g;
}else if(R&&!Q&&P===u){return f;
}else{return null;
}},_getBindPath:function(S,T){var U=S+y;

if(T!=null&&T!=B){U+=w+T;
}return U;
},_isModifierPressed:function(event){var X=event.isAltPressed();
var Y=event.isCtrlOrCommandPressed();
var V=event.isShiftPressed();
var W=event.isMetaPressed();
return (X||Y||V||W);
},_onBlur:function(event){this.close();
},_handleKeyboard:function(event){var ba=this._getAction(event);
var bb=this.getChildControl(j).isVisible();

switch(ba){case g:this.open();
break;
case f:this.close();
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
},_applyRowHeight:function(bo,bp){this.getChildControl(j).getChildControl(i).setItemHeight(bo);
},_applyMaxListHeight:function(bq,br){this.getChildControl(j).getChildControl(i).setMaxHeight(bq);
}}});
})();
(function(){var f="cell.empty",e="cell.column",d="updated",c="cell.row",b="qx.event.type.Event",a="qx.ui.virtual.layer.WidgetCell";
qx.Class.define(a,{extend:qx.ui.virtual.layer.Abstract,include:[qx.ui.core.MChildrenHandling],construct:function(g){qx.ui.virtual.layer.Abstract.call(this);
this.setZIndex(2);
this._cellProvider=g;
this.__yH=[];
},properties:{anonymous:{refine:true,init:false}},events:{updated:b},members:{__yH:null,getRenderedCellWidget:function(h,j){var k=this.getColumnSizes().length;
var p=this.getRowSizes().length;
var o=this.getFirstRow();
var n=this.getFirstColumn();

if(h<o||h>=o+p||j<n||j>=n+k){return null;
}var m=(j-n)+(h-o)*k;
var l=this._getChildren()[m];

if(l.getUserData(f)){return null;
}else{return l;
}},_getSpacer:function(){var q=this.__yH.pop();

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

if(D.getUserData(f)){this.__yH.push(D);
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

if(V.getUserData(f)){this.__yH.push(V);
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
}this._cellProvider=this.__yH=null;
}});
})();
(function(){var n="list",m="change",l="Invalid parameter 'target'!",k="changeModel",j="mouseup",h="one",g="Enter",f="changeDelegate",e="qx.data.Array",d="changeVisibility",a="qx.ui.form.core.VirtualDropDownList",c="_applySelection",b="changeSelection";
qx.Class.define(a,{extend:qx.ui.popup.Popup,construct:function(o){qx.core.Assert.assertNotNull(o,l);
qx.core.Assert.assertNotUndefined(o,l);
qx.core.Assert.assertInterface(o,qx.ui.form.core.AbstractVirtualBox,l);
qx.ui.popup.Popup.call(this,new qx.ui.layout.VBox());
this._target=o;
this._createChildControl(n);
this.addListener(d,this.__yK,this);
this.initSelection(new qx.data.Array());
},properties:{autoHide:{refine:true,init:false},keepActive:{refine:true,init:true},selection:{check:e,event:b,apply:c,nullable:false,deferredInit:true}},members:{_target:null,_preselected:null,__yI:false,__yJ:false,open:function(){this.placeToWidget(this._target,true);
this.show();
},close:function(){this.hide();
},setPreselected:function(p){this._preselected=p;
this.__yJ=true;
var q=this.getChildControl(n).getSelection();
this.__yM(new qx.data.Array([p]),q);
this.__yJ=false;
},_createChildControlImpl:function(r,s){var t;

switch(r){case n:t=new qx.ui.list.List().set({focusable:false,keepFocus:true,height:null,width:null,maxHeight:this._target.getMaxListHeight(),selectionMode:h,quickSelection:true});
t.getSelection().addListener(m,this._onListChangeSelection,this);
t.addListener(j,this._handleMouse,this);
t.addListener(k,this._onChangeModel,this);
t.addListener(f,this._onChangeDelegate,this);
this.add(t,{flex:1});
break;
}return t||qx.ui.popup.Popup.prototype._createChildControlImpl.call(this,r,s);
},_handleKeyboard:function(event){if(this.isVisible()&&event.getKeyIdentifier()===g){this.__yL();
return;
}var u=event.clone();
u.setTarget(this.getChildControl(n));
u.setBubbles(false);
this.getChildControl(n).dispatchEvent(u);
},_handleMouse:function(event){this.__yL();
},__oe:function(event){if(this.__yI){return;
}var v=this.getSelection();
var w=this.getChildControl(n).getSelection();
this.__yJ=true;
this.__yM(v,w);
this.__yJ=false;
this.__yI=true;
this.__yM(w,v);
this.__yI=false;
},_onListChangeSelection:function(event){if(this.__yJ){return;
}var x=this.getChildControl(n).getSelection();

if(this.isVisible()){this.setPreselected(x.getItem(0));
}else{this.__yI=true;
this.__yM(x,this.getSelection());
this.__yI=false;
}},__yK:function(event){if(this.isVisible()){if(this._preselected==null){var y=this.getSelection();
var z=this.getChildControl(n).getSelection();
this.__yM(y,z);
}this.__yN();
}else{this.setPreselected(null);
}},_onChangeModel:function(event){this.getSelection().removeAll();
},_onChangeDelegate:function(event){this.getSelection().removeAll();
},_applySelection:function(A,B){A.addListener(m,this.__oe,this);

if(B!=null){B.removeListener(m,this.__oe,this);
}this.__yM(A,this.getChildControl(n).getSelection(A));
},__yL:function(){if(this._preselected!=null){var C=this.getSelection();
C.splice(0,1,this._preselected);
this._preselected=null;
this.close();
}},__yM:function(D,E){if(D.equals(E)){return;
}
if(D.getLength()<=0){E.removeAll();
}else{var F=E.toArray();
qx.lang.Array.removeAll(F);

for(var i=0;i<D.getLength();i++){F.push(D.getItem(i));
}E.length=F.length;
var G=E.getLength()-1;
E.splice(G,1,E.getItem(G));
}},__yN:function(){this.__yO();
this.__yP();
},__yO:function(){var H=this._target.getBounds().width;
this.setWidth(H);
},__yP:function(){var I=this.__yQ();
var L=this._target.getMaxListHeight();
var J=this.getChildControl(n);
var K=J.getPane().getRowConfig().getTotalSize();

if(L==null||K<L){L=K;
}
if(L>I){J.setMaxHeight(I);
}else if(L<I){J.setMaxHeight(L);
}},__yQ:function(){var M=this.getLayoutLocation(this._target);
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
}this.__yR={};
this.__yS={};
},properties:{colorEven:{nullable:true,check:d,apply:b,themeable:true},colorOdd:{nullable:true,check:d,apply:c,themeable:true}},members:{__yT:null,__yU:null,__yR:null,__yS:null,setColor:function(g,h){if(h){this.__yR[g]=qx.theme.manager.Color.getInstance().resolve(h);
}else{delete (this.__yR[g]);
}},clearCustomColors:function(){this.__yR={};
this.updateLayerData();
},getColor:function(i){var j=this.__yR[i];

if(j){return j;
}else{return i%2==0?this.__yT:this.__yU;
}},_applyColorEven:function(k,l){if(k){this.__yT=qx.theme.manager.Color.getInstance().resolve(k);
}else{this.__yT=null;
}this.updateLayerData();
},_applyColorOdd:function(m,n){if(m){this.__yU=qx.theme.manager.Color.getInstance().resolve(m);
}else{this.__yU=null;
}this.updateLayerData();
},setBackground:function(o,p){if(p){this.__yS[o]=qx.theme.manager.Decoration.getInstance().resolve(p);
}else{delete (this.__yS[o]);
}this.updateLayerData();
},getBackground:function(q){return this.__yS[q];
}},destruct:function(){this.__yR=this.__yS=null;
}});
})();
(function(){var a="qx.ui.virtual.cell.IWidgetCell";
qx.Interface.define(a,{members:{getCellWidget:function(b,c){},pool:function(d){},updateStates:function(e,f){},updateData:function(g,h){}}});
})();
(function(){var d="cell.states",c="created",b="qx.ui.virtual.cell.AbstractWidget",a="qx.event.type.Data";
qx.Class.define(b,{extend:qx.core.Object,implement:[qx.ui.virtual.cell.IWidgetCell],construct:function(){qx.core.Object.call(this);
this.__cM=[];
},events:{"created":a},members:{__cM:null,_createWidget:function(){throw new Error("abstract method call");
},updateData:function(e,f){throw new Error("abstract method call");
},updateStates:function(g,h){var k=g.getUserData(d);
if(k){var i=h||{};

for(var j in k){if(!i[j]){g.removeState(j);
}}}else{k={};
}if(h){for(var j in h){if(!k.state){g.addState(j);
}}}g.setUserData(d,h);
},getCellWidget:function(l,m){var n=this.__yV();
this.updateStates(n,m);
this.updateData(n,l);
return n;
},pool:function(o){this.__cM.push(o);
},_cleanupPool:function(){var p=this.__cM.pop();

while(p){p.destroy();
p=this.__cM.pop();
}},__yV:function(){var q=this.__cM.pop();

if(q==null){q=this._createWidget();
this.fireDataEvent(c,q);
}return q;
}},destruct:function(){this.__cM=null;
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
(function(){var m="textfield",k="value",j="button",h="dropdown",g="inner",f="list",d="change",c="select",b="focusin",a="focusout",y="Enter",x="qx.ui.form.VirtualComboBox",w="changeValue",v="Function",u="virtual-combobox",t="_applyValue",s="String",r="",q="single",p="converter",n="click",o="_applyPlaceholder";
qx.Class.define(x,{extend:qx.ui.form.core.AbstractVirtualBox,implement:[qx.ui.form.IStringForm],construct:function(z){qx.ui.form.core.AbstractVirtualBox.call(this,z);
var A=this._createChildControl(m);
this._createChildControl(j);
var B=this.getChildControl(h);
B.getChildControl(f).setSelectionMode(q);
this.__eH=B.getSelection();
this.__eH.addListener(d,this.__za,this);
this.bind(k,A,k);
A.bind(k,this,k);
this.addListener(b,function(e){A.fireNonBubblingEvent(b,qx.event.type.Focus);
},this);
this.addListener(a,function(e){A.fireNonBubblingEvent(a,qx.event.type.Focus);
},this);
},properties:{appearance:{refine:true,init:u},width:{refine:true,init:120},value:{nullable:true,event:w,apply:t},placeholder:{check:s,nullable:true,apply:o},defaultFormat:{check:v,init:null,nullable:true}},members:{__yW:null,__yX:null,__eH:null,__yY:null,getTextSelection:function(){return this.getChildControl(m).getTextSelection();
},getTextSelectionLength:function(){return this.getChildControl(m).getTextSelectionLength();
},setTextSelection:function(C,D){this.getChildControl(m).setTextSelection(C,D);
},clearTextSelection:function(){this.getChildControl(m).clearTextSelection();
},selectAllText:function(){this.getChildControl(m).selectAllText();
},resetAllTextSelection:function(){this.clearTextSelection();
this.selectAllText();
},tabFocus:function(){var E=this.getChildControl(m);
E.getFocusElement().focus();
E.selectAllText();
},focus:function(){qx.ui.form.core.AbstractVirtualBox.prototype.focus.call(this);
this.getChildControl(m).getFocusElement().focus();
},_createChildControlImpl:function(F,G){var H;

switch(F){case m:H=new qx.ui.form.TextField();
H.setFocusable(false);
H.addState(g);
this._add(H,{flex:1});
break;
case j:H=new qx.ui.form.Button();
H.setFocusable(false);
H.setKeepActive(true);
H.addState(g);
this._add(H);
break;
}return H||qx.ui.form.core.AbstractVirtualBox.prototype._createChildControlImpl.call(this,F,G);
},_beforeOpen:function(){this.__zb();
},_handleKeyboard:function(event){var I=this._getAction(event);

switch(I){case c:this.setValue(this.getChildControl(m).getValue());
break;
default:qx.ui.form.core.AbstractVirtualBox.prototype._handleKeyboard.call(this,event);
break;
}},_getAction:function(event){var J=event.getKeyIdentifier();
var L=this.getChildControl(h).isVisible();
var K=this._isModifierPressed(event);

if(!L&&!K&&J===y){return c;
}else{return qx.ui.form.core.AbstractVirtualBox.prototype._getAction.call(this,event);
}},_handleMouse:function(event){qx.ui.form.core.AbstractVirtualBox.prototype._handleMouse.call(this,event);
var M=event.getType();

if(M!==n){return;
}var N=event.getTarget();

if(N==this.getChildControl(j)){this.toggle();
}else{this.close();
}},__za:function(event){if(this.__yY==true){return;
}var O=this.__eH.getItem(0);
O=this.__bw(O);
this.setValue(O);
},_applyValue:function(P,Q){},_applyPlaceholder:function(R,S){this.getChildControl(m).setPlaceholder(R);
},__zb:function(){var V=this.getValue();
var U=this.getChildControl(h);
var T=U.getSelection();

if(this.__bw(T.getItem(0))!==V){this.__yY=true;
T.removeAll();
this.__yY=false;
if(V==null||V==r){return;
}var ba=this.getModel();
var Y=U.getChildControl(f)._getLookupTable();

for(var i=0,l=Y.length;i<l;i++){var W=ba.getItem(Y[i]);
var X=this.__bw(W);

if(X&&X.indexOf(V)==0){U.setPreselected(W);
break;
}}}},__bw:function(bb){var bd=this.getLabelOptions();
var bc=this.getDefaultFormat();
var bf=this.getLabelPath();
var be=null;

if(bf!=null){be=qx.data.SingleValueBinding.getValueFromObject(bb,bf);
}else if(qx.lang.Type.isString(bb)){be=bb;
}var bg=qx.util.Delegate.getMethod(bd,p);

if(bg!=null){be=bg(be);
}
if(be!=null&&bc!=null){be=bc(qx.lang.String.stripTags(be));
}return be;
}},destruct:function(){var bh=this.getChildControl(m);
this.removeAllBindings();
bh.removeAllBindings();
this.__eH.removeListener(d,this.__za,this);
this.__eH=null;
}});
})();
(function(){var e="change",d="qx.event.type.Event",c="qx.ui.virtual.core.Axis";
qx.Class.define(c,{extend:qx.core.Object,construct:function(f,g){qx.core.Object.call(this);
this.itemCount=g;
this.defaultItemSize=f;
this.customSizes={};
},events:{"change":d},members:{__zc:null,getDefaultItemSize:function(){return this.defaultItemSize;
},setDefaultItemSize:function(h){if(this.defaultItemSize!==h){this.defaultItemSize=h;
this.__zc=null;
this.fireNonBubblingEvent(e);
}},getItemCount:function(){return this.itemCount;
},setItemCount:function(j){if(this.itemCount!==j){this.itemCount=j;
this.__zc=null;
this.fireNonBubblingEvent(e);
}},setItemSize:function(k,l){if(this.customSizes[k]==l){return;
}
if(l===null){delete this.customSizes[k];
}else{this.customSizes[k]=l;
}this.__zc=null;
this.fireNonBubblingEvent(e);
},getItemSize:function(m){return this.customSizes[m]||this.defaultItemSize;
},resetItemSizes:function(){this.customSizes={};
this.__zc=null;
this.fireNonBubblingEvent(e);
},__zd:function(){if(this.__zc){return this.__zc;
}var p=this.defaultItemSize;
var w=this.itemCount;
var r=[];

for(var t in this.customSizes){var n=parseInt(t,10);

if(n<w){r.push(n);
}}
if(r.length==0){var s=[{startIndex:0,endIndex:w-1,firstItemSize:p,rangeStart:0,rangeEnd:w*p-1}];
this.__zc=s;
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
this.__zc=s;
return s;
},__ze:function(y){var z=this.__zc||this.__zd();
var A=0;
var C=z.length-1;
while(true){var D=A+((C-A)>>1);
var B=z[D];

if(B.rangeEnd<y){A=D+1;
}else if(B.rangeStart>y){C=D-1;
}else{return B;
}}},getItemAtPosition:function(E){if(E<0||E>=this.getTotalSize()){return null;
}var G=this.__ze(E);
var I=G.rangeStart;
var F=G.startIndex;
var J=G.firstItemSize;

if(I+J>E){return {index:F,offset:E-I};
}else{var H=this.defaultItemSize;
return {index:F+1+Math.floor((E-I-J)/H),offset:(E-I-J)%H};
}},__zf:function(K){var L=this.__zc||this.__zd();
var M=0;
var O=L.length-1;
while(true){var P=M+((O-M)>>1);
var N=L[P];

if(N.endIndex<K){M=P+1;
}else if(N.startIndex>K){O=P-1;
}else{return N;
}}},getItemPosition:function(Q){if(Q<0||Q>=this.itemCount){return null;
}var R=this.__zf(Q);

if(R.startIndex==Q){return R.rangeStart;
}else{return R.rangeStart+R.firstItemSize+(Q-R.startIndex-1)*this.defaultItemSize;
}},getTotalSize:function(){var S=this.__zc||this.__zd();
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
}},destruct:function(){this.customSizes=this.__zc=null;
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

if(this.__zk(J)){this.updateLayerData();
}},setBackground:function(L,M){qx.ui.virtual.layer.AbstractBackground.prototype.setBackground.call(this,L,M);

if(this.__zk(L)){this.updateLayerData();
}},__zk:function(N){var P=this.getFirstRow();
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