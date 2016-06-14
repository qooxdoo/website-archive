qx.$$packageData['130']={"locales":{},"resources":{},"translations":{}};
qx.Part.$$notifyLoad("130", function() {
(function(){var a="qx.ui.list.provider.IListProvider";
qx.Interface.define(a,{members:{createLayer:function(){},createItemRenderer:function(){},createGroupRenderer:function(){},styleSelectabled:function(b){},styleUnselectabled:function(c){},isSelectable:function(d){},setLabelPath:function(e){},setIconPath:function(f){},setLabelOptions:function(g){},setIconOptions:function(h){},setDelegate:function(i){},removeBindings:function(){}}});
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

});