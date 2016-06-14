qx.$$packageData['a9c000d7d2c1']={"resources":{"qx/icon/Tango/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/media-audio.png":[16,16,"png","qx"],"qx/icon/Tango/16/status/dialog-warning.png":[16,16,"png","qx"]}};
(function(){var a="qx.ui.table.ICellRenderer";
qx.Interface.define(a,{members:{createDataCellHtml:function(b,c){return true;
}}});
})();
(function(){var u="",t="px;",s=".qooxdoo-table-cell {",r="qooxdoo-table-cell",q='" ',p="nowrap",o="default",n="qx.client",m="}",l="width:",R=".qooxdoo-table-cell-right { text-align:right } ",Q="0px 6px",P='<div class="',O="0px",N="height:",M="1px solid ",L=".qooxdoo-table-cell-bold { font-weight:bold } ",K="table-row-line",J='>',I="mshtml",B='</div>',C="ellipsis",z="content-box",A='left:',x="qx.ui.table.cellrenderer.Abstract",y='" style="',v="abstract",w="none",D="hidden",E="} ",G='px;',F=".qooxdoo-table-cell-italic { font-style:italic} ",H="absolute";
qx.Class.define(x,{type:v,implement:qx.ui.table.ICellRenderer,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
var b=qx.ui.table.cellrenderer.Abstract;

if(!b.__eE){var d=qx.theme.manager.Color.getInstance();
b.__eE=arguments.callee.self;
var c=s+
qx.bom.element.Style.compile({position:H,top:O,overflow:D,whiteSpace:p,borderRight:M+d.resolve(K),padding:Q,cursor:o,textOverflow:C,userSelect:w})+E+R+F+L;

if(!qx.core.Variant.isSet(n,I)){c+=s+qx.bom.element.BoxSizing.compile(z)+m;
}b.__eE.stylesheet=qx.bom.Stylesheet.createElement(c);
}},members:{_insetX:6+6+1,_insetY:0,_getCellClass:function(a){return r;
},_getCellStyle:function(S){return S.style||u;
},_getCellAttributes:function(j){return u;
},_getContentHtml:function(k){return k.value||u;
},_getCellSizeStyle:function(e,f,g,h){var i=u;

if(qx.bom.client.Feature.CONTENT_BOX){e-=g;
f-=h;
}i+=l+Math.max(e,0)+t;
i+=N+Math.max(f,0)+t;
return i;
},createDataCellHtml:function(T,U){U.push(P,this._getCellClass(T),y,A,T.styleLeft,G,this._getCellSizeStyle(T.styleWidth,T.styleHeight,this._insetX,this._insetY),this._getCellStyle(T),q,this._getCellAttributes(T),J+this._getContentHtml(T),B);
}}});
})();
(function(){var b="qx.ui.table.IColumnMenuItem",a="qx.event.type.Data";
qx.Interface.define(b,{properties:{visible:{}},events:{changeVisible:a}});
})();
(function(){var k="icon",j="label",i="String",h="sort-icon",g="_applySortIcon",f="_applyIcon",e="table-header-cell",d="qx.ui.table.headerrenderer.HeaderCell",c="_applyLabel";
qx.Class.define(d,{extend:qx.ui.container.Composite,construct:function(){arguments.callee.base.call(this);
var n=new qx.ui.layout.Grid();
n.setRowFlex(0,1);
n.setColumnFlex(1,1);
n.setColumnFlex(2,1);
this.setLayout(n);
},properties:{appearance:{refine:true,init:e},label:{check:i,init:null,nullable:true,apply:c},sortIcon:{check:i,init:null,nullable:true,apply:g,themeable:true},icon:{check:i,init:null,nullable:true,apply:f}},members:{_applyLabel:function(a,b){if(a){this._showChildControl(j).setValue(a);
}else{this._excludeChildControl(j);
}},_applySortIcon:function(q,r){if(q){this._showChildControl(h).setSource(q);
}else{this._excludeChildControl(h);
}},_applyIcon:function(l,m){if(l){this._showChildControl(k).setSource(l);
}else{this._excludeChildControl(k);
}},_createChildControlImpl:function(o){var p;

switch(o){case j:p=new qx.ui.basic.Label(this.getLabel()).set({anonymous:true,allowShrinkX:true});
this._add(p,{row:0,column:1});
break;
case h:p=new qx.ui.basic.Image(this.getSortIcon());
p.setAnonymous(true);
this._add(p,{row:0,column:2});
break;
case k:p=new qx.ui.basic.Image(this.getIcon()).set({anonymous:true,allowShrinkX:true});
this._add(p,{row:0,column:0});
break;
}return p||arguments.callee.base.call(this,o);
}}});
})();
(function(){var j="qx.event.type.Data",i="EVENT_TYPE_DATA_CHANGED",h="qx.ui.table.ITableModel",g="New code should not use this. Instead, use the text string 'dataChanged' literally.",f="New code should not use this. Instead, use the text string 'metaDataChanged' literally.",e="qx.event.type.Event",d="EVENT_TYPE_META_DATA_CHANGED";
qx.Interface.define(h,{events:{"dataChanged":j,"metaDataChanged":e,"sorted":j},statics:{EVENT_TYPE_DATA_CHANGED:"dataChanged",EVENT_TYPE_META_DATA_CHANGED:"metaDataChanged"},members:{getRowCount:function(){},getRowData:function(k){},getColumnCount:function(){},getColumnId:function(l){},getColumnIndexById:function(c){},getColumnName:function(A){},isColumnEditable:function(m){},isColumnSortable:function(r){},sortByColumn:function(a,b){},getSortColumnIndex:function(){},isSortAscending:function(){},prefetchRows:function(n,o){},getValue:function(v,w){},getValueById:function(p,q){},setValue:function(x,y,z){},setValueById:function(s,t,u){}}});
qx.log.Logger.deprecatedConstantWarning(qx.ui.table.ITableModel,i,g);
qx.log.Logger.deprecatedConstantWarning(qx.ui.table.ITableModel,d,f);
})();
(function(){var c="qx.ui.table.IColumnMenuButton";
qx.Interface.define(c,{properties:{menu:{}},members:{factory:function(a,b){return true;
},empty:function(){return true;
}}});
})();
(function(){var h="",g="number",f="Boolean",e="qx.ui.table.cellrenderer.Default",d=" qooxdoo-table-cell-bold",c=" qooxdoo-table-cell-right",b=" qooxdoo-table-cell-italic",a="string";
qx.Class.define(e,{extend:qx.ui.table.cellrenderer.Abstract,statics:{STYLEFLAG_ALIGN_RIGHT:1,STYLEFLAG_BOLD:2,STYLEFLAG_ITALIC:4},properties:{useAutoAlign:{check:f,init:true}},members:{_getStyleFlags:function(m){if(this.getUseAutoAlign()){if(typeof m.value==g){return qx.ui.table.cellrenderer.Default.STYLEFLAG_ALIGN_RIGHT;
}}},_getCellClass:function(n){var o=arguments.callee.base.call(this,n);

if(!o){return h;
}var p=this._getStyleFlags(n);

if(p&qx.ui.table.cellrenderer.Default.STYLEFLAG_ALIGN_RIGHT){o+=c;
}
if(p&qx.ui.table.cellrenderer.Default.STYLEFLAG_BOLD){o+=d;
}
if(p&qx.ui.table.cellrenderer.Default.STYLEFLAG_ITALIC){o+=b;
}return o;
},_getContentHtml:function(l){return qx.bom.String.escape(this._formatValue(l));
},_formatValue:function(i){var k=i.value;

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
(function(){var J="",I="==",H=">",G="between",F="<",E="regex",D="!between",C=">=",B="!=",A="<=",u="font-weight",z=";",x="text-align",t='g',s=":",w="qx.ui.table.cellrenderer.Conditional",v="color",y="font-style";
qx.Class.define(w,{extend:qx.ui.table.cellrenderer.Default,construct:function(bc,bd,be,bf){arguments.callee.base.call(this);
this.numericAllowed=[I,B,H,F,C,A];
this.betweenAllowed=[G,D];
this.conditions=[];
this.__eF=bc||J;
this.__eG=bd||J;
this.__eH=be||J;
this.__eI=bf||J;
},members:{__eF:null,__eG:null,__eH:null,__eI:null,__eJ:function(K,L){if(K[1]!=null){L[x]=K[1];
}
if(K[2]!=null){L[v]=K[2];
}
if(K[3]!=null){L[y]=K[3];
}
if(K[4]!=null){L[u]=K[4];
}},addNumericCondition:function(T,U,V,W,X,Y,ba){var bb=null;

if(qx.lang.Array.contains(this.numericAllowed,T)){if(U!=null){bb=[T,V,W,X,Y,U,ba];
}}
if(bb!=null){this.conditions.push(bb);
}else{throw new Error("Condition not recognized or value is null!");
}},addBetweenCondition:function(a,b,c,d,e,f,g,h){if(qx.lang.Array.contains(this.betweenAllowed,a)){if(b!=null&&c!=null){var j=[a,d,e,f,g,b,c,h];
}}
if(j!=null){this.conditions.push(j);
}else{throw new Error("Condition not recognized or value1/value2 is null!");
}},addRegex:function(M,N,O,P,Q,R){if(M!=null){var S=[E,N,O,P,Q,M,R];
}
if(S!=null){this.conditions.push(S);
}else{throw new Error("regex cannot be null!");
}},_getCellStyle:function(k){if(!this.conditions.length){return k.style||J;
}var p=k.table.getTableModel();
var i;
var r;
var l;
var n={"text-align":this.__eF,"color":this.__eG,"font-style":this.__eH,"font-weight":this.__eI};

for(i in this.conditions){r=false;

if(qx.lang.Array.contains(this.numericAllowed,this.conditions[i][0])){if(this.conditions[i][6]==null){l=k.value;
}else{l=p.getValueById(this.conditions[i][6],k.row);
}
switch(this.conditions[i][0]){case I:if(l==this.conditions[i][5]){r=true;
}break;
case B:if(l!=this.conditions[i][5]){r=true;
}break;
case H:if(l>this.conditions[i][5]){r=true;
}break;
case F:if(l<this.conditions[i][5]){r=true;
}break;
case C:if(l>=this.conditions[i][5]){r=true;
}break;
case A:if(l<=this.conditions[i][5]){r=true;
}break;
}}else if(qx.lang.Array.contains(this.betweenAllowed,this.conditions[i][0])){if(this.conditions[i][7]==null){l=k.value;
}else{l=p.getValueById(this.conditions[i][7],k.row);
}
switch(this.conditions[i][0]){case G:if(l>=this.conditions[i][5]&&l<=this.conditions[i][6]){r=true;
}break;
case D:if(l<this.conditions[i][5]&&l>this.conditions[i][6]){r=true;
}break;
}}else if(this.conditions[i][0]==E){if(this.conditions[i][6]==null){l=k.value;
}else{l=p.getValueById(this.conditions[i][6],k.row);
}var m=new RegExp(this.conditions[i][5],t);
r=m.test(l);
}if(r==true){this.__eJ(this.conditions[i],n);
}}var q=[];

for(var o in n){if(n[o]){q.push(o,s,n[o],z);
}}return q.join(J);
}},destruct:function(){this.numericAllowed=this.betweenAllowed=this.conditions=null;
}});
})();
(function(){var a="qx.ui.table.ICellEditorFactory";
qx.Interface.define(a,{members:{createCellEditor:function(b){return true;
},getCellEditorValue:function(c){return true;
}}});
})();
(function(){var h="",g="Function",f="abstract",e="number",d="appear",c="qx.ui.table.celleditor.AbstractField";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.ui.table.ICellEditorFactory,type:f,properties:{validationFunction:{check:g,nullable:true,init:null}},members:{_createEditor:function(){throw new Error("Abstract method call!");
},createCellEditor:function(a){var b=this._createEditor();
b.originalValue=a.value;

if(a.value===null||a.value===undefined){a.value=h;
}b.setValue(h+a.value);
b.addListener(d,function(){b.selectAllText();
});
return b;
},getCellEditorValue:function(i){var k=i.getValue();
var j=this.getValidationFunction();

if(j){k=j(k,i.originalValue);
}
if(typeof i.originalValue==e){k=parseFloat(k);
}return k;
}}});
})();
(function(){var b="qx.ui.table.celleditor.TextField",a="table-editor-textfield";
qx.Class.define(b,{extend:qx.ui.table.celleditor.AbstractField,members:{_createEditor:function(){var c=new qx.ui.form.TextField();
c.setAppearance(a);
return c;
}}});
})();
(function(){var c="qx.ui.table.IHeaderRenderer";
qx.Interface.define(c,{members:{createHeaderCell:function(d){return true;
},updateHeaderCell:function(a,b){return true;
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
qx.Class.define(b,{extend:qx.ui.table.headerrenderer.Default,construct:function(f,g){arguments.callee.base.call(this);

if(f==null){f=c;
}this.setIconUrl(f);

if(g){this.setToolTip(g);
}},properties:{iconUrl:{check:a,init:c}},members:{updateHeaderCell:function(d,e){arguments.callee.base.call(this,d,e);
e.setIcon(this.getIconUrl());
}}});
})();
(function(){var d="Integer",c="qx.ui.table.pane.CellEvent";
qx.Class.define(c,{extend:qx.event.type.Mouse,properties:{row:{check:d,nullable:true},column:{check:d,nullable:true}},members:{init:function(e,f,g,h){f.clone(this);
this.setBubbles(false);

if(g!=null){this.setRow(g);
}else{this.setRow(e._getRowForPagePos(this.getDocumentLeft(),this.getDocumentTop()));
}
if(h!=null){this.setColumn(h);
}else{this.setColumn(e._getColumnForPageX(this.getDocumentLeft()));
}},clone:function(a){var b=arguments.callee.base.call(this,a);
b.set({row:this.getRow(),column:this.getColumn()});
return b;
}}});
})();
(function(){var g="qx.ui.table.columnmodel.resizebehavior.Abstract",f="abstract";
qx.Class.define(g,{type:f,extend:qx.core.Object,members:{_setNumColumns:function(i){throw new Error("_setNumColumns is abstract");
},onAppear:function(event,h){throw new Error("onAppear is abstract");
},onTableWidthChanged:function(event){throw new Error("onTableWidthChanged is abstract");
},onVerticalScrollBarChanged:function(event){throw new Error("onVerticalScrollBarChanged is abstract");
},onColumnWidthChanged:function(event){throw new Error("onColumnWidthChanged is abstract");
},onVisibilityChanged:function(event){throw new Error("onVisibilityChanged is abstract");
},_getAvailableWidth:function(){var b=this.getTableColumnModel();
var e=b.getTable();
var a=e._getPaneScrollerArr();

if(!a[0]||!a[0].getLayoutParent().getBounds()){return null;
}var d=a[0].getLayoutParent().getBounds().width;
var c=a[a.length-1];
d-=c.getPaneInsetRight();
return d;
}}});
})();
(function(){var F="loading ...",E="Title",D="Explicit",C="Year",B="icon/16/mimetypes/media-audio.png",A="env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=",z="2*",y="showcase.page.table.Content.saveResult",x="this",w="1*",p="http://query.yahooapis.com/v1/public/yql?q=",v="icon/16/apps/office-calendar.png",s="Chart Pos.",o="0",n="icon/16/status/dialog-warning.png",r="Artist",q="Popular Music Tracks",t="showcase.page.table.Content",m="select * from music.track.popular",u="&format=json&diagnostics=false&";
qx.Class.define(t,{extend:showcase.page.AbstractDesktopContent,construct:function(G){arguments.callee.base.call(this,G);
},statics:{saveResult:function(I){this._result=I;
}},members:{_addWindowContent:function(a){var f=[[0,F,F,0,false]];
var d=this._tableModel=new qx.ui.table.model.Simple();
d.setColumns([s,E,r,C,D]);
d.setData(f);
d.setColumnEditable(1,true);
d.setColumnEditable(2,true);
d.setColumnSortable(3,true);
var c={tableColumnModel:function(H){return new qx.ui.table.columnmodel.Resize(H);
}};
var g=new qx.ui.table.Table(d,c);
g.set({width:540,height:400,decorator:null,headerCellHeight:null});
g.getSelectionModel().setSelectionMode(qx.ui.table.selection.Model.MULTIPLE_INTERVAL_SELECTION);
var e=g.getTableColumnModel();
e.setDataCellRenderer(0,new qx.ui.table.cellrenderer.Number());
e.setDataCellRenderer(3,new qx.ui.table.cellrenderer.Number());
e.setDataCellRenderer(4,new qx.ui.table.cellrenderer.Boolean());
e.setHeaderCellRenderer(1,new qx.ui.table.headerrenderer.Icon(B,E));
e.setHeaderCellRenderer(3,new qx.ui.table.headerrenderer.Icon(v,C));
e.setHeaderCellRenderer(4,new qx.ui.table.headerrenderer.Icon(n,D));
var b=e.getBehavior();
b.set(1,{width:z,minWidth:60});
b.set(2,{width:w,minWidth:60});
b.setWidth(0,80);
b.setWidth(3,70);
b.setWidth(4,85);
a.setCaption(q);
a.setLayout(new qx.ui.layout.Grow());
a.add(g);
this._loadData(d);
},_loadData:function(J){var L=m;
var K=p+encodeURIComponent(L)+u+A+y;
var M=new qx.io.ScriptLoader();
M.load(K,function(){var k=showcase.page.table.Content._result;
var j=[];
var l=k.query.results.Track;

for(var i=0;i<l.length;i++){var h=[];
h.push(parseInt(l[i].ItemInfo.ChartPosition[x]));
h.push(l[i].title);
h.push(l[i].Artist.name);
h.push(parseInt(l[i].releaseYear));
h.push(l[i].explicit!==o);
j.push(h);
}J.setData(j);
});
}}});
})();
(function(){var o="Integer",n="Escape",m="keypress",l="Enter",k="excluded",j="qx.ui.table.pane.FocusIndicator";
qx.Class.define(j,{extend:qx.ui.container.Composite,construct:function(q){arguments.callee.base.call(this);
this.__eK=q;
this.setKeepActive(true);
this.addListener(m,this._onKeyPress,this);
},properties:{visibility:{refine:true,init:k},row:{check:o,nullable:true},column:{check:o,nullable:true}},members:{__eK:null,_onKeyPress:function(e){var p=e.getKeyIdentifier();

if(p!==n&&p!==l){e.stopPropagation();
}},moveToCell:function(a,b){if(a==null){this.hide();
this.setRow(null);
this.setColumn(null);
}else{var c=this.__eK.getTablePaneModel().getX(a);

if(c==-1){this.hide();
this.setRow(null);
this.setColumn(null);
}else{var i=this.__eK.getTable();
var g=i.getTableColumnModel();
var h=this.__eK.getTablePaneModel();
var f=this.__eK.getTablePane().getFirstVisibleRow();
var d=i.getRowHeight();
this.setUserBounds(h.getColumnLeft(a)-2,(b-f)*d-2,g.getColumnWidth(a)+3,d+3);
this.show();
this.setRow(b);
this.setColumn(a);
}}}},destruct:function(){this.__eK=null;
}});
})();
(function(){var bL="",bK="!",bJ="'!",bI="'",bH="Expected '",bG="' (rgb(",bF=",",bE=")), but found value '",bD="Event (",bC="Expected value to be the CSS color '",cR="' but found ",cQ="The value '",cP="qx.core.Object",cO="Expected value to be an array but found ",cN=") was fired.",cM="Expected value to be an integer >= 0 but found ",cL="' to be not equal with '",cK="' to '",cJ="qx.ui.core.Widget",cI="Called assertTrue with '",bS="Expected value to be a map but found ",bT="The function did not raise an exception!",bQ="Expected value to be undefined but found ",bR="Expected value to be a DOM element but found  '",bO="Expected value to be a regular expression but found ",bP="' to implement the interface '",bM="Expected value to be null but found ",bN="Invalid argument 'type'",cb="Called assert with 'false'",cc="Assertion error! ",co="Expected value to be a string but found ",ck="null",cw="' but found '",cr="' must must be a key of the map '",cE="The String '",cB="Expected value not to be undefined but found ",cg="qx.util.ColorUtil",cH=": ",cG="The raised exception does not have the expected type! ",cF=") not fired.",cf="qx.core.Assert",ci="Expected value to be typeof object but found ",cj="' (identical) but found '",cm="' must have any of the values defined in the array '",cp="Expected value to be a number but found ",cs="Called assertFalse with '",cy="]",cD="Expected value to be a qooxdoo object but found ",bU="' arguments.",bV="Expected value not to be null but found ",ch="Array[",cv="' does not match the regular expression '",cu="' to be not identical with '",ct="' arguments but found '",cA="', which cannot be converted to a CSS color!",cz="Expected object '",cq="qx.core.AssertionError",cx="Expected value to be a boolean but found ",bz="))!",cC="Expected value to be a qooxdoo widget but found ",bW="Expected value '%1' to be in the range '%2'..'%3'!",bX="Expected value to be typeof '",cl="Expected value to be typeof function but found ",bA="Expected value to be an integer but found ",bB="Called fail().",ce="The parameter 're' must be a string or a regular expression.",bY="Expected value to be a number >= 0 but found ",ca="Expected value to be instanceof '",cd="Wrong number of arguments given. Expected '",cn="object";
qx.Class.define(cf,{statics:{__eL:true,__eM:function(h,j){var k=bL;

for(var i=1,l=arguments.length;i<l;i++){k=k+this.__eN(arguments[i]);
}var n=cc+h+cH+k;

if(this.__eL){qx.Bootstrap.error(n);
}
if(qx.Class.isDefined(cq)){var m=new qx.core.AssertionError(h,k);

if(this.__eL){qx.Bootstrap.error("Stack trace: \n"+m.getStackTrace());
}throw m;
}else{throw new Error(n);
}},__eN:function(bp){var bq;

if(bp===null){bq=ck;
}else if(qx.lang.Type.isArray(bp)&&bp.length>10){bq=ch+bp.length+cy;
}else if((bp instanceof Object)&&(bp.toString==null)){bq=qx.lang.Json.stringify(bp,null,2);
}else{try{bq=bp.toString();
}catch(e){bq=bL;
}}return bq;
},assert:function(z,A){z==true||this.__eM(A||bL,cb);
},fail:function(dn){this.__eM(dn||bL,bB);
},assertTrue:function(dl,dm){(dl===true)||this.__eM(dm||bL,cI,dl,bI);
},assertFalse:function(dr,ds){(dr===false)||this.__eM(ds||bL,cs,dr,bI);
},assertEquals:function(dP,dQ,dR){dP==dQ||this.__eM(dR||bL,bH,dP,cw,dQ,bJ);
},assertNotEquals:function(bf,bg,bh){bf!=bg||this.__eM(bh||bL,bH,bf,cL,bg,bJ);
},assertIdentical:function(dg,dh,di){dg===dh||this.__eM(di||bL,bH,dg,cj,dh,bJ);
},assertNotIdentical:function(br,bs,bt){br!==bs||this.__eM(bt||bL,bH,br,cu,bs,bJ);
},assertNotUndefined:function(o,p){o!==undefined||this.__eM(p||bL,cB,o,bK);
},assertUndefined:function(de,df){de===undefined||this.__eM(df||bL,bQ,de,bK);
},assertNotNull:function(dj,dk){dj!==null||this.__eM(dk||bL,bV,dj,bK);
},assertNull:function(q,r){q===null||this.__eM(r||bL,bM,q,bK);
},assertJsonEquals:function(bc,bd,be){this.assertEquals(qx.lang.Json.stringify(bc),qx.lang.Json.stringify(bd),be);
},assertMatch:function(Y,ba,bb){this.assertString(Y);
this.assert(qx.lang.Type.isRegExp(ba)||qx.lang.Type.isString(ba),ce);
Y.search(ba)>=0||this.__eM(bb||bL,cE,Y,cv,ba.toString(),bJ);
},assertArgumentsCount:function(E,F,G,H){var I=E.length;
(I>=F&&I<=G)||this.__eM(H||bL,cd,F,cK,G,ct,arguments.length,bU);
},assertEventFired:function(dI,event,dJ,dK,dL){var dN=false;
var dM=function(e){if(dK){dK.call(dI,e);
}dN=true;
};
var dO=dI.addListener(event,dM,dI);
dJ.call();
dN===true||this.__eM(dL||bL,bD,event,cF);
dI.removeListenerById(dO);
},assertEventNotFired:function(cX,event,cY,da){var dc=false;
var db=function(e){dc=true;
};
var dd=cX.addListener(event,db,cX);
cY.call();
dc===false||this.__eM(da||bL,bD,event,cN);
cX.removeListenerById(dd);
},assertException:function(M,N,O,P){var N=N||Error;
var Q;

try{this.__eL=false;
M();
}catch(cS){Q=cS;
}finally{this.__eL=true;
}
if(Q==null){this.__eM(P||bL,bT);
}Q instanceof N||this.__eM(P||bL,cG,N);

if(O){this.assertMatch(Q.toString(),O,P);
}},assertInArray:function(bw,bx,by){bx.indexOf(bw)!==-1||this.__eM(by||bL,cQ,bw,cm,bx,bI);
},assertArrayEquals:function(J,K,L){this.assertArray(J,L);
this.assertArray(K,L);
this.assertEquals(J.length,K.length,L);

for(var i=0;i<J.length;i++){this.assertIdentical(J[i],K[i],L);
}},assertKeyInMap:function(dx,dy,dz){dy[dx]!==undefined||this.__eM(dz||bL,cQ,dx,cr,dy,bI);
},assertFunction:function(bu,bv){qx.lang.Type.isFunction(bu)||this.__eM(bv||bL,cl,bu,bK);
},assertString:function(bi,bj){qx.lang.Type.isString(bi)||this.__eM(bj||bL,co,bi,bK);
},assertBoolean:function(cT,cU){qx.lang.Type.isBoolean(cT)||this.__eM(cU||bL,cx,cT,bK);
},assertNumber:function(dD,dE){(qx.lang.Type.isNumber(dD)&&isFinite(dD))||this.__eM(dE||bL,cp,dD,bK);
},assertPositiveNumber:function(dV,dW){(qx.lang.Type.isNumber(dV)&&isFinite(dV)&&dV>=0)||this.__eM(dW||bL,bY,dV,bK);
},assertInteger:function(x,y){(qx.lang.Type.isNumber(x)&&isFinite(x)&&x%1===0)||this.__eM(y||bL,bA,x,bK);
},assertPositiveInteger:function(dA,dB){var dC=(qx.lang.Type.isNumber(dA)&&isFinite(dA)&&dA%1===0&&dA>=0);
dC||this.__eM(dB||bL,cM,dA,bK);
},assertInRange:function(a,b,c,d){(a>=b&&a<=c)||this.__eM(d||bL,qx.lang.String.format(bW,[a,b,c]));
},assertObject:function(B,C){var D=B!==null&&(qx.lang.Type.isObject(B)||typeof B===cn);
D||this.__eM(C||bL,ci,(B),bK);
},assertArray:function(f,g){qx.lang.Type.isArray(f)||this.__eM(g||bL,cO,f,bK);
},assertMap:function(s,t){qx.lang.Type.isObject(s)||this.__eM(t||bL,bS,s,bK);
},assertRegExp:function(dG,dH){qx.lang.Type.isRegExp(dG)||this.__eM(dH||bL,bO,dG,bK);
},assertType:function(u,v,w){this.assertString(v,bN);
typeof (u)===v||this.__eM(w||bL,bX,v,cR,u,bK);
},assertInstance:function(dt,du,dv){var dw=du.classname||du+bL;
dt instanceof du||this.__eM(dv||bL,ca,dw,cR,dt,bK);
},assertInterface:function(bk,bl,bm){qx.Class.implementsInterface(bk,bl)||this.__eM(bm||bL,cz,bk,bP,bl,bJ);
},assertCssColor:function(R,S,T){var U=qx.Class.getByName(cg);

if(!U){throw new Error("qx.util.ColorUtil not available! Your code must have a dependency on 'qx.util.ColorUtil'");
}var W=U.stringToRgb(R);

try{var V=U.stringToRgb(S);
}catch(dF){this.__eM(T||bL,bC,R,bG,W.join(bF),bE,S,cA);
}var X=W[0]==V[0]&&W[1]==V[1]&&W[2]==V[2];
X||this.__eM(T||bL,bC,W,bG,W.join(bF),bE,S,bG,V.join(bF),bz);
},assertElement:function(cV,cW){!!(cV&&cV.nodeType===1)||this.__eM(cW||bL,bR,cV,bJ);
},assertQxObject:function(dp,dq){this.__eO(dp,cP)||this.__eM(dq||bL,cD,dp,bK);
},assertQxWidget:function(bn,bo){this.__eO(bn,cJ)||this.__eM(bo||bL,cC,bn,bK);
},__eO:function(dS,dT){if(!dS){return false;
}var dU=dS.constructor;

while(dU){if(dU.classname===dT){return true;
}dU=dU.superclass;
}return false;
}}});
})();
(function(){var bj="",bi="Number",bh='</div>',bg='" ',bf="paneUpdated",be='<div>',bd="</div>",bc="overflow: hidden;",bb="qx.event.type.Data",ba="paneReloadsData",bB="div",bA='style="',bz="_applyMaxCacheLines",by="qx.ui.table.pane.Pane",bx="width: 100%;",bw="qx.event.type.Event",bv="_applyVisibleRowCount",bu='>',bt="line-height: ",bs="appear",bq='class="',br="width:100%;",bo="px;",bp='<div ',bm="'>",bn="_applyFirstVisibleRow",bk="<div style='",bl=";position:relative;";
qx.Class.define(by,{extend:qx.ui.core.Widget,construct:function(bC){arguments.callee.base.call(this);
this.__eP=bC;
this.__eQ=0;
this.__eR=0;
this.__eS=[];
},events:{"paneReloadsData":bb,"paneUpdated":bw},properties:{firstVisibleRow:{check:bi,init:0,apply:bn},visibleRowCount:{check:bi,init:0,apply:bv},maxCacheLines:{check:bi,init:1000,apply:bz},allowShrinkX:{refine:true,init:false}},members:{__eR:null,__eQ:null,__eP:null,__eT:null,__eU:null,__eV:null,__eS:null,__eW:0,_applyFirstVisibleRow:function(cx,cy){this.updateContent(false,cx-cy);
},_applyVisibleRowCount:function(bF,bG){this.updateContent(true);
},_getContentHint:function(){return {width:this.getPaneScroller().getTablePaneModel().getTotalWidth(),height:400};
},getPaneScroller:function(){return this.__eP;
},getTable:function(){return this.__eP.getTable();
},setFocusedCell:function(bH,bI,bJ){if(bH!=this.__eV||bI!=this.__eU){var bK=this.__eU;
this.__eV=bH;
this.__eU=bI;
if(bI!=bK&&!bJ){if(bK!==null){this.updateContent(false,null,bK,true);
}
if(bI!==null){this.updateContent(false,null,bI,true);
}}}},onSelectionChanged:function(){this.updateContent(false,null,null,true);
},onFocusChanged:function(){this.updateContent(false,null,null,true);
},setColumnWidth:function(bL,bM){this.updateContent(true);
},onColOrderChanged:function(){this.updateContent(true);
},onPaneModelChanged:function(){this.updateContent(true);
},onTableModelDataChanged:function(bN,bO,bP,bQ){this.__eX();
var bS=this.getFirstVisibleRow();
var bR=this.getVisibleRowCount();

if(bO==-1||bO>=bS&&bN<bS+bR){this.updateContent();
}},onTableModelMetaDataChanged:function(){this.updateContent(true);
},_applyMaxCacheLines:function(bD,bE){if(this.__eW>=bD&&bD!==-1){this.__eX();
}},__eX:function(){this.__eS=[];
this.__eW=0;
},__eY:function(ch,ci,cj){if(!ci&&!cj&&this.__eS[ch]){return this.__eS[ch];
}else{return null;
}},__fa:function(Q,R,S,T){var U=this.getMaxCacheLines();

if(!S&&!T&&!this.__eS[Q]&&U>0){this._applyMaxCacheLines(U);
this.__eS[Q]=R;
this.__eW+=1;
}},updateContent:function(V,W,X,Y){if(V){this.__eX();
}if(W&&Math.abs(W)<=Math.min(10,this.getVisibleRowCount())){this._scrollContent(W);
}else if(Y&&!this.getTable().getAlwaysUpdateCells()){this._updateRowStyles(X);
}else{this._updateAllRows();
}},_updateRowStyles:function(F){var J=this.getContentElement().getDomElement();

if(!J||!J.firstChild){this._updateAllRows();
return;
}var N=this.getTable();
var H=N.getSelectionModel();
var K=N.getTableModel();
var O=N.getDataRowRenderer();
var I=J.firstChild.childNodes;
var M={table:N};
var P=this.getFirstVisibleRow();
var y=0;
var G=I.length;

if(F!=null){var L=F-P;

if(L>=0&&L<G){P=F;
y=L;
G=L+1;
}else{return;
}}
for(;y<G;y++,P++){M.row=P;
M.selected=H.isSelectedIndex(P);
M.focusedRow=(this.__eU==P);
M.rowData=K.getRowData(P);
O.updateDataRowElement(M,I[y]);
}},_getRowsHtml:function(a,b){var h=this.getTable();
var l=h.getSelectionModel();
var e=h.getTableModel();
var f=h.getTableColumnModel();
var B=this.getPaneScroller().getTablePaneModel();
var q=h.getDataRowRenderer();
e.prefetchRows(a,a+b-1);
var w=h.getRowHeight();
var A=B.getColumnCount();
var g=0;
var d=[];
for(var x=0;x<A;x++){var D=B.getColumnAtX(x);
var k=f.getColumnWidth(D);
d.push({col:D,xPos:x,editable:e.isColumnEditable(D),focusedCol:this.__eV==D,styleLeft:g,styleWidth:k});
g+=k;
}var C=[];
var E=false;

for(var j=a;j<a+b;j++){var m=l.isSelectedIndex(j);
var p=(this.__eU==j);
var t=this.__eY(j,m,p);

if(t){C.push(t);
continue;
}var s=[];
var v={table:h};
v.styleHeight=w;
v.row=j;
v.selected=m;
v.focusedRow=p;
v.rowData=e.getRowData(j);

if(!v.rowData){E=true;
}s.push(bp);
var c=q.getRowClass(v);

if(c){s.push(bq,c,bg);
}var r=q.createRowStyle(v);
r+=bl+q.getRowHeightStyle(w)+br;

if(r){s.push(bA,r,bg);
}s.push(bu);

for(var x=0;x<A;x++){var n=d[x];

for(var z in n){v[z]=n[z];
}var D=v.col;
v.value=e.getValue(D,j);
var o=f.getDataCellRenderer(D);
o.createDataCellHtml(v,s);
}s.push(bh);
var u=s.join(bj);
this.__fa(j,u,m,p);
C.push(u);
}this.fireDataEvent(ba,E);
return C.join(bj);
},_scrollContent:function(bT){var bU=this.getContentElement().getDomElement();

if(!(bU&&bU.firstChild)){this._updateAllRows();
return;
}var ce=bU.firstChild;
var bV=ce.childNodes;
var cc=this.getVisibleRowCount();
var cb=this.getFirstVisibleRow();
var bY=this.getTable().getTableModel();
var cf=0;
cf=bY.getRowCount();
if(cb+cc>cf){this._updateAllRows();
return;
}var cg=bT<0?cc+bT:0;
var bW=bT<0?0:cc-bT;

for(i=Math.abs(bT)-1;i>=0;i--){var ca=bV[cg];

try{ce.removeChild(ca);
}catch(cw){break;
}}if(!this.__eT){this.__eT=document.createElement(bB);
}var cd=be;
cd+=this._getRowsHtml(cb+bW,Math.abs(bT));
cd+=bh;
this.__eT.innerHTML=cd;
var bX=this.__eT.firstChild.childNodes;
if(bT>0){for(var i=bX.length-1;i>=0;i--){var ca=bX[0];
ce.appendChild(ca);
}}else{for(var i=bX.length-1;i>=0;i--){var ca=bX[bX.length-1];
ce.insertBefore(ca,ce.firstChild);
}}if(this.__eU!==null){this._updateRowStyles(this.__eU-bT);
this._updateRowStyles(this.__eU);
}this.fireEvent(bf);
},_updateAllRows:function(){var cn=this.getContentElement().getDomElement();

if(!cn){this.addListenerOnce(bs,arguments.callee,this);
return;
}var ct=this.getTable();
var cq=ct.getTableModel();
var cs=this.getPaneScroller().getTablePaneModel();
var cr=cs.getColumnCount();
var ck=ct.getRowHeight();
var co=this.getFirstVisibleRow();
var cl=this.getVisibleRowCount();
var cu=cq.getRowCount();

if(co+cl>cu){cl=Math.max(0,cu-co);
}var cm=cs.getTotalWidth();
var cp;
if(cl>0){cp=[bk,bx,(ct.getForceLineHeight()?bt+ck+bo:bj),bc,bm,this._getRowsHtml(co,cl),bd];
}else{cp=[];
}var cv=cp.join(bj);
cn.innerHTML=cv;
this.setWidth(cm);
this.__eQ=cr;
this.__eR=cl;
this.fireEvent(bf);
}},destruct:function(){this.__eT=this.__eP=this.__eS=null;
}});
})();
(function(){var e="auto",d="string",c="number",b="*",a="qx.ui.core.ColumnData";
qx.Class.define(a,{extend:qx.ui.core.LayoutItem,construct:function(){arguments.callee.base.call(this);
this.setColumnWidth(e);
},members:{__gH:null,renderLayout:function(j,top,k,l){this.__gH=k;
},getComputedWidth:function(){return this.__gH;
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
(function(){var z="Function",y="__fc",x="Boolean",w="minWidth",v="width",u="qx.ui.table.columnmodel.Resize",t="qx.ui.table.columnmodel.resizebehavior.Default",s="__fd",r="maxWidth";
qx.Class.define(t,{extend:qx.ui.table.columnmodel.resizebehavior.Abstract,construct:function(){arguments.callee.base.call(this);
this.__fb=[];
this.__fc=new qx.ui.layout.HBox();
this.__fc.connectToWidget(this);
this.__fd=new qx.util.DeferredCall(this._computeColumnsFlexWidth,this);
},properties:{newResizeBehaviorColumnData:{check:z,init:function(q){return new qx.ui.core.ColumnData();
}},initializeWidthsOnEveryAppear:{check:x,init:false},tableColumnModel:{check:u}},members:{__fc:null,__fe:null,__fb:null,__fd:null,__ff:false,setWidth:function(k,m,n){if(k>=this.__fb.length){throw new Error("Column number out of range");
}this.__fb[k].setColumnWidth(m,n);
this.__fd.schedule();
},setMinWidth:function(a,b){if(a>=this.__fb.length){throw new Error("Column number out of range");
}this.__fb[a].setMinWidth(b);
this.__fd.schedule();
},setMaxWidth:function(D,E){if(D>=this.__fb.length){throw new Error("Column number out of range");
}this.__fb[D].setMaxWidth(E);
this.__fd.schedule();
},set:function(A,B){for(var C in B){switch(C){case v:this.setWidth(A,B[C]);
break;
case w:this.setMinWidth(A,B[C]);
break;
case r:this.setMaxWidth(A,B[C]);
break;
default:throw new Error("Unknown property: "+C);
}}},onAppear:function(event,O){if(O===true||!this.__ff||this.getInitializeWidthsOnEveryAppear()){this._computeColumnsFlexWidth();
this.__ff=true;
}},onTableWidthChanged:function(event){this._computeColumnsFlexWidth();
},onVerticalScrollBarChanged:function(event){this._computeColumnsFlexWidth();
},onColumnWidthChanged:function(event){this._extendNextColumn(event);
},onVisibilityChanged:function(event){var X=event.getData();
if(X.visible){this._computeColumnsFlexWidth();
return;
}this._extendLastColumn(event);
},_setNumColumns:function(o){var p=this.__fb;
if(o<=p.length){p.splice(o,p.length);
return;
}for(var i=p.length;i<o;i++){p[i]=this.getNewResizeBehaviorColumnData()();
p[i].columnNumber=i;
}},getLayoutChildren:function(){return this.__fe;
},_computeColumnsFlexWidth:function(){this.__fd.cancel();
var g=this._getAvailableWidth();

if(g===null){return;
}var c=this.getTableColumnModel();
var e=c.getVisibleColumns();
var f=e.length;
var d=this.__fb;
var i,l;

if(f===0){return;
}var j=[];

for(i=0;i<f;i++){j.push(d[e[i]]);
}this.__fe=j;
this.__fg();
this.__fc.renderLayout(g,100);
for(i=0,l=j.length;i<l;i++){var h=j[i].getComputedWidth();
c.setColumnWidth(e[i],h);
}},__fg:function(){this.__fc.invalidateChildrenCache();
var N=this.__fe;

for(var i=0,l=N.length;i<l;i++){N[i].invalidateLayoutCache();
}},_extendNextColumn:function(event){var T=this.getTableColumnModel();
var W=event.getData();
var R=T.getVisibleColumns();
var Q=this._getAvailableWidth();
var P=R.length;
if(W.newWidth>W.oldWidth){return ;
}var i;
var S;
var V=0;

for(i=0;i<P;i++){V+=T.getColumnWidth(R[i]);
}if(V<Q){for(i=0;i<R.length;i++){if(R[i]==W.col){S=R[i+1];
break;
}}
if(S){var U=(Q-(V-T.getColumnWidth(S)));
T.setColumnWidth(S,U);
}}},_extendLastColumn:function(event){var I=this.getTableColumnModel();
var M=event.getData();
if(M.visible){return;
}var H=I.getVisibleColumns();
if(H.length==0){return;
}var G=this._getAvailableWidth(I);
var F=H.length;
var i;
var K;
var L=0;

for(i=0;i<F;i++){L+=I.getColumnWidth(H[i]);
}if(L<G){K=H[H.length-1];
var J=(G-(L-I.getColumnWidth(K)));
I.setColumnWidth(K,J);
}},_getResizeColumnData:function(){return this.__fb;
}},destruct:function(){this.__fb=this.__fe=null;
this._disposeObjects(y,s);
}});
})();
(function(){var j="qx.event.type.Data",h="visibilityChanged",g="orderChanged",f="visibilityChangedPre",e="__fn",d="__fo",c="widthChanged",b="qx.ui.table.columnmodel.Basic",a="__fm";
qx.Class.define(b,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__fh=[];
this.__fi=[];
},events:{"widthChanged":j,"visibilityChangedPre":j,"visibilityChanged":j,"orderChanged":j},statics:{DEFAULT_WIDTH:100,DEFAULT_HEADER_RENDERER:qx.ui.table.headerrenderer.Default,DEFAULT_DATA_RENDERER:qx.ui.table.cellrenderer.Default,DEFAULT_EDITOR_FACTORY:qx.ui.table.celleditor.TextField},members:{__fj:null,__fk:null,__fi:null,__fh:null,__fl:null,__fm:null,__fn:null,__fo:null,init:function(X){{};
this.__fl=[];
var bb=qx.ui.table.columnmodel.Basic.DEFAULT_WIDTH;
var bc=this.__fm||(this.__fm=new qx.ui.table.columnmodel.Basic.DEFAULT_HEADER_RENDERER());
var ba=this.__fn||(this.__fn=new qx.ui.table.columnmodel.Basic.DEFAULT_DATA_RENDERER());
var Y=this.__fo||(this.__fo=new qx.ui.table.columnmodel.Basic.DEFAULT_EDITOR_FACTORY());
this.__fh=[];
this.__fi=[];

for(var be=0;be<X;be++){this.__fl[be]={width:bb,headerRenderer:bc,dataRenderer:ba,editorFactory:Y};
this.__fh[be]=be;
this.__fi[be]=be;
}this.__fk=null;

for(var be=0;be<X;be++){var bd={col:be,visible:true};
this.fireDataEvent(f,bd);
this.fireDataEvent(h,bd);
}},getVisibleColumns:function(){return this.__fi!=null?this.__fi:[];
},setColumnWidth:function(A,B){{};
var D=this.__fl[A].width;

if(D!=B){this.__fl[A].width=B;
var C={col:A,newWidth:B,oldWidth:D};
this.fireDataEvent(c,C);
}},getColumnWidth:function(k){{};
return this.__fl[k].width;
},setHeaderCellRenderer:function(bh,bi){{};
var bj=this.__fl[bh].headerRenderer;

if(bj!==this.__fm){bj.dispose();
}this.__fl[bh].headerRenderer=bi;
},getHeaderCellRenderer:function(S){{};
return this.__fl[S].headerRenderer;
},setDataCellRenderer:function(q,r){{};
var s=this.__fl[q].headerRenderer;

if(s!==this.__fn){s.dispose();
}this.__fl[q].dataRenderer=r;
},getDataCellRenderer:function(E){{};
return this.__fl[E].dataRenderer;
},setCellEditorFactory:function(T,U){{};
var V=this.__fl[T].headerRenderer;

if(V!==this.__fo){V.dispose();
}this.__fl[T].editorFactory=U;
},getCellEditorFactory:function(O){{};
return this.__fl[O].editorFactory;
},_getColToXPosMap:function(){if(this.__fk==null){this.__fk={};

for(var R=0;R<this.__fh.length;R++){var Q=this.__fh[R];
this.__fk[Q]={overX:R};
}
for(var P=0;P<this.__fi.length;P++){var Q=this.__fi[P];
this.__fk[Q].visX=P;
}}return this.__fk;
},getVisibleColumnCount:function(){return this.__fi!=null?this.__fi.length:0;
},getVisibleColumnAtX:function(W){{};
return this.__fi[W];
},getVisibleX:function(bg){{};
return this._getColToXPosMap()[bg].visX;
},getOverallColumnCount:function(){return this.__fh.length;
},getOverallColumnAtX:function(z){{};
return this.__fh[z];
},getOverallX:function(p){{};
return this._getColToXPosMap()[p].overX;
},isColumnVisible:function(bf){{};
return (this._getColToXPosMap()[bf].visX!=null);
},setColumnVisible:function(F,G){{};

if(G!=this.isColumnVisible(F)){if(G){var M=this._getColToXPosMap();
var J=M[F].overX;

if(J==null){throw new Error("Showing column failed: "+F+". The column is not added to this TablePaneModel.");
}var K;

for(var x=J+1;x<this.__fh.length;x++){var L=this.__fh[x];
var H=M[L].visX;

if(H!=null){K=H;
break;
}}if(K==null){K=this.__fi.length;
}this.__fi.splice(K,0,F);
}else{var I=this.getVisibleX(F);
this.__fi.splice(I,1);
}this.__fk=null;
if(!this.__fj){var N={col:F,visible:G};
this.fireDataEvent(f,N);
this.fireDataEvent(h,N);
}}},moveColumn:function(t,u){{};
this.__fj=true;
var y=this.__fh[t];
var v=this.isColumnVisible(y);

if(v){this.setColumnVisible(y,false);
}this.__fh.splice(t,1);
this.__fh.splice(u,0,y);
this.__fk=null;

if(v){this.setColumnVisible(y,true);
}this.__fj=false;
var w={col:y,fromOverXPos:t,toOverXPos:u};
this.fireDataEvent(g,w);
},setColumnsOrder:function(l){{};

if(l.length==this.__fh.length){this.__fj=true;
var o=new Array(l.length);

for(var m=0;m<this.__fh.length;m++){var n=this.isColumnVisible(m);
o[m]=n;

if(n){this.setColumnVisible(m,false);
}}this.__fh=qx.lang.Array.clone(l);
this.__fk=null;
for(var m=0;m<this.__fh.length;m++){if(o[m]){this.setColumnVisible(m,true);
}}this.__fj=false;
this.fireDataEvent(g);
}else{throw new Error("setColumnsOrder: Invalid number of column positions given, expected "+this.__fh.length+", got "+l.length);
}}},destruct:function(){for(var i=0;i<this.__fl.length;i++){this.__fl[i].headerRenderer.dispose();
this.__fl[i].dataRenderer.dispose();
this.__fl[i].editorFactory.dispose();
}this.__fh=this.__fi=this.__fl=this.__fk=null;
this._disposeObjects(a,e,d);
}});
})();
(function(){var g="qx.ui.table.selection.Model",f="qx.ui.table.selection.Manager";
qx.Class.define(f,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
},properties:{selectionModel:{check:g}},members:{__fp:null,handleMouseDown:function(l,m){if(m.isLeftPressed()){var n=this.getSelectionModel();

if(!n.isSelectedIndex(l)){this._handleSelectEvent(l,m);
this.__fp=true;
}else{this.__fp=false;
}}else if(m.isRightPressed()&&m.getModifiers()==0){var n=this.getSelectionModel();

if(!n.isSelectedIndex(l)){n.setSelectionInterval(l,l);
}}},handleMouseUp:function(s,t){if(t.isLeftPressed()&&!this.__fp){this._handleSelectEvent(s,t);
}},handleClick:function(j,k){},handleSelectKeyDown:function(h,i){this._handleSelectEvent(h,i);
},handleMoveKeyDown:function(o,p){var r=this.getSelectionModel();

switch(p.getModifiers()){case 0:r.setSelectionInterval(o,o);
break;
case qx.event.type.Dom.SHIFT_MASK:var q=r.getAnchorSelectionIndex();

if(q==-1){r.setSelectionInterval(o,o);
}else{r.setSelectionInterval(q,o);
}break;
}},_handleSelectEvent:function(a,b){var e=this.getSelectionModel();
var c=e.getLeadSelectionIndex();
var d=e.getAnchorSelectionIndex();

if(b.isShiftPressed()){if(a!=c||e.isSelectionEmpty()){if(d==-1){d=a;
}
if(b.isCtrlOrCommandPressed()){e.addSelectionInterval(d,a);
}else{e.setSelectionInterval(d,a);
}}}else if(b.isCtrlOrCommandPressed()){if(e.isSelectedIndex(a)){e.removeSelectionInterval(a,a);
}else{e.addSelectionInterval(a,a);
}}else{e.setSelectionInterval(a,a);
}}}});
})();
(function(){var a="qx.ui.table.pane.Clipper";
qx.Class.define(a,{extend:qx.ui.container.Composite,construct:function(){arguments.callee.base.call(this,new qx.ui.layout.Grow());
this.setMinWidth(0);
},members:{scrollToX:function(c){this.getContentElement().scrollToX(c,false);
},scrollToY:function(b){this.getContentElement().scrollToY(b,true);
}}});
})();
(function(){var B='',A='"',z=':',y=']',x='null',w=': ',u='object',t='function',s=',',r='\n',bl='\\u',bk=',\n',bj='0000',bi='string',bh="Cannot stringify a recursive object.",bg='0',bf='-',be='}',bd='String',bc='Boolean',I='\\\\',J='\\f',G='\\t',H='{\n',E='[]',F="qx.lang.JsonImpl",C='Z',D='\\n',K='Object',L='{}',S='@',Q='.',V='(',U='Array',X='T',W='\\r',N='{',bb='JSON.parse',ba=' ',Y='[',M='Number',O=')',P='[\n',R='\\"',T='\\b';
qx.Class.define(F,{extend:Object,construct:function(){this.stringify=qx.lang.Function.bind(this.stringify,this);
this.parse=qx.lang.Function.bind(this.parse,this);
},members:{__fu:null,__fv:null,__fw:null,__fx:null,stringify:function(bm,bn,bo){this.__fu=B;
this.__fv=B;
this.__fx=[];

if(qx.lang.Type.isNumber(bo)){var bo=Math.min(10,Math.floor(bo));

for(var i=0;i<bo;i+=1){this.__fv+=ba;
}}else if(qx.lang.Type.isString(bo)){if(bo.length>10){bo=bo.slice(0,10);
}this.__fv=bo;
}if(bn&&(qx.lang.Type.isFunction(bn)||qx.lang.Type.isArray(bn))){this.__fw=bn;
}else{this.__fw=null;
}return this.__fy(B,{'':bm});
},__fy:function(bs,bt){var bw=this.__fu,bu,bx=bt[bs];
if(bx&&qx.lang.Type.isFunction(bx.toJSON)){bx=bx.toJSON(bs);
}else if(qx.lang.Type.isDate(bx)){bx=this.dateToJSON(bx);
}if(typeof this.__fw===t){bx=this.__fw.call(bt,bs,bx);
}
if(bx===null){return x;
}
if(bx===undefined){return undefined;
}switch(qx.lang.Type.getClass(bx)){case bd:return this.__fz(bx);
case M:return isFinite(bx)?String(bx):x;
case bc:return String(bx);
case U:this.__fu+=this.__fv;
bu=[];

if(this.__fx.indexOf(bx)!==-1){throw new TypeError(bh);
}this.__fx.push(bx);
var length=bx.length;

for(var i=0;i<length;i+=1){bu[i]=this.__fy(i,bx)||x;
}this.__fx.pop();
if(bu.length===0){var bv=E;
}else if(this.__fu){bv=P+this.__fu+bu.join(bk+this.__fu)+r+bw+y;
}else{bv=Y+bu.join(s)+y;
}this.__fu=bw;
return bv;
case K:this.__fu+=this.__fv;
bu=[];

if(this.__fx.indexOf(bx)!==-1){throw new TypeError(bh);
}this.__fx.push(bx);
if(this.__fw&&typeof this.__fw===u){var length=this.__fw.length;

for(var i=0;i<length;i+=1){var k=this.__fw[i];

if(typeof k===bi){var v=this.__fy(k,bx);

if(v){bu.push(this.__fz(k)+(this.__fu?w:z)+v);
}}}}else{for(var k in bx){if(Object.hasOwnProperty.call(bx,k)){var v=this.__fy(k,bx);

if(v){bu.push(this.__fz(k)+(this.__fu?w:z)+v);
}}}}this.__fx.pop();
if(bu.length===0){var bv=L;
}else if(this.__fu){bv=H+this.__fu+bu.join(bk+this.__fu)+r+bw+be;
}else{bv=N+bu.join(s)+be;
}this.__fu=bw;
return bv;
}},dateToJSON:function(bp){var bq=function(n){return n<10?bg+n:n;
};
var br=function(n){var q=bq(n);
return n<100?bg+q:q;
};
return isFinite(bp.valueOf())?bp.getUTCFullYear()+bf+bq(bp.getUTCMonth()+1)+bf+bq(bp.getUTCDate())+X+bq(bp.getUTCHours())+z+bq(bp.getUTCMinutes())+z+bq(bp.getUTCSeconds())+Q+br(bp.getUTCMilliseconds())+C:null;
},__fz:function(f){var g={'\b':T,'\t':G,'\n':D,'\f':J,'\r':W,'"':R,'\\':I};
var h=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
h.lastIndex=0;

if(h.test(f)){return A+
f.replace(h,function(a){var c=g[a];
return typeof c===bi?c:bl+(bj+a.charCodeAt(0).toString(16)).slice(-4);
})+A;
}else{return A+f+A;
}},parse:function(b,d){var e=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
e.lastIndex=0;
if(e.test(b)){b=b.replace(e,function(a){return bl+(bj+a.charCodeAt(0).toString(16)).slice(-4);
});
}if(/^[\],:{}\s]*$/.test(b.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,S).replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,y).replace(/(?:^|:|,)(?:\s*\[)+/g,B))){var j=eval(V+b+O);
return typeof d===t?this.__fA({'':j},B,d):j;
}throw new SyntaxError(bb);
},__fA:function(l,m,o){var p=l[m];

if(p&&typeof p===u){for(var k in p){if(Object.hasOwnProperty.call(p,k)){var v=this.__fA(p,k,o);

if(v!==undefined){p[k]=v;
}else{delete p[k];
}}}}return o.call(l,m,p);
}}});
})();
(function(){var a="qx.lang.Json";
qx.Class.define(a,{statics:{JSON:(qx.lang.Type.getClass(window.JSON)=="JSON"&&JSON.parse('{"x":1}').x===1)?window.JSON:new qx.lang.JsonImpl(),stringify:null,parse:null},defer:function(b){b.stringify=b.JSON.stringify;
b.parse=b.JSON.parse;
}});
})();
(function(){var I="..",H="changeSelection",G="Use 'resetSelection' instead",F=" [",E="]",D="qx.event.type.Event",C="Ranges:",B="qx.ui.table.selection.Model",A="_applySelectionMode",z="Use '_resetSelection' instead.";
qx.Class.define(B,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__fq=[];
this.__fr=-1;
this.__fs=-1;
this.hasBatchModeRefCount=0;
this.__ft=false;
},events:{"changeSelection":D},statics:{NO_SELECTION:1,SINGLE_SELECTION:2,SINGLE_INTERVAL_SELECTION:3,MULTIPLE_INTERVAL_SELECTION:4,MULTIPLE_INTERVAL_SELECTION_TOGGLE:5},properties:{selectionMode:{init:2,check:[1,2,3,4,5],apply:A}},members:{__ft:null,__fr:null,__fs:null,__fq:null,_applySelectionMode:function(a){this.resetSelection();
},setBatchMode:function(U){if(U){this.hasBatchModeRefCount+=1;
}else{if(this.hasBatchModeRefCount==0){throw new Error("Try to turn off batch mode althoug it was not turned on.");
}this.hasBatchModeRefCount-=1;

if(this.__ft){this.__ft=false;
this._fireChangeSelection();
}}return this.hasBatchMode();
},hasBatchMode:function(){return this.hasBatchModeRefCount>0;
},getAnchorSelectionIndex:function(){return this.__fr;
},_setAnchorSelectionIndex:function(v){this.__fr=v;
},getLeadSelectionIndex:function(){return this.__fs;
},_setLeadSelectionIndex:function(K){this.__fs=K;
},_getSelectedRangeArr:function(){return this.__fq;
},resetSelection:function(){if(!this.isSelectionEmpty()){this._resetSelection();
this._fireChangeSelection();
}},clearSelection:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,G);
this.resetSelection();
},isSelectionEmpty:function(){return this.__fq.length==0;
},getSelectedCount:function(){var n=0;

for(var i=0;i<this.__fq.length;i++){var m=this.__fq[i];
n+=m.maxIndex-m.minIndex+1;
}return n;
},isSelectedIndex:function(o){for(var i=0;i<this.__fq.length;i++){var p=this.__fq[i];

if(o>=p.minIndex&&o<=p.maxIndex){return true;
}}return false;
},getSelectedRanges:function(){var J=[];

for(var i=0;i<this.__fq.length;i++){J.push({minIndex:this.__fq[i].minIndex,maxIndex:this.__fq[i].maxIndex});
}return J;
},iterateSelection:function(S,T){for(var i=0;i<this.__fq.length;i++){for(var j=this.__fq[i].minIndex;j<=this.__fq[i].maxIndex;j++){S.call(T,j);
}}},setSelectionInterval:function(w,x){var y=arguments.callee.self;

switch(this.getSelectionMode()){case y.NO_SELECTION:return;
case y.SINGLE_SELECTION:if(this.isSelectedIndex(x)){return;
}w=x;
break;
case y.MULTIPLE_INTERVAL_SELECTION_TOGGLE:this.setBatchMode(true);

try{for(var i=w;i<=x;i++){if(!this.isSelectedIndex(i)){this._addSelectionInterval(i,i);
}else{this.removeSelectionInterval(i,i);
}}}catch(e){throw e;
}finally{this.setBatchMode(false);
}this._fireChangeSelection();
return;
}this._resetSelection();
this._addSelectionInterval(w,x);
this._fireChangeSelection();
},addSelectionInterval:function(s,t){var u=qx.ui.table.selection.Model;

switch(this.getSelectionMode()){case u.NO_SELECTION:return;
case u.MULTIPLE_INTERVAL_SELECTION:case u.MULTIPLE_INTERVAL_SELECTION_TOGGLE:this._addSelectionInterval(s,t);
this._fireChangeSelection();
break;
default:this.setSelectionInterval(s,t);
break;
}},removeSelectionInterval:function(b,c){this.__fr=b;
this.__fs=c;
var d=Math.min(b,c);
var g=Math.max(b,c);
for(var i=0;i<this.__fq.length;i++){var k=this.__fq[i];

if(k.minIndex>g){break;
}else if(k.maxIndex>=d){var l=(k.minIndex>=d)&&(k.minIndex<=g);
var h=(k.maxIndex>=d)&&(k.maxIndex<=g);

if(l&&h){this.__fq.splice(i,1);
i--;
}else if(l){k.minIndex=g+1;
}else if(h){k.maxIndex=d-1;
}else{var f={minIndex:g+1,maxIndex:k.maxIndex};
this.__fq.splice(i+1,0,f);
k.maxIndex=d-1;
break;
}}}this._fireChangeSelection();
},_resetSelection:function(){this.__fq=[];
this.__fr=-1;
this.__fs=-1;
},_clearSelection:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,z);
this._resetSelection();
},_addSelectionInterval:function(L,M){this.__fr=L;
this.__fs=M;
var N=Math.min(L,M);
var P=Math.max(L,M);
var O=0;

for(;O<this.__fq.length;O++){var Q=this.__fq[O];

if(Q.minIndex>N){break;
}}this.__fq.splice(O,0,{minIndex:N,maxIndex:P});
var R=this.__fq[0];

for(var i=1;i<this.__fq.length;i++){var Q=this.__fq[i];

if(R.maxIndex+1>=Q.minIndex){R.maxIndex=Math.max(R.maxIndex,Q.maxIndex);
this.__fq.splice(i,1);
i--;
}else{R=Q;
}}},_dumpRanges:function(){var q=C;

for(var i=0;i<this.__fq.length;i++){var r=this.__fq[i];
q+=F+r.minIndex+I+r.maxIndex+E;
}this.debug(q);
},_fireChangeSelection:function(){if(this.hasBatchMode()){this.__ft=true;
}else{this.fireEvent(H);
}}},destruct:function(){this.__fq=null;
}});
})();
(function(){var n="appear",m="columnVisibilityMenuCreateEnd",l="tableWidthChanged",k="verticalScrollBarChanged",j="qx.ui.table.columnmodel.resizebehavior.Abstract",i="qx.ui.table.columnmodel.Resize",h="_applyBehavior",g="separator",f="visibilityChanged",e="Reset column widths",b="changeBehavior",d="user-button",c="widthChanged",a="execute";
qx.Class.define(i,{extend:qx.ui.table.columnmodel.Basic,include:qx.locale.MTranslation,construct:function(){arguments.callee.base.call(this);
this.__fB=false;
this.__fC=false;
},properties:{behavior:{check:j,init:null,nullable:true,apply:h,event:b}},members:{__fC:null,__fB:null,__fD:null,_applyBehavior:function(r,s){if(s!=null){s.dispose();
s=null;
}r._setNumColumns(this.getOverallColumnCount());
r.setTableColumnModel(this);
},init:function(p,q){arguments.callee.base.call(this,p);

if(this.__fD==null){this.__fD=q;
q.addListener(n,this._onappear,this);
q.addListener(l,this._onTableWidthChanged,this);
q.addListener(k,this._onverticalscrollbarchanged,this);
q.addListener(m,this._addResetColumnWidthButton,this);
this.addListener(c,this._oncolumnwidthchanged,this);
this.addListener(f,this._onvisibilitychanged,this);
}if(this.getBehavior()==null){this.setBehavior(new qx.ui.table.columnmodel.resizebehavior.Default());
}this.getBehavior()._setNumColumns(p);
},getTable:function(){return this.__fD;
},_addResetColumnWidthButton:function(event){var v=event.getData();
var u=v.columnButton;
var t=v.menu;
var o;
o=u.factory(g);
t.add(o);
o=u.factory(d,{text:this.tr(e)});
t.add(o);
o.addListener(a,this._onappear,this);
},_onappear:function(event){if(this.__fB){return ;
}this.__fB=true;
{};
this.getBehavior().onAppear(event,event.getType()!==n);
this.__fD._updateScrollerWidths();
this.__fD._updateScrollBarVisibility();
this.__fB=false;
this.__fC=true;
},_onTableWidthChanged:function(event){if(this.__fB||!this.__fC){return ;
}this.__fB=true;
{};
this.getBehavior().onTableWidthChanged(event);
this.__fB=false;
},_onverticalscrollbarchanged:function(event){if(this.__fB||!this.__fC){return ;
}this.__fB=true;
{};
this.getBehavior().onVerticalScrollBarChanged(event);
qx.event.Timer.once(function(){if(this.__fD&&!this.__fD.isDisposed()){this.__fD._updateScrollerWidths();
this.__fD._updateScrollBarVisibility();
}},this,0);
this.__fB=false;
},_oncolumnwidthchanged:function(event){if(this.__fB||!this.__fC){return ;
}this.__fB=true;
{};
this.getBehavior().onColumnWidthChanged(event);
this.__fB=false;
},_onvisibilitychanged:function(event){if(this.__fB||!this.__fC){return ;
}this.__fB=true;
{};
this.getBehavior().onVisibilityChanged(event);
this.__fB=false;
}},destruct:function(){this.__fD=null;
}});
})();
(function(){var z="metaDataChanged",y="qx.event.type.Data",x="qx.event.type.Event",w="abstract",v="qx.ui.table.model.Abstract";
qx.Class.define(v,{type:w,extend:qx.core.Object,implement:qx.ui.table.ITableModel,events:{"dataChanged":y,"metaDataChanged":x,"sorted":y},construct:function(){arguments.callee.base.call(this);
this.__fK=[];
this.__fL=[];
this.__fM={};
},members:{__fK:null,__fL:null,__fM:null,__fN:null,getRowCount:function(){throw new Error("getRowCount is abstract");
},getRowData:function(f){return null;
},isColumnEditable:function(g){return false;
},isColumnSortable:function(d){return false;
},sortByColumn:function(m,n){},getSortColumnIndex:function(){return -1;
},isSortAscending:function(){return true;
},prefetchRows:function(a,b){},getValue:function(r,s){throw new Error("getValue is abstract");
},getValueById:function(A,B){return this.getValue(this.getColumnIndexById(A),B);
},setValue:function(D,E,F){throw new Error("setValue is abstract");
},setValueById:function(o,p,q){this.setValue(this.getColumnIndexById(o),p,q);
},getColumnCount:function(){return this.__fK.length;
},getColumnIndexById:function(l){return this.__fM[l];
},getColumnId:function(u){return this.__fK[u];
},getColumnName:function(C){return this.__fL[C];
},setColumnIds:function(e){this.__fK=e;
this.__fM={};

for(var i=0;i<e.length;i++){this.__fM[e[i]]=i;
}this.__fL=new Array(e.length);
if(!this.__fN){this.fireEvent(z);
}},setColumnNamesByIndex:function(c){if(this.__fK.length!=c.length){throw new Error("this.__columnIdArr and columnNameArr have different length: "+this.__fK.length+" != "+c.length);
}this.__fL=c;
this.fireEvent(z);
},setColumnNamesById:function(t){this.__fL=new Array(this.__fK.length);

for(var i=0;i<this.__fK.length;++i){this.__fL[i]=t[this.__fK[i]];
}},setColumns:function(h,j){var k=this.__fK.length==0||j;

if(j==null){if(this.__fK.length==0){j=h;
}else{j=this.__fK;
}}
if(j.length!=h.length){throw new Error("columnIdArr and columnNameArr have different length: "+j.length+" != "+h.length);
}
if(k){this.__fN=true;
this.setColumnIds(j);
this.__fN=false;
}this.setColumnNamesByIndex(h);
}},destruct:function(){this.__fK=this.__fL=this.__fM=null;
}});
})();
(function(){var bz="dataChanged",by="metaDataChanged",bx="qx.ui.table.model.Simple",bw="Boolean",bv="sorted";
qx.Class.define(bx,{extend:qx.ui.table.model.Abstract,construct:function(){arguments.callee.base.call(this);
this.__fE=[];
this.__fF=-1;
this.__fG=[];
this.__fH=null;
},properties:{caseSensitiveSorting:{check:bw,init:true}},statics:{_defaultSortComparatorAscending:function(B,C){var D=B[arguments.callee.columnIndex];
var E=C[arguments.callee.columnIndex];

if(qx.lang.Type.isNumber(D)&&qx.lang.Type.isNumber(E)){var F=isNaN(D)?isNaN(E)?0:1:isNaN(E)?-1:null;

if(F!=null){return F;
}}return (D>E)?1:((D==E)?0:-1);
},_defaultSortComparatorInsensitiveAscending:function(bA,bB){var bC=(bA[arguments.callee.columnIndex].toLowerCase?bA[arguments.callee.columnIndex].toLowerCase():bA[arguments.callee.columnIndex]);
var bD=(bB[arguments.callee.columnIndex].toLowerCase?bB[arguments.callee.columnIndex].toLowerCase():bB[arguments.callee.columnIndex]);

if(qx.lang.Type.isNumber(bC)&&qx.lang.Type.isNumber(bD)){var bE=isNaN(bC)?isNaN(bD)?0:1:isNaN(bD)?-1:null;

if(bE!=null){return bE;
}}return (bC>bD)?1:((bC==bD)?0:-1);
},_defaultSortComparatorDescending:function(s,t){var u=s[arguments.callee.columnIndex];
var v=t[arguments.callee.columnIndex];

if(qx.lang.Type.isNumber(u)&&qx.lang.Type.isNumber(v)){var w=isNaN(u)?isNaN(v)?0:1:isNaN(v)?-1:null;

if(w!=null){return w;
}}return (u<v)?1:((u==v)?0:-1);
},_defaultSortComparatorInsensitiveDescending:function(f,g){var h=(f[arguments.callee.columnIndex].toLowerCase?f[arguments.callee.columnIndex].toLowerCase():f[arguments.callee.columnIndex]);
var k=(g[arguments.callee.columnIndex].toLowerCase?g[arguments.callee.columnIndex].toLowerCase():g[arguments.callee.columnIndex]);

if(qx.lang.Type.isNumber(h)&&qx.lang.Type.isNumber(k)){var l=isNaN(h)?isNaN(k)?0:1:isNaN(k)?-1:null;

if(l!=null){return l;
}}return (h<k)?1:((h==k)?0:-1);
}},members:{__fE:null,__fH:null,__fI:null,__fG:null,__fF:null,__fJ:null,getRowData:function(bp){var bq=this.__fE[bp];

if(bq==null||bq.originalData==null){return bq;
}else{return bq.originalData;
}},getRowDataAsMap:function(b){var d=this.__fE[b];
var c={};

for(var e=0;e<this.getColumnCount();e++){c[this.getColumnId(e)]=d[e];
}return c;
},getDataAsMapArray:function(){var bI=this.getRowCount();
var bH=[];

for(var i=0;i<bI;i++){bH.push(this.getRowDataAsMap(i));
}return bH;
},setEditable:function(bF){this.__fH=[];

for(var bG=0;bG<this.getColumnCount();bG++){this.__fH[bG]=bF;
}this.fireEvent(by);
},setColumnEditable:function(K,L){if(L!=this.isColumnEditable(K)){if(this.__fH==null){this.__fH=[];
}this.__fH[K]=L;
this.fireEvent(by);
}},isColumnEditable:function(a){return this.__fH?(this.__fH[a]==true):false;
},setColumnSortable:function(bJ,bK){if(bK!=this.isColumnSortable(bJ)){if(this.__fI==null){this.__fI=[];
}this.__fI[bJ]=bK;
this.fireEvent(by);
}},isColumnSortable:function(br){return (this.__fI?(this.__fI[br]!==false):true);
},sortByColumn:function(X,Y){var bc;
var bb=this.__fG[X];

if(bb){bc=(Y?bb.ascending:bb.descending);
}else{if(this.getCaseSensitiveSorting()){bc=(Y?qx.ui.table.model.Simple._defaultSortComparatorAscending:qx.ui.table.model.Simple._defaultSortComparatorDescending);
}else{bc=(Y?qx.ui.table.model.Simple._defaultSortComparatorInsensitiveAscending:qx.ui.table.model.Simple._defaultSortComparatorInsensitiveDescending);
}}bc.columnIndex=X;
this.__fE.sort(bc);
this.__fF=X;
this.__fJ=Y;
var ba={columnIndex:X,ascending:Y};
this.fireDataEvent(bv,ba);
this.fireEvent(by);
},setSortMethods:function(bs,bt){var bu;

if(qx.lang.Type.isFunction(bt)){bu={ascending:bt,descending:function(Q,R){return bt(R,Q);
}};
}else{bu=bt;
}this.__fG[bs]=bu;
},getSortMethods:function(W){return this.__fG[W];
},clearSorting:function(){if(this.__fF!=-1){this.__fF=-1;
this.__fJ=true;
this.fireEvent(by);
}},getSortColumnIndex:function(){return this.__fF;
},isSortAscending:function(){return this.__fJ;
},getRowCount:function(){return this.__fE.length;
},getValue:function(bd,be){if(be<0||be>=this.__fE.length){throw new Error("this.__rowArr out of bounds: "+be+" (0.."+this.__fE.length+")");
}return this.__fE[be][bd];
},setValue:function(G,H,I){if(this.__fE[H][G]!=I){this.__fE[H][G]=I;
if(this.hasListener(bz)){var J={firstRow:H,lastRow:H,firstColumn:G,lastColumn:G};
this.fireDataEvent(bz,J);
}
if(G==this.__fF){this.clearSorting();
}}},setData:function(p,q){this.__fE=p;
if(this.hasListener(bz)){var r={firstRow:0,lastRow:p.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(bz,r);
}
if(q!==false){this.clearSorting();
}},getData:function(){return this.__fE;
},setDataAsMapArray:function(m,n,o){this.setData(this._mapArray2RowArr(m,n),o);
},addRows:function(bf,bg,bh){if(bg==null){bg=this.__fE.length;
}bf.splice(0,0,bg,0);
Array.prototype.splice.apply(this.__fE,bf);
var bi={firstRow:bg,lastRow:this.__fE.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(bz,bi);

if(bh!==false){this.clearSorting();
}},addRowsAsMapArray:function(M,N,O,P){this.addRows(this._mapArray2RowArr(M,O),N,P);
},setRows:function(bL,bM,bN){if(bM==null){bM=0;
}bL.splice(0,0,bM,bL.length);
Array.prototype.splice.apply(this.__fE,bL);
var bO={firstRow:bM,lastRow:this.__fE.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(bz,bO);

if(bN!==false){this.clearSorting();
}},setRowsAsMapArray:function(x,y,z,A){this.setRows(this._mapArray2RowArr(x,z),y,A);
},removeRows:function(S,T,U){this.__fE.splice(S,T);
var V={firstRow:S,lastRow:this.__fE.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1,removeStart:S,removeCount:T};
this.fireDataEvent(bz,V);

if(U!==false){this.clearSorting();
}},_mapArray2RowArr:function(bj,bk){var bo=bj.length;
var bl=this.getColumnCount();
var bn=new Array(bo);
var bm;

for(var i=0;i<bo;++i){bm=[];

if(bk){bm.originalData=bj[i];
}
for(var j=0;j<bl;++j){bm[j]=bj[i][this.getColumnId(j)];
}bn[i]=bm;
}return bn;
}},destruct:function(){this.__fE=this.__fH=this.__fG=this.__fI=null;
}});
})();
(function(){var d="qx.ui.table.IRowRenderer";
qx.Interface.define(d,{members:{updateDataRowElement:function(a,b){},getRowHeightStyle:function(e){},createRowStyle:function(c){},getRowClass:function(f){}}});
})();
(function(){var f="menu-button",e="table-column-reset-button",d="separator",c="user-button",b="qx.ui.table.columnmenu.Button",a="menu";
qx.Class.define(b,{extend:qx.ui.form.MenuButton,implement:qx.ui.table.IColumnMenuButton,construct:function(){arguments.callee.base.call(this);
},members:{__fO:null,factory:function(j,k){switch(j){case a:var m=new qx.ui.menu.Menu();
this.setMenu(m);
return m;
case f:var o=new qx.ui.table.columnmenu.MenuItem(k.text);
o.setVisible(k.bVisible);
this.getMenu().add(o);
return o;
case c:var n=new qx.ui.menu.Button(k.text);
n.set({appearance:e});
return n;
case d:return new qx.ui.menu.Separator();
default:throw new Error("Unrecognized factory request: "+j);
}},empty:function(){var g=this.getMenu();
var h=g.getChildren();

for(var i=0,l=h.length;i<l;i++){h[0].destroy();
}}}});
})();
(function(){var f="",e="qooxdoo-table-cell qooxdoo-table-cell-right",d="0",c="qx.util.format.NumberFormat",b="qx.ui.table.cellrenderer.Number";
qx.Class.define(b,{extend:qx.ui.table.cellrenderer.Conditional,properties:{numberFormat:{check:c,init:null,nullable:true}},members:{_getContentHtml:function(g){var h=this.getNumberFormat();

if(h){if(g.value||g.value==0){return h.format(g.value);
}else{return f;
}}else{return g.value==0?d:(g.value||f);
}},_getCellClass:function(a){return e;
}}});
})();
(function(){var L="Boolean",K="resize-line",J="mousedown",I="qx.event.type.Data",H="mouseup",G="qx.ui.table.pane.CellEvent",F="scroll",E="focus-indicator",D="excluded",C="scrollbar-y",bJ="visible",bI="mousemove",bH="header",bG="editing",bF="click",bE="modelChanged",bD="scrollbar-x",bC="cellClick",bB="pane",bA="__fX",S="__fT",T="__fV",Q="mouseout",R="__fR",O="changeHorizontalScrollBarVisible",P="bottom",M="_applyScrollTimeout",N="changeScrollX",W="_applyTablePaneModel",X="Integer",bg="dblclick",be="dataEdited",bo="mousewheel",bj="interval",bw="qx.ui.table.pane.Scroller",bt="_applyShowCellFocusIndicator",ba="resize",bz="__fY",by="vertical",bx="changeScrollY",Y="appear",bc="table-scroller",bd="beforeSort",bf="__fQ",bh="__fW",bk="cellDblclick",bq="__fU",bv="horizontal",U="losecapture",V="contextmenu",bb="col-resize",bn="disappear",bm="_applyVerticalScrollBarVisible",bl="_applyHorizontalScrollBarVisible",bs="__fS",br="cellContextmenu",bi="close",bp="changeTablePaneModel",B="qx.ui.table.pane.Model",bu="changeVerticalScrollBarVisible";
qx.Class.define(bw,{extend:qx.ui.core.Widget,include:qx.ui.core.scroll.MScrollBarFactory,construct:function(cP){arguments.callee.base.call(this);
this.__fP=cP;
var cQ=new qx.ui.layout.Grid();
cQ.setColumnFlex(0,1);
cQ.setRowFlex(1,1);
this._setLayout(cQ);
this.__fQ=this._showChildControl(bD);
this.__fR=this._showChildControl(C);
this.__fS=this._showChildControl(bH);
this.__fT=this._showChildControl(bB);
this.__fU=new qx.ui.container.Composite(new qx.ui.layout.HBox()).set({minWidth:0});
this._add(this.__fU,{row:0,column:0,colSpan:2});
this.__fV=new qx.ui.table.pane.Clipper();
this.__fV.add(this.__fS);
this.__fV.addListener(U,this._onChangeCaptureHeader,this);
this.__fV.addListener(bI,this._onMousemoveHeader,this);
this.__fV.addListener(J,this._onMousedownHeader,this);
this.__fV.addListener(H,this._onMouseupHeader,this);
this.__fV.addListener(bF,this._onClickHeader,this);
this.__fU.add(this.__fV,{flex:1});
this.__fW=new qx.ui.table.pane.Clipper();
this.__fW.add(this.__fT);
this.__fW.addListener(bo,this._onMousewheel,this);
this.__fW.addListener(bI,this._onMousemovePane,this);
this.__fW.addListener(J,this._onMousedownPane,this);
this.__fW.addListener(H,this._onMouseupPane,this);
this.__fW.addListener(bF,this._onClickPane,this);
this.__fW.addListener(V,this._onContextMenu,this);
this.__fW.addListener(bg,this._onDblclickPane,this);
this.__fW.addListener(ba,this._onResizePane,this);
this._add(this.__fW,{row:1,column:0});
this.__fX=this.getChildControl(E);
this.getChildControl(K).hide();
this.addListener(Q,this._onMouseout,this);
this.addListener(Y,this._onAppear,this);
this.addListener(bn,this._onDisappear,this);
this.__fY=new qx.event.Timer();
this.__fY.addListener(bj,this._oninterval,this);
this.initScrollTimeout();
},statics:{MIN_COLUMN_WIDTH:10,RESIZE_REGION_RADIUS:5,CLICK_TOLERANCE:5,HORIZONTAL_SCROLLBAR:1,VERTICAL_SCROLLBAR:2},events:{"changeScrollY":I,"changeScrollX":I,"cellClick":G,"cellDblclick":G,"cellContextmenu":G,"beforeSort":I},properties:{horizontalScrollBarVisible:{check:L,init:true,apply:bl,event:O},verticalScrollBarVisible:{check:L,init:true,apply:bm,event:bu},tablePaneModel:{check:B,apply:W,event:bp},liveResize:{check:L,init:false},focusCellOnMouseMove:{check:L,init:false},selectBeforeFocus:{check:L,init:false},showCellFocusIndicator:{check:L,init:true,apply:bt},scrollTimeout:{check:X,init:100,apply:M},appearance:{refine:true,init:bc}},members:{__ga:null,__fP:null,__gb:null,__gc:null,__gd:null,__ge:null,__gf:null,__gg:null,__gh:null,__gi:null,__gj:null,__gk:null,__gl:null,__gm:null,__gn:null,__go:null,__gp:null,__gq:null,__gr:null,__gs:null,__gt:null,__gu:null,__fQ:null,__fR:null,__fS:null,__fV:null,__fT:null,__fW:null,__fX:null,__fU:null,__fY:null,getPaneInsetRight:function(){var dB=this.getTopRightWidget();
var dC=dB&&dB.isVisible()&&dB.getBounds()?dB.getBounds().width:0;
var dA=this.getVerticalScrollBarVisible()?this.getVerticalScrollBarWidth():0;
return Math.max(dC,dA);
},setPaneWidth:function(eK){if(this.isVerticalScrollBarVisible()){eK+=this.getPaneInsetRight();
}this.setWidth(eK);
},_createChildControlImpl:function(cN){var cO;

switch(cN){case bH:cO=(this.getTable().getNewTablePaneHeader())(this);
break;
case bB:cO=(this.getTable().getNewTablePane())(this);
break;
case E:cO=new qx.ui.table.pane.FocusIndicator(this);
cO.setUserBounds(0,0,0,0);
cO.setZIndex(1000);
cO.addListener(H,this._onMouseupFocusIndicator,this);
this.__fW.add(cO);
cO.exclude();
break;
case K:cO=new qx.ui.core.Widget();
cO.setUserBounds(0,0,0,0);
cO.setZIndex(1000);
this.__fW.add(cO);
break;
case bD:cO=this._createScrollBar(bv).set({minWidth:0,alignY:P});
cO.addListener(F,this._onScrollX,this);
this._add(cO,{row:2,column:0});
break;
case C:cO=this._createScrollBar(by);
cO.addListener(F,this._onScrollY,this);
this._add(cO,{row:1,column:1});
break;
}return cO||arguments.callee.base.call(this,cN);
},_applyHorizontalScrollBarVisible:function(eI,eJ){this.__fQ.setVisibility(eI?bJ:D);

if(!eI){this.setScrollY(0,true);
}},_applyVerticalScrollBarVisible:function(cX,cY){this.__fR.setVisibility(cX?bJ:D);

if(!cX){this.setScrollX(0);
}},_applyTablePaneModel:function(cC,cD){if(cD!=null){cD.removeListener(bE,this._onPaneModelChanged,this);
}cC.addListener(bE,this._onPaneModelChanged,this);
},_applyShowCellFocusIndicator:function(u,v){if(u){this._updateFocusIndicator();
}else{if(this.__fX){this.__fX.hide();
}}},getScrollY:function(){return this.__fR.getPosition();
},setScrollY:function(scrollY,A){this.__fR.scrollTo(scrollY);

if(A){this._updateContent();
}},getScrollX:function(){return this.__fQ.getPosition();
},setScrollX:function(scrollX){this.__fQ.scrollTo(scrollX);
},getTable:function(){return this.__fP;
},onColVisibilityChanged:function(){this.updateHorScrollBarMaximum();
this._updateFocusIndicator();
},setColumnWidth:function(p,q){this.__fS.setColumnWidth(p,q);
this.__fT.setColumnWidth(p,q);
var r=this.getTablePaneModel();
var x=r.getX(p);

if(x!=-1){this.updateHorScrollBarMaximum();
this._updateFocusIndicator();
}},onColOrderChanged:function(){this.__fS.onColOrderChanged();
this.__fT.onColOrderChanged();
this.updateHorScrollBarMaximum();
},onTableModelDataChanged:function(dE,dF,dG,dH){this.__fT.onTableModelDataChanged(dE,dF,dG,dH);
var dI=this.getTable().getTableModel().getRowCount();

if(dI!=this.__ga){this.updateVerScrollBarMaximum();

if(this.getFocusedRow()>=dI){if(dI==0){this.setFocusedCell(null,null);
}else{this.setFocusedCell(this.getFocusedColumn(),dI-1);
}}this.__ga=dI;
}},onSelectionChanged:function(){this.__fT.onSelectionChanged();
},onFocusChanged:function(){this.__fT.onFocusChanged();
},onTableModelMetaDataChanged:function(){this.__fS.onTableModelMetaDataChanged();
this.__fT.onTableModelMetaDataChanged();
},_onPaneModelChanged:function(){this.__fS.onPaneModelChanged();
this.__fT.onPaneModelChanged();
},_onResizePane:function(){this.updateHorScrollBarMaximum();
this.updateVerScrollBarMaximum();
this._updateContent();
this.__fS._updateContent();
this.__fP._updateScrollBarVisibility();
},updateHorScrollBarMaximum:function(){var eF=this.__fW.getInnerSize();

if(!eF){return ;
}var eD=this.getTablePaneModel().getTotalWidth();
var eE=this.__fQ;

if(eF.width<eD){var eC=Math.max(0,eD-eF.width);
eE.setMaximum(eC);
eE.setKnobFactor(eF.width/eD);
var eG=eE.getPosition();
eE.setPosition(Math.min(eG,eC));
}else{eE.setMaximum(0);
eE.setKnobFactor(1);
eE.setPosition(0);
}},updateVerScrollBarMaximum:function(){var cB=this.__fW.getInnerSize();

if(!cB){return ;
}var cz=this.getTable().getTableModel();
var cv=cz.getRowCount();

if(this.getTable().getKeepFirstVisibleRowComplete()){cv+=1;
}var cu=this.getTable().getRowHeight();
var cx=cv*cu;
var cA=this.__fR;

if(cB.height<cx){var cw=Math.max(0,cx-cB.height);
cA.setMaximum(cw);
cA.setKnobFactor(cB.height/cx);
var cy=cA.getPosition();
cA.setPosition(Math.min(cy,cw));
}else{cA.setMaximum(0);
cA.setKnobFactor(1);
cA.setPosition(0);
}},onKeepFirstVisibleRowCompleteChanged:function(){this.updateVerScrollBarMaximum();
this._updateContent();
},_onAppear:function(){this._startInterval(this.getScrollTimeout());
},_onDisappear:function(){this._stopInterval();
},_onScrollX:function(e){var eH=e.getData();
this.fireDataEvent(N,eH,e.getOldData());
this.__fV.scrollToX(eH);
this.__fW.scrollToX(eH);
},_onScrollY:function(e){this.fireDataEvent(bx,e.getData(),e.getOldData());
this._postponedUpdateContent();
},_onMousewheel:function(e){var bV=this.getTable();

if(!bV.getEnabled()){return;
}var bX=qx.bom.client.Engine.GECKO?1:3;
var bW=this.__fR.getPosition()+((e.getWheelDelta()*bX)*bV.getRowHeight());
this.__fR.scrollTo(bW);
if(this.__go&&this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(this.__go,this.__gp);
}e.stop();
},__gv:function(eS){var eX=this.getTable();
var eY=this.__fS.getHeaderWidgetAtColumn(this.__gj);
var eT=eY.getSizeHint().minWidth;
var eV=Math.max(eT,this.__gl+eS-this.__gk);

if(this.getLiveResize()){var eU=eX.getTableColumnModel();
eU.setColumnWidth(this.__gj,eV);
}else{this.__fS.setColumnWidth(this.__gj,eV);
var eW=this.getTablePaneModel();
this._showResizeLine(eW.getColumnLeft(this.__gj)+eV);
}this.__gk+=eV-this.__gl;
this.__gl=eV;
},__gw:function(w){var y=qx.ui.table.pane.Scroller.CLICK_TOLERANCE;

if(this.__fS.isShowingColumnMoveFeedback()||w>this.__gi+y||w<this.__gi-y){this.__gf+=w-this.__gi;
this.__fS.showColumnMoveFeedback(this.__ge,this.__gf);
var z=this.__fP.getTablePaneScrollerAtPageX(w);

if(this.__gh&&this.__gh!=z){this.__gh.hideColumnMoveFeedback();
}
if(z!=null){this.__gg=z.showColumnMoveFeedback(w);
}else{this.__gg=null;
}this.__gh=z;
this.__gi=w;
}},_onMousemoveHeader:function(e){var du=this.getTable();

if(!du.getEnabled()){return;
}var dv=false;
var dn=null;
var ds=e.getDocumentLeft();
var dt=e.getDocumentTop();
this.__go=ds;
this.__gp=dt;

if(this.__gj!=null){this.__gv(ds);
dv=true;
e.stopPropagation();
}else if(this.__ge!=null){this.__gw(ds);
e.stopPropagation();
}else{var dp=this._getResizeColumnForPageX(ds);

if(dp!=-1){dv=true;
}else{var dr=du.getTableModel();
var dw=this._getColumnForPageX(ds);

if(dw!=null&&dr.isColumnSortable(dw)){dn=dw;
}}}var dq=dv?bb:null;
this.getApplicationRoot().setGlobalCursor(dq);
this.setCursor(dq);
this.__fS.setMouseOverColumn(dn);
},_onMousemovePane:function(e){var cR=this.getTable();

if(!cR.getEnabled()){return;
}var cT=e.getDocumentLeft();
var cU=e.getDocumentTop();
this.__go=cT;
this.__gp=cU;
var cS=this._getRowForPagePos(cT,cU);

if(cS!=null&&this._getColumnForPageX(cT)!=null){if(this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(cT,cU);
}}this.__fS.setMouseOverColumn(null);
},_onMousedownHeader:function(e){if(!this.getTable().getEnabled()){return;
}var dL=e.getDocumentLeft();
var dM=this._getResizeColumnForPageX(dL);

if(dM!=-1){this._startResizeHeader(dM,dL);
e.stop();
}else{var dK=this._getColumnForPageX(dL);

if(dK!=null){this._startMoveHeader(dK,dL);
e.stop();
}}},_startResizeHeader:function(bR,bS){var bT=this.getTable().getTableColumnModel();
this.__gj=bR;
this.__gk=bS;
this.__gl=bT.getColumnWidth(this.__gj);
this.__fV.capture();
},_startMoveHeader:function(b,c){this.__ge=b;
this.__gi=c;
this.__gf=this.getTablePaneModel().getColumnLeft(b);
this.__fV.capture();
},_onMousedownPane:function(e){var dd=this.getTable();

if(!dd.getEnabled()){return;
}
if(this.isEditing()){this.stopEditing();
}var da=e.getDocumentLeft();
var dc=e.getDocumentTop();
var df=this._getRowForPagePos(da,dc);
var de=this._getColumnForPageX(da);

if(df!==null){this.__gm={row:df,col:de};
var db=this.getSelectBeforeFocus();

if(db){dd.getSelectionManager().handleMouseDown(df,e);
}if(!this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(da,dc);
}
if(!db){dd.getSelectionManager().handleMouseDown(df,e);
}}},_onMouseupFocusIndicator:function(e){if(this.__gm&&this.__fX.getRow()==this.__gm.row&&this.__fX.getColumn()==this.__gm.col){this.__gm={};
this.fireEvent(bC,qx.ui.table.pane.CellEvent,[this,e,this.__gm.row,this.__gm.col],true);
}},_onChangeCaptureHeader:function(e){if(this.__gj!=null){this._stopResizeHeader();
}
if(this.__ge!=null){this._stopMoveHeader();
}},_stopResizeHeader:function(){var bU=this.getTable().getTableColumnModel();
if(!this.getLiveResize()){this._hideResizeLine();
bU.setColumnWidth(this.__gj,this.__gl);
}this.__gj=null;
this.__fV.releaseCapture();
this.getApplicationRoot().setGlobalCursor(null);
this.setCursor(null);
},_stopMoveHeader:function(){var fe=this.getTable().getTableColumnModel();
var ff=this.getTablePaneModel();
this.__fS.hideColumnMoveFeedback();

if(this.__gh){this.__gh.hideColumnMoveFeedback();
}
if(this.__gg!=null){var fh=ff.getFirstColumnX()+ff.getX(this.__ge);
var fd=this.__gg;

if(fd!=fh&&fd!=fh+1){var fg=fe.getVisibleColumnAtX(fh);
var fc=fe.getVisibleColumnAtX(fd);
var fb=fe.getOverallX(fg);
var fa=(fc!=null)?fe.getOverallX(fc):fe.getOverallColumnCount();

if(fa>fb){fa--;
}fe.moveColumn(fb,fa);
}}this.__ge=null;
this.__gg=null;
this.__fV.releaseCapture();
},_onMouseupPane:function(e){var ec=this.getTable();

if(!ec.getEnabled()){return;
}var ed=this._getRowForPagePos(e.getDocumentLeft(),e.getDocumentTop());

if(ed!=-1&&ed!=null&&this._getColumnForPageX(e.getDocumentLeft())!=null){ec.getSelectionManager().handleMouseUp(ed,e);
}},_onMouseupHeader:function(e){var bK=this.getTable();

if(!bK.getEnabled()){return;
}
if(this.__gj!=null){this._stopResizeHeader();
this.__gn=true;
e.stop();
}else if(this.__ge!=null){this._stopMoveHeader();
e.stop();
}},_onClickHeader:function(e){if(this.__gn){this.__gn=false;
return;
}var cd=this.getTable();

if(!cd.getEnabled()){return;
}var cb=cd.getTableModel();
var cc=e.getDocumentLeft();
var ca=this._getResizeColumnForPageX(cc);

if(ca==-1){var cg=this._getColumnForPageX(cc);

if(cg!=null&&cb.isColumnSortable(cg)){var bY=cb.getSortColumnIndex();
var ce=(cg!=bY)?true:!cb.isSortAscending();
var cf={column:cg,ascending:ce};

if(this.fireDataEvent(bd,cf)){cb.sortByColumn(cg,ce);
cd.getSelectionModel().resetSelection();
}}}e.stop();
},_onClickPane:function(e){var ch=this.getTable();

if(!ch.getEnabled()){return;
}var ck=e.getDocumentLeft();
var cl=e.getDocumentTop();
var ci=this._getRowForPagePos(ck,cl);
var cj=this._getColumnForPageX(ck);

if(ci!=null&&cj!=null){ch.getSelectionManager().handleClick(ci,e);

if(this.__fX.isHidden()||(this.__gm&&ci==this.__gm.row&&cj==this.__gm.col)){this.__gm={};
this.fireEvent(bC,qx.ui.table.pane.CellEvent,[this,e,ci,cj],true);
}}},_onContextMenu:function(e){var bO=e.getDocumentLeft();
var bP=e.getDocumentTop();
var bM=this._getRowForPagePos(bO,bP);
var bN=this._getColumnForPageX(bO);

if(this.__fX.isHidden()||(this.__gm&&bM==this.__gm.row&&bN==this.__gm.col)){this.__gm={};
this.fireEvent(br,qx.ui.table.pane.CellEvent,[this,e,bM,bN],true);
var bL=this.getTable().getContextMenu();

if(bL){if(bL.getChildren().length>0){bL.openAtMouse(e);
}else{bL.exclude();
}e.preventDefault();
}}},_onContextMenuOpen:function(e){},_onDblclickPane:function(e){var dy=e.getDocumentLeft();
var dz=e.getDocumentTop();
this._focusCellAtPagePos(dy,dz);
this.startEditing();
var dx=this._getRowForPagePos(dy,dz);

if(dx!=-1&&dx!=null){this.fireEvent(bk,qx.ui.table.pane.CellEvent,[this,e,dx],true);
}},_onMouseout:function(e){var dJ=this.getTable();

if(!dJ.getEnabled()){return;
}if(this.__gj==null){this.setCursor(null);
this.getApplicationRoot().setGlobalCursor(null);
}this.__fS.setMouseOverColumn(null);
},_showResizeLine:function(x){var dh=this._showChildControl(K);
var dg=dh.getWidth();
var di=this.__fW.getBounds();
dh.setUserBounds(x-Math.round(dg/2),0,dg,di.height);
},_hideResizeLine:function(){this._excludeChildControl(K);
},showColumnMoveFeedback:function(dN){var dW=this.getTablePaneModel();
var dV=this.getTable().getTableColumnModel();
var dQ=this.__fT.getContainerLocation().left;
var dU=dW.getColumnCount();
var dR=0;
var dP=0;
var ea=dQ;

for(var dO=0;dO<dU;dO++){var dS=dW.getColumnAtX(dO);
var dX=dV.getColumnWidth(dS);

if(dN<ea+dX/2){break;
}ea+=dX;
dR=dO+1;
dP=ea-dQ;
}var dT=this.__fW.getContainerLocation().left;
var dY=this.__fW.getBounds().width;
var scrollX=dT-dQ;
dP=qx.lang.Number.limit(dP,scrollX+2,scrollX+dY-1);
this._showResizeLine(dP);
return dW.getFirstColumnX()+dR;
},hideColumnMoveFeedback:function(){this._hideResizeLine();
},_focusCellAtPagePos:function(dj,dk){var dm=this._getRowForPagePos(dj,dk);

if(dm!=-1&&dm!=null){var dl=this._getColumnForPageX(dj);
this.__fP.setFocusedCell(dl,dm);
}},setFocusedCell:function(cV,cW){if(!this.isEditing()){this.__fT.setFocusedCell(cV,cW,this.__gc);
this.__gq=cV;
this.__gr=cW;
this._updateFocusIndicator();
}},getFocusedColumn:function(){return this.__gq;
},getFocusedRow:function(){return this.__gr;
},scrollCellVisible:function(fi,fj){var ft=this.getTablePaneModel();
var fk=ft.getX(fi);

if(fk!=-1){var fq=this.__fW.getInnerSize();

if(!fq){return;
}var fr=this.getTable().getTableColumnModel();
var fn=ft.getColumnLeft(fi);
var fu=fr.getColumnWidth(fi);
var fl=this.getTable().getRowHeight();
var fv=fj*fl;
var scrollX=this.getScrollX();
var scrollY=this.getScrollY();
var fs=Math.min(fn,fn+fu-fq.width);
var fp=fn;
this.setScrollX(Math.max(fs,Math.min(fp,scrollX)));
var fm=fv+fl-fq.height;

if(this.getTable().getKeepFirstVisibleRowComplete()){fm+=fl;
}var fo=fv;
this.setScrollY(Math.max(fm,Math.min(fo,scrollY)),true);
}},isEditing:function(){return this.__gs!=null;
},startEditing:function(){var l=this.getTable();
var j=l.getTableModel();
var n=this.__gq;

if(!this.isEditing()&&(n!=null)&&j.isColumnEditable(n)){var o=this.__gr;
var h=this.getTablePaneModel().getX(n);
var i=j.getValue(n,o);
this.__gt=l.getTableColumnModel().getCellEditorFactory(n);
var k={col:n,row:o,xPos:h,value:i,table:l};
this.__gs=this.__gt.createCellEditor(k);
if(this.__gs===null){return false;
}else if(this.__gs instanceof qx.ui.window.Window){this.__gs.setModal(true);
this.__gs.setShowClose(false);
this.__gs.addListener(bi,this._onCellEditorModalWindowClose,this);
var f=l.getModalCellEditorPreOpenFunction();

if(f!=null){f(this.__gs,k);
}this.__gs.open();
}else{var m=this.__fX.getInnerSize();
this.__gs.setUserBounds(0,0,m.width,m.height);
this.__fX.addListener(J,function(e){e.stopPropagation();
});
this.__fX.add(this.__gs);
this.__fX.addState(bG);
this.__fX.setKeepActive(false);
this.__gs.focus();
this.__gs.activate();
}return true;
}return false;
},stopEditing:function(){this.flushEditor();
this.cancelEditing();
},flushEditor:function(){if(this.isEditing()){var t=this.__gt.getCellEditorValue(this.__gs);
var s=this.getTable().getTableModel().getValue(this.__gq,this.__gr);
this.getTable().getTableModel().setValue(this.__gq,this.__gr,t);
this.__fP.focus();
this.__fP.fireDataEvent(be,{row:this.__gr,col:this.__gq,oldValue:s,value:t});
}},cancelEditing:function(){if(this.isEditing()&&!this.__gs.pendingDispose){if(this._cellEditorIsModalWindow){this.__gs.destroy();
this.__gs=null;
this.__gt=null;
this.__gs.pendingDispose=true;
}else{this.__fX.removeState(bG);
this.__fX.setKeepActive(true);
this.__gs.destroy();
this.__gs=null;
this.__gt=null;
}}},_onCellEditorModalWindowClose:function(e){this.stopEditing();
},_getColumnForPageX:function(eL){var eO=this.getTable().getTableColumnModel();
var eP=this.getTablePaneModel();
var eN=eP.getColumnCount();
var eR=this.__fS.getContainerLocation().left;

for(var x=0;x<eN;x++){var eM=eP.getColumnAtX(x);
var eQ=eO.getColumnWidth(eM);
eR+=eQ;

if(eL<eR){return eM;
}}return null;
},_getResizeColumnForPageX:function(ee){var ei=this.getTable().getTableColumnModel();
var ej=this.getTablePaneModel();
var eh=ej.getColumnCount();
var el=this.__fS.getContainerLocation().left;
var ef=qx.ui.table.pane.Scroller.RESIZE_REGION_RADIUS;

for(var x=0;x<eh;x++){var eg=ej.getColumnAtX(x);
var ek=ei.getColumnWidth(eg);
el+=ek;

if(ee>=(el-ef)&&ee<=(el+ef)){return eg;
}}return -1;
},_getRowForPagePos:function(cE,cF){var cG=this.__fT.getContentLocation();

if(cE<cG.left||cE>cG.right){return null;
}
if(cF>=cG.top&&cF<=cG.bottom){var cH=this.getTable().getRowHeight();
var scrollY=this.__fR.getPosition();

if(this.getTable().getKeepFirstVisibleRowComplete()){scrollY=Math.floor(scrollY/cH)*cH;
}var cK=scrollY+cF-cG.top;
var cM=Math.floor(cK/cH);
var cL=this.getTable().getTableModel();
var cI=cL.getRowCount();
return (cM<cI)?cM:null;
}var cJ=this.__fS.getContainerLocation();

if(cF>=cJ.top&&cF<=cJ.bottom&&cE<=cJ.right){return -1;
}return null;
},setTopRightWidget:function(d){var g=this.__gu;

if(g!=null){this.__fU.remove(g);
}
if(d!=null){this.__fU.add(d);
}this.__gu=d;
},getTopRightWidget:function(){return this.__gu;
},getHeader:function(){return this.__fS;
},getTablePane:function(){return this.__fT;
},getVerticalScrollBarWidth:function(){var a=this.__fR;
return a.isVisible()?(a.getSizeHint().width||0):0;
},getNeededScrollBars:function(eo,ep){var ev=this.__fR.getSizeHint().width;
var ew=this.__fW.getInnerSize();
var eq=ew?ew.width:0;

if(this.getVerticalScrollBarVisible()){eq+=ev;
}var ez=ew?ew.height:0;

if(this.getHorizontalScrollBarVisible()){ez+=ev;
}var et=this.getTable().getTableModel();
var ex=et.getRowCount();
var eA=this.getTablePaneModel().getTotalWidth();
var ey=this.getTable().getRowHeight()*ex;
var es=false;
var eB=false;

if(eA>eq){es=true;

if(ey>ez-ev){eB=true;
}}else if(ey>ez){eB=true;

if(!ep&&(eA>eq-ev)){es=true;
}}var eu=qx.ui.table.pane.Scroller.HORIZONTAL_SCROLLBAR;
var er=qx.ui.table.pane.Scroller.VERTICAL_SCROLLBAR;
return ((eo||es)?eu:0)|((ep||!eB)?0:er);
},_applyScrollTimeout:function(em,en){this._startInterval(em);
},_startInterval:function(dD){this.__fY.setInterval(dD);
this.__fY.start();
},_stopInterval:function(){this.__fY.stop();
},_postponedUpdateContent:function(){this._updateContent();
},_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.__gc&&!this.__fT._layoutPending){this.__gc=false;
this._updateContent();
}}),_updateContent:function(){var cq=this.__fW.getInnerSize();

if(!cq){return;
}var ct=cq.height;
var scrollX=this.__fQ.getPosition();
var scrollY=this.__fR.getPosition();
var cn=this.getTable().getRowHeight();
var co=Math.floor(scrollY/cn);
var cs=this.__fT.getFirstVisibleRow();
this.__fT.setFirstVisibleRow(co);
var cp=Math.ceil(ct/cn);
var cm=0;
var cr=this.getTable().getKeepFirstVisibleRowComplete();

if(!cr){cp++;
cm=scrollY%cn;
}this.__fT.setVisibleRowCount(cp);

if(co!=cs){this._updateFocusIndicator();
}this.__fW.scrollToX(scrollX);
if(!cr){this.__fW.scrollToY(cm);
}},_updateFocusIndicator:function(){if(!this.getShowCellFocusIndicator()){return;
}var bQ=this.getTable();

if(!bQ.getEnabled()){return;
}this.__fX.moveToCell(this.__gq,this.__gr);
}},destruct:function(){this._stopInterval();
var eb=this.getTablePaneModel();

if(eb){eb.dispose();
}this.__gm=this.__gu=this.__fP=null;
this._disposeObjects(bf,R,T,bh,bA,bs,S,bq,bz);
}});
})();
(function(){var t="px",s=".qooxdoo-table-cell-icon {",r="abstract",q="",p="qx.ui.table.cellrenderer.AbstractImage",o=" qooxdoo-table-cell-icon",n="<div></div>",m="'",l="no-repeat",k="}",e="  text-align:center;",j="inline-block",h="static",d="top",c="  padding-top:1px;",g="title='",f="string",i="-moz-inline-box";
qx.Class.define(p,{extend:qx.ui.table.cellrenderer.Abstract,type:r,construct:function(){arguments.callee.base.call(this);
var H=arguments.callee.self;

if(!H.stylesheet){H.stylesheet=qx.bom.Stylesheet.createElement(s+e+c+k);
}},members:{__gx:16,__gy:16,_insetY:2,__gz:null,_identifyImage:function(b){throw new Error("_identifyImage is abstract");
},_getImageInfos:function(u){var v=this._identifyImage(u);
if(v==null||typeof u==f){v={url:v,tooltip:null};
}
if(u.width&&u.height){var w={width:u.imageWidth,height:u.imageHeight};
}else{w=this.__gA(v.url);
}v.width=w.width;
v.height=w.height;
return v;
},__gA:function(A){var D=qx.util.ResourceManager.getInstance();
var C=qx.io.ImageLoader;
var B,E;
if(D.has(A)){B=D.getImageWidth(A);
E=D.getImageHeight(A);
}else if(C.isLoaded(A)){B=C.getWidth(A);
E=C.getHeight(A);
}else{B=this.__gx;
E=this.__gy;
}return {width:B,height:E};
},createDataCellHtml:function(F,G){this.__gz=this._getImageInfos(F);
return arguments.callee.base.call(this,F,G);
},_getCellClass:function(x){return arguments.callee.base.call(this)+o;
},_getContentHtml:function(a){var content=n;
if(this.__gz.url){var content=qx.bom.element.Decoration.create(this.__gz.url,l,{width:this.__gz.width+t,height:this.__gz.height+t,display:qx.bom.client.Engine.GECKO&&qx.bom.client.Engine.VERSION<1.9?i:j,verticalAlign:d,position:h});
}return content;
},_getCellAttributes:function(y){var z=this.__gz.tooltip;

if(z){return g+z+m;
}else{return q;
}}},destruct:function(){this.__gz=null;
}});
})();
(function(){var t="Number",s="qx.event.type.Event",r="_applyFirstColumnX",q="Integer",p="qx.ui.table.pane.Model",o="_applyMaxColumnCount",n="visibilityChangedPre";
qx.Class.define(p,{extend:qx.core.Object,construct:function(D){arguments.callee.base.call(this);
D.addListener(n,this._onColVisibilityChanged,this);
this.__gB=D;
},events:{"modelChanged":s},statics:{EVENT_TYPE_MODEL_CHANGED:"modelChanged"},properties:{firstColumnX:{check:q,init:0,apply:r},maxColumnCount:{check:t,init:-1,apply:o}},members:{__gC:null,__gB:null,_applyFirstColumnX:function(B,C){this.__gC=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},_applyMaxColumnCount:function(i,j){this.__gC=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},setTableColumnModel:function(A){this.__gB=A;
this.__gC=null;
},_onColVisibilityChanged:function(u){this.__gC=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},getColumnCount:function(){if(this.__gC==null){var k=this.getFirstColumnX();
var m=this.getMaxColumnCount();
var l=this.__gB.getVisibleColumnCount();

if(m==-1||(k+m)>l){this.__gC=l-k;
}else{this.__gC=m;
}}return this.__gC;
},getColumnAtX:function(d){var e=this.getFirstColumnX();
return this.__gB.getVisibleColumnAtX(e+d);
},getX:function(f){var g=this.getFirstColumnX();
var h=this.getMaxColumnCount();
var x=this.__gB.getVisibleX(f)-g;

if(x>=0&&(h==-1||x<h)){return x;
}else{return -1;
}},getColumnLeft:function(v){var z=0;
var y=this.getColumnCount();

for(var x=0;x<y;x++){var w=this.getColumnAtX(x);

if(w==v){return z;
}z+=this.__gB.getColumnWidth(w);
}return -1;
},getTotalWidth:function(){var a=0;
var b=this.getColumnCount();

for(var x=0;x<b;x++){var c=this.getColumnAtX(x);
a+=this.__gB.getColumnWidth(c);
}return a;
}},destruct:function(){this.__gB=null;
}});
})();
(function(){var h="changeVisible",g="qx.ui.table.columnmenu.MenuItem",f="_applyVisible",d="Boolean",c="changeValue";
qx.Class.define(g,{extend:qx.ui.menu.CheckBox,implement:qx.ui.table.IColumnMenuItem,properties:{visible:{check:d,init:true,apply:f,event:h}},construct:function(i){arguments.callee.base.call(this,i);
this.addListener(c,function(e){this.bInListener=true;
this.setVisible(e.getData());
this.bInListener=false;
});
},members:{__gD:false,_applyVisible:function(a,b){if(!this.bInListener){this.setValue(a);
}}}});
})();
(function(){var d="qx.lang.Number";
qx.Class.define(d,{statics:{isInRange:function(h,i,j){return h>=i&&h<=j;
},isBetweenRange:function(a,b,c){return a>b&&a<c;
},limit:function(e,f,g){if(g!=null&&e>g){return g;
}else if(f!=null&&e<f){return f;
}else{return e;
}}}});
})();
(function(){var c="hovered",b="__gE",a="qx.ui.table.pane.Header";
qx.Class.define(a,{extend:qx.ui.core.Widget,construct:function(d){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.HBox());
this.__gE=d;
},members:{__gE:null,__gF:null,__gG:null,getPaneScroller:function(){return this.__gE;
},getTable:function(){return this.__gE.getTable();
},onColOrderChanged:function(){this._updateContent(true);
},onPaneModelChanged:function(){this._updateContent(true);
},onTableModelMetaDataChanged:function(){this._updateContent();
},setColumnWidth:function(s,t){var u=this.getHeaderWidgetAtColumn(s);

if(u!=null){u.setWidth(t);
}},setMouseOverColumn:function(y){if(y!=this.__gG){if(this.__gG!=null){var z=this.getHeaderWidgetAtColumn(this.__gG);

if(z!=null){z.removeState(c);
}}
if(y!=null){this.getHeaderWidgetAtColumn(y).addState(c);
}this.__gG=y;
}},getHeaderWidgetAtColumn:function(v){var w=this.getPaneScroller().getTablePaneModel().getX(v);
return this._getChildren()[w];
},showColumnMoveFeedback:function(A,x){var E=this.getContainerLocation();

if(this.__gF==null){var B=this.getPaneScroller().getTablePaneModel().getX(A);
var D=this._getChildren()[B];
var F=this.getTable().getTableModel();
var H=this.getTable().getTableColumnModel();
var I={xPos:B,col:A,name:F.getColumnName(A)};
var G=H.getHeaderCellRenderer(A);
var C=G.createHeaderCell(I);
var J=D.getBounds();
C.setWidth(J.width);
C.setHeight(J.height);
C.setZIndex(1000000);
C.setOpacity(0.8);
C.setLayoutProperties({top:E.top});
this.getApplicationRoot().add(C);
this.__gF=C;
}this.__gF.setLayoutProperties({left:E.left+x});
this.__gF.show();
},hideColumnMoveFeedback:function(){if(this.__gF!=null){this.__gF.destroy();
this.__gF=null;
}},isShowingColumnMoveFeedback:function(){return this.__gF!=null;
},_updateContent:function(e){var j=this.getTable().getTableModel();
var m=this.getTable().getTableColumnModel();
var n=this.getPaneScroller().getTablePaneModel();
var p=this._getChildren();
var k=n.getColumnCount();
var f=j.getSortColumnIndex();
if(e){this._cleanUpCells();
}var g={};
g.sortedAscending=j.isSortAscending();

for(var x=0;x<k;x++){var i=n.getColumnAtX(x);

if(i===undefined){continue;
}var o=m.getColumnWidth(i);
var l=m.getHeaderCellRenderer(i);
g.xPos=x;
g.col=i;
g.name=j.getColumnName(i);
g.editable=j.isColumnEditable(i);
g.sorted=(i==f);
var h=p[x];
if(h==null){h=l.createHeaderCell(g);
h.set({width:o});
this._add(h);
}else{l.updateHeaderCell(g,h);
}}},_cleanUpCells:function(){var r=this._getChildren();

for(var x=r.length-1;x>=0;x--){var q=r[x];
q.destroy();
}}},destruct:function(){this._disposeObjects(b);
}});
})();
(function(){var z="",y="table-row-background-even",x="table-row-background-selected",w="table-row",v="background-color:",u="table-row-background-focused",t=';border-bottom: 1px solid ',s=';color:',r="table-row-selected",q="table-row-background-odd",j="default",p="table-row-background-focused-selected",m="qx.ui.table.rowrenderer.Default",i="table-row-line",h="'",l="height:",k=";",n="px;",g="1px solid ",o="Boolean";
qx.Class.define(m,{extend:qx.core.Object,implement:qx.ui.table.IRowRenderer,construct:function(){arguments.callee.base.call(this);
this.__gI=z;
this.__gI={};
this.__gJ={};
this._renderFont(qx.theme.manager.Font.getInstance().resolve(j));
var D=qx.theme.manager.Color.getInstance();
this.__gJ.bgcolFocusedSelected=D.resolve(p);
this.__gJ.bgcolFocused=D.resolve(u);
this.__gJ.bgcolSelected=D.resolve(x);
this.__gJ.bgcolEven=D.resolve(y);
this.__gJ.bgcolOdd=D.resolve(q);
this.__gJ.colSelected=D.resolve(r);
this.__gJ.colNormal=D.resolve(w);
this.__gJ.horLine=D.resolve(i);
},properties:{highlightFocusRow:{check:o,init:true}},members:{__gJ:null,__gK:null,__gI:null,_insetY:1,_renderFont:function(f){if(f){this.__gK=f.getStyles();
this.__gI=qx.bom.element.Style.compile(this.__gK);
this.__gI=this.__gI.replace(/"/g,h);
}else{this.__gI=z;
this.__gK=qx.bom.Font.getDefaultStyles();
}},updateDataRowElement:function(a,b){var d=this.__gK;
var c=b.style;
qx.bom.element.Style.setStyles(b,d);

if(a.focusedRow&&this.getHighlightFocusRow()){c.backgroundColor=a.selected?this.__gJ.bgcolFocusedSelected:this.__gJ.bgcolFocused;
}else{if(a.selected){c.backgroundColor=this.__gJ.bgcolSelected;
}else{c.backgroundColor=(a.row%2==0)?this.__gJ.bgcolEven:this.__gJ.bgcolOdd;
}}c.color=a.selected?this.__gJ.colSelected:this.__gJ.colNormal;
c.borderBottom=g+this.__gJ.horLine;
},getRowHeightStyle:function(A){if(qx.bom.client.Feature.CONTENT_BOX){A-=this._insetY;
}return l+A+n;
},createRowStyle:function(B){var C=[];
C.push(k);
C.push(this.__gI);
C.push(v);

if(B.focusedRow&&this.getHighlightFocusRow()){C.push(B.selected?this.__gJ.bgcolFocusedSelected:this.__gJ.bgcolFocused);
}else{if(B.selected){C.push(this.__gJ.bgcolSelected);
}else{C.push((B.row%2==0)?this.__gJ.bgcolEven:this.__gJ.bgcolOdd);
}}C.push(s);
C.push(B.selected?this.__gJ.colSelected:this.__gJ.colNormal);
C.push(t,this.__gJ.horLine);
return C.join(z);
},getRowClass:function(e){return z;
}},destruct:function(){this.__gJ=this.__gK=this.__gI=null;
}});
})();
(function(){var h="String",g="_applyIconTrue",f="decoration/table/boolean-true.png",e="qx.ui.table.cellrenderer.Boolean",d=";padding-top:4px;",c="decoration/table/boolean-false.png",b="_applyIconFalse";
qx.Class.define(e,{extend:qx.ui.table.cellrenderer.AbstractImage,construct:function(){arguments.callee.base.call(this);
this.__gL=qx.util.AliasManager.getInstance();
this.initIconTrue();
this.initIconFalse();
},properties:{iconTrue:{check:h,init:f,apply:g},iconFalse:{check:h,init:c,apply:b}},members:{__gM:null,__gN:false,__gL:null,_applyIconTrue:function(j){this.__gM=this.__gL.resolve(j);
},_applyIconFalse:function(a){this.__gN=this.__gL.resolve(a);
},_insetY:5,_getCellStyle:function(i){return arguments.callee.base.call(this,i)+d;
},_identifyImage:function(k){var l={imageWidth:11,imageHeight:11};

switch(k.value){case true:l.url=this.__gM;
break;
case false:l.url=this.__gN;
break;
default:l.url=null;
break;
}return l;
}},destruct:function(){this.__gL=null;
}});
})();
(function(){var z="Function",y="Boolean",w="column-button",v="qx.event.type.Data",u="statusbar",t="qx.ui.table.pane.CellEvent",s="PageUp",r="__gY",q="changeLocale",p="changeSelection",bL="qx.dynlocale",bK="Enter",bJ="metaDataChanged",bI="dataChanged",bH="on",bG="_applyStatusBarVisible",bF="columnVisibilityMenuCreateStart",bE="blur",bD="qx.ui.table.Table",bC="columnVisibilityMenuCreateEnd",G="Use 'resetSelection' instead.",H="verticalScrollBarChanged",E="_applyMetaColumnCounts",F="one of one row",C="focus",D="changeDataRowRenderer",A="changeHeaderCellHeight",B="Escape",O="A",P="changeSelectionModel",be="__gW",ba="Left",bm="Down",bh="Integer",by="_applyHeaderCellHeight",bs="visibilityChanged",U="qx.ui.table.ITableModel",bB="orderChanged",bA="_applySelectionModel",bz="__gP",S="menu",W="_applyAdditionalStatusBarText",Y="_applyFocusCellOnMouseMove",bc="table",bf="_applyColumnVisibilityButtonVisible",bi="changeTableModel",bo="qx.event.type.Event",bu="__gX",I="tableWidthChanged",J="End",V="Object",bl="_applyShowCellFocusIndicator",bk="resize",bj="changeScrollY",bq="_applyTableModel",bp="menu-button",bg="_applyKeepFirstVisibleRowComplete",bn="widthChanged",m="Home",bt="_applyRowHeight",K="F2",L="appear",bb="Up",n="%1 rows",o="qx.ui.table.selection.Model",R="one row",M="__gO",N="PageDown",Q="%1 of %2 rows",bd="keypress",bw="changeRowHeight",bv="Number",X="changeVisible",bx="qx.ui.table.IRowRenderer",T="Right",br="Space";
qx.Class.define(bD,{extend:qx.ui.core.Widget,construct:function(ct,cu){arguments.callee.base.call(this);
if(!cu){cu={};
}
if(cu.selectionManager){this.setNewSelectionManager(cu.selectionManager);
}
if(cu.selectionModel){this.setNewSelectionModel(cu.selectionModel);
}
if(cu.tableColumnModel){this.setNewTableColumnModel(cu.tableColumnModel);
}
if(cu.tablePane){this.setNewTablePane(cu.tablePane);
}
if(cu.tablePaneHeader){this.setNewTablePaneHeader(cu.tablePaneHeader);
}
if(cu.tablePaneScroller){this.setNewTablePaneScroller(cu.tablePaneScroller);
}
if(cu.tablePaneModel){this.setNewTablePaneModel(cu.tablePaneModel);
}
if(cu.columnMenu){this.setNewColumnMenu(cu.columnMenu);
}this._setLayout(new qx.ui.layout.VBox());
this.__gO=new qx.ui.container.Composite(new qx.ui.layout.HBox());
this._add(this.__gO,{flex:1});
this.setDataRowRenderer(new qx.ui.table.rowrenderer.Default(this));
this.__gP=this.getNewSelectionManager()(this);
this.setSelectionModel(this.getNewSelectionModel()(this));
this.setTableModel(ct||this.getEmptyTableModel());
this.setMetaColumnCounts([-1]);
this.setTabIndex(1);
this.addListener(bd,this._onKeyPress);
this.addListener(C,this._onFocusChanged);
this.addListener(bE,this._onFocusChanged);
var cv=new qx.ui.core.Widget().set({height:0});
this._add(cv);
cv.addListener(bk,this._onResize,this);
this.__gQ=null;
this.__gR=null;
if(qx.core.Variant.isSet(bL,bH)){qx.locale.Manager.getInstance().addListener(q,this._onChangeLocale,this);
}this.initStatusBarVisible();
},events:{"columnVisibilityMenuCreateStart":v,"columnVisibilityMenuCreateEnd":v,"tableWidthChanged":bo,"verticalScrollBarChanged":v,"cellClick":t,"cellDblclick":t,"cellContextmenu":t,"dataEdited":v},statics:{__gS:{cellClick:1,cellDblclick:1,cellContextmenu:1}},properties:{appearance:{refine:true,init:bc},focusable:{refine:true,init:true},minWidth:{refine:true,init:50},selectable:{refine:true,init:false},selectionModel:{check:o,apply:bA,event:P},tableModel:{check:U,apply:bq,event:bi},rowHeight:{check:bv,init:20,apply:bt,event:bw},forceLineHeight:{check:y,init:true},headerCellHeight:{check:bh,init:16,apply:by,event:A,nullable:true},statusBarVisible:{check:y,init:true,apply:bG},additionalStatusBarText:{nullable:true,init:null,apply:W},columnVisibilityButtonVisible:{check:y,init:true,apply:bf},metaColumnCounts:{check:V,apply:E},focusCellOnMouseMove:{check:y,init:false,apply:Y},rowFocusChangeModifiesSelection:{check:y,init:true},showCellFocusIndicator:{check:y,init:true,apply:bl},keepFirstVisibleRowComplete:{check:y,init:true,apply:bg},alwaysUpdateCells:{check:y,init:false},dataRowRenderer:{check:bx,init:null,nullable:true,event:D},modalCellEditorPreOpenFunction:{check:z,init:null,nullable:true},newColumnMenu:{check:z,init:function(){return new qx.ui.table.columnmenu.Button();
}},newSelectionManager:{check:z,init:function(bQ){return new qx.ui.table.selection.Manager(bQ);
}},newSelectionModel:{check:z,init:function(cE){return new qx.ui.table.selection.Model(cE);
}},newTableColumnModel:{check:z,init:function(ep){return new qx.ui.table.columnmodel.Basic(ep);
}},newTablePane:{check:z,init:function(cF){return new qx.ui.table.pane.Pane(cF);
}},newTablePaneHeader:{check:z,init:function(eM){return new qx.ui.table.pane.Header(eM);
}},newTablePaneScroller:{check:z,init:function(cg){return new qx.ui.table.pane.Scroller(cg);
}},newTablePaneModel:{check:z,init:function(eR){return new qx.ui.table.pane.Model(eR);
}}},members:{__gQ:null,__gR:null,__gO:null,__gP:null,__gT:null,__gU:null,__gV:null,__gW:null,__gX:null,__gY:null,_createChildControlImpl:function(eG){var eH;

switch(eG){case u:eH=new qx.ui.basic.Label();
eH.set({allowGrowX:true});
this._add(eH);
break;
case w:eH=this.getNewColumnMenu()();
eH.set({focusable:false});
var eI=eH.factory(S,{table:this});
eI.addListener(L,this._initColumnMenu,this);
break;
}return eH||arguments.callee.base.call(this,eG);
},_applySelectionModel:function(dN,dO){this.__gP.setSelectionModel(dN);

if(dO!=null){dO.removeListener(p,this._onSelectionChanged,this);
}dN.addListener(p,this._onSelectionChanged,this);
},_applyRowHeight:function(dG,dH){var dI=this._getPaneScrollerArr();

for(var i=0;i<dI.length;i++){dI[i].updateVerScrollBarMaximum();
}},_applyHeaderCellHeight:function(ch,ci){var cj=this._getPaneScrollerArr();

for(var i=0;i<cj.length;i++){cj[i].getHeader().setHeight(ch);
}},getEmptyTableModel:function(){if(!this.__gY){this.__gY=new qx.ui.table.model.Simple();
this.__gY.setColumns([]);
this.__gY.setData([]);
}return this.__gY;
},_applyTableModel:function(bM,bN){this.getTableColumnModel().init(bM.getColumnCount(),this);

if(bN!=null){bN.removeListener(bJ,this._onTableModelMetaDataChanged,this);
bN.removeListener(bI,this._onTableModelDataChanged,this);
}bM.addListener(bJ,this._onTableModelMetaDataChanged,this);
bM.addListener(bI,this._onTableModelDataChanged,this);
this._updateStatusBar();
this._updateTableData(0,bM.getRowCount(),0,bM.getColumnCount());
this._onTableModelMetaDataChanged();
},getTableColumnModel:function(){if(!this.__gX){var dm=this.__gX=this.getNewTableColumnModel()(this);
dm.addListener(bs,this._onColVisibilityChanged,this);
dm.addListener(bn,this._onColWidthChanged,this);
dm.addListener(bB,this._onColOrderChanged,this);
var dl=this.getTableModel();
dm.init(dl.getColumnCount(),this);
var dj=this._getPaneScrollerArr();

for(var i=0;i<dj.length;i++){var dk=dj[i];
var dn=dk.getTablePaneModel();
dn.setTableColumnModel(dm);
}}return this.__gX;
},_applyStatusBarVisible:function(eq,er){if(eq){this._showChildControl(u);
}else{this._excludeChildControl(u);
}
if(eq){this._updateStatusBar();
}},_applyAdditionalStatusBarText:function(dr,ds){this.__gT=dr;
this._updateStatusBar();
},_applyColumnVisibilityButtonVisible:function(dp,dq){if(dp){this._showChildControl(w);
}else{this._excludeChildControl(w);
}},_applyMetaColumnCounts:function(cL,cM){var cT=cL;
var cN=this._getPaneScrollerArr();
var cR={};

if(cL>cM){var cV=qx.event.Registration.getManager(cN[0]);

for(var cW in qx.ui.table.Table.__gS){cR[cW]={};
cR[cW].capture=cV.getListeners(cN[0],cW,true);
cR[cW].bubble=cV.getListeners(cN[0],cW,false);
}}this._cleanUpMetaColumns(cT.length);
var cS=0;

for(var i=0;i<cN.length;i++){var cX=cN[i];
var cU=cX.getTablePaneModel();
cU.setFirstColumnX(cS);
cU.setMaxColumnCount(cT[i]);
cS+=cT[i];
}if(cT.length>cN.length){var cQ=this.getTableColumnModel();

for(var i=cN.length;i<cT.length;i++){var cU=this.getNewTablePaneModel()(cQ);
cU.setFirstColumnX(cS);
cU.setMaxColumnCount(cT[i]);
cS+=cT[i];
var cX=this.getNewTablePaneScroller()(this);
cX.setTablePaneModel(cU);
cX.addListener(bj,this._onScrollY,this);
for(cW in qx.ui.table.Table.__gS){if(!cR[cW]){break;
}
if(cR[cW].capture&&cR[cW].capture.length>0){var cO=cR[cW].capture;

for(var i=0;i<cO.length;i++){var cP=cO[i].context;

if(!cP){cP=this;
}else if(cP==cN[0]){cP=cX;
}cX.addListener(cW,cO[i].handler,cP,true);
}}
if(cR[cW].bubble&&cR[cW].bubble.length>0){var da=cR[cW].bubble;

for(var i=0;i<da.length;i++){var cP=da[i].context;

if(!cP){cP=this;
}else if(cP==cN[0]){cP=cX;
}cX.addListener(cW,da[i].handler,cP,false);
}}}var cY=(i==cT.length-1)?1:0;
this.__gO.add(cX,{flex:cY});
cN=this._getPaneScrollerArr();
}}for(var i=0;i<cN.length;i++){var cX=cN[i];
var db=(i==(cN.length-1));
cX.getHeader().setHeight(this.getHeaderCellHeight());
cX.setTopRightWidget(db?this.getChildControl(w):null);
}
if(!this.isColumnVisibilityButtonVisible()){this._excludeChildControl(w);
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},_applyFocusCellOnMouseMove:function(ei,ej){var ek=this._getPaneScrollerArr();

for(var i=0;i<ek.length;i++){ek[i].setFocusCellOnMouseMove(ei);
}},_applyShowCellFocusIndicator:function(df,dg){var dh=this._getPaneScrollerArr();

for(var i=0;i<dh.length;i++){dh[i].setShowCellFocusIndicator(df);
}},_applyKeepFirstVisibleRowComplete:function(eb,ec){var ed=this._getPaneScrollerArr();

for(var i=0;i<ed.length;i++){ed[i].onKeepFirstVisibleRowCompleteChanged();
}},getSelectionManager:function(){return this.__gP;
},_getPaneScrollerArr:function(){return this.__gO.getChildren();
},getPaneScroller:function(eJ){return this._getPaneScrollerArr()[eJ];
},_cleanUpMetaColumns:function(bO){var bP=this._getPaneScrollerArr();

if(bP!=null){for(var i=bP.length-1;i>=bO;i--){bP[i].destroy();
}}},_onChangeLocale:function(bR){this.updateContent();
this._updateStatusBar();
},_onSelectionChanged:function(a){var b=this._getPaneScrollerArr();

for(var i=0;i<b.length;i++){b[i].onSelectionChanged();
}this._updateStatusBar();
},_onTableModelMetaDataChanged:function(eu){var ev=this._getPaneScrollerArr();

for(var i=0;i<ev.length;i++){ev[i].onTableModelMetaDataChanged();
}this._updateStatusBar();
},_onTableModelDataChanged:function(cJ){var cK=cJ.getData();
this._updateTableData(cK.firstRow,cK.lastRow,cK.firstColumn,cK.lastColumn,cK.removeStart,cK.removeCount);
},_updateTableData:function(dS,dT,dU,dV,dW,dX){var dY=this._getPaneScrollerArr();
if(dX){this.getSelectionModel().removeSelectionInterval(dW,dW+dX);
}
for(var i=0;i<dY.length;i++){dY[i].onTableModelDataChanged(dS,dT,dU,dV);
}var ea=this.getTableModel().getRowCount();

if(ea!=this.__gU){this.__gU=ea;
this._updateScrollBarVisibility();
this._updateStatusBar();
}},_onScrollY:function(el){if(!this.__gV){this.__gV=true;
var em=this._getPaneScrollerArr();

for(var i=0;i<em.length;i++){em[i].setScrollY(el.getData());
}this.__gV=false;
}},_onKeyPress:function(dx){if(!this.getEnabled()){return;
}var dE=this.__gR;
var dB=true;
var dF=dx.getKeyIdentifier();

if(this.isEditing()){if(dx.getModifiers()==0){switch(dF){case bK:this.stopEditing();
var dE=this.__gR;
this.moveFocusedCell(0,1);

if(this.__gR!=dE){dB=this.startEditing();
}break;
case B:this.cancelEditing();
this.focus();
break;
default:dB=false;
break;
}}return;
}else{if(dx.isCtrlPressed()){dB=true;

switch(dF){case O:var dC=this.getTableModel().getRowCount();

if(dC>0){this.getSelectionModel().setSelectionInterval(0,dC-1);
}break;
default:dB=false;
break;
}}else{switch(dF){case br:this.__gP.handleSelectKeyDown(this.__gR,dx);
break;
case K:case bK:dB=this.startEditing();
break;
case m:this.setFocusedCell(this.__gQ,0,true);
break;
case J:var dC=this.getTableModel().getRowCount();
this.setFocusedCell(this.__gQ,dC-1,true);
break;
case ba:this.moveFocusedCell(-1,0);
break;
case T:this.moveFocusedCell(1,0);
break;
case bb:this.moveFocusedCell(0,-1);
break;
case bm:this.moveFocusedCell(0,1);
break;
case s:case N:var dA=this.getPaneScroller(0);
var dD=dA.getTablePane();
var dC=dD.getVisibleRowCount()-1;
var dz=this.getRowHeight();
var dy=(dF==s)?-1:1;
dA.setScrollY(dA.getScrollY()+dy*dC*dz);
this.moveFocusedCell(0,dy*dC);
break;
default:dB=false;
}}}
if(dE!=this.__gR&&this.getRowFocusChangeModifiesSelection()){this.__gP.handleMoveKeyDown(this.__gR,dx);
}
if(dB){dx.preventDefault();
dx.stopPropagation();
}},_onFocusChanged:function(cG){var cH=this._getPaneScrollerArr();

for(var i=0;i<cH.length;i++){cH[i].onFocusChanged();
}},_onColVisibilityChanged:function(dc){var dd=this._getPaneScrollerArr();

for(var i=0;i<dd.length;i++){dd[i].onColVisibilityChanged();
}var de=dc.getData();

if(this.__gW!=null&&de.col!=null&&de.visible!=null){this.__gW[de.col].setVisible(de.visible);
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},_onColWidthChanged:function(eD){var eE=this._getPaneScrollerArr();

for(var i=0;i<eE.length;i++){var eF=eD.getData();
eE[i].setColumnWidth(eF.col,eF.newWidth);
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},_onColOrderChanged:function(bS){var bT=this._getPaneScrollerArr();

for(var i=0;i<bT.length;i++){bT[i].onColOrderChanged();
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},getTablePaneScrollerAtPageX:function(en){var eo=this._getMetaColumnAtPageX(en);
return (eo!=-1)?this.getPaneScroller(eo):null;
},setFocusedCell:function(g,h,j){if(!this.isEditing()&&(g!=this.__gQ||h!=this.__gR)){if(g===null){g=0;
}this.__gQ=g;
this.__gR=h;
var k=this._getPaneScrollerArr();

for(var i=0;i<k.length;i++){k[i].setFocusedCell(g,h);
}
if(g!==null&&j){this.scrollCellVisible(g,h);
}}},resetSelection:function(){this.getSelectionModel().resetSelection();
},clearSelection:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,G);
this.resetSelection();
},resetCellFocus:function(){this.setFocusedCell(null,null,false);
},getFocusedColumn:function(){return this.__gQ;
},getFocusedRow:function(){return this.__gR;
},highlightFocusedRow:function(eK){this.getDataRowRenderer().setHighlightFocusRow(eK);
},clearFocusedRowHighlight:function(){this.resetCellFocus();
var dP=this._getPaneScrollerArr();

for(var i=0;i<dP.length;i++){dP[i].onFocusChanged();
}},moveFocusedCell:function(ew,ex){var eB=this.__gQ;
var eC=this.__gR;

if(eB===null||eC===null){return;
}
if(ew!=0){var eA=this.getTableColumnModel();
var x=eA.getVisibleX(eB);
var ez=eA.getVisibleColumnCount();
x=qx.lang.Number.limit(x+ew,0,ez-1);
eB=eA.getVisibleColumnAtX(x);
}
if(ex!=0){var ey=this.getTableModel();
eC=qx.lang.Number.limit(eC+ex,0,ey.getRowCount()-1);
}this.setFocusedCell(eB,eC,true);
},scrollCellVisible:function(eN,eO){var eP=this.getTableColumnModel();
var x=eP.getVisibleX(eN);
var eQ=this._getMetaColumnAtColumnX(x);

if(eQ!=-1){this.getPaneScroller(eQ).scrollCellVisible(eN,eO);
}},isEditing:function(){if(this.__gQ!=null){var x=this.getTableColumnModel().getVisibleX(this.__gQ);
var dt=this._getMetaColumnAtColumnX(x);
return this.getPaneScroller(dt).isEditing();
}return false;
},startEditing:function(){if(this.__gQ!=null){var x=this.getTableColumnModel().getVisibleX(this.__gQ);
var dR=this._getMetaColumnAtColumnX(x);
var dQ=this.getPaneScroller(dR).startEditing();
return dQ;
}return false;
},stopEditing:function(){if(this.__gQ!=null){var x=this.getTableColumnModel().getVisibleX(this.__gQ);
var eL=this._getMetaColumnAtColumnX(x);
this.getPaneScroller(eL).stopEditing();
}},cancelEditing:function(){if(this.__gQ!=null){var x=this.getTableColumnModel().getVisibleX(this.__gQ);
var di=this._getMetaColumnAtColumnX(x);
this.getPaneScroller(di).cancelEditing();
}},updateContent:function(){var cI=this._getPaneScrollerArr();

for(var i=0;i<cI.length;i++){cI[i].getTablePane().updateContent();
}},_getMetaColumnAtPageX:function(cm){var cn=this._getPaneScrollerArr();

for(var i=0;i<cn.length;i++){var co=cn[i].getContainerLocation();

if(cm>=co.left&&cm<=co.right){return i;
}}return -1;
},_getMetaColumnAtColumnX:function(dJ){var dL=this.getMetaColumnCounts();
var dM=0;

for(var i=0;i<dL.length;i++){var dK=dL[i];
dM+=dK;

if(dK==-1||dJ<dM){return i;
}}return -1;
},_updateStatusBar:function(){var c=this.getTableModel();

if(this.getStatusBarVisible()){var d=this.getSelectionModel().getSelectedCount();
var f=c.getRowCount();
var e;

if(f>=0){if(d==0){e=this.trn(R,n,f,f);
}else{e=this.trn(F,Q,f,d,f);
}}
if(this.__gT){if(e){e+=this.__gT;
}else{e=this.__gT;
}}
if(e){this.getChildControl(u).setValue(e);
}}},_updateScrollerWidths:function(){var ee=this._getPaneScrollerArr();

for(var i=0;i<ee.length;i++){var eg=(i==(ee.length-1));
var eh=ee[i].getTablePaneModel().getTotalWidth();
ee[i].setPaneWidth(eh);
var ef=eg?1:0;
ee[i].setLayoutProperties({flex:ef});
}},_updateScrollBarVisibility:function(){if(!this.getBounds()){return;
}var cz=qx.ui.table.pane.Scroller.HORIZONTAL_SCROLLBAR;
var cC=qx.ui.table.pane.Scroller.VERTICAL_SCROLLBAR;
var cw=this._getPaneScrollerArr();
var cy=false;
var cB=false;

for(var i=0;i<cw.length;i++){var cD=(i==(cw.length-1));
var cx=cw[i].getNeededScrollBars(cy,!cD);

if(cx&cz){cy=true;
}
if(cD&&(cx&cC)){cB=true;
}}for(var i=0;i<cw.length;i++){var cD=(i==(cw.length-1));
var cA;
cw[i].setHorizontalScrollBarVisible(cy);
if(cD){cA=cw[i].getVerticalScrollBarVisible();
}cw[i].setVerticalScrollBarVisible(cD&&cB);
if(cD&&cB!=cA){this.fireDataEvent(H,cB);
}}},_initColumnMenu:function(){var cb=this.getTableModel();
var cc=this.getTableColumnModel();
var cd=this.getChildControl(w);
cd.empty();
var ca=cd.getMenu();
var ce={table:this,menu:ca,columnButton:cd};
this.fireDataEvent(bF,ce);
this.__gW={};

for(var cf=0,l=cb.getColumnCount();cf<l;cf++){var bY=cd.factory(bp,{text:cb.getColumnName(cf),column:cf,bVisible:cc.isColumnVisible(cf)});
qx.core.Assert.assertInterface(bY,qx.ui.table.IColumnMenuItem);
bY.addListener(X,this._createColumnVisibilityCheckBoxHandler(cf),this);
this.__gW[cf]=bY;
}var ce={table:this,menu:ca,columnButton:cd};
this.fireDataEvent(bC,ce);
},_createColumnVisibilityCheckBoxHandler:function(dw){return function(es){var et=this.getTableColumnModel();
et.setColumnVisible(dw,es.getData());
};
},setColumnWidth:function(du,dv){this.getTableColumnModel().setColumnWidth(du,dv);
},_onResize:function(){this.fireEvent(I);
this._updateScrollerWidths();
this._updateScrollBarVisibility();
},addListener:function(bU,bV,self,bW){if(arguments.callee.self.__gS[bU]){for(var i=0,bX=this._getPaneScrollerArr();i<bX.length;i++){bX[i].addListener.apply(bX[i],arguments);
}}else{return arguments.callee.base.call(this,bU,bV,self,bW);
}},removeListener:function(cp,cq,self,cr){if(arguments.callee.self.__gS[cp]){for(var i=0,cs=this._getPaneScrollerArr();i<cs.length;i++){cs[i].removeListener.apply(cs[i],arguments);
}}else{arguments.callee.base.call(this,cp,cq,self,cr);
}},destroy:function(){this.getChildControl(w).getMenu().destroy();
arguments.callee.base.call(this);
}},destruct:function(){if(qx.core.Variant.isSet(bL,bH)){qx.locale.Manager.getInstance().removeListener(q,this._onChangeLocale,this);
}var cl=this.getSelectionModel();

if(cl){cl.dispose();
}var ck=this.getDataRowRenderer();

if(ck){ck.dispose();
}this._cleanUpMetaColumns(0);
this.getTableColumnModel().dispose();
this._disposeObjects(bz,M,r,r,bu);
this._disposeMap(be);
}});
})();
