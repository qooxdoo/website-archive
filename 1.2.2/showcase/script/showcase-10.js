qx.$$packageData['e974cb084200']={"locales":{},"resources":{},"translations":{}};

qx.Part.$$notifyLoad("e974cb084200", function() {
(function(){var q="webkitTransitionEnd",p="",o="dblclick",n="perspective(600) rotateY(90deg)",m="perspective(600) rotateY(0deg)",l="perspective(600) rotateY(180deg)",k="-webkit-transform 0.3s ease-in",j="#525252",i="perspective(600) rotateY(360deg)",h="WebkitTransition",d="-webkit-transform 0.3s ease-out",g="perspective(600) rotateY(270deg)",f="showcase/theme/affe.png",c="showcase.page.theme.Content",b="Calculator";
qx.Class.define(c,{extend:showcase.AbstractContent,construct:function(a){showcase.AbstractContent.call(this,a);
this.setView(this._createView());
},members:{_createView:function(){var y=new qx.ui.window.Desktop(new qx.ui.window.Manager());
var x=new showcase.page.theme.calc.view.Calculator(true);
y.add(x);
x.moveTo(60,40);
x.open();
var w=new showcase.page.theme.calc.Model();
new showcase.page.theme.calc.Presenter(x,w);
var x=new showcase.page.theme.calc.view.Calculator(false);
y.add(x);
x.moveTo(340,40);
x.open();
var w=new showcase.page.theme.calc.Model();
new showcase.page.theme.calc.Presenter(x,w);
this.__Jb(x);
return y;
},__Jb:function(s){if(!(h in document.documentElement.style)){return;
}var u=true;
var t=new qx.ui.basic.Image(f).set({backgroundColor:j,padding:[50,5,5,0]});
s.addListener(o,function(e){var v=s.getContainerElement().getDomElement();
v.style.WebkitTransition=k;

if(u){v.style.WebkitTransform=n;
}else{v.style.WebkitTransform=g;
}v.addEventListener(q,function(){v.removeEventListener(q,arguments.callee,false);

if(u){var r=s.getChildrenContainer().getBounds();
t.setUserBounds(0,0,r.width,r.height);
s.add(t);
s.setCaption(p);
}else{s.remove(t);
s.setCaption(b);
}qx.ui.core.queue.Manager.flush();
v.style.WebkitTransition=d;

if(u){v.style.WebkitTransform=l;
}else{v.style.WebkitTransform=i;
v.addEventListener(q,function(){v.removeEventListener(q,arguments.callee,false);
v.style.WebkitTransition=p;
v.style.WebkitTransform=m;
},false);
}u=!u;
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
},properties:{appearance:{refine:true,init:b},display:{init:i,apply:d},memory:{check:h,init:false,apply:a},operation:{check:c,init:g,apply:e}},members:{_createChildControlImpl:function(p){var q;

switch(p){case k:q=new qx.ui.basic.Label(this.getDisplay());
break;
case m:q=new qx.ui.basic.Label(j);
q.exclude();
break;
case l:q=new qx.ui.basic.Label(this.getOperation());
q.setRich(true);
break;
}return q||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,p);
},_applyDisplay:function(r,s){this.getChildControl(k).setValue(r.toString());
},_applyMemory:function(n,o){if(n){this._showChildControl(m);
}else{this._excludeChildControl(m);
}},_applyOperation:function(t,u){this.getChildControl(l).setValue(t.toString());
}}});
})();
(function(){var d="String",c="Boolean",b="showcase.page.theme.calc.view.ICalculator",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"buttonPress":a},properties:{display:{},memory:{check:c},operation:{check:d}}});
})();
(function(){var k="display",j="0",i="-",h="operation",g="+",f="7",d="5",c="memory",b="3",a="2",P="8",O="*",N="6",M="4",L="1",K=".",J="9",I="Boolean",H="_buttons",G="keydown",r="button",s="qx.event.type.Data",p="modern-calculator",q="showcase.page.theme.calc.view.Calculator",n="changeOperation",o="execute",l="calculator",m="/",t="String",u="&divide;",y="",x="Calculator",A="buttonPress",z="keyup",C="changeDisplay",B="keypress",w="Enter",F="=",E="changeMemory",D="_keyIdentifier",v="&plusmn;";
qx.Class.define(q,{extend:qx.ui.window.Window,implement:[showcase.page.theme.calc.view.ICalculator],construct:function(Y){qx.ui.window.Window.call(this,x);
this._isModern=!!Y;

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

if(this._isModern){for(var bd in this._buttons){this._buttons[bd].setAppearance(r);
}}},_initKeyIdentifier:function(){this._keyIdentifier=[];

for(var name in this._buttons){var Q=this._buttons[name];
var R=Q.getKeyIdentifier();
Q.addListener(o,this._onButtonExecute,this);

if(R){this._keyIdentifier[R]=Q;
}}},_createChildControlImpl:function(ba){if(ba===k){var bb=new showcase.page.theme.calc.view.Display();
this.bind(k,bb,k);
this.bind(c,bb,c);
this.bind(h,bb,h);
return bb;
}else{return qx.ui.window.Window.prototype._createChildControlImpl.call(this,ba);
}},_createButtonContainer:function(){var U=new qx.ui.container.Composite();
var T=new qx.ui.layout.Grid(5,5);
U.setLayout(T);
for(var W=0;W<6;W++){T.setRowFlex(W,1);
}
for(var V=0;V<6;V++){T.setColumnFlex(V,1);
}for(var name in this._buttons){U.add(this._buttons[name]);
}return U;
},_onButtonExecute:function(e){var name=qx.lang.Object.getKeyFromValue(this._buttons,e.getTarget());
this.fireDataEvent(A,name);
},_onKeyDown:function(e){var S=this._keyIdentifier[e.getKeyIdentifier()];

if(!S){return;
}S.press();

if(this._pressedButton&&this._pressedButton!==S){this._pressedButton.release();
}this._pressedButton=S;
e.stop();
},_onKeyUp:function(e){var bc=this._keyIdentifier[e.getKeyIdentifier()];

if(!bc){return;
}bc.release();
e.stop();
},_onKeyPress:function(e){var X=this._keyIdentifier[e.getKeyIdentifier()];

if(!X){return;
}X.execute();
e.stop();
}},destruct:function(){this._disposeMap(H);
this._disposeArray(D);
}});
})();
(function(){var p="",o="_applyViewModel",n="memory",m="operation",l="waitForNumber",k="changeErrorMessage",j="number",i="showcase.page.theme.calc.view.ICalculator",h="changeValue",g="showcase.page.theme.calc.Presenter",c="changeState",f="changeInput",d="buttonPress",b="operator",a="error";
qx.Class.define(g,{extend:qx.core.Object,construct:function(t,u){qx.core.Object.call(this);
this.setView(t);
this.setModel(u);
},properties:{view:{check:i,apply:o},model:{apply:o,init:null}},members:{MAX_DISPLAY_SIZE:16,_applyViewModel:function(x,y){if(y){throw new Error("The view and model cannot be changed!");
}var z=this.getModel();
var A=this.getView();

if(!z||!A){return;
}this.__Jc();
this.__Jd();
},__Jc:function(){this.getView().addListener(d,this._onButtonPress,this);
},_onButtonPress:function(e){this.getModel().readToken(e.getData());
},__Jd:function(){var v=this.getModel();
v.setMaxInputLength(this.MAX_DISPLAY_SIZE);
var w=this.getView();
v.bind(b,w,m,{converter:function(B){return B?B:p;
}});
v.bind(n,w,n,{converter:function(s){return s===null?false:true;
}});
v.addListener(c,this._updateDisplay,this);
v.addListener(f,this._updateDisplay,this);
v.addListener(h,this._updateDisplay,this);
v.addListener(k,this._updateDisplay,this);
},_updateDisplay:function(e){var q;
var r=this.getModel();

switch(this.getModel().getState()){case j:q=r.getInput();
break;
case l:q=r.getValue()+p;

if(q.length>this.MAX_DISPLAY_SIZE){q=r.getValue().toExponential(this.MAX_DISPLAY_SIZE-7);
}break;
case a:q=r.getErrorMessage();
break;
}this.getView().setDisplay(q||p);
}}});
})();
(function(){var j="number",i="0",h="waitForNumber",g="error",f="-",e="Number",d=".",c="M+",b="+",a="/",D="String",C="*",B="C",A="showcase.page.theme.calc.Model",z="changeValue",y="changeInput",x="Integer",w="MC",v="sign",u="Division by zero!",q="_applyState",r="changeState",o="",p="MR",m="changeOperator",n="M-",k="changeErrorMessage",l="=",s="changeMemory",t="changeOperant";
qx.Class.define(A,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.initState();
},properties:{state:{check:[j,h,g],event:r,init:j,apply:q},errorMessage:{check:D,init:o,event:k},input:{check:D,nullable:true,event:y},maxInputLength:{check:x,init:20},operator:{check:[b,f,C,a],nullable:true,event:m},operant:{check:e,nullable:true,event:t},value:{check:e,nullable:true,event:z},memory:{check:e,nullable:true,event:s}},members:{readToken:function(M){if(M.match(/^[0123456789]$/)){this.__Jg(M);
}else if(M.match(/^[\+\-\*\/]$/)){this.__Jj(M);
}else if(M==v){this.__Jh();
}else if(M==d){this.__Ji();
}else if(M==l){this.__Jk();
}else if(M==B){this.__Jl();
}else if(M==c){this.__Jm(M);
}else if(M==n){this.__Jm(M);
}else if(M==w){this.__Jo();
}else if(M==p){this.__Jn();
}},__Je:function(){return parseFloat(this.getInput());
},__Jf:function(X,Y,ba){switch(ba){case b:return X+Y;
case f:return X-Y;
case C:return X*Y;
case a:if(Y==0){this.setErrorMessage(u);
this.setState(g);
return null;
}else{return X/Y;
}}},_applyState:function(R,S){if(R==j){this.setInput(i);
}else if(R==g){this.setOperator(null);
}},__Jg:function(bb){this.setState(j);
var bc=this.getInput();

if(bc.length>=this.getMaxInputLength()-1){return;
}
if(bb==i){if(bc!==i){bc+=i;
}}else{if(bc==i){bc=bb;
}else{bc+=bb;
}}this.setInput(bc);
},__Jh:function(){this.setState(j);
var P=this.getInput();

if(P==i){return;
}var Q=P.charAt(0)==f;

if(Q){P=P.substr(1);
}else{P=f+P;
}this.setInput(P);
},__Ji:function(){this.setState(j);
var N=this.getInput();

if(N.length>=this.getMaxInputLength()-1){return;
}var O=N.indexOf(d)!==-1;

if(!O){N+=d;
}this.setInput(N);
},__Jj:function(T){var V=this.getState();

if(V==g){return;
}else if(V==h){this.setOperator(T);
return;
}this.setState(h);
var U=this.__Je();
var W=this.getValue();

if(W!==null){this.setValue(this.__Jf(W,U,this.getOperator()));
}else{this.setValue(U);
}this.setOperant(U);
this.setOperator(T);
},__Jk:function(){var I=this.getOperator();

if(!I){return;
}var K=this.getValue();

if(this.getState()==h){this.setValue(this.__Jf(K,this.getOperant(),I));
return;
}this.setState(h);
var J=this.__Je();
this.setOperant(J);
this.setValue(this.__Jf(K,J,I));
},__Jl:function(){this.setState(j);
this.setOperator(null);
this.setValue(null);
this.setInput(i);
},__Jm:function(E){var F=this.getState();
var G;

if(F==g){return;
}else if(F==h){G=this.getValue();
}else{G=this.__Je();
}var H=this.getMemory()||0;

if(E==c){this.setMemory(H+G);
}else{this.setMemory(H-G);
}},__Jn:function(){var L=this.getMemory();

if(L==null){return;
}this.setState(j);
this.setInput(L.toString());
},__Jo:function(){this.setMemory(null);
}}});
})();

});