qx.$$packageData['2bbf68e353bd']={"resources":{"qx/icon/Tango/16/actions/dialog-cancel.png":[16,16,"png","feedreader","feedreader/images/combined/icons16.png",0,-64],"qx/icon/Tango/16/actions/dialog-ok.png":[16,16,"png","feedreader","feedreader/images/combined/icons16.png",0,0],"qx/icon/Tango/16/apps/preferences-locale.png":[16,16,"png","feedreader","feedreader/images/combined/icons16.png",0,-48],"qx/icon/Tango/16/apps/preferences-theme.png":[16,16,"png","feedreader","feedreader/images/combined/icons16.png",0,-32]}};
(function(){var r="Boolean",q="changeValue",p="_applyAllowEmptySelection",o="_applyInvalidMessage",n="qx.ui.form.RadioGroup",m="_applyValid",k="",j="changeRequired",h="changeValid",g="changeEnabled",c="changeInvalidMessage",f="changeSelection",d="_applyEnabled",b="String",a="__qn";
qx.Class.define(n,{extend:qx.core.Object,implement:[qx.ui.core.ISingleSelection,qx.ui.form.IForm,qx.ui.form.IModelSelection],include:[qx.ui.core.MSingleSelectionHandling,qx.ui.form.MModelSelection],construct:function(M){arguments.callee.base.call(this);
this.__qn=[];
this.addListener(f,this.__qo,this);

if(M!=null){this.add.apply(this,arguments);
}},properties:{enabled:{check:r,apply:d,event:g,init:true},wrap:{check:r,init:true},allowEmptySelection:{check:r,init:false,apply:p},valid:{check:r,init:true,apply:m,event:h},required:{check:r,init:false,event:j},invalidMessage:{check:b,init:k,event:c,apply:o}},members:{__qn:null,getItems:function(){return this.__qn;
},add:function(J){var K=this.__qn;
var L;

for(var i=0,l=arguments.length;i<l;i++){L=arguments[i];

if(qx.lang.Array.contains(K,L)){continue;
}L.addListener(q,this._onItemChangeChecked,this);
K.push(L);
L.setGroup(this);
if(L.getValue()){this.setSelection([L]);
}}if(!this.isAllowEmptySelection()&&K.length>0&&!this.getSelection()[0]){this.setSelection([K[0]]);
}},remove:function(x){var y=this.__qn;

if(qx.lang.Array.contains(y,x)){qx.lang.Array.remove(y,x);
if(x.getGroup()===this){x.resetGroup();
}x.removeListener(q,this._onItemChangeChecked,this);
if(x.getValue()){this.resetSelection();
}}},getChildren:function(){return this.__qn;
},_onItemChangeChecked:function(e){var P=e.getTarget();

if(P.getValue()){this.setSelection([P]);
}else if(this.getSelection()[0]==P){this.resetSelection();
}},_applyInvalidMessage:function(N,O){for(var i=0;i<this.__qn.length;i++){this.__qn[i].setInvalidMessage(N);
}},_applyValid:function(H,I){for(var i=0;i<this.__qn.length;i++){this.__qn[i].setValid(H);
}},_applyEnabled:function(u,v){var w=this.__qn;

if(u==null){for(var i=0,l=w.length;i<l;i++){w[i].resetEnabled();
}}else{for(var i=0,l=w.length;i<l;i++){w[i].setEnabled(u);
}}},_applyAllowEmptySelection:function(C,D){if(!C&&this.isSelectionEmpty()){this.resetSelection();
}},selectNext:function(){var z=this.getSelection()[0];
var B=this.__qn;
var A=B.indexOf(z);

if(A==-1){return;
}var i=0;
var length=B.length;
if(this.getWrap()){A=(A+1)%length;
}else{A=Math.min(A+1,length-1);
}
while(i<length&&!B[A].getEnabled()){A=(A+1)%length;
i++;
}this.setSelection([B[A]]);
},selectPrevious:function(){var E=this.getSelection()[0];
var G=this.__qn;
var F=G.indexOf(E);

if(F==-1){return;
}var i=0;
var length=G.length;
if(this.getWrap()){F=(F-1+length)%length;
}else{F=Math.max(F-1,0);
}
while(i<length&&!G[F].getEnabled()){F=(F-1+length)%length;
i++;
}this.setSelection([G[F]]);
},_getItems:function(){return this.getItems();
},_isAllowEmptySelection:function(){return this.isAllowEmptySelection();
},__qo:function(e){var t=e.getData()[0];
var s=e.getOldData()[0];

if(s){s.setValue(false);
}
if(t){t.setValue(true);
}}},destruct:function(){this._disposeArray(a);
}});
})();
(function(){var t="language",s="execute",r="icon/16/apps/preferences-locale.png",q="Français",p="icon/16/apps/preferences-theme.png",o="feedreader.view.PreferenceWindow",n="English",m="Nederlands",l="Italiano",k="Language",d="icon/16/actions/dialog-cancel.png",j="icon/16/actions/dialog-ok.png",h="Svenska",c="Preferences",b="Cancel",g="right",f="Deutsch",i="OK",a="Espanol";
qx.Class.define(o,{extend:qx.ui.window.Window,construct:function(){arguments.callee.base.call(this,this.tr(c),p);
this.set({modal:true,showMinimize:false,showMaximize:false,allowMaximize:false});
this._addContent();
},members:{_addContent:function(){var A,B;
var y=new qx.ui.layout.VBox(10);
this.setLayout(y);
this.setMinWidth(350);
var E=new qx.ui.groupbox.GroupBox(this.tr(k),r);
E.setMinWidth(150);
E.setLayout(new qx.ui.layout.VBox());
this.add(E);
var G=new qx.ui.form.RadioGroup();
var C={"en":n,"de":f,"es":a,"fr":q,"it":l,"nl":m,"sv":h};
var F=qx.locale.Manager.getInstance();
{};
var D;

for(var u in C){D=new qx.ui.form.RadioButton(C[u]);
D.setUserData(t,u);
G.add(D);
E.add(D);
if(F.getLanguage()==u){G.setSelection([D]);
}}var x=new qx.ui.layout.HBox(10,g);
var v=new qx.ui.container.Composite(x);
var z=new qx.ui.form.Button(this.tr(b),d);
z.addListener(s,this.close,this);
var w=new qx.ui.form.Button(this.tr(i),j);
w.addListener(s,function(e){var H=G.getSelection()[0].getUserData(t);
qx.locale.Manager.getInstance().setLocale(H);
this.close();
},this);
v.add(z);
v.add(w);
this.add(v);
}}});
})();
(function(){var b="qx.ui.form.IRadioItem",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){},getValue:function(){},setGroup:function(d){this.assertInstance(d,qx.ui.form.RadioGroup);
},getGroup:function(){}}});
})();
(function(){var b="qx.ui.form.IBooleanForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
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
