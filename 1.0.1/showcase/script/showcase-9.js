qx.$$packageData['59e433348db9']={"resources":{}};
(function(){var d="showcase.page.theme.Content";
qx.Class.define(d,{extend:showcase.AbstractContent,construct:function(e){arguments.callee.base.call(this,e);
this.setView(this._createView());
},members:{_createView:function(){var c=new qx.ui.window.Desktop(new qx.ui.window.Manager());
var b=new showcase.page.theme.calc.view.Calculator(true);
c.add(b);
b.moveTo(60,40);
b.open();
var a=new showcase.page.theme.calc.Model();
new showcase.page.theme.calc.Presenter(b,a);
var b=new showcase.page.theme.calc.view.Calculator(false);
c.add(b);
b.moveTo(340,40);
b.open();
var a=new showcase.page.theme.calc.Model();
new showcase.page.theme.calc.Presenter(b,a);
return c;
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
(function(){var p="display",o="0",n="-",m="operation",l="+",k="7",j="5",i="memory",h="3",g="2",U="8",T="*",S="6",R="4",Q="1",P=".",O="9",N="Boolean",M="_buttons",L="keydown",w="button",x="qx.event.type.Data",u="modern-calculator",v="showcase.page.theme.calc.view.Calculator",s="changeOperation",t="execute",q="calculator",r="/",y="String",z="&divide;",D="",C="Calculator",F="buttonPress",E="keyup",H="changeDisplay",G="keypress",B="Enter",K="=",J="changeMemory",I="_keyIdentifier",A="&plusmn;";
qx.Class.define(v,{extend:qx.ui.window.Window,implement:[showcase.page.theme.calc.view.ICalculator],construct:function(X){arguments.callee.base.call(this,C);
this._isModern=!!X;

if(this._isModern){this.setAppearance(u);
}this.set({showMinimize:false,showMaximize:false,showClose:false});
this.setLayout(new qx.ui.layout.VBox());
this._initButtons();
this.add(this.getChildControl(p));
this.add(this._createButtonContainer(),{flex:1});
this._initKeyIdentifier();
this.addListener(L,this._onKeyDown,this);
this.addListener(E,this._onKeyUp,this);
this.addListener(G,this._onKeyPress,this);
},events:{"buttonPress":x},properties:{appearance:{refine:true,init:q},display:{init:o,event:H},memory:{check:N,init:false,event:J},operation:{check:y,init:D,event:s}},members:{_buttons:null,_keyIdentifier:null,_pressedButton:null,_initButtons:function(){this._buttons={"MC":new showcase.page.theme.calc.view.Button("MC",0,0),"M+":new showcase.page.theme.calc.view.Button("M+",0,1),"M-":new showcase.page.theme.calc.view.Button("M-",0,2),"MR":new showcase.page.theme.calc.view.Button("MR",0,3),"C":new showcase.page.theme.calc.view.Button("C",1,0),"sign":new showcase.page.theme.calc.view.Button(A,1,1),"/":new showcase.page.theme.calc.view.Button(z,1,2,null,null,r),"*":new showcase.page.theme.calc.view.Button(T,1,3,null,null,T),"7":new showcase.page.theme.calc.view.Button(k,2,0,null,null,k),"8":new showcase.page.theme.calc.view.Button(U,2,1,null,null,U),"9":new showcase.page.theme.calc.view.Button(O,2,2,null,null,O),"-":new showcase.page.theme.calc.view.Button(n,2,3,null,null,n),"4":new showcase.page.theme.calc.view.Button(R,3,0,null,null,R),"5":new showcase.page.theme.calc.view.Button(j,3,1,null,null,j),"6":new showcase.page.theme.calc.view.Button(S,3,2,null,null,S),"+":new showcase.page.theme.calc.view.Button(l,3,3,null,null,l),"1":new showcase.page.theme.calc.view.Button(Q,4,0,null,null,Q),"2":new showcase.page.theme.calc.view.Button(g,4,1,null,null,g),"3":new showcase.page.theme.calc.view.Button(h,4,2,null,null,h),"=":new showcase.page.theme.calc.view.Button(K,4,3,2,null,B),"0":new showcase.page.theme.calc.view.Button(o,5,0,null,2,o),".":new showcase.page.theme.calc.view.Button(P,5,2,null,null,P)};

if(this._isModern){for(var c in this._buttons){this._buttons[c].setAppearance(w);
}}},_initKeyIdentifier:function(){this._keyIdentifier=[];

for(var name in this._buttons){var a=this._buttons[name];
var b=a.getKeyIdentifier();
a.addListener(t,this._onButtonExecute,this);

if(b){this._keyIdentifier[b]=a;
}}},_createChildControlImpl:function(V){if(V===p){var W=new showcase.page.theme.calc.view.Display();
this.bind(p,W,p);
this.bind(i,W,i);
this.bind(m,W,m);
return W;
}else{return arguments.callee.base.call(this,V);
}},_createButtonContainer:function(){var ba=new qx.ui.container.Composite();
var Y=new qx.ui.layout.Grid(5,5);
ba.setLayout(Y);
for(var bc=0;bc<6;bc++){Y.setRowFlex(bc,1);
}
for(var bb=0;bb<6;bb++){Y.setColumnFlex(bb,1);
}for(var name in this._buttons){ba.add(this._buttons[name]);
}return ba;
},_onButtonExecute:function(e){var name=qx.lang.Object.getKeyFromValue(this._buttons,e.getTarget());
this.fireDataEvent(F,name);
},_onKeyDown:function(e){var d=this._keyIdentifier[e.getKeyIdentifier()];

if(!d){return;
}d.press();

if(this._pressedButton&&this._pressedButton!==d){this._pressedButton.release();
}this._pressedButton=d;
e.stop();
},_onKeyUp:function(e){var bd=this._keyIdentifier[e.getKeyIdentifier()];

if(!bd){return;
}bd.release();
e.stop();
},_onKeyPress:function(e){var f=this._keyIdentifier[e.getKeyIdentifier()];

if(!f){return;
}f.execute();
e.stop();
}},destruct:function(){this._disposeMap(M);
this._disposeArray(I);
}});
})();
(function(){var p="",o="_applyViewModel",n="memory",m="operation",l="changeErrorMessage",k="waitForNumber",j="number",i="showcase.page.theme.calc.view.ICalculator",h="changeValue",g="showcase.page.theme.calc.Presenter",c="changeState",f="changeInput",d="buttonPress",b="operator",a="error";
qx.Class.define(g,{extend:qx.core.Object,construct:function(w,x){arguments.callee.base.call(this);
this.setView(w);
this.setModel(x);
},properties:{view:{check:i,apply:o},model:{apply:o,init:null}},members:{MAX_DISPLAY_SIZE:16,_applyViewModel:function(s,t){if(t){throw new Error("The view and model cannot be changed!");
}var u=this.getModel();
var v=this.getView();

if(!u||!v){return;
}this.__ec();
this.__ed();
},__ec:function(){this.getView().addListener(d,this._onButtonPress,this);
},_onButtonPress:function(e){this.getModel().readToken(e.getData());
},__ed:function(){var z=this.getModel();
z.setMaxInputLength(this.MAX_DISPLAY_SIZE);
var A=this.getView();
z.bind(b,A,m);
z.bind(n,A,n,{converter:function(y){return y===null?false:true;
}});
z.addListener(c,this._updateDisplay,this);
z.addListener(f,this._updateDisplay,this);
z.addListener(h,this._updateDisplay,this);
z.addListener(l,this._updateDisplay,this);
},_updateDisplay:function(e){var q;
var r=this.getModel();

switch(this.getModel().getState()){case j:q=r.getInput();
break;
case k:q=r.getValue()+p;

if(q.length>this.MAX_DISPLAY_SIZE){q=r.getValue().toExponential(this.MAX_DISPLAY_SIZE-7);
}break;
case a:q=r.getErrorMessage();
break;
}this.getView().setDisplay(q||p);
}}});
})();
(function(){var l="number",k="0",j="waitForNumber",i="error",h="-",g="Number",f=".",e="M+",d="+",c="/",F="String",E="*",D="C",C="showcase.page.theme.calc.Model",B="changeValue",A="changeInput",z="Integer",y="MC",x="sign",w="Division by zero!",s="_applyState",t="changeState",q="",r="MR",o="changeOperator",p="M-",m="changeErrorMessage",n="=",u="changeMemory",v="changeOperant";
qx.Class.define(C,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.initState();
},properties:{state:{check:[l,j,i],event:t,init:l,apply:s},errorMessage:{check:F,init:q,event:m},input:{check:F,nullable:true,event:A},maxInputLength:{check:z,init:20},operator:{check:[d,h,E,c],nullable:true,event:o},operant:{check:g,nullable:true,event:v},value:{check:g,nullable:true,event:B},memory:{check:g,nullable:true,event:u}},members:{readToken:function(G){if(G.match(/^[0123456789]$/)){this.__eg(G);
}else if(G.match(/^[\+\-\*\/]$/)){this.__ej(G);
}else if(G==x){this.__eh();
}else if(G==f){this.__ei();
}else if(G==n){this.__ek();
}else if(G==D){this.__el();
}else if(G==e){this.__em(G);
}else if(G==p){this.__em(G);
}else if(G==y){this.__eo();
}else if(G==r){this.__en();
}},__ee:function(){return parseFloat(this.getInput());
},__ef:function(H,I,J){switch(J){case d:return H+I;
case h:return H-I;
case E:return H*I;
case c:if(I==0){this.setErrorMessage(w);
this.setState(i);
return null;
}else{return H/I;
}}},_applyState:function(bb,bc){if(bb==l){this.setInput(k);
}else if(bb==i){this.setOperator(null);
}},__eg:function(Y){this.setState(l);
var ba=this.getInput();

if(ba.length>=this.getMaxInputLength()-1){return;
}
if(Y==k){if(ba!==k){ba+=k;
}}else{if(ba==k){ba=Y;
}else{ba+=Y;
}}this.setInput(ba);
},__eh:function(){this.setState(l);
var O=this.getInput();

if(O==k){return;
}var P=O.charAt(0)==h;

if(P){O=O.substr(1);
}else{O=h+O;
}this.setInput(O);
},__ei:function(){this.setState(l);
var a=this.getInput();

if(a.length>=this.getMaxInputLength()-1){return;
}var b=a.indexOf(f)!==-1;

if(!b){a+=f;
}this.setInput(a);
},__ej:function(U){var W=this.getState();

if(W==i){return;
}else if(W==j){this.setOperator(U);
return;
}this.setState(j);
var V=this.__ee();
var X=this.getValue();

if(X!==null){this.setValue(this.__ef(X,V,this.getOperator()));
}else{this.setValue(V);
}this.setOperant(V);
this.setOperator(U);
},__ek:function(){var R=this.getOperator();

if(!R){return;
}var T=this.getValue();

if(this.getState()==j){this.setValue(this.__ef(T,this.getOperant(),R));
return;
}this.setState(j);
var S=this.__ee();
this.setOperant(S);
this.setValue(this.__ef(T,S,R));
},__el:function(){this.setState(l);
this.setOperator(null);
this.setValue(null);
this.setInput(k);
},__em:function(K){var L=this.getState();
var M;

if(L==i){return;
}else if(L==j){M=this.getValue();
}else{M=this.__ee();
}var N=this.getMemory()||0;

if(K==e){this.setMemory(N+M);
}else{this.setMemory(N-M);
}},__en:function(){var Q=this.getMemory();

if(Q==null){return;
}this.setState(l);
this.setInput(Q.toString());
},__eo:function(){this.setMemory(null);
}}});
})();
