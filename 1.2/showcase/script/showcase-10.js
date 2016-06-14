qx.$$packageData['b1d796e77a5c']={"locales":{},"resources":{},"translations":{}};

qx.Part.$$notifyLoad("b1d796e77a5c", function() {
(function(){var d="showcase.page.theme.Content";
qx.Class.define(d,{extend:showcase.AbstractContent,construct:function(g){showcase.AbstractContent.call(this,g);
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
this.__IN(b);
return c;
},__IN:function(h){if(!("WebkitTransition" in document.documentElement.style)){return;
}var j=true;
var i=new qx.ui.basic.Image("showcase/theme/affe.png").set({backgroundColor:"#525252",padding:[50,5,5,0]});
h.addListener("dblclick",function(e){var f=h.getContainerElement().getDomElement();
f.style.WebkitTransition="-webkit-transform 0.3s ease-in";

if(j){f.style.WebkitTransform="perspective(600) rotateY(90deg)";
}else{f.style.WebkitTransform="perspective(600) rotateY(270deg)";
}f.addEventListener("webkitTransitionEnd",function(){f.removeEventListener("webkitTransitionEnd",arguments.callee,false);

if(j){var k=h.getChildrenContainer().getBounds();
i.setUserBounds(0,0,k.width,k.height);
h.add(i);
h.setCaption("");
}else{h.remove(i);
h.setCaption("Calculator");
}qx.ui.core.queue.Manager.flush();
f.style.WebkitTransition="-webkit-transform 0.3s ease-out";

if(j){f.style.WebkitTransform="perspective(600) rotateY(180deg)";
}else{f.style.WebkitTransform="perspective(600) rotateY(360deg)";
f.addEventListener("webkitTransitionEnd",function(){f.removeEventListener("webkitTransitionEnd",arguments.callee,false);
f.style.WebkitTransition="";
f.style.WebkitTransform="perspective(600) rotateY(0deg)";
},false);
}j=!j;
},false);
});
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
(function(){var o="memory",n="operation",m="label",l="M",k="0",j="Boolean",i="",h="showcase.page.theme.calc.view.Display",g="_applyOperation",f="_applyDisplay",c="_applyMemory",e="String",d="display";
qx.Class.define(h,{extend:qx.ui.core.Widget,construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.Canvas());
this._add(this.getChildControl(m),{top:0,right:0});
this._add(this.getChildControl(o),{bottom:0,left:0});
this._add(this.getChildControl(n),{bottom:0,left:0});
},properties:{appearance:{refine:true,init:d},display:{init:k,apply:f},memory:{check:j,init:false,apply:c},operation:{check:e,init:i,apply:g}},members:{_createChildControlImpl:function(p){var q;

switch(p){case m:q=new qx.ui.basic.Label(this.getDisplay());
break;
case o:q=new qx.ui.basic.Label(l);
q.exclude();
break;
case n:q=new qx.ui.basic.Label(this.getOperation());
q.setRich(true);
break;
}return q||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,p);
},_applyDisplay:function(t,u){this.getChildControl(m).setValue(t.toString());
},_applyMemory:function(a,b){if(a){this._showChildControl(o);
}else{this._excludeChildControl(o);
}},_applyOperation:function(r,s){this.getChildControl(n).setValue(r.toString());
}}});
})();
(function(){var d="String",c="Boolean",b="showcase.page.theme.calc.view.ICalculator",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"buttonPress":a},properties:{display:{},memory:{check:c},operation:{check:d}}});
})();
(function(){var l="display",k="0",j="-",i="operation",h="+",g="7",f="5",d="memory",c="3",b="2",Q="8",P="*",O="6",N="4",M="1",L=".",K="9",J="Boolean",I="_buttons",H="keydown",s="button",t="qx.event.type.Data",q="modern-calculator",r="showcase.page.theme.calc.view.Calculator",o="changeOperation",p="execute",m="calculator",n="/",u="String",v="&divide;",z="",y="Calculator",B="buttonPress",A="keyup",D="changeDisplay",C="keypress",x="Enter",G="=",F="changeMemory",E="_keyIdentifier",w="&plusmn;";
qx.Class.define(r,{extend:qx.ui.window.Window,implement:[showcase.page.theme.calc.view.ICalculator],construct:function(T){qx.ui.window.Window.call(this,y);
this._isModern=!!T;

if(this._isModern){this.setAppearance(q);
}this.set({showMinimize:false,showMaximize:false,allowMaximize:false,showClose:false});
this.setLayout(new qx.ui.layout.VBox());
this._initButtons();
this.add(this.getChildControl(l));
this.add(this._createButtonContainer(),{flex:1});
this._initKeyIdentifier();
this.addListener(H,this._onKeyDown,this);
this.addListener(A,this._onKeyUp,this);
this.addListener(C,this._onKeyPress,this);
},events:{"buttonPress":t},properties:{appearance:{refine:true,init:m},display:{init:k,event:D},memory:{check:J,init:false,event:F},operation:{check:u,init:z,event:o}},members:{_buttons:null,_keyIdentifier:null,_pressedButton:null,_initButtons:function(){this._buttons={"MC":new showcase.page.theme.calc.view.Button("MC",0,0),"M+":new showcase.page.theme.calc.view.Button("M+",0,1),"M-":new showcase.page.theme.calc.view.Button("M-",0,2),"MR":new showcase.page.theme.calc.view.Button("MR",0,3),"C":new showcase.page.theme.calc.view.Button("C",1,0),"sign":new showcase.page.theme.calc.view.Button(w,1,1),"/":new showcase.page.theme.calc.view.Button(v,1,2,null,null,n),"*":new showcase.page.theme.calc.view.Button(P,1,3,null,null,P),"7":new showcase.page.theme.calc.view.Button(g,2,0,null,null,g),"8":new showcase.page.theme.calc.view.Button(Q,2,1,null,null,Q),"9":new showcase.page.theme.calc.view.Button(K,2,2,null,null,K),"-":new showcase.page.theme.calc.view.Button(j,2,3,null,null,j),"4":new showcase.page.theme.calc.view.Button(N,3,0,null,null,N),"5":new showcase.page.theme.calc.view.Button(f,3,1,null,null,f),"6":new showcase.page.theme.calc.view.Button(O,3,2,null,null,O),"+":new showcase.page.theme.calc.view.Button(h,3,3,null,null,h),"1":new showcase.page.theme.calc.view.Button(M,4,0,null,null,M),"2":new showcase.page.theme.calc.view.Button(b,4,1,null,null,b),"3":new showcase.page.theme.calc.view.Button(c,4,2,null,null,c),"=":new showcase.page.theme.calc.view.Button(G,4,3,2,null,x),"0":new showcase.page.theme.calc.view.Button(k,5,0,null,2,k),".":new showcase.page.theme.calc.view.Button(L,5,2,null,null,L)};

if(this._isModern){for(var a in this._buttons){this._buttons[a].setAppearance(s);
}}},_initKeyIdentifier:function(){this._keyIdentifier=[];

for(var name in this._buttons){var bc=this._buttons[name];
var bd=bc.getKeyIdentifier();
bc.addListener(p,this._onButtonExecute,this);

if(bd){this._keyIdentifier[bd]=bc;
}}},_createChildControlImpl:function(ba){if(ba===l){var bb=new showcase.page.theme.calc.view.Display();
this.bind(l,bb,l);
this.bind(d,bb,d);
this.bind(i,bb,i);
return bb;
}else{return qx.ui.window.Window.prototype._createChildControlImpl.call(this,ba);
}},_createButtonContainer:function(){var W=new qx.ui.container.Composite();
var V=new qx.ui.layout.Grid(5,5);
W.setLayout(V);
for(var Y=0;Y<6;Y++){V.setRowFlex(Y,1);
}
for(var X=0;X<6;X++){V.setColumnFlex(X,1);
}for(var name in this._buttons){W.add(this._buttons[name]);
}return W;
},_onButtonExecute:function(e){var name=qx.lang.Object.getKeyFromValue(this._buttons,e.getTarget());
this.fireDataEvent(B,name);
},_onKeyDown:function(e){var U=this._keyIdentifier[e.getKeyIdentifier()];

if(!U){return;
}U.press();

if(this._pressedButton&&this._pressedButton!==U){this._pressedButton.release();
}this._pressedButton=U;
e.stop();
},_onKeyUp:function(e){var S=this._keyIdentifier[e.getKeyIdentifier()];

if(!S){return;
}S.release();
e.stop();
},_onKeyPress:function(e){var R=this._keyIdentifier[e.getKeyIdentifier()];

if(!R){return;
}R.execute();
e.stop();
}},destruct:function(){this._disposeMap(I);
this._disposeArray(E);
}});
})();
(function(){var l="",k="_applyViewModel",j="waitForNumber",i="number",h="showcase.page.theme.calc.view.ICalculator",g="showcase.page.theme.calc.Presenter",f="error";
qx.Class.define(g,{extend:qx.core.Object,construct:function(r,s){qx.core.Object.call(this);
this.setView(r);
this.setModel(s);
},properties:{view:{check:h,apply:k},model:{apply:k,init:null}},members:{MAX_DISPLAY_SIZE:16,_applyViewModel:function(a,b){if(b){throw new Error("The view and model cannot be changed!");
}var c=this.getModel();
var d=this.getView();

if(!c||!d){return;
}this.__IO();
this.__IP();
},__IO:function(){this.getView().addListener("buttonPress",this._onButtonPress,this);
},_onButtonPress:function(e){this.getModel().readToken(e.getData());
},__IP:function(){var p=this.getModel();
p.setMaxInputLength(this.MAX_DISPLAY_SIZE);
var q=this.getView();
p.bind("operator",q,"operation");
p.bind("memory",q,"memory",{converter:function(m){return m===null?false:true;
}});
p.addListener("changeState",this._updateDisplay,this);
p.addListener("changeInput",this._updateDisplay,this);
p.addListener("changeValue",this._updateDisplay,this);
p.addListener("changeErrorMessage",this._updateDisplay,this);
},_updateDisplay:function(e){var n;
var o=this.getModel();

switch(this.getModel().getState()){case i:n=o.getInput();
break;
case j:n=o.getValue()+l;

if(n.length>this.MAX_DISPLAY_SIZE){n=o.getValue().toExponential(this.MAX_DISPLAY_SIZE-7);
}break;
case f:n=o.getErrorMessage();
break;
}this.getView().setDisplay(n||l);
}}});
})();
(function(){var k="number",j="Number",i="error",h="String",g="-",f="waitForNumber",e="C",d="showcase.page.theme.calc.Model",c="changeValue",b="M+",D="changeInput",C="Integer",B="MC",A="0",z="sign",y="+",x="_applyState",w="changeState",v="/",u="*",r="",s="MR",p="changeOperator",q="M-",n="changeErrorMessage",o="=",l="changeMemory",m="changeOperant",t=".";
qx.Class.define(d,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.initState();
},properties:{state:{check:[k,f,i],event:w,init:k,apply:x},errorMessage:{check:h,init:r,event:n},input:{check:h,nullable:true,event:D},maxInputLength:{check:C,init:20},operator:{check:[y,g,u,v],nullable:true,event:p},operant:{check:j,nullable:true,event:m},value:{check:j,nullable:true,event:c},memory:{check:j,nullable:true,event:l}},members:{readToken:function(I){if(I.match(/^[0123456789]$/)){this.__IS(I);
}else if(I.match(/^[\+\-\*\/]$/)){this.__IV(I);
}else if(I==z){this.__IT();
}else if(I==t){this.__IU();
}else if(I==o){this.__IW();
}else if(I==e){this.__IX();
}else if(I==b){this.__IY(I);
}else if(I==q){this.__IY(I);
}else if(I==B){this.__Jb();
}else if(I==s){this.__Ja();
}},__IQ:function(){return parseFloat(this.getInput());
},__IR:function(W,X,Y){switch(Y){case "+":return W+X;
case "-":return W-X;
case "*":return W*X;
case "/":if(X==0){this.setErrorMessage("Division by zero!");
this.setState("error");
return null;
}else{return W/X;
}}},_applyState:function(U,V){if(U==k){this.setInput(A);
}else if(U==i){this.setOperator(null);
}},__IS:function(ba){this.setState("number");
var bb=this.getInput();

if(bb.length>=this.getMaxInputLength()-1){return;
}
if(ba=="0"){if(bb!=="0"){bb+="0";
}}else{if(bb=="0"){bb=ba;
}else{bb+=ba;
}}this.setInput(bb);
},__IT:function(){this.setState("number");
var L=this.getInput();

if(L=="0"){return;
}var M=L.charAt(0)=="-";

if(M){L=L.substr(1);
}else{L="-"+L;
}this.setInput(L);
},__IU:function(){this.setState("number");
var J=this.getInput();

if(J.length>=this.getMaxInputLength()-1){return;
}var K=J.indexOf(".")!==-1;

if(!K){J+=".";
}this.setInput(J);
},__IV:function(E){var G=this.getState();

if(G=="error"){return;
}else if(G=="waitForNumber"){this.setOperator(E);
return;
}this.setState("waitForNumber");
var F=this.__IQ();
var H=this.getValue();

if(H!==null){this.setValue(this.__IR(H,F,this.getOperator()));
}else{this.setValue(F);
}this.setOperant(F);
this.setOperator(E);
},__IW:function(){var R=this.getOperator();

if(!R){return;
}var T=this.getValue();

if(this.getState()=="waitForNumber"){this.setValue(this.__IR(T,this.getOperant(),R));
return;
}this.setState("waitForNumber");
var S=this.__IQ();
this.setOperant(S);
this.setValue(this.__IR(T,S,R));
},__IX:function(){this.setState("number");
this.setOperator(null);
this.setValue(null);
this.setInput("0");
},__IY:function(N){var O=this.getState();
var P;

if(O=="error"){return;
}else if(O=="waitForNumber"){P=this.getValue();
}else{P=this.__IQ();
}var Q=this.getMemory()||0;

if(N=="M+"){this.setMemory(Q+P);
}else{this.setMemory(Q-P);
}},__Ja:function(){var a=this.getMemory();

if(a==null){return;
}this.setState(k);
this.setInput(a.toString());
},__Jb:function(){this.setMemory(null);
}}});
})();

});