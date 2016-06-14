qx.$$packageData['49884fe1d25f']={"resources":{"qx/icon/Tango/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/media-audio.png":[16,16,"png","qx"],"qx/icon/Tango/16/status/dialog-warning.png":[16,16,"png","qx"]}};
(function(){var c="qx.ui.table.ICellRenderer";
qx.Interface.define(c,{members:{createDataCellHtml:function(a,b){return true;
}}});
})();
(function(){var r="",q="px;",p=".qooxdoo-table-cell {",o="qooxdoo-table-cell",n='" ',m="nowrap",l="default",k="qx.client",j="}",i="width:",O=".qooxdoo-table-cell-right { text-align:right } ",N="0px 6px",M='<div class="',L="0px",K="height:",J="1px solid ",I=".qooxdoo-table-cell-bold { font-weight:bold } ",H="table-row-line",G='>',F="mshtml",y='</div>',z="ellipsis",w="content-box",x='left:',u="qx.ui.table.cellrenderer.Abstract",v='" style="',s="abstract",t="none",A="hidden",B="} ",D='px;',C=".qooxdoo-table-cell-italic { font-style:italic} ",E="absolute";
qx.Class.define(u,{type:s,implement:qx.ui.table.ICellRenderer,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
var Q=qx.ui.table.cellrenderer.Abstract;

if(!Q.__sk){var S=qx.theme.manager.Color.getInstance();
Q.__sk=arguments.callee.self;
var R=p+
qx.bom.element.Style.compile({position:E,top:L,overflow:A,whiteSpace:m,borderRight:J+S.resolve(H),padding:N,cursor:l,textOverflow:z,userSelect:t})+B+O+C+I;

if(!qx.core.Variant.isSet(k,F)){R+=p+qx.bom.element.BoxSizing.compile(w)+j;
}Q.__sk.stylesheet=qx.bom.Stylesheet.createElement(R);
}},members:{_insetX:6+6+1,_insetY:0,_getCellClass:function(P){return o;
},_getCellStyle:function(h){return h.style||r;
},_getCellAttributes:function(U){return r;
},_getContentHtml:function(T){return T.value||r;
},_getCellSizeStyle:function(a,b,c,d){var e=r;

if(qx.bom.client.Feature.CONTENT_BOX){a-=c;
b-=d;
}e+=i+Math.max(a,0)+q;
e+=K+Math.max(b,0)+q;
return e;
},createDataCellHtml:function(f,g){g.push(M,this._getCellClass(f),v,x,f.styleLeft,D,this._getCellSizeStyle(f.styleWidth,f.styleHeight,this._insetX,this._insetY),this._getCellStyle(f),n,this._getCellAttributes(f),G+this._getContentHtml(f),y);
}}});
})();
(function(){var b="qx.ui.table.IColumnMenuItem",a="qx.event.type.Data";
qx.Interface.define(b,{properties:{visible:{}},events:{changeVisible:a}});
})();
(function(){var m="icon",l="label",k="String",j="sort-icon",i="_applySortIcon",h="_applyIcon",g="table-header-cell",f="qx.ui.table.headerrenderer.HeaderCell",e="_applyLabel";
qx.Class.define(f,{extend:qx.ui.container.Composite,construct:function(){arguments.callee.base.call(this);
var n=new qx.ui.layout.Grid();
n.setRowFlex(0,1);
n.setColumnFlex(1,1);
n.setColumnFlex(2,1);
this.setLayout(n);
},properties:{appearance:{refine:true,init:g},label:{check:k,init:null,nullable:true,apply:e},sortIcon:{check:k,init:null,nullable:true,apply:i,themeable:true},icon:{check:k,init:null,nullable:true,apply:h}},members:{_applyLabel:function(a,b){if(a){this._showChildControl(l).setValue(a);
}else{this._excludeChildControl(l);
}},_applySortIcon:function(c,d){if(c){this._showChildControl(j).setSource(c);
}else{this._excludeChildControl(j);
}},_applyIcon:function(q,r){if(q){this._showChildControl(m).setSource(q);
}else{this._excludeChildControl(m);
}},_createChildControlImpl:function(o){var p;

switch(o){case l:p=new qx.ui.basic.Label(this.getLabel()).set({anonymous:true,allowShrinkX:true});
this._add(p,{row:0,column:1});
break;
case j:p=new qx.ui.basic.Image(this.getSortIcon());
p.setAnonymous(true);
this._add(p,{row:0,column:2});
break;
case m:p=new qx.ui.basic.Image(this.getIcon()).set({anonymous:true,allowShrinkX:true});
this._add(p,{row:0,column:0});
break;
}return p||arguments.callee.base.call(this,o);
}}});
})();
(function(){var r="qx.event.type.Data",q="EVENT_TYPE_DATA_CHANGED",p="qx.ui.table.ITableModel",o="New code should not use this. Instead, use the text string 'dataChanged' literally.",n="New code should not use this. Instead, use the text string 'metaDataChanged' literally.",m="qx.event.type.Event",l="EVENT_TYPE_META_DATA_CHANGED";
qx.Interface.define(p,{events:{"dataChanged":r,"metaDataChanged":m,"sorted":r},statics:{EVENT_TYPE_DATA_CHANGED:"dataChanged",EVENT_TYPE_META_DATA_CHANGED:"metaDataChanged"},members:{getRowCount:function(){},getRowData:function(e){},getColumnCount:function(){},getColumnId:function(j){},getColumnIndexById:function(a){},getColumnName:function(w){},isColumnEditable:function(k){},isColumnSortable:function(x){},sortByColumn:function(f,g){},getSortColumnIndex:function(){},isSortAscending:function(){},prefetchRows:function(u,v){},getValue:function(s,t){},getValueById:function(h,i){},setValue:function(b,c,d){},setValueById:function(y,z,A){}}});
qx.log.Logger.deprecatedConstantWarning(qx.ui.table.ITableModel,q,o);
qx.log.Logger.deprecatedConstantWarning(qx.ui.table.ITableModel,l,n);
})();
(function(){var a="qx.ui.table.IColumnMenuButton";
qx.Interface.define(a,{properties:{menu:{}},members:{factory:function(b,c){return true;
},empty:function(){return true;
}}});
})();
(function(){var h="",g="number",f="Boolean",e="qx.ui.table.cellrenderer.Default",d=" qooxdoo-table-cell-bold",c=" qooxdoo-table-cell-right",b=" qooxdoo-table-cell-italic",a="string";
qx.Class.define(e,{extend:qx.ui.table.cellrenderer.Abstract,statics:{STYLEFLAG_ALIGN_RIGHT:1,STYLEFLAG_BOLD:2,STYLEFLAG_ITALIC:4},properties:{useAutoAlign:{check:f,init:true}},members:{_getStyleFlags:function(p){if(this.getUseAutoAlign()){if(typeof p.value==g){return qx.ui.table.cellrenderer.Default.STYLEFLAG_ALIGN_RIGHT;
}}},_getCellClass:function(i){var j=arguments.callee.base.call(this,i);

if(!j){return h;
}var k=this._getStyleFlags(i);

if(k&qx.ui.table.cellrenderer.Default.STYLEFLAG_ALIGN_RIGHT){j+=c;
}
if(k&qx.ui.table.cellrenderer.Default.STYLEFLAG_BOLD){j+=d;
}
if(k&qx.ui.table.cellrenderer.Default.STYLEFLAG_ITALIC){j+=b;
}return j;
},_getContentHtml:function(o){return qx.bom.String.escape(this._formatValue(o));
},_formatValue:function(l){var n=l.value;

if(n==null){return h;
}
if(typeof n==a){return n;
}else if(typeof n==g){if(!qx.ui.table.cellrenderer.Default._numberFormat){qx.ui.table.cellrenderer.Default._numberFormat=new qx.util.format.NumberFormat();
qx.ui.table.cellrenderer.Default._numberFormat.setMaximumFractionDigits(2);
}var m=qx.ui.table.cellrenderer.Default._numberFormat.format(n);
}else if(n instanceof Date){m=qx.util.format.DateFormat.getDateInstance().format(n);
}else{m=n;
}return m;
}}});
})();
(function(){var J="",I="==",H=">",G="between",F="<",E="regex",D="!between",C=">=",B="!=",A="<=",u="font-weight",z=";",x="text-align",t='g',s=":",w="qx.ui.table.cellrenderer.Conditional",v="color",y="font-style";
qx.Class.define(w,{extend:qx.ui.table.cellrenderer.Default,construct:function(T,U,V,W){arguments.callee.base.call(this);
this.numericAllowed=[I,B,H,F,C,A];
this.betweenAllowed=[G,D];
this.conditions=[];
this.__ur=T||J;
this.__us=U||J;
this.__ut=V||J;
this.__uu=W||J;
},members:{__ur:null,__us:null,__ut:null,__uu:null,__uv:function(j,k){if(j[1]!=null){k[x]=j[1];
}
if(j[2]!=null){k[v]=j[2];
}
if(j[3]!=null){k[y]=j[3];
}
if(j[4]!=null){k[u]=j[4];
}},addNumericCondition:function(a,b,c,d,e,f,g){var h=null;

if(qx.lang.Array.contains(this.numericAllowed,a)){if(b!=null){h=[a,c,d,e,f,b,g];
}}
if(h!=null){this.conditions.push(h);
}else{throw new Error("Condition not recognized or value is null!");
}},addBetweenCondition:function(K,L,M,N,O,P,Q,R){if(qx.lang.Array.contains(this.betweenAllowed,K)){if(L!=null&&M!=null){var S=[K,N,O,P,Q,L,M,R];
}}
if(S!=null){this.conditions.push(S);
}else{throw new Error("Condition not recognized or value1/value2 is null!");
}},addRegex:function(l,m,n,o,p,q){if(l!=null){var r=[E,m,n,o,p,l,q];
}
if(r!=null){this.conditions.push(r);
}else{throw new Error("regex cannot be null!");
}},_getCellStyle:function(X){if(!this.conditions.length){return X.style||J;
}var bd=X.table.getTableModel();
var i;
var bf;
var Y;
var bb={"text-align":this.__ur,"color":this.__us,"font-style":this.__ut,"font-weight":this.__uu};

for(i in this.conditions){bf=false;

if(qx.lang.Array.contains(this.numericAllowed,this.conditions[i][0])){if(this.conditions[i][6]==null){Y=X.value;
}else{Y=bd.getValueById(this.conditions[i][6],X.row);
}
switch(this.conditions[i][0]){case I:if(Y==this.conditions[i][5]){bf=true;
}break;
case B:if(Y!=this.conditions[i][5]){bf=true;
}break;
case H:if(Y>this.conditions[i][5]){bf=true;
}break;
case F:if(Y<this.conditions[i][5]){bf=true;
}break;
case C:if(Y>=this.conditions[i][5]){bf=true;
}break;
case A:if(Y<=this.conditions[i][5]){bf=true;
}break;
}}else if(qx.lang.Array.contains(this.betweenAllowed,this.conditions[i][0])){if(this.conditions[i][7]==null){Y=X.value;
}else{Y=bd.getValueById(this.conditions[i][7],X.row);
}
switch(this.conditions[i][0]){case G:if(Y>=this.conditions[i][5]&&Y<=this.conditions[i][6]){bf=true;
}break;
case D:if(Y<this.conditions[i][5]&&Y>this.conditions[i][6]){bf=true;
}break;
}}else if(this.conditions[i][0]==E){if(this.conditions[i][6]==null){Y=X.value;
}else{Y=bd.getValueById(this.conditions[i][6],X.row);
}var ba=new RegExp(this.conditions[i][5],t);
bf=ba.test(Y);
}if(bf==true){this.__uv(this.conditions[i],bb);
}}var be=[];

for(var bc in bb){if(bb[bc]){be.push(bc,s,bb[bc],z);
}}return be.join(J);
}},destruct:function(){this.numericAllowed=this.betweenAllowed=this.conditions=null;
}});
})();
(function(){var b="qx.ui.table.ICellEditorFactory";
qx.Interface.define(b,{members:{createCellEditor:function(c){return true;
},getCellEditorValue:function(a){return true;
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
(function(){var b="qx.ui.table.celleditor.TextField",a="table-editor-textfield";
qx.Class.define(b,{extend:qx.ui.table.celleditor.AbstractField,members:{_createEditor:function(){var c=new qx.ui.form.TextField();
c.setAppearance(a);
return c;
}}});
})();
(function(){var a="qx.ui.table.IHeaderRenderer";
qx.Interface.define(a,{members:{createHeaderCell:function(b){return true;
},updateHeaderCell:function(c,d){return true;
}}});
})();
(function(){var d="qx.ui.table.headerrenderer.Default",c="String";
qx.Class.define(d,{extend:qx.core.Object,implement:qx.ui.table.IHeaderRenderer,statics:{STATE_SORTED:"sorted",STATE_SORTED_ASCENDING:"sortedAscending"},properties:{toolTip:{check:c,init:null,nullable:true}},members:{createHeaderCell:function(a){var b=new qx.ui.table.headerrenderer.HeaderCell();
this.updateHeaderCell(a,b);
return b;
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
(function(){var e="",d="qx.ui.table.headerrenderer.Icon",c="String";
qx.Class.define(d,{extend:qx.ui.table.headerrenderer.Default,construct:function(a,b){arguments.callee.base.call(this);

if(a==null){a=e;
}this.setIconUrl(a);

if(b){this.setToolTip(b);
}},properties:{iconUrl:{check:c,init:e}},members:{updateHeaderCell:function(f,g){arguments.callee.base.call(this,f,g);
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
qx.Class.define(b,{type:a,extend:qx.core.Object,members:{_setNumColumns:function(h){throw new Error("_setNumColumns is abstract");
},onAppear:function(event,i){throw new Error("onAppear is abstract");
},onTableWidthChanged:function(event){throw new Error("onTableWidthChanged is abstract");
},onVerticalScrollBarChanged:function(event){throw new Error("onVerticalScrollBarChanged is abstract");
},onColumnWidthChanged:function(event){throw new Error("onColumnWidthChanged is abstract");
},onVisibilityChanged:function(event){throw new Error("onVisibilityChanged is abstract");
},_getAvailableWidth:function(){var d=this.getTableColumnModel();
var g=d.getTable();
var c=g._getPaneScrollerArr();

if(!c[0]||!c[0].getLayoutParent().getBounds()){return null;
}var f=c[0].getLayoutParent().getBounds().width;
var e=c[c.length-1];
f-=e.getPaneInsetRight();
return f;
}}});
})();
(function(){var z="loading ...",y="Title",x="Explicit",w="Year",v="icon/16/mimetypes/media-audio.png",u="env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=",t="2*",s="showcase.page.table.Content.saveResult",r="this",q="1*",j="http://query.yahooapis.com/v1/public/yql?q=",p="icon/16/apps/office-calendar.png",m="Chart Pos.",h="0",g="icon/16/status/dialog-warning.png",l="Artist",k="Popular Music Tracks",n="showcase.page.table.Content",f="select * from music.track.popular",o="&format=json&diagnostics=false&";
qx.Class.define(n,{extend:showcase.page.AbstractDesktopContent,construct:function(M){arguments.callee.base.call(this,M);
},statics:{saveResult:function(E){this._result=E;
}},members:{_addWindowContent:function(F){var K=[[0,z,z,0,false]];
var I=this._tableModel=new qx.ui.table.model.Simple();
I.setColumns([m,y,l,w,x]);
I.setData(K);
I.setColumnEditable(1,true);
I.setColumnEditable(2,true);
I.setColumnSortable(3,true);
var H={tableColumnModel:function(a){return new qx.ui.table.columnmodel.Resize(a);
}};
var L=new qx.ui.table.Table(I,H);
L.set({width:540,height:400,decorator:null,headerCellHeight:null});
L.getSelectionModel().setSelectionMode(qx.ui.table.selection.Model.MULTIPLE_INTERVAL_SELECTION);
var J=L.getTableColumnModel();
J.setDataCellRenderer(0,new qx.ui.table.cellrenderer.Number());
J.setDataCellRenderer(3,new qx.ui.table.cellrenderer.Number());
J.setDataCellRenderer(4,new qx.ui.table.cellrenderer.Boolean());
J.setHeaderCellRenderer(1,new qx.ui.table.headerrenderer.Icon(v,y));
J.setHeaderCellRenderer(3,new qx.ui.table.headerrenderer.Icon(p,w));
J.setHeaderCellRenderer(4,new qx.ui.table.headerrenderer.Icon(g,x));
var G=J.getBehavior();
G.set(1,{width:t,minWidth:60});
G.set(2,{width:q,minWidth:60});
G.setWidth(0,80);
G.setWidth(3,70);
G.setWidth(4,85);
F.setCaption(k);
F.setLayout(new qx.ui.layout.Grow());
F.add(L);
this._loadData(I);
},_loadData:function(b){var d=f;
var c=j+encodeURIComponent(d)+o+u+s;
var e=new qx.io.ScriptLoader();
e.load(c,function(){var C=showcase.page.table.Content._result;
var B=[];
var D=C.query.results.Track;

for(var i=0;i<D.length;i++){var A=[];
A.push(parseInt(D[i].ItemInfo.ChartPosition[r]));
A.push(D[i].title);
A.push(D[i].Artist.name);
A.push(parseInt(D[i].releaseYear));
A.push(D[i].explicit!==h);
B.push(A);
}b.setData(B);
});
}}});
})();
(function(){var o="Integer",n="Escape",m="keypress",l="Enter",k="excluded",j="qx.ui.table.pane.FocusIndicator";
qx.Class.define(j,{extend:qx.ui.container.Composite,construct:function(q){arguments.callee.base.call(this);
this.__Aw=q;
this.setKeepActive(true);
this.addListener(m,this._onKeyPress,this);
},properties:{visibility:{refine:true,init:k},row:{check:o,nullable:true},column:{check:o,nullable:true}},members:{__Aw:null,_onKeyPress:function(e){var p=e.getKeyIdentifier();

if(p!==n&&p!==l){e.stopPropagation();
}},moveToCell:function(a,b){if(a==null){this.hide();
this.setRow(null);
this.setColumn(null);
}else{var c=this.__Aw.getTablePaneModel().getX(a);

if(c==-1){this.hide();
this.setRow(null);
this.setColumn(null);
}else{var i=this.__Aw.getTable();
var g=i.getTableColumnModel();
var h=this.__Aw.getTablePaneModel();
var f=this.__Aw.getTablePane().getFirstVisibleRow();
var d=i.getRowHeight();
this.setUserBounds(h.getColumnLeft(a)-2,(b-f)*d-2,g.getColumnWidth(a)+3,d+3);
this.show();
this.setRow(b);
this.setColumn(a);
}}}},destruct:function(){this.__Aw=null;
}});
})();
(function(){var O="",N="!",M="'!",L="'",K="Expected '",J="' (rgb(",I=",",H=")), but found value '",G="Event (",F="Expected value to be the CSS color '",bU="' but found ",bT="The value '",bS="qx.core.Object",bR="Expected value to be an array but found ",bQ=") was fired.",bP="Expected value to be an integer >= 0 but found ",bO="' to be not equal with '",bN="' to '",bM="qx.ui.core.Widget",bL="Called assertTrue with '",V="Expected value to be a map but found ",W="The function did not raise an exception!",T="Expected value to be undefined but found ",U="Expected value to be a DOM element but found  '",R="Expected value to be a regular expression but found ",S="' to implement the interface '",P="Expected value to be null but found ",Q="Invalid argument 'type'",be="Called assert with 'false'",bf="Assertion error! ",br="Expected value to be a string but found ",bn="null",bz="' but found '",bu="' must must be a key of the map '",bH="The String '",bE="Expected value not to be undefined but found ",bj="qx.util.ColorUtil",bK=": ",bJ="The raised exception does not have the expected type! ",bI=") not fired.",bi="qx.core.Assert",bl="Expected value to be typeof object but found ",bm="' (identical) but found '",bp="' must have any of the values defined in the array '",bs="Expected value to be a number but found ",bv="Called assertFalse with '",bB="]",bG="Expected value to be a qooxdoo object but found ",X="' arguments.",Y="Expected value not to be null but found ",bk="Array[",by="' does not match the regular expression '",bx="' to be not identical with '",bw="' arguments but found '",bD="', which cannot be converted to a CSS color!",bC="Expected object '",bt="qx.core.AssertionError",bA="Expected value to be a boolean but found ",C="))!",bF="Expected value to be a qooxdoo widget but found ",ba="Expected value '%1' to be in the range '%2'..'%3'!",bb="Expected value to be typeof '",bo="Expected value to be typeof function but found ",D="Expected value to be an integer but found ",E="Called fail().",bh="The parameter 're' must be a string or a regular expression.",bc="Expected value to be a number >= 0 but found ",bd="Expected value to be instanceof '",bg="Wrong number of arguments given. Expected '",bq="object";
qx.Bootstrap.define(bi,{statics:{__pQ:true,__pR:function(dH,dI){var dJ=O;

for(var i=1,l=arguments.length;i<l;i++){dJ=dJ+this.__pS(arguments[i]);
}var dL=bf+dH+bK+dJ;

if(this.__pQ){qx.log.Logger.error(dL);
}
if(qx.Class.isDefined(bt)){var dK=new qx.core.AssertionError(dH,dJ);

if(this.__pQ){qx.log.Logger.error("Stack trace: \n"+dK.getStackTrace());
}throw dK;
}else{throw new Error(dL);
}},__pS:function(cv){var cw;

if(cv===null){cw=bn;
}else if(qx.lang.Type.isArray(cv)&&cv.length>10){cw=bk+cv.length+bB;
}else if((cv instanceof Object)&&(cv.toString==null)){cw=qx.util.Json.stringify(cv);
}else{try{cw=cv.toString();
}catch(e){cw=O;
}}return cw;
},assert:function(cM,cN){cM==true||this.__pR(cN||O,be);
},fail:function(cx){this.__pR(cx||O,E);
},assertTrue:function(de,df){(de===true)||this.__pR(df||O,bL,de,L);
},assertFalse:function(dr,ds){(dr===false)||this.__pR(ds||O,bv,dr,L);
},assertEquals:function(t,u,v){t==u||this.__pR(v||O,K,t,bz,u,M);
},assertNotEquals:function(cY,da,db){cY!=da||this.__pR(db||O,K,cY,bO,da,M);
},assertIdentical:function(o,p,q){o===p||this.__pR(q||O,K,o,bm,p,M);
},assertNotIdentical:function(cd,ce,cf){cd!==ce||this.__pR(cf||O,K,cd,bx,ce,M);
},assertNotUndefined:function(dg,dh){dg!==undefined||this.__pR(dh||O,bE,dg,N);
},assertUndefined:function(dA,dB){dA===undefined||this.__pR(dB||O,T,dA,N);
},assertNotNull:function(dF,dG){dF!==null||this.__pR(dG||O,Y,dF,N);
},assertNull:function(ct,cu){ct===null||this.__pR(cu||O,P,ct,N);
},assertJsonEquals:function(z,A,B){this.assertEquals(qx.util.Json.stringify(z),qx.util.Json.stringify(A),B);
},assertMatch:function(d,f,g){this.assertString(d);
this.assert(qx.lang.Type.isRegExp(f)||qx.lang.Type.isString(f),bh);
d.search(f)>=0||this.__pR(g||O,bH,d,by,f.toString(),M);
},assertArgumentsCount:function(dt,du,dv,dw){var dx=dt.length;
(dx>=du&&dx<=dv)||this.__pR(dw||O,bg,du,bN,dv,bw,arguments.length,X);
},assertEventFired:function(dQ,event,dR,dS,dT){var dV=false;
var dU=function(e){if(dS){dS.call(dQ,e);
}dV=true;
};
var dW=dQ.addListener(event,dU,dQ);
dR.call();
dV===true||this.__pR(dT||O,G,event,bI);
dQ.removeListenerById(dW);
},assertEventNotFired:function(bV,event,bW,bX){var ca=false;
var bY=function(e){ca=true;
};
var cb=bV.addListener(event,bY,bV);
bW.call();
ca===false||this.__pR(bX||O,G,event,bQ);
bV.removeListenerById(cb);
},assertException:function(h,j,k,m){var j=j||Error;
var n;

try{this.__pQ=false;
h();
}catch(cc){n=cc;
}finally{this.__pQ=true;
}
if(n==null){this.__pR(m||O,W);
}n instanceof j||this.__pR(m||O,bJ,j);

if(k){this.assertMatch(n.toString(),k,m);
}},assertInArray:function(w,x,y){x.indexOf(w)!==-1||this.__pR(y||O,bT,w,bp,x,L);
},assertArrayEquals:function(a,b,c){this.assertArray(a,c);
this.assertArray(b,c);
this.assertEquals(a.length,b.length,c);

for(var i=0;i<a.length;i++){this.assertIdentical(a[i],b[i],c);
}},assertKeyInMap:function(cS,cT,cU){cT[cS]!==undefined||this.__pR(cU||O,bT,cS,bu,cT,L);
},assertFunction:function(dl,dm){qx.lang.Type.isFunction(dl)||this.__pR(dm||O,bo,dl,N);
},assertString:function(dc,dd){qx.lang.Type.isString(dc)||this.__pR(dd||O,br,dc,N);
},assertBoolean:function(dO,dP){qx.lang.Type.isBoolean(dO)||this.__pR(dP||O,bA,dO,N);
},assertNumber:function(cn,co){(qx.lang.Type.isNumber(cn)&&isFinite(cn))||this.__pR(co||O,bs,cn,N);
},assertPositiveNumber:function(cK,cL){(qx.lang.Type.isNumber(cK)&&isFinite(cK)&&cK>=0)||this.__pR(cL||O,bc,cK,N);
},assertInteger:function(r,s){(qx.lang.Type.isNumber(r)&&isFinite(r)&&r%1===0)||this.__pR(s||O,D,r,N);
},assertPositiveInteger:function(cB,cC){var cD=(qx.lang.Type.isNumber(cB)&&isFinite(cB)&&cB%1===0&&cB>=0);
cD||this.__pR(cC||O,bP,cB,N);
},assertInRange:function(cE,cF,cG,cH){(cE>=cF&&cE<=cG)||this.__pR(cH||O,qx.lang.String.format(ba,[cE,cF,cG]));
},assertObject:function(di,dj){var dk=di!==null&&(qx.lang.Type.isObject(di)||typeof di===bq);
dk||this.__pR(dj||O,bl,(di),N);
},assertArray:function(cI,cJ){qx.lang.Type.isArray(cI)||this.__pR(cJ||O,bR,cI,N);
},assertMap:function(dy,dz){qx.lang.Type.isObject(dy)||this.__pR(dz||O,V,dy,N);
},assertRegExp:function(cQ,cR){qx.lang.Type.isRegExp(cQ)||this.__pR(cR||O,R,cQ,N);
},assertType:function(dC,dD,dE){this.assertString(dD,Q);
typeof (dC)===dD||this.__pR(dE||O,bb,dD,bU,dC,N);
},assertInstance:function(cp,cq,cr){var cs=cq.classname||cq+O;
cp instanceof cq||this.__pR(cr||O,bd,cs,bU,cp,N);
},assertInterface:function(cV,cW,cX){qx.Class.implementsInterface(cV,cW)||this.__pR(cX||O,bC,cV,S,cW,M);
},assertCssColor:function(cg,ch,ci){var cj=qx.Class.getByName(bj);

if(!cj){throw new Error("qx.util.ColorUtil not available! Your code must have a dependency on 'qx.util.ColorUtil'");
}var cl=cj.stringToRgb(cg);

try{var ck=cj.stringToRgb(ch);
}catch(dq){this.__pR(ci||O,F,cg,J,cl.join(I),H,ch,bD);
}var cm=cl[0]==ck[0]&&cl[1]==ck[1]&&cl[2]==ck[2];
cm||this.__pR(ci||O,F,cl,J,cl.join(I),H,ch,J,ck.join(I),C);
},assertElement:function(dn,dp){!!(dn&&dn.nodeType===1)||this.__pR(dp||O,U,dn,M);
},assertQxObject:function(dM,dN){this.__pT(dM,bS)||this.__pR(dN||O,bG,dM,N);
},assertQxWidget:function(cO,cP){this.__pT(cO,bM)||this.__pR(cP||O,bF,cO,N);
},__pT:function(cy,cz){if(!cy){return false;
}var cA=cy.constructor;

while(cA){if(cA.classname===cz){return true;
}cA=cA.superclass;
}return false;
}}});
})();
(function(){var bo="",bn="Number",bm='</div>',bl='" ',bk="paneUpdated",bj='<div>',bi="</div>",bh="overflow: hidden;",bg="qx.event.type.Data",bf="paneReloadsData",bG="div",bF='style="',bE="_applyMaxCacheLines",bD="qx.ui.table.pane.Pane",bC="width: 100%;",bB="qx.event.type.Event",bA="_applyVisibleRowCount",bz='>',by="line-height: ",bx="appear",bv='class="',bw="width:100%;",bt="px;",bu='<div ',br="'>",bs="_applyFirstVisibleRow",bp="<div style='",bq=";position:relative;";
qx.Class.define(bD,{extend:qx.ui.core.Widget,construct:function(s){arguments.callee.base.call(this);
this.__zA=s;
this.__zB=0;
this.__zC=0;
this.__zD=[];
},events:{"paneReloadsData":bg,"paneUpdated":bB},properties:{firstVisibleRow:{check:bn,init:0,apply:bs},visibleRowCount:{check:bn,init:0,apply:bA},maxCacheLines:{check:bn,init:1000,apply:bE},allowShrinkX:{refine:true,init:false}},members:{__zC:null,__zB:null,__zA:null,__zE:null,__zF:null,__zG:null,__zD:null,__zH:0,_applyFirstVisibleRow:function(bQ,bR){this.updateContent(false,bQ-bR);
},_applyVisibleRowCount:function(bd,be){this.updateContent(true);
},_getContentHint:function(){return {width:this.getPaneScroller().getTablePaneModel().getTotalWidth(),height:400};
},getPaneScroller:function(){return this.__zA;
},getTable:function(){return this.__zA.getTable();
},setFocusedCell:function(u,v,w){if(u!=this.__zG||v!=this.__zF){var z=this.__zF;
this.__zG=u;
this.__zF=v;
if(v!=z&&!w){if(z!==null){this.updateContent(false,null,z,true);
}
if(v!==null){this.updateContent(false,null,v,true);
}}}},onSelectionChanged:function(){this.updateContent(false,null,null,true);
},onFocusChanged:function(){this.updateContent(false,null,null,true);
},setColumnWidth:function(bJ,bK){this.updateContent(true);
},onColOrderChanged:function(){this.updateContent(true);
},onPaneModelChanged:function(){this.updateContent(true);
},onTableModelDataChanged:function(m,n,o,p){this.__zI();
var r=this.getFirstVisibleRow();
var q=this.getVisibleRowCount();

if(n==-1||n>=r&&m<r+q){this.updateContent();
}},onTableModelMetaDataChanged:function(){this.updateContent(true);
},_applyMaxCacheLines:function(bH,bI){if(this.__zH>=bH&&bH!==-1){this.__zI();
}},__zI:function(){this.__zD=[];
this.__zH=0;
},__zJ:function(ck,cl,cm){if(!cl&&!cm&&this.__zD[ck]){return this.__zD[ck];
}else{return null;
}},__zK:function(bL,bM,bN,bO){var bP=this.getMaxCacheLines();

if(!bN&&!bO&&!this.__zD[bL]&&bP>0){this._applyMaxCacheLines(bP);
this.__zD[bL]=bM;
this.__zH+=1;
}},updateContent:function(bS,bT,bU,bV){if(bS){this.__zI();
}if(bT&&Math.abs(bT)<=Math.min(10,this.getVisibleRowCount())){this._scrollContent(bT);
}else if(bV&&!this.getTable().getAlwaysUpdateCells()){this._updateRowStyles(bU);
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
h.focusedRow=(this.__zF==l);
h.rowData=f.getRowData(l);
k.updateDataRowElement(h,d[y]);
}},_getRowsHtml:function(A,B){var H=this.getTable();
var K=H.getSelectionModel();
var E=H.getTableModel();
var F=H.getTableColumnModel();
var Y=this.getPaneScroller().getTablePaneModel();
var P=H.getDataRowRenderer();
E.prefetchRows(A,A+B-1);
var V=H.getRowHeight();
var X=Y.getColumnCount();
var G=0;
var D=[];
for(var x=0;x<X;x++){var bb=Y.getColumnAtX(x);
var J=F.getColumnWidth(bb);
D.push({col:bb,xPos:x,editable:E.isColumnEditable(bb),focusedCol:this.__zG==bb,styleLeft:G,styleWidth:J});
G+=J;
}var ba=[];
var bc=false;

for(var I=A;I<A+B;I++){var L=K.isSelectedIndex(I);
var O=(this.__zF==I);
var S=this.__zJ(I,L,O);

if(S){ba.push(S);
continue;
}var R=[];
var U={table:H};
U.styleHeight=V;
U.row=I;
U.selected=L;
U.focusedRow=O;
U.rowData=E.getRowData(I);

if(!U.rowData){bc=true;
}R.push(bu);
var C=P.getRowClass(U);

if(C){R.push(bv,C,bl);
}var Q=P.createRowStyle(U);
Q+=bq+P.getRowHeightStyle(V)+bw;

if(Q){R.push(bF,Q,bl);
}R.push(bz);

for(var x=0;x<X;x++){var M=D[x];

for(var W in M){U[W]=M[W];
}var bb=U.col;
U.value=E.getValue(bb,I);
var N=F.getDataCellRenderer(bb);
N.createDataCellHtml(U,R);
}R.push(bm);
var T=R.join(bo);
this.__zK(I,T,L,O);
ba.push(T);
}this.fireDataEvent(bf,bc);
return ba.join(bo);
},_scrollContent:function(bW){var bX=this.getContentElement().getDomElement();

if(!(bX&&bX.firstChild)){this._updateAllRows();
return;
}var ch=bX.firstChild;
var bY=ch.childNodes;
var cf=this.getVisibleRowCount();
var ce=this.getFirstVisibleRow();
var cc=this.getTable().getTableModel();
var ci=0;
ci=cc.getRowCount();
if(ce+cf>ci){this._updateAllRows();
return;
}var cj=bW<0?cf+bW:0;
var ca=bW<0?0:cf-bW;

for(i=Math.abs(bW)-1;i>=0;i--){var cd=bY[cj];

try{ch.removeChild(cd);
}catch(t){break;
}}if(!this.__zE){this.__zE=document.createElement(bG);
}var cg=bj;
cg+=this._getRowsHtml(ce+ca,Math.abs(bW));
cg+=bm;
this.__zE.innerHTML=cg;
var cb=this.__zE.firstChild.childNodes;
if(bW>0){for(var i=cb.length-1;i>=0;i--){var cd=cb[0];
ch.appendChild(cd);
}}else{for(var i=cb.length-1;i>=0;i--){var cd=cb[cb.length-1];
ch.insertBefore(cd,ch.firstChild);
}}if(this.__zF!==null){this._updateRowStyles(this.__zF-bW);
this._updateRowStyles(this.__zF);
}this.fireEvent(bk);
},_updateAllRows:function(){var cq=this.getContentElement().getDomElement();

if(!cq){this.addListenerOnce(bx,arguments.callee,this);
return;
}var cw=this.getTable();
var ct=cw.getTableModel();
var cv=this.getPaneScroller().getTablePaneModel();
var cu=cv.getColumnCount();
var cn=cw.getRowHeight();
var cr=this.getFirstVisibleRow();
var co=this.getVisibleRowCount();
var cx=ct.getRowCount();

if(cr+co>cx){co=Math.max(0,cx-cr);
}var cp=cv.getTotalWidth();
var cs;
if(co>0){cs=[bp,bC,(cw.getForceLineHeight()?by+cn+bt:bo),bh,br,this._getRowsHtml(cr,co),bi];
}else{cs=[];
}var cy=cs.join(bo);
cq.innerHTML=cy;
this.setWidth(cp);
this.__zB=cu;
this.__zC=co;
this.fireEvent(bk);
}},destruct:function(){this.__zE=this.__zA=this.__zD=null;
}});
})();
(function(){var e="auto",d="string",c="number",b="*",a="qx.ui.core.ColumnData";
qx.Class.define(a,{extend:qx.ui.core.LayoutItem,construct:function(){arguments.callee.base.call(this);
this.setColumnWidth(e);
},members:{__sx:null,renderLayout:function(f,top,g,h){this.__sx=g;
},getComputedWidth:function(){return this.__sx;
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
(function(){var C="__sA",B="__sz",A="Function",z="Boolean",y="minWidth",x="width",w="qx.ui.table.columnmodel.Resize",v="qx.ui.table.columnmodel.resizebehavior.Default",u="maxWidth";
qx.Class.define(v,{extend:qx.ui.table.columnmodel.resizebehavior.Abstract,construct:function(){arguments.callee.base.call(this);
this.__sy=[];
this.__sz=new qx.ui.layout.HBox();
this.__sz.connectToWidget(this);
this.__sA=new qx.util.DeferredCall(this._computeColumnsFlexWidth,this);
},properties:{newResizeBehaviorColumnData:{check:A,init:function(b){return new qx.ui.core.ColumnData();
}},initializeWidthsOnEveryAppear:{check:z,init:false},tableColumnModel:{check:w}},members:{__sz:null,__sB:null,__sy:null,__sA:null,__sC:false,setWidth:function(S,T,U){if(S>=this.__sy.length){throw new Error("Column number out of range");
}this.__sy[S].setColumnWidth(T,U);
this.__sA.schedule();
},setMinWidth:function(G,H){if(G>=this.__sy.length){throw new Error("Column number out of range");
}this.__sy[G].setMinWidth(H);
this.__sA.schedule();
},setMaxWidth:function(I,J){if(I>=this.__sy.length){throw new Error("Column number out of range");
}this.__sy[I].setMaxWidth(J);
this.__sA.schedule();
},set:function(D,E){for(var F in E){switch(F){case x:this.setWidth(D,E[F]);
break;
case y:this.setMinWidth(D,E[F]);
break;
case u:this.setMaxWidth(D,E[F]);
break;
default:throw new Error("Unknown property: "+F);
}}},onAppear:function(event,a){if(a===true||!this.__sC||this.getInitializeWidthsOnEveryAppear()){this._computeColumnsFlexWidth();
this.__sC=true;
}},onTableWidthChanged:function(event){this._computeColumnsFlexWidth();
},onVerticalScrollBarChanged:function(event){this._computeColumnsFlexWidth();
},onColumnWidthChanged:function(event){this._extendNextColumn(event);
},onVisibilityChanged:function(event){var V=event.getData();
if(V.visible){this._computeColumnsFlexWidth();
return;
}this._extendLastColumn(event);
},_setNumColumns:function(W){var X=this.__sy;
if(W<=X.length){X.splice(W,X.length);
return;
}for(var i=X.length;i<W;i++){X[i]=this.getNewResizeBehaviorColumnData()();
X[i].columnNumber=i;
}},getLayoutChildren:function(){return this.__sB;
},_computeColumnsFlexWidth:function(){this.__sA.cancel();
var O=this._getAvailableWidth();

if(O===null){return;
}var K=this.getTableColumnModel();
var M=K.getVisibleColumns();
var N=M.length;
var L=this.__sy;
var i,l;

if(N===0){return;
}var Q=[];

for(i=0;i<N;i++){Q.push(L[M[i]]);
}this.__sB=Q;
this.__sD();
this.__sz.renderLayout(O,100);
for(i=0,l=Q.length;i<l;i++){var P=Q[i].getComputedWidth();
K.setColumnWidth(M[i],P);
}},__sD:function(){this.__sz.invalidateChildrenCache();
var R=this.__sB;

for(var i=0,l=R.length;i<l;i++){R[i].invalidateLayoutCache();
}},_extendNextColumn:function(event){var g=this.getTableColumnModel();
var k=event.getData();
var e=g.getVisibleColumns();
var d=this._getAvailableWidth();
var c=e.length;
if(k.newWidth>k.oldWidth){return ;
}var i;
var f;
var j=0;

for(i=0;i<c;i++){j+=g.getColumnWidth(e[i]);
}if(j<d){for(i=0;i<e.length;i++){if(e[i]==k.col){f=e[i+1];
break;
}}
if(f){var h=(d-(j-g.getColumnWidth(f)));
g.setColumnWidth(f,h);
}}},_extendLastColumn:function(event){var p=this.getTableColumnModel();
var t=event.getData();
if(t.visible){return;
}var o=p.getVisibleColumns();
if(o.length==0){return;
}var n=this._getAvailableWidth(p);
var m=o.length;
var i;
var r;
var s=0;

for(i=0;i<m;i++){s+=p.getColumnWidth(o[i]);
}if(s<n){r=o[o.length-1];
var q=(n-(s-p.getColumnWidth(r)));
p.setColumnWidth(r,q);
}},_getResizeColumnData:function(){return this.__sy;
}},destruct:function(){this.__sy=this.__sB=null;
this._disposeObjects(B,C);
}});
})();
(function(){var r="qx.event.type.Data",q="visibilityChanged",p="orderChanged",o="visibilityChangedPre",n="widthChanged",m="qx.ui.table.columnmodel.Basic",l="__sq",k="__sr",j="__ss";
qx.Class.define(m,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__sl=[];
this.__sm=[];
},events:{"widthChanged":r,"visibilityChangedPre":r,"visibilityChanged":r,"orderChanged":r},statics:{DEFAULT_WIDTH:100,DEFAULT_HEADER_RENDERER:qx.ui.table.headerrenderer.Default,DEFAULT_DATA_RENDERER:qx.ui.table.cellrenderer.Default,DEFAULT_EDITOR_FACTORY:qx.ui.table.celleditor.TextField},members:{__sn:null,__so:null,__sm:null,__sl:null,__sp:null,__sq:null,__sr:null,__ss:null,init:function(a){{};
this.__sp=[];
var d=qx.ui.table.columnmodel.Basic.DEFAULT_WIDTH;
var e=this.__sq||(this.__sq=new qx.ui.table.columnmodel.Basic.DEFAULT_HEADER_RENDERER());
var c=this.__sr||(this.__sr=new qx.ui.table.columnmodel.Basic.DEFAULT_DATA_RENDERER());
var b=this.__ss||(this.__ss=new qx.ui.table.columnmodel.Basic.DEFAULT_EDITOR_FACTORY());
this.__sl=[];
this.__sm=[];

for(var g=0;g<a;g++){this.__sp[g]={width:d,headerRenderer:e,dataRenderer:c,editorFactory:b};
this.__sl[g]=g;
this.__sm[g]=g;
}this.__so=null;

for(var g=0;g<a;g++){var f={col:g,visible:true};
this.fireDataEvent(o,f);
this.fireDataEvent(q,f);
}},getVisibleColumns:function(){return this.__sm!=null?this.__sm:[];
},setColumnWidth:function(K,L){{};
var N=this.__sp[K].width;

if(N!=L){this.__sp[K].width=L;
var M={col:K,newWidth:L,oldWidth:N};
this.fireDataEvent(n,M);
}},getColumnWidth:function(B){{};
return this.__sp[B].width;
},setHeaderCellRenderer:function(t,u){{};
var v=this.__sp[t].headerRenderer;

if(v!==this.__sq){v.dispose();
}this.__sp[t].headerRenderer=u;
},getHeaderCellRenderer:function(bi){{};
return this.__sp[bi].headerRenderer;
},setDataCellRenderer:function(w,y){{};
var z=this.__sp[w].headerRenderer;

if(z!==this.__sr){z.dispose();
}this.__sp[w].dataRenderer=y;
},getDataCellRenderer:function(h){{};
return this.__sp[h].dataRenderer;
},setCellEditorFactory:function(H,I){{};
var J=this.__sp[H].headerRenderer;

if(J!==this.__ss){J.dispose();
}this.__sp[H].editorFactory=I;
},getCellEditorFactory:function(bj){{};
return this.__sp[bj].editorFactory;
},_getColToXPosMap:function(){if(this.__so==null){this.__so={};

for(var F=0;F<this.__sl.length;F++){var E=this.__sl[F];
this.__so[E]={overX:F};
}
for(var D=0;D<this.__sm.length;D++){var E=this.__sm[D];
this.__so[E].visX=D;
}}return this.__so;
},getVisibleColumnCount:function(){return this.__sm!=null?this.__sm.length:0;
},getVisibleColumnAtX:function(G){{};
return this.__sm[G];
},getVisibleX:function(bc){{};
return this._getColToXPosMap()[bc].visX;
},getOverallColumnCount:function(){return this.__sl.length;
},getOverallColumnAtX:function(A){{};
return this.__sl[A];
},getOverallX:function(s){{};
return this._getColToXPosMap()[s].overX;
},isColumnVisible:function(C){{};
return (this._getColToXPosMap()[C].visX!=null);
},setColumnVisible:function(S,T){{};

if(T!=this.isColumnVisible(S)){if(T){var ba=this._getColToXPosMap();
var W=ba[S].overX;

if(W==null){throw new Error("Showing column failed: "+S+". The column is not added to this TablePaneModel.");
}var X;

for(var x=W+1;x<this.__sl.length;x++){var Y=this.__sl[x];
var U=ba[Y].visX;

if(U!=null){X=U;
break;
}}if(X==null){X=this.__sm.length;
}this.__sm.splice(X,0,S);
}else{var V=this.getVisibleX(S);
this.__sm.splice(V,1);
}this.__so=null;
if(!this.__sn){var bb={col:S,visible:T};
this.fireDataEvent(o,bb);
this.fireDataEvent(q,bb);
}}},moveColumn:function(bd,be){{};
this.__sn=true;
var bh=this.__sl[bd];
var bf=this.isColumnVisible(bh);

if(bf){this.setColumnVisible(bh,false);
}this.__sl.splice(bd,1);
this.__sl.splice(be,0,bh);
this.__so=null;

if(bf){this.setColumnVisible(bh,true);
}this.__sn=false;
var bg={col:bh,fromOverXPos:bd,toOverXPos:be};
this.fireDataEvent(p,bg);
},setColumnsOrder:function(O){{};

if(O.length==this.__sl.length){this.__sn=true;
var R=new Array(O.length);

for(var P=0;P<this.__sl.length;P++){var Q=this.isColumnVisible(P);
R[P]=Q;

if(Q){this.setColumnVisible(P,false);
}}this.__sl=qx.lang.Array.clone(O);
this.__so=null;
for(var P=0;P<this.__sl.length;P++){if(R[P]){this.setColumnVisible(P,true);
}}this.__sn=false;
this.fireEvent(p);
}else{throw new Error("setColumnsOrder: Invalid number of column positions given, expected "+this.__sl.length+", got "+O.length);
}}},destruct:function(){for(var i=0;i<this.__sp.length;i++){this.__sp[i].headerRenderer.dispose();
this.__sp[i].dataRenderer.dispose();
this.__sp[i].editorFactory.dispose();
}this.__sl=this.__sm=this.__sp=this.__so=null;
this._disposeObjects(l,k,j);
}});
})();
(function(){var m="qx.ui.table.selection.Model",l="qx.ui.table.selection.Manager";
qx.Class.define(l,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
},properties:{selectionModel:{check:m}},members:{__sK:null,handleMouseDown:function(p,q){if(q.isLeftPressed()){var r=this.getSelectionModel();

if(!r.isSelectedIndex(p)){this._handleSelectEvent(p,q);
this.__sK=true;
}else{this.__sK=false;
}}else if(q.isRightPressed()&&q.getModifiers()==0){var r=this.getSelectionModel();

if(!r.isSelectedIndex(p)){r.setSelectionInterval(p,p);
}}},handleMouseUp:function(s,t){if(t.isLeftPressed()&&!this.__sK){this._handleSelectEvent(s,t);
}},handleClick:function(n,o){},handleSelectKeyDown:function(j,k){this._handleSelectEvent(j,k);
},handleMoveKeyDown:function(a,b){var d=this.getSelectionModel();

switch(b.getModifiers()){case 0:d.setSelectionInterval(a,a);
break;
case qx.event.type.Dom.SHIFT_MASK:var c=d.getAnchorSelectionIndex();

if(c==-1){d.setSelectionInterval(a,a);
}else{d.setSelectionInterval(c,a);
}break;
}},_handleSelectEvent:function(e,f){var i=this.getSelectionModel();
var g=i.getLeadSelectionIndex();
var h=i.getAnchorSelectionIndex();

if(f.isShiftPressed()){if(e!=g||i.isSelectionEmpty()){if(h==-1){h=e;
}
if(f.isCtrlOrCommandPressed()){i.addSelectionInterval(h,e);
}else{i.setSelectionInterval(h,e);
}}}else if(f.isCtrlOrCommandPressed()){if(i.isSelectedIndex(e)){i.removeSelectionInterval(e,e);
}else{i.addSelectionInterval(e,e);
}}else{i.setSelectionInterval(e,e);
}}}});
})();
(function(){var a="qx.ui.table.pane.Clipper";
qx.Class.define(a,{extend:qx.ui.container.Composite,construct:function(){arguments.callee.base.call(this,new qx.ui.layout.Grow());
this.setMinWidth(0);
},members:{scrollToX:function(c){this.getContentElement().scrollToX(c,false);
},scrollToY:function(b){this.getContentElement().scrollToY(b,true);
}}});
})();
(function(){var K="..",J="changeSelection",I="Use 'resetSelection' instead",H=" [",G="]",F="qx.event.type.Event",E="Ranges:",D="qx.ui.table.selection.Model",C="_applySelectionMode",B="Use '_resetSelection' instead.";
qx.Class.define(D,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__zu=[];
this.__zv=-1;
this.__zw=-1;
this.hasBatchModeRefCount=0;
this.__zx=false;
},events:{"changeSelection":F},statics:{NO_SELECTION:1,SINGLE_SELECTION:2,SINGLE_INTERVAL_SELECTION:3,MULTIPLE_INTERVAL_SELECTION:4,MULTIPLE_INTERVAL_SELECTION_TOGGLE:5},properties:{selectionMode:{init:2,check:[1,2,3,4,5],apply:C}},members:{__zx:null,__zv:null,__zw:null,__zu:null,_applySelectionMode:function(c){this.resetSelection();
},setBatchMode:function(T){if(T){this.hasBatchModeRefCount+=1;
}else{if(this.hasBatchModeRefCount==0){throw new Error("Try to turn off batch mode althoug it was not turned on.");
}this.hasBatchModeRefCount-=1;

if(this.__zx){this.__zx=false;
this._fireChangeSelection();
}}return this.hasBatchMode();
},hasBatchMode:function(){return this.hasBatchModeRefCount>0;
},getAnchorSelectionIndex:function(){return this.__zv;
},_setAnchorSelectionIndex:function(d){this.__zv=d;
},getLeadSelectionIndex:function(){return this.__zw;
},_setLeadSelectionIndex:function(N){this.__zw=N;
},_getSelectedRangeArr:function(){return this.__zu;
},resetSelection:function(){if(!this.isSelectionEmpty()){this._resetSelection();
this._fireChangeSelection();
}},clearSelection:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,I);
this.resetSelection();
},isSelectionEmpty:function(){return this.__zu.length==0;
},getSelectedCount:function(){var M=0;

for(var i=0;i<this.__zu.length;i++){var L=this.__zu[i];
M+=L.maxIndex-L.minIndex+1;
}return M;
},isSelectedIndex:function(a){for(var i=0;i<this.__zu.length;i++){var b=this.__zu[i];

if(a>=b.minIndex&&a<=b.maxIndex){return true;
}}return false;
},getSelectedRanges:function(){var U=[];

for(var i=0;i<this.__zu.length;i++){U.push({minIndex:this.__zu[i].minIndex,maxIndex:this.__zu[i].maxIndex});
}return U;
},iterateSelection:function(k,l){for(var i=0;i<this.__zu.length;i++){for(var j=this.__zu[i].minIndex;j<=this.__zu[i].maxIndex;j++){k.call(l,j);
}}},setSelectionInterval:function(Q,R){var S=arguments.callee.self;

switch(this.getSelectionMode()){case S.NO_SELECTION:return;
case S.SINGLE_SELECTION:if(this.isSelectedIndex(R)){return;
}Q=R;
break;
case S.MULTIPLE_INTERVAL_SELECTION_TOGGLE:this.setBatchMode(true);

try{for(var i=Q;i<=R;i++){if(!this.isSelectedIndex(i)){this._addSelectionInterval(i,i);
}else{this.removeSelectionInterval(i,i);
}}}catch(e){throw e;
}finally{this.setBatchMode(false);
}this._fireChangeSelection();
return;
}this._resetSelection();
this._addSelectionInterval(Q,R);
this._fireChangeSelection();
},addSelectionInterval:function(f,g){var h=qx.ui.table.selection.Model;

switch(this.getSelectionMode()){case h.NO_SELECTION:return;
case h.MULTIPLE_INTERVAL_SELECTION:case h.MULTIPLE_INTERVAL_SELECTION_TOGGLE:this._addSelectionInterval(f,g);
this._fireChangeSelection();
break;
default:this.setSelectionInterval(f,g);
break;
}},removeSelectionInterval:function(m,n){this.__zv=m;
this.__zw=n;
var o=Math.min(m,n);
var q=Math.max(m,n);
for(var i=0;i<this.__zu.length;i++){var s=this.__zu[i];

if(s.minIndex>q){break;
}else if(s.maxIndex>=o){var t=(s.minIndex>=o)&&(s.minIndex<=q);
var r=(s.maxIndex>=o)&&(s.maxIndex<=q);

if(t&&r){this.__zu.splice(i,1);
i--;
}else if(t){s.minIndex=q+1;
}else if(r){s.maxIndex=o-1;
}else{var p={minIndex:q+1,maxIndex:s.maxIndex};
this.__zu.splice(i+1,0,p);
s.maxIndex=o-1;
break;
}}}this._fireChangeSelection();
},_resetSelection:function(){this.__zu=[];
this.__zv=-1;
this.__zw=-1;
},_clearSelection:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,B);
this._resetSelection();
},_addSelectionInterval:function(u,v){this.__zv=u;
this.__zw=v;
var w=Math.min(u,v);
var y=Math.max(u,v);
var x=0;

for(;x<this.__zu.length;x++){var z=this.__zu[x];

if(z.minIndex>w){break;
}}this.__zu.splice(x,0,{minIndex:w,maxIndex:y});
var A=this.__zu[0];

for(var i=1;i<this.__zu.length;i++){var z=this.__zu[i];

if(A.maxIndex+1>=z.minIndex){A.maxIndex=Math.max(A.maxIndex,z.maxIndex);
this.__zu.splice(i,1);
i--;
}else{A=z;
}}},_dumpRanges:function(){var O=E;

for(var i=0;i<this.__zu.length;i++){var P=this.__zu[i];
O+=H+P.minIndex+K+P.maxIndex+G;
}this.debug(O);
},_fireChangeSelection:function(){if(this.hasBatchMode()){this.__zx=true;
}else{this.fireEvent(J);
}}},destruct:function(){this.__zu=null;
}});
})();
(function(){var q="appear",p="columnVisibilityMenuCreateEnd",n="tableWidthChanged",m="verticalScrollBarChanged",l="qx.ui.table.columnmodel.resizebehavior.Abstract",k="qx.ui.table.columnmodel.Resize",j="_applyBehavior",i="separator",h="visibilityChanged",g="Reset column widths",d="changeBehavior",f="user-button",e="widthChanged",c="execute";
qx.Class.define(k,{extend:qx.ui.table.columnmodel.Basic,include:qx.locale.MTranslation,construct:function(){arguments.callee.base.call(this);
this.__st=false;
this.__su=false;
},properties:{behavior:{check:l,init:null,nullable:true,apply:j,event:d}},members:{__su:null,__st:null,__sv:null,_applyBehavior:function(u,v){if(v!=null){v.dispose();
v=null;
}u._setNumColumns(this.getOverallColumnCount());
u.setTableColumnModel(this);
},init:function(a,b){arguments.callee.base.call(this,a);

if(this.__sv==null){this.__sv=b;
b.addListener(q,this._onappear,this);
b.addListener(n,this._onTableWidthChanged,this);
b.addListener(m,this._onverticalscrollbarchanged,this);
b.addListener(p,this._addResetColumnWidthButton,this);
this.addListener(e,this._oncolumnwidthchanged,this);
this.addListener(h,this._onvisibilitychanged,this);
}if(this.getBehavior()==null){this.setBehavior(new qx.ui.table.columnmodel.resizebehavior.Default());
}this.getBehavior()._setNumColumns(a);
},getTable:function(){return this.__sv;
},_addResetColumnWidthButton:function(event){var t=event.getData();
var s=t.columnButton;
var r=t.menu;
var o;
o=s.factory(i);
r.add(o);
o=s.factory(f,{text:this.tr(g)});
r.add(o);
o.addListener(c,this._onappear,this);
},_onappear:function(event){if(this.__st){return ;
}this.__st=true;
{};
this.getBehavior().onAppear(event,event.getType()!==q);
this.__sv._updateScrollerWidths();
this.__sv._updateScrollBarVisibility();
this.__st=false;
this.__su=true;
},_onTableWidthChanged:function(event){if(this.__st||!this.__su){return ;
}this.__st=true;
{};
this.getBehavior().onTableWidthChanged(event);
this.__st=false;
},_onverticalscrollbarchanged:function(event){if(this.__st||!this.__su){return ;
}this.__st=true;
{};
this.getBehavior().onVerticalScrollBarChanged(event);
qx.event.Timer.once(function(){if(this.__sv&&!this.__sv.isDisposed()){this.__sv._updateScrollerWidths();
this.__sv._updateScrollBarVisibility();
}},this,0);
this.__st=false;
},_oncolumnwidthchanged:function(event){if(this.__st||!this.__su){return ;
}this.__st=true;
{};
this.getBehavior().onColumnWidthChanged(event);
this.__st=false;
},_onvisibilitychanged:function(event){if(this.__st||!this.__su){return ;
}this.__st=true;
{};
this.getBehavior().onVisibilityChanged(event);
this.__st=false;
}},destruct:function(){this.__sv=null;
}});
})();
(function(){var e="metaDataChanged",d="qx.event.type.Data",c="qx.event.type.Event",b="abstract",a="qx.ui.table.model.Abstract";
qx.Class.define(a,{type:b,extend:qx.core.Object,implement:qx.ui.table.ITableModel,events:{"dataChanged":d,"metaDataChanged":c,"sorted":d},construct:function(){arguments.callee.base.call(this);
this.__tI=[];
this.__tJ=[];
this.__tK={};
},members:{__tI:null,__tJ:null,__tK:null,__tL:null,getRowCount:function(){throw new Error("getRowCount is abstract");
},getRowData:function(E){return null;
},isColumnEditable:function(q){return false;
},isColumnSortable:function(u){return false;
},sortByColumn:function(g,h){},getSortColumnIndex:function(){return -1;
},isSortAscending:function(){return true;
},prefetchRows:function(o,p){},getValue:function(y,z){throw new Error("getValue is abstract");
},getValueById:function(v,w){return this.getValue(this.getColumnIndexById(v),w);
},setValue:function(r,s,t){throw new Error("setValue is abstract");
},setValueById:function(j,k,l){this.setValue(this.getColumnIndexById(j),k,l);
},getColumnCount:function(){return this.__tI.length;
},getColumnIndexById:function(n){return this.__tK[n];
},getColumnId:function(D){return this.__tI[D];
},getColumnName:function(f){return this.__tJ[f];
},setColumnIds:function(m){this.__tI=m;
this.__tK={};

for(var i=0;i<m.length;i++){this.__tK[m[i]]=i;
}this.__tJ=new Array(m.length);
if(!this.__tL){this.fireEvent(e);
}},setColumnNamesByIndex:function(x){if(this.__tI.length!=x.length){throw new Error("this.__columnIdArr and columnNameArr have different length: "+this.__tI.length+" != "+x.length);
}this.__tJ=x;
this.fireEvent(e);
},setColumnNamesById:function(F){this.__tJ=new Array(this.__tI.length);

for(var i=0;i<this.__tI.length;++i){this.__tJ[i]=F[this.__tI[i]];
}},setColumns:function(A,B){var C=this.__tI.length==0||B;

if(B==null){if(this.__tI.length==0){B=A;
}else{B=this.__tI;
}}
if(B.length!=A.length){throw new Error("columnIdArr and columnNameArr have different length: "+B.length+" != "+A.length);
}
if(C){this.__tL=true;
this.setColumnIds(B);
this.__tL=false;
}this.setColumnNamesByIndex(A);
}},destruct:function(){this.__tI=this.__tJ=this.__tK=null;
}});
})();
(function(){var p="dataChanged",o="metaDataChanged",n="qx.ui.table.model.Simple",m="Boolean",l="sorted";
qx.Class.define(n,{extend:qx.ui.table.model.Abstract,construct:function(){arguments.callee.base.call(this);
this.__tM=[];
this.__tN=-1;
this.__tO=[];
this.__tP=null;
},properties:{caseSensitiveSorting:{check:m,init:true}},statics:{_defaultSortComparatorAscending:function(bj,bk){var bl=bj[arguments.callee.columnIndex];
var bm=bk[arguments.callee.columnIndex];
return (bl>bm)?1:((bl==bm)?0:-1);
},_defaultSortComparatorInsensitiveAscending:function(bH,bI){var bJ=(isNaN(bH[arguments.callee.columnIndex])?bH[arguments.callee.columnIndex].toLowerCase():bH[arguments.callee.columnIndex]);
var bK=(isNaN(bI[arguments.callee.columnIndex])?bI[arguments.callee.columnIndex].toLowerCase():bI[arguments.callee.columnIndex]);
return (bJ>bK)?1:((bJ==bK)?0:-1);
},_defaultSortComparatorDescending:function(bt,bu){var bv=bt[arguments.callee.columnIndex];
var bw=bu[arguments.callee.columnIndex];
return (bv<bw)?1:((bv==bw)?0:-1);
},_defaultSortComparatorInsensitiveDescending:function(bc,bd){var be=(isNaN(bc[arguments.callee.columnIndex])?bc[arguments.callee.columnIndex].toLowerCase():bc[arguments.callee.columnIndex]);
var bf=(isNaN(bd[arguments.callee.columnIndex])?bd[arguments.callee.columnIndex].toLowerCase():bd[arguments.callee.columnIndex]);
return (be<bf)?1:((be==bf)?0:-1);
}},members:{__tM:null,__tP:null,__tQ:null,__tO:null,__tN:null,__tR:null,getRowData:function(bn){var bo=this.__tM[bn];

if(bo==null||bo.originalData==null){return bo;
}else{return bo.originalData;
}},getRowDataAsMap:function(f){var h=this.__tM[f];
var g={};

for(var k=0;k<this.getColumnCount();k++){g[this.getColumnId(k)]=h[k];
}return g;
},getDataAsMapArray:function(){var bs=this.getRowCount();
var br=[];

for(var i=0;i<bs;i++){br.push(this.getRowDataAsMap(i));
}return br;
},setEditable:function(bx){this.__tP=[];

for(var by=0;by<this.getColumnCount();by++){this.__tP[by]=bx;
}this.fireEvent(o);
},setColumnEditable:function(J,K){if(K!=this.isColumnEditable(J)){if(this.__tP==null){this.__tP=[];
}this.__tP[J]=K;
this.fireEvent(o);
}},isColumnEditable:function(C){return this.__tP?(this.__tP[C]==true):false;
},setColumnSortable:function(z,A){if(A!=this.isColumnSortable(z)){if(this.__tQ==null){this.__tQ=[];
}this.__tQ[z]=A;
this.fireEvent(o);
}},isColumnSortable:function(B){return (this.__tQ?(this.__tQ[B]!==false):true);
},sortByColumn:function(W,X){var bb;
var ba=this.__tO[W];

if(ba){bb=(X?ba.ascending:ba.descending);
}else{if(this.getCaseSensitiveSorting()){bb=(X?qx.ui.table.model.Simple._defaultSortComparatorAscending:qx.ui.table.model.Simple._defaultSortComparatorDescending);
}else{bb=(X?qx.ui.table.model.Simple._defaultSortComparatorInsensitiveAscending:qx.ui.table.model.Simple._defaultSortComparatorInsensitiveDescending);
}}bb.columnIndex=W;
this.__tM.sort(bb);
this.__tN=W;
this.__tR=X;
var Y={columnIndex:W,ascending:X};
this.fireDataEvent(l,Y);
this.fireEvent(o);
},setSortMethods:function(bg,bh){var bi;

if(qx.lang.Type.isFunction(bh)){bi={ascending:bh,descending:function(u,v){return bh(v,u);
}};
}else{bi=bh;
}this.__tO[bg]=bi;
},getSortMethods:function(a){return this.__tO[a];
},clearSorting:function(){if(this.__tN!=-1){this.__tN=-1;
this.__tR=true;
this.fireEvent(o);
}},getSortColumnIndex:function(){return this.__tN;
},isSortAscending:function(){return this.__tR;
},getRowCount:function(){return this.__tM.length;
},getValue:function(bp,bq){if(bq<0||bq>=this.__tM.length){throw new Error("this.__rowArr out of bounds: "+bq+" (0.."+this.__tM.length+")");
}return this.__tM[bq][bp];
},setValue:function(L,M,N){if(this.__tM[M][L]!=N){this.__tM[M][L]=N;
if(this.hasListener(p)){var O={firstRow:M,lastRow:M,firstColumn:L,lastColumn:L};
this.fireDataEvent(p,O);
}
if(L==this.__tN){this.clearSorting();
}}},setData:function(w,x){this.__tM=w;
if(this.hasListener(p)){var y={firstRow:0,lastRow:w.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(p,y);
}
if(x!==false){this.clearSorting();
}},getData:function(){return this.__tM;
},setDataAsMapArray:function(P,Q,R){this.setData(this._mapArray2RowArr(P,Q),R);
},addRows:function(bD,bE,bF){if(bE==null){bE=this.__tM.length;
}bD.splice(0,0,bE,0);
Array.prototype.splice.apply(this.__tM,bD);
var bG={firstRow:bE,lastRow:this.__tM.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(p,bG);

if(bF!==false){this.clearSorting();
}},addRowsAsMapArray:function(S,T,U,V){this.addRows(this._mapArray2RowArr(S,U),T,V);
},setRows:function(b,c,d){if(c==null){c=0;
}b.splice(0,0,c,b.length);
Array.prototype.splice.apply(this.__tM,b);
var e={firstRow:c,lastRow:this.__tM.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(p,e);

if(d!==false){this.clearSorting();
}},setRowsAsMapArray:function(bz,bA,bB,bC){this.setRows(this._mapArray2RowArr(bz,bB),bA,bC);
},removeRows:function(q,r,s){this.__tM.splice(q,r);
var t={firstRow:q,lastRow:this.__tM.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1,removeStart:q,removeCount:r};
this.fireDataEvent(p,t);

if(s!==false){this.clearSorting();
}},_mapArray2RowArr:function(D,E){var I=D.length;
var F=this.getColumnCount();
var H=new Array(I);
var G;

for(var i=0;i<I;++i){G=[];

if(E){G.originalData=D[i];
}
for(var j=0;j<F;++j){G[j]=D[i][this.getColumnId(j)];
}H[i]=G;
}return H;
}},destruct:function(){this.__tM=this.__tP=this.__tO=this.__tQ=null;
}});
})();
(function(){var c="qx.ui.table.IRowRenderer";
qx.Interface.define(c,{members:{updateDataRowElement:function(e,f){},getRowHeightStyle:function(b){},createRowStyle:function(a){},getRowClass:function(d){}}});
})();
(function(){var f="menu-button",e="table-column-reset-button",d="separator",c="user-button",b="qx.ui.table.columnmenu.Button",a="menu";
qx.Class.define(b,{extend:qx.ui.form.MenuButton,implement:qx.ui.table.IColumnMenuButton,construct:function(){arguments.callee.base.call(this);
},members:{__zy:null,factory:function(g,h){switch(g){case a:var j=new qx.ui.menu.Menu();
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
}},empty:function(){var n=this.getMenu();
var o=n.getChildren();

for(var i=0,l=o.length;i<l;i++){o[0].destroy();
}}}});
})();
(function(){var g="",f="qooxdoo-table-cell qooxdoo-table-cell-right",e="0",d="qx.util.format.NumberFormat",c="qx.ui.table.cellrenderer.Number";
qx.Class.define(c,{extend:qx.ui.table.cellrenderer.Conditional,properties:{numberFormat:{check:d,init:null,nullable:true}},members:{_getContentHtml:function(a){var b=this.getNumberFormat();

if(b){if(a.value||a.value==0){return b.format(a.value);
}else{return g;
}}else{return a.value==0?e:(a.value||g);
}},_getCellClass:function(h){return f;
}}});
})();
(function(){var cF="Boolean",cE="resize-line",cD="mousedown",cC="qx.event.type.Data",cB="mouseup",cA="qx.ui.table.pane.CellEvent",cz="scroll",cy="focus-indicator",cx="excluded",cw="scrollbar-y",dE="visible",dD="mousemove",dC="header",dB="editing",dA="click",dz="modelChanged",dy="scrollbar-x",dx="cellClick",dw="pane",dv="__zP",cM="__zV",cN="__zX",cK="mouseout",cL="changeHorizontalScrollBarVisible",cI="__zT",cJ="bottom",cG="_applyScrollTimeout",cH="changeScrollX",cQ="_applyTablePaneModel",cR="Integer",da="dblclick",cX="dataEdited",di="mousewheel",dd="interval",dr="qx.ui.table.pane.Scroller",dn="_applyShowCellFocusIndicator",cT="resize",du="__zW",dt="vertical",ds="__zR",cS="__zS",cV="__zU",cW="changeScrollY",cY="__zQ",db="appear",de="table-scroller",dk="beforeSort",dq="cellDblclick",cO="horizontal",cP="losecapture",cU="contextmenu",dh="col-resize",dg="disappear",df="_applyVerticalScrollBarVisible",dm="_applyHorizontalScrollBarVisible",dl="cellContextmenu",dc="close",dj="changeTablePaneModel",cv="qx.ui.table.pane.Model",dp="changeVerticalScrollBarVisible";
qx.Class.define(dr,{extend:qx.ui.core.Widget,include:qx.ui.core.scroll.MScrollBarFactory,construct:function(cj){arguments.callee.base.call(this);
this.__zO=cj;
var ck=new qx.ui.layout.Grid();
ck.setColumnFlex(0,1);
ck.setRowFlex(1,1);
this._setLayout(ck);
this.__zP=this._showChildControl(dy);
this.__zQ=this._showChildControl(cw);
this.__zR=this._showChildControl(dC);
this.__zS=this._showChildControl(dw);
this.__zT=new qx.ui.container.Composite(new qx.ui.layout.HBox()).set({minWidth:0});
this._add(this.__zT,{row:0,column:0,colSpan:2});
this.__zU=new qx.ui.table.pane.Clipper();
this.__zU.add(this.__zR);
this.__zU.addListener(cP,this._onChangeCaptureHeader,this);
this.__zU.addListener(dD,this._onMousemoveHeader,this);
this.__zU.addListener(cD,this._onMousedownHeader,this);
this.__zU.addListener(cB,this._onMouseupHeader,this);
this.__zU.addListener(dA,this._onClickHeader,this);
this.__zT.add(this.__zU,{flex:1});
this.__zV=new qx.ui.table.pane.Clipper();
this.__zV.add(this.__zS);
this.__zV.addListener(di,this._onMousewheel,this);
this.__zV.addListener(dD,this._onMousemovePane,this);
this.__zV.addListener(cD,this._onMousedownPane,this);
this.__zV.addListener(cB,this._onMouseupPane,this);
this.__zV.addListener(dA,this._onClickPane,this);
this.__zV.addListener(cU,this._onContextMenu,this);
this.__zV.addListener(da,this._onDblclickPane,this);
this.__zV.addListener(cT,this._onResizePane,this);
this._add(this.__zV,{row:1,column:0});
this.__zW=this.getChildControl(cy);
this.getChildControl(cE).hide();
this.addListener(cK,this._onMouseout,this);
this.addListener(db,this._onAppear,this);
this.addListener(dg,this._onDisappear,this);
this.__zX=new qx.event.Timer();
this.__zX.addListener(dd,this._oninterval,this);
this.initScrollTimeout();
},statics:{MIN_COLUMN_WIDTH:10,RESIZE_REGION_RADIUS:5,CLICK_TOLERANCE:5,HORIZONTAL_SCROLLBAR:1,VERTICAL_SCROLLBAR:2},events:{"changeScrollY":cC,"changeScrollX":cC,"cellClick":cA,"cellDblclick":cA,"cellContextmenu":cA,"beforeSort":cC},properties:{horizontalScrollBarVisible:{check:cF,init:true,apply:dm,event:cL},verticalScrollBarVisible:{check:cF,init:true,apply:df,event:dp},tablePaneModel:{check:cv,apply:cQ,event:dj},liveResize:{check:cF,init:false},focusCellOnMouseMove:{check:cF,init:false},selectBeforeFocus:{check:cF,init:false},showCellFocusIndicator:{check:cF,init:true,apply:dn},scrollTimeout:{check:cR,init:100,apply:cG},appearance:{refine:true,init:de}},members:{__zY:null,__zO:null,__Aa:null,__Ab:null,__Ac:null,__Ad:null,__Ae:null,__Af:null,__Ag:null,__Ah:null,__Ai:null,__Aj:null,__Ak:null,__Al:null,__Am:null,__An:null,__Ao:null,__Ap:null,__Aq:null,__Ar:null,__As:null,__At:null,__zP:null,__zQ:null,__zR:null,__zU:null,__zS:null,__zV:null,__zW:null,__zT:null,__zX:null,getPaneInsetRight:function(){var bL=this.getTopRightWidget();
var bM=bL&&bL.isVisible()&&bL.getBounds()?bL.getBounds().width:0;
var bK=this.getVerticalScrollBarVisible()?this.getVerticalScrollBarWidth():0;
return Math.max(bM,bK);
},setPaneWidth:function(s){if(this.isVerticalScrollBarVisible()){s+=this.getPaneInsetRight();
}this.setWidth(s);
},_createChildControlImpl:function(eg){var eh;

switch(eg){case dC:eh=(this.getTable().getNewTablePaneHeader())(this);
break;
case dw:eh=(this.getTable().getNewTablePane())(this);
break;
case cy:eh=new qx.ui.table.pane.FocusIndicator(this);
eh.setUserBounds(0,0,0,0);
eh.setZIndex(1000);
eh.addListener(cB,this._onMouseupFocusIndicator,this);
this.__zV.add(eh);
eh.exclude();
break;
case cE:eh=new qx.ui.core.Widget();
eh.setUserBounds(0,0,0,0);
eh.setZIndex(1000);
this.__zV.add(eh);
break;
case dy:eh=this._createScrollBar(cO).set({minWidth:0,alignY:cJ});
eh.addListener(cz,this._onScrollX,this);
this._add(eh,{row:2,column:0});
break;
case cw:eh=this._createScrollBar(dt);
eh.addListener(cz,this._onScrollY,this);
this._add(eh,{row:1,column:1});
break;
}return eh||arguments.callee.base.call(this,eg);
},_applyHorizontalScrollBarVisible:function(ev,ew){this.__zP.setVisibility(ev?dE:cx);

if(!ev){this.setScrollY(0,true);
}},_applyVerticalScrollBarVisible:function(ct,cu){this.__zQ.setVisibility(ct?dE:cx);

if(!ct){this.setScrollX(0);
}},_applyTablePaneModel:function(fc,fd){if(fd!=null){fd.removeListener(dz,this._onPaneModelChanged,this);
}fc.addListener(dz,this._onPaneModelChanged,this);
},_applyShowCellFocusIndicator:function(P,Q){if(P){this._updateFocusIndicator();
}else{if(this.__zW){this.__zW.hide();
}}},getScrollY:function(){return this.__zQ.getPosition();
},setScrollY:function(scrollY,dR){this.__zQ.scrollTo(scrollY);

if(dR){this._updateContent();
}},getScrollX:function(){return this.__zP.getPosition();
},setScrollX:function(scrollX){this.__zP.scrollTo(scrollX);
},getTable:function(){return this.__zO;
},onColVisibilityChanged:function(){this.updateHorScrollBarMaximum();
this._updateFocusIndicator();
},setColumnWidth:function(ex,ey){this.__zR.setColumnWidth(ex,ey);
this.__zS.setColumnWidth(ex,ey);
var ez=this.getTablePaneModel();
var x=ez.getX(ex);

if(x!=-1){this.updateHorScrollBarMaximum();
this._updateFocusIndicator();
}},onColOrderChanged:function(){this.__zR.onColOrderChanged();
this.__zS.onColOrderChanged();
this.updateHorScrollBarMaximum();
},onTableModelDataChanged:function(eb,ec,ed,ee){this.__zS.onTableModelDataChanged(eb,ec,ed,ee);
var ef=this.getTable().getTableModel().getRowCount();

if(ef!=this.__zY){this.updateVerScrollBarMaximum();

if(this.getFocusedRow()>=ef){if(ef==0){this.setFocusedCell(null,null);
}else{this.setFocusedCell(this.getFocusedColumn(),ef-1);
}}this.__zY=ef;
}},onSelectionChanged:function(){this.__zS.onSelectionChanged();
},onFocusChanged:function(){this.__zS.onFocusChanged();
},onTableModelMetaDataChanged:function(){this.__zR.onTableModelMetaDataChanged();
this.__zS.onTableModelMetaDataChanged();
},_onPaneModelChanged:function(){this.__zR.onPaneModelChanged();
this.__zS.onPaneModelChanged();
},_onResizePane:function(){this.updateHorScrollBarMaximum();
this.updateVerScrollBarMaximum();
this._updateContent();
this.__zR._updateContent();
this.__zO._updateScrollBarVisibility();
},updateHorScrollBarMaximum:function(){var el=this.__zV.getInnerSize();

if(!el){return ;
}var ej=this.getTablePaneModel().getTotalWidth();
var ek=this.__zP;

if(el.width<ej){var ei=Math.max(0,ej-el.width);
ek.setMaximum(ei);
ek.setKnobFactor(el.width/ej);
var em=ek.getPosition();
ek.setPosition(Math.min(em,ei));
}else{ek.setMaximum(0);
ek.setKnobFactor(1);
ek.setPosition(0);
}},updateVerScrollBarMaximum:function(){var bs=this.__zV.getInnerSize();

if(!bs){return ;
}var bq=this.getTable().getTableModel();
var bm=bq.getRowCount();

if(this.getTable().getKeepFirstVisibleRowComplete()){bm+=1;
}var bl=this.getTable().getRowHeight();
var bo=bm*bl;
var br=this.__zQ;

if(bs.height<bo){var bn=Math.max(0,bo-bs.height);
br.setMaximum(bn);
br.setKnobFactor(bs.height/bo);
var bp=br.getPosition();
br.setPosition(Math.min(bp,bn));
}else{br.setMaximum(0);
br.setKnobFactor(1);
br.setPosition(0);
}},onKeepFirstVisibleRowCompleteChanged:function(){this.updateVerScrollBarMaximum();
this._updateContent();
},_onAppear:function(){this._startInterval(this.getScrollTimeout());
},_onDisappear:function(){this._stopInterval();
},_onScrollX:function(e){var a=e.getData();
this.fireDataEvent(cH,a,e.getOldData());
this.__zU.scrollToX(a);
this.__zV.scrollToX(a);
},_onScrollY:function(e){this.fireDataEvent(cW,e.getData(),e.getOldData());
this._postponedUpdateContent();
},_onMousewheel:function(e){var bD=this.getTable();

if(!bD.getEnabled()){return;
}var bF=qx.bom.client.Engine.GECKO?1:3;
var bE=this.__zQ.getPosition()+((e.getWheelDelta()*bF)*bD.getRowHeight());
this.__zQ.scrollTo(bE);
if(this.__An&&this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(this.__An,this.__Ao);
}e.stop();
},__Au:function(dS){var dX=this.getTable();
var dY=this.__zR.getHeaderWidgetAtColumn(this.__Ai);
var dT=dY.getSizeHint().minWidth;
var dV=Math.max(dT,this.__Ak+dS-this.__Aj);

if(this.getLiveResize()){var dU=dX.getTableColumnModel();
dU.setColumnWidth(this.__Ai,dV);
}else{this.__zR.setColumnWidth(this.__Ai,dV);
var dW=this.getTablePaneModel();
this._showResizeLine(dW.getColumnLeft(this.__Ai)+dV);
}this.__Aj+=dV-this.__Ak;
this.__Ak=dV;
},__Av:function(bu){var bv=qx.ui.table.pane.Scroller.CLICK_TOLERANCE;

if(this.__zR.isShowingColumnMoveFeedback()||bu>this.__Ah+bv||bu<this.__Ah-bv){this.__Ae+=bu-this.__Ah;
this.__zR.showColumnMoveFeedback(this.__Ad,this.__Ae);
var bw=this.__zO.getTablePaneScrollerAtPageX(bu);

if(this.__Ag&&this.__Ag!=bw){this.__Ag.hideColumnMoveFeedback();
}
if(bw!=null){this.__Af=bw.showColumnMoveFeedback(bu);
}else{this.__Af=null;
}this.__Ag=bw;
this.__Ah=bu;
}},_onMousemoveHeader:function(e){var ce=this.getTable();

if(!ce.getEnabled()){return;
}var cf=false;
var bX=null;
var cc=e.getDocumentLeft();
var cd=e.getDocumentTop();
this.__An=cc;
this.__Ao=cd;

if(this.__Ai!=null){this.__Au(cc);
cf=true;
e.stopPropagation();
}else if(this.__Ad!=null){this.__Av(cc);
e.stopPropagation();
}else{var bY=this._getResizeColumnForPageX(cc);

if(bY!=-1){cf=true;
}else{var cb=ce.getTableModel();
var cg=this._getColumnForPageX(cc);

if(cg!=null&&cb.isColumnSortable(cg)){bX=cg;
}}}var ca=cf?dh:null;
this.getApplicationRoot().setGlobalCursor(ca);
this.setCursor(ca);
this.__zR.setMouseOverColumn(bX);
},_onMousemovePane:function(e){var d=this.getTable();

if(!d.getEnabled()){return;
}var h=e.getDocumentLeft();
var i=e.getDocumentTop();
this.__An=h;
this.__Ao=i;
var g=this._getRowForPagePos(h,i);

if(g!=null&&this._getColumnForPageX(h)!=null){if(this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(h,i);
}}this.__zR.setMouseOverColumn(null);
},_onMousedownHeader:function(e){if(!this.getTable().getEnabled()){return;
}var by=e.getDocumentLeft();
var bz=this._getResizeColumnForPageX(by);

if(bz!=-1){this._startResizeHeader(bz,by);
e.stop();
}else{var bx=this._getColumnForPageX(by);

if(bx!=null){this._startMoveHeader(bx,by);
e.stop();
}}},_startResizeHeader:function(bH,bI){var bJ=this.getTable().getTableColumnModel();
this.__Ai=bH;
this.__Aj=bI;
this.__Ak=bJ.getColumnWidth(this.__Ai);
this.__zU.capture();
},_startMoveHeader:function(t,u){this.__Ad=t;
this.__Ah=u;
this.__Ae=this.getTablePaneModel().getColumnLeft(t);
this.__zU.capture();
},_onMousedownPane:function(e){var z=this.getTable();

if(!z.getEnabled()){return;
}
if(this.isEditing()){this.stopEditing();
}var v=e.getDocumentLeft();
var y=e.getDocumentTop();
var B=this._getRowForPagePos(v,y);
var A=this._getColumnForPageX(v);

if(B!==null){this.__Al={row:B,col:A};
var w=this.getSelectBeforeFocus();

if(w){z.getSelectionManager().handleMouseDown(B,e);
}if(!this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(v,y);
}
if(!w){z.getSelectionManager().handleMouseDown(B,e);
}}},_onMouseupFocusIndicator:function(e){if(this.__Al&&this.__zW.getRow()==this.__Al.row&&this.__zW.getColumn()==this.__Al.col){this.__Al={};
this.fireEvent(dx,qx.ui.table.pane.CellEvent,[this,e,this.__Al.row,this.__Al.col],true);
}},_onChangeCaptureHeader:function(e){if(this.__Ai!=null){this._stopResizeHeader();
}
if(this.__Ad!=null){this._stopMoveHeader();
}},_stopResizeHeader:function(){var eA=this.getTable().getTableColumnModel();
if(!this.getLiveResize()){this._hideResizeLine();
eA.setColumnWidth(this.__Ai,this.__Ak);
}this.__Ai=null;
this.__zU.releaseCapture();
this.getApplicationRoot().setGlobalCursor(null);
this.setCursor(null);
},_stopMoveHeader:function(){var cp=this.getTable().getTableColumnModel();
var cq=this.getTablePaneModel();
this.__zR.hideColumnMoveFeedback();

if(this.__Ag){this.__Ag.hideColumnMoveFeedback();
}
if(this.__Af!=null){var cs=cq.getFirstColumnX()+cq.getX(this.__Ad);
var co=this.__Af;

if(co!=cs&&co!=cs+1){var cr=cp.getVisibleColumnAtX(cs);
var cn=cp.getVisibleColumnAtX(co);
var cm=cp.getOverallX(cr);
var cl=(cn!=null)?cp.getOverallX(cn):cp.getOverallColumnCount();

if(cl>cm){cl--;
}cp.moveColumn(cm,cl);
}}this.__Ad=null;
this.__Af=null;
this.__zU.releaseCapture();
},_onMouseupPane:function(e){var bj=this.getTable();

if(!bj.getEnabled()){return;
}var bk=this._getRowForPagePos(e.getDocumentLeft(),e.getDocumentTop());

if(bk!=-1&&bk!=null&&this._getColumnForPageX(e.getDocumentLeft())!=null){bj.getSelectionManager().handleMouseUp(bk,e);
}},_onMouseupHeader:function(e){var bd=this.getTable();

if(!bd.getEnabled()){return;
}
if(this.__Ai!=null){this._stopResizeHeader();
this.__Am=true;
e.stop();
}else if(this.__Ad!=null){this._stopMoveHeader();
e.stop();
}},_onClickHeader:function(e){if(this.__Am){this.__Am=false;
return;
}var er=this.getTable();

if(!er.getEnabled()){return;
}var ep=er.getTableModel();
var eq=e.getDocumentLeft();
var eo=this._getResizeColumnForPageX(eq);

if(eo==-1){var eu=this._getColumnForPageX(eq);

if(eu!=null&&ep.isColumnSortable(eu)){var en=ep.getSortColumnIndex();
var es=(eu!=en)?true:!ep.isSortAscending();
var et={column:eu,ascending:es};

if(this.fireDataEvent(dk,et)){ep.sortByColumn(eu,es);
er.getSelectionModel().resetSelection();
}}}e.stop();
},_onClickPane:function(e){var dM=this.getTable();

if(!dM.getEnabled()){return;
}var dP=e.getDocumentLeft();
var dQ=e.getDocumentTop();
var dN=this._getRowForPagePos(dP,dQ);
var dO=this._getColumnForPageX(dP);

if(dN!=null&&dO!=null){dM.getSelectionManager().handleClick(dN,e);

if(this.__zW.isHidden()||(this.__Al&&dN==this.__Al.row&&dO==this.__Al.col)){this.__Al={};
this.fireEvent(dx,qx.ui.table.pane.CellEvent,[this,e,dN,dO],true);
}}},_onContextMenu:function(e){var bh=e.getDocumentLeft();
var bi=e.getDocumentTop();
var bf=this._getRowForPagePos(bh,bi);
var bg=this._getColumnForPageX(bh);

if(this.__zW.isHidden()||(this.__Al&&bf==this.__Al.row&&bg==this.__Al.col)){this.__Al={};
this.fireEvent(dl,qx.ui.table.pane.CellEvent,[this,e,bf,bg],true);
var be=this.getTable().getContextMenu();

if(be){if(be.getChildren().length>0){be.openAtMouse(e);
}else{be.exclude();
}e.preventDefault();
}}},_onContextMenuOpen:function(e){},_onDblclickPane:function(e){var S=e.getDocumentLeft();
var T=e.getDocumentTop();
this._focusCellAtPagePos(S,T);
this.startEditing();
var R=this._getRowForPagePos(S,T);

if(R!=-1&&R!=null){this.fireEvent(dq,qx.ui.table.pane.CellEvent,[this,e,R],true);
}},_onMouseout:function(e){var bt=this.getTable();

if(!bt.getEnabled()){return;
}if(this.__Ai==null){this.setCursor(null);
this.getApplicationRoot().setGlobalCursor(null);
}this.__zR.setMouseOverColumn(null);
},_showResizeLine:function(x){var bB=this._showChildControl(cE);
var bA=bB.getWidth();
var bC=this.__zV.getBounds();
bB.setUserBounds(x-Math.round(bA/2),0,bA,bC.height);
},_hideResizeLine:function(){this._excludeChildControl(cE);
},showColumnMoveFeedback:function(C){var L=this.getTablePaneModel();
var K=this.getTable().getTableColumnModel();
var F=this.__zS.getContainerLocation().left;
var J=L.getColumnCount();
var G=0;
var E=0;
var O=F;

for(var D=0;D<J;D++){var H=L.getColumnAtX(D);
var M=K.getColumnWidth(H);

if(C<O+M/2){break;
}O+=M;
G=D+1;
E=O-F;
}var I=this.__zV.getContainerLocation().left;
var N=this.__zV.getBounds().width;
var scrollX=I-F;
E=qx.lang.Number.limit(E,scrollX+2,scrollX+N-1);
this._showResizeLine(E);
return L.getFirstColumnX()+G;
},hideColumnMoveFeedback:function(){this._hideResizeLine();
},_focusCellAtPagePos:function(fs,ft){var fv=this._getRowForPagePos(fs,ft);

if(fv!=-1&&fv!=null){var fu=this._getColumnForPageX(fs);
this.__zO.setFocusedCell(fu,fv);
}},setFocusedCell:function(bN,bO){if(!this.isEditing()){this.__zS.setFocusedCell(bN,bO,this.__Ab);
this.__Ap=bN;
this.__Aq=bO;
this._updateFocusIndicator();
}},getFocusedColumn:function(){return this.__Ap;
},getFocusedRow:function(){return this.__Aq;
},scrollCellVisible:function(fe,ff){var fp=this.getTablePaneModel();
var fg=fp.getX(fe);

if(fg!=-1){var fm=this.__zV.getInnerSize();

if(!fm){return;
}var fn=this.getTable().getTableColumnModel();
var fj=fp.getColumnLeft(fe);
var fq=fn.getColumnWidth(fe);
var fh=this.getTable().getRowHeight();
var fr=ff*fh;
var scrollX=this.getScrollX();
var scrollY=this.getScrollY();
var fo=Math.min(fj,fj+fq-fm.width);
var fl=fj;
this.setScrollX(Math.max(fo,Math.min(fl,scrollX)));
var fi=fr+fh-fm.height;

if(this.getTable().getKeepFirstVisibleRowComplete()){fi+=fh;
}var fk=fr;
this.setScrollY(Math.max(fi,Math.min(fk,scrollY)),true);
}},isEditing:function(){return this.__Ar!=null;
},startEditing:function(){var eT=this.getTable();
var eR=eT.getTableModel();
var eV=this.__Ap;

if(!this.isEditing()&&(eV!=null)&&eR.isColumnEditable(eV)){var eW=this.__Aq;
var eP=this.getTablePaneModel().getX(eV);
var eQ=eR.getValue(eV,eW);
this.__As=eT.getTableColumnModel().getCellEditorFactory(eV);
var eS={col:eV,row:eW,xPos:eP,value:eQ,table:eT};
this.__Ar=this.__As.createCellEditor(eS);
if(this.__Ar===null){return false;
}else if(this.__Ar instanceof qx.ui.window.Window){this.__Ar.setModal(true);
this.__Ar.setShowClose(false);
this.__Ar.addListener(dc,this._onCellEditorModalWindowClose,this);
var f=eT.getModalCellEditorPreOpenFunction();

if(f!=null){f(this.__Ar,eS);
}this.__Ar.open();
}else{var eU=this.__zW.getInnerSize();
this.__Ar.setUserBounds(0,0,eU.width,eU.height);
this.__zW.addListener(cD,function(e){e.stopPropagation();
});
this.__zW.add(this.__Ar);
this.__zW.addState(dB);
this.__zW.setKeepActive(false);
this.__Ar.focus();
this.__Ar.activate();
}return true;
}return false;
},stopEditing:function(){this.flushEditor();
this.cancelEditing();
},flushEditor:function(){if(this.isEditing()){var c=this.__As.getCellEditorValue(this.__Ar);
var b=this.getTable().getTableModel().getValue(this.__Ap,this.__Aq);
this.getTable().getTableModel().setValue(this.__Ap,this.__Aq,c);
this.__zO.focus();
this.__zO.fireDataEvent(cX,{row:this.__Aq,col:this.__Ap,oldValue:b,value:c});
}},cancelEditing:function(){if(this.isEditing()&&!this.__Ar.pendingDispose){if(this._cellEditorIsModalWindow){this.__Ar.destroy();
this.__Ar=null;
this.__As=null;
this.__Ar.pendingDispose=true;
}else{this.__zW.removeState(dB);
this.__zW.setKeepActive(true);
this.__Ar.destroy();
this.__Ar=null;
this.__As=null;
}}},_onCellEditorModalWindowClose:function(e){this.stopEditing();
},_getColumnForPageX:function(dF){var dI=this.getTable().getTableColumnModel();
var dJ=this.getTablePaneModel();
var dH=dJ.getColumnCount();
var dL=this.__zR.getContainerLocation().left;

for(var x=0;x<dH;x++){var dG=dJ.getColumnAtX(x);
var dK=dI.getColumnWidth(dG);
dL+=dK;

if(dF<dL){return dG;
}}return null;
},_getResizeColumnForPageX:function(U){var Y=this.getTable().getTableColumnModel();
var ba=this.getTablePaneModel();
var X=ba.getColumnCount();
var bc=this.__zR.getContainerLocation().left;
var V=qx.ui.table.pane.Scroller.RESIZE_REGION_RADIUS;

for(var x=0;x<X;x++){var W=ba.getColumnAtX(x);
var bb=Y.getColumnWidth(W);
bc+=bb;

if(U>=(bc-V)&&U<=(bc+V)){return W;
}}return -1;
},_getRowForPagePos:function(j,k){var l=this.__zS.getContentLocation();

if(j<l.left||j>l.right){return null;
}
if(k>=l.top&&k<=l.bottom){var m=this.getTable().getRowHeight();
var scrollY=this.__zQ.getPosition();

if(this.getTable().getKeepFirstVisibleRowComplete()){scrollY=Math.floor(scrollY/m)*m;
}var p=scrollY+k-l.top;
var r=Math.floor(p/m);
var q=this.getTable().getTableModel();
var n=q.getRowCount();
return (r<n)?r:null;
}var o=this.__zR.getContainerLocation();

if(k>=o.top&&k<=o.bottom&&j<=o.right){return -1;
}return null;
},setTopRightWidget:function(eY){var fa=this.__At;

if(fa!=null){this.__zT.remove(fa);
}
if(eY!=null){this.__zT.add(eY);
}this.__At=eY;
},getTopRightWidget:function(){return this.__At;
},getHeader:function(){return this.__zR;
},getTablePane:function(){return this.__zS;
},getVerticalScrollBarWidth:function(){var bG=this.__zQ;
return bG.isVisible()?(bG.getSizeHint().width||0):0;
},getNeededScrollBars:function(eB,eC){var eI=this.__zQ.getSizeHint().width;
var eJ=this.__zV.getInnerSize();
var eD=eJ?eJ.width:0;

if(this.getVerticalScrollBarVisible()){eD+=eI;
}var eM=eJ?eJ.height:0;

if(this.getHorizontalScrollBarVisible()){eM+=eI;
}var eG=this.getTable().getTableModel();
var eK=eG.getRowCount();
var eN=this.getTablePaneModel().getTotalWidth();
var eL=this.getTable().getRowHeight()*eK;
var eF=false;
var eO=false;

if(eN>eD){eF=true;

if(eL>eM-eI){eO=true;
}}else if(eL>eM){eO=true;

if(!eC&&(eN>eD-eI)){eF=true;
}}var eH=qx.ui.table.pane.Scroller.HORIZONTAL_SCROLLBAR;
var eE=qx.ui.table.pane.Scroller.VERTICAL_SCROLLBAR;
return ((eB||eF)?eH:0)|((eC||!eO)?0:eE);
},_applyScrollTimeout:function(ch,ci){this._startInterval(ch);
},_startInterval:function(fb){this.__zX.setInterval(fb);
this.__zX.start();
},_stopInterval:function(){this.__zX.stop();
},_postponedUpdateContent:function(){this._updateContent();
},_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.__Ab&&!this.__zS._layoutPending){this.__Ab=false;
this._updateContent();
}}),_updateContent:function(){var bT=this.__zV.getInnerSize();

if(!bT){return;
}var bW=bT.height;
var scrollX=this.__zP.getPosition();
var scrollY=this.__zQ.getPosition();
var bQ=this.getTable().getRowHeight();
var bR=Math.floor(scrollY/bQ);
var bV=this.__zS.getFirstVisibleRow();
this.__zS.setFirstVisibleRow(bR);
var bS=Math.ceil(bW/bQ);
var bP=0;
var bU=this.getTable().getKeepFirstVisibleRowComplete();

if(!bU){bS++;
bP=scrollY%bQ;
}this.__zS.setVisibleRowCount(bS);

if(bR!=bV){this._updateFocusIndicator();
}this.__zV.scrollToX(scrollX);
if(!bU){this.__zV.scrollToY(bP);
}},_updateFocusIndicator:function(){if(!this.getShowCellFocusIndicator()){return;
}var ea=this.getTable();

if(!ea.getEnabled()){return;
}this.__zW.moveToCell(this.__Ap,this.__Aq);
}},destruct:function(){this._stopInterval();
var eX=this.getTablePaneModel();

if(eX){eX.dispose();
}this.__Al=this.__At=this.__zO=null;
this._disposeObjects(dv,cY,cV,cM,du,ds,cS,cI,cN);
}});
})();
(function(){var s="px",r=".qooxdoo-table-cell-icon {",q="abstract",p="",o="qx.ui.table.cellrenderer.AbstractImage",n=" qooxdoo-table-cell-icon",m="<div></div>",l="'",k="no-repeat",j="}",d="  text-align:center;",i="inline-block",g="static",c="top",b="  padding-top:1px;",f="title='",e="string",h="-moz-inline-box";
qx.Class.define(o,{extend:qx.ui.table.cellrenderer.Abstract,type:q,construct:function(){arguments.callee.base.call(this);
var t=arguments.callee.self;

if(!t.stylesheet){t.stylesheet=qx.bom.Stylesheet.createElement(r+d+b+j);
}},members:{__Da:16,__Db:16,_insetY:2,__Dc:null,_identifyImage:function(B){throw new Error("_identifyImage is abstract");
},_getImageInfos:function(D){var E=this._identifyImage(D);
if(E==null||typeof D==e){E={url:E,tooltip:null};
}
if(D.width&&D.height){var F={width:D.imageWidth,height:D.imageHeight};
}else{F=this.__Dd(E.url);
}E.width=F.width;
E.height=F.height;
return E;
},__Dd:function(w){var z=qx.util.ResourceManager.getInstance();
var y=qx.io.ImageLoader;
var x,A;
if(z.has(w)){x=z.getImageWidth(w);
A=z.getImageHeight(w);
}else if(y.isLoaded(w)){x=y.getWidth(w);
A=y.getHeight(w);
}else{x=this.__Da;
A=this.__Db;
}return {width:x,height:A};
},createDataCellHtml:function(u,v){this.__Dc=this._getImageInfos(u);
return arguments.callee.base.call(this,u,v);
},_getCellClass:function(C){return arguments.callee.base.call(this)+n;
},_getContentHtml:function(a){var content=m;
if(this.__Dc.url){var content=qx.bom.element.Decoration.create(this.__Dc.url,k,{width:this.__Dc.width+s,height:this.__Dc.height+s,display:qx.bom.client.Engine.GECKO&&qx.bom.client.Engine.VERSION<1.9?h:i,verticalAlign:c,position:g});
}return content;
},_getCellAttributes:function(G){var H=this.__Dc.tooltip;

if(H){return f+H+l;
}else{return p;
}}},destruct:function(){this.__Dc=null;
}});
})();
(function(){var o="Number",n="qx.event.type.Event",m="_applyFirstColumnX",l="Integer",k="qx.ui.table.pane.Model",j="_applyMaxColumnCount",i="visibilityChangedPre";
qx.Class.define(k,{extend:qx.core.Object,construct:function(f){arguments.callee.base.call(this);
f.addListener(i,this._onColVisibilityChanged,this);
this.__Ax=f;
},events:{"modelChanged":n},statics:{EVENT_TYPE_MODEL_CHANGED:"modelChanged"},properties:{firstColumnX:{check:l,init:0,apply:m},maxColumnCount:{check:o,init:-1,apply:j}},members:{__Ay:null,__Ax:null,_applyFirstColumnX:function(y,z){this.__Ay=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},_applyMaxColumnCount:function(g,h){this.__Ay=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},setTableColumnModel:function(p){this.__Ax=p;
this.__Ay=null;
},_onColVisibilityChanged:function(D){this.__Ay=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},getColumnCount:function(){if(this.__Ay==null){var c=this.getFirstColumnX();
var e=this.getMaxColumnCount();
var d=this.__Ax.getVisibleColumnCount();

if(e==-1||(c+e)>d){this.__Ay=d-c;
}else{this.__Ay=e;
}}return this.__Ay;
},getColumnAtX:function(a){var b=this.getFirstColumnX();
return this.__Ax.getVisibleColumnAtX(b+a);
},getX:function(q){var r=this.getFirstColumnX();
var s=this.getMaxColumnCount();
var x=this.__Ax.getVisibleX(q)-r;

if(x>=0&&(s==-1||x<s)){return x;
}else{return -1;
}},getColumnLeft:function(t){var w=0;
var v=this.getColumnCount();

for(var x=0;x<v;x++){var u=this.getColumnAtX(x);

if(u==t){return w;
}w+=this.__Ax.getColumnWidth(u);
}return -1;
},getTotalWidth:function(){var A=0;
var B=this.getColumnCount();

for(var x=0;x<B;x++){var C=this.getColumnAtX(x);
A+=this.__Ax.getColumnWidth(C);
}return A;
}},destruct:function(){this.__Ax=null;
}});
})();
(function(){var f="changeVisible",d="qx.ui.table.columnmenu.MenuItem",c="_applyVisible",b="Boolean",a="changeValue";
qx.Class.define(d,{extend:qx.ui.menu.CheckBox,implement:qx.ui.table.IColumnMenuItem,properties:{visible:{check:b,init:true,apply:c,event:f}},construct:function(g){arguments.callee.base.call(this,g);
this.addListener(a,function(e){this.bInListener=true;
this.setVisible(e.getData());
this.bInListener=false;
});
},members:{__zz:false,_applyVisible:function(h,i){if(!this.bInListener){this.setValue(h);
}}}});
})();
(function(){var a="qx.lang.Number";
qx.Bootstrap.define(a,{statics:{isInRange:function(b,c,d){return b>=c&&b<=d;
},isBetweenRange:function(h,i,j){return h>i&&h<j;
},limit:function(e,f,g){if(g!=null&&e>g){return g;
}else if(f!=null&&e<f){return f;
}else{return e;
}}}});
})();
(function(){var g="hovered",f="__zL",e="qx.ui.table.pane.Header";
qx.Class.define(e,{extend:qx.ui.core.Widget,construct:function(h){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.HBox());
this.__zL=h;
},members:{__zL:null,__zM:null,__zN:null,getPaneScroller:function(){return this.__zL;
},getTable:function(){return this.__zL.getTable();
},onColOrderChanged:function(){this._updateContent(true);
},onPaneModelChanged:function(){this._updateContent(true);
},onTableModelMetaDataChanged:function(){this._updateContent();
},setColumnWidth:function(u,v){var w=this.getHeaderWidgetAtColumn(u);

if(w!=null){w.setWidth(v);
}},setMouseOverColumn:function(I){if(I!=this.__zN){if(this.__zN!=null){var J=this.getHeaderWidgetAtColumn(this.__zN);

if(J!=null){J.removeState(g);
}}
if(I!=null){this.getHeaderWidgetAtColumn(I).addState(g);
}this.__zN=I;
}},getHeaderWidgetAtColumn:function(a){var b=this.getPaneScroller().getTablePaneModel().getX(a);
return this._getChildren()[b];
},showColumnMoveFeedback:function(y,x){var C=this.getContainerLocation();

if(this.__zM==null){var z=this.getPaneScroller().getTablePaneModel().getX(y);
var B=this._getChildren()[z];
var D=this.getTable().getTableModel();
var F=this.getTable().getTableColumnModel();
var G={xPos:z,col:y,name:D.getColumnName(y)};
var E=F.getHeaderCellRenderer(y);
var A=E.createHeaderCell(G);
var H=B.getBounds();
A.setWidth(H.width);
A.setHeight(H.height);
A.setZIndex(1000000);
A.setOpacity(0.8);
A.setLayoutProperties({top:C.top});
this.getApplicationRoot().add(A);
this.__zM=A;
}this.__zM.setLayoutProperties({left:C.left+x});
this.__zM.show();
},hideColumnMoveFeedback:function(){if(this.__zM!=null){this.__zM.destroy();
this.__zM=null;
}},isShowingColumnMoveFeedback:function(){return this.__zM!=null;
},_updateContent:function(i){var n=this.getTable().getTableModel();
var q=this.getTable().getTableColumnModel();
var r=this.getPaneScroller().getTablePaneModel();
var t=this._getChildren();
var o=r.getColumnCount();
var j=n.getSortColumnIndex();
if(i){this._cleanUpCells();
}var k={};
k.sortedAscending=n.isSortAscending();

for(var x=0;x<o;x++){var m=r.getColumnAtX(x);

if(m===undefined){continue;
}var s=q.getColumnWidth(m);
var p=q.getHeaderCellRenderer(m);
k.xPos=x;
k.col=m;
k.name=n.getColumnName(m);
k.editable=n.isColumnEditable(m);
k.sorted=(m==j);
var l=t[x];
if(l==null){l=p.createHeaderCell(k);
l.set({width:s});
this._add(l);
}else{p.updateHeaderCell(k,l);
}}},_cleanUpCells:function(){var d=this._getChildren();

for(var x=d.length-1;x>=0;x--){var c=d[x];
c.destroy();
}}},destruct:function(){this._disposeObjects(f);
}});
})();
(function(){var t="",s="table-row-background-even",r="table-row-background-selected",q="table-row",p="background-color:",o="table-row-background-focused",n=';border-bottom: 1px solid ',m=';color:',l="table-row-selected",k="table-row-background-odd",d="default",j="table-row-background-focused-selected",g="qx.ui.table.rowrenderer.Default",c="table-row-line",b="'",f="height:",e=";",h="px;",a="1px solid ",i="Boolean";
qx.Class.define(g,{extend:qx.core.Object,implement:qx.ui.table.IRowRenderer,construct:function(){arguments.callee.base.call(this);
this.__yj=t;
this.__yj={};
this.__yk={};
this._renderFont(qx.theme.manager.Font.getInstance().resolve(d));
var z=qx.theme.manager.Color.getInstance();
this.__yk.bgcolFocusedSelected=z.resolve(j);
this.__yk.bgcolFocused=z.resolve(o);
this.__yk.bgcolSelected=z.resolve(r);
this.__yk.bgcolEven=z.resolve(s);
this.__yk.bgcolOdd=z.resolve(k);
this.__yk.colSelected=z.resolve(l);
this.__yk.colNormal=z.resolve(q);
this.__yk.horLine=z.resolve(c);
},properties:{highlightFocusRow:{check:i,init:true}},members:{__yk:null,__yl:null,__yj:null,_insetY:1,_renderFont:function(D){if(D){this.__yl=D.getStyles();
this.__yj=qx.bom.element.Style.compile(this.__yl);
this.__yj=this.__yj.replace(/"/g,b);
}else{this.__yj=t;
this.__yl=qx.bom.Font.getDefaultStyles();
}},updateDataRowElement:function(v,w){var y=this.__yl;
var x=w.style;
qx.bom.element.Style.setStyles(w,y);

if(v.focusedRow&&this.getHighlightFocusRow()){x.backgroundColor=v.selected?this.__yk.bgcolFocusedSelected:this.__yk.bgcolFocused;
}else{if(v.selected){x.backgroundColor=this.__yk.bgcolSelected;
}else{x.backgroundColor=(v.row%2==0)?this.__yk.bgcolEven:this.__yk.bgcolOdd;
}}x.color=v.selected?this.__yk.colSelected:this.__yk.colNormal;
x.borderBottom=a+this.__yk.horLine;
},getRowHeightStyle:function(u){if(qx.bom.client.Feature.CONTENT_BOX){u-=this._insetY;
}return f+u+h;
},createRowStyle:function(B){var C=[];
C.push(e);
C.push(this.__yj);
C.push(p);

if(B.focusedRow&&this.getHighlightFocusRow()){C.push(B.selected?this.__yk.bgcolFocusedSelected:this.__yk.bgcolFocused);
}else{if(B.selected){C.push(this.__yk.bgcolSelected);
}else{C.push((B.row%2==0)?this.__yk.bgcolEven:this.__yk.bgcolOdd);
}}C.push(m);
C.push(B.selected?this.__yk.colSelected:this.__yk.colNormal);
C.push(n,this.__yk.horLine);
return C.join(t);
},getRowClass:function(A){return t;
}},destruct:function(){this.__yk=this.__yl=this.__yj=null;
}});
})();
(function(){var h="String",g="_applyIconTrue",f="decoration/table/boolean-true.png",e="qx.ui.table.cellrenderer.Boolean",d=";padding-top:4px;",c="decoration/table/boolean-false.png",b="_applyIconFalse";
qx.Class.define(e,{extend:qx.ui.table.cellrenderer.AbstractImage,construct:function(){arguments.callee.base.call(this);
this.__Ez=qx.util.AliasManager.getInstance();
this.initIconTrue();
this.initIconFalse();
},properties:{iconTrue:{check:h,init:f,apply:g},iconFalse:{check:h,init:c,apply:b}},members:{__EA:null,__EB:false,__Ez:null,_applyIconTrue:function(a){this.__EA=this.__Ez.resolve(a);
},_applyIconFalse:function(i){this.__EB=this.__Ez.resolve(i);
},_insetY:5,_getCellStyle:function(j){return arguments.callee.base.call(this,j)+d;
},_identifyImage:function(k){var l={imageWidth:11,imageHeight:11};

switch(k.value){case true:l.url=this.__EA;
break;
case false:l.url=this.__EB;
break;
default:l.url=null;
break;
}return l;
}},destruct:function(){this.__Ez=null;
}});
})();
(function(){var dE="Function",dD="Boolean",dC="column-button",dB="qx.event.type.Data",dA="statusbar",dz="qx.ui.table.pane.CellEvent",dy="PageUp",dx="changeLocale",dw="changeSelection",dv="qx.dynlocale",eQ="Enter",eP="metaDataChanged",eO="dataChanged",eN="__zt",eM="on",eL="_applyStatusBarVisible",eK="columnVisibilityMenuCreateStart",eJ="blur",eI="qx.ui.table.Table",eH="columnVisibilityMenuCreateEnd",dL="Use 'resetSelection' instead.",dM="verticalScrollBarChanged",dJ="_applyMetaColumnCounts",dK="one of one row",dH="focus",dI="changeDataRowRenderer",dF="changeHeaderCellHeight",dG="Escape",dT="A",dU="changeSelectionModel",ej="Left",ef="Down",er="Integer",em="_applyHeaderCellHeight",eD="visibilityChanged",ex="qx.ui.table.ITableModel",ea="orderChanged",eG="_applySelectionModel",eF="__zs",eE="__zk",dX="menu",ec="_applyAdditionalStatusBarText",ee="_applyFocusCellOnMouseMove",eh="table",ek="_applyColumnVisibilityButtonVisible",en="changeTableModel",et="qx.event.type.Event",ez="tableWidthChanged",dN="End",dO="Object",eb="_applyShowCellFocusIndicator",eq="resize",ep="changeScrollY",eo="_applyTableModel",ev="__zr",eu="menu-button",el="_applyKeepFirstVisibleRowComplete",es="widthChanged",ds="Home",ey="_applyRowHeight",dP="F2",dQ="appear",eg="Up",dt="%1 rows",du="qx.ui.table.selection.Model",dW="one row",dR="PageDown",dS="%1 of %2 rows",dV="keypress",ei="changeRowHeight",eB="__zj",eA="Number",ed="changeVisible",eC="qx.ui.table.IRowRenderer",dY="Right",ew="Space";
qx.Class.define(eI,{extend:qx.ui.core.Widget,construct:function(ca,cb){arguments.callee.base.call(this);
if(!cb){cb={};
}
if(cb.selectionManager){this.setNewSelectionManager(cb.selectionManager);
}
if(cb.selectionModel){this.setNewSelectionModel(cb.selectionModel);
}
if(cb.tableColumnModel){this.setNewTableColumnModel(cb.tableColumnModel);
}
if(cb.tablePane){this.setNewTablePane(cb.tablePane);
}
if(cb.tablePaneHeader){this.setNewTablePaneHeader(cb.tablePaneHeader);
}
if(cb.tablePaneScroller){this.setNewTablePaneScroller(cb.tablePaneScroller);
}
if(cb.tablePaneModel){this.setNewTablePaneModel(cb.tablePaneModel);
}
if(cb.columnMenu){this.setNewColumnMenu(cb.columnMenu);
}this._setLayout(new qx.ui.layout.VBox());
this.__zj=new qx.ui.container.Composite(new qx.ui.layout.HBox());
this._add(this.__zj,{flex:1});
this.setDataRowRenderer(new qx.ui.table.rowrenderer.Default(this));
this.__zk=this.getNewSelectionManager()(this);
this.setSelectionModel(this.getNewSelectionModel()(this));
this.setTableModel(ca||this.getEmptyTableModel());
this.setMetaColumnCounts([-1]);
this.setTabIndex(1);
this.addListener(dV,this._onKeyPress);
this.addListener(dH,this._onFocusChanged);
this.addListener(eJ,this._onFocusChanged);
var cc=new qx.ui.core.Widget().set({height:0});
this._add(cc);
cc.addListener(eq,this._onResize,this);
this.__zl=null;
this.__zm=null;
if(qx.core.Variant.isSet(dv,eM)){qx.locale.Manager.getInstance().addListener(dx,this._onChangeLocale,this);
}this.initStatusBarVisible();
},events:{"columnVisibilityMenuCreateStart":dB,"columnVisibilityMenuCreateEnd":dB,"tableWidthChanged":et,"verticalScrollBarChanged":dB,"cellClick":dz,"cellDblclick":dz,"cellContextmenu":dz,"dataEdited":dB},statics:{__zn:{cellClick:1,cellDblclick:1,cellContextmenu:1}},properties:{appearance:{refine:true,init:eh},focusable:{refine:true,init:true},minWidth:{refine:true,init:50},selectable:{refine:true,init:false},selectionModel:{check:du,apply:eG,event:dU},tableModel:{check:ex,apply:eo,event:en},rowHeight:{check:eA,init:20,apply:ey,event:ei},forceLineHeight:{check:dD,init:true},headerCellHeight:{check:er,init:16,apply:em,event:dF,nullable:true},statusBarVisible:{check:dD,init:true,apply:eL},additionalStatusBarText:{nullable:true,init:null,apply:ec},columnVisibilityButtonVisible:{check:dD,init:true,apply:ek},metaColumnCounts:{check:dO,apply:dJ},focusCellOnMouseMove:{check:dD,init:false,apply:ee},rowFocusChangeModifiesSelection:{check:dD,init:true},showCellFocusIndicator:{check:dD,init:true,apply:eb},keepFirstVisibleRowComplete:{check:dD,init:true,apply:el},alwaysUpdateCells:{check:dD,init:false},dataRowRenderer:{check:eC,init:null,nullable:true,event:dI},modalCellEditorPreOpenFunction:{check:dE,init:null,nullable:true},newColumnMenu:{check:dE,init:function(){return new qx.ui.table.columnmenu.Button();
}},newSelectionManager:{check:dE,init:function(bn){return new qx.ui.table.selection.Manager(bn);
}},newSelectionModel:{check:dE,init:function(bY){return new qx.ui.table.selection.Model(bY);
}},newTableColumnModel:{check:dE,init:function(bR){return new qx.ui.table.columnmodel.Basic(bR);
}},newTablePane:{check:dE,init:function(bt){return new qx.ui.table.pane.Pane(bt);
}},newTablePaneHeader:{check:dE,init:function(w){return new qx.ui.table.pane.Header(w);
}},newTablePaneScroller:{check:dE,init:function(F){return new qx.ui.table.pane.Scroller(F);
}},newTablePaneModel:{check:dE,init:function(cN){return new qx.ui.table.pane.Model(cN);
}}},members:{__zl:null,__zm:null,__zj:null,__zk:null,__zo:null,__zp:null,__zq:null,__zr:null,__zs:null,__zt:null,_createChildControlImpl:function(dg){var dh;

switch(dg){case dA:dh=new qx.ui.basic.Label();
dh.set({allowGrowX:true});
this._add(dh);
break;
case dC:dh=this.getNewColumnMenu()();
dh.set({focusable:false});
var di=dh.factory(dX,{table:this});
di.addListener(dQ,this._initColumnMenu,this);
break;
}return dh||arguments.callee.base.call(this,dg);
},_applySelectionModel:function(t,u){this.__zk.setSelectionModel(t);

if(u!=null){u.removeListener(dw,this._onSelectionChanged,this);
}t.addListener(dw,this._onSelectionChanged,this);
},_applyRowHeight:function(bN,bO){var bP=this._getPaneScrollerArr();

for(var i=0;i<bP.length;i++){bP[i].updateVerScrollBarMaximum();
}},_applyHeaderCellHeight:function(k,m){var n=this._getPaneScrollerArr();

for(var i=0;i<n.length;i++){n[i].getHeader().setHeight(k);
}},getEmptyTableModel:function(){if(!this.__zt){this.__zt=new qx.ui.table.model.Simple();
this.__zt.setColumns([]);
this.__zt.setData([]);
}return this.__zt;
},_applyTableModel:function(dn,dp){this.getTableColumnModel().init(dn.getColumnCount(),this);

if(dp!=null){dp.removeListener(eP,this._onTableModelMetaDataChanged,this);
dp.removeListener(eO,this._onTableModelDataChanged,this);
}dn.addListener(eP,this._onTableModelMetaDataChanged,this);
dn.addListener(eO,this._onTableModelDataChanged,this);
this._updateStatusBar();
this._updateTableData(0,dn.getRowCount(),0,dn.getColumnCount());
this._onTableModelMetaDataChanged();
},getTableColumnModel:function(){if(!this.__zs){var bx=this.__zs=this.getNewTableColumnModel()(this);
bx.addListener(eD,this._onColVisibilityChanged,this);
bx.addListener(es,this._onColWidthChanged,this);
bx.addListener(ea,this._onColOrderChanged,this);
var bw=this.getTableModel();
bx.init(bw.getColumnCount(),this);
var bu=this._getPaneScrollerArr();

for(var i=0;i<bu.length;i++){var bv=bu[i];
var by=bv.getTablePaneModel();
by.setTableColumnModel(bx);
}}return this.__zs;
},_applyStatusBarVisible:function(X,Y){if(X){this._showChildControl(dA);
}else{this._excludeChildControl(dA);
}
if(X){this._updateStatusBar();
}},_applyAdditionalStatusBarText:function(dq,dr){this.__zo=dq;
this._updateStatusBar();
},_applyColumnVisibilityButtonVisible:function(bG,bH){if(bG){this._showChildControl(dC);
}else{this._excludeChildControl(dC);
}},_applyMetaColumnCounts:function(cO,cP){var cW=cO;
var cQ=this._getPaneScrollerArr();
var cU={};

if(cO>cP){var cY=qx.event.Registration.getManager(cQ[0]);

for(var da in qx.ui.table.Table.__zn){cU[da]={};
cU[da].capture=cY.getListeners(cQ[0],da,true);
cU[da].bubble=cY.getListeners(cQ[0],da,false);
}}this._cleanUpMetaColumns(cW.length);
var cV=0;

for(var i=0;i<cQ.length;i++){var db=cQ[i];
var cX=db.getTablePaneModel();
cX.setFirstColumnX(cV);
cX.setMaxColumnCount(cW[i]);
cV+=cW[i];
}if(cW.length>cQ.length){var cT=this.getTableColumnModel();

for(var i=cQ.length;i<cW.length;i++){var cX=this.getNewTablePaneModel()(cT);
cX.setFirstColumnX(cV);
cX.setMaxColumnCount(cW[i]);
cV+=cW[i];
var db=this.getNewTablePaneScroller()(this);
db.setTablePaneModel(cX);
db.addListener(ep,this._onScrollY,this);
for(da in qx.ui.table.Table.__zn){if(!cU[da]){break;
}
if(cU[da].capture&&cU[da].capture.length>0){var cR=cU[da].capture;

for(var i=0;i<cR.length;i++){var cS=cR[i].context;

if(!cS){cS=this;
}else if(cS==cQ[0]){cS=db;
}db.addListener(da,cR[i].handler,cS,true);
}}
if(cU[da].bubble&&cU[da].bubble.length>0){var dd=cU[da].bubble;

for(var i=0;i<dd.length;i++){var cS=dd[i].context;

if(!cS){cS=this;
}else if(cS==cQ[0]){cS=db;
}db.addListener(da,dd[i].handler,cS,false);
}}}var dc=(i==cW.length-1)?1:0;
this.__zj.add(db,{flex:dc});
cQ=this._getPaneScrollerArr();
}}for(var i=0;i<cQ.length;i++){var db=cQ[i];
var de=(i==(cQ.length-1));
db.getHeader().setHeight(this.getHeaderCellHeight());
db.setTopRightWidget(de?this.getChildControl(dC):null);
}
if(!this.isColumnVisibilityButtonVisible()){this._excludeChildControl(dC);
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},_applyFocusCellOnMouseMove:function(cI,cJ){var cK=this._getPaneScrollerArr();

for(var i=0;i<cK.length;i++){cK[i].setFocusCellOnMouseMove(cI);
}},_applyShowCellFocusIndicator:function(bS,bT){var bU=this._getPaneScrollerArr();

for(var i=0;i<bU.length;i++){bU[i].setShowCellFocusIndicator(bS);
}},_applyKeepFirstVisibleRowComplete:function(bI,bJ){var bK=this._getPaneScrollerArr();

for(var i=0;i<bK.length;i++){bK[i].onKeepFirstVisibleRowCompleteChanged();
}},getSelectionManager:function(){return this.__zk;
},_getPaneScrollerArr:function(){return this.__zj.getChildren();
},getPaneScroller:function(I){return this._getPaneScrollerArr()[I];
},_cleanUpMetaColumns:function(V){var W=this._getPaneScrollerArr();

if(W!=null){for(var i=W.length-1;i>=V;i--){W[i].destroy();
}}},_onChangeLocale:function(cH){this.updateContent();
this._updateStatusBar();
},_onSelectionChanged:function(bo){var bp=this._getPaneScrollerArr();

for(var i=0;i<bp.length;i++){bp[i].onSelectionChanged();
}this._updateStatusBar();
},_onTableModelMetaDataChanged:function(bB){var bC=this._getPaneScrollerArr();

for(var i=0;i<bC.length;i++){bC[i].onTableModelMetaDataChanged();
}this._updateStatusBar();
},_onTableModelDataChanged:function(C){var D=C.getData();
this._updateTableData(D.firstRow,D.lastRow,D.firstColumn,D.lastColumn,D.removeStart,D.removeCount);
},_updateTableData:function(bd,be,bf,bg,bh,bi){var bj=this._getPaneScrollerArr();
if(bi){this.getSelectionModel().removeSelectionInterval(bh,bh+bi);
}
for(var i=0;i<bj.length;i++){bj[i].onTableModelDataChanged(bd,be,bf,bg);
}var bk=this.getTableModel().getRowCount();

if(bk!=this.__zp){this.__zp=bk;
this._updateScrollBarVisibility();
this._updateStatusBar();
}},_onScrollY:function(bl){if(!this.__zq){this.__zq=true;
var bm=this._getPaneScrollerArr();

for(var i=0;i<bm.length;i++){bm[i].setScrollY(bl.getData());
}this.__zq=false;
}},_onKeyPress:function(a){if(!this.getEnabled()){return;
}var h=this.__zm;
var e=true;
var j=a.getKeyIdentifier();

if(this.isEditing()){if(a.getModifiers()==0){switch(j){case eQ:this.stopEditing();
var h=this.__zm;
this.moveFocusedCell(0,1);

if(this.__zm!=h){e=this.startEditing();
}break;
case dG:this.cancelEditing();
this.focus();
break;
default:e=false;
break;
}}return;
}else{if(a.isCtrlPressed()){e=true;

switch(j){case dT:var f=this.getTableModel().getRowCount();

if(f>0){this.getSelectionModel().setSelectionInterval(0,f-1);
}break;
default:e=false;
break;
}}else{switch(j){case ew:this.__zk.handleSelectKeyDown(this.__zm,a);
break;
case dP:case eQ:e=this.startEditing();
break;
case ds:this.setFocusedCell(this.__zl,0,true);
break;
case dN:var f=this.getTableModel().getRowCount();
this.setFocusedCell(this.__zl,f-1,true);
break;
case ej:this.moveFocusedCell(-1,0);
break;
case dY:this.moveFocusedCell(1,0);
break;
case eg:this.moveFocusedCell(0,-1);
break;
case ef:this.moveFocusedCell(0,1);
break;
case dy:case dR:var d=this.getPaneScroller(0);
var g=d.getTablePane();
var f=g.getVisibleRowCount()-1;
var c=this.getRowHeight();
var b=(j==dy)?-1:1;
d.setScrollY(d.getScrollY()+b*f*c);
this.moveFocusedCell(0,b*f);
break;
default:e=false;
}}}
if(h!=this.__zm&&this.getRowFocusChangeModifiesSelection()){this.__zk.handleMoveKeyDown(this.__zm,a);
}
if(e){a.preventDefault();
a.stopPropagation();
}},_onFocusChanged:function(bz){var bA=this._getPaneScrollerArr();

for(var i=0;i<bA.length;i++){bA[i].onFocusChanged();
}},_onColVisibilityChanged:function(ba){var bb=this._getPaneScrollerArr();

for(var i=0;i<bb.length;i++){bb[i].onColVisibilityChanged();
}var bc=ba.getData();

if(this.__zr!=null&&bc.col!=null&&bc.visible!=null){this.__zr[bc.col].setVisible(bc.visible);
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},_onColWidthChanged:function(bV){var bW=this._getPaneScrollerArr();

for(var i=0;i<bW.length;i++){var bX=bV.getData();
bW[i].setColumnWidth(bX.col,bX.newWidth);
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},_onColOrderChanged:function(cw){var cx=this._getPaneScrollerArr();

for(var i=0;i<cx.length;i++){cx[i].onColOrderChanged();
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},getTablePaneScrollerAtPageX:function(cL){var cM=this._getMetaColumnAtPageX(cL);
return (cM!=-1)?this.getPaneScroller(cM):null;
},setFocusedCell:function(R,S,T){if(!this.isEditing()&&(R!=this.__zl||S!=this.__zm)){if(R===null){R=0;
}this.__zl=R;
this.__zm=S;
var U=this._getPaneScrollerArr();

for(var i=0;i<U.length;i++){U[i].setFocusedCell(R,S);
}
if(R!==null&&T){this.scrollCellVisible(R,S);
}}},resetSelection:function(){this.getSelectionModel().resetSelection();
},clearSelection:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,dL);
this.resetSelection();
},resetCellFocus:function(){this.setFocusedCell(null,null,false);
},getFocusedColumn:function(){return this.__zl;
},getFocusedRow:function(){return this.__zm;
},highlightFocusedRow:function(v){this.getDataRowRenderer().setHighlightFocusRow(v);
},clearFocusedRowHighlight:function(){this.resetCellFocus();
var bq=this._getPaneScrollerArr();

for(var i=0;i<bq.length;i++){bq[i].onFocusChanged();
}},moveFocusedCell:function(cy,cz){var cD=this.__zl;
var cE=this.__zm;

if(cD===null||cE===null){return;
}
if(cy!=0){var cC=this.getTableColumnModel();
var x=cC.getVisibleX(cD);
var cB=cC.getVisibleColumnCount();
x=qx.lang.Number.limit(x+cy,0,cB-1);
cD=cC.getVisibleColumnAtX(x);
}
if(cz!=0){var cA=this.getTableModel();
cE=qx.lang.Number.limit(cE+cz,0,cA.getRowCount()-1);
}this.setFocusedCell(cD,cE,true);
},scrollCellVisible:function(o,p){var q=this.getTableColumnModel();
var x=q.getVisibleX(o);
var r=this._getMetaColumnAtColumnX(x);

if(r!=-1){this.getPaneScroller(r).scrollCellVisible(o,p);
}},isEditing:function(){if(this.__zl!=null){var x=this.getTableColumnModel().getVisibleX(this.__zl);
var bQ=this._getMetaColumnAtColumnX(x);
return this.getPaneScroller(bQ).isEditing();
}return false;
},startEditing:function(){if(this.__zl!=null){var x=this.getTableColumnModel().getVisibleX(this.__zl);
var bs=this._getMetaColumnAtColumnX(x);
var br=this.getPaneScroller(bs).startEditing();
return br;
}return false;
},stopEditing:function(){if(this.__zl!=null){var x=this.getTableColumnModel().getVisibleX(this.__zl);
var eR=this._getMetaColumnAtColumnX(x);
this.getPaneScroller(eR).stopEditing();
}},cancelEditing:function(){if(this.__zl!=null){var x=this.getTableColumnModel().getVisibleX(this.__zl);
var E=this._getMetaColumnAtColumnX(x);
this.getPaneScroller(E).cancelEditing();
}},updateContent:function(){var s=this._getPaneScrollerArr();

for(var i=0;i<s.length;i++){s[i].getTablePane().updateContent();
}},_getMetaColumnAtPageX:function(bD){var bE=this._getPaneScrollerArr();

for(var i=0;i<bE.length;i++){var bF=bE[i].getContainerLocation();

if(bD>=bF.left&&bD<=bF.right){return i;
}}return -1;
},_getMetaColumnAtColumnX:function(dj){var dl=this.getMetaColumnCounts();
var dm=0;

for(var i=0;i<dl.length;i++){var dk=dl[i];
dm+=dk;

if(dk==-1||dj<dm){return i;
}}return -1;
},_updateStatusBar:function(){var J=this.getTableModel();

if(this.getStatusBarVisible()){var K=this.getSelectionModel().getSelectedCount();
var M=J.getRowCount();
var L;

if(M>=0){if(K==0){L=this.trn(dW,dt,M,M);
}else{L=this.trn(dK,dS,M,K,M);
}}
if(this.__zo){if(L){L+=this.__zo;
}else{L=this.__zo;
}}
if(L){this.getChildControl(dA).setValue(L);
}}},_updateScrollerWidths:function(){var N=this._getPaneScrollerArr();

for(var i=0;i<N.length;i++){var P=(i==(N.length-1));
var Q=N[i].getTablePaneModel().getTotalWidth();
N[i].setPaneWidth(Q);
var O=P?1:0;
N[i].setLayoutProperties({flex:O});
}},_updateScrollBarVisibility:function(){if(!this.getBounds()){return;
}var cn=qx.ui.table.pane.Scroller.HORIZONTAL_SCROLLBAR;
var cq=qx.ui.table.pane.Scroller.VERTICAL_SCROLLBAR;
var ck=this._getPaneScrollerArr();
var cm=false;
var cp=false;

for(var i=0;i<ck.length;i++){var cr=(i==(ck.length-1));
var cl=ck[i].getNeededScrollBars(cm,!cr);

if(cl&cn){cm=true;
}
if(cr&&(cl&cq)){cp=true;
}}for(var i=0;i<ck.length;i++){var cr=(i==(ck.length-1));
var co;
ck[i].setHorizontalScrollBarVisible(cm);
if(cr){co=ck[i].getVerticalScrollBarVisible();
}ck[i].setVerticalScrollBarVisible(cr&&cp);
if(cr&&cp!=co){this.fireDataEvent(dM,cp);
}}},_initColumnMenu:function(){var cf=this.getTableModel();
var cg=this.getTableColumnModel();
var ch=this.getChildControl(dC);
ch.empty();
var ce=ch.getMenu();
var ci={table:this,menu:ce,columnButton:ch};
this.fireDataEvent(eK,ci);
this.__zr={};

for(var cj=0,l=cf.getColumnCount();cj<l;cj++){var cd=ch.factory(eu,{text:cf.getColumnName(cj),column:cj,bVisible:cg.isColumnVisible(cj)});
qx.core.Assert.assertInterface(cd,qx.ui.table.IColumnMenuItem);
cd.addListener(ed,this._createColumnVisibilityCheckBoxHandler(cj),this);
this.__zr[cj]=cd;
}var ci={table:this,menu:ce,columnButton:ch};
this.fireDataEvent(eH,ci);
},_createColumnVisibilityCheckBoxHandler:function(df){return function(bL){var bM=this.getTableColumnModel();
bM.setColumnVisible(df,bL.getData());
};
},setColumnWidth:function(cF,cG){this.getTableColumnModel().setColumnWidth(cF,cG);
},_onResize:function(){this.fireEvent(ez);
this._updateScrollerWidths();
this._updateScrollBarVisibility();
},addListener:function(cs,ct,self,cu){if(arguments.callee.self.__zn[cs]){for(var i=0,cv=this._getPaneScrollerArr();i<cv.length;i++){cv[i].addListener.apply(cv[i],arguments);
}}else{return arguments.callee.base.call(this,cs,ct,self,cu);
}},removeListener:function(y,z,self,A){if(arguments.callee.self.__zn[y]){for(var i=0,B=this._getPaneScrollerArr();i<B.length;i++){B[i].removeListener.apply(B[i],arguments);
}}else{arguments.callee.base.call(this,y,z,self,A);
}},destroy:function(){this.getChildControl(dC).getMenu().destroy();
arguments.callee.base.call(this);
}},destruct:function(){if(qx.core.Variant.isSet(dv,eM)){qx.locale.Manager.getInstance().removeListener(dx,this._onChangeLocale,this);
}var H=this.getSelectionModel();

if(H){H.dispose();
}var G=this.getDataRowRenderer();

if(G){G.dispose();
}this._cleanUpMetaColumns(0);
this.getTableColumnModel().dispose();
this._disposeObjects(eE,eB,eN,eN,eF);
this._disposeMap(ev);
}});
})();
