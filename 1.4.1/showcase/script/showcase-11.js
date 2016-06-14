qx.$$packageData['c20c53b97b6b']={"locales":{},"resources":{},"translations":{}};

qx.Part.$$notifyLoad("c20c53b97b6b", function() {
(function(){var p="webkitTransitionEnd",o="",n="dblclick",m="perspective(600) rotateY(90deg)",l="perspective(600) rotateY(0deg)",k="perspective(600) rotateY(180deg)",j="-webkit-transform 0.3s ease-in",i="#525252",h="perspective(600) rotateY(360deg)",g="WebkitTransition",c="-webkit-transform 0.3s ease-out",f="perspective(600) rotateY(270deg)",d="showcase/theme/affe.png",b="showcase.page.theme.Content",a="Calculator";
qx.Class.define(b,{extend:showcase.AbstractContent,construct:function(q){showcase.AbstractContent.call(this,q);
this.setView(this._createView());
},members:{_createView:function(){var t=new qx.ui.window.Desktop(new qx.ui.window.Manager());
var s=new showcase.page.theme.calc.view.Calculator(true);
t.add(s);
s.moveTo(60,40);
s.open();
var r=new showcase.page.theme.calc.Model();
new showcase.page.theme.calc.Presenter(s,r);
var s=new showcase.page.theme.calc.view.Calculator(false);
t.add(s);
s.moveTo(340,40);
s.open();
var r=new showcase.page.theme.calc.Model();
new showcase.page.theme.calc.Presenter(s,r);
this.__yQ(s);
return t;
},__yQ:function(u){if(!(g in document.documentElement.style)){return;
}var w=true;
var v=new qx.ui.basic.Image(d).set({backgroundColor:i,padding:[50,5,5,0]});
u.addListener(n,function(e){var x=u.getContainerElement().getDomElement();
x.style.WebkitTransition=j;

if(w){x.style.WebkitTransform=m;
}else{x.style.WebkitTransform=f;
}x.addEventListener(p,function(){x.removeEventListener(p,arguments.callee,false);

if(w){var y=u.getChildrenContainer().getBounds();
v.setUserBounds(0,0,y.width,y.height);
u.add(v);
u.setCaption(o);
}else{u.remove(v);
u.setCaption(a);
}qx.ui.core.queue.Manager.flush();
x.style.WebkitTransition=c;

if(w){x.style.WebkitTransform=k;
}else{x.style.WebkitTransform=h;
x.addEventListener(p,function(){x.removeEventListener(p,arguments.callee,false);
x.style.WebkitTransition=o;
x.style.WebkitTransform=l;
},false);
}w=!w;
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
(function(){var p="",o="_applyViewModel",n="memory",m="operation",l="waitForNumber",k="changeErrorMessage",j="number",i="showcase.page.theme.calc.view.ICalculator",h="changeValue",g="showcase.page.theme.calc.Presenter",c="changeState",f="changeInput",d="buttonPress",b="operator",a="error";
qx.Class.define(g,{extend:qx.core.Object,construct:function(q,r){qx.core.Object.call(this);
this.setView(q);
this.setModel(r);
},properties:{view:{check:i,apply:o},model:{apply:o,init:null}},members:{MAX_DISPLAY_SIZE:16,_applyViewModel:function(s,t){if(t){throw new Error("The view and model cannot be changed!");
}var u=this.getModel();
var v=this.getView();

if(!u||!v){return;
}this.__yR();
this.__yS();
},__yR:function(){this.getView().addListener(d,this._onButtonPress,this);
},_onButtonPress:function(e){this.getModel().readToken(e.getData());
},__yS:function(){var w=this.getModel();
w.setMaxInputLength(this.MAX_DISPLAY_SIZE);
var x=this.getView();
w.bind(b,x,m,{converter:function(y){return y?y:p;
}});
w.bind(n,x,n,{converter:function(z){return z===null?false:true;
}});
w.addListener(c,this._updateDisplay,this);
w.addListener(f,this._updateDisplay,this);
w.addListener(h,this._updateDisplay,this);
w.addListener(k,this._updateDisplay,this);
},_updateDisplay:function(e){var A;
var B=this.getModel();

switch(this.getModel().getState()){case j:A=B.getInput();
break;
case l:A=B.getValue()+p;

if(A.length>this.MAX_DISPLAY_SIZE){A=B.getValue().toExponential(this.MAX_DISPLAY_SIZE-7);
}break;
case a:A=B.getErrorMessage();
break;
}this.getView().setDisplay(A||p);
}}});
})();
(function(){var j="number",i="0",h="waitForNumber",g="error",f="-",e="Number",d=".",c="M+",b="+",a="/",D="String",C="*",B="C",A="showcase.page.theme.calc.Model",z="changeValue",y="changeInput",x="Integer",w="MC",v="sign",u="Division by zero!",q="_applyState",r="changeState",o="",p="MR",m="changeOperator",n="M-",k="changeErrorMessage",l="=",s="changeMemory",t="changeOperant";
qx.Class.define(A,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.initState();
},properties:{state:{check:[j,h,g],event:r,init:j,apply:q},errorMessage:{check:D,init:o,event:k},input:{check:D,nullable:true,event:y},maxInputLength:{check:x,init:20},operator:{check:[b,f,C,a],nullable:true,event:m},operant:{check:e,nullable:true,event:t},value:{check:e,nullable:true,event:z},memory:{check:e,nullable:true,event:s}},members:{readToken:function(E){if(E.match(/^[0123456789]$/)){this.__yV(E);
}else if(E.match(/^[\+\-\*\/]$/)){this.__yY(E);
}else if(E==v){this.__yW();
}else if(E==d){this.__yX();
}else if(E==l){this.__za();
}else if(E==B){this.__zb();
}else if(E==c){this.__zc(E);
}else if(E==n){this.__zc(E);
}else if(E==w){this.__ze();
}else if(E==p){this.__zd();
}},__yT:function(){return parseFloat(this.getInput());
},__yU:function(F,G,H){switch(H){case b:return F+G;
case f:return F-G;
case C:return F*G;
case a:if(G==0){this.setErrorMessage(u);
this.setState(g);
return null;
}else{return F/G;
}}},_applyState:function(I,J){if(I==j){this.setInput(i);
}else if(I==g){this.setOperator(null);
}},__yV:function(K){this.setState(j);
var L=this.getInput();

if(L.length>=this.getMaxInputLength()-1){return;
}
if(K==i){if(L!==i){L+=i;
}}else{if(L==i){L=K;
}else{L+=K;
}}this.setInput(L);
},__yW:function(){this.setState(j);
var M=this.getInput();

if(M==i){return;
}var N=M.charAt(0)==f;

if(N){M=M.substr(1);
}else{M=f+M;
}this.setInput(M);
},__yX:function(){this.setState(j);
var O=this.getInput();

if(O.length>=this.getMaxInputLength()-1){return;
}var P=O.indexOf(d)!==-1;

if(!P){O+=d;
}this.setInput(O);
},__yY:function(Q){var S=this.getState();

if(S==g){return;
}else if(S==h){this.setOperator(Q);
return;
}this.setState(h);
var R=this.__yT();
var T=this.getValue();

if(T!==null){this.setValue(this.__yU(T,R,this.getOperator()));
}else{this.setValue(R);
}this.setOperant(R);
this.setOperator(Q);
},__za:function(){var U=this.getOperator();

if(!U){return;
}var W=this.getValue();

if(this.getState()==h){this.setValue(this.__yU(W,this.getOperant(),U));
return;
}this.setState(h);
var V=this.__yT();
this.setOperant(V);
this.setValue(this.__yU(W,V,U));
},__zb:function(){this.setState(j);
this.setOperator(null);
this.setValue(null);
this.setInput(i);
},__zc:function(X){var Y=this.getState();
var ba;

if(Y==g){return;
}else if(Y==h){ba=this.getValue();
}else{ba=this.__yT();
}var bb=this.getMemory()||0;

if(X==c){this.setMemory(bb+ba);
}else{this.setMemory(bb-ba);
}},__zd:function(){var bc=this.getMemory();

if(bc==null){return;
}this.setState(j);
this.setInput(bc.toString());
},__ze:function(){this.setMemory(null);
}}});
})();

});