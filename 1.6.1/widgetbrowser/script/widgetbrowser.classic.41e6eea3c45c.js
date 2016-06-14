qx.$$packageData['66']={"locales":{},"resources":{},"translations":{}};
qx.Part.$$notifyLoad("66", function() {
(function(){var p="cell.type",o="String",n="",m="]",l="BindingIds",k="group",j="model[",i="groups[",h="model",g="changeDelegate",c="label",f="qx.ui.list.core.MWidgetController",d="icon",b="value",a=".";
qx.Mixin.define(f,{construct:function(){this.__yt=[];
},properties:{labelPath:{check:o,nullable:true},iconPath:{check:o,nullable:true},groupLabelPath:{check:o,nullable:true},labelOptions:{nullable:true},iconOptions:{nullable:true},groupLabelOptions:{nullable:true},delegate:{event:g,init:null,nullable:true}},members:{__yt:null,bindDefaultProperties:function(q,r){if(q.getUserData(p)!=k){this.bindProperty(n,h,null,q,r);
this.bindProperty(this.getLabelPath(),c,this.getLabelOptions(),q,r);

if(this.getIconPath()!=null){this.bindProperty(this.getIconPath(),d,this.getIconOptions(),q,r);
}}else{this.bindProperty(this.getGroupLabelPath(),b,this.getGroupLabelOptions(),q,r);
}},bindProperty:function(s,t,u,v,w){var y=v.getUserData(p);
var x=this.__yu(w,s,y);
var z=this._list.bind(x,v,t,u);
this.__yv(v,z);
},bindPropertyReverse:function(A,B,C,D,E){var G=D.getUserData(p);
var F=this.__yu(E,A,G);
var H=D.bind(B,this._list,F,C);
this.__yv(D,H);
},removeBindings:function(){while(this.__yt.length>0){var I=this.__yt.pop();
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
}},_removeBindingsFrom:function(T){var U=this.__yw(T);

while(U.length>0){var V=U.pop();

try{this._list.removeBinding(V);
}catch(e){T.removeBinding(V);
}}
if(qx.lang.Array.contains(this.__yt,T)){qx.lang.Array.remove(this.__yt,T);
}},__yu:function(W,X,Y){var ba=j+W+m;

if(Y==k){ba=i+W+m;
}
if(X!=null&&X!=n){ba+=a+X;
}return ba;
},__yv:function(bb,bc){var bd=this.__yw(bb);

if(!qx.lang.Array.contains(bd,bc)){bd.push(bc);
}
if(!qx.lang.Array.contains(this.__yt,bb)){this.__yt.push(bb);
}},__yw:function(be){var bf=be.getUserData(l);

if(bf==null){bf=[];
be.setUserData(l,bf);
}return bf;
}},destruct:function(){this.__yt=null;
}});
})();
(function(){var a="qx.ui.list.provider.IListProvider";
qx.Interface.define(a,{members:{createLayer:function(){},createItemRenderer:function(){},createGroupRenderer:function(){},styleSelectabled:function(b){},styleUnselectabled:function(c){},isSelectable:function(d){},setLabelPath:function(e){},setIconPath:function(f){},setLabelOptions:function(g){},setIconOptions:function(h){},setDelegate:function(i){},removeBindings:function(){}}});
})();
(function(){var j="cell.type",i="created",h="item",g="group",f="changeDelegate",e="qx.ui.list.provider.WidgetProvider",d="createItem",c="group-item",b="onPool",a="createGroupItem";
qx.Class.define(e,{extend:qx.core.Object,implement:[qx.ui.virtual.core.IWidgetCellProvider,qx.ui.list.provider.IListProvider],include:[qx.ui.list.core.MWidgetController],construct:function(k){qx.core.Object.call(this);
this._list=k;
this._itemRenderer=this.createItemRenderer();
this._groupRenderer=this.createGroupRenderer();
this._itemRenderer.addListener(i,this._onItemCreated,this);
this._groupRenderer.addListener(i,this._onGroupItemCreated,this);
this._list.addListener(f,this._onChangeDelegate,this);
},members:{_itemRenderer:null,_groupRenderer:null,getCellWidget:function(l,m){var n=null;

if(!this._list._isGroup(l)){n=this._itemRenderer.getCellWidget();
n.setUserData(j,h);
this._bindItem(n,this._list._lookup(l));

if(this._list._manager.isItemSelected(l)){this._styleSelectabled(n);
}else{this._styleUnselectabled(n);
}}else{n=this._groupRenderer.getCellWidget();
n.setUserData(j,g);
this._bindGroupItem(n,this._list._lookupGroup(l));
}return n;
},poolCellWidget:function(o){this._removeBindingsFrom(o);

if(o.getUserData(j)==h){this._itemRenderer.pool(o);
}else if(o.getUserData(j)==g){this._groupRenderer.pool(o);
}this._onPool(o);
},createLayer:function(){return new qx.ui.virtual.layer.WidgetCell(this);
},createItemRenderer:function(){var p=qx.util.Delegate.getMethod(this.getDelegate(),d);

if(p==null){p=function(){return new qx.ui.form.ListItem();
};
}var q=new qx.ui.virtual.cell.WidgetCell();
q.setDelegate({createWidget:p});
return q;
},createGroupRenderer:function(){var r=qx.util.Delegate.getMethod(this.getDelegate(),a);

if(r==null){r=function(){var t=new qx.ui.basic.Label();
t.setAppearance(c);
return t;
};
}var s=new qx.ui.virtual.cell.WidgetCell();
s.setDelegate({createWidget:r});
return s;
},styleSelectabled:function(u){var v=this.__ye(u);
this._styleSelectabled(v);
},styleUnselectabled:function(w){var x=this.__ye(w);
this._styleUnselectabled(x);
},isSelectable:function(y){if(this._list._isGroup(y)){return false;
}var z=this._list._layer.getRenderedCellWidget(y,0);

if(z!=null){return z.isEnabled();
}else{return true;
}},_styleSelectabled:function(A){this.__yf(A,{selected:1});
},_styleUnselectabled:function(B){this.__yf(B,{});
},_onPool:function(C){var D=qx.util.Delegate.getMethod(this.getDelegate(),b);

if(D!=null){D(C);
}},_onItemCreated:function(event){var E=event.getData();
this._configureItem(E);
},_onGroupItemCreated:function(event){var F=event.getData();
this._configureGroupItem(F);
},_onChangeDelegate:function(event){this._itemRenderer.dispose();
this._itemRenderer=this.createItemRenderer();
this._itemRenderer.addListener(i,this._onItemCreated,this);
this._groupRenderer.dispose();
this._groupRenderer=this.createGroupRenderer();
this._groupRenderer.addListener(i,this._onGroupItemCreated,this);
this.removeBindings();
this._list.getPane().fullUpdate();
},__ye:function(G){return this._list._layer.getRenderedCellWidget(G,0);
},__yf:function(H,I){if(H==null){return;
}this._itemRenderer.updateStates(H,I);
}},destruct:function(){this._itemRenderer.dispose();
this._groupRenderer.dispose();
this._itemRenderer=this._groupRenderer=null;
}});
})();
(function(){var d="Color",c="_applyColorOdd",b="_applyColorEven",a="qx.ui.virtual.layer.AbstractBackground";
qx.Class.define(a,{extend:qx.ui.virtual.layer.Abstract,construct:function(e,f){qx.ui.virtual.layer.Abstract.call(this);

if(e){this.setColorEven(e);
}
if(f){this.setColorOdd(f);
}this.__yY={};
this.__za={};
},properties:{colorEven:{nullable:true,check:d,apply:b,themeable:true},colorOdd:{nullable:true,check:d,apply:c,themeable:true}},members:{__zb:null,__zc:null,__yY:null,__za:null,setColor:function(g,h){if(h){this.__yY[g]=qx.theme.manager.Color.getInstance().resolve(h);
}else{delete (this.__yY[g]);
}},clearCustomColors:function(){this.__yY={};
this.updateLayerData();
},getColor:function(i){var j=this.__yY[i];

if(j){return j;
}else{return i%2==0?this.__zb:this.__zc;
}},_applyColorEven:function(k,l){if(k){this.__zb=qx.theme.manager.Color.getInstance().resolve(k);
}else{this.__zb=null;
}this.updateLayerData();
},_applyColorOdd:function(m,n){if(m){this.__zc=qx.theme.manager.Color.getInstance().resolve(m);
}else{this.__zc=null;
}this.updateLayerData();
},setBackground:function(o,p){if(p){this.__za[o]=qx.theme.manager.Decoration.getInstance().resolve(p);
}else{delete (this.__za[o]);
}this.updateLayerData();
},getBackground:function(q){return this.__za[q];
}},destruct:function(){this.__yY=this.__za=null;
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

if(this.__zr(J)){this.updateLayerData();
}},setBackground:function(L,M){qx.ui.virtual.layer.AbstractBackground.prototype.setBackground.call(this,L,M);

if(this.__zr(L)){this.updateLayerData();
}},__zr:function(N){var P=this.getFirstRow();
var O=P+this.getRowSizes().length-1;
return N>=P&&N<=O;
}}});
})();
(function(){var p="String",o="qx.data.Array",n="change",m="row-layer",j="group",h="changeModel",g="resize",f="_applyLabelOptions",d="_applyLabelPath",c="_applyGroupLabelOptions",E="filter",D="Integer",C="_applyModel",B="changeGroups",A="Boolean",z="sorter",y="_applyIconPath",x="_applyDelegate",w="changeDelegate",v="???",t="_applyRowHeight",u="virtual-list",r="_applyGroupLabelPath",s="_applyIconOptions",q="qx.ui.list.List";
qx.Class.define(q,{extend:qx.ui.virtual.core.Scroller,include:[qx.ui.virtual.selection.MModel],implement:qx.data.controller.ISelection,construct:function(F){qx.ui.virtual.core.Scroller.call(this,0,1,20,100);
this._init();
this.__yg=new qx.data.Array();
this.initGroups(this.__yg);

if(F!=null){this.initModel(F);
}this.initItemHeight();
},properties:{appearance:{refine:true,init:u},focusable:{refine:true,init:true},width:{refine:true,init:100},height:{refine:true,init:200},model:{check:o,apply:C,event:h,nullable:true,deferredInit:true},itemHeight:{check:D,init:25,apply:t,themeable:true},labelPath:{check:p,apply:d,nullable:true},iconPath:{check:p,apply:y,nullable:true},groupLabelPath:{check:p,apply:r,nullable:true},labelOptions:{apply:f,nullable:true},iconOptions:{apply:s,nullable:true},groupLabelOptions:{apply:c,nullable:true},delegate:{apply:x,event:w,init:null,nullable:true},autoGrouping:{check:A,init:true},groups:{check:o,event:B,nullable:false,deferredInit:true}},members:{_background:null,_provider:null,_layer:null,__yh:null,__yi:null,__yj:null,__yk:false,__yl:false,__ym:false,__yg:null,refresh:function(){this.__yo();
},_createChildControlImpl:function(G,H){var I;

switch(G){case m:I=new qx.ui.virtual.layer.Row(null,null);
break;
}return I||qx.ui.virtual.core.Scroller.prototype._createChildControlImpl.call(this,G);
},_init:function(){this._provider=new qx.ui.list.provider.WidgetProvider(this);
this.__yh=[];
this.__yi=[];
this.__yj={};
this.__yk=false;
this.__yl=false;
this.__ym=false;
this.getPane().addListener(g,this._onResize,this);
this._initBackground();
this._initLayer();
},_initBackground:function(){this._background=this.getChildControl(m);
this.getPane().addLayer(this._background);
},_initLayer:function(){this._layer=this._provider.createLayer();
this.getPane().addLayer(this._layer);
},_getDataFromRow:function(J){var L=null;
var K=this.getModel();

if(K==null){return null;
}
if(this._isGroup(J)){L=this.getGroups().getItem(this._lookupGroup(J));
}else{L=K.getItem(this._lookup(J));
}
if(L!=null){return L;
}else{return null;
}},_getLookupTable:function(){return this.__yh;
},_lookup:function(M){return this.__yh[M];
},_lookupGroup:function(N){return this.__yi.indexOf(N);
},_reverseLookup:function(O){if(O<0){return -1;
}return this.__yh.indexOf(O);
},_isGroup:function(P){return this._lookup(P)==-1;
},_getSelectables:function(){return this.getModel();
},_applyModel:function(Q,R){if(Q!=null){Q.addListener(n,this._onModelChange,this);
}
if(R!=null){R.removeListener(n,this._onModelChange,this);
}this._provider.removeBindings();
this._onModelChange();
},_applyRowHeight:function(S,T){this.getPane().getRowConfig().setDefaultItemSize(S);
},_applyLabelPath:function(U,V){this._provider.setLabelPath(U);
},_applyIconPath:function(W,X){this._provider.setIconPath(W);
},_applyGroupLabelPath:function(Y,ba){this._provider.setGroupLabelPath(Y);
},_applyLabelOptions:function(bb,bc){this._provider.setLabelOptions(bb);
},_applyIconOptions:function(bd,be){this._provider.setIconOptions(bd);
},_applyGroupLabelOptions:function(bf,bg){this._provider.setGroupLabelOptions(bf);
},_applyDelegate:function(bh,bi){this._provider.setDelegate(bh);
this.__yo();
},_onResize:function(e){this.getPane().getColumnConfig().setItemSize(0,e.getData().width);
},_onModelChange:function(e){this.__yo();
this._applyDefaultSelection();
},__yn:function(){this.getPane().getRowConfig().setItemCount(this.__yh.length);
this.getPane().fullUpdate();
},__yo:function(){this.__yh=[];
this.__yi=[];
this.__yj={};

if(this.isAutoGrouping()){this.getGroups().removeAll();
}var bj=this.getModel();

if(bj!=null){this._runDelegateFilter(bj);
this._runDelegateSorter(bj);
this._runDelegateGroup(bj);
}this._updateSelection();
this.__yn();
},_runDelegateFilter:function(bk){var bl=qx.util.Delegate.getMethod(this.getDelegate(),E);

for(var i=0,l=bk.length;i<l;++i){if(bl==null||bl(bk.getItem(i))){this.__yh.push(i);
}}},_runDelegateSorter:function(bm){if(this.__yh.length==0){return;
}var bn=qx.util.Delegate.getMethod(this.getDelegate(),z);

if(bn!=null){this.__yh.sort(function(a,b){return bn(bm.getItem(a),bm.getItem(b));
});
}},_runDelegateGroup:function(bo){var bs=qx.util.Delegate.getMethod(this.getDelegate(),j);

if(bs!=null){for(var i=0,l=this.__yh.length;i<l;++i){var bp=this.__yh[i];
var br=this.getModel().getItem(bp);
var bq=bs(br);
this.__yp(bq,bp);
}this.__yh=this.__yq();
}},__yp:function(bt,bu){if(bt==null){this.__ym=true;
bt=v;
}var name=this.__yr(bt);

if(this.__yj[name]==null){this.__yj[name]=[];

if(this.isAutoGrouping()){this.getGroups().push(bt);
}}this.__yj[name].push(bu);
},__yq:function(){this.__ys();
var by=[];
var bA=0;
var bw=this.getGroups();

for(var i=0;i<bw.getLength();i++){var bv=bw.getItem(i);
by.push(-1);
this.__yi.push(bA);
bA++;
var bz=this.__yr(bv);
var bx=this.__yj[bz];

if(bx!=null){for(var k=0;k<bx.length;k++){by.push(bx[k]);
bA++;
}}}return by;
},__yr:function(bB){var name=null;

if(!qx.lang.Type.isString(bB)){var bC=this.getGroups().indexOf(bB);
this.__yl=true;
name=j;

if(bC==-1){name+=this.getGroups().getLength();
}else{name+=bC;
}}else{this.__yk=true;
var name=bB;
}return name;
},__ys:function(){if(this.__yl&&this.__ym||this.__yl&&this.__yk){throw new Error("GroupingTypeError: You can't mix 'Objects' and 'Strings' as"+" group identifier!");
}}},destruct:function(){this._background.dispose();
this._provider.dispose();
this._layer.dispose();
this._background=this._provider=this._layer=this.__yh=this.__yi=this.__yj=null;

if(this.__yg){this.__yg.dispose();
}}});
})();

});