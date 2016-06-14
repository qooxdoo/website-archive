(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!window.qxsettings) qxsettings = {};
var settings = {"qx.allowUrlSettings":"true","qx.allowUrlVariants":"true","qx.application":"demobrowser.demo.event.Event_Bus","qx.theme":"qx.theme.Classic"};
for (var k in settings) qxsettings[k] = settings[k];

if (!window.qxvariants) qxvariants = {};
var variants = {"qx.aspects":"off","qx.debug":"off"};
for (var k in variants) qxvariants[k] = variants[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"__out__":{"sourceUri":"../../script"},"demobrowser.demo":{"resourceUri":"../../resource","sourceUri":"../../script","version":"trunk"},"qx":{"resourceUri":"../../resource","sourceUri":"../../script","version":"1.2"}};
for (var k in libinfo) qx.$$libraries[k] = libinfo[k];

qx.$$resources = {};
qx.$$translations = {};
qx.$$locales = {};
qx.$$packageData = {};

qx.$$loader = {
  parts : {"boot":[0]},
  uris : [["__out__:demobrowser.demo.event.Event_Bus-qx.theme.Classic.js"]],
  urisBefore : [],
  packageHashes : {"0":"310107ac5b36"},
  boot : "boot",
  closureParts : {},
  bootIsInline : true,
  addNoCacheParam : true,
  
  decodeUris : function(compressedUris)
  {
    var libs = qx.$$libraries;
    var uris = [];
    for (var i=0; i<compressedUris.length; i++)
    {
      var uri = compressedUris[i].split(":");
      var euri;
      if (uri.length==2 && uri[0] in libs) {
        var prefix = libs[uri[0]].sourceUri;
        euri = prefix + "/" + uri[1];
      } else {
        euri = compressedUris[i];
      }
      if (qx.$$loader.addNoCacheParam) {
        euri += "?nocache=" + Math.random();
      }
      
      uris.push(euri);
    }
    return uris;      
  }
};  

function loadScript(uri, callback) {
  var elem = document.createElement("script");
  elem.charset = "utf-8";
  elem.src = uri;
  elem.onreadystatechange = elem.onload = function()
  {
    if (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")
    {
      elem.onreadystatechange = elem.onload = null;
      callback();
    }
  };
  var head = document.getElementsByTagName("head")[0];
  head.appendChild(elem);
}

var isWebkit = /AppleWebKit\/([^ ]+)/.test(navigator.userAgent);

function loadScriptList(list, callback) {
  if (list.length == 0) {
    callback();
    return;
  }
  loadScript(list.shift(), function() {
    if (isWebkit) {
      // force asynchronous load
      // Safari fails with an "maximum recursion depth exceeded" error if it is
      // called sync.      
      window.setTimeout(function() {
        loadScriptList(list, callback);
      }, 0);
    } else {
      loadScriptList(list, callback);
    }
  });
}

var fireContentLoadedEvent = function() {
  qx.$$domReady = true;
  document.removeEventListener('DOMContentLoaded', fireContentLoadedEvent, false);
};
if (document.addEventListener) {
  document.addEventListener('DOMContentLoaded', fireContentLoadedEvent, false);
}

qx.$$loader.importPackageData = function (dataMap) {
  if (dataMap["resources"]){
    var resMap = dataMap["resources"];
    for (var k in resMap) qx.$$resources[k] = resMap[k];
  }
  if (dataMap["locales"]){
    var locMap = dataMap["locales"];
    var qxlocs = qx.$$locales;
    for (var lang in locMap){
      if (!qxlocs[lang]) qxlocs[lang] = locMap[lang];
      else 
        for (var k in locMap[lang]) qxlocs[lang][k] = locMap[lang][k];
    }
  }
  if (dataMap["translations"]){
    var trMap   = dataMap["translations"];
    var qxtrans = qx.$$translations;
    for (var lang in trMap){
      if (!qxtrans[lang]) qxtrans[lang] = trMap[lang];
      else 
        for (var k in trMap[lang]) qxtrans[lang][k] = trMap[lang][k];
    }
  }
}

qx.$$loader.signalStartup = function () 
{
  qx.$$loader.scriptLoaded = true;
  if (window.qx && qx.event && qx.event.handler && qx.event.handler.Application) {
    qx.event.handler.Application.onScriptLoaded();
    qx.$$loader.applicationHandlerReady = true; 
  } else {
    qx.$$loader.applicationHandlerReady = false;
  }
}

qx.$$loader.init = function(){
  var l=qx.$$loader;
  if (l.urisBefore.length>0){
    loadScriptList(l.urisBefore, function(){return;});
  }
  var bootPackageHash=l.packageHashes[l.parts[l.boot][0]];
  if (l.bootIsInline){
    l.importPackageData(qx.$$packageData[bootPackageHash]);
    l.signalStartup();
  } else {
    loadScriptList(l.decodeUris(l.uris[l.parts[l.boot]]), function(){
      // Opera needs this extra time to parse the scripts
      window.setTimeout(function(){
        l.importPackageData(qx.$$packageData[bootPackageHash] || {});
        l.signalStartup();
      }, 0);
    });
  }
}
})();

qx.$$packageData['310107ac5b36']={"locales":{},"resources":{"qx/decoration/Classic/arrows-combined.gif":[124,7,"gif","qx"],"qx/decoration/Classic/arrows/down-invert.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-38,0],"qx/decoration/Classic/arrows/down-small-invert.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-87,0],"qx/decoration/Classic/arrows/down-small.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-53,0],"qx/decoration/Classic/arrows/down.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-113,0],"qx/decoration/Classic/arrows/forward-invert.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-30,0],"qx/decoration/Classic/arrows/forward.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-18,0],"qx/decoration/Classic/arrows/left-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-92,0],"qx/decoration/Classic/arrows/left-small-invert.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-58,0],"qx/decoration/Classic/arrows/left-small.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-15,0],"qx/decoration/Classic/arrows/left.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-120,0],"qx/decoration/Classic/arrows/next-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-80,0],"qx/decoration/Classic/arrows/next.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-109,0],"qx/decoration/Classic/arrows/previous-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-69,0],"qx/decoration/Classic/arrows/previous.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-65,0],"qx/decoration/Classic/arrows/rewind-invert.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-45,0],"qx/decoration/Classic/arrows/rewind.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-101,0],"qx/decoration/Classic/arrows/right-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-61,0],"qx/decoration/Classic/arrows/right-small-invert.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",0,0],"qx/decoration/Classic/arrows/right-small.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-84,0],"qx/decoration/Classic/arrows/right.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-26,0],"qx/decoration/Classic/arrows/up-invert.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-73,0],"qx/decoration/Classic/arrows/up-small-invert.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-96,0],"qx/decoration/Classic/arrows/up-small.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-3,0],"qx/decoration/Classic/arrows/up.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-8,0],"qx/decoration/Classic/checkbox-radiobutton-combined.png":[504,14,"png","qx"],"qx/decoration/Classic/colorselector-combined.gif":[46,11,"gif","qx"],"qx/decoration/Classic/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Classic/colorselector/brightness-handle.gif":[35,11,"gif","qx","qx/decoration/Classic/colorselector-combined.gif",-11,0],"qx/decoration/Classic/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Classic/colorselector/huesaturation-handle.gif":[11,11,"gif","qx","qx/decoration/Classic/colorselector-combined.gif",0,0],"qx/decoration/Classic/cursors-combined.gif":[71,20,"gif","qx"],"qx/decoration/Classic/cursors/alias.gif":[19,15,"gif","qx","qx/decoration/Classic/cursors-combined.gif",-52,0],"qx/decoration/Classic/cursors/copy.gif":[19,15,"gif","qx","qx/decoration/Classic/cursors-combined.gif",-20,0],"qx/decoration/Classic/cursors/move.gif":[13,9,"gif","qx","qx/decoration/Classic/cursors-combined.gif",-39,0],"qx/decoration/Classic/cursors/nodrop.gif":[20,20,"gif","qx","qx/decoration/Classic/cursors-combined.gif",0,0],"qx/decoration/Classic/datechooser/last-month-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/last-month.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/last-year-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/last-year.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-month-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-month.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-year-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-year.png":[16,16,"png","qx"],"qx/decoration/Classic/form/checkbox-checked-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-336,0],"qx/decoration/Classic/form/checkbox-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-28,0],"qx/decoration/Classic/form/checkbox-checked-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-462,0],"qx/decoration/Classic/form/checkbox-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-112,0],"qx/decoration/Classic/form/checkbox-checked-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-140,0],"qx/decoration/Classic/form/checkbox-checked-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-98,0],"qx/decoration/Classic/form/checkbox-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-308,0],"qx/decoration/Classic/form/checkbox-checked-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",0,0],"qx/decoration/Classic/form/checkbox-checked.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-266,0],"qx/decoration/Classic/form/checkbox-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-84,0],"qx/decoration/Classic/form/checkbox-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-476,0],"qx/decoration/Classic/form/checkbox-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-392,0],"qx/decoration/Classic/form/checkbox-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-196,0],"qx/decoration/Classic/form/checkbox-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-154,0],"qx/decoration/Classic/form/checkbox-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-350,0],"qx/decoration/Classic/form/checkbox-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-448,0],"qx/decoration/Classic/form/checkbox-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-70,0],"qx/decoration/Classic/form/checkbox.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-490,0],"qx/decoration/Classic/form/radiobutton-checked-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-210,0],"qx/decoration/Classic/form/radiobutton-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-406,0],"qx/decoration/Classic/form/radiobutton-checked-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-378,0],"qx/decoration/Classic/form/radiobutton-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-252,0],"qx/decoration/Classic/form/radiobutton-checked-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-182,0],"qx/decoration/Classic/form/radiobutton-checked-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-294,0],"qx/decoration/Classic/form/radiobutton-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-420,0],"qx/decoration/Classic/form/radiobutton-checked-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-56,0],"qx/decoration/Classic/form/radiobutton-checked.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-322,0],"qx/decoration/Classic/form/radiobutton-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-364,0],"qx/decoration/Classic/form/radiobutton-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-434,0],"qx/decoration/Classic/form/radiobutton-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-168,0],"qx/decoration/Classic/form/radiobutton-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-126,0],"qx/decoration/Classic/form/radiobutton-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-42,0],"qx/decoration/Classic/form/radiobutton-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-280,0],"qx/decoration/Classic/form/radiobutton-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-238,0],"qx/decoration/Classic/form/radiobutton-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-14,0],"qx/decoration/Classic/form/radiobutton.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-224,0],"qx/decoration/Classic/menu-combined.gif":[64,7,"gif","qx"],"qx/decoration/Classic/menu/checkbox-invert.gif":[16,7,"gif","qx","qx/decoration/Classic/menu-combined.gif",-16,0],"qx/decoration/Classic/menu/checkbox.gif":[16,7,"gif","qx","qx/decoration/Classic/menu-combined.gif",-32,0],"qx/decoration/Classic/menu/radiobutton-invert.gif":[16,5,"gif","qx","qx/decoration/Classic/menu-combined.gif",0,0],"qx/decoration/Classic/menu/radiobutton.gif":[16,5,"gif","qx","qx/decoration/Classic/menu-combined.gif",-48,0],"qx/decoration/Classic/shadow-lr-combined.png":[30,382,"png","qx"],"qx/decoration/Classic/shadow-small-lr-combined.png":[10,136,"png","qx"],"qx/decoration/Classic/shadow-small-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Classic/shadow-tb-combined.png":[15,90,"png","qx"],"qx/decoration/Classic/shadow/shadow-b.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-30],"qx/decoration/Classic/shadow/shadow-bl.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-br.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-60],"qx/decoration/Classic/shadow/shadow-c.png":[40,382,"png","qx"],"qx/decoration/Classic/shadow/shadow-l.png":[15,382,"png","qx","qx/decoration/Classic/shadow-lr-combined.png",-15,0],"qx/decoration/Classic/shadow/shadow-r.png":[15,382,"png","qx","qx/decoration/Classic/shadow-lr-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-small-b.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-25],"qx/decoration/Classic/shadow/shadow-small-bl.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-20],"qx/decoration/Classic/shadow/shadow-small-br.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-small-c.png":[40,136,"png","qx"],"qx/decoration/Classic/shadow/shadow-small-l.png":[5,136,"png","qx","qx/decoration/Classic/shadow-small-lr-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-small-r.png":[5,136,"png","qx","qx/decoration/Classic/shadow-small-lr-combined.png",-5,0],"qx/decoration/Classic/shadow/shadow-small-t.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-5],"qx/decoration/Classic/shadow/shadow-small-tl.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-15],"qx/decoration/Classic/shadow/shadow-small-tr.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-10],"qx/decoration/Classic/shadow/shadow-small.png":[114,146,"png","qx"],"qx/decoration/Classic/shadow/shadow-t.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-75],"qx/decoration/Classic/shadow/shadow-tl.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-45],"qx/decoration/Classic/shadow/shadow-tr.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-15],"qx/decoration/Classic/shadow/shadow.png":[381,412,"png","qx"],"qx/decoration/Classic/splitpane/knob-horizontal.png":[4,15,"png","qx"],"qx/decoration/Classic/splitpane/knob-vertical.png":[15,4,"png","qx"],"qx/decoration/Classic/table-combined.png":[72,11,"png","qx"],"qx/decoration/Classic/table/ascending-invert.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",-62,0],"qx/decoration/Classic/table/ascending.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",-52,0],"qx/decoration/Classic/table/boolean-false.png":[11,11,"png","qx","qx/decoration/Classic/table-combined.png",-31,0],"qx/decoration/Classic/table/boolean-true.png":[11,11,"png","qx","qx/decoration/Classic/table-combined.png",-10,0],"qx/decoration/Classic/table/descending-invert.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",-42,0],"qx/decoration/Classic/table/descending.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",0,0],"qx/decoration/Classic/table/select-column-order.png":[10,9,"png","qx","qx/decoration/Classic/table-combined.png",-21,0],"qx/decoration/Classic/tree/minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/tree/plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/cross.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/cross_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/cross_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/end.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/end_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/end_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/line.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/only_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/only_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/start.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/start_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/start_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/window-captionbar-buttons-combined.gif":[36,9,"gif","qx"],"qx/decoration/Classic/window/close.gif":[10,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",0,0],"qx/decoration/Classic/window/maximize.gif":[9,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",-10,0],"qx/decoration/Classic/window/minimize.gif":[9,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",-19,0],"qx/decoration/Classic/window/restore.gif":[8,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",-28,0],"qx/icon/Oxygen/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/mimetypes/text-plain.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/places/folder-open.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/places/folder.png":[16,16,"png","qx"]},"translations":{}};
(function(){var o="toString",n=".",m="default",k="Object",j='"',h="Array",g="()",f="String",e="Function",d=".prototype",N="function",M="Boolean",L="Error",K="constructor",J="warn",I="hasOwnProperty",H="string",G="toLocaleString",F="RegExp",E='\", "',v="info",w="BROKEN_IE",t="isPrototypeOf",u="Date",r="",s="qx.Bootstrap",p="]",q="Class",x="error",y="[Class ",A="valueOf",z="Number",C="count",B="debug",D="ES5";
if(!window.qx){window.qx={};
}qx.Bootstrap={genericToString:function(){return y+this.classname+p;
},createNamespace:function(name,bH){var bJ=name.split(n);
var parent=window;
var bI=bJ[0];

for(var i=0,bK=bJ.length-1;i<bK;i++,bI=bJ[i]){if(!parent[bI]){parent=parent[bI]={};
}else{parent=parent[bI];
}}parent[bI]=bH;
return bI;
},setDisplayName:function(V,W,name){V.displayName=W+n+name+g;
},setDisplayNames:function(S,T){for(var name in S){var U=S[name];

if(U instanceof Function){U.displayName=T+n+name+g;
}}},define:function(name,bc){if(!bc){var bc={statics:{}};
}var bh;
var bf=null;
qx.Bootstrap.setDisplayNames(bc.statics,name);

if(bc.members||bc.extend){qx.Bootstrap.setDisplayNames(bc.members,name+d);
bh=bc.construct||new Function;

if(bc.extend){this.extendClass(bh,bh,bc.extend,name,bg);
}var bd=bc.statics||{};
for(var i=0,bi=qx.Bootstrap.getKeys(bd),l=bi.length;i<l;i++){var bj=bi[i];
bh[bj]=bd[bj];
}bf=bh.prototype;
var be=bc.members||{};
for(var i=0,bi=qx.Bootstrap.getKeys(be),l=bi.length;i<l;i++){var bj=bi[i];
bf[bj]=be[bj];
}}else{bh=bc.statics||{};
}var bg=this.createNamespace(name,bh);
bh.name=bh.classname=name;
bh.basename=bg;
bh.$$type=q;
if(!bh.hasOwnProperty(o)){bh.toString=this.genericToString;
}if(bc.defer){bc.defer(bh,bf);
}qx.Bootstrap.$$registry[name]=bc.statics;
return bh;
}};
qx.Bootstrap.define(s,{statics:{LOADSTART:qx.$$start||new Date(),createNamespace:qx.Bootstrap.createNamespace,define:qx.Bootstrap.define,setDisplayName:qx.Bootstrap.setDisplayName,setDisplayNames:qx.Bootstrap.setDisplayNames,genericToString:qx.Bootstrap.genericToString,extendClass:function(bA,bB,bC,name,bD){var bG=bC.prototype;
var bF=new Function;
bF.prototype=bG;
var bE=new bF;
bA.prototype=bE;
bE.name=bE.classname=name;
bE.basename=bD;
bB.base=bA.superclass=bC;
bB.self=bA.constructor=bE.constructor=bA;
},getByName:function(name){return qx.Bootstrap.$$registry[name];
},$$registry:{},objectGetLength:({"count":function(b){return b.__count__;
},"default":function(cd){var length=0;

for(var ce in cd){length++;
}return length;
}})[(({}).__count__==0)?C:m],objectMergeWith:function(bR,bS,bT){if(bT===undefined){bT=true;
}
for(var bU in bS){if(bT||bR[bU]===undefined){bR[bU]=bS[bU];
}}return bR;
},__hn:[t,I,G,o,A,K],getKeys:({"ES5":Object.keys,"BROKEN_IE":function(bW){var bX=[];
var ca=Object.prototype.hasOwnProperty;

for(var cb in bW){if(ca.call(bW,cb)){bX.push(cb);
}}var bY=qx.Bootstrap.__hn;

for(var i=0,a=bY,l=a.length;i<l;i++){if(ca.call(bW,a[i])){bX.push(a[i]);
}}return bX;
},"default":function(bt){var bu=[];
var bv=Object.prototype.hasOwnProperty;

for(var bw in bt){if(bv.call(bt,bw)){bu.push(bw);
}}return bu;
}})[typeof (Object.keys)==
N?D:
(function(){for(var bN in {toString:1}){return bN;
}})()!==o?w:m],getKeysAsString:function(bL){var bM=qx.Bootstrap.getKeys(bL);

if(bM.length==0){return r;
}return j+bM.join(E)+j;
},__ho:{"[object String]":f,"[object Array]":h,"[object Object]":k,"[object RegExp]":F,"[object Number]":z,"[object Boolean]":M,"[object Date]":u,"[object Function]":e,"[object Error]":L},bind:function(O,self,P){var Q=Array.prototype.slice.call(arguments,2,arguments.length);
return function(){var cc=Array.prototype.slice.call(arguments,0,arguments.length);
return O.apply(self,Q.concat(cc));
};
},firstUp:function(br){return br.charAt(0).toUpperCase()+br.substr(1);
},firstLow:function(c){return c.charAt(0).toLowerCase()+c.substr(1);
},getClass:function(bp){var bq=Object.prototype.toString.call(bp);
return (qx.Bootstrap.__ho[bq]||bq.slice(8,-1));
},isString:function(bP){return (bP!==null&&(typeof bP===H||qx.Bootstrap.getClass(bP)==f||bP instanceof String||(!!bP&&!!bP.$$isString)));
},isArray:function(bk){return (bk!==null&&(bk instanceof Array||(bk&&qx.data&&qx.data.IListData&&qx.Bootstrap.hasInterface(bk.constructor,qx.data.IListData))||qx.Bootstrap.getClass(bk)==h||(!!bk&&!!bk.$$isArray)));
},isObject:function(bs){return (bs!==undefined&&bs!==null&&qx.Bootstrap.getClass(bs)==k);
},isFunction:function(bo){return qx.Bootstrap.getClass(bo)==e;
},classIsDefined:function(name){return qx.Bootstrap.getByName(name)!==undefined;
},getPropertyDefinition:function(bx,name){while(bx){if(bx.$$properties&&bx.$$properties[name]){return bx.$$properties[name];
}bx=bx.superclass;
}return null;
},hasProperty:function(bV,name){return !!qx.Bootstrap.getPropertyDefinition(bV,name);
},getEventType:function(bO,name){var bO=bO.constructor;

while(bO.superclass){if(bO.$$events&&bO.$$events[name]!==undefined){return bO.$$events[name];
}bO=bO.superclass;
}return null;
},supportsEvent:function(bQ,name){return !!qx.Bootstrap.getEventType(bQ,name);
},getByInterface:function(bl,bm){var bn,i,l;

while(bl){if(bl.$$implements){bn=bl.$$flatImplements;

for(i=0,l=bn.length;i<l;i++){if(bn[i]===bm){return bl;
}}}bl=bl.superclass;
}return null;
},hasInterface:function(ba,bb){return !!qx.Bootstrap.getByInterface(ba,bb);
},getMixins:function(by){var bz=[];

while(by){if(by.$$includes){bz.push.apply(bz,by.$$flatIncludes);
}by=by.superclass;
}return bz;
},$$logs:[],debug:function(ch,ci){qx.Bootstrap.$$logs.push([B,arguments]);
},info:function(cj,ck){qx.Bootstrap.$$logs.push([v,arguments]);
},warn:function(cf,cg){qx.Bootstrap.$$logs.push([J,arguments]);
},error:function(X,Y){qx.Bootstrap.$$logs.push([x,arguments]);
},trace:function(R){}}});
})();
(function(){var j="qx.allowUrlSettings",h="&",g="qx.core.Setting",f="qx.allowUrlVariants",e="qx.propertyDebugLevel",d="qxsetting",c=":",b=".";
qx.Bootstrap.define(g,{statics:{__eo:{},define:function(l,m){if(m===undefined){throw new Error('Default value of setting "'+l+'" must be defined!');
}
if(!this.__eo[l]){this.__eo[l]={};
}else if(this.__eo[l].defaultValue!==undefined){throw new Error('Setting "'+l+'" is already defined!');
}this.__eo[l].defaultValue=m;
},get:function(q){var r=this.__eo[q];

if(r===undefined){throw new Error('Setting "'+q+'" is not defined.');
}
if(r.value!==undefined){return r.value;
}return r.defaultValue;
},set:function(o,p){if((o.split(b)).length<2){throw new Error('Malformed settings key "'+o+'". Must be following the schema "namespace.key".');
}
if(!this.__eo[o]){this.__eo[o]={};
}this.__eo[o].value=p;
},__ep:function(){if(window.qxsettings){for(var a in window.qxsettings){this.set(a,window.qxsettings[a]);
}window.qxsettings=undefined;

try{delete window.qxsettings;
}catch(k){}this.__eq();
}},__eq:function(){if(this.get(j)!=true){return;
}var t=document.location.search.slice(1).split(h);

for(var i=0;i<t.length;i++){var s=t[i].split(c);

if(s.length!=3||s[0]!=d){continue;
}this.set(s[1],decodeURIComponent(s[2]));
}}},defer:function(n){n.define(j,false);
n.define(f,false);
n.define(e,0);
n.__ep();
}});
})();
(function(){var m="function",k="Boolean",j="qx.Interface",h="]",g="toggle",f="Interface",e="is",d="[Interface ";
qx.Bootstrap.define(j,{statics:{define:function(name,H){if(H){if(H.extend&&!(H.extend instanceof Array)){H.extend=[H.extend];
}{};
var I=H.statics?H.statics:{};
if(H.extend){I.$$extends=H.extend;
}
if(H.properties){I.$$properties=H.properties;
}
if(H.members){I.$$members=H.members;
}
if(H.events){I.$$events=H.events;
}}else{var I={};
}I.$$type=f;
I.name=name;
I.toString=this.genericToString;
I.basename=qx.Bootstrap.createNamespace(name,I);
qx.Interface.$$registry[name]=I;
return I;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(J){if(!J){return [];
}var K=J.concat();

for(var i=0,l=J.length;i<l;i++){if(J[i].$$extends){K.push.apply(K,this.flatten(J[i].$$extends));
}}return K;
},__fx:function(y,z,A,B){var F=A.$$members;

if(F){for(var E in F){if(qx.Bootstrap.isFunction(F[E])){var D=this.__fy(z,E);
var C=D||qx.Bootstrap.isFunction(y[E]);

if(!C){throw new Error('Implementation of method "'+E+'" is missing in class "'+z.classname+'" required by interface "'+A.name+'"');
}var G=B===true&&!D&&!qx.Bootstrap.hasInterface(z,A);

if(G){y[E]=this.__fB(A,y[E],E,F[E]);
}}else{if(typeof y[E]===undefined){if(typeof y[E]!==m){throw new Error('Implementation of member "'+E+'" is missing in class "'+z.classname+'" required by interface "'+A.name+'"');
}}}}}},__fy:function(L,M){var Q=M.match(/^(is|toggle|get|set|reset)(.*)$/);

if(!Q){return false;
}var N=qx.Bootstrap.firstLow(Q[2]);
var O=qx.Bootstrap.getPropertyDefinition(L,N);

if(!O){return false;
}var P=Q[0]==e||Q[0]==g;

if(P){return qx.Bootstrap.getPropertyDefinition(L,N).check==k;
}return true;
},__fz:function(a,b){if(b.$$properties){for(var c in b.$$properties){if(!qx.Bootstrap.getPropertyDefinition(a,c)){throw new Error('The property "'+c+'" is not supported by Class "'+a.classname+'"!');
}}}},__fA:function(n,o){if(o.$$events){for(var p in o.$$events){if(!qx.Bootstrap.supportsEvent(n,p)){throw new Error('The event "'+p+'" is not supported by Class "'+n.classname+'"!');
}}}},assertObject:function(u,v){var x=u.constructor;
this.__fx(u,x,v,false);
this.__fz(x,v);
this.__fA(x,v);
var w=v.$$extends;

if(w){for(var i=0,l=w.length;i<l;i++){this.assertObject(u,w[i]);
}}},assert:function(q,r,s){this.__fx(q.prototype,q,r,s);
this.__fz(q,r);
this.__fA(q,r);
var t=r.$$extends;

if(t){for(var i=0,l=t.length;i<l;i++){this.assert(q,t[i],s);
}}},genericToString:function(){return d+this.name+h;
},$$registry:{},__fB:function(){},__fC:null,__fD:function(){}}});
})();
(function(){var k="qx.Mixin",j=".prototype",h="constructor",g="[Mixin ",f="]",e="destruct",d="Mixin";
qx.Bootstrap.define(k,{statics:{define:function(name,m){if(m){if(m.include&&!(m.include instanceof Array)){m.include=[m.include];
}{};
var o=m.statics?m.statics:{};
qx.Bootstrap.setDisplayNames(o,name);

for(var n in o){if(o[n] instanceof Function){o[n].$$mixin=o;
}}if(m.construct){o.$$constructor=m.construct;
qx.Bootstrap.setDisplayName(m.construct,name,h);
}
if(m.include){o.$$includes=m.include;
}
if(m.properties){o.$$properties=m.properties;
}
if(m.members){o.$$members=m.members;
qx.Bootstrap.setDisplayNames(m.members,name+j);
}
for(var n in o.$$members){if(o.$$members[n] instanceof Function){o.$$members[n].$$mixin=o;
}}
if(m.events){o.$$events=m.events;
}
if(m.destruct){o.$$destructor=m.destruct;
qx.Bootstrap.setDisplayName(m.destruct,name,e);
}}else{var o={};
}o.$$type=d;
o.name=name;
o.toString=this.genericToString;
o.basename=qx.Bootstrap.createNamespace(name,o);
this.$$registry[name]=o;
return o;
},checkCompatibility:function(p){var s=this.flatten(p);
var t=s.length;

if(t<2){return true;
}var w={};
var v={};
var u={};
var r;

for(var i=0;i<t;i++){r=s[i];

for(var q in r.events){if(u[q]){throw new Error('Conflict between mixin "'+r.name+'" and "'+u[q]+'" in member "'+q+'"!');
}u[q]=r.name;
}
for(var q in r.properties){if(w[q]){throw new Error('Conflict between mixin "'+r.name+'" and "'+w[q]+'" in property "'+q+'"!');
}w[q]=r.name;
}
for(var q in r.members){if(v[q]){throw new Error('Conflict between mixin "'+r.name+'" and "'+v[q]+'" in member "'+q+'"!');
}v[q]=r.name;
}}return true;
},isCompatible:function(a,b){var c=qx.Bootstrap.getMixins(b);
c.push(a);
return qx.Mixin.checkCompatibility(c);
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(x){if(!x){return [];
}var y=x.concat();

for(var i=0,l=x.length;i<l;i++){if(x[i].$$includes){y.push.apply(y,this.flatten(x[i].$$includes));
}}return y;
},genericToString:function(){return g+this.name+f;
},$$registry:{},__el:null,__em:function(){}}});
})();
(function(){var ec=';',eb='computed=this.',ea='=value;',dY='this.',dX="set",dW="setThemed",dV="setRuntime",dU="init",dT='if(this.',dS='delete this.',dc='!==undefined)',db='}',da="resetThemed",cY='else if(this.',cX="string",cW='return this.',cV="reset",cU="boolean",cT="resetRuntime",cS='!==undefined){',ej="",ek="refresh",eh='=true;',ei="this.",ef=";",eg='old=this.',ed="();",ee='else ',el='if(old===undefined)old=this.',em='old=computed=this.',dB="return this.",dA="get",dD='(value);',dC="(a[",dF='if(old===computed)return value;',dE='if(old===undefined)old=null;',dH=' of an instance of ',dG=' is not (yet) ready!");',dz="]);",dy='!==inherit){',bJ='qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)',bK='value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)',bL='value !== null && value.nodeType === 9 && value.documentElement',bM='===value)return value;',bN='value !== null && value.$$type === "Mixin"',bO='return init;',bP='var init=this.',bQ='value !== null && value.nodeType === 1 && value.attributes',bR="var parent = this.getLayoutParent();",bS="Error in property ",eA='var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){',ez='.validate.call(this, value);',ey='qx.core.Assert.assertInstance(value, Date, msg) || true',ex='else{',eE="if (!parent) return;",eD=" in method ",eC='qx.core.Assert.assertInstance(value, Error, msg) || true',eB='=computed;',eG='Undefined value is not allowed!',eF='(backup);',cs="MSIE 6.0",ct='if(computed===inherit){',cq="inherit",cr='Is invalid!',cw='if(value===undefined)prop.error(this,2,"',cx='var computed, old=this.',cu='else if(computed===undefined)',cv="': ",co=" of class ",cp='value !== null && value.nodeType !== undefined',cb='===undefined)return;',ca='value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',cd="')){",cc='qx.core.Assert.assertPositiveInteger(value, msg) || true',bW='else this.',bV='value=this.',bY='","',bX='if(init==qx.core.Property.$$inherit)init=null;',bU='value !== null && value.$$type === "Interface"',bT='var inherit=prop.$$inherit;',cC="', qx.event.type.Data, [computed, old]",cD="var value = parent.",cE="$$useinit_",cF='computed=undefined;delete this.',cy="(value);",cz='Requires exactly one argument!',cA='",value);',cB='computed=value;',cG="$$runtime_",cH=';}',cl="$$user_",ck='){',cj='qx.core.Assert.assertArray(value, msg) || true',ci='if(computed===undefined||computed===inherit){',ch='qx.core.Assert.assertPositiveNumber(value, msg) || true',cg=".prototype",cf="Boolean",ce=")}",cn='(computed, old, "',cm='return value;',cI='if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ',cJ="if(reg.hasListener(this, '",cK='Does not allow any arguments!',cL=')a[i].',cM="()",cN="var a=arguments[0] instanceof Array?arguments[0]:arguments;",cO='.$$properties.',cP='value !== null && value.$$type === "Theme"',cQ="var reg=qx.event.Registration;",cR="())",dg='return null;',df='qx.core.Assert.assertObject(value, msg) || true',de='");',dd='qx.core.Assert.assertString(value, msg) || true',dk='var pa=this.getLayoutParent();if(pa)computed=pa.',dj="if (value===undefined) value = parent.",di='value !== null && value.$$type === "Class"',dh='qx.core.Assert.assertFunction(value, msg) || true',dm='!==undefined&&',dl='var computed, old;',du='var backup=computed;',dv='}else{',ds="object",dt="$$init_",dq="$$theme_",dr='if(computed===undefined)computed=null;',dn='qx.core.Assert.assertMap(value, msg) || true',dp='qx.core.Assert.assertNumber(value, msg) || true',dw='if((computed===undefined||computed===inherit)&&',dx="reg.fireEvent(this, '",dL='Null value is not allowed!',dK='qx.core.Assert.assertInteger(value, msg) || true',dN="value",dM="rv:1.8.1",dP="shorthand",dO='qx.core.Assert.assertInstance(value, RegExp, msg) || true',dR='value !== null && value.type !== undefined',dQ='value !== null && value.document',dJ='throw new Error("Property ',dI="(!this.",et='qx.core.Assert.assertBoolean(value, msg) || true',eu='if(a[i].',ev="toggle",ew="$$inherit_",ep='var prop=qx.core.Property;',eq=" with incoming value '",er="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));",es='if(computed===undefined||computed==inherit)computed=null;',en="qx.core.Property",eo="is",bI='Could not change or apply init value after constructing phase!';
qx.Bootstrap.define(en,{statics:{__kU:{"Boolean":et,"String":dd,"Number":dp,"Integer":dK,"PositiveNumber":ch,"PositiveInteger":cc,"Error":eC,"RegExp":dO,"Object":df,"Array":cj,"Map":dn,"Function":dh,"Date":ey,"Node":cp,"Element":bQ,"Document":bL,"Window":dQ,"Event":dR,"Class":di,"Mixin":bN,"Interface":bU,"Theme":cP,"Color":bJ,"Decorator":ca,"Font":bK},__kV:{"Node":true,"Element":true,"Document":true,"Window":true,"Event":true},$$inherit:cq,$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},set:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{name:cX,dereference:cU,inheritable:cU,nullable:cU,themeable:cU,refine:cU,init:null,apply:cX,event:cX,check:null,transform:cX,deferredInit:cU,validate:null},$$allowedGroupKeys:{name:cX,group:ds,mode:cX,themeable:cU},$$inheritable:{},__kW:function(s){var t=this.__kX(s);

if(!t.length){var u=qx.lang.Function.empty;
}else{u=this.__kY(t);
}s.prototype.$$refreshInheritables=u;
},__kX:function(bx){var bz=[];

while(bx){var by=bx.$$properties;

if(by){for(var name in this.$$inheritable){if(by[name]&&by[name].inheritable){bz.push(name);
}}}bx=bx.superclass;
}return bz;
},__kY:function(ba){var be=this.$$store.inherit;
var bd=this.$$store.init;
var bc=this.$$method.refresh;
var bb=[bR,eE];

for(var i=0,l=ba.length;i<l;i++){var name=ba[i];
bb.push(cD,be[name],ef,dj,bd[name],ef,ei,bc[name],cy);
}return new Function(bb.join(ej));
},attachRefreshInheritables:function(bw){bw.prototype.$$refreshInheritables=function(){qx.core.Property.__kW(bw);
return this.$$refreshInheritables();
};
},attachMethods:function(eW,name,eX){eX.group?this.__la(eW,eX,name):this.__lb(eW,eX,name);
},__la:function(eK,eL,name){var eS=qx.Bootstrap.firstUp(name);
var eR=eK.prototype;
var eT=eL.themeable===true;
{};
var eU=[];
var eO=[];

if(eT){var eM=[];
var eQ=[];
}var eP=cN;
eU.push(eP);

if(eT){eM.push(eP);
}
if(eL.mode==dP){var eN=er;
eU.push(eN);

if(eT){eM.push(eN);
}}
for(var i=0,a=eL.group,l=a.length;i<l;i++){{};
eU.push(ei,this.$$method.set[a[i]],dC,i,dz);
eO.push(ei,this.$$method.reset[a[i]],ed);

if(eT){{};
eM.push(ei,this.$$method.setThemed[a[i]],dC,i,dz);
eQ.push(ei,this.$$method.resetThemed[a[i]],ed);
}}this.$$method.set[name]=dX+eS;
eR[this.$$method.set[name]]=new Function(eU.join(ej));
this.$$method.reset[name]=cV+eS;
eR[this.$$method.reset[name]]=new Function(eO.join(ej));

if(eT){this.$$method.setThemed[name]=dW+eS;
eR[this.$$method.setThemed[name]]=new Function(eM.join(ej));
this.$$method.resetThemed[name]=da+eS;
eR[this.$$method.resetThemed[name]]=new Function(eQ.join(ej));
}},__lb:function(P,Q,name){var S=qx.Bootstrap.firstUp(name);
var U=P.prototype;
{};
if(Q.dereference===undefined&&typeof Q.check===cX){Q.dereference=this.__lc(Q.check);
}var T=this.$$method;
var R=this.$$store;
R.runtime[name]=cG+name;
R.user[name]=cl+name;
R.theme[name]=dq+name;
R.init[name]=dt+name;
R.inherit[name]=ew+name;
R.useinit[name]=cE+name;
T.get[name]=dA+S;
U[T.get[name]]=function(){return qx.core.Property.executeOptimizedGetter(this,P,name,dA);
};
T.set[name]=dX+S;
U[T.set[name]]=function(O){return qx.core.Property.executeOptimizedSetter(this,P,name,dX,arguments);
};
T.reset[name]=cV+S;
U[T.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,P,name,cV);
};

if(Q.inheritable||Q.apply||Q.event||Q.deferredInit){T.init[name]=dU+S;
U[T.init[name]]=function(eY){return qx.core.Property.executeOptimizedSetter(this,P,name,dU,arguments);
};
}
if(Q.inheritable){T.refresh[name]=ek+S;
U[T.refresh[name]]=function(v){return qx.core.Property.executeOptimizedSetter(this,P,name,ek,arguments);
};
}T.setRuntime[name]=dV+S;
U[T.setRuntime[name]]=function(N){return qx.core.Property.executeOptimizedSetter(this,P,name,dV,arguments);
};
T.resetRuntime[name]=cT+S;
U[T.resetRuntime[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,P,name,cT);
};

if(Q.themeable){T.setThemed[name]=dW+S;
U[T.setThemed[name]]=function(Y){return qx.core.Property.executeOptimizedSetter(this,P,name,dW,arguments);
};
T.resetThemed[name]=da+S;
U[T.resetThemed[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,P,name,da);
};
}
if(Q.check===cf){U[ev+S]=new Function(dB+T.set[name]+dI+T.get[name]+cR);
U[eo+S]=new Function(dB+T.get[name]+cM);
}},__lc:function(eV){return !!this.__kV[eV];
},__ld:function(fa){return this.__kV[fa]||qx.Bootstrap.classIsDefined(fa)||(qx.Interface&&qx.Interface.isDefined(fa));
},__le:{0:bI,1:cz,2:eG,3:cK,4:dL,5:cr},error:function(bg,bh,bi,bj,bk){var bl=bg.constructor.classname;
var bm=bS+bi+co+bl+eD+this.$$method[bj][bi]+eq+bk+cv;
throw new Error(bm+(this.__le[bh]||"Unknown reason: "+bh));
},__lf:function(m,n,name,o,p,q){var r=this.$$method[o][name];
{n[r]=new Function(dN,p.join(ej));
};
{};
qx.Bootstrap.setDisplayName(n[r],m.classname+cg,r);
if(q===undefined){return m[r]();
}else{return m[r](q[0]);
}},executeOptimizedGetter:function(G,H,name,I){var K=H.$$properties[name];
var M=H.prototype;
var J=[];
var L=this.$$store;
J.push(dT,L.runtime[name],dc);
J.push(cW,L.runtime[name],ec);

if(K.inheritable){J.push(cY,L.inherit[name],dc);
J.push(cW,L.inherit[name],ec);
J.push(ee);
}J.push(dT,L.user[name],dc);
J.push(cW,L.user[name],ec);

if(K.themeable){J.push(cY,L.theme[name],dc);
J.push(cW,L.theme[name],ec);
}
if(K.deferredInit&&K.init===undefined){J.push(cY,L.init[name],dc);
J.push(cW,L.init[name],ec);
}J.push(ee);

if(K.init!==undefined){if(K.inheritable){J.push(bP,L.init[name],ec);

if(K.nullable){J.push(bX);
}else if(K.init!==undefined){J.push(cW,L.init[name],ec);
}else{J.push(cI,name,dH,H.classname,dG);
}J.push(bO);
}else{J.push(cW,L.init[name],ec);
}}else if(K.inheritable||K.nullable){J.push(dg);
}else{J.push(dJ,name,dH,H.classname,dG);
}return this.__lf(G,M,name,I,J);
},executeOptimizedSetter:function(w,x,name,y,z){var E=x.$$properties[name];
var D=x.prototype;
var B=[];
var A=y===dX||y===dW||y===dV||(y===dU&&E.init===undefined);
var C=E.apply||E.event||E.inheritable;
var F=this.__lg(y,name);
this.__lh(B,E,name,y,A);

if(A){this.__li(B,x,E,name);
}
if(C){this.__lj(B,A,F,y);
}
if(E.inheritable){B.push(bT);
}{};

if(!C){this.__ll(B,name,y,A);
}else{this.__lm(B,E,name,y,A);
}
if(E.inheritable){this.__ln(B,E,name,y);
}else if(C){this.__lo(B,E,name,y);
}
if(C){this.__lp(B,E,name);
if(E.inheritable&&D._getChildren){this.__lq(B,name);
}}if(A){B.push(cm);
}return this.__lf(w,D,name,y,B,z);
},__lg:function(bD,name){if(bD===dV||bD===cT){var bE=this.$$store.runtime[name];
}else if(bD===dW||bD===da){bE=this.$$store.theme[name];
}else if(bD===dU){bE=this.$$store.init[name];
}else{bE=this.$$store.user[name];
}return bE;
},__lh:function(bn,bo,name,bp,bq){{if(!bo.nullable||bo.check||bo.inheritable){bn.push(ep);
}if(bp===dX){bn.push(cw,name,bY,bp,cA);
}};
},__li:function(eH,eI,eJ,name){if(eJ.transform){eH.push(bV,eJ.transform,dD);
}if(eJ.validate){if(typeof eJ.validate===cX){eH.push(dY,eJ.validate,dD);
}else if(eJ.validate instanceof Function){eH.push(eI.classname,cO,name);
eH.push(ez);
}}},__lj:function(f,g,h,j){var k=(j===cV||j===da||j===cT);

if(g){f.push(dT,h,bM);
}else if(k){f.push(dT,h,cb);
}},__lk:undefined,__ll:function(bF,name,bG,bH){if(bG===dV){bF.push(dY,this.$$store.runtime[name],ea);
}else if(bG===cT){bF.push(dT,this.$$store.runtime[name],dc);
bF.push(dS,this.$$store.runtime[name],ec);
}else if(bG===dX){bF.push(dY,this.$$store.user[name],ea);
}else if(bG===cV){bF.push(dT,this.$$store.user[name],dc);
bF.push(dS,this.$$store.user[name],ec);
}else if(bG===dW){bF.push(dY,this.$$store.theme[name],ea);
}else if(bG===da){bF.push(dT,this.$$store.theme[name],dc);
bF.push(dS,this.$$store.theme[name],ec);
}else if(bG===dU&&bH){bF.push(dY,this.$$store.init[name],ea);
}},__lm:function(b,c,name,d,e){if(c.inheritable){b.push(cx,this.$$store.inherit[name],ec);
}else{b.push(dl);
}b.push(dT,this.$$store.runtime[name],cS);

if(d===dV){b.push(eb,this.$$store.runtime[name],ea);
}else if(d===cT){b.push(dS,this.$$store.runtime[name],ec);
b.push(dT,this.$$store.user[name],dc);
b.push(eb,this.$$store.user[name],ec);
b.push(cY,this.$$store.theme[name],dc);
b.push(eb,this.$$store.theme[name],ec);
b.push(cY,this.$$store.init[name],cS);
b.push(eb,this.$$store.init[name],ec);
b.push(dY,this.$$store.useinit[name],eh);
b.push(db);
}else{b.push(em,this.$$store.runtime[name],ec);
if(d===dX){b.push(dY,this.$$store.user[name],ea);
}else if(d===cV){b.push(dS,this.$$store.user[name],ec);
}else if(d===dW){b.push(dY,this.$$store.theme[name],ea);
}else if(d===da){b.push(dS,this.$$store.theme[name],ec);
}else if(d===dU&&e){b.push(dY,this.$$store.init[name],ea);
}}b.push(db);
b.push(cY,this.$$store.user[name],cS);

if(d===dX){if(!c.inheritable){b.push(eg,this.$$store.user[name],ec);
}b.push(eb,this.$$store.user[name],ea);
}else if(d===cV){if(!c.inheritable){b.push(eg,this.$$store.user[name],ec);
}b.push(dS,this.$$store.user[name],ec);
b.push(dT,this.$$store.runtime[name],dc);
b.push(eb,this.$$store.runtime[name],ec);
b.push(dT,this.$$store.theme[name],dc);
b.push(eb,this.$$store.theme[name],ec);
b.push(cY,this.$$store.init[name],cS);
b.push(eb,this.$$store.init[name],ec);
b.push(dY,this.$$store.useinit[name],eh);
b.push(db);
}else{if(d===dV){b.push(eb,this.$$store.runtime[name],ea);
}else if(c.inheritable){b.push(eb,this.$$store.user[name],ec);
}else{b.push(em,this.$$store.user[name],ec);
}if(d===dW){b.push(dY,this.$$store.theme[name],ea);
}else if(d===da){b.push(dS,this.$$store.theme[name],ec);
}else if(d===dU&&e){b.push(dY,this.$$store.init[name],ea);
}}b.push(db);
if(c.themeable){b.push(cY,this.$$store.theme[name],cS);

if(!c.inheritable){b.push(eg,this.$$store.theme[name],ec);
}
if(d===dV){b.push(eb,this.$$store.runtime[name],ea);
}else if(d===dX){b.push(eb,this.$$store.user[name],ea);
}else if(d===dW){b.push(eb,this.$$store.theme[name],ea);
}else if(d===da){b.push(dS,this.$$store.theme[name],ec);
b.push(dT,this.$$store.init[name],cS);
b.push(eb,this.$$store.init[name],ec);
b.push(dY,this.$$store.useinit[name],eh);
b.push(db);
}else if(d===dU){if(e){b.push(dY,this.$$store.init[name],ea);
}b.push(eb,this.$$store.theme[name],ec);
}else if(d===ek){b.push(eb,this.$$store.theme[name],ec);
}b.push(db);
}b.push(cY,this.$$store.useinit[name],ck);

if(!c.inheritable){b.push(eg,this.$$store.init[name],ec);
}
if(d===dU){if(e){b.push(eb,this.$$store.init[name],ea);
}else{b.push(eb,this.$$store.init[name],ec);
}}else if(d===dX||d===dV||d===dW||d===ek){b.push(dS,this.$$store.useinit[name],ec);

if(d===dV){b.push(eb,this.$$store.runtime[name],ea);
}else if(d===dX){b.push(eb,this.$$store.user[name],ea);
}else if(d===dW){b.push(eb,this.$$store.theme[name],ea);
}else if(d===ek){b.push(eb,this.$$store.init[name],ec);
}}b.push(db);
if(d===dX||d===dV||d===dW||d===dU){b.push(ex);

if(d===dV){b.push(eb,this.$$store.runtime[name],ea);
}else if(d===dX){b.push(eb,this.$$store.user[name],ea);
}else if(d===dW){b.push(eb,this.$$store.theme[name],ea);
}else if(d===dU){if(e){b.push(eb,this.$$store.init[name],ea);
}else{b.push(eb,this.$$store.init[name],ec);
}b.push(dY,this.$$store.useinit[name],eh);
}b.push(db);
}},__ln:function(bA,bB,name,bC){bA.push(ci);

if(bC===ek){bA.push(cB);
}else{bA.push(dk,this.$$store.inherit[name],ec);
}bA.push(dw);
bA.push(dY,this.$$store.init[name],dm);
bA.push(dY,this.$$store.init[name],dy);
bA.push(eb,this.$$store.init[name],ec);
bA.push(dY,this.$$store.useinit[name],eh);
bA.push(dv);
bA.push(dS,this.$$store.useinit[name],cH);
bA.push(db);
bA.push(dF);
bA.push(ct);
bA.push(cF,this.$$store.inherit[name],ec);
bA.push(db);
bA.push(cu);
bA.push(dS,this.$$store.inherit[name],ec);
bA.push(bW,this.$$store.inherit[name],eB);
bA.push(du);
if(bB.init!==undefined&&bC!==dU){bA.push(el,this.$$store.init[name],ef);
}else{bA.push(dE);
}bA.push(es);
},__lo:function(bt,bu,name,bv){if(bv!==dX&&bv!==dV&&bv!==dW){bt.push(dr);
}bt.push(dF);
if(bu.init!==undefined&&bv!==dU){bt.push(el,this.$$store.init[name],ef);
}else{bt.push(dE);
}},__lp:function(br,bs,name){if(bs.apply){br.push(dY,bs.apply,cn,name,de);
}if(bs.event){br.push(cQ,cJ,bs.event,cd,dx,bs.event,cC,ce);
}},__lq:function(bf,name){bf.push(eA);
bf.push(eu,this.$$method.refresh[name],cL,this.$$method.refresh[name],eF);
bf.push(db);
}},defer:function(V){var X=navigator.userAgent.indexOf(cs)!=-1;
var W=navigator.userAgent.indexOf(dM)!=-1;
if(X||W){V.__lc=V.__ld;
}}});
})();
(function(){var j="emulated",h="native",g='"',f="qx.lang.Core",e="\\\\",d="\\\"",c="[object Error]";
qx.Bootstrap.define(f,{statics:{errorToString:{"native":Error.prototype.toString,"emulated":function(){return this.message;
}}[(!Error.prototype.toString||Error.prototype.toString()==c)?j:h],arrayIndexOf:{"native":Array.prototype.indexOf,"emulated":function(a,b){if(b==null){b=0;
}else if(b<0){b=Math.max(0,this.length+b);
}
for(var i=b;i<this.length;i++){if(this[i]===a){return i;
}}return -1;
}}[Array.prototype.indexOf?h:j],arrayLastIndexOf:{"native":Array.prototype.lastIndexOf,"emulated":function(s,t){if(t==null){t=this.length-1;
}else if(t<0){t=Math.max(0,this.length+t);
}
for(var i=t;i>=0;i--){if(this[i]===s){return i;
}}return -1;
}}[Array.prototype.lastIndexOf?h:j],arrayForEach:{"native":Array.prototype.forEach,"emulated":function(p,q){var l=this.length;

for(var i=0;i<l;i++){var r=this[i];

if(r!==undefined){p.call(q||window,r,i,this);
}}}}[Array.prototype.forEach?h:j],arrayFilter:{"native":Array.prototype.filter,"emulated":function(x,y){var z=[];
var l=this.length;

for(var i=0;i<l;i++){var A=this[i];

if(A!==undefined){if(x.call(y||window,A,i,this)){z.push(this[i]);
}}}return z;
}}[Array.prototype.filter?h:j],arrayMap:{"native":Array.prototype.map,"emulated":function(k,m){var n=[];
var l=this.length;

for(var i=0;i<l;i++){var o=this[i];

if(o!==undefined){n[i]=k.call(m||window,o,i,this);
}}return n;
}}[Array.prototype.map?h:j],arraySome:{"native":Array.prototype.some,"emulated":function(B,C){var l=this.length;

for(var i=0;i<l;i++){var D=this[i];

if(D!==undefined){if(B.call(C||window,D,i,this)){return true;
}}}return false;
}}[Array.prototype.some?h:j],arrayEvery:{"native":Array.prototype.every,"emulated":function(u,v){var l=this.length;

for(var i=0;i<l;i++){var w=this[i];

if(w!==undefined){if(!u.call(v||window,w,i,this)){return false;
}}}return true;
}}[Array.prototype.every?h:j],stringQuote:{"native":String.prototype.quote,"emulated":function(){return g+this.replace(/\\/g,e).replace(/\"/g,d)+g;
}}[String.prototype.quote?h:j]}});
Error.prototype.toString=qx.lang.Core.errorToString;
Array.prototype.indexOf=qx.lang.Core.arrayIndexOf;
Array.prototype.lastIndexOf=qx.lang.Core.arrayLastIndexOf;
Array.prototype.forEach=qx.lang.Core.arrayForEach;
Array.prototype.filter=qx.lang.Core.arrayFilter;
Array.prototype.map=qx.lang.Core.arrayMap;
Array.prototype.some=qx.lang.Core.arraySome;
Array.prototype.every=qx.lang.Core.arrayEvery;
String.prototype.quote=qx.lang.Core.stringQuote;
})();
(function(){var I="[Class ",H="]",G="$$init_",F="toString",E="constructor",D="singleton",C=".prototype",B="extend",A="Class",z="destruct",w="qx.Class",y=".",x="static",v="qx.event.type.Data";
qx.Bootstrap.define(w,{statics:{define:function(name,bc){if(!bc){var bc={};
}if(bc.include&&!(bc.include instanceof Array)){bc.include=[bc.include];
}if(bc.implement&&!(bc.implement instanceof Array)){bc.implement=[bc.implement];
}var bd=false;

if(!bc.hasOwnProperty(B)&&!bc.type){bc.type=x;
bd=true;
}{};
var be=this.__cb(name,bc.type,bc.extend,bc.statics,bc.construct,bc.destruct,bc.include);
if(bc.extend){if(bc.properties){this.__cd(be,bc.properties,true);
}if(bc.members){this.__cf(be,bc.members,true,true,false);
}if(bc.events){this.__cc(be,bc.events,true);
}if(bc.include){for(var i=0,l=bc.include.length;i<l;i++){this.__cj(be,bc.include[i],false);
}}}if(bc.settings){for(var bf in bc.settings){qx.core.Setting.define(bf,bc.settings[bf]);
}}if(bc.variants){for(var bf in bc.variants){qx.core.Variant.define(bf,bc.variants[bf].allowedValues,bc.variants[bf].defaultValue);
}}if(bc.implement){for(var i=0,l=bc.implement.length;i<l;i++){this.__ch(be,bc.implement[i]);
}}{};
if(bc.defer){bc.defer.self=be;
bc.defer(be,be.prototype,{add:function(name,N){var O={};
O[name]=N;
qx.Class.__cd(be,O,true);
}});
}return be;
},undefine:function(name){delete this.$$registry[name];
var bV=name.split(y);
var bX=[window];

for(var i=0;i<bV.length;i++){bX.push(bX[i][bV[i]]);
}for(var i=bX.length-1;i>=1;i--){var bW=bX[i];
var parent=bX[i-1];

if(qx.Bootstrap.isFunction(bW)||qx.Bootstrap.objectGetLength(bW)===0){delete parent[bV[i-1]];
}else{break;
}}},isDefined:qx.Bootstrap.classIsDefined,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},getByName:qx.Bootstrap.getByName,include:function(t,u){{};
qx.Class.__cj(t,u,false);
},patch:function(by,bz){{};
qx.Class.__cj(by,bz,true);
},isSubClassOf:function(bA,bB){if(!bA){return false;
}
if(bA==bB){return true;
}
if(bA.prototype instanceof bB){return true;
}return false;
},getPropertyDefinition:qx.Bootstrap.getPropertyDefinition,getProperties:function(U){var V=[];

while(U){if(U.$$properties){V.push.apply(V,qx.Bootstrap.getKeys(U.$$properties));
}U=U.superclass;
}return V;
},getByProperty:function(bU,name){while(bU){if(bU.$$properties&&bU.$$properties[name]){return bU;
}bU=bU.superclass;
}return null;
},hasProperty:qx.Bootstrap.hasProperty,getEventType:qx.Bootstrap.getEventType,supportsEvent:qx.Bootstrap.supportsEvent,hasOwnMixin:function(bm,bn){return bm.$$includes&&bm.$$includes.indexOf(bn)!==-1;
},getByMixin:function(ch,ci){var cj,i,l;

while(ch){if(ch.$$includes){cj=ch.$$flatIncludes;

for(i=0,l=cj.length;i<l;i++){if(cj[i]===ci){return ch;
}}}ch=ch.superclass;
}return null;
},getMixins:qx.Bootstrap.getMixins,hasMixin:function(L,M){return !!this.getByMixin(L,M);
},hasOwnInterface:function(J,K){return J.$$implements&&J.$$implements.indexOf(K)!==-1;
},getByInterface:qx.Bootstrap.getByInterface,getInterfaces:function(bt){var bu=[];

while(bt){if(bt.$$implements){bu.push.apply(bu,bt.$$flatImplements);
}bt=bt.superclass;
}return bu;
},hasInterface:qx.Bootstrap.hasInterface,implementsInterface:function(ce,cf){var cg=ce.constructor;

if(this.hasInterface(cg,cf)){return true;
}
try{qx.Interface.assertObject(ce,cf);
return true;
}catch(P){}
try{qx.Interface.assert(cg,cf,false);
return true;
}catch(X){}return false;
},getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;
this.$$instance=new this;
delete this.$$allowconstruct;
}return this.$$instance;
},genericToString:function(){return I+this.classname+H;
},$$registry:qx.Bootstrap.$$registry,__bW:null,__bX:null,__bY:function(){},__ca:function(){},__cb:function(name,bC,bD,bE,bF,bG,bH){var bK;

if(!bD&&true){bK=bE||{};
qx.Bootstrap.setDisplayNames(bK,name);
}else{var bK={};

if(bD){if(!bF){bF=this.__ck();
}
if(this.__cm(bD,bH)){bK=this.__cn(bF,name,bC);
}else{bK=bF;
}if(bC===D){bK.getInstance=this.getInstance;
}qx.Bootstrap.setDisplayName(bF,name,E);
}if(bE){qx.Bootstrap.setDisplayNames(bE,name);
var bL;

for(var i=0,a=qx.Bootstrap.getKeys(bE),l=a.length;i<l;i++){bL=a[i];
var bI=bE[bL];
{bK[bL]=bI;
};
}}}var bJ=qx.Bootstrap.createNamespace(name,bK);
bK.name=bK.classname=name;
bK.basename=bJ;
bK.$$type=A;

if(bC){bK.$$classtype=bC;
}if(!bK.hasOwnProperty(F)){bK.toString=this.genericToString;
}
if(bD){qx.Bootstrap.extendClass(bK,bF,bD,name,bJ);
if(bG){{};
bK.$$destructor=bG;
qx.Bootstrap.setDisplayName(bG,name,z);
}}this.$$registry[name]=bK;
return bK;
},__cc:function(p,q,r){var s,s;
{};

if(p.$$events){for(var s in q){p.$$events[s]=q[s];
}}else{p.$$events=q;
}},__cd:function(bY,ca,cb){var cc;

if(cb===undefined){cb=false;
}var cd=bY.prototype;

for(var name in ca){cc=ca[name];
{};
cc.name=name;
if(!cc.refine){if(bY.$$properties===undefined){bY.$$properties={};
}bY.$$properties[name]=cc;
}if(cc.init!==undefined){bY.prototype[G+name]=cc.init;
}if(cc.event!==undefined){var event={};
event[cc.event]=v;
this.__cc(bY,event,cb);
}if(cc.inheritable){qx.core.Property.$$inheritable[name]=true;

if(!cd.$$refreshInheritables){qx.core.Property.attachRefreshInheritables(bY);
}}
if(!cc.refine){qx.core.Property.attachMethods(bY,name,cc);
}}},__ce:null,__cf:function(f,g,h,j,k){var m=f.prototype;
var o,n;
qx.Bootstrap.setDisplayNames(g,f.classname+C);

for(var i=0,a=qx.Bootstrap.getKeys(g),l=a.length;i<l;i++){o=a[i];
n=g[o];
{};
if(j!==false&&n instanceof Function&&n.$$type==null){if(k==true){n=this.__cg(n,m[o]);
}else{if(m[o]){n.base=m[o];
}n.self=f;
}{};
}m[o]=n;
}},__cg:function(br,bs){if(bs){return function(){var bT=br.base;
br.base=bs;
var bS=br.apply(this,arguments);
br.base=bT;
return bS;
};
}else{return br;
}},__ch:function(bv,bw){{};
var bx=qx.Interface.flatten([bw]);

if(bv.$$implements){bv.$$implements.push(bw);
bv.$$flatImplements.push.apply(bv.$$flatImplements,bx);
}else{bv.$$implements=[bw];
bv.$$flatImplements=bx;
}},__ci:function(bg){var name=bg.classname;
var bh=this.__cn(bg,name,bg.$$classtype);
for(var i=0,a=qx.Bootstrap.getKeys(bg),l=a.length;i<l;i++){bi=a[i];
bh[bi]=bg[bi];
}bh.prototype=bg.prototype;
var bk=bg.prototype;

for(var i=0,a=qx.Bootstrap.getKeys(bk),l=a.length;i<l;i++){bi=a[i];
var bl=bk[bi];
if(bl&&bl.self==bg){bl.self=bh;
}}for(var bi in this.$$registry){var bj=this.$$registry[bi];

if(!bj){continue;
}
if(bj.base==bg){bj.base=bh;
}
if(bj.superclass==bg){bj.superclass=bh;
}
if(bj.$$original){if(bj.$$original.base==bg){bj.$$original.base=bh;
}
if(bj.$$original.superclass==bg){bj.$$original.superclass=bh;
}}}qx.Bootstrap.createNamespace(name,bh);
this.$$registry[name]=bh;
return bh;
},__cj:function(bM,bN,bO){{};

if(this.hasMixin(bM,bN)){return;
}var bR=bM.$$original;

if(bN.$$constructor&&!bR){bM=this.__ci(bM);
}var bQ=qx.Mixin.flatten([bN]);
var bP;

for(var i=0,l=bQ.length;i<l;i++){bP=bQ[i];
if(bP.$$events){this.__cc(bM,bP.$$events,bO);
}if(bP.$$properties){this.__cd(bM,bP.$$properties,bO);
}if(bP.$$members){this.__cf(bM,bP.$$members,bO,bO,bO);
}}if(bM.$$includes){bM.$$includes.push(bN);
bM.$$flatIncludes.push.apply(bM.$$flatIncludes,bQ);
}else{bM.$$includes=[bN];
bM.$$flatIncludes=bQ;
}},__ck:function(){function W(){W.base.apply(this,arguments);
}return W;
},__cl:function(){return function(){};
},__cm:function(b,c){{};
if(b&&b.$$includes){var d=b.$$flatIncludes;

for(var i=0,l=d.length;i<l;i++){if(d[i].$$constructor){return true;
}}}if(c){var e=qx.Mixin.flatten(c);

for(var i=0,l=e.length;i<l;i++){if(e[i].$$constructor){return true;
}}}return false;
},__cn:function(Q,name,R){var S;
var T=function(){var bq=T;
{};
var bp=bq.$$original.apply(this,arguments);
if(bq.$$includes){var bo=bq.$$flatIncludes;

for(var i=0,l=bo.length;i<l;i++){if(bo[i].$$constructor){bo[i].$$constructor.apply(this,arguments);
}}}{};
return bp;
};
{};
T.$$original=Q;
Q.wrapper=T;
return T;
}},defer:function(){var Y,ba,bb;
{};
}});
})();
(function(){var s="gecko",r="1.9.0.0",q=".",p="[object Opera]",o="function",n="[^\\.0-9]",m="525.26",l="",k="mshtml",j="AppleWebKit/",d="unknown",i="9.6.0",g="4.0",c="Gecko",b="opera",f="webkit",e="0.0.0",h="8.0",a="qx.bom.client.Engine";
qx.Bootstrap.define(a,{statics:{NAME:"",FULLVERSION:"0.0.0",VERSION:0.0,OPERA:false,WEBKIT:false,GECKO:false,MSHTML:false,UNKNOWN_ENGINE:false,UNKNOWN_VERSION:false,DOCUMENT_MODE:null,__en:function(){var t=d;
var x=e;
var w=window.navigator.userAgent;
var z=false;
var v=false;

if(window.opera&&Object.prototype.toString.call(window.opera)==p){t=b;
this.OPERA=true;
if(/Opera[\s\/]([0-9]+)\.([0-9])([0-9]*)/.test(w)){x=RegExp.$1+q+RegExp.$2;

if(RegExp.$3!=l){x+=q+RegExp.$3;
}}else{v=true;
x=i;
}}else if(window.navigator.userAgent.indexOf(j)!=-1){t=f;
this.WEBKIT=true;

if(/AppleWebKit\/([^ ]+)/.test(w)){x=RegExp.$1;
var y=RegExp(n).exec(x);

if(y){x=x.slice(0,y.index);
}}else{v=true;
x=m;
}}else if(window.controllers&&window.navigator.product===c){t=s;
this.GECKO=true;
if(/rv\:([^\);]+)(\)|;)/.test(w)){x=RegExp.$1;
}else{v=true;
x=r;
}}else if(window.navigator.cpuClass&&/MSIE\s+([^\);]+)(\)|;)/.test(w)){t=k;
x=RegExp.$1;

if(document.documentMode){this.DOCUMENT_MODE=document.documentMode;
}if(x<8&&/Trident\/([^\);]+)(\)|;)/.test(w)){if(RegExp.$1===g){x=h;
}}this.MSHTML=true;
}else{var u=window.qxFail;

if(u&&typeof u===o){var t=u();

if(t.NAME&&t.FULLVERSION){t=t.NAME;
this[t.toUpperCase()]=true;
x=t.FULLVERSION;
}}else{z=true;
v=true;
x=r;
t=s;
this.GECKO=true;
qx.Bootstrap.warn("Unsupported client: "+w+"! Assumed gecko version 1.9.0.0 (Firefox 3.0).");
}}this.UNKNOWN_ENGINE=z;
this.UNKNOWN_VERSION=v;
this.NAME=t;
this.FULLVERSION=x;
this.VERSION=parseFloat(x);
}},defer:function(A){A.__en();
}});
})();
(function(){var u="on",t="off",s="|",r="default",q="object",p="&",o="qx.aspects",n="$",m="qx.allowUrlVariants",k="qx.debug",d="qx.client",j="qx.dynlocale",g="webkit",c="qxvariant",b="opera",f=":",e="qx.core.Variant",h="mshtml",a="gecko";
qx.Bootstrap.define(e,{statics:{__kq:{},__kr:{},compilerIsSet:function(){return true;
},define:function(M,N,O){{};

if(!this.__kq[M]){this.__kq[M]={};
}else{}this.__kq[M].allowedValues=N;
this.__kq[M].defaultValue=O;
},get:function(P){var Q=this.__kq[P];
{};

if(Q.value!==undefined){return Q.value;
}return Q.defaultValue;
},__ks:function(){if(window.qxvariants){for(var K in qxvariants){{};

if(!this.__kq[K]){this.__kq[K]={};
}this.__kq[K].value=qxvariants[K];
}window.qxvariants=undefined;

try{delete window.qxvariants;
}catch(C){}this.__kt(this.__kq);
}},__kt:function(){if(qx.core.Setting.get(m)!=true){return;
}var w=document.location.search.slice(1).split(p);

for(var i=0;i<w.length;i++){var x=w[i].split(f);

if(x.length!=3||x[0]!=c){continue;
}var y=x[1];

if(!this.__kq[y]){this.__kq[y]={};
}this.__kq[y].value=decodeURIComponent(x[2]);
}},select:function(z,A){{};

for(var B in A){if(this.isSet(z,B)){return A[B];
}}
if(A[r]!==undefined){return A[r];
}{};
},isSet:function(D,E){var F=D+n+E;

if(this.__kr[F]!==undefined){return this.__kr[F];
}var H=false;
if(E.indexOf(s)<0){H=this.get(D)===E;
}else{var G=E.split(s);

for(var i=0,l=G.length;i<l;i++){if(this.get(D)===G[i]){H=true;
break;
}}}this.__kr[F]=H;
return H;
},__ku:function(v){return typeof v===q&&v!==null&&v instanceof Array;
},__kv:function(v){return typeof v===q&&v!==null&&!(v instanceof Array);
},__kw:function(I,J){for(var i=0,l=I.length;i<l;i++){if(I[i]==J){return true;
}}return false;
}},defer:function(L){L.define(d,[a,h,b,g],qx.bom.client.Engine.NAME);
L.define(k,[u,t],u);
L.define(o,[u,t],t);
L.define(j,[u,t],u);
L.__ks();
}});
})();
(function(){var l="qx.client",k="on",j="function",i="mousedown",h="qx.bom.Event",g="return;",f="mouseover",d="HTMLEvents";
qx.Class.define(h,{statics:{addNativeListener:qx.core.Variant.select(l,{"mshtml":function(r,s,t){r.attachEvent(k+s,t);
},"default":function(u,v,w){u.addEventListener(v,w,false);
}}),removeNativeListener:qx.core.Variant.select(l,{"mshtml":function(D,E,F){try{D.detachEvent(k+E,F);
}catch(e){if(e.number!==-2146828218){throw e;
}}},"default":function(A,B,C){A.removeEventListener(B,C,false);
}}),getTarget:function(e){return e.target||e.srcElement;
},getRelatedTarget:qx.core.Variant.select(l,{"mshtml":function(e){if(e.type===f){return e.fromEvent;
}else{return e.toElement;
}},"gecko":function(e){try{e.relatedTarget&&e.relatedTarget.nodeType;
}catch(e){return null;
}return e.relatedTarget;
},"default":function(e){return e.relatedTarget;
}}),preventDefault:qx.core.Variant.select(l,{"gecko":function(e){if(qx.bom.client.Engine.VERSION>=1.9&&e.type==i&&e.button==2){return;
}e.preventDefault();
if(qx.bom.client.Engine.VERSION<1.9){try{e.keyCode=0;
}catch(x){}}},"mshtml":function(e){try{e.keyCode=0;
}catch(m){}e.returnValue=false;
},"default":function(e){e.preventDefault();
}}),stopPropagation:function(e){if(e.stopPropagation){e.stopPropagation();
}e.cancelBubble=true;
},fire:function(a,b){if(document.createEventObject){var c=document.createEventObject();
return a.fireEvent(k+b,c);
}else{var c=document.createEvent(d);
c.initEvent(b,true,true);
return !a.dispatchEvent(c);
}},supportsEvent:qx.core.Variant.select(l,{"webkit":function(y,z){return y.hasOwnProperty(k+z);
},"default":function(n,o){var p=k+o;
var q=(p in n);

if(!q){q=typeof n[p]==j;

if(!q&&n.setAttribute){n.setAttribute(p,g);
q=typeof n[p]==j;
n.removeAttribute(p);
}}return q;
}})}});
})();
(function(){var q="|bubble",p="|capture",o="|",n="",m="_",k="unload",j="UNKNOWN_",h="c",g="__fi",f="DOM_",c="__fh",e="WIN_",d="capture",b="qx.event.Manager",a="QX_";
qx.Class.define(b,{extend:Object,construct:function(bV,bW){this.__fd=bV;
this.__fe=qx.core.ObjectRegistry.toHashCode(bV);
this.__ff=bW;
if(bV.qx!==qx){var self=this;
qx.bom.Event.addNativeListener(bV,k,qx.event.GlobalError.observeMethod(function(){qx.bom.Event.removeNativeListener(bV,k,arguments.callee);
self.dispose();
}));
}this.__fg={};
this.__fh={};
this.__fi={};
this.__fj={};
},statics:{__fk:0,getNextUniqueId:function(){return (this.__fk++)+n;
}},members:{__ff:null,__fg:null,__fi:null,__fl:null,__fh:null,__fj:null,__fd:null,__fe:null,getWindow:function(){return this.__fd;
},getWindowId:function(){return this.__fe;
},getHandler:function(bX){var bY=this.__fh[bX.classname];

if(bY){return bY;
}return this.__fh[bX.classname]=new bX(this);
},getDispatcher:function(bD){var bE=this.__fi[bD.classname];

if(bE){return bE;
}return this.__fi[bD.classname]=new bD(this,this.__ff);
},getListeners:function(F,G,H){var I=F.$$hash||qx.core.ObjectRegistry.toHashCode(F);
var K=this.__fg[I];

if(!K){return null;
}var L=G+(H?p:q);
var J=K[L];
return J?J.concat():null;
},serializeListeners:function(v){var C=v.$$hash||qx.core.ObjectRegistry.toHashCode(v);
var E=this.__fg[C];
var A=[];

if(E){var y,D,w,z,B;

for(var x in E){y=x.indexOf(o);
D=x.substring(0,y);
w=x.charAt(y+1)==h;
z=E[x];

for(var i=0,l=z.length;i<l;i++){B=z[i];
A.push({self:B.context,handler:B.handler,type:D,capture:w});
}}}return A;
},toggleAttachedEvents:function(X,Y){var be=X.$$hash||qx.core.ObjectRegistry.toHashCode(X);
var bg=this.__fg[be];

if(bg){var bb,bf,ba,bc;

for(var bd in bg){bb=bd.indexOf(o);
bf=bd.substring(0,bb);
ba=bd.charCodeAt(bb+1)===99;
bc=bg[bd];

if(Y){this.__fm(X,bf,ba);
}else{this.__fn(X,bf,ba);
}}}},hasListener:function(cb,cc,cd){{};
var ce=cb.$$hash||qx.core.ObjectRegistry.toHashCode(cb);
var cg=this.__fg[ce];

if(!cg){return false;
}var ch=cc+(cd?p:q);
var cf=cg[ch];
return cf&&cf.length>0;
},importListeners:function(bF,bG){{};
var bM=bF.$$hash||qx.core.ObjectRegistry.toHashCode(bF);
var bN=this.__fg[bM]={};
var bJ=qx.event.Manager;

for(var bH in bG){var bK=bG[bH];
var bL=bK.type+(bK.capture?p:q);
var bI=bN[bL];

if(!bI){bI=bN[bL]=[];
this.__fm(bF,bK.type,bK.capture);
}bI.push({handler:bK.listener,context:bK.self,unique:bK.unique||(bJ.__fk++)+n});
}},addListener:function(M,N,O,self,P){var T;
{};
var U=M.$$hash||qx.core.ObjectRegistry.toHashCode(M);
var W=this.__fg[U];

if(!W){W=this.__fg[U]={};
}var S=N+(P?p:q);
var R=W[S];

if(!R){R=W[S]=[];
}if(R.length===0){this.__fm(M,N,P);
}var V=(qx.event.Manager.__fk++)+n;
var Q={handler:O,context:self,unique:V};
R.push(Q);
return S+o+V;
},findHandler:function(cm,cn){var cx=false,cq=false,cy=false;
var cw;

if(cm.nodeType===1){cx=true;
cw=f+cm.tagName.toLowerCase()+m+cn;
}else if(cm==this.__fd){cq=true;
cw=e+cn;
}else if(cm.classname){cy=true;
cw=a+cm.classname+m+cn;
}else{cw=j+cm+m+cn;
}var cs=this.__fj;

if(cs[cw]){return cs[cw];
}var cv=this.__ff.getHandlers();
var cr=qx.event.IEventHandler;
var ct,cu,cp,co;

for(var i=0,l=cv.length;i<l;i++){ct=cv[i];
cp=ct.SUPPORTED_TYPES;

if(cp&&!cp[cn]){continue;
}co=ct.TARGET_CHECK;

if(co){if(!cx&&co===cr.TARGET_DOMNODE){continue;
}else if(!cq&&co===cr.TARGET_WINDOW){continue;
}else if(!cy&&co===cr.TARGET_OBJECT){continue;
}}cu=this.getHandler(cv[i]);

if(ct.IGNORE_CAN_HANDLE||cu.canHandleEvent(cm,cn)){cs[cw]=cu;
return cu;
}}return null;
},__fm:function(r,s,t){var u=this.findHandler(r,s);

if(u){u.registerEvent(r,s,t);
return;
}{};
},removeListener:function(bt,bu,bv,self,bw){var bA;
{};
var bB=bt.$$hash||qx.core.ObjectRegistry.toHashCode(bt);
var bC=this.__fg[bB];

if(!bC){return false;
}var bx=bu+(bw?p:q);
var by=bC[bx];

if(!by){return false;
}var bz;

for(var i=0,l=by.length;i<l;i++){bz=by[i];

if(bz.handler===bv&&bz.context===self){qx.lang.Array.removeAt(by,i);

if(by.length==0){this.__fn(bt,bu,bw);
}return true;
}}return false;
},removeListenerById:function(bh,bi){var bo;
{};
var bm=bi.split(o);
var br=bm[0];
var bj=bm[1].charCodeAt(0)==99;
var bq=bm[2];
var bp=bh.$$hash||qx.core.ObjectRegistry.toHashCode(bh);
var bs=this.__fg[bp];

if(!bs){return false;
}var bn=br+(bj?p:q);
var bl=bs[bn];

if(!bl){return false;
}var bk;

for(var i=0,l=bl.length;i<l;i++){bk=bl[i];

if(bk.unique===bq){qx.lang.Array.removeAt(bl,i);

if(bl.length==0){this.__fn(bh,br,bj);
}return true;
}}return false;
},removeAllListeners:function(cz){var cD=cz.$$hash||qx.core.ObjectRegistry.toHashCode(cz);
var cF=this.__fg[cD];

if(!cF){return false;
}var cB,cE,cA;

for(var cC in cF){if(cF[cC].length>0){cB=cC.split(o);
cE=cB[0];
cA=cB[1]===d;
this.__fn(cz,cE,cA);
}}delete this.__fg[cD];
return true;
},deleteAllListeners:function(ca){delete this.__fg[ca];
},__fn:function(ci,cj,ck){var cl=this.findHandler(ci,cj);

if(cl){cl.unregisterEvent(ci,cj,ck);
return;
}{};
},dispatchEvent:function(bO,event){var bT;
{};
var bU=event.getType();

if(!event.getBubbles()&&!this.hasListener(bO,bU)){qx.event.Pool.getInstance().poolObject(event);
return true;
}
if(!event.getTarget()){event.setTarget(bO);
}var bS=this.__ff.getDispatchers();
var bR;
var bQ=false;

for(var i=0,l=bS.length;i<l;i++){bR=this.getDispatcher(bS[i]);
if(bR.canDispatchEvent(bO,event,bU)){bR.dispatchEvent(bO,event,bU);
bQ=true;
break;
}}
if(!bQ){{};
return true;
}var bP=event.getDefaultPrevented();
qx.event.Pool.getInstance().poolObject(event);
return !bP;
},dispose:function(){this.__ff.removeManager(this);
qx.util.DisposeUtil.disposeMap(this,c);
qx.util.DisposeUtil.disposeMap(this,g);
this.__fg=this.__fd=this.__fl=null;
this.__ff=this.__fj=null;
}}});
})();
(function(){var d="qx.dom.Node",c="qx.client",b="";
qx.Class.define(d,{statics:{ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12,getDocument:function(j){return j.nodeType===
this.DOCUMENT?j:
j.ownerDocument||j.document;
},getWindow:qx.core.Variant.select(c,{"mshtml":function(t){if(t.nodeType==null){return t;
}if(t.nodeType!==this.DOCUMENT){t=t.ownerDocument;
}return t.parentWindow;
},"default":function(k){if(k.nodeType==null){return k;
}if(k.nodeType!==this.DOCUMENT){k=k.ownerDocument;
}return k.defaultView;
}}),getDocumentElement:function(s){return this.getDocument(s).documentElement;
},getBodyElement:function(e){return this.getDocument(e).body;
},isNode:function(l){return !!(l&&l.nodeType!=null);
},isElement:function(m){return !!(m&&m.nodeType===this.ELEMENT);
},isDocument:function(n){return !!(n&&n.nodeType===this.DOCUMENT);
},isText:function(p){return !!(p&&p.nodeType===this.TEXT);
},isWindow:function(o){return !!(o&&o.history&&o.location&&o.document);
},isNodeName:function(f,g){if(!g||!f||!f.nodeName){return false;
}return g.toLowerCase()==qx.dom.Node.getName(f);
},getName:function(h){if(!h||!h.nodeName){return null;
}return h.nodeName.toLowerCase();
},getText:function(q){if(!q||!q.nodeType){return null;
}
switch(q.nodeType){case 1:var i,a=[],r=q.childNodes,length=r.length;

for(i=0;i<length;i++){a[i]=this.getText(r[i]);
}return a.join(b);
case 2:return q.nodeValue;
break;
case 3:return q.nodeValue;
break;
}return null;
}}});
})();
(function(){var Y="mshtml",X="qx.client",W="[object Array]",V="qx.lang.Array",U="qx",T="number",S="string";
qx.Class.define(V,{statics:{toArray:function(d,e){return this.cast(d,Array,e);
},cast:function(x,y,z){if(x.constructor===y){return x;
}
if(qx.Class.hasInterface(x,qx.data.IListData)){var x=x.toArray();
}var A=new y;
if(qx.core.Variant.isSet(X,Y)){if(x.item){for(var i=z||0,l=x.length;i<l;i++){A.push(x[i]);
}return A;
}}if(Object.prototype.toString.call(x)===W&&z==null){A.push.apply(A,x);
}else{A.push.apply(A,Array.prototype.slice.call(x,z||0));
}return A;
},fromArguments:function(b,c){return Array.prototype.slice.call(b,c||0);
},fromCollection:function(m){if(qx.core.Variant.isSet(X,Y)){if(m.item){var n=[];

for(var i=0,l=m.length;i<l;i++){n[i]=m[i];
}return n;
}}return Array.prototype.slice.call(m,0);
},fromShortHand:function(u){var w=u.length;
var v=qx.lang.Array.clone(u);
switch(w){case 1:v[1]=v[2]=v[3]=v[0];
break;
case 2:v[2]=v[0];
case 3:v[3]=v[1];
}return v;
},clone:function(E){return E.concat();
},insertAt:function(j,k,i){j.splice(i,0,k);
return j;
},insertBefore:function(f,g,h){var i=f.indexOf(h);

if(i==-1){f.push(g);
}else{f.splice(i,0,g);
}return f;
},insertAfter:function(bl,bm,bn){var i=bl.indexOf(bn);

if(i==-1||i==(bl.length-1)){bl.push(bm);
}else{bl.splice(i+1,0,bm);
}return bl;
},removeAt:function(bc,i){return bc.splice(i,1)[0];
},removeAll:function(a){a.length=0;
return this;
},append:function(ba,bb){{};
Array.prototype.push.apply(ba,bb);
return ba;
},exclude:function(bd,be){{};

for(var i=0,bg=be.length,bf;i<bg;i++){bf=bd.indexOf(be[i]);

if(bf!=-1){bd.splice(bf,1);
}}return bd;
},remove:function(bj,bk){var i=bj.indexOf(bk);

if(i!=-1){bj.splice(i,1);
return bk;
}},contains:function(bp,bq){return bp.indexOf(bq)!==-1;
},equals:function(bh,bi){var length=bh.length;

if(length!==bi.length){return false;
}
for(var i=0;i<length;i++){if(bh[i]!==bi[i]){return false;
}}return true;
},sum:function(C){var D=0;

for(var i=0,l=C.length;i<l;i++){D+=C[i];
}return D;
},max:function(r){{};
var i,t=r.length,s=r[0];

for(i=1;i<t;i++){if(r[i]>s){s=r[i];
}}return s===undefined?null:s;
},min:function(o){{};
var i,q=o.length,p=o[0];

for(i=1;i<q;i++){if(o[i]<p){p=o[i];
}}return p===undefined?null:p;
},unique:function(F){var P=[],H={},K={},M={};
var L,G=0;
var Q=U+qx.lang.Date.now();
var I=false,O=false,R=false;
for(var i=0,N=F.length;i<N;i++){L=F[i];
if(L===null){if(!I){I=true;
P.push(L);
}}else if(L===undefined){}else if(L===false){if(!O){O=true;
P.push(L);
}}else if(L===true){if(!R){R=true;
P.push(L);
}}else if(typeof L===S){if(!H[L]){H[L]=1;
P.push(L);
}}else if(typeof L===T){if(!K[L]){K[L]=1;
P.push(L);
}}else{J=L[Q];

if(J==null){J=L[Q]=G++;
}
if(!M[J]){M[J]=L;
P.push(L);
}}}for(var J in M){try{delete M[J][Q];
}catch(bo){try{M[J][Q]=null;
}catch(B){throw new Error("Cannot clean-up map entry doneObjects["+J+"]["+Q+"]");
}}}return P;
}}});
})();
(function(){var k="()",j=".",i=".prototype.",h='anonymous()',g="qx.lang.Function",f=".constructor()";
qx.Class.define(g,{statics:{getCaller:function(n){return n.caller?n.caller.callee:n.callee.caller;
},getName:function(C){if(C.displayName){return C.displayName;
}
if(C.$$original||C.wrapper||C.classname){return C.classname+f;
}
if(C.$$mixin){for(var E in C.$$mixin.$$members){if(C.$$mixin.$$members[E]==C){return C.$$mixin.name+i+E+k;
}}for(var E in C.$$mixin){if(C.$$mixin[E]==C){return C.$$mixin.name+j+E+k;
}}}
if(C.self){var F=C.self.constructor;

if(F){for(var E in F.prototype){if(F.prototype[E]==C){return F.classname+i+E+k;
}}for(var E in F){if(F[E]==C){return F.classname+j+E+k;
}}}}var D=C.toString().match(/function\s*(\w*)\s*\(.*/);

if(D&&D.length>=1&&D[1]){return D[1]+k;
}return h;
},globalEval:function(B){if(window.execScript){return window.execScript(B);
}else{return eval.call(window,B);
}},empty:function(){},returnTrue:function(){return true;
},returnFalse:function(){return false;
},returnNull:function(){return null;
},returnThis:function(){return this;
},returnZero:function(){return 0;
},create:function(v,w){{};
if(!w){return v;
}if(!(w.self||w.args||w.delay!=null||w.periodical!=null||w.attempt)){return v;
}return function(event){{};
var q=qx.lang.Array.fromArguments(arguments);
if(w.args){q=w.args.concat(q);
}
if(w.delay||w.periodical){var p=qx.event.GlobalError.observeMethod(function(){return v.apply(w.self||this,q);
});

if(w.delay){return window.setTimeout(p,w.delay);
}
if(w.periodical){return window.setInterval(p,w.periodical);
}}else if(w.attempt){var r=false;

try{r=v.apply(w.self||this,q);
}catch(o){}return r;
}else{return v.apply(w.self||this,q);
}};
},bind:function(d,self,e){return this.create(d,{self:self,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null});
},curry:function(l,m){return this.create(l,{args:arguments.length>1?qx.lang.Array.fromArguments(arguments,1):null});
},listener:function(s,self,t){if(arguments.length<3){return function(event){return s.call(self||this,event||window.event);
};
}else{var u=qx.lang.Array.fromArguments(arguments,2);
return function(event){var x=[event||window.event];
x.push.apply(x,u);
s.apply(self||this,x);
};
}},attempt:function(G,self,H){return this.create(G,{self:self,attempt:true,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null})();
},delay:function(a,b,self,c){return this.create(a,{delay:b,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
},periodical:function(y,z,self,A){return this.create(y,{periodical:z,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
}}});
})();
(function(){var e="qx.event.Registration";
qx.Class.define(e,{statics:{__eR:{},getManager:function(z){if(z==null){{};
z=window;
}else if(z.nodeType){z=qx.dom.Node.getWindow(z);
}else if(!qx.dom.Node.isWindow(z)){z=window;
}var B=z.$$hash||qx.core.ObjectRegistry.toHashCode(z);
var A=this.__eR[B];

if(!A){A=new qx.event.Manager(z,this);
this.__eR[B]=A;
}return A;
},removeManager:function(C){var D=C.getWindowId();
delete this.__eR[D];
},addListener:function(p,q,r,self,s){return this.getManager(p).addListener(p,q,r,self,s);
},removeListener:function(f,g,h,self,i){return this.getManager(f).removeListener(f,g,h,self,i);
},removeListenerById:function(c,d){return this.getManager(c).removeListenerById(c,d);
},removeAllListeners:function(L){return this.getManager(L).removeAllListeners(L);
},deleteAllListeners:function(t){var u=t.$$hash;

if(u){this.getManager(t).deleteAllListeners(u);
}},hasListener:function(I,J,K){return this.getManager(I).hasListener(I,J,K);
},serializeListeners:function(x){return this.getManager(x).serializeListeners(x);
},createEvent:function(E,F,G){{};
if(F==null){F=qx.event.type.Event;
}var H=qx.event.Pool.getInstance().getObject(F);
G?H.init.apply(H,G):H.init();
if(E){H.setType(E);
}return H;
},dispatchEvent:function(S,event){return this.getManager(S).dispatchEvent(S,event);
},fireEvent:function(j,k,l,m){var n;
{};
var o=this.createEvent(k,l||null,m);
return this.getManager(j).dispatchEvent(j,o);
},fireNonBubblingEvent:function(M,N,O,P){{};
var Q=this.getManager(M);

if(!Q.hasListener(M,N,false)){return true;
}var R=this.createEvent(N,O||null,P);
return Q.dispatchEvent(M,R);
},PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__eS:[],addHandler:function(y){{};
this.__eS.push(y);
this.__eS.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getHandlers:function(){return this.__eS;
},__eT:[],addDispatcher:function(v,w){{};
this.__eT.push(v);
this.__eT.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getDispatchers:function(){return this.__eT;
}}});
})();
(function(){var f="$$hash",e="",d="qx.core.ObjectRegistry";
qx.Class.define(d,{statics:{inShutDown:false,__hH:{},__hI:0,__hJ:[],register:function(n){var q=this.__hH;

if(!q){return;
}var p=n.$$hash;

if(p==null){var o=this.__hJ;

if(o.length>0){p=o.pop();
}else{p=(this.__hI++)+e;
}n.$$hash=p;
}{};
q[p]=n;
},unregister:function(v){var w=v.$$hash;

if(w==null){return;
}var x=this.__hH;

if(x&&x[w]){delete x[w];
this.__hJ.push(w);
}try{delete v.$$hash;
}catch(y){if(v.removeAttribute){v.removeAttribute(f);
}}},toHashCode:function(s){{};
var u=s.$$hash;

if(u!=null){return u;
}var t=this.__hJ;

if(t.length>0){u=t.pop();
}else{u=(this.__hI++)+e;
}return s.$$hash=u;
},clearHashCode:function(z){{};
var A=z.$$hash;

if(A!=null){this.__hJ.push(A);
try{delete z.$$hash;
}catch(g){if(z.removeAttribute){z.removeAttribute(f);
}}}},fromHashCode:function(c){return this.__hH[c]||null;
},shutdown:function(){this.inShutDown=true;
var j=this.__hH;
var m=[];

for(var k in j){m.push(k);
}m.sort(function(a,b){return parseInt(b)-parseInt(a);
});
var h,i=0,l=m.length;

while(true){try{for(;i<l;i++){k=m[i];
h=j[k];

if(h&&h.dispose){h.dispose();
}}}catch(r){qx.Bootstrap.error(this,"Could not dispose object "+h.toString()+": "+r);

if(i!==l){i++;
continue;
}}break;
}qx.Bootstrap.debug(this,"Disposed "+l+" objects");
delete this.__hH;
},getRegistry:function(){return this.__hH;
}}});
})();
(function(){var b="qx.data.MBinding";
qx.Mixin.define(b,{members:{bind:function(c,d,e,f){return qx.data.SingleValueBinding.bind(this,c,d,e,f);
},removeBinding:function(a){qx.data.SingleValueBinding.removeBindingFromObject(this,a);
},removeAllBindings:function(){qx.data.SingleValueBinding.removeAllBindingsForObject(this);
},getBindings:function(){return qx.data.SingleValueBinding.getAllBindingsForObject(this);
}}});
})();
(function(){var j=":",h="qx.client",g="anonymous",f="...",e="qx.dev.StackTrace",d="",c="\n",b="/source/class/",a=".";
qx.Class.define(e,{statics:{getStackTrace:qx.core.Variant.select(h,{"gecko":function(){try{throw new Error();
}catch(k){var Q=this.getStackTraceFromError(k);
qx.lang.Array.removeAt(Q,0);
var O=this.getStackTraceFromCaller(arguments);
var M=O.length>Q.length?O:Q;

for(var i=0;i<Math.min(O.length,Q.length);i++){var N=O[i];

if(N.indexOf(g)>=0){continue;
}var U=N.split(j);

if(U.length!=2){continue;
}var S=U[0];
var L=U[1];
var K=Q[i];
var V=K.split(j);
var R=V[0];
var J=V[1];

if(qx.Class.getByName(R)){var P=R;
}else{P=S;
}var T=P+j;

if(L){T+=L+j;
}T+=J;
M[i]=T;
}return M;
}},"mshtml|webkit":function(){return this.getStackTraceFromCaller(arguments);
},"opera":function(){var bb;

try{bb.bar();
}catch(n){var bc=this.getStackTraceFromError(n);
qx.lang.Array.removeAt(bc,0);
return bc;
}return [];
}}),getStackTraceFromCaller:qx.core.Variant.select(h,{"opera":function(I){return [];
},"default":function(v){var A=[];
var z=qx.lang.Function.getCaller(v);
var w={};

while(z){var x=qx.lang.Function.getName(z);
A.push(x);

try{z=z.caller;
}catch(m){break;
}
if(!z){break;
}var y=qx.core.ObjectRegistry.toHashCode(z);

if(w[y]){A.push(f);
break;
}w[y]=z;
}return A;
}}),getStackTraceFromError:qx.core.Variant.select(h,{"gecko":function(B){if(!B.stack){return [];
}var H=/@(.+):(\d+)$/gm;
var C;
var D=[];

while((C=H.exec(B.stack))!=null){var E=C[1];
var G=C[2];
var F=this.__kk(E);
D.push(F+j+G);
}return D;
},"webkit":function(l){if(l.sourceURL&&l.line){return [this.__kk(l.sourceURL)+j+l.line];
}else{return [];
}},"opera":function(o){if(o.message.indexOf("Backtrace:")<0){return [];
}var q=[];
var r=qx.lang.String.trim(o.message.split("Backtrace:")[1]);
var s=r.split(c);

for(var i=0;i<s.length;i++){var p=s[i].match(/\s*Line ([0-9]+) of.* (\S.*)/);

if(p&&p.length>=2){var u=p[1];
var t=this.__kk(p[2]);
q.push(t+j+u);
}}return q;
},"default":function(){return [];
}}),__kk:function(W){var ba=b;
var X=W.indexOf(ba);
var Y=(X==-1)?W:W.substring(X+ba.length).replace(/\//g,a).replace(/\.js$/,d);
return Y;
}}});
})();
(function(){var a="qx.lang.RingBuffer";
qx.Class.define(a,{extend:Object,construct:function(b){this.setMaxEntries(b||50);
},members:{__hA:0,__hB:0,__hC:false,__hD:0,__hE:null,__hF:null,setMaxEntries:function(i){this.__hF=i;
this.clear();
},getMaxEntries:function(){return this.__hF;
},addEntry:function(c){this.__hE[this.__hA]=c;
this.__hA=this.__hG(this.__hA,1);
var d=this.getMaxEntries();

if(this.__hB<d){this.__hB++;
}if(this.__hC&&(this.__hD<d)){this.__hD++;
}},mark:function(){this.__hC=true;
this.__hD=0;
},clearMark:function(){this.__hC=false;
},getAllEntries:function(){return this.getEntries(this.getMaxEntries(),false);
},getEntries:function(j,k){if(j>this.__hB){j=this.__hB;
}if(k&&this.__hC&&(j>this.__hD)){j=this.__hD;
}
if(j>0){var m=this.__hG(this.__hA,-1);
var l=this.__hG(m,-j+1);
var n;

if(l<=m){n=this.__hE.slice(l,m+1);
}else{n=this.__hE.slice(l,this.__hB).concat(this.__hE.slice(0,m+1));
}}else{n=[];
}return n;
},clear:function(){this.__hE=new Array(this.getMaxEntries());
this.__hB=0;
this.__hD=0;
this.__hA=0;
},__hG:function(e,f){var g=this.getMaxEntries();
var h=(e+f)%g;
if(h<0){h+=g;
}return h;
}}});
})();
(function(){var a="qx.log.appender.RingBuffer";
qx.Class.define(a,{extend:qx.lang.RingBuffer,construct:function(e){this.setMaxMessages(e||50);
},members:{setMaxMessages:function(f){this.setMaxEntries(f);
},getMaxMessages:function(){return this.getMaxEntries();
},process:function(d){this.addEntry(d);
},getAllLogEvents:function(){return this.getAllEntries();
},retrieveLogEvents:function(b,c){return this.getEntries(b,c);
},clearHistory:function(){this.clear();
}}});
})();
(function(){var bi="node",bh="error",bg="...(+",bf="array",be=")",bd="info",bc="instance",bb="string",ba="null",Y="class",bD="number",bC="stringify",bB="]",bA="unknown",bz="function",by="boolean",bx="debug",bw="map",bv="undefined",bu="qx.log.Logger",bp=")}",bq="#",bn="warn",bo="document",bl="{...(",bm="[",bj="text[",bk="[...(",br="\n",bs=")]",bt="object";
qx.Class.define(bu,{statics:{__eU:bx,setLevel:function(X){this.__eU=X;
},getLevel:function(){return this.__eU;
},setTreshold:function(f){this.__eX.setMaxMessages(f);
},getTreshold:function(){return this.__eX.getMaxMessages();
},__eV:{},__eW:0,register:function(u){if(u.$$id){return;
}var v=this.__eW++;
this.__eV[v]=u;
u.$$id=v;
var w=this.__eX.getAllLogEvents();

for(var i=0,l=w.length;i<l;i++){u.process(w[i]);
}},unregister:function(V){var W=V.$$id;

if(W==null){return;
}delete this.__eV[W];
delete V.$$id;
},debug:function(bO,bP){qx.log.Logger.__fa(bx,arguments);
},info:function(T,U){qx.log.Logger.__fa(bd,arguments);
},warn:function(d,e){qx.log.Logger.__fa(bn,arguments);
},error:function(bH,bI){qx.log.Logger.__fa(bh,arguments);
},trace:function(I){qx.log.Logger.__fa(bd,[I,qx.dev.StackTrace.getStackTrace().join(br)]);
},deprecatedMethodWarning:function(a,b){var c;
{};
},deprecatedClassWarning:function(bE,bF){var bG;
{};
},deprecatedEventWarning:function(r,event,s){var t;
{};
},deprecatedMixinWarning:function(o,p){var q;
{};
},deprecatedConstantWarning:function(j,k,m){var self,n;
{};
},deprecateMethodOverriding:function(bJ,bK,bL,bM){var bN;
{};
},clear:function(){this.__eX.clearHistory();
},__eX:new qx.log.appender.RingBuffer(50),__eY:{debug:0,info:1,warn:2,error:3},__fa:function(J,K){var P=this.__eY;

if(P[J]<P[this.__eU]){return;
}var M=K.length<2?null:K[0];
var O=M?1:0;
var L=[];

for(var i=O,l=K.length;i<l;i++){L.push(this.__fc(K[i],true));
}var Q=new Date;
var R={time:Q,offset:Q-qx.Bootstrap.LOADSTART,level:J,items:L,win:window};
if(M){if(M instanceof qx.core.Object){R.object=M.$$hash;
}else if(M.$$type){R.clazz=M;
}}this.__eX.process(R);
var S=this.__eV;

for(var N in S){S[N].process(R);
}},__fb:function(g){if(g===undefined){return bv;
}else if(g===null){return ba;
}
if(g.$$type){return Y;
}var h=typeof g;

if(h===bz||h==bb||h===bD||h===by){return h;
}else if(h===bt){if(g.nodeType){return bi;
}else if(g.classname){return bc;
}else if(g instanceof Array){return bf;
}else if(g instanceof Error){return bh;
}else{return bw;
}}
if(g.toString){return bC;
}return bA;
},__fc:function(x,y){var F=this.__fb(x);
var B=bA;
var A=[];

switch(F){case ba:case bv:B=F;
break;
case bb:case bD:case by:B=x;
break;
case bi:if(x.nodeType===9){B=bo;
}else if(x.nodeType===3){B=bj+x.nodeValue+bB;
}else if(x.nodeType===1){B=x.nodeName.toLowerCase();

if(x.id){B+=bq+x.id;
}}else{B=bi;
}break;
case bz:B=qx.lang.Function.getName(x)||F;
break;
case bc:B=x.basename+bm+x.$$hash+bB;
break;
case Y:case bC:B=x.toString();
break;
case bh:A=qx.dev.StackTrace.getStackTraceFromError(x);
B=x.toString();
break;
case bf:if(y){B=[];

for(var i=0,l=x.length;i<l;i++){if(B.length>20){B.push(bg+(l-i)+be);
break;
}B.push(this.__fc(x[i],false));
}}else{B=bk+x.length+bs;
}break;
case bw:if(y){var z;
var E=[];

for(var D in x){E.push(D);
}E.sort();
B=[];

for(var i=0,l=E.length;i<l;i++){if(B.length>20){B.push(bg+(l-i)+be);
break;
}D=E[i];
z=this.__fc(x[D],false);
z.key=D;
B.push(z);
}}else{var C=0;

for(var D in x){C++;
}B=bl+C+bp;
}break;
}return {type:F,text:B,trace:A};
}},defer:function(G){var H=qx.Bootstrap.$$logs;

for(var i=0;i<H.length;i++){G.__fa(H[i][0],H[i][1]);
}qx.Bootstrap.debug=G.debug;
qx.Bootstrap.info=G.info;
qx.Bootstrap.warn=G.warn;
qx.Bootstrap.error=G.error;
qx.Bootstrap.trace=G.trace;
}});
})();
(function(){var o="set",n="get",m="reset",k="MSIE 6.0",j="qx.core.Object",h="]",g="rv:1.8.1",f="[",d="$$user_",c="Object";
qx.Class.define(j,{extend:Object,include:[qx.data.MBinding],construct:function(){qx.core.ObjectRegistry.register(this);
},statics:{$$type:c},members:{toHashCode:function(){return this.$$hash;
},toString:function(){return this.classname+f+this.$$hash+h;
},base:function(L,M){{};

if(arguments.length===1){return L.callee.base.call(this);
}else{return L.callee.base.apply(this,Array.prototype.slice.call(arguments,1));
}},self:function(T){return T.callee.self;
},clone:function(){var q=this.constructor;
var p=new q;
var s=qx.Class.getProperties(q);
var r=qx.core.Property.$$store.user;
var t=qx.core.Property.$$method.set;
var name;
for(var i=0,l=s.length;i<l;i++){name=s[i];

if(this.hasOwnProperty(r[name])){p[t[name]](this[r[name]]);
}}return p;
},set:function(bp,bq){var bs=qx.core.Property.$$method.set;

if(qx.Bootstrap.isString(bp)){if(!this[bs[bp]]){if(this[o+qx.Bootstrap.firstUp(bp)]!=undefined){this[o+qx.Bootstrap.firstUp(bp)](bq);
return this;
}{};
}return this[bs[bp]](bq);
}else{for(var br in bp){if(!this[bs[br]]){if(this[o+qx.Bootstrap.firstUp(br)]!=undefined){this[o+qx.Bootstrap.firstUp(br)](bp[br]);
continue;
}{};
}this[bs[br]](bp[br]);
}return this;
}},get:function(R){var S=qx.core.Property.$$method.get;

if(!this[S[R]]){if(this[n+qx.Bootstrap.firstUp(R)]!=undefined){return this[n+qx.Bootstrap.firstUp(R)]();
}{};
}return this[S[R]]();
},reset:function(P){var Q=qx.core.Property.$$method.reset;

if(!this[Q[P]]){if(this[m+qx.Bootstrap.firstUp(P)]!=undefined){this[m+qx.Bootstrap.firstUp(P)]();
return;
}{};
}this[Q[P]]();
},__kM:qx.event.Registration,addListener:function(bv,bw,self,bx){if(!this.$$disposed){return this.__kM.addListener(this,bv,bw,self,bx);
}return null;
},addListenerOnce:function(bC,bD,self,bE){var bF=function(e){bD.call(self||this,e);
this.removeListener(bC,bF,this,bE);
};
return this.addListener(bC,bF,this,bE);
},removeListener:function(z,A,self,B){if(!this.$$disposed){return this.__kM.removeListener(this,z,A,self,B);
}return false;
},removeListenerById:function(y){if(!this.$$disposed){return this.__kM.removeListenerById(this,y);
}return false;
},hasListener:function(bh,bi){return this.__kM.hasListener(this,bh,bi);
},dispatchEvent:function(O){if(!this.$$disposed){return this.__kM.dispatchEvent(this,O);
}return true;
},fireEvent:function(v,w,x){if(!this.$$disposed){return this.__kM.fireEvent(this,v,w,x);
}return true;
},fireNonBubblingEvent:function(bk,bl,bm){if(!this.$$disposed){return this.__kM.fireNonBubblingEvent(this,bk,bl,bm);
}return true;
},fireDataEvent:function(by,bz,bA,bB){if(!this.$$disposed){if(bA===undefined){bA=null;
}return this.__kM.fireNonBubblingEvent(this,by,qx.event.type.Data,[bz,bA,!!bB]);
}return true;
},__kN:null,setUserData:function(bn,bo){if(!this.__kN){this.__kN={};
}this.__kN[bn]=bo;
},getUserData:function(bt){if(!this.__kN){return null;
}var bu=this.__kN[bt];
return bu===undefined?null:bu;
},__kO:qx.log.Logger,debug:function(N){this.__kO.debug(this,N);
},info:function(C){this.__kO.info(this,C);
},warn:function(bg){this.__kO.warn(this,bg);
},error:function(b){this.__kO.error(this,b);
},trace:function(){this.__kO.trace(this);
},isDisposed:function(){return this.$$disposed||false;
},dispose:function(){var be,bc,bb,bf;
if(this.$$disposed){return;
}this.$$disposed=true;
this.$$instance=null;
this.$$allowconstruct=null;
{};
var bd=this.constructor;
var ba;

while(bd.superclass){if(bd.$$destructor){bd.$$destructor.call(this);
}if(bd.$$includes){ba=bd.$$flatIncludes;

for(var i=0,l=ba.length;i<l;i++){if(ba[i].$$destructor){ba[i].$$destructor.call(this);
}}}bd=bd.superclass;
}if(this.__kP){this.__kP();
}{};
},__kP:null,__kQ:function(){var a=qx.Class.getProperties(this.constructor);

for(var i=0,l=a.length;i<l;i++){delete this[d+a[i]];
}},_disposeObjects:function(bj){qx.util.DisposeUtil.disposeObjects(this,arguments);
},_disposeSingletonObjects:function(bG){qx.util.DisposeUtil.disposeObjects(this,arguments,true);
},_disposeArray:function(u){qx.util.DisposeUtil.disposeArray(this,u);
},_disposeMap:function(Y){qx.util.DisposeUtil.disposeMap(this,Y);
}},settings:{"qx.disposerDebugLevel":0},defer:function(U,V){{};
var X=navigator.userAgent.indexOf(k)!=-1;
var W=navigator.userAgent.indexOf(g)!=-1;
if(X||W){V.__kP=V.__kQ;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.event.Registration.removeAllListeners(this);
}else{qx.event.Registration.deleteAllListeners(this);
}qx.core.ObjectRegistry.unregister(this);
this.__kN=null;
var F=this.constructor;
var J;
var K=qx.core.Property.$$store;
var H=K.user;
var I=K.theme;
var D=K.inherit;
var G=K.useinit;
var E=K.init;

while(F){J=F.$$properties;

if(J){for(var name in J){if(J[name].dereference){this[H[name]]=this[I[name]]=this[D[name]]=this[G[name]]=this[E[name]]=undefined;
}}}F=F.superclass;
}}});
})();
(function(){var a="qx.event.IEventHandler";
qx.Interface.define(a,{statics:{TARGET_DOMNODE:1,TARGET_WINDOW:2,TARGET_OBJECT:3},members:{canHandleEvent:function(b,c){},registerEvent:function(d,e,f){},unregisterEvent:function(g,h,i){}}});
})();
(function(){var g="qx.globalErrorHandling",f="on",d="qx.event.GlobalError";
qx.Bootstrap.define(d,{statics:{setErrorHandler:function(l,m){this.__jS=l||null;
this.__jT=m||window;

if(qx.core.Setting.get(g)===f){if(l&&window.onerror){var n=qx.Bootstrap.bind(this.__jV,this);

if(this.__jU==null){this.__jU=window.onerror;
}var self=this;
window.onerror=function(e){self.__jU(e);
n(e);
};
}
if(l&&!window.onerror){window.onerror=qx.Bootstrap.bind(this.__jV,this);
}if(this.__jS==null){if(this.__jU!=null){window.onerror=this.__jU;
this.__jU=null;
}else{window.onerror=null;
}}}},__jV:function(a,b,c){if(this.__jS){this.handleError(new qx.core.WindowError(a,b,c));
return true;
}},observeMethod:function(j){if(qx.core.Setting.get(g)===f){var self=this;
return function(){if(!self.__jS){return j.apply(this,arguments);
}
try{return j.apply(this,arguments);
}catch(h){self.handleError(new qx.core.GlobalError(h,arguments));
}};
}else{return j;
}},handleError:function(i){if(this.__jS){this.__jS.call(this.__jT,i);
}}},defer:function(k){qx.core.Setting.define(g,f);
k.setErrorHandler(null,null);
}});
})();
(function(){var m="ready",l="qx.client",k="mshtml",j="load",i="unload",h="qx.event.handler.Application",g="complete",f="qx.application",d="gecko|opera|webkit",c="left",a="DOMContentLoaded",b="shutdown";
qx.Class.define(h,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(n){qx.core.Object.call(this);
this._window=n.getWindow();
this.__ht=false;
this.__hu=false;
this._initObserver();
qx.event.handler.Application.$$instance=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{ready:1,shutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true,onScriptLoaded:function(){var A=qx.event.handler.Application.$$instance;

if(A){A.__hx();
}}},members:{canHandleEvent:function(s,t){},registerEvent:function(o,p,q){},unregisterEvent:function(u,v,w){},__hv:null,__ht:null,__hu:null,__hw:null,__hx:function(){if(!this.__hv&&this.__ht&&qx.$$loader.scriptLoaded){try{var z=qx.core.Setting.get(f);

if(!qx.Class.getByName(z)){return;
}}catch(e){}if(qx.core.Variant.isSet(l,k)){if(qx.event.Registration.hasListener(this._window,m)){this.__hv=true;
qx.event.Registration.fireEvent(this._window,m);
}}else{this.__hv=true;
qx.event.Registration.fireEvent(this._window,m);
}}},isApplicationReady:function(){return this.__hv;
},_initObserver:function(){if(qx.$$domReady||document.readyState==g||document.readyState==m){this.__ht=true;
this.__hx();
}else{this._onNativeLoadWrapped=qx.lang.Function.bind(this._onNativeLoad,this);

if(qx.core.Variant.isSet(l,d)){qx.bom.Event.addNativeListener(this._window,a,this._onNativeLoadWrapped);
}else if(qx.core.Variant.isSet(l,k)){var self=this;
var y=function(){try{document.documentElement.doScroll(c);

if(document.body){self._onNativeLoadWrapped();
}}catch(r){window.setTimeout(y,100);
}};
y();
}qx.bom.Event.addNativeListener(this._window,j,this._onNativeLoadWrapped);
}this._onNativeUnloadWrapped=qx.lang.Function.bind(this._onNativeUnload,this);
qx.bom.Event.addNativeListener(this._window,i,this._onNativeUnloadWrapped);
},_stopObserver:function(){if(this._onNativeLoadWrapped){qx.bom.Event.removeNativeListener(this._window,j,this._onNativeLoadWrapped);
}qx.bom.Event.removeNativeListener(this._window,i,this._onNativeUnloadWrapped);
this._onNativeLoadWrapped=null;
this._onNativeUnloadWrapped=null;
},_onNativeLoad:qx.event.GlobalError.observeMethod(function(){this.__ht=true;
this.__hx();
}),_onNativeUnload:qx.event.GlobalError.observeMethod(function(){if(!this.__hw){this.__hw=true;

try{qx.event.Registration.fireEvent(this._window,b);
}catch(e){throw e;
}finally{qx.core.ObjectRegistry.shutdown();
}}})},destruct:function(){this._stopObserver();
this._window=null;
},defer:function(x){qx.event.Registration.addHandler(x);
}});
})();
(function(){var d="qx.event.handler.Window";
qx.Class.define(d,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(l){qx.core.Object.call(this);
this._manager=l;
this._window=l.getWindow();
this._initWindowObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{error:1,load:1,beforeunload:1,unload:1,resize:1,scroll:1,beforeshutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(t,u){},registerEvent:function(f,g,h){},unregisterEvent:function(a,b,c){},_initWindowObserver:function(){this._onNativeWrapper=qx.lang.Function.listener(this._onNative,this);
var j=qx.event.handler.Window.SUPPORTED_TYPES;

for(var i in j){qx.bom.Event.addNativeListener(this._window,i,this._onNativeWrapper);
}},_stopWindowObserver:function(){var s=qx.event.handler.Window.SUPPORTED_TYPES;

for(var r in s){qx.bom.Event.removeNativeListener(this._window,r,this._onNativeWrapper);
}},_onNative:qx.event.GlobalError.observeMethod(function(e){if(this.isDisposed()){return;
}var n=this._window;

try{var q=n.document;
}catch(e){return ;
}var o=q.documentElement;
var m=e.target||e.srcElement;

if(m==null||m===n||m===q||m===o){var event=qx.event.Registration.createEvent(e.type,qx.event.type.Native,[e,n]);
qx.event.Registration.dispatchEvent(n,event);
var p=event.getReturnValue();

if(p!=null){e.returnValue=p;
return p;
}}})},destruct:function(){this._stopWindowObserver();
this._manager=this._window=null;
},defer:function(k){qx.event.Registration.addHandler(k);
}});
})();
(function(){var a="qx.event.IEventDispatcher";
qx.Interface.define(a,{members:{canDispatchEvent:function(d,event,e){this.assertInstance(event,qx.event.type.Event);
this.assertString(e);
},dispatchEvent:function(b,event,c){this.assertInstance(event,qx.event.type.Event);
this.assertString(c);
}}});
})();
(function(){var a="qx.event.dispatch.Direct";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,construct:function(j){this._manager=j;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST},members:{canDispatchEvent:function(k,event,m){return !event.getBubbles();
},dispatchEvent:function(c,event,d){var g,e;
{};
event.setEventPhase(qx.event.type.Event.AT_TARGET);
var h=this._manager.getListeners(c,d,false);

if(h){for(var i=0,l=h.length;i<l;i++){var f=h[i].context||c;
h[i].handler.call(f,event);
}}}},defer:function(b){qx.event.Registration.addDispatcher(b);
}});
})();
(function(){var f="ready",d="qx.application",c="beforeunload",b="qx.core.Init",a="shutdown";
qx.Class.define(b,{statics:{getApplication:function(){return this.__jP||null;
},ready:function(){if(this.__jP){return;
}
if(qx.bom.client.Engine.UNKNOWN_ENGINE){qx.log.Logger.warn("Could not detect engine!");
}
if(qx.bom.client.Engine.UNKNOWN_VERSION){qx.log.Logger.warn("Could not detect the version of the engine!");
}
if(qx.bom.client.Platform.UNKNOWN_PLATFORM){qx.log.Logger.warn("Could not detect platform!");
}
if(qx.bom.client.System.UNKNOWN_SYSTEM){qx.log.Logger.warn("Could not detect system!");
}qx.log.Logger.debug(this,"Load runtime: "+(new Date-qx.Bootstrap.LOADSTART)+"ms");
var h=qx.core.Setting.get(d);
var i=qx.Class.getByName(h);

if(i){this.__jP=new i;
var g=new Date;
this.__jP.main();
qx.log.Logger.debug(this,"Main runtime: "+(new Date-g)+"ms");
var g=new Date;
this.__jP.finalize();
qx.log.Logger.debug(this,"Finalize runtime: "+(new Date-g)+"ms");
}else{qx.log.Logger.warn("Missing application class: "+h);
}},__jQ:function(e){var l=this.__jP;

if(l){e.setReturnValue(l.close());
}},__jR:function(){var j=this.__jP;

if(j){j.terminate();
}}},defer:function(k){qx.event.Registration.addListener(window,f,k.ready,k);
qx.event.Registration.addListener(window,a,k.__jR,k);
qx.event.Registration.addListener(window,c,k.__jQ,k);
}});
})();
(function(){var a="qx.application.IApplication";
qx.Interface.define(a,{members:{main:function(){},finalize:function(){},close:function(){},terminate:function(){}}});
})();
(function(){var a="qx.application.Native";
qx.Class.define(a,{extend:qx.core.Object,implement:[qx.application.IApplication],members:{main:function(){},finalize:function(){},close:function(){},terminate:function(){}}});
})();
(function(){var l="</table>",k="</th></tr>",j="demobrowser.demo.event.EventDemo",h="</th><th>",g="",f="</td><td>",e="<table><tr><th>",d="<tr><td>",c="btnClear",b="click",a="</td></tr>";
qx.Class.define(j,{extend:qx.application.Native,members:{main:function(){qx.application.Native.prototype.main.call(this);
var m=document.getElementById(c);

if(m){qx.bom.Element.addListener(m,b,this._clearLog,this);
}},_initLogger:function(n,o,p){this.__Lx=e+n.join(h)+k;
this.__Ly=p||50;
this.__Lz=o;
this._clearLog();
},_clearLog:function(){this.__Lz.innerHTML=this.__Lx+l;
this.__LA=[];
},_log:function(q){this.__LA.unshift(q);
this.__LA=this.__LA.slice(0,this.__Ly);
var r=[this.__Lx];

for(var i=0;i<this.__LA.length;i++){r.push(d,this.__LA[i].join(f),a);
}r.push(l);
this.__Lz.innerHTML=r.join(g);
this.__Lz.scrollTop=0;
},__Lx:null,__Ly:null,__Lz:null,__LA:null},destruct:function(){this.__Lz=this.__LA=null;
}});
})();
(function(){var r="",q="X",p="start",o="finished",n="loading",m="_anotherStartCallback",l="_finishedCallback",k="_startCallback",j="_anotherFinishedCallback",i="_loadingCallback",c="logger",h="Callback",g="Dispatch",b="Message",a="Receiving",f="Subscribe",d="demobrowser.demo.event.Event_Bus";
qx.Class.define(d,{extend:demobrowser.demo.event.EventDemo,members:{main:function(){demobrowser.demo.event.EventDemo.prototype.main.call(this);
this._initLogger([f,g,a,b,h],document.getElementById(c),50);
var s=qx.event.message.Bus;
s.subscribe(p,this._startCallback,this);
this._log([q,r,r,p,k]);
s.subscribe(p,this._anotherStartCallback,this);
this._log([q,r,r,p,m]);
s.subscribe(n,this._loadingCallback,this);
this._log([q,r,r,n,i]);
s.subscribe(o,this._finishedCallback,this);
this._log([q,r,r,o,l]);
s.subscribe(o,this._anotherFinishedCallback,this);
this._log([q,r,r,o,j]);
qx.event.Timer.once(function(e){this._log([r,q,r,p,r]);
s.getInstance().dispatch(p);
},this,1000);
qx.event.Timer.once(function(e){this._log([r,q,r,n,r]);
s.getInstance().dispatch(n);
},this,2500);
qx.event.Timer.once(function(e){this._log([r,q,r,n,r]);
s.getInstance().dispatch(n);
},this,4000);
qx.event.Timer.once(function(e){this._log([r,q,r,o,r]);
s.getInstance().dispatch(o);
},this,5000);
},_startCallback:function(e){this._log([r,r,q,p,k]);
},_anotherStartCallback:function(e){this._log([r,r,q,p,m]);
},_loadingCallback:function(e){this._log([r,r,q,n,i]);
},_finishedCallback:function(e){this._log([r,r,q,o,l]);
},_anotherFinishedCallback:function(e){this._log([r,r,q,o,j]);
}}});
})();
(function(){var a="qx.event.type.Event";
qx.Class.define(a,{extend:qx.core.Object,statics:{CAPTURING_PHASE:1,AT_TARGET:2,BUBBLING_PHASE:3},members:{init:function(g,h){{};
this._type=null;
this._target=null;
this._currentTarget=null;
this._relatedTarget=null;
this._originalTarget=null;
this._stopPropagation=false;
this._preventDefault=false;
this._bubbles=!!g;
this._cancelable=!!h;
this._timeStamp=(new Date()).getTime();
this._eventPhase=null;
return this;
},clone:function(k){if(k){var l=k;
}else{var l=qx.event.Pool.getInstance().getObject(this.constructor);
}l._type=this._type;
l._target=this._target;
l._currentTarget=this._currentTarget;
l._relatedTarget=this._relatedTarget;
l._originalTarget=this._originalTarget;
l._stopPropagation=this._stopPropagation;
l._bubbles=this._bubbles;
l._preventDefault=this._preventDefault;
l._cancelable=this._cancelable;
return l;
},stop:function(){if(this._bubbles){this.stopPropagation();
}
if(this._cancelable){this.preventDefault();
}},stopPropagation:function(){{};
this._stopPropagation=true;
},getPropagationStopped:function(){return !!this._stopPropagation;
},preventDefault:function(){{};
this._preventDefault=true;
},getDefaultPrevented:function(){return !!this._preventDefault;
},getType:function(){return this._type;
},setType:function(j){this._type=j;
},getEventPhase:function(){return this._eventPhase;
},setEventPhase:function(c){this._eventPhase=c;
},getTimeStamp:function(){return this._timeStamp;
},getTarget:function(){return this._target;
},setTarget:function(b){this._target=b;
},getCurrentTarget:function(){return this._currentTarget||this._target;
},setCurrentTarget:function(f){this._currentTarget=f;
},getRelatedTarget:function(){return this._relatedTarget;
},setRelatedTarget:function(d){this._relatedTarget=d;
},getOriginalTarget:function(){return this._originalTarget;
},setOriginalTarget:function(i){this._originalTarget=i;
},getBubbles:function(){return this._bubbles;
},setBubbles:function(e){this._bubbles=e;
},isCancelable:function(){return this._cancelable;
},setCancelable:function(m){this._cancelable=m;
}},destruct:function(){this._target=this._currentTarget=this._relatedTarget=this._originalTarget=null;
}});
})();
(function(){var d="qx.event.type.Data";
qx.Class.define(d,{extend:qx.event.type.Event,members:{__jk:null,__jl:null,init:function(a,b,c){qx.event.type.Event.prototype.init.call(this,false,c);
this.__jk=a;
this.__jl=b;
return this;
},clone:function(e){var f=qx.event.type.Event.prototype.clone.call(this,e);
f.__jk=this.__jk;
f.__jl=this.__jl;
return f;
},getData:function(){return this.__jk;
},getOldData:function(){return this.__jl;
}},destruct:function(){this.__jk=this.__jl=null;
}});
})();
(function(){var ch="get",cg="",cf="[",ce="last",cd="change",cc="]",cb=".",ca="Number",bY="String",bX="set",cw="deepBinding",cv="item",cu="reset",ct="' (",cs="Boolean",cr=") to the object '",cq="Integer",cp="qx.data.SingleValueBinding",co="No event could be found for the property",cn="Binding from '",cl="PositiveNumber",cm="PositiveInteger",cj="Binding does not exist!",ck=").",ci="Date";
qx.Class.define(cp,{statics:{DEBUG_ON:false,__fP:{},bind:function(f,g,h,k,l){var v=this.__fR(f,g,h,k,l);
var q=g.split(cb);
var n=this.__fY(q);
var u=[];
var r=[];
var s=[];
var o=[];
var p=f;
for(var i=0;i<q.length;i++){if(n[i]!==cg){o.push(cd);
}else{o.push(this.__fT(p,q[i]));
}u[i]=p;
if(i==q.length-1){if(n[i]!==cg){var y=n[i]===ce?p.length-1:n[i];
var m=p.getItem(y);
this.__fX(m,h,k,l,f);
s[i]=this.__ga(p,o[i],h,k,l,n[i]);
}else{if(q[i]!=null&&p[ch+qx.lang.String.firstUp(q[i])]!=null){var m=p[ch+qx.lang.String.firstUp(q[i])]();
this.__fX(m,h,k,l,f);
}s[i]=this.__ga(p,o[i],h,k,l);
}}else{var w={index:i,propertyNames:q,sources:u,listenerIds:s,arrayIndexValues:n,targetObject:h,targetPropertyChain:k,options:l,listeners:r};
var t=qx.lang.Function.bind(this.__fQ,this,w);
r.push(t);
s[i]=p.addListener(o[i],t);
}if(p[ch+qx.lang.String.firstUp(q[i])]==null){p=null;
}else if(n[i]!==cg){p=p[ch+qx.lang.String.firstUp(q[i])](n[i]);
}else{p=p[ch+qx.lang.String.firstUp(q[i])]();
}
if(!p){break;
}}var x={type:cw,listenerIds:s,sources:u,targetListenerIds:v.listenerIds,targets:v.targets};
this.__gb(x,f,g,h,k);
return x;
},__fQ:function(bD){if(bD.options&&bD.options.onUpdate){bD.options.onUpdate(bD.sources[bD.index],bD.targetObject);
}for(var j=bD.index+1;j<bD.propertyNames.length;j++){var bH=bD.sources[j];
bD.sources[j]=null;

if(!bH){continue;
}bH.removeListenerById(bD.listenerIds[j]);
}var bH=bD.sources[bD.index];
for(var j=bD.index+1;j<bD.propertyNames.length;j++){if(bD.arrayIndexValues[j-1]!==cg){bH=bH[ch+qx.lang.String.firstUp(bD.propertyNames[j-1])](bD.arrayIndexValues[j-1]);
}else{bH=bH[ch+qx.lang.String.firstUp(bD.propertyNames[j-1])]();
}bD.sources[j]=bH;
if(!bH){this.__fU(bD.targetObject,bD.targetPropertyChain);
break;
}if(j==bD.propertyNames.length-1){if(qx.Class.implementsInterface(bH,qx.data.IListData)){var bI=bD.arrayIndexValues[j]===ce?bH.length-1:bD.arrayIndexValues[j];
var bF=bH.getItem(bI);
this.__fX(bF,bD.targetObject,bD.targetPropertyChain,bD.options,bD.sources[bD.index]);
bD.listenerIds[j]=this.__ga(bH,cd,bD.targetObject,bD.targetPropertyChain,bD.options,bD.arrayIndexValues[j]);
}else{if(bD.propertyNames[j]!=null&&bH[ch+qx.lang.String.firstUp(bD.propertyNames[j])]!=null){var bF=bH[ch+qx.lang.String.firstUp(bD.propertyNames[j])]();
this.__fX(bF,bD.targetObject,bD.targetPropertyChain,bD.options,bD.sources[bD.index]);
}var bG=this.__fT(bH,bD.propertyNames[j]);
bD.listenerIds[j]=this.__ga(bH,bG,bD.targetObject,bD.targetPropertyChain,bD.options);
}}else{if(bD.listeners[j]==null){var bE=qx.lang.Function.bind(this.__fQ,this,bD);
bD.listeners.push(bE);
}if(qx.Class.implementsInterface(bH,qx.data.IListData)){var bG=cd;
}else{var bG=this.__fT(bH,bD.propertyNames[j]);
}bD.listenerIds[j]=bH.addListener(bG,bD.listeners[j]);
}}},__fR:function(bJ,bK,bL,bM,bN){var bR=bM.split(cb);
var bP=this.__fY(bR);
var bW=[];
var bV=[];
var bT=[];
var bS=[];
var bQ=bL;
for(var i=0;i<bR.length-1;i++){if(bP[i]!==cg){bS.push(cd);
}else{try{bS.push(this.__fT(bQ,bR[i]));
}catch(e){break;
}}bW[i]=bQ;
var bU=function(){for(var j=i+1;j<bR.length-1;j++){var c=bW[j];
bW[j]=null;

if(!c){continue;
}c.removeListenerById(bT[j]);
}var c=bW[i];
for(var j=i+1;j<bR.length-1;j++){var a=qx.lang.String.firstUp(bR[j-1]);
if(bP[j-1]!==cg){var d=bP[j-1]===ce?c.getLength()-1:bP[j-1];
c=c[ch+a](d);
}else{c=c[ch+a]();
}bW[j]=c;
if(bV[j]==null){bV.push(bU);
}if(qx.Class.implementsInterface(c,qx.data.IListData)){var b=cd;
}else{try{var b=qx.data.SingleValueBinding.__fT(c,bR[j]);
}catch(e){break;
}}bT[j]=c.addListener(b,bV[j]);
}qx.data.SingleValueBinding.__fS(bJ,bK,bL,bM,bN);
};
bV.push(bU);
bT[i]=bQ.addListener(bS[i],bU);
var bO=qx.lang.String.firstUp(bR[i]);
if(bQ[ch+bO]==null){bQ=null;
}else if(bP[i]!==cg){bQ=bQ[ch+bO](bP[i]);
}else{bQ=bQ[ch+bO]();
}
if(!bQ){break;
}}return {listenerIds:bT,targets:bW};
},__fS:function(T,U,V,W,X){var bc=this.__fW(T,U);

if(bc!=null){var be=U.substring(U.lastIndexOf(cb)+1,U.length);
if(be.charAt(be.length-1)==cc){var Y=be.substring(be.lastIndexOf(cf)+1,be.length-1);
var bb=be.substring(0,be.lastIndexOf(cf));
var bd=bc[ch+qx.lang.String.firstUp(bb)]();

if(Y==ce){Y=bd.length-1;
}
if(bd!=null){var ba=bd.getItem(Y);
}}else{var ba=bc[ch+qx.lang.String.firstUp(be)]();
}}ba=qx.data.SingleValueBinding.__gc(ba,V,W,X);
this.__fV(V,W,ba);
},__fT:function(H,I){var J=this.__gd(H,I);
if(J==null){if(qx.Class.supportsEvent(H.constructor,I)){J=I;
}else if(qx.Class.supportsEvent(H.constructor,cd+qx.lang.String.firstUp(I))){J=cd+qx.lang.String.firstUp(I);
}else{throw new qx.core.AssertionError(co,I);
}}return J;
},__fU:function(cU,cV){var cW=this.__fW(cU,cV);

if(cW!=null){var cX=cV.substring(cV.lastIndexOf(cb)+1,cV.length);
if(cX.charAt(cX.length-1)==cc){this.__fV(cU,cV,null);
return;
}if(cW[cu+qx.lang.String.firstUp(cX)]!=undefined){cW[cu+qx.lang.String.firstUp(cX)]();
}else{cW[bX+qx.lang.String.firstUp(cX)](null);
}}},__fV:function(cG,cH,cI){var cM=this.__fW(cG,cH);

if(cM!=null){var cN=cH.substring(cH.lastIndexOf(cb)+1,cH.length);
if(cN.charAt(cN.length-1)==cc){var cJ=cN.substring(cN.lastIndexOf(cf)+1,cN.length-1);
var cL=cN.substring(0,cN.lastIndexOf(cf));
var cK=cM[ch+qx.lang.String.firstUp(cL)]();

if(cJ==ce){cJ=cK.length-1;
}
if(cK!=null){cK.setItem(cJ,cI);
}}else{cM[bX+qx.lang.String.firstUp(cN)](cI);
}}},__fW:function(cY,da){var dd=da.split(cb);
var de=cY;
for(var i=0;i<dd.length-1;i++){try{var dc=dd[i];
if(dc.indexOf(cc)==dc.length-1){var db=dc.substring(dc.indexOf(cf)+1,dc.length-1);
dc=dc.substring(0,dc.indexOf(cf));
}de=de[ch+qx.lang.String.firstUp(dc)]();

if(db!=null){if(db==ce){db=de.length-1;
}de=de.getItem(db);
db=null;
}}catch(bh){return null;
}}return de;
},__fX:function(cB,cC,cD,cE,cF){cB=this.__gc(cB,cC,cD,cE);
if(cB==null){this.__fU(cC,cD);
}if(cB!=undefined){try{this.__fV(cC,cD,cB);
if(cE&&cE.onUpdate){cE.onUpdate(cF,cC,cB);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(cE&&cE.onSetFail){cE.onSetFail(e);
}else{this.warn("Failed so set value "+cB+" on "+cC+". Error message: "+e);
}}}},__fY:function(E){var F=[];
for(var i=0;i<E.length;i++){var name=E[i];
if(qx.lang.String.endsWith(name,cc)){var G=name.substring(name.indexOf(cf)+1,name.indexOf(cc));
if(name.indexOf(cc)!=name.length-1){throw new Error("Please use only one array at a time: "+name+" does not work.");
}
if(G!==ce){if(G==cg||isNaN(parseInt(G))){throw new Error("No number or 'last' value hast been given"+" in a array binding: "+name+" does not work.");
}}if(name.indexOf(cf)!=0){E[i]=name.substring(0,name.indexOf(cf));
F[i]=cg;
F[i+1]=G;
E.splice(i+1,0,cv);
i++;
}else{F[i]=G;
E.splice(i,1,cv);
}}else{F[i]=cg;
}}return F;
},__ga:function(bi,bj,bk,bl,bm,bn){var bo;
{};
var bq=function(z,e){if(z!==cg){if(z===ce){z=bi.length-1;
}var C=bi.getItem(z);
if(C==undefined){qx.data.SingleValueBinding.__fU(bk,bl);
}var A=e.getData().start;
var B=e.getData().end;

if(z<A||z>B){return;
}}else{var C=e.getData();
}if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Binding executed from "+bi+" by "+bj+" to "+bk+" ("+bl+")");
qx.log.Logger.debug("Data before conversion: "+C);
}C=qx.data.SingleValueBinding.__gc(C,bk,bl,bm);
if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Data after conversion: "+C);
}try{if(C!=undefined){qx.data.SingleValueBinding.__fV(bk,bl,C);
}else{qx.data.SingleValueBinding.__fU(bk,bl);
}if(bm&&bm.onUpdate){bm.onUpdate(bi,bk,C);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(bm&&bm.onSetFail){bm.onSetFail(e);
}else{this.warn("Failed so set value "+C+" on "+bk+". Error message: "+e);
}}};
if(!bn){bn=cg;
}bq=qx.lang.Function.bind(bq,bi,bn);
var bp=bi.addListener(bj,bq);
return bp;
},__gb:function(bu,bv,bw,bx,by){if(this.__fP[bv.toHashCode()]===undefined){this.__fP[bv.toHashCode()]=[];
}this.__fP[bv.toHashCode()].push([bu,bv,bw,bx,by]);
},__gc:function(K,L,M,N){if(N&&N.converter){var P;

if(L.getModel){P=L.getModel();
}return N.converter(K,P);
}else{var R=this.__fW(L,M);
var S=M.substring(M.lastIndexOf(cb)+1,M.length);
if(R==null){return K;
}var Q=qx.Class.getPropertyDefinition(R.constructor,S);
var O=Q==null?cg:Q.check;
return this.__ge(K,O);
}},__gd:function(br,bs){var bt=qx.Class.getPropertyDefinition(br.constructor,bs);

if(bt==null){return null;
}return bt.event;
},__ge:function(cO,cP){var cQ=qx.lang.Type.getClass(cO);
if((cQ==ca||cQ==bY)&&(cP==cq||cP==cm)){cO=parseInt(cO);
}if((cQ==cs||cQ==ca||cQ==ci)&&cP==bY){cO=cO+cg;
}if((cQ==ca||cQ==bY)&&(cP==ca||cP==cl)){cO=parseFloat(cO);
}return cO;
},removeBindingFromObject:function(cR,cS){if(cS.type==cw){for(var i=0;i<cS.sources.length;i++){if(cS.sources[i]){cS.sources[i].removeListenerById(cS.listenerIds[i]);
}}for(var i=0;i<cS.targets.length;i++){if(cS.targets[i]){cS.targets[i].removeListenerById(cS.targetListenerIds[i]);
}}}else{cR.removeListenerById(cS);
}var cT=this.__fP[cR.toHashCode()];
if(cT!=undefined){for(var i=0;i<cT.length;i++){if(cT[i][0]==cS){qx.lang.Array.remove(cT,cT[i]);
return;
}}}throw new Error("Binding could not be found!");
},removeAllBindingsForObject:function(cz){{};
var cA=this.__fP[cz.toHashCode()];

if(cA!=undefined){for(var i=cA.length-1;i>=0;i--){this.removeBindingFromObject(cz,cA[i][0]);
}}},getAllBindingsForObject:function(D){if(this.__fP[D.toHashCode()]===undefined){this.__fP[D.toHashCode()]=[];
}return this.__fP[D.toHashCode()];
},removeAllBindings:function(){for(var cy in this.__fP){var cx=qx.core.ObjectRegistry.fromHashCode(cy);
if(cx==null){delete this.__fP[cy];
continue;
}this.removeAllBindingsForObject(cx);
}this.__fP={};
},getAllBindings:function(){return this.__fP;
},showBindingInLog:function(bz,bA){var bC;
for(var i=0;i<this.__fP[bz.toHashCode()].length;i++){if(this.__fP[bz.toHashCode()][i][0]==bA){bC=this.__fP[bz.toHashCode()][i];
break;
}}
if(bC===undefined){var bB=cj;
}else{var bB=cn+bC[1]+ct+bC[2]+cr+bC[3]+ct+bC[4]+ck;
}qx.log.Logger.debug(bB);
},showAllBindingsInLog:function(){for(var bg in this.__fP){var bf=qx.core.ObjectRegistry.fromHashCode(bg);

for(var i=0;i<this.__fP[bg].length;i++){this.showBindingInLog(bf,this.__fP[bg][i][0]);
}}}}});
})();
(function(){var L="",K="g",J="0",I='\\$1',H="%",G='-',F="qx.lang.String",E=' ',D='\n',C="undefined";
qx.Class.define(F,{statics:{camelCase:function(g){return g.replace(/\-([a-z])/g,function(c,d){return d.toUpperCase();
});
},hyphenate:function(z){return z.replace(/[A-Z]/g,function(f){return (G+f.charAt(0).toLowerCase());
});
},capitalize:function(h){return h.replace(/\b[a-z]/g,function(M){return M.toUpperCase();
});
},clean:function(e){return this.trim(e.replace(/\s+/g,E));
},trimLeft:function(Q){return Q.replace(/^\s+/,L);
},trimRight:function(j){return j.replace(/\s+$/,L);
},trim:function(P){return P.replace(/^\s+|\s+$/g,L);
},startsWith:function(N,O){return N.indexOf(O)===0;
},endsWith:function(o,p){return o.substring(o.length-p.length,o.length)===p;
},repeat:function(t,u){return t.length>0?new Array(u+1).join(t):L;
},pad:function(q,length,r){var s=length-q.length;

if(s>0){if(typeof r===C){r=J;
}return this.repeat(r,s)+q;
}else{return q;
}},firstUp:qx.Bootstrap.firstUp,firstLow:qx.Bootstrap.firstLow,contains:function(a,b){return a.indexOf(b)!=-1;
},format:function(w,x){var y=w;

for(var i=0;i<x.length;i++){y=y.replace(new RegExp(H+(i+1),K),x[i]+L);
}return y;
},escapeRegexpChars:function(v){return v.replace(/([.*+?^${}()|[\]\/\\])/g,I);
},toArray:function(A){return A.split(/\B|\b/g);
},stripTags:function(B){return B.replace(/<\/?[^>]+>/gi,L);
},stripScripts:function(k,l){var n=L;
var m=k.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(){n+=arguments[1]+D;
return L;
});

if(l===true){qx.lang.Function.globalEval(n);
}return m;
}}});
})();
(function(){var f="qx.event.type.Data",e="qx.event.type.Event",d="qx.data.IListData";
qx.Interface.define(d,{events:{"change":f,"changeLength":e},members:{getItem:function(j){},setItem:function(h,i){},splice:function(a,b,c){},contains:function(g){},getLength:function(){},toArray:function(){}}});
})();
(function(){var a="qx.lang.Date";
qx.Class.define(a,{statics:{now:function(){return +new Date;
}}});
})();
(function(){var b="",a="qx.core.WindowError";
qx.Bootstrap.define(a,{extend:Error,construct:function(c,d,e){Error.call(this,c);
this.__cQ=c;
this.__cR=d||b;
this.__cS=e===undefined?-1:e;
},members:{__cQ:null,__cR:null,__cS:null,toString:function(){return this.__cQ;
},getUri:function(){return this.__cR;
},getLineNumber:function(){return this.__cS;
}}});
})();
(function(){var b="GlobalError: ",a="qx.core.GlobalError";
qx.Bootstrap.define(a,{extend:Error,construct:function(c,d){{};
this.__kl=b+(c&&c.message?c.message:c);
Error.call(this,this.__kl);
this.__km=d;
this.__kn=c;
},members:{__kn:null,__km:null,__kl:null,toString:function(){return this.__kl;
},getArguments:function(){return this.__km;
},getSourceException:function(){return this.__kn;
}},destruct:function(){this.__kn=null;
this.__km=null;
this.__kl=null;
}});
})();
(function(){var c=": ",b="qx.type.BaseError",a="";
qx.Class.define(b,{extend:Error,construct:function(d,e){Error.call(this,e);
this.__cN=d||a;
this.message=e||qx.type.BaseError.DEFAULTMESSAGE;
},statics:{DEFAULTMESSAGE:"error"},members:{__cN:null,message:null,getComment:function(){return this.__cN;
},toString:function(){return this.__cN+c+this.message;
}}});
})();
(function(){var a="qx.core.AssertionError";
qx.Class.define(a,{extend:qx.type.BaseError,construct:function(b,c){qx.type.BaseError.call(this,b,c);
this.__kR=qx.dev.StackTrace.getStackTrace();
},members:{__kR:null,getStackTrace:function(){return this.__kR;
}}});
})();
(function(){var a="qx.core.ValidationError";
qx.Class.define(a,{extend:qx.type.BaseError});
})();
(function(){var f="qx.lang.Type",e="Error",d="RegExp",c="Date",b="Number",a="Boolean";
qx.Class.define(f,{statics:{getClass:qx.Bootstrap.getClass,isString:qx.Bootstrap.isString,isArray:qx.Bootstrap.isArray,isObject:qx.Bootstrap.isObject,isFunction:qx.Bootstrap.isFunction,isRegExp:function(k){return this.getClass(k)==d;
},isNumber:function(h){return (h!==null&&(this.getClass(h)==b||h instanceof Number));
},isBoolean:function(i){return (i!==null&&(this.getClass(i)==a||i instanceof Boolean));
},isDate:function(g){return (g!==null&&(this.getClass(g)==c||g instanceof Date));
},isError:function(j){return (j!==null&&(this.getClass(j)==e||j instanceof Error));
}}});
})();
(function(){var e="qx.util.ObjectPool",d="Integer";
qx.Class.define(e,{extend:qx.core.Object,construct:function(n){qx.core.Object.call(this);
this.__fw={};

if(n!=null){this.setSize(n);
}},properties:{size:{check:d,init:Infinity}},members:{__fw:null,getObject:function(a){if(this.$$disposed){return new a;
}
if(!a){throw new Error("Class needs to be defined!");
}var b=null;
var c=this.__fw[a.classname];

if(c){b=c.pop();
}
if(b){b.$$pooled=false;
}else{b=new a;
}return b;
},poolObject:function(j){if(!this.__fw){return;
}var k=j.classname;
var m=this.__fw[k];

if(j.$$pooled){throw new Error("Object is already pooled: "+j);
}
if(!m){this.__fw[k]=m=[];
}if(m.length>this.getSize()){if(j.destroy){j.destroy();
}else{j.dispose();
}return;
}j.$$pooled=true;
m.push(j);
}},destruct:function(){var h=this.__fw;
var f,g,i,l;

for(f in h){g=h[f];

for(i=0,l=g.length;i<l;i++){g[i].dispose();
}}delete this.__fw;
}});
})();
(function(){var b="singleton",a="qx.event.Pool";
qx.Class.define(a,{extend:qx.util.ObjectPool,type:b,construct:function(){qx.util.ObjectPool.call(this,30);
}});
})();
(function(){var a="qx.util.DisposeUtil";
qx.Class.define(a,{statics:{disposeObjects:function(b,c,d){var name;

for(var i=0,l=c.length;i<l;i++){name=c[i];

if(b[name]==null||!b.hasOwnProperty(name)){continue;
}
if(!qx.core.ObjectRegistry.inShutDown){if(b[name].dispose){if(!d&&b[name].constructor.$$instance){throw new Error("The object stored in key "+name+" is a singleton! Please use disposeSingleton instead.");
}else{b[name].dispose();
}}else{throw new Error("Has no disposable object under key: "+name+"!");
}}b[name]=null;
}},disposeArray:function(p,q){var s=p[q];

if(!s){return;
}if(qx.core.ObjectRegistry.inShutDown){p[q]=null;
return;
}try{var r;

for(var i=s.length-1;i>=0;i--){r=s[i];

if(r){r.dispose();
}}}catch(n){throw new Error("The array field: "+q+" of object: "+p+" has non disposable entries: "+n);
}s.length=0;
p[q]=null;
},disposeMap:function(e,f){var g=e[f];

if(!g){return;
}if(qx.core.ObjectRegistry.inShutDown){e[f]=null;
return;
}try{for(var h in g){if(g.hasOwnProperty(h)){g[h].dispose();
}}}catch(o){throw new Error("The map field: "+f+" of object: "+e+" has non disposable entries: "+o);
}e[f]=null;
},disposeTriggeredBy:function(j,k){var m=k.dispose;
k.dispose=function(){m.call(k);
j.dispose();
};
}}});
})();
(function(){var c="qx.event.handler.Object";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST,SUPPORTED_TYPES:null,TARGET_CHECK:qx.event.IEventHandler.TARGET_OBJECT,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(a,b){return qx.Class.supportsEvent(a.constructor,b);
},registerEvent:function(d,e,f){},unregisterEvent:function(h,i,j){}},defer:function(g){qx.event.Registration.addHandler(g);
}});
})();
(function(){var k="indexOf",j="lastIndexOf",h="slice",g="concat",f="join",e="toLocaleUpperCase",d="shift",c="substr",b="filter",a="unshift",I="match",H="quote",G="qx.lang.Generics",F="localeCompare",E="sort",D="some",C="charAt",B="split",A="substring",z="pop",t="toUpperCase",u="replace",q="push",r="charCodeAt",o="every",p="reverse",m="search",n="forEach",v="map",w="toLowerCase",y="splice",x="toLocaleLowerCase";
qx.Class.define(G,{statics:{__eO:{"Array":[f,p,E,q,z,d,a,y,g,h,k,j,n,v,b,D,o],"String":[H,A,w,t,C,r,k,j,x,e,F,I,m,u,B,c,g,h]},__eP:function(P,Q){return function(s){return P.prototype[Q].apply(s,Array.prototype.slice.call(arguments,1));
};
},__eQ:function(){var J=qx.lang.Generics.__eO;

for(var N in J){var L=window[N];
var K=J[N];

for(var i=0,l=K.length;i<l;i++){var M=K[i];

if(!L[M]){L[M]=qx.lang.Generics.__eP(L,M);
}}}}},defer:function(O){O.__eQ();
}});
})();
(function(){var a="qx.event.type.Native";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(c,d,e,f,g){qx.event.type.Event.prototype.init.call(this,f,g);
this._target=d||qx.bom.Event.getTarget(c);
this._relatedTarget=e||qx.bom.Event.getRelatedTarget(c);

if(c.timeStamp){this._timeStamp=c.timeStamp;
}this._native=c;
this._returnValue=null;
return this;
},clone:function(h){var i=qx.event.type.Event.prototype.clone.call(this,h);
var j={};
i._native=this._cloneNativeEvent(this._native,j);
i._returnValue=this._returnValue;
return i;
},_cloneNativeEvent:function(k,l){l.preventDefault=qx.lang.Function.empty;
return l;
},preventDefault:function(){qx.event.type.Event.prototype.preventDefault.call(this);
qx.bom.Event.preventDefault(this._native);
},getNativeEvent:function(){return this._native;
},setReturnValue:function(b){this._returnValue=b;
},getReturnValue:function(){return this._returnValue;
}},destruct:function(){this._native=this._returnValue=null;
}});
})();
(function(){var n="iPod",m="Win32",l="",k="Win64",j="Linux",i="BSD",h="Macintosh",g="iPhone",f="Windows",e="qx.bom.client.Platform",b="iPad",d="X11",c="MacIntel",a="MacPPC";
qx.Class.define(e,{statics:{NAME:"",WIN:false,MAC:false,UNIX:false,UNKNOWN_PLATFORM:false,__kb:function(){var o=navigator.platform;
if(o==null||o===l){o=navigator.userAgent;
}
if(o.indexOf(f)!=-1||o.indexOf(m)!=-1||o.indexOf(k)!=-1){this.WIN=true;
this.NAME="win";
}else if(o.indexOf(h)!=-1||o.indexOf(a)!=-1||o.indexOf(c)!=-1||o.indexOf(n)!=-1||o.indexOf(g)!=-1||o.indexOf(b)!=-1){this.MAC=true;
this.NAME="mac";
}else if(o.indexOf(d)!=-1||o.indexOf(j)!=-1||o.indexOf(i)!=-1){this.UNIX=true;
this.NAME="unix";
}else{this.UNKNOWN_PLATFORM=true;
this.WIN=true;
this.NAME="win";
}}},defer:function(p){p.__kb();
}});
})();
(function(){var j="win98",i="osx2",h="osx0",g="osx4",f="win95",e="win2000",d="osx1",c="osx5",b="osx3",a="Windows NT 5.01",H=")",G="winxp",F="freebsd",E="sunos",D="SV1",C="|",B="nintendods",A="winnt4",z="wince",y="winme",q="os9",r="\.",o="osx",p="linux",m="netbsd",n="winvista",k="openbsd",l="(",s="win2003",t="symbian",v="win7",u="g",x="qx.bom.client.System",w=" Mobile/";
qx.Class.define(x,{statics:{NAME:"",SP1:false,SP2:false,WIN95:false,WIN98:false,WINME:false,WINNT4:false,WIN2000:false,WINXP:false,WIN2003:false,WINVISTA:false,WIN7:false,WINCE:false,LINUX:false,SUNOS:false,FREEBSD:false,NETBSD:false,OPENBSD:false,OSX:false,OS9:false,SYMBIAN:false,NINTENDODS:false,PSP:false,IPHONE:false,UNKNOWN_SYSTEM:false,__kK:{"Windows NT 6.1":v,"Windows NT 6.0":n,"Windows NT 5.2":s,"Windows NT 5.1":G,"Windows NT 5.0":e,"Windows 2000":e,"Windows NT 4.0":A,"Win 9x 4.90":y,"Windows CE":z,"Windows 98":j,"Win98":j,"Windows 95":f,"Win95":f,"Linux":p,"FreeBSD":F,"NetBSD":m,"OpenBSD":k,"SunOS":E,"Symbian System":t,"Nitro":B,"PSP":"sonypsp","Mac OS X 10_5":c,"Mac OS X 10.5":c,"Mac OS X 10_4":g,"Mac OS X 10.4":g,"Mac OS X 10_3":b,"Mac OS X 10.3":b,"Mac OS X 10_2":i,"Mac OS X 10.2":i,"Mac OS X 10_1":d,"Mac OS X 10.1":d,"Mac OS X 10_0":h,"Mac OS X 10.0":h,"Mac OS X":o,"Mac OS 9":q},__kL:function(){var K=navigator.userAgent;
var J=[];

for(var I in this.__kK){J.push(I);
}var L=new RegExp(l+J.join(C).replace(/\./g,r)+H,u);

if(!L.test(K)){this.UNKNOWN_SYSTEM=true;

if(!qx.bom.client.Platform.UNKNOWN_PLATFORM){if(qx.bom.client.Platform.UNIX){this.NAME="linux";
this.LINUX=true;
}else if(qx.bom.client.Platform.MAC){this.NAME="osx5";
this.OSX=true;
}else{this.NAME="winxp";
this.WINXP=true;
}}else{this.NAME="winxp";
this.WINXP=true;
}return;
}
if(qx.bom.client.Engine.WEBKIT&&RegExp(w).test(navigator.userAgent)){this.IPHONE=true;
this.NAME="iphone";
}else{this.NAME=this.__kK[RegExp.$1];
this[this.NAME.toUpperCase()]=true;

if(qx.bom.client.Platform.WIN){if(K.indexOf(a)!==-1){this.SP1=true;
}else if(qx.bom.client.Engine.MSHTML&&K.indexOf(D)!==-1){this.SP2=true;
}}}}},defer:function(M){M.__kL();
}});
})();
(function(){var Y="change",X="input",W="qx.client",V="text",U="password",T="checkbox",S="radio",R="textarea",Q="keypress",P="opera",J="propertychange",O="blur",M="keydown",I="keyup",H="select-multiple",L="checked",K="value",N="select",G="qx.event.handler.Input";
qx.Class.define(G,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){qx.core.Object.call(this);
this._onChangeCheckedWrapper=qx.lang.Function.listener(this._onChangeChecked,this);
this._onChangeValueWrapper=qx.lang.Function.listener(this._onChangeValue,this);
this._onInputWrapper=qx.lang.Function.listener(this._onInput,this);
this._onPropertyWrapper=qx.lang.Function.listener(this._onProperty,this);
if(qx.core.Variant.isSet(W,P)){this._onKeyDownWrapper=qx.lang.Function.listener(this._onKeyDown,this);
this._onKeyUpWrapper=qx.lang.Function.listener(this._onKeyUp,this);
this._onBlurWrapper=qx.lang.Function.listener(this._onBlur,this);
}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{input:1,change:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{__g:false,__h:null,__i:null,canHandleEvent:function(w,x){var y=w.tagName.toLowerCase();

if(x===X&&(y===X||y===R)){return true;
}
if(x===Y&&(y===X||y===R||y===N)){return true;
}return false;
},registerEvent:qx.core.Variant.select(W,{"mshtml":function(A,B,C){if(!A.__j){var D=A.tagName.toLowerCase();
var E=A.type;

if(E===V||E===U||D===R||E===T||E===S){qx.bom.Event.addNativeListener(A,J,this._onPropertyWrapper);
}
if(E!==T&&E!==S){qx.bom.Event.addNativeListener(A,Y,this._onChangeValueWrapper);
}
if(E===V||E===U){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,A);
qx.bom.Event.addNativeListener(A,Q,this._onKeyPressWrapped);
}A.__j=true;
}},"default":function(t,u,v){if(u===X){this.__k(t);
}else if(u===Y){if(t.type===S||t.type===T){qx.bom.Event.addNativeListener(t,Y,this._onChangeCheckedWrapper);
}else{qx.bom.Event.addNativeListener(t,Y,this._onChangeValueWrapper);
}if(qx.core.Variant.isSet(W,P)){if(t.type===V||t.type===U){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,t);
qx.bom.Event.addNativeListener(t,Q,this._onKeyPressWrapped);
}}}}}),__k:qx.core.Variant.select(W,{"mshtml":null,"webkit":function(p){var q=p.tagName.toLowerCase();
if(qx.bom.client.Engine.VERSION<532&&q==R){qx.bom.Event.addNativeListener(p,Q,this._onInputWrapper);
}qx.bom.Event.addNativeListener(p,X,this._onInputWrapper);
},"opera":function(n){qx.bom.Event.addNativeListener(n,I,this._onKeyUpWrapper);
qx.bom.Event.addNativeListener(n,M,this._onKeyDownWrapper);
qx.bom.Event.addNativeListener(n,O,this._onBlurWrapper);
qx.bom.Event.addNativeListener(n,X,this._onInputWrapper);
},"default":function(z){qx.bom.Event.addNativeListener(z,X,this._onInputWrapper);
}}),unregisterEvent:qx.core.Variant.select(W,{"mshtml":function(ba,bb){if(ba.__j){var bc=ba.tagName.toLowerCase();
var bd=ba.type;

if(bd===V||bd===U||bc===R||bd===T||bd===S){qx.bom.Event.removeNativeListener(ba,J,this._onPropertyWrapper);
}
if(bd!==T&&bd!==S){qx.bom.Event.removeNativeListener(ba,Y,this._onChangeValueWrapper);
}
if(bd===V||bd===U){qx.bom.Event.removeNativeListener(ba,Q,this._onKeyPressWrapped);
}
try{delete ba.__j;
}catch(d){ba.__j=null;
}}},"default":function(k,m){if(m===X){this.__k(k);
}else if(m===Y){if(k.type===S||k.type===T){qx.bom.Event.removeNativeListener(k,Y,this._onChangeCheckedWrapper);
}else{qx.bom.Event.removeNativeListener(k,Y,this._onChangeValueWrapper);
}}
if(qx.core.Variant.isSet(W,P)){if(k.type===V||k.type===U){qx.bom.Event.removeNativeListener(k,Q,this._onKeyPressWrapped);
}}}}),__l:qx.core.Variant.select(W,{"mshtml":null,"webkit":function(g){var h=g.tagName.toLowerCase();
if(qx.bom.client.Engine.VERSION<532&&h==R){qx.bom.Event.removeNativeListener(g,Q,this._onInputWrapper);
}qx.bom.Event.removeNativeListener(g,X,this._onInputWrapper);
},"opera":function(c){qx.bom.Event.removeNativeListener(c,I,this._onKeyUpWrapper);
qx.bom.Event.removeNativeListener(c,M,this._onKeyDownWrapper);
qx.bom.Event.removeNativeListener(c,O,this._onBlurWrapper);
qx.bom.Event.removeNativeListener(c,X,this._onInputWrapper);
},"default":function(b){qx.bom.Event.removeNativeListener(b,X,this._onInputWrapper);
}}),_onKeyPress:qx.core.Variant.select(W,{"mshtml|opera":function(e,f){if(e.keyCode===13){if(f.value!==this.__i){this.__i=f.value;
qx.event.Registration.fireEvent(f,Y,qx.event.type.Data,[f.value]);
}}},"default":null}),_onKeyDown:qx.core.Variant.select(W,{"opera":function(e){if(e.keyCode===13){this.__g=true;
}},"default":null}),_onKeyUp:qx.core.Variant.select(W,{"opera":function(e){if(e.keyCode===13){this.__g=false;
}},"default":null}),_onBlur:qx.core.Variant.select(W,{"opera":function(e){if(this.__h){window.clearTimeout(this.__h);
}},"default":null}),_onInput:qx.event.GlobalError.observeMethod(function(e){var F=e.target;
if(!this.__g){if(qx.core.Variant.isSet(W,P)){this.__h=window.setTimeout(function(){qx.event.Registration.fireEvent(F,X,qx.event.type.Data,[F.value]);
},0);
}else{qx.event.Registration.fireEvent(F,X,qx.event.type.Data,[F.value]);
}}}),_onChangeValue:qx.event.GlobalError.observeMethod(function(e){var s=e.target||e.srcElement;
var r=s.value;

if(s.type===H){var r=[];

for(var i=0,o=s.options,l=o.length;i<l;i++){if(o[i].selected){r.push(o[i].value);
}}}qx.event.Registration.fireEvent(s,Y,qx.event.type.Data,[r]);
}),_onChangeChecked:qx.event.GlobalError.observeMethod(function(e){var j=e.target;

if(j.type===S){if(j.checked){qx.event.Registration.fireEvent(j,Y,qx.event.type.Data,[j.value]);
}}else{qx.event.Registration.fireEvent(j,Y,qx.event.type.Data,[j.checked]);
}}),_onProperty:qx.core.Variant.select(W,{"mshtml":qx.event.GlobalError.observeMethod(function(e){var be=e.target||e.srcElement;
var bf=e.propertyName;

if(bf===K&&(be.type===V||be.type===U||be.tagName.toLowerCase()===R)){if(!be.$$inValueSet){qx.event.Registration.fireEvent(be,X,qx.event.type.Data,[be.value]);
}}else if(bf===L){if(be.type===T){qx.event.Registration.fireEvent(be,Y,qx.event.type.Data,[be.checked]);
}else if(be.checked){qx.event.Registration.fireEvent(be,Y,qx.event.type.Data,[be.value]);
}}}),"default":function(){}})},defer:function(a){qx.event.Registration.addHandler(a);
}});
})();
(function(){var b="abstract",a="qx.event.dispatch.AbstractBubbling";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,type:b,construct:function(w){this._manager=w;
},members:{_getParent:function(x){throw new Error("Missing implementation");
},canDispatchEvent:function(u,event,v){return event.getBubbles();
},dispatchEvent:function(c,event,d){var parent=c;
var o=this._manager;
var l,s;
var h;
var n,q;
var p;
var r=[];
l=o.getListeners(c,d,true);
s=o.getListeners(c,d,false);

if(l){r.push(l);
}
if(s){r.push(s);
}var parent=this._getParent(c);
var f=[];
var e=[];
var g=[];
var m=[];
while(parent!=null){l=o.getListeners(parent,d,true);

if(l){g.push(l);
m.push(parent);
}s=o.getListeners(parent,d,false);

if(s){f.push(s);
e.push(parent);
}parent=this._getParent(parent);
}event.setEventPhase(qx.event.type.Event.CAPTURING_PHASE);

for(var i=g.length-1;i>=0;i--){p=m[i];
event.setCurrentTarget(p);
h=g[i];

for(var j=0,k=h.length;j<k;j++){n=h[j];
q=n.context||p;
n.handler.call(q,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.AT_TARGET);
event.setCurrentTarget(c);

for(var i=0,t=r.length;i<t;i++){h=r[i];

for(var j=0,k=h.length;j<k;j++){n=h[j];
q=n.context||c;
n.handler.call(q,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.BUBBLING_PHASE);

for(var i=0,t=f.length;i<t;i++){p=e[i];
event.setCurrentTarget(p);
h=f[i];

for(var j=0,k=h.length;j<k;j++){n=h[j];
q=n.context||p;
n.handler.call(q,event);
}
if(event.getPropagationStopped()){return;
}}}}});
})();
(function(){var a="qx.event.dispatch.DomBubbling";
qx.Class.define(a,{extend:qx.event.dispatch.AbstractBubbling,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL},members:{_getParent:function(e){return e.parentNode;
},canDispatchEvent:function(c,event,d){return c.nodeType!==undefined&&event.getBubbles();
}},defer:function(b){qx.event.Registration.addDispatcher(b);
}});
})();
(function(){var a="qx.event.handler.UserAction";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(d){qx.core.Object.call(this);
this.__jW=d;
this.__jX=d.getWindow();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__jW:null,__jX:null,canHandleEvent:function(b,c){},registerEvent:function(e,f,g){},unregisterEvent:function(h,i,j){}},destruct:function(){this.__jW=this.__jX=null;
},defer:function(k){qx.event.Registration.addHandler(k);
}});
})();
(function(){var bj="keydown",bi="qx.client",bh="keypress",bg="NumLock",bf="keyup",be="Enter",bd="0",bc="9",bb="-",ba="PageUp",cr="+",cq="PrintScreen",cp="gecko",co="A",cn="Z",cm="Left",cl="F5",ck="Down",cj="Up",ci="F11",bq="F6",br="useraction",bo="F3",bp="keyinput",bm="Insert",bn="F8",bk="End",bl="/",by="Delete",bz="*",bL="cmd",bH="F1",bT="F4",bO="Home",ce="F2",bY="F12",bD="PageDown",ch="F7",cg="Win",cf="F9",bC="F10",bF="Right",bG="text",bJ="Escape",bM="webkit",bP="5",bV="3",cb="Meta",bs="7",bt="CapsLock",bE="input",bS="Control",bR="Space",bQ="Tab",bX="Shift",bW="Pause",bN="Unidentified",bU="qx.event.handler.Keyboard",W="mshtml|webkit",ca="6",bu="off",bv="Apps",bI="4",X="Alt",Y="mshtml",bB="2",bw="Scroll",bx="1",bA="8",bK="autoComplete",cd=",",cc="Backspace";
qx.Class.define(bU,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(V){qx.core.Object.call(this);
this.__gz=V;
this.__gA=V.getWindow();
if(qx.core.Variant.isSet(bi,cp)){this.__gB=this.__gA;
}else{this.__gB=this.__gA.document.documentElement;
}this.__gC={};
this._initKeyObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{keyup:1,keydown:1,keypress:1,keyinput:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,isValidKeyIdentifier:function(K){if(this._identifierToKeyCodeMap[K]){return true;
}
if(K.length!=1){return false;
}
if(K>=bd&&K<=bc){return true;
}
if(K>=co&&K<=cn){return true;
}
switch(K){case cr:case bb:case bz:case bl:return true;
default:return false;
}}},members:{__gD:null,__gz:null,__gA:null,__gB:null,__gC:null,__gE:null,__gF:null,__gG:null,canHandleEvent:function(cK,cL){},registerEvent:function(S,T,U){},unregisterEvent:function(C,D,E){},_fireInputEvent:function(z,A){var B=this.__gH();
if(B&&B.offsetWidth!=0){var event=qx.event.Registration.createEvent(bp,qx.event.type.KeyInput,[z,B,A]);
this.__gz.dispatchEvent(B,event);
}if(this.__gA){qx.event.Registration.fireEvent(this.__gA,br,qx.event.type.Data,[bp]);
}},_fireSequenceEvent:function(cA,cB,cC){var cD=this.__gH();
var cE=cA.keyCode;
var event=qx.event.Registration.createEvent(cB,qx.event.type.KeySequence,[cA,cD,cC]);
this.__gz.dispatchEvent(cD,event);
if(qx.core.Variant.isSet(bi,W)){if(cB==bj&&event.getDefaultPrevented()){if(!this._isNonPrintableKeyCode(cE)&&!this._emulateKeyPress[cE]){this._fireSequenceEvent(cA,bh,cC);
}}}if(this.__gA){qx.event.Registration.fireEvent(this.__gA,br,qx.event.type.Data,[cB]);
}},__gH:function(){var cF=this.__gz.getHandler(qx.event.handler.Focus);
var cG=cF.getActive();
if(!cG||cG.offsetWidth==0){cG=cF.getFocus();
}if(!cG||cG.offsetWidth==0){cG=this.__gz.getWindow().document.body;
}return cG;
},_initKeyObserver:function(){this.__gD=qx.lang.Function.listener(this.__gI,this);
this.__gG=qx.lang.Function.listener(this.__gK,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__gB,bf,this.__gD);
Event.addNativeListener(this.__gB,bj,this.__gD);
Event.addNativeListener(this.__gB,bh,this.__gG);
},_stopKeyObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__gB,bf,this.__gD);
Event.removeNativeListener(this.__gB,bj,this.__gD);
Event.removeNativeListener(this.__gB,bh,this.__gG);

for(var cI in (this.__gF||{})){var cH=this.__gF[cI];
Event.removeNativeListener(cH.target,bh,cH.callback);
}delete (this.__gF);
},__gI:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bi,{"mshtml":function(g){g=window.event||g;
var j=g.keyCode;
var h=0;
var i=g.type;
if(!(this.__gC[j]==bj&&i==bj)){this._idealKeyHandler(j,h,i,g);
}if(i==bj){if(this._isNonPrintableKeyCode(j)||this._emulateKeyPress[j]){this._idealKeyHandler(j,h,bh,g);
}}this.__gC[j]=i;
},"gecko":function(l){var p=this._keyCodeFix[l.keyCode]||l.keyCode;
var n=0;
var o=l.type;
if(qx.bom.client.Platform.WIN){var m=p?this._keyCodeToIdentifier(p):this._charCodeToIdentifier(n);

if(!(this.__gC[m]==bj&&o==bj)){this._idealKeyHandler(p,n,o,l);
}this.__gC[m]=o;
}else{this._idealKeyHandler(p,n,o,l);
}this.__gJ(l.target,o,p);
},"webkit":function(L){var O=0;
var M=0;
var N=L.type;
if(qx.bom.client.Engine.VERSION<525.13){if(N==bf||N==bj){O=this._charCode2KeyCode[L.charCode]||L.keyCode;
}else{if(this._charCode2KeyCode[L.charCode]){O=this._charCode2KeyCode[L.charCode];
}else{M=L.charCode;
}}this._idealKeyHandler(O,M,N,L);
}else{O=L.keyCode;
this._idealKeyHandler(O,M,N,L);
if(N==bj){if(this._isNonPrintableKeyCode(O)||this._emulateKeyPress[O]){this._idealKeyHandler(O,M,bh,L);
}}this.__gC[O]=N;
}},"opera":function(cJ){this.__gE=cJ.keyCode;
this._idealKeyHandler(cJ.keyCode,0,cJ.type,cJ);
}})),__gJ:qx.core.Variant.select(bi,{"gecko":function(q,r,s){if(r===bj&&(s==33||s==34||s==38||s==40)&&q.type==bG&&q.tagName.toLowerCase()===bE&&q.getAttribute(bK)!==bu){if(!this.__gF){this.__gF={};
}var u=qx.core.ObjectRegistry.toHashCode(q);

if(this.__gF[u]){return;
}var self=this;
this.__gF[u]={target:q,callback:function(J){qx.bom.Event.stopPropagation(J);
self.__gK(J);
}};
var t=qx.event.GlobalError.observeMethod(this.__gF[u].callback);
qx.bom.Event.addNativeListener(q,bh,t);
}},"default":null}),__gK:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bi,{"mshtml":function(cw){cw=window.event||cw;

if(this._charCode2KeyCode[cw.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[cw.keyCode],0,cw.type,cw);
}else{this._idealKeyHandler(0,cw.keyCode,cw.type,cw);
}},"gecko":function(cs){var cv=this._keyCodeFix[cs.keyCode]||cs.keyCode;
var ct=cs.charCode;
var cu=cs.type;
this._idealKeyHandler(cv,ct,cu,cs);
},"webkit":function(v){if(qx.bom.client.Engine.VERSION<525.13){var y=0;
var w=0;
var x=v.type;

if(x==bf||x==bj){y=this._charCode2KeyCode[v.charCode]||v.keyCode;
}else{if(this._charCode2KeyCode[v.charCode]){y=this._charCode2KeyCode[v.charCode];
}else{w=v.charCode;
}}this._idealKeyHandler(y,w,x,v);
}else{if(this._charCode2KeyCode[v.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[v.keyCode],0,v.type,v);
}else{this._idealKeyHandler(0,v.keyCode,v.type,v);
}}},"opera":function(cx){var cz=cx.keyCode;
var cy=cx.type;
if(cz!=this.__gE){this._idealKeyHandler(0,this.__gE,cy,cx);
}else{if(this._keyCodeToIdentifierMap[cx.keyCode]){this._idealKeyHandler(cx.keyCode,0,cx.type,cx);
}else{this._idealKeyHandler(0,cx.keyCode,cx.type,cx);
}}}})),_idealKeyHandler:function(b,c,d,e){var f;
if(b||(!b&&!c)){f=this._keyCodeToIdentifier(b);
this._fireSequenceEvent(e,d,f);
}else{f=this._charCodeToIdentifier(c);
this._fireSequenceEvent(e,bh,f);
this._fireInputEvent(e,c);
}},_specialCharCodeMap:{8:cc,9:bQ,13:be,27:bJ,32:bR},_emulateKeyPress:qx.core.Variant.select(bi,{"mshtml":{8:true,9:true},"webkit":{8:true,9:true,27:true},"default":{}}),_keyCodeToIdentifierMap:{16:bX,17:bS,18:X,20:bt,224:cb,37:cm,38:cj,39:bF,40:ck,33:ba,34:bD,35:bk,36:bO,45:bm,46:by,112:bH,113:ce,114:bo,115:bT,116:cl,117:bq,118:ch,119:bn,120:cf,121:bC,122:ci,123:bY,144:bg,44:cq,145:bw,19:bW,91:qx.bom.client.Platform.MAC?bL:cg,92:cg,93:qx.bom.client.Platform.MAC?bL:bv},_numpadToCharCode:{96:bd.charCodeAt(0),97:bx.charCodeAt(0),98:bB.charCodeAt(0),99:bV.charCodeAt(0),100:bI.charCodeAt(0),101:bP.charCodeAt(0),102:ca.charCodeAt(0),103:bs.charCodeAt(0),104:bA.charCodeAt(0),105:bc.charCodeAt(0),106:bz.charCodeAt(0),107:cr.charCodeAt(0),109:bb.charCodeAt(0),110:cd.charCodeAt(0),111:bl.charCodeAt(0)},_charCodeA:co.charCodeAt(0),_charCodeZ:cn.charCodeAt(0),_charCode0:bd.charCodeAt(0),_charCode9:bc.charCodeAt(0),_isNonPrintableKeyCode:function(F){return this._keyCodeToIdentifierMap[F]?true:false;
},_isIdentifiableKeyCode:function(R){if(R>=this._charCodeA&&R<=this._charCodeZ){return true;
}if(R>=this._charCode0&&R<=this._charCode9){return true;
}if(this._specialCharCodeMap[R]){return true;
}if(this._numpadToCharCode[R]){return true;
}if(this._isNonPrintableKeyCode(R)){return true;
}return false;
},_keyCodeToIdentifier:function(P){if(this._isIdentifiableKeyCode(P)){var Q=this._numpadToCharCode[P];

if(Q){return String.fromCharCode(Q);
}return (this._keyCodeToIdentifierMap[P]||this._specialCharCodeMap[P]||String.fromCharCode(P));
}else{return bN;
}},_charCodeToIdentifier:function(k){return this._specialCharCodeMap[k]||String.fromCharCode(k).toUpperCase();
},_identifierToKeyCode:function(a){return qx.event.handler.Keyboard._identifierToKeyCodeMap[a]||a.charCodeAt(0);
}},destruct:function(){this._stopKeyObserver();
this.__gE=this.__gz=this.__gA=this.__gB=this.__gC=null;
},defer:function(G,H){qx.event.Registration.addHandler(G);
if(!G._identifierToKeyCodeMap){G._identifierToKeyCodeMap={};

for(var I in H._keyCodeToIdentifierMap){G._identifierToKeyCodeMap[H._keyCodeToIdentifierMap[I]]=parseInt(I,10);
}
for(var I in H._specialCharCodeMap){G._identifierToKeyCodeMap[H._specialCharCodeMap[I]]=parseInt(I,10);
}}
if(qx.core.Variant.isSet(bi,Y)){H._charCode2KeyCode={13:13,27:27};
}else if(qx.core.Variant.isSet(bi,cp)){H._keyCodeFix={12:H._identifierToKeyCode(bg)};
}else if(qx.core.Variant.isSet(bi,bM)){if(qx.bom.client.Engine.VERSION<525.13){H._charCode2KeyCode={63289:H._identifierToKeyCode(bg),63276:H._identifierToKeyCode(ba),63277:H._identifierToKeyCode(bD),63275:H._identifierToKeyCode(bk),63273:H._identifierToKeyCode(bO),63234:H._identifierToKeyCode(cm),63232:H._identifierToKeyCode(cj),63235:H._identifierToKeyCode(bF),63233:H._identifierToKeyCode(ck),63272:H._identifierToKeyCode(by),63302:H._identifierToKeyCode(bm),63236:H._identifierToKeyCode(bH),63237:H._identifierToKeyCode(ce),63238:H._identifierToKeyCode(bo),63239:H._identifierToKeyCode(bT),63240:H._identifierToKeyCode(cl),63241:H._identifierToKeyCode(bq),63242:H._identifierToKeyCode(ch),63243:H._identifierToKeyCode(bn),63244:H._identifierToKeyCode(cf),63245:H._identifierToKeyCode(bC),63246:H._identifierToKeyCode(ci),63247:H._identifierToKeyCode(bY),63248:H._identifierToKeyCode(cq),3:H._identifierToKeyCode(be),12:H._identifierToKeyCode(bg),13:H._identifierToKeyCode(be)};
}else{H._charCode2KeyCode={13:13,27:27};
}}}});
})();
(function(){var P="qx.client",O="mouseup",N="click",M="mousedown",L="contextmenu",K="mousewheel",J="dblclick",I="mshtml",H="mouseover",G="mouseout",B="DOMMouseScroll",F="mousemove",E="on",A="mshtml|webkit|opera",z="useraction",D="gecko|webkit",C="qx.event.handler.Mouse";
qx.Class.define(C,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(ba){qx.core.Object.call(this);
this.__eu=ba;
this.__ev=ba.getWindow();
this.__ew=this.__ev.document;
this._initButtonObserver();
this._initMoveObserver();
this._initWheelObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{__ex:null,__ey:null,__ez:null,__eA:null,__eB:null,__eu:null,__ev:null,__ew:null,canHandleEvent:function(d,e){},registerEvent:qx.bom.client.System.IPHONE?
function(w,x,y){w[E+x]=qx.lang.Function.returnNull;
}:qx.lang.Function.returnNull,unregisterEvent:qx.bom.client.System.IPHONE?
function(l,m,n){l[E+m]=undefined;
}:qx.lang.Function.returnNull,__eC:function(W,X,Y){if(!Y){Y=W.target||W.srcElement;
}if(Y&&Y.nodeType){qx.event.Registration.fireEvent(Y,X||W.type,X==K?qx.event.type.MouseWheel:qx.event.type.Mouse,[W,Y,null,true,true]);
}qx.event.Registration.fireEvent(this.__ev,z,qx.event.type.Data,[X||W.type]);
},_initButtonObserver:function(){this.__ex=qx.lang.Function.listener(this._onButtonEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__ew,M,this.__ex);
Event.addNativeListener(this.__ew,O,this.__ex);
Event.addNativeListener(this.__ew,N,this.__ex);
Event.addNativeListener(this.__ew,J,this.__ex);
Event.addNativeListener(this.__ew,L,this.__ex);
},_initMoveObserver:function(){this.__ey=qx.lang.Function.listener(this._onMoveEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__ew,F,this.__ey);
Event.addNativeListener(this.__ew,H,this.__ey);
Event.addNativeListener(this.__ew,G,this.__ey);
},_initWheelObserver:function(){this.__ez=qx.lang.Function.listener(this._onWheelEvent,this);
var Event=qx.bom.Event;
var a=qx.core.Variant.isSet(P,A)?K:B;
var b=qx.core.Variant.isSet(P,I)?this.__ew:this.__ev;
Event.addNativeListener(b,a,this.__ez);
},_stopButtonObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__ew,M,this.__ex);
Event.removeNativeListener(this.__ew,O,this.__ex);
Event.removeNativeListener(this.__ew,N,this.__ex);
Event.removeNativeListener(this.__ew,J,this.__ex);
Event.removeNativeListener(this.__ew,L,this.__ex);
},_stopMoveObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__ew,F,this.__ey);
Event.removeNativeListener(this.__ew,H,this.__ey);
Event.removeNativeListener(this.__ew,G,this.__ey);
},_stopWheelObserver:function(){var Event=qx.bom.Event;
var U=qx.core.Variant.isSet(P,A)?K:B;
var V=qx.core.Variant.isSet(P,I)?this.__ew:this.__ev;
Event.removeNativeListener(V,U,this.__ez);
},_onMoveEvent:qx.event.GlobalError.observeMethod(function(T){this.__eC(T);
}),_onButtonEvent:qx.event.GlobalError.observeMethod(function(f){var g=f.type;
var h=f.target||f.srcElement;
if(qx.core.Variant.isSet(P,D)){if(h&&h.nodeType==3){h=h.parentNode;
}}
if(this.__eD){this.__eD(f,g,h);
}
if(this.__eF){this.__eF(f,g,h);
}this.__eC(f,g,h);

if(this.__eE){this.__eE(f,g,h);
}
if(this.__eG){this.__eG(f,g,h);
}this.__eA=g;
}),_onWheelEvent:qx.event.GlobalError.observeMethod(function(c){this.__eC(c,K);
}),__eD:qx.core.Variant.select(P,{"webkit":function(t,u,v){if(qx.bom.client.Engine.VERSION<530){if(u==L){this.__eC(t,O,v);
}}},"default":null}),__eE:qx.core.Variant.select(P,{"opera":function(i,j,k){if(j==O&&i.button==2){this.__eC(i,L,k);
}},"default":null}),__eF:qx.core.Variant.select(P,{"mshtml":function(Q,R,S){if(R==O&&this.__eA==N){this.__eC(Q,M,S);
}else if(R==J){this.__eC(Q,N,S);
}},"default":null}),__eG:qx.core.Variant.select(P,{"mshtml":null,"default":function(p,q,r){switch(q){case M:this.__eB=r;
break;
case O:if(r!==this.__eB){var s=qx.dom.Hierarchy.getCommonParent(r,this.__eB);
this.__eC(p,N,s);
}}}})},destruct:function(){this._stopButtonObserver();
this._stopMoveObserver();
this._stopWheelObserver();
this.__eu=this.__ev=this.__ew=this.__eB=null;
},defer:function(o){qx.event.Registration.addHandler(o);
}});
})();
(function(){var a="qx.event.handler.Capture";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{capture:true,losecapture:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(h,i){},registerEvent:function(b,c,d){},unregisterEvent:function(e,f,g){}},defer:function(j){qx.event.Registration.addHandler(j);
}});
})();
(function(){var O="alias",N="copy",M="blur",L="mouseout",K="keydown",J="Ctrl",I="Shift",H="mousemove",G="move",F="mouseover",bf="Alt",be="keyup",bd="mouseup",bc="dragend",bb="on",ba="mousedown",Y="qxDraggable",X="drag",W="drop",V="qxDroppable",T="qx.event.handler.DragDrop",U="droprequest",R="dragstart",S="dragchange",P="dragleave",Q="dragover";
qx.Class.define(T,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(i){qx.core.Object.call(this);
this.__iO=i;
this.__iP=i.getWindow().document.documentElement;
this.__iO.addListener(this.__iP,ba,this._onMouseDown,this);
this.__jc();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:true},members:{__iO:null,__iP:null,__iQ:null,__iR:null,__iS:null,__iT:null,__iU:null,__iV:null,__iW:null,__iX:null,__iY:false,__ja:0,__jb:0,canHandleEvent:function(o,p){},registerEvent:function(k,l,m){},unregisterEvent:function(z,A,B){},addType:function(bg){this.__iS[bg]=true;
},addAction:function(r){this.__iT[r]=true;
},supportsType:function(bj){return !!this.__iS[bj];
},supportsAction:function(c){return !!this.__iT[c];
},getData:function(d){if(!this.__jj||!this.__iQ){throw new Error("This method must not be used outside the drop event listener!");
}
if(!this.__iS[d]){throw new Error("Unsupported data type: "+d+"!");
}
if(!this.__iV[d]){this.__iW=d;
this.__je(U,this.__iR,this.__iQ,false);
}
if(!this.__iV[d]){throw new Error("Please use a droprequest listener to the drag source to fill the manager with data!");
}return this.__iV[d]||null;
},getCurrentAction:function(){return this.__iX;
},addData:function(g,h){this.__iV[g]=h;
},getCurrentType:function(){return this.__iW;
},isSessionActive:function(){return this.__iY;
},__jc:function(){this.__iS={};
this.__iT={};
this.__iU={};
this.__iV={};
},__jd:function(){if(this.__iR==null){return;
}var E=this.__iT;
var C=this.__iU;
var D=null;

if(this.__jj){if(C.Shift&&C.Ctrl&&E.alias){D=O;
}else if(C.Shift&&C.Alt&&E.copy){D=N;
}else if(C.Shift&&E.move){D=G;
}else if(C.Alt&&E.alias){D=O;
}else if(C.Ctrl&&E.copy){D=N;
}else if(E.move){D=G;
}else if(E.copy){D=N;
}else if(E.alias){D=O;
}}
if(D!=this.__iX){this.__iX=D;
this.__je(S,this.__iR,this.__iQ,false);
}},__je:function(s,t,u,v,w){var y=qx.event.Registration;
var x=y.createEvent(s,qx.event.type.Drag,[v,w]);

if(t!==u){x.setRelatedTarget(u);
}return y.dispatchEvent(t,x);
},__jf:function(j){while(j&&j.nodeType==1){if(j.getAttribute(Y)==bb){return j;
}j=j.parentNode;
}return null;
},__jg:function(a){while(a&&a.nodeType==1){if(a.getAttribute(V)==bb){return a;
}a=a.parentNode;
}return null;
},__jh:function(){this.__iR=null;
this.__iO.removeListener(this.__iP,H,this._onMouseMove,this,true);
this.__iO.removeListener(this.__iP,bd,this._onMouseUp,this,true);
qx.event.Registration.removeListener(window,M,this._onWindowBlur,this);
this.__jc();
},__ji:function(){if(this.__iY){this.__iO.removeListener(this.__iP,F,this._onMouseOver,this,true);
this.__iO.removeListener(this.__iP,L,this._onMouseOut,this,true);
this.__iO.removeListener(this.__iP,K,this._onKeyDown,this,true);
this.__iO.removeListener(this.__iP,be,this._onKeyUp,this,true);
this.__je(bc,this.__iR,this.__iQ,false);
this.__iY=false;
}this.__jj=false;
this.__iQ=null;
this.__jh();
},__jj:false,_onWindowBlur:function(e){this.__ji();
},_onKeyDown:function(e){var b=e.getKeyIdentifier();

switch(b){case bf:case J:case I:if(!this.__iU[b]){this.__iU[b]=true;
this.__jd();
}}},_onKeyUp:function(e){var bk=e.getKeyIdentifier();

switch(bk){case bf:case J:case I:if(this.__iU[bk]){this.__iU[bk]=false;
this.__jd();
}}},_onMouseDown:function(e){if(this.__iY){return;
}var q=this.__jf(e.getTarget());

if(q){this.__ja=e.getDocumentLeft();
this.__jb=e.getDocumentTop();
this.__iR=q;
this.__iO.addListener(this.__iP,H,this._onMouseMove,this,true);
this.__iO.addListener(this.__iP,bd,this._onMouseUp,this,true);
qx.event.Registration.addListener(window,M,this._onWindowBlur,this);
}},_onMouseUp:function(e){if(this.__jj){this.__je(W,this.__iQ,this.__iR,false,e);
}if(this.__iY){e.stopPropagation();
}this.__ji();
},_onMouseMove:function(e){if(this.__iY){if(!this.__je(X,this.__iR,this.__iQ,true,e)){this.__ji();
}}else{if(Math.abs(e.getDocumentLeft()-this.__ja)>3||Math.abs(e.getDocumentTop()-this.__jb)>3){if(this.__je(R,this.__iR,this.__iQ,true,e)){this.__iY=true;
this.__iO.addListener(this.__iP,F,this._onMouseOver,this,true);
this.__iO.addListener(this.__iP,L,this._onMouseOut,this,true);
this.__iO.addListener(this.__iP,K,this._onKeyDown,this,true);
this.__iO.addListener(this.__iP,be,this._onKeyUp,this,true);
var n=this.__iU;
n.Ctrl=e.isCtrlPressed();
n.Shift=e.isShiftPressed();
n.Alt=e.isAltPressed();
this.__jd();
}else{this.__je(bc,this.__iR,this.__iQ,false);
this.__jh();
}}}},_onMouseOver:function(e){var bh=e.getTarget();
var bi=this.__jg(bh);

if(bi&&bi!=this.__iQ){this.__jj=this.__je(Q,bi,this.__iR,true,e);
this.__iQ=bi;
this.__jd();
}},_onMouseOut:function(e){var bm=this.__jg(e.getTarget());
var bl=this.__jg(e.getRelatedTarget());

if(bm&&bm!==bl&&bm==this.__iQ){this.__je(P,this.__iQ,bl,false,e);
this.__iQ=null;
this.__jj=false;
qx.event.Timer.once(this.__jd,this,0);
}}},destruct:function(){this.__iR=this.__iQ=this.__iO=this.__iP=this.__iS=this.__iT=this.__iU=this.__iV=null;
},defer:function(f){qx.event.Registration.addHandler(f);
}});
})();
(function(){var b="-",a="qx.event.handler.Element";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(n){qx.core.Object.call(this);
this._manager=n;
this._registeredEvents={};
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{abort:true,scroll:true,select:true,reset:true,submit:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(u,v){},registerEvent:function(o,p,q){var t=qx.core.ObjectRegistry.toHashCode(o);
var r=t+b+p;
var s=qx.lang.Function.listener(this._onNative,this,r);
qx.bom.Event.addNativeListener(o,p,s);
this._registeredEvents[r]={element:o,type:p,listener:s};
},unregisterEvent:function(c,d,e){var h=this._registeredEvents;

if(!h){return;
}var i=qx.core.ObjectRegistry.toHashCode(c);
var f=i+b+d;
var g=this._registeredEvents[f];

if(g){qx.bom.Event.removeNativeListener(c,d,g.listener);
}delete this._registeredEvents[f];
},_onNative:qx.event.GlobalError.observeMethod(function(w,x){var z=this._registeredEvents;

if(!z){return;
}var y=z[x];
qx.event.Registration.fireNonBubblingEvent(y.element,y.type,qx.event.type.Native,[w]);
})},destruct:function(){var k;
var l=this._registeredEvents;

for(var m in l){k=l[m];
qx.bom.Event.removeNativeListener(k.element,k.type,k.listener);
}this._manager=this._registeredEvents=null;
},defer:function(j){qx.event.Registration.addHandler(j);
}});
})();
(function(){var c="qx.event.handler.Appear",b="disappear",a="appear";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(i){qx.core.Object.call(this);
this.__co=i;
this.__cp={};
qx.event.handler.Appear.__cq[this.$$hash]=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{appear:true,disappear:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,__cq:{},refresh:function(){var k=this.__cq;

for(var l in k){k[l].refresh();
}}},members:{__co:null,__cp:null,canHandleEvent:function(w,x){},registerEvent:function(r,s,t){var u=qx.core.ObjectRegistry.toHashCode(r)+s;
var v=this.__cp;

if(v&&!v[u]){v[u]=r;
r.$$displayed=r.offsetWidth>0;
}},unregisterEvent:function(m,n,o){var p=qx.core.ObjectRegistry.toHashCode(m)+n;
var q=this.__cp;

if(!q){return;
}
if(q[p]){delete q[p];
}},refresh:function(){var g=this.__cp;
var h;

for(var f in g){h=g[f];
var d=h.offsetWidth>0;

if((!!h.$$displayed)!==d){h.$$displayed=d;
var e=qx.event.Registration.createEvent(d?a:b);
this.__co.dispatchEvent(h,e);
}}}},destruct:function(){this.__co=this.__cp=null;
delete qx.event.handler.Appear.__cq[this.$$hash];
},defer:function(j){qx.event.Registration.addHandler(j);
}});
})();
(function(){var o="mshtml",n="",m="qx.client",k=">",h=" ",g="<",f="='",e="none",d="qx.bom.Element",c="' ",a="div",b="></";
qx.Class.define(d,{statics:{__kc:{"onload":true,"onpropertychange":true,"oninput":true,"onchange":true,"name":true,"type":true,"checked":true,"disabled":true},__kd:{},getHelperElement:function(p){if(!p){p=window;
}var r=p.location.href;

if(!qx.bom.Element.__kd[r]){var q=qx.bom.Element.__kd[r]=p.document.createElement(a);
if(qx.bom.client.Engine.WEBKIT){q.style.display=e;
p.document.body.appendChild(q);
}}return qx.bom.Element.__kd[r];
},create:function(name,Q,R){if(!R){R=window;
}
if(!name){throw new Error("The tag name is missing!");
}var T=this.__kc;
var S=n;

for(var V in Q){if(T[V]){S+=V+f+Q[V]+c;
}}var W;
if(S!=n){if(qx.bom.client.Engine.MSHTML){W=R.document.createElement(g+name+h+S+k);
}else{var U=qx.bom.Element.getHelperElement(R);
U.innerHTML=g+name+h+S+b+name+k;
W=U.firstChild;
}}else{W=R.document.createElement(name);
}
for(var V in Q){if(!T[V]){qx.bom.element.Attribute.set(W,V,Q[V]);
}}return W;
},empty:function(bf){return bf.innerHTML=n;
},addListener:function(A,B,C,self,D){return qx.event.Registration.addListener(A,B,C,self,D);
},removeListener:function(bb,bc,bd,self,be){return qx.event.Registration.removeListener(bb,bc,bd,self,be);
},removeListenerById:function(x,y){return qx.event.Registration.removeListenerById(x,y);
},hasListener:function(s,t,u){return qx.event.Registration.hasListener(s,t,u);
},focus:function(ba){qx.event.Registration.getManager(ba).getHandler(qx.event.handler.Focus).focus(ba);
},blur:function(z){qx.event.Registration.getManager(z).getHandler(qx.event.handler.Focus).blur(z);
},activate:function(w){qx.event.Registration.getManager(w).getHandler(qx.event.handler.Focus).activate(w);
},deactivate:function(v){qx.event.Registration.getManager(v).getHandler(qx.event.handler.Focus).deactivate(v);
},capture:function(X,Y){qx.event.Registration.getManager(X).getDispatcher(qx.event.dispatch.MouseCapture).activateCapture(X,Y);
},releaseCapture:function(bg){qx.event.Registration.getManager(bg).getDispatcher(qx.event.dispatch.MouseCapture).releaseCapture(bg);
},clone:function(E,F){var I;

if(F||(qx.core.Variant.isSet(m,o)&&!qx.xml.Document.isXmlDocument(E))){var M=qx.event.Registration.getManager(E);
var G=qx.dom.Hierarchy.getDescendants(E);
G.push(E);
}if(qx.core.Variant.isSet(m,o)){for(var i=0,l=G.length;i<l;i++){M.toggleAttachedEvents(G[i],false);
}}var I=E.cloneNode(true);
if(qx.core.Variant.isSet(m,o)){for(var i=0,l=G.length;i<l;i++){M.toggleAttachedEvents(G[i],true);
}}if(F===true){var P=qx.dom.Hierarchy.getDescendants(I);
P.push(I);
var H,K,O,J;

for(var i=0,N=G.length;i<N;i++){O=G[i];
H=M.serializeListeners(O);

if(H.length>0){K=P[i];

for(var j=0,L=H.length;j<L;j++){J=H[j];
M.addListener(K,J.type,J.handler,J.self,J.capture);
}}}}return I;
}}});
})();
(function(){var a="qx.event.type.Dom";
qx.Class.define(a,{extend:qx.event.type.Native,statics:{SHIFT_MASK:1,CTRL_MASK:2,ALT_MASK:4,META_MASK:8},members:{_cloneNativeEvent:function(d,e){var e=qx.event.type.Native.prototype._cloneNativeEvent.call(this,d,e);
e.shiftKey=d.shiftKey;
e.ctrlKey=d.ctrlKey;
e.altKey=d.altKey;
e.metaKey=d.metaKey;
return e;
},getModifiers:function(){var c=0;
var b=this._native;

if(b.shiftKey){c|=qx.event.type.Dom.SHIFT_MASK;
}
if(b.ctrlKey){c|=qx.event.type.Dom.CTRL_MASK;
}
if(b.altKey){c|=qx.event.type.Dom.ALT_MASK;
}
if(b.metaKey){c|=qx.event.type.Dom.META_MASK;
}return c;
},isCtrlPressed:function(){return this._native.ctrlKey;
},isShiftPressed:function(){return this._native.shiftKey;
},isAltPressed:function(){return this._native.altKey;
},isMetaPressed:function(){return this._native.metaKey;
},isCtrlOrCommandPressed:function(){if(qx.bom.client.Platform.MAC){return this._native.metaKey;
}else{return this._native.ctrlKey;
}}}});
})();
(function(){var a="qx.event.type.KeyInput";
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(b,c,d){qx.event.type.Dom.prototype.init.call(this,b,c,null,true,true);
this._charCode=d;
return this;
},clone:function(e){var f=qx.event.type.Dom.prototype.clone.call(this,e);
f._charCode=this._charCode;
return f;
},getCharCode:function(){return this._charCode;
},getChar:function(){return String.fromCharCode(this._charCode);
}}});
})();
(function(){var a="qx.event.type.KeySequence";
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(b,c,d){qx.event.type.Dom.prototype.init.call(this,b,c,null,true,true);
this._identifier=d;
return this;
},clone:function(e){var f=qx.event.type.Dom.prototype.clone.call(this,e);
f._identifier=this._identifier;
return f;
},getKeyIdentifier:function(){return this._identifier;
}}});
})();
(function(){var l="qx.client",k="blur",j="focus",i="mousedown",h="on",g="mouseup",f="DOMFocusOut",d="DOMFocusIn",c="selectstart",b="onmousedown",F="onfocusout",E="onfocusin",D="onmouseup",C="onselectstart",B="draggesture",A="qx.event.handler.Focus",z="_applyFocus",y="deactivate",x="textarea",w="_applyActive",s="input",t="focusin",q="qxSelectable",r="tabIndex",o="off",p="activate",m="mshtml",n="focusout",u="qxKeepFocus",v="qxKeepActive";
qx.Class.define(A,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(I){qx.core.Object.call(this);
this._manager=I;
this._window=I.getWindow();
this._document=this._window.document;
this._root=this._document.documentElement;
this._body=this._document.body;
this._initObserver();
},properties:{active:{apply:w,nullable:true},focus:{apply:z,nullable:true}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{focus:1,blur:1,focusin:1,focusout:1,activate:1,deactivate:1},IGNORE_CAN_HANDLE:true,FOCUSABLE_ELEMENTS:qx.core.Variant.select("qx.client",{"mshtml|gecko":{a:1,body:1,button:1,frame:1,iframe:1,img:1,input:1,object:1,select:1,textarea:1},"opera|webkit":{button:1,input:1,select:1,textarea:1}})},members:{__jm:null,__jn:null,__jo:null,__jp:null,__jq:null,__jr:null,__js:null,__jt:null,__ju:null,__jv:null,canHandleEvent:function(bC,bD){},registerEvent:function(O,P,Q){},unregisterEvent:function(bw,bx,by){},focus:function(G){if(qx.core.Variant.isSet(l,m)){window.setTimeout(function(){try{G.focus();
}catch(bE){}},0);
}else{try{G.focus();
}catch(bg){}}this.setFocus(G);
this.setActive(G);
},activate:function(bJ){this.setActive(bJ);
},blur:function(bH){try{bH.blur();
}catch(bm){}
if(this.getActive()===bH){this.resetActive();
}
if(this.getFocus()===bH){this.resetFocus();
}},deactivate:function(N){if(this.getActive()===N){this.resetActive();
}},tryActivate:function(bu){var bv=this.__jK(bu);

if(bv){this.setActive(bv);
}},__jw:function(bn,bo,bp,bq){var bs=qx.event.Registration;
var br=bs.createEvent(bp,qx.event.type.Focus,[bn,bo,bq]);
bs.dispatchEvent(bn,br);
},_windowFocused:true,__jx:function(){if(this._windowFocused){this._windowFocused=false;
this.__jw(this._window,null,k,false);
}},__jy:function(){if(!this._windowFocused){this._windowFocused=true;
this.__jw(this._window,null,j,false);
}},_initObserver:qx.core.Variant.select(l,{"gecko":function(){this.__jm=qx.lang.Function.listener(this.__jE,this);
this.__jn=qx.lang.Function.listener(this.__jF,this);
this.__jo=qx.lang.Function.listener(this.__jD,this);
this.__jp=qx.lang.Function.listener(this.__jC,this);
this.__jq=qx.lang.Function.listener(this.__jz,this);
this._document.addEventListener(i,this.__jm,true);
this._document.addEventListener(g,this.__jn,true);
this._window.addEventListener(j,this.__jo,true);
this._window.addEventListener(k,this.__jp,true);
this._window.addEventListener(B,this.__jq,true);
},"mshtml":function(){this.__jm=qx.lang.Function.listener(this.__jE,this);
this.__jn=qx.lang.Function.listener(this.__jF,this);
this.__js=qx.lang.Function.listener(this.__jA,this);
this.__jt=qx.lang.Function.listener(this.__jB,this);
this.__jr=qx.lang.Function.listener(this.__jH,this);
this._document.attachEvent(b,this.__jm);
this._document.attachEvent(D,this.__jn);
this._document.attachEvent(E,this.__js);
this._document.attachEvent(F,this.__jt);
this._document.attachEvent(C,this.__jr);
},"webkit":function(){this.__jm=qx.lang.Function.listener(this.__jE,this);
this.__jn=qx.lang.Function.listener(this.__jF,this);
this.__jt=qx.lang.Function.listener(this.__jB,this);
this.__jo=qx.lang.Function.listener(this.__jD,this);
this.__jp=qx.lang.Function.listener(this.__jC,this);
this.__jr=qx.lang.Function.listener(this.__jH,this);
this._document.addEventListener(i,this.__jm,true);
this._document.addEventListener(g,this.__jn,true);
this._document.addEventListener(c,this.__jr,false);
this._window.addEventListener(f,this.__jt,true);
this._window.addEventListener(j,this.__jo,true);
this._window.addEventListener(k,this.__jp,true);
},"opera":function(){this.__jm=qx.lang.Function.listener(this.__jE,this);
this.__jn=qx.lang.Function.listener(this.__jF,this);
this.__js=qx.lang.Function.listener(this.__jA,this);
this.__jt=qx.lang.Function.listener(this.__jB,this);
this._document.addEventListener(i,this.__jm,true);
this._document.addEventListener(g,this.__jn,true);
this._window.addEventListener(d,this.__js,true);
this._window.addEventListener(f,this.__jt,true);
}}),_stopObserver:qx.core.Variant.select(l,{"gecko":function(){this._document.removeEventListener(i,this.__jm,true);
this._document.removeEventListener(g,this.__jn,true);
this._window.removeEventListener(j,this.__jo,true);
this._window.removeEventListener(k,this.__jp,true);
this._window.removeEventListener(B,this.__jq,true);
},"mshtml":function(){qx.bom.Event.removeNativeListener(this._document,b,this.__jm);
qx.bom.Event.removeNativeListener(this._document,D,this.__jn);
qx.bom.Event.removeNativeListener(this._document,E,this.__js);
qx.bom.Event.removeNativeListener(this._document,F,this.__jt);
qx.bom.Event.removeNativeListener(this._document,C,this.__jr);
},"webkit":function(){this._document.removeEventListener(i,this.__jm,true);
this._document.removeEventListener(c,this.__jr,false);
this._window.removeEventListener(d,this.__js,true);
this._window.removeEventListener(f,this.__jt,true);
this._window.removeEventListener(j,this.__jo,true);
this._window.removeEventListener(k,this.__jp,true);
},"opera":function(){this._document.removeEventListener(i,this.__jm,true);
this._window.removeEventListener(d,this.__js,true);
this._window.removeEventListener(f,this.__jt,true);
this._window.removeEventListener(j,this.__jo,true);
this._window.removeEventListener(k,this.__jp,true);
}}),__jz:qx.event.GlobalError.observeMethod(qx.core.Variant.select(l,{"gecko":function(e){if(!this.__jL(e.target)){qx.bom.Event.preventDefault(e);
}},"default":null})),__jA:qx.event.GlobalError.observeMethod(qx.core.Variant.select(l,{"mshtml":function(e){this.__jy();
var bN=e.srcElement;
var bM=this.__jJ(bN);

if(bM){this.setFocus(bM);
}this.tryActivate(bN);
},"opera":function(e){var bt=e.target;

if(bt==this._document||bt==this._window){this.__jy();

if(this.__ju){this.setFocus(this.__ju);
delete this.__ju;
}
if(this.__jv){this.setActive(this.__jv);
delete this.__jv;
}}else{this.setFocus(bt);
this.tryActivate(bt);
if(!this.__jL(bt)){bt.selectionStart=0;
bt.selectionEnd=0;
}}},"default":null})),__jB:qx.event.GlobalError.observeMethod(qx.core.Variant.select(l,{"mshtml":function(e){if(!e.toElement){this.__jx();
this.resetFocus();
this.resetActive();
}},"webkit":function(e){var bF=e.target;

if(bF===this.getFocus()){this.resetFocus();
}
if(bF===this.getActive()){this.resetActive();
}},"opera":function(e){var R=e.target;

if(R==this._document){this.__jx();
this.__ju=this.getFocus();
this.__jv=this.getActive();
this.resetFocus();
this.resetActive();
}else{if(R===this.getFocus()){this.resetFocus();
}
if(R===this.getActive()){this.resetActive();
}}},"default":null})),__jC:qx.event.GlobalError.observeMethod(qx.core.Variant.select(l,{"gecko":function(e){if(e.target===this._window||e.target===this._document){this.__jx();
this.resetActive();
this.resetFocus();
}},"webkit":function(e){if(e.target===this._window||e.target===this._document){this.__jx();
this.__ju=this.getFocus();
this.__jv=this.getActive();
this.resetActive();
this.resetFocus();
}},"default":null})),__jD:qx.event.GlobalError.observeMethod(qx.core.Variant.select(l,{"gecko":function(e){var bI=e.target;

if(bI===this._window||bI===this._document){this.__jy();
bI=this._body;
}this.setFocus(bI);
this.tryActivate(bI);
},"webkit":function(e){var bf=e.target;

if(bf===this._window||bf===this._document){this.__jy();

if(this.__ju){this.setFocus(this.__ju);
delete this.__ju;
}
if(this.__jv){this.setActive(this.__jv);
delete this.__jv;
}}else{this.setFocus(bf);
this.tryActivate(bf);
}},"default":null})),__jE:qx.event.GlobalError.observeMethod(qx.core.Variant.select(l,{"gecko":function(e){var W=this.__jJ(e.target);

if(!W){qx.bom.Event.preventDefault(e);
}else if(W===this._body){this.setFocus(W);
}},"mshtml":function(e){var bl=e.srcElement;
var bk=this.__jJ(bl);

if(bk){if(!this.__jL(bl)){bl.unselectable=h;
try{document.selection.empty();
}catch(e){}try{bk.focus();
}catch(e){}}}else{qx.bom.Event.preventDefault(e);
if(!this.__jL(bl)){bl.unselectable=h;
}}},"webkit":function(e){var bi=e.target;
var bh=this.__jJ(bi);

if(bh){this.setFocus(bh);
}else{qx.bom.Event.preventDefault(e);
}},"opera":function(e){var bB=e.target;
var bz=this.__jJ(bB);

if(!this.__jL(bB)){qx.bom.Event.preventDefault(e);
if(bz){var bA=this.getFocus();

if(bA&&bA.selectionEnd){bA.selectionStart=0;
bA.selectionEnd=0;
bA.blur();
}if(bz){this.setFocus(bz);
}}}else if(bz){this.setFocus(bz);
}},"default":null})),__jF:qx.event.GlobalError.observeMethod(qx.core.Variant.select(l,{"mshtml":function(e){var H=e.srcElement;

if(H.unselectable){H.unselectable=o;
}this.tryActivate(this.__jG(H));
},"gecko":function(e){var M=e.target;

while(M&&M.offsetWidth===undefined){M=M.parentNode;
}
if(M){this.tryActivate(M);
}},"webkit|opera":function(e){this.tryActivate(this.__jG(e.target));
},"default":null})),__jG:qx.event.GlobalError.observeMethod(qx.core.Variant.select(l,{"mshtml|webkit":function(S){var T=this.getFocus();

if(T&&S!=T&&(T.nodeName.toLowerCase()===s||T.nodeName.toLowerCase()===x)){S=T;
}return S;
},"default":function(a){return a;
}})),__jH:qx.event.GlobalError.observeMethod(qx.core.Variant.select(l,{"mshtml|webkit":function(e){var bj=qx.bom.client.Engine.MSHTML?e.srcElement:e.target;

if(!this.__jL(bj)){qx.bom.Event.preventDefault(e);
}},"default":null})),__jI:function(J){var K=qx.bom.element.Attribute.get(J,r);

if(K>=1){return true;
}var L=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(K>=0&&L[J.tagName]){return true;
}return false;
},__jJ:function(bG){while(bG&&bG.nodeType===1){if(bG.getAttribute(u)==h){return null;
}
if(this.__jI(bG)){return bG;
}bG=bG.parentNode;
}return this._body;
},__jK:function(U){var V=U;

while(U&&U.nodeType===1){if(U.getAttribute(v)==h){return null;
}U=U.parentNode;
}return V;
},__jL:function(bK){while(bK&&bK.nodeType===1){var bL=bK.getAttribute(q);

if(bL!=null){return bL===h;
}bK=bK.parentNode;
}return true;
},_applyActive:function(X,Y){if(Y){this.__jw(Y,X,y,true);
}
if(X){this.__jw(X,Y,p,true);
}},_applyFocus:function(bd,be){if(be){this.__jw(be,bd,n,true);
}
if(bd){this.__jw(bd,be,t,true);
}if(be){this.__jw(be,bd,k,false);
}
if(bd){this.__jw(bd,be,j,false);
}}},destruct:function(){this._stopObserver();
this._manager=this._window=this._document=this._root=this._body=this.__jM=null;
},defer:function(ba){qx.event.Registration.addHandler(ba);
var bb=ba.FOCUSABLE_ELEMENTS;

for(var bc in bb){bb[bc.toUpperCase()]=1;
}}});
})();
(function(){var a="qx.event.type.Focus";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(b,c,d){qx.event.type.Event.prototype.init.call(this,d,false);
this._target=b;
this._relatedTarget=c;
return this;
}}});
})();
(function(){var j="",i="undefined",h="qx.client",g="readOnly",f="accessKey",e="qx.bom.element.Attribute",d="rowSpan",c="vAlign",b="className",a="textContent",y="'",x="htmlFor",w="longDesc",v="cellSpacing",u="frameBorder",t="='",s="useMap",r="innerText",q="innerHTML",p="tabIndex",n="dateTime",o="maxLength",l="mshtml",m="cellPadding",k="colSpan";
qx.Class.define(e,{statics:{__gL:{names:{"class":b,"for":x,html:q,text:qx.core.Variant.isSet(h,l)?r:a,colspan:k,rowspan:d,valign:c,datetime:n,accesskey:f,tabindex:p,maxlength:o,readonly:g,longdesc:w,cellpadding:m,cellspacing:v,frameborder:u,usemap:s},runtime:{"html":1,"text":1},bools:{compact:1,nowrap:1,ismap:1,declare:1,noshade:1,checked:1,disabled:1,readOnly:1,multiple:1,selected:1,noresize:1,defer:1,allowTransparency:1},property:{$$html:1,$$widget:1,disabled:1,checked:1,readOnly:1,multiple:1,selected:1,value:1,maxLength:1,className:1,innerHTML:1,innerText:1,textContent:1,htmlFor:1,tabIndex:1},qxProperties:{$$widget:1,$$html:1},propertyDefault:{disabled:false,checked:false,readOnly:false,multiple:false,selected:false,value:j,className:j,innerHTML:j,innerText:j,textContent:j,htmlFor:j,tabIndex:0,maxLength:qx.core.Variant.select(h,{"mshtml":2147483647,"webkit":524288,"default":-1})},removeableProperties:{disabled:1,multiple:1,maxLength:1},original:{href:1,src:1,type:1}},compile:function(J){var K=[];
var M=this.__gL.runtime;

for(var L in J){if(!M[L]){K.push(L,t,J[L],y);
}}return K.join(j);
},get:qx.core.Variant.select(h,{"mshtml":function(D,name){var F=this.__gL;
var E;
name=F.names[name]||name;
if(F.original[name]){E=D.getAttribute(name,2);
}else if(F.property[name]){E=D[name];

if(typeof F.propertyDefault[name]!==i&&E==F.propertyDefault[name]){if(typeof F.bools[name]===i){return null;
}else{return E;
}}}else{E=D.getAttribute(name);
}if(F.bools[name]){return !!E;
}return E;
},"default":function(G,name){var I=this.__gL;
var H;
name=I.names[name]||name;
if(I.property[name]){H=G[name];

if(typeof I.propertyDefault[name]!==i&&H==I.propertyDefault[name]){if(typeof I.bools[name]===i){return null;
}else{return H;
}}}else{H=G.getAttribute(name);
}if(I.bools[name]){return !!H;
}return H;
}}),set:function(A,name,B){var C=this.__gL;
name=C.names[name]||name;
if(C.bools[name]){B=!!B;
}if(C.property[name]&&(!(A[name]===undefined)||C.qxProperties[name])){if(B==null){if(C.removeableProperties[name]){A.removeAttribute(name);
return;
}else if(typeof C.propertyDefault[name]!==i){B=C.propertyDefault[name];
}}A[name]=B;
}else{if(B===true){A.setAttribute(name,name);
}else if(B===false||B===null){A.removeAttribute(name);
}else{A.setAttribute(name,B);
}}},reset:function(z,name){this.set(z,name,null);
}}});
})();
(function(){var i="left",h="right",g="middle",f="qx.client",e="dblclick",d="click",c="none",b="contextmenu",a="qx.event.type.Mouse";
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(k,l,m,n,o){qx.event.type.Dom.prototype.init.call(this,k,l,m,n,o);

if(!m){this._relatedTarget=qx.bom.Event.getRelatedTarget(k);
}return this;
},_cloneNativeEvent:function(p,q){var q=qx.event.type.Dom.prototype._cloneNativeEvent.call(this,p,q);
q.button=p.button;
q.clientX=p.clientX;
q.clientY=p.clientY;
q.pageX=p.pageX;
q.pageY=p.pageY;
q.screenX=p.screenX;
q.screenY=p.screenY;
q.wheelDelta=p.wheelDelta;
q.detail=p.detail;
q.srcElement=p.srcElement;
return q;
},__jY:qx.core.Variant.select(f,{"mshtml":{1:i,2:h,4:g},"default":{0:i,2:h,1:g}}),stop:function(){this.stopPropagation();
},getButton:function(){switch(this._type){case d:case e:return i;
case b:return h;
default:return this.__jY[this._native.button]||c;
}},isLeftPressed:function(){return this.getButton()===i;
},isMiddlePressed:function(){return this.getButton()===g;
},isRightPressed:function(){return this.getButton()===h;
},getRelatedTarget:function(){return this._relatedTarget;
},getViewportLeft:function(){return this._native.clientX;
},getViewportTop:function(){return this._native.clientY;
},getDocumentLeft:qx.core.Variant.select(f,{"mshtml":function(){var r=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(r);
},"default":function(){return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(f,{"mshtml":function(){var j=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(j);
},"default":function(){return this._native.pageY;
}}),getScreenLeft:function(){return this._native.screenX;
},getScreenTop:function(){return this._native.screenY;
}}});
})();
(function(){var c="qx.client",b="chrome",a="qx.event.type.MouseWheel";
qx.Class.define(a,{extend:qx.event.type.Mouse,members:{stop:function(){this.stopPropagation();
this.preventDefault();
},getWheelDelta:qx.core.Variant.select(c,{"default":function(){return -(this._native.wheelDelta/40);
},"gecko":function(){return this._native.detail;
},"webkit":function(){if(qx.bom.client.Browser.NAME==b){if(qx.bom.client.Platform.MAC){return -(this._native.wheelDelta/1200);
}else{return -(this._native.wheelDelta/120);
}}else{if(qx.bom.client.Platform.WIN){var d=120;
if(qx.bom.client.Engine.VERSION==533.16){d=1200;
}}else{d=40;
if(qx.bom.client.Engine.VERSION==533.16||qx.bom.client.Engine.VERSION==533.17){d=1200;
}}return -(this._native.wheelDelta/d);
}}})}});
})();
(function(){var d="qx.client",c="qx.bom.Viewport";
qx.Class.define(c,{statics:{getWidth:qx.core.Variant.select(d,{"opera":function(q){if(qx.bom.client.Engine.VERSION<9.5){return (q||window).document.body.clientWidth;
}else{var r=(q||window).document;
return qx.bom.Document.isStandardMode(q)?r.documentElement.clientWidth:r.body.clientWidth;
}},"webkit":function(l){if(qx.bom.client.Engine.VERSION<523.15){return (l||window).innerWidth;
}else{var m=(l||window).document;
return qx.bom.Document.isStandardMode(l)?m.documentElement.clientWidth:m.body.clientWidth;
}},"default":function(n){var o=(n||window).document;
return qx.bom.Document.isStandardMode(n)?o.documentElement.clientWidth:o.body.clientWidth;
}}),getHeight:qx.core.Variant.select(d,{"opera":function(e){if(qx.bom.client.Engine.VERSION<9.5){return (e||window).document.body.clientHeight;
}else{var f=(e||window).document;
return qx.bom.Document.isStandardMode(e)?f.documentElement.clientHeight:f.body.clientHeight;
}},"webkit":function(s){if(qx.bom.client.Engine.VERSION<523.15){return (s||window).innerHeight;
}else{var t=(s||window).document;
return qx.bom.Document.isStandardMode(s)?t.documentElement.clientHeight:t.body.clientHeight;
}},"default":function(h){var i=(h||window).document;
return qx.bom.Document.isStandardMode(h)?i.documentElement.clientHeight:i.body.clientHeight;
}}),getScrollLeft:qx.core.Variant.select(d,{"mshtml":function(a){var b=(a||window).document;
return b.documentElement.scrollLeft||b.body.scrollLeft;
},"default":function(g){return (g||window).pageXOffset;
}}),getScrollTop:qx.core.Variant.select(d,{"mshtml":function(j){var k=(j||window).document;
return k.documentElement.scrollTop||k.body.scrollTop;
},"default":function(p){return (p||window).pageYOffset;
}})}});
})();
(function(){var g="CSS1Compat",f="position:absolute;width:0;height:0;width:1",e="qx.bom.Document",d="1px",c="qx.client",b="div";
qx.Class.define(e,{statics:{isQuirksMode:qx.core.Variant.select(c,{"mshtml":function(m){if(qx.bom.client.Engine.VERSION>=8){return (m||window).document.documentMode===5;
}else{return (m||window).document.compatMode!==g;
}},"webkit":function(h){if(document.compatMode===undefined){var i=(h||window).document.createElement(b);
i.style.cssText=f;
return i.style.width===d?true:false;
}else{return (h||window).document.compatMode!==g;
}},"default":function(a){return (a||window).document.compatMode!==g;
}}),isStandardMode:function(q){return !this.isQuirksMode(q);
},getWidth:function(j){var k=(j||window).document;
var l=qx.bom.Viewport.getWidth(j);
var scroll=this.isStandardMode(j)?k.documentElement.scrollWidth:k.body.scrollWidth;
return Math.max(scroll,l);
},getHeight:function(n){var o=(n||window).document;
var p=qx.bom.Viewport.getHeight(n);
var scroll=this.isStandardMode(n)?o.documentElement.scrollHeight:o.body.scrollHeight;
return Math.max(scroll,p);
}}});
})();
(function(){var k="qx.client",j="ie",i="msie",h="android",g="operamini",f="mobile chrome",e=")(/| )([0-9]+\.[0-9])",d="iemobile",c="opera mobi",b="Mobile Safari",y="operamobile",x="mobile safari",w="IEMobile|Maxthon|MSIE",v="qx.bom.client.Browser",u="opera mini",t="(",s="opera",r="mshtml",q="Opera Mini|Opera Mobi|Opera",p="AdobeAIR|Titanium|Fluid|Chrome|Android|Epiphany|Konqueror|iCab|OmniWeb|Maxthon|Pre|Mobile Safari|Safari",n="webkit",o="5.0",l="prism|Fennec|Camino|Kmeleon|Galeon|Netscape|SeaMonkey|Firefox",m="Mobile/";
qx.Bootstrap.define(v,{statics:{UNKNOWN:true,NAME:"unknown",TITLE:"unknown 0.0",VERSION:0.0,FULLVERSION:"0.0.0",__kT:function(A){var B=navigator.userAgent;
var D=new RegExp(t+A+e);
var E=B.match(D);

if(!E){return;
}var name=E[1].toLowerCase();
var C=E[3];
if(B.match(/Version(\/| )([0-9]+\.[0-9])/)){C=RegExp.$2;
}
if(qx.core.Variant.isSet(k,n)){if(name===h){name=f;
}else if(B.indexOf(b)!==-1||B.indexOf(m)!==-1){name=x;
}}else if(qx.core.Variant.isSet(k,r)){if(name===i){name=j;
if(qx.bom.client.System.WINCE&&name===j){name=d;
C=o;
}}}else if(qx.core.Variant.isSet(k,s)){if(name===c){name=y;
}else if(name===u){name=g;
}}this.NAME=name;
this.FULLVERSION=C;
this.VERSION=parseFloat(C,10);
this.TITLE=name+" "+this.VERSION;
this.UNKNOWN=false;
}},defer:qx.core.Variant.select(k,{"webkit":function(a){a.__kT(p);
},"gecko":function(z){z.__kT(l);
},"mshtml":function(G){G.__kT(w);
},"opera":function(F){F.__kT(q);
}})});
})();
(function(){var n="qx.client",m="qx.dom.Hierarchy",l="previousSibling",k="*",j="nextSibling",i="parentNode";
qx.Class.define(m,{statics:{getNodeIndex:function(o){var p=0;

while(o&&(o=o.previousSibling)){p++;
}return p;
},getElementIndex:function(b){var c=0;
var d=qx.dom.Node.ELEMENT;

while(b&&(b=b.previousSibling)){if(b.nodeType==d){c++;
}}return c;
},getNextElementSibling:function(e){while(e&&(e=e.nextSibling)&&!qx.dom.Node.isElement(e)){continue;
}return e||null;
},getPreviousElementSibling:function(s){while(s&&(s=s.previousSibling)&&!qx.dom.Node.isElement(s)){continue;
}return s||null;
},contains:qx.core.Variant.select(n,{"webkit|mshtml|opera":function(f,g){if(qx.dom.Node.isDocument(f)){var h=qx.dom.Node.getDocument(g);
return f&&h==f;
}else if(qx.dom.Node.isDocument(g)){return false;
}else{return f.contains(g);
}},"gecko":function(t,u){return !!(t.compareDocumentPosition(u)&16);
},"default":function(q,r){while(r){if(q==r){return true;
}r=r.parentNode;
}return false;
}}),isRendered:function(O){if(!O.parentNode||!O.offsetParent){return false;
}var P=O.ownerDocument||O.document;
if(P.body.contains){return P.body.contains(O);
}if(P.compareDocumentPosition){return !!(P.compareDocumentPosition(O)&16);
}throw new Error("Missing support for isRendered()!");
},isDescendantOf:function(z,A){return this.contains(A,z);
},getCommonParent:qx.core.Variant.select(n,{"mshtml|opera":function(w,x){if(w===x){return w;
}
while(w&&qx.dom.Node.isElement(w)){if(w.contains(x)){return w;
}w=w.parentNode;
}return null;
},"default":function(Q,R){if(Q===R){return Q;
}var S={};
var V=qx.core.ObjectRegistry;
var U,T;

while(Q||R){if(Q){U=V.toHashCode(Q);

if(S[U]){return S[U];
}S[U]=Q;
Q=Q.parentNode;
}
if(R){T=V.toHashCode(R);

if(S[T]){return S[T];
}S[T]=R;
R=R.parentNode;
}}return null;
}}),getAncestors:function(a){return this._recursivelyCollect(a,i);
},getChildElements:function(G){G=G.firstChild;

if(!G){return [];
}var H=this.getNextSiblings(G);

if(G.nodeType===1){H.unshift(G);
}return H;
},getDescendants:function(N){return qx.lang.Array.fromCollection(N.getElementsByTagName(k));
},getFirstDescendant:function(F){F=F.firstChild;

while(F&&F.nodeType!=1){F=F.nextSibling;
}return F;
},getLastDescendant:function(v){v=v.lastChild;

while(v&&v.nodeType!=1){v=v.previousSibling;
}return v;
},getPreviousSiblings:function(E){return this._recursivelyCollect(E,l);
},getNextSiblings:function(M){return this._recursivelyCollect(M,j);
},_recursivelyCollect:function(J,K){var L=[];

while(J=J[K]){if(J.nodeType==1){L.push(J);
}}return L;
},getSiblings:function(I){return this.getPreviousSiblings(I).reverse().concat(this.getNextSiblings(I));
},isEmpty:function(y){y=y.firstChild;

while(y){if(y.nodeType===qx.dom.Node.ELEMENT||y.nodeType===qx.dom.Node.TEXT){return false;
}y=y.nextSibling;
}return true;
},cleanWhitespace:function(B){var C=B.firstChild;

while(C){var D=C.nextSibling;

if(C.nodeType==3&&!/\S/.test(C.nodeValue)){B.removeChild(C);
}C=D;
}}}});
})();
(function(){var b="qx.client",a="qx.event.type.Drag";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(k,l){qx.event.type.Event.prototype.init.call(this,true,k);

if(l){this._native=l.getNativeEvent()||null;
this._originalTarget=l.getTarget()||null;
}else{this._native=null;
this._originalTarget=null;
}return this;
},clone:function(d){var e=qx.event.type.Event.prototype.clone.call(this,d);
e._native=this._native;
return e;
},getDocumentLeft:qx.core.Variant.select(b,{"mshtml":function(){if(this._native==null){return 0;
}var g=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(g);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(b,{"mshtml":function(){if(this._native==null){return 0;
}var o=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(o);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageY;
}}),getManager:function(){return qx.event.Registration.getManager(this.getTarget()).getHandler(qx.event.handler.DragDrop);
},addType:function(m){this.getManager().addType(m);
},addAction:function(n){this.getManager().addAction(n);
},supportsType:function(c){return this.getManager().supportsType(c);
},supportsAction:function(h){return this.getManager().supportsAction(h);
},addData:function(i,j){this.getManager().addData(i,j);
},getData:function(f){return this.getManager().getData(f);
},getCurrentType:function(){return this.getManager().getCurrentType();
},getCurrentAction:function(){return this.getManager().getCurrentAction();
}}});
})();
(function(){var i="interval",h="qx.event.Timer",g="_applyInterval",f="_applyEnabled",d="Boolean",c="qx.event.type.Event",b="Integer";
qx.Class.define(h,{extend:qx.core.Object,construct:function(a){qx.core.Object.call(this);
this.setEnabled(false);

if(a!=null){this.setInterval(a);
}var self=this;
this.__er=function(){self._oninterval.call(self);
};
},events:{"interval":c},statics:{once:function(n,o,p){var q=new qx.event.Timer(p);
q.__es=n;
q.addListener(i,function(e){q.stop();
n.call(o,e);
q.dispose();
o=null;
},o);
q.start();
return q;
}},properties:{enabled:{init:true,check:d,apply:f},interval:{check:b,init:1000,apply:g}},members:{__et:null,__er:null,_applyInterval:function(r,s){if(this.getEnabled()){this.restart();
}},_applyEnabled:function(j,k){if(k){window.clearInterval(this.__et);
this.__et=null;
}else if(j){this.__et=window.setInterval(this.__er,this.getInterval());
}},start:function(){this.setEnabled(true);
},startWith:function(m){this.setInterval(m);
this.start();
},stop:function(){this.setEnabled(false);
},restart:function(){this.stop();
this.start();
},restartWith:function(l){this.stop();
this.startWith(l);
},_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.$$disposed){return;
}
if(this.getEnabled()){this.fireEvent(i);
}})},destruct:function(){if(this.__et){window.clearInterval(this.__et);
}this.__et=this.__er=null;
}});
})();
(function(){var h="losecapture",g="qx.client",f="blur",e="focus",d="click",c="qx.event.dispatch.MouseCapture",b="capture",a="scroll";
qx.Class.define(c,{extend:qx.event.dispatch.AbstractBubbling,construct:function(m,n){qx.event.dispatch.AbstractBubbling.call(this,m);
this.__gf=m.getWindow();
this.__gg=n;
m.addListener(this.__gf,f,this.releaseCapture,this);
m.addListener(this.__gf,e,this.releaseCapture,this);
m.addListener(this.__gf,a,this.releaseCapture,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST},members:{__gg:null,__gh:null,__gi:true,__gf:null,_getParent:function(q){return q.parentNode;
},canDispatchEvent:function(k,event,l){return (this.__gh&&this.__gj[l]);
},dispatchEvent:function(o,event,p){if(p==d){event.stopPropagation();
this.releaseCapture();
return;
}
if(this.__gi||!qx.dom.Hierarchy.contains(this.__gh,o)){o=this.__gh;
}qx.event.dispatch.AbstractBubbling.prototype.dispatchEvent.call(this,o,event,p);
},__gj:{"mouseup":1,"mousedown":1,"click":1,"dblclick":1,"mousemove":1,"mouseout":1,"mouseover":1},activateCapture:function(t,u){var u=u!==false;

if(this.__gh===t&&this.__gi==u){return;
}
if(this.__gh){this.releaseCapture();
}this.nativeSetCapture(t,u);

if(this.hasNativeCapture){var self=this;
qx.bom.Event.addNativeListener(t,h,function(){qx.bom.Event.removeNativeListener(t,h,arguments.callee);
self.releaseCapture();
});
}this.__gi=u;
this.__gh=t;
this.__gg.fireEvent(t,b,qx.event.type.Event,[true,false]);
},getCaptureElement:function(){return this.__gh;
},releaseCapture:function(){var v=this.__gh;

if(!v){return;
}this.__gh=null;
this.__gg.fireEvent(v,h,qx.event.type.Event,[true,false]);
this.nativeReleaseCapture(v);
},hasNativeCapture:qx.bom.client.Engine.MSHTML,nativeSetCapture:qx.core.Variant.select(g,{"mshtml":function(i,j){i.setCapture(j!==false);
},"default":qx.lang.Function.empty}),nativeReleaseCapture:qx.core.Variant.select(g,{"mshtml":function(r){r.releaseCapture();
},"default":qx.lang.Function.empty})},destruct:function(){this.__gh=this.__gf=this.__gg=null;
},defer:function(s){qx.event.Registration.addDispatcher(s);
}});
})();
(function(){var t="qx.client",s="",r="mshtml",q="'",p="SelectionLanguage",o="qx.xml.Document",n=" />",m="MSXML2.DOMDocument.3.0",k='<\?xml version="1.0" encoding="utf-8"?>\n<',j="MSXML2.XMLHTTP.3.0",e="MSXML2.XMLHTTP.6.0",h=" xmlns='",g="text/xml",d="XPath",c="MSXML2.DOMDocument.6.0",f="HTML";
qx.Class.define(o,{statics:{DOMDOC:null,XMLHTTP:null,isXmlDocument:function(E){if(E.nodeType===9){return E.documentElement.nodeName!==f;
}else if(E.ownerDocument){return this.isXmlDocument(E.ownerDocument);
}else{return false;
}},create:qx.core.Variant.select(t,{"mshtml":function(A,B){var C=new ActiveXObject(this.DOMDOC);
C.setProperty(p,d);

if(B){var D=k;
D+=B;

if(A){D+=h+A+q;
}D+=n;
C.loadXML(D);
}return C;
},"default":function(F,G){return document.implementation.createDocument(F||s,G||s,null);
}}),fromString:qx.core.Variant.select(t,{"mshtml":function(a){var b=qx.xml.Document.create();
b.loadXML(a);
return b;
},"default":function(x){var y=new DOMParser();
return y.parseFromString(x,g);
}})},defer:function(u){if(qx.core.Variant.isSet(t,r)){var v=[c,m];
var w=[e,j];

for(var i=0,l=v.length;i<l;i++){try{new ActiveXObject(v[i]);
new ActiveXObject(w[i]);
}catch(z){continue;
}u.DOMDOC=v[i];
u.XMLHTTP=w[i];
break;
}}}});
})();
(function(){var g="function",f="qx.event.message.Bus",e="*",d="undefined",c="string",b="singleton";
qx.Class.define(f,{type:b,extend:qx.core.Object,statics:{getSubscriptions:function(){return this.getInstance().getSubscriptions();
},subscribe:function(t,u,v){return this.getInstance().subscribe(t,u,v);
},checkSubscription:function(o,p,q){return this.getInstance().checkSubscription(o,p,q);
},unsubscribe:function(M,N,O){return this.getInstance().unsubscribe(M,N,O);
},dispatch:function(a){return this.getInstance().dispatch.apply(this.getInstance(),arguments);
},dispatchByName:function(name,w){return this.getInstance().dispatchByName.apply(this.getInstance(),arguments);
}},construct:function(){this.__wX={};
},members:{__wX:null,getSubscriptions:function(){return this.__wX;
},subscribe:function(I,J,K){if(!I||typeof J!=g){this.error("Invalid parameters! "+[I,J,K]);
return false;
}var L=this.getSubscriptions();

if(this.checkSubscription(I)){if(this.checkSubscription(I,J,K)){this.warn("Object method already subscribed to "+I);
return false;
}L[I].push({subscriber:J,context:K||null});
return true;
}else{L[I]=[{subscriber:J,context:K||null}];
return true;
}},checkSubscription:function(P,Q,R){var S=this.getSubscriptions();

if(!S[P]||S[P].length===0){return false;
}
if(Q){for(var i=0;i<S[P].length;i++){if(S[P][i].subscriber===Q&&S[P][i].context===(R||null)){return true;
}}return false;
}return true;
},unsubscribe:function(h,j,k){var m=this.getSubscriptions();
var l=m[h];

if(l){if(!k){k=null;
}var i=l.length;
var n;

do{n=l[--i];

if(n.subscriber===j&&n.context===k){l.splice(i,1);

if(l.length===0){m[h]=null;
delete m[h];
}return true;
}}while(i);
}return false;
},dispatch:function(x){if(typeof x==c){{};
var C=typeof arguments[1]!=d?arguments[1]:true;
x=new qx.event.message.Message(x,C);
}var y=this.getSubscriptions();
var z=x.getName();
var A=false;

for(var D in y){var B=D.indexOf(e);

if(B>-1){if(B===0||D.substr(0,B)===z.substr(0,B)){this.__wY(y[D],x);
A=true;
}}else{if(D===z){this.__wY(y[z],x);
A=true;
}}}return A;
},dispatchByName:function(name,r){var s=new qx.event.message.Message(name,r);
return this.dispatch(s);
},__wY:function(E,F){for(var i=0;i<E.length;i++){var G=E[i].subscriber;
var H=E[i].context;
if(H&&H.isDisposed){if(H.isDisposed()){E.splice(i,1);
i--;
}else{G.call(H,F);
}}else{G.call(H,F);
}}}}});
})();
(function(){var c="Object",b="qx.event.message.Message",a="String";
qx.Class.define(b,{extend:qx.core.Object,construct:function(name,d){qx.core.Object.call(this);

if(name!=null){this.setName(name);
}
if(d!=null){this.setData(d);
}},properties:{name:{check:a},data:{init:null,nullable:true},sender:{check:c}}});
})();
(function(){var m="'>",l="[",k=", ",h="</span>",g="<span class='type-",f="</span> ",e="}",d="",c="]",b="{",J="map",I="<span class='object'>",H="]:",G="&gt;",F="<span class='object' title='Object instance with hash code: ",E="string",D="level-",C="0",B="&lt;",A="<span class='offset'>",t=":",u="qx.log.appender.Util",r="&amp;",s="&#39;",p="DIV",q="<span>",n="&quot;",o="<span class='type-key'>",v="</span>:<span class='type-",w="</span>: ",y=" ",x="]</span>: ",z="?";
qx.Class.define(u,{statics:{toHtml:function(R){var bc=[];
var Y,bb,T,V;
bc.push(A,this.formatOffset(R.offset,6),f);

if(R.object){var S=R.win.qx.core.ObjectRegistry.fromHashCode(R.object);

if(S){bc.push(F+S.$$hash+m,S.classname,l,S.$$hash,x);
}}else if(R.clazz){bc.push(I+R.clazz.classname,w);
}var U=R.items;

for(var i=0,ba=U.length;i<ba;i++){Y=U[i];
bb=Y.text;

if(bb instanceof Array){var V=[];

for(var j=0,X=bb.length;j<X;j++){T=bb[j];

if(typeof T===E){V.push(q+this.escapeHTML(T)+h);
}else if(T.key){V.push(o+T.key+v+T.type+m+this.escapeHTML(T.text)+h);
}else{V.push(g+T.type+m+this.escapeHTML(T.text)+h);
}}bc.push(g+Y.type+m);

if(Y.type===J){bc.push(b,V.join(k),e);
}else{bc.push(l,V.join(k),c);
}bc.push(h);
}else{bc.push(g+Y.type+m+this.escapeHTML(bb)+f);
}}var W=document.createElement(p);
W.innerHTML=bc.join(d);
W.className=D+R.level;
return W;
},formatOffset:function(M,length){var P=M.toString();
var N=(length||6)-P.length;
var O=d;

for(var i=0;i<N;i++){O+=C;
}return O+P;
},escapeHTML:function(Q){return String(Q).replace(/[<>&"']/g,this.__uj);
},__uj:function(K){var L={"<":B,">":G,"&":r,"'":s,'"':n};
return L[K]||z;
},toText:function(a){return this.toTextArray(a).join(y);
},toTextArray:function(bd){var bl=[];
bl.push(this.formatOffset(bd.offset,6));

if(bd.object){var be=bd.win.qx.core.ObjectRegistry.fromHashCode(bd.object);

if(be){bl.push(be.classname+l+be.$$hash+H);
}}else if(bd.clazz){bl.push(bd.clazz.classname+t);
}var bf=bd.items;
var bi,bk;

for(var i=0,bj=bf.length;i<bj;i++){bi=bf[i];
bk=bi.text;

if(bk instanceof Array){var bg=[];

for(var j=0,bh=bk.length;j<bh;j++){bg.push(bk[j].text);
}
if(bi.type===J){bl.push(b,bg.join(k),e);
}else{bl.push(l,bg.join(k),c);
}}else{bl.push(bk);
}}return bl;
}}});
})();
(function(){var d="debug",c="log",b="qx.log.appender.Native",a="qx.client";
qx.Class.define(b,{statics:{process:qx.core.Variant.select(a,{"gecko":function(l){if(window.console&&console.firebug){console[l.level].call(console,qx.log.appender.Util.toText(l));
}},"mshtml":function(h){if(window.console){var j=h.level;

if(j==d){j=c;
}var i=qx.log.appender.Util.toText(h);
console[j](i);
}},"webkit":function(e){if(window.console){var g=e.level;

if(g==d){g=c;
}var f=qx.log.appender.Util.toText(e);
console[g](f);
}},"opera":function(k){}})},defer:function(m){qx.log.Logger.register(m);
}});
})();
(function(){var k="",j='</div>',i="Up",h="none",g="keypress",f='.qxconsole .messages{background:white;height:100%;width:100%;overflow:auto;}',d="Enter",c="px",b='.qxconsole .messages .user-result{background:white}',a='.qxconsole .messages .level-error{background:#FFE2D5}',V="div",U="user-command",T='<div class="command">',S='.qxconsole .command input:focus{outline:none;}',R='.qxconsole .messages .type-key{color:#565656;font-style:italic}',Q='.qxconsole .messages .type-instance{color:#565656;font-weight:bold}',P='.qxconsole .messages div{padding:0px 4px;}',O='.qxconsole .messages .level-debug{background:white}',N='.qxconsole .messages .type-class{color:#5F3E8A;font-weight:bold}',M="DIV",r='.qxconsole .messages .level-user{background:#E3EFE9}',s='<div class="qxconsole">',p="D",q='.qxconsole .messages .type-map{color:#CC3E8A;font-weight:bold;}',n='.qxconsole .messages .type-string{color:black;font-weight:normal;}',o='.qxconsole .control a{text-decoration:none;color:black;}',l='<div class="messages">',m='.qxconsole .messages .type-boolean{color:#15BC91;font-weight:normal;}',t='<input type="text"/>',u="clear",B='.qxconsole .command input{width:100%;border:0 none;font-family:Consolas,Monaco,monospace;font-size:11px;line-height:1.2;}',z='.qxconsole .messages .type-array{color:#CC3E8A;font-weight:bold;}',F='.qxconsole{z-index:10000;width:600px;height:300px;top:0px;right:0px;position:absolute;border-left:1px solid black;color:black;border-bottom:1px solid black;color:black;font-family:Consolas,Monaco,monospace;font-size:11px;line-height:1.2;}',D='.qxconsole .command{background:white;padding:2px 4px;border-top:1px solid black;}',I='.qxconsole .messages .user-command{color:blue}',H="F7",w="qx.log.appender.Console",L='.qxconsole .messages .level-info{background:#DEEDFA}',K="block",J='.qxconsole .messages .level-warn{background:#FFF7D5}',v='.qxconsole .messages .type-stringify{color:#565656;font-weight:bold}',x='.qxconsole .messages .user-error{background:#FFE2D5}',y='.qxconsole .control{background:#cdcdcd;border-bottom:1px solid black;padding:4px 8px;}',A='<div class="control"><a href="javascript:qx.log.appender.Console.clear()">Clear</a> | <a href="javascript:qx.log.appender.Console.toggle()">Hide</a></div>',C=">>> ",E="Down",G='.qxconsole .messages .type-number{color:#155791;font-weight:normal;}';
qx.Class.define(w,{statics:{init:function(){var bc=[F,y,o,f,P,I,b,x,O,L,J,a,r,n,G,m,z,q,R,N,Q,v,D,B,S];
qx.bom.Stylesheet.createElement(bc.join(k));
var be=[s,A,l,j,T,t,j,j];
var bf=document.createElement(M);
bf.innerHTML=be.join(k);
var bd=bf.firstChild;
document.body.appendChild(bf.firstChild);
this.__Gk=bd;
this.__Gl=bd.childNodes[1];
this.__Gm=bd.childNodes[2].firstChild;
this.__Gr();
qx.log.Logger.register(this);
qx.core.ObjectRegistry.register(this);
},dispose:function(){qx.event.Registration.removeListener(document.documentElement,g,this.__Gs,this);
qx.log.Logger.unregister(this);
},clear:function(){this.__Gl.innerHTML=k;
},process:function(bg){this.__Gl.appendChild(qx.log.appender.Util.toHtml(bg));
this.__Gn();
},__Gn:function(){this.__Gl.scrollTop=this.__Gl.scrollHeight;
},__Go:true,toggle:function(){if(!this.__Gk){this.init();
}else if(this.__Gk.style.display==h){this.show();
}else{this.__Gk.style.display=h;
}},show:function(){if(!this.__Gk){this.init();
}else{this.__Gk.style.display=K;
this.__Gl.scrollTop=this.__Gl.scrollHeight;
}},__Gp:[],execute:function(){var Y=this.__Gm.value;

if(Y==k){return;
}
if(Y==u){return this.clear();
}var W=document.createElement(V);
W.innerHTML=qx.log.appender.Util.escapeHTML(C+Y);
W.className=U;
this.__Gp.push(Y);
this.__Gq=this.__Gp.length;
this.__Gl.appendChild(W);
this.__Gn();

try{var X=window.eval(Y);
}catch(bh){qx.log.Logger.error(bh);
}
if(X!==undefined){qx.log.Logger.debug(X);
}},__Gr:function(e){this.__Gl.style.height=(this.__Gk.clientHeight-this.__Gk.firstChild.offsetHeight-this.__Gk.lastChild.offsetHeight)+c;
},__Gs:function(e){var bb=e.getKeyIdentifier();
if((bb==H)||(bb==p&&e.isCtrlPressed())){this.toggle();
e.preventDefault();
}if(!this.__Gk){return;
}if(!qx.dom.Hierarchy.contains(this.__Gk,e.getTarget())){return;
}if(bb==d&&this.__Gm.value!=k){this.execute();
this.__Gm.value=k;
}if(bb==i||bb==E){this.__Gq+=bb==i?-1:1;
this.__Gq=Math.min(Math.max(0,this.__Gq),this.__Gp.length);
var ba=this.__Gp[this.__Gq];
this.__Gm.value=ba||k;
this.__Gm.select();
}}},defer:function(bi){qx.event.Registration.addListener(document.documentElement,g,bi.__Gs,bi);
}});
})();
(function(){var b="CSS1Compat",a="qx.bom.client.Feature";
qx.Class.define(a,{statics:{STANDARD_MODE:false,QUIRKS_MODE:false,CONTENT_BOX:false,BORDER_BOX:false,SVG:false,CANVAS:!!window.CanvasRenderingContext2D,VML:false,XPATH:!!document.evaluate,AIR:navigator.userAgent.indexOf("adobeair")!==-1,GEARS:!!(window.google&&window.google.gears),SSL:window.location.protocol==="https:",ECMA_OBJECT_COUNT:(({}).__count__==0),CSS_POINTER_EVENTS:"pointerEvents" in document.documentElement.style,HTML5_CLASSLIST:(document.documentElement.classList&&qx.Bootstrap.getClass(document.documentElement.classList)==="DOMTokenList"),__gr:function(){this.QUIRKS_MODE=this.__gs();
this.STANDARD_MODE=!this.QUIRKS_MODE;
this.CONTENT_BOX=!qx.bom.client.Engine.MSHTML||this.STANDARD_MODE;
this.BORDER_BOX=!this.CONTENT_BOX;
this.SVG=document.implementation&&document.implementation.hasFeature&&(document.implementation.hasFeature("org.w3c.dom.svg","1.0")||document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1"));
this.VML=qx.bom.client.Engine.MSHTML;
},__gs:function(){if(qx.bom.client.Engine.MSHTML&&qx.bom.client.Engine.VERSION>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;
}else{return document.compatMode!==b;
}}},defer:function(c){c.__gr();
}});
})();
(function(){var h="/",g="mshtml",f="",e="qx.client",d="?",c="string",b="qx.util.ResourceManager",a="singleton";
qx.Class.define(b,{extend:qx.core.Object,type:a,statics:{__cr:qx.$$resources||{},__cs:{}},members:{has:function(l){return !!this.self(arguments).__cr[l];
},getData:function(i){return this.self(arguments).__cr[i]||null;
},getImageWidth:function(o){var p=this.self(arguments).__cr[o];
return p?p[0]:null;
},getImageHeight:function(m){var n=this.self(arguments).__cr[m];
return n?n[1]:null;
},getImageFormat:function(j){var k=this.self(arguments).__cr[j];
return k?k[2]:null;
},isClippedImage:function(w){var x=this.self(arguments).__cr[w];
return x&&x.length>4;
},toUri:function(y){if(y==null){return y;
}var z=this.self(arguments).__cr[y];

if(!z){return y;
}
if(typeof z===c){var B=z;
}else{var B=z[3];
if(!B){return y;
}}var A=f;

if(qx.core.Variant.isSet(e,g)&&qx.bom.client.Feature.SSL){A=this.self(arguments).__cs[B];
}return A+qx.$$libraries[B].resourceUri+h+y;
}},defer:function(q){if(qx.core.Variant.isSet(e,g)){if(qx.bom.client.Feature.SSL){for(var u in qx.$$libraries){var s;

if(qx.$$libraries[u].resourceUri){s=qx.$$libraries[u].resourceUri;
}else{q.__cs[u]=f;
continue;
}if(s.match(/^\/\//)!=null){q.__cs[u]=window.location.protocol;
}else if(s.match(/^\.\//)!=null){var r=document.URL;
q.__cs[u]=r.substring(0,r.lastIndexOf(h)+1);
}else if(s.match(/^http/)!=null){}else{var v=window.location.href.indexOf(d);
var t;

if(v==-1){t=window.location.href;
}else{t=window.location.href.substring(0,v);
}q.__cs[u]=t.substring(0,t.lastIndexOf(h)+1);
}}}}}});
})();
(function(){var l="qx.client",k="head",j="text/css",h="stylesheet",g="}",f='@import "',e="{",d='";',c="qx.bom.Stylesheet",b="link",a="style";
qx.Class.define(c,{statics:{includeFile:function(m,n){if(!n){n=document;
}var o=n.createElement(b);
o.type=j;
o.rel=h;
o.href=qx.util.ResourceManager.getInstance().toUri(m);
var p=n.getElementsByTagName(k)[0];
p.appendChild(o);
},createElement:qx.core.Variant.select(l,{"mshtml":function(ba){var bb=document.createStyleSheet();

if(ba){bb.cssText=ba;
}return bb;
},"default":function(N){var O=document.createElement(a);
O.type=j;

if(N){O.appendChild(document.createTextNode(N));
}document.getElementsByTagName(k)[0].appendChild(O);
return O.sheet;
}}),addRule:qx.core.Variant.select(l,{"mshtml":function(B,C,D){B.addRule(C,D);
},"default":function(u,v,w){u.insertRule(v+e+w+g,u.cssRules.length);
}}),removeRule:qx.core.Variant.select(l,{"mshtml":function(E,F){var G=E.rules;
var H=G.length;

for(var i=H-1;i>=0;--i){if(G[i].selectorText==F){E.removeRule(i);
}}},"default":function(V,W){var X=V.cssRules;
var Y=X.length;

for(var i=Y-1;i>=0;--i){if(X[i].selectorText==W){V.deleteRule(i);
}}}}),removeAllRules:qx.core.Variant.select(l,{"mshtml":function(bc){var bd=bc.rules;
var be=bd.length;

for(var i=be-1;i>=0;i--){bc.removeRule(i);
}},"default":function(S){var T=S.cssRules;
var U=T.length;

for(var i=U-1;i>=0;i--){S.deleteRule(i);
}}}),addImport:qx.core.Variant.select(l,{"mshtml":function(I,J){I.addImport(J);
},"default":function(bf,bg){bf.insertRule(f+bg+d,bf.cssRules.length);
}}),removeImport:qx.core.Variant.select(l,{"mshtml":function(q,r){var s=q.imports;
var t=s.length;

for(var i=t-1;i>=0;i--){if(s[i].href==r){q.removeImport(i);
}}},"default":function(x,y){var z=x.cssRules;
var A=z.length;

for(var i=A-1;i>=0;i--){if(z[i].href==y){x.deleteRule(i);
}}}}),removeAllImports:qx.core.Variant.select(l,{"mshtml":function(K){var L=K.imports;
var M=L.length;

for(var i=M-1;i>=0;i--){K.removeImport(i);
}},"default":function(P){var Q=P.cssRules;
var R=Q.length;

for(var i=R-1;i>=0;i--){if(Q[i].type==Q[i].IMPORT_RULE){P.deleteRule(i);
}}}})}});
})();
(function(){var l=": ",k="Summary: (",j="qx.dev.ObjectSummary",h="\n",g=" Objects)\n\n",f=")\r\n",e=" (",d=" Objects)\r\n\r\n",c=", ";
qx.Class.define(j,{statics:{getInfo:function(){var y={};
var F=0;
var z;
var B=qx.core.ObjectRegistry.getRegistry();

for(var C in B){z=B[C];

if(z&&z.isDisposed()===false){if(y[z.classname]==null){y[z.classname]=1;
}else{y[z.classname]++;
}F++;
}}var E=[];

for(var A in y){E.push({classname:A,number:y[A]});
}E.sort(function(a,b){return b.number-a.number;
});
var D=k+F+g;

for(var i=0;i<E.length;i++){D+=E[i].number+l+E[i].classname+h;
}return D;
},getNewObjects:function(){var n={};
var x=0;
var o;
var s=qx.core.ObjectRegistry.getRegistry();
var q={};
var w;

for(var t in s){o=s[t];

if(o&&o.__disposed===false){var r=o.classname;

if(n[r]==null){n[r]=1;
}else{n[r]++;
}w=q[r];

if(w==null){w=q[r]=new Array();
}w[w.length]=o.toHashCode();
x++;
}}
if(!this._m_dObjectList){this._m_dObjectList={};
}var m={};

for(var r in n){if(!(r in this._m_dObjectList)){this._m_dObjectList[r]=0;
}
if(this._m_dObjectList[r]>=0&&this._m_dObjectList[r]<n[r]){m[r]=n[r]-this._m_dObjectList[r];
}}this._m_dObjectList=n;
var v=[];

for(var p in m){v.push({classname:p,number:m[p],aHashCode:q[p]});
}v.sort(function(a,b){return b.number-a.number;
});
var u=k+x+d;

for(var i=0;i<v.length;i++){u+=v[i].number+l+v[i].classname+e+v[i].aHashCode.join(c)+f;
}return u;
}}});
})();
(function(){var cm="window",cl="",ck="childNodes",cj="nodeName",ci="nodeType",ch="document",cg="function",cf="firstChild",ce="qx.client",cd="external",bu="location",bt="[native code]",bs="lastChild",br="scrollY",bq="scrollWidth",bp="defaultView",bo="closed",bn="content",bm="qx",bl="</td><td>",ct="filters",cu="locationbar",cr="screenX",cs="previousSibling",cp="scrollX",cq="Global namespace is polluted by the following unknown objects:\n\n",cn="doctype",co="parent",cv="qx.dev.Pollution",cw="outerText",bS="applets",bR="parentElement",bU="designMode",bT="cookie",bW="fullScreen",bV="links",bY="pageXOffset",bX="frames",bQ="documentElement",bP="screenY",b="statusbar",c="history",d="sun",e="pkcs11",f="java",g="style",h="innerWidth",j="plugins",k="implementation",l="clientWidth",cA="compatMode",cz="length",cy="textContent",cx="controllers",cE="netscape",cD="self",cC="domConfig",cB="attributes",cG="clientHeight",cF="outerHeight",K="parentNode",L="innerHeight",I="title",J="ownerDocument",O="<table>",P="globalStorage",M="Global namespace is not polluted by any unknown objects.",N="toolbar",G="outerHTML",H="crypto",t="forms",s="scrollbars",v="frameElement",u="Components",p="body",o="clientInformation",r="offscreenBuffering",q="embeds",n="localName",m="scrollTop",U="isMultiLine",V="scrollLeft",W="images",X="event",Q="offsetHeight",R="scrollMaxY",S="sessionStorage",T="screen",Y="name",ba="offsetLeft",D="console",C="XMLHttpRequest",B="mshtml",A="nextSibling",z="innerText",y="menubar",x="scopeName",w="top",F="outerWidth",E=": ",bb="\n",bc="status",bd="contentEditable",be="anchors",bf="</table>",bg="<tr style='vertical-align:top'><td>",bh="scrollMaxX",bi="screenTop",bj="defaultStatus",bk="styleSheets",by="className",bx="personalbar",bw="</td></tr>",bv="currentStyle",bC="directories",bB="navigator",bA="pageYOffset",bz="screenLeft",bE="opener",bD="scrollHeight",bL="__firebug__",bM="Option",bJ="innerHTML",bK="tabIndex",bH="offsetTop",bI="[function]",bF="clipboardData",bG="Packages",bN="tagName",bO="offsetWidth",cb="mshtml|opera",ca="undefined",cc="Image";
qx.Class.define(cv,{statics:{names:{"window":window,"document":document,"body":document.body},ignore:{"window":[bm,f,d,bG,bL,u,cx,S,P,D,X,r,bF,o,bM,cc,cd,bi,bz,cz,cm,ch,bu,bB,cE,co,bX,w,s,Y,cp,br,cD,T,c,bn,y,N,cu,bx,b,bC,bo,H,e,bE,bc,bj,h,L,F,cF,cr,bP,bY,bA,bh,R,bW,v,C],"document":[cC,bu,cA,k,bp,I,p,bk,bQ,cj,ci,cf,bs,cn,W,bS,bV,t,be,bT,q,j,bU,ck],"body":[cy,bJ,G,z,cw,x,bR,bN,ct,bd,ch,bv,U,cG,l,bs,cf,bH,ba,bO,Q,bK,by,cB,cs,A,J,n,ck,K,ci,cj,g,m,V,bq,bD]},getInfo:function(cS){var cT=qx.dev.Pollution.getTextList(cS||cm);

if(cT){return cq+cT;
}else{return M;
}},extract:function(cM){var cO=[];
var cN=qx.dev.Pollution.ignore[cM];
if(qx.core.Variant.isSet(ce,B)){if(cM==cm){cN=cN.slice(0);

for(var cP=0;cP<window.length;cP++){cN.push(cl+cP);
}}}var cQ=qx.dev.Pollution.names[cM];

for(var cR in cQ){try{if(qx.core.Variant.isSet(ce,cb)){if(cM==cm&&cR==cd){continue;
}}if(typeof cQ[cR]==ca||cQ[cR]===null){continue;
}if(typeof cQ[cR]==cg&&cQ[cR].toString().indexOf(bt)!=-1){continue;
}if(typeof cQ[cR].constructor==cg){if((cQ[cR].constructor.toString().indexOf(bt)!=-1)||(cQ[cR].constructor.toString().indexOf(bI)!=-1)){continue;
}}if(qx.lang.Array.contains(cN,cR)){continue;
}}catch(a){continue;
}cO.push({"key":cR,"value":cQ[cR]});
}return cO;
},getHtmlTable:function(cU){var cW=[];
var cV=bg;
var cY=bl;
var da=bw;
cW.push(O);
var cX=this.extract(cU);

for(var i=0;i<cX.length;i++){cW.push(cV+cX[i].key+cY+cX[i].value+da);
}cW.push(bf);
return cW.join(cl);
},getTextList:function(cH){var cJ=[];
var cK=E;
var cL=bb;
var cI=this.extract(cH);

for(var i=0;i<cI.length;i++){cJ.push(cI[i].key+cK+cI[i].value+cL);
}return cJ.join(cl);
}}});
})();
(function(){var p="other",o="widgets",n="fonts",m="appearances",k="qx.Theme",j="]",h="[Theme ",g="colors",f="decorations",e="Theme",b="meta",d="borders",c="icons";
qx.Bootstrap.define(k,{statics:{define:function(name,M){if(!M){var M={};
}M.include=this.__qo(M.include);
M.patch=this.__qo(M.patch);
{};
var N={$$type:e,name:name,title:M.title,toString:this.genericToString};
if(M.extend){N.supertheme=M.extend;
}N.basename=qx.Bootstrap.createNamespace(name,N);
this.__qr(N,M);
this.__qp(N,M);
this.$$registry[name]=N;
for(var i=0,a=M.include,l=a.length;i<l;i++){this.include(N,a[i]);
}
for(var i=0,a=M.patch,l=a.length;i<l;i++){this.patch(N,a[i]);
}},__qo:function(w){if(!w){return [];
}
if(qx.Bootstrap.isArray(w)){return w;
}else{return [w];
}},__qp:function(O,P){var Q=P.aliases||{};

if(P.extend&&P.extend.aliases){qx.Bootstrap.objectMergeWith(Q,P.extend.aliases,false);
}O.aliases=Q;
},getAll:function(){return this.$$registry;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},genericToString:function(){return h+this.name+j;
},__qq:function(x){for(var i=0,y=this.__qs,l=y.length;i<l;i++){if(x[y[i]]){return y[i];
}}},__qr:function(z,A){var D=this.__qq(A);
if(A.extend&&!D){D=A.extend.type;
}z.type=D||p;
if(!D){return;
}var F=function(){};
if(A.extend){F.prototype=new A.extend.$$clazz;
}var E=F.prototype;
var C=A[D];
for(var B in C){E[B]=C[B];
if(E[B].base){{};
E[B].base=A.extend;
}}z.$$clazz=F;
z[D]=new F;
},$$registry:{},__qs:[g,d,f,n,c,o,m,b],__qt:null,__qu:null,__qv:function(){},patch:function(G,H){var J=this.__qq(H);

if(J!==this.__qq(G)){throw new Error("The mixins '"+G.name+"' are not compatible '"+H.name+"'!");
}var I=H[J];
var K=G.$$clazz.prototype;

for(var L in I){K[L]=I[L];
}},include:function(q,r){var t=r.type;

if(t!==q.type){throw new Error("The mixins '"+q.name+"' are not compatible '"+r.name+"'!");
}var s=r[t];
var u=q.$$clazz.prototype;

for(var v in s){if(u[v]!==undefined){continue;
}u[v]=s[v];
}}}});
})();
(function(){var j="white",i="black",h="#3E6CA8",g="#EBE9ED",f="#A7A6AA",e="#EEE",d="#F3F0F5",c="gray",b="#85878C",a="#888888",E="#3E5B97",D="#FFFFE1",C="#F3F8FD",B="#CBC8CD",A="#FFE0E0",z="#F4F4F4",y="#808080",x="#CCCCCC",w="#C82C2C",v="#DBEAF9",q="#BCCEE5",r="#A5BDDE",o="#7CA0CF",p="#F6F5F7",m="#FF9999",n="qx.theme.classic.Color",k="#990000",l="#F9F8E9",s="#DCDFE4",t="#FAFBFE",u="#AAAAAA";
qx.Theme.define(n,{colors:{"background":g,"background-light":d,"background-focused":C,"background-focused-inner":v,"background-disabled":z,"background-selected":h,"background-field":j,"background-pane":t,"background-invalid":A,"border-lead":a,"border-light":j,"border-light-shadow":s,"border-dark-shadow":f,"border-dark":b,"border-main":b,"border-focused-light":q,"border-focused-light-shadow":r,"border-focused-dark-shadow":o,"border-focused-dark":h,"border-separator":y,"invalid":k,"border-focused-invalid":m,"text":i,"text-disabled":f,"text-selected":j,"text-focused":E,"text-placeholder":B,"tooltip":D,"tooltip-text":i,"tooltip-invalid":w,"button":g,"button-hovered":p,"button-abandoned":l,"button-checked":d,"window-active-caption-text":[255,255,255],"window-inactive-caption-text":[255,255,255],"window-active-caption":[51,94,168],"window-inactive-caption":[111,161,217],"date-chooser":j,"date-chooser-title":[116,116,116],"date-chooser-selected":[52,52,52],"effect":[254,200,60],"table-pane":j,"table-header":[242,242,242],"table-header-border":[214,213,217],"table-header-cell":[235,234,219],"table-header-cell-hover":[255,255,255],"table-focus-indicator":[179,217,255],"table-row-background-focused-selected":[90,138,211],"table-row-background-focused":[221,238,255],"table-row-background-selected":[51,94,168],"table-row-background-even":[250,248,243],"table-row-background-odd":[255,255,255],"table-row-selected":[255,255,255],"table-row":[0,0,0],"table-row-line":e,"table-column-line":e,"progressive-table-header":u,"progressive-table-row-background-even":[250,248,243],"progressive-table-row-background-odd":[255,255,255],"progressive-progressbar-background":c,"progressive-progressbar-indicator-done":x,"progressive-progressbar-indicator-undone":j,"progressive-progressbar-percent-background":c,"progressive-progressbar-percent-text":j}});
})();
(function(){var d="qx.ui.decoration.IDecorator";
qx.Interface.define(d,{members:{getMarkup:function(){},resize:function(a,b,c){},tint:function(e,f){},getInsets:function(){}}});
})();
(function(){var i="Number",h="_applyInsets",g="abstract",f="insetRight",e="insetTop",d="insetBottom",c="qx.ui.decoration.Abstract",b="shorthand",a="insetLeft";
qx.Class.define(c,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],type:g,properties:{insetLeft:{check:i,nullable:true,apply:h},insetRight:{check:i,nullable:true,apply:h},insetBottom:{check:i,nullable:true,apply:h},insetTop:{check:i,nullable:true,apply:h},insets:{group:[e,f,d,a],mode:b}},members:{__na:null,_getDefaultInsets:function(){throw new Error("Abstract method called.");
},_isInitialized:function(){throw new Error("Abstract method called.");
},_resetInsets:function(){this.__na=null;
},getInsets:function(){if(this.__na){return this.__na;
}var j=this._getDefaultInsets();
return this.__na={left:this.getInsetLeft()==null?j.left:this.getInsetLeft(),right:this.getInsetRight()==null?j.right:this.getInsetRight(),bottom:this.getInsetBottom()==null?j.bottom:this.getInsetBottom(),top:this.getInsetTop()==null?j.top:this.getInsetTop()};
},_applyInsets:function(){{};
this.__na=null;
}},destruct:function(){this.__na=null;
}});
})();
(function(){var q="_applyBackground",p="repeat",o="mshtml",n="backgroundPositionX",m="",l="backgroundPositionY",k="no-repeat",j="scale",i=" ",h="repeat-x",c="qx.client",g="repeat-y",f="hidden",b="qx.ui.decoration.MBackgroundImage",a="String",e='"></div>',d='<div style="';
qx.Mixin.define(b,{properties:{backgroundImage:{check:a,nullable:true,apply:q},backgroundRepeat:{check:[p,h,g,k,j],init:p,apply:q},backgroundPositionX:{nullable:true,apply:q},backgroundPositionY:{nullable:true,apply:q},backgroundPosition:{group:[l,n]}},members:{_generateBackgroundMarkup:function(r){var v=m;
var u=this.getBackgroundImage();
var t=this.getBackgroundRepeat();
var top=this.getBackgroundPositionY();

if(top==null){top=0;
}var w=this.getBackgroundPositionX();

if(w==null){w=0;
}r.backgroundPosition=w+i+top;
if(u){var s=qx.util.AliasManager.getInstance().resolve(u);
v=qx.bom.element.Decoration.create(s,t,r);
}else{if(r){if(qx.core.Variant.isSet(c,o)){if(qx.bom.client.Engine.VERSION<7||qx.bom.client.Feature.QUIRKS_MODE){r.overflow=f;
}}v=d+qx.bom.element.Style.compile(r)+e;
}}return v;
},_applyBackground:function(){{};
}}});
})();
(function(){var s="_applyStyle",r="",q="Color",p="px",o="solid",n="dotted",m="double",l="dashed",k="_applyWidth",j="qx.ui.decoration.Uniform",g="px ",i=" ",h="scale",f="PositiveInteger",e="absolute";
qx.Class.define(j,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(C,D,E){qx.ui.decoration.Abstract.call(this);
if(C!=null){this.setWidth(C);
}
if(D!=null){this.setStyle(D);
}
if(E!=null){this.setColor(E);
}},properties:{width:{check:f,init:0,apply:k},style:{nullable:true,check:[o,n,l,m],init:o,apply:s},color:{nullable:true,check:q,apply:s},backgroundColor:{check:q,nullable:true,apply:s}},members:{__qT:null,_getDefaultInsets:function(){var w=this.getWidth();
return {top:w,right:w,bottom:w,left:w};
},_isInitialized:function(){return !!this.__qT;
},getMarkup:function(){if(this.__qT){return this.__qT;
}var a={position:e,top:0,left:0};
var b=this.getWidth();
{};
var d=qx.theme.manager.Color.getInstance();
a.border=b+g+this.getStyle()+i+(d.resolve(this.getColor())||r);
var c=this._generateBackgroundMarkup(a);
return this.__qT=c;
},resize:function(x,y,z){var B=this.getBackgroundImage()&&this.getBackgroundRepeat()==h;

if(B||qx.bom.client.Feature.CONTENT_BOX){var A=this.getWidth()*2;
y-=A;
z-=A;
if(y<0){y=0;
}
if(z<0){z=0;
}}x.style.width=y+p;
x.style.height=z+p;
},tint:function(t,u){var v=qx.theme.manager.Color.getInstance();

if(u==null){u=this.getBackgroundColor();
}t.style.backgroundColor=v.resolve(u)||r;
},_applyWidth:function(){{};
this._resetInsets();
},_applyStyle:function(){{};
}},destruct:function(){this.__qT=null;
}});
})();
(function(){var j="_applyStyle",i="solid",h="Color",g="",f="double",e="px ",d="dotted",c="_applyWidth",b="dashed",a="Number",F=" ",E="shorthand",D="px",C="widthTop",B="styleRight",A="styleLeft",z="widthLeft",y="widthBottom",x="styleTop",w="colorBottom",q="styleBottom",r="widthRight",o="colorLeft",p="colorRight",m="colorTop",n="scale",k="border-top",l="border-left",s="border-right",t="qx.ui.decoration.Single",v="border-bottom",u="absolute";
qx.Class.define(t,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(T,U,V){qx.ui.decoration.Abstract.call(this);
if(T!=null){this.setWidth(T);
}
if(U!=null){this.setStyle(U);
}
if(V!=null){this.setColor(V);
}},properties:{widthTop:{check:a,init:0,apply:c},widthRight:{check:a,init:0,apply:c},widthBottom:{check:a,init:0,apply:c},widthLeft:{check:a,init:0,apply:c},styleTop:{nullable:true,check:[i,d,b,f],init:i,apply:j},styleRight:{nullable:true,check:[i,d,b,f],init:i,apply:j},styleBottom:{nullable:true,check:[i,d,b,f],init:i,apply:j},styleLeft:{nullable:true,check:[i,d,b,f],init:i,apply:j},colorTop:{nullable:true,check:h,apply:j},colorRight:{nullable:true,check:h,apply:j},colorBottom:{nullable:true,check:h,apply:j},colorLeft:{nullable:true,check:h,apply:j},backgroundColor:{check:h,nullable:true,apply:j},left:{group:[z,A,o]},right:{group:[r,B,p]},top:{group:[C,x,m]},bottom:{group:[y,q,w]},width:{group:[C,r,y,z],mode:E},style:{group:[x,B,q,A],mode:E},color:{group:[m,p,w,o],mode:E}},members:{__pb:null,_getDefaultInsets:function(){return {top:this.getWidthTop(),right:this.getWidthRight(),bottom:this.getWidthBottom(),left:this.getWidthLeft()};
},_isInitialized:function(){return !!this.__pb;
},getMarkup:function(O){if(this.__pb){return this.__pb;
}var P=qx.theme.manager.Color.getInstance();
var Q={};
var S=this.getWidthTop();

if(S>0){Q[k]=S+e+this.getStyleTop()+F+(P.resolve(this.getColorTop())||g);
}var S=this.getWidthRight();

if(S>0){Q[s]=S+e+this.getStyleRight()+F+(P.resolve(this.getColorRight())||g);
}var S=this.getWidthBottom();

if(S>0){Q[v]=S+e+this.getStyleBottom()+F+(P.resolve(this.getColorBottom())||g);
}var S=this.getWidthLeft();

if(S>0){Q[l]=S+e+this.getStyleLeft()+F+(P.resolve(this.getColorLeft())||g);
}{};
Q.position=u;
Q.top=0;
Q.left=0;
var R=this._generateBackgroundMarkup(Q);
return this.__pb=R;
},resize:function(J,K,L){var N=this.getBackgroundImage()&&this.getBackgroundRepeat()==n;

if(N||qx.bom.client.Feature.CONTENT_BOX){var M=this.getInsets();
K-=M.left+M.right;
L-=M.top+M.bottom;
if(K<0){K=0;
}
if(L<0){L=0;
}}J.style.width=K+D;
J.style.height=L+D;
},tint:function(G,H){var I=qx.theme.manager.Color.getInstance();

if(H==null){H=this.getBackgroundColor();
}G.style.backgroundColor=I.resolve(H)||g;
},_applyWidth:function(){{};
this._resetInsets();
},_applyStyle:function(){{};
}},destruct:function(){this.__pb=null;
}});
})();
(function(){var j="px ",i=" ",h="Color",g="Number",f=";",e="px",d="shorthand",c="innerWidthRight",b="border-left:",a='<div style="position:absolute;top:0;left:0;',E="innerColorBottom",D='</div>',C='',B="scale",A="border-top",z="innerWidthTop",y="border-left",x="innerColorRight",w="innerColorTop",v="relative",q="border-top:",r="qx.ui.decoration.Double",o="border-right:",p='line-height:0;',m="innerColorLeft",n="border-bottom",k='">',l="innerWidthBottom",s="innerWidthLeft",t="border-bottom:",u="border-right";
qx.Class.define(r,{extend:qx.ui.decoration.Single,construct:function(F,G,H,innerWidth,I){qx.ui.decoration.Single.call(this,F,G,H,innerWidth,I);
if(innerWidth!=null){this.setInnerWidth(innerWidth);
}
if(I!=null){this.setInnerColor(I);
}},properties:{innerWidthTop:{check:g,init:0},innerWidthRight:{check:g,init:0},innerWidthBottom:{check:g,init:0},innerWidthLeft:{check:g,init:0},innerWidth:{group:[z,c,l,s],mode:d},innerColorTop:{nullable:true,check:h},innerColorRight:{nullable:true,check:h},innerColorBottom:{nullable:true,check:h},innerColorLeft:{nullable:true,check:h},innerColor:{group:[w,x,E,m],mode:d}},members:{__wF:null,_getDefaultInsets:function(){return {top:this.getWidthTop()+this.getInnerWidthTop(),right:this.getWidthRight()+this.getInnerWidthRight(),bottom:this.getWidthBottom()+this.getInnerWidthBottom(),left:this.getWidthLeft()+this.getInnerWidthLeft()};
},_isInitialized:function(){return !!this.__wF;
},getMarkup:function(){if(this.__wF){return this.__wF;
}var O=qx.theme.manager.Color.getInstance();
var R={position:v};
var P=this.getInnerWidthTop();

if(P>0){R[A]=P+j+this.getStyleTop()+i+O.resolve(this.getInnerColorTop());
}var P=this.getInnerWidthRight();

if(P>0){R[u]=P+j+this.getStyleRight()+i+O.resolve(this.getInnerColorRight());
}var P=this.getInnerWidthBottom();

if(P>0){R[n]=P+j+this.getStyleBottom()+i+O.resolve(this.getInnerColorBottom());
}var P=this.getInnerWidthLeft();

if(P>0){R[y]=P+j+this.getStyleLeft()+i+O.resolve(this.getInnerColorLeft());
}{};
var S=this._generateBackgroundMarkup(R);
var Q=p;
if((qx.bom.client.Engine.MSHTML&&qx.bom.client.Engine.VERSION<8)||(qx.bom.client.Engine.MSHTML&&qx.bom.client.Engine.DOCUMENT_MODE<8)){Q=C;
}var P=this.getWidthTop();

if(P>0){Q+=q+P+j+this.getStyleTop()+i+O.resolve(this.getColorTop())+f;
}var P=this.getWidthRight();

if(P>0){Q+=o+P+j+this.getStyleRight()+i+O.resolve(this.getColorRight())+f;
}var P=this.getWidthBottom();

if(P>0){Q+=t+P+j+this.getStyleBottom()+i+O.resolve(this.getColorBottom())+f;
}var P=this.getWidthLeft();

if(P>0){Q+=b+P+j+this.getStyleLeft()+i+O.resolve(this.getColorLeft())+f;
}{};
return this.__wF=a+Q+k+S+D;
},resize:function(J,K,L){var N=this.getBackgroundImage()&&this.getBackgroundRepeat()==B;

if(N||qx.bom.client.Feature.CONTENT_BOX){var M=this.getInsets();
var innerWidth=K-M.left-M.right;
var innerHeight=L-M.top-M.bottom;
}else{var innerWidth=K-this.getWidthLeft()-this.getWidthRight();
var innerHeight=L-this.getWidthTop()-this.getWidthBottom();
}if(innerWidth<0){innerWidth=0;
}
if(innerHeight<0){innerHeight=0;
}J.firstChild.style.width=innerWidth+e;
J.firstChild.style.height=innerHeight+e;
}},destruct:function(){this.__wF=null;
}});
})();
(function(){var p="Number",o="_applyInsets",n="-l",m="insetRight",l="insetTop",k="_applyBaseImage",j="insetBottom",i="set",h="shorthand",g="-t",d="insetLeft",f="String",e="qx.ui.decoration.Grid";
qx.Class.define(e,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],construct:function(F,G){qx.core.Object.call(this);

if(qx.ui.decoration.css3.BorderImage.IS_SUPPORTED){this.__mN=new qx.ui.decoration.css3.BorderImage();

if(F){this.__mO(F);
}}else{this.__mN=new qx.ui.decoration.GridDiv(F);
}
if(G!=null){this.__mN.setInsets(G);
}},properties:{baseImage:{check:f,nullable:true,apply:k},insetLeft:{check:p,nullable:true,apply:o},insetRight:{check:p,nullable:true,apply:o},insetBottom:{check:p,nullable:true,apply:o},insetTop:{check:p,nullable:true,apply:o},insets:{group:[l,m,j,d],mode:h}},members:{__mN:null,getMarkup:function(){return this.__mN.getMarkup();
},resize:function(q,r,s){this.__mN.resize(q,r,s);
},tint:function(t,u){},getInsets:function(){return this.__mN.getInsets();
},_applyInsets:function(a,b,name){var c=i+qx.lang.String.firstUp(name);
this.__mN[c](a);
},_applyBaseImage:function(D,E){if(this.__mN instanceof qx.ui.decoration.GridDiv){this.__mN.setBaseImage(D);
}else{this.__mO(D);
}},__mO:function(v){this.__mN.setBorderImage(v);
var z=qx.util.AliasManager.getInstance().resolve(v);
var A=/(.*)(\.[a-z]+)$/.exec(z);
var x=A[1];
var y=A[2];
var w=qx.util.ResourceManager.getInstance();
var B=w.getImageHeight(x+g+y);
var C=w.getImageWidth(x+n+y);
this.__mN.setSlice([B,C]);
}},destruct:function(){this.__mN=null;
}});
})();
(function(){var j="_applyStyle",i='"></div>',h="Color",g="1px",f='<div style="',e='border:',d="1px solid ",c="",b=";",a="px",v='</div>',u="qx.ui.decoration.Beveled",t='<div style="position:absolute;top:1px;left:1px;',s='border-bottom:',r='border-right:',q='border-left:',p='border-top:',o="Number",n='<div style="position:absolute;top:1px;left:0px;',m='position:absolute;top:0px;left:1px;',k='<div style="overflow:hidden;font-size:0;line-height:0;">',l="absolute";
qx.Class.define(u,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(P,Q,R){qx.ui.decoration.Abstract.call(this);
if(P!=null){this.setOuterColor(P);
}
if(Q!=null){this.setInnerColor(Q);
}
if(R!=null){this.setInnerOpacity(R);
}},properties:{innerColor:{check:h,nullable:true,apply:j},innerOpacity:{check:o,init:1,apply:j},outerColor:{check:h,nullable:true,apply:j},backgroundColor:{check:h,nullable:true,apply:j}},members:{__qC:null,_getDefaultInsets:function(){return {top:2,right:2,bottom:2,left:2};
},_isInitialized:function(){return !!this.__qC;
},_applyStyle:function(){{};
},getMarkup:function(){if(this.__qC){return this.__qC;
}var w=qx.theme.manager.Color.getInstance();
var x=[];
var A=d+w.resolve(this.getOuterColor())+b;
var z=d+w.resolve(this.getInnerColor())+b;
x.push(k);
x.push(f);
x.push(e,A);
x.push(qx.bom.element.Opacity.compile(0.35));
x.push(i);
x.push(n);
x.push(q,A);
x.push(r,A);
x.push(i);
x.push(f);
x.push(m);
x.push(p,A);
x.push(s,A);
x.push(i);
var y={position:l,top:g,left:g};
x.push(this._generateBackgroundMarkup(y));
x.push(t);
x.push(e,z);
x.push(qx.bom.element.Opacity.compile(this.getInnerOpacity()));
x.push(i);
x.push(v);
return this.__qC=x.join(c);
},resize:function(B,C,D){if(C<4){C=4;
}
if(D<4){D=4;
}if(qx.bom.client.Feature.CONTENT_BOX){var outerWidth=C-2;
var outerHeight=D-2;
var J=outerWidth;
var I=outerHeight;
var innerWidth=C-4;
var innerHeight=D-4;
}else{var outerWidth=C;
var outerHeight=D;
var J=C-2;
var I=D-2;
var innerWidth=J;
var innerHeight=I;
}var L=a;
var H=B.childNodes[0].style;
H.width=outerWidth+L;
H.height=outerHeight+L;
var G=B.childNodes[1].style;
G.width=outerWidth+L;
G.height=I+L;
var F=B.childNodes[2].style;
F.width=J+L;
F.height=outerHeight+L;
var E=B.childNodes[3].style;
E.width=J+L;
E.height=I+L;
var K=B.childNodes[4].style;
K.width=innerWidth+L;
K.height=innerHeight+L;
},tint:function(M,N){var O=qx.theme.manager.Color.getInstance();

if(N==null){N=this.getBackgroundColor();
}M.childNodes[3].style.backgroundColor=O.resolve(N)||c;
}},destruct:function(){this.__qC=null;
}});
})();
(function(){var j="border-dark-shadow",i="border-light",h="border-dark",g="border-light-shadow",f="solid",e="gray",d="border-focused-light",c="border-focused-dark",b="border-focused-light-shadow",a="border-focused-dark-shadow",y="table-header-border",x="dotted",w="border-separator",v="tooltip-text",u="invalid",t="white",s="decoration/shadow/shadow.png",r="black",q="effect",p="table-focus-indicator",n="border-focused-invalid",o="qx/decoration/Classic",l="border-lead",m="decoration/shadow/shadow-small.png",k="qx.theme.classic.Decoration";
qx.Theme.define(k,{aliases:{decoration:o},decorations:{"main":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:h}},"keyboard-focus":{decorator:qx.ui.decoration.Single,style:{width:1,color:r,style:x}},"inset":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[j,i,i,j],innerColor:[h,g,g,h]}},"outset":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[g,h,h,g],innerColor:[i,j,j,i]}},"groove":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[j,i,i,j],innerColor:[i,j,j,i]}},"ridge":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[i,j,j,i],innerColor:[j,i,i,j]}},"inset-thin":{decorator:qx.ui.decoration.Single,style:{width:1,color:[j,i,i,j]}},"outset-thin":{decorator:qx.ui.decoration.Single,style:{width:1,color:[i,j,j,i]}},"focused-inset":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[a,d,d,a],innerColor:[c,b,b,c]}},"focused-outset":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[b,c,c,b],innerColor:[d,a,a,d]}},"border-invalid":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[j,i,i,j],innerColor:u}},"separator-horizontal":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:w}},"separator-vertical":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:w}},"shadow":{decorator:qx.ui.decoration.Grid,style:{baseImage:s,insets:[4,8,8,4]}},"shadow-window":{decorator:qx.ui.decoration.Grid,style:{baseImage:s,insets:[4,8,8,4]}},"shadow-small":{decorator:qx.ui.decoration.Grid,style:{baseImage:m,insets:[0,3,3,0]}},"checkbox-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:u,innerColor:n,insets:[0]}},"lead-item":{decorator:qx.ui.decoration.Uniform,style:{width:1,style:x,color:l}},"tooltip":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:v}},"tooltip-error":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:v}},"toolbar-separator":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:j}},"toolbar-part-handle":{decorator:qx.ui.decoration.Single,style:{width:1,style:f,colorTop:t,colorLeft:t,colorRight:j,colorBottom:j}},"menu-separator":{decorator:qx.ui.decoration.Single,style:{widthTop:1,widthBottom:1,colorTop:h,colorBottom:i}},"datechooser-date-pane":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:e,style:f}},"datechooser-weekday":{decorator:qx.ui.decoration.Single,style:{widthBottom:1,colorBottom:e,style:f}},"datechooser-week":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:e,style:f}},"datechooser-week-header":{decorator:qx.ui.decoration.Single,style:{widthBottom:1,colorBottom:e,widthRight:1,colorRight:e,style:f}},"tabview-page-button-top":{decorator:qx.ui.decoration.Double,style:{width:1,color:[g,h,h,g],innerWidth:1,innerColor:[i,j,j,i],widthBottom:0,innerWidthBottom:0}},"tabview-page-button-bottom":{decorator:qx.ui.decoration.Double,style:{width:1,color:[g,h,h,g],innerWidth:1,innerColor:[i,j,j,i],widthTop:0,innerWidthTop:0}},"tabview-page-button-left":{decorator:qx.ui.decoration.Double,style:{width:1,color:[g,h,h,g],innerWidth:1,innerColor:[i,j,j,i],widthRight:0,innerWidthRight:0}},"tabview-page-button-right":{decorator:qx.ui.decoration.Double,style:{width:1,color:[g,h,h,g],innerWidth:1,innerColor:[i,j,j,i],widthLeft:0,innerWidthLeft:0}},"table-statusbar":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:j,styleTop:f}},"table-scroller-header":{decorator:qx.ui.decoration.Single,style:{widthBottom:1,colorBottom:y,styleBottom:f}},"table-scroller-focus-indicator":{decorator:qx.ui.decoration.Single,style:{width:2,color:p,style:f}},"table-header-cell":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:y,styleRight:f}},"table-header-cell-hovered":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:y,styleRight:f,widthBottom:2,colorBottom:q,styleBottom:f}}}});
})();
(function(){var i="Liberation Sans",h="Verdana",g="Bitstream Vera Sans",f="Lucida Grande",e="Tahoma",d="monospace",c="qx.theme.classic.Font",b="Courier New",a="DejaVu Sans Mono";
qx.Theme.define(c,{fonts:{"default":{size:11,lineHeight:1.4,family:[f,e,h,g,i]},"bold":{size:11,lineHeight:1.4,family:[f,e,h,g,i],bold:true},"small":{size:10,lineHeight:1.4,family:[f,e,h,g,i]},"monospace":{size:11,lineHeight:1.4,family:[a,b,d]}}});
})();
(function(){var dl="button",dk="widget",dj="background",di="atom",dh="inset-thin",dg="outset",df="text-disabled",de="text-selected",dd="inset",dc="image",cf="groupbox",ce="cell",cd="focused-inset",cc="tooltip",cb="menu-button",ca="middle",bY="decoration/arrows/down.gif",bX="spinner",bW="background-selected",bV="list",dt="button-hovered",du="checkbox",dr="toolbar-button",ds="button-frame",dp="popup",dq="textfield",dm="label",dn="background-invalid",dv="background-disabled",dw="bold",cK="white",cJ="shadow-small",cM="invalid",cL="scrollbar",cO="center",cN="datechooser/button",cQ="button-abandoned",cP="background-light",cI="main",cH="date-chooser",w="date-chooser-title",x="radiobutton",y="default",z="combobox",A="background-field",B="outset-thin",C="menu-slidebar-button",D="scrollbar/button",E="combobox/button",F="table-header-cell",dK="decoration/arrows/right.gif",dJ="decoration/arrows/up.gif",dI="text",dH="decoration/arrows/down-small.gif",dO="icon/16/places/folder.png",dN="tree-folder",dM="slidebar/button-forward",dL="icon/16/mimetypes/text-plain.png",dQ="right-top",dP="button-checked",bs=".png",bt="background-focused",bq="datechooser",br="slidebar/button-backward",bw="selectbox",bx="treevirtual-folder",bu="decoration/form/",bv="decoration/tree/minus.gif",bo="",bp="decoration/tree/plus.gif",X="-invalid",W="decoration/arrows/left.gif",ba="icon/16/places/folder-open.png",Y="table-row-background-even",T="decoration/treevirtual/cross_minus.gif",S="radiobutton-hovered",V="keyboard-focus",U="decoration/treevirtual/start_plus.gif",R="decoration/cursors/",Q="icon/16/actions/dialog-ok.png",bC="slidebar",bD="table-scroller-focus-indicator",bE="move-frame",bF="nodrop",by="tabview-page-button-left",bz="decoration/arrows/up-small.gif",bA="move",bB="radiobutton-checked-focused",bG="qx.theme.classic.Appearance",bH="decoration/menu/checkbox.gif",bj="tooltip-error",bi="right",bh="decoration/arrows/rewind.gif",bg="table-scroller-header",bf="table-pane",be="focused-outset",bd="checkbox-hovered",bc="icon/16/actions/dialog-cancel.png",bn="menu-slidebar",bm="datechooser-date-pane",bI="background-pane",bJ="decoration/treevirtual/cross_plus.gif",bK="qx/icon/Oxygen/16/actions/window-close.png",bL="datechooser-week",bM="icon/16/apps/office-calendar.png",bN="datechooser-weekday",bO="table-header-border",bP="table-header-cell-hover",bQ="window-active-caption-text",bR="window-active-caption",cm="icon",cl="checkbox-checked-focused",ck="toolbar-separator",cj="groove",cq="checkbox-pressed",cp="tooltip-invalid",co="decoration/window/restore.gif",cn="decoration/menu/checkbox-invert.gif",ct="scrollarea",cs="window-inactive-caption-text",cD="best-fit",cE="up.gif",cB="keep-align",cC="tabview-page-button-right",cz="tabview-page-button-top",cA="tabview-page-button-bottom",cx="row-layer",cy="decoration/menu/radiobutton.gif",cF="decoration/arrows/",cG="decoration/table/descending.png",cU="tooltip-text",cT="checkbox-checked-hovered",cW="left.gif",cV="decoration/arrows/up-invert.gif",cY="alias",cX="checkbox-checked-disabled",db="decoration/arrows/right-invert.gif",da="radiobutton-checked-disabled",cS="lead-item",cR="checkbox-focused",dD="border-dark",dE="decoration/treevirtual/end_plus.gif",dF="decoration/treevirtual/start_minus.gif",dG="radiobutton-checked-hovered",dz="decoration/window/minimize.gif",dA="checkbox-checked",dB="table-header-cell-hovered",dC="down.gif",dx="decoration/treevirtual/end.gif",dy="decoration/treevirtual/end_minus.gif",v="window-inactive-caption",u="decoration/menu/radiobutton-invert.gif",t="text-placeholder",s="slider",r="decoration/table/select-column-order.png",q="decoration/arrows/next.gif",p="table-header",o="decoration/treevirtual/only_minus.gif",n="datechooser-week-header",m="decoration/window/maximize.gif",I="decoration/treevirtual/only_plus.gif",J="checkbox-checked-pressed",G="decoration/arrows/down-invert.gif",H="menu-separator",M="decoration/splitpane/knob-vertical.png",N=".gif",K="decoration/arrows/forward.gif",L="radiobutton-checked-pressed",O="table-statusbar",P="radiobutton-pressed",cu="copy",cr="table-row-background-selected",cw="radiobutton-focused",cv="decoration/splitpane/knob-horizontal.png",ch="right.gif",cg="radiobutton-checked",bb="decoration/treevirtual/cross.gif",ci="decoration/table/ascending.png",bl="decoration/treevirtual/line.gif",bk="date-chooser-selected",bS="toolbar-part-handle",bT="decoration/window/close.gif",bU="icon/16/actions/view-refresh.png";
qx.Theme.define(bG,{appearances:{"widget":{},"label":{style:function(gS){return {textColor:gS.disabled?df:undefined};
}},"image":{style:function(gs){return {opacity:!gs.replacement&&gs.disabled?0.3:undefined};
}},"atom":{},"atom/label":dm,"atom/icon":dc,"root":{style:function(d){return {backgroundColor:dj,textColor:dI,font:y};
}},"popup":{style:function(ft){return {decorator:cI,backgroundColor:bI,shadow:cJ};
}},"tooltip":{include:dp,style:function(gO){return {backgroundColor:cc,textColor:cU,decorator:cc,shadow:cJ,padding:[1,3,2,3],offset:[15,5,5,5]};
}},"tooltip/atom":di,"tooltip-error":{include:cc,style:function(ef){return {textColor:de,showTimeout:100,hideTimeout:10000,decorator:bj,font:dw,backgroundColor:cp};
}},"tooltip-error/atom":di,"iframe":{style:function(ea){return {backgroundColor:cK,decorator:dd};
}},"move-frame":{style:function(dV){return {decorator:cI};
}},"resize-frame":bE,"dragdrop-cursor":{style:function(fn){var fo=bF;

if(fn.copy){fo=cu;
}else if(fn.move){fo=bA;
}else if(fn.alias){fo=cY;
}return {source:R+fo+N,position:dQ,offset:[2,16,2,6]};
}},"button-frame":{alias:di,style:function(j){if(j.pressed||j.abandoned||j.checked){var l=!j.inner&&j.focused?cd:dd;
var k=[4,3,2,5];
}else{var l=!j.inner&&j.focused?be:dg;
var k=[3,4];
}return {backgroundColor:j.abandoned?cQ:j.hovered?dt:j.checked?dP:dl,decorator:l,padding:k};
}},"button":{alias:ds,include:ds,style:function(ec){return {center:true};
}},"hover-button":{alias:di,include:di,style:function(et){return {backgroundColor:et.hovered?bW:undefined,textColor:et.hovered?de:undefined};
}},"splitbutton":{},"splitbutton/button":dl,"splitbutton/arrow":{alias:dl,include:dl,style:function(ek){return {icon:bY};
}},"scrollarea/corner":{style:function(){return {backgroundColor:dj};
}},"scrollarea":dk,"scrollarea/pane":dk,"scrollarea/scrollbar-x":cL,"scrollarea/scrollbar-y":cL,"list":{alias:ct,style:function(fy){var fC;
var fA=!!fy.focused;
var fB=!!fy.invalid;
var fz=!!fy.disabled;

if(fB&&!fz){fC=dn;
}else if(fA&&!fB&&!fz){fC=bt;
}else if(fz){fC=dv;
}else{fC=cK;
}return {decorator:fy.focused?cd:dd,backgroundColor:fC};
}},"listitem":{alias:di,style:function(eo){return {gap:4,padding:eo.lead?[2,4]:[3,5],backgroundColor:eo.selected?bW:undefined,textColor:eo.selected?de:undefined,decorator:eo.lead?cS:undefined};
}},"textfield":{style:function(fc){var fh;
var ff=!!fc.focused;
var fg=!!fc.invalid;
var fd=!!fc.disabled;

if(fg&&!fd){fh=dn;
}else if(ff&&!fg&&!fd){fh=bt;
}else if(fd){fh=dv;
}else{fh=A;
}var fe;

if(fc.disabled){fe=df;
}else if(fc.showingPlaceholder){fe=t;
}else{fe=undefined;
}return {decorator:fc.focused?cd:dd,padding:[2,3],textColor:fe,backgroundColor:fh};
}},"textarea":dq,"checkbox":{alias:di,style:function(fk){var fm;

if(fk.checked&&fk.focused){fm=cl;
}else if(fk.checked&&fk.disabled){fm=cX;
}else if(fk.checked&&fk.pressed){fm=J;
}else if(fk.checked&&fk.hovered){fm=cT;
}else if(fk.checked){fm=dA;
}else if(fk.focused){fm=cR;
}else if(fk.pressed){fm=cq;
}else if(fk.hovered){fm=bd;
}else{fm=du;
}var fl=fk.invalid&&!fk.disabled?X:bo;
return {icon:bu+fm+fl+bs,gap:6};
}},"radiobutton":{alias:du,include:du,style:function(fS){var fU;

if(fS.checked&&fS.focused){fU=bB;
}else if(fS.checked&&fS.disabled){fU=da;
}else if(fS.checked&&fS.pressed){fU=L;
}else if(fS.checked&&fS.hovered){fU=dG;
}else if(fS.checked){fU=cg;
}else if(fS.focused){fU=cw;
}else if(fS.pressed){fU=P;
}else if(fS.hovered){fU=S;
}else{fU=x;
}var fT=fS.invalid&&!fS.disabled?X:bo;
return {icon:bu+fU+fT+bs,shadow:undefined};
}},"spinner":{style:function(gm){return {decorator:gm.focused?cd:dd,textColor:gm.disabled?df:undefined};
}},"spinner/textfield":{include:dq,style:function(fr){return {decorator:undefined,padding:[2,3]};
}},"spinner/upbutton":{alias:dl,include:dl,style:function(dX){return {icon:bz,padding:dX.pressed?[2,2,0,4]:[1,3,1,3],backgroundColor:dX.hovered?dt:dl};
}},"spinner/downbutton":{alias:dl,include:dl,style:function(ei){return {icon:dH,padding:ei.pressed?[2,2,0,4]:[1,3,1,3],backgroundColor:ei.hovered?dt:dl};
}},"datefield":z,"datefield/button":{alias:E,include:E,style:function(fW){return {icon:bM,padding:[0,3],backgroundColor:undefined,decorator:undefined};
}},"datefield/list":{alias:bq,include:bq,style:function(gx){return {decorator:gx.focused?cd:dd};
}},"groupbox":{style:function(ep){return {backgroundColor:dj};
}},"groupbox/legend":{alias:di,style:function(hd){return {backgroundColor:dj,textColor:hd.invalid?cM:undefined,paddingRight:4,paddingLeft:4,marginRight:10,marginLeft:10};
}},"groupbox/frame":{style:function(fK){return {padding:[12,9],decorator:cj};
}},"check-groupbox":cf,"check-groupbox/legend":{alias:du,include:du,style:function(gf){return {backgroundColor:dj,textColor:gf.invalid?cM:undefined,paddingRight:3,paddingLeft:3,marginRight:10,marginLeft:10};
}},"radio-groupbox":cf,"radio-groupbox/legend":{alias:x,include:x,style:function(eO){return {backgroundColor:dj,textColor:eO.invalid?cM:undefined,paddingRight:3,paddingLeft:3,marginRight:10,marginLeft:10};
}},"toolbar":{style:function(gA){return {backgroundColor:dj};
}},"toolbar/part":{},"toolbar/part/container":{},"toolbar/part/handle":{style:function(fq){return {decorator:bS,backgroundColor:dj,padding:[0,1],margin:[3,2],allowGrowY:true};
}},"toolbar-separator":{style:function(el){return {margin:[3,2],decorator:ck};
}},"toolbar-button":{alias:di,style:function(gG){if(gG.pressed||gG.checked||gG.abandoned){var gI=dh;
var gH=[3,2,1,4];
}else if(gG.hovered){var gI=B;
var gH=[2,3];
}else{var gI=undefined;
var gH=[3,4];
}return {cursor:y,decorator:gI,padding:gH,backgroundColor:gG.abandoned?cQ:gG.checked?cP:dl};
}},"toolbar-menubutton":{alias:dr,include:dr,style:function(fw){return {showArrow:true};
}},"toolbar-menubutton/arrow":{alias:dc,include:dc,style:function(fb){return {source:dH};
}},"toolbar-splitbutton":{},"toolbar-splitbutton/button":dr,"toolbar-splitbutton/arrow":{alias:dr,include:dr,style:function(fN){return {icon:bY};
}},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:dl,include:dl,style:function(fJ){return {icon:fJ.vertical?bY:q};
}},"slidebar/button-backward":{alias:dl,include:dl,style:function(fX){return {icon:fX.vertical?dJ:W};
}},"tabview":{},"tabview/bar":{alias:bC,style:function(fD){var fE=0,fH=0,fF=0,fG=0;

if(fD.barTop){fF=-2;
}else if(fD.barBottom){fE=-2;
}else if(fD.barRight){fG=-2;
}else{fH=-2;
}return {marginBottom:fF,marginTop:fE,marginLeft:fG,marginRight:fH};
}},"tabview/bar/button-forward":{include:dM,alias:dM,style:function(ha){if(ha.barTop||ha.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/button-backward":{include:br,alias:br,style:function(dY){if(dY.barTop||dY.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/pane":{style:function(gq){return {backgroundColor:dj,decorator:dg,padding:10};
}},"tabview-page":dk,"tabview-page/button":{style:function(eC){var eL;
var eJ=0,eH=0,eE=0,eG=0;

if(eC.barTop||eC.barBottom){var eF=2,eD=2,eI=6,eK=6;
}else{var eF=6,eD=6,eI=6,eK=6;
}
if(eC.barTop){eL=cz;
}else if(eC.barRight){eL=cC;
}else if(eC.barBottom){eL=cA;
}else{eL=by;
}
if(eC.checked){if(eC.barTop||eC.barBottom){eI+=2;
eK+=2;
}else{eF+=2;
eD+=2;
}}else{if(eC.barTop||eC.barBottom){eE+=2;
eJ+=2;
}else if(eC.barLeft||eC.barRight){eH+=2;
eG+=2;
}}
if(eC.checked){if(!eC.firstTab){if(eC.barTop||eC.barBottom){eG=-4;
}else{eJ=-4;
}}
if(!eC.lastTab){if(eC.barTop||eC.barBottom){eH=-4;
}else{eE=-4;
}}}return {zIndex:eC.checked?10:5,decorator:eL,backgroundColor:dj,padding:[eF,eK,eD,eI],margin:[eJ,eH,eE,eG]};
}},"tabview-page/button/label":{alias:dm,style:function(fY){return {padding:[0,1,0,1],margin:fY.focused?0:1,decorator:fY.focused?V:undefined};
}},"tabview-page/button/icon":dc,"tabview-page/button/close-button":{alias:di,style:function(gi){return {icon:bK};
}},"scrollbar":{},"scrollbar/slider":{alias:s,style:function(hb){return {backgroundColor:cP};
}},"scrollbar/slider/knob":{include:ds,style:function(fI){return {height:14,width:14,minHeight:fI.horizontal?undefined:9,minWidth:fI.horizontal?9:undefined};
}},"scrollbar/button":{alias:dl,include:dl,style:function(gT){var gU;

if(gT.up||gT.down){if(gT.pressed||gT.abandoned||gT.checked){gU=[5,2,3,4];
}else{gU=[4,3];
}}else{if(gT.pressed||gT.abandoned||gT.checked){gU=[4,3,2,5];
}else{gU=[3,4];
}}var gV=cF;

if(gT.left){gV+=cW;
}else if(gT.right){gV+=ch;
}else if(gT.up){gV+=cE;
}else{gV+=dC;
}return {padding:gU,icon:gV};
}},"scrollbar/button-begin":D,"scrollbar/button-end":D,"slider":{style:function(gC){var gD;

if(gC.disabled){gD=dv;
}else if(gC.invalid){gD=dn;
}else if(gC.focused){gD=cP;
}else{gD=A;
}return {backgroundColor:gD,decorator:gC.focused?cd:dd};
}},"slider/knob":{include:ds,style:function(gR){return {width:14,height:14,decorator:dg};
}},"tree-folder/open":{style:function(e){return {source:e.opened?bv:bp};
}},"tree-folder":{style:function(dU){return {padding:[2,3,2,0],icon:dU.opened?ba:dO};
}},"tree-folder/icon":{style:function(gt){return {padding:[0,4,0,0]};
}},"tree-folder/label":{style:function(em){return {padding:[1,2],backgroundColor:em.selected?bW:undefined,textColor:em.selected?de:undefined};
}},"tree-file":{include:dN,alias:dN,style:function(gc){return {icon:dL};
}},"tree":{include:bV,alias:bV,style:function(gM){return {contentPadding:[4,4,4,4]};
}},"treevirtual":{style:function(gL){return {decorator:cI};
}},"treevirtual-folder":{style:function(i){return {icon:(i.opened?ba:dO)};
}},"treevirtual-file":{include:bx,alias:bx,style:function(gY){return {icon:dL};
}},"treevirtual-line":{style:function(gl){return {icon:bl};
}},"treevirtual-contract":{style:function(gb){return {icon:bv};
}},"treevirtual-expand":{style:function(eV){return {icon:bp};
}},"treevirtual-only-contract":{style:function(fa){return {icon:o};
}},"treevirtual-only-expand":{style:function(eq){return {icon:I};
}},"treevirtual-start-contract":{style:function(gW){return {icon:dF};
}},"treevirtual-start-expand":{style:function(eA){return {icon:U};
}},"treevirtual-end-contract":{style:function(fv){return {icon:dy};
}},"treevirtual-end-expand":{style:function(fu){return {icon:dE};
}},"treevirtual-cross-contract":{style:function(gn){return {icon:T};
}},"treevirtual-cross-expand":{style:function(fp){return {icon:bJ};
}},"treevirtual-end":{style:function(gP){return {icon:dx};
}},"treevirtual-cross":{style:function(dT){return {icon:bb};
}},"window":{style:function(eM){return {contentPadding:[10,10,10,10],backgroundColor:dj,decorator:eM.maximized?undefined:dg,shadow:eM.maximized?undefined:cJ};
}},"window/pane":{},"window/captionbar":{style:function(eX){return {padding:1,backgroundColor:eX.active?bR:v,textColor:eX.active?bQ:cs};
}},"window/icon":{style:function(fV){return {marginRight:4};
}},"window/title":{style:function(en){return {cursor:y,font:dw,marginRight:20,alignY:ca};
}},"window/minimize-button":{include:dl,alias:dl,style:function(eW){return {icon:dz,padding:eW.pressed||eW.abandoned?[2,1,0,3]:[1,2]};
}},"window/restore-button":{include:dl,alias:dl,style:function(gj){return {icon:co,padding:gj.pressed||gj.abandoned?[2,1,0,3]:[1,2]};
}},"window/maximize-button":{include:dl,alias:dl,style:function(fi){return {icon:m,padding:fi.pressed||fi.abandoned?[2,1,0,3]:[1,2]};
}},"window/close-button":{include:dl,alias:dl,style:function(gp){return {marginLeft:2,icon:bT,padding:gp.pressed||gp.abandoned?[2,1,0,3]:[1,2]};
}},"window/statusbar":{style:function(ge){return {decorator:dh,padding:[2,6]};
}},"window/statusbar-text":dm,"resizer":{style:function(gg){return {decorator:dg};
}},"splitpane":{},"splitpane/splitter":{style:function(gk){return {backgroundColor:dj};
}},"splitpane/splitter/knob":{style:function(ez){return {source:ez.horizontal?cv:M,padding:2};
}},"splitpane/slider":{style:function(gh){return {backgroundColor:dD,opacity:0.3};
}},"selectbox":{include:ds,style:function(eu){var ev=dl;

if(eu.invalid&&!eu.disabled){ev=dn;
}else if(eu.abandoned){ev=cQ;
}else if(!eu.abandoned&&eu.hovered){ev=dt;
}else if(!eu.abandoned&&!eu.hovered&&eu.checked){ev=dP;
}return {backgroundColor:ev};
}},"selectbox/atom":di,"selectbox/popup":dp,"selectbox/list":bV,"selectbox/arrow":{include:dc,style:function(gz){return {source:bY,paddingRight:4,paddingLeft:5};
}},"datechooser":{style:function(h){return {decorator:dg};
}},"datechooser/navigation-bar":{style:function(eh){return {backgroundColor:cH,textColor:eh.disabled?df:eh.invalid?cM:undefined,padding:[2,10]};
}},"datechooser/last-year-button-tooltip":cc,"datechooser/last-month-button-tooltip":cc,"datechooser/next-year-button-tooltip":cc,"datechooser/next-month-button-tooltip":cc,"datechooser/last-year-button":cN,"datechooser/last-month-button":cN,"datechooser/next-year-button":cN,"datechooser/next-month-button":cN,"datechooser/button/icon":{},"datechooser/button":{style:function(gu){var gv={width:17,show:cm};

if(gu.lastYear){gv.icon=bh;
}else if(gu.lastMonth){gv.icon=W;
}else if(gu.nextYear){gv.icon=K;
}else if(gu.nextMonth){gv.icon=dK;
}
if(gu.pressed||gu.checked||gu.abandoned){gv.decorator=dh;
}else if(gu.hovered){gv.decorator=B;
}else{gv.decorator=undefined;
}
if(gu.pressed||gu.checked||gu.abandoned){gv.padding=[2,0,0,2];
}else if(gu.hovered){gv.padding=1;
}else{gv.padding=2;
}return gv;
}},"datechooser/month-year-label":{style:function(dS){return {font:dw,textAlign:cO};
}},"datechooser/date-pane":{style:function(gF){return {decorator:bm,backgroundColor:cH};
}},"datechooser/weekday":{style:function(eb){return {decorator:bN,font:dw,textAlign:cO,textColor:eb.disabled?df:eb.weekend?w:cH,backgroundColor:eb.weekend?cH:w};
}},"datechooser/day":{style:function(gy){return {textAlign:cO,decorator:gy.today?cI:undefined,textColor:gy.disabled?df:gy.selected?de:gy.otherMonth?df:undefined,backgroundColor:gy.disabled?undefined:gy.selected?bk:undefined,padding:[2,4]};
}},"datechooser/week":{style:function(fP){return {textAlign:cO,textColor:w,padding:[2,4],decorator:fP.header?n:bL};
}},"combobox":{style:function(er){var es;

if(er.disabled){es=dv;
}else if(er.invalid){es=dn;
}else if(er.focused){es=cP;
}else{es=A;
}return {decorator:er.focused?cd:dd,textColor:er.disabled?df:undefined,backgroundColor:es};
}},"combobox/button":{alias:dl,include:dl,style:function(gJ){return {icon:bY,backgroundColor:gJ.hovered?dt:dl};
}},"combobox/popup":dp,"combobox/list":bV,"combobox/textfield":{include:dq,style:function(fM){return {decorator:undefined,padding:[2,3],backgroundColor:undefined};
}},"menu":{style:function(ed){var ee={backgroundColor:dj,shadow:cJ,decorator:dg,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4,padding:1,placementModeY:ed.submenu||ed.contextmenu?cD:cB};

if(ed.submenu){ee.position=dQ;
ee.offset=[-2,-3];
}
if(ed.contextmenu){ee.offset=4;
}return ee;
}},"menu/slidebar":bn,"menu-slidebar":dk,"menu-slidebar-button":{style:function(fO){return {backgroundColor:fO.hovered?bW:undefined,padding:6,center:true};
}},"menu-slidebar/button-backward":{include:C,style:function(fj){return {icon:fj.hovered?cV:dJ};
}},"menu-slidebar/button-forward":{include:C,style:function(fR){return {icon:fR.hovered?G:bY};
}},"menu-separator":{style:function(eN){return {height:0,decorator:H,marginTop:4,marginBottom:4,marginLeft:2,marginRight:2};
}},"menu-button":{alias:di,style:function(b){return {backgroundColor:b.selected?bW:undefined,textColor:b.selected?de:undefined,padding:[2,6]};
}},"menu-button/icon":{include:dc,style:function(g){return {alignY:ca};
}},"menu-button/label":{include:dm,style:function(gd){return {alignY:ca,padding:1};
}},"menu-button/shortcut":{include:dm,style:function(hc){return {alignY:ca,marginLeft:14,padding:1};
}},"menu-button/arrow":{include:dc,style:function(gX){return {source:gX.selected?db:dK,alignY:ca};
}},"menu-checkbox":{alias:cb,include:cb,style:function(dW){return {icon:!dW.checked?undefined:dW.selected?cn:bH};
}},"menu-radiobutton":{alias:cb,include:cb,style:function(gE){return {icon:!gE.checked?undefined:gE.selected?u:cy};
}},"menubar":{style:function(fQ){return {backgroundColor:dj,decorator:dg};
}},"menubar-button":{alias:di,style:function(ew){return {padding:[2,6],backgroundColor:ew.pressed||ew.hovered?bW:undefined,textColor:ew.pressed||ew.hovered?de:undefined};
}},"colorselector":dk,"colorselector/control-bar":dk,"colorselector/visual-pane":cf,"colorselector/control-pane":dk,"colorselector/preset-grid":dk,"colorselector/colorbucket":{style:function(eQ){return {decorator:dh,width:16,height:16};
}},"colorselector/preset-field-set":cf,"colorselector/input-field-set":cf,"colorselector/preview-field-set":cf,"colorselector/hex-field-composite":dk,"colorselector/hex-field":dq,"colorselector/rgb-spinner-composite":dk,"colorselector/rgb-spinner-red":bX,"colorselector/rgb-spinner-green":bX,"colorselector/rgb-spinner-blue":bX,"colorselector/hsb-spinner-composite":dk,"colorselector/hsb-spinner-hue":bX,"colorselector/hsb-spinner-saturation":bX,"colorselector/hsb-spinner-brightness":bX,"colorselector/preview-content-old":{style:function(gQ){return {decorator:dh,width:50,height:10};
}},"colorselector/preview-content-new":{style:function(fx){return {decorator:dh,backgroundColor:cK,width:50,height:10};
}},"colorselector/hue-saturation-field":{style:function(ej){return {decorator:dh,margin:5};
}},"colorselector/brightness-field":{style:function(eY){return {decorator:dh,margin:[5,7]};
}},"colorselector/hue-saturation-pane":dk,"colorselector/hue-saturation-handle":dk,"colorselector/brightness-pane":dk,"colorselector/brightness-handle":dk,"table":dk,"table/statusbar":{style:function(gr){return {decorator:O,paddingLeft:2,paddingRight:2};
}},"table/column-button":{alias:dl,style:function(eS){var eU,eT;

if(eS.pressed||eS.checked||eS.abandoned){eU=dh;
eT=[3,2,1,4];
}else if(eS.hovered){eU=B;
eT=[2,3];
}else{eU=undefined;
eT=[3,4];
}return {decorator:eU,padding:eT,backgroundColor:eS.abandoned?cQ:dl,icon:r};
}},"table-column-reset-button":{extend:cb,alias:cb,style:function(){return {icon:bU};
}},"table-scroller/scrollbar-x":cL,"table-scroller/scrollbar-y":cL,"table-scroller":dk,"table-scroller/header":{style:function(gK){return {decorator:bg,backgroundColor:p};
}},"table-scroller/pane":{style:function(fs){return {backgroundColor:bf};
}},"table-scroller/focus-indicator":{style:function(eR){return {decorator:bD};
}},"table-scroller/resize-line":{style:function(ga){return {backgroundColor:bO,width:3};
}},"table-header-cell":{alias:di,style:function(ey){return {minWidth:13,paddingLeft:2,paddingRight:2,paddingBottom:ey.hovered?0:2,decorator:ey.hovered?dB:F,backgroundColor:ey.hovered?bP:F,sortIcon:ey.sorted?(ey.sortedAscending?ci:cG):undefined};
}},"table-header-cell/sort-icon":{style:function(f){return {alignY:ca};
}},"table-editor-textfield":{include:dq,style:function(a){return {decorator:undefined,padding:[2,2]};
}},"table-editor-selectbox":{include:bw,alias:bw,style:function(ex){return {padding:[0,2]};
}},"table-editor-combobox":{include:z,alias:z,style:function(fL){return {decorator:undefined};
}},"colorpopup":{alias:dp,include:dp,style:function(eB){return {decorator:dg,padding:5,backgroundColor:dj};
}},"colorpopup/field":{style:function(dR){return {decorator:dh,margin:2,width:14,height:14,backgroundColor:dj};
}},"colorpopup/selector-button":dl,"colorpopup/auto-button":dl,"colorpopup/preview-pane":cf,"colorpopup/current-preview":{style:function(c){return {height:20,padding:4,marginLeft:4,decorator:dh,allowGrowX:true};
}},"colorpopup/selected-preview":{style:function(eg){return {height:20,padding:4,marginRight:4,decorator:dh,allowGrowX:true};
}},"colorpopup/colorselector-okbutton":{alias:dl,include:dl,style:function(gB){return {icon:Q};
}},"colorpopup/colorselector-cancelbutton":{alias:dl,include:dl,style:function(go){return {icon:bc};
}},"virtual-list":bV,"virtual-list/row-layer":cx,"row-layer":dk,"column-layer":dk,"cell":{style:function(gN){return {backgroundColor:gN.selected?cr:Y,textColor:gN.selected?de:dI,padding:[3,6]};
}},"cell-string":ce,"cell-number":{include:ce,style:function(eP){return {textAlign:bi};
}},"cell-image":ce,"cell-boolean":ce,"cell-atom":ce,"cell-date":ce,"cell-html":ce,"htmlarea":{"include":dk,style:function(gw){return {backgroundColor:cK};
}}}});
})();
(function(){var c="Oxygen",b="qx.theme.icon.Oxygen",a="qx/icon/Oxygen";
qx.Theme.define(b,{title:c,aliases:{"icon":a},icons:{}});
})();
(function(){var b="Classic Windows",a="qx.theme.Classic";
qx.Theme.define(a,{title:b,meta:{color:qx.theme.classic.Color,decoration:qx.theme.classic.Decoration,font:qx.theme.classic.Font,appearance:qx.theme.classic.Appearance,icon:qx.theme.icon.Oxygen}});
})();
(function(){var b="qx.util.ValueManager",a="abstract";
qx.Class.define(b,{type:a,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this._dynamic={};
},members:{_dynamic:null,resolveDynamic:function(e){return this._dynamic[e];
},isDynamic:function(d){return !!this._dynamic[d];
},resolve:function(c){if(c&&this._dynamic[c]){return this._dynamic[c];
}return c;
},_setDynamic:function(f){this._dynamic=f;
},_getDynamic:function(){return this._dynamic;
}},destruct:function(){this._dynamic=null;
}});
})();
(function(){var n="/",m="0",l="qx/static",k="http://",j="https://",i="file://",h="qx.util.AliasManager",g="singleton",f=".",e="static";
qx.Class.define(h,{type:g,extend:qx.util.ValueManager,construct:function(){qx.util.ValueManager.call(this);
this.__gq={};
this.add(e,l);
},members:{__gq:null,_preprocess:function(o){var r=this._getDynamic();

if(r[o]===false){return o;
}else if(r[o]===undefined){if(o.charAt(0)===n||o.charAt(0)===f||o.indexOf(k)===0||o.indexOf(j)===m||o.indexOf(i)===0){r[o]=false;
return o;
}
if(this.__gq[o]){return this.__gq[o];
}var q=o.substring(0,o.indexOf(n));
var p=this.__gq[q];

if(p!==undefined){r[o]=p+o.substring(q.length);
}}return o;
},add:function(a,b){this.__gq[a]=b;
var d=this._getDynamic();
for(var c in d){if(c.substring(0,c.indexOf(n))===a){d[c]=b+c.substring(a.length);
}}},remove:function(u){delete this.__gq[u];
},resolve:function(s){var t=this._getDynamic();

if(s!=null){s=this._preprocess(s);
}return t[s]||s;
}},destruct:function(){this.__gq=null;
}});
})();
(function(){var r="px",q="qx.client",p="div",o="img",n="",m="no-repeat",l="scale-x",k="mshtml",j="scale",i="scale-y",N="qx/icon",M="repeat",L=".png",K="crop",J="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",I='<div style="',H="repeat-y",G='<img src="',F="qx.bom.element.Decoration",E="', sizingMethod='",y="png",z="')",w='"></div>',x='"/>',u='" style="',v="none",s="webkit",t=" ",A="repeat-x",B="DXImageTransform.Microsoft.AlphaImageLoader",D="qx/static/blank.gif",C="absolute";
qx.Class.define(F,{statics:{DEBUG:false,__gM:{},__gN:qx.core.Variant.isSet(q,k),__gO:qx.core.Variant.select(q,{"mshtml":{"scale-x":true,"scale-y":true,"scale":true,"no-repeat":true},"default":null}),__gP:{"scale-x":o,"scale-y":o,"scale":o,"repeat":p,"no-repeat":p,"repeat-x":p,"repeat-y":p},update:function(a,b,c,d){var g=this.getTagName(c,b);

if(g!=a.tagName.toLowerCase()){throw new Error("Image modification not possible because elements could not be replaced at runtime anymore!");
}var h=this.getAttributes(b,c,d);

if(g===o){a.src=h.src||qx.util.ResourceManager.getInstance().toUri(D);
}if(a.style.backgroundPosition!=n&&h.style.backgroundPosition===undefined){h.style.backgroundPosition=null;
}if(a.style.clip!=n&&h.style.clip===undefined){h.style.clip=null;
}var f=qx.bom.element.Style;
f.setStyles(a,h.style);
if(this.__gN){try{a.filters[B].apply();
}catch(e){}}},create:function(O,P,Q){var R=this.getTagName(P,O);
var T=this.getAttributes(O,P,Q);
var S=qx.bom.element.Style.compile(T.style);

if(R===o){return G+T.src+u+S+x;
}else{return I+S+w;
}},getTagName:function(bj,bk){if(qx.core.Variant.isSet(q,k)){if(bk&&this.__gN&&this.__gO[bj]&&qx.lang.String.endsWith(bk,L)){return p;
}}return this.__gP[bj];
},getAttributes:function(bK,bL,bM){if(!bM){bM={};
}
if(!bM.position){bM.position=C;
}
if(qx.core.Variant.isSet(q,k)){bM.fontSize=0;
bM.lineHeight=0;
}else if(qx.core.Variant.isSet(q,s)){bM.WebkitUserDrag=v;
}var bO=qx.util.ResourceManager.getInstance().getImageFormat(bK)||qx.io.ImageLoader.getFormat(bK);
{};
var bN;
if(this.__gN&&this.__gO[bL]&&bO===y){bN=this.__gS(bM,bL,bK);
}else{if(bL===j){bN=this.__gT(bM,bL,bK);
}else if(bL===l||bL===i){bN=this.__gU(bM,bL,bK);
}else{bN=this.__gX(bM,bL,bK);
}}return bN;
},__gQ:function(bW,bX,bY){if(bW.width==null&&bX!=null){bW.width=bX+r;
}
if(bW.height==null&&bY!=null){bW.height=bY+r;
}return bW;
},__gR:function(bl){var bm=qx.util.ResourceManager.getInstance().getImageWidth(bl)||qx.io.ImageLoader.getWidth(bl);
var bn=qx.util.ResourceManager.getInstance().getImageHeight(bl)||qx.io.ImageLoader.getHeight(bl);
return {width:bm,height:bn};
},__gS:function(bE,bF,bG){var bJ=this.__gR(bG);
bE=this.__gQ(bE,bJ.width,bJ.height);
var bI=bF==m?K:j;
var bH=J+qx.util.ResourceManager.getInstance().toUri(bG)+E+bI+z;
bE.filter=bH;
bE.backgroundImage=bE.backgroundRepeat=n;
return {style:bE};
},__gT:function(bd,be,bf){var bh=qx.util.ResourceManager.getInstance().toUri(bf);
var bi=this.__gR(bf);
bd=this.__gQ(bd,bi.width,bi.height);
return {src:bh,style:bd};
},__gU:function(bs,bt,bu){var by=qx.util.ResourceManager.getInstance();
var bx=by.isClippedImage(bu);
var bz=this.__gR(bu);

if(bx){var bw=by.getData(bu);
var bv=by.toUri(bw[4]);

if(bt===l){bs=this.__gV(bs,bw,bz.height);
}else{bs=this.__gW(bs,bw,bz.width);
}return {src:bv,style:bs};
}else{{};

if(bt==l){bs.height=bz.height==null?null:bz.height+r;
}else if(bt==i){bs.width=bz.width==null?null:bz.width+r;
}var bv=by.toUri(bu);
return {src:bv,style:bs};
}},__gV:function(bA,bB,bC){var bD=qx.util.ResourceManager.getInstance().getImageHeight(bB[4]);
bA.clip={top:-bB[6],height:bC};
bA.height=bD+r;
if(bA.top!=null){bA.top=(parseInt(bA.top,10)+bB[6])+r;
}else if(bA.bottom!=null){bA.bottom=(parseInt(bA.bottom,10)+bC-bD-bB[6])+r;
}return bA;
},__gW:function(bo,bp,bq){var br=qx.util.ResourceManager.getInstance().getImageWidth(bp[4]);
bo.clip={left:-bp[5],width:bq};
bo.width=br+r;
if(bo.left!=null){bo.left=(parseInt(bo.left,10)+bp[5])+r;
}else if(bo.right!=null){bo.right=(parseInt(bo.right,10)+bq-br-bp[5])+r;
}return bo;
},__gX:function(U,V,W){var bc=qx.util.ResourceManager.getInstance().isClippedImage(W);
var bb=this.__gR(W);
if(bc&&V!==M){var ba=qx.util.ResourceManager.getInstance().getData(W);
var Y=qx.bom.element.Background.getStyles(ba[4],V,ba[5],ba[6]);

for(var X in Y){U[X]=Y[X];
}
if(bb.width!=null&&U.width==null&&(V==H||V===m)){U.width=bb.width+r;
}
if(bb.height!=null&&U.height==null&&(V==A||V===m)){U.height=bb.height+r;
}return {style:U};
}else{{};
U=this.__gQ(U,bb.width,bb.height);
U=this.__gY(U,W,V);
return {style:U};
}},__gY:function(bP,bQ,bR){var top=null;
var bV=null;

if(bP.backgroundPosition){var bS=bP.backgroundPosition.split(t);
bV=parseInt(bS[0]);

if(isNaN(bV)){bV=bS[0];
}top=parseInt(bS[1]);

if(isNaN(top)){top=bS[1];
}}var bU=qx.bom.element.Background.getStyles(bQ,bR,bV,top);

for(var bT in bU){bP[bT]=bU[bT];
}if(bP.filter){bP.filter=n;
}return bP;
},__ha:function(ca){if(this.DEBUG&&qx.util.ResourceManager.getInstance().has(ca)&&ca.indexOf(N)==-1){if(!this.__gM[ca]){qx.log.Logger.debug("Potential clipped image candidate: "+ca);
this.__gM[ca]=true;
}}},isAlphaImageLoaderEnabled:qx.core.Variant.select(q,{"mshtml":function(){return qx.bom.element.Decoration.__gN;
},"default":function(){return false;
}})}});
})();
(function(){var n="auto",m="px",l=",",k="clip:auto;",j="rect(",i=");",h="",g=")",f="qx.bom.element.Clip",e="string",b="rect(auto)",d="clip:rect(",c="clip",a="rect(auto,auto,auto,auto)";
qx.Class.define(f,{statics:{compile:function(F){if(!F){return k;
}var K=F.left;
var top=F.top;
var J=F.width;
var I=F.height;
var G,H;

if(K==null){G=(J==null?n:J+m);
K=n;
}else{G=(J==null?n:K+J+m);
K=K+m;
}
if(top==null){H=(I==null?n:I+m);
top=n;
}else{H=(I==null?n:top+I+m);
top=top+m;
}return d+top+l+G+l+H+l+K+i;
},get:function(o,p){var r=qx.bom.element.Style.get(o,c,p,false);
var w,top,u,t;
var q,s;

if(typeof r===e&&r!==n&&r!==h){r=qx.lang.String.trim(r);
if(/\((.*)\)/.test(r)){var v=RegExp.$1.split(l);
top=qx.lang.String.trim(v[0]);
q=qx.lang.String.trim(v[1]);
s=qx.lang.String.trim(v[2]);
w=qx.lang.String.trim(v[3]);
if(w===n){w=null;
}
if(top===n){top=null;
}
if(q===n){q=null;
}
if(s===n){s=null;
}if(top!=null){top=parseInt(top,10);
}
if(q!=null){q=parseInt(q,10);
}
if(s!=null){s=parseInt(s,10);
}
if(w!=null){w=parseInt(w,10);
}if(q!=null&&w!=null){u=q-w;
}else if(q!=null){u=q;
}
if(s!=null&&top!=null){t=s-top;
}else if(s!=null){t=s;
}}else{throw new Error("Could not parse clip string: "+r);
}}return {left:w||null,top:top||null,width:u||null,height:t||null};
},set:function(y,z){if(!z){y.style.clip=a;
return;
}var E=z.left;
var top=z.top;
var D=z.width;
var C=z.height;
var A,B;

if(E==null){A=(D==null?n:D+m);
E=n;
}else{A=(D==null?n:E+D+m);
E=E+m;
}
if(top==null){B=(C==null?n:C+m);
top=n;
}else{B=(C==null?n:top+C+m);
top=top+m;
}y.style.clip=j+top+l+A+l+B+l+E+g;
},reset:function(x){x.style.clip=qx.bom.client.Engine.MSHTML?b:n;
}}});
})();
(function(){var l="n-resize",k="e-resize",j="nw-resize",i="ne-resize",h="",g="cursor:",f="qx.client",e=";",d="qx.bom.element.Cursor",c="cursor",b="hand";
qx.Class.define(d,{statics:{__eH:qx.core.Variant.select(f,{"mshtml":{"cursor":b,"ew-resize":k,"ns-resize":l,"nesw-resize":i,"nwse-resize":j},"opera":{"col-resize":k,"row-resize":l,"ew-resize":k,"ns-resize":l,"nesw-resize":i,"nwse-resize":j},"default":{}}),compile:function(o){return g+(this.__eH[o]||o)+e;
},get:function(m,n){return qx.bom.element.Style.get(m,c,n,false);
},set:function(p,q){p.style.cursor=this.__eH[q]||q;
},reset:function(a){a.style.cursor=h;
}}});
})();
(function(){var m="",l="qx.client",k=";",j="filter",i="opacity:",h="opacity",g="MozOpacity",f=");",e=")",d="zoom:1;filter:alpha(opacity=",a="qx.bom.element.Opacity",c="alpha(opacity=",b="-moz-opacity:";
qx.Class.define(a,{statics:{compile:qx.core.Variant.select(l,{"mshtml":function(t){if(t>=1){return m;
}
if(t<0.00001){t=0;
}return d+(t*100)+f;
},"gecko":function(D){if(D==1){D=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){return b+D+k;
}else{return i+D+k;
}},"default":function(q){if(q==1){return m;
}return i+q+k;
}}),set:qx.core.Variant.select(l,{"mshtml":function(I,J){var K=qx.bom.element.Style.get(I,j,qx.bom.element.Style.COMPUTED_MODE,false);
if(J>=1){I.style.filter=K.replace(/alpha\([^\)]*\)/gi,m);
return;
}
if(J<0.00001){J=0;
}if(!I.currentStyle||!I.currentStyle.hasLayout){I.style.zoom=1;
}I.style.filter=K.replace(/alpha\([^\)]*\)/gi,m)+c+J*100+e;
},"gecko":function(E,F){if(F==1){F=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){E.style.MozOpacity=F;
}else{E.style.opacity=F;
}},"default":function(u,v){if(v==1){v=m;
}u.style.opacity=v;
}}),reset:qx.core.Variant.select(l,{"mshtml":function(r){var s=qx.bom.element.Style.get(r,j,qx.bom.element.Style.COMPUTED_MODE,false);
r.style.filter=s.replace(/alpha\([^\)]*\)/gi,m);
},"gecko":function(H){if(qx.bom.client.Engine.VERSION<1.7){H.style.MozOpacity=m;
}else{H.style.opacity=m;
}},"default":function(G){G.style.opacity=m;
}}),get:qx.core.Variant.select(l,{"mshtml":function(w,x){var y=qx.bom.element.Style.get(w,j,x,false);

if(y){var z=y.match(/alpha\(opacity=(.*)\)/);

if(z&&z[1]){return parseFloat(z[1])/100;
}}return 1.0;
},"gecko":function(n,o){var p=qx.bom.element.Style.get(n,qx.bom.client.Engine.VERSION<1.7?g:h,o,false);

if(p==0.999999){p=1.0;
}
if(p!=null){return parseFloat(p);
}return 1.0;
},"default":function(A,B){var C=qx.bom.element.Style.get(A,h,B,false);

if(C!=null){return parseFloat(C);
}return 1.0;
}})}});
})();
(function(){var q="qx.client",p="",o="boxSizing",n="box-sizing",m=":",k="border-box",j="qx.bom.element.BoxSizing",h="KhtmlBoxSizing",g="-moz-box-sizing",f="WebkitBoxSizing",c=";",e="-khtml-box-sizing",d="content-box",b="-webkit-box-sizing",a="MozBoxSizing";
qx.Class.define(j,{statics:{__cJ:qx.core.Variant.select(q,{"mshtml":null,"webkit":[o,h,f],"gecko":[a],"opera":[o]}),__cK:qx.core.Variant.select(q,{"mshtml":null,"webkit":[n,e,b],"gecko":[g],"opera":[n]}),__cL:{tags:{button:true,select:true},types:{search:true,button:true,submit:true,reset:true,checkbox:true,radio:true}},__cM:function(F){var G=this.__cL;
return G.tags[F.tagName.toLowerCase()]||G.types[F.type];
},compile:qx.core.Variant.select(q,{"mshtml":function(w){{};
},"default":function(A){var C=this.__cK;
var B=p;

if(C){for(var i=0,l=C.length;i<l;i++){B+=C[i]+m+A+c;
}}return B;
}}),get:qx.core.Variant.select(q,{"mshtml":function(D){if(qx.bom.Document.isStandardMode(qx.dom.Node.getDocument(D))){if(!this.__cM(D)){return d;
}}return k;
},"default":function(t){var v=this.__cJ;
var u;

if(v){for(var i=0,l=v.length;i<l;i++){u=qx.bom.element.Style.get(t,v[i],null,false);

if(u!=null&&u!==p){return u;
}}}return p;
}}),set:qx.core.Variant.select(q,{"mshtml":function(r,s){{};
},"default":function(x,y){var z=this.__cJ;

if(z){for(var i=0,l=z.length;i<l;i++){x.style[z[i]]=y;
}}}}),reset:function(E){this.set(E,p);
}}});
})();
(function(){var x="",w="qx.client",v="hidden",u="-moz-scrollbars-none",r="overflow",q=";",p="overflowY",o=":",n="overflowX",m="overflow:",J="none",I="scroll",H="borderLeftStyle",G="borderRightStyle",F="div",E="borderRightWidth",D="overflow-y",C="borderLeftWidth",B="-moz-scrollbars-vertical",A="100px",y="qx.bom.element.Overflow",z="overflow-x";
qx.Class.define(y,{statics:{__ke:null,getScrollbarWidth:function(){if(this.__ke!==null){return this.__ke;
}var bd=qx.bom.element.Style;
var bf=function(bK,bL){return parseInt(bd.get(bK,bL))||0;
};
var bg=function(ba){return (bd.get(ba,G)==J?0:bf(ba,E));
};
var be=function(bF){return (bd.get(bF,H)==J?0:bf(bF,C));
};
var bi=qx.core.Variant.select(w,{"mshtml":function(d){if(bd.get(d,p)==v||d.clientWidth==0){return bg(d);
}return Math.max(0,d.offsetWidth-d.clientLeft-d.clientWidth);
},"default":function(bn){if(bn.clientWidth==0){var bo=bd.get(bn,r);
var bp=(bo==I||bo==B?16:0);
return Math.max(0,bg(bn)+bp);
}return Math.max(0,(bn.offsetWidth-bn.clientWidth-be(bn)));
}});
var bh=function(e){return bi(e)-bg(e);
};
var t=document.createElement(F);
var s=t.style;
s.height=s.width=A;
s.overflow=I;
document.body.appendChild(t);
var c=bh(t);
this.__ke=c?c:16;
document.body.removeChild(t);
return this.__ke;
},_compile:qx.core.Variant.select(w,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bb,bc){if(bc==v){bc=u;
}return m+bc+q;
}:
function(ca,cb){return ca+o+cb+q;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bP,bQ){return m+bQ+q;
}:
function(bB,bC){return bB+o+bC+q;
},"default":function(bs,bt){return bs+o+bt+q;
}}),compileX:function(K){return this._compile(z,K);
},compileY:function(W){return this._compile(D,W);
},getX:qx.core.Variant.select(w,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(L,M){var N=qx.bom.element.Style.get(L,r,M,false);

if(N===u){N=v;
}return N;
}:
function(bw,bx){return qx.bom.element.Style.get(bw,n,bx,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(i,j){return qx.bom.element.Style.get(i,r,j,false);
}:
function(bz,bA){return qx.bom.element.Style.get(bz,n,bA,false);
},"default":function(bG,bH){return qx.bom.element.Style.get(bG,n,bH,false);
}}),setX:qx.core.Variant.select(w,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bq,br){if(br==v){br=u;
}bq.style.overflow=br;
}:
function(a,b){a.style.overflowX=b;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(U,V){U.style.overflow=V;
}:
function(cd,ce){cd.style.overflowX=ce;
},"default":function(bR,bS){bR.style.overflowX=bS;
}}),resetX:qx.core.Variant.select(w,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(by){by.style.overflow=x;
}:
function(P){P.style.overflowX=x;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bI,bJ){bI.style.overflow=x;
}:
function(X,Y){X.style.overflowX=x;
},"default":function(O){O.style.overflowX=x;
}}),getY:qx.core.Variant.select(w,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(f,g){var h=qx.bom.element.Style.get(f,r,g,false);

if(h===u){h=v;
}return h;
}:
function(Q,R){return qx.bom.element.Style.get(Q,p,R,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bX,bY){return qx.bom.element.Style.get(bX,r,bY,false);
}:
function(bN,bO){return qx.bom.element.Style.get(bN,p,bO,false);
},"default":function(bj,bk){return qx.bom.element.Style.get(bj,p,bk,false);
}}),setY:qx.core.Variant.select(w,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bu,bv){if(bv===v){bv=u;
}bu.style.overflow=bv;
}:
function(bV,bW){bV.style.overflowY=bW;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(k,l){k.style.overflow=l;
}:
function(S,T){S.style.overflowY=T;
},"default":function(bl,bm){bl.style.overflowY=bm;
}}),resetY:qx.core.Variant.select(w,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(cf){cf.style.overflow=x;
}:
function(bM){bM.style.overflowY=x;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bT,bU){bT.style.overflow=x;
}:
function(bD,bE){bD.style.overflowY=x;
},"default":function(cc){cc.style.overflowY=x;
}})}});
})();
(function(){var n="",m="qx.client",k="userSelect",h="style",g="MozUserModify",f="px",e="float",d="borderImage",c="styleFloat",b="appearance",G="pixelHeight",F='Ms',E=":",D="cssFloat",C="pixelTop",B="pixelLeft",A='O',z="qx.bom.element.Style",y='Khtml',x='string',u="pixelRight",v='Moz',s="pixelWidth",t="pixelBottom",q=";",r="textOverflow",o="userModify",p='Webkit',w="WebkitUserModify";
qx.Class.define(z,{statics:{__cu:function(){var bp=[b,k,r,d];
var bt={};
var bq=document.documentElement.style;
var bu=[v,p,y,A,F];

for(var i=0,l=bp.length;i<l;i++){var bv=bp[i];
var br=bv;

if(bq[bv]){bt[br]=bv;
continue;
}bv=qx.lang.String.firstUp(bv);

for(var j=0,bw=bu.length;j<bw;j++){var bs=bu[j]+bv;

if(typeof bq[bs]==x){bt[br]=bs;
break;
}}}this.__cv=bt;
this.__cv[o]=qx.core.Variant.select(m,{"gecko":g,"webkit":w,"default":k});
this.__cw={};

for(var br in bt){this.__cw[br]=this.__cA(bt[br]);
}this.__cv[e]=qx.core.Variant.select(m,{"mshtml":c,"default":D});
},__cx:{width:s,height:G,left:B,right:u,top:C,bottom:t},__cy:{clip:qx.bom.element.Clip,cursor:qx.bom.element.Cursor,opacity:qx.bom.element.Opacity,boxSizing:qx.bom.element.BoxSizing,overflowX:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setX,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getX,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetX,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileX,qx.bom.element.Overflow)},overflowY:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setY,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getY,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetY,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileY,qx.bom.element.Overflow)}},compile:function(bh){var bj=[];
var bl=this.__cy;
var bk=this.__cw;
var name,bi;

for(name in bh){bi=bh[name];

if(bi==null){continue;
}name=bk[name]||name;
if(bl[name]){bj.push(bl[name].compile(bi));
}else{bj.push(this.__cA(name),E,bi,q);
}}return bj.join(n);
},__cz:{},__cA:function(bm){var bn=this.__cz;
var bo=bn[bm];

if(!bo){bo=bn[bm]=qx.lang.String.hyphenate(bm);
}return bo;
},setCss:qx.core.Variant.select(m,{"mshtml":function(Q,R){Q.style.cssText=R;
},"default":function(bf,bg){bf.setAttribute(h,bg);
}}),getCss:qx.core.Variant.select(m,{"mshtml":function(H){return H.style.cssText.toLowerCase();
},"default":function(a){return a.getAttribute(h);
}}),isPropertySupported:function(bz){return (this.__cy[bz]||this.__cv[bz]||bz in document.documentElement.style);
},COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(bB,name,bC,bD){{};
name=this.__cv[name]||name;
if(bD!==false&&this.__cy[name]){return this.__cy[name].set(bB,bC);
}else{bB.style[name]=bC!==null?bC:n;
}},setStyles:function(I,J,K){{};
var N=this.__cv;
var P=this.__cy;
var L=I.style;

for(var O in J){var M=J[O];
var name=N[O]||O;

if(M===undefined){if(K!==false&&P[name]){P[name].reset(I);
}else{L[name]=n;
}}else{if(K!==false&&P[name]){P[name].set(I,M);
}else{L[name]=M!==null?M:n;
}}}},reset:function(bx,name,by){name=this.__cv[name]||name;
if(by!==false&&this.__cy[name]){return this.__cy[name].reset(bx);
}else{bx.style[name]=n;
}},get:qx.core.Variant.select(m,{"mshtml":function(S,name,T,U){name=this.__cv[name]||name;
if(U!==false&&this.__cy[name]){return this.__cy[name].get(S,T);
}if(!S.currentStyle){return S.style[name]||n;
}switch(T){case this.LOCAL_MODE:return S.style[name]||n;
case this.CASCADED_MODE:return S.currentStyle[name]||n;
default:var Y=S.currentStyle[name]||n;
if(/^-?[\.\d]+(px)?$/i.test(Y)){return Y;
}var X=this.__cx[name];

if(X){var V=S.style[name];
S.style[name]=Y||0;
var W=S.style[X]+f;
S.style[name]=V;
return W;
}if(/^-?[\.\d]+(em|pt|%)?$/i.test(Y)){throw new Error("Untranslated computed property value: "+name+". Only pixel values work well across different clients.");
}return Y;
}},"default":function(ba,name,bb,bc){name=this.__cv[name]||name;
if(bc!==false&&this.__cy[name]){return this.__cy[name].get(ba,bb);
}switch(bb){case this.LOCAL_MODE:return ba.style[name]||n;
case this.CASCADED_MODE:if(ba.currentStyle){return ba.currentStyle[name]||n;
}throw new Error("Cascaded styles are not supported in this browser!");
default:var bd=qx.dom.Node.getDocument(ba);
var be=bd.defaultView.getComputedStyle(ba,null);
return be?be[name]:n;
}}})},defer:function(bA){bA.__cu();
}});
})();
(function(){var e="qx.client",d="load",c="qx.io.ImageLoader";
qx.Bootstrap.define(c,{statics:{__kE:{},__kF:{width:null,height:null},__kG:/\.(png|gif|jpg|jpeg|bmp)\b/i,isLoaded:function(f){var g=this.__kE[f];
return !!(g&&g.loaded);
},isFailed:function(a){var b=this.__kE[a];
return !!(b&&b.failed);
},isLoading:function(s){var t=this.__kE[s];
return !!(t&&t.loading);
},getFormat:function(x){var y=this.__kE[x];
return y?y.format:null;
},getSize:function(v){var w=this.__kE[v];
return w?
{width:w.width,height:w.height}:this.__kF;
},getWidth:function(k){var m=this.__kE[k];
return m?m.width:null;
},getHeight:function(h){var j=this.__kE[h];
return j?j.height:null;
},load:function(z,A,B){var C=this.__kE[z];

if(!C){C=this.__kE[z]={};
}if(A&&!B){B=window;
}if(C.loaded||C.loading||C.failed){if(A){if(C.loading){C.callbacks.push(A,B);
}else{A.call(B,z,C);
}}}else{C.loading=true;
C.callbacks=[];

if(A){C.callbacks.push(A,B);
}var E=new Image();
var D=qx.lang.Function.listener(this.__kH,this,E,z);
E.onload=D;
E.onerror=D;
E.src=z;
}},__kH:qx.event.GlobalError.observeMethod(function(event,n,o){var p=this.__kE[o];
if(event.type===d){p.loaded=true;
p.width=this.__kI(n);
p.height=this.__kJ(n);
var q=this.__kG.exec(o);

if(q!=null){p.format=q[1];
}}else{p.failed=true;
}n.onload=n.onerror=null;
var r=p.callbacks;
delete p.loading;
delete p.callbacks;
for(var i=0,l=r.length;i<l;i+=2){r[i].call(r[i+1],o,p);
}}),__kI:qx.core.Variant.select(e,{"gecko":function(u){return u.naturalWidth;
},"default":function(F){return F.width;
}}),__kJ:qx.core.Variant.select(e,{"gecko":function(H){return H.naturalHeight;
},"default":function(G){return G.height;
}})}});
})();
(function(){var m="number",l="0",k="px",j=";",i="background-image:url(",h=");",g="",f=")",e="background-repeat:",d=" ",a="qx.bom.element.Background",c="url(",b="background-position:";
qx.Class.define(a,{statics:{__cT:[i,null,h,b,null,j,e,null,j],__cU:{backgroundImage:null,backgroundPosition:null,backgroundRepeat:null},__cV:function(z,top){var A=qx.bom.client.Engine;

if(A.GECKO&&A.VERSION<1.9&&z==top&&typeof z==m){top+=0.01;
}
if(z){var B=(typeof z==m)?z+k:z;
}else{B=l;
}
if(top){var C=(typeof top==m)?top+k:top;
}else{C=l;
}return B+d+C;
},compile:function(t,u,v,top){var w=this.__cV(v,top);
var x=qx.util.ResourceManager.getInstance().toUri(t);
var y=this.__cT;
y[1]=x;
y[4]=w;
y[7]=u;
return y.join(g);
},getStyles:function(D,E,F,top){if(!D){return this.__cU;
}var G=this.__cV(F,top);
var H=qx.util.ResourceManager.getInstance().toUri(D);
var I={backgroundPosition:G,backgroundImage:c+H+f};

if(E!=null){I.backgroundRepeat=E;
}return I;
},set:function(n,o,p,q,top){var r=this.getStyles(o,p,q,top);

for(var s in r){n.style[s]=r[s];
}}}});
})();
(function(){var f="_applyTheme",e="qx.theme.manager.Color",d="Theme",c="changeTheme",b="string",a="singleton";
qx.Class.define(e,{type:a,extend:qx.util.ValueManager,properties:{theme:{check:d,nullable:true,apply:f,event:c}},members:{_applyTheme:function(k){var l={};

if(k){var m=k.colors;
var n=qx.util.ColorUtil;
var o;

for(var p in m){o=m[p];

if(typeof o===b){if(!n.isCssString(o)){throw new Error("Could not parse color: "+o);
}}else if(o instanceof Array){o=n.rgbToRgbString(o);
}else{throw new Error("Could not parse color: "+o);
}l[p]=o;
}}this._setDynamic(l);
},resolve:function(g){var j=this._dynamic;
var h=j[g];

if(h){return h;
}var i=this.getTheme();

if(i!==null&&i.colors[g]){return j[g]=i.colors[g];
}return g;
},isDynamic:function(q){var s=this._dynamic;

if(q&&(s[q]!==undefined)){return true;
}var r=this.getTheme();

if(r!==null&&q&&(r.colors[q]!==undefined)){s[q]=r.colors[q];
return true;
}return false;
}}});
})();
(function(){var l=",",k="rgb(",j=")",h="qx.theme.manager.Color",e="qx.util.ColorUtil";
qx.Class.define(e,{statics:{REGEXP:{hex3:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,rgb:/^rgb\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/,rgba:/^rgba\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/},SYSTEM:{activeborder:true,activecaption:true,appworkspace:true,background:true,buttonface:true,buttonhighlight:true,buttonshadow:true,buttontext:true,captiontext:true,graytext:true,highlight:true,highlighttext:true,inactiveborder:true,inactivecaption:true,inactivecaptiontext:true,infobackground:true,infotext:true,menu:true,menutext:true,scrollbar:true,threeddarkshadow:true,threedface:true,threedhighlight:true,threedlightshadow:true,threedshadow:true,window:true,windowframe:true,windowtext:true},NAMED:{black:[0,0,0],silver:[192,192,192],gray:[128,128,128],white:[255,255,255],maroon:[128,0,0],red:[255,0,0],purple:[128,0,128],fuchsia:[255,0,255],green:[0,128,0],lime:[0,255,0],olive:[128,128,0],yellow:[255,255,0],navy:[0,0,128],blue:[0,0,255],teal:[0,128,128],aqua:[0,255,255],transparent:[-1,-1,-1],magenta:[255,0,255],orange:[255,165,0],brown:[165,42,42]},isNamedColor:function(R){return this.NAMED[R]!==undefined;
},isSystemColor:function(I){return this.SYSTEM[I]!==undefined;
},supportsThemes:function(){return qx.Class.isDefined(h);
},isThemedColor:function(D){if(!this.supportsThemes()){return false;
}return qx.theme.manager.Color.getInstance().isDynamic(D);
},stringToRgb:function(a){if(this.supportsThemes()&&this.isThemedColor(a)){var a=qx.theme.manager.Color.getInstance().resolveDynamic(a);
}
if(this.isNamedColor(a)){return this.NAMED[a];
}else if(this.isSystemColor(a)){throw new Error("Could not convert system colors to RGB: "+a);
}else if(this.isRgbString(a)){return this.__gm();
}else if(this.isHex3String(a)){return this.__go();
}else if(this.isHex6String(a)){return this.__gp();
}throw new Error("Could not parse color: "+a);
},cssStringToRgb:function(J){if(this.isNamedColor(J)){return this.NAMED[J];
}else if(this.isSystemColor(J)){throw new Error("Could not convert system colors to RGB: "+J);
}else if(this.isRgbString(J)){return this.__gm();
}else if(this.isRgbaString(J)){return this.__gn();
}else if(this.isHex3String(J)){return this.__go();
}else if(this.isHex6String(J)){return this.__gp();
}throw new Error("Could not parse color: "+J);
},stringToRgbString:function(bi){return this.rgbToRgbString(this.stringToRgb(bi));
},rgbToRgbString:function(C){return k+C[0]+l+C[1]+l+C[2]+j;
},rgbToHexString:function(d){return (qx.lang.String.pad(d[0].toString(16).toUpperCase(),2)+qx.lang.String.pad(d[1].toString(16).toUpperCase(),2)+qx.lang.String.pad(d[2].toString(16).toUpperCase(),2));
},isValidPropertyValue:function(G){return this.isThemedColor(G)||this.isNamedColor(G)||this.isHex3String(G)||this.isHex6String(G)||this.isRgbString(G);
},isCssString:function(V){return this.isSystemColor(V)||this.isNamedColor(V)||this.isHex3String(V)||this.isHex6String(V)||this.isRgbString(V);
},isHex3String:function(H){return this.REGEXP.hex3.test(H);
},isHex6String:function(F){return this.REGEXP.hex6.test(F);
},isRgbString:function(bh){return this.REGEXP.rgb.test(bh);
},isRgbaString:function(E){return this.REGEXP.rgba.test(E);
},__gm:function(){var ba=parseInt(RegExp.$1,10);
var Y=parseInt(RegExp.$2,10);
var X=parseInt(RegExp.$3,10);
return [ba,Y,X];
},__gn:function(){var Q=parseInt(RegExp.$1,10);
var P=parseInt(RegExp.$2,10);
var O=parseInt(RegExp.$3,10);
return [Q,P,O];
},__go:function(){var N=parseInt(RegExp.$1,16)*17;
var M=parseInt(RegExp.$2,16)*17;
var L=parseInt(RegExp.$3,16)*17;
return [N,M,L];
},__gp:function(){var U=(parseInt(RegExp.$1,16)*16)+parseInt(RegExp.$2,16);
var T=(parseInt(RegExp.$3,16)*16)+parseInt(RegExp.$4,16);
var S=(parseInt(RegExp.$5,16)*16)+parseInt(RegExp.$6,16);
return [U,T,S];
},hex3StringToRgb:function(W){if(this.isHex3String(W)){return this.__go(W);
}throw new Error("Invalid hex3 value: "+W);
},hex6StringToRgb:function(K){if(this.isHex6String(K)){return this.__gp(K);
}throw new Error("Invalid hex6 value: "+K);
},hexStringToRgb:function(c){if(this.isHex3String(c)){return this.__go(c);
}
if(this.isHex6String(c)){return this.__gp(c);
}throw new Error("Invalid hex value: "+c);
},rgbToHsb:function(m){var o,s,v;
var B=m[0];
var y=m[1];
var n=m[2];
var A=(B>y)?B:y;

if(n>A){A=n;
}var u=(B<y)?B:y;

if(n<u){u=n;
}v=A/255.0;

if(A!=0){s=(A-u)/A;
}else{s=0;
}
if(s==0){o=0;
}else{var x=(A-B)/(A-u);
var z=(A-y)/(A-u);
var w=(A-n)/(A-u);

if(B==A){o=w-z;
}else if(y==A){o=2.0+x-w;
}else{o=4.0+z-x;
}o=o/6.0;

if(o<0){o=o+1.0;
}}return [Math.round(o*360),Math.round(s*100),Math.round(v*100)];
},hsbToRgb:function(bb){var i,f,p,q,t;
var bc=bb[0]/360;
var bd=bb[1]/100;
var be=bb[2]/100;

if(bc>=1.0){bc%=1.0;
}
if(bd>1.0){bd=1.0;
}
if(be>1.0){be=1.0;
}var bf=Math.floor(255*be);
var bg={};

if(bd==0.0){bg.red=bg.green=bg.blue=bf;
}else{bc*=6.0;
i=Math.floor(bc);
f=bc-i;
p=Math.floor(bf*(1.0-bd));
q=Math.floor(bf*(1.0-(bd*f)));
t=Math.floor(bf*(1.0-(bd*(1.0-f))));

switch(i){case 0:bg.red=bf;
bg.green=t;
bg.blue=p;
break;
case 1:bg.red=q;
bg.green=bf;
bg.blue=p;
break;
case 2:bg.red=p;
bg.green=bf;
bg.blue=t;
break;
case 3:bg.red=p;
bg.green=q;
bg.blue=bf;
break;
case 4:bg.red=t;
bg.green=p;
bg.blue=bf;
break;
case 5:bg.red=bf;
bg.green=p;
bg.blue=q;
break;
}}return [bg.red,bg.green,bg.blue];
},randomColor:function(){var r=Math.round(Math.random()*255);
var g=Math.round(Math.random()*255);
var b=Math.round(Math.random()*255);
return this.rgbToRgbString([r,g,b]);
}}});
})();
(function(){var j="_applyStyle",i="stretch",h="Integer",g="px",f=" ",e="repeat",d="round",c="shorthand",b="px ",a="sliceBottom",y=";'></div>",x="<div style='",w="sliceLeft",v="sliceRight",u="repeatX",t="String",s="qx.ui.decoration.css3.BorderImage",r="border-box",q="",p='") ',n="sliceTop",o='url("',l="hidden",m="repeatY",k="absolute";
qx.Class.define(s,{extend:qx.ui.decoration.Abstract,construct:function(C,D){qx.ui.decoration.Abstract.call(this);
if(C!=null){this.setBorderImage(C);
}
if(D!=null){this.setSlice(D);
}},statics:{IS_SUPPORTED:qx.bom.element.Style.isPropertySupported("borderImage")},properties:{borderImage:{check:t,nullable:true,apply:j},sliceTop:{check:h,init:0,apply:j},sliceRight:{check:h,init:0,apply:j},sliceBottom:{check:h,init:0,apply:j},sliceLeft:{check:h,init:0,apply:j},slice:{group:[n,v,a,w],mode:c},repeatX:{check:[i,e,d],init:i,apply:j},repeatY:{check:[i,e,d],init:i,apply:j},repeat:{group:[u,m],mode:c}},members:{__mJ:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__mJ;
},getMarkup:function(){if(this.__mJ){return this.__mJ;
}var E=this._resolveImageUrl(this.getBorderImage());
var F=[this.getSliceTop(),this.getSliceRight(),this.getSliceBottom(),this.getSliceLeft()];
var G=[this.getRepeatX(),this.getRepeatY()].join(f);
this.__mJ=[x,qx.bom.element.Style.compile({"borderImage":o+E+p+F.join(f)+f+G,position:k,lineHeight:0,fontSize:0,overflow:l,boxSizing:r,borderWidth:F.join(b)+g}),y].join(q);
return this.__mJ;
},resize:function(z,A,B){z.style.width=A+g;
z.style.height=B+g;
},tint:function(I,J){},_applyStyle:function(){{};
},_resolveImageUrl:function(H){return qx.util.ResourceManager.getInstance().toUri(qx.util.AliasManager.getInstance().resolve(H));
}},destruct:function(){this.__mJ=null;
}});
})();
(function(){var k="px",j="0px",i="-1px",h="no-repeat",g="scale-x",f="scale-y",e="-tr",d="-l",c='</div>',b="scale",y="qx.client",x="-br",w="-t",v="-tl",u="-r",t='<div style="position:absolute;top:0;left:0;overflow:hidden;font-size:0;line-height:0;">',s="_applyBaseImage",r="-b",q="String",p="",n="-bl",o="qx.ui.decoration.GridDiv",l="-c",m="mshtml";
qx.Class.define(o,{extend:qx.ui.decoration.Abstract,construct:function(B,C){qx.ui.decoration.Abstract.call(this);
if(B!=null){this.setBaseImage(B);
}
if(C!=null){this.setInsets(C);
}},properties:{baseImage:{check:q,nullable:true,apply:s}},members:{__mK:null,__mL:null,__mM:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__mK;
},getMarkup:function(){if(this.__mK){return this.__mK;
}var Q=qx.bom.element.Decoration;
var R=this.__mL;
var S=this.__mM;
var T=[];
T.push(t);
T.push(Q.create(R.tl,h,{top:0,left:0}));
T.push(Q.create(R.t,g,{top:0,left:S.left+k}));
T.push(Q.create(R.tr,h,{top:0,right:0}));
T.push(Q.create(R.bl,h,{bottom:0,left:0}));
T.push(Q.create(R.b,g,{bottom:0,left:S.left+k}));
T.push(Q.create(R.br,h,{bottom:0,right:0}));
T.push(Q.create(R.l,f,{top:S.top+k,left:0}));
T.push(Q.create(R.c,b,{top:S.top+k,left:S.left+k}));
T.push(Q.create(R.r,f,{top:S.top+k,right:0}));
T.push(c);
return this.__mK=T.join(p);
},resize:function(M,N,O){var P=this.__mM;
var innerWidth=N-P.left-P.right;
var innerHeight=O-P.top-P.bottom;
if(innerWidth<0){innerWidth=0;
}
if(innerHeight<0){innerHeight=0;
}M.style.width=N+k;
M.style.height=O+k;
M.childNodes[1].style.width=innerWidth+k;
M.childNodes[4].style.width=innerWidth+k;
M.childNodes[7].style.width=innerWidth+k;
M.childNodes[6].style.height=innerHeight+k;
M.childNodes[7].style.height=innerHeight+k;
M.childNodes[8].style.height=innerHeight+k;

if(qx.core.Variant.isSet(y,m)){if(qx.bom.client.Engine.VERSION<7||(qx.bom.client.Feature.QUIRKS_MODE&&qx.bom.client.Engine.VERSION<8)){if(N%2==1){M.childNodes[2].style.marginRight=i;
M.childNodes[5].style.marginRight=i;
M.childNodes[8].style.marginRight=i;
}else{M.childNodes[2].style.marginRight=j;
M.childNodes[5].style.marginRight=j;
M.childNodes[8].style.marginRight=j;
}
if(O%2==1){M.childNodes[3].style.marginBottom=i;
M.childNodes[4].style.marginBottom=i;
M.childNodes[5].style.marginBottom=i;
}else{M.childNodes[3].style.marginBottom=j;
M.childNodes[4].style.marginBottom=j;
M.childNodes[5].style.marginBottom=j;
}}}},tint:function(K,L){},_applyBaseImage:function(D,E){{};

if(D){var I=this._resolveImageUrl(D);
var J=/(.*)(\.[a-z]+)$/.exec(I);
var H=J[1];
var G=J[2];
var F=this.__mL={tl:H+v+G,t:H+w+G,tr:H+e+G,bl:H+n+G,b:H+r+G,br:H+x+G,l:H+d+G,c:H+l+G,r:H+u+G};
this.__mM=this._computeEdgeSizes(F);
}},_resolveImageUrl:function(a){return qx.util.AliasManager.getInstance().resolve(a);
},_computeEdgeSizes:function(z){var A=qx.util.ResourceManager.getInstance();
return {top:A.getImageHeight(z.t),bottom:A.getImageHeight(z.b),left:A.getImageWidth(z.l),right:A.getImageWidth(z.r)};
}},destruct:function(){this.__mK=this.__mL=this.__mM=null;
}});
})();


qx.$$loader.init();

