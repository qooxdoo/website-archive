qx.$$packageData['c4438c8222db']={"locales":{},"resources":{"qx/icon/Tango/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/media-audio.png":[16,16,"png","qx"],"qx/icon/Tango/16/status/dialog-warning.png":[16,16,"png","qx"]},"translations":{"C":{},"de":{"%1 of %2 rows":"%1 von %2 Zeilen","%1 rows":"%1 Zeilen","Reset column widths":"Spaltenbreite zurücksetzen","one of one row":"Eine von einer Zeile","one row":"Eine Zeile"},"de_AT":{},"de_DE":{},"en":{},"en_GB":{},"en_US":{},"es":{"%1 of %2 rows":"%1 de %2 filas","%1 rows":"%1 filas","Reset column widths":"Reestablecer anchos de columnas","one of one row":"una de una fila","one row":"una fila"},"es_ES":{},"es_MX":{}}};

qx.Part.$$notifyLoad("c4438c8222db", function() {
(function(){var a="qx.ui.table.ICellRenderer";
qx.Interface.define(a,{members:{createDataCellHtml:function(b,c){return true;
}}});
})();
(function(){var k="",j="px;",i=".qooxdoo-table-cell {",h="qooxdoo-table-cell",g='" ',f="nowrap",e="default",d="qx.client",c="}",b="width:",I=".qooxdoo-table-cell-right { text-align:right } ",H="0px 6px",G='<div class="',F="0px",E="height:",D="1px solid ",C=".qooxdoo-table-cell-bold { font-weight:bold } ",B="table-row-line",A="String",z='>',r="mshtml",s='</div>',p="ellipsis",q="content-box",n='left:',o="qx.ui.table.cellrenderer.Abstract",l='" style="',m="abstract",t="none",u="hidden",w="} ",v='px;',y=".qooxdoo-table-cell-italic { font-style:italic} ",x="absolute";
qx.Class.define(o,{type:m,implement:qx.ui.table.ICellRenderer,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
var J=qx.ui.table.cellrenderer.Abstract;

if(!J.__vl){var L=qx.theme.manager.Color.getInstance();
J.__vl=this.self(arguments);
var K=i+
qx.bom.element.Style.compile({position:x,top:F,overflow:u,whiteSpace:f,borderRight:D+L.resolve(B),padding:H,cursor:e,textOverflow:p,userSelect:t})+w+I+y+C;

if(!qx.core.Variant.isSet(d,r)){K+=i+qx.bom.element.BoxSizing.compile(q)+c;
}J.__vl.stylesheet=qx.bom.Stylesheet.createElement(K);
}},properties:{defaultCellStyle:{init:null,check:A,nullable:true}},members:{_insetX:6+6+1,_insetY:0,_getCellClass:function(O){return h;
},_getCellStyle:function(Q){return Q.style||k;
},_getCellAttributes:function(P){return k;
},_getContentHtml:function(a){return a.value||k;
},_getCellSizeStyle:function(R,S,T,U){var V=k;

if(qx.bom.client.Feature.CONTENT_BOX){R-=T;
S-=U;
}V+=b+Math.max(R,0)+j;
V+=E+Math.max(S,0)+j;
return V;
},createDataCellHtml:function(M,N){N.push(G,this._getCellClass(M),l,n,M.styleLeft,v,this._getCellSizeStyle(M.styleWidth,M.styleHeight,this._insetX,this._insetY),this._getCellStyle(M),g,this._getCellAttributes(M),z+this._getContentHtml(M),s);
}}});
})();
(function(){var b="qx.ui.table.IColumnMenuItem",a="qx.event.type.Data";
qx.Interface.define(b,{properties:{visible:{}},events:{changeVisible:a}});
})();
(function(){var k="icon",j="label",i="String",h="sort-icon",g="_applySortIcon",f="_applyIcon",e="table-header-cell",d="qx.ui.table.headerrenderer.HeaderCell",c="_applyLabel";
qx.Class.define(d,{extend:qx.ui.container.Composite,construct:function(){qx.ui.container.Composite.call(this);
var p=new qx.ui.layout.Grid();
p.setRowFlex(0,1);
p.setColumnFlex(1,1);
p.setColumnFlex(2,1);
this.setLayout(p);
},properties:{appearance:{refine:true,init:e},label:{check:i,init:null,nullable:true,apply:c},sortIcon:{check:i,init:null,nullable:true,apply:g,themeable:true},icon:{check:i,init:null,nullable:true,apply:f}},members:{_applyLabel:function(q,r){if(q){this._showChildControl(j).setValue(q);
}else{this._excludeChildControl(j);
}},_applySortIcon:function(a,b){if(a){this._showChildControl(h).setSource(a);
}else{this._excludeChildControl(h);
}},_applyIcon:function(l,m){if(l){this._showChildControl(k).setSource(l);
}else{this._excludeChildControl(k);
}},_createChildControlImpl:function(n){var o;

switch(n){case j:o=new qx.ui.basic.Label(this.getLabel()).set({anonymous:true,allowShrinkX:true});
this._add(o,{row:0,column:1});
break;
case h:o=new qx.ui.basic.Image(this.getSortIcon());
o.setAnonymous(true);
this._add(o,{row:0,column:2});
break;
case k:o=new qx.ui.basic.Image(this.getIcon()).set({anonymous:true,allowShrinkX:true});
this._add(o,{row:0,column:0});
break;
}return o||qx.ui.container.Composite.prototype._createChildControlImpl.call(this,n);
}}});
})();
(function(){var c="qx.event.type.Data",b="qx.event.type.Event",a="qx.ui.table.ITableModel";
qx.Interface.define(a,{events:{"dataChanged":c,"metaDataChanged":b,"sorted":c},members:{getRowCount:function(){},getRowData:function(f){},getColumnCount:function(){},getColumnId:function(g){},getColumnIndexById:function(p){},getColumnName:function(o){},isColumnEditable:function(d){},isColumnSortable:function(e){},sortByColumn:function(s,t){},getSortColumnIndex:function(){},isSortAscending:function(){},prefetchRows:function(q,r){},getValue:function(j,k){},getValueById:function(h,i){},setValue:function(l,m,n){},setValueById:function(u,v,w){}}});
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
(function(){var B="",A="==",z=">",y="between",x="<",w="regex",v="!between",u=">=",t="!=",s="<=",m="font-weight",r=";",p="text-align",l='g',k=":",o="qx.ui.table.cellrenderer.Conditional",n="color",q="font-style";
qx.Class.define(o,{extend:qx.ui.table.cellrenderer.Default,construct:function(C,D,E,F){qx.ui.table.cellrenderer.Default.call(this);
this.numericAllowed=[A,t,z,x,u,s];
this.betweenAllowed=[y,v];
this.conditions=[];
this.__zv=C||B;
this.__zw=D||B;
this.__zx=E||B;
this.__zy=F||B;
},members:{__zv:null,__zw:null,__zx:null,__zy:null,__zz:function(N,O){if(N[1]!=null){O[p]=N[1];
}
if(N[2]!=null){O[n]=N[2];
}
if(N[3]!=null){O[q]=N[3];
}
if(N[4]!=null){O[m]=N[4];
}},addNumericCondition:function(X,Y,ba,bb,bc,bd,be){var bf=null;

if(qx.lang.Array.contains(this.numericAllowed,X)){if(Y!=null){bf=[X,ba,bb,bc,bd,Y,be];
}}
if(bf!=null){this.conditions.push(bf);
}else{throw new Error("Condition not recognized or value is null!");
}},addBetweenCondition:function(a,b,c,d,e,f,g,h){if(qx.lang.Array.contains(this.betweenAllowed,a)){if(b!=null&&c!=null){var j=[a,d,e,f,g,b,c,h];
}}
if(j!=null){this.conditions.push(j);
}else{throw new Error("Condition not recognized or value1/value2 is null!");
}},addRegex:function(G,H,I,J,K,L){if(G!=null){var M=[w,H,I,J,K,G,L];
}
if(M!=null){this.conditions.push(M);
}else{throw new Error("regex cannot be null!");
}},_getCellStyle:function(P){if(!this.conditions.length){return P.style||B;
}var U=P.table.getTableModel();
var i;
var W;
var Q;
var S={"text-align":this.__zv,"color":this.__zw,"font-style":this.__zx,"font-weight":this.__zy};

for(i in this.conditions){W=false;

if(qx.lang.Array.contains(this.numericAllowed,this.conditions[i][0])){if(this.conditions[i][6]==null){Q=P.value;
}else{Q=U.getValueById(this.conditions[i][6],P.row);
}
switch(this.conditions[i][0]){case A:if(Q==this.conditions[i][5]){W=true;
}break;
case t:if(Q!=this.conditions[i][5]){W=true;
}break;
case z:if(Q>this.conditions[i][5]){W=true;
}break;
case x:if(Q<this.conditions[i][5]){W=true;
}break;
case u:if(Q>=this.conditions[i][5]){W=true;
}break;
case s:if(Q<=this.conditions[i][5]){W=true;
}break;
}}else if(qx.lang.Array.contains(this.betweenAllowed,this.conditions[i][0])){if(this.conditions[i][7]==null){Q=P.value;
}else{Q=U.getValueById(this.conditions[i][7],P.row);
}
switch(this.conditions[i][0]){case y:if(Q>=this.conditions[i][5]&&Q<=this.conditions[i][6]){W=true;
}break;
case v:if(Q<this.conditions[i][5]&&Q>this.conditions[i][6]){W=true;
}break;
}}else if(this.conditions[i][0]==w){if(this.conditions[i][6]==null){Q=P.value;
}else{Q=U.getValueById(this.conditions[i][6],P.row);
}var R=new RegExp(this.conditions[i][5],l);
W=R.test(Q);
}if(W==true){this.__zz(this.conditions[i],S);
}}var V=[];

for(var T in S){if(S[T]){V.push(T,k,S[T],r);
}}return V.join(B);
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
qx.Class.define(b,{extend:qx.ui.table.headerrenderer.Default,construct:function(f,g){qx.ui.table.headerrenderer.Default.call(this);

if(f==null){f=c;
}this.setIconUrl(f);

if(g){this.setToolTip(g);
}},properties:{iconUrl:{check:a,init:c}},members:{updateHeaderCell:function(d,e){qx.ui.table.headerrenderer.Default.prototype.updateHeaderCell.call(this,d,e);
e.setIcon(this.getIconUrl());
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
(function(){var p="",o="Year",n="loading ...",m="Title",l="Explicit",k="icon/16/mimetypes/media-audio.png",h="showcase.page.table.Content.saveResult",g="Chart Pos.",f="this",e="0",B="2*",A="1*",z="icon/16/apps/office-calendar.png",y="env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=",x="Artist",w="select * from music.track.popular",v="Popular Music Tracks",u=", ",t="http://query.yahooapis.com/v1/public/yql?q=",s="icon/16/status/dialog-warning.png",q="showcase.page.table.Content",r="&format=json&diagnostics=false&";
qx.Class.define(q,{extend:showcase.page.AbstractDesktopContent,construct:function(H){showcase.page.AbstractDesktopContent.call(this,H);
},statics:{saveResult:function(J){this._result=J;
}},members:{_addWindowContent:function(K){var P=[[0,n,n,0,false]];
var N=this._tableModel=new qx.ui.table.model.Simple();
N.setColumns([g,m,x,o,l]);
N.setData(P);
N.setColumnEditable(1,true);
N.setColumnEditable(2,true);
N.setColumnSortable(3,true);
var M={tableColumnModel:function(I){return new qx.ui.table.columnmodel.Resize(I);
}};
var Q=new qx.ui.table.Table(N,M);
Q.set({width:540,height:400,decorator:null,headerCellHeight:null});
Q.getSelectionModel().setSelectionMode(qx.ui.table.selection.Model.MULTIPLE_INTERVAL_SELECTION);
var O=Q.getTableColumnModel();
O.setDataCellRenderer(0,new qx.ui.table.cellrenderer.Number());
O.setDataCellRenderer(3,new qx.ui.table.cellrenderer.Number());
O.setDataCellRenderer(4,new qx.ui.table.cellrenderer.Boolean());
O.setHeaderCellRenderer(1,new qx.ui.table.headerrenderer.Icon(k,m));
O.setHeaderCellRenderer(3,new qx.ui.table.headerrenderer.Icon(z,o));
O.setHeaderCellRenderer(4,new qx.ui.table.headerrenderer.Icon(s,l));
var L=O.getBehavior();
L.set(1,{width:B,minWidth:60});
L.set(2,{width:A,minWidth:60});
L.setWidth(0,80);
L.setWidth(3,70);
L.setWidth(4,85);
K.setCaption(v);
K.setLayout(new qx.ui.layout.Grow());
K.add(Q);
this._loadData(N);
},_loadData:function(a){var c=w;
var b=t+encodeURIComponent(c)+r+y+h;
var d=new qx.io.ScriptLoader();
d.load(b,function(){var E=showcase.page.table.Content._result;
var D=[];
var C=E.query.results.Track;

for(var i=0;i<C.length;i++){var G=[];
G.push(parseInt(C[i].ItemInfo.ChartPosition[f]));
G.push(C[i].title||p);

if(C[i].Artist instanceof Array){var F=p;

for(var j=0;j<C[i].Artist.length;j++){if(j!=0){F+=u;
}F+=C[i].Artist[j].name;
}G.push(F);
}else{G.push(C[i].Artist.name||p);
}G.push(parseInt(C[i].releaseYear));
G.push(C[i].explicit!==e);
D.push(G);
}a.setData(D);
});
}}});
})();
(function(){var g="Integer",f="Escape",d="keypress",c="Enter",b="excluded",a="qx.ui.table.pane.FocusIndicator";
qx.Class.define(a,{extend:qx.ui.container.Composite,construct:function(h){qx.ui.container.Composite.call(this);
this.__wF=h;
this.setKeepActive(true);
this.addListener(d,this._onKeyPress,this);
},properties:{visibility:{refine:true,init:b},row:{check:g,nullable:true},column:{check:g,nullable:true}},members:{__wF:null,_onKeyPress:function(e){var q=e.getKeyIdentifier();

if(q!==f&&q!==c){e.stopPropagation();
}},moveToCell:function(i,j){if(!this.__wF.getShowCellFocusIndicator()&&!this.__wF.getTable().getTableModel().isColumnEditable(i)){this.exclude();
return;
}else{this.show();
}
if(i==null){this.hide();
this.setRow(null);
this.setColumn(null);
}else{var k=this.__wF.getTablePaneModel().getX(i);

if(k==-1){this.hide();
this.setRow(null);
this.setColumn(null);
}else{var p=this.__wF.getTable();
var n=p.getTableColumnModel();
var o=this.__wF.getTablePaneModel();
var m=this.__wF.getTablePane().getFirstVisibleRow();
var l=p.getRowHeight();
this.setUserBounds(o.getColumnLeft(i)-2,(j-m)*l-2,n.getColumnWidth(i)+3,l+3);
this.show();
this.setRow(j);
this.setColumn(i);
}}}},destruct:function(){this.__wF=null;
}});
})();
(function(){var y="",x="!",w="'!",v="'",u="Expected '",t="' (rgb(",s=",",r=")), but found value '",q="Event (",p="Expected value to be the CSS color '",bF="' but found ",bE="The value '",bD=" != ",bC="qx.core.Object",bB="Expected value to be an array but found ",bA=") was fired.",bz="Expected value to be an integer >= 0 but found ",by="' to be not equal with '",bx="' to '",bw="qx.ui.core.Widget",F="Called assertTrue with '",G="Expected value to be a map but found ",D="The function did not raise an exception!",E="Expected value to be undefined but found ",B="Expected value to be a DOM element but found  '",C="Expected value to be a regular expression but found ",z="' to implement the interface '",A="Expected value to be null but found ",N="Invalid argument 'type'",O="Called assert with 'false'",bb="Assertion error! ",W="Expected value to be a string but found ",bj="null",be="' but found '",bs="' must must be a key of the map '",bo="The String '",S="Expected value not to be undefined but found ",bv="qx.util.ColorUtil",bu=": ",bt="The raised exception does not have the expected type! ",R=") not fired.",U="qx.core.Assert",V="Expected value to be typeof object but found ",Y="' (identical) but found '",bc="' must have any of the values defined in the array '",bf="Expected value to be a number but found ",bl="Called assertFalse with '",bq="]",H="Expected value to be a qooxdoo object but found ",I="' arguments.",T="Expected value not to be null but found ",bi="Array[",bh="' does not match the regular expression '",bg="' to be not identical with '",bn="' arguments but found '",bm="', which cannot be converted to a CSS color!",bd="Expected object '",bk="qx.core.AssertionError",m="Expected value to be a boolean but found ",bp="))!",J="Expected value to be a qooxdoo widget but found ",K="Expected value '%1' to be in the range '%2'..'%3'!",X="Expected value to be typeof '",n="Expected value to be typeof function but found ",o="Expected value to be an integer but found ",Q="Called fail().",L="The parameter 're' must be a string or a regular expression.",M="Expected value to be a number >= 0 but found ",P="Expected value to be instanceof '",ba="Wrong number of arguments given. Expected '",br="object";
qx.Class.define(U,{statics:{__sM:true,__sN:function(dz,dA){var dB=y;

for(var i=1,l=arguments.length;i<l;i++){dB=dB+this.__sO(arguments[i]);
}var dD=bb+dz+bu+dB;

if(this.__sM){qx.Bootstrap.error(dD);
}
if(qx.Class.isDefined(bk)){var dC=new qx.core.AssertionError(dz,dB);

if(this.__sM){qx.Bootstrap.error("Stack trace: \n"+dC.getStackTrace());
}throw dC;
}else{throw new Error(dD);
}},__sO:function(dd){var de;

if(dd===null){de=bj;
}else if(qx.lang.Type.isArray(dd)&&dd.length>10){de=bi+dd.length+bq;
}else if((dd instanceof Object)&&(dd.toString==null)){de=qx.lang.Json.stringify(dd,null,2);
}else{try{de=dd.toString();
}catch(e){de=y;
}}return de;
},assert:function(j,k){j==true||this.__sN(k||y,O);
},fail:function(cM){this.__sN(cM||y,Q);
},assertTrue:function(ck,cl){(ck===true)||this.__sN(cl||y,F,ck,v);
},assertFalse:function(du,dv){(du===false)||this.__sN(dv||y,bl,du,v);
},assertEquals:function(dQ,dR,dS){dQ==dR||this.__sN(dS||y,u,dQ,be,dR,w);
},assertNotEquals:function(dV,dW,dX){dV!=dW||this.__sN(dX||y,u,dV,by,dW,w);
},assertIdentical:function(dM,dN,dO){dM===dN||this.__sN(dO||y,u,dM,Y,dN,w);
},assertNotIdentical:function(cf,cg,ch){cf!==cg||this.__sN(ch||y,u,cf,bg,cg,w);
},assertNotUndefined:function(bR,bS){bR!==undefined||this.__sN(bS||y,S,bR,x);
},assertUndefined:function(db,dc){db===undefined||this.__sN(dc||y,E,db,x);
},assertNotNull:function(ds,dt){ds!==null||this.__sN(dt||y,T,ds,x);
},assertNull:function(dE,dF){dE===null||this.__sN(dF||y,A,dE,x);
},assertJsonEquals:function(dw,dx,dy){this.assertEquals(qx.lang.Json.stringify(dw),qx.lang.Json.stringify(dx),dy);
},assertMatch:function(df,dg,dh){this.assertString(df);
this.assert(qx.lang.Type.isRegExp(dg)||qx.lang.Type.isString(dg),L);
df.search(dg)>=0||this.__sN(dh||y,bo,df,bh,dg.toString(),w);
},assertArgumentsCount:function(c,d,f,g){var h=c.length;
(h>=d&&h<=f)||this.__sN(g||y,ba,d,bx,f,bn,arguments.length,I);
},assertEventFired:function(cF,event,cG,cH,cI){var cK=false;
var cJ=function(e){if(cH){cH.call(cF,e);
}cK=true;
};
var cL=cF.addListener(event,cJ,cF);
cG.call();
cK===true||this.__sN(cI||y,q,event,R);
cF.removeListenerById(cL);
},assertEventNotFired:function(cm,event,cn,co){var cq=false;
var cp=function(e){cq=true;
};
var cr=cm.addListener(event,cp,cm);
cn.call();
cq===false||this.__sN(co||y,q,event,bA);
cm.removeListenerById(cr);
},assertException:function(bX,bY,ca,cb){var bY=bY||Error;
var cc;

try{this.__sM=false;
bX();
}catch(dL){cc=dL;
}finally{this.__sM=true;
}
if(cc==null){this.__sN(cb||y,D);
}cc instanceof bY||this.__sN(cb||y,bt,bY,bD,cc);

if(ca){this.assertMatch(cc.toString(),ca,cb);
}},assertInArray:function(cv,cw,cx){cw.indexOf(cv)!==-1||this.__sN(cx||y,bE,cv,bc,cw,v);
},assertArrayEquals:function(cs,ct,cu){this.assertArray(cs,cu);
this.assertArray(ct,cu);
this.assertEquals(cs.length,ct.length,cu);

for(var i=0;i<cs.length;i++){this.assertIdentical(cs[i],ct[i],cu);
}},assertKeyInMap:function(cA,cB,cC){cB[cA]!==undefined||this.__sN(cC||y,bE,cA,bs,cB,v);
},assertFunction:function(dq,dr){qx.lang.Type.isFunction(dq)||this.__sN(dr||y,n,dq,x);
},assertString:function(cD,cE){qx.lang.Type.isString(cD)||this.__sN(cE||y,W,cD,x);
},assertBoolean:function(cP,cQ){qx.lang.Type.isBoolean(cP)||this.__sN(cQ||y,m,cP,x);
},assertNumber:function(dG,dH){(qx.lang.Type.isNumber(dG)&&isFinite(dG))||this.__sN(dH||y,bf,dG,x);
},assertPositiveNumber:function(cd,ce){(qx.lang.Type.isNumber(cd)&&isFinite(cd)&&cd>=0)||this.__sN(ce||y,M,cd,x);
},assertInteger:function(dT,dU){(qx.lang.Type.isNumber(dT)&&isFinite(dT)&&dT%1===0)||this.__sN(dU||y,o,dT,x);
},assertPositiveInteger:function(bO,bP){var bQ=(qx.lang.Type.isNumber(bO)&&isFinite(bO)&&bO%1===0&&bO>=0);
bQ||this.__sN(bP||y,bz,bO,x);
},assertInRange:function(bT,bU,bV,bW){(bT>=bU&&bT<=bV)||this.__sN(bW||y,qx.lang.String.format(K,[bT,bU,bV]));
},assertObject:function(bG,bH){var bI=bG!==null&&(qx.lang.Type.isObject(bG)||typeof bG===br);
bI||this.__sN(bH||y,V,(bG),x);
},assertArray:function(cV,cW){qx.lang.Type.isArray(cV)||this.__sN(cW||y,bB,cV,x);
},assertMap:function(ci,cj){qx.lang.Type.isObject(ci)||this.__sN(cj||y,G,ci,x);
},assertRegExp:function(bJ,bK){qx.lang.Type.isRegExp(bJ)||this.__sN(bK||y,C,bJ,x);
},assertType:function(dI,dJ,dK){this.assertString(dJ,N);
typeof (dI)===dJ||this.__sN(dK||y,X,dJ,bF,dI,x);
},assertInstance:function(cR,cS,cT){var cU=cS.classname||cS+y;
cR instanceof cS||this.__sN(cT||y,P,cU,bF,cR,x);
},assertInterface:function(bL,bM,bN){qx.Class.implementsInterface(bL,bM)||this.__sN(bN||y,bd,bL,z,bM,w);
},assertCssColor:function(di,dj,dk){var dl=qx.Class.getByName(bv);

if(!dl){throw new Error("qx.util.ColorUtil not available! Your code must have a dependency on 'qx.util.ColorUtil'");
}var dn=dl.stringToRgb(di);

try{var dm=dl.stringToRgb(dj);
}catch(dP){this.__sN(dk||y,p,di,t,dn.join(s),r,dj,bm);
}var dp=dn[0]==dm[0]&&dn[1]==dm[1]&&dn[2]==dm[2];
dp||this.__sN(dk||y,p,dn,t,dn.join(s),r,dj,t,dm.join(s),bp);
},assertElement:function(a,b){!!(a&&a.nodeType===1)||this.__sN(b||y,B,a,w);
},assertQxObject:function(cN,cO){this.__sP(cN,bC)||this.__sN(cO||y,H,cN,x);
},assertQxWidget:function(cy,cz){this.__sP(cy,bw)||this.__sN(cz||y,J,cy,x);
},__sP:function(cX,cY){if(!cX){return false;
}var da=cX.constructor;

while(da){if(da.classname===cY){return true;
}da=da.superclass;
}return false;
}}});
})();
(function(){var bo="",bn="Number",bm='</div>',bl='" ',bk="paneUpdated",bj='<div>',bi="</div>",bh="overflow: hidden;",bg="qx.event.type.Data",bf="paneReloadsData",bG="div",bF='style="',bE="_applyMaxCacheLines",bD="qx.ui.table.pane.Pane",bC="width: 100%;",bB="qx.event.type.Event",bA="_applyVisibleRowCount",bz='>',by="line-height: ",bx="appear",bv='class="',bw="width:100%;",bt="px;",bu='<div ',br="'>",bs="_applyFirstVisibleRow",bp="<div style='",bq=";position:relative;";
qx.Class.define(bD,{extend:qx.ui.core.Widget,construct:function(bH){qx.ui.core.Widget.call(this);
this.__vH=bH;
this.__vI=0;
this.__vJ=0;
this.__vK=[];
},events:{"paneReloadsData":bg,"paneUpdated":bB},properties:{firstVisibleRow:{check:bn,init:0,apply:bs},visibleRowCount:{check:bn,init:0,apply:bA},maxCacheLines:{check:bn,init:1000,apply:bE},allowShrinkX:{refine:true,init:false}},members:{__vJ:null,__vI:null,__vH:null,__vL:null,__vM:null,__vN:null,__vK:null,__vO:0,_applyFirstVisibleRow:function(a,b){this.updateContent(false,a-b);
},_applyVisibleRowCount:function(c,d){this.updateContent(true);
},_getContentHint:function(){return {width:this.getPaneScroller().getTablePaneModel().getTotalWidth(),height:400};
},getPaneScroller:function(){return this.__vH;
},getTable:function(){return this.__vH.getTable();
},setFocusedCell:function(O,P,Q){if(O!=this.__vN||P!=this.__vM){var R=this.__vM;
this.__vN=O;
this.__vM=P;
if(P!=R&&!Q){if(R!==null){this.updateContent(false,null,R,true);
}
if(P!==null){this.updateContent(false,null,P,true);
}}}},onSelectionChanged:function(){this.updateContent(false,null,null,true);
},onFocusChanged:function(){this.updateContent(false,null,null,true);
},setColumnWidth:function(cz,cA){this.updateContent(true);
},onColOrderChanged:function(){this.updateContent(true);
},onPaneModelChanged:function(){this.updateContent(true);
},onTableModelDataChanged:function(g,h,j,k){this.__vP();
var m=this.getFirstVisibleRow();
var l=this.getVisibleRowCount();

if(h==-1||h>=m&&g<m+l){this.updateContent();
}},onTableModelMetaDataChanged:function(){this.updateContent(true);
},_applyMaxCacheLines:function(e,f){if(this.__vO>=e&&e!==-1){this.__vP();
}},__vP:function(){this.__vK=[];
this.__vO=0;
},__vQ:function(n,o,p){if(!o&&!p&&this.__vK[n]){return this.__vK[n];
}else{return null;
}},__vR:function(F,G,H,I){var J=this.getMaxCacheLines();

if(!H&&!I&&!this.__vK[F]&&J>0){this._applyMaxCacheLines(J);
this.__vK[F]=G;
this.__vO+=1;
}},updateContent:function(K,L,M,N){if(K){this.__vP();
}if(L&&Math.abs(L)<=Math.min(10,this.getVisibleRowCount())){this._scrollContent(L);
}else if(N&&!this.getTable().getAlwaysUpdateCells()){this._updateRowStyles(M);
}else{this._updateAllRows();
}},_updateRowStyles:function(T){var X=this.getContentElement().getDomElement();

if(!X||!X.firstChild){this._updateAllRows();
return;
}var bc=this.getTable();
var V=bc.getSelectionModel();
var Y=bc.getTableModel();
var bd=bc.getDataRowRenderer();
var W=X.firstChild.childNodes;
var bb={table:bc};
var be=this.getFirstVisibleRow();
var y=0;
var U=W.length;

if(T!=null){var ba=T-be;

if(ba>=0&&ba<U){be=T;
y=ba;
U=ba+1;
}else{return;
}}
for(;y<U;y++,be++){bb.row=be;
bb.selected=V.isSelectedIndex(be);
bb.focusedRow=(this.__vM==be);
bb.rowData=Y.getRowData(be);
bd.updateDataRowElement(bb,W[y]);
}},_getRowsHtml:function(bU,bV){var cc=this.getTable();
var cf=cc.getSelectionModel();
var bY=cc.getTableModel();
var ca=cc.getTableColumnModel();
var cu=this.getPaneScroller().getTablePaneModel();
var ck=cc.getDataRowRenderer();
bY.prefetchRows(bU,bU+bV-1);
var cr=cc.getRowHeight();
var ct=cu.getColumnCount();
var cb=0;
var bX=[];
for(var x=0;x<ct;x++){var cx=cu.getColumnAtX(x);
var ce=ca.getColumnWidth(cx);
bX.push({col:cx,xPos:x,editable:bY.isColumnEditable(cx),focusedCol:this.__vN==cx,styleLeft:cb,styleWidth:ce});
cb+=ce;
}var cw=[];
var cy=false;

for(var cd=bU;cd<bU+bV;cd++){var cg=cf.isSelectedIndex(cd);
var cj=(this.__vM==cd);
var co=this.__vQ(cd,cg,cj);

if(co){cw.push(co);
continue;
}var bW=[];
var cq={table:cc};
cq.styleHeight=cr;
cq.row=cd;
cq.selected=cg;
cq.focusedRow=cj;
cq.rowData=bY.getRowData(cd);

if(!cq.rowData){cy=true;
}bW.push(bu);
var cn=ck.getRowAttributes(cq);

if(cn){bW.push(cn);
}var cm=ck.getRowClass(cq);

if(cm){bW.push(bv,cm,bl);
}var cl=ck.createRowStyle(cq);
cl+=bq+ck.getRowHeightStyle(cr)+bw;

if(cl){bW.push(bF,cl,bl);
}bW.push(bz);
var cv=false;

for(x=0;x<ct&&!cv;x++){var ch=bX[x];

for(var cs in ch){cq[cs]=ch[cs];
}var cx=cq.col;
cq.value=bY.getValue(cx,cd);
var ci=ca.getDataCellRenderer(cx);
cq.style=ci.getDefaultCellStyle();
cv=ci.createDataCellHtml(cq,bW)||false;
}bW.push(bm);
var cp=bW.join(bo);
this.__vR(cd,cp,cg,cj);
cw.push(cp);
}this.fireDataEvent(bf,cy);
return cw.join(bo);
},_scrollContent:function(q){var r=this.getContentElement().getDomElement();

if(!(r&&r.firstChild)){this._updateAllRows();
return;
}var C=r.firstChild;
var s=C.childNodes;
var A=this.getVisibleRowCount();
var z=this.getFirstVisibleRow();
var v=this.getTable().getTableModel();
var D=0;
D=v.getRowCount();
if(z+A>D){this._updateAllRows();
return;
}var E=q<0?A+q:0;
var t=q<0?0:A-q;

for(i=Math.abs(q)-1;i>=0;i--){var w=s[E];

try{C.removeChild(w);
}catch(S){break;
}}if(!this.__vL){this.__vL=document.createElement(bG);
}var B=bj;
B+=this._getRowsHtml(z+t,Math.abs(q));
B+=bm;
this.__vL.innerHTML=B;
var u=this.__vL.firstChild.childNodes;
if(q>0){for(var i=u.length-1;i>=0;i--){var w=u[0];
C.appendChild(w);
}}else{for(var i=u.length-1;i>=0;i--){var w=u[u.length-1];
C.insertBefore(w,C.firstChild);
}}if(this.__vM!==null){this._updateRowStyles(this.__vM-q);
this._updateRowStyles(this.__vM);
}this.fireEvent(bk);
},_updateAllRows:function(){var bL=this.getContentElement().getDomElement();

if(!bL){this.addListenerOnce(bx,arguments.callee,this);
return;
}var bR=this.getTable();
var bO=bR.getTableModel();
var bQ=this.getPaneScroller().getTablePaneModel();
var bP=bQ.getColumnCount();
var bI=bR.getRowHeight();
var bM=this.getFirstVisibleRow();
var bJ=this.getVisibleRowCount();
var bS=bO.getRowCount();

if(bM+bJ>bS){bJ=Math.max(0,bS-bM);
}var bK=bQ.getTotalWidth();
var bN;
if(bJ>0){bN=[bp,bC,(bR.getForceLineHeight()?by+bI+bt:bo),bh,br,this._getRowsHtml(bM,bJ),bi];
}else{bN=[];
}var bT=bN.join(bo);
bL.innerHTML=bT;
this.setWidth(bK);
this.__vI=bP;
this.__vJ=bJ;
this.fireEvent(bk);
}},destruct:function(){this.__vL=this.__vH=this.__vK=null;
}});
})();
(function(){var e="auto",d="string",c="number",b="*",a="qx.ui.core.ColumnData";
qx.Class.define(a,{extend:qx.ui.core.LayoutItem,construct:function(){qx.ui.core.LayoutItem.call(this);
this.setColumnWidth(e);
},members:{__xa:null,renderLayout:function(j,top,k,l){this.__xa=k;
},getComputedWidth:function(){return this.__xa;
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
(function(){var m="Function",k="Boolean",j="minWidth",h="width",g="__xc",f="qx.ui.table.columnmodel.Resize",e="qx.ui.table.columnmodel.resizebehavior.Default",d="__xd",c="maxWidth";
qx.Class.define(e,{extend:qx.ui.table.columnmodel.resizebehavior.Abstract,construct:function(){qx.ui.table.columnmodel.resizebehavior.Abstract.call(this);
this.__xb=[];
this.__xc=new qx.ui.layout.HBox();
this.__xc.connectToWidget(this);
this.__xd=new qx.util.DeferredCall(this._computeColumnsFlexWidth,this);
},properties:{newResizeBehaviorColumnData:{check:m,init:function(S){return new qx.ui.core.ColumnData();
}},initializeWidthsOnEveryAppear:{check:k,init:false},tableColumnModel:{check:f}},members:{__xc:null,__xe:null,__xb:null,__xd:null,__xf:false,setWidth:function(T,U,V){if(T>=this.__xb.length){throw new Error("Column number out of range");
}this.__xb[T].setColumnWidth(U,V);
this.__xd.schedule();
},setMinWidth:function(W,X){if(W>=this.__xb.length){throw new Error("Column number out of range");
}this.__xb[W].setMinWidth(X);
this.__xd.schedule();
},setMaxWidth:function(n,o){if(n>=this.__xb.length){throw new Error("Column number out of range");
}this.__xb[n].setMaxWidth(o);
this.__xd.schedule();
},set:function(P,Q){for(var R in Q){switch(R){case h:this.setWidth(P,Q[R]);
break;
case j:this.setMinWidth(P,Q[R]);
break;
case c:this.setMaxWidth(P,Q[R]);
break;
default:throw new Error("Unknown property: "+R);
}}},onAppear:function(event,O){if(O===true||!this.__xf||this.getInitializeWidthsOnEveryAppear()){this._computeColumnsFlexWidth();
this.__xf=true;
}},onTableWidthChanged:function(event){this._computeColumnsFlexWidth();
},onVerticalScrollBarChanged:function(event){this._computeColumnsFlexWidth();
},onColumnWidthChanged:function(event){this._extendNextColumn(event);
},onVisibilityChanged:function(event){var y=event.getData();
if(y.visible){this._computeColumnsFlexWidth();
return;
}this._extendLastColumn(event);
},_setNumColumns:function(a){var b=this.__xb;
if(a<=b.length){b.splice(a,b.length);
return;
}for(var i=b.length;i<a;i++){b[i]=this.getNewResizeBehaviorColumnData()();
b[i].columnNumber=i;
}},getLayoutChildren:function(){return this.__xe;
},_computeColumnsFlexWidth:function(){this.__xd.cancel();
var D=this._getAvailableWidth();

if(D===null){return;
}var z=this.getTableColumnModel();
var B=z.getVisibleColumns();
var C=B.length;
var A=this.__xb;
var i,l;

if(C===0){return;
}var F=[];

for(i=0;i<C;i++){F.push(A[B[i]]);
}this.__xe=F;
this.__xg();
this.__xc.renderLayout(D,100);
for(i=0,l=F.length;i<l;i++){var E=F[i].getComputedWidth();
z.setColumnWidth(B[i],E);
}},__xg:function(){this.__xc.invalidateChildrenCache();
var p=this.__xe;

for(var i=0,l=p.length;i<l;i++){p[i].invalidateLayoutCache();
}},_extendNextColumn:function(event){var K=this.getTableColumnModel();
var N=event.getData();
var I=K.getVisibleColumns();
var H=this._getAvailableWidth();
var G=I.length;
if(N.newWidth>N.oldWidth){return ;
}var i;
var J;
var M=0;

for(i=0;i<G;i++){M+=K.getColumnWidth(I[i]);
}if(M<H){for(i=0;i<I.length;i++){if(I[i]==N.col){J=I[i+1];
break;
}}
if(J){var L=(H-(M-K.getColumnWidth(J)));
K.setColumnWidth(J,L);
}}},_extendLastColumn:function(event){var t=this.getTableColumnModel();
var x=event.getData();
if(x.visible){return;
}var s=t.getVisibleColumns();
if(s.length==0){return;
}var r=this._getAvailableWidth(t);
var q=s.length;
var i;
var v;
var w=0;

for(i=0;i<q;i++){w+=t.getColumnWidth(s[i]);
}if(w<r){v=s[s.length-1];
var u=(r-(w-t.getColumnWidth(v)));
t.setColumnWidth(v,u);
}},_getResizeColumnData:function(){return this.__xb;
}},destruct:function(){this.__xb=this.__xe=null;
this._disposeObjects(g,d);
}});
})();
(function(){var bb="qx.event.type.Data",ba="visibilityChanged",Y="orderChanged",X="visibilityChangedPre",W="__vr",V="widthChanged",U="qx.ui.table.columnmodel.Basic",T="__vs",S="headerCellRendererChanged",R="__vt";
qx.Class.define(U,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__vm=[];
this.__vn=[];
},events:{"widthChanged":bb,"visibilityChangedPre":bb,"visibilityChanged":bb,"orderChanged":bb,"headerCellRendererChanged":bb},statics:{DEFAULT_WIDTH:100,DEFAULT_HEADER_RENDERER:qx.ui.table.headerrenderer.Default,DEFAULT_DATA_RENDERER:qx.ui.table.cellrenderer.Default,DEFAULT_EDITOR_FACTORY:qx.ui.table.celleditor.TextField},members:{__vo:null,__vp:null,__vn:null,__vm:null,__vq:null,__vr:null,__vs:null,__vt:null,init:function(e){{};
this.__vq=[];
var h=qx.ui.table.columnmodel.Basic.DEFAULT_WIDTH;
var j=this.__vr||(this.__vr=new qx.ui.table.columnmodel.Basic.DEFAULT_HEADER_RENDERER());
var g=this.__vs||(this.__vs=new qx.ui.table.columnmodel.Basic.DEFAULT_DATA_RENDERER());
var f=this.__vt||(this.__vt=new qx.ui.table.columnmodel.Basic.DEFAULT_EDITOR_FACTORY());
this.__vm=[];
this.__vn=[];

for(var l=0;l<e;l++){this.__vq[l]={width:h,headerRenderer:j,dataRenderer:g,editorFactory:f};
this.__vm[l]=l;
this.__vn[l]=l;
}this.__vp=null;

for(var l=0;l<e;l++){var k={col:l,visible:true};
this.fireDataEvent(X,k);
this.fireDataEvent(ba,k);
}},getVisibleColumns:function(){return this.__vn!=null?this.__vn:[];
},setColumnWidth:function(bd,be){{};
var bg=this.__vq[bd].width;

if(bg!=be){this.__vq[bd].width=be;
var bf={col:bd,newWidth:be,oldWidth:bg};
this.fireDataEvent(V,bf);
}},getColumnWidth:function(a){{};
return this.__vq[a].width;
},setHeaderCellRenderer:function(b,c){{};
var d=this.__vq[b].headerRenderer;

if(d!==this.__vr){d.dispose();
}this.__vq[b].headerRenderer=c;
this.fireDataEvent(S,{col:b});
},getHeaderCellRenderer:function(w){{};
return this.__vq[w].headerRenderer;
},setDataCellRenderer:function(I,J){{};
this.__vq[I].dataRenderer=J;
var K=this.__vq[I].dataRenderer;

if(K!==this.__vs){return K;
}return null;
},getDataCellRenderer:function(C){{};
return this.__vq[C].dataRenderer;
},setCellEditorFactory:function(bh,bi){{};
var bj=this.__vq[bh].headerRenderer;

if(bj!==this.__vt){bj.dispose();
}this.__vq[bh].editorFactory=bi;
},getCellEditorFactory:function(L){{};
return this.__vq[L].editorFactory;
},_getColToXPosMap:function(){if(this.__vp==null){this.__vp={};

for(var B=0;B<this.__vm.length;B++){var A=this.__vm[B];
this.__vp[A]={overX:B};
}
for(var z=0;z<this.__vn.length;z++){var A=this.__vn[z];
this.__vp[A].visX=z;
}}return this.__vp;
},getVisibleColumnCount:function(){return this.__vn!=null?this.__vn.length:0;
},getVisibleColumnAtX:function(y){{};
return this.__vn[y];
},getVisibleX:function(bc){{};
return this._getColToXPosMap()[bc].visX;
},getOverallColumnCount:function(){return this.__vm.length;
},getOverallColumnAtX:function(bk){{};
return this.__vm[bk];
},getOverallX:function(v){{};
return this._getColToXPosMap()[v].overX;
},isColumnVisible:function(Q){{};
return (this._getColToXPosMap()[Q].visX!=null);
},setColumnVisible:function(m,n){{};

if(n!=this.isColumnVisible(m)){if(n){var t=this._getColToXPosMap();
var q=t[m].overX;

if(q==null){throw new Error("Showing column failed: "+m+". The column is not added to this TablePaneModel.");
}var r;

for(var x=q+1;x<this.__vm.length;x++){var s=this.__vm[x];
var o=t[s].visX;

if(o!=null){r=o;
break;
}}if(r==null){r=this.__vn.length;
}this.__vn.splice(r,0,m);
}else{var p=this.getVisibleX(m);
this.__vn.splice(p,1);
}this.__vp=null;
if(!this.__vo){var u={col:m,visible:n};
this.fireDataEvent(X,u);
this.fireDataEvent(ba,u);
}}},moveColumn:function(D,E){{};
this.__vo=true;
var H=this.__vm[D];
var F=this.isColumnVisible(H);

if(F){this.setColumnVisible(H,false);
}this.__vm.splice(D,1);
this.__vm.splice(E,0,H);
this.__vp=null;

if(F){this.setColumnVisible(H,true);
}this.__vo=false;
var G={col:H,fromOverXPos:D,toOverXPos:E};
this.fireDataEvent(Y,G);
},setColumnsOrder:function(M){{};

if(M.length==this.__vm.length){this.__vo=true;
var P=new Array(M.length);

for(var N=0;N<this.__vm.length;N++){var O=this.isColumnVisible(N);
P[N]=O;

if(O){this.setColumnVisible(N,false);
}}this.__vm=qx.lang.Array.clone(M);
this.__vp=null;
for(var N=0;N<this.__vm.length;N++){if(P[N]){this.setColumnVisible(N,true);
}}this.__vo=false;
this.fireDataEvent(Y);
}else{throw new Error("setColumnsOrder: Invalid number of column positions given, expected "+this.__vm.length+", got "+M.length);
}}},destruct:function(){for(var i=0;i<this.__vq.length;i++){this.__vq[i].headerRenderer.dispose();
this.__vq[i].dataRenderer.dispose();
this.__vq[i].editorFactory.dispose();
}this.__vm=this.__vn=this.__vq=this.__vp=null;
this._disposeObjects(W,T,R);
}});
})();
(function(){var b="qx.ui.table.selection.Model",a="qx.ui.table.selection.Manager";
qx.Class.define(a,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
},properties:{selectionModel:{check:b}},members:{__vk:null,handleMouseDown:function(e,f){if(f.isLeftPressed()){var g=this.getSelectionModel();

if(!g.isSelectedIndex(e)){this._handleSelectEvent(e,f);
this.__vk=true;
}else{this.__vk=false;
}}else if(f.isRightPressed()&&f.getModifiers()==0){var g=this.getSelectionModel();

if(!g.isSelectedIndex(e)){g.setSelectionInterval(e,e);
}}},handleMouseUp:function(c,d){if(d.isLeftPressed()&&!this.__vk){this._handleSelectEvent(c,d);
}},handleClick:function(h,i){},handleSelectKeyDown:function(s,t){this._handleSelectEvent(s,t);
},handleMoveKeyDown:function(j,k){var m=this.getSelectionModel();

switch(k.getModifiers()){case 0:m.setSelectionInterval(j,j);
break;
case qx.event.type.Dom.SHIFT_MASK:var l=m.getAnchorSelectionIndex();

if(l==-1){m.setSelectionInterval(j,j);
}else{m.setSelectionInterval(l,j);
}break;
}},_handleSelectEvent:function(n,o){var r=this.getSelectionModel();
var p=r.getLeadSelectionIndex();
var q=r.getAnchorSelectionIndex();

if(o.isShiftPressed()){if(n!=p||r.isSelectionEmpty()){if(q==-1){q=n;
}
if(o.isCtrlOrCommandPressed()){r.addSelectionInterval(q,n);
}else{r.setSelectionInterval(q,n);
}}}else if(o.isCtrlOrCommandPressed()){if(r.isSelectedIndex(n)){r.removeSelectionInterval(n,n);
}else{r.addSelectionInterval(n,n);
}}else{r.setSelectionInterval(n,n);
}}}});
})();
(function(){var a="qx.ui.table.pane.Clipper";
qx.Class.define(a,{extend:qx.ui.container.Composite,construct:function(){qx.ui.container.Composite.call(this,new qx.ui.layout.Grow());
this.setMinWidth(0);
},members:{scrollToX:function(c){this.getContentElement().scrollToX(c,false);
},scrollToY:function(b){this.getContentElement().scrollToY(b,true);
}}});
})();
(function(){var s='',r='"',q=':',p=']',o='null',m=': ',l='object',h='function',g=',',f='\n',bd='\\u',bc=',\n',bb='0000',ba='string',Y="Cannot stringify a recursive object.",X='0',W='-',V='}',U='String',T='Boolean',A='\\\\',B='\\f',y='\\t',z='{\n',w='[]',x="qx.lang.JsonImpl",t='Z',u='\\n',C='Object',D='{}',K='@',I='.',N='(',M='Array',P='T',O='\\r',F='{',S='JSON.parse',R=' ',Q='[',E='Number',G=')',H='[\n',J='\\"',L='\\b';
qx.Class.define(x,{extend:Object,construct:function(){this.stringify=qx.lang.Function.bind(this.stringify,this);
this.parse=qx.lang.Function.bind(this.parse,this);
},members:{__sS:null,__sT:null,__sU:null,__sV:null,stringify:function(br,bs,bt){this.__sS=s;
this.__sT=s;
this.__sV=[];

if(qx.lang.Type.isNumber(bt)){var bt=Math.min(10,Math.floor(bt));

for(var i=0;i<bt;i+=1){this.__sT+=R;
}}else if(qx.lang.Type.isString(bt)){if(bt.length>10){bt=bt.slice(0,10);
}this.__sT=bt;
}if(bs&&(qx.lang.Type.isFunction(bs)||qx.lang.Type.isArray(bs))){this.__sU=bs;
}else{this.__sU=null;
}return this.__sW(s,{'':br});
},__sW:function(bl,bm){var bp=this.__sS,bn,bq=bm[bl];
if(bq&&qx.lang.Type.isFunction(bq.toJSON)){bq=bq.toJSON(bl);
}else if(qx.lang.Type.isDate(bq)){bq=this.dateToJSON(bq);
}if(typeof this.__sU===h){bq=this.__sU.call(bm,bl,bq);
}
if(bq===null){return o;
}
if(bq===undefined){return undefined;
}switch(qx.lang.Type.getClass(bq)){case U:return this.__sX(bq);
case E:return isFinite(bq)?String(bq):o;
case T:return String(bq);
case M:this.__sS+=this.__sT;
bn=[];

if(this.__sV.indexOf(bq)!==-1){throw new TypeError(Y);
}this.__sV.push(bq);
var length=bq.length;

for(var i=0;i<length;i+=1){bn[i]=this.__sW(i,bq)||o;
}this.__sV.pop();
if(bn.length===0){var bo=w;
}else if(this.__sS){bo=H+this.__sS+bn.join(bc+this.__sS)+f+bp+p;
}else{bo=Q+bn.join(g)+p;
}this.__sS=bp;
return bo;
case C:this.__sS+=this.__sT;
bn=[];

if(this.__sV.indexOf(bq)!==-1){throw new TypeError(Y);
}this.__sV.push(bq);
if(this.__sU&&typeof this.__sU===l){var length=this.__sU.length;

for(var i=0;i<length;i+=1){var k=this.__sU[i];

if(typeof k===ba){var v=this.__sW(k,bq);

if(v){bn.push(this.__sX(k)+(this.__sS?m:q)+v);
}}}}else{for(var k in bq){if(Object.hasOwnProperty.call(bq,k)){var v=this.__sW(k,bq);

if(v){bn.push(this.__sX(k)+(this.__sS?m:q)+v);
}}}}this.__sV.pop();
if(bn.length===0){var bo=D;
}else if(this.__sS){bo=z+this.__sS+bn.join(bc+this.__sS)+f+bp+V;
}else{bo=F+bn.join(g)+V;
}this.__sS=bp;
return bo;
}},dateToJSON:function(b){var d=function(n){return n<10?X+n:n;
};
var e=function(n){var bu=d(n);
return n<100?X+bu:bu;
};
return isFinite(b.valueOf())?b.getUTCFullYear()+W+d(b.getUTCMonth()+1)+W+d(b.getUTCDate())+P+d(b.getUTCHours())+q+d(b.getUTCMinutes())+q+d(b.getUTCSeconds())+I+e(b.getUTCMilliseconds())+t:null;
},__sX:function(be){var bf={'\b':L,'\t':y,'\n':u,'\f':B,'\r':O,'"':J,'\\':A};
var bg=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
bg.lastIndex=0;

if(bg.test(be)){return r+
be.replace(bg,function(a){var c=bf[a];
return typeof c===ba?c:bd+(bb+a.charCodeAt(0).toString(16)).slice(-4);
})+r;
}else{return r+be+r;
}},parse:function(bv,bw){var bx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
bx.lastIndex=0;
if(bx.test(bv)){bv=bv.replace(bx,function(a){return bd+(bb+a.charCodeAt(0).toString(16)).slice(-4);
});
}if(/^[\],:{}\s]*$/.test(bv.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,K).replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,p).replace(/(?:^|:|,)(?:\s*\[)+/g,s))){var j=eval(N+bv+G);
return typeof bw===h?this.__sY({'':j},s,bw):j;
}throw new SyntaxError(S);
},__sY:function(bh,bi,bj){var bk=bh[bi];

if(bk&&typeof bk===l){for(var k in bk){if(Object.hasOwnProperty.call(bk,k)){var v=this.__sY(bk,k,bj);

if(v!==undefined){bk[k]=v;
}else{delete bk[k];
}}}}return bj.call(bh,bi,bk);
}}});
})();
(function(){var a="qx.lang.Json";
qx.Class.define(a,{statics:{JSON:(qx.lang.Type.getClass(window.JSON)=="JSON"&&JSON.parse('{"x":1}').x===1)?window.JSON:new qx.lang.JsonImpl(),stringify:null,parse:null},defer:function(b){b.stringify=b.JSON.stringify;
b.parse=b.JSON.parse;
}});
})();
(function(){var H="]",G="..",F="changeSelection",E="_applySelectionMode",D='ie',C="qx.event.type.Event",B="Ranges:",A="qx.ui.table.selection.Model",z=" [";
qx.Class.define(A,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__va=[];
this.__vb=-1;
this.__vc=-1;
this.hasBatchModeRefCount=0;
this.__vd=false;
},events:{"changeSelection":C},statics:{NO_SELECTION:1,SINGLE_SELECTION:2,SINGLE_INTERVAL_SELECTION:3,MULTIPLE_INTERVAL_SELECTION:4,MULTIPLE_INTERVAL_SELECTION_TOGGLE:5},properties:{selectionMode:{init:2,check:[1,2,3,4,5],apply:E}},members:{__vd:null,__vb:null,__vc:null,__va:null,_applySelectionMode:function(x){this.resetSelection();
},setBatchMode:function(J){if(J){this.hasBatchModeRefCount+=1;
}else{if(this.hasBatchModeRefCount==0){throw new Error("Try to turn off batch mode althoug it was not turned on.");
}this.hasBatchModeRefCount-=1;

if(this.__vd){this.__vd=false;
this._fireChangeSelection();
}}return this.hasBatchMode();
},hasBatchMode:function(){return this.hasBatchModeRefCount>0;
},getAnchorSelectionIndex:function(){return this.__vb;
},_setAnchorSelectionIndex:function(a){this.__vb=a;
},getLeadSelectionIndex:function(){return this.__vc;
},_setLeadSelectionIndex:function(y){this.__vc=y;
},_getSelectedRangeArr:function(){return this.__va;
},resetSelection:function(){if(!this.isSelectionEmpty()){this._resetSelection();
this._fireChangeSelection();
}},isSelectionEmpty:function(){return this.__va.length==0;
},getSelectedCount:function(){var n=0;

for(var i=0;i<this.__va.length;i++){var m=this.__va[i];
n+=m.maxIndex-m.minIndex+1;
}return n;
},isSelectedIndex:function(v){for(var i=0;i<this.__va.length;i++){var w=this.__va[i];

if(v>=w.minIndex&&v<=w.maxIndex){return true;
}}return false;
},getSelectedRanges:function(){var I=[];

for(var i=0;i<this.__va.length;i++){I.push({minIndex:this.__va[i].minIndex,maxIndex:this.__va[i].maxIndex});
}return I;
},iterateSelection:function(q,r){for(var i=0;i<this.__va.length;i++){for(var j=this.__va[i].minIndex;j<=this.__va[i].maxIndex;j++){q.call(r,j);
}}},setSelectionInterval:function(R,S){var T=this.self(arguments);

switch(this.getSelectionMode()){case T.NO_SELECTION:return;
case T.SINGLE_SELECTION:if(this.isSelectedIndex(S)){return;
}R=S;
break;
case T.MULTIPLE_INTERVAL_SELECTION_TOGGLE:this.setBatchMode(true);

try{for(var i=R;i<=S;i++){if(!this.isSelectedIndex(i)){this._addSelectionInterval(i,i);
}else{this.removeSelectionInterval(i,i);
}}}catch(e){if(qx.bom.client.Browser.NAME==D&&qx.bom.client.Browser.VERSION<=7){this.setBatchMode(false);
}throw e;
}finally{this.setBatchMode(false);
}this._fireChangeSelection();
return;
}this._resetSelection();
this._addSelectionInterval(R,S);
this._fireChangeSelection();
},addSelectionInterval:function(s,t){var u=qx.ui.table.selection.Model;

switch(this.getSelectionMode()){case u.NO_SELECTION:return;
case u.MULTIPLE_INTERVAL_SELECTION:case u.MULTIPLE_INTERVAL_SELECTION_TOGGLE:this._addSelectionInterval(s,t);
this._fireChangeSelection();
break;
default:this.setSelectionInterval(s,t);
break;
}},removeSelectionInterval:function(b,c){this.__vb=b;
this.__vc=c;
var d=Math.min(b,c);
var g=Math.max(b,c);
for(var i=0;i<this.__va.length;i++){var k=this.__va[i];

if(k.minIndex>g){break;
}else if(k.maxIndex>=d){var l=(k.minIndex>=d)&&(k.minIndex<=g);
var h=(k.maxIndex>=d)&&(k.maxIndex<=g);

if(l&&h){this.__va.splice(i,1);
i--;
}else if(l){k.minIndex=g+1;
}else if(h){k.maxIndex=d-1;
}else{var f={minIndex:g+1,maxIndex:k.maxIndex};
this.__va.splice(i+1,0,f);
k.maxIndex=d-1;
break;
}}}this._fireChangeSelection();
},_resetSelection:function(){this.__va=[];
this.__vb=-1;
this.__vc=-1;
},_addSelectionInterval:function(K,L){this.__vb=K;
this.__vc=L;
var M=Math.min(K,L);
var O=Math.max(K,L);
var N=0;

for(;N<this.__va.length;N++){var P=this.__va[N];

if(P.minIndex>M){break;
}}this.__va.splice(N,0,{minIndex:M,maxIndex:O});
var Q=this.__va[0];

for(var i=1;i<this.__va.length;i++){var P=this.__va[i];

if(Q.maxIndex+1>=P.minIndex){Q.maxIndex=Math.max(Q.maxIndex,P.maxIndex);
this.__va.splice(i,1);
i--;
}else{Q=P;
}}},_dumpRanges:function(){var o=B;

for(var i=0;i<this.__va.length;i++){var p=this.__va[i];
o+=z+p.minIndex+G+p.maxIndex+H;
}this.debug(o);
},_fireChangeSelection:function(){if(this.hasBatchMode()){this.__vd=true;
}else{this.fireEvent(F);
}}},destruct:function(){this.__va=null;
}});
})();
(function(){var n="appear",m="columnVisibilityMenuCreateEnd",l="tableWidthChanged",k="verticalScrollBarChanged",j="qx.ui.table.columnmodel.resizebehavior.Abstract",i="qx.ui.table.columnmodel.Resize",h="_applyBehavior",g="separator",f="visibilityChanged",e="Reset column widths",b="changeBehavior",d="user-button",c="widthChanged",a="execute";
qx.Class.define(i,{extend:qx.ui.table.columnmodel.Basic,include:qx.locale.MTranslation,construct:function(){qx.ui.table.columnmodel.Basic.call(this);
this.__wW=false;
this.__wX=false;
},properties:{behavior:{check:j,init:null,nullable:true,apply:h,event:b}},members:{__wX:null,__wW:null,__wY:null,_applyBehavior:function(u,v){if(v!=null){v.dispose();
v=null;
}u._setNumColumns(this.getOverallColumnCount());
u.setTableColumnModel(this);
},init:function(p,q){qx.ui.table.columnmodel.Basic.prototype.init.call(this,p);

if(this.__wY==null){this.__wY=q;
q.addListener(n,this._onappear,this);
q.addListener(l,this._onTableWidthChanged,this);
q.addListener(k,this._onverticalscrollbarchanged,this);
q.addListener(m,this._addResetColumnWidthButton,this);
this.addListener(c,this._oncolumnwidthchanged,this);
this.addListener(f,this._onvisibilitychanged,this);
}if(this.getBehavior()==null){this.setBehavior(new qx.ui.table.columnmodel.resizebehavior.Default());
}this.getBehavior()._setNumColumns(p);
},getTable:function(){return this.__wY;
},_addResetColumnWidthButton:function(event){var t=event.getData();
var s=t.columnButton;
var r=t.menu;
var o;
o=s.factory(g);
r.add(o);
o=s.factory(d,{text:this.tr(e)});
r.add(o);
o.addListener(a,this._onappear,this);
},_onappear:function(event){if(this.__wW){return ;
}this.__wW=true;
{};
this.getBehavior().onAppear(event,event.getType()!==n);
this.__wY._updateScrollerWidths();
this.__wY._updateScrollBarVisibility();
this.__wW=false;
this.__wX=true;
},_onTableWidthChanged:function(event){if(this.__wW||!this.__wX){return ;
}this.__wW=true;
{};
this.getBehavior().onTableWidthChanged(event);
this.__wW=false;
},_onverticalscrollbarchanged:function(event){if(this.__wW||!this.__wX){return ;
}this.__wW=true;
{};
this.getBehavior().onVerticalScrollBarChanged(event);
qx.event.Timer.once(function(){if(this.__wY&&!this.__wY.isDisposed()){this.__wY._updateScrollerWidths();
this.__wY._updateScrollBarVisibility();
}},this,0);
this.__wW=false;
},_oncolumnwidthchanged:function(event){if(this.__wW||!this.__wX){return ;
}this.__wW=true;
{};
this.getBehavior().onColumnWidthChanged(event);
this.__wW=false;
},_onvisibilitychanged:function(event){if(this.__wW||!this.__wX){return ;
}this.__wW=true;
{};
this.getBehavior().onVisibilityChanged(event);
this.__wW=false;
}},destruct:function(){this.__wY=null;
}});
})();
(function(){var y="metaDataChanged",x="qx.event.type.Data",w="qx.event.type.Event",v="abstract",u="qx.ui.table.model.Abstract";
qx.Class.define(u,{type:v,extend:qx.core.Object,implement:qx.ui.table.ITableModel,events:{"dataChanged":x,"metaDataChanged":w,"sorted":x},construct:function(){qx.core.Object.call(this);
this.__uI=[];
this.__uJ=[];
this.__uK={};
},members:{__uI:null,__uJ:null,__uK:null,__uL:null,init:function(A){},getRowCount:function(){throw new Error("getRowCount is abstract");
},getRowData:function(k){return null;
},isColumnEditable:function(g){return false;
},isColumnSortable:function(m){return false;
},sortByColumn:function(F,G){},getSortColumnIndex:function(){return -1;
},isSortAscending:function(){return true;
},prefetchRows:function(D,E){},getValue:function(a,b){throw new Error("getValue is abstract");
},getValueById:function(B,C){return this.getValue(this.getColumnIndexById(B),C);
},setValue:function(q,r,s){throw new Error("setValue is abstract");
},setValueById:function(c,d,e){this.setValue(this.getColumnIndexById(c),d,e);
},getColumnCount:function(){return this.__uI.length;
},getColumnIndexById:function(z){return this.__uK[z];
},getColumnId:function(f){return this.__uI[f];
},getColumnName:function(l){return this.__uJ[l];
},setColumnIds:function(t){this.__uI=t;
this.__uK={};

for(var i=0;i<t.length;i++){this.__uK[t[i]]=i;
}this.__uJ=new Array(t.length);
if(!this.__uL){this.fireEvent(y);
}},setColumnNamesByIndex:function(j){if(this.__uI.length!=j.length){throw new Error("this.__columnIdArr and columnNameArr have different length: "+this.__uI.length+" != "+j.length);
}this.__uJ=j;
this.fireEvent(y);
},setColumnNamesById:function(h){this.__uJ=new Array(this.__uI.length);

for(var i=0;i<this.__uI.length;++i){this.__uJ[i]=h[this.__uI[i]];
}},setColumns:function(n,o){var p=this.__uI.length==0||o;

if(o==null){if(this.__uI.length==0){o=n;
}else{o=this.__uI;
}}
if(o.length!=n.length){throw new Error("columnIdArr and columnNameArr have different length: "+o.length+" != "+n.length);
}
if(p){this.__uL=true;
this.setColumnIds(o);
this.__uL=false;
}this.setColumnNamesByIndex(n);
}},destruct:function(){this.__uI=this.__uJ=this.__uK=null;
}});
})();
(function(){var bF="dataChanged",bE="metaDataChanged",bD="qx.ui.table.model.Simple",bC="Boolean",bB="sorted";
qx.Class.define(bD,{extend:qx.ui.table.model.Abstract,construct:function(){qx.ui.table.model.Abstract.call(this);
this.__wI=[];
this.__wJ=-1;
this.__wK=[];
this.__wL=null;
},properties:{caseSensitiveSorting:{check:bC,init:true}},statics:{_defaultSortComparatorAscending:function(M,N){var O=M[arguments.callee.columnIndex];
var P=N[arguments.callee.columnIndex];

if(qx.lang.Type.isNumber(O)&&qx.lang.Type.isNumber(P)){var Q=isNaN(O)?isNaN(P)?0:1:isNaN(P)?-1:null;

if(Q!=null){return Q;
}}return (O>P)?1:((O==P)?0:-1);
},_defaultSortComparatorInsensitiveAscending:function(X,Y){var ba=(X[arguments.callee.columnIndex].toLowerCase?X[arguments.callee.columnIndex].toLowerCase():X[arguments.callee.columnIndex]);
var bb=(Y[arguments.callee.columnIndex].toLowerCase?Y[arguments.callee.columnIndex].toLowerCase():Y[arguments.callee.columnIndex]);

if(qx.lang.Type.isNumber(ba)&&qx.lang.Type.isNumber(bb)){var bc=isNaN(ba)?isNaN(bb)?0:1:isNaN(bb)?-1:null;

if(bc!=null){return bc;
}}return (ba>bb)?1:((ba==bb)?0:-1);
},_defaultSortComparatorDescending:function(e,f){var g=e[arguments.callee.columnIndex];
var h=f[arguments.callee.columnIndex];

if(qx.lang.Type.isNumber(g)&&qx.lang.Type.isNumber(h)){var k=isNaN(g)?isNaN(h)?0:1:isNaN(h)?-1:null;

if(k!=null){return k;
}}return (g<h)?1:((g==h)?0:-1);
},_defaultSortComparatorInsensitiveDescending:function(bL,bM){var bN=(bL[arguments.callee.columnIndex].toLowerCase?bL[arguments.callee.columnIndex].toLowerCase():bL[arguments.callee.columnIndex]);
var bO=(bM[arguments.callee.columnIndex].toLowerCase?bM[arguments.callee.columnIndex].toLowerCase():bM[arguments.callee.columnIndex]);

if(qx.lang.Type.isNumber(bN)&&qx.lang.Type.isNumber(bO)){var bP=isNaN(bN)?isNaN(bO)?0:1:isNaN(bO)?-1:null;

if(bP!=null){return bP;
}}return (bN<bO)?1:((bN==bO)?0:-1);
}},members:{__wI:null,__wL:null,__wM:null,__wK:null,__wJ:null,__wN:null,getRowData:function(C){var D=this.__wI[C];

if(D==null||D.originalData==null){return D;
}else{return D.originalData;
}},getRowDataAsMap:function(p){var r=this.__wI[p];

if(r!=null){var q={};
for(var s=0;s<this.getColumnCount();s++){q[this.getColumnId(s)]=r[s];
}
if(r.originalData!=null){for(var t in r.originalData){if(q[t]==undefined){q[t]=r.originalData[t];
}}}return q;
}return (r&&r.originalData)?r.originalData:null;
},getDataAsMapArray:function(){var be=this.getRowCount();
var bd=[];

for(var i=0;i<be;i++){bd.push(this.getRowDataAsMap(i));
}return bd;
},setEditable:function(bf){this.__wL=[];

for(var bg=0;bg<this.getColumnCount();bg++){this.__wL[bg]=bf;
}this.fireEvent(bE);
},setColumnEditable:function(bh,bi){if(bi!=this.isColumnEditable(bh)){if(this.__wL==null){this.__wL=[];
}this.__wL[bh]=bi;
this.fireEvent(bE);
}},isColumnEditable:function(bK){return this.__wL?(this.__wL[bK]==true):false;
},setColumnSortable:function(u,v){if(v!=this.isColumnSortable(u)){if(this.__wM==null){this.__wM=[];
}this.__wM[u]=v;
this.fireEvent(bE);
}},isColumnSortable:function(bn){return (this.__wM?(this.__wM[bn]!==false):true);
},sortByColumn:function(bw,bx){var bA;
var bz=this.__wK[bw];

if(bz){bA=(bx?bz.ascending:bz.descending);
}else{if(this.getCaseSensitiveSorting()){bA=(bx?qx.ui.table.model.Simple._defaultSortComparatorAscending:qx.ui.table.model.Simple._defaultSortComparatorDescending);
}else{bA=(bx?qx.ui.table.model.Simple._defaultSortComparatorInsensitiveAscending:qx.ui.table.model.Simple._defaultSortComparatorInsensitiveDescending);
}}bA.columnIndex=bw;
this.__wI.sort(bA);
this.__wJ=bw;
this.__wN=bx;
var by={columnIndex:bw,ascending:bx};
this.fireDataEvent(bB,by);
this.fireEvent(bE);
},setSortMethods:function(G,H){var I;

if(qx.lang.Type.isFunction(H)){I={ascending:H,descending:function(E,F){return H(F,E);
}};
}else{I=H;
}this.__wK[G]=I;
},getSortMethods:function(R){return this.__wK[R];
},clearSorting:function(){if(this.__wJ!=-1){this.__wJ=-1;
this.__wN=true;
this.fireEvent(bE);
}},getSortColumnIndex:function(){return this.__wJ;
},isSortAscending:function(){return this.__wN;
},getRowCount:function(){return this.__wI.length;
},getValue:function(S,T){if(T<0||T>=this.__wI.length){throw new Error("this.__rowArr out of bounds: "+T+" (0.."+this.__wI.length+")");
}return this.__wI[T][S];
},setValue:function(bo,bp,bq){if(this.__wI[bp][bo]!=bq){this.__wI[bp][bo]=bq;
if(this.hasListener(bF)){var br={firstRow:bp,lastRow:bp,firstColumn:bo,lastColumn:bo};
this.fireDataEvent(bF,br);
}
if(bo==this.__wJ){this.clearSorting();
}}},setData:function(J,K){this.__wI=J;
if(this.hasListener(bF)){var L={firstRow:0,lastRow:J.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(bF,L);
}
if(K!==false){this.clearSorting();
}},getData:function(){return this.__wI;
},setDataAsMapArray:function(U,V,W){this.setData(this._mapArray2RowArr(U,V),W);
},addRows:function(bs,bt,bu){if(bt==null){bt=this.__wI.length;
}bs.splice(0,0,bt,0);
Array.prototype.splice.apply(this.__wI,bs);
var bv={firstRow:bt,lastRow:this.__wI.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(bF,bv);

if(bu!==false){this.clearSorting();
}},addRowsAsMapArray:function(l,m,n,o){this.addRows(this._mapArray2RowArr(l,n),m,o);
},setRows:function(a,b,c){if(b==null){b=0;
}a.splice(0,0,b,a.length);
Array.prototype.splice.apply(this.__wI,a);
var d={firstRow:b,lastRow:this.__wI.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(bF,d);

if(c!==false){this.clearSorting();
}},setRowsAsMapArray:function(bj,bk,bl,bm){this.setRows(this._mapArray2RowArr(bj,bl),bk,bm);
},removeRows:function(bG,bH,bI){this.__wI.splice(bG,bH);
var bJ={firstRow:bG,lastRow:this.__wI.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1,removeStart:bG,removeCount:bH};
this.fireDataEvent(bF,bJ);

if(bI!==false){this.clearSorting();
}},_mapArray2RowArr:function(w,x){var B=w.length;
var y=this.getColumnCount();
var A=new Array(B);
var z;

for(var i=0;i<B;++i){z=[];

if(x){z.originalData=w[i];
}
for(var j=0;j<y;++j){z[j]=w[i][this.getColumnId(j)];
}A[i]=z;
}return A;
}},destruct:function(){this.__wI=this.__wL=this.__wK=this.__wM=null;
}});
})();
(function(){var b="qx.ui.table.IRowRenderer";
qx.Interface.define(b,{members:{updateDataRowElement:function(e,f){},getRowHeightStyle:function(d){},createRowStyle:function(c){},getRowClass:function(a){}}});
})();
(function(){var f="menu-button",e="table-column-reset-button",d="separator",c="user-button",b="qx.ui.table.columnmenu.Button",a="menu";
qx.Class.define(b,{extend:qx.ui.form.MenuButton,implement:qx.ui.table.IColumnMenuButton,construct:function(){qx.ui.form.MenuButton.call(this);
this.__vh=new qx.ui.core.Blocker(this);
},members:{__vi:null,__vh:null,factory:function(j,k){switch(j){case a:var m=new qx.ui.menu.Menu();
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
}},getBlocker:function(){return this.__vh;
},empty:function(){var g=this.getMenu();
var h=g.getChildren();

for(var i=0,l=h.length;i<l;i++){h[0].destroy();
}}},destruct:function(){this.__vh.dispose();
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
(function(){var cH="Boolean",cG="resize-line",cF="mousedown",cE="qx.event.type.Data",cD="mouseup",cC="qx.ui.table.pane.CellEvent",cB="scroll",cA="focus-indicator",cz="excluded",cy="scrollbar-y",dH="table-scroller-focus-indicator",dG="visible",dF="mousemove",dE="header",dD="editing",dC="click",dB="modelChanged",dA="scrollbar-x",dz="cellClick",dy="pane",cO="__wc",cP="__we",cM="mouseout",cN="changeHorizontalScrollBarVisible",cK="__vX",cL="bottom",cI="_applyScrollTimeout",cJ="changeScrollX",cT="_applyTablePaneModel",cU="Integer",dd="dblclick",db="__vY",dl="dataEdited",dg="__wa",du="mousewheel",dr="interval",cW="qx.ui.table.pane.Scroller",dx="_applyShowCellFocusIndicator",dw="resize",dv="__wd",cV="vertical",cY="changeScrollY",da="__wb",dc="appear",de="table-scroller",dh="beforeSort",dn="cellDblclick",dt="__wf",cQ="__wg",cR="horizontal",cX="losecapture",dk="contextmenu",dj="col-resize",di="disappear",dq="_applyVerticalScrollBarVisible",dp="_applyHorizontalScrollBarVisible",df="cellContextmenu",dm="close",cx="changeTablePaneModel",ds="qx.ui.table.pane.Model",cS="changeVerticalScrollBarVisible";
qx.Class.define(cW,{extend:qx.ui.core.Widget,include:qx.ui.core.scroll.MScrollBarFactory,construct:function(O){qx.ui.core.Widget.call(this);
this.__vW=O;
var P=new qx.ui.layout.Grid();
P.setColumnFlex(0,1);
P.setRowFlex(1,1);
this._setLayout(P);
this.__vX=this._showChildControl(dA);
this.__vY=this._showChildControl(cy);
this.__wa=this._showChildControl(dE);
this.__wb=this._showChildControl(dy);
this.__wc=new qx.ui.container.Composite(new qx.ui.layout.HBox()).set({minWidth:0});
this._add(this.__wc,{row:0,column:0,colSpan:2});
this.__wd=new qx.ui.table.pane.Clipper();
this.__wd.add(this.__wa);
this.__wd.addListener(cX,this._onChangeCaptureHeader,this);
this.__wd.addListener(dF,this._onMousemoveHeader,this);
this.__wd.addListener(cF,this._onMousedownHeader,this);
this.__wd.addListener(cD,this._onMouseupHeader,this);
this.__wd.addListener(dC,this._onClickHeader,this);
this.__wc.add(this.__wd,{flex:1});
this.__we=new qx.ui.table.pane.Clipper();
this.__we.add(this.__wb);
this.__we.addListener(du,this._onMousewheel,this);
this.__we.addListener(dF,this._onMousemovePane,this);
this.__we.addListener(cF,this._onMousedownPane,this);
this.__we.addListener(cD,this._onMouseupPane,this);
this.__we.addListener(dC,this._onClickPane,this);
this.__we.addListener(dk,this._onContextMenu,this);
this.__we.addListener(dd,this._onDblclickPane,this);
this.__we.addListener(dw,this._onResizePane,this);
this._add(this.__we,{row:1,column:0});
this.__wf=this.getChildControl(cA);
this.initShowCellFocusIndicator();
this.getChildControl(cG).hide();
this.addListener(cM,this._onMouseout,this);
this.addListener(dc,this._onAppear,this);
this.addListener(di,this._onDisappear,this);
this.__wg=new qx.event.Timer();
this.__wg.addListener(dr,this._oninterval,this);
this.initScrollTimeout();
},statics:{MIN_COLUMN_WIDTH:10,RESIZE_REGION_RADIUS:5,CLICK_TOLERANCE:5,HORIZONTAL_SCROLLBAR:1,VERTICAL_SCROLLBAR:2},events:{"changeScrollY":cE,"changeScrollX":cE,"cellClick":cC,"cellDblclick":cC,"cellContextmenu":cC,"beforeSort":cE},properties:{horizontalScrollBarVisible:{check:cH,init:true,apply:dp,event:cN},verticalScrollBarVisible:{check:cH,init:true,apply:dq,event:cS},tablePaneModel:{check:ds,apply:cT,event:cx},liveResize:{check:cH,init:false},focusCellOnMouseMove:{check:cH,init:false},selectBeforeFocus:{check:cH,init:false},showCellFocusIndicator:{check:cH,init:true,apply:dx},resetSelectionOnHeaderClick:{check:cH,init:true},scrollTimeout:{check:cU,init:100,apply:cI},appearance:{refine:true,init:de}},members:{__wh:null,__vW:null,__wi:null,__wj:null,__wk:null,__wl:null,__wm:null,__wn:null,__wo:null,__wp:null,__wq:null,__wr:null,__ws:null,__wt:null,__wu:false,__wv:null,__ww:null,__wx:null,__wy:null,__wz:null,__wA:null,__wB:null,__wC:null,__vX:null,__vY:null,__wa:null,__wd:null,__wb:null,__we:null,__wf:null,__wc:null,__wg:null,getPaneInsetRight:function(){var eO=this.getTopRightWidget();
var eP=eO&&eO.isVisible()&&eO.getBounds()?eO.getBounds().width:0;
var eN=this.getVerticalScrollBarVisible()?this.getVerticalScrollBarWidth():0;
return Math.max(eP,eN);
},setPaneWidth:function(dK){if(this.isVerticalScrollBarVisible()){dK+=this.getPaneInsetRight();
}this.setWidth(dK);
},_createChildControlImpl:function(ek){var el;

switch(ek){case dE:el=(this.getTable().getNewTablePaneHeader())(this);
break;
case dy:el=(this.getTable().getNewTablePane())(this);
break;
case cA:el=new qx.ui.table.pane.FocusIndicator(this);
el.setUserBounds(0,0,0,0);
el.setZIndex(1000);
el.addListener(cD,this._onMouseupFocusIndicator,this);
this.__we.add(el);
el.show();
el.setDecorator(null);
break;
case cG:el=new qx.ui.core.Widget();
el.setUserBounds(0,0,0,0);
el.setZIndex(1000);
this.__we.add(el);
break;
case dA:el=this._createScrollBar(cR).set({minWidth:0,alignY:cL});
el.addListener(cB,this._onScrollX,this);
this._add(el,{row:2,column:0});
break;
case cy:el=this._createScrollBar(cV);
el.addListener(cB,this._onScrollY,this);
this._add(el,{row:1,column:1});
break;
}return el||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,ek);
},_applyHorizontalScrollBarVisible:function(r,s){this.__vX.setVisibility(r?dG:cz);
},_applyVerticalScrollBarVisible:function(dI,dJ){this.__vY.setVisibility(dI?dG:cz);
},_applyTablePaneModel:function(eV,eW){if(eW!=null){eW.removeListener(dB,this._onPaneModelChanged,this);
}eV.addListener(dB,this._onPaneModelChanged,this);
},_applyShowCellFocusIndicator:function(bR,bS){if(bR){this.__wf.setDecorator(dH);
this._updateFocusIndicator();
}else{if(this.__wf){this.__wf.setDecorator(null);
}}},getScrollY:function(){return this.__vY.getPosition();
},setScrollY:function(scrollY,eQ){this.__vY.scrollTo(scrollY);

if(eQ){this._updateContent();
}},getScrollX:function(){return this.__vX.getPosition();
},setScrollX:function(scrollX){this.__vX.scrollTo(scrollX);
},getTable:function(){return this.__vW;
},onColVisibilityChanged:function(){this.updateHorScrollBarMaximum();
this._updateFocusIndicator();
},setColumnWidth:function(ft,fu){this.__wa.setColumnWidth(ft,fu);
this.__wb.setColumnWidth(ft,fu);
var fv=this.getTablePaneModel();
var x=fv.getX(ft);

if(x!=-1){this.updateHorScrollBarMaximum();
this._updateFocusIndicator();
}},onColOrderChanged:function(){this.__wa.onColOrderChanged();
this.__wb.onColOrderChanged();
this.updateHorScrollBarMaximum();
},onTableModelDataChanged:function(bM,bN,bO,bP){this.__wb.onTableModelDataChanged(bM,bN,bO,bP);
var bQ=this.getTable().getTableModel().getRowCount();

if(bQ!=this.__wh){this.updateVerScrollBarMaximum();

if(this.getFocusedRow()>=bQ){if(bQ==0){this.setFocusedCell(null,null);
}else{this.setFocusedCell(this.getFocusedColumn(),bQ-1);
}}this.__wh=bQ;
}},onSelectionChanged:function(){this.__wb.onSelectionChanged();
},onFocusChanged:function(){this.__wb.onFocusChanged();
},onTableModelMetaDataChanged:function(){this.__wa.onTableModelMetaDataChanged();
this.__wb.onTableModelMetaDataChanged();
},_onPaneModelChanged:function(){this.__wa.onPaneModelChanged();
this.__wb.onPaneModelChanged();
},_onResizePane:function(){this.updateHorScrollBarMaximum();
this.updateVerScrollBarMaximum();
this._updateContent();
this.__wa._updateContent();
this.__vW._updateScrollBarVisibility();
},updateHorScrollBarMaximum:function(){var bb=this.__we.getInnerSize();

if(!bb){return ;
}var Y=this.getTablePaneModel().getTotalWidth();
var ba=this.__vX;

if(bb.width<Y){var X=Math.max(0,Y-bb.width);
ba.setMaximum(X);
ba.setKnobFactor(bb.width/Y);
var bc=ba.getPosition();
ba.setPosition(Math.min(bc,X));
}else{ba.setMaximum(0);
ba.setKnobFactor(1);
ba.setPosition(0);
}},updateVerScrollBarMaximum:function(){var et=this.__we.getInnerSize();

if(!et){return ;
}var er=this.getTable().getTableModel();
var en=er.getRowCount();

if(this.getTable().getKeepFirstVisibleRowComplete()){en+=1;
}var em=this.getTable().getRowHeight();
var ep=en*em;
var es=this.__vY;

if(et.height<ep){var eo=Math.max(0,ep-et.height);
es.setMaximum(eo);
es.setKnobFactor(et.height/ep);
var eq=es.getPosition();
es.setPosition(Math.min(eq,eo));
}else{es.setMaximum(0);
es.setKnobFactor(1);
es.setPosition(0);
}},onKeepFirstVisibleRowCompleteChanged:function(){this.updateVerScrollBarMaximum();
this._updateContent();
},_onAppear:function(){this._startInterval(this.getScrollTimeout());
},_onDisappear:function(){this._stopInterval();
},_onScrollX:function(e){var Q=e.getData();
this.fireDataEvent(cJ,Q,e.getOldData());
this.__wd.scrollToX(Q);
this.__we.scrollToX(Q);
},_onScrollY:function(e){this.fireDataEvent(cY,e.getData(),e.getOldData());
this._postponedUpdateContent();
},_onMousewheel:function(e){var eh=this.getTable();

if(!eh.getEnabled()){return;
}var ej=qx.bom.client.Engine.GECKO?1:3;
var ei=this.__vY.getPosition()+((e.getWheelDelta()*ej)*eh.getRowHeight());
this.__vY.scrollTo(ei);
if(this.__ww&&this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(this.__ww,this.__wx);
}e.stop();
},__wD:function(t){var z=this.getTable();
var A=this.__wa.getHeaderWidgetAtColumn(this.__wq);
var u=A.getSizeHint().minWidth;
var w=Math.max(u,this.__ws+t-this.__wr);

if(this.getLiveResize()){var v=z.getTableColumnModel();
v.setColumnWidth(this.__wq,w);
}else{this.__wa.setColumnWidth(this.__wq,w);
var y=this.getTablePaneModel();
this._showResizeLine(y.getColumnLeft(this.__wq)+w);
}this.__wr+=w-this.__ws;
this.__ws=w;
},__wE:function(eR){var eS=qx.ui.table.pane.Scroller.CLICK_TOLERANCE;

if(this.__wa.isShowingColumnMoveFeedback()||eR>this.__wp+eS||eR<this.__wp-eS){this.__wm+=eR-this.__wp;
this.__wa.showColumnMoveFeedback(this.__wl,this.__wm);
var eT=this.__vW.getTablePaneScrollerAtPageX(eR);

if(this.__wo&&this.__wo!=eT){this.__wo.hideColumnMoveFeedback();
}
if(eT!=null){this.__wn=eT.showColumnMoveFeedback(eR);
}else{this.__wn=null;
}this.__wo=eT;
this.__wp=eR;
}},_onMousemoveHeader:function(e){var ea=this.getTable();

if(!ea.getEnabled()){return;
}var eb=false;
var dT=null;
var dX=e.getDocumentLeft();
var dY=e.getDocumentTop();
this.__ww=dX;
this.__wx=dY;

if(this.__wq!=null){this.__wD(dX);
eb=true;
e.stopPropagation();
}else if(this.__wl!=null){this.__wE(dX);
e.stopPropagation();
}else{var dU=this._getResizeColumnForPageX(dX);

if(dU!=-1){eb=true;
}else{var dW=ea.getTableModel();
var ec=this._getColumnForPageX(dX);

if(ec!=null&&dW.isColumnSortable(ec)){dT=ec;
}}}var dV=eb?dj:null;
this.getApplicationRoot().setGlobalCursor(dV);
this.setCursor(dV);
this.__wa.setMouseOverColumn(dT);
},_onMousemovePane:function(e){var ed=this.getTable();

if(!ed.getEnabled()){return;
}var ef=e.getDocumentLeft();
var eg=e.getDocumentTop();
this.__ww=ef;
this.__wx=eg;
var ee=this._getRowForPagePos(ef,eg);

if(ee!=null&&this._getColumnForPageX(ef)!=null){if(this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(ef,eg);
}}this.__wa.setMouseOverColumn(null);
},_onMousedownHeader:function(e){if(!this.getTable().getEnabled()){return;
}var ct=e.getDocumentLeft();
var cu=this._getResizeColumnForPageX(ct);

if(cu!=-1){this._startResizeHeader(cu,ct);
e.stop();
}else{var cs=this._getColumnForPageX(ct);

if(cs!=null){this._startMoveHeader(cs,ct);
e.stop();
}}},_startResizeHeader:function(fk,fl){var fm=this.getTable().getTableColumnModel();
this.__wq=fk;
this.__wr=fl;
this.__ws=fm.getColumnWidth(this.__wq);
this.__wd.capture();
},_startMoveHeader:function(fi,fj){this.__wl=fi;
this.__wp=fj;
this.__wm=this.getTablePaneModel().getColumnLeft(fi);
this.__wd.capture();
},_onMousedownPane:function(e){var d=this.getTable();

if(!d.getEnabled()){return;
}
if(d.isEditing()){d.stopEditing();
}var a=e.getDocumentLeft();
var c=e.getDocumentTop();
var h=this._getRowForPagePos(a,c);
var g=this._getColumnForPageX(a);

if(h!==null){this.__wt={row:h,col:g};
this.__wu=false;
var b=this.getSelectBeforeFocus();

if(b){d.getSelectionManager().handleMouseDown(h,e);
}if(!this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(a,c);
}
if(!b){d.getSelectionManager().handleMouseDown(h,e);
}}},_onMouseupFocusIndicator:function(e){if(this.__wt&&!this.__wu&&!this.isEditing()&&this.__wf.getRow()==this.__wt.row&&this.__wf.getColumn()==this.__wt.col){this.fireEvent(dz,qx.ui.table.pane.CellEvent,[this,e,this.__wt.row,this.__wt.col],true);
this.__wu=true;
}else if(!this.isEditing()){this._onMousedownPane(e);
}},_onChangeCaptureHeader:function(e){if(this.__wq!=null){this._stopResizeHeader();
}
if(this.__wl!=null){this._stopMoveHeader();
}},_stopResizeHeader:function(){var M=this.getTable().getTableColumnModel();
if(!this.getLiveResize()){this._hideResizeLine();
M.setColumnWidth(this.__wq,this.__ws);
}this.__wq=null;
this.__wd.releaseCapture();
this.getApplicationRoot().setGlobalCursor(null);
this.setCursor(null);
if(this.isEditing()){var N=this.__wA.getBounds().height;
this.__wA.setUserBounds(0,0,this.__ws,N);
}},_stopMoveHeader:function(){var dP=this.getTable().getTableColumnModel();
var dQ=this.getTablePaneModel();
this.__wa.hideColumnMoveFeedback();

if(this.__wo){this.__wo.hideColumnMoveFeedback();
}
if(this.__wn!=null){var dS=dQ.getFirstColumnX()+dQ.getX(this.__wl);
var dO=this.__wn;

if(dO!=dS&&dO!=dS+1){var dR=dP.getVisibleColumnAtX(dS);
var dN=dP.getVisibleColumnAtX(dO);
var dM=dP.getOverallX(dR);
var dL=(dN!=null)?dP.getOverallX(dN):dP.getOverallColumnCount();

if(dL>dM){dL--;
}dP.moveColumn(dM,dL);
this._updateFocusIndicator();
}}this.__wl=null;
this.__wn=null;
this.__wd.releaseCapture();
},_onMouseupPane:function(e){var ci=this.getTable();

if(!ci.getEnabled()){return;
}var cj=this._getRowForPagePos(e.getDocumentLeft(),e.getDocumentTop());

if(cj!=-1&&cj!=null&&this._getColumnForPageX(e.getDocumentLeft())!=null){ci.getSelectionManager().handleMouseUp(cj,e);
}},_onMouseupHeader:function(e){var fh=this.getTable();

if(!fh.getEnabled()){return;
}
if(this.__wq!=null){this._stopResizeHeader();
this.__wv=true;
e.stop();
}else if(this.__wl!=null){this._stopMoveHeader();
e.stop();
}},_onClickHeader:function(e){if(this.__wv){this.__wv=false;
return;
}var bu=this.getTable();

if(!bu.getEnabled()){return;
}var bs=bu.getTableModel();
var bt=e.getDocumentLeft();
var br=this._getResizeColumnForPageX(bt);

if(br==-1){var bx=this._getColumnForPageX(bt);

if(bx!=null&&bs.isColumnSortable(bx)){var bq=bs.getSortColumnIndex();
var bv=(bx!=bq)?true:!bs.isSortAscending();
var bw={column:bx,ascending:bv,clickEvent:e};

if(this.fireDataEvent(dh,bw,null,true)){bs.sortByColumn(bx,bv);

if(this.getResetSelectionOnHeaderClick()){bu.getSelectionModel().resetSelection();
}}}}e.stop();
},_onClickPane:function(e){var R=this.getTable();

if(!R.getEnabled()){return;
}var U=e.getDocumentLeft();
var V=e.getDocumentTop();
var S=this._getRowForPagePos(U,V);
var T=this._getColumnForPageX(U);

if(S!=null&&T!=null){R.getSelectionManager().handleClick(S,e);

if(this.__wf.isHidden()||(this.__wt&&!this.__wu&&!this.isEditing()&&S==this.__wt.row&&T==this.__wt.col)){this.fireEvent(dz,qx.ui.table.pane.CellEvent,[this,e,S,T],true);
this.__wu=true;
}}},_onContextMenu:function(e){var ex=e.getDocumentLeft();
var ey=e.getDocumentTop();
var ev=this._getRowForPagePos(ex,ey);
var ew=this._getColumnForPageX(ex);

if(this.__wf.isHidden()||(this.__wt&&ev==this.__wt.row&&ew==this.__wt.col)){this.fireEvent(df,qx.ui.table.pane.CellEvent,[this,e,ev,ew],true);
var eu=this.getTable().getContextMenu();

if(eu){if(eu.getChildren().length>0){eu.openAtMouse(e);
}else{eu.exclude();
}e.preventDefault();
}}},_onContextMenuOpen:function(e){},_onDblclickPane:function(e){var cg=e.getDocumentLeft();
var ch=e.getDocumentTop();
this._focusCellAtPagePos(cg,ch);
this.startEditing();
var cf=this._getRowForPagePos(cg,ch);

if(cf!=-1&&cf!=null){this.fireEvent(dn,qx.ui.table.pane.CellEvent,[this,e,cf],true);
}},_onMouseout:function(e){var ck=this.getTable();

if(!ck.getEnabled()){return;
}if(this.__wq==null){this.setCursor(null);
this.getApplicationRoot().setGlobalCursor(null);
}this.__wa.setMouseOverColumn(null);
},_showResizeLine:function(x){var C=this._showChildControl(cG);
var B=C.getWidth();
var D=this.__we.getBounds();
C.setUserBounds(x-Math.round(B/2),0,B,D.height);
},_hideResizeLine:function(){this._excludeChildControl(cG);
},showColumnMoveFeedback:function(bd){var bm=this.getTablePaneModel();
var bl=this.getTable().getTableColumnModel();
var bg=this.__wb.getContainerLocation().left;
var bk=bm.getColumnCount();
var bh=0;
var bf=0;
var bp=bg;

for(var be=0;be<bk;be++){var bi=bm.getColumnAtX(be);
var bn=bl.getColumnWidth(bi);

if(bd<bp+bn/2){break;
}bp+=bn;
bh=be+1;
bf=bp-bg;
}var bj=this.__we.getContainerLocation().left;
var bo=this.__we.getBounds().width;
var scrollX=bj-bg;
bf=qx.lang.Number.limit(bf,scrollX+2,scrollX+bo-1);
this._showResizeLine(bf);
return bm.getFirstColumnX()+bh;
},hideColumnMoveFeedback:function(){this._hideResizeLine();
},_focusCellAtPagePos:function(fp,fq){var fs=this._getRowForPagePos(fp,fq);

if(fs!=-1&&fs!=null){var fr=this._getColumnForPageX(fp);
this.__vW.setFocusedCell(fr,fs);
}},setFocusedCell:function(fw,fx){if(!this.isEditing()){this.__wb.setFocusedCell(fw,fx,this.__wj);
this.__wy=fw;
this.__wz=fx;
this._updateFocusIndicator();
}},getFocusedColumn:function(){return this.__wy;
},getFocusedRow:function(){return this.__wz;
},scrollCellVisible:function(by,bz){var bJ=this.getTablePaneModel();
var bA=bJ.getX(by);

if(bA!=-1){var bG=this.__we.getInnerSize();

if(!bG){return;
}var bH=this.getTable().getTableColumnModel();
var bD=bJ.getColumnLeft(by);
var bK=bH.getColumnWidth(by);
var bB=this.getTable().getRowHeight();
var bL=bz*bB;
var scrollX=this.getScrollX();
var scrollY=this.getScrollY();
var bI=Math.min(bD,bD+bK-bG.width);
var bF=bD;
this.setScrollX(Math.max(bI,Math.min(bF,scrollX)));
var bC=bL+bB-bG.height;

if(this.getTable().getKeepFirstVisibleRowComplete()){bC+=bB;
}var bE=bL;
this.setScrollY(Math.max(bC,Math.min(bE,scrollY)),true);
}},isEditing:function(){return this.__wA!=null;
},startEditing:function(){var I=this.getTable();
var G=I.getTableModel();
var K=this.__wy;

if(!this.isEditing()&&(K!=null)&&G.isColumnEditable(K)){var L=this.__wz;
var E=this.getTablePaneModel().getX(K);
var F=G.getValue(K,L);
this.__wB=I.getTableColumnModel().getCellEditorFactory(K);
var H={col:K,row:L,xPos:E,value:F,table:I};
this.__wA=this.__wB.createCellEditor(H);
if(this.__wA===null){return false;
}else if(this.__wA instanceof qx.ui.window.Window){this.__wA.setModal(true);
this.__wA.setShowClose(false);
this.__wA.addListener(dm,this._onCellEditorModalWindowClose,this);
var f=I.getModalCellEditorPreOpenFunction();

if(f!=null){f(this.__wA,H);
}this.__wA.open();
}else{var J=this.__wf.getInnerSize();
this.__wA.setUserBounds(0,0,J.width,J.height);
this.__wf.addListener(cF,function(e){this.__wt={row:this.__wz,col:this.__wy};
e.stopPropagation();
},this);
this.__wf.add(this.__wA);
this.__wf.addState(dD);
this.__wf.setKeepActive(false);
this.__wf.setDecorator(dH);
this.__wA.focus();
this.__wA.activate();
}return true;
}return false;
},stopEditing:function(){if(!this.getShowCellFocusIndicator()){this.__wf.setDecorator(null);
}this.flushEditor();
this.cancelEditing();
},flushEditor:function(){if(this.isEditing()){var fo=this.__wB.getCellEditorValue(this.__wA);
var fn=this.getTable().getTableModel().getValue(this.__wy,this.__wz);
this.getTable().getTableModel().setValue(this.__wy,this.__wz,fo);
this.__vW.focus();
this.__vW.fireDataEvent(dl,{row:this.__wz,col:this.__wy,oldValue:fn,value:fo});
}},cancelEditing:function(){if(this.isEditing()&&!this.__wA.pendingDispose){if(this._cellEditorIsModalWindow){this.__wA.destroy();
this.__wA=null;
this.__wB=null;
this.__wA.pendingDispose=true;
}else{this.__wf.removeState(dD);
this.__wf.setKeepActive(true);
this.__wA.destroy();
this.__wA=null;
this.__wB=null;
}}},_onCellEditorModalWindowClose:function(e){this.stopEditing();
},_getColumnForPageX:function(cl){var co=this.getTable().getTableColumnModel();
var cp=this.getTablePaneModel();
var cn=cp.getColumnCount();
var cr=this.__wa.getContainerLocation().left;

for(var x=0;x<cn;x++){var cm=cp.getColumnAtX(x);
var cq=co.getColumnWidth(cm);
cr+=cq;

if(cl<cr){return cm;
}}return null;
},_getResizeColumnForPageX:function(bT){var bX=this.getTable().getTableColumnModel();
var bY=this.getTablePaneModel();
var bW=bY.getColumnCount();
var cb=this.__wa.getContainerLocation().left;
var bU=qx.ui.table.pane.Scroller.RESIZE_REGION_RADIUS;

for(var x=0;x<bW;x++){var bV=bY.getColumnAtX(x);
var ca=bX.getColumnWidth(bV);
cb+=ca;

if(bT>=(cb-bU)&&bT<=(cb+bU)){return bV;
}}return -1;
},_getRowForPagePos:function(eX,eY){var fa=this.__wb.getContentLocation();

if(eX<fa.left||eX>fa.right){return null;
}
if(eY>=fa.top&&eY<=fa.bottom){var fb=this.getTable().getRowHeight();
var scrollY=this.__vY.getPosition();

if(this.getTable().getKeepFirstVisibleRowComplete()){scrollY=Math.floor(scrollY/fb)*fb;
}var fe=scrollY+eY-fa.top;
var fg=Math.floor(fe/fb);
var ff=this.getTable().getTableModel();
var fc=ff.getRowCount();
return (fg<fc)?fg:null;
}var fd=this.__wa.getContainerLocation();

if(eY>=fd.top&&eY<=fd.bottom&&eX<=fd.right){return -1;
}return null;
},setTopRightWidget:function(cc){var cd=this.__wC;

if(cd!=null){this.__wc.remove(cd);
}
if(cc!=null){this.__wc.add(cc);
}this.__wC=cc;
},getTopRightWidget:function(){return this.__wC;
},getHeader:function(){return this.__wa;
},getTablePane:function(){return this.__wb;
},getVerticalScrollBarWidth:function(){var eU=this.__vY;
return eU.isVisible()?(eU.getSizeHint().width||0):0;
},getNeededScrollBars:function(ez,eA){var eG=this.__vY.getSizeHint().width;
var eH=this.__we.getInnerSize();
var eB=eH?eH.width:0;

if(this.getVerticalScrollBarVisible()){eB+=eG;
}var eK=eH?eH.height:0;

if(this.getHorizontalScrollBarVisible()){eK+=eG;
}var eE=this.getTable().getTableModel();
var eI=eE.getRowCount();
var eL=this.getTablePaneModel().getTotalWidth();
var eJ=this.getTable().getRowHeight()*eI;
var eD=false;
var eM=false;

if(eL>eB){eD=true;

if(eJ>eK-eG){eM=true;
}}else if(eJ>eK){eM=true;

if(!eA&&(eL>eB-eG)){eD=true;
}}var eF=qx.ui.table.pane.Scroller.HORIZONTAL_SCROLLBAR;
var eC=qx.ui.table.pane.Scroller.VERTICAL_SCROLLBAR;
return ((ez||eD)?eF:0)|((eA||!eM)?0:eC);
},getPaneClipper:function(){return this.__we;
},_applyScrollTimeout:function(cv,cw){this._startInterval(cv);
},_startInterval:function(W){this.__wg.setInterval(W);
this.__wg.start();
},_stopInterval:function(){this.__wg.stop();
},_postponedUpdateContent:function(){this._updateContent();
},_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.__wj&&!this.__wb._layoutPending){this.__wj=false;
this._updateContent();
}}),_updateContent:function(){var m=this.__we.getInnerSize();

if(!m){return;
}var p=m.height;
var scrollX=this.__vX.getPosition();
var scrollY=this.__vY.getPosition();
var j=this.getTable().getRowHeight();
var k=Math.floor(scrollY/j);
var o=this.__wb.getFirstVisibleRow();
this.__wb.setFirstVisibleRow(k);
var l=Math.ceil(p/j);
var i=0;
var n=this.getTable().getKeepFirstVisibleRowComplete();

if(!n){l++;
i=scrollY%j;
}this.__wb.setVisibleRowCount(l);

if(k!=o){this._updateFocusIndicator();
}this.__we.scrollToX(scrollX);
if(!n){this.__we.scrollToY(i);
}},_updateFocusIndicator:function(){var q=this.getTable();

if(!q.getEnabled()){return;
}this.__wf.moveToCell(this.__wy,this.__wz);
}},destruct:function(){this._stopInterval();
var ce=this.getTablePaneModel();

if(ce){ce.dispose();
}this.__wt=this.__wC=this.__vW=null;
this._disposeObjects(cK,db,dv,cP,dt,dg,da,cO,cQ);
}});
})();
(function(){var t="px",s=".qooxdoo-table-cell-icon {",r="abstract",q="",p="qx.ui.table.cellrenderer.AbstractImage",o=" qooxdoo-table-cell-icon",n="<div></div>",m="'",l="no-repeat",k="}",e="  text-align:center;",j="inline-block",h="static",d="top",c="  padding-top:1px;",g="title='",f="string",i="-moz-inline-box";
qx.Class.define(p,{extend:qx.ui.table.cellrenderer.Abstract,type:r,construct:function(){qx.ui.table.cellrenderer.Abstract.call(this);
var y=this.self(arguments);

if(!y.stylesheet){y.stylesheet=qx.bom.Stylesheet.createElement(s+e+c+k);
}},members:{__FW:16,__FX:16,__FY:null,_insetY:2,_identifyImage:function(H){throw new Error("_identifyImage is abstract");
},_getImageInfos:function(z){var A=this._identifyImage(z);
if(A==null||typeof z==f){A={url:A,tooltip:null};
}var B=null;

if(z.width&&z.height){B={width:z.imageWidth,height:z.imageHeight};
}else{B=this.__Ga(A.url);
}A.width=B.width;
A.height=B.height;
return A;
},__Ga:function(C){var F=qx.util.ResourceManager.getInstance();
var E=qx.io.ImageLoader;
var D,G;
if(F.has(C)){D=F.getImageWidth(C);
G=F.getImageHeight(C);
}else if(E.isLoaded(C)){D=E.getWidth(C);
G=E.getHeight(C);
}else{D=this.__FW;
G=this.__FX;
}return {width:D,height:G};
},createDataCellHtml:function(w,x){this.__FY=this._getImageInfos(w);
return qx.ui.table.cellrenderer.Abstract.prototype.createDataCellHtml.call(this,w,x);
},_getCellClass:function(v){return qx.ui.table.cellrenderer.Abstract.prototype._getCellClass.call(this)+o;
},_getContentHtml:function(u){var content=n;
if(this.__FY.url){content=qx.bom.element.Decoration.create(this.__FY.url,l,{width:this.__FY.width+t,height:this.__FY.height+t,display:qx.bom.client.Engine.GECKO&&qx.bom.client.Engine.VERSION<1.9?i:j,verticalAlign:d,position:h});
}return content;
},_getCellAttributes:function(a){var b=this.__FY.tooltip;

if(b){return g+b+m;
}else{return q;
}}},destruct:function(){this.__FY=null;
}});
})();
(function(){var j="headerCellRendererChanged",i="visibilityChangedPre",h="Number",g="qx.event.type.Event",f="_applyFirstColumnX",e="Integer",d="qx.ui.table.pane.Model",c="_applyMaxColumnCount";
qx.Class.define(d,{extend:qx.core.Object,construct:function(s){qx.core.Object.call(this);
this.setTableColumnModel(s);
},events:{"modelChanged":g},statics:{EVENT_TYPE_MODEL_CHANGED:"modelChanged"},properties:{firstColumnX:{check:e,init:0,apply:f},maxColumnCount:{check:h,init:-1,apply:c}},members:{__wG:null,__wH:null,_applyFirstColumnX:function(y,z){this.__wG=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},_applyMaxColumnCount:function(a,b){this.__wG=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},setTableColumnModel:function(F){if(this.__wH){this.__wH.removeListener(i,this._onColVisibilityChanged,this);
this.__wH.removeListener(j,this._onColVisibilityChanged,this);
}this.__wH=F;
this.__wH.addListener(i,this._onColVisibilityChanged,this);
this.__wH.addListener(j,this._onHeaderCellRendererChanged,this);
this.__wG=null;
},_onColVisibilityChanged:function(A){this.__wG=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},_onHeaderCellRendererChanged:function(B){this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},getColumnCount:function(){if(this.__wG==null){var m=this.getFirstColumnX();
var o=this.getMaxColumnCount();
var n=this.__wH.getVisibleColumnCount();

if(o==-1||(m+o)>n){this.__wG=n-m;
}else{this.__wG=o;
}}return this.__wG;
},getColumnAtX:function(k){var l=this.getFirstColumnX();
return this.__wH.getVisibleColumnAtX(l+k);
},getX:function(C){var D=this.getFirstColumnX();
var E=this.getMaxColumnCount();
var x=this.__wH.getVisibleX(C)-D;

if(x>=0&&(E==-1||x<E)){return x;
}else{return -1;
}},getColumnLeft:function(t){var w=0;
var v=this.getColumnCount();

for(var x=0;x<v;x++){var u=this.getColumnAtX(x);

if(u==t){return w;
}w+=this.__wH.getColumnWidth(u);
}return -1;
},getTotalWidth:function(){var p=0;
var q=this.getColumnCount();

for(var x=0;x<q;x++){var r=this.getColumnAtX(x);
p+=this.__wH.getColumnWidth(r);
}return p;
}},destruct:function(){if(this.__wH){this.__wH.removeListener(i,this._onColVisibilityChanged,this);
this.__wH.removeListener(j,this._onColVisibilityChanged,this);
}this.__wH=null;
}});
})();
(function(){var f="changeVisible",d="qx.ui.table.columnmenu.MenuItem",c="_applyVisible",b="Boolean",a="changeValue";
qx.Class.define(d,{extend:qx.ui.menu.CheckBox,implement:qx.ui.table.IColumnMenuItem,properties:{visible:{check:b,init:true,apply:c,event:f}},construct:function(g){qx.ui.menu.CheckBox.call(this,g);
this.addListener(a,function(e){this.bInListener=true;
this.setVisible(e.getData());
this.bInListener=false;
});
},members:{__vj:false,_applyVisible:function(h,i){if(!this.bInListener){this.setValue(h);
}}}});
})();
(function(){var a="qx.lang.Number";
qx.Class.define(a,{statics:{isInRange:function(h,i,j){return h>=i&&h<=j;
},isBetweenRange:function(b,c,d){return b>c&&b<d;
},limit:function(e,f,g){if(g!=null&&e>g){return g;
}else if(f!=null&&e<f){return f;
}else{return e;
}}}});
})();
(function(){var c="hovered",b="__vT",a="qx.ui.table.pane.Header";
qx.Class.define(a,{extend:qx.ui.core.Widget,construct:function(J){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.HBox());
this.__vS=new qx.ui.core.Blocker(this);
this.__vT=J;
},members:{__vT:null,__vU:null,__vV:null,__vS:null,getPaneScroller:function(){return this.__vT;
},getTable:function(){return this.__vT.getTable();
},getBlocker:function(){return this.__vS;
},onColOrderChanged:function(){this._updateContent(true);
},onPaneModelChanged:function(){this._updateContent(true);
},onTableModelMetaDataChanged:function(){this._updateContent();
},setColumnWidth:function(q,r){var s=this.getHeaderWidgetAtColumn(q);

if(s!=null){s.setWidth(r);
}},setMouseOverColumn:function(K){if(K!=this.__vV){if(this.__vV!=null){var L=this.getHeaderWidgetAtColumn(this.__vV);

if(L!=null){L.removeState(c);
}}
if(K!=null){this.getHeaderWidgetAtColumn(K).addState(c);
}this.__vV=K;
}},getHeaderWidgetAtColumn:function(H){var I=this.getPaneScroller().getTablePaneModel().getX(H);
return this._getChildren()[I];
},showColumnMoveFeedback:function(d,x){var h=this.getContainerLocation();

if(this.__vU==null){var m=this.getTable();
var e=this.getPaneScroller().getTablePaneModel().getX(d);
var g=this._getChildren()[e];
var i=m.getTableModel();
var k=m.getTableColumnModel();
var l={xPos:e,col:d,name:i.getColumnName(d),table:m};
var j=k.getHeaderCellRenderer(d);
var f=j.createHeaderCell(l);
var n=g.getBounds();
f.setWidth(n.width);
f.setHeight(n.height);
f.setZIndex(1000000);
f.setOpacity(0.8);
f.setLayoutProperties({top:h.top});
this.getApplicationRoot().add(f);
this.__vU=f;
}this.__vU.setLayoutProperties({left:h.left+x});
this.__vU.show();
},hideColumnMoveFeedback:function(){if(this.__vU!=null){this.__vU.destroy();
this.__vU=null;
}},isShowingColumnMoveFeedback:function(){return this.__vU!=null;
},_updateContent:function(t){var E=this.getTable();
var y=E.getTableModel();
var B=E.getTableColumnModel();
var D=this.getPaneScroller().getTablePaneModel();
var G=this._getChildren();
var z=D.getColumnCount();
var C=y.getSortColumnIndex();
if(t){this._cleanUpCells();
}var u={};
u.sortedAscending=y.isSortAscending();

for(var x=0;x<z;x++){var w=D.getColumnAtX(x);

if(w===undefined){continue;
}var F=B.getColumnWidth(w);
var A=B.getHeaderCellRenderer(w);
u.xPos=x;
u.col=w;
u.name=y.getColumnName(w);
u.editable=y.isColumnEditable(w);
u.sorted=(w==C);
u.table=E;
var v=G[x];
if(v==null){v=A.createHeaderCell(u);
v.set({width:F});
this._add(v);
}else{A.updateHeaderCell(u,v);
}}},_cleanUpCells:function(){var p=this._getChildren();

for(var x=p.length-1;x>=0;x--){var o=p[x];
o.destroy();
}}},destruct:function(){this.__vS.dispose();
this._disposeObjects(b);
}});
})();
(function(){var u="",t="table-row-background-even",s="table-row-background-selected",r="table-row",q="background-color:",p="table-row-background-focused",o=';border-bottom: 1px solid ',n=';color:',m="table-row-selected",l="table-row-background-odd",e="default",k="table-row-background-focused-selected",h="qx.ui.table.rowrenderer.Default",d="table-row-line",c="'",g="height:",f=";",i="px;",b="1px solid ",j="Boolean";
qx.Class.define(h,{extend:qx.core.Object,implement:qx.ui.table.IRowRenderer,construct:function(){qx.core.Object.call(this);
this.__ve=u;
this.__ve={};
this.__vf={};
this._renderFont(qx.theme.manager.Font.getInstance().resolve(e));
var v=qx.theme.manager.Color.getInstance();
this.__vf.bgcolFocusedSelected=v.resolve(k);
this.__vf.bgcolFocused=v.resolve(p);
this.__vf.bgcolSelected=v.resolve(s);
this.__vf.bgcolEven=v.resolve(t);
this.__vf.bgcolOdd=v.resolve(l);
this.__vf.colSelected=v.resolve(m);
this.__vf.colNormal=v.resolve(r);
this.__vf.horLine=v.resolve(d);
},properties:{highlightFocusRow:{check:j,init:true}},members:{__vf:null,__vg:null,__ve:null,_insetY:1,_renderFont:function(a){if(a){this.__vg=a.getStyles();
this.__ve=qx.bom.element.Style.compile(this.__vg);
this.__ve=this.__ve.replace(/"/g,c);
}else{this.__ve=u;
this.__vg=qx.bom.Font.getDefaultStyles();
}},updateDataRowElement:function(w,x){var z=this.__vg;
var y=x.style;
qx.bom.element.Style.setStyles(x,z);

if(w.focusedRow&&this.getHighlightFocusRow()){y.backgroundColor=w.selected?this.__vf.bgcolFocusedSelected:this.__vf.bgcolFocused;
}else{if(w.selected){y.backgroundColor=this.__vf.bgcolSelected;
}else{y.backgroundColor=(w.row%2==0)?this.__vf.bgcolEven:this.__vf.bgcolOdd;
}}y.color=w.selected?this.__vf.colSelected:this.__vf.colNormal;
y.borderBottom=b+this.__vf.horLine;
},getRowHeightStyle:function(A){if(qx.bom.client.Feature.CONTENT_BOX){A-=this._insetY;
}return g+A+i;
},createRowStyle:function(B){var C=[];
C.push(f);
C.push(this.__ve);
C.push(q);

if(B.focusedRow&&this.getHighlightFocusRow()){C.push(B.selected?this.__vf.bgcolFocusedSelected:this.__vf.bgcolFocused);
}else{if(B.selected){C.push(this.__vf.bgcolSelected);
}else{C.push((B.row%2==0)?this.__vf.bgcolEven:this.__vf.bgcolOdd);
}}C.push(n);
C.push(B.selected?this.__vf.colSelected:this.__vf.colNormal);
C.push(o,this.__vf.horLine);
return C.join(u);
},getRowClass:function(D){return u;
},getRowAttributes:function(E){return u;
}},destruct:function(){this.__vf=this.__vg=this.__ve=null;
}});
})();
(function(){var g="String",f="_applyIconTrue",e="decoration/table/boolean-true.png",d="qx.ui.table.cellrenderer.Boolean",c=";padding-top:4px;",b="decoration/table/boolean-false.png",a="_applyIconFalse";
qx.Class.define(d,{extend:qx.ui.table.cellrenderer.AbstractImage,construct:function(){qx.ui.table.cellrenderer.AbstractImage.call(this);
this.__HV=qx.util.AliasManager.getInstance();
this.initIconTrue();
this.initIconFalse();
},properties:{iconTrue:{check:g,init:e,apply:f},iconFalse:{check:g,init:b,apply:a}},members:{__HW:null,__HX:false,__HV:null,_applyIconTrue:function(l){this.__HW=this.__HV.resolve(l);
},_applyIconFalse:function(i){this.__HX=this.__HV.resolve(i);
},_insetY:5,_getCellStyle:function(h){return qx.ui.table.cellrenderer.AbstractImage.prototype._getCellStyle.call(this,h)+c;
},_identifyImage:function(j){var k={imageWidth:11,imageHeight:11};

switch(j.value){case true:k.url=this.__HW;
break;
case false:k.url=this.__HX;
break;
default:k.url=null;
break;
}return k;
}},destruct:function(){this.__HV=null;
}});
})();
(function(){var cx="Boolean",cw="column-button",cv="Function",cu="qx.event.type.Data",ct="statusbar",cs="qx.ui.table.pane.CellEvent",cr="function",cq="PageUp",cp="dataChanged",co='"',dN="changeLocale",dM="changeSelection",dL="__uY",dK="qx.dynlocale",dJ="Enter",dI="metaDataChanged",dH="on",dG="_applyStatusBarVisible",dF="columnVisibilityMenuCreateStart",dE="blur",cE="qx.ui.table.Table",cF="columnVisibilityMenuCreateEnd",cC="__uW",cD="changeVisible",cA="_applyResetSelectionOnHeaderClick",cB="_applyMetaColumnCounts",cy="focus",cz="changeDataRowRenderer",cM="changeHeaderCellHeight",cN="Escape",df="A",db="changeSelectionModel",dn="Left",di="Down",dA="Integer",du="_applyHeaderCellHeight",cU="__uX",dD="visibilityChanged",dC="qx.ui.table.ITableModel",dB="orderChanged",cS="_applySelectionModel",cW="menu-button",cY="menu",dd="_applyAdditionalStatusBarText",dg="_applyFocusCellOnMouseMove",dj="table",dq="_applyColumnVisibilityButtonVisible",dw="changeTableModel",cG="qx.event.type.Event",cH="tableWidthChanged",cV="__uO",dm="_applyHeaderCellsVisible",dl="Object",dk="_applyShowCellFocusIndicator",ds="__uP",dr="resize",dh="verticalScrollBarChanged",dp="changeScrollY",ck="_applyTableModel",dv="End",cI="_applyKeepFirstVisibleRowComplete",cJ="widthChanged",dc="one of one row",cl="Home",cn="_applyRowHeight",cR="F2",cK="appear",cL="Up",cP="%1 rows",de="qx.ui.table.selection.Model",dy="one row",dx="PageDown",cX="%1 of %2 rows",dz="keypress",cT="changeRowHeight",dt="Number",cO="header",cQ="qx.ui.table.IRowRenderer",cm="Right",da="Space";
qx.Class.define(cE,{extend:qx.ui.core.Widget,construct:function(X,Y){qx.ui.core.Widget.call(this);
if(!Y){Y={};
}
if(Y.selectionManager){this.setNewSelectionManager(Y.selectionManager);
}
if(Y.selectionModel){this.setNewSelectionModel(Y.selectionModel);
}
if(Y.tableColumnModel){this.setNewTableColumnModel(Y.tableColumnModel);
}
if(Y.tablePane){this.setNewTablePane(Y.tablePane);
}
if(Y.tablePaneHeader){this.setNewTablePaneHeader(Y.tablePaneHeader);
}
if(Y.tablePaneScroller){this.setNewTablePaneScroller(Y.tablePaneScroller);
}
if(Y.tablePaneModel){this.setNewTablePaneModel(Y.tablePaneModel);
}
if(Y.columnMenu){this.setNewColumnMenu(Y.columnMenu);
}this._setLayout(new qx.ui.layout.VBox());
this.__uO=new qx.ui.container.Composite(new qx.ui.layout.HBox());
this._add(this.__uO,{flex:1});
this.setDataRowRenderer(new qx.ui.table.rowrenderer.Default(this));
this.__uP=this.getNewSelectionManager()(this);
this.setSelectionModel(this.getNewSelectionModel()(this));
this.setTableModel(X||this.getEmptyTableModel());
this.setMetaColumnCounts([-1]);
this.setTabIndex(1);
this.addListener(dz,this._onKeyPress);
this.addListener(cy,this._onFocusChanged);
this.addListener(dE,this._onFocusChanged);
var ba=new qx.ui.core.Widget().set({height:0});
this._add(ba);
ba.addListener(dr,this._onResize,this);
this.__uQ=null;
this.__uR=null;
if(qx.core.Variant.isSet(dK,dH)){qx.locale.Manager.getInstance().addListener(dN,this._onChangeLocale,this);
}this.initStatusBarVisible();
X=this.getTableModel();

if(X.init&&typeof (X.init)==cr){X.init(this);
}},events:{"columnVisibilityMenuCreateStart":cu,"columnVisibilityMenuCreateEnd":cu,"tableWidthChanged":cG,"verticalScrollBarChanged":cu,"cellClick":cs,"cellDblclick":cs,"cellContextmenu":cs,"dataEdited":cu},statics:{__uS:{cellClick:1,cellDblclick:1,cellContextmenu:1}},properties:{appearance:{refine:true,init:dj},focusable:{refine:true,init:true},minWidth:{refine:true,init:50},selectable:{refine:true,init:false},selectionModel:{check:de,apply:cS,event:db},tableModel:{check:dC,apply:ck,event:dw},rowHeight:{check:dt,init:20,apply:cn,event:cT},forceLineHeight:{check:cx,init:true},headerCellsVisible:{check:cx,init:true,apply:dm},headerCellHeight:{check:dA,init:16,apply:du,event:cM,nullable:true},statusBarVisible:{check:cx,init:true,apply:dG},additionalStatusBarText:{nullable:true,init:null,apply:dd},columnVisibilityButtonVisible:{check:cx,init:true,apply:dq},metaColumnCounts:{check:dl,apply:cB},focusCellOnMouseMove:{check:cx,init:false,apply:dg},rowFocusChangeModifiesSelection:{check:cx,init:true},showCellFocusIndicator:{check:cx,init:true,apply:dk},keepFirstVisibleRowComplete:{check:cx,init:true,apply:cI},alwaysUpdateCells:{check:cx,init:false},resetSelectionOnHeaderClick:{check:cx,init:true,apply:cA},dataRowRenderer:{check:cQ,init:null,nullable:true,event:cz},modalCellEditorPreOpenFunction:{check:cv,init:null,nullable:true},newColumnMenu:{check:cv,init:function(){return new qx.ui.table.columnmenu.Button();
}},newSelectionManager:{check:cv,init:function(eN){return new qx.ui.table.selection.Manager(eN);
}},newSelectionModel:{check:cv,init:function(bR){return new qx.ui.table.selection.Model(bR);
}},newTableColumnModel:{check:cv,init:function(bb){return new qx.ui.table.columnmodel.Basic(bb);
}},newTablePane:{check:cv,init:function(el){return new qx.ui.table.pane.Pane(el);
}},newTablePaneHeader:{check:cv,init:function(ff){return new qx.ui.table.pane.Header(ff);
}},newTablePaneScroller:{check:cv,init:function(ch){return new qx.ui.table.pane.Scroller(ch);
}},newTablePaneModel:{check:cv,init:function(eO){return new qx.ui.table.pane.Model(eO);
}}},members:{__uQ:null,__uR:null,__uO:null,__uP:null,__uT:null,__uU:null,__uV:null,__uW:null,__uX:null,__uY:null,_createChildControlImpl:function(eX){var eY;

switch(eX){case ct:eY=new qx.ui.basic.Label();
eY.set({allowGrowX:true});
this._add(eY);
break;
case cw:eY=this.getNewColumnMenu()();
eY.set({focusable:false});
var fa=eY.factory(cY,{table:this});
fa.addListener(cK,this._initColumnMenu,this);
break;
}return eY||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,eX);
},_applySelectionModel:function(eG,eH){this.__uP.setSelectionModel(eG);

if(eH!=null){eH.removeListener(dM,this._onSelectionChanged,this);
}eG.addListener(dM,this._onSelectionChanged,this);
},_applyRowHeight:function(u,v){var w=this._getPaneScrollerArr();

for(var i=0;i<w.length;i++){w[i].updateVerScrollBarMaximum();
}},_applyHeaderCellsVisible:function(L,M){var N=this._getPaneScrollerArr();

for(var i=0;i<N.length;i++){N[i]._excludeChildControl(cO);
}},_applyHeaderCellHeight:function(eA,eB){var eC=this._getPaneScrollerArr();

for(var i=0;i<eC.length;i++){eC[i].getHeader().setHeight(eA);
}},getEmptyTableModel:function(){if(!this.__uY){this.__uY=new qx.ui.table.model.Simple();
this.__uY.setColumns([]);
this.__uY.setData([]);
}return this.__uY;
},_applyTableModel:function(n,o){this.getTableColumnModel().init(n.getColumnCount(),this);

if(o!=null){o.removeListener(dI,this._onTableModelMetaDataChanged,this);
o.removeListener(cp,this._onTableModelDataChanged,this);
}n.addListener(dI,this._onTableModelMetaDataChanged,this);
n.addListener(cp,this._onTableModelDataChanged,this);
this._updateStatusBar();
this._updateTableData(0,n.getRowCount(),0,n.getColumnCount());
this._onTableModelMetaDataChanged();
if(o&&n.init&&typeof (n.init)==cr){n.init(this);
}},getTableColumnModel:function(){if(!this.__uX){var fk=this.__uX=this.getNewTableColumnModel()(this);
fk.addListener(dD,this._onColVisibilityChanged,this);
fk.addListener(cJ,this._onColWidthChanged,this);
fk.addListener(dB,this._onColOrderChanged,this);
var fj=this.getTableModel();
fk.init(fj.getColumnCount(),this);
var fi=this._getPaneScrollerArr();

for(var i=0;i<fi.length;i++){var fl=fi[i];
var fm=fl.getTablePaneModel();
fm.setTableColumnModel(fk);
}}return this.__uX;
},_applyStatusBarVisible:function(eL,eM){if(eL){this._showChildControl(ct);
}else{this._excludeChildControl(ct);
}
if(eL){this._updateStatusBar();
}},_applyAdditionalStatusBarText:function(by,bz){this.__uT=by;
this._updateStatusBar();
},_applyColumnVisibilityButtonVisible:function(cd,ce){if(cd){this._showChildControl(cw);
}else{this._excludeChildControl(cw);
}},_applyMetaColumnCounts:function(bi,bj){var bq=bi;
var bk=this._getPaneScrollerArr();
var bo={};

if(bi>bj){var bs=qx.event.Registration.getManager(bk[0]);

for(var bt in qx.ui.table.Table.__uS){bo[bt]={};
bo[bt].capture=bs.getListeners(bk[0],bt,true);
bo[bt].bubble=bs.getListeners(bk[0],bt,false);
}}this._cleanUpMetaColumns(bq.length);
var bp=0;

for(var i=0;i<bk.length;i++){var bu=bk[i];
var br=bu.getTablePaneModel();
br.setFirstColumnX(bp);
br.setMaxColumnCount(bq[i]);
bp+=bq[i];
}if(bq.length>bk.length){var bn=this.getTableColumnModel();

for(var i=bk.length;i<bq.length;i++){var br=this.getNewTablePaneModel()(bn);
br.setFirstColumnX(bp);
br.setMaxColumnCount(bq[i]);
bp+=bq[i];
var bu=this.getNewTablePaneScroller()(this);
bu.setTablePaneModel(br);
bu.addListener(dp,this._onScrollY,this);
for(bt in qx.ui.table.Table.__uS){if(!bo[bt]){break;
}
if(bo[bt].capture&&bo[bt].capture.length>0){var bl=bo[bt].capture;

for(var i=0;i<bl.length;i++){var bm=bl[i].context;

if(!bm){bm=this;
}else if(bm==bk[0]){bm=bu;
}bu.addListener(bt,bl[i].handler,bm,true);
}}
if(bo[bt].bubble&&bo[bt].bubble.length>0){var bw=bo[bt].bubble;

for(var i=0;i<bw.length;i++){var bm=bw[i].context;

if(!bm){bm=this;
}else if(bm==bk[0]){bm=bu;
}bu.addListener(bt,bw[i].handler,bm,false);
}}}var bv=(i==bq.length-1)?1:0;
this.__uO.add(bu,{flex:bv});
bk=this._getPaneScrollerArr();
}}for(var i=0;i<bk.length;i++){var bu=bk[i];
var bx=(i==(bk.length-1));
bu.getHeader().setHeight(this.getHeaderCellHeight());
bu.setTopRightWidget(bx?this.getChildControl(cw):null);
}
if(!this.isColumnVisibilityButtonVisible()){this._excludeChildControl(cw);
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},_applyFocusCellOnMouseMove:function(en,eo){var ep=this._getPaneScrollerArr();

for(var i=0;i<ep.length;i++){ep[i].setFocusCellOnMouseMove(en);
}},_applyShowCellFocusIndicator:function(ef,eg){var eh=this._getPaneScrollerArr();

for(var i=0;i<eh.length;i++){eh[i].setShowCellFocusIndicator(ef);
}},_applyKeepFirstVisibleRowComplete:function(c,d){var e=this._getPaneScrollerArr();

for(var i=0;i<e.length;i++){e[i].onKeepFirstVisibleRowCompleteChanged();
}},_applyResetSelectionOnHeaderClick:function(C,D){var E=this._getPaneScrollerArr();

for(var i=0;i<E.length;i++){E[i].setResetSelectionOnHeaderClick(C);
}},getSelectionManager:function(){return this.__uP;
},_getPaneScrollerArr:function(){return this.__uO.getChildren();
},getPaneScroller:function(em){return this._getPaneScrollerArr()[em];
},_cleanUpMetaColumns:function(fd){var fe=this._getPaneScrollerArr();

if(fe!=null){for(var i=fe.length-1;i>=fd;i--){fe[i].destroy();
}}},_onChangeLocale:function(f){this.updateContent();
this._updateStatusBar();
},_onSelectionChanged:function(be){var bf=this._getPaneScrollerArr();

for(var i=0;i<bf.length;i++){bf[i].onSelectionChanged();
}this._updateStatusBar();
},_onTableModelMetaDataChanged:function(bS){var bT=this._getPaneScrollerArr();

for(var i=0;i<bT.length;i++){bT[i].onTableModelMetaDataChanged();
}this._updateStatusBar();
},_onTableModelDataChanged:function(fb){var fc=fb.getData();
this._updateTableData(fc.firstRow,fc.lastRow,fc.firstColumn,fc.lastColumn,fc.removeStart,fc.removeCount);
},_updateTableData:function(bU,bV,bW,bX,bY,ca){var cb=this._getPaneScrollerArr();
if(ca){this.getSelectionModel().removeSelectionInterval(bY,bY+ca);
if(this.__uR>=bY&&this.__uR<(bY+ca)){this.setFocusedCell();
}}
for(var i=0;i<cb.length;i++){cb[i].onTableModelDataChanged(bU,bV,bW,bX);
}var cc=this.getTableModel().getRowCount();

if(cc!=this.__uU){this.__uU=cc;
this._updateScrollBarVisibility();
this._updateStatusBar();
}},_onScrollY:function(a){if(!this.__uV){this.__uV=true;
var b=this._getPaneScrollerArr();

for(var i=0;i<b.length;i++){b[i].setScrollY(a.getData());
}this.__uV=false;
}},_onKeyPress:function(dO){if(!this.getEnabled()){return;
}var dV=this.__uR;
var dS=true;
var dW=dO.getKeyIdentifier();

if(this.isEditing()){if(dO.getModifiers()==0){switch(dW){case dJ:this.stopEditing();
var dV=this.__uR;
this.moveFocusedCell(0,1);

if(this.__uR!=dV){dS=this.startEditing();
}break;
case cN:this.cancelEditing();
this.focus();
break;
default:dS=false;
break;
}}}else{if(dO.isCtrlPressed()){dS=true;

switch(dW){case df:var dT=this.getTableModel().getRowCount();

if(dT>0){this.getSelectionModel().setSelectionInterval(0,dT-1);
}break;
default:dS=false;
break;
}}else{switch(dW){case da:this.__uP.handleSelectKeyDown(this.__uR,dO);
break;
case cR:case dJ:this.startEditing();
dS=true;
break;
case cl:this.setFocusedCell(this.__uQ,0,true);
break;
case dv:var dT=this.getTableModel().getRowCount();
this.setFocusedCell(this.__uQ,dT-1,true);
break;
case dn:this.moveFocusedCell(-1,0);
break;
case cm:this.moveFocusedCell(1,0);
break;
case cL:this.moveFocusedCell(0,-1);
break;
case di:this.moveFocusedCell(0,1);
break;
case cq:case dx:var dR=this.getPaneScroller(0);
var dU=dR.getTablePane();
var dQ=this.getRowHeight();
var dP=(dW==cq)?-1:1;
dT=dU.getVisibleRowCount()-1;
dR.setScrollY(dR.getScrollY()+dP*dT*dQ);
this.moveFocusedCell(0,dP*dT);
break;
default:dS=false;
}}}
if(dV!=this.__uR&&this.getRowFocusChangeModifiesSelection()){this.__uP.handleMoveKeyDown(this.__uR,dO);
}
if(dS){dO.preventDefault();
dO.stopPropagation();
}},_onFocusChanged:function(cf){var cg=this._getPaneScrollerArr();

for(var i=0;i<cg.length;i++){cg[i].onFocusChanged();
}},_onColVisibilityChanged:function(eq){var er=this._getPaneScrollerArr();

for(var i=0;i<er.length;i++){er[i].onColVisibilityChanged();
}var es=eq.getData();

if(this.__uW!=null&&es.col!=null&&es.visible!=null){this.__uW[es.col].setVisible(es.visible);
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},_onColWidthChanged:function(bN){var bO=this._getPaneScrollerArr();

for(var i=0;i<bO.length;i++){var bP=bN.getData();
bO[i].setColumnWidth(bP.col,bP.newWidth);
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},_onColOrderChanged:function(eI){var eJ=this._getPaneScrollerArr();

for(var i=0;i<eJ.length;i++){eJ[i].onColOrderChanged();
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},getTablePaneScrollerAtPageX:function(bc){var bd=this._getMetaColumnAtPageX(bc);
return (bd!=-1)?this.getPaneScroller(bd):null;
},setFocusedCell:function(bF,bG,bH){if(!this.isEditing()&&(bF!=this.__uQ||bG!=this.__uR)){if(bF===null){bF=0;
}this.__uQ=bF;
this.__uR=bG;
var bI=this._getPaneScrollerArr();

for(var i=0;i<bI.length;i++){bI[i].setFocusedCell(bF,bG);
}
if(bF!==null&&bH){this.scrollCellVisible(bF,bG);
}}},resetSelection:function(){this.getSelectionModel().resetSelection();
},resetCellFocus:function(){this.setFocusedCell(null,null,false);
},getFocusedColumn:function(){return this.__uQ;
},getFocusedRow:function(){return this.__uR;
},highlightFocusedRow:function(K){this.getDataRowRenderer().setHighlightFocusRow(K);
},clearFocusedRowHighlight:function(eD){if(eD){var eF=eD.getRelatedTarget();

if(eF instanceof qx.ui.table.pane.Pane||eF instanceof qx.ui.table.pane.FocusIndicator){return;
}}this.resetCellFocus();
var eE=this._getPaneScrollerArr();

for(var i=0;i<eE.length;i++){eE[i].onFocusChanged();
}},moveFocusedCell:function(dX,dY){var ed=this.__uQ;
var ee=this.__uR;

if(ed===null||ee===null){return;
}
if(dX!=0){var ec=this.getTableColumnModel();
var x=ec.getVisibleX(ed);
var eb=ec.getVisibleColumnCount();
x=qx.lang.Number.limit(x+dX,0,eb-1);
ed=ec.getVisibleColumnAtX(x);
}
if(dY!=0){var ea=this.getTableModel();
ee=qx.lang.Number.limit(ee+dY,0,ea.getRowCount()-1);
}this.setFocusedCell(ed,ee,true);
},scrollCellVisible:function(O,P){var Q=this.getTableColumnModel();
var x=Q.getVisibleX(O);
var R=this._getMetaColumnAtColumnX(x);

if(R!=-1){this.getPaneScroller(R).scrollCellVisible(O,P);
}},isEditing:function(){if(this.__uQ!=null){var x=this.getTableColumnModel().getVisibleX(this.__uQ);
var bQ=this._getMetaColumnAtColumnX(x);
return this.getPaneScroller(bQ).isEditing();
}return false;
},startEditing:function(){if(this.__uQ!=null){var x=this.getTableColumnModel().getVisibleX(this.__uQ);
var fh=this._getMetaColumnAtColumnX(x);
var fg=this.getPaneScroller(fh).startEditing();
return fg;
}return false;
},stopEditing:function(){if(this.__uQ!=null){var x=this.getTableColumnModel().getVisibleX(this.__uQ);
var m=this._getMetaColumnAtColumnX(x);
this.getPaneScroller(m).stopEditing();
}},cancelEditing:function(){if(this.__uQ!=null){var x=this.getTableColumnModel().getVisibleX(this.__uQ);
var ci=this._getMetaColumnAtColumnX(x);
this.getPaneScroller(ci).cancelEditing();
}},updateContent:function(){var eK=this._getPaneScrollerArr();

for(var i=0;i<eK.length;i++){eK[i].getTablePane().updateContent(true);
}},blockHeaderElements:function(){var ek=this._getPaneScrollerArr();

for(var i=0;i<ek.length;i++){ek[i].getHeader().getBlocker().blockContent(20);
}this.getChildControl(cw).getBlocker().blockContent(20);
},unblockHeaderElements:function(){var cj=this._getPaneScrollerArr();

for(var i=0;i<cj.length;i++){cj[i].getHeader().getBlocker().unblockContent();
}this.getChildControl(cw).getBlocker().unblockContent();
},_getMetaColumnAtPageX:function(F){var G=this._getPaneScrollerArr();

for(var i=0;i<G.length;i++){var H=G[i].getContainerLocation();

if(F>=H.left&&F<=H.right){return i;
}}return -1;
},_getMetaColumnAtColumnX:function(g){var j=this.getMetaColumnCounts();
var k=0;

for(var i=0;i<j.length;i++){var h=j[i];
k+=h;

if(h==-1||g<k){return i;
}}return -1;
},_updateStatusBar:function(){var y=this.getTableModel();

if(this.getStatusBarVisible()){var z=this.getSelectionModel().getSelectedCount();
var B=y.getRowCount();
var A;

if(B>=0){if(z==0){A=this.trn(dy,cP,B,B);
}else{A=this.trn(dc,cX,B,z,B);
}}
if(this.__uT){if(A){A+=this.__uT;
}else{A=this.__uT;
}}
if(A){this.getChildControl(ct).setValue(A);
}}},_updateScrollerWidths:function(){var bJ=this._getPaneScrollerArr();

for(var i=0;i<bJ.length;i++){var bL=(i==(bJ.length-1));
var bM=bJ[i].getTablePaneModel().getTotalWidth();
bJ[i].setPaneWidth(bM);
var bK=bL?1:0;
bJ[i].setLayoutProperties({flex:bK});
}},_updateScrollBarVisibility:function(){if(!this.getBounds()){return;
}var eS=qx.ui.table.pane.Scroller.HORIZONTAL_SCROLLBAR;
var eV=qx.ui.table.pane.Scroller.VERTICAL_SCROLLBAR;
var eP=this._getPaneScrollerArr();
var eR=false;
var eU=false;

for(var i=0;i<eP.length;i++){var eW=(i==(eP.length-1));
var eQ=eP[i].getNeededScrollBars(eR,!eW);

if(eQ&eS){eR=true;
}
if(eW&&(eQ&eV)){eU=true;
}}for(var i=0;i<eP.length;i++){var eW=(i==(eP.length-1));
var eT;
eP[i].setHorizontalScrollBarVisible(eR);
if(eW){eT=eP[i].getVerticalScrollBarVisible();
}eP[i].setVerticalScrollBarVisible(eW&&eU);
if(eW&&eU!=eT){this.fireDataEvent(dh,eU);
}}},_initColumnMenu:function(){var ev=this.getTableModel();
var ew=this.getTableColumnModel();
var ex=this.getChildControl(cw);
ex.empty();
var eu=ex.getMenu();
var ey={table:this,menu:eu,columnButton:ex};
this.fireDataEvent(dF,ey);
this.__uW={};

for(var ez=0,l=ev.getColumnCount();ez<l;ez++){var et=ex.factory(cW,{text:ev.getColumnName(ez),column:ez,bVisible:ew.isColumnVisible(ez)});
qx.core.Assert.assertInterface(et,qx.ui.table.IColumnMenuItem);
et.addListener(cD,this._createColumnVisibilityCheckBoxHandler(ez),this);
this.__uW[ez]=et;
}ey={table:this,menu:eu,columnButton:ex};
this.fireDataEvent(cF,ey);
},_createColumnVisibilityCheckBoxHandler:function(bE){return function(bg){var bh=this.getTableColumnModel();
bh.setColumnVisible(bE,bg.getData());
};
},setColumnWidth:function(I,J){this.getTableColumnModel().setColumnWidth(I,J);
},_onResize:function(){this.fireEvent(cH);
this._updateScrollerWidths();
this._updateScrollBarVisibility();
},addListener:function(p,q,self,r){if(this.self(arguments).__uS[p]){var t=[p];

for(var i=0,s=this._getPaneScrollerArr();i<s.length;i++){t.push(s[i].addListener.apply(s[i],arguments));
}return t.join(co);
}else{return qx.ui.core.Widget.prototype.addListener.call(this,p,q,self,r);
}},removeListener:function(bA,bB,self,bC){if(this.self(arguments).__uS[bA]){for(var i=0,bD=this._getPaneScrollerArr();i<bD.length;i++){bD[i].removeListener.apply(bD[i],arguments);
}}else{qx.ui.core.Widget.prototype.removeListener.call(this,bA,bB,self,bC);
}},removeListenerById:function(S){var W=S.split(co);
var V=W.shift();

if(this.self(arguments).__uS[V]){var U=true;

for(var i=0,T=this._getPaneScrollerArr();i<T.length;i++){U=T[i].removeListenerById.call(T[i],W[i])&&U;
}return U;
}else{return qx.ui.core.Widget.prototype.removeListenerById.call(this,S);
}},destroy:function(){this.getChildControl(cw).getMenu().destroy();
qx.ui.core.Widget.prototype.destroy.call(this);
}},destruct:function(){if(qx.core.Variant.isSet(dK,dH)){qx.locale.Manager.getInstance().removeListener(dN,this._onChangeLocale,this);
}var ej=this.getSelectionModel();

if(ej){ej.dispose();
}var ei=this.getDataRowRenderer();

if(ei){ei.dispose();
}this._cleanUpMetaColumns(0);
this.getTableColumnModel().dispose();
this._disposeObjects(ds,cV,dL,dL,cU);
this._disposeMap(cC);
}});
})();

});