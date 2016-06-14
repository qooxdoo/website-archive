qx.$$packageData['256']={"locales":{},"resources":{"qx/icon/Tango/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/media-audio.png":[16,16,"png","qx"],"qx/icon/Tango/16/status/dialog-warning.png":[16,16,"png","qx"]},"translations":{"C":{},"de":{"%1 of %2 rows":"%1 von %2 Zeilen","%1 rows":"%1 Zeilen","Reset column widths":"Spaltenbreite zurücksetzen","one of one row":"Eine von einer Zeile","one row":"Eine Zeile"},"de_AT":{},"de_DE":{},"en":{},"en_GB":{},"en_US":{},"es":{"%1 of %2 rows":"%1 de %2 filas","%1 rows":"%1 filas","Reset column widths":"Reestablecer anchos de columnas","one of one row":"una de una fila","one row":"una fila"},"es_ES":{},"es_MX":{},"ro":{"%1 of %2 rows":"%1 din %2 rânduri","%1 rows":"%1 rânduri","Reset column widths":"Resetează lățimea coloanei","one of one row":"unul din un rând","one row":"un rând"},"ro_RO":{},"sv":{"%1 of %2 rows":"%1 av %2 rader","%1 rows":"%1 rader","Reset column widths":"Återställ kolumnbredder","one of one row":"en av en rad","one row":"En rad"},"sv_SE":{}}};
qx.Part.$$notifyLoad("256", function() {
(function(){var a="qx.ui.table.ICellRenderer";
qx.Interface.define(a,{members:{createDataCellHtml:function(b,c){return true;
}}});
})();
(function(){var j="",i="px;",h=".qooxdoo-table-cell {",g="qooxdoo-table-cell",f="content",e='</div>',d="nowrap",c="default",b="}",a="width:",J=".qooxdoo-table-cell-right { text-align:right } ",I="css.boxmodel",H="0px 6px",G='<div class="',F="0px",E="height:",D="1px solid ",C=".qooxdoo-table-cell-bold { font-weight:bold } ",B="String",A="} ",q='>',r="mshtml",o='" ',p="ellipsis",m="content-box",n='left:',k="qx.ui.table.cellrenderer.Abstract",l="engine.name",s='" style="',t="abstract",v="none",u="hidden",x="table-column-line",w='px;',z=".qooxdoo-table-cell-italic { font-style:italic} ",y="absolute";
qx.Class.define(k,{type:t,implement:qx.ui.table.ICellRenderer,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
var K=qx.ui.table.cellrenderer.Abstract;

if(!K.__wX){var M=qx.theme.manager.Color.getInstance();
K.__wX=this.self(arguments);
var L=h+
qx.bom.element.Style.compile({position:y,top:F,overflow:u,whiteSpace:d,borderRight:D+M.resolve(x),padding:H,cursor:c,textOverflow:p,userSelect:v})+A+J+z+C;

if(!(qx.core.Environment.get(l)==r)){L+=h+qx.bom.element.BoxSizing.compile(m)+b;
}K.__wX.stylesheet=qx.bom.Stylesheet.createElement(L);
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
(function(){var s="==",r="",q=">",p="between",o="<",n="regex",m="!between",l=">=",k="!=",j="<=",c="font-weight",h=";",f="text-align",b='g',a=":",e="qx.ui.table.cellrenderer.Conditional",d="color",g="font-style";
qx.Class.define(e,{extend:qx.ui.table.cellrenderer.Default,construct:function(t,u,v,w){qx.ui.table.cellrenderer.Default.call(this);
this.numericAllowed=[s,k,q,o,l,j];
this.betweenAllowed=[p,m];
this.conditions=[];
this.__BH=t||"";
this.__BI=u||"";
this.__BJ=v||"";
this.__BK=w||"";
},members:{__BH:null,__BI:null,__BJ:null,__BK:null,__Cv:function(x,y){if(x[1]!=null){y[f]=x[1];
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
}},_getCellStyle:function(X){if(!this.conditions.length){return X.style||r;
}var bd=X.table.getTableModel();
var i;
var bf;
var Y;
var bb={"text-align":this.__BH,"color":this.__BI,"font-style":this.__BJ,"font-weight":this.__BK};

for(i in this.conditions){bf=false;

if(qx.lang.Array.contains(this.numericAllowed,this.conditions[i][0])){if(this.conditions[i][6]==null){Y=X.value;
}else{Y=bd.getValueById(this.conditions[i][6],X.row);
}
switch(this.conditions[i][0]){case s:if(Y==this.conditions[i][5]){bf=true;
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
}if(bf==true){this.__Cv(this.conditions[i],bb);
}}var be=[];

for(var bc in bb){if(bb[bc]){be.push(bc,a,bb[bc],h);
}}return be.join(r);
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
this.__yo=h;
this.setKeepActive(true);
this.addListener(d,this._onKeyPress,this);
},properties:{visibility:{refine:true,init:b},row:{check:g,nullable:true},column:{check:g,nullable:true}},members:{__yo:null,_onKeyPress:function(e){var i=e.getKeyIdentifier();

if(i!==f&&i!==c){e.stopPropagation();
}},moveToCell:function(j,k){if(!this.__yo.getShowCellFocusIndicator()&&!this.__yo.getTable().getTableModel().isColumnEditable(j)){this.exclude();
return;
}else{this.show();
}
if(j==null){this.hide();
this.setRow(null);
this.setColumn(null);
}else{var l=this.__yo.getTablePaneModel().getX(j);

if(l==-1){this.hide();
this.setRow(null);
this.setColumn(null);
}else{var q=this.__yo.getTable();
var o=q.getTableColumnModel();
var p=this.__yo.getTablePaneModel();
var n=this.__yo.getTablePane().getFirstVisibleRow();
var m=q.getRowHeight();
this.setUserBounds(p.getColumnLeft(j)-2,(k-n)*m-2,o.getColumnWidth(j)+3,m+3);
this.show();
this.setRow(k);
this.setColumn(j);
}}}},destruct:function(){this.__yo=null;
}});
})();
(function(){var k="",j="Number",h='</div>',g='" ',f="paneUpdated",e='<div>',d="</div>",c="overflow: hidden;",b="qx.event.type.Data",a="paneReloadsData",E="div",D='style="',C="_applyMaxCacheLines",B="qx.ui.table.pane.Pane",A="width: 100%;",z="qx.event.type.Event",w="_applyVisibleRowCount",v='>',u="line-height: ",t="appear",r='class="',s="width:100%;",p="px;",q='<div ',n="'>",o="_applyFirstVisibleRow",l="<div style='",m=";position:relative;";
qx.Class.define(B,{extend:qx.ui.core.Widget,construct:function(F){qx.ui.core.Widget.call(this);
this.__xA=F;
this.__xB=0;
this.__wO=0;
this.__xC=[];
},events:{"paneReloadsData":b,"paneUpdated":z},properties:{firstVisibleRow:{check:j,init:0,apply:o},visibleRowCount:{check:j,init:0,apply:w},maxCacheLines:{check:j,init:1000,apply:C},allowShrinkX:{refine:true,init:false}},members:{__wO:null,__xB:null,__xA:null,__xD:null,__wL:null,__wK:null,__xC:null,__xE:0,_applyFirstVisibleRow:function(G,H){this.updateContent(false,G-H);
},_applyVisibleRowCount:function(I,J){this.updateContent(true);
},_getContentHint:function(){return {width:this.getPaneScroller().getTablePaneModel().getTotalWidth(),height:400};
},getPaneScroller:function(){return this.__xA;
},getTable:function(){return this.__xA.getTable();
},setFocusedCell:function(K,L,M){if(K!=this.__wK||L!=this.__wL){var N=this.__wL;
this.__wK=K;
this.__wL=L;
if(L!=N&&!M){if(N!==null){this.updateContent(false,null,N,true);
}
if(L!==null){this.updateContent(false,null,L,true);
}}}},onSelectionChanged:function(){this.updateContent(false,null,null,true);
},onFocusChanged:function(){this.updateContent(false,null,null,true);
},setColumnWidth:function(O,P){this.updateContent(true);
},onColOrderChanged:function(){this.updateContent(true);
},onPaneModelChanged:function(){this.updateContent(true);
},onTableModelDataChanged:function(Q,R,S,T){this.__xF();
var V=this.getFirstVisibleRow();
var U=this.getVisibleRowCount();

if(R==-1||R>=V&&Q<V+U){this.updateContent();
}},onTableModelMetaDataChanged:function(){this.updateContent(true);
},_applyMaxCacheLines:function(W,X){if(this.__xE>=W&&W!==-1){this.__xF();
}},__xF:function(){this.__xC=[];
this.__xE=0;
},__xG:function(Y,ba,bb){if(!ba&&!bb&&this.__xC[Y]){return this.__xC[Y];
}else{return null;
}},__xH:function(bc,bd,be,bf){var bg=this.getMaxCacheLines();

if(!be&&!bf&&!this.__xC[bc]&&bg>0){this._applyMaxCacheLines(bg);
this.__xC[bc]=bd;
this.__xE+=1;
}},updateContent:function(bh,bi,bj,bk){if(bh){this.__xF();
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
bs.focusedRow=(this.__wL==bv);
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
bz.push({col:bY,xPos:x,editable:bA.isColumnEditable(bY),focusedCol:this.__wK==bY,styleLeft:bC,styleWidth:bF});
bC+=bF;
}var bX=[];
var ca=false;

for(var bE=bw;bE<bw+bx;bE++){var bH=bG.isSelectedIndex(bE);
var bK=(this.__wL==bE);
var bP=this.__xG(bE,bH,bK);

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
this.__xH(bE,bQ,bH,bK);
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
}}if(!this.__xD){this.__xD=document.createElement(E);
}var ck=e;
ck+=this._getRowsHtml(ci+ce,Math.abs(cb));
ck+=h;
this.__xD.innerHTML=ck;
var cf=this.__xD.firstChild.childNodes;
if(cb>0){for(var i=cf.length-1;i>=0;i--){var ch=cf[0];
cl.appendChild(ch);
}}else{for(var i=cf.length-1;i>=0;i--){var ch=cf[cf.length-1];
cl.insertBefore(ch,cl.firstChild);
}}if(this.__wL!==null){this._updateRowStyles(this.__wL-cb);
this._updateRowStyles(this.__wL);
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
this.__xB=cw;
this.__wO=cq;
this.fireEvent(f);
}},destruct:function(){this.__xD=this.__xA=this.__xC=null;
}});
})();
(function(){var e="auto",d="string",c="number",b="*",a="qx.ui.core.ColumnData";
qx.Class.define(a,{extend:qx.ui.core.LayoutItem,construct:function(){qx.ui.core.LayoutItem.call(this);
this.setColumnWidth(e);
},members:{__yE:null,renderLayout:function(f,top,g,h){this.__yE=g;
},getComputedWidth:function(){return this.__yE;
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
(function(){var j="Function",h="Boolean",g="minWidth",f="width",e="__yG",d="qx.ui.table.columnmodel.Resize",c="qx.ui.table.columnmodel.resizebehavior.Default",b="__yH",a="maxWidth";
qx.Class.define(c,{extend:qx.ui.table.columnmodel.resizebehavior.Abstract,construct:function(){qx.ui.table.columnmodel.resizebehavior.Abstract.call(this);
this.__yF=[];
this.__yG=new qx.ui.layout.HBox();
this.__yG.connectToWidget(this);
this.__yH=new qx.util.DeferredCall(this._computeColumnsFlexWidth,this);
},properties:{newResizeBehaviorColumnData:{check:j,init:function(k){return new qx.ui.core.ColumnData();
}},initializeWidthsOnEveryAppear:{check:h,init:false},tableColumnModel:{check:d}},members:{__yG:null,__yI:null,__yF:null,__yH:null,__yJ:false,setWidth:function(m,n,o){if(m>=this.__yF.length){throw new Error("Column number out of range");
}this.__yF[m].setColumnWidth(n,o);
this.__yH.schedule();
},setMinWidth:function(p,q){if(p>=this.__yF.length){throw new Error("Column number out of range");
}this.__yF[p].setMinWidth(q);
this.__yH.schedule();
},setMaxWidth:function(r,s){if(r>=this.__yF.length){throw new Error("Column number out of range");
}this.__yF[r].setMaxWidth(s);
this.__yH.schedule();
},set:function(t,u){for(var v in u){switch(v){case f:this.setWidth(t,u[v]);
break;
case g:this.setMinWidth(t,u[v]);
break;
case a:this.setMaxWidth(t,u[v]);
break;
default:throw new Error("Unknown property: "+v);
}}},onAppear:function(event,w){if(w===true||!this.__yJ||this.getInitializeWidthsOnEveryAppear()){this._computeColumnsFlexWidth();
this.__yJ=true;
}},onTableWidthChanged:function(event){this._computeColumnsFlexWidth();
},onVerticalScrollBarChanged:function(event){this._computeColumnsFlexWidth();
},onColumnWidthChanged:function(event){this._extendNextColumn(event);
},onVisibilityChanged:function(event){var x=event.getData();
if(x.visible){this._computeColumnsFlexWidth();
return;
}this._extendLastColumn(event);
},_setNumColumns:function(y){var z=this.__yF;
if(y<=z.length){z.splice(y,z.length);
return;
}for(var i=z.length;i<y;i++){z[i]=this.getNewResizeBehaviorColumnData()();
z[i].columnNumber=i;
}},getLayoutChildren:function(){return this.__yI;
},_computeColumnsFlexWidth:function(){this.__yH.cancel();
var E=this._getAvailableWidth();

if(E===null){return;
}var A=this.getTableColumnModel();
var C=A.getVisibleColumns();
var D=C.length;
var B=this.__yF;
var i,l;

if(D===0){return;
}var G=[];

for(i=0;i<D;i++){G.push(B[C[i]]);
}this.__yI=G;
this.__yK();
this.__yG.renderLayout(E,100);
for(i=0,l=G.length;i<l;i++){var F=G[i].getComputedWidth();
A.setColumnWidth(C[i],F);
}},__yK:function(){this.__yG.invalidateChildrenCache();
var H=this.__yI;

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
}},_getResizeColumnData:function(){return this.__yF;
}},destruct:function(){this.__yF=this.__yI=null;
this._disposeObjects(e,b);
}});
})();
(function(){var k="qx.event.type.Data",j="visibilityChanged",h="orderChanged",g="visibilityChangedPre",f="__xe",e="widthChanged",d="qx.ui.table.columnmodel.Basic",c="headerCellRendererChanged",b="__xf",a="__xd";
qx.Class.define(d,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__wY=[];
this.__xa=[];
},events:{"widthChanged":k,"visibilityChangedPre":k,"visibilityChanged":k,"orderChanged":k,"headerCellRendererChanged":k},statics:{DEFAULT_WIDTH:100,DEFAULT_HEADER_RENDERER:qx.ui.table.headerrenderer.Default,DEFAULT_DATA_RENDERER:qx.ui.table.cellrenderer.Default,DEFAULT_EDITOR_FACTORY:qx.ui.table.celleditor.TextField},members:{__ww:null,__xb:null,__xa:null,__wY:null,__xc:null,__xd:null,__xe:null,__xf:null,init:function(l,m){this.__xc=[];
var q=qx.ui.table.columnmodel.Basic.DEFAULT_WIDTH;
var r=this.__xd||(this.__xd=new qx.ui.table.columnmodel.Basic.DEFAULT_HEADER_RENDERER());
var o=this.__xe||(this.__xe=new qx.ui.table.columnmodel.Basic.DEFAULT_DATA_RENDERER());
var n=this.__xf||(this.__xf=new qx.ui.table.columnmodel.Basic.DEFAULT_EDITOR_FACTORY());
this.__wY=[];
this.__xa=[];
var t;
if(m){t=m.getInitiallyHiddenColumns();
}t=t||[];

for(var u=0;u<l;u++){this.__xc[u]={width:q,headerRenderer:r,dataRenderer:o,editorFactory:n};
this.__wY[u]=u;
this.__xa[u]=u;
}this.__xb=null;
this.__ww=true;

for(var s=0;s<t.length;s++){this.setColumnVisible(t[s],false);
}this.__ww=false;

for(u=0;u<l;u++){var p={col:u,visible:this.isColumnVisible(u)};
this.fireDataEvent(g,p);
this.fireDataEvent(j,p);
}},getVisibleColumns:function(){return this.__xa!=null?this.__xa:[];
},setColumnWidth:function(v,w,y){var A=this.__xc[v].width;

if(A!=w){this.__xc[v].width=w;
var z={col:v,newWidth:w,oldWidth:A,isMouseAction:y||false};
this.fireDataEvent(e,z);
}},getColumnWidth:function(B){return this.__xc[B].width;
},setHeaderCellRenderer:function(C,D){var E=this.__xc[C].headerRenderer;

if(E!==this.__xd){E.dispose();
}this.__xc[C].headerRenderer=D;
this.fireDataEvent(c,{col:C});
},getHeaderCellRenderer:function(F){return this.__xc[F].headerRenderer;
},setDataCellRenderer:function(G,H){this.__xc[G].dataRenderer=H;
var I=this.__xc[G].dataRenderer;

if(I!==this.__xe){return I;
}return null;
},getDataCellRenderer:function(J){return this.__xc[J].dataRenderer;
},setCellEditorFactory:function(K,L){var M=this.__xc[K].headerRenderer;

if(M!==this.__xf){M.dispose();
}this.__xc[K].editorFactory=L;
},getCellEditorFactory:function(N){return this.__xc[N].editorFactory;
},_getColToXPosMap:function(){if(this.__xb==null){this.__xb={};

for(var Q=0;Q<this.__wY.length;Q++){var P=this.__wY[Q];
this.__xb[P]={overX:Q};
}
for(var O=0;O<this.__xa.length;O++){var P=this.__xa[O];
this.__xb[P].visX=O;
}}return this.__xb;
},getVisibleColumnCount:function(){return this.__xa!=null?this.__xa.length:0;
},getVisibleColumnAtX:function(R){return this.__xa[R];
},getVisibleX:function(S){return this._getColToXPosMap()[S].visX;
},getOverallColumnCount:function(){return this.__wY.length;
},getOverallColumnAtX:function(T){return this.__wY[T];
},getOverallX:function(U){return this._getColToXPosMap()[U].overX;
},isColumnVisible:function(V){return (this._getColToXPosMap()[V].visX!=null);
},setColumnVisible:function(W,X){if(X!=this.isColumnVisible(W)){if(X){var be=this._getColToXPosMap();
var bb=be[W].overX;

if(bb==null){throw new Error("Showing column failed: "+W+". The column is not added to this TablePaneModel.");
}var bc;

for(var x=bb+1;x<this.__wY.length;x++){var bd=this.__wY[x];
var Y=be[bd].visX;

if(Y!=null){bc=Y;
break;
}}if(bc==null){bc=this.__xa.length;
}this.__xa.splice(bc,0,W);
}else{var ba=this.getVisibleX(W);
this.__xa.splice(ba,1);
}this.__xb=null;
if(!this.__ww){var bf={col:W,visible:X};
this.fireDataEvent(g,bf);
this.fireDataEvent(j,bf);
}}},moveColumn:function(bg,bh){this.__ww=true;
var bk=this.__wY[bg];
var bi=this.isColumnVisible(bk);

if(bi){this.setColumnVisible(bk,false);
}this.__wY.splice(bg,1);
this.__wY.splice(bh,0,bk);
this.__xb=null;

if(bi){this.setColumnVisible(bk,true);
}this.__ww=false;
var bj={col:bk,fromOverXPos:bg,toOverXPos:bh};
this.fireDataEvent(h,bj);
},setColumnsOrder:function(bl){if(bl.length==this.__wY.length){this.__ww=true;
var bo=new Array(bl.length);

for(var bm=0;bm<this.__wY.length;bm++){var bn=this.isColumnVisible(bm);
bo[bm]=bn;

if(bn){this.setColumnVisible(bm,false);
}}this.__wY=qx.lang.Array.clone(bl);
this.__xb=null;
for(var bm=0;bm<this.__wY.length;bm++){if(bo[bm]){this.setColumnVisible(bm,true);
}}this.__ww=false;
this.fireDataEvent(h);
}else{throw new Error("setColumnsOrder: Invalid number of column positions given, expected "+this.__wY.length+", got "+bl.length);
}}},destruct:function(){for(var i=0;i<this.__xc.length;i++){this.__xc[i].headerRenderer.dispose();
this.__xc[i].dataRenderer.dispose();
this.__xc[i].editorFactory.dispose();
}this.__wY=this.__xa=this.__xc=this.__xb=null;
this._disposeObjects(a,f,b);
}});
})();
(function(){var b="qx.ui.table.selection.Model",a="qx.ui.table.selection.Manager";
qx.Class.define(a,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
},properties:{selectionModel:{check:b}},members:{__wW:null,handleMouseDown:function(c,d){if(d.isLeftPressed()){var e=this.getSelectionModel();

if(!e.isSelectedIndex(c)){this._handleSelectEvent(c,d);
this.__wW=true;
}else{this.__wW=false;
}}else if(d.isRightPressed()&&d.getModifiers()==0){var e=this.getSelectionModel();

if(!e.isSelectedIndex(c)){e.setSelectionInterval(c,c);
}}},handleMouseUp:function(f,g){if(g.isLeftPressed()&&!this.__wW){this._handleSelectEvent(f,g);
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
this.__wE=[];
this.__wF=-1;
this.__wG=-1;
this.hasBatchModeRefCount=0;
this.__wH=false;
},events:{"changeSelection":f},statics:{NO_SELECTION:1,SINGLE_SELECTION:2,SINGLE_INTERVAL_SELECTION:3,MULTIPLE_INTERVAL_SELECTION:4,MULTIPLE_INTERVAL_SELECTION_TOGGLE:5},properties:{selectionMode:{init:2,check:[1,2,3,4,5],apply:a}},members:{__wH:null,__wF:null,__wG:null,__wE:null,_applySelectionMode:function(o){this.resetSelection();
},setBatchMode:function(p){if(p){this.hasBatchModeRefCount+=1;
}else{if(this.hasBatchModeRefCount==0){throw new Error("Try to turn off batch mode althoug it was not turned on.");
}this.hasBatchModeRefCount-=1;

if(this.__wH){this.__wH=false;
this._fireChangeSelection();
}}return this.hasBatchMode();
},hasBatchMode:function(){return this.hasBatchModeRefCount>0;
},getAnchorSelectionIndex:function(){return this.__wF;
},_setAnchorSelectionIndex:function(q){this.__wF=q;
},getLeadSelectionIndex:function(){return this.__wG;
},_setLeadSelectionIndex:function(r){this.__wG=r;
},_getSelectedRangeArr:function(){return this.__wE;
},resetSelection:function(){if(!this.isSelectionEmpty()){this._resetSelection();
this._fireChangeSelection();
}},isSelectionEmpty:function(){return this.__wE.length==0;
},getSelectedCount:function(){var t=0;

for(var i=0;i<this.__wE.length;i++){var s=this.__wE[i];
t+=s.maxIndex-s.minIndex+1;
}return t;
},isSelectedIndex:function(u){for(var i=0;i<this.__wE.length;i++){var v=this.__wE[i];

if(u>=v.minIndex&&u<=v.maxIndex){return true;
}}return false;
},getSelectedRanges:function(){var w=[];

for(var i=0;i<this.__wE.length;i++){w.push({minIndex:this.__wE[i].minIndex,maxIndex:this.__wE[i].maxIndex});
}return w;
},iterateSelection:function(x,y){for(var i=0;i<this.__wE.length;i++){for(var j=this.__wE[i].minIndex;j<=this.__wE[i].maxIndex;j++){x.call(y,j);
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
}},removeSelectionInterval:function(F,G){this.__wF=F;
this.__wG=G;
var H=Math.min(F,G);
var J=Math.max(F,G);
for(var i=0;i<this.__wE.length;i++){var L=this.__wE[i];

if(L.minIndex>J){break;
}else if(L.maxIndex>=H){var M=(L.minIndex>=H)&&(L.minIndex<=J);
var K=(L.maxIndex>=H)&&(L.maxIndex<=J);

if(M&&K){this.__wE.splice(i,1);
i--;
}else if(M){L.minIndex=J+1;
}else if(K){L.maxIndex=H-1;
}else{var I={minIndex:J+1,maxIndex:L.maxIndex};
this.__wE.splice(i+1,0,I);
L.maxIndex=H-1;
break;
}}}this._fireChangeSelection();
},_resetSelection:function(){this.__wE=[];
this.__wF=-1;
this.__wG=-1;
},_addSelectionInterval:function(N,O){this.__wF=N;
this.__wG=O;
var P=Math.min(N,O);
var R=Math.max(N,O);
var Q=0;

for(;Q<this.__wE.length;Q++){var S=this.__wE[Q];

if(S.minIndex>P){break;
}}this.__wE.splice(Q,0,{minIndex:P,maxIndex:R});
var T=this.__wE[0];

for(var i=1;i<this.__wE.length;i++){var S=this.__wE[i];

if(T.maxIndex+1>=S.minIndex){T.maxIndex=Math.max(T.maxIndex,S.maxIndex);
this.__wE.splice(i,1);
i--;
}else{T=S;
}}},_dumpRanges:function(){var U=d;

for(var i=0;i<this.__wE.length;i++){var V=this.__wE[i];
U+=k+V.minIndex+m+V.maxIndex+n;
}this.debug(U);
},_fireChangeSelection:function(){if(this.hasBatchMode()){this.__wH=true;
}else{this.fireEvent(l);
}}},destruct:function(){this.__wE=null;
}});
})();
(function(){var n="appear",m="columnVisibilityMenuCreateEnd",l="tableWidthChanged",k="verticalScrollBarChanged",j="qx.ui.table.columnmodel.resizebehavior.Abstract",i="qx.ui.table.columnmodel.Resize",h="_applyBehavior",g="separator",f="visibilityChanged",e="Reset column widths",b="changeBehavior",d="user-button",c="widthChanged",a="execute";
qx.Class.define(i,{extend:qx.ui.table.columnmodel.Basic,include:qx.locale.MTranslation,construct:function(){qx.ui.table.columnmodel.Basic.call(this);
this.__yC=false;
this.__yD=false;
},properties:{behavior:{check:j,init:null,nullable:true,apply:h,event:b}},members:{__yD:null,__yC:null,__xK:null,_applyBehavior:function(p,q){if(q!=null){q.dispose();
q=null;
}p._setNumColumns(this.getOverallColumnCount());
p.setTableColumnModel(this);
},init:function(r,s){qx.ui.table.columnmodel.Basic.prototype.init.call(this,r,s);

if(this.__xK==null){this.__xK=s;
s.addListener(n,this._onappear,this);
s.addListener(l,this._onTableWidthChanged,this);
s.addListener(k,this._onverticalscrollbarchanged,this);
s.addListener(m,this._addResetColumnWidthButton,this);
this.addListener(c,this._oncolumnwidthchanged,this);
this.addListener(f,this._onvisibilitychanged,this);
}if(this.getBehavior()==null){this.setBehavior(new qx.ui.table.columnmodel.resizebehavior.Default());
}this.getBehavior()._setNumColumns(r);
},getTable:function(){return this.__xK;
},_addResetColumnWidthButton:function(event){var v=event.getData();
var u=v.columnButton;
var t=v.menu;
var o;
o=u.factory(g);
t.add(o);
o=u.factory(d,{text:this.tr(e)});
t.add(o);
o.addListener(a,this._onappear,this);
},_onappear:function(event){if(this.__yC){return ;
}this.__yC=true;
this.getBehavior().onAppear(event,event.getType()!==n);
this.__xK._updateScrollerWidths();
this.__xK._updateScrollBarVisibility();
this.__yC=false;
this.__yD=true;
},_onTableWidthChanged:function(event){if(this.__yC||!this.__yD){return ;
}this.__yC=true;
this.getBehavior().onTableWidthChanged(event);
this.__yC=false;
},_onverticalscrollbarchanged:function(event){if(this.__yC||!this.__yD){return ;
}this.__yC=true;
this.getBehavior().onVerticalScrollBarChanged(event);
qx.event.Timer.once(function(){if(this.__xK&&!this.__xK.isDisposed()){this.__xK._updateScrollerWidths();
this.__xK._updateScrollBarVisibility();
}},this,0);
this.__yC=false;
},_oncolumnwidthchanged:function(event){if(this.__yC||!this.__yD){return ;
}this.__yC=true;
this.getBehavior().onColumnWidthChanged(event);
this.__yC=false;
},_onvisibilitychanged:function(event){if(this.__yC||!this.__yD){return ;
}this.__yC=true;
this.getBehavior().onVisibilityChanged(event);
this.__yC=false;
}},destruct:function(){this.__xK=null;
}});
})();
(function(){var e="metaDataChanged",d="qx.event.type.Data",c="qx.event.type.Event",b="abstract",a="qx.ui.table.model.Abstract";
qx.Class.define(a,{type:b,extend:qx.core.Object,implement:qx.ui.table.ITableModel,events:{"dataChanged":d,"metaDataChanged":c,"sorted":d},construct:function(){qx.core.Object.call(this);
this.__wt=[];
this.__wu=[];
this.__wv={};
},members:{__wt:null,__wu:null,__wv:null,__ww:null,init:function(f){},getRowCount:function(){throw new Error("getRowCount is abstract");
},getRowData:function(g){return null;
},isColumnEditable:function(h){return false;
},isColumnSortable:function(j){return false;
},sortByColumn:function(k,l){},getSortColumnIndex:function(){return -1;
},isSortAscending:function(){return true;
},prefetchRows:function(m,n){},getValue:function(o,p){throw new Error("getValue is abstract");
},getValueById:function(q,r){return this.getValue(this.getColumnIndexById(q),r);
},setValue:function(s,t,u){throw new Error("setValue is abstract");
},setValueById:function(v,w,x){this.setValue(this.getColumnIndexById(v),w,x);
},getColumnCount:function(){return this.__wt.length;
},getColumnIndexById:function(y){return this.__wv[y];
},getColumnId:function(z){return this.__wt[z];
},getColumnName:function(A){return this.__wu[A];
},setColumnIds:function(B){this.__wt=B;
this.__wv={};

for(var i=0;i<B.length;i++){this.__wv[B[i]]=i;
}this.__wu=new Array(B.length);
if(!this.__ww){this.fireEvent(e);
}},setColumnNamesByIndex:function(C){if(this.__wt.length!=C.length){throw new Error("this.__columnIdArr and columnNameArr have different length: "+this.__wt.length+" != "+C.length);
}this.__wu=C;
this.fireEvent(e);
},setColumnNamesById:function(D){this.__wu=new Array(this.__wt.length);

for(var i=0;i<this.__wt.length;++i){this.__wu[i]=D[this.__wt[i]];
}},setColumns:function(E,F){var G=this.__wt.length==0||F;

if(F==null){if(this.__wt.length==0){F=E;
}else{F=this.__wt;
}}
if(F.length!=E.length){throw new Error("columnIdArr and columnNameArr have different length: "+F.length+" != "+E.length);
}
if(G){this.__ww=true;
this.setColumnIds(F);
this.__ww=false;
}this.setColumnNamesByIndex(E);
}},destruct:function(){this.__wt=this.__wu=this.__wv=null;
}});
})();
(function(){var e="dataChanged",d="metaDataChanged",c="qx.ui.table.model.Simple",b="Boolean",a="sorted";
qx.Class.define(c,{extend:qx.ui.table.model.Abstract,construct:function(){qx.ui.table.model.Abstract.call(this);
this.__yr=[];
this.__ys=-1;
this.__yt=[];
this.__wx=null;
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
}},members:{__yr:null,__wx:null,__yu:null,__yt:null,__ys:null,__yv:null,getRowData:function(B){var C=this.__yr[B];

if(C==null||C.originalData==null){return C;
}else{return C.originalData;
}},getRowDataAsMap:function(D){var F=this.__yr[D];

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
},setEditable:function(K){this.__wx=[];

for(var L=0;L<this.getColumnCount();L++){this.__wx[L]=K;
}this.fireEvent(d);
},setColumnEditable:function(M,N){if(N!=this.isColumnEditable(M)){if(this.__wx==null){this.__wx=[];
}this.__wx[M]=N;
this.fireEvent(d);
}},isColumnEditable:function(O){return this.__wx?(this.__wx[O]==true):false;
},setColumnSortable:function(P,Q){if(Q!=this.isColumnSortable(P)){if(this.__yu==null){this.__yu=[];
}this.__yu[P]=Q;
this.fireEvent(d);
}},isColumnSortable:function(R){return (this.__yu?(this.__yu[R]!==false):true);
},sortByColumn:function(S,T){var W;
var V=this.__yt[S];

if(V){W=(T?V.ascending:V.descending);
}else{if(this.getCaseSensitiveSorting()){W=(T?qx.ui.table.model.Simple._defaultSortComparatorAscending:qx.ui.table.model.Simple._defaultSortComparatorDescending);
}else{W=(T?qx.ui.table.model.Simple._defaultSortComparatorInsensitiveAscending:qx.ui.table.model.Simple._defaultSortComparatorInsensitiveDescending);
}}W.columnIndex=S;
this.__yr.sort(W);
this.__ys=S;
this.__yv=T;
var U={columnIndex:S,ascending:T};
this.fireDataEvent(a,U);
this.fireEvent(d);
},setSortMethods:function(X,Y){var ba;

if(qx.lang.Type.isFunction(Y)){ba={ascending:Y,descending:function(bb,bc){return Y(bc,bb);
}};
}else{ba=Y;
}this.__yt[X]=ba;
},getSortMethods:function(bd){return this.__yt[bd];
},clearSorting:function(){if(this.__ys!=-1){this.__ys=-1;
this.__yv=true;
this.fireEvent(d);
}},getSortColumnIndex:function(){return this.__ys;
},_setSortColumnIndex:function(be){this.__ys=be;
},isSortAscending:function(){return this.__yv;
},_setSortAscending:function(bf){this.__yv=bf;
},getRowCount:function(){return this.__yr.length;
},getValue:function(bg,bh){if(bh<0||bh>=this.__yr.length){throw new Error("this.__rowArr out of bounds: "+bh+" (0.."+this.__yr.length+")");
}return this.__yr[bh][bg];
},setValue:function(bi,bj,bk){if(this.__yr[bj][bi]!=bk){this.__yr[bj][bi]=bk;
if(this.hasListener(e)){var bl={firstRow:bj,lastRow:bj,firstColumn:bi,lastColumn:bi};
this.fireDataEvent(e,bl);
}
if(bi==this.__ys){this.clearSorting();
}}},setData:function(bm,bn){this.__yr=bm;
if(this.hasListener(e)){var bo={firstRow:0,lastRow:bm.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(e,bo);
}
if(bn!==false){this.clearSorting();
}},getData:function(){return this.__yr;
},setDataAsMapArray:function(bp,bq,br){this.setData(this._mapArray2RowArr(bp,bq),br);
},addRows:function(bs,bt,bu){if(bt==null){bt=this.__yr.length;
}bs.splice(0,0,bt,0);
Array.prototype.splice.apply(this.__yr,bs);
var bv={firstRow:bt,lastRow:this.__yr.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(e,bv);

if(bu!==false){this.clearSorting();
}},addRowsAsMapArray:function(bw,bx,by,bz){this.addRows(this._mapArray2RowArr(bw,by),bx,bz);
},setRows:function(bA,bB,bC){if(bB==null){bB=0;
}bA.splice(0,0,bB,bA.length);
Array.prototype.splice.apply(this.__yr,bA);
var bD={firstRow:bB,lastRow:this.__yr.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(e,bD);

if(bC!==false){this.clearSorting();
}},setRowsAsMapArray:function(bE,bF,bG,bH){this.setRows(this._mapArray2RowArr(bE,bG),bF,bH);
},removeRows:function(bI,bJ,bK){this.__yr.splice(bI,bJ);
var bL={firstRow:bI,lastRow:this.__yr.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1,removeStart:bI,removeCount:bJ};
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
}},destruct:function(){this.__yr=this.__wx=this.__yt=this.__yu=null;
}});
})();
(function(){var a="qx.ui.table.IRowRenderer";
qx.Interface.define(a,{members:{updateDataRowElement:function(b,c){},getRowHeightStyle:function(d){},createRowStyle:function(e){},getRowClass:function(f){}}});
})();
(function(){var f="menu-button",e="table-column-reset-button",d="separator",c="user-button",b="qx.ui.table.columnmenu.Button",a="menu";
qx.Class.define(b,{extend:qx.ui.form.MenuButton,implement:qx.ui.table.IColumnMenuButton,construct:function(){qx.ui.form.MenuButton.call(this);
this.__mA=new qx.ui.core.Blocker(this);
},members:{__wP:null,__mA:null,factory:function(g,h){switch(g){case a:var j=new qx.ui.menu.Menu();
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
}},getBlocker:function(){return this.__mA;
},empty:function(){var n=this.getMenu();
var o=n.getChildren();

for(var i=0,l=o.length;i<l;i++){o[0].destroy();
}}},destruct:function(){this.__mA.dispose();
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
(function(){var m="Boolean",l="resize-line",k="mousedown",j="qx.event.type.Data",i="mouseup",h="qx.ui.table.pane.CellEvent",g="scroll",d="focus-indicator",c="excluded",b="scrollbar-y",bo="table-scroller-focus-indicator",bn="visible",bm="mousemove",bl="header",bk="editing",bj="click",bi="modelChanged",bh="scrollbar-x",bg="cellClick",bf="pane",t="__ki",u="__xN",r="__pr",s="mouseout",p="changeHorizontalScrollBarVisible",q="__xQ",n="bottom",o="_applyScrollTimeout",A="changeScrollX",B="_applyTablePaneModel",K="Integer",H="dblclick",S="dataEdited",N="mousewheel",bb="interval",X="qx.ui.table.pane.Scroller",D="_applyShowCellFocusIndicator",be="y",bd="resize",bc="vertical",C="__xM",F="changeScrollY",G="__xL",J="__xO",L="__xP",O="appear",U="table-scroller",ba="beforeSort",v="cellDblclick",w="__xR",E="horizontal",R="losecapture",Q="contextmenu",P="col-resize",W="disappear",V="_applyVerticalScrollBarVisible",M="_applyHorizontalScrollBarVisible",T="cellContextmenu",a="close",Y="changeTablePaneModel",y="x",z="qx.ui.table.pane.Model",I="changeVerticalScrollBarVisible";
qx.Class.define(X,{extend:qx.ui.core.Widget,include:qx.ui.core.scroll.MScrollBarFactory,construct:function(bp){qx.ui.core.Widget.call(this);
this.__xK=bp;
var bq=new qx.ui.layout.Grid();
bq.setColumnFlex(0,1);
bq.setRowFlex(1,1);
this._setLayout(bq);
this.__xL=this._showChildControl(bh);
this.__xM=this._showChildControl(b);
this.__pr=this._showChildControl(bl);
this.__xN=this._showChildControl(bf);
this.__xO=new qx.ui.container.Composite(new qx.ui.layout.HBox()).set({minWidth:0});
this._add(this.__xO,{row:0,column:0,colSpan:2});
this.__xP=new qx.ui.table.pane.Clipper();
this.__xP.add(this.__pr);
this.__xP.addListener(R,this._onChangeCaptureHeader,this);
this.__xP.addListener(bm,this._onMousemoveHeader,this);
this.__xP.addListener(k,this._onMousedownHeader,this);
this.__xP.addListener(i,this._onMouseupHeader,this);
this.__xP.addListener(bj,this._onClickHeader,this);
this.__xO.add(this.__xP,{flex:1});
this.__xQ=new qx.ui.table.pane.Clipper();
this.__xQ.add(this.__xN);
this.__xQ.addListener(N,this._onMousewheel,this);
this.__xQ.addListener(bm,this._onMousemovePane,this);
this.__xQ.addListener(k,this._onMousedownPane,this);
this.__xQ.addListener(i,this._onMouseupPane,this);
this.__xQ.addListener(bj,this._onClickPane,this);
this.__xQ.addListener(Q,this._onContextMenu,this);
this.__xQ.addListener(H,this._onDblclickPane,this);
this.__xQ.addListener(bd,this._onResizePane,this);
this._add(this.__xQ,{row:1,column:0});
this.__xR=this.getChildControl(d);
this.initShowCellFocusIndicator();
this.getChildControl(l).hide();
this.addListener(s,this._onMouseout,this);
this.addListener(O,this._onAppear,this);
this.addListener(W,this._onDisappear,this);
this.__ki=new qx.event.Timer();
this.__ki.addListener(bb,this._oninterval,this);
this.initScrollTimeout();
},statics:{MIN_COLUMN_WIDTH:10,RESIZE_REGION_RADIUS:5,CLICK_TOLERANCE:5,HORIZONTAL_SCROLLBAR:1,VERTICAL_SCROLLBAR:2},events:{"changeScrollY":j,"changeScrollX":j,"cellClick":h,"cellDblclick":h,"cellContextmenu":h,"beforeSort":j},properties:{horizontalScrollBarVisible:{check:m,init:false,apply:M,event:p},verticalScrollBarVisible:{check:m,init:false,apply:V,event:I},tablePaneModel:{check:z,apply:B,event:Y},liveResize:{check:m,init:false},focusCellOnMouseMove:{check:m,init:false},selectBeforeFocus:{check:m,init:false},showCellFocusIndicator:{check:m,init:true,apply:D},contextMenuFromDataCellsOnly:{check:m,init:true},resetSelectionOnHeaderClick:{check:m,init:true},scrollTimeout:{check:K,init:100,apply:o},appearance:{refine:true,init:U}},members:{__wO:null,__xK:null,__xS:null,__xT:null,__xU:null,__xV:null,__xW:null,__xX:null,__xY:null,__ya:null,__yb:null,__yc:null,__yd:null,__ye:null,__yf:false,__yg:null,__yh:null,__yi:null,__wK:null,__wL:null,__yj:null,__yk:null,__yl:null,__xL:null,__xM:null,__pr:null,__xP:null,__xN:null,__xQ:null,__xR:null,__xO:null,__ki:null,getPaneInsetRight:function(){var bt=this.getTopRightWidget();
var bu=bt&&bt.isVisible()&&bt.getBounds()?bt.getBounds().width+bt.getMarginLeft()+bt.getMarginRight():0;
var bs=this.__xM;
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
this.__xQ.add(by);
by.show();
by.setDecorator(null);
break;
case l:by=new qx.ui.core.Widget();
by.setUserBounds(0,0,0,0);
by.setZIndex(1000);
this.__xQ.add(by);
break;
case bh:by=this._createScrollBar(E).set({minWidth:0,alignY:n});
by.addListener(g,this._onScrollX,this);
this._add(by,{row:2,column:0});
break;
case b:by=this._createScrollBar(bc);
by.addListener(g,this._onScrollY,this);
this._add(by,{row:1,column:1});
break;
}return by||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,bw);
},_applyHorizontalScrollBarVisible:function(bz,bA){this.__xL.setVisibility(bz?bn:c);
},_applyVerticalScrollBarVisible:function(bB,bC){this.__xM.setVisibility(bB?bn:c);
},_applyTablePaneModel:function(bD,bE){if(bE!=null){bE.removeListener(bi,this._onPaneModelChanged,this);
}bD.addListener(bi,this._onPaneModelChanged,this);
},_applyShowCellFocusIndicator:function(bF,bG){if(bF){this.__xR.setDecorator(bo);
this._updateFocusIndicator();
}else{if(this.__xR){this.__xR.setDecorator(null);
}}},getScrollY:function(){return this.__xM.getPosition();
},setScrollY:function(scrollY,bH){this.__xM.scrollTo(scrollY);

if(bH){this._updateContent();
}},getScrollX:function(){return this.__xL.getPosition();
},setScrollX:function(scrollX){this.__xL.scrollTo(scrollX);
},getTable:function(){return this.__xK;
},onColVisibilityChanged:function(){this.updateHorScrollBarMaximum();
this._updateFocusIndicator();
},setColumnWidth:function(bI,bJ){this.__pr.setColumnWidth(bI,bJ);
this.__xN.setColumnWidth(bI,bJ);
var bK=this.getTablePaneModel();
var x=bK.getX(bI);

if(x!=-1){this.updateHorScrollBarMaximum();
this._updateFocusIndicator();
}},onColOrderChanged:function(){this.__pr.onColOrderChanged();
this.__xN.onColOrderChanged();
this.updateHorScrollBarMaximum();
},onTableModelDataChanged:function(bL,bM,bN,bO){this.__xN.onTableModelDataChanged(bL,bM,bN,bO);
var bP=this.getTable().getTableModel().getRowCount();

if(bP!=this.__wO){this.updateVerScrollBarMaximum();

if(this.getFocusedRow()>=bP){if(bP==0){this.setFocusedCell(null,null);
}else{this.setFocusedCell(this.getFocusedColumn(),bP-1);
}}this.__wO=bP;
}},onSelectionChanged:function(){this.__xN.onSelectionChanged();
},onFocusChanged:function(){this.__xN.onFocusChanged();
},onTableModelMetaDataChanged:function(){this.__pr.onTableModelMetaDataChanged();
this.__xN.onTableModelMetaDataChanged();
},_onPaneModelChanged:function(){this.__pr.onPaneModelChanged();
this.__xN.onPaneModelChanged();
},_onResizePane:function(){this.updateHorScrollBarMaximum();
this.updateVerScrollBarMaximum();
this._updateContent();
this.__pr._updateContent();
this.__xK._updateScrollBarVisibility();
},updateHorScrollBarMaximum:function(){var bT=this.__xQ.getInnerSize();

if(!bT){return ;
}var bR=this.getTablePaneModel().getTotalWidth();
var bS=this.__xL;

if(bT.width<bR){var bQ=Math.max(0,bR-bT.width);
bS.setMaximum(bQ);
bS.setKnobFactor(bT.width/bR);
var bU=bS.getPosition();
bS.setPosition(Math.min(bU,bQ));
}else{bS.setMaximum(0);
bS.setKnobFactor(1);
bS.setPosition(0);
}},updateVerScrollBarMaximum:function(){var cd=this.__xQ.getInnerSize();

if(!cd){return ;
}var cb=this.getTable().getTableModel();
var bW=cb.getRowCount();

if(this.getTable().getKeepFirstVisibleRowComplete()){bW+=1;
}var bV=this.getTable().getRowHeight();
var bY=bW*bV;
var cc=this.__xM;

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
this.fireDataEvent(A,ce,e.getOldData());
this.__xP.scrollToX(ce);
this.__xQ.scrollToX(ce);
},_onScrollY:function(e){this.fireDataEvent(F,e.getData(),e.getOldData());
this._postponedUpdateContent();
},_onMousewheel:function(e){var cf=this.getTable();

if(!cf.getEnabled()){return;
}var ci=e.getWheelDelta(be);
if(ci>0&&ci<1){ci=1;
}else if(ci<0&&ci>-1){ci=-1;
}this.__xM.scrollBySteps(ci);
ci=e.getWheelDelta(y);
if(ci>0&&ci<1){ci=1;
}else if(ci<0&&ci>-1){ci=-1;
}this.__xL.scrollBySteps(ci);
if(this.__yh&&this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(this.__yh,this.__yi);
}var ch=this.__xM.getPosition();
var cg=this.__xM.getMaximum();
if(ci<0&&ch<=0||ci>0&&ch>=cg){return;
}e.stop();
},__ym:function(cj){var co=this.getTable();
var cp=this.__pr.getHeaderWidgetAtColumn(this.__yb);
var ck=cp.getSizeHint().minWidth;
var cm=Math.max(ck,this.__yd+cj-this.__yc);

if(this.getLiveResize()){var cl=co.getTableColumnModel();
cl.setColumnWidth(this.__yb,cm,true);
}else{this.__pr.setColumnWidth(this.__yb,cm,true);
var cn=this.getTablePaneModel();
this._showResizeLine(cn.getColumnLeft(this.__yb)+cm);
}this.__yc+=cm-this.__yd;
this.__yd=cm;
},__yn:function(cq){var cr=qx.ui.table.pane.Scroller.CLICK_TOLERANCE;

if(this.__pr.isShowingColumnMoveFeedback()||cq>this.__ya+cr||cq<this.__ya-cr){this.__xW+=cq-this.__ya;
this.__pr.showColumnMoveFeedback(this.__xV,this.__xW);
var cs=this.__xK.getTablePaneScrollerAtPageX(cq);

if(this.__xY&&this.__xY!=cs){this.__xY.hideColumnMoveFeedback();
}
if(cs!=null){this.__xX=cs.showColumnMoveFeedback(cq);
}else{this.__xX=null;
}this.__xY=cs;
this.__ya=cq;
}},_onMousemoveHeader:function(e){var cz=this.getTable();

if(!cz.getEnabled()){return;
}var cA=false;
var ct=null;
var cx=e.getDocumentLeft();
var cy=e.getDocumentTop();
this.__yh=cx;
this.__yi=cy;

if(this.__yb!=null){this.__ym(cx);
cA=true;
e.stopPropagation();
}else if(this.__xV!=null){this.__yn(cx);
e.stopPropagation();
}else{var cu=this._getResizeColumnForPageX(cx);

if(cu!=-1){cA=true;
}else{var cw=cz.getTableModel();
var cB=this._getColumnForPageX(cx);

if(cB!=null&&cw.isColumnSortable(cB)){ct=cB;
}}}var cv=cA?P:null;
this.getApplicationRoot().setGlobalCursor(cv);
this.setCursor(cv);
this.__pr.setMouseOverColumn(ct);
},_onMousemovePane:function(e){var cC=this.getTable();

if(!cC.getEnabled()){return;
}var cE=e.getDocumentLeft();
var cF=e.getDocumentTop();
this.__yh=cE;
this.__yi=cF;
var cD=this._getRowForPagePos(cE,cF);

if(cD!=null&&this._getColumnForPageX(cE)!=null){if(this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(cE,cF);
}}this.__pr.setMouseOverColumn(null);
},_onMousedownHeader:function(e){if(!this.getTable().getEnabled()){return;
}var cH=e.getDocumentLeft();
var cI=this._getResizeColumnForPageX(cH);

if(cI!=-1){this._startResizeHeader(cI,cH);
e.stop();
}else{var cG=this._getColumnForPageX(cH);

if(cG!=null){this._startMoveHeader(cG,cH);
e.stop();
}}},_startResizeHeader:function(cJ,cK){var cL=this.getTable().getTableColumnModel();
this.__yb=cJ;
this.__yc=cK;
this.__yd=cL.getColumnWidth(this.__yb);
this.__xP.capture();
},_startMoveHeader:function(cM,cN){this.__xV=cM;
this.__ya=cN;
this.__xW=this.getTablePaneModel().getColumnLeft(cM);
this.__xP.capture();
},_onMousedownPane:function(e){var cR=this.getTable();

if(!cR.getEnabled()){return;
}
if(cR.isEditing()){cR.stopEditing();
}var cO=e.getDocumentLeft();
var cQ=e.getDocumentTop();
var cT=this._getRowForPagePos(cO,cQ);
var cS=this._getColumnForPageX(cO);

if(cT!==null){this.__ye={row:cT,col:cS};
this.__yf=false;
var cP=this.getSelectBeforeFocus();

if(cP){cR.getSelectionManager().handleMouseDown(cT,e);
}if(!this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(cO,cQ);
}
if(!cP){cR.getSelectionManager().handleMouseDown(cT,e);
}}},_onMouseupFocusIndicator:function(e){if(this.__ye&&!this.__yf&&!this.isEditing()&&this.__xR.getRow()==this.__ye.row&&this.__xR.getColumn()==this.__ye.col){this.fireEvent(bg,qx.ui.table.pane.CellEvent,[this,e,this.__ye.row,this.__ye.col],true);
this.__yf=true;
}else if(!this.isEditing()){this._onMousedownPane(e);
}},_onChangeCaptureHeader:function(e){if(this.__yb!=null){this._stopResizeHeader();
}
if(this.__xV!=null){this._stopMoveHeader();
}},_stopResizeHeader:function(){var cU=this.getTable().getTableColumnModel();
if(!this.getLiveResize()){this._hideResizeLine();
cU.setColumnWidth(this.__yb,this.__yd,true);
}this.__yb=null;
this.__xP.releaseCapture();
this.getApplicationRoot().setGlobalCursor(null);
this.setCursor(null);
if(this.isEditing()){var cV=this.__yj.getBounds().height;
this.__yj.setUserBounds(0,0,this.__yd,cV);
}},_stopMoveHeader:function(){var db=this.getTable().getTableColumnModel();
var dc=this.getTablePaneModel();
this.__pr.hideColumnMoveFeedback();

if(this.__xY){this.__xY.hideColumnMoveFeedback();
}
if(this.__xX!=null){var de=dc.getFirstColumnX()+dc.getX(this.__xV);
var da=this.__xX;

if(da!=de&&da!=de+1){var dd=db.getVisibleColumnAtX(de);
var cY=db.getVisibleColumnAtX(da);
var cX=db.getOverallX(dd);
var cW=(cY!=null)?db.getOverallX(cY):db.getOverallColumnCount();

if(cW>cX){cW--;
}db.moveColumn(cX,cW);
this._updateFocusIndicator();
}}this.__xV=null;
this.__xX=null;
this.__xP.releaseCapture();
},_onMouseupPane:function(e){var df=this.getTable();

if(!df.getEnabled()){return;
}var dg=this._getRowForPagePos(e.getDocumentLeft(),e.getDocumentTop());

if(dg!=-1&&dg!=null&&this._getColumnForPageX(e.getDocumentLeft())!=null){df.getSelectionManager().handleMouseUp(dg,e);
}},_onMouseupHeader:function(e){var dh=this.getTable();

if(!dh.getEnabled()){return;
}
if(this.__yb!=null){this._stopResizeHeader();
this.__yg=true;
e.stop();
}else if(this.__xV!=null){this._stopMoveHeader();
e.stop();
}},_onClickHeader:function(e){if(this.__yg){this.__yg=false;
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

if(this.fireDataEvent(ba,dp,null,true)){dk.sortByColumn(dq,dn);

if(this.getResetSelectionOnHeaderClick()){dm.getSelectionModel().resetSelection();
}}}}e.stop();
},_onClickPane:function(e){var dr=this.getTable();

if(!dr.getEnabled()){return;
}var du=e.getDocumentLeft();
var dv=e.getDocumentTop();
var ds=this._getRowForPagePos(du,dv);
var dt=this._getColumnForPageX(du);

if(ds!=null&&dt!=null){dr.getSelectionManager().handleClick(ds,e);

if(this.__xR.isHidden()||(this.__ye&&!this.__yf&&!this.isEditing()&&ds==this.__ye.row&&dt==this.__ye.col)){this.fireEvent(bg,qx.ui.table.pane.CellEvent,[this,e,ds,dt],true);
this.__yf=true;
}}},_onContextMenu:function(e){var dz=e.getDocumentLeft();
var dA=e.getDocumentTop();
var dx=this._getRowForPagePos(dz,dA);
var dy=this._getColumnForPageX(dz);
if(dx===null&&this.getContextMenuFromDataCellsOnly()){return;
}
if(!this.getShowCellFocusIndicator()||dx===null||(this.__ye&&dx==this.__ye.row&&dy==this.__ye.col)){this.fireEvent(T,qx.ui.table.pane.CellEvent,[this,e,dx,dy],true);
var dw=this.getTable().getContextMenu();

if(dw){if(dw.getChildren().length>0){dw.openAtMouse(e);
}else{dw.exclude();
}e.preventDefault();
}}},_onContextMenuOpen:function(e){},_onDblclickPane:function(e){var dC=e.getDocumentLeft();
var dD=e.getDocumentTop();
this._focusCellAtPagePos(dC,dD);
this.startEditing();
var dB=this._getRowForPagePos(dC,dD);

if(dB!=-1&&dB!=null){this.fireEvent(v,qx.ui.table.pane.CellEvent,[this,e,dB],true);
}},_onMouseout:function(e){var dE=this.getTable();

if(!dE.getEnabled()){return;
}if(this.__yb==null){this.setCursor(null);
this.getApplicationRoot().setGlobalCursor(null);
}this.__pr.setMouseOverColumn(null);
},_showResizeLine:function(x){var dG=this._showChildControl(l);
var dF=dG.getWidth();
var dH=this.__xQ.getBounds();
dG.setUserBounds(x-Math.round(dF/2),0,dF,dH.height);
},_hideResizeLine:function(){this._excludeChildControl(l);
},showColumnMoveFeedback:function(dI){var dR=this.getTablePaneModel();
var dQ=this.getTable().getTableColumnModel();
var dL=this.__xN.getContainerLocation().left;
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
}var dO=this.__xQ.getContainerLocation().left;
var dT=this.__xQ.getBounds().width;
var scrollX=dO-dL;
dK=qx.lang.Number.limit(dK,scrollX+2,scrollX+dT-1);
this._showResizeLine(dK);
return dR.getFirstColumnX()+dM;
},hideColumnMoveFeedback:function(){this._hideResizeLine();
},_focusCellAtPagePos:function(dV,dW){var dY=this._getRowForPagePos(dV,dW);

if(dY!=-1&&dY!=null){var dX=this._getColumnForPageX(dV);
this.__xK.setFocusedCell(dX,dY);
}},setFocusedCell:function(ea,eb){if(!this.isEditing()){this.__xN.setFocusedCell(ea,eb,this.__xT);
this.__wK=ea;
this.__wL=eb;
this._updateFocusIndicator();
}},getFocusedColumn:function(){return this.__wK;
},getFocusedRow:function(){return this.__wL;
},scrollCellVisible:function(ec,ed){var en=this.getTablePaneModel();
var ee=en.getX(ec);

if(ee!=-1){var ek=this.__xQ.getInnerSize();

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
}},isEditing:function(){return this.__yj!=null;
},startEditing:function(){var eu=this.getTable();
var es=eu.getTableModel();
var ew=this.__wK;

if(!this.isEditing()&&(ew!=null)&&es.isColumnEditable(ew)){var ex=this.__wL;
var eq=this.getTablePaneModel().getX(ew);
var er=es.getValue(ew,ex);
this.scrollCellVisible(eq,ex);
this.__yk=eu.getTableColumnModel().getCellEditorFactory(ew);
var et={col:ew,row:ex,xPos:eq,value:er,table:eu};
this.__yj=this.__yk.createCellEditor(et);
if(this.__yj===null){return false;
}else if(this.__yj instanceof qx.ui.window.Window){this.__yj.setModal(true);
this.__yj.setShowClose(false);
this.__yj.addListener(a,this._onCellEditorModalWindowClose,this);
var f=eu.getModalCellEditorPreOpenFunction();

if(f!=null){f(this.__yj,et);
}this.__yj.open();
}else{var ev=this.__xR.getInnerSize();
this.__yj.setUserBounds(0,0,ev.width,ev.height);
this.__xR.addListener(k,function(e){this.__ye={row:this.__wL,col:this.__wK};
e.stopPropagation();
},this);
this.__xR.add(this.__yj);
this.__xR.addState(bk);
this.__xR.setKeepActive(false);
this.__xR.setDecorator(bo);
this.__yj.focus();
this.__yj.activate();
}return true;
}return false;
},stopEditing:function(){if(!this.getShowCellFocusIndicator()){this.__xR.setDecorator(null);
}this.flushEditor();
this.cancelEditing();
},flushEditor:function(){if(this.isEditing()){var ez=this.__yk.getCellEditorValue(this.__yj);
var ey=this.getTable().getTableModel().getValue(this.__wK,this.__wL);
this.getTable().getTableModel().setValue(this.__wK,this.__wL,ez);
this.__xK.focus();
this.__xK.fireDataEvent(S,{row:this.__wL,col:this.__wK,oldValue:ey,value:ez});
}},cancelEditing:function(){if(this.isEditing()&&!this.__yj.pendingDispose){if(this._cellEditorIsModalWindow){this.__yj.destroy();
this.__yj=null;
this.__yk=null;
this.__yj.pendingDispose=true;
}else{this.__xR.removeState(bk);
this.__xR.setKeepActive(true);
this.__yj.destroy();
this.__yj=null;
this.__yk=null;
}}},_onCellEditorModalWindowClose:function(e){this.stopEditing();
},_getColumnForPageX:function(eA){var eD=this.getTable().getTableColumnModel();
var eE=this.getTablePaneModel();
var eC=eE.getColumnCount();
var eG=this.__xN.getContentLocation().left;

for(var x=0;x<eC;x++){var eB=eE.getColumnAtX(x);
var eF=eD.getColumnWidth(eB);
eG+=eF;

if(eA<eG){return eB;
}}return null;
},_getResizeColumnForPageX:function(eH){var eL=this.getTable().getTableColumnModel();
var eM=this.getTablePaneModel();
var eK=eM.getColumnCount();
var eO=this.__pr.getContainerLocation().left;
var eI=qx.ui.table.pane.Scroller.RESIZE_REGION_RADIUS;

for(var x=0;x<eK;x++){var eJ=eM.getColumnAtX(x);
var eN=eL.getColumnWidth(eJ);
eO+=eN;

if(eH>=(eO-eI)&&eH<=(eO+eI)){return eJ;
}}return -1;
},_getRowForPagePos:function(eP,eQ){var eR=this.__xN.getContentLocation();

if(eP<eR.left||eP>eR.right){return null;
}
if(eQ>=eR.top&&eQ<=eR.bottom){var eS=this.getTable().getRowHeight();
var scrollY=this.__xM.getPosition();

if(this.getTable().getKeepFirstVisibleRowComplete()){scrollY=Math.floor(scrollY/eS)*eS;
}var eV=scrollY+eQ-eR.top;
var eX=Math.floor(eV/eS);
var eW=this.getTable().getTableModel();
var eT=eW.getRowCount();
return (eX<eT)?eX:null;
}var eU=this.__pr.getContainerLocation();

if(eQ>=eU.top&&eQ<=eU.bottom&&eP<=eU.right){return -1;
}return null;
},setTopRightWidget:function(eY){var fa=this.__yl;

if(fa!=null){this.__xO.remove(fa);
}
if(eY!=null){this.__xO.add(eY);
}this.__yl=eY;
},getTopRightWidget:function(){return this.__yl;
},getHeader:function(){return this.__pr;
},getTablePane:function(){return this.__xN;
},getVerticalScrollBarWidth:function(){var fb=this.__xM;
return fb.isVisible()?(fb.getSizeHint().width||0):0;
},getNeededScrollBars:function(fc,fd){var fm=this.__xM;
var fq=fm.getSizeHint().width+fm.getMarginLeft()+fm.getMarginRight();
var fs=this.__xL;
var fr=fs.getSizeHint().height+fs.getMarginTop()+fs.getMarginBottom();
var fk=this.__xQ.getInnerSize();
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
},getPaneClipper:function(){return this.__xQ;
},_applyScrollTimeout:function(ft,fu){this._startInterval(ft);
},_startInterval:function(fv){this.__ki.setInterval(fv);
this.__ki.start();
},_stopInterval:function(){this.__ki.stop();
},_postponedUpdateContent:function(){this._updateContent();
},_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.__xT&&!this.__xN._layoutPending){this.__xT=false;
this._updateContent();
}}),_updateContent:function(){var fA=this.__xQ.getInnerSize();

if(!fA){return;
}var fD=fA.height;
var scrollX=this.__xL.getPosition();
var scrollY=this.__xM.getPosition();
var fx=this.getTable().getRowHeight();
var fy=Math.floor(scrollY/fx);
var fC=this.__xN.getFirstVisibleRow();
this.__xN.setFirstVisibleRow(fy);
var fz=Math.ceil(fD/fx);
var fw=0;
var fB=this.getTable().getKeepFirstVisibleRowComplete();

if(!fB){fz++;
fw=scrollY%fx;
}this.__xN.setVisibleRowCount(fz);

if(fy!=fC){this._updateFocusIndicator();
}this.__xQ.scrollToX(scrollX);
if(!fB){this.__xQ.scrollToY(fw);
}},_updateFocusIndicator:function(){var fE=this.getTable();

if(!fE.getEnabled()){return;
}this.__xR.moveToCell(this.__wK,this.__wL);
}},destruct:function(){this._stopInterval();
var fF=this.getTablePaneModel();

if(fF){fF.dispose();
}this.__ye=this.__yl=this.__xK=null;
this._disposeObjects(G,C,L,q,w,r,u,J,t);
}});
})();
(function(){var j="px",i="no-repeat",h="repeat",g="gecko",f="scale",e="string",d="static",c="'",b="qx.ui.table.cellrenderer.AbstractImage",a="}",A="  text-align:center;",z="scale-x",y="repeat-y",x=".qooxdoo-table-cell-icon {",w="",v="<div></div>",u="top",t="engine.version",s="engine.name",r="abstract",p=" qooxdoo-table-cell-icon",q="inline-block",n="repeat-x",o="  padding-top:1px;",l="title='",m="scale-y",k="-moz-inline-box";
qx.Class.define(b,{extend:qx.ui.table.cellrenderer.Abstract,type:r,construct:function(){qx.ui.table.cellrenderer.Abstract.call(this);
var B=this.self(arguments);

if(!B.stylesheet){B.stylesheet=qx.bom.Stylesheet.createElement(x+A+o+a);
}},properties:{repeat:{check:function(C){var D=[f,z,m,h,n,y,i];
return qx.lang.Array.contains(D,C);
},init:i}},members:{__Ax:16,__Ay:16,__HK:null,_insetY:2,_identifyImage:function(E){throw new Error("_identifyImage is abstract");
},_getImageInfos:function(F){var G=this._identifyImage(F);
if(G==null||typeof G==e){G={url:G,tooltip:null};
}if(!G.imageWidth||!G.imageHeight){var H=this.__Az(G.url);
G.imageWidth=H.width;
G.imageHeight=H.height;
}G.width=G.imageWidth;
G.height=G.imageHeight;
return G;
},__Az:function(I){var L=qx.util.ResourceManager.getInstance();
var K=qx.io.ImageLoader;
var J,M;
if(L.has(I)){J=L.getImageWidth(I);
M=L.getImageHeight(I);
}else if(K.isLoaded(I)){J=K.getWidth(I);
M=K.getHeight(I);
}else{J=this.__Ax;
M=this.__Ay;
}return {width:J,height:M};
},createDataCellHtml:function(N,O){this.__HK=this._getImageInfos(N);
return qx.ui.table.cellrenderer.Abstract.prototype.createDataCellHtml.call(this,N,O);
},_getCellClass:function(P){return qx.ui.table.cellrenderer.Abstract.prototype._getCellClass.call(this)+p;
},_getContentHtml:function(Q){var content=v;
if(this.__HK.url){content=qx.bom.element.Decoration.create(this.__HK.url,this.getRepeat(),{width:this.__HK.width+j,height:this.__HK.height+j,display:qx.core.Environment.get(s)==g&&qx.core.Environment.get(t)<1.9?k:q,verticalAlign:u,position:d});
}return content;
},_getCellAttributes:function(R){var S=this.__HK.tooltip;

if(S){return l+S+c;
}else{return w;
}}},destruct:function(){this.__HK=null;
}});
})();
(function(){var h="headerCellRendererChanged",g="visibilityChangedPre",f="Number",e="qx.event.type.Event",d="_applyFirstColumnX",c="Integer",b="qx.ui.table.pane.Model",a="_applyMaxColumnCount";
qx.Class.define(b,{extend:qx.core.Object,construct:function(i){qx.core.Object.call(this);
this.setTableColumnModel(i);
},events:{"modelChanged":e},statics:{EVENT_TYPE_MODEL_CHANGED:"modelChanged"},properties:{firstColumnX:{check:c,init:0,apply:d},maxColumnCount:{check:f,init:-1,apply:a}},members:{__yp:null,__yq:null,_applyFirstColumnX:function(j,k){this.__yp=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},_applyMaxColumnCount:function(l,m){this.__yp=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},setTableColumnModel:function(n){if(this.__yq){this.__yq.removeListener(g,this._onColVisibilityChanged,this);
this.__yq.removeListener(h,this._onColVisibilityChanged,this);
}this.__yq=n;
this.__yq.addListener(g,this._onColVisibilityChanged,this);
this.__yq.addListener(h,this._onHeaderCellRendererChanged,this);
this.__yp=null;
},_onColVisibilityChanged:function(o){this.__yp=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},_onHeaderCellRendererChanged:function(p){this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},getColumnCount:function(){if(this.__yp==null){var q=this.getFirstColumnX();
var s=this.getMaxColumnCount();
var r=this.__yq.getVisibleColumnCount();

if(s==-1||(q+s)>r){this.__yp=r-q;
}else{this.__yp=s;
}}return this.__yp;
},getColumnAtX:function(t){var u=this.getFirstColumnX();
return this.__yq.getVisibleColumnAtX(u+t);
},getX:function(v){var w=this.getFirstColumnX();
var y=this.getMaxColumnCount();
var x=this.__yq.getVisibleX(v)-w;

if(x>=0&&(y==-1||x<y)){return x;
}else{return -1;
}},getColumnLeft:function(z){var C=0;
var B=this.getColumnCount();

for(var x=0;x<B;x++){var A=this.getColumnAtX(x);

if(A==z){return C;
}C+=this.__yq.getColumnWidth(A);
}return -1;
},getTotalWidth:function(){var D=0;
var E=this.getColumnCount();

for(var x=0;x<E;x++){var F=this.getColumnAtX(x);
D+=this.__yq.getColumnWidth(F);
}return D;
}},destruct:function(){if(this.__yq){this.__yq.removeListener(g,this._onColVisibilityChanged,this);
this.__yq.removeListener(h,this._onColVisibilityChanged,this);
}this.__yq=null;
}});
})();
(function(){var f="changeVisible",d="qx.ui.table.columnmenu.MenuItem",c="_applyVisible",b="Boolean",a="changeValue";
qx.Class.define(d,{extend:qx.ui.menu.CheckBox,implement:qx.ui.table.IColumnMenuItem,properties:{visible:{check:b,init:true,apply:c,event:f}},construct:function(g){qx.ui.menu.CheckBox.call(this,g);
this.addListener(a,function(e){this.bInListener=true;
this.setVisible(e.getData());
this.bInListener=false;
});
},members:{__wV:false,_applyVisible:function(h,i){if(!this.bInListener){this.setValue(h);
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
(function(){var e="first",d="last",c="hovered",b="__xA",a="qx.ui.table.pane.Header";
qx.Class.define(a,{extend:qx.ui.core.Widget,construct:function(f){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.HBox());
this.__mA=new qx.ui.core.Blocker(this);
this.__xA=f;
},members:{__xA:null,__xI:null,__xJ:null,__mA:null,getPaneScroller:function(){return this.__xA;
},getTable:function(){return this.__xA.getTable();
},getBlocker:function(){return this.__mA;
},onColOrderChanged:function(){this._updateContent(true);
},onPaneModelChanged:function(){this._updateContent(true);
},onTableModelMetaDataChanged:function(){this._updateContent();
},setColumnWidth:function(g,h,i){var j=this.getHeaderWidgetAtColumn(g);

if(j!=null){j.setWidth(h);
}},setMouseOverColumn:function(k){if(k!=this.__xJ){if(this.__xJ!=null){var l=this.getHeaderWidgetAtColumn(this.__xJ);

if(l!=null){l.removeState(c);
}}
if(k!=null){this.getHeaderWidgetAtColumn(k).addState(c);
}this.__xJ=k;
}},getHeaderWidgetAtColumn:function(m){var n=this.getPaneScroller().getTablePaneModel().getX(m);
return this._getChildren()[n];
},showColumnMoveFeedback:function(o,x){var s=this.getContainerLocation();

if(this.__xI==null){var y=this.getTable();
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
this.__xI=q;
}this.__xI.setLayoutProperties({left:s.left+x});
this.__xI.show();
},hideColumnMoveFeedback:function(){if(this.__xI!=null){this.__xI.destroy();
this.__xI=null;
}},isShowingColumnMoveFeedback:function(){return this.__xI!=null;
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
}}},destruct:function(){this.__mA.dispose();
this._disposeObjects(b);
}});
})();
(function(){var j="",i="table-row-background-even",h="Boolean",g="content",f="default",e="height:",d="'",c="table-row",b="table-row-background-focused",a="css.boxmodel",v=';color:',u="table-row-background-odd",t="1px solid ",s="table-row-line",r="table-row-background-selected",q="background-color:",p=';border-bottom: 1px solid ',o="table-row-selected",n="table-row-background-focused-selected",m="px;",k="qx.ui.table.rowrenderer.Default",l=";";
qx.Class.define(k,{extend:qx.core.Object,implement:qx.ui.table.IRowRenderer,construct:function(){qx.core.Object.call(this);
this.__wT=j;
this.__wT={};
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
},properties:{highlightFocusRow:{check:h,init:true}},members:{_colors:null,__wU:null,__wT:null,_insetY:1,_renderFont:function(x){if(x){this.__wU=x.getStyles();
this.__wT=qx.bom.element.Style.compile(this.__wU);
this.__wT=this.__wT.replace(/"/g,d);
}else{this.__wT=j;
this.__wU=qx.bom.Font.getDefaultStyles();
}},updateDataRowElement:function(y,z){var B=this.__wU;
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
E.push(this.__wT);
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
}},destruct:function(){this._colors=this.__wU=this.__wT=null;
}});
})();
(function(){var g="String",f="_applyIconTrue",e="decoration/table/boolean-true.png",d="qx.ui.table.cellrenderer.Boolean",c=";padding-top:4px;",b="decoration/table/boolean-false.png",a="_applyIconFalse";
qx.Class.define(d,{extend:qx.ui.table.cellrenderer.AbstractImage,construct:function(){qx.ui.table.cellrenderer.AbstractImage.call(this);
this.__FS=qx.util.AliasManager.getInstance();
this.initIconTrue();
this.initIconFalse();
},properties:{iconTrue:{check:g,init:e,apply:f},iconFalse:{check:g,init:b,apply:a}},members:{__BD:null,__BE:false,__FS:null,_applyIconTrue:function(h){this.__BD=this.__FS.resolve(h);
},_applyIconFalse:function(i){this.__BE=this.__FS.resolve(i);
},_insetY:5,_getCellStyle:function(j){return qx.ui.table.cellrenderer.AbstractImage.prototype._getCellStyle.call(this,j)+c;
},_identifyImage:function(k){var l={imageWidth:11,imageHeight:11};

switch(k.value){case true:l.url=this.__BD;
break;
case false:l.url=this.__BE;
break;
default:l.url=null;
break;
}return l;
}},destruct:function(){this.__FS=null;
}});
})();
(function(){var q="Boolean",p="column-button",o="Function",n="qx.event.type.Data",m="statusbar",k="qx.ui.table.pane.CellEvent",h="function",g="PageUp",f="dataChanged",e="changeLocale",bH="changeSelection",bG="appear",bF="qx.dynlocale",bE='"',bD="__wR",bC="Enter",bB="metaDataChanged",bA="_applyStatusBarVisible",bz="columnVisibilityMenuCreateStart",by="blur",y="qx.ui.table.Table",z="columnVisibilityMenuCreateEnd",v="changeVisible",w="_applyResetSelectionOnHeaderClick",t="_applyMetaColumnCounts",u="focus",r="changeDataRowRenderer",s="changeHeaderCellHeight",G="Escape",H="A",ba="changeSelectionModel",V="Left",bi="__wQ",bd="Down",bu="Integer",bo="_applyHeaderCellHeight",O="__ki",bx="visibilityChanged",bw="qx.ui.table.ITableModel",bv="orderChanged",M="_applySelectionModel",R="__wI",T="menu-button",X="menu",bb="_applyAdditionalStatusBarText",be="_applyFocusCellOnMouseMove",bk="table",bq="_applyColumnVisibilityButtonVisible",A="changeTableModel",B="qx.event.type.Event",Q="tableWidthChanged",bh="_applyHeaderCellsVisible",bg="Object",bf="_applyShowCellFocusIndicator",bm="resize",bl="verticalScrollBarChanged",bc="changeScrollY",bj="_applyTableModel",a="End",bp="_applyKeepFirstVisibleRowComplete",C="widthChanged",D="one of one row",W="Home",b="_applyRowHeight",d="F2",L="Up",E="%1 rows",F="qx.ui.table.selection.Model",J="one row",Y="PageDown",bs="%1 of %2 rows",br="keypress",S="changeRowHeight",bt="Number",N="__wP",bn="header",I="_applyContextMenuFromDataCellsOnly",K="qx.ui.table.IRowRenderer",c="Right",U="__wJ",P="Space";
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
this.__wI=new qx.ui.container.Composite(new qx.ui.layout.HBox());
this._add(this.__wI,{flex:1});
this.setDataRowRenderer(new qx.ui.table.rowrenderer.Default(this));
this.__wJ=this.getNewSelectionManager()(this);
this.setSelectionModel(this.getNewSelectionModel()(this));
this.setTableModel(bI||this.getEmptyTableModel());
this.setMetaColumnCounts([-1]);
this.setTabIndex(1);
this.addListener(br,this._onKeyPress);
this.addListener(u,this._onFocusChanged);
this.addListener(by,this._onFocusChanged);
var bK=new qx.ui.core.Widget().set({height:0});
this._add(bK);
bK.addListener(bm,this._onResize,this);
this.__wK=null;
this.__wL=null;
if(qx.core.Environment.get(bF)){qx.locale.Manager.getInstance().addListener(e,this._onChangeLocale,this);
}this.initStatusBarVisible();
bI=this.getTableModel();

if(bI.init&&typeof (bI.init)==h){bI.init(this);
}},events:{"columnVisibilityMenuCreateStart":n,"columnVisibilityMenuCreateEnd":n,"tableWidthChanged":B,"verticalScrollBarChanged":n,"cellClick":k,"cellDblclick":k,"cellContextmenu":k,"dataEdited":n},statics:{__wM:{cellClick:1,cellDblclick:1,cellContextmenu:1}},properties:{appearance:{refine:true,init:bk},focusable:{refine:true,init:true},minWidth:{refine:true,init:50},initiallyHiddenColumns:{init:null},selectable:{refine:true,init:false},selectionModel:{check:F,apply:M,event:ba},tableModel:{check:bw,apply:bj,event:A},rowHeight:{check:bt,init:20,apply:b,event:S,themeable:true},forceLineHeight:{check:q,init:true},headerCellsVisible:{check:q,init:true,apply:bh,themeable:true},headerCellHeight:{check:bu,init:16,apply:bo,event:s,nullable:true,themeable:true},statusBarVisible:{check:q,init:true,apply:bA},additionalStatusBarText:{nullable:true,init:null,apply:bb},columnVisibilityButtonVisible:{check:q,init:true,apply:bq,themeable:true},metaColumnCounts:{check:bg,apply:t},focusCellOnMouseMove:{check:q,init:false,apply:be},rowFocusChangeModifiesSelection:{check:q,init:true},showCellFocusIndicator:{check:q,init:true,apply:bf},contextMenuFromDataCellsOnly:{check:q,init:true,apply:I},keepFirstVisibleRowComplete:{check:q,init:true,apply:bp},alwaysUpdateCells:{check:q,init:false},resetSelectionOnHeaderClick:{check:q,init:true,apply:w},dataRowRenderer:{check:K,init:null,nullable:true,event:r},modalCellEditorPreOpenFunction:{check:o,init:null,nullable:true},newColumnMenu:{check:o,init:function(){return new qx.ui.table.columnmenu.Button();
}},newSelectionManager:{check:o,init:function(bL){return new qx.ui.table.selection.Manager(bL);
}},newSelectionModel:{check:o,init:function(bM){return new qx.ui.table.selection.Model(bM);
}},newTableColumnModel:{check:o,init:function(bN){return new qx.ui.table.columnmodel.Basic(bN);
}},newTablePane:{check:o,init:function(bO){return new qx.ui.table.pane.Pane(bO);
}},newTablePaneHeader:{check:o,init:function(bP){return new qx.ui.table.pane.Header(bP);
}},newTablePaneScroller:{check:o,init:function(bQ){return new qx.ui.table.pane.Scroller(bQ);
}},newTablePaneModel:{check:o,init:function(bR){return new qx.ui.table.pane.Model(bR);
}}},members:{__wK:null,__wL:null,__wI:null,__wJ:null,__wN:null,__wO:null,__ww:null,__wP:null,__wQ:null,__wR:null,__wS:null,__ki:null,_createChildControlImpl:function(bS,bT){var bU;

switch(bS){case m:bU=new qx.ui.basic.Label();
bU.set({allowGrowX:true});
this._add(bU);
break;
case p:bU=this.getNewColumnMenu()();
bU.set({focusable:false});
var bV=bU.factory(X,{table:this});
bV.addListener(bG,this._initColumnMenu,this);
break;
}return bU||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,bS);
},_applySelectionModel:function(bW,bX){this.__wJ.setSelectionModel(bW);

if(bX!=null){bX.removeListener(bH,this._onSelectionChanged,this);
}bW.addListener(bH,this._onSelectionChanged,this);
},_applyRowHeight:function(bY,ca){var cb=this._getPaneScrollerArr();

for(var i=0;i<cb.length;i++){cb[i].updateVerScrollBarMaximum();
}},_applyHeaderCellsVisible:function(cc,cd){var ce=this._getPaneScrollerArr();

for(var i=0;i<ce.length;i++){ce[i]._excludeChildControl(bn);
}},_applyHeaderCellHeight:function(cf,cg){var ch=this._getPaneScrollerArr();

for(var i=0;i<ch.length;i++){ch[i].getHeader().setHeight(cf);
}},getEmptyTableModel:function(){if(!this.__wR){this.__wR=new qx.ui.table.model.Simple();
this.__wR.setColumns([]);
this.__wR.setData([]);
}return this.__wR;
},_applyTableModel:function(ci,cj){this.getTableColumnModel().init(ci.getColumnCount(),this);

if(cj!=null){cj.removeListener(bB,this._onTableModelMetaDataChanged,this);
cj.removeListener(f,this._onTableModelDataChanged,this);
}ci.addListener(bB,this._onTableModelMetaDataChanged,this);
ci.addListener(f,this._onTableModelDataChanged,this);
this._updateStatusBar();
this._updateTableData(0,ci.getRowCount(),0,ci.getColumnCount());
this._onTableModelMetaDataChanged();
if(cj&&ci.init&&typeof (ci.init)==h){ci.init(this);
}},getTableColumnModel:function(){if(!this.__wQ){var cm=this.__wQ=this.getNewTableColumnModel()(this);
cm.addListener(bx,this._onColVisibilityChanged,this);
cm.addListener(C,this._onColWidthChanged,this);
cm.addListener(bv,this._onColOrderChanged,this);
var cl=this.getTableModel();
cm.init(cl.getColumnCount(),this);
var ck=this._getPaneScrollerArr();

for(var i=0;i<ck.length;i++){var cn=ck[i];
var co=cn.getTablePaneModel();
co.setTableColumnModel(cm);
}}return this.__wQ;
},_applyStatusBarVisible:function(cp,cq){if(cp){this._showChildControl(m);
}else{this._excludeChildControl(m);
}
if(cp){this._updateStatusBar();
}},_applyAdditionalStatusBarText:function(cr,cs){this.__wN=cr;
this._updateStatusBar();
},_applyColumnVisibilityButtonVisible:function(ct,cu){if(ct){this._showChildControl(p);
}else{this._excludeChildControl(p);
}},_applyMetaColumnCounts:function(cv,cw){var cD=cv;
var cx=this._getPaneScrollerArr();
var cB={};

if(cv>cw){var cF=qx.event.Registration.getManager(cx[0]);

for(var cG in qx.ui.table.Table.__wM){cB[cG]={};
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
for(cG in qx.ui.table.Table.__wM){if(!cB[cG]){break;
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
this.__wI.add(cH,{flex:cI});
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
}},getSelectionManager:function(){return this.__wJ;
},_getPaneScrollerArr:function(){return this.__wI.getChildren();
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
if(this.__wL>=dq&&this.__wL<(dq+dr)){this.setFocusedCell();
}}
for(var i=0;i<ds.length;i++){ds[i].onTableModelDataChanged(dl,dm,dn,dp);
}var dt=this.getTableModel().getRowCount();

if(dt!=this.__wO){this.__wO=dt;
this._updateScrollBarVisibility();
this._updateStatusBar();
}},_onScrollY:function(du){if(!this.__ww){this.__ww=true;
var dv=this._getPaneScrollerArr();

for(var i=0;i<dv.length;i++){dv[i].setScrollY(du.getData());
}this.__ww=false;
}},_onKeyPress:function(dw){if(!this.getEnabled()){return;
}var dD=this.__wL;
var dA=true;
var dE=dw.getKeyIdentifier();

if(this.isEditing()){if(dw.getModifiers()==0){switch(dE){case bC:this.stopEditing();
var dD=this.__wL;
this.moveFocusedCell(0,1);

if(this.__wL!=dD){dA=this.startEditing();
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
}}else{switch(dE){case P:this.__wJ.handleSelectKeyDown(this.__wL,dw);
break;
case d:case bC:this.startEditing();
dA=true;
break;
case W:this.setFocusedCell(this.__wK,0,true);
break;
case a:var dB=this.getTableModel().getRowCount();
this.setFocusedCell(this.__wK,dB-1,true);
break;
case V:this.moveFocusedCell(-1,0);
break;
case c:this.moveFocusedCell(1,0);
break;
case L:this.moveFocusedCell(0,-1);
break;
case bd:this.moveFocusedCell(0,1);
break;
case g:case Y:var dz=this.getPaneScroller(0);
var dC=dz.getTablePane();
var dy=this.getRowHeight();
var dx=(dE==g)?-1:1;
dB=dC.getVisibleRowCount()-1;
dz.setScrollY(dz.getScrollY()+dx*dB*dy);
this.moveFocusedCell(0,dx*dB);
break;
default:dA=false;
}}}
if(dD!=this.__wL&&this.getRowFocusChangeModifiesSelection()){this.__wJ.handleMoveKeyDown(this.__wL,dw);
}
if(dA){dw.preventDefault();
dw.stopPropagation();
}},_onFocusChanged:function(dF){var dG=this._getPaneScrollerArr();

for(var i=0;i<dG.length;i++){dG[i].onFocusChanged();
}},_onColVisibilityChanged:function(dH){var dI=this._getPaneScrollerArr();

for(var i=0;i<dI.length;i++){dI[i].onColVisibilityChanged();
}var dJ=dH.getData();

if(this.__wP!=null&&dJ.col!=null&&dJ.visible!=null){this.__wP[dJ.col].setVisible(dJ.visible);
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
},setFocusedCell:function(dR,dS,dT){if(!this.isEditing()&&(dR!=this.__wK||dS!=this.__wL)){if(dR===null){dR=0;
}this.__wK=dR;
this.__wL=dS;
var dU=this._getPaneScrollerArr();

for(var i=0;i<dU.length;i++){dU[i].setFocusedCell(dR,dS);
}
if(dR!==null&&dT){this.scrollCellVisible(dR,dS);
}}},resetSelection:function(){this.getSelectionModel().resetSelection();
},resetCellFocus:function(){this.setFocusedCell(null,null,false);
},getFocusedColumn:function(){return this.__wK;
},getFocusedRow:function(){return this.__wL;
},highlightFocusedRow:function(dV){this.getDataRowRenderer().setHighlightFocusRow(dV);
},clearFocusedRowHighlight:function(dW){if(dW){var dY=dW.getRelatedTarget();

if(dY instanceof qx.ui.table.pane.Pane||dY instanceof qx.ui.table.pane.FocusIndicator){return;
}}this.resetCellFocus();
var dX=this._getPaneScrollerArr();

for(var i=0;i<dX.length;i++){dX[i].onFocusChanged();
}},moveFocusedCell:function(ea,eb){var ef=this.__wK;
var eg=this.__wL;
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
}},isEditing:function(){if(this.__wK!=null){var x=this.getTableColumnModel().getVisibleX(this.__wK);
var em=this._getMetaColumnAtColumnX(x);
return this.getPaneScroller(em).isEditing();
}return false;
},startEditing:function(){if(this.__wK!=null){var x=this.getTableColumnModel().getVisibleX(this.__wK);
var eo=this._getMetaColumnAtColumnX(x);
var en=this.getPaneScroller(eo).startEditing();
return en;
}return false;
},stopEditing:function(){if(this.__wK!=null){var x=this.getTableColumnModel().getVisibleX(this.__wK);
var ep=this._getMetaColumnAtColumnX(x);
this.getPaneScroller(ep).stopEditing();
}},cancelEditing:function(){if(this.__wK!=null){var x=this.getTableColumnModel().getVisibleX(this.__wK);
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
}else{eD=this.trn(D,bs,eE,eC,eE);
}}
if(this.__wN){if(eD){eD+=this.__wN;
}else{eD=this.__wN;
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
if(eP){if(this.__wS==null){this.__wS=eJ[i].getVerticalScrollBarVisible();
this.__ki=qx.event.Timer.once(function(){this.__wS=null;
this.__ki=null;
},this,0);
}}eJ[i].setVerticalScrollBarVisible(eP&&eN);
if(eP&&eN!=this.__wS){this.fireDataEvent(bl,eN);
}}},_initColumnMenu:function(){var eS=this.getTableModel();
var eT=this.getTableColumnModel();
var eU=this.getChildControl(p);
eU.empty();
var eR=eU.getMenu();
var eV={table:this,menu:eR,columnButton:eU};
this.fireDataEvent(bz,eV);
this.__wP={};

for(var eW=0,l=eS.getColumnCount();eW<l;eW++){var eQ=eU.factory(T,{text:eS.getColumnName(eW),column:eW,bVisible:eT.isColumnVisible(eW)});
qx.core.Assert.assertInterface(eQ,qx.ui.table.IColumnMenuItem);
eQ.addListener(v,this._createColumnVisibilityCheckBoxHandler(eW),this);
this.__wP[eW]=eQ;
}eV={table:this,menu:eR,columnButton:eU};
this.fireDataEvent(z,eV);
},_createColumnVisibilityCheckBoxHandler:function(eX){return function(eY){var fa=this.getTableColumnModel();
fa.setColumnVisible(eX,eY.getData());
};
},setColumnWidth:function(fb,fc){this.getTableColumnModel().setColumnWidth(fb,fc);
},_onResize:function(){this.fireEvent(Q);
this._updateScrollerWidths();
this._updateScrollBarVisibility();
},addListener:function(fd,fe,self,ff){if(this.self(arguments).__wM[fd]){var fh=[fd];

for(var i=0,fg=this._getPaneScrollerArr();i<fg.length;i++){fh.push(fg[i].addListener.apply(fg[i],arguments));
}return fh.join(bE);
}else{return qx.ui.core.Widget.prototype.addListener.call(this,fd,fe,self,ff);
}},removeListener:function(fi,fj,self,fk){if(this.self(arguments).__wM[fi]){for(var i=0,fl=this._getPaneScrollerArr();i<fl.length;i++){fl[i].removeListener.apply(fl[i],arguments);
}}else{qx.ui.core.Widget.prototype.removeListener.call(this,fi,fj,self,fk);
}},removeListenerById:function(fm){var fq=fm.split(bE);
var fp=fq.shift();

if(this.self(arguments).__wM[fp]){var fo=true;

for(var i=0,fn=this._getPaneScrollerArr();i<fn.length;i++){fo=fn[i].removeListenerById.call(fn[i],fq[i])&&fo;
}return fo;
}else{return qx.ui.core.Widget.prototype.removeListenerById.call(this,fm);
}},destroy:function(){this.getChildControl(p).getMenu().destroy();
qx.ui.core.Widget.prototype.destroy.call(this);
}},destruct:function(){if(qx.core.Environment.get(bF)){qx.locale.Manager.getInstance().removeListener(e,this._onChangeLocale,this);
}var fs=this.getSelectionModel();

if(fs){fs.dispose();
}var fr=this.getDataRowRenderer();

if(fr){fr.dispose();
}this._cleanUpMetaColumns(0);
this.getTableColumnModel().dispose();
this._disposeObjects(U,R,bD,bD,bi,O);
this._disposeMap(N);
}});
})();

});