qx.$$packageData['1305']={"locales":{},"resources":{},"translations":{}};
qx.Part.$$notifyLoad("1305", function() {
(function(){var k="Boolean",j="resize",i="mousedown",h="w-resize",g="sw-resize",f="n-resize",d="resizableRight",c="ne-resize",b="se-resize",a="Integer",z="e-resize",y="resizableLeft",x="mousemove",w="move",v="shorthand",u="maximized",t="nw-resize",s="mouseout",r="qx.ui.core.MResizable",q="mouseup",o="losecapture",p="resize-frame",m="resizableBottom",n="s-resize",l="resizableTop";
qx.Mixin.define(r,{construct:function(){var A=this.getContainerElement();
A.addListener(i,this.__by,this,true);
A.addListener(q,this.__bz,this);
A.addListener(x,this.__bB,this);
A.addListener(s,this.__bC,this);
A.addListener(o,this.__bA,this);
var B=this.getContainerElement().getDomElement();

if(B==null){B=window;
}this.__bl=qx.event.Registration.getManager(B).getHandler(qx.event.handler.DragDrop);
},properties:{resizableTop:{check:k,init:true},resizableRight:{check:k,init:true},resizableBottom:{check:k,init:true},resizableLeft:{check:k,init:true},resizable:{group:[l,d,m,y],mode:v},resizeSensitivity:{check:a,init:5},useResizeFrame:{check:k,init:true}},members:{__bl:null,__bm:null,__bn:null,__bo:null,__bp:null,__bq:null,__br:null,RESIZE_TOP:1,RESIZE_BOTTOM:2,RESIZE_LEFT:4,RESIZE_RIGHT:8,_getResizeFrame:function(){var C=this.__bm;

if(!C){C=this.__bm=new qx.ui.core.Widget();
C.setAppearance(p);
C.exclude();
qx.core.Init.getApplication().getRoot().add(C);
}return C;
},__bs:function(){var location=this.__bv();
var D=this._getResizeFrame();
D.setUserBounds(location.left,location.top,location.right-location.left,location.bottom-location.top);
D.show();
D.setZIndex(this.getZIndex()+1);
},__bt:function(e){var F=this.__bn;
var G=this.getSizeHint();
var K=this.__br;
var J=this.__bq;
var E=J.width;
var I=J.height;
var H=J.containerWidth;
var M=J.containerHeight;
var N=J.left;
var top=J.top;
var L;

if((F&this.RESIZE_TOP)||(F&this.RESIZE_BOTTOM)){L=Math.max(K.top,Math.min(K.bottom,e.getDocumentTop()))-this.__bp;

if(F&this.RESIZE_TOP){I-=L;
M-=L;
}else{I+=L;
M+=L;
}
if(M<G.minHeight){I+=(G.minHeight-M);
M=G.minHeight;
}else if(M>G.maxHeight){I-=(M-G.maxHeight);
M=G.maxHeight;
}
if(F&this.RESIZE_TOP){top+=J.containerHeight-M;
}}
if((F&this.RESIZE_LEFT)||(F&this.RESIZE_RIGHT)){L=Math.max(K.left,Math.min(K.right,e.getDocumentLeft()))-this.__bo;

if(F&this.RESIZE_LEFT){E-=L;
H-=L;
}else{E+=L;
H+=L;
}
if(H<G.minWidth){E+=(G.minWidth-H);
H=G.minWidth;
}else if(E>G.maxWidth){E-=(H-G.maxWidth);
H=G.maxWidth;
}
if(F&this.RESIZE_LEFT){N+=J.containerWidth-H;
}}return {viewportLeft:N,viewportTop:top,parentLeft:J.bounds.left+N-J.left,parentTop:J.bounds.top+top-J.top,containerWidth:H,containerHeight:M,width:E,height:I};
},__bu:{1:f,2:n,4:h,8:z,5:t,6:g,9:c,10:b},__bv:function(){var O=this.getDecoratorElement();
if(O&&O.getDomElement()){return qx.bom.element.Location.get(O.getDomElement());
}else{return this.getContentLocation();
}},__bw:function(e){var location=this.__bv();
var P=this.getResizeSensitivity();
var S=e.getDocumentLeft();
var R=e.getDocumentTop();
var Q=this.__bx(location,S,R,P);
if(Q>0){Q=Q|this.__bx(location,S,R,P*2);
}this.__bn=Q;
},__bx:function(location,T,U,V){var W=0;
if(this.getResizableTop()&&Math.abs(location.top-U)<V&&T>location.left-V&&T<location.right+V){W+=this.RESIZE_TOP;
}else if(this.getResizableBottom()&&Math.abs(location.bottom-U)<V&&T>location.left-V&&T<location.right+V){W+=this.RESIZE_BOTTOM;
}if(this.getResizableLeft()&&Math.abs(location.left-T)<V&&U>location.top-V&&U<location.bottom+V){W+=this.RESIZE_LEFT;
}else if(this.getResizableRight()&&Math.abs(location.right-T)<V&&U>location.top-V&&U<location.bottom+V){W+=this.RESIZE_RIGHT;
}return W;
},__by:function(e){if(!this.__bn){return;
}this.addState(j);
this.__bo=e.getDocumentLeft();
this.__bp=e.getDocumentTop();
var bb=this.getContainerLocation();
var X=this.__bv();
var ba=this.getBounds();
this.__bq={top:X.top,left:X.left,containerWidth:bb.right-bb.left,containerHeight:bb.bottom-bb.top,width:X.right-X.left,height:X.bottom-X.top,bounds:qx.lang.Object.clone(ba)};
var parent=this.getLayoutParent();
var bc=parent.getContentLocation();
var Y=parent.getBounds();
this.__br={left:bc.left,top:bc.top,right:bc.left+Y.width,bottom:bc.top+Y.height};
if(this.getUseResizeFrame()){this.__bs();
}this.capture();
e.stop();
},__bz:function(e){if(!this.hasState(j)){return;
}if(this.getUseResizeFrame()){this._getResizeFrame().exclude();
}var bd=this.__bt(e);
this.setWidth(bd.containerWidth);
this.setHeight(bd.containerHeight);
if(this.getResizableLeft()||this.getResizableTop()){this.setLayoutProperties({left:bd.parentLeft,top:bd.parentTop});
}this.__bn=0;
this.removeState(j);
this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
this.releaseCapture();
e.stopPropagation();
},__bA:function(e){if(!this.__bn){return;
}this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
this.removeState(w);
if(this.getUseResizeFrame()){this._getResizeFrame().exclude();
}},__bB:function(e){if(this.hasState(j)){var bh=this.__bt(e);
if(this.getUseResizeFrame()){var bf=this._getResizeFrame();
bf.setUserBounds(bh.viewportLeft,bh.viewportTop,bh.width,bh.height);
}else{this.setWidth(bh.containerWidth);
this.setHeight(bh.containerHeight);
if(this.getResizableLeft()||this.getResizableTop()){this.setLayoutProperties({left:bh.parentLeft,top:bh.parentTop});
}}e.stopPropagation();
}else if(!this.hasState(u)&&!this.__bl.isSessionActive()){this.__bw(e);
var bi=this.__bn;
var bg=this.getApplicationRoot();

if(bi){var be=this.__bu[bi];
this.setCursor(be);
bg.setGlobalCursor(be);
}else if(this.getCursor()){this.resetCursor();
bg.resetGlobalCursor();
}}},__bC:function(e){if(this.getCursor()&&!this.hasState(j)){this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
}}},destruct:function(){if(this.__bm!=null&&!qx.core.ObjectRegistry.inShutDown){this.__bm.destroy();
this.__bm=null;
}this.__bl=null;
}});
})();

});