qx.$$packageData['256']={"locales":{},"resources":{"qx/icon/Tango/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/media-audio.png":[16,16,"png","qx"],"qx/icon/Tango/16/status/dialog-warning.png":[16,16,"png","qx"]},"translations":{"C":{},"de":{"%1 of %2 rows":"%1 von %2 Zeilen","%1 rows":"%1 Zeilen","Reset column widths":"Spaltenbreite zurücksetzen","one of one row":"Eine von einer Zeile","one row":"Eine Zeile"},"de_AT":{},"de_DE":{},"en":{},"en_GB":{},"en_US":{},"es":{"%1 of %2 rows":"%1 de %2 filas","%1 rows":"%1 filas","Reset column widths":"Reestablecer anchos de columnas","one of one row":"una de una fila","one row":"una fila"},"es_ES":{},"es_MX":{},"ro":{"%1 of %2 rows":"%1 din %2 rânduri","%1 rows":"%1 rânduri","Reset column widths":"Resetează lățimea coloanei","one of one row":"unul din un rând","one row":"un rând"},"ro_RO":{},"sv":{"%1 of %2 rows":"%1 av %2 rader","%1 rows":"%1 rader","Reset column widths":"Återställ kolumnbredder","one of one row":"en av en rad","one row":"En rad"},"sv_SE":{}}};
qx.Part.$$notifyLoad("256", function() {
(function(){var a="qx.ui.table.ICellRenderer";
qx.Interface.define(a,{members:{createDataCellHtml:function(b,c){return true;
}}});
})();
(function(){var j="",i="px;",h=".qooxdoo-table-cell {",g="qooxdoo-table-cell",f="content",e='</div>',d="nowrap",c="default",b="}",a="width:",J=".qooxdoo-table-cell-right { text-align:right } ",I="css.boxmodel",H="0px 6px",G='<div class="',F="0px",E="height:",D="1px solid ",C=".qooxdoo-table-cell-bold { font-weight:bold } ",B="String",A="} ",q='>',r="mshtml",o='" ',p="ellipsis",m="content-box",n='left:',k="qx.ui.table.cellrenderer.Abstract",l="engine.name",s='" style="',t="abstract",v="none",u="hidden",x="table-column-line",w='px;',z=".qooxdoo-table-cell-italic { font-style:italic} ",y="absolute";
qx.Class.define(k,{type:t,implement:qx.ui.table.ICellRenderer,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
var K=qx.ui.table.cellrenderer.Abstract;

if(!K.__mY){var M=qx.theme.manager.Color.getInstance();
K.__mY=this.self(arguments);
var L=h+qx.bom.element.Style.compile({position:y,top:F,overflow:u,whiteSpace:d,borderRight:D+M.resolve(x),padding:H,cursor:c,textOverflow:p,userSelect:v})+A+J+z+C;

if(!(qx.core.Environment.get(l)==r)){L+=h+qx.bom.element.BoxSizing.compile(m)+b;
}K.__mY.stylesheet=qx.bom.Stylesheet.createElement(L);
}},properties:{defaultCellStyle:{init:null,check:B,nullable:true}},members:{_insetX:6+6+1,_insetY:0,_getCellClass:function(N){return g;
},_getCellStyle:function(O){return O.style||j;
},_getCellAttributes:function(P){return j;
},_getContentHtml:function(Q){return Q.value||j;
},_getCellSizeStyle:function(R,S,T,U){var V=j;

if(qx.core.Environment.get(I)==f){R-=T;
S-=U;
}V+=a+Math.max(R,0)+i;
V+=E+Math.max(S,0)+i;
return V;
},createDataCellHtml:function(W,X){X.push(G,this._getCellClass(W),s,n,W.styleLeft,w,this._getCellSizeStyle(W.styleWidth,W.styleHeight,this._insetX,this._insetY),this._getCellStyle(W),o,this._getCellAttributes(W),q+this._getContentHtml(W),e);
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
}o=qx.ui.table.cellrenderer.Default._numberFormat.format(p);
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
this.__xB=t||s;
this.__xC=u||s;
this.__xD=v||s;
this.__xE=w||s;
},members:{__xB:null,__xC:null,__xD:null,__xE:null,__xF:function(x,y){if(x[1]!=null){y[f]=x[1];
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
var bb={"text-align":this.__xB,"color":this.__xC,"font-style":this.__xD,"font-weight":this.__xE};

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
}if(bf==true){this.__xF(this.conditions[i],bb);
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
this.__pt=h;
this.setKeepActive(true);
this.addListener(d,this._onKeyPress,this);
},properties:{visibility:{refine:true,init:b},row:{check:g,nullable:true},column:{check:g,nullable:true}},members:{__pt:null,_onKeyPress:function(e){var i=e.getKeyIdentifier();

if(i!==f&&i!==c){e.stopPropagation();
}},moveToCell:function(j,k){if(!this.__pt.getShowCellFocusIndicator()&&!this.__pt.getTable().getTableModel().isColumnEditable(j)){this.exclude();
return;
}else{this.show();
}
if(j==null){this.hide();
this.setRow(null);
this.setColumn(null);
}else{var l=this.__pt.getTablePaneModel().getX(j);

if(l==-1){this.hide();
this.setRow(null);
this.setColumn(null);
}else{var q=this.__pt.getTable();
var o=q.getTableColumnModel();
var p=this.__pt.getTablePaneModel();
var n=this.__pt.getTablePane().getFirstVisibleRow();
var m=q.getRowHeight();
this.setUserBounds(p.getColumnLeft(j)-2,(k-n)*m-2,o.getColumnWidth(j)+3,m+3);
this.show();
this.setRow(k);
this.setColumn(j);
}}}},destruct:function(){this.__pt=null;
}});
})();
(function(){var k="",j="Number",h='</div>',g='" ',f="paneUpdated",e='<div>',d="</div>",c="overflow: hidden;",b="qx.event.type.Data",a="paneReloadsData",E="div",D='style="',C="_applyMaxCacheLines",B="qx.ui.table.pane.Pane",A="width: 100%;",z="qx.event.type.Event",w="_applyVisibleRowCount",v='>',u="line-height: ",t="appear",r='class="',s="width:100%;",p="px;",q='<div ',n="'>",o="_applyFirstVisibleRow",l="<div style='",m=";position:relative;";
qx.Class.define(B,{extend:qx.ui.core.Widget,construct:function(F){qx.ui.core.Widget.call(this);
this.__oE=F;
this.__oF=0;
this.__nU=0;
this.__oG=[];
},events:{"paneReloadsData":b,"paneUpdated":z},properties:{firstVisibleRow:{check:j,init:0,apply:o},visibleRowCount:{check:j,init:0,apply:w},maxCacheLines:{check:j,init:1000,apply:C},allowShrinkX:{refine:true,init:false}},members:{__nU:null,__oF:null,__oE:null,__oH:null,__nR:null,__nQ:null,__oG:null,__oI:0,_applyFirstVisibleRow:function(G,H){this.updateContent(false,G-H);
},_applyVisibleRowCount:function(I,J){this.updateContent(true);
},_getContentHint:function(){return {width:this.getPaneScroller().getTablePaneModel().getTotalWidth(),height:400};
},getPaneScroller:function(){return this.__oE;
},getTable:function(){return this.__oE.getTable();
},setFocusedCell:function(K,L,M){if(K!=this.__nQ||L!=this.__nR){var N=this.__nR;
this.__nQ=K;
this.__nR=L;
if(L!=N&&!M){if(N!==null){this.updateContent(false,null,N,true);
}
if(L!==null){this.updateContent(false,null,L,true);
}}}},onSelectionChanged:function(){this.updateContent(false,null,null,true);
},onFocusChanged:function(){this.updateContent(false,null,null,true);
},setColumnWidth:function(O,P){this.updateContent(true);
},onColOrderChanged:function(){this.updateContent(true);
},onPaneModelChanged:function(){this.updateContent(true);
},onTableModelDataChanged:function(Q,R,S,T){this.__oJ();
var V=this.getFirstVisibleRow();
var U=this.getVisibleRowCount();

if(R==-1||R>=V&&Q<V+U){this.updateContent();
}},onTableModelMetaDataChanged:function(){this.updateContent(true);
},_applyMaxCacheLines:function(W,X){if(this.__oI>=W&&W!==-1){this.__oJ();
}},__oJ:function(){this.__oG=[];
this.__oI=0;
},__oK:function(Y,ba,bb){if(!ba&&!bb&&this.__oG[Y]){return this.__oG[Y];
}else{return null;
}},__oL:function(bc,bd,be,bf){var bg=this.getMaxCacheLines();

if(!be&&!bf&&!this.__oG[bc]&&bg>0){this._applyMaxCacheLines(bg);
this.__oG[bc]=bd;
this.__oI+=1;
}},updateContent:function(bh,bi,bj,bk){if(bh){this.__oJ();
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
bs.focusedRow=(this.__nR==bv);
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
bz.push({col:bY,xPos:x,editable:bA.isColumnEditable(bY),focusedCol:this.__nQ==bY,styleLeft:bC,styleWidth:bF});
bC+=bF;
}var bX=[];
var ca=false;

for(var bE=bw;bE<bw+bx;bE++){var bH=bG.isSelectedIndex(bE);
var bK=(this.__nR==bE);
var bP=this.__oK(bE,bH,bK);

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
this.__oL(bE,bQ,bH,bK);
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
}}if(!this.__oH){this.__oH=document.createElement(E);
}var ck=e;
ck+=this._getRowsHtml(ci+ce,Math.abs(cb));
ck+=h;
this.__oH.innerHTML=ck;
var cf=this.__oH.firstChild.childNodes;
if(cb>0){for(var i=cf.length-1;i>=0;i--){var ch=cf[0];
cl.appendChild(ch);
}}else{for(var i=cf.length-1;i>=0;i--){var ch=cf[cf.length-1];
cl.insertBefore(ch,cl.firstChild);
}}if(this.__nR!==null){this._updateRowStyles(this.__nR-cb);
this._updateRowStyles(this.__nR);
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
this.__oF=cw;
this.__nU=cq;
this.fireEvent(f);
}},destruct:function(){this.__oH=this.__oE=this.__oG=null;
}});
})();
(function(){var e="auto",d="string",c="number",b="*",a="qx.ui.core.ColumnData";
qx.Class.define(a,{extend:qx.ui.core.LayoutItem,construct:function(){qx.ui.core.LayoutItem.call(this);
this.setColumnWidth(e);
},members:{__nH:null,renderLayout:function(f,top,g,h){this.__nH=g;
},getComputedWidth:function(){return this.__nH;
},getFlex:function(){return this.getLayoutProperties().flex||0;
},setColumnWidth:function(i,j){var j=j||0;
var k=null;

if(typeof i==c){this.setWidth(i);
}else if(typeof i==d){if(i==e){j=1;
}else{var l=i.match(/^[0-9]+(?:\.[0-9]+)?([%\*])$/);

if(l){if(l[1]==b){j=parseFloat(i);
}else{k=i;
}}}}this.setLayoutProperties({flex:j,width:k});
}},environment:{"qx.tableResizeDebug":false}});
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
(function(){var j="Function",h="Boolean",g="minWidth",f="width",e="qx.ui.table.columnmodel.Resize",d="qx.ui.table.columnmodel.resizebehavior.Default",c="__nJ",b="__nK",a="maxWidth";
qx.Class.define(d,{extend:qx.ui.table.columnmodel.resizebehavior.Abstract,construct:function(){qx.ui.table.columnmodel.resizebehavior.Abstract.call(this);
this.__nI=[];
this.__nJ=new qx.ui.layout.HBox();
this.__nJ.connectToWidget(this);
this.__nK=new qx.util.DeferredCall(this._computeColumnsFlexWidth,this);
},properties:{newResizeBehaviorColumnData:{check:j,init:function(k){return new qx.ui.core.ColumnData();
}},initializeWidthsOnEveryAppear:{check:h,init:false},tableColumnModel:{check:e}},members:{__nJ:null,__nL:null,__nI:null,__nK:null,__nM:false,setWidth:function(m,n,o){if(m>=this.__nI.length){throw new Error("Column number out of range");
}this.__nI[m].setColumnWidth(n,o);
this.__nK.schedule();
},setMinWidth:function(p,q){if(p>=this.__nI.length){throw new Error("Column number out of range");
}this.__nI[p].setMinWidth(q);
this.__nK.schedule();
},setMaxWidth:function(r,s){if(r>=this.__nI.length){throw new Error("Column number out of range");
}this.__nI[r].setMaxWidth(s);
this.__nK.schedule();
},set:function(t,u){for(var v in u){switch(v){case f:this.setWidth(t,u[v]);
break;
case g:this.setMinWidth(t,u[v]);
break;
case a:this.setMaxWidth(t,u[v]);
break;
default:throw new Error("Unknown property: "+v);
}}},onAppear:function(event,w){if(w===true||!this.__nM||this.getInitializeWidthsOnEveryAppear()){this._computeColumnsFlexWidth();
this.__nM=true;
}},onTableWidthChanged:function(event){this._computeColumnsFlexWidth();
},onVerticalScrollBarChanged:function(event){this._computeColumnsFlexWidth();
},onColumnWidthChanged:function(event){this._extendNextColumn(event);
},onVisibilityChanged:function(event){var x=event.getData();
if(x.visible){this._computeColumnsFlexWidth();
return;
}this._extendLastColumn(event);
},_setNumColumns:function(y){var z=this.__nI;
if(y<=z.length){z.splice(y,z.length);
return;
}for(var i=z.length;i<y;i++){z[i]=this.getNewResizeBehaviorColumnData()();
z[i].columnNumber=i;
}},getLayoutChildren:function(){return this.__nL;
},_computeColumnsFlexWidth:function(){this.__nK.cancel();
var E=this._getAvailableWidth();

if(E===null){return;
}var A=this.getTableColumnModel();
var C=A.getVisibleColumns();
var D=C.length;
var B=this.__nI;
var i,l;

if(D===0){return;
}var G=[];

for(i=0;i<D;i++){G.push(B[C[i]]);
}this.__nL=G;
this.__nN();
this.__nJ.renderLayout(E,100);
for(i=0,l=G.length;i<l;i++){var F=G[i].getComputedWidth();
A.setColumnWidth(C[i],F);
}},__nN:function(){this.__nJ.invalidateChildrenCache();
var H=this.__nL;

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
}},_getResizeColumnData:function(){return this.__nI;
}},destruct:function(){this.__nI=this.__nL=null;
this._disposeObjects(c,b);
}});
})();
(function(){var k="qx.event.type.Data",j="visibilityChanged",h="orderChanged",g="visibilityChangedPre",f="widthChanged",e="qx.ui.table.columnmodel.Basic",d="__nD",c="__nC",b="headerCellRendererChanged",a="__nE";
qx.Class.define(e,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__ny=[];
this.__nz=[];
},events:{"widthChanged":k,"visibilityChangedPre":k,"visibilityChanged":k,"orderChanged":k,"headerCellRendererChanged":k},statics:{DEFAULT_WIDTH:100,DEFAULT_HEADER_RENDERER:qx.ui.table.headerrenderer.Default,DEFAULT_DATA_RENDERER:qx.ui.table.cellrenderer.Default,DEFAULT_EDITOR_FACTORY:qx.ui.table.celleditor.TextField},members:{__mR:null,__nA:null,__nz:null,__ny:null,__nB:null,__nC:null,__nD:null,__nE:null,init:function(l,m){this.__nB=[];
var q=qx.ui.table.columnmodel.Basic.DEFAULT_WIDTH;
var r=this.__nC||(this.__nC=new qx.ui.table.columnmodel.Basic.DEFAULT_HEADER_RENDERER());
var o=this.__nD||(this.__nD=new qx.ui.table.columnmodel.Basic.DEFAULT_DATA_RENDERER());
var n=this.__nE||(this.__nE=new qx.ui.table.columnmodel.Basic.DEFAULT_EDITOR_FACTORY());
this.__ny=[];
this.__nz=[];
var t;
if(m){t=m.getInitiallyHiddenColumns();
}t=t||[];

for(var u=0;u<l;u++){this.__nB[u]={width:q,headerRenderer:r,dataRenderer:o,editorFactory:n};
this.__ny[u]=u;
this.__nz[u]=u;
}this.__nA=null;
this.__mR=true;

for(var s=0;s<t.length;s++){this.setColumnVisible(t[s],false);
}this.__mR=false;

for(u=0;u<l;u++){var p={col:u,visible:this.isColumnVisible(u)};
this.fireDataEvent(g,p);
this.fireDataEvent(j,p);
}},getVisibleColumns:function(){return this.__nz!=null?this.__nz:[];
},setColumnWidth:function(v,w,y){var A=this.__nB[v].width;

if(A!=w){this.__nB[v].width=w;
var z={col:v,newWidth:w,oldWidth:A,isMouseAction:y||false};
this.fireDataEvent(f,z);
}},getColumnWidth:function(B){return this.__nB[B].width;
},setHeaderCellRenderer:function(C,D){var E=this.__nB[C].headerRenderer;

if(E!==this.__nC){E.dispose();
}this.__nB[C].headerRenderer=D;
this.fireDataEvent(b,{col:C});
},getHeaderCellRenderer:function(F){return this.__nB[F].headerRenderer;
},setDataCellRenderer:function(G,H){this.__nB[G].dataRenderer=H;
var I=this.__nB[G].dataRenderer;

if(I!==this.__nD){return I;
}return null;
},getDataCellRenderer:function(J){return this.__nB[J].dataRenderer;
},setCellEditorFactory:function(K,L){var M=this.__nB[K].headerRenderer;

if(M!==this.__nE){M.dispose();
}this.__nB[K].editorFactory=L;
},getCellEditorFactory:function(N){return this.__nB[N].editorFactory;
},_getColToXPosMap:function(){if(this.__nA==null){this.__nA={};

for(var Q=0;Q<this.__ny.length;Q++){var P=this.__ny[Q];
this.__nA[P]={overX:Q};
}
for(var O=0;O<this.__nz.length;O++){var P=this.__nz[O];
this.__nA[P].visX=O;
}}return this.__nA;
},getVisibleColumnCount:function(){return this.__nz!=null?this.__nz.length:0;
},getVisibleColumnAtX:function(R){return this.__nz[R];
},getVisibleX:function(S){return this._getColToXPosMap()[S].visX;
},getOverallColumnCount:function(){return this.__ny.length;
},getOverallColumnAtX:function(T){return this.__ny[T];
},getOverallX:function(U){return this._getColToXPosMap()[U].overX;
},isColumnVisible:function(V){return (this._getColToXPosMap()[V].visX!=null);
},setColumnVisible:function(W,X){if(X!=this.isColumnVisible(W)){if(X){var be=this._getColToXPosMap();
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
}this.__nA=null;
if(!this.__mR){var bf={col:W,visible:X};
this.fireDataEvent(g,bf);
this.fireDataEvent(j,bf);
}}},moveColumn:function(bg,bh){this.__mR=true;
var bk=this.__ny[bg];
var bi=this.isColumnVisible(bk);

if(bi){this.setColumnVisible(bk,false);
}this.__ny.splice(bg,1);
this.__ny.splice(bh,0,bk);
this.__nA=null;

if(bi){this.setColumnVisible(bk,true);
}this.__mR=false;
var bj={col:bk,fromOverXPos:bg,toOverXPos:bh};
this.fireDataEvent(h,bj);
},setColumnsOrder:function(bl){if(bl.length==this.__ny.length){this.__mR=true;
var bo=new Array(bl.length);

for(var bm=0;bm<this.__ny.length;bm++){var bn=this.isColumnVisible(bm);
bo[bm]=bn;

if(bn){this.setColumnVisible(bm,false);
}}this.__ny=qx.lang.Array.clone(bl);
this.__nA=null;
for(var bm=0;bm<this.__ny.length;bm++){if(bo[bm]){this.setColumnVisible(bm,true);
}}this.__mR=false;
this.fireDataEvent(h);
}else{throw new Error("setColumnsOrder: Invalid number of column positions given, expected "+this.__ny.length+", got "+bl.length);
}}},destruct:function(){for(var i=0;i<this.__nB.length;i++){this.__nB[i].headerRenderer.dispose();
this.__nB[i].dataRenderer.dispose();
this.__nB[i].editorFactory.dispose();
}this.__ny=this.__nz=this.__nB=this.__nA=null;
this._disposeObjects(c,d,a);
}});
})();
(function(){var b="qx.ui.table.selection.Model",a="qx.ui.table.selection.Manager";
qx.Class.define(a,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
},properties:{selectionModel:{check:b}},members:{__oz:null,handleMouseDown:function(c,d){if(d.isLeftPressed()){var e=this.getSelectionModel();

if(!e.isSelectedIndex(c)){this._handleSelectEvent(c,d);
this.__oz=true;
}else{this.__oz=false;
}}else if(d.isRightPressed()&&d.getModifiers()==0){var e=this.getSelectionModel();

if(!e.isSelectedIndex(c)){e.setSelectionInterval(c,c);
}}},handleMouseUp:function(f,g){if(g.isLeftPressed()&&!this.__oz){this._handleSelectEvent(f,g);
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
(function(){var n="]",m="..",l="changeSelection",k=" [",h='ie',g="browser.version",f="qx.event.type.Event",d="Ranges:",c="qx.ui.table.selection.Model",b="browser.name",a="_applySelectionMode";
qx.Class.define(c,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__oA=[];
this.__oB=-1;
this.__oC=-1;
this.hasBatchModeRefCount=0;
this.__oD=false;
},events:{"changeSelection":f},statics:{NO_SELECTION:1,SINGLE_SELECTION:2,SINGLE_INTERVAL_SELECTION:3,MULTIPLE_INTERVAL_SELECTION:4,MULTIPLE_INTERVAL_SELECTION_TOGGLE:5},properties:{selectionMode:{init:2,check:[1,2,3,4,5],apply:a}},members:{__oD:null,__oB:null,__oC:null,__oA:null,_applySelectionMode:function(o){this.resetSelection();
},setBatchMode:function(p){if(p){this.hasBatchModeRefCount+=1;
}else{if(this.hasBatchModeRefCount==0){throw new Error("Try to turn off batch mode althoug it was not turned on.");
}this.hasBatchModeRefCount-=1;

if(this.__oD){this.__oD=false;
this._fireChangeSelection();
}}return this.hasBatchMode();
},hasBatchMode:function(){return this.hasBatchModeRefCount>0;
},getAnchorSelectionIndex:function(){return this.__oB;
},_setAnchorSelectionIndex:function(q){this.__oB=q;
},getLeadSelectionIndex:function(){return this.__oC;
},_setLeadSelectionIndex:function(r){this.__oC=r;
},_getSelectedRangeArr:function(){return this.__oA;
},resetSelection:function(){if(!this.isSelectionEmpty()){this._resetSelection();
this._fireChangeSelection();
}},isSelectionEmpty:function(){return this.__oA.length==0;
},getSelectedCount:function(){var t=0;

for(var i=0;i<this.__oA.length;i++){var s=this.__oA[i];
t+=s.maxIndex-s.minIndex+1;
}return t;
},isSelectedIndex:function(u){for(var i=0;i<this.__oA.length;i++){var v=this.__oA[i];

if(u>=v.minIndex&&u<=v.maxIndex){return true;
}}return false;
},getSelectedRanges:function(){var w=[];

for(var i=0;i<this.__oA.length;i++){w.push({minIndex:this.__oA[i].minIndex,maxIndex:this.__oA[i].maxIndex});
}return w;
},iterateSelection:function(x,y){for(var i=0;i<this.__oA.length;i++){for(var j=this.__oA[i].minIndex;j<=this.__oA[i].maxIndex;j++){x.call(y,j);
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
}},removeSelectionInterval:function(F,G){this.__oB=F;
this.__oC=G;
var H=Math.min(F,G);
var J=Math.max(F,G);
for(var i=0;i<this.__oA.length;i++){var L=this.__oA[i];

if(L.minIndex>J){break;
}else if(L.maxIndex>=H){var M=(L.minIndex>=H)&&(L.minIndex<=J);
var K=(L.maxIndex>=H)&&(L.maxIndex<=J);

if(M&&K){this.__oA.splice(i,1);
i--;
}else if(M){L.minIndex=J+1;
}else if(K){L.maxIndex=H-1;
}else{var I={minIndex:J+1,maxIndex:L.maxIndex};
this.__oA.splice(i+1,0,I);
L.maxIndex=H-1;
break;
}}}this._fireChangeSelection();
},_resetSelection:function(){this.__oA=[];
this.__oB=-1;
this.__oC=-1;
},_addSelectionInterval:function(N,O){this.__oB=N;
this.__oC=O;
var P=Math.min(N,O);
var R=Math.max(N,O);
var Q=0;

for(;Q<this.__oA.length;Q++){var S=this.__oA[Q];

if(S.minIndex>P){break;
}}this.__oA.splice(Q,0,{minIndex:P,maxIndex:R});
var T=this.__oA[0];

for(var i=1;i<this.__oA.length;i++){var S=this.__oA[i];

if(T.maxIndex+1>=S.minIndex){T.maxIndex=Math.max(T.maxIndex,S.maxIndex);
this.__oA.splice(i,1);
i--;
}else{T=S;
}}},_dumpRanges:function(){var U=d;

for(var i=0;i<this.__oA.length;i++){var V=this.__oA[i];
U+=k+V.minIndex+m+V.maxIndex+n;
}this.debug(U);
},_fireChangeSelection:function(){if(this.hasBatchMode()){this.__oD=true;
}else{this.fireEvent(l);
}}},destruct:function(){this.__oA=null;
}});
})();
(function(){var n="appear",m="columnVisibilityMenuCreateEnd",l="tableWidthChanged",k="verticalScrollBarChanged",j="qx.ui.table.columnmodel.resizebehavior.Abstract",i="qx.ui.table.columnmodel.Resize",h="_applyBehavior",g="separator",f="visibilityChanged",e="Reset column widths",b="changeBehavior",d="user-button",c="widthChanged",a="execute";
qx.Class.define(i,{extend:qx.ui.table.columnmodel.Basic,include:qx.locale.MTranslation,construct:function(){qx.ui.table.columnmodel.Basic.call(this);
this.__nF=false;
this.__nG=false;
},properties:{behavior:{check:j,init:null,nullable:true,apply:h,event:b}},members:{__nG:null,__nF:null,__ml:null,_applyBehavior:function(p,q){if(q!=null){q.dispose();
q=null;
}p._setNumColumns(this.getOverallColumnCount());
p.setTableColumnModel(this);
},init:function(r,s){qx.ui.table.columnmodel.Basic.prototype.init.call(this,r,s);

if(this.__ml==null){this.__ml=s;
s.addListener(n,this._onappear,this);
s.addListener(l,this._onTableWidthChanged,this);
s.addListener(k,this._onverticalscrollbarchanged,this);
s.addListener(m,this._addResetColumnWidthButton,this);
this.addListener(c,this._oncolumnwidthchanged,this);
this.addListener(f,this._onvisibilitychanged,this);
}if(this.getBehavior()==null){this.setBehavior(new qx.ui.table.columnmodel.resizebehavior.Default());
}this.getBehavior()._setNumColumns(r);
},getTable:function(){return this.__ml;
},_addResetColumnWidthButton:function(event){var v=event.getData();
var u=v.columnButton;
var t=v.menu;
var o;
o=u.factory(g);
t.add(o);
o=u.factory(d,{text:this.tr(e)});
t.add(o);
o.addListener(a,this._onappear,this);
},_onappear:function(event){if(this.__nF){return ;
}this.__nF=true;
this.getBehavior().onAppear(event,event.getType()!==n);
this.__ml._updateScrollerWidths();
this.__ml._updateScrollBarVisibility();
this.__nF=false;
this.__nG=true;
},_onTableWidthChanged:function(event){if(this.__nF||!this.__nG){return ;
}this.__nF=true;
this.getBehavior().onTableWidthChanged(event);
this.__nF=false;
},_onverticalscrollbarchanged:function(event){if(this.__nF||!this.__nG){return ;
}this.__nF=true;
this.getBehavior().onVerticalScrollBarChanged(event);
qx.event.Timer.once(function(){if(this.__ml&&!this.__ml.isDisposed()){this.__ml._updateScrollerWidths();
this.__ml._updateScrollBarVisibility();
}},this,0);
this.__nF=false;
},_oncolumnwidthchanged:function(event){if(this.__nF||!this.__nG){return ;
}this.__nF=true;
this.getBehavior().onColumnWidthChanged(event);
this.__nF=false;
},_onvisibilitychanged:function(event){if(this.__nF||!this.__nG){return ;
}this.__nF=true;
this.getBehavior().onVisibilityChanged(event);
this.__nF=false;
}},destruct:function(){this.__ml=null;
}});
})();
(function(){var e="metaDataChanged",d="qx.event.type.Data",c="qx.event.type.Event",b="abstract",a="qx.ui.table.model.Abstract";
qx.Class.define(a,{type:b,extend:qx.core.Object,implement:qx.ui.table.ITableModel,events:{"dataChanged":d,"metaDataChanged":c,"sorted":d},construct:function(){qx.core.Object.call(this);
this.__mO=[];
this.__mP=[];
this.__mQ={};
},members:{__mO:null,__mP:null,__mQ:null,__mR:null,init:function(f){},getRowCount:function(){throw new Error("getRowCount is abstract");
},getRowData:function(g){return null;
},isColumnEditable:function(h){return false;
},isColumnSortable:function(j){return false;
},sortByColumn:function(k,l){},getSortColumnIndex:function(){return -1;
},isSortAscending:function(){return true;
},prefetchRows:function(m,n){},getValue:function(o,p){throw new Error("getValue is abstract");
},getValueById:function(q,r){return this.getValue(this.getColumnIndexById(q),r);
},setValue:function(s,t,u){throw new Error("setValue is abstract");
},setValueById:function(v,w,x){this.setValue(this.getColumnIndexById(v),w,x);
},getColumnCount:function(){return this.__mO.length;
},getColumnIndexById:function(y){return this.__mQ[y];
},getColumnId:function(z){return this.__mO[z];
},getColumnName:function(A){return this.__mP[A];
},setColumnIds:function(B){this.__mO=B;
this.__mQ={};

for(var i=0;i<B.length;i++){this.__mQ[B[i]]=i;
}this.__mP=new Array(B.length);
if(!this.__mR){this.fireEvent(e);
}},setColumnNamesByIndex:function(C){if(this.__mO.length!=C.length){throw new Error("this.__columnIdArr and columnNameArr have different length: "+this.__mO.length+" != "+C.length);
}this.__mP=C;
this.fireEvent(e);
},setColumnNamesById:function(D){this.__mP=new Array(this.__mO.length);

for(var i=0;i<this.__mO.length;++i){this.__mP[i]=D[this.__mO[i]];
}},setColumns:function(E,F){var G=this.__mO.length==0||F;

if(F==null){if(this.__mO.length==0){F=E;
}else{F=this.__mO;
}}
if(F.length!=E.length){throw new Error("columnIdArr and columnNameArr have different length: "+F.length+" != "+E.length);
}
if(G){this.__mR=true;
this.setColumnIds(F);
this.__mR=false;
}this.setColumnNamesByIndex(E);
}},destruct:function(){this.__mO=this.__mP=this.__mQ=null;
}});
})();
(function(){var e="dataChanged",d="metaDataChanged",c="qx.ui.table.model.Simple",b="Boolean",a="sorted";
qx.Class.define(c,{extend:qx.ui.table.model.Abstract,construct:function(){qx.ui.table.model.Abstract.call(this);
this.__mS=[];
this.__mT=-1;
this.__mU=[];
this.__mV=null;
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
}},members:{__mS:null,__mV:null,__mW:null,__mU:null,__mT:null,__mX:null,getRowData:function(B){var C=this.__mS[B];

if(C==null||C.originalData==null){return C;
}else{return C.originalData;
}},getRowDataAsMap:function(D){var F=this.__mS[D];

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
},setEditable:function(K){this.__mV=[];

for(var L=0;L<this.getColumnCount();L++){this.__mV[L]=K;
}this.fireEvent(d);
},setColumnEditable:function(M,N){if(N!=this.isColumnEditable(M)){if(this.__mV==null){this.__mV=[];
}this.__mV[M]=N;
this.fireEvent(d);
}},isColumnEditable:function(O){return this.__mV?(this.__mV[O]==true):false;
},setColumnSortable:function(P,Q){if(Q!=this.isColumnSortable(P)){if(this.__mW==null){this.__mW=[];
}this.__mW[P]=Q;
this.fireEvent(d);
}},isColumnSortable:function(R){return (this.__mW?(this.__mW[R]!==false):true);
},sortByColumn:function(S,T){var W;
var V=this.__mU[S];

if(V){W=(T?V.ascending:V.descending);
}else{if(this.getCaseSensitiveSorting()){W=(T?qx.ui.table.model.Simple._defaultSortComparatorAscending:qx.ui.table.model.Simple._defaultSortComparatorDescending);
}else{W=(T?qx.ui.table.model.Simple._defaultSortComparatorInsensitiveAscending:qx.ui.table.model.Simple._defaultSortComparatorInsensitiveDescending);
}}W.columnIndex=S;
this.__mS.sort(W);
this.__mT=S;
this.__mX=T;
var U={columnIndex:S,ascending:T};
this.fireDataEvent(a,U);
this.fireEvent(d);
},setSortMethods:function(X,Y){var ba;

if(qx.lang.Type.isFunction(Y)){ba={ascending:Y,descending:function(bb,bc){return Y(bc,bb);
}};
}else{ba=Y;
}this.__mU[X]=ba;
},getSortMethods:function(bd){return this.__mU[bd];
},clearSorting:function(){if(this.__mT!=-1){this.__mT=-1;
this.__mX=true;
this.fireEvent(d);
}},getSortColumnIndex:function(){return this.__mT;
},_setSortColumnIndex:function(be){this.__mT=be;
},isSortAscending:function(){return this.__mX;
},_setSortAscending:function(bf){this.__mX=bf;
},getRowCount:function(){return this.__mS.length;
},getValue:function(bg,bh){if(bh<0||bh>=this.__mS.length){throw new Error("this.__rowArr out of bounds: "+bh+" (0.."+this.__mS.length+")");
}return this.__mS[bh][bg];
},setValue:function(bi,bj,bk){if(this.__mS[bj][bi]!=bk){this.__mS[bj][bi]=bk;
if(this.hasListener(e)){var bl={firstRow:bj,lastRow:bj,firstColumn:bi,lastColumn:bi};
this.fireDataEvent(e,bl);
}
if(bi==this.__mT){this.clearSorting();
}}},setData:function(bm,bn){this.__mS=bm;
if(this.hasListener(e)){var bo={firstRow:0,lastRow:bm.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(e,bo);
}
if(bn!==false){this.clearSorting();
}},getData:function(){return this.__mS;
},setDataAsMapArray:function(bp,bq,br){this.setData(this._mapArray2RowArr(bp,bq),br);
},addRows:function(bs,bt,bu){if(bt==null){bt=this.__mS.length;
}bs.splice(0,0,bt,0);
Array.prototype.splice.apply(this.__mS,bs);
var bv={firstRow:bt,lastRow:this.__mS.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(e,bv);

if(bu!==false){this.clearSorting();
}},addRowsAsMapArray:function(bw,bx,by,bz){this.addRows(this._mapArray2RowArr(bw,by),bx,bz);
},setRows:function(bA,bB,bC){if(bB==null){bB=0;
}bA.splice(0,0,bB,bA.length);
Array.prototype.splice.apply(this.__mS,bA);
var bD={firstRow:bB,lastRow:this.__mS.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(e,bD);

if(bC!==false){this.clearSorting();
}},setRowsAsMapArray:function(bE,bF,bG,bH){this.setRows(this._mapArray2RowArr(bE,bG),bF,bH);
},removeRows:function(bI,bJ,bK){this.__mS.splice(bI,bJ);
var bL={firstRow:bI,lastRow:this.__mS.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1,removeStart:bI,removeCount:bJ};
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
}},destruct:function(){this.__mS=this.__mV=this.__mU=this.__mW=null;
}});
})();
(function(){var a="qx.ui.table.IRowRenderer";
qx.Interface.define(a,{members:{updateDataRowElement:function(b,c){},getRowHeightStyle:function(d){},createRowStyle:function(e){},getRowClass:function(f){}}});
})();
(function(){var f="menu-button",e="table-column-reset-button",d="separator",c="user-button",b="qx.ui.table.columnmenu.Button",a="menu";
qx.Class.define(b,{extend:qx.ui.form.MenuButton,implement:qx.ui.table.IColumnMenuButton,construct:function(){qx.ui.form.MenuButton.call(this);
this.__jz=new qx.ui.core.Blocker(this);
},members:{__nV:null,__jz:null,factory:function(g,h){switch(g){case a:var j=new qx.ui.menu.Menu();
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
}},getBlocker:function(){return this.__jz;
},empty:function(){var n=this.getMenu();
var o=n.getChildren();

for(var i=0,l=o.length;i<l;i++){o[0].destroy();
}}},destruct:function(){this.__jz.dispose();
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
(function(){var o="Boolean",n="resize-line",m="mousedown",l="qx.event.type.Data",k="mouseup",j="qx.ui.table.pane.CellEvent",i="scroll",h="focus-indicator",g="excluded",d="scrollbar-y",bq="table-scroller-focus-indicator",bp="visible",bo="mousemove",bn="header",bm="editing",bl="click",bk="modelChanged",bj="scrollbar-x",bi="cellClick",bh="pane",v="__oU",w="__oT",t="__oV",u="mouseout",r="changeHorizontalScrollBarVisible",s="bottom",p="_applyScrollTimeout",q="changeScrollX",C="_applyTablePaneModel",D="Integer",M="dblclick",J="dataEdited",U="__oO",P="mousewheel",bd="interval",ba="__oR",F="qx.ui.table.pane.Scroller",bg="_applyShowCellFocusIndicator",bf="y",be="__oQ",E="__oP",H="resize",I="__iz",L="vertical",N="changeScrollY",Q="__oW",W="appear",bc="table-scroller",y="beforeSort",z="cellDblclick",G="horizontal",T="losecapture",S="contextmenu",R="col-resize",Y="disappear",X="_applyVerticalScrollBarVisible",O="_applyHorizontalScrollBarVisible",V="os.scrollBarOverlayed",a="cellContextmenu",bb="close",A="changeTablePaneModel",B="__oS",K="x",b="qx.ui.table.pane.Model",c="changeVerticalScrollBarVisible";
qx.Class.define(F,{extend:qx.ui.core.Widget,include:qx.ui.core.scroll.MScrollBarFactory,construct:function(br){qx.ui.core.Widget.call(this);
this.__ml=br;
var bs=new qx.ui.layout.Grid();
bs.setColumnFlex(0,1);
bs.setRowFlex(1,1);
this._setLayout(bs);
this.__oO=this._showChildControl(bn);
this.__oP=this._showChildControl(bh);
this.__oQ=new qx.ui.container.Composite(new qx.ui.layout.HBox()).set({minWidth:0});
this._add(this.__oQ,{row:0,column:0,colSpan:2});
this.__oR=new qx.ui.table.pane.Clipper();
this.__oR.add(this.__oO);
this.__oR.addListener(T,this._onChangeCaptureHeader,this);
this.__oR.addListener(bo,this._onMousemoveHeader,this);
this.__oR.addListener(m,this._onMousedownHeader,this);
this.__oR.addListener(k,this._onMouseupHeader,this);
this.__oR.addListener(bl,this._onClickHeader,this);
this.__oQ.add(this.__oR,{flex:1});
this.__oS=new qx.ui.table.pane.Clipper();
this.__oS.add(this.__oP);
this.__oS.addListener(P,this._onMousewheel,this);
this.__oS.addListener(bo,this._onMousemovePane,this);
this.__oS.addListener(m,this._onMousedownPane,this);
this.__oS.addListener(k,this._onMouseupPane,this);
this.__oS.addListener(bl,this._onClickPane,this);
this.__oS.addListener(S,this._onContextMenu,this);
this.__oS.addListener(M,this._onDblclickPane,this);
this.__oS.addListener(H,this._onResizePane,this);
if(qx.core.Environment.get(V)){this.__oT=new qx.ui.container.Composite();
this.__oT.setLayout(new qx.ui.layout.Canvas());
this.__oT.add(this.__oS,{edge:0});
this._add(this.__oT,{row:1,column:0});
}else{this._add(this.__oS,{row:1,column:0});
}this.__oU=this._showChildControl(bj);
this.__oV=this._showChildControl(d);
this.__oW=this.getChildControl(h);
this.initShowCellFocusIndicator();
this.getChildControl(n).hide();
this.addListener(u,this._onMouseout,this);
this.addListener(W,this._onAppear,this);
this.addListener(Y,this._onDisappear,this);
this.__iz=new qx.event.Timer();
this.__iz.addListener(bd,this._oninterval,this);
this.initScrollTimeout();
},statics:{MIN_COLUMN_WIDTH:10,RESIZE_REGION_RADIUS:5,CLICK_TOLERANCE:5,HORIZONTAL_SCROLLBAR:1,VERTICAL_SCROLLBAR:2},events:{"changeScrollY":l,"changeScrollX":l,"cellClick":j,"cellDblclick":j,"cellContextmenu":j,"beforeSort":l},properties:{horizontalScrollBarVisible:{check:o,init:false,apply:O,event:r},verticalScrollBarVisible:{check:o,init:false,apply:X,event:c},tablePaneModel:{check:b,apply:C,event:A},liveResize:{check:o,init:false},focusCellOnMouseMove:{check:o,init:false},selectBeforeFocus:{check:o,init:false},showCellFocusIndicator:{check:o,init:true,apply:bg},contextMenuFromDataCellsOnly:{check:o,init:true},resetSelectionOnHeaderClick:{check:o,init:true},scrollTimeout:{check:D,init:100,apply:p},appearance:{refine:true,init:bc}},members:{__nU:null,__ml:null,__oX:null,__oY:null,__pa:null,__pb:null,__pc:null,__pd:null,__pe:null,__pf:null,__pg:null,__ph:null,__pi:null,__pj:null,__pk:false,__pl:null,__pm:null,__pn:null,__nQ:null,__nR:null,__po:null,__pp:null,__pq:null,__oU:null,__oV:null,__oO:null,__oR:null,__oP:null,__oS:null,__oT:null,__oW:null,__oQ:null,__iz:null,getPaneInsetRight:function(){var bv=this.getTopRightWidget();
var bw=bv&&bv.isVisible()&&bv.getBounds()?bv.getBounds().width+bv.getMarginLeft()+bv.getMarginRight():0;
var bu=this.__oV;
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
this.__oS.add(bA);
bA.show();
bA.setDecorator(null);
break;
case n:bA=new qx.ui.core.Widget();
bA.setUserBounds(0,0,0,0);
bA.setZIndex(1000);
this.__oS.add(bA);
break;
case bj:bA=this._createScrollBar(G).set({minWidth:0,alignY:s});
bA.addListener(i,this._onScrollX,this);

if(this.__oT!=null){bA.setMinHeight(qx.bom.element.Overflow.DEFAULT_SCROLLBAR_WIDTH);
this.__oT.add(bA,{bottom:0,right:0,left:0});
}else{this._add(bA,{row:2,column:0});
}break;
case d:bA=this._createScrollBar(L);
bA.addListener(i,this._onScrollY,this);

if(this.__oT!=null){bA.setMinWidth(qx.bom.element.Overflow.DEFAULT_SCROLLBAR_WIDTH);
this.__oT.add(bA,{right:0,bottom:0,top:0});
}else{this._add(bA,{row:1,column:1});
}break;
}return bA||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,by);
},_applyHorizontalScrollBarVisible:function(bB,bC){this.__oU.setVisibility(bB?bp:g);
},_applyVerticalScrollBarVisible:function(bD,bE){this.__oV.setVisibility(bD?bp:g);
},_applyTablePaneModel:function(bF,bG){if(bG!=null){bG.removeListener(bk,this._onPaneModelChanged,this);
}bF.addListener(bk,this._onPaneModelChanged,this);
},_applyShowCellFocusIndicator:function(bH,bI){if(bH){this.__oW.setDecorator(bq);
this._updateFocusIndicator();
}else{if(this.__oW){this.__oW.setDecorator(null);
}}},getScrollY:function(){return this.__oV.getPosition();
},setScrollY:function(scrollY,bJ){this.__oV.scrollTo(scrollY);

if(bJ){this._updateContent();
}},getScrollX:function(){return this.__oU.getPosition();
},setScrollX:function(scrollX){this.__oU.scrollTo(scrollX);
},getTable:function(){return this.__ml;
},onColVisibilityChanged:function(){this.updateHorScrollBarMaximum();
this._updateFocusIndicator();
},setColumnWidth:function(bK,bL){this.__oO.setColumnWidth(bK,bL);
this.__oP.setColumnWidth(bK,bL);
var bM=this.getTablePaneModel();
var x=bM.getX(bK);

if(x!=-1){this.updateHorScrollBarMaximum();
this._updateFocusIndicator();
}},onColOrderChanged:function(){this.__oO.onColOrderChanged();
this.__oP.onColOrderChanged();
this.updateHorScrollBarMaximum();
},onTableModelDataChanged:function(bN,bO,bP,bQ){this.__oP.onTableModelDataChanged(bN,bO,bP,bQ);
var bR=this.getTable().getTableModel().getRowCount();

if(bR!=this.__nU){this.updateVerScrollBarMaximum();

if(this.getFocusedRow()>=bR){if(bR==0){this.setFocusedCell(null,null);
}else{this.setFocusedCell(this.getFocusedColumn(),bR-1);
}}this.__nU=bR;
}},onSelectionChanged:function(){this.__oP.onSelectionChanged();
},onFocusChanged:function(){this.__oP.onFocusChanged();
},onTableModelMetaDataChanged:function(){this.__oO.onTableModelMetaDataChanged();
this.__oP.onTableModelMetaDataChanged();
},_onPaneModelChanged:function(){this.__oO.onPaneModelChanged();
this.__oP.onPaneModelChanged();
},_onResizePane:function(){this.updateHorScrollBarMaximum();
this.updateVerScrollBarMaximum();
this._updateContent();
this.__oO._updateContent();
this.__ml._updateScrollBarVisibility();
},updateHorScrollBarMaximum:function(){var bV=this.__oS.getInnerSize();

if(!bV){return ;
}var bT=this.getTablePaneModel().getTotalWidth();
var bU=this.__oU;

if(bV.width<bT){var bS=Math.max(0,bT-bV.width);
bU.setMaximum(bS);
bU.setKnobFactor(bV.width/bT);
var bW=bU.getPosition();
bU.setPosition(Math.min(bW,bS));
}else{bU.setMaximum(0);
bU.setKnobFactor(1);
bU.setPosition(0);
}},updateVerScrollBarMaximum:function(){var cf=this.__oS.getInnerSize();

if(!cf){return ;
}var cd=this.getTable().getTableModel();
var bY=cd.getRowCount();

if(this.getTable().getKeepFirstVisibleRowComplete()){bY+=1;
}var bX=this.getTable().getRowHeight();
var cb=bY*bX;
var ce=this.__oV;

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
this.__oR.scrollToX(cg);
this.__oS.scrollToX(cg);
},_onScrollY:function(e){this.fireDataEvent(N,e.getData(),e.getOldData());
this._postponedUpdateContent();
},_onMousewheel:function(e){var ch=this.getTable();

if(!ch.getEnabled()){return;
}var ck=e.getWheelDelta(bf);
if(ck>0&&ck<1){ck=1;
}else if(ck<0&&ck>-1){ck=-1;
}this.__oV.scrollBySteps(ck);
ck=e.getWheelDelta(K);
if(ck>0&&ck<1){ck=1;
}else if(ck<0&&ck>-1){ck=-1;
}this.__oU.scrollBySteps(ck);
if(this.__pm&&this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(this.__pm,this.__pn);
}var cj=this.__oV.getPosition();
var ci=this.__oV.getMaximum();
if(ck<0&&cj<=0||ck>0&&cj>=ci){return;
}e.stop();
},__pr:function(cl){var cq=this.getTable();
var cr=this.__oO.getHeaderWidgetAtColumn(this.__pg);
var cm=cr.getSizeHint().minWidth;
var co=Math.max(cm,this.__pi+cl-this.__ph);

if(this.getLiveResize()){var cn=cq.getTableColumnModel();
cn.setColumnWidth(this.__pg,co,true);
}else{this.__oO.setColumnWidth(this.__pg,co,true);
var cp=this.getTablePaneModel();
this._showResizeLine(cp.getColumnLeft(this.__pg)+co);
}this.__ph+=co-this.__pi;
this.__pi=co;
},__ps:function(cs){var ct=qx.ui.table.pane.Scroller.CLICK_TOLERANCE;

if(this.__oO.isShowingColumnMoveFeedback()||cs>this.__pf+ct||cs<this.__pf-ct){this.__pc+=cs-this.__pf;
this.__oO.showColumnMoveFeedback(this.__pb,this.__pc);
var cu=this.__ml.getTablePaneScrollerAtPageX(cs);

if(this.__pe&&this.__pe!=cu){this.__pe.hideColumnMoveFeedback();
}
if(cu!=null){this.__pd=cu.showColumnMoveFeedback(cs);
}else{this.__pd=null;
}this.__pe=cu;
this.__pf=cs;
}},_onMousemoveHeader:function(e){var cB=this.getTable();

if(!cB.getEnabled()){return;
}var cC=false;
var cv=null;
var cz=e.getDocumentLeft();
var cA=e.getDocumentTop();
this.__pm=cz;
this.__pn=cA;

if(this.__pg!=null){this.__pr(cz);
cC=true;
e.stopPropagation();
}else if(this.__pb!=null){this.__ps(cz);
e.stopPropagation();
}else{var cw=this._getResizeColumnForPageX(cz);

if(cw!=-1){cC=true;
}else{var cy=cB.getTableModel();
var cD=this._getColumnForPageX(cz);

if(cD!=null&&cy.isColumnSortable(cD)){cv=cD;
}}}var cx=cC?R:null;
this.getApplicationRoot().setGlobalCursor(cx);
this.setCursor(cx);
this.__oO.setMouseOverColumn(cv);
},_onMousemovePane:function(e){var cE=this.getTable();

if(!cE.getEnabled()){return;
}var cG=e.getDocumentLeft();
var cH=e.getDocumentTop();
this.__pm=cG;
this.__pn=cH;
var cF=this._getRowForPagePos(cG,cH);

if(cF!=null&&this._getColumnForPageX(cG)!=null){if(this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(cG,cH);
}}this.__oO.setMouseOverColumn(null);
},_onMousedownHeader:function(e){if(!this.getTable().getEnabled()){return;
}var cJ=e.getDocumentLeft();
var cK=this._getResizeColumnForPageX(cJ);

if(cK!=-1){this._startResizeHeader(cK,cJ);
e.stop();
}else{var cI=this._getColumnForPageX(cJ);

if(cI!=null){this._startMoveHeader(cI,cJ);
e.stop();
}}},_startResizeHeader:function(cL,cM){var cN=this.getTable().getTableColumnModel();
this.__pg=cL;
this.__ph=cM;
this.__pi=cN.getColumnWidth(this.__pg);
this.__oR.capture();
},_startMoveHeader:function(cO,cP){this.__pb=cO;
this.__pf=cP;
this.__pc=this.getTablePaneModel().getColumnLeft(cO);
this.__oR.capture();
},_onMousedownPane:function(e){var cT=this.getTable();

if(!cT.getEnabled()){return;
}
if(cT.isEditing()){cT.stopEditing();
}var cQ=e.getDocumentLeft();
var cS=e.getDocumentTop();
var cV=this._getRowForPagePos(cQ,cS);
var cU=this._getColumnForPageX(cQ);

if(cV!==null){this.__pj={row:cV,col:cU};
this.__pk=false;
var cR=this.getSelectBeforeFocus();

if(cR){cT.getSelectionManager().handleMouseDown(cV,e);
}if(!this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(cQ,cS);
}
if(!cR){cT.getSelectionManager().handleMouseDown(cV,e);
}}},_onMouseupFocusIndicator:function(e){if(this.__pj&&!this.__pk&&!this.isEditing()&&this.__oW.getRow()==this.__pj.row&&this.__oW.getColumn()==this.__pj.col){this.fireEvent(bi,qx.ui.table.pane.CellEvent,[this,e,this.__pj.row,this.__pj.col],true);
this.__pk=true;
}else if(!this.isEditing()){this._onMousedownPane(e);
}},_onChangeCaptureHeader:function(e){if(this.__pg!=null){this._stopResizeHeader();
}
if(this.__pb!=null){this._stopMoveHeader();
}},_stopResizeHeader:function(){var cW=this.getTable().getTableColumnModel();
if(!this.getLiveResize()){this._hideResizeLine();
cW.setColumnWidth(this.__pg,this.__pi,true);
}this.__pg=null;
this.__oR.releaseCapture();
this.getApplicationRoot().setGlobalCursor(null);
this.setCursor(null);
if(this.isEditing()){var cX=this.__po.getBounds().height;
this.__po.setUserBounds(0,0,this.__pi,cX);
}},_stopMoveHeader:function(){var dd=this.getTable().getTableColumnModel();
var de=this.getTablePaneModel();
this.__oO.hideColumnMoveFeedback();

if(this.__pe){this.__pe.hideColumnMoveFeedback();
}
if(this.__pd!=null){var dg=de.getFirstColumnX()+de.getX(this.__pb);
var dc=this.__pd;

if(dc!=dg&&dc!=dg+1){var df=dd.getVisibleColumnAtX(dg);
var db=dd.getVisibleColumnAtX(dc);
var da=dd.getOverallX(df);
var cY=(db!=null)?dd.getOverallX(db):dd.getOverallColumnCount();

if(cY>da){cY--;
}dd.moveColumn(da,cY);
this._updateFocusIndicator();
}}this.__pb=null;
this.__pd=null;
this.__oR.releaseCapture();
},_onMouseupPane:function(e){var dh=this.getTable();

if(!dh.getEnabled()){return;
}var di=this._getRowForPagePos(e.getDocumentLeft(),e.getDocumentTop());

if(di!=-1&&di!=null&&this._getColumnForPageX(e.getDocumentLeft())!=null){dh.getSelectionManager().handleMouseUp(di,e);
}},_onMouseupHeader:function(e){var dj=this.getTable();

if(!dj.getEnabled()){return;
}
if(this.__pg!=null){this._stopResizeHeader();
this.__pl=true;
e.stop();
}else if(this.__pb!=null){this._stopMoveHeader();
e.stop();
}},_onClickHeader:function(e){if(this.__pl){this.__pl=false;
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

if(this.fireDataEvent(y,dr,null,true)){dm.sortByColumn(ds,dq);

if(this.getResetSelectionOnHeaderClick()){dp.getSelectionModel().resetSelection();
}}}}e.stop();
},_onClickPane:function(e){var dt=this.getTable();

if(!dt.getEnabled()){return;
}var dw=e.getDocumentLeft();
var dx=e.getDocumentTop();
var du=this._getRowForPagePos(dw,dx);
var dv=this._getColumnForPageX(dw);

if(du!=null&&dv!=null){dt.getSelectionManager().handleClick(du,e);

if(this.__oW.isHidden()||(this.__pj&&!this.__pk&&!this.isEditing()&&du==this.__pj.row&&dv==this.__pj.col)){this.fireEvent(bi,qx.ui.table.pane.CellEvent,[this,e,du,dv],true);
this.__pk=true;
}}},_onContextMenu:function(e){var dB=e.getDocumentLeft();
var dC=e.getDocumentTop();
var dz=this._getRowForPagePos(dB,dC);
var dA=this._getColumnForPageX(dB);
if(dz===null&&this.getContextMenuFromDataCellsOnly()){return;
}
if(!this.getShowCellFocusIndicator()||dz===null||(this.__pj&&dz==this.__pj.row&&dA==this.__pj.col)){this.fireEvent(a,qx.ui.table.pane.CellEvent,[this,e,dz,dA],true);
var dy=this.getTable().getContextMenu();

if(dy){if(dy.getChildren().length>0){dy.openAtMouse(e);
}else{dy.exclude();
}e.preventDefault();
}}},_onContextMenuOpen:function(e){},_onDblclickPane:function(e){var dE=e.getDocumentLeft();
var dF=e.getDocumentTop();
this._focusCellAtPagePos(dE,dF);
this.startEditing();
var dD=this._getRowForPagePos(dE,dF);

if(dD!=-1&&dD!=null){this.fireEvent(z,qx.ui.table.pane.CellEvent,[this,e,dD],true);
}},_onMouseout:function(e){var dG=this.getTable();

if(!dG.getEnabled()){return;
}if(this.__pg==null){this.setCursor(null);
this.getApplicationRoot().setGlobalCursor(null);
}this.__oO.setMouseOverColumn(null);
if(this.getFocusCellOnMouseMove()){this.__ml.setFocusedCell();
}},_showResizeLine:function(x){var dI=this._showChildControl(n);
var dH=dI.getWidth();
var dJ=this.__oS.getBounds();
dI.setUserBounds(x-Math.round(dH/2),0,dH,dJ.height);
},_hideResizeLine:function(){this._excludeChildControl(n);
},showColumnMoveFeedback:function(dK){var dT=this.getTablePaneModel();
var dS=this.getTable().getTableColumnModel();
var dN=this.__oP.getContainerLocation().left;
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
}var dQ=this.__oS.getContainerLocation().left;
var dV=this.__oS.getBounds().width;
var scrollX=dQ-dN;
dM=qx.lang.Number.limit(dM,scrollX+2,scrollX+dV-1);
this._showResizeLine(dM);
return dT.getFirstColumnX()+dO;
},hideColumnMoveFeedback:function(){this._hideResizeLine();
},_focusCellAtPagePos:function(dX,dY){var eb=this._getRowForPagePos(dX,dY);

if(eb!=-1&&eb!=null){var ea=this._getColumnForPageX(dX);
this.__ml.setFocusedCell(ea,eb);
}},setFocusedCell:function(ec,ed){if(!this.isEditing()){this.__oP.setFocusedCell(ec,ed,this.__oY);
this.__nQ=ec;
this.__nR=ed;
this._updateFocusIndicator();
}},getFocusedColumn:function(){return this.__nQ;
},getFocusedRow:function(){return this.__nR;
},scrollCellVisible:function(ee,ef){var ep=this.getTablePaneModel();
var eg=ep.getX(ee);

if(eg!=-1){var em=this.__oS.getInnerSize();

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
}},isEditing:function(){return this.__po!=null;
},startEditing:function(){var ew=this.getTable();
var eu=ew.getTableModel();
var ey=this.__nQ;

if(!this.isEditing()&&(ey!=null)&&eu.isColumnEditable(ey)){var ez=this.__nR;
var es=this.getTablePaneModel().getX(ey);
var et=eu.getValue(ey,ez);
this.scrollCellVisible(es,ez);
this.__pp=ew.getTableColumnModel().getCellEditorFactory(ey);
var ev={col:ey,row:ez,xPos:es,value:et,table:ew};
this.__po=this.__pp.createCellEditor(ev);
if(this.__po===null){return false;
}else if(this.__po instanceof qx.ui.window.Window){this.__po.setModal(true);
this.__po.setShowClose(false);
this.__po.addListener(bb,this._onCellEditorModalWindowClose,this);
var f=ew.getModalCellEditorPreOpenFunction();

if(f!=null){f(this.__po,ev);
}this.__po.open();
}else{var ex=this.__oW.getInnerSize();
this.__po.setUserBounds(0,0,ex.width,ex.height);
this.__oW.addListener(m,function(e){this.__pj={row:this.__nR,col:this.__nQ};
e.stopPropagation();
},this);
this.__oW.add(this.__po);
this.__oW.addState(bm);
this.__oW.setKeepActive(false);
this.__oW.setDecorator(bq);
this.__po.focus();
this.__po.activate();
}return true;
}return false;
},stopEditing:function(){if(!this.getShowCellFocusIndicator()){this.__oW.setDecorator(null);
}this.flushEditor();
this.cancelEditing();
},flushEditor:function(){if(this.isEditing()){var eB=this.__pp.getCellEditorValue(this.__po);
var eA=this.getTable().getTableModel().getValue(this.__nQ,this.__nR);
this.getTable().getTableModel().setValue(this.__nQ,this.__nR,eB);
this.__ml.focus();
this.__ml.fireDataEvent(J,{row:this.__nR,col:this.__nQ,oldValue:eA,value:eB});
}},cancelEditing:function(){if(this.isEditing()&&!this.__po.pendingDispose){if(this._cellEditorIsModalWindow){this.__po.destroy();
this.__po=null;
this.__pp=null;
this.__po.pendingDispose=true;
}else{this.__oW.removeState(bm);
this.__oW.setKeepActive(true);
this.__po.destroy();
this.__po=null;
this.__pp=null;
}}},_onCellEditorModalWindowClose:function(e){this.stopEditing();
},_getColumnForPageX:function(eC){var eF=this.getTable().getTableColumnModel();
var eG=this.getTablePaneModel();
var eE=eG.getColumnCount();
var eI=this.__oP.getContentLocation().left;

for(var x=0;x<eE;x++){var eD=eG.getColumnAtX(x);
var eH=eF.getColumnWidth(eD);
eI+=eH;

if(eC<eI){return eD;
}}return null;
},_getResizeColumnForPageX:function(eJ){var eN=this.getTable().getTableColumnModel();
var eO=this.getTablePaneModel();
var eM=eO.getColumnCount();
var eQ=this.__oO.getContainerLocation().left;
var eK=qx.ui.table.pane.Scroller.RESIZE_REGION_RADIUS;

for(var x=0;x<eM;x++){var eL=eO.getColumnAtX(x);
var eP=eN.getColumnWidth(eL);
eQ+=eP;

if(eJ>=(eQ-eK)&&eJ<=(eQ+eK)){return eL;
}}return -1;
},_getRowForPagePos:function(eR,eS){var eT=this.__oP.getContentLocation();

if(eR<eT.left||eR>eT.right){return null;
}
if(eS>=eT.top&&eS<=eT.bottom){var eU=this.getTable().getRowHeight();
var scrollY=this.__oV.getPosition();

if(this.getTable().getKeepFirstVisibleRowComplete()){scrollY=Math.floor(scrollY/eU)*eU;
}var eX=scrollY+eS-eT.top;
var fa=Math.floor(eX/eU);
var eY=this.getTable().getTableModel();
var eV=eY.getRowCount();
return (fa<eV)?fa:null;
}var eW=this.__oO.getContainerLocation();

if(eS>=eW.top&&eS<=eW.bottom&&eR<=eW.right){return -1;
}return null;
},setTopRightWidget:function(fb){var fc=this.__pq;

if(fc!=null){this.__oQ.remove(fc);
}
if(fb!=null){this.__oQ.add(fb);
}this.__pq=fb;
},getTopRightWidget:function(){return this.__pq;
},getHeader:function(){return this.__oO;
},getTablePane:function(){return this.__oP;
},getVerticalScrollBarWidth:function(){var fd=this.__oV;
return fd.isVisible()?(fd.getSizeHint().width||0):0;
},getNeededScrollBars:function(fe,ff){var fo=this.__oV;
var fs=fo.getSizeHint().width+fo.getMarginLeft()+fo.getMarginRight();
var fu=this.__oU;
var ft=fu.getSizeHint().height+fu.getMarginTop()+fu.getMarginBottom();
var fm=this.__oS.getInnerSize();
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
},getPaneClipper:function(){return this.__oS;
},_applyScrollTimeout:function(fv,fw){this._startInterval(fv);
},_startInterval:function(fx){this.__iz.setInterval(fx);
this.__iz.start();
},_stopInterval:function(){this.__iz.stop();
},_postponedUpdateContent:function(){this._updateContent();
},_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.__oY&&!this.__oP._layoutPending){this.__oY=false;
this._updateContent();
}}),_updateContent:function(){var fC=this.__oS.getInnerSize();

if(!fC){return;
}var fF=fC.height;
var scrollX=this.__oU.getPosition();
var scrollY=this.__oV.getPosition();
var fz=this.getTable().getRowHeight();
var fA=Math.floor(scrollY/fz);
var fE=this.__oP.getFirstVisibleRow();
this.__oP.setFirstVisibleRow(fA);
var fB=Math.ceil(fF/fz);
var fy=0;
var fD=this.getTable().getKeepFirstVisibleRowComplete();

if(!fD){fB++;
fy=scrollY%fz;
}this.__oP.setVisibleRowCount(fB);

if(fA!=fE){this._updateFocusIndicator();
}this.__oS.scrollToX(scrollX);
if(!fD){this.__oS.scrollToY(fy);
}},_updateFocusIndicator:function(){var fG=this.getTable();

if(!fG.getEnabled()){return;
}this.__oW.moveToCell(this.__nQ,this.__nR);
}},destruct:function(){this._stopInterval();
var fH=this.getTablePaneModel();

if(fH){fH.dispose();
}this.__pj=this.__pq=this.__ml=null;
this._disposeObjects(v,t,ba,B,Q,U,E,be,I,w);
}});
})();
(function(){var j="px",i="no-repeat",h="repeat",g="gecko",f="scale",e="string",d="static",c="'",b="qx.ui.table.cellrenderer.AbstractImage",a="}",A="  text-align:center;",z="scale-x",y="repeat-y",x=".qooxdoo-table-cell-icon {",w="",v="<div></div>",u="top",t="engine.version",s="engine.name",r="abstract",p=" qooxdoo-table-cell-icon",q="inline-block",n="repeat-x",o="  padding-top:1px;",l="title='",m="scale-y",k="-moz-inline-box";
qx.Class.define(b,{extend:qx.ui.table.cellrenderer.Abstract,type:r,construct:function(){qx.ui.table.cellrenderer.Abstract.call(this);
var B=this.self(arguments);

if(!B.stylesheet){B.stylesheet=qx.bom.Stylesheet.createElement(x+A+o+a);
}},properties:{repeat:{check:function(C){var D=[f,z,m,h,n,y,i];
return qx.lang.Array.contains(D,C);
},init:i}},members:{__qg:16,__qh:16,__qi:null,_insetY:2,_identifyImage:function(E){throw new Error("_identifyImage is abstract");
},_getImageInfos:function(F){var G=this._identifyImage(F);
if(G==null||typeof G==e){G={url:G,tooltip:null};
}if(!G.imageWidth||!G.imageHeight){var H=this.__qj(G.url);
G.imageWidth=H.width;
G.imageHeight=H.height;
}G.width=G.imageWidth;
G.height=G.imageHeight;
return G;
},__qj:function(I){var L=qx.util.ResourceManager.getInstance();
var K=qx.io.ImageLoader;
var J,M;
if(L.has(I)){J=L.getImageWidth(I);
M=L.getImageHeight(I);
}else if(K.isLoaded(I)){J=K.getWidth(I);
M=K.getHeight(I);
}else{J=this.__qg;
M=this.__qh;
}return {width:J,height:M};
},createDataCellHtml:function(N,O){this.__qi=this._getImageInfos(N);
return qx.ui.table.cellrenderer.Abstract.prototype.createDataCellHtml.call(this,N,O);
},_getCellClass:function(P){return qx.ui.table.cellrenderer.Abstract.prototype._getCellClass.call(this)+p;
},_getContentHtml:function(Q){var content=v;
if(this.__qi.url){content=qx.bom.element.Decoration.create(this.__qi.url,this.getRepeat(),{width:this.__qi.width+j,height:this.__qi.height+j,display:qx.core.Environment.get(s)==g&&qx.core.Environment.get(t)<1.9?k:q,verticalAlign:u,position:d});
}return content;
},_getCellAttributes:function(R){var S=this.__qi.tooltip;

if(S){return l+S+c;
}else{return w;
}}},destruct:function(){this.__qi=null;
}});
})();
(function(){var h="headerCellRendererChanged",g="visibilityChangedPre",f="Number",e="qx.event.type.Event",d="_applyFirstColumnX",c="Integer",b="qx.ui.table.pane.Model",a="_applyMaxColumnCount";
qx.Class.define(b,{extend:qx.core.Object,construct:function(i){qx.core.Object.call(this);
this.setTableColumnModel(i);
},events:{"modelChanged":e},statics:{EVENT_TYPE_MODEL_CHANGED:"modelChanged"},properties:{firstColumnX:{check:c,init:0,apply:d},maxColumnCount:{check:f,init:-1,apply:a}},members:{__qe:null,__qf:null,_applyFirstColumnX:function(j,k){this.__qe=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},_applyMaxColumnCount:function(l,m){this.__qe=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},setTableColumnModel:function(n){if(this.__qf){this.__qf.removeListener(g,this._onColVisibilityChanged,this);
this.__qf.removeListener(h,this._onColVisibilityChanged,this);
}this.__qf=n;
this.__qf.addListener(g,this._onColVisibilityChanged,this);
this.__qf.addListener(h,this._onHeaderCellRendererChanged,this);
this.__qe=null;
},_onColVisibilityChanged:function(o){this.__qe=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},_onHeaderCellRendererChanged:function(p){this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},getColumnCount:function(){if(this.__qe==null){var q=this.getFirstColumnX();
var s=this.getMaxColumnCount();
var r=this.__qf.getVisibleColumnCount();

if(s==-1||(q+s)>r){this.__qe=r-q;
}else{this.__qe=s;
}}return this.__qe;
},getColumnAtX:function(t){var u=this.getFirstColumnX();
return this.__qf.getVisibleColumnAtX(u+t);
},getX:function(v){var w=this.getFirstColumnX();
var y=this.getMaxColumnCount();
var x=this.__qf.getVisibleX(v)-w;

if(x>=0&&(y==-1||x<y)){return x;
}else{return -1;
}},getColumnLeft:function(z){var C=0;
var B=this.getColumnCount();

for(var x=0;x<B;x++){var A=this.getColumnAtX(x);

if(A==z){return C;
}C+=this.__qf.getColumnWidth(A);
}return -1;
},getTotalWidth:function(){var D=0;
var E=this.getColumnCount();

for(var x=0;x<E;x++){var F=this.getColumnAtX(x);
D+=this.__qf.getColumnWidth(F);
}return D;
}},destruct:function(){if(this.__qf){this.__qf.removeListener(g,this._onColVisibilityChanged,this);
this.__qf.removeListener(h,this._onColVisibilityChanged,this);
}this.__qf=null;
}});
})();
(function(){var f="changeVisible",d="qx.ui.table.columnmenu.MenuItem",c="_applyVisible",b="Boolean",a="changeValue";
qx.Class.define(d,{extend:qx.ui.menu.CheckBox,implement:qx.ui.table.IColumnMenuItem,properties:{visible:{check:b,init:true,apply:c,event:f}},construct:function(g){qx.ui.menu.CheckBox.call(this,g);
this.addListener(a,function(e){this.bInListener=true;
this.setVisible(e.getData());
this.bInListener=false;
});
},members:{__oy:false,_applyVisible:function(h,i){if(!this.bInListener){this.setValue(h);
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
(function(){var e="first",d="last",c="hovered",b="__oE",a="qx.ui.table.pane.Header";
qx.Class.define(a,{extend:qx.ui.core.Widget,construct:function(f){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.HBox());
this.__jz=new qx.ui.core.Blocker(this);
this.__oE=f;
},members:{__oE:null,__oM:null,__oN:null,__jz:null,getPaneScroller:function(){return this.__oE;
},getTable:function(){return this.__oE.getTable();
},getBlocker:function(){return this.__jz;
},onColOrderChanged:function(){this._updateContent(true);
},onPaneModelChanged:function(){this._updateContent(true);
},onTableModelMetaDataChanged:function(){this._updateContent();
},setColumnWidth:function(g,h,i){var j=this.getHeaderWidgetAtColumn(g);

if(j!=null){j.setWidth(h);
}},setMouseOverColumn:function(k){if(k!=this.__oN){if(this.__oN!=null){var l=this.getHeaderWidgetAtColumn(this.__oN);

if(l!=null){l.removeState(c);
}}
if(k!=null){this.getHeaderWidgetAtColumn(k).addState(c);
}this.__oN=k;
}},getHeaderWidgetAtColumn:function(m){var n=this.getPaneScroller().getTablePaneModel().getX(m);
return this._getChildren()[n];
},showColumnMoveFeedback:function(o,x){var s=this.getContainerLocation();

if(this.__oM==null){var y=this.getTable();
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
this.__oM=q;
}this.__oM.setLayoutProperties({left:s.left+x});
this.__oM.show();
},hideColumnMoveFeedback:function(){if(this.__oM!=null){this.__oM.destroy();
this.__oM=null;
}},isShowingColumnMoveFeedback:function(){return this.__oM!=null;
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
}}},destruct:function(){this.__jz.dispose();
this._disposeObjects(b);
}});
})();
(function(){var j="",i="table-row-background-even",h="Boolean",g="content",f="default",e="height:",d="'",c="table-row",b="table-row-background-focused",a="css.boxmodel",v=';color:',u="table-row-background-odd",t="1px solid ",s="table-row-line",r="table-row-background-selected",q="background-color:",p=';border-bottom: 1px solid ',o="table-row-selected",n="table-row-background-focused-selected",m="px;",k="qx.ui.table.rowrenderer.Default",l=";";
qx.Class.define(k,{extend:qx.core.Object,implement:qx.ui.table.IRowRenderer,construct:function(){qx.core.Object.call(this);
this.__oa=j;
this.__oa={};
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
},properties:{highlightFocusRow:{check:h,init:true}},members:{_colors:null,__ob:null,__oa:null,_insetY:1,_renderFont:function(x){if(x){this.__ob=x.getStyles();
this.__oa=qx.bom.element.Style.compile(this.__ob);
this.__oa=this.__oa.replace(/"/g,d);
}else{this.__oa=j;
this.__ob=qx.bom.Font.getDefaultStyles();
}},updateDataRowElement:function(y,z){var B=this.__ob;
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
E.push(this.__oa);
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
}},destruct:function(){this._colors=this.__ob=this.__oa=null;
}});
})();
(function(){var g="String",f="_applyIconTrue",e="decoration/table/boolean-true.png",d="qx.ui.table.cellrenderer.Boolean",c=";padding-top:4px;",b="decoration/table/boolean-false.png",a="_applyIconFalse";
qx.Class.define(d,{extend:qx.ui.table.cellrenderer.AbstractImage,construct:function(){qx.ui.table.cellrenderer.AbstractImage.call(this);
this.__xG=qx.util.AliasManager.getInstance();
this.initIconTrue();
this.initIconFalse();
},properties:{iconTrue:{check:g,init:e,apply:f},iconFalse:{check:g,init:b,apply:a}},members:{__xH:null,__xI:false,__xG:null,_applyIconTrue:function(h){this.__xH=this.__xG.resolve(h);
},_applyIconFalse:function(i){this.__xI=this.__xG.resolve(i);
},_insetY:5,_getCellStyle:function(j){return qx.ui.table.cellrenderer.AbstractImage.prototype._getCellStyle.call(this,j)+c;
},_identifyImage:function(k){var l={imageWidth:11,imageHeight:11};

switch(k.value){case true:l.url=this.__xH;
break;
case false:l.url=this.__xI;
break;
default:l.url=null;
break;
}return l;
}},destruct:function(){this.__xG=null;
}});
})();
(function(){var p="Boolean",o="column-button",n="Function",m="qx.event.type.Data",k="statusbar",h="qx.ui.table.pane.CellEvent",g="function",f="PageUp",e="__nX",d="dataChanged",bH="changeLocale",bG="changeSelection",bF="appear",bE="qx.dynlocale",bD='"',bC="Enter",bB="metaDataChanged",bA="_applyStatusBarVisible",bz="columnVisibilityMenuCreateStart",by="blur",w="qx.ui.table.Table",y="columnVisibilityMenuCreateEnd",u="changeVisible",v="_applyResetSelectionOnHeaderClick",s="_applyMetaColumnCounts",t="focus",q="changeDataRowRenderer",r="changeHeaderCellHeight",F="Escape",G="A",ba="changeSelectionModel",V="Left",bi="Down",bd="Integer",bu="_applyHeaderCellHeight",bo="visibilityChanged",O="qx.ui.table.ITableModel",bx="orderChanged",bw="_applySelectionModel",bv="menu-button",M="menu",R="_applyAdditionalStatusBarText",T="_applyFocusCellOnMouseMove",X="table",bb="_applyColumnVisibilityButtonVisible",be="__nV",bk="changeTableModel",bq="qx.event.type.Event",z="tableWidthChanged",A="_applyHeaderCellsVisible",Q="Object",bh="_applyShowCellFocusIndicator",bg="resize",bf="verticalScrollBarChanged",bm="changeScrollY",bl="_applyTableModel",bc="__nP",bj="End",a="_applyKeepFirstVisibleRowComplete",bp="widthChanged",B="one of one row",C="Home",W="_applyRowHeight",b="F2",c="Up",L="__nO",D="%1 rows",E="qx.ui.table.selection.Model",K="one row",Y="PageDown",bs="%1 of %2 rows",br="keypress",S="changeRowHeight",bt="__nW",N="Number",bn="header",H="_applyContextMenuFromDataCellsOnly",J="__iz",P="qx.ui.table.IRowRenderer",U="Right",I="Space";
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
this.__nO=new qx.ui.container.Composite(new qx.ui.layout.HBox());
this._add(this.__nO,{flex:1});
this.setDataRowRenderer(new qx.ui.table.rowrenderer.Default(this));
this.__nP=this.getNewSelectionManager()(this);
this.setSelectionModel(this.getNewSelectionModel()(this));
this.setTableModel(bI||this.getEmptyTableModel());
this.setMetaColumnCounts([-1]);
this.setTabIndex(1);
this.addListener(br,this._onKeyPress);
this.addListener(t,this._onFocusChanged);
this.addListener(by,this._onFocusChanged);
var bK=new qx.ui.core.Widget().set({height:0});
this._add(bK);
bK.addListener(bg,this._onResize,this);
this.__nQ=null;
this.__nR=null;
if(qx.core.Environment.get(bE)){qx.locale.Manager.getInstance().addListener(bH,this._onChangeLocale,this);
}this.initStatusBarVisible();
bI=this.getTableModel();

if(bI.init&&typeof (bI.init)==g){bI.init(this);
}},events:{"columnVisibilityMenuCreateStart":m,"columnVisibilityMenuCreateEnd":m,"tableWidthChanged":bq,"verticalScrollBarChanged":m,"cellClick":h,"cellDblclick":h,"cellContextmenu":h,"dataEdited":m},statics:{__nS:{cellClick:1,cellDblclick:1,cellContextmenu:1}},properties:{appearance:{refine:true,init:X},focusable:{refine:true,init:true},minWidth:{refine:true,init:50},initiallyHiddenColumns:{init:null},selectable:{refine:true,init:false},selectionModel:{check:E,apply:bw,event:ba},tableModel:{check:O,apply:bl,event:bk},rowHeight:{check:N,init:20,apply:W,event:S,themeable:true},forceLineHeight:{check:p,init:true},headerCellsVisible:{check:p,init:true,apply:A,themeable:true},headerCellHeight:{check:bd,init:16,apply:bu,event:r,nullable:true,themeable:true},statusBarVisible:{check:p,init:true,apply:bA},additionalStatusBarText:{nullable:true,init:null,apply:R},columnVisibilityButtonVisible:{check:p,init:true,apply:bb,themeable:true},metaColumnCounts:{check:Q,apply:s},focusCellOnMouseMove:{check:p,init:false,apply:T},rowFocusChangeModifiesSelection:{check:p,init:true},showCellFocusIndicator:{check:p,init:true,apply:bh},contextMenuFromDataCellsOnly:{check:p,init:true,apply:H},keepFirstVisibleRowComplete:{check:p,init:true,apply:a},alwaysUpdateCells:{check:p,init:false},resetSelectionOnHeaderClick:{check:p,init:true,apply:v},dataRowRenderer:{check:P,init:null,nullable:true,event:q},modalCellEditorPreOpenFunction:{check:n,init:null,nullable:true},newColumnMenu:{check:n,init:function(){return new qx.ui.table.columnmenu.Button();
}},newSelectionManager:{check:n,init:function(bL){return new qx.ui.table.selection.Manager(bL);
}},newSelectionModel:{check:n,init:function(bM){return new qx.ui.table.selection.Model(bM);
}},newTableColumnModel:{check:n,init:function(bN){return new qx.ui.table.columnmodel.Basic(bN);
}},newTablePane:{check:n,init:function(bO){return new qx.ui.table.pane.Pane(bO);
}},newTablePaneHeader:{check:n,init:function(bP){return new qx.ui.table.pane.Header(bP);
}},newTablePaneScroller:{check:n,init:function(bQ){return new qx.ui.table.pane.Scroller(bQ);
}},newTablePaneModel:{check:n,init:function(bR){return new qx.ui.table.pane.Model(bR);
}}},members:{__nQ:null,__nR:null,__nO:null,__nP:null,__nT:null,__nU:null,__mR:null,__nV:null,__nW:null,__nX:null,__nY:null,__iz:null,_createChildControlImpl:function(bS,bT){var bU;

switch(bS){case k:bU=new qx.ui.basic.Label();
bU.set({allowGrowX:true});
this._add(bU);
break;
case o:bU=this.getNewColumnMenu()();
bU.set({focusable:false});
var bV=bU.factory(M,{table:this});
bV.addListener(bF,this._initColumnMenu,this);
break;
}return bU||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,bS);
},_applySelectionModel:function(bW,bX){this.__nP.setSelectionModel(bW);

if(bX!=null){bX.removeListener(bG,this._onSelectionChanged,this);
}bW.addListener(bG,this._onSelectionChanged,this);
},_applyRowHeight:function(bY,ca){var cb=this._getPaneScrollerArr();

for(var i=0;i<cb.length;i++){cb[i].updateVerScrollBarMaximum();
}},_applyHeaderCellsVisible:function(cc,cd){var ce=this._getPaneScrollerArr();

for(var i=0;i<ce.length;i++){ce[i]._excludeChildControl(bn);
}},_applyHeaderCellHeight:function(cf,cg){var ch=this._getPaneScrollerArr();

for(var i=0;i<ch.length;i++){ch[i].getHeader().setHeight(cf);
}},getEmptyTableModel:function(){if(!this.__nX){this.__nX=new qx.ui.table.model.Simple();
this.__nX.setColumns([]);
this.__nX.setData([]);
}return this.__nX;
},_applyTableModel:function(ci,cj){this.getTableColumnModel().init(ci.getColumnCount(),this);

if(cj!=null){cj.removeListener(bB,this._onTableModelMetaDataChanged,this);
cj.removeListener(d,this._onTableModelDataChanged,this);
}ci.addListener(bB,this._onTableModelMetaDataChanged,this);
ci.addListener(d,this._onTableModelDataChanged,this);
this._updateStatusBar();
this._updateTableData(0,ci.getRowCount(),0,ci.getColumnCount());
this._onTableModelMetaDataChanged();
if(cj&&ci.init&&typeof (ci.init)==g){ci.init(this);
}},getTableColumnModel:function(){if(!this.__nW){var cn=this.__nW=this.getNewTableColumnModel()(this);
cn.addListener(bo,this._onColVisibilityChanged,this);
cn.addListener(bp,this._onColWidthChanged,this);
cn.addListener(bx,this._onColOrderChanged,this);
var cm=this.getTableModel();
cn.init(cm.getColumnCount(),this);
var ck=this._getPaneScrollerArr();

for(var i=0;i<ck.length;i++){var cl=ck[i];
var co=cl.getTablePaneModel();
co.setTableColumnModel(cn);
}}return this.__nW;
},_applyStatusBarVisible:function(cp,cq){if(cp){this._showChildControl(k);
}else{this._excludeChildControl(k);
}
if(cp){this._updateStatusBar();
}},_applyAdditionalStatusBarText:function(cr,cs){this.__nT=cr;
this._updateStatusBar();
},_applyColumnVisibilityButtonVisible:function(ct,cu){if(ct){this._showChildControl(o);
}else{this._excludeChildControl(o);
}},_applyMetaColumnCounts:function(cv,cw){var cD=cv;
var cx=this._getPaneScrollerArr();
var cB={};

if(cv>cw){var cF=qx.event.Registration.getManager(cx[0]);

for(var cG in qx.ui.table.Table.__nS){cB[cG]={};
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
cH.addListener(bm,this._onScrollY,this);
for(cG in qx.ui.table.Table.__nS){if(!cB[cG]){break;
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
this.__nO.add(cH,{flex:cI});
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
}},getSelectionManager:function(){return this.__nP;
},_getPaneScrollerArr:function(){return this.__nO.getChildren();
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
if(this.__nR>=dq&&this.__nR<(dq+dr)){this.setFocusedCell();
}}
for(var i=0;i<ds.length;i++){ds[i].onTableModelDataChanged(dl,dm,dn,dp);
}var dt=this.getTableModel().getRowCount();

if(dt!=this.__nU){this.__nU=dt;
this._updateScrollBarVisibility();
this._updateStatusBar();
}},_onScrollY:function(du){if(!this.__mR){this.__mR=true;
var dv=this._getPaneScrollerArr();

for(var i=0;i<dv.length;i++){dv[i].setScrollY(du.getData());
}this.__mR=false;
}},_onKeyPress:function(dw){if(!this.getEnabled()){return;
}var dD=this.__nR;
var dA=true;
var dE=dw.getKeyIdentifier();

if(this.isEditing()){if(dw.getModifiers()==0){switch(dE){case bC:this.stopEditing();
var dD=this.__nR;
this.moveFocusedCell(0,1);

if(this.__nR!=dD){dA=this.startEditing();
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
}}else{switch(dE){case I:this.__nP.handleSelectKeyDown(this.__nR,dw);
break;
case b:case bC:this.startEditing();
dA=true;
break;
case C:this.setFocusedCell(this.__nQ,0,true);
break;
case bj:var dB=this.getTableModel().getRowCount();
this.setFocusedCell(this.__nQ,dB-1,true);
break;
case V:this.moveFocusedCell(-1,0);
break;
case U:this.moveFocusedCell(1,0);
break;
case c:this.moveFocusedCell(0,-1);
break;
case bi:this.moveFocusedCell(0,1);
break;
case f:case Y:var dz=this.getPaneScroller(0);
var dC=dz.getTablePane();
var dy=this.getRowHeight();
var dx=(dE==f)?-1:1;
dB=dC.getVisibleRowCount()-1;
dz.setScrollY(dz.getScrollY()+dx*dB*dy);
this.moveFocusedCell(0,dx*dB);
break;
default:dA=false;
}}}
if(dD!=this.__nR&&this.getRowFocusChangeModifiesSelection()){this.__nP.handleMoveKeyDown(this.__nR,dw);
}
if(dA){dw.preventDefault();
dw.stopPropagation();
}},_onFocusChanged:function(dF){var dG=this._getPaneScrollerArr();

for(var i=0;i<dG.length;i++){dG[i].onFocusChanged();
}},_onColVisibilityChanged:function(dH){var dI=this._getPaneScrollerArr();

for(var i=0;i<dI.length;i++){dI[i].onColVisibilityChanged();
}var dJ=dH.getData();

if(this.__nV!=null&&dJ.col!=null&&dJ.visible!=null){this.__nV[dJ.col].setVisible(dJ.visible);
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
},setFocusedCell:function(dR,dS,dT){if(!this.isEditing()&&(dR!=this.__nQ||dS!=this.__nR)){if(dR===null){dR=0;
}this.__nQ=dR;
this.__nR=dS;
var dU=this._getPaneScrollerArr();

for(var i=0;i<dU.length;i++){dU[i].setFocusedCell(dR,dS);
}
if(dR!==null&&dT){this.scrollCellVisible(dR,dS);
}}},resetSelection:function(){this.getSelectionModel().resetSelection();
},resetCellFocus:function(){this.setFocusedCell(null,null,false);
},getFocusedColumn:function(){return this.__nQ;
},getFocusedRow:function(){return this.__nR;
},highlightFocusedRow:function(dV){this.getDataRowRenderer().setHighlightFocusRow(dV);
},clearFocusedRowHighlight:function(dW){if(dW){var dY=dW.getRelatedTarget();

if(dY instanceof qx.ui.table.pane.Pane||dY instanceof qx.ui.table.pane.FocusIndicator){return;
}}this.resetCellFocus();
var dX=this._getPaneScrollerArr();

for(var i=0;i<dX.length;i++){dX[i].onFocusChanged();
}},moveFocusedCell:function(ea,eb){var ef=this.__nQ;
var eg=this.__nR;
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
if(!ej){this.addListenerOnce(bF,function(){this.scrollCellVisible(eh,ei);
},this);
}var ek=this.getTableColumnModel();
var x=ek.getVisibleX(eh);
var el=this._getMetaColumnAtColumnX(x);

if(el!=-1){this.getPaneScroller(el).scrollCellVisible(eh,ei);
}},isEditing:function(){if(this.__nQ!=null){var x=this.getTableColumnModel().getVisibleX(this.__nQ);
var em=this._getMetaColumnAtColumnX(x);
return this.getPaneScroller(em).isEditing();
}return false;
},startEditing:function(){if(this.__nQ!=null){var x=this.getTableColumnModel().getVisibleX(this.__nQ);
var eo=this._getMetaColumnAtColumnX(x);
var en=this.getPaneScroller(eo).startEditing();
return en;
}return false;
},stopEditing:function(){if(this.__nQ!=null){var x=this.getTableColumnModel().getVisibleX(this.__nQ);
var ep=this._getMetaColumnAtColumnX(x);
this.getPaneScroller(ep).stopEditing();
}},cancelEditing:function(){if(this.__nQ!=null){var x=this.getTableColumnModel().getVisibleX(this.__nQ);
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
}else{eD=this.trn(B,bs,eE,eC,eE);
}}
if(this.__nT){if(eD){eD+=this.__nT;
}else{eD=this.__nT;
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
if(eP){if(this.__nY==null){this.__nY=eJ[i].getVerticalScrollBarVisible();
this.__iz=qx.event.Timer.once(function(){this.__nY=null;
this.__iz=null;
},this,0);
}}eJ[i].setVerticalScrollBarVisible(eP&&eN);
if(eP&&eN!=this.__nY){this.fireDataEvent(bf,eN);
}}},_initColumnMenu:function(){var eS=this.getTableModel();
var eT=this.getTableColumnModel();
var eU=this.getChildControl(o);
eU.empty();
var eR=eU.getMenu();
var eV={table:this,menu:eR,columnButton:eU};
this.fireDataEvent(bz,eV);
this.__nV={};

for(var eW=0,l=eS.getColumnCount();eW<l;eW++){var eQ=eU.factory(bv,{text:eS.getColumnName(eW),column:eW,bVisible:eT.isColumnVisible(eW)});
qx.core.Assert.assertInterface(eQ,qx.ui.table.IColumnMenuItem);
eQ.addListener(u,this._createColumnVisibilityCheckBoxHandler(eW),this);
this.__nV[eW]=eQ;
}eV={table:this,menu:eR,columnButton:eU};
this.fireDataEvent(y,eV);
},_createColumnVisibilityCheckBoxHandler:function(eX){return function(eY){var fa=this.getTableColumnModel();
fa.setColumnVisible(eX,eY.getData());
};
},setColumnWidth:function(fb,fc){this.getTableColumnModel().setColumnWidth(fb,fc);
},_onResize:function(){this.fireEvent(z);
this._updateScrollerWidths();
this._updateScrollBarVisibility();
},addListener:function(fd,fe,self,ff){if(this.self(arguments).__nS[fd]){var fh=[fd];

for(var i=0,fg=this._getPaneScrollerArr();i<fg.length;i++){fh.push(fg[i].addListener.apply(fg[i],arguments));
}return fh.join(bD);
}else{return qx.ui.core.Widget.prototype.addListener.call(this,fd,fe,self,ff);
}},removeListener:function(fi,fj,self,fk){if(this.self(arguments).__nS[fi]){for(var i=0,fl=this._getPaneScrollerArr();i<fl.length;i++){fl[i].removeListener.apply(fl[i],arguments);
}}else{qx.ui.core.Widget.prototype.removeListener.call(this,fi,fj,self,fk);
}},removeListenerById:function(fm){var fq=fm.split(bD);
var fp=fq.shift();

if(this.self(arguments).__nS[fp]){var fo=true;

for(var i=0,fn=this._getPaneScrollerArr();i<fn.length;i++){fo=fn[i].removeListenerById.call(fn[i],fq[i])&&fo;
}return fo;
}else{return qx.ui.core.Widget.prototype.removeListenerById.call(this,fm);
}},destroy:function(){this.getChildControl(o).getMenu().destroy();
qx.ui.core.Widget.prototype.destroy.call(this);
}},destruct:function(){if(qx.core.Environment.get(bE)){qx.locale.Manager.getInstance().removeListener(bH,this._onChangeLocale,this);
}var fs=this.getSelectionModel();

if(fs){fs.dispose();
}var fr=this.getDataRowRenderer();

if(fr){fr.dispose();
}this._cleanUpMetaColumns(0);
this.getTableColumnModel().dispose();
this._disposeObjects(bc,L,e,e,bt,J);
this._disposeMap(be);
}});
})();

});