qx.$$packageData['cffb645b55e5']={"resources":{"qx/icon/Tango/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/media-audio.png":[16,16,"png","qx"],"qx/icon/Tango/16/status/dialog-warning.png":[16,16,"png","qx"]}};
(function(){var a="qx.ui.table.ICellRenderer";
qx.Interface.define(a,{members:{createDataCellHtml:function(b,c){return true;
}}});
})();
(function(){var j="",i="px;",h=".qooxdoo-table-cell {",g="qooxdoo-table-cell",f='" ',e="nowrap",d="default",c="qx.client",b="}",a="width:",G=".qooxdoo-table-cell-right { text-align:right } ",F="0px 6px",E='<div class="',D="0px",C="height:",B="1px solid ",A=".qooxdoo-table-cell-bold { font-weight:bold } ",z="table-row-line",y='>',x="mshtml",q='</div>',r="ellipsis",o="content-box",p='left:',m="qx.ui.table.cellrenderer.Abstract",n='" style="',k="abstract",l="none",s="hidden",t="} ",v='px;',u=".qooxdoo-table-cell-italic { font-style:italic} ",w="absolute";
qx.Class.define(m,{type:k,implement:qx.ui.table.ICellRenderer,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
var S=qx.ui.table.cellrenderer.Abstract;

if(!S.__kW){var U=qx.theme.manager.Color.getInstance();
S.__kW=arguments.callee.self;
var T=h+
qx.bom.element.Style.compile({position:w,top:D,overflow:s,whiteSpace:e,borderRight:B+U.resolve(z),padding:F,cursor:d,textOverflow:r,userSelect:l})+t+G+u+A;

if(!qx.core.Variant.isSet(c,x)){T+=h+qx.bom.element.BoxSizing.compile(o)+b;
}S.__kW.stylesheet=qx.bom.Stylesheet.createElement(T);
}},members:{_insetX:6+6+1,_insetY:0,_getCellClass:function(J){return g;
},_getCellStyle:function(H){return H.style||j;
},_getCellAttributes:function(R){return j;
},_getContentHtml:function(I){return I.value||j;
},_getCellSizeStyle:function(M,N,O,P){var Q=j;

if(qx.bom.client.Feature.CONTENT_BOX){M-=O;
N-=P;
}Q+=a+Math.max(M,0)+i;
Q+=C+Math.max(N,0)+i;
return Q;
},createDataCellHtml:function(K,L){L.push(E,this._getCellClass(K),n,p,K.styleLeft,v,this._getCellSizeStyle(K.styleWidth,K.styleHeight,this._insetX,this._insetY),this._getCellStyle(K),f,this._getCellAttributes(K),y+this._getContentHtml(K),q);
}}});
})();
(function(){var b="qx.ui.table.IColumnMenuItem",a="qx.event.type.Data";
qx.Interface.define(b,{properties:{visible:{}},events:{changeVisible:a}});
})();
(function(){var i="icon",h="label",g="String",f="sort-icon",e="_applySortIcon",d="_applyIcon",c="table-header-cell",b="qx.ui.table.headerrenderer.HeaderCell",a="_applyLabel";
qx.Class.define(b,{extend:qx.ui.container.Composite,construct:function(){arguments.callee.base.call(this);
var n=new qx.ui.layout.Grid();
n.setRowFlex(0,1);
n.setColumnFlex(1,1);
n.setColumnFlex(2,1);
this.setLayout(n);
},properties:{appearance:{refine:true,init:c},label:{check:g,init:null,nullable:true,apply:a},sortIcon:{check:g,init:null,nullable:true,apply:e,themeable:true},icon:{check:g,init:null,nullable:true,apply:d}},members:{_applyLabel:function(o,p){if(o){this._showChildControl(h).setValue(o);
}else{this._excludeChildControl(h);
}},_applySortIcon:function(j,k){if(j){this._showChildControl(f).setSource(j);
}else{this._excludeChildControl(f);
}},_applyIcon:function(l,m){if(l){this._showChildControl(i).setSource(l);
}else{this._excludeChildControl(i);
}},_createChildControlImpl:function(q){var r;

switch(q){case h:r=new qx.ui.basic.Label(this.getLabel()).set({anonymous:true,allowShrinkX:true});
this._add(r,{row:0,column:1});
break;
case f:r=new qx.ui.basic.Image(this.getSortIcon());
r.setAnonymous(true);
this._add(r,{row:0,column:2});
break;
case i:r=new qx.ui.basic.Image(this.getIcon()).set({anonymous:true,allowShrinkX:true});
this._add(r,{row:0,column:0});
break;
}return r||arguments.callee.base.call(this,q);
}}});
})();
(function(){var h="qx.event.type.Data",g="EVENT_TYPE_DATA_CHANGED",f="qx.ui.table.ITableModel",e="New code should not use this. Instead, use the text string 'dataChanged' literally.",d="New code should not use this. Instead, use the text string 'metaDataChanged' literally.",c="qx.event.type.Event",b="EVENT_TYPE_META_DATA_CHANGED";
qx.Interface.define(f,{events:{"dataChanged":h,"metaDataChanged":c,"sorted":h},statics:{EVENT_TYPE_DATA_CHANGED:"dataChanged",EVENT_TYPE_META_DATA_CHANGED:"metaDataChanged"},members:{getRowCount:function(){},getRowData:function(j){},getColumnCount:function(){},getColumnId:function(y){},getColumnIndexById:function(i){},getColumnName:function(a){},isColumnEditable:function(t){},isColumnSortable:function(q){},sortByColumn:function(u,v){},getSortColumnIndex:function(){},isSortAscending:function(){},prefetchRows:function(z,A){},getValue:function(w,x){},getValueById:function(r,s){},setValue:function(k,l,m){},setValueById:function(n,o,p){}}});
qx.log.Logger.deprecatedConstantWarning(qx.ui.table.ITableModel,g,e);
qx.log.Logger.deprecatedConstantWarning(qx.ui.table.ITableModel,b,d);
})();
(function(){var a="qx.ui.table.IColumnMenuButton";
qx.Interface.define(a,{properties:{menu:{}},members:{factory:function(b,c){return true;
},empty:function(){return true;
}}});
})();
(function(){var h="",g="number",f="Boolean",e="qx.ui.table.cellrenderer.Default",d=" qooxdoo-table-cell-bold",c=" qooxdoo-table-cell-right",b=" qooxdoo-table-cell-italic",a="string";
qx.Class.define(e,{extend:qx.ui.table.cellrenderer.Abstract,statics:{STYLEFLAG_ALIGN_RIGHT:1,STYLEFLAG_BOLD:2,STYLEFLAG_ITALIC:4},properties:{useAutoAlign:{check:f,init:true}},members:{_getStyleFlags:function(i){if(this.getUseAutoAlign()){if(typeof i.value==g){return qx.ui.table.cellrenderer.Default.STYLEFLAG_ALIGN_RIGHT;
}}},_getCellClass:function(j){var k=arguments.callee.base.call(this,j);

if(!k){return h;
}var l=this._getStyleFlags(j);

if(l&qx.ui.table.cellrenderer.Default.STYLEFLAG_ALIGN_RIGHT){k+=c;
}
if(l&qx.ui.table.cellrenderer.Default.STYLEFLAG_BOLD){k+=d;
}
if(l&qx.ui.table.cellrenderer.Default.STYLEFLAG_ITALIC){k+=b;
}return k;
},_getContentHtml:function(p){return qx.bom.String.escape(this._formatValue(p));
},_formatValue:function(m){var o=m.value;

if(o==null){return h;
}
if(typeof o==a){return o;
}else if(typeof o==g){if(!qx.ui.table.cellrenderer.Default._numberFormat){qx.ui.table.cellrenderer.Default._numberFormat=new qx.util.format.NumberFormat();
qx.ui.table.cellrenderer.Default._numberFormat.setMaximumFractionDigits(2);
}var n=qx.ui.table.cellrenderer.Default._numberFormat.format(o);
}else if(o instanceof Date){n=qx.util.format.DateFormat.getDateInstance().format(o);
}else{n=o;
}return n;
}}});
})();
(function(){var s="",r="==",q=">",p="between",o="<",n="regex",m="!between",l=">=",k="!=",j="<=",c="font-weight",h=";",f="text-align",b='g',a=":",e="qx.ui.table.cellrenderer.Conditional",d="color",g="font-style";
qx.Class.define(e,{extend:qx.ui.table.cellrenderer.Default,construct:function(bc,bd,be,bf){arguments.callee.base.call(this);
this.numericAllowed=[r,k,q,o,l,j];
this.betweenAllowed=[p,m];
this.conditions=[];
this.__vE=bc||s;
this.__vF=bd||s;
this.__vG=be||s;
this.__vH=bf||s;
},members:{__vE:null,__vF:null,__vG:null,__vH:null,__vI:function(ba,bb){if(ba[1]!=null){bb[f]=ba[1];
}
if(ba[2]!=null){bb[d]=ba[2];
}
if(ba[3]!=null){bb[g]=ba[3];
}
if(ba[4]!=null){bb[c]=ba[4];
}},addNumericCondition:function(I,J,K,L,M,N,O){var P=null;

if(qx.lang.Array.contains(this.numericAllowed,I)){if(J!=null){P=[I,K,L,M,N,J,O];
}}
if(P!=null){this.conditions.push(P);
}else{throw new Error("Condition not recognized or value is null!");
}},addBetweenCondition:function(Q,R,S,T,U,V,W,X){if(qx.lang.Array.contains(this.betweenAllowed,Q)){if(R!=null&&S!=null){var Y=[Q,T,U,V,W,R,S,X];
}}
if(Y!=null){this.conditions.push(Y);
}else{throw new Error("Condition not recognized or value1/value2 is null!");
}},addRegex:function(B,C,D,E,F,G){if(B!=null){var H=[n,C,D,E,F,B,G];
}
if(H!=null){this.conditions.push(H);
}else{throw new Error("regex cannot be null!");
}},_getCellStyle:function(t){if(!this.conditions.length){return t.style||s;
}var y=t.table.getTableModel();
var i;
var A;
var u;
var w={"text-align":this.__vE,"color":this.__vF,"font-style":this.__vG,"font-weight":this.__vH};

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
}if(A==true){this.__vI(this.conditions[i],w);
}}var z=[];

for(var x in w){if(w[x]){z.push(x,a,w[x],h);
}}return z.join(s);
}},destruct:function(){this.numericAllowed=this.betweenAllowed=this.conditions=null;
}});
})();
(function(){var a="qx.ui.table.ICellEditorFactory";
qx.Interface.define(a,{members:{createCellEditor:function(c){return true;
},getCellEditorValue:function(b){return true;
}}});
})();
(function(){var f="",e="Function",d="abstract",c="number",b="appear",a="qx.ui.table.celleditor.AbstractField";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.ui.table.ICellEditorFactory,type:d,properties:{validationFunction:{check:e,nullable:true,init:null}},members:{_createEditor:function(){throw new Error("Abstract method call!");
},createCellEditor:function(j){var k=this._createEditor();
k.originalValue=j.value;

if(j.value===null||j.value===undefined){j.value=f;
}k.setValue(f+j.value);
k.addListener(b,function(){k.selectAllText();
});
return k;
},getCellEditorValue:function(g){var i=g.getValue();
var h=this.getValidationFunction();

if(h){i=h(i,g.originalValue);
}
if(typeof g.originalValue==c){i=parseFloat(i);
}return i;
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
qx.Class.define(b,{extend:qx.ui.table.headerrenderer.Default,construct:function(d,e){arguments.callee.base.call(this);

if(d==null){d=c;
}this.setIconUrl(d);

if(e){this.setToolTip(e);
}},properties:{iconUrl:{check:a,init:c}},members:{updateHeaderCell:function(f,g){arguments.callee.base.call(this,f,g);
g.setIcon(this.getIconUrl());
}}});
})();
(function(){var b="Integer",a="qx.ui.table.pane.CellEvent";
qx.Class.define(a,{extend:qx.event.type.Mouse,properties:{row:{check:b,nullable:true},column:{check:b,nullable:true}},members:{init:function(e,f,g,h){f.clone(this);
this.setBubbles(false);

if(g!=null){this.setRow(g);
}else{this.setRow(e._getRowForPagePos(this.getDocumentLeft(),this.getDocumentTop()));
}
if(h!=null){this.setColumn(h);
}else{this.setColumn(e._getColumnForPageX(this.getDocumentLeft()));
}},clone:function(c){var d=arguments.callee.base.call(this,c);
d.set({row:this.getRow(),column:this.getColumn()});
return d;
}}});
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
(function(){var u="loading ...",t="Title",s="Explicit",r="Year",q="icon/16/mimetypes/media-audio.png",p="env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=",o="2*",n="showcase.page.table.Content.saveResult",m="this",l="1*",d="http://query.yahooapis.com/v1/public/yql?q=",k="icon/16/apps/office-calendar.png",g="Chart Pos.",c="0",b="icon/16/status/dialog-warning.png",f="Artist",e="Popular Music Tracks",h="showcase.page.table.Content",a="select * from music.track.popular",j="&format=json&diagnostics=false&";
qx.Class.define(h,{extend:showcase.page.AbstractDesktopContent,construct:function(M){arguments.callee.base.call(this,M);
},statics:{saveResult:function(L){this._result=L;
}},members:{_addWindowContent:function(A){var F=[[0,u,u,0,false]];
var D=this._tableModel=new qx.ui.table.model.Simple();
D.setColumns([g,t,f,r,s]);
D.setData(F);
D.setColumnEditable(1,true);
D.setColumnEditable(2,true);
D.setColumnSortable(3,true);
var C={tableColumnModel:function(v){return new qx.ui.table.columnmodel.Resize(v);
}};
var G=new qx.ui.table.Table(D,C);
G.set({width:540,height:400,decorator:null,headerCellHeight:null});
G.getSelectionModel().setSelectionMode(qx.ui.table.selection.Model.MULTIPLE_INTERVAL_SELECTION);
var E=G.getTableColumnModel();
E.setDataCellRenderer(0,new qx.ui.table.cellrenderer.Number());
E.setDataCellRenderer(3,new qx.ui.table.cellrenderer.Number());
E.setDataCellRenderer(4,new qx.ui.table.cellrenderer.Boolean());
E.setHeaderCellRenderer(1,new qx.ui.table.headerrenderer.Icon(q,t));
E.setHeaderCellRenderer(3,new qx.ui.table.headerrenderer.Icon(k,r));
E.setHeaderCellRenderer(4,new qx.ui.table.headerrenderer.Icon(b,s));
var B=E.getBehavior();
B.set(1,{width:o,minWidth:60});
B.set(2,{width:l,minWidth:60});
B.setWidth(0,80);
B.setWidth(3,70);
B.setWidth(4,85);
A.setCaption(e);
A.setLayout(new qx.ui.layout.Grow());
A.add(G);
this._loadData(D);
},_loadData:function(w){var y=a;
var x=d+encodeURIComponent(y)+j+p+n;
var z=new qx.io.ScriptLoader();
z.load(x,function(){var J=showcase.page.table.Content._result;
var I=[];
var K=J.query.results.Track;

for(var i=0;i<K.length;i++){var H=[];
H.push(parseInt(K[i].ItemInfo.ChartPosition[m]));
H.push(K[i].title);
H.push(K[i].Artist.name);
H.push(parseInt(K[i].releaseYear));
H.push(K[i].explicit!==c);
I.push(H);
}w.setData(I);
});
}}});
})();
(function(){var g="Integer",f="Escape",d="keypress",c="Enter",b="excluded",a="qx.ui.table.pane.FocusIndicator";
qx.Class.define(a,{extend:qx.ui.container.Composite,construct:function(q){arguments.callee.base.call(this);
this.__nJ=q;
this.setKeepActive(true);
this.addListener(d,this._onKeyPress,this);
},properties:{visibility:{refine:true,init:b},row:{check:g,nullable:true},column:{check:g,nullable:true}},members:{__nJ:null,_onKeyPress:function(e){var h=e.getKeyIdentifier();

if(h!==f&&h!==c){e.stopPropagation();
}},moveToCell:function(i,j){if(i==null){this.hide();
this.setRow(null);
this.setColumn(null);
}else{var k=this.__nJ.getTablePaneModel().getX(i);

if(k==-1){this.hide();
this.setRow(null);
this.setColumn(null);
}else{var p=this.__nJ.getTable();
var n=p.getTableColumnModel();
var o=this.__nJ.getTablePaneModel();
var m=this.__nJ.getTablePane().getFirstVisibleRow();
var l=p.getRowHeight();
this.setUserBounds(o.getColumnLeft(i)-2,(j-m)*l-2,n.getColumnWidth(i)+3,l+3);
this.show();
this.setRow(j);
this.setColumn(i);
}}}},destruct:function(){this.__nJ=null;
}});
})();
(function(){var cb="",ca="!",bY="'!",bX="'",bW="Expected '",bV="' (rgb(",bU=",",bT=")), but found value '",bS="Event (",bR="Expected value to be the CSS color '",dh="' but found ",dg="The value '",df="qx.core.Object",de="Expected value to be an array but found ",dd=") was fired.",dc="Expected value to be an integer >= 0 but found ",db="' to be not equal with '",da="' to '",cY="qx.ui.core.Widget",cX="Called assertTrue with '",ci="Expected value to be a map but found ",cj="The function did not raise an exception!",cg="Expected value to be undefined but found ",ch="Expected value to be a DOM element but found  '",ce="Expected value to be a regular expression but found ",cf="' to implement the interface '",cc="Expected value to be null but found ",cd="Invalid argument 'type'",cq="Called assert with 'false'",cr="Assertion error! ",cD="Expected value to be a string but found ",cz="null",cL="' but found '",cG="' must must be a key of the map '",cT="The String '",cQ="Expected value not to be undefined but found ",cv="qx.util.ColorUtil",cW=": ",cV="The raised exception does not have the expected type! ",cU=") not fired.",cu="qx.core.Assert",cx="Expected value to be typeof object but found ",cy="' (identical) but found '",cB="' must have any of the values defined in the array '",cE="Expected value to be a number but found ",cH="Called assertFalse with '",cN="]",cS="Expected value to be a qooxdoo object but found ",ck="' arguments.",cl="Expected value not to be null but found ",cw="Array[",cK="' does not match the regular expression '",cJ="' to be not identical with '",cI="' arguments but found '",cP="', which cannot be converted to a CSS color!",cO="Expected object '",cF="qx.core.AssertionError",cM="Expected value to be a boolean but found ",bO="))!",cR="Expected value to be a qooxdoo widget but found ",cm="Expected value '%1' to be in the range '%2'..'%3'!",cn="Expected value to be typeof '",cA="Expected value to be typeof function but found ",bP="Expected value to be an integer but found ",bQ="Called fail().",ct="The parameter 're' must be a string or a regular expression.",co="Expected value to be a number >= 0 but found ",cp="Expected value to be instanceof '",cs="Wrong number of arguments given. Expected '",cC="object";
qx.Class.define(cu,{statics:{__oI:true,__oJ:function(dC,dD){var dE=cb;

for(var i=1,l=arguments.length;i<l;i++){dE=dE+this.__oK(arguments[i]);
}var dG=cr+dC+cW+dE;

if(this.__oI){qx.Bootstrap.error(dG);
}
if(qx.Class.isDefined(cF)){var dF=new qx.core.AssertionError(dC,dE);

if(this.__oI){qx.Bootstrap.error("Stack trace: \n"+dF.getStackTrace());
}throw dF;
}else{throw new Error(dG);
}},__oK:function(bE){var bF;

if(bE===null){bF=cz;
}else if(qx.lang.Type.isArray(bE)&&bE.length>10){bF=cw+bE.length+cN;
}else if((bE instanceof Object)&&(bE.toString==null)){bF=qx.lang.Json.stringify(bE,null,2);
}else{try{bF=bE.toString();
}catch(e){bF=cb;
}}return bF;
},assert:function(Q,R){Q==true||this.__oJ(R||cb,cq);
},fail:function(bD){this.__oJ(bD||cb,bQ);
},assertTrue:function(bv,bw){(bv===true)||this.__oJ(bw||cb,cX,bv,bX);
},assertFalse:function(x,y){(x===false)||this.__oJ(y||cb,cH,x,bX);
},assertEquals:function(bx,by,bz){bx==by||this.__oJ(bz||cb,bW,bx,cL,by,bY);
},assertNotEquals:function(dL,dM,dN){dL!=dM||this.__oJ(dN||cb,bW,dL,db,dM,bY);
},assertIdentical:function(n,o,p){n===o||this.__oJ(p||cb,bW,n,cy,o,bY);
},assertNotIdentical:function(ds,dt,du){ds!==dt||this.__oJ(du||cb,bW,ds,cJ,dt,bY);
},assertNotUndefined:function(U,V){U!==undefined||this.__oJ(V||cb,cQ,U,ca);
},assertUndefined:function(br,bs){br===undefined||this.__oJ(bs||cb,cg,br,ca);
},assertNotNull:function(dV,dW){dV!==null||this.__oJ(dW||cb,cl,dV,ca);
},assertNull:function(dJ,dK){dJ===null||this.__oJ(dK||cb,cc,dJ,ca);
},assertJsonEquals:function(I,J,K){this.assertEquals(qx.lang.Json.stringify(I),qx.lang.Json.stringify(J),K);
},assertMatch:function(bG,bH,bI){this.assertString(bG);
this.assert(qx.lang.Type.isRegExp(bH)||qx.lang.Type.isString(bH),ct);
bG.search(bH)>=0||this.__oJ(bI||cb,cT,bG,cK,bH.toString(),bY);
},assertArgumentsCount:function(W,X,Y,ba){var bb=W.length;
(bb>=X&&bb<=Y)||this.__oJ(ba||cb,cs,X,da,Y,cI,arguments.length,ck);
},assertEventFired:function(dv,event,dw,dx,dy){var dA=false;
var dz=function(e){if(dx){dx.call(dv,e);
}dA=true;
};
var dB=dv.addListener(event,dz,dv);
dw.call();
dA===true||this.__oJ(dy||cb,bS,event,cU);
dv.removeListenerById(dB);
},assertEventNotFired:function(f,event,g,h){var k=false;
var j=function(e){k=true;
};
var m=f.addListener(event,j,f);
g.call();
k===false||this.__oJ(h||cb,bS,event,dd);
f.removeListenerById(m);
},assertException:function(L,M,N,O){var M=M||Error;
var P;

try{this.__oI=false;
L();
}catch(d){P=d;
}finally{this.__oI=true;
}
if(P==null){this.__oJ(O||cb,cj);
}P instanceof M||this.__oJ(O||cb,cV,M);

if(N){this.assertMatch(P.toString(),N,O);
}},assertInArray:function(bc,bd,be){bd.indexOf(bc)!==-1||this.__oJ(be||cb,dg,bc,cB,bd,bX);
},assertArrayEquals:function(bL,bM,bN){this.assertArray(bL,bN);
this.assertArray(bM,bN);
this.assertEquals(bL.length,bM.length,bN);

for(var i=0;i<bL.length;i++){this.assertIdentical(bL[i],bM[i],bN);
}},assertKeyInMap:function(a,b,c){b[a]!==undefined||this.__oJ(c||cb,dg,a,cG,b,bX);
},assertFunction:function(F,G){qx.lang.Type.isFunction(F)||this.__oJ(G||cb,cA,F,ca);
},assertString:function(dn,dp){qx.lang.Type.isString(dn)||this.__oJ(dp||cb,cD,dn,ca);
},assertBoolean:function(dq,dr){qx.lang.Type.isBoolean(dq)||this.__oJ(dr||cb,cM,dq,ca);
},assertNumber:function(dH,dI){(qx.lang.Type.isNumber(dH)&&isFinite(dH))||this.__oJ(dI||cb,cE,dH,ca);
},assertPositiveNumber:function(D,E){(qx.lang.Type.isNumber(D)&&isFinite(D)&&D>=0)||this.__oJ(E||cb,co,D,ca);
},assertInteger:function(z,A){(qx.lang.Type.isNumber(z)&&isFinite(z)&&z%1===0)||this.__oJ(A||cb,bP,z,ca);
},assertPositiveInteger:function(bo,bp){var bq=(qx.lang.Type.isNumber(bo)&&isFinite(bo)&&bo%1===0&&bo>=0);
bq||this.__oJ(bp||cb,dc,bo,ca);
},assertInRange:function(dO,dP,dQ,dR){(dO>=dP&&dO<=dQ)||this.__oJ(dR||cb,qx.lang.String.format(cm,[dO,dP,dQ]));
},assertObject:function(dS,dT){var dU=dS!==null&&(qx.lang.Type.isObject(dS)||typeof dS===cC);
dU||this.__oJ(dT||cb,cx,(dS),ca);
},assertArray:function(bm,bn){qx.lang.Type.isArray(bm)||this.__oJ(bn||cb,de,bm,ca);
},assertMap:function(bJ,bK){qx.lang.Type.isObject(bJ)||this.__oJ(bK||cb,ci,bJ,ca);
},assertRegExp:function(bt,bu){qx.lang.Type.isRegExp(bt)||this.__oJ(bu||cb,ce,bt,ca);
},assertType:function(bA,bB,bC){this.assertString(bB,cd);
typeof (bA)===bB||this.__oJ(bC||cb,cn,bB,dh,bA,ca);
},assertInstance:function(t,u,v){var w=u.classname||u+cb;
t instanceof u||this.__oJ(v||cb,cp,w,dh,t,ca);
},assertInterface:function(q,r,s){qx.Class.implementsInterface(q,r)||this.__oJ(s||cb,cO,q,cf,r,bY);
},assertCssColor:function(bf,bg,bh){var bi=qx.Class.getByName(cv);

if(!bi){throw new Error("qx.util.ColorUtil not available! Your code must have a dependency on 'qx.util.ColorUtil'");
}var bk=bi.stringToRgb(bf);

try{var bj=bi.stringToRgb(bg);
}catch(H){this.__oJ(bh||cb,bR,bf,bV,bk.join(bU),bT,bg,cP);
}var bl=bk[0]==bj[0]&&bk[1]==bj[1]&&bk[2]==bj[2];
bl||this.__oJ(bh||cb,bR,bk,bV,bk.join(bU),bT,bg,bV,bj.join(bU),bO);
},assertElement:function(S,T){!!(S&&S.nodeType===1)||this.__oJ(T||cb,ch,S,bY);
},assertQxObject:function(di,dj){this.__oL(di,df)||this.__oJ(dj||cb,cS,di,ca);
},assertQxWidget:function(B,C){this.__oL(B,cY)||this.__oJ(C||cb,cR,B,ca);
},__oL:function(dk,dl){if(!dk){return false;
}var dm=dk.constructor;

while(dm){if(dm.classname===dl){return true;
}dm=dm.superclass;
}return false;
}}});
})();
(function(){var bD="",bC="Number",bB='</div>',bA='" ',bz="paneUpdated",by='<div>',bx="</div>",bw="overflow: hidden;",bv="qx.event.type.Data",bu="paneReloadsData",bV="div",bU='style="',bT="_applyMaxCacheLines",bS="qx.ui.table.pane.Pane",bR="width: 100%;",bQ="qx.event.type.Event",bP="_applyVisibleRowCount",bO='>',bN="line-height: ",bM="appear",bK='class="',bL="width:100%;",bI="px;",bJ='<div ',bG="'>",bH="_applyFirstVisibleRow",bE="<div style='",bF=";position:relative;";
qx.Class.define(bS,{extend:qx.ui.core.Widget,construct:function(T){arguments.callee.base.call(this);
this.__mM=T;
this.__mN=0;
this.__mO=0;
this.__mP=[];
},events:{"paneReloadsData":bv,"paneUpdated":bQ},properties:{firstVisibleRow:{check:bC,init:0,apply:bH},visibleRowCount:{check:bC,init:0,apply:bP},maxCacheLines:{check:bC,init:1000,apply:bT},allowShrinkX:{refine:true,init:false}},members:{__mO:null,__mN:null,__mM:null,__mQ:null,__mR:null,__mS:null,__mP:null,__mT:0,_applyFirstVisibleRow:function(bs,bt){this.updateContent(false,bs-bt);
},_applyVisibleRowCount:function(ct,cu){this.updateContent(true);
},_getContentHint:function(){return {width:this.getPaneScroller().getTablePaneModel().getTotalWidth(),height:400};
},getPaneScroller:function(){return this.__mM;
},getTable:function(){return this.__mM.getTable();
},setFocusedCell:function(bW,bX,bY){if(bW!=this.__mS||bX!=this.__mR){var ca=this.__mR;
this.__mS=bW;
this.__mR=bX;
if(bX!=ca&&!bY){if(ca!==null){this.updateContent(false,null,ca,true);
}
if(bX!==null){this.updateContent(false,null,bX,true);
}}}},onSelectionChanged:function(){this.updateContent(false,null,null,true);
},onFocusChanged:function(){this.updateContent(false,null,null,true);
},setColumnWidth:function(X,Y){this.updateContent(true);
},onColOrderChanged:function(){this.updateContent(true);
},onPaneModelChanged:function(){this.updateContent(true);
},onTableModelDataChanged:function(cn,co,cp,cq){this.__mU();
var cs=this.getFirstVisibleRow();
var cr=this.getVisibleRowCount();

if(co==-1||co>=cs&&cn<cs+cr){this.updateContent();
}},onTableModelMetaDataChanged:function(){this.updateContent(true);
},_applyMaxCacheLines:function(U,V){if(this.__mT>=U&&U!==-1){this.__mU();
}},__mU:function(){this.__mP=[];
this.__mT=0;
},__mV:function(m,n,o){if(!n&&!o&&this.__mP[m]){return this.__mP[m];
}else{return null;
}},__mW:function(bn,bo,bp,bq){var br=this.getMaxCacheLines();

if(!bp&&!bq&&!this.__mP[bn]&&br>0){this._applyMaxCacheLines(br);
this.__mP[bn]=bo;
this.__mT+=1;
}},updateContent:function(cv,cw,cx,cy){if(cv){this.__mU();
}if(cw&&Math.abs(cw)<=Math.min(10,this.getVisibleRowCount())){this._scrollContent(cw);
}else if(cy&&!this.getTable().getAlwaysUpdateCells()){this._updateRowStyles(cx);
}else{this._updateAllRows();
}},_updateRowStyles:function(a){var e=this.getContentElement().getDomElement();

if(!e||!e.firstChild){this._updateAllRows();
return;
}var j=this.getTable();
var c=j.getSelectionModel();
var f=j.getTableModel();
var k=j.getDataRowRenderer();
var d=e.firstChild.childNodes;
var h={table:j};
var l=this.getFirstVisibleRow();
var y=0;
var b=d.length;

if(a!=null){var g=a-l;

if(g>=0&&g<b){l=a;
y=g;
b=g+1;
}else{return;
}}
for(;y<b;y++,l++){h.row=l;
h.selected=c.isSelectedIndex(l);
h.focusedRow=(this.__mR==l);
h.rowData=f.getRowData(l);
k.updateDataRowElement(h,d[y]);
}},_getRowsHtml:function(p,q){var w=this.getTable();
var B=w.getSelectionModel();
var t=w.getTableModel();
var u=w.getTableColumnModel();
var P=this.getPaneScroller().getTablePaneModel();
var G=w.getDataRowRenderer();
t.prefetchRows(p,p+q-1);
var M=w.getRowHeight();
var O=P.getColumnCount();
var v=0;
var s=[];
for(var x=0;x<O;x++){var R=P.getColumnAtX(x);
var A=u.getColumnWidth(R);
s.push({col:R,xPos:x,editable:t.isColumnEditable(R),focusedCol:this.__mS==R,styleLeft:v,styleWidth:A});
v+=A;
}var Q=[];
var S=false;

for(var z=p;z<p+q;z++){var C=B.isSelectedIndex(z);
var F=(this.__mR==z);
var J=this.__mV(z,C,F);

if(J){Q.push(J);
continue;
}var I=[];
var L={table:w};
L.styleHeight=M;
L.row=z;
L.selected=C;
L.focusedRow=F;
L.rowData=t.getRowData(z);

if(!L.rowData){S=true;
}I.push(bJ);
var r=G.getRowClass(L);

if(r){I.push(bK,r,bA);
}var H=G.createRowStyle(L);
H+=bF+G.getRowHeightStyle(M)+bL;

if(H){I.push(bU,H,bA);
}I.push(bO);

for(var x=0;x<O;x++){var D=s[x];

for(var N in D){L[N]=D[N];
}var R=L.col;
L.value=t.getValue(R,z);
var E=u.getDataCellRenderer(R);
E.createDataCellHtml(L,I);
}I.push(bB);
var K=I.join(bD);
this.__mW(z,K,C,F);
Q.push(K);
}this.fireDataEvent(bu,S);
return Q.join(bD);
},_scrollContent:function(ba){var bb=this.getContentElement().getDomElement();

if(!(bb&&bb.firstChild)){this._updateAllRows();
return;
}var bk=bb.firstChild;
var bc=bk.childNodes;
var bi=this.getVisibleRowCount();
var bh=this.getFirstVisibleRow();
var bf=this.getTable().getTableModel();
var bl=0;
bl=bf.getRowCount();
if(bh+bi>bl){this._updateAllRows();
return;
}var bm=ba<0?bi+ba:0;
var bd=ba<0?0:bi-ba;

for(i=Math.abs(ba)-1;i>=0;i--){var bg=bc[bm];

try{bk.removeChild(bg);
}catch(W){break;
}}if(!this.__mQ){this.__mQ=document.createElement(bV);
}var bj=by;
bj+=this._getRowsHtml(bh+bd,Math.abs(ba));
bj+=bB;
this.__mQ.innerHTML=bj;
var be=this.__mQ.firstChild.childNodes;
if(ba>0){for(var i=be.length-1;i>=0;i--){var bg=be[0];
bk.appendChild(bg);
}}else{for(var i=be.length-1;i>=0;i--){var bg=be[be.length-1];
bk.insertBefore(bg,bk.firstChild);
}}if(this.__mR!==null){this._updateRowStyles(this.__mR-ba);
this._updateRowStyles(this.__mR);
}this.fireEvent(bz);
},_updateAllRows:function(){var ce=this.getContentElement().getDomElement();

if(!ce){this.addListenerOnce(bM,arguments.callee,this);
return;
}var ck=this.getTable();
var ch=ck.getTableModel();
var cj=this.getPaneScroller().getTablePaneModel();
var ci=cj.getColumnCount();
var cb=ck.getRowHeight();
var cf=this.getFirstVisibleRow();
var cc=this.getVisibleRowCount();
var cl=ch.getRowCount();

if(cf+cc>cl){cc=Math.max(0,cl-cf);
}var cd=cj.getTotalWidth();
var cg;
if(cc>0){cg=[bE,bR,(ck.getForceLineHeight()?bN+cb+bI:bD),bw,bG,this._getRowsHtml(cf,cc),bx];
}else{cg=[];
}var cm=cg.join(bD);
ce.innerHTML=cm;
this.setWidth(cd);
this.__mN=ci;
this.__mO=cc;
this.fireEvent(bz);
}},destruct:function(){this.__mQ=this.__mM=this.__mP=null;
}});
})();
(function(){var e="auto",d="string",c="number",b="*",a="qx.ui.core.ColumnData";
qx.Class.define(a,{extend:qx.ui.core.LayoutItem,construct:function(){arguments.callee.base.call(this);
this.setColumnWidth(e);
},members:{__lA:null,renderLayout:function(j,top,k,l){this.__lA=k;
},getComputedWidth:function(){return this.__lA;
},getFlex:function(){return this.getLayoutProperties().flex||0;
},setColumnWidth:function(f,g){var g=g||0;
var h=null;

if(typeof f==c){this.setWidth(f);
}else if(typeof f==d){if(f==e){g=1;
}else{var i=f.match(/^[0-9]+(?:\.[0-9]+)?([%\*])$/);

if(i){if(i[1]==b){g=parseFloat(f);
}else{h=f;
}}}}this.setLayoutProperties({flex:g,width:h});
}},settings:{"qx.tableResizeDebug":false}});
})();
(function(){var j="Function",h="Boolean",g="minWidth",f="width",e="qx.ui.table.columnmodel.Resize",d="qx.ui.table.columnmodel.resizebehavior.Default",c="__lD",b="maxWidth",a="__lC";
qx.Class.define(d,{extend:qx.ui.table.columnmodel.resizebehavior.Abstract,construct:function(){arguments.callee.base.call(this);
this.__lB=[];
this.__lC=new qx.ui.layout.HBox();
this.__lC.connectToWidget(this);
this.__lD=new qx.util.DeferredCall(this._computeColumnsFlexWidth,this);
},properties:{newResizeBehaviorColumnData:{check:j,init:function(p){return new qx.ui.core.ColumnData();
}},initializeWidthsOnEveryAppear:{check:h,init:false},tableColumnModel:{check:e}},members:{__lC:null,__lE:null,__lB:null,__lD:null,__lF:false,setWidth:function(q,r,s){if(q>=this.__lB.length){throw new Error("Column number out of range");
}this.__lB[q].setColumnWidth(r,s);
this.__lD.schedule();
},setMinWidth:function(W,X){if(W>=this.__lB.length){throw new Error("Column number out of range");
}this.__lB[W].setMinWidth(X);
this.__lD.schedule();
},setMaxWidth:function(D,E){if(D>=this.__lB.length){throw new Error("Column number out of range");
}this.__lB[D].setMaxWidth(E);
this.__lD.schedule();
},set:function(m,n){for(var o in n){switch(o){case f:this.setWidth(m,n[o]);
break;
case g:this.setMinWidth(m,n[o]);
break;
case b:this.setMaxWidth(m,n[o]);
break;
default:throw new Error("Unknown property: "+o);
}}},onAppear:function(event,t){if(t===true||!this.__lF||this.getInitializeWidthsOnEveryAppear()){this._computeColumnsFlexWidth();
this.__lF=true;
}},onTableWidthChanged:function(event){this._computeColumnsFlexWidth();
},onVerticalScrollBarChanged:function(event){this._computeColumnsFlexWidth();
},onColumnWidthChanged:function(event){this._extendNextColumn(event);
},onVisibilityChanged:function(event){var k=event.getData();
if(k.visible){this._computeColumnsFlexWidth();
return;
}this._extendLastColumn(event);
},_setNumColumns:function(u){var v=this.__lB;
if(u<=v.length){v.splice(u,v.length);
return;
}for(var i=v.length;i<u;i++){v[i]=this.getNewResizeBehaviorColumnData()();
v[i].columnNumber=i;
}},getLayoutChildren:function(){return this.__lE;
},_computeColumnsFlexWidth:function(){this.__lD.cancel();
var A=this._getAvailableWidth();

if(A===null){return;
}var w=this.getTableColumnModel();
var y=w.getVisibleColumns();
var z=y.length;
var x=this.__lB;
var i,l;

if(z===0){return;
}var C=[];

for(i=0;i<z;i++){C.push(x[y[i]]);
}this.__lE=C;
this.__lG();
this.__lC.renderLayout(A,100);
for(i=0,l=C.length;i<l;i++){var B=C[i].getComputedWidth();
w.setColumnWidth(y[i],B);
}},__lG:function(){this.__lC.invalidateChildrenCache();
var F=this.__lE;

for(var i=0,l=F.length;i<l;i++){F[i].invalidateLayoutCache();
}},_extendNextColumn:function(event){var S=this.getTableColumnModel();
var V=event.getData();
var Q=S.getVisibleColumns();
var P=this._getAvailableWidth();
var O=Q.length;
if(V.newWidth>V.oldWidth){return ;
}var i;
var R;
var U=0;

for(i=0;i<O;i++){U+=S.getColumnWidth(Q[i]);
}if(U<P){for(i=0;i<Q.length;i++){if(Q[i]==V.col){R=Q[i+1];
break;
}}
if(R){var T=(P-(U-S.getColumnWidth(R)));
S.setColumnWidth(R,T);
}}},_extendLastColumn:function(event){var J=this.getTableColumnModel();
var N=event.getData();
if(N.visible){return;
}var I=J.getVisibleColumns();
if(I.length==0){return;
}var H=this._getAvailableWidth(J);
var G=I.length;
var i;
var L;
var M=0;

for(i=0;i<G;i++){M+=J.getColumnWidth(I[i]);
}if(M<H){L=I[I.length-1];
var K=(H-(M-J.getColumnWidth(L)));
J.setColumnWidth(L,K);
}},_getResizeColumnData:function(){return this.__lB;
}},destruct:function(){this.__lB=this.__lE=null;
this._disposeObjects(a,c);
}});
})();
(function(){var o="qx.event.type.Data",n="visibilityChanged",m="orderChanged",l="visibilityChangedPre",k="__lf",j="widthChanged",h="qx.ui.table.columnmodel.Basic",g="__ld",f="__le";
qx.Class.define(h,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__kX=[];
this.__kY=[];
},events:{"widthChanged":o,"visibilityChangedPre":o,"visibilityChanged":o,"orderChanged":o},statics:{DEFAULT_WIDTH:100,DEFAULT_HEADER_RENDERER:qx.ui.table.headerrenderer.Default,DEFAULT_DATA_RENDERER:qx.ui.table.cellrenderer.Default,DEFAULT_EDITOR_FACTORY:qx.ui.table.celleditor.TextField},members:{__la:null,__lb:null,__kY:null,__kX:null,__lc:null,__ld:null,__le:null,__lf:null,init:function(I){{};
this.__lc=[];
var L=qx.ui.table.columnmodel.Basic.DEFAULT_WIDTH;
var M=this.__ld||(this.__ld=new qx.ui.table.columnmodel.Basic.DEFAULT_HEADER_RENDERER());
var K=this.__le||(this.__le=new qx.ui.table.columnmodel.Basic.DEFAULT_DATA_RENDERER());
var J=this.__lf||(this.__lf=new qx.ui.table.columnmodel.Basic.DEFAULT_EDITOR_FACTORY());
this.__kX=[];
this.__kY=[];

for(var O=0;O<I;O++){this.__lc[O]={width:L,headerRenderer:M,dataRenderer:K,editorFactory:J};
this.__kX[O]=O;
this.__kY[O]=O;
}this.__lb=null;

for(var O=0;O<I;O++){var N={col:O,visible:true};
this.fireDataEvent(l,N);
this.fireDataEvent(n,N);
}},getVisibleColumns:function(){return this.__kY!=null?this.__kY:[];
},setColumnWidth:function(t,u){{};
var w=this.__lc[t].width;

if(w!=u){this.__lc[t].width=u;
var v={col:t,newWidth:u,oldWidth:w};
this.fireDataEvent(j,v);
}},getColumnWidth:function(A){{};
return this.__lc[A].width;
},setHeaderCellRenderer:function(p,q){{};
var r=this.__lc[p].headerRenderer;

if(r!==this.__ld){r.dispose();
}this.__lc[p].headerRenderer=q;
},getHeaderCellRenderer:function(H){{};
return this.__lc[H].headerRenderer;
},setDataCellRenderer:function(E,F){{};
var G=this.__lc[E].dataRenderer;

if(G!==this.__le){G.dispose();
}this.__lc[E].dataRenderer=F;
},getDataCellRenderer:function(P){{};
return this.__lc[P].dataRenderer;
},setCellEditorFactory:function(B,C){{};
var D=this.__lc[B].headerRenderer;

if(D!==this.__lf){D.dispose();
}this.__lc[B].editorFactory=C;
},getCellEditorFactory:function(z){{};
return this.__lc[z].editorFactory;
},_getColToXPosMap:function(){if(this.__lb==null){this.__lb={};

for(var ba=0;ba<this.__kX.length;ba++){var Y=this.__kX[ba];
this.__lb[Y]={overX:ba};
}
for(var X=0;X<this.__kY.length;X++){var Y=this.__kY[X];
this.__lb[Y].visX=X;
}}return this.__lb;
},getVisibleColumnCount:function(){return this.__kY!=null?this.__kY.length:0;
},getVisibleColumnAtX:function(s){{};
return this.__kY[s];
},getVisibleX:function(W){{};
return this._getColToXPosMap()[W].visX;
},getOverallColumnCount:function(){return this.__kX.length;
},getOverallColumnAtX:function(e){{};
return this.__kX[e];
},getOverallX:function(Q){{};
return this._getColToXPosMap()[Q].overX;
},isColumnVisible:function(y){{};
return (this._getColToXPosMap()[y].visX!=null);
},setColumnVisible:function(bb,bc){{};

if(bc!=this.isColumnVisible(bb)){if(bc){var bi=this._getColToXPosMap();
var bf=bi[bb].overX;

if(bf==null){throw new Error("Showing column failed: "+bb+". The column is not added to this TablePaneModel.");
}var bg;

for(var x=bf+1;x<this.__kX.length;x++){var bh=this.__kX[x];
var bd=bi[bh].visX;

if(bd!=null){bg=bd;
break;
}}if(bg==null){bg=this.__kY.length;
}this.__kY.splice(bg,0,bb);
}else{var be=this.getVisibleX(bb);
this.__kY.splice(be,1);
}this.__lb=null;
if(!this.__la){var bj={col:bb,visible:bc};
this.fireDataEvent(l,bj);
this.fireDataEvent(n,bj);
}}},moveColumn:function(R,S){{};
this.__la=true;
var V=this.__kX[R];
var T=this.isColumnVisible(V);

if(T){this.setColumnVisible(V,false);
}this.__kX.splice(R,1);
this.__kX.splice(S,0,V);
this.__lb=null;

if(T){this.setColumnVisible(V,true);
}this.__la=false;
var U={col:V,fromOverXPos:R,toOverXPos:S};
this.fireDataEvent(m,U);
},setColumnsOrder:function(a){{};

if(a.length==this.__kX.length){this.__la=true;
var d=new Array(a.length);

for(var b=0;b<this.__kX.length;b++){var c=this.isColumnVisible(b);
d[b]=c;

if(c){this.setColumnVisible(b,false);
}}this.__kX=qx.lang.Array.clone(a);
this.__lb=null;
for(var b=0;b<this.__kX.length;b++){if(d[b]){this.setColumnVisible(b,true);
}}this.__la=false;
this.fireDataEvent(m);
}else{throw new Error("setColumnsOrder: Invalid number of column positions given, expected "+this.__kX.length+", got "+a.length);
}}},destruct:function(){for(var i=0;i<this.__lc.length;i++){this.__lc[i].headerRenderer.dispose();
this.__lc[i].dataRenderer.dispose();
this.__lc[i].editorFactory.dispose();
}this.__kX=this.__kY=this.__lc=this.__lb=null;
this._disposeObjects(g,f,k);
}});
})();
(function(){var d="qx.ui.table.selection.Model",c="qx.ui.table.selection.Manager";
qx.Class.define(c,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
},properties:{selectionModel:{check:d}},members:{__mH:null,handleMouseDown:function(r,s){if(s.isLeftPressed()){var t=this.getSelectionModel();

if(!t.isSelectedIndex(r)){this._handleSelectEvent(r,s);
this.__mH=true;
}else{this.__mH=false;
}}else if(s.isRightPressed()&&s.getModifiers()==0){var t=this.getSelectionModel();

if(!t.isSelectedIndex(r)){t.setSelectionInterval(r,r);
}}},handleMouseUp:function(p,q){if(q.isLeftPressed()&&!this.__mH){this._handleSelectEvent(p,q);
}},handleClick:function(a,b){},handleSelectKeyDown:function(n,o){this._handleSelectEvent(n,o);
},handleMoveKeyDown:function(e,f){var h=this.getSelectionModel();

switch(f.getModifiers()){case 0:h.setSelectionInterval(e,e);
break;
case qx.event.type.Dom.SHIFT_MASK:var g=h.getAnchorSelectionIndex();

if(g==-1){h.setSelectionInterval(e,e);
}else{h.setSelectionInterval(g,e);
}break;
}},_handleSelectEvent:function(i,j){var m=this.getSelectionModel();
var k=m.getLeadSelectionIndex();
var l=m.getAnchorSelectionIndex();

if(j.isShiftPressed()){if(i!=k||m.isSelectionEmpty()){if(l==-1){l=i;
}
if(j.isCtrlOrCommandPressed()){m.addSelectionInterval(l,i);
}else{m.setSelectionInterval(l,i);
}}}else if(j.isCtrlOrCommandPressed()){if(m.isSelectedIndex(i)){m.removeSelectionInterval(i,i);
}else{m.addSelectionInterval(i,i);
}}else{m.setSelectionInterval(i,i);
}}}});
})();
(function(){var a="qx.ui.table.pane.Clipper";
qx.Class.define(a,{extend:qx.ui.container.Composite,construct:function(){arguments.callee.base.call(this,new qx.ui.layout.Grow());
this.setMinWidth(0);
},members:{scrollToX:function(c){this.getContentElement().scrollToX(c,false);
},scrollToY:function(b){this.getContentElement().scrollToY(b,true);
}}});
})();
(function(){var t='',s='"',r=':',q=']',p='null',o=': ',m='object',l='function',h=',',g='\n',be='\\u',bd=',\n',bc='0000',bb='string',ba="Cannot stringify a recursive object.",Y='0',X='-',W='}',V='String',U='Boolean',B='\\\\',C='\\f',z='\\t',A='{\n',x='[]',y="qx.lang.JsonImpl",u='Z',w='\\n',D='Object',E='{}',L='@',J='.',O='(',N='Array',Q='T',P='\\r',G='{',T='JSON.parse',S=' ',R='[',F='Number',H=')',I='[\n',K='\\"',M='\\b';
qx.Class.define(y,{extend:Object,construct:function(){this.stringify=qx.lang.Function.bind(this.stringify,this);
this.parse=qx.lang.Function.bind(this.parse,this);
},members:{__oM:null,__oN:null,__oO:null,__oP:null,stringify:function(bi,bj,bk){this.__oM=t;
this.__oN=t;
this.__oP=[];

if(qx.lang.Type.isNumber(bk)){var bk=Math.min(10,Math.floor(bk));

for(var i=0;i<bk;i+=1){this.__oN+=S;
}}else if(qx.lang.Type.isString(bk)){if(bk.length>10){bk=bk.slice(0,10);
}this.__oN=bk;
}if(bj&&(qx.lang.Type.isFunction(bj)||qx.lang.Type.isArray(bj))){this.__oO=bj;
}else{this.__oO=null;
}return this.__oQ(t,{'':bi});
},__oQ:function(bs,bt){var bw=this.__oM,bu,bx=bt[bs];
if(bx&&qx.lang.Type.isFunction(bx.toJSON)){bx=bx.toJSON(bs);
}else if(qx.lang.Type.isDate(bx)){bx=this.dateToJSON(bx);
}if(typeof this.__oO===l){bx=this.__oO.call(bt,bs,bx);
}
if(bx===null){return p;
}
if(bx===undefined){return undefined;
}switch(qx.lang.Type.getClass(bx)){case V:return this.__oR(bx);
case F:return isFinite(bx)?String(bx):p;
case U:return String(bx);
case N:this.__oM+=this.__oN;
bu=[];

if(this.__oP.indexOf(bx)!==-1){throw new TypeError(ba);
}this.__oP.push(bx);
var length=bx.length;

for(var i=0;i<length;i+=1){bu[i]=this.__oQ(i,bx)||p;
}this.__oP.pop();
if(bu.length===0){var bv=x;
}else if(this.__oM){bv=I+this.__oM+bu.join(bd+this.__oM)+g+bw+q;
}else{bv=R+bu.join(h)+q;
}this.__oM=bw;
return bv;
case D:this.__oM+=this.__oN;
bu=[];

if(this.__oP.indexOf(bx)!==-1){throw new TypeError(ba);
}this.__oP.push(bx);
if(this.__oO&&typeof this.__oO===m){var length=this.__oO.length;

for(var i=0;i<length;i+=1){var k=this.__oO[i];

if(typeof k===bb){var v=this.__oQ(k,bx);

if(v){bu.push(this.__oR(k)+(this.__oM?o:r)+v);
}}}}else{for(var k in bx){if(Object.hasOwnProperty.call(bx,k)){var v=this.__oQ(k,bx);

if(v){bu.push(this.__oR(k)+(this.__oM?o:r)+v);
}}}}this.__oP.pop();
if(bu.length===0){var bv=E;
}else if(this.__oM){bv=A+this.__oM+bu.join(bd+this.__oM)+g+bw+W;
}else{bv=G+bu.join(h)+W;
}this.__oM=bw;
return bv;
}},dateToJSON:function(bo){var bp=function(n){return n<10?Y+n:n;
};
var bq=function(n){var br=bp(n);
return n<100?Y+br:br;
};
return isFinite(bo.valueOf())?bo.getUTCFullYear()+X+bp(bo.getUTCMonth()+1)+X+bp(bo.getUTCDate())+Q+bp(bo.getUTCHours())+r+bp(bo.getUTCMinutes())+r+bp(bo.getUTCSeconds())+J+bq(bo.getUTCMilliseconds())+u:null;
},__oR:function(bf){var bg={'\b':M,'\t':z,'\n':w,'\f':C,'\r':P,'"':K,'\\':B};
var bh=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
bh.lastIndex=0;

if(bh.test(bf)){return s+
bf.replace(bh,function(a){var c=bg[a];
return typeof c===bb?c:be+(bc+a.charCodeAt(0).toString(16)).slice(-4);
})+s;
}else{return s+bf+s;
}},parse:function(bl,bm){var bn=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
bn.lastIndex=0;
if(bn.test(bl)){bl=bl.replace(bn,function(a){return be+(bc+a.charCodeAt(0).toString(16)).slice(-4);
});
}if(/^[\],:{}\s]*$/.test(bl.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,L).replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q).replace(/(?:^|:|,)(?:\s*\[)+/g,t))){var j=eval(O+bl+H);
return typeof bm===l?this.__oS({'':j},t,bm):j;
}throw new SyntaxError(T);
},__oS:function(b,d,e){var f=b[d];

if(f&&typeof f===m){for(var k in f){if(Object.hasOwnProperty.call(f,k)){var v=this.__oS(f,k,e);

if(v!==undefined){f[k]=v;
}else{delete f[k];
}}}}return e.call(b,d,f);
}}});
})();
(function(){var a="qx.lang.Json";
qx.Class.define(a,{statics:{JSON:(qx.lang.Type.getClass(window.JSON)=="JSON"&&JSON.parse('{"x":1}').x===1)?window.JSON:new qx.lang.JsonImpl(),stringify:null,parse:null},defer:function(b){b.stringify=b.JSON.stringify;
b.parse=b.JSON.parse;
}});
})();
(function(){var T="..",S="changeSelection",R="Use 'resetSelection' instead",Q=" [",P="]",O="qx.event.type.Event",N="Ranges:",M="qx.ui.table.selection.Model",L="_applySelectionMode",K="Use '_resetSelection' instead.";
qx.Class.define(M,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__mI=[];
this.__mJ=-1;
this.__mK=-1;
this.hasBatchModeRefCount=0;
this.__mL=false;
},events:{"changeSelection":O},statics:{NO_SELECTION:1,SINGLE_SELECTION:2,SINGLE_INTERVAL_SELECTION:3,MULTIPLE_INTERVAL_SELECTION:4,MULTIPLE_INTERVAL_SELECTION_TOGGLE:5},properties:{selectionMode:{init:2,check:[1,2,3,4,5],apply:L}},members:{__mL:null,__mJ:null,__mK:null,__mI:null,_applySelectionMode:function(U){this.resetSelection();
},setBatchMode:function(v){if(v){this.hasBatchModeRefCount+=1;
}else{if(this.hasBatchModeRefCount==0){throw new Error("Try to turn off batch mode althoug it was not turned on.");
}this.hasBatchModeRefCount-=1;

if(this.__mL){this.__mL=false;
this._fireChangeSelection();
}}return this.hasBatchMode();
},hasBatchMode:function(){return this.hasBatchModeRefCount>0;
},getAnchorSelectionIndex:function(){return this.__mJ;
},_setAnchorSelectionIndex:function(z){this.__mJ=z;
},getLeadSelectionIndex:function(){return this.__mK;
},_setLeadSelectionIndex:function(a){this.__mK=a;
},_getSelectedRangeArr:function(){return this.__mI;
},resetSelection:function(){if(!this.isSelectionEmpty()){this._resetSelection();
this._fireChangeSelection();
}},clearSelection:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,R);
this.resetSelection();
},isSelectionEmpty:function(){return this.__mI.length==0;
},getSelectedCount:function(){var B=0;

for(var i=0;i<this.__mI.length;i++){var A=this.__mI[i];
B+=A.maxIndex-A.minIndex+1;
}return B;
},isSelectedIndex:function(C){for(var i=0;i<this.__mI.length;i++){var D=this.__mI[i];

if(C>=D.minIndex&&C<=D.maxIndex){return true;
}}return false;
},getSelectedRanges:function(){var w=[];

for(var i=0;i<this.__mI.length;i++){w.push({minIndex:this.__mI[i].minIndex,maxIndex:this.__mI[i].maxIndex});
}return w;
},iterateSelection:function(t,u){for(var i=0;i<this.__mI.length;i++){for(var j=this.__mI[i].minIndex;j<=this.__mI[i].maxIndex;j++){t.call(u,j);
}}},setSelectionInterval:function(H,I){var J=arguments.callee.self;

switch(this.getSelectionMode()){case J.NO_SELECTION:return;
case J.SINGLE_SELECTION:if(this.isSelectedIndex(I)){return;
}H=I;
break;
case J.MULTIPLE_INTERVAL_SELECTION_TOGGLE:this.setBatchMode(true);

try{for(var i=H;i<=I;i++){if(!this.isSelectedIndex(i)){this._addSelectionInterval(i,i);
}else{this.removeSelectionInterval(i,i);
}}}catch(e){throw e;
}finally{this.setBatchMode(false);
}this._fireChangeSelection();
return;
}this._resetSelection();
this._addSelectionInterval(H,I);
this._fireChangeSelection();
},addSelectionInterval:function(E,F){var G=qx.ui.table.selection.Model;

switch(this.getSelectionMode()){case G.NO_SELECTION:return;
case G.MULTIPLE_INTERVAL_SELECTION:case G.MULTIPLE_INTERVAL_SELECTION_TOGGLE:this._addSelectionInterval(E,F);
this._fireChangeSelection();
break;
default:this.setSelectionInterval(E,F);
break;
}},removeSelectionInterval:function(l,m){this.__mJ=l;
this.__mK=m;
var n=Math.min(l,m);
var p=Math.max(l,m);
for(var i=0;i<this.__mI.length;i++){var r=this.__mI[i];

if(r.minIndex>p){break;
}else if(r.maxIndex>=n){var s=(r.minIndex>=n)&&(r.minIndex<=p);
var q=(r.maxIndex>=n)&&(r.maxIndex<=p);

if(s&&q){this.__mI.splice(i,1);
i--;
}else if(s){r.minIndex=p+1;
}else if(q){r.maxIndex=n-1;
}else{var o={minIndex:p+1,maxIndex:r.maxIndex};
this.__mI.splice(i+1,0,o);
r.maxIndex=n-1;
break;
}}}this._fireChangeSelection();
},_resetSelection:function(){this.__mI=[];
this.__mJ=-1;
this.__mK=-1;
},_clearSelection:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,K);
this._resetSelection();
},_addSelectionInterval:function(b,c){this.__mJ=b;
this.__mK=c;
var d=Math.min(b,c);
var g=Math.max(b,c);
var f=0;

for(;f<this.__mI.length;f++){var h=this.__mI[f];

if(h.minIndex>d){break;
}}this.__mI.splice(f,0,{minIndex:d,maxIndex:g});
var k=this.__mI[0];

for(var i=1;i<this.__mI.length;i++){var h=this.__mI[i];

if(k.maxIndex+1>=h.minIndex){k.maxIndex=Math.max(k.maxIndex,h.maxIndex);
this.__mI.splice(i,1);
i--;
}else{k=h;
}}},_dumpRanges:function(){var x=N;

for(var i=0;i<this.__mI.length;i++){var y=this.__mI[i];
x+=Q+y.minIndex+T+y.maxIndex+P;
}this.debug(x);
},_fireChangeSelection:function(){if(this.hasBatchMode()){this.__mL=true;
}else{this.fireEvent(S);
}}},destruct:function(){this.__mI=null;
}});
})();
(function(){var n="appear",m="columnVisibilityMenuCreateEnd",l="tableWidthChanged",k="verticalScrollBarChanged",j="qx.ui.table.columnmodel.resizebehavior.Abstract",i="qx.ui.table.columnmodel.Resize",h="_applyBehavior",g="separator",f="visibilityChanged",e="Reset column widths",b="changeBehavior",d="user-button",c="widthChanged",a="execute";
qx.Class.define(i,{extend:qx.ui.table.columnmodel.Basic,include:qx.locale.MTranslation,construct:function(){arguments.callee.base.call(this);
this.__lg=false;
this.__lh=false;
},properties:{behavior:{check:j,init:null,nullable:true,apply:h,event:b}},members:{__lh:null,__lg:null,__li:null,_applyBehavior:function(u,v){if(v!=null){v.dispose();
v=null;
}u._setNumColumns(this.getOverallColumnCount());
u.setTableColumnModel(this);
},init:function(p,q){arguments.callee.base.call(this,p);

if(this.__li==null){this.__li=q;
q.addListener(n,this._onappear,this);
q.addListener(l,this._onTableWidthChanged,this);
q.addListener(k,this._onverticalscrollbarchanged,this);
q.addListener(m,this._addResetColumnWidthButton,this);
this.addListener(c,this._oncolumnwidthchanged,this);
this.addListener(f,this._onvisibilitychanged,this);
}if(this.getBehavior()==null){this.setBehavior(new qx.ui.table.columnmodel.resizebehavior.Default());
}this.getBehavior()._setNumColumns(p);
},getTable:function(){return this.__li;
},_addResetColumnWidthButton:function(event){var t=event.getData();
var s=t.columnButton;
var r=t.menu;
var o;
o=s.factory(g);
r.add(o);
o=s.factory(d,{text:this.tr(e)});
r.add(o);
o.addListener(a,this._onappear,this);
},_onappear:function(event){if(this.__lg){return ;
}this.__lg=true;
{};
this.getBehavior().onAppear(event,event.getType()!==n);
this.__li._updateScrollerWidths();
this.__li._updateScrollBarVisibility();
this.__lg=false;
this.__lh=true;
},_onTableWidthChanged:function(event){if(this.__lg||!this.__lh){return ;
}this.__lg=true;
{};
this.getBehavior().onTableWidthChanged(event);
this.__lg=false;
},_onverticalscrollbarchanged:function(event){if(this.__lg||!this.__lh){return ;
}this.__lg=true;
{};
this.getBehavior().onVerticalScrollBarChanged(event);
qx.event.Timer.once(function(){if(this.__li&&!this.__li.isDisposed()){this.__li._updateScrollerWidths();
this.__li._updateScrollBarVisibility();
}},this,0);
this.__lg=false;
},_oncolumnwidthchanged:function(event){if(this.__lg||!this.__lh){return ;
}this.__lg=true;
{};
this.getBehavior().onColumnWidthChanged(event);
this.__lg=false;
},_onvisibilitychanged:function(event){if(this.__lg||!this.__lh){return ;
}this.__lg=true;
{};
this.getBehavior().onVisibilityChanged(event);
this.__lg=false;
}},destruct:function(){this.__li=null;
}});
})();
(function(){var w="metaDataChanged",v="qx.event.type.Data",u="qx.event.type.Event",t="abstract",s="qx.ui.table.model.Abstract";
qx.Class.define(s,{type:t,extend:qx.core.Object,implement:qx.ui.table.ITableModel,events:{"dataChanged":v,"metaDataChanged":u,"sorted":v},construct:function(){arguments.callee.base.call(this);
this.__kM=[];
this.__kN=[];
this.__kO={};
},members:{__kM:null,__kN:null,__kO:null,__kP:null,getRowCount:function(){throw new Error("getRowCount is abstract");
},getRowData:function(D){return null;
},isColumnEditable:function(a){return false;
},isColumnSortable:function(A){return false;
},sortByColumn:function(e,f){},getSortColumnIndex:function(){return -1;
},isSortAscending:function(){return true;
},prefetchRows:function(B,C){},getValue:function(g,h){throw new Error("getValue is abstract");
},getValueById:function(x,y){return this.getValue(this.getColumnIndexById(x),y);
},setValue:function(m,n,o){throw new Error("setValue is abstract");
},setValueById:function(j,k,l){this.setValue(this.getColumnIndexById(j),k,l);
},getColumnCount:function(){return this.__kM.length;
},getColumnIndexById:function(E){return this.__kO[E];
},getColumnId:function(b){return this.__kM[b];
},getColumnName:function(F){return this.__kN[F];
},setColumnIds:function(d){this.__kM=d;
this.__kO={};

for(var i=0;i<d.length;i++){this.__kO[d[i]]=i;
}this.__kN=new Array(d.length);
if(!this.__kP){this.fireEvent(w);
}},setColumnNamesByIndex:function(z){if(this.__kM.length!=z.length){throw new Error("this.__columnIdArr and columnNameArr have different length: "+this.__kM.length+" != "+z.length);
}this.__kN=z;
this.fireEvent(w);
},setColumnNamesById:function(c){this.__kN=new Array(this.__kM.length);

for(var i=0;i<this.__kM.length;++i){this.__kN[i]=c[this.__kM[i]];
}},setColumns:function(p,q){var r=this.__kM.length==0||q;

if(q==null){if(this.__kM.length==0){q=p;
}else{q=this.__kM;
}}
if(q.length!=p.length){throw new Error("columnIdArr and columnNameArr have different length: "+q.length+" != "+p.length);
}
if(r){this.__kP=true;
this.setColumnIds(q);
this.__kP=false;
}this.setColumnNamesByIndex(p);
}},destruct:function(){this.__kM=this.__kN=this.__kO=null;
}});
})();
(function(){var u="dataChanged",t="metaDataChanged",s="qx.ui.table.model.Simple",r="Boolean",q="sorted";
qx.Class.define(s,{extend:qx.ui.table.model.Abstract,construct:function(){arguments.callee.base.call(this);
this.__kQ=[];
this.__kR=-1;
this.__kS=[];
this.__kT=null;
},properties:{caseSensitiveSorting:{check:r,init:true}},statics:{_defaultSortComparatorAscending:function(v,w){var x=v[arguments.callee.columnIndex];
var y=w[arguments.callee.columnIndex];

if(qx.lang.Type.isNumber(x)&&qx.lang.Type.isNumber(y)){var z=isNaN(x)?isNaN(y)?0:1:isNaN(y)?-1:null;

if(z!=null){return z;
}}return (x>y)?1:((x==y)?0:-1);
},_defaultSortComparatorInsensitiveAscending:function(bw,bx){var by=(bw[arguments.callee.columnIndex].toLowerCase?bw[arguments.callee.columnIndex].toLowerCase():bw[arguments.callee.columnIndex]);
var bz=(bx[arguments.callee.columnIndex].toLowerCase?bx[arguments.callee.columnIndex].toLowerCase():bx[arguments.callee.columnIndex]);

if(qx.lang.Type.isNumber(by)&&qx.lang.Type.isNumber(bz)){var bA=isNaN(by)?isNaN(bz)?0:1:isNaN(bz)?-1:null;

if(bA!=null){return bA;
}}return (by>bz)?1:((by==bz)?0:-1);
},_defaultSortComparatorDescending:function(A,B){var C=A[arguments.callee.columnIndex];
var D=B[arguments.callee.columnIndex];

if(qx.lang.Type.isNumber(C)&&qx.lang.Type.isNumber(D)){var E=isNaN(C)?isNaN(D)?0:1:isNaN(D)?-1:null;

if(E!=null){return E;
}}return (C<D)?1:((C==D)?0:-1);
},_defaultSortComparatorInsensitiveDescending:function(bb,bc){var bd=(bb[arguments.callee.columnIndex].toLowerCase?bb[arguments.callee.columnIndex].toLowerCase():bb[arguments.callee.columnIndex]);
var be=(bc[arguments.callee.columnIndex].toLowerCase?bc[arguments.callee.columnIndex].toLowerCase():bc[arguments.callee.columnIndex]);

if(qx.lang.Type.isNumber(bd)&&qx.lang.Type.isNumber(be)){var bf=isNaN(bd)?isNaN(be)?0:1:isNaN(be)?-1:null;

if(bf!=null){return bf;
}}return (bd<be)?1:((bd==be)?0:-1);
}},members:{__kQ:null,__kT:null,__kU:null,__kS:null,__kR:null,__kV:null,getRowData:function(bD){var bE=this.__kQ[bD];

if(bE==null||bE.originalData==null){return bE;
}else{return bE.originalData;
}},getRowDataAsMap:function(bL){var bN=this.__kQ[bL];
var bM={};

for(var bO=0;bO<this.getColumnCount();bO++){bM[this.getColumnId(bO)]=bN[bO];
}return bM;
},getDataAsMapArray:function(){var ba=this.getRowCount();
var Y=[];

for(var i=0;i<ba;i++){Y.push(this.getRowDataAsMap(i));
}return Y;
},setEditable:function(k){this.__kT=[];

for(var l=0;l<this.getColumnCount();l++){this.__kT[l]=k;
}this.fireEvent(t);
},setColumnEditable:function(S,T){if(T!=this.isColumnEditable(S)){if(this.__kT==null){this.__kT=[];
}this.__kT[S]=T;
this.fireEvent(t);
}},isColumnEditable:function(bl){return this.__kT?(this.__kT[bl]==true):false;
},setColumnSortable:function(bm,bn){if(bn!=this.isColumnSortable(bm)){if(this.__kU==null){this.__kU=[];
}this.__kU[bm]=bn;
this.fireEvent(t);
}},isColumnSortable:function(R){return (this.__kU?(this.__kU[R]!==false):true);
},sortByColumn:function(bg,bh){var bk;
var bj=this.__kS[bg];

if(bj){bk=(bh?bj.ascending:bj.descending);
}else{if(this.getCaseSensitiveSorting()){bk=(bh?qx.ui.table.model.Simple._defaultSortComparatorAscending:qx.ui.table.model.Simple._defaultSortComparatorDescending);
}else{bk=(bh?qx.ui.table.model.Simple._defaultSortComparatorInsensitiveAscending:qx.ui.table.model.Simple._defaultSortComparatorInsensitiveDescending);
}}bk.columnIndex=bg;
this.__kQ.sort(bk);
this.__kR=bg;
this.__kV=bh;
var bi={columnIndex:bg,ascending:bh};
this.fireDataEvent(q,bi);
this.fireEvent(t);
},setSortMethods:function(L,M){var N;

if(qx.lang.Type.isFunction(M)){N={ascending:M,descending:function(bB,bC){return M(bC,bB);
}};
}else{N=M;
}this.__kS[L]=N;
},getSortMethods:function(bv){return this.__kS[bv];
},clearSorting:function(){if(this.__kR!=-1){this.__kR=-1;
this.__kV=true;
this.fireEvent(t);
}},getSortColumnIndex:function(){return this.__kR;
},isSortAscending:function(){return this.__kV;
},getRowCount:function(){return this.__kQ.length;
},getValue:function(F,G){if(G<0||G>=this.__kQ.length){throw new Error("this.__rowArr out of bounds: "+G+" (0.."+this.__kQ.length+")");
}return this.__kQ[G][F];
},setValue:function(m,n,o){if(this.__kQ[n][m]!=o){this.__kQ[n][m]=o;
if(this.hasListener(u)){var p={firstRow:n,lastRow:n,firstColumn:m,lastColumn:m};
this.fireDataEvent(u,p);
}
if(m==this.__kR){this.clearSorting();
}}},setData:function(bo,bp){this.__kQ=bo;
if(this.hasListener(u)){var bq={firstRow:0,lastRow:bo.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(u,bq);
}
if(bp!==false){this.clearSorting();
}},getData:function(){return this.__kQ;
},setDataAsMapArray:function(O,P,Q){this.setData(this._mapArray2RowArr(O,P),Q);
},addRows:function(br,bs,bt){if(bs==null){bs=this.__kQ.length;
}br.splice(0,0,bs,0);
Array.prototype.splice.apply(this.__kQ,br);
var bu={firstRow:bs,lastRow:this.__kQ.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(u,bu);

if(bt!==false){this.clearSorting();
}},addRowsAsMapArray:function(H,I,J,K){this.addRows(this._mapArray2RowArr(H,J),I,K);
},setRows:function(e,f,g){if(f==null){f=0;
}e.splice(0,0,f,e.length);
Array.prototype.splice.apply(this.__kQ,e);
var h={firstRow:f,lastRow:this.__kQ.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(u,h);

if(g!==false){this.clearSorting();
}},setRowsAsMapArray:function(a,b,c,d){this.setRows(this._mapArray2RowArr(a,c),b,d);
},removeRows:function(U,V,W){this.__kQ.splice(U,V);
var X={firstRow:U,lastRow:this.__kQ.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1,removeStart:U,removeCount:V};
this.fireDataEvent(u,X);

if(W!==false){this.clearSorting();
}},_mapArray2RowArr:function(bF,bG){var bK=bF.length;
var bH=this.getColumnCount();
var bJ=new Array(bK);
var bI;

for(var i=0;i<bK;++i){bI=[];

if(bG){bI.originalData=bF[i];
}
for(var j=0;j<bH;++j){bI[j]=bF[i][this.getColumnId(j)];
}bJ[i]=bI;
}return bJ;
}},destruct:function(){this.__kQ=this.__kT=this.__kS=this.__kU=null;
}});
})();
(function(){var b="qx.ui.table.IRowRenderer";
qx.Interface.define(b,{members:{updateDataRowElement:function(d,e){},getRowHeightStyle:function(f){},createRowStyle:function(a){},getRowClass:function(c){}}});
})();
(function(){var h="menu-button",g="table-column-reset-button",f="separator",e="user-button",d="qx.ui.table.columnmenu.Button",c="menu";
qx.Class.define(d,{extend:qx.ui.form.MenuButton,implement:qx.ui.table.IColumnMenuButton,construct:function(){arguments.callee.base.call(this);
this.__lV=new qx.ui.core.Blocker(this);
},members:{__lW:null,__lV:null,factory:function(j,k){switch(j){case c:var m=new qx.ui.menu.Menu();
this.setMenu(m);
return m;
case h:var o=new qx.ui.table.columnmenu.MenuItem(k.text);
o.setVisible(k.bVisible);
this.getMenu().add(o);
return o;
case e:var n=new qx.ui.menu.Button(k.text);
n.set({appearance:g});
return n;
case f:return new qx.ui.menu.Separator();
default:throw new Error("Unrecognized factory request: "+j);
}},getBlocker:function(){return this.__lV;
},empty:function(){var a=this.getMenu();
var b=a.getChildren();

for(var i=0,l=b.length;i<l;i++){b[0].destroy();
}}},destruct:function(){this.__lV.dispose();
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
(function(){var I="Boolean",H="resize-line",G="mousedown",F="qx.event.type.Data",E="mouseup",D="qx.ui.table.pane.CellEvent",C="scroll",B="focus-indicator",A="excluded",z="scrollbar-y",bG="visible",bF="mousemove",bE="header",bD="editing",bC="click",bB="modelChanged",bA="scrollbar-x",bz="cellClick",by="pane",bx="__nl",P="mouseout",Q="__nj",N="changeHorizontalScrollBarVisible",O="bottom",L="_applyScrollTimeout",M="changeScrollX",J="_applyTablePaneModel",K="Integer",T="__nh",U="dblclick",bd="dataEdited",bb="mousewheel",bl="interval",bg="qx.ui.table.pane.Scroller",bt="__nd",bq="__nf",W="_applyShowCellFocusIndicator",bw="resize",bv="__ng",bu="vertical",V="changeScrollY",Y="__ne",ba="appear",bc="table-scroller",be="beforeSort",bh="__ni",bn="cellDblclick",bs="horizontal",R="losecapture",S="contextmenu",X="col-resize",bk="disappear",bj="_applyVerticalScrollBarVisible",bi="_applyHorizontalScrollBarVisible",bp="__nk",bo="cellContextmenu",bf="close",bm="changeTablePaneModel",y="qx.ui.table.pane.Model",br="changeVerticalScrollBarVisible";
qx.Class.define(bg,{extend:qx.ui.core.Widget,include:qx.ui.core.scroll.MScrollBarFactory,construct:function(eu){arguments.callee.base.call(this);
this.__nc=eu;
var ev=new qx.ui.layout.Grid();
ev.setColumnFlex(0,1);
ev.setRowFlex(1,1);
this._setLayout(ev);
this.__nd=this._showChildControl(bA);
this.__ne=this._showChildControl(z);
this.__nf=this._showChildControl(bE);
this.__ng=this._showChildControl(by);
this.__nh=new qx.ui.container.Composite(new qx.ui.layout.HBox()).set({minWidth:0});
this._add(this.__nh,{row:0,column:0,colSpan:2});
this.__ni=new qx.ui.table.pane.Clipper();
this.__ni.add(this.__nf);
this.__ni.addListener(R,this._onChangeCaptureHeader,this);
this.__ni.addListener(bF,this._onMousemoveHeader,this);
this.__ni.addListener(G,this._onMousedownHeader,this);
this.__ni.addListener(E,this._onMouseupHeader,this);
this.__ni.addListener(bC,this._onClickHeader,this);
this.__nh.add(this.__ni,{flex:1});
this.__nj=new qx.ui.table.pane.Clipper();
this.__nj.add(this.__ng);
this.__nj.addListener(bb,this._onMousewheel,this);
this.__nj.addListener(bF,this._onMousemovePane,this);
this.__nj.addListener(G,this._onMousedownPane,this);
this.__nj.addListener(E,this._onMouseupPane,this);
this.__nj.addListener(bC,this._onClickPane,this);
this.__nj.addListener(S,this._onContextMenu,this);
this.__nj.addListener(U,this._onDblclickPane,this);
this.__nj.addListener(bw,this._onResizePane,this);
this._add(this.__nj,{row:1,column:0});
this.__nk=this.getChildControl(B);
this.getChildControl(H).hide();
this.addListener(P,this._onMouseout,this);
this.addListener(ba,this._onAppear,this);
this.addListener(bk,this._onDisappear,this);
this.__nl=new qx.event.Timer();
this.__nl.addListener(bl,this._oninterval,this);
this.initScrollTimeout();
},statics:{MIN_COLUMN_WIDTH:10,RESIZE_REGION_RADIUS:5,CLICK_TOLERANCE:5,HORIZONTAL_SCROLLBAR:1,VERTICAL_SCROLLBAR:2},events:{"changeScrollY":F,"changeScrollX":F,"cellClick":D,"cellDblclick":D,"cellContextmenu":D,"beforeSort":F},properties:{horizontalScrollBarVisible:{check:I,init:true,apply:bi,event:N},verticalScrollBarVisible:{check:I,init:true,apply:bj,event:br},tablePaneModel:{check:y,apply:J,event:bm},liveResize:{check:I,init:false},focusCellOnMouseMove:{check:I,init:false},selectBeforeFocus:{check:I,init:false},showCellFocusIndicator:{check:I,init:true,apply:W},scrollTimeout:{check:K,init:100,apply:L},appearance:{refine:true,init:bc}},members:{__nm:null,__nc:null,__nn:null,__no:null,__np:null,__nq:null,__nr:null,__ns:null,__nt:null,__nu:null,__nv:null,__nw:null,__nx:null,__ny:null,__nz:null,__nA:null,__nB:null,__nC:null,__nD:null,__nE:null,__nF:null,__nG:null,__nd:null,__ne:null,__nf:null,__ni:null,__ng:null,__nj:null,__nk:null,__nh:null,__nl:null,getPaneInsetRight:function(){var di=this.getTopRightWidget();
var dj=di&&di.isVisible()&&di.getBounds()?di.getBounds().width:0;
var dh=this.getVerticalScrollBarVisible()?this.getVerticalScrollBarWidth():0;
return Math.max(dj,dh);
},setPaneWidth:function(g){if(this.isVerticalScrollBarVisible()){g+=this.getPaneInsetRight();
}this.setWidth(g);
},_createChildControlImpl:function(cQ){var cR;

switch(cQ){case bE:cR=(this.getTable().getNewTablePaneHeader())(this);
break;
case by:cR=(this.getTable().getNewTablePane())(this);
break;
case B:cR=new qx.ui.table.pane.FocusIndicator(this);
cR.setUserBounds(0,0,0,0);
cR.setZIndex(1000);
cR.addListener(E,this._onMouseupFocusIndicator,this);
this.__nj.add(cR);
cR.exclude();
break;
case H:cR=new qx.ui.core.Widget();
cR.setUserBounds(0,0,0,0);
cR.setZIndex(1000);
this.__nj.add(cR);
break;
case bA:cR=this._createScrollBar(bs).set({minWidth:0,alignY:O});
cR.addListener(C,this._onScrollX,this);
this._add(cR,{row:2,column:0});
break;
case z:cR=this._createScrollBar(bu);
cR.addListener(C,this._onScrollY,this);
this._add(cR,{row:1,column:1});
break;
}return cR||arguments.callee.base.call(this,cQ);
},_applyHorizontalScrollBarVisible:function(c,d){this.__nd.setVisibility(c?bG:A);

if(!c){this.setScrollY(0,true);
}},_applyVerticalScrollBarVisible:function(h,i){this.__ne.setVisibility(h?bG:A);

if(!h){this.setScrollX(0);
}},_applyTablePaneModel:function(en,eo){if(eo!=null){eo.removeListener(bB,this._onPaneModelChanged,this);
}en.addListener(bB,this._onPaneModelChanged,this);
},_applyShowCellFocusIndicator:function(du,dv){if(du){this._updateFocusIndicator();
}else{if(this.__nk){this.__nk.hide();
}}},getScrollY:function(){return this.__ne.getPosition();
},setScrollY:function(scrollY,r){this.__ne.scrollTo(scrollY);

if(r){this._updateContent();
}},getScrollX:function(){return this.__nd.getPosition();
},setScrollX:function(scrollX){this.__nd.scrollTo(scrollX);
},getTable:function(){return this.__nc;
},onColVisibilityChanged:function(){this.updateHorScrollBarMaximum();
this._updateFocusIndicator();
},setColumnWidth:function(ek,el){this.__nf.setColumnWidth(ek,el);
this.__ng.setColumnWidth(ek,el);
var em=this.getTablePaneModel();
var x=em.getX(ek);

if(x!=-1){this.updateHorScrollBarMaximum();
this._updateFocusIndicator();
}},onColOrderChanged:function(){this.__nf.onColOrderChanged();
this.__ng.onColOrderChanged();
this.updateHorScrollBarMaximum();
},onTableModelDataChanged:function(ep,eq,er,es){this.__ng.onTableModelDataChanged(ep,eq,er,es);
var et=this.getTable().getTableModel().getRowCount();

if(et!=this.__nm){this.updateVerScrollBarMaximum();

if(this.getFocusedRow()>=et){if(et==0){this.setFocusedCell(null,null);
}else{this.setFocusedCell(this.getFocusedColumn(),et-1);
}}this.__nm=et;
}},onSelectionChanged:function(){this.__ng.onSelectionChanged();
},onFocusChanged:function(){this.__ng.onFocusChanged();
},onTableModelMetaDataChanged:function(){this.__nf.onTableModelMetaDataChanged();
this.__ng.onTableModelMetaDataChanged();
},_onPaneModelChanged:function(){this.__nf.onPaneModelChanged();
this.__ng.onPaneModelChanged();
},_onResizePane:function(){this.updateHorScrollBarMaximum();
this.updateVerScrollBarMaximum();
this._updateContent();
this.__nf._updateContent();
this.__nc._updateScrollBarVisibility();
},updateHorScrollBarMaximum:function(){var ft=this.__nj.getInnerSize();

if(!ft){return ;
}var fr=this.getTablePaneModel().getTotalWidth();
var fs=this.__nd;

if(ft.width<fr){var fq=Math.max(0,fr-ft.width);
fs.setMaximum(fq);
fs.setKnobFactor(ft.width/fr);
var fu=fs.getPosition();
fs.setPosition(Math.min(fu,fq));
}else{fs.setMaximum(0);
fs.setKnobFactor(1);
fs.setPosition(0);
}},updateVerScrollBarMaximum:function(){var eE=this.__nj.getInnerSize();

if(!eE){return ;
}var eC=this.getTable().getTableModel();
var ey=eC.getRowCount();

if(this.getTable().getKeepFirstVisibleRowComplete()){ey+=1;
}var ex=this.getTable().getRowHeight();
var eA=ey*ex;
var eD=this.__ne;

if(eE.height<eA){var ez=Math.max(0,eA-eE.height);
eD.setMaximum(ez);
eD.setKnobFactor(eE.height/eA);
var eB=eD.getPosition();
eD.setPosition(Math.min(eB,ez));
}else{eD.setMaximum(0);
eD.setKnobFactor(1);
eD.setPosition(0);
}},onKeepFirstVisibleRowCompleteChanged:function(){this.updateVerScrollBarMaximum();
this._updateContent();
},_onAppear:function(){this._startInterval(this.getScrollTimeout());
},_onDisappear:function(){this._stopInterval();
},_onScrollX:function(e){var fa=e.getData();
this.fireDataEvent(M,fa,e.getOldData());
this.__ni.scrollToX(fa);
this.__nj.scrollToX(fa);
},_onScrollY:function(e){this.fireDataEvent(V,e.getData(),e.getOldData());
this._postponedUpdateContent();
},_onMousewheel:function(e){var dw=this.getTable();

if(!dw.getEnabled()){return;
}var dy=qx.bom.client.Engine.GECKO?1:3;
var dx=this.__ne.getPosition()+((e.getWheelDelta()*dy)*dw.getRowHeight());
this.__ne.scrollTo(dx);
if(this.__nA&&this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(this.__nA,this.__nB);
}e.stop();
},__nH:function(cs){var cx=this.getTable();
var cy=this.__nf.getHeaderWidgetAtColumn(this.__nv);
var ct=cy.getSizeHint().minWidth;
var cv=Math.max(ct,this.__nx+cs-this.__nw);

if(this.getLiveResize()){var cu=cx.getTableColumnModel();
cu.setColumnWidth(this.__nv,cv);
}else{this.__nf.setColumnWidth(this.__nv,cv);
var cw=this.getTablePaneModel();
this._showResizeLine(cw.getColumnLeft(this.__nv)+cv);
}this.__nw+=cv-this.__nx;
this.__nx=cv;
},__nI:function(cp){var cq=qx.ui.table.pane.Scroller.CLICK_TOLERANCE;

if(this.__nf.isShowingColumnMoveFeedback()||cp>this.__nu+cq||cp<this.__nu-cq){this.__nr+=cp-this.__nu;
this.__nf.showColumnMoveFeedback(this.__nq,this.__nr);
var cr=this.__nc.getTablePaneScrollerAtPageX(cp);

if(this.__nt&&this.__nt!=cr){this.__nt.hideColumnMoveFeedback();
}
if(cr!=null){this.__ns=cr.showColumnMoveFeedback(cp);
}else{this.__ns=null;
}this.__nt=cr;
this.__nu=cp;
}},_onMousemoveHeader:function(e){var de=this.getTable();

if(!de.getEnabled()){return;
}var df=false;
var cX=null;
var dc=e.getDocumentLeft();
var dd=e.getDocumentTop();
this.__nA=dc;
this.__nB=dd;

if(this.__nv!=null){this.__nH(dc);
df=true;
e.stopPropagation();
}else if(this.__nq!=null){this.__nI(dc);
e.stopPropagation();
}else{var cY=this._getResizeColumnForPageX(dc);

if(cY!=-1){df=true;
}else{var db=de.getTableModel();
var dg=this._getColumnForPageX(dc);

if(dg!=null&&db.isColumnSortable(dg)){cX=dg;
}}}var da=df?X:null;
this.getApplicationRoot().setGlobalCursor(da);
this.setCursor(da);
this.__nf.setMouseOverColumn(cX);
},_onMousemovePane:function(e){var eT=this.getTable();

if(!eT.getEnabled()){return;
}var eV=e.getDocumentLeft();
var eW=e.getDocumentTop();
this.__nA=eV;
this.__nB=eW;
var eU=this._getRowForPagePos(eV,eW);

if(eU!=null&&this._getColumnForPageX(eV)!=null){if(this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(eV,eW);
}}this.__nf.setMouseOverColumn(null);
},_onMousedownHeader:function(e){if(!this.getTable().getEnabled()){return;
}var fm=e.getDocumentLeft();
var fn=this._getResizeColumnForPageX(fm);

if(fn!=-1){this._startResizeHeader(fn,fm);
e.stop();
}else{var fl=this._getColumnForPageX(fm);

if(fl!=null){this._startMoveHeader(fl,fm);
e.stop();
}}},_startResizeHeader:function(eF,eG){var eH=this.getTable().getTableColumnModel();
this.__nv=eF;
this.__nw=eG;
this.__nx=eH.getColumnWidth(this.__nv);
this.__ni.capture();
},_startMoveHeader:function(bX,bY){this.__nq=bX;
this.__nu=bY;
this.__nr=this.getTablePaneModel().getColumnLeft(bX);
this.__ni.capture();
},_onMousedownPane:function(e){var ee=this.getTable();

if(!ee.getEnabled()){return;
}
if(this.isEditing()){this.stopEditing();
}var eb=e.getDocumentLeft();
var ed=e.getDocumentTop();
var eg=this._getRowForPagePos(eb,ed);
var ef=this._getColumnForPageX(eb);

if(eg!==null){this.__ny={row:eg,col:ef};
var ec=this.getSelectBeforeFocus();

if(ec){ee.getSelectionManager().handleMouseDown(eg,e);
}if(!this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(eb,ed);
}
if(!ec){ee.getSelectionManager().handleMouseDown(eg,e);
}}},_onMouseupFocusIndicator:function(e){if(this.__ny&&!this.isEditing()&&this.__nk.getRow()==this.__ny.row&&this.__nk.getColumn()==this.__ny.col){this.__ny={};
this.fireEvent(bz,qx.ui.table.pane.CellEvent,[this,e,this.__ny.row,this.__ny.col],true);
}},_onChangeCaptureHeader:function(e){if(this.__nv!=null){this._stopResizeHeader();
}
if(this.__nq!=null){this._stopMoveHeader();
}},_stopResizeHeader:function(){var dk=this.getTable().getTableColumnModel();
if(!this.getLiveResize()){this._hideResizeLine();
dk.setColumnWidth(this.__nv,this.__nx);
}this.__nv=null;
this.__ni.releaseCapture();
this.getApplicationRoot().setGlobalCursor(null);
this.setCursor(null);
},_stopMoveHeader:function(){var n=this.getTable().getTableColumnModel();
var o=this.getTablePaneModel();
this.__nf.hideColumnMoveFeedback();

if(this.__nt){this.__nt.hideColumnMoveFeedback();
}
if(this.__ns!=null){var q=o.getFirstColumnX()+o.getX(this.__nq);
var m=this.__ns;

if(m!=q&&m!=q+1){var p=n.getVisibleColumnAtX(q);
var l=n.getVisibleColumnAtX(m);
var k=n.getOverallX(p);
var j=(l!=null)?n.getOverallX(l):n.getOverallColumnCount();

if(j>k){j--;
}n.moveColumn(k,j);
}}this.__nq=null;
this.__ns=null;
this.__ni.releaseCapture();
},_onMouseupPane:function(e){var fo=this.getTable();

if(!fo.getEnabled()){return;
}var fp=this._getRowForPagePos(e.getDocumentLeft(),e.getDocumentTop());

if(fp!=-1&&fp!=null&&this._getColumnForPageX(e.getDocumentLeft())!=null){fo.getSelectionManager().handleMouseUp(fp,e);
}},_onMouseupHeader:function(e){var cP=this.getTable();

if(!cP.getEnabled()){return;
}
if(this.__nv!=null){this._stopResizeHeader();
this.__nz=true;
e.stop();
}else if(this.__nq!=null){this._stopMoveHeader();
e.stop();
}},_onClickHeader:function(e){if(this.__nz){this.__nz=false;
return;
}var eM=this.getTable();

if(!eM.getEnabled()){return;
}var eK=eM.getTableModel();
var eL=e.getDocumentLeft();
var eJ=this._getResizeColumnForPageX(eL);

if(eJ==-1){var eP=this._getColumnForPageX(eL);

if(eP!=null&&eK.isColumnSortable(eP)){var eI=eK.getSortColumnIndex();
var eN=(eP!=eI)?true:!eK.isSortAscending();
var eO={column:eP,ascending:eN};

if(this.fireDataEvent(be,eO)){eK.sortByColumn(eP,eN);
eM.getSelectionModel().resetSelection();
}}}e.stop();
},_onClickPane:function(e){var s=this.getTable();

if(!s.getEnabled()){return;
}var v=e.getDocumentLeft();
var w=e.getDocumentTop();
var t=this._getRowForPagePos(v,w);
var u=this._getColumnForPageX(v);

if(t!=null&&u!=null){s.getSelectionManager().handleClick(t,e);

if(this.__nk.isHidden()||(this.__ny&&!this.isEditing()&&t==this.__ny.row&&u==this.__ny.col)){this.__ny={};
this.fireEvent(bz,qx.ui.table.pane.CellEvent,[this,e,t,u],true);
}}},_onContextMenu:function(e){var cV=e.getDocumentLeft();
var cW=e.getDocumentTop();
var cT=this._getRowForPagePos(cV,cW);
var cU=this._getColumnForPageX(cV);

if(this.__nk.isHidden()||(this.__ny&&cT==this.__ny.row&&cU==this.__ny.col)){this.__ny={};
this.fireEvent(bo,qx.ui.table.pane.CellEvent,[this,e,cT,cU],true);
var cS=this.getTable().getContextMenu();

if(cS){if(cS.getChildren().length>0){cS.openAtMouse(e);
}else{cS.exclude();
}e.preventDefault();
}}},_onContextMenuOpen:function(e){},_onDblclickPane:function(e){var eR=e.getDocumentLeft();
var eS=e.getDocumentTop();
this._focusCellAtPagePos(eR,eS);
this.startEditing();
var eQ=this._getRowForPagePos(eR,eS);

if(eQ!=-1&&eQ!=null){this.fireEvent(bn,qx.ui.table.pane.CellEvent,[this,e,eQ],true);
}},_onMouseout:function(e){var fk=this.getTable();

if(!fk.getEnabled()){return;
}if(this.__nv==null){this.setCursor(null);
this.getApplicationRoot().setGlobalCursor(null);
}this.__nf.setMouseOverColumn(null);
},_showResizeLine:function(x){var ei=this._showChildControl(H);
var eh=ei.getWidth();
var ej=this.__nj.getBounds();
ei.setUserBounds(x-Math.round(eh/2),0,eh,ej.height);
},_hideResizeLine:function(){this._excludeChildControl(H);
},showColumnMoveFeedback:function(dz){var dI=this.getTablePaneModel();
var dH=this.getTable().getTableColumnModel();
var dC=this.__ng.getContainerLocation().left;
var dG=dI.getColumnCount();
var dD=0;
var dB=0;
var dL=dC;

for(var dA=0;dA<dG;dA++){var dE=dI.getColumnAtX(dA);
var dJ=dH.getColumnWidth(dE);

if(dz<dL+dJ/2){break;
}dL+=dJ;
dD=dA+1;
dB=dL-dC;
}var dF=this.__nj.getContainerLocation().left;
var dK=this.__nj.getBounds().width;
var scrollX=dF-dC;
dB=qx.lang.Number.limit(dB,scrollX+2,scrollX+dK-1);
this._showResizeLine(dB);
return dI.getFirstColumnX()+dD;
},hideColumnMoveFeedback:function(){this._hideResizeLine();
},_focusCellAtPagePos:function(cK,cL){var cN=this._getRowForPagePos(cK,cL);

if(cN!=-1&&cN!=null){var cM=this._getColumnForPageX(cK);
this.__nc.setFocusedCell(cM,cN);
}},setFocusedCell:function(bV,bW){if(!this.isEditing()){this.__ng.setFocusedCell(bV,bW,this.__no);
this.__nC=bV;
this.__nD=bW;
this._updateFocusIndicator();
}},getFocusedColumn:function(){return this.__nC;
},getFocusedRow:function(){return this.__nD;
},scrollCellVisible:function(bH,bI){var bS=this.getTablePaneModel();
var bJ=bS.getX(bH);

if(bJ!=-1){var bP=this.__nj.getInnerSize();

if(!bP){return;
}var bQ=this.getTable().getTableColumnModel();
var bM=bS.getColumnLeft(bH);
var bT=bQ.getColumnWidth(bH);
var bK=this.getTable().getRowHeight();
var bU=bI*bK;
var scrollX=this.getScrollX();
var scrollY=this.getScrollY();
var bR=Math.min(bM,bM+bT-bP.width);
var bO=bM;
this.setScrollX(Math.max(bR,Math.min(bO,scrollX)));
var bL=bU+bK-bP.height;

if(this.getTable().getKeepFirstVisibleRowComplete()){bL+=bK;
}var bN=bU;
this.setScrollY(Math.max(bL,Math.min(bN,scrollY)),true);
}},isEditing:function(){return this.__nE!=null;
},startEditing:function(){var fg=this.getTable();
var fe=fg.getTableModel();
var fi=this.__nC;

if(!this.isEditing()&&(fi!=null)&&fe.isColumnEditable(fi)){var fj=this.__nD;
var fc=this.getTablePaneModel().getX(fi);
var fd=fe.getValue(fi,fj);
fg.blockHeaderElements();
this.__nF=fg.getTableColumnModel().getCellEditorFactory(fi);
var ff={col:fi,row:fj,xPos:fc,value:fd,table:fg};
this.__nE=this.__nF.createCellEditor(ff);
if(this.__nE===null){return false;
}else if(this.__nE instanceof qx.ui.window.Window){this.__nE.setModal(true);
this.__nE.setShowClose(false);
this.__nE.addListener(bf,this._onCellEditorModalWindowClose,this);
var f=fg.getModalCellEditorPreOpenFunction();

if(f!=null){f(this.__nE,ff);
}this.__nE.open();
}else{var fh=this.__nk.getInnerSize();
this.__nE.setUserBounds(0,0,fh.width,fh.height);
this.__nk.addListener(G,function(e){this.__ny={row:this.__nD,col:this.__nC};
e.stopPropagation();
},this);
this.__nk.add(this.__nE);
this.__nk.addState(bD);
this.__nk.setKeepActive(false);
this.__nE.focus();
this.__nE.activate();
}return true;
}return false;
},stopEditing:function(){this.flushEditor();
this.cancelEditing();
},flushEditor:function(){if(this.isEditing()){var eY=this.__nF.getCellEditorValue(this.__nE);
var eX=this.getTable().getTableModel().getValue(this.__nC,this.__nD);
this.getTable().getTableModel().setValue(this.__nC,this.__nD,eY);
this.__nc.focus();
this.__nc.fireDataEvent(bd,{row:this.__nD,col:this.__nC,oldValue:eX,value:eY});
}},cancelEditing:function(){if(this.isEditing()&&!this.__nE.pendingDispose){this.getTable().unblockHeaderElements();

if(this._cellEditorIsModalWindow){this.__nE.destroy();
this.__nE=null;
this.__nF=null;
this.__nE.pendingDispose=true;
}else{this.__nk.removeState(bD);
this.__nk.setKeepActive(true);
this.__nE.destroy();
this.__nE=null;
this.__nF=null;
}}},_onCellEditorModalWindowClose:function(e){this.stopEditing();
},_getColumnForPageX:function(ci){var cl=this.getTable().getTableColumnModel();
var cm=this.getTablePaneModel();
var ck=cm.getColumnCount();
var co=this.__nf.getContainerLocation().left;

for(var x=0;x<ck;x++){var cj=cm.getColumnAtX(x);
var cn=cl.getColumnWidth(cj);
co+=cn;

if(ci<co){return cj;
}}return null;
},_getResizeColumnForPageX:function(ca){var ce=this.getTable().getTableColumnModel();
var cf=this.getTablePaneModel();
var cd=cf.getColumnCount();
var ch=this.__nf.getContainerLocation().left;
var cb=qx.ui.table.pane.Scroller.RESIZE_REGION_RADIUS;

for(var x=0;x<cd;x++){var cc=cf.getColumnAtX(x);
var cg=ce.getColumnWidth(cc);
ch+=cg;

if(ca>=(ch-cb)&&ca<=(ch+cb)){return cc;
}}return -1;
},_getRowForPagePos:function(cz,cA){var cB=this.__ng.getContentLocation();

if(cz<cB.left||cz>cB.right){return null;
}
if(cA>=cB.top&&cA<=cB.bottom){var cC=this.getTable().getRowHeight();
var scrollY=this.__ne.getPosition();

if(this.getTable().getKeepFirstVisibleRowComplete()){scrollY=Math.floor(scrollY/cC)*cC;
}var cF=scrollY+cA-cB.top;
var cH=Math.floor(cF/cC);
var cG=this.getTable().getTableModel();
var cD=cG.getRowCount();
return (cH<cD)?cH:null;
}var cE=this.__nf.getContainerLocation();

if(cA>=cE.top&&cA<=cE.bottom&&cz<=cE.right){return -1;
}return null;
},setTopRightWidget:function(a){var b=this.__nG;

if(b!=null){this.__nh.remove(b);
}
if(a!=null){this.__nh.add(a);
}this.__nG=a;
},getTopRightWidget:function(){return this.__nG;
},getHeader:function(){return this.__nf;
},getTablePane:function(){return this.__ng;
},getVerticalScrollBarWidth:function(){var cO=this.__ne;
return cO.isVisible()?(cO.getSizeHint().width||0):0;
},getNeededScrollBars:function(dM,dN){var dT=this.__ne.getSizeHint().width;
var dU=this.__nj.getInnerSize();
var dO=dU?dU.width:0;

if(this.getVerticalScrollBarVisible()){dO+=dT;
}var dX=dU?dU.height:0;

if(this.getHorizontalScrollBarVisible()){dX+=dT;
}var dR=this.getTable().getTableModel();
var dV=dR.getRowCount();
var dY=this.getTablePaneModel().getTotalWidth();
var dW=this.getTable().getRowHeight()*dV;
var dQ=false;
var ea=false;

if(dY>dO){dQ=true;

if(dW>dX-dT){ea=true;
}}else if(dW>dX){ea=true;

if(!dN&&(dY>dO-dT)){dQ=true;
}}var dS=qx.ui.table.pane.Scroller.HORIZONTAL_SCROLLBAR;
var dP=qx.ui.table.pane.Scroller.VERTICAL_SCROLLBAR;
return ((dM||dQ)?dS:0)|((dN||!ea)?0:dP);
},_applyScrollTimeout:function(cI,cJ){this._startInterval(cI);
},_startInterval:function(ew){this.__nl.setInterval(ew);
this.__nl.start();
},_stopInterval:function(){this.__nl.stop();
},_postponedUpdateContent:function(){this._updateContent();
},_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.__no&&!this.__ng._layoutPending){this.__no=false;
this._updateContent();
}}),_updateContent:function(){var dq=this.__nj.getInnerSize();

if(!dq){return;
}var dt=dq.height;
var scrollX=this.__nd.getPosition();
var scrollY=this.__ne.getPosition();
var dm=this.getTable().getRowHeight();
var dn=Math.floor(scrollY/dm);
var ds=this.__ng.getFirstVisibleRow();
this.__ng.setFirstVisibleRow(dn);
var dp=Math.ceil(dt/dm);
var dl=0;
var dr=this.getTable().getKeepFirstVisibleRowComplete();

if(!dr){dp++;
dl=scrollY%dm;
}this.__ng.setVisibleRowCount(dp);

if(dn!=ds){this._updateFocusIndicator();
}this.__nj.scrollToX(scrollX);
if(!dr){this.__nj.scrollToY(dl);
}},_updateFocusIndicator:function(){if(!this.getShowCellFocusIndicator()){return;
}var fv=this.getTable();

if(!fv.getEnabled()){return;
}this.__nk.moveToCell(this.__nC,this.__nD);
}},destruct:function(){this._stopInterval();
var fb=this.getTablePaneModel();

if(fb){fb.dispose();
}this.__ny=this.__nG=this.__nc=null;
this._disposeObjects(bt,Y,bh,Q,bp,bq,bv,T,bx);
}});
})();
(function(){var r="px",q=".qooxdoo-table-cell-icon {",p="abstract",o="",n="qx.ui.table.cellrenderer.AbstractImage",m=" qooxdoo-table-cell-icon",l="<div></div>",k="'",j="no-repeat",i="}",c="  text-align:center;",h="inline-block",f="static",b="top",a="  padding-top:1px;",e="title='",d="string",g="-moz-inline-box";
qx.Class.define(n,{extend:qx.ui.table.cellrenderer.Abstract,type:p,construct:function(){arguments.callee.base.call(this);
var t=arguments.callee.self;

if(!t.stylesheet){t.stylesheet=qx.bom.Stylesheet.createElement(q+c+a+i);
}},members:{__oT:16,__oU:16,_insetY:2,__oV:null,_identifyImage:function(s){throw new Error("_identifyImage is abstract");
},_getImageInfos:function(z){var A=this._identifyImage(z);
if(A==null||typeof z==d){A={url:A,tooltip:null};
}
if(z.width&&z.height){var B={width:z.imageWidth,height:z.imageHeight};
}else{B=this.__oW(A.url);
}A.width=B.width;
A.height=B.height;
return A;
},__oW:function(u){var x=qx.util.ResourceManager.getInstance();
var w=qx.io.ImageLoader;
var v,y;
if(x.has(u)){v=x.getImageWidth(u);
y=x.getImageHeight(u);
}else if(w.isLoaded(u)){v=w.getWidth(u);
y=w.getHeight(u);
}else{v=this.__oT;
y=this.__oU;
}return {width:v,height:y};
},createDataCellHtml:function(G,H){this.__oV=this._getImageInfos(G);
return arguments.callee.base.call(this,G,H);
},_getCellClass:function(F){return arguments.callee.base.call(this)+m;
},_getContentHtml:function(C){var content=l;
if(this.__oV.url){var content=qx.bom.element.Decoration.create(this.__oV.url,j,{width:this.__oV.width+r,height:this.__oV.height+r,display:qx.bom.client.Engine.GECKO&&qx.bom.client.Engine.VERSION<1.9?g:h,verticalAlign:b,position:f});
}return content;
},_getCellAttributes:function(D){var E=this.__oV.tooltip;

if(E){return e+E+k;
}else{return o;
}}},destruct:function(){this.__oV=null;
}});
})();
(function(){var g="Number",f="qx.event.type.Event",e="_applyFirstColumnX",d="Integer",c="qx.ui.table.pane.Model",b="_applyMaxColumnCount",a="visibilityChangedPre";
qx.Class.define(c,{extend:qx.core.Object,construct:function(i){arguments.callee.base.call(this);
i.addListener(a,this._onColVisibilityChanged,this);
this.__oG=i;
},events:{"modelChanged":f},statics:{EVENT_TYPE_MODEL_CHANGED:"modelChanged"},properties:{firstColumnX:{check:d,init:0,apply:e},maxColumnCount:{check:g,init:-1,apply:b}},members:{__oH:null,__oG:null,_applyFirstColumnX:function(u,v){this.__oH=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},_applyMaxColumnCount:function(j,k){this.__oH=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},setTableColumnModel:function(n){this.__oG=n;
this.__oH=null;
},_onColVisibilityChanged:function(h){this.__oH=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},getColumnCount:function(){if(this.__oH==null){var w=this.getFirstColumnX();
var z=this.getMaxColumnCount();
var y=this.__oG.getVisibleColumnCount();

if(z==-1||(w+z)>y){this.__oH=y-w;
}else{this.__oH=z;
}}return this.__oH;
},getColumnAtX:function(l){var m=this.getFirstColumnX();
return this.__oG.getVisibleColumnAtX(m+l);
},getX:function(r){var s=this.getFirstColumnX();
var t=this.getMaxColumnCount();
var x=this.__oG.getVisibleX(r)-s;

if(x>=0&&(t==-1||x<t)){return x;
}else{return -1;
}},getColumnLeft:function(A){var D=0;
var C=this.getColumnCount();

for(var x=0;x<C;x++){var B=this.getColumnAtX(x);

if(B==A){return D;
}D+=this.__oG.getColumnWidth(B);
}return -1;
},getTotalWidth:function(){var o=0;
var p=this.getColumnCount();

for(var x=0;x<p;x++){var q=this.getColumnAtX(x);
o+=this.__oG.getColumnWidth(q);
}return o;
}},destruct:function(){this.__oG=null;
}});
})();
(function(){var f="changeVisible",d="qx.ui.table.columnmenu.MenuItem",c="_applyVisible",b="Boolean",a="changeValue";
qx.Class.define(d,{extend:qx.ui.menu.CheckBox,implement:qx.ui.table.IColumnMenuItem,properties:{visible:{check:b,init:true,apply:c,event:f}},construct:function(g){arguments.callee.base.call(this,g);
this.addListener(a,function(e){this.bInListener=true;
this.setVisible(e.getData());
this.bInListener=false;
});
},members:{__mG:false,_applyVisible:function(h,i){if(!this.bInListener){this.setValue(h);
}}}});
})();
(function(){var a="qx.lang.Number";
qx.Class.define(a,{statics:{isInRange:function(e,f,g){return e>=f&&e<=g;
},isBetweenRange:function(h,i,j){return h>i&&h<j;
},limit:function(b,c,d){if(d!=null&&b>d){return d;
}else if(c!=null&&b<c){return c;
}else{return b;
}}}});
})();
(function(){var o="hovered",n="__mY",m="qx.ui.table.pane.Header";
qx.Class.define(m,{extend:qx.ui.core.Widget,construct:function(J){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.HBox());
this.__mX=new qx.ui.core.Blocker(this);
this.__mY=J;
},members:{__mY:null,__na:null,__nb:null,__mX:null,getPaneScroller:function(){return this.__mY;
},getTable:function(){return this.__mY.getTable();
},getBlocker:function(){return this.__mX;
},onColOrderChanged:function(){this._updateContent(true);
},onPaneModelChanged:function(){this._updateContent(true);
},onTableModelMetaDataChanged:function(){this._updateContent();
},setColumnWidth:function(E,F){var G=this.getHeaderWidgetAtColumn(E);

if(G!=null){G.setWidth(F);
}},setMouseOverColumn:function(C){if(C!=this.__nb){if(this.__nb!=null){var D=this.getHeaderWidgetAtColumn(this.__nb);

if(D!=null){D.removeState(o);
}}
if(C!=null){this.getHeaderWidgetAtColumn(C).addState(o);
}this.__nb=C;
}},getHeaderWidgetAtColumn:function(H){var I=this.getPaneScroller().getTablePaneModel().getX(H);
return this._getChildren()[I];
},showColumnMoveFeedback:function(r,x){var v=this.getContainerLocation();

if(this.__na==null){var s=this.getPaneScroller().getTablePaneModel().getX(r);
var u=this._getChildren()[s];
var w=this.getTable().getTableModel();
var z=this.getTable().getTableColumnModel();
var A={xPos:s,col:r,name:w.getColumnName(r)};
var y=z.getHeaderCellRenderer(r);
var t=y.createHeaderCell(A);
var B=u.getBounds();
t.setWidth(B.width);
t.setHeight(B.height);
t.setZIndex(1000000);
t.setOpacity(0.8);
t.setLayoutProperties({top:v.top});
this.getApplicationRoot().add(t);
this.__na=t;
}this.__na.setLayoutProperties({left:v.left+x});
this.__na.show();
},hideColumnMoveFeedback:function(){if(this.__na!=null){this.__na.destroy();
this.__na=null;
}},isShowingColumnMoveFeedback:function(){return this.__na!=null;
},_updateContent:function(a){var f=this.getTable().getTableModel();
var i=this.getTable().getTableColumnModel();
var j=this.getPaneScroller().getTablePaneModel();
var l=this._getChildren();
var g=j.getColumnCount();
var b=f.getSortColumnIndex();
if(a){this._cleanUpCells();
}var c={};
c.sortedAscending=f.isSortAscending();

for(var x=0;x<g;x++){var e=j.getColumnAtX(x);

if(e===undefined){continue;
}var k=i.getColumnWidth(e);
var h=i.getHeaderCellRenderer(e);
c.xPos=x;
c.col=e;
c.name=f.getColumnName(e);
c.editable=f.isColumnEditable(e);
c.sorted=(e==b);
var d=l[x];
if(d==null){d=h.createHeaderCell(c);
d.set({width:k});
this._add(d);
}else{h.updateHeaderCell(c,d);
}}},_cleanUpCells:function(){var q=this._getChildren();

for(var x=q.length-1;x>=0;x--){var p=q[x];
p.destroy();
}}},destruct:function(){this.__mX.dispose();
this._disposeObjects(n);
}});
})();
(function(){var t="",s="table-row-background-even",r="table-row-background-selected",q="table-row",p="background-color:",o="table-row-background-focused",n=';border-bottom: 1px solid ',m=';color:',l="table-row-selected",k="table-row-background-odd",d="default",j="table-row-background-focused-selected",g="qx.ui.table.rowrenderer.Default",c="table-row-line",b="'",f="height:",e=";",h="px;",a="1px solid ",i="Boolean";
qx.Class.define(g,{extend:qx.core.Object,implement:qx.ui.table.IRowRenderer,construct:function(){arguments.callee.base.call(this);
this.__lS=t;
this.__lS={};
this.__lT={};
this._renderFont(qx.theme.manager.Font.getInstance().resolve(d));
var w=qx.theme.manager.Color.getInstance();
this.__lT.bgcolFocusedSelected=w.resolve(j);
this.__lT.bgcolFocused=w.resolve(o);
this.__lT.bgcolSelected=w.resolve(r);
this.__lT.bgcolEven=w.resolve(s);
this.__lT.bgcolOdd=w.resolve(k);
this.__lT.colSelected=w.resolve(l);
this.__lT.colNormal=w.resolve(q);
this.__lT.horLine=w.resolve(c);
},properties:{highlightFocusRow:{check:i,init:true}},members:{__lT:null,__lU:null,__lS:null,_insetY:1,_renderFont:function(u){if(u){this.__lU=u.getStyles();
this.__lS=qx.bom.element.Style.compile(this.__lU);
this.__lS=this.__lS.replace(/"/g,b);
}else{this.__lS=t;
this.__lU=qx.bom.Font.getDefaultStyles();
}},updateDataRowElement:function(x,y){var A=this.__lU;
var z=y.style;
qx.bom.element.Style.setStyles(y,A);

if(x.focusedRow&&this.getHighlightFocusRow()){z.backgroundColor=x.selected?this.__lT.bgcolFocusedSelected:this.__lT.bgcolFocused;
}else{if(x.selected){z.backgroundColor=this.__lT.bgcolSelected;
}else{z.backgroundColor=(x.row%2==0)?this.__lT.bgcolEven:this.__lT.bgcolOdd;
}}z.color=x.selected?this.__lT.colSelected:this.__lT.colNormal;
z.borderBottom=a+this.__lT.horLine;
},getRowHeightStyle:function(v){if(qx.bom.client.Feature.CONTENT_BOX){v-=this._insetY;
}return f+v+h;
},createRowStyle:function(C){var D=[];
D.push(e);
D.push(this.__lS);
D.push(p);

if(C.focusedRow&&this.getHighlightFocusRow()){D.push(C.selected?this.__lT.bgcolFocusedSelected:this.__lT.bgcolFocused);
}else{if(C.selected){D.push(this.__lT.bgcolSelected);
}else{D.push((C.row%2==0)?this.__lT.bgcolEven:this.__lT.bgcolOdd);
}}D.push(m);
D.push(C.selected?this.__lT.colSelected:this.__lT.colNormal);
D.push(n,this.__lT.horLine);
return D.join(t);
},getRowClass:function(B){return t;
}},destruct:function(){this.__lT=this.__lU=this.__lS=null;
}});
})();
(function(){var g="String",f="_applyIconTrue",e="decoration/table/boolean-true.png",d="qx.ui.table.cellrenderer.Boolean",c=";padding-top:4px;",b="decoration/table/boolean-false.png",a="_applyIconFalse";
qx.Class.define(d,{extend:qx.ui.table.cellrenderer.AbstractImage,construct:function(){arguments.callee.base.call(this);
this.__vJ=qx.util.AliasManager.getInstance();
this.initIconTrue();
this.initIconFalse();
},properties:{iconTrue:{check:g,init:e,apply:f},iconFalse:{check:g,init:b,apply:a}},members:{__vK:null,__vL:false,__vJ:null,_applyIconTrue:function(h){this.__vK=this.__vJ.resolve(h);
},_applyIconFalse:function(j){this.__vL=this.__vJ.resolve(j);
},_insetY:5,_getCellStyle:function(i){return arguments.callee.base.call(this,i)+c;
},_identifyImage:function(k){var l={imageWidth:11,imageHeight:11};

switch(k.value){case true:l.url=this.__vK;
break;
case false:l.url=this.__vL;
break;
default:l.url=null;
break;
}return l;
}},destruct:function(){this.__vJ=null;
}});
})();
(function(){var z="column-button",y="Function",w="Boolean",v="qx.event.type.Data",u="statusbar",t="qx.ui.table.pane.CellEvent",s="PageUp",r="__lR",q='"',p="changeLocale",bM="changeSelection",bL="qx.dynlocale",bK="Enter",bJ="metaDataChanged",bI="dataChanged",bH="on",bG="_applyStatusBarVisible",bF="columnVisibilityMenuCreateStart",bE="blur",bD="qx.ui.table.Table",G="columnVisibilityMenuCreateEnd",H="Use 'resetSelection' instead.",E="verticalScrollBarChanged",F="_applyMetaColumnCounts",C="one of one row",D="focus",A="changeDataRowRenderer",B="changeHeaderCellHeight",O="Escape",P="A",bf="changeSelectionModel",bb="Left",bn="Down",bi="Integer",bz="_applyHeaderCellHeight",bt="visibilityChanged",V="qx.ui.table.ITableModel",bC="orderChanged",bB="_applySelectionModel",bA="menu",T="_applyAdditionalStatusBarText",X="_applyFocusCellOnMouseMove",ba="table",bd="_applyColumnVisibilityButtonVisible",bg="changeTableModel",bj="qx.event.type.Event",bp="tableWidthChanged",bv="End",I="Object",J="_applyShowCellFocusIndicator",W="__lI",bm="resize",bl="changeScrollY",bk="_applyTableModel",br="menu-button",bq="_applyKeepFirstVisibleRowComplete",bh="widthChanged",bo="Home",m="_applyRowHeight",bu="F2",K="appear",L="Up",bc="%1 rows",n="qx.ui.table.selection.Model",o="one row",S="__lP",M="PageDown",N="%1 of %2 rows",R="keypress",be="changeRowHeight",bx="__lQ",bw="Number",Y="__lH",by="changeVisible",U="qx.ui.table.IRowRenderer",bs="Right",Q="Space";
qx.Class.define(bD,{extend:qx.ui.core.Widget,construct:function(dQ,dR){arguments.callee.base.call(this);
if(!dR){dR={};
}
if(dR.selectionManager){this.setNewSelectionManager(dR.selectionManager);
}
if(dR.selectionModel){this.setNewSelectionModel(dR.selectionModel);
}
if(dR.tableColumnModel){this.setNewTableColumnModel(dR.tableColumnModel);
}
if(dR.tablePane){this.setNewTablePane(dR.tablePane);
}
if(dR.tablePaneHeader){this.setNewTablePaneHeader(dR.tablePaneHeader);
}
if(dR.tablePaneScroller){this.setNewTablePaneScroller(dR.tablePaneScroller);
}
if(dR.tablePaneModel){this.setNewTablePaneModel(dR.tablePaneModel);
}
if(dR.columnMenu){this.setNewColumnMenu(dR.columnMenu);
}this._setLayout(new qx.ui.layout.VBox());
this.__lH=new qx.ui.container.Composite(new qx.ui.layout.HBox());
this._add(this.__lH,{flex:1});
this.setDataRowRenderer(new qx.ui.table.rowrenderer.Default(this));
this.__lI=this.getNewSelectionManager()(this);
this.setSelectionModel(this.getNewSelectionModel()(this));
this.setTableModel(dQ||this.getEmptyTableModel());
this.setMetaColumnCounts([-1]);
this.setTabIndex(1);
this.addListener(R,this._onKeyPress);
this.addListener(D,this._onFocusChanged);
this.addListener(bE,this._onFocusChanged);
var dS=new qx.ui.core.Widget().set({height:0});
this._add(dS);
dS.addListener(bm,this._onResize,this);
this.__lJ=null;
this.__lK=null;
if(qx.core.Variant.isSet(bL,bH)){qx.locale.Manager.getInstance().addListener(p,this._onChangeLocale,this);
}this.initStatusBarVisible();
},events:{"columnVisibilityMenuCreateStart":v,"columnVisibilityMenuCreateEnd":v,"tableWidthChanged":bj,"verticalScrollBarChanged":v,"cellClick":t,"cellDblclick":t,"cellContextmenu":t,"dataEdited":v},statics:{__lL:{cellClick:1,cellDblclick:1,cellContextmenu:1}},properties:{appearance:{refine:true,init:ba},focusable:{refine:true,init:true},minWidth:{refine:true,init:50},selectable:{refine:true,init:false},selectionModel:{check:n,apply:bB,event:bf},tableModel:{check:V,apply:bk,event:bg},rowHeight:{check:bw,init:20,apply:m,event:be},forceLineHeight:{check:w,init:true},headerCellHeight:{check:bi,init:16,apply:bz,event:B,nullable:true},statusBarVisible:{check:w,init:true,apply:bG},additionalStatusBarText:{nullable:true,init:null,apply:T},columnVisibilityButtonVisible:{check:w,init:true,apply:bd},metaColumnCounts:{check:I,apply:F},focusCellOnMouseMove:{check:w,init:false,apply:X},rowFocusChangeModifiesSelection:{check:w,init:true},showCellFocusIndicator:{check:w,init:true,apply:J},keepFirstVisibleRowComplete:{check:w,init:true,apply:bq},alwaysUpdateCells:{check:w,init:false},dataRowRenderer:{check:U,init:null,nullable:true,event:A},modalCellEditorPreOpenFunction:{check:y,init:null,nullable:true},newColumnMenu:{check:y,init:function(){return new qx.ui.table.columnmenu.Button();
}},newSelectionManager:{check:y,init:function(eg){return new qx.ui.table.selection.Manager(eg);
}},newSelectionModel:{check:y,init:function(d){return new qx.ui.table.selection.Model(d);
}},newTableColumnModel:{check:y,init:function(cD){return new qx.ui.table.columnmodel.Basic(cD);
}},newTablePane:{check:y,init:function(cC){return new qx.ui.table.pane.Pane(cC);
}},newTablePaneHeader:{check:y,init:function(dY){return new qx.ui.table.pane.Header(dY);
}},newTablePaneScroller:{check:y,init:function(c){return new qx.ui.table.pane.Scroller(c);
}},newTablePaneModel:{check:y,init:function(cR){return new qx.ui.table.pane.Model(cR);
}}},members:{__lJ:null,__lK:null,__lH:null,__lI:null,__lM:null,__lN:null,__lO:null,__lP:null,__lQ:null,__lR:null,_createChildControlImpl:function(dx){var dy;

switch(dx){case u:dy=new qx.ui.basic.Label();
dy.set({allowGrowX:true});
this._add(dy);
break;
case z:dy=this.getNewColumnMenu()();
dy.set({focusable:false});
var dz=dy.factory(bA,{table:this});
dz.addListener(K,this._initColumnMenu,this);
break;
}return dy||arguments.callee.base.call(this,dx);
},_applySelectionModel:function(cA,cB){this.__lI.setSelectionModel(cA);

if(cB!=null){cB.removeListener(bM,this._onSelectionChanged,this);
}cA.addListener(bM,this._onSelectionChanged,this);
},_applyRowHeight:function(dT,dU){var dV=this._getPaneScrollerArr();

for(var i=0;i<dV.length;i++){dV[i].updateVerScrollBarMaximum();
}},_applyHeaderCellHeight:function(ec,ed){var ee=this._getPaneScrollerArr();

for(var i=0;i<ee.length;i++){ee[i].getHeader().setHeight(ec);
}},getEmptyTableModel:function(){if(!this.__lR){this.__lR=new qx.ui.table.model.Simple();
this.__lR.setColumns([]);
this.__lR.setData([]);
}return this.__lR;
},_applyTableModel:function(e,f){this.getTableColumnModel().init(e.getColumnCount(),this);

if(f!=null){f.removeListener(bJ,this._onTableModelMetaDataChanged,this);
f.removeListener(bI,this._onTableModelDataChanged,this);
}e.addListener(bJ,this._onTableModelMetaDataChanged,this);
e.addListener(bI,this._onTableModelDataChanged,this);
this._updateStatusBar();
this._updateTableData(0,e.getRowCount(),0,e.getColumnCount());
this._onTableModelMetaDataChanged();
},getTableColumnModel:function(){if(!this.__lQ){var du=this.__lQ=this.getNewTableColumnModel()(this);
du.addListener(bt,this._onColVisibilityChanged,this);
du.addListener(bh,this._onColWidthChanged,this);
du.addListener(bC,this._onColOrderChanged,this);
var dt=this.getTableModel();
du.init(dt.getColumnCount(),this);
var ds=this._getPaneScrollerArr();

for(var i=0;i<ds.length;i++){var dv=ds[i];
var dw=dv.getTablePaneModel();
dw.setTableColumnModel(du);
}}return this.__lQ;
},_applyStatusBarVisible:function(ea,eb){if(ea){this._showChildControl(u);
}else{this._excludeChildControl(u);
}
if(ea){this._updateStatusBar();
}},_applyAdditionalStatusBarText:function(em,en){this.__lM=em;
this._updateStatusBar();
},_applyColumnVisibilityButtonVisible:function(dq,dr){if(dq){this._showChildControl(z);
}else{this._excludeChildControl(z);
}},_applyMetaColumnCounts:function(bQ,bR){var bY=bQ;
var bS=this._getPaneScrollerArr();
var bW={};

if(bQ>bR){var cb=qx.event.Registration.getManager(bS[0]);

for(var cc in qx.ui.table.Table.__lL){bW[cc]={};
bW[cc].capture=cb.getListeners(bS[0],cc,true);
bW[cc].bubble=cb.getListeners(bS[0],cc,false);
}}this._cleanUpMetaColumns(bY.length);
var bX=0;

for(var i=0;i<bS.length;i++){var cd=bS[i];
var ca=cd.getTablePaneModel();
ca.setFirstColumnX(bX);
ca.setMaxColumnCount(bY[i]);
bX+=bY[i];
}if(bY.length>bS.length){var bV=this.getTableColumnModel();

for(var i=bS.length;i<bY.length;i++){var ca=this.getNewTablePaneModel()(bV);
ca.setFirstColumnX(bX);
ca.setMaxColumnCount(bY[i]);
bX+=bY[i];
var cd=this.getNewTablePaneScroller()(this);
cd.setTablePaneModel(ca);
cd.addListener(bl,this._onScrollY,this);
for(cc in qx.ui.table.Table.__lL){if(!bW[cc]){break;
}
if(bW[cc].capture&&bW[cc].capture.length>0){var bT=bW[cc].capture;

for(var i=0;i<bT.length;i++){var bU=bT[i].context;

if(!bU){bU=this;
}else if(bU==bS[0]){bU=cd;
}cd.addListener(cc,bT[i].handler,bU,true);
}}
if(bW[cc].bubble&&bW[cc].bubble.length>0){var cf=bW[cc].bubble;

for(var i=0;i<cf.length;i++){var bU=cf[i].context;

if(!bU){bU=this;
}else if(bU==bS[0]){bU=cd;
}cd.addListener(cc,cf[i].handler,bU,false);
}}}var ce=(i==bY.length-1)?1:0;
this.__lH.add(cd,{flex:ce});
bS=this._getPaneScrollerArr();
}}for(var i=0;i<bS.length;i++){var cd=bS[i];
var cg=(i==(bS.length-1));
cd.getHeader().setHeight(this.getHeaderCellHeight());
cd.setTopRightWidget(cg?this.getChildControl(z):null);
}
if(!this.isColumnVisibilityButtonVisible()){this._excludeChildControl(z);
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},_applyFocusCellOnMouseMove:function(cW,cX){var cY=this._getPaneScrollerArr();

for(var i=0;i<cY.length;i++){cY[i].setFocusCellOnMouseMove(cW);
}},_applyShowCellFocusIndicator:function(eY,fa){var fb=this._getPaneScrollerArr();

for(var i=0;i<fb.length;i++){fb[i].setShowCellFocusIndicator(eY);
}},_applyKeepFirstVisibleRowComplete:function(eV,eW){var eX=this._getPaneScrollerArr();

for(var i=0;i<eX.length;i++){eX[i].onKeepFirstVisibleRowCompleteChanged();
}},getSelectionManager:function(){return this.__lI;
},_getPaneScrollerArr:function(){return this.__lH.getChildren();
},getPaneScroller:function(b){return this._getPaneScrollerArr()[b];
},_cleanUpMetaColumns:function(eh){var ei=this._getPaneScrollerArr();

if(ei!=null){for(var i=ei.length-1;i>=eh;i--){ei[i].destroy();
}}},_onChangeLocale:function(ef){this.updateContent();
this._updateStatusBar();
},_onSelectionChanged:function(cu){var cv=this._getPaneScrollerArr();

for(var i=0;i<cv.length;i++){cv[i].onSelectionChanged();
}this._updateStatusBar();
},_onTableModelMetaDataChanged:function(cP){var cQ=this._getPaneScrollerArr();

for(var i=0;i<cQ.length;i++){cQ[i].onTableModelMetaDataChanged();
}this._updateStatusBar();
},_onTableModelDataChanged:function(ek){var el=ek.getData();
this._updateTableData(el.firstRow,el.lastRow,el.firstColumn,el.lastColumn,el.removeStart,el.removeCount);
},_updateTableData:function(cH,cI,cJ,cK,cL,cM){var cN=this._getPaneScrollerArr();
if(cM){this.getSelectionModel().removeSelectionInterval(cL,cL+cM);
}
for(var i=0;i<cN.length;i++){cN[i].onTableModelDataChanged(cH,cI,cJ,cK);
}var cO=this.getTableModel().getRowCount();

if(cO!=this.__lN){this.__lN=cO;
this._updateScrollBarVisibility();
this._updateStatusBar();
}},_onScrollY:function(cF){if(!this.__lO){this.__lO=true;
var cG=this._getPaneScrollerArr();

for(var i=0;i<cG.length;i++){cG[i].setScrollY(cF.getData());
}this.__lO=false;
}},_onKeyPress:function(eM){if(!this.getEnabled()){return;
}var eT=this.__lK;
var eQ=true;
var eU=eM.getKeyIdentifier();

if(this.isEditing()){if(eM.getModifiers()==0){switch(eU){case bK:this.stopEditing();
var eT=this.__lK;
this.moveFocusedCell(0,1);

if(this.__lK!=eT){eQ=this.startEditing();
}break;
case O:this.cancelEditing();
this.focus();
break;
default:eQ=false;
break;
}}}else{if(eM.isCtrlPressed()){eQ=true;

switch(eU){case P:var eR=this.getTableModel().getRowCount();

if(eR>0){this.getSelectionModel().setSelectionInterval(0,eR-1);
}break;
default:eQ=false;
break;
}}else{switch(eU){case Q:this.__lI.handleSelectKeyDown(this.__lK,eM);
break;
case bu:case bK:eQ=this.startEditing();
break;
case bo:this.setFocusedCell(this.__lJ,0,true);
break;
case bv:var eR=this.getTableModel().getRowCount();
this.setFocusedCell(this.__lJ,eR-1,true);
break;
case bb:this.moveFocusedCell(-1,0);
break;
case bs:this.moveFocusedCell(1,0);
break;
case L:this.moveFocusedCell(0,-1);
break;
case bn:this.moveFocusedCell(0,1);
break;
case s:case M:var eP=this.getPaneScroller(0);
var eS=eP.getTablePane();
var eR=eS.getVisibleRowCount()-1;
var eO=this.getRowHeight();
var eN=(eU==s)?-1:1;
eP.setScrollY(eP.getScrollY()+eN*eR*eO);
this.moveFocusedCell(0,eN*eR);
break;
default:eQ=false;
}}}
if(eT!=this.__lK&&this.getRowFocusChangeModifiesSelection()){this.__lI.handleMoveKeyDown(this.__lK,eM);
}
if(eQ){eM.preventDefault();
eM.stopPropagation();
}},_onFocusChanged:function(dN){var dO=this._getPaneScrollerArr();

for(var i=0;i<dO.length;i++){dO[i].onFocusChanged();
}},_onColVisibilityChanged:function(dA){var dB=this._getPaneScrollerArr();

for(var i=0;i<dB.length;i++){dB[i].onColVisibilityChanged();
}var dC=dA.getData();

if(this.__lP!=null&&dC.col!=null&&dC.visible!=null){this.__lP[dC.col].setVisible(dC.visible);
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},_onColWidthChanged:function(dJ){var dK=this._getPaneScrollerArr();

for(var i=0;i<dK.length;i++){var dL=dJ.getData();
dK[i].setColumnWidth(dL.col,dL.newWidth);
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},_onColOrderChanged:function(bO){var bP=this._getPaneScrollerArr();

for(var i=0;i<bP.length;i++){bP[i].onColOrderChanged();
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},getTablePaneScrollerAtPageX:function(et){var eu=this._getMetaColumnAtPageX(et);
return (eu!=-1)?this.getPaneScroller(eu):null;
},setFocusedCell:function(dD,dE,dF){if(!this.isEditing()&&(dD!=this.__lJ||dE!=this.__lK)){if(dD===null){dD=0;
}this.__lJ=dD;
this.__lK=dE;
var dG=this._getPaneScrollerArr();

for(var i=0;i<dG.length;i++){dG[i].setFocusedCell(dD,dE);
}
if(dD!==null&&dF){this.scrollCellVisible(dD,dE);
}}},resetSelection:function(){this.getSelectionModel().resetSelection();
},clearSelection:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,H);
this.resetSelection();
},resetCellFocus:function(){this.setFocusedCell(null,null,false);
},getFocusedColumn:function(){return this.__lJ;
},getFocusedRow:function(){return this.__lK;
},highlightFocusedRow:function(eo){this.getDataRowRenderer().setHighlightFocusRow(eo);
},clearFocusedRowHighlight:function(){this.resetCellFocus();
var bN=this._getPaneScrollerArr();

for(var i=0;i<bN.length;i++){bN[i].onFocusChanged();
}},moveFocusedCell:function(ev,ew){var eA=this.__lJ;
var eB=this.__lK;

if(eA===null||eB===null){return;
}
if(ev!=0){var ez=this.getTableColumnModel();
var x=ez.getVisibleX(eA);
var ey=ez.getVisibleColumnCount();
x=qx.lang.Number.limit(x+ev,0,ey-1);
eA=ez.getVisibleColumnAtX(x);
}
if(ew!=0){var ex=this.getTableModel();
eB=qx.lang.Number.limit(eB+ew,0,ex.getRowCount()-1);
}this.setFocusedCell(eA,eB,true);
},scrollCellVisible:function(cq,cr){var cs=this.getTableColumnModel();
var x=cs.getVisibleX(cq);
var ct=this._getMetaColumnAtColumnX(x);

if(ct!=-1){this.getPaneScroller(ct).scrollCellVisible(cq,cr);
}},isEditing:function(){if(this.__lJ!=null){var x=this.getTableColumnModel().getVisibleX(this.__lJ);
var dM=this._getMetaColumnAtColumnX(x);
return this.getPaneScroller(dM).isEditing();
}return false;
},startEditing:function(){if(this.__lJ!=null){var x=this.getTableColumnModel().getVisibleX(this.__lJ);
var dX=this._getMetaColumnAtColumnX(x);
var dW=this.getPaneScroller(dX).startEditing();
return dW;
}return false;
},stopEditing:function(){if(this.__lJ!=null){var x=this.getTableColumnModel().getVisibleX(this.__lJ);
var eL=this._getMetaColumnAtColumnX(x);
this.getPaneScroller(eL).stopEditing();
}},cancelEditing:function(){if(this.__lJ!=null){var x=this.getTableColumnModel().getVisibleX(this.__lJ);
var cE=this._getMetaColumnAtColumnX(x);
this.getPaneScroller(cE).cancelEditing();
}},updateContent:function(){var ej=this._getPaneScrollerArr();

for(var i=0;i<ej.length;i++){ej[i].getTablePane().updateContent();
}},blockHeaderElements:function(){var a=this._getPaneScrollerArr();

for(var i=0;i<a.length;i++){a[i].getHeader().getBlocker().blockContent(20);
}this.getChildControl(z).getBlocker().blockContent(20);
},unblockHeaderElements:function(){var g=this._getPaneScrollerArr();

for(var i=0;i<g.length;i++){g[i].getHeader().getBlocker().unblockContent();
}this.getChildControl(z).getBlocker().unblockContent();
},_getMetaColumnAtPageX:function(h){var j=this._getPaneScrollerArr();

for(var i=0;i<j.length;i++){var k=j[i].getContainerLocation();

if(h>=k.left&&h<=k.right){return i;
}}return -1;
},_getMetaColumnAtColumnX:function(cw){var cy=this.getMetaColumnCounts();
var cz=0;

for(var i=0;i<cy.length;i++){var cx=cy[i];
cz+=cx;

if(cx==-1||cw<cz){return i;
}}return -1;
},_updateStatusBar:function(){var cS=this.getTableModel();

if(this.getStatusBarVisible()){var cT=this.getSelectionModel().getSelectedCount();
var cV=cS.getRowCount();
var cU;

if(cV>=0){if(cT==0){cU=this.trn(o,bc,cV,cV);
}else{cU=this.trn(C,N,cV,cT,cV);
}}
if(this.__lM){if(cU){cU+=this.__lM;
}else{cU=this.__lM;
}}
if(cU){this.getChildControl(u).setValue(cU);
}}},_updateScrollerWidths:function(){var cm=this._getPaneScrollerArr();

for(var i=0;i<cm.length;i++){var co=(i==(cm.length-1));
var cp=cm[i].getTablePaneModel().getTotalWidth();
cm[i].setPaneWidth(cp);
var cn=co?1:0;
cm[i].setLayoutProperties({flex:cn});
}},_updateScrollBarVisibility:function(){if(!this.getBounds()){return;
}var dk=qx.ui.table.pane.Scroller.HORIZONTAL_SCROLLBAR;
var dn=qx.ui.table.pane.Scroller.VERTICAL_SCROLLBAR;
var dh=this._getPaneScrollerArr();
var dj=false;
var dm=false;

for(var i=0;i<dh.length;i++){var dp=(i==(dh.length-1));
var di=dh[i].getNeededScrollBars(dj,!dp);

if(di&dk){dj=true;
}
if(dp&&(di&dn)){dm=true;
}}for(var i=0;i<dh.length;i++){var dp=(i==(dh.length-1));
var dl;
dh[i].setHorizontalScrollBarVisible(dj);
if(dp){dl=dh[i].getVerticalScrollBarVisible();
}dh[i].setVerticalScrollBarVisible(dp&&dm);
if(dp&&dm!=dl){this.fireDataEvent(E,dm);
}}},_initColumnMenu:function(){var dc=this.getTableModel();
var dd=this.getTableColumnModel();
var de=this.getChildControl(z);
de.empty();
var db=de.getMenu();
var df={table:this,menu:db,columnButton:de};
this.fireDataEvent(bF,df);
this.__lP={};

for(var dg=0,l=dc.getColumnCount();dg<l;dg++){var da=de.factory(br,{text:dc.getColumnName(dg),column:dg,bVisible:dd.isColumnVisible(dg)});
qx.core.Assert.assertInterface(da,qx.ui.table.IColumnMenuItem);
da.addListener(by,this._createColumnVisibilityCheckBoxHandler(dg),this);
this.__lP[dg]=da;
}var df={table:this,menu:db,columnButton:de};
this.fireDataEvent(G,df);
},_createColumnVisibilityCheckBoxHandler:function(dP){return function(eE){var eF=this.getTableColumnModel();
eF.setColumnVisible(dP,eE.getData());
};
},setColumnWidth:function(eC,eD){this.getTableColumnModel().setColumnWidth(eC,eD);
},_onResize:function(){this.fireEvent(bp);
this._updateScrollerWidths();
this._updateScrollBarVisibility();
},addListener:function(ch,ci,self,cj){if(arguments.callee.self.__lL[ch]){var cl=[ch];

for(var i=0,ck=this._getPaneScrollerArr();i<ck.length;i++){cl.push(ck[i].addListener.apply(ck[i],arguments));
}return cl.join(q);
}else{return arguments.callee.base.call(this,ch,ci,self,cj);
}},removeListener:function(ep,eq,self,er){if(arguments.callee.self.__lL[ep]){for(var i=0,es=this._getPaneScrollerArr();i<es.length;i++){es[i].removeListener.apply(es[i],arguments);
}}else{arguments.callee.base.call(this,ep,eq,self,er);
}},removeListenerById:function(eG){var eK=eG.split(q);
var eJ=eK.shift();

if(arguments.callee.self.__lL[eJ]){var eI=true;

for(var i=0,eH=this._getPaneScrollerArr();i<eH.length;i++){eI=eH[i].removeListenerById.call(eH[i],eK[i])&&eI;
}return eI;
}else{return arguments.callee.base.call(this,eG);
}},destroy:function(){this.getChildControl(z).getMenu().destroy();
arguments.callee.base.call(this);
}},destruct:function(){if(qx.core.Variant.isSet(bL,bH)){qx.locale.Manager.getInstance().removeListener(p,this._onChangeLocale,this);
}var dI=this.getSelectionModel();

if(dI){dI.dispose();
}var dH=this.getDataRowRenderer();

if(dH){dH.dispose();
}this._cleanUpMetaColumns(0);
this.getTableColumnModel().dispose();
this._disposeObjects(W,Y,r,r,bx);
this._disposeMap(S);
}});
})();
