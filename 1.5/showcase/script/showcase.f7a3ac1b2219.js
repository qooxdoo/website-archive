qx.$$packageData['131']={"locales":{},"resources":{},"translations":{"C":{},"de":{"key_full_Alt":"Alt","key_full_Apps":"Kontextmenü","key_full_Backspace":"Rücktaste","key_full_CapsLock":"Feststelltaste","key_full_Control":"Steuerung","key_full_Delete":"Entfernen","key_full_Down":"Pfeil runter","key_full_End":"Ende","key_full_Enter":"Enter","key_full_Escape":"Escape","key_full_Home":"Position 1","key_full_Insert":"Einfügen","key_full_Left":"Pfeil links","key_full_Meta":"Meta","key_full_NumLock":"NumLock","key_full_PageDown":"Bild runter","key_full_PageUp":"Bild hoch","key_full_Pause":"Pause","key_full_PrintScreen":"Drucken","key_full_Right":"Pfeil rechts","key_full_Scroll":"Rollen","key_full_Shift":"Umschalttaste","key_full_Space":"Leertaste","key_full_Tab":"Tabulator","key_full_Up":"Pfeil hoch","key_full_Win":"Windowstaste","key_short_Alt":"Alt","key_short_Apps":"Kontext","key_short_Backspace":"Rück","key_short_CapsLock":"Feststell","key_short_Control":"Strg","key_short_Delete":"Entf","key_short_Down":"Runter","key_short_End":"Ende","key_short_Enter":"Enter","key_short_Escape":"Esc","key_short_Home":"Pos1","key_short_Insert":"Einfg","key_short_Left":"Links","key_short_Meta":"Meta","key_short_NumLock":"Num","key_short_PageDown":"Bild runter","key_short_PageUp":"Bild hoch","key_short_Pause":"Pause","key_short_PrintScreen":"Druck","key_short_Right":"Rechts","key_short_Scroll":"Rollen","key_short_Shift":"Umschalt","key_short_Space":"Leer","key_short_Tab":"Tab","key_short_Up":"Hoch","key_short_Win":"Win"},"en":{},"es":{"key_full_Alt":"Alt","key_full_Apps":"Aplicaciones","key_full_Backspace":"Retroceso","key_full_CapsLock":"Bloqueo Mayúsculas","key_full_Control":"Control","key_full_Delete":"Suprimir","key_full_Down":"Flecha abajo","key_full_End":"Fin","key_full_Enter":"Intro","key_full_Escape":"Escape","key_full_Home":"Inicio","key_full_Insert":"Insertar","key_full_Left":"Flecha izquierda","key_full_Meta":"Meta","key_full_NumLock":"Bloqueo Numérico","key_full_PageDown":"Avanzar Página","key_full_PageUp":"Retroceder Página","key_full_Pause":"Pausa","key_full_PrintScreen":"Imprimir Pantalla","key_full_Right":"Flecha derecha","key_full_Scroll":"Bloq. Despl.","key_full_Shift":"Mayúscula","key_full_Space":"Espacio","key_full_Tab":"Tabulador","key_full_Up":"Flecha arriba","key_full_Win":"Windows","key_short_Alt":"Alt","key_short_Apps":"Aplic","key_short_Backspace":"Retroceso","key_short_CapsLock":"BloqMayús","key_short_Control":"Ctrl","key_short_Delete":"Supr","key_short_Down":"Abajo","key_short_End":"Fin","key_short_Enter":"Intro","key_short_Escape":"Esc","key_short_Home":"Inicio","key_short_Insert":"Insert","key_short_Left":"Izquierda","key_short_Meta":"Meta","key_short_NumLock":"BloqNum","key_short_PageDown":"AvPág","key_short_PageUp":"RePág","key_short_Pause":"Pausa","key_short_PrintScreen":"ImprPant","key_short_Right":"Derecha","key_short_Scroll":"BloqDespl","key_short_Shift":"Mayús","key_short_Space":"Espacio","key_short_Tab":"Tab","key_short_Up":"Arriba","key_short_Win":"Win"},"ro":{},"sv":{"key_full_Alt":"Alt","key_full_Apps":"Apps","key_full_Backspace":"Backspace","key_full_CapsLock":"CapsLock","key_full_Control":"Control","key_full_Delete":"Delete","key_full_Down":"Ner","key_full_End":"End","key_full_Enter":"Enter","key_full_Escape":"Escape","key_full_Home":"Home","key_full_Insert":"Insert","key_full_Left":"Vänster","key_full_Meta":"Meta","key_full_NumLock":"NumLock","key_full_PageDown":"PageDown","key_full_PageUp":"PageUp","key_full_Pause":"Pause","key_full_PrintScreen":"PrintScreen","key_full_Right":"Höger","key_full_Scroll":"Scroll","key_full_Shift":"Shift","key_full_Space":"Blanksteg","key_full_Tab":"Tab","key_full_Up":"Upp","key_full_Win":"Win","key_short_Alt":"Alt","key_short_Apps":"Apps","key_short_Backspace":"BS","key_short_CapsLock":"Caps","key_short_Control":"Ctrl","key_short_Delete":"Del","key_short_Down":"Ner","key_short_End":"End","key_short_Enter":"Enter","key_short_Escape":"Esc","key_short_Home":"Home","key_short_Insert":"Ins","key_short_Left":"Vänster","key_short_Meta":"Meta","key_short_NumLock":"Num","key_short_PageDown":"PgDn","key_short_PageUp":"PgUp","key_short_Pause":"Pause","key_short_PrintScreen":"PrnScn","key_short_Right":"Höger","key_short_Scroll":"Scroll","key_short_Shift":"Shift","key_short_Space":"Space","key_short_Tab":"Tab","key_short_Up":"Upp","key_short_Win":"Win"}}};
qx.Part.$$notifyLoad("131", function() {
(function(){var r="Boolean",q="changeInvalidMessage",p="changeValue",o="String",n="_applyAllowEmptySelection",m="_applyInvalidMessage",k="qx.ui.form.RadioGroup",j="_applyValid",h="",g="changeRequired",c="changeValid",f="changeEnabled",d="__a",b="changeSelection",a="_applyEnabled";
qx.Class.define(k,{extend:qx.core.Object,implement:[qx.ui.core.ISingleSelection,qx.ui.form.IForm,qx.ui.form.IModelSelection],include:[qx.ui.core.MSingleSelectionHandling,qx.ui.form.MModelSelection],construct:function(s){qx.core.Object.call(this);
this.__a=[];
this.addListener(b,this.__b,this);

if(s!=null){this.add.apply(this,arguments);
}},properties:{enabled:{check:r,apply:a,event:f,init:true},wrap:{check:r,init:true},allowEmptySelection:{check:r,init:false,apply:n},valid:{check:r,init:true,apply:j,event:c},required:{check:r,init:false,event:g},invalidMessage:{check:o,init:h,event:q,apply:m},requiredInvalidMessage:{check:o,nullable:true,event:q}},members:{__a:null,getItems:function(){return this.__a;
},add:function(t){var u=this.__a;
var v;

for(var i=0,l=arguments.length;i<l;i++){v=arguments[i];

if(qx.lang.Array.contains(u,v)){continue;
}v.addListener(p,this._onItemChangeChecked,this);
u.push(v);
v.setGroup(this);
if(v.getValue()){this.setSelection([v]);
}}if(!this.isAllowEmptySelection()&&u.length>0&&!this.getSelection()[0]){this.setSelection([u[0]]);
}},remove:function(w){var x=this.__a;

if(qx.lang.Array.contains(x,w)){qx.lang.Array.remove(x,w);
if(w.getGroup()===this){w.resetGroup();
}w.removeListener(p,this._onItemChangeChecked,this);
if(w.getValue()){this.resetSelection();
}}},getChildren:function(){return this.__a;
},_onItemChangeChecked:function(e){var y=e.getTarget();

if(y.getValue()){this.setSelection([y]);
}else if(this.getSelection()[0]==y){this.resetSelection();
}},_applyInvalidMessage:function(z,A){for(var i=0;i<this.__a.length;i++){this.__a[i].setInvalidMessage(z);
}},_applyValid:function(B,C){for(var i=0;i<this.__a.length;i++){this.__a[i].setValid(B);
}},_applyEnabled:function(D,E){var F=this.__a;

if(D==null){for(var i=0,l=F.length;i<l;i++){F[i].resetEnabled();
}}else{for(var i=0,l=F.length;i<l;i++){F[i].setEnabled(D);
}}},_applyAllowEmptySelection:function(G,H){if(!G&&this.isSelectionEmpty()){this.resetSelection();
}},selectNext:function(){var I=this.getSelection()[0];
var K=this.__a;
var J=K.indexOf(I);

if(J==-1){return;
}var i=0;
var length=K.length;
if(this.getWrap()){J=(J+1)%length;
}else{J=Math.min(J+1,length-1);
}
while(i<length&&!K[J].getEnabled()){J=(J+1)%length;
i++;
}this.setSelection([K[J]]);
},selectPrevious:function(){var L=this.getSelection()[0];
var N=this.__a;
var M=N.indexOf(L);

if(M==-1){return;
}var i=0;
var length=N.length;
if(this.getWrap()){M=(M-1+length)%length;
}else{M=Math.max(M-1,0);
}
while(i<length&&!N[M].getEnabled()){M=(M-1+length)%length;
i++;
}this.setSelection([N[M]]);
},_getItems:function(){return this.getItems();
},_isAllowEmptySelection:function(){return this.isAllowEmptySelection();
},_isItemSelectable:function(O){return this.__a.indexOf(O)!=-1;
},__b:function(e){var Q=e.getData()[0];
var P=e.getOldData()[0];

if(P){P.setValue(false);
}
if(Q){Q.setValue(true);
}}},destruct:function(){this._disposeArray(d);
}});
})();
(function(){var b="qx.ui.form.IRadioItem",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){},getValue:function(){},setGroup:function(d){this.assertInstance(d,qx.ui.form.RadioGroup);
},getGroup:function(){}}});
})();
(function(){var o="checked",n="qx.ui.form.RadioGroup",m="Boolean",l="menu-radiobutton",k="label",j="_applyValue",i="qx.ui.menu.RadioButton",h="value",g="changeValue",f="toolTipText",b="enabled",d="_applyGroup",c="menu",a="execute";
qx.Class.define(i,{extend:qx.ui.menu.AbstractButton,include:[qx.ui.form.MModelProperty],implement:[qx.ui.form.IRadioItem,qx.ui.form.IBooleanForm,qx.ui.form.IModel],construct:function(p,q){qx.ui.menu.AbstractButton.call(this);
if(p!=null){this.setLabel(p);
}
if(q!=null){this.setMenu(q);
}this.addListener(a,this._onExecute,this);
},properties:{appearance:{refine:true,init:l},value:{check:m,nullable:true,event:g,apply:j,init:false},group:{check:n,nullable:true,apply:d}},members:{_bindableProperties:[b,k,f,h,c],_applyValue:function(r,s){r?this.addState(o):this.removeState(o);
},_applyGroup:function(t,u){if(u){u.remove(this);
}
if(t){t.add(this);
}},_onExecute:function(e){var v=this.getGroup();

if(v&&v.getAllowEmptySelection()){this.toggleValue();
}else{this.setValue(true);
}},_onMouseUp:function(e){if(e.isLeftPressed()){this.execute();
}else{if(this.getContextMenu()){return;
}}qx.ui.menu.Manager.getInstance().hideAll();
},_onKeyPress:function(e){this.execute();
}}});
})();
(function(){var o="String",n="execute",m="qx.ui.menu.Menu",l="_shortcut",k="changeEnabled",j="changeToolTipText",i="Boolean",h="qx.ui.core.Command",g="changeLabel",f="changeMenu",c="changeIcon",e="changeValue",d="_applyShortcut",b="_applyEnabled",a="qx.event.type.Data";
qx.Class.define(h,{extend:qx.core.Object,construct:function(p){qx.core.Object.call(this);
this._shortcut=new qx.bom.Shortcut(p);
this._shortcut.addListener(n,this.execute,this);
},events:{"execute":a},properties:{enabled:{init:true,check:i,event:k,apply:b},shortcut:{check:o,apply:d,nullable:true},label:{check:o,nullable:true,event:g},icon:{check:o,nullable:true,event:c},toolTipText:{check:o,nullable:true,event:j},value:{nullable:true,event:e},menu:{check:m,nullable:true,event:f}},members:{_shortcut:null,_applyEnabled:function(q){this._shortcut.setEnabled(q);
},_applyShortcut:function(r){this._shortcut.setShortcut(r);
},execute:function(s){this.fireDataEvent(n,s);
},toString:function(){return this._shortcut.toString();
}},destruct:function(){this._disposeObjects(l);
this.removeListener(n,this.execute,this);
}});
})();
(function(){var m="Unidentified",l="Boolean",k="+",j="short",h="keydown",g="",f="Control",d="keypress",c="-",b="PageUp",S="Escape",R="qx.event.type.Data",Q="_applyShortcut",P="PrintScreen",O="NumLock",N="5",M="8",L="execute",K="Meta",J="0",t="2",u="Shift",r="You can only specify one non modifier key!",s="3",p="/",q="Delete",n="String",o="changeEnabled",v="*",w="qx.bom.Shortcut",B="6",A="4",D="1",C="Alt",F="Not a valid key name for a shortcut: ",E="PageDown",y="Whitespaces are not allowed within shortcuts",I="_applyEnabled",H="7",G="a",x="z",z="9";
qx.Class.define(w,{extend:qx.core.Object,construct:function(T){qx.core.Object.call(this);
this.__pj={};
this.__pk=null;

if(T!=null){this.setShortcut(T);
}this.initEnabled();
},events:{"execute":R},properties:{enabled:{init:true,check:l,event:o,apply:I},shortcut:{check:n,apply:Q,nullable:true},autoRepeat:{check:l,init:false}},members:{__pj:g,__pk:g,execute:function(U){this.fireDataEvent(L,U);
},__pl:function(event){if(this.getEnabled()&&this.__pm(event)){if(!this.isAutoRepeat()){this.execute(event.getTarget());
}event.stop();
}},__dD:function(event){if(this.getEnabled()&&this.__pm(event)){if(this.isAutoRepeat()){this.execute(event.getTarget());
}event.stop();
}},_applyEnabled:function(V,W){if(V){qx.event.Registration.addListener(document.documentElement,h,this.__pl,this);
qx.event.Registration.addListener(document.documentElement,d,this.__dD,this);
}else{qx.event.Registration.removeListener(document.documentElement,h,this.__pl,this);
qx.event.Registration.removeListener(document.documentElement,d,this.__dD,this);
}},_applyShortcut:function(X,Y){if(X){if(X.search(/[\s]+/)!=-1){var bc=y;
this.error(bc);
throw new Error(bc);
}this.__pj={"Control":false,"Shift":false,"Meta":false,"Alt":false};
this.__pk=null;
var ba;
var a=[];

while(X.length>0&&ba!=-1){ba=X.search(/[-+]+/);
a.push((X.length==1||ba==-1)?X:X.substring(0,ba));
X=X.substring(ba+1);
}var bb=a.length;

for(var i=0;i<bb;i++){var bd=this.__po(a[i]);

switch(bd){case f:case u:case K:case C:this.__pj[bd]=true;
break;
case m:var bc=F+a[i];
this.error(bc);
throw bc;
default:if(this.__pk){var bc=r;
this.error(bc);
throw bc;
}this.__pk=bd;
}}}return true;
},__pm:function(e){var be=this.__pk;

if(!be){return ;
}if((!this.__pj.Shift&&e.isShiftPressed())||(this.__pj.Shift&&!e.isShiftPressed())||(!this.__pj.Control&&e.isCtrlPressed())||(this.__pj.Control&&!e.isCtrlPressed())||(!this.__pj.Meta&&e.isMetaPressed())||(this.__pj.Meta&&!e.isMetaPressed())||(!this.__pj.Alt&&e.isAltPressed())||(this.__pj.Alt&&!e.isAltPressed())){return false;
}
if(be==e.getKeyIdentifier()){return true;
}return false;
},__pn:{esc:S,ctrl:f,print:P,del:q,pageup:b,pagedown:E,numlock:O,numpad_0:J,numpad_1:D,numpad_2:t,numpad_3:s,numpad_4:A,numpad_5:N,numpad_6:B,numpad_7:H,numpad_8:M,numpad_9:z,numpad_divide:p,numpad_multiply:v,numpad_minus:c,numpad_plus:k},__po:function(bf){var bg=qx.event.handler.Keyboard;
var bh=m;

if(bg.isValidKeyIdentifier(bf)){return bf;
}
if(bf.length==1&&bf>=G&&bf<=x){return bf.toUpperCase();
}bf=bf.toLowerCase();
var bh=this.__pn[bf]||qx.lang.String.firstUp(bf);

if(bg.isValidKeyIdentifier(bh)){return bh;
}else{return m;
}},toString:function(){var bk=this.__pk;
var bj=[];

for(var bi in this.__pj){if(this.__pj[bi]){bj.push(qx.locale.Key.getKeyName(j,bi));
}}
if(bk){bj.push(qx.locale.Key.getKeyName(j,bk));
}return bj.join(k);
}},destruct:function(){this.setEnabled(false);
this.__pj=this.__pk=null;
}});
})();
(function(){var by="Control",bx="Left",bw="Meta",bv="Pause",bu="End",bt="Down",bs="Ctrl",br="Home",bq="Apps",bp="Win",be="Right",bd="Backspace",bc="Space",bb="Up",ba="Shift",Y="Enter",X="Scroll",W="Alt",V="Escape",U="key_full_Meta",bF="PrintScreen",bG="NumLock",bD="key_short_Alt",bE="key_short_Control_Mac",bB="key_short_Insert",bC="Del",bz="key_full_Enter",bA="key_full_Control",bH="qx.locale.Key",bI="Tabulator",bi="key_full_Space",bh="key_short_Meta",bk="key_short_PageUp",bj="key_short_Pause",bm="key_full_Down",bl="key_short_Apps",bo="key_short_Win",bn="key_full_Right",bg="os.name",bf="key_short_Up",a="key_full_PageDown",b="key_full_Alt",c="PgDn",d="Esc",e="key_full_Insert",f="osx",g="key_short_Space",h="key_short_Backspace",i="key_short_Home",j="key_short_Down",bM="PgUp",bL="_Mac",bK="key_short_CapsLock",bJ="PageUp",bQ="key_full_Up",bP="key_full_Home",bO="key_full_Backspace",bN="PageDown",bS="CapsLock",bR="Ins",E="key_short_PrintScreen",F="Tab",C="key_full_Apps",D="key_short_Tab",I="key_short_End",J="_",G="Caps",H="key_short_NumLock",A="Num",B="key_full_Scroll",r="key_short_Left",q="key_short_Scroll",t="key_",s="key_full_Pause",n="key_short_Right",m="key_full_PrintScreen",p="key_full_Win",o="key_full_Control_Mac",l="key_short_Shift",k="key_short_PageDown",O="key_short_Enter",P="key_short_Control",Q="Insert",R="key_short_Escape",K="key_full_Tab",L="Print",M="Delete",N="key_full_CapsLock",S="key_full_Escape",T="key_short_Delete",z="key_full_PageUp",y="key_full_Shift",x="key_full_NumLock",w="key_full_Delete",v="key_full_End",u="key_full_Left";
qx.Class.define(bH,{statics:{getKeyName:function(bT,bU,bV){var bX=t+bT+J+bU;
if(qx.core.Environment.get(bg)==f&&bU==by){bX+=bL;
}var bW=qx.locale.Manager.getInstance().translate(bX,[],bV);

if(bW==bX){return qx.locale.Key._keyNames[bX]||bU;
}else{return bW;
}}},defer:function(bY){var cb={};
var ca=qx.locale.Manager;
cb[ca.marktr(h)]=bd;
cb[ca.marktr(D)]=F;
cb[ca.marktr(g)]=bc;
cb[ca.marktr(O)]=Y;
cb[ca.marktr(l)]=ba;
cb[ca.marktr(P)]=bs;
cb[ca.marktr(bE)]=bs;
cb[ca.marktr(bD)]=W;
cb[ca.marktr(bK)]=G;
cb[ca.marktr(bh)]=bw;
cb[ca.marktr(R)]=d;
cb[ca.marktr(r)]=bx;
cb[ca.marktr(bf)]=bb;
cb[ca.marktr(n)]=be;
cb[ca.marktr(j)]=bt;
cb[ca.marktr(bk)]=bM;
cb[ca.marktr(k)]=c;
cb[ca.marktr(I)]=bu;
cb[ca.marktr(i)]=br;
cb[ca.marktr(bB)]=bR;
cb[ca.marktr(T)]=bC;
cb[ca.marktr(H)]=A;
cb[ca.marktr(E)]=L;
cb[ca.marktr(q)]=X;
cb[ca.marktr(bj)]=bv;
cb[ca.marktr(bo)]=bp;
cb[ca.marktr(bl)]=bq;
cb[ca.marktr(bO)]=bd;
cb[ca.marktr(K)]=bI;
cb[ca.marktr(bi)]=bc;
cb[ca.marktr(bz)]=Y;
cb[ca.marktr(y)]=ba;
cb[ca.marktr(bA)]=by;
cb[ca.marktr(o)]=by;
cb[ca.marktr(b)]=W;
cb[ca.marktr(N)]=bS;
cb[ca.marktr(U)]=bw;
cb[ca.marktr(S)]=V;
cb[ca.marktr(u)]=bx;
cb[ca.marktr(bQ)]=bb;
cb[ca.marktr(bn)]=be;
cb[ca.marktr(bm)]=bt;
cb[ca.marktr(z)]=bJ;
cb[ca.marktr(a)]=bN;
cb[ca.marktr(v)]=bu;
cb[ca.marktr(bP)]=br;
cb[ca.marktr(e)]=Q;
cb[ca.marktr(w)]=M;
cb[ca.marktr(x)]=bG;
cb[ca.marktr(m)]=bF;
cb[ca.marktr(B)]=X;
cb[ca.marktr(s)]=bv;
cb[ca.marktr(p)]=bp;
cb[ca.marktr(C)]=bq;
bY._keyNames=cb;
}});
})();

});