qx.$$packageData['1e63c6c82dd0']={"locales":{},"resources":{"qx/icon/Tango/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/media-audio.png":[16,16,"png","qx"],"qx/icon/Tango/16/status/dialog-warning.png":[16,16,"png","qx"]},"translations":{"C":{},"de":{"%1 of %2 rows":"%1 von %2 Zeilen","%1 rows":"%1 Zeilen","Reset column widths":"Spaltenbreite zurücksetzen","one of one row":"Eine von einer Zeile","one row":"Eine Zeile"},"de_AT":{},"de_DE":{},"en":{},"en_GB":{},"en_US":{},"es":{"%1 of %2 rows":"%1 de %2 filas","%1 rows":"%1 filas","Reset column widths":"Reestablecer anchos de columnas","one of one row":"una de una fila","one row":"una fila"},"es_ES":{},"es_MX":{},"ro":{"%1 of %2 rows":"%1 din %2 rânduri","%1 rows":"%1 rânduri","Reset column widths":"Resetează lățimea coloanei","one of one row":"unul din un rând","one row":"un rând"},"ro_RO":{},"sv":{"%1 of %2 rows":"%1 av %2 rader","%1 rows":"%1 rader","Reset column widths":"Återställ kolumnbredder","one of one row":"en av en rad","one row":"En rad"},"sv_SE":{}}};

