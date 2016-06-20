qx.$$packageData['39d7cacee8a0']={"resources":{}};
(function(){var a="showcase.page.theme.Content";
qx.Class.define(a,{extend:showcase.AbstractContent,construct:function(e){arguments.callee.base.call(this,e);
this.setView(this._createView());
},members:{_createView:function(){var d=new qx.ui.window.Desktop(new qx.ui.window.Manager());
var c=new showcase.page.theme.calc.view.Calculator(true);
d.add(c);
c.moveTo(60,40);
c.open();
var b=new showcase.page.theme.calc.Model();
new showcase.page.theme.calc.Presenter(c,b);
var c=new showcase.page.theme.calc.view.Calculator(false);
d.add(c);
c.moveTo(340,40);
c.open();
var b=new showcase.page.theme.calc.Model();
new showcase.page.theme.calc.Presenter(c,b);
return d;
}}});
})();
(function(){var b="calculator-button",a="showcase.page.theme.calc.view.Button";
qx.Class.define(a,{extend:qx.ui.form.Button,construct:function(c,d,e,f,g,h){arguments.callee.base.call(this,c);
this.set({rich:true,focusable:false,keepActive:true,allowShrinkX:false,allowShrinkY:false});
this.setLayoutProperties({row:d,column:e,rowSpan:f||1,colSpan:g||1});
this._keyIdentifier=h||null;
},properties:{appearance:{refine:true,init:b}},members:{getKeyIdentifier:function(){return this._keyIdentifier;
}}});
})();
(function(){var m="memory",l="operation",k="label",j="M",i="0",h="Boolean",g="",f="showcase.page.theme.calc.view.Display",e="_applyOperation",d="_applyDisplay",a="_applyMemory",c="String",b="display";
qx.Class.define(f,{extend:qx.ui.core.Widget,construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Canvas());
this._add(this.getChildControl(k),{top:0,right:0});
this._add(this.getChildControl(m),{bottom:0,left:0});
this._add(this.getChildControl(l),{bottom:0,left:0});
},properties:{appearance:{refine:true,init:b},display:{init:i,apply:d},memory:{check:h,init:false,apply:a},operation:{check:c,init:g,apply:e}},members:{_createChildControlImpl:function(r){var s;

switch(r){case k:s=new qx.ui.basic.Label(this.getDisplay());
break;
case m:s=new qx.ui.basic.Label(j);
s.exclude();
break;
case l:s=new qx.ui.basic.Label(this.getOperation());
s.setRich(true);
break;
}return s||arguments.callee.base.call(this,r);
},_applyDisplay:function(n,o){this.getChildControl(k).setValue(n.toString());
},_applyMemory:function(t,u){if(t){this._showChildControl(m);
}else{this._excludeChildControl(m);
}},_applyOperation:function(p,q){this.getChildControl(l).setValue(p.toString());
}}});
})();
(function(){var d="String",c="Boolean",b="showcase.page.theme.calc.view.ICalculator",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"buttonPress":a},properties:{display:{},memory:{check:c},operation:{check:d}}});
})();
(function(){var k="display",j="0",i="-",h="operation",g="+",f="7",d="5",c="memory",b="3",a="2",P="8",O="*",N="6",M="4",L="1",K=".",J="9",I="Boolean",H="_buttons",G="keydown",r="button",s="qx.event.type.Data",p="modern-calculator",q="showcase.page.theme.calc.view.Calculator",n="changeOperation",o="execute",l="calculator",m="/",t="String",u="&divide;",y="",x="Calculator",A="buttonPress",z="keyup",C="changeDisplay",B="keypress",w="Enter",F="=",E="changeMemory",D="_keyIdentifier",v="&plusmn;";
qx.Class.define(q,{extend:qx.ui.window.Window,implement:[showcase.page.theme.calc.view.ICalculator],construct:function(bb){arguments.callee.base.call(this,x);
this._isModern=!!bb;

if(this._isModern){this.setAppearance(p);
}this.set({showMinimize:false,showMaximize:false,showClose:false});
this.setLayout(new qx.ui.layout.VBox());
this._initButtons();
this.add(this.getChildControl(k));
this.add(this._createButtonContainer(),{flex:1});
this._initKeyIdentifier();
this.addListener(G,this._onKeyDown,this);
this.addListener(z,this._onKeyUp,this);
this.addListener(B,this._onKeyPress,this);
},events:{"buttonPress":s},properties:{appearance:{refine:true,init:l},display:{init:j,event:C},memory:{check:I,init:false,event:E},operation:{check:t,init:y,event:n}},members:{_buttons:null,_keyIdentifier:null,_pressedButton:null,_initButtons:function(){this._buttons={"MC":new showcase.page.theme.calc.view.Button("MC",0,0),"M+":new showcase.page.theme.calc.view.Button("M+",0,1),"M-":new showcase.page.theme.calc.view.Button("M-",0,2),"MR":new showcase.page.theme.calc.view.Button("MR",0,3),"C":new showcase.page.theme.calc.view.Button("C",1,0),"sign":new showcase.page.theme.calc.view.Button(v,1,1),"/":new showcase.page.theme.calc.view.Button(u,1,2,null,null,m),"*":new showcase.page.theme.calc.view.Button(O,1,3,null,null,O),"7":new showcase.page.theme.calc.view.Button(f,2,0,null,null,f),"8":new showcase.page.theme.calc.view.Button(P,2,1,null,null,P),"9":new showcase.page.theme.calc.view.Button(J,2,2,null,null,J),"-":new showcase.page.theme.calc.view.Button(i,2,3,null,null,i),"4":new showcase.page.theme.calc.view.Button(M,3,0,null,null,M),"5":new showcase.page.theme.calc.view.Button(d,3,1,null,null,d),"6":new showcase.page.theme.calc.view.Button(N,3,2,null,null,N),"+":new showcase.page.theme.calc.view.Button(g,3,3,null,null,g),"1":new showcase.page.theme.calc.view.Button(L,4,0,null,null,L),"2":new showcase.page.theme.calc.view.Button(a,4,1,null,null,a),"3":new showcase.page.theme.calc.view.Button(b,4,2,null,null,b),"=":new showcase.page.theme.calc.view.Button(F,4,3,2,null,w),"0":new showcase.page.theme.calc.view.Button(j,5,0,null,2,j),".":new showcase.page.theme.calc.view.Button(K,5,2,null,null,K)};

if(this._isModern){for(var Y in this._buttons){this._buttons[Y].setAppearance(r);
}}},_initKeyIdentifier:function(){this._keyIdentifier=[];

for(var name in this._buttons){var Q=this._buttons[name];
var R=Q.getKeyIdentifier();
Q.addListener(o,this._onButtonExecute,this);

if(R){this._keyIdentifier[R]=Q;
}}},_createChildControlImpl:function(bc){if(bc===k){var bd=new showcase.page.theme.calc.view.Display();
this.bind(k,bd,k);
this.bind(c,bd,c);
this.bind(h,bd,h);
return bd;
}else{return arguments.callee.base.call(this,bc);
}},_createButtonContainer:function(){var V=new qx.ui.container.Composite();
var U=new qx.ui.layout.Grid(5,5);
V.setLayout(U);
for(var X=0;X<6;X++){U.setRowFlex(X,1);
}
for(var W=0;W<6;W++){U.setColumnFlex(W,1);
}for(var name in this._buttons){V.add(this._buttons[name]);
}return V;
},_onButtonExecute:function(e){var name=qx.lang.Object.getKeyFromValue(this._buttons,e.getTarget());
this.fireDataEvent(A,name);
},_onKeyDown:function(e){var S=this._keyIdentifier[e.getKeyIdentifier()];

if(!S){return;
}S.press();

if(this._pressedButton&&this._pressedButton!==S){this._pressedButton.release();
}this._pressedButton=S;
e.stop();
},_onKeyUp:function(e){var T=this._keyIdentifier[e.getKeyIdentifier()];

if(!T){return;
}T.release();
e.stop();
},_onKeyPress:function(e){var ba=this._keyIdentifier[e.getKeyIdentifier()];

if(!ba){return;
}ba.execute();
e.stop();
}},destruct:function(){this._disposeMap(H);
this._disposeArray(D);
}});
})();
(function(){var p="",o="_applyViewModel",n="memory",m="operation",l="changeErrorMessage",k="waitForNumber",j="number",i="showcase.page.theme.calc.view.ICalculator",h="changeValue",g="showcase.page.theme.calc.Presenter",c="changeState",f="changeInput",d="buttonPress",b="operator",a="error";
qx.Class.define(g,{extend:qx.core.Object,construct:function(t,u){arguments.callee.base.call(this);
this.setView(t);
this.setModel(u);
},properties:{view:{check:i,apply:o},model:{apply:o,init:null}},members:{MAX_DISPLAY_SIZE:16,_applyViewModel:function(x,y){if(y){throw new Error("The view and model cannot be changed!");
}var z=this.getModel();
var A=this.getView();

if(!z||!A){return;
}this.__vj();
this.__vk();
},__vj:function(){this.getView().addListener(d,this._onButtonPress,this);
},_onButtonPress:function(e){this.getModel().readToken(e.getData());
},__vk:function(){var v=this.getModel();
v.setMaxInputLength(this.MAX_DISPLAY_SIZE);
var w=this.getView();
v.bind(b,w,m);
v.bind(n,w,n,{converter:function(q){return q===null?false:true;
}});
v.addListener(c,this._updateDisplay,this);
v.addListener(f,this._updateDisplay,this);
v.addListener(h,this._updateDisplay,this);
v.addListener(l,this._updateDisplay,this);
},_updateDisplay:function(e){var r;
var s=this.getModel();

switch(this.getModel().getState()){case j:r=s.getInput();
break;
case k:r=s.getValue()+p;

if(r.length>this.MAX_DISPLAY_SIZE){r=s.getValue().toExponential(this.MAX_DISPLAY_SIZE-7);
}break;
case a:r=s.getErrorMessage();
break;
}this.getView().setDisplay(r||p);
}}});
})();
(function(){var m="number",l="0",k="waitForNumber",j="error",i="-",h="Number",g=".",f="M+",e="+",d="/",G="String",F="*",E="C",D="showcase.page.theme.calc.Model",C="changeValue",B="changeInput",A="Integer",z="MC",y="sign",x="Division by zero!",t="_applyState",u="changeState",r="",s="MR",p="changeOperator",q="M-",n="changeErrorMessage",o="=",v="changeMemory",w="changeOperant";
qx.Class.define(D,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.initState();
},properties:{state:{check:[m,k,j],event:u,init:m,apply:t},errorMessage:{check:G,init:r,event:n},input:{check:G,nullable:true,event:B},maxInputLength:{check:A,init:20},operator:{check:[e,i,F,d],nullable:true,event:p},operant:{check:h,nullable:true,event:w},value:{check:h,nullable:true,event:C},memory:{check:h,nullable:true,event:v}},members:{readToken:function(bc){if(bc.match(/^[0123456789]$/)){this.__vn(bc);
}else if(bc.match(/^[\+\-\*\/]$/)){this.__vq(bc);
}else if(bc==y){this.__vo();
}else if(bc==g){this.__vp();
}else if(bc==o){this.__vr();
}else if(bc==E){this.__vs();
}else if(bc==f){this.__vt(bc);
}else if(bc==q){this.__vt(bc);
}else if(bc==z){this.__vv();
}else if(bc==s){this.__vu();
}},__vl:function(){return parseFloat(this.getInput());
},__vm:function(S,T,U){switch(U){case e:return S+T;
case i:return S-T;
case F:return S*T;
case d:if(T==0){this.setErrorMessage(x);
this.setState(j);
return null;
}else{return S/T;
}}},_applyState:function(J,K){if(J==m){this.setInput(l);
}else if(J==j){this.setOperator(null);
}},__vn:function(V){this.setState(m);
var W=this.getInput();

if(W.length>=this.getMaxInputLength()-1){return;
}
if(V==l){if(W!==l){W+=l;
}}else{if(W==l){W=V;
}else{W+=V;
}}this.setInput(W);
},__vo:function(){this.setState(m);
var H=this.getInput();

if(H==l){return;
}var I=H.charAt(0)==i;

if(I){H=H.substr(1);
}else{H=i+H;
}this.setInput(H);
},__vp:function(){this.setState(m);
var L=this.getInput();

if(L.length>=this.getMaxInputLength()-1){return;
}var M=L.indexOf(g)!==-1;

if(!M){L+=g;
}this.setInput(L);
},__vq:function(N){var P=this.getState();

if(P==j){return;
}else if(P==k){this.setOperator(N);
return;
}this.setState(k);
var O=this.__vl();
var Q=this.getValue();

if(Q!==null){this.setValue(this.__vm(Q,O,this.getOperator()));
}else{this.setValue(O);
}this.setOperant(O);
this.setOperator(N);
},__vr:function(){var a=this.getOperator();

if(!a){return;
}var c=this.getValue();

if(this.getState()==k){this.setValue(this.__vm(c,this.getOperant(),a));
return;
}this.setState(k);
var b=this.__vl();
this.setOperant(b);
this.setValue(this.__vm(c,b,a));
},__vs:function(){this.setState(m);
this.setOperator(null);
this.setValue(null);
this.setInput(l);
},__vt:function(X){var Y=this.getState();
var ba;

if(Y==j){return;
}else if(Y==k){ba=this.getValue();
}else{ba=this.__vl();
}var bb=this.getMemory()||0;

if(X==f){this.setMemory(bb+ba);
}else{this.setMemory(bb-ba);
}},__vu:function(){var R=this.getMemory();

if(R==null){return;
}this.setState(m);
this.setInput(R.toString());
},__vv:function(){this.setMemory(null);
}}});
})();
