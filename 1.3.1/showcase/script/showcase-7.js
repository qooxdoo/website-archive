qx.$$packageData['e550077c5785']={"locales":{},"resources":{"qx/icon/Tango/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/media-audio.png":[16,16,"png","qx"],"qx/icon/Tango/16/status/dialog-warning.png":[16,16,"png","qx"]},"translations":{"C":{},"de":{"%1 of %2 rows":"%1 von %2 Zeilen","%1 rows":"%1 Zeilen","Reset column widths":"Spaltenbreite zurücksetzen","one of one row":"Eine von einer Zeile","one row":"Eine Zeile"},"de_AT":{},"de_DE":{},"en":{},"en_GB":{},"en_US":{},"es":{"%1 of %2 rows":"%1 de %2 filas","%1 rows":"%1 filas","Reset column widths":"Reestablecer anchos de columnas","one of one row":"una de una fila","one row":"una fila"},"es_ES":{},"es_MX":{},"ro":{"%1 of %2 rows":"%1 din %2 rânduri","%1 rows":"%1 rânduri","Reset column widths":"Resetează lățimea coloanei","one of one row":"unul din un rând","one row":"un rând"}}};

qx.Part.$$notifyLoad("e550077c5785", function() {
(function(){var a="qx.ui.table.ICellRenderer";
qx.Interface.define(a,{members:{createDataCellHtml:function(b,c){return true;
}}});
})();
(function(){var j="",i="px;",h=".qooxdoo-table-cell {",g="qooxdoo-table-cell",f='" ',e="nowrap",d="default",c="qx.client",b="}",a="width:",H=".qooxdoo-table-cell-right { text-align:right } ",G="0px 6px",F='<div class="',E="0px",D="height:",C="1px solid ",B=".qooxdoo-table-cell-bold { font-weight:bold } ",A="String",z="} ",y='>',q="mshtml",r='</div>',o="ellipsis",p="content-box",m='left:',n="qx.ui.table.cellrenderer.Abstract",k='" style="',l="abstract",s="none",t="hidden",v="table-column-line",u='px;',x=".qooxdoo-table-cell-italic { font-style:italic} ",w="absolute";
qx.Class.define(n,{type:l,implement:qx.ui.table.ICellRenderer,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
var I=qx.ui.table.cellrenderer.Abstract;

if(!I.__nx){var K=qx.theme.manager.Color.getInstance();
I.__nx=this.self(arguments);
var J=h+
qx.bom.element.Style.compile({position:w,top:E,overflow:t,whiteSpace:e,borderRight:C+K.resolve(v),padding:G,cursor:d,textOverflow:o,userSelect:s})+z+H+x+B;

if(!qx.core.Variant.isSet(c,q)){J+=h+qx.bom.element.BoxSizing.compile(p)+b;
}I.__nx.stylesheet=qx.bom.Stylesheet.createElement(J);
}},properties:{defaultCellStyle:{init:null,check:A,nullable:true}},members:{_insetX:6+6+1,_insetY:0,_getCellClass:function(L){return g;
},_getCellStyle:function(M){return M.style||j;
},_getCellAttributes:function(N){return j;
},_getContentHtml:function(O){return O.value||j;
},_getCellSizeStyle:function(P,Q,R,S){var T=j;

if(qx.bom.client.Feature.CONTENT_BOX){P-=R;
Q-=S;
}T+=a+Math.max(P,0)+i;
T+=D+Math.max(Q,0)+i;
return T;
},createDataCellHtml:function(U,V){V.push(F,this._getCellClass(U),k,m,U.styleLeft,u,this._getCellSizeStyle(U.styleWidth,U.styleHeight,this._insetX,this._insetY),this._getCellStyle(U),f,this._getCellAttributes(U),y+this._getContentHtml(U),r);
}}});
})();
(function(){var b="qx.ui.table.IColumnMenuItem",a="qx.event.type.Data";
qx.Interface.define(b,{properties:{visible:{}},events:{changeVisible:a}});
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
(function(){var c="qx.event.type.Data",b="qx.event.type.Event",a="qx.ui.table.ITableModel";
qx.Interface.define(a,{events:{"dataChanged":c,"metaDataChanged":b,"sorted":c},members:{getRowCount:function(){},getRowData:function(d){},getColumnCount:function(){},getColumnId:function(e){},getColumnIndexById:function(f){},getColumnName:function(g){},isColumnEditable:function(h){},isColumnSortable:function(i){},sortByColumn:function(j,k){},getSortColumnIndex:function(){},isSortAscending:function(){},prefetchRows:function(l,m){},getValue:function(n,o){},getValueById:function(p,q){},setValue:function(r,s,t){},setValueById:function(u,v,w){}}});
})();
(function(){var a="qx.ui.table.IColumnMenuButton";
qx.Interface.define(a,{properties:{menu:{}},members:{factory:function(b,c){return true;
},empty:function(){return true;
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
}var o=qx.ui.table.cellrenderer.Default._numberFormat.format(p);
}else if(p instanceof Date){o=qx.util.format.DateFormat.getDateInstance().format(p);
}else{o=p;
}return o;
}}});
})();
(function(){var s="",r="==",q=">",p="between",o="<",n="regex",m="!between",l=">=",k="!=",j="<=",c="font-weight",h=";",f="text-align",b='g',a=":",e="qx.ui.table.cellrenderer.Conditional",d="color",g="font-style";
qx.Class.define(e,{extend:qx.ui.table.cellrenderer.Default,construct:function(t,u,v,w){qx.ui.table.cellrenderer.Default.call(this);
this.numericAllowed=[r,k,q,o,l,j];
this.betweenAllowed=[p,m];
this.conditions=[];
this.__xT=t||s;
this.__xU=u||s;
this.__xV=v||s;
this.__xW=w||s;
},members:{__xT:null,__xU:null,__xV:null,__xW:null,__xX:function(x,y){if(x[1]!=null){y[f]=x[1];
}
if(x[2]!=null){y[d]=x[2];
}
if(x[3]!=null){y[g]=x[3];
}
if(x[4]!=null){y[c]=x[4];
}},addNumericCondition:function(z,A,B,C,D,E,F){var G=null;

if(qx.lang.Array.contains(this.numericAllowed,z)){if(A!=null){G=[z,B,C,D,E,A,F];
}}
if(G!=null){this.conditions.push(G);
}else{throw new Error("Condition not recognized or value is null!");
}},addBetweenCondition:function(H,I,J,K,L,M,N,O){if(qx.lang.Array.contains(this.betweenAllowed,H)){if(I!=null&&J!=null){var P=[H,K,L,M,N,I,J,O];
}}
if(P!=null){this.conditions.push(P);
}else{throw new Error("Condition not recognized or value1/value2 is null!");
}},addRegex:function(Q,R,S,T,U,V){if(Q!=null){var W=[n,R,S,T,U,Q,V];
}
if(W!=null){this.conditions.push(W);
}else{throw new Error("regex cannot be null!");
}},_getCellStyle:function(X){if(!this.conditions.length){return X.style||s;
}var bd=X.table.getTableModel();
var i;
var bf;
var Y;
var bb={"text-align":this.__xT,"color":this.__xU,"font-style":this.__xV,"font-weight":this.__xW};

for(i in this.conditions){bf=false;

if(qx.lang.Array.contains(this.numericAllowed,this.conditions[i][0])){if(this.conditions[i][6]==null){Y=X.value;
}else{Y=bd.getValueById(this.conditions[i][6],X.row);
}
switch(this.conditions[i][0]){case r:if(Y==this.conditions[i][5]){bf=true;
}break;
case k:if(Y!=this.conditions[i][5]){bf=true;
}break;
case q:if(Y>this.conditions[i][5]){bf=true;
}break;
case o:if(Y<this.conditions[i][5]){bf=true;
}break;
case l:if(Y>=this.conditions[i][5]){bf=true;
}break;
case j:if(Y<=this.conditions[i][5]){bf=true;
}break;
}}else if(qx.lang.Array.contains(this.betweenAllowed,this.conditions[i][0])){if(this.conditions[i][7]==null){Y=X.value;
}else{Y=bd.getValueById(this.conditions[i][7],X.row);
}
switch(this.conditions[i][0]){case p:if(Y>=this.conditions[i][5]&&Y<=this.conditions[i][6]){bf=true;
}break;
case m:if(Y<this.conditions[i][5]&&Y>this.conditions[i][6]){bf=true;
}break;
}}else if(this.conditions[i][0]==n){if(this.conditions[i][6]==null){Y=X.value;
}else{Y=bd.getValueById(this.conditions[i][6],X.row);
}var ba=new RegExp(this.conditions[i][5],b);
bf=ba.test(Y);
}if(bf==true){this.__xX(this.conditions[i],bb);
}}var be=[];

for(var bc in bb){if(bb[bc]){be.push(bc,a,bb[bc],h);
}}return be.join(s);
}},destruct:function(){this.numericAllowed=this.betweenAllowed=this.conditions=null;
}});
})();
(function(){var a="qx.ui.table.ICellEditorFactory";
qx.Interface.define(a,{members:{createCellEditor:function(b){return true;
},getCellEditorValue:function(c){return true;
}}});
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
(function(){var c="",b="qx.ui.table.headerrenderer.Icon",a="String";
qx.Class.define(b,{extend:qx.ui.table.headerrenderer.Default,construct:function(d,e){qx.ui.table.headerrenderer.Default.call(this);

if(d==null){d=c;
}this.setIconUrl(d);

if(e){this.setToolTip(e);
}},properties:{iconUrl:{check:a,init:c}},members:{updateHeaderCell:function(f,g){qx.ui.table.headerrenderer.Default.prototype.updateHeaderCell.call(this,f,g);
g.setIcon(this.getIconUrl());
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
(function(){var l="",k="Year",h="loading ...",g="Title",f="Explicit",e="icon/16/mimetypes/media-audio.png",d="showcase.page.table.Content.saveResult",c="Chart Pos.",b="this",a="0",x="2*",w="1*",v="icon/16/apps/office-calendar.png",u="env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=",t="Artist",s="select * from music.track.popular",r="Popular Music Tracks",q=", ",p="http://query.yahooapis.com/v1/public/yql?q=",o="icon/16/status/dialog-warning.png",m="showcase.page.table.Content",n="&format=json&diagnostics=false&";
qx.Class.define(m,{extend:showcase.page.AbstractDesktopContent,construct:function(y){showcase.page.AbstractDesktopContent.call(this,y);
},statics:{saveResult:function(z){this._result=z;
}},members:{_addWindowContent:function(A){var F=[[0,h,h,0,false]];
var D=this._tableModel=new qx.ui.table.model.Simple();
D.setColumns([c,g,t,k,f]);
D.setData(F);
D.setColumnEditable(1,true);
D.setColumnEditable(2,true);
D.setColumnSortable(3,true);
var C={tableColumnModel:function(H){return new qx.ui.table.columnmodel.Resize(H);
}};
var G=new qx.ui.table.Table(D,C);
G.set({width:540,height:400,decorator:null,headerCellHeight:null});
G.getSelectionModel().setSelectionMode(qx.ui.table.selection.Model.MULTIPLE_INTERVAL_SELECTION);
var E=G.getTableColumnModel();
E.setDataCellRenderer(0,new qx.ui.table.cellrenderer.Number());
E.setDataCellRenderer(3,new qx.ui.table.cellrenderer.Number());
E.setDataCellRenderer(4,new qx.ui.table.cellrenderer.Boolean());
E.setHeaderCellRenderer(1,new qx.ui.table.headerrenderer.Icon(e,g));
E.setHeaderCellRenderer(3,new qx.ui.table.headerrenderer.Icon(v,k));
E.setHeaderCellRenderer(4,new qx.ui.table.headerrenderer.Icon(o,f));
var B=E.getBehavior();
B.set(1,{width:x,minWidth:60});
B.set(2,{width:w,minWidth:60});
B.setWidth(0,80);
B.setWidth(3,70);
B.setWidth(4,85);
A.setCaption(r);
A.setLayout(new qx.ui.layout.Grow());
A.add(G);
this._loadData(D);
},_loadData:function(I){var K=s;
var J=p+encodeURIComponent(K)+n+u+d;
var L=new qx.io.ScriptLoader();
L.load(J,function(){var O=showcase.page.table.Content._result;
var N=[];
var M=O.query.results.Track;

for(var i=0;i<M.length;i++){var Q=[];
Q.push(parseInt(M[i].ItemInfo.ChartPosition[b]));
Q.push(M[i].title||l);

if(M[i].Artist instanceof Array){var P=l;

for(var j=0;j<M[i].Artist.length;j++){if(j!=0){P+=q;
}P+=M[i].Artist[j].name;
}Q.push(P);
}else{Q.push(M[i].Artist.name||l);
}Q.push(parseInt(M[i].releaseYear));
Q.push(M[i].explicit!==a);
N.push(Q);
}I.setData(N);
});
}}});
})();
(function(){var g="Integer",f="Escape",d="keypress",c="Enter",b="excluded",a="qx.ui.table.pane.FocusIndicator";
qx.Class.define(a,{extend:qx.ui.container.Composite,construct:function(h){qx.ui.container.Composite.call(this);
this.__qR=h;
this.setKeepActive(true);
this.addListener(d,this._onKeyPress,this);
},properties:{visibility:{refine:true,init:b},row:{check:g,nullable:true},column:{check:g,nullable:true}},members:{__qR:null,_onKeyPress:function(e){var i=e.getKeyIdentifier();

if(i!==f&&i!==c){e.stopPropagation();
}},moveToCell:function(j,k){if(!this.__qR.getShowCellFocusIndicator()&&!this.__qR.getTable().getTableModel().isColumnEditable(j)){this.exclude();
return;
}else{this.show();
}
if(j==null){this.hide();
this.setRow(null);
this.setColumn(null);
}else{var l=this.__qR.getTablePaneModel().getX(j);

if(l==-1){this.hide();
this.setRow(null);
this.setColumn(null);
}else{var q=this.__qR.getTable();
var o=q.getTableColumnModel();
var p=this.__qR.getTablePaneModel();
var n=this.__qR.getTablePane().getFirstVisibleRow();
var m=q.getRowHeight();
this.setUserBounds(p.getColumnLeft(j)-2,(k-n)*m-2,o.getColumnWidth(j)+3,m+3);
this.show();
this.setRow(k);
this.setColumn(j);
}}}},destruct:function(){this.__qR=null;
}});
})();
(function(){var k="",j="Number",h='</div>',g='" ',f="paneUpdated",e='<div>',d="</div>",c="overflow: hidden;",b="qx.event.type.Data",a="paneReloadsData",E="div",D='style="',C="_applyMaxCacheLines",B="qx.ui.table.pane.Pane",A="width: 100%;",z="qx.event.type.Event",w="_applyVisibleRowCount",v='>',u="line-height: ",t="appear",r='class="',s="width:100%;",p="px;",q='<div ',n="'>",o="_applyFirstVisibleRow",l="<div style='",m=";position:relative;";
qx.Class.define(B,{extend:qx.ui.core.Widget,construct:function(F){qx.ui.core.Widget.call(this);
this.__pT=F;
this.__pU=0;
this.__pV=0;
this.__pW=[];
},events:{"paneReloadsData":b,"paneUpdated":z},properties:{firstVisibleRow:{check:j,init:0,apply:o},visibleRowCount:{check:j,init:0,apply:w},maxCacheLines:{check:j,init:1000,apply:C},allowShrinkX:{refine:true,init:false}},members:{__pV:null,__pU:null,__pT:null,__pX:null,__pY:null,__qa:null,__pW:null,__qb:0,_applyFirstVisibleRow:function(G,H){this.updateContent(false,G-H);
},_applyVisibleRowCount:function(I,J){this.updateContent(true);
},_getContentHint:function(){return {width:this.getPaneScroller().getTablePaneModel().getTotalWidth(),height:400};
},getPaneScroller:function(){return this.__pT;
},getTable:function(){return this.__pT.getTable();
},setFocusedCell:function(K,L,M){if(K!=this.__qa||L!=this.__pY){var N=this.__pY;
this.__qa=K;
this.__pY=L;
if(L!=N&&!M){if(N!==null){this.updateContent(false,null,N,true);
}
if(L!==null){this.updateContent(false,null,L,true);
}}}},onSelectionChanged:function(){this.updateContent(false,null,null,true);
},onFocusChanged:function(){this.updateContent(false,null,null,true);
},setColumnWidth:function(O,P){this.updateContent(true);
},onColOrderChanged:function(){this.updateContent(true);
},onPaneModelChanged:function(){this.updateContent(true);
},onTableModelDataChanged:function(Q,R,S,T){this.__qc();
var V=this.getFirstVisibleRow();
var U=this.getVisibleRowCount();

if(R==-1||R>=V&&Q<V+U){this.updateContent();
}},onTableModelMetaDataChanged:function(){this.updateContent(true);
},_applyMaxCacheLines:function(W,X){if(this.__qb>=W&&W!==-1){this.__qc();
}},__qc:function(){this.__pW=[];
this.__qb=0;
},__qd:function(Y,ba,bb){if(!ba&&!bb&&this.__pW[Y]){return this.__pW[Y];
}else{return null;
}},__qe:function(bc,bd,be,bf){var bg=this.getMaxCacheLines();

if(!be&&!bf&&!this.__pW[bc]&&bg>0){this._applyMaxCacheLines(bg);
this.__pW[bc]=bd;
this.__qb+=1;
}},updateContent:function(bh,bi,bj,bk){if(bh){this.__qc();
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
bs.focusedRow=(this.__pY==bv);
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
bz.push({col:bY,xPos:x,editable:bA.isColumnEditable(bY),focusedCol:this.__qa==bY,styleLeft:bC,styleWidth:bF});
bC+=bF;
}var bX=[];
var ca=false;

for(var bE=bw;bE<bw+bx;bE++){var bH=bG.isSelectedIndex(bE);
var bK=(this.__pY==bE);
var bP=this.__qd(bE,bH,bK);

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
this.__qe(bE,bQ,bH,bK);
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
}}if(!this.__pX){this.__pX=document.createElement(E);
}var ck=e;
ck+=this._getRowsHtml(ci+ce,Math.abs(cb));
ck+=h;
this.__pX.innerHTML=ck;
var cf=this.__pX.firstChild.childNodes;
if(cb>0){for(var i=cf.length-1;i>=0;i--){var ch=cf[0];
cl.appendChild(ch);
}}else{for(var i=cf.length-1;i>=0;i--){var ch=cf[cf.length-1];
cl.insertBefore(ch,cl.firstChild);
}}if(this.__pY!==null){this._updateRowStyles(this.__pY-cb);
this._updateRowStyles(this.__pY);
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
this.__pU=cw;
this.__pV=cq;
this.fireEvent(f);
}},destruct:function(){this.__pX=this.__pT=this.__pW=null;
}});
})();
(function(){var e="auto",d="string",c="number",b="*",a="qx.ui.core.ColumnData";
qx.Class.define(a,{extend:qx.ui.core.LayoutItem,construct:function(){qx.ui.core.LayoutItem.call(this);
this.setColumnWidth(e);
},members:{__og:null,renderLayout:function(f,top,g,h){this.__og=g;
},getComputedWidth:function(){return this.__og;
},getFlex:function(){return this.getLayoutProperties().flex||0;
},setColumnWidth:function(i,j){var j=j||0;
var k=null;

if(typeof i==c){this.setWidth(i);
}else if(typeof i==d){if(i==e){j=1;
}else{var l=i.match(/^[0-9]+(?:\.[0-9]+)?([%\*])$/);

if(l){if(l[1]==b){j=parseFloat(i);
}else{k=i;
}}}}this.setLayoutProperties({flex:j,width:k});
}},settings:{"qx.tableResizeDebug":false}});
})();
(function(){var b="qx.ui.table.columnmodel.resizebehavior.Abstract",a="abstract";
qx.Class.define(b,{type:a,extend:qx.core.Object,members:{_setNumColumns:function(c){throw new Error("_setNumColumns is abstract");
},onAppear:function(event,d){throw new Error("onAppear is abstract");
},onTableWidthChanged:function(event){throw new Error("onTableWidthChanged is abstract");
},onVerticalScrollBarChanged:function(event){throw new Error("onVerticalScrollBarChanged is abstract");
},onColumnWidthChanged:function(event){throw new Error("onColumnWidthChanged is abstract");
},onVisibilityChanged:function(event){throw new Error("onVisibilityChanged is abstract");
},_getAvailableWidth:function(){var f=this.getTableColumnModel();
var i=f.getTable();
var e=i._getPaneScrollerArr();

if(!e[0]||!e[0].getLayoutParent().getBounds()){return null;
}var h=e[0].getLayoutParent().getBounds().width;
var g=e[e.length-1];
h-=g.getPaneInsetRight();
return h;
}}});
})();
(function(){var j="Function",h="Boolean",g="minWidth",f="width",e="qx.ui.table.columnmodel.Resize",d="qx.ui.table.columnmodel.resizebehavior.Default",c="__oi",b="maxWidth",a="__oj";
qx.Class.define(d,{extend:qx.ui.table.columnmodel.resizebehavior.Abstract,construct:function(){qx.ui.table.columnmodel.resizebehavior.Abstract.call(this);
this.__oh=[];
this.__oi=new qx.ui.layout.HBox();
this.__oi.connectToWidget(this);
this.__oj=new qx.util.DeferredCall(this._computeColumnsFlexWidth,this);
},properties:{newResizeBehaviorColumnData:{check:j,init:function(k){return new qx.ui.core.ColumnData();
}},initializeWidthsOnEveryAppear:{check:h,init:false},tableColumnModel:{check:e}},members:{__oi:null,__ok:null,__oh:null,__oj:null,__ol:false,setWidth:function(m,n,o){if(m>=this.__oh.length){throw new Error("Column number out of range");
}this.__oh[m].setColumnWidth(n,o);
this.__oj.schedule();
},setMinWidth:function(p,q){if(p>=this.__oh.length){throw new Error("Column number out of range");
}this.__oh[p].setMinWidth(q);
this.__oj.schedule();
},setMaxWidth:function(r,s){if(r>=this.__oh.length){throw new Error("Column number out of range");
}this.__oh[r].setMaxWidth(s);
this.__oj.schedule();
},set:function(t,u){for(var v in u){switch(v){case f:this.setWidth(t,u[v]);
break;
case g:this.setMinWidth(t,u[v]);
break;
case b:this.setMaxWidth(t,u[v]);
break;
default:throw new Error("Unknown property: "+v);
}}},onAppear:function(event,w){if(w===true||!this.__ol||this.getInitializeWidthsOnEveryAppear()){this._computeColumnsFlexWidth();
this.__ol=true;
}},onTableWidthChanged:function(event){this._computeColumnsFlexWidth();
},onVerticalScrollBarChanged:function(event){this._computeColumnsFlexWidth();
},onColumnWidthChanged:function(event){this._extendNextColumn(event);
},onVisibilityChanged:function(event){var x=event.getData();
if(x.visible){this._computeColumnsFlexWidth();
return;
}this._extendLastColumn(event);
},_setNumColumns:function(y){var z=this.__oh;
if(y<=z.length){z.splice(y,z.length);
return;
}for(var i=z.length;i<y;i++){z[i]=this.getNewResizeBehaviorColumnData()();
z[i].columnNumber=i;
}},getLayoutChildren:function(){return this.__ok;
},_computeColumnsFlexWidth:function(){this.__oj.cancel();
var E=this._getAvailableWidth();

if(E===null){return;
}var A=this.getTableColumnModel();
var C=A.getVisibleColumns();
var D=C.length;
var B=this.__oh;
var i,l;

if(D===0){return;
}var G=[];

for(i=0;i<D;i++){G.push(B[C[i]]);
}this.__ok=G;
this.__om();
this.__oi.renderLayout(E,100);
for(i=0,l=G.length;i<l;i++){var F=G[i].getComputedWidth();
A.setColumnWidth(C[i],F);
}},__om:function(){this.__oi.invalidateChildrenCache();
var H=this.__ok;

for(var i=0,l=H.length;i<l;i++){H[i].invalidateLayoutCache();
}},_extendNextColumn:function(event){var M=this.getTableColumnModel();
var P=event.getData();
var K=M.getVisibleColumns();
var J=this._getAvailableWidth();
var I=K.length;
if(P.newWidth>P.oldWidth){return ;
}var i;
var L;
var O=0;

for(i=0;i<I;i++){O+=M.getColumnWidth(K[i]);
}if(O<J){for(i=0;i<K.length;i++){if(K[i]==P.col){L=K[i+1];
break;
}}
if(L){var N=(J-(O-M.getColumnWidth(L)));
M.setColumnWidth(L,N);
}}},_extendLastColumn:function(event){var T=this.getTableColumnModel();
var X=event.getData();
if(X.visible){return;
}var S=T.getVisibleColumns();
if(S.length==0){return;
}var R=this._getAvailableWidth(T);
var Q=S.length;
var i;
var V;
var W=0;

for(i=0;i<Q;i++){W+=T.getColumnWidth(S[i]);
}if(W<R){V=S[S.length-1];
var U=(R-(W-T.getColumnWidth(V)));
T.setColumnWidth(V,U);
}},_getResizeColumnData:function(){return this.__oh;
}},destruct:function(){this.__oh=this.__ok=null;
this._disposeObjects(c,a);
}});
})();
(function(){var k="qx.event.type.Data",j="visibilityChanged",h="orderChanged",g="visibilityChangedPre",f="widthChanged",e="qx.ui.table.columnmodel.Basic",d="__nD",c="__nF",b="headerCellRendererChanged",a="__nE";
qx.Class.define(e,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__ny=[];
this.__nz=[];
},events:{"widthChanged":k,"visibilityChangedPre":k,"visibilityChanged":k,"orderChanged":k,"headerCellRendererChanged":k},statics:{DEFAULT_WIDTH:100,DEFAULT_HEADER_RENDERER:qx.ui.table.headerrenderer.Default,DEFAULT_DATA_RENDERER:qx.ui.table.cellrenderer.Default,DEFAULT_EDITOR_FACTORY:qx.ui.table.celleditor.TextField},members:{__nA:null,__nB:null,__nz:null,__ny:null,__nC:null,__nD:null,__nE:null,__nF:null,init:function(l,m){{};
this.__nC=[];
var q=qx.ui.table.columnmodel.Basic.DEFAULT_WIDTH;
var r=this.__nD||(this.__nD=new qx.ui.table.columnmodel.Basic.DEFAULT_HEADER_RENDERER());
var o=this.__nE||(this.__nE=new qx.ui.table.columnmodel.Basic.DEFAULT_DATA_RENDERER());
var n=this.__nF||(this.__nF=new qx.ui.table.columnmodel.Basic.DEFAULT_EDITOR_FACTORY());
this.__ny=[];
this.__nz=[];
var t;
if(m){t=m.getInitiallyHiddenColumns();
}t=t||[];

for(var u=0;u<l;u++){this.__nC[u]={width:q,headerRenderer:r,dataRenderer:o,editorFactory:n};
this.__ny[u]=u;
this.__nz[u]=u;
}this.__nB=null;
this.__nA=true;

for(var s=0;s<t.length;s++){this.setColumnVisible(t[s],false);
}this.__nA=false;

for(u=0;u<l;u++){var p={col:u,visible:this.isColumnVisible(u)};
this.fireDataEvent(g,p);
this.fireDataEvent(j,p);
}},getVisibleColumns:function(){return this.__nz!=null?this.__nz:[];
},setColumnWidth:function(v,w,y){{};
var A=this.__nC[v].width;

if(A!=w){this.__nC[v].width=w;
var z={col:v,newWidth:w,oldWidth:A,isMouseAction:y||false};
this.fireDataEvent(f,z);
}},getColumnWidth:function(B){{};
return this.__nC[B].width;
},setHeaderCellRenderer:function(C,D){{};
var E=this.__nC[C].headerRenderer;

if(E!==this.__nD){E.dispose();
}this.__nC[C].headerRenderer=D;
this.fireDataEvent(b,{col:C});
},getHeaderCellRenderer:function(F){{};
return this.__nC[F].headerRenderer;
},setDataCellRenderer:function(G,H){{};
this.__nC[G].dataRenderer=H;
var I=this.__nC[G].dataRenderer;

if(I!==this.__nE){return I;
}return null;
},getDataCellRenderer:function(J){{};
return this.__nC[J].dataRenderer;
},setCellEditorFactory:function(K,L){{};
var M=this.__nC[K].headerRenderer;

if(M!==this.__nF){M.dispose();
}this.__nC[K].editorFactory=L;
},getCellEditorFactory:function(N){{};
return this.__nC[N].editorFactory;
},_getColToXPosMap:function(){if(this.__nB==null){this.__nB={};

for(var Q=0;Q<this.__ny.length;Q++){var P=this.__ny[Q];
this.__nB[P]={overX:Q};
}
for(var O=0;O<this.__nz.length;O++){var P=this.__nz[O];
this.__nB[P].visX=O;
}}return this.__nB;
},getVisibleColumnCount:function(){return this.__nz!=null?this.__nz.length:0;
},getVisibleColumnAtX:function(R){{};
return this.__nz[R];
},getVisibleX:function(S){{};
return this._getColToXPosMap()[S].visX;
},getOverallColumnCount:function(){return this.__ny.length;
},getOverallColumnAtX:function(T){{};
return this.__ny[T];
},getOverallX:function(U){{};
return this._getColToXPosMap()[U].overX;
},isColumnVisible:function(V){{};
return (this._getColToXPosMap()[V].visX!=null);
},setColumnVisible:function(W,X){{};

if(X!=this.isColumnVisible(W)){if(X){var be=this._getColToXPosMap();
var bb=be[W].overX;

if(bb==null){throw new Error("Showing column failed: "+W+". The column is not added to this TablePaneModel.");
}var bc;

for(var x=bb+1;x<this.__ny.length;x++){var bd=this.__ny[x];
var Y=be[bd].visX;

if(Y!=null){bc=Y;
break;
}}if(bc==null){bc=this.__nz.length;
}this.__nz.splice(bc,0,W);
}else{var ba=this.getVisibleX(W);
this.__nz.splice(ba,1);
}this.__nB=null;
if(!this.__nA){var bf={col:W,visible:X};
this.fireDataEvent(g,bf);
this.fireDataEvent(j,bf);
}}},moveColumn:function(bg,bh){{};
this.__nA=true;
var bk=this.__ny[bg];
var bi=this.isColumnVisible(bk);

if(bi){this.setColumnVisible(bk,false);
}this.__ny.splice(bg,1);
this.__ny.splice(bh,0,bk);
this.__nB=null;

if(bi){this.setColumnVisible(bk,true);
}this.__nA=false;
var bj={col:bk,fromOverXPos:bg,toOverXPos:bh};
this.fireDataEvent(h,bj);
},setColumnsOrder:function(bl){{};

if(bl.length==this.__ny.length){this.__nA=true;
var bo=new Array(bl.length);

for(var bm=0;bm<this.__ny.length;bm++){var bn=this.isColumnVisible(bm);
bo[bm]=bn;

if(bn){this.setColumnVisible(bm,false);
}}this.__ny=qx.lang.Array.clone(bl);
this.__nB=null;
for(var bm=0;bm<this.__ny.length;bm++){if(bo[bm]){this.setColumnVisible(bm,true);
}}this.__nA=false;
this.fireDataEvent(h);
}else{throw new Error("setColumnsOrder: Invalid number of column positions given, expected "+this.__ny.length+", got "+bl.length);
}}},destruct:function(){for(var i=0;i<this.__nC.length;i++){this.__nC[i].headerRenderer.dispose();
this.__nC[i].dataRenderer.dispose();
this.__nC[i].editorFactory.dispose();
}this.__ny=this.__nz=this.__nC=this.__nB=null;
this._disposeObjects(d,a,c);
}});
})();
(function(){var b="qx.ui.table.selection.Model",a="qx.ui.table.selection.Manager";
qx.Class.define(a,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
},properties:{selectionModel:{check:b}},members:{__pO:null,handleMouseDown:function(c,d){if(d.isLeftPressed()){var e=this.getSelectionModel();

if(!e.isSelectedIndex(c)){this._handleSelectEvent(c,d);
this.__pO=true;
}else{this.__pO=false;
}}else if(d.isRightPressed()&&d.getModifiers()==0){var e=this.getSelectionModel();

if(!e.isSelectedIndex(c)){e.setSelectionInterval(c,c);
}}},handleMouseUp:function(f,g){if(g.isLeftPressed()&&!this.__pO){this._handleSelectEvent(f,g);
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
(function(){var a="qx.ui.table.pane.Clipper";
qx.Class.define(a,{extend:qx.ui.container.Composite,construct:function(){qx.ui.container.Composite.call(this,new qx.ui.layout.Grow());
this.setMinWidth(0);
},members:{scrollToX:function(b){this.getContentElement().scrollToX(b,false);
},scrollToY:function(c){this.getContentElement().scrollToY(c,true);
}}});
})();
(function(){var l="]",k="..",h="changeSelection",g="_applySelectionMode",f='ie',d="qx.event.type.Event",c="Ranges:",b="qx.ui.table.selection.Model",a=" [";
qx.Class.define(b,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__pP=[];
this.__pQ=-1;
this.__pR=-1;
this.hasBatchModeRefCount=0;
this.__pS=false;
},events:{"changeSelection":d},statics:{NO_SELECTION:1,SINGLE_SELECTION:2,SINGLE_INTERVAL_SELECTION:3,MULTIPLE_INTERVAL_SELECTION:4,MULTIPLE_INTERVAL_SELECTION_TOGGLE:5},properties:{selectionMode:{init:2,check:[1,2,3,4,5],apply:g}},members:{__pS:null,__pQ:null,__pR:null,__pP:null,_applySelectionMode:function(m){this.resetSelection();
},setBatchMode:function(n){if(n){this.hasBatchModeRefCount+=1;
}else{if(this.hasBatchModeRefCount==0){throw new Error("Try to turn off batch mode althoug it was not turned on.");
}this.hasBatchModeRefCount-=1;

if(this.__pS){this.__pS=false;
this._fireChangeSelection();
}}return this.hasBatchMode();
},hasBatchMode:function(){return this.hasBatchModeRefCount>0;
},getAnchorSelectionIndex:function(){return this.__pQ;
},_setAnchorSelectionIndex:function(o){this.__pQ=o;
},getLeadSelectionIndex:function(){return this.__pR;
},_setLeadSelectionIndex:function(p){this.__pR=p;
},_getSelectedRangeArr:function(){return this.__pP;
},resetSelection:function(){if(!this.isSelectionEmpty()){this._resetSelection();
this._fireChangeSelection();
}},isSelectionEmpty:function(){return this.__pP.length==0;
},getSelectedCount:function(){var r=0;

for(var i=0;i<this.__pP.length;i++){var q=this.__pP[i];
r+=q.maxIndex-q.minIndex+1;
}return r;
},isSelectedIndex:function(s){for(var i=0;i<this.__pP.length;i++){var t=this.__pP[i];

if(s>=t.minIndex&&s<=t.maxIndex){return true;
}}return false;
},getSelectedRanges:function(){var u=[];

for(var i=0;i<this.__pP.length;i++){u.push({minIndex:this.__pP[i].minIndex,maxIndex:this.__pP[i].maxIndex});
}return u;
},iterateSelection:function(v,w){for(var i=0;i<this.__pP.length;i++){for(var j=this.__pP[i].minIndex;j<=this.__pP[i].maxIndex;j++){v.call(w,j);
}}},setSelectionInterval:function(x,y){var z=this.self(arguments);

switch(this.getSelectionMode()){case z.NO_SELECTION:return;
case z.SINGLE_SELECTION:if(this.isSelectedIndex(y)){return;
}x=y;
break;
case z.MULTIPLE_INTERVAL_SELECTION_TOGGLE:this.setBatchMode(true);

try{for(var i=x;i<=y;i++){if(!this.isSelectedIndex(i)){this._addSelectionInterval(i,i);
}else{this.removeSelectionInterval(i,i);
}}}catch(e){if(qx.bom.client.Browser.NAME==f&&qx.bom.client.Browser.VERSION<=7){this.setBatchMode(false);
}throw e;
}finally{this.setBatchMode(false);
}this._fireChangeSelection();
return;
}this._resetSelection();
this._addSelectionInterval(x,y);
this._fireChangeSelection();
},addSelectionInterval:function(A,B){var C=qx.ui.table.selection.Model;

switch(this.getSelectionMode()){case C.NO_SELECTION:return;
case C.MULTIPLE_INTERVAL_SELECTION:case C.MULTIPLE_INTERVAL_SELECTION_TOGGLE:this._addSelectionInterval(A,B);
this._fireChangeSelection();
break;
default:this.setSelectionInterval(A,B);
break;
}},removeSelectionInterval:function(D,E){this.__pQ=D;
this.__pR=E;
var F=Math.min(D,E);
var H=Math.max(D,E);
for(var i=0;i<this.__pP.length;i++){var J=this.__pP[i];

if(J.minIndex>H){break;
}else if(J.maxIndex>=F){var K=(J.minIndex>=F)&&(J.minIndex<=H);
var I=(J.maxIndex>=F)&&(J.maxIndex<=H);

if(K&&I){this.__pP.splice(i,1);
i--;
}else if(K){J.minIndex=H+1;
}else if(I){J.maxIndex=F-1;
}else{var G={minIndex:H+1,maxIndex:J.maxIndex};
this.__pP.splice(i+1,0,G);
J.maxIndex=F-1;
break;
}}}this._fireChangeSelection();
},_resetSelection:function(){this.__pP=[];
this.__pQ=-1;
this.__pR=-1;
},_addSelectionInterval:function(L,M){this.__pQ=L;
this.__pR=M;
var N=Math.min(L,M);
var P=Math.max(L,M);
var O=0;

for(;O<this.__pP.length;O++){var Q=this.__pP[O];

if(Q.minIndex>N){break;
}}this.__pP.splice(O,0,{minIndex:N,maxIndex:P});
var R=this.__pP[0];

for(var i=1;i<this.__pP.length;i++){var Q=this.__pP[i];

if(R.maxIndex+1>=Q.minIndex){R.maxIndex=Math.max(R.maxIndex,Q.maxIndex);
this.__pP.splice(i,1);
i--;
}else{R=Q;
}}},_dumpRanges:function(){var S=c;

for(var i=0;i<this.__pP.length;i++){var T=this.__pP[i];
S+=a+T.minIndex+k+T.maxIndex+l;
}this.debug(S);
},_fireChangeSelection:function(){if(this.hasBatchMode()){this.__pS=true;
}else{this.fireEvent(h);
}}},destruct:function(){this.__pP=null;
}});
})();
(function(){var n="appear",m="columnVisibilityMenuCreateEnd",l="tableWidthChanged",k="verticalScrollBarChanged",j="qx.ui.table.columnmodel.resizebehavior.Abstract",i="qx.ui.table.columnmodel.Resize",h="_applyBehavior",g="separator",f="visibilityChanged",e="Reset column widths",b="changeBehavior",d="user-button",c="widthChanged",a="execute";
qx.Class.define(i,{extend:qx.ui.table.columnmodel.Basic,include:qx.locale.MTranslation,construct:function(){qx.ui.table.columnmodel.Basic.call(this);
this.__nG=false;
this.__nH=false;
},properties:{behavior:{check:j,init:null,nullable:true,apply:h,event:b}},members:{__nH:null,__nG:null,__nI:null,_applyBehavior:function(p,q){if(q!=null){q.dispose();
q=null;
}p._setNumColumns(this.getOverallColumnCount());
p.setTableColumnModel(this);
},init:function(r,s){qx.ui.table.columnmodel.Basic.prototype.init.call(this,r,s);

if(this.__nI==null){this.__nI=s;
s.addListener(n,this._onappear,this);
s.addListener(l,this._onTableWidthChanged,this);
s.addListener(k,this._onverticalscrollbarchanged,this);
s.addListener(m,this._addResetColumnWidthButton,this);
this.addListener(c,this._oncolumnwidthchanged,this);
this.addListener(f,this._onvisibilitychanged,this);
}if(this.getBehavior()==null){this.setBehavior(new qx.ui.table.columnmodel.resizebehavior.Default());
}this.getBehavior()._setNumColumns(r);
},getTable:function(){return this.__nI;
},_addResetColumnWidthButton:function(event){var v=event.getData();
var u=v.columnButton;
var t=v.menu;
var o;
o=u.factory(g);
t.add(o);
o=u.factory(d,{text:this.tr(e)});
t.add(o);
o.addListener(a,this._onappear,this);
},_onappear:function(event){if(this.__nG){return ;
}this.__nG=true;
{};
this.getBehavior().onAppear(event,event.getType()!==n);
this.__nI._updateScrollerWidths();
this.__nI._updateScrollBarVisibility();
this.__nG=false;
this.__nH=true;
},_onTableWidthChanged:function(event){if(this.__nG||!this.__nH){return ;
}this.__nG=true;
{};
this.getBehavior().onTableWidthChanged(event);
this.__nG=false;
},_onverticalscrollbarchanged:function(event){if(this.__nG||!this.__nH){return ;
}this.__nG=true;
{};
this.getBehavior().onVerticalScrollBarChanged(event);
qx.event.Timer.once(function(){if(this.__nI&&!this.__nI.isDisposed()){this.__nI._updateScrollerWidths();
this.__nI._updateScrollBarVisibility();
}},this,0);
this.__nG=false;
},_oncolumnwidthchanged:function(event){if(this.__nG||!this.__nH){return ;
}this.__nG=true;
{};
this.getBehavior().onColumnWidthChanged(event);
this.__nG=false;
},_onvisibilitychanged:function(event){if(this.__nG||!this.__nH){return ;
}this.__nG=true;
{};
this.getBehavior().onVisibilityChanged(event);
this.__nG=false;
}},destruct:function(){this.__nI=null;
}});
})();
(function(){var e="metaDataChanged",d="qx.event.type.Data",c="qx.event.type.Event",b="abstract",a="qx.ui.table.model.Abstract";
qx.Class.define(a,{type:b,extend:qx.core.Object,implement:qx.ui.table.ITableModel,events:{"dataChanged":d,"metaDataChanged":c,"sorted":d},construct:function(){qx.core.Object.call(this);
this.__nn=[];
this.__no=[];
this.__np={};
},members:{__nn:null,__no:null,__np:null,__nq:null,init:function(f){},getRowCount:function(){throw new Error("getRowCount is abstract");
},getRowData:function(g){return null;
},isColumnEditable:function(h){return false;
},isColumnSortable:function(j){return false;
},sortByColumn:function(k,l){},getSortColumnIndex:function(){return -1;
},isSortAscending:function(){return true;
},prefetchRows:function(m,n){},getValue:function(o,p){throw new Error("getValue is abstract");
},getValueById:function(q,r){return this.getValue(this.getColumnIndexById(q),r);
},setValue:function(s,t,u){throw new Error("setValue is abstract");
},setValueById:function(v,w,x){this.setValue(this.getColumnIndexById(v),w,x);
},getColumnCount:function(){return this.__nn.length;
},getColumnIndexById:function(y){return this.__np[y];
},getColumnId:function(z){return this.__nn[z];
},getColumnName:function(A){return this.__no[A];
},setColumnIds:function(B){this.__nn=B;
this.__np={};

for(var i=0;i<B.length;i++){this.__np[B[i]]=i;
}this.__no=new Array(B.length);
if(!this.__nq){this.fireEvent(e);
}},setColumnNamesByIndex:function(C){if(this.__nn.length!=C.length){throw new Error("this.__columnIdArr and columnNameArr have different length: "+this.__nn.length+" != "+C.length);
}this.__no=C;
this.fireEvent(e);
},setColumnNamesById:function(D){this.__no=new Array(this.__nn.length);

for(var i=0;i<this.__nn.length;++i){this.__no[i]=D[this.__nn[i]];
}},setColumns:function(E,F){var G=this.__nn.length==0||F;

if(F==null){if(this.__nn.length==0){F=E;
}else{F=this.__nn;
}}
if(F.length!=E.length){throw new Error("columnIdArr and columnNameArr have different length: "+F.length+" != "+E.length);
}
if(G){this.__nq=true;
this.setColumnIds(F);
this.__nq=false;
}this.setColumnNamesByIndex(E);
}},destruct:function(){this.__nn=this.__no=this.__np=null;
}});
})();
(function(){var e="dataChanged",d="metaDataChanged",c="qx.ui.table.model.Simple",b="Boolean",a="sorted";
qx.Class.define(c,{extend:qx.ui.table.model.Abstract,construct:function(){qx.ui.table.model.Abstract.call(this);
this.__nr=[];
this.__ns=-1;
this.__nt=[];
this.__nu=null;
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
}},members:{__nr:null,__nu:null,__nv:null,__nt:null,__ns:null,__nw:null,getRowData:function(B){var C=this.__nr[B];

if(C==null||C.originalData==null){return C;
}else{return C.originalData;
}},getRowDataAsMap:function(D){var F=this.__nr[D];

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
},setEditable:function(K){this.__nu=[];

for(var L=0;L<this.getColumnCount();L++){this.__nu[L]=K;
}this.fireEvent(d);
},setColumnEditable:function(M,N){if(N!=this.isColumnEditable(M)){if(this.__nu==null){this.__nu=[];
}this.__nu[M]=N;
this.fireEvent(d);
}},isColumnEditable:function(O){return this.__nu?(this.__nu[O]==true):false;
},setColumnSortable:function(P,Q){if(Q!=this.isColumnSortable(P)){if(this.__nv==null){this.__nv=[];
}this.__nv[P]=Q;
this.fireEvent(d);
}},isColumnSortable:function(R){return (this.__nv?(this.__nv[R]!==false):true);
},sortByColumn:function(S,T){var W;
var V=this.__nt[S];

if(V){W=(T?V.ascending:V.descending);
}else{if(this.getCaseSensitiveSorting()){W=(T?qx.ui.table.model.Simple._defaultSortComparatorAscending:qx.ui.table.model.Simple._defaultSortComparatorDescending);
}else{W=(T?qx.ui.table.model.Simple._defaultSortComparatorInsensitiveAscending:qx.ui.table.model.Simple._defaultSortComparatorInsensitiveDescending);
}}W.columnIndex=S;
this.__nr.sort(W);
this.__ns=S;
this.__nw=T;
var U={columnIndex:S,ascending:T};
this.fireDataEvent(a,U);
this.fireEvent(d);
},setSortMethods:function(X,Y){var ba;

if(qx.lang.Type.isFunction(Y)){ba={ascending:Y,descending:function(bb,bc){return Y(bc,bb);
}};
}else{ba=Y;
}this.__nt[X]=ba;
},getSortMethods:function(bd){return this.__nt[bd];
},clearSorting:function(){if(this.__ns!=-1){this.__ns=-1;
this.__nw=true;
this.fireEvent(d);
}},getSortColumnIndex:function(){return this.__ns;
},_setSortColumnIndex:function(be){this.__ns=be;
},isSortAscending:function(){return this.__nw;
},_setSortAscending:function(bf){this.__nw=bf;
},getRowCount:function(){return this.__nr.length;
},getValue:function(bg,bh){if(bh<0||bh>=this.__nr.length){throw new Error("this.__rowArr out of bounds: "+bh+" (0.."+this.__nr.length+")");
}return this.__nr[bh][bg];
},setValue:function(bi,bj,bk){if(this.__nr[bj][bi]!=bk){this.__nr[bj][bi]=bk;
if(this.hasListener(e)){var bl={firstRow:bj,lastRow:bj,firstColumn:bi,lastColumn:bi};
this.fireDataEvent(e,bl);
}
if(bi==this.__ns){this.clearSorting();
}}},setData:function(bm,bn){this.__nr=bm;
if(this.hasListener(e)){var bo={firstRow:0,lastRow:bm.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(e,bo);
}
if(bn!==false){this.clearSorting();
}},getData:function(){return this.__nr;
},setDataAsMapArray:function(bp,bq,br){this.setData(this._mapArray2RowArr(bp,bq),br);
},addRows:function(bs,bt,bu){if(bt==null){bt=this.__nr.length;
}bs.splice(0,0,bt,0);
Array.prototype.splice.apply(this.__nr,bs);
var bv={firstRow:bt,lastRow:this.__nr.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(e,bv);

if(bu!==false){this.clearSorting();
}},addRowsAsMapArray:function(bw,bx,by,bz){this.addRows(this._mapArray2RowArr(bw,by),bx,bz);
},setRows:function(bA,bB,bC){if(bB==null){bB=0;
}bA.splice(0,0,bB,bA.length);
Array.prototype.splice.apply(this.__nr,bA);
var bD={firstRow:bB,lastRow:this.__nr.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(e,bD);

if(bC!==false){this.clearSorting();
}},setRowsAsMapArray:function(bE,bF,bG,bH){this.setRows(this._mapArray2RowArr(bE,bG),bF,bH);
},removeRows:function(bI,bJ,bK){this.__nr.splice(bI,bJ);
var bL={firstRow:bI,lastRow:this.__nr.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1,removeStart:bI,removeCount:bJ};
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
}},destruct:function(){this.__nr=this.__nu=this.__nt=this.__nv=null;
}});
})();
(function(){var a="qx.ui.table.IRowRenderer";
qx.Interface.define(a,{members:{updateDataRowElement:function(b,c){},getRowHeightStyle:function(d){},createRowStyle:function(e){},getRowClass:function(f){}}});
})();
(function(){var f="menu-button",e="table-column-reset-button",d="separator",c="user-button",b="qx.ui.table.columnmenu.Button",a="menu";
qx.Class.define(b,{extend:qx.ui.form.MenuButton,implement:qx.ui.table.IColumnMenuButton,construct:function(){qx.ui.form.MenuButton.call(this);
this.__oD=new qx.ui.core.Blocker(this);
},members:{__oE:null,__oD:null,factory:function(g,h){switch(g){case a:var j=new qx.ui.menu.Menu();
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
}},getBlocker:function(){return this.__oD;
},empty:function(){var n=this.getMenu();
var o=n.getChildren();

for(var i=0,l=o.length;i<l;i++){o[0].destroy();
}}},destruct:function(){this.__oD.dispose();
}});
})();
(function(){var e="",d="qooxdoo-table-cell qooxdoo-table-cell-right",c="0",b="qx.util.format.NumberFormat",a="qx.ui.table.cellrenderer.Number";
qx.Class.define(a,{extend:qx.ui.table.cellrenderer.Conditional,properties:{numberFormat:{check:b,init:null,nullable:true}},members:{_getContentHtml:function(f){var g=this.getNumberFormat();

if(g){if(f.value||f.value==0){return g.format(f.value);
}else{return e;
}}else{return f.value==0?c:(f.value||e);
}},_getCellClass:function(h){return d;
}}});
})();
(function(){var m="Boolean",l="resize-line",k="mousedown",j="qx.event.type.Data",i="mouseup",h="qx.ui.table.pane.CellEvent",g="scroll",d="focus-indicator",c="excluded",b="scrollbar-y",bm="table-scroller-focus-indicator",bl="visible",bk="mousemove",bj="header",bi="editing",bh="click",bg="modelChanged",bf="scrollbar-x",be="cellClick",bd="pane",t="__qp",u="__qn",r="__qm",s="mouseout",p="changeHorizontalScrollBarVisible",q="bottom",n="_applyScrollTimeout",o="changeScrollX",z="_applyTablePaneModel",A="Integer",I="__qo",G="dblclick",Q="dataEdited",L="mousewheel",Y="interval",V="qx.ui.table.pane.Scroller",C="_applyShowCellFocusIndicator",bc="__qr",bb="resize",ba="vertical",B="__qq",E="changeScrollY",F="appear",H="table-scroller",J="beforeSort",M="cellDblclick",S="__ql",X="__qk",v="horizontal",w="losecapture",D="contextmenu",P="col-resize",O="disappear",N="_applyVerticalScrollBarVisible",U="_applyHorizontalScrollBarVisible",T="cellContextmenu",K="close",R="__qs",a="changeTablePaneModel",W="qx.ui.table.pane.Model",y="changeVerticalScrollBarVisible";
qx.Class.define(V,{extend:qx.ui.core.Widget,include:qx.ui.core.scroll.MScrollBarFactory,construct:function(bn){qx.ui.core.Widget.call(this);
this.__qj=bn;
var bo=new qx.ui.layout.Grid();
bo.setColumnFlex(0,1);
bo.setRowFlex(1,1);
this._setLayout(bo);
this.__qk=this._showChildControl(bf);
this.__ql=this._showChildControl(b);
this.__qm=this._showChildControl(bj);
this.__qn=this._showChildControl(bd);
this.__qo=new qx.ui.container.Composite(new qx.ui.layout.HBox()).set({minWidth:0});
this._add(this.__qo,{row:0,column:0,colSpan:2});
this.__qp=new qx.ui.table.pane.Clipper();
this.__qp.add(this.__qm);
this.__qp.addListener(w,this._onChangeCaptureHeader,this);
this.__qp.addListener(bk,this._onMousemoveHeader,this);
this.__qp.addListener(k,this._onMousedownHeader,this);
this.__qp.addListener(i,this._onMouseupHeader,this);
this.__qp.addListener(bh,this._onClickHeader,this);
this.__qo.add(this.__qp,{flex:1});
this.__qq=new qx.ui.table.pane.Clipper();
this.__qq.add(this.__qn);
this.__qq.addListener(L,this._onMousewheel,this);
this.__qq.addListener(bk,this._onMousemovePane,this);
this.__qq.addListener(k,this._onMousedownPane,this);
this.__qq.addListener(i,this._onMouseupPane,this);
this.__qq.addListener(bh,this._onClickPane,this);
this.__qq.addListener(D,this._onContextMenu,this);
this.__qq.addListener(G,this._onDblclickPane,this);
this.__qq.addListener(bb,this._onResizePane,this);
this._add(this.__qq,{row:1,column:0});
this.__qr=this.getChildControl(d);
this.initShowCellFocusIndicator();
this.getChildControl(l).hide();
this.addListener(s,this._onMouseout,this);
this.addListener(F,this._onAppear,this);
this.addListener(O,this._onDisappear,this);
this.__qs=new qx.event.Timer();
this.__qs.addListener(Y,this._oninterval,this);
this.initScrollTimeout();
},statics:{MIN_COLUMN_WIDTH:10,RESIZE_REGION_RADIUS:5,CLICK_TOLERANCE:5,HORIZONTAL_SCROLLBAR:1,VERTICAL_SCROLLBAR:2},events:{"changeScrollY":j,"changeScrollX":j,"cellClick":h,"cellDblclick":h,"cellContextmenu":h,"beforeSort":j},properties:{horizontalScrollBarVisible:{check:m,init:false,apply:U,event:p},verticalScrollBarVisible:{check:m,init:false,apply:N,event:y},tablePaneModel:{check:W,apply:z,event:a},liveResize:{check:m,init:false},focusCellOnMouseMove:{check:m,init:false},selectBeforeFocus:{check:m,init:false},showCellFocusIndicator:{check:m,init:true,apply:C},resetSelectionOnHeaderClick:{check:m,init:true},scrollTimeout:{check:A,init:100,apply:n},appearance:{refine:true,init:H}},members:{__qt:null,__qj:null,__qu:null,__qv:null,__qw:null,__qx:null,__qy:null,__qz:null,__qA:null,__qB:null,__qC:null,__qD:null,__qE:null,__qF:null,__qG:false,__qH:null,__qI:null,__qJ:null,__qK:null,__qL:null,__qM:null,__qN:null,__qO:null,__qk:null,__ql:null,__qm:null,__qp:null,__qn:null,__qq:null,__qr:null,__qo:null,__qs:null,getPaneInsetRight:function(){var br=this.getTopRightWidget();
var bs=br&&br.isVisible()&&br.getBounds()?br.getBounds().width+br.getMarginLeft()+br.getMarginRight():0;
var bq=this.__ql;
var bp=this.getVerticalScrollBarVisible()?this.getVerticalScrollBarWidth()+bq.getMarginLeft()+bq.getMarginRight():0;
return Math.max(bs,bp);
},setPaneWidth:function(bt){if(this.isVerticalScrollBarVisible()){bt+=this.getPaneInsetRight();
}this.setWidth(bt);
},_createChildControlImpl:function(bu,bv){var bw;

switch(bu){case bj:bw=(this.getTable().getNewTablePaneHeader())(this);
break;
case bd:bw=(this.getTable().getNewTablePane())(this);
break;
case d:bw=new qx.ui.table.pane.FocusIndicator(this);
bw.setUserBounds(0,0,0,0);
bw.setZIndex(1000);
bw.addListener(i,this._onMouseupFocusIndicator,this);
this.__qq.add(bw);
bw.show();
bw.setDecorator(null);
break;
case l:bw=new qx.ui.core.Widget();
bw.setUserBounds(0,0,0,0);
bw.setZIndex(1000);
this.__qq.add(bw);
break;
case bf:bw=this._createScrollBar(v).set({minWidth:0,alignY:q});
bw.addListener(g,this._onScrollX,this);
this._add(bw,{row:2,column:0});
break;
case b:bw=this._createScrollBar(ba);
bw.addListener(g,this._onScrollY,this);
this._add(bw,{row:1,column:1});
break;
}return bw||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,bu);
},_applyHorizontalScrollBarVisible:function(bx,by){this.__qk.setVisibility(bx?bl:c);
},_applyVerticalScrollBarVisible:function(bz,bA){this.__ql.setVisibility(bz?bl:c);
},_applyTablePaneModel:function(bB,bC){if(bC!=null){bC.removeListener(bg,this._onPaneModelChanged,this);
}bB.addListener(bg,this._onPaneModelChanged,this);
},_applyShowCellFocusIndicator:function(bD,bE){if(bD){this.__qr.setDecorator(bm);
this._updateFocusIndicator();
}else{if(this.__qr){this.__qr.setDecorator(null);
}}},getScrollY:function(){return this.__ql.getPosition();
},setScrollY:function(scrollY,bF){this.__ql.scrollTo(scrollY);

if(bF){this._updateContent();
}},getScrollX:function(){return this.__qk.getPosition();
},setScrollX:function(scrollX){this.__qk.scrollTo(scrollX);
},getTable:function(){return this.__qj;
},onColVisibilityChanged:function(){this.updateHorScrollBarMaximum();
this._updateFocusIndicator();
},setColumnWidth:function(bG,bH){this.__qm.setColumnWidth(bG,bH);
this.__qn.setColumnWidth(bG,bH);
var bI=this.getTablePaneModel();
var x=bI.getX(bG);

if(x!=-1){this.updateHorScrollBarMaximum();
this._updateFocusIndicator();
}},onColOrderChanged:function(){this.__qm.onColOrderChanged();
this.__qn.onColOrderChanged();
this.updateHorScrollBarMaximum();
},onTableModelDataChanged:function(bJ,bK,bL,bM){this.__qn.onTableModelDataChanged(bJ,bK,bL,bM);
var bN=this.getTable().getTableModel().getRowCount();

if(bN!=this.__qt){this.updateVerScrollBarMaximum();

if(this.getFocusedRow()>=bN){if(bN==0){this.setFocusedCell(null,null);
}else{this.setFocusedCell(this.getFocusedColumn(),bN-1);
}}this.__qt=bN;
}},onSelectionChanged:function(){this.__qn.onSelectionChanged();
},onFocusChanged:function(){this.__qn.onFocusChanged();
},onTableModelMetaDataChanged:function(){this.__qm.onTableModelMetaDataChanged();
this.__qn.onTableModelMetaDataChanged();
},_onPaneModelChanged:function(){this.__qm.onPaneModelChanged();
this.__qn.onPaneModelChanged();
},_onResizePane:function(){this.updateHorScrollBarMaximum();
this.updateVerScrollBarMaximum();
this._updateContent();
this.__qm._updateContent();
this.__qj._updateScrollBarVisibility();
},updateHorScrollBarMaximum:function(){var bR=this.__qq.getInnerSize();

if(!bR){return ;
}var bP=this.getTablePaneModel().getTotalWidth();
var bQ=this.__qk;

if(bR.width<bP){var bO=Math.max(0,bP-bR.width);
bQ.setMaximum(bO);
bQ.setKnobFactor(bR.width/bP);
var bS=bQ.getPosition();
bQ.setPosition(Math.min(bS,bO));
}else{bQ.setMaximum(0);
bQ.setKnobFactor(1);
bQ.setPosition(0);
}},updateVerScrollBarMaximum:function(){var cb=this.__qq.getInnerSize();

if(!cb){return ;
}var bY=this.getTable().getTableModel();
var bU=bY.getRowCount();

if(this.getTable().getKeepFirstVisibleRowComplete()){bU+=1;
}var bT=this.getTable().getRowHeight();
var bW=bU*bT;
var ca=this.__ql;

if(cb.height<bW){var bV=Math.max(0,bW-cb.height);
ca.setMaximum(bV);
ca.setKnobFactor(cb.height/bW);
var bX=ca.getPosition();
ca.setPosition(Math.min(bX,bV));
}else{ca.setMaximum(0);
ca.setKnobFactor(1);
ca.setPosition(0);
}},onKeepFirstVisibleRowCompleteChanged:function(){this.updateVerScrollBarMaximum();
this._updateContent();
},_onAppear:function(){this._startInterval(this.getScrollTimeout());
},_onDisappear:function(){this._stopInterval();
},_onScrollX:function(e){var cc=e.getData();
this.fireDataEvent(o,cc,e.getOldData());
this.__qp.scrollToX(cc);
this.__qq.scrollToX(cc);
},_onScrollY:function(e){this.fireDataEvent(E,e.getData(),e.getOldData());
this._postponedUpdateContent();
},_onMousewheel:function(e){var ch=this.getTable();

if(!ch.getEnabled()){return;
}var cg=e.getWheelDelta();
var ce=qx.bom.client.Engine.GECKO?1:3;
var cf=this.__ql.getPosition()+((cg*ce)*ch.getRowHeight());
this.__ql.scrollTo(cf);
this.__ql.scrollBySteps(cg);
if(this.__qI&&this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(this.__qI,this.__qJ);
}var ci=this.__ql.getPosition();
var cd=this.__ql.getMaximum();
if(cg<0&&ci<=0||cg>0&&ci>=cd){return;
}e.stop();
},__qP:function(cj){var co=this.getTable();
var cp=this.__qm.getHeaderWidgetAtColumn(this.__qC);
var ck=cp.getSizeHint().minWidth;
var cm=Math.max(ck,this.__qE+cj-this.__qD);

if(this.getLiveResize()){var cl=co.getTableColumnModel();
cl.setColumnWidth(this.__qC,cm,true);
}else{this.__qm.setColumnWidth(this.__qC,cm,true);
var cn=this.getTablePaneModel();
this._showResizeLine(cn.getColumnLeft(this.__qC)+cm);
}this.__qD+=cm-this.__qE;
this.__qE=cm;
},__qQ:function(cq){var cr=qx.ui.table.pane.Scroller.CLICK_TOLERANCE;

if(this.__qm.isShowingColumnMoveFeedback()||cq>this.__qB+cr||cq<this.__qB-cr){this.__qy+=cq-this.__qB;
this.__qm.showColumnMoveFeedback(this.__qx,this.__qy);
var cs=this.__qj.getTablePaneScrollerAtPageX(cq);

if(this.__qA&&this.__qA!=cs){this.__qA.hideColumnMoveFeedback();
}
if(cs!=null){this.__qz=cs.showColumnMoveFeedback(cq);
}else{this.__qz=null;
}this.__qA=cs;
this.__qB=cq;
}},_onMousemoveHeader:function(e){var cz=this.getTable();

if(!cz.getEnabled()){return;
}var cA=false;
var ct=null;
var cx=e.getDocumentLeft();
var cy=e.getDocumentTop();
this.__qI=cx;
this.__qJ=cy;

if(this.__qC!=null){this.__qP(cx);
cA=true;
e.stopPropagation();
}else if(this.__qx!=null){this.__qQ(cx);
e.stopPropagation();
}else{var cu=this._getResizeColumnForPageX(cx);

if(cu!=-1){cA=true;
}else{var cw=cz.getTableModel();
var cB=this._getColumnForPageX(cx);

if(cB!=null&&cw.isColumnSortable(cB)){ct=cB;
}}}var cv=cA?P:null;
this.getApplicationRoot().setGlobalCursor(cv);
this.setCursor(cv);
this.__qm.setMouseOverColumn(ct);
},_onMousemovePane:function(e){var cC=this.getTable();

if(!cC.getEnabled()){return;
}var cE=e.getDocumentLeft();
var cF=e.getDocumentTop();
this.__qI=cE;
this.__qJ=cF;
var cD=this._getRowForPagePos(cE,cF);

if(cD!=null&&this._getColumnForPageX(cE)!=null){if(this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(cE,cF);
}}this.__qm.setMouseOverColumn(null);
},_onMousedownHeader:function(e){if(!this.getTable().getEnabled()){return;
}var cH=e.getDocumentLeft();
var cI=this._getResizeColumnForPageX(cH);

if(cI!=-1){this._startResizeHeader(cI,cH);
e.stop();
}else{var cG=this._getColumnForPageX(cH);

if(cG!=null){this._startMoveHeader(cG,cH);
e.stop();
}}},_startResizeHeader:function(cJ,cK){var cL=this.getTable().getTableColumnModel();
this.__qC=cJ;
this.__qD=cK;
this.__qE=cL.getColumnWidth(this.__qC);
this.__qp.capture();
},_startMoveHeader:function(cM,cN){this.__qx=cM;
this.__qB=cN;
this.__qy=this.getTablePaneModel().getColumnLeft(cM);
this.__qp.capture();
},_onMousedownPane:function(e){var cR=this.getTable();

if(!cR.getEnabled()){return;
}
if(cR.isEditing()){cR.stopEditing();
}var cO=e.getDocumentLeft();
var cQ=e.getDocumentTop();
var cT=this._getRowForPagePos(cO,cQ);
var cS=this._getColumnForPageX(cO);

if(cT!==null){this.__qF={row:cT,col:cS};
this.__qG=false;
var cP=this.getSelectBeforeFocus();

if(cP){cR.getSelectionManager().handleMouseDown(cT,e);
}if(!this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(cO,cQ);
}
if(!cP){cR.getSelectionManager().handleMouseDown(cT,e);
}}},_onMouseupFocusIndicator:function(e){if(this.__qF&&!this.__qG&&!this.isEditing()&&this.__qr.getRow()==this.__qF.row&&this.__qr.getColumn()==this.__qF.col){this.fireEvent(be,qx.ui.table.pane.CellEvent,[this,e,this.__qF.row,this.__qF.col],true);
this.__qG=true;
}else if(!this.isEditing()){this._onMousedownPane(e);
}},_onChangeCaptureHeader:function(e){if(this.__qC!=null){this._stopResizeHeader();
}
if(this.__qx!=null){this._stopMoveHeader();
}},_stopResizeHeader:function(){var cU=this.getTable().getTableColumnModel();
if(!this.getLiveResize()){this._hideResizeLine();
cU.setColumnWidth(this.__qC,this.__qE,true);
}this.__qC=null;
this.__qp.releaseCapture();
this.getApplicationRoot().setGlobalCursor(null);
this.setCursor(null);
if(this.isEditing()){var cV=this.__qM.getBounds().height;
this.__qM.setUserBounds(0,0,this.__qE,cV);
}},_stopMoveHeader:function(){var db=this.getTable().getTableColumnModel();
var dc=this.getTablePaneModel();
this.__qm.hideColumnMoveFeedback();

if(this.__qA){this.__qA.hideColumnMoveFeedback();
}
if(this.__qz!=null){var de=dc.getFirstColumnX()+dc.getX(this.__qx);
var da=this.__qz;

if(da!=de&&da!=de+1){var dd=db.getVisibleColumnAtX(de);
var cY=db.getVisibleColumnAtX(da);
var cX=db.getOverallX(dd);
var cW=(cY!=null)?db.getOverallX(cY):db.getOverallColumnCount();

if(cW>cX){cW--;
}db.moveColumn(cX,cW);
this._updateFocusIndicator();
}}this.__qx=null;
this.__qz=null;
this.__qp.releaseCapture();
},_onMouseupPane:function(e){var df=this.getTable();

if(!df.getEnabled()){return;
}var dg=this._getRowForPagePos(e.getDocumentLeft(),e.getDocumentTop());

if(dg!=-1&&dg!=null&&this._getColumnForPageX(e.getDocumentLeft())!=null){df.getSelectionManager().handleMouseUp(dg,e);
}},_onMouseupHeader:function(e){var dh=this.getTable();

if(!dh.getEnabled()){return;
}
if(this.__qC!=null){this._stopResizeHeader();
this.__qH=true;
e.stop();
}else if(this.__qx!=null){this._stopMoveHeader();
e.stop();
}},_onClickHeader:function(e){if(this.__qH){this.__qH=false;
return;
}var dm=this.getTable();

if(!dm.getEnabled()){return;
}var dk=dm.getTableModel();
var dl=e.getDocumentLeft();
var dj=this._getResizeColumnForPageX(dl);

if(dj==-1){var dq=this._getColumnForPageX(dl);

if(dq!=null&&dk.isColumnSortable(dq)){var di=dk.getSortColumnIndex();
var dn=(dq!=di)?true:!dk.isSortAscending();
var dp={column:dq,ascending:dn,clickEvent:e};

if(this.fireDataEvent(J,dp,null,true)){dk.sortByColumn(dq,dn);

if(this.getResetSelectionOnHeaderClick()){dm.getSelectionModel().resetSelection();
}}}}e.stop();
},_onClickPane:function(e){var dr=this.getTable();

if(!dr.getEnabled()){return;
}var du=e.getDocumentLeft();
var dv=e.getDocumentTop();
var ds=this._getRowForPagePos(du,dv);
var dt=this._getColumnForPageX(du);

if(ds!=null&&dt!=null){dr.getSelectionManager().handleClick(ds,e);

if(this.__qr.isHidden()||(this.__qF&&!this.__qG&&!this.isEditing()&&ds==this.__qF.row&&dt==this.__qF.col)){this.fireEvent(be,qx.ui.table.pane.CellEvent,[this,e,ds,dt],true);
this.__qG=true;
}}},_onContextMenu:function(e){var dz=e.getDocumentLeft();
var dA=e.getDocumentTop();
var dx=this._getRowForPagePos(dz,dA);
var dy=this._getColumnForPageX(dz);

if(this.__qr.isHidden()||(this.__qF&&dx==this.__qF.row&&dy==this.__qF.col)){this.fireEvent(T,qx.ui.table.pane.CellEvent,[this,e,dx,dy],true);
var dw=this.getTable().getContextMenu();

if(dw){if(dw.getChildren().length>0){dw.openAtMouse(e);
}else{dw.exclude();
}e.preventDefault();
}}},_onContextMenuOpen:function(e){},_onDblclickPane:function(e){var dC=e.getDocumentLeft();
var dD=e.getDocumentTop();
this._focusCellAtPagePos(dC,dD);
this.startEditing();
var dB=this._getRowForPagePos(dC,dD);

if(dB!=-1&&dB!=null){this.fireEvent(M,qx.ui.table.pane.CellEvent,[this,e,dB],true);
}},_onMouseout:function(e){var dE=this.getTable();

if(!dE.getEnabled()){return;
}if(this.__qC==null){this.setCursor(null);
this.getApplicationRoot().setGlobalCursor(null);
}this.__qm.setMouseOverColumn(null);
},_showResizeLine:function(x){var dG=this._showChildControl(l);
var dF=dG.getWidth();
var dH=this.__qq.getBounds();
dG.setUserBounds(x-Math.round(dF/2),0,dF,dH.height);
},_hideResizeLine:function(){this._excludeChildControl(l);
},showColumnMoveFeedback:function(dI){var dR=this.getTablePaneModel();
var dQ=this.getTable().getTableColumnModel();
var dL=this.__qn.getContainerLocation().left;
var dP=dR.getColumnCount();
var dM=0;
var dK=0;
var dU=dL;

for(var dJ=0;dJ<dP;dJ++){var dN=dR.getColumnAtX(dJ);
var dS=dQ.getColumnWidth(dN);

if(dI<dU+dS/2){break;
}dU+=dS;
dM=dJ+1;
dK=dU-dL;
}var dO=this.__qq.getContainerLocation().left;
var dT=this.__qq.getBounds().width;
var scrollX=dO-dL;
dK=qx.lang.Number.limit(dK,scrollX+2,scrollX+dT-1);
this._showResizeLine(dK);
return dR.getFirstColumnX()+dM;
},hideColumnMoveFeedback:function(){this._hideResizeLine();
},_focusCellAtPagePos:function(dV,dW){var dY=this._getRowForPagePos(dV,dW);

if(dY!=-1&&dY!=null){var dX=this._getColumnForPageX(dV);
this.__qj.setFocusedCell(dX,dY);
}},setFocusedCell:function(ea,eb){if(!this.isEditing()){this.__qn.setFocusedCell(ea,eb,this.__qv);
this.__qK=ea;
this.__qL=eb;
this._updateFocusIndicator();
}},getFocusedColumn:function(){return this.__qK;
},getFocusedRow:function(){return this.__qL;
},scrollCellVisible:function(ec,ed){var en=this.getTablePaneModel();
var ee=en.getX(ec);

if(ee!=-1){var ek=this.__qq.getInnerSize();

if(!ek){return;
}var el=this.getTable().getTableColumnModel();
var eh=en.getColumnLeft(ec);
var eo=el.getColumnWidth(ec);
var ef=this.getTable().getRowHeight();
var ep=ed*ef;
var scrollX=this.getScrollX();
var scrollY=this.getScrollY();
var em=Math.min(eh,eh+eo-ek.width);
var ej=eh;
this.setScrollX(Math.max(em,Math.min(ej,scrollX)));
var eg=ep+ef-ek.height;

if(this.getTable().getKeepFirstVisibleRowComplete()){eg+=ef;
}var ei=ep;
this.setScrollY(Math.max(eg,Math.min(ei,scrollY)),true);
}},isEditing:function(){return this.__qM!=null;
},startEditing:function(){var eu=this.getTable();
var es=eu.getTableModel();
var ew=this.__qK;

if(!this.isEditing()&&(ew!=null)&&es.isColumnEditable(ew)){var ex=this.__qL;
var eq=this.getTablePaneModel().getX(ew);
var er=es.getValue(ew,ex);
this.scrollCellVisible(eq,ex);
this.__qN=eu.getTableColumnModel().getCellEditorFactory(ew);
var et={col:ew,row:ex,xPos:eq,value:er,table:eu};
this.__qM=this.__qN.createCellEditor(et);
if(this.__qM===null){return false;
}else if(this.__qM instanceof qx.ui.window.Window){this.__qM.setModal(true);
this.__qM.setShowClose(false);
this.__qM.addListener(K,this._onCellEditorModalWindowClose,this);
var f=eu.getModalCellEditorPreOpenFunction();

if(f!=null){f(this.__qM,et);
}this.__qM.open();
}else{var ev=this.__qr.getInnerSize();
this.__qM.setUserBounds(0,0,ev.width,ev.height);
this.__qr.addListener(k,function(e){this.__qF={row:this.__qL,col:this.__qK};
e.stopPropagation();
},this);
this.__qr.add(this.__qM);
this.__qr.addState(bi);
this.__qr.setKeepActive(false);
this.__qr.setDecorator(bm);
this.__qM.focus();
this.__qM.activate();
}return true;
}return false;
},stopEditing:function(){if(!this.getShowCellFocusIndicator()){this.__qr.setDecorator(null);
}this.flushEditor();
this.cancelEditing();
},flushEditor:function(){if(this.isEditing()){var ez=this.__qN.getCellEditorValue(this.__qM);
var ey=this.getTable().getTableModel().getValue(this.__qK,this.__qL);
this.getTable().getTableModel().setValue(this.__qK,this.__qL,ez);
this.__qj.focus();
this.__qj.fireDataEvent(Q,{row:this.__qL,col:this.__qK,oldValue:ey,value:ez});
}},cancelEditing:function(){if(this.isEditing()&&!this.__qM.pendingDispose){if(this._cellEditorIsModalWindow){this.__qM.destroy();
this.__qM=null;
this.__qN=null;
this.__qM.pendingDispose=true;
}else{this.__qr.removeState(bi);
this.__qr.setKeepActive(true);
this.__qM.destroy();
this.__qM=null;
this.__qN=null;
}}},_onCellEditorModalWindowClose:function(e){this.stopEditing();
},_getColumnForPageX:function(eA){var eD=this.getTable().getTableColumnModel();
var eE=this.getTablePaneModel();
var eC=eE.getColumnCount();
var eG=this.__qm.getContainerLocation().left;

for(var x=0;x<eC;x++){var eB=eE.getColumnAtX(x);
var eF=eD.getColumnWidth(eB);
eG+=eF;

if(eA<eG){return eB;
}}return null;
},_getResizeColumnForPageX:function(eH){var eL=this.getTable().getTableColumnModel();
var eM=this.getTablePaneModel();
var eK=eM.getColumnCount();
var eO=this.__qm.getContainerLocation().left;
var eI=qx.ui.table.pane.Scroller.RESIZE_REGION_RADIUS;

for(var x=0;x<eK;x++){var eJ=eM.getColumnAtX(x);
var eN=eL.getColumnWidth(eJ);
eO+=eN;

if(eH>=(eO-eI)&&eH<=(eO+eI)){return eJ;
}}return -1;
},_getRowForPagePos:function(eP,eQ){var eR=this.__qn.getContentLocation();

if(eP<eR.left||eP>eR.right){return null;
}
if(eQ>=eR.top&&eQ<=eR.bottom){var eS=this.getTable().getRowHeight();
var scrollY=this.__ql.getPosition();

if(this.getTable().getKeepFirstVisibleRowComplete()){scrollY=Math.floor(scrollY/eS)*eS;
}var eV=scrollY+eQ-eR.top;
var eX=Math.floor(eV/eS);
var eW=this.getTable().getTableModel();
var eT=eW.getRowCount();
return (eX<eT)?eX:null;
}var eU=this.__qm.getContainerLocation();

if(eQ>=eU.top&&eQ<=eU.bottom&&eP<=eU.right){return -1;
}return null;
},setTopRightWidget:function(eY){var fa=this.__qO;

if(fa!=null){this.__qo.remove(fa);
}
if(eY!=null){this.__qo.add(eY);
}this.__qO=eY;
},getTopRightWidget:function(){return this.__qO;
},getHeader:function(){return this.__qm;
},getTablePane:function(){return this.__qn;
},getVerticalScrollBarWidth:function(){var fb=this.__ql;
return fb.isVisible()?(fb.getSizeHint().width||0):0;
},getNeededScrollBars:function(fc,fd){var fm=this.__ql;
var fq=fm.getSizeHint().width+fm.getMarginLeft()+fm.getMarginRight();
var fs=this.__qk;
var fr=fs.getSizeHint().height+fs.getMarginTop()+fs.getMarginBottom();
var fk=this.__qq.getInnerSize();
var fe=fk?fk.width:0;

if(this.getVerticalScrollBarVisible()){fe+=fq;
}var fp=fk?fk.height:0;

if(this.getHorizontalScrollBarVisible()){fp+=fr;
}var fl=this.getTable().getTableModel();
var fi=fl.getRowCount();
var ff=this.getTablePaneModel().getTotalWidth();
var fn=this.getTable().getRowHeight()*fi;
var fh=false;
var fo=false;

if(ff>fe){fh=true;

if(fn>fp-fr){fo=true;
}}else if(fn>fp){fo=true;

if(!fd&&(ff>fe-fq)){fh=true;
}}var fj=qx.ui.table.pane.Scroller.HORIZONTAL_SCROLLBAR;
var fg=qx.ui.table.pane.Scroller.VERTICAL_SCROLLBAR;
return ((fc||fh)?fj:0)|((fd||!fo)?0:fg);
},getPaneClipper:function(){return this.__qq;
},_applyScrollTimeout:function(ft,fu){this._startInterval(ft);
},_startInterval:function(fv){this.__qs.setInterval(fv);
this.__qs.start();
},_stopInterval:function(){this.__qs.stop();
},_postponedUpdateContent:function(){this._updateContent();
},_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.__qv&&!this.__qn._layoutPending){this.__qv=false;
this._updateContent();
}}),_updateContent:function(){var fA=this.__qq.getInnerSize();

if(!fA){return;
}var fD=fA.height;
var scrollX=this.__qk.getPosition();
var scrollY=this.__ql.getPosition();
var fx=this.getTable().getRowHeight();
var fy=Math.floor(scrollY/fx);
var fC=this.__qn.getFirstVisibleRow();
this.__qn.setFirstVisibleRow(fy);
var fz=Math.ceil(fD/fx);
var fw=0;
var fB=this.getTable().getKeepFirstVisibleRowComplete();

if(!fB){fz++;
fw=scrollY%fx;
}this.__qn.setVisibleRowCount(fz);

if(fy!=fC){this._updateFocusIndicator();
}this.__qq.scrollToX(scrollX);
if(!fB){this.__qq.scrollToY(fw);
}},_updateFocusIndicator:function(){var fE=this.getTable();

if(!fE.getEnabled()){return;
}this.__qr.moveToCell(this.__qK,this.__qL);
}},destruct:function(){this._stopInterval();
var fF=this.getTablePaneModel();

if(fF){fF.dispose();
}this.__qF=this.__qO=this.__qj=null;
this._disposeObjects(X,S,t,B,bc,r,u,I,R);
}});
})();
(function(){var r="px",q=".qooxdoo-table-cell-icon {",p="abstract",o="",n="qx.ui.table.cellrenderer.AbstractImage",m=" qooxdoo-table-cell-icon",l="<div></div>",k="'",j="no-repeat",i="}",c="  text-align:center;",h="inline-block",f="static",b="top",a="  padding-top:1px;",e="title='",d="string",g="-moz-inline-box";
qx.Class.define(n,{extend:qx.ui.table.cellrenderer.Abstract,type:p,construct:function(){qx.ui.table.cellrenderer.Abstract.call(this);
var s=this.self(arguments);

if(!s.stylesheet){s.stylesheet=qx.bom.Stylesheet.createElement(q+c+a+i);
}},members:{__rP:16,__rQ:16,__rR:null,_insetY:2,_identifyImage:function(t){throw new Error("_identifyImage is abstract");
},_getImageInfos:function(u){var v=this._identifyImage(u);
if(v==null||typeof v==d){v={url:v,tooltip:null};
}if(!v.imageWidth||!v.imageHeight){var w=this.__rS(v.url);
v.imageWidth=w.width;
v.imageHeight=w.height;
}v.width=v.imageWidth;
v.height=v.imageHeight;
return v;
},__rS:function(x){var A=qx.util.ResourceManager.getInstance();
var z=qx.io.ImageLoader;
var y,B;
if(A.has(x)){y=A.getImageWidth(x);
B=A.getImageHeight(x);
}else if(z.isLoaded(x)){y=z.getWidth(x);
B=z.getHeight(x);
}else{y=this.__rP;
B=this.__rQ;
}return {width:y,height:B};
},createDataCellHtml:function(C,D){this.__rR=this._getImageInfos(C);
return qx.ui.table.cellrenderer.Abstract.prototype.createDataCellHtml.call(this,C,D);
},_getCellClass:function(E){return qx.ui.table.cellrenderer.Abstract.prototype._getCellClass.call(this)+m;
},_getContentHtml:function(F){var content=l;
if(this.__rR.url){content=qx.bom.element.Decoration.create(this.__rR.url,j,{width:this.__rR.width+r,height:this.__rR.height+r,display:qx.bom.client.Engine.GECKO&&qx.bom.client.Engine.VERSION<1.9?g:h,verticalAlign:b,position:f});
}return content;
},_getCellAttributes:function(G){var H=this.__rR.tooltip;

if(H){return e+H+k;
}else{return o;
}}},destruct:function(){this.__rR=null;
}});
})();
(function(){var h="headerCellRendererChanged",g="visibilityChangedPre",f="Number",e="qx.event.type.Event",d="_applyFirstColumnX",c="Integer",b="qx.ui.table.pane.Model",a="_applyMaxColumnCount";
qx.Class.define(b,{extend:qx.core.Object,construct:function(i){qx.core.Object.call(this);
this.setTableColumnModel(i);
},events:{"modelChanged":e},statics:{EVENT_TYPE_MODEL_CHANGED:"modelChanged"},properties:{firstColumnX:{check:c,init:0,apply:d},maxColumnCount:{check:f,init:-1,apply:a}},members:{__rC:null,__rD:null,_applyFirstColumnX:function(j,k){this.__rC=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},_applyMaxColumnCount:function(l,m){this.__rC=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},setTableColumnModel:function(n){if(this.__rD){this.__rD.removeListener(g,this._onColVisibilityChanged,this);
this.__rD.removeListener(h,this._onColVisibilityChanged,this);
}this.__rD=n;
this.__rD.addListener(g,this._onColVisibilityChanged,this);
this.__rD.addListener(h,this._onHeaderCellRendererChanged,this);
this.__rC=null;
},_onColVisibilityChanged:function(o){this.__rC=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},_onHeaderCellRendererChanged:function(p){this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},getColumnCount:function(){if(this.__rC==null){var q=this.getFirstColumnX();
var s=this.getMaxColumnCount();
var r=this.__rD.getVisibleColumnCount();

if(s==-1||(q+s)>r){this.__rC=r-q;
}else{this.__rC=s;
}}return this.__rC;
},getColumnAtX:function(t){var u=this.getFirstColumnX();
return this.__rD.getVisibleColumnAtX(u+t);
},getX:function(v){var w=this.getFirstColumnX();
var y=this.getMaxColumnCount();
var x=this.__rD.getVisibleX(v)-w;

if(x>=0&&(y==-1||x<y)){return x;
}else{return -1;
}},getColumnLeft:function(z){var C=0;
var B=this.getColumnCount();

for(var x=0;x<B;x++){var A=this.getColumnAtX(x);

if(A==z){return C;
}C+=this.__rD.getColumnWidth(A);
}return -1;
},getTotalWidth:function(){var D=0;
var E=this.getColumnCount();

for(var x=0;x<E;x++){var F=this.getColumnAtX(x);
D+=this.__rD.getColumnWidth(F);
}return D;
}},destruct:function(){if(this.__rD){this.__rD.removeListener(g,this._onColVisibilityChanged,this);
this.__rD.removeListener(h,this._onColVisibilityChanged,this);
}this.__rD=null;
}});
})();
(function(){var f="changeVisible",d="qx.ui.table.columnmenu.MenuItem",c="_applyVisible",b="Boolean",a="changeValue";
qx.Class.define(d,{extend:qx.ui.menu.CheckBox,implement:qx.ui.table.IColumnMenuItem,properties:{visible:{check:b,init:true,apply:c,event:f}},construct:function(g){qx.ui.menu.CheckBox.call(this,g);
this.addListener(a,function(e){this.bInListener=true;
this.setVisible(e.getData());
this.bInListener=false;
});
},members:{__pN:false,_applyVisible:function(h,i){if(!this.bInListener){this.setValue(h);
}}}});
})();
(function(){var a="qx.lang.Number";
qx.Class.define(a,{statics:{isInRange:function(b,c,d){return b>=c&&b<=d;
},isBetweenRange:function(e,f,g){return e>f&&e<g;
},limit:function(h,i,j){if(j!=null&&h>j){return j;
}else if(i!=null&&h<i){return i;
}else{return h;
}}}});
})();
(function(){var c="hovered",b="__qg",a="qx.ui.table.pane.Header";
qx.Class.define(a,{extend:qx.ui.core.Widget,construct:function(d){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.HBox());
this.__qf=new qx.ui.core.Blocker(this);
this.__qg=d;
},members:{__qg:null,__qh:null,__qi:null,__qf:null,getPaneScroller:function(){return this.__qg;
},getTable:function(){return this.__qg.getTable();
},getBlocker:function(){return this.__qf;
},onColOrderChanged:function(){this._updateContent(true);
},onPaneModelChanged:function(){this._updateContent(true);
},onTableModelMetaDataChanged:function(){this._updateContent();
},setColumnWidth:function(e,f,g){var h=this.getHeaderWidgetAtColumn(e);

if(h!=null){h.setWidth(f);
}},setMouseOverColumn:function(i){if(i!=this.__qi){if(this.__qi!=null){var j=this.getHeaderWidgetAtColumn(this.__qi);

if(j!=null){j.removeState(c);
}}
if(i!=null){this.getHeaderWidgetAtColumn(i).addState(c);
}this.__qi=i;
}},getHeaderWidgetAtColumn:function(k){var l=this.getPaneScroller().getTablePaneModel().getX(k);
return this._getChildren()[l];
},showColumnMoveFeedback:function(m,x){var q=this.getContainerLocation();

if(this.__qh==null){var v=this.getTable();
var n=this.getPaneScroller().getTablePaneModel().getX(m);
var p=this._getChildren()[n];
var r=v.getTableModel();
var t=v.getTableColumnModel();
var u={xPos:n,col:m,name:r.getColumnName(m),table:v};
var s=t.getHeaderCellRenderer(m);
var o=s.createHeaderCell(u);
var w=p.getBounds();
o.setWidth(w.width);
o.setHeight(w.height);
o.setZIndex(1000000);
o.setOpacity(0.8);
o.setLayoutProperties({top:q.top});
this.getApplicationRoot().add(o);
this.__qh=o;
}this.__qh.setLayoutProperties({left:q.left+x});
this.__qh.show();
},hideColumnMoveFeedback:function(){if(this.__qh!=null){this.__qh.destroy();
this.__qh=null;
}},isShowingColumnMoveFeedback:function(){return this.__qh!=null;
},_updateContent:function(y){var I=this.getTable();
var C=I.getTableModel();
var F=I.getTableColumnModel();
var H=this.getPaneScroller().getTablePaneModel();
var K=this._getChildren();
var D=H.getColumnCount();
var G=C.getSortColumnIndex();
if(y){this._cleanUpCells();
}var z={};
z.sortedAscending=C.isSortAscending();

for(var x=0;x<D;x++){var B=H.getColumnAtX(x);

if(B===undefined){continue;
}var J=F.getColumnWidth(B);
var E=F.getHeaderCellRenderer(B);
z.xPos=x;
z.col=B;
z.name=C.getColumnName(B);
z.editable=C.isColumnEditable(B);
z.sorted=(B==G);
z.table=I;
var A=K[x];
if(A==null){A=E.createHeaderCell(z);
A.set({width:J});
this._add(A);
}else{E.updateHeaderCell(z,A);
}}},_cleanUpCells:function(){var M=this._getChildren();

for(var x=M.length-1;x>=0;x--){var L=M[x];
L.destroy();
}}},destruct:function(){this.__qf.dispose();
this._disposeObjects(b);
}});
})();
(function(){var t="",s="table-row-background-even",r="table-row-background-selected",q="table-row",p="background-color:",o="table-row-background-focused",n=';border-bottom: 1px solid ',m=';color:',l="table-row-selected",k="table-row-background-odd",d="default",j="table-row-background-focused-selected",g="qx.ui.table.rowrenderer.Default",c="table-row-line",b="'",f="height:",e=";",h="px;",a="1px solid ",i="Boolean";
qx.Class.define(g,{extend:qx.core.Object,implement:qx.ui.table.IRowRenderer,construct:function(){qx.core.Object.call(this);
this.__oA=t;
this.__oA={};
this.__oB={};
this._renderFont(qx.theme.manager.Font.getInstance().resolve(d));
var u=qx.theme.manager.Color.getInstance();
this.__oB.bgcolFocusedSelected=u.resolve(j);
this.__oB.bgcolFocused=u.resolve(o);
this.__oB.bgcolSelected=u.resolve(r);
this.__oB.bgcolEven=u.resolve(s);
this.__oB.bgcolOdd=u.resolve(k);
this.__oB.colSelected=u.resolve(l);
this.__oB.colNormal=u.resolve(q);
this.__oB.horLine=u.resolve(c);
},properties:{highlightFocusRow:{check:i,init:true}},members:{__oB:null,__oC:null,__oA:null,_insetY:1,_renderFont:function(v){if(v){this.__oC=v.getStyles();
this.__oA=qx.bom.element.Style.compile(this.__oC);
this.__oA=this.__oA.replace(/"/g,b);
}else{this.__oA=t;
this.__oC=qx.bom.Font.getDefaultStyles();
}},updateDataRowElement:function(w,x){var z=this.__oC;
var y=x.style;
qx.bom.element.Style.setStyles(x,z);

if(w.focusedRow&&this.getHighlightFocusRow()){y.backgroundColor=w.selected?this.__oB.bgcolFocusedSelected:this.__oB.bgcolFocused;
}else{if(w.selected){y.backgroundColor=this.__oB.bgcolSelected;
}else{y.backgroundColor=(w.row%2==0)?this.__oB.bgcolEven:this.__oB.bgcolOdd;
}}y.color=w.selected?this.__oB.colSelected:this.__oB.colNormal;
y.borderBottom=a+this.__oB.horLine;
},getRowHeightStyle:function(A){if(qx.bom.client.Feature.CONTENT_BOX){A-=this._insetY;
}return f+A+h;
},createRowStyle:function(B){var C=[];
C.push(e);
C.push(this.__oA);
C.push(p);

if(B.focusedRow&&this.getHighlightFocusRow()){C.push(B.selected?this.__oB.bgcolFocusedSelected:this.__oB.bgcolFocused);
}else{if(B.selected){C.push(this.__oB.bgcolSelected);
}else{C.push((B.row%2==0)?this.__oB.bgcolEven:this.__oB.bgcolOdd);
}}C.push(m);
C.push(B.selected?this.__oB.colSelected:this.__oB.colNormal);
C.push(n,this.__oB.horLine);
return C.join(t);
},getRowClass:function(D){return t;
},getRowAttributes:function(E){return t;
}},destruct:function(){this.__oB=this.__oC=this.__oA=null;
}});
})();
(function(){var g="String",f="_applyIconTrue",e="decoration/table/boolean-true.png",d="qx.ui.table.cellrenderer.Boolean",c=";padding-top:4px;",b="decoration/table/boolean-false.png",a="_applyIconFalse";
qx.Class.define(d,{extend:qx.ui.table.cellrenderer.AbstractImage,construct:function(){qx.ui.table.cellrenderer.AbstractImage.call(this);
this.__xY=qx.util.AliasManager.getInstance();
this.initIconTrue();
this.initIconFalse();
},properties:{iconTrue:{check:g,init:e,apply:f},iconFalse:{check:g,init:b,apply:a}},members:{__ya:null,__yb:false,__xY:null,_applyIconTrue:function(h){this.__ya=this.__xY.resolve(h);
},_applyIconFalse:function(i){this.__yb=this.__xY.resolve(i);
},_insetY:5,_getCellStyle:function(j){return qx.ui.table.cellrenderer.AbstractImage.prototype._getCellStyle.call(this,j)+c;
},_identifyImage:function(k){var l={imageWidth:11,imageHeight:11};

switch(k.value){case true:l.url=this.__ya;
break;
case false:l.url=this.__yb;
break;
default:l.url=null;
break;
}return l;
}},destruct:function(){this.__xY=null;
}});
})();
(function(){var q="Boolean",p="column-button",o="Function",n="qx.event.type.Data",m="statusbar",k="qx.ui.table.pane.CellEvent",h="function",g="PageUp",f="dataChanged",e='"',bH="changeLocale",bG="changeSelection",bF="appear",bE="qx.dynlocale",bD="Enter",bC="metaDataChanged",bB="__ox",bA="on",bz="_applyStatusBarVisible",by="columnVisibilityMenuCreateStart",y="blur",z="qx.ui.table.Table",v="columnVisibilityMenuCreateEnd",w="changeVisible",t="_applyResetSelectionOnHeaderClick",u="_applyMetaColumnCounts",r="focus",s="changeDataRowRenderer",G="changeHeaderCellHeight",H="Escape",ba="A",V="changeSelectionModel",bi="Left",bd="Down",bu="Integer",bo="_applyHeaderCellHeight",O="visibilityChanged",bx="qx.ui.table.ITableModel",bw="orderChanged",bv="_applySelectionModel",M="__ov",R="menu-button",T="menu",X="_applyAdditionalStatusBarText",bb="_applyFocusCellOnMouseMove",be="table",bk="_applyColumnVisibilityButtonVisible",bq="changeTableModel",A="qx.event.type.Event",B="tableWidthChanged",Q="_applyHeaderCellsVisible",bh="Object",bg="_applyShowCellFocusIndicator",bf="resize",bm="verticalScrollBarChanged",bl="changeScrollY",bc="_applyTableModel",bj="__oo",a="End",bp="_applyKeepFirstVisibleRowComplete",C="widthChanged",D="one of one row",W="Home",b="__oz",d="_applyRowHeight",L="F2",E="Up",F="%1 rows",J="qx.ui.table.selection.Model",Y="one row",bs="PageDown",br="%1 of %2 rows",S="__on",bt="keypress",N="changeRowHeight",bn="Number",I="__ow",K="header",c="qx.ui.table.IRowRenderer",U="Right",P="Space";
qx.Class.define(z,{extend:qx.ui.core.Widget,construct:function(bI,bJ){qx.ui.core.Widget.call(this);
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
this.__on=new qx.ui.container.Composite(new qx.ui.layout.HBox());
this._add(this.__on,{flex:1});
this.setDataRowRenderer(new qx.ui.table.rowrenderer.Default(this));
this.__oo=this.getNewSelectionManager()(this);
this.setSelectionModel(this.getNewSelectionModel()(this));
this.setTableModel(bI||this.getEmptyTableModel());
this.setMetaColumnCounts([-1]);
this.setTabIndex(1);
this.addListener(bt,this._onKeyPress);
this.addListener(r,this._onFocusChanged);
this.addListener(y,this._onFocusChanged);
var bK=new qx.ui.core.Widget().set({height:0});
this._add(bK);
bK.addListener(bf,this._onResize,this);
this.__op=null;
this.__oq=null;
if(qx.core.Variant.isSet(bE,bA)){qx.locale.Manager.getInstance().addListener(bH,this._onChangeLocale,this);
}this.initStatusBarVisible();
bI=this.getTableModel();

if(bI.init&&typeof (bI.init)==h){bI.init(this);
}},events:{"columnVisibilityMenuCreateStart":n,"columnVisibilityMenuCreateEnd":n,"tableWidthChanged":A,"verticalScrollBarChanged":n,"cellClick":k,"cellDblclick":k,"cellContextmenu":k,"dataEdited":n},statics:{__or:{cellClick:1,cellDblclick:1,cellContextmenu:1}},properties:{appearance:{refine:true,init:be},focusable:{refine:true,init:true},minWidth:{refine:true,init:50},initiallyHiddenColumns:{init:null},selectable:{refine:true,init:false},selectionModel:{check:J,apply:bv,event:V},tableModel:{check:bx,apply:bc,event:bq},rowHeight:{check:bn,init:20,apply:d,event:N},forceLineHeight:{check:q,init:true},headerCellsVisible:{check:q,init:true,apply:Q},headerCellHeight:{check:bu,init:16,apply:bo,event:G,nullable:true},statusBarVisible:{check:q,init:true,apply:bz},additionalStatusBarText:{nullable:true,init:null,apply:X},columnVisibilityButtonVisible:{check:q,init:true,apply:bk},metaColumnCounts:{check:bh,apply:u},focusCellOnMouseMove:{check:q,init:false,apply:bb},rowFocusChangeModifiesSelection:{check:q,init:true},showCellFocusIndicator:{check:q,init:true,apply:bg},keepFirstVisibleRowComplete:{check:q,init:true,apply:bp},alwaysUpdateCells:{check:q,init:false},resetSelectionOnHeaderClick:{check:q,init:true,apply:t},dataRowRenderer:{check:c,init:null,nullable:true,event:s},modalCellEditorPreOpenFunction:{check:o,init:null,nullable:true},newColumnMenu:{check:o,init:function(){return new qx.ui.table.columnmenu.Button();
}},newSelectionManager:{check:o,init:function(bL){return new qx.ui.table.selection.Manager(bL);
}},newSelectionModel:{check:o,init:function(bM){return new qx.ui.table.selection.Model(bM);
}},newTableColumnModel:{check:o,init:function(bN){return new qx.ui.table.columnmodel.Basic(bN);
}},newTablePane:{check:o,init:function(bO){return new qx.ui.table.pane.Pane(bO);
}},newTablePaneHeader:{check:o,init:function(bP){return new qx.ui.table.pane.Header(bP);
}},newTablePaneScroller:{check:o,init:function(bQ){return new qx.ui.table.pane.Scroller(bQ);
}},newTablePaneModel:{check:o,init:function(bR){return new qx.ui.table.pane.Model(bR);
}}},members:{__op:null,__oq:null,__on:null,__oo:null,__os:null,__ot:null,__ou:null,__ov:null,__ow:null,__ox:null,__oy:null,__oz:null,_createChildControlImpl:function(bS,bT){var bU;

switch(bS){case m:bU=new qx.ui.basic.Label();
bU.set({allowGrowX:true});
this._add(bU);
break;
case p:bU=this.getNewColumnMenu()();
bU.set({focusable:false});
var bV=bU.factory(T,{table:this});
bV.addListener(bF,this._initColumnMenu,this);
break;
}return bU||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,bS);
},_applySelectionModel:function(bW,bX){this.__oo.setSelectionModel(bW);

if(bX!=null){bX.removeListener(bG,this._onSelectionChanged,this);
}bW.addListener(bG,this._onSelectionChanged,this);
},_applyRowHeight:function(bY,ca){var cb=this._getPaneScrollerArr();

for(var i=0;i<cb.length;i++){cb[i].updateVerScrollBarMaximum();
}},_applyHeaderCellsVisible:function(cc,cd){var ce=this._getPaneScrollerArr();

for(var i=0;i<ce.length;i++){ce[i]._excludeChildControl(K);
}},_applyHeaderCellHeight:function(cf,cg){var ch=this._getPaneScrollerArr();

for(var i=0;i<ch.length;i++){ch[i].getHeader().setHeight(cf);
}},getEmptyTableModel:function(){if(!this.__ox){this.__ox=new qx.ui.table.model.Simple();
this.__ox.setColumns([]);
this.__ox.setData([]);
}return this.__ox;
},_applyTableModel:function(ci,cj){this.getTableColumnModel().init(ci.getColumnCount(),this);

if(cj!=null){cj.removeListener(bC,this._onTableModelMetaDataChanged,this);
cj.removeListener(f,this._onTableModelDataChanged,this);
}ci.addListener(bC,this._onTableModelMetaDataChanged,this);
ci.addListener(f,this._onTableModelDataChanged,this);
this._updateStatusBar();
this._updateTableData(0,ci.getRowCount(),0,ci.getColumnCount());
this._onTableModelMetaDataChanged();
if(cj&&ci.init&&typeof (ci.init)==h){ci.init(this);
}},getTableColumnModel:function(){if(!this.__ow){var cm=this.__ow=this.getNewTableColumnModel()(this);
cm.addListener(O,this._onColVisibilityChanged,this);
cm.addListener(C,this._onColWidthChanged,this);
cm.addListener(bw,this._onColOrderChanged,this);
var cl=this.getTableModel();
cm.init(cl.getColumnCount(),this);
var ck=this._getPaneScrollerArr();

for(var i=0;i<ck.length;i++){var cn=ck[i];
var co=cn.getTablePaneModel();
co.setTableColumnModel(cm);
}}return this.__ow;
},_applyStatusBarVisible:function(cp,cq){if(cp){this._showChildControl(m);
}else{this._excludeChildControl(m);
}
if(cp){this._updateStatusBar();
}},_applyAdditionalStatusBarText:function(cr,cs){this.__os=cr;
this._updateStatusBar();
},_applyColumnVisibilityButtonVisible:function(ct,cu){if(ct){this._showChildControl(p);
}else{this._excludeChildControl(p);
}},_applyMetaColumnCounts:function(cv,cw){var cD=cv;
var cx=this._getPaneScrollerArr();
var cB={};

if(cv>cw){var cF=qx.event.Registration.getManager(cx[0]);

for(var cG in qx.ui.table.Table.__or){cB[cG]={};
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
cH.addListener(bl,this._onScrollY,this);
for(cG in qx.ui.table.Table.__or){if(!cB[cG]){break;
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
this.__on.add(cH,{flex:cI});
cx=this._getPaneScrollerArr();
}}for(var i=0;i<cx.length;i++){var cH=cx[i];
var cK=(i==(cx.length-1));
cH.getHeader().setHeight(this.getHeaderCellHeight());
cH.setTopRightWidget(cK?this.getChildControl(p):null);
}
if(!this.isColumnVisibilityButtonVisible()){this._excludeChildControl(p);
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},_applyFocusCellOnMouseMove:function(cL,cM){var cN=this._getPaneScrollerArr();

for(var i=0;i<cN.length;i++){cN[i].setFocusCellOnMouseMove(cL);
}},_applyShowCellFocusIndicator:function(cO,cP){var cQ=this._getPaneScrollerArr();

for(var i=0;i<cQ.length;i++){cQ[i].setShowCellFocusIndicator(cO);
}},_applyKeepFirstVisibleRowComplete:function(cR,cS){var cT=this._getPaneScrollerArr();

for(var i=0;i<cT.length;i++){cT[i].onKeepFirstVisibleRowCompleteChanged();
}},_applyResetSelectionOnHeaderClick:function(cU,cV){var cW=this._getPaneScrollerArr();

for(var i=0;i<cW.length;i++){cW[i].setResetSelectionOnHeaderClick(cU);
}},getSelectionManager:function(){return this.__oo;
},_getPaneScrollerArr:function(){return this.__on.getChildren();
},getPaneScroller:function(cX){return this._getPaneScrollerArr()[cX];
},_cleanUpMetaColumns:function(cY){var da=this._getPaneScrollerArr();

if(da!=null){for(var i=da.length-1;i>=cY;i--){da[i].destroy();
}}},_onChangeLocale:function(db){this.updateContent();
this._updateStatusBar();
},_onSelectionChanged:function(dc){var dd=this._getPaneScrollerArr();

for(var i=0;i<dd.length;i++){dd[i].onSelectionChanged();
}this._updateStatusBar();
},_onTableModelMetaDataChanged:function(de){var df=this._getPaneScrollerArr();

for(var i=0;i<df.length;i++){df[i].onTableModelMetaDataChanged();
}this._updateStatusBar();
},_onTableModelDataChanged:function(dg){var dh=dg.getData();
this._updateTableData(dh.firstRow,dh.lastRow,dh.firstColumn,dh.lastColumn,dh.removeStart,dh.removeCount);
},_updateTableData:function(di,dj,dk,dl,dm,dn){var dp=this._getPaneScrollerArr();
if(dn){this.getSelectionModel().removeSelectionInterval(dm,dm+dn);
if(this.__oq>=dm&&this.__oq<(dm+dn)){this.setFocusedCell();
}}
for(var i=0;i<dp.length;i++){dp[i].onTableModelDataChanged(di,dj,dk,dl);
}var dq=this.getTableModel().getRowCount();

if(dq!=this.__ot){this.__ot=dq;
this._updateScrollBarVisibility();
this._updateStatusBar();
}},_onScrollY:function(dr){if(!this.__ou){this.__ou=true;
var ds=this._getPaneScrollerArr();

for(var i=0;i<ds.length;i++){ds[i].setScrollY(dr.getData());
}this.__ou=false;
}},_onKeyPress:function(dt){if(!this.getEnabled()){return;
}var dA=this.__oq;
var dx=true;
var dB=dt.getKeyIdentifier();

if(this.isEditing()){if(dt.getModifiers()==0){switch(dB){case bD:this.stopEditing();
var dA=this.__oq;
this.moveFocusedCell(0,1);

if(this.__oq!=dA){dx=this.startEditing();
}break;
case H:this.cancelEditing();
this.focus();
break;
default:dx=false;
break;
}}}else{if(dt.isCtrlPressed()){dx=true;

switch(dB){case ba:var dy=this.getTableModel().getRowCount();

if(dy>0){this.getSelectionModel().setSelectionInterval(0,dy-1);
}break;
default:dx=false;
break;
}}else{switch(dB){case P:this.__oo.handleSelectKeyDown(this.__oq,dt);
break;
case L:case bD:this.startEditing();
dx=true;
break;
case W:this.setFocusedCell(this.__op,0,true);
break;
case a:var dy=this.getTableModel().getRowCount();
this.setFocusedCell(this.__op,dy-1,true);
break;
case bi:this.moveFocusedCell(-1,0);
break;
case U:this.moveFocusedCell(1,0);
break;
case E:this.moveFocusedCell(0,-1);
break;
case bd:this.moveFocusedCell(0,1);
break;
case g:case bs:var dw=this.getPaneScroller(0);
var dz=dw.getTablePane();
var dv=this.getRowHeight();
var du=(dB==g)?-1:1;
dy=dz.getVisibleRowCount()-1;
dw.setScrollY(dw.getScrollY()+du*dy*dv);
this.moveFocusedCell(0,du*dy);
break;
default:dx=false;
}}}
if(dA!=this.__oq&&this.getRowFocusChangeModifiesSelection()){this.__oo.handleMoveKeyDown(this.__oq,dt);
}
if(dx){dt.preventDefault();
dt.stopPropagation();
}},_onFocusChanged:function(dC){var dD=this._getPaneScrollerArr();

for(var i=0;i<dD.length;i++){dD[i].onFocusChanged();
}},_onColVisibilityChanged:function(dE){var dF=this._getPaneScrollerArr();

for(var i=0;i<dF.length;i++){dF[i].onColVisibilityChanged();
}var dG=dE.getData();

if(this.__ov!=null&&dG.col!=null&&dG.visible!=null){this.__ov[dG.col].setVisible(dG.visible);
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},_onColWidthChanged:function(dH){var dI=this._getPaneScrollerArr();

for(var i=0;i<dI.length;i++){var dJ=dH.getData();
dI[i].setColumnWidth(dJ.col,dJ.newWidth);
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},_onColOrderChanged:function(dK){var dL=this._getPaneScrollerArr();

for(var i=0;i<dL.length;i++){dL[i].onColOrderChanged();
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},getTablePaneScrollerAtPageX:function(dM){var dN=this._getMetaColumnAtPageX(dM);
return (dN!=-1)?this.getPaneScroller(dN):null;
},setFocusedCell:function(dO,dP,dQ){if(!this.isEditing()&&(dO!=this.__op||dP!=this.__oq)){if(dO===null){dO=0;
}this.__op=dO;
this.__oq=dP;
var dR=this._getPaneScrollerArr();

for(var i=0;i<dR.length;i++){dR[i].setFocusedCell(dO,dP);
}
if(dO!==null&&dQ){this.scrollCellVisible(dO,dP);
}}},resetSelection:function(){this.getSelectionModel().resetSelection();
},resetCellFocus:function(){this.setFocusedCell(null,null,false);
},getFocusedColumn:function(){return this.__op;
},getFocusedRow:function(){return this.__oq;
},highlightFocusedRow:function(dS){this.getDataRowRenderer().setHighlightFocusRow(dS);
},clearFocusedRowHighlight:function(dT){if(dT){var dV=dT.getRelatedTarget();

if(dV instanceof qx.ui.table.pane.Pane||dV instanceof qx.ui.table.pane.FocusIndicator){return;
}}this.resetCellFocus();
var dU=this._getPaneScrollerArr();

for(var i=0;i<dU.length;i++){dU[i].onFocusChanged();
}},moveFocusedCell:function(dW,dX){var ec=this.__op;
var ed=this.__oq;
if(ec==null||ed==null){return;
}
if(dW!=0){var eb=this.getTableColumnModel();
var x=eb.getVisibleX(ec);
var ea=eb.getVisibleColumnCount();
x=qx.lang.Number.limit(x+dW,0,ea-1);
ec=eb.getVisibleColumnAtX(x);
}
if(dX!=0){var dY=this.getTableModel();
ed=qx.lang.Number.limit(ed+dX,0,dY.getRowCount()-1);
}this.setFocusedCell(ec,ed,true);
},scrollCellVisible:function(ee,ef){var eg=this.getContentElement().getDomElement();
if(!eg){this.addListenerOnce(bF,function(){this.scrollCellVisible(ee,ef);
},this);
}var eh=this.getTableColumnModel();
var x=eh.getVisibleX(ee);
var ei=this._getMetaColumnAtColumnX(x);

if(ei!=-1){this.getPaneScroller(ei).scrollCellVisible(ee,ef);
}},isEditing:function(){if(this.__op!=null){var x=this.getTableColumnModel().getVisibleX(this.__op);
var ej=this._getMetaColumnAtColumnX(x);
return this.getPaneScroller(ej).isEditing();
}return false;
},startEditing:function(){if(this.__op!=null){var x=this.getTableColumnModel().getVisibleX(this.__op);
var el=this._getMetaColumnAtColumnX(x);
var ek=this.getPaneScroller(el).startEditing();
return ek;
}return false;
},stopEditing:function(){if(this.__op!=null){var x=this.getTableColumnModel().getVisibleX(this.__op);
var em=this._getMetaColumnAtColumnX(x);
this.getPaneScroller(em).stopEditing();
}},cancelEditing:function(){if(this.__op!=null){var x=this.getTableColumnModel().getVisibleX(this.__op);
var en=this._getMetaColumnAtColumnX(x);
this.getPaneScroller(en).cancelEditing();
}},updateContent:function(){var eo=this._getPaneScrollerArr();

for(var i=0;i<eo.length;i++){eo[i].getTablePane().updateContent(true);
}},blockHeaderElements:function(){var ep=this._getPaneScrollerArr();

for(var i=0;i<ep.length;i++){ep[i].getHeader().getBlocker().blockContent(20);
}this.getChildControl(p).getBlocker().blockContent(20);
},unblockHeaderElements:function(){var eq=this._getPaneScrollerArr();

for(var i=0;i<eq.length;i++){eq[i].getHeader().getBlocker().unblockContent();
}this.getChildControl(p).getBlocker().unblockContent();
},_getMetaColumnAtPageX:function(er){var es=this._getPaneScrollerArr();

for(var i=0;i<es.length;i++){var et=es[i].getContainerLocation();

if(er>=et.left&&er<=et.right){return i;
}}return -1;
},_getMetaColumnAtColumnX:function(eu){var ew=this.getMetaColumnCounts();
var ex=0;

for(var i=0;i<ew.length;i++){var ev=ew[i];
ex+=ev;

if(ev==-1||eu<ex){return i;
}}return -1;
},_updateStatusBar:function(){var ey=this.getTableModel();

if(this.getStatusBarVisible()){var ez=this.getSelectionModel().getSelectedCount();
var eB=ey.getRowCount();
var eA;

if(eB>=0){if(ez==0){eA=this.trn(Y,F,eB,eB);
}else{eA=this.trn(D,br,eB,ez,eB);
}}
if(this.__os){if(eA){eA+=this.__os;
}else{eA=this.__os;
}}
if(eA){this.getChildControl(m).setValue(eA);
}}},_updateScrollerWidths:function(){var eC=this._getPaneScrollerArr();

for(var i=0;i<eC.length;i++){var eE=(i==(eC.length-1));
var eF=eC[i].getTablePaneModel().getTotalWidth();
eC[i].setPaneWidth(eF);
var eD=eE?1:0;
eC[i].setLayoutProperties({flex:eD});
}},_updateScrollBarVisibility:function(){if(!this.getBounds()){return;
}var eJ=qx.ui.table.pane.Scroller.HORIZONTAL_SCROLLBAR;
var eL=qx.ui.table.pane.Scroller.VERTICAL_SCROLLBAR;
var eG=this._getPaneScrollerArr();
var eI=false;
var eK=false;

for(var i=0;i<eG.length;i++){var eM=(i==(eG.length-1));
var eH=eG[i].getNeededScrollBars(eI,!eM);

if(eH&eJ){eI=true;
}
if(eM&&(eH&eL)){eK=true;
}}for(var i=0;i<eG.length;i++){var eM=(i==(eG.length-1));
eG[i].setHorizontalScrollBarVisible(eI);
if(eM){if(this.__oy==null){this.__oy=eG[i].getVerticalScrollBarVisible();
this.__oz=qx.event.Timer.once(function(){this.__oy=null;
this.__oz=null;
},this,0);
}}eG[i].setVerticalScrollBarVisible(eM&&eK);
if(eM&&eK!=this.__oy){this.fireDataEvent(bm,eK);
}}},_initColumnMenu:function(){var eP=this.getTableModel();
var eQ=this.getTableColumnModel();
var eR=this.getChildControl(p);
eR.empty();
var eO=eR.getMenu();
var eS={table:this,menu:eO,columnButton:eR};
this.fireDataEvent(by,eS);
this.__ov={};

for(var eT=0,l=eP.getColumnCount();eT<l;eT++){var eN=eR.factory(R,{text:eP.getColumnName(eT),column:eT,bVisible:eQ.isColumnVisible(eT)});
qx.core.Assert.assertInterface(eN,qx.ui.table.IColumnMenuItem);
eN.addListener(w,this._createColumnVisibilityCheckBoxHandler(eT),this);
this.__ov[eT]=eN;
}eS={table:this,menu:eO,columnButton:eR};
this.fireDataEvent(v,eS);
},_createColumnVisibilityCheckBoxHandler:function(eU){return function(eV){var eW=this.getTableColumnModel();
eW.setColumnVisible(eU,eV.getData());
};
},setColumnWidth:function(eX,eY){this.getTableColumnModel().setColumnWidth(eX,eY);
},_onResize:function(){this.fireEvent(B);
this._updateScrollerWidths();
this._updateScrollBarVisibility();
},addListener:function(fa,fb,self,fc){if(this.self(arguments).__or[fa]){var fe=[fa];

for(var i=0,fd=this._getPaneScrollerArr();i<fd.length;i++){fe.push(fd[i].addListener.apply(fd[i],arguments));
}return fe.join(e);
}else{return qx.ui.core.Widget.prototype.addListener.call(this,fa,fb,self,fc);
}},removeListener:function(ff,fg,self,fh){if(this.self(arguments).__or[ff]){for(var i=0,fi=this._getPaneScrollerArr();i<fi.length;i++){fi[i].removeListener.apply(fi[i],arguments);
}}else{qx.ui.core.Widget.prototype.removeListener.call(this,ff,fg,self,fh);
}},removeListenerById:function(fj){var fn=fj.split(e);
var fm=fn.shift();

if(this.self(arguments).__or[fm]){var fl=true;

for(var i=0,fk=this._getPaneScrollerArr();i<fk.length;i++){fl=fk[i].removeListenerById.call(fk[i],fn[i])&&fl;
}return fl;
}else{return qx.ui.core.Widget.prototype.removeListenerById.call(this,fj);
}},destroy:function(){this.getChildControl(p).getMenu().destroy();
qx.ui.core.Widget.prototype.destroy.call(this);
}},destruct:function(){if(qx.core.Variant.isSet(bE,bA)){qx.locale.Manager.getInstance().removeListener(bH,this._onChangeLocale,this);
}var fp=this.getSelectionModel();

if(fp){fp.dispose();
}var fo=this.getDataRowRenderer();

if(fo){fo.dispose();
}this._cleanUpMetaColumns(0);
this.getTableColumnModel().dispose();
this._disposeObjects(bj,S,bB,bB,I,b);
this._disposeMap(M);
}});
})();

});