qx.Part.$$notifyLoad("1e63c6c82dd0", function() {
(function(){var a="qx.ui.table.ICellRenderer";
qx.Interface.define(a,{members:{createDataCellHtml:function(b,c){return true;
}}});
})();
(function(){var j="",i="px;",h=".qooxdoo-table-cell {",g="qooxdoo-table-cell",f="content",e='</div>',d="nowrap",c="default",b="}",a="width:",J=".qooxdoo-table-cell-right { text-align:right } ",I="css.boxmodel",H="0px 6px",G='<div class="',F="0px",E="height:",D="1px solid ",C=".qooxdoo-table-cell-bold { font-weight:bold } ",B="String",A="} ",q='>',r="mshtml",o='" ',p="ellipsis",m="content-box",n='left:',k="qx.ui.table.cellrenderer.Abstract",l="engine.name",s='" style="',t="abstract",v="none",u="hidden",x="table-column-line",w='px;',z=".qooxdoo-table-cell-italic { font-style:italic} ",y="absolute";
qx.Class.define(k,{type:t,implement:qx.ui.table.ICellRenderer,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
var K=qx.ui.table.cellrenderer.Abstract;

if(!K.__mL){var M=qx.theme.manager.Color.getInstance();
K.__mL=this.self(arguments);
var L=h+
qx.bom.element.Style.compile({position:y,top:F,overflow:u,whiteSpace:d,borderRight:D+M.resolve(x),padding:H,cursor:c,textOverflow:p,userSelect:v})+A+J+z+C;

if(!(qx.core.Environment.get(l)==r)){L+=h+qx.bom.element.BoxSizing.compile(m)+b;
}K.__mL.stylesheet=qx.bom.Stylesheet.createElement(L);
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
(function(){var s="",r="==",q=">",p="between",o="<",n="regex",m="!between",l=">=",k="!=",j="<=",c="font-weight",h=";",f="text-align",b='g',a=":",e="qx.ui.table.cellrenderer.Conditional",d="color",g="font-style";
qx.Class.define(e,{extend:qx.ui.table.cellrenderer.Default,construct:function(t,u,v,w){qx.ui.table.cellrenderer.Default.call(this);
this.numericAllowed=[r,k,q,o,l,j];
this.betweenAllowed=[p,m];
this.conditions=[];
this.__yd=t||s;
this.__ye=u||s;
this.__yf=v||s;
this.__yg=w||s;
},members:{__yd:null,__ye:null,__yf:null,__yg:null,__yh:function(x,y){if(x[1]!=null){y[f]=x[1];
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
var bb={"text-align":this.__yd,"color":this.__ye,"font-style":this.__yf,"font-weight":this.__yg};

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
}if(bf==true){this.__yh(this.conditions[i],bb);
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
this.__qn=h;
this.setKeepActive(true);
this.addListener(d,this._onKeyPress,this);
},properties:{visibility:{refine:true,init:b},row:{check:g,nullable:true},column:{check:g,nullable:true}},members:{__qn:null,_onKeyPress:function(e){var i=e.getKeyIdentifier();

if(i!==f&&i!==c){e.stopPropagation();
}},moveToCell:function(j,k){if(!this.__qn.getShowCellFocusIndicator()&&!this.__qn.getTable().getTableModel().isColumnEditable(j)){this.exclude();
return;
}else{this.show();
}
if(j==null){this.hide();
this.setRow(null);
this.setColumn(null);
}else{var l=this.__qn.getTablePaneModel().getX(j);

if(l==-1){this.hide();
this.setRow(null);
this.setColumn(null);
}else{var q=this.__qn.getTable();
var o=q.getTableColumnModel();
var p=this.__qn.getTablePaneModel();
var n=this.__qn.getTablePane().getFirstVisibleRow();
var m=q.getRowHeight();
this.setUserBounds(p.getColumnLeft(j)-2,(k-n)*m-2,o.getColumnWidth(j)+3,m+3);
this.show();
this.setRow(k);
this.setColumn(j);
}}}},destruct:function(){this.__qn=null;
}});
})();
(function(){var k="",j="Number",h='</div>',g='" ',f="paneUpdated",e='<div>',d="</div>",c="overflow: hidden;",b="qx.event.type.Data",a="paneReloadsData",E="div",D='style="',C="_applyMaxCacheLines",B="qx.ui.table.pane.Pane",A="width: 100%;",z="qx.event.type.Event",w="_applyVisibleRowCount",v='>',u="line-height: ",t="appear",r='class="',s="width:100%;",p="px;",q='<div ',n="'>",o="_applyFirstVisibleRow",l="<div style='",m=";position:relative;";
qx.Class.define(B,{extend:qx.ui.core.Widget,construct:function(F){qx.ui.core.Widget.call(this);
this.__pp=F;
this.__pq=0;
this.__pr=0;
this.__ps=[];
},events:{"paneReloadsData":b,"paneUpdated":z},properties:{firstVisibleRow:{check:j,init:0,apply:o},visibleRowCount:{check:j,init:0,apply:w},maxCacheLines:{check:j,init:1000,apply:C},allowShrinkX:{refine:true,init:false}},members:{__pr:null,__pq:null,__pp:null,__pt:null,__pu:null,__pv:null,__ps:null,__pw:0,_applyFirstVisibleRow:function(G,H){this.updateContent(false,G-H);
},_applyVisibleRowCount:function(I,J){this.updateContent(true);
},_getContentHint:function(){return {width:this.getPaneScroller().getTablePaneModel().getTotalWidth(),height:400};
},getPaneScroller:function(){return this.__pp;
},getTable:function(){return this.__pp.getTable();
},setFocusedCell:function(K,L,M){if(K!=this.__pv||L!=this.__pu){var N=this.__pu;
this.__pv=K;
this.__pu=L;
if(L!=N&&!M){if(N!==null){this.updateContent(false,null,N,true);
}
if(L!==null){this.updateContent(false,null,L,true);
}}}},onSelectionChanged:function(){this.updateContent(false,null,null,true);
},onFocusChanged:function(){this.updateContent(false,null,null,true);
},setColumnWidth:function(O,P){this.updateContent(true);
},onColOrderChanged:function(){this.updateContent(true);
},onPaneModelChanged:function(){this.updateContent(true);
},onTableModelDataChanged:function(Q,R,S,T){this.__px();
var V=this.getFirstVisibleRow();
var U=this.getVisibleRowCount();

if(R==-1||R>=V&&Q<V+U){this.updateContent();
}},onTableModelMetaDataChanged:function(){this.updateContent(true);
},_applyMaxCacheLines:function(W,X){if(this.__pw>=W&&W!==-1){this.__px();
}},__px:function(){this.__ps=[];
this.__pw=0;
},__py:function(Y,ba,bb){if(!ba&&!bb&&this.__ps[Y]){return this.__ps[Y];
}else{return null;
}},__pz:function(bc,bd,be,bf){var bg=this.getMaxCacheLines();

if(!be&&!bf&&!this.__ps[bc]&&bg>0){this._applyMaxCacheLines(bg);
this.__ps[bc]=bd;
this.__pw+=1;
}},updateContent:function(bh,bi,bj,bk){if(bh){this.__px();
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
bs.focusedRow=(this.__pu==bv);
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
bz.push({col:bY,xPos:x,editable:bA.isColumnEditable(bY),focusedCol:this.__pv==bY,styleLeft:bC,styleWidth:bF});
bC+=bF;
}var bX=[];
var ca=false;

for(var bE=bw;bE<bw+bx;bE++){var bH=bG.isSelectedIndex(bE);
var bK=(this.__pu==bE);
var bP=this.__py(bE,bH,bK);

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
this.__pz(bE,bQ,bH,bK);
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
}}if(!this.__pt){this.__pt=document.createElement(E);
}var ck=e;
ck+=this._getRowsHtml(ci+ce,Math.abs(cb));
ck+=h;
this.__pt.innerHTML=ck;
var cf=this.__pt.firstChild.childNodes;
if(cb>0){for(var i=cf.length-1;i>=0;i--){var ch=cf[0];
cl.appendChild(ch);
}}else{for(var i=cf.length-1;i>=0;i--){var ch=cf[cf.length-1];
cl.insertBefore(ch,cl.firstChild);
}}if(this.__pu!==null){this._updateRowStyles(this.__pu-cb);
this._updateRowStyles(this.__pu);
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
this.__pq=cw;
this.__pr=cq;
this.fireEvent(f);
}},destruct:function(){this.__pt=this.__pp=this.__ps=null;
}});
})();
(function(){var e="auto",d="string",c="number",b="*",a="qx.ui.core.ColumnData";
qx.Class.define(a,{extend:qx.ui.core.LayoutItem,construct:function(){qx.ui.core.LayoutItem.call(this);
this.setColumnWidth(e);
},members:{__nv:null,renderLayout:function(f,top,g,h){this.__nv=g;
},getComputedWidth:function(){return this.__nv;
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
(function(){var j="Function",h="Boolean",g="minWidth",f="width",e="__ny",d="qx.ui.table.columnmodel.Resize",c="qx.ui.table.columnmodel.resizebehavior.Default",b="__nx",a="maxWidth";
qx.Class.define(c,{extend:qx.ui.table.columnmodel.resizebehavior.Abstract,construct:function(){qx.ui.table.columnmodel.resizebehavior.Abstract.call(this);
this.__nw=[];
this.__nx=new qx.ui.layout.HBox();
this.__nx.connectToWidget(this);
this.__ny=new qx.util.DeferredCall(this._computeColumnsFlexWidth,this);
},properties:{newResizeBehaviorColumnData:{check:j,init:function(k){return new qx.ui.core.ColumnData();
}},initializeWidthsOnEveryAppear:{check:h,init:false},tableColumnModel:{check:d}},members:{__nx:null,__nz:null,__nw:null,__ny:null,__nA:false,setWidth:function(m,n,o){if(m>=this.__nw.length){throw new Error("Column number out of range");
}this.__nw[m].setColumnWidth(n,o);
this.__ny.schedule();
},setMinWidth:function(p,q){if(p>=this.__nw.length){throw new Error("Column number out of range");
}this.__nw[p].setMinWidth(q);
this.__ny.schedule();
},setMaxWidth:function(r,s){if(r>=this.__nw.length){throw new Error("Column number out of range");
}this.__nw[r].setMaxWidth(s);
this.__ny.schedule();
},set:function(t,u){for(var v in u){switch(v){case f:this.setWidth(t,u[v]);
break;
case g:this.setMinWidth(t,u[v]);
break;
case a:this.setMaxWidth(t,u[v]);
break;
default:throw new Error("Unknown property: "+v);
}}},onAppear:function(event,w){if(w===true||!this.__nA||this.getInitializeWidthsOnEveryAppear()){this._computeColumnsFlexWidth();
this.__nA=true;
}},onTableWidthChanged:function(event){this._computeColumnsFlexWidth();
},onVerticalScrollBarChanged:function(event){this._computeColumnsFlexWidth();
},onColumnWidthChanged:function(event){this._extendNextColumn(event);
},onVisibilityChanged:function(event){var x=event.getData();
if(x.visible){this._computeColumnsFlexWidth();
return;
}this._extendLastColumn(event);
},_setNumColumns:function(y){var z=this.__nw;
if(y<=z.length){z.splice(y,z.length);
return;
}for(var i=z.length;i<y;i++){z[i]=this.getNewResizeBehaviorColumnData()();
z[i].columnNumber=i;
}},getLayoutChildren:function(){return this.__nz;
},_computeColumnsFlexWidth:function(){this.__ny.cancel();
var E=this._getAvailableWidth();

if(E===null){return;
}var A=this.getTableColumnModel();
var C=A.getVisibleColumns();
var D=C.length;
var B=this.__nw;
var i,l;

if(D===0){return;
}var G=[];

for(i=0;i<D;i++){G.push(B[C[i]]);
}this.__nz=G;
this.__nB();
this.__nx.renderLayout(E,100);
for(i=0,l=G.length;i<l;i++){var F=G[i].getComputedWidth();
A.setColumnWidth(C[i],F);
}},__nB:function(){this.__nx.invalidateChildrenCache();
var H=this.__nz;

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
}},_getResizeColumnData:function(){return this.__nw;
}},destruct:function(){this.__nw=this.__nz=null;
this._disposeObjects(b,e);
}});
})();
(function(){var k="qx.event.type.Data",j="visibilityChanged",h="orderChanged",g="visibilityChangedPre",f="__mS",e="__mR",d="widthChanged",c="qx.ui.table.columnmodel.Basic",b="__mT",a="headerCellRendererChanged";
qx.Class.define(c,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__mM=[];
this.__mN=[];
},events:{"widthChanged":k,"visibilityChangedPre":k,"visibilityChanged":k,"orderChanged":k,"headerCellRendererChanged":k},statics:{DEFAULT_WIDTH:100,DEFAULT_HEADER_RENDERER:qx.ui.table.headerrenderer.Default,DEFAULT_DATA_RENDERER:qx.ui.table.cellrenderer.Default,DEFAULT_EDITOR_FACTORY:qx.ui.table.celleditor.TextField},members:{__mO:null,__mP:null,__mN:null,__mM:null,__mQ:null,__mR:null,__mS:null,__mT:null,init:function(l,m){this.__mQ=[];
var q=qx.ui.table.columnmodel.Basic.DEFAULT_WIDTH;
var r=this.__mR||(this.__mR=new qx.ui.table.columnmodel.Basic.DEFAULT_HEADER_RENDERER());
var o=this.__mS||(this.__mS=new qx.ui.table.columnmodel.Basic.DEFAULT_DATA_RENDERER());
var n=this.__mT||(this.__mT=new qx.ui.table.columnmodel.Basic.DEFAULT_EDITOR_FACTORY());
this.__mM=[];
this.__mN=[];
var t;
if(m){t=m.getInitiallyHiddenColumns();
}t=t||[];

for(var u=0;u<l;u++){this.__mQ[u]={width:q,headerRenderer:r,dataRenderer:o,editorFactory:n};
this.__mM[u]=u;
this.__mN[u]=u;
}this.__mP=null;
this.__mO=true;

for(var s=0;s<t.length;s++){this.setColumnVisible(t[s],false);
}this.__mO=false;

for(u=0;u<l;u++){var p={col:u,visible:this.isColumnVisible(u)};
this.fireDataEvent(g,p);
this.fireDataEvent(j,p);
}},getVisibleColumns:function(){return this.__mN!=null?this.__mN:[];
},setColumnWidth:function(v,w,y){var A=this.__mQ[v].width;

if(A!=w){this.__mQ[v].width=w;
var z={col:v,newWidth:w,oldWidth:A,isMouseAction:y||false};
this.fireDataEvent(d,z);
}},getColumnWidth:function(B){return this.__mQ[B].width;
},setHeaderCellRenderer:function(C,D){var E=this.__mQ[C].headerRenderer;

if(E!==this.__mR){E.dispose();
}this.__mQ[C].headerRenderer=D;
this.fireDataEvent(a,{col:C});
},getHeaderCellRenderer:function(F){return this.__mQ[F].headerRenderer;
},setDataCellRenderer:function(G,H){this.__mQ[G].dataRenderer=H;
var I=this.__mQ[G].dataRenderer;

if(I!==this.__mS){return I;
}return null;
},getDataCellRenderer:function(J){return this.__mQ[J].dataRenderer;
},setCellEditorFactory:function(K,L){var M=this.__mQ[K].headerRenderer;

if(M!==this.__mT){M.dispose();
}this.__mQ[K].editorFactory=L;
},getCellEditorFactory:function(N){return this.__mQ[N].editorFactory;
},_getColToXPosMap:function(){if(this.__mP==null){this.__mP={};

for(var Q=0;Q<this.__mM.length;Q++){var P=this.__mM[Q];
this.__mP[P]={overX:Q};
}
for(var O=0;O<this.__mN.length;O++){var P=this.__mN[O];
this.__mP[P].visX=O;
}}return this.__mP;
},getVisibleColumnCount:function(){return this.__mN!=null?this.__mN.length:0;
},getVisibleColumnAtX:function(R){return this.__mN[R];
},getVisibleX:function(S){return this._getColToXPosMap()[S].visX;
},getOverallColumnCount:function(){return this.__mM.length;
},getOverallColumnAtX:function(T){return this.__mM[T];
},getOverallX:function(U){return this._getColToXPosMap()[U].overX;
},isColumnVisible:function(V){return (this._getColToXPosMap()[V].visX!=null);
},setColumnVisible:function(W,X){if(X!=this.isColumnVisible(W)){if(X){var be=this._getColToXPosMap();
var bb=be[W].overX;

if(bb==null){throw new Error("Showing column failed: "+W+". The column is not added to this TablePaneModel.");
}var bc;

for(var x=bb+1;x<this.__mM.length;x++){var bd=this.__mM[x];
var Y=be[bd].visX;

if(Y!=null){bc=Y;
break;
}}if(bc==null){bc=this.__mN.length;
}this.__mN.splice(bc,0,W);
}else{var ba=this.getVisibleX(W);
this.__mN.splice(ba,1);
}this.__mP=null;
if(!this.__mO){var bf={col:W,visible:X};
this.fireDataEvent(g,bf);
this.fireDataEvent(j,bf);
}}},moveColumn:function(bg,bh){this.__mO=true;
var bk=this.__mM[bg];
var bi=this.isColumnVisible(bk);

if(bi){this.setColumnVisible(bk,false);
}this.__mM.splice(bg,1);
this.__mM.splice(bh,0,bk);
this.__mP=null;

if(bi){this.setColumnVisible(bk,true);
}this.__mO=false;
var bj={col:bk,fromOverXPos:bg,toOverXPos:bh};
this.fireDataEvent(h,bj);
},setColumnsOrder:function(bl){if(bl.length==this.__mM.length){this.__mO=true;
var bo=new Array(bl.length);

for(var bm=0;bm<this.__mM.length;bm++){var bn=this.isColumnVisible(bm);
bo[bm]=bn;

if(bn){this.setColumnVisible(bm,false);
}}this.__mM=qx.lang.Array.clone(bl);
this.__mP=null;
for(var bm=0;bm<this.__mM.length;bm++){if(bo[bm]){this.setColumnVisible(bm,true);
}}this.__mO=false;
this.fireDataEvent(h);
}else{throw new Error("setColumnsOrder: Invalid number of column positions given, expected "+this.__mM.length+", got "+bl.length);
}}},destruct:function(){for(var i=0;i<this.__mQ.length;i++){this.__mQ[i].headerRenderer.dispose();
this.__mQ[i].dataRenderer.dispose();
this.__mQ[i].editorFactory.dispose();
}this.__mM=this.__mN=this.__mQ=this.__mP=null;
this._disposeObjects(e,f,b);
}});
})();
(function(){var b="qx.ui.table.selection.Model",a="qx.ui.table.selection.Manager";
qx.Class.define(a,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
},properties:{selectionModel:{check:b}},members:{__pk:null,handleMouseDown:function(c,d){if(d.isLeftPressed()){var e=this.getSelectionModel();

if(!e.isSelectedIndex(c)){this._handleSelectEvent(c,d);
this.__pk=true;
}else{this.__pk=false;
}}else if(d.isRightPressed()&&d.getModifiers()==0){var e=this.getSelectionModel();

if(!e.isSelectedIndex(c)){e.setSelectionInterval(c,c);
}}},handleMouseUp:function(f,g){if(g.isLeftPressed()&&!this.__pk){this._handleSelectEvent(f,g);
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
this.__pl=[];
this.__pm=-1;
this.__pn=-1;
this.hasBatchModeRefCount=0;
this.__po=false;
},events:{"changeSelection":f},statics:{NO_SELECTION:1,SINGLE_SELECTION:2,SINGLE_INTERVAL_SELECTION:3,MULTIPLE_INTERVAL_SELECTION:4,MULTIPLE_INTERVAL_SELECTION_TOGGLE:5},properties:{selectionMode:{init:2,check:[1,2,3,4,5],apply:a}},members:{__po:null,__pm:null,__pn:null,__pl:null,_applySelectionMode:function(o){this.resetSelection();
},setBatchMode:function(p){if(p){this.hasBatchModeRefCount+=1;
}else{if(this.hasBatchModeRefCount==0){throw new Error("Try to turn off batch mode althoug it was not turned on.");
}this.hasBatchModeRefCount-=1;

if(this.__po){this.__po=false;
this._fireChangeSelection();
}}return this.hasBatchMode();
},hasBatchMode:function(){return this.hasBatchModeRefCount>0;
},getAnchorSelectionIndex:function(){return this.__pm;
},_setAnchorSelectionIndex:function(q){this.__pm=q;
},getLeadSelectionIndex:function(){return this.__pn;
},_setLeadSelectionIndex:function(r){this.__pn=r;
},_getSelectedRangeArr:function(){return this.__pl;
},resetSelection:function(){if(!this.isSelectionEmpty()){this._resetSelection();
this._fireChangeSelection();
}},isSelectionEmpty:function(){return this.__pl.length==0;
},getSelectedCount:function(){var t=0;

for(var i=0;i<this.__pl.length;i++){var s=this.__pl[i];
t+=s.maxIndex-s.minIndex+1;
}return t;
},isSelectedIndex:function(u){for(var i=0;i<this.__pl.length;i++){var v=this.__pl[i];

if(u>=v.minIndex&&u<=v.maxIndex){return true;
}}return false;
},getSelectedRanges:function(){var w=[];

for(var i=0;i<this.__pl.length;i++){w.push({minIndex:this.__pl[i].minIndex,maxIndex:this.__pl[i].maxIndex});
}return w;
},iterateSelection:function(x,y){for(var i=0;i<this.__pl.length;i++){for(var j=this.__pl[i].minIndex;j<=this.__pl[i].maxIndex;j++){x.call(y,j);
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
}},removeSelectionInterval:function(F,G){this.__pm=F;
this.__pn=G;
var H=Math.min(F,G);
var J=Math.max(F,G);
for(var i=0;i<this.__pl.length;i++){var L=this.__pl[i];

if(L.minIndex>J){break;
}else if(L.maxIndex>=H){var M=(L.minIndex>=H)&&(L.minIndex<=J);
var K=(L.maxIndex>=H)&&(L.maxIndex<=J);

if(M&&K){this.__pl.splice(i,1);
i--;
}else if(M){L.minIndex=J+1;
}else if(K){L.maxIndex=H-1;
}else{var I={minIndex:J+1,maxIndex:L.maxIndex};
this.__pl.splice(i+1,0,I);
L.maxIndex=H-1;
break;
}}}this._fireChangeSelection();
},_resetSelection:function(){this.__pl=[];
this.__pm=-1;
this.__pn=-1;
},_addSelectionInterval:function(N,O){this.__pm=N;
this.__pn=O;
var P=Math.min(N,O);
var R=Math.max(N,O);
var Q=0;

for(;Q<this.__pl.length;Q++){var S=this.__pl[Q];

if(S.minIndex>P){break;
}}this.__pl.splice(Q,0,{minIndex:P,maxIndex:R});
var T=this.__pl[0];

for(var i=1;i<this.__pl.length;i++){var S=this.__pl[i];

if(T.maxIndex+1>=S.minIndex){T.maxIndex=Math.max(T.maxIndex,S.maxIndex);
this.__pl.splice(i,1);
i--;
}else{T=S;
}}},_dumpRanges:function(){var U=d;

for(var i=0;i<this.__pl.length;i++){var V=this.__pl[i];
U+=k+V.minIndex+m+V.maxIndex+n;
}this.debug(U);
},_fireChangeSelection:function(){if(this.hasBatchMode()){this.__po=true;
}else{this.fireEvent(l);
}}},destruct:function(){this.__pl=null;
}});
})();
(function(){var n="appear",m="columnVisibilityMenuCreateEnd",l="tableWidthChanged",k="verticalScrollBarChanged",j="qx.ui.table.columnmodel.resizebehavior.Abstract",i="qx.ui.table.columnmodel.Resize",h="_applyBehavior",g="separator",f="visibilityChanged",e="Reset column widths",b="changeBehavior",d="user-button",c="widthChanged",a="execute";
qx.Class.define(i,{extend:qx.ui.table.columnmodel.Basic,include:qx.locale.MTranslation,construct:function(){qx.ui.table.columnmodel.Basic.call(this);
this.__mU=false;
this.__mV=false;
},properties:{behavior:{check:j,init:null,nullable:true,apply:h,event:b}},members:{__mV:null,__mU:null,__mW:null,_applyBehavior:function(p,q){if(q!=null){q.dispose();
q=null;
}p._setNumColumns(this.getOverallColumnCount());
p.setTableColumnModel(this);
},init:function(r,s){qx.ui.table.columnmodel.Basic.prototype.init.call(this,r,s);

if(this.__mW==null){this.__mW=s;
s.addListener(n,this._onappear,this);
s.addListener(l,this._onTableWidthChanged,this);
s.addListener(k,this._onverticalscrollbarchanged,this);
s.addListener(m,this._addResetColumnWidthButton,this);
this.addListener(c,this._oncolumnwidthchanged,this);
this.addListener(f,this._onvisibilitychanged,this);
}if(this.getBehavior()==null){this.setBehavior(new qx.ui.table.columnmodel.resizebehavior.Default());
}this.getBehavior()._setNumColumns(r);
},getTable:function(){return this.__mW;
},_addResetColumnWidthButton:function(event){var v=event.getData();
var u=v.columnButton;
var t=v.menu;
var o;
o=u.factory(g);
t.add(o);
o=u.factory(d,{text:this.tr(e)});
t.add(o);
o.addListener(a,this._onappear,this);
},_onappear:function(event){if(this.__mU){return ;
}this.__mU=true;
this.getBehavior().onAppear(event,event.getType()!==n);
this.__mW._updateScrollerWidths();
this.__mW._updateScrollBarVisibility();
this.__mU=false;
this.__mV=true;
},_onTableWidthChanged:function(event){if(this.__mU||!this.__mV){return ;
}this.__mU=true;
this.getBehavior().onTableWidthChanged(event);
this.__mU=false;
},_onverticalscrollbarchanged:function(event){if(this.__mU||!this.__mV){return ;
}this.__mU=true;
this.getBehavior().onVerticalScrollBarChanged(event);
qx.event.Timer.once(function(){if(this.__mW&&!this.__mW.isDisposed()){this.__mW._updateScrollerWidths();
this.__mW._updateScrollBarVisibility();
}},this,0);
this.__mU=false;
},_oncolumnwidthchanged:function(event){if(this.__mU||!this.__mV){return ;
}this.__mU=true;
this.getBehavior().onColumnWidthChanged(event);
this.__mU=false;
},_onvisibilitychanged:function(event){if(this.__mU||!this.__mV){return ;
}this.__mU=true;
this.getBehavior().onVisibilityChanged(event);
this.__mU=false;
}},destruct:function(){this.__mW=null;
}});
})();
(function(){var e="metaDataChanged",d="qx.event.type.Data",c="qx.event.type.Event",b="abstract",a="qx.ui.table.model.Abstract";
qx.Class.define(a,{type:b,extend:qx.core.Object,implement:qx.ui.table.ITableModel,events:{"dataChanged":d,"metaDataChanged":c,"sorted":d},construct:function(){qx.core.Object.call(this);
this.__mB=[];
this.__mC=[];
this.__mD={};
},members:{__mB:null,__mC:null,__mD:null,__mE:null,init:function(f){},getRowCount:function(){throw new Error("getRowCount is abstract");
},getRowData:function(g){return null;
},isColumnEditable:function(h){return false;
},isColumnSortable:function(j){return false;
},sortByColumn:function(k,l){},getSortColumnIndex:function(){return -1;
},isSortAscending:function(){return true;
},prefetchRows:function(m,n){},getValue:function(o,p){throw new Error("getValue is abstract");
},getValueById:function(q,r){return this.getValue(this.getColumnIndexById(q),r);
},setValue:function(s,t,u){throw new Error("setValue is abstract");
},setValueById:function(v,w,x){this.setValue(this.getColumnIndexById(v),w,x);
},getColumnCount:function(){return this.__mB.length;
},getColumnIndexById:function(y){return this.__mD[y];
},getColumnId:function(z){return this.__mB[z];
},getColumnName:function(A){return this.__mC[A];
},setColumnIds:function(B){this.__mB=B;
this.__mD={};

for(var i=0;i<B.length;i++){this.__mD[B[i]]=i;
}this.__mC=new Array(B.length);
if(!this.__mE){this.fireEvent(e);
}},setColumnNamesByIndex:function(C){if(this.__mB.length!=C.length){throw new Error("this.__columnIdArr and columnNameArr have different length: "+this.__mB.length+" != "+C.length);
}this.__mC=C;
this.fireEvent(e);
},setColumnNamesById:function(D){this.__mC=new Array(this.__mB.length);

for(var i=0;i<this.__mB.length;++i){this.__mC[i]=D[this.__mB[i]];
}},setColumns:function(E,F){var G=this.__mB.length==0||F;

if(F==null){if(this.__mB.length==0){F=E;
}else{F=this.__mB;
}}
if(F.length!=E.length){throw new Error("columnIdArr and columnNameArr have different length: "+F.length+" != "+E.length);
}
if(G){this.__mE=true;
this.setColumnIds(F);
this.__mE=false;
}this.setColumnNamesByIndex(E);
}},destruct:function(){this.__mB=this.__mC=this.__mD=null;
}});
})();
(function(){var e="dataChanged",d="metaDataChanged",c="qx.ui.table.model.Simple",b="Boolean",a="sorted";
qx.Class.define(c,{extend:qx.ui.table.model.Abstract,construct:function(){qx.ui.table.model.Abstract.call(this);
this.__mF=[];
this.__mG=-1;
this.__mH=[];
this.__mI=null;
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
}},members:{__mF:null,__mI:null,__mJ:null,__mH:null,__mG:null,__mK:null,getRowData:function(B){var C=this.__mF[B];

if(C==null||C.originalData==null){return C;
}else{return C.originalData;
}},getRowDataAsMap:function(D){var F=this.__mF[D];

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
},setEditable:function(K){this.__mI=[];

for(var L=0;L<this.getColumnCount();L++){this.__mI[L]=K;
}this.fireEvent(d);
},setColumnEditable:function(M,N){if(N!=this.isColumnEditable(M)){if(this.__mI==null){this.__mI=[];
}this.__mI[M]=N;
this.fireEvent(d);
}},isColumnEditable:function(O){return this.__mI?(this.__mI[O]==true):false;
},setColumnSortable:function(P,Q){if(Q!=this.isColumnSortable(P)){if(this.__mJ==null){this.__mJ=[];
}this.__mJ[P]=Q;
this.fireEvent(d);
}},isColumnSortable:function(R){return (this.__mJ?(this.__mJ[R]!==false):true);
},sortByColumn:function(S,T){var W;
var V=this.__mH[S];

if(V){W=(T?V.ascending:V.descending);
}else{if(this.getCaseSensitiveSorting()){W=(T?qx.ui.table.model.Simple._defaultSortComparatorAscending:qx.ui.table.model.Simple._defaultSortComparatorDescending);
}else{W=(T?qx.ui.table.model.Simple._defaultSortComparatorInsensitiveAscending:qx.ui.table.model.Simple._defaultSortComparatorInsensitiveDescending);
}}W.columnIndex=S;
this.__mF.sort(W);
this.__mG=S;
this.__mK=T;
var U={columnIndex:S,ascending:T};
this.fireDataEvent(a,U);
this.fireEvent(d);
},setSortMethods:function(X,Y){var ba;

if(qx.lang.Type.isFunction(Y)){ba={ascending:Y,descending:function(bb,bc){return Y(bc,bb);
}};
}else{ba=Y;
}this.__mH[X]=ba;
},getSortMethods:function(bd){return this.__mH[bd];
},clearSorting:function(){if(this.__mG!=-1){this.__mG=-1;
this.__mK=true;
this.fireEvent(d);
}},getSortColumnIndex:function(){return this.__mG;
},_setSortColumnIndex:function(be){this.__mG=be;
},isSortAscending:function(){return this.__mK;
},_setSortAscending:function(bf){this.__mK=bf;
},getRowCount:function(){return this.__mF.length;
},getValue:function(bg,bh){if(bh<0||bh>=this.__mF.length){throw new Error("this.__rowArr out of bounds: "+bh+" (0.."+this.__mF.length+")");
}return this.__mF[bh][bg];
},setValue:function(bi,bj,bk){if(this.__mF[bj][bi]!=bk){this.__mF[bj][bi]=bk;
if(this.hasListener(e)){var bl={firstRow:bj,lastRow:bj,firstColumn:bi,lastColumn:bi};
this.fireDataEvent(e,bl);
}
if(bi==this.__mG){this.clearSorting();
}}},setData:function(bm,bn){this.__mF=bm;
if(this.hasListener(e)){var bo={firstRow:0,lastRow:bm.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(e,bo);
}
if(bn!==false){this.clearSorting();
}},getData:function(){return this.__mF;
},setDataAsMapArray:function(bp,bq,br){this.setData(this._mapArray2RowArr(bp,bq),br);
},addRows:function(bs,bt,bu){if(bt==null){bt=this.__mF.length;
}bs.splice(0,0,bt,0);
Array.prototype.splice.apply(this.__mF,bs);
var bv={firstRow:bt,lastRow:this.__mF.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(e,bv);

if(bu!==false){this.clearSorting();
}},addRowsAsMapArray:function(bw,bx,by,bz){this.addRows(this._mapArray2RowArr(bw,by),bx,bz);
},setRows:function(bA,bB,bC){if(bB==null){bB=0;
}bA.splice(0,0,bB,bA.length);
Array.prototype.splice.apply(this.__mF,bA);
var bD={firstRow:bB,lastRow:this.__mF.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(e,bD);

if(bC!==false){this.clearSorting();
}},setRowsAsMapArray:function(bE,bF,bG,bH){this.setRows(this._mapArray2RowArr(bE,bG),bF,bH);
},removeRows:function(bI,bJ,bK){this.__mF.splice(bI,bJ);
var bL={firstRow:bI,lastRow:this.__mF.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1,removeStart:bI,removeCount:bJ};
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
}},destruct:function(){this.__mF=this.__mI=this.__mH=this.__mJ=null;
}});
})();
(function(){var a="qx.ui.table.IRowRenderer";
qx.Interface.define(a,{members:{updateDataRowElement:function(b,c){},getRowHeightStyle:function(d){},createRowStyle:function(e){},getRowClass:function(f){}}});
})();
(function(){var f="menu-button",e="table-column-reset-button",d="separator",c="user-button",b="qx.ui.table.columnmenu.Button",a="menu";
qx.Class.define(b,{extend:qx.ui.form.MenuButton,implement:qx.ui.table.IColumnMenuButton,construct:function(){qx.ui.form.MenuButton.call(this);
this.__nR=new qx.ui.core.Blocker(this);
},members:{__nS:null,__nR:null,factory:function(g,h){switch(g){case a:var j=new qx.ui.menu.Menu();
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
}},getBlocker:function(){return this.__nR;
},empty:function(){var n=this.getMenu();
var o=n.getChildren();

for(var i=0,l=o.length;i<l;i++){o[0].destroy();
}}},destruct:function(){this.__nR.dispose();
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
(function(){var m="Boolean",l="resize-line",k="mousedown",j="qx.event.type.Data",i="mouseup",h="qx.ui.table.pane.CellEvent",g="scroll",d="focus-indicator",c="excluded",b="scrollbar-y",bm="table-scroller-focus-indicator",bl="visible",bk="mousemove",bj="header",bi="editing",bh="click",bg="modelChanged",bf="scrollbar-x",be="cellClick",bd="pane",t="__pH",u="__pJ",r="mouseout",s="changeHorizontalScrollBarVisible",p="bottom",q="_applyScrollTimeout",n="changeScrollX",o="_applyTablePaneModel",z="Integer",A="dblclick",I="__pF",G="dataEdited",Q="mousewheel",L="interval",Y="qx.ui.table.pane.Scroller",V="_applyShowCellFocusIndicator",C="__pN",bc="__pL",bb="resize",ba="__pI",B="vertical",E="__pG",F="__pK",H="changeScrollY",J="appear",M="table-scroller",S="beforeSort",X="cellDblclick",v="horizontal",w="losecapture",D="contextmenu",P="col-resize",O="disappear",N="_applyVerticalScrollBarVisible",U="_applyHorizontalScrollBarVisible",T="cellContextmenu",K="close",R="changeTablePaneModel",a="__pM",W="qx.ui.table.pane.Model",y="changeVerticalScrollBarVisible";
qx.Class.define(Y,{extend:qx.ui.core.Widget,include:qx.ui.core.scroll.MScrollBarFactory,construct:function(bn){qx.ui.core.Widget.call(this);
this.__pE=bn;
var bo=new qx.ui.layout.Grid();
bo.setColumnFlex(0,1);
bo.setRowFlex(1,1);
this._setLayout(bo);
this.__pF=this._showChildControl(bf);
this.__pG=this._showChildControl(b);
this.__pH=this._showChildControl(bj);
this.__pI=this._showChildControl(bd);
this.__pJ=new qx.ui.container.Composite(new qx.ui.layout.HBox()).set({minWidth:0});
this._add(this.__pJ,{row:0,column:0,colSpan:2});
this.__pK=new qx.ui.table.pane.Clipper();
this.__pK.add(this.__pH);
this.__pK.addListener(w,this._onChangeCaptureHeader,this);
this.__pK.addListener(bk,this._onMousemoveHeader,this);
this.__pK.addListener(k,this._onMousedownHeader,this);
this.__pK.addListener(i,this._onMouseupHeader,this);
this.__pK.addListener(bh,this._onClickHeader,this);
this.__pJ.add(this.__pK,{flex:1});
this.__pL=new qx.ui.table.pane.Clipper();
this.__pL.add(this.__pI);
this.__pL.addListener(Q,this._onMousewheel,this);
this.__pL.addListener(bk,this._onMousemovePane,this);
this.__pL.addListener(k,this._onMousedownPane,this);
this.__pL.addListener(i,this._onMouseupPane,this);
this.__pL.addListener(bh,this._onClickPane,this);
this.__pL.addListener(D,this._onContextMenu,this);
this.__pL.addListener(A,this._onDblclickPane,this);
this.__pL.addListener(bb,this._onResizePane,this);
this._add(this.__pL,{row:1,column:0});
this.__pM=this.getChildControl(d);
this.initShowCellFocusIndicator();
this.getChildControl(l).hide();
this.addListener(r,this._onMouseout,this);
this.addListener(J,this._onAppear,this);
this.addListener(O,this._onDisappear,this);
this.__pN=new qx.event.Timer();
this.__pN.addListener(L,this._oninterval,this);
this.initScrollTimeout();
},statics:{MIN_COLUMN_WIDTH:10,RESIZE_REGION_RADIUS:5,CLICK_TOLERANCE:5,HORIZONTAL_SCROLLBAR:1,VERTICAL_SCROLLBAR:2},events:{"changeScrollY":j,"changeScrollX":j,"cellClick":h,"cellDblclick":h,"cellContextmenu":h,"beforeSort":j},properties:{horizontalScrollBarVisible:{check:m,init:false,apply:U,event:s},verticalScrollBarVisible:{check:m,init:false,apply:N,event:y},tablePaneModel:{check:W,apply:o,event:R},liveResize:{check:m,init:false},focusCellOnMouseMove:{check:m,init:false},selectBeforeFocus:{check:m,init:false},showCellFocusIndicator:{check:m,init:true,apply:V},contextMenuFromDataCellsOnly:{check:m,init:true},resetSelectionOnHeaderClick:{check:m,init:true},scrollTimeout:{check:z,init:100,apply:q},appearance:{refine:true,init:M}},members:{__pO:null,__pE:null,__pP:null,__pQ:null,__pR:null,__pS:null,__pT:null,__pU:null,__pV:null,__pW:null,__pX:null,__pY:null,__qa:null,__qb:null,__qc:false,__qd:null,__qe:null,__qf:null,__qg:null,__qh:null,__qi:null,__qj:null,__qk:null,__pF:null,__pG:null,__pH:null,__pK:null,__pI:null,__pL:null,__pM:null,__pJ:null,__pN:null,getPaneInsetRight:function(){var br=this.getTopRightWidget();
var bs=br&&br.isVisible()&&br.getBounds()?br.getBounds().width+br.getMarginLeft()+br.getMarginRight():0;
var bq=this.__pG;
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
this.__pL.add(bw);
bw.show();
bw.setDecorator(null);
break;
case l:bw=new qx.ui.core.Widget();
bw.setUserBounds(0,0,0,0);
bw.setZIndex(1000);
this.__pL.add(bw);
break;
case bf:bw=this._createScrollBar(v).set({minWidth:0,alignY:p});
bw.addListener(g,this._onScrollX,this);
this._add(bw,{row:2,column:0});
break;
case b:bw=this._createScrollBar(B);
bw.addListener(g,this._onScrollY,this);
this._add(bw,{row:1,column:1});
break;
}return bw||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,bu);
},_applyHorizontalScrollBarVisible:function(bx,by){this.__pF.setVisibility(bx?bl:c);
},_applyVerticalScrollBarVisible:function(bz,bA){this.__pG.setVisibility(bz?bl:c);
},_applyTablePaneModel:function(bB,bC){if(bC!=null){bC.removeListener(bg,this._onPaneModelChanged,this);
}bB.addListener(bg,this._onPaneModelChanged,this);
},_applyShowCellFocusIndicator:function(bD,bE){if(bD){this.__pM.setDecorator(bm);
this._updateFocusIndicator();
}else{if(this.__pM){this.__pM.setDecorator(null);
}}},getScrollY:function(){return this.__pG.getPosition();
},setScrollY:function(scrollY,bF){this.__pG.scrollTo(scrollY);

if(bF){this._updateContent();
}},getScrollX:function(){return this.__pF.getPosition();
},setScrollX:function(scrollX){this.__pF.scrollTo(scrollX);
},getTable:function(){return this.__pE;
},onColVisibilityChanged:function(){this.updateHorScrollBarMaximum();
this._updateFocusIndicator();
},setColumnWidth:function(bG,bH){this.__pH.setColumnWidth(bG,bH);
this.__pI.setColumnWidth(bG,bH);
var bI=this.getTablePaneModel();
var x=bI.getX(bG);

if(x!=-1){this.updateHorScrollBarMaximum();
this._updateFocusIndicator();
}},onColOrderChanged:function(){this.__pH.onColOrderChanged();
this.__pI.onColOrderChanged();
this.updateHorScrollBarMaximum();
},onTableModelDataChanged:function(bJ,bK,bL,bM){this.__pI.onTableModelDataChanged(bJ,bK,bL,bM);
var bN=this.getTable().getTableModel().getRowCount();

if(bN!=this.__pO){this.updateVerScrollBarMaximum();

if(this.getFocusedRow()>=bN){if(bN==0){this.setFocusedCell(null,null);
}else{this.setFocusedCell(this.getFocusedColumn(),bN-1);
}}this.__pO=bN;
}},onSelectionChanged:function(){this.__pI.onSelectionChanged();
},onFocusChanged:function(){this.__pI.onFocusChanged();
},onTableModelMetaDataChanged:function(){this.__pH.onTableModelMetaDataChanged();
this.__pI.onTableModelMetaDataChanged();
},_onPaneModelChanged:function(){this.__pH.onPaneModelChanged();
this.__pI.onPaneModelChanged();
},_onResizePane:function(){this.updateHorScrollBarMaximum();
this.updateVerScrollBarMaximum();
this._updateContent();
this.__pH._updateContent();
this.__pE._updateScrollBarVisibility();
},updateHorScrollBarMaximum:function(){var bR=this.__pL.getInnerSize();

if(!bR){return ;
}var bP=this.getTablePaneModel().getTotalWidth();
var bQ=this.__pF;

if(bR.width<bP){var bO=Math.max(0,bP-bR.width);
bQ.setMaximum(bO);
bQ.setKnobFactor(bR.width/bP);
var bS=bQ.getPosition();
bQ.setPosition(Math.min(bS,bO));
}else{bQ.setMaximum(0);
bQ.setKnobFactor(1);
bQ.setPosition(0);
}},updateVerScrollBarMaximum:function(){var cb=this.__pL.getInnerSize();

if(!cb){return ;
}var bY=this.getTable().getTableModel();
var bU=bY.getRowCount();

if(this.getTable().getKeepFirstVisibleRowComplete()){bU+=1;
}var bT=this.getTable().getRowHeight();
var bW=bU*bT;
var ca=this.__pG;

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
this.fireDataEvent(n,cc,e.getOldData());
this.__pK.scrollToX(cc);
this.__pL.scrollToX(cc);
},_onScrollY:function(e){this.fireDataEvent(H,e.getData(),e.getOldData());
this._postponedUpdateContent();
},_onMousewheel:function(e){var cd=this.getTable();

if(!cd.getEnabled()){return;
}var cg=e.getWheelDelta();
if(cg>0&&cg<1){cg=1;
}else if(cg<0&&cg>-1){cg=-1;
}this.__pG.scrollBySteps(cg);
if(this.__qe&&this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(this.__qe,this.__qf);
}var cf=this.__pG.getPosition();
var ce=this.__pG.getMaximum();
if(cg<0&&cf<=0||cg>0&&cf>=ce){return;
}e.stop();
},__ql:function(ch){var cm=this.getTable();
var cn=this.__pH.getHeaderWidgetAtColumn(this.__pX);
var ci=cn.getSizeHint().minWidth;
var ck=Math.max(ci,this.__qa+ch-this.__pY);

if(this.getLiveResize()){var cj=cm.getTableColumnModel();
cj.setColumnWidth(this.__pX,ck,true);
}else{this.__pH.setColumnWidth(this.__pX,ck,true);
var cl=this.getTablePaneModel();
this._showResizeLine(cl.getColumnLeft(this.__pX)+ck);
}this.__pY+=ck-this.__qa;
this.__qa=ck;
},__qm:function(co){var cp=qx.ui.table.pane.Scroller.CLICK_TOLERANCE;

if(this.__pH.isShowingColumnMoveFeedback()||co>this.__pW+cp||co<this.__pW-cp){this.__pT+=co-this.__pW;
this.__pH.showColumnMoveFeedback(this.__pS,this.__pT);
var cq=this.__pE.getTablePaneScrollerAtPageX(co);

if(this.__pV&&this.__pV!=cq){this.__pV.hideColumnMoveFeedback();
}
if(cq!=null){this.__pU=cq.showColumnMoveFeedback(co);
}else{this.__pU=null;
}this.__pV=cq;
this.__pW=co;
}},_onMousemoveHeader:function(e){var cx=this.getTable();

if(!cx.getEnabled()){return;
}var cy=false;
var cr=null;
var cv=e.getDocumentLeft();
var cw=e.getDocumentTop();
this.__qe=cv;
this.__qf=cw;

if(this.__pX!=null){this.__ql(cv);
cy=true;
e.stopPropagation();
}else if(this.__pS!=null){this.__qm(cv);
e.stopPropagation();
}else{var cs=this._getResizeColumnForPageX(cv);

if(cs!=-1){cy=true;
}else{var cu=cx.getTableModel();
var cz=this._getColumnForPageX(cv);

if(cz!=null&&cu.isColumnSortable(cz)){cr=cz;
}}}var ct=cy?P:null;
this.getApplicationRoot().setGlobalCursor(ct);
this.setCursor(ct);
this.__pH.setMouseOverColumn(cr);
},_onMousemovePane:function(e){var cA=this.getTable();

if(!cA.getEnabled()){return;
}var cC=e.getDocumentLeft();
var cD=e.getDocumentTop();
this.__qe=cC;
this.__qf=cD;
var cB=this._getRowForPagePos(cC,cD);

if(cB!=null&&this._getColumnForPageX(cC)!=null){if(this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(cC,cD);
}}this.__pH.setMouseOverColumn(null);
},_onMousedownHeader:function(e){if(!this.getTable().getEnabled()){return;
}var cF=e.getDocumentLeft();
var cG=this._getResizeColumnForPageX(cF);

if(cG!=-1){this._startResizeHeader(cG,cF);
e.stop();
}else{var cE=this._getColumnForPageX(cF);

if(cE!=null){this._startMoveHeader(cE,cF);
e.stop();
}}},_startResizeHeader:function(cH,cI){var cJ=this.getTable().getTableColumnModel();
this.__pX=cH;
this.__pY=cI;
this.__qa=cJ.getColumnWidth(this.__pX);
this.__pK.capture();
},_startMoveHeader:function(cK,cL){this.__pS=cK;
this.__pW=cL;
this.__pT=this.getTablePaneModel().getColumnLeft(cK);
this.__pK.capture();
},_onMousedownPane:function(e){var cP=this.getTable();

if(!cP.getEnabled()){return;
}
if(cP.isEditing()){cP.stopEditing();
}var cM=e.getDocumentLeft();
var cO=e.getDocumentTop();
var cR=this._getRowForPagePos(cM,cO);
var cQ=this._getColumnForPageX(cM);

if(cR!==null){this.__qb={row:cR,col:cQ};
this.__qc=false;
var cN=this.getSelectBeforeFocus();

if(cN){cP.getSelectionManager().handleMouseDown(cR,e);
}if(!this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(cM,cO);
}
if(!cN){cP.getSelectionManager().handleMouseDown(cR,e);
}}},_onMouseupFocusIndicator:function(e){if(this.__qb&&!this.__qc&&!this.isEditing()&&this.__pM.getRow()==this.__qb.row&&this.__pM.getColumn()==this.__qb.col){this.fireEvent(be,qx.ui.table.pane.CellEvent,[this,e,this.__qb.row,this.__qb.col],true);
this.__qc=true;
}else if(!this.isEditing()){this._onMousedownPane(e);
}},_onChangeCaptureHeader:function(e){if(this.__pX!=null){this._stopResizeHeader();
}
if(this.__pS!=null){this._stopMoveHeader();
}},_stopResizeHeader:function(){var cS=this.getTable().getTableColumnModel();
if(!this.getLiveResize()){this._hideResizeLine();
cS.setColumnWidth(this.__pX,this.__qa,true);
}this.__pX=null;
this.__pK.releaseCapture();
this.getApplicationRoot().setGlobalCursor(null);
this.setCursor(null);
if(this.isEditing()){var cT=this.__qi.getBounds().height;
this.__qi.setUserBounds(0,0,this.__qa,cT);
}},_stopMoveHeader:function(){var cY=this.getTable().getTableColumnModel();
var da=this.getTablePaneModel();
this.__pH.hideColumnMoveFeedback();

if(this.__pV){this.__pV.hideColumnMoveFeedback();
}
if(this.__pU!=null){var dc=da.getFirstColumnX()+da.getX(this.__pS);
var cX=this.__pU;

if(cX!=dc&&cX!=dc+1){var db=cY.getVisibleColumnAtX(dc);
var cW=cY.getVisibleColumnAtX(cX);
var cV=cY.getOverallX(db);
var cU=(cW!=null)?cY.getOverallX(cW):cY.getOverallColumnCount();

if(cU>cV){cU--;
}cY.moveColumn(cV,cU);
this._updateFocusIndicator();
}}this.__pS=null;
this.__pU=null;
this.__pK.releaseCapture();
},_onMouseupPane:function(e){var dd=this.getTable();

if(!dd.getEnabled()){return;
}var de=this._getRowForPagePos(e.getDocumentLeft(),e.getDocumentTop());

if(de!=-1&&de!=null&&this._getColumnForPageX(e.getDocumentLeft())!=null){dd.getSelectionManager().handleMouseUp(de,e);
}},_onMouseupHeader:function(e){var df=this.getTable();

if(!df.getEnabled()){return;
}
if(this.__pX!=null){this._stopResizeHeader();
this.__qd=true;
e.stop();
}else if(this.__pS!=null){this._stopMoveHeader();
e.stop();
}},_onClickHeader:function(e){if(this.__qd){this.__qd=false;
return;
}var dk=this.getTable();

if(!dk.getEnabled()){return;
}var di=dk.getTableModel();
var dj=e.getDocumentLeft();
var dh=this._getResizeColumnForPageX(dj);

if(dh==-1){var dn=this._getColumnForPageX(dj);

if(dn!=null&&di.isColumnSortable(dn)){var dg=di.getSortColumnIndex();
var dl=(dn!=dg)?true:!di.isSortAscending();
var dm={column:dn,ascending:dl,clickEvent:e};

if(this.fireDataEvent(S,dm,null,true)){di.sortByColumn(dn,dl);

if(this.getResetSelectionOnHeaderClick()){dk.getSelectionModel().resetSelection();
}}}}e.stop();
},_onClickPane:function(e){var dp=this.getTable();

if(!dp.getEnabled()){return;
}var ds=e.getDocumentLeft();
var dt=e.getDocumentTop();
var dq=this._getRowForPagePos(ds,dt);
var dr=this._getColumnForPageX(ds);

if(dq!=null&&dr!=null){dp.getSelectionManager().handleClick(dq,e);

if(this.__pM.isHidden()||(this.__qb&&!this.__qc&&!this.isEditing()&&dq==this.__qb.row&&dr==this.__qb.col)){this.fireEvent(be,qx.ui.table.pane.CellEvent,[this,e,dq,dr],true);
this.__qc=true;
}}},_onContextMenu:function(e){var dx=e.getDocumentLeft();
var dy=e.getDocumentTop();
var dv=this._getRowForPagePos(dx,dy);
var dw=this._getColumnForPageX(dx);
if(dv===null&&this.getContextMenuFromDataCellsOnly()){return;
}
if(!this.getShowCellFocusIndicator()||dv===null||(this.__qb&&dv==this.__qb.row&&dw==this.__qb.col)){this.fireEvent(T,qx.ui.table.pane.CellEvent,[this,e,dv,dw],true);
var du=this.getTable().getContextMenu();

if(du){if(du.getChildren().length>0){du.openAtMouse(e);
}else{du.exclude();
}e.preventDefault();
}}},_onContextMenuOpen:function(e){},_onDblclickPane:function(e){var dA=e.getDocumentLeft();
var dB=e.getDocumentTop();
this._focusCellAtPagePos(dA,dB);
this.startEditing();
var dz=this._getRowForPagePos(dA,dB);

if(dz!=-1&&dz!=null){this.fireEvent(X,qx.ui.table.pane.CellEvent,[this,e,dz],true);
}},_onMouseout:function(e){var dC=this.getTable();

if(!dC.getEnabled()){return;
}if(this.__pX==null){this.setCursor(null);
this.getApplicationRoot().setGlobalCursor(null);
}this.__pH.setMouseOverColumn(null);
},_showResizeLine:function(x){var dE=this._showChildControl(l);
var dD=dE.getWidth();
var dF=this.__pL.getBounds();
dE.setUserBounds(x-Math.round(dD/2),0,dD,dF.height);
},_hideResizeLine:function(){this._excludeChildControl(l);
},showColumnMoveFeedback:function(dG){var dP=this.getTablePaneModel();
var dO=this.getTable().getTableColumnModel();
var dJ=this.__pI.getContainerLocation().left;
var dN=dP.getColumnCount();
var dK=0;
var dI=0;
var dS=dJ;

for(var dH=0;dH<dN;dH++){var dL=dP.getColumnAtX(dH);
var dQ=dO.getColumnWidth(dL);

if(dG<dS+dQ/2){break;
}dS+=dQ;
dK=dH+1;
dI=dS-dJ;
}var dM=this.__pL.getContainerLocation().left;
var dR=this.__pL.getBounds().width;
var scrollX=dM-dJ;
dI=qx.lang.Number.limit(dI,scrollX+2,scrollX+dR-1);
this._showResizeLine(dI);
return dP.getFirstColumnX()+dK;
},hideColumnMoveFeedback:function(){this._hideResizeLine();
},_focusCellAtPagePos:function(dT,dU){var dW=this._getRowForPagePos(dT,dU);

if(dW!=-1&&dW!=null){var dV=this._getColumnForPageX(dT);
this.__pE.setFocusedCell(dV,dW);
}},setFocusedCell:function(dX,dY){if(!this.isEditing()){this.__pI.setFocusedCell(dX,dY,this.__pQ);
this.__qg=dX;
this.__qh=dY;
this._updateFocusIndicator();
}},getFocusedColumn:function(){return this.__qg;
},getFocusedRow:function(){return this.__qh;
},scrollCellVisible:function(ea,eb){var el=this.getTablePaneModel();
var ec=el.getX(ea);

if(ec!=-1){var ei=this.__pL.getInnerSize();

if(!ei){return;
}var ej=this.getTable().getTableColumnModel();
var ef=el.getColumnLeft(ea);
var em=ej.getColumnWidth(ea);
var ed=this.getTable().getRowHeight();
var en=eb*ed;
var scrollX=this.getScrollX();
var scrollY=this.getScrollY();
var ek=Math.min(ef,ef+em-ei.width);
var eh=ef;
this.setScrollX(Math.max(ek,Math.min(eh,scrollX)));
var ee=en+ed-ei.height;

if(this.getTable().getKeepFirstVisibleRowComplete()){ee+=ed;
}var eg=en;
this.setScrollY(Math.max(ee,Math.min(eg,scrollY)),true);
}},isEditing:function(){return this.__qi!=null;
},startEditing:function(){var es=this.getTable();
var eq=es.getTableModel();
var eu=this.__qg;

if(!this.isEditing()&&(eu!=null)&&eq.isColumnEditable(eu)){var ev=this.__qh;
var eo=this.getTablePaneModel().getX(eu);
var ep=eq.getValue(eu,ev);
this.scrollCellVisible(eo,ev);
this.__qj=es.getTableColumnModel().getCellEditorFactory(eu);
var er={col:eu,row:ev,xPos:eo,value:ep,table:es};
this.__qi=this.__qj.createCellEditor(er);
if(this.__qi===null){return false;
}else if(this.__qi instanceof qx.ui.window.Window){this.__qi.setModal(true);
this.__qi.setShowClose(false);
this.__qi.addListener(K,this._onCellEditorModalWindowClose,this);
var f=es.getModalCellEditorPreOpenFunction();

if(f!=null){f(this.__qi,er);
}this.__qi.open();
}else{var et=this.__pM.getInnerSize();
this.__qi.setUserBounds(0,0,et.width,et.height);
this.__pM.addListener(k,function(e){this.__qb={row:this.__qh,col:this.__qg};
e.stopPropagation();
},this);
this.__pM.add(this.__qi);
this.__pM.addState(bi);
this.__pM.setKeepActive(false);
this.__pM.setDecorator(bm);
this.__qi.focus();
this.__qi.activate();
}return true;
}return false;
},stopEditing:function(){if(!this.getShowCellFocusIndicator()){this.__pM.setDecorator(null);
}this.flushEditor();
this.cancelEditing();
},flushEditor:function(){if(this.isEditing()){var ex=this.__qj.getCellEditorValue(this.__qi);
var ew=this.getTable().getTableModel().getValue(this.__qg,this.__qh);
this.getTable().getTableModel().setValue(this.__qg,this.__qh,ex);
this.__pE.focus();
this.__pE.fireDataEvent(G,{row:this.__qh,col:this.__qg,oldValue:ew,value:ex});
}},cancelEditing:function(){if(this.isEditing()&&!this.__qi.pendingDispose){if(this._cellEditorIsModalWindow){this.__qi.destroy();
this.__qi=null;
this.__qj=null;
this.__qi.pendingDispose=true;
}else{this.__pM.removeState(bi);
this.__pM.setKeepActive(true);
this.__qi.destroy();
this.__qi=null;
this.__qj=null;
}}},_onCellEditorModalWindowClose:function(e){this.stopEditing();
},_getColumnForPageX:function(ey){var eB=this.getTable().getTableColumnModel();
var eC=this.getTablePaneModel();
var eA=eC.getColumnCount();
var eE=this.__pI.getContentLocation().left;

for(var x=0;x<eA;x++){var ez=eC.getColumnAtX(x);
var eD=eB.getColumnWidth(ez);
eE+=eD;

if(ey<eE){return ez;
}}return null;
},_getResizeColumnForPageX:function(eF){var eJ=this.getTable().getTableColumnModel();
var eK=this.getTablePaneModel();
var eI=eK.getColumnCount();
var eM=this.__pH.getContainerLocation().left;
var eG=qx.ui.table.pane.Scroller.RESIZE_REGION_RADIUS;

for(var x=0;x<eI;x++){var eH=eK.getColumnAtX(x);
var eL=eJ.getColumnWidth(eH);
eM+=eL;

if(eF>=(eM-eG)&&eF<=(eM+eG)){return eH;
}}return -1;
},_getRowForPagePos:function(eN,eO){var eP=this.__pI.getContentLocation();

if(eN<eP.left||eN>eP.right){return null;
}
if(eO>=eP.top&&eO<=eP.bottom){var eQ=this.getTable().getRowHeight();
var scrollY=this.__pG.getPosition();

if(this.getTable().getKeepFirstVisibleRowComplete()){scrollY=Math.floor(scrollY/eQ)*eQ;
}var eT=scrollY+eO-eP.top;
var eV=Math.floor(eT/eQ);
var eU=this.getTable().getTableModel();
var eR=eU.getRowCount();
return (eV<eR)?eV:null;
}var eS=this.__pH.getContainerLocation();

if(eO>=eS.top&&eO<=eS.bottom&&eN<=eS.right){return -1;
}return null;
},setTopRightWidget:function(eW){var eX=this.__qk;

if(eX!=null){this.__pJ.remove(eX);
}
if(eW!=null){this.__pJ.add(eW);
}this.__qk=eW;
},getTopRightWidget:function(){return this.__qk;
},getHeader:function(){return this.__pH;
},getTablePane:function(){return this.__pI;
},getVerticalScrollBarWidth:function(){var eY=this.__pG;
return eY.isVisible()?(eY.getSizeHint().width||0):0;
},getNeededScrollBars:function(fa,fb){var fk=this.__pG;
var fo=fk.getSizeHint().width+fk.getMarginLeft()+fk.getMarginRight();
var fq=this.__pF;
var fp=fq.getSizeHint().height+fq.getMarginTop()+fq.getMarginBottom();
var fi=this.__pL.getInnerSize();
var fc=fi?fi.width:0;

if(this.getVerticalScrollBarVisible()){fc+=fo;
}var fn=fi?fi.height:0;

if(this.getHorizontalScrollBarVisible()){fn+=fp;
}var fj=this.getTable().getTableModel();
var fg=fj.getRowCount();
var fd=this.getTablePaneModel().getTotalWidth();
var fl=this.getTable().getRowHeight()*fg;
var ff=false;
var fm=false;

if(fd>fc){ff=true;

if(fl>fn-fp){fm=true;
}}else if(fl>fn){fm=true;

if(!fb&&(fd>fc-fo)){ff=true;
}}var fh=qx.ui.table.pane.Scroller.HORIZONTAL_SCROLLBAR;
var fe=qx.ui.table.pane.Scroller.VERTICAL_SCROLLBAR;
return ((fa||ff)?fh:0)|((fb||!fm)?0:fe);
},getPaneClipper:function(){return this.__pL;
},_applyScrollTimeout:function(fr,fs){this._startInterval(fr);
},_startInterval:function(ft){this.__pN.setInterval(ft);
this.__pN.start();
},_stopInterval:function(){this.__pN.stop();
},_postponedUpdateContent:function(){this._updateContent();
},_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.__pQ&&!this.__pI._layoutPending){this.__pQ=false;
this._updateContent();
}}),_updateContent:function(){var fy=this.__pL.getInnerSize();

if(!fy){return;
}var fB=fy.height;
var scrollX=this.__pF.getPosition();
var scrollY=this.__pG.getPosition();
var fv=this.getTable().getRowHeight();
var fw=Math.floor(scrollY/fv);
var fA=this.__pI.getFirstVisibleRow();
this.__pI.setFirstVisibleRow(fw);
var fx=Math.ceil(fB/fv);
var fu=0;
var fz=this.getTable().getKeepFirstVisibleRowComplete();

if(!fz){fx++;
fu=scrollY%fv;
}this.__pI.setVisibleRowCount(fx);

if(fw!=fA){this._updateFocusIndicator();
}this.__pL.scrollToX(scrollX);
if(!fz){this.__pL.scrollToY(fu);
}},_updateFocusIndicator:function(){var fC=this.getTable();

if(!fC.getEnabled()){return;
}this.__pM.moveToCell(this.__qg,this.__qh);
}},destruct:function(){this._stopInterval();
var fD=this.getTablePaneModel();

if(fD){fD.dispose();
}this.__qb=this.__qk=this.__pE=null;
this._disposeObjects(I,E,F,bc,a,t,ba,u,C);
}});
})();
(function(){var u="px",t="gecko",s=".qooxdoo-table-cell-icon {",r="abstract",q="top",p="",o="qx.ui.table.cellrenderer.AbstractImage",n=" qooxdoo-table-cell-icon",m="<div></div>",l="engine.name",e="no-repeat",k="}",h="  text-align:center;",c="inline-block",b="static",g="engine.version",f="  padding-top:1px;",i="title='",a="string",j="-moz-inline-box",d="'";
qx.Class.define(o,{extend:qx.ui.table.cellrenderer.Abstract,type:r,construct:function(){qx.ui.table.cellrenderer.Abstract.call(this);
var v=this.self(arguments);

if(!v.stylesheet){v.stylesheet=qx.bom.Stylesheet.createElement(s+h+f+k);
}},members:{__rb:16,__rc:16,__rd:null,_insetY:2,_identifyImage:function(w){throw new Error("_identifyImage is abstract");
},_getImageInfos:function(x){var y=this._identifyImage(x);
if(y==null||typeof y==a){y={url:y,tooltip:null};
}if(!y.imageWidth||!y.imageHeight){var z=this.__re(y.url);
y.imageWidth=z.width;
y.imageHeight=z.height;
}y.width=y.imageWidth;
y.height=y.imageHeight;
return y;
},__re:function(A){var D=qx.util.ResourceManager.getInstance();
var C=qx.io.ImageLoader;
var B,E;
if(D.has(A)){B=D.getImageWidth(A);
E=D.getImageHeight(A);
}else if(C.isLoaded(A)){B=C.getWidth(A);
E=C.getHeight(A);
}else{B=this.__rb;
E=this.__rc;
}return {width:B,height:E};
},createDataCellHtml:function(F,G){this.__rd=this._getImageInfos(F);
return qx.ui.table.cellrenderer.Abstract.prototype.createDataCellHtml.call(this,F,G);
},_getCellClass:function(H){return qx.ui.table.cellrenderer.Abstract.prototype._getCellClass.call(this)+n;
},_getContentHtml:function(I){var content=m;
if(this.__rd.url){content=qx.bom.element.Decoration.create(this.__rd.url,e,{width:this.__rd.width+u,height:this.__rd.height+u,display:qx.core.Environment.get(l)==t&&qx.core.Environment.get(g)<1.9?j:c,verticalAlign:q,position:b});
}return content;
},_getCellAttributes:function(J){var K=this.__rd.tooltip;

if(K){return i+K+d;
}else{return p;
}}},destruct:function(){this.__rd=null;
}});
})();
(function(){var h="headerCellRendererChanged",g="visibilityChangedPre",f="Number",e="qx.event.type.Event",d="_applyFirstColumnX",c="Integer",b="qx.ui.table.pane.Model",a="_applyMaxColumnCount";
qx.Class.define(b,{extend:qx.core.Object,construct:function(i){qx.core.Object.call(this);
this.setTableColumnModel(i);
},events:{"modelChanged":e},statics:{EVENT_TYPE_MODEL_CHANGED:"modelChanged"},properties:{firstColumnX:{check:c,init:0,apply:d},maxColumnCount:{check:f,init:-1,apply:a}},members:{__qY:null,__ra:null,_applyFirstColumnX:function(j,k){this.__qY=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},_applyMaxColumnCount:function(l,m){this.__qY=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},setTableColumnModel:function(n){if(this.__ra){this.__ra.removeListener(g,this._onColVisibilityChanged,this);
this.__ra.removeListener(h,this._onColVisibilityChanged,this);
}this.__ra=n;
this.__ra.addListener(g,this._onColVisibilityChanged,this);
this.__ra.addListener(h,this._onHeaderCellRendererChanged,this);
this.__qY=null;
},_onColVisibilityChanged:function(o){this.__qY=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},_onHeaderCellRendererChanged:function(p){this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},getColumnCount:function(){if(this.__qY==null){var q=this.getFirstColumnX();
var s=this.getMaxColumnCount();
var r=this.__ra.getVisibleColumnCount();

if(s==-1||(q+s)>r){this.__qY=r-q;
}else{this.__qY=s;
}}return this.__qY;
},getColumnAtX:function(t){var u=this.getFirstColumnX();
return this.__ra.getVisibleColumnAtX(u+t);
},getX:function(v){var w=this.getFirstColumnX();
var y=this.getMaxColumnCount();
var x=this.__ra.getVisibleX(v)-w;

if(x>=0&&(y==-1||x<y)){return x;
}else{return -1;
}},getColumnLeft:function(z){var C=0;
var B=this.getColumnCount();

for(var x=0;x<B;x++){var A=this.getColumnAtX(x);

if(A==z){return C;
}C+=this.__ra.getColumnWidth(A);
}return -1;
},getTotalWidth:function(){var D=0;
var E=this.getColumnCount();

for(var x=0;x<E;x++){var F=this.getColumnAtX(x);
D+=this.__ra.getColumnWidth(F);
}return D;
}},destruct:function(){if(this.__ra){this.__ra.removeListener(g,this._onColVisibilityChanged,this);
this.__ra.removeListener(h,this._onColVisibilityChanged,this);
}this.__ra=null;
}});
})();
(function(){var f="changeVisible",d="qx.ui.table.columnmenu.MenuItem",c="_applyVisible",b="Boolean",a="changeValue";
qx.Class.define(d,{extend:qx.ui.menu.CheckBox,implement:qx.ui.table.IColumnMenuItem,properties:{visible:{check:b,init:true,apply:c,event:f}},construct:function(g){qx.ui.menu.CheckBox.call(this,g);
this.addListener(a,function(e){this.bInListener=true;
this.setVisible(e.getData());
this.bInListener=false;
});
},members:{__pj:false,_applyVisible:function(h,i){if(!this.bInListener){this.setValue(h);
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
(function(){var e="first",d="last",c="hovered",b="__pB",a="qx.ui.table.pane.Header";
qx.Class.define(a,{extend:qx.ui.core.Widget,construct:function(f){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.HBox());
this.__pA=new qx.ui.core.Blocker(this);
this.__pB=f;
},members:{__pB:null,__pC:null,__pD:null,__pA:null,getPaneScroller:function(){return this.__pB;
},getTable:function(){return this.__pB.getTable();
},getBlocker:function(){return this.__pA;
},onColOrderChanged:function(){this._updateContent(true);
},onPaneModelChanged:function(){this._updateContent(true);
},onTableModelMetaDataChanged:function(){this._updateContent();
},setColumnWidth:function(g,h,i){var j=this.getHeaderWidgetAtColumn(g);

if(j!=null){j.setWidth(h);
}},setMouseOverColumn:function(k){if(k!=this.__pD){if(this.__pD!=null){var l=this.getHeaderWidgetAtColumn(this.__pD);

if(l!=null){l.removeState(c);
}}
if(k!=null){this.getHeaderWidgetAtColumn(k).addState(c);
}this.__pD=k;
}},getHeaderWidgetAtColumn:function(m){var n=this.getPaneScroller().getTablePaneModel().getX(m);
return this._getChildren()[n];
},showColumnMoveFeedback:function(o,x){var s=this.getContainerLocation();

if(this.__pC==null){var y=this.getTable();
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
this.__pC=q;
}this.__pC.setLayoutProperties({left:s.left+x});
this.__pC.show();
},hideColumnMoveFeedback:function(){if(this.__pC!=null){this.__pC.destroy();
this.__pC=null;
}},isShowingColumnMoveFeedback:function(){return this.__pC!=null;
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
}}},destruct:function(){this.__pA.dispose();
this._disposeObjects(b);
}});
})();
(function(){var j="",i="table-row-background-even",h="Boolean",g="content",f="default",e="height:",d="'",c="table-row",b="table-row-background-focused",a="css.boxmodel",v=';color:',u="table-row-background-odd",t="1px solid ",s="table-row-line",r="table-row-background-selected",q="background-color:",p=';border-bottom: 1px solid ',o="table-row-selected",n="table-row-background-focused-selected",m="px;",k="qx.ui.table.rowrenderer.Default",l=";";
qx.Class.define(k,{extend:qx.core.Object,implement:qx.ui.table.IRowRenderer,construct:function(){qx.core.Object.call(this);
this.__nP=j;
this.__nP={};
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
},properties:{highlightFocusRow:{check:h,init:true}},members:{_colors:null,__nQ:null,__nP:null,_insetY:1,_renderFont:function(x){if(x){this.__nQ=x.getStyles();
this.__nP=qx.bom.element.Style.compile(this.__nQ);
this.__nP=this.__nP.replace(/"/g,d);
}else{this.__nP=j;
this.__nQ=qx.bom.Font.getDefaultStyles();
}},updateDataRowElement:function(y,z){var B=this.__nQ;
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
E.push(this.__nP);
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
}},destruct:function(){this._colors=this.__nQ=this.__nP=null;
}});
})();
(function(){var g="String",f="_applyIconTrue",e="decoration/table/boolean-true.png",d="qx.ui.table.cellrenderer.Boolean",c=";padding-top:4px;",b="decoration/table/boolean-false.png",a="_applyIconFalse";
qx.Class.define(d,{extend:qx.ui.table.cellrenderer.AbstractImage,construct:function(){qx.ui.table.cellrenderer.AbstractImage.call(this);
this.__yi=qx.util.AliasManager.getInstance();
this.initIconTrue();
this.initIconFalse();
},properties:{iconTrue:{check:g,init:e,apply:f},iconFalse:{check:g,init:b,apply:a}},members:{__yj:null,__yk:false,__yi:null,_applyIconTrue:function(h){this.__yj=this.__yi.resolve(h);
},_applyIconFalse:function(i){this.__yk=this.__yi.resolve(i);
},_insetY:5,_getCellStyle:function(j){return qx.ui.table.cellrenderer.AbstractImage.prototype._getCellStyle.call(this,j)+c;
},_identifyImage:function(k){var l={imageWidth:11,imageHeight:11};

switch(k.value){case true:l.url=this.__yj;
break;
case false:l.url=this.__yk;
break;
default:l.url=null;
break;
}return l;
}},destruct:function(){this.__yi=null;
}});
})();
(function(){var q="Boolean",p="column-button",o="Function",n="qx.event.type.Data",m="statusbar",k="qx.ui.table.pane.CellEvent",h="function",g="PageUp",f="dataChanged",e="changeLocale",bH="__nM",bG="changeSelection",bF="appear",bE="qx.dynlocale",bD='"',bC="Enter",bB="metaDataChanged",bA="_applyStatusBarVisible",bz="columnVisibilityMenuCreateStart",by="blur",y="qx.ui.table.Table",z="columnVisibilityMenuCreateEnd",v="changeVisible",w="_applyResetSelectionOnHeaderClick",t="_applyMetaColumnCounts",u="__nK",r="focus",s="changeDataRowRenderer",G="changeHeaderCellHeight",H="Escape",ba="A",V="changeSelectionModel",bi="Left",bd="Down",bu="Integer",bo="_applyHeaderCellHeight",O="visibilityChanged",bx="qx.ui.table.ITableModel",bw="orderChanged",bv="_applySelectionModel",M="menu-button",R="menu",T="_applyAdditionalStatusBarText",X="_applyFocusCellOnMouseMove",bb="table",be="_applyColumnVisibilityButtonVisible",bk="changeTableModel",bq="qx.event.type.Event",A="tableWidthChanged",B="_applyHeaderCellsVisible",Q="Object",bh="_applyShowCellFocusIndicator",bg="resize",bf="verticalScrollBarChanged",bm="changeScrollY",bl="_applyTableModel",bc="End",bj="__nL",a="_applyKeepFirstVisibleRowComplete",bp="widthChanged",C="one of one row",D="Home",W="_applyRowHeight",b="F2",d="Up",L="__nO",E="%1 rows",F="qx.ui.table.selection.Model",J="one row",Y="__nC",bs="PageDown",br="%1 of %2 rows",S="keypress",bt="changeRowHeight",N="Number",bn="__nD",I="header",K="_applyContextMenuFromDataCellsOnly",c="qx.ui.table.IRowRenderer",U="Right",P="Space";
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
this.__nC=new qx.ui.container.Composite(new qx.ui.layout.HBox());
this._add(this.__nC,{flex:1});
this.setDataRowRenderer(new qx.ui.table.rowrenderer.Default(this));
this.__nD=this.getNewSelectionManager()(this);
this.setSelectionModel(this.getNewSelectionModel()(this));
this.setTableModel(bI||this.getEmptyTableModel());
this.setMetaColumnCounts([-1]);
this.setTabIndex(1);
this.addListener(S,this._onKeyPress);
this.addListener(r,this._onFocusChanged);
this.addListener(by,this._onFocusChanged);
var bK=new qx.ui.core.Widget().set({height:0});
this._add(bK);
bK.addListener(bg,this._onResize,this);
this.__nE=null;
this.__nF=null;
if(qx.core.Environment.get(bE)){qx.locale.Manager.getInstance().addListener(e,this._onChangeLocale,this);
}this.initStatusBarVisible();
bI=this.getTableModel();

if(bI.init&&typeof (bI.init)==h){bI.init(this);
}},events:{"columnVisibilityMenuCreateStart":n,"columnVisibilityMenuCreateEnd":n,"tableWidthChanged":bq,"verticalScrollBarChanged":n,"cellClick":k,"cellDblclick":k,"cellContextmenu":k,"dataEdited":n},statics:{__nG:{cellClick:1,cellDblclick:1,cellContextmenu:1}},properties:{appearance:{refine:true,init:bb},focusable:{refine:true,init:true},minWidth:{refine:true,init:50},initiallyHiddenColumns:{init:null},selectable:{refine:true,init:false},selectionModel:{check:F,apply:bv,event:V},tableModel:{check:bx,apply:bl,event:bk},rowHeight:{check:N,init:20,apply:W,event:bt,themeable:true},forceLineHeight:{check:q,init:true},headerCellsVisible:{check:q,init:true,apply:B,themeable:true},headerCellHeight:{check:bu,init:16,apply:bo,event:G,nullable:true,themeable:true},statusBarVisible:{check:q,init:true,apply:bA},additionalStatusBarText:{nullable:true,init:null,apply:T},columnVisibilityButtonVisible:{check:q,init:true,apply:be,themeable:true},metaColumnCounts:{check:Q,apply:t},focusCellOnMouseMove:{check:q,init:false,apply:X},rowFocusChangeModifiesSelection:{check:q,init:true},showCellFocusIndicator:{check:q,init:true,apply:bh},contextMenuFromDataCellsOnly:{check:q,init:true,apply:K},keepFirstVisibleRowComplete:{check:q,init:true,apply:a},alwaysUpdateCells:{check:q,init:false},resetSelectionOnHeaderClick:{check:q,init:true,apply:w},dataRowRenderer:{check:c,init:null,nullable:true,event:s},modalCellEditorPreOpenFunction:{check:o,init:null,nullable:true},newColumnMenu:{check:o,init:function(){return new qx.ui.table.columnmenu.Button();
}},newSelectionManager:{check:o,init:function(bL){return new qx.ui.table.selection.Manager(bL);
}},newSelectionModel:{check:o,init:function(bM){return new qx.ui.table.selection.Model(bM);
}},newTableColumnModel:{check:o,init:function(bN){return new qx.ui.table.columnmodel.Basic(bN);
}},newTablePane:{check:o,init:function(bO){return new qx.ui.table.pane.Pane(bO);
}},newTablePaneHeader:{check:o,init:function(bP){return new qx.ui.table.pane.Header(bP);
}},newTablePaneScroller:{check:o,init:function(bQ){return new qx.ui.table.pane.Scroller(bQ);
}},newTablePaneModel:{check:o,init:function(bR){return new qx.ui.table.pane.Model(bR);
}}},members:{__nE:null,__nF:null,__nC:null,__nD:null,__nH:null,__nI:null,__nJ:null,__nK:null,__nL:null,__nM:null,__nN:null,__nO:null,_createChildControlImpl:function(bS,bT){var bU;

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
},_applySelectionModel:function(bW,bX){this.__nD.setSelectionModel(bW);

if(bX!=null){bX.removeListener(bG,this._onSelectionChanged,this);
}bW.addListener(bG,this._onSelectionChanged,this);
},_applyRowHeight:function(bY,ca){var cb=this._getPaneScrollerArr();

for(var i=0;i<cb.length;i++){cb[i].updateVerScrollBarMaximum();
}},_applyHeaderCellsVisible:function(cc,cd){var ce=this._getPaneScrollerArr();

for(var i=0;i<ce.length;i++){ce[i]._excludeChildControl(I);
}},_applyHeaderCellHeight:function(cf,cg){var ch=this._getPaneScrollerArr();

for(var i=0;i<ch.length;i++){ch[i].getHeader().setHeight(cf);
}},getEmptyTableModel:function(){if(!this.__nM){this.__nM=new qx.ui.table.model.Simple();
this.__nM.setColumns([]);
this.__nM.setData([]);
}return this.__nM;
},_applyTableModel:function(ci,cj){this.getTableColumnModel().init(ci.getColumnCount(),this);

if(cj!=null){cj.removeListener(bB,this._onTableModelMetaDataChanged,this);
cj.removeListener(f,this._onTableModelDataChanged,this);
}ci.addListener(bB,this._onTableModelMetaDataChanged,this);
ci.addListener(f,this._onTableModelDataChanged,this);
this._updateStatusBar();
this._updateTableData(0,ci.getRowCount(),0,ci.getColumnCount());
this._onTableModelMetaDataChanged();
if(cj&&ci.init&&typeof (ci.init)==h){ci.init(this);
}},getTableColumnModel:function(){if(!this.__nL){var cm=this.__nL=this.getNewTableColumnModel()(this);
cm.addListener(O,this._onColVisibilityChanged,this);
cm.addListener(bp,this._onColWidthChanged,this);
cm.addListener(bw,this._onColOrderChanged,this);
var cl=this.getTableModel();
cm.init(cl.getColumnCount(),this);
var ck=this._getPaneScrollerArr();

for(var i=0;i<ck.length;i++){var cn=ck[i];
var co=cn.getTablePaneModel();
co.setTableColumnModel(cm);
}}return this.__nL;
},_applyStatusBarVisible:function(cp,cq){if(cp){this._showChildControl(m);
}else{this._excludeChildControl(m);
}
if(cp){this._updateStatusBar();
}},_applyAdditionalStatusBarText:function(cr,cs){this.__nH=cr;
this._updateStatusBar();
},_applyColumnVisibilityButtonVisible:function(ct,cu){if(ct){this._showChildControl(p);
}else{this._excludeChildControl(p);
}},_applyMetaColumnCounts:function(cv,cw){var cD=cv;
var cx=this._getPaneScrollerArr();
var cB={};

if(cv>cw){var cF=qx.event.Registration.getManager(cx[0]);

for(var cG in qx.ui.table.Table.__nG){cB[cG]={};
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
for(cG in qx.ui.table.Table.__nG){if(!cB[cG]){break;
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
this.__nC.add(cH,{flex:cI});
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
}},getSelectionManager:function(){return this.__nD;
},_getPaneScrollerArr:function(){return this.__nC.getChildren();
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
if(this.__nF>=dq&&this.__nF<(dq+dr)){this.setFocusedCell();
}}
for(var i=0;i<ds.length;i++){ds[i].onTableModelDataChanged(dl,dm,dn,dp);
}var dt=this.getTableModel().getRowCount();

if(dt!=this.__nI){this.__nI=dt;
this._updateScrollBarVisibility();
this._updateStatusBar();
}},_onScrollY:function(du){if(!this.__nJ){this.__nJ=true;
var dv=this._getPaneScrollerArr();

for(var i=0;i<dv.length;i++){dv[i].setScrollY(du.getData());
}this.__nJ=false;
}},_onKeyPress:function(dw){if(!this.getEnabled()){return;
}var dD=this.__nF;
var dA=true;
var dE=dw.getKeyIdentifier();

if(this.isEditing()){if(dw.getModifiers()==0){switch(dE){case bC:this.stopEditing();
var dD=this.__nF;
this.moveFocusedCell(0,1);

if(this.__nF!=dD){dA=this.startEditing();
}break;
case H:this.cancelEditing();
this.focus();
break;
default:dA=false;
break;
}}}else{if(dw.isCtrlPressed()){dA=true;

switch(dE){case ba:var dB=this.getTableModel().getRowCount();

if(dB>0){this.getSelectionModel().setSelectionInterval(0,dB-1);
}break;
default:dA=false;
break;
}}else{switch(dE){case P:this.__nD.handleSelectKeyDown(this.__nF,dw);
break;
case b:case bC:this.startEditing();
dA=true;
break;
case D:this.setFocusedCell(this.__nE,0,true);
break;
case bc:var dB=this.getTableModel().getRowCount();
this.setFocusedCell(this.__nE,dB-1,true);
break;
case bi:this.moveFocusedCell(-1,0);
break;
case U:this.moveFocusedCell(1,0);
break;
case d:this.moveFocusedCell(0,-1);
break;
case bd:this.moveFocusedCell(0,1);
break;
case g:case bs:var dz=this.getPaneScroller(0);
var dC=dz.getTablePane();
var dy=this.getRowHeight();
var dx=(dE==g)?-1:1;
dB=dC.getVisibleRowCount()-1;
dz.setScrollY(dz.getScrollY()+dx*dB*dy);
this.moveFocusedCell(0,dx*dB);
break;
default:dA=false;
}}}
if(dD!=this.__nF&&this.getRowFocusChangeModifiesSelection()){this.__nD.handleMoveKeyDown(this.__nF,dw);
}
if(dA){dw.preventDefault();
dw.stopPropagation();
}},_onFocusChanged:function(dF){var dG=this._getPaneScrollerArr();

for(var i=0;i<dG.length;i++){dG[i].onFocusChanged();
}},_onColVisibilityChanged:function(dH){var dI=this._getPaneScrollerArr();

for(var i=0;i<dI.length;i++){dI[i].onColVisibilityChanged();
}var dJ=dH.getData();

if(this.__nK!=null&&dJ.col!=null&&dJ.visible!=null){this.__nK[dJ.col].setVisible(dJ.visible);
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
},setFocusedCell:function(dR,dS,dT){if(!this.isEditing()&&(dR!=this.__nE||dS!=this.__nF)){if(dR===null){dR=0;
}this.__nE=dR;
this.__nF=dS;
var dU=this._getPaneScrollerArr();

for(var i=0;i<dU.length;i++){dU[i].setFocusedCell(dR,dS);
}
if(dR!==null&&dT){this.scrollCellVisible(dR,dS);
}}},resetSelection:function(){this.getSelectionModel().resetSelection();
},resetCellFocus:function(){this.setFocusedCell(null,null,false);
},getFocusedColumn:function(){return this.__nE;
},getFocusedRow:function(){return this.__nF;
},highlightFocusedRow:function(dV){this.getDataRowRenderer().setHighlightFocusRow(dV);
},clearFocusedRowHighlight:function(dW){if(dW){var dY=dW.getRelatedTarget();

if(dY instanceof qx.ui.table.pane.Pane||dY instanceof qx.ui.table.pane.FocusIndicator){return;
}}this.resetCellFocus();
var dX=this._getPaneScrollerArr();

for(var i=0;i<dX.length;i++){dX[i].onFocusChanged();
}},moveFocusedCell:function(ea,eb){var ef=this.__nE;
var eg=this.__nF;
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
}},isEditing:function(){if(this.__nE!=null){var x=this.getTableColumnModel().getVisibleX(this.__nE);
var em=this._getMetaColumnAtColumnX(x);
return this.getPaneScroller(em).isEditing();
}return false;
},startEditing:function(){if(this.__nE!=null){var x=this.getTableColumnModel().getVisibleX(this.__nE);
var eo=this._getMetaColumnAtColumnX(x);
var en=this.getPaneScroller(eo).startEditing();
return en;
}return false;
},stopEditing:function(){if(this.__nE!=null){var x=this.getTableColumnModel().getVisibleX(this.__nE);
var ep=this._getMetaColumnAtColumnX(x);
this.getPaneScroller(ep).stopEditing();
}},cancelEditing:function(){if(this.__nE!=null){var x=this.getTableColumnModel().getVisibleX(this.__nE);
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

if(eE>=0){if(eC==0){eD=this.trn(J,E,eE,eE);
}else{eD=this.trn(C,br,eE,eC,eE);
}}
if(this.__nH){if(eD){eD+=this.__nH;
}else{eD=this.__nH;
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
if(eP){if(this.__nN==null){this.__nN=eJ[i].getVerticalScrollBarVisible();
this.__nO=qx.event.Timer.once(function(){this.__nN=null;
this.__nO=null;
},this,0);
}}eJ[i].setVerticalScrollBarVisible(eP&&eN);
if(eP&&eN!=this.__nN){this.fireDataEvent(bf,eN);
}}},_initColumnMenu:function(){var eS=this.getTableModel();
var eT=this.getTableColumnModel();
var eU=this.getChildControl(p);
eU.empty();
var eR=eU.getMenu();
var eV={table:this,menu:eR,columnButton:eU};
this.fireDataEvent(bz,eV);
this.__nK={};

for(var eW=0,l=eS.getColumnCount();eW<l;eW++){var eQ=eU.factory(M,{text:eS.getColumnName(eW),column:eW,bVisible:eT.isColumnVisible(eW)});
qx.core.Assert.assertInterface(eQ,qx.ui.table.IColumnMenuItem);
eQ.addListener(v,this._createColumnVisibilityCheckBoxHandler(eW),this);
this.__nK[eW]=eQ;
}eV={table:this,menu:eR,columnButton:eU};
this.fireDataEvent(z,eV);
},_createColumnVisibilityCheckBoxHandler:function(eX){return function(eY){var fa=this.getTableColumnModel();
fa.setColumnVisible(eX,eY.getData());
};
},setColumnWidth:function(fb,fc){this.getTableColumnModel().setColumnWidth(fb,fc);
},_onResize:function(){this.fireEvent(A);
this._updateScrollerWidths();
this._updateScrollBarVisibility();
},addListener:function(fd,fe,self,ff){if(this.self(arguments).__nG[fd]){var fh=[fd];

for(var i=0,fg=this._getPaneScrollerArr();i<fg.length;i++){fh.push(fg[i].addListener.apply(fg[i],arguments));
}return fh.join(bD);
}else{return qx.ui.core.Widget.prototype.addListener.call(this,fd,fe,self,ff);
}},removeListener:function(fi,fj,self,fk){if(this.self(arguments).__nG[fi]){for(var i=0,fl=this._getPaneScrollerArr();i<fl.length;i++){fl[i].removeListener.apply(fl[i],arguments);
}}else{qx.ui.core.Widget.prototype.removeListener.call(this,fi,fj,self,fk);
}},removeListenerById:function(fm){var fq=fm.split(bD);
var fp=fq.shift();

if(this.self(arguments).__nG[fp]){var fo=true;

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
this._disposeObjects(bn,Y,bH,bH,bj,L);
this._disposeMap(u);
}});
})();

});