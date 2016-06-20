qx.$$packageData['1040']={"locales":{},"resources":{},"translations":{"C":{},"en":{}}};
qx.Part.$$notifyLoad("1040", function() {
(function(){var a="qx.ui.table.IHeaderRenderer";
qx.Interface.define(a,{members:{createHeaderCell:function(b){return true;
},updateHeaderCell:function(c,d){return true;
}}});
})();
(function(){var b="qx.ui.table.headerrenderer.Default",a="String";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.ui.table.IHeaderRenderer,statics:{STATE_SORTED:"sorted",STATE_SORTED_ASCENDING:"sortedAscending"},properties:{toolTip:{check:a,init:null,nullable:true}},members:{createHeaderCell:function(c){var d=new qx.ui.table.headerrenderer.HeaderCell();
this.updateHeaderCell(c,d);
return d;
},updateHeaderCell:function(e,f){var g=qx.ui.table.headerrenderer.Default;
if(e.name&&e.name.translate){f.setLabel(e.name.translate());
}else{f.setLabel(e.name);
}var h=f.getToolTip();

if(this.getToolTip()!=null){if(h==null){h=new qx.ui.tooltip.ToolTip(this.getToolTip());
f.setToolTip(h);
qx.util.DisposeUtil.disposeTriggeredBy(h,f);
}else{h.setLabel(this.getToolTip());
}}e.sorted?f.addState(g.STATE_SORTED):f.removeState(g.STATE_SORTED);
e.sortedAscending?f.addState(g.STATE_SORTED_ASCENDING):f.removeState(g.STATE_SORTED_ASCENDING);
}}});
})();
(function(){var i="icon",h="label",g="String",f="sort-icon",e="_applySortIcon",d="_applyIcon",c="table-header-cell",b="qx.ui.table.headerrenderer.HeaderCell",a="_applyLabel";
qx.Class.define(b,{extend:qx.ui.container.Composite,construct:function(){qx.ui.container.Composite.call(this);
var j=new qx.ui.layout.Grid();
j.setRowFlex(0,1);
j.setColumnFlex(1,1);
j.setColumnFlex(2,1);
this.setLayout(j);
},properties:{appearance:{refine:true,init:c},label:{check:g,init:null,nullable:true,apply:a},sortIcon:{check:g,init:null,nullable:true,apply:e,themeable:true},icon:{check:g,init:null,nullable:true,apply:d}},members:{_applyLabel:function(k,l){if(k){this._showChildControl(h).setValue(k);
}else{this._excludeChildControl(h);
}},_applySortIcon:function(m,n){if(m){this._showChildControl(f).setSource(m);
}else{this._excludeChildControl(f);
}},_applyIcon:function(o,p){if(o){this._showChildControl(i).setSource(o);
}else{this._excludeChildControl(i);
}},_createChildControlImpl:function(q,r){var s;

switch(q){case h:s=new qx.ui.basic.Label(this.getLabel()).set({anonymous:true,allowShrinkX:true});
this._add(s,{row:0,column:1});
break;
case f:s=new qx.ui.basic.Image(this.getSortIcon());
s.setAnonymous(true);
this._add(s,{row:0,column:2});
break;
case i:s=new qx.ui.basic.Image(this.getIcon()).set({anonymous:true,allowShrinkX:true});
this._add(s,{row:0,column:0});
break;
}return s||qx.ui.container.Composite.prototype._createChildControlImpl.call(this,q);
}}});
})();
(function(){var a="qx.ui.table.ICellEditorFactory";
qx.Interface.define(a,{members:{createCellEditor:function(b){return true;
},getCellEditorValue:function(c){return true;
}}});
})();
(function(){var b="Integer",a="qx.ui.table.pane.CellEvent";
qx.Class.define(a,{extend:qx.event.type.Mouse,properties:{row:{check:b,nullable:true},column:{check:b,nullable:true}},members:{init:function(c,d,e,f){d.clone(this);
this.setBubbles(false);

if(e!=null){this.setRow(e);
}else{this.setRow(c._getRowForPagePos(this.getDocumentLeft(),this.getDocumentTop()));
}
if(f!=null){this.setColumn(f);
}else{this.setColumn(c._getColumnForPageX(this.getDocumentLeft()));
}},clone:function(g){var h=qx.event.type.Mouse.prototype.clone.call(this,g);
h.set({row:this.getRow(),column:this.getColumn()});
return h;
}}});
})();
(function(){var h="headerCellRendererChanged",g="visibilityChangedPre",f="Number",e="qx.event.type.Event",d="_applyFirstColumnX",c="Integer",b="qx.ui.table.pane.Model",a="_applyMaxColumnCount";
qx.Class.define(b,{extend:qx.core.Object,construct:function(i){qx.core.Object.call(this);
this.setTableColumnModel(i);
},events:{"modelChanged":e},statics:{EVENT_TYPE_MODEL_CHANGED:"modelChanged"},properties:{firstColumnX:{check:c,init:0,apply:d},maxColumnCount:{check:f,init:-1,apply:a}},members:{__pJ:null,__pK:null,_applyFirstColumnX:function(j,k){this.__pJ=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},_applyMaxColumnCount:function(l,m){this.__pJ=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},setTableColumnModel:function(n){if(this.__pK){this.__pK.removeListener(g,this._onColVisibilityChanged,this);
this.__pK.removeListener(h,this._onColVisibilityChanged,this);
}this.__pK=n;
this.__pK.addListener(g,this._onColVisibilityChanged,this);
this.__pK.addListener(h,this._onHeaderCellRendererChanged,this);
this.__pJ=null;
},_onColVisibilityChanged:function(o){this.__pJ=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},_onHeaderCellRendererChanged:function(p){this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},getColumnCount:function(){if(this.__pJ==null){var q=this.getFirstColumnX();
var s=this.getMaxColumnCount();
var r=this.__pK.getVisibleColumnCount();

if(s==-1||(q+s)>r){this.__pJ=r-q;
}else{this.__pJ=s;
}}return this.__pJ;
},getColumnAtX:function(t){var u=this.getFirstColumnX();
return this.__pK.getVisibleColumnAtX(u+t);
},getX:function(v){var w=this.getFirstColumnX();
var y=this.getMaxColumnCount();
var x=this.__pK.getVisibleX(v)-w;

if(x>=0&&(y==-1||x<y)){return x;
}else{return -1;
}},getColumnLeft:function(z){var C=0;
var B=this.getColumnCount();

for(var x=0;x<B;x++){var A=this.getColumnAtX(x);

if(A==z){return C;
}C+=this.__pK.getColumnWidth(A);
}return -1;
},getTotalWidth:function(){var D=0;
var E=this.getColumnCount();

for(var x=0;x<E;x++){var F=this.getColumnAtX(x);
D+=this.__pK.getColumnWidth(F);
}return D;
}},destruct:function(){if(this.__pK){this.__pK.removeListener(g,this._onColVisibilityChanged,this);
this.__pK.removeListener(h,this._onColVisibilityChanged,this);
}this.__pK=null;
}});
})();
(function(){var a="qx.ui.table.IRowRenderer";
qx.Interface.define(a,{members:{updateDataRowElement:function(b,c){},getRowHeightStyle:function(d){},createRowStyle:function(e){},getRowClass:function(f){}}});
})();
(function(){var g="Integer",f="Escape",d="keypress",c="Enter",b="excluded",a="qx.ui.table.pane.FocusIndicator";
qx.Class.define(a,{extend:qx.ui.container.Composite,construct:function(h){qx.ui.container.Composite.call(this);
this.__pL=h;
this.setKeepActive(true);
this.addListener(d,this._onKeyPress,this);
},properties:{visibility:{refine:true,init:b},row:{check:g,nullable:true},column:{check:g,nullable:true}},members:{__pL:null,_onKeyPress:function(e){var i=e.getKeyIdentifier();

if(i!==f&&i!==c){e.stopPropagation();
}},moveToCell:function(j,k){if(!this.__pL.getShowCellFocusIndicator()&&!this.__pL.getTable().getTableModel().isColumnEditable(j)){this.exclude();
return;
}else{this.show();
}
if(j==null){this.hide();
this.setRow(null);
this.setColumn(null);
}else{var l=this.__pL.getTablePaneModel().getX(j);

if(l==-1){this.hide();
this.setRow(null);
this.setColumn(null);
}else{var q=this.__pL.getTable();
var o=q.getTableColumnModel();
var p=this.__pL.getTablePaneModel();
var n=this.__pL.getTablePane().getFirstVisibleRow();
var m=q.getRowHeight();
this.setUserBounds(p.getColumnLeft(j)-2,(k-n)*m-2,o.getColumnWidth(j)+3,m+3);
this.show();
this.setRow(k);
this.setColumn(j);
}}}},destruct:function(){this.__pL=null;
}});
})();
(function(){var n="]",m="..",l="changeSelection",k=" [",h='ie',g="browser.version",f="qx.event.type.Event",d="Ranges:",c="qx.ui.table.selection.Model",b="browser.name",a="_applySelectionMode";
qx.Class.define(c,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__pM=[];
this.__pN=-1;
this.__pO=-1;
this.hasBatchModeRefCount=0;
this.__pP=false;
},events:{"changeSelection":f},statics:{NO_SELECTION:1,SINGLE_SELECTION:2,SINGLE_INTERVAL_SELECTION:3,MULTIPLE_INTERVAL_SELECTION:4,MULTIPLE_INTERVAL_SELECTION_TOGGLE:5},properties:{selectionMode:{init:2,check:[1,2,3,4,5],apply:a}},members:{__pP:null,__pN:null,__pO:null,__pM:null,_applySelectionMode:function(o){this.resetSelection();
},setBatchMode:function(p){if(p){this.hasBatchModeRefCount+=1;
}else{if(this.hasBatchModeRefCount==0){throw new Error("Try to turn off batch mode althoug it was not turned on.");
}this.hasBatchModeRefCount-=1;

if(this.__pP){this.__pP=false;
this._fireChangeSelection();
}}return this.hasBatchMode();
},hasBatchMode:function(){return this.hasBatchModeRefCount>0;
},getAnchorSelectionIndex:function(){return this.__pN;
},_setAnchorSelectionIndex:function(q){this.__pN=q;
},getLeadSelectionIndex:function(){return this.__pO;
},_setLeadSelectionIndex:function(r){this.__pO=r;
},_getSelectedRangeArr:function(){return this.__pM;
},resetSelection:function(){if(!this.isSelectionEmpty()){this._resetSelection();
this._fireChangeSelection();
}},isSelectionEmpty:function(){return this.__pM.length==0;
},getSelectedCount:function(){var t=0;

for(var i=0;i<this.__pM.length;i++){var s=this.__pM[i];
t+=s.maxIndex-s.minIndex+1;
}return t;
},isSelectedIndex:function(u){for(var i=0;i<this.__pM.length;i++){var v=this.__pM[i];

if(u>=v.minIndex&&u<=v.maxIndex){return true;
}}return false;
},getSelectedRanges:function(){var w=[];

for(var i=0;i<this.__pM.length;i++){w.push({minIndex:this.__pM[i].minIndex,maxIndex:this.__pM[i].maxIndex});
}return w;
},iterateSelection:function(x,y){for(var i=0;i<this.__pM.length;i++){for(var j=this.__pM[i].minIndex;j<=this.__pM[i].maxIndex;j++){x.call(y,j);
}}},setSelectionInterval:function(z,A){var B=this.self(arguments);

switch(this.getSelectionMode()){case B.NO_SELECTION:return;
case B.SINGLE_SELECTION:if(this.isSelectedIndex(A)){return;
}z=A;
break;
case B.MULTIPLE_INTERVAL_SELECTION_TOGGLE:this.setBatchMode(true);

try{for(var i=z;i<=A;i++){if(!this.isSelectedIndex(i)){this._addSelectionInterval(i,i);
}else{this.removeSelectionInterval(i,i);
}}}catch(e){if(qx.core.Environment.get(b)==h&&qx.core.Environment.get(g)<=7){this.setBatchMode(false);
}throw e;
}finally{this.setBatchMode(false);
}this._fireChangeSelection();
return;
}this._resetSelection();
this._addSelectionInterval(z,A);
this._fireChangeSelection();
},addSelectionInterval:function(C,D){var E=qx.ui.table.selection.Model;

switch(this.getSelectionMode()){case E.NO_SELECTION:return;
case E.MULTIPLE_INTERVAL_SELECTION:case E.MULTIPLE_INTERVAL_SELECTION_TOGGLE:this._addSelectionInterval(C,D);
this._fireChangeSelection();
break;
default:this.setSelectionInterval(C,D);
break;
}},removeSelectionInterval:function(F,G){this.__pN=F;
this.__pO=G;
var H=Math.min(F,G);
var J=Math.max(F,G);
for(var i=0;i<this.__pM.length;i++){var L=this.__pM[i];

if(L.minIndex>J){break;
}else if(L.maxIndex>=H){var M=(L.minIndex>=H)&&(L.minIndex<=J);
var K=(L.maxIndex>=H)&&(L.maxIndex<=J);

if(M&&K){this.__pM.splice(i,1);
i--;
}else if(M){L.minIndex=J+1;
}else if(K){L.maxIndex=H-1;
}else{var I={minIndex:J+1,maxIndex:L.maxIndex};
this.__pM.splice(i+1,0,I);
L.maxIndex=H-1;
break;
}}}this._fireChangeSelection();
},_resetSelection:function(){this.__pM=[];
this.__pN=-1;
this.__pO=-1;
},_addSelectionInterval:function(N,O){this.__pN=N;
this.__pO=O;
var P=Math.min(N,O);
var R=Math.max(N,O);
var Q=0;

for(;Q<this.__pM.length;Q++){var S=this.__pM[Q];

if(S.minIndex>P){break;
}}this.__pM.splice(Q,0,{minIndex:P,maxIndex:R});
var T=this.__pM[0];

for(var i=1;i<this.__pM.length;i++){var S=this.__pM[i];

if(T.maxIndex+1>=S.minIndex){T.maxIndex=Math.max(T.maxIndex,S.maxIndex);
this.__pM.splice(i,1);
i--;
}else{T=S;
}}},_dumpRanges:function(){var U=d;

for(var i=0;i<this.__pM.length;i++){var V=this.__pM[i];
U+=k+V.minIndex+m+V.maxIndex+n;
}this.debug(U);
},_fireChangeSelection:function(){if(this.hasBatchMode()){this.__pP=true;
}else{this.fireEvent(l);
}}},destruct:function(){this.__pM=null;
}});
})();
(function(){var j="",i="table-row-background-even",h="Boolean",g="content",f="default",e="height:",d="'",c="table-row",b="table-row-background-focused",a="css.boxmodel",v=';color:',u="table-row-background-odd",t="1px solid ",s="table-row-line",r="table-row-background-selected",q="background-color:",p=';border-bottom: 1px solid ',o="table-row-selected",n="table-row-background-focused-selected",m="px;",k="qx.ui.table.rowrenderer.Default",l=";";
qx.Class.define(k,{extend:qx.core.Object,implement:qx.ui.table.IRowRenderer,construct:function(){qx.core.Object.call(this);
this.__pQ=j;
this.__pQ={};
this._colors={};
this._renderFont(qx.theme.manager.Font.getInstance().resolve(f));
var w=qx.theme.manager.Color.getInstance();
this._colors.bgcolFocusedSelected=w.resolve(n);
this._colors.bgcolFocused=w.resolve(b);
this._colors.bgcolSelected=w.resolve(r);
this._colors.bgcolEven=w.resolve(i);
this._colors.bgcolOdd=w.resolve(u);
this._colors.colSelected=w.resolve(o);
this._colors.colNormal=w.resolve(c);
this._colors.horLine=w.resolve(s);
},properties:{highlightFocusRow:{check:h,init:true}},members:{_colors:null,__pR:null,__pQ:null,_insetY:1,_renderFont:function(x){if(x){this.__pR=x.getStyles();
this.__pQ=qx.bom.element.Style.compile(this.__pR);
this.__pQ=this.__pQ.replace(/"/g,d);
}else{this.__pQ=j;
this.__pR=qx.bom.Font.getDefaultStyles();
}},updateDataRowElement:function(y,z){var B=this.__pR;
var A=z.style;
qx.bom.element.Style.setStyles(z,B);

if(y.focusedRow&&this.getHighlightFocusRow()){A.backgroundColor=y.selected?this._colors.bgcolFocusedSelected:this._colors.bgcolFocused;
}else{if(y.selected){A.backgroundColor=this._colors.bgcolSelected;
}else{A.backgroundColor=(y.row%2==0)?this._colors.bgcolEven:this._colors.bgcolOdd;
}}A.color=y.selected?this._colors.colSelected:this._colors.colNormal;
A.borderBottom=t+this._colors.horLine;
},getRowHeightStyle:function(C){if(qx.core.Environment.get(a)==g){C-=this._insetY;
}return e+C+m;
},createRowStyle:function(D){var E=[];
E.push(l);
E.push(this.__pQ);
E.push(q);

if(D.focusedRow&&this.getHighlightFocusRow()){E.push(D.selected?this._colors.bgcolFocusedSelected:this._colors.bgcolFocused);
}else{if(D.selected){E.push(this._colors.bgcolSelected);
}else{E.push((D.row%2==0)?this._colors.bgcolEven:this._colors.bgcolOdd);
}}E.push(v);
E.push(D.selected?this._colors.colSelected:this._colors.colNormal);
E.push(p,this._colors.horLine);
return E.join(j);
},getRowClass:function(F){return j;
},getRowAttributes:function(G){return j;
}},destruct:function(){this._colors=this.__pR=this.__pQ=null;
}});
})();
(function(){var c="qx.event.type.Data",b="qx.event.type.Event",a="qx.ui.table.ITableModel";
qx.Interface.define(a,{events:{"dataChanged":c,"metaDataChanged":b,"sorted":c},members:{getRowCount:function(){},getRowData:function(d){},getColumnCount:function(){},getColumnId:function(e){},getColumnIndexById:function(f){},getColumnName:function(g){},isColumnEditable:function(h){},isColumnSortable:function(i){},sortByColumn:function(j,k){},getSortColumnIndex:function(){},isSortAscending:function(){},prefetchRows:function(l,m){},getValue:function(n,o){},getValueById:function(p,q){},setValue:function(r,s,t){},setValueById:function(u,v,w){}}});
})();
(function(){var a="qx.ui.table.ICellRenderer";
qx.Interface.define(a,{members:{createDataCellHtml:function(b,c){return true;
}}});
})();
(function(){var j="",i="px;",h=".qooxdoo-table-cell {",g="qooxdoo-table-cell",f="content",e='</div>',d="nowrap",c="default",b="}",a="width:",I=".qooxdoo-table-cell-right { text-align:right } ",H="css.boxsizing",G="css.boxmodel",F="0px 6px",E='<div class="',D="0px",C="height:",B="1px solid ",A=".qooxdoo-table-cell-bold { font-weight:bold } ",z="String",q="} ",r='>',o='" ',p="ellipsis",m="content-box",n='left:',k="qx.ui.table.cellrenderer.Abstract",l='" style="',s="abstract",t="none",v="hidden",u="table-column-line",x='px;',w=".qooxdoo-table-cell-italic { font-style:italic} ",y="absolute";
qx.Class.define(k,{type:s,implement:qx.ui.table.ICellRenderer,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
var J=qx.ui.table.cellrenderer.Abstract;

if(!J.__pS){var L=qx.theme.manager.Color.getInstance();
J.__pS=this.self(arguments);
var K=h+qx.bom.element.Style.compile({position:y,top:D,overflow:v,whiteSpace:d,borderRight:B+L.resolve(u),padding:F,cursor:c,textOverflow:p,userSelect:t})+q+I+w+A;

if(qx.core.Environment.get(H)){K+=h+qx.bom.element.BoxSizing.compile(m)+b;
}J.__pS.stylesheet=qx.bom.Stylesheet.createElement(K);
}},properties:{defaultCellStyle:{init:null,check:z,nullable:true}},members:{_insetX:6+6+1,_insetY:0,_getCellClass:function(M){return g;
},_getCellStyle:function(N){return N.style||j;
},_getCellAttributes:function(O){return j;
},_getContentHtml:function(P){return P.value||j;
},_getCellSizeStyle:function(Q,R,S,T){var U=j;

if(qx.core.Environment.get(G)==f){Q-=S;
R-=T;
}U+=a+Math.max(Q,0)+i;
U+=C+Math.max(R,0)+i;
return U;
},createDataCellHtml:function(V,W){W.push(E,this._getCellClass(V),l,n,V.styleLeft,x,this._getCellSizeStyle(V.styleWidth,V.styleHeight,this._insetX,this._insetY),this._getCellStyle(V),o,this._getCellAttributes(V),r+this._getContentHtml(V),e);
}}});
})();
(function(){var e="first",d="last",c="hovered",b="__pT",a="qx.ui.table.pane.Header";
qx.Class.define(a,{extend:qx.ui.core.Widget,construct:function(f){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.HBox());
this.__jY=new qx.ui.core.Blocker(this);
this.__pT=f;
},members:{__pT:null,__pU:null,__pV:null,__jY:null,getPaneScroller:function(){return this.__pT;
},getTable:function(){return this.__pT.getTable();
},getBlocker:function(){return this.__jY;
},onColOrderChanged:function(){this._updateContent(true);
},onPaneModelChanged:function(){this._updateContent(true);
},onTableModelMetaDataChanged:function(){this._updateContent();
},setColumnWidth:function(g,h,i){var j=this.getHeaderWidgetAtColumn(g);

if(j!=null){j.setWidth(h);
}},setMouseOverColumn:function(k){if(k!=this.__pV){if(this.__pV!=null){var l=this.getHeaderWidgetAtColumn(this.__pV);

if(l!=null){l.removeState(c);
}}
if(k!=null){this.getHeaderWidgetAtColumn(k).addState(c);
}this.__pV=k;
}},getHeaderWidgetAtColumn:function(m){var n=this.getPaneScroller().getTablePaneModel().getX(m);
return this._getChildren()[n];
},showColumnMoveFeedback:function(o,x){var s=this.getContainerLocation();

if(this.__pU==null){var y=this.getTable();
var p=this.getPaneScroller().getTablePaneModel().getX(o);
var r=this._getChildren()[p];
var t=y.getTableModel();
var v=y.getTableColumnModel();
var w={xPos:p,col:o,name:t.getColumnName(o),table:y};
var u=v.getHeaderCellRenderer(o);
var q=u.createHeaderCell(w);
var z=r.getBounds();
q.setWidth(z.width);
q.setHeight(z.height);
q.setZIndex(1000000);
q.setOpacity(0.8);
q.setLayoutProperties({top:s.top});
this.getApplicationRoot().add(q);
this.__pU=q;
}this.__pU.setLayoutProperties({left:s.left+x});
this.__pU.show();
},hideColumnMoveFeedback:function(){if(this.__pU!=null){this.__pU.destroy();
this.__pU=null;
}},isShowingColumnMoveFeedback:function(){return this.__pU!=null;
},_updateContent:function(A){var K=this.getTable();
var E=K.getTableModel();
var H=K.getTableColumnModel();
var J=this.getPaneScroller().getTablePaneModel();
var M=this._getChildren();
var F=J.getColumnCount();
var I=E.getSortColumnIndex();
if(A){this._cleanUpCells();
}var B={};
B.sortedAscending=E.isSortAscending();

for(var x=0;x<F;x++){var D=J.getColumnAtX(x);

if(D===undefined){continue;
}var L=H.getColumnWidth(D);
var G=H.getHeaderCellRenderer(D);
B.xPos=x;
B.col=D;
B.name=E.getColumnName(D);
B.editable=E.isColumnEditable(D);
B.sorted=(D==I);
B.table=K;
var C=M[x];
if(C==null){C=G.createHeaderCell(B);
C.set({width:L});
this._add(C);
}else{G.updateHeaderCell(B,C);
}if(x===0){C.addState(e);
C.removeState(d);
}else if(x===F-1){C.removeState(e);
C.addState(d);
}else{C.removeState(e);
C.removeState(d);
}}},_cleanUpCells:function(){var O=this._getChildren();

for(var x=O.length-1;x>=0;x--){var N=O[x];
N.destroy();
}}},destruct:function(){this.__jY.dispose();
this._disposeObjects(b);
}});
})();
(function(){var o="Boolean",n="resize-line",m="mousedown",l="qx.event.type.Data",k="mouseup",j="qx.ui.table.pane.CellEvent",i="scroll",h="focus-indicator",g="excluded",d="scrollbar-y",bq="table-scroller-focus-indicator",bp="visible",bo="mousemove",bn="header",bm="editing",bl="click",bk="modelChanged",bj="scrollbar-x",bi="cellClick",bh="pane",v="__qe",w="__qc",t="mouseout",u="changeHorizontalScrollBarVisible",r="__qa",s="bottom",p="_applyScrollTimeout",q="changeScrollX",C="_applyTablePaneModel",D="Integer",M="dblclick",J="__ir",U="dataEdited",P="mousewheel",bd="interval",ba="qx.ui.table.pane.Scroller",F="_applyShowCellFocusIndicator",bg="y",bf="__mM",be="resize",E="__qb",H="vertical",I="__qf",L="changeScrollY",N="__qd",Q="appear",W="table-scroller",bc="beforeSort",y="cellDblclick",z="horizontal",G="losecapture",T="contextmenu",S="col-resize",R="disappear",Y="_applyVerticalScrollBarVisible",X="__pX",O="_applyHorizontalScrollBarVisible",V="os.scrollBarOverlayed",a="cellContextmenu",bb="close",A="__pY",B="changeTablePaneModel",K="x",b="qx.ui.table.pane.Model",c="changeVerticalScrollBarVisible";
qx.Class.define(ba,{extend:qx.ui.core.Widget,include:qx.ui.core.scroll.MScrollBarFactory,construct:function(br){qx.ui.core.Widget.call(this);
this.__pW=br;
var bs=new qx.ui.layout.Grid();
bs.setColumnFlex(0,1);
bs.setRowFlex(1,1);
this._setLayout(bs);
this.__mM=this._showChildControl(bn);
this.__pX=this._showChildControl(bh);
this.__pY=new qx.ui.container.Composite(new qx.ui.layout.HBox()).set({minWidth:0});
this._add(this.__pY,{row:0,column:0,colSpan:2});
this.__qa=new qx.ui.table.pane.Clipper();
this.__qa.add(this.__mM);
this.__qa.addListener(G,this._onChangeCaptureHeader,this);
this.__qa.addListener(bo,this._onMousemoveHeader,this);
this.__qa.addListener(m,this._onMousedownHeader,this);
this.__qa.addListener(k,this._onMouseupHeader,this);
this.__qa.addListener(bl,this._onClickHeader,this);
this.__pY.add(this.__qa,{flex:1});
this.__qb=new qx.ui.table.pane.Clipper();
this.__qb.add(this.__pX);
this.__qb.addListener(P,this._onMousewheel,this);
this.__qb.addListener(bo,this._onMousemovePane,this);
this.__qb.addListener(m,this._onMousedownPane,this);
this.__qb.addListener(k,this._onMouseupPane,this);
this.__qb.addListener(bl,this._onClickPane,this);
this.__qb.addListener(T,this._onContextMenu,this);
this.__qb.addListener(M,this._onDblclickPane,this);
this.__qb.addListener(be,this._onResizePane,this);
if(qx.core.Environment.get(V)){this.__qc=new qx.ui.container.Composite();
this.__qc.setLayout(new qx.ui.layout.Canvas());
this.__qc.add(this.__qb,{edge:0});
this._add(this.__qc,{row:1,column:0});
}else{this._add(this.__qb,{row:1,column:0});
}this.__qd=this._showChildControl(bj);
this.__qe=this._showChildControl(d);
this.__qf=this.getChildControl(h);
this.initShowCellFocusIndicator();
this.getChildControl(n).hide();
this.addListener(t,this._onMouseout,this);
this.addListener(Q,this._onAppear,this);
this.addListener(R,this._onDisappear,this);
this.__ir=new qx.event.Timer();
this.__ir.addListener(bd,this._oninterval,this);
this.initScrollTimeout();
},statics:{MIN_COLUMN_WIDTH:10,RESIZE_REGION_RADIUS:5,CLICK_TOLERANCE:5,HORIZONTAL_SCROLLBAR:1,VERTICAL_SCROLLBAR:2},events:{"changeScrollY":l,"changeScrollX":l,"cellClick":j,"cellDblclick":j,"cellContextmenu":j,"beforeSort":l},properties:{horizontalScrollBarVisible:{check:o,init:false,apply:O,event:u},verticalScrollBarVisible:{check:o,init:false,apply:Y,event:c},tablePaneModel:{check:b,apply:C,event:B},liveResize:{check:o,init:false},focusCellOnMouseMove:{check:o,init:false},selectBeforeFocus:{check:o,init:false},showCellFocusIndicator:{check:o,init:true,apply:F},contextMenuFromDataCellsOnly:{check:o,init:true},resetSelectionOnHeaderClick:{check:o,init:true},scrollTimeout:{check:D,init:100,apply:p},appearance:{refine:true,init:W}},members:{__qg:null,__pW:null,__qh:null,__qi:null,__qj:null,__qk:null,__ql:null,__qm:null,__qn:null,__qo:null,__qp:null,__qq:null,__qr:null,__qs:null,__qt:false,__qu:null,__qv:null,__qw:null,__qx:null,__qy:null,__qz:null,__qA:null,__qB:null,__qd:null,__qe:null,__mM:null,__qa:null,__pX:null,__qb:null,__qc:null,__qf:null,__pY:null,__ir:null,getPaneInsetRight:function(){var bv=this.getTopRightWidget();
var bw=bv&&bv.isVisible()&&bv.getBounds()?bv.getBounds().width+bv.getMarginLeft()+bv.getMarginRight():0;
var bu=this.__qe;
var bt=this.getVerticalScrollBarVisible()?this.getVerticalScrollBarWidth()+bu.getMarginLeft()+bu.getMarginRight():0;
return Math.max(bw,bt);
},setPaneWidth:function(bx){if(this.isVerticalScrollBarVisible()){bx+=this.getPaneInsetRight();
}this.setWidth(bx);
},_createChildControlImpl:function(by,bz){var bA;

switch(by){case bn:bA=(this.getTable().getNewTablePaneHeader())(this);
break;
case bh:bA=(this.getTable().getNewTablePane())(this);
break;
case h:bA=new qx.ui.table.pane.FocusIndicator(this);
bA.setUserBounds(0,0,0,0);
bA.setZIndex(1000);
bA.addListener(k,this._onMouseupFocusIndicator,this);
this.__qb.add(bA);
bA.show();
bA.setDecorator(null);
break;
case n:bA=new qx.ui.core.Widget();
bA.setUserBounds(0,0,0,0);
bA.setZIndex(1000);
this.__qb.add(bA);
break;
case bj:bA=this._createScrollBar(z).set({minWidth:0,alignY:s});
bA.addListener(i,this._onScrollX,this);

if(this.__qc!=null){bA.setMinHeight(qx.bom.element.Overflow.DEFAULT_SCROLLBAR_WIDTH);
this.__qc.add(bA,{bottom:0,right:0,left:0});
}else{this._add(bA,{row:2,column:0});
}break;
case d:bA=this._createScrollBar(H);
bA.addListener(i,this._onScrollY,this);

if(this.__qc!=null){bA.setMinWidth(qx.bom.element.Overflow.DEFAULT_SCROLLBAR_WIDTH);
this.__qc.add(bA,{right:0,bottom:0,top:0});
}else{this._add(bA,{row:1,column:1});
}break;
}return bA||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,by);
},_applyHorizontalScrollBarVisible:function(bB,bC){this.__qd.setVisibility(bB?bp:g);
},_applyVerticalScrollBarVisible:function(bD,bE){this.__qe.setVisibility(bD?bp:g);
},_applyTablePaneModel:function(bF,bG){if(bG!=null){bG.removeListener(bk,this._onPaneModelChanged,this);
}bF.addListener(bk,this._onPaneModelChanged,this);
},_applyShowCellFocusIndicator:function(bH,bI){if(bH){this.__qf.setDecorator(bq);
this._updateFocusIndicator();
}else{if(this.__qf){this.__qf.setDecorator(null);
}}},getScrollY:function(){return this.__qe.getPosition();
},setScrollY:function(scrollY,bJ){this.__qe.scrollTo(scrollY);

if(bJ){this._updateContent();
}},getScrollX:function(){return this.__qd.getPosition();
},setScrollX:function(scrollX){this.__qd.scrollTo(scrollX);
},getTable:function(){return this.__pW;
},onColVisibilityChanged:function(){this.updateHorScrollBarMaximum();
this._updateFocusIndicator();
},setColumnWidth:function(bK,bL){this.__mM.setColumnWidth(bK,bL);
this.__pX.setColumnWidth(bK,bL);
var bM=this.getTablePaneModel();
var x=bM.getX(bK);

if(x!=-1){this.updateHorScrollBarMaximum();
this._updateFocusIndicator();
}},onColOrderChanged:function(){this.__mM.onColOrderChanged();
this.__pX.onColOrderChanged();
this.updateHorScrollBarMaximum();
},onTableModelDataChanged:function(bN,bO,bP,bQ){this.__pX.onTableModelDataChanged(bN,bO,bP,bQ);
var bR=this.getTable().getTableModel().getRowCount();

if(bR!=this.__qg){this.updateVerScrollBarMaximum();

if(this.getFocusedRow()>=bR){if(bR==0){this.setFocusedCell(null,null);
}else{this.setFocusedCell(this.getFocusedColumn(),bR-1);
}}this.__qg=bR;
}},onSelectionChanged:function(){this.__pX.onSelectionChanged();
},onFocusChanged:function(){this.__pX.onFocusChanged();
},onTableModelMetaDataChanged:function(){this.__mM.onTableModelMetaDataChanged();
this.__pX.onTableModelMetaDataChanged();
},_onPaneModelChanged:function(){this.__mM.onPaneModelChanged();
this.__pX.onPaneModelChanged();
},_onResizePane:function(){this.updateHorScrollBarMaximum();
this.updateVerScrollBarMaximum();
this._updateContent();
this.__mM._updateContent();
this.__pW._updateScrollBarVisibility();
},updateHorScrollBarMaximum:function(){var bV=this.__qb.getInnerSize();

if(!bV){return ;
}var bT=this.getTablePaneModel().getTotalWidth();
var bU=this.__qd;

if(bV.width<bT){var bS=Math.max(0,bT-bV.width);
bU.setMaximum(bS);
bU.setKnobFactor(bV.width/bT);
var bW=bU.getPosition();
bU.setPosition(Math.min(bW,bS));
}else{bU.setMaximum(0);
bU.setKnobFactor(1);
bU.setPosition(0);
}},updateVerScrollBarMaximum:function(){var cf=this.__qb.getInnerSize();

if(!cf){return ;
}var cd=this.getTable().getTableModel();
var bY=cd.getRowCount();

if(this.getTable().getKeepFirstVisibleRowComplete()){bY+=1;
}var bX=this.getTable().getRowHeight();
var cb=bY*bX;
var ce=this.__qe;

if(cf.height<cb){var ca=Math.max(0,cb-cf.height);
ce.setMaximum(ca);
ce.setKnobFactor(cf.height/cb);
var cc=ce.getPosition();
ce.setPosition(Math.min(cc,ca));
}else{ce.setMaximum(0);
ce.setKnobFactor(1);
ce.setPosition(0);
}},onKeepFirstVisibleRowCompleteChanged:function(){this.updateVerScrollBarMaximum();
this._updateContent();
},_onAppear:function(){this._startInterval(this.getScrollTimeout());
},_onDisappear:function(){this._stopInterval();
},_onScrollX:function(e){var cg=e.getData();
this.fireDataEvent(q,cg,e.getOldData());
this.__qa.scrollToX(cg);
this.__qb.scrollToX(cg);
},_onScrollY:function(e){this.fireDataEvent(L,e.getData(),e.getOldData());
this._postponedUpdateContent();
},_onMousewheel:function(e){var ch=this.getTable();

if(!ch.getEnabled()){return;
}var ck=e.getWheelDelta(bg);
if(ck>0&&ck<1){ck=1;
}else if(ck<0&&ck>-1){ck=-1;
}this.__qe.scrollBySteps(ck);
ck=e.getWheelDelta(K);
if(ck>0&&ck<1){ck=1;
}else if(ck<0&&ck>-1){ck=-1;
}this.__qd.scrollBySteps(ck);
if(this.__qv&&this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(this.__qv,this.__qw);
}var cj=this.__qe.getPosition();
var ci=this.__qe.getMaximum();
if(ck<0&&cj<=0||ck>0&&cj>=ci){return;
}e.stop();
},__qC:function(cl){var cq=this.getTable();
var cr=this.__mM.getHeaderWidgetAtColumn(this.__qp);
var cm=cr.getSizeHint().minWidth;
var co=Math.max(cm,this.__qr+cl-this.__qq);

if(this.getLiveResize()){var cn=cq.getTableColumnModel();
cn.setColumnWidth(this.__qp,co,true);
}else{this.__mM.setColumnWidth(this.__qp,co,true);
var cp=this.getTablePaneModel();
this._showResizeLine(cp.getColumnLeft(this.__qp)+co);
}this.__qq+=co-this.__qr;
this.__qr=co;
},__qD:function(cs){var ct=qx.ui.table.pane.Scroller.CLICK_TOLERANCE;

if(this.__mM.isShowingColumnMoveFeedback()||cs>this.__qo+ct||cs<this.__qo-ct){this.__ql+=cs-this.__qo;
this.__mM.showColumnMoveFeedback(this.__qk,this.__ql);
var cu=this.__pW.getTablePaneScrollerAtPageX(cs);

if(this.__qn&&this.__qn!=cu){this.__qn.hideColumnMoveFeedback();
}
if(cu!=null){this.__qm=cu.showColumnMoveFeedback(cs);
}else{this.__qm=null;
}this.__qn=cu;
this.__qo=cs;
}},_onMousemoveHeader:function(e){var cB=this.getTable();

if(!cB.getEnabled()){return;
}var cC=false;
var cv=null;
var cz=e.getDocumentLeft();
var cA=e.getDocumentTop();
this.__qv=cz;
this.__qw=cA;

if(this.__qp!=null){this.__qC(cz);
cC=true;
e.stopPropagation();
}else if(this.__qk!=null){this.__qD(cz);
e.stopPropagation();
}else{var cw=this._getResizeColumnForPageX(cz);

if(cw!=-1){cC=true;
}else{var cy=cB.getTableModel();
var cD=this._getColumnForPageX(cz);

if(cD!=null&&cy.isColumnSortable(cD)){cv=cD;
}}}var cx=cC?S:null;
this.getApplicationRoot().setGlobalCursor(cx);
this.setCursor(cx);
this.__mM.setMouseOverColumn(cv);
},_onMousemovePane:function(e){var cE=this.getTable();

if(!cE.getEnabled()){return;
}var cG=e.getDocumentLeft();
var cH=e.getDocumentTop();
this.__qv=cG;
this.__qw=cH;
var cF=this._getRowForPagePos(cG,cH);

if(cF!=null&&this._getColumnForPageX(cG)!=null){if(this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(cG,cH);
}}this.__mM.setMouseOverColumn(null);
},_onMousedownHeader:function(e){if(!this.getTable().getEnabled()){return;
}var cJ=e.getDocumentLeft();
var cK=this._getResizeColumnForPageX(cJ);

if(cK!=-1){this._startResizeHeader(cK,cJ);
e.stop();
}else{var cI=this._getColumnForPageX(cJ);

if(cI!=null){this._startMoveHeader(cI,cJ);
e.stop();
}}},_startResizeHeader:function(cL,cM){var cN=this.getTable().getTableColumnModel();
this.__qp=cL;
this.__qq=cM;
this.__qr=cN.getColumnWidth(this.__qp);
this.__qa.capture();
},_startMoveHeader:function(cO,cP){this.__qk=cO;
this.__qo=cP;
this.__ql=this.getTablePaneModel().getColumnLeft(cO);
this.__qa.capture();
},_onMousedownPane:function(e){var cT=this.getTable();

if(!cT.getEnabled()){return;
}
if(cT.isEditing()){cT.stopEditing();
}var cQ=e.getDocumentLeft();
var cS=e.getDocumentTop();
var cV=this._getRowForPagePos(cQ,cS);
var cU=this._getColumnForPageX(cQ);

if(cV!==null){this.__qs={row:cV,col:cU};
this.__qt=false;
var cR=this.getSelectBeforeFocus();

if(cR){cT.getSelectionManager().handleMouseDown(cV,e);
}if(!this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(cQ,cS);
}
if(!cR){cT.getSelectionManager().handleMouseDown(cV,e);
}}},_onMouseupFocusIndicator:function(e){if(this.__qs&&!this.__qt&&!this.isEditing()&&this.__qf.getRow()==this.__qs.row&&this.__qf.getColumn()==this.__qs.col){this.fireEvent(bi,qx.ui.table.pane.CellEvent,[this,e,this.__qs.row,this.__qs.col],true);
this.__qt=true;
}else if(!this.isEditing()){this._onMousedownPane(e);
}},_onChangeCaptureHeader:function(e){if(this.__qp!=null){this._stopResizeHeader();
}
if(this.__qk!=null){this._stopMoveHeader();
}},_stopResizeHeader:function(){var cW=this.getTable().getTableColumnModel();
if(!this.getLiveResize()){this._hideResizeLine();
cW.setColumnWidth(this.__qp,this.__qr,true);
}this.__qp=null;
this.__qa.releaseCapture();
this.getApplicationRoot().setGlobalCursor(null);
this.setCursor(null);
if(this.isEditing()){var cX=this.__qz.getBounds().height;
this.__qz.setUserBounds(0,0,this.__qr,cX);
}},_stopMoveHeader:function(){var dd=this.getTable().getTableColumnModel();
var de=this.getTablePaneModel();
this.__mM.hideColumnMoveFeedback();

if(this.__qn){this.__qn.hideColumnMoveFeedback();
}
if(this.__qm!=null){var dg=de.getFirstColumnX()+de.getX(this.__qk);
var dc=this.__qm;

if(dc!=dg&&dc!=dg+1){var df=dd.getVisibleColumnAtX(dg);
var db=dd.getVisibleColumnAtX(dc);
var da=dd.getOverallX(df);
var cY=(db!=null)?dd.getOverallX(db):dd.getOverallColumnCount();

if(cY>da){cY--;
}dd.moveColumn(da,cY);
this._updateFocusIndicator();
}}this.__qk=null;
this.__qm=null;
this.__qa.releaseCapture();
},_onMouseupPane:function(e){var dh=this.getTable();

if(!dh.getEnabled()){return;
}var di=this._getRowForPagePos(e.getDocumentLeft(),e.getDocumentTop());

if(di!=-1&&di!=null&&this._getColumnForPageX(e.getDocumentLeft())!=null){dh.getSelectionManager().handleMouseUp(di,e);
}},_onMouseupHeader:function(e){var dj=this.getTable();

if(!dj.getEnabled()){return;
}
if(this.__qp!=null){this._stopResizeHeader();
this.__qu=true;
e.stop();
}else if(this.__qk!=null){this._stopMoveHeader();
e.stop();
}},_onClickHeader:function(e){if(this.__qu){this.__qu=false;
return;
}var dp=this.getTable();

if(!dp.getEnabled()){return;
}var dm=dp.getTableModel();
var dn=e.getDocumentLeft();
var dl=this._getResizeColumnForPageX(dn);

if(dl==-1){var ds=this._getColumnForPageX(dn);

if(ds!=null&&dm.isColumnSortable(ds)){var dk=dm.getSortColumnIndex();
var dq=(ds!=dk)?true:!dm.isSortAscending();
var dr={column:ds,ascending:dq,clickEvent:e};

if(this.fireDataEvent(bc,dr,null,true)){dm.sortByColumn(ds,dq);

if(this.getResetSelectionOnHeaderClick()){dp.getSelectionModel().resetSelection();
}}}}e.stop();
},_onClickPane:function(e){var dt=this.getTable();

if(!dt.getEnabled()){return;
}var dw=e.getDocumentLeft();
var dx=e.getDocumentTop();
var du=this._getRowForPagePos(dw,dx);
var dv=this._getColumnForPageX(dw);

if(du!=null&&dv!=null){dt.getSelectionManager().handleClick(du,e);

if(this.__qf.isHidden()||(this.__qs&&!this.__qt&&!this.isEditing()&&du==this.__qs.row&&dv==this.__qs.col)){this.fireEvent(bi,qx.ui.table.pane.CellEvent,[this,e,du,dv],true);
this.__qt=true;
}}},_onContextMenu:function(e){var dB=e.getDocumentLeft();
var dC=e.getDocumentTop();
var dz=this._getRowForPagePos(dB,dC);
var dA=this._getColumnForPageX(dB);
if(dz===null&&this.getContextMenuFromDataCellsOnly()){return;
}
if(!this.getShowCellFocusIndicator()||dz===null||(this.__qs&&dz==this.__qs.row&&dA==this.__qs.col)){this.fireEvent(a,qx.ui.table.pane.CellEvent,[this,e,dz,dA],true);
var dy=this.getTable().getContextMenu();

if(dy){if(dy.getChildren().length>0){dy.openAtMouse(e);
}else{dy.exclude();
}e.preventDefault();
}}},_onContextMenuOpen:function(e){},_onDblclickPane:function(e){var dE=e.getDocumentLeft();
var dF=e.getDocumentTop();
this._focusCellAtPagePos(dE,dF);
this.startEditing();
var dD=this._getRowForPagePos(dE,dF);

if(dD!=-1&&dD!=null){this.fireEvent(y,qx.ui.table.pane.CellEvent,[this,e,dD],true);
}},_onMouseout:function(e){var dG=this.getTable();

if(!dG.getEnabled()){return;
}if(this.__qp==null){this.setCursor(null);
this.getApplicationRoot().setGlobalCursor(null);
}this.__mM.setMouseOverColumn(null);
if(this.getFocusCellOnMouseMove()){this.__pW.setFocusedCell();
}},_showResizeLine:function(x){var dI=this._showChildControl(n);
var dH=dI.getWidth();
var dJ=this.__qb.getBounds();
dI.setUserBounds(x-Math.round(dH/2),0,dH,dJ.height);
},_hideResizeLine:function(){this._excludeChildControl(n);
},showColumnMoveFeedback:function(dK){var dT=this.getTablePaneModel();
var dS=this.getTable().getTableColumnModel();
var dN=this.__pX.getContainerLocation().left;
var dR=dT.getColumnCount();
var dO=0;
var dM=0;
var dW=dN;

for(var dL=0;dL<dR;dL++){var dP=dT.getColumnAtX(dL);
var dU=dS.getColumnWidth(dP);

if(dK<dW+dU/2){break;
}dW+=dU;
dO=dL+1;
dM=dW-dN;
}var dQ=this.__qb.getContainerLocation().left;
var dV=this.__qb.getBounds().width;
var scrollX=dQ-dN;
dM=qx.lang.Number.limit(dM,scrollX+2,scrollX+dV-1);
this._showResizeLine(dM);
return dT.getFirstColumnX()+dO;
},hideColumnMoveFeedback:function(){this._hideResizeLine();
},_focusCellAtPagePos:function(dX,dY){var eb=this._getRowForPagePos(dX,dY);

if(eb!=-1&&eb!=null){var ea=this._getColumnForPageX(dX);
this.__pW.setFocusedCell(ea,eb);
}},setFocusedCell:function(ec,ed){if(!this.isEditing()){this.__pX.setFocusedCell(ec,ed,this.__qi);
this.__qx=ec;
this.__qy=ed;
this._updateFocusIndicator();
}},getFocusedColumn:function(){return this.__qx;
},getFocusedRow:function(){return this.__qy;
},scrollCellVisible:function(ee,ef){var ep=this.getTablePaneModel();
var eg=ep.getX(ee);

if(eg!=-1){var em=this.__qb.getInnerSize();

if(!em){return;
}var en=this.getTable().getTableColumnModel();
var ej=ep.getColumnLeft(ee);
var eq=en.getColumnWidth(ee);
var eh=this.getTable().getRowHeight();
var er=ef*eh;
var scrollX=this.getScrollX();
var scrollY=this.getScrollY();
var eo=Math.min(ej,ej+eq-em.width);
var el=ej;
this.setScrollX(Math.max(eo,Math.min(el,scrollX)));
var ei=er+eh-em.height;

if(this.getTable().getKeepFirstVisibleRowComplete()){ei+=eh;
}var ek=er;
this.setScrollY(Math.max(ei,Math.min(ek,scrollY)),true);
}},isEditing:function(){return this.__qz!=null;
},startEditing:function(){var ew=this.getTable();
var eu=ew.getTableModel();
var ey=this.__qx;

if(!this.isEditing()&&(ey!=null)&&eu.isColumnEditable(ey)){var ez=this.__qy;
var es=this.getTablePaneModel().getX(ey);
var et=eu.getValue(ey,ez);
this.scrollCellVisible(es,ez);
this.__qA=ew.getTableColumnModel().getCellEditorFactory(ey);
var ev={col:ey,row:ez,xPos:es,value:et,table:ew};
this.__qz=this.__qA.createCellEditor(ev);
if(this.__qz===null){return false;
}else if(this.__qz instanceof qx.ui.window.Window){this.__qz.setModal(true);
this.__qz.setShowClose(false);
this.__qz.addListener(bb,this._onCellEditorModalWindowClose,this);
var f=ew.getModalCellEditorPreOpenFunction();

if(f!=null){f(this.__qz,ev);
}this.__qz.open();
}else{var ex=this.__qf.getInnerSize();
this.__qz.setUserBounds(0,0,ex.width,ex.height);
this.__qf.addListener(m,function(e){this.__qs={row:this.__qy,col:this.__qx};
e.stopPropagation();
},this);
this.__qf.add(this.__qz);
this.__qf.addState(bm);
this.__qf.setKeepActive(false);
this.__qf.setDecorator(bq);
this.__qz.focus();
this.__qz.activate();
}return true;
}return false;
},stopEditing:function(){if(!this.getShowCellFocusIndicator()){this.__qf.setDecorator(null);
}this.flushEditor();
this.cancelEditing();
},flushEditor:function(){if(this.isEditing()){var eB=this.__qA.getCellEditorValue(this.__qz);
var eA=this.getTable().getTableModel().getValue(this.__qx,this.__qy);
this.getTable().getTableModel().setValue(this.__qx,this.__qy,eB);
this.__pW.focus();
this.__pW.fireDataEvent(U,{row:this.__qy,col:this.__qx,oldValue:eA,value:eB});
}},cancelEditing:function(){if(this.isEditing()&&!this.__qz.pendingDispose){if(this._cellEditorIsModalWindow){this.__qz.destroy();
this.__qz=null;
this.__qA=null;
this.__qz.pendingDispose=true;
}else{this.__qf.removeState(bm);
this.__qf.setKeepActive(true);
this.__qz.destroy();
this.__qz=null;
this.__qA=null;
}}},_onCellEditorModalWindowClose:function(e){this.stopEditing();
},_getColumnForPageX:function(eC){var eF=this.getTable().getTableColumnModel();
var eG=this.getTablePaneModel();
var eE=eG.getColumnCount();
var eI=this.__pX.getContentLocation().left;

for(var x=0;x<eE;x++){var eD=eG.getColumnAtX(x);
var eH=eF.getColumnWidth(eD);
eI+=eH;

if(eC<eI){return eD;
}}return null;
},_getResizeColumnForPageX:function(eJ){var eN=this.getTable().getTableColumnModel();
var eO=this.getTablePaneModel();
var eM=eO.getColumnCount();
var eQ=this.__mM.getContainerLocation().left;
var eK=qx.ui.table.pane.Scroller.RESIZE_REGION_RADIUS;

for(var x=0;x<eM;x++){var eL=eO.getColumnAtX(x);
var eP=eN.getColumnWidth(eL);
eQ+=eP;

if(eJ>=(eQ-eK)&&eJ<=(eQ+eK)){return eL;
}}return -1;
},_getRowForPagePos:function(eR,eS){var eT=this.__pX.getContentLocation();

if(eR<eT.left||eR>eT.right){return null;
}
if(eS>=eT.top&&eS<=eT.bottom){var eU=this.getTable().getRowHeight();
var scrollY=this.__qe.getPosition();

if(this.getTable().getKeepFirstVisibleRowComplete()){scrollY=Math.floor(scrollY/eU)*eU;
}var eX=scrollY+eS-eT.top;
var fa=Math.floor(eX/eU);
var eY=this.getTable().getTableModel();
var eV=eY.getRowCount();
return (fa<eV)?fa:null;
}var eW=this.__mM.getContainerLocation();

if(eS>=eW.top&&eS<=eW.bottom&&eR<=eW.right){return -1;
}return null;
},setTopRightWidget:function(fb){var fc=this.__qB;

if(fc!=null){this.__pY.remove(fc);
}
if(fb!=null){this.__pY.add(fb);
}this.__qB=fb;
},getTopRightWidget:function(){return this.__qB;
},getHeader:function(){return this.__mM;
},getTablePane:function(){return this.__pX;
},getVerticalScrollBarWidth:function(){var fd=this.__qe;
return fd.isVisible()?(fd.getSizeHint().width||0):0;
},getNeededScrollBars:function(fe,ff){var fo=this.__qe;
var fs=fo.getSizeHint().width+fo.getMarginLeft()+fo.getMarginRight();
var fu=this.__qd;
var ft=fu.getSizeHint().height+fu.getMarginTop()+fu.getMarginBottom();
var fm=this.__qb.getInnerSize();
var fg=fm?fm.width:0;

if(this.getVerticalScrollBarVisible()){fg+=fs;
}var fr=fm?fm.height:0;

if(this.getHorizontalScrollBarVisible()){fr+=ft;
}var fn=this.getTable().getTableModel();
var fk=fn.getRowCount();
var fh=this.getTablePaneModel().getTotalWidth();
var fp=this.getTable().getRowHeight()*fk;
var fj=false;
var fq=false;

if(fh>fg){fj=true;

if(fp>fr-ft){fq=true;
}}else if(fp>fr){fq=true;

if(!ff&&(fh>fg-fs)){fj=true;
}}var fl=qx.ui.table.pane.Scroller.HORIZONTAL_SCROLLBAR;
var fi=qx.ui.table.pane.Scroller.VERTICAL_SCROLLBAR;
return ((fe||fj)?fl:0)|((ff||!fq)?0:fi);
},getPaneClipper:function(){return this.__qb;
},_applyScrollTimeout:function(fv,fw){this._startInterval(fv);
},_startInterval:function(fx){this.__ir.setInterval(fx);
this.__ir.start();
},_stopInterval:function(){this.__ir.stop();
},_postponedUpdateContent:function(){this._updateContent();
},_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.__qi&&!this.__pX._layoutPending){this.__qi=false;
this._updateContent();
}}),_updateContent:function(){var fC=this.__qb.getInnerSize();

if(!fC){return;
}var fF=fC.height;
var scrollX=this.__qd.getPosition();
var scrollY=this.__qe.getPosition();
var fz=this.getTable().getRowHeight();
var fA=Math.floor(scrollY/fz);
var fE=this.__pX.getFirstVisibleRow();
this.__pX.setFirstVisibleRow(fA);
var fB=Math.ceil(fF/fz);
var fy=0;
var fD=this.getTable().getKeepFirstVisibleRowComplete();

if(!fD){fB++;
fy=scrollY%fz;
}this.__pX.setVisibleRowCount(fB);

if(fA!=fE){this._updateFocusIndicator();
}this.__qb.scrollToX(scrollX);
if(!fD){this.__qb.scrollToY(fy);
}},_updateFocusIndicator:function(){var fG=this.getTable();

if(!fG.getEnabled()){return;
}this.__qf.moveToCell(this.__qx,this.__qy);
}},destruct:function(){this._stopInterval();
var fH=this.getTablePaneModel();

if(fH){fH.dispose();
}this.__qs=this.__qB=this.__pW=null;
this._disposeObjects(N,v,r,E,I,bf,X,A,J,w);
}});
})();
(function(){var b="qx.ui.table.IColumnMenuItem",a="qx.event.type.Data";
qx.Interface.define(b,{properties:{visible:{}},events:{changeVisible:a}});
})();
(function(){var f="changeVisible",d="qx.ui.table.columnmenu.MenuItem",c="_applyVisible",b="Boolean",a="changeValue";
qx.Class.define(d,{extend:qx.ui.menu.CheckBox,implement:qx.ui.table.IColumnMenuItem,properties:{visible:{check:b,init:true,apply:c,event:f}},construct:function(g){qx.ui.menu.CheckBox.call(this,g);
this.addListener(a,function(e){this.bInListener=true;
this.setVisible(e.getData());
this.bInListener=false;
});
},members:{__qE:false,_applyVisible:function(h,i){if(!this.bInListener){this.setValue(h);
}}}});
})();
(function(){var k="",j="Number",h='</div>',g='" ',f="paneUpdated",e='<div>',d="</div>",c="overflow: hidden;",b="qx.event.type.Data",a="paneReloadsData",E="div",D='style="',C="_applyMaxCacheLines",B="qx.ui.table.pane.Pane",A="width: 100%;",z="qx.event.type.Event",w="_applyVisibleRowCount",v='>',u="line-height: ",t="appear",r='class="',s="width:100%;",p="px;",q='<div ',n="'>",o="_applyFirstVisibleRow",l="<div style='",m=";position:relative;";
qx.Class.define(B,{extend:qx.ui.core.Widget,construct:function(F){qx.ui.core.Widget.call(this);
this.__pT=F;
this.__qF=0;
this.__qg=0;
this.__qG=[];
},events:{"paneReloadsData":b,"paneUpdated":z},properties:{firstVisibleRow:{check:j,init:0,apply:o},visibleRowCount:{check:j,init:0,apply:w},maxCacheLines:{check:j,init:1000,apply:C},allowShrinkX:{refine:true,init:false}},members:{__qg:null,__qF:null,__pT:null,__qH:null,__qy:null,__qx:null,__qG:null,__qI:0,_applyFirstVisibleRow:function(G,H){this.updateContent(false,G-H);
},_applyVisibleRowCount:function(I,J){this.updateContent(true);
},_getContentHint:function(){return {width:this.getPaneScroller().getTablePaneModel().getTotalWidth(),height:400};
},getPaneScroller:function(){return this.__pT;
},getTable:function(){return this.__pT.getTable();
},setFocusedCell:function(K,L,M){if(K!=this.__qx||L!=this.__qy){var N=this.__qy;
this.__qx=K;
this.__qy=L;
if(L!=N&&!M){if(N!==null){this.updateContent(false,null,N,true);
}
if(L!==null){this.updateContent(false,null,L,true);
}}}},onSelectionChanged:function(){this.updateContent(false,null,null,true);
},onFocusChanged:function(){this.updateContent(false,null,null,true);
},setColumnWidth:function(O,P){this.updateContent(true);
},onColOrderChanged:function(){this.updateContent(true);
},onPaneModelChanged:function(){this.updateContent(true);
},onTableModelDataChanged:function(Q,R,S,T){this.__qJ();
var V=this.getFirstVisibleRow();
var U=this.getVisibleRowCount();

if(R==-1||R>=V&&Q<V+U){this.updateContent();
}},onTableModelMetaDataChanged:function(){this.updateContent(true);
},_applyMaxCacheLines:function(W,X){if(this.__qI>=W&&W!==-1){this.__qJ();
}},__qJ:function(){this.__qG=[];
this.__qI=0;
},__qK:function(Y,ba,bb){if(!ba&&!bb&&this.__qG[Y]){return this.__qG[Y];
}else{return null;
}},__qL:function(bc,bd,be,bf){var bg=this.getMaxCacheLines();

if(!be&&!bf&&!this.__qG[bc]&&bg>0){this._applyMaxCacheLines(bg);
this.__qG[bc]=bd;
this.__qI+=1;
}},updateContent:function(bh,bi,bj,bk){if(bh){this.__qJ();
}if(bi&&Math.abs(bi)<=Math.min(10,this.getVisibleRowCount())){this._scrollContent(bi);
}else if(bk&&!this.getTable().getAlwaysUpdateCells()){this._updateRowStyles(bj);
}else{this._updateAllRows();
}},_updateRowStyles:function(bl){var bp=this.getContentElement().getDomElement();

if(!bp||!bp.firstChild){this._updateAllRows();
return;
}var bt=this.getTable();
var bn=bt.getSelectionModel();
var bq=bt.getTableModel();
var bu=bt.getDataRowRenderer();
var bo=bp.firstChild.childNodes;
var bs={table:bt};
var bv=this.getFirstVisibleRow();
var y=0;
var bm=bo.length;

if(bl!=null){var br=bl-bv;

if(br>=0&&br<bm){bv=bl;
y=br;
bm=br+1;
}else{return;
}}
for(;y<bm;y++,bv++){bs.row=bv;
bs.selected=bn.isSelectedIndex(bv);
bs.focusedRow=(this.__qy==bv);
bs.rowData=bq.getRowData(bv);
bu.updateDataRowElement(bs,bo[y]);
}},_getRowsHtml:function(bw,bx){var bD=this.getTable();
var bG=bD.getSelectionModel();
var bA=bD.getTableModel();
var bB=bD.getTableColumnModel();
var bV=this.getPaneScroller().getTablePaneModel();
var bL=bD.getDataRowRenderer();
bA.prefetchRows(bw,bw+bx-1);
var bS=bD.getRowHeight();
var bU=bV.getColumnCount();
var bC=0;
var bz=[];
for(var x=0;x<bU;x++){var bY=bV.getColumnAtX(x);
var bF=bB.getColumnWidth(bY);
bz.push({col:bY,xPos:x,editable:bA.isColumnEditable(bY),focusedCol:this.__qx==bY,styleLeft:bC,styleWidth:bF});
bC+=bF;
}var bX=[];
var ca=false;

for(var bE=bw;bE<bw+bx;bE++){var bH=bG.isSelectedIndex(bE);
var bK=(this.__qy==bE);
var bP=this.__qK(bE,bH,bK);

if(bP){bX.push(bP);
continue;
}var by=[];
var bR={table:bD};
bR.styleHeight=bS;
bR.row=bE;
bR.selected=bH;
bR.focusedRow=bK;
bR.rowData=bA.getRowData(bE);

if(!bR.rowData){ca=true;
}by.push(q);
var bO=bL.getRowAttributes(bR);

if(bO){by.push(bO);
}var bN=bL.getRowClass(bR);

if(bN){by.push(r,bN,g);
}var bM=bL.createRowStyle(bR);
bM+=m+bL.getRowHeightStyle(bS)+s;

if(bM){by.push(D,bM,g);
}by.push(v);
var bW=false;

for(x=0;x<bU&&!bW;x++){var bI=bz[x];

for(var bT in bI){bR[bT]=bI[bT];
}var bY=bR.col;
bR.value=bA.getValue(bY,bE);
var bJ=bB.getDataCellRenderer(bY);
bR.style=bJ.getDefaultCellStyle();
bW=bJ.createDataCellHtml(bR,by)||false;
}by.push(h);
var bQ=by.join(k);
this.__qL(bE,bQ,bH,bK);
bX.push(bQ);
}this.fireDataEvent(a,ca);
return bX.join(k);
},_scrollContent:function(cb){var cc=this.getContentElement().getDomElement();

if(!(cc&&cc.firstChild)){this._updateAllRows();
return;
}var cl=cc.firstChild;
var cd=cl.childNodes;
var cj=this.getVisibleRowCount();
var ci=this.getFirstVisibleRow();
var cg=this.getTable().getTableModel();
var cm=0;
cm=cg.getRowCount();
if(ci+cj>cm){this._updateAllRows();
return;
}var cn=cb<0?cj+cb:0;
var ce=cb<0?0:cj-cb;

for(i=Math.abs(cb)-1;i>=0;i--){var ch=cd[cn];

try{cl.removeChild(ch);
}catch(co){break;
}}if(!this.__qH){this.__qH=document.createElement(E);
}var ck=e;
ck+=this._getRowsHtml(ci+ce,Math.abs(cb));
ck+=h;
this.__qH.innerHTML=ck;
var cf=this.__qH.firstChild.childNodes;
if(cb>0){for(var i=cf.length-1;i>=0;i--){var ch=cf[0];
cl.appendChild(ch);
}}else{for(var i=cf.length-1;i>=0;i--){var ch=cf[cf.length-1];
cl.insertBefore(ch,cl.firstChild);
}}if(this.__qy!==null){this._updateRowStyles(this.__qy-cb);
this._updateRowStyles(this.__qy);
}this.fireEvent(f);
},_updateAllRows:function(){var cs=this.getContentElement().getDomElement();

if(!cs){this.addListenerOnce(t,arguments.callee,this);
return;
}var cy=this.getTable();
var cv=cy.getTableModel();
var cx=this.getPaneScroller().getTablePaneModel();
var cw=cx.getColumnCount();
var cp=cy.getRowHeight();
var ct=this.getFirstVisibleRow();
var cq=this.getVisibleRowCount();
var cz=cv.getRowCount();

if(ct+cq>cz){cq=Math.max(0,cz-ct);
}var cr=cx.getTotalWidth();
var cu;
if(cq>0){cu=[l,A,(cy.getForceLineHeight()?u+cp+p:k),c,n,this._getRowsHtml(ct,cq),d];
}else{cu=[];
}var cA=cu.join(k);
cs.innerHTML=cA;
this.setWidth(cr);
this.__qF=cw;
this.__qg=cq;
this.fireEvent(f);
}},destruct:function(){this.__qH=this.__pT=this.__qG=null;
}});
})();
(function(){var e="metaDataChanged",d="qx.event.type.Data",c="qx.event.type.Event",b="abstract",a="qx.ui.table.model.Abstract";
qx.Class.define(a,{type:b,extend:qx.core.Object,implement:qx.ui.table.ITableModel,events:{"dataChanged":d,"metaDataChanged":c,"sorted":d},construct:function(){qx.core.Object.call(this);
this.__qM=[];
this.__qN=[];
this.__qO={};
},members:{__qM:null,__qN:null,__qO:null,__qP:null,init:function(f){},getRowCount:function(){throw new Error("getRowCount is abstract");
},getRowData:function(g){return null;
},isColumnEditable:function(h){return false;
},isColumnSortable:function(j){return false;
},sortByColumn:function(k,l){},getSortColumnIndex:function(){return -1;
},isSortAscending:function(){return true;
},prefetchRows:function(m,n){},getValue:function(o,p){throw new Error("getValue is abstract");
},getValueById:function(q,r){return this.getValue(this.getColumnIndexById(q),r);
},setValue:function(s,t,u){throw new Error("setValue is abstract");
},setValueById:function(v,w,x){this.setValue(this.getColumnIndexById(v),w,x);
},getColumnCount:function(){return this.__qM.length;
},getColumnIndexById:function(y){return this.__qO[y];
},getColumnId:function(z){return this.__qM[z];
},getColumnName:function(A){return this.__qN[A];
},setColumnIds:function(B){this.__qM=B;
this.__qO={};

for(var i=0;i<B.length;i++){this.__qO[B[i]]=i;
}this.__qN=new Array(B.length);
if(!this.__qP){this.fireEvent(e);
}},setColumnNamesByIndex:function(C){if(this.__qM.length!=C.length){throw new Error("this.__columnIdArr and columnNameArr have different length: "+this.__qM.length+" != "+C.length);
}this.__qN=C;
this.fireEvent(e);
},setColumnNamesById:function(D){this.__qN=new Array(this.__qM.length);

for(var i=0;i<this.__qM.length;++i){this.__qN[i]=D[this.__qM[i]];
}},setColumns:function(E,F){var G=this.__qM.length==0||F;

if(F==null){if(this.__qM.length==0){F=E;
}else{F=this.__qM;
}}
if(F.length!=E.length){throw new Error("columnIdArr and columnNameArr have different length: "+F.length+" != "+E.length);
}
if(G){this.__qP=true;
this.setColumnIds(F);
this.__qP=false;
}this.setColumnNamesByIndex(E);
}},destruct:function(){this.__qM=this.__qN=this.__qO=null;
}});
})();
(function(){var e="dataChanged",d="metaDataChanged",c="qx.ui.table.model.Simple",b="Boolean",a="sorted";
qx.Class.define(c,{extend:qx.ui.table.model.Abstract,construct:function(){qx.ui.table.model.Abstract.call(this);
this.__qQ=[];
this.__qR=-1;
this.__qS=[];
this.__qT=null;
},properties:{caseSensitiveSorting:{check:b,init:true}},statics:{_defaultSortComparatorAscending:function(f,g){var h=f[arguments.callee.columnIndex];
var k=g[arguments.callee.columnIndex];

if(qx.lang.Type.isNumber(h)&&qx.lang.Type.isNumber(k)){var l=isNaN(h)?isNaN(k)?0:1:isNaN(k)?-1:null;

if(l!=null){return l;
}}return (h>k)?1:((h==k)?0:-1);
},_defaultSortComparatorInsensitiveAscending:function(m,n){var o=(m[arguments.callee.columnIndex].toLowerCase?m[arguments.callee.columnIndex].toLowerCase():m[arguments.callee.columnIndex]);
var p=(n[arguments.callee.columnIndex].toLowerCase?n[arguments.callee.columnIndex].toLowerCase():n[arguments.callee.columnIndex]);

if(qx.lang.Type.isNumber(o)&&qx.lang.Type.isNumber(p)){var q=isNaN(o)?isNaN(p)?0:1:isNaN(p)?-1:null;

if(q!=null){return q;
}}return (o>p)?1:((o==p)?0:-1);
},_defaultSortComparatorDescending:function(r,s){var t=r[arguments.callee.columnIndex];
var u=s[arguments.callee.columnIndex];

if(qx.lang.Type.isNumber(t)&&qx.lang.Type.isNumber(u)){var v=isNaN(t)?isNaN(u)?0:1:isNaN(u)?-1:null;

if(v!=null){return v;
}}return (t<u)?1:((t==u)?0:-1);
},_defaultSortComparatorInsensitiveDescending:function(w,x){var y=(w[arguments.callee.columnIndex].toLowerCase?w[arguments.callee.columnIndex].toLowerCase():w[arguments.callee.columnIndex]);
var z=(x[arguments.callee.columnIndex].toLowerCase?x[arguments.callee.columnIndex].toLowerCase():x[arguments.callee.columnIndex]);

if(qx.lang.Type.isNumber(y)&&qx.lang.Type.isNumber(z)){var A=isNaN(y)?isNaN(z)?0:1:isNaN(z)?-1:null;

if(A!=null){return A;
}}return (y<z)?1:((y==z)?0:-1);
}},members:{__qQ:null,__qT:null,__qU:null,__qS:null,__qR:null,__qV:null,getRowData:function(B){var C=this.__qQ[B];

if(C==null||C.originalData==null){return C;
}else{return C.originalData;
}},getRowDataAsMap:function(D){var F=this.__qQ[D];

if(F!=null){var E={};
for(var G=0;G<this.getColumnCount();G++){E[this.getColumnId(G)]=F[G];
}
if(F.originalData!=null){for(var H in F.originalData){if(E[H]==undefined){E[H]=F.originalData[H];
}}}return E;
}return (F&&F.originalData)?F.originalData:null;
},getDataAsMapArray:function(){var J=this.getRowCount();
var I=[];

for(var i=0;i<J;i++){I.push(this.getRowDataAsMap(i));
}return I;
},setEditable:function(K){this.__qT=[];

for(var L=0;L<this.getColumnCount();L++){this.__qT[L]=K;
}this.fireEvent(d);
},setColumnEditable:function(M,N){if(N!=this.isColumnEditable(M)){if(this.__qT==null){this.__qT=[];
}this.__qT[M]=N;
this.fireEvent(d);
}},isColumnEditable:function(O){return this.__qT?(this.__qT[O]==true):false;
},setColumnSortable:function(P,Q){if(Q!=this.isColumnSortable(P)){if(this.__qU==null){this.__qU=[];
}this.__qU[P]=Q;
this.fireEvent(d);
}},isColumnSortable:function(R){return (this.__qU?(this.__qU[R]!==false):true);
},sortByColumn:function(S,T){var W;
var V=this.__qS[S];

if(V){W=(T?V.ascending:V.descending);
}else{if(this.getCaseSensitiveSorting()){W=(T?qx.ui.table.model.Simple._defaultSortComparatorAscending:qx.ui.table.model.Simple._defaultSortComparatorDescending);
}else{W=(T?qx.ui.table.model.Simple._defaultSortComparatorInsensitiveAscending:qx.ui.table.model.Simple._defaultSortComparatorInsensitiveDescending);
}}W.columnIndex=S;
this.__qQ.sort(W);
this.__qR=S;
this.__qV=T;
var U={columnIndex:S,ascending:T};
this.fireDataEvent(a,U);
this.fireEvent(d);
},setSortMethods:function(X,Y){var ba;

if(qx.lang.Type.isFunction(Y)){ba={ascending:Y,descending:function(bb,bc){return Y(bc,bb);
}};
}else{ba=Y;
}this.__qS[X]=ba;
},getSortMethods:function(bd){return this.__qS[bd];
},clearSorting:function(){if(this.__qR!=-1){this.__qR=-1;
this.__qV=true;
this.fireEvent(d);
}},getSortColumnIndex:function(){return this.__qR;
},_setSortColumnIndex:function(be){this.__qR=be;
},isSortAscending:function(){return this.__qV;
},_setSortAscending:function(bf){this.__qV=bf;
},getRowCount:function(){return this.__qQ.length;
},getValue:function(bg,bh){if(bh<0||bh>=this.__qQ.length){throw new Error("this.__rowArr out of bounds: "+bh+" (0.."+this.__qQ.length+")");
}return this.__qQ[bh][bg];
},setValue:function(bi,bj,bk){if(this.__qQ[bj][bi]!=bk){this.__qQ[bj][bi]=bk;
if(this.hasListener(e)){var bl={firstRow:bj,lastRow:bj,firstColumn:bi,lastColumn:bi};
this.fireDataEvent(e,bl);
}
if(bi==this.__qR){this.clearSorting();
}}},setData:function(bm,bn){this.__qQ=bm;
if(this.hasListener(e)){var bo={firstRow:0,lastRow:bm.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(e,bo);
}
if(bn!==false){this.clearSorting();
}},getData:function(){return this.__qQ;
},setDataAsMapArray:function(bp,bq,br){this.setData(this._mapArray2RowArr(bp,bq),br);
},addRows:function(bs,bt,bu){if(bt==null){bt=this.__qQ.length;
}bs.splice(0,0,bt,0);
Array.prototype.splice.apply(this.__qQ,bs);
var bv={firstRow:bt,lastRow:this.__qQ.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(e,bv);

if(bu!==false){this.clearSorting();
}},addRowsAsMapArray:function(bw,bx,by,bz){this.addRows(this._mapArray2RowArr(bw,by),bx,bz);
},setRows:function(bA,bB,bC){if(bB==null){bB=0;
}bA.splice(0,0,bB,bA.length);
Array.prototype.splice.apply(this.__qQ,bA);
var bD={firstRow:bB,lastRow:this.__qQ.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(e,bD);

if(bC!==false){this.clearSorting();
}},setRowsAsMapArray:function(bE,bF,bG,bH){this.setRows(this._mapArray2RowArr(bE,bG),bF,bH);
},removeRows:function(bI,bJ,bK){this.__qQ.splice(bI,bJ);
var bL={firstRow:bI,lastRow:this.__qQ.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1,removeStart:bI,removeCount:bJ};
this.fireDataEvent(e,bL);

if(bK!==false){this.clearSorting();
}},_mapArray2RowArr:function(bM,bN){var bR=bM.length;
var bO=this.getColumnCount();
var bQ=new Array(bR);
var bP;

for(var i=0;i<bR;++i){bP=[];

if(bN){bP.originalData=bM[i];
}
for(var j=0;j<bO;++j){bP[j]=bM[i][this.getColumnId(j)];
}bQ[i]=bP;
}return bQ;
}},destruct:function(){this.__qQ=this.__qT=this.__qS=this.__qU=null;
}});
})();
(function(){var a="qx.ui.table.IColumnMenuButton";
qx.Interface.define(a,{properties:{menu:{}},members:{factory:function(b,c){return true;
},empty:function(){return true;
}}});
})();
(function(){var f="menu-button",e="table-column-reset-button",d="separator",c="user-button",b="qx.ui.table.columnmenu.Button",a="menu";
qx.Class.define(b,{extend:qx.ui.form.MenuButton,implement:qx.ui.table.IColumnMenuButton,construct:function(){qx.ui.form.MenuButton.call(this);
this.__jY=new qx.ui.core.Blocker(this);
},members:{__qW:null,__jY:null,factory:function(g,h){switch(g){case a:var j=new qx.ui.menu.Menu();
this.setMenu(j);
return j;
case f:var m=new qx.ui.table.columnmenu.MenuItem(h.text);
m.setVisible(h.bVisible);
this.getMenu().add(m);
return m;
case c:var k=new qx.ui.menu.Button(h.text);
k.set({appearance:e});
return k;
case d:return new qx.ui.menu.Separator();
default:throw new Error("Unrecognized factory request: "+g);
}},getBlocker:function(){return this.__jY;
},empty:function(){var n=this.getMenu();
var o=n.getChildren();

for(var i=0,l=o.length;i<l;i++){o[0].destroy();
}}},destruct:function(){this.__jY.dispose();
}});
})();
(function(){var t="",s="Number",r="-",q="0",p="String",o="changeNumberFormat",n='(',m="g",l="Boolean",k="$",d="NaN",j='([0-9]{1,3}(?:',g='{0,1}[0-9]{3}){0,})',c='\\d+){0,1}',b="qx.util.format.NumberFormat",f="Infinity",e="^",h=".",a="-Infinity",i='([-+]){0,1}';
qx.Class.define(b,{extend:qx.core.Object,implement:qx.util.format.IFormat,construct:function(u){qx.core.Object.call(this);
this.__ll=u;
},properties:{minimumIntegerDigits:{check:s,init:0},maximumIntegerDigits:{check:s,nullable:true},minimumFractionDigits:{check:s,init:0},maximumFractionDigits:{check:s,nullable:true},groupingUsed:{check:l,init:true},prefix:{check:p,init:t,event:o},postfix:{check:p,init:t,event:o}},members:{__ll:null,format:function(v){switch(v){case Infinity:return f;
case -Infinity:return a;
case NaN:return d;
}var z=(v<0);

if(z){v=-v;
}
if(this.getMaximumFractionDigits()!=null){var G=Math.pow(10,this.getMaximumFractionDigits());
v=Math.round(v*G)/G;
}var F=String(Math.floor(v)).length;
var w=t+v;
var C=w.substring(0,F);

while(C.length<this.getMinimumIntegerDigits()){C=q+C;
}
if(this.getMaximumIntegerDigits()!=null&&C.length>this.getMaximumIntegerDigits()){C=C.substring(C.length-this.getMaximumIntegerDigits());
}var B=w.substring(F+1);

while(B.length<this.getMinimumFractionDigits()){B+=q;
}
if(this.getMaximumFractionDigits()!=null&&B.length>this.getMaximumFractionDigits()){B=B.substring(0,this.getMaximumFractionDigits());
}if(this.getGroupingUsed()){var y=C;
C=t;
var E;

for(E=y.length;E>3;E-=3){C=t+qx.locale.Number.getGroupSeparator(this.__ll)+y.substring(E-3,E)+C;
}C=y.substring(0,E)+C;
}var A=this.getPrefix()?this.getPrefix():t;
var x=this.getPostfix()?this.getPostfix():t;
var D=A+(z?r:t)+C;

if(B.length>0){D+=t+qx.locale.Number.getDecimalSeparator(this.__ll)+B;
}D+=x;
return D;
},parse:function(H){var M=qx.lang.String.escapeRegexpChars(qx.locale.Number.getGroupSeparator(this.__ll)+t);
var K=qx.lang.String.escapeRegexpChars(qx.locale.Number.getDecimalSeparator(this.__ll)+t);
var I=new RegExp(e+qx.lang.String.escapeRegexpChars(this.getPrefix())+i+j+M+g+n+K+c+qx.lang.String.escapeRegexpChars(this.getPostfix())+k);
var L=I.exec(H);

if(L==null){throw new Error("Number string '"+H+"' does not match the number format");
}var N=(L[1]==r);
var P=L[2];
var O=L[3];
P=P.replace(new RegExp(M,m),t);
var J=(N?r:t)+P;

if(O!=null&&O.length!=0){O=O.replace(new RegExp(K),t);
J+=h+O;
}return parseFloat(J);
}}});
})();
(function(){var h="",g="number",f="Boolean",e="qx.ui.table.cellrenderer.Default",d=" qooxdoo-table-cell-bold",c=" qooxdoo-table-cell-right",b=" qooxdoo-table-cell-italic",a="string";
qx.Class.define(e,{extend:qx.ui.table.cellrenderer.Abstract,statics:{STYLEFLAG_ALIGN_RIGHT:1,STYLEFLAG_BOLD:2,STYLEFLAG_ITALIC:4,_numberFormat:null},properties:{useAutoAlign:{check:f,init:true}},members:{_getStyleFlags:function(i){if(this.getUseAutoAlign()){if(typeof i.value==g){return qx.ui.table.cellrenderer.Default.STYLEFLAG_ALIGN_RIGHT;
}}return 0;
},_getCellClass:function(j){var k=qx.ui.table.cellrenderer.Abstract.prototype._getCellClass.call(this,j);

if(!k){return h;
}var l=this._getStyleFlags(j);

if(l&qx.ui.table.cellrenderer.Default.STYLEFLAG_ALIGN_RIGHT){k+=c;
}
if(l&qx.ui.table.cellrenderer.Default.STYLEFLAG_BOLD){k+=d;
}
if(l&qx.ui.table.cellrenderer.Default.STYLEFLAG_ITALIC){k+=b;
}return k;
},_getContentHtml:function(m){return qx.bom.String.escape(this._formatValue(m));
},_formatValue:function(n){var p=n.value;
var o;

if(p==null){return h;
}
if(typeof p==a){return p;
}else if(typeof p==g){if(!qx.ui.table.cellrenderer.Default._numberFormat){qx.ui.table.cellrenderer.Default._numberFormat=new qx.util.format.NumberFormat();
qx.ui.table.cellrenderer.Default._numberFormat.setMaximumFractionDigits(2);
}o=qx.ui.table.cellrenderer.Default._numberFormat.format(p);
}else if(p instanceof Date){o=qx.util.format.DateFormat.getDateInstance().format(p);
}else{o=p;
}return o;
}}});
})();
(function(){var a="qx.ui.table.pane.Clipper";
qx.Class.define(a,{extend:qx.ui.container.Composite,construct:function(){qx.ui.container.Composite.call(this,new qx.ui.layout.Grow());
this.setMinWidth(0);
},members:{scrollToX:function(b){this.getContentElement().scrollToX(b,false);
},scrollToY:function(c){this.getContentElement().scrollToY(c,true);
}}});
})();
(function(){var p="Boolean",o="column-button",n="Function",m="qx.event.type.Data",k="statusbar",h="qx.ui.table.pane.CellEvent",g="function",f="PageUp",e="dataChanged",d="changeLocale",bH="changeSelection",bG="appear",bF="qx.dynlocale",bE='"',bD="__rd",bC="Enter",bB="metaDataChanged",bA="_applyStatusBarVisible",bz="columnVisibilityMenuCreateStart",by="blur",w="qx.ui.table.Table",y="columnVisibilityMenuCreateEnd",u="changeVisible",v="_applyResetSelectionOnHeaderClick",s="_applyMetaColumnCounts",t="focus",q="changeDataRowRenderer",r="changeHeaderCellHeight",F="Escape",G="A",ba="changeSelectionModel",V="Left",bi="Down",bd="Integer",bu="_applyHeaderCellHeight",bo="visibilityChanged",O="qx.ui.table.ITableModel",bx="orderChanged",bw="_applySelectionModel",bv="menu-button",M="menu",R="_applyAdditionalStatusBarText",T="_applyFocusCellOnMouseMove",X="table",bb="_applyColumnVisibilityButtonVisible",be="__ir",bk="changeTableModel",bq="qx.event.type.Event",z="tableWidthChanged",A="_applyHeaderCellsVisible",Q="Object",bh="__rc",bg="_applyShowCellFocusIndicator",bf="__qY",bm="resize",bl="verticalScrollBarChanged",bc="changeScrollY",bj="_applyTableModel",a="End",bp="_applyKeepFirstVisibleRowComplete",B="widthChanged",C="one of one row",W="Home",b="_applyRowHeight",c="F2",L="Up",D="%1 rows",E="qx.ui.table.selection.Model",K="one row",Y="__qW",bs="PageDown",br="%1 of %2 rows",S="keypress",bt="changeRowHeight",N="Number",bn="__qX",H="header",J="_applyContextMenuFromDataCellsOnly",P="qx.ui.table.IRowRenderer",U="Right",I="Space";
qx.Class.define(w,{extend:qx.ui.core.Widget,construct:function(bI,bJ){qx.ui.core.Widget.call(this);
if(!bJ){bJ={};
}
if(bJ.initiallyHiddenColumns){this.setInitiallyHiddenColumns(bJ.initiallyHiddenColumns);
}
if(bJ.selectionManager){this.setNewSelectionManager(bJ.selectionManager);
}
if(bJ.selectionModel){this.setNewSelectionModel(bJ.selectionModel);
}
if(bJ.tableColumnModel){this.setNewTableColumnModel(bJ.tableColumnModel);
}
if(bJ.tablePane){this.setNewTablePane(bJ.tablePane);
}
if(bJ.tablePaneHeader){this.setNewTablePaneHeader(bJ.tablePaneHeader);
}
if(bJ.tablePaneScroller){this.setNewTablePaneScroller(bJ.tablePaneScroller);
}
if(bJ.tablePaneModel){this.setNewTablePaneModel(bJ.tablePaneModel);
}
if(bJ.columnMenu){this.setNewColumnMenu(bJ.columnMenu);
}this._setLayout(new qx.ui.layout.VBox());
this.__qX=new qx.ui.container.Composite(new qx.ui.layout.HBox());
this._add(this.__qX,{flex:1});
this.setDataRowRenderer(new qx.ui.table.rowrenderer.Default(this));
this.__qY=this.getNewSelectionManager()(this);
this.setSelectionModel(this.getNewSelectionModel()(this));
this.setTableModel(bI||this.getEmptyTableModel());
this.setMetaColumnCounts([-1]);
this.setTabIndex(1);
this.addListener(S,this._onKeyPress);
this.addListener(t,this._onFocusChanged);
this.addListener(by,this._onFocusChanged);
var bK=new qx.ui.core.Widget().set({height:0});
this._add(bK);
bK.addListener(bm,this._onResize,this);
this.__qx=null;
this.__qy=null;
if(qx.core.Environment.get(bF)){qx.locale.Manager.getInstance().addListener(d,this._onChangeLocale,this);
}this.initStatusBarVisible();
bI=this.getTableModel();

if(bI.init&&typeof (bI.init)==g){bI.init(this);
}},events:{"columnVisibilityMenuCreateStart":m,"columnVisibilityMenuCreateEnd":m,"tableWidthChanged":bq,"verticalScrollBarChanged":m,"cellClick":h,"cellDblclick":h,"cellContextmenu":h,"dataEdited":m},statics:{__ra:{cellClick:1,cellDblclick:1,cellContextmenu:1}},properties:{appearance:{refine:true,init:X},focusable:{refine:true,init:true},minWidth:{refine:true,init:50},initiallyHiddenColumns:{init:null},selectable:{refine:true,init:false},selectionModel:{check:E,apply:bw,event:ba},tableModel:{check:O,apply:bj,event:bk},rowHeight:{check:N,init:20,apply:b,event:bt,themeable:true},forceLineHeight:{check:p,init:true},headerCellsVisible:{check:p,init:true,apply:A,themeable:true},headerCellHeight:{check:bd,init:16,apply:bu,event:r,nullable:true,themeable:true},statusBarVisible:{check:p,init:true,apply:bA},additionalStatusBarText:{nullable:true,init:null,apply:R},columnVisibilityButtonVisible:{check:p,init:true,apply:bb,themeable:true},metaColumnCounts:{check:Q,apply:s},focusCellOnMouseMove:{check:p,init:false,apply:T},rowFocusChangeModifiesSelection:{check:p,init:true},showCellFocusIndicator:{check:p,init:true,apply:bg},contextMenuFromDataCellsOnly:{check:p,init:true,apply:J},keepFirstVisibleRowComplete:{check:p,init:true,apply:bp},alwaysUpdateCells:{check:p,init:false},resetSelectionOnHeaderClick:{check:p,init:true,apply:v},dataRowRenderer:{check:P,init:null,nullable:true,event:q},modalCellEditorPreOpenFunction:{check:n,init:null,nullable:true},newColumnMenu:{check:n,init:function(){return new qx.ui.table.columnmenu.Button();
}},newSelectionManager:{check:n,init:function(bL){return new qx.ui.table.selection.Manager(bL);
}},newSelectionModel:{check:n,init:function(bM){return new qx.ui.table.selection.Model(bM);
}},newTableColumnModel:{check:n,init:function(bN){return new qx.ui.table.columnmodel.Basic(bN);
}},newTablePane:{check:n,init:function(bO){return new qx.ui.table.pane.Pane(bO);
}},newTablePaneHeader:{check:n,init:function(bP){return new qx.ui.table.pane.Header(bP);
}},newTablePaneScroller:{check:n,init:function(bQ){return new qx.ui.table.pane.Scroller(bQ);
}},newTablePaneModel:{check:n,init:function(bR){return new qx.ui.table.pane.Model(bR);
}}},members:{__qx:null,__qy:null,__qX:null,__qY:null,__rb:null,__qg:null,__qP:null,__qW:null,__rc:null,__rd:null,__re:null,__ir:null,_createChildControlImpl:function(bS,bT){var bU;

switch(bS){case k:bU=new qx.ui.basic.Label();
bU.set({allowGrowX:true});
this._add(bU);
break;
case o:bU=this.getNewColumnMenu()();
bU.set({focusable:false});
var bV=bU.factory(M,{table:this});
bV.addListener(bG,this._initColumnMenu,this);
break;
}return bU||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,bS);
},_applySelectionModel:function(bW,bX){this.__qY.setSelectionModel(bW);

if(bX!=null){bX.removeListener(bH,this._onSelectionChanged,this);
}bW.addListener(bH,this._onSelectionChanged,this);
},_applyRowHeight:function(bY,ca){var cb=this._getPaneScrollerArr();

for(var i=0;i<cb.length;i++){cb[i].updateVerScrollBarMaximum();
}},_applyHeaderCellsVisible:function(cc,cd){var ce=this._getPaneScrollerArr();

for(var i=0;i<ce.length;i++){ce[i]._excludeChildControl(H);
}},_applyHeaderCellHeight:function(cf,cg){var ch=this._getPaneScrollerArr();

for(var i=0;i<ch.length;i++){ch[i].getHeader().setHeight(cf);
}},getEmptyTableModel:function(){if(!this.__rd){this.__rd=new qx.ui.table.model.Simple();
this.__rd.setColumns([]);
this.__rd.setData([]);
}return this.__rd;
},_applyTableModel:function(ci,cj){this.getTableColumnModel().init(ci.getColumnCount(),this);

if(cj!=null){cj.removeListener(bB,this._onTableModelMetaDataChanged,this);
cj.removeListener(e,this._onTableModelDataChanged,this);
}ci.addListener(bB,this._onTableModelMetaDataChanged,this);
ci.addListener(e,this._onTableModelDataChanged,this);
this._updateStatusBar();
this._updateTableData(0,ci.getRowCount(),0,ci.getColumnCount());
this._onTableModelMetaDataChanged();
if(cj&&ci.init&&typeof (ci.init)==g){ci.init(this);
}},getTableColumnModel:function(){if(!this.__rc){var cn=this.__rc=this.getNewTableColumnModel()(this);
cn.addListener(bo,this._onColVisibilityChanged,this);
cn.addListener(B,this._onColWidthChanged,this);
cn.addListener(bx,this._onColOrderChanged,this);
var cm=this.getTableModel();
cn.init(cm.getColumnCount(),this);
var ck=this._getPaneScrollerArr();

for(var i=0;i<ck.length;i++){var cl=ck[i];
var co=cl.getTablePaneModel();
co.setTableColumnModel(cn);
}}return this.__rc;
},_applyStatusBarVisible:function(cp,cq){if(cp){this._showChildControl(k);
}else{this._excludeChildControl(k);
}
if(cp){this._updateStatusBar();
}},_applyAdditionalStatusBarText:function(cr,cs){this.__rb=cr;
this._updateStatusBar();
},_applyColumnVisibilityButtonVisible:function(ct,cu){if(ct){this._showChildControl(o);
}else{this._excludeChildControl(o);
}},_applyMetaColumnCounts:function(cv,cw){var cD=cv;
var cx=this._getPaneScrollerArr();
var cB={};

if(cv>cw){var cF=qx.event.Registration.getManager(cx[0]);

for(var cG in qx.ui.table.Table.__ra){cB[cG]={};
cB[cG].capture=cF.getListeners(cx[0],cG,true);
cB[cG].bubble=cF.getListeners(cx[0],cG,false);
}}this._cleanUpMetaColumns(cD.length);
var cC=0;

for(var i=0;i<cx.length;i++){var cH=cx[i];
var cE=cH.getTablePaneModel();
cE.setFirstColumnX(cC);
cE.setMaxColumnCount(cD[i]);
cC+=cD[i];
}if(cD.length>cx.length){var cA=this.getTableColumnModel();

for(var i=cx.length;i<cD.length;i++){var cE=this.getNewTablePaneModel()(cA);
cE.setFirstColumnX(cC);
cE.setMaxColumnCount(cD[i]);
cC+=cD[i];
var cH=this.getNewTablePaneScroller()(this);
cH.setTablePaneModel(cE);
cH.addListener(bc,this._onScrollY,this);
for(cG in qx.ui.table.Table.__ra){if(!cB[cG]){break;
}
if(cB[cG].capture&&cB[cG].capture.length>0){var cy=cB[cG].capture;

for(var j=0;j<cy.length;j++){var cz=cy[j].context;

if(!cz){cz=this;
}else if(cz==cx[0]){cz=cH;
}cH.addListener(cG,cy[j].handler,cz,true);
}}
if(cB[cG].bubble&&cB[cG].bubble.length>0){var cJ=cB[cG].bubble;

for(var j=0;j<cJ.length;j++){var cz=cJ[j].context;

if(!cz){cz=this;
}else if(cz==cx[0]){cz=cH;
}cH.addListener(cG,cJ[j].handler,cz,false);
}}}var cI=(i==cD.length-1)?1:0;
this.__qX.add(cH,{flex:cI});
cx=this._getPaneScrollerArr();
}}for(var i=0;i<cx.length;i++){var cH=cx[i];
var cK=(i==(cx.length-1));
cH.getHeader().setHeight(this.getHeaderCellHeight());
cH.setTopRightWidget(cK?this.getChildControl(o):null);
}
if(!this.isColumnVisibilityButtonVisible()){this._excludeChildControl(o);
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},_applyFocusCellOnMouseMove:function(cL,cM){var cN=this._getPaneScrollerArr();

for(var i=0;i<cN.length;i++){cN[i].setFocusCellOnMouseMove(cL);
}},_applyShowCellFocusIndicator:function(cO,cP){var cQ=this._getPaneScrollerArr();

for(var i=0;i<cQ.length;i++){cQ[i].setShowCellFocusIndicator(cO);
}},_applyContextMenuFromDataCellsOnly:function(cR,cS){var cT=this._getPaneScrollerArr();

for(var i=0;i<cT.length;i++){cT[i].setContextMenuFromDataCellsOnly(cR);
}},_applyKeepFirstVisibleRowComplete:function(cU,cV){var cW=this._getPaneScrollerArr();

for(var i=0;i<cW.length;i++){cW[i].onKeepFirstVisibleRowCompleteChanged();
}},_applyResetSelectionOnHeaderClick:function(cX,cY){var da=this._getPaneScrollerArr();

for(var i=0;i<da.length;i++){da[i].setResetSelectionOnHeaderClick(cX);
}},getSelectionManager:function(){return this.__qY;
},_getPaneScrollerArr:function(){return this.__qX.getChildren();
},getPaneScroller:function(db){return this._getPaneScrollerArr()[db];
},_cleanUpMetaColumns:function(dc){var dd=this._getPaneScrollerArr();

if(dd!=null){for(var i=dd.length-1;i>=dc;i--){dd[i].destroy();
}}},_onChangeLocale:function(de){this.updateContent();
this._updateStatusBar();
},_onSelectionChanged:function(df){var dg=this._getPaneScrollerArr();

for(var i=0;i<dg.length;i++){dg[i].onSelectionChanged();
}this._updateStatusBar();
},_onTableModelMetaDataChanged:function(dh){var di=this._getPaneScrollerArr();

for(var i=0;i<di.length;i++){di[i].onTableModelMetaDataChanged();
}this._updateStatusBar();
},_onTableModelDataChanged:function(dj){var dk=dj.getData();
this._updateTableData(dk.firstRow,dk.lastRow,dk.firstColumn,dk.lastColumn,dk.removeStart,dk.removeCount);
},_updateTableData:function(dl,dm,dn,dp,dq,dr){var ds=this._getPaneScrollerArr();
if(dr){this.getSelectionModel().removeSelectionInterval(dq,dq+dr);
if(this.__qy>=dq&&this.__qy<(dq+dr)){this.setFocusedCell();
}}
for(var i=0;i<ds.length;i++){ds[i].onTableModelDataChanged(dl,dm,dn,dp);
}var dt=this.getTableModel().getRowCount();

if(dt!=this.__qg){this.__qg=dt;
this._updateScrollBarVisibility();
this._updateStatusBar();
}},_onScrollY:function(du){if(!this.__qP){this.__qP=true;
var dv=this._getPaneScrollerArr();

for(var i=0;i<dv.length;i++){dv[i].setScrollY(du.getData());
}this.__qP=false;
}},_onKeyPress:function(dw){if(!this.getEnabled()){return;
}var dD=this.__qy;
var dA=true;
var dE=dw.getKeyIdentifier();

if(this.isEditing()){if(dw.getModifiers()==0){switch(dE){case bC:this.stopEditing();
var dD=this.__qy;
this.moveFocusedCell(0,1);

if(this.__qy!=dD){dA=this.startEditing();
}break;
case F:this.cancelEditing();
this.focus();
break;
default:dA=false;
break;
}}}else{if(dw.isCtrlPressed()){dA=true;

switch(dE){case G:var dB=this.getTableModel().getRowCount();

if(dB>0){this.getSelectionModel().setSelectionInterval(0,dB-1);
}break;
default:dA=false;
break;
}}else{switch(dE){case I:this.__qY.handleSelectKeyDown(this.__qy,dw);
break;
case c:case bC:this.startEditing();
dA=true;
break;
case W:this.setFocusedCell(this.__qx,0,true);
break;
case a:var dB=this.getTableModel().getRowCount();
this.setFocusedCell(this.__qx,dB-1,true);
break;
case V:this.moveFocusedCell(-1,0);
break;
case U:this.moveFocusedCell(1,0);
break;
case L:this.moveFocusedCell(0,-1);
break;
case bi:this.moveFocusedCell(0,1);
break;
case f:case bs:var dz=this.getPaneScroller(0);
var dC=dz.getTablePane();
var dy=this.getRowHeight();
var dx=(dE==f)?-1:1;
dB=dC.getVisibleRowCount()-1;
dz.setScrollY(dz.getScrollY()+dx*dB*dy);
this.moveFocusedCell(0,dx*dB);
break;
default:dA=false;
}}}
if(dD!=this.__qy&&this.getRowFocusChangeModifiesSelection()){this.__qY.handleMoveKeyDown(this.__qy,dw);
}
if(dA){dw.preventDefault();
dw.stopPropagation();
}},_onFocusChanged:function(dF){var dG=this._getPaneScrollerArr();

for(var i=0;i<dG.length;i++){dG[i].onFocusChanged();
}},_onColVisibilityChanged:function(dH){var dI=this._getPaneScrollerArr();

for(var i=0;i<dI.length;i++){dI[i].onColVisibilityChanged();
}var dJ=dH.getData();

if(this.__qW!=null&&dJ.col!=null&&dJ.visible!=null){this.__qW[dJ.col].setVisible(dJ.visible);
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},_onColWidthChanged:function(dK){var dL=this._getPaneScrollerArr();

for(var i=0;i<dL.length;i++){var dM=dK.getData();
dL[i].setColumnWidth(dM.col,dM.newWidth);
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},_onColOrderChanged:function(dN){var dO=this._getPaneScrollerArr();

for(var i=0;i<dO.length;i++){dO[i].onColOrderChanged();
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},getTablePaneScrollerAtPageX:function(dP){var dQ=this._getMetaColumnAtPageX(dP);
return (dQ!=-1)?this.getPaneScroller(dQ):null;
},setFocusedCell:function(dR,dS,dT){if(!this.isEditing()&&(dR!=this.__qx||dS!=this.__qy)){if(dR===null){dR=0;
}this.__qx=dR;
this.__qy=dS;
var dU=this._getPaneScrollerArr();

for(var i=0;i<dU.length;i++){dU[i].setFocusedCell(dR,dS);
}
if(dR!==null&&dT){this.scrollCellVisible(dR,dS);
}}},resetSelection:function(){this.getSelectionModel().resetSelection();
},resetCellFocus:function(){this.setFocusedCell(null,null,false);
},getFocusedColumn:function(){return this.__qx;
},getFocusedRow:function(){return this.__qy;
},highlightFocusedRow:function(dV){this.getDataRowRenderer().setHighlightFocusRow(dV);
},clearFocusedRowHighlight:function(dW){if(dW){var dY=dW.getRelatedTarget();

if(dY instanceof qx.ui.table.pane.Pane||dY instanceof qx.ui.table.pane.FocusIndicator){return;
}}this.resetCellFocus();
var dX=this._getPaneScrollerArr();

for(var i=0;i<dX.length;i++){dX[i].onFocusChanged();
}},moveFocusedCell:function(ea,eb){var ef=this.__qx;
var eg=this.__qy;
if(ef==null||eg==null){return;
}
if(ea!=0){var ee=this.getTableColumnModel();
var x=ee.getVisibleX(ef);
var ed=ee.getVisibleColumnCount();
x=qx.lang.Number.limit(x+ea,0,ed-1);
ef=ee.getVisibleColumnAtX(x);
}
if(eb!=0){var ec=this.getTableModel();
eg=qx.lang.Number.limit(eg+eb,0,ec.getRowCount()-1);
}this.setFocusedCell(ef,eg,true);
},scrollCellVisible:function(eh,ei){var ej=this.getContentElement().getDomElement();
if(!ej){this.addListenerOnce(bG,function(){this.scrollCellVisible(eh,ei);
},this);
}var ek=this.getTableColumnModel();
var x=ek.getVisibleX(eh);
var el=this._getMetaColumnAtColumnX(x);

if(el!=-1){this.getPaneScroller(el).scrollCellVisible(eh,ei);
}},isEditing:function(){if(this.__qx!=null){var x=this.getTableColumnModel().getVisibleX(this.__qx);
var em=this._getMetaColumnAtColumnX(x);
return this.getPaneScroller(em).isEditing();
}return false;
},startEditing:function(){if(this.__qx!=null){var x=this.getTableColumnModel().getVisibleX(this.__qx);
var eo=this._getMetaColumnAtColumnX(x);
var en=this.getPaneScroller(eo).startEditing();
return en;
}return false;
},stopEditing:function(){if(this.__qx!=null){var x=this.getTableColumnModel().getVisibleX(this.__qx);
var ep=this._getMetaColumnAtColumnX(x);
this.getPaneScroller(ep).stopEditing();
}},cancelEditing:function(){if(this.__qx!=null){var x=this.getTableColumnModel().getVisibleX(this.__qx);
var eq=this._getMetaColumnAtColumnX(x);
this.getPaneScroller(eq).cancelEditing();
}},updateContent:function(){var er=this._getPaneScrollerArr();

for(var i=0;i<er.length;i++){er[i].getTablePane().updateContent(true);
}},blockHeaderElements:function(){var es=this._getPaneScrollerArr();

for(var i=0;i<es.length;i++){es[i].getHeader().getBlocker().blockContent(20);
}this.getChildControl(o).getBlocker().blockContent(20);
},unblockHeaderElements:function(){var et=this._getPaneScrollerArr();

for(var i=0;i<et.length;i++){et[i].getHeader().getBlocker().unblockContent();
}this.getChildControl(o).getBlocker().unblockContent();
},_getMetaColumnAtPageX:function(eu){var ev=this._getPaneScrollerArr();

for(var i=0;i<ev.length;i++){var ew=ev[i].getContainerLocation();

if(eu>=ew.left&&eu<=ew.right){return i;
}}return -1;
},_getMetaColumnAtColumnX:function(ex){var ez=this.getMetaColumnCounts();
var eA=0;

for(var i=0;i<ez.length;i++){var ey=ez[i];
eA+=ey;

if(ey==-1||ex<eA){return i;
}}return -1;
},_updateStatusBar:function(){var eB=this.getTableModel();

if(this.getStatusBarVisible()){var eC=this.getSelectionModel().getSelectedCount();
var eE=eB.getRowCount();
var eD;

if(eE>=0){if(eC==0){eD=this.trn(K,D,eE,eE);
}else{eD=this.trn(C,br,eE,eC,eE);
}}
if(this.__rb){if(eD){eD+=this.__rb;
}else{eD=this.__rb;
}}
if(eD){this.getChildControl(k).setValue(eD);
}}},_updateScrollerWidths:function(){var eF=this._getPaneScrollerArr();

for(var i=0;i<eF.length;i++){var eH=(i==(eF.length-1));
var eI=eF[i].getTablePaneModel().getTotalWidth();
eF[i].setPaneWidth(eI);
var eG=eH?1:0;
eF[i].setLayoutProperties({flex:eG});
}},_updateScrollBarVisibility:function(){if(!this.getBounds()){return;
}var eM=qx.ui.table.pane.Scroller.HORIZONTAL_SCROLLBAR;
var eO=qx.ui.table.pane.Scroller.VERTICAL_SCROLLBAR;
var eJ=this._getPaneScrollerArr();
var eL=false;
var eN=false;

for(var i=0;i<eJ.length;i++){var eP=(i==(eJ.length-1));
var eK=eJ[i].getNeededScrollBars(eL,!eP);

if(eK&eM){eL=true;
}
if(eP&&(eK&eO)){eN=true;
}}for(var i=0;i<eJ.length;i++){var eP=(i==(eJ.length-1));
eJ[i].setHorizontalScrollBarVisible(eL);
if(eP){if(this.__re==null){this.__re=eJ[i].getVerticalScrollBarVisible();
this.__ir=qx.event.Timer.once(function(){this.__re=null;
this.__ir=null;
},this,0);
}}eJ[i].setVerticalScrollBarVisible(eP&&eN);
if(eP&&eN!=this.__re){this.fireDataEvent(bl,eN);
}}},_initColumnMenu:function(){var eS=this.getTableModel();
var eT=this.getTableColumnModel();
var eU=this.getChildControl(o);
eU.empty();
var eR=eU.getMenu();
var eV={table:this,menu:eR,columnButton:eU};
this.fireDataEvent(bz,eV);
this.__qW={};

for(var eW=0,l=eS.getColumnCount();eW<l;eW++){var eQ=eU.factory(bv,{text:eS.getColumnName(eW),column:eW,bVisible:eT.isColumnVisible(eW)});
qx.core.Assert.assertInterface(eQ,qx.ui.table.IColumnMenuItem);
eQ.addListener(u,this._createColumnVisibilityCheckBoxHandler(eW),this);
this.__qW[eW]=eQ;
}eV={table:this,menu:eR,columnButton:eU};
this.fireDataEvent(y,eV);
},_createColumnVisibilityCheckBoxHandler:function(eX){return function(eY){var fa=this.getTableColumnModel();
fa.setColumnVisible(eX,eY.getData());
};
},setColumnWidth:function(fb,fc){this.getTableColumnModel().setColumnWidth(fb,fc);
},_onResize:function(){this.fireEvent(z);
this._updateScrollerWidths();
this._updateScrollBarVisibility();
},addListener:function(fd,fe,self,ff){if(this.self(arguments).__ra[fd]){var fh=[fd];

for(var i=0,fg=this._getPaneScrollerArr();i<fg.length;i++){fh.push(fg[i].addListener.apply(fg[i],arguments));
}return fh.join(bE);
}else{return qx.ui.core.Widget.prototype.addListener.call(this,fd,fe,self,ff);
}},removeListener:function(fi,fj,self,fk){if(this.self(arguments).__ra[fi]){for(var i=0,fl=this._getPaneScrollerArr();i<fl.length;i++){fl[i].removeListener.apply(fl[i],arguments);
}}else{qx.ui.core.Widget.prototype.removeListener.call(this,fi,fj,self,fk);
}},removeListenerById:function(fm){var fq=fm.split(bE);
var fp=fq.shift();

if(this.self(arguments).__ra[fp]){var fo=true;

for(var i=0,fn=this._getPaneScrollerArr();i<fn.length;i++){fo=fn[i].removeListenerById.call(fn[i],fq[i])&&fo;
}return fo;
}else{return qx.ui.core.Widget.prototype.removeListenerById.call(this,fm);
}},destroy:function(){this.getChildControl(o).getMenu().destroy();
qx.ui.core.Widget.prototype.destroy.call(this);
}},destruct:function(){if(qx.core.Environment.get(bF)){qx.locale.Manager.getInstance().removeListener(d,this._onChangeLocale,this);
}var fs=this.getSelectionModel();

if(fs){fs.dispose();
}var fr=this.getDataRowRenderer();

if(fr){fr.dispose();
}this._cleanUpMetaColumns(0);
this.getTableColumnModel().dispose();
this._disposeObjects(bf,bn,bD,bD,bh,be);
this._disposeMap(Y);
}});
})();
(function(){var f="",e="Function",d="abstract",c="number",b="appear",a="qx.ui.table.celleditor.AbstractField";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.ui.table.ICellEditorFactory,type:d,properties:{validationFunction:{check:e,nullable:true,init:null}},members:{_createEditor:function(){throw new Error("Abstract method call!");
},createCellEditor:function(g){var h=this._createEditor();
h.originalValue=g.value;

if(g.value===null||g.value===undefined){g.value=f;
}h.setValue(f+g.value);
h.addListener(b,function(){h.selectAllText();
});
return h;
},getCellEditorValue:function(i){var k=i.getValue();
var j=this.getValidationFunction();

if(j){k=j(k,i.originalValue);
}
if(typeof i.originalValue==c){k=parseFloat(k);
}return k;
}}});
})();
(function(){var b="qx.ui.table.selection.Model",a="qx.ui.table.selection.Manager";
qx.Class.define(a,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
},properties:{selectionModel:{check:b}},members:{__rf:null,handleMouseDown:function(c,d){if(d.isLeftPressed()){var e=this.getSelectionModel();

if(!e.isSelectedIndex(c)){this._handleSelectEvent(c,d);
this.__rf=true;
}else{this.__rf=false;
}}else if(d.isRightPressed()&&d.getModifiers()==0){var e=this.getSelectionModel();

if(!e.isSelectedIndex(c)){e.setSelectionInterval(c,c);
}}},handleMouseUp:function(f,g){if(g.isLeftPressed()&&!this.__rf){this._handleSelectEvent(f,g);
}},handleClick:function(h,i){},handleSelectKeyDown:function(j,k){this._handleSelectEvent(j,k);
},handleMoveKeyDown:function(l,m){var o=this.getSelectionModel();

switch(m.getModifiers()){case 0:o.setSelectionInterval(l,l);
break;
case qx.event.type.Dom.SHIFT_MASK:var n=o.getAnchorSelectionIndex();

if(n==-1){o.setSelectionInterval(l,l);
}else{o.setSelectionInterval(n,l);
}break;
}},_handleSelectEvent:function(p,q){var t=this.getSelectionModel();
var r=t.getLeadSelectionIndex();
var s=t.getAnchorSelectionIndex();

if(q.isShiftPressed()){if(p!=r||t.isSelectionEmpty()){if(s==-1){s=p;
}
if(q.isCtrlOrCommandPressed()){t.addSelectionInterval(s,p);
}else{t.setSelectionInterval(s,p);
}}}else if(q.isCtrlOrCommandPressed()){if(t.isSelectedIndex(p)){t.removeSelectionInterval(p,p);
}else{t.addSelectionInterval(p,p);
}}else{t.setSelectionInterval(p,p);
}}}});
})();
(function(){var c="number",b="qx.ui.table.celleditor.TextField",a="table-editor-textfield";
qx.Class.define(b,{extend:qx.ui.table.celleditor.AbstractField,members:{getCellEditorValue:function(d){var f=d.getValue();
var e=this.getValidationFunction();

if(e){f=e(f,d.originalValue);
}
if(typeof d.originalValue==c){if(f!=null){f=parseFloat(f);
}}return f;
},_createEditor:function(){var g=new qx.ui.form.TextField();
g.setAppearance(a);
return g;
}}});
})();
(function(){var k="qx.event.type.Data",j="visibilityChanged",h="orderChanged",g="visibilityChangedPre",f="__rk",e="widthChanged",d="qx.ui.table.columnmodel.Basic",c="__rm",b="__rl",a="headerCellRendererChanged";
qx.Class.define(d,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__rg=[];
this.__rh=[];
},events:{"widthChanged":k,"visibilityChangedPre":k,"visibilityChanged":k,"orderChanged":k,"headerCellRendererChanged":k},statics:{DEFAULT_WIDTH:100,DEFAULT_HEADER_RENDERER:qx.ui.table.headerrenderer.Default,DEFAULT_DATA_RENDERER:qx.ui.table.cellrenderer.Default,DEFAULT_EDITOR_FACTORY:qx.ui.table.celleditor.TextField},members:{__qP:null,__ri:null,__rh:null,__rg:null,__rj:null,__rk:null,__rl:null,__rm:null,init:function(l,m){this.__rj=[];
var q=qx.ui.table.columnmodel.Basic.DEFAULT_WIDTH;
var r=this.__rk||(this.__rk=new qx.ui.table.columnmodel.Basic.DEFAULT_HEADER_RENDERER());
var o=this.__rl||(this.__rl=new qx.ui.table.columnmodel.Basic.DEFAULT_DATA_RENDERER());
var n=this.__rm||(this.__rm=new qx.ui.table.columnmodel.Basic.DEFAULT_EDITOR_FACTORY());
this.__rg=[];
this.__rh=[];
var t;
if(m){t=m.getInitiallyHiddenColumns();
}t=t||[];

for(var u=0;u<l;u++){this.__rj[u]={width:q,headerRenderer:r,dataRenderer:o,editorFactory:n};
this.__rg[u]=u;
this.__rh[u]=u;
}this.__ri=null;
this.__qP=true;

for(var s=0;s<t.length;s++){this.setColumnVisible(t[s],false);
}this.__qP=false;

for(u=0;u<l;u++){var p={col:u,visible:this.isColumnVisible(u)};
this.fireDataEvent(g,p);
this.fireDataEvent(j,p);
}},getVisibleColumns:function(){return this.__rh!=null?this.__rh:[];
},setColumnWidth:function(v,w,y){var A=this.__rj[v].width;

if(A!=w){this.__rj[v].width=w;
var z={col:v,newWidth:w,oldWidth:A,isMouseAction:y||false};
this.fireDataEvent(e,z);
}},getColumnWidth:function(B){return this.__rj[B].width;
},setHeaderCellRenderer:function(C,D){var E=this.__rj[C].headerRenderer;

if(E!==this.__rk){E.dispose();
}this.__rj[C].headerRenderer=D;
this.fireDataEvent(a,{col:C});
},getHeaderCellRenderer:function(F){return this.__rj[F].headerRenderer;
},setDataCellRenderer:function(G,H){this.__rj[G].dataRenderer=H;
var I=this.__rj[G].dataRenderer;

if(I!==this.__rl){return I;
}return null;
},getDataCellRenderer:function(J){return this.__rj[J].dataRenderer;
},setCellEditorFactory:function(K,L){var M=this.__rj[K].headerRenderer;

if(M!==this.__rm){M.dispose();
}this.__rj[K].editorFactory=L;
},getCellEditorFactory:function(N){return this.__rj[N].editorFactory;
},_getColToXPosMap:function(){if(this.__ri==null){this.__ri={};

for(var Q=0;Q<this.__rg.length;Q++){var P=this.__rg[Q];
this.__ri[P]={overX:Q};
}
for(var O=0;O<this.__rh.length;O++){var P=this.__rh[O];
this.__ri[P].visX=O;
}}return this.__ri;
},getVisibleColumnCount:function(){return this.__rh!=null?this.__rh.length:0;
},getVisibleColumnAtX:function(R){return this.__rh[R];
},getVisibleX:function(S){return this._getColToXPosMap()[S].visX;
},getOverallColumnCount:function(){return this.__rg.length;
},getOverallColumnAtX:function(T){return this.__rg[T];
},getOverallX:function(U){return this._getColToXPosMap()[U].overX;
},isColumnVisible:function(V){return (this._getColToXPosMap()[V].visX!=null);
},setColumnVisible:function(W,X){if(X!=this.isColumnVisible(W)){if(X){var be=this._getColToXPosMap();
var bb=be[W].overX;

if(bb==null){throw new Error("Showing column failed: "+W+". The column is not added to this TablePaneModel.");
}var bc;

for(var x=bb+1;x<this.__rg.length;x++){var bd=this.__rg[x];
var Y=be[bd].visX;

if(Y!=null){bc=Y;
break;
}}if(bc==null){bc=this.__rh.length;
}this.__rh.splice(bc,0,W);
}else{var ba=this.getVisibleX(W);
this.__rh.splice(ba,1);
}this.__ri=null;
if(!this.__qP){var bf={col:W,visible:X};
this.fireDataEvent(g,bf);
this.fireDataEvent(j,bf);
}}},moveColumn:function(bg,bh){this.__qP=true;
var bk=this.__rg[bg];
var bi=this.isColumnVisible(bk);

if(bi){this.setColumnVisible(bk,false);
}this.__rg.splice(bg,1);
this.__rg.splice(bh,0,bk);
this.__ri=null;

if(bi){this.setColumnVisible(bk,true);
}this.__qP=false;
var bj={col:bk,fromOverXPos:bg,toOverXPos:bh};
this.fireDataEvent(h,bj);
},setColumnsOrder:function(bl){if(bl.length==this.__rg.length){this.__qP=true;
var bo=new Array(bl.length);

for(var bm=0;bm<this.__rg.length;bm++){var bn=this.isColumnVisible(bm);
bo[bm]=bn;

if(bn){this.setColumnVisible(bm,false);
}}this.__rg=qx.lang.Array.clone(bl);
this.__ri=null;
for(var bm=0;bm<this.__rg.length;bm++){if(bo[bm]){this.setColumnVisible(bm,true);
}}this.__qP=false;
this.fireDataEvent(h);
}else{throw new Error("setColumnsOrder: Invalid number of column positions given, expected "+this.__rg.length+", got "+bl.length);
}}},destruct:function(){for(var i=0;i<this.__rj.length;i++){this.__rj[i].headerRenderer.dispose();
this.__rj[i].dataRenderer.dispose();
this.__rj[i].editorFactory.dispose();
}this.__rg=this.__rh=this.__rj=this.__ri=null;
this._disposeObjects(f,b,c);
}});
})();

});