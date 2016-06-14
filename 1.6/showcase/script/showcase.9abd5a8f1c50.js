qx.$$packageData['130']={"locales":{},"resources":{},"translations":{"C":{},"de":{"Last month":"Vorheriger Monat","Last year":"Vorheriges Jahr","Next month":"Nächster Monat","Next year":"Nächstes Jahr"},"en":{},"es":{"Last month":"Último mes","Last year":"Último año","Next month":"Mes siguiente","Next year":"Año siguiente"},"ro":{"Last month":"Luna trecută","Last year":"Anul trecut","Next month":"Luna următoare","Next year":"Anul următor"},"sv":{"Last month":"Föregående månad","Last year":"Föregående år","Next month":"Nästa månad","Next year":"Nästa år"}}};
qx.Part.$$notifyLoad("130", function() {
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
},statics:{MONTH_YEAR_FORMAT:qx.locale.Date.getDateTimeFormat("yyyyMMMM","MMMM yyyy"),WEEKDAY_FORMAT:"EE",WEEK_FORMAT:"ww"},properties:{appearance:{refine:true,init:D},width:{refine:true,init:200},height:{refine:true,init:150},shownMonth:{check:bf,init:null,nullable:true,event:J},shownYear:{check:bf,init:null,nullable:true,event:Q},value:{check:K,init:null,nullable:true,event:z,apply:X}},members:{__Cp:null,__Cq:null,__Cr:null,_forwardStates:{invalid:true},_createChildControlImpl:function(bn,bo){var bp;

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
this.__Cp=[];

for(var i=0;i<7;i++){br=this.getChildControl(A+i);
bp.add(br,{column:i+1,row:0});
this.__Cp.push(br);
}this.__Cq=[];
this.__Cr=[];

for(var y=0;y<6;y++){var br=this.getChildControl(U+(y+1));
bp.add(br,{column:0,row:y+1});
this.__Cr.push(br);
for(var x=0;x<7;x++){var br=this.getChildControl(B+((y*7)+x));
bp.add(br,{column:x+1,row:y+1});
this.__Cq.push(br);
}}this._add(bp);
break;
}return bp||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,bn);
},_applyValue:function(bs,bt){if((bs!=null)&&(this.getShownMonth()!=bs.getMonth()||this.getShownYear()!=bs.getFullYear())){this.showMonth(bs.getMonth(),bs.getFullYear());
}else{var bv=(bs==null)?-1:bs.getDate();

for(var i=0;i<6*7;i++){var bu=this.__Cq[i];

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
var ch=this.__Cp[i];
cc.setDate(bV+cf);
ch.setValue(cd.format(cc));

if(qx.locale.Date.isWeekend(cf)){ch.addState(q);
}else{ch.removeState(q);
}}cc=new Date(ci,bT,1,12,0,0);
var bL=(7+ck-bQ)%7;
cc.setDate(cc.getDate()-bL);
var cg=new qx.util.format.DateFormat(ca.WEEK_FORMAT);

for(var bK=0;bK<6;bK++){this.__Cr[bK].setValue(cg.format(cc));

for(var i=0;i<7;i++){var ch=this.__Cq[bK*7+i];
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
}this.__Cp=this.__Cq=this.__Cr=null;
}});
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
(function(){var k="textfield",j="button",i="list",h="changeValue",g="selected",f="inner",d="focusin",c="popup",b="focusout",a="blur",w="Enter",v="key",u="Down",t="qx.event.type.Data",s="visible",r="quick",q="String",p="qx.ui.form.ComboBox",o="single",n="combobox",l="click",m="_applyPlaceholder";
qx.Class.define(p,{extend:qx.ui.form.AbstractSelectBox,implement:[qx.ui.form.IStringForm],construct:function(){qx.ui.form.AbstractSelectBox.call(this);
var x=this._createChildControl(k);
this._createChildControl(j);
this.addListener(l,this._onClick);
this.addListener(d,function(e){x.fireNonBubblingEvent(d,qx.event.type.Focus);
},this);
this.addListener(b,function(e){x.fireNonBubblingEvent(b,qx.event.type.Focus);
},this);
},properties:{appearance:{refine:true,init:n},placeholder:{check:q,nullable:true,apply:m}},events:{"changeValue":t},members:{__CF:null,__CG:null,_applyPlaceholder:function(y,z){this.getChildControl(k).setPlaceholder(y);
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
},_setPreselectedItem:function(){if(this.__CF){var J=this.__CF.getLabel();

if(this.getFormat()!=null){J=this.getFormat().call(this,this.__CF);
}if(J&&J.translate){J=J.translate();
}this.setValue(J);
this.__CF=null;
}},_onListChangeSelection:function(e){var K=e.getData();

if(K.length>0){var M=this.getChildControl(i);
var L=M.getSelectionContext();

if(L==r||L==v){this.__CF=K[0];
}else{var N=K[0].getLabel();

if(this.getFormat()!=null){N=this.getFormat().call(this,K[0]);
}if(N&&N.translate){N=N.translate();
}this.setValue(N);
this.__CF=null;
}}},_onPopupChangeVisibility:function(e){qx.ui.form.AbstractSelectBox.prototype._onPopupChangeVisibility.call(this,e);
var P=this.getChildControl(c);

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
(function(){var n="Boolean",m="changeInvalidMessage",l="changeSelection",k="String",j="__Bs",h="_applyValid",g="",f="changeRequired",d="changeValid",c="_applyInvalidMessage",a="qx.ui.form.RadioButtonGroup",b="qx.event.type.Data";
qx.Class.define(a,{extend:qx.ui.core.Widget,include:[qx.ui.core.MLayoutHandling,qx.ui.form.MModelSelection],implement:[qx.ui.form.IForm,qx.ui.core.ISingleSelection,qx.ui.form.IModelSelection],construct:function(o){qx.ui.core.Widget.call(this);
if(o==null){this.setLayout(new qx.ui.layout.VBox(4));
}else{this.setLayout(o);
}this.__Bs=new qx.ui.form.RadioGroup();
this.__Bs.addListener(l,function(e){this.fireDataEvent(l,e.getData(),e.getOldData());
},this);
},properties:{valid:{check:n,init:true,apply:h,event:d},required:{check:n,init:false,event:f},invalidMessage:{check:k,init:g,event:m,apply:c},requiredInvalidMessage:{check:k,nullable:true,event:m}},events:{"changeSelection":b},members:{__Bs:null,_applyInvalidMessage:function(p,q){var r=this._getChildren();

for(var i=0;i<r.length;i++){r[i].setInvalidMessage(p);
}},_applyValid:function(s,t){var u=this._getChildren();

for(var i=0;i<u.length;i++){u[i].setValid(s);
}},getRadioGroup:function(){return this.__Bs;
},getChildren:function(){return this._getChildren();
},add:function(v,w){this.__Bs.add(v);
this._add(v,w);
},remove:function(x){this.__Bs.remove(x);
this._remove(x);
},removeAll:function(){var y=this.__Bs.getItems();

for(var i=0;i<y.length;i++){this.__Bs.remove(y[i]);
}return this._removeAll();
},getSelection:function(){return this.__Bs.getSelection();
},setSelection:function(z){return this.__Bs.setSelection(z);
},resetSelection:function(){return this.__Bs.resetSelection();
},isSelected:function(A){return this.__Bs.isSelected(A);
},isSelectionEmpty:function(){return this.__Bs.isSelectionEmpty();
},getSelectables:function(B){return this.__Bs.getSelectables(B);
}},destruct:function(){this._disposeObjects(j);
}});
})();
(function(){var k="textfield",j="list",i="popup",h="button",g="popupOpen",f="blur",d="changeValue",c="Down",b="inner",a="",G="qx.dynlocale",F="focusin",E="focusout",D="qx.util.format.DateFormat",C="Escape",B="Left",A="Up",z="execute",y="qx.event.type.Data",x="visible",r="middle",s="String",p="_applyDateFormat",q="changeVisibility",n="mouseup",o="medium",l="click",m="qx.ui.form.DateField",t="datefield",u="_applyPlaceholder",w="hidden",v="Right";
qx.Class.define(m,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.form.MForm],implement:[qx.ui.form.IForm,qx.ui.form.IDateForm],construct:function(){qx.ui.core.Widget.call(this);
var I=new qx.ui.layout.HBox();
this._setLayout(I);
I.setAlignY(r);
var H=this._createChildControl(k);
this._createChildControl(h);
this.addListener(l,this._onClick,this);
this.addListener(f,this._onBlur,this);
this.addListener(F,function(e){H.fireNonBubblingEvent(F,qx.event.type.Focus);
},this);
this.addListener(E,function(e){H.fireNonBubblingEvent(E,qx.event.type.Focus);
},this);
this._setDefaultDateFormat();
this._addLocaleChangeLeistener();
},events:{"changeValue":y},properties:{dateFormat:{check:D,apply:p},placeholder:{check:s,nullable:true,apply:u},appearance:{refine:true,init:t},focusable:{refine:true,init:true},width:{refine:true,init:120}},statics:{__Iz:null,__IA:null,getDefaultDateFormatter:function(){var J=qx.locale.Date.getDateFormat(o).toString();

if(J==this.__Iz){return this.__IA;
}
if(this.__IA){this.__IA.dispose();
}this.__IA=new qx.util.format.DateFormat(J,qx.locale.Manager.getInstance().getLocale());
this.__Iz=J;
return this.__IA;
}},members:{__IB:null,_forwardStates:{focused:true,invalid:true},_setDefaultDateFormat:function(){this.setDateFormat(qx.ui.form.DateField.getDefaultDateFormatter());
},_addLocaleChangeLeistener:function(){if(qx.core.Environment.get(G)){this.__IB=qx.locale.Manager.getInstance().addListener("changeLocale",function(){this._setDefaultDateFormat();
},this);
}},setValue:function(K){var L=this.getChildControl(k);
L.setValue(this.getDateFormat().format(K));
var M=this.getChildControl(j);
M.setValue(K);
},getValue:function(){var N=this.getChildControl(k).getValue();
try{return this.getDateFormat().parse(N);
}catch(O){return null;
}},resetValue:function(){var P=this.getChildControl(k);
P.setValue(a);
var Q=this.getChildControl(j);
Q.setValue(null);
},open:function(){var R=this.getChildControl(i);
R.placeToWidget(this,true);
R.show();
},close:function(){this.getChildControl(i).hide();
},toggle:function(){var S=this.getChildControl(i).isVisible();

if(S){this.close();
}else{this.open();
}},_applyDateFormat:function(T,U){if(!U){return;
}try{var W=this.getChildControl(k);
var X=W.getValue();
var V=U.parse(X);
W.setValue(T.format(V));
}catch(Y){}},_applyPlaceholder:function(ba,bb){this.getChildControl(k).setPlaceholder(ba);
},_createChildControlImpl:function(bc,bd){var be;

switch(bc){case k:be=new qx.ui.form.TextField();
be.setFocusable(false);
be.addState(b);
be.addListener(d,this._onTextFieldChangeValue,this);
be.addListener(f,this.close,this);
this._add(be,{flex:1});
break;
case h:be=new qx.ui.form.Button();
be.setFocusable(false);
be.setKeepActive(true);
be.addState(b);
this._add(be);
break;
case j:be=new qx.ui.control.DateChooser();
be.setFocusable(false);
be.setKeepFocus(true);
be.addListener(z,this._onChangeDate,this);
break;
case i:be=new qx.ui.popup.Popup(new qx.ui.layout.VBox);
be.setAutoHide(false);
be.add(this.getChildControl(j));
be.addListener(n,this._onChangeDate,this);
be.addListener(q,this._onPopupChangeVisibility,this);
break;
}return be||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,bc);
},_onChangeDate:function(e){var bf=this.getChildControl(k);
var bg=this.getChildControl(j).getValue();
bf.setValue(this.getDateFormat().format(bg));
this.close();
},_onClick:function(e){var bh=e.getTarget();

if(bh==this.getChildControl(h)){this.toggle();
}else{this.close();
}},_onBlur:function(e){this.close();
},_onKeyPress:function(e){var bi=e.getKeyIdentifier();

if(bi==c&&e.isAltPressed()){this.toggle();
e.stopPropagation();
return;
}var bj=this.getChildControl(i);

if(bj.getVisibility()==w){return;
}if(bi==C){this.close();
e.stopPropagation();
return;
}if(bi===B||bi===v||bi===c||bi===A){e.preventDefault();
}this.getChildControl(j).handleKeyPress(e);
},_onPopupChangeVisibility:function(e){e.getData()==x?this.addState(g):this.removeState(g);
var bl=this.getChildControl(i);

if(bl.isVisible()){var bm=this.getChildControl(j);
var bk=this.getValue();
bm.setValue(bk);
}},_onTextFieldChangeValue:function(e){var bn=this.getValue();

if(bn!=null){var bo=this.getChildControl(j);
bo.setValue(bn);
}this.fireDataEvent(d,this.getValue());
},isEmpty:function(){var bp=this.getChildControl(k).getValue();
return bp==null||bp==a;
}},destruct:function(){if(qx.core.Environment.get(G)){if(this.__IB){qx.locale.Manager.getInstance().removeListenerById(this.__IB);
}}}});
})();

});