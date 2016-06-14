qx.$$packageData['a23398be13f2']={"locales":{},"resources":{},"translations":{}};

qx.Part.$$notifyLoad("a23398be13f2", function() {
(function(){var n="Boolean",m="changeInvalidMessage",l="changeSelection",k="String",j="_applyValid",h="",g="changeRequired",f="changeValid",d="__xF",c="_applyInvalidMessage",a="qx.ui.form.RadioButtonGroup",b="qx.event.type.Data";
qx.Class.define(a,{extend:qx.ui.core.Widget,include:[qx.ui.core.MLayoutHandling,qx.ui.form.MModelSelection],implement:[qx.ui.form.IForm,qx.ui.core.ISingleSelection,qx.ui.form.IModelSelection],construct:function(o){qx.ui.core.Widget.call(this);
if(o==null){this.setLayout(new qx.ui.layout.VBox(4));
}else{this.setLayout(o);
}this.__xF=new qx.ui.form.RadioGroup();
this.__xF.addListener(l,function(e){this.fireDataEvent(l,e.getData(),e.getOldData());
},this);
},properties:{valid:{check:n,init:true,apply:j,event:f},required:{check:n,init:false,event:g},invalidMessage:{check:k,init:h,event:m,apply:c},requiredInvalidMessage:{check:k,nullable:true,event:m}},events:{"changeSelection":b},members:{__xF:null,_applyInvalidMessage:function(p,q){var r=this._getChildren();

for(var i=0;i<r.length;i++){r[i].setInvalidMessage(p);
}},_applyValid:function(s,t){var u=this._getChildren();

for(var i=0;i<u.length;i++){u[i].setValid(s);
}},getRadioGroup:function(){return this.__xF;
},getChildren:function(){return this._getChildren();
},add:function(v,w){this.__xF.add(v);
this._add(v,w);
},remove:function(x){this.__xF.remove(x);
this._remove(x);
},removeAll:function(){var y=this.__xF.getItems();

for(var i=0;i<y.length;i++){this.__xF.remove(y[i]);
}return this._removeAll();
},getSelection:function(){return this.__xF.getSelection();
},setSelection:function(z){return this.__xF.setSelection(z);
},resetSelection:function(){return this.__xF.resetSelection();
},isSelected:function(A){return this.__xF.isSelected(A);
},isSelectionEmpty:function(){return this.__xF.isSelectionEmpty();
},getSelectables:function(B){return this.__xF.getSelectables(B);
}},destruct:function(){this._disposeObjects(d);
}});
})();
(function(){var s="html.classlist",r="default",q="native",p="",o=" ",n='',m="(^|\\s)",k="(\\s|$)",j="\\b",h="g",c='function',g="\\b|\\b",f="qx.bom.element.Class",b='SVGAnimatedString',a='object',e="$2",d='undefined';
qx.Class.define(f,{statics:{__yk:/\s+/g,__yl:/^\s+|\s+$/g,add:qx.lang.Object.select(qx.core.Environment.get(s)?q:r,{"native":function(t,name){t.classList.add(name);
return name;
},"default":function(u,name){if(!this.has(u,name)){u.className+=(u.className?o:p)+name;
}return name;
}}),addClasses:qx.lang.Object.select(qx.core.Environment.get(s)?q:r,{"native":function(v,w){for(var i=0;i<w.length;i++){v.classList.add(w[i]);
}return v.className;
},"default":function(x,y){var z={};
var B;
var A=x.className;

if(A){B=A.split(this.__yk);

for(var i=0,l=B.length;i<l;i++){z[B[i]]=true;
}
for(var i=0,l=y.length;i<l;i++){if(!z[y[i]]){B.push(y[i]);
}}}else{B=y;
}return x.className=B.join(o);
}}),get:function(C){var D=C.className;

if(typeof D.split!==c){if(typeof D===a){if(qx.Bootstrap.getClass(D)==b){D=D.baseVal;
}else{D=n;
}}
if(typeof D===d){D=n;
}}return D;
},has:qx.lang.Object.select(qx.core.Environment.get(s)?q:r,{"native":function(E,name){return E.classList.contains(name);
},"default":function(F,name){var G=new RegExp(m+name+k);
return G.test(F.className);
}}),remove:qx.lang.Object.select(qx.core.Environment.get(s)?q:r,{"native":function(H,name){H.classList.remove(name);
return name;
},"default":function(I,name){var J=new RegExp(m+name+k);
I.className=I.className.replace(J,e);
return name;
}}),removeClasses:qx.lang.Object.select(qx.core.Environment.get(s)?q:r,{"native":function(K,L){for(var i=0;i<L.length;i++){K.classList.remove(L[i]);
}return K.className;
},"default":function(M,N){var O=new RegExp(j+N.join(g)+j,h);
return M.className=M.className.replace(O,p).replace(this.__yl,p).replace(this.__yk,o);
}}),replace:function(P,Q,R){this.remove(P,Q);
return this.add(P,R);
},toggle:qx.lang.Object.select(qx.core.Environment.get(s)?q:r,{"native":function(S,name,T){if(T===undefined){S.classList.toggle(name);
}else{T?this.add(S,name):this.remove(S,name);
}return name;
},"default":function(U,name,V){if(V==null){V=!this.has(U,name);
}V?this.add(U,name):this.remove(U,name);
return name;
}})}});
})();
(function(){var k="textfield",j="button",i="list",h="changeValue",g="selected",f="inner",d="focusin",c="popup",b="focusout",a="blur",w="Enter",v="key",u="Down",t="qx.event.type.Data",s="visible",r="quick",q="String",p="qx.ui.form.ComboBox",o="single",n="combobox",l="click",m="_applyPlaceholder";
qx.Class.define(p,{extend:qx.ui.form.AbstractSelectBox,implement:[qx.ui.form.IStringForm],construct:function(){qx.ui.form.AbstractSelectBox.call(this);
var x=this._createChildControl(k);
this._createChildControl(j);
this.addListener(l,this._onClick);
this.addListener(d,function(e){x.fireNonBubblingEvent(d,qx.event.type.Focus);
},this);
this.addListener(b,function(e){x.fireNonBubblingEvent(b,qx.event.type.Focus);
},this);
},properties:{appearance:{refine:true,init:n},placeholder:{check:q,nullable:true,apply:m}},events:{"changeValue":t},members:{__xJ:null,__xK:null,_applyPlaceholder:function(y,z){this.getChildControl(k).setPlaceholder(y);
},_createChildControlImpl:function(A,B){var C;

switch(A){case k:C=new qx.ui.form.TextField();
C.setFocusable(false);
C.addState(f);
C.addListener(h,this._onTextFieldChangeValue,this);
C.addListener(a,this.close,this);
this._add(C,{flex:1});
break;
case j:C=new qx.ui.form.Button();
C.setFocusable(false);
C.setKeepActive(true);
C.addState(f);
this._add(C);
break;
case i:C=qx.ui.form.AbstractSelectBox.prototype._createChildControlImpl.call(this,A);
C.setSelectionMode(o);
break;
}return C||qx.ui.form.AbstractSelectBox.prototype._createChildControlImpl.call(this,A);
},_forwardStates:{focused:true,invalid:true},tabFocus:function(){var D=this.getChildControl(k);
D.getFocusElement().focus();
D.selectAllText();
},focus:function(){qx.ui.form.AbstractSelectBox.prototype.focus.call(this);
this.getChildControl(k).getFocusElement().focus();
},setValue:function(E){var F=this.getChildControl(k);

if(F.getValue()==E){return;
}F.setValue(E);
},getValue:function(){return this.getChildControl(k).getValue();
},resetValue:function(){this.getChildControl(k).setValue(null);
},_onKeyPress:function(e){var H=this.getChildControl(c);
var G=e.getKeyIdentifier();

if(G==u&&e.isAltPressed()){this.getChildControl(j).addState(g);
this.toggle();
e.stopPropagation();
}else if(G==w){if(H.isVisible()){this._setPreselectedItem();
this.resetAllTextSelection();
this.close();
e.stop();
}}else if(H.isVisible()){qx.ui.form.AbstractSelectBox.prototype._onKeyPress.call(this,e);
}},_onClick:function(e){var I=e.getTarget();

if(I==this.getChildControl(j)){this.toggle();
}else{this.close();
}},_onListMouseDown:function(e){this._setPreselectedItem();
},_setPreselectedItem:function(){if(this.__xJ){var J=this.__xJ.getLabel();

if(this.getFormat()!=null){J=this.getFormat().call(this,this.__xJ);
}if(J&&J.translate){J=J.translate();
}this.setValue(J);
this.__xJ=null;
}},_onListChangeSelection:function(e){var K=e.getData();

if(K.length>0){var M=this.getChildControl(i);
var L=M.getSelectionContext();

if(L==r||L==v){this.__xJ=K[0];
}else{var N=K[0].getLabel();

if(this.getFormat()!=null){N=this.getFormat().call(this,K[0]);
}if(N&&N.translate){N=N.translate();
}this.setValue(N);
this.__xJ=null;
}}},_onPopupChangeVisibility:function(e){var P=this.getChildControl(c);

if(P.isVisible()){var Q=this.getChildControl(i);
var R=this.getValue();
var O=null;

if(R){O=Q.findItem(R);
}
if(O){Q.setSelection([O]);
}else{Q.resetSelection();
}}else{if(e.getOldData()==s){this.tabFocus();
}}this.getChildControl(j).removeState(g);
},_onTextFieldChangeValue:function(e){var U=e.getData();
var T=this.getChildControl(i);

if(U!=null){var S=T.findItem(U,false);

if(S){T.setSelection([S]);
}else{T.resetSelection();
}}else{T.resetSelection();
}this.fireDataEvent(h,U,e.getOldData());
},getTextSelection:function(){return this.getChildControl(k).getTextSelection();
},getTextSelectionLength:function(){return this.getChildControl(k).getTextSelectionLength();
},setTextSelection:function(V,W){this.getChildControl(k).setTextSelection(V,W);
},clearTextSelection:function(){this.getChildControl(k).clearTextSelection();
},selectAllText:function(){this.getChildControl(k).selectAllText();
},resetAllTextSelection:function(){this.clearTextSelection();
this.selectAllText();
}}});
})();
(function(){var m="string",k="script",h="<table>",g="engine.name",f="<fieldset>",e="<select multiple='multiple'>",d="</div>",c="</select>",b="</tr></tbody></table>",a="<col",J="div",I="<table><tbody><tr>",H=">",G="<table><tbody></tbody><colgroup>",F="<th",E="</tbody></table>",D="<td",C="</colgroup></table>",B="<opt",A="text/javascript",t="",u="</fieldset>",r="<table><tbody>",s="div<div>",p="<table",q="mshtml",n="qx.bom.Html",o="<leg",v="tbody",w="<tr",y="</table>",x="undefined",z="></";
qx.Class.define(n,{statics:{__ym:function(K,L,M){return M.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i)?K:L+z+M+H;
},__yn:{opt:[1,e,c],leg:[1,f,u],table:[1,h,y],tr:[2,r,E],td:[3,I,b],col:[2,G,C],def:qx.core.Environment.select(g,{"mshtml":[1,s,d],"default":null})},__yo:function(N,O){var U=O.createElement(J);
N=N.replace(/(<(\w+)[^>]*?)\/>/g,this.__ym);
var Q=N.replace(/^\s+/,t).substring(0,5).toLowerCase();
var T,P=this.__yn;

if(!Q.indexOf(B)){T=P.opt;
}else if(!Q.indexOf(o)){T=P.leg;
}else if(Q.match(/^<(thead|tbody|tfoot|colg|cap)/)){T=P.table;
}else if(!Q.indexOf(w)){T=P.tr;
}else if(!Q.indexOf(D)||!Q.indexOf(F)){T=P.td;
}else if(!Q.indexOf(a)){T=P.col;
}else{T=P.def;
}if(T){U.innerHTML=T[1]+N+T[2];
var S=T[0];

while(S--){U=U.lastChild;
}}else{U.innerHTML=N;
}if((qx.core.Environment.get(g)==q)){var V=/<tbody/i.test(N);
var R=!Q.indexOf(p)&&!V?U.firstChild&&U.firstChild.childNodes:T[1]==h&&!V?U.childNodes:[];

for(var j=R.length-1;j>=0;--j){if(R[j].tagName.toLowerCase()===v&&!R[j].childNodes.length){R[j].parentNode.removeChild(R[j]);
}}if(/^\s/.test(N)){U.insertBefore(O.createTextNode(N.match(/^\s*/)[0]),U.firstChild);
}}return qx.lang.Array.fromCollection(U.childNodes);
},clean:function(W,X,Y){X=X||document;
if(typeof X.createElement===x){X=X.ownerDocument||X[0]&&X[0].ownerDocument||document;
}if(!Y&&W.length===1&&typeof W[0]===m){var bg=/^<(\w+)\s*\/?>$/.exec(W[0]);

if(bg){return [X.createElement(bg[1])];
}}var ba,bc=[];

for(var i=0,l=W.length;i<l;i++){ba=W[i];
if(typeof ba===m){ba=this.__yo(ba,X);
}if(ba.nodeType){bc.push(ba);
}else if(ba instanceof qx.type.BaseArray){bc.push.apply(bc,Array.prototype.slice.call(ba,0));
}else if(ba.toElement){bc.push(ba.toElement());
}else{bc.push.apply(bc,ba);
}}if(Y){var bf=[],be=qx.lang.Array,bd,bb;

for(var i=0;bc[i];i++){bd=bc[i];

if(bd.nodeType==1&&bd.tagName.toLowerCase()===k&&(!bd.type||bd.type.toLowerCase()===A)){if(bd.parentNode){bd.parentNode.removeChild(bc[i]);
}bf.push(bd);
}else{if(bd.nodeType===1){bb=be.fromCollection(bd.getElementsByTagName(k));
bc.splice.apply(bc,[i+1,0].concat(bb));
}Y.appendChild(bd);
}}return bf;
}return bc;
}}});
})();
(function(){var v="list",u="textfield",t="popup",s="",r="qx.dynlocale",q="Down",p="mouseup",o="qx.ui.form.DateField",n="changeLocale",m="changeVisibility",f="Left",l="datefield",i="changeValue",c="qx.util.format.DateFormat",b="Escape",h="execute",g="medium",j="hidden",a="Right",k="Up",d="_applyDateFormat";
qx.Class.define(o,{extend:qx.ui.form.ComboBox,implement:[qx.ui.form.IDateForm],construct:function(){qx.ui.form.ComboBox.call(this);
this.setDateFormat(qx.ui.form.DateField.getDefaultDateFormatter());
if(qx.core.Environment.get(r)){this.__xL=qx.locale.Manager.getInstance().addListener(n,function(){this.setDateFormat(qx.ui.form.DateField.getDefaultDateFormatter());
},this);
}},properties:{appearance:{refine:true,init:l},dateFormat:{check:c,apply:d}},statics:{__xM:null,__xN:null,getDefaultDateFormatter:function(){var w=qx.locale.Date.getDateFormat(g).toString();

if(w==this.__xM){return this.__xN;
}
if(this.__xN){this.__xN.dispose();
}this.__xN=new qx.util.format.DateFormat(w,qx.locale.Manager.getInstance().getLocale());
this.__xM=w;
return this.__xN;
}},members:{__xL:null,setValue:function(x){var y=this.getChildControl(u);
y.setValue(this.getDateFormat().format(x));
var z=this.getChildControl(v);
z.setValue(x);
},getValue:function(){var A=this.getChildControl(u).getValue();
try{return this.getDateFormat().parse(A);
}catch(B){return null;
}},resetValue:function(){var C=this.getChildControl(u);
C.setValue(s);
var D=this.getChildControl(v);
D.setValue(null);
},_applyDateFormat:function(E,F){if(!F){return;
}try{var H=this.getChildControl(u);
var I=H.getValue();
var G=F.parse(I);
H.setValue(E.format(G));
}catch(J){}},_createChildControlImpl:function(K,L){var M;

switch(K){case v:M=new qx.ui.control.DateChooser();
M.setFocusable(false);
M.setKeepFocus(true);
M.addListener(h,this._onChangeDate,this);
break;
case t:M=new qx.ui.popup.Popup(new qx.ui.layout.VBox);
M.setAutoHide(false);
M.add(this.getChildControl(v));
M.addListener(p,this._onChangeDate,this);
M.addListener(m,this._onPopupChangeVisibility,this);
break;
}return M||qx.ui.form.ComboBox.prototype._createChildControlImpl.call(this,K);
},_onChangeDate:function(e){var N=this.getChildControl(u);
var O=this.getChildControl(v).getValue();
N.setValue(this.getDateFormat().format(O));
this.close();
},_onKeyPress:function(e){var P=e.getKeyIdentifier();

if(P==q&&e.isAltPressed()){this.toggle();
e.stopPropagation();
return;
}var Q=this.getChildControl(t);

if(Q.getVisibility()==j){return;
}if(P==b){this.close();
e.stopPropagation();
return;
}if(P===f||P===a||P===q||P===k){e.preventDefault();
}this.getChildControl(v).handleKeyPress(e);
},_onPopupChangeVisibility:function(e){var S=this.getChildControl(t);

if(S.isVisible()){var T=this.getChildControl(v);
var R=this.getValue();
T.setValue(R);
}},_onTextFieldChangeValue:function(e){var U=this.getValue();

if(U!=null){var V=this.getChildControl(v);
V.setValue(U);
}this.fireDataEvent(i,this.getValue());
},isEmpty:function(){var W=this.getChildControl(u).getValue();
return W==null||W==s;
}},destruct:function(){if(qx.core.Environment.get(r)){if(this.__xL){this.removeListenerById(this.__xL);
}}}});
})();
(function(){var k="value",j="placeholder",h="CheckBox:",g="TextArea:",f="Boolean",e="RepeatButton:",d="widgetbrowser.pages.Form",c="execute",b="Text",a="ToggleButton",O="password",N="RadioButton 3",M="Button:",L="ComboBox:",K="ToggleButton:",J="RadioButton",I="0",H="MenuButton:",G="Button",F="Tri-State CheckBox:",r="PasswordField:",s="SplitButton",p="Buttons",q="RadioButtons:",n="dd.mm.YYYY",o="List:",l="SplitButton:",m="RadioButton 1",t="Spinner:",u="Selection",x="DateField:",w="RadioButton 2",z="Tri-State CheckBox",y="Number",B="CheckBox",A="SelectBox:",v="MenuButton",E="Slider:",D="TextField:",C="RadioButtonGroup:";
qx.Class.define(d,{extend:widgetbrowser.pages.AbstractPage,statics:{ITEM_SIZE:3},construct:function(){widgetbrowser.pages.AbstractPage.call(this);
this.initWidgets();
},members:{initWidgets:function(){var bf=new qx.ui.layout.Grid(20,5);
bf.setColumnFlex(0,1);
bf.setColumnFlex(1,1);
var bq=new qx.ui.container.Composite(bf);
bq.setPadding(10);
var W=1;
var P=new qx.ui.groupbox.GroupBox(b);
P.setLayout(new qx.ui.layout.Grid(8,8));
P.setWidth(290);
bq.add(P,{row:0,column:0});
var bo=new qx.ui.form.TextField();
bo.setPlaceholder(j);
bo.setTabIndex(W++);
var Y=new qx.ui.basic.Label(D);
Y.setBuddy(bo);
P.add(Y,{row:0,column:0});
P.add(bo,{row:0,column:1});
this._widgets.push(bo);
var V=new qx.ui.form.PasswordField();
V.setTabIndex(W++);
V.setPlaceholder(O);
Y=new qx.ui.basic.Label(r);
Y.setBuddy(V);
P.add(Y,{row:1,column:0});
P.add(V,{row:1,column:1});
this._widgets.push(V);
var Q=new qx.ui.form.TextArea();
Q.setTabIndex(W++);
Q.setPlaceholder(j);
Y=new qx.ui.basic.Label(g);
Y.setBuddy(Q);
P.add(Y,{row:2,column:0});
P.add(Q,{row:2,column:1});
this._widgets.push(Q);
var R=new qx.ui.form.ComboBox();
R.setTabIndex(W++);
R.setPlaceholder(j);
Y=new qx.ui.basic.Label(L);
Y.setBuddy(R);
P.add(Y,{row:3,column:0});
P.add(R,{row:3,column:1});
this.__RB(R);
this._widgets.push(R);
var bh=new qx.ui.form.DateField();
bh.setTabIndex(W++);
bh.setPlaceholder(n);
Y=new qx.ui.basic.Label(x);
Y.setBuddy(bh);
P.add(Y,{row:4,column:0});
P.add(bh,{row:4,column:1});
this._widgets.push(bh);
var X=new qx.ui.groupbox.GroupBox(u);
X.setLayout(new qx.ui.layout.Grid(8,8));
X.setWidth(290);
bq.add(X,{row:1,column:0,rowSpan:2});
var bi=new qx.ui.form.SelectBox();
bi.setTabIndex(W++);
Y=new qx.ui.basic.Label(A);
Y.setBuddy(bi);
X.add(Y,{row:0,column:0});
X.add(bi,{row:0,column:1});
this.__RB(bi);
this._widgets.push(bi);
var bn=new qx.ui.form.List();
bn.setTabIndex(W++);
bn.setHeight(60);
bn.setWidth(155);
Y=new qx.ui.basic.Label(o);
Y.setBuddy(bn);
X.add(Y,{row:1,column:0});
X.add(bn,{row:1,column:1});
this.__RB(bn);
this._widgets.push(bn);
var bg=new qx.ui.form.RadioButtonGroup();
bg.add(new qx.ui.form.RadioButton(m).set({tabIndex:W++}));
bg.add(new qx.ui.form.RadioButton(w).set({tabIndex:W++}));
bg.add(new qx.ui.form.RadioButton(N).set({tabIndex:W++}));
Y=new qx.ui.basic.Label(C);
Y.setBuddy(bg);
X.add(Y,{row:2,column:0});
X.add(bg,{row:2,column:1});
this._widgets.push(bg);
var bl=new qx.ui.groupbox.GroupBox(p);
bl.setLayout(new qx.ui.layout.Grid(8,8));
bl.setWidth(250);
bq.add(bl,{row:0,column:1});
var bm=new qx.ui.form.Button(G).set({tabIndex:W++});
Y=new qx.ui.basic.Label(M);
Y.setBuddy(bm);
bl.add(Y,{row:0,column:0});
bl.add(bm,{row:0,column:1});
this._widgets.push(bm);
var T=new qx.ui.form.ToggleButton(a).set({tabIndex:W++});
Y=new qx.ui.basic.Label(K);
Y.setBuddy(T);
bl.add(Y,{row:1,column:0});
bl.add(T,{row:1,column:1});
this._widgets.push(T);
var bc=new qx.ui.form.RepeatButton(I).set({tabIndex:W++});
Y=new qx.ui.basic.Label(e);
Y.setBuddy(bc);
bl.add(Y,{row:2,column:0});
bl.add(bc,{row:2,column:1});
this._widgets.push(bc);
var bd=new qx.ui.form.MenuButton(v,null,this.__RC()).set({tabIndex:W++});
Y=new qx.ui.basic.Label(H);
Y.setBuddy(bd);
bl.add(Y,{row:3,column:0});
bl.add(bd,{row:3,column:1});
this._widgets.push(bd);
var U=new qx.ui.form.SplitButton(s,null,this.__RD()).set({tabIndex:W++});
Y=new qx.ui.basic.Label(l);
Y.setBuddy(U);
bl.add(Y,{row:4,column:0});
bl.add(U,{row:4,column:1});
this._widgets.push(U);
bc.addListener(c,function(){var br=parseInt(bc.getLabel())+1;
bc.setLabel(br.toString());
});
var S=new qx.ui.groupbox.GroupBox(f);
S.setLayout(new qx.ui.layout.Grid(8,8));
S.setWidth(250);
bq.add(S,{row:1,column:1});
var bj=new qx.ui.form.CheckBox(B).set({tabIndex:W++});
Y=new qx.ui.basic.Label(h);
Y.setBuddy(bj);
S.add(Y,{row:0,column:0});
S.add(bj,{row:0,column:1});
this._widgets.push(bj);
var bp=new qx.ui.form.CheckBox(z).set({triState:true,value:null});
this._widgets.push(bp);
Y=new qx.ui.basic.Label(F);
Y.setBuddy(bp);
S.add(Y,{row:1,column:0});
S.add(bp,{row:1,column:1});
var bb=new qx.ui.form.RadioButton(J).set({tabIndex:W++});
S.add(new qx.ui.basic.Label(q),{row:2,column:0});
S.add(bb,{row:2,column:1});
this._widgets.push(bb);
var bk=new qx.ui.groupbox.GroupBox(y);
bk.setLayout(new qx.ui.layout.Grid(8,8));
bk.setWidth(250);
bq.add(bk,{row:2,column:1});
var ba=new qx.ui.form.Spinner(0,50,100).set({tabIndex:W++});
Y=new qx.ui.basic.Label(t);
Y.setBuddy(ba);
bk.add(Y,{row:0,column:0});
bk.add(ba,{row:0,column:1});
this._widgets.push(ba);
var be=new qx.ui.form.Slider().set({tabIndex:W++});
be.setWidth(130);
Y=new qx.ui.basic.Label(E);
Y.setBuddy(be);
bk.add(Y,{row:1,column:0});
bk.add(be,{row:1,column:1});
this._widgets.push(be);
be.bind(k,ba,k);
ba.bind(k,be,k);
this.add(bq);
},__RB:function(bs){for(var i=0;i<10;i++){var bt=new qx.ui.form.ListItem("Item "+i);
bs.add(bt);
}},__RC:function(){var bu=new qx.ui.menu.Menu;

for(var i=0;i<3;i++){bu.add(new qx.ui.menu.RadioButton("Option"+i));
}var bx=new qx.ui.form.RadioGroup;
bx.add.apply(bx,bu.getChildren());
var bw=new qx.ui.menu.Menu();

for(var i=0;i<3;i++){var by=new qx.ui.menu.Button("Button"+i);
bw.add(by);
}var bv=new qx.ui.menu.Button("Options","",null,bu);
bw.addSeparator();
bw.add(bv);
return bw;
},__RD:function(){var bz=new qx.ui.menu.Menu;
var bC=new qx.ui.menu.Button("Website 1");
var bA=new qx.ui.menu.Button("Website 2");
var bB=new qx.ui.menu.Button("Website 3");
bz.add(bC);
bz.add(bA);
bz.add(bB);
return bz;
}}});
})();
(function(){var m="get",k="set",h="reset",g=":not(",f="getValue",e="append",d=")",c="getPreviousSiblings",b="#",a="qx.bom.Collection",K="setValue",J="prepend",I="string",H="getAncestors",G="getOffsetParent",F="remove",E=">*",D="add",C="*",B="",t="addListener",u="has",r="toggle",s="getSiblings",p="replace",q="after",n="replaceWith",o="setCss",v="setStyles",w="before",y="getNextSiblings",x="getPosition",A="getCss",z="removeListener";
(function(){var M=function(N,O){return function(P,Q,R,S,T,U){var length=this.length;

if(length>0){var V=N[O];

for(var i=0;i<length;i++){if(this[i].nodeType===1){V.call(N,this[i],P,Q,R,S,T,U);
}}}return this;
};
};
var L=function(W,X){return function(Y,ba,bb,bc,bd,be){if(this.length>0){var bf=this[0].nodeType===1?W[X](this[0],Y,ba,bb,bc,bd,be):null;

if(bf&&bf.nodeType){return this.__yt([bf]);
}else{return bf;
}}return null;
};
};
qx.Class.define(a,{extend:qx.type.BaseArray,statics:{query:function(bg,bh){var bi=qx.bom.Selector.query(bg,bh);
return qx.lang.Array.cast(bi,qx.bom.Collection);
},id:function(bj){var bk=document.getElementById(bj);
if(bk&&bk.id!=bj){return qx.bom.Collection.query(b+bj);
}if(bk){return new qx.bom.Collection(bk);
}else{return new qx.bom.Collection();
}},html:function(bl,bm){var bn=qx.bom.Html.clean([bl],bm);
return qx.lang.Array.cast(bn,qx.bom.Collection);
},__yp:/^[^<]*(<(.|\s)+>)[^>]*$|^#([\w-]+)$/,create:function(bo,bp){var br=qx.bom.Collection;
if(bo.nodeType){return new br(bo);
}else if(typeof bo===I){var bq=br.__yp.exec(bo);

if(bq){return bq[1]?br.html(bq[1],bp):br.id(bq[3].substring(1));
}else{return br.query(bo,bp);
}}else{return qx.lang.Array.cast(bo,qx.bom.Collection);
}}},members:{__yq:null,setAttribute:M(qx.bom.element.Attribute,k),resetAttribute:M(qx.bom.element.Attribute,h),getAttribute:L(qx.bom.element.Attribute,m),addClass:M(qx.bom.element.Class,D),getClass:L(qx.bom.element.Class,m),hasClass:L(qx.bom.element.Class,u),removeClass:M(qx.bom.element.Class,F),replaceClass:M(qx.bom.element.Class,p),toggleClass:M(qx.bom.element.Class,r),setValue:M(qx.bom.Input,K),getValue:L(qx.bom.Input,f),setStyle:M(qx.bom.element.Style,k),setStyles:M(qx.bom.element.Style,v),resetStyle:M(qx.bom.element.Style,h),getStyle:L(qx.bom.element.Style,m),setCss:M(qx.bom.element.Style,o),getCss:M(qx.bom.element.Style,A),getOffset:L(qx.bom.element.Location,m),getPosition:L(qx.bom.element.Location,x),getOffsetParent:L(qx.bom.element.Location,G),setScrollLeft:function(bs){var Node=qx.dom.Node;

for(var i=0,l=this.length,bt;i<l;i++){bt=this[i];

if(Node.isElement(bt)){bt.scrollLeft=bs;
}else if(Node.isWindow(bt)){bt.scrollTo(bs,this.getScrollTop(bt));
}else if(Node.isDocument(bt)){Node.getWindow(bt).scrollTo(bs,this.getScrollTop(bt));
}}return this;
},setScrollTop:function(bu){var Node=qx.dom.Node;

for(var i=0,l=this.length,bv;i<l;i++){bv=this[i];

if(Node.isElement(bv)){bv.scrollTop=bu;
}else if(Node.isWindow(bv)){bv.scrollTo(this.getScrollLeft(bv),bu);
}else if(Node.isDocument(bv)){Node.getWindow(bv).scrollTo(this.getScrollLeft(bv),bu);
}}return this;
},getScrollLeft:function(){var bw=this[0];

if(!bw){return null;
}var Node=qx.dom.Node;

if(Node.isWindow(bw)||Node.isDocument(bw)){return qx.bom.Viewport.getScrollLeft();
}return bw.scrollLeft;
},getScrollTop:function(){var bx=this[0];

if(!bx){return null;
}var Node=qx.dom.Node;

if(Node.isWindow(bx)||Node.isDocument(bx)){return qx.bom.Viewport.getScrollTop();
}return bx.scrollTop;
},getWidth:function(){var by=this[0];
var Node=qx.dom.Node;

if(by){if(Node.isElement(by)){return qx.bom.element.Dimension.getWidth(by);
}else if(Node.isDocument(by)){return qx.bom.Document.getWidth(Node.getWindow(by));
}else if(Node.isWindow(by)){return qx.bom.Viewport.getWidth(by);
}}return null;
},getContentWidth:function(){var bz=this[0];

if(qx.dom.Node.isElement(bz)){return qx.bom.element.Dimension.getContentWidth(bz);
}return null;
},getHeight:function(){var bA=this[0];
var Node=qx.dom.Node;

if(bA){if(Node.isElement(bA)){return qx.bom.element.Dimension.getHeight(bA);
}else if(Node.isDocument(bA)){return qx.bom.Document.getHeight(Node.getWindow(bA));
}else if(Node.isWindow(bA)){return qx.bom.Viewport.getHeight(bA);
}}return null;
},getContentHeight:function(){var bB=this[0];

if(qx.dom.Node.isElement(bB)){return qx.bom.element.Dimension.getContentHeight(bB);
}return null;
},addListener:M(qx.bom.Element,t),removeListener:M(qx.bom.Element,z),eq:function(bC){return this.slice(bC,+bC+1);
},filter:function(bD,bE){var bF;

if(qx.lang.Type.isFunction(bD)){bF=qx.type.BaseArray.prototype.filter.call(this,bD,bE);
}else{bF=qx.bom.Selector.matches(bD,this);
}return this.__yt(bF);
},is:function(bG){return !!bG&&qx.bom.Selector.matches(bG,this).length>0;
},__yr:/^.[^:#\[\.,]*$/,not:function(bH){if(this.__yr.test(bH)){var bI=qx.bom.Selector.matches(g+bH+d,this);
return this.__yt(bI);
}var bI=qx.bom.Selector.matches(bH,this);
return this.filter(function(bJ){return bI.indexOf(bJ)===-1;
});
},add:function(bK,bL){var bM=qx.bom.Selector.query(bK,bL);
var bN=qx.lang.Array.unique(this.concat(bM));
return this.__yt(bN);
},children:function(bO){var bP=[];

for(var i=0,l=this.length;i<l;i++){bP.push.apply(bP,qx.dom.Hierarchy.getChildElements(this[i]));
}
if(bO){bP=qx.bom.Selector.matches(bO,bP);
}return this.__yt(bP);
},closest:function(bQ){var bR=new qx.bom.Collection(1);
var bT=qx.bom.Selector;
var bS=this.map(function(bU){while(bU&&bU.ownerDocument){bR[0]=bU;

if(bT.matches(bQ,bR).length>0){return bU;
}bU=bU.parentNode;
}});
return this.__yt(qx.lang.Array.unique(bS));
},contents:function(){var bW=[];
var bV=qx.lang.Array;

for(var i=0,l=this.length;i<l;i++){bW.push.apply(bW,bV.fromCollection(this[i].childNodes));
}return this.__yt(bW);
},find:function(bX){var ca=qx.bom.Selector;
if(this.length===1){return this.__yt(ca.query(bX,this[0]));
}else{var bY=[];

for(var i=0,l=this.length;i<l;i++){bY.push.apply(bY,ca.query(bX,this[i]));
}return this.__yt(qx.lang.Array.unique(bY));
}},next:function(cb){var cc=qx.dom.Hierarchy;
var cd=this.map(cc.getNextElementSibling,cc);
if(cb){cd=qx.bom.Selector.matches(cb,cd);
}return this.__yt(cd);
},nextAll:function(ce){return this.__ys(y,ce);
},prev:function(cf){var cg=qx.dom.Hierarchy;
var ch=this.map(cg.getPreviousElementSibling,cg);
if(cf){ch=qx.bom.Selector.matches(cf,ch);
}return this.__yt(ch);
},prevAll:function(ci){return this.__ys(c,ci);
},parent:function(cj){var Element=qx.dom.Element;
var ck=qx.lang.Array.unique(this.map(Element.getParentElement,Element));
if(cj){ck=qx.bom.Selector.matches(cj,ck);
}return this.__yt(ck);
},parents:function(cl){return this.__ys(H,cl);
},siblings:function(cm){return this.__ys(s,cm);
},__ys:function(cn,co){var cq=[];
var cp=qx.dom.Hierarchy;

for(var i=0,l=this.length;i<l;i++){cq.push.apply(cq,cp[cn](this[i]));
}var cr=qx.lang.Array.unique(cq);
if(co){cr=qx.bom.Selector.matches(co,cr);
}return this.__yt(cr);
},__yt:function(cs){var ct=new qx.bom.Collection;
ct.__yq=this;
cs=Array.prototype.slice.call(cs,0);
ct.push.apply(ct,cs);
return ct;
},andSelf:function(){return this.add(this.__yq);
},end:function(){return this.__yq||new qx.bom.Collection();
},__yu:function(cu,cv){var cA=this[0];
var cz=cA.ownerDocument||cA;
var cy=cz.createDocumentFragment();
var cC=qx.bom.Html.clean(cu,cz,cy);
var cE=cy.firstChild;
if(cE){var cw=this.length-1;

for(var i=0,l=cw;i<l;i++){cv.call(this,this[i],cy.cloneNode(true));
}cv.call(this,this[cw],cy);
}if(cC){var cx;
var cD=qx.io.ScriptLoader;
var cB=qx.lang.Function;

for(var i=0,l=cC.length;i<l;i++){cx=cC[i];
if(cx.src){cD.get().load(cx.src);
}else{cB.globalEval(cx.text||cx.textContent||cx.innerHTML||B);
}if(cx.parentNode){cx.parentNode.removeChild(cx);
}}}return this;
},__yv:function(cF,cG){var cI=qx.bom.Selector;
var cH=qx.lang.Array;
var cK=[];

for(var i=0,l=cF.length;i<l;i++){cK.push.apply(cK,cI.query(cF[i]));
}cK=cH.cast(cH.unique(cK),qx.bom.Collection);
for(var i=0,cJ=this.length;i<cJ;i++){cK[cG](this[i]);
}return this;
},append:function(cL){return this.__yu(arguments,this.__yw);
},prepend:function(cM){return this.__yu(arguments,this.__yx);
},__yw:function(cN,cO){cN.appendChild(cO);
},__yx:function(cP,cQ){cP.insertBefore(cQ,cP.firstChild);
},appendTo:function(cR){return this.__yv(arguments,e);
},prependTo:function(cS){return this.__yv(arguments,J);
},before:function(cT){return this.__yu(arguments,this.__yy);
},after:function(cU){return this.__yu(arguments,this.__yz);
},__yy:function(cV,cW){cV.parentNode.insertBefore(cW,cV);
},__yz:function(cX,cY){cX.parentNode.insertBefore(cY,cX.nextSibling);
},insertBefore:function(da){return this.__yv(arguments,w);
},insertAfter:function(db){return this.__yv(arguments,q);
},wrapAll:function(content){var dd=this[0];

if(dd){var dc=qx.bom.Collection.create(content,dd.ownerDocument).clone();
if(dd.parentNode){dd.parentNode.insertBefore(dc[0],dd);
}dc.map(this.__yA).append(this);
}return this;
},__yA:function(de){while(de.firstChild){de=de.firstChild;
}return de;
},wrapInner:function(content){var df=new qx.bom.Collection(1);

for(var i=0,l=this.length;i<l;i++){df[0]=this[i];
df.contents().wrapAll(content);
}return this;
},wrap:function(content){var dg=new qx.bom.Collection(1);
for(var i=0,l=this.length;i<l;i++){dg[0]=this[i];
dg.wrapAll(content);
}return this;
},replaceWith:function(content){return this.after(content).remove();
},replaceAll:function(dh){return this.__yv(arguments,n);
},remove:function(di){var dk=this;

if(di){dk=this.filter(di);

if(dk.length==0){return this;
}}for(var i=0,dl=dk.length,dj;i<dl;i++){dj=dk[i];

if(dj.parentNode){dj.parentNode.removeChild(dj);
}}return dk;
},destroy:function(dm){if(this.length==0){return this;
}var dp=qx.bom.Selector;
var ds=this;

if(dm){ds=this.filter(dm);

if(ds.length==0){return this;
}}var dr=qx.event.Registration.getManager(this[0]);

for(var i=0,l=ds.length,dq,dt;i<l;i++){dq=ds[i];
dr.removeAllListeners(dq);
dt=dp.query(C,dq);

for(var j=0,dn=dt.length;j<dn;j++){dr.removeAllListeners(dt[j]);
}if(dq.parentNode){dq.parentNode.removeChild(dq);
}}if(dm){ds.end();
qx.lang.Array.exclude(this,ds);
}else{this.length=0;
}return this;
},empty:function(){var du=qx.bom.Collection;

for(var i=0,l=this.length;i<l;i++){du.query(E,this[i]).destroy();
while(this.firstChild){this.removeChild(this.firstChild);
}}return this;
},clone:function(dv){var Element=qx.bom.Element;
return dv?
this.map(function(dw){return Element.clone(dw,true);
}):this.map(Element.clone,Element);
}},defer:function(dx){if(window.$==null){window.$=dx.create;
}}});
})();
})();
(function(){var k="overflowY",j="auto",i="hidden",h="textarea",g="Boolean",f="Integer",d="input",c="appear",b="engine.name",a="_applyWrap",x="-1",w="_applyMinimalLineHeight",v="mousewheel",u="visible",t="",s="_applyAutoSize",r="tabIndex",q='name',p="mshtml",o="qx.ui.form.TextArea",m="webkit",n='id',l="absolute";
qx.Class.define(o,{extend:qx.ui.form.AbstractField,construct:function(y){qx.ui.form.AbstractField.call(this,y);
this.initWrap();
this.addListener(v,this._onMousewheel,this);
},properties:{wrap:{check:g,init:true,apply:a},appearance:{refine:true,init:h},singleStep:{check:f,init:20},minimalLineHeight:{check:f,apply:w,init:4},autoSize:{check:g,apply:s,init:false}},members:{__yB:null,__yC:null,__yD:null,setValue:function(z){z=qx.ui.form.AbstractField.prototype.setValue.call(this,z);
this.__yE();
return z;
},_onMousewheel:function(e){var A=this.getContentElement();
var scrollY=A.getScrollY();
A.scrollToY(scrollY+e.getWheelDelta()*this.getSingleStep());
var B=A.getScrollY();

if(B!=scrollY){e.stop();
}},__yE:function(){if(this.isAutoSize()){var E=this.__yF();

if(E){this.__yD=this.__yD||this._getAreaHeight();
var G=this._getScrolledAreaHeight();
if(this.getMaxHeight()){var C=this.getInsets();
var D=-C.top+this.getMaxHeight()-C.bottom;

if(G>D){this.getContentElement().setStyle(k,j);
}else{this.getContentElement().setStyle(k,i);
}}var F=Math.max(G,this.__yD);
this._setAreaHeight(F);
}else{this.addListenerOnce(c,function(){if(qx.core.Environment.get(b)==m){var I=this.getContentElement();
var H=this.getValue();
I.setStyle(k,i,true);
this.setValue(t);
this.setValue(H);
}this.__yE();
},this);
}}},_getAreaHeight:function(){return this.getInnerSize().height;
},_setAreaHeight:function(J){if(this._getAreaHeight()!==J){this.__yC=J;
qx.ui.core.queue.Layout.add(this);
qx.ui.core.queue.Manager.flush();
}},_getScrolledAreaHeight:function(){var L=this.__yF();
var K=L.getDomElement();
var M=this.getValue();
K.style.overflow=i;
L.setValue(M);
L.setWrap(this.getWrap(),true);

if(K){if(!K.parentNode){qx.html.Element.flush();
return this._getScrolledAreaHeight();
}this.__yH(L);

if(qx.core.Environment.get(b)==p){if(!K.scrollTop){qx.html.Element.flush();
}return K.scrollTop+this._getTextSize().height;
}return K.scrollTop;
}},__yF:function(){this.__yB=this.__yB||this.__yG();
return this.__yB;
},__yG:function(){var Q,O,N,P;
Q=this.getContentElement();
if(!Q.getDomElement()){return;
}N=qx.bom.Collection.create(Q.getDomElement()).clone()[0];
P=new qx.html.Input(h);
P.useElement(N);
O=P;
O.setStyles({position:l,top:0,left:-9999,height:0,overflow:u},true);
O.removeAttribute(n);
O.removeAttribute(q);
O.setAttribute(r,x);
O.setValue(Q.getValue());
O.insertBefore(Q);
this.__yH(O);
return O;
},__yH:function(R){var R=R.getDomElement();

if(R){R.scrollTop=10000;
}},_createInputElement:function(){return new qx.html.Input(h,{overflowX:j,overflowY:j});
},_applyWrap:function(S,T){this.getContentElement().setWrap(S);
this.__yE();
},_applyMinimalLineHeight:function(){qx.ui.core.queue.Layout.add(this);
},_applyAutoSize:function(U,V){if(U){this.__yE();
this.addListener(d,this.__yE,this);
this.addListenerOnce(c,function(){this.getContentElement().setStyle(k,i);
});
}else{this.removeListener(d,this.__yE);
this.getContentElement().setStyle(k,j);
}},_applyDimension:function(W){qx.ui.form.AbstractField.prototype._applyDimension.call(this);

if(W===this.getMaxHeight()){this.__yE();
}},__yI:function(){if(this.isAutoSize()&&this.getHeight()){this.warn("autoSize is ignored when the height property is set. "+"If you want to set an initial height, use the minHeight "+"property instead.");
}},_getContentHint:function(){var X=qx.ui.form.AbstractField.prototype._getContentHint.call(this);
X.height=X.height*this.getMinimalLineHeight();
X.width=this._getTextSize().width*20;

if(this.isAutoSize()){X.height=this.__yC||X.height;
}return X;
}}});
})();
(function(){var c="password",b="qx.ui.form.PasswordField",a="input";
qx.Class.define(b,{extend:qx.ui.form.TextField,members:{_createInputElement:function(){var d=new qx.html.Input(c);
d.addListener(a,this._onHtmlInput,this);
return d;
}}});
})();

});