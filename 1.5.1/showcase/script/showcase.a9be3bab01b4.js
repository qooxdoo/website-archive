qx.$$packageData['130']={"locales":{},"resources":{},"translations":{"C":{},"de":{"Last month":"Vorheriger Monat","Last year":"Vorheriges Jahr","Next month":"Nächster Monat","Next year":"Nächstes Jahr"},"en":{},"es":{"Last month":"Último mes","Last year":"Último año","Next month":"Mes siguiente","Next year":"Año siguiente"},"ro":{"Last month":"Luna trecută","Last year":"Anul trecut","Next month":"Luna următoare","Next year":"Anul următor"},"sv":{"Last month":"Föregående månad","Last year":"Föregående år","Next month":"Nästa månad","Next year":"Nästa år"}}};
qx.Part.$$notifyLoad("130", function() {
(function(){var n="Boolean",m="changeInvalidMessage",l="changeSelection",k="String",j="_applyValid",h="",g="changeRequired",f="changeValid",d="__rz",c="_applyInvalidMessage",a="qx.ui.form.RadioButtonGroup",b="qx.event.type.Data";
qx.Class.define(a,{extend:qx.ui.core.Widget,include:[qx.ui.core.MLayoutHandling,qx.ui.form.MModelSelection],implement:[qx.ui.form.IForm,qx.ui.core.ISingleSelection,qx.ui.form.IModelSelection],construct:function(o){qx.ui.core.Widget.call(this);
if(o==null){this.setLayout(new qx.ui.layout.VBox(4));
}else{this.setLayout(o);
}this.__rz=new qx.ui.form.RadioGroup();
this.__rz.addListener(l,function(e){this.fireDataEvent(l,e.getData(),e.getOldData());
},this);
},properties:{valid:{check:n,init:true,apply:j,event:f},required:{check:n,init:false,event:g},invalidMessage:{check:k,init:h,event:m,apply:c},requiredInvalidMessage:{check:k,nullable:true,event:m}},events:{"changeSelection":b},members:{__rz:null,_applyInvalidMessage:function(p,q){var r=this._getChildren();

for(var i=0;i<r.length;i++){r[i].setInvalidMessage(p);
}},_applyValid:function(s,t){var u=this._getChildren();

for(var i=0;i<u.length;i++){u[i].setValid(s);
}},getRadioGroup:function(){return this.__rz;
},getChildren:function(){return this._getChildren();
},add:function(v,w){this.__rz.add(v);
this._add(v,w);
},remove:function(x){this.__rz.remove(x);
this._remove(x);
},removeAll:function(){var y=this.__rz.getItems();

for(var i=0;i<y.length;i++){this.__rz.remove(y[i]);
}return this._removeAll();
},getSelection:function(){return this.__rz.getSelection();
},setSelection:function(z){return this.__rz.setSelection(z);
},resetSelection:function(){return this.__rz.resetSelection();
},isSelected:function(A){return this.__rz.isSelected(A);
},isSelectionEmpty:function(){return this.__rz.isSelectionEmpty();
},getSelectables:function(B){return this.__rz.getSelectables(B);
}},destruct:function(){this._disposeObjects(d);
}});
})();
(function(){var b="qx.ui.form.IDateForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var l="selected",k="click",j="last-month-button",h="default",g="next-month-button",f="otherMonth",d="month-year-label",c="last-year-button",b="navigation-bar",a="next-year-button",bj="date-pane",bi="PageUp",bh="mousedown",bg="today",bf="Integer",be="PageDown",bd="changeLocale",bc="next-month-button-tooltip",bb="last-month-button-tooltip",ba="qx.dynlocale",s="last-year-button-tooltip",t="next-year-button-tooltip",q="weekend",r="day",o="lastMonth",p="Next month",m="Escape",n="Left",w="weekday",z="changeValue",H="Space",F="Down",P="qx.ui.control.DateChooser",K="Date",V="Enter",T="dblclick",B="day#",Y="Next year",X="_applyValue",W="Up",A="weekday#",D="datechooser",E="header",G="week",I="lastYear",L="nextYear",Q="changeShownYear",U="week#",u="Last month",v="Last year",C="mouseup",O="keypress",N="",M="nextMonth",S="Right",R="week#0",J="changeShownMonth";
qx.Class.define(P,{extend:qx.ui.core.Widget,include:[qx.ui.core.MExecutable,qx.ui.form.MForm],implement:[qx.ui.form.IExecutable,qx.ui.form.IForm,qx.ui.form.IDateForm],construct:function(bk){qx.ui.core.Widget.call(this);
var bm=new qx.ui.layout.VBox();
this._setLayout(bm);
this._createChildControl(b);
this._createChildControl(bj);
this.addListener(O,this._onKeyPress);
var bl=(bk!=null)?bk:new Date();
this.showMonth(bl.getMonth(),bl.getFullYear());
if(qx.core.Environment.get(ba)){qx.locale.Manager.getInstance().addListener(bd,this._updateDatePane,this);
}this.addListener(bh,this._onMouseUpDown,this);
this.addListener(C,this._onMouseUpDown,this);
},statics:{MONTH_YEAR_FORMAT:qx.locale.Date.getDateTimeFormat("yyyyMMMM","MMMM yyyy"),WEEKDAY_FORMAT:"EE",WEEK_FORMAT:"ww"},properties:{appearance:{refine:true,init:D},width:{refine:true,init:200},height:{refine:true,init:150},shownMonth:{check:bf,init:null,nullable:true,event:J},shownYear:{check:bf,init:null,nullable:true,event:Q},value:{check:K,init:null,nullable:true,event:z,apply:X}},members:{__lg:null,__lh:null,__li:null,_forwardStates:{invalid:true},_createChildControlImpl:function(bn,bo){var bp;

switch(bn){case b:bp=new qx.ui.container.Composite(new qx.ui.layout.HBox());
bp.add(this.getChildControl(c));
bp.add(this.getChildControl(j));
bp.add(this.getChildControl(d),{flex:1});
bp.add(this.getChildControl(g));
bp.add(this.getChildControl(a));
this._add(bp);
break;
case s:bp=new qx.ui.tooltip.ToolTip(this.tr(v));
break;
case c:bp=new qx.ui.toolbar.Button();
bp.addState(I);
bp.setFocusable(false);
bp.setToolTip(this.getChildControl(s));
bp.addListener(k,this._onNavButtonClicked,this);
break;
case bb:bp=new qx.ui.tooltip.ToolTip(this.tr(u));
break;
case j:bp=new qx.ui.toolbar.Button();
bp.addState(o);
bp.setFocusable(false);
bp.setToolTip(this.getChildControl(bb));
bp.addListener(k,this._onNavButtonClicked,this);
break;
case bc:bp=new qx.ui.tooltip.ToolTip(this.tr(p));
break;
case g:bp=new qx.ui.toolbar.Button();
bp.addState(M);
bp.setFocusable(false);
bp.setToolTip(this.getChildControl(bc));
bp.addListener(k,this._onNavButtonClicked,this);
break;
case t:bp=new qx.ui.tooltip.ToolTip(this.tr(Y));
break;
case a:bp=new qx.ui.toolbar.Button();
bp.addState(L);
bp.setFocusable(false);
bp.setToolTip(this.getChildControl(t));
bp.addListener(k,this._onNavButtonClicked,this);
break;
case d:bp=new qx.ui.basic.Label();
bp.setAllowGrowX(true);
bp.setAnonymous(true);
break;
case G:bp=new qx.ui.basic.Label();
bp.setAllowGrowX(true);
bp.setAllowGrowY(true);
bp.setSelectable(false);
bp.setAnonymous(true);
bp.setCursor(h);
break;
case w:bp=new qx.ui.basic.Label();
bp.setAllowGrowX(true);
bp.setAllowGrowY(true);
bp.setSelectable(false);
bp.setAnonymous(true);
bp.setCursor(h);
break;
case r:bp=new qx.ui.basic.Label();
bp.setAllowGrowX(true);
bp.setAllowGrowY(true);
bp.setCursor(h);
bp.addListener(bh,this._onDayClicked,this);
bp.addListener(T,this._onDayDblClicked,this);
break;
case bj:var bq=new qx.ui.layout.Grid();
bp=new qx.ui.container.Composite(bq);

for(var i=0;i<8;i++){bq.setColumnFlex(i,1);
}
for(var i=0;i<7;i++){bq.setRowFlex(i,1);
}var br=this.getChildControl(R);
br.addState(E);
bp.add(br,{column:0,row:0});
this.__lg=[];

for(var i=0;i<7;i++){br=this.getChildControl(A+i);
bp.add(br,{column:i+1,row:0});
this.__lg.push(br);
}this.__lh=[];
this.__li=[];

for(var y=0;y<6;y++){var br=this.getChildControl(U+(y+1));
bp.add(br,{column:0,row:y+1});
this.__li.push(br);
for(var x=0;x<7;x++){var br=this.getChildControl(B+((y*7)+x));
bp.add(br,{column:x+1,row:y+1});
this.__lh.push(br);
}}this._add(bp);
break;
}return bp||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,bn);
},_applyValue:function(bs,bt){if((bs!=null)&&(this.getShownMonth()!=bs.getMonth()||this.getShownYear()!=bs.getFullYear())){this.showMonth(bs.getMonth(),bs.getFullYear());
}else{var bv=(bs==null)?-1:bs.getDate();

for(var i=0;i<6*7;i++){var bu=this.__lh[i];

if(bu.hasState(f)){if(bu.hasState(l)){bu.removeState(l);
}}else{var bw=parseInt(bu.getValue(),10);

if(bw==bv){bu.addState(l);
}else if(bu.hasState(l)){bu.removeState(l);
}}}}},_onMouseUpDown:function(e){var bx=e.getTarget();

if(bx==this.getChildControl(b)||bx==this.getChildControl(bj)){e.stopPropagation();
return;
}},_onNavButtonClicked:function(by){var bA=this.getShownYear();
var bz=this.getShownMonth();

switch(by.getCurrentTarget()){case this.getChildControl(c):bA--;
break;
case this.getChildControl(j):bz--;

if(bz<0){bz=11;
bA--;
}break;
case this.getChildControl(g):bz++;

if(bz>=12){bz=0;
bA++;
}break;
case this.getChildControl(a):bA++;
break;
}this.showMonth(bz,bA);
},_onDayClicked:function(bB){var bC=bB.getCurrentTarget().dateTime;
this.setValue(new Date(bC));
},_onDayDblClicked:function(){this.execute();
},_onKeyPress:function(bD){var bH=null;
var bF=null;
var bG=null;

if(bD.getModifiers()==0){switch(bD.getKeyIdentifier()){case n:bH=-1;
break;
case S:bH=1;
break;
case W:bH=-7;
break;
case F:bH=7;
break;
case bi:bF=-1;
break;
case be:bF=1;
break;
case m:if(this.getValue()!=null){this.setValue(null);
return true;
}break;
case V:case H:if(this.getValue()!=null){this.execute();
}return;
}}else if(bD.isShiftPressed()){switch(bD.getKeyIdentifier()){case bi:bG=-1;
break;
case be:bG=1;
break;
}}
if(bH!=null||bF!=null||bG!=null){var bE=this.getValue();

if(bE!=null){bE=new Date(bE.getTime());
}
if(bE==null){bE=new Date();
}else{if(bH!=null){bE.setDate(bE.getDate()+bH);
}
if(bF!=null){bE.setMonth(bE.getMonth()+bF);
}
if(bG!=null){bE.setFullYear(bE.getFullYear()+bG);
}}this.setValue(bE);
}},showMonth:function(bI,bJ){if((bI!=null&&bI!=this.getShownMonth())||(bJ!=null&&bJ!=this.getShownYear())){if(bI!=null){this.setShownMonth(bI);
}
if(bJ!=null){this.setShownYear(bJ);
}this._updateDatePane();
}},handleKeyPress:function(e){this._onKeyPress(e);
},_updateDatePane:function(){var ca=qx.ui.control.DateChooser;
var bW=new Date();
var bP=bW.getFullYear();
var bU=bW.getMonth();
var bS=bW.getDate();
var cb=this.getValue();
var ce=(cb==null)?-1:cb.getFullYear();
var cl=(cb==null)?-1:cb.getMonth();
var bX=(cb==null)?-1:cb.getDate();
var bT=this.getShownMonth();
var ci=this.getShownYear();
var bQ=qx.locale.Date.getWeekStart();
var cc=new Date(this.getShownYear(),this.getShownMonth(),1);
var bY=new qx.util.format.DateFormat(ca.MONTH_YEAR_FORMAT);
this.getChildControl(d).setValue(bY.format(cc));
var ck=cc.getDay();
var bV=1+((7-ck)%7);
var cd=new qx.util.format.DateFormat(ca.WEEKDAY_FORMAT);

for(var i=0;i<7;i++){var cf=(i+bQ)%7;
var ch=this.__lg[i];
cc.setDate(bV+cf);
ch.setValue(cd.format(cc));

if(qx.locale.Date.isWeekend(cf)){ch.addState(q);
}else{ch.removeState(q);
}}cc=new Date(ci,bT,1,12,0,0);
var bL=(7+ck-bQ)%7;
cc.setDate(cc.getDate()-bL);
var cg=new qx.util.format.DateFormat(ca.WEEK_FORMAT);

for(var bK=0;bK<6;bK++){this.__li[bK].setValue(cg.format(cc));

for(var i=0;i<7;i++){var ch=this.__lh[bK*7+i];
var bO=cc.getFullYear();
var bN=cc.getMonth();
var bR=cc.getDate();
var bM=(ce==bO&&cl==bN&&bX==bR);

if(bM){ch.addState(l);
}else{ch.removeState(l);
}
if(bN!=bT){ch.addState(f);
}else{ch.removeState(f);
}var cj=(bO==bP&&bN==bU&&bR==bS);

if(cj){ch.addState(bg);
}else{ch.removeState(bg);
}ch.setValue(N+bR);
ch.dateTime=cc.getTime();
cc.setDate(cc.getDate()+1);
}}bY.dispose();
cd.dispose();
cg.dispose();
}},destruct:function(){if(qx.core.Environment.get(ba)){qx.locale.Manager.getInstance().removeListener(bd,this._updateDatePane,this);
}this.__lg=this.__lh=this.__li=null;
}});
})();
(function(){var k="textfield",j="button",i="list",h="changeValue",g="selected",f="inner",d="focusin",c="popup",b="focusout",a="blur",w="Enter",v="key",u="Down",t="qx.event.type.Data",s="visible",r="quick",q="String",p="qx.ui.form.ComboBox",o="single",n="combobox",l="click",m="_applyPlaceholder";
qx.Class.define(p,{extend:qx.ui.form.AbstractSelectBox,implement:[qx.ui.form.IStringForm],construct:function(){qx.ui.form.AbstractSelectBox.call(this);
var x=this._createChildControl(k);
this._createChildControl(j);
this.addListener(l,this._onClick);
this.addListener(d,function(e){x.fireNonBubblingEvent(d,qx.event.type.Focus);
},this);
this.addListener(b,function(e){x.fireNonBubblingEvent(b,qx.event.type.Focus);
},this);
},properties:{appearance:{refine:true,init:n},placeholder:{check:q,nullable:true,apply:m}},events:{"changeValue":t},members:{__zt:null,__zu:null,_applyPlaceholder:function(y,z){this.getChildControl(k).setPlaceholder(y);
},_createChildControlImpl:function(A,B){var C;

switch(A){case k:C=new qx.ui.form.TextField();
C.setFocusable(false);
C.addState(f);
C.addListener(h,this._onTextFieldChangeValue,this);
C.addListener(a,this.close,this);
this._add(C,{flex:1});
break;
case j:C=new qx.ui.form.Button();
C.setFocusable(false);
C.setKeepActive(true);
C.addState(f);
this._add(C);
break;
case i:C=qx.ui.form.AbstractSelectBox.prototype._createChildControlImpl.call(this,A);
C.setSelectionMode(o);
break;
}return C||qx.ui.form.AbstractSelectBox.prototype._createChildControlImpl.call(this,A);
},_forwardStates:{focused:true,invalid:true},tabFocus:function(){var D=this.getChildControl(k);
D.getFocusElement().focus();
D.selectAllText();
},focus:function(){qx.ui.form.AbstractSelectBox.prototype.focus.call(this);
this.getChildControl(k).getFocusElement().focus();
},setValue:function(E){var F=this.getChildControl(k);

if(F.getValue()==E){return;
}F.setValue(E);
},getValue:function(){return this.getChildControl(k).getValue();
},resetValue:function(){this.getChildControl(k).setValue(null);
},_onKeyPress:function(e){var H=this.getChildControl(c);
var G=e.getKeyIdentifier();

if(G==u&&e.isAltPressed()){this.getChildControl(j).addState(g);
this.toggle();
e.stopPropagation();
}else if(G==w){if(H.isVisible()){this._setPreselectedItem();
this.resetAllTextSelection();
this.close();
e.stop();
}}else if(H.isVisible()){qx.ui.form.AbstractSelectBox.prototype._onKeyPress.call(this,e);
}},_onClick:function(e){var I=e.getTarget();

if(I==this.getChildControl(j)){this.toggle();
}else{this.close();
}},_onListMouseDown:function(e){this._setPreselectedItem();
},_setPreselectedItem:function(){if(this.__zt){var J=this.__zt.getLabel();

if(this.getFormat()!=null){J=this.getFormat().call(this,this.__zt);
}if(J&&J.translate){J=J.translate();
}this.setValue(J);
this.__zt=null;
}},_onListChangeSelection:function(e){var K=e.getData();

if(K.length>0){var M=this.getChildControl(i);
var L=M.getSelectionContext();

if(L==r||L==v){this.__zt=K[0];
}else{var N=K[0].getLabel();

if(this.getFormat()!=null){N=this.getFormat().call(this,K[0]);
}if(N&&N.translate){N=N.translate();
}this.setValue(N);
this.__zt=null;
}}},_onPopupChangeVisibility:function(e){var P=this.getChildControl(c);

if(P.isVisible()){var Q=this.getChildControl(i);
var R=this.getValue();
var O=null;

if(R){O=Q.findItem(R);
}
if(O){Q.setSelection([O]);
}else{Q.resetSelection();
}}else{if(e.getOldData()==s){this.tabFocus();
}}this.getChildControl(j).removeState(g);
},_onTextFieldChangeValue:function(e){var U=e.getData();
var T=this.getChildControl(i);

if(U!=null){var S=T.findItem(U,false);

if(S){T.setSelection([S]);
}else{T.resetSelection();
}}else{T.resetSelection();
}this.fireDataEvent(h,U,e.getOldData());
},getTextSelection:function(){return this.getChildControl(k).getTextSelection();
},getTextSelectionLength:function(){return this.getChildControl(k).getTextSelectionLength();
},setTextSelection:function(V,W){this.getChildControl(k).setTextSelection(V,W);
},clearTextSelection:function(){this.getChildControl(k).clearTextSelection();
},selectAllText:function(){this.getChildControl(k).selectAllText();
},resetAllTextSelection:function(){this.clearTextSelection();
this.selectAllText();
}}});
})();
(function(){var t="checked",s="keypress",r="Boolean",q="Right",p="label",o="Left",n="_applyValue",m="changeValue",l="Up",k="value",d="qx.ui.form.RadioButton",j="radiobutton",h="toolTipText",c="enabled",b="qx.ui.form.RadioGroup",g="Down",f="_applyGroup",i="menu",a="execute";
qx.Class.define(d,{extend:qx.ui.form.Button,include:[qx.ui.form.MForm,qx.ui.form.MModelProperty],implement:[qx.ui.form.IRadioItem,qx.ui.form.IForm,qx.ui.form.IBooleanForm,qx.ui.form.IModel],construct:function(u){qx.ui.form.Button.call(this,u);
this.addListener(a,this._onExecute);
this.addListener(s,this._onKeyPress);
},properties:{group:{check:b,nullable:true,apply:f},value:{check:r,nullable:true,event:m,apply:n,init:false},appearance:{refine:true,init:j},allowGrowX:{refine:true,init:false}},members:{_forwardStates:{checked:true,focused:true,invalid:true,hovered:true},_bindableProperties:[c,p,h,k,i],_applyValue:function(v,w){v?this.addState(t):this.removeState(t);
},_applyGroup:function(x,y){if(y){y.remove(this);
}
if(x){x.add(this);
}},_onExecute:function(e){var z=this.getGroup();

if(z&&z.getAllowEmptySelection()){this.toggleValue();
}else{this.setValue(true);
}},_onKeyPress:function(e){var A=this.getGroup();

if(!A){return;
}
switch(e.getKeyIdentifier()){case o:case l:A.selectPrevious();
break;
case q:case g:A.selectNext();
break;
}}}});
})();
(function(){var k="textfield",j="list",i="popup",h="button",g="blur",f="changeValue",d="Down",c="inner",b="",a="qx.dynlocale",F="focusin",E="focusout",D="qx.util.format.DateFormat",C="Escape",B="Left",A="Up",z="execute",y="qx.event.type.Data",x="changeLocale",w="middle",r="String",s="_applyDateFormat",p="changeVisibility",q="mouseup",n="medium",o="click",l="qx.ui.form.DateField",m="datefield",t="_applyPlaceholder",u="hidden",v="Right";
qx.Class.define(l,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.form.MForm],implement:[qx.ui.form.IForm,qx.ui.form.IDateForm],construct:function(){qx.ui.core.Widget.call(this);
var H=new qx.ui.layout.HBox();
this._setLayout(H);
H.setAlignY(w);
var G=this._createChildControl(k);
this._createChildControl(h);
this.addListener(o,this._onClick,this);
this.addListener(g,this._onBlur,this);
this.addListener(F,function(e){G.fireNonBubblingEvent(F,qx.event.type.Focus);
},this);
this.addListener(E,function(e){G.fireNonBubblingEvent(E,qx.event.type.Focus);
},this);
this._setDefaultDateFormat();
this._addLocaleChangeLeistener();
},events:{"changeValue":y},properties:{dateFormat:{check:D,apply:s},placeholder:{check:r,nullable:true,apply:t},appearance:{refine:true,init:m},focusable:{refine:true,init:true},width:{refine:true,init:120}},statics:{__zv:null,__zw:null,getDefaultDateFormatter:function(){var I=qx.locale.Date.getDateFormat(n).toString();

if(I==this.__zv){return this.__zw;
}
if(this.__zw){this.__zw.dispose();
}this.__zw=new qx.util.format.DateFormat(I,qx.locale.Manager.getInstance().getLocale());
this.__zv=I;
return this.__zw;
}},members:{__zx:null,_forwardStates:{focused:true,invalid:true},_setDefaultDateFormat:function(){this.setDateFormat(qx.ui.form.DateField.getDefaultDateFormatter());
},_addLocaleChangeLeistener:function(){if(qx.core.Environment.get(a)){this.__zx=qx.locale.Manager.getInstance().addListener(x,function(){this._setDefaultDateFormat();
},this);
}},setValue:function(J){var K=this.getChildControl(k);
K.setValue(this.getDateFormat().format(J));
var L=this.getChildControl(j);
L.setValue(J);
},getValue:function(){var M=this.getChildControl(k).getValue();
try{return this.getDateFormat().parse(M);
}catch(N){return null;
}},resetValue:function(){var O=this.getChildControl(k);
O.setValue(b);
var P=this.getChildControl(j);
P.setValue(null);
},open:function(){var Q=this.getChildControl(i);
Q.placeToWidget(this,true);
Q.show();
},close:function(){this.getChildControl(i).hide();
},toggle:function(){var R=this.getChildControl(i).isVisible();

if(R){this.close();
}else{this.open();
}},_applyDateFormat:function(S,T){if(!T){return;
}try{var V=this.getChildControl(k);
var W=V.getValue();
var U=T.parse(W);
V.setValue(S.format(U));
}catch(X){}},_applyPlaceholder:function(Y,ba){this.getChildControl(k).setPlaceholder(Y);
},_createChildControlImpl:function(bb,bc){var bd;

switch(bb){case k:bd=new qx.ui.form.TextField();
bd.setFocusable(false);
bd.addState(c);
bd.addListener(f,this._onTextFieldChangeValue,this);
bd.addListener(g,this.close,this);
this._add(bd,{flex:1});
break;
case h:bd=new qx.ui.form.Button();
bd.setFocusable(false);
bd.setKeepActive(true);
bd.addState(c);
this._add(bd);
break;
case j:bd=new qx.ui.control.DateChooser();
bd.setFocusable(false);
bd.setKeepFocus(true);
bd.addListener(z,this._onChangeDate,this);
break;
case i:bd=new qx.ui.popup.Popup(new qx.ui.layout.VBox);
bd.setAutoHide(false);
bd.add(this.getChildControl(j));
bd.addListener(q,this._onChangeDate,this);
bd.addListener(p,this._onPopupChangeVisibility,this);
break;
}return bd||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,bb);
},_onChangeDate:function(e){var be=this.getChildControl(k);
var bf=this.getChildControl(j).getValue();
be.setValue(this.getDateFormat().format(bf));
this.close();
},_onClick:function(e){var bg=e.getTarget();

if(bg==this.getChildControl(h)){this.toggle();
}else{this.close();
}},_onBlur:function(e){this.close();
},_onKeyPress:function(e){var bh=e.getKeyIdentifier();

if(bh==d&&e.isAltPressed()){this.toggle();
e.stopPropagation();
return;
}var bi=this.getChildControl(i);

if(bi.getVisibility()==u){return;
}if(bh==C){this.close();
e.stopPropagation();
return;
}if(bh===B||bh===v||bh===d||bh===A){e.preventDefault();
}this.getChildControl(j).handleKeyPress(e);
},_onPopupChangeVisibility:function(e){var bk=this.getChildControl(i);

if(bk.isVisible()){var bl=this.getChildControl(j);
var bj=this.getValue();
bl.setValue(bj);
}},_onTextFieldChangeValue:function(e){var bm=this.getValue();

if(bm!=null){var bn=this.getChildControl(j);
bn.setValue(bm);
}this.fireDataEvent(f,this.getValue());
},isEmpty:function(){var bo=this.getChildControl(k).getValue();
return bo==null||bo==b;
}},destruct:function(){if(qx.core.Environment.get(a)){if(this.__zx){qx.locale.Manager.getInstance().removeListenerById(this.__zx);
}}}});
})();

});