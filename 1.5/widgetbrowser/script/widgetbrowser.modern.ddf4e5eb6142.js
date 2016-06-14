qx.$$packageData['162']={"locales":{},"resources":{},"translations":{}};
qx.Part.$$notifyLoad("162", function() {
(function(){var a="qx.ui.virtual.cell.IWidgetCell";
qx.Interface.define(a,{members:{getCellWidget:function(b,c){},pool:function(d){},updateStates:function(e,f){},updateData:function(g,h){}}});
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
(function(){var a="qx.ui.virtual.core.IWidgetCellProvider";
qx.Interface.define(a,{members:{getCellWidget:function(b,c){},poolCellWidget:function(d){}}});
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