qx.$$packageData['128']={"locales":{},"resources":{"widgetbrowser/people.json":"widgetbrowser"},"translations":{}};
qx.Part.$$notifyLoad("128", function() {
(function(){var i="widgetbrowser/people.json",h="model",g="widgetbrowser.pages.List",f="no model...",e="model.people",d="firstname",c=", ";
qx.Class.define(g,{extend:widgetbrowser.pages.AbstractPage,construct:function(){widgetbrowser.pages.AbstractPage.call(this);
this.initWidgets();
this.loadData();
},members:{__Kr:null,initWidgets:function(){var j=this._widgets;
var k=this.__Kr=new qx.ui.list.List().set({height:280,width:150,labelPath:d,labelOptions:{converter:function(m,n){return n?n.getLastname()+c+m:f;
}}});
j.push(k);
this.add(k);
var l={sorter:function(a,b){a=a.getLastname();
b=b.getLastname();
return a>b?1:a<b?-1:0;
},group:function(o){return o.getLastname().charAt(0).toUpperCase();
}};
k.setDelegate(l);
},loadData:function(){var p=i;
p=qx.util.ResourceManager.getInstance().toUri(p);
var q=new qx.data.store.Json(p);
q.bind(e,this.__Kr,h);
}}});
})();

});