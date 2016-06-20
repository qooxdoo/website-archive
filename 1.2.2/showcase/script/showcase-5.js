qx.$$packageData['5db4aa2e349d']={"locales":{},"resources":{},"translations":{"C":{},"de":{"Last month":"Vorheriger Monat","Last year":"Vorheriges Jahr","Next month":"Nächster Monat","Next year":"Nächstes Jahr"},"en":{},"es":{"Last month":"Último mes","Last year":"Último año","Next month":"Mes siguiente","Next year":"Año siguiente"}}};

qx.Part.$$notifyLoad("5db4aa2e349d", function() {
(function(){var n="Boolean",m="changeInvalidMessage",l="changeSelection",k="String",j="_applyValid",h="",g="changeRequired",f="changeValid",d="__xj",c="_applyInvalidMessage",a="qx.ui.form.RadioButtonGroup",b="qx.event.type.Data";
qx.Class.define(a,{extend:qx.ui.core.Widget,include:[qx.ui.core.MLayoutHandling,qx.ui.form.MModelSelection],implement:[qx.ui.form.IForm,qx.ui.core.ISingleSelection,qx.ui.form.IModelSelection],construct:function(y){qx.ui.core.Widget.call(this);
if(y==null){this.setLayout(new qx.ui.layout.VBox(4));
}else{this.setLayout(y);
}this.__xj=new qx.ui.form.RadioGroup();
this.__xj.addListener(l,function(e){this.fireDataEvent(l,e.getData(),e.getOldData());
},this);
},properties:{valid:{check:n,init:true,apply:j,event:f},required:{check:n,init:false,event:g},invalidMessage:{check:k,init:h,event:m,apply:c},requiredInvalidMessage:{check:k,nullable:true,event:m}},events:{"changeSelection":b},members:{__xj:null,_applyInvalidMessage:function(z,A){var B=this._getChildren();

for(var i=0;i<B.length;i++){B[i].setInvalidMessage(z);
}},_applyValid:function(t,u){var v=this._getChildren();

for(var i=0;i<v.length;i++){v[i].setValid(t);
}},getRadioGroup:function(){return this.__xj;
},getChildren:function(){return this._getChildren();
},add:function(o,p){this.__xj.add(o);
this._add(o,p);
},remove:function(x){this.__xj.remove(x);
this._remove(x);
},removeAll:function(){var w=this.__xj.getItems();

for(var i=0;i<w.length;i++){this.__xj.remove(w[i]);
}this._removeAll();
},getSelection:function(){return this.__xj.getSelection();
},setSelection:function(s){return this.__xj.setSelection(s);
},resetSelection:function(){return this.__xj.resetSelection();
},isSelected:function(r){return this.__xj.isSelected(r);
},isSelectionEmpty:function(){return this.__xj.isSelectionEmpty();
},getSelectables:function(q){return this.__xj.getSelectables(q);
}},destruct:function(){this._disposeObjects(d);
}});
})();
(function(){var b="qx.ui.form.IDateForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var m="selected",l="click",k="last-month-button",j="default",h="next-month-button",g="otherMonth",f="month-year-label",d="last-year-button",c="navigation-bar",b="next-year-button",bm="date-pane",bl="PageUp",bk="mousedown",bj="today",bi="Integer",bh="PageDown",bg="changeLocale",bf="next-month-button-tooltip",be="last-month-button-tooltip",bd="qx.dynlocale",t="last-year-button-tooltip",u="next-year-button-tooltip",r="on",s="weekend",p="day",q="lastMonth",n="Next month",o="Escape",z="Left",A="weekday",I="changeValue",G="Space",Q="Down",L="qx.ui.control.DateChooser",Y="Date",V="Enter",C="dblclick",bc="day#",bb="Next year",ba="ww",B="_applyValue",E="Up",F="weekday#",H="datechooser",J="header",M="week",S="lastYear",X="nextYear",v="changeShownYear",w="week#",D="Last month",P="Right",O="Last year",N="EE",U="mouseup",T="keypress",K="",R="nextMonth",a="week#0",W="changeShownMonth";
qx.Class.define(L,{extend:qx.ui.core.Widget,include:[qx.ui.core.MExecutable,qx.ui.form.MForm],implement:[qx.ui.form.IExecutable,qx.ui.form.IForm,qx.ui.form.IDateForm],construct:function(bs){qx.ui.core.Widget.call(this);
var bu=new qx.ui.layout.VBox();
this._setLayout(bu);
this._createChildControl(c);
this._createChildControl(bm);
this.addListener(T,this._onKeyPress);
var bt=(bs!=null)?bs:new Date();
this.showMonth(bt.getMonth(),bt.getFullYear());
if(qx.core.Variant.isSet(bd,r)){qx.locale.Manager.getInstance().addListener(bg,this._updateDatePane,this);
}this.addListener(bk,this._onMouseUpDown,this);
this.addListener(U,this._onMouseUpDown,this);
},statics:{MONTH_YEAR_FORMAT:qx.locale.Date.getDateTimeFormat("yyyyMMMM","MMMM yyyy")},properties:{appearance:{refine:true,init:H},width:{refine:true,init:200},height:{refine:true,init:150},shownMonth:{check:bi,init:null,nullable:true,event:W},shownYear:{check:bi,init:null,nullable:true,event:v},value:{check:Y,init:null,nullable:true,event:I,apply:B}},members:{__zm:null,__zn:null,__zo:null,_forwardStates:{invalid:true},_createChildControlImpl:function(bo){var bp;

switch(bo){case c:bp=new qx.ui.container.Composite(new qx.ui.layout.HBox());
bp.add(this.getChildControl(d));
bp.add(this.getChildControl(k));
bp.add(this.getChildControl(f),{flex:1});
bp.add(this.getChildControl(h));
bp.add(this.getChildControl(b));
this._add(bp);
break;
case t:bp=new qx.ui.tooltip.ToolTip(this.tr(O));
break;
case d:bp=new qx.ui.form.Button();
bp.addState(S);
bp.setFocusable(false);
bp.setToolTip(this.getChildControl(t));
bp.addListener(l,this._onNavButtonClicked,this);
break;
case be:bp=new qx.ui.tooltip.ToolTip(this.tr(D));
break;
case k:bp=new qx.ui.toolbar.Button();
bp.addState(q);
bp.setFocusable(false);
bp.setToolTip(this.getChildControl(be));
bp.addListener(l,this._onNavButtonClicked,this);
break;
case bf:bp=new qx.ui.tooltip.ToolTip(this.tr(n));
break;
case h:bp=new qx.ui.toolbar.Button();
bp.addState(R);
bp.setFocusable(false);
bp.setToolTip(this.getChildControl(bf));
bp.addListener(l,this._onNavButtonClicked,this);
break;
case u:bp=new qx.ui.tooltip.ToolTip(this.tr(bb));
break;
case b:bp=new qx.ui.toolbar.Button();
bp.addState(X);
bp.setFocusable(false);
bp.setToolTip(this.getChildControl(u));
bp.addListener(l,this._onNavButtonClicked,this);
break;
case f:bp=new qx.ui.basic.Label();
bp.setAllowGrowX(true);
bp.setAnonymous(true);
break;
case M:bp=new qx.ui.basic.Label();
bp.setAllowGrowX(true);
bp.setAllowGrowY(true);
bp.setSelectable(false);
bp.setAnonymous(true);
bp.setCursor(j);
break;
case A:bp=new qx.ui.basic.Label();
bp.setAllowGrowX(true);
bp.setAllowGrowY(true);
bp.setSelectable(false);
bp.setAnonymous(true);
bp.setCursor(j);
break;
case p:bp=new qx.ui.basic.Label();
bp.setAllowGrowX(true);
bp.setAllowGrowY(true);
bp.setCursor(j);
bp.addListener(bk,this._onDayClicked,this);
bp.addListener(C,this._onDayDblClicked,this);
break;
case bm:var bq=new qx.ui.layout.Grid();
bp=new qx.ui.container.Composite(bq);

for(var i=0;i<8;i++){bq.setColumnFlex(i,1);
}
for(var i=0;i<7;i++){bq.setRowFlex(i,1);
}var br=this.getChildControl(a);
br.addState(J);
bp.add(br,{column:0,row:0});
this.__zm=[];

for(var i=0;i<7;i++){br=this.getChildControl(F+i);
bp.add(br,{column:i+1,row:0});
this.__zm.push(br);
}this.__zn=[];
this.__zo=[];

for(var y=0;y<6;y++){var br=this.getChildControl(w+(y+1));
bp.add(br,{column:0,row:y+1});
this.__zo.push(br);
for(var x=0;x<7;x++){var br=this.getChildControl(bc+((y*7)+x));
bp.add(br,{column:x+1,row:y+1});
this.__zn.push(br);
}}this._add(bp);
break;
}return bp||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,bo);
},_applyValue:function(cb,cc){if((cb!=null)&&(this.getShownMonth()!=cb.getMonth()||this.getShownYear()!=cb.getFullYear())){this.showMonth(cb.getMonth(),cb.getFullYear());
}else{var ce=(cb==null)?-1:cb.getDate();

for(var i=0;i<6*7;i++){var cd=this.__zn[i];

if(cd.hasState(g)){if(cd.hasState(m)){cd.removeState(m);
}}else{var cf=parseInt(cd.getValue());

if(cf==ce){cd.addState(m);
}else if(cd.hasState(m)){cd.removeState(m);
}}}}},_onMouseUpDown:function(e){var bn=e.getTarget();

if(bn==this.getChildControl(c)||bn==this.getChildControl(bm)){e.stopPropagation();
return;
}},_onNavButtonClicked:function(cg){var ci=this.getShownYear();
var ch=this.getShownMonth();

switch(cg.getCurrentTarget()){case this.getChildControl(d):ci--;
break;
case this.getChildControl(k):ch--;

if(ch<0){ch=11;
ci--;
}break;
case this.getChildControl(h):ch++;

if(ch>=12){ch=0;
ci++;
}break;
case this.getChildControl(b):ci++;
break;
}this.showMonth(ch,ci);
},_onDayClicked:function(bv){var bw=bv.getCurrentTarget().dateTime;
this.setValue(new Date(bw));
},_onDayDblClicked:function(){this.execute();
},_onKeyPress:function(cj){var cn=null;
var cl=null;
var cm=null;

if(cj.getModifiers()==0){switch(cj.getKeyIdentifier()){case z:cn=-1;
break;
case P:cn=1;
break;
case E:cn=-7;
break;
case Q:cn=7;
break;
case bl:cl=-1;
break;
case bh:cl=1;
break;
case o:if(this.getValue()!=null){this.setValue(null);
return true;
}break;
case V:case G:if(this.getValue()!=null){this.execute();
}return;
}}else if(cj.isShiftPressed()){switch(cj.getKeyIdentifier()){case bl:cm=-1;
break;
case bh:cm=1;
break;
}}
if(cn!=null||cl!=null||cm!=null){var ck=this.getValue();

if(ck!=null){ck=new Date(ck.getTime());
}
if(ck==null){ck=new Date();
}else{if(cn!=null){ck.setDate(ck.getDate()+cn);
}
if(cl!=null){ck.setMonth(ck.getMonth()+cl);
}
if(cm!=null){ck.setFullYear(ck.getFullYear()+cm);
}}this.setValue(ck);
}},showMonth:function(bY,ca){if((bY!=null&&bY!=this.getShownMonth())||(ca!=null&&ca!=this.getShownYear())){if(bY!=null){this.setShownMonth(bY);
}
if(ca!=null){this.setShownYear(ca);
}this._updateDatePane();
}},handleKeyPress:function(e){this._onKeyPress(e);
},_updateDatePane:function(){var bM=qx.ui.control.DateChooser;
var bJ=new Date();
var bC=bJ.getFullYear();
var bH=bJ.getMonth();
var bF=bJ.getDate();
var bN=this.getValue();
var bQ=(bN==null)?-1:bN.getFullYear();
var bX=(bN==null)?-1:bN.getMonth();
var bK=(bN==null)?-1:bN.getDate();
var bG=this.getShownMonth();
var bU=this.getShownYear();
var bD=qx.locale.Date.getWeekStart();
var bO=new Date(this.getShownYear(),this.getShownMonth(),1);
var bL=new qx.util.format.DateFormat(bM.MONTH_YEAR_FORMAT);
this.getChildControl(f).setValue(bL.format(bO));
var bW=bO.getDay();
var bI=1+((7-bW)%7);
var bP=new qx.util.format.DateFormat(N);

for(var i=0;i<7;i++){var bR=(i+bD)%7;
var bT=this.__zm[i];
bO.setDate(bI+bR);
bT.setValue(bP.format(bO));

if(qx.locale.Date.isWeekend(bR)){bT.addState(s);
}else{bT.removeState(s);
}}bO=new Date(bU,bG,1,12,0,0);
var by=(7+bW-bD)%7;
bO.setDate(bO.getDate()-by);
var bS=new qx.util.format.DateFormat(ba);

for(var bx=0;bx<6;bx++){this.__zo[bx].setValue(bS.format(bO));

for(var i=0;i<7;i++){var bT=this.__zn[bx*7+i];
var bB=bO.getFullYear();
var bA=bO.getMonth();
var bE=bO.getDate();
var bz=(bQ==bB&&bX==bA&&bK==bE);

if(bz){bT.addState(m);
}else{bT.removeState(m);
}
if(bA!=bG){bT.addState(g);
}else{bT.removeState(g);
}var bV=(bB==bC&&bA==bH&&bE==bF);

if(bV){bT.addState(bj);
}else{bT.removeState(bj);
}bT.setValue(K+bE);
bT.dateTime=bO.getTime();
bO.setDate(bO.getDate()+1);
}}bL.dispose();
bP.dispose();
bS.dispose();
}},destruct:function(){if(qx.core.Variant.isSet(bd,r)){qx.locale.Manager.getInstance().removeListener(bg,this._updateDatePane,this);
}this.__zm=this.__zn=this.__zo=null;
}});
})();
(function(){var u="textfield",t="button",s="list",r="selected",q="focusout",p="inner",o="changeValue",n="popup",m="focusin",l="combobox",d="click",k="blur",h="Enter",c="quick",b="_applyPlaceholder",g="qx.ui.form.ComboBox",f="single",i="Down",a="String",j="qx.event.type.Data";
qx.Class.define(g,{extend:qx.ui.form.AbstractSelectBox,implement:[qx.ui.form.IStringForm],construct:function(){qx.ui.form.AbstractSelectBox.call(this);
var E=this._createChildControl(u);
this._createChildControl(t);
this.addListener(d,this._onClick);
this.addListener(m,function(e){E.fireNonBubblingEvent(m,qx.event.type.Focus);
},this);
this.addListener(q,function(e){E.fireNonBubblingEvent(q,qx.event.type.Focus);
},this);
},properties:{appearance:{refine:true,init:l},placeholder:{check:a,nullable:true,apply:b}},events:{"changeValue":j},members:{__zs:null,__zt:null,_applyPlaceholder:function(P,Q){this.getChildControl(u).setPlaceholder(P);
},_createChildControlImpl:function(N){var O;

switch(N){case u:O=new qx.ui.form.TextField();
O.setFocusable(false);
O.addState(p);
O.addListener(o,this._onTextFieldChangeValue,this);
O.addListener(k,this.close,this);
this._add(O,{flex:1});
break;
case t:O=new qx.ui.form.Button();
O.setFocusable(false);
O.setKeepActive(true);
O.addState(p);
this._add(O);
break;
case s:O=qx.ui.form.AbstractSelectBox.prototype._createChildControlImpl.call(this,N);
O.setSelectionMode(f);
break;
}return O||qx.ui.form.AbstractSelectBox.prototype._createChildControlImpl.call(this,N);
},_forwardStates:{focused:true},tabFocus:function(){var R=this.getChildControl(u);
R.getFocusElement().focus();
R.selectAllText();
},focus:function(){qx.ui.form.AbstractSelectBox.prototype.focus.call(this);
this.getChildControl(u).getFocusElement().focus();
},setValue:function(C){var D=this.getChildControl(u);

if(D.getValue()==C){return;
}D.setValue(C);
},getValue:function(){return this.getChildControl(u).getValue();
},resetValue:function(){this.getChildControl(u).setValue(null);
},_onKeyPress:function(e){var G=this.getChildControl(n);
var F=e.getKeyIdentifier();

if(F==i&&e.isAltPressed()){this.getChildControl(t).addState(r);
this.toggle();
e.stopPropagation();
}else if(F==h){if(G.isVisible()){this.close();
e.stop();
}}else if(G.isVisible()){qx.ui.form.AbstractSelectBox.prototype._onKeyPress.call(this,e);
}},_onClick:function(e){var v=e.getTarget();

if(v==this.getChildControl(t)){this.toggle();
}else{this.close();
}},_onListMouseDown:function(e){if(this.__zs){var S=this.__zs.getLabel();

if(this.getFormat()!=null){S=this.getFormat().call(this,this.__zs);
}if(S&&S.translate){S=S.translate();
}this.setValue(S);
this.__zs=null;
}},_onListChangeSelection:function(e){var H=e.getData();

if(H.length>0){var I=this.getChildControl(s);

if(I.getSelectionContext()==c){this.__zs=H[0];
}else{var J=H[0].getLabel();

if(this.getFormat()!=null){J=this.getFormat().call(this,H[0]);
}if(J&&J.translate){J=J.translate();
}this.setValue(J);
this.__zs=null;
}}},_onPopupChangeVisibility:function(e){var x=this.getChildControl(n);

if(x.isVisible()){var y=this.getChildControl(s);
var z=this.getValue();
var w=null;

if(z){w=y.findItem(z);
}
if(w){y.setSelection([w]);
}else{y.resetSelection();
}}else{this.tabFocus();
}this.getChildControl(t).removeState(r);
},_onTextFieldChangeValue:function(e){var M=e.getData();
var L=this.getChildControl(s);

if(M!=null){var K=L.findItem(M,false);

if(K){L.setSelection([K]);
}else{L.resetSelection();
}}else{L.resetSelection();
}this.fireDataEvent(o,M,e.getOldData());
},getTextSelection:function(){return this.getChildControl(u).getTextSelection();
},getTextSelectionLength:function(){return this.getChildControl(u).getTextSelectionLength();
},setTextSelection:function(A,B){this.getChildControl(u).setTextSelection(A,B);
},clearTextSelection:function(){this.getChildControl(u).clearTextSelection();
},selectAllText:function(){this.getChildControl(u).selectAllText();
}}});
})();
(function(){var q="checked",p="keypress",o="Boolean",n="Right",m="_applyValue",l="changeValue",k="qx.ui.form.RadioButton",j="radiobutton",i="Left",h="qx.ui.form.RadioGroup",d="Down",g="_applyGroup",f="Up",c="execute";
qx.Class.define(k,{extend:qx.ui.form.Button,include:[qx.ui.form.MForm,qx.ui.form.MModelProperty],implement:[qx.ui.form.IRadioItem,qx.ui.form.IForm,qx.ui.form.IBooleanForm,qx.ui.form.IModel],construct:function(u){{};
qx.ui.form.Button.call(this,u);
this.addListener(c,this._onExecute);
this.addListener(p,this._onKeyPress);
},properties:{group:{check:h,nullable:true,apply:g},value:{check:o,nullable:true,event:l,apply:m,init:false},appearance:{refine:true,init:j},allowGrowX:{refine:true,init:false}},members:{_applyValue:function(s,t){s?this.addState(q):this.removeState(q);

if(s&&this.getFocusable()){this.focus();
}},_applyGroup:function(a,b){if(b){b.remove(this);
}
if(a){a.add(this);
}},_onExecute:function(e){this.setValue(true);
},_onKeyPress:function(e){var r=this.getGroup();

if(!r){return;
}
switch(e.getKeyIdentifier()){case i:case f:r.selectPrevious();
break;
case n:case d:r.selectNext();
break;
}}}});
})();
(function(){var k="list",j="textfield",i="popup",h="Down",g="",f="Escape",d="qx.util.format.DateFormat",c="changeValue",b="Left",a="Up",w="execute",v="changeLocale",u="_applyDateFormat",t="changeVisibility",s="qx.dynlocale",r="medium",q="mouseup",p="qx.ui.form.DateField",o="datefield",n="hidden",l="on",m="Right";
qx.Class.define(p,{extend:qx.ui.form.ComboBox,implement:[qx.ui.form.IDateForm],construct:function(){qx.ui.form.ComboBox.call(this);
this.setDateFormat(qx.ui.form.DateField.getDefaultDateFormatter());
if(qx.core.Variant.isSet(s,l)){qx.locale.Manager.getInstance().addListener(v,function(){this.setDateFormat(qx.ui.form.DateField.getDefaultDateFormatter());
},this);
}},properties:{appearance:{refine:true,init:o},dateFormat:{check:d,apply:u}},statics:{__HF:null,__HG:null,getDefaultDateFormatter:function(){var x=qx.locale.Date.getDateFormat(r).toString();

if(x==this.__HF){return this.__HG;
}
if(this.__HG){this.__HG.dispose();
}this.__HG=new qx.util.format.DateFormat(x,qx.locale.Manager.getInstance().getLocale());
this.__HF=x;
return this.__HG;
}},members:{setValue:function(G){var H=this.getChildControl(j);
H.setValue(this.getDateFormat().format(G));
var I=this.getChildControl(k);
I.setValue(G);
},getValue:function(){var T=this.getChildControl(j).getValue();
try{return this.getDateFormat().parse(T);
}catch(D){return null;
}},resetValue:function(){var y=this.getChildControl(j);
y.setValue(g);
var z=this.getChildControl(k);
z.setValue(null);
},_applyDateFormat:function(K,L){if(!L){return;
}try{var N=this.getChildControl(j);
var O=N.getValue();
var M=L.parse(O);
N.setValue(K.format(M));
}catch(C){}},_createChildControlImpl:function(P){var Q;

switch(P){case k:Q=new qx.ui.control.DateChooser();
Q.setFocusable(false);
Q.setKeepFocus(true);
Q.addListener(w,this._onChangeDate,this);
break;
case i:Q=new qx.ui.popup.Popup(new qx.ui.layout.VBox);
Q.setAutoHide(false);
Q.add(this.getChildControl(k));
Q.addListener(q,this._onChangeDate,this);
Q.addListener(t,this._onPopupChangeVisibility,this);
break;
}return Q||qx.ui.form.ComboBox.prototype._createChildControlImpl.call(this,P);
},_onChangeDate:function(e){var E=this.getChildControl(j);
var F=this.getChildControl(k).getValue();
E.setValue(this.getDateFormat().format(F));
this.close();
},_onKeyPress:function(e){var A=e.getKeyIdentifier();

if(A==h&&e.isAltPressed()){this.toggle();
e.stopPropagation();
return;
}var B=this.getChildControl(i);

if(B.getVisibility()==n){return;
}if(A==f){this.close();
e.stopPropagation();
return;
}if(A===b||A===m||A===h||A===a){e.preventDefault();
}this.getChildControl(k).handleKeyPress(e);
},_onPopupChangeVisibility:function(e){var V=this.getChildControl(i);

if(V.isVisible()){var W=this.getChildControl(k);
var U=this.getValue();
W.setValue(U);
}},_onTextFieldChangeValue:function(e){var R=this.getValue();

if(R!=null){var S=this.getChildControl(k);
S.setValue(R);
}this.fireDataEvent(c,this.getValue());
},isEmpty:function(){var J=this.getChildControl(j).getValue();
return J==null||J==g;
}}});
})();

});