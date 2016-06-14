qx.$$packageData['16']={"locales":{},"resources":{},"translations":{}};
qx.Part.$$notifyLoad("16", function() {
(function(){var h="",g="_applyViewModel",f="waitForNumber",d="number",c="showcase.page.theme.calc.view.ICalculator",b="showcase.page.theme.calc.Presenter",a="error";
qx.Class.define(b,{extend:qx.core.Object,construct:function(i,j){qx.core.Object.call(this);
this.setView(i);
this.setModel(j);
},properties:{view:{check:c,apply:g},model:{apply:g,init:null}},members:{MAX_DISPLAY_SIZE:16,_applyViewModel:function(k,l){if(l){throw new Error("The view and model cannot be changed!");
}var m=this.getModel();
var n=this.getView();

if(!m||!n){return;
}this.__KI();
this.__KJ();
},__KI:function(){this.getView().addListener("buttonPress",this._onButtonPress,this);
},_onButtonPress:function(e){this.getModel().readToken(e.getData());
},__KJ:function(){var o=this.getModel();
o.setMaxInputLength(this.MAX_DISPLAY_SIZE);
var p=this.getView();
o.bind("operator",p,"operation",{converter:function(q){return q?q:"";
}});
o.bind("memory",p,"memory",{converter:function(r){return r===null?false:true;
}});
o.addListener("changeState",this._updateDisplay,this);
o.addListener("changeInput",this._updateDisplay,this);
o.addListener("changeValue",this._updateDisplay,this);
o.addListener("changeErrorMessage",this._updateDisplay,this);
},_updateDisplay:function(e){var s;
var t=this.getModel();

switch(this.getModel().getState()){case d:s=t.getInput();
break;
case f:s=t.getValue()+h;

if(s.length>this.MAX_DISPLAY_SIZE){s=t.getValue().toExponential(this.MAX_DISPLAY_SIZE-7);
}break;
case a:s=t.getErrorMessage();
break;
}this.getView().setDisplay(s||h);
}}});
})();
(function(){var a="showcase.page.theme.Content";
qx.Class.define(a,{extend:showcase.AbstractContent,construct:function(b){showcase.AbstractContent.call(this,b);
this.setView(this._createView());
},members:{_createView:function(){var f=new qx.ui.window.Desktop(new qx.ui.window.Manager());
var d=new showcase.page.theme.calc.view.Calculator(true);
f.add(d);
d.moveTo(60,40);
d.open();
var c=new showcase.page.theme.calc.Model();
new showcase.page.theme.calc.Presenter(d,c);
var d=new showcase.page.theme.calc.view.Calculator(false);
f.add(d);
d.moveTo(340,40);
d.open();
var c=new showcase.page.theme.calc.Model();
new showcase.page.theme.calc.Presenter(d,c);
this.__KH(d);
return f;
},__KH:function(g){if(!("WebkitTransition" in document.documentElement.style)){return;
}var i=true;
var h=new qx.ui.basic.Image("showcase/theme/affe.png").set({backgroundColor:"#525252",padding:[50,5,5,0]});
g.addListener("dblclick",function(e){var j=g.getContainerElement().getDomElement();
j.style.WebkitTransition="-webkit-transform 0.3s ease-in";

if(i){j.style.WebkitTransform="perspective(600) rotateY(90deg)";
}else{j.style.WebkitTransform="perspective(600) rotateY(270deg)";
}j.addEventListener("webkitTransitionEnd",function(){j.removeEventListener("webkitTransitionEnd",arguments.callee,false);

if(i){var k=g.getChildrenContainer().getBounds();
h.setUserBounds(0,0,k.width,k.height);
g.add(h);
g.setCaption("");
}else{g.remove(h);
g.setCaption("Calculator");
}qx.ui.core.queue.Manager.flush();
j.style.WebkitTransition="-webkit-transform 0.3s ease-out";

if(i){j.style.WebkitTransform="perspective(600) rotateY(180deg)";
}else{j.style.WebkitTransform="perspective(600) rotateY(360deg)";
j.addEventListener("webkitTransitionEnd",function(){j.removeEventListener("webkitTransitionEnd",arguments.callee,false);
j.style.WebkitTransition="";
j.style.WebkitTransform="perspective(600) rotateY(0deg)";
},false);
}i=!i;
},false);
});
}}});
})();
(function(){var d="String",c="Boolean",b="showcase.page.theme.calc.view.ICalculator",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"buttonPress":a},properties:{display:{},memory:{check:c},operation:{check:d}}});
})();
(function(){var k="display",j="0",i="-",h="operation",g="+",f="7",d="5",c="memory",b="3",a="2",P="8",O="*",N="6",M="4",L="1",K=".",J="9",I="Boolean",H="_buttons",G="keydown",r="button",s="qx.event.type.Data",p="modern-calculator",q="showcase.page.theme.calc.view.Calculator",n="changeOperation",o="execute",l="calculator",m="/",t="String",u="&divide;",y="",x="Calculator",A="buttonPress",z="keyup",C="changeDisplay",B="keypress",w="Enter",F="=",E="changeMemory",D="_keyIdentifier",v="&plusmn;";
qx.Class.define(q,{extend:qx.ui.window.Window,implement:[showcase.page.theme.calc.view.ICalculator],construct:function(Q){qx.ui.window.Window.call(this,x);
this._isModern=!!Q;

if(this._isModern){this.setAppearance(p);
}this.set({showMinimize:false,showMaximize:false,allowMaximize:false,showClose:false});
this.setLayout(new qx.ui.layout.VBox());
this._initButtons();
this.add(this.getChildControl(k));
this.add(this._createButtonContainer(),{flex:1});
this._initKeyIdentifier();
this.addListener(G,this._onKeyDown,this);
this.addListener(z,this._onKeyUp,this);
this.addListener(B,this._onKeyPress,this);
},events:{"buttonPress":s},properties:{appearance:{refine:true,init:l},display:{init:j,event:C},memory:{check:I,init:false,event:E},operation:{check:t,init:y,event:n}},members:{_buttons:null,_keyIdentifier:null,_pressedButton:null,_initButtons:function(){this._buttons={"MC":new showcase.page.theme.calc.view.Button("MC",0,0),"M+":new showcase.page.theme.calc.view.Button("M+",0,1),"M-":new showcase.page.theme.calc.view.Button("M-",0,2),"MR":new showcase.page.theme.calc.view.Button("MR",0,3),"C":new showcase.page.theme.calc.view.Button("C",1,0),"sign":new showcase.page.theme.calc.view.Button(v,1,1),"/":new showcase.page.theme.calc.view.Button(u,1,2,null,null,m),"*":new showcase.page.theme.calc.view.Button(O,1,3,null,null,O),"7":new showcase.page.theme.calc.view.Button(f,2,0,null,null,f),"8":new showcase.page.theme.calc.view.Button(P,2,1,null,null,P),"9":new showcase.page.theme.calc.view.Button(J,2,2,null,null,J),"-":new showcase.page.theme.calc.view.Button(i,2,3,null,null,i),"4":new showcase.page.theme.calc.view.Button(M,3,0,null,null,M),"5":new showcase.page.theme.calc.view.Button(d,3,1,null,null,d),"6":new showcase.page.theme.calc.view.Button(N,3,2,null,null,N),"+":new showcase.page.theme.calc.view.Button(g,3,3,null,null,g),"1":new showcase.page.theme.calc.view.Button(L,4,0,null,null,L),"2":new showcase.page.theme.calc.view.Button(a,4,1,null,null,a),"3":new showcase.page.theme.calc.view.Button(b,4,2,null,null,b),"=":new showcase.page.theme.calc.view.Button(F,4,3,2,null,w),"0":new showcase.page.theme.calc.view.Button(j,5,0,null,2,j),".":new showcase.page.theme.calc.view.Button(K,5,2,null,null,K)};

if(this._isModern){for(var R in this._buttons){this._buttons[R].setAppearance(r);
}}},_initKeyIdentifier:function(){this._keyIdentifier=[];

for(var name in this._buttons){var S=this._buttons[name];
var T=S.getKeyIdentifier();
S.addListener(o,this._onButtonExecute,this);

if(T){this._keyIdentifier[T]=S;
}}},_createChildControlImpl:function(U){if(U===k){var V=new showcase.page.theme.calc.view.Display();
this.bind(k,V,k);
this.bind(c,V,c);
this.bind(h,V,h);
return V;
}else{return qx.ui.window.Window.prototype._createChildControlImpl.call(this,U);
}},_createButtonContainer:function(){var X=new qx.ui.container.Composite();
var W=new qx.ui.layout.Grid(5,5);
X.setLayout(W);
for(var ba=0;ba<6;ba++){W.setRowFlex(ba,1);
}
for(var Y=0;Y<6;Y++){W.setColumnFlex(Y,1);
}for(var name in this._buttons){X.add(this._buttons[name]);
}return X;
},_onButtonExecute:function(e){var name=qx.lang.Object.getKeyFromValue(this._buttons,e.getTarget());
this.fireDataEvent(A,name);
},_onKeyDown:function(e){var bb=this._keyIdentifier[e.getKeyIdentifier()];

if(!bb){return;
}bb.press();

if(this._pressedButton&&this._pressedButton!==bb){this._pressedButton.release();
}this._pressedButton=bb;
e.stop();
},_onKeyUp:function(e){var bc=this._keyIdentifier[e.getKeyIdentifier()];

if(!bc){return;
}bc.release();
e.stop();
},_onKeyPress:function(e){var bd=this._keyIdentifier[e.getKeyIdentifier()];

if(!bd){return;
}bd.execute();
e.stop();
}},destruct:function(){this._disposeMap(H);
this._disposeArray(D);
}});
})();
(function(){var m="memory",l="operation",k="label",j="M",i="0",h="Boolean",g="",f="showcase.page.theme.calc.view.Display",e="_applyOperation",d="_applyDisplay",a="_applyMemory",c="String",b="display";
qx.Class.define(f,{extend:qx.ui.core.Widget,construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.Canvas());
this._add(this.getChildControl(k),{top:0,right:0});
this._add(this.getChildControl(m),{bottom:0,left:0});
this._add(this.getChildControl(l),{bottom:0,left:0});
},properties:{appearance:{refine:true,init:b},display:{init:i,apply:d},memory:{check:h,init:false,apply:a},operation:{check:c,init:g,apply:e}},members:{_createChildControlImpl:function(n){var o;

switch(n){case k:o=new qx.ui.basic.Label(this.getDisplay());
break;
case m:o=new qx.ui.basic.Label(j);
o.exclude();
break;
case l:o=new qx.ui.basic.Label(this.getOperation());
o.setRich(true);
break;
}return o||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,n);
},_applyDisplay:function(p,q){this.getChildControl(k).setValue(p.toString());
},_applyMemory:function(r,s){if(r){this._showChildControl(m);
}else{this._excludeChildControl(m);
}},_applyOperation:function(t,u){this.getChildControl(l).setValue(t.toString());
}}});
})();
(function(){var j="number",i="Number",h="error",g="String",f="-",e="waitForNumber",d="C",c="showcase.page.theme.calc.Model",b="changeValue",a="M+",C="changeInput",B="Integer",A="MC",z="0",y="sign",x="+",w="_applyState",v="changeState",u="/",t="*",q="",r="MR",o="changeOperator",p="M-",m="changeErrorMessage",n="=",k="changeMemory",l="changeOperant",s=".";
qx.Class.define(c,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.initState();
},properties:{state:{check:[j,e,h],event:v,init:j,apply:w},errorMessage:{check:g,init:q,event:m},input:{check:g,nullable:true,event:C},maxInputLength:{check:B,init:20},operator:{check:[x,f,t,u],nullable:true,event:o},operant:{check:i,nullable:true,event:l},value:{check:i,nullable:true,event:b},memory:{check:i,nullable:true,event:k}},members:{readToken:function(D){if(D.match(/^[0123456789]$/)){this.__KM(D);
}else if(D.match(/^[\+\-\*\/]$/)){this.__KP(D);
}else if(D==y){this.__KN();
}else if(D==s){this.__KO();
}else if(D==n){this.__KQ();
}else if(D==d){this.__KR();
}else if(D==a){this.__KS(D);
}else if(D==p){this.__KS(D);
}else if(D==A){this.__KU();
}else if(D==r){this.__KT();
}},__KK:function(){return parseFloat(this.getInput());
},__KL:function(E,F,G){switch(G){case "+":return E+F;
case "-":return E-F;
case "*":return E*F;
case "/":if(F==0){this.setErrorMessage("Division by zero!");
this.setState("error");
return null;
}else{return E/F;
}}},_applyState:function(H,I){if(H==j){this.setInput(z);
}else if(H==h){this.setOperator(null);
}},__KM:function(J){this.setState("number");
var K=this.getInput();

if(K.length>=this.getMaxInputLength()-1){return;
}
if(J=="0"){if(K!=="0"){K+="0";
}}else{if(K=="0"){K=J;
}else{K+=J;
}}this.setInput(K);
},__KN:function(){this.setState("number");
var L=this.getInput();

if(L=="0"){return;
}var M=L.charAt(0)=="-";

if(M){L=L.substr(1);
}else{L="-"+L;
}this.setInput(L);
},__KO:function(){this.setState("number");
var N=this.getInput();

if(N.length>=this.getMaxInputLength()-1){return;
}var O=N.indexOf(".")!==-1;

if(!O){N+=".";
}this.setInput(N);
},__KP:function(P){var R=this.getState();

if(R=="error"){return;
}else if(R=="waitForNumber"){this.setOperator(P);
return;
}this.setState("waitForNumber");
var Q=this.__KK();
var S=this.getValue();

if(S!==null){this.setValue(this.__KL(S,Q,this.getOperator()));
}else{this.setValue(Q);
}this.setOperant(Q);
this.setOperator(P);
},__KQ:function(){var T=this.getOperator();

if(!T){return;
}var V=this.getValue();

if(this.getState()=="waitForNumber"){this.setValue(this.__KL(V,this.getOperant(),T));
return;
}this.setState("waitForNumber");
var U=this.__KK();
this.setOperant(U);
this.setValue(this.__KL(V,U,T));
},__KR:function(){this.setState("number");
this.setOperator(null);
this.setValue(null);
this.setInput("0");
},__KS:function(W){var X=this.getState();
var Y;

if(X=="error"){return;
}else if(X=="waitForNumber"){Y=this.getValue();
}else{Y=this.__KK();
}var ba=this.getMemory()||0;

if(W=="M+"){this.setMemory(ba+Y);
}else{this.setMemory(ba-Y);
}},__KT:function(){var bb=this.getMemory();

if(bb==null){return;
}this.setState("number");
this.setInput(bb.toString());
},__KU:function(){this.setMemory(null);
}}});
})();
(function(){var b="calculator-button",a="showcase.page.theme.calc.view.Button";
qx.Class.define(a,{extend:qx.ui.form.Button,construct:function(c,d,e,f,g,h){qx.ui.form.Button.call(this,c);
this.set({rich:true,focusable:false,keepActive:true,allowShrinkX:false,allowShrinkY:false});
this.setLayoutProperties({row:d,column:e,rowSpan:f||1,colSpan:g||1});
this._keyIdentifier=h||null;
},properties:{appearance:{refine:true,init:b}},members:{getKeyIdentifier:function(){return this._keyIdentifier;
}}});
})();

});