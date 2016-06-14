qx.$$packageData['32']={"locales":{},"resources":{"qx/static/blank.gif":[1,1,"gif","qx"],"widgetbrowser/blank.html":"widgetbrowser"},"translations":{}};
qx.Part.$$notifyLoad("32", function() {
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
(function(){var a="qx.ui.splitpane.Slider";
qx.Class.define(a,{extend:qx.ui.core.Widget,properties:{allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false}}});
})();
(function(){var h="source",g="name",f="qx.event.type.Event",d="iframe",c="qx.html.Iframe",b="navigate",a="qx.event.type.Data";
qx.Class.define(c,{extend:qx.html.Element,construct:function(i,j,k){qx.html.Element.call(this,d,j,k);
this.setSource(i);
this.addListener(b,this.__vp,this);
},events:{"load":f,"navigate":a},members:{_applyProperty:function(name,l){qx.html.Element.prototype._applyProperty.call(this,name,l);

if(name==h){var n=this.getDomElement();
var m=qx.bom.Iframe.queryCurrentUrl(n);
if(l===m){return;
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
}},__vp:function(e){var u=e.getData();

if(u){this.setSource(u);
}}}});
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
(function(){var k="slider",j="splitter",i="horizontal",h="px",g="vertical",f="knob",d="mousedown",c="mouseout",b="Integer",a="height",D="mousemove",C="move",B="maxHeight",A="resize",z="width",w="_applyOrientation",v="_applyOffset",u="splitpane",t="qx.ui.splitpane.Pane",s="top",q="minHeight",r="mouseup",o="minWidth",p="appear",m="losecapture",n="left",l="maxWidth";
qx.Class.define(t,{extend:qx.ui.core.Widget,construct:function(E){qx.ui.core.Widget.call(this);
this.__fv=[];
if(E){this.setOrientation(E);
}else{this.initOrientation();
}this.__jY.addListener(d,this._onMouseDown,this);
this.__jY.addListener(r,this._onMouseUp,this);
this.__jY.addListener(D,this._onMouseMove,this);
this.__jY.addListener(c,this._onMouseOut,this);
this.__jY.addListener(m,this._onMouseUp,this);
},properties:{appearance:{refine:true,init:u},offset:{check:b,init:6,apply:v},orientation:{init:i,check:[i,g],apply:w}},members:{__vq:null,__vr:false,__vs:null,__vt:null,__jg:null,__vu:null,__vv:null,__fv:null,__jY:null,_createChildControlImpl:function(F,G){var H;

switch(F){case k:H=new qx.ui.splitpane.Slider(this);
H.exclude();
this._add(H,{type:F});
break;
case j:H=new qx.ui.splitpane.Splitter(this);
this._add(H,{type:F});
H.addListener(C,this.__vw,this);
break;
}return H||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,F);
},__vw:function(e){this.__vy(e.getData());
},__vx:function(I){this.__jY=new qx.ui.splitpane.Blocker(I);
this.getContentElement().add(this.__jY);
var J=this.getChildControl(j);
var K=J.getWidth();

if(!K){J.addListenerOnce(p,function(){this.__vy();
},this);
}J.addListener(A,function(e){var L=e.getData();

if(L.height==0||L.width==0){this.__jY.hide();
}else{this.__jY.show();
}},this);
},getBlocker:function(){return this.__jY;
},_applyOrientation:function(M,N){var O=this.getChildControl(k);
var R=this.getChildControl(j);
this.__jg=M===i;

if(!this.__jY){this.__vx(M);
}this.__jY.setOrientation(M);
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
this.__vy();
},_applyOffset:function(S,T){this.__vy();
},__vy:function(U){var V=this.getChildControl(j);
var ba=this.getOffset();
var bb=V.getBounds();
var Y=V.getContainerElement().getDomElement();
if(!Y){return;
}if(this.__jg){var X=null;

if(U){X=U.width;
}else if(bb){X=bb.width;
}var bc=U&&U.left;

if(X){if(isNaN(bc)){bc=qx.bom.element.Location.getPosition(Y).left;
}this.__jY.setWidth(ba,X);
this.__jY.setLeft(ba,bc);
}}else{var W=null;

if(U){W=U.height;
}else if(bb){W=bb.height;
}var top=U&&U.top;

if(W){if(isNaN(top)){top=qx.bom.element.Location.getPosition(Y).top;
}this.__jY.setHeight(ba,W);
this.__jY.setTop(ba,top);
}}},add:function(bd,be){if(be==null){this._add(bd);
}else{this._add(bd,{flex:be});
}this.__fv.push(bd);
},remove:function(bf){this._remove(bf);
qx.lang.Array.remove(this.__fv,bf);
},getChildren:function(){return this.__fv;
},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}var bg=this.getChildControl(j);
var bi=bg.getContainerLocation();
var bh=this.getContentLocation();
this.__vq=this.__jg?e.getDocumentLeft()-bi.left+bh.left:e.getDocumentTop()-bi.top+bh.top;
var bk=this.getChildControl(k);
var bj=bg.getBounds();
bk.setUserBounds(bj.left,bj.top,bj.width,bj.height);
bk.setZIndex(bg.getZIndex()+1);
bk.show();
this.__vr=true;
this.__jY.capture();
e.stop();
},_onMouseMove:function(e){this._setLastMousePosition(e.getDocumentLeft(),e.getDocumentTop());
if(this.__vr){this.__vz();
var bl=this.getChildControl(k);
var bm=this.__vu;

if(this.__jg){bl.setDomLeft(bm);
this.__jY.setStyle(n,(bm-this.getOffset())+h);
}else{bl.setDomTop(bm);
this.__jY.setStyle(s,(bm-this.getOffset())+h);
}e.stop();
}},_onMouseOut:function(e){this._setLastMousePosition(e.getDocumentLeft(),e.getDocumentTop());
},_onMouseUp:function(e){if(!this.__vr){return;
}this._finalizeSizes();
var bn=this.getChildControl(k);
bn.exclude();
this.__vr=false;
this.releaseCapture();
e.stop();
},_finalizeSizes:function(){var br=this.__vu;
var bo=this.__vv;

if(br==null){return;
}var bt=this._getChildren();
var bs=bt[2];
var bp=bt[3];
var bq=bs.getLayoutProperties().flex;
var bu=bp.getLayoutProperties().flex;
if((bq!=0)&&(bu!=0)){bs.setLayoutProperties({flex:br});
bp.setLayoutProperties({flex:bo});
}else{if(this.__jg){bs.setWidth(br);
bp.setWidth(bo);
}else{bs.setHeight(br);
bp.setHeight(bo);
}}},__vz:function(){if(this.__jg){var bx=o,bE=z,by=l,bC=this.__vs;
}else{var bx=q,bE=a,by=B,bC=this.__vt;
}var bD=this._getChildren();
var bv=bD[2].getSizeHint();
var bA=bD[3].getSizeHint();
var bB=bD[2].getBounds()[bE]+bD[3].getBounds()[bE];
var bz=bC-this.__vq;
var bw=bB-bz;
if(bz<bv[bx]){bw-=bv[bx]-bz;
bz=bv[bx];
}else if(bw<bA[bx]){bz-=bA[bx]-bw;
bw=bA[bx];
}if(bz>bv[by]){bw+=bz-bv[by];
bz=bv[by];
}else if(bw>bA[by]){bz+=bw-bA[by];
bw=bA[by];
}this.__vu=bz;
this.__vv=bw;
},_isActiveDragSession:function(){return this.__vr;
},_setLastMousePosition:function(x,y){this.__vs=x;
this.__vt=y;
}},destruct:function(){this.__fv=null;
}});
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
(function(){var j="navigate",i="String",h="qx.ui.embed.AbstractIframe",g="name",f="",d="_applySource",c="qx.event.type.Event",b="_applyFrameName",a="qx.event.type.Data";
qx.Class.define(h,{extend:qx.ui.core.Widget,construct:function(k){qx.ui.core.Widget.call(this);

if(k){this.setSource(k);
}this._getIframeElement().addListener(j,this.__vp,this);
},events:{"load":c,"navigate":a},properties:{source:{check:i,apply:d,nullable:true},frameName:{check:i,init:f,apply:b}},members:{_getIframeElement:function(){throw new Error("Abstract method call");
},_applySource:function(l,m){this._getIframeElement().setSource(l);
},_applyFrameName:function(n,o){this._getIframeElement().setAttribute(g,n);
},getWindow:function(){return this._getIframeElement().getWindow();
},getDocument:function(){return this._getIframeElement().getDocument();
},getBody:function(){return this._getIframeElement().getBody();
},getName:function(){return this._getIframeElement().getName();
},reload:function(){this._getIframeElement().reload();
},__vp:function(e){var p=e.getData();

if(p){this.setSource(p);
}this.fireDataEvent(j,p);
}}});
})();
(function(){var u="auto",t="iframe",s="scrollbar-y",r="corner",q="on",p="scrollbar-x",o="scroll",n="hidden",m="_updateScrollbars",l="load",d="off",k="resize",h="interval",c="horizontal",b="mousewheel",g="qx.ui.embed.ThemedIframe",f="scrollbarX",i="scrollbarY",a="scrollarea",j="vertical";
qx.Class.define(g,{extend:qx.ui.embed.AbstractIframe,include:qx.ui.core.scroll.MWheelHandling,construct:function(v){qx.ui.embed.AbstractIframe.call(this,v);
var w=new qx.ui.layout.Grid();
w.setColumnFlex(0,1);
w.setRowFlex(0,1);
this._setLayout(w);
this._showChildControl(t);
},properties:{appearance:{refine:true,init:a},scrollbarX:{check:[u,q,d],init:u,themeable:true,apply:m},scrollbarY:{check:[u,q,d],init:u,themeable:true,apply:m},scrollbar:{group:[f,i]}},members:{__vA:null,__vB:null,_getIframeElement:function(){return this.getChildControl(t).getContentElement();
},_createChildControlImpl:function(z,A){var B;

switch(z){case t:B=new qx.ui.embed.Iframe(this.getSource());
B.addListener(l,this._onIframeLoad,this);
B.addListener(k,this._onIframeResize,this);
this._add(B,{row:0,column:0});
break;
case p:B=new qx.ui.core.scroll.ScrollBar(c);
B.setMinWidth(0);
B.exclude();
B.addListener(o,this._onScrollBarX,this);
this._add(B,{row:1,column:0});
break;
case s:B=new qx.ui.core.scroll.ScrollBar(j);
B.setMinHeight(0);
B.exclude();
B.addListener(o,this._onScrollBarY,this);
this._add(B,{row:0,column:1});
break;
case r:B=new qx.ui.core.Widget();
B.setWidth(0);
B.setHeight(0);
B.exclude();
this._add(B,{row:1,column:1});
break;
}return B||qx.ui.embed.AbstractIframe.prototype._createChildControlImpl.call(this,z);
},_onIframeLoad:function(){this._disableScollbars();
var C=this._getIframeElement().getBody();

if(C){this._startIframeObserver();
this._addWheelListener();
}this.fireEvent(l);
},_onIframeResize:function(){this._updateScrollbars();
},_disableScollbars:function(){this._excludeChildControl(p);
this._excludeChildControl(s);
this._excludeChildControl(r);
this._stopIframeObserver();
},_addWheelListener:function(){try{var D=this._getIframeElement().getBody();
qx.bom.Element.addListener(D,b,this._onMouseWheel,this);
}catch(e){this._disableScollbars();
}},_startIframeObserver:function(){if(this.__vB){this._stopIframeObserver();
}var E=qx.event.Idle.getInstance();
this.__vB=E.addListener(h,this._onIframeObserverInterval,this);
},_stopIframeObserver:function(){this.__vA=null;

if(!this.__vB){return;
}var F=qx.event.Idle.getInstance();
F.removeListenerById(this.__vB);
},_onIframeObserverInterval:function(){var G=this._getIframeSize();

if(!G){this._disableScollbars();
return;
}
if(this.__vA&&G.width==this.__vA.width&&G.height==this.__vA.height){return;
}this.__vA=G;
this._preventIframeScrolling();
this._updateScrollbars();
},_preventIframeScrolling:function(){try{var H=this._getIframeElement().getWindow();
var I=this._getIframeElement().getDocument();

if(qx.bom.Document.isStandardMode(H)){I.documentElement.style.overflow=n;
}else{I.body.style.overflow=n;
}}catch(e){this._disableScollbars();
}},_updateScrollbars:function(){var J=this.__vA;
var M=this.getChildControl(t).getBounds();
var K=this.getChildControl(t).getInnerSize();

if(!J||!K||!K){return;
}var L=false;
var P=false;
var N=this.getScrollbarX();
var O=this.getScrollbarY();

if(N===u&&O===u){var L=J.width>K.width;
var P=J.height>K.height;
if((L||P)&&!(L&&P)){if(L){P=J.height>M.height;
}else if(P){L=J.width>M.width;
}}}else{var L=N===q;
var P=O===q;
if(J.width>(L?M.width:K.width)&&N===u){L=true;
}
if(J.height>(L?M.height:K.height)&&O===u){P=true;
}}this._configureScrollbar(p,L,K.width,J.width);
this._configureScrollbar(s,P,K.height,J.height);
this._updateCornerWidget();
},_getIframeSize:function(){try{var Q=this._getIframeElement().getWindow();
var R={width:qx.bom.Document.getWidth(Q),height:qx.bom.Document.getHeight(Q)};
return R;
}catch(e){return null;
}},_updateCornerWidget:function(){if(this._isChildControlVisible(p)&&this._isChildControlVisible(s)){this._showChildControl(r);
}else{this._excludeChildControl(r);
}},_configureScrollbar:function(S,T,U,V){if(!T){this._excludeChildControl(S);
return;
}var W=this._showChildControl(S);

if(U>=V){W.set({position:0,maximum:V,knobFactor:1,enabled:false});
}else{W.setMaximum(1000000);
W.set({position:Math.min(W.getPosition(),V),maximum:V-U,knobFactor:U/V,enabled:true});
}},_onScrollBarX:function(e){this.scrollToX(e.getData());
},_onScrollBarY:function(e){this.scrollToY(e.getData());
},scrollToX:function(x){try{var X=this._getIframeElement().getWindow();
X.scroll(x,qx.bom.Viewport.getScrollTop(X));
}catch(e){this._disableScollbars();
}},scrollToY:function(y){try{var Y=this._getIframeElement().getWindow();
Y.scroll(qx.bom.Viewport.getScrollLeft(Y),y);
}catch(e){this._disableScollbars();
}}},destruct:function(){this._stopIframeObserver();
this.__vA=null;
}});
})();
(function(){var k="mousedown",j="load",i="help",h="engine.name",g="mouseup",f="losecapture",d="contextmenu",c="none",b="display",a="no",z="Boolean",y="px",x="gecko",w="auto",v="_applyScrollbar",u="DOMNodeInserted",t="_applyNativeHelp",s="yes",r="scrolling",q="/",o="__vD",p="appear",m="block",n="qx.ui.embed.Iframe",l="iframe";
qx.Class.define(n,{extend:qx.ui.embed.AbstractIframe,construct:function(A){if(A!=null){this.__vC=A;
}qx.ui.embed.AbstractIframe.call(this,A);
qx.event.Registration.addListener(document.body,k,this.block,this,true);
qx.event.Registration.addListener(document.body,g,this.release,this,true);
qx.event.Registration.addListener(document.body,f,this.release,this,true);
this.__vD=this._createBlockerElement();
this.getContainerElement().add(this.__vD);

if((qx.core.Environment.get(h)==x)){this.addListenerOnce(p,function(e){var B=this.getContainerElement().getDomElement();
qx.bom.Event.addNativeListener(B,u,this._onDOMNodeInserted);
});
this._onDOMNodeInserted=qx.lang.Function.listener(this._syncSourceAfterDOMMove,this);
}},properties:{appearance:{refine:true,init:l},nativeContextMenu:{refine:true,init:false},nativeHelp:{check:z,init:false,apply:t},scrollbar:{check:[w,a,s],nullable:true,themeable:true,apply:v}},members:{__vC:null,__vD:null,renderLayout:function(C,top,D,E){qx.ui.embed.AbstractIframe.prototype.renderLayout.call(this,C,top,D,E);
var G=y;
var F=this.getInsets();
this.__vD.setStyles({"left":F.left+G,"top":F.top+G,"width":(D-F.left-F.right)+G,"height":(E-F.top-F.bottom)+G});
},_createContentElement:function(){var H=new qx.html.Iframe(this.__vC);
H.addListener(j,this._onIframeLoad,this);
return H;
},_getIframeElement:function(){return this.getContentElement();
},_createBlockerElement:function(){var I=new qx.html.Blocker();
I.setStyles({"zIndex":20,"display":c});
return I;
},_onIframeLoad:function(e){this._applyNativeContextMenu(this.getNativeContextMenu(),null);
this._applyNativeHelp(this.getNativeHelp(),null);
this.fireNonBubblingEvent(j);
},block:function(){this.__vD.setStyle(b,m);
},release:function(){this.__vD.setStyle(b,c);
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
}},destruct:function(){this._disposeObjects(o);
qx.event.Registration.removeListener(document.body,k,this.block,this,true);
qx.event.Registration.removeListener(document.body,g,this.release,this,true);
qx.event.Registration.removeListener(document.body,f,this.release,this,true);
}});
})();

});