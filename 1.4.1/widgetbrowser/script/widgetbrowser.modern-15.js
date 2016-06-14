qx.$$packageData['c732c41b805b']={"locales":{},"resources":{},"translations":{}};

qx.Part.$$notifyLoad("c732c41b805b", function() {
(function(){var d="qx.event.handler.Iframe",c="load",b="iframe",a="navigate";
qx.Class.define(d,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{load:1,navigate:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false,onevent:qx.event.GlobalError.observeMethod(function(e){var f=qx.bom.Iframe.queryCurrentUrl(e);

if(f!==e.$$url){qx.event.Registration.fireEvent(e,a,qx.event.type.Data,[f]);
e.$$url=f;
}qx.event.Registration.fireEvent(e,c);
})},members:{canHandleEvent:function(g,h){return g.tagName.toLowerCase()===b;
},registerEvent:function(i,j,k){},unregisterEvent:function(l,m,n){}},defer:function(o){qx.event.Registration.addHandler(o);
}});
})();
(function(){var h="engine.name",g="load",f="qx.bom.Iframe",e="osx",d="os.name",c="webkit",b="iframe",a="body";
qx.Class.define(f,{statics:{DEFAULT_ATTRIBUTES:{onload:"qx.event.handler.Iframe.onevent(this)",frameBorder:0,frameSpacing:0,marginWidth:0,marginHeight:0,hspace:0,vspace:0,border:0,allowTransparency:true},create:function(i,j){var i=i?qx.lang.Object.clone(i):{};
var k=qx.bom.Iframe.DEFAULT_ATTRIBUTES;

for(var l in k){if(i[l]==null){i[l]=k[l];
}}return qx.bom.Element.create(b,i,j);
},getWindow:function(m){try{return m.contentWindow;
}catch(n){return null;
}},getDocument:qx.core.Environment.select(h,{"mshtml":function(o){try{var p=this.getWindow(o);
return p?p.document:null;
}catch(q){return null;
}},"default":function(r){try{return r.contentDocument;
}catch(s){return null;
}}}),getBody:function(t){try{var u=this.getDocument(t);
return u?u.getElementsByTagName(a)[0]:null;
}catch(v){return null;
}},setSource:function(w,x){try{if(this.getWindow(w)&&qx.dom.Hierarchy.isRendered(w)){try{if((qx.core.Environment.get(h)==c)&&qx.core.Environment.get(d)==e){var y=this.getWindow(w);

if(y){y.stop();
}}this.getWindow(w).location.replace(x);
}catch(z){w.src=x;
}}else{w.src=x;
}this.__sg(w);
}catch(A){qx.log.Logger.warn("Iframe source could not be set!");
}},queryCurrentUrl:function(B){var C=this.getDocument(B);

try{if(C&&C.location){return C.location.href;
}}catch(D){}return null;
},__sg:function(E){var F=function(){qx.bom.Event.removeNativeListener(E,g,F);
E.$$url=qx.bom.Iframe.queryCurrentUrl(E);
};
qx.bom.Event.addNativeListener(E,g,F);
}}});
})();

});