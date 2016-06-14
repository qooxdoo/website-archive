qx.$$packageData['130']={"locales":{},"resources":{},"translations":{}};
qx.Part.$$notifyLoad("130", function() {
(function(){var a="qx.ui.list.provider.IListProvider";
qx.Interface.define(a,{members:{createLayer:function(){},createItemRenderer:function(){},createGroupRenderer:function(){},styleSelectabled:function(b){},styleUnselectabled:function(c){},isSelectable:function(d){},setLabelPath:function(e){},setIconPath:function(f){},setLabelOptions:function(g){},setIconOptions:function(h){},setDelegate:function(i){},removeBindings:function(){}}});
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

});