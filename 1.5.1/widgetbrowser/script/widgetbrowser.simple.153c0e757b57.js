qx.$$packageData['82']={"locales":{},"resources":{},"translations":{}};
qx.Part.$$notifyLoad("82", function() {
(function(){var g="scrollY",f="update",d="scrollX",c="pane",b="os.scrollBarOverlayed",a="qx.ui.virtual.core.Scroller";
qx.Class.define(a,{extend:qx.ui.core.scroll.AbstractScrollArea,construct:function(h,i,j,k){qx.ui.core.scroll.AbstractScrollArea.call(this);
this.__pa=new qx.ui.virtual.core.Pane(h,i,j,k);
this.__pa.addListener(f,this._computeScrollbars,this);
this.__pa.addListener(d,this._onScrollPaneX,this);
this.__pa.addListener(g,this._onScrollPaneY,this);

if(qx.core.Environment.get(b)){this._add(this.__pa,{edge:0});
}else{this._add(this.__pa,{row:0,column:0});
}},properties:{width:{refine:true,init:null},height:{refine:true,init:null}},members:{__pa:null,getPane:function(){return this.__pa;
},_createChildControlImpl:function(l,m){if(l==c){return this.__pa;
}else{return qx.ui.core.scroll.AbstractScrollArea.prototype._createChildControlImpl.call(this,l);
}},getItemTop:function(n){throw new Error("The method 'getItemTop' is not implemented!");
},getItemBottom:function(o){throw new Error("The method 'getItemBottom' is not implemented!");
},getItemLeft:function(p){throw new Error("The method 'getItemLeft' is not implemented!");
},getItemRight:function(q){throw new Error("The method 'getItemRight' is not implemented!");
},_onScrollBarX:function(e){this.__pa.setScrollX(e.getData());
},_onScrollBarY:function(e){this.__pa.setScrollY(e.getData());
}},destruct:function(){this.__pa.dispose();
this.__pa=null;
}});
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
this.__mU={};
},properties:{anonymous:{refine:true,init:true}},members:{__mU:null,__cG:null,__pb:null,__pc:null,__pd:null,__ob:null,getFirstRow:function(){return this.__pb;
},getFirstColumn:function(){return this.__pc;
},getRowSizes:function(){return this.__pd||[];
},getColumnSizes:function(){return this.__ob||[];
},syncWidget:function(){if(!this.getContentElement().getDomElement()){return;
}
if(this.__mU.fullUpdate||this.__mU.updateLayerWindow&&this.__mU.updateLayerData){this._fullUpdate.apply(this,this.__cG);
}else if(this.__mU.updateLayerWindow){this._updateLayerWindow.apply(this,this.__cG);
}else if(this.__mU.updateLayerData&&this.__pd){this._updateLayerData();
}
if(this.__mU.fullUpdate||this.__mU.updateLayerWindow){var c=this.__cG;
this.__pb=c[0];
this.__pc=c[1];
this.__pd=c[2];
this.__ob=c[3];
}this.__mU={};
},_updateLayerData:function(){this._fullUpdate(this.__pb,this.__pc,this.__pd,this.__ob);
},_fullUpdate:function(d,e,f,g){throw new Error("Abstract method '_fullUpdate' called!");
},_updateLayerWindow:function(h,i,j,k){this._fullUpdate(h,i,j,k);
},updateLayerData:function(){this.__mU.updateLayerData=true;
qx.ui.core.queue.Widget.add(this);
},fullUpdate:function(l,m,n,o){this.__cG=arguments;
this.__mU.fullUpdate=true;
qx.ui.core.queue.Widget.add(this);
},updateLayerWindow:function(p,q,r,s){this.__cG=arguments;
this.__mU.updateLayerWindow=true;
qx.ui.core.queue.Widget.add(this);
}},destruct:function(){this.__mU=this.__cG=this.__pd=this.__ob=null;
}});
})();
(function(){var f="cell.empty",e="cell.column",d="updated",c="cell.row",b="qx.event.type.Event",a="qx.ui.virtual.layer.WidgetCell";
qx.Class.define(a,{extend:qx.ui.virtual.layer.Abstract,include:[qx.ui.core.MChildrenHandling],construct:function(g){qx.ui.virtual.layer.Abstract.call(this);
this.setZIndex(2);
this._cellProvider=g;
this.__pe=[];
},properties:{anonymous:{refine:true,init:false}},events:{updated:b},members:{__pe:null,getRenderedCellWidget:function(h,j){var k=this.getColumnSizes().length;
var p=this.getRowSizes().length;
var o=this.getFirstRow();
var n=this.getFirstColumn();

if(h<o||h>=o+p||j<n||j>=n+k){return null;
}var m=(j-n)+(h-o)*k;
var l=this._getChildren()[m];

if(l.getUserData(f)){return null;
}else{return l;
}},_getSpacer:function(){var q=this.__pe.pop();

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

if(D.getUserData(f)){this.__pe.push(D);
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

if(V.getUserData(f)){this.__pe.push(V);
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
}this._cellProvider=this.__pe=null;
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
(function(){var v="appear",u="qx.ui.virtual.core.CellEvent",t="update",s="change",r="qx.event.type.Data",q="qx.ui.virtual.core.Pane",p="resize",o="__pf",n="click",m="scrollX",d="dblclick",l="contextmenu",h="cellClick",c="__pg",b="qx.event.type.Event",g="scrollY",f="__pn",j="__pm",a="cellDblclick",k="cellContextmenu";
qx.Class.define(q,{extend:qx.ui.core.Widget,construct:function(w,x,y,z){qx.ui.core.Widget.call(this);
this.__pf=new qx.ui.virtual.core.Axis(y,w);
this.__pg=new qx.ui.virtual.core.Axis(z,x);
this.__ph=0;
this.__pi=0;
this.__pj=0;
this.__pk=0;
this.__pl={};
this.__mU={};
this.__pm=new qx.ui.container.Composite();
this.__pm.setUserBounds(0,0,0,0);
this._add(this.__pm);
this.__pn=[];
this.__pf.addListener(s,this.fullUpdate,this);
this.__pg.addListener(s,this.fullUpdate,this);
this.addListener(p,this._onResize,this);
this.addListenerOnce(v,this._onAppear,this);
this.addListener(n,this._onClick,this);
this.addListener(d,this._onDblclick,this);
this.addListener(l,this._onContextmenu,this);
},events:{cellClick:u,cellContextmenu:u,cellDblclick:u,update:b,scrollX:r,scrollY:r},properties:{width:{refine:true,init:400},height:{refine:true,init:300}},members:{__pf:null,__pg:null,__ph:null,__pi:null,__pj:null,__pk:null,__pl:null,__mU:null,__pm:null,__pn:null,__po:null,__ob:null,__pd:null,getRowConfig:function(){return this.__pf;
},getColumnConfig:function(){return this.__pg;
},getChildren:function(){return [this.__pm];
},addLayer:function(A){this.__pn.push(A);
A.setUserBounds(0,0,0,0);
this.__pm.add(A);
},getLayers:function(){return this.__pn;
},getVisibleLayers:function(){var B=[];

for(var i=0;i<this.__pn.length;i++){var C=this.__pn[i];

if(C.isVisible()){B.push(C);
}}return B;
},getScrollMaxX:function(){var D=this.getInnerSize();

if(D){return Math.max(0,this.__pg.getTotalSize()-D.width);
}return 0;
},getScrollMaxY:function(){var E=this.getInnerSize();

if(E){return Math.max(0,this.__pf.getTotalSize()-E.height);
}return 0;
},setScrollY:function(F){var G=this.getScrollMaxY();

if(F<0){F=0;
}else if(F>G){F=G;
}
if(this.__ph!==F){var H=this.__ph;
this.__ph=F;
this._deferredUpdateScrollPosition();
this.fireDataEvent(g,F,H);
}},getScrollY:function(){return this.__ph;
},setScrollX:function(I){var J=this.getScrollMaxX();

if(I<0){I=0;
}else if(I>J){I=J;
}
if(I!==this.__pi){var K=this.__pi;
this.__pi=I;
this._deferredUpdateScrollPosition();
this.fireDataEvent(m,I,K);
}},getScrollX:function(){return this.__pi;
},getScrollSize:function(){return {width:this.__pg.getTotalSize(),height:this.__pf.getTotalSize()};
},scrollRowIntoView:function(L){var O=this.getBounds();

if(!O){this.addListenerOnce(v,function(){qx.event.Timer.once(function(){this.scrollRowIntoView(L);
},this,0);
},this);
return;
}var P=this.__pf.getItemPosition(L);
var N=P+this.__pf.getItemSize(L);
var M=this.getScrollY();

if(P<M){this.setScrollY(P);
}else if(N>M+O.height){this.setScrollY(N-O.height);
}},scrollColumnIntoView:function(Q){var T=this.getBounds();

if(!T){this.addListenerOnce(v,function(){qx.event.Timer.once(function(){this.scrollColumnIntoView(Q);
},this,0);
},this);
return;
}var S=this.__pg.getItemPosition(Q);
var R=S+this.__pg.getItemSize(Q);
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
}bb=this.__pf.getItemAtPosition(this.getScrollY()+ba-bd.top);
bc=this.__pg.getItemAtPosition(this.getScrollX()+Y-bd.left);

if(!bb||!bc){return null;
}return {row:bb.index,column:bc.index};
},prefetchX:function(be,bf,bg,bh){var bi=this.getVisibleLayers();

if(bi.length==0){return;
}var bk=this.getBounds();

if(!bk){return;
}var bl=this.__pi+bk.width;
var bm=this.__pk-bl;

if(this.__pi-this.__pl.left<Math.min(this.__pi,be)||this.__pl.right-bl<Math.min(bm,bg)){var bn=Math.min(this.__pi,bf);
var bj=Math.min(bm,bh);
this._setLayerWindow(bi,this.__pi-bn,this.__ph,bk.width+bn+bj,bk.height,false);
}},prefetchY:function(bo,bp,bq,br){var bs=this.getVisibleLayers();

if(bs.length==0){return;
}var bv=this.getBounds();

if(!bv){return;
}var bt=this.__ph+bv.height;
var bu=this.__pj-bt;

if(this.__ph-this.__pl.top<Math.min(this.__ph,bo)||this.__pl.bottom-bt<Math.min(bu,bq)){var bx=Math.min(this.__ph,bp);
var bw=Math.min(bu,br);
this._setLayerWindow(bs,this.__pi,this.__ph-bx,bv.width,bv.height+bx+bw,false);
}},_onResize:function(){if(this.getContainerElement().getDomElement()){this.__po=true;
this._updateScrollPosition();
this.__po=null;
this.fireEvent(t);
}},_onAppear:function(){this.fullUpdate();
},_onClick:function(e){this.__pp(e,h);
},_onContextmenu:function(e){this.__pp(e,k);
},_onDblclick:function(e){this.__pp(e,a);
},__pp:function(e,by){var bz=this.getCellAtPosition(e.getDocumentLeft(),e.getDocumentTop());

if(!bz){return;
}this.fireNonBubblingEvent(by,qx.ui.virtual.core.CellEvent,[this,e,bz.row,bz.column]);
},syncWidget:function(){if(this.__mU._fullUpdate){this._fullUpdate();
}else if(this.__mU._updateScrollPosition){this._updateScrollPosition();
}this.__mU={};
},_setLayerWindow:function(bA,bB,top,bC,bD,bE){var bJ=this.__pf.getItemAtPosition(top);

if(bJ){var bL=bJ.index;
var bP=this.__pf.getItemSizes(bL,bD+bJ.offset);
var bK=qx.lang.Array.sum(bP);
var bR=top-bJ.offset;
var bO=top-bJ.offset+bK;
}else{var bL=0;
var bP=[];
var bK=0;
var bR=0;
var bO=0;
}var bN=this.__pg.getItemAtPosition(bB);

if(bN){var bH=bN.index;
var bG=this.__pg.getItemSizes(bH,bC+bN.offset);
var bM=qx.lang.Array.sum(bG);
var bQ=bB-bN.offset;
var bI=bB-bN.offset+bM;
}else{var bH=0;
var bG=[];
var bM=0;
var bQ=0;
var bI=0;
}this.__pl={top:bR,bottom:bO,left:bQ,right:bI};
this.__pm.setUserBounds(this.__pl.left-this.__pi,this.__pl.top-this.__ph,bM,bK);
this.__ob=bG;
this.__pd=bP;

for(var i=0;i<this.__pn.length;i++){var bF=this.__pn[i];
bF.setUserBounds(0,0,bM,bK);

if(bE){bF.fullUpdate(bL,bH,bP,bG);
}else{bF.updateLayerWindow(bL,bH,bP,bG);
}}},__pq:function(){if(this.__po){return;
}var bS=this.getScrollSize();

if(this.__pj!==bS.height||this.__pk!==bS.width){this.__pj=bS.height;
this.__pk=bS.width;
this.fireEvent(t);
}},fullUpdate:function(){this.__mU._fullUpdate=1;
qx.ui.core.queue.Widget.add(this);
},isUpdatePending:function(){return !!this.__mU._fullUpdate;
},_fullUpdate:function(){var bT=this.getVisibleLayers();

if(bT.length==0){this.__pq();
return;
}var bU=this.getBounds();

if(!bU){return ;
}this._setLayerWindow(bT,this.__pi,this.__ph,bU.width,bU.height,true);
this.__pq();
},_deferredUpdateScrollPosition:function(){this.__mU._updateScrollPosition=1;
qx.ui.core.queue.Widget.add(this);
},_updateScrollPosition:function(){var bV=this.getVisibleLayers();

if(bV.length==0){this.__pq();
return;
}var bX=this.getBounds();

if(!bX){return ;
}var bW={top:this.__ph,bottom:this.__ph+bX.height,left:this.__pi,right:this.__pi+bX.width};

if(this.__pl.top<=bW.top&&this.__pl.bottom>=bW.bottom&&this.__pl.left<=bW.left&&this.__pl.right>=bW.right){this.__pm.setUserBounds(this.__pl.left-bW.left,this.__pl.top-bW.top,this.__pl.right-this.__pl.left,this.__pl.bottom-this.__pl.top);
}else{this._setLayerWindow(bV,this.__pi,this.__ph,bX.width,bX.height,false);
}this.__pq();
}},destruct:function(){this._disposeArray(f);
this._disposeObjects(o,c,j);
this.__pl=this.__mU=this.__ob=this.__pd=null;
}});
})();
(function(){var a="qx.ui.virtual.cell.IWidgetCell";
qx.Interface.define(a,{members:{getCellWidget:function(b,c){},pool:function(d){},updateStates:function(e,f){},updateData:function(g,h){}}});
})();
(function(){var d="cell.states",c="created",b="qx.ui.virtual.cell.AbstractWidget",a="qx.event.type.Data";
qx.Class.define(b,{extend:qx.core.Object,implement:[qx.ui.virtual.cell.IWidgetCell],construct:function(){qx.core.Object.call(this);
this.__dd=[];
},events:{"created":a},members:{__dd:null,_createWidget:function(){throw new Error("abstract method call");
},updateData:function(e,f){throw new Error("abstract method call");
},updateStates:function(g,h){var k=g.getUserData(d);
if(k){var i=h||{};

for(var j in k){if(!i[j]){g.removeState(j);
}}}else{k={};
}if(h){for(var j in h){if(!k.state){g.addState(j);
}}}g.setUserData(d,h);
},getCellWidget:function(l,m){var n=this.__pr();
this.updateStates(n,m);
this.updateData(n,l);
return n;
},pool:function(o){this.__dd.push(o);
},_cleanupPool:function(){var p=this.__dd.pop();

while(p){p.destroy();
p=this.__dd.pop();
}},__pr:function(){var q=this.__dd.pop();

if(q==null){q=this._createWidget();
this.fireDataEvent(c,q);
}return q;
}},destruct:function(){this._cleanupPool();
this.__dd=null;
}});
})();
(function(){var p="Boolean",o="change",n="single",m="changeSelection",l="one",k="qx.ui.virtual.selection.MModel",j="qx.data.Array",h="multi",g="selected",f="_applySelection",b="_applyDragSelection",d="_applyQuickSelection",c="_applySelectionMode",a="additive";
qx.Mixin.define(k,{construct:function(){this._initSelectionManager();
this.__ps=new qx.data.Array();
this.initSelection(this.__ps);
},properties:{selection:{check:j,event:m,apply:f,nullable:false,deferredInit:true},selectionMode:{check:[n,h,a,l],init:n,apply:c},dragSelection:{check:p,init:false,apply:b},quickSelection:{check:p,init:false,apply:d}},members:{_manager:null,__pt:false,__pu:false,__ps:null,_initSelectionManager:function(){var self=this;
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
},_onChangeSelection:function(e){if(this.__pu==true){return;
}this.__pt=true;
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
}this.__pv();

if(this._afterApplySelection!=null&&qx.lang.Type.isFunction(this._afterApplySelection)){this._afterApplySelection();
}this.__pt=false;
},_onManagerChangeSelection:function(e){if(this.__pt==true){return;
}this.__pu=true;
this.__pv();
this.__pu=false;
},__pv:function(){if(this.__px()){return;
}var J=this._manager.getSelection();
var K=[];

for(var i=0;i<J.length;i++){K.push(this._getDataFromRow(J[i]));
}this.__pw(K);
},__pw:function(L){var M=this.getSelection();

if(L.length>0){var O=[0,M.getLength()];
O=O.concat(L);
var N=M.splice.apply(M,O);
N.dispose();
}else{M.removeAll();
}},__px:function(){var Q=this.getSelection();
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

if(this.__ps){this.__ps.dispose();
}}});
})();
(function(){var a="qx.ui.virtual.core.IWidgetCellProvider";
qx.Interface.define(a,{members:{getCellWidget:function(b,c){},poolCellWidget:function(d){}}});
})();
(function(){var d="$$theme_",c="$$user_",b="$$init_",a="qx.util.PropertyUtil";
qx.Class.define(a,{statics:{getProperties:function(e){return e.$$properties;
},getAllProperties:function(f){var i={};
var j=f;
while(j!=qx.core.Object){var h=this.getProperties(j);

for(var g in h){i[g]=h[g];
}j=j.superclass;
}return i;
},getUserValue:function(k,l){return k[c+l];
},setUserValue:function(m,n,o){m[c+n]=o;
},deleteUserValue:function(p,q){delete (p[c+q]);
},getInitValue:function(r,s){return r[b+s];
},setInitValue:function(t,u,v){t[b+u]=v;
},deleteInitValue:function(w,x){delete (w[b+x]);
},getThemeValue:function(y,z){return y[d+z];
},setThemeValue:function(A,B,C){A[d+B]=C;
},deleteThemeValue:function(D,E){delete (D[d+E]);
},setThemed:function(F,G,H){var I=qx.core.Property.$$method.setThemed;
F[I[G]](H);
},resetThemed:function(J,K){var L=qx.core.Property.$$method.resetThemed;
J[L[K]]();
}}});
})();
(function(){var e="change",d="qx.event.type.Event",c="qx.ui.virtual.core.Axis";
qx.Class.define(c,{extend:qx.core.Object,construct:function(f,g){qx.core.Object.call(this);
this.itemCount=g;
this.defaultItemSize=f;
this.customSizes={};
},events:{"change":d},members:{__py:null,getDefaultItemSize:function(){return this.defaultItemSize;
},setDefaultItemSize:function(h){if(this.defaultItemSize!==h){this.defaultItemSize=h;
this.__py=null;
this.fireNonBubblingEvent(e);
}},getItemCount:function(){return this.itemCount;
},setItemCount:function(j){if(this.itemCount!==j){this.itemCount=j;
this.__py=null;
this.fireNonBubblingEvent(e);
}},setItemSize:function(k,l){if(this.customSizes[k]==l){return;
}
if(l===null){delete this.customSizes[k];
}else{this.customSizes[k]=l;
}this.__py=null;
this.fireNonBubblingEvent(e);
},getItemSize:function(m){return this.customSizes[m]||this.defaultItemSize;
},resetItemSizes:function(){this.customSizes={};
this.__py=null;
this.fireNonBubblingEvent(e);
},__pz:function(){if(this.__py){return this.__py;
}var p=this.defaultItemSize;
var w=this.itemCount;
var r=[];

for(var t in this.customSizes){var n=parseInt(t,10);

if(n<w){r.push(n);
}}
if(r.length==0){var s=[{startIndex:0,endIndex:w-1,firstItemSize:p,rangeStart:0,rangeEnd:w*p-1}];
this.__py=s;
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
this.__py=s;
return s;
},__pA:function(y){var z=this.__py||this.__pz();
var A=0;
var C=z.length-1;
while(true){var D=A+((C-A)>>1);
var B=z[D];

if(B.rangeEnd<y){A=D+1;
}else if(B.rangeStart>y){C=D-1;
}else{return B;
}}},getItemAtPosition:function(E){if(E<0||E>=this.getTotalSize()){return null;
}var G=this.__pA(E);
var I=G.rangeStart;
var F=G.startIndex;
var J=G.firstItemSize;

if(I+J>E){return {index:F,offset:E-I};
}else{var H=this.defaultItemSize;
return {index:F+1+Math.floor((E-I-J)/H),offset:(E-I-J)%H};
}},__pB:function(K){var L=this.__py||this.__pz();
var M=0;
var O=L.length-1;
while(true){var P=M+((O-M)>>1);
var N=L[P];

if(N.endIndex<K){M=P+1;
}else if(N.startIndex>K){O=P-1;
}else{return N;
}}},getItemPosition:function(Q){if(Q<0||Q>=this.itemCount){return null;
}var R=this.__pB(Q);

if(R.startIndex==Q){return R.rangeStart;
}else{return R.rangeStart+R.firstItemSize+(Q-R.startIndex-1)*this.defaultItemSize;
}},getTotalSize:function(){var S=this.__py||this.__pz();
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
}},destruct:function(){this.customSizes=this.__py=null;
}});
})();
(function(){var a="qx.util.Delegate";
qx.Class.define(a,{statics:{getMethod:function(b,c){if(qx.util.Delegate.containsMethod(b,c)){return qx.lang.Function.bind(b[c],b);
}return null;
},containsMethod:function(d,e){var f=qx.lang.Type;

if(f.isObject(d)){return f.isFunction(d[e]);
}return false;
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
(function(){var b="Integer",a="qx.ui.virtual.core.CellEvent";
qx.Class.define(a,{extend:qx.event.type.Mouse,properties:{row:{check:b,nullable:true},column:{check:b,nullable:true}},members:{init:function(c,d,e,f){d.clone(this);
this.setBubbles(false);
this.setRow(e);
this.setColumn(f);
}}});
})();

});