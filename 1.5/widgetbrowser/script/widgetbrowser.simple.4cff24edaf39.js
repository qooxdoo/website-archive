qx.$$packageData['128']={"locales":{},"resources":{"widgetbrowser/people.json":"widgetbrowser"},"translations":{}};
qx.Part.$$notifyLoad("128", function() {
(function(){var f="model.people",e="model",d="widgetbrowser/people.json",c="widgetbrowser.pages.List";
qx.Class.define(c,{extend:widgetbrowser.pages.AbstractPage,construct:function(){widgetbrowser.pages.AbstractPage.call(this);
this.initWidgets();
this.loadData();
},members:{__KU:null,initWidgets:function(){var g=this._widgets;
var h=this.__KU=new qx.ui.list.List().set({height:280,width:150,labelPath:"firstname",labelOptions:{converter:function(j,k){return k?k.getLastname()+", "+j:"no model...";
}}});
g.push(h);
this.add(h);
var i={sorter:function(a,b){a=a.getLastname();
b=b.getLastname();
return a>b?1:a<b?-1:0;
},group:function(l){return l.getLastname().charAt(0).toUpperCase();
}};
h.setDelegate(i);
},loadData:function(){var m=d;
m=qx.util.ResourceManager.getInstance().toUri(m);
var n=new qx.data.store.Json(m);
n.bind(f,this.__KU,e);
}}});
})();

});