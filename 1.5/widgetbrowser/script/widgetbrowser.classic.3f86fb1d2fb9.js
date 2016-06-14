qx.$$packageData['16']={"locales":{},"resources":{"qx/icon/Oxygen/16/places/folder.png":[16,16,"png","qx"],"qx/icon/Oxygen/32/apps/media-photo-album.png":[32,32,"png","qx"],"qx/icon/Oxygen/48/devices/audio-card.png":[48,48,"png","qx"],"qx/icon/Oxygen/48/devices/audio-input-microphone.png":[48,48,"png","qx"],"qx/icon/Oxygen/48/devices/battery.png":[48,48,"png","qx"],"qx/icon/Oxygen/48/devices/camera-photo.png":[48,48,"png","qx"],"qx/icon/Oxygen/48/devices/camera-web.png":[48,48,"png","qx"],"qx/icon/Oxygen/48/devices/computer.png":[48,48,"png","qx"],"qx/icon/Oxygen/48/devices/display.png":[48,48,"png","qx"],"qx/icon/Oxygen/48/devices/drive-harddisk.png":[48,48,"png","qx"],"qx/icon/Oxygen/48/devices/drive-optical.png":[48,48,"png","qx"],"qx/icon/Oxygen/48/devices/input-keyboard.png":[48,48,"png","qx"],"qx/icon/Oxygen/48/devices/input-mouse.png":[48,48,"png","qx"],"qx/icon/Oxygen/48/devices/media-flash.png":[48,48,"png","qx"],"qx/icon/Oxygen/48/devices/media-optical.png":[48,48,"png","qx"],"qx/icon/Oxygen/48/devices/multimedia-player.png":[48,48,"png","qx"],"qx/icon/Oxygen/48/devices/network-wired.png":[48,48,"png","qx"],"qx/icon/Oxygen/48/devices/network-wireless.png":[48,48,"png","qx"],"qx/icon/Oxygen/48/devices/pda.png":[48,48,"png","qx"],"qx/icon/Oxygen/48/devices/phone.png":[48,48,"png","qx"],"qx/icon/Oxygen/48/devices/printer.png":[48,48,"png","qx"],"qx/icon/Oxygen/48/devices/scanner.png":[48,48,"png","qx"]},"translations":{}};
qx.Part.$$notifyLoad("16", function() {
(function(){var m="items",k="Pop-Up",j="copy",h="multi",g="move",f="Resizer",d="audio-card.png",c="battery.png",b="DragDrop",a="display.png",H="drop",G="main",F="#FFFAD3",E="icon/16/places/folder.png",D="computer.png",C="input-keyboard.png",B="droprequest",A="drive-optical.png",z="dragstart",y="icon/48/devices/",t="network-wired.png",u="camera-photo.png",r="network-wireless.png",s="audio-input-microphone.png",p="SlideBar",q="widgetbrowser.pages.Misc",n="ProgressBar",o="icon/32/apps/media-photo-album.png",v="drive-harddisk.png",w="camera-web.png",x="Item ";
qx.Class.define(q,{extend:widgetbrowser.pages.AbstractPage,construct:function(){widgetbrowser.pages.AbstractPage.call(this);
this.__KQ=new qx.ui.container.Composite(new qx.ui.layout.VBox(10));
this.add(this.__KQ);
this.initWidgets();
},members:{__KQ:null,initWidgets:function(){var Q=this._widgets;
var P;
var M=new qx.ui.basic.Label(n);
var N=new qx.ui.indicator.ProgressBar(0,100).set({value:50});
Q.push(N);
this.__KQ.add(M);
this.__KQ.add(N);
M=new qx.ui.basic.Label(p);
var K=new qx.ui.container.SlideBar();
K.setWidth(300);
K.setLayout(new qx.ui.layout.HBox(3));
var L=[d,s,c,u,w,D,a,v,A,C,t,r];
L.forEach(function(S){K.add((new qx.ui.basic.Image(y+S)).set({decorator:G,padding:4}));
});
Q.push(K);
this.__KQ.add(M);
this.__KQ.add(K);
M=new qx.ui.basic.Label(k);
var I=new qx.ui.popup.Popup(new qx.ui.layout.Canvas()).set({backgroundColor:F,padding:[2,4],offset:3,offsetBottom:20});
I.set({allowStretchX:false,autoHide:false});
I.add(new qx.ui.basic.Atom(k,o));
Q.push(I);
this.__KQ.add(M);
this.__KQ.add(I);
I.show();
M=new qx.ui.basic.Label(f);
P=new qx.ui.container.Composite(new qx.ui.layout.Canvas());
var R=new qx.ui.container.Resizer().set({resizable:false,resizableRight:true});
R.setLayout(new qx.ui.layout.Grow());
R.add(new qx.ui.core.Widget().set({width:50,maxWidth:200,height:50,maxHeight:200}));
P.add(R);
Q.push(R);
this.__KQ.add(M);
this.__KQ.add(P);
M=new qx.ui.basic.Label(b);
P=new qx.ui.container.Composite(new qx.ui.layout.HBox(10));
P.set({allowStretchY:false,allowStretchX:false});
this.__KQ.add(M);
this.__KQ.add(P);
var O=new qx.ui.form.List;
O.setDraggable(true);
O.setSelectionMode(h);

for(var i=0;i<10;i++){O.add(new qx.ui.form.ListItem(x+i,E));
}O.addListener(z,function(e){e.addType(m);
e.addAction(j);
e.addAction(g);
});
O.addListener(B,function(e){var V=e.getCurrentAction();
var X=e.getCurrentType();
var U;

switch(X){case m:U=this.getSelection();

if(V==j){var W=[];

for(var i=0,l=U.length;i<l;i++){W[i]=U[i].clone();
}U=W;
}break;
}
if(V==g){var T=this.getSelection();

for(var i=0,l=T.length;i<l;i++){this.remove(T[i]);
}}e.addData(X,U);
});
P.add(O);
Q.push(O);
var J=new qx.ui.form.List;
J.setDroppable(true);
J.setSelectionMode(h);
J.addListener(H,function(e){var Y=e.getData(m);

for(var i=0,l=Y.length;i<l;i++){this.add(Y[i]);
}});
P.add(J);
Q.push(J);
}}});
})();
(function(){var b="resizer",a="qx.ui.container.Resizer";
qx.Class.define(a,{extend:qx.ui.container.Composite,include:qx.ui.core.MResizable,properties:{appearance:{refine:true,init:b}}});
})();
(function(){var f="progress",e="0%",d="progressbar",c="qx.ui.indicator.ProgressBar",b="qx.event.type.Event",a="qx.event.type.Data";
qx.Class.define(c,{extend:qx.ui.container.Composite,construct:function(g,h){qx.ui.container.Composite.call(this);
this._createChildControl(f);
this.set({width:200,height:20,layout:new qx.ui.layout.HBox()});

if(h!=null){this.setMaximum(h);
}
if(g!=null){this.setValue(g);
}},properties:{appearance:{refine:true,init:d}},events:{complete:b,change:a},members:{__ux:0,__GH:100,getValue:function(){return this.__ux;
},setValue:function(i){var j=this.getMaximum();
if(!qx.lang.Type.isNumber(i)||!isFinite(i)){return;
}if(i<0){i=0;
}if(i>j){i=j;
}this.__ux=i;
this.__GI(i/j);
return i;
},getMaximum:function(){return this.__GH;
},setMaximum:function(k){var l=k;
var m=this.getValue();
if(!qx.lang.Type.isNumber(l)||!isFinite(l)||l<=0){return;
}if(l<m){l=m;
}this.__GH=l;
this.__GI(m/l);
return l;
},_createChildControlImpl:function(n,o){var p;

switch(n){case f:p=new qx.ui.container.Composite(new qx.ui.layout.Canvas());
this._add(p,{width:e});
break;
}return p||qx.ui.container.Composite.prototype._createChildControlImpl.call(this,n);
},__GI:function(q){var s=this.getChildControl("progress");
var r=Math.floor(q*100);
var t=parseInt(s.getLayoutProperties().width,10);
s.setLayoutProperties({width:r+"%"});
if(r!=t){this.fireDataEvent("change",r,t);
}if(r===100){this.fireEvent("complete");
}}}});
})();

});