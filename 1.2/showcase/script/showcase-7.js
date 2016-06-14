qx.$$packageData['da9a6d75a2b0']={"locales":{},"resources":{"qx/icon/Tango/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/media-audio.png":[16,16,"png","qx"],"qx/icon/Tango/16/status/dialog-warning.png":[16,16,"png","qx"]},"translations":{"C":{},"de":{"%1 of %2 rows":"%1 von %2 Zeilen","%1 rows":"%1 Zeilen","Reset column widths":"Spaltenbreite zurücksetzen","one of one row":"Eine von einer Zeile","one row":"Eine Zeile"},"de_AT":{},"de_DE":{},"en":{},"en_GB":{},"en_US":{},"es":{"%1 of %2 rows":"%1 de %2 filas","%1 rows":"%1 filas","Reset column widths":"Reestablecer anchos de columnas","one of one row":"una de una fila","one row":"una fila"},"es_ES":{},"es_MX":{}}};

qx.Part.$$notifyLoad("da9a6d75a2b0", function() {
(function(){var a="qx.ui.table.ICellRenderer";
qx.Interface.define(a,{members:{createDataCellHtml:function(b,c){return true;
}}});
})();
(function(){var j="",i="px;",h=".qooxdoo-table-cell {",g="qooxdoo-table-cell",f='" ',e="nowrap",d="default",c="qx.client",b="}",a="width:",H=".qooxdoo-table-cell-right { text-align:right } ",G="0px 6px",F='<div class="',E="0px",D="height:",C="1px solid ",B=".qooxdoo-table-cell-bold { font-weight:bold } ",A="table-row-line",z="String",y='>',q="mshtml",r='</div>',o="ellipsis",p="content-box",m='left:',n="qx.ui.table.cellrenderer.Abstract",k='" style="',l="abstract",s="none",t="hidden",v="} ",u='px;',x=".qooxdoo-table-cell-italic { font-style:italic} ",w="absolute";
qx.Class.define(n,{type:l,implement:qx.ui.table.ICellRenderer,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
var S=qx.ui.table.cellrenderer.Abstract;

if(!S.__vc){var U=qx.theme.manager.Color.getInstance();
S.__vc=this.self(arguments);
var T=h+
qx.bom.element.Style.compile({position:w,top:E,overflow:t,whiteSpace:e,borderRight:C+U.resolve(A),padding:G,cursor:d,textOverflow:o,userSelect:s})+v+H+x+B;

if(!qx.core.Variant.isSet(c,q)){T+=h+qx.bom.element.BoxSizing.compile(p)+b;
}S.__vc.stylesheet=qx.bom.Stylesheet.createElement(T);
}},properties:{defaultCellStyle:{init:null,check:z,nullable:true}},members:{_insetX:6+6+1,_insetY:0,_getCellClass:function(K){return g;
},_getCellStyle:function(R){return R.style||j;
},_getCellAttributes:function(V){return j;
},_getContentHtml:function(L){return L.value||j;
},_getCellSizeStyle:function(M,N,O,P){var Q=j;

if(qx.bom.client.Feature.CONTENT_BOX){M-=O;
N-=P;
}Q+=a+Math.max(M,0)+i;
Q+=D+Math.max(N,0)+i;
return Q;
},createDataCellHtml:function(I,J){J.push(F,this._getCellClass(I),k,m,I.styleLeft,u,this._getCellSizeStyle(I.styleWidth,I.styleHeight,this._insetX,this._insetY),this._getCellStyle(I),f,this._getCellAttributes(I),y+this._getContentHtml(I),r);
}}});
})();
(function(){var b="qx.ui.table.IColumnMenuItem",a="qx.event.type.Data";
qx.Interface.define(b,{properties:{visible:{}},events:{changeVisible:a}});
})();
(function(){var i="icon",h="label",g="String",f="sort-icon",e="_applySortIcon",d="_applyIcon",c="table-header-cell",b="qx.ui.table.headerrenderer.HeaderCell",a="_applyLabel";
qx.Class.define(b,{extend:qx.ui.container.Composite,construct:function(){qx.ui.container.Composite.call(this);
var p=new qx.ui.layout.Grid();
p.setRowFlex(0,1);
p.setColumnFlex(1,1);
p.setColumnFlex(2,1);
this.setLayout(p);
},properties:{appearance:{refine:true,init:c},label:{check:g,init:null,nullable:true,apply:a},sortIcon:{check:g,init:null,nullable:true,apply:e,themeable:true},icon:{check:g,init:null,nullable:true,apply:d}},members:{_applyLabel:function(q,r){if(q){this._showChildControl(h).setValue(q);
}else{this._excludeChildControl(h);
}},_applySortIcon:function(l,m){if(l){this._showChildControl(f).setSource(l);
}else{this._excludeChildControl(f);
}},_applyIcon:function(n,o){if(n){this._showChildControl(i).setSource(n);
}else{this._excludeChildControl(i);
}},_createChildControlImpl:function(j){var k;

switch(j){case h:k=new qx.ui.basic.Label(this.getLabel()).set({anonymous:true,allowShrinkX:true});
this._add(k,{row:0,column:1});
break;
case f:k=new qx.ui.basic.Image(this.getSortIcon());
k.setAnonymous(true);
this._add(k,{row:0,column:2});
break;
case i:k=new qx.ui.basic.Image(this.getIcon()).set({anonymous:true,allowShrinkX:true});
this._add(k,{row:0,column:0});
break;
}return k||qx.ui.container.Composite.prototype._createChildControlImpl.call(this,j);
}}});
})();
(function(){var d="qx.event.type.Data",c="qx.event.type.Event",b="qx.ui.table.ITableModel";
qx.Interface.define(b,{events:{"dataChanged":d,"metaDataChanged":c,"sorted":d},members:{getRowCount:function(){},getRowData:function(u){},getColumnCount:function(){},getColumnId:function(k){},getColumnIndexById:function(l){},getColumnName:function(j){},isColumnEditable:function(a){},isColumnSortable:function(t){},sortByColumn:function(m,n){},getSortColumnIndex:function(){},isSortAscending:function(){},prefetchRows:function(r,s){},getValue:function(e,f){},getValueById:function(v,w){},setValue:function(o,p,q){},setValueById:function(g,h,i){}}});
})();
(function(){var a="qx.ui.table.IColumnMenuButton";
qx.Interface.define(a,{properties:{menu:{}},members:{factory:function(b,c){return true;
},empty:function(){return true;
}}});
})();
(function(){var h="",g="number",f="Boolean",e="qx.ui.table.cellrenderer.Default",d=" qooxdoo-table-cell-bold",c=" qooxdoo-table-cell-right",b=" qooxdoo-table-cell-italic",a="string";
qx.Class.define(e,{extend:qx.ui.table.cellrenderer.Abstract,statics:{STYLEFLAG_ALIGN_RIGHT:1,STYLEFLAG_BOLD:2,STYLEFLAG_ITALIC:4,_numberFormat:null},properties:{useAutoAlign:{check:f,init:true}},members:{_getStyleFlags:function(l){if(this.getUseAutoAlign()){if(typeof l.value==g){return qx.ui.table.cellrenderer.Default.STYLEFLAG_ALIGN_RIGHT;
}}return 0;
},_getCellClass:function(n){var o=qx.ui.table.cellrenderer.Abstract.prototype._getCellClass.call(this,n);

if(!o){return h;
}var p=this._getStyleFlags(n);

if(p&qx.ui.table.cellrenderer.Default.STYLEFLAG_ALIGN_RIGHT){o+=c;
}
if(p&qx.ui.table.cellrenderer.Default.STYLEFLAG_BOLD){o+=d;
}
if(p&qx.ui.table.cellrenderer.Default.STYLEFLAG_ITALIC){o+=b;
}return o;
},_getContentHtml:function(m){return qx.bom.String.escape(this._formatValue(m));
},_formatValue:function(i){var k=i.value;
var j;

if(k==null){return h;
}
if(typeof k==a){return k;
}else if(typeof k==g){if(!qx.ui.table.cellrenderer.Default._numberFormat){qx.ui.table.cellrenderer.Default._numberFormat=new qx.util.format.NumberFormat();
qx.ui.table.cellrenderer.Default._numberFormat.setMaximumFractionDigits(2);
}var j=qx.ui.table.cellrenderer.Default._numberFormat.format(k);
}else if(k instanceof Date){j=qx.util.format.DateFormat.getDateInstance().format(k);
}else{j=k;
}return j;
}}});
})();
(function(){var s="",r="==",q=">",p="between",o="<",n="regex",m="!between",l=">=",k="!=",j="<=",c="font-weight",h=";",f="text-align",b='g',a=":",e="qx.ui.table.cellrenderer.Conditional",d="color",g="font-style";
qx.Class.define(e,{extend:qx.ui.table.cellrenderer.Default,construct:function(bc,bd,be,bf){qx.ui.table.cellrenderer.Default.call(this);
this.numericAllowed=[r,k,q,o,l,j];
this.betweenAllowed=[p,m];
this.conditions=[];
this.__zm=bc||s;
this.__zn=bd||s;
this.__zo=be||s;
this.__zp=bf||s;
},members:{__zm:null,__zn:null,__zo:null,__zp:null,__zq:function(B,C){if(B[1]!=null){C[f]=B[1];
}
if(B[2]!=null){C[d]=B[2];
}
if(B[3]!=null){C[g]=B[3];
}
if(B[4]!=null){C[c]=B[4];
}},addNumericCondition:function(M,N,O,P,Q,R,S){var T=null;

if(qx.lang.Array.contains(this.numericAllowed,M)){if(N!=null){T=[M,O,P,Q,R,N,S];
}}
if(T!=null){this.conditions.push(T);
}else{throw new Error("Condition not recognized or value is null!");
}},addBetweenCondition:function(D,E,F,G,H,I,J,K){if(qx.lang.Array.contains(this.betweenAllowed,D)){if(E!=null&&F!=null){var L=[D,G,H,I,J,E,F,K];
}}
if(L!=null){this.conditions.push(L);
}else{throw new Error("Condition not recognized or value1/value2 is null!");
}},addRegex:function(U,V,W,X,Y,ba){if(U!=null){var bb=[n,V,W,X,Y,U,ba];
}
if(bb!=null){this.conditions.push(bb);
}else{throw new Error("regex cannot be null!");
}},_getCellStyle:function(t){if(!this.conditions.length){return t.style||s;
}var y=t.table.getTableModel();
var i;
var A;
var u;
var w={"text-align":this.__zm,"color":this.__zn,"font-style":this.__zo,"font-weight":this.__zp};

for(i in this.conditions){A=false;

if(qx.lang.Array.contains(this.numericAllowed,this.conditions[i][0])){if(this.conditions[i][6]==null){u=t.value;
}else{u=y.getValueById(this.conditions[i][6],t.row);
}
switch(this.conditions[i][0]){case r:if(u==this.conditions[i][5]){A=true;
}break;
case k:if(u!=this.conditions[i][5]){A=true;
}break;
case q:if(u>this.conditions[i][5]){A=true;
}break;
case o:if(u<this.conditions[i][5]){A=true;
}break;
case l:if(u>=this.conditions[i][5]){A=true;
}break;
case j:if(u<=this.conditions[i][5]){A=true;
}break;
}}else if(qx.lang.Array.contains(this.betweenAllowed,this.conditions[i][0])){if(this.conditions[i][7]==null){u=t.value;
}else{u=y.getValueById(this.conditions[i][7],t.row);
}
switch(this.conditions[i][0]){case p:if(u>=this.conditions[i][5]&&u<=this.conditions[i][6]){A=true;
}break;
case m:if(u<this.conditions[i][5]&&u>this.conditions[i][6]){A=true;
}break;
}}else if(this.conditions[i][0]==n){if(this.conditions[i][6]==null){u=t.value;
}else{u=y.getValueById(this.conditions[i][6],t.row);
}var v=new RegExp(this.conditions[i][5],b);
A=v.test(u);
}if(A==true){this.__zq(this.conditions[i],w);
}}var z=[];

for(var x in w){if(w[x]){z.push(x,a,w[x],h);
}}return z.join(s);
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
(function(){var m="",l="Year",k="loading ...",h="Title",g="Explicit",f="icon/16/mimetypes/media-audio.png",e="showcase.page.table.Content.saveResult",d="Chart Pos.",c="this",b="0",y="2*",x="1*",w="icon/16/apps/office-calendar.png",v="env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=",u="Artist",t="select * from music.track.popular",s="Popular Music Tracks",r=", ",q="http://query.yahooapis.com/v1/public/yql?q=",p="icon/16/status/dialog-warning.png",n="showcase.page.table.Content",o="&format=json&diagnostics=false&";
qx.Class.define(n,{extend:showcase.page.AbstractDesktopContent,construct:function(z){showcase.page.AbstractDesktopContent.call(this,z);
},statics:{saveResult:function(Q){this._result=Q;
}},members:{_addWindowContent:function(J){var O=[[0,k,k,0,false]];
var M=this._tableModel=new qx.ui.table.model.Simple();
M.setColumns([d,h,u,l,g]);
M.setData(O);
M.setColumnEditable(1,true);
M.setColumnEditable(2,true);
M.setColumnSortable(3,true);
var L={tableColumnModel:function(a){return new qx.ui.table.columnmodel.Resize(a);
}};
var P=new qx.ui.table.Table(M,L);
P.set({width:540,height:400,decorator:null,headerCellHeight:null});
P.getSelectionModel().setSelectionMode(qx.ui.table.selection.Model.MULTIPLE_INTERVAL_SELECTION);
var N=P.getTableColumnModel();
N.setDataCellRenderer(0,new qx.ui.table.cellrenderer.Number());
N.setDataCellRenderer(3,new qx.ui.table.cellrenderer.Number());
N.setDataCellRenderer(4,new qx.ui.table.cellrenderer.Boolean());
N.setHeaderCellRenderer(1,new qx.ui.table.headerrenderer.Icon(f,h));
N.setHeaderCellRenderer(3,new qx.ui.table.headerrenderer.Icon(w,l));
N.setHeaderCellRenderer(4,new qx.ui.table.headerrenderer.Icon(p,g));
var K=N.getBehavior();
K.set(1,{width:y,minWidth:60});
K.set(2,{width:x,minWidth:60});
K.setWidth(0,80);
K.setWidth(3,70);
K.setWidth(4,85);
J.setCaption(s);
J.setLayout(new qx.ui.layout.Grow());
J.add(P);
this._loadData(M);
},_loadData:function(F){var H=t;
var G=q+encodeURIComponent(H)+o+v+e;
var I=new qx.io.ScriptLoader();
I.load(G,function(){var C=showcase.page.table.Content._result;
var B=[];
var A=C.query.results.Track;

for(var i=0;i<A.length;i++){var E=[];
E.push(parseInt(A[i].ItemInfo.ChartPosition[c]));
E.push(A[i].title||m);

if(A[i].Artist instanceof Array){var D=m;

for(var j=0;j<A[i].Artist.length;j++){if(j!=0){D+=r;
}D+=A[i].Artist[j].name;
}E.push(D);
}else{E.push(A[i].Artist.name||m);
}E.push(parseInt(A[i].releaseYear));
E.push(A[i].explicit!==b);
B.push(E);
}F.setData(B);
});
}}});
})();
(function(){var g="Integer",f="Escape",d="keypress",c="Enter",b="excluded",a="qx.ui.table.pane.FocusIndicator";
qx.Class.define(a,{extend:qx.ui.container.Composite,construct:function(h){qx.ui.container.Composite.call(this);
this.__ww=h;
this.setKeepActive(true);
this.addListener(d,this._onKeyPress,this);
},properties:{visibility:{refine:true,init:b},row:{check:g,nullable:true},column:{check:g,nullable:true}},members:{__ww:null,_onKeyPress:function(e){var i=e.getKeyIdentifier();

if(i!==f&&i!==c){e.stopPropagation();
}},moveToCell:function(j,k){if(j==null){this.hide();
this.setRow(null);
this.setColumn(null);
}else{var l=this.__ww.getTablePaneModel().getX(j);

if(l==-1){this.hide();
this.setRow(null);
this.setColumn(null);
}else{var q=this.__ww.getTable();
var o=q.getTableColumnModel();
var p=this.__ww.getTablePaneModel();
var n=this.__ww.getTablePane().getFirstVisibleRow();
var m=q.getRowHeight();
this.setUserBounds(p.getColumnLeft(j)-2,(k-n)*m-2,o.getColumnWidth(j)+3,m+3);
this.show();
this.setRow(k);
this.setColumn(j);
}}}},destruct:function(){this.__ww=null;
}});
})();
(function(){var bY="",bX="!",bW="'!",bV="'",bU="Expected '",bT="' (rgb(",bS=",",bR=")), but found value '",bQ="Event (",bP="Expected value to be the CSS color '",dg="' but found ",df="The value '",de=" != ",dd="qx.core.Object",dc="Expected value to be an array but found ",db=") was fired.",da="Expected value to be an integer >= 0 but found ",cY="' to be not equal with '",cX="' to '",cW="qx.ui.core.Widget",cg="Called assertTrue with '",ch="Expected value to be a map but found ",ce="The function did not raise an exception!",cf="Expected value to be undefined but found ",cc="Expected value to be a DOM element but found  '",cd="Expected value to be a regular expression but found ",ca="' to implement the interface '",cb="Expected value to be null but found ",co="Invalid argument 'type'",cp="Called assert with 'false'",cB="Assertion error! ",cx="Expected value to be a string but found ",cJ="null",cE="' but found '",cS="' must must be a key of the map '",cO="The String '",ct="Expected value not to be undefined but found ",cV="qx.util.ColorUtil",cU=": ",cT="The raised exception does not have the expected type! ",cs=") not fired.",cv="qx.core.Assert",cw="Expected value to be typeof object but found ",cz="' (identical) but found '",cC="' must have any of the values defined in the array '",cF="Expected value to be a number but found ",cL="Called assertFalse with '",cQ="]",ci="Expected value to be a qooxdoo object but found ",cj="' arguments.",cu="Expected value not to be null but found ",cI="Array[",cH="' does not match the regular expression '",cG="' to be not identical with '",cN="' arguments but found '",cM="', which cannot be converted to a CSS color!",cD="Expected object '",cK="qx.core.AssertionError",bM="Expected value to be a boolean but found ",cP="))!",ck="Expected value to be a qooxdoo widget but found ",cl="Expected value '%1' to be in the range '%2'..'%3'!",cy="Expected value to be typeof '",bN="Expected value to be typeof function but found ",bO="Expected value to be an integer but found ",cr="Called fail().",cm="The parameter 're' must be a string or a regular expression.",cn="Expected value to be a number >= 0 but found ",cq="Expected value to be instanceof '",cA="Wrong number of arguments given. Expected '",cR="object";
qx.Class.define(cv,{statics:{__sD:true,__sE:function(dw,dx){var dy=bY;

for(var i=1,l=arguments.length;i<l;i++){dy=dy+this.__sF(arguments[i]);
}var dA=cB+dw+cU+dy;

if(this.__sD){qx.Bootstrap.error(dA);
}
if(qx.Class.isDefined(cK)){var dz=new qx.core.AssertionError(dw,dy);

if(this.__sD){qx.Bootstrap.error("Stack trace: \n"+dz.getStackTrace());
}throw dz;
}else{throw new Error(dA);
}},__sF:function(bc){var bd;

if(bc===null){bd=cJ;
}else if(qx.lang.Type.isArray(bc)&&bc.length>10){bd=cI+bc.length+cQ;
}else if((bc instanceof Object)&&(bc.toString==null)){bd=qx.lang.Json.stringify(bc,null,2);
}else{try{bd=bc.toString();
}catch(e){bd=bY;
}}return bd;
},assert:function(dj,dk){dj==true||this.__sE(dk||bY,cp);
},fail:function(F){this.__sE(F||bY,cr);
},assertTrue:function(dD,dE){(dD===true)||this.__sE(dE||bY,cg,dD,bV);
},assertFalse:function(dB,dC){(dB===false)||this.__sE(dC||bY,cL,dB,bV);
},assertEquals:function(t,u,v){t==u||this.__sE(v||bY,bU,t,cE,u,bW);
},assertNotEquals:function(bJ,bK,bL){bJ!=bK||this.__sE(bL||bY,bU,bJ,cY,bK,bW);
},assertIdentical:function(C,D,E){C===D||this.__sE(E||bY,bU,C,cz,D,bW);
},assertNotIdentical:function(bG,bH,bI){bG!==bH||this.__sE(bI||bY,bU,bG,cG,bH,bW);
},assertNotUndefined:function(dO,dP){dO!==undefined||this.__sE(dP||bY,ct,dO,bX);
},assertUndefined:function(bE,bF){bE===undefined||this.__sE(bF||bY,cf,bE,bX);
},assertNotNull:function(bC,bD){bC!==null||this.__sE(bD||bY,cu,bC,bX);
},assertNull:function(J,K){J===null||this.__sE(K||bY,cb,J,bX);
},assertJsonEquals:function(O,P,Q){this.assertEquals(qx.lang.Json.stringify(O),qx.lang.Json.stringify(P),Q);
},assertMatch:function(p,q,r){this.assertString(p);
this.assert(qx.lang.Type.isRegExp(q)||qx.lang.Type.isString(q),cm);
p.search(q)>=0||this.__sE(r||bY,cO,p,cH,q.toString(),bW);
},assertArgumentsCount:function(dF,dG,dH,dI){var dJ=dF.length;
(dJ>=dG&&dJ<=dH)||this.__sE(dI||bY,cA,dG,cX,dH,cN,arguments.length,cj);
},assertEventFired:function(d,event,f,g,h){var k=false;
var j=function(e){if(g){g.call(d,e);
}k=true;
};
var m=d.addListener(event,j,d);
f.call();
k===true||this.__sE(h||bY,bQ,event,cs);
d.removeListenerById(m);
},assertEventNotFired:function(dl,event,dm,dn){var dq=false;
var dp=function(e){dq=true;
};
var dr=dl.addListener(event,dp,dl);
dm.call();
dq===false||this.__sE(dn||bY,bQ,event,db);
dl.removeListenerById(dr);
},assertException:function(W,X,Y,ba){var X=X||Error;
var bb;

try{this.__sD=false;
W();
}catch(be){bb=be;
}finally{this.__sD=true;
}
if(bb==null){this.__sE(ba||bY,ce);
}bb instanceof X||this.__sE(ba||bY,cT,X,de,bb);

if(Y){this.assertMatch(bb.toString(),Y,ba);
}},assertInArray:function(R,S,T){S.indexOf(R)!==-1||this.__sE(T||bY,df,R,cC,S,bV);
},assertArrayEquals:function(bs,bt,bu){this.assertArray(bs,bu);
this.assertArray(bt,bu);
this.assertEquals(bs.length,bt.length,bu);

for(var i=0;i<bs.length;i++){this.assertIdentical(bs[i],bt[i],bu);
}},assertKeyInMap:function(a,b,c){b[a]!==undefined||this.__sE(c||bY,df,a,cS,b,bV);
},assertFunction:function(U,V){qx.lang.Type.isFunction(U)||this.__sE(V||bY,bN,U,bX);
},assertString:function(bo,bp){qx.lang.Type.isString(bo)||this.__sE(bp||bY,cx,bo,bX);
},assertBoolean:function(dU,dV){qx.lang.Type.isBoolean(dU)||this.__sE(dV||bY,bM,dU,bX);
},assertNumber:function(n,o){(qx.lang.Type.isNumber(n)&&isFinite(n))||this.__sE(o||bY,cF,n,bX);
},assertPositiveNumber:function(w,x){(qx.lang.Type.isNumber(w)&&isFinite(w)&&w>=0)||this.__sE(x||bY,cn,w,bX);
},assertInteger:function(bq,br){(qx.lang.Type.isNumber(bq)&&isFinite(bq)&&bq%1===0)||this.__sE(br||bY,bO,bq,bX);
},assertPositiveInteger:function(bi,bj){var bk=(qx.lang.Type.isNumber(bi)&&isFinite(bi)&&bi%1===0&&bi>=0);
bk||this.__sE(bj||bY,da,bi,bX);
},assertInRange:function(dQ,dR,dS,dT){(dQ>=dR&&dQ<=dS)||this.__sE(dT||bY,qx.lang.String.format(cl,[dQ,dR,dS]));
},assertObject:function(bl,bm){var bn=bl!==null&&(qx.lang.Type.isObject(bl)||typeof bl===cR);
bn||this.__sE(bm||bY,cw,(bl),bX);
},assertArray:function(ds,dt){qx.lang.Type.isArray(ds)||this.__sE(dt||bY,dc,ds,bX);
},assertMap:function(A,B){qx.lang.Type.isObject(A)||this.__sE(B||bY,ch,A,bX);
},assertRegExp:function(du,dv){qx.lang.Type.isRegExp(du)||this.__sE(dv||bY,cd,du,bX);
},assertType:function(bf,bg,bh){this.assertString(bg,co);
typeof (bf)===bg||this.__sE(bh||bY,cy,bg,dg,bf,bX);
},assertInstance:function(dK,dL,dM){var dN=dL.classname||dL+bY;
dK instanceof dL||this.__sE(dM||bY,cq,dN,dg,dK,bX);
},assertInterface:function(L,M,N){qx.Class.implementsInterface(L,M)||this.__sE(N||bY,cD,L,ca,M,bW);
},assertCssColor:function(bv,bw,bx){var by=qx.Class.getByName(cV);

if(!by){throw new Error("qx.util.ColorUtil not available! Your code must have a dependency on 'qx.util.ColorUtil'");
}var bA=by.stringToRgb(bv);

try{var bz=by.stringToRgb(bw);
}catch(s){this.__sE(bx||bY,bP,bv,bT,bA.join(bS),bR,bw,cM);
}var bB=bA[0]==bz[0]&&bA[1]==bz[1]&&bA[2]==bz[2];
bB||this.__sE(bx||bY,bP,bA,bT,bA.join(bS),bR,bw,bT,bz.join(bS),cP);
},assertElement:function(dW,dX){!!(dW&&dW.nodeType===1)||this.__sE(dX||bY,cc,dW,bW);
},assertQxObject:function(y,z){this.__sG(y,dd)||this.__sE(z||bY,ci,y,bX);
},assertQxWidget:function(dh,di){this.__sG(dh,cW)||this.__sE(di||bY,ck,dh,bX);
},__sG:function(G,H){if(!G){return false;
}var I=G.constructor;

while(I){if(I.classname===H){return true;
}I=I.superclass;
}return false;
}}});
})();
(function(){var m="",l="Number",k='</div>',j='" ',h="paneUpdated",g='<div>',f="</div>",e="overflow: hidden;",d="qx.event.type.Data",c="paneReloadsData",G="div",F='style="',E="_applyMaxCacheLines",D="qx.ui.table.pane.Pane",C="width: 100%;",B="qx.event.type.Event",A="_applyVisibleRowCount",z='>',w="line-height: ",v="appear",t='class="',u="width:100%;",r="px;",s='<div ',p="'>",q="_applyFirstVisibleRow",n="<div style='",o=";position:relative;";
qx.Class.define(D,{extend:qx.ui.core.Widget,construct:function(J){qx.ui.core.Widget.call(this);
this.__vy=J;
this.__vz=0;
this.__vA=0;
this.__vB=[];
},events:{"paneReloadsData":d,"paneUpdated":B},properties:{firstVisibleRow:{check:l,init:0,apply:q},visibleRowCount:{check:l,init:0,apply:A},maxCacheLines:{check:l,init:1000,apply:E},allowShrinkX:{refine:true,init:false}},members:{__vA:null,__vz:null,__vy:null,__vC:null,__vD:null,__vE:null,__vB:null,__vF:0,_applyFirstVisibleRow:function(bd,be){this.updateContent(false,bd-be);
},_applyVisibleRowCount:function(H,I){this.updateContent(true);
},_getContentHint:function(){return {width:this.getPaneScroller().getTablePaneModel().getTotalWidth(),height:400};
},getPaneScroller:function(){return this.__vy;
},getTable:function(){return this.__vy.getTable();
},setFocusedCell:function(bg,bh,bi){if(bg!=this.__vE||bh!=this.__vD){var bj=this.__vD;
this.__vE=bg;
this.__vD=bh;
if(bh!=bj&&!bi){if(bj!==null){this.updateContent(false,null,bj,true);
}
if(bh!==null){this.updateContent(false,null,bh,true);
}}}},onSelectionChanged:function(){this.updateContent(false,null,null,true);
},onFocusChanged:function(){this.updateContent(false,null,null,true);
},setColumnWidth:function(bS,bT){this.updateContent(true);
},onColOrderChanged:function(){this.updateContent(true);
},onPaneModelChanged:function(){this.updateContent(true);
},onTableModelDataChanged:function(W,X,Y,ba){this.__vG();
var bc=this.getFirstVisibleRow();
var bb=this.getVisibleRowCount();

if(X==-1||X>=bc&&W<bc+bb){this.updateContent();
}},onTableModelMetaDataChanged:function(){this.updateContent(true);
},_applyMaxCacheLines:function(a,b){if(this.__vF>=a&&a!==-1){this.__vG();
}},__vG:function(){this.__vB=[];
this.__vF=0;
},__vH:function(bU,bV,bW){if(!bV&&!bW&&this.__vB[bU]){return this.__vB[bU];
}else{return null;
}},__vI:function(cl,cm,cn,co){var cp=this.getMaxCacheLines();

if(!cn&&!co&&!this.__vB[cl]&&cp>0){this._applyMaxCacheLines(cp);
this.__vB[cl]=cm;
this.__vF+=1;
}},updateContent:function(bO,bP,bQ,bR){if(bO){this.__vG();
}if(bP&&Math.abs(bP)<=Math.min(10,this.getVisibleRowCount())){this._scrollContent(bP);
}else if(bR&&!this.getTable().getAlwaysUpdateCells()){this._updateRowStyles(bQ);
}else{this._updateAllRows();
}},_updateRowStyles:function(cq){var cu=this.getContentElement().getDomElement();

if(!cu||!cu.firstChild){this._updateAllRows();
return;
}var cy=this.getTable();
var cs=cy.getSelectionModel();
var cv=cy.getTableModel();
var cz=cy.getDataRowRenderer();
var ct=cu.firstChild.childNodes;
var cx={table:cy};
var cA=this.getFirstVisibleRow();
var y=0;
var cr=ct.length;

if(cq!=null){var cw=cq-cA;

if(cw>=0&&cw<cr){cA=cq;
y=cw;
cr=cw+1;
}else{return;
}}
for(;y<cr;y++,cA++){cx.row=cA;
cx.selected=cs.isSelectedIndex(cA);
cx.focusedRow=(this.__vD==cA);
cx.rowData=cv.getRowData(cA);
cz.updateDataRowElement(cx,ct[y]);
}},_getRowsHtml:function(bk,bl){var br=this.getTable();
var bu=br.getSelectionModel();
var bo=br.getTableModel();
var bp=br.getTableColumnModel();
var bJ=this.getPaneScroller().getTablePaneModel();
var bz=br.getDataRowRenderer();
bo.prefetchRows(bk,bk+bl-1);
var bG=br.getRowHeight();
var bI=bJ.getColumnCount();
var bq=0;
var bn=[];
for(var x=0;x<bI;x++){var bM=bJ.getColumnAtX(x);
var bt=bp.getColumnWidth(bM);
bn.push({col:bM,xPos:x,editable:bo.isColumnEditable(bM),focusedCol:this.__vE==bM,styleLeft:bq,styleWidth:bt});
bq+=bt;
}var bL=[];
var bN=false;

for(var bs=bk;bs<bk+bl;bs++){var bv=bu.isSelectedIndex(bs);
var by=(this.__vD==bs);
var bD=this.__vH(bs,bv,by);

if(bD){bL.push(bD);
continue;
}var bm=[];
var bF={table:br};
bF.styleHeight=bG;
bF.row=bs;
bF.selected=bv;
bF.focusedRow=by;
bF.rowData=bo.getRowData(bs);

if(!bF.rowData){bN=true;
}bm.push(s);
var bC=bz.getRowAttributes(bF);

if(bC){bm.push(bC);
}var bB=bz.getRowClass(bF);

if(bB){bm.push(t,bB,j);
}var bA=bz.createRowStyle(bF);
bA+=o+bz.getRowHeightStyle(bG)+u;

if(bA){bm.push(F,bA,j);
}bm.push(z);
var bK=false;

for(x=0;x<bI&&!bK;x++){var bw=bn[x];

for(var bH in bw){bF[bH]=bw[bH];
}var bM=bF.col;
bF.value=bo.getValue(bM,bs);
var bx=bp.getDataCellRenderer(bM);
bF.style=bx.getDefaultCellStyle();
bK=bx.createDataCellHtml(bF,bm)||false;
}bm.push(k);
var bE=bm.join(m);
this.__vI(bs,bE,bv,by);
bL.push(bE);
}this.fireDataEvent(c,bN);
return bL.join(m);
},_scrollContent:function(bX){var bY=this.getContentElement().getDomElement();

if(!(bY&&bY.firstChild)){this._updateAllRows();
return;
}var ci=bY.firstChild;
var ca=ci.childNodes;
var cg=this.getVisibleRowCount();
var cf=this.getFirstVisibleRow();
var cd=this.getTable().getTableModel();
var cj=0;
cj=cd.getRowCount();
if(cf+cg>cj){this._updateAllRows();
return;
}var ck=bX<0?cg+bX:0;
var cb=bX<0?0:cg-bX;

for(i=Math.abs(bX)-1;i>=0;i--){var ce=ca[ck];

try{ci.removeChild(ce);
}catch(bf){break;
}}if(!this.__vC){this.__vC=document.createElement(G);
}var ch=g;
ch+=this._getRowsHtml(cf+cb,Math.abs(bX));
ch+=k;
this.__vC.innerHTML=ch;
var cc=this.__vC.firstChild.childNodes;
if(bX>0){for(var i=cc.length-1;i>=0;i--){var ce=cc[0];
ci.appendChild(ce);
}}else{for(var i=cc.length-1;i>=0;i--){var ce=cc[cc.length-1];
ci.insertBefore(ce,ci.firstChild);
}}if(this.__vD!==null){this._updateRowStyles(this.__vD-bX);
this._updateRowStyles(this.__vD);
}this.fireEvent(h);
},_updateAllRows:function(){var N=this.getContentElement().getDomElement();

if(!N){this.addListenerOnce(v,arguments.callee,this);
return;
}var T=this.getTable();
var Q=T.getTableModel();
var S=this.getPaneScroller().getTablePaneModel();
var R=S.getColumnCount();
var K=T.getRowHeight();
var O=this.getFirstVisibleRow();
var L=this.getVisibleRowCount();
var U=Q.getRowCount();

if(O+L>U){L=Math.max(0,U-O);
}var M=S.getTotalWidth();
var P;
if(L>0){P=[n,C,(T.getForceLineHeight()?w+K+r:m),e,p,this._getRowsHtml(O,L),f];
}else{P=[];
}var V=P.join(m);
N.innerHTML=V;
this.setWidth(M);
this.__vz=R;
this.__vA=L;
this.fireEvent(h);
}},destruct:function(){this.__vC=this.__vy=this.__vB=null;
}});
})();
(function(){var h="auto",g="string",f="number",e="*",d="qx.ui.core.ColumnData";
qx.Class.define(d,{extend:qx.ui.core.LayoutItem,construct:function(){qx.ui.core.LayoutItem.call(this);
this.setColumnWidth(h);
},members:{__wQ:null,renderLayout:function(a,top,b,c){this.__wQ=b;
},getComputedWidth:function(){return this.__wQ;
},getFlex:function(){return this.getLayoutProperties().flex||0;
},setColumnWidth:function(i,j){var j=j||0;
var k=null;

if(typeof i==f){this.setWidth(i);
}else if(typeof i==g){if(i==h){j=1;
}else{var l=i.match(/^[0-9]+(?:\.[0-9]+)?([%\*])$/);

if(l){if(l[1]==e){j=parseFloat(i);
}else{k=i;
}}}}this.setLayoutProperties({flex:j,width:k});
}},settings:{"qx.tableResizeDebug":false}});
})();
(function(){var c="qx.ui.table.columnmodel.resizebehavior.Abstract",b="abstract";
qx.Class.define(c,{type:b,extend:qx.core.Object,members:{_setNumColumns:function(d){throw new Error("_setNumColumns is abstract");
},onAppear:function(event,a){throw new Error("onAppear is abstract");
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
(function(){var k="Function",j="Boolean",h="minWidth",g="width",f="qx.ui.table.columnmodel.Resize",e="qx.ui.table.columnmodel.resizebehavior.Default",d="__wS",c="__wT",b="maxWidth";
qx.Class.define(e,{extend:qx.ui.table.columnmodel.resizebehavior.Abstract,construct:function(){qx.ui.table.columnmodel.resizebehavior.Abstract.call(this);
this.__wR=[];
this.__wS=new qx.ui.layout.HBox();
this.__wS.connectToWidget(this);
this.__wT=new qx.util.DeferredCall(this._computeColumnsFlexWidth,this);
},properties:{newResizeBehaviorColumnData:{check:k,init:function(x){return new qx.ui.core.ColumnData();
}},initializeWidthsOnEveryAppear:{check:j,init:false},tableColumnModel:{check:f}},members:{__wS:null,__wU:null,__wR:null,__wT:null,__wV:false,setWidth:function(C,D,E){if(C>=this.__wR.length){throw new Error("Column number out of range");
}this.__wR[C].setColumnWidth(D,E);
this.__wT.schedule();
},setMinWidth:function(A,B){if(A>=this.__wR.length){throw new Error("Column number out of range");
}this.__wR[A].setMinWidth(B);
this.__wT.schedule();
},setMaxWidth:function(y,z){if(y>=this.__wR.length){throw new Error("Column number out of range");
}this.__wR[y].setMaxWidth(z);
this.__wT.schedule();
},set:function(F,G){for(var H in G){switch(H){case g:this.setWidth(F,G[H]);
break;
case h:this.setMinWidth(F,G[H]);
break;
case b:this.setMaxWidth(F,G[H]);
break;
default:throw new Error("Unknown property: "+H);
}}},onAppear:function(event,m){if(m===true||!this.__wV||this.getInitializeWidthsOnEveryAppear()){this._computeColumnsFlexWidth();
this.__wV=true;
}},onTableWidthChanged:function(event){this._computeColumnsFlexWidth();
},onVerticalScrollBarChanged:function(event){this._computeColumnsFlexWidth();
},onColumnWidthChanged:function(event){this._extendNextColumn(event);
},onVisibilityChanged:function(event){var a=event.getData();
if(a.visible){this._computeColumnsFlexWidth();
return;
}this._extendLastColumn(event);
},_setNumColumns:function(v){var w=this.__wR;
if(v<=w.length){w.splice(v,w.length);
return;
}for(var i=w.length;i<v;i++){w[i]=this.getNewResizeBehaviorColumnData()();
w[i].columnNumber=i;
}},getLayoutChildren:function(){return this.__wU;
},_computeColumnsFlexWidth:function(){this.__wT.cancel();
var s=this._getAvailableWidth();

if(s===null){return;
}var o=this.getTableColumnModel();
var q=o.getVisibleColumns();
var r=q.length;
var p=this.__wR;
var i,l;

if(r===0){return;
}var u=[];

for(i=0;i<r;i++){u.push(p[q[i]]);
}this.__wU=u;
this.__wW();
this.__wS.renderLayout(s,100);
for(i=0,l=u.length;i<l;i++){var t=u[i].getComputedWidth();
o.setColumnWidth(q[i],t);
}},__wW:function(){this.__wS.invalidateChildrenCache();
var n=this.__wU;

for(var i=0,l=n.length;i<l;i++){n[i].invalidateLayoutCache();
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
}},_getResizeColumnData:function(){return this.__wR;
}},destruct:function(){this.__wR=this.__wU=null;
this._disposeObjects(d,c);
}});
})();
(function(){var W="qx.event.type.Data",V="visibilityChanged",U="orderChanged",T="visibilityChangedPre",S="__vi",R="__vk",Q="widthChanged",P="qx.ui.table.columnmodel.Basic",O="__vj";
qx.Class.define(P,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__vd=[];
this.__ve=[];
},events:{"widthChanged":W,"visibilityChangedPre":W,"visibilityChanged":W,"orderChanged":W},statics:{DEFAULT_WIDTH:100,DEFAULT_HEADER_RENDERER:qx.ui.table.headerrenderer.Default,DEFAULT_DATA_RENDERER:qx.ui.table.cellrenderer.Default,DEFAULT_EDITOR_FACTORY:qx.ui.table.celleditor.TextField},members:{__vf:null,__vg:null,__ve:null,__vd:null,__vh:null,__vi:null,__vj:null,__vk:null,init:function(D){{};
this.__vh=[];
var G=qx.ui.table.columnmodel.Basic.DEFAULT_WIDTH;
var H=this.__vi||(this.__vi=new qx.ui.table.columnmodel.Basic.DEFAULT_HEADER_RENDERER());
var F=this.__vj||(this.__vj=new qx.ui.table.columnmodel.Basic.DEFAULT_DATA_RENDERER());
var E=this.__vk||(this.__vk=new qx.ui.table.columnmodel.Basic.DEFAULT_EDITOR_FACTORY());
this.__vd=[];
this.__ve=[];

for(var J=0;J<D;J++){this.__vh[J]={width:G,headerRenderer:H,dataRenderer:F,editorFactory:E};
this.__vd[J]=J;
this.__ve[J]=J;
}this.__vg=null;

for(var J=0;J<D;J++){var I={col:J,visible:true};
this.fireDataEvent(T,I);
this.fireDataEvent(V,I);
}},getVisibleColumns:function(){return this.__ve!=null?this.__ve:[];
},setColumnWidth:function(e,f){{};
var h=this.__vh[e].width;

if(h!=f){this.__vh[e].width=f;
var g={col:e,newWidth:f,oldWidth:h};
this.fireDataEvent(Q,g);
}},getColumnWidth:function(ba){{};
return this.__vh[ba].width;
},setHeaderCellRenderer:function(y,z){{};
var A=this.__vh[y].headerRenderer;

if(A!==this.__vi){A.dispose();
}this.__vh[y].headerRenderer=z;
},getHeaderCellRenderer:function(X){{};
return this.__vh[X].headerRenderer;
},setDataCellRenderer:function(K,L){{};
var M=this.__vh[K].dataRenderer;

if(M!==this.__vj){M.dispose();
}this.__vh[K].dataRenderer=L;
},getDataCellRenderer:function(w){{};
return this.__vh[w].dataRenderer;
},setCellEditorFactory:function(a,b){{};
var c=this.__vh[a].headerRenderer;

if(c!==this.__vk){c.dispose();
}this.__vh[a].editorFactory=b;
},getCellEditorFactory:function(q){{};
return this.__vh[q].editorFactory;
},_getColToXPosMap:function(){if(this.__vg==null){this.__vg={};

for(var p=0;p<this.__vd.length;p++){var o=this.__vd[p];
this.__vg[o]={overX:p};
}
for(var n=0;n<this.__ve.length;n++){var o=this.__ve[n];
this.__vg[o].visX=n;
}}return this.__vg;
},getVisibleColumnCount:function(){return this.__ve!=null?this.__ve.length:0;
},getVisibleColumnAtX:function(d){{};
return this.__ve[d];
},getVisibleX:function(Y){{};
return this._getColToXPosMap()[Y].visX;
},getOverallColumnCount:function(){return this.__vd.length;
},getOverallColumnAtX:function(C){{};
return this.__vd[C];
},getOverallX:function(B){{};
return this._getColToXPosMap()[B].overX;
},isColumnVisible:function(N){{};
return (this._getColToXPosMap()[N].visX!=null);
},setColumnVisible:function(bb,bc){{};

if(bc!=this.isColumnVisible(bb)){if(bc){var bi=this._getColToXPosMap();
var bf=bi[bb].overX;

if(bf==null){throw new Error("Showing column failed: "+bb+". The column is not added to this TablePaneModel.");
}var bg;

for(var x=bf+1;x<this.__vd.length;x++){var bh=this.__vd[x];
var bd=bi[bh].visX;

if(bd!=null){bg=bd;
break;
}}if(bg==null){bg=this.__ve.length;
}this.__ve.splice(bg,0,bb);
}else{var be=this.getVisibleX(bb);
this.__ve.splice(be,1);
}this.__vg=null;
if(!this.__vf){var bj={col:bb,visible:bc};
this.fireDataEvent(T,bj);
this.fireDataEvent(V,bj);
}}},moveColumn:function(r,s){{};
this.__vf=true;
var v=this.__vd[r];
var t=this.isColumnVisible(v);

if(t){this.setColumnVisible(v,false);
}this.__vd.splice(r,1);
this.__vd.splice(s,0,v);
this.__vg=null;

if(t){this.setColumnVisible(v,true);
}this.__vf=false;
var u={col:v,fromOverXPos:r,toOverXPos:s};
this.fireDataEvent(U,u);
},setColumnsOrder:function(j){{};

if(j.length==this.__vd.length){this.__vf=true;
var m=new Array(j.length);

for(var k=0;k<this.__vd.length;k++){var l=this.isColumnVisible(k);
m[k]=l;

if(l){this.setColumnVisible(k,false);
}}this.__vd=qx.lang.Array.clone(j);
this.__vg=null;
for(var k=0;k<this.__vd.length;k++){if(m[k]){this.setColumnVisible(k,true);
}}this.__vf=false;
this.fireDataEvent(U);
}else{throw new Error("setColumnsOrder: Invalid number of column positions given, expected "+this.__vd.length+", got "+j.length);
}}},destruct:function(){for(var i=0;i<this.__vh.length;i++){this.__vh[i].headerRenderer.dispose();
this.__vh[i].dataRenderer.dispose();
this.__vh[i].editorFactory.dispose();
}this.__vd=this.__ve=this.__vh=this.__vg=null;
this._disposeObjects(S,O,R);
}});
})();
(function(){var b="qx.ui.table.selection.Model",a="qx.ui.table.selection.Manager";
qx.Class.define(a,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
},properties:{selectionModel:{check:b}},members:{__vb:null,handleMouseDown:function(i,j){if(j.isLeftPressed()){var k=this.getSelectionModel();

if(!k.isSelectedIndex(i)){this._handleSelectEvent(i,j);
this.__vb=true;
}else{this.__vb=false;
}}else if(j.isRightPressed()&&j.getModifiers()==0){var k=this.getSelectionModel();

if(!k.isSelectedIndex(i)){k.setSelectionInterval(i,i);
}}},handleMouseUp:function(s,t){if(t.isLeftPressed()&&!this.__vb){this._handleSelectEvent(s,t);
}},handleClick:function(q,r){},handleSelectKeyDown:function(c,d){this._handleSelectEvent(c,d);
},handleMoveKeyDown:function(e,f){var h=this.getSelectionModel();

switch(f.getModifiers()){case 0:h.setSelectionInterval(e,e);
break;
case qx.event.type.Dom.SHIFT_MASK:var g=h.getAnchorSelectionIndex();

if(g==-1){h.setSelectionInterval(e,e);
}else{h.setSelectionInterval(g,e);
}break;
}},_handleSelectEvent:function(l,m){var p=this.getSelectionModel();
var n=p.getLeadSelectionIndex();
var o=p.getAnchorSelectionIndex();

if(m.isShiftPressed()){if(l!=n||p.isSelectionEmpty()){if(o==-1){o=l;
}
if(m.isCtrlOrCommandPressed()){p.addSelectionInterval(o,l);
}else{p.setSelectionInterval(o,l);
}}}else if(m.isCtrlOrCommandPressed()){if(p.isSelectedIndex(l)){p.removeSelectionInterval(l,l);
}else{p.addSelectionInterval(l,l);
}}else{p.setSelectionInterval(l,l);
}}}});
})();
(function(){var a="qx.ui.table.pane.Clipper";
qx.Class.define(a,{extend:qx.ui.container.Composite,construct:function(){qx.ui.container.Composite.call(this,new qx.ui.layout.Grow());
this.setMinWidth(0);
},members:{scrollToX:function(b){this.getContentElement().scrollToX(b,false);
},scrollToY:function(c){this.getContentElement().scrollToY(c,true);
}}});
})();
(function(){var p='',o='"',m=':',l=']',h='null',g=': ',f='object',e='function',d=',',b='\n',ba='\\u',Y=',\n',X='0000',W='string',V="Cannot stringify a recursive object.",U='0',T='-',S='}',R='String',Q='Boolean',x='\\\\',y='\\f',u='\\t',w='{\n',s='[]',t="qx.lang.JsonImpl",q='Z',r='\\n',z='Object',A='{}',H='@',F='.',K='(',J='Array',M='T',L='\\r',C='{',P='JSON.parse',O=' ',N='[',B='Number',D=')',E='[\n',G='\\"',I='\\b';
qx.Class.define(t,{extend:Object,construct:function(){this.stringify=qx.lang.Function.bind(this.stringify,this);
this.parse=qx.lang.Function.bind(this.parse,this);
},members:{__sJ:null,__sK:null,__sL:null,__sM:null,stringify:function(br,bs,bt){this.__sJ=p;
this.__sK=p;
this.__sM=[];

if(qx.lang.Type.isNumber(bt)){var bt=Math.min(10,Math.floor(bt));

for(var i=0;i<bt;i+=1){this.__sK+=O;
}}else if(qx.lang.Type.isString(bt)){if(bt.length>10){bt=bt.slice(0,10);
}this.__sK=bt;
}if(bs&&(qx.lang.Type.isFunction(bs)||qx.lang.Type.isArray(bs))){this.__sL=bs;
}else{this.__sL=null;
}return this.__sN(p,{'':br});
},__sN:function(bl,bm){var bp=this.__sJ,bn,bq=bm[bl];
if(bq&&qx.lang.Type.isFunction(bq.toJSON)){bq=bq.toJSON(bl);
}else if(qx.lang.Type.isDate(bq)){bq=this.dateToJSON(bq);
}if(typeof this.__sL===e){bq=this.__sL.call(bm,bl,bq);
}
if(bq===null){return h;
}
if(bq===undefined){return undefined;
}switch(qx.lang.Type.getClass(bq)){case R:return this.__sO(bq);
case B:return isFinite(bq)?String(bq):h;
case Q:return String(bq);
case J:this.__sJ+=this.__sK;
bn=[];

if(this.__sM.indexOf(bq)!==-1){throw new TypeError(V);
}this.__sM.push(bq);
var length=bq.length;

for(var i=0;i<length;i+=1){bn[i]=this.__sN(i,bq)||h;
}this.__sM.pop();
if(bn.length===0){var bo=s;
}else if(this.__sJ){bo=E+this.__sJ+bn.join(Y+this.__sJ)+b+bp+l;
}else{bo=N+bn.join(d)+l;
}this.__sJ=bp;
return bo;
case z:this.__sJ+=this.__sK;
bn=[];

if(this.__sM.indexOf(bq)!==-1){throw new TypeError(V);
}this.__sM.push(bq);
if(this.__sL&&typeof this.__sL===f){var length=this.__sL.length;

for(var i=0;i<length;i+=1){var k=this.__sL[i];

if(typeof k===W){var v=this.__sN(k,bq);

if(v){bn.push(this.__sO(k)+(this.__sJ?g:m)+v);
}}}}else{for(var k in bq){if(Object.hasOwnProperty.call(bq,k)){var v=this.__sN(k,bq);

if(v){bn.push(this.__sO(k)+(this.__sJ?g:m)+v);
}}}}this.__sM.pop();
if(bn.length===0){var bo=A;
}else if(this.__sJ){bo=w+this.__sJ+bn.join(Y+this.__sJ)+b+bp+S;
}else{bo=C+bn.join(d)+S;
}this.__sJ=bp;
return bo;
}},dateToJSON:function(be){var bf=function(n){return n<10?U+n:n;
};
var bg=function(n){var bk=bf(n);
return n<100?U+bk:bk;
};
return isFinite(be.valueOf())?be.getUTCFullYear()+T+bf(be.getUTCMonth()+1)+T+bf(be.getUTCDate())+M+bf(be.getUTCHours())+m+bf(be.getUTCMinutes())+m+bf(be.getUTCSeconds())+F+bg(be.getUTCMilliseconds())+q:null;
},__sO:function(bb){var bc={'\b':I,'\t':u,'\n':r,'\f':y,'\r':L,'"':G,'\\':x};
var bd=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
bd.lastIndex=0;

if(bd.test(bb)){return o+
bb.replace(bd,function(a){var c=bc[a];
return typeof c===W?c:ba+(X+a.charCodeAt(0).toString(16)).slice(-4);
})+o;
}else{return o+bb+o;
}},parse:function(bh,bi){var bj=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
bj.lastIndex=0;
if(bj.test(bh)){bh=bh.replace(bj,function(a){return ba+(X+a.charCodeAt(0).toString(16)).slice(-4);
});
}if(/^[\],:{}\s]*$/.test(bh.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,H).replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,l).replace(/(?:^|:|,)(?:\s*\[)+/g,p))){var j=eval(K+bh+D);
return typeof bi===e?this.__sP({'':j},p,bi):j;
}throw new SyntaxError(P);
},__sP:function(bu,bv,bw){var bx=bu[bv];

if(bx&&typeof bx===f){for(var k in bx){if(Object.hasOwnProperty.call(bx,k)){var v=this.__sP(bx,k,bw);

if(v!==undefined){bx[k]=v;
}else{delete bx[k];
}}}}return bw.call(bu,bv,bx);
}}});
})();
(function(){var a="qx.lang.Json";
qx.Class.define(a,{statics:{JSON:(qx.lang.Type.getClass(window.JSON)=="JSON"&&JSON.parse('{"x":1}').x===1)?window.JSON:new qx.lang.JsonImpl(),stringify:null,parse:null},defer:function(b){b.stringify=b.JSON.stringify;
b.parse=b.JSON.parse;
}});
})();
(function(){var m="..",l="changeSelection",k="_applySelectionMode",h="]",g="qx.event.type.Event",f="Ranges:",d="qx.ui.table.selection.Model",c=" [";
qx.Class.define(d,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__uQ=[];
this.__uR=-1;
this.__uS=-1;
this.hasBatchModeRefCount=0;
this.__uT=false;
},events:{"changeSelection":g},statics:{NO_SELECTION:1,SINGLE_SELECTION:2,SINGLE_INTERVAL_SELECTION:3,MULTIPLE_INTERVAL_SELECTION:4,MULTIPLE_INTERVAL_SELECTION_TOGGLE:5},properties:{selectionMode:{init:2,check:[1,2,3,4,5],apply:k}},members:{__uT:null,__uR:null,__uS:null,__uQ:null,_applySelectionMode:function(I){this.resetSelection();
},setBatchMode:function(R){if(R){this.hasBatchModeRefCount+=1;
}else{if(this.hasBatchModeRefCount==0){throw new Error("Try to turn off batch mode althoug it was not turned on.");
}this.hasBatchModeRefCount-=1;

if(this.__uT){this.__uT=false;
this._fireChangeSelection();
}}return this.hasBatchMode();
},hasBatchMode:function(){return this.hasBatchModeRefCount>0;
},getAnchorSelectionIndex:function(){return this.__uR;
},_setAnchorSelectionIndex:function(S){this.__uR=S;
},getLeadSelectionIndex:function(){return this.__uS;
},_setLeadSelectionIndex:function(B){this.__uS=B;
},_getSelectedRangeArr:function(){return this.__uQ;
},resetSelection:function(){if(!this.isSelectionEmpty()){this._resetSelection();
this._fireChangeSelection();
}},isSelectionEmpty:function(){return this.__uQ.length==0;
},getSelectedCount:function(){var b=0;

for(var i=0;i<this.__uQ.length;i++){var a=this.__uQ[i];
b+=a.maxIndex-a.minIndex+1;
}return b;
},isSelectedIndex:function(q){for(var i=0;i<this.__uQ.length;i++){var r=this.__uQ[i];

if(q>=r.minIndex&&q<=r.maxIndex){return true;
}}return false;
},getSelectedRanges:function(){var E=[];

for(var i=0;i<this.__uQ.length;i++){E.push({minIndex:this.__uQ[i].minIndex,maxIndex:this.__uQ[i].maxIndex});
}return E;
},iterateSelection:function(z,A){for(var i=0;i<this.__uQ.length;i++){for(var j=this.__uQ[i].minIndex;j<=this.__uQ[i].maxIndex;j++){z.call(A,j);
}}},setSelectionInterval:function(n,o){var p=this.self(arguments);

switch(this.getSelectionMode()){case p.NO_SELECTION:return;
case p.SINGLE_SELECTION:if(this.isSelectedIndex(o)){return;
}n=o;
break;
case p.MULTIPLE_INTERVAL_SELECTION_TOGGLE:this.setBatchMode(true);

try{for(var i=n;i<=o;i++){if(!this.isSelectedIndex(i)){this._addSelectionInterval(i,i);
}else{this.removeSelectionInterval(i,i);
}}}catch(e){throw e;
}finally{this.setBatchMode(false);
}this._fireChangeSelection();
return;
}this._resetSelection();
this._addSelectionInterval(n,o);
this._fireChangeSelection();
},addSelectionInterval:function(F,G){var H=qx.ui.table.selection.Model;

switch(this.getSelectionMode()){case H.NO_SELECTION:return;
case H.MULTIPLE_INTERVAL_SELECTION:case H.MULTIPLE_INTERVAL_SELECTION_TOGGLE:this._addSelectionInterval(F,G);
this._fireChangeSelection();
break;
default:this.setSelectionInterval(F,G);
break;
}},removeSelectionInterval:function(J,K){this.__uR=J;
this.__uS=K;
var L=Math.min(J,K);
var N=Math.max(J,K);
for(var i=0;i<this.__uQ.length;i++){var P=this.__uQ[i];

if(P.minIndex>N){break;
}else if(P.maxIndex>=L){var Q=(P.minIndex>=L)&&(P.minIndex<=N);
var O=(P.maxIndex>=L)&&(P.maxIndex<=N);

if(Q&&O){this.__uQ.splice(i,1);
i--;
}else if(Q){P.minIndex=N+1;
}else if(O){P.maxIndex=L-1;
}else{var M={minIndex:N+1,maxIndex:P.maxIndex};
this.__uQ.splice(i+1,0,M);
P.maxIndex=L-1;
break;
}}}this._fireChangeSelection();
},_resetSelection:function(){this.__uQ=[];
this.__uR=-1;
this.__uS=-1;
},_addSelectionInterval:function(s,t){this.__uR=s;
this.__uS=t;
var u=Math.min(s,t);
var w=Math.max(s,t);
var v=0;

for(;v<this.__uQ.length;v++){var x=this.__uQ[v];

if(x.minIndex>u){break;
}}this.__uQ.splice(v,0,{minIndex:u,maxIndex:w});
var y=this.__uQ[0];

for(var i=1;i<this.__uQ.length;i++){var x=this.__uQ[i];

if(y.maxIndex+1>=x.minIndex){y.maxIndex=Math.max(y.maxIndex,x.maxIndex);
this.__uQ.splice(i,1);
i--;
}else{y=x;
}}},_dumpRanges:function(){var C=f;

for(var i=0;i<this.__uQ.length;i++){var D=this.__uQ[i];
C+=c+D.minIndex+m+D.maxIndex+h;
}this.debug(C);
},_fireChangeSelection:function(){if(this.hasBatchMode()){this.__uT=true;
}else{this.fireEvent(l);
}}},destruct:function(){this.__uQ=null;
}});
})();
(function(){var n="appear",m="columnVisibilityMenuCreateEnd",l="tableWidthChanged",k="verticalScrollBarChanged",j="qx.ui.table.columnmodel.resizebehavior.Abstract",i="qx.ui.table.columnmodel.Resize",h="_applyBehavior",g="separator",f="visibilityChanged",e="Reset column widths",b="changeBehavior",d="user-button",c="widthChanged",a="execute";
qx.Class.define(i,{extend:qx.ui.table.columnmodel.Basic,include:qx.locale.MTranslation,construct:function(){qx.ui.table.columnmodel.Basic.call(this);
this.__wN=false;
this.__wO=false;
},properties:{behavior:{check:j,init:null,nullable:true,apply:h,event:b}},members:{__wO:null,__wN:null,__wP:null,_applyBehavior:function(u,v){if(v!=null){v.dispose();
v=null;
}u._setNumColumns(this.getOverallColumnCount());
u.setTableColumnModel(this);
},init:function(p,q){qx.ui.table.columnmodel.Basic.prototype.init.call(this,p);

if(this.__wP==null){this.__wP=q;
q.addListener(n,this._onappear,this);
q.addListener(l,this._onTableWidthChanged,this);
q.addListener(k,this._onverticalscrollbarchanged,this);
q.addListener(m,this._addResetColumnWidthButton,this);
this.addListener(c,this._oncolumnwidthchanged,this);
this.addListener(f,this._onvisibilitychanged,this);
}if(this.getBehavior()==null){this.setBehavior(new qx.ui.table.columnmodel.resizebehavior.Default());
}this.getBehavior()._setNumColumns(p);
},getTable:function(){return this.__wP;
},_addResetColumnWidthButton:function(event){var t=event.getData();
var s=t.columnButton;
var r=t.menu;
var o;
o=s.factory(g);
r.add(o);
o=s.factory(d,{text:this.tr(e)});
r.add(o);
o.addListener(a,this._onappear,this);
},_onappear:function(event){if(this.__wN){return ;
}this.__wN=true;
{};
this.getBehavior().onAppear(event,event.getType()!==n);
this.__wP._updateScrollerWidths();
this.__wP._updateScrollBarVisibility();
this.__wN=false;
this.__wO=true;
},_onTableWidthChanged:function(event){if(this.__wN||!this.__wO){return ;
}this.__wN=true;
{};
this.getBehavior().onTableWidthChanged(event);
this.__wN=false;
},_onverticalscrollbarchanged:function(event){if(this.__wN||!this.__wO){return ;
}this.__wN=true;
{};
this.getBehavior().onVerticalScrollBarChanged(event);
qx.event.Timer.once(function(){if(this.__wP&&!this.__wP.isDisposed()){this.__wP._updateScrollerWidths();
this.__wP._updateScrollBarVisibility();
}},this,0);
this.__wN=false;
},_oncolumnwidthchanged:function(event){if(this.__wN||!this.__wO){return ;
}this.__wN=true;
{};
this.getBehavior().onColumnWidthChanged(event);
this.__wN=false;
},_onvisibilitychanged:function(event){if(this.__wN||!this.__wO){return ;
}this.__wN=true;
{};
this.getBehavior().onVisibilityChanged(event);
this.__wN=false;
}},destruct:function(){this.__wP=null;
}});
})();
(function(){var B="metaDataChanged",A="qx.event.type.Data",z="qx.event.type.Event",y="abstract",x="qx.ui.table.model.Abstract";
qx.Class.define(x,{type:y,extend:qx.core.Object,implement:qx.ui.table.ITableModel,events:{"dataChanged":A,"metaDataChanged":z,"sorted":A},construct:function(){qx.core.Object.call(this);
this.__uz=[];
this.__uA=[];
this.__uB={};
},members:{__uz:null,__uA:null,__uB:null,__uC:null,init:function(E){},getRowCount:function(){throw new Error("getRowCount is abstract");
},getRowData:function(h){return null;
},isColumnEditable:function(e){return false;
},isColumnSortable:function(D){return false;
},sortByColumn:function(f,g){},getSortColumnIndex:function(){return -1;
},isSortAscending:function(){return true;
},prefetchRows:function(a,b){},getValue:function(v,w){throw new Error("getValue is abstract");
},getValueById:function(c,d){return this.getValue(this.getColumnIndexById(c),d);
},setValue:function(q,r,s){throw new Error("setValue is abstract");
},setValueById:function(m,n,o){this.setValue(this.getColumnIndexById(m),n,o);
},getColumnCount:function(){return this.__uz.length;
},getColumnIndexById:function(F){return this.__uB[F];
},getColumnId:function(p){return this.__uz[p];
},getColumnName:function(t){return this.__uA[t];
},setColumnIds:function(u){this.__uz=u;
this.__uB={};

for(var i=0;i<u.length;i++){this.__uB[u[i]]=i;
}this.__uA=new Array(u.length);
if(!this.__uC){this.fireEvent(B);
}},setColumnNamesByIndex:function(C){if(this.__uz.length!=C.length){throw new Error("this.__columnIdArr and columnNameArr have different length: "+this.__uz.length+" != "+C.length);
}this.__uA=C;
this.fireEvent(B);
},setColumnNamesById:function(G){this.__uA=new Array(this.__uz.length);

for(var i=0;i<this.__uz.length;++i){this.__uA[i]=G[this.__uz[i]];
}},setColumns:function(j,k){var l=this.__uz.length==0||k;

if(k==null){if(this.__uz.length==0){k=j;
}else{k=this.__uz;
}}
if(k.length!=j.length){throw new Error("columnIdArr and columnNameArr have different length: "+k.length+" != "+j.length);
}
if(l){this.__uC=true;
this.setColumnIds(k);
this.__uC=false;
}this.setColumnNamesByIndex(j);
}},destruct:function(){this.__uz=this.__uA=this.__uB=null;
}});
})();
(function(){var bJ="dataChanged",bI="metaDataChanged",bH="qx.ui.table.model.Simple",bG="Boolean",bF="sorted";
qx.Class.define(bH,{extend:qx.ui.table.model.Abstract,construct:function(){qx.ui.table.model.Abstract.call(this);
this.__wz=[];
this.__wA=-1;
this.__wB=[];
this.__wC=null;
},properties:{caseSensitiveSorting:{check:bG,init:true}},statics:{_defaultSortComparatorAscending:function(W,X){var Y=W[arguments.callee.columnIndex];
var ba=X[arguments.callee.columnIndex];

if(qx.lang.Type.isNumber(Y)&&qx.lang.Type.isNumber(ba)){var bb=isNaN(Y)?isNaN(ba)?0:1:isNaN(ba)?-1:null;

if(bb!=null){return bb;
}}return (Y>ba)?1:((Y==ba)?0:-1);
},_defaultSortComparatorInsensitiveAscending:function(F,G){var H=(F[arguments.callee.columnIndex].toLowerCase?F[arguments.callee.columnIndex].toLowerCase():F[arguments.callee.columnIndex]);
var I=(G[arguments.callee.columnIndex].toLowerCase?G[arguments.callee.columnIndex].toLowerCase():G[arguments.callee.columnIndex]);

if(qx.lang.Type.isNumber(H)&&qx.lang.Type.isNumber(I)){var J=isNaN(H)?isNaN(I)?0:1:isNaN(I)?-1:null;

if(J!=null){return J;
}}return (H>I)?1:((H==I)?0:-1);
},_defaultSortComparatorDescending:function(a,b){var c=a[arguments.callee.columnIndex];
var d=b[arguments.callee.columnIndex];

if(qx.lang.Type.isNumber(c)&&qx.lang.Type.isNumber(d)){var e=isNaN(c)?isNaN(d)?0:1:isNaN(d)?-1:null;

if(e!=null){return e;
}}return (c<d)?1:((c==d)?0:-1);
},_defaultSortComparatorInsensitiveDescending:function(bu,bv){var bw=(bu[arguments.callee.columnIndex].toLowerCase?bu[arguments.callee.columnIndex].toLowerCase():bu[arguments.callee.columnIndex]);
var bx=(bv[arguments.callee.columnIndex].toLowerCase?bv[arguments.callee.columnIndex].toLowerCase():bv[arguments.callee.columnIndex]);

if(qx.lang.Type.isNumber(bw)&&qx.lang.Type.isNumber(bx)){var by=isNaN(bw)?isNaN(bx)?0:1:isNaN(bx)?-1:null;

if(by!=null){return by;
}}return (bw<bx)?1:((bw==bx)?0:-1);
}},members:{__wz:null,__wC:null,__wD:null,__wB:null,__wA:null,__wE:null,getRowData:function(bm){var bn=this.__wz[bm];

if(bn==null||bn.originalData==null){return bn;
}else{return bn.originalData;
}},getRowDataAsMap:function(f){var h=this.__wz[f];
var g={};

for(var k=0;k<this.getColumnCount();k++){g[this.getColumnId(k)]=h[k];
}return g;
},getDataAsMapArray:function(){var V=this.getRowCount();
var U=[];

for(var i=0;i<V;i++){U.push(this.getRowDataAsMap(i));
}return U;
},setEditable:function(K){this.__wC=[];

for(var L=0;L<this.getColumnCount();L++){this.__wC[L]=K;
}this.fireEvent(bI);
},setColumnEditable:function(bN,bO){if(bO!=this.isColumnEditable(bN)){if(this.__wC==null){this.__wC=[];
}this.__wC[bN]=bO;
this.fireEvent(bI);
}},isColumnEditable:function(bA){return this.__wC?(this.__wC[bA]==true):false;
},setColumnSortable:function(bL,bM){if(bM!=this.isColumnSortable(bL)){if(this.__wD==null){this.__wD=[];
}this.__wD[bL]=bM;
this.fireEvent(bI);
}},isColumnSortable:function(bz){return (this.__wD?(this.__wD[bz]!==false):true);
},sortByColumn:function(o,p){var s;
var r=this.__wB[o];

if(r){s=(p?r.ascending:r.descending);
}else{if(this.getCaseSensitiveSorting()){s=(p?qx.ui.table.model.Simple._defaultSortComparatorAscending:qx.ui.table.model.Simple._defaultSortComparatorDescending);
}else{s=(p?qx.ui.table.model.Simple._defaultSortComparatorInsensitiveAscending:qx.ui.table.model.Simple._defaultSortComparatorInsensitiveDescending);
}}s.columnIndex=o;
this.__wz.sort(s);
this.__wA=o;
this.__wE=p;
var q={columnIndex:o,ascending:p};
this.fireDataEvent(bF,q);
this.fireEvent(bI);
},setSortMethods:function(l,m){var n;

if(qx.lang.Type.isFunction(m)){n={ascending:m,descending:function(t,u){return m(u,t);
}};
}else{n=m;
}this.__wB[l]=n;
},getSortMethods:function(bK){return this.__wB[bK];
},clearSorting:function(){if(this.__wA!=-1){this.__wA=-1;
this.__wE=true;
this.fireEvent(bI);
}},getSortColumnIndex:function(){return this.__wA;
},isSortAscending:function(){return this.__wE;
},getRowCount:function(){return this.__wz.length;
},getValue:function(bc,bd){if(bd<0||bd>=this.__wz.length){throw new Error("this.__rowArr out of bounds: "+bd+" (0.."+this.__wz.length+")");
}return this.__wz[bd][bc];
},setValue:function(be,bf,bg){if(this.__wz[bf][be]!=bg){this.__wz[bf][be]=bg;
if(this.hasListener(bJ)){var bh={firstRow:bf,lastRow:bf,firstColumn:be,lastColumn:be};
this.fireDataEvent(bJ,bh);
}
if(be==this.__wA){this.clearSorting();
}}},setData:function(br,bs){this.__wz=br;
if(this.hasListener(bJ)){var bt={firstRow:0,lastRow:br.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(bJ,bt);
}
if(bs!==false){this.clearSorting();
}},getData:function(){return this.__wz;
},setDataAsMapArray:function(bo,bp,bq){this.setData(this._mapArray2RowArr(bo,bp),bq);
},addRows:function(M,N,O){if(N==null){N=this.__wz.length;
}M.splice(0,0,N,0);
Array.prototype.splice.apply(this.__wz,M);
var P={firstRow:N,lastRow:this.__wz.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(bJ,P);

if(O!==false){this.clearSorting();
}},addRowsAsMapArray:function(bB,bC,bD,bE){this.addRows(this._mapArray2RowArr(bB,bD),bC,bE);
},setRows:function(bi,bj,bk){if(bj==null){bj=0;
}bi.splice(0,0,bj,bi.length);
Array.prototype.splice.apply(this.__wz,bi);
var bl={firstRow:bj,lastRow:this.__wz.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(bJ,bl);

if(bk!==false){this.clearSorting();
}},setRowsAsMapArray:function(Q,R,S,T){this.setRows(this._mapArray2RowArr(Q,S),R,T);
},removeRows:function(B,C,D){this.__wz.splice(B,C);
var E={firstRow:B,lastRow:this.__wz.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1,removeStart:B,removeCount:C};
this.fireDataEvent(bJ,E);

if(D!==false){this.clearSorting();
}},_mapArray2RowArr:function(v,w){var A=v.length;
var x=this.getColumnCount();
var z=new Array(A);
var y;

for(var i=0;i<A;++i){y=[];

if(w){y.originalData=v[i];
}
for(var j=0;j<x;++j){y[j]=v[i][this.getColumnId(j)];
}z[i]=y;
}return z;
}},destruct:function(){this.__wz=this.__wC=this.__wB=this.__wD=null;
}});
})();
(function(){var a="qx.ui.table.IRowRenderer";
qx.Interface.define(a,{members:{updateDataRowElement:function(b,c){},getRowHeightStyle:function(d){},createRowStyle:function(f){},getRowClass:function(e){}}});
})();
(function(){var f="menu-button",e="table-column-reset-button",d="separator",c="user-button",b="qx.ui.table.columnmenu.Button",a="menu";
qx.Class.define(b,{extend:qx.ui.form.MenuButton,implement:qx.ui.table.IColumnMenuButton,construct:function(){qx.ui.form.MenuButton.call(this);
this.__uX=new qx.ui.core.Blocker(this);
},members:{__uY:null,__uX:null,factory:function(g,h){switch(g){case a:var j=new qx.ui.menu.Menu();
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
}},getBlocker:function(){return this.__uX;
},empty:function(){var n=this.getMenu();
var o=n.getChildren();

for(var i=0,l=o.length;i<l;i++){o[0].destroy();
}}},destruct:function(){this.__uX.dispose();
}});
})();
(function(){var e="",d="qooxdoo-table-cell qooxdoo-table-cell-right",c="0",b="qx.util.format.NumberFormat",a="qx.ui.table.cellrenderer.Number";
qx.Class.define(a,{extend:qx.ui.table.cellrenderer.Conditional,properties:{numberFormat:{check:b,init:null,nullable:true}},members:{_getContentHtml:function(g){var h=this.getNumberFormat();

if(h){if(g.value||g.value==0){return h.format(g.value);
}else{return e;
}}else{return g.value==0?c:(g.value||e);
}},_getCellClass:function(f){return d;
}}});
})();
(function(){var dx="Boolean",dw="resize-line",dv="mousedown",du="qx.event.type.Data",dt="mouseup",ds="qx.ui.table.pane.CellEvent",dr="scroll",dq="focus-indicator",dp="excluded",dn="scrollbar-y",ew="table-scroller-focus-indicator",ev="visible",eu="mousemove",et="header",es="editing",er="click",eq="modelChanged",ep="scrollbar-x",eo="cellClick",en="pane",dE="mouseout",dF="changeHorizontalScrollBarVisible",dC="__vP",dD="bottom",dA="_applyScrollTimeout",dB="changeScrollX",dy="_applyTablePaneModel",dz="Integer",dJ="__vV",dK="dblclick",dS="__vS",dQ="dataEdited",eb="__vQ",dV="mousewheel",ej="interval",eg="qx.ui.table.pane.Scroller",dM="__vO",em="_applyShowCellFocusIndicator",el="__vW",ek="resize",dL="vertical",dO="changeScrollY",dP="appear",dR="table-scroller",dT="beforeSort",dW="cellDblclick",ed="__vU",ei="__vR",dG="horizontal",dH="__vT",dN="losecapture",ea="contextmenu",dY="col-resize",dX="disappear",ef="_applyVerticalScrollBarVisible",ee="_applyHorizontalScrollBarVisible",dU="cellContextmenu",ec="close",dm="changeTablePaneModel",eh="qx.ui.table.pane.Model",dI="changeVerticalScrollBarVisible";
qx.Class.define(eg,{extend:qx.ui.core.Widget,include:qx.ui.core.scroll.MScrollBarFactory,construct:function(cz){qx.ui.core.Widget.call(this);
this.__vN=cz;
var cA=new qx.ui.layout.Grid();
cA.setColumnFlex(0,1);
cA.setRowFlex(1,1);
this._setLayout(cA);
this.__vO=this._showChildControl(ep);
this.__vP=this._showChildControl(dn);
this.__vQ=this._showChildControl(et);
this.__vR=this._showChildControl(en);
this.__vS=new qx.ui.container.Composite(new qx.ui.layout.HBox()).set({minWidth:0});
this._add(this.__vS,{row:0,column:0,colSpan:2});
this.__vT=new qx.ui.table.pane.Clipper();
this.__vT.add(this.__vQ);
this.__vT.addListener(dN,this._onChangeCaptureHeader,this);
this.__vT.addListener(eu,this._onMousemoveHeader,this);
this.__vT.addListener(dv,this._onMousedownHeader,this);
this.__vT.addListener(dt,this._onMouseupHeader,this);
this.__vT.addListener(er,this._onClickHeader,this);
this.__vS.add(this.__vT,{flex:1});
this.__vU=new qx.ui.table.pane.Clipper();
this.__vU.add(this.__vR);
this.__vU.addListener(dV,this._onMousewheel,this);
this.__vU.addListener(eu,this._onMousemovePane,this);
this.__vU.addListener(dv,this._onMousedownPane,this);
this.__vU.addListener(dt,this._onMouseupPane,this);
this.__vU.addListener(er,this._onClickPane,this);
this.__vU.addListener(ea,this._onContextMenu,this);
this.__vU.addListener(dK,this._onDblclickPane,this);
this.__vU.addListener(ek,this._onResizePane,this);
this._add(this.__vU,{row:1,column:0});
this.__vV=this.getChildControl(dq);
this.getChildControl(dw).hide();
this.addListener(dE,this._onMouseout,this);
this.addListener(dP,this._onAppear,this);
this.addListener(dX,this._onDisappear,this);
this.__vW=new qx.event.Timer();
this.__vW.addListener(ej,this._oninterval,this);
this.initScrollTimeout();
},statics:{MIN_COLUMN_WIDTH:10,RESIZE_REGION_RADIUS:5,CLICK_TOLERANCE:5,HORIZONTAL_SCROLLBAR:1,VERTICAL_SCROLLBAR:2},events:{"changeScrollY":du,"changeScrollX":du,"cellClick":ds,"cellDblclick":ds,"cellContextmenu":ds,"beforeSort":du},properties:{horizontalScrollBarVisible:{check:dx,init:true,apply:ee,event:dF},verticalScrollBarVisible:{check:dx,init:true,apply:ef,event:dI},tablePaneModel:{check:eh,apply:dy,event:dm},liveResize:{check:dx,init:false},focusCellOnMouseMove:{check:dx,init:false},selectBeforeFocus:{check:dx,init:false},showCellFocusIndicator:{check:dx,init:true,apply:em},resetSelectionOnHeaderClick:{check:dx,init:true},scrollTimeout:{check:dz,init:100,apply:dA},appearance:{refine:true,init:dR}},members:{__vX:null,__vN:null,__vY:null,__wa:null,__wb:null,__wc:null,__wd:null,__we:null,__wf:null,__wg:null,__wh:null,__wi:null,__wj:null,__wk:null,__wl:false,__wm:null,__wn:null,__wo:null,__wp:null,__wq:null,__wr:null,__ws:null,__wt:null,__vO:null,__vP:null,__vQ:null,__vT:null,__vR:null,__vU:null,__vV:null,__vS:null,__vW:null,getPaneInsetRight:function(){var eS=this.getTopRightWidget();
var eT=eS&&eS.isVisible()&&eS.getBounds()?eS.getBounds().width:0;
var eR=this.getVerticalScrollBarVisible()?this.getVerticalScrollBarWidth():0;
return Math.max(eT,eR);
},setPaneWidth:function(eJ){if(this.isVerticalScrollBarVisible()){eJ+=this.getPaneInsetRight();
}this.setWidth(eJ);
},_createChildControlImpl:function(bn){var bo;

switch(bn){case et:bo=(this.getTable().getNewTablePaneHeader())(this);
break;
case en:bo=(this.getTable().getNewTablePane())(this);
break;
case dq:bo=new qx.ui.table.pane.FocusIndicator(this);
bo.setUserBounds(0,0,0,0);
bo.setZIndex(1000);
bo.addListener(dt,this._onMouseupFocusIndicator,this);
this.__vU.add(bo);
bo.show();
bo.setDecorator(null);
break;
case dw:bo=new qx.ui.core.Widget();
bo.setUserBounds(0,0,0,0);
bo.setZIndex(1000);
this.__vU.add(bo);
break;
case ep:bo=this._createScrollBar(dG).set({minWidth:0,alignY:dD});
bo.addListener(dr,this._onScrollX,this);
this._add(bo,{row:2,column:0});
break;
case dn:bo=this._createScrollBar(dL);
bo.addListener(dr,this._onScrollY,this);
this._add(bo,{row:1,column:1});
break;
}return bo||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,bn);
},_applyHorizontalScrollBarVisible:function(dk,dl){this.__vO.setVisibility(dk?ev:dp);
},_applyVerticalScrollBarVisible:function(fw,fx){this.__vP.setVisibility(fw?ev:dp);
},_applyTablePaneModel:function(eN,eO){if(eO!=null){eO.removeListener(eq,this._onPaneModelChanged,this);
}eN.addListener(eq,this._onPaneModelChanged,this);
},_applyShowCellFocusIndicator:function(eP,eQ){if(eP){this.__vV.setDecorator(ew);
this._updateFocusIndicator();
}else{if(this.__vV){this.__vV.setDecorator(null);
}}},getScrollY:function(){return this.__vP.getPosition();
},setScrollY:function(scrollY,fp){this.__vP.scrollTo(scrollY);

if(fp){this._updateContent();
}},getScrollX:function(){return this.__vO.getPosition();
},setScrollX:function(scrollX){this.__vO.scrollTo(scrollX);
},getTable:function(){return this.__vN;
},onColVisibilityChanged:function(){this.updateHorScrollBarMaximum();
this._updateFocusIndicator();
},setColumnWidth:function(bA,bB){this.__vQ.setColumnWidth(bA,bB);
this.__vR.setColumnWidth(bA,bB);
var bC=this.getTablePaneModel();
var x=bC.getX(bA);

if(x!=-1){this.updateHorScrollBarMaximum();
this._updateFocusIndicator();
}},onColOrderChanged:function(){this.__vQ.onColOrderChanged();
this.__vR.onColOrderChanged();
this.updateHorScrollBarMaximum();
},onTableModelDataChanged:function(F,G,H,I){this.__vR.onTableModelDataChanged(F,G,H,I);
var J=this.getTable().getTableModel().getRowCount();

if(J!=this.__vX){this.updateVerScrollBarMaximum();

if(this.getFocusedRow()>=J){if(J==0){this.setFocusedCell(null,null);
}else{this.setFocusedCell(this.getFocusedColumn(),J-1);
}}this.__vX=J;
}},onSelectionChanged:function(){this.__vR.onSelectionChanged();
},onFocusChanged:function(){this.__vR.onFocusChanged();
},onTableModelMetaDataChanged:function(){this.__vQ.onTableModelMetaDataChanged();
this.__vR.onTableModelMetaDataChanged();
},_onPaneModelChanged:function(){this.__vQ.onPaneModelChanged();
this.__vR.onPaneModelChanged();
},_onResizePane:function(){this.updateHorScrollBarMaximum();
this.updateVerScrollBarMaximum();
this._updateContent();
this.__vQ._updateContent();
this.__vN._updateScrollBarVisibility();
},updateHorScrollBarMaximum:function(){var bl=this.__vU.getInnerSize();

if(!bl){return ;
}var bj=this.getTablePaneModel().getTotalWidth();
var bk=this.__vO;

if(bl.width<bj){var bi=Math.max(0,bj-bl.width);
bk.setMaximum(bi);
bk.setKnobFactor(bl.width/bj);
var bm=bk.getPosition();
bk.setPosition(Math.min(bm,bi));
}else{bk.setMaximum(0);
bk.setKnobFactor(1);
bk.setPosition(0);
}},updateVerScrollBarMaximum:function(){var bz=this.__vU.getInnerSize();

if(!bz){return ;
}var bx=this.getTable().getTableModel();
var bt=bx.getRowCount();

if(this.getTable().getKeepFirstVisibleRowComplete()){bt+=1;
}var bs=this.getTable().getRowHeight();
var bv=bt*bs;
var by=this.__vP;

if(bz.height<bv){var bu=Math.max(0,bv-bz.height);
by.setMaximum(bu);
by.setKnobFactor(bz.height/bv);
var bw=by.getPosition();
by.setPosition(Math.min(bw,bu));
}else{by.setMaximum(0);
by.setKnobFactor(1);
by.setPosition(0);
}},onKeepFirstVisibleRowCompleteChanged:function(){this.updateVerScrollBarMaximum();
this._updateContent();
},_onAppear:function(){this._startInterval(this.getScrollTimeout());
},_onDisappear:function(){this._stopInterval();
},_onScrollX:function(e){var cB=e.getData();
this.fireDataEvent(dB,cB,e.getOldData());
this.__vT.scrollToX(cB);
this.__vU.scrollToX(cB);
},_onScrollY:function(e){this.fireDataEvent(dO,e.getData(),e.getOldData());
this._postponedUpdateContent();
},_onMousewheel:function(e){var v=this.getTable();

if(!v.getEnabled()){return;
}var y=qx.bom.client.Engine.GECKO?1:3;
var w=this.__vP.getPosition()+((e.getWheelDelta()*y)*v.getRowHeight());
this.__vP.scrollTo(w);
if(this.__wn&&this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(this.__wn,this.__wo);
}e.stop();
},__wu:function(bD){var bI=this.getTable();
var bJ=this.__vQ.getHeaderWidgetAtColumn(this.__wh);
var bE=bJ.getSizeHint().minWidth;
var bG=Math.max(bE,this.__wj+bD-this.__wi);

if(this.getLiveResize()){var bF=bI.getTableColumnModel();
bF.setColumnWidth(this.__wh,bG);
}else{this.__vQ.setColumnWidth(this.__wh,bG);
var bH=this.getTablePaneModel();
this._showResizeLine(bH.getColumnLeft(this.__wh)+bG);
}this.__wi+=bG-this.__wj;
this.__wj=bG;
},__wv:function(a){var b=qx.ui.table.pane.Scroller.CLICK_TOLERANCE;

if(this.__vQ.isShowingColumnMoveFeedback()||a>this.__wg+b||a<this.__wg-b){this.__wd+=a-this.__wg;
this.__vQ.showColumnMoveFeedback(this.__wc,this.__wd);
var c=this.__vN.getTablePaneScrollerAtPageX(a);

if(this.__wf&&this.__wf!=c){this.__wf.hideColumnMoveFeedback();
}
if(c!=null){this.__we=c.showColumnMoveFeedback(a);
}else{this.__we=null;
}this.__wf=c;
this.__wg=a;
}},_onMousemoveHeader:function(e){var l=this.getTable();

if(!l.getEnabled()){return;
}var m=false;
var d=null;
var j=e.getDocumentLeft();
var k=e.getDocumentTop();
this.__wn=j;
this.__wo=k;

if(this.__wh!=null){this.__wu(j);
m=true;
e.stopPropagation();
}else if(this.__wc!=null){this.__wv(j);
e.stopPropagation();
}else{var g=this._getResizeColumnForPageX(j);

if(g!=-1){m=true;
}else{var i=l.getTableModel();
var n=this._getColumnForPageX(j);

if(n!=null&&i.isColumnSortable(n)){d=n;
}}}var h=m?dY:null;
this.getApplicationRoot().setGlobalCursor(h);
this.setCursor(h);
this.__vQ.setMouseOverColumn(d);
},_onMousemovePane:function(e){var df=this.getTable();

if(!df.getEnabled()){return;
}var dh=e.getDocumentLeft();
var di=e.getDocumentTop();
this.__wn=dh;
this.__wo=di;
var dg=this._getRowForPagePos(dh,di);

if(dg!=null&&this._getColumnForPageX(dh)!=null){if(this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(dh,di);
}}this.__vQ.setMouseOverColumn(null);
},_onMousedownHeader:function(e){if(!this.getTable().getEnabled()){return;
}var eV=e.getDocumentLeft();
var eW=this._getResizeColumnForPageX(eV);

if(eW!=-1){this._startResizeHeader(eW,eV);
e.stop();
}else{var eU=this._getColumnForPageX(eV);

if(eU!=null){this._startMoveHeader(eU,eV);
e.stop();
}}},_startResizeHeader:function(K,L){var M=this.getTable().getTableColumnModel();
this.__wh=K;
this.__wi=L;
this.__wj=M.getColumnWidth(this.__wh);
this.__vT.capture();
},_startMoveHeader:function(cx,cy){this.__wc=cx;
this.__wg=cy;
this.__wd=this.getTablePaneModel().getColumnLeft(cx);
this.__vT.capture();
},_onMousedownPane:function(e){var C=this.getTable();

if(!C.getEnabled()){return;
}
if(C.isEditing()){C.stopEditing();
}var z=e.getDocumentLeft();
var B=e.getDocumentTop();
var E=this._getRowForPagePos(z,B);
var D=this._getColumnForPageX(z);

if(E!==null){this.__wk={row:E,col:D};
this.__wl=false;
var A=this.getSelectBeforeFocus();

if(A){C.getSelectionManager().handleMouseDown(E,e);
}if(!this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(z,B);
}
if(!A){C.getSelectionManager().handleMouseDown(E,e);
}}},_onMouseupFocusIndicator:function(e){if(this.__wk&&!this.__wl&&!this.isEditing()&&this.__vV.getRow()==this.__wk.row&&this.__vV.getColumn()==this.__wk.col){this.fireEvent(eo,qx.ui.table.pane.CellEvent,[this,e,this.__wk.row,this.__wk.col],true);
this.__wl=true;
}},_onChangeCaptureHeader:function(e){if(this.__wh!=null){this._stopResizeHeader();
}
if(this.__wc!=null){this._stopMoveHeader();
}},_stopResizeHeader:function(){var P=this.getTable().getTableColumnModel();
if(!this.getLiveResize()){this._hideResizeLine();
P.setColumnWidth(this.__wh,this.__wj);
}this.__wh=null;
this.__vT.releaseCapture();
this.getApplicationRoot().setGlobalCursor(null);
this.setCursor(null);
if(this.isEditing()){var Q=this.__wr.getBounds().height;
this.__wr.setUserBounds(0,0,this.__wj,Q);
}},_stopMoveHeader:function(){var eB=this.getTable().getTableColumnModel();
var eC=this.getTablePaneModel();
this.__vQ.hideColumnMoveFeedback();

if(this.__wf){this.__wf.hideColumnMoveFeedback();
}
if(this.__we!=null){var eE=eC.getFirstColumnX()+eC.getX(this.__wc);
var eA=this.__we;

if(eA!=eE&&eA!=eE+1){var eD=eB.getVisibleColumnAtX(eE);
var ez=eB.getVisibleColumnAtX(eA);
var ey=eB.getOverallX(eD);
var ex=(ez!=null)?eB.getOverallX(ez):eB.getOverallColumnCount();

if(ex>ey){ex--;
}eB.moveColumn(ey,ex);
this._updateFocusIndicator();
}}this.__wc=null;
this.__we=null;
this.__vT.releaseCapture();
},_onMouseupPane:function(e){var N=this.getTable();

if(!N.getEnabled()){return;
}var O=this._getRowForPagePos(e.getDocumentLeft(),e.getDocumentTop());

if(O!=-1&&O!=null&&this._getColumnForPageX(e.getDocumentLeft())!=null){N.getSelectionManager().handleMouseUp(O,e);
}},_onMouseupHeader:function(e){var fq=this.getTable();

if(!fq.getEnabled()){return;
}
if(this.__wh!=null){this._stopResizeHeader();
this.__wm=true;
e.stop();
}else if(this.__wc!=null){this._stopMoveHeader();
e.stop();
}},_onClickHeader:function(e){if(this.__wm){this.__wm=false;
return;
}var cf=this.getTable();

if(!cf.getEnabled()){return;
}var cd=cf.getTableModel();
var ce=e.getDocumentLeft();
var cc=this._getResizeColumnForPageX(ce);

if(cc==-1){var ci=this._getColumnForPageX(ce);

if(ci!=null&&cd.isColumnSortable(ci)){var cb=cd.getSortColumnIndex();
var cg=(ci!=cb)?true:!cd.isSortAscending();
var ch={column:ci,ascending:cg,clickEvent:e};

if(this.fireDataEvent(dT,ch,null,true)){cd.sortByColumn(ci,cg);

if(this.getResetSelectionOnHeaderClick()){cf.getSelectionModel().resetSelection();
}}}}e.stop();
},_onClickPane:function(e){var fr=this.getTable();

if(!fr.getEnabled()){return;
}var fu=e.getDocumentLeft();
var fv=e.getDocumentTop();
var fs=this._getRowForPagePos(fu,fv);
var ft=this._getColumnForPageX(fu);

if(fs!=null&&ft!=null){fr.getSelectionManager().handleClick(fs,e);

if(this.__vV.isHidden()||(this.__wk&&!this.__wl&&!this.isEditing()&&fs==this.__wk.row&&ft==this.__wk.col)){this.fireEvent(eo,qx.ui.table.pane.CellEvent,[this,e,fs,ft],true);
this.__wl=true;
}}},_onContextMenu:function(e){var cF=e.getDocumentLeft();
var cG=e.getDocumentTop();
var cD=this._getRowForPagePos(cF,cG);
var cE=this._getColumnForPageX(cF);

if(this.__vV.isHidden()||(this.__wk&&cD==this.__wk.row&&cE==this.__wk.col)){this.fireEvent(dU,qx.ui.table.pane.CellEvent,[this,e,cD,cE],true);
var cC=this.getTable().getContextMenu();

if(cC){if(cC.getChildren().length>0){cC.openAtMouse(e);
}else{cC.exclude();
}e.preventDefault();
}}},_onContextMenuOpen:function(e){},_onDblclickPane:function(e){var eG=e.getDocumentLeft();
var eH=e.getDocumentTop();
this._focusCellAtPagePos(eG,eH);
this.startEditing();
var eF=this._getRowForPagePos(eG,eH);

if(eF!=-1&&eF!=null){this.fireEvent(dW,qx.ui.table.pane.CellEvent,[this,e,eF],true);
}},_onMouseout:function(e){var dj=this.getTable();

if(!dj.getEnabled()){return;
}if(this.__wh==null){this.setCursor(null);
this.getApplicationRoot().setGlobalCursor(null);
}this.__vQ.setMouseOverColumn(null);
},_showResizeLine:function(x){var fn=this._showChildControl(dw);
var fm=fn.getWidth();
var fo=this.__vU.getBounds();
fn.setUserBounds(x-Math.round(fm/2),0,fm,fo.height);
},_hideResizeLine:function(){this._excludeChildControl(dw);
},showColumnMoveFeedback:function(cR){var db=this.getTablePaneModel();
var da=this.getTable().getTableColumnModel();
var cU=this.__vR.getContainerLocation().left;
var cY=db.getColumnCount();
var cV=0;
var cT=0;
var de=cU;

for(var cS=0;cS<cY;cS++){var cW=db.getColumnAtX(cS);
var dc=da.getColumnWidth(cW);

if(cR<de+dc/2){break;
}de+=dc;
cV=cS+1;
cT=de-cU;
}var cX=this.__vU.getContainerLocation().left;
var dd=this.__vU.getBounds().width;
var scrollX=cX-cU;
cT=qx.lang.Number.limit(cT,scrollX+2,scrollX+dd-1);
this._showResizeLine(cT);
return db.getFirstColumnX()+cV;
},hideColumnMoveFeedback:function(){this._hideResizeLine();
},_focusCellAtPagePos:function(bW,bX){var ca=this._getRowForPagePos(bW,bX);

if(ca!=-1&&ca!=null){var bY=this._getColumnForPageX(bW);
this.__vN.setFocusedCell(bY,ca);
}},setFocusedCell:function(bq,br){if(!this.isEditing()){this.__vR.setFocusedCell(bq,br,this.__wa);
this.__wp=bq;
this.__wq=br;
this._updateFocusIndicator();
}},getFocusedColumn:function(){return this.__wp;
},getFocusedRow:function(){return this.__wq;
},scrollCellVisible:function(eX,eY){var fj=this.getTablePaneModel();
var fa=fj.getX(eX);

if(fa!=-1){var fg=this.__vU.getInnerSize();

if(!fg){return;
}var fh=this.getTable().getTableColumnModel();
var fd=fj.getColumnLeft(eX);
var fk=fh.getColumnWidth(eX);
var fb=this.getTable().getRowHeight();
var fl=eY*fb;
var scrollX=this.getScrollX();
var scrollY=this.getScrollY();
var fi=Math.min(fd,fd+fk-fg.width);
var ff=fd;
this.setScrollX(Math.max(fi,Math.min(ff,scrollX)));
var fc=fl+fb-fg.height;

if(this.getTable().getKeepFirstVisibleRowComplete()){fc+=fb;
}var fe=fl;
this.setScrollY(Math.max(fc,Math.min(fe,scrollY)),true);
}},isEditing:function(){return this.__wr!=null;
},startEditing:function(){var V=this.getTable();
var T=V.getTableModel();
var X=this.__wp;

if(!this.isEditing()&&(X!=null)&&T.isColumnEditable(X)){var Y=this.__wq;
var R=this.getTablePaneModel().getX(X);
var S=T.getValue(X,Y);
this.__ws=V.getTableColumnModel().getCellEditorFactory(X);
var U={col:X,row:Y,xPos:R,value:S,table:V};
this.__wr=this.__ws.createCellEditor(U);
if(this.__wr===null){return false;
}else if(this.__wr instanceof qx.ui.window.Window){this.__wr.setModal(true);
this.__wr.setShowClose(false);
this.__wr.addListener(ec,this._onCellEditorModalWindowClose,this);
var f=V.getModalCellEditorPreOpenFunction();

if(f!=null){f(this.__wr,U);
}this.__wr.open();
}else{var W=this.__vV.getInnerSize();
this.__wr.setUserBounds(0,0,W.width,W.height);
this.__vV.addListener(dv,function(e){this.__wk={row:this.__wq,col:this.__wp};
e.stopPropagation();
},this);
this.__vV.add(this.__wr);
this.__vV.addState(es);
this.__vV.setKeepActive(false);
this.__vV.setDecorator(ew);
this.__wr.focus();
this.__wr.activate();
}return true;
}return false;
},stopEditing:function(){if(!this.getShowCellFocusIndicator()){this.__vV.setDecorator(null);
}this.flushEditor();
this.cancelEditing();
},flushEditor:function(){if(this.isEditing()){var bT=this.__ws.getCellEditorValue(this.__wr);
var bS=this.getTable().getTableModel().getValue(this.__wp,this.__wq);
this.getTable().getTableModel().setValue(this.__wp,this.__wq,bT);
this.__vN.focus();
this.__vN.fireDataEvent(dQ,{row:this.__wq,col:this.__wp,oldValue:bS,value:bT});
}},cancelEditing:function(){if(this.isEditing()&&!this.__wr.pendingDispose){if(this._cellEditorIsModalWindow){this.__wr.destroy();
this.__wr=null;
this.__ws=null;
this.__wr.pendingDispose=true;
}else{this.__vV.removeState(es);
this.__vV.setKeepActive(true);
this.__wr.destroy();
this.__wr=null;
this.__ws=null;
}}},_onCellEditorModalWindowClose:function(e){this.stopEditing();
},_getColumnForPageX:function(o){var r=this.getTable().getTableColumnModel();
var s=this.getTablePaneModel();
var q=s.getColumnCount();
var u=this.__vQ.getContainerLocation().left;

for(var x=0;x<q;x++){var p=s.getColumnAtX(x);
var t=r.getColumnWidth(p);
u+=t;

if(o<u){return p;
}}return null;
},_getResizeColumnForPageX:function(bK){var bO=this.getTable().getTableColumnModel();
var bP=this.getTablePaneModel();
var bN=bP.getColumnCount();
var bR=this.__vQ.getContainerLocation().left;
var bL=qx.ui.table.pane.Scroller.RESIZE_REGION_RADIUS;

for(var x=0;x<bN;x++){var bM=bP.getColumnAtX(x);
var bQ=bO.getColumnWidth(bM);
bR+=bQ;

if(bK>=(bR-bL)&&bK<=(bR+bL)){return bM;
}}return -1;
},_getRowForPagePos:function(cH,cI){var cJ=this.__vR.getContentLocation();

if(cH<cJ.left||cH>cJ.right){return null;
}
if(cI>=cJ.top&&cI<=cJ.bottom){var cK=this.getTable().getRowHeight();
var scrollY=this.__vP.getPosition();

if(this.getTable().getKeepFirstVisibleRowComplete()){scrollY=Math.floor(scrollY/cK)*cK;
}var cN=scrollY+cI-cJ.top;
var cP=Math.floor(cN/cK);
var cO=this.getTable().getTableModel();
var cL=cO.getRowCount();
return (cP<cL)?cP:null;
}var cM=this.__vQ.getContainerLocation();

if(cI>=cM.top&&cI<=cM.bottom&&cH<=cM.right){return -1;
}return null;
},setTopRightWidget:function(bU){var bV=this.__wt;

if(bV!=null){this.__vS.remove(bV);
}
if(bU!=null){this.__vS.add(bU);
}this.__wt=bU;
},getTopRightWidget:function(){return this.__wt;
},getHeader:function(){return this.__vQ;
},getTablePane:function(){return this.__vR;
},getVerticalScrollBarWidth:function(){var cQ=this.__vP;
return cQ.isVisible()?(cQ.getSizeHint().width||0):0;
},getNeededScrollBars:function(cj,ck){var cq=this.__vP.getSizeHint().width;
var cr=this.__vU.getInnerSize();
var cl=cr?cr.width:0;

if(this.getVerticalScrollBarVisible()){cl+=cq;
}var cu=cr?cr.height:0;

if(this.getHorizontalScrollBarVisible()){cu+=cq;
}var co=this.getTable().getTableModel();
var cs=co.getRowCount();
var cv=this.getTablePaneModel().getTotalWidth();
var ct=this.getTable().getRowHeight()*cs;
var cn=false;
var cw=false;

if(cv>cl){cn=true;

if(ct>cu-cq){cw=true;
}}else if(ct>cu){cw=true;

if(!ck&&(cv>cl-cq)){cn=true;
}}var cp=qx.ui.table.pane.Scroller.HORIZONTAL_SCROLLBAR;
var cm=qx.ui.table.pane.Scroller.VERTICAL_SCROLLBAR;
return ((cj||cn)?cp:0)|((ck||!cw)?0:cm);
},getPaneClipper:function(){return this.__vU;
},_applyScrollTimeout:function(eL,eM){this._startInterval(eL);
},_startInterval:function(eI){this.__vW.setInterval(eI);
this.__vW.start();
},_stopInterval:function(){this.__vW.stop();
},_postponedUpdateContent:function(){this._updateContent();
},_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.__wa&&!this.__vR._layoutPending){this.__wa=false;
this._updateContent();
}}),_updateContent:function(){var be=this.__vU.getInnerSize();

if(!be){return;
}var bh=be.height;
var scrollX=this.__vO.getPosition();
var scrollY=this.__vP.getPosition();
var bb=this.getTable().getRowHeight();
var bc=Math.floor(scrollY/bb);
var bg=this.__vR.getFirstVisibleRow();
this.__vR.setFirstVisibleRow(bc);
var bd=Math.ceil(bh/bb);
var ba=0;
var bf=this.getTable().getKeepFirstVisibleRowComplete();

if(!bf){bd++;
ba=scrollY%bb;
}this.__vR.setVisibleRowCount(bd);

if(bc!=bg){this._updateFocusIndicator();
}this.__vU.scrollToX(scrollX);
if(!bf){this.__vU.scrollToY(ba);
}},_updateFocusIndicator:function(){var bp=this.getTable();

if(!bp.getEnabled()){return;
}this.__vV.moveToCell(this.__wp,this.__wq);
}},destruct:function(){this._stopInterval();
var eK=this.getTablePaneModel();

if(eK){eK.dispose();
}this.__wk=this.__wt=this.__vN=null;
this._disposeObjects(dM,dC,dH,ed,dJ,eb,ei,dS,el);
}});
})();
(function(){var r="px",q=".qooxdoo-table-cell-icon {",p="abstract",o="",n="qx.ui.table.cellrenderer.AbstractImage",m=" qooxdoo-table-cell-icon",l="<div></div>",k="'",j="no-repeat",i="}",c="  text-align:center;",h="inline-block",f="static",b="top",a="  padding-top:1px;",e="title='",d="string",g="-moz-inline-box";
qx.Class.define(n,{extend:qx.ui.table.cellrenderer.Abstract,type:p,construct:function(){qx.ui.table.cellrenderer.Abstract.call(this);
var C=this.self(arguments);

if(!C.stylesheet){C.stylesheet=qx.bom.Stylesheet.createElement(q+c+a+i);
}},members:{__FK:16,__FL:16,_insetY:2,__FM:null,_identifyImage:function(z){throw new Error("_identifyImage is abstract");
},_getImageInfos:function(u){var v=this._identifyImage(u);
if(v==null||typeof u==d){v={url:v,tooltip:null};
}
if(u.width&&u.height){var w={width:u.imageWidth,height:u.imageHeight};
}else{w=this.__FN(v.url);
}v.width=w.width;
v.height=w.height;
return v;
},__FN:function(D){var G=qx.util.ResourceManager.getInstance();
var F=qx.io.ImageLoader;
var E,H;
if(G.has(D)){E=G.getImageWidth(D);
H=G.getImageHeight(D);
}else if(F.isLoaded(D)){E=F.getWidth(D);
H=F.getHeight(D);
}else{E=this.__FK;
H=this.__FL;
}return {width:E,height:H};
},createDataCellHtml:function(A,B){this.__FM=this._getImageInfos(A);
return qx.ui.table.cellrenderer.Abstract.prototype.createDataCellHtml.call(this,A,B);
},_getCellClass:function(x){return qx.ui.table.cellrenderer.Abstract.prototype._getCellClass.call(this)+m;
},_getContentHtml:function(y){var content=l;
if(this.__FM.url){var content=qx.bom.element.Decoration.create(this.__FM.url,j,{width:this.__FM.width+r,height:this.__FM.height+r,display:qx.bom.client.Engine.GECKO&&qx.bom.client.Engine.VERSION<1.9?g:h,verticalAlign:b,position:f});
}return content;
},_getCellAttributes:function(s){var t=this.__FM.tooltip;

if(t){return e+t+k;
}else{return o;
}}},destruct:function(){this.__FM=null;
}});
})();
(function(){var g="Number",f="qx.event.type.Event",e="_applyFirstColumnX",d="Integer",c="qx.ui.table.pane.Model",b="_applyMaxColumnCount",a="visibilityChangedPre";
qx.Class.define(c,{extend:qx.core.Object,construct:function(v){qx.core.Object.call(this);
v.addListener(a,this._onColVisibilityChanged,this);
this.__wx=v;
},events:{"modelChanged":f},statics:{EVENT_TYPE_MODEL_CHANGED:"modelChanged"},properties:{firstColumnX:{check:d,init:0,apply:e},maxColumnCount:{check:g,init:-1,apply:b}},members:{__wy:null,__wx:null,_applyFirstColumnX:function(w,y){this.__wy=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},_applyMaxColumnCount:function(B,C){this.__wy=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},setTableColumnModel:function(D){this.__wx=D;
this.__wy=null;
},_onColVisibilityChanged:function(r){this.__wy=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},getColumnCount:function(){if(this.__wy==null){var o=this.getFirstColumnX();
var q=this.getMaxColumnCount();
var p=this.__wx.getVisibleColumnCount();

if(q==-1||(o+q)>p){this.__wy=p-o;
}else{this.__wy=q;
}}return this.__wy;
},getColumnAtX:function(z){var A=this.getFirstColumnX();
return this.__wx.getVisibleColumnAtX(A+z);
},getX:function(h){var i=this.getFirstColumnX();
var j=this.getMaxColumnCount();
var x=this.__wx.getVisibleX(h)-i;

if(x>=0&&(j==-1||x<j)){return x;
}else{return -1;
}},getColumnLeft:function(k){var n=0;
var m=this.getColumnCount();

for(var x=0;x<m;x++){var l=this.getColumnAtX(x);

if(l==k){return n;
}n+=this.__wx.getColumnWidth(l);
}return -1;
},getTotalWidth:function(){var s=0;
var t=this.getColumnCount();

for(var x=0;x<t;x++){var u=this.getColumnAtX(x);
s+=this.__wx.getColumnWidth(u);
}return s;
}},destruct:function(){this.__wx=null;
}});
})();
(function(){var f="changeVisible",d="qx.ui.table.columnmenu.MenuItem",c="_applyVisible",b="Boolean",a="changeValue";
qx.Class.define(d,{extend:qx.ui.menu.CheckBox,implement:qx.ui.table.IColumnMenuItem,properties:{visible:{check:b,init:true,apply:c,event:f}},construct:function(g){qx.ui.menu.CheckBox.call(this,g);
this.addListener(a,function(e){this.bInListener=true;
this.setVisible(e.getData());
this.bInListener=false;
});
},members:{__va:false,_applyVisible:function(h,i){if(!this.bInListener){this.setValue(h);
}}}});
})();
(function(){var a="qx.lang.Number";
qx.Class.define(a,{statics:{isInRange:function(h,i,j){return h>=i&&h<=j;
},isBetweenRange:function(e,f,g){return e>f&&e<g;
},limit:function(b,c,d){if(d!=null&&b>d){return d;
}else if(c!=null&&b<c){return c;
}else{return b;
}}}});
})();
(function(){var e="hovered",d="__vK",c="qx.ui.table.pane.Header";
qx.Class.define(c,{extend:qx.ui.core.Widget,construct:function(H){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.HBox());
this.__vJ=new qx.ui.core.Blocker(this);
this.__vK=H;
},members:{__vK:null,__vL:null,__vM:null,__vJ:null,getPaneScroller:function(){return this.__vK;
},getTable:function(){return this.__vK.getTable();
},getBlocker:function(){return this.__vJ;
},onColOrderChanged:function(){this._updateContent(true);
},onPaneModelChanged:function(){this._updateContent(true);
},onTableModelMetaDataChanged:function(){this._updateContent();
},setColumnWidth:function(f,g){var h=this.getHeaderWidgetAtColumn(f);

if(h!=null){h.setWidth(g);
}},setMouseOverColumn:function(K){if(K!=this.__vM){if(this.__vM!=null){var L=this.getHeaderWidgetAtColumn(this.__vM);

if(L!=null){L.removeState(e);
}}
if(K!=null){this.getHeaderWidgetAtColumn(K).addState(e);
}this.__vM=K;
}},getHeaderWidgetAtColumn:function(a){var b=this.getPaneScroller().getTablePaneModel().getX(a);
return this._getChildren()[b];
},showColumnMoveFeedback:function(v,x){var A=this.getContainerLocation();

if(this.__vL==null){var F=this.getTable();
var w=this.getPaneScroller().getTablePaneModel().getX(v);
var z=this._getChildren()[w];
var B=F.getTableModel();
var D=F.getTableColumnModel();
var E={xPos:w,col:v,name:B.getColumnName(v),table:F};
var C=D.getHeaderCellRenderer(v);
var y=C.createHeaderCell(E);
var G=z.getBounds();
y.setWidth(G.width);
y.setHeight(G.height);
y.setZIndex(1000000);
y.setOpacity(0.8);
y.setLayoutProperties({top:A.top});
this.getApplicationRoot().add(y);
this.__vL=y;
}this.__vL.setLayoutProperties({left:A.left+x});
this.__vL.show();
},hideColumnMoveFeedback:function(){if(this.__vL!=null){this.__vL.destroy();
this.__vL=null;
}},isShowingColumnMoveFeedback:function(){return this.__vL!=null;
},_updateContent:function(i){var s=this.getTable();
var m=s.getTableModel();
var p=s.getTableColumnModel();
var r=this.getPaneScroller().getTablePaneModel();
var u=this._getChildren();
var n=r.getColumnCount();
var q=m.getSortColumnIndex();
if(i){this._cleanUpCells();
}var j={};
j.sortedAscending=m.isSortAscending();

for(var x=0;x<n;x++){var l=r.getColumnAtX(x);

if(l===undefined){continue;
}var t=p.getColumnWidth(l);
var o=p.getHeaderCellRenderer(l);
j.xPos=x;
j.col=l;
j.name=m.getColumnName(l);
j.editable=m.isColumnEditable(l);
j.sorted=(l==q);
j.table=s;
var k=u[x];
if(k==null){k=o.createHeaderCell(j);
k.set({width:t});
this._add(k);
}else{o.updateHeaderCell(j,k);
}}},_cleanUpCells:function(){var J=this._getChildren();

for(var x=J.length-1;x>=0;x--){var I=J[x];
I.destroy();
}}},destruct:function(){this.__vJ.dispose();
this._disposeObjects(d);
}});
})();
(function(){var x="",w="table-row-background-even",v="table-row-background-selected",u="table-row",t="background-color:",s="table-row-background-focused",r=';border-bottom: 1px solid ',q=';color:',p="table-row-selected",o="table-row-background-odd",h="default",n="table-row-background-focused-selected",k="qx.ui.table.rowrenderer.Default",g="table-row-line",f="'",j="height:",i=";",l="px;",e="1px solid ",m="Boolean";
qx.Class.define(k,{extend:qx.core.Object,implement:qx.ui.table.IRowRenderer,construct:function(){qx.core.Object.call(this);
this.__uU=x;
this.__uU={};
this.__uV={};
this._renderFont(qx.theme.manager.Font.getInstance().resolve(h));
var y=qx.theme.manager.Color.getInstance();
this.__uV.bgcolFocusedSelected=y.resolve(n);
this.__uV.bgcolFocused=y.resolve(s);
this.__uV.bgcolSelected=y.resolve(v);
this.__uV.bgcolEven=y.resolve(w);
this.__uV.bgcolOdd=y.resolve(o);
this.__uV.colSelected=y.resolve(p);
this.__uV.colNormal=y.resolve(u);
this.__uV.horLine=y.resolve(g);
},properties:{highlightFocusRow:{check:m,init:true}},members:{__uV:null,__uW:null,__uU:null,_insetY:1,_renderFont:function(C){if(C){this.__uW=C.getStyles();
this.__uU=qx.bom.element.Style.compile(this.__uW);
this.__uU=this.__uU.replace(/"/g,f);
}else{this.__uU=x;
this.__uW=qx.bom.Font.getDefaultStyles();
}},updateDataRowElement:function(a,b){var d=this.__uW;
var c=b.style;
qx.bom.element.Style.setStyles(b,d);

if(a.focusedRow&&this.getHighlightFocusRow()){c.backgroundColor=a.selected?this.__uV.bgcolFocusedSelected:this.__uV.bgcolFocused;
}else{if(a.selected){c.backgroundColor=this.__uV.bgcolSelected;
}else{c.backgroundColor=(a.row%2==0)?this.__uV.bgcolEven:this.__uV.bgcolOdd;
}}c.color=a.selected?this.__uV.colSelected:this.__uV.colNormal;
c.borderBottom=e+this.__uV.horLine;
},getRowHeightStyle:function(z){if(qx.bom.client.Feature.CONTENT_BOX){z-=this._insetY;
}return j+z+l;
},createRowStyle:function(A){var B=[];
B.push(i);
B.push(this.__uU);
B.push(t);

if(A.focusedRow&&this.getHighlightFocusRow()){B.push(A.selected?this.__uV.bgcolFocusedSelected:this.__uV.bgcolFocused);
}else{if(A.selected){B.push(this.__uV.bgcolSelected);
}else{B.push((A.row%2==0)?this.__uV.bgcolEven:this.__uV.bgcolOdd);
}}B.push(q);
B.push(A.selected?this.__uV.colSelected:this.__uV.colNormal);
B.push(r,this.__uV.horLine);
return B.join(x);
},getRowClass:function(D){return x;
},getRowAttributes:function(E){return x;
}},destruct:function(){this.__uV=this.__uW=this.__uU=null;
}});
})();
(function(){var h="String",g="_applyIconTrue",f="decoration/table/boolean-true.png",e="qx.ui.table.cellrenderer.Boolean",d=";padding-top:4px;",c="decoration/table/boolean-false.png",b="_applyIconFalse";
qx.Class.define(e,{extend:qx.ui.table.cellrenderer.AbstractImage,construct:function(){qx.ui.table.cellrenderer.AbstractImage.call(this);
this.__HI=qx.util.AliasManager.getInstance();
this.initIconTrue();
this.initIconFalse();
},properties:{iconTrue:{check:h,init:f,apply:g},iconFalse:{check:h,init:c,apply:b}},members:{__HJ:null,__HK:false,__HI:null,_applyIconTrue:function(l){this.__HJ=this.__HI.resolve(l);
},_applyIconFalse:function(a){this.__HK=this.__HI.resolve(a);
},_insetY:5,_getCellStyle:function(i){return qx.ui.table.cellrenderer.AbstractImage.prototype._getCellStyle.call(this,i)+d;
},_identifyImage:function(j){var k={imageWidth:11,imageHeight:11};

switch(j.value){case true:k.url=this.__HJ;
break;
case false:k.url=this.__HK;
break;
default:k.url=null;
break;
}return k;
}},destruct:function(){this.__HI=null;
}});
})();
(function(){var B="Boolean",A="column-button",z="Function",y="qx.event.type.Data",w="statusbar",v="qx.ui.table.pane.CellEvent",u="function",t="PageUp",s="dataChanged",r='"',bQ="changeLocale",bP="changeSelection",bO="__uP",bN="qx.dynlocale",bM="Enter",bL="metaDataChanged",bK="on",bJ="_applyStatusBarVisible",bI="columnVisibilityMenuCreateStart",bH="blur",I="qx.ui.table.Table",J="columnVisibilityMenuCreateEnd",G="changeVisible",H="_applyResetSelectionOnHeaderClick",E="_applyMetaColumnCounts",F="focus",C="changeDataRowRenderer",D="changeHeaderCellHeight",Q="Escape",R="A",bj="changeSelectionModel",bf="Left",br="Down",bm="Integer",bD="_applyHeaderCellHeight",bx="visibilityChanged",Y="qx.ui.table.ITableModel",bG="orderChanged",bF="_applySelectionModel",bE="menu-button",W="menu",bb="_applyAdditionalStatusBarText",bd="_applyFocusCellOnMouseMove",bh="table",bk="_applyColumnVisibilityButtonVisible",bn="changeTableModel",bt="qx.event.type.Event",bz="tableWidthChanged",K="__uO",L="_applyHeaderCellsVisible",ba="Object",bq="_applyShowCellFocusIndicator",bp="resize",bo="verticalScrollBarChanged",bv="changeScrollY",bu="_applyTableModel",bl="End",bs="_applyKeepFirstVisibleRowComplete",n="widthChanged",by="one of one row",M="Home",N="_applyRowHeight",bg="F2",o="appear",q="Up",V="%1 rows",O="qx.ui.table.selection.Model",P="one row",T="PageDown",bi="%1 of %2 rows",bB="__uG",bA="__uN",bc="keypress",bC="changeRowHeight",X="Number",bw="header",S="__uF",U="qx.ui.table.IRowRenderer",p="Right",be="Space";
qx.Class.define(I,{extend:qx.ui.core.Widget,construct:function(bY,ca){qx.ui.core.Widget.call(this);
if(!ca){ca={};
}
if(ca.selectionManager){this.setNewSelectionManager(ca.selectionManager);
}
if(ca.selectionModel){this.setNewSelectionModel(ca.selectionModel);
}
if(ca.tableColumnModel){this.setNewTableColumnModel(ca.tableColumnModel);
}
if(ca.tablePane){this.setNewTablePane(ca.tablePane);
}
if(ca.tablePaneHeader){this.setNewTablePaneHeader(ca.tablePaneHeader);
}
if(ca.tablePaneScroller){this.setNewTablePaneScroller(ca.tablePaneScroller);
}
if(ca.tablePaneModel){this.setNewTablePaneModel(ca.tablePaneModel);
}
if(ca.columnMenu){this.setNewColumnMenu(ca.columnMenu);
}this._setLayout(new qx.ui.layout.VBox());
this.__uF=new qx.ui.container.Composite(new qx.ui.layout.HBox());
this._add(this.__uF,{flex:1});
this.setDataRowRenderer(new qx.ui.table.rowrenderer.Default(this));
this.__uG=this.getNewSelectionManager()(this);
this.setSelectionModel(this.getNewSelectionModel()(this));
this.setTableModel(bY||this.getEmptyTableModel());
this.setMetaColumnCounts([-1]);
this.setTabIndex(1);
this.addListener(bc,this._onKeyPress);
this.addListener(F,this._onFocusChanged);
this.addListener(bH,this._onFocusChanged);
var cb=new qx.ui.core.Widget().set({height:0});
this._add(cb);
cb.addListener(bp,this._onResize,this);
this.__uH=null;
this.__uI=null;
if(qx.core.Variant.isSet(bN,bK)){qx.locale.Manager.getInstance().addListener(bQ,this._onChangeLocale,this);
}this.initStatusBarVisible();
bY=this.getTableModel();

if(bY.init&&typeof (bY.init)==u){bY.init(this);
}},events:{"columnVisibilityMenuCreateStart":y,"columnVisibilityMenuCreateEnd":y,"tableWidthChanged":bt,"verticalScrollBarChanged":y,"cellClick":v,"cellDblclick":v,"cellContextmenu":v,"dataEdited":y},statics:{__uJ:{cellClick:1,cellDblclick:1,cellContextmenu:1}},properties:{appearance:{refine:true,init:bh},focusable:{refine:true,init:true},minWidth:{refine:true,init:50},selectable:{refine:true,init:false},selectionModel:{check:O,apply:bF,event:bj},tableModel:{check:Y,apply:bu,event:bn},rowHeight:{check:X,init:20,apply:N,event:bC},forceLineHeight:{check:B,init:true},headerCellsVisible:{check:B,init:true,apply:L},headerCellHeight:{check:bm,init:16,apply:bD,event:D,nullable:true},statusBarVisible:{check:B,init:true,apply:bJ},additionalStatusBarText:{nullable:true,init:null,apply:bb},columnVisibilityButtonVisible:{check:B,init:true,apply:bk},metaColumnCounts:{check:ba,apply:E},focusCellOnMouseMove:{check:B,init:false,apply:bd},rowFocusChangeModifiesSelection:{check:B,init:true},showCellFocusIndicator:{check:B,init:true,apply:bq},keepFirstVisibleRowComplete:{check:B,init:true,apply:bs},alwaysUpdateCells:{check:B,init:false},resetSelectionOnHeaderClick:{check:B,init:true,apply:H},dataRowRenderer:{check:U,init:null,nullable:true,event:C},modalCellEditorPreOpenFunction:{check:z,init:null,nullable:true},newColumnMenu:{check:z,init:function(){return new qx.ui.table.columnmenu.Button();
}},newSelectionManager:{check:z,init:function(dt){return new qx.ui.table.selection.Manager(dt);
}},newSelectionModel:{check:z,init:function(dW){return new qx.ui.table.selection.Model(dW);
}},newTableColumnModel:{check:z,init:function(em){return new qx.ui.table.columnmodel.Basic(em);
}},newTablePane:{check:z,init:function(eW){return new qx.ui.table.pane.Pane(eW);
}},newTablePaneHeader:{check:z,init:function(cg){return new qx.ui.table.pane.Header(cg);
}},newTablePaneScroller:{check:z,init:function(dD){return new qx.ui.table.pane.Scroller(dD);
}},newTablePaneModel:{check:z,init:function(dE){return new qx.ui.table.pane.Model(dE);
}}},members:{__uH:null,__uI:null,__uF:null,__uG:null,__uK:null,__uL:null,__uM:null,__uN:null,__uO:null,__uP:null,_createChildControlImpl:function(dq){var dr;

switch(dq){case w:dr=new qx.ui.basic.Label();
dr.set({allowGrowX:true});
this._add(dr);
break;
case A:dr=this.getNewColumnMenu()();
dr.set({focusable:false});
var ds=dr.factory(W,{table:this});
ds.addListener(o,this._initColumnMenu,this);
break;
}return dr||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,dq);
},_applySelectionModel:function(cE,cF){this.__uG.setSelectionModel(cE);

if(cF!=null){cF.removeListener(bP,this._onSelectionChanged,this);
}cE.addListener(bP,this._onSelectionChanged,this);
},_applyRowHeight:function(eQ,eR){var eS=this._getPaneScrollerArr();

for(var i=0;i<eS.length;i++){eS[i].updateVerScrollBarMaximum();
}},_applyHeaderCellsVisible:function(en,eo){var ep=this._getPaneScrollerArr();

for(var i=0;i<ep.length;i++){ep[i]._excludeChildControl(bw);
}},_applyHeaderCellHeight:function(cB,cC){var cD=this._getPaneScrollerArr();

for(var i=0;i<cD.length;i++){cD[i].getHeader().setHeight(cB);
}},getEmptyTableModel:function(){if(!this.__uP){this.__uP=new qx.ui.table.model.Simple();
this.__uP.setColumns([]);
this.__uP.setData([]);
}return this.__uP;
},_applyTableModel:function(fg,fh){this.getTableColumnModel().init(fg.getColumnCount(),this);

if(fh!=null){fh.removeListener(bL,this._onTableModelMetaDataChanged,this);
fh.removeListener(s,this._onTableModelDataChanged,this);
}fg.addListener(bL,this._onTableModelMetaDataChanged,this);
fg.addListener(s,this._onTableModelDataChanged,this);
this._updateStatusBar();
this._updateTableData(0,fg.getRowCount(),0,fg.getColumnCount());
this._onTableModelMetaDataChanged();
if(fh&&fg.init&&typeof (fg.init)==u){fg.init(this);
}},getTableColumnModel:function(){if(!this.__uO){var fa=this.__uO=this.getNewTableColumnModel()(this);
fa.addListener(bx,this._onColVisibilityChanged,this);
fa.addListener(n,this._onColWidthChanged,this);
fa.addListener(bG,this._onColOrderChanged,this);
var eY=this.getTableModel();
fa.init(eY.getColumnCount(),this);
var eX=this._getPaneScrollerArr();

for(var i=0;i<eX.length;i++){var fb=eX[i];
var fc=fb.getTablePaneModel();
fc.setTableColumnModel(fa);
}}return this.__uO;
},_applyStatusBarVisible:function(k,m){if(k){this._showChildControl(w);
}else{this._excludeChildControl(w);
}
if(k){this._updateStatusBar();
}},_applyAdditionalStatusBarText:function(c,d){this.__uK=c;
this._updateStatusBar();
},_applyColumnVisibilityButtonVisible:function(cy,cz){if(cy){this._showChildControl(A);
}else{this._excludeChildControl(A);
}},_applyMetaColumnCounts:function(eA,eB){var eI=eA;
var eC=this._getPaneScrollerArr();
var eG={};

if(eA>eB){var eK=qx.event.Registration.getManager(eC[0]);

for(var eL in qx.ui.table.Table.__uJ){eG[eL]={};
eG[eL].capture=eK.getListeners(eC[0],eL,true);
eG[eL].bubble=eK.getListeners(eC[0],eL,false);
}}this._cleanUpMetaColumns(eI.length);
var eH=0;

for(var i=0;i<eC.length;i++){var eM=eC[i];
var eJ=eM.getTablePaneModel();
eJ.setFirstColumnX(eH);
eJ.setMaxColumnCount(eI[i]);
eH+=eI[i];
}if(eI.length>eC.length){var eF=this.getTableColumnModel();

for(var i=eC.length;i<eI.length;i++){var eJ=this.getNewTablePaneModel()(eF);
eJ.setFirstColumnX(eH);
eJ.setMaxColumnCount(eI[i]);
eH+=eI[i];
var eM=this.getNewTablePaneScroller()(this);
eM.setTablePaneModel(eJ);
eM.addListener(bv,this._onScrollY,this);
for(eL in qx.ui.table.Table.__uJ){if(!eG[eL]){break;
}
if(eG[eL].capture&&eG[eL].capture.length>0){var eD=eG[eL].capture;

for(var i=0;i<eD.length;i++){var eE=eD[i].context;

if(!eE){eE=this;
}else if(eE==eC[0]){eE=eM;
}eM.addListener(eL,eD[i].handler,eE,true);
}}
if(eG[eL].bubble&&eG[eL].bubble.length>0){var eO=eG[eL].bubble;

for(var i=0;i<eO.length;i++){var eE=eO[i].context;

if(!eE){eE=this;
}else if(eE==eC[0]){eE=eM;
}eM.addListener(eL,eO[i].handler,eE,false);
}}}var eN=(i==eI.length-1)?1:0;
this.__uF.add(eM,{flex:eN});
eC=this._getPaneScrollerArr();
}}for(var i=0;i<eC.length;i++){var eM=eC[i];
var eP=(i==(eC.length-1));
eM.getHeader().setHeight(this.getHeaderCellHeight());
eM.setTopRightWidget(eP?this.getChildControl(A):null);
}
if(!this.isColumnVisibilityButtonVisible()){this._excludeChildControl(A);
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},_applyFocusCellOnMouseMove:function(fi,fj){var fk=this._getPaneScrollerArr();

for(var i=0;i<fk.length;i++){fk[i].setFocusCellOnMouseMove(fi);
}},_applyShowCellFocusIndicator:function(dX,dY){var ea=this._getPaneScrollerArr();

for(var i=0;i<ea.length;i++){ea[i].setShowCellFocusIndicator(dX);
}},_applyKeepFirstVisibleRowComplete:function(cH,cI){var cJ=this._getPaneScrollerArr();

for(var i=0;i<cJ.length;i++){cJ[i].onKeepFirstVisibleRowCompleteChanged();
}},_applyResetSelectionOnHeaderClick:function(ej,ek){var el=this._getPaneScrollerArr();

for(var i=0;i<el.length;i++){el[i].setResetSelectionOnHeaderClick(ej);
}},getSelectionManager:function(){return this.__uG;
},_getPaneScrollerArr:function(){return this.__uF.getChildren();
},getPaneScroller:function(dM){return this._getPaneScrollerArr()[dM];
},_cleanUpMetaColumns:function(fl){var fm=this._getPaneScrollerArr();

if(fm!=null){for(var i=fm.length-1;i>=fl;i--){fm[i].destroy();
}}},_onChangeLocale:function(a){this.updateContent();
this._updateStatusBar();
},_onSelectionChanged:function(co){var cp=this._getPaneScrollerArr();

for(var i=0;i<cp.length;i++){cp[i].onSelectionChanged();
}this._updateStatusBar();
},_onTableModelMetaDataChanged:function(cl){var cm=this._getPaneScrollerArr();

for(var i=0;i<cm.length;i++){cm[i].onTableModelMetaDataChanged();
}this._updateStatusBar();
},_onTableModelDataChanged:function(ey){var ez=ey.getData();
this._updateTableData(ez.firstRow,ez.lastRow,ez.firstColumn,ez.lastColumn,ez.removeStart,ez.removeCount);
},_updateTableData:function(cq,cr,cs,ct,cu,cv){var cw=this._getPaneScrollerArr();
if(cv){this.getSelectionModel().removeSelectionInterval(cu,cu+cv);
}
for(var i=0;i<cw.length;i++){cw[i].onTableModelDataChanged(cq,cr,cs,ct);
}var cx=this.getTableModel().getRowCount();

if(cx!=this.__uL){this.__uL=cx;
this._updateScrollBarVisibility();
this._updateStatusBar();
}},_onScrollY:function(cj){if(!this.__uM){this.__uM=true;
var ck=this._getPaneScrollerArr();

for(var i=0;i<ck.length;i++){ck[i].setScrollY(cj.getData());
}this.__uM=false;
}},_onKeyPress:function(dN){if(!this.getEnabled()){return;
}var dU=this.__uI;
var dR=true;
var dV=dN.getKeyIdentifier();

if(this.isEditing()){if(dN.getModifiers()==0){switch(dV){case bM:this.stopEditing();
var dU=this.__uI;
this.moveFocusedCell(0,1);

if(this.__uI!=dU){dR=this.startEditing();
}break;
case Q:this.cancelEditing();
this.focus();
break;
default:dR=false;
break;
}}}else{if(dN.isCtrlPressed()){dR=true;

switch(dV){case R:var dS=this.getTableModel().getRowCount();

if(dS>0){this.getSelectionModel().setSelectionInterval(0,dS-1);
}break;
default:dR=false;
break;
}}else{switch(dV){case be:this.__uG.handleSelectKeyDown(this.__uI,dN);
break;
case bg:case bM:this.startEditing();
dR=true;
break;
case M:this.setFocusedCell(this.__uH,0,true);
break;
case bl:var dS=this.getTableModel().getRowCount();
this.setFocusedCell(this.__uH,dS-1,true);
break;
case bf:this.moveFocusedCell(-1,0);
break;
case p:this.moveFocusedCell(1,0);
break;
case q:this.moveFocusedCell(0,-1);
break;
case br:this.moveFocusedCell(0,1);
break;
case t:case T:var dQ=this.getPaneScroller(0);
var dT=dQ.getTablePane();
var dP=this.getRowHeight();
var dO=(dV==t)?-1:1;
dS=dT.getVisibleRowCount()-1;
dQ.setScrollY(dQ.getScrollY()+dO*dS*dP);
this.moveFocusedCell(0,dO*dS);
break;
default:dR=false;
}}}
if(dU!=this.__uI&&this.getRowFocusChangeModifiesSelection()){this.__uG.handleMoveKeyDown(this.__uI,dN);
}
if(dR){dN.preventDefault();
dN.stopPropagation();
}},_onFocusChanged:function(cX){var cY=this._getPaneScrollerArr();

for(var i=0;i<cY.length;i++){cY[i].onFocusChanged();
}},_onColVisibilityChanged:function(fd){var fe=this._getPaneScrollerArr();

for(var i=0;i<fe.length;i++){fe[i].onColVisibilityChanged();
}var ff=fd.getData();

if(this.__uN!=null&&ff.col!=null&&ff.visible!=null){this.__uN[ff.col].setVisible(ff.visible);
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},_onColWidthChanged:function(eT){var eU=this._getPaneScrollerArr();

for(var i=0;i<eU.length;i++){var eV=eT.getData();
eU[i].setColumnWidth(eV.col,eV.newWidth);
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},_onColOrderChanged:function(eb){var ec=this._getPaneScrollerArr();

for(var i=0;i<ec.length;i++){ec[i].onColOrderChanged();
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},getTablePaneScrollerAtPageX:function(cK){var cL=this._getMetaColumnAtPageX(cK);
return (cL!=-1)?this.getPaneScroller(cL):null;
},setFocusedCell:function(da,db,dc){if(!this.isEditing()&&(da!=this.__uH||db!=this.__uI)){if(da===null){da=0;
}this.__uH=da;
this.__uI=db;
var dd=this._getPaneScrollerArr();

for(var i=0;i<dd.length;i++){dd[i].setFocusedCell(da,db);
}
if(da!==null&&dc){this.scrollCellVisible(da,db);
}}},resetSelection:function(){this.getSelectionModel().resetSelection();
},resetCellFocus:function(){this.setFocusedCell(null,null,false);
},getFocusedColumn:function(){return this.__uH;
},getFocusedRow:function(){return this.__uI;
},highlightFocusedRow:function(j){this.getDataRowRenderer().setHighlightFocusRow(j);
},clearFocusedRowHighlight:function(cM){if(cM){var cO=cM.getRelatedTarget();

if(cO instanceof qx.ui.table.pane.Pane||cO instanceof qx.ui.table.pane.FocusIndicator){return;
}}this.resetCellFocus();
var cN=this._getPaneScrollerArr();

for(var i=0;i<cN.length;i++){cN[i].onFocusChanged();
}},moveFocusedCell:function(di,dj){var dn=this.__uH;
var dp=this.__uI;

if(dn===null||dp===null){return;
}
if(di!=0){var dm=this.getTableColumnModel();
var x=dm.getVisibleX(dn);
var dl=dm.getVisibleColumnCount();
x=qx.lang.Number.limit(x+di,0,dl-1);
dn=dm.getVisibleColumnAtX(x);
}
if(dj!=0){var dk=this.getTableModel();
dp=qx.lang.Number.limit(dp+dj,0,dk.getRowCount()-1);
}this.setFocusedCell(dn,dp,true);
},scrollCellVisible:function(dI,dJ){var dK=this.getTableColumnModel();
var x=dK.getVisibleX(dI);
var dL=this._getMetaColumnAtColumnX(x);

if(dL!=-1){this.getPaneScroller(dL).scrollCellVisible(dI,dJ);
}},isEditing:function(){if(this.__uH!=null){var x=this.getTableColumnModel().getVisibleX(this.__uH);
var dC=this._getMetaColumnAtColumnX(x);
return this.getPaneScroller(dC).isEditing();
}return false;
},startEditing:function(){if(this.__uH!=null){var x=this.getTableColumnModel().getVisibleX(this.__uH);
var df=this._getMetaColumnAtColumnX(x);
var de=this.getPaneScroller(df).startEditing();
return de;
}return false;
},stopEditing:function(){if(this.__uH!=null){var x=this.getTableColumnModel().getVisibleX(this.__uH);
var cA=this._getMetaColumnAtColumnX(x);
this.getPaneScroller(cA).stopEditing();
}},cancelEditing:function(){if(this.__uH!=null){var x=this.getTableColumnModel().getVisibleX(this.__uH);
var cG=this._getMetaColumnAtColumnX(x);
this.getPaneScroller(cG).cancelEditing();
}},updateContent:function(){var du=this._getPaneScrollerArr();

for(var i=0;i<du.length;i++){du[i].getTablePane().updateContent(true);
}},blockHeaderElements:function(){var b=this._getPaneScrollerArr();

for(var i=0;i<b.length;i++){b[i].getHeader().getBlocker().blockContent(20);
}this.getChildControl(A).getBlocker().blockContent(20);
},unblockHeaderElements:function(){var cn=this._getPaneScrollerArr();

for(var i=0;i<cn.length;i++){cn[i].getHeader().getBlocker().unblockContent();
}this.getChildControl(A).getBlocker().unblockContent();
},_getMetaColumnAtPageX:function(dF){var dG=this._getPaneScrollerArr();

for(var i=0;i<dG.length;i++){var dH=dG[i].getContainerLocation();

if(dF>=dH.left&&dF<=dH.right){return i;
}}return -1;
},_getMetaColumnAtColumnX:function(cc){var ce=this.getMetaColumnCounts();
var cf=0;

for(var i=0;i<ce.length;i++){var cd=ce[i];
cf+=cd;

if(cd==-1||cc<cf){return i;
}}return -1;
},_updateStatusBar:function(){var cT=this.getTableModel();

if(this.getStatusBarVisible()){var cU=this.getSelectionModel().getSelectedCount();
var cW=cT.getRowCount();
var cV;

if(cW>=0){if(cU==0){cV=this.trn(P,V,cW,cW);
}else{cV=this.trn(by,bi,cW,cU,cW);
}}
if(this.__uK){if(cV){cV+=this.__uK;
}else{cV=this.__uK;
}}
if(cV){this.getChildControl(w).setValue(cV);
}}},_updateScrollerWidths:function(){var e=this._getPaneScrollerArr();

for(var i=0;i<e.length;i++){var g=(i==(e.length-1));
var h=e[i].getTablePaneModel().getTotalWidth();
e[i].setPaneWidth(h);
var f=g?1:0;
e[i].setLayoutProperties({flex:f});
}},_updateScrollBarVisibility:function(){if(!this.getBounds()){return;
}var et=qx.ui.table.pane.Scroller.HORIZONTAL_SCROLLBAR;
var ew=qx.ui.table.pane.Scroller.VERTICAL_SCROLLBAR;
var eq=this._getPaneScrollerArr();
var es=false;
var ev=false;

for(var i=0;i<eq.length;i++){var ex=(i==(eq.length-1));
var er=eq[i].getNeededScrollBars(es,!ex);

if(er&et){es=true;
}
if(ex&&(er&ew)){ev=true;
}}for(var i=0;i<eq.length;i++){var ex=(i==(eq.length-1));
var eu;
eq[i].setHorizontalScrollBarVisible(es);
if(ex){eu=eq[i].getVerticalScrollBarVisible();
}eq[i].setVerticalScrollBarVisible(ex&&ev);
if(ex&&ev!=eu){this.fireDataEvent(bo,ev);
}}},_initColumnMenu:function(){var dx=this.getTableModel();
var dy=this.getTableColumnModel();
var dz=this.getChildControl(A);
dz.empty();
var dw=dz.getMenu();
var dA={table:this,menu:dw,columnButton:dz};
this.fireDataEvent(bI,dA);
this.__uN={};

for(var dB=0,l=dx.getColumnCount();dB<l;dB++){var dv=dz.factory(bE,{text:dx.getColumnName(dB),column:dB,bVisible:dy.isColumnVisible(dB)});
qx.core.Assert.assertInterface(dv,qx.ui.table.IColumnMenuItem);
dv.addListener(G,this._createColumnVisibilityCheckBoxHandler(dB),this);
this.__uN[dB]=dv;
}var dA={table:this,menu:dw,columnButton:dz};
this.fireDataEvent(J,dA);
},_createColumnVisibilityCheckBoxHandler:function(ed){return function(bR){var bS=this.getTableColumnModel();
bS.setColumnVisible(ed,bR.getData());
};
},setColumnWidth:function(dg,dh){this.getTableColumnModel().setColumnWidth(dg,dh);
},_onResize:function(){this.fireEvent(bz);
this._updateScrollerWidths();
this._updateScrollBarVisibility();
},addListener:function(ee,ef,self,eg){if(this.self(arguments).__uJ[ee]){var ei=[ee];

for(var i=0,eh=this._getPaneScrollerArr();i<eh.length;i++){ei.push(eh[i].addListener.apply(eh[i],arguments));
}return ei.join(r);
}else{return qx.ui.core.Widget.prototype.addListener.call(this,ee,ef,self,eg);
}},removeListener:function(cP,cQ,self,cR){if(this.self(arguments).__uJ[cP]){for(var i=0,cS=this._getPaneScrollerArr();i<cS.length;i++){cS[i].removeListener.apply(cS[i],arguments);
}}else{qx.ui.core.Widget.prototype.removeListener.call(this,cP,cQ,self,cR);
}},removeListenerById:function(bT){var bX=bT.split(r);
var bW=bX.shift();

if(this.self(arguments).__uJ[bW]){var bV=true;

for(var i=0,bU=this._getPaneScrollerArr();i<bU.length;i++){bV=bU[i].removeListenerById.call(bU[i],bX[i])&&bV;
}return bV;
}else{return qx.ui.core.Widget.prototype.removeListenerById.call(this,bT);
}},destroy:function(){this.getChildControl(A).getMenu().destroy();
qx.ui.core.Widget.prototype.destroy.call(this);
}},destruct:function(){if(qx.core.Variant.isSet(bN,bK)){qx.locale.Manager.getInstance().removeListener(bQ,this._onChangeLocale,this);
}var ci=this.getSelectionModel();

if(ci){ci.dispose();
}var ch=this.getDataRowRenderer();

if(ch){ch.dispose();
}this._cleanUpMetaColumns(0);
this.getTableColumnModel().dispose();
this._disposeObjects(bB,S,bO,bO,K);
this._disposeMap(bA);
}});
})();

});