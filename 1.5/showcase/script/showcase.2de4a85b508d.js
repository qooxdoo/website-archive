qx.$$packageData['256']={"locales":{},"resources":{"qx/icon/Tango/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/media-audio.png":[16,16,"png","qx"],"qx/icon/Tango/16/status/dialog-warning.png":[16,16,"png","qx"]},"translations":{"C":{},"de":{"%1 of %2 rows":"%1 von %2 Zeilen","%1 rows":"%1 Zeilen","Reset column widths":"Spaltenbreite zurücksetzen","one of one row":"Eine von einer Zeile","one row":"Eine Zeile"},"de_AT":{},"de_DE":{},"en":{},"en_GB":{},"en_US":{},"es":{"%1 of %2 rows":"%1 de %2 filas","%1 rows":"%1 filas","Reset column widths":"Reestablecer anchos de columnas","one of one row":"una de una fila","one row":"una fila"},"es_ES":{},"es_MX":{},"ro":{"%1 of %2 rows":"%1 din %2 rânduri","%1 rows":"%1 rânduri","Reset column widths":"Resetează lățimea coloanei","one of one row":"unul din un rând","one row":"un rând"},"ro_RO":{},"sv":{"%1 of %2 rows":"%1 av %2 rader","%1 rows":"%1 rader","Reset column widths":"Återställ kolumnbredder","one of one row":"en av en rad","one row":"En rad"},"sv_SE":{}}};
qx.Part.$$notifyLoad("256", function() {
(function(){var a="qx.ui.table.ICellRenderer";
qx.Interface.define(a,{members:{createDataCellHtml:function(b,c){return true;
}}});
})();
(function(){var j="",i="px;",h=".qooxdoo-table-cell {",g="qooxdoo-table-cell",f="content",e='</div>',d="nowrap",c="default",b="}",a="width:",J=".qooxdoo-table-cell-right { text-align:right } ",I="css.boxmodel",H="0px 6px",G='<div class="',F="0px",E="height:",D="1px solid ",C=".qooxdoo-table-cell-bold { font-weight:bold } ",B="String",A="} ",q='>',r="mshtml",o='" ',p="ellipsis",m="content-box",n='left:',k="qx.ui.table.cellrenderer.Abstract",l="engine.name",s='" style="',t="abstract",v="none",u="hidden",x="table-column-line",w='px;',z=".qooxdoo-table-cell-italic { font-style:italic} ",y="absolute";
qx.Class.define(k,{type:t,implement:qx.ui.table.ICellRenderer,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
var K=qx.ui.table.cellrenderer.Abstract;

if(!K.__xg){var M=qx.theme.manager.Color.getInstance();
K.__xg=this.self(arguments);
var L=h+qx.bom.element.Style.compile({position:y,top:F,overflow:u,whiteSpace:d,borderRight:D+M.resolve(x),padding:H,cursor:c,textOverflow:p,userSelect:v})+A+J+z+C;

if(!(qx.core.Environment.get(l)==r)){L+=h+qx.bom.element.BoxSizing.compile(m)+b;
}K.__xg.stylesheet=qx.bom.Stylesheet.createElement(L);
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
}var o=qx.ui.table.cellrenderer.Default._numberFormat.format(p);
}else if(p instanceof Date){o=qx.util.format.DateFormat.getDateInstance().format(p);
}else{o=p;
}return o;
}}});
})();
(function(){var o="==",n="",m=">",l="between",k="<",j="regex",h="!between",g=">=",f="!=",e="<=",b=";",d='g',c=":",a="qx.ui.table.cellrenderer.Conditional";
qx.Class.define(a,{extend:qx.ui.table.cellrenderer.Default,construct:function(p,q,r,s){qx.ui.table.cellrenderer.Default.call(this);
this.numericAllowed=[o,f,m,k,g,e];
this.betweenAllowed=[l,h];
this.conditions=[];
this.__BS=p||"";
this.__BT=q||"";
this.__BU=r||"";
this.__BV=s||"";
},members:{__BS:null,__BT:null,__BU:null,__BV:null,__CJ:function(t,u){if(t[1]!=null){u["text-align"]=t[1];
}
if(t[2]!=null){u["color"]=t[2];
}
if(t[3]!=null){u["font-style"]=t[3];
}
if(t[4]!=null){u["font-weight"]=t[4];
}},addNumericCondition:function(v,w,x,y,z,A,B){var C=null;

if(qx.lang.Array.contains(this.numericAllowed,v)){if(w!=null){C=[v,x,y,z,A,w,B];
}}
if(C!=null){this.conditions.push(C);
}else{throw new Error("Condition not recognized or value is null!");
}},addBetweenCondition:function(D,E,F,G,H,I,J,K){if(qx.lang.Array.contains(this.betweenAllowed,D)){if(E!=null&&F!=null){var L=[D,G,H,I,J,E,F,K];
}}
if(L!=null){this.conditions.push(L);
}else{throw new Error("Condition not recognized or value1/value2 is null!");
}},addRegex:function(M,N,O,P,Q,R){if(M!=null){var S=[j,N,O,P,Q,M,R];
}
if(S!=null){this.conditions.push(S);
}else{throw new Error("regex cannot be null!");
}},_getCellStyle:function(T){if(!this.conditions.length){return T.style||n;
}var Y=T.table.getTableModel();
var i;
var bb;
var U;
var W={"text-align":this.__BS,"color":this.__BT,"font-style":this.__BU,"font-weight":this.__BV};

for(i in this.conditions){bb=false;

if(qx.lang.Array.contains(this.numericAllowed,this.conditions[i][0])){if(this.conditions[i][6]==null){U=T.value;
}else{U=Y.getValueById(this.conditions[i][6],T.row);
}
switch(this.conditions[i][0]){case o:if(U==this.conditions[i][5]){bb=true;
}break;
case f:if(U!=this.conditions[i][5]){bb=true;
}break;
case m:if(U>this.conditions[i][5]){bb=true;
}break;
case k:if(U<this.conditions[i][5]){bb=true;
}break;
case g:if(U>=this.conditions[i][5]){bb=true;
}break;
case e:if(U<=this.conditions[i][5]){bb=true;
}break;
}}else if(qx.lang.Array.contains(this.betweenAllowed,this.conditions[i][0])){if(this.conditions[i][7]==null){U=T.value;
}else{U=Y.getValueById(this.conditions[i][7],T.row);
}
switch(this.conditions[i][0]){case l:if(U>=this.conditions[i][5]&&U<=this.conditions[i][6]){bb=true;
}break;
case h:if(U<this.conditions[i][5]&&U>this.conditions[i][6]){bb=true;
}break;
}}else if(this.conditions[i][0]==j){if(this.conditions[i][6]==null){U=T.value;
}else{U=Y.getValueById(this.conditions[i][6],T.row);
}var V=new RegExp(this.conditions[i][5],d);
bb=V.test(U);
}if(bb==true){this.__CJ(this.conditions[i],W);
}}var ba=[];

for(var X in W){if(W[X]){ba.push(X,c,W[X],b);
}}return ba.join(n);
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
this.__yx=h;
this.setKeepActive(true);
this.addListener(d,this._onKeyPress,this);
},properties:{visibility:{refine:true,init:b},row:{check:g,nullable:true},column:{check:g,nullable:true}},members:{__yx:null,_onKeyPress:function(e){var i=e.getKeyIdentifier();

if(i!==f&&i!==c){e.stopPropagation();
}},moveToCell:function(j,k){if(!this.__yx.getShowCellFocusIndicator()&&!this.__yx.getTable().getTableModel().isColumnEditable(j)){this.exclude();
return;
}else{this.show();
}
if(j==null){this.hide();
this.setRow(null);
this.setColumn(null);
}else{var l=this.__yx.getTablePaneModel().getX(j);

if(l==-1){this.hide();
this.setRow(null);
this.setColumn(null);
}else{var q=this.__yx.getTable();
var o=q.getTableColumnModel();
var p=this.__yx.getTablePaneModel();
var n=this.__yx.getTablePane().getFirstVisibleRow();
var m=q.getRowHeight();
this.setUserBounds(p.getColumnLeft(j)-2,(k-n)*m-2,o.getColumnWidth(j)+3,m+3);
this.show();
this.setRow(k);
this.setColumn(j);
}}}},destruct:function(){this.__yx=null;
}});
})();
(function(){var k="",j="Number",h='</div>',g='" ',f="paneUpdated",e='<div>',d="</div>",c="overflow: hidden;",b="qx.event.type.Data",a="paneReloadsData",E="div",D='style="',C="_applyMaxCacheLines",B="qx.ui.table.pane.Pane",A="width: 100%;",z="qx.event.type.Event",w="_applyVisibleRowCount",v='>',u="line-height: ",t="appear",r='class="',s="width:100%;",p="px;",q='<div ',n="'>",o="_applyFirstVisibleRow",l="<div style='",m=";position:relative;";
qx.Class.define(B,{extend:qx.ui.core.Widget,construct:function(F){qx.ui.core.Widget.call(this);
this.__xJ=F;
this.__xK=0;
this.__wW=0;
this.__xL=[];
},events:{"paneReloadsData":b,"paneUpdated":z},properties:{firstVisibleRow:{check:j,init:0,apply:o},visibleRowCount:{check:j,init:0,apply:w},maxCacheLines:{check:j,init:1000,apply:C},allowShrinkX:{refine:true,init:false}},members:{__wW:null,__xK:null,__xJ:null,__xM:null,__wT:null,__wS:null,__xL:null,__xN:0,_applyFirstVisibleRow:function(G,H){this.updateContent(false,G-H);
},_applyVisibleRowCount:function(I,J){this.updateContent(true);
},_getContentHint:function(){return {width:this.getPaneScroller().getTablePaneModel().getTotalWidth(),height:400};
},getPaneScroller:function(){return this.__xJ;
},getTable:function(){return this.__xJ.getTable();
},setFocusedCell:function(K,L,M){if(K!=this.__wS||L!=this.__wT){var N=this.__wT;
this.__wS=K;
this.__wT=L;
if(L!=N&&!M){if(N!==null){this.updateContent(false,null,N,true);
}
if(L!==null){this.updateContent(false,null,L,true);
}}}},onSelectionChanged:function(){this.updateContent(false,null,null,true);
},onFocusChanged:function(){this.updateContent(false,null,null,true);
},setColumnWidth:function(O,P){this.updateContent(true);
},onColOrderChanged:function(){this.updateContent(true);
},onPaneModelChanged:function(){this.updateContent(true);
},onTableModelDataChanged:function(Q,R,S,T){this.__xO();
var V=this.getFirstVisibleRow();
var U=this.getVisibleRowCount();

if(R==-1||R>=V&&Q<V+U){this.updateContent();
}},onTableModelMetaDataChanged:function(){this.updateContent(true);
},_applyMaxCacheLines:function(W,X){if(this.__xN>=W&&W!==-1){this.__xO();
}},__xO:function(){this.__xL=[];
this.__xN=0;
},__xP:function(Y,ba,bb){if(!ba&&!bb&&this.__xL[Y]){return this.__xL[Y];
}else{return null;
}},__xQ:function(bc,bd,be,bf){var bg=this.getMaxCacheLines();

if(!be&&!bf&&!this.__xL[bc]&&bg>0){this._applyMaxCacheLines(bg);
this.__xL[bc]=bd;
this.__xN+=1;
}},updateContent:function(bh,bi,bj,bk){if(bh){this.__xO();
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
bs.focusedRow=(this.__wT==bv);
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
bz.push({col:bY,xPos:x,editable:bA.isColumnEditable(bY),focusedCol:this.__wS==bY,styleLeft:bC,styleWidth:bF});
bC+=bF;
}var bX=[];
var ca=false;

for(var bE=bw;bE<bw+bx;bE++){var bH=bG.isSelectedIndex(bE);
var bK=(this.__wT==bE);
var bP=this.__xP(bE,bH,bK);

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
this.__xQ(bE,bQ,bH,bK);
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
}}if(!this.__xM){this.__xM=document.createElement(E);
}var ck=e;
ck+=this._getRowsHtml(ci+ce,Math.abs(cb));
ck+=h;
this.__xM.innerHTML=ck;
var cf=this.__xM.firstChild.childNodes;
if(cb>0){for(var i=cf.length-1;i>=0;i--){var ch=cf[0];
cl.appendChild(ch);
}}else{for(var i=cf.length-1;i>=0;i--){var ch=cf[cf.length-1];
cl.insertBefore(ch,cl.firstChild);
}}if(this.__wT!==null){this._updateRowStyles(this.__wT-cb);
this._updateRowStyles(this.__wT);
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
this.__xK=cw;
this.__wW=cq;
this.fireEvent(f);
}},destruct:function(){this.__xM=this.__xJ=this.__xL=null;
}});
})();
(function(){var e="auto",d="string",c="number",b="*",a="qx.ui.core.ColumnData";
qx.Class.define(a,{extend:qx.ui.core.LayoutItem,construct:function(){qx.ui.core.LayoutItem.call(this);
this.setColumnWidth(e);
},members:{__yN:null,renderLayout:function(f,top,g,h){this.__yN=g;
},getComputedWidth:function(){return this.__yN;
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
(function(){var j="Function",h="Boolean",g="minWidth",f="width",e="qx.ui.table.columnmodel.Resize",d="qx.ui.table.columnmodel.resizebehavior.Default",c="__yP",b="maxWidth",a="__yQ";
qx.Class.define(d,{extend:qx.ui.table.columnmodel.resizebehavior.Abstract,construct:function(){qx.ui.table.columnmodel.resizebehavior.Abstract.call(this);
this.__yO=[];
this.__yP=new qx.ui.layout.HBox();
this.__yP.connectToWidget(this);
this.__yQ=new qx.util.DeferredCall(this._computeColumnsFlexWidth,this);
},properties:{newResizeBehaviorColumnData:{check:j,init:function(k){return new qx.ui.core.ColumnData();
}},initializeWidthsOnEveryAppear:{check:h,init:false},tableColumnModel:{check:e}},members:{__yP:null,__yR:null,__yO:null,__yQ:null,__yS:false,setWidth:function(m,n,o){if(m>=this.__yO.length){throw new Error("Column number out of range");
}this.__yO[m].setColumnWidth(n,o);
this.__yQ.schedule();
},setMinWidth:function(p,q){if(p>=this.__yO.length){throw new Error("Column number out of range");
}this.__yO[p].setMinWidth(q);
this.__yQ.schedule();
},setMaxWidth:function(r,s){if(r>=this.__yO.length){throw new Error("Column number out of range");
}this.__yO[r].setMaxWidth(s);
this.__yQ.schedule();
},set:function(t,u){for(var v in u){switch(v){case f:this.setWidth(t,u[v]);
break;
case g:this.setMinWidth(t,u[v]);
break;
case b:this.setMaxWidth(t,u[v]);
break;
default:throw new Error("Unknown property: "+v);
}}},onAppear:function(event,w){if(w===true||!this.__yS||this.getInitializeWidthsOnEveryAppear()){this._computeColumnsFlexWidth();
this.__yS=true;
}},onTableWidthChanged:function(event){this._computeColumnsFlexWidth();
},onVerticalScrollBarChanged:function(event){this._computeColumnsFlexWidth();
},onColumnWidthChanged:function(event){this._extendNextColumn(event);
},onVisibilityChanged:function(event){var x=event.getData();
if(x.visible){this._computeColumnsFlexWidth();
return;
}this._extendLastColumn(event);
},_setNumColumns:function(y){var z=this.__yO;
if(y<=z.length){z.splice(y,z.length);
return;
}for(var i=z.length;i<y;i++){z[i]=this.getNewResizeBehaviorColumnData()();
z[i].columnNumber=i;
}},getLayoutChildren:function(){return this.__yR;
},_computeColumnsFlexWidth:function(){this.__yQ.cancel();
var E=this._getAvailableWidth();

if(E===null){return;
}var A=this.getTableColumnModel();
var C=A.getVisibleColumns();
var D=C.length;
var B=this.__yO;
var i,l;

if(D===0){return;
}var G=[];

for(i=0;i<D;i++){G.push(B[C[i]]);
}this.__yR=G;
this.__yT();
this.__yP.renderLayout(E,100);
for(i=0,l=G.length;i<l;i++){var F=G[i].getComputedWidth();
A.setColumnWidth(C[i],F);
}},__yT:function(){this.__yP.invalidateChildrenCache();
var H=this.__yR;

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
}},_getResizeColumnData:function(){return this.__yO;
}},destruct:function(){this.__yO=this.__yR=null;
this._disposeObjects(c,a);
}});
})();
(function(){var k="qx.event.type.Data",j="visibilityChanged",h="orderChanged",g="visibilityChangedPre",f="__xG",e="__xH",d="widthChanged",c="qx.ui.table.columnmodel.Basic",b="headerCellRendererChanged",a="__xI";
qx.Class.define(c,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__xC=[];
this.__xD=[];
},events:{"widthChanged":k,"visibilityChangedPre":k,"visibilityChanged":k,"orderChanged":k,"headerCellRendererChanged":k},statics:{DEFAULT_WIDTH:100,DEFAULT_HEADER_RENDERER:qx.ui.table.headerrenderer.Default,DEFAULT_DATA_RENDERER:qx.ui.table.cellrenderer.Default,DEFAULT_EDITOR_FACTORY:qx.ui.table.celleditor.TextField},members:{__wE:null,__xE:null,__xD:null,__xC:null,__xF:null,__xG:null,__xH:null,__xI:null,init:function(l,m){this.__xF=[];
var q=qx.ui.table.columnmodel.Basic.DEFAULT_WIDTH;
var r=this.__xG||(this.__xG=new qx.ui.table.columnmodel.Basic.DEFAULT_HEADER_RENDERER());
var o=this.__xH||(this.__xH=new qx.ui.table.columnmodel.Basic.DEFAULT_DATA_RENDERER());
var n=this.__xI||(this.__xI=new qx.ui.table.columnmodel.Basic.DEFAULT_EDITOR_FACTORY());
this.__xC=[];
this.__xD=[];
var t;
if(m){t=m.getInitiallyHiddenColumns();
}t=t||[];

for(var u=0;u<l;u++){this.__xF[u]={width:q,headerRenderer:r,dataRenderer:o,editorFactory:n};
this.__xC[u]=u;
this.__xD[u]=u;
}this.__xE=null;
this.__wE=true;

for(var s=0;s<t.length;s++){this.setColumnVisible(t[s],false);
}this.__wE=false;

for(u=0;u<l;u++){var p={col:u,visible:this.isColumnVisible(u)};
this.fireDataEvent(g,p);
this.fireDataEvent(j,p);
}},getVisibleColumns:function(){return this.__xD!=null?this.__xD:[];
},setColumnWidth:function(v,w,y){var A=this.__xF[v].width;

if(A!=w){this.__xF[v].width=w;
var z={col:v,newWidth:w,oldWidth:A,isMouseAction:y||false};
this.fireDataEvent(d,z);
}},getColumnWidth:function(B){return this.__xF[B].width;
},setHeaderCellRenderer:function(C,D){var E=this.__xF[C].headerRenderer;

if(E!==this.__xG){E.dispose();
}this.__xF[C].headerRenderer=D;
this.fireDataEvent(b,{col:C});
},getHeaderCellRenderer:function(F){return this.__xF[F].headerRenderer;
},setDataCellRenderer:function(G,H){this.__xF[G].dataRenderer=H;
var I=this.__xF[G].dataRenderer;

if(I!==this.__xH){return I;
}return null;
},getDataCellRenderer:function(J){return this.__xF[J].dataRenderer;
},setCellEditorFactory:function(K,L){var M=this.__xF[K].headerRenderer;

if(M!==this.__xI){M.dispose();
}this.__xF[K].editorFactory=L;
},getCellEditorFactory:function(N){return this.__xF[N].editorFactory;
},_getColToXPosMap:function(){if(this.__xE==null){this.__xE={};

for(var Q=0;Q<this.__xC.length;Q++){var P=this.__xC[Q];
this.__xE[P]={overX:Q};
}
for(var O=0;O<this.__xD.length;O++){var P=this.__xD[O];
this.__xE[P].visX=O;
}}return this.__xE;
},getVisibleColumnCount:function(){return this.__xD!=null?this.__xD.length:0;
},getVisibleColumnAtX:function(R){return this.__xD[R];
},getVisibleX:function(S){return this._getColToXPosMap()[S].visX;
},getOverallColumnCount:function(){return this.__xC.length;
},getOverallColumnAtX:function(T){return this.__xC[T];
},getOverallX:function(U){return this._getColToXPosMap()[U].overX;
},isColumnVisible:function(V){return (this._getColToXPosMap()[V].visX!=null);
},setColumnVisible:function(W,X){if(X!=this.isColumnVisible(W)){if(X){var be=this._getColToXPosMap();
var bb=be[W].overX;

if(bb==null){throw new Error("Showing column failed: "+W+". The column is not added to this TablePaneModel.");
}var bc;

for(var x=bb+1;x<this.__xC.length;x++){var bd=this.__xC[x];
var Y=be[bd].visX;

if(Y!=null){bc=Y;
break;
}}if(bc==null){bc=this.__xD.length;
}this.__xD.splice(bc,0,W);
}else{var ba=this.getVisibleX(W);
this.__xD.splice(ba,1);
}this.__xE=null;
if(!this.__wE){var bf={col:W,visible:X};
this.fireDataEvent(g,bf);
this.fireDataEvent(j,bf);
}}},moveColumn:function(bg,bh){this.__wE=true;
var bk=this.__xC[bg];
var bi=this.isColumnVisible(bk);

if(bi){this.setColumnVisible(bk,false);
}this.__xC.splice(bg,1);
this.__xC.splice(bh,0,bk);
this.__xE=null;

if(bi){this.setColumnVisible(bk,true);
}this.__wE=false;
var bj={col:bk,fromOverXPos:bg,toOverXPos:bh};
this.fireDataEvent(h,bj);
},setColumnsOrder:function(bl){if(bl.length==this.__xC.length){this.__wE=true;
var bo=new Array(bl.length);

for(var bm=0;bm<this.__xC.length;bm++){var bn=this.isColumnVisible(bm);
bo[bm]=bn;

if(bn){this.setColumnVisible(bm,false);
}}this.__xC=qx.lang.Array.clone(bl);
this.__xE=null;
for(var bm=0;bm<this.__xC.length;bm++){if(bo[bm]){this.setColumnVisible(bm,true);
}}this.__wE=false;
this.fireDataEvent(h);
}else{throw new Error("setColumnsOrder: Invalid number of column positions given, expected "+this.__xC.length+", got "+bl.length);
}}},destruct:function(){for(var i=0;i<this.__xF.length;i++){this.__xF[i].headerRenderer.dispose();
this.__xF[i].dataRenderer.dispose();
this.__xF[i].editorFactory.dispose();
}this.__xC=this.__xD=this.__xF=this.__xE=null;
this._disposeObjects(f,e,a);
}});
})();
(function(){var b="qx.ui.table.selection.Model",a="qx.ui.table.selection.Manager";
qx.Class.define(a,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
},properties:{selectionModel:{check:b}},members:{__xf:null,handleMouseDown:function(c,d){if(d.isLeftPressed()){var e=this.getSelectionModel();

if(!e.isSelectedIndex(c)){this._handleSelectEvent(c,d);
this.__xf=true;
}else{this.__xf=false;
}}else if(d.isRightPressed()&&d.getModifiers()==0){var e=this.getSelectionModel();

if(!e.isSelectedIndex(c)){e.setSelectionInterval(c,c);
}}},handleMouseUp:function(f,g){if(g.isLeftPressed()&&!this.__xf){this._handleSelectEvent(f,g);
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
this.__wM=[];
this.__wN=-1;
this.__wO=-1;
this.hasBatchModeRefCount=0;
this.__wP=false;
},events:{"changeSelection":f},statics:{NO_SELECTION:1,SINGLE_SELECTION:2,SINGLE_INTERVAL_SELECTION:3,MULTIPLE_INTERVAL_SELECTION:4,MULTIPLE_INTERVAL_SELECTION_TOGGLE:5},properties:{selectionMode:{init:2,check:[1,2,3,4,5],apply:a}},members:{__wP:null,__wN:null,__wO:null,__wM:null,_applySelectionMode:function(o){this.resetSelection();
},setBatchMode:function(p){if(p){this.hasBatchModeRefCount+=1;
}else{if(this.hasBatchModeRefCount==0){throw new Error("Try to turn off batch mode althoug it was not turned on.");
}this.hasBatchModeRefCount-=1;

if(this.__wP){this.__wP=false;
this._fireChangeSelection();
}}return this.hasBatchMode();
},hasBatchMode:function(){return this.hasBatchModeRefCount>0;
},getAnchorSelectionIndex:function(){return this.__wN;
},_setAnchorSelectionIndex:function(q){this.__wN=q;
},getLeadSelectionIndex:function(){return this.__wO;
},_setLeadSelectionIndex:function(r){this.__wO=r;
},_getSelectedRangeArr:function(){return this.__wM;
},resetSelection:function(){if(!this.isSelectionEmpty()){this._resetSelection();
this._fireChangeSelection();
}},isSelectionEmpty:function(){return this.__wM.length==0;
},getSelectedCount:function(){var t=0;

for(var i=0;i<this.__wM.length;i++){var s=this.__wM[i];
t+=s.maxIndex-s.minIndex+1;
}return t;
},isSelectedIndex:function(u){for(var i=0;i<this.__wM.length;i++){var v=this.__wM[i];

if(u>=v.minIndex&&u<=v.maxIndex){return true;
}}return false;
},getSelectedRanges:function(){var w=[];

for(var i=0;i<this.__wM.length;i++){w.push({minIndex:this.__wM[i].minIndex,maxIndex:this.__wM[i].maxIndex});
}return w;
},iterateSelection:function(x,y){for(var i=0;i<this.__wM.length;i++){for(var j=this.__wM[i].minIndex;j<=this.__wM[i].maxIndex;j++){x.call(y,j);
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
}},removeSelectionInterval:function(F,G){this.__wN=F;
this.__wO=G;
var H=Math.min(F,G);
var J=Math.max(F,G);
for(var i=0;i<this.__wM.length;i++){var L=this.__wM[i];

if(L.minIndex>J){break;
}else if(L.maxIndex>=H){var M=(L.minIndex>=H)&&(L.minIndex<=J);
var K=(L.maxIndex>=H)&&(L.maxIndex<=J);

if(M&&K){this.__wM.splice(i,1);
i--;
}else if(M){L.minIndex=J+1;
}else if(K){L.maxIndex=H-1;
}else{var I={minIndex:J+1,maxIndex:L.maxIndex};
this.__wM.splice(i+1,0,I);
L.maxIndex=H-1;
break;
}}}this._fireChangeSelection();
},_resetSelection:function(){this.__wM=[];
this.__wN=-1;
this.__wO=-1;
},_addSelectionInterval:function(N,O){this.__wN=N;
this.__wO=O;
var P=Math.min(N,O);
var R=Math.max(N,O);
var Q=0;

for(;Q<this.__wM.length;Q++){var S=this.__wM[Q];

if(S.minIndex>P){break;
}}this.__wM.splice(Q,0,{minIndex:P,maxIndex:R});
var T=this.__wM[0];

for(var i=1;i<this.__wM.length;i++){var S=this.__wM[i];

if(T.maxIndex+1>=S.minIndex){T.maxIndex=Math.max(T.maxIndex,S.maxIndex);
this.__wM.splice(i,1);
i--;
}else{T=S;
}}},_dumpRanges:function(){var U=d;

for(var i=0;i<this.__wM.length;i++){var V=this.__wM[i];
U+=k+V.minIndex+m+V.maxIndex+n;
}this.debug(U);
},_fireChangeSelection:function(){if(this.hasBatchMode()){this.__wP=true;
}else{this.fireEvent(l);
}}},destruct:function(){this.__wM=null;
}});
})();
(function(){var n="appear",m="columnVisibilityMenuCreateEnd",l="tableWidthChanged",k="verticalScrollBarChanged",j="qx.ui.table.columnmodel.resizebehavior.Abstract",i="qx.ui.table.columnmodel.Resize",h="_applyBehavior",g="separator",f="visibilityChanged",e="Reset column widths",b="changeBehavior",d="user-button",c="widthChanged",a="execute";
qx.Class.define(i,{extend:qx.ui.table.columnmodel.Basic,include:qx.locale.MTranslation,construct:function(){qx.ui.table.columnmodel.Basic.call(this);
this.__yL=false;
this.__yM=false;
},properties:{behavior:{check:j,init:null,nullable:true,apply:h,event:b}},members:{__yM:null,__yL:null,__xT:null,_applyBehavior:function(p,q){if(q!=null){q.dispose();
q=null;
}p._setNumColumns(this.getOverallColumnCount());
p.setTableColumnModel(this);
},init:function(r,s){qx.ui.table.columnmodel.Basic.prototype.init.call(this,r,s);

if(this.__xT==null){this.__xT=s;
s.addListener(n,this._onappear,this);
s.addListener(l,this._onTableWidthChanged,this);
s.addListener(k,this._onverticalscrollbarchanged,this);
s.addListener(m,this._addResetColumnWidthButton,this);
this.addListener(c,this._oncolumnwidthchanged,this);
this.addListener(f,this._onvisibilitychanged,this);
}if(this.getBehavior()==null){this.setBehavior(new qx.ui.table.columnmodel.resizebehavior.Default());
}this.getBehavior()._setNumColumns(r);
},getTable:function(){return this.__xT;
},_addResetColumnWidthButton:function(event){var v=event.getData();
var u=v.columnButton;
var t=v.menu;
var o;
o=u.factory(g);
t.add(o);
o=u.factory(d,{text:this.tr(e)});
t.add(o);
o.addListener(a,this._onappear,this);
},_onappear:function(event){if(this.__yL){return ;
}this.__yL=true;
this.getBehavior().onAppear(event,event.getType()!==n);
this.__xT._updateScrollerWidths();
this.__xT._updateScrollBarVisibility();
this.__yL=false;
this.__yM=true;
},_onTableWidthChanged:function(event){if(this.__yL||!this.__yM){return ;
}this.__yL=true;
this.getBehavior().onTableWidthChanged(event);
this.__yL=false;
},_onverticalscrollbarchanged:function(event){if(this.__yL||!this.__yM){return ;
}this.__yL=true;
this.getBehavior().onVerticalScrollBarChanged(event);
qx.event.Timer.once(function(){if(this.__xT&&!this.__xT.isDisposed()){this.__xT._updateScrollerWidths();
this.__xT._updateScrollBarVisibility();
}},this,0);
this.__yL=false;
},_oncolumnwidthchanged:function(event){if(this.__yL||!this.__yM){return ;
}this.__yL=true;
this.getBehavior().onColumnWidthChanged(event);
this.__yL=false;
},_onvisibilitychanged:function(event){if(this.__yL||!this.__yM){return ;
}this.__yL=true;
this.getBehavior().onVisibilityChanged(event);
this.__yL=false;
}},destruct:function(){this.__xT=null;
}});
})();
(function(){var e="metaDataChanged",d="qx.event.type.Data",c="qx.event.type.Event",b="abstract",a="qx.ui.table.model.Abstract";
qx.Class.define(a,{type:b,extend:qx.core.Object,implement:qx.ui.table.ITableModel,events:{"dataChanged":d,"metaDataChanged":c,"sorted":d},construct:function(){qx.core.Object.call(this);
this.__wB=[];
this.__wC=[];
this.__wD={};
},members:{__wB:null,__wC:null,__wD:null,__wE:null,init:function(f){},getRowCount:function(){throw new Error("getRowCount is abstract");
},getRowData:function(g){return null;
},isColumnEditable:function(h){return false;
},isColumnSortable:function(j){return false;
},sortByColumn:function(k,l){},getSortColumnIndex:function(){return -1;
},isSortAscending:function(){return true;
},prefetchRows:function(m,n){},getValue:function(o,p){throw new Error("getValue is abstract");
},getValueById:function(q,r){return this.getValue(this.getColumnIndexById(q),r);
},setValue:function(s,t,u){throw new Error("setValue is abstract");
},setValueById:function(v,w,x){this.setValue(this.getColumnIndexById(v),w,x);
},getColumnCount:function(){return this.__wB.length;
},getColumnIndexById:function(y){return this.__wD[y];
},getColumnId:function(z){return this.__wB[z];
},getColumnName:function(A){return this.__wC[A];
},setColumnIds:function(B){this.__wB=B;
this.__wD={};

for(var i=0;i<B.length;i++){this.__wD[B[i]]=i;
}this.__wC=new Array(B.length);
if(!this.__wE){this.fireEvent(e);
}},setColumnNamesByIndex:function(C){if(this.__wB.length!=C.length){throw new Error("this.__columnIdArr and columnNameArr have different length: "+this.__wB.length+" != "+C.length);
}this.__wC=C;
this.fireEvent(e);
},setColumnNamesById:function(D){this.__wC=new Array(this.__wB.length);

for(var i=0;i<this.__wB.length;++i){this.__wC[i]=D[this.__wB[i]];
}},setColumns:function(E,F){var G=this.__wB.length==0||F;

if(F==null){if(this.__wB.length==0){F=E;
}else{F=this.__wB;
}}
if(F.length!=E.length){throw new Error("columnIdArr and columnNameArr have different length: "+F.length+" != "+E.length);
}
if(G){this.__wE=true;
this.setColumnIds(F);
this.__wE=false;
}this.setColumnNamesByIndex(E);
}},destruct:function(){this.__wB=this.__wC=this.__wD=null;
}});
})();
(function(){var e="dataChanged",d="metaDataChanged",c="qx.ui.table.model.Simple",b="Boolean",a="sorted";
qx.Class.define(c,{extend:qx.ui.table.model.Abstract,construct:function(){qx.ui.table.model.Abstract.call(this);
this.__yA=[];
this.__yB=-1;
this.__yC=[];
this.__wF=null;
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
}},members:{__yA:null,__wF:null,__yD:null,__yC:null,__yB:null,__yE:null,getRowData:function(B){var C=this.__yA[B];

if(C==null||C.originalData==null){return C;
}else{return C.originalData;
}},getRowDataAsMap:function(D){var F=this.__yA[D];

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
},setEditable:function(K){this.__wF=[];

for(var L=0;L<this.getColumnCount();L++){this.__wF[L]=K;
}this.fireEvent(d);
},setColumnEditable:function(M,N){if(N!=this.isColumnEditable(M)){if(this.__wF==null){this.__wF=[];
}this.__wF[M]=N;
this.fireEvent(d);
}},isColumnEditable:function(O){return this.__wF?(this.__wF[O]==true):false;
},setColumnSortable:function(P,Q){if(Q!=this.isColumnSortable(P)){if(this.__yD==null){this.__yD=[];
}this.__yD[P]=Q;
this.fireEvent(d);
}},isColumnSortable:function(R){return (this.__yD?(this.__yD[R]!==false):true);
},sortByColumn:function(S,T){var W;
var V=this.__yC[S];

if(V){W=(T?V.ascending:V.descending);
}else{if(this.getCaseSensitiveSorting()){W=(T?qx.ui.table.model.Simple._defaultSortComparatorAscending:qx.ui.table.model.Simple._defaultSortComparatorDescending);
}else{W=(T?qx.ui.table.model.Simple._defaultSortComparatorInsensitiveAscending:qx.ui.table.model.Simple._defaultSortComparatorInsensitiveDescending);
}}W.columnIndex=S;
this.__yA.sort(W);
this.__yB=S;
this.__yE=T;
var U={columnIndex:S,ascending:T};
this.fireDataEvent(a,U);
this.fireEvent(d);
},setSortMethods:function(X,Y){var ba;

if(qx.lang.Type.isFunction(Y)){ba={ascending:Y,descending:function(bb,bc){return Y(bc,bb);
}};
}else{ba=Y;
}this.__yC[X]=ba;
},getSortMethods:function(bd){return this.__yC[bd];
},clearSorting:function(){if(this.__yB!=-1){this.__yB=-1;
this.__yE=true;
this.fireEvent(d);
}},getSortColumnIndex:function(){return this.__yB;
},_setSortColumnIndex:function(be){this.__yB=be;
},isSortAscending:function(){return this.__yE;
},_setSortAscending:function(bf){this.__yE=bf;
},getRowCount:function(){return this.__yA.length;
},getValue:function(bg,bh){if(bh<0||bh>=this.__yA.length){throw new Error("this.__rowArr out of bounds: "+bh+" (0.."+this.__yA.length+")");
}return this.__yA[bh][bg];
},setValue:function(bi,bj,bk){if(this.__yA[bj][bi]!=bk){this.__yA[bj][bi]=bk;
if(this.hasListener(e)){var bl={firstRow:bj,lastRow:bj,firstColumn:bi,lastColumn:bi};
this.fireDataEvent(e,bl);
}
if(bi==this.__yB){this.clearSorting();
}}},setData:function(bm,bn){this.__yA=bm;
if(this.hasListener(e)){var bo={firstRow:0,lastRow:bm.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(e,bo);
}
if(bn!==false){this.clearSorting();
}},getData:function(){return this.__yA;
},setDataAsMapArray:function(bp,bq,br){this.setData(this._mapArray2RowArr(bp,bq),br);
},addRows:function(bs,bt,bu){if(bt==null){bt=this.__yA.length;
}bs.splice(0,0,bt,0);
Array.prototype.splice.apply(this.__yA,bs);
var bv={firstRow:bt,lastRow:this.__yA.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(e,bv);

if(bu!==false){this.clearSorting();
}},addRowsAsMapArray:function(bw,bx,by,bz){this.addRows(this._mapArray2RowArr(bw,by),bx,bz);
},setRows:function(bA,bB,bC){if(bB==null){bB=0;
}bA.splice(0,0,bB,bA.length);
Array.prototype.splice.apply(this.__yA,bA);
var bD={firstRow:bB,lastRow:this.__yA.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(e,bD);

if(bC!==false){this.clearSorting();
}},setRowsAsMapArray:function(bE,bF,bG,bH){this.setRows(this._mapArray2RowArr(bE,bG),bF,bH);
},removeRows:function(bI,bJ,bK){this.__yA.splice(bI,bJ);
var bL={firstRow:bI,lastRow:this.__yA.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1,removeStart:bI,removeCount:bJ};
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
}},destruct:function(){this.__yA=this.__wF=this.__yC=this.__yD=null;
}});
})();
(function(){var a="qx.ui.table.IRowRenderer";
qx.Interface.define(a,{members:{updateDataRowElement:function(b,c){},getRowHeightStyle:function(d){},createRowStyle:function(e){},getRowClass:function(f){}}});
})();
(function(){var f="menu-button",e="table-column-reset-button",d="separator",c="user-button",b="qx.ui.table.columnmenu.Button",a="menu";
qx.Class.define(b,{extend:qx.ui.form.MenuButton,implement:qx.ui.table.IColumnMenuButton,construct:function(){qx.ui.form.MenuButton.call(this);
this.__mC=new qx.ui.core.Blocker(this);
},members:{__wX:null,__mC:null,factory:function(g,h){switch(g){case a:var j=new qx.ui.menu.Menu();
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
}},getBlocker:function(){return this.__mC;
},empty:function(){var n=this.getMenu();
var o=n.getChildren();

for(var i=0,l=o.length;i<l;i++){o[0].destroy();
}}},destruct:function(){this.__mC.dispose();
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
(function(){var m="Boolean",l="resize-line",k="mousedown",j="qx.event.type.Data",i="mouseup",h="qx.ui.table.pane.CellEvent",g="scroll",d="focus-indicator",c="excluded",b="scrollbar-y",bo="table-scroller-focus-indicator",bn="visible",bm="mousemove",bl="header",bk="editing",bj="click",bi="modelChanged",bh="scrollbar-x",bg="cellClick",bf="pane",t="__ya",u="mouseout",r="changeHorizontalScrollBarVisible",s="__xW",p="bottom",q="_applyScrollTimeout",n="changeScrollX",o="_applyTablePaneModel",A="Integer",B="dblclick",K="dataEdited",H="mousewheel",S="interval",N="qx.ui.table.pane.Scroller",bb="_applyShowCellFocusIndicator",X="__xY",D="y",be="resize",bd="__ps",bc="__yb",C="vertical",F="__xV",G="changeScrollY",J="appear",L="table-scroller",O="beforeSort",U="__xU",ba="cellDblclick",v="__kr",w="horizontal",E="losecapture",R="contextmenu",Q="col-resize",P="disappear",W="_applyVerticalScrollBarVisible",V="_applyHorizontalScrollBarVisible",M="cellContextmenu",T="close",a="__xX",Y="changeTablePaneModel",y="x",z="qx.ui.table.pane.Model",I="changeVerticalScrollBarVisible";
qx.Class.define(N,{extend:qx.ui.core.Widget,include:qx.ui.core.scroll.MScrollBarFactory,construct:function(bp){qx.ui.core.Widget.call(this);
this.__xT=bp;
var bq=new qx.ui.layout.Grid();
bq.setColumnFlex(0,1);
bq.setRowFlex(1,1);
this._setLayout(bq);
this.__xU=this._showChildControl(bh);
this.__xV=this._showChildControl(b);
this.__ps=this._showChildControl(bl);
this.__xW=this._showChildControl(bf);
this.__xX=new qx.ui.container.Composite(new qx.ui.layout.HBox()).set({minWidth:0});
this._add(this.__xX,{row:0,column:0,colSpan:2});
this.__xY=new qx.ui.table.pane.Clipper();
this.__xY.add(this.__ps);
this.__xY.addListener(E,this._onChangeCaptureHeader,this);
this.__xY.addListener(bm,this._onMousemoveHeader,this);
this.__xY.addListener(k,this._onMousedownHeader,this);
this.__xY.addListener(i,this._onMouseupHeader,this);
this.__xY.addListener(bj,this._onClickHeader,this);
this.__xX.add(this.__xY,{flex:1});
this.__ya=new qx.ui.table.pane.Clipper();
this.__ya.add(this.__xW);
this.__ya.addListener(H,this._onMousewheel,this);
this.__ya.addListener(bm,this._onMousemovePane,this);
this.__ya.addListener(k,this._onMousedownPane,this);
this.__ya.addListener(i,this._onMouseupPane,this);
this.__ya.addListener(bj,this._onClickPane,this);
this.__ya.addListener(R,this._onContextMenu,this);
this.__ya.addListener(B,this._onDblclickPane,this);
this.__ya.addListener(be,this._onResizePane,this);
this._add(this.__ya,{row:1,column:0});
this.__yb=this.getChildControl(d);
this.initShowCellFocusIndicator();
this.getChildControl(l).hide();
this.addListener(u,this._onMouseout,this);
this.addListener(J,this._onAppear,this);
this.addListener(P,this._onDisappear,this);
this.__kr=new qx.event.Timer();
this.__kr.addListener(S,this._oninterval,this);
this.initScrollTimeout();
},statics:{MIN_COLUMN_WIDTH:10,RESIZE_REGION_RADIUS:5,CLICK_TOLERANCE:5,HORIZONTAL_SCROLLBAR:1,VERTICAL_SCROLLBAR:2},events:{"changeScrollY":j,"changeScrollX":j,"cellClick":h,"cellDblclick":h,"cellContextmenu":h,"beforeSort":j},properties:{horizontalScrollBarVisible:{check:m,init:false,apply:V,event:r},verticalScrollBarVisible:{check:m,init:false,apply:W,event:I},tablePaneModel:{check:z,apply:o,event:Y},liveResize:{check:m,init:false},focusCellOnMouseMove:{check:m,init:false},selectBeforeFocus:{check:m,init:false},showCellFocusIndicator:{check:m,init:true,apply:bb},contextMenuFromDataCellsOnly:{check:m,init:true},resetSelectionOnHeaderClick:{check:m,init:true},scrollTimeout:{check:A,init:100,apply:q},appearance:{refine:true,init:L}},members:{__wW:null,__xT:null,__yc:null,__yd:null,__ye:null,__yf:null,__yg:null,__yh:null,__yi:null,__yj:null,__yk:null,__yl:null,__ym:null,__yn:null,__yo:false,__yp:null,__yq:null,__yr:null,__wS:null,__wT:null,__ys:null,__yt:null,__yu:null,__xU:null,__xV:null,__ps:null,__xY:null,__xW:null,__ya:null,__yb:null,__xX:null,__kr:null,getPaneInsetRight:function(){var bt=this.getTopRightWidget();
var bu=bt&&bt.isVisible()&&bt.getBounds()?bt.getBounds().width+bt.getMarginLeft()+bt.getMarginRight():0;
var bs=this.__xV;
var br=this.getVerticalScrollBarVisible()?this.getVerticalScrollBarWidth()+bs.getMarginLeft()+bs.getMarginRight():0;
return Math.max(bu,br);
},setPaneWidth:function(bv){if(this.isVerticalScrollBarVisible()){bv+=this.getPaneInsetRight();
}this.setWidth(bv);
},_createChildControlImpl:function(bw,bx){var by;

switch(bw){case bl:by=(this.getTable().getNewTablePaneHeader())(this);
break;
case bf:by=(this.getTable().getNewTablePane())(this);
break;
case d:by=new qx.ui.table.pane.FocusIndicator(this);
by.setUserBounds(0,0,0,0);
by.setZIndex(1000);
by.addListener(i,this._onMouseupFocusIndicator,this);
this.__ya.add(by);
by.show();
by.setDecorator(null);
break;
case l:by=new qx.ui.core.Widget();
by.setUserBounds(0,0,0,0);
by.setZIndex(1000);
this.__ya.add(by);
break;
case bh:by=this._createScrollBar(w).set({minWidth:0,alignY:p});
by.addListener(g,this._onScrollX,this);
this._add(by,{row:2,column:0});
break;
case b:by=this._createScrollBar(C);
by.addListener(g,this._onScrollY,this);
this._add(by,{row:1,column:1});
break;
}return by||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,bw);
},_applyHorizontalScrollBarVisible:function(bz,bA){this.__xU.setVisibility(bz?bn:c);
},_applyVerticalScrollBarVisible:function(bB,bC){this.__xV.setVisibility(bB?bn:c);
},_applyTablePaneModel:function(bD,bE){if(bE!=null){bE.removeListener(bi,this._onPaneModelChanged,this);
}bD.addListener(bi,this._onPaneModelChanged,this);
},_applyShowCellFocusIndicator:function(bF,bG){if(bF){this.__yb.setDecorator(bo);
this._updateFocusIndicator();
}else{if(this.__yb){this.__yb.setDecorator(null);
}}},getScrollY:function(){return this.__xV.getPosition();
},setScrollY:function(scrollY,bH){this.__xV.scrollTo(scrollY);

if(bH){this._updateContent();
}},getScrollX:function(){return this.__xU.getPosition();
},setScrollX:function(scrollX){this.__xU.scrollTo(scrollX);
},getTable:function(){return this.__xT;
},onColVisibilityChanged:function(){this.updateHorScrollBarMaximum();
this._updateFocusIndicator();
},setColumnWidth:function(bI,bJ){this.__ps.setColumnWidth(bI,bJ);
this.__xW.setColumnWidth(bI,bJ);
var bK=this.getTablePaneModel();
var x=bK.getX(bI);

if(x!=-1){this.updateHorScrollBarMaximum();
this._updateFocusIndicator();
}},onColOrderChanged:function(){this.__ps.onColOrderChanged();
this.__xW.onColOrderChanged();
this.updateHorScrollBarMaximum();
},onTableModelDataChanged:function(bL,bM,bN,bO){this.__xW.onTableModelDataChanged(bL,bM,bN,bO);
var bP=this.getTable().getTableModel().getRowCount();

if(bP!=this.__wW){this.updateVerScrollBarMaximum();

if(this.getFocusedRow()>=bP){if(bP==0){this.setFocusedCell(null,null);
}else{this.setFocusedCell(this.getFocusedColumn(),bP-1);
}}this.__wW=bP;
}},onSelectionChanged:function(){this.__xW.onSelectionChanged();
},onFocusChanged:function(){this.__xW.onFocusChanged();
},onTableModelMetaDataChanged:function(){this.__ps.onTableModelMetaDataChanged();
this.__xW.onTableModelMetaDataChanged();
},_onPaneModelChanged:function(){this.__ps.onPaneModelChanged();
this.__xW.onPaneModelChanged();
},_onResizePane:function(){this.updateHorScrollBarMaximum();
this.updateVerScrollBarMaximum();
this._updateContent();
this.__ps._updateContent();
this.__xT._updateScrollBarVisibility();
},updateHorScrollBarMaximum:function(){var bT=this.__ya.getInnerSize();

if(!bT){return ;
}var bR=this.getTablePaneModel().getTotalWidth();
var bS=this.__xU;

if(bT.width<bR){var bQ=Math.max(0,bR-bT.width);
bS.setMaximum(bQ);
bS.setKnobFactor(bT.width/bR);
var bU=bS.getPosition();
bS.setPosition(Math.min(bU,bQ));
}else{bS.setMaximum(0);
bS.setKnobFactor(1);
bS.setPosition(0);
}},updateVerScrollBarMaximum:function(){var cd=this.__ya.getInnerSize();

if(!cd){return ;
}var cb=this.getTable().getTableModel();
var bW=cb.getRowCount();

if(this.getTable().getKeepFirstVisibleRowComplete()){bW+=1;
}var bV=this.getTable().getRowHeight();
var bY=bW*bV;
var cc=this.__xV;

if(cd.height<bY){var bX=Math.max(0,bY-cd.height);
cc.setMaximum(bX);
cc.setKnobFactor(cd.height/bY);
var ca=cc.getPosition();
cc.setPosition(Math.min(ca,bX));
}else{cc.setMaximum(0);
cc.setKnobFactor(1);
cc.setPosition(0);
}},onKeepFirstVisibleRowCompleteChanged:function(){this.updateVerScrollBarMaximum();
this._updateContent();
},_onAppear:function(){this._startInterval(this.getScrollTimeout());
},_onDisappear:function(){this._stopInterval();
},_onScrollX:function(e){var ce=e.getData();
this.fireDataEvent(n,ce,e.getOldData());
this.__xY.scrollToX(ce);
this.__ya.scrollToX(ce);
},_onScrollY:function(e){this.fireDataEvent(G,e.getData(),e.getOldData());
this._postponedUpdateContent();
},_onMousewheel:function(e){var cf=this.getTable();

if(!cf.getEnabled()){return;
}var ci=e.getWheelDelta(D);
if(ci>0&&ci<1){ci=1;
}else if(ci<0&&ci>-1){ci=-1;
}this.__xV.scrollBySteps(ci);
ci=e.getWheelDelta(y);
if(ci>0&&ci<1){ci=1;
}else if(ci<0&&ci>-1){ci=-1;
}this.__xU.scrollBySteps(ci);
if(this.__yq&&this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(this.__yq,this.__yr);
}var ch=this.__xV.getPosition();
var cg=this.__xV.getMaximum();
if(ci<0&&ch<=0||ci>0&&ch>=cg){return;
}e.stop();
},__yv:function(cj){var co=this.getTable();
var cp=this.__ps.getHeaderWidgetAtColumn(this.__yk);
var ck=cp.getSizeHint().minWidth;
var cm=Math.max(ck,this.__ym+cj-this.__yl);

if(this.getLiveResize()){var cl=co.getTableColumnModel();
cl.setColumnWidth(this.__yk,cm,true);
}else{this.__ps.setColumnWidth(this.__yk,cm,true);
var cn=this.getTablePaneModel();
this._showResizeLine(cn.getColumnLeft(this.__yk)+cm);
}this.__yl+=cm-this.__ym;
this.__ym=cm;
},__yw:function(cq){var cr=qx.ui.table.pane.Scroller.CLICK_TOLERANCE;

if(this.__ps.isShowingColumnMoveFeedback()||cq>this.__yj+cr||cq<this.__yj-cr){this.__yg+=cq-this.__yj;
this.__ps.showColumnMoveFeedback(this.__yf,this.__yg);
var cs=this.__xT.getTablePaneScrollerAtPageX(cq);

if(this.__yi&&this.__yi!=cs){this.__yi.hideColumnMoveFeedback();
}
if(cs!=null){this.__yh=cs.showColumnMoveFeedback(cq);
}else{this.__yh=null;
}this.__yi=cs;
this.__yj=cq;
}},_onMousemoveHeader:function(e){var cz=this.getTable();

if(!cz.getEnabled()){return;
}var cA=false;
var ct=null;
var cx=e.getDocumentLeft();
var cy=e.getDocumentTop();
this.__yq=cx;
this.__yr=cy;

if(this.__yk!=null){this.__yv(cx);
cA=true;
e.stopPropagation();
}else if(this.__yf!=null){this.__yw(cx);
e.stopPropagation();
}else{var cu=this._getResizeColumnForPageX(cx);

if(cu!=-1){cA=true;
}else{var cw=cz.getTableModel();
var cB=this._getColumnForPageX(cx);

if(cB!=null&&cw.isColumnSortable(cB)){ct=cB;
}}}var cv=cA?Q:null;
this.getApplicationRoot().setGlobalCursor(cv);
this.setCursor(cv);
this.__ps.setMouseOverColumn(ct);
},_onMousemovePane:function(e){var cC=this.getTable();

if(!cC.getEnabled()){return;
}var cE=e.getDocumentLeft();
var cF=e.getDocumentTop();
this.__yq=cE;
this.__yr=cF;
var cD=this._getRowForPagePos(cE,cF);

if(cD!=null&&this._getColumnForPageX(cE)!=null){if(this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(cE,cF);
}}this.__ps.setMouseOverColumn(null);
},_onMousedownHeader:function(e){if(!this.getTable().getEnabled()){return;
}var cH=e.getDocumentLeft();
var cI=this._getResizeColumnForPageX(cH);

if(cI!=-1){this._startResizeHeader(cI,cH);
e.stop();
}else{var cG=this._getColumnForPageX(cH);

if(cG!=null){this._startMoveHeader(cG,cH);
e.stop();
}}},_startResizeHeader:function(cJ,cK){var cL=this.getTable().getTableColumnModel();
this.__yk=cJ;
this.__yl=cK;
this.__ym=cL.getColumnWidth(this.__yk);
this.__xY.capture();
},_startMoveHeader:function(cM,cN){this.__yf=cM;
this.__yj=cN;
this.__yg=this.getTablePaneModel().getColumnLeft(cM);
this.__xY.capture();
},_onMousedownPane:function(e){var cR=this.getTable();

if(!cR.getEnabled()){return;
}
if(cR.isEditing()){cR.stopEditing();
}var cO=e.getDocumentLeft();
var cQ=e.getDocumentTop();
var cT=this._getRowForPagePos(cO,cQ);
var cS=this._getColumnForPageX(cO);

if(cT!==null){this.__yn={row:cT,col:cS};
this.__yo=false;
var cP=this.getSelectBeforeFocus();

if(cP){cR.getSelectionManager().handleMouseDown(cT,e);
}if(!this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(cO,cQ);
}
if(!cP){cR.getSelectionManager().handleMouseDown(cT,e);
}}},_onMouseupFocusIndicator:function(e){if(this.__yn&&!this.__yo&&!this.isEditing()&&this.__yb.getRow()==this.__yn.row&&this.__yb.getColumn()==this.__yn.col){this.fireEvent(bg,qx.ui.table.pane.CellEvent,[this,e,this.__yn.row,this.__yn.col],true);
this.__yo=true;
}else if(!this.isEditing()){this._onMousedownPane(e);
}},_onChangeCaptureHeader:function(e){if(this.__yk!=null){this._stopResizeHeader();
}
if(this.__yf!=null){this._stopMoveHeader();
}},_stopResizeHeader:function(){var cU=this.getTable().getTableColumnModel();
if(!this.getLiveResize()){this._hideResizeLine();
cU.setColumnWidth(this.__yk,this.__ym,true);
}this.__yk=null;
this.__xY.releaseCapture();
this.getApplicationRoot().setGlobalCursor(null);
this.setCursor(null);
if(this.isEditing()){var cV=this.__ys.getBounds().height;
this.__ys.setUserBounds(0,0,this.__ym,cV);
}},_stopMoveHeader:function(){var db=this.getTable().getTableColumnModel();
var dc=this.getTablePaneModel();
this.__ps.hideColumnMoveFeedback();

if(this.__yi){this.__yi.hideColumnMoveFeedback();
}
if(this.__yh!=null){var de=dc.getFirstColumnX()+dc.getX(this.__yf);
var da=this.__yh;

if(da!=de&&da!=de+1){var dd=db.getVisibleColumnAtX(de);
var cY=db.getVisibleColumnAtX(da);
var cX=db.getOverallX(dd);
var cW=(cY!=null)?db.getOverallX(cY):db.getOverallColumnCount();

if(cW>cX){cW--;
}db.moveColumn(cX,cW);
this._updateFocusIndicator();
}}this.__yf=null;
this.__yh=null;
this.__xY.releaseCapture();
},_onMouseupPane:function(e){var df=this.getTable();

if(!df.getEnabled()){return;
}var dg=this._getRowForPagePos(e.getDocumentLeft(),e.getDocumentTop());

if(dg!=-1&&dg!=null&&this._getColumnForPageX(e.getDocumentLeft())!=null){df.getSelectionManager().handleMouseUp(dg,e);
}},_onMouseupHeader:function(e){var dh=this.getTable();

if(!dh.getEnabled()){return;
}
if(this.__yk!=null){this._stopResizeHeader();
this.__yp=true;
e.stop();
}else if(this.__yf!=null){this._stopMoveHeader();
e.stop();
}},_onClickHeader:function(e){if(this.__yp){this.__yp=false;
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

if(this.fireDataEvent(O,dp,null,true)){dk.sortByColumn(dq,dn);

if(this.getResetSelectionOnHeaderClick()){dm.getSelectionModel().resetSelection();
}}}}e.stop();
},_onClickPane:function(e){var dr=this.getTable();

if(!dr.getEnabled()){return;
}var du=e.getDocumentLeft();
var dv=e.getDocumentTop();
var ds=this._getRowForPagePos(du,dv);
var dt=this._getColumnForPageX(du);

if(ds!=null&&dt!=null){dr.getSelectionManager().handleClick(ds,e);

if(this.__yb.isHidden()||(this.__yn&&!this.__yo&&!this.isEditing()&&ds==this.__yn.row&&dt==this.__yn.col)){this.fireEvent(bg,qx.ui.table.pane.CellEvent,[this,e,ds,dt],true);
this.__yo=true;
}}},_onContextMenu:function(e){var dz=e.getDocumentLeft();
var dA=e.getDocumentTop();
var dx=this._getRowForPagePos(dz,dA);
var dy=this._getColumnForPageX(dz);
if(dx===null&&this.getContextMenuFromDataCellsOnly()){return;
}
if(!this.getShowCellFocusIndicator()||dx===null||(this.__yn&&dx==this.__yn.row&&dy==this.__yn.col)){this.fireEvent(M,qx.ui.table.pane.CellEvent,[this,e,dx,dy],true);
var dw=this.getTable().getContextMenu();

if(dw){if(dw.getChildren().length>0){dw.openAtMouse(e);
}else{dw.exclude();
}e.preventDefault();
}}},_onContextMenuOpen:function(e){},_onDblclickPane:function(e){var dC=e.getDocumentLeft();
var dD=e.getDocumentTop();
this._focusCellAtPagePos(dC,dD);
this.startEditing();
var dB=this._getRowForPagePos(dC,dD);

if(dB!=-1&&dB!=null){this.fireEvent(ba,qx.ui.table.pane.CellEvent,[this,e,dB],true);
}},_onMouseout:function(e){var dE=this.getTable();

if(!dE.getEnabled()){return;
}if(this.__yk==null){this.setCursor(null);
this.getApplicationRoot().setGlobalCursor(null);
}this.__ps.setMouseOverColumn(null);
},_showResizeLine:function(x){var dG=this._showChildControl(l);
var dF=dG.getWidth();
var dH=this.__ya.getBounds();
dG.setUserBounds(x-Math.round(dF/2),0,dF,dH.height);
},_hideResizeLine:function(){this._excludeChildControl(l);
},showColumnMoveFeedback:function(dI){var dR=this.getTablePaneModel();
var dQ=this.getTable().getTableColumnModel();
var dL=this.__xW.getContainerLocation().left;
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
}var dO=this.__ya.getContainerLocation().left;
var dT=this.__ya.getBounds().width;
var scrollX=dO-dL;
dK=qx.lang.Number.limit(dK,scrollX+2,scrollX+dT-1);
this._showResizeLine(dK);
return dR.getFirstColumnX()+dM;
},hideColumnMoveFeedback:function(){this._hideResizeLine();
},_focusCellAtPagePos:function(dV,dW){var dY=this._getRowForPagePos(dV,dW);

if(dY!=-1&&dY!=null){var dX=this._getColumnForPageX(dV);
this.__xT.setFocusedCell(dX,dY);
}},setFocusedCell:function(ea,eb){if(!this.isEditing()){this.__xW.setFocusedCell(ea,eb,this.__yd);
this.__wS=ea;
this.__wT=eb;
this._updateFocusIndicator();
}},getFocusedColumn:function(){return this.__wS;
},getFocusedRow:function(){return this.__wT;
},scrollCellVisible:function(ec,ed){var en=this.getTablePaneModel();
var ee=en.getX(ec);

if(ee!=-1){var ek=this.__ya.getInnerSize();

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
}},isEditing:function(){return this.__ys!=null;
},startEditing:function(){var eu=this.getTable();
var es=eu.getTableModel();
var ew=this.__wS;

if(!this.isEditing()&&(ew!=null)&&es.isColumnEditable(ew)){var ex=this.__wT;
var eq=this.getTablePaneModel().getX(ew);
var er=es.getValue(ew,ex);
this.scrollCellVisible(eq,ex);
this.__yt=eu.getTableColumnModel().getCellEditorFactory(ew);
var et={col:ew,row:ex,xPos:eq,value:er,table:eu};
this.__ys=this.__yt.createCellEditor(et);
if(this.__ys===null){return false;
}else if(this.__ys instanceof qx.ui.window.Window){this.__ys.setModal(true);
this.__ys.setShowClose(false);
this.__ys.addListener(T,this._onCellEditorModalWindowClose,this);
var f=eu.getModalCellEditorPreOpenFunction();

if(f!=null){f(this.__ys,et);
}this.__ys.open();
}else{var ev=this.__yb.getInnerSize();
this.__ys.setUserBounds(0,0,ev.width,ev.height);
this.__yb.addListener(k,function(e){this.__yn={row:this.__wT,col:this.__wS};
e.stopPropagation();
},this);
this.__yb.add(this.__ys);
this.__yb.addState(bk);
this.__yb.setKeepActive(false);
this.__yb.setDecorator(bo);
this.__ys.focus();
this.__ys.activate();
}return true;
}return false;
},stopEditing:function(){if(!this.getShowCellFocusIndicator()){this.__yb.setDecorator(null);
}this.flushEditor();
this.cancelEditing();
},flushEditor:function(){if(this.isEditing()){var ez=this.__yt.getCellEditorValue(this.__ys);
var ey=this.getTable().getTableModel().getValue(this.__wS,this.__wT);
this.getTable().getTableModel().setValue(this.__wS,this.__wT,ez);
this.__xT.focus();
this.__xT.fireDataEvent(K,{row:this.__wT,col:this.__wS,oldValue:ey,value:ez});
}},cancelEditing:function(){if(this.isEditing()&&!this.__ys.pendingDispose){if(this._cellEditorIsModalWindow){this.__ys.destroy();
this.__ys=null;
this.__yt=null;
this.__ys.pendingDispose=true;
}else{this.__yb.removeState(bk);
this.__yb.setKeepActive(true);
this.__ys.destroy();
this.__ys=null;
this.__yt=null;
}}},_onCellEditorModalWindowClose:function(e){this.stopEditing();
},_getColumnForPageX:function(eA){var eD=this.getTable().getTableColumnModel();
var eE=this.getTablePaneModel();
var eC=eE.getColumnCount();
var eG=this.__xW.getContentLocation().left;

for(var x=0;x<eC;x++){var eB=eE.getColumnAtX(x);
var eF=eD.getColumnWidth(eB);
eG+=eF;

if(eA<eG){return eB;
}}return null;
},_getResizeColumnForPageX:function(eH){var eL=this.getTable().getTableColumnModel();
var eM=this.getTablePaneModel();
var eK=eM.getColumnCount();
var eO=this.__ps.getContainerLocation().left;
var eI=qx.ui.table.pane.Scroller.RESIZE_REGION_RADIUS;

for(var x=0;x<eK;x++){var eJ=eM.getColumnAtX(x);
var eN=eL.getColumnWidth(eJ);
eO+=eN;

if(eH>=(eO-eI)&&eH<=(eO+eI)){return eJ;
}}return -1;
},_getRowForPagePos:function(eP,eQ){var eR=this.__xW.getContentLocation();

if(eP<eR.left||eP>eR.right){return null;
}
if(eQ>=eR.top&&eQ<=eR.bottom){var eS=this.getTable().getRowHeight();
var scrollY=this.__xV.getPosition();

if(this.getTable().getKeepFirstVisibleRowComplete()){scrollY=Math.floor(scrollY/eS)*eS;
}var eV=scrollY+eQ-eR.top;
var eX=Math.floor(eV/eS);
var eW=this.getTable().getTableModel();
var eT=eW.getRowCount();
return (eX<eT)?eX:null;
}var eU=this.__ps.getContainerLocation();

if(eQ>=eU.top&&eQ<=eU.bottom&&eP<=eU.right){return -1;
}return null;
},setTopRightWidget:function(eY){var fa=this.__yu;

if(fa!=null){this.__xX.remove(fa);
}
if(eY!=null){this.__xX.add(eY);
}this.__yu=eY;
},getTopRightWidget:function(){return this.__yu;
},getHeader:function(){return this.__ps;
},getTablePane:function(){return this.__xW;
},getVerticalScrollBarWidth:function(){var fb=this.__xV;
return fb.isVisible()?(fb.getSizeHint().width||0):0;
},getNeededScrollBars:function(fc,fd){var fm=this.__xV;
var fq=fm.getSizeHint().width+fm.getMarginLeft()+fm.getMarginRight();
var fs=this.__xU;
var fr=fs.getSizeHint().height+fs.getMarginTop()+fs.getMarginBottom();
var fk=this.__ya.getInnerSize();
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
},getPaneClipper:function(){return this.__ya;
},_applyScrollTimeout:function(ft,fu){this._startInterval(ft);
},_startInterval:function(fv){this.__kr.setInterval(fv);
this.__kr.start();
},_stopInterval:function(){this.__kr.stop();
},_postponedUpdateContent:function(){this._updateContent();
},_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.__yd&&!this.__xW._layoutPending){this.__yd=false;
this._updateContent();
}}),_updateContent:function(){var fA=this.__ya.getInnerSize();

if(!fA){return;
}var fD=fA.height;
var scrollX=this.__xU.getPosition();
var scrollY=this.__xV.getPosition();
var fx=this.getTable().getRowHeight();
var fy=Math.floor(scrollY/fx);
var fC=this.__xW.getFirstVisibleRow();
this.__xW.setFirstVisibleRow(fy);
var fz=Math.ceil(fD/fx);
var fw=0;
var fB=this.getTable().getKeepFirstVisibleRowComplete();

if(!fB){fz++;
fw=scrollY%fx;
}this.__xW.setVisibleRowCount(fz);

if(fy!=fC){this._updateFocusIndicator();
}this.__ya.scrollToX(scrollX);
if(!fB){this.__ya.scrollToY(fw);
}},_updateFocusIndicator:function(){var fE=this.getTable();

if(!fE.getEnabled()){return;
}this.__yb.moveToCell(this.__wS,this.__wT);
}},destruct:function(){this._stopInterval();
var fF=this.getTablePaneModel();

if(fF){fF.dispose();
}this.__yn=this.__yu=this.__xT=null;
this._disposeObjects(U,F,X,t,bc,bd,s,a,v);
}});
})();
(function(){var j="px",i="no-repeat",h="repeat",g="gecko",f="scale",e="string",d="static",c="'",b="qx.ui.table.cellrenderer.AbstractImage",a="}",A="  text-align:center;",z="scale-x",y="repeat-y",x=".qooxdoo-table-cell-icon {",w="",v="<div></div>",u="top",t="engine.version",s="engine.name",r="abstract",p=" qooxdoo-table-cell-icon",q="inline-block",n="repeat-x",o="  padding-top:1px;",l="title='",m="scale-y",k="-moz-inline-box";
qx.Class.define(b,{extend:qx.ui.table.cellrenderer.Abstract,type:r,construct:function(){qx.ui.table.cellrenderer.Abstract.call(this);
var B=this.self(arguments);

if(!B.stylesheet){B.stylesheet=qx.bom.Stylesheet.createElement(x+A+o+a);
}},properties:{repeat:{check:function(C){var D=[f,z,m,h,n,y,i];
return qx.lang.Array.contains(D,C);
},init:i}},members:{__AG:16,__AH:16,__Ii:null,_insetY:2,_identifyImage:function(E){throw new Error("_identifyImage is abstract");
},_getImageInfos:function(F){var G=this._identifyImage(F);
if(G==null||typeof G==e){G={url:G,tooltip:null};
}if(!G.imageWidth||!G.imageHeight){var H=this.__AI(G.url);
G.imageWidth=H.width;
G.imageHeight=H.height;
}G.width=G.imageWidth;
G.height=G.imageHeight;
return G;
},__AI:function(I){var L=qx.util.ResourceManager.getInstance();
var K=qx.io.ImageLoader;
var J,M;
if(L.has(I)){J=L.getImageWidth(I);
M=L.getImageHeight(I);
}else if(K.isLoaded(I)){J=K.getWidth(I);
M=K.getHeight(I);
}else{J=this.__AG;
M=this.__AH;
}return {width:J,height:M};
},createDataCellHtml:function(N,O){this.__Ii=this._getImageInfos(N);
return qx.ui.table.cellrenderer.Abstract.prototype.createDataCellHtml.call(this,N,O);
},_getCellClass:function(P){return qx.ui.table.cellrenderer.Abstract.prototype._getCellClass.call(this)+p;
},_getContentHtml:function(Q){var content=v;
if(this.__Ii.url){content=qx.bom.element.Decoration.create(this.__Ii.url,this.getRepeat(),{width:this.__Ii.width+j,height:this.__Ii.height+j,display:qx.core.Environment.get(s)==g&&qx.core.Environment.get(t)<1.9?k:q,verticalAlign:u,position:d});
}return content;
},_getCellAttributes:function(R){var S=this.__Ii.tooltip;

if(S){return l+S+c;
}else{return w;
}}},destruct:function(){this.__Ii=null;
}});
})();
(function(){var h="headerCellRendererChanged",g="visibilityChangedPre",f="Number",e="qx.event.type.Event",d="_applyFirstColumnX",c="Integer",b="qx.ui.table.pane.Model",a="_applyMaxColumnCount";
qx.Class.define(b,{extend:qx.core.Object,construct:function(i){qx.core.Object.call(this);
this.setTableColumnModel(i);
},events:{"modelChanged":e},statics:{EVENT_TYPE_MODEL_CHANGED:"modelChanged"},properties:{firstColumnX:{check:c,init:0,apply:d},maxColumnCount:{check:f,init:-1,apply:a}},members:{__yy:null,__yz:null,_applyFirstColumnX:function(j,k){this.__yy=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},_applyMaxColumnCount:function(l,m){this.__yy=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},setTableColumnModel:function(n){if(this.__yz){this.__yz.removeListener(g,this._onColVisibilityChanged,this);
this.__yz.removeListener(h,this._onColVisibilityChanged,this);
}this.__yz=n;
this.__yz.addListener(g,this._onColVisibilityChanged,this);
this.__yz.addListener(h,this._onHeaderCellRendererChanged,this);
this.__yy=null;
},_onColVisibilityChanged:function(o){this.__yy=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},_onHeaderCellRendererChanged:function(p){this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},getColumnCount:function(){if(this.__yy==null){var q=this.getFirstColumnX();
var s=this.getMaxColumnCount();
var r=this.__yz.getVisibleColumnCount();

if(s==-1||(q+s)>r){this.__yy=r-q;
}else{this.__yy=s;
}}return this.__yy;
},getColumnAtX:function(t){var u=this.getFirstColumnX();
return this.__yz.getVisibleColumnAtX(u+t);
},getX:function(v){var w=this.getFirstColumnX();
var y=this.getMaxColumnCount();
var x=this.__yz.getVisibleX(v)-w;

if(x>=0&&(y==-1||x<y)){return x;
}else{return -1;
}},getColumnLeft:function(z){var C=0;
var B=this.getColumnCount();

for(var x=0;x<B;x++){var A=this.getColumnAtX(x);

if(A==z){return C;
}C+=this.__yz.getColumnWidth(A);
}return -1;
},getTotalWidth:function(){var D=0;
var E=this.getColumnCount();

for(var x=0;x<E;x++){var F=this.getColumnAtX(x);
D+=this.__yz.getColumnWidth(F);
}return D;
}},destruct:function(){if(this.__yz){this.__yz.removeListener(g,this._onColVisibilityChanged,this);
this.__yz.removeListener(h,this._onColVisibilityChanged,this);
}this.__yz=null;
}});
})();
(function(){var f="changeVisible",d="qx.ui.table.columnmenu.MenuItem",c="_applyVisible",b="Boolean",a="changeValue";
qx.Class.define(d,{extend:qx.ui.menu.CheckBox,implement:qx.ui.table.IColumnMenuItem,properties:{visible:{check:b,init:true,apply:c,event:f}},construct:function(g){qx.ui.menu.CheckBox.call(this,g);
this.addListener(a,function(e){this.bInListener=true;
this.setVisible(e.getData());
this.bInListener=false;
});
},members:{__xe:false,_applyVisible:function(h,i){if(!this.bInListener){this.setValue(h);
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
(function(){var e="first",d="last",c="hovered",b="__xJ",a="qx.ui.table.pane.Header";
qx.Class.define(a,{extend:qx.ui.core.Widget,construct:function(f){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.HBox());
this.__mC=new qx.ui.core.Blocker(this);
this.__xJ=f;
},members:{__xJ:null,__xR:null,__xS:null,__mC:null,getPaneScroller:function(){return this.__xJ;
},getTable:function(){return this.__xJ.getTable();
},getBlocker:function(){return this.__mC;
},onColOrderChanged:function(){this._updateContent(true);
},onPaneModelChanged:function(){this._updateContent(true);
},onTableModelMetaDataChanged:function(){this._updateContent();
},setColumnWidth:function(g,h,i){var j=this.getHeaderWidgetAtColumn(g);

if(j!=null){j.setWidth(h);
}},setMouseOverColumn:function(k){if(k!=this.__xS){if(this.__xS!=null){var l=this.getHeaderWidgetAtColumn(this.__xS);

if(l!=null){l.removeState(c);
}}
if(k!=null){this.getHeaderWidgetAtColumn(k).addState(c);
}this.__xS=k;
}},getHeaderWidgetAtColumn:function(m){var n=this.getPaneScroller().getTablePaneModel().getX(m);
return this._getChildren()[n];
},showColumnMoveFeedback:function(o,x){var s=this.getContainerLocation();

if(this.__xR==null){var y=this.getTable();
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
this.__xR=q;
}this.__xR.setLayoutProperties({left:s.left+x});
this.__xR.show();
},hideColumnMoveFeedback:function(){if(this.__xR!=null){this.__xR.destroy();
this.__xR=null;
}},isShowingColumnMoveFeedback:function(){return this.__xR!=null;
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
}}},destruct:function(){this.__mC.dispose();
this._disposeObjects(b);
}});
})();
(function(){var j="",i="table-row-background-even",h="Boolean",g="content",f="default",e="height:",d="'",c="table-row",b="table-row-background-focused",a="css.boxmodel",v=';color:',u="table-row-background-odd",t="1px solid ",s="table-row-line",r="table-row-background-selected",q="background-color:",p=';border-bottom: 1px solid ',o="table-row-selected",n="table-row-background-focused-selected",m="px;",k="qx.ui.table.rowrenderer.Default",l=";";
qx.Class.define(k,{extend:qx.core.Object,implement:qx.ui.table.IRowRenderer,construct:function(){qx.core.Object.call(this);
this.__xc=j;
this.__xc={};
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
},properties:{highlightFocusRow:{check:h,init:true}},members:{_colors:null,__xd:null,__xc:null,_insetY:1,_renderFont:function(x){if(x){this.__xd=x.getStyles();
this.__xc=qx.bom.element.Style.compile(this.__xd);
this.__xc=this.__xc.replace(/"/g,d);
}else{this.__xc=j;
this.__xd=qx.bom.Font.getDefaultStyles();
}},updateDataRowElement:function(y,z){var B=this.__xd;
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
E.push(this.__xc);
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
}},destruct:function(){this._colors=this.__xd=this.__xc=null;
}});
})();
(function(){var g="String",f="_applyIconTrue",e="decoration/table/boolean-true.png",d="qx.ui.table.cellrenderer.Boolean",c=";padding-top:4px;",b="decoration/table/boolean-false.png",a="_applyIconFalse";
qx.Class.define(d,{extend:qx.ui.table.cellrenderer.AbstractImage,construct:function(){qx.ui.table.cellrenderer.AbstractImage.call(this);
this.__Gj=qx.util.AliasManager.getInstance();
this.initIconTrue();
this.initIconFalse();
},properties:{iconTrue:{check:g,init:e,apply:f},iconFalse:{check:g,init:b,apply:a}},members:{__BO:null,__BP:false,__Gj:null,_applyIconTrue:function(h){this.__BO=this.__Gj.resolve(h);
},_applyIconFalse:function(i){this.__BP=this.__Gj.resolve(i);
},_insetY:5,_getCellStyle:function(j){return qx.ui.table.cellrenderer.AbstractImage.prototype._getCellStyle.call(this,j)+c;
},_identifyImage:function(k){var l={imageWidth:11,imageHeight:11};

switch(k.value){case true:l.url=this.__BO;
break;
case false:l.url=this.__BP;
break;
default:l.url=null;
break;
}return l;
}},destruct:function(){this.__Gj=null;
}});
})();
(function(){var q="Boolean",p="column-button",o="Function",n="qx.event.type.Data",m="statusbar",k="qx.ui.table.pane.CellEvent",h="function",g="PageUp",f="dataChanged",e="changeLocale",bH="changeSelection",bG="__xa",bF="appear",bE="qx.dynlocale",bD='"',bC="Enter",bB="metaDataChanged",bA="_applyStatusBarVisible",bz="columnVisibilityMenuCreateStart",by="blur",y="qx.ui.table.Table",z="columnVisibilityMenuCreateEnd",v="changeVisible",w="_applyResetSelectionOnHeaderClick",t="_applyMetaColumnCounts",u="focus",r="changeDataRowRenderer",s="changeHeaderCellHeight",G="Escape",H="A",ba="changeSelectionModel",V="Left",bi="__wQ",bd="Down",bu="Integer",bo="_applyHeaderCellHeight",O="visibilityChanged",bx="qx.ui.table.ITableModel",bw="orderChanged",bv="_applySelectionModel",M="menu-button",R="menu",T="_applyAdditionalStatusBarText",X="_applyFocusCellOnMouseMove",bb="table",be="_applyColumnVisibilityButtonVisible",bk="changeTableModel",bq="qx.event.type.Event",A="tableWidthChanged",B="_applyHeaderCellsVisible",Q="Object",bh="_applyShowCellFocusIndicator",bg="resize",bf="verticalScrollBarChanged",bm="changeScrollY",bl="_applyTableModel",bc="End",bj="_applyKeepFirstVisibleRowComplete",a="widthChanged",bp="one of one row",C="Home",D="_applyRowHeight",W="F2",b="Up",d="%1 rows",L="qx.ui.table.selection.Model",E="one row",F="__wR",J="PageDown",Y="%1 of %2 rows",bs="__kr",br="keypress",S="changeRowHeight",bt="__wX",N="Number",bn="header",I="_applyContextMenuFromDataCellsOnly",K="qx.ui.table.IRowRenderer",c="Right",U="__wY",P="Space";
qx.Class.define(y,{extend:qx.ui.core.Widget,construct:function(bI,bJ){qx.ui.core.Widget.call(this);
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
this.__wQ=new qx.ui.container.Composite(new qx.ui.layout.HBox());
this._add(this.__wQ,{flex:1});
this.setDataRowRenderer(new qx.ui.table.rowrenderer.Default(this));
this.__wR=this.getNewSelectionManager()(this);
this.setSelectionModel(this.getNewSelectionModel()(this));
this.setTableModel(bI||this.getEmptyTableModel());
this.setMetaColumnCounts([-1]);
this.setTabIndex(1);
this.addListener(br,this._onKeyPress);
this.addListener(u,this._onFocusChanged);
this.addListener(by,this._onFocusChanged);
var bK=new qx.ui.core.Widget().set({height:0});
this._add(bK);
bK.addListener(bg,this._onResize,this);
this.__wS=null;
this.__wT=null;
if(qx.core.Environment.get(bE)){qx.locale.Manager.getInstance().addListener(e,this._onChangeLocale,this);
}this.initStatusBarVisible();
bI=this.getTableModel();

if(bI.init&&typeof (bI.init)==h){bI.init(this);
}},events:{"columnVisibilityMenuCreateStart":n,"columnVisibilityMenuCreateEnd":n,"tableWidthChanged":bq,"verticalScrollBarChanged":n,"cellClick":k,"cellDblclick":k,"cellContextmenu":k,"dataEdited":n},statics:{__wU:{cellClick:1,cellDblclick:1,cellContextmenu:1}},properties:{appearance:{refine:true,init:bb},focusable:{refine:true,init:true},minWidth:{refine:true,init:50},initiallyHiddenColumns:{init:null},selectable:{refine:true,init:false},selectionModel:{check:L,apply:bv,event:ba},tableModel:{check:bx,apply:bl,event:bk},rowHeight:{check:N,init:20,apply:D,event:S,themeable:true},forceLineHeight:{check:q,init:true},headerCellsVisible:{check:q,init:true,apply:B,themeable:true},headerCellHeight:{check:bu,init:16,apply:bo,event:s,nullable:true,themeable:true},statusBarVisible:{check:q,init:true,apply:bA},additionalStatusBarText:{nullable:true,init:null,apply:T},columnVisibilityButtonVisible:{check:q,init:true,apply:be,themeable:true},metaColumnCounts:{check:Q,apply:t},focusCellOnMouseMove:{check:q,init:false,apply:X},rowFocusChangeModifiesSelection:{check:q,init:true},showCellFocusIndicator:{check:q,init:true,apply:bh},contextMenuFromDataCellsOnly:{check:q,init:true,apply:I},keepFirstVisibleRowComplete:{check:q,init:true,apply:bj},alwaysUpdateCells:{check:q,init:false},resetSelectionOnHeaderClick:{check:q,init:true,apply:w},dataRowRenderer:{check:K,init:null,nullable:true,event:r},modalCellEditorPreOpenFunction:{check:o,init:null,nullable:true},newColumnMenu:{check:o,init:function(){return new qx.ui.table.columnmenu.Button();
}},newSelectionManager:{check:o,init:function(bL){return new qx.ui.table.selection.Manager(bL);
}},newSelectionModel:{check:o,init:function(bM){return new qx.ui.table.selection.Model(bM);
}},newTableColumnModel:{check:o,init:function(bN){return new qx.ui.table.columnmodel.Basic(bN);
}},newTablePane:{check:o,init:function(bO){return new qx.ui.table.pane.Pane(bO);
}},newTablePaneHeader:{check:o,init:function(bP){return new qx.ui.table.pane.Header(bP);
}},newTablePaneScroller:{check:o,init:function(bQ){return new qx.ui.table.pane.Scroller(bQ);
}},newTablePaneModel:{check:o,init:function(bR){return new qx.ui.table.pane.Model(bR);
}}},members:{__wS:null,__wT:null,__wQ:null,__wR:null,__wV:null,__wW:null,__wE:null,__wX:null,__wY:null,__xa:null,__xb:null,__kr:null,_createChildControlImpl:function(bS,bT){var bU;

switch(bS){case m:bU=new qx.ui.basic.Label();
bU.set({allowGrowX:true});
this._add(bU);
break;
case p:bU=this.getNewColumnMenu()();
bU.set({focusable:false});
var bV=bU.factory(R,{table:this});
bV.addListener(bF,this._initColumnMenu,this);
break;
}return bU||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,bS);
},_applySelectionModel:function(bW,bX){this.__wR.setSelectionModel(bW);

if(bX!=null){bX.removeListener(bH,this._onSelectionChanged,this);
}bW.addListener(bH,this._onSelectionChanged,this);
},_applyRowHeight:function(bY,ca){var cb=this._getPaneScrollerArr();

for(var i=0;i<cb.length;i++){cb[i].updateVerScrollBarMaximum();
}},_applyHeaderCellsVisible:function(cc,cd){var ce=this._getPaneScrollerArr();

for(var i=0;i<ce.length;i++){ce[i]._excludeChildControl(bn);
}},_applyHeaderCellHeight:function(cf,cg){var ch=this._getPaneScrollerArr();

for(var i=0;i<ch.length;i++){ch[i].getHeader().setHeight(cf);
}},getEmptyTableModel:function(){if(!this.__xa){this.__xa=new qx.ui.table.model.Simple();
this.__xa.setColumns([]);
this.__xa.setData([]);
}return this.__xa;
},_applyTableModel:function(ci,cj){this.getTableColumnModel().init(ci.getColumnCount(),this);

if(cj!=null){cj.removeListener(bB,this._onTableModelMetaDataChanged,this);
cj.removeListener(f,this._onTableModelDataChanged,this);
}ci.addListener(bB,this._onTableModelMetaDataChanged,this);
ci.addListener(f,this._onTableModelDataChanged,this);
this._updateStatusBar();
this._updateTableData(0,ci.getRowCount(),0,ci.getColumnCount());
this._onTableModelMetaDataChanged();
if(cj&&ci.init&&typeof (ci.init)==h){ci.init(this);
}},getTableColumnModel:function(){if(!this.__wY){var cm=this.__wY=this.getNewTableColumnModel()(this);
cm.addListener(O,this._onColVisibilityChanged,this);
cm.addListener(a,this._onColWidthChanged,this);
cm.addListener(bw,this._onColOrderChanged,this);
var cl=this.getTableModel();
cm.init(cl.getColumnCount(),this);
var ck=this._getPaneScrollerArr();

for(var i=0;i<ck.length;i++){var cn=ck[i];
var co=cn.getTablePaneModel();
co.setTableColumnModel(cm);
}}return this.__wY;
},_applyStatusBarVisible:function(cp,cq){if(cp){this._showChildControl(m);
}else{this._excludeChildControl(m);
}
if(cp){this._updateStatusBar();
}},_applyAdditionalStatusBarText:function(cr,cs){this.__wV=cr;
this._updateStatusBar();
},_applyColumnVisibilityButtonVisible:function(ct,cu){if(ct){this._showChildControl(p);
}else{this._excludeChildControl(p);
}},_applyMetaColumnCounts:function(cv,cw){var cD=cv;
var cx=this._getPaneScrollerArr();
var cB={};

if(cv>cw){var cF=qx.event.Registration.getManager(cx[0]);

for(var cG in qx.ui.table.Table.__wU){cB[cG]={};
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
for(cG in qx.ui.table.Table.__wU){if(!cB[cG]){break;
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
this.__wQ.add(cH,{flex:cI});
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
}},_applyContextMenuFromDataCellsOnly:function(cR,cS){var cT=this._getPaneScrollerArr();

for(var i=0;i<cT.length;i++){cT[i].setContextMenuFromDataCellsOnly(cR);
}},_applyKeepFirstVisibleRowComplete:function(cU,cV){var cW=this._getPaneScrollerArr();

for(var i=0;i<cW.length;i++){cW[i].onKeepFirstVisibleRowCompleteChanged();
}},_applyResetSelectionOnHeaderClick:function(cX,cY){var da=this._getPaneScrollerArr();

for(var i=0;i<da.length;i++){da[i].setResetSelectionOnHeaderClick(cX);
}},getSelectionManager:function(){return this.__wR;
},_getPaneScrollerArr:function(){return this.__wQ.getChildren();
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
if(this.__wT>=dq&&this.__wT<(dq+dr)){this.setFocusedCell();
}}
for(var i=0;i<ds.length;i++){ds[i].onTableModelDataChanged(dl,dm,dn,dp);
}var dt=this.getTableModel().getRowCount();

if(dt!=this.__wW){this.__wW=dt;
this._updateScrollBarVisibility();
this._updateStatusBar();
}},_onScrollY:function(du){if(!this.__wE){this.__wE=true;
var dv=this._getPaneScrollerArr();

for(var i=0;i<dv.length;i++){dv[i].setScrollY(du.getData());
}this.__wE=false;
}},_onKeyPress:function(dw){if(!this.getEnabled()){return;
}var dD=this.__wT;
var dA=true;
var dE=dw.getKeyIdentifier();

if(this.isEditing()){if(dw.getModifiers()==0){switch(dE){case bC:this.stopEditing();
var dD=this.__wT;
this.moveFocusedCell(0,1);

if(this.__wT!=dD){dA=this.startEditing();
}break;
case G:this.cancelEditing();
this.focus();
break;
default:dA=false;
break;
}}}else{if(dw.isCtrlPressed()){dA=true;

switch(dE){case H:var dB=this.getTableModel().getRowCount();

if(dB>0){this.getSelectionModel().setSelectionInterval(0,dB-1);
}break;
default:dA=false;
break;
}}else{switch(dE){case P:this.__wR.handleSelectKeyDown(this.__wT,dw);
break;
case W:case bC:this.startEditing();
dA=true;
break;
case C:this.setFocusedCell(this.__wS,0,true);
break;
case bc:var dB=this.getTableModel().getRowCount();
this.setFocusedCell(this.__wS,dB-1,true);
break;
case V:this.moveFocusedCell(-1,0);
break;
case c:this.moveFocusedCell(1,0);
break;
case b:this.moveFocusedCell(0,-1);
break;
case bd:this.moveFocusedCell(0,1);
break;
case g:case J:var dz=this.getPaneScroller(0);
var dC=dz.getTablePane();
var dy=this.getRowHeight();
var dx=(dE==g)?-1:1;
dB=dC.getVisibleRowCount()-1;
dz.setScrollY(dz.getScrollY()+dx*dB*dy);
this.moveFocusedCell(0,dx*dB);
break;
default:dA=false;
}}}
if(dD!=this.__wT&&this.getRowFocusChangeModifiesSelection()){this.__wR.handleMoveKeyDown(this.__wT,dw);
}
if(dA){dw.preventDefault();
dw.stopPropagation();
}},_onFocusChanged:function(dF){var dG=this._getPaneScrollerArr();

for(var i=0;i<dG.length;i++){dG[i].onFocusChanged();
}},_onColVisibilityChanged:function(dH){var dI=this._getPaneScrollerArr();

for(var i=0;i<dI.length;i++){dI[i].onColVisibilityChanged();
}var dJ=dH.getData();

if(this.__wX!=null&&dJ.col!=null&&dJ.visible!=null){this.__wX[dJ.col].setVisible(dJ.visible);
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
},setFocusedCell:function(dR,dS,dT){if(!this.isEditing()&&(dR!=this.__wS||dS!=this.__wT)){if(dR===null){dR=0;
}this.__wS=dR;
this.__wT=dS;
var dU=this._getPaneScrollerArr();

for(var i=0;i<dU.length;i++){dU[i].setFocusedCell(dR,dS);
}
if(dR!==null&&dT){this.scrollCellVisible(dR,dS);
}}},resetSelection:function(){this.getSelectionModel().resetSelection();
},resetCellFocus:function(){this.setFocusedCell(null,null,false);
},getFocusedColumn:function(){return this.__wS;
},getFocusedRow:function(){return this.__wT;
},highlightFocusedRow:function(dV){this.getDataRowRenderer().setHighlightFocusRow(dV);
},clearFocusedRowHighlight:function(dW){if(dW){var dY=dW.getRelatedTarget();

if(dY instanceof qx.ui.table.pane.Pane||dY instanceof qx.ui.table.pane.FocusIndicator){return;
}}this.resetCellFocus();
var dX=this._getPaneScrollerArr();

for(var i=0;i<dX.length;i++){dX[i].onFocusChanged();
}},moveFocusedCell:function(ea,eb){var ef=this.__wS;
var eg=this.__wT;
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
}},isEditing:function(){if(this.__wS!=null){var x=this.getTableColumnModel().getVisibleX(this.__wS);
var em=this._getMetaColumnAtColumnX(x);
return this.getPaneScroller(em).isEditing();
}return false;
},startEditing:function(){if(this.__wS!=null){var x=this.getTableColumnModel().getVisibleX(this.__wS);
var eo=this._getMetaColumnAtColumnX(x);
var en=this.getPaneScroller(eo).startEditing();
return en;
}return false;
},stopEditing:function(){if(this.__wS!=null){var x=this.getTableColumnModel().getVisibleX(this.__wS);
var ep=this._getMetaColumnAtColumnX(x);
this.getPaneScroller(ep).stopEditing();
}},cancelEditing:function(){if(this.__wS!=null){var x=this.getTableColumnModel().getVisibleX(this.__wS);
var eq=this._getMetaColumnAtColumnX(x);
this.getPaneScroller(eq).cancelEditing();
}},updateContent:function(){var er=this._getPaneScrollerArr();

for(var i=0;i<er.length;i++){er[i].getTablePane().updateContent(true);
}},blockHeaderElements:function(){var es=this._getPaneScrollerArr();

for(var i=0;i<es.length;i++){es[i].getHeader().getBlocker().blockContent(20);
}this.getChildControl(p).getBlocker().blockContent(20);
},unblockHeaderElements:function(){var et=this._getPaneScrollerArr();

for(var i=0;i<et.length;i++){et[i].getHeader().getBlocker().unblockContent();
}this.getChildControl(p).getBlocker().unblockContent();
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

if(eE>=0){if(eC==0){eD=this.trn(E,d,eE,eE);
}else{eD=this.trn(bp,Y,eE,eC,eE);
}}
if(this.__wV){if(eD){eD+=this.__wV;
}else{eD=this.__wV;
}}
if(eD){this.getChildControl(m).setValue(eD);
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
if(eP){if(this.__xb==null){this.__xb=eJ[i].getVerticalScrollBarVisible();
this.__kr=qx.event.Timer.once(function(){this.__xb=null;
this.__kr=null;
},this,0);
}}eJ[i].setVerticalScrollBarVisible(eP&&eN);
if(eP&&eN!=this.__xb){this.fireDataEvent(bf,eN);
}}},_initColumnMenu:function(){var eS=this.getTableModel();
var eT=this.getTableColumnModel();
var eU=this.getChildControl(p);
eU.empty();
var eR=eU.getMenu();
var eV={table:this,menu:eR,columnButton:eU};
this.fireDataEvent(bz,eV);
this.__wX={};

for(var eW=0,l=eS.getColumnCount();eW<l;eW++){var eQ=eU.factory(M,{text:eS.getColumnName(eW),column:eW,bVisible:eT.isColumnVisible(eW)});
qx.core.Assert.assertInterface(eQ,qx.ui.table.IColumnMenuItem);
eQ.addListener(v,this._createColumnVisibilityCheckBoxHandler(eW),this);
this.__wX[eW]=eQ;
}eV={table:this,menu:eR,columnButton:eU};
this.fireDataEvent(z,eV);
},_createColumnVisibilityCheckBoxHandler:function(eX){return function(eY){var fa=this.getTableColumnModel();
fa.setColumnVisible(eX,eY.getData());
};
},setColumnWidth:function(fb,fc){this.getTableColumnModel().setColumnWidth(fb,fc);
},_onResize:function(){this.fireEvent(A);
this._updateScrollerWidths();
this._updateScrollBarVisibility();
},addListener:function(fd,fe,self,ff){if(this.self(arguments).__wU[fd]){var fh=[fd];

for(var i=0,fg=this._getPaneScrollerArr();i<fg.length;i++){fh.push(fg[i].addListener.apply(fg[i],arguments));
}return fh.join(bD);
}else{return qx.ui.core.Widget.prototype.addListener.call(this,fd,fe,self,ff);
}},removeListener:function(fi,fj,self,fk){if(this.self(arguments).__wU[fi]){for(var i=0,fl=this._getPaneScrollerArr();i<fl.length;i++){fl[i].removeListener.apply(fl[i],arguments);
}}else{qx.ui.core.Widget.prototype.removeListener.call(this,fi,fj,self,fk);
}},removeListenerById:function(fm){var fq=fm.split(bD);
var fp=fq.shift();

if(this.self(arguments).__wU[fp]){var fo=true;

for(var i=0,fn=this._getPaneScrollerArr();i<fn.length;i++){fo=fn[i].removeListenerById.call(fn[i],fq[i])&&fo;
}return fo;
}else{return qx.ui.core.Widget.prototype.removeListenerById.call(this,fm);
}},destroy:function(){this.getChildControl(p).getMenu().destroy();
qx.ui.core.Widget.prototype.destroy.call(this);
}},destruct:function(){if(qx.core.Environment.get(bE)){qx.locale.Manager.getInstance().removeListener(e,this._onChangeLocale,this);
}var fs=this.getSelectionModel();

if(fs){fs.dispose();
}var fr=this.getDataRowRenderer();

if(fr){fr.dispose();
}this._cleanUpMetaColumns(0);
this.getTableColumnModel().dispose();
this._disposeObjects(F,bi,bG,bG,U,bs);
this._disposeMap(bt);
}});
})();

});