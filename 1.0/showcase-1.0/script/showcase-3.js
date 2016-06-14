qx.$$packageData['9d3ea289b6e0']={"resources":{}};
(function(){var x="Boolean",w="changeValue",v="_applyAllowEmptySelection",u="_applyInvalidMessage",t="qx.ui.form.RadioGroup",s="_applyValid",r="",q="changeRequired",p="changeValid",o="changeEnabled",k="__a",n="changeInvalidMessage",m="changeSelection",j="_applyEnabled",h="String";
qx.Class.define(t,{extend:qx.core.Object,implement:[qx.ui.core.ISingleSelection,qx.ui.form.IForm,qx.ui.form.IModelSelection],include:[qx.ui.core.MSingleSelectionHandling,qx.ui.form.MModelSelection],construct:function(g){arguments.callee.base.call(this);
this.__a=[];
this.addListener(m,this.__b,this);

if(g!=null){this.add.apply(this,arguments);
}},properties:{enabled:{check:x,apply:j,event:o},wrap:{check:x,init:true},allowEmptySelection:{check:x,init:false,apply:v},valid:{check:x,init:true,apply:s,event:p},required:{check:x,init:false,event:q},invalidMessage:{check:h,init:r,event:n,apply:u}},members:{__a:null,getItems:function(){return this.__a;
},add:function(A){var B=this.__a;
var C;

for(var i=0,l=arguments.length;i<l;i++){C=arguments[i];

if(qx.lang.Array.contains(B,C)){continue;
}C.addListener(w,this._onItemChangeChecked,this);
B.push(C);
C.setGroup(this);
if(C.getValue()){this.setSelection([C]);
}}if(!this.isAllowEmptySelection()&&B.length>0&&!this.getSelection()[0]){this.setSelection([B[0]]);
}},remove:function(a){var b=this.__a;

if(qx.lang.Array.contains(b,a)){qx.lang.Array.remove(b,a);
if(a.getGroup()===this){a.resetGroup();
}a.removeListener(w,this._onItemChangeChecked,this);
if(a.getValue()){this.resetSelection();
}}},getChildren:function(){return this.__a;
},_onItemChangeChecked:function(e){var P=e.getTarget();

if(P.getValue()){this.setSelection([P]);
}else if(this.getSelection()[0]==P){this.resetSelection();
}},_applyInvalidMessage:function(y,z){for(var i=0;i<this.__a.length;i++){this.__a[i].setInvalidMessage(y);
}},_applyValid:function(K,L){for(var i=0;i<this.__a.length;i++){this.__a[i].setValid(K);
}},_applyEnabled:function(D,E){var F=this.__a;

if(D==null){for(var i=0,l=F.length;i<l;i++){F[i].resetEnabled();
}}else{for(var i=0,l=F.length;i<l;i++){F[i].setEnabled(D);
}}},_applyAllowEmptySelection:function(G,H){if(!G&&this.isSelectionEmpty()){this.resetSelection();
}},selectNext:function(){var M=this.getSelection()[0];
var O=this.__a;
var N=O.indexOf(M);

if(N==-1){return;
}var i=0;
var length=O.length;
if(this.getWrap()){N=(N+1)%length;
}else{N=Math.min(N+1,length-1);
}
while(i<length&&!O[N].getEnabled()){N=(N+1)%length;
i++;
}this.setSelection([O[N]]);
},selectPrevious:function(){var c=this.getSelection()[0];
var f=this.__a;
var d=f.indexOf(c);

if(d==-1){return;
}var i=0;
var length=f.length;
if(this.getWrap()){d=(d-1+length)%length;
}else{d=Math.max(d-1,0);
}
while(i<length&&!f[d].getEnabled()){d=(d-1+length)%length;
i++;
}this.setSelection([f[d]]);
},_getItems:function(){return this.getItems();
},_isAllowEmptySelection:function(){return this.isAllowEmptySelection();
},__b:function(e){var J=e.getData()[0];
var I=e.getOldData()[0];

if(I){I.setValue(false);
}
if(J){J.setValue(true);
}}},destruct:function(){this._disposeArray(k);
}});
})();
(function(){var w="popup",v="list",u="",t="mousewheel",s="resize",r="Function",q="blur",p="abstract",o="keypress",n="Number",g="changeSelection",m="PageUp",j="_applyMaxListHeight",d="PageDown",c="mouseup",i="Escape",h="changeVisibility",k="one",b="middle",l="qx.ui.form.AbstractSelectBox",f="mousedown";
qx.Class.define(l,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.form.MForm],implement:[qx.ui.form.IForm],type:p,construct:function(){arguments.callee.base.call(this);
var y=new qx.ui.layout.HBox();
this._setLayout(y);
y.setAlignY(b);
this.addListener(o,this._onKeyPress);
this.addListener(q,this._onBlur,this);
var x=qx.core.Init.getApplication().getRoot();
x.addListener(t,this._onMousewheel,this,true);
this.addListener(s,this._onResize,this);
},properties:{focusable:{refine:true,init:true},width:{refine:true,init:120},maxListHeight:{check:n,apply:j,nullable:true,init:200},format:{check:r,init:function(z){return this._defaultFormat(z);
},nullable:true}},members:{_createChildControlImpl:function(A){var B;

switch(A){case v:B=new qx.ui.form.List().set({focusable:false,keepFocus:true,height:null,width:null,maxHeight:this.getMaxListHeight(),selectionMode:k,quickSelection:true});
B.addListener(g,this._onListChangeSelection,this);
B.addListener(f,this._onListMouseDown,this);
break;
case w:B=new qx.ui.popup.Popup(new qx.ui.layout.VBox);
B.setAutoHide(false);
B.setKeepActive(true);
B.addListener(c,this.close,this);
B.add(this.getChildControl(v));
B.addListener(h,this._onPopupChangeVisibility,this);
break;
}return B||arguments.callee.base.call(this,A);
},_applyMaxListHeight:function(C,D){this.getChildControl(v).setMaxHeight(C);
},getChildrenContainer:function(){return this.getChildControl(v);
},open:function(){var M=this.getChildControl(w);
M.placeToWidget(this,true);
M.show();
},close:function(){this.getChildControl(w).hide();
},toggle:function(){var a=this.getChildControl(w).isVisible();

if(a){this.close();
}else{this.open();
}},_defaultFormat:function(H){var I=H?H.getLabel():u;
var J=H?H.getRich():false;

if(J){I=I.replace(/<[^>]+?>/g,u);
I=qx.bom.String.unescape(I);
}return I;
},_onBlur:function(e){this.close();
},_onKeyPress:function(e){var K=e.getKeyIdentifier();
var L=this.getChildControl(w);
if(L.isHidden()&&(K==d||K==m)){e.stopPropagation();
}else if(!L.isHidden()&&K==i){this.close();
e.stop();
}else{this.getChildControl(v).handleKeyPress(e);
}},_onMousewheel:function(e){var G=e.getTarget();
var F=this.getChildControl(w);

if(qx.ui.core.Widget.contains(F,G)){e.preventDefault();
}else{this.close();
}},_onResize:function(e){this.getChildControl(w).setMinWidth(e.getData().width);
},_onListChangeSelection:function(e){throw new Error("Abstract method: _onListChangeSelection()");
},_onListMouseDown:function(e){throw new Error("Abstract method: _onListMouseDown()");
},_onPopupChangeVisibility:function(e){throw new Error("Abstract method: _onPopupChangeVisibility()");
}},destruct:function(){var E=qx.core.Init.getApplication().getRoot();

if(E){E.removeListener(t,this._onMousewheel,this,true);
}}});
})();
(function(){var w="list",v="atom",u="pressed",t="abandoned",s="popup",r="hovered",q="changeLabel",p="changeIcon",o="arrow",n="",L="spacer",K="Enter",J="one",I="mouseout",H="Space",G="key",F="mousewheel",E="keyinput",D="changeSelection",C="quick",A="qx.ui.form.SelectBox",B="mouseover",y="selectbox",z="click",x=" ";
qx.Class.define(A,{extend:qx.ui.form.AbstractSelectBox,implement:[qx.ui.core.ISingleSelection,qx.ui.form.IModelSelection],include:[qx.ui.core.MSingleSelectionHandling,qx.ui.form.MModelSelection],construct:function(){arguments.callee.base.call(this);
this._createChildControl(v);
this._createChildControl(L);
this._createChildControl(o);
this.addListener(B,this._onMouseOver,this);
this.addListener(I,this._onMouseOut,this);
this.addListener(z,this._onClick,this);
this.addListener(F,this._onMouseWheel,this);
this.addListener(E,this._onKeyInput,this);
this.addListener(D,this.__xP,this);
},properties:{appearance:{refine:true,init:y}},members:{__xO:null,_createChildControlImpl:function(d){var f;

switch(d){case L:f=new qx.ui.core.Spacer();
this._add(f,{flex:1});
break;
case v:f=new qx.ui.basic.Atom(x);
f.setCenter(false);
f.setAnonymous(true);
this._add(f,{flex:1});
break;
case o:f=new qx.ui.basic.Image();
f.setAnonymous(true);
this._add(f);
break;
}return f||arguments.callee.base.call(this,d);
},_forwardStates:{focused:true},_getItems:function(){return this.getChildrenContainer().getChildren();
},_isAllowEmptySelection:function(){return !this.getChildrenContainer().getSelectionMode()===J;
},__xP:function(e){var b=e.getData()[0];
var a=this.getChildControl(w);

if(a.getSelection()[0]!=b){a.setSelection([b]);
}this.__xQ();
this.__xR();
},__xQ:function(){var h=this.getChildControl(w).getSelection()[0];
var i=this.getChildControl(v);
var g=h?h.getIcon():n;
g==null?i.resetIcon():i.setIcon(g);
},__xR:function(){var l=this.getChildControl(w).getSelection()[0];
var m=this.getChildControl(v);
var k=l?l.getLabel():n;
var j=this.getFormat();

if(j!=null){k=j.call(this,l);
}if(k&&k.translate){k=k.translate();
}k==null?m.resetLabel():m.setLabel(k);
},_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}
if(this.hasState(t)){this.removeState(t);
this.addState(u);
}this.addState(r);
},_onMouseOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.removeState(r);

if(this.hasState(u)){this.removeState(u);
this.addState(t);
}},_onClick:function(e){this.toggle();
},_onMouseWheel:function(e){if(this.getChildControl(s).isVisible()){return;
}var N=e.getWheelDelta()>0?1:-1;
var P=this.getSelectables();
var O=this.getSelection()[0];

if(!O){O=P[0];
}var M=P.indexOf(O)+N;
var Q=P.length-1;
if(M<0){M=0;
}else if(M>=Q){M=Q;
}this.setSelection([P[M]]);
e.stopPropagation();
e.preventDefault();
},_onKeyPress:function(e){var c=e.getKeyIdentifier();

if(c==K||c==H){if(this.__xO){this.setSelection([this.__xO]);
this.__xO=null;
}this.toggle();
}else{arguments.callee.base.call(this,e);
}},_onKeyInput:function(e){var R=e.clone();
R.setTarget(this._list);
R.setBubbles(false);
this.getChildControl(w).dispatchEvent(R);
},_onListMouseDown:function(e){if(this.__xO){this.setSelection([this.__xO]);
this.__xO=null;
}},_onListChangeSelection:function(e){var S=e.getData();
var V=e.getOldData();
if(V&&V.length>0){V[0].removeListener(p,this.__xQ,this);
V[0].removeListener(q,this.__xR,this);
}
if(S.length>0){var U=this.getChildControl(s);
var T=this.getChildControl(w);
var W=T.getSelectionContext();

if(U.isVisible()&&(W==C||W==G)){this.__xO=S[0];
}else{this.setSelection([S[0]]);
this.__xO=null;
}S[0].addListener(p,this.__xQ,this);
S[0].addListener(q,this.__xR,this);
}else{this.resetSelection();
}},_onPopupChangeVisibility:function(e){var Y=this.getChildControl(s);

if(!Y.isVisible()){var bb=this.getChildControl(w);
if(bb.hasChildren()){bb.setSelection(this.getSelection());
}}else{var X=Y.getLayoutLocation(this);
var bd=qx.bom.Viewport.getHeight();
var bc=X.top;
var be=bd-X.bottom;
var ba=bc>be?bc:be;
var bf=this.getMaxListHeight();
var bb=this.getChildControl(w);

if(bf==null||bf>ba){bb.setMaxHeight(ba);
}else if(bf<ba){bb.setMaxHeight(bf);
}}}},destruct:function(){this.__xO=null;
}});
})();
(function(){var c="qx.ui.form.IRadioItem",b="qx.event.type.Data";
qx.Interface.define(c,{events:{"changeValue":b},members:{setValue:function(a){},getValue:function(){},setGroup:function(d){this.assertInstance(d,qx.ui.form.RadioGroup);
},getGroup:function(){}}});
})();
(function(){var e="inherit",d="toolbar-button",c="keydown",b="qx.ui.toolbar.Button",a="keyup";
qx.Class.define(b,{extend:qx.ui.form.Button,construct:function(f,g,h){arguments.callee.base.call(this,f,g,h);
this.removeListener(c,this._onKeyDown);
this.removeListener(a,this._onKeyUp);
},properties:{appearance:{refine:true,init:d},show:{refine:true,init:e},focusable:{refine:true,init:false}}});
})();
(function(){var j="checked",i="qx.ui.form.RadioGroup",h="Boolean",g="menu-radiobutton",f="_applyValue",d="qx.ui.menu.RadioButton",c="changeValue",b="_applyGroup",a="execute";
qx.Class.define(d,{extend:qx.ui.menu.AbstractButton,include:[qx.ui.form.MModelProperty],implement:[qx.ui.form.IRadioItem,qx.ui.form.IBooleanForm,qx.ui.form.IModel],construct:function(o,p){arguments.callee.base.call(this);
if(o!=null){this.setLabel(o);
}
if(p!=null){this.setMenu(p);
}this.addListener(a,this._onExecute,this);
},properties:{appearance:{refine:true,init:g},value:{check:h,nullable:true,event:c,apply:f,init:false},group:{check:i,nullable:true,apply:b}},members:{_applyValue:function(k,l){k?this.addState(j):this.removeState(j);
},_applyGroup:function(m,n){if(n){n.remove(this);
}
if(m){m.add(this);
}},_onExecute:function(e){this.setValue(true);
},_onMouseUp:function(e){if(e.isLeftPressed()){this.execute();
}qx.ui.menu.Manager.getInstance().hideAll();
},_onKeyPress:function(e){this.execute();
}}});
})();
(function(){var q="String",p="execute",o="qx.ui.menu.Menu",n="_shortcut",m="changeEnabled",l="changeToolTipText",k="Boolean",j="qx.ui.core.Command",i="changeLabel",h="changeMenu",e="changeIcon",g="changeValue",f="_applyShortcut",d="_applyEnabled",c="qx.event.type.Data";
qx.Class.define(j,{extend:qx.core.Object,construct:function(a){arguments.callee.base.call(this);
this._shortcut=new qx.bom.Shortcut(a);
this._shortcut.addListener(p,this.execute,this);
},events:{"execute":c},properties:{enabled:{init:true,check:k,event:m,apply:d},shortcut:{check:q,apply:f,nullable:true},label:{check:q,nullable:true,event:i},icon:{check:q,nullable:true,event:e},toolTipText:{check:q,nullable:true,event:l},value:{nullable:true,event:g},menu:{check:o,nullable:true,event:h}},members:{_shortcut:null,_applyEnabled:function(b){this._shortcut.setEnabled(b);
},_applyShortcut:function(r){this._shortcut.setShortcut(r);
},execute:function(s){this.fireDataEvent(p,s);
},toString:function(){return this._shortcut.toString();
}},destruct:function(){this._disposeObjects(n);
}});
})();
(function(){var p="Unidentified",o="Boolean",n="+",m="short",l="keydown",k="",j="Control",h="keypress",g="-",f="PageUp",W="Escape",V="qx.event.type.Data",U="_applyShortcut",T="PrintScreen",S="NumLock",R="5",Q="8",P="execute",O="Meta",N="0",w="2",x="This message will be made private.",u="Shift",v="You can only specify one non modifier key!",s="3",t="/",q="_applyEnabled",r="String",y="changeEnabled",z="*",F="qx.bom.Shortcut",E="6",H="4",G="1",J="Alt",I="Not a valid key name for a shortcut: ",B="PageDown",M="Whitespaces are not allowed within shortcuts",L="Delete",K="7",A="a",C="z",D="9";
qx.Class.define(F,{extend:qx.core.Object,construct:function(be){arguments.callee.base.call(this);
this.__ni={};
this.__nj=null;

if(be!=null){this.setShortcut(be);
}this.initEnabled();
},events:{"execute":V},properties:{enabled:{init:true,check:o,event:y,apply:q},shortcut:{check:r,apply:U,nullable:true},autoRepeat:{check:o,init:false}},members:{__ni:k,__nj:k,execute:function(bl){this.fireDataEvent(P,bl);
},__nk:function(event){if(this.getEnabled()&&this.__nm(event)){if(!this.isAutoRepeat()){this.execute(event.getTarget());
}event.stop();
}},__nl:function(event){if(this.getEnabled()&&this.__nm(event)){if(this.isAutoRepeat()){this.execute(event.getTarget());
}event.stop();
}},_applyEnabled:function(X,Y){if(X){qx.event.Registration.addListener(document.documentElement,l,this.__nk,this);
qx.event.Registration.addListener(document.documentElement,h,this.__nl,this);
}else{qx.event.Registration.removeListener(document.documentElement,l,this.__nk,this);
qx.event.Registration.removeListener(document.documentElement,h,this.__nl,this);
}},_applyShortcut:function(bf,bg){if(bf){if(bf.search(/[\s]+/)!=-1){var bj=M;
this.error(bj);
throw new Error(bj);
}this.__ni={"Control":false,"Shift":false,"Meta":false,"Alt":false};
this.__nj=null;
var bh;
var a=[];

while(bf.length>0&&bh!=-1){bh=bf.search(/[-+]+/);
a.push((bf.length==1||bh==-1)?bf:bf.substring(0,bh));
bf=bf.substring(bh+1);
}var bi=a.length;

for(var i=0;i<bi;i++){var bk=this.__no(a[i]);

switch(bk){case j:case u:case O:case J:this.__ni[bk]=true;
break;
case p:var bj=I+a[i];
this.error(bj);
throw bj;
default:if(this.__nj){var bj=v;
this.error(bj);
throw bj;
}this.__nj=bk;
}}}return true;
},matchesKeyEvent:function(e){qx.log.Logger.deprecatedMethodWarning(arguments.callee,x);
return this.__nm(e);
},__nm:function(e){var bd=this.__nj;

if(!bd){return ;
}if((!this.__ni.Shift&&e.isShiftPressed())||(this.__ni.Shift&&!e.isShiftPressed())||(!this.__ni.Control&&e.isCtrlPressed())||(this.__ni.Control&&!e.isCtrlPressed())||(!this.__ni.Meta&&e.isMetaPressed())||(this.__ni.Meta&&!e.isMetaPressed())||(!this.__ni.Alt&&e.isAltPressed())||(this.__ni.Alt&&!e.isAltPressed())){return false;
}
if(bd==e.getKeyIdentifier()){return true;
}return false;
},__nn:{esc:W,ctrl:j,print:T,del:L,pageup:f,pagedown:B,numlock:S,numpad_0:N,numpad_1:G,numpad_2:w,numpad_3:s,numpad_4:H,numpad_5:R,numpad_6:E,numpad_7:K,numpad_8:Q,numpad_9:D,numpad_divide:t,numpad_multiply:z,numpad_minus:g,numpad_plus:n},__no:function(ba){var bb=qx.event.handler.Keyboard;
var bc=p;

if(bb.isValidKeyIdentifier(ba)){return ba;
}
if(ba.length==1&&ba>=A&&ba<=C){return ba.toUpperCase();
}ba=ba.toLowerCase();
var bc=this.__nn[ba]||qx.lang.String.firstUp(ba);

if(bb.isValidKeyIdentifier(bc)){return bc;
}else{return p;
}},toString:function(){var d=this.__nj;
var c=[];

for(var b in this.__ni){if(this.__ni[b]){c.push(qx.locale.Key.getKeyName(m,b));
}}
if(d){c.push(qx.locale.Key.getKeyName(m,d));
}return c.join(n);
}},destruct:function(){this.setEnabled(false);
this.__ni=this.__nj=null;
}});
})();
(function(){var bB="Control",bA="End",bz="Left",by="Meta",bx="Pause",bw="Down",bv="Ctrl",bu="Home",bt="Apps",bs="Win",bh="Right",bg="Backspace",bf="Space",be="Up",bd="Shift",bc="Enter",bb="Scroll",ba="Alt",Y="key_full_Meta",X="PrintScreen",bI="NumLock",bJ="Escape",bG="key_short_Alt",bH="key_short_Control_Mac",bE="key_short_Insert",bF="Del",bC="Num",bD="key_full_Enter",bK="key_full_Control",bL="qx.locale.Key",bl="Tabulator",bk="key_full_Space",bn="key_short_Meta",bm="key_short_PageUp",bp="key_short_Pause",bo="key_full_Down",br="key_short_Apps",bq="key_short_Win",bj="key_full_Right",bi="key_short_Up",f="key_full_PageDown",g="key_full_Alt",h="PgDn",i="Esc",j="key_full_Insert",k="key_short_Space",l="key_short_Backspace",m="key_short_Home",n="key_short_Down",o="PgUp",bP="_Mac",bO="key_short_CapsLock",bN="PageUp",bM="key_full_Up",bT="key_full_Home",bS="key_full_Backspace",bR="PageDown",bQ="CapsLock",bV="Ins",bU="key_short_PrintScreen",H="Tab",I="key_full_Apps",F="key_short_Tab",G="key_short_End",L="_",M="Caps",J="key_short_NumLock",K="key_full_Scroll",D="key_short_Left",E="key_short_Scroll",w="key_",v="key_full_Pause",y="key_short_Right",x="key_full_PrintScreen",s="key_full_Win",r="key_full_Control_Mac",u="key_short_Shift",t="key_short_PageDown",q="key_short_Enter",p="key_short_Control",R="Insert",S="key_short_Escape",T="key_full_Tab",U="Print",N="Delete",O="key_full_CapsLock",P="key_full_Escape",Q="key_short_Delete",V="key_full_PageUp",W="key_full_Shift",C="key_full_NumLock",B="key_full_Delete",A="key_full_End",z="key_full_Left";
qx.Class.define(bL,{statics:{getKeyName:function(a,b,c){{};
var e=w+a+L+b;
if(qx.bom.client.Platform.MAC&&b==bB){e+=bP;
}var d=qx.locale.Manager.getInstance().translate(e,[],c);

if(d==e){return qx.locale.Key._keyNames[e]||b;
}else{return d;
}}},defer:function(bW,bX,bY){var cb={};
var ca=qx.locale.Manager;
cb[ca.marktr(l)]=bg;
cb[ca.marktr(F)]=H;
cb[ca.marktr(k)]=bf;
cb[ca.marktr(q)]=bc;
cb[ca.marktr(u)]=bd;
cb[ca.marktr(p)]=bv;
cb[ca.marktr(bH)]=bv;
cb[ca.marktr(bG)]=ba;
cb[ca.marktr(bO)]=M;
cb[ca.marktr(bn)]=by;
cb[ca.marktr(S)]=i;
cb[ca.marktr(D)]=bz;
cb[ca.marktr(bi)]=be;
cb[ca.marktr(y)]=bh;
cb[ca.marktr(n)]=bw;
cb[ca.marktr(bm)]=o;
cb[ca.marktr(t)]=h;
cb[ca.marktr(G)]=bA;
cb[ca.marktr(m)]=bu;
cb[ca.marktr(bE)]=bV;
cb[ca.marktr(Q)]=bF;
cb[ca.marktr(J)]=bC;
cb[ca.marktr(bU)]=U;
cb[ca.marktr(E)]=bb;
cb[ca.marktr(bp)]=bx;
cb[ca.marktr(bq)]=bs;
cb[ca.marktr(br)]=bt;
cb[ca.marktr(bS)]=bg;
cb[ca.marktr(T)]=bl;
cb[ca.marktr(bk)]=bf;
cb[ca.marktr(bD)]=bc;
cb[ca.marktr(W)]=bd;
cb[ca.marktr(bK)]=bB;
cb[ca.marktr(r)]=bB;
cb[ca.marktr(g)]=ba;
cb[ca.marktr(O)]=bQ;
cb[ca.marktr(Y)]=by;
cb[ca.marktr(P)]=bJ;
cb[ca.marktr(z)]=bz;
cb[ca.marktr(bM)]=be;
cb[ca.marktr(bj)]=bh;
cb[ca.marktr(bo)]=bw;
cb[ca.marktr(V)]=bN;
cb[ca.marktr(f)]=bR;
cb[ca.marktr(A)]=bA;
cb[ca.marktr(bT)]=bu;
cb[ca.marktr(j)]=R;
cb[ca.marktr(B)]=N;
cb[ca.marktr(C)]=bI;
cb[ca.marktr(x)]=X;
cb[ca.marktr(K)]=bb;
cb[ca.marktr(v)]=bx;
cb[ca.marktr(s)]=bs;
cb[ca.marktr(I)]=bt;
bW._keyNames=cb;
}});
})();
