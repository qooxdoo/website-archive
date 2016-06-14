qx.$$packageData['e0df6732c69d']={"locales":{},"resources":{},"translations":{}};

qx.Part.$$notifyLoad("e0df6732c69d", function() {
(function(){var k="Boolean",j="resize",i="mousedown",h="w-resize",g="sw-resize",f="n-resize",d="resizableRight",c="ne-resize",b="se-resize",a="Integer",z="e-resize",y="resizableLeft",x="mousemove",w="move",v="shorthand",u="maximized",t="nw-resize",s="mouseout",r="qx.ui.core.MResizable",q="mouseup",o="losecapture",p="resize-frame",m="resizableBottom",n="s-resize",l="resizableTop";
qx.Mixin.define(r,{construct:function(){var A=this.getContainerElement();
A.addListener(i,this.__qQ,this,true);
A.addListener(q,this.__qR,this);
A.addListener(x,this.__qT,this);
A.addListener(s,this.__qU,this);
A.addListener(o,this.__qS,this);
var B=this.getContainerElement().getDomElement();

if(B==null){B=window;
}this.__qC=qx.event.Registration.getManager(B).getHandler(qx.event.handler.DragDrop);
},properties:{resizableTop:{check:k,init:true},resizableRight:{check:k,init:true},resizableBottom:{check:k,init:true},resizableLeft:{check:k,init:true},resizable:{group:[l,d,m,y],mode:v},resizeSensitivity:{check:a,init:5},useResizeFrame:{check:k,init:true}},members:{__qC:null,__qD:null,__qE:null,__qF:null,__qG:null,__qH:null,__qI:null,RESIZE_TOP:1,RESIZE_BOTTOM:2,RESIZE_LEFT:4,RESIZE_RIGHT:8,__qJ:function(){var C=this.__qD;

if(!C){C=this.__qD=new qx.ui.core.Widget();
C.setAppearance(p);
C.exclude();
qx.core.Init.getApplication().getRoot().add(C);
}return C;
},__qK:function(){var location=this.__qN();
var D=this.__qJ();
D.setUserBounds(location.left,location.top,location.right-location.left,location.bottom-location.top);
D.show();
D.setZIndex(this.getZIndex()+1);
},__qL:function(e){var F=this.__qE;
var G=this.getSizeHint();
var K=this.__qI;
var J=this.__qH;
var E=J.width;
var I=J.height;
var H=J.containerWidth;
var M=J.containerHeight;
var N=J.left;
var top=J.top;
var L;

if((F&this.RESIZE_TOP)||(F&this.RESIZE_BOTTOM)){L=Math.max(K.top,Math.min(K.bottom,e.getDocumentTop()))-this.__qG;

if(F&this.RESIZE_TOP){I-=L;
M-=L;
}else{I+=L;
M+=L;
}
if(M<G.minHeight){I+=(G.minHeight-M);
M=G.minHeight;
}else if(M>G.maxHeight){I-=(G.maxHeight-M);
M=G.maxHeight;
}
if(F&this.RESIZE_TOP){top+=J.containerHeight-M;
}}
if((F&this.RESIZE_LEFT)||(F&this.RESIZE_RIGHT)){L=Math.max(K.left,Math.min(K.right,e.getDocumentLeft()))-this.__qF;

if(F&this.RESIZE_LEFT){E-=L;
H-=L;
}else{E+=L;
H+=L;
}
if(H<G.minWidth){E+=(G.minWidth-H);
H=G.minWidth;
}else if(E>G.maxWidth){E-=(G.maxWidth-H);
H=G.maxWidth;
}
if(F&this.RESIZE_LEFT){N+=J.containerWidth-H;
}}return {viewportLeft:N,viewportTop:top,parentLeft:J.bounds.left+N-J.left,parentTop:J.bounds.top+top-J.top,containerWidth:H,containerHeight:M,width:E,height:I};
},__qM:{1:f,2:n,4:h,8:z,5:t,6:g,9:c,10:b},__qN:function(){var O=this.getDecoratorElement();
if(O&&O.getDomElement()){return qx.bom.element.Location.get(O.getDomElement());
}else{return this.getContentLocation();
}},__qO:function(e){var location=this.__qN();
var P=this.getResizeSensitivity();
var S=e.getDocumentLeft();
var R=e.getDocumentTop();
var Q=this.__qP(location,S,R,P);
if(Q>0){Q=Q|this.__qP(location,S,R,P*2);
}this.__qE=Q;
},__qP:function(location,T,U,V){var W=0;
if(this.getResizableTop()&&Math.abs(location.top-U)<V&&T>location.left-V&&T<location.right+V){W+=this.RESIZE_TOP;
}else if(this.getResizableBottom()&&Math.abs(location.bottom-U)<V&&T>location.left-V&&T<location.right+V){W+=this.RESIZE_BOTTOM;
}if(this.getResizableLeft()&&Math.abs(location.left-T)<V&&U>location.top-V&&U<location.bottom+V){W+=this.RESIZE_LEFT;
}else if(this.getResizableRight()&&Math.abs(location.right-T)<V&&U>location.top-V&&U<location.bottom+V){W+=this.RESIZE_RIGHT;
}return W;
},__qQ:function(e){if(!this.__qE){return;
}this.addState(j);
this.__qF=e.getDocumentLeft();
this.__qG=e.getDocumentTop();
var bb=this.getContainerLocation();
var X=this.__qN();
var ba=this.getBounds();
this.__qH={top:X.top,left:X.left,containerWidth:bb.right-bb.left,containerHeight:bb.bottom-bb.top,width:X.right-X.left,height:X.bottom-X.top,bounds:qx.lang.Object.clone(ba)};
var parent=this.getLayoutParent();
var bc=parent.getContentLocation();
var Y=parent.getBounds();
this.__qI={left:bc.left,top:bc.top,right:bc.left+Y.width,bottom:bc.top+Y.height};
if(this.getUseResizeFrame()){this.__qK();
}this.capture();
e.stop();
},__qR:function(e){if(!this.hasState(j)){return;
}if(this.getUseResizeFrame()){this.__qJ().exclude();
}var bd=this.__qL(e);
this.setWidth(bd.containerWidth);
this.setHeight(bd.containerHeight);
if(this.getResizableLeft()||this.getResizableTop()){this.setLayoutProperties({left:bd.parentLeft,top:bd.parentTop});
}this.__qE=0;
this.removeState(j);
this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
this.releaseCapture();
e.stopPropagation();
},__qS:function(e){if(!this.__qE){return;
}this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
this.removeState(w);
if(this.getUseResizeFrame()){this.__qJ().exclude();
}},__qT:function(e){if(this.hasState(j)){var bh=this.__qL(e);
if(this.getUseResizeFrame()){var bf=this.__qJ();
bf.setUserBounds(bh.viewportLeft,bh.viewportTop,bh.width,bh.height);
}else{this.setWidth(bh.containerWidth);
this.setHeight(bh.containerHeight);
if(this.getResizableLeft()||this.getResizableTop()){this.setLayoutProperties({left:bh.parentLeft,top:bh.parentTop});
}}e.stopPropagation();
}else if(!this.hasState(u)&&!this.__qC.isSessionActive()){this.__qO(e);
var bi=this.__qE;
var bg=this.getApplicationRoot();

if(bi){var be=this.__qM[bi];
this.setCursor(be);
bg.setGlobalCursor(be);
}else if(this.getCursor()){this.resetCursor();
bg.resetGlobalCursor();
}}},__qU:function(e){if(this.getCursor()&&!this.hasState(j)){this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
}}},destruct:function(){if(this.__qD!=null&&!qx.core.ObjectRegistry.inShutDown){this.__qD.destroy();
this.__qD=null;
}this.__qC=null;
}});
})();

});