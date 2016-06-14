(function(){var A="Boolean",z="changeValue",y="changeChecked",x="changeSelected",w="changeEnabled",v="qx.ui.form.RadioGroup",u="changeName",t="qx.ui.form.IRadioItem",s="__jC",r="_applySelected",o="_applyName",q="_applyEnabled",p="String",n="qx.event.type.Data";
qx.Class.define(v,{extend:qx.core.Object,implement:qx.ui.form.IFormElement,construct:function(Q){arguments.callee.base.call(this);
this.__jC=[];

if(Q!=null){this.add.apply(this,arguments);
}this.addListener(x,this._onChangeSelected);
},properties:{enabled:{check:A,apply:q,event:w},selected:{nullable:true,apply:r,event:x,check:t},name:{check:p,nullable:true,apply:o,event:u},wrap:{check:A,init:true}},events:{"changeValue":n},members:{__jC:null,getItems:function(){return this.__jC;
},select:function(F){this.setSelected(F);
},setValue:function(j){var k=this.__jC;
var m;

for(var i=0,l=k.length;i<l;i++){m=k[i];

if(m.getValue()==j){this.setSelected(m);
break;
}}},getValue:function(){var a=this.getSelected();
return a?a.getValue():null;
},add:function(C){var D=this.__jC;
var E;

for(var i=0,l=arguments.length;i<l;i++){E=arguments[i];

if(E.getGroup()===this){continue;
}E.addListener(y,this._onItemChangeChecked,this);
D.push(E);
E.setGroup(this);
if(E.getChecked()){this.setSelected(E);
}}if(D.length>0&&!this.getSelected()){this.setSelected(D[0]);
}},remove:function(I){if(I.getGroup()===this){qx.lang.Array.remove(this.__jC,I);
I.resetGroup();
I.removeListener(y,this._onItemChangeChecked,this);
if(I.getChecked()){this.resetSelected();
}}},_onItemChangeChecked:function(e){var B=e.getTarget();

if(B.getChecked()){this.setSelected(B);
}else if(this.getSelected()==B){this.resetSelected();
}},_onChangeSelected:function(e){var G=e.getData();
var H=null;

if(G){H=G.getValue();

if(H==null){H=G.getLabel();
}}this.fireDataEvent(z,H);
},_applySelected:function(J,K){if(K){K.setChecked(false);
}
if(J){J.setChecked(true);
}var M=K?K.getValue():null;
var L=J?J.getValue():null;

if(M!=L){this.fireNonBubblingEvent(z,qx.event.type.Data,[L,M]);
}},_applyEnabled:function(f,g){var h=this.__jC;

if(f==null){for(var i=0,l=h.length;i<l;i++){h[i].resetEnabled();
}}else{for(var i=0,l=h.length;i<l;i++){h[i].setEnabled(true);
}}},_applyName:function(b,c){var d=this.__jC;

if(b==null){for(var i=0,l=d.length;i<l;i++){d[i].resetName();
}}else{for(var i=0,l=d.length;i<l;i++){d[i].setName(b);
}}},selectNext:function(){var R=this.getSelected();
var T=this.__jC;
var S=T.indexOf(R);

if(S==-1){return;
}var i=0;
var length=T.length;
if(this.getWrap()){S=(S+1)%length;
}else{S=Math.min(S+1,length-1);
}
while(i<length&&!T[S].getEnabled()){S=(S+1)%length;
i++;
}this.setSelected(T[S]);
},selectPrevious:function(){var N=this.getSelected();
var P=this.__jC;
var O=P.indexOf(N);

if(O==-1){return;
}var i=0;
var length=P.length;
if(this.getWrap()){O=(O-1+length)%length;
}else{O=Math.max(O-1,0);
}
while(i<length&&!P[O].getEnabled()){O=(O-1+length)%length;
i++;
}this.setSelected(P[O]);
}},destruct:function(){this._disposeArray(s);
}});
})();
(function(){var d="qx.ui.form.IRadioItem",c="boolean",b="qx.event.type.Data";
qx.Interface.define(d,{extend:qx.ui.form.IFormElement,events:{"changeChecked":b},members:{setChecked:function(e){this.assertType(e,c);
},getChecked:function(){},setGroup:function(a){this.assertInstance(a,qx.ui.form.RadioGroup);
},getGroup:function(){}}});
})();
(function(){var p="checked",o="_applyChecked",n="keypress",m="Boolean",l="Right",k="changeChecked",j="qx.ui.form.RadioButton",i="radiobutton",h="Left",g="qx.ui.form.RadioGroup",c="Down",f="_applyGroup",d="Up",b="execute";
qx.Class.define(j,{extend:qx.ui.form.Button,implement:qx.ui.form.IRadioItem,construct:function(u){{};
arguments.callee.base.call(this,u);
this.addListener(b,this._onExecute);
this.addListener(n,this._onKeyPress);
},properties:{group:{check:g,nullable:true,apply:f},checked:{check:m,init:false,apply:o,event:k},appearance:{refine:true,init:i},allowGrowX:{refine:true,init:false}},members:{isTabable:function(){return this.isFocusable()&&this.isChecked();
},_applyChecked:function(q,r){q?this.addState(p):this.removeState(p);

if(q&&this.getFocusable()){this.focus();
}},_applyGroup:function(s,t){if(t){t.remove(this);
}
if(s){s.add(this);
}},_onExecute:function(e){this.setChecked(true);
},_onKeyPress:function(e){var a=this.getGroup();

if(!a){return;
}
switch(e.getKeyIdentifier()){case h:case d:a.selectPrevious();
break;
case l:case c:a.selectNext();
break;
}}}});
})();
(function(){var q="execute",p="icon/16/apps/preferences-locale.png",o="Français",n="icon/16/apps/preferences-theme.png",m="feedreader.view.PreferenceWindow",l="English",k="Italiano",j="Language",i="icon/16/actions/dialog-cancel.png",h="icon/16/actions/dialog-ok.png",c="Svenska",g="Preferences",f="Cancel",b="right",a="Deutsch",e="OK",d="Espanol";
qx.Class.define(m,{extend:qx.ui.window.Window,construct:function(){arguments.callee.base.call(this,this.tr(g),n);
this.set({modal:true,showMinimize:false,showMaximize:false,allowMaximize:false});
this._addContent();
},members:{_addContent:function(){var w=new qx.ui.layout.VBox(10);
this.setLayout(w);
this.setMinWidth(350);
var A=new qx.ui.groupbox.GroupBox(this.tr(j),p);
A.setMinWidth(150);
A.setLayout(new qx.ui.layout.VBox());
this.add(A);
var C=new qx.ui.form.RadioGroup();
var y={"en":l,"de":a,"es":d,"fr":o,"it":k,"sv":c};
var B=qx.locale.Manager.getInstance();
var z;

for(var s in y){z=new qx.ui.form.RadioButton(y[s]);
z.setValue(s);
C.add(z);
A.add(z);
if(B.getLanguage()==s){C.setSelected(z);
}}var v=new qx.ui.layout.HBox(10,b);
var t=new qx.ui.container.Composite(v);
var x=new qx.ui.form.Button(this.tr(f),i);
x.addListener(q,this.close,this);
var u=new qx.ui.form.Button(this.tr(e),h);
u.addListener(q,function(e){var r=C.getSelected().getValue();
qx.locale.Manager.getInstance().setLocale(r);
this.close();
},this);
t.add(x);
t.add(u);
this.add(t);
}}});
})();
