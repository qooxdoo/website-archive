qx.$$packageData['233114f1a281']={"locales":{},"resources":{"qx/static/blank.gif":[1,1,"gif","qx"],"widgetbrowser/blank.html":"widgetbrowser"},"translations":{}};

qx.Part.$$notifyLoad("233114f1a281", function() {
(function(){var k="slider",j="splitter",i="horizontal",h="px",g="vertical",f="knob",d="mousedown",c="mouseout",b="Integer",a="height",D="mousemove",C="move",B="maxHeight",A="resize",z="width",w="_applyOrientation",v="_applyOffset",u="splitpane",t="qx.ui.splitpane.Pane",s="top",q="minHeight",r="mouseup",o="minWidth",p="appear",m="losecapture",n="left",l="maxWidth";
qx.Class.define(t,{extend:qx.ui.core.Widget,construct:function(E){qx.ui.core.Widget.call(this);
this.__sr=[];
if(E){this.setOrientation(E);
}else{this.initOrientation();
}this.__sz.addListener(d,this._onMouseDown,this);
this.__sz.addListener(r,this._onMouseUp,this);
this.__sz.addListener(D,this._onMouseMove,this);
this.__sz.addListener(c,this._onMouseOut,this);
this.__sz.addListener(m,this._onMouseUp,this);
},properties:{appearance:{refine:true,init:u},offset:{check:b,init:6,apply:v},orientation:{init:i,check:[i,g],apply:w}},members:{__ss:null,__st:false,__su:null,__sv:null,__sw:null,__sx:null,__sy:null,__sr:null,__sz:null,_createChildControlImpl:function(F,G){var H;

switch(F){case k:H=new qx.ui.splitpane.Slider(this);
H.exclude();
this._add(H,{type:F});
break;
case j:H=new qx.ui.splitpane.Splitter(this);
this._add(H,{type:F});
H.addListener(C,this.__sA,this);
break;
}return H||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,F);
},__sA:function(e){this.__sC(e.getData());
},__sB:function(I){this.__sz=new qx.ui.splitpane.Blocker(I);
this.getContentElement().add(this.__sz);
var J=this.getChildControl(j);
var K=J.getWidth();

if(!K){J.addListenerOnce(p,function(){this.__sC();
},this);
}J.addListener(A,function(e){var L=e.getData();

if(L.height==0||L.width==0){this.__sz.hide();
}else{this.__sz.show();
}},this);
},getBlocker:function(){return this.__sz;
},_applyOrientation:function(M,N){var O=this.getChildControl(k);
var R=this.getChildControl(j);
this.__sw=M===i;

if(!this.__sz){this.__sB(M);
}this.__sz.setOrientation(M);
var Q=this._getLayout();

if(Q){Q.dispose();
}var P=M===g?new qx.ui.splitpane.VLayout:new qx.ui.splitpane.HLayout;
this._setLayout(P);
R.removeState(N);
R.addState(M);
R.getChildControl(f).removeState(N);
R.getChildControl(f).addState(M);
O.removeState(N);
O.addState(M);
qx.ui.core.queue.Manager.flush();
this.__sC();
},_applyOffset:function(S,T){this.__sC();
},__sC:function(U){var V=this.getChildControl(j);
var ba=this.getOffset();
var bb=V.getBounds();
var Y=V.getContainerElement().getDomElement();
if(!Y){return;
}if(this.__sw){var X=null;

if(U){X=U.width;
}else if(bb){X=bb.width;
}var bc=U&&U.left;

if(X){if(isNaN(bc)){bc=qx.bom.element.Location.getPosition(Y).left;
}this.__sz.setWidth(ba,X);
this.__sz.setLeft(ba,bc);
}}else{var W=null;

if(U){W=U.height;
}else if(bb){W=bb.height;
}var top=U&&U.top;

if(W){if(isNaN(top)){top=qx.bom.element.Location.getPosition(Y).top;
}this.__sz.setHeight(ba,W);
this.__sz.setTop(ba,top);
}}},add:function(bd,be){if(be==null){this._add(bd);
}else{this._add(bd,{flex:be});
}this.__sr.push(bd);
},remove:function(bf){this._remove(bf);
qx.lang.Array.remove(this.__sr,bf);
},getChildren:function(){return this.__sr;
},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}var bg=this.getChildControl(j);
var bi=bg.getContainerLocation();
var bh=this.getContentLocation();
this.__ss=this.__sw?e.getDocumentLeft()-bi.left+bh.left:e.getDocumentTop()-bi.top+bh.top;
var bk=this.getChildControl(k);
var bj=bg.getBounds();
bk.setUserBounds(bj.left,bj.top,bj.width,bj.height);
bk.setZIndex(bg.getZIndex()+1);
bk.show();
this.__st=true;
this.__sz.capture();
e.stop();
},_onMouseMove:function(e){this._setLastMousePosition(e.getDocumentLeft(),e.getDocumentTop());
if(this.__st){this.__sD();
var bl=this.getChildControl(k);
var bm=this.__sx;

if(this.__sw){bl.setDomLeft(bm);
this.__sz.setStyle(n,(bm-this.getOffset())+h);
}else{bl.setDomTop(bm);
this.__sz.setStyle(s,(bm-this.getOffset())+h);
}e.stop();
}},_onMouseOut:function(e){this._setLastMousePosition(e.getDocumentLeft(),e.getDocumentTop());
},_onMouseUp:function(e){if(!this.__st){return;
}this._finalizeSizes();
var bn=this.getChildControl(k);
bn.exclude();
this.__st=false;
this.releaseCapture();
e.stop();
},_finalizeSizes:function(){var br=this.__sx;
var bo=this.__sy;

if(br==null){return;
}var bt=this._getChildren();
var bs=bt[2];
var bp=bt[3];
var bq=bs.getLayoutProperties().flex;
var bu=bp.getLayoutProperties().flex;
if((bq!=0)&&(bu!=0)){bs.setLayoutProperties({flex:br});
bp.setLayoutProperties({flex:bo});
}else{if(this.__sw){bs.setWidth(br);
bp.setWidth(bo);
}else{bs.setHeight(br);
bp.setHeight(bo);
}}},__sD:function(){if(this.__sw){var bx=o,bE=z,by=l,bC=this.__su;
}else{var bx=q,bE=a,by=B,bC=this.__sv;
}var bD=this._getChildren();
var bv=bD[2].getSizeHint();
var bA=bD[3].getSizeHint();
var bB=bD[2].getBounds()[bE]+bD[3].getBounds()[bE];
var bz=bC-this.__ss;
var bw=bB-bz;
if(bz<bv[bx]){bw-=bv[bx]-bz;
bz=bv[bx];
}else if(bw<bA[bx]){bz-=bA[bx]-bw;
bw=bA[bx];
}if(bz>bv[by]){bw+=bz-bv[by];
bz=bv[by];
}else if(bw>bA[by]){bz+=bw-bA[by];
bw=bA[by];
}this.__sx=bz;
this.__sy=bw;
},_isActiveDragSession:function(){return this.__st;
},_setLastMousePosition:function(x,y){this.__su=x;
this.__sv=y;
}},destruct:function(){this.__sr=null;
}});
})();
(function(){var u="px",t="horizontal",s="top",r="height",q="width",p="100%",o="left",n="cursor",m="mshtml",l="engine.name",e="repeat",k="_applyOrientation",h="url(",c="qx.ui.splitpane.Blocker",b=")",g="col-resize",f="row-resize",i="div",a="vertical",j="qx/static/blank.gif",d="absolute";
qx.Class.define(c,{extend:qx.html.Element,construct:function(v){var w={position:d,zIndex:11};
if((qx.core.Environment.get(l)==m)){w.backgroundImage=h+qx.util.ResourceManager.getInstance().toUri(j)+b;
w.backgroundRepeat=e;
}qx.html.Element.call(this,i,w);
if(v){this.setOrientation(v);
}else{this.initOrientation();
}},properties:{orientation:{init:t,check:[t,a],apply:k}},members:{_applyOrientation:function(x,y){if(x==t){this.setStyle(r,p);
this.setStyle(n,g);
this.setStyle(s,null);
}else{this.setStyle(q,p);
this.setStyle(o,null);
this.setStyle(n,f);
}},setWidth:function(z,A){var B=A+2*z;
this.setStyle(q,B+u);
},setHeight:function(C,D){var E=D+2*C;
this.setStyle(r,E+u);
},setLeft:function(F,G){var H=G-F;
this.setStyle(o,H+u);
},setTop:function(I,J){var top=J-I;
this.setStyle(s,top+u);
}}});
})();
(function(){var c="slider",b="splitter",a="qx.ui.splitpane.VLayout";
qx.Class.define(a,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(d,e){var v=this._getLayoutChildren();
var length=v.length;
var r,u;
var g,f,p,h;

for(var i=0;i<length;i++){r=v[i];
u=r.getLayoutProperties().type;

if(u===b){f=r;
}else if(u===c){p=r;
}else if(!g){g=r;
}else{h=r;
}}
if(g&&h){var x=g.getLayoutProperties().flex;
var k=h.getLayoutProperties().flex;

if(x==null){x=1;
}
if(k==null){k=1;
}var w=g.getSizeHint();
var n=f.getSizeHint();
var o=h.getSizeHint();
var j=w.height;
var s=n.height;
var t=o.height;

if(x>0&&k>0){var l=x+k;
var m=e-s;
var j=Math.round((m/l)*x);
var t=m-j;
var q=qx.ui.layout.Util.arrangeIdeals(w.minHeight,j,w.maxHeight,o.minHeight,t,o.maxHeight);
j=q.begin;
t=q.end;
}else if(x>0){j=e-s-t;

if(j<w.minHeight){j=w.minHeight;
}
if(j>w.maxHeight){j=w.maxHeight;
}}else if(k>0){t=e-j-s;

if(t<o.minHeight){t=o.minHeight;
}
if(t>o.maxHeight){t=o.maxHeight;
}}g.renderLayout(0,0,d,j);
f.renderLayout(0,j,d,s);
h.renderLayout(0,j+s,d,t);
}else{f.renderLayout(0,0,0,0);
if(g){g.renderLayout(0,0,d,e);
}else if(h){h.renderLayout(0,0,d,e);
}}},_computeSizeHint:function(){var H=this._getLayoutChildren();
var length=H.length;
var A,z,G;
var B=0,D=0,C=0;
var E=0,F=0,y=0;

for(var i=0;i<length;i++){A=H[i];
G=A.getLayoutProperties();
if(G.type===c){continue;
}z=A.getSizeHint();
B+=z.minHeight;
D+=z.height;
C+=z.maxHeight;

if(z.minWidth>E){E=z.minWidth;
}
if(z.width>F){F=z.width;
}
if(z.maxWidth>y){y=z.maxWidth;
}}return {minHeight:B,height:D,maxHeight:C,minWidth:E,width:F,maxWidth:y};
}}});
})();
(function(){var e="Iframe",d="horizontal",c="widgetbrowser/blank.html",b="widgetbrowser.pages.EmbedFrame",a="ThemedIframe";
qx.Class.define(b,{extend:widgetbrowser.pages.AbstractPage,construct:function(){widgetbrowser.pages.AbstractPage.call(this);
this.setLayout(new qx.ui.layout.Canvas(10));
this.initWidgets();
},members:{initWidgets:function(){var l=this._widgets;
var j,m,f;
var g=qx.util.ResourceManager.getInstance().toUri(c);
var i=new qx.ui.splitpane.Pane(d);
this.add(i);
j=new qx.ui.basic.Label(e);
m=new qx.ui.container.Composite(new qx.ui.layout.Canvas());
var k=new qx.ui.embed.Iframe().set({source:g,width:300,height:200});
l.push(k);
m.add(j,{top:0,left:5});
m.add(k,{top:20,left:0,right:0});
j=new qx.ui.basic.Label(a);
f=new qx.ui.container.Composite(new qx.ui.layout.Canvas());
var h=new qx.ui.embed.ThemedIframe().set({source:g,width:300,height:200});
l.push(h);
f.add(j,{top:0,left:5});
f.add(h,{top:20,left:0,right:0});
i.add(m);
i.add(f);
}}});
})();
(function(){var d="horizontal",c="mousewheel",b="qx.ui.core.scroll.ScrollSlider",a="keypress";
qx.Class.define(b,{extend:qx.ui.form.Slider,construct:function(e){qx.ui.form.Slider.call(this,e);
this.removeListener(a,this._onKeyPress);
this.removeListener(c,this._onMouseWheel);
},members:{getSizeHint:function(f){var g=qx.ui.form.Slider.prototype.getSizeHint.call(this);
if(this.getOrientation()===d){g.width=0;
}else{g.height=0;
}return g;
}}});
})();
(function(){var h="source",g="name",f="qx.event.type.Event",d="iframe",c="qx.html.Iframe",b="navigate",a="qx.event.type.Data";
qx.Class.define(c,{extend:qx.html.Element,construct:function(i,j,k){qx.html.Element.call(this,d,j,k);
this.setSource(i);
this.addListener(b,this.__JE,this);
},events:{"load":f,"navigate":a},members:{_applyProperty:function(name,l){qx.html.Element.prototype._applyProperty.call(this,name,l);

if(name==h){var n=this.getDomElement();
var m=qx.bom.Iframe.queryCurrentUrl(n);
if(l==m){return;
}qx.bom.Iframe.setSource(n,l);
}},_createDomElement:function(){return qx.bom.Iframe.create(this._content);
},getWindow:function(){var o=this.getDomElement();

if(o){return qx.bom.Iframe.getWindow(o);
}else{return null;
}},getDocument:function(){var p=this.getDomElement();

if(p){return qx.bom.Iframe.getDocument(p);
}else{return null;
}},getBody:function(){var q=this.getDomElement();

if(q){return qx.bom.Iframe.getBody(q);
}else{return null;
}},setSource:function(r){this._setProperty(h,r);
return this;
},getSource:function(){return this._getProperty(h);
},setName:function(name){this.setAttribute(g,name);
return this;
},getName:function(){return this.getAttribute(g);
},reload:function(){var t=this.getDomElement();

if(t){var s=this.getSource();
this.setSource(null);
this.setSource(s);
}},__JE:function(e){var u=e.getData();

if(u){this.setSource(u);
}}}});
})();
(function(){var a="qx.ui.splitpane.Slider";
qx.Class.define(a,{extend:qx.ui.core.Widget,properties:{allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false}}});
})();
(function(){var j="navigate",i="String",h="qx.ui.embed.AbstractIframe",g="name",f="",d="_applySource",c="qx.event.type.Event",b="_applyFrameName",a="qx.event.type.Data";
qx.Class.define(h,{extend:qx.ui.core.Widget,construct:function(k){qx.ui.core.Widget.call(this);

if(k){this.setSource(k);
}this._getIframeElement().addListener(j,this.__Jz,this);
},events:{"load":c,"navigate":a},properties:{source:{check:i,apply:d,nullable:true},frameName:{check:i,init:f,apply:b}},members:{_getIframeElement:function(){throw new Error("Abstract method call");
},_applySource:function(l,m){this._getIframeElement().setSource(l);
},_applyFrameName:function(n,o){this._getIframeElement().setAttribute(g,n);
},getWindow:function(){return this._getIframeElement().getWindow();
},getDocument:function(){return this._getIframeElement().getDocument();
},getBody:function(){return this._getIframeElement().getBody();
},getName:function(){return this._getIframeElement().getName();
},reload:function(){this._getIframeElement().reload();
},__Jz:function(e){var p=e.getData();

if(p){this.setSource(p);
}this.fireDataEvent(j,p);
}}});
})();
(function(){var k="mousedown",j="load",i="help",h="engine.name",g="mouseup",f="losecapture",d="contextmenu",c="none",b="display",a="no",z="Boolean",y="px",x="gecko",w="auto",v="_applyScrollbar",u="DOMNodeInserted",t="_applyNativeHelp",s="yes",r="scrolling",q="/",o="appear",p="block",m="qx.ui.embed.Iframe",n="iframe",l="__JD";
qx.Class.define(m,{extend:qx.ui.embed.AbstractIframe,construct:function(A){if(A!=null){this.__JC=A;
}qx.ui.embed.AbstractIframe.call(this,A);
qx.event.Registration.addListener(document.body,k,this.block,this,true);
qx.event.Registration.addListener(document.body,g,this.release,this,true);
qx.event.Registration.addListener(document.body,f,this.release,this,true);
this.__JD=this._createBlockerElement();
this.getContainerElement().add(this.__JD);

if((qx.core.Environment.get(h)==x)){this.addListenerOnce(o,function(e){var B=this.getContainerElement().getDomElement();
qx.bom.Event.addNativeListener(B,u,this._onDOMNodeInserted);
});
this._onDOMNodeInserted=qx.lang.Function.listener(this._syncSourceAfterDOMMove,this);
}},properties:{appearance:{refine:true,init:n},nativeContextMenu:{refine:true,init:false},nativeHelp:{check:z,init:false,apply:t},scrollbar:{check:[w,a,s],nullable:true,themeable:true,apply:v}},members:{__JC:null,__JD:null,renderLayout:function(C,top,D,E){qx.ui.embed.AbstractIframe.prototype.renderLayout.call(this,C,top,D,E);
var G=y;
var F=this.getInsets();
this.__JD.setStyles({"left":F.left+G,"top":F.top+G,"width":(D-F.left-F.right)+G,"height":(E-F.top-F.bottom)+G});
},_createContentElement:function(){var H=new qx.html.Iframe(this.__JC);
H.addListener(j,this._onIframeLoad,this);
return H;
},_getIframeElement:function(){return this.getContentElement();
},_createBlockerElement:function(){var I=new qx.html.Blocker();
I.setStyles({"zIndex":20,"display":c});
return I;
},_onIframeLoad:function(e){this._applyNativeContextMenu(this.getNativeContextMenu(),null);
this._applyNativeHelp(this.getNativeHelp(),null);
this.fireNonBubblingEvent(j);
},block:function(){this.__JD.setStyle(b,p);
},release:function(){this.__JD.setStyle(b,c);
},_applyNativeContextMenu:function(J,K){if(J!==false&&K!==false){return;
}var L=this.getDocument();

if(!L){return;
}
try{var M=L.documentElement;
}catch(e){return ;
}
if(K===false){qx.event.Registration.removeListener(M,d,this._onNativeContextMenu,this,true);
}
if(J===false){qx.event.Registration.addListener(M,d,this._onNativeContextMenu,this,true);
}},_onNativeContextMenu:function(e){e.preventDefault();
},_applyNativeHelp:qx.core.Environment.select(h,{"mshtml":function(N,O){var document=this.getDocument();

if(!document){return;
}
try{if(O===false){qx.bom.Event.removeNativeListener(document,i,qx.lang.Function.returnFalse);
}
if(N===false){qx.bom.Event.addNativeListener(document,i,qx.lang.Function.returnFalse);
}}catch(e){}},"default":function(){}}),_syncSourceAfterDOMMove:function(){var Q=this.getContentElement().getDomElement();
var P=Q.src;
if(P.charAt(P.length-1)==q){P=P.substring(0,P.length-1);
}
if(P!=this.getSource()){qx.bom.Iframe.getWindow(Q).stop();
Q.src=this.getSource();
}},_applyScrollbar:function(R){this.getContentElement().setAttribute(r,R);
}},destruct:function(){this._disposeObjects(l);
qx.event.Registration.removeListener(document.body,k,this.block,this,true);
qx.event.Registration.removeListener(document.body,g,this.release,this,true);
qx.event.Registration.removeListener(document.body,f,this.release,this,true);
}});
})();
(function(){var c="slider",b="splitter",a="qx.ui.splitpane.HLayout";
qx.Class.define(a,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(d,e){var v=this._getLayoutChildren();
var length=v.length;
var s,u;
var g,f,p,h;

for(var i=0;i<length;i++){s=v[i];
u=s.getLayoutProperties().type;

if(u===b){f=s;
}else if(u===c){p=s;
}else if(!g){g=s;
}else{h=s;
}}
if(g&&h){var x=g.getLayoutProperties().flex;
var j=h.getLayoutProperties().flex;

if(x==null){x=1;
}
if(j==null){j=1;
}var w=g.getSizeHint();
var m=f.getSizeHint();
var o=h.getSizeHint();
var t=w.width;
var r=m.width;
var q=o.width;

if(x>0&&j>0){var k=x+j;
var l=d-r;
var t=Math.round((l/k)*x);
var q=l-t;
var n=qx.ui.layout.Util.arrangeIdeals(w.minWidth,t,w.maxWidth,o.minWidth,q,o.maxWidth);
t=n.begin;
q=n.end;
}else if(x>0){t=d-r-q;

if(t<w.minWidth){t=w.minWidth;
}
if(t>w.maxWidth){t=w.maxWidth;
}}else if(j>0){q=d-t-r;

if(q<o.minWidth){q=o.minWidth;
}
if(q>o.maxWidth){q=o.maxWidth;
}}g.renderLayout(0,0,t,e);
f.renderLayout(t,0,r,e);
h.renderLayout(t+r,0,q,e);
}else{f.renderLayout(0,0,0,0);
if(g){g.renderLayout(0,0,d,e);
}else if(h){h.renderLayout(0,0,d,e);
}}},_computeSizeHint:function(){var H=this._getLayoutChildren();
var length=H.length;
var A,z,G;
var E=0,F=0,y=0;
var B=0,D=0,C=0;

for(var i=0;i<length;i++){A=H[i];
G=A.getLayoutProperties();
if(G.type===c){continue;
}z=A.getSizeHint();
E+=z.minWidth;
F+=z.width;
y+=z.maxWidth;

if(z.minHeight>B){B=z.minHeight;
}
if(z.height>D){D=z.height;
}
if(z.maxHeight>C){C=z.maxHeight;
}}return {minWidth:E,width:F,maxWidth:y,minHeight:B,height:D,maxHeight:C};
}}});
})();
(function(){var e="center",d="knob",c="middle",b="qx.ui.splitpane.Splitter",a="vertical";
qx.Class.define(b,{extend:qx.ui.core.Widget,construct:function(f){qx.ui.core.Widget.call(this);
if(f.getOrientation()==a){this._setLayout(new qx.ui.layout.HBox(0,e));
this._getLayout().setAlignY(c);
}else{this._setLayout(new qx.ui.layout.VBox(0,c));
this._getLayout().setAlignX(e);
}this._createChildControl(d);
},properties:{allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{_createChildControlImpl:function(g,h){var i;

switch(g){case d:i=new qx.ui.basic.Image;
this._add(i);
break;
}return i||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,g);
}}});
})();
(function(){var k="slider",j="horizontal",i="button-begin",h="vertical",g="button-end",f="Integer",d="execute",c="right",b="left",a="down",z="up",y="PositiveNumber",x="changeValue",w="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getMaximum()",v="_applyKnobFactor",u="knob",t="qx.ui.core.scroll.ScrollBar",s="resize",r="_applyOrientation",q="_applyPageStep",o="PositiveInteger",p="scroll",m="_applyPosition",n="scrollbar",l="_applyMaximum";
qx.Class.define(t,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(A){qx.ui.core.Widget.call(this);
this._createChildControl(i);
this._createChildControl(k).addListener(s,this._onResizeSlider,this);
this._createChildControl(g);
if(A!=null){this.setOrientation(A);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:n},orientation:{check:[j,h],init:j,apply:r},maximum:{check:o,apply:l,init:100},position:{check:w,init:0,apply:m,event:p},singleStep:{check:f,init:20},pageStep:{check:f,init:10,apply:q},knobFactor:{check:y,apply:v,nullable:true}},members:{__uy:2,_createChildControlImpl:function(B,C){var D;

switch(B){case k:D=new qx.ui.core.scroll.ScrollSlider();
D.setPageStep(100);
D.setFocusable(false);
D.addListener(x,this._onChangeSliderValue,this);
this._add(D,{flex:1});
break;
case i:D=new qx.ui.form.RepeatButton();
D.setFocusable(false);
D.addListener(d,this._onExecuteBegin,this);
this._add(D);
break;
case g:D=new qx.ui.form.RepeatButton();
D.setFocusable(false);
D.addListener(d,this._onExecuteEnd,this);
this._add(D);
break;
}return D||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,B);
},_applyMaximum:function(E){this.getChildControl(k).setMaximum(E);
},_applyPosition:function(F){this.getChildControl(k).setValue(F);
},_applyKnobFactor:function(G){this.getChildControl(k).setKnobFactor(G);
},_applyPageStep:function(H){this.getChildControl(k).setPageStep(H);
},_applyOrientation:function(I,J){var K=this._getLayout();

if(K){K.dispose();
}if(I===j){this._setLayout(new qx.ui.layout.HBox());
this.setAllowStretchX(true);
this.setAllowStretchY(false);
this.replaceState(h,j);
this.getChildControl(i).replaceState(z,b);
this.getChildControl(g).replaceState(a,c);
}else{this._setLayout(new qx.ui.layout.VBox());
this.setAllowStretchX(false);
this.setAllowStretchY(true);
this.replaceState(j,h);
this.getChildControl(i).replaceState(b,z);
this.getChildControl(g).replaceState(c,a);
}this.getChildControl(k).setOrientation(I);
},scrollTo:function(L){this.getChildControl(k).slideTo(L);
},scrollBy:function(M){this.getChildControl(k).slideBy(M);
},scrollBySteps:function(N){var O=this.getSingleStep();
this.getChildControl(k).slideBy(N*O);
},_onExecuteBegin:function(e){this.scrollBy(-this.getSingleStep());
},_onExecuteEnd:function(e){this.scrollBy(this.getSingleStep());
},_onChangeSliderValue:function(e){this.setPosition(e.getData());
},_onResizeSlider:function(e){var P=this.getChildControl(k).getChildControl(u);
var S=P.getSizeHint();
var Q=false;
var R=this.getChildControl(k).getInnerSize();

if(this.getOrientation()==h){if(R.height<S.minHeight+this.__uy){Q=true;
}}else{if(R.width<S.minWidth+this.__uy){Q=true;
}}
if(Q){P.exclude();
}else{P.show();
}}}});
})();
(function(){var t="auto",s="scrollbar-y",r="iframe",q="corner",p="on",o="scrollbar-x",n="scroll",m="hidden",l="_updateScrollbars",k="load",d="off",j="resize",h="horizontal",c="mousewheel",b="qx.ui.embed.ThemedIframe",g="scrollbarX",f="scrollbarY",i="scrollarea",a="vertical";
qx.Class.define(b,{extend:qx.ui.embed.AbstractIframe,construct:function(u){qx.ui.embed.AbstractIframe.call(this,u);
var v=new qx.ui.layout.Grid();
v.setColumnFlex(0,1);
v.setRowFlex(0,1);
this._setLayout(v);
this._showChildControl(r);
},properties:{appearance:{refine:true,init:i},scrollbarX:{check:[t,p,d],init:t,themeable:true,apply:l},scrollbarY:{check:[t,p,d],init:t,themeable:true,apply:l},scrollbar:{group:[g,f]}},members:{__JA:null,__JB:null,_getIframeElement:function(){return this.getChildControl(r).getContentElement();
},_createChildControlImpl:function(w,z){var A;

switch(w){case r:A=new qx.ui.embed.Iframe(this.getSource());
A.addListener(k,this._onIframeLoad,this);
A.addListener(j,this._onIframeResize,this);
this._add(A,{row:0,column:0});
break;
case o:A=new qx.ui.core.scroll.ScrollBar(h);
A.setMinWidth(0);
A.exclude();
A.addListener(n,this._onScrollBarX,this);
this._add(A,{row:1,column:0});
break;
case s:A=new qx.ui.core.scroll.ScrollBar(a);
A.setMinHeight(0);
A.exclude();
A.addListener(n,this._onScrollBarY,this);
this._add(A,{row:0,column:1});
break;
case q:A=new qx.ui.core.Widget();
A.setWidth(0);
A.setHeight(0);
A.exclude();
this._add(A,{row:1,column:1});
break;
}return A||qx.ui.embed.AbstractIframe.prototype._createChildControlImpl.call(this,w);
},_onIframeLoad:function(){this._disableScollbars();
var B=this._getIframeElement().getBody();

if(B){this._startIframeObserver();
this._addWheelListener();
}this.fireEvent(k);
},_onIframeResize:function(){this._updateScrollbars();
},_disableScollbars:function(){this._excludeChildControl(o);
this._excludeChildControl(s);
this._excludeChildControl(q);
this._stopIframeObserver();
},_addWheelListener:function(){try{var C=this._getIframeElement().getBody();
qx.bom.Element.addListener(C,c,this._onMouseWheel,this);
}catch(e){this._disableScollbars();
}},_onMouseWheel:function(e){var E=this._isChildControlVisible(s)&&this.getChildControl(s).isEnabled();

if(!E){return;
}var D=this.getChildControl(s,true);
D.scrollBySteps(parseInt(e.getWheelDelta()));
e.stop();
},_startIframeObserver:function(){if(this.__JB){this._stopIframeObserver();
}var F=qx.event.Idle.getInstance();
this.__JB=F.addListener("interval",this._onIframeObserverInterval,this);
},_stopIframeObserver:function(){this.__JA=null;

if(!this.__JB){return;
}var G=qx.event.Idle.getInstance();
G.removeListenerById(this.__JB);
},_onIframeObserverInterval:function(){var H=this._getIframeSize();

if(!H){this._disableScollbars();
return;
}
if(this.__JA&&H.width==this.__JA.width&&H.height==this.__JA.height){return;
}this.__JA=H;
this._preventIframeScrolling();
this._updateScrollbars();
},_preventIframeScrolling:function(){try{var I=this._getIframeElement().getWindow();
var J=this._getIframeElement().getDocument();

if(qx.bom.Document.isStandardMode(I)){J.documentElement.style.overflow=m;
}else{J.body.style.overflow=m;
}}catch(e){this._disableScollbars();
}},_updateScrollbars:function(){var K=this.__JA;
var N=this.getChildControl(r).getBounds();
var L=this.getChildControl(r).getInnerSize();

if(!K||!L||!L){return;
}var M=false;
var Q=false;
var O=this.getScrollbarX();
var P=this.getScrollbarY();

if(O===t&&P===t){var M=K.width>L.width;
var Q=K.height>L.height;
if((M||Q)&&!(M&&Q)){if(M){Q=K.height>N.height;
}else if(Q){M=K.width>N.width;
}}}else{var M=O===p;
var Q=P===p;
if(K.width>(M?N.width:L.width)&&O===t){M=true;
}
if(K.height>(M?N.height:L.height)&&P===t){Q=true;
}}this._configureScrollbar(o,M,L.width,K.width);
this._configureScrollbar(s,Q,L.height,K.height);
this._updateCornerWidget();
},_getIframeSize:function(){try{var R=this._getIframeElement().getWindow();
var S={width:qx.bom.Document.getWidth(R),height:qx.bom.Document.getHeight(R)};
return S;
}catch(e){return null;
}},_updateCornerWidget:function(){if(this._isChildControlVisible(o)&&this._isChildControlVisible(s)){this._showChildControl(q);
}else{this._excludeChildControl(q);
}},_configureScrollbar:function(T,U,V,W){if(!U){this._excludeChildControl(T);
return;
}var X=this._showChildControl(T);

if(V>=W){X.set({position:0,maximum:W,knobFactor:1,enabled:false});
}else{X.setMaximum(1000000);
X.set({position:Math.min(X.getPosition(),W),maximum:W-V,knobFactor:V/W,enabled:true});
}},_onScrollBarX:function(e){this.scrollToX(e.getData());
},_onScrollBarY:function(e){this.scrollToY(e.getData());
},scrollToX:function(x){try{var Y=this._getIframeElement().getWindow();
Y.scroll(x,qx.bom.Viewport.getScrollTop(Y));
}catch(e){this._disableScollbars();
}},scrollToY:function(y){try{var ba=this._getIframeElement().getWindow();
ba.scroll(qx.bom.Viewport.getScrollLeft(ba),y);
}catch(e){this._disableScollbars();
}}},destruct:function(){this._stopIframeObserver();
this.__JA=null;
}});
})();

});