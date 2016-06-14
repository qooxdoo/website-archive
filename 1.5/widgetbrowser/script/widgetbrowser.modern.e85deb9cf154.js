qx.$$packageData['130']={"locales":{},"resources":{},"translations":{}};
qx.Part.$$notifyLoad("130", function() {
(function(){var a="qx.ui.list.provider.IListProvider";
qx.Interface.define(a,{members:{createLayer:function(){},createItemRenderer:function(){},createGroupRenderer:function(){},styleSelectabled:function(b){},styleUnselectabled:function(c){},isSelectable:function(d){},setLabelPath:function(e){},setIconPath:function(f){},setLabelOptions:function(g){},setIconOptions:function(h){},setDelegate:function(i){},removeBindings:function(){}}});
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
(function(){var p="String",o="qx.data.Array",n="change",m="row-layer",j="group",h="changeModel",g="resize",f="_applyLabelOptions",d="_applyLabelPath",c="_applyGroupLabelOptions",E="filter",D="Integer",C="_applyModel",B="changeGroups",A="Boolean",z="sorter",y="_applyIconPath",x="_applyDelegate",w="changeDelegate",v="???",t="_applyRowHeight",u="virtual-list",r="_applyGroupLabelPath",s="_applyIconOptions",q="qx.ui.list.List";
qx.Class.define(q,{extend:qx.ui.virtual.core.Scroller,include:[qx.ui.virtual.selection.MModel],construct:function(F){qx.ui.virtual.core.Scroller.call(this,0,1,20,100);
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

});