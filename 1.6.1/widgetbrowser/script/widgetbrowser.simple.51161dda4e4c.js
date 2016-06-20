qx.$$packageData['2080']={"locales":{},"resources":{},"translations":{}};
qx.Part.$$notifyLoad("2080", function() {
(function(){var d="qx.event.handler.Iframe",c="load",b="iframe",a="navigate";
qx.Class.define(d,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{load:1,navigate:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false,onevent:qx.event.GlobalError.observeMethod(function(e){var f=qx.bom.Iframe.queryCurrentUrl(e);

if(f!==e.$$url){qx.event.Registration.fireEvent(e,a,qx.event.type.Data,[f]);
e.$$url=f;
}qx.event.Registration.fireEvent(e,c);
})},members:{canHandleEvent:function(g,h){return g.tagName.toLowerCase()===b;
},registerEvent:function(i,j,k){},unregisterEvent:function(l,m,n){}},defer:function(o){qx.event.Registration.addHandler(o);
}});
})();
(function(){var j="load",i="contentDocument",h="engine.name",g="",f="qx.bom.Iframe",e="osx",d="os.name",c="webkit",b="iframe",a="body";
qx.Class.define(f,{statics:{DEFAULT_ATTRIBUTES:{onload:"qx.event.handler.Iframe.onevent(this)",frameBorder:0,frameSpacing:0,marginWidth:0,marginHeight:0,hspace:0,vspace:0,border:0,allowTransparency:true},create:function(k,l){var k=k?qx.lang.Object.clone(k):{};
var m=qx.bom.Iframe.DEFAULT_ATTRIBUTES;

for(var n in m){if(k[n]==null){k[n]=m[n];
}}return qx.bom.Element.create(b,k,l);
},getWindow:function(o){try{return o.contentWindow;
}catch(p){return null;
}},getDocument:function(q){if(i in q){try{return q.contentDocument;
}catch(s){return null;
}}
try{var r=this.getWindow(q);
return r?r.document:null;
}catch(t){return null;
}},getBody:function(u){try{var v=this.getDocument(u);
return v?v.getElementsByTagName(a)[0]:null;
}catch(w){return null;
}},setSource:function(x,y){try{if(this.getWindow(x)&&qx.dom.Hierarchy.isRendered(x)){try{if((qx.core.Environment.get(h)==c)&&qx.core.Environment.get(d)==e){var z=this.getWindow(x);

if(z){z.stop();
}}this.getWindow(x).location.replace(y);
}catch(A){x.src=y;
}}else{x.src=y;
}this.__qz(x);
}catch(B){qx.log.Logger.warn("Iframe source could not be set!");
}},queryCurrentUrl:function(C){var D=this.getDocument(C);

try{if(D&&D.location){return D.location.href;
}}catch(E){}return g;
},__qz:function(F){var G=function(){qx.bom.Event.removeNativeListener(F,j,G);
F.$$url=qx.bom.Iframe.queryCurrentUrl(F);
};
qx.bom.Event.addNativeListener(F,j,G);
}}});
})();

});