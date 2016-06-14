qx.$$packageData['514']={"locales":{},"resources":{},"translations":{}};
qx.Part.$$notifyLoad("514", function() {
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
this.__iy={};
},properties:{anonymous:{refine:true,init:true}},members:{__iy:null,__bK:null,__xx:null,__xy:null,__wY:null,__pm:null,getFirstRow:function(){return this.__xx;
},getFirstColumn:function(){return this.__xy;
},getRowSizes:function(){return this.__wY||[];
},getColumnSizes:function(){return this.__pm||[];
},syncWidget:function(){if(!this.getContentElement().getDomElement()){return;
}
if(this.__iy.fullUpdate||this.__iy.updateLayerWindow&&this.__iy.updateLayerData){this._fullUpdate.apply(this,this.__bK);
}else if(this.__iy.updateLayerWindow){this._updateLayerWindow.apply(this,this.__bK);
}else if(this.__iy.updateLayerData&&this.__wY){this._updateLayerData();
}
if(this.__iy.fullUpdate||this.__iy.updateLayerWindow){var c=this.__bK;
this.__xx=c[0];
this.__xy=c[1];
this.__wY=c[2];
this.__pm=c[3];
}this.__iy={};
},_updateLayerData:function(){this._fullUpdate(this.__xx,this.__xy,this.__wY,this.__pm);
},_fullUpdate:function(d,e,f,g){throw new Error("Abstract method '_fullUpdate' called!");
},_updateLayerWindow:function(h,i,j,k){this._fullUpdate(h,i,j,k);
},updateLayerData:function(){this.__iy.updateLayerData=true;
qx.ui.core.queue.Widget.add(this);
},fullUpdate:function(l,m,n,o){this.__bK=arguments;
this.__iy.fullUpdate=true;
qx.ui.core.queue.Widget.add(this);
},updateLayerWindow:function(p,q,r,s){this.__bK=arguments;
this.__iy.updateLayerWindow=true;
qx.ui.core.queue.Widget.add(this);
}},destruct:function(){this.__iy=this.__bK=this.__wY=this.__pm=null;
}});
})();
(function(){var f="cell.empty",e="cell.column",d="updated",c="cell.row",b="qx.event.type.Event",a="qx.ui.virtual.layer.WidgetCell";
qx.Class.define(a,{extend:qx.ui.virtual.layer.Abstract,include:[qx.ui.core.MChildrenHandling],construct:function(g){qx.ui.virtual.layer.Abstract.call(this);
this.setZIndex(2);
this._cellProvider=g;
this.__xJ=[];
},properties:{anonymous:{refine:true,init:false}},events:{updated:b},members:{__xJ:null,getRenderedCellWidget:function(h,j){var k=this.getColumnSizes().length;
var p=this.getRowSizes().length;
var o=this.getFirstRow();
var n=this.getFirstColumn();

if(h<o||h>=o+p||j<n||j>=n+k){return null;
}var m=(j-n)+(h-o)*k;
var l=this._getChildren()[m];

if(l.getUserData(f)){return null;
}else{return l;
}},_getSpacer:function(){var q=this.__xJ.pop();

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

if(D.getUserData(f)){this.__xJ.push(D);
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

if(V.getUserData(f)){this.__xJ.push(V);
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
}this._cellProvider=this.__xJ=null;
}});
})();
(function(){var g="scrollY",f="update",d="scrollX",c="pane",b="os.scrollBarOverlayed",a="qx.ui.virtual.core.Scroller";
qx.Class.define(a,{extend:qx.ui.core.scroll.AbstractScrollArea,construct:function(h,i,j,k){qx.ui.core.scroll.AbstractScrollArea.call(this);
this.__wP=new qx.ui.virtual.core.Pane(h,i,j,k);
this.__wP.addListener(f,this._computeScrollbars,this);
this.__wP.addListener(d,this._onScrollPaneX,this);
this.__wP.addListener(g,this._onScrollPaneY,this);

if(qx.core.Environment.get(b)){this._add(this.__wP,{edge:0});
}else{this._add(this.__wP,{row:0,column:0});
}},properties:{width:{refine:true,init:null},height:{refine:true,init:null}},members:{__wP:null,getPane:function(){return this.__wP;
},_createChildControlImpl:function(l,m){if(l==c){return this.__wP;
}else{return qx.ui.core.scroll.AbstractScrollArea.prototype._createChildControlImpl.call(this,l);
}},getItemTop:function(n){throw new Error("The method 'getItemTop' is not implemented!");
},getItemBottom:function(o){throw new Error("The method 'getItemBottom' is not implemented!");
},getItemLeft:function(p){throw new Error("The method 'getItemLeft' is not implemented!");
},getItemRight:function(q){throw new Error("The method 'getItemRight' is not implemented!");
},_onScrollBarX:function(e){this.__wP.setScrollX(e.getData());
},_onScrollBarY:function(e){this.__wP.setScrollY(e.getData());
}},destruct:function(){this.__wP.dispose();
this.__wP=null;
}});
})();
(function(){var p="Boolean",o="change",n="single",m="changeSelection",l="one",k="qx.ui.virtual.selection.MModel",j="qx.data.Array",h="multi",g="selected",f="_applySelection",b="_applyDragSelection",d="_applyQuickSelection",c="_applySelectionMode",a="additive";
qx.Mixin.define(k,{construct:function(){this._initSelectionManager();
this.__xg=new qx.data.Array();
this.initSelection(this.__xg);
},properties:{selection:{check:j,event:m,apply:f,nullable:false,deferredInit:true},selectionMode:{check:[n,h,a,l],init:n,apply:c},dragSelection:{check:p,init:false,apply:b},quickSelection:{check:p,init:false,apply:d}},members:{_manager:null,__xh:false,__xi:false,__xg:null,_initSelectionManager:function(){var self=this;
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
},_onChangeSelection:function(e){if(this.__xi==true){return;
}this.__xh=true;
var E=this.getSelection();
var G=[];

for(var i=0;i<E.getLength();i++){var F=E.getItem(i);
var H=this._getSelectables();
var D=-1;

if(H!=null){D=H.indexOf(F);
}var I=this._reverseLookup(D);

if(I>=0){G.push(I);
}}
if(this._beforeApplySelection!=null&&qx.lang.Type.isFunction(this._beforeApplySelection)){this._beforeApplySelection(G);
}
try{this._manager.replaceSelection(G);
}catch(e){this._manager.selectItem(G[G.length-1]);
}this.__xj();

if(this._afterApplySelection!=null&&qx.lang.Type.isFunction(this._afterApplySelection)){this._afterApplySelection();
}this.__xh=false;
},_onManagerChangeSelection:function(e){if(this.__xh==true){return;
}this.__xi=true;
this.__xj();
this.__xi=false;
},__xj:function(){if(this.__xl()){return;
}var J=this._manager.getSelection();
var K=[];

for(var i=0;i<J.length;i++){K.push(this._getDataFromRow(J[i]));
}this.__xk(K);
},__xk:function(L){var M=this.getSelection();

if(L.length>0){var O=[0,M.getLength()];
O=O.concat(L);
var N=M.splice.apply(M,O);
N.dispose();
}else{M.removeAll();
}},__xl:function(){var Q=this.getSelection();
var S=this._manager.getSelection();

if(Q.getLength()!==S.length){return false;
}
for(var i=0;i<Q.getLength();i++){var R=Q.getItem(i);
var T=this._getSelectables();
var P=-1;

if(T!=null){P=T.indexOf(R);
}var U=this._reverseLookup(P);

if(U!==S[i]){return false;
}}return true;
},_applyDefaultSelection:function(){if(this._manager!=null){this._manager._applyDefaultSelection();
}}},destruct:function(){this._manager.dispose();
this._manager=null;

if(this.__xg){this.__xg.dispose();
}}});
})();
(function(){var p="String",o="qx.data.Array",n="change",m="row-layer",j="group",h="changeModel",g="resize",f="_applyLabelOptions",d="_applyLabelPath",c="_applyGroupLabelOptions",E="filter",D="Integer",C="_applyModel",B="changeGroups",A="Boolean",z="sorter",y="_applyIconPath",x="_applyDelegate",w="changeDelegate",v="???",t="_applyRowHeight",u="virtual-list",r="_applyGroupLabelPath",s="_applyIconOptions",q="qx.ui.list.List";
qx.Class.define(q,{extend:qx.ui.virtual.core.Scroller,include:[qx.ui.virtual.selection.MModel],construct:function(F){qx.ui.virtual.core.Scroller.call(this,0,1,20,100);
this._init();
this.__xm=new qx.data.Array();
this.initGroups(this.__xm);

if(F!=null){this.initModel(F);
}this.initItemHeight();
},properties:{appearance:{refine:true,init:u},focusable:{refine:true,init:true},width:{refine:true,init:100},height:{refine:true,init:200},model:{check:o,apply:C,event:h,nullable:true,deferredInit:true},itemHeight:{check:D,init:25,apply:t,themeable:true},labelPath:{check:p,apply:d,nullable:true},iconPath:{check:p,apply:y,nullable:true},groupLabelPath:{check:p,apply:r,nullable:true},labelOptions:{apply:f,nullable:true},iconOptions:{apply:s,nullable:true},groupLabelOptions:{apply:c,nullable:true},delegate:{apply:x,event:w,init:null,nullable:true},autoGrouping:{check:A,init:true},groups:{check:o,event:B,nullable:false,deferredInit:true}},members:{_background:null,_provider:null,_layer:null,__nP:null,__xn:null,__xo:null,__xp:false,__xq:false,__xr:false,__xm:null,refresh:function(){this.__od();
},_createChildControlImpl:function(G,H){var I;

switch(G){case m:I=new qx.ui.virtual.layer.Row(null,null);
break;
}return I||qx.ui.virtual.core.Scroller.prototype._createChildControlImpl.call(this,G);
},_init:function(){this._provider=new qx.ui.list.provider.WidgetProvider(this);
this.__nP=[];
this.__xn=[];
this.__xo={};
this.__xp=false;
this.__xq=false;
this.__xr=false;
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
}},_getLookupTable:function(){return this.__nP;
},_lookup:function(M){return this.__nP[M];
},_lookupGroup:function(N){return this.__xn.indexOf(N);
},_reverseLookup:function(O){if(O<0){return -1;
}return this.__nP.indexOf(O);
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
this.__od();
},_onResize:function(e){this.getPane().getColumnConfig().setItemSize(0,e.getData().width);
},_onModelChange:function(e){this.__od();
this._applyDefaultSelection();
},__xs:function(){this.getPane().getRowConfig().setItemCount(this.__nP.length);
this.getPane().fullUpdate();
},__od:function(){this.__nP=[];
this.__xn=[];
this.__xo={};

if(this.isAutoGrouping()){this.getGroups().removeAll();
}var bj=this.getModel();

if(bj!=null){this._runDelegateFilter(bj);
this._runDelegateSorter(bj);
this._runDelegateGroup(bj);
}this._updateSelection();
this.__xs();
},_runDelegateFilter:function(bk){var bl=qx.util.Delegate.getMethod(this.getDelegate(),E);

for(var i=0,l=bk.length;i<l;++i){if(bl==null||bl(bk.getItem(i))){this.__nP.push(i);
}}},_runDelegateSorter:function(bm){if(this.__nP.length==0){return;
}var bn=qx.util.Delegate.getMethod(this.getDelegate(),z);

if(bn!=null){this.__nP.sort(function(a,b){return bn(bm.getItem(a),bm.getItem(b));
});
}},_runDelegateGroup:function(bo){var bs=qx.util.Delegate.getMethod(this.getDelegate(),j);

if(bs!=null){for(var i=0,l=this.__nP.length;i<l;++i){var bp=this.__nP[i];
var br=this.getModel().getItem(bp);
var bq=bs(br);
this.__xt(bq,bp);
}this.__nP=this.__xu();
}},__xt:function(bt,bu){if(bt==null){this.__xr=true;
bt=v;
}var name=this.__xv(bt);

if(this.__xo[name]==null){this.__xo[name]=[];

if(this.isAutoGrouping()){this.getGroups().push(bt);
}}this.__xo[name].push(bu);
},__xu:function(){this.__xw();
var by=[];
var bA=0;
var bw=this.getGroups();

for(var i=0;i<bw.getLength();i++){var bv=bw.getItem(i);
by.push(-1);
this.__xn.push(bA);
bA++;
var bz=this.__xv(bv);
var bx=this.__xo[bz];

if(bx!=null){for(var k=0;k<bx.length;k++){by.push(bx[k]);
bA++;
}}}return by;
},__xv:function(bB){var name=null;

if(!qx.lang.Type.isString(bB)){var bC=this.getGroups().indexOf(bB);
this.__xq=true;
name=j;

if(bC==-1){name+=this.getGroups().getLength();
}else{name+=bC;
}}else{this.__xp=true;
var name=bB;
}return name;
},__xw:function(){if(this.__xq&&this.__xr||this.__xq&&this.__xp){throw new Error("GroupingTypeError: You can't mix 'Objects' and 'Strings' as"+" group identifier!");
}}},destruct:function(){this._background.dispose();
this._provider.dispose();
this._layer.dispose();
this._background=this._provider=this._layer=this.__nP=this.__xn=this.__xo=null;

if(this.__xm){this.__xm.dispose();
}}});
})();
(function(){var a="qx.ui.virtual.core.IWidgetCellProvider";
qx.Interface.define(a,{members:{getCellWidget:function(b,c){},poolCellWidget:function(d){}}});
})();
(function(){var e="change",d="qx.event.type.Event",c="qx.ui.virtual.core.Axis";
qx.Class.define(c,{extend:qx.core.Object,construct:function(f,g){qx.core.Object.call(this);
this.itemCount=g;
this.defaultItemSize=f;
this.customSizes={};
},events:{"change":d},members:{__xc:null,getDefaultItemSize:function(){return this.defaultItemSize;
},setDefaultItemSize:function(h){if(this.defaultItemSize!==h){this.defaultItemSize=h;
this.__xc=null;
this.fireNonBubblingEvent(e);
}},getItemCount:function(){return this.itemCount;
},setItemCount:function(j){if(this.itemCount!==j){this.itemCount=j;
this.__xc=null;
this.fireNonBubblingEvent(e);
}},setItemSize:function(k,l){if(this.customSizes[k]==l){return;
}
if(l===null){delete this.customSizes[k];
}else{this.customSizes[k]=l;
}this.__xc=null;
this.fireNonBubblingEvent(e);
},getItemSize:function(m){return this.customSizes[m]||this.defaultItemSize;
},resetItemSizes:function(){this.customSizes={};
this.__xc=null;
this.fireNonBubblingEvent(e);
},__xd:function(){if(this.__xc){return this.__xc;
}var p=this.defaultItemSize;
var w=this.itemCount;
var r=[];

for(var t in this.customSizes){var n=parseInt(t,10);

if(n<w){r.push(n);
}}
if(r.length==0){var s=[{startIndex:0,endIndex:w-1,firstItemSize:p,rangeStart:0,rangeEnd:w*p-1}];
this.__xc=s;
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
this.__xc=s;
return s;
},__xe:function(y){var z=this.__xc||this.__xd();
var A=0;
var C=z.length-1;
while(true){var D=A+((C-A)>>1);
var B=z[D];

if(B.rangeEnd<y){A=D+1;
}else if(B.rangeStart>y){C=D-1;
}else{return B;
}}},getItemAtPosition:function(E){if(E<0||E>=this.getTotalSize()){return null;
}var G=this.__xe(E);
var I=G.rangeStart;
var F=G.startIndex;
var J=G.firstItemSize;

if(I+J>E){return {index:F,offset:E-I};
}else{var H=this.defaultItemSize;
return {index:F+1+Math.floor((E-I-J)/H),offset:(E-I-J)%H};
}},__xf:function(K){var L=this.__xc||this.__xd();
var M=0;
var O=L.length-1;
while(true){var P=M+((O-M)>>1);
var N=L[P];

if(N.endIndex<K){M=P+1;
}else if(N.startIndex>K){O=P-1;
}else{return N;
}}},getItemPosition:function(Q){if(Q<0||Q>=this.itemCount){return null;
}var R=this.__xf(Q);

if(R.startIndex==Q){return R.rangeStart;
}else{return R.rangeStart+R.firstItemSize+(Q-R.startIndex-1)*this.defaultItemSize;
}},getTotalSize:function(){var S=this.__xc||this.__xd();
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
}},destruct:function(){this.customSizes=this.__xc=null;
}});
})();
(function(){var a="qx.ui.virtual.cell.IWidgetCell";
qx.Interface.define(a,{members:{getCellWidget:function(b,c){},pool:function(d){},updateStates:function(e,f){},updateData:function(g,h){}}});
})();
(function(){var d="Color",c="_applyColorOdd",b="_applyColorEven",a="qx.ui.virtual.layer.AbstractBackground";
qx.Class.define(a,{extend:qx.ui.virtual.layer.Abstract,construct:function(e,f){qx.ui.virtual.layer.Abstract.call(this);

if(e){this.setColorEven(e);
}
if(f){this.setColorOdd(f);
}this.__xz={};
this.__xA={};
},properties:{colorEven:{nullable:true,check:d,apply:b,themeable:true},colorOdd:{nullable:true,check:d,apply:c,themeable:true}},members:{__xB:null,__xC:null,__xz:null,__xA:null,setColor:function(g,h){if(h){this.__xz[g]=qx.theme.manager.Color.getInstance().resolve(h);
}else{delete (this.__xz[g]);
}},clearCustomColors:function(){this.__xz={};
this.updateLayerData();
},getColor:function(i){var j=this.__xz[i];

if(j){return j;
}else{return i%2==0?this.__xB:this.__xC;
}},_applyColorEven:function(k,l){if(k){this.__xB=qx.theme.manager.Color.getInstance().resolve(k);
}else{this.__xB=null;
}this.updateLayerData();
},_applyColorOdd:function(m,n){if(m){this.__xC=qx.theme.manager.Color.getInstance().resolve(m);
}else{this.__xC=null;
}this.updateLayerData();
},setBackground:function(o,p){if(p){this.__xA[o]=qx.theme.manager.Decoration.getInstance().resolve(p);
}else{delete (this.__xA[o]);
}this.updateLayerData();
},getBackground:function(q){return this.__xA[q];
}},destruct:function(){this.__xz=this.__xA=null;
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

if(this.__xD(J)){this.updateLayerData();
}},setBackground:function(L,M){qx.ui.virtual.layer.AbstractBackground.prototype.setBackground.call(this,L,M);

if(this.__xD(L)){this.updateLayerData();
}},__xD:function(N){var P=this.getFirstRow();
var O=P+this.getRowSizes().length-1;
return N>=P&&N<=O;
}}});
})();
(function(){var j="dropdown",i="list",h="popupOpen",g="String",f="open",e="close",d="changeModel",c="changeLabelOptions",b="blur",a="_applyDelegate",L="_applyLabelPath",K="qx.data.Array",J="qx.ui.form.core.AbstractVirtualBox",I="_applyLabelOptions",H="Down",G="Integer",F="_applyModel",E="Up",D="",C="_applyMaxListHeight",q="visible",r="middle",o="changeIconOptions",p="resize",m="changeDelegate",n="changeVisibility",k="changeLabelPath",l="keypress",s="changeIconPath",t="_applyRowHeight",w="click",v="abstract",y="Number",x="_applyIconPath",A="Escape",z="_applyIconOptions",u=".",B="[0]";
qx.Class.define(J,{extend:qx.ui.core.Widget,include:qx.ui.form.MForm,implement:qx.ui.form.IForm,type:v,construct:function(M){qx.ui.core.Widget.call(this);
var N=new qx.ui.layout.HBox();
this._setLayout(N);
N.setAlignY(r);
this.addListener(l,this._handleKeyboard,this);
this.addListener(w,this._handleMouse,this);
this.addListener(b,this._onBlur,this);
this.addListener(p,this._onResize,this);
this._createChildControl(j);

if(M!=null){this.initModel(M);
}else{this.__Ca=new qx.data.Array();
this.initModel(this.__Ca);
}},properties:{focusable:{refine:true,init:true},width:{refine:true,init:120},model:{check:K,apply:F,event:d,nullable:false,deferredInit:true},delegate:{apply:a,event:m,init:null,nullable:true},labelPath:{check:g,apply:L,event:k,nullable:true},labelOptions:{apply:I,event:c,nullable:true},iconPath:{check:g,event:s,apply:x,nullable:true},iconOptions:{apply:z,event:o,nullable:true},itemHeight:{check:G,init:25,apply:t,themeable:true},maxListHeight:{check:y,apply:C,nullable:true,init:200}},members:{__Ca:null,_forwardStates:{focused:true,invalid:true},refresh:function(){this.getChildControl(j).getChildControl(i).refresh();
qx.ui.core.queue.Widget.add(this);
},open:function(){this._beforeOpen();
this.getChildControl(j).open();
},close:function(){this._beforeClose();
this.getChildControl(j).close();
},toggle:function(){var O=this.getChildControl(j);

if(O.isVisible()){this.close();
}else{this.open();
}},_createChildControlImpl:function(P,Q){var R;

switch(P){case j:R=new qx.ui.form.core.VirtualDropDownList(this);
R.addListener(n,this._onPopupChangeVisibility,this);
break;
}return R||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,P,Q);
},_beforeOpen:function(){},_beforeClose:function(){},_getAction:function(event){var S=event.getKeyIdentifier();
var U=this.getChildControl(j).isVisible();
var T=this._isModifierPressed(event);

if(!U&&!T&&(S===H||S===E)){return f;
}else if(U&&!T&&S===A){return e;
}else{return null;
}},_getBindPath:function(V,W){var X=V+B;

if(W!=null&&W!=D){X+=u+W;
}return X;
},_isModifierPressed:function(event){var bb=event.isAltPressed();
var bc=event.isCtrlOrCommandPressed();
var Y=event.isShiftPressed();
var ba=event.isMetaPressed();
return (bb||bc||Y||ba);
},_onBlur:function(event){this.close();
},_handleKeyboard:function(event){var bd=this._getAction(event);
var be=this.getChildControl(j).isVisible();

switch(bd){case f:this.open();
break;
case e:this.close();
break;
default:if(be){this.getChildControl(j)._handleKeyboard(event);
}break;
}},_handleMouse:function(event){},_onResize:function(event){this.getChildControl(j).setMinWidth(event.getData().width);
},_onPopupChangeVisibility:function(event){event.getData()==q?this.addState(h):this.removeState(h);
},_applyModel:function(bf,bg){this.getChildControl(j).getChildControl(i).setModel(bf);
qx.ui.core.queue.Widget.add(this);
},_applyDelegate:function(bh,bi){this.getChildControl(j).getChildControl(i).setDelegate(bh);
},_applyLabelPath:function(bj,bk){this.getChildControl(j).getChildControl(i).setLabelPath(bj);
qx.ui.core.queue.Widget.add(this);
},_applyLabelOptions:function(bl,bm){this.getChildControl(j).getChildControl(i).setLabelOptions(bl);
qx.ui.core.queue.Widget.add(this);
},_applyIconPath:function(bn,bo){this.getChildControl(j).getChildControl(i).setIconPath(bn);
qx.ui.core.queue.Widget.add(this);
},_applyIconOptions:function(bp,bq){this.getChildControl(j).getChildControl(i).setIconOptions(bp);
qx.ui.core.queue.Widget.add(this);
},_applyRowHeight:function(br,bs){this.getChildControl(j).getChildControl(i).setItemHeight(br);
},_applyMaxListHeight:function(bt,bu){this.getChildControl(j).getChildControl(i).setMaxHeight(bt);
}},destruct:function(){if(this.__Ca){this.__Ca.dispose();
}}});
})();
(function(){var a="qx.ui.list.provider.IListProvider";
qx.Interface.define(a,{members:{createLayer:function(){},createItemRenderer:function(){},createGroupRenderer:function(){},styleSelectabled:function(b){},styleUnselectabled:function(c){},isSelectable:function(d){},setLabelPath:function(e){},setIconPath:function(f){},setLabelOptions:function(g){},setIconOptions:function(h){},setDelegate:function(i){},removeBindings:function(){}}});
})();
(function(){var p="cell.type",o="String",n="",m="]",l="BindingIds",k="group",j="model[",i="groups[",h="model",g="changeDelegate",c="label",f="qx.ui.list.core.MWidgetController",d="icon",b="value",a=".";
qx.Mixin.define(f,{construct:function(){this.__xE=[];
},properties:{labelPath:{check:o,nullable:true},iconPath:{check:o,nullable:true},groupLabelPath:{check:o,nullable:true},labelOptions:{nullable:true},iconOptions:{nullable:true},groupLabelOptions:{nullable:true},delegate:{event:g,init:null,nullable:true}},members:{__xE:null,bindDefaultProperties:function(q,r){if(q.getUserData(p)!=k){this.bindProperty(n,h,null,q,r);
this.bindProperty(this.getLabelPath(),c,this.getLabelOptions(),q,r);

if(this.getIconPath()!=null){this.bindProperty(this.getIconPath(),d,this.getIconOptions(),q,r);
}}else{this.bindProperty(this.getGroupLabelPath(),b,this.getGroupLabelOptions(),q,r);
}},bindProperty:function(s,t,u,v,w){var y=v.getUserData(p);
var x=this.__xF(w,s,y);
var z=this._list.bind(x,v,t,u);
this.__rE(v,z);
},bindPropertyReverse:function(A,B,C,D,E){var G=D.getUserData(p);
var F=this.__xF(E,A,G);
var H=D.bind(B,this._list,F,C);
this.__rE(D,H);
},removeBindings:function(){while(this.__xE.length>0){var I=this.__xE.pop();
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
}},_removeBindingsFrom:function(T){var U=this.__xG(T);

while(U.length>0){var V=U.pop();

try{this._list.removeBinding(V);
}catch(e){T.removeBinding(V);
}}
if(qx.lang.Array.contains(this.__xE,T)){qx.lang.Array.remove(this.__xE,T);
}},__xF:function(W,X,Y){var ba=j+W+m;

if(Y==k){ba=i+W+m;
}
if(X!=null&&X!=n){ba+=a+X;
}return ba;
},__rE:function(bb,bc){var bd=this.__xG(bb);

if(!qx.lang.Array.contains(bd,bc)){bd.push(bc);
}
if(!qx.lang.Array.contains(this.__xE,bb)){this.__xE.push(bb);
}},__xG:function(be){var bf=be.getUserData(l);

if(bf==null){bf=[];
be.setUserData(l,bf);
}return bf;
}},destruct:function(){this.__xE=null;
}});
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
},styleSelectabled:function(u){var v=this.__xH(u);
this._styleSelectabled(v);
},styleUnselectabled:function(w){var x=this.__xH(w);
this._styleUnselectabled(x);
},isSelectable:function(y){if(this._list._isGroup(y)){return false;
}var z=this._list._layer.getRenderedCellWidget(y,0);

if(z!=null){return z.isEnabled();
}else{return true;
}},_styleSelectabled:function(A){this.__xI(A,{selected:1});
},_styleUnselectabled:function(B){this.__xI(B,{});
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
},__xH:function(G){return this._list._layer.getRenderedCellWidget(G,0);
},__xI:function(H,I){if(H==null){return;
}this._itemRenderer.updateStates(H,I);
}},destruct:function(){this._itemRenderer.dispose();
this._groupRenderer.dispose();
this._itemRenderer=this._groupRenderer=null;
}});
})();
(function(){var n="list",m="change",l="Invalid parameter 'target'!",k="changeModel",j="mouseup",h="one",g="Enter",f="changeDelegate",e="qx.data.Array",d="changeVisibility",a="qx.ui.form.core.VirtualDropDownList",c="_applySelection",b="changeSelection";
qx.Class.define(a,{extend:qx.ui.popup.Popup,construct:function(o){qx.core.Assert.assertNotNull(o,l);
qx.core.Assert.assertNotUndefined(o,l);
qx.core.Assert.assertInterface(o,qx.ui.form.core.AbstractVirtualBox,l);
qx.ui.popup.Popup.call(this,new qx.ui.layout.VBox());
this._target=o;
this._createChildControl(n);
this.addListener(d,this.__Cd,this);
this.__xg=new qx.data.Array();
this.initSelection(this.__xg);
},properties:{autoHide:{refine:true,init:false},keepActive:{refine:true,init:true},selection:{check:e,event:b,apply:c,nullable:false,deferredInit:true}},members:{_target:null,_preselected:null,__Cb:false,__Cc:false,__xg:null,open:function(){this.placeToWidget(this._target,true);
this.show();
},close:function(){this.hide();
},setPreselected:function(p){this._preselected=p;
this.__Cc=true;
var r=this.getChildControl(n).getSelection();
var q=new qx.data.Array([p]);
this.__xj(q,r);
q.dispose();
this.__Cc=false;
},_createChildControlImpl:function(s,t){var u;

switch(s){case n:u=new qx.ui.list.List().set({focusable:false,keepFocus:true,height:null,width:null,maxHeight:this._target.getMaxListHeight(),selectionMode:h,quickSelection:true});
u.getSelection().addListener(m,this._onListChangeSelection,this);
u.addListener(j,this._handleMouse,this);
u.addListener(k,this._onChangeModel,this);
u.addListener(f,this._onChangeDelegate,this);
this.add(u,{flex:1});
break;
}return u||qx.ui.popup.Popup.prototype._createChildControlImpl.call(this,s,t);
},_handleKeyboard:function(event){if(this.isVisible()&&event.getKeyIdentifier()===g){this.__Ce();
return;
}var v=event.clone();
v.setTarget(this.getChildControl(n));
v.setBubbles(false);
this.getChildControl(n).dispatchEvent(v);
},_handleMouse:function(event){this.__Ce();
},__fJ:function(event){if(this.__Cb){return;
}var w=this.getSelection();
var x=this.getChildControl(n).getSelection();
this.__Cc=true;
this.__xj(w,x);
this.__Cc=false;
this.__Cb=true;
this.__xj(x,w);
this.__Cb=false;
},_onListChangeSelection:function(event){if(this.__Cc){return;
}var y=this.getChildControl(n).getSelection();

if(this.isVisible()){this.setPreselected(y.getItem(0));
}else{this.__Cb=true;
this.__xj(y,this.getSelection());
this.__Cb=false;
}},__Cd:function(event){if(this.isVisible()){if(this._preselected==null){var z=this.getSelection();
var A=this.getChildControl(n).getSelection();
this.__xj(z,A);
}this.__Cf();
}else{this.setPreselected(null);
}},_onChangeModel:function(event){this.getSelection().removeAll();
},_onChangeDelegate:function(event){this.getSelection().removeAll();
},_applySelection:function(B,C){B.addListener(m,this.__fJ,this);

if(C!=null){C.removeListener(m,this.__fJ,this);
}this.__xj(B,this.getChildControl(n).getSelection(B));
},__Ce:function(){if(this._preselected!=null){var D=this.getSelection();
D.splice(0,1,this._preselected);
this._preselected=null;
this.close();
}},__xj:function(E,F){if(E.equals(F)){return;
}
if(E.getLength()<=0){F.removeAll();
}else{var G=F.toArray();
qx.lang.Array.removeAll(G);

for(var i=0;i<E.getLength();i++){G.push(E.getItem(i));
}F.length=G.length;
var H=F.getLength()-1;
var I=F.splice(H,1,F.getItem(H));
I.dispose();
}},__Cf:function(){this.__Cg();
this.__Ch();
},__Cg:function(){var J=this._target.getBounds().width;
this.setWidth(J);
},__Ch:function(){var K=this.__Ci();
var N=this._target.getMaxListHeight();
var L=this.getChildControl(n);
var M=L.getPane().getRowConfig().getTotalSize();

if(N==null||M<N){N=M;
}
if(N>K){L.setMaxHeight(K);
}else if(N<K){L.setMaxHeight(N);
}},__Ci:function(){var O=this.getLayoutLocation(this._target);
var Q=qx.bom.Viewport.getHeight();
var R=O.top;
var P=Q-O.bottom;
return R>P?R:P;
}},destruct:function(){if(this.__xg){this.__xg.dispose();
}}});
})();
(function(){var d="cell.states",c="created",b="qx.ui.virtual.cell.AbstractWidget",a="qx.event.type.Data";
qx.Class.define(b,{extend:qx.core.Object,implement:[qx.ui.virtual.cell.IWidgetCell],construct:function(){qx.core.Object.call(this);
this.__cO=[];
},events:{"created":a},members:{__cO:null,_createWidget:function(){throw new Error("abstract method call");
},updateData:function(e,f){throw new Error("abstract method call");
},updateStates:function(g,h){var k=g.getUserData(d);
if(k){var i=h||{};

for(var j in k){if(!i[j]){g.removeState(j);
}}}else{k={};
}if(h){for(var j in h){if(!k.state){g.addState(j);
}}}g.setUserData(d,h);
},getCellWidget:function(l,m){var n=this.__xK();
this.updateStates(n,m);
this.updateData(n,l);
return n;
},pool:function(o){this.__cO.push(o);
},_cleanupPool:function(){var p=this.__cO.pop();

while(p){p.destroy();
p=this.__cO.pop();
}},__xK:function(){var q=this.__cO.pop();

if(q==null){q=this._createWidget();
this.fireDataEvent(c,q);
}return q;
}},destruct:function(){this._cleanupPool();
this.__cO=null;
}});
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
(function(){var b="_applyDelegate",a="qx.ui.virtual.cell.WidgetCell";
qx.Class.define(a,{extend:qx.ui.virtual.cell.AbstractWidget,properties:{delegate:{apply:b,init:null,nullable:true}},members:{_applyDelegate:function(c,d){this._cleanupPool();
},_createWidget:function(){var e=this.getDelegate();

if(e!=null&&e.createWidget!=null){return e.createWidget();
}else{return new qx.ui.core.Widget();
}},updateData:function(f,g){for(var h in g){if(qx.Class.hasProperty(f.constructor,h)){qx.util.PropertyUtil.setUserValue(f,h,g[h]);
}else{throw new Error("Can't update data! The key '"+h+"' is not a Property!");
}}}}});
})();
(function(){var b="Integer",a="qx.ui.virtual.core.CellEvent";
qx.Class.define(a,{extend:qx.event.type.Mouse,properties:{row:{check:b,nullable:true},column:{check:b,nullable:true}},members:{init:function(c,d,e,f){d.clone(this);
this.setBubbles(false);
this.setRow(e);
this.setColumn(f);
}}});
})();
(function(){var v="appear",u="qx.ui.virtual.core.CellEvent",t="update",s="change",r="qx.event.type.Data",q="qx.ui.virtual.core.Pane",p="resize",o="click",n="scrollX",m="dblclick",d="contextmenu",l="cellClick",h="__wV",c="__wR",b="qx.event.type.Event",g="scrollY",f="__wW",j="__wQ",a="cellDblclick",k="cellContextmenu";
qx.Class.define(q,{extend:qx.ui.core.Widget,construct:function(w,x,y,z){qx.ui.core.Widget.call(this);
this.__wQ=new qx.ui.virtual.core.Axis(y,w);
this.__wR=new qx.ui.virtual.core.Axis(z,x);
this.__rL=0;
this.__rK=0;
this.__wS=0;
this.__wT=0;
this.__wU={};
this.__iy={};
this.__wV=new qx.ui.container.Composite();
this.__wV.setUserBounds(0,0,0,0);
this._add(this.__wV);
this.__wW=[];
this.__wQ.addListener(s,this.fullUpdate,this);
this.__wR.addListener(s,this.fullUpdate,this);
this.addListener(p,this._onResize,this);
this.addListenerOnce(v,this._onAppear,this);
this.addListener(o,this._onClick,this);
this.addListener(m,this._onDblclick,this);
this.addListener(d,this._onContextmenu,this);
},events:{cellClick:u,cellContextmenu:u,cellDblclick:u,update:b,scrollX:r,scrollY:r},properties:{width:{refine:true,init:400},height:{refine:true,init:300}},members:{__wQ:null,__wR:null,__rL:null,__rK:null,__wS:null,__wT:null,__wU:null,__iy:null,__wV:null,__wW:null,__wX:null,__pm:null,__wY:null,getRowConfig:function(){return this.__wQ;
},getColumnConfig:function(){return this.__wR;
},getChildren:function(){return [this.__wV];
},addLayer:function(A){this.__wW.push(A);
A.setUserBounds(0,0,0,0);
this.__wV.add(A);
},getLayers:function(){return this.__wW;
},getVisibleLayers:function(){var B=[];

for(var i=0;i<this.__wW.length;i++){var C=this.__wW[i];

if(C.isVisible()){B.push(C);
}}return B;
},getScrollMaxX:function(){var D=this.getInnerSize();

if(D){return Math.max(0,this.__wR.getTotalSize()-D.width);
}return 0;
},getScrollMaxY:function(){var E=this.getInnerSize();

if(E){return Math.max(0,this.__wQ.getTotalSize()-E.height);
}return 0;
},setScrollY:function(F){var G=this.getScrollMaxY();

if(F<0){F=0;
}else if(F>G){F=G;
}
if(this.__rL!==F){var H=this.__rL;
this.__rL=F;
this._deferredUpdateScrollPosition();
this.fireDataEvent(g,F,H);
}},getScrollY:function(){return this.__rL;
},setScrollX:function(I){var J=this.getScrollMaxX();

if(I<0){I=0;
}else if(I>J){I=J;
}
if(I!==this.__rK){var K=this.__rK;
this.__rK=I;
this._deferredUpdateScrollPosition();
this.fireDataEvent(n,I,K);
}},getScrollX:function(){return this.__rK;
},getScrollSize:function(){return {width:this.__wR.getTotalSize(),height:this.__wQ.getTotalSize()};
},scrollRowIntoView:function(L){var O=this.getBounds();

if(!O){this.addListenerOnce(v,function(){qx.event.Timer.once(function(){this.scrollRowIntoView(L);
},this,0);
},this);
return;
}var P=this.__wQ.getItemPosition(L);
var N=P+this.__wQ.getItemSize(L);
var M=this.getScrollY();

if(P<M){this.setScrollY(P);
}else if(N>M+O.height){this.setScrollY(N-O.height);
}},scrollColumnIntoView:function(Q){var T=this.getBounds();

if(!T){this.addListenerOnce(v,function(){qx.event.Timer.once(function(){this.scrollColumnIntoView(Q);
},this,0);
},this);
return;
}var S=this.__wR.getItemPosition(Q);
var R=S+this.__wR.getItemSize(Q);
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
}bb=this.__wQ.getItemAtPosition(this.getScrollY()+ba-bd.top);
bc=this.__wR.getItemAtPosition(this.getScrollX()+Y-bd.left);

if(!bb||!bc){return null;
}return {row:bb.index,column:bc.index};
},prefetchX:function(be,bf,bg,bh){var bi=this.getVisibleLayers();

if(bi.length==0){return;
}var bk=this.getBounds();

if(!bk){return;
}var bl=this.__rK+bk.width;
var bm=this.__wT-bl;

if(this.__rK-this.__wU.left<Math.min(this.__rK,be)||this.__wU.right-bl<Math.min(bm,bg)){var bn=Math.min(this.__rK,bf);
var bj=Math.min(bm,bh);
this._setLayerWindow(bi,this.__rK-bn,this.__rL,bk.width+bn+bj,bk.height,false);
}},prefetchY:function(bo,bp,bq,br){var bs=this.getVisibleLayers();

if(bs.length==0){return;
}var bv=this.getBounds();

if(!bv){return;
}var bt=this.__rL+bv.height;
var bu=this.__wS-bt;

if(this.__rL-this.__wU.top<Math.min(this.__rL,bo)||this.__wU.bottom-bt<Math.min(bu,bq)){var bx=Math.min(this.__rL,bp);
var bw=Math.min(bu,br);
this._setLayerWindow(bs,this.__rK,this.__rL-bx,bv.width,bv.height+bx+bw,false);
}},_onResize:function(){if(this.getContainerElement().getDomElement()){this.__wX=true;
this._updateScrollPosition();
this.__wX=null;
this.fireEvent(t);
}},_onAppear:function(){this.fullUpdate();
},_onClick:function(e){this.__xa(e,l);
},_onContextmenu:function(e){this.__xa(e,k);
},_onDblclick:function(e){this.__xa(e,a);
},__xa:function(e,by){var bz=this.getCellAtPosition(e.getDocumentLeft(),e.getDocumentTop());

if(!bz){return;
}this.fireNonBubblingEvent(by,qx.ui.virtual.core.CellEvent,[this,e,bz.row,bz.column]);
},syncWidget:function(){if(this.__iy._fullUpdate){this._fullUpdate();
}else if(this.__iy._updateScrollPosition){this._updateScrollPosition();
}this.__iy={};
},_setLayerWindow:function(bA,bB,top,bC,bD,bE){var bJ=this.__wQ.getItemAtPosition(top);

if(bJ){var bL=bJ.index;
var bP=this.__wQ.getItemSizes(bL,bD+bJ.offset);
var bK=qx.lang.Array.sum(bP);
var bR=top-bJ.offset;
var bO=top-bJ.offset+bK;
}else{var bL=0;
var bP=[];
var bK=0;
var bR=0;
var bO=0;
}var bN=this.__wR.getItemAtPosition(bB);

if(bN){var bH=bN.index;
var bG=this.__wR.getItemSizes(bH,bC+bN.offset);
var bM=qx.lang.Array.sum(bG);
var bQ=bB-bN.offset;
var bI=bB-bN.offset+bM;
}else{var bH=0;
var bG=[];
var bM=0;
var bQ=0;
var bI=0;
}this.__wU={top:bR,bottom:bO,left:bQ,right:bI};
this.__wV.setUserBounds(this.__wU.left-this.__rK,this.__wU.top-this.__rL,bM,bK);
this.__pm=bG;
this.__wY=bP;

for(var i=0;i<this.__wW.length;i++){var bF=this.__wW[i];
bF.setUserBounds(0,0,bM,bK);

if(bE){bF.fullUpdate(bL,bH,bP,bG);
}else{bF.updateLayerWindow(bL,bH,bP,bG);
}}},__xb:function(){if(this.__wX){return;
}var bS=this.getScrollSize();

if(this.__wS!==bS.height||this.__wT!==bS.width){this.__wS=bS.height;
this.__wT=bS.width;
this.fireEvent(t);
}},fullUpdate:function(){this.__iy._fullUpdate=1;
qx.ui.core.queue.Widget.add(this);
},isUpdatePending:function(){return !!this.__iy._fullUpdate;
},_fullUpdate:function(){var bT=this.getVisibleLayers();

if(bT.length==0){this.__xb();
return;
}var bU=this.getBounds();

if(!bU){return ;
}this._setLayerWindow(bT,this.__rK,this.__rL,bU.width,bU.height,true);
this.__xb();
},_deferredUpdateScrollPosition:function(){this.__iy._updateScrollPosition=1;
qx.ui.core.queue.Widget.add(this);
},_updateScrollPosition:function(){var bV=this.getVisibleLayers();

if(bV.length==0){this.__xb();
return;
}var bX=this.getBounds();

if(!bX){return ;
}var bW={top:this.__rL,bottom:this.__rL+bX.height,left:this.__rK,right:this.__rK+bX.width};

if(this.__wU.top<=bW.top&&this.__wU.bottom>=bW.bottom&&this.__wU.left<=bW.left&&this.__wU.right>=bW.right){this.__wV.setUserBounds(this.__wU.left-bW.left,this.__wU.top-bW.top,this.__wU.right-this.__wU.left,this.__wU.bottom-this.__wU.top);
}else{this._setLayerWindow(bV,this.__rK,this.__rL,bX.width,bX.height,false);
}this.__xb();
}},destruct:function(){this._disposeArray(f);
this._disposeObjects(j,c,h);
this.__wU=this.__iy=this.__pm=this.__wY=null;
}});
})();
(function(){var w="textfield",v="value",u="button",t="inner",s="focusout",r="change",q="dropdown",p="select",o="focusin",n="Function",d="list",m="virtual-combobox",h="click",c="_applyPlaceholder",b="single",g="converter",f="changeValue",j="qx.ui.form.VirtualComboBox",a="String",k="Enter";
qx.Class.define(j,{extend:qx.ui.form.core.AbstractVirtualBox,implement:[qx.ui.form.IStringForm],construct:function(x){qx.ui.form.core.AbstractVirtualBox.call(this,x);
var y=this._createChildControl(w);
this._createChildControl(u);
var z=this.getChildControl(q);
z.getChildControl(d).setSelectionMode(b);
this.__kd=z.getSelection();
this.__kd.addListener(r,this.__JU,this);
this.bind(v,y,v);
y.bind(v,this,v);
this.addListener(o,function(e){y.fireNonBubblingEvent(o,qx.event.type.Focus);
},this);
this.addListener(s,function(e){y.fireNonBubblingEvent(s,qx.event.type.Focus);
},this);
},properties:{appearance:{refine:true,init:m},width:{refine:true,init:120},value:{nullable:true,event:f},placeholder:{check:a,nullable:true,apply:c},defaultFormat:{check:n,init:null,nullable:true}},members:{__JS:null,__JT:null,__kd:null,__xh:null,getTextSelection:function(){return this.getChildControl(w).getTextSelection();
},getTextSelectionLength:function(){return this.getChildControl(w).getTextSelectionLength();
},setTextSelection:function(A,B){this.getChildControl(w).setTextSelection(A,B);
},clearTextSelection:function(){this.getChildControl(w).clearTextSelection();
},selectAllText:function(){this.getChildControl(w).selectAllText();
},resetAllTextSelection:function(){this.clearTextSelection();
this.selectAllText();
},tabFocus:function(){var C=this.getChildControl(w);
C.getFocusElement().focus();
C.selectAllText();
},focus:function(){qx.ui.form.core.AbstractVirtualBox.prototype.focus.call(this);
this.getChildControl(w).getFocusElement().focus();
},_createChildControlImpl:function(D,E){var F;

switch(D){case w:F=new qx.ui.form.TextField();
F.setFocusable(false);
F.addState(t);
this._add(F,{flex:1});
break;
case u:F=new qx.ui.form.Button();
F.setFocusable(false);
F.setKeepActive(true);
F.addState(t);
this._add(F);
break;
}return F||qx.ui.form.core.AbstractVirtualBox.prototype._createChildControlImpl.call(this,D,E);
},_beforeOpen:function(){this.__JV();
},_handleKeyboard:function(event){var G=this._getAction(event);

switch(G){case p:this.setValue(this.getChildControl(w).getValue());
break;
default:qx.ui.form.core.AbstractVirtualBox.prototype._handleKeyboard.call(this,event);
break;
}},_getAction:function(event){var H=event.getKeyIdentifier();
var J=this.getChildControl(q).isVisible();
var I=this._isModifierPressed(event);

if(!J&&!I&&H===k){return p;
}else{return qx.ui.form.core.AbstractVirtualBox.prototype._getAction.call(this,event);
}},_handleMouse:function(event){qx.ui.form.core.AbstractVirtualBox.prototype._handleMouse.call(this,event);
var K=event.getType();

if(K!==h){return;
}var L=event.getTarget();

if(L==this.getChildControl(u)){this.toggle();
}else{this.close();
}},__JU:function(event){if(this.__xh==true){return;
}var M=this.__kd.getItem(0);
M=this.__br(M);
this.setValue(M);
},_applyPlaceholder:function(N,O){this.getChildControl(w).setPlaceholder(N);
},__JV:function(){var R=this.getValue();
var Q=this.getChildControl("dropdown");
var P=Q.getSelection();

if(this.__br(P.getItem(0))!==R){this.__xh=true;
P.removeAll();
this.__xh=false;
if(R==null||R==""){return;
}var V=this.getModel();
var U=Q.getChildControl("list")._getLookupTable();

for(var i=0,l=U.length;i<l;i++){var S=V.getItem(U[i]);
var T=this.__br(S);

if(T&&T.indexOf(R)==0){Q.setPreselected(S);
break;
}}}},__br:function(W){var Y=this.getLabelOptions();
var X=this.getDefaultFormat();
var bb=this.getLabelPath();
var ba=null;

if(bb!=null){ba=qx.data.SingleValueBinding.getValueFromObject(W,bb);
}else if(qx.lang.Type.isString(W)){ba=W;
}var bc=qx.util.Delegate.getMethod(Y,g);

if(bc!=null){ba=bc(ba);
}
if(ba!=null&&X!=null){ba=X(qx.lang.String.stripTags(ba));
}return ba;
}},destruct:function(){var bd=this.getChildControl(w);
this.removeAllBindings();
bd.removeAllBindings();
this.__kd.removeListener(r,this.__JU,this);
this.__kd=null;
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
(function(){var a="qx.util.Delegate";
qx.Class.define(a,{statics:{getMethod:function(b,c){if(qx.util.Delegate.containsMethod(b,c)){return qx.lang.Function.bind(b[c],b);
}return null;
},containsMethod:function(d,e){var f=qx.lang.Type;

if(f.isObject(d)){return f.isFunction(d[e]);
}return false;
}}});
})();

});