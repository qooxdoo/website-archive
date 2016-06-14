qx.$$packageData['0a07f077632d']={"resources":{}};
(function(){var n="Boolean",m="changeSelection",l="_applyValid",k="",j="changeRequired",h="changeValid",g="changeInvalidMessage",f="__vT",d="_applyInvalidMessage",c="String",a="qx.ui.form.RadioButtonGroup",b="qx.event.type.Data";
qx.Class.define(a,{extend:qx.ui.core.Widget,include:[qx.ui.core.MLayoutHandling,qx.ui.form.MModelSelection],implement:[qx.ui.form.IForm,qx.ui.core.ISingleSelection,qx.ui.form.IModelSelection],construct:function(y){arguments.callee.base.call(this);
if(y==null){this.setLayout(new qx.ui.layout.VBox(4));
}else{this.setLayout(y);
}this.__vT=new qx.ui.form.RadioGroup();
this.__vT.addListener(m,function(e){this.fireDataEvent(m,e.getData(),e.getOldData());
},this);
},properties:{valid:{check:n,init:true,apply:l,event:h},required:{check:n,init:false,event:j},invalidMessage:{check:c,init:k,event:g,apply:d}},events:{"changeSelection":b},members:{__vT:null,_applyInvalidMessage:function(r,s){var t=this._getChildren();

for(var i=0;i<t.length;i++){t[i].setInvalidMessage(r);
}},_applyValid:function(u,v){var w=this._getChildren();

for(var i=0;i<w.length;i++){w[i].setValid(u);
}},getRadioGroup:function(){return this.__vT;
},getChildren:function(){return this._getChildren();
},add:function(p,q){this.__vT.add(p);
this._add(p,q);
},remove:function(A){this.__vT.remove(A);
this._remove(A);
},removeAll:function(){var x=this.__vT.getItems();

for(var i=0;i<x.length;i++){this.__vT.remove(x[i]);
}this._removeAll();
},getSelection:function(){return this.__vT.getSelection();
},setSelection:function(z){return this.__vT.setSelection(z);
},resetSelection:function(){return this.__vT.resetSelection();
},isSelected:function(o){return this.__vT.isSelected(o);
},isSelectionEmpty:function(){return this.__vT.isSelectionEmpty();
},getSelectables:function(){return this.__vT.getSelectables();
}},destruct:function(){this._disposeObjects(f);
}});
})();
(function(){var b="qx.ui.form.IDateForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var p="selected",o="click",n="last-month-button",m="default",l="next-month-button",k="otherMonth",j="month-year-label",h="last-year-button",g="navigation-bar",f="next-year-button",bp="date-pane",bo="PageUp",bn="mousedown",bm="today",bl="Integer",bk="PageDown",bj="changeLocale",bi="next-month-button-tooltip",bh="last-month-button-tooltip",bg="qx.dynlocale",w="last-year-button-tooltip",z="next-year-button-tooltip",u="on",v="weekend",s="day",t="lastMonth",q="Next month",r="Escape",C="Left",D="weekday",L="changeValue",J="Space",T="Down",O="qx.ui.control.DateChooser",bc="Date",Y="Enter",F="dblclick",bf="day#",be="Next year",bd="ww",E="_applyValue",H="Up",I="weekday#",K="datechooser",M="header",P="week",V="lastYear",bb="nextYear",A="changeShownYear",B="week#",G="Last month",S="Right",R="Last year",Q="EE",X="mouseup",W="keypress",N="",U="nextMonth",d="week#0",ba="changeShownMonth";
qx.Class.define(O,{extend:qx.ui.core.Widget,include:[qx.ui.core.MExecutable,qx.ui.form.MForm],implement:[qx.ui.form.IExecutable,qx.ui.form.IForm,qx.ui.form.IDateForm],construct:function(a){arguments.callee.base.call(this);
var c=new qx.ui.layout.VBox();
this._setLayout(c);
this._createChildControl(g);
this._createChildControl(bp);
this.addListener(W,this._onKeyPress);
var b=(a!=null)?a:new Date();
this.showMonth(b.getMonth(),b.getFullYear());
if(qx.core.Variant.isSet(bg,u)){qx.locale.Manager.getInstance().addListener(bj,this._updateDatePane,this);
}this.addListener(bn,this._onMouseUpDown,this);
this.addListener(X,this._onMouseUpDown,this);
},statics:{MONTH_YEAR_FORMAT:qx.locale.Date.getDateTimeFormat("yyyyMMMM","MMMM yyyy")},properties:{appearance:{refine:true,init:K},width:{refine:true,init:200},height:{refine:true,init:150},shownMonth:{check:bl,init:null,nullable:true,event:ba},shownYear:{check:bl,init:null,nullable:true,event:A},value:{check:bc,init:null,nullable:true,event:L,apply:E}},members:{__vU:null,__vV:null,__vW:null,_forwardStates:{invalid:true},_createChildControlImpl:function(cd){var ce;

switch(cd){case g:ce=new qx.ui.container.Composite(new qx.ui.layout.HBox());
ce.add(this.getChildControl(h));
ce.add(this.getChildControl(n));
ce.add(this.getChildControl(j),{flex:1});
ce.add(this.getChildControl(l));
ce.add(this.getChildControl(f));
this._add(ce);
break;
case w:ce=new qx.ui.tooltip.ToolTip(this.tr(R));
break;
case h:ce=new qx.ui.form.Button();
ce.addState(V);
ce.setFocusable(false);
ce.setToolTip(this.getChildControl(w));
ce.addListener(o,this._onNavButtonClicked,this);
break;
case bh:ce=new qx.ui.tooltip.ToolTip(this.tr(G));
break;
case n:ce=new qx.ui.toolbar.Button();
ce.addState(t);
ce.setFocusable(false);
ce.setToolTip(this.getChildControl(bh));
ce.addListener(o,this._onNavButtonClicked,this);
break;
case bi:ce=new qx.ui.tooltip.ToolTip(this.tr(q));
break;
case l:ce=new qx.ui.toolbar.Button();
ce.addState(U);
ce.setFocusable(false);
ce.setToolTip(this.getChildControl(bi));
ce.addListener(o,this._onNavButtonClicked,this);
break;
case z:ce=new qx.ui.tooltip.ToolTip(this.tr(be));
break;
case f:ce=new qx.ui.toolbar.Button();
ce.addState(bb);
ce.setFocusable(false);
ce.setToolTip(this.getChildControl(z));
ce.addListener(o,this._onNavButtonClicked,this);
break;
case j:ce=new qx.ui.basic.Label();
ce.setAllowGrowX(true);
ce.setAnonymous(true);
break;
case P:ce=new qx.ui.basic.Label();
ce.setAllowGrowX(true);
ce.setAllowGrowY(true);
ce.setSelectable(false);
ce.setAnonymous(true);
ce.setCursor(m);
break;
case D:ce=new qx.ui.basic.Label();
ce.setAllowGrowX(true);
ce.setAllowGrowY(true);
ce.setSelectable(false);
ce.setAnonymous(true);
ce.setCursor(m);
break;
case s:ce=new qx.ui.basic.Label();
ce.setAllowGrowX(true);
ce.setAllowGrowY(true);
ce.setCursor(m);
ce.addListener(bn,this._onDayClicked,this);
ce.addListener(F,this._onDayDblClicked,this);
break;
case bp:var cf=new qx.ui.layout.Grid();
ce=new qx.ui.container.Composite(cf);

for(var i=0;i<8;i++){cf.setColumnFlex(i,1);
}
for(var i=0;i<7;i++){cf.setRowFlex(i,1);
}var cg=this.getChildControl(d);
cg.addState(M);
ce.add(cg,{column:0,row:0});
this.__vU=[];

for(var i=0;i<7;i++){cg=this.getChildControl(I+i);
ce.add(cg,{column:i+1,row:0});
this.__vU.push(cg);
}this.__vV=[];
this.__vW=[];

for(var y=0;y<6;y++){var cg=this.getChildControl(B+(y+1));
ce.add(cg,{column:0,row:y+1});
this.__vW.push(cg);
for(var x=0;x<7;x++){var cg=this.getChildControl(bf+((y*7)+x));
ce.add(cg,{column:x+1,row:y+1});
this.__vV.push(cg);
}}this._add(ce);
break;
}return ce||arguments.callee.base.call(this,cd);
},_applyValue:function(bt,bu){if((bt!=null)&&(this.getShownMonth()!=bt.getMonth()||this.getShownYear()!=bt.getFullYear())){this.showMonth(bt.getMonth(),bt.getFullYear());
}else{var bw=(bt==null)?-1:bt.getDate();

for(var i=0;i<6*7;i++){var bv=this.__vV[i];

if(bv.hasState(k)){if(bv.hasState(p)){bv.removeState(p);
}}else{var bx=parseInt(bv.getValue());

if(bx==bw){bv.addState(p);
}else if(bv.hasState(p)){bv.removeState(p);
}}}}},_onMouseUpDown:function(e){var cc=e.getTarget();

if(cc==this.getChildControl(g)||cc==this.getChildControl(bp)){e.stopPropagation();
return;
}},_onNavButtonClicked:function(bq){var bs=this.getShownYear();
var br=this.getShownMonth();

switch(bq.getCurrentTarget()){case this.getChildControl(h):bs--;
break;
case this.getChildControl(n):br--;

if(br<0){br=11;
bs--;
}break;
case this.getChildControl(l):br++;

if(br>=12){br=0;
bs++;
}break;
case this.getChildControl(f):bs++;
break;
}this.showMonth(br,bs);
},_onDayClicked:function(cm){var cn=cm.getCurrentTarget().dateTime;
this.setValue(new Date(cn));
},_onDayDblClicked:function(){this.execute();
},_onKeyPress:function(ch){var cl=null;
var cj=null;
var ck=null;

if(ch.getModifiers()==0){switch(ch.getKeyIdentifier()){case C:cl=-1;
break;
case S:cl=1;
break;
case H:cl=-7;
break;
case T:cl=7;
break;
case bo:cj=-1;
break;
case bk:cj=1;
break;
case r:if(this.getValue()!=null){this.setValue(null);
return true;
}break;
case Y:case J:if(this.getValue()!=null){this.execute();
}return;
}}else if(ch.isShiftPressed()){switch(ch.getKeyIdentifier()){case bo:ck=-1;
break;
case bk:ck=1;
break;
}}
if(cl!=null||cj!=null||ck!=null){var ci=this.getValue();

if(ci!=null){ci=new Date(ci.getTime());
}
if(ci==null){ci=new Date();
}else{if(cl!=null){ci.setDate(ci.getDate()+cl);
}
if(cj!=null){ci.setMonth(ci.getMonth()+cj);
}
if(ck!=null){ci.setFullYear(ci.getFullYear()+ck);
}}this.setValue(ci);
}},showMonth:function(ca,cb){if((ca!=null&&ca!=this.getShownMonth())||(cb!=null&&cb!=this.getShownYear())){if(ca!=null){this.setShownMonth(ca);
}
if(cb!=null){this.setShownYear(cb);
}this._updateDatePane();
}},handleKeyPress:function(e){this._onKeyPress(e);
},_updateDatePane:function(){var bN=qx.ui.control.DateChooser;
var bK=new Date();
var bD=bK.getFullYear();
var bI=bK.getMonth();
var bG=bK.getDate();
var bO=this.getValue();
var bR=(bO==null)?-1:bO.getFullYear();
var bY=(bO==null)?-1:bO.getMonth();
var bL=(bO==null)?-1:bO.getDate();
var bH=this.getShownMonth();
var bV=this.getShownYear();
var bE=qx.locale.Date.getWeekStart();
var bP=new Date(this.getShownYear(),this.getShownMonth(),1);
var bM=new qx.util.format.DateFormat(bN.MONTH_YEAR_FORMAT);
this.getChildControl(j).setValue(bM.format(bP));
var bX=bP.getDay();
var bJ=1+((7-bX)%7);
var bQ=new qx.util.format.DateFormat(Q);

for(var i=0;i<7;i++){var bS=(i+bE)%7;
var bU=this.__vU[i];
bP.setDate(bJ+bS);
bU.setValue(bQ.format(bP));

if(qx.locale.Date.isWeekend(bS)){bU.addState(v);
}else{bU.removeState(v);
}}bP=new Date(bV,bH,1,12,0,0);
var bz=(7+bX-bE)%7;
bP.setDate(bP.getDate()-bz);
var bT=new qx.util.format.DateFormat(bd);

for(var by=0;by<6;by++){this.__vW[by].setValue(bT.format(bP));

for(var i=0;i<7;i++){var bU=this.__vV[by*7+i];
var bC=bP.getFullYear();
var bB=bP.getMonth();
var bF=bP.getDate();
var bA=(bR==bC&&bY==bB&&bL==bF);

if(bA){bU.addState(p);
}else{bU.removeState(p);
}
if(bB!=bH){bU.addState(k);
}else{bU.removeState(k);
}var bW=(bC==bD&&bB==bI&&bF==bG);

if(bW){bU.addState(bm);
}else{bU.removeState(bm);
}bU.setValue(N+bF);
bU.dateTime=bP.getTime();
bP.setDate(bP.getDate()+1);
}}bM.dispose();
bQ.dispose();
bT.dispose();
}},destruct:function(){if(qx.core.Variant.isSet(bg,u)){qx.locale.Manager.getInstance().removeListener(bj,this._updateDatePane,this);
}this.__vU=this.__vV=this.__vW=null;
}});
})();
(function(){var N="textfield",M="button",L="list",K="selected",J="focusout",I="inner",H="changeValue",G="popup",F="focusin",E="combobox",x="click",D="blur",A="Enter",w="quick",v="_applyPlaceholder",z="qx.ui.form.ComboBox",y="single",B="Down",u="String",C="qx.event.type.Data";
qx.Class.define(z,{extend:qx.ui.form.AbstractSelectBox,implement:[qx.ui.form.IStringForm],construct:function(){arguments.callee.base.call(this);
var O=this._createChildControl(N);
this._createChildControl(M);
this.addListener(x,this._onClick);
this.addListener(F,function(e){O.fireNonBubblingEvent(F,qx.event.type.Focus);
},this);
this.addListener(J,function(e){O.fireNonBubblingEvent(J,qx.event.type.Focus);
},this);
},properties:{appearance:{refine:true,init:E},placeholder:{check:u,nullable:true,apply:v}},events:{"changeValue":C},members:{__vX:null,__vY:null,_applyPlaceholder:function(q,r){this.getChildControl(N).setPlaceholder(q);
},_createChildControlImpl:function(a){var b;

switch(a){case N:b=new qx.ui.form.TextField();
b.setFocusable(false);
b.addState(I);
b.addListener(H,this._onTextFieldChangeValue,this);
b.addListener(D,this.close,this);
this._add(b,{flex:1});
break;
case M:b=new qx.ui.form.Button();
b.setFocusable(false);
b.setKeepActive(true);
b.addState(I);
this._add(b);
break;
case L:b=arguments.callee.base.call(this,a);
b.setSelectionMode(y);
break;
}return b||arguments.callee.base.call(this,a);
},_forwardStates:{focused:true},tabFocus:function(){var t=this.getChildControl(N);
t.getFocusElement().focus();
t.selectAllText();
},setValue:function(c){var d=this.getChildControl(N);

if(d.getValue()==c){return;
}d.setValue(c);
},getValue:function(){return this.getChildControl(N).getValue();
},resetValue:function(){this.getChildControl(N).setValue(null);
},_onKeyPress:function(e){var g=this.getChildControl(G);
var f=e.getKeyIdentifier();

if(f==B&&e.isAltPressed()){this.getChildControl(M).addState(K);
this.toggle();
e.stopPropagation();
}else if(f==A){if(g.isVisible()){this.close();
e.stop();
}}else if(g.isVisible()){arguments.callee.base.call(this,e);
}},_onClick:function(e){var S=e.getTarget();

if(S==this.getChildControl(M)){this.toggle();
}else{this.close();
}},_onListMouseDown:function(e){if(this.__vX){var s=this.__vX.getLabel();

if(this.getFormat()!=null){s=this.getFormat().call(this,this.__vX);
}if(s&&s.translate){s=s.translate();
}this.setValue(s);
this.__vX=null;
}},_onListChangeSelection:function(e){var h=e.getData();

if(h.length>0){var i=this.getChildControl(L);

if(i.getSelectionContext()==w){this.__vX=h[0];
}else{var j=h[0].getLabel();

if(this.getFormat()!=null){j=this.getFormat().call(this,h[0]);
}if(j&&j.translate){j=j.translate();
}this.setValue(j);
this.__vX=null;
}}},_onPopupChangeVisibility:function(e){var l=this.getChildControl(G);

if(l.isVisible()){var m=this.getChildControl(L);
var n=this.getValue();
var k=null;

if(n){k=m.findItem(n);
}
if(k){m.setSelection([k]);
}else{m.resetSelection();
}}else{this.tabFocus();
}this.getChildControl(M).removeState(K);
},_onTextFieldChangeValue:function(e){var R=e.getData();
var Q=this.getChildControl(L);

if(R!=null){var P=Q.findItem(R,false);

if(P){Q.setSelection([P]);
}else{Q.resetSelection();
}}else{Q.resetSelection();
}this.fireDataEvent(H,R,e.getOldData());
},getTextSelection:function(){return this.getChildControl(N).getTextSelection();
},getTextSelectionLength:function(){return this.getChildControl(N).getTextSelectionLength();
},setTextSelection:function(o,p){this.getChildControl(N).setTextSelection(o,p);
},clearTextSelection:function(){this.getChildControl(N).clearTextSelection();
},selectAllText:function(){this.getChildControl(N).selectAllText();
}}});
})();
(function(){var o="checked",n="keypress",m="Boolean",l="Right",k="_applyValue",j="changeValue",i="qx.ui.form.RadioButton",h="radiobutton",g="Left",f="qx.ui.form.RadioGroup",b="Down",d="_applyGroup",c="Up",a="execute";
qx.Class.define(i,{extend:qx.ui.form.Button,include:[qx.ui.form.MForm,qx.ui.form.MModelProperty],implement:[qx.ui.form.IRadioItem,qx.ui.form.IForm,qx.ui.form.IBooleanForm,qx.ui.form.IModel],construct:function(u){{};
arguments.callee.base.call(this,u);
this.addListener(a,this._onExecute);
this.addListener(n,this._onKeyPress);
},properties:{group:{check:f,nullable:true,apply:d},value:{check:m,nullable:true,event:j,apply:k,init:false},appearance:{refine:true,init:h},allowGrowX:{refine:true,init:false}},members:{_applyValue:function(r,s){r?this.addState(o):this.removeState(o);

if(r&&this.getFocusable()){this.focus();
}},_applyGroup:function(p,q){if(q){q.remove(this);
}
if(p){p.add(this);
}},_onExecute:function(e){this.setValue(true);
},_onKeyPress:function(e){var t=this.getGroup();

if(!t){return;
}
switch(e.getKeyIdentifier()){case g:case c:t.selectPrevious();
break;
case l:case b:t.selectNext();
break;
}}}});
})();
(function(){var k="list",j="textfield",i="popup",h="Down",g="",f="Escape",d="qx.util.format.DateFormat",c="changeValue",b="Left",a="Up",w="execute",v="changeLocale",u="_applyDateFormat",t="changeVisibility",s="qx.dynlocale",r="medium",q="mouseup",p="qx.ui.form.DateField",o="datefield",n="hidden",l="on",m="Right";
qx.Class.define(p,{extend:qx.ui.form.ComboBox,implement:[qx.ui.form.IDateForm],construct:function(){arguments.callee.base.call(this);
this.setDateFormat(qx.ui.form.DateField.getDefaultDateFormatter());
if(qx.core.Variant.isSet(s,l)){qx.locale.Manager.getInstance().addListener(v,function(){this.setDateFormat(qx.ui.form.DateField.getDefaultDateFormatter());
},this);
}},properties:{appearance:{refine:true,init:o},dateFormat:{check:d,apply:u}},statics:{__wa:null,__wb:null,getDefaultDateFormatter:function(){var x=qx.locale.Date.getDateFormat(r).toString();

if(x==this.__wa){return this.__wb;
}
if(this.__wb){this.__wb.dispose();
}this.__wb=new qx.util.format.DateFormat(x,qx.locale.Manager.getInstance().getLocale());
this.__wa=x;
return this.__wb;
}},members:{setValue:function(K){var L=this.getChildControl(j);
L.setValue(this.getDateFormat().format(K));
var M=this.getChildControl(k);
M.setValue(K);
},getValue:function(){var W=this.getChildControl(j).getValue();
try{return this.getDateFormat().parse(W);
}catch(J){return null;
}},resetValue:function(){var H=this.getChildControl(j);
H.setValue(g);
var I=this.getChildControl(k);
I.setValue(null);
},_applyDateFormat:function(N,O){try{var Q=this.getChildControl(j);
var R=Q.getValue();
var P=O.parse(R);
Q.setValue(N.format(P));
}catch(S){}},_createChildControlImpl:function(F){var G;

switch(F){case k:G=new qx.ui.control.DateChooser();
G.setFocusable(false);
G.setKeepFocus(true);
G.addListener(w,this._onChangeDate,this);
break;
case i:G=new qx.ui.popup.Popup(new qx.ui.layout.VBox);
G.setAutoHide(false);
G.add(this.getChildControl(k));
G.addListener(q,this._onChangeDate,this);
G.addListener(t,this._onPopupChangeVisibility,this);
break;
}return G||arguments.callee.base.call(this,F);
},_onChangeDate:function(e){var C=this.getChildControl(j);
var D=this.getChildControl(k).getValue();
C.setValue(this.getDateFormat().format(D));
this.close();
},_onKeyPress:function(e){var y=e.getKeyIdentifier();

if(y==h&&e.isAltPressed()){this.toggle();
e.stopPropagation();
return;
}var z=this.getChildControl(i);

if(z.getVisibility()==n){return;
}if(y==f){this.close();
e.stopPropagation();
return;
}if(y===b||y===m||y===h||y===a){e.preventDefault();
}this.getChildControl(k).handleKeyPress(e);
},_onPopupChangeVisibility:function(e){var U=this.getChildControl(i);

if(U.isVisible()){var V=this.getChildControl(k);
var T=this.getValue();
V.setValue(T);
}},_onTextFieldChangeValue:function(e){var A=this.getValue();

if(A!=null){var B=this.getChildControl(k);
B.setValue(A);
}this.fireDataEvent(c,this.getValue());
},isEmpty:function(){var E=this.getChildControl(j).getValue();
return E==null||E==g;
}}});
})();
