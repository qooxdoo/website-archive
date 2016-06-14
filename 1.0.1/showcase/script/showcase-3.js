qx.$$packageData['a59a2ad7827d']={"resources":{}};
(function(){var z="Boolean",y="changeValue",x="_applyAllowEmptySelection",w="_applyInvalidMessage",v="qx.ui.form.RadioGroup",u="_applyValid",t="",s="changeRequired",r="changeValid",q="changeEnabled",n="changeInvalidMessage",p="changeSelection",o="__hH",m="_applyEnabled",k="String";
qx.Class.define(v,{extend:qx.core.Object,implement:[qx.ui.core.ISingleSelection,qx.ui.form.IForm,qx.ui.form.IModelSelection],include:[qx.ui.core.MSingleSelectionHandling,qx.ui.form.MModelSelection],construct:function(P){arguments.callee.base.call(this);
this.__hH=[];
this.addListener(p,this.__hI,this);

if(P!=null){this.add.apply(this,arguments);
}},properties:{enabled:{check:z,apply:m,event:q,init:true},wrap:{check:z,init:true},allowEmptySelection:{check:z,init:false,apply:x},valid:{check:z,init:true,apply:u,event:r},required:{check:z,init:false,event:s},invalidMessage:{check:k,init:t,event:n,apply:w}},members:{__hH:null,getItems:function(){return this.__hH;
},add:function(J){var K=this.__hH;
var L;

for(var i=0,l=arguments.length;i<l;i++){L=arguments[i];

if(qx.lang.Array.contains(K,L)){continue;
}L.addListener(y,this._onItemChangeChecked,this);
K.push(L);
L.setGroup(this);
if(L.getValue()){this.setSelection([L]);
}}if(!this.isAllowEmptySelection()&&K.length>0&&!this.getSelection()[0]){this.setSelection([K[0]]);
}},remove:function(B){var C=this.__hH;

if(qx.lang.Array.contains(C,B)){qx.lang.Array.remove(C,B);
if(B.getGroup()===this){B.resetGroup();
}B.removeListener(y,this._onItemChangeChecked,this);
if(B.getValue()){this.resetSelection();
}}},getChildren:function(){return this.__hH;
},_onItemChangeChecked:function(e){var A=e.getTarget();

if(A.getValue()){this.setSelection([A]);
}else if(this.getSelection()[0]==A){this.resetSelection();
}},_applyInvalidMessage:function(D,E){for(var i=0;i<this.__hH.length;i++){this.__hH[i].setInvalidMessage(D);
}},_applyValid:function(F,G){for(var i=0;i<this.__hH.length;i++){this.__hH[i].setValid(F);
}},_applyEnabled:function(M,N){var O=this.__hH;

if(M==null){for(var i=0,l=O.length;i<l;i++){O[i].resetEnabled();
}}else{for(var i=0,l=O.length;i<l;i++){O[i].setEnabled(M);
}}},_applyAllowEmptySelection:function(a,b){if(!a&&this.isSelectionEmpty()){this.resetSelection();
}},selectNext:function(){var c=this.getSelection()[0];
var f=this.__hH;
var d=f.indexOf(c);

if(d==-1){return;
}var i=0;
var length=f.length;
if(this.getWrap()){d=(d+1)%length;
}else{d=Math.min(d+1,length-1);
}
while(i<length&&!f[d].getEnabled()){d=(d+1)%length;
i++;
}this.setSelection([f[d]]);
},selectPrevious:function(){var g=this.getSelection()[0];
var j=this.__hH;
var h=j.indexOf(g);

if(h==-1){return;
}var i=0;
var length=j.length;
if(this.getWrap()){h=(h-1+length)%length;
}else{h=Math.max(h-1,0);
}
while(i<length&&!j[h].getEnabled()){h=(h-1+length)%length;
i++;
}this.setSelection([j[h]]);
},_getItems:function(){return this.getItems();
},_isAllowEmptySelection:function(){return this.isAllowEmptySelection();
},__hI:function(e){var I=e.getData()[0];
var H=e.getOldData()[0];

if(H){H.setValue(false);
}
if(I){I.setValue(true);
}}},destruct:function(){this._disposeArray(o);
}});
})();
(function(){var A="popup",z="list",y="",x="mousewheel",w="resize",v="Function",u="blur",t="abstract",s="keypress",r="Number",k="changeSelection",q="PageUp",n="_applyMaxListHeight",i="PageDown",h="mouseup",m="Escape",l="changeVisibility",o="one",g="middle",p="qx.ui.form.AbstractSelectBox",j="mousedown";
qx.Class.define(p,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.form.MForm],implement:[qx.ui.form.IForm],type:t,construct:function(){arguments.callee.base.call(this);
var J=new qx.ui.layout.HBox();
this._setLayout(J);
J.setAlignY(g);
this.addListener(s,this._onKeyPress);
this.addListener(u,this._onBlur,this);
var I=qx.core.Init.getApplication().getRoot();
I.addListener(x,this._onMousewheel,this,true);
this.addListener(w,this._onResize,this);
},properties:{focusable:{refine:true,init:true},width:{refine:true,init:120},maxListHeight:{check:r,apply:n,nullable:true,init:200},format:{check:v,init:function(F){return this._defaultFormat(F);
},nullable:true}},members:{_createChildControlImpl:function(B){var C;

switch(B){case z:C=new qx.ui.form.List().set({focusable:false,keepFocus:true,height:null,width:null,maxHeight:this.getMaxListHeight(),selectionMode:o,quickSelection:true});
C.addListener(k,this._onListChangeSelection,this);
C.addListener(j,this._onListMouseDown,this);
break;
case A:C=new qx.ui.popup.Popup(new qx.ui.layout.VBox);
C.setAutoHide(false);
C.setKeepActive(true);
C.addListener(h,this.close,this);
C.add(this.getChildControl(z));
C.addListener(l,this._onPopupChangeVisibility,this);
break;
}return C||arguments.callee.base.call(this,B);
},_applyMaxListHeight:function(G,H){this.getChildControl(z).setMaxHeight(G);
},getChildrenContainer:function(){return this.getChildControl(z);
},open:function(){var c=this.getChildControl(A);
c.placeToWidget(this,true);
c.show();
},close:function(){this.getChildControl(A).hide();
},toggle:function(){var D=this.getChildControl(A).isVisible();

if(D){this.close();
}else{this.open();
}},_defaultFormat:function(K){var L=K?K.getLabel():y;
var M=K?K.getRich():false;

if(M){L=L.replace(/<[^>]+?>/g,y);
L=qx.bom.String.unescape(L);
}return L;
},_onBlur:function(e){this.close();
},_onKeyPress:function(e){var a=e.getKeyIdentifier();
var b=this.getChildControl(A);
if(b.isHidden()&&(a==i||a==q)){e.stopPropagation();
}else if(!b.isHidden()&&a==m){this.close();
e.stop();
}else{this.getChildControl(z).handleKeyPress(e);
}},_onMousewheel:function(e){var f=e.getTarget();
var d=this.getChildControl(A);

if(qx.ui.core.Widget.contains(d,f)){e.preventDefault();
}else{this.close();
}},_onResize:function(e){this.getChildControl(A).setMinWidth(e.getData().width);
},_onListChangeSelection:function(e){throw new Error("Abstract method: _onListChangeSelection()");
},_onListMouseDown:function(e){throw new Error("Abstract method: _onListMouseDown()");
},_onPopupChangeVisibility:function(e){throw new Error("Abstract method: _onPopupChangeVisibility()");
}},destruct:function(){var E=qx.core.Init.getApplication().getRoot();

if(E){E.removeListener(x,this._onMousewheel,this,true);
}}});
})();
(function(){var s="list",r="atom",q="pressed",p="abandoned",o="popup",n="hovered",m="changeLabel",l="changeIcon",k="arrow",j="",H="spacer",G="Enter",F="one",E="mouseout",D="Space",C="key",B="mousewheel",A="keyinput",z="changeSelection",y="quick",w="qx.ui.form.SelectBox",x="mouseover",u="selectbox",v="click",t=" ";
qx.Class.define(w,{extend:qx.ui.form.AbstractSelectBox,implement:[qx.ui.core.ISingleSelection,qx.ui.form.IModelSelection],include:[qx.ui.core.MSingleSelectionHandling,qx.ui.form.MModelSelection],construct:function(){arguments.callee.base.call(this);
this._createChildControl(r);
this._createChildControl(H);
this._createChildControl(k);
this.addListener(x,this._onMouseOver,this);
this.addListener(E,this._onMouseOut,this);
this.addListener(v,this._onClick,this);
this.addListener(B,this._onMouseWheel,this);
this.addListener(A,this._onKeyInput,this);
this.addListener(z,this.__hK,this);
},properties:{appearance:{refine:true,init:u}},members:{__hJ:null,_createChildControlImpl:function(I){var J;

switch(I){case H:J=new qx.ui.core.Spacer();
this._add(J,{flex:1});
break;
case r:J=new qx.ui.basic.Atom(t);
J.setCenter(false);
J.setAnonymous(true);
this._add(J,{flex:1});
break;
case k:J=new qx.ui.basic.Image();
J.setAnonymous(true);
this._add(J);
break;
}return J||arguments.callee.base.call(this,I);
},_forwardStates:{focused:true},_getItems:function(){return this.getChildrenContainer().getChildren();
},_isAllowEmptySelection:function(){return this.getChildrenContainer().getSelectionMode()!==F;
},__hK:function(e){var b=e.getData()[0];
var a=this.getChildControl(s);

if(a.getSelection()[0]!=b){if(b){a.setSelection([b]);
}else{a.resetSelection();
}}this.__hL();
this.__hM();
},__hL:function(){var V=this.getChildControl(s).getSelection()[0];
var W=this.getChildControl(r);
var U=V?V.getIcon():j;
U==null?W.resetIcon():W.setIcon(U);
},__hM:function(){var N=this.getChildControl(s).getSelection()[0];
var O=this.getChildControl(r);
var M=N?N.getLabel():j;
var L=this.getFormat();

if(L!=null){M=L.call(this,N);
}if(M&&M.translate){M=M.translate();
}M==null?O.resetLabel():O.setLabel(M);
},_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}
if(this.hasState(p)){this.removeState(p);
this.addState(q);
}this.addState(n);
},_onMouseOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.removeState(n);

if(this.hasState(q)){this.removeState(q);
this.addState(p);
}},_onClick:function(e){this.toggle();
},_onMouseWheel:function(e){if(this.getChildControl(o).isVisible()){return;
}var Q=e.getWheelDelta()>0?1:-1;
var S=this.getSelectables();
var R=this.getSelection()[0];

if(!R){R=S[0];
}var P=S.indexOf(R)+Q;
var T=S.length-1;
if(P<0){P=0;
}else if(P>=T){P=T;
}this.setSelection([S[P]]);
e.stopPropagation();
e.preventDefault();
},_onKeyPress:function(e){var i=e.getKeyIdentifier();

if(i==G||i==D){if(this.__hJ){this.setSelection([this.__hJ]);
this.__hJ=null;
}this.toggle();
}else{arguments.callee.base.call(this,e);
}},_onKeyInput:function(e){var K=e.clone();
K.setTarget(this._list);
K.setBubbles(false);
this.getChildControl(s).dispatchEvent(K);
},_onListMouseDown:function(e){if(this.__hJ){this.setSelection([this.__hJ]);
this.__hJ=null;
}},_onListChangeSelection:function(e){var c=e.getData();
var g=e.getOldData();
if(g&&g.length>0){g[0].removeListener(l,this.__hL,this);
g[0].removeListener(m,this.__hM,this);
}
if(c.length>0){var f=this.getChildControl(o);
var d=this.getChildControl(s);
var h=d.getSelectionContext();

if(f.isVisible()&&(h==y||h==C)){this.__hJ=c[0];
}else{this.setSelection([c[0]]);
this.__hJ=null;
}c[0].addListener(l,this.__hL,this);
c[0].addListener(m,this.__hM,this);
}else{this.resetSelection();
}},_onPopupChangeVisibility:function(e){var Y=this.getChildControl(o);

if(!Y.isVisible()){var bb=this.getChildControl(s);
if(bb.hasChildren()){bb.setSelection(this.getSelection());
}}else{var X=Y.getLayoutLocation(this);
var bd=qx.bom.Viewport.getHeight();
var bc=X.top;
var be=bd-X.bottom;
var ba=bc>be?bc:be;
var bf=this.getMaxListHeight();
var bb=this.getChildControl(s);

if(bf==null||bf>ba){bb.setMaxHeight(ba);
}else if(bf<ba){bb.setMaxHeight(bf);
}}}},destruct:function(){this.__hJ=null;
}});
})();
(function(){var c="qx.ui.form.IRadioItem",b="qx.event.type.Data";
qx.Interface.define(c,{events:{"changeValue":b},members:{setValue:function(d){},getValue:function(){},setGroup:function(a){this.assertInstance(a,qx.ui.form.RadioGroup);
},getGroup:function(){}}});
})();
(function(){var e="inherit",d="toolbar-button",c="keydown",b="qx.ui.toolbar.Button",a="keyup";
qx.Class.define(b,{extend:qx.ui.form.Button,construct:function(f,g,h){arguments.callee.base.call(this,f,g,h);
this.removeListener(c,this._onKeyDown);
this.removeListener(a,this._onKeyUp);
},properties:{appearance:{refine:true,init:d},show:{refine:true,init:e},focusable:{refine:true,init:false}}});
})();
(function(){var l="checked",k="qx.ui.form.RadioGroup",j="Boolean",i="menu-radiobutton",h="_applyValue",g="qx.ui.menu.RadioButton",f="changeValue",d="_applyGroup",c="execute";
qx.Class.define(g,{extend:qx.ui.menu.AbstractButton,include:[qx.ui.form.MModelProperty],implement:[qx.ui.form.IRadioItem,qx.ui.form.IBooleanForm,qx.ui.form.IModel],construct:function(m,n){arguments.callee.base.call(this);
if(m!=null){this.setLabel(m);
}
if(n!=null){this.setMenu(n);
}this.addListener(c,this._onExecute,this);
},properties:{appearance:{refine:true,init:i},value:{check:j,nullable:true,event:f,apply:h,init:false},group:{check:k,nullable:true,apply:d}},members:{_applyValue:function(a,b){a?this.addState(l):this.removeState(l);
},_applyGroup:function(o,p){if(p){p.remove(this);
}
if(o){o.add(this);
}},_onExecute:function(e){this.setValue(true);
},_onMouseUp:function(e){if(e.isLeftPressed()){this.execute();
}qx.ui.menu.Manager.getInstance().hideAll();
},_onKeyPress:function(e){this.execute();
}}});
})();
(function(){var q="String",p="execute",o="qx.ui.menu.Menu",n="_shortcut",m="changeEnabled",l="changeToolTipText",k="Boolean",j="qx.ui.core.Command",i="changeLabel",h="changeMenu",e="changeIcon",g="changeValue",f="_applyShortcut",d="_applyEnabled",c="qx.event.type.Data";
qx.Class.define(j,{extend:qx.core.Object,construct:function(s){arguments.callee.base.call(this);
this._shortcut=new qx.bom.Shortcut(s);
this._shortcut.addListener(p,this.execute,this);
},events:{"execute":c},properties:{enabled:{init:true,check:k,event:m,apply:d},shortcut:{check:q,apply:f,nullable:true},label:{check:q,nullable:true,event:i},icon:{check:q,nullable:true,event:e},toolTipText:{check:q,nullable:true,event:l},value:{nullable:true,event:g},menu:{check:o,nullable:true,event:h}},members:{_shortcut:null,_applyEnabled:function(a){this._shortcut.setEnabled(a);
},_applyShortcut:function(b){this._shortcut.setShortcut(b);
},execute:function(r){this.fireDataEvent(p,r);
},toString:function(){return this._shortcut.toString();
}},destruct:function(){this._disposeObjects(n);
}});
})();
(function(){var v="Unidentified",u="Boolean",t="+",s="short",r="keydown",q="",p="Control",o="keypress",n="-",m="PageUp",bd="Escape",bc="qx.event.type.Data",bb="_applyShortcut",ba="PrintScreen",Y="NumLock",X="5",W="8",V="execute",U="Meta",T="0",C="2",D="This message will be made private.",A="Shift",B="You can only specify one non modifier key!",y="3",z="/",w="_applyEnabled",x="String",E="changeEnabled",F="*",L="qx.bom.Shortcut",K="6",N="4",M="1",P="Alt",O="Not a valid key name for a shortcut: ",H="PageDown",S="Whitespaces are not allowed within shortcuts",R="Delete",Q="7",G="a",I="z",J="9";
qx.Class.define(L,{extend:qx.core.Object,construct:function(l){arguments.callee.base.call(this);
this.__hb={};
this.__hc=null;

if(l!=null){this.setShortcut(l);
}this.initEnabled();
},events:{"execute":bc},properties:{enabled:{init:true,check:u,event:E,apply:w},shortcut:{check:x,apply:bb,nullable:true},autoRepeat:{check:u,init:false}},members:{__hb:q,__hc:q,execute:function(bi){this.fireDataEvent(V,bi);
},__hd:function(event){if(this.getEnabled()&&this.__hf(event)){if(!this.isAutoRepeat()){this.execute(event.getTarget());
}event.stop();
}},__he:function(event){if(this.getEnabled()&&this.__hf(event)){if(this.isAutoRepeat()){this.execute(event.getTarget());
}event.stop();
}},_applyEnabled:function(j,k){if(j){qx.event.Registration.addListener(document.documentElement,r,this.__hd,this);
qx.event.Registration.addListener(document.documentElement,o,this.__he,this);
}else{qx.event.Registration.removeListener(document.documentElement,r,this.__hd,this);
qx.event.Registration.removeListener(document.documentElement,o,this.__he,this);
}},_applyShortcut:function(b,c){if(b){if(b.search(/[\s]+/)!=-1){var g=S;
this.error(g);
throw new Error(g);
}this.__hb={"Control":false,"Shift":false,"Meta":false,"Alt":false};
this.__hc=null;
var d;
var a=[];

while(b.length>0&&d!=-1){d=b.search(/[-+]+/);
a.push((b.length==1||d==-1)?b:b.substring(0,d));
b=b.substring(d+1);
}var f=a.length;

for(var i=0;i<f;i++){var h=this.__hh(a[i]);

switch(h){case p:case A:case U:case P:this.__hb[h]=true;
break;
case v:var g=O+a[i];
this.error(g);
throw g;
default:if(this.__hc){var g=B;
this.error(g);
throw g;
}this.__hc=h;
}}}return true;
},matchesKeyEvent:function(e){qx.log.Logger.deprecatedMethodWarning(arguments.callee,D);
return this.__hf(e);
},__hf:function(e){var be=this.__hc;

if(!be){return ;
}if((!this.__hb.Shift&&e.isShiftPressed())||(this.__hb.Shift&&!e.isShiftPressed())||(!this.__hb.Control&&e.isCtrlPressed())||(this.__hb.Control&&!e.isCtrlPressed())||(!this.__hb.Meta&&e.isMetaPressed())||(this.__hb.Meta&&!e.isMetaPressed())||(!this.__hb.Alt&&e.isAltPressed())||(this.__hb.Alt&&!e.isAltPressed())){return false;
}
if(be==e.getKeyIdentifier()){return true;
}return false;
},__hg:{esc:bd,ctrl:p,print:ba,del:R,pageup:m,pagedown:H,numlock:Y,numpad_0:T,numpad_1:M,numpad_2:C,numpad_3:y,numpad_4:N,numpad_5:X,numpad_6:K,numpad_7:Q,numpad_8:W,numpad_9:J,numpad_divide:z,numpad_multiply:F,numpad_minus:n,numpad_plus:t},__hh:function(bj){var bk=qx.event.handler.Keyboard;
var bl=v;

if(bk.isValidKeyIdentifier(bj)){return bj;
}
if(bj.length==1&&bj>=G&&bj<=I){return bj.toUpperCase();
}bj=bj.toLowerCase();
var bl=this.__hg[bj]||qx.lang.String.firstUp(bj);

if(bk.isValidKeyIdentifier(bl)){return bl;
}else{return v;
}},toString:function(){var bh=this.__hc;
var bg=[];

for(var bf in this.__hb){if(this.__hb[bf]){bg.push(qx.locale.Key.getKeyName(s,bf));
}}
if(bh){bg.push(qx.locale.Key.getKeyName(s,bh));
}return bg.join(t);
}},destruct:function(){this.setEnabled(false);
this.__hb=this.__hc=null;
}});
})();
(function(){var bB="Control",bA="End",bz="Left",by="Meta",bx="Pause",bw="Down",bv="Ctrl",bu="Home",bt="Apps",bs="Win",bh="Right",bg="Backspace",bf="Space",be="Up",bd="Shift",bc="Enter",bb="Scroll",ba="Alt",Y="key_full_Meta",X="PrintScreen",bI="NumLock",bJ="Escape",bG="key_short_Alt",bH="key_short_Control_Mac",bE="key_short_Insert",bF="Del",bC="Num",bD="key_full_Enter",bK="key_full_Control",bL="qx.locale.Key",bl="Tabulator",bk="key_full_Space",bn="key_short_Meta",bm="key_short_PageUp",bp="key_short_Pause",bo="key_full_Down",br="key_short_Apps",bq="key_short_Win",bj="key_full_Right",bi="key_short_Up",f="key_full_PageDown",g="key_full_Alt",h="PgDn",i="Esc",j="key_full_Insert",k="key_short_Space",l="key_short_Backspace",m="key_short_Home",n="key_short_Down",o="PgUp",bP="_Mac",bO="key_short_CapsLock",bN="PageUp",bM="key_full_Up",bT="key_full_Home",bS="key_full_Backspace",bR="PageDown",bQ="CapsLock",bV="Ins",bU="key_short_PrintScreen",H="Tab",I="key_full_Apps",F="key_short_Tab",G="key_short_End",L="_",M="Caps",J="key_short_NumLock",K="key_full_Scroll",D="key_short_Left",E="key_short_Scroll",w="key_",v="key_full_Pause",y="key_short_Right",x="key_full_PrintScreen",s="key_full_Win",r="key_full_Control_Mac",u="key_short_Shift",t="key_short_PageDown",q="key_short_Enter",p="key_short_Control",R="Insert",S="key_short_Escape",T="key_full_Tab",U="Print",N="Delete",O="key_full_CapsLock",P="key_full_Escape",Q="key_short_Delete",V="key_full_PageUp",W="key_full_Shift",C="key_full_NumLock",B="key_full_Delete",A="key_full_End",z="key_full_Left";
qx.Class.define(bL,{statics:{getKeyName:function(bW,bX,bY){{};
var cb=w+bW+L+bX;
if(qx.bom.client.Platform.MAC&&bX==bB){cb+=bP;
}var ca=qx.locale.Manager.getInstance().translate(cb,[],bY);

if(ca==cb){return qx.locale.Key._keyNames[cb]||bX;
}else{return ca;
}}},defer:function(a,b,c){var e={};
var d=qx.locale.Manager;
e[d.marktr(l)]=bg;
e[d.marktr(F)]=H;
e[d.marktr(k)]=bf;
e[d.marktr(q)]=bc;
e[d.marktr(u)]=bd;
e[d.marktr(p)]=bv;
e[d.marktr(bH)]=bv;
e[d.marktr(bG)]=ba;
e[d.marktr(bO)]=M;
e[d.marktr(bn)]=by;
e[d.marktr(S)]=i;
e[d.marktr(D)]=bz;
e[d.marktr(bi)]=be;
e[d.marktr(y)]=bh;
e[d.marktr(n)]=bw;
e[d.marktr(bm)]=o;
e[d.marktr(t)]=h;
e[d.marktr(G)]=bA;
e[d.marktr(m)]=bu;
e[d.marktr(bE)]=bV;
e[d.marktr(Q)]=bF;
e[d.marktr(J)]=bC;
e[d.marktr(bU)]=U;
e[d.marktr(E)]=bb;
e[d.marktr(bp)]=bx;
e[d.marktr(bq)]=bs;
e[d.marktr(br)]=bt;
e[d.marktr(bS)]=bg;
e[d.marktr(T)]=bl;
e[d.marktr(bk)]=bf;
e[d.marktr(bD)]=bc;
e[d.marktr(W)]=bd;
e[d.marktr(bK)]=bB;
e[d.marktr(r)]=bB;
e[d.marktr(g)]=ba;
e[d.marktr(O)]=bQ;
e[d.marktr(Y)]=by;
e[d.marktr(P)]=bJ;
e[d.marktr(z)]=bz;
e[d.marktr(bM)]=be;
e[d.marktr(bj)]=bh;
e[d.marktr(bo)]=bw;
e[d.marktr(V)]=bN;
e[d.marktr(f)]=bR;
e[d.marktr(A)]=bA;
e[d.marktr(bT)]=bu;
e[d.marktr(j)]=R;
e[d.marktr(B)]=N;
e[d.marktr(C)]=bI;
e[d.marktr(x)]=X;
e[d.marktr(K)]=bb;
e[d.marktr(v)]=bx;
e[d.marktr(s)]=bs;
e[d.marktr(I)]=bt;
a._keyNames=e;
}});
})();
