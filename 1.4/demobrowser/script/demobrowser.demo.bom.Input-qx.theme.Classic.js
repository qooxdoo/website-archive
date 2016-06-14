(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!window.qxsettings) qxsettings = {};
var settings = {};
for (var k in settings) qxsettings[k] = settings[k];

if (!window.qxvariants) qxvariants = {};
var variants = {};
for (var k in variants) qxvariants[k] = variants[k];

if (!qx.$$environment) qx.$$environment = {};
var envinfo = {"qx.allowUrlSettings":true,"qx.allowUrlVariants":true,"qx.application":"demobrowser.demo.bom.Input","qx.theme":"qx.theme.Classic"};
for (var k in envinfo) qx.$$environment[k] = envinfo[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"__out__":{"sourceUri":"../../script"},"demobrowser.demo":{"resourceUri":"../../resource","sourceUri":"../../script","version":"trunk"},"qx":{"resourceUri":"../../resource","sourceUri":"../../script","version":"1.4"}};
for (var k in libinfo) qx.$$libraries[k] = libinfo[k];

qx.$$resources = {};
qx.$$translations = {};
qx.$$locales = {};
qx.$$packageData = {};

qx.$$loader = {
  parts : {"boot":[0]},
  uris : [["__out__:demobrowser.demo.bom.Input-qx.theme.Classic.js"]],
  urisBefore : [],
  packageHashes : {"0":"f7ae0e2f95a7"},
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

qx.$$loader.importPackageData = function (dataMap, callback) {
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
  if (callback){
    callback(dataMap);
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
    loadScriptList(l.urisBefore, function(){
      l.initUris();
    });
  } else {
    l.initUris();
  }
}

qx.$$loader.initUris = function(){
  var l=qx.$$loader;
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

qx.$$packageData['f7ae0e2f95a7']={"locales":{},"resources":{"qx/decoration/Classic/arrows-combined.gif":[124,7,"gif","qx"],"qx/decoration/Classic/arrows/down-invert.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-38,0],"qx/decoration/Classic/arrows/down-small-invert.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-87,0],"qx/decoration/Classic/arrows/down-small.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-53,0],"qx/decoration/Classic/arrows/down.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-113,0],"qx/decoration/Classic/arrows/forward-invert.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-30,0],"qx/decoration/Classic/arrows/forward.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-18,0],"qx/decoration/Classic/arrows/left-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-92,0],"qx/decoration/Classic/arrows/left-small-invert.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-58,0],"qx/decoration/Classic/arrows/left-small.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-15,0],"qx/decoration/Classic/arrows/left.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-120,0],"qx/decoration/Classic/arrows/next-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-80,0],"qx/decoration/Classic/arrows/next.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-109,0],"qx/decoration/Classic/arrows/previous-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-69,0],"qx/decoration/Classic/arrows/previous.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-65,0],"qx/decoration/Classic/arrows/rewind-invert.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-45,0],"qx/decoration/Classic/arrows/rewind.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-101,0],"qx/decoration/Classic/arrows/right-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-61,0],"qx/decoration/Classic/arrows/right-small-invert.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",0,0],"qx/decoration/Classic/arrows/right-small.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-84,0],"qx/decoration/Classic/arrows/right.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-26,0],"qx/decoration/Classic/arrows/up-invert.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-73,0],"qx/decoration/Classic/arrows/up-small-invert.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-96,0],"qx/decoration/Classic/arrows/up-small.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-3,0],"qx/decoration/Classic/arrows/up.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-8,0],"qx/decoration/Classic/checkbox-radiobutton-combined.png":[504,14,"png","qx"],"qx/decoration/Classic/colorselector-combined.gif":[46,11,"gif","qx"],"qx/decoration/Classic/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Classic/colorselector/brightness-handle.gif":[35,11,"gif","qx","qx/decoration/Classic/colorselector-combined.gif",-11,0],"qx/decoration/Classic/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Classic/colorselector/huesaturation-handle.gif":[11,11,"gif","qx","qx/decoration/Classic/colorselector-combined.gif",0,0],"qx/decoration/Classic/cursors-combined.gif":[71,20,"gif","qx"],"qx/decoration/Classic/cursors/alias.gif":[19,15,"gif","qx","qx/decoration/Classic/cursors-combined.gif",-52,0],"qx/decoration/Classic/cursors/copy.gif":[19,15,"gif","qx","qx/decoration/Classic/cursors-combined.gif",-20,0],"qx/decoration/Classic/cursors/move.gif":[13,9,"gif","qx","qx/decoration/Classic/cursors-combined.gif",-39,0],"qx/decoration/Classic/cursors/nodrop.gif":[20,20,"gif","qx","qx/decoration/Classic/cursors-combined.gif",0,0],"qx/decoration/Classic/datechooser/last-month-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/last-month.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/last-year-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/last-year.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-month-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-month.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-year-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-year.png":[16,16,"png","qx"],"qx/decoration/Classic/form/checkbox-checked-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-336,0],"qx/decoration/Classic/form/checkbox-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-28,0],"qx/decoration/Classic/form/checkbox-checked-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-462,0],"qx/decoration/Classic/form/checkbox-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-112,0],"qx/decoration/Classic/form/checkbox-checked-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-140,0],"qx/decoration/Classic/form/checkbox-checked-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-98,0],"qx/decoration/Classic/form/checkbox-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-308,0],"qx/decoration/Classic/form/checkbox-checked-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",0,0],"qx/decoration/Classic/form/checkbox-checked.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-266,0],"qx/decoration/Classic/form/checkbox-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-84,0],"qx/decoration/Classic/form/checkbox-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-476,0],"qx/decoration/Classic/form/checkbox-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-392,0],"qx/decoration/Classic/form/checkbox-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-196,0],"qx/decoration/Classic/form/checkbox-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-154,0],"qx/decoration/Classic/form/checkbox-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-350,0],"qx/decoration/Classic/form/checkbox-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-448,0],"qx/decoration/Classic/form/checkbox-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-70,0],"qx/decoration/Classic/form/checkbox-undetermined-disabled.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox-undetermined-focused-invalid.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox-undetermined-focused.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox-undetermined-hovered-invalid.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox-undetermined-hovered.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox-undetermined-invalid.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox-undetermined.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-490,0],"qx/decoration/Classic/form/radiobutton-checked-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-210,0],"qx/decoration/Classic/form/radiobutton-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-406,0],"qx/decoration/Classic/form/radiobutton-checked-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-378,0],"qx/decoration/Classic/form/radiobutton-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-252,0],"qx/decoration/Classic/form/radiobutton-checked-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-182,0],"qx/decoration/Classic/form/radiobutton-checked-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-294,0],"qx/decoration/Classic/form/radiobutton-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-420,0],"qx/decoration/Classic/form/radiobutton-checked-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-56,0],"qx/decoration/Classic/form/radiobutton-checked.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-322,0],"qx/decoration/Classic/form/radiobutton-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-364,0],"qx/decoration/Classic/form/radiobutton-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-434,0],"qx/decoration/Classic/form/radiobutton-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-168,0],"qx/decoration/Classic/form/radiobutton-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-126,0],"qx/decoration/Classic/form/radiobutton-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-42,0],"qx/decoration/Classic/form/radiobutton-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-280,0],"qx/decoration/Classic/form/radiobutton-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-238,0],"qx/decoration/Classic/form/radiobutton-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-14,0],"qx/decoration/Classic/form/radiobutton.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-224,0],"qx/decoration/Classic/menu-combined.gif":[64,7,"gif","qx"],"qx/decoration/Classic/menu/checkbox-invert.gif":[16,7,"gif","qx","qx/decoration/Classic/menu-combined.gif",-16,0],"qx/decoration/Classic/menu/checkbox.gif":[16,7,"gif","qx","qx/decoration/Classic/menu-combined.gif",-32,0],"qx/decoration/Classic/menu/radiobutton-invert.gif":[16,5,"gif","qx","qx/decoration/Classic/menu-combined.gif",0,0],"qx/decoration/Classic/menu/radiobutton.gif":[16,5,"gif","qx","qx/decoration/Classic/menu-combined.gif",-48,0],"qx/decoration/Classic/shadow-lr-combined.png":[30,382,"png","qx"],"qx/decoration/Classic/shadow-small-lr-combined.png":[10,136,"png","qx"],"qx/decoration/Classic/shadow-small-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Classic/shadow-tb-combined.png":[15,90,"png","qx"],"qx/decoration/Classic/shadow/shadow-b.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-30],"qx/decoration/Classic/shadow/shadow-bl.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-br.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-60],"qx/decoration/Classic/shadow/shadow-c.png":[40,382,"png","qx"],"qx/decoration/Classic/shadow/shadow-l.png":[15,382,"png","qx","qx/decoration/Classic/shadow-lr-combined.png",-15,0],"qx/decoration/Classic/shadow/shadow-r.png":[15,382,"png","qx","qx/decoration/Classic/shadow-lr-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-small-b.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-25],"qx/decoration/Classic/shadow/shadow-small-bl.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-20],"qx/decoration/Classic/shadow/shadow-small-br.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-small-c.png":[40,136,"png","qx"],"qx/decoration/Classic/shadow/shadow-small-l.png":[5,136,"png","qx","qx/decoration/Classic/shadow-small-lr-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-small-r.png":[5,136,"png","qx","qx/decoration/Classic/shadow-small-lr-combined.png",-5,0],"qx/decoration/Classic/shadow/shadow-small-t.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-5],"qx/decoration/Classic/shadow/shadow-small-tl.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-15],"qx/decoration/Classic/shadow/shadow-small-tr.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-10],"qx/decoration/Classic/shadow/shadow-small.png":[114,146,"png","qx"],"qx/decoration/Classic/shadow/shadow-t.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-75],"qx/decoration/Classic/shadow/shadow-tl.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-45],"qx/decoration/Classic/shadow/shadow-tr.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-15],"qx/decoration/Classic/shadow/shadow.png":[381,412,"png","qx"],"qx/decoration/Classic/splitpane/knob-horizontal.png":[4,15,"png","qx"],"qx/decoration/Classic/splitpane/knob-vertical.png":[15,4,"png","qx"],"qx/decoration/Classic/table-combined.png":[72,11,"png","qx"],"qx/decoration/Classic/table/ascending-invert.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",-62,0],"qx/decoration/Classic/table/ascending.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",-52,0],"qx/decoration/Classic/table/boolean-false.png":[11,11,"png","qx","qx/decoration/Classic/table-combined.png",-31,0],"qx/decoration/Classic/table/boolean-true.png":[11,11,"png","qx","qx/decoration/Classic/table-combined.png",-10,0],"qx/decoration/Classic/table/descending-invert.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",-42,0],"qx/decoration/Classic/table/descending.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",0,0],"qx/decoration/Classic/table/select-column-order.png":[10,9,"png","qx","qx/decoration/Classic/table-combined.png",-21,0],"qx/decoration/Classic/tree/minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/tree/plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/cross.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/cross_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/cross_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/end.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/end_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/end_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/line.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/only_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/only_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/start.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/start_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/start_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/window-captionbar-buttons-combined.gif":[36,9,"gif","qx"],"qx/decoration/Classic/window/close.gif":[10,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",0,0],"qx/decoration/Classic/window/maximize.gif":[9,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",-10,0],"qx/decoration/Classic/window/minimize.gif":[9,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",-19,0],"qx/decoration/Classic/window/restore.gif":[8,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",-28,0],"qx/icon/Oxygen/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/mimetypes/text-plain.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/places/folder-open.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/places/folder.png":[16,16,"png","qx"]},"translations":{}};
(function(){var m="toString",k=".",j="default",h="Object",g='"',f="Array",e="()",d="String",c="Function",b=".prototype",L="function",K="Boolean",J="Error",I="constructor",H="warn",G="hasOwnProperty",F="string",E="toLocaleString",D="RegExp",C='\", "',t="info",u="BROKEN_IE",r="isPrototypeOf",s="Date",p="",q="qx.Bootstrap",n="]",o="Class",v="error",w="[Class ",y="valueOf",x="Number",A="count",z="debug",B="ES5";
if(!window.qx){window.qx={};
}qx.Bootstrap={genericToString:function(){return w+this.classname+n;
},createNamespace:function(name,M){var O=name.split(k);
var parent=window;
var N=O[0];

for(var i=0,P=O.length-1;i<P;i++,N=O[i]){if(!parent[N]){parent=parent[N]={};
}else{parent=parent[N];
}}parent[N]=M;
return N;
},setDisplayName:function(Q,R,name){Q.displayName=R+k+name+e;
},setDisplayNames:function(S,T){for(var name in S){var U=S[name];

if(U instanceof Function){U.displayName=T+k+name+e;
}}},define:function(name,V){if(!V){var V={statics:{}};
}var bb;
var Y=null;
qx.Bootstrap.setDisplayNames(V.statics,name);

if(V.members||V.extend){qx.Bootstrap.setDisplayNames(V.members,name+b);
bb=V.construct||new Function;

if(V.extend){this.extendClass(bb,bb,V.extend,name,ba);
}var W=V.statics||{};
for(var i=0,bc=qx.Bootstrap.getKeys(W),l=bc.length;i<l;i++){var bd=bc[i];
bb[bd]=W[bd];
}Y=bb.prototype;
var X=V.members||{};
for(var i=0,bc=qx.Bootstrap.getKeys(X),l=bc.length;i<l;i++){var bd=bc[i];
Y[bd]=X[bd];
}}else{bb=V.statics||{};
}var ba=this.createNamespace(name,bb);
bb.name=bb.classname=name;
bb.basename=ba;
bb.$$type=o;
if(!bb.hasOwnProperty(m)){bb.toString=this.genericToString;
}if(V.defer){V.defer(bb,Y);
}qx.Bootstrap.$$registry[name]=V.statics;
return bb;
}};
qx.Bootstrap.define(q,{statics:{LOADSTART:qx.$$start||new Date(),DEBUG:(function(){var be=true;

if(qx.$$environment&&qx.$$environment["qx.debug"]===false){be=false;
}
if(qxvariants&&qxvariants["qx.debug"]=="off"){be=false;
}return be;
})(),createNamespace:qx.Bootstrap.createNamespace,define:qx.Bootstrap.define,setDisplayName:qx.Bootstrap.setDisplayName,setDisplayNames:qx.Bootstrap.setDisplayNames,genericToString:qx.Bootstrap.genericToString,extendClass:function(bf,bg,bh,name,bi){var bl=bh.prototype;
var bk=new Function;
bk.prototype=bl;
var bj=new bk;
bf.prototype=bj;
bj.name=bj.classname=name;
bj.basename=bi;
bg.base=bf.superclass=bh;
bg.self=bf.constructor=bj.constructor=bf;
},getByName:function(name){return qx.Bootstrap.$$registry[name];
},$$registry:{},objectGetLength:({"count":function(bm){return bm.__count__;
},"default":function(bn){var length=0;

for(var bo in bn){length++;
}return length;
}})[(({}).__count__==0)?A:j],objectMergeWith:function(bp,bq,br){if(br===undefined){br=true;
}
for(var bs in bq){if(br||bp[bs]===undefined){bp[bs]=bq[bs];
}}return bp;
},__a:[r,G,E,m,y,I],getKeys:({"ES5":Object.keys,"BROKEN_IE":function(bt){var bu=[];
var bw=Object.prototype.hasOwnProperty;

for(var bx in bt){if(bw.call(bt,bx)){bu.push(bx);
}}var bv=qx.Bootstrap.__a;

for(var i=0,a=bv,l=a.length;i<l;i++){if(bw.call(bt,a[i])){bu.push(a[i]);
}}return bu;
},"default":function(by){var bz=[];
var bA=Object.prototype.hasOwnProperty;

for(var bB in by){if(bA.call(by,bB)){bz.push(bB);
}}return bz;
}})[typeof (Object.keys)==
L?B:
(function(){for(var bC in {toString:1}){return bC;
}})()!==m?u:j],getKeysAsString:function(bD){var bE=qx.Bootstrap.getKeys(bD);

if(bE.length==0){return p;
}return g+bE.join(C)+g;
},__b:{"[object String]":d,"[object Array]":f,"[object Object]":h,"[object RegExp]":D,"[object Number]":x,"[object Boolean]":K,"[object Date]":s,"[object Function]":c,"[object Error]":J},bind:function(bF,self,bG){var bH=Array.prototype.slice.call(arguments,2,arguments.length);
return function(){var bI=Array.prototype.slice.call(arguments,0,arguments.length);
return bF.apply(self,bH.concat(bI));
};
},firstUp:function(bJ){return bJ.charAt(0).toUpperCase()+bJ.substr(1);
},firstLow:function(bK){return bK.charAt(0).toLowerCase()+bK.substr(1);
},getClass:function(bL){var bM=Object.prototype.toString.call(bL);
return (qx.Bootstrap.__b[bM]||bM.slice(8,-1));
},isString:function(bN){return (bN!==null&&(typeof bN===F||qx.Bootstrap.getClass(bN)==d||bN instanceof String||(!!bN&&!!bN.$$isString)));
},isArray:function(bO){return (bO!==null&&(bO instanceof Array||(bO&&qx.data&&qx.data.IListData&&qx.Bootstrap.hasInterface(bO.constructor,qx.data.IListData))||qx.Bootstrap.getClass(bO)==f||(!!bO&&!!bO.$$isArray)));
},isObject:function(bP){return (bP!==undefined&&bP!==null&&qx.Bootstrap.getClass(bP)==h);
},isFunction:function(bQ){return qx.Bootstrap.getClass(bQ)==c;
},classIsDefined:function(name){return qx.Bootstrap.getByName(name)!==undefined;
},getPropertyDefinition:function(bR,name){while(bR){if(bR.$$properties&&bR.$$properties[name]){return bR.$$properties[name];
}bR=bR.superclass;
}return null;
},hasProperty:function(bS,name){return !!qx.Bootstrap.getPropertyDefinition(bS,name);
},getEventType:function(bT,name){var bT=bT.constructor;

while(bT.superclass){if(bT.$$events&&bT.$$events[name]!==undefined){return bT.$$events[name];
}bT=bT.superclass;
}return null;
},supportsEvent:function(bU,name){return !!qx.Bootstrap.getEventType(bU,name);
},getByInterface:function(bV,bW){var bX,i,l;

while(bV){if(bV.$$implements){bX=bV.$$flatImplements;

for(i=0,l=bX.length;i<l;i++){if(bX[i]===bW){return bV;
}}}bV=bV.superclass;
}return null;
},hasInterface:function(bY,ca){return !!qx.Bootstrap.getByInterface(bY,ca);
},getMixins:function(cb){var cc=[];

while(cb){if(cb.$$includes){cc.push.apply(cc,cb.$$flatIncludes);
}cb=cb.superclass;
}return cc;
},$$logs:[],debug:function(cd,ce){qx.Bootstrap.$$logs.push([z,arguments]);
},info:function(cf,cg){qx.Bootstrap.$$logs.push([t,arguments]);
},warn:function(ch,ci){qx.Bootstrap.$$logs.push([H,arguments]);
},error:function(cj,ck){qx.Bootstrap.$$logs.push([v,arguments]);
},trace:function(cl){}}});
})();
(function(){var j="",i="10.1",h="10.3",g="10.7",f="10.5",e="95",d="10.2",c="98",b="2000",a="10.6",T="10.0",S="10.4",R="2003",Q=")",P="iPhone",O="android",N="unix",M="ce",L="7",K="SymbianOS",q="MacPPC",r="iPod",o="\.",p="Win64",m="linux",n="me",k="Macintosh",l="Android",s="Windows",t="ios",A="vista",y="(",E="win",C="Linux",G="BSD",F="iPad",v="X11",J="xp",I="symbian",H="qx.bom.client.OperatingSystem",u="g",w="Win32",x="osx",z="|",B="nt4",D="MacIntel";
qx.Bootstrap.define(H,{statics:{getName:function(){var U=navigator&&navigator.platform;

if(!U){return j;
}
if(U.indexOf(s)!=-1||U.indexOf(w)!=-1||U.indexOf(p)!=-1){return E;
}else if(U.indexOf(k)!=-1||U.indexOf(q)!=-1||U.indexOf(D)!=-1){return x;
}else if(U.indexOf(r)!=-1||U.indexOf(P)!=-1||U.indexOf(F)!=-1){return t;
}else if(U.indexOf(C)!=-1){return m;
}else if(U.indexOf(v)!=-1||U.indexOf(G)!=-1){return N;
}else if(U.indexOf(l)!=-1){return O;
}else if(U.indexOf(K)!=-1){return I;
}return j;
},__e:{"Windows NT 6.1":L,"Windows NT 6.0":A,"Windows NT 5.2":R,"Windows NT 5.1":J,"Windows NT 5.0":b,"Windows 2000":b,"Windows NT 4.0":B,"Win 9x 4.90":n,"Windows CE":M,"Windows 98":c,"Win98":c,"Windows 95":e,"Win95":e,"Mac OS X 10_7":g,"Mac OS X 10.7":g,"Mac OS X 10_6":a,"Mac OS X 10.6":a,"Mac OS X 10_5":f,"Mac OS X 10.5":f,"Mac OS X 10_4":S,"Mac OS X 10.4":S,"Mac OS X 10_3":h,"Mac OS X 10.3":h,"Mac OS X 10_2":d,"Mac OS X 10.2":d,"Mac OS X 10_1":i,"Mac OS X 10.1":i,"Mac OS X 10_0":T,"Mac OS X 10.0":T},getVersion:function(){var X=[];

for(var W in this.__e){X.push(W);
}var Y=new RegExp(y+X.join(z).replace(/\./g,o)+Q,u);
var V=Y.exec(navigator.userAgent);

if(V&&V[1]){return qx.bom.client.OperatingSystem.__e[V[1]];
}return j;
}}});
})();
(function(){var n="-",m="",l="qx.bom.client.Locale",k="LOCALE",j="\n",h="VARIANT",g="Please check the API documentation of qx.core.Environment.",f="android",e="\nTrace:",d="' of '",a="'is deprecated: ",b="The constant '";
qx.Bootstrap.define(l,{statics:{LOCALE:"",VARIANT:"",getLocale:function(){var o=qx.bom.client.Locale.__f();
var p=o.indexOf(n);

if(p!=-1){o=o.substr(0,p);
}return o;
},getVariant:function(){var q=qx.bom.client.Locale.__f();
var s=m;
var r=q.indexOf(n);

if(r!=-1){s=q.substr(r+1);
}return s;
},__f:function(){var t=(navigator.userLanguage||navigator.language||m);
if(qx.bom.client.OperatingSystem.getName()==f){var u=/(\w{2})-(\w{2})/i.exec(navigator.userAgent);

if(u){t=u[0];
}}return t.toLowerCase();
}},defer:function(v){v.LOCALE=v.getLocale();
v.VARIANT=v.getVariant();
if(qx.Bootstrap.DEBUG){var w=[k,h];

for(var i=0;i<w.length;i++){if(v.__defineGetter__){var x=v[w[i]];
v.__defineGetter__(w[i],qx.Bootstrap.bind(function(y,c){var z=b+y+d+v.classname+a+g;

if(qx.dev&&qx.dev.StackTrace){z+=e+qx.dev.StackTrace.getStackTrace().join(j);
}qx.Bootstrap.warn(z);
return c;
},v,w[i],x));
}}}}});
})();
(function(){var l="",k="audio",j="video",i='video/ogg; codecs="theora, vorbis"',h="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",g="http://www.w3.org/TR/SVG11/feature#BasicStructure",f='audio',d='video/mp4; codecs="avc1.42E01E, mp4a.40.2"',c="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",b="audio/mpeg",z="org.w3c.dom.svg",y="DOMTokenList",x="1.1",w="audio/x-wav",u="audio/ogg",t="audio/x-aiff",s="qx.bom.client.Html",r='video',q="mshtml",p="label",n='video/webm; codecs="vp8, vorbis"',o="1.0",m="audio/basic";
qx.Bootstrap.define(s,{statics:{getWebWorker:function(){return window.Worker!=null;
},getGeoLocation:function(){return navigator.geolocation!=null;
},getAudio:function(){return !!document.createElement(f).canPlayType;
},getAudioOgg:function(){if(!qx.bom.client.Html.getAudio()){return l;
}var a=document.createElement(k);
return a.canPlayType(u);
},getAudioMp3:function(){if(!qx.bom.client.Html.getAudio()){return l;
}var a=document.createElement(k);
return a.canPlayType(b);
},getAudioWav:function(){if(!qx.bom.client.Html.getAudio()){return l;
}var a=document.createElement(k);
return a.canPlayType(w);
},getAudioAu:function(){if(!qx.bom.client.Html.getAudio()){return l;
}var a=document.createElement(k);
return a.canPlayType(m);
},getAudioAif:function(){if(!qx.bom.client.Html.getAudio()){return l;
}var a=document.createElement(k);
return a.canPlayType(t);
},getVideo:function(){return !!document.createElement(r).canPlayType;
},getVideoOgg:function(){if(!qx.bom.client.Html.getVideo()){return l;
}var v=document.createElement(j);
return v.canPlayType(i);
},getVideoH264:function(){if(!qx.bom.client.Html.getVideo()){return l;
}var v=document.createElement(j);
return v.canPlayType(d);
},getVideoWebm:function(){if(!qx.bom.client.Html.getVideo()){return l;
}var v=document.createElement(j);
return v.canPlayType(n);
},getLocalStorage:function(){try{return window.localStorage!=null;
}catch(A){return false;
}},getSessionStorage:function(){try{return window.sessionStorage!=null;
}catch(B){return false;
}},getClassList:function(){return !!(document.documentElement.classList&&qx.Bootstrap.getClass(document.documentElement.classList)===y);
},getXPath:function(){return !!document.evaluate;
},getXul:function(){try{document.createElementNS(h,p);
return true;
}catch(e){return false;
}},getSvg:function(){return document.implementation&&document.implementation.hasFeature&&(document.implementation.hasFeature(z,o)||document.implementation.hasFeature(g,x));
},getVml:function(){return qx.bom.client.Engine.getName()==q;
},getCanvas:function(){return !!window.CanvasRenderingContext2D;
},getDataUrl:function(C){var D=new Image();
D.onload=D.onerror=function(){window.setTimeout(function(){C.call(null,(D.width==1&&D.height==1));
},0);
};
D.src=c;
}}});
})();
(function(){var k="xhr",j="Microsoft.XMLHTTP",i="",h="file:",g="https:",f="webkit",e="gecko",d="activex",c="opera",b=".",a="qx.bom.client.Transport";
qx.Bootstrap.define(a,{statics:{getMaxConcurrentRequestCount:function(){var l;
var o=qx.bom.client.Engine.getVersion().split(b);
var m=0;
var p=0;
var n=0;
if(o[0]){m=o[0];
}if(o[1]){p=o[1];
}if(o[2]){n=o[2];
}if(window.maxConnectionsPerServer){l=window.maxConnectionsPerServer;
}else if(qx.bom.client.Engine.getName()==c){l=8;
}else if(qx.bom.client.Engine.getName()==f){l=4;
}else if(qx.bom.client.Engine.getName()==e&&((m>1)||((m==1)&&(p>9))||((m==1)&&(p==9)&&(n>=1)))){l=6;
}else{l=2;
}return l;
},getSsl:function(){return window.location.protocol===g;
},getXmlHttpRequest:function(){var q=window.ActiveXObject?
(function(){if(window.location.protocol!==h){try{new window.XMLHttpRequest();
return k;
}catch(r){}}
try{new window.ActiveXObject(j);
return d;
}catch(s){}})():
(function(){try{new window.XMLHttpRequest();
return k;
}catch(t){}})();
return q||i;
}}});
})();
(function(){var p="",o="silverlight",n="wmv",m="mshtml",l="quicktime",k="divx",j="Windows Media",h="qx.bom.client.Plugin",g="WMPlayer.OCX.7",f="Silverlight",c="QuickTimeCheckObject.QuickTimeCheck.1",e="QuickTime",d="npdivx.DivXBrowserPlugin.1",b="DivX Web Player",a="AgControl.AgControl";
qx.Bootstrap.define(h,{statics:{getGears:function(){return !!(window.google&&window.google.gears);
},__g:{quicktime:{plugin:e,control:c},wmv:{plugin:j,control:g},divx:{plugin:b,control:d},silverlight:{plugin:f,control:a}},getQuicktimeVersion:function(){var q=qx.bom.client.Plugin.__g[l];
return qx.bom.client.Plugin.__h(q.control,q.plugin);
},getWindowsMediaVersion:function(){var r=qx.bom.client.Plugin.__g[n];
return qx.bom.client.Plugin.__h(r.control,r.plugin);
},getDivXVersion:function(){var s=qx.bom.client.Plugin.__g[k];
return qx.bom.client.Plugin.__h(s.control,s.plugin);
},getSilverlightVersion:function(){var t=qx.bom.client.Plugin.__g[o];
return qx.bom.client.Plugin.__h(t.control,t.plugin);
},getQuicktime:function(){var u=qx.bom.client.Plugin.__g[l];
return qx.bom.client.Plugin.__i(u.control,u.plugin);
},getWindowsMedia:function(){var v=qx.bom.client.Plugin.__g[n];
return qx.bom.client.Plugin.__i(v.control,v.plugin);
},getDivX:function(){var w=qx.bom.client.Plugin.__g[k];
return qx.bom.client.Plugin.__i(w.control,w.plugin);
},getSilverlight:function(){var x=qx.bom.client.Plugin.__g[o];
return qx.bom.client.Plugin.__i(x.control,x.plugin);
},__h:function(y,z){var A=qx.bom.client.Plugin.__i(y,z);
if(!A){return p;
}if(qx.bom.client.Engine.getName()==m){var B=new ActiveXObject(y);

try{var E=B.versionInfo;

if(E!=undefined){return E;
}E=B.version;

if(E!=undefined){return E;
}E=B.settings.version;

if(E!=undefined){return E;
}}catch(G){return p;
}return p;
}else{var F=navigator.plugins;
var D=/([0-9]\.[0-9])/g;

for(var i=0;i<F.length;i++){var C=F[i];

if(C.name.indexOf(z)!==-1){if(D.test(C.name)||D.test(C.description)){return RegExp.$1;
}else{return p;
}return p;
}}}},__i:function(H,I){if(qx.bom.client.Engine.getName()==m){var J=window.ActiveXObject;

if(!J){return false;
}
try{new ActiveXObject(H);
}catch(L){return false;
}return true;
}else{var K=navigator.plugins;

if(!K){return false;
}var name;

for(var i=0;i<K.length;i++){name=K[i].name;

if(name.indexOf(I)!==-1){return true;
}}return false;
}}}});
})();
(function(){var l="",k="function",j="gecko",h=".",g="[object Opera]",f="[^\\.0-9]",e="4.0",d="\nTrace:",b="1.9.0.0",a="WEBKIT",I="Please check the API documentation of qx.core.Environment.",H="9.0",G="UNKNOWN_VERSION",F="GECKO",E="8.0",D="FULLVERSION",C="Gecko",B="OPERA",A="AppleWebKit/",z="'is deprecated: ",s="NAME",t="UNKNOWN_ENGINE",q="MSHTML",r="VERSION",o="DOCUMENT_MODE",p="' of '",m="opera",n="mshtml",u="\n",v="The constant '",x="webkit",w="5.0",y="qx.bom.client.Engine";
qx.Bootstrap.define(y,{statics:{NAME:"",FULLVERSION:"0.0.0",VERSION:0.0,OPERA:false,WEBKIT:false,GECKO:false,MSHTML:false,UNKNOWN_ENGINE:false,UNKNOWN_VERSION:false,DOCUMENT_MODE:null,getVersion:function(){var M=window.navigator.userAgent;
var K=l;

if(qx.bom.client.Engine.__j()){if(/Opera[\s\/]([0-9]+)\.([0-9])([0-9]*)/.test(M)){K=RegExp.$1+h+RegExp.$2;

if(RegExp.$3!=l){K+=h+RegExp.$3;
}}}else if(qx.bom.client.Engine.__k()){if(/AppleWebKit\/([^ ]+)/.test(M)){K=RegExp.$1;
var L=RegExp(f).exec(K);

if(L){K=K.slice(0,L.index);
}}}else if(qx.bom.client.Engine.__l()){if(/rv\:([^\);]+)(\)|;)/.test(M)){K=RegExp.$1;
}}else if(qx.bom.client.Engine.__m()){if(/MSIE\s+([^\);]+)(\)|;)/.test(M)){K=RegExp.$1;
if(K<8&&/Trident\/([^\);]+)(\)|;)/.test(M)){if(RegExp.$1==e){K=E;
}else if(RegExp.$1==w){K=H;
}}}}else{var J=window.qxFail;

if(J&&typeof J===k){K=J().FULLVERSION;
}else{K=b;
qx.Bootstrap.warn("Unsupported client: "+M+"! Assumed gecko version 1.9.0.0 (Firefox 3.0).");
}}return K;
},getName:function(){var name;

if(qx.bom.client.Engine.__j()){name=m;
}else if(qx.bom.client.Engine.__k()){name=x;
}else if(qx.bom.client.Engine.__l()){name=j;
}else if(qx.bom.client.Engine.__m()){name=n;
}else{var N=window.qxFail;

if(N&&typeof N===k){name=N().NAME;
}else{name=j;
qx.Bootstrap.warn("Unsupported client: "+window.navigator.userAgent+"! Assumed gecko version 1.9.0.0 (Firefox 3.0).");
}}return name;
},__j:function(){return window.opera&&Object.prototype.toString.call(window.opera)==g;
},__k:function(){return window.navigator.userAgent.indexOf(A)!=-1;
},__l:function(){return window.controllers&&window.navigator.product===C;
},__m:function(){return window.navigator.cpuClass&&/MSIE\s+([^\);]+)(\)|;)/.test(window.navigator.userAgent);
}},defer:function(O){O.NAME=O.getName();
O.FULLVERSION=O.getVersion();

if(O.FULLVERSION==l){O.UNKNOWN_VERSION=true;
}
if(O.__j()){O.OPERA=true;

if(O.FULLVERSION==l){O.FULLVERSION="9.6.0";
}}else if(O.__k()){O.WEBKIT=true;

if(O.FULLVERSION==l){O.FULLVERSION="525.26";
}}else if(O.__l()){O.GECKO=true;

if(O.FULLVERSION==l){O.FULLVERSION="1.9.0.0";
}}else if(O.__m()){O.MSHTML=true;

if(document.documentMode){O.DOCUMENT_MODE=document.documentMode;
}}else{var P=window.qxFail;

if(P&&typeof P===k){if(P().NAME){O[P().NAME.toUpperCase()]=true;
}}else{O.GECKO=true;
O.UNKNOWN_ENGINE=true;
O.UNKNOWN_VERSION=true;
}}O.VERSION=parseFloat(O.FULLVERSION);
if(qx.Bootstrap.DEBUG){var Q=[s,D,r,B,a,F,q,t,G,o];

for(var i=0;i<Q.length;i++){if(O.__defineGetter__){var R=O[Q[i]];
O.__defineGetter__(Q[i],qx.Bootstrap.bind(function(S,c){var T=v+S+p+O.classname+z+I;

if(qx.dev&&qx.dev.StackTrace){T+=d+qx.dev.StackTrace.getStackTrace().join(u);
}qx.Bootstrap.warn(T);
return c;
},O,Q[i],R));
}}}}});
})();
(function(){var l="",k="mshtml",j="msie",h=")(/| )([0-9]+\.[0-9])",g="(",f="ce",e="CSS1Compat",d="android",b="operamini",a="\nTrace:",M="'is deprecated: ",L="Please check the API documentation of qx.core.Environment.",K="mobile chrome",J="iemobile",I="FULLVERSION",H="opera mobi",G="Mobile Safari",F="UNKNOWN",E="operamobile",D="ie",s="mobile safari",t="IEMobile|Maxthon|MSIE",q="NAME",r="qx.bom.client.Browser",o="opera mini",p="VERSION",m="' of '",n="opera",u="TITLE",v="\n",y="Opera Mini|Opera Mobi|Opera",x="AdobeAIR|Titanium|Fluid|Chrome|Android|Epiphany|Konqueror|iCab|OmniWeb|Maxthon|Pre|Mobile Safari|Safari",A="The constant '",z="webkit",C="5.0",B="prism|Fennec|Camino|Kmeleon|Galeon|Netscape|SeaMonkey|Firefox",w="Mobile/";
qx.Bootstrap.define(r,{statics:{UNKNOWN:true,NAME:"unknown",TITLE:"unknown 0.0",VERSION:0.0,FULLVERSION:"0.0.0",getName:function(){var Q=navigator.userAgent;
var P=new RegExp(g+qx.bom.client.Browser.__n+h);
var O=Q.match(P);

if(!O){return l;
}var name=O[1].toLowerCase();
var N=qx.bom.client.Engine.getName();

if(N===z){if(name===d){name=K;
}else if(Q.indexOf(G)!==-1||Q.indexOf(w)!==-1){name=s;
}}else if(N===k){if(name===j){name=D;
if(qx.bom.client.OperatingSystem.getVersion()===f){name=J;
}}}else if(N===n){if(name===H){name=E;
}else if(name===o){name=b;
}}return name;
},getVersion:function(){var U=navigator.userAgent;
var T=new RegExp(g+qx.bom.client.Browser.__n+h);
var S=U.match(T);

if(!S){return l;
}var name=S[1].toLowerCase();
var R=S[3];
if(U.match(/Version(\/| )([0-9]+\.[0-9])/)){R=RegExp.$2;
}
if(qx.bom.client.Engine.getName()==k){R=qx.bom.client.Engine.getVersion();

if(name===j&&qx.bom.client.OperatingSystem.getVersion()==f){R=C;
}}return R;
},getDocumentMode:function(){if(document.documentMode){return document.documentMode;
}return 0;
},getQuirksMode:function(){if(qx.bom.client.Engine.getName()==k&&parseFloat(qx.bom.client.Engine.getVersion())>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;
}else{return document.compatMode!==e;
}},__n:{"webkit":x,"gecko":B,"mshtml":t,"opera":y}[qx.bom.client.Engine.getName()]},defer:function(V){V.NAME=V.getName();
V.FULLVERSION=V.getVersion();
V.VERSION=parseFloat(V.FULLVERSION);
V.TITLE=V.NAME+" "+V.VERSION;

if(V.NAME!==l){V.UNKNOWN=false;
}if(qx.Bootstrap.DEBUG){var W=[I,p,q,u,F];

for(var i=0;i<W.length;i++){if(V.__defineGetter__){var X=V[W[i]];
V.__defineGetter__(W[i],qx.Bootstrap.bind(function(Y,c){var ba=A+Y+m+V.classname+M+L;

if(qx.dev&&qx.dev.StackTrace){ba+=a+qx.dev.StackTrace.getStackTrace().join(v);
}qx.Bootstrap.warn(ba);
return c;
},V,W[i],X));
}}}}});
})();
(function(){var k="background",j="linear-gradient(0deg, white 0%, red 100%)",h="placeholder",g="content",f="div",e="OTextOverflow",d="MozBorderRadius",c="qx.bom.client.Css",b='m11',a="input",x="-moz-linear-gradient(0deg, white 0%, red 100%)",w="gradient",v="MozBoxShadow",u="-o-linear-gradient(0deg, white 0%, red 100%)",t="borderRadius",s='WebKitCSSMatrix',r="WebkitBorderRadius",q="-webkit-gradient(linear,0% 0%,100% 100%,from(white), to(red))",p="mshtml",o="WebkitBoxShadow",m="textOverflow",n="boxShadow",l="border";
qx.Bootstrap.define(c,{statics:{getBoxModel:function(){var content=qx.bom.client.Engine.getName()!==p||!qx.bom.client.Browser.getQuirksMode();
return content?g:l;
},getTextOverflow:function(){return m in document.documentElement.style||e in document.documentElement.style;
},getPlaceholder:function(){var i=document.createElement(a);
return h in i;
},getBorderRadius:function(){return t in document.documentElement.style||d in document.documentElement.style||r in document.documentElement.style;
},getBoxShadow:function(){return n in document.documentElement.style||v in document.documentElement.style||o in document.documentElement.style;
},getTranslate3d:function(){return s in window&&b in new WebKitCSSMatrix();
},getGradients:function(){var y;

try{y=document.createElement(f);
}catch(A){y=document.createElement();
}var z=[q,x,u,j];

for(var i=0;i<z.length;i++){try{y.style[k]=z[i];

if(y.style[k].indexOf(w)!=-1){return true;
}}catch(B){}}return false;
}}});
})();
(function(){var c="notification",b="PhoneGap",a="qx.bom.client.PhoneGap";
qx.Bootstrap.define(a,{statics:{getPhoneGap:function(){return b in window;
},getNotification:function(){return c in navigator;
}}});
})();
(function(){var l=".",k="$1",j="",h="object",g="Shockwave Flash",f="undefined",e="REVISION",d="qx.bom.client.Flash",b="\nTrace:",a="ShockwaveFlash.ShockwaveFlash.7",H="STRICT_SECURITY_MODEL",G="osx",F="FULLVERSION",E="10.0.12",D="'is deprecated: ",C="win",B="ShockwaveFlash.ShockwaveFlash.6",A="VERSION",z="$version",y="' of '",s="EXPRESSINSTALL",t="6.0.65",q="mshtml",r="AVAILABLE",o="boolean",p="\n",m="always",n="Please check the API documentation of qx.core.Environment.",u="9.0.151",v="ShockwaveFlash.ShockwaveFlash",x="The constant '",w=",";
qx.Bootstrap.define(d,{statics:{AVAILABLE:false,FULLVERSION:"0.0.0",REVISION:"0",VERSION:0.0,EXPRESSINSTALL:false,STRICT_SECURITY_MODEL:false,isAvailable:function(){return parseFloat(qx.bom.client.Flash.getVersion())>0;
},getVersion:function(){if(qx.bom.client.Engine.getName()==q){if(!window.ActiveXObject){return j;
}var K=[0,0,0];
var J=false;

try{var L=new ActiveXObject(a);
}catch(N){try{var L=new ActiveXObject(B);
K=[6,0,21];
L.AllowScriptAccess=m;
}catch(O){if(K[0]==6){J=true;
}}
if(!J){try{L=new ActiveXObject(v);
}catch(P){}}}
if(!J&&typeof L==h){var I=L.GetVariable(z);

if(typeof I!=f){I=I.split(" ")[1].split(w);
K[0]=parseInt(I[0],10);
K[1]=parseInt(I[1],10);
K[2]=parseInt(I[2],10);
}}return K.join(l);
}else{if(!navigator.plugins||typeof navigator.plugins[g]!==h){return j;
}var K=[0,0,0];
var M=navigator.plugins[g].description;

if(typeof M!=f){M=M.replace(/^.*\s+(\S+\s+\S+$)/,k);
K[0]=parseInt(M.replace(/^(.*)\..*$/,k),10);
K[1]=parseInt(M.replace(/^.*\.(.*)\s.*$/,k),10);
K[2]=/r/.test(M)?parseInt(M.replace(/^.*r(.*)$/,k),10):0;
}return K.join(l);
}},getExpressInstall:function(){var R=qx.bom.client.Flash.getVersion();

if(R==j){return false;
}var Q=qx.bom.client.OperatingSystem.getName();
return (Q==C||Q==G)&&qx.bom.client.Flash.__o(t,R);
},getStrictSecurityModel:function(){var S=qx.bom.client.Flash.getVersion();

if(S==j){return false;
}var T=S.split(l);

if(T[0]<10){return qx.bom.client.Flash.__o(u,S);
}else{return qx.bom.client.Flash.__o(E,S);
}},_cachedSupportsVersion:{},supportsVersion:function(U){if(typeof this._cachedSupportsVersion[U]===o){return this._cachedSupportsVersion[U];
}else{var X=U.split(l);
var W=this.FULLVERSION.split(l);

for(var i=0;i<X.length;i++){var V=parseInt(W[i],10)-parseInt(X[i],10);

if(V>0){return (this._cachedSupportsVersion[U]=true);
}else if(V<0){return (this._cachedSupportsVersion[U]=false);
}}return (this._cachedSupportsVersion[U]=true);
}},__o:function(Y,ba){var bd=Y.split(l);
var bc=ba||qx.bom.client.Flash.getVersion();
bc=bc.split(l);

for(var i=0;i<bd.length;i++){var bb=parseInt(bc[i],10)-parseInt(bd[i],10);

if(bb>0){return true;
}else if(bb<0){return false;
}}return true;
}},defer:function(be){be.FULLVERSION=be.getVersion();
be.VERSION=parseFloat(be.FULLVERSION);
be.AVAILABLE=be.isAvailable();
var bh=be.FULLVERSION.split(l);
be.REVISION=bh[bh.length-1];
be.STRICT_SECURITY_MODEL=be.getStrictSecurityModel();
be.EXPRESSINSTALL=be.getExpressInstall();
if(qx.Bootstrap.DEBUG){var bf=[F,A,r,e,H,s];

for(var i=0;i<bf.length;i++){if(be.__defineGetter__){var bg=be[bf[i]];
be.__defineGetter__(bf[i],qx.Bootstrap.bind(function(bi,c){var bj=x+bi+y+be.classname+D+n;

if(qx.dev&&qx.dev.StackTrace){bj+=b+qx.dev.StackTrace.getStackTrace().join(p);
}qx.Bootstrap.warn(bj);
return c;
},be,bf[i],bg));
}}}}});
})();
(function(){var a="qx.bom.client.EcmaScript";
qx.Bootstrap.define(a,{statics:{getObjectCount:function(){return (({}).__count__==0);
}}});
})();
(function(){var m="ipod",l="g",k="xbox",j="pc",i="\.",h="(",g=")",f="iPhone",e="|",d="qx.bom.client.Device",a="wii",c="ipad",b="ds";
qx.Bootstrap.define(d,{statics:{__p:{"iPod":m,"iPad":c,"iPhone":f,"PSP":"psp","PLAYSTATION 3":"ps3","Nintendo Wii":a,"Nintendo DS":b,"XBOX":"xbox","Xbox":k},getName:function(){var p=[];

for(var o in this.__p){p.push(o);
}var q=new RegExp(h+p.join(e).replace(/\./g,i)+g,l);
var n=q.exec(navigator.userAgent);

if(n&&n[1]){return qx.bom.client.Device.__p[n[1]];
}return j;
}}});
})();
(function(){var e="qx.bom.client.Event",d="ontouchstart",c="mshtml",b="opera",a="pointerEvents";
qx.Bootstrap.define(e,{statics:{getTouch:function(){return (d in window);
},getPointer:function(){if(a in document.documentElement.style){var f=qx.bom.client.Engine.getName();
return f!=b&&f!=c;
}return false;
}}});
})();
(function(){var o="on",n="off",m="os.name",l="html.storage.local",k="plugin.silverlight.version",j="os.version",h="html.xul",g="plugin.windowsmedia.version",f="html.video.ogg",e="default",bF="html.xpath",bE="plugin.flash.express",bD="plugin.windowsmedia",bC="html.webworker",bB="phonegap",bA="browser.quirksmode",bz="browser.name",by="plugin.silverlight",bx="event.pointer",bw="qx.aspects",v="plugin.gears",w="io.ssl",t="css.translate3d",u="html.classlist",r="locale.variant",s="css.textoverflow",p="qx.debug",q="html.video",D="plugin.flash",E="css.boxshadow",W="event.touch",S="html.storage.session",bf="plugin.divx",ba="css.boxmodel",br="plugin.flash.version",bl="qx.allowUrlSettings",L="css.gradients",bv="browser.documentmode",bt="html.vml",bs="html.canvas",J="html.audio",O="html.audio.mp3",Q="css.borderradius",U="ecmascript.objectcount",X="locale",bb="html.audio.au",bh="html.geolocation",bn="qx.mobile.emulatetouch",x="qx.dynlocale",y="plugin.quicktime",N="engine.version",be="io.maxrequests",bd="engine.name",bc="html.audio.aif",bj="html.audio.ogg",bi="qx.mobile.nativescroll",Y="plugin.divx.version",bg="html.video.h264",a="css.placeholder",bm="plugin.quicktime.version",z="|",A="browser.version",T="io.xhr",b="html.audio.wav",d="device.name",I="phonegap.notification",B="html.svg",C="html.dataurl",G="html.video.webm",V="plugin.flash.strictsecurity",bp="qx.core.Environment",bo="qx.debug.databinding",P="true",bq="qxenv",K="qx.propertyDebugLevel",bk="qx.dynamicmousewheel",F=":",H="false",c="&",R="qx.allowUrlVariants",M="qx.bom.htmlarea.HtmlArea.debug",bu="qx.globalErrorHandling";
qx.Bootstrap.define(bp,{statics:{_checks:{},_asyncChecks:{},__q:{},get:function(bG){if(this.__q[bG]!=undefined){return this.__q[bG];
}var bH=this._checks[bG];

if(bH){var bI=bH();
this.__q[bG]=bI;
return bI;
}if(qx.Bootstrap.DEBUG){qx.Bootstrap.warn(bG+" is not a valid key. Please see the API-doc of "+"qx.core.Environment for a list of predefined keys.");
qx.Bootstrap.trace(this);
}},getAsync:function(bJ,bK,self){var bM=this;

if(this.__q[bJ]!=undefined){window.setTimeout(function(){bK.call(self,bM.__q[bJ]);
},0);
return;
}var bL=this._asyncChecks[bJ];

if(bL){bL(function(bN){bM.__q[bJ]=bN;
bK.call(self,bN);
});
return;
}if(qx.Bootstrap.DEBUG){qx.Bootstrap.warn(bJ+" is not a valid key. Please see the API-doc of "+"qx.core.Environment for a list of predefined keys.");
qx.Bootstrap.trace(this);
}},select:function(bO,bP){return this.__r(this.get(bO),bP);
},selectAsync:function(bQ,bR,self){this.getAsync(bQ,function(bS){var bT=this.__r(bQ,bR);
bT.call(self,bS);
},this);
},__r:function(bU,bV){var bX=bV[bU];

if(bV.hasOwnProperty(bU)){return bX;
}for(var bW in bV){if(bW.indexOf(z)!=-1){var bY=bW.split(z);

for(var i=0;i<bY.length;i++){if(bY[i]==bU){return bV[bW];
}}}}if(bX===true&&bV[o]!=undefined){if(qx.Bootstrap.DEBUG){qx.Bootstrap.warn("The check '"+bU+"' is a boolean value. "+"Please change your select map from 'on' to 'true'.");
qx.Bootstrap.trace(this);
}return bV[o];
}if(bX===false&&bV[n]!=undefined){if(qx.Bootstrap.DEBUG){qx.Bootstrap.warn("The check '"+bU+"' is a boolean value. "+"Please change your select map from 'off' to 'false'.");
qx.Bootstrap.trace(this);
}return bV[n];
}
if(bV[e]!==undefined){return bV[e];
}
if(qx.Bootstrap.DEBUG){throw new Error('No match for variant "'+bU+'" ('+(typeof bU)+' type)'+' in variants ['+qx.Bootstrap.getKeysAsString(bV)+'] found, and no default ("default") given');
}},invalidateCacheKey:function(ca){delete this.__q[ca];
},add:function(cb,cc){if(this._checks[cb]==undefined){if(cc instanceof Function){this._checks[cb]=cc;
}else{this._checks[cb]=this.__u(cc);
}}},addAsync:function(cd,ce){if(this._checks[cd]==undefined){this._asyncChecks[cd]=ce;
}},_initDefaultQxValues:function(){this.add(bl,function(){return false;
});
this.add(R,function(){return false;
});
this.add(K,function(){return 0;
});
this.add(p,function(){return true;
});
this.add(bw,function(){return false;
});
this.add(x,function(){return true;
});
this.add(bn,function(){return false;
});
this.add(bi,function(){return false;
});
this.add(bk,function(){return true;
});
this.add(bo,function(){return false;
});
},__s:function(){if(window.qxsettings){for(var cg in window.qxsettings){var cf=window.qxsettings[cg];

if(cg==M||cg==bu){if(cf==o){cf=true;
}else if(cf==n){cf=false;
}}this._checks[cg]=this.__u(cf);
}}if(window.qxvariants){for(var cg in window.qxvariants){var cf=window.qxvariants[cg];

if(cg==bw||cg==p||cg==x||cg==bn||cg==bi){if(cf==o){cf=true;
}else if(cf==n){cf=false;
}}this._checks[cg]=this.__u(cf);
}}if(qx&&qx.$$environment){for(var cg in qx.$$environment){var cf=qx.$$environment[cg];
this._checks[cg]=this.__u(cf);
}}},__t:function(){if(window.document&&window.document.location){var ch=window.document.location.search.slice(1).split(c);

for(var i=0;i<ch.length;i++){var cj=ch[i].split(F);

if(cj.length!=3||cj[0]!=bq){continue;
}var ck=cj[1];
var ci=decodeURIComponent(cj[2]);
if(ci==P){ci=true;
}else if(ci==H){ci=false;
}else if(/^(\d|\.)+$/.test(ci)){ci=parseFloat(ci);
}this._checks[ck]=this.__u(ci);
}}},__u:function(cl){return qx.Bootstrap.bind(function(cm){return cm;
},null,cl);
},useCheck:function(cn){return true;
},_initChecksMap:function(){if(this.useCheck(N)){this._checks[N]=qx.bom.client.Engine.getVersion;
}
if(this.useCheck(bd)){this._checks[bd]=qx.bom.client.Engine.getName;
}if(this.useCheck(bz)){this._checks[bz]=qx.bom.client.Browser.getName;
}
if(this.useCheck(A)){this._checks[A]=qx.bom.client.Browser.getVersion;
}
if(this.useCheck(bv)){this._checks[bv]=qx.bom.client.Browser.getDocumentMode;
}
if(this.useCheck(bA)){this._checks[bA]=qx.bom.client.Browser.getQuirksMode;
}if(this.useCheck(d)){this._checks[d]=qx.bom.client.Device.getName;
}if(this.useCheck(X)){this._checks[X]=qx.bom.client.Locale.getLocale;
}
if(this.useCheck(r)){this._checks[r]=qx.bom.client.Locale.getVariant;
}if(this.useCheck(m)){this._checks[m]=qx.bom.client.OperatingSystem.getName;
}
if(this.useCheck(j)){this._checks[j]=qx.bom.client.OperatingSystem.getVersion;
}if(this.useCheck(v)){this._checks[v]=qx.bom.client.Plugin.getGears;
}
if(this.useCheck(y)){this._checks[y]=qx.bom.client.Plugin.getQuicktime;
}
if(this.useCheck(bm)){this._checks[bm]=qx.bom.client.Plugin.getQuicktimeVersion;
}
if(this.useCheck(bD)){this._checks[bD]=qx.bom.client.Plugin.getWindowsMedia;
}
if(this.useCheck(g)){this._checks[g]=qx.bom.client.Plugin.getWindowsMediaVersion;
}
if(this.useCheck(bf)){this._checks[bf]=qx.bom.client.Plugin.getDivX;
}
if(this.useCheck(Y)){this._checks[Y]=qx.bom.client.Plugin.getDivXVersion;
}
if(this.useCheck(by)){this._checks[by]=qx.bom.client.Plugin.getSilverlight;
}
if(this.useCheck(k)){this._checks[k]=qx.bom.client.Plugin.getSilverlightVersion;
}
if(this.useCheck(D)){this._checks[D]=qx.bom.client.Flash.isAvailable;
}
if(this.useCheck(br)){this._checks[br]=qx.bom.client.Flash.getVersion;
}
if(this.useCheck(bE)){this._checks[bE]=qx.bom.client.Flash.getExpressInstall;
}
if(this.useCheck(V)){this._checks[V]=qx.bom.client.Flash.getStrictSecurityModel;
}if(this.useCheck(be)){this._checks[be]=qx.bom.client.Transport.getMaxConcurrentRequestCount;
}
if(this.useCheck(w)){this._checks[w]=qx.bom.client.Transport.getSsl;
}
if(this.useCheck(T)){this._checks[T]=qx.bom.client.Transport.getXmlHttpRequest;
}if(this.useCheck(W)){this._checks[W]=qx.bom.client.Event.getTouch;
}
if(this.useCheck(bx)){this._checks[bx]=qx.bom.client.Event.getPointer;
}if(this.useCheck(U)){this._checks[U]=qx.bom.client.EcmaScript.getObjectCount;
}if(this.useCheck(bC)){this._checks[bC]=qx.bom.client.Html.getWebWorker;
}
if(this.useCheck(bh)){this._checks[bh]=qx.bom.client.Html.getGeoLocation;
}
if(this.useCheck(J)){this._checks[J]=qx.bom.client.Html.getAudio;
}
if(this.useCheck(bj)){this._checks[bj]=qx.bom.client.Html.getAudioOgg;
}
if(this.useCheck(O)){this._checks[O]=qx.bom.client.Html.getAudioMp3;
}
if(this.useCheck(b)){this._checks[b]=qx.bom.client.Html.getAudioWav;
}
if(this.useCheck(bb)){this._checks[bb]=qx.bom.client.Html.getAudioAu;
}
if(this.useCheck(bc)){this._checks[bc]=qx.bom.client.Html.getAudioAif;
}
if(this.useCheck(q)){this._checks[q]=qx.bom.client.Html.getVideo;
}
if(this.useCheck(f)){this._checks[f]=qx.bom.client.Html.getVideoOgg;
}
if(this.useCheck(bg)){this._checks[bg]=qx.bom.client.Html.getVideoH264;
}
if(this.useCheck(G)){this._checks[G]=qx.bom.client.Html.getVideoWebm;
}
if(this.useCheck(l)){this._checks[l]=qx.bom.client.Html.getLocalStorage;
}
if(this.useCheck(S)){this._checks[S]=qx.bom.client.Html.getSessionStorage;
}
if(this.useCheck(u)){this._checks[u]=qx.bom.client.Html.getClassList;
}
if(this.useCheck(bF)){this._checks[bF]=qx.bom.client.Html.getXPath;
}
if(this.useCheck(h)){this._checks[h]=qx.bom.client.Html.getXul;
}
if(this.useCheck(bs)){this._checks[bs]=qx.bom.client.Html.getCanvas;
}
if(this.useCheck(B)){this._checks[B]=qx.bom.client.Html.getSvg;
}
if(this.useCheck(bt)){this._checks[bt]=qx.bom.client.Html.getVml;
}
if(this.useCheck(C)){this._asyncChecks[C]=qx.bom.client.Html.getDataUrl;
}if(this.useCheck(s)){this._checks[s]=qx.bom.client.Css.getTextOverflow;
}
if(this.useCheck(a)){this._checks[a]=qx.bom.client.Css.getPlaceholder;
}
if(this.useCheck(Q)){this._checks[Q]=qx.bom.client.Css.getBorderRadius;
}
if(this.useCheck(E)){this._checks[E]=qx.bom.client.Css.getBoxShadow;
}
if(this.useCheck(L)){this._checks[L]=qx.bom.client.Css.getGradients;
}
if(this.useCheck(ba)){this._checks[ba]=qx.bom.client.Css.getBoxModel;
}
if(this.useCheck(t)){this._checks[t]=qx.bom.client.Css.getTranslate3d;
}if(this.useCheck(bB)){this._checks[bB]=qx.bom.client.PhoneGap.getPhoneGap;
}
if(this.useCheck(I)){this._checks[I]=qx.bom.client.PhoneGap.getNotification;
}}},defer:function(co){co._initDefaultQxValues();
co._initChecksMap();
co.__s();
if(co.get(bl)!=true){co.__t();
}}});
})();
(function(){var q="object",p="qx.debug",o="function",n="Mixin",m="qx.Mixin",k=".prototype",j="constructor",h="[Mixin ",g="]",f="members",c="destruct",e="events",d="properties",b="statics";
qx.Bootstrap.define(m,{statics:{define:function(name,r){if(r){if(r.include&&!(r.include instanceof Array)){r.include=[r.include];
}if(qx.core.Environment.get(p)){this.__d(name,r);
}var t=r.statics?r.statics:{};
qx.Bootstrap.setDisplayNames(t,name);

for(var s in t){if(t[s] instanceof Function){t[s].$$mixin=t;
}}if(r.construct){t.$$constructor=r.construct;
qx.Bootstrap.setDisplayName(r.construct,name,j);
}
if(r.include){t.$$includes=r.include;
}
if(r.properties){t.$$properties=r.properties;
}
if(r.members){t.$$members=r.members;
qx.Bootstrap.setDisplayNames(r.members,name+k);
}
for(var s in t.$$members){if(t.$$members[s] instanceof Function){t.$$members[s].$$mixin=t;
}}
if(r.events){t.$$events=r.events;
}
if(r.destruct){t.$$destructor=r.destruct;
qx.Bootstrap.setDisplayName(r.destruct,name,c);
}}else{var t={};
}t.$$type=n;
t.name=name;
t.toString=this.genericToString;
t.basename=qx.Bootstrap.createNamespace(name,t);
this.$$registry[name]=t;
return t;
},checkCompatibility:function(u){var x=this.flatten(u);
var y=x.length;

if(y<2){return true;
}var B={};
var A={};
var z={};
var w;

for(var i=0;i<y;i++){w=x[i];

for(var v in w.events){if(z[v]){throw new Error('Conflict between mixin "'+w.name+'" and "'+z[v]+'" in member "'+v+'"!');
}z[v]=w.name;
}
for(var v in w.properties){if(B[v]){throw new Error('Conflict between mixin "'+w.name+'" and "'+B[v]+'" in property "'+v+'"!');
}B[v]=w.name;
}
for(var v in w.members){if(A[v]){throw new Error('Conflict between mixin "'+w.name+'" and "'+A[v]+'" in member "'+v+'"!');
}A[v]=w.name;
}}return true;
},isCompatible:function(C,D){var E=qx.Bootstrap.getMixins(D);
E.push(C);
return qx.Mixin.checkCompatibility(E);
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(F){if(!F){return [];
}var G=F.concat();

for(var i=0,l=F.length;i<l;i++){if(F[i].$$includes){G.push.apply(G,this.flatten(F[i].$$includes));
}}return G;
},genericToString:function(){return h+this.name+g;
},$$registry:{},__c:qx.core.Environment.select(p,{"true":{"include":q,"statics":q,"members":q,"properties":q,"events":q,"destruct":o,"construct":o},"default":null}),__d:qx.core.Environment.select(p,{"true":function(name,H){var K=this.__c;

for(var J in H){if(!K[J]){throw new Error('The configuration key "'+J+'" in mixin "'+name+'" is not allowed!');
}
if(H[J]==null){throw new Error('Invalid key "'+J+'" in mixin "'+name+'"! The value is undefined/null!');
}
if(K[J]!==null&&typeof H[J]!==K[J]){throw new Error('Invalid type of key "'+J+'" in mixin "'+name+'"! The type of the key must be "'+K[J]+'"!');
}}var I=[b,f,d,e];

for(var i=0,l=I.length;i<l;i++){var J=I[i];

if(H[J]!==undefined&&(H[J] instanceof Array||H[J] instanceof RegExp||H[J] instanceof Date||H[J].classname!==undefined)){throw new Error('Invalid key "'+J+'" in mixin "'+name+'"! The value needs to be a map!');
}}if(H.include){for(var i=0,a=H.include,l=a.length;i<l;i++){if(a[i]==null){throw new Error("Includes of mixins must be mixins. The include number '"+(i+1)+"' in mixin '"+name+"'is undefined/null!");
}
if(a[i].$$type!==n){throw new Error("Includes of mixins must be mixins. The include number '"+(i+1)+"' in mixin '"+name+"'is not a mixin!");
}}this.checkCompatibility(H.include);
}},"default":function(){}})}});
})();
(function(){var j="qx.debug",h="&",g="qx.core.Setting",f="qx.allowUrlVariants",e="qx.propertyDebugLevel",d="qxsetting",c=":",b=".",a="qx.allowUrlSettings";
qx.Bootstrap.define(g,{statics:{__v:{},define:function(k,l){if(qx.core.Environment.get(j)){qx.Bootstrap.warn("The method 'qx.core.Setting.define' is deprecated: "+"Please use qx.core.Environment.add() instead.");
}this.defineDeprecated(k,l);
},defineDeprecated:function(m,n){if(n===undefined){throw new Error('Default value of setting "'+m+'" must be defined!');
}
if(!this.__v[m]){this.__v[m]={};
}else if(this.__v[m].defaultValue!==undefined){throw new Error('Setting "'+m+'" is already defined!');
}this.__v[m].defaultValue=n;
},get:function(o){if(qx.core.Environment.get(j)){qx.Bootstrap.warn("The method 'qx.core.Setting.get' is deprecated: "+"Please use qx.core.Environment.get() instead.");
}var p=this.__v[o];

if(p===undefined){throw new Error('Setting "'+o+'" is not defined.');
}
if(p.value!==undefined){return p.value;
}return p.defaultValue;
},set:function(q,r){if(qx.core.Environment.get(j)){qx.Bootstrap.warn("The method 'qx.core.Setting.set' is deprecated: "+"Please use qx.core.Environment.add() instead.");
}this.setDeprecated(q,r);
},setDeprecated:function(s,t){if((s.split(b)).length<2){throw new Error('Malformed settings key "'+s+'". Must be following the schema "namespace.key".');
}
if(!this.__v[s]){this.__v[s]={};
}this.__v[s].value=t;
},__w:function(){if(window.qxsettings){for(var u in window.qxsettings){this.setDeprecated(u,window.qxsettings[u]);
}window.qxsettings=undefined;

try{delete window.qxsettings;
}catch(v){}this.__x();
}},__x:function(){var x=document.location.search.slice(1).split(h);

for(var i=0;i<x.length;i++){var w=x[i].split(c);

if(w.length!=3||w[0]!=d){continue;
}
if(qx.core.Environment.get(j)){qx.Bootstrap.warn("URL settings are deprecated. Please use URL environment "+"variables instead. (qxsetting --> qxenv)");
}this.set(w[1],decodeURIComponent(w[2]));
}}},defer:function(y){y.defineDeprecated(a,false);
y.defineDeprecated(f,false);
y.defineDeprecated(e,0);
y.__w();
}});
})();
(function(){var d="qx.core.Aspect",c="before",b="*",a="static";
qx.Bootstrap.define(d,{statics:{__ui:[],wrap:function(e,f,g){var m=[];
var h=[];
var l=this.__ui;
var k;

for(var i=0;i<l.length;i++){k=l[i];

if((k.type==null||g==k.type||k.type==b)&&(k.name==null||e.match(k.name))){k.pos==-1?m.push(k.fcn):h.push(k.fcn);
}}
if(m.length===0&&h.length===0){return f;
}var j=function(){for(var i=0;i<m.length;i++){m[i].call(this,e,f,g,arguments);
}var n=f.apply(this,arguments);

for(var i=0;i<h.length;i++){h[i].call(this,e,f,g,arguments,n);
}return n;
};

if(g!==a){j.self=f.self;
j.base=f.base;
}f.wrapper=j;
j.original=f;
return j;
},addAdvice:function(o,p,q,name){this.__ui.push({fcn:o,pos:p===c?-1:1,type:q,name:name});
}}});
})();
(function(){var k="function",j="Boolean",h="qx.Interface",g="qx.debug",f="]",e="toggle",d="Interface",c="is",b="[Interface ";
qx.Bootstrap.define(h,{statics:{define:function(name,m){if(m){if(m.extend&&!(m.extend instanceof Array)){m.extend=[m.extend];
}if(qx.core.Environment.get(g)){this.__E(name,m);
}var n=m.statics?m.statics:{};
if(m.extend){n.$$extends=m.extend;
}
if(m.properties){n.$$properties=m.properties;
}
if(m.members){n.$$members=m.members;
}
if(m.events){n.$$events=m.events;
}}else{var n={};
}n.$$type=d;
n.name=name;
n.toString=this.genericToString;
n.basename=qx.Bootstrap.createNamespace(name,n);
qx.Interface.$$registry[name]=n;
return n;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(o){if(!o){return [];
}var p=o.concat();

for(var i=0,l=o.length;i<l;i++){if(o[i].$$extends){p.push.apply(p,this.flatten(o[i].$$extends));
}}return p;
},__y:function(q,r,s,t){var x=s.$$members;

if(x){for(var w in x){if(qx.Bootstrap.isFunction(x[w])){var v=this.__z(r,w);
var u=v||qx.Bootstrap.isFunction(q[w]);

if(!u){throw new Error('Implementation of method "'+w+'" is missing in class "'+r.classname+'" required by interface "'+s.name+'"');
}var y=t===true&&!v&&!qx.Bootstrap.hasInterface(r,s);

if(y){q[w]=this.__C(s,q[w],w,x[w]);
}}else{if(typeof q[w]===undefined){if(typeof q[w]!==k){throw new Error('Implementation of member "'+w+'" is missing in class "'+r.classname+'" required by interface "'+s.name+'"');
}}}}}},__z:function(z,A){var E=A.match(/^(is|toggle|get|set|reset)(.*)$/);

if(!E){return false;
}var B=qx.Bootstrap.firstLow(E[2]);
var C=qx.Bootstrap.getPropertyDefinition(z,B);

if(!C){return false;
}var D=E[0]==c||E[0]==e;

if(D){return qx.Bootstrap.getPropertyDefinition(z,B).check==j;
}return true;
},__A:function(F,G){if(G.$$properties){for(var H in G.$$properties){if(!qx.Bootstrap.getPropertyDefinition(F,H)){throw new Error('The property "'+H+'" is not supported by Class "'+F.classname+'"!');
}}}},__B:function(I,J){if(J.$$events){for(var K in J.$$events){if(!qx.Bootstrap.supportsEvent(I,K)){throw new Error('The event "'+K+'" is not supported by Class "'+I.classname+'"!');
}}}},assertObject:function(L,M){var O=L.constructor;
this.__y(L,O,M,false);
this.__A(O,M);
this.__B(O,M);
var N=M.$$extends;

if(N){for(var i=0,l=N.length;i<l;i++){this.assertObject(L,N[i]);
}}},assert:function(P,Q,R){this.__y(P.prototype,P,Q,R);
this.__A(P,Q);
this.__B(P,Q);
var S=Q.$$extends;

if(S){for(var i=0,l=S.length;i<l;i++){this.assert(P,S[i],R);
}}},genericToString:function(){return b+this.name+f;
},$$registry:{},__C:qx.core.Environment.select("qx.debug",{"true":function(T,U,V,W){function X(){W.apply(this,arguments);
return U.apply(this,arguments);
}U.wrapper=X;
return X;
},"default":function(){}}),__D:qx.core.Environment.select("qx.debug",{"true":{"extend":"object","statics":"object","members":"object","properties":"object","events":"object"},"default":null}),__E:qx.core.Environment.select("qx.debug",{"true":function(name,Y){if(qx.core.Environment.get("qx.debug")){var bc=this.__D;

for(var bb in Y){if(bc[bb]===undefined){throw new Error('The configuration key "'+bb+'" in class "'+name+'" is not allowed!');
}
if(Y[bb]==null){throw new Error("Invalid key '"+bb+"' in interface '"+name+"'! The value is undefined/null!");
}
if(bc[bb]!==null&&typeof Y[bb]!==bc[bb]){throw new Error('Invalid type of key "'+bb+'" in interface "'+name+'"! The type of the key must be "'+bc[bb]+'"!');
}}var ba=["statics","members","properties","events"];

for(var i=0,l=ba.length;i<l;i++){var bb=ba[i];

if(Y[bb]!==undefined&&(Y[bb] instanceof Array||Y[bb] instanceof RegExp||Y[bb] instanceof Date||Y[bb].classname!==undefined)){throw new Error('Invalid key "'+bb+'" in interface "'+name+'"! The value needs to be a map!');
}}if(Y.extend){for(var i=0,a=Y.extend,l=a.length;i<l;i++){if(a[i]==null){throw new Error("Extends of interfaces must be interfaces. The extend number '"+i+1+"' in interface '"+name+"' is undefined/null!");
}
if(a[i].$$type!=="Interface"){throw new Error("Extends of interfaces must be interfaces. The extend number '"+i+1+"' in interface '"+name+"' is not an interface!");
}}}if(Y.statics){for(var bb in Y.statics){if(bb.toUpperCase()!==bb){throw new Error('Invalid key "'+bb+'" in interface "'+name+'"! Static constants must be all uppercase.');
}
switch(typeof Y.statics[bb]){case "boolean":case "string":case "number":break;
default:throw new Error('Invalid key "'+bb+'" in interface "'+name+'"! Static constants must be all of a primitive type.');
}}}}},"default":function(){}})}});
})();
(function(){var g="emulated",f="native",e='"',d="qx.lang.Core",c="\\\\",b="\\\"",a="[object Error]";
qx.Bootstrap.define(d,{statics:{errorToString:{"native":Error.prototype.toString,"emulated":function(){return this.message;
}}[(!Error.prototype.toString||Error.prototype.toString()==a)?g:f],arrayIndexOf:{"native":Array.prototype.indexOf,"emulated":function(h,j){if(j==null){j=0;
}else if(j<0){j=Math.max(0,this.length+j);
}
for(var i=j;i<this.length;i++){if(this[i]===h){return i;
}}return -1;
}}[Array.prototype.indexOf?f:g],arrayLastIndexOf:{"native":Array.prototype.lastIndexOf,"emulated":function(k,m){if(m==null){m=this.length-1;
}else if(m<0){m=Math.max(0,this.length+m);
}
for(var i=m;i>=0;i--){if(this[i]===k){return i;
}}return -1;
}}[Array.prototype.lastIndexOf?f:g],arrayForEach:{"native":Array.prototype.forEach,"emulated":function(n,o){var l=this.length;

for(var i=0;i<l;i++){var p=this[i];

if(p!==undefined){n.call(o||window,p,i,this);
}}}}[Array.prototype.forEach?f:g],arrayFilter:{"native":Array.prototype.filter,"emulated":function(q,r){var s=[];
var l=this.length;

for(var i=0;i<l;i++){var t=this[i];

if(t!==undefined){if(q.call(r||window,t,i,this)){s.push(this[i]);
}}}return s;
}}[Array.prototype.filter?f:g],arrayMap:{"native":Array.prototype.map,"emulated":function(u,v){var w=[];
var l=this.length;

for(var i=0;i<l;i++){var x=this[i];

if(x!==undefined){w[i]=u.call(v||window,x,i,this);
}}return w;
}}[Array.prototype.map?f:g],arraySome:{"native":Array.prototype.some,"emulated":function(y,z){var l=this.length;

for(var i=0;i<l;i++){var A=this[i];

if(A!==undefined){if(y.call(z||window,A,i,this)){return true;
}}}return false;
}}[Array.prototype.some?f:g],arrayEvery:{"native":Array.prototype.every,"emulated":function(B,C){var l=this.length;

for(var i=0;i<l;i++){var D=this[i];

if(D!==undefined){if(!B.call(C||window,D,i,this)){return false;
}}}return true;
}}[Array.prototype.every?f:g],stringQuote:{"native":String.prototype.quote,"emulated":function(){return e+this.replace(/\\/g,c).replace(/\"/g,b)+e;
}}[String.prototype.quote?f:g]}});
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
(function(){var m=';',k='return this.',j="boolean",h="string",g='!==undefined)',f='else if(this.',e='if(this.',d='else ',c=' of an instance of ',b=' is not (yet) ready!");',X="init",W="': ",V=" of class ",U='(computed, old, "',T='return value;',S='if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ',R='return init;',Q='var init=this.',P="')){",O="if(reg.hasListener(this, '",t="Error in property ",u='var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){',r="qx.debug",s='if(init==qx.core.Property.$$inherit)init=null;',p="rv:1.8.1",q="set",n='if(a[i].',o="var reg=qx.event.Registration;",v=" in method ",w='throw new Error("Property ',D='(backup);',B='var inherit=prop.$$inherit;',H='return null;',F='this.',K=")}",J="setRuntime",y=')a[i].',N='");',M="setThemed",L="inherit",x="MSIE 6.0",z=" with incoming value '",A="', qx.event.type.Data, [computed, old]",C="object",E='}',G="reg.fireEvent(this, '",I="qx.core.Property";
qx.Bootstrap.define(I,{statics:{__F:{"Boolean":'qx.core.Assert.assertBoolean(value, msg) || true',"String":'qx.core.Assert.assertString(value, msg) || true',"Number":'qx.core.Assert.assertNumber(value, msg) || true',"Integer":'qx.core.Assert.assertInteger(value, msg) || true',"PositiveNumber":'qx.core.Assert.assertPositiveNumber(value, msg) || true',"PositiveInteger":'qx.core.Assert.assertPositiveInteger(value, msg) || true',"Error":'qx.core.Assert.assertInstance(value, Error, msg) || true',"RegExp":'qx.core.Assert.assertInstance(value, RegExp, msg) || true',"Object":'qx.core.Assert.assertObject(value, msg) || true',"Array":'qx.core.Assert.assertArray(value, msg) || true',"Map":'qx.core.Assert.assertMap(value, msg) || true',"Function":'qx.core.Assert.assertFunction(value, msg) || true',"Date":'qx.core.Assert.assertInstance(value, Date, msg) || true',"Node":'value !== null && value.nodeType !== undefined',"Element":'value !== null && value.nodeType === 1 && value.attributes',"Document":'value !== null && value.nodeType === 9 && value.documentElement',"Window":'value !== null && value.document',"Event":'value !== null && value.type !== undefined',"Class":'value !== null && value.$$type === "Class"',"Mixin":'value !== null && value.$$type === "Mixin"',"Interface":'value !== null && value.$$type === "Interface"',"Theme":'value !== null && value.$$type === "Theme"',"Color":'qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)',"Decorator":'value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',"Font":'value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)'},__G:{"Node":true,"Element":true,"Document":true,"Window":true,"Event":true},$$inherit:L,$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},set:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{name:h,dereference:j,inheritable:j,nullable:j,themeable:j,refine:j,init:null,apply:h,event:h,check:null,transform:h,deferredInit:j,validate:null},$$allowedGroupKeys:{name:h,group:C,mode:h,themeable:j},$$inheritable:{},__H:function(Y){var ba=this.__I(Y);

if(!ba.length){var bb=function(){};
}else{bb=this.__J(ba);
}Y.prototype.$$refreshInheritables=bb;
},__I:function(bc){var be=[];

while(bc){var bd=bc.$$properties;

if(bd){for(var name in this.$$inheritable){if(bd[name]&&bd[name].inheritable){be.push(name);
}}}bc=bc.superclass;
}return be;
},__J:function(bf){var bj=this.$$store.inherit;
var bi=this.$$store.init;
var bh=this.$$method.refresh;
var bg=["var parent = this.getLayoutParent();","if (!parent) return;"];

for(var i=0,l=bf.length;i<l;i++){var name=bf[i];
bg.push("var value = parent.",bj[name],";","if (value===undefined) value = parent.",bi[name],";","this.",bh[name],"(value);");
}return new Function(bg.join(""));
},attachRefreshInheritables:function(bk){bk.prototype.$$refreshInheritables=function(){qx.core.Property.__H(bk);
return this.$$refreshInheritables();
};
},attachMethods:function(bl,name,bm){bm.group?this.__K(bl,bm,name):this.__L(bl,bm,name);
},__K:function(bn,bo,name){var bv=qx.Bootstrap.firstUp(name);
var bu=bn.prototype;
var bw=bo.themeable===true;

if(qx.core.Environment.get("qx.debug")){if(qx.core.Environment.get("qx.propertyDebugLevel")>1){qx.Bootstrap.debug("Generating property group: "+name);
}}var bx=[];
var br=[];

if(bw){var bp=[];
var bt=[];
}var bs="var a=arguments[0] instanceof Array?arguments[0]:arguments;";
bx.push(bs);

if(bw){bp.push(bs);
}
if(bo.mode=="shorthand"){var bq="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));";
bx.push(bq);

if(bw){bp.push(bq);
}}
for(var i=0,a=bo.group,l=a.length;i<l;i++){if(qx.core.Environment.get("qx.debug")){if(!this.$$method.set[a[i]]||!this.$$method.reset[a[i]]){throw new Error("Cannot create property group '"+name+"' including non-existing property '"+a[i]+"'!");
}}bx.push("this.",this.$$method.set[a[i]],"(a[",i,"]);");
br.push("this.",this.$$method.reset[a[i]],"();");

if(bw){if(qx.core.Environment.get("qx.debug")){if(!this.$$method.setThemed[a[i]]){throw new Error("Cannot add the non themable property '"+a[i]+"' to the themable property group '"+name+"'");
}}bp.push("this.",this.$$method.setThemed[a[i]],"(a[",i,"]);");
bt.push("this.",this.$$method.resetThemed[a[i]],"();");
}}this.$$method.set[name]="set"+bv;
bu[this.$$method.set[name]]=new Function(bx.join(""));
this.$$method.reset[name]="reset"+bv;
bu[this.$$method.reset[name]]=new Function(br.join(""));

if(bw){this.$$method.setThemed[name]="setThemed"+bv;
bu[this.$$method.setThemed[name]]=new Function(bp.join(""));
this.$$method.resetThemed[name]="resetThemed"+bv;
bu[this.$$method.resetThemed[name]]=new Function(bt.join(""));
}},__L:function(by,bz,name){var bB=qx.Bootstrap.firstUp(name);
var bD=by.prototype;

if(qx.core.Environment.get("qx.debug")){if(qx.core.Environment.get("qx.propertyDebugLevel")>1){qx.Bootstrap.debug("Generating property wrappers: "+name);
}}if(bz.dereference===undefined&&typeof bz.check==="string"){bz.dereference=this.__M(bz.check);
}var bC=this.$$method;
var bA=this.$$store;
bA.runtime[name]="$$runtime_"+name;
bA.user[name]="$$user_"+name;
bA.theme[name]="$$theme_"+name;
bA.init[name]="$$init_"+name;
bA.inherit[name]="$$inherit_"+name;
bA.useinit[name]="$$useinit_"+name;
bC.get[name]="get"+bB;
bD[bC.get[name]]=function(){return qx.core.Property.executeOptimizedGetter(this,by,name,"get");
};
bC.set[name]="set"+bB;
bD[bC.set[name]]=function(bE){return qx.core.Property.executeOptimizedSetter(this,by,name,"set",arguments);
};
bC.reset[name]="reset"+bB;
bD[bC.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,by,name,"reset");
};

if(bz.inheritable||bz.apply||bz.event||bz.deferredInit){bC.init[name]="init"+bB;
bD[bC.init[name]]=function(bF){return qx.core.Property.executeOptimizedSetter(this,by,name,"init",arguments);
};
}
if(bz.inheritable){bC.refresh[name]="refresh"+bB;
bD[bC.refresh[name]]=function(bG){return qx.core.Property.executeOptimizedSetter(this,by,name,"refresh",arguments);
};
}bC.setRuntime[name]="setRuntime"+bB;
bD[bC.setRuntime[name]]=function(bH){return qx.core.Property.executeOptimizedSetter(this,by,name,"setRuntime",arguments);
};
bC.resetRuntime[name]="resetRuntime"+bB;
bD[bC.resetRuntime[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,by,name,"resetRuntime");
};

if(bz.themeable){bC.setThemed[name]="setThemed"+bB;
bD[bC.setThemed[name]]=function(bI){return qx.core.Property.executeOptimizedSetter(this,by,name,"setThemed",arguments);
};
bC.resetThemed[name]="resetThemed"+bB;
bD[bC.resetThemed[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,by,name,"resetThemed");
};
}
if(bz.check==="Boolean"){bD["toggle"+bB]=new Function("return this."+bC.set[name]+"(!this."+bC.get[name]+"())");
bD["is"+bB]=new Function("return this."+bC.get[name]+"()");
}},__M:function(bJ){return !!this.__G[bJ];
},__N:function(bK){return this.__G[bK]||qx.Bootstrap.classIsDefined(bK)||(qx.Interface&&qx.Interface.isDefined(bK));
},__O:{0:'Could not change or apply init value after constructing phase!',1:'Requires exactly one argument!',2:'Undefined value is not allowed!',3:'Does not allow any arguments!',4:'Null value is not allowed!',5:'Is invalid!'},error:function(bL,bM,bN,bO,bP){var bQ=bL.constructor.classname;
var bR=t+bN+V+bQ+v+this.$$method[bO][bN]+z+bP+W;
throw new Error(bR+(this.__O[bM]||"Unknown reason: "+bM));
},__P:function(bS,bT,name,bU,bV,bW){var bX=this.$$method[bU][name];
if(qx.core.Environment.get("qx.debug")){if(qx.core.Environment.get("qx.propertyDebugLevel")>1){qx.Bootstrap.debug("Code["+this.$$method[bU][name]+"]: "+bV.join(""));
}try{bT[bX]=new Function("value",bV.join(""));
}catch(bY){throw new Error("Malformed generated code to unwrap method: "+this.$$method[bU][name]+"\n"+bV.join(""));
}}else{bT[bX]=new Function("value",bV.join(""));
}if(qx.core.Environment.get("qx.aspects")){bT[bX]=qx.core.Aspect.wrap(bS.classname+"."+bX,bT[bX],"property");
}qx.Bootstrap.setDisplayName(bT[bX],bS.classname+".prototype",bX);
if(bW===undefined){return bS[bX]();
}else if(qx.core.Environment.get("qx.debug")){return bS[bX].apply(bS,bW);
}else{return bS[bX](bW[0]);
}},executeOptimizedGetter:function(ca,cb,name,cc){var ce=cb.$$properties[name];
var cg=cb.prototype;
var cd=[];
var cf=this.$$store;
cd.push(e,cf.runtime[name],g);
cd.push(k,cf.runtime[name],m);

if(ce.inheritable){cd.push(f,cf.inherit[name],g);
cd.push(k,cf.inherit[name],m);
cd.push(d);
}cd.push(e,cf.user[name],g);
cd.push(k,cf.user[name],m);

if(ce.themeable){cd.push(f,cf.theme[name],g);
cd.push(k,cf.theme[name],m);
}
if(ce.deferredInit&&ce.init===undefined){cd.push(f,cf.init[name],g);
cd.push(k,cf.init[name],m);
}cd.push(d);

if(ce.init!==undefined){if(ce.inheritable){cd.push(Q,cf.init[name],m);

if(ce.nullable){cd.push(s);
}else if(ce.init!==undefined){cd.push(k,cf.init[name],m);
}else{cd.push(S,name,c,cb.classname,b);
}cd.push(R);
}else{cd.push(k,cf.init[name],m);
}}else if(ce.inheritable||ce.nullable){cd.push(H);
}else{cd.push(w,name,c,cb.classname,b);
}return this.__P(ca,cg,name,cc,cd);
},executeOptimizedSetter:function(ch,ci,name,cj,ck){var cp=ci.$$properties[name];
var co=ci.prototype;
var cm=[];
var cl=cj===q||cj===M||cj===J||(cj===X&&cp.init===undefined);
var cn=cp.apply||cp.event||cp.inheritable;
var cq=this.__Q(cj,name);
this.__R(cm,cp,name,cj,cl);

if(cl){this.__S(cm,ci,cp,name);
}
if(cn){this.__T(cm,cl,cq,cj);
}
if(cp.inheritable){cm.push(B);
}
if(qx.core.Environment.get(r)){if(cl){this.__U(cm,cp,ci,name,cj);
}}
if(!cn){this.__V(cm,name,cj,cl);
}else{this.__W(cm,cp,name,cj,cl);
}
if(cp.inheritable){this.__X(cm,cp,name,cj);
}else if(cn){this.__Y(cm,cp,name,cj);
}
if(cn){this.__ba(cm,cp,name);
if(cp.inheritable&&co._getChildren){this.__bb(cm,name);
}}if(cl){cm.push(T);
}return this.__P(ch,co,name,cj,cm,ck);
},__Q:function(cr,name){if(cr==="setRuntime"||cr==="resetRuntime"){var cs=this.$$store.runtime[name];
}else if(cr==="setThemed"||cr==="resetThemed"){cs=this.$$store.theme[name];
}else if(cr==="init"){cs=this.$$store.init[name];
}else{cs=this.$$store.user[name];
}return cs;
},__R:function(ct,cu,name,cv,cw){if(qx.core.Environment.get("qx.debug")){ct.push('var prop=qx.core.Property;');

if(cv==="init"){ct.push('if(this.$$initialized)prop.error(this,0,"',name,'","',cv,'",value);');
}
if(cv==="refresh"){}else if(cw){ct.push('if(arguments.length!==1)prop.error(this,1,"',name,'","',cv,'",value);');
ct.push('if(value===undefined)prop.error(this,2,"',name,'","',cv,'",value);');
}else{ct.push('if(arguments.length!==0)prop.error(this,3,"',name,'","',cv,'",value);');
}}else{if(!cu.nullable||cu.check||cu.inheritable){ct.push('var prop=qx.core.Property;');
}if(cv==="set"){ct.push('if(value===undefined)prop.error(this,2,"',name,'","',cv,'",value);');
}}},__S:function(cx,cy,cz,name){if(cz.transform){cx.push('value=this.',cz.transform,'(value);');
}if(cz.validate){if(typeof cz.validate==="string"){cx.push('this.',cz.validate,'(value);');
}else if(cz.validate instanceof Function){cx.push(cy.classname,'.$$properties.',name);
cx.push('.validate.call(this, value);');
}}},__T:function(cA,cB,cC,cD){var cE=(cD==="reset"||cD==="resetThemed"||cD==="resetRuntime");

if(cB){cA.push('if(this.',cC,'===value)return value;');
}else if(cE){cA.push('if(this.',cC,'===undefined)return;');
}},__U:qx.core.Environment.select("qx.debug",{"true":function(cF,cG,cH,name,cI){if(!cG.nullable){cF.push('if(value===null)prop.error(this,4,"',name,'","',cI,'",value);');
}if(cG.check!==undefined){cF.push('var msg = "Invalid incoming value for property \''+name+'\' of class \''+cH.classname+'\'";');
if(cG.nullable){cF.push('if(value!==null)');
}if(cG.inheritable){cF.push('if(value!==inherit)');
}cF.push('if(');

if(this.__F[cG.check]!==undefined){cF.push('!(',this.__F[cG.check],')');
}else if(qx.Class.isDefined(cG.check)){cF.push('qx.core.Assert.assertInstance(value, qx.Class.getByName("',cG.check,'"), msg)');
}else if(qx.Interface&&qx.Interface.isDefined(cG.check)){cF.push('qx.core.Assert.assertInterface(value, qx.Interface.getByName("',cG.check,'"), msg)');
}else if(typeof cG.check==="function"){cF.push('!',cH.classname,'.$$properties.',name);
cF.push('.check.call(this, value)');
}else if(typeof cG.check==="string"){cF.push('!(',cG.check,')');
}else if(cG.check instanceof Array){cF.push('qx.core.Assert.assertInArray(value, ',cH.classname,'.$$properties.',name,'.check, msg)');
}else{throw new Error("Could not add check to property "+name+" of class "+cH.classname);
}cF.push(')prop.error(this,5,"',name,'","',cI,'",value);');
}},"false":undefined}),__V:function(cJ,name,cK,cL){if(cK==="setRuntime"){cJ.push('this.',this.$$store.runtime[name],'=value;');
}else if(cK==="resetRuntime"){cJ.push('if(this.',this.$$store.runtime[name],'!==undefined)');
cJ.push('delete this.',this.$$store.runtime[name],';');
}else if(cK==="set"){cJ.push('this.',this.$$store.user[name],'=value;');
}else if(cK==="reset"){cJ.push('if(this.',this.$$store.user[name],'!==undefined)');
cJ.push('delete this.',this.$$store.user[name],';');
}else if(cK==="setThemed"){cJ.push('this.',this.$$store.theme[name],'=value;');
}else if(cK==="resetThemed"){cJ.push('if(this.',this.$$store.theme[name],'!==undefined)');
cJ.push('delete this.',this.$$store.theme[name],';');
}else if(cK==="init"&&cL){cJ.push('this.',this.$$store.init[name],'=value;');
}},__W:function(cM,cN,name,cO,cP){if(cN.inheritable){cM.push('var computed, old=this.',this.$$store.inherit[name],';');
}else{cM.push('var computed, old;');
}cM.push('if(this.',this.$$store.runtime[name],'!==undefined){');

if(cO==="setRuntime"){cM.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(cO==="resetRuntime"){cM.push('delete this.',this.$$store.runtime[name],';');
cM.push('if(this.',this.$$store.user[name],'!==undefined)');
cM.push('computed=this.',this.$$store.user[name],';');
cM.push('else if(this.',this.$$store.theme[name],'!==undefined)');
cM.push('computed=this.',this.$$store.theme[name],';');
cM.push('else if(this.',this.$$store.init[name],'!==undefined){');
cM.push('computed=this.',this.$$store.init[name],';');
cM.push('this.',this.$$store.useinit[name],'=true;');
cM.push('}');
}else{cM.push('old=computed=this.',this.$$store.runtime[name],';');
if(cO==="set"){cM.push('this.',this.$$store.user[name],'=value;');
}else if(cO==="reset"){cM.push('delete this.',this.$$store.user[name],';');
}else if(cO==="setThemed"){cM.push('this.',this.$$store.theme[name],'=value;');
}else if(cO==="resetThemed"){cM.push('delete this.',this.$$store.theme[name],';');
}else if(cO==="init"&&cP){cM.push('this.',this.$$store.init[name],'=value;');
}}cM.push('}');
cM.push('else if(this.',this.$$store.user[name],'!==undefined){');

if(cO==="set"){if(!cN.inheritable){cM.push('old=this.',this.$$store.user[name],';');
}cM.push('computed=this.',this.$$store.user[name],'=value;');
}else if(cO==="reset"){if(!cN.inheritable){cM.push('old=this.',this.$$store.user[name],';');
}cM.push('delete this.',this.$$store.user[name],';');
cM.push('if(this.',this.$$store.runtime[name],'!==undefined)');
cM.push('computed=this.',this.$$store.runtime[name],';');
cM.push('if(this.',this.$$store.theme[name],'!==undefined)');
cM.push('computed=this.',this.$$store.theme[name],';');
cM.push('else if(this.',this.$$store.init[name],'!==undefined){');
cM.push('computed=this.',this.$$store.init[name],';');
cM.push('this.',this.$$store.useinit[name],'=true;');
cM.push('}');
}else{if(cO==="setRuntime"){cM.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(cN.inheritable){cM.push('computed=this.',this.$$store.user[name],';');
}else{cM.push('old=computed=this.',this.$$store.user[name],';');
}if(cO==="setThemed"){cM.push('this.',this.$$store.theme[name],'=value;');
}else if(cO==="resetThemed"){cM.push('delete this.',this.$$store.theme[name],';');
}else if(cO==="init"&&cP){cM.push('this.',this.$$store.init[name],'=value;');
}}cM.push('}');
if(cN.themeable){cM.push('else if(this.',this.$$store.theme[name],'!==undefined){');

if(!cN.inheritable){cM.push('old=this.',this.$$store.theme[name],';');
}
if(cO==="setRuntime"){cM.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(cO==="set"){cM.push('computed=this.',this.$$store.user[name],'=value;');
}else if(cO==="setThemed"){cM.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(cO==="resetThemed"){cM.push('delete this.',this.$$store.theme[name],';');
cM.push('if(this.',this.$$store.init[name],'!==undefined){');
cM.push('computed=this.',this.$$store.init[name],';');
cM.push('this.',this.$$store.useinit[name],'=true;');
cM.push('}');
}else if(cO==="init"){if(cP){cM.push('this.',this.$$store.init[name],'=value;');
}cM.push('computed=this.',this.$$store.theme[name],';');
}else if(cO==="refresh"){cM.push('computed=this.',this.$$store.theme[name],';');
}cM.push('}');
}cM.push('else if(this.',this.$$store.useinit[name],'){');

if(!cN.inheritable){cM.push('old=this.',this.$$store.init[name],';');
}
if(cO==="init"){if(cP){cM.push('computed=this.',this.$$store.init[name],'=value;');
}else{cM.push('computed=this.',this.$$store.init[name],';');
}}else if(cO==="set"||cO==="setRuntime"||cO==="setThemed"||cO==="refresh"){cM.push('delete this.',this.$$store.useinit[name],';');

if(cO==="setRuntime"){cM.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(cO==="set"){cM.push('computed=this.',this.$$store.user[name],'=value;');
}else if(cO==="setThemed"){cM.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(cO==="refresh"){cM.push('computed=this.',this.$$store.init[name],';');
}}cM.push('}');
if(cO==="set"||cO==="setRuntime"||cO==="setThemed"||cO==="init"){cM.push('else{');

if(cO==="setRuntime"){cM.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(cO==="set"){cM.push('computed=this.',this.$$store.user[name],'=value;');
}else if(cO==="setThemed"){cM.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(cO==="init"){if(cP){cM.push('computed=this.',this.$$store.init[name],'=value;');
}else{cM.push('computed=this.',this.$$store.init[name],';');
}cM.push('this.',this.$$store.useinit[name],'=true;');
}cM.push('}');
}},__X:function(cQ,cR,name,cS){cQ.push('if(computed===undefined||computed===inherit){');

if(cS==="refresh"){cQ.push('computed=value;');
}else{cQ.push('var pa=this.getLayoutParent();if(pa)computed=pa.',this.$$store.inherit[name],';');
}cQ.push('if((computed===undefined||computed===inherit)&&');
cQ.push('this.',this.$$store.init[name],'!==undefined&&');
cQ.push('this.',this.$$store.init[name],'!==inherit){');
cQ.push('computed=this.',this.$$store.init[name],';');
cQ.push('this.',this.$$store.useinit[name],'=true;');
cQ.push('}else{');
cQ.push('delete this.',this.$$store.useinit[name],';}');
cQ.push('}');
cQ.push('if(old===computed)return value;');
cQ.push('if(computed===inherit){');
cQ.push('computed=undefined;delete this.',this.$$store.inherit[name],';');
cQ.push('}');
cQ.push('else if(computed===undefined)');
cQ.push('delete this.',this.$$store.inherit[name],';');
cQ.push('else this.',this.$$store.inherit[name],'=computed;');
cQ.push('var backup=computed;');
if(cR.init!==undefined&&cS!=="init"){cQ.push('if(old===undefined)old=this.',this.$$store.init[name],";");
}else{cQ.push('if(old===undefined)old=null;');
}cQ.push('if(computed===undefined||computed==inherit)computed=null;');
},__Y:function(cT,cU,name,cV){if(cV!=="set"&&cV!=="setRuntime"&&cV!=="setThemed"){cT.push('if(computed===undefined)computed=null;');
}cT.push('if(old===computed)return value;');
if(cU.init!==undefined&&cV!=="init"){cT.push('if(old===undefined)old=this.',this.$$store.init[name],";");
}else{cT.push('if(old===undefined)old=null;');
}},__ba:function(cW,cX,name){if(cX.apply){cW.push(F,cX.apply,U,name,N);
}if(cX.event){cW.push(o,O,cX.event,P,G,cX.event,A,K);
}},__bb:function(cY,name){cY.push(u);
cY.push(n,this.$$method.refresh[name],y,this.$$method.refresh[name],D);
cY.push(E);
}},defer:function(da){var dc=navigator.userAgent.indexOf(x)!=-1;
var db=navigator.userAgent.indexOf(p)!=-1;
if(dc||db){da.__M=da.__N;
}}});
})();
(function(){var m="qx.debug",k="object",j=".",h="qx.aspects",g="static",f="function",e="string",d="abstract",c="singleton",b="constructor",L="_",K=".prototype",J="environment",I="$$init_",H="extend",G="init",F="qx.event.type.Data",E="refine",D="members",C="variants",t="properties",u="statics",r="toString",s="events",p="]",q="Class",n="Interface",o="qx.Class",v="Mixin",w="settings",y='Assumed static class because no "extend" key was found. ',x="[Class ",A="destructor",z="destruct",B="member";
qx.Bootstrap.define(o,{statics:{define:function(name,M){if(!M){var M={};
}if(M.include&&!(M.include instanceof Array)){M.include=[M.include];
}if(M.implement&&!(M.implement instanceof Array)){M.implement=[M.implement];
}var N=false;

if(!M.hasOwnProperty(H)&&!M.type){M.type=g;
N=true;
}if(qx.core.Environment.get(m)){try{this.__be(name,M);
}catch(Q){if(N){Q.message=y+Q.message;
}throw Q;
}}var O=this.__bg(name,M.type,M.extend,M.statics,M.construct,M.destruct,M.include);
if(M.extend){if(M.properties){this.__bi(O,M.properties,true);
}if(M.members){this.__bk(O,M.members,true,true,false);
}if(M.events){this.__bh(O,M.events,true);
}if(M.include){for(var i=0,l=M.include.length;i<l;i++){this.__bo(O,M.include[i],false);
}}}if(M.environment){for(var P in M.environment){qx.core.Environment.add(P,M.environment[P]);
}for(var P in M.environment){qx.core.Setting.defineDeprecated(P,M.environment[P]);
}}if(M.settings){if(qx.core.Environment.get(m)){qx.Bootstrap.warn("The usage of settings in class '"+name+"'is deprecated. Please use the 'environment' key instead");
}
for(var P in M.settings){qx.core.Setting.define(P,M.settings[P]);
}}if(M.variants){if(qx.core.Environment.get(m)){qx.Bootstrap.warn("The usage of variants in class '"+name+"'is deprecated. Please use the 'environment' key instead");
}
for(var P in M.variants){qx.core.Variant.define(P,M.variants[P].allowedValues,M.variants[P].defaultValue);
}}if(M.implement){for(var i=0,l=M.implement.length;i<l;i++){this.__bm(O,M.implement[i]);
}}
if(qx.core.Environment.get(m)){this.__bf(O);
}if(M.defer){M.defer.self=O;
M.defer(O,O.prototype,{add:function(name,R){var S={};
S[name]=R;
qx.Class.__bi(O,S,true);
}});
}return O;
},undefine:function(name){delete this.$$registry[name];
var T=name.split(j);
var V=[window];

for(var i=0;i<T.length;i++){V.push(V[i][T[i]]);
}for(var i=V.length-1;i>=1;i--){var U=V[i];
var parent=V[i-1];

if(qx.Bootstrap.isFunction(U)||qx.Bootstrap.objectGetLength(U)===0){delete parent[T[i-1]];
}else{break;
}}},isDefined:qx.Bootstrap.classIsDefined,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},getByName:qx.Bootstrap.getByName,include:function(W,X){if(qx.core.Environment.get(m)){if(!X){throw new Error("The mixin to include into class '"+W.classname+"' is undefined/null!");
}qx.Mixin.isCompatible(X,W);
}qx.Class.__bo(W,X,false);
},patch:function(Y,ba){if(qx.core.Environment.get(m)){if(!ba){throw new Error("The mixin to patch class '"+Y.classname+"' is undefined/null!");
}qx.Mixin.isCompatible(ba,Y);
}qx.Class.__bo(Y,ba,true);
},isSubClassOf:function(bb,bc){if(!bb){return false;
}
if(bb==bc){return true;
}
if(bb.prototype instanceof bc){return true;
}return false;
},getPropertyDefinition:qx.Bootstrap.getPropertyDefinition,getProperties:function(bd){var be=[];

while(bd){if(bd.$$properties){be.push.apply(be,qx.Bootstrap.getKeys(bd.$$properties));
}bd=bd.superclass;
}return be;
},getByProperty:function(bf,name){while(bf){if(bf.$$properties&&bf.$$properties[name]){return bf;
}bf=bf.superclass;
}return null;
},hasProperty:qx.Bootstrap.hasProperty,getEventType:qx.Bootstrap.getEventType,supportsEvent:qx.Bootstrap.supportsEvent,hasOwnMixin:function(bg,bh){return bg.$$includes&&bg.$$includes.indexOf(bh)!==-1;
},getByMixin:function(bi,bj){var bk,i,l;

while(bi){if(bi.$$includes){bk=bi.$$flatIncludes;

for(i=0,l=bk.length;i<l;i++){if(bk[i]===bj){return bi;
}}}bi=bi.superclass;
}return null;
},getMixins:qx.Bootstrap.getMixins,hasMixin:function(bl,bm){return !!this.getByMixin(bl,bm);
},hasOwnInterface:function(bn,bo){return bn.$$implements&&bn.$$implements.indexOf(bo)!==-1;
},getByInterface:qx.Bootstrap.getByInterface,getInterfaces:function(bp){var bq=[];

while(bp){if(bp.$$implements){bq.push.apply(bq,bp.$$flatImplements);
}bp=bp.superclass;
}return bq;
},hasInterface:qx.Bootstrap.hasInterface,implementsInterface:function(br,bs){var bt=br.constructor;

if(this.hasInterface(bt,bs)){return true;
}
try{qx.Interface.assertObject(br,bs);
return true;
}catch(bu){}
try{qx.Interface.assert(bt,bs,false);
return true;
}catch(bv){}return false;
},getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;
this.$$instance=new this;
delete this.$$allowconstruct;
}return this.$$instance;
},genericToString:function(){return x+this.classname+p;
},$$registry:qx.Bootstrap.$$registry,__bc:qx.core.Environment.select(m,{"true":{"type":e,"extend":f,"implement":k,"include":k,"construct":f,"statics":k,"properties":k,"members":k,"settings":k,"environment":k,"variants":k,"events":k,"defer":f,"destruct":f},"default":null}),__bd:qx.core.Environment.select(m,{"true":{"type":e,"statics":k,"settings":k,"environment":k,"variants":k,"defer":f},"default":null}),__be:qx.core.Environment.select(m,{"true":function(name,bw){if(bw.type&&!(bw.type===g||bw.type===d||bw.type===c)){throw new Error('Invalid type "'+bw.type+'" definition for class "'+name+'"!');
}if(bw.type&&bw.type!==g&&!bw.extend){throw new Error('Invalid config in class "'+name+'"! Every non-static class has to extend at least the "qx.core.Object" class.');
}var bz=bw.type===g?this.__bd:this.__bc;

for(var by in bw){if(!bz[by]){throw new Error('The configuration key "'+by+'" in class "'+name+'" is not allowed!');
}
if(bw[by]==null){throw new Error('Invalid key "'+by+'" in class "'+name+'"! The value is undefined/null!');
}
if(typeof bw[by]!==bz[by]){throw new Error('Invalid type of key "'+by+'" in class "'+name+'"! The type of the key must be "'+bz[by]+'"!');
}}var bx=[u,t,D,J,w,C,s];

for(var i=0,l=bx.length;i<l;i++){var by=bx[i];

if(bw[by]!==undefined&&(bw[by].$$hash!==undefined||!qx.Bootstrap.isObject(bw[by]))){throw new Error('Invalid key "'+by+'" in class "'+name+'"! The value needs to be a map!');
}}if(bw.include){if(bw.include instanceof Array){for(var i=0,a=bw.include,l=a.length;i<l;i++){if(a[i]==null||a[i].$$type!==v){throw new Error('The include definition in class "'+name+'" contains an invalid mixin at position '+i+': '+a[i]);
}}}else{throw new Error('Invalid include definition in class "'+name+'"! Only mixins and arrays of mixins are allowed!');
}}if(bw.implement){if(bw.implement instanceof Array){for(var i=0,a=bw.implement,l=a.length;i<l;i++){if(a[i]==null||a[i].$$type!==n){throw new Error('The implement definition in class "'+name+'" contains an invalid interface at position '+i+': '+a[i]);
}}}else{throw new Error('Invalid implement definition in class "'+name+'"! Only interfaces and arrays of interfaces are allowed!');
}}if(bw.include){try{qx.Mixin.checkCompatibility(bw.include);
}catch(bA){throw new Error('Error in include definition of class "'+name+'"! '+bA.message);
}}if(bw.environment){for(var by in bw.environment){if(by.substr(0,by.indexOf(j))!=name.substr(0,name.indexOf(j))){throw new Error('Forbidden environment setting "'+by+'" found in "'+name+'". It is forbidden to define a '+'environment setting for an external namespace!');
}}}if(bw.settings){for(var by in bw.settings){if(by.substr(0,by.indexOf(j))!=name.substr(0,name.indexOf(j))){throw new Error('Forbidden setting "'+by+'" found in "'+name+'". It is forbidden to define a default setting for an external namespace!');
}}}if(bw.variants){for(var by in bw.variants){if(by.substr(0,by.indexOf(j))!=name.substr(0,name.indexOf(j))){throw new Error('Forbidden variant "'+by+'" found in "'+name+'". It is forbidden to define a variant for an external namespace!');
}}}},"default":function(){}}),__bf:qx.core.Environment.select(m,{"true":function(bB){var bD=bB.superclass;

while(bD){if(bD.$$classtype!==d){break;
}var bC=bD.$$implements;

if(bC){for(var i=0;i<bC.length;i++){qx.Interface.assert(bB,bC[i],true);
}}bD=bD.superclass;
}},"default":function(){}}),__bg:function(name,bE,bF,bG,bH,bI,bJ){var bM;

if(!bF&&qx.core.Environment.get(h)==false){bM=bG||{};
qx.Bootstrap.setDisplayNames(bM,name);
}else{var bM={};

if(bF){if(!bH){bH=this.__bp();
}
if(this.__br(bF,bJ)){bM=this.__bs(bH,name,bE);
}else{bM=bH;
}if(bE===c){bM.getInstance=this.getInstance;
}qx.Bootstrap.setDisplayName(bH,name,b);
}if(bG){qx.Bootstrap.setDisplayNames(bG,name);
var bN;

for(var i=0,a=qx.Bootstrap.getKeys(bG),l=a.length;i<l;i++){bN=a[i];
var bK=bG[bN];

if(qx.core.Environment.get(h)){if(bK instanceof Function){bK=qx.core.Aspect.wrap(name+j+bN,bK,g);
}bM[bN]=bK;
}else{bM[bN]=bK;
}}}}var bL=qx.Bootstrap.createNamespace(name,bM);
bM.name=bM.classname=name;
bM.basename=bL;
bM.$$type=q;

if(bE){bM.$$classtype=bE;
}if(!bM.hasOwnProperty(r)){bM.toString=this.genericToString;
}
if(bF){qx.Bootstrap.extendClass(bM,bH,bF,name,bL);
if(bI){if(qx.core.Environment.get(h)){bI=qx.core.Aspect.wrap(name,bI,A);
}bM.$$destructor=bI;
qx.Bootstrap.setDisplayName(bI,name,z);
}}this.$$registry[name]=bM;
return bM;
},__bh:function(bO,bP,bQ){if(qx.core.Environment.get(m)){if(typeof bP!==k||bP instanceof Array){throw new Error(bO.classname+": the events must be defined as map!");
}
for(var bR in bP){if(typeof bP[bR]!==e){throw new Error(bO.classname+"/"+bR+": the event value needs to be a string with the class name of the event object which will be fired.");
}}if(bO.$$events&&bQ!==true){for(var bR in bP){if(bO.$$events[bR]!==undefined&&bO.$$events[bR]!==bP[bR]){throw new Error(bO.classname+"/"+bR+": the event value/type cannot be changed from "+bO.$$events[bR]+" to "+bP[bR]);
}}}}
if(bO.$$events){for(var bR in bP){bO.$$events[bR]=bP[bR];
}}else{bO.$$events=bP;
}},__bi:function(bS,bT,bU){var bV;

if(bU===undefined){bU=false;
}var bW=bS.prototype;

for(var name in bT){bV=bT[name];
if(qx.core.Environment.get(m)){this.__bj(bS,name,bV,bU);
}bV.name=name;
if(!bV.refine){if(bS.$$properties===undefined){bS.$$properties={};
}bS.$$properties[name]=bV;
}if(bV.init!==undefined){bS.prototype[I+name]=bV.init;
}if(bV.event!==undefined){var event={};
event[bV.event]=F;
this.__bh(bS,event,bU);
}if(bV.inheritable){qx.core.Property.$$inheritable[name]=true;

if(!bW.$$refreshInheritables){qx.core.Property.attachRefreshInheritables(bS);
}}
if(!bV.refine){qx.core.Property.attachMethods(bS,name,bV);
}}},__bj:qx.core.Environment.select(m,{"true":function(bX,name,bY,ca){var cc=this.hasProperty(bX,name);

if(cc){var cb=this.getPropertyDefinition(bX,name);

if(bY.refine&&cb.init===undefined){throw new Error("Could not refine an init value if there was previously no init value defined. Property '"+name+"' of class '"+bX.classname+"'.");
}}
if(!cc&&bY.refine){throw new Error("Could not refine non-existent property: '"+name+"' of class: '"+bX.classname+"'!");
}
if(cc&&!ca){throw new Error("Class "+bX.classname+" already has a property: "+name+"!");
}
if(cc&&ca){if(!bY.refine){throw new Error('Could not refine property "'+name+'" without a "refine" flag in the property definition! This class: '+bX.classname+', original class: '+this.getByProperty(bX,name).classname+'.');
}
for(var cd in bY){if(cd!==G&&cd!==E){throw new Error("Class "+bX.classname+" could not refine property: "+name+"! Key: "+cd+" could not be refined!");
}}}var ce=bY.group?qx.core.Property.$$allowedGroupKeys:qx.core.Property.$$allowedKeys;

for(var cd in bY){if(ce[cd]===undefined){throw new Error('The configuration key "'+cd+'" of property "'+name+'" in class "'+bX.classname+'" is not allowed!');
}
if(bY[cd]===undefined){throw new Error('Invalid key "'+cd+'" of property "'+name+'" in class "'+bX.classname+'"! The value is undefined: '+bY[cd]);
}
if(ce[cd]!==null&&typeof bY[cd]!==ce[cd]){throw new Error('Invalid type of key "'+cd+'" of property "'+name+'" in class "'+bX.classname+'"! The type of the key must be "'+ce[cd]+'"!');
}}
if(bY.transform!=null){if(!(typeof bY.transform==e)){throw new Error('Invalid transform definition of property "'+name+'" in class "'+bX.classname+'"! Needs to be a String.');
}}
if(bY.check!=null){if(!qx.Bootstrap.isString(bY.check)&&!qx.Bootstrap.isArray(bY.check)&&!qx.Bootstrap.isFunction(bY.check)){throw new Error('Invalid check definition of property "'+name+'" in class "'+bX.classname+'"! Needs to be a String, Array or Function.');
}}},"default":null}),__bk:function(cf,cg,ch,ci,cj){var ck=cf.prototype;
var cm,cl;
qx.Bootstrap.setDisplayNames(cg,cf.classname+K);

for(var i=0,a=qx.Bootstrap.getKeys(cg),l=a.length;i<l;i++){cm=a[i];
cl=cg[cm];

if(qx.core.Environment.get(m)){if(ck[cm]!==undefined&&cm.charAt(0)==L&&cm.charAt(1)==L){throw new Error('Overwriting private member "'+cm+'" of Class "'+cf.classname+'" is not allowed!');
}
if(ch!==true&&ck.hasOwnProperty(cm)){throw new Error('Overwriting member "'+cm+'" of Class "'+cf.classname+'" is not allowed!');
}}if(ci!==false&&cl instanceof Function&&cl.$$type==null){if(cj==true){cl=this.__bl(cl,ck[cm]);
}else{if(ck[cm]){cl.base=ck[cm];
}cl.self=cf;
}
if(qx.core.Environment.get(h)){cl=qx.core.Aspect.wrap(cf.classname+j+cm,cl,B);
}}ck[cm]=cl;
}},__bl:function(cn,co){if(co){return function(){var cq=cn.base;
cn.base=co;
var cp=cn.apply(this,arguments);
cn.base=cq;
return cp;
};
}else{return cn;
}},__bm:function(cr,cs){if(qx.core.Environment.get(m)){if(!cr||!cs){throw new Error("Incomplete parameters!");
}if(this.hasOwnInterface(cr,cs)){throw new Error('Interface "'+cs.name+'" is already used by Class "'+cr.classname+'!');
}if(cr.$$classtype!==d){qx.Interface.assert(cr,cs,true);
}}var ct=qx.Interface.flatten([cs]);

if(cr.$$implements){cr.$$implements.push(cs);
cr.$$flatImplements.push.apply(cr.$$flatImplements,ct);
}else{cr.$$implements=[cs];
cr.$$flatImplements=ct;
}},__bn:function(cu){var name=cu.classname;
var cv=this.__bs(cu,name,cu.$$classtype);
for(var i=0,a=qx.Bootstrap.getKeys(cu),l=a.length;i<l;i++){cw=a[i];
cv[cw]=cu[cw];
}cv.prototype=cu.prototype;
var cy=cu.prototype;

for(var i=0,a=qx.Bootstrap.getKeys(cy),l=a.length;i<l;i++){cw=a[i];
var cz=cy[cw];
if(cz&&cz.self==cu){cz.self=cv;
}}for(var cw in this.$$registry){var cx=this.$$registry[cw];

if(!cx){continue;
}
if(cx.base==cu){cx.base=cv;
}
if(cx.superclass==cu){cx.superclass=cv;
}
if(cx.$$original){if(cx.$$original.base==cu){cx.$$original.base=cv;
}
if(cx.$$original.superclass==cu){cx.$$original.superclass=cv;
}}}qx.Bootstrap.createNamespace(name,cv);
this.$$registry[name]=cv;
return cv;
},__bo:function(cA,cB,cC){if(qx.core.Environment.get(m)){if(!cA||!cB){throw new Error("Incomplete parameters!");
}}
if(this.hasMixin(cA,cB)){return;
}var cF=cA.$$original;

if(cB.$$constructor&&!cF){cA=this.__bn(cA);
}var cE=qx.Mixin.flatten([cB]);
var cD;

for(var i=0,l=cE.length;i<l;i++){cD=cE[i];
if(cD.$$events){this.__bh(cA,cD.$$events,cC);
}if(cD.$$properties){this.__bi(cA,cD.$$properties,cC);
}if(cD.$$members){this.__bk(cA,cD.$$members,cC,cC,cC);
}}if(cA.$$includes){cA.$$includes.push(cB);
cA.$$flatIncludes.push.apply(cA.$$flatIncludes,cE);
}else{cA.$$includes=[cB];
cA.$$flatIncludes=cE;
}},__bp:function(){function cG(){cG.base.apply(this,arguments);
}return cG;
},__bq:function(){return function(){};
},__br:function(cH,cI){if(qx.core.Environment.get(m)){return true;
}if(cH&&cH.$$includes){var cJ=cH.$$flatIncludes;

for(var i=0,l=cJ.length;i<l;i++){if(cJ[i].$$constructor){return true;
}}}if(cI){var cK=qx.Mixin.flatten(cI);

for(var i=0,l=cK.length;i<l;i++){if(cK[i].$$constructor){return true;
}}}return false;
},__bs:function(cL,name,cM){var cO=function(){var cR=cO;

if(qx.core.Environment.get(m)){if(!(this instanceof cR)){throw new Error("Please initialize '"+name+"' objects using the new keyword!");
}if(cM===d){if(this.classname===name){throw new Error("The class ',"+name+"' is abstract! It is not possible to instantiate it.");
}}else if(cM===c){if(!cR.$$allowconstruct){throw new Error("The class '"+name+"' is a singleton! It is not possible to instantiate it directly. Use the static getInstance() method instead.");
}}}var cQ=cR.$$original.apply(this,arguments);
if(cR.$$includes){var cP=cR.$$flatIncludes;

for(var i=0,l=cP.length;i<l;i++){if(cP[i].$$constructor){cP[i].$$constructor.apply(this,arguments);
}}}
if(qx.core.Environment.get(m)){if(this.classname===name){this.$$initialized=true;
}}return cQ;
};

if(qx.core.Environment.get(h)){var cN=qx.core.Aspect.wrap(name,cO,b);
cO.$$original=cL;
cO.constructor=cN;
cO=cN;
}cO.$$original=cL;
cL.wrapper=cO;
return cO;
}},defer:function(){if(qx.core.Environment.get(h)){for(var cS in qx.Bootstrap.$$registry){var cT=qx.Bootstrap.$$registry[cS];

for(var cU in cT){if(cT[cU] instanceof Function){cT[cU]=qx.core.Aspect.wrap(cS+j+cU,cT[cU],g);
}}}}}});
})();
(function(){var x="on",w="qx.debug",u="off",t="|",s="default",r="object",q="&",p="qx.aspects",o="qx.mobile.nativescroll",n="qx.mobile.emulatetouch",e="$",m="qx.client",h="qx.dynlocale",c="webkit",b="qxvariant",g="opera",f=":",j=".",a="qx.core.Variant",k="mshtml",d="gecko";
qx.Bootstrap.define(a,{statics:{__bt:{},__bu:{},compilerIsSet:function(){return true;
},define:function(y,z,A){if(qx.core.Variant.compilerIsSet(w,x)){qx.Bootstrap.warn("The method 'qx.core.Variant.define('"+y+"')' is deprecated: "+"Please use qx.core.Environment.add('"+y+"') instead.");
}this.defineDeprecated(y,z,A);
},defineDeprecated:function(B,C,D){if(qx.core.Variant.compilerIsSet(w,x)){if(!this.__bx(C)){throw new Error('Allowed values of variant "'+B+'" must be defined!');
}
if(D===undefined){throw new Error('Default value of variant "'+B+'" must be defined!');
}}
if(!this.__bt[B]){this.__bt[B]={};
}else if(qx.core.Variant.compilerIsSet(w,x)){if(this.__bt[B].defaultValue!==undefined){throw new Error('Variant "'+B+'" is already defined!');
}}this.__bt[B].allowedValues=C;
this.__bt[B].defaultValue=D;
},get:function(E){var F=this.__bt[E];

if(qx.core.Variant.compilerIsSet(w,x)){qx.Bootstrap.warn("The method 'qx.core.Variant.get('"+E+"')' is deprecated: "+"Please use qx.core.Environment.get('"+E+"') instead.");

if(F===undefined){throw new Error('Variant "'+E+'" is not defined.');
}}
if(F.value!==undefined){return F.value;
}return F.defaultValue;
},__bv:function(){if(window.qxvariants){for(var G in qxvariants){if(qx.core.Variant.compilerIsSet(w,x)){if((G.split(j)).length<2){throw new Error('Malformed settings key "'+G+'". Must be following the schema "namespace.key".');
}}
if(!this.__bt[G]){this.__bt[G]={};
}this.__bt[G].value=qxvariants[G];
}window.qxvariants=undefined;

try{delete window.qxvariants;
}catch(H){}this.__bw(this.__bt);
}},__bw:function(){var I=document.location.search.slice(1).split(q);

for(var i=0;i<I.length;i++){var J=I[i].split(f);

if(J.length!=3||J[0]!=b){continue;
}var K=J[1];

if(!this.__bt[K]){this.__bt[K]={};
}
if(qx.core.Variant.compilerIsSet(w,x)){qx.Bootstrap.warn("URL variants are deprecated. Please use URL environment "+"variables instead. (qxvariant --> qxenv)");
}this.__bt[K].value=decodeURIComponent(J[2]);
}},select:function(L,M){if(qx.core.Variant.compilerIsSet(w,x)){qx.Bootstrap.warn("The method 'qx.core.Variant.select('"+L+"')' is deprecated: "+"Please use qx.core.Environment.select('"+L+"') instead.");
if(!this.__by(this.__bt[L])){throw new Error("Variant \""+L+"\" is not defined");
}
if(!this.__by(M)){throw new Error("the second parameter must be a map!");
}}
for(var N in M){if(this.isSet(L,N)){return M[N];
}}
if(M[s]!==undefined){return M[s];
}
if(qx.core.Variant.compilerIsSet(w,x)){throw new Error('No match for variant "'+L+'" in variants ['+qx.Bootstrap.getKeysAsString(M)+'] found, and no default ("default") given');
}},isSet:function(O,P){if(qx.core.Variant.compilerIsSet(w,x)){qx.Bootstrap.warn("The method 'qx.core.Variant.isSet('"+O+"')' is deprecated: "+"Please use 'qx.core.Environment.get('"+O+"') ==' instead. ");
}var Q=O+e+P;

if(this.__bu[Q]!==undefined){return this.__bu[Q];
}var S=false;
if(P.indexOf(t)<0){S=this.get(O)===P;
}else{var R=P.split(t);

for(var i=0,l=R.length;i<l;i++){if(this.get(O)===R[i]){S=true;
break;
}}}this.__bu[Q]=S;
return S;
},__bx:function(v){return typeof v===r&&v!==null&&v instanceof Array;
},__by:function(v){return typeof v===r&&v!==null&&!(v instanceof Array);
},__bz:function(T,U){for(var i=0,l=T.length;i<l;i++){if(T[i]==U){return true;
}}return false;
}},defer:function(V){V.defineDeprecated(m,[d,k,g,c],qx.bom.client.Engine.getName());
V.defineDeprecated(w,[x,u],x);
V.defineDeprecated(p,[x,u],u);
V.defineDeprecated(h,[x,u],x);
V.defineDeprecated(n,[x,u],u);
V.defineDeprecated(o,[x,u],u);
V.__bv();
}});
})();
(function(){var a="qx.application.IApplication";
qx.Interface.define(a,{members:{main:function(){},finalize:function(){},close:function(){},terminate:function(){}}});
})();
(function(){var c="qx.event.type.Data",b="qx.event.type.Event",a="qx.data.IListData";
qx.Interface.define(a,{events:{"change":c,"changeLength":b},members:{getItem:function(d){},setItem:function(e,f){},splice:function(g,h,i){},contains:function(j){},getLength:function(){},toArray:function(){}}});
})();
(function(){var m="qx.debug",k="The second parameter must be an array.",j="mshtml",h="engine.name",g="The first parameter must be an array.",f="Parameter must be an array.",e="[object Array]",d="qx.lang.Array",c="qx",b="number",a="string";
qx.Class.define(d,{statics:{toArray:function(n,o){return this.cast(n,Array,o);
},cast:function(p,q,r){if(p.constructor===q){return p;
}
if(qx.Class.hasInterface(p,qx.data.IListData)){var p=p.toArray();
}var s=new q;
if((qx.core.Environment.get(h)==j)){if(p.item){for(var i=r||0,l=p.length;i<l;i++){s.push(p[i]);
}return s;
}}if(Object.prototype.toString.call(p)===e&&r==null){s.push.apply(s,p);
}else{s.push.apply(s,Array.prototype.slice.call(p,r||0));
}return s;
},fromArguments:function(t,u){return Array.prototype.slice.call(t,u||0);
},fromCollection:function(v){if((qx.core.Environment.get(h)==j)){if(v.item){var w=[];

for(var i=0,l=v.length;i<l;i++){w[i]=v[i];
}return w;
}}return Array.prototype.slice.call(v,0);
},fromShortHand:function(x){var z=x.length;
var y=qx.lang.Array.clone(x);
switch(z){case 1:y[1]=y[2]=y[3]=y[0];
break;
case 2:y[2]=y[0];
case 3:y[3]=y[1];
}return y;
},clone:function(A){return A.concat();
},insertAt:function(B,C,i){B.splice(i,0,C);
return B;
},insertBefore:function(D,E,F){var i=D.indexOf(F);

if(i==-1){D.push(E);
}else{D.splice(i,0,E);
}return D;
},insertAfter:function(G,H,I){var i=G.indexOf(I);

if(i==-1||i==(G.length-1)){G.push(H);
}else{G.splice(i+1,0,H);
}return G;
},removeAt:function(J,i){return J.splice(i,1)[0];
},removeAll:function(K){K.length=0;
return this;
},append:function(L,M){if(qx.core.Environment.get(m)){qx.core.Assert&&qx.core.Assert.assertArray(L,g);
qx.core.Assert&&qx.core.Assert.assertArray(M,k);
}Array.prototype.push.apply(L,M);
return L;
},exclude:function(N,O){if(qx.core.Environment.get(m)){qx.core.Assert&&qx.core.Assert.assertArray(N,g);
qx.core.Assert&&qx.core.Assert.assertArray(O,k);
}
for(var i=0,Q=O.length,P;i<Q;i++){P=N.indexOf(O[i]);

if(P!=-1){N.splice(P,1);
}}return N;
},remove:function(R,S){var i=R.indexOf(S);

if(i!=-1){R.splice(i,1);
return S;
}},contains:function(T,U){return T.indexOf(U)!==-1;
},equals:function(V,W){var length=V.length;

if(length!==W.length){return false;
}
for(var i=0;i<length;i++){if(V[i]!==W[i]){return false;
}}return true;
},sum:function(X){var Y=0;

for(var i=0,l=X.length;i<l;i++){Y+=X[i];
}return Y;
},max:function(ba){if(qx.core.Environment.get(m)){qx.core.Assert&&qx.core.Assert.assertArray(ba,f);
}var i,bc=ba.length,bb=ba[0];

for(i=1;i<bc;i++){if(ba[i]>bb){bb=ba[i];
}}return bb===undefined?null:bb;
},min:function(bd){if(qx.core.Environment.get(m)){qx.core.Assert&&qx.core.Assert.assertArray(bd,f);
}var i,bf=bd.length,be=bd[0];

for(i=1;i<bf;i++){if(bd[i]<be){be=bd[i];
}}return be===undefined?null:be;
},unique:function(bg){var bq=[],bi={},bl={},bn={};
var bm,bh=0;
var br=c+qx.lang.Date.now();
var bj=false,bp=false,bs=false;
for(var i=0,bo=bg.length;i<bo;i++){bm=bg[i];
if(bm===null){if(!bj){bj=true;
bq.push(bm);
}}else if(bm===undefined){}else if(bm===false){if(!bp){bp=true;
bq.push(bm);
}}else if(bm===true){if(!bs){bs=true;
bq.push(bm);
}}else if(typeof bm===a){if(!bi[bm]){bi[bm]=1;
bq.push(bm);
}}else if(typeof bm===b){if(!bl[bm]){bl[bm]=1;
bq.push(bm);
}}else{bk=bm[br];

if(bk==null){bk=bm[br]=bh++;
}
if(!bn[bk]){bn[bk]=bm;
bq.push(bm);
}}}for(var bk in bn){try{delete bn[bk][br];
}catch(bt){try{bn[bk][br]=null;
}catch(bu){throw new Error("Cannot clean-up map entry doneObjects["+bk+"]["+br+"]");
}}}return bq;
}}});
})();
(function(){var j="()",i="qx.debug",h=".",g=".prototype.",f="Invalid parameter 'func'.",e='anonymous()',d="Trying to call a bound function with a disposed object as context: ",c=" :: ",b="qx.lang.Function",a=".constructor()";
qx.Class.define(b,{statics:{getCaller:function(k){return k.caller?k.caller.callee:k.callee.caller;
},getName:function(l){if(l.displayName){return l.displayName;
}
if(l.$$original||l.wrapper||l.classname){return l.classname+a;
}
if(l.$$mixin){for(var n in l.$$mixin.$$members){if(l.$$mixin.$$members[n]==l){return l.$$mixin.name+g+n+j;
}}for(var n in l.$$mixin){if(l.$$mixin[n]==l){return l.$$mixin.name+h+n+j;
}}}
if(l.self){var o=l.self.constructor;

if(o){for(var n in o.prototype){if(o.prototype[n]==l){return o.classname+g+n+j;
}}for(var n in o){if(o[n]==l){return o.classname+h+n+j;
}}}}var m=l.toString().match(/function\s*(\w*)\s*\(.*/);

if(m&&m.length>=1&&m[1]){return m[1]+j;
}return e;
},globalEval:function(p){if(window.execScript){return window.execScript(p);
}else{return eval.call(window,p);
}},empty:function(){},returnTrue:function(){return true;
},returnFalse:function(){return false;
},returnNull:function(){return null;
},returnThis:function(){return this;
},returnZero:function(){return 0;
},create:function(q,r){if(qx.core.Environment.get(i)){qx.core.Assert&&qx.core.Assert.assertFunction(q,f);
}if(!r){return q;
}if(!(r.self||r.args||r.delay!=null||r.periodical!=null||r.attempt)){return q;
}return function(event){if(qx.core.Environment.get(i)){if(r.self instanceof qx.core.Object){qx.core.Assert&&qx.core.Assert.assertFalse(r.self.isDisposed(),d+r.self.toString()+c+qx.lang.Function.getName(q));
}}var t=qx.lang.Array.fromArguments(arguments);
if(r.args){t=r.args.concat(t);
}
if(r.delay||r.periodical){var s=qx.event.GlobalError.observeMethod(function(){return q.apply(r.self||this,t);
});

if(r.delay){return window.setTimeout(s,r.delay);
}
if(r.periodical){return window.setInterval(s,r.periodical);
}}else if(r.attempt){var u=false;

try{u=q.apply(r.self||this,t);
}catch(v){}return u;
}else{return q.apply(r.self||this,t);
}};
},bind:function(w,self,x){return this.create(w,{self:self,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null});
},curry:function(y,z){return this.create(y,{args:arguments.length>1?qx.lang.Array.fromArguments(arguments,1):null});
},listener:function(A,self,B){if(arguments.length<3){return function(event){return A.call(self||this,event||window.event);
};
}else{var C=qx.lang.Array.fromArguments(arguments,2);
return function(event){var D=[event||window.event];
D.push.apply(D,C);
A.apply(self||this,D);
};
}},attempt:function(E,self,F){return this.create(E,{self:self,attempt:true,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null})();
},delay:function(G,H,self,I){return this.create(G,{delay:H,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
},periodical:function(J,K,self,L){return this.create(J,{periodical:K,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
}}});
})();
(function(){var m=":",l="engine.name",k="Error created at",j="...",h="qx.dev.StackTrace",g="",f="\n",e="?",d="/source/class/",c="anonymous",a="of linked script",b=".";
qx.Bootstrap.define(h,{statics:{getStackTrace:qx.core.Environment.select(l,{"gecko":function(){try{throw new Error();
}catch(A){var u=this.getStackTraceFromError(A);
qx.lang.Array.removeAt(u,0);
var s=this.getStackTraceFromCaller(arguments);
var q=s.length>u.length?s:u;

for(var i=0;i<Math.min(s.length,u.length);i++){var r=s[i];

if(r.indexOf(c)>=0){continue;
}var y=r.split(m);

if(y.length!=2){continue;
}var w=y[0];
var p=y[1];
var o=u[i];
var z=o.split(m);
var v=z[0];
var n=z[1];

if(qx.Class.getByName(v)){var t=v;
}else{t=w;
}var x=t+m;

if(p){x+=p+m;
}x+=n;
q[i]=x;
}return q;
}},"mshtml|webkit":function(){return this.getStackTraceFromCaller(arguments);
},"opera":function(){var B;

try{B.bar();
}catch(D){var C=this.getStackTraceFromError(D);
qx.lang.Array.removeAt(C,0);
return C;
}return [];
}}),getStackTraceFromCaller:qx.core.Environment.select(l,{"opera":function(E){return [];
},"default":function(F){var K=[];
var J=qx.lang.Function.getCaller(F);
var G={};

while(J){var H=qx.lang.Function.getName(J);
K.push(H);

try{J=J.caller;
}catch(L){break;
}
if(!J){break;
}var I=qx.core.ObjectRegistry.toHashCode(J);

if(G[I]){K.push(j);
break;
}G[I]=J;
}return K;
}}),getStackTraceFromError:qx.core.Environment.select(l,{"gecko":function(M){if(!M.stack){return [];
}var S=/@(.+):(\d+)$/gm;
var N;
var O=[];

while((N=S.exec(M.stack))!=null){var P=N[1];
var R=N[2];
var Q=this.__bO(P);
O.push(Q+m+R);
}return O;
},"webkit":function(T){if(T.stack){var bb=/at (.*)/gm;
var ba=/\((.*?)(:[^\/].*)\)/;
var X=/(.*?)(:[^\/].*)/;
var U;
var V=[];

while((U=bb.exec(T.stack))!=null){var W=ba.exec(U[1]);

if(!W){W=X.exec(U[1]);
}
if(W){var Y=this.__bO(W[1]);
V.push(Y+W[2]);
}else{V.push(U[1]);
}}return V;
}else if(T.sourceURL&&T.line){return [this.__bO(T.sourceURL)+m+T.line];
}else{return [];
}},"opera":function(bc){if(bc.stacktrace){var be=bc.stacktrace;

if(be.indexOf(k)>=0){be=be.split(k)[0];
}if(be.indexOf(a)>=0){var bo=/Line\ (\d+?)\ of\ linked\ script\ (.*?)$/gm;
var bf;
var bg=[];

while((bf=bo.exec(be))!=null){var bn=bf[1];
var bi=bf[2];
var bm=this.__bO(bi);
bg.push(bm+m+bn);
}}else{var bo=/line\ (\d+?),\ column\ (\d+?)\ in\ (?:.*?)\ in\ (.*?):[^\/]/gm;
var bf;
var bg=[];

while((bf=bo.exec(be))!=null){var bn=bf[1];
var bh=bf[2];
var bi=bf[3];
var bm=this.__bO(bi);
bg.push(bm+m+bn+m+bh);
}}return bg;
}else if(bc.message.indexOf("Backtrace:")>=0){var bg=[];
var bj=qx.lang.String.trim(bc.message.split("Backtrace:")[1]);
var bk=bj.split(f);

for(var i=0;i<bk.length;i++){var bd=bk[i].match(/\s*Line ([0-9]+) of.* (\S.*)/);

if(bd&&bd.length>=2){var bn=bd[1];
var bl=this.__bO(bd[2]);
bg.push(bl+m+bn);
}}return bg;
}else{return [];
}},"default":function(){return [];
}}),__bO:function(bp){var bt=d;
var bq=bp.indexOf(bt);
var bs=bp.indexOf(e);

if(bs>=0){bp=bp.substring(0,bs);
}var br=(bq==-1)?bp:bp.substring(bq+bt.length).replace(/\//g,b).replace(/\.js$/,g);
return br;
}}});
})();
(function(){var k="",j="g",h="0",g='\\$1',f="%",e='-',d="qx.lang.String",c=' ',b='\n',a="undefined";
qx.Class.define(d,{statics:{camelCase:function(l){return l.replace(/\-([a-z])/g,function(m,n){return n.toUpperCase();
});
},hyphenate:function(o){return o.replace(/[A-Z]/g,function(p){return (e+p.charAt(0).toLowerCase());
});
},capitalize:function(q){return q.replace(/\b[a-z]/g,function(r){return r.toUpperCase();
});
},clean:function(s){return this.trim(s.replace(/\s+/g,c));
},trimLeft:function(t){return t.replace(/^\s+/,k);
},trimRight:function(u){return u.replace(/\s+$/,k);
},trim:function(v){return v.replace(/^\s+|\s+$/g,k);
},startsWith:function(w,x){return w.indexOf(x)===0;
},endsWith:function(y,z){return y.substring(y.length-z.length,y.length)===z;
},repeat:function(A,B){return A.length>0?new Array(B+1).join(A):k;
},pad:function(C,length,D){var E=length-C.length;

if(E>0){if(typeof D===a){D=h;
}return this.repeat(D,E)+C;
}else{return C;
}},firstUp:qx.Bootstrap.firstUp,firstLow:qx.Bootstrap.firstLow,contains:function(F,G){return F.indexOf(G)!=-1;
},format:function(H,I){var J=H;

for(var i=0;i<I.length;i++){J=J.replace(new RegExp(f+(i+1),j),I[i]+k);
}return J;
},escapeRegexpChars:function(K){return K.replace(/([.*+?^${}()|[\]\/\\])/g,g);
},toArray:function(L){return L.split(/\B|\b/g);
},stripTags:function(M){return M.replace(/<\/?[^>]+>/gi,k);
},stripScripts:function(N,O){var Q=k;
var P=N.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(){Q+=arguments[1]+b;
return k;
});

if(O===true){qx.lang.Function.globalEval(Q);
}return P;
}}});
})();
(function(){var a="qx.lang.RingBuffer";
qx.Class.define(a,{extend:Object,construct:function(b){this.setMaxEntries(b||50);
},members:{__bP:0,__bQ:0,__bR:false,__bS:0,__bT:null,__bU:null,setMaxEntries:function(c){this.__bU=c;
this.clear();
},getMaxEntries:function(){return this.__bU;
},addEntry:function(d){this.__bT[this.__bP]=d;
this.__bP=this.__bV(this.__bP,1);
var e=this.getMaxEntries();

if(this.__bQ<e){this.__bQ++;
}if(this.__bR&&(this.__bS<e)){this.__bS++;
}},mark:function(){this.__bR=true;
this.__bS=0;
},clearMark:function(){this.__bR=false;
},getAllEntries:function(){return this.getEntries(this.getMaxEntries(),false);
},getEntries:function(f,g){if(f>this.__bQ){f=this.__bQ;
}if(g&&this.__bR&&(f>this.__bS)){f=this.__bS;
}
if(f>0){var i=this.__bV(this.__bP,-1);
var h=this.__bV(i,-f+1);
var j;

if(h<=i){j=this.__bT.slice(h,i+1);
}else{j=this.__bT.slice(h,this.__bQ).concat(this.__bT.slice(0,i+1));
}}else{j=[];
}return j;
},clear:function(){this.__bT=new Array(this.getMaxEntries());
this.__bQ=0;
this.__bS=0;
this.__bP=0;
},__bV:function(k,l){var m=this.getMaxEntries();
var n=(k+l)%m;
if(n<0){n+=m;
}return n;
}}});
})();
(function(){var a="qx.log.appender.RingBuffer";
qx.Class.define(a,{extend:qx.lang.RingBuffer,construct:function(b){this.setMaxMessages(b||50);
},members:{setMaxMessages:function(c){this.setMaxEntries(c);
},getMaxMessages:function(){return this.getMaxEntries();
},process:function(d){this.addEntry(d);
},getAllLogEvents:function(){return this.getAllEntries();
},retrieveLogEvents:function(e,f){return this.getEntries(e,f);
},clearHistory:function(){this.clear();
}}});
})();
(function(){var k="qx.debug",j="unknown",h="node",g="error",f="...(+",e="array",d=")",c="info",b="instance",a="string",I="null",H="class",G="number",F="stringify",E="]",D="date",C="function",B="boolean",A="debug",z="map",s="undefined",t="qx.log.Logger",q="[",r="#",o="warn",p="document",m="{...(",n="text[",u="[...(",v="\n",x=")}",w=")]",y="object";
qx.Class.define(t,{statics:{__bW:A,setLevel:function(J){this.__bW=J;
},getLevel:function(){return this.__bW;
},setTreshold:function(K){this.__ca.setMaxMessages(K);
},getTreshold:function(){return this.__ca.getMaxMessages();
},__bX:{},__bY:0,register:function(L){if(L.$$id){return;
}var N=this.__bY++;
this.__bX[N]=L;
L.$$id=N;
var M=this.__cb;
var O=this.__ca.getAllLogEvents();

for(var i=0,l=O.length;i<l;i++){if(M[O[i].level]>=M[this.__bW]){L.process(O[i]);
}}},unregister:function(P){var Q=P.$$id;

if(Q==null){return;
}delete this.__bX[Q];
delete P.$$id;
},debug:function(R,S){qx.log.Logger.__cc(A,arguments);
},info:function(T,U){qx.log.Logger.__cc(c,arguments);
},warn:function(V,W){qx.log.Logger.__cc(o,arguments);
},error:function(X,Y){qx.log.Logger.__cc(g,arguments);
},trace:function(ba){qx.log.Logger.__cc(c,[ba,qx.dev.StackTrace.getStackTrace().join(v)]);
},deprecatedMethodWarning:function(bb,bc){if(qx.core.Environment.get(k)){var bd=qx.lang.Function.getName(bb);
this.warn("The method '"+bd+"' is deprecated: "+(bc||"Please consult the API documentation of this method for alternatives."));
this.trace();
}},deprecatedClassWarning:function(be,bf){if(qx.core.Environment.get(k)){var bg=be.classname||j;
this.warn("The class '"+bg+"' is deprecated: "+(bf||"Please consult the API documentation of this class for alternatives."));
this.trace();
}},deprecatedEventWarning:function(bh,event,bi){if(qx.core.Environment.get(k)){var bj=bh.self?bh.self.classname:j;
this.warn("The event '"+(event||"unknown")+"' from class '"+bj+"' is deprecated: "+(bi||"Please consult the API documentation of this class for alternatives."));
this.trace();
}},deprecatedMixinWarning:function(bk,bl){if(qx.core.Environment.get(k)){var bm=bk?bk.name:j;
this.warn("The mixin '"+bm+"' is deprecated: "+(bl||"Please consult the API documentation of this class for alternatives."));
this.trace();
}},deprecatedConstantWarning:function(bn,bo,bp){if(qx.core.Environment.get(k)){if(bn.__defineGetter__){var self=this;
var bq=bn[bo];
bn.__defineGetter__(bo,function(){self.warn("The constant '"+bo+"' is deprecated: "+(bp||"Please consult the API documentation for alternatives."));
self.trace();
return bq;
});
}}},deprecateMethodOverriding:function(br,bs,bt,bu){if(qx.core.Environment.get(k)){var bv=br.constructor;

while(bv.classname!==bs.classname){if(bv.prototype.hasOwnProperty(bt)){this.warn("The method '"+qx.lang.Function.getName(br[bt])+"' overrides a deprecated method: "+(bu||"Please consult the API documentation for alternatives."));
this.trace();
break;
}bv=bv.superclass;
}}},clear:function(){this.__ca.clearHistory();
},__ca:new qx.log.appender.RingBuffer(50),__cb:{debug:0,info:1,warn:2,error:3},__cc:function(bw,bx){var bC=this.__cb;

if(bC[bw]<bC[this.__bW]){return;
}var bz=bx.length<2?null:bx[0];
var bB=bz?1:0;
var by=[];

for(var i=bB,l=bx.length;i<l;i++){by.push(this.__ce(bx[i],true));
}var bD=new Date;
var bE={time:bD,offset:bD-qx.Bootstrap.LOADSTART,level:bw,items:by,win:window};
if(bz){if(bz.$$hash!==undefined){bE.object=bz.$$hash;
}else if(bz.$$type){bE.clazz=bz;
}}this.__ca.process(bE);
var bF=this.__bX;

for(var bA in bF){bF[bA].process(bE);
}},__cd:function(bG){if(bG===undefined){return s;
}else if(bG===null){return I;
}
if(bG.$$type){return H;
}var bH=typeof bG;

if(bH===C||bH==a||bH===G||bH===B){return bH;
}else if(bH===y){if(bG.nodeType){return h;
}else if(bG.classname){return b;
}else if(bG instanceof Array){return e;
}else if(bG instanceof Error){return g;
}else if(bG instanceof Date){return D;
}else{return z;
}}
if(bG.toString){return F;
}return j;
},__ce:function(bI,bJ){var bQ=this.__cd(bI);
var bM=j;
var bL=[];

switch(bQ){case I:case s:bM=bQ;
break;
case a:case G:case B:case D:bM=bI;
break;
case h:if(bI.nodeType===9){bM=p;
}else if(bI.nodeType===3){bM=n+bI.nodeValue+E;
}else if(bI.nodeType===1){bM=bI.nodeName.toLowerCase();

if(bI.id){bM+=r+bI.id;
}}else{bM=h;
}break;
case C:bM=qx.lang.Function.getName(bI)||bQ;
break;
case b:bM=bI.basename+q+bI.$$hash+E;
break;
case H:case F:bM=bI.toString();
break;
case g:bL=qx.dev.StackTrace.getStackTraceFromError(bI);
bM=bI.toString();
break;
case e:if(bJ){bM=[];

for(var i=0,l=bI.length;i<l;i++){if(bM.length>20){bM.push(f+(l-i)+d);
break;
}bM.push(this.__ce(bI[i],false));
}}else{bM=u+bI.length+w;
}break;
case z:if(bJ){var bK;
var bP=[];

for(var bO in bI){bP.push(bO);
}bP.sort();
bM=[];

for(var i=0,l=bP.length;i<l;i++){if(bM.length>20){bM.push(f+(l-i)+d);
break;
}bO=bP[i];
bK=this.__ce(bI[bO],false);
bK.key=bO;
bM.push(bK);
}}else{var bN=0;

for(var bO in bI){bN++;
}bM=m+bN+x;
}break;
}return {type:bQ,text:bM,trace:bL};
}},defer:function(bR){var bS=qx.Bootstrap.$$logs;

for(var i=0;i<bS.length;i++){bR.__cc(bS[i][0],bS[i][1]);
}qx.Bootstrap.debug=bR.debug;
qx.Bootstrap.info=bR.info;
qx.Bootstrap.warn=bR.warn;
qx.Bootstrap.error=bR.error;
qx.Bootstrap.trace=bR.trace;
}});
})();
(function(){var f="qx.debug",e="$$hash",d="",c="qx.core.ObjectRegistry";
qx.Class.define(c,{statics:{inShutDown:false,__cf:{},__cg:0,__ch:[],register:function(g){var k=this.__cf;

if(!k){return;
}var j=g.$$hash;

if(j==null){var h=this.__ch;

if(h.length>0){j=h.pop();
}else{j=(this.__cg++)+d;
}g.$$hash=j;
}
if(qx.core.Environment.get(f)){if(!g.dispose){throw new Error("Invalid object: "+g);
}}k[j]=g;
},unregister:function(m){var n=m.$$hash;

if(n==null){return;
}var o=this.__cf;

if(o&&o[n]){delete o[n];
this.__ch.push(n);
}try{delete m.$$hash;
}catch(p){if(m.removeAttribute){m.removeAttribute(e);
}}},toHashCode:function(q){if(qx.core.Environment.get(f)){if(q==null){throw new Error("Invalid object: "+q);
}}var s=q.$$hash;

if(s!=null){return s;
}var r=this.__ch;

if(r.length>0){s=r.pop();
}else{s=(this.__cg++)+d;
}return q.$$hash=s;
},clearHashCode:function(t){if(qx.core.Environment.get(f)){if(t==null){throw new Error("Invalid object: "+t);
}}var u=t.$$hash;

if(u!=null){this.__ch.push(u);
try{delete t.$$hash;
}catch(v){if(t.removeAttribute){t.removeAttribute(e);
}}}},fromHashCode:function(w){return this.__cf[w]||null;
},shutdown:function(){this.inShutDown=true;
var y=this.__cf;
var A=[];

for(var z in y){A.push(z);
}A.sort(function(a,b){return parseInt(b,10)-parseInt(a,10);
});
var x,i=0,l=A.length;

while(true){try{for(;i<l;i++){z=A[i];
x=y[z];

if(x&&x.dispose){x.dispose();
}}}catch(B){qx.Bootstrap.error(this,"Could not dispose object "+x.toString()+": "+B);

if(i!==l){i++;
continue;
}}break;
}qx.Bootstrap.debug(this,"Disposed "+l+" objects");
delete this.__cf;
},getRegistry:function(){return this.__cf;
}}});
})();
(function(){var k="on",j="engine.name",i="gecko",h="engine.version",g="function",f="mousedown",d="qx.bom.Event",c="return;",b="mouseover",a="HTMLEvents";
qx.Class.define(d,{statics:{addNativeListener:function(l,m,n,o){if(l.addEventListener){l.addEventListener(m,n,!!o);
}else if(l.attachEvent){l.attachEvent(k+m,n);
}},removeNativeListener:function(p,q,r,s){if(p.removeEventListener){p.removeEventListener(q,r,!!s);
}else if(p.detachEvent){try{p.detachEvent(k+q,r);
}catch(e){if(e.number!==-2146828218){throw e;
}}}},getTarget:function(e){return e.target||e.srcElement;
},getRelatedTarget:function(e){if(e.relatedTarget!==undefined){if((qx.core.Environment.get(j)==i)){try{e.relatedTarget&&e.relatedTarget.nodeType;
}catch(e){return null;
}}return e.relatedTarget;
}else if(e.fromElement!==undefined&&e.type===b){return e.fromElement;
}else if(e.toElement!==undefined){return e.toElement;
}else{return null;
}},preventDefault:function(e){if(e.preventDefault){if((qx.core.Environment.get(j)==i)&&parseFloat(qx.core.Environment.get(h))>=1.9&&e.type==f&&e.button==2){return;
}e.preventDefault();
if((qx.core.Environment.get(j)==i)&&parseFloat(qx.core.Environment.get(h))<1.9){try{e.keyCode=0;
}catch(t){}}}else{try{e.keyCode=0;
}catch(u){}e.returnValue=false;
}},stopPropagation:function(e){if(e.stopPropagation){e.stopPropagation();
}else{e.cancelBubble=true;
}},fire:function(v,w){if(document.createEvent){var x=document.createEvent(a);
x.initEvent(w,true,true);
return !v.dispatchEvent(x);
}else{var x=document.createEventObject();
return v.fireEvent(k+w,x);
}},supportsEvent:qx.core.Environment.select(j,{"webkit":function(y,z){return y.hasOwnProperty(k+z);
},"default":function(A,B){var C=k+B;
var D=(C in A);

if(!D){D=typeof A[C]==g;

if(!D&&A.setAttribute){A.setAttribute(C,c);
D=typeof A[C]==g;
A.removeAttribute(C);
}}return D;
}})}});
})();
(function(){var k="qx.debug",j="|bubble",h="|capture",g="|",f="': ",e="'",d="",c="_",b="Invalid Target.",a="Invalid capture flag.",J="Invalid event type.",I=" from the target '",H="Invalid callback function",G="Invalid event target.",F="unload",E="Failed to remove event listener for id '",D="Invalid context for callback.",C="Failed to add event listener for type '",B="UNKNOWN_",A="capture",s="qx.event.Manager",t="' on target '",q="Could not dispatch event '",r="DOM_",o="__bE",p="QX_",m=" to the target '",n="__bF",u="Failed to remove event listener for type '",v="Invalid id type.",x="c",w="DOCUMENT_",z="WIN_",y="Invalid event object.";
qx.Class.define(s,{extend:Object,construct:function(K,L){this.__bA=K;
this.__bB=qx.core.ObjectRegistry.toHashCode(K);
this.__bC=L;
if(K.qx!==qx){var self=this;
qx.bom.Event.addNativeListener(K,F,qx.event.GlobalError.observeMethod(function(){qx.bom.Event.removeNativeListener(K,F,arguments.callee);
self.dispose();
}));
}this.__bD={};
this.__bE={};
this.__bF={};
this.__bG={};
},statics:{__bH:0,getNextUniqueId:function(){return (this.__bH++)+d;
}},members:{__bC:null,__bD:null,__bF:null,__bI:null,__bE:null,__bG:null,__bA:null,__bB:null,getWindow:function(){return this.__bA;
},getWindowId:function(){return this.__bB;
},getHandler:function(M){var N=this.__bE[M.classname];

if(N){return N;
}return this.__bE[M.classname]=new M(this);
},getDispatcher:function(O){var P=this.__bF[O.classname];

if(P){return P;
}return this.__bF[O.classname]=new O(this,this.__bC);
},getListeners:function(Q,R,S){var T=Q.$$hash||qx.core.ObjectRegistry.toHashCode(Q);
var V=this.__bD[T];

if(!V){return null;
}var W=R+(S?h:j);
var U=V[W];
return U?U.concat():null;
},serializeListeners:function(X){var bf=X.$$hash||qx.core.ObjectRegistry.toHashCode(X);
var bh=this.__bD[bf];
var bd=[];

if(bh){var bb,bg,Y,bc,be;

for(var ba in bh){bb=ba.indexOf(g);
bg=ba.substring(0,bb);
Y=ba.charAt(bb+1)==x;
bc=bh[ba];

for(var i=0,l=bc.length;i<l;i++){be=bc[i];
bd.push({self:be.context,handler:be.handler,type:bg,capture:Y});
}}}return bd;
},toggleAttachedEvents:function(bi,bj){var bo=bi.$$hash||qx.core.ObjectRegistry.toHashCode(bi);
var bq=this.__bD[bo];

if(bq){var bl,bp,bk,bm;

for(var bn in bq){bl=bn.indexOf(g);
bp=bn.substring(0,bl);
bk=bn.charCodeAt(bl+1)===99;
bm=bq[bn];

if(bj){this.__bJ(bi,bp,bk);
}else{this.__bK(bi,bp,bk);
}}}},hasListener:function(br,bs,bt){if(qx.core.Environment.get(k)){if(br==null){qx.log.Logger.trace(this);
throw new Error("Invalid object: "+br);
}}var bu=br.$$hash||qx.core.ObjectRegistry.toHashCode(br);
var bw=this.__bD[bu];

if(!bw){return false;
}var bx=bs+(bt?h:j);
var bv=bw[bx];
return !!(bv&&bv.length>0);
},importListeners:function(by,bz){if(qx.core.Environment.get(k)){if(by==null){qx.log.Logger.trace(this);
throw new Error("Invalid object: "+by);
}}var bF=by.$$hash||qx.core.ObjectRegistry.toHashCode(by);
var bG=this.__bD[bF]={};
var bC=qx.event.Manager;

for(var bA in bz){var bD=bz[bA];
var bE=bD.type+(bD.capture?h:j);
var bB=bG[bE];

if(!bB){bB=bG[bE]=[];
this.__bJ(by,bD.type,bD.capture);
}bB.push({handler:bD.listener,context:bD.self,unique:bD.unique||(bC.__bH++)+d});
}},addListener:function(bH,bI,bJ,self,bK){if(qx.core.Environment.get(k)){var bO=C+bI+e+m+bH.classname+f;
qx.core.Assert.assertObject(bH,bO+b);
qx.core.Assert.assertString(bI,bO+J);
qx.core.Assert.assertFunction(bJ,bO+H);

if(bK!==undefined){qx.core.Assert.assertBoolean(bK,a);
}}var bP=bH.$$hash||qx.core.ObjectRegistry.toHashCode(bH);
var bR=this.__bD[bP];

if(!bR){bR=this.__bD[bP]={};
}var bN=bI+(bK?h:j);
var bM=bR[bN];

if(!bM){bM=bR[bN]=[];
}if(bM.length===0){this.__bJ(bH,bI,bK);
}var bQ=(qx.event.Manager.__bH++)+d;
var bL={handler:bJ,context:self,unique:bQ};
bM.push(bL);
return bN+g+bQ;
},findHandler:function(bS,bT){var cg=false,bX=false,ch=false,bU=false;
var ce;

if(bS.nodeType===1){cg=true;
ce=r+bS.tagName.toLowerCase()+c+bT;
}else if(bS.nodeType===9){bU=true;
ce=w+bT;
}else if(bS==this.__bA){bX=true;
ce=z+bT;
}else if(bS.classname){ch=true;
ce=p+bS.classname+c+bT;
}else{ce=B+bS+c+bT;
}var ca=this.__bG;

if(ca[ce]){return ca[ce];
}var cd=this.__bC.getHandlers();
var bY=qx.event.IEventHandler;
var cb,cc,bW,bV;

for(var i=0,l=cd.length;i<l;i++){cb=cd[i];
bW=cb.SUPPORTED_TYPES;

if(bW&&!bW[bT]){continue;
}bV=cb.TARGET_CHECK;

if(bV){var cf=false;

if(cg&&((bV&bY.TARGET_DOMNODE)!=0)){cf=true;
}else if(bX&&((bV&bY.TARGET_WINDOW)!=0)){cf=true;
}else if(ch&&((bV&bY.TARGET_OBJECT)!=0)){cf=true;
}else if(bU&&((bV&bY.TARGET_DOCUMENT)!=0)){cf=true;
}
if(!cf){continue;
}}cc=this.getHandler(cd[i]);

if(cb.IGNORE_CAN_HANDLE||cc.canHandleEvent(bS,bT)){ca[ce]=cc;
return cc;
}}return null;
},__bJ:function(ci,cj,ck){var cl=this.findHandler(ci,cj);

if(cl){cl.registerEvent(ci,cj,ck);
return;
}
if(qx.core.Environment.get(k)){qx.log.Logger.warn(this,"There is no event handler for the event '"+cj+"' on target '"+ci+"'!");
}},removeListener:function(cm,cn,co,self,cp){if(qx.core.Environment.get(k)){var ct=u+cn+e+I+cm.classname+f;
qx.core.Assert.assertObject(cm,ct+b);
qx.core.Assert.assertString(cn,ct+J);
qx.core.Assert.assertFunction(co,ct+H);

if(self!==undefined){qx.core.Assert.assertObject(self,D);
}
if(cp!==undefined){qx.core.Assert.assertBoolean(cp,a);
}}var cu=cm.$$hash||qx.core.ObjectRegistry.toHashCode(cm);
var cv=this.__bD[cu];

if(!cv){return false;
}var cq=cn+(cp?h:j);
var cr=cv[cq];

if(!cr){return false;
}var cs;

for(var i=0,l=cr.length;i<l;i++){cs=cr[i];

if(cs.handler===co&&cs.context===self){qx.lang.Array.removeAt(cr,i);

if(cr.length==0){this.__bK(cm,cn,cp);
}return true;
}}return false;
},removeListenerById:function(cw,cx){if(qx.core.Environment.get(k)){var cD=E+cx+e+I+cw.classname+f;
qx.core.Assert.assertObject(cw,cD+b);
qx.core.Assert.assertString(cx,cD+v);
}var cB=cx.split(g);
var cG=cB[0];
var cy=cB[1].charCodeAt(0)==99;
var cF=cB[2];
var cE=cw.$$hash||qx.core.ObjectRegistry.toHashCode(cw);
var cH=this.__bD[cE];

if(!cH){return false;
}var cC=cG+(cy?h:j);
var cA=cH[cC];

if(!cA){return false;
}var cz;

for(var i=0,l=cA.length;i<l;i++){cz=cA[i];

if(cz.unique===cF){qx.lang.Array.removeAt(cA,i);

if(cA.length==0){this.__bK(cw,cG,cy);
}return true;
}}return false;
},removeAllListeners:function(cI){var cM=cI.$$hash||qx.core.ObjectRegistry.toHashCode(cI);
var cO=this.__bD[cM];

if(!cO){return false;
}var cK,cN,cJ;

for(var cL in cO){if(cO[cL].length>0){cK=cL.split(g);
cN=cK[0];
cJ=cK[1]===A;
this.__bK(cI,cN,cJ);
}}delete this.__bD[cM];
return true;
},deleteAllListeners:function(cP){delete this.__bD[cP];
},__bK:function(cQ,cR,cS){var cT=this.findHandler(cQ,cR);

if(cT){cT.unregisterEvent(cQ,cR,cS);
return;
}
if(qx.core.Environment.get(k)){qx.log.Logger.warn(this,"There is no event handler for the event '"+cR+"' on target '"+cQ+"'!");
}},dispatchEvent:function(cU,event){if(qx.core.Environment.get(k)){var da=q+event+t+cU.classname+f;
qx.core.Assert.assertNotUndefined(cU,da+G);
qx.core.Assert.assertNotNull(cU,da+G);
qx.core.Assert.assertInstance(event,qx.event.type.Event,da+y);
}var db=event.getType();

if(!event.getBubbles()&&!this.hasListener(cU,db)){qx.event.Pool.getInstance().poolObject(event);
return true;
}
if(!event.getTarget()){event.setTarget(cU);
}var cY=this.__bC.getDispatchers();
var cX;
var cW=false;

for(var i=0,l=cY.length;i<l;i++){cX=this.getDispatcher(cY[i]);
if(cX.canDispatchEvent(cU,event,db)){cX.dispatchEvent(cU,event,db);
cW=true;
break;
}}
if(!cW){if(qx.core.Environment.get(k)){qx.log.Logger.error(this,"No dispatcher can handle event of type "+db+" on "+cU);
}return true;
}var cV=event.getDefaultPrevented();
qx.event.Pool.getInstance().poolObject(event);
return !cV;
},dispose:function(){this.__bC.removeManager(this);
qx.util.DisposeUtil.disposeMap(this,o);
qx.util.DisposeUtil.disposeMap(this,n);
this.__bD=this.__bA=this.__bI=null;
this.__bC=this.__bG=null;
}}});
})();
(function(){var p='',o='"',m=':',l=']',h='null',g=': ',f='object',e='function',d=',',b='\n',ba='\\u',Y=',\n',X='0000',W='string',V="Cannot stringify a recursive object.",U='0',T='-',S='}',R='String',Q='Boolean',x='\\\\',y='\\f',u='\\t',w='{\n',s='[]',t="qx.lang.JsonImpl",q='Z',r='\\n',z='Object',A='{}',H='@',F='.',K='(',J='Array',M='T',L='\\r',C='{',P='JSON.parse',O=' ',N='[',B='Number',D=')',E='[\n',G='\\"',I='\\b';
qx.Class.define(t,{extend:Object,construct:function(){this.stringify=qx.lang.Function.bind(this.stringify,this);
this.parse=qx.lang.Function.bind(this.parse,this);
},members:{__dA:null,__dB:null,__dC:null,__dD:null,stringify:function(bb,bc,bd){this.__dA=p;
this.__dB=p;
this.__dD=[];

if(qx.lang.Type.isNumber(bd)){var bd=Math.min(10,Math.floor(bd));

for(var i=0;i<bd;i+=1){this.__dB+=O;
}}else if(qx.lang.Type.isString(bd)){if(bd.length>10){bd=bd.slice(0,10);
}this.__dB=bd;
}if(bc&&(qx.lang.Type.isFunction(bc)||qx.lang.Type.isArray(bc))){this.__dC=bc;
}else{this.__dC=null;
}return this.__dE(p,{'':bb});
},__dE:function(be,bf){var bi=this.__dA,bg,bj=bf[be];
if(bj&&qx.lang.Type.isFunction(bj.toJSON)){bj=bj.toJSON(be);
}else if(qx.lang.Type.isDate(bj)){bj=this.dateToJSON(bj);
}if(typeof this.__dC===e){bj=this.__dC.call(bf,be,bj);
}
if(bj===null){return h;
}
if(bj===undefined){return undefined;
}switch(qx.lang.Type.getClass(bj)){case R:return this.__dF(bj);
case B:return isFinite(bj)?String(bj):h;
case Q:return String(bj);
case J:this.__dA+=this.__dB;
bg=[];

if(this.__dD.indexOf(bj)!==-1){throw new TypeError(V);
}this.__dD.push(bj);
var length=bj.length;

for(var i=0;i<length;i+=1){bg[i]=this.__dE(i,bj)||h;
}this.__dD.pop();
if(bg.length===0){var bh=s;
}else if(this.__dA){bh=E+this.__dA+bg.join(Y+this.__dA)+b+bi+l;
}else{bh=N+bg.join(d)+l;
}this.__dA=bi;
return bh;
case z:this.__dA+=this.__dB;
bg=[];

if(this.__dD.indexOf(bj)!==-1){throw new TypeError(V);
}this.__dD.push(bj);
if(this.__dC&&typeof this.__dC===f){var length=this.__dC.length;

for(var i=0;i<length;i+=1){var k=this.__dC[i];

if(typeof k===W){var v=this.__dE(k,bj);

if(v){bg.push(this.__dF(k)+(this.__dA?g:m)+v);
}}}}else{for(var k in bj){if(Object.hasOwnProperty.call(bj,k)){var v=this.__dE(k,bj);

if(v){bg.push(this.__dF(k)+(this.__dA?g:m)+v);
}}}}this.__dD.pop();
if(bg.length===0){var bh=A;
}else if(this.__dA){bh=w+this.__dA+bg.join(Y+this.__dA)+b+bi+S;
}else{bh=C+bg.join(d)+S;
}this.__dA=bi;
return bh;
}},dateToJSON:function(bk){var bl=function(n){return n<10?U+n:n;
};
var bm=function(n){var bn=bl(n);
return n<100?U+bn:bn;
};
return isFinite(bk.valueOf())?bk.getUTCFullYear()+T+bl(bk.getUTCMonth()+1)+T+bl(bk.getUTCDate())+M+bl(bk.getUTCHours())+m+bl(bk.getUTCMinutes())+m+bl(bk.getUTCSeconds())+F+bm(bk.getUTCMilliseconds())+q:null;
},__dF:function(bo){var bp={'\b':I,'\t':u,'\n':r,'\f':y,'\r':L,'"':G,'\\':x};
var bq=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
bq.lastIndex=0;

if(bq.test(bo)){return o+
bo.replace(bq,function(a){var c=bp[a];
return typeof c===W?c:ba+(X+a.charCodeAt(0).toString(16)).slice(-4);
})+o;
}else{return o+bo+o;
}},parse:function(br,bs){var bt=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
bt.lastIndex=0;
if(bt.test(br)){br=br.replace(bt,function(a){return ba+(X+a.charCodeAt(0).toString(16)).slice(-4);
});
}if(/^[\],:{}\s]*$/.test(br.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,H).replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,l).replace(/(?:^|:|,)(?:\s*\[)+/g,p))){var j=eval(K+br+D);
return typeof bs===e?this.__dG({'':j},p,bs):j;
}throw new SyntaxError(P);
},__dG:function(bu,bv,bw){var bx=bu[bv];

if(bx&&typeof bx===f){for(var k in bx){if(Object.hasOwnProperty.call(bx,k)){var v=this.__dG(bx,k,bw);

if(v!==undefined){bx[k]=v;
}else{delete bx[k];
}}}}return bw.call(bu,bv,bx);
}}});
})();
(function(){var f="qx.lang.Type",e="Error",d="RegExp",c="Date",b="Number",a="Boolean";
qx.Class.define(f,{statics:{getClass:qx.Bootstrap.getClass,isString:qx.Bootstrap.isString,isArray:qx.Bootstrap.isArray,isObject:qx.Bootstrap.isObject,isFunction:qx.Bootstrap.isFunction,isRegExp:function(g){return this.getClass(g)==d;
},isNumber:function(h){return (h!==null&&(this.getClass(h)==b||h instanceof Number));
},isBoolean:function(i){return (i!==null&&(this.getClass(i)==a||i instanceof Boolean));
},isDate:function(j){return (j!==null&&(this.getClass(j)==c||j instanceof Date));
},isError:function(k){return (k!==null&&(this.getClass(k)==e||k instanceof Error));
}}});
})();
(function(){var c="qx.debug",b="GlobalError: ",a="qx.core.GlobalError";
qx.Bootstrap.define(a,{extend:Error,construct:function(d,e){if(qx.core.Environment.get(c)){qx.core.Assert.assertNotUndefined(d);
}this.__dH=b+(d&&d.message?d.message:d);
Error.call(this,this.__dH);
this.__dI=e;
this.__dJ=d;
},members:{__dJ:null,__dI:null,__dH:null,toString:function(){return this.__dH;
},getArguments:function(){return this.__dI;
},getSourceException:function(){return this.__dJ;
}},destruct:function(){this.__dJ=null;
this.__dI=null;
this.__dH=null;
}});
})();
(function(){var c="qx.globalErrorHandling",b="qx.event.GlobalError",a="on";
qx.Bootstrap.define(b,{statics:{setErrorHandler:function(d,e){this.__dK=d||null;
this.__dL=e||window;

if(qx.core.Environment.get(c)){if(d&&window.onerror){var f=qx.Bootstrap.bind(this.__dN,this);

if(this.__dM==null){this.__dM=window.onerror;
}var self=this;
window.onerror=function(g,h,i){self.__dM(g,h,i);
f(g,h,i);
};
}
if(d&&!window.onerror){window.onerror=qx.Bootstrap.bind(this.__dN,this);
}if(this.__dK==null){if(this.__dM!=null){window.onerror=this.__dM;
this.__dM=null;
}else{window.onerror=null;
}}}},__dN:function(j,k,l){if(this.__dK){this.handleError(new qx.core.WindowError(j,k,l));
return true;
}},observeMethod:function(m){if(qx.core.Environment.get(c)){var self=this;
return function(){if(!self.__dK){return m.apply(this,arguments);
}
try{return m.apply(this,arguments);
}catch(n){self.handleError(new qx.core.GlobalError(n,arguments));
}};
}else{return m;
}},handleError:function(o){if(this.__dK){this.__dK.call(this.__dL,o);
}}},defer:function(p){qx.core.Environment.add(c,true);
p.setErrorHandler(null,null);
qx.core.Setting.defineDeprecated(c,a);
}});
})();
(function(){var a="qx.lang.Json";
qx.Class.define(a,{statics:{JSON:(qx.lang.Type.getClass(window.JSON)=="JSON"&&JSON.parse('{"x":1}').x===1)?window.JSON:new qx.lang.JsonImpl(),stringify:null,parse:null},defer:function(b){b.stringify=b.JSON.stringify;
b.parse=b.JSON.parse;
}});
})();
(function(){var c="",b=": ",a="qx.type.BaseError";
qx.Class.define(a,{extend:Error,construct:function(d,e){Error.call(this,e);
this.__dy=d||c;
this.message=e||qx.type.BaseError.DEFAULTMESSAGE;
},statics:{DEFAULTMESSAGE:"error"},members:{__dy:null,message:null,getComment:function(){return this.__dy;
},toString:function(){return this.__dy+(this.message?b+this.message:c);
}}});
})();
(function(){var a="qx.core.AssertionError";
qx.Class.define(a,{extend:qx.type.BaseError,construct:function(b,c){qx.type.BaseError.call(this,b,c);
this.__dz=qx.dev.StackTrace.getStackTrace();
},members:{__dz:null,getStackTrace:function(){return this.__dz;
}}});
})();
(function(){var d="qx.dom.Node",c="engine.name",b="";
qx.Class.define(d,{statics:{ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12,getDocument:function(e){return e.nodeType===
this.DOCUMENT?e:
e.ownerDocument||e.document;
},getWindow:qx.core.Environment.select(c,{"mshtml":function(f){if(f.nodeType==null){return f;
}if(f.nodeType!==this.DOCUMENT){f=f.ownerDocument;
}return f.parentWindow;
},"default":function(g){if(g.nodeType==null){return g;
}if(g.nodeType!==this.DOCUMENT){g=g.ownerDocument;
}return g.defaultView;
}}),getDocumentElement:function(h){return this.getDocument(h).documentElement;
},getBodyElement:function(j){return this.getDocument(j).body;
},isNode:function(k){return !!(k&&k.nodeType!=null);
},isElement:function(l){return !!(l&&l.nodeType===this.ELEMENT);
},isDocument:function(m){return !!(m&&m.nodeType===this.DOCUMENT);
},isText:function(n){return !!(n&&n.nodeType===this.TEXT);
},isWindow:function(o){return !!(o&&o.history&&o.location&&o.document);
},isNodeName:function(p,q){if(!q||!p||!p.nodeName){return false;
}return q.toLowerCase()==qx.dom.Node.getName(p);
},getName:function(r){if(!r||!r.nodeName){return null;
}return r.nodeName.toLowerCase();
},getText:function(s){if(!s||!s.nodeType){return null;
}
switch(s.nodeType){case 1:var i,a=[],t=s.childNodes,length=t.length;

for(i=0;i<length;i++){a[i]=this.getText(t[i]);
}return a.join(b);
case 2:case 3:case 4:return s.nodeValue;
}return null;
},isBlockNode:function(u){if(!qx.dom.Node.isElement(u)){return false;
}u=qx.dom.Node.getName(u);
return /^(body|form|textarea|fieldset|ul|ol|dl|dt|dd|li|div|hr|p|h[1-6]|quote|pre|table|thead|tbody|tfoot|tr|td|th|iframe|address|blockquote)$/.test(u);
}}});
})();
(function(){var p="",o="!",n="'!",m="'",k="Expected '",j="' (rgb(",h=",",g=")), but found value '",f="Event (",d="Expected value to be the CSS color '",bz="' but found ",by="]",bx=", ",bw="The value '",bv=" != ",bu="qx.core.Object",bt="Expected value to be an array but found ",bs=") was fired.",br="Expected value to be an integer >= 0 but found ",bq="' to be not equal with '",w="' to '",x="Expected object '",u="Called assertTrue with '",v="Expected value to be a map but found ",s="The function did not raise an exception!",t="Expected value to be undefined but found ",q="Expected value to be a DOM element but found  '",r="Expected value to be a regular expression but found ",E="' to implement the interface '",F="Expected value to be null but found ",S="Invalid argument 'type'",O="Called assert with 'false'",bb="Assertion error! ",V="null",bm="' but found '",bg="' must must be a key of the map '",J="The String '",bp="Expected value to be a string but found ",bo="Expected value not to be undefined but found undefined!",bn="qx.util.ColorUtil",I=": ",L="The raised exception does not have the expected type! ",N=") not fired.",Q="qx.core.Assert",T="Expected value to be typeof object but found ",W="' (identical) but found '",bd="' must have any of the values defined in the array '",bi="Expected value to be a number but found ",y="Called assertFalse with '",z="qx.ui.core.Widget",K="Expected value to be a qooxdoo object but found ",ba="' arguments.",Y="Expected value '%1' to be in the range '%2'..'%3'!",X="Array[",bf="' does not match the regular expression '",be="' to be not identical with '",U="Expected [",bc="' arguments but found '",a="', which cannot be converted to a CSS color!",bh="qx.core.AssertionError",A="Expected value to be a boolean but found ",B="Expected value not to be null but found null!",P="))!",b="Expected value to be a qooxdoo widget but found ",c="Expected value to be typeof '",H="Expected value to be typeof function but found ",C="Expected value to be an integer but found ",D="Called fail().",G="The parameter 're' must be a string or a regular expression.",R="Expected value to be a number >= 0 but found ",bk="Expected value to be instanceof '",bj="], but found [",M="Wrong number of arguments given. Expected '",bl="object";
qx.Class.define(Q,{statics:{__ci:true,__cj:function(bA,bB){var bF=p;

for(var i=1,l=arguments.length;i<l;i++){bF=bF+this.__ck(arguments[i]);
}var bE=p;

if(bF){bE=bA+I+bF;
}else{bE=bA;
}var bD=bb+bE;

if(this.__ci){qx.Bootstrap.error(bD);
}
if(qx.Class.isDefined(bh)){var bC=new qx.core.AssertionError(bA,bF);

if(this.__ci){qx.Bootstrap.error("Stack trace: \n"+bC.getStackTrace());
}throw bC;
}else{throw new Error(bD);
}},__ck:function(bG){var bH;

if(bG===null){bH=V;
}else if(qx.lang.Type.isArray(bG)&&bG.length>10){bH=X+bG.length+by;
}else if((bG instanceof Object)&&(bG.toString==null)){bH=qx.lang.Json.stringify(bG,null,2);
}else{try{bH=bG.toString();
}catch(e){bH=p;
}}return bH;
},assert:function(bI,bJ){bI==true||this.__cj(bJ||p,O);
},fail:function(bK,bL){var bM=bL?p:D;
this.__cj(bK||p,bM);
},assertTrue:function(bN,bO){(bN===true)||this.__cj(bO||p,u,bN,m);
},assertFalse:function(bP,bQ){(bP===false)||this.__cj(bQ||p,y,bP,m);
},assertEquals:function(bR,bS,bT){bR==bS||this.__cj(bT||p,k,bR,bm,bS,n);
},assertNotEquals:function(bU,bV,bW){bU!=bV||this.__cj(bW||p,k,bU,bq,bV,n);
},assertIdentical:function(bX,bY,ca){bX===bY||this.__cj(ca||p,k,bX,W,bY,n);
},assertNotIdentical:function(cb,cc,cd){cb!==cc||this.__cj(cd||p,k,cb,be,cc,n);
},assertNotUndefined:function(ce,cf){ce!==undefined||this.__cj(cf||p,bo);
},assertUndefined:function(cg,ch){cg===undefined||this.__cj(ch||p,t,cg,o);
},assertNotNull:function(ci,cj){ci!==null||this.__cj(cj||p,B);
},assertNull:function(ck,cl){ck===null||this.__cj(cl||p,F,ck,o);
},assertJsonEquals:function(cm,cn,co){this.assertEquals(qx.lang.Json.stringify(cm),qx.lang.Json.stringify(cn),co);
},assertMatch:function(cp,cq,cr){this.assertString(cp);
this.assert(qx.lang.Type.isRegExp(cq)||qx.lang.Type.isString(cq),G);
cp.search(cq)>=0||this.__cj(cr||p,J,cp,bf,cq.toString(),n);
},assertArgumentsCount:function(cs,ct,cu,cv){var cw=cs.length;
(cw>=ct&&cw<=cu)||this.__cj(cv||p,M,ct,w,cu,bc,arguments.length,ba);
},assertEventFired:function(cx,event,cy,cz,cA){var cC=false;
var cB=function(e){if(cz){cz.call(cx,e);
}cC=true;
};
var cD;

try{cD=cx.addListener(event,cB,cx);
cy.call();
}catch(cE){throw cE;
}finally{try{cx.removeListenerById(cD);
}catch(cF){}}cC===true||this.__cj(cA||p,f,event,N);
},assertEventNotFired:function(cG,event,cH,cI){var cK=false;
var cJ=function(e){cK=true;
};
var cL=cG.addListener(event,cJ,cG);
cH.call();
cK===false||this.__cj(cI||p,f,event,bs);
cG.removeListenerById(cL);
},assertException:function(cM,cN,cO,cP){var cN=cN||Error;
var cQ;

try{this.__ci=false;
cM();
}catch(cR){cQ=cR;
}finally{this.__ci=true;
}
if(cQ==null){this.__cj(cP||p,s);
}cQ instanceof cN||this.__cj(cP||p,L,cN,bv,cQ);

if(cO){this.assertMatch(cQ.toString(),cO,cP);
}},assertInArray:function(cS,cT,cU){cT.indexOf(cS)!==-1||this.__cj(cU||p,bw,cS,bd,cT,m);
},assertArrayEquals:function(cV,cW,cX){this.assertArray(cV,cX);
this.assertArray(cW,cX);
cX=cX||U+cV.join(bx)+bj+cW.join(bx)+by;

if(cV.length!==cW.length){this.fail(cX,true);
}
for(var i=0;i<cV.length;i++){if(cV[i]!==cW[i]){this.fail(cX,true);
}}},assertKeyInMap:function(cY,da,db){da[cY]!==undefined||this.__cj(db||p,bw,cY,bg,da,m);
},assertFunction:function(dc,dd){qx.lang.Type.isFunction(dc)||this.__cj(dd||p,H,dc,o);
},assertString:function(de,df){qx.lang.Type.isString(de)||this.__cj(df||p,bp,de,o);
},assertBoolean:function(dg,dh){qx.lang.Type.isBoolean(dg)||this.__cj(dh||p,A,dg,o);
},assertNumber:function(di,dj){(qx.lang.Type.isNumber(di)&&isFinite(di))||this.__cj(dj||p,bi,di,o);
},assertPositiveNumber:function(dk,dl){(qx.lang.Type.isNumber(dk)&&isFinite(dk)&&dk>=0)||this.__cj(dl||p,R,dk,o);
},assertInteger:function(dm,dn){(qx.lang.Type.isNumber(dm)&&isFinite(dm)&&dm%1===0)||this.__cj(dn||p,C,dm,o);
},assertPositiveInteger:function(dp,dq){var dr=(qx.lang.Type.isNumber(dp)&&isFinite(dp)&&dp%1===0&&dp>=0);
dr||this.__cj(dq||p,br,dp,o);
},assertInRange:function(ds,dt,du,dv){(ds>=dt&&ds<=du)||this.__cj(dv||p,qx.lang.String.format(Y,[ds,dt,du]));
},assertObject:function(dw,dx){var dy=dw!==null&&(qx.lang.Type.isObject(dw)||typeof dw===bl);
dy||this.__cj(dx||p,T,(dw),o);
},assertArray:function(dz,dA){qx.lang.Type.isArray(dz)||this.__cj(dA||p,bt,dz,o);
},assertMap:function(dB,dC){qx.lang.Type.isObject(dB)||this.__cj(dC||p,v,dB,o);
},assertRegExp:function(dD,dE){qx.lang.Type.isRegExp(dD)||this.__cj(dE||p,r,dD,o);
},assertType:function(dF,dG,dH){this.assertString(dG,S);
typeof (dF)===dG||this.__cj(dH||p,c,dG,bz,dF,o);
},assertInstance:function(dI,dJ,dK){var dL=dJ.classname||dJ+p;
dI instanceof dJ||this.__cj(dK||p,bk,dL,bz,dI,o);
},assertInterface:function(dM,dN,dO){qx.Class.implementsInterface(dM,dN)||this.__cj(dO||p,x,dM,E,dN,n);
},assertCssColor:function(dP,dQ,dR){var dS=qx.Class.getByName(bn);

if(!dS){throw new Error("qx.util.ColorUtil not available! Your code must have a dependency on 'qx.util.ColorUtil'");
}var dU=dS.stringToRgb(dP);

try{var dT=dS.stringToRgb(dQ);
}catch(dW){this.__cj(dR||p,d,dP,j,dU.join(h),g,dQ,a);
}var dV=dU[0]==dT[0]&&dU[1]==dT[1]&&dU[2]==dT[2];
dV||this.__cj(dR||p,d,dU,j,dU.join(h),g,dQ,j,dT.join(h),P);
},assertElement:function(dX,dY){!!(dX&&dX.nodeType===1)||this.__cj(dY||p,q,dX,n);
},assertQxObject:function(ea,eb){this.__cl(ea,bu)||this.__cj(eb||p,K,ea,o);
},assertQxWidget:function(ec,ed){this.__cl(ec,z)||this.__cj(ed||p,b,ec,o);
},__cl:function(ee,ef){if(!ee){return false;
}var eg=ee.constructor;

while(eg){if(eg.classname===ef){return true;
}eg=eg.superclass;
}return false;
}}});
})();
(function(){var k="qx.debug",j="Invalid event target.",i="Invalid event dispatcher!",h="': ",g="Invalid event handler.",f="' on target '",e="Could not fire event '",d="undefined",c="qx.event.Registration";
qx.Class.define(c,{statics:{__bL:{},getManager:function(l){if(l==null){if(qx.core.Environment.get(k)){qx.log.Logger.error("qx.event.Registration.getManager(null) was called!");
qx.log.Logger.trace(this);
}l=window;
}else if(l.nodeType){l=qx.dom.Node.getWindow(l);
}else if(!qx.dom.Node.isWindow(l)){l=window;
}var n=l.$$hash||qx.core.ObjectRegistry.toHashCode(l);
var m=this.__bL[n];

if(!m){m=new qx.event.Manager(l,this);
this.__bL[n]=m;
}return m;
},removeManager:function(o){var p=o.getWindowId();
delete this.__bL[p];
},addListener:function(q,r,s,self,t){return this.getManager(q).addListener(q,r,s,self,t);
},removeListener:function(u,v,w,self,x){return this.getManager(u).removeListener(u,v,w,self,x);
},removeListenerById:function(y,z){return this.getManager(y).removeListenerById(y,z);
},removeAllListeners:function(A){return this.getManager(A).removeAllListeners(A);
},deleteAllListeners:function(B){var C=B.$$hash;

if(C){this.getManager(B).deleteAllListeners(C);
}},hasListener:function(D,E,F){return this.getManager(D).hasListener(D,E,F);
},serializeListeners:function(G){return this.getManager(G).serializeListeners(G);
},createEvent:function(H,I,J){if(qx.core.Environment.get(k)){if(arguments.length>1&&I===undefined){throw new Error("Create event of type "+H+" with undefined class. Please use null to explicit fallback to default event type!");
}}if(I==null){I=qx.event.type.Event;
}var K=qx.event.Pool.getInstance().getObject(I);
J?K.init.apply(K,J):K.init();
if(H){K.setType(H);
}return K;
},dispatchEvent:function(L,event){return this.getManager(L).dispatchEvent(L,event);
},fireEvent:function(M,N,O,P){if(qx.core.Environment.get(k)){if(arguments.length>2&&O===undefined&&P!==undefined){throw new Error("Create event of type "+N+" with undefined class. Please use null to explicit fallback to default event type!");
}var Q=e+N+f+(M?M.classname:d)+h;
qx.core.Assert.assertNotUndefined(M,Q+j);
qx.core.Assert.assertNotNull(M,Q+j);
}var R=this.createEvent(N,O||null,P);
return this.getManager(M).dispatchEvent(M,R);
},fireNonBubblingEvent:function(S,T,U,V){if(qx.core.Environment.get(k)){if(arguments.length>2&&U===undefined&&V!==undefined){throw new Error("Create event of type "+T+" with undefined class. Please use null to explicit fallback to default event type!");
}}var W=this.getManager(S);

if(!W.hasListener(S,T,false)){return true;
}var X=this.createEvent(T,U||null,V);
return W.dispatchEvent(S,X);
},PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__bM:[],addHandler:function(Y){if(qx.core.Environment.get(k)){qx.core.Assert.assertInterface(Y,qx.event.IEventHandler,g);
}this.__bM.push(Y);
this.__bM.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getHandlers:function(){return this.__bM;
},__bN:[],addDispatcher:function(ba,bb){if(qx.core.Environment.get(k)){qx.core.Assert.assertInterface(ba,qx.event.IEventDispatcher,i);
}this.__bN.push(ba);
this.__bN.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getDispatchers:function(){return this.__bN;
}}});
})();
(function(){var a="qx.event.IEventHandler";
qx.Interface.define(a,{statics:{TARGET_DOMNODE:1,TARGET_WINDOW:2,TARGET_OBJECT:4,TARGET_DOCUMENT:8},members:{canHandleEvent:function(b,c){},registerEvent:function(d,e,f){},unregisterEvent:function(g,h,i){}}});
})();
(function(){var a="qx.data.MBinding";
qx.Mixin.define(a,{members:{bind:function(b,c,d,e){return qx.data.SingleValueBinding.bind(this,b,c,d,e);
},removeBinding:function(f){qx.data.SingleValueBinding.removeBindingFromObject(this,f);
},removeAllBindings:function(){qx.data.SingleValueBinding.removeAllBindingsForObject(this);
},getBindings:function(){return qx.data.SingleValueBinding.getAllBindingsForObject(this);
}}});
})();
(function(){var a="qx.core.MAssert";
qx.Mixin.define(a,{members:{assert:function(b,c){qx.core.Assert.assert(b,c);
},fail:function(d,e){qx.core.Assert.fail(d,e);
},assertTrue:function(f,g){qx.core.Assert.assertTrue(f,g);
},assertFalse:function(h,i){qx.core.Assert.assertFalse(h,i);
},assertEquals:function(j,k,l){qx.core.Assert.assertEquals(j,k,l);
},assertNotEquals:function(m,n,o){qx.core.Assert.assertNotEquals(m,n,o);
},assertIdentical:function(p,q,r){qx.core.Assert.assertIdentical(p,q,r);
},assertNotIdentical:function(s,t,u){qx.core.Assert.assertNotIdentical(s,t,u);
},assertNotUndefined:function(v,w){qx.core.Assert.assertNotUndefined(v,w);
},assertUndefined:function(x,y){qx.core.Assert.assertUndefined(x,y);
},assertNotNull:function(z,A){qx.core.Assert.assertNotNull(z,A);
},assertNull:function(B,C){qx.core.Assert.assertNull(B,C);
},assertJsonEquals:function(D,E,F){qx.core.Assert.assertJsonEquals(D,E,F);
},assertMatch:function(G,H,I){qx.core.Assert.assertMatch(G,H,I);
},assertArgumentsCount:function(J,K,L,M){qx.core.Assert.assertArgumentsCount(J,K,L,M);
},assertEventFired:function(N,event,O,P,Q){qx.core.Assert.assertEventFired(N,event,O,P,Q);
},assertEventNotFired:function(R,event,S,T){qx.core.Assert.assertEventNotFired(R,event,S,T);
},assertException:function(U,V,W,X){qx.core.Assert.assertException(U,V,W,X);
},assertInArray:function(Y,ba,bb){qx.core.Assert.assertInArray(Y,ba,bb);
},assertArrayEquals:function(bc,bd,be){qx.core.Assert.assertArrayEquals(bc,bd,be);
},assertKeyInMap:function(bf,bg,bh){qx.core.Assert.assertKeyInMap(bf,bg,bh);
},assertFunction:function(bi,bj){qx.core.Assert.assertFunction(bi,bj);
},assertString:function(bk,bl){qx.core.Assert.assertString(bk,bl);
},assertBoolean:function(bm,bn){qx.core.Assert.assertBoolean(bm,bn);
},assertNumber:function(bo,bp){qx.core.Assert.assertNumber(bo,bp);
},assertPositiveNumber:function(bq,br){qx.core.Assert.assertPositiveNumber(bq,br);
},assertInteger:function(bs,bt){qx.core.Assert.assertInteger(bs,bt);
},assertPositiveInteger:function(bu,bv){qx.core.Assert.assertPositiveInteger(bu,bv);
},assertInRange:function(bw,bx,by,bz){qx.core.Assert.assertInRange(bw,bx,by,bz);
},assertObject:function(bA,bB){qx.core.Assert.assertObject(bA,bB);
},assertArray:function(bC,bD){qx.core.Assert.assertArray(bC,bD);
},assertMap:function(bE,bF){qx.core.Assert.assertMap(bE,bF);
},assertRegExp:function(bG,bH){qx.core.Assert.assertRegExp(bG,bH);
},assertType:function(bI,bJ,bK){qx.core.Assert.assertType(bI,bJ,bK);
},assertInstance:function(bL,bM,bN){qx.core.Assert.assertInstance(bL,bM,bN);
},assertInterface:function(bO,bP,bQ){qx.core.Assert.assertInterface(bO,bP,bQ);
},assertCssColor:function(bR,bS,bT){qx.core.Assert.assertCssColor(bR,bS,bT);
},assertElement:function(bU,bV){qx.core.Assert.assertElement(bU,bV);
},assertQxObject:function(bW,bX){qx.core.Assert.assertQxObject(bW,bX);
},assertQxWidget:function(bY,ca){qx.core.Assert.assertQxWidget(bY,ca);
}}});
})();
(function(){var t="qx.debug",s="qx.disposerDebugLevel",r="set",q="MSIE 6.0",p="get",o="rv:1.8.1",n="reset",m="info",k="qx.core.Object",j="error",c="warn",h="]",g="debug",b="[",a="$$user_",f="object",d="Object";
qx.Class.define(k,{extend:Object,include:[qx.data.MBinding],construct:function(){qx.core.ObjectRegistry.register(this);
},statics:{$$type:d},members:{toHashCode:function(){return this.$$hash;
},toString:function(){return this.classname+b+this.$$hash+h;
},base:function(u,v){if(qx.core.Environment.get(t)){if(!qx.Bootstrap.isFunction(u.callee.base)){throw new Error("Cannot call super class. Method is not derived: "+u.callee.displayName);
}}
if(arguments.length===1){return u.callee.base.call(this);
}else{return u.callee.base.apply(this,Array.prototype.slice.call(arguments,1));
}},self:function(w){return w.callee.self;
},clone:function(){var y=this.constructor;
var x=new y;
var A=qx.Class.getProperties(y);
var z=qx.core.Property.$$store.user;
var B=qx.core.Property.$$method.set;
var name;
for(var i=0,l=A.length;i<l;i++){name=A[i];

if(this.hasOwnProperty(z[name])){x[B[name]](this[z[name]]);
}}return x;
},set:function(C,D){var F=qx.core.Property.$$method.set;

if(qx.Bootstrap.isString(C)){if(!this[F[C]]){if(this[r+qx.Bootstrap.firstUp(C)]!=undefined){this[r+qx.Bootstrap.firstUp(C)](D);
return this;
}
if(qx.core.Environment.get(t)){qx.Bootstrap.error(new Error("No such property: "+C));
return this;
}}return this[F[C]](D);
}else{for(var E in C){if(!this[F[E]]){if(this[r+qx.Bootstrap.firstUp(E)]!=undefined){this[r+qx.Bootstrap.firstUp(E)](C[E]);
continue;
}
if(qx.core.Environment.get(t)){qx.Bootstrap.error(new Error("No such property: "+E));
return this;
}}this[F[E]](C[E]);
}return this;
}},get:function(G){var H=qx.core.Property.$$method.get;

if(!this[H[G]]){if(this[p+qx.Bootstrap.firstUp(G)]!=undefined){return this[p+qx.Bootstrap.firstUp(G)]();
}
if(qx.core.Environment.get(t)){qx.Bootstrap.error(new Error("No such property: "+G));
return this;
}}return this[H[G]]();
},reset:function(I){var J=qx.core.Property.$$method.reset;

if(!this[J[I]]){if(this[n+qx.Bootstrap.firstUp(I)]!=undefined){this[n+qx.Bootstrap.firstUp(I)]();
return;
}
if(qx.core.Environment.get(t)){qx.Bootstrap.error(new Error("No such property: "+I));
return;
}}this[J[I]]();
},__cm:qx.event.Registration,addListener:function(K,L,self,M){if(!this.$$disposed){return this.__cm.addListener(this,K,L,self,M);
}return null;
},addListenerOnce:function(N,O,self,P){var Q=function(e){this.removeListener(N,Q,this,P);
O.call(self||this,e);
};
return this.addListener(N,Q,this,P);
},removeListener:function(R,S,self,T){if(!this.$$disposed){return this.__cm.removeListener(this,R,S,self,T);
}return false;
},removeListenerById:function(U){if(!this.$$disposed){return this.__cm.removeListenerById(this,U);
}return false;
},hasListener:function(V,W){return this.__cm.hasListener(this,V,W);
},dispatchEvent:function(X){if(!this.$$disposed){return this.__cm.dispatchEvent(this,X);
}return true;
},fireEvent:function(Y,ba,bb){if(!this.$$disposed){return this.__cm.fireEvent(this,Y,ba,bb);
}return true;
},fireNonBubblingEvent:function(bc,bd,be){if(!this.$$disposed){return this.__cm.fireNonBubblingEvent(this,bc,bd,be);
}return true;
},fireDataEvent:function(bf,bg,bh,bi){if(!this.$$disposed){if(bh===undefined){bh=null;
}return this.__cm.fireNonBubblingEvent(this,bf,qx.event.type.Data,[bg,bh,!!bi]);
}return true;
},__cn:null,setUserData:function(bj,bk){if(!this.__cn){this.__cn={};
}this.__cn[bj]=bk;
},getUserData:function(bl){if(!this.__cn){return null;
}var bm=this.__cn[bl];
return bm===undefined?null:bm;
},__co:qx.log.Logger,debug:function(bn){this.__cp(g,arguments);
},info:function(bo){this.__cp(m,arguments);
},warn:function(bp){this.__cp(c,arguments);
},error:function(bq){this.__cp(j,arguments);
},trace:function(){this.__co.trace(this);
},__cp:function(br,bs){var bt=qx.lang.Array.fromArguments(bs);
bt.unshift(this);
this.__co[br].apply(this.__co,bt);
},isDisposed:function(){return this.$$disposed||false;
},dispose:function(){if(this.$$disposed){return;
}this.$$disposed=true;
this.$$instance=null;
this.$$allowconstruct=null;
if(qx.core.Environment.get(t)){if(qx.core.Environment.get(s)>2){qx.Bootstrap.debug(this,"Disposing "+this.classname+"["+this.toHashCode()+"]");
}}var bw=this.constructor;
var bu;

while(bw.superclass){if(bw.$$destructor){bw.$$destructor.call(this);
}if(bw.$$includes){bu=bw.$$flatIncludes;

for(var i=0,l=bu.length;i<l;i++){if(bu[i].$$destructor){bu[i].$$destructor.call(this);
}}}bw=bw.superclass;
}if(this.__cq){this.__cq();
}if(qx.core.Environment.get(t)){if(qx.core.Environment.get(s)>0){var bx,bv;

for(bx in this){bv=this[bx];
if(bv!==null&&typeof bv===f&&!(qx.Bootstrap.isString(bv))){if(this.constructor.prototype[bx]!=null){continue;
}var bz=navigator.userAgent.indexOf(o)!=-1;
var by=navigator.userAgent.indexOf(q)!=-1;
if(bz||by){if(bv instanceof qx.core.Object||qx.core.Environment.get(s)>1){qx.Bootstrap.warn(this,"Missing destruct definition for '"+bx+"' in "+this.classname+"["+this.toHashCode()+"]: "+bv);
delete this[bx];
}}else{if(qx.core.Environment.get(s)>1){qx.Bootstrap.warn(this,"Missing destruct definition for '"+bx+"' in "+this.classname+"["+this.toHashCode()+"]: "+bv);
delete this[bx];
}}}}}}},__cq:null,__cr:function(){var bA=qx.Class.getProperties(this.constructor);

for(var i=0,l=bA.length;i<l;i++){delete this[a+bA[i]];
}},_disposeObjects:function(bB){qx.util.DisposeUtil.disposeObjects(this,arguments);
},_disposeSingletonObjects:function(bC){qx.util.DisposeUtil.disposeObjects(this,arguments,true);
},_disposeArray:function(bD){qx.util.DisposeUtil.disposeArray(this,bD);
},_disposeMap:function(bE){qx.util.DisposeUtil.disposeMap(this,bE);
}},environment:{"qx.disposerDebugLevel":0},defer:function(bF,bG){if(qx.core.Environment.get(t)){qx.Class.include(bF,qx.core.MAssert);
}var bI=navigator.userAgent.indexOf(q)!=-1;
var bH=navigator.userAgent.indexOf(o)!=-1;
if(bI||bH){bG.__cq=bG.__cr;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.event.Registration.removeAllListeners(this);
}else{qx.event.Registration.deleteAllListeners(this);
}qx.core.ObjectRegistry.unregister(this);
this.__cn=null;
var bL=this.constructor;
var bP;
var bQ=qx.core.Property.$$store;
var bN=bQ.user;
var bO=bQ.theme;
var bJ=bQ.inherit;
var bM=bQ.useinit;
var bK=bQ.init;

while(bL){bP=bL.$$properties;

if(bP){for(var name in bP){if(bP[name].dereference){this[bN[name]]=this[bO[name]]=this[bJ[name]]=this[bM[name]]=this[bK[name]]=undefined;
}}}bL=bL.superclass;
}}});
})();
(function(){var b="qx.util.ObjectPool",a="Integer";
qx.Class.define(b,{extend:qx.core.Object,construct:function(c){qx.core.Object.call(this);
this.__dR={};

if(c!=null){this.setSize(c);
}},properties:{size:{check:a,init:Infinity}},members:{__dR:null,getObject:function(d){if(this.$$disposed){return new d;
}
if(!d){throw new Error("Class needs to be defined!");
}var e=null;
var f=this.__dR[d.classname];

if(f){e=f.pop();
}
if(e){e.$$pooled=false;
}else{e=new d;
}return e;
},poolObject:function(g){if(!this.__dR){return;
}var h=g.classname;
var j=this.__dR[h];

if(g.$$pooled){throw new Error("Object is already pooled: "+g);
}
if(!j){this.__dR[h]=j=[];
}if(j.length>this.getSize()){if(g.destroy){g.destroy();
}else{g.dispose();
}return;
}g.$$pooled=true;
j.push(g);
}},destruct:function(){var n=this.__dR;
var k,m,i,l;

for(k in n){m=n[k];

for(i=0,l=m.length;i<l;i++){m[i].dispose();
}}delete this.__dR;
}});
})();
(function(){var b="singleton",a="qx.event.Pool";
qx.Class.define(a,{extend:qx.util.ObjectPool,type:b,construct:function(){qx.util.ObjectPool.call(this,30);
}});
})();
(function(){var f="qx.debug",e="Cannot stop propagation on a non bubbling event: ",d="Invalid argument value 'cancelable'.",c="Cannot prevent default action on a non cancelable event: ",b="Invalid argument value 'canBubble'.",a="qx.event.type.Event";
qx.Class.define(a,{extend:qx.core.Object,statics:{CAPTURING_PHASE:1,AT_TARGET:2,BUBBLING_PHASE:3},members:{init:function(g,h){if(qx.core.Environment.get(f)){if(g!==undefined){qx.core.Assert.assertBoolean(g,b);
}
if(h!==undefined){qx.core.Assert.assertBoolean(h,d);
}}this._type=null;
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
},clone:function(i){if(i){var j=i;
}else{var j=qx.event.Pool.getInstance().getObject(this.constructor);
}j._type=this._type;
j._target=this._target;
j._currentTarget=this._currentTarget;
j._relatedTarget=this._relatedTarget;
j._originalTarget=this._originalTarget;
j._stopPropagation=this._stopPropagation;
j._bubbles=this._bubbles;
j._preventDefault=this._preventDefault;
j._cancelable=this._cancelable;
return j;
},stop:function(){if(this._bubbles){this.stopPropagation();
}
if(this._cancelable){this.preventDefault();
}},stopPropagation:function(){if(qx.core.Environment.get(f)){this.assertTrue(this._bubbles,e+this.getType());
}this._stopPropagation=true;
},getPropagationStopped:function(){return !!this._stopPropagation;
},preventDefault:function(){if(qx.core.Environment.get(f)){this.assertTrue(this._cancelable,c+this.getType());
}this._preventDefault=true;
},getDefaultPrevented:function(){return !!this._preventDefault;
},getType:function(){return this._type;
},setType:function(k){this._type=k;
},getEventPhase:function(){return this._eventPhase;
},setEventPhase:function(l){this._eventPhase=l;
},getTimeStamp:function(){return this._timeStamp;
},getTarget:function(){return this._target;
},setTarget:function(m){this._target=m;
},getCurrentTarget:function(){return this._currentTarget||this._target;
},setCurrentTarget:function(n){this._currentTarget=n;
},getRelatedTarget:function(){return this._relatedTarget;
},setRelatedTarget:function(o){this._relatedTarget=o;
},getOriginalTarget:function(){return this._originalTarget;
},setOriginalTarget:function(p){this._originalTarget=p;
},getBubbles:function(){return this._bubbles;
},setBubbles:function(q){this._bubbles=q;
},isCancelable:function(){return this._cancelable;
},setCancelable:function(r){this._cancelable=r;
}},destruct:function(){this._target=this._currentTarget=this._relatedTarget=this._originalTarget=null;
}});
})();
(function(){var a="qx.event.type.Native";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(b,c,d,e,f){qx.event.type.Event.prototype.init.call(this,e,f);
this._target=c||qx.bom.Event.getTarget(b);
this._relatedTarget=d||qx.bom.Event.getRelatedTarget(b);

if(b.timeStamp){this._timeStamp=b.timeStamp;
}this._native=b;
this._returnValue=null;
return this;
},clone:function(g){var h=qx.event.type.Event.prototype.clone.call(this,g);
var i={};
h._native=this._cloneNativeEvent(this._native,i);
h._returnValue=this._returnValue;
return h;
},_cloneNativeEvent:function(j,k){k.preventDefault=qx.lang.Function.empty;
return k;
},preventDefault:function(){qx.event.type.Event.prototype.preventDefault.call(this);
qx.bom.Event.preventDefault(this._native);
},getNativeEvent:function(){return this._native;
},setReturnValue:function(l){this._returnValue=l;
},getReturnValue:function(){return this._returnValue;
}},destruct:function(){this._native=this._returnValue=null;
}});
})();
(function(){var a="qx.event.handler.Window";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(b){qx.core.Object.call(this);
this._manager=b;
this._window=b.getWindow();
this._initWindowObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{error:1,load:1,beforeunload:1,unload:1,resize:1,scroll:1,beforeshutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(c,d){},registerEvent:function(f,g,h){},unregisterEvent:function(i,j,k){},_initWindowObserver:function(){this._onNativeWrapper=qx.lang.Function.listener(this._onNative,this);
var m=qx.event.handler.Window.SUPPORTED_TYPES;

for(var l in m){qx.bom.Event.addNativeListener(this._window,l,this._onNativeWrapper);
}},_stopWindowObserver:function(){var o=qx.event.handler.Window.SUPPORTED_TYPES;

for(var n in o){qx.bom.Event.removeNativeListener(this._window,n,this._onNativeWrapper);
}},_onNative:qx.event.GlobalError.observeMethod(function(e){if(this.isDisposed()){return;
}var q=this._window;

try{var t=q.document;
}catch(e){return ;
}var r=t.documentElement;
var p=qx.bom.Event.getTarget(e);

if(p==null||p===q||p===t||p===r){var event=qx.event.Registration.createEvent(e.type,qx.event.type.Native,[e,q]);
qx.event.Registration.dispatchEvent(q,event);
var s=event.getReturnValue();

if(s!=null){e.returnValue=s;
return s;
}}})},destruct:function(){this._stopWindowObserver();
this._manager=this._window=null;
},defer:function(u){qx.event.Registration.addHandler(u);
}});
})();
(function(){var n="engine.name",m="ready",l="mshtml",k="load",j="unload",i="qx.event.handler.Application",h="complete",g="webkit",f="gecko",d="opera",a="left",c="DOMContentLoaded",b="shutdown";
qx.Class.define(i,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(o){qx.core.Object.call(this);
this._window=o.getWindow();
this.__ie=false;
this.__if=false;
this._initObserver();
qx.event.handler.Application.$$instance=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{ready:1,shutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true,onScriptLoaded:function(){var p=qx.event.handler.Application.$$instance;

if(p){p.__ii();
}}},members:{canHandleEvent:function(q,r){},registerEvent:function(s,t,u){},unregisterEvent:function(v,w,x){},__ig:null,__ie:null,__if:null,__ih:null,__ii:function(){if(!this.__ig&&this.__ie&&qx.$$loader.scriptLoaded){if((qx.core.Environment.get(n)==l)){if(qx.event.Registration.hasListener(this._window,m)){this.__ig=true;
qx.event.Registration.fireEvent(this._window,m);
}}else{this.__ig=true;
qx.event.Registration.fireEvent(this._window,m);
}}},isApplicationReady:function(){return this.__ig;
},_initObserver:function(){if(qx.$$domReady||document.readyState==h||document.readyState==m){this.__ie=true;
this.__ii();
}else{this._onNativeLoadWrapped=qx.lang.Function.bind(this._onNativeLoad,this);

if(qx.core.Environment.get(n)==f||qx.core.Environment.get(n)==d||qx.core.Environment.get(n)==g){qx.bom.Event.addNativeListener(this._window,c,this._onNativeLoadWrapped);
}else if((qx.core.Environment.get(n)==l)){var self=this;
var y=function(){try{document.documentElement.doScroll(a);

if(document.body){self._onNativeLoadWrapped();
}}catch(z){window.setTimeout(y,100);
}};
y();
}qx.bom.Event.addNativeListener(this._window,k,this._onNativeLoadWrapped);
}this._onNativeUnloadWrapped=qx.lang.Function.bind(this._onNativeUnload,this);
qx.bom.Event.addNativeListener(this._window,j,this._onNativeUnloadWrapped);
},_stopObserver:function(){if(this._onNativeLoadWrapped){qx.bom.Event.removeNativeListener(this._window,k,this._onNativeLoadWrapped);
}qx.bom.Event.removeNativeListener(this._window,j,this._onNativeUnloadWrapped);
this._onNativeLoadWrapped=null;
this._onNativeUnloadWrapped=null;
},_onNativeLoad:qx.event.GlobalError.observeMethod(function(){this.__ie=true;
this.__ii();
}),_onNativeUnload:qx.event.GlobalError.observeMethod(function(){if(!this.__ih){this.__ih=true;

try{qx.event.Registration.fireEvent(this._window,b);
}catch(e){throw e;
}finally{qx.core.ObjectRegistry.shutdown();
}}})},destruct:function(){this._stopObserver();
this._window=null;
},defer:function(A){qx.event.Registration.addHandler(A);
}});
})();
(function(){var a="qx.event.IEventDispatcher";
qx.Interface.define(a,{members:{canDispatchEvent:function(b,event,c){this.assertInstance(event,qx.event.type.Event);
this.assertString(c);
},dispatchEvent:function(d,event,e){this.assertInstance(event,qx.event.type.Event);
this.assertString(e);
}}});
})();
(function(){var b="qx.debug",a="qx.event.dispatch.Direct";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,construct:function(c){this._manager=c;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST},members:{canDispatchEvent:function(d,event,e){return !event.getBubbles();
},dispatchEvent:function(f,event,g){if(qx.core.Environment.get(b)){if(f instanceof qx.core.Object){var k=qx.Class.getEventType(f.constructor,g);
var h=qx.Class.getByName(k);

if(!h){this.error("The event type '"+g+"' declared in the class '"+f.constructor+" is not an available class': "+k);
}else if(!(event instanceof h)){this.error("Expected event type to be instanceof '"+k+"' but found '"+event.classname+"'");
}}}event.setEventPhase(qx.event.type.Event.AT_TARGET);
var m=this._manager.getListeners(f,g,false);

if(m){for(var i=0,l=m.length;i<l;i++){var j=m[i].context||f;

if(qx.core.Environment.get(b)){if(j&&j.isDisposed&&j.isDisposed()){this.warn("The context object '"+j+"' for the event '"+g+"' of '"+f+"'is already disposed.");
}}m[i].handler.call(j,event);
}}}},defer:function(n){qx.event.Registration.addDispatcher(n);
}});
})();
(function(){var j="",i="ready",h="shutdown",g="engine.name",f="qx.application",d="beforeunload",c="qx.core.Init",b="os.name",a="engine.version";
qx.Class.define(c,{statics:{getApplication:function(){return this.__ij||null;
},ready:function(){if(this.__ij){return;
}
if(qx.core.Environment.get(g)==j){qx.log.Logger.warn("Could not detect engine!");
}
if(qx.core.Environment.get(a)==j){qx.log.Logger.warn("Could not detect the version of the engine!");
}
if(qx.core.Environment.get(b)==j){qx.log.Logger.warn("Could not detect operating system!");
}qx.log.Logger.debug(this,"Load runtime: "+(new Date-qx.Bootstrap.LOADSTART)+"ms");
var l=qx.core.Environment.get(f);
var m=qx.Class.getByName(l);

if(m){this.__ij=new m;
var k=new Date;
this.__ij.main();
qx.log.Logger.debug(this,"Main runtime: "+(new Date-k)+"ms");
var k=new Date;
this.__ij.finalize();
qx.log.Logger.debug(this,"Finalize runtime: "+(new Date-k)+"ms");
}else{qx.log.Logger.warn("Missing application class: "+l);
}},__ik:function(e){var n=this.__ij;

if(n){e.setReturnValue(n.close());
}},__il:function(){var o=this.__ij;

if(o){o.terminate();
}}},defer:function(p){qx.event.Registration.addListener(window,i,p.ready,p);
qx.event.Registration.addListener(window,h,p.__il,p);
qx.event.Registration.addListener(window,d,p.__ik,p);
}});
})();
(function(){var a="qx.application.Native";
qx.Class.define(a,{extend:qx.core.Object,implement:[qx.application.IApplication],members:{main:function(){},finalize:function(){},close:function(){},terminate:function(){}}});
})();
(function(){var q="change",p="option",o="select",n="VAL",m="Value ",l="checkbox",k="radio1",j="input",h="radio",g="val1",c="text",f="file",d="val2",b="demobrowser.demo.bom.Input",a="textarea";
qx.Class.define(b,{extend:qx.application.Native,members:{main:function(){qx.application.Native.prototype.main.call(this);
var y=qx.bom.Input.create(c);
qx.event.Registration.addListener(y,j,function(e){this.debug("Input (Single): "+e.getData());
},this);
qx.event.Registration.addListener(y,q,function(e){this.debug("Change (Single): "+e.getData());
},this);
var t=qx.bom.Input.create(a);
qx.event.Registration.addListener(t,j,function(e){this.debug("Input (Multi): "+e.getData());
},this);
qx.event.Registration.addListener(t,q,function(e){this.debug("Change (Multi): "+e.getData());
},this);
document.body.appendChild(y);
document.body.appendChild(t);
var x=qx.bom.Input.create(l);
var B=qx.bom.Input.create(l,{checked:true});
qx.event.Registration.addListener(x,q,function(e){this.debug("Changed checkbox 1: "+e.getData());
},this);
qx.event.Registration.addListener(B,q,function(e){this.debug("Changed checkbox 2: "+e.getData());
},this);
document.body.appendChild(x);
document.body.appendChild(B);
var A=qx.bom.Input.create(h,{name:k,value:g,checked:true});
var C=qx.bom.Input.create(h,{name:k,value:d});
function s(e){this.debug("Changed radio: "+e.getTarget().name+" = "+e.getData());
}qx.event.Registration.addListener(A,q,s,this);
qx.event.Registration.addListener(C,q,s,this);
document.body.appendChild(A);
document.body.appendChild(C);
var r=qx.bom.Input.create(o);
var z;

for(var i=0;i<10;i++){z=document.createElement(p);
z.value=n+i;
z.appendChild(document.createTextNode(m+i));
r.appendChild(z);
}qx.event.Registration.addListener(r,q,function(e){this.debug("Changed selectbox1: "+e.getData());
},this);
document.body.appendChild(r);
var v=qx.bom.Input.create(o,{size:3});
var z;

for(var i=0;i<10;i++){z=document.createElement(p);
z.value=n+i;
z.appendChild(document.createTextNode(m+i));
v.appendChild(z);
}qx.event.Registration.addListener(v,q,function(e){this.debug("Changed selectbox2: "+e.getData());
},this);
document.body.appendChild(v);
var w=qx.bom.Input.create(o,{size:3,multiple:true});
var z;

for(var i=0;i<10;i++){z=document.createElement(p);
z.value=n+i;
z.appendChild(document.createTextNode(m+i));
w.appendChild(z);
}qx.event.Registration.addListener(w,q,function(e){this.debug("Changed selectbox3: "+e.getData());
},this);
document.body.appendChild(w);
var u=qx.bom.Input.create(f);
qx.event.Registration.addListener(u,q,function(e){this.debug("Changed file select: "+e.getData());
},this);
document.body.appendChild(u);
}}});
})();
(function(){var a="qx.event.type.Data";
qx.Class.define(a,{extend:qx.event.type.Event,members:{__di:null,__dj:null,init:function(b,c,d){qx.event.type.Event.prototype.init.call(this,false,d);
this.__di=b;
this.__dj=c;
return this;
},clone:function(e){var f=qx.event.type.Event.prototype.clone.call(this,e);
f.__di=this.__di;
f.__dj=this.__dj;
return f;
},getData:function(){return this.__di;
},getOldData:function(){return this.__dj;
}},destruct:function(){this.__di=this.__dj=null;
}});
})();
(function(){var m="get",l="",k="[",h=".",g="last",f="change",d="]",c="Number",b="String",a="qx.debug.databinding",K="set",J="deepBinding",I="item",H="reset",G="qx.data.SingleValueBinding",F="qx.debug",E="' (",D="Boolean",C=") to the object '",B="Integer",u=" of object ",v="qx.event.type.Data",s="Binding property ",t="DEBUG_ON",q="Can not remove the bindings for null object!",r="Binding from '",n="PositiveNumber",p="PositiveInteger",w="Binding does not exist!",x=" is not an data (qx.event.type.Data) event on ",z=").",y="Date",A=" not possible: No event available. ";
qx.Class.define(G,{statics:{DEBUG_ON:false,__dk:{},bind:function(L,M,N,O,P){var bb=this.__dm(L,M,N,O,P);
var V=M.split(h);
var R=this.__ds(V);
var ba=[];
var W=[];
var X=[];
var T=[];
var U=L;
try{for(var i=0;i<V.length;i++){if(R[i]!==l){T.push(f);
}else{T.push(this.__dn(U,V[i]));
}ba[i]=U;
if(i==V.length-1){if(R[i]!==l){var bf=R[i]===g?U.length-1:R[i];
var Q=U.getItem(bf);
this.__dr(Q,N,O,P,L);
X[i]=this.__dt(U,T[i],N,O,P,R[i]);
}else{if(V[i]!=null&&U[m+qx.lang.String.firstUp(V[i])]!=null){var Q=U[m+qx.lang.String.firstUp(V[i])]();
this.__dr(Q,N,O,P,L);
}X[i]=this.__dt(U,T[i],N,O,P);
}}else{var bc={index:i,propertyNames:V,sources:ba,listenerIds:X,arrayIndexValues:R,targetObject:N,targetPropertyChain:O,options:P,listeners:W};
var Y=qx.lang.Function.bind(this.__dl,this,bc);
W.push(Y);
X[i]=U.addListener(T[i],Y);
}if(U[m+qx.lang.String.firstUp(V[i])]==null){U=null;
}else if(R[i]!==l){U=U[m+qx.lang.String.firstUp(V[i])](R[i]);
}else{U=U[m+qx.lang.String.firstUp(V[i])]();
}
if(!U){break;
}}}catch(bg){for(var i=0;i<ba.length;i++){if(ba[i]&&X[i]){ba[i].removeListenerById(X[i]);
}}var be=bb.targets;
var S=bb.listenerIds[i];
for(var i=0;i<be.length;i++){if(be[i]&&S[i]){be[i].removeListenerById(S[i]);
}}throw bg;
}var bd={type:J,listenerIds:X,sources:ba,targetListenerIds:bb.listenerIds,targets:bb.targets};
this.__du(bd,L,M,N,O);
return bd;
},__dl:function(bh){if(bh.options&&bh.options.onUpdate){bh.options.onUpdate(bh.sources[bh.index],bh.targetObject);
}for(var j=bh.index+1;j<bh.propertyNames.length;j++){var bl=bh.sources[j];
bh.sources[j]=null;

if(!bl){continue;
}bl.removeListenerById(bh.listenerIds[j]);
}var bl=bh.sources[bh.index];
for(var j=bh.index+1;j<bh.propertyNames.length;j++){if(bh.arrayIndexValues[j-1]!==l){bl=bl[m+qx.lang.String.firstUp(bh.propertyNames[j-1])](bh.arrayIndexValues[j-1]);
}else{bl=bl[m+qx.lang.String.firstUp(bh.propertyNames[j-1])]();
}bh.sources[j]=bl;
if(!bl){this.__do(bh.targetObject,bh.targetPropertyChain);
break;
}if(j==bh.propertyNames.length-1){if(qx.Class.implementsInterface(bl,qx.data.IListData)){var bm=bh.arrayIndexValues[j]===g?bl.length-1:bh.arrayIndexValues[j];
var bj=bl.getItem(bm);
this.__dr(bj,bh.targetObject,bh.targetPropertyChain,bh.options,bh.sources[bh.index]);
bh.listenerIds[j]=this.__dt(bl,f,bh.targetObject,bh.targetPropertyChain,bh.options,bh.arrayIndexValues[j]);
}else{if(bh.propertyNames[j]!=null&&bl[m+qx.lang.String.firstUp(bh.propertyNames[j])]!=null){var bj=bl[m+qx.lang.String.firstUp(bh.propertyNames[j])]();
this.__dr(bj,bh.targetObject,bh.targetPropertyChain,bh.options,bh.sources[bh.index]);
}var bk=this.__dn(bl,bh.propertyNames[j]);
bh.listenerIds[j]=this.__dt(bl,bk,bh.targetObject,bh.targetPropertyChain,bh.options);
}}else{if(bh.listeners[j]==null){var bi=qx.lang.Function.bind(this.__dl,this,bh);
bh.listeners.push(bi);
}if(qx.Class.implementsInterface(bl,qx.data.IListData)){var bk=f;
}else{var bk=this.__dn(bl,bh.propertyNames[j]);
}bh.listenerIds[j]=bl.addListener(bk,bh.listeners[j]);
}}},__dm:function(bn,bo,bp,bq,br){var bv=bq.split(h);
var bt=this.__ds(bv);
var bA=[];
var bz=[];
var bx=[];
var bw=[];
var bu=bp;
for(var i=0;i<bv.length-1;i++){if(bt[i]!==l){bw.push(f);
}else{try{bw.push(this.__dn(bu,bv[i]));
}catch(e){break;
}}bA[i]=bu;
var by=function(){for(var j=i+1;j<bv.length-1;j++){var bD=bA[j];
bA[j]=null;

if(!bD){continue;
}bD.removeListenerById(bx[j]);
}var bD=bA[i];
for(var j=i+1;j<bv.length-1;j++){var bB=qx.lang.String.firstUp(bv[j-1]);
if(bt[j-1]!==l){var bE=bt[j-1]===g?bD.getLength()-1:bt[j-1];
bD=bD[m+bB](bE);
}else{bD=bD[m+bB]();
}bA[j]=bD;
if(bz[j]==null){bz.push(by);
}if(qx.Class.implementsInterface(bD,qx.data.IListData)){var bC=f;
}else{try{var bC=qx.data.SingleValueBinding.__dn(bD,bv[j]);
}catch(e){break;
}}bx[j]=bD.addListener(bC,bz[j]);
}qx.data.SingleValueBinding.updateTarget(bn,bo,bp,bq,br);
};
bz.push(by);
bx[i]=bu.addListener(bw[i],by);
var bs=qx.lang.String.firstUp(bv[i]);
if(bu[m+bs]==null){bu=null;
}else if(bt[i]!==l){bu=bu[m+bs](bt[i]);
}else{bu=bu[m+bs]();
}
if(!bu){break;
}}return {listenerIds:bx,targets:bA};
},updateTarget:function(bF,bG,bH,bI,bJ){var bK=this.getValueFromObject(bF,bG);
bK=qx.data.SingleValueBinding.__dv(bK,bH,bI,bJ,bF);
this.__dp(bH,bI,bK);
},getValueFromObject:function(o,bL){var bP=this.__dq(o,bL);
var bN;

if(bP!=null){var bR=bL.substring(bL.lastIndexOf(h)+1,bL.length);
if(bR.charAt(bR.length-1)==d){var bM=bR.substring(bR.lastIndexOf(k)+1,bR.length-1);
var bO=bR.substring(0,bR.lastIndexOf(k));
var bQ=bP[m+qx.lang.String.firstUp(bO)]();

if(bM==g){bM=bQ.length-1;
}
if(bQ!=null){bN=bQ.getItem(bM);
}}else{bN=bP[m+qx.lang.String.firstUp(bR)]();
}}return bN;
},__dn:function(bS,bT){var bU=this.__dw(bS,bT);
if(bU==null){if(qx.Class.supportsEvent(bS.constructor,bT)){bU=bT;
}else if(qx.Class.supportsEvent(bS.constructor,f+qx.lang.String.firstUp(bT))){bU=f+qx.lang.String.firstUp(bT);
}else{throw new qx.core.AssertionError(s+bT+u+bS+A);
}}return bU;
},__do:function(bV,bW){var bX=this.__dq(bV,bW);

if(bX!=null){var bY=bW.substring(bW.lastIndexOf(h)+1,bW.length);
if(bY.charAt(bY.length-1)==d){this.__dp(bV,bW,null);
return;
}if(bX[H+qx.lang.String.firstUp(bY)]!=undefined){bX[H+qx.lang.String.firstUp(bY)]();
}else{bX[K+qx.lang.String.firstUp(bY)](null);
}}},__dp:function(ca,cb,cc){var cg=this.__dq(ca,cb);

if(cg!=null){var ch=cb.substring(cb.lastIndexOf(h)+1,cb.length);
if(ch.charAt(ch.length-1)==d){var cd=ch.substring(ch.lastIndexOf(k)+1,ch.length-1);
var cf=ch.substring(0,ch.lastIndexOf(k));
var ce=ca;

if(!qx.Class.implementsInterface(ce,qx.data.IListData)){ce=cg[m+qx.lang.String.firstUp(cf)]();
}
if(cd==g){cd=ce.length-1;
}
if(ce!=null){ce.setItem(cd,cc);
}}else{cg[K+qx.lang.String.firstUp(ch)](cc);
}}},__dq:function(ci,cj){var cm=cj.split(h);
var cn=ci;
for(var i=0;i<cm.length-1;i++){try{var cl=cm[i];
if(cl.indexOf(d)==cl.length-1){var ck=cl.substring(cl.indexOf(k)+1,cl.length-1);
cl=cl.substring(0,cl.indexOf(k));
}if(cl!=l){cn=cn[m+qx.lang.String.firstUp(cl)]();
}if(ck!=null){if(ck==g){ck=cn.length-1;
}cn=cn.getItem(ck);
ck=null;
}}catch(co){return null;
}}return cn;
},__dr:function(cp,cq,cr,cs,ct){cp=this.__dv(cp,cq,cr,cs,ct);
if(cp===undefined){this.__do(cq,cr);
}if(cp!==undefined){try{this.__dp(cq,cr,cp);
if(cs&&cs.onUpdate){cs.onUpdate(ct,cq,cp);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(cs&&cs.onSetFail){cs.onSetFail(e);
}else{qx.log.Logger.warn("Failed so set value "+cp+" on "+cq+". Error message: "+e);
}}}},__ds:function(cu){var cv=[];
for(var i=0;i<cu.length;i++){var name=cu[i];
if(qx.lang.String.endsWith(name,d)){var cw=name.substring(name.indexOf(k)+1,name.indexOf(d));
if(name.indexOf(d)!=name.length-1){throw new Error("Please use only one array at a time: "+name+" does not work.");
}
if(cw!==g){if(cw==l||isNaN(parseInt(cw,10))){throw new Error("No number or 'last' value hast been given"+" in an array binding: "+name+" does not work.");
}}if(name.indexOf(k)!=0){cu[i]=name.substring(0,name.indexOf(k));
cv[i]=l;
cv[i+1]=cw;
cu.splice(i+1,0,I);
i++;
}else{cv[i]=cw;
cu.splice(i,1,I);
}}else{cv[i]=l;
}}return cv;
},__dt:function(cx,cy,cz,cA,cB,cC){if(qx.core.Environment.get(F)){var cD=qx.Class.getEventType(cx.constructor,cy);
qx.core.Assert.assertEquals(v,cD,cy+x+cx+h);
}var cF=function(cG,e){if(cG!==l){if(cG===g){cG=cx.length-1;
}var cJ=cx.getItem(cG);
if(cJ===undefined){qx.data.SingleValueBinding.__do(cz,cA);
}var cH=e.getData().start;
var cI=e.getData().end;

if(cG<cH||cG>cI){return;
}}else{var cJ=e.getData();
}if(qx.core.Environment.get(a)){qx.log.Logger.debug("Binding executed from "+cx+" by "+cy+" to "+cz+" ("+cA+")");
qx.log.Logger.debug("Data before conversion: "+cJ);
}cJ=qx.data.SingleValueBinding.__dv(cJ,cz,cA,cB,cx);
if(qx.core.Environment.get(a)){qx.log.Logger.debug("Data after conversion: "+cJ);
}try{if(cJ!==undefined){qx.data.SingleValueBinding.__dp(cz,cA,cJ);
}else{qx.data.SingleValueBinding.__do(cz,cA);
}if(cB&&cB.onUpdate){cB.onUpdate(cx,cz,cJ);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(cB&&cB.onSetFail){cB.onSetFail(e);
}else{qx.log.Logger.warn("Failed so set value "+cJ+" on "+cz+". Error message: "+e);
}}};
if(!cC){cC=l;
}cF=qx.lang.Function.bind(cF,cx,cC);
var cE=cx.addListener(cy,cF);
return cE;
},__du:function(cK,cL,cM,cN,cO){if(this.__dk[cL.toHashCode()]===undefined){this.__dk[cL.toHashCode()]=[];
}this.__dk[cL.toHashCode()].push([cK,cL,cM,cN,cO]);
},__dv:function(cP,cQ,cR,cS,cT){if(cS&&cS.converter){var cV;

if(cQ.getModel){cV=cQ.getModel();
}return cS.converter(cP,cV,cT,cQ);
}else{var cX=this.__dq(cQ,cR);
var cY=cR.substring(cR.lastIndexOf(h)+1,cR.length);
if(cX==null){return cP;
}var cW=qx.Class.getPropertyDefinition(cX.constructor,cY);
var cU=cW==null?l:cW.check;
return this.__dx(cP,cU);
}},__dw:function(da,db){var dc=qx.Class.getPropertyDefinition(da.constructor,db);

if(dc==null){return null;
}return dc.event;
},__dx:function(dd,de){var df=qx.lang.Type.getClass(dd);
if((df==c||df==b)&&(de==B||de==p)){dd=parseInt(dd,10);
}if((df==D||df==c||df==y)&&de==b){dd=dd+l;
}if((df==c||df==b)&&(de==c||de==n)){dd=parseFloat(dd);
}return dd;
},removeBindingFromObject:function(dg,dh){if(dh.type==J){for(var i=0;i<dh.sources.length;i++){if(dh.sources[i]){dh.sources[i].removeListenerById(dh.listenerIds[i]);
}}for(var i=0;i<dh.targets.length;i++){if(dh.targets[i]){dh.targets[i].removeListenerById(dh.targetListenerIds[i]);
}}}else{dg.removeListenerById(dh);
}var di=this.__dk[dg.toHashCode()];
if(di!=undefined){for(var i=0;i<di.length;i++){if(di[i][0]==dh){qx.lang.Array.remove(di,di[i]);
return;
}}}throw new Error("Binding could not be found!");
},removeAllBindingsForObject:function(dj){if(qx.core.Environment.get(F)){qx.core.Assert.assertNotNull(dj,q);
}var dk=this.__dk[dj.toHashCode()];

if(dk!=undefined){for(var i=dk.length-1;i>=0;i--){this.removeBindingFromObject(dj,dk[i][0]);
}}},getAllBindingsForObject:function(dl){if(this.__dk[dl.toHashCode()]===undefined){this.__dk[dl.toHashCode()]=[];
}return this.__dk[dl.toHashCode()];
},removeAllBindings:function(){for(var dn in this.__dk){var dm=qx.core.ObjectRegistry.fromHashCode(dn);
if(dm==null){delete this.__dk[dn];
continue;
}this.removeAllBindingsForObject(dm);
}this.__dk={};
},getAllBindings:function(){return this.__dk;
},showBindingInLog:function(dp,dq){var ds;
for(var i=0;i<this.__dk[dp.toHashCode()].length;i++){if(this.__dk[dp.toHashCode()][i][0]==dq){ds=this.__dk[dp.toHashCode()][i];
break;
}}
if(ds===undefined){var dr=w;
}else{var dr=r+ds[1]+E+ds[2]+C+ds[3]+E+ds[4]+z;
}qx.log.Logger.debug(dr);
},showAllBindingsInLog:function(){for(var du in this.__dk){var dt=qx.core.ObjectRegistry.fromHashCode(du);

for(var i=0;i<this.__dk[du].length;i++){this.showBindingInLog(dt,this.__dk[du][i][0]);
}}}}});
qx.log.Logger.deprecatedConstantWarning(G,t);
})();
(function(){var b="",a="qx.core.WindowError";
qx.Bootstrap.define(a,{extend:Error,construct:function(c,d,e){Error.call(this,c);
this.__dO=c;
this.__dP=d||b;
this.__dQ=e===undefined?-1:e;
},members:{__dO:null,__dP:null,__dQ:null,toString:function(){return this.__dO;
},getUri:function(){return this.__dP;
},getLineNumber:function(){return this.__dQ;
}}});
})();
(function(){var a="qx.core.ValidationError";
qx.Class.define(a,{extend:qx.type.BaseError});
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
}},disposeArray:function(e,f){var h=e[f];

if(!h){return;
}if(qx.core.ObjectRegistry.inShutDown){e[f]=null;
return;
}try{var g;

for(var i=h.length-1;i>=0;i--){g=h[i];

if(g){g.dispose();
}}}catch(j){throw new Error("The array field: "+f+" of object: "+e+" has non disposable entries: "+j);
}h.length=0;
e[f]=null;
},disposeMap:function(k,m){var o=k[m];

if(!o){return;
}if(qx.core.ObjectRegistry.inShutDown){k[m]=null;
return;
}try{var n;

for(var p in o){n=o[p];

if(o.hasOwnProperty(p)&&n){n.dispose();
}}}catch(q){throw new Error("The map field: "+m+" of object: "+k+" has non disposable entries: "+q);
}k[m]=null;
},disposeTriggeredBy:function(r,s){var t=s.dispose;
s.dispose=function(){t.call(s);
r.dispose();
};
}}});
})();
(function(){var a="qx.event.handler.Object";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST,SUPPORTED_TYPES:null,TARGET_CHECK:qx.event.IEventHandler.TARGET_OBJECT,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(b,c){return qx.Class.supportsEvent(b.constructor,c);
},registerEvent:function(d,e,f){},unregisterEvent:function(g,h,i){}},defer:function(j){qx.event.Registration.addHandler(j);
}});
})();
(function(){var k="indexOf",j="lastIndexOf",h="slice",g="concat",f="join",e="toLocaleUpperCase",d="shift",c="substr",b="filter",a="unshift",I="match",H="quote",G="qx.lang.Generics",F="localeCompare",E="sort",D="some",C="charAt",B="split",A="substring",z="pop",t="toUpperCase",u="replace",q="push",r="charCodeAt",o="every",p="reverse",m="search",n="forEach",v="map",w="toLowerCase",y="splice",x="toLocaleLowerCase";
qx.Class.define(G,{statics:{__dS:{"Array":[f,p,E,q,z,d,a,y,g,h,k,j,n,v,b,D,o],"String":[H,A,w,t,C,r,k,j,x,e,F,I,m,u,B,c,g,h]},__dT:function(J,K){return function(s){return J.prototype[K].apply(s,Array.prototype.slice.call(arguments,1));
};
},__dU:function(){var L=qx.lang.Generics.__dS;

for(var P in L){var N=window[P];
var M=L[P];

for(var i=0,l=M.length;i<l;i++){var O=M[i];

if(!N[O]){N[O]=qx.lang.Generics.__dT(N,O);
}}}}},defer:function(Q){Q.__dU();
}});
})();
(function(){var a="qx.lang.Date";
qx.Class.define(a,{statics:{now:function(){return +new Date;
}}});
})();
(function(){var m="input",k="engine.name",j="change",h="text",g="password",f="radio",d="textarea",c="checkbox",b="engine.version",a="keypress",A="browser.documentmode",z="opera",y="keyup",x="mshtml",w="blur",v="keydown",u="propertychange",t="browser.version",s="select-multiple",r="value",p="select",q="qx.event.handler.Input",n="checked";
qx.Class.define(q,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){qx.core.Object.call(this);
this._onChangeCheckedWrapper=qx.lang.Function.listener(this._onChangeChecked,this);
this._onChangeValueWrapper=qx.lang.Function.listener(this._onChangeValue,this);
this._onInputWrapper=qx.lang.Function.listener(this._onInput,this);
this._onPropertyWrapper=qx.lang.Function.listener(this._onProperty,this);
if((qx.core.Environment.get(k)==z)){this._onKeyDownWrapper=qx.lang.Function.listener(this._onKeyDown,this);
this._onKeyUpWrapper=qx.lang.Function.listener(this._onKeyUp,this);
this._onBlurWrapper=qx.lang.Function.listener(this._onBlur,this);
}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{input:1,change:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{__mj:false,__mk:null,__ml:null,__mm:null,canHandleEvent:function(B,C){var D=B.tagName.toLowerCase();

if(C===m&&(D===m||D===d)){return true;
}
if(C===j&&(D===m||D===d||D===p)){return true;
}return false;
},registerEvent:function(E,F,G){if(qx.core.Environment.get(k)==x&&qx.core.Environment.get(b)<9&&qx.core.Environment.get(A)<9){if(!E.__mn){var H=E.tagName.toLowerCase();
var I=E.type;

if(I===h||I===g||H===d||I===c||I===f){qx.bom.Event.addNativeListener(E,u,this._onPropertyWrapper);
}
if(I!==c&&I!==f){qx.bom.Event.addNativeListener(E,j,this._onChangeValueWrapper);
}
if(I===h||I===g){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,E);
qx.bom.Event.addNativeListener(E,a,this._onKeyPressWrapped);
}E.__mn=true;
}}else{if(F===m){this.__mo(E);
}else if(F===j){if(E.type===f||E.type===c){qx.bom.Event.addNativeListener(E,j,this._onChangeCheckedWrapper);
}else{qx.bom.Event.addNativeListener(E,j,this._onChangeValueWrapper);
}if((qx.core.Environment.get(k)==z)||(qx.core.Environment.get(k)==x)){if(E.type===h||E.type===g){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,E);
qx.bom.Event.addNativeListener(E,a,this._onKeyPressWrapped);
}}}}},__mo:qx.core.Environment.select(k,{"mshtml":function(J){if(qx.core.Environment.get(b)>=9&&qx.core.Environment.get(A)>=9){qx.bom.Event.addNativeListener(J,m,this._onInputWrapper);

if(J.type===h||J.type===g){this._inputFixWrapper=qx.lang.Function.listener(this._inputFix,this,J);
qx.bom.Event.addNativeListener(J,y,this._inputFixWrapper);
}}},"webkit":function(K){var L=K.tagName.toLowerCase();
if(parseFloat(qx.core.Environment.get(b))<532&&L==d){qx.bom.Event.addNativeListener(K,a,this._onInputWrapper);
}qx.bom.Event.addNativeListener(K,m,this._onInputWrapper);
},"opera":function(M){qx.bom.Event.addNativeListener(M,y,this._onKeyUpWrapper);
qx.bom.Event.addNativeListener(M,v,this._onKeyDownWrapper);
qx.bom.Event.addNativeListener(M,w,this._onBlurWrapper);
qx.bom.Event.addNativeListener(M,m,this._onInputWrapper);
},"default":function(N){qx.bom.Event.addNativeListener(N,m,this._onInputWrapper);
}}),unregisterEvent:function(O,P){if(qx.core.Environment.get(k)==x&&qx.core.Environment.get(b)<9&&qx.core.Environment.get(A)<9){if(O.__mn){var Q=O.tagName.toLowerCase();
var R=O.type;

if(R===h||R===g||Q===d||R===c||R===f){qx.bom.Event.removeNativeListener(O,u,this._onPropertyWrapper);
}
if(R!==c&&R!==f){qx.bom.Event.removeNativeListener(O,j,this._onChangeValueWrapper);
}
if(R===h||R===g){qx.bom.Event.removeNativeListener(O,a,this._onKeyPressWrapped);
}
try{delete O.__mn;
}catch(S){O.__mn=null;
}}}else{if(P===m){this.__mp(O);
}else if(P===j){if(O.type===f||O.type===c){qx.bom.Event.removeNativeListener(O,j,this._onChangeCheckedWrapper);
}else{qx.bom.Event.removeNativeListener(O,j,this._onChangeValueWrapper);
}}
if((qx.core.Environment.get(k)==z)||(qx.core.Environment.get(k)==x)){if(O.type===h||O.type===g){qx.bom.Event.removeNativeListener(O,a,this._onKeyPressWrapped);
}}}},__mp:qx.core.Environment.select(k,{"mshtml":function(T){if(qx.core.Environment.get(b)>=9&&qx.core.Environment.get(A)>=9){qx.bom.Event.removeNativeListener(T,m,this._onInputWrapper);

if(T.type===h||T.type===g){qx.bom.Event.removeNativeListener(T,y,this._inputFixWrapper);
}}},"webkit":function(U){var V=U.tagName.toLowerCase();
if(parseFloat(qx.core.Environment.get(b))<532&&V==d){qx.bom.Event.removeNativeListener(U,a,this._onInputWrapper);
}qx.bom.Event.removeNativeListener(U,m,this._onInputWrapper);
},"opera":function(W){qx.bom.Event.removeNativeListener(W,y,this._onKeyUpWrapper);
qx.bom.Event.removeNativeListener(W,v,this._onKeyDownWrapper);
qx.bom.Event.removeNativeListener(W,w,this._onBlurWrapper);
qx.bom.Event.removeNativeListener(W,m,this._onInputWrapper);
},"default":function(X){qx.bom.Event.removeNativeListener(X,m,this._onInputWrapper);
}}),_onKeyPress:qx.core.Environment.select(k,{"mshtml|opera":function(e,Y){if(e.keyCode===13){if(Y.value!==this.__ml){this.__ml=Y.value;
qx.event.Registration.fireEvent(Y,j,qx.event.type.Data,[Y.value]);
}}},"default":null}),_inputFix:qx.core.Environment.select(k,{"mshtml":function(e,ba){if(e.keyCode===46||e.keyCode===8){if(ba.value!==this.__mm){this.__mm=ba.value;
qx.event.Registration.fireEvent(ba,m,qx.event.type.Data,[ba.value]);
}}},"default":null}),_onKeyDown:qx.core.Environment.select(k,{"opera":function(e){if(e.keyCode===13){this.__mj=true;
}},"default":null}),_onKeyUp:qx.core.Environment.select(k,{"opera":function(e){if(e.keyCode===13){this.__mj=false;
}},"default":null}),_onBlur:qx.core.Environment.select(k,{"opera":function(e){if(this.__mk&&qx.core.Environment.get(t)<10.6){window.clearTimeout(this.__mk);
}},"default":null}),_onInput:qx.event.GlobalError.observeMethod(function(e){var bc=qx.bom.Event.getTarget(e);
var bb=bc.tagName.toLowerCase();
if(!this.__mj||bb!==m){if((qx.core.Environment.get(k)==z)&&qx.core.Environment.get(t)<10.6){this.__mk=window.setTimeout(function(){qx.event.Registration.fireEvent(bc,m,qx.event.type.Data,[bc.value]);
},0);
}else{qx.event.Registration.fireEvent(bc,m,qx.event.type.Data,[bc.value]);
}}}),_onChangeValue:qx.event.GlobalError.observeMethod(function(e){var be=qx.bom.Event.getTarget(e);
var bd=be.value;

if(be.type===s){var bd=[];

for(var i=0,o=be.options,l=o.length;i<l;i++){if(o[i].selected){bd.push(o[i].value);
}}}qx.event.Registration.fireEvent(be,j,qx.event.type.Data,[bd]);
}),_onChangeChecked:qx.event.GlobalError.observeMethod(function(e){var bf=qx.bom.Event.getTarget(e);

if(bf.type===f){if(bf.checked){qx.event.Registration.fireEvent(bf,j,qx.event.type.Data,[bf.value]);
}}else{qx.event.Registration.fireEvent(bf,j,qx.event.type.Data,[bf.checked]);
}}),_onProperty:qx.core.Environment.select(k,{"mshtml":qx.event.GlobalError.observeMethod(function(e){var bg=qx.bom.Event.getTarget(e);
var bh=e.propertyName;

if(bh===r&&(bg.type===h||bg.type===g||bg.tagName.toLowerCase()===d)){if(!bg.$$inValueSet){qx.event.Registration.fireEvent(bg,m,qx.event.type.Data,[bg.value]);
}}else if(bh===n){if(bg.type===c){qx.event.Registration.fireEvent(bg,j,qx.event.type.Data,[bg.checked]);
}else if(bg.checked){qx.event.Registration.fireEvent(bg,j,qx.event.type.Data,[bg.value]);
}}}),"default":function(){}})},defer:function(bi){qx.event.Registration.addHandler(bi);
}});
})();
(function(){var k="",j="select",h="textarea",g="auto",f="soft",e="off",d="engine.name",c="text",b="Unsupported input type.",a="nowrap",x="radio",w="qx.debug",v="input",u="option",t="value",s="number",r="qx.bom.Input",q="normal",p="mshtml",o="wrap",m="checkbox",n="select-one";
qx.Class.define(r,{statics:{__mq:{text:1,textarea:1,select:1,checkbox:1,radio:1,password:1,hidden:1,submit:1,image:1,file:1,search:1,reset:1,button:1},create:function(y,z,A){if(qx.core.Environment.get(w)){qx.core.Assert.assertKeyInMap(y,this.__mq,b);
}var z=z?qx.lang.Object.clone(z):{};
var B;

if(y===h||y===j){B=y;
}else{B=v;
z.type=y;
}return qx.bom.Element.create(B,z,A);
},setValue:function(C,D){var I=C.nodeName.toLowerCase();
var F=C.type;
var Array=qx.lang.Array;
var J=qx.lang.Type;

if(typeof D===s){D+=k;
}
if((F===m||F===x)){if(J.isArray(D)){C.checked=Array.contains(D,C.value);
}else{C.checked=C.value==D;
}}else if(I===j){var E=J.isArray(D);
var K=C.options;
var G,H;

for(var i=0,l=K.length;i<l;i++){G=K[i];
H=G.getAttribute(t);

if(H==null){H=G.text;
}G.selected=E?Array.contains(D,H):D==H;
}
if(E&&D.length==0){C.selectedIndex=-1;
}}else if((F===c||F===h)&&(qx.core.Environment.get(d)==p)){C.$$inValueSet=true;
C.value=D;
C.$$inValueSet=null;
}else{C.value=D;
}},getValue:function(L){var R=L.nodeName.toLowerCase();

if(R===u){return (L.attributes.value||{}).specified?L.value:L.text;
}
if(R===j){var M=L.selectedIndex;
if(M<0){return null;
}var S=[];
var U=L.options;
var T=L.type==n;
var Q=qx.bom.Input;
var P;
for(var i=T?M:0,O=T?M+1:U.length;i<O;i++){var N=U[i];

if(N.selected){P=Q.getValue(N);
if(T){return P;
}S.push(P);
}}return S;
}else{return (L.value||k).replace(/\r/g,k);
}},setWrap:qx.core.Environment.select(d,{"mshtml":function(V,W){var Y=W?f:e;
var X=W?g:k;
V.wrap=Y;
V.style.overflowY=X;
},"gecko|webkit":function(ba,bb){var bd=bb?f:e;
var bc=bb?k:g;
ba.setAttribute(o,bd);
ba.style.overflow=bc;
},"default":function(be,bf){be.style.whiteSpace=bf?q:a;
}})}});
})();
(function(){var p="qx.debug",o="Invalid argument 'map'",n="=",m="+",k="Invalid argument 'minLength'",j="ecmascript.objectcount",h="Invalid argument 'source'",g="Invalid argument 'target'",f="function",e="Invalid argument 'array'",b="&",d="qx.lang.Object",c="undefined",a="object";
qx.Class.define(d,{statics:{empty:function(q){if(qx.core.Environment.get(p)){qx.core.Assert&&qx.core.Assert.assertMap(q,o);
}
for(var r in q){if(q.hasOwnProperty(r)){delete q[r];
}}},isEmpty:(qx.core.Environment.get(j))?
function(s){if(qx.core.Environment.get(p)){qx.core.Assert&&qx.core.Assert.assertMap(s,o);
}return s.__count__===0;
}:
function(t){if(qx.core.Environment.get(p)){qx.core.Assert&&qx.core.Assert.assertMap(t,o);
}
for(var u in t){return false;
}return true;
},hasMinLength:(qx.core.Environment.get(j))?
function(v,w){if(qx.core.Environment.get(p)){qx.core.Assert&&qx.core.Assert.assertMap(v,o);
qx.core.Assert&&qx.core.Assert.assertInteger(w,k);
}return v.__count__>=w;
}:
function(x,y){if(qx.core.Environment.get(p)){qx.core.Assert&&qx.core.Assert.assertMap(x,o);
qx.core.Assert&&qx.core.Assert.assertInteger(y,k);
}
if(y<=0){return true;
}var length=0;

for(var z in x){if((++length)>=y){return true;
}}return false;
},getLength:qx.Bootstrap.objectGetLength,getKeys:qx.Bootstrap.getKeys,getKeysAsString:qx.Bootstrap.getKeysAsString,getValues:function(A){if(qx.core.Environment.get(p)){qx.core.Assert&&qx.core.Assert.assertMap(A,o);
}var C=[];
var B=this.getKeys(A);

for(var i=0,l=B.length;i<l;i++){C.push(A[B[i]]);
}return C;
},mergeWith:qx.Bootstrap.objectMergeWith,carefullyMergeWith:function(D,E){if(qx.core.Environment.get(p)){qx.core.Assert&&qx.core.Assert.assertMap(D,g);
qx.core.Assert&&qx.core.Assert.assertMap(E,h);
}return qx.lang.Object.mergeWith(D,E,false);
},merge:function(F,G){if(qx.core.Environment.get(p)){qx.core.Assert&&qx.core.Assert.assertMap(F,g);
}var H=arguments.length;

for(var i=1;i<H;i++){qx.lang.Object.mergeWith(F,arguments[i]);
}return F;
},clone:function(I){if(qx.core.Environment.get(p)){qx.core.Assert&&qx.core.Assert.assertMap(I,h);
}var J={};

for(var K in I){J[K]=I[K];
}return J;
},invert:function(L){if(qx.core.Environment.get(p)){qx.core.Assert&&qx.core.Assert.assertMap(L,o);
}var M={};

for(var N in L){M[L[N].toString()]=N;
}return M;
},getKeyFromValue:function(O,P){if(qx.core.Environment.get(p)){qx.core.Assert&&qx.core.Assert.assertMap(O,o);
}
for(var Q in O){if(O.hasOwnProperty(Q)&&O[Q]===P){return Q;
}}return null;
},contains:function(R,S){if(qx.core.Environment.get(p)){qx.core.Assert&&qx.core.Assert.assertMap(R,o);
}return this.getKeyFromValue(R,S)!==null;
},select:function(T,U){if(qx.core.Environment.get(p)){qx.core.Assert&&qx.core.Assert.assertMap(U,o);
}return U[T];
},fromArray:function(V){if(qx.core.Environment.get(p)){qx.core.Assert&&qx.core.Assert.assertArray(V,e);
}var W={};

for(var i=0,l=V.length;i<l;i++){if(qx.core.Environment.get(p)){switch(typeof V[i]){case a:case f:case c:throw new Error("Could not convert complex objects like "+V[i]+" at array index "+i+" to map syntax");
}}W[V[i].toString()]=true;
}return W;
},toUriParameter:function(X,Y){var bc,bb=[],ba=window.encodeURIComponent;

for(bc in X){if(X.hasOwnProperty(bc)){if(Y){bb.push(ba(bc).replace(/%20/g,m)+n+ba(X[bc]).replace(/%20/g,m));
}else{bb.push(ba(bc)+n+ba(X[bc]));
}}}return bb.join(b);
}}});
})();
(function(){var e="orientationchange",d="resize",c="landscape",b="portrait",a="qx.event.handler.Orientation";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(f){qx.core.Object.call(this);
this.__fg=f;
this.__fh=f.getWindow();
this._initObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{orientationchange:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__fg:null,__fh:null,__fi:null,__fj:null,__fk:null,canHandleEvent:function(g,h){},registerEvent:function(i,j,k){},unregisterEvent:function(l,m,n){},_initObserver:function(){this.__fk=qx.lang.Function.listener(this._onNative,this);
this.__fi=qx.bom.Event.supportsEvent(this.__fh,e)?e:d;
var Event=qx.bom.Event;
Event.addNativeListener(this.__fh,this.__fi,this.__fk);
},_stopObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__fh,this.__fi,this.__fk);
},_onNative:qx.event.GlobalError.observeMethod(function(o){var q=qx.bom.Viewport;
var p=q.getOrientation();

if(this.__fj!=p){this.__fj=p;
var r=q.isLandscape()?c:b;
qx.event.Registration.fireEvent(this.__fh,e,qx.event.type.Orientation,[p,r]);
}})},destruct:function(){this._stopObserver();
this.__fg=this.__fh=null;
},defer:function(s){qx.event.Registration.addHandler(s);
}});
})();
(function(){var a="qx.event.handler.UserAction";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(b){qx.core.Object.call(this);
this.__fl=b;
this.__fm=b.getWindow();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__fl:null,__fm:null,canHandleEvent:function(c,d){},registerEvent:function(e,f,g){},unregisterEvent:function(h,i,j){}},destruct:function(){this.__fl=this.__fm=null;
},defer:function(k){qx.event.Registration.addHandler(k);
}});
})();
(function(){var t="qx.mobile.emulatetouch",s="touchend",r="touchstart",q="touchmove",p="event.touch",o="mousemove",n="engine.name",m="touchcancel",l="mouseup",k="mousedown",d="mshtml",j="qx.event.handler.Touch",h="useraction",c="swipe",b="qx.mobile.nativescroll",g="webkit",f="tap",i="x",a="y";
qx.Class.define(j,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(u){qx.core.Object.call(this);
this.__fn=u;
this.__fo=u.getWindow();
this.__fp=this.__fo.document;
this._initTouchObserver();
this._initMouseObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{touchstart:1,touchmove:1,touchend:1,touchcancel:1,tap:1,swipe:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE+qx.event.IEventHandler.TARGET_DOCUMENT,IGNORE_CAN_HANDLE:true,MOUSE_TO_TOUCH_MAPPING:{"mousedown":"touchstart","mousemove":"touchmove","mouseup":"touchend"},SWIPE_DIRECTION:{x:["left","right"],y:["up","down"]},TAP_MAX_DISTANCE:qx.core.Environment.get("os.name")!="android"?10:40,SWIPE_MIN_DISTANCE:qx.core.Environment.get("os.name")!="android"?11:41,SWIPE_MIN_VELOCITY:0},members:{__fq:null,__fr:null,__fn:null,__fo:null,__fp:null,__fs:null,__ft:null,__fu:null,__fv:null,__fw:false,__fx:null,canHandleEvent:function(v,w){},registerEvent:function(x,y,z){},unregisterEvent:function(A,B,C){},__fy:function(D){var E=qx.bom.Event.getTarget(D);
if((qx.core.Environment.get(n)==g)){if(E&&E.nodeType==3){E=E.parentNode;
}}return E;
},__fz:function(F,G,H,I){if(!H){H=this.__fy(F);
}var G=G||F.type;

if(H&&H.nodeType){qx.event.Registration.fireEvent(H,G,I||qx.event.type.Touch,[F,H,null,true,true]);
}qx.event.Registration.fireEvent(this.__fo,h,qx.event.type.Data,[G]);
},__fA:function(J,K,L){if(!L){L=this.__fy(J);
}var K=K||J.type;

if(K==r){this.__fB(J,L);
}else if(K==q){this.__fC(J,L);
}else if(K==s){this.__fD(J,L);
}},__fB:function(M,N){var O=M.changedTouches[0];
this.__fs=O.screenX;
this.__ft=O.screenY;
this.__fu=new Date().getTime();
this.__fv=M.changedTouches.length===1;
},__fC:function(P,Q){if(this.__fv&&P.changedTouches.length>1){this.__fv=false;
}},__fD:function(R,S){if(this.__fv){var T=R.changedTouches[0];
var V={x:T.screenX-this.__fs,y:T.screenY-this.__ft};
var W=qx.event.handler.Touch;

if(this.__fx==S&&Math.abs(V.x)<=W.TAP_MAX_DISTANCE&&Math.abs(V.y)<=W.TAP_MAX_DISTANCE){this.__fz(R,f,S,qx.event.type.Tap);
}else{var U=this.__fE(R,S,V);

if(U){R.swipe=U;
this.__fz(R,c,S,qx.event.type.Swipe);
}}}},__fE:function(X,Y,ba){var be=qx.event.handler.Touch;
var bf=new Date().getTime()-this.__fu;
var bh=(Math.abs(ba.x)>=Math.abs(ba.y))?i:a;
var bb=ba[bh];
var bc=be.SWIPE_DIRECTION[bh][bb<0?0:1];
var bg=(bf!==0)?bb/bf:0;
var bd=null;

if(Math.abs(bg)>=be.SWIPE_MIN_VELOCITY&&Math.abs(bb)>=be.SWIPE_MIN_DISTANCE){bd={startTime:this.__fu,duration:bf,axis:bh,direction:bc,distance:bb,velocity:bg};
}return bd;
},__fF:qx.core.Environment.select(t,{"true":function(bi){var bj=bi.type;
var bl=qx.event.handler.Touch.MOUSE_TO_TOUCH_MAPPING;

if(bl[bj]){bj=bl[bj];
if(bj==r&&this.__fG(bi)){this.__fw=true;
}else if(bj==s){this.__fw=false;
}var bm=this.__fH(bi);
var bk=(bj==s?[]:[bm]);
bi.touches=bk;
bi.targetTouches=bk;
bi.changedTouches=[bm];
}return bj;
},"default":qx.lang.Function.empty}),__fG:qx.core.Environment.select(t,{"true":function(bn){if((qx.core.Environment.get(n)==d)){var bo=1;
}else{var bo=0;
}return bn.button==bo;
},"default":qx.lang.Function.empty}),__fH:qx.core.Environment.select(t,{"true":function(bp){var bq=this.__fy(bp);
return {clientX:bp.clientX,clientY:bp.clientY,screenX:bp.screenX,screenY:bp.screenY,pageX:bp.pageX,pageY:bp.pageY,identifier:1,target:bq};
},"default":qx.lang.Function.empty}),_initTouchObserver:function(){this.__fq=qx.lang.Function.listener(this._onTouchEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__fp,r,this.__fq);
Event.addNativeListener(this.__fp,q,this.__fq);
Event.addNativeListener(this.__fp,s,this.__fq);
Event.addNativeListener(this.__fp,m,this.__fq);
},_initMouseObserver:qx.core.Environment.select(t,{"true":function(){if(!qx.core.Environment.get(p)){this.__fr=qx.lang.Function.listener(this._onMouseEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__fp,k,this.__fr);
Event.addNativeListener(this.__fp,o,this.__fr);
Event.addNativeListener(this.__fp,l,this.__fr);
}},"default":qx.lang.Function.empty}),_stopTouchObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__fp,r,this.__fq);
Event.removeNativeListener(this.__fp,q,this.__fq);
Event.removeNativeListener(this.__fp,s,this.__fq);
Event.removeNativeListener(this.__fp,m,this.__fq);
},_stopMouseObserver:qx.core.Environment.select(t,{"true":function(){if(!qx.core.Environment.get(p)){var Event=qx.bom.Event;
Event.removeNativeListener(this.__fp,k,this.__fr);
Event.removeNativeListener(this.__fp,o,this.__fr);
Event.removeNativeListener(this.__fp,l,this.__fr);
}},"default":qx.lang.Function.empty}),_onTouchEvent:qx.event.GlobalError.observeMethod(function(br){this._commonTouchEventHandler(br);
}),_onMouseEvent:qx.core.Environment.select(t,{"true":qx.event.GlobalError.observeMethod(function(bs){if(!qx.core.Environment.get(p)){if(bs.type==o&&!this.__fw){return;
}var bt=this.__fF(bs);
this._commonTouchEventHandler(bs,bt);
}}),"default":qx.lang.Function.empty}),_commonTouchEventHandler:function(bu,bv){var bv=bv||bu.type;

if(bv==r){this.__fx=this.__fy(bu);
}this.__fz(bu,bv);
this.__fA(bu,bv);
}},destruct:function(){this._stopTouchObserver();
this._stopMouseObserver();
this.__fn=this.__fo=this.__fp=this.__fx=null;
},defer:function(bw){qx.event.Registration.addHandler(bw);
if(qx.core.Environment.get(p)){if(qx.core.Environment.get(b)==false){document.addEventListener(q,function(e){e.preventDefault();
});
}qx.event.Registration.getManager(document).getHandler(bw);
}}});
})();
(function(){var c="qx.event.handler.Appear",b="disappear",a="appear";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(d){qx.core.Object.call(this);
this.__fI=d;
this.__fJ={};
qx.event.handler.Appear.__fK[this.$$hash]=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{appear:true,disappear:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,__fK:{},refresh:function(){var e=this.__fK;

for(var f in e){e[f].refresh();
}}},members:{__fI:null,__fJ:null,canHandleEvent:function(g,h){},registerEvent:function(i,j,k){var l=qx.core.ObjectRegistry.toHashCode(i)+j;
var m=this.__fJ;

if(m&&!m[l]){m[l]=i;
i.$$displayed=i.offsetWidth>0;
}},unregisterEvent:function(n,o,p){var q=qx.core.ObjectRegistry.toHashCode(n)+o;
var r=this.__fJ;

if(!r){return;
}
if(r[q]){delete r[q];
}},refresh:function(){var v=this.__fJ;
var w;

for(var u in v){w=v[u];
var s=w.offsetWidth>0;

if((!!w.$$displayed)!==s){w.$$displayed=s;
var t=qx.event.Registration.createEvent(s?a:b);
this.__fI.dispatchEvent(w,t);
}}}},destruct:function(){this.__fI=this.__fJ=null;
delete qx.event.handler.Appear.__fK[this.$$hash];
},defer:function(x){qx.event.Registration.addHandler(x);
}});
})();
(function(){var c="qx.debug",b="abstract",a="qx.event.dispatch.AbstractBubbling";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,type:b,construct:function(d){this._manager=d;
},members:{_getParent:function(e){throw new Error("Missing implementation");
},canDispatchEvent:function(f,event,g){return event.getBubbles();
},dispatchEvent:function(h,event,k){var parent=h;
var t=this._manager;
var q,x;
var o;
var s,v;
var u;
var w=[];
q=t.getListeners(h,k,true);
x=t.getListeners(h,k,false);

if(q){w.push(q);
}
if(x){w.push(x);
}var parent=this._getParent(h);
var m=[];
var l=[];
var n=[];
var r=[];
while(parent!=null){q=t.getListeners(parent,k,true);

if(q){n.push(q);
r.push(parent);
}x=t.getListeners(parent,k,false);

if(x){m.push(x);
l.push(parent);
}parent=this._getParent(parent);
}event.setEventPhase(qx.event.type.Event.CAPTURING_PHASE);

for(var i=n.length-1;i>=0;i--){u=r[i];
event.setCurrentTarget(u);
o=n[i];

for(var j=0,p=o.length;j<p;j++){s=o[j];
v=s.context||u;

if(qx.core.Environment.get(c)){if(v&&v.isDisposed&&v.isDisposed()){this.warn("The context object '"+v+"' for the event '"+k+"' of '"+u+"'is already disposed.");
}}s.handler.call(v,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.AT_TARGET);
event.setCurrentTarget(h);

for(var i=0,y=w.length;i<y;i++){o=w[i];

for(var j=0,p=o.length;j<p;j++){s=o[j];
v=s.context||h;

if(qx.core.Environment.get(c)){if(v&&v.isDisposed&&v.isDisposed()){this.warn("The context object '"+v+"' for the event '"+k+"' of '"+h+"'is already disposed.");
}}s.handler.call(v,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.BUBBLING_PHASE);

for(var i=0,y=m.length;i<y;i++){u=l[i];
event.setCurrentTarget(u);
o=m[i];

for(var j=0,p=o.length;j<p;j++){s=o[j];
v=s.context||u;

if(qx.core.Environment.get(c)){if(v&&v.isDisposed&&v.isDisposed()){this.warn("The context object '"+v+"' for the event '"+k+"' of '"+u+"'is already disposed.");
}}s.handler.call(v,event);
}
if(event.getPropagationStopped()){return;
}}}}});
})();
(function(){var a="qx.event.dispatch.DomBubbling";
qx.Class.define(a,{extend:qx.event.dispatch.AbstractBubbling,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL},members:{_getParent:function(b){return b.parentNode;
},canDispatchEvent:function(c,event,d){return c.nodeType!==undefined&&event.getBubbles();
}},defer:function(e){qx.event.Registration.addDispatcher(e);
}});
})();
(function(){var d="-",c="qx.event.handler.Element",b="load",a="iframe";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(e){qx.core.Object.call(this);
this._manager=e;
this._registeredEvents={};
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{abort:true,load:true,scroll:true,select:true,reset:true,submit:true},CANCELABLE:{selectstart:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(f,g){if(g===b){return f.tagName.toLowerCase()!==a;
}else{return true;
}},registerEvent:function(h,i,j){var m=qx.core.ObjectRegistry.toHashCode(h);
var k=m+d+i;
var l=qx.lang.Function.listener(this._onNative,this,k);
qx.bom.Event.addNativeListener(h,i,l);
this._registeredEvents[k]={element:h,type:i,listener:l};
},unregisterEvent:function(n,o,p){var s=this._registeredEvents;

if(!s){return;
}var t=qx.core.ObjectRegistry.toHashCode(n);
var q=t+d+o;
var r=this._registeredEvents[q];

if(r){qx.bom.Event.removeNativeListener(n,o,r.listener);
}delete this._registeredEvents[q];
},_onNative:qx.event.GlobalError.observeMethod(function(u,v){var x=this._registeredEvents;

if(!x){return;
}var w=x[v];
var y=this.constructor.CANCELABLE[w.type];
qx.event.Registration.fireNonBubblingEvent(w.element,w.type,qx.event.type.Native,[u,undefined,undefined,undefined,y]);
})},destruct:function(){var z;
var A=this._registeredEvents;

for(var B in A){z=A[B];
qx.bom.Event.removeNativeListener(z.element,z.type,z.listener);
}this._manager=this._registeredEvents=null;
},defer:function(C){qx.event.Registration.addHandler(C);
}});
})();
(function(){var a="qx.event.handler.Capture";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{capture:true,losecapture:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(b,c){},registerEvent:function(d,e,f){},unregisterEvent:function(g,h,i){}},defer:function(j){qx.event.Registration.addHandler(j);
}});
})();
(function(){var t="mouseup",s="engine.name",r="click",q="mousedown",p="contextmenu",o="mousewheel",n="dblclick",m="os.name",l="mouseover",k="mouseout",d="ios",j="mousemove",g="on",c="engine.version",b="useraction",f="webkit",e="gecko",h="DOMMouseScroll",a="qx.event.handler.Mouse";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(u){qx.core.Object.call(this);
this.__fL=u;
this.__fM=u.getWindow();
this.__fN=this.__fM.document;
this._initButtonObserver();
this._initMoveObserver();
this._initWheelObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE+qx.event.IEventHandler.TARGET_DOCUMENT+qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__fO:null,__fP:null,__fQ:null,__fR:null,__fS:null,__fL:null,__fM:null,__fN:null,canHandleEvent:function(v,w){},registerEvent:qx.core.Environment.get(m)===
d?
function(x,y,z){x[g+y]=qx.lang.Function.returnNull;
}:qx.lang.Function.returnNull,unregisterEvent:qx.core.Environment.get(m)===
d?
function(A,B,C){A[g+B]=undefined;
}:qx.lang.Function.returnNull,__fT:function(D,E,F){if(!F){F=qx.bom.Event.getTarget(D);
}if(F&&F.nodeType){qx.event.Registration.fireEvent(F,E||D.type,E==o?qx.event.type.MouseWheel:qx.event.type.Mouse,[D,F,null,true,true]);
}qx.event.Registration.fireEvent(this.__fM,b,qx.event.type.Data,[E||D.type]);
},__fU:function(){var H=[this.__fM,this.__fN,this.__fN.body];
var I=this.__fM;
var G=h;

for(var i=0;i<H.length;i++){if(qx.bom.Event.supportsEvent(H[i],o)){G=o;
I=H[i];
break;
}}return {type:G,target:I};
},_initButtonObserver:function(){this.__fO=qx.lang.Function.listener(this._onButtonEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__fN,q,this.__fO);
Event.addNativeListener(this.__fN,t,this.__fO);
Event.addNativeListener(this.__fN,r,this.__fO);
Event.addNativeListener(this.__fN,n,this.__fO);
Event.addNativeListener(this.__fN,p,this.__fO);
},_initMoveObserver:function(){this.__fP=qx.lang.Function.listener(this._onMoveEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__fN,j,this.__fP);
Event.addNativeListener(this.__fN,l,this.__fP);
Event.addNativeListener(this.__fN,k,this.__fP);
},_initWheelObserver:function(){this.__fQ=qx.lang.Function.listener(this._onWheelEvent,this);
var J=this.__fU();
qx.bom.Event.addNativeListener(J.target,J.type,this.__fQ);
},_stopButtonObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__fN,q,this.__fO);
Event.removeNativeListener(this.__fN,t,this.__fO);
Event.removeNativeListener(this.__fN,r,this.__fO);
Event.removeNativeListener(this.__fN,n,this.__fO);
Event.removeNativeListener(this.__fN,p,this.__fO);
},_stopMoveObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__fN,j,this.__fP);
Event.removeNativeListener(this.__fN,l,this.__fP);
Event.removeNativeListener(this.__fN,k,this.__fP);
},_stopWheelObserver:function(){var K=this.__fU();
qx.bom.Event.removeNativeListener(K.target,K.type,this.__fQ);
},_onMoveEvent:qx.event.GlobalError.observeMethod(function(L){this.__fT(L);
}),_onButtonEvent:qx.event.GlobalError.observeMethod(function(M){var N=M.type;
var O=qx.bom.Event.getTarget(M);
if(qx.core.Environment.get(s)==e||qx.core.Environment.get(s)==f){if(O&&O.nodeType==3){O=O.parentNode;
}}
if(this.__fV){this.__fV(M,N,O);
}
if(this.__fX){this.__fX(M,N,O);
}this.__fT(M,N,O);

if(this.__fW){this.__fW(M,N,O);
}
if(this.__fY){this.__fY(M,N,O);
}this.__fR=N;
}),_onWheelEvent:qx.event.GlobalError.observeMethod(function(P){this.__fT(P,o);
}),__fV:qx.core.Environment.select(s,{"webkit":function(Q,R,S){if(parseFloat(qx.core.Environment.get(c))<530){if(R==p){this.__fT(Q,t,S);
}}},"default":null}),__fW:qx.core.Environment.select(s,{"opera":function(T,U,V){if(U==t&&T.button==2){this.__fT(T,p,V);
}},"default":null}),__fX:qx.core.Environment.select(s,{"mshtml":function(W,X,Y){if(W.target!==undefined){return;
}
if(X==t&&this.__fR==r){this.__fT(W,q,Y);
}else if(X==n){this.__fT(W,r,Y);
}},"default":null}),__fY:qx.core.Environment.select(s,{"mshtml":null,"default":function(ba,bb,bc){switch(bb){case q:this.__fS=bc;
break;
case t:if(bc!==this.__fS){var bd=qx.dom.Hierarchy.getCommonParent(bc,this.__fS);
this.__fT(ba,r,bd);
}}}})},destruct:function(){this._stopButtonObserver();
this._stopMoveObserver();
this._stopWheelObserver();
this.__fL=this.__fM=this.__fN=this.__fS=null;
},defer:function(be){qx.event.Registration.addHandler(be);
}});
})();
(function(){var m="keydown",l="engine.name",k="keypress",j="NumLock",i="keyup",h="os.name",g="Enter",f="0",e="engine.version",d="9",bx="-",bw="+",bv="PrintScreen",bu="PageUp",bt="gecko",bs="A",br="Space",bq="Left",bp="F5",bo="Down",t="Up",u="F11",r="F6",s="useraction",p="F3",q="keyinput",n="Insert",o="F8",B="End",C="/",Q="Delete",M="*",Y="F1",T="F4",bk="Home",be="F2",H="F12",bn="PageDown",bm="mshtml",bl="F7",F="Win",J="osx",L="F9",O="webkit",R="cmd",U="F10",bb="Right",bg="Z",v="text",w="Escape",I="5",X="3",W="Meta",V="7",bd="Scroll",bc="CapsLock",S="input",ba="Control",a="Tab",bf="Shift",x="Pause",y="Unidentified",N="qx.event.handler.Keyboard",b="win",c="1",E="Apps",z="6",A="off",D="4",P="Alt",bi="2",bh="8",K="Backspace",bj="autoComplete",G=",";
qx.Class.define(N,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(by){qx.core.Object.call(this);
this.__ga=by;
this.__gb=by.getWindow();
if((qx.core.Environment.get(l)==bt)){this.__gc=this.__gb;
}else{this.__gc=this.__gb.document.documentElement;
}this.__gd={};
this._initKeyObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{keyup:1,keydown:1,keypress:1,keyinput:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,isValidKeyIdentifier:function(bz){if(this._identifierToKeyCodeMap[bz]){return true;
}
if(bz.length!=1){return false;
}
if(bz>=f&&bz<=d){return true;
}
if(bz>=bs&&bz<=bg){return true;
}
switch(bz){case bw:case bx:case M:case C:return true;
default:return false;
}},isPrintableKeyIdentifier:function(bA){if(bA===br){return true;
}else{return this._identifierToKeyCodeMap[bA]?false:true;
}}},members:{__ge:null,__ga:null,__gb:null,__gc:null,__gd:null,__gf:null,__gg:null,__gh:null,canHandleEvent:function(bB,bC){},registerEvent:function(bD,bE,bF){},unregisterEvent:function(bG,bH,bI){},_fireInputEvent:function(bJ,bK){var bL=this.__gi();
if(bL&&bL.offsetWidth!=0){var event=qx.event.Registration.createEvent(q,qx.event.type.KeyInput,[bJ,bL,bK]);
this.__ga.dispatchEvent(bL,event);
}if(this.__gb){qx.event.Registration.fireEvent(this.__gb,s,qx.event.type.Data,[q]);
}},_fireSequenceEvent:function(bM,bN,bO){var bP=this.__gi();
var bQ=bM.keyCode;
var event=qx.event.Registration.createEvent(bN,qx.event.type.KeySequence,[bM,bP,bO]);
this.__ga.dispatchEvent(bP,event);
if(qx.core.Environment.get(l)==bm||qx.core.Environment.get(l)==O){if(bN==m&&event.getDefaultPrevented()){if(!this._isNonPrintableKeyCode(bQ)&&!this._emulateKeyPress[bQ]){this._fireSequenceEvent(bM,k,bO);
}}}if(this.__gb){qx.event.Registration.fireEvent(this.__gb,s,qx.event.type.Data,[bN]);
}},__gi:function(){var bR=this.__ga.getHandler(qx.event.handler.Focus);
var bS=bR.getActive();
if(!bS||bS.offsetWidth==0){bS=bR.getFocus();
}if(!bS||bS.offsetWidth==0){bS=this.__ga.getWindow().document.body;
}return bS;
},_initKeyObserver:function(){this.__ge=qx.lang.Function.listener(this.__gj,this);
this.__gh=qx.lang.Function.listener(this.__gl,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__gc,i,this.__ge);
Event.addNativeListener(this.__gc,m,this.__ge);
Event.addNativeListener(this.__gc,k,this.__gh);
},_stopKeyObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__gc,i,this.__ge);
Event.removeNativeListener(this.__gc,m,this.__ge);
Event.removeNativeListener(this.__gc,k,this.__gh);

for(var bU in (this.__gg||{})){var bT=this.__gg[bU];
Event.removeNativeListener(bT.target,k,bT.callback);
}delete (this.__gg);
},__gj:qx.event.GlobalError.observeMethod(qx.core.Environment.select(l,{"mshtml":function(bV){bV=window.event||bV;
var bY=bV.keyCode;
var bW=0;
var bX=bV.type;
if(!(this.__gd[bY]==m&&bX==m)){this._idealKeyHandler(bY,bW,bX,bV);
}if(bX==m){if(this._isNonPrintableKeyCode(bY)||this._emulateKeyPress[bY]){this._idealKeyHandler(bY,bW,k,bV);
}}this.__gd[bY]=bX;
},"gecko":function(ca){var ce=this._keyCodeFix[ca.keyCode]||ca.keyCode;
var cc=0;
var cd=ca.type;
if(qx.core.Environment.get(h)==b){var cb=ce?this._keyCodeToIdentifier(ce):this._charCodeToIdentifier(cc);

if(!(this.__gd[cb]==m&&cd==m)){this._idealKeyHandler(ce,cc,cd,ca);
}this.__gd[cb]=cd;
}else{this._idealKeyHandler(ce,cc,cd,ca);
}this.__gk(ca.target,cd,ce);
},"webkit":function(cf){var ci=0;
var cg=0;
var ch=cf.type;
if(parseFloat(qx.core.Environment.get(e))<525.13){if(ch==i||ch==m){ci=this._charCode2KeyCode[cf.charCode]||cf.keyCode;
}else{if(this._charCode2KeyCode[cf.charCode]){ci=this._charCode2KeyCode[cf.charCode];
}else{cg=cf.charCode;
}}this._idealKeyHandler(ci,cg,ch,cf);
}else{ci=cf.keyCode;
this._idealKeyHandler(ci,cg,ch,cf);
if(ch==m){if(this._isNonPrintableKeyCode(ci)||this._emulateKeyPress[ci]){this._idealKeyHandler(ci,cg,k,cf);
}}this.__gd[ci]=ch;
}},"opera":function(cj){this.__gf=cj.keyCode;
this._idealKeyHandler(cj.keyCode,0,cj.type,cj);
}})),__gk:qx.core.Environment.select(l,{"gecko":function(ck,cl,cm){if(cl===m&&(cm==33||cm==34||cm==38||cm==40)&&ck.type==v&&ck.tagName.toLowerCase()===S&&ck.getAttribute(bj)!==A){if(!this.__gg){this.__gg={};
}var co=qx.core.ObjectRegistry.toHashCode(ck);

if(this.__gg[co]){return;
}var self=this;
this.__gg[co]={target:ck,callback:function(cp){qx.bom.Event.stopPropagation(cp);
self.__gl(cp);
}};
var cn=qx.event.GlobalError.observeMethod(this.__gg[co].callback);
qx.bom.Event.addNativeListener(ck,k,cn);
}},"default":null}),__gl:qx.event.GlobalError.observeMethod(qx.core.Environment.select(l,{"mshtml":function(cq){cq=window.event||cq;

if(this._charCode2KeyCode[cq.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[cq.keyCode],0,cq.type,cq);
}else{this._idealKeyHandler(0,cq.keyCode,cq.type,cq);
}},"gecko":function(cr){var cu=this._keyCodeFix[cr.keyCode]||cr.keyCode;
var cs=cr.charCode;
var ct=cr.type;
this._idealKeyHandler(cu,cs,ct,cr);
},"webkit":function(cv){if(parseFloat(qx.core.Environment.get(e))<525.13){var cy=0;
var cw=0;
var cx=cv.type;

if(cx==i||cx==m){cy=this._charCode2KeyCode[cv.charCode]||cv.keyCode;
}else{if(this._charCode2KeyCode[cv.charCode]){cy=this._charCode2KeyCode[cv.charCode];
}else{cw=cv.charCode;
}}this._idealKeyHandler(cy,cw,cx,cv);
}else{if(this._charCode2KeyCode[cv.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[cv.keyCode],0,cv.type,cv);
}else{this._idealKeyHandler(0,cv.keyCode,cv.type,cv);
}}},"opera":function(cz){var cB=cz.keyCode;
var cA=cz.type;
if(cB!=this.__gf){this._idealKeyHandler(0,this.__gf,cA,cz);
}else{if(this._keyCodeToIdentifierMap[cz.keyCode]){this._idealKeyHandler(cz.keyCode,0,cz.type,cz);
}else{this._idealKeyHandler(0,cz.keyCode,cz.type,cz);
}}}})),_idealKeyHandler:function(cC,cD,cE,cF){var cG;
if(cC||(!cC&&!cD)){cG=this._keyCodeToIdentifier(cC);
this._fireSequenceEvent(cF,cE,cG);
}else{cG=this._charCodeToIdentifier(cD);
this._fireSequenceEvent(cF,k,cG);
this._fireInputEvent(cF,cD);
}},_specialCharCodeMap:{8:K,9:a,13:g,27:w,32:br},_emulateKeyPress:qx.core.Environment.select(l,{"mshtml":{8:true,9:true},"webkit":{8:true,9:true,27:true},"default":{}}),_keyCodeToIdentifierMap:{16:bf,17:ba,18:P,20:bc,224:W,37:bq,38:t,39:bb,40:bo,33:bu,34:bn,35:B,36:bk,45:n,46:Q,112:Y,113:be,114:p,115:T,116:bp,117:r,118:bl,119:o,120:L,121:U,122:u,123:H,144:j,44:bv,145:bd,19:x,91:qx.core.Environment.get(h)==J?R:F,92:F,93:qx.core.Environment.get(h)==J?R:E},_numpadToCharCode:{96:f.charCodeAt(0),97:c.charCodeAt(0),98:bi.charCodeAt(0),99:X.charCodeAt(0),100:D.charCodeAt(0),101:I.charCodeAt(0),102:z.charCodeAt(0),103:V.charCodeAt(0),104:bh.charCodeAt(0),105:d.charCodeAt(0),106:M.charCodeAt(0),107:bw.charCodeAt(0),109:bx.charCodeAt(0),110:G.charCodeAt(0),111:C.charCodeAt(0)},_charCodeA:bs.charCodeAt(0),_charCodeZ:bg.charCodeAt(0),_charCode0:f.charCodeAt(0),_charCode9:d.charCodeAt(0),_isNonPrintableKeyCode:function(cH){return this._keyCodeToIdentifierMap[cH]?true:false;
},_isIdentifiableKeyCode:function(cI){if(cI>=this._charCodeA&&cI<=this._charCodeZ){return true;
}if(cI>=this._charCode0&&cI<=this._charCode9){return true;
}if(this._specialCharCodeMap[cI]){return true;
}if(this._numpadToCharCode[cI]){return true;
}if(this._isNonPrintableKeyCode(cI)){return true;
}return false;
},_keyCodeToIdentifier:function(cJ){if(this._isIdentifiableKeyCode(cJ)){var cK=this._numpadToCharCode[cJ];

if(cK){return String.fromCharCode(cK);
}return (this._keyCodeToIdentifierMap[cJ]||this._specialCharCodeMap[cJ]||String.fromCharCode(cJ));
}else{return y;
}},_charCodeToIdentifier:function(cL){return this._specialCharCodeMap[cL]||String.fromCharCode(cL).toUpperCase();
},_identifierToKeyCode:function(cM){return qx.event.handler.Keyboard._identifierToKeyCodeMap[cM]||cM.charCodeAt(0);
}},destruct:function(){this._stopKeyObserver();
this.__gf=this.__ga=this.__gb=this.__gc=this.__gd=null;
},defer:function(cN,cO){qx.event.Registration.addHandler(cN);
if(!cN._identifierToKeyCodeMap){cN._identifierToKeyCodeMap={};

for(var cP in cO._keyCodeToIdentifierMap){cN._identifierToKeyCodeMap[cO._keyCodeToIdentifierMap[cP]]=parseInt(cP,10);
}
for(var cP in cO._specialCharCodeMap){cN._identifierToKeyCodeMap[cO._specialCharCodeMap[cP]]=parseInt(cP,10);
}}
if((qx.core.Environment.get(l)==bm)){cO._charCode2KeyCode={13:13,27:27};
}else if((qx.core.Environment.get(l)==bt)){cO._keyCodeFix={12:cO._identifierToKeyCode(j)};
}else if((qx.core.Environment.get(l)==O)){if(parseFloat(qx.core.Environment.get(e))<525.13){cO._charCode2KeyCode={63289:cO._identifierToKeyCode(j),63276:cO._identifierToKeyCode(bu),63277:cO._identifierToKeyCode(bn),63275:cO._identifierToKeyCode(B),63273:cO._identifierToKeyCode(bk),63234:cO._identifierToKeyCode(bq),63232:cO._identifierToKeyCode(t),63235:cO._identifierToKeyCode(bb),63233:cO._identifierToKeyCode(bo),63272:cO._identifierToKeyCode(Q),63302:cO._identifierToKeyCode(n),63236:cO._identifierToKeyCode(Y),63237:cO._identifierToKeyCode(be),63238:cO._identifierToKeyCode(p),63239:cO._identifierToKeyCode(T),63240:cO._identifierToKeyCode(bp),63241:cO._identifierToKeyCode(r),63242:cO._identifierToKeyCode(bl),63243:cO._identifierToKeyCode(o),63244:cO._identifierToKeyCode(L),63245:cO._identifierToKeyCode(U),63246:cO._identifierToKeyCode(u),63247:cO._identifierToKeyCode(H),63248:cO._identifierToKeyCode(bv),3:cO._identifierToKeyCode(g),12:cO._identifierToKeyCode(j),13:cO._identifierToKeyCode(g)};
}else{cO._charCode2KeyCode={13:13,27:27};
}}}});
})();
(function(){var k="alias",j="copy",i="blur",h="mouseout",g="keydown",f="Ctrl",d="Shift",c="mousemove",b="move",a="mouseover",A="Alt",z="keyup",y="mouseup",x="dragend",w="on",v="mousedown",u="qxDraggable",t="drag",s="drop",r="qxDroppable",p="qx.event.handler.DragDrop",q="droprequest",n="dragstart",o="dragchange",l="dragleave",m="dragover";
qx.Class.define(p,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(B){qx.core.Object.call(this);
this.__gm=B;
this.__gn=B.getWindow().document.documentElement;
this.__gm.addListener(this.__gn,v,this._onMouseDown,this);
this.__gz();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:true},members:{__gm:null,__gn:null,__go:null,__gp:null,__gq:null,__gr:null,__gs:null,__gt:null,__gu:null,__gv:null,__gw:false,__gx:0,__gy:0,canHandleEvent:function(C,D){},registerEvent:function(E,F,G){},unregisterEvent:function(H,I,J){},addType:function(K){this.__gq[K]=true;
},addAction:function(L){this.__gr[L]=true;
},supportsType:function(M){return !!this.__gq[M];
},supportsAction:function(N){return !!this.__gr[N];
},getData:function(O){if(!this.__gG||!this.__go){throw new Error("This method must not be used outside the drop event listener!");
}
if(!this.__gq[O]){throw new Error("Unsupported data type: "+O+"!");
}
if(!this.__gt[O]){this.__gu=O;
this.__gB(q,this.__gp,this.__go,false);
}
if(!this.__gt[O]){throw new Error("Please use a droprequest listener to the drag source to fill the manager with data!");
}return this.__gt[O]||null;
},getCurrentAction:function(){return this.__gv;
},addData:function(P,Q){this.__gt[P]=Q;
},getCurrentType:function(){return this.__gu;
},isSessionActive:function(){return this.__gw;
},__gz:function(){this.__gq={};
this.__gr={};
this.__gs={};
this.__gt={};
},__gA:function(){if(this.__gp==null){return;
}var T=this.__gr;
var R=this.__gs;
var S=null;

if(this.__gG){if(R.Shift&&R.Ctrl&&T.alias){S=k;
}else if(R.Shift&&R.Alt&&T.copy){S=j;
}else if(R.Shift&&T.move){S=b;
}else if(R.Alt&&T.alias){S=k;
}else if(R.Ctrl&&T.copy){S=j;
}else if(T.move){S=b;
}else if(T.copy){S=j;
}else if(T.alias){S=k;
}}
if(S!=this.__gv){this.__gv=S;
this.__gB(o,this.__gp,this.__go,false);
}},__gB:function(U,V,W,X,Y){var bb=qx.event.Registration;
var ba=bb.createEvent(U,qx.event.type.Drag,[X,Y]);

if(V!==W){ba.setRelatedTarget(W);
}return bb.dispatchEvent(V,ba);
},__gC:function(bc){while(bc&&bc.nodeType==1){if(bc.getAttribute(u)==w){return bc;
}bc=bc.parentNode;
}return null;
},__gD:function(bd){while(bd&&bd.nodeType==1){if(bd.getAttribute(r)==w){return bd;
}bd=bd.parentNode;
}return null;
},__gE:function(){this.__gp=null;
this.__gm.removeListener(this.__gn,c,this._onMouseMove,this,true);
this.__gm.removeListener(this.__gn,y,this._onMouseUp,this,true);
qx.event.Registration.removeListener(window,i,this._onWindowBlur,this);
this.__gz();
},__gF:function(){if(this.__gw){this.__gm.removeListener(this.__gn,a,this._onMouseOver,this,true);
this.__gm.removeListener(this.__gn,h,this._onMouseOut,this,true);
this.__gm.removeListener(this.__gn,g,this._onKeyDown,this,true);
this.__gm.removeListener(this.__gn,z,this._onKeyUp,this,true);
this.__gB(x,this.__gp,this.__go,false);
this.__gw=false;
}this.__gG=false;
this.__go=null;
this.__gE();
},__gG:false,_onWindowBlur:function(e){this.__gF();
},_onKeyDown:function(e){var be=e.getKeyIdentifier();

switch(be){case A:case f:case d:if(!this.__gs[be]){this.__gs[be]=true;
this.__gA();
}}},_onKeyUp:function(e){var bf=e.getKeyIdentifier();

switch(bf){case A:case f:case d:if(this.__gs[bf]){this.__gs[bf]=false;
this.__gA();
}}},_onMouseDown:function(e){if(this.__gw){return;
}var bg=this.__gC(e.getTarget());

if(bg){this.__gx=e.getDocumentLeft();
this.__gy=e.getDocumentTop();
this.__gp=bg;
this.__gm.addListener(this.__gn,c,this._onMouseMove,this,true);
this.__gm.addListener(this.__gn,y,this._onMouseUp,this,true);
qx.event.Registration.addListener(window,i,this._onWindowBlur,this);
}},_onMouseUp:function(e){if(this.__gG){this.__gB(s,this.__go,this.__gp,false,e);
}if(this.__gw){e.stopPropagation();
}this.__gF();
},_onMouseMove:function(e){if(this.__gw){if(!this.__gB(t,this.__gp,this.__go,true,e)){this.__gF();
}}else{if(Math.abs(e.getDocumentLeft()-this.__gx)>3||Math.abs(e.getDocumentTop()-this.__gy)>3){if(this.__gB(n,this.__gp,this.__go,true,e)){this.__gw=true;
this.__gm.addListener(this.__gn,a,this._onMouseOver,this,true);
this.__gm.addListener(this.__gn,h,this._onMouseOut,this,true);
this.__gm.addListener(this.__gn,g,this._onKeyDown,this,true);
this.__gm.addListener(this.__gn,z,this._onKeyUp,this,true);
var bh=this.__gs;
bh.Ctrl=e.isCtrlPressed();
bh.Shift=e.isShiftPressed();
bh.Alt=e.isAltPressed();
this.__gA();
}else{this.__gB(x,this.__gp,this.__go,false);
this.__gE();
}}}},_onMouseOver:function(e){var bi=e.getTarget();
var bj=this.__gD(bi);

if(bj&&bj!=this.__go){this.__gG=this.__gB(m,bj,this.__gp,true,e);
this.__go=bj;
this.__gA();
}},_onMouseOut:function(e){var bl=this.__gD(e.getTarget());
var bk=this.__gD(e.getRelatedTarget());

if(bl&&bl!==bk&&bl==this.__go){this.__gB(l,this.__go,bk,false,e);
this.__go=null;
this.__gG=false;
qx.event.Timer.once(this.__gA,this,0);
}}},destruct:function(){this.__gp=this.__go=this.__gm=this.__gn=this.__gq=this.__gr=this.__gs=this.__gt=null;
},defer:function(bm){qx.event.Registration.addHandler(bm);
}});
})();
(function(){var r="engine.name",q="mshtml",p="",o=" ",n=">",m="<",k="='",h="none",g="<INPUT TYPE='RADIO' NAME='RADIOTEST' VALUE='Second Choice'>",f="qx.bom.Element",b="webkit",d="' ",c="div",a="></";
qx.Class.define(f,{statics:{__gH:{"onload":true,"onpropertychange":true,"oninput":true,"onchange":true,"name":true,"type":true,"checked":true,"disabled":true},__gI:{},__gJ:{},allowCreationWithMarkup:function(s){if(!s){s=window;
}var t=s.location.href;

if(qx.bom.Element.__gJ[t]==undefined){try{s.document.createElement(g);
qx.bom.Element.__gJ[t]=true;
}catch(e){qx.bom.Element.__gJ[t]=false;
}}return qx.bom.Element.__gJ[t];
},getHelperElement:function(u){if(!u){u=window;
}var w=u.location.href;

if(!qx.bom.Element.__gI[w]){var v=qx.bom.Element.__gI[w]=u.document.createElement(c);
if(qx.core.Environment.get(r)==b){v.style.display=h;
u.document.body.appendChild(v);
}}return qx.bom.Element.__gI[w];
},create:function(name,x,y){if(!y){y=window;
}
if(!name){throw new Error("The tag name is missing!");
}var A=this.__gH;
var z=p;

for(var C in x){if(A[C]){z+=C+k+x[C]+d;
}}var D;
if(z!=p){if(qx.bom.Element.allowCreationWithMarkup(y)){D=y.document.createElement(m+name+o+z+n);
}else{var B=qx.bom.Element.getHelperElement(y);
B.innerHTML=m+name+o+z+a+name+n;
D=B.firstChild;
}}else{D=y.document.createElement(name);
}
for(var C in x){if(!A[C]){qx.bom.element.Attribute.set(D,C,x[C]);
}}return D;
},empty:function(E){return E.innerHTML=p;
},addListener:function(F,G,H,self,I){return qx.event.Registration.addListener(F,G,H,self,I);
},removeListener:function(J,K,L,self,M){return qx.event.Registration.removeListener(J,K,L,self,M);
},removeListenerById:function(N,O){return qx.event.Registration.removeListenerById(N,O);
},hasListener:function(P,Q,R){return qx.event.Registration.hasListener(P,Q,R);
},focus:function(S){qx.event.Registration.getManager(S).getHandler(qx.event.handler.Focus).focus(S);
},blur:function(T){qx.event.Registration.getManager(T).getHandler(qx.event.handler.Focus).blur(T);
},activate:function(U){qx.event.Registration.getManager(U).getHandler(qx.event.handler.Focus).activate(U);
},deactivate:function(V){qx.event.Registration.getManager(V).getHandler(qx.event.handler.Focus).deactivate(V);
},capture:function(W,X){qx.event.Registration.getManager(W).getDispatcher(qx.event.dispatch.MouseCapture).activateCapture(W,X);
},releaseCapture:function(Y){qx.event.Registration.getManager(Y).getDispatcher(qx.event.dispatch.MouseCapture).releaseCapture(Y);
},matchesSelector:function(ba,bb){if(bb){return qx.bom.Selector.query(bb,ba.parentNode).length>0;
}else{return false;
}},clone:function(bc,bd){var bg;

if(bd||((qx.core.Environment.get(r)==q)&&!qx.xml.Document.isXmlDocument(bc))){var bk=qx.event.Registration.getManager(bc);
var be=qx.dom.Hierarchy.getDescendants(bc);
be.push(bc);
}if((qx.core.Environment.get(r)==q)){for(var i=0,l=be.length;i<l;i++){bk.toggleAttachedEvents(be[i],false);
}}var bg=bc.cloneNode(true);
if((qx.core.Environment.get(r)==q)){for(var i=0,l=be.length;i<l;i++){bk.toggleAttachedEvents(be[i],true);
}}if(bd===true){var bn=qx.dom.Hierarchy.getDescendants(bg);
bn.push(bg);
var bf,bi,bm,bh;

for(var i=0,bl=be.length;i<bl;i++){bm=be[i];
bf=bk.serializeListeners(bm);

if(bf.length>0){bi=bn[i];

for(var j=0,bj=bf.length;j<bj;j++){bh=bf[j];
bk.addListener(bi,bh.type,bh.handler,bh.self,bh.capture);
}}}}return bg;
}}});
})();
(function(){var c="engine.version",b="engine.name",a="qx.bom.Viewport";
qx.Class.define(a,{statics:{getWidth:qx.core.Environment.select(b,{"opera":function(d){if(parseFloat(qx.core.Environment.get(c))<9.5){return (d||window).document.body.clientWidth;
}else{var e=(d||window).document;
return qx.bom.Document.isStandardMode(d)?e.documentElement.clientWidth:e.body.clientWidth;
}},"webkit":function(f){if(parseFloat(qx.core.Environment.get(c))<523.15){return (f||window).innerWidth;
}else{var g=(f||window).document;
return qx.bom.Document.isStandardMode(f)?g.documentElement.clientWidth:g.body.clientWidth;
}},"default":function(h){var i=(h||window).document;
return qx.bom.Document.isStandardMode(h)?i.documentElement.clientWidth:i.body.clientWidth;
}}),getHeight:qx.core.Environment.select(b,{"opera":function(j){if(parseFloat(qx.core.Environment.get(c))<9.5){return (j||window).document.body.clientHeight;
}else{var k=(j||window).document;
return qx.bom.Document.isStandardMode(j)?k.documentElement.clientHeight:k.body.clientHeight;
}},"webkit":function(l){if(parseFloat(qx.core.Environment.get(c))<523.15){return (l||window).innerHeight;
}else{var m=(l||window).document;
return qx.bom.Document.isStandardMode(l)?m.documentElement.clientHeight:m.body.clientHeight;
}},"default":function(n){var o=(n||window).document;
return qx.bom.Document.isStandardMode(n)?o.documentElement.clientHeight:o.body.clientHeight;
}}),getScrollLeft:qx.core.Environment.select(b,{"mshtml":function(p){var q=(p||window).document;
return q.documentElement.scrollLeft||q.body.scrollLeft;
},"default":function(r){return (r||window).pageXOffset;
}}),getScrollTop:qx.core.Environment.select(b,{"mshtml":function(s){var t=(s||window).document;
return t.documentElement.scrollTop||t.body.scrollTop;
},"default":function(u){return (u||window).pageYOffset;
}}),getOrientation:function(v){var w=(v||window).orientation;

if(w==null){w=this.getWidth(v)>this.getHeight(v)?90:0;
}return w;
},isLandscape:function(x){return Math.abs(this.getOrientation(x))==90;
},isPortrait:function(y){var z=this.getOrientation(y);
return (z==0||z==180);
}}});
})();
(function(){var g="CSS1Compat",f="engine.name",e="position:absolute;width:0;height:0;width:1",d="engine.version",c="qx.bom.Document",b="1px",a="div";
qx.Class.define(c,{statics:{isQuirksMode:qx.core.Environment.select(f,{"mshtml":function(h){if(qx.core.Environment.get(d)>=8){return (h||window).document.documentMode===5;
}else{return (h||window).document.compatMode!==g;
}},"webkit":function(i){if(document.compatMode===undefined){var j=(i||window).document.createElement(a);
j.style.cssText=e;
return j.style.width===b?true:false;
}else{return (i||window).document.compatMode!==g;
}},"default":function(k){return (k||window).document.compatMode!==g;
}}),isStandardMode:function(l){return !this.isQuirksMode(l);
},getWidth:function(m){var n=(m||window).document;
var o=qx.bom.Viewport.getWidth(m);
var scroll=this.isStandardMode(m)?n.documentElement.scrollWidth:n.body.scrollWidth;
return Math.max(scroll,o);
},getHeight:function(p){var q=(p||window).document;
var r=qx.bom.Viewport.getHeight(p);
var scroll=this.isStandardMode(p)?q.documentElement.scrollHeight:q.body.scrollHeight;
return Math.max(scroll,r);
}}});
})();
(function(){var c="landscape",b="qx.event.type.Orientation",a="portrait";
qx.Class.define(b,{extend:qx.event.type.Event,members:{__gK:null,__gL:null,init:function(d,e){qx.event.type.Event.prototype.init.call(this,false,false);
this.__gK=d;
this.__gL=e;
return this;
},clone:function(f){var g=qx.event.type.Event.prototype.clone.call(this,f);
g.__gK=this.__gK;
g.__gL=this.__gL;
return g;
},getOrientation:function(){return this.__gK;
},isLandscape:function(){return this.__gL==c;
},isPortrait:function(){return this.__gL==a;
}}});
})();
(function(){var c="os.name",b="qx.event.type.Dom",a="osx";
qx.Class.define(b,{extend:qx.event.type.Native,statics:{SHIFT_MASK:1,CTRL_MASK:2,ALT_MASK:4,META_MASK:8},members:{_cloneNativeEvent:function(d,e){var e=qx.event.type.Native.prototype._cloneNativeEvent.call(this,d,e);
e.shiftKey=d.shiftKey;
e.ctrlKey=d.ctrlKey;
e.altKey=d.altKey;
e.metaKey=d.metaKey;
return e;
},getModifiers:function(){var g=0;
var f=this._native;

if(f.shiftKey){g|=qx.event.type.Dom.SHIFT_MASK;
}
if(f.ctrlKey){g|=qx.event.type.Dom.CTRL_MASK;
}
if(f.altKey){g|=qx.event.type.Dom.ALT_MASK;
}
if(f.metaKey){g|=qx.event.type.Dom.META_MASK;
}return g;
},isCtrlPressed:function(){return this._native.ctrlKey;
},isShiftPressed:function(){return this._native.shiftKey;
},isAltPressed:function(){return this._native.altKey;
},isMetaPressed:function(){return this._native.metaKey;
},isCtrlOrCommandPressed:function(){if(qx.core.Environment.get(c)==a){return this._native.metaKey;
}else{return this._native.ctrlKey;
}}}});
})();
(function(){var c="touchcancel",b="qx.event.type.Touch",a="touchend";
qx.Class.define(b,{extend:qx.event.type.Dom,members:{_cloneNativeEvent:function(d,e){var e=qx.event.type.Dom.prototype._cloneNativeEvent.call(this,d,e);
e.pageX=d.pageX;
e.pageY=d.pageY;
e.layerX=d.layerX;
e.layerY=d.layerY;
e.scale=d.scale;
e.rotation=d.rotation;
e.srcElement=d.srcElement;
e.targetTouches=[];

for(var i=0;i<d.targetTouches.length;i++){e.targetTouches[i]=d.targetTouches[i];
}e.changedTouches=[];

for(var i=0;i<d.changedTouches.length;i++){e.changedTouches[i]=d.changedTouches[i];
}e.touches=[];

for(var i=0;i<d.touches.length;i++){e.touches[i]=d.touches[i];
}return e;
},stop:function(){this.stopPropagation();
},getAllTouches:function(){return this._native.touches;
},getTargetTouches:function(){return this._native.targetTouches;
},getChangedTargetTouches:function(){return this._native.changedTouches;
},isMultiTouch:function(){return this.__gN().length>1;
},getScale:function(){return this._native.scale;
},getRotation:function(){return this._native.rotation;
},getDocumentLeft:function(f){return this.__gM(f).pageX;
},getDocumentTop:function(g){return this.__gM(g).pageY;
},getScreenLeft:function(h){return this.__gM(h).screenX;
},getScreenTop:function(j){return this.__gM(j).screenY;
},getViewportLeft:function(k){return this.__gM(k).clientX;
},getViewportTop:function(l){return this.__gM(l).clientY;
},getIdentifier:function(m){return this.__gM(m).identifier;
},__gM:function(n){n=n==null?0:n;
return this.__gN()[n];
},__gN:function(){var o=(this._isTouchEnd()?this.getChangedTargetTouches():this.getTargetTouches());
return o;
},_isTouchEnd:function(){return (this.getType()==a||this.getType()==c);
}}});
})();
(function(){var a="qx.event.type.Tap";
qx.Class.define(a,{extend:qx.event.type.Touch,members:{_isTouchEnd:function(){return true;
}}});
})();
(function(){var a="qx.event.type.Swipe";
qx.Class.define(a,{extend:qx.event.type.Touch,members:{_cloneNativeEvent:function(b,c){var c=qx.event.type.Touch.prototype._cloneNativeEvent.call(this,b,c);
c.swipe=b.swipe;
return c;
},_isTouchEnd:function(){return true;
},getStartTime:function(){return this._native.swipe.startTime;
},getDuration:function(){return this._native.swipe.duration;
},getAxis:function(){return this._native.swipe.axis;
},getDirection:function(){return this._native.swipe.direction;
},getVelocity:function(){return this._native.swipe.velocity;
},getDistance:function(){return this._native.swipe.distance;
}}});
})();
(function(){var h="left",g="right",f="middle",e="none",d="engine.name",c="click",b="contextmenu",a="qx.event.type.Mouse";
qx.Class.define(a,{extend:qx.event.type.Dom,members:{_cloneNativeEvent:function(i,j){var j=qx.event.type.Dom.prototype._cloneNativeEvent.call(this,i,j);
j.button=i.button;
j.clientX=i.clientX;
j.clientY=i.clientY;
j.pageX=i.pageX;
j.pageY=i.pageY;
j.screenX=i.screenX;
j.screenY=i.screenY;
j.wheelDelta=i.wheelDelta;
j.detail=i.detail;
j.srcElement=i.srcElement;
j.target=i.target;
return j;
},__gO:{0:h,2:g,1:f},__gP:{1:h,2:g,4:f},stop:function(){this.stopPropagation();
},getButton:function(){switch(this._type){case b:return g;
case c:if(this.__gQ){return this.__gQ();
}default:if(this._native.target!==undefined){return this.__gO[this._native.button]||e;
}else{return this.__gP[this._native.button]||e;
}}},__gQ:qx.core.Environment.select(d,{"mshtml":function(){return h;
},"default":null}),isLeftPressed:function(){return this.getButton()===h;
},isMiddlePressed:function(){return this.getButton()===f;
},isRightPressed:function(){return this.getButton()===g;
},getRelatedTarget:function(){return this._relatedTarget;
},getViewportLeft:function(){return this._native.clientX;
},getViewportTop:function(){return this._native.clientY;
},getDocumentLeft:function(){if(this._native.pageX!==undefined){return this._native.pageX;
}else{var k=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(k);
}},getDocumentTop:function(){if(this._native.pageY!==undefined){return this._native.pageY;
}else{var l=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(l);
}},getScreenLeft:function(){return this._native.screenX;
},getScreenTop:function(){return this._native.screenY;
}}});
})();
(function(){var i="engine.version",h="os.name",g="osx",f="win",e="engine.name",d="chrome",c="qx.dynamicmousewheel",b="qx.event.type.MouseWheel",a="browser.name";
qx.Class.define(b,{extend:qx.event.type.Mouse,statics:{MAXSCROLL:null,MINSCROLL:null,FACTOR:1},members:{stop:function(){this.stopPropagation();
this.preventDefault();
},__gR:function(j){var k=Math.abs(j);
if(qx.event.type.MouseWheel.MINSCROLL==null||qx.event.type.MouseWheel.MINSCROLL>k){qx.event.type.MouseWheel.MINSCROLL=k;
this.__gS();
}if(qx.event.type.MouseWheel.MAXSCROLL==null||qx.event.type.MouseWheel.MAXSCROLL<k){qx.event.type.MouseWheel.MAXSCROLL=k;
this.__gS();
}if(qx.event.type.MouseWheel.MAXSCROLL===k&&qx.event.type.MouseWheel.MINSCROLL===k){return 2*(j/k);
}var l=qx.event.type.MouseWheel.MAXSCROLL-qx.event.type.MouseWheel.MINSCROLL;
var m=(j/l)*Math.log(l)*qx.event.type.MouseWheel.FACTOR;
return m<0?Math.min(m,-1):Math.max(m,1);
},__gS:function(){var n=qx.event.type.MouseWheel.MAXSCROLL||0;
var q=qx.event.type.MouseWheel.MINSCROLL||n;

if(n<=q){return;
}var o=n-q;
var p=(n/o)*Math.log(o);

if(p==0){p=1;
}qx.event.type.MouseWheel.FACTOR=6/p;
},getWheelDelta:function(){if(qx.core.Environment.get(c)){if(this._native.detail){return this.__gR(this._native.detail);
}return this.__gR(-this._native.wheelDelta);
}else{var r=qx.core.Environment.select(e,{"default":function(){return -(this._native.wheelDelta/40);
},"gecko":function(){return this._native.detail;
},"webkit":function(){if(qx.core.Environment.get(a)==d){if(qx.core.Environment.get(h)==g){return -(this._native.wheelDelta/60);
}else{return -(this._native.wheelDelta/120);
}}else{if(qx.core.Environment.get(h)==f){var s=120;
if(parseFloat(qx.core.Environment.get(i))==533.16){s=1200;
}}else{s=40;
if(parseFloat(qx.core.Environment.get(i))==533.16||parseFloat(qx.core.Environment.get(i))==533.17||parseFloat(qx.core.Environment.get(i))==533.18){s=1200;
}}return -(this._native.wheelDelta/s);
}}});
return r.call(this);
}}}});
})();
(function(){var f="engine.name",e="qx.dom.Hierarchy",d="previousSibling",c="*",b="nextSibling",a="parentNode";
qx.Class.define(e,{statics:{getNodeIndex:function(g){var h=0;

while(g&&(g=g.previousSibling)){h++;
}return h;
},getElementIndex:function(i){var j=0;
var k=qx.dom.Node.ELEMENT;

while(i&&(i=i.previousSibling)){if(i.nodeType==k){j++;
}}return j;
},getNextElementSibling:function(l){while(l&&(l=l.nextSibling)&&!qx.dom.Node.isElement(l)){continue;
}return l||null;
},getPreviousElementSibling:function(m){while(m&&(m=m.previousSibling)&&!qx.dom.Node.isElement(m)){continue;
}return m||null;
},contains:qx.core.Environment.select(f,{"webkit|mshtml|opera":function(n,o){if(qx.dom.Node.isDocument(n)){var p=qx.dom.Node.getDocument(o);
return n&&p==n;
}else if(qx.dom.Node.isDocument(o)){return false;
}else{return n.contains(o);
}},"gecko":function(q,r){return !!(q.compareDocumentPosition(r)&16);
},"default":function(s,t){while(t){if(s==t){return true;
}t=t.parentNode;
}return false;
}}),isRendered:qx.core.Environment.select(f,{"mshtml":function(u){if(!u.parentNode||!u.offsetParent){return false;
}var v=u.ownerDocument||u.document;
return v.body.contains(u);
},"gecko":function(w){var x=w.ownerDocument||w.document;
return !!(x.compareDocumentPosition(w)&16);
},"default":function(y){if(!y.parentNode||!y.offsetParent){return false;
}var z=y.ownerDocument||y.document;
return z.body.contains(y);
}}),isDescendantOf:function(A,B){return this.contains(B,A);
},getCommonParent:qx.core.Environment.select(f,{"mshtml|opera":function(C,D){if(C===D){return C;
}
while(C&&qx.dom.Node.isElement(C)){if(C.contains(D)){return C;
}C=C.parentNode;
}return null;
},"default":function(E,F){if(E===F){return E;
}var G={};
var J=qx.core.ObjectRegistry;
var I,H;

while(E||F){if(E){I=J.toHashCode(E);

if(G[I]){return G[I];
}G[I]=E;
E=E.parentNode;
}
if(F){H=J.toHashCode(F);

if(G[H]){return G[H];
}G[H]=F;
F=F.parentNode;
}}return null;
}}),getAncestors:function(K){return this._recursivelyCollect(K,a);
},getChildElements:function(L){L=L.firstChild;

if(!L){return [];
}var M=this.getNextSiblings(L);

if(L.nodeType===1){M.unshift(L);
}return M;
},getDescendants:function(N){return qx.lang.Array.fromCollection(N.getElementsByTagName(c));
},getFirstDescendant:function(O){O=O.firstChild;

while(O&&O.nodeType!=1){O=O.nextSibling;
}return O;
},getLastDescendant:function(P){P=P.lastChild;

while(P&&P.nodeType!=1){P=P.previousSibling;
}return P;
},getPreviousSiblings:function(Q){return this._recursivelyCollect(Q,d);
},getNextSiblings:function(R){return this._recursivelyCollect(R,b);
},_recursivelyCollect:function(S,T){var U=[];

while(S=S[T]){if(S.nodeType==1){U.push(S);
}}return U;
},getSiblings:function(V){return this.getPreviousSiblings(V).reverse().concat(this.getNextSiblings(V));
},isEmpty:function(W){W=W.firstChild;

while(W){if(W.nodeType===qx.dom.Node.ELEMENT||W.nodeType===qx.dom.Node.TEXT){return false;
}W=W.nextSibling;
}return true;
},cleanWhitespace:function(X){var Y=X.firstChild;

while(Y){var ba=Y.nextSibling;

if(Y.nodeType==3&&!/\S/.test(Y.nodeValue)){X.removeChild(Y);
}Y=ba;
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
this._keyCode=b.keyCode;
this._identifier=d;
return this;
},clone:function(e){var f=qx.event.type.Dom.prototype.clone.call(this,e);
f._keyCode=this._keyCode;
f._identifier=this._identifier;
return f;
},getKeyIdentifier:function(){return this._identifier;
},getKeyCode:function(){return this._keyCode;
},isPrintable:function(){return qx.event.handler.Keyboard.isPrintableKeyIdentifier(this._identifier);
}}});
})();
(function(){var j="engine.name",i="mousedown",h="mouseup",g="blur",f="focus",e="on",d="selectstart",c="DOMFocusOut",b="focusin",a="focusout",z="DOMFocusIn",y="draggesture",x="qx.event.handler.Focus",w="_applyFocus",v="deactivate",u="textarea",t="_applyActive",s='character',r="input",q="qxSelectable",o="tabIndex",p="off",m="activate",n="mshtml",k="qxKeepFocus",l="qxKeepActive";
qx.Class.define(x,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(A){qx.core.Object.call(this);
this._manager=A;
this._window=A.getWindow();
this._document=this._window.document;
this._root=this._document.documentElement;
this._body=this._document.body;
this._initObserver();
},properties:{active:{apply:t,nullable:true},focus:{apply:w,nullable:true}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{focus:1,blur:1,focusin:1,focusout:1,activate:1,deactivate:1},IGNORE_CAN_HANDLE:true,FOCUSABLE_ELEMENTS:qx.core.Environment.select("engine.name",{"mshtml|gecko":{a:1,body:1,button:1,frame:1,iframe:1,img:1,input:1,object:1,select:1,textarea:1},"opera|webkit":{button:1,input:1,select:1,textarea:1}})},members:{__gT:null,__gU:null,__gV:null,__gW:null,__gX:null,__gY:null,__ha:null,__hb:null,__hc:null,__hd:null,canHandleEvent:function(B,C){},registerEvent:function(D,E,F){},unregisterEvent:function(G,H,I){},focus:function(J){if((qx.core.Environment.get(j)==n)){window.setTimeout(function(){try{J.focus();
var K=qx.bom.Selection.get(J);

if(K.length==0){var L=J.createTextRange();
L.moveStart(s,J.value.length);
L.collapse();
L.select();
}}catch(M){}},0);
}else{try{J.focus();
}catch(N){}}this.setFocus(J);
this.setActive(J);
},activate:function(O){this.setActive(O);
},blur:function(P){try{P.blur();
}catch(Q){}
if(this.getActive()===P){this.resetActive();
}
if(this.getFocus()===P){this.resetFocus();
}},deactivate:function(R){if(this.getActive()===R){this.resetActive();
}},tryActivate:function(S){var T=this.__hs(S);

if(T){this.setActive(T);
}},__he:function(U,V,W,X){var ba=qx.event.Registration;
var Y=ba.createEvent(W,qx.event.type.Focus,[U,V,X]);
ba.dispatchEvent(U,Y);
},_windowFocused:true,__hf:function(){if(this._windowFocused){this._windowFocused=false;
this.__he(this._window,null,g,false);
}},__hg:function(){if(!this._windowFocused){this._windowFocused=true;
this.__he(this._window,null,f,false);
}},_initObserver:qx.core.Environment.select(j,{"gecko":function(){this.__gT=qx.lang.Function.listener(this.__hm,this);
this.__gU=qx.lang.Function.listener(this.__hn,this);
this.__gV=qx.lang.Function.listener(this.__hl,this);
this.__gW=qx.lang.Function.listener(this.__hk,this);
this.__gX=qx.lang.Function.listener(this.__hh,this);
qx.bom.Event.addNativeListener(this._document,i,this.__gT,true);
qx.bom.Event.addNativeListener(this._document,h,this.__gU,true);
qx.bom.Event.addNativeListener(this._window,f,this.__gV,true);
qx.bom.Event.addNativeListener(this._window,g,this.__gW,true);
qx.bom.Event.addNativeListener(this._window,y,this.__gX,true);
},"mshtml":function(){this.__gT=qx.lang.Function.listener(this.__hm,this);
this.__gU=qx.lang.Function.listener(this.__hn,this);
this.__ha=qx.lang.Function.listener(this.__hi,this);
this.__hb=qx.lang.Function.listener(this.__hj,this);
this.__gY=qx.lang.Function.listener(this.__hp,this);
qx.bom.Event.addNativeListener(this._document,i,this.__gT);
qx.bom.Event.addNativeListener(this._document,h,this.__gU);
qx.bom.Event.addNativeListener(this._document,b,this.__ha);
qx.bom.Event.addNativeListener(this._document,a,this.__hb);
qx.bom.Event.addNativeListener(this._document,d,this.__gY);
},"webkit":function(){this.__gT=qx.lang.Function.listener(this.__hm,this);
this.__gU=qx.lang.Function.listener(this.__hn,this);
this.__hb=qx.lang.Function.listener(this.__hj,this);
this.__gV=qx.lang.Function.listener(this.__hl,this);
this.__gW=qx.lang.Function.listener(this.__hk,this);
this.__gY=qx.lang.Function.listener(this.__hp,this);
qx.bom.Event.addNativeListener(this._document,i,this.__gT,true);
qx.bom.Event.addNativeListener(this._document,h,this.__gU,true);
qx.bom.Event.addNativeListener(this._document,d,this.__gY,false);
qx.bom.Event.addNativeListener(this._window,c,this.__hb,true);
qx.bom.Event.addNativeListener(this._window,f,this.__gV,true);
qx.bom.Event.addNativeListener(this._window,g,this.__gW,true);
},"opera":function(){this.__gT=qx.lang.Function.listener(this.__hm,this);
this.__gU=qx.lang.Function.listener(this.__hn,this);
this.__ha=qx.lang.Function.listener(this.__hi,this);
this.__hb=qx.lang.Function.listener(this.__hj,this);
qx.bom.Event.addNativeListener(this._document,i,this.__gT,true);
qx.bom.Event.addNativeListener(this._document,h,this.__gU,true);
qx.bom.Event.addNativeListener(this._window,z,this.__ha,true);
qx.bom.Event.addNativeListener(this._window,c,this.__hb,true);
}}),_stopObserver:qx.core.Environment.select(j,{"gecko":function(){qx.bom.Event.removeNativeListener(this._document,i,this.__gT,true);
qx.bom.Event.removeNativeListener(this._document,h,this.__gU,true);
qx.bom.Event.removeNativeListener(this._window,f,this.__gV,true);
qx.bom.Event.removeNativeListener(this._window,g,this.__gW,true);
qx.bom.Event.removeNativeListener(this._window,y,this.__gX,true);
},"mshtml":function(){qx.bom.Event.removeNativeListener(this._document,i,this.__gT);
qx.bom.Event.removeNativeListener(this._document,h,this.__gU);
qx.bom.Event.removeNativeListener(this._document,b,this.__ha);
qx.bom.Event.removeNativeListener(this._document,a,this.__hb);
qx.bom.Event.removeNativeListener(this._document,d,this.__gY);
},"webkit":function(){qx.bom.Event.removeNativeListener(this._document,i,this.__gT,true);
qx.bom.Event.removeNativeListener(this._document,h,this.__gU,true);
qx.bom.Event.removeNativeListener(this._document,d,this.__gY,false);
qx.bom.Event.removeNativeListener(this._window,c,this.__hb,true);
qx.bom.Event.removeNativeListener(this._window,f,this.__gV,true);
qx.bom.Event.removeNativeListener(this._window,g,this.__gW,true);
},"opera":function(){qx.bom.Event.removeNativeListener(this._document,i,this.__gT,true);
qx.bom.Event.removeNativeListener(this._document,h,this.__gU,true);
qx.bom.Event.removeNativeListener(this._window,z,this.__ha,true);
qx.bom.Event.removeNativeListener(this._window,c,this.__hb,true);
}}),__hh:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"gecko":function(bb){var bc=qx.bom.Event.getTarget(bb);

if(!this.__ht(bc)){qx.bom.Event.preventDefault(bb);
}},"default":null})),__hi:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml":function(bd){this.__hg();
var bf=qx.bom.Event.getTarget(bd);
var be=this.__hr(bf);

if(be){this.setFocus(be);
}this.tryActivate(bf);
},"opera":function(bg){var bh=qx.bom.Event.getTarget(bg);

if(bh==this._document||bh==this._window){this.__hg();

if(this.__hc){this.setFocus(this.__hc);
delete this.__hc;
}
if(this.__hd){this.setActive(this.__hd);
delete this.__hd;
}}else{this.setFocus(bh);
this.tryActivate(bh);
if(!this.__ht(bh)){bh.selectionStart=0;
bh.selectionEnd=0;
}}},"default":null})),__hj:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml":function(bi){var bj=qx.bom.Event.getRelatedTarget(bi);
if(bj==null){this.__hf();
this.resetFocus();
this.resetActive();
}},"webkit":function(bk){var bl=qx.bom.Event.getTarget(bk);

if(bl===this.getFocus()){this.resetFocus();
}
if(bl===this.getActive()){this.resetActive();
}},"opera":function(bm){var bn=qx.bom.Event.getTarget(bm);

if(bn==this._document){this.__hf();
this.__hc=this.getFocus();
this.__hd=this.getActive();
this.resetFocus();
this.resetActive();
}else{if(bn===this.getFocus()){this.resetFocus();
}
if(bn===this.getActive()){this.resetActive();
}}},"default":null})),__hk:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"gecko":function(bo){var bp=qx.bom.Event.getTarget(bo);

if(bp===this._window||bp===this._document){this.__hf();
this.resetActive();
this.resetFocus();
}},"webkit":function(bq){var br=qx.bom.Event.getTarget(bq);

if(br===this._window||br===this._document){this.__hf();
this.__hc=this.getFocus();
this.__hd=this.getActive();
this.resetActive();
this.resetFocus();
}},"default":null})),__hl:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"gecko":function(bs){var bt=qx.bom.Event.getTarget(bs);

if(bt===this._window||bt===this._document){this.__hg();
bt=this._body;
}this.setFocus(bt);
this.tryActivate(bt);
},"webkit":function(bu){var bv=qx.bom.Event.getTarget(bu);

if(bv===this._window||bv===this._document){this.__hg();

if(this.__hc){this.setFocus(this.__hc);
delete this.__hc;
}
if(this.__hd){this.setActive(this.__hd);
delete this.__hd;
}}else{this.setFocus(bv);
this.tryActivate(bv);
}},"default":null})),__hm:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"gecko":function(bw){var by=qx.bom.Event.getTarget(bw);
var bx=this.__hr(by);

if(!bx){qx.bom.Event.preventDefault(bw);
}else if(bx===this._body){this.setFocus(bx);
}},"mshtml":function(bz){var bB=qx.bom.Event.getTarget(bz);
var bA=this.__hr(bB);

if(bA){if(!this.__ht(bB)){bB.unselectable=e;
try{document.selection.empty();
}catch(bC){}try{bA.focus();
}catch(bD){}}}else{qx.bom.Event.preventDefault(bz);
if(!this.__ht(bB)){bB.unselectable=e;
}}},"webkit":function(bE){var bG=qx.bom.Event.getTarget(bE);
var bF=this.__hr(bG);

if(bF){this.setFocus(bF);
}else{qx.bom.Event.preventDefault(bE);
}},"opera":function(bH){var bK=qx.bom.Event.getTarget(bH);
var bI=this.__hr(bK);

if(!this.__ht(bK)){qx.bom.Event.preventDefault(bH);
if(bI){var bJ=this.getFocus();

if(bJ&&bJ.selectionEnd){bJ.selectionStart=0;
bJ.selectionEnd=0;
bJ.blur();
}if(bI){this.setFocus(bI);
}}}else if(bI){this.setFocus(bI);
}},"default":null})),__hn:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml":function(bL){var bM=qx.bom.Event.getTarget(bL);

if(bM.unselectable){bM.unselectable=p;
}this.tryActivate(this.__ho(bM));
},"gecko":function(bN){var bO=qx.bom.Event.getTarget(bN);

while(bO&&bO.offsetWidth===undefined){bO=bO.parentNode;
}
if(bO){this.tryActivate(bO);
}},"webkit|opera":function(bP){var bQ=qx.bom.Event.getTarget(bP);
this.tryActivate(this.__ho(bQ));
},"default":null})),__ho:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml|webkit":function(bR){var bS=this.getFocus();

if(bS&&bR!=bS&&(bS.nodeName.toLowerCase()===r||bS.nodeName.toLowerCase()===u)){bR=bS;
}return bR;
},"default":function(bT){return bT;
}})),__hp:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml|webkit":function(bU){var bV=qx.bom.Event.getTarget(bU);

if(!this.__ht(bV)){qx.bom.Event.preventDefault(bU);
}},"default":null})),__hq:function(bW){var bX=qx.bom.element.Attribute.get(bW,o);

if(bX>=1){return true;
}var bY=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(bX>=0&&bY[bW.tagName]){return true;
}return false;
},__hr:function(ca){while(ca&&ca.nodeType===1){if(ca.getAttribute(k)==e){return null;
}
if(this.__hq(ca)){return ca;
}ca=ca.parentNode;
}return this._body;
},__hs:function(cb){var cc=cb;

while(cb&&cb.nodeType===1){if(cb.getAttribute(l)==e){return null;
}cb=cb.parentNode;
}return cc;
},__ht:function(cd){while(cd&&cd.nodeType===1){var ce=cd.getAttribute(q);

if(ce!=null){return ce===e;
}cd=cd.parentNode;
}return true;
},_applyActive:function(cf,cg){if(cg){this.__he(cg,cf,v,true);
}
if(cf){this.__he(cf,cg,m,true);
}},_applyFocus:function(ch,ci){if(ci){this.__he(ci,ch,a,true);
}
if(ch){this.__he(ch,ci,b,true);
}if(ci){this.__he(ci,ch,g,false);
}
if(ch){this.__he(ch,ci,f,false);
}}},destruct:function(){this._stopObserver();
this._manager=this._window=this._document=this._root=this._body=this.__hu=null;
},defer:function(cj){qx.event.Registration.addHandler(cj);
var ck=cj.FOCUSABLE_ELEMENTS;

for(var cl in ck){ck[cl.toUpperCase()]=1;
}}});
})();
(function(){var k="engine.name",j="character",i="EndToEnd",h="input",g="StartToStart",f="textarea",e='character',d="qx.bom.Selection",c="button",b="#text",a="body";
qx.Class.define(d,{statics:{getSelectionObject:qx.core.Environment.select(k,{"mshtml":function(l){return l.selection;
},"default":function(m){return qx.dom.Node.getWindow(m).getSelection();
}}),get:qx.core.Environment.select(k,{"mshtml":function(n){var o=qx.bom.Range.get(qx.dom.Node.getDocument(n));
return o.text;
},"default":function(p){if(this.__hv(p)){return p.value.substring(p.selectionStart,p.selectionEnd);
}else{return this.getSelectionObject(qx.dom.Node.getDocument(p)).toString();
}}}),getLength:qx.core.Environment.select(k,{"mshtml":function(q){var s=this.get(q);
var r=qx.util.StringSplit.split(s,/\r\n/);
return s.length-(r.length-1);
},"opera":function(t){var y,w,u;

if(this.__hv(t)){var x=t.selectionStart;
var v=t.selectionEnd;
y=t.value.substring(x,v);
w=v-x;
}else{y=qx.bom.Selection.get(t);
w=y.length;
}u=qx.util.StringSplit.split(y,/\r\n/);
return w-(u.length-1);
},"default":function(z){if(this.__hv(z)){return z.selectionEnd-z.selectionStart;
}else{return this.get(z).length;
}}}),getStart:qx.core.Environment.select(k,{"mshtml":function(A){if(this.__hv(A)){var F=qx.bom.Range.get();
if(!A.contains(F.parentElement())){return -1;
}var G=qx.bom.Range.get(A);
var E=A.value.length;
G.moveToBookmark(F.getBookmark());
G.moveEnd(e,E);
return E-G.text.length;
}else{var G=qx.bom.Range.get(A);
var C=G.parentElement();
var H=qx.bom.Range.get();

try{H.moveToElementText(C);
}catch(J){return 0;
}var B=qx.bom.Range.get(qx.dom.Node.getBodyElement(A));
B.setEndPoint(g,G);
B.setEndPoint(i,H);
if(H.compareEndPoints(g,B)==0){return 0;
}var D;
var I=0;

while(true){D=B.moveStart(j,-1);
if(H.compareEndPoints(g,B)==0){break;
}if(D==0){break;
}else{I++;
}}return ++I;
}},"gecko|webkit":function(K){if(this.__hv(K)){return K.selectionStart;
}else{var M=qx.dom.Node.getDocument(K);
var L=this.getSelectionObject(M);
if(L.anchorOffset<L.focusOffset){return L.anchorOffset;
}else{return L.focusOffset;
}}},"default":function(N){if(this.__hv(N)){return N.selectionStart;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(N)).anchorOffset;
}}}),getEnd:qx.core.Environment.select(k,{"mshtml":function(O){if(this.__hv(O)){var T=qx.bom.Range.get();
if(!O.contains(T.parentElement())){return -1;
}var U=qx.bom.Range.get(O);
var S=O.value.length;
U.moveToBookmark(T.getBookmark());
U.moveStart(e,-S);
return U.text.length;
}else{var U=qx.bom.Range.get(O);
var Q=U.parentElement();
var V=qx.bom.Range.get();

try{V.moveToElementText(Q);
}catch(X){return 0;
}var S=V.text.length;
var P=qx.bom.Range.get(qx.dom.Node.getBodyElement(O));
P.setEndPoint(i,U);
P.setEndPoint(g,V);
if(V.compareEndPoints(i,P)==0){return S-1;
}var R;
var W=0;

while(true){R=P.moveEnd(j,1);
if(V.compareEndPoints(i,P)==0){break;
}if(R==0){break;
}else{W++;
}}return S-(++W);
}},"gecko|webkit":function(Y){if(this.__hv(Y)){return Y.selectionEnd;
}else{var bb=qx.dom.Node.getDocument(Y);
var ba=this.getSelectionObject(bb);
if(ba.focusOffset>ba.anchorOffset){return ba.focusOffset;
}else{return ba.anchorOffset;
}}},"default":function(bc){if(this.__hv(bc)){return bc.selectionEnd;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(bc)).focusOffset;
}}}),__hv:function(bd){return qx.dom.Node.isElement(bd)&&(bd.nodeName.toLowerCase()==h||bd.nodeName.toLowerCase()==f);
},set:qx.core.Environment.select(k,{"mshtml":function(be,bf,bg){var bh;
if(qx.dom.Node.isDocument(be)){be=be.body;
}
if(qx.dom.Node.isElement(be)||qx.dom.Node.isText(be)){switch(be.nodeName.toLowerCase()){case h:case f:case c:if(bg===undefined){bg=be.value.length;
}
if(bf>=0&&bf<=be.value.length&&bg>=0&&bg<=be.value.length){bh=qx.bom.Range.get(be);
bh.collapse(true);
bh.moveStart(j,bf);
bh.moveEnd(j,bg-bf);
bh.select();
return true;
}break;
case b:if(bg===undefined){bg=be.nodeValue.length;
}
if(bf>=0&&bf<=be.nodeValue.length&&bg>=0&&bg<=be.nodeValue.length){bh=qx.bom.Range.get(qx.dom.Node.getBodyElement(be));
bh.moveToElementText(be.parentNode);
bh.collapse(true);
bh.moveStart(j,bf);
bh.moveEnd(j,bg-bf);
bh.select();
return true;
}break;
default:if(bg===undefined){bg=be.childNodes.length-1;
}if(be.childNodes[bf]&&be.childNodes[bg]){bh=qx.bom.Range.get(qx.dom.Node.getBodyElement(be));
bh.moveToElementText(be.childNodes[bf]);
bh.collapse(true);
var bi=qx.bom.Range.get(qx.dom.Node.getBodyElement(be));
bi.moveToElementText(be.childNodes[bg]);
bh.setEndPoint(i,bi);
bh.select();
return true;
}}}return false;
},"default":function(bj,bk,bl){var bp=bj.nodeName.toLowerCase();

if(qx.dom.Node.isElement(bj)&&(bp==h||bp==f)){if(bl===undefined){bl=bj.value.length;
}if(bk>=0&&bk<=bj.value.length&&bl>=0&&bl<=bj.value.length){bj.focus();
bj.select();
bj.setSelectionRange(bk,bl);
return true;
}}else{var bn=false;
var bo=qx.dom.Node.getWindow(bj).getSelection();
var bm=qx.bom.Range.get(bj);
if(qx.dom.Node.isText(bj)){if(bl===undefined){bl=bj.length;
}
if(bk>=0&&bk<bj.length&&bl>=0&&bl<=bj.length){bn=true;
}}else if(qx.dom.Node.isElement(bj)){if(bl===undefined){bl=bj.childNodes.length-1;
}
if(bk>=0&&bj.childNodes[bk]&&bl>=0&&bj.childNodes[bl]){bn=true;
}}else if(qx.dom.Node.isDocument(bj)){bj=bj.body;

if(bl===undefined){bl=bj.childNodes.length-1;
}
if(bk>=0&&bj.childNodes[bk]&&bl>=0&&bj.childNodes[bl]){bn=true;
}}
if(bn){if(!bo.isCollapsed){bo.collapseToStart();
}bm.setStart(bj,bk);
if(qx.dom.Node.isText(bj)){bm.setEnd(bj,bl);
}else{bm.setEndAfter(bj.childNodes[bl]);
}if(bo.rangeCount>0){bo.removeAllRanges();
}bo.addRange(bm);
return true;
}}return false;
}}),setAll:function(bq){return qx.bom.Selection.set(bq,0);
},clear:qx.core.Environment.select(k,{"mshtml":function(br){var bs=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(br));
var bt=qx.bom.Range.get(br);
var parent=bt.parentElement();
var bu=qx.bom.Range.get(qx.dom.Node.getDocument(br));
if(parent==bu.parentElement()&&parent==br){bs.empty();
}},"default":function(bv){var bx=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(bv));
var bz=bv.nodeName.toLowerCase();
if(qx.dom.Node.isElement(bv)&&(bz==h||bz==f)){bv.setSelectionRange(0,0);
qx.bom.Element.blur(bv);
}else if(qx.dom.Node.isDocument(bv)||bz==a){bx.collapse(bv.body?bv.body:bv,0);
}else{var by=qx.bom.Range.get(bv);

if(!by.collapsed){var bA;
var bw=by.commonAncestorContainer;
if(qx.dom.Node.isElement(bv)&&qx.dom.Node.isText(bw)){bA=bw.parentNode;
}else{bA=bw;
}
if(bA==bv){bx.collapse(bv,0);
}}}}})}});
})();
(function(){var l="button",k="qx.bom.Range",j="text",i="engine.name",h="password",g="file",f="submit",e="reset",d="textarea",c="input",a="hidden",b="body";
qx.Class.define(k,{statics:{get:qx.core.Environment.select(i,{"mshtml":function(m){if(qx.dom.Node.isElement(m)){switch(m.nodeName.toLowerCase()){case c:switch(m.type){case j:case h:case a:case l:case e:case g:case f:return m.createTextRange();
break;
default:return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(m)).createRange();
}break;
case d:case b:case l:return m.createTextRange();
break;
default:return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(m)).createRange();
}}else{if(m==null){m=window;
}return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(m)).createRange();
}},"default":function(n){var o=qx.dom.Node.getDocument(n);
var p=qx.bom.Selection.getSelectionObject(o);

if(p.rangeCount>0){return p.getRangeAt(0);
}else{return o.createRange();
}}})}});
})();
(function(){var j="",h="m",g="g",f="^",e="qx.util.StringSplit",d="i",c="$(?!\\s)",b="[object RegExp]",a="y";
qx.Class.define(e,{statics:{split:function(k,l,m){if(Object.prototype.toString.call(l)!==b){return String.prototype.split.call(k,l,m);
}var t=[],n=0,r=(l.ignoreCase?d:j)+(l.multiline?h:j)+(l.sticky?a:j),l=RegExp(l.source,r+g),q,u,o,p,s=/()??/.exec(j)[1]===undefined;
k=k+j;

if(!s){q=RegExp(f+l.source+c,r);
}if(m===undefined||+m<0){m=Infinity;
}else{m=Math.floor(+m);

if(!m){return [];
}}
while(u=l.exec(k)){o=u.index+u[0].length;

if(o>n){t.push(k.slice(n,u.index));
if(!s&&u.length>1){u[0].replace(q,function(){for(var i=1;i<arguments.length-2;i++){if(arguments[i]===undefined){u[i]=undefined;
}}});
}
if(u.length>1&&u.index<k.length){Array.prototype.push.apply(t,u.slice(1));
}p=u[0].length;
n=o;

if(t.length>=m){break;
}}
if(l.lastIndex===u.index){l.lastIndex++;
}}
if(n===k.length){if(p||!l.test(j)){t.push(j);
}}else{t.push(k.slice(n));
}return t.length>m?t.slice(0,m):t;
}}});
})();
(function(){var a="qx.event.type.Focus";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(b,c,d){qx.event.type.Event.prototype.init.call(this,d,false);
this._target=b;
this._relatedTarget=c;
return this;
}}});
})();
(function(){var j="",i="undefined",h="engine.name",g="readOnly",f="accessKey",e="qx.bom.element.Attribute",d="rowSpan",c="vAlign",b="className",a="textContent",y="'",x="htmlFor",w="longDesc",v="cellSpacing",u="frameBorder",t="='",s="useMap",r="innerText",q="innerHTML",p="tabIndex",n="dateTime",o="maxLength",l="mshtml",m="cellPadding",k="colSpan";
qx.Class.define(e,{statics:{__hw:{names:{"class":b,"for":x,html:q,text:(qx.core.Environment.get(h)==l)?r:a,colspan:k,rowspan:d,valign:c,datetime:n,accesskey:f,tabindex:p,maxlength:o,readonly:g,longdesc:w,cellpadding:m,cellspacing:v,frameborder:u,usemap:s},runtime:{"html":1,"text":1},bools:{compact:1,nowrap:1,ismap:1,declare:1,noshade:1,checked:1,disabled:1,readOnly:1,multiple:1,selected:1,noresize:1,defer:1,allowTransparency:1},property:{$$html:1,$$widget:1,disabled:1,checked:1,readOnly:1,multiple:1,selected:1,value:1,maxLength:1,className:1,innerHTML:1,innerText:1,textContent:1,htmlFor:1,tabIndex:1},qxProperties:{$$widget:1,$$html:1},propertyDefault:{disabled:false,checked:false,readOnly:false,multiple:false,selected:false,value:j,className:j,innerHTML:j,innerText:j,textContent:j,htmlFor:j,tabIndex:0,maxLength:qx.core.Environment.select(h,{"mshtml":2147483647,"webkit":524288,"default":-1})},removeableProperties:{disabled:1,multiple:1,maxLength:1},original:{href:1,src:1,type:1}},compile:function(z){var A=[];
var C=this.__hw.runtime;

for(var B in z){if(!C[B]){A.push(B,t,z[B],y);
}}return A.join(j);
},get:qx.core.Environment.select(h,{"mshtml":function(D,name){var F=this.__hw;
var E;
name=F.names[name]||name;
if(F.original[name]){E=D.getAttribute(name,2);
}else if(F.property[name]){E=D[name];

if(typeof F.propertyDefault[name]!==i&&E==F.propertyDefault[name]){if(typeof F.bools[name]===i){return null;
}else{return E;
}}}else{E=D.getAttribute(name);
}if(F.bools[name]){return !!E;
}return E;
},"default":function(G,name){var I=this.__hw;
var H;
name=I.names[name]||name;
if(I.property[name]){H=G[name];

if(typeof I.propertyDefault[name]!==i&&H==I.propertyDefault[name]){if(typeof I.bools[name]===i){return null;
}else{return H;
}}}else{H=G.getAttribute(name);
}if(I.bools[name]){return !!H;
}return H;
}}),set:function(J,name,K){if(typeof K===i){return;
}var L=this.__hw;
name=L.names[name]||name;
if(L.bools[name]){K=!!K;
}if(L.property[name]&&(!(J[name]===undefined)||L.qxProperties[name])){if(K==null){if(L.removeableProperties[name]){J.removeAttribute(name);
return;
}else if(typeof L.propertyDefault[name]!==i){K=L.propertyDefault[name];
}}J[name]=K;
}else{if(K===true){J.setAttribute(name,name);
}else if(K===false||K===null){J.removeAttribute(name);
}else{J.setAttribute(name,K);
}}},reset:function(M,name){this.set(M,name,null);
}}});
})();
(function(){var a="qx.event.type.Drag";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(b,c){qx.event.type.Event.prototype.init.call(this,true,b);

if(c){this._native=c.getNativeEvent()||null;
this._originalTarget=c.getTarget()||null;
}else{this._native=null;
this._originalTarget=null;
}return this;
},clone:function(d){var e=qx.event.type.Event.prototype.clone.call(this,d);
e._native=this._native;
return e;
},getDocumentLeft:function(){if(this._native==null){return 0;
}
if(this._native.pageX!==undefined){return this._native.pageX;
}else{var f=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(f);
}},getDocumentTop:function(){if(this._native==null){return 0;
}
if(this._native.pageY!==undefined){return this._native.pageY;
}else{var g=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(g);
}},getManager:function(){return qx.event.Registration.getManager(this.getTarget()).getHandler(qx.event.handler.DragDrop);
},addType:function(h){this.getManager().addType(h);
},addAction:function(i){this.getManager().addAction(i);
},supportsType:function(j){return this.getManager().supportsType(j);
},supportsAction:function(k){return this.getManager().supportsAction(k);
},addData:function(l,m){this.getManager().addData(l,m);
},getData:function(n){return this.getManager().getData(n);
},getCurrentType:function(){return this.getManager().getCurrentType();
},getCurrentAction:function(){return this.getManager().getCurrentAction();
}}});
})();
(function(){var k="interval",j="qx.event.Timer",i="_applyInterval",h="func is not a function",g="Boolean",f="qx.debug",d="No timeout given",c="Integer",b="qx.event.type.Event",a="_applyEnabled";
qx.Class.define(j,{extend:qx.core.Object,construct:function(l){qx.core.Object.call(this);
this.setEnabled(false);

if(l!=null){this.setInterval(l);
}var self=this;
this.__hx=function(){self._oninterval.call(self);
};
},events:{"interval":b},statics:{once:function(m,n,o){if(qx.core.Environment.get(f)){qx.core.Assert.assertFunction(m,h);
qx.core.Assert.assertNotUndefined(o,d);
}var p=new qx.event.Timer(o);
p.__hy=m;
p.addListener(k,function(e){p.stop();
m.call(n,e);
p.dispose();
n=null;
},n);
p.start();
return p;
}},properties:{enabled:{init:true,check:g,apply:a},interval:{check:c,init:1000,apply:i}},members:{__hz:null,__hx:null,_applyInterval:function(q,r){if(this.getEnabled()){this.restart();
}},_applyEnabled:function(s,t){if(t){window.clearInterval(this.__hz);
this.__hz=null;
}else if(s){this.__hz=window.setInterval(this.__hx,this.getInterval());
}},start:function(){this.setEnabled(true);
},startWith:function(u){this.setInterval(u);
this.start();
},stop:function(){this.setEnabled(false);
},restart:function(){this.stop();
this.start();
},restartWith:function(v){this.stop();
this.startWith(v);
},_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.$$disposed){return;
}
if(this.getEnabled()){this.fireEvent(k);
}})},destruct:function(){if(this.__hz){window.clearInterval(this.__hz);
}this.__hz=this.__hx=null;
}});
})();
(function(){var i="engine.name",h="losecapture",g="mshtml",f="blur",e="focus",d="click",c="qx.event.dispatch.MouseCapture",b="capture",a="scroll";
qx.Class.define(c,{extend:qx.event.dispatch.AbstractBubbling,construct:function(j,k){qx.event.dispatch.AbstractBubbling.call(this,j);
this.__hA=j.getWindow();
this.__hB=k;
j.addListener(this.__hA,f,this.releaseCapture,this);
j.addListener(this.__hA,e,this.releaseCapture,this);
j.addListener(this.__hA,a,this.releaseCapture,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST},members:{__hB:null,__hC:null,__hD:true,__hA:null,_getParent:function(l){return l.parentNode;
},canDispatchEvent:function(m,event,n){return !!(this.__hC&&this.__hE[n]);
},dispatchEvent:function(o,event,p){if(p==d){event.stopPropagation();
this.releaseCapture();
return;
}
if(this.__hD||!qx.dom.Hierarchy.contains(this.__hC,o)){o=this.__hC;
}qx.event.dispatch.AbstractBubbling.prototype.dispatchEvent.call(this,o,event,p);
},__hE:{"mouseup":1,"mousedown":1,"click":1,"dblclick":1,"mousemove":1,"mouseout":1,"mouseover":1},activateCapture:function(q,r){var r=r!==false;

if(this.__hC===q&&this.__hD==r){return;
}
if(this.__hC){this.releaseCapture();
}this.nativeSetCapture(q,r);

if(this.hasNativeCapture){var self=this;
qx.bom.Event.addNativeListener(q,h,function(){qx.bom.Event.removeNativeListener(q,h,arguments.callee);
self.releaseCapture();
});
}this.__hD=r;
this.__hC=q;
this.__hB.fireEvent(q,b,qx.event.type.Event,[true,false]);
},getCaptureElement:function(){return this.__hC;
},releaseCapture:function(){var s=this.__hC;

if(!s){return;
}this.__hC=null;
this.__hB.fireEvent(s,h,qx.event.type.Event,[true,false]);
this.nativeReleaseCapture(s);
},hasNativeCapture:qx.core.Environment.get(i)==g,nativeSetCapture:qx.core.Environment.select(i,{"mshtml":function(t,u){t.setCapture(u!==false);
},"default":qx.lang.Function.empty}),nativeReleaseCapture:qx.core.Environment.select(i,{"mshtml":function(v){v.releaseCapture();
},"default":qx.lang.Function.empty})},destruct:function(){this.__hC=this.__hA=this.__hB=null;
},defer:function(w){qx.event.Registration.addDispatcher(w);
}});
})();
(function(){var c="qx.bom.Selector";
qx.Class.define(c,{statics:{query:null,matches:null}});
(function(){var o=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,v=0,x=Object.prototype.toString,p=false,z=true,t=/\\/g,g=/\W/;
[0,0].sort(function(){z=false;
return 0;
});
var s=function(B,C,D,E){D=D||[];
C=C||document;
var N=C;

if(C.nodeType!==1&&C.nodeType!==9){return [];
}
if(!B||typeof B!=="string"){return D;
}var m,H,F,J,L,I,O,i,P=true,G=s.isXML(C),K=[],M=B;
do{o.exec("");
m=o.exec(M);

if(m){M=m[3];
K.push(m[1]);

if(m[2]){J=m[3];
break;
}}}while(m);

if(K.length>1&&q.exec(B)){if(K.length===2&&k.relative[K[0]]){H=h(K[0]+K[1],C);
}else{H=k.relative[K[0]]?[C]:s(K.shift(),C);

while(K.length){B=K.shift();

if(k.relative[B]){B+=K.shift();
}H=h(B,H);
}}}else{if(!E&&K.length>1&&C.nodeType===9&&!G&&k.match.ID.test(K[0])&&!k.match.ID.test(K[K.length-1])){L=s.find(K.shift(),C,G);
C=L.expr?s.filter(L.expr,L.set)[0]:L.set[0];
}
if(C){L=E?
{expr:K.pop(),set:f(E)}:s.find(K.pop(),K.length===1&&(K[0]==="~"||K[0]==="+")&&C.parentNode?C.parentNode:C,G);
H=L.expr?s.filter(L.expr,L.set):L.set;

if(K.length>0){F=f(H);
}else{P=false;
}
while(K.length){I=K.pop();
O=I;

if(!k.relative[I]){I="";
}else{O=K.pop();
}
if(O==null){O=C;
}k.relative[I](F,O,G);
}}else{F=K=[];
}}
if(!F){F=H;
}
if(!F){s.error(I||B);
}
if(x.call(F)==="[object Array]"){if(!P){D.push.apply(D,F);
}else if(C&&C.nodeType===1){for(i=0;F[i]!=null;i++){if(F[i]&&(F[i]===true||F[i].nodeType===1&&s.contains(C,F[i]))){D.push(H[i]);
}}}else{for(i=0;F[i]!=null;i++){if(F[i]&&F[i].nodeType===1){D.push(H[i]);
}}}}else{f(F,D);
}
if(J){s(J,N,D,E);
s.uniqueSort(D);
}return D;
};
s.uniqueSort=function(Q){if(u){p=z;
Q.sort(u);

if(p){for(var i=1;i<Q.length;i++){if(Q[i]===Q[i-1]){Q.splice(i--,1);
}}}}return Q;
};
s.matches=function(R,S){return s(R,null,null,S);
};
s.matchesSelector=function(T,U){return s(U,null,null,[T]).length>0;
};
s.find=function(V,W,X){var Y;

if(!V){return [];
}
for(var i=0,l=k.order.length;i<l;i++){var bb,ba=k.order[i];

if((bb=k.leftMatch[ba].exec(V))){var bc=bb[1];
bb.splice(1,1);

if(bc.substr(bc.length-1)!=="\\"){bb[1]=(bb[1]||"").replace(t,"");
Y=k.find[ba](bb,W,X);

if(Y!=null){V=V.replace(k.match[ba],"");
break;
}}}}
if(!Y){Y=typeof W.getElementsByTagName!=="undefined"?W.getElementsByTagName("*"):[];
}return {set:Y,expr:V};
};
s.filter=function(bd,be,bf,bg){var bt,bs,bh=bd,bn=[],bi=be,bj=be&&be[0]&&s.isXML(be[0]);

while(bd&&be.length){for(var br in k.filter){if((bt=k.leftMatch[br].exec(bd))!=null&&bt[2]){var bq,bm,bk=k.filter[br],bu=bt[1];
bs=false;
bt.splice(1,1);

if(bu.substr(bu.length-1)==="\\"){continue;
}
if(bi===bn){bn=[];
}
if(k.preFilter[br]){bt=k.preFilter[br](bt,bi,bf,bn,bg,bj);

if(!bt){bs=bq=true;
}else if(bt===true){continue;
}}
if(bt){for(var i=0;(bm=bi[i])!=null;i++){if(bm){bq=bk(bm,bt,i,bi);
var bo=bg^!!bq;

if(bf&&bq!=null){if(bo){bs=true;
}else{bi[i]=false;
}}else if(bo){bn.push(bm);
bs=true;
}}}}
if(bq!==undefined){if(!bf){bi=bn;
}bd=bd.replace(k.match[br],"");

if(!bs){return [];
}break;
}}}if(bd===bh){if(bs==null){s.error(bd);
}else{break;
}}bh=bd;
}return bi;
};
s.error=function(bv){throw "Syntax error, unrecognized expression: "+bv;
};
var k=s.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(bw){return bw.getAttribute("href");
},type:function(bx){return bx.getAttribute("type");
}},relative:{"+":function(by,bz){var bA=typeof bz==="string",bC=bA&&!g.test(bz),bD=bA&&!bC;

if(bC){bz=bz.toLowerCase();
}
for(var i=0,l=by.length,bB;i<l;i++){if((bB=by[i])){while((bB=bB.previousSibling)&&bB.nodeType!==1){}by[i]=bD||bB&&bB.nodeName.toLowerCase()===bz?bB||false:bB===bz;
}}
if(bD){s.filter(bz,by,true);
}},">":function(bE,bF){var bH,bG=typeof bF==="string",i=0,l=bE.length;

if(bG&&!g.test(bF)){bF=bF.toLowerCase();

for(;i<l;i++){bH=bE[i];

if(bH){var parent=bH.parentNode;
bE[i]=parent.nodeName.toLowerCase()===bF?parent:false;
}}}else{for(;i<l;i++){bH=bE[i];

if(bH){bE[i]=bG?bH.parentNode:bH.parentNode===bF;
}}
if(bG){s.filter(bF,bE,true);
}}},"":function(bI,bJ,bK){var bN,bL=v++,bM=y;

if(typeof bJ==="string"&&!g.test(bJ)){bJ=bJ.toLowerCase();
bN=bJ;
bM=A;
}bM("parentNode",bJ,bL,bI,bN,bK);
},"~":function(bO,bP,bQ){var bT,bR=v++,bS=y;

if(typeof bP==="string"&&!g.test(bP)){bP=bP.toLowerCase();
bT=bP;
bS=A;
}bS("previousSibling",bP,bR,bO,bT,bQ);
}},find:{ID:function(bU,bV,bW){if(typeof bV.getElementById!=="undefined"&&!bW){var m=bV.getElementById(bU[1]);
return m&&m.parentNode?[m]:[];
}},NAME:function(bX,bY){if(typeof bY.getElementsByName!=="undefined"){var cb=[],ca=bY.getElementsByName(bX[1]);

for(var i=0,l=ca.length;i<l;i++){if(ca[i].getAttribute("name")===bX[1]){cb.push(ca[i]);
}}return cb.length===0?null:cb;
}},TAG:function(cc,cd){if(typeof cd.getElementsByTagName!=="undefined"){return cd.getElementsByTagName(cc[1]);
}}},preFilter:{CLASS:function(ce,cf,cg,ch,ci,cj){ce=" "+ce[1].replace(t,"")+" ";

if(cj){return ce;
}
for(var i=0,ck;(ck=cf[i])!=null;i++){if(ck){if(ci^(ck.className&&(" "+ck.className+" ").replace(/[\t\n\r]/g," ").indexOf(ce)>=0)){if(!cg){ch.push(ck);
}}else if(cg){cf[i]=false;
}}}return false;
},ID:function(cl){return cl[1].replace(t,"");
},TAG:function(cm,cn){return cm[1].replace(t,"").toLowerCase();
},CHILD:function(co){if(co[1]==="nth"){if(!co[2]){s.error(co[0]);
}co[2]=co[2].replace(/^\+|\s*/g,'');
var cp=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(co[2]==="even"&&"2n"||co[2]==="odd"&&"2n+1"||!/\D/.test(co[2])&&"0n+"+co[2]||co[2]);
co[2]=(cp[1]+(cp[2]||1))-0;
co[3]=cp[3]-0;
}else if(co[2]){s.error(co[0]);
}co[0]=v++;
return co;
},ATTR:function(cq,cr,cs,ct,cu,cv){var name=cq[1]=cq[1].replace(t,"");

if(!cv&&k.attrMap[name]){cq[1]=k.attrMap[name];
}cq[4]=(cq[4]||cq[5]||"").replace(t,"");

if(cq[2]==="~="){cq[4]=" "+cq[4]+" ";
}return cq;
},PSEUDO:function(cw,cx,cy,cz,cA){if(cw[1]==="not"){if((o.exec(cw[3])||"").length>1||/^\w/.test(cw[3])){cw[3]=s(cw[3],null,null,cx);
}else{var cB=s.filter(cw[3],cx,cy,true^cA);

if(!cy){cz.push.apply(cz,cB);
}return false;
}}else if(k.match.POS.test(cw[0])||k.match.CHILD.test(cw[0])){return true;
}return cw;
},POS:function(cC){cC.unshift(true);
return cC;
}},filters:{enabled:function(cD){return cD.disabled===false&&cD.type!=="hidden";
},disabled:function(cE){return cE.disabled===true;
},checked:function(cF){return cF.checked===true;
},selected:function(cG){if(cG.parentNode){cG.parentNode.selectedIndex;
}return cG.selected===true;
},parent:function(cH){return !!cH.firstChild;
},empty:function(cI){return !cI.firstChild;
},has:function(cJ,i,cK){return !!s(cK[3],cJ).length;
},header:function(cL){return (/h\d/i).test(cL.nodeName);
},text:function(cM){return "text"===cM.getAttribute('type');
},radio:function(cN){return "radio"===cN.type;
},checkbox:function(cO){return "checkbox"===cO.type;
},file:function(cP){return "file"===cP.type;
},password:function(cQ){return "password"===cQ.type;
},submit:function(cR){return "submit"===cR.type;
},image:function(cS){return "image"===cS.type;
},reset:function(cT){return "reset"===cT.type;
},button:function(cU){return "button"===cU.type||cU.nodeName.toLowerCase()==="button";
},input:function(cV){return (/input|select|textarea|button/i).test(cV.nodeName);
}},setFilters:{first:function(cW,i){return i===0;
},last:function(cX,i,cY,da){return i===da.length-1;
},even:function(db,i){return i%2===0;
},odd:function(dc,i){return i%2===1;
},lt:function(dd,i,de){return i<de[3]-0;
},gt:function(df,i,dg){return i>dg[3]-0;
},nth:function(dh,i,di){return di[3]-0===i;
},eq:function(dj,i,dk){return dk[3]-0===i;
}},filter:{PSEUDO:function(dl,dm,i,dn){var name=dm[1],dp=k.filters[name];

if(dp){return dp(dl,i,dm,dn);
}else if(name==="contains"){return (dl.textContent||dl.innerText||s.getText([dl])||"").indexOf(dm[3])>=0;
}else if(name==="not"){var dq=dm[3];

for(var j=0,l=dq.length;j<l;j++){if(dq[j]===dl){return false;
}}return true;
}else{s.error(name);
}},CHILD:function(dr,ds){var dy=ds[1],dt=dr;

switch(dy){case "only":case "first":while((dt=dt.previousSibling)){if(dt.nodeType===1){return false;
}}
if(dy==="first"){return true;
}dt=dr;
case "last":while((dt=dt.nextSibling)){if(dt.nodeType===1){return false;
}}return true;
case "nth":var dz=ds[2],dv=ds[3];

if(dz===1&&dv===0){return true;
}var dx=ds[0],parent=dr.parentNode;

if(parent&&(parent.sizcache!==dx||!dr.nodeIndex)){var du=0;

for(dt=parent.firstChild;dt;dt=dt.nextSibling){if(dt.nodeType===1){dt.nodeIndex=++du;
}}parent.sizcache=dx;
}var dw=dr.nodeIndex-dv;

if(dz===0){return dw===0;
}else{return (dw%dz===0&&dw/dz>=0);
}}},ID:function(dA,dB){return dA.nodeType===1&&dA.getAttribute("id")===dB;
},TAG:function(dC,dD){return (dD==="*"&&dC.nodeType===1)||dC.nodeName.toLowerCase()===dD;
},CLASS:function(dE,dF){return (" "+(dE.className||dE.getAttribute("class"))+" ").indexOf(dF)>-1;
},ATTR:function(dG,dH){var name=dH[1],dL=k.attrHandle[name]?k.attrHandle[name](dG):dG[name]!=null?dG[name]:dG.getAttribute(name),dK=dL+"",dJ=dH[2],dI=dH[4];
return dL==null?dJ==="!=":dJ==="="?dK===dI:dJ==="*="?dK.indexOf(dI)>=0:dJ==="~="?(" "+dK+" ").indexOf(dI)>=0:!dI?dK&&dL!==false:dJ==="!="?dK!==dI:dJ==="^="?dK.indexOf(dI)===0:dJ==="$="?dK.substr(dK.length-dI.length)===dI:dJ==="|="?dK===dI||dK.substr(0,dI.length+1)===dI+"-":false;
},POS:function(dM,dN,i,dO){var name=dN[2],dP=k.setFilters[name];

if(dP){return dP(dM,i,dN,dO);
}}}};
var q=k.match.POS,d=function(dQ,dR){return "\\"+(dR-0+1);
};

for(var w in k.match){k.match[w]=new RegExp(k.match[w].source+(/(?![^\[]*\])(?![^\(]*\))/.source));
k.leftMatch[w]=new RegExp(/(^(?:.|\r|\n)*?)/.source+k.match[w].source.replace(/\\(\d+)/g,d));
}var f=function(dS,dT){dS=Array.prototype.slice.call(dS,0);

if(dT){dT.push.apply(dT,dS);
return dT;
}return dS;
};
try{Array.prototype.slice.call(document.documentElement.childNodes,0)[0].nodeType;
}catch(e){f=function(dU,dV){var i=0,dW=dV||[];

if(x.call(dU)==="[object Array]"){Array.prototype.push.apply(dW,dU);
}else{if(typeof dU.length==="number"){for(var l=dU.length;i<l;i++){dW.push(dU[i]);
}}else{for(;dU[i];i++){dW.push(dU[i]);
}}}return dW;
};
}var u,n;

if(document.documentElement.compareDocumentPosition){u=function(a,b){if(a===b){p=true;
return 0;
}
if(!a.compareDocumentPosition||!b.compareDocumentPosition){return a.compareDocumentPosition?-1:1;
}return a.compareDocumentPosition(b)&4?-1:1;
};
}else{u=function(a,b){var ec,ea,ed=[],ee=[],dY=a.parentNode,eb=b.parentNode,dX=dY;
if(a===b){p=true;
return 0;
}else if(dY===eb){return n(a,b);
}else if(!dY){return -1;
}else if(!eb){return 1;
}while(dX){ed.unshift(dX);
dX=dX.parentNode;
}dX=eb;

while(dX){ee.unshift(dX);
dX=dX.parentNode;
}ec=ed.length;
ea=ee.length;
for(var i=0;i<ec&&i<ea;i++){if(ed[i]!==ee[i]){return n(ed[i],ee[i]);
}}return i===ec?n(a,ee[i],-1):n(ed[i],b,1);
};
n=function(a,b,ef){if(a===b){return ef;
}var eg=a.nextSibling;

while(eg){if(eg===b){return -1;
}eg=eg.nextSibling;
}return 1;
};
}s.getText=function(eh){var ej="",ei;

for(var i=0;eh[i];i++){ei=eh[i];
if(ei.nodeType===3||ei.nodeType===4){ej+=ei.nodeValue;
}else if(ei.nodeType!==8){ej+=s.getText(ei.childNodes);
}}return ej;
};
(function(){var em=document.createElement("div"),el="script"+(new Date()).getTime(),ek=document.documentElement;
em.innerHTML="<a name='"+el+"'/>";
ek.insertBefore(em,ek.firstChild);
if(document.getElementById(el)){k.find.ID=function(en,eo,ep){if(typeof eo.getElementById!=="undefined"&&!ep){var m=eo.getElementById(en[1]);
return m?m.id===en[1]||typeof m.getAttributeNode!=="undefined"&&m.getAttributeNode("id").nodeValue===en[1]?[m]:undefined:[];
}};
k.filter.ID=function(eq,er){var es=typeof eq.getAttributeNode!=="undefined"&&eq.getAttributeNode("id");
return eq.nodeType===1&&es&&es.nodeValue===er;
};
}ek.removeChild(em);
ek=em=null;
})();
(function(){var et=document.createElement("div");
et.appendChild(document.createComment(""));
if(et.getElementsByTagName("*").length>0){k.find.TAG=function(eu,ev){var ex=ev.getElementsByTagName(eu[1]);
if(eu[1]==="*"){var ew=[];

for(var i=0;ex[i];i++){if(ex[i].nodeType===1){ew.push(ex[i]);
}}ex=ew;
}return ex;
};
}et.innerHTML="<a href='#'></a>";

if(et.firstChild&&typeof et.firstChild.getAttribute!=="undefined"&&et.firstChild.getAttribute("href")!=="#"){k.attrHandle.href=function(ey){return ey.getAttribute("href",2);
};
}et=null;
})();

if(document.querySelectorAll){(function(){var eA=s,ez=document.createElement("div"),eB="__sizzle__";
ez.innerHTML="<p class='TEST'></p>";
if(ez.querySelectorAll&&ez.querySelectorAll(".TEST").length===0){return;
}s=function(eD,eE,eF,eG){eE=eE||document;
if(!eG&&!s.isXML(eE)){var eL=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(eD);

if(eL&&(eE.nodeType===1||eE.nodeType===9)){if(eL[1]){return f(eE.getElementsByTagName(eD),eF);
}else if(eL[2]&&k.find.CLASS&&eE.getElementsByClassName){return f(eE.getElementsByClassName(eL[2]),eF);
}}
if(eE.nodeType===9){if(eD==="body"&&eE.body){return f([eE.body],eF);
}else if(eL&&eL[3]){var eJ=eE.getElementById(eL[3]);
if(eJ&&eJ.parentNode){if(eJ.id===eL[3]){return f([eJ],eF);
}}else{return f([],eF);
}}
try{return f(eE.querySelectorAll(eD),eF);
}catch(eO){}}else if(eE.nodeType===1&&eE.nodeName.toLowerCase()!=="object"){var eN=eE,eI=eE.getAttribute("id"),eK=eI||eB,eH=eE.parentNode,eM=/^\s*[+~]/.test(eD);

if(!eI){eE.setAttribute("id",eK);
}else{eK=eK.replace(/'/g,"\\$&");
}
if(eM&&eH){eE=eE.parentNode;
}
try{if(!eM||eH){return f(eE.querySelectorAll("[id='"+eK+"'] "+eD),eF);
}}catch(eP){}finally{if(!eI){eN.removeAttribute("id");
}}}}return eA(eD,eE,eF,eG);
};

for(var eC in eA){s[eC]=eA[eC];
}ez=null;
})();
}(function(){var eS=document.documentElement,eQ=eS.matchesSelector||eS.mozMatchesSelector||eS.webkitMatchesSelector||eS.msMatchesSelector,eR=false;

try{eQ.call(document.documentElement,"[test!='']:sizzle");
}catch(eT){eR=true;
}
if(eQ){s.matchesSelector=function(eU,eV){eV=eV.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");

if(!s.isXML(eU)){try{if(eR||!k.match.PSEUDO.test(eV)&&!/!=/.test(eV)){return eQ.call(eU,eV);
}}catch(e){}}return s(eV,null,null,[eU]).length>0;
};
}})();
(function(){var eW=document.createElement("div");
eW.innerHTML="<div class='test e'></div><div class='test'></div>";
if(!eW.getElementsByClassName||eW.getElementsByClassName("e").length===0){return;
}eW.lastChild.className="e";

if(eW.getElementsByClassName("e").length===1){return;
}k.order.splice(1,0,"CLASS");
k.find.CLASS=function(eX,eY,fa){if(typeof eY.getElementsByClassName!=="undefined"&&!fa){return eY.getElementsByClassName(eX[1]);
}};
eW=null;
})();
function A(fb,fc,fd,fe,ff,fg){for(var i=0,l=fe.length;i<l;i++){var fi=fe[i];

if(fi){var fh=false;
fi=fi[fb];

while(fi){if(fi.sizcache===fd){fh=fe[fi.sizset];
break;
}
if(fi.nodeType===1&&!fg){fi.sizcache=fd;
fi.sizset=i;
}
if(fi.nodeName.toLowerCase()===fc){fh=fi;
break;
}fi=fi[fb];
}fe[i]=fh;
}}}function y(fj,fk,fl,fm,fn,fo){for(var i=0,l=fm.length;i<l;i++){var fq=fm[i];

if(fq){var fp=false;
fq=fq[fj];

while(fq){if(fq.sizcache===fl){fp=fm[fq.sizset];
break;
}
if(fq.nodeType===1){if(!fo){fq.sizcache=fl;
fq.sizset=i;
}
if(typeof fk!=="string"){if(fq===fk){fp=true;
break;
}}else if(s.filter(fk,[fq]).length>0){fp=fq;
break;
}}fq=fq[fj];
}fm[i]=fp;
}}}
if(document.documentElement.contains){s.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):true);
};
}else if(document.documentElement.compareDocumentPosition){s.contains=function(a,b){return !!(a.compareDocumentPosition(b)&16);
};
}else{s.contains=function(){return false;
};
}s.isXML=function(fr){var fs=(fr?fr.ownerDocument||fr:0).documentElement;
return fs?fs.nodeName!=="HTML":false;
};
var h=function(ft,fu){var fy,fw=[],fv="",fx=fu.nodeType?[fu]:fu;
while((fy=k.match.PSEUDO.exec(ft))){fv+=fy[0];
ft=ft.replace(k.match.PSEUDO,"");
}ft=k.relative[ft]?ft+"*":ft;

for(var i=0,l=fx.length;i<l;i++){s(ft,fx[i],fw);
}return s.filter(fv,fw);
};
var r=qx.bom.Selector;
r.query=function(fz,fA){return s(fz,fA);
};
r.matches=function(fB,fC){return s(fB,null,null,fC);
};
})();
})();
(function(){var r="engine.name",q="",p="MSXML2.DOMDocument.3.0",o="mshtml",n="SelectionLanguage",m="qx.xml.Document",k=" />",j="'",h="MSXML2.XMLHTTP.3.0",g="MSXML2.XMLHTTP.6.0",c=" xmlns='",f='<\?xml version="1.0" encoding="utf-8"?>\n<',e="text/xml",b="XPath",a="MSXML2.DOMDocument.6.0",d="HTML";
qx.Class.define(m,{statics:{DOMDOC:null,XMLHTTP:null,isXmlDocument:function(s){if(s.nodeType===9){return s.documentElement.nodeName!==d;
}else if(s.ownerDocument){return this.isXmlDocument(s.ownerDocument);
}else{return false;
}},create:qx.core.Environment.select(r,{"mshtml":function(t,u){var v=new ActiveXObject(this.DOMDOC);
if(this.DOMDOC==p){v.setProperty(n,b);
}
if(u){var w=f;
w+=u;

if(t){w+=c+t+j;
}w+=k;
v.loadXML(w);
}return v;
},"default":function(x,y){return document.implementation.createDocument(x||q,y||q,null);
}}),fromString:qx.core.Environment.select(r,{"mshtml":function(z){var A=qx.xml.Document.create();
A.loadXML(z);
return A;
},"default":function(B){var C=new DOMParser();
return C.parseFromString(B,e);
}})},defer:function(D){if((qx.core.Environment.get(r)==o)){var E=[a,p];
var F=[g,h];

for(var i=0,l=E.length;i<l;i++){try{new ActiveXObject(E[i]);
new ActiveXObject(F[i]);
}catch(G){continue;
}D.DOMDOC=E[i];
D.XMLHTTP=F[i];
break;
}}}});
})();
(function(){var t="object",s="qx.debug",r="Theme",q="widgets",p="undefined",o="fonts",n="string",m="colors",k="decorations",j="meta",d="appearances",h="borders",g="icons",c="other",b="qx.Theme",f="]",e="[Theme ";
qx.Bootstrap.define(b,{statics:{define:function(name,u){if(!u){var u={};
}u.include=this.__sL(u.include);
u.patch=this.__sL(u.patch);
if(qx.core.Environment.get(s)){this.__sS(name,u);
}var v={$$type:r,name:name,title:u.title,toString:this.genericToString};
if(u.extend){v.supertheme=u.extend;
}v.basename=qx.Bootstrap.createNamespace(name,v);
this.__sO(v,u);
this.__sM(v,u);
this.$$registry[name]=v;
for(var i=0,a=u.include,l=a.length;i<l;i++){this.include(v,a[i]);
}
for(var i=0,a=u.patch,l=a.length;i<l;i++){this.patch(v,a[i]);
}},__sL:function(w){if(!w){return [];
}
if(qx.Bootstrap.isArray(w)){return w;
}else{return [w];
}},__sM:function(x,y){var z=y.aliases||{};

if(y.extend&&y.extend.aliases){qx.Bootstrap.objectMergeWith(z,y.extend.aliases,false);
}x.aliases=z;
},getAll:function(){return this.$$registry;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},genericToString:function(){return e+this.name+f;
},__sN:function(A){for(var i=0,B=this.__sP,l=B.length;i<l;i++){if(A[B[i]]){return B[i];
}}},__sO:function(C,D){var G=this.__sN(D);
if(D.extend&&!G){G=D.extend.type;
}C.type=G||c;
if(!G){return;
}var I=function(){};
if(D.extend){I.prototype=new D.extend.$$clazz;
}var H=I.prototype;
var F=D[G];
for(var E in F){H[E]=F[E];
if(H[E].base){if(qx.core.Environment.get(s)){if(!D.extend){throw new Error("Found base flag in entry '"+E+"' of theme '"+D.name+"'. Base flags are not allowed for themes without a valid super theme!");
}}H[E].base=D.extend;
}}C.$$clazz=I;
C[G]=new I;
},$$registry:{},__sP:[m,h,k,o,g,q,d,j],__sQ:qx.core.Environment.select(s,{"true":{"title":n,"aliases":t,"type":n,"extend":t,"colors":t,"borders":t,"decorations":t,"fonts":t,"icons":t,"widgets":t,"appearances":t,"meta":t,"include":t,"patch":t},"default":null}),__sR:qx.core.Environment.select(s,{"true":{"color":t,"border":t,"decoration":t,"font":t,"icon":t,"appearance":t,"widget":t},"default":null}),__sS:qx.core.Environment.select(s,{"true":function(name,J){var O=this.__sQ;

for(var N in J){if(O[N]===undefined){throw new Error('The configuration key "'+N+'" in theme "'+name+'" is not allowed!');
}
if(J[N]==null){throw new Error('Invalid key "'+N+'" in theme "'+name+'"! The value is undefined/null!');
}
if(O[N]!==null&&typeof J[N]!==O[N]){throw new Error('Invalid type of key "'+N+'" in theme "'+name+'"! The type of the key must be "'+O[N]+'"!');
}}var M=[m,h,k,o,g,q,d,j];

for(var i=0,l=M.length;i<l;i++){var N=M[i];

if(J[N]!==undefined&&(J[N] instanceof Array||J[N] instanceof RegExp||J[N] instanceof Date||J[N].classname!==undefined)){throw new Error('Invalid key "'+N+'" in theme "'+name+'"! The value needs to be a map!');
}}var K=0;

for(var i=0,l=M.length;i<l;i++){var N=M[i];

if(J[N]){K++;
}
if(K>1){throw new Error("You can only define one theme category per file! Invalid theme: "+name);
}}if(!J.extend&&K===0){throw new Error("You must define at least one entry in your theme configuration :"+name);
}if(J.meta){var L;

for(var N in J.meta){L=J.meta[N];

if(this.__sR[N]===undefined){throw new Error('The key "'+N+'" is not allowed inside a meta theme block.');
}
if(typeof L!==this.__sR[N]){throw new Error('The type of the key "'+N+'" inside the meta block is wrong.');
}
if(!(typeof L===t&&L!==null&&L.$$type===r)){throw new Error('The content of a meta theme must reference to other themes. The value for "'+N+'" in theme "'+name+'" is invalid: '+L);
}}}if(J.extend&&J.extend.$$type!==r){throw new Error('Invalid extend in theme "'+name+'": '+J.extend);
}if(J.include){for(var i=0,l=J.include.length;i<l;i++){if(typeof (J.include[i])==p||J.include[i].$$type!==r){throw new Error('Invalid include in theme "'+name+'": '+J.include[i]);
}}}if(J.patch){for(var i=0,l=J.patch.length;i<l;i++){if(typeof (J.patch[i])==p||J.patch[i].$$type!==r){throw new Error('Invalid patch in theme "'+name+'": '+J.patch[i]);
}}}},"default":function(){}}),patch:function(P,Q){var S=this.__sN(Q);

if(S!==this.__sN(P)){throw new Error("The mixins '"+P.name+"' are not compatible '"+Q.name+"'!");
}var R=Q[S];
var T=P.$$clazz.prototype;

for(var U in R){T[U]=R[U];
}},include:function(V,W){var Y=W.type;

if(Y!==V.type){throw new Error("The mixins '"+V.name+"' are not compatible '"+W.name+"'!");
}var X=W[Y];
var ba=V.$$clazz.prototype;

for(var bb in X){if(ba[bb]!==undefined){continue;
}ba[bb]=X[bb];
}}}});
})();
(function(){var e="qx.ui.decoration.MBackgroundColor",d="qx.debug",c="Color",b="_applyBackgroundColor",a="";
qx.Mixin.define(e,{properties:{backgroundColor:{check:c,nullable:true,apply:b}},members:{_tintBackgroundColor:function(f,g,h){var i=qx.theme.manager.Color.getInstance();

if(g==null){g=this.getBackgroundColor();
}h.backgroundColor=i.resolve(g)||a;
},_resizeBackgroundColor:function(j,k,l){var m=this.getInsets();
k-=m.left+m.right;
l-=m.top+m.bottom;
return {left:m.left,top:m.top,width:k,height:l};
},_applyBackgroundColor:function(){if(qx.core.Environment.get(d)){if(this._isInitialized()){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}}}});
})();
(function(){var u="_applyBackgroundImage",t="repeat",s="",r="mshtml",q="engine.name",p="backgroundPositionX",o='<div style="',n="backgroundPositionY",m="qx.debug",l='</div>',e="no-repeat",k="engine.version",h="scale",c='">',b=" ",g="repeat-x",f="repeat-y",i="hidden",a="qx.ui.decoration.MBackgroundImage",j="String",d="browser.quirksmode";
qx.Mixin.define(a,{properties:{backgroundImage:{check:j,nullable:true,apply:u},backgroundRepeat:{check:[t,g,f,e,h],init:t,apply:u},backgroundPositionX:{nullable:true,apply:u},backgroundPositionY:{nullable:true,apply:u},backgroundPosition:{group:[n,p]}},members:{_generateMarkup:this._generateBackgroundMarkup,_generateBackgroundMarkup:function(v,content){var z=s;
var y=this.getBackgroundImage();
var x=this.getBackgroundRepeat();
var top=this.getBackgroundPositionY();

if(top==null){top=0;
}var A=this.getBackgroundPositionX();

if(A==null){A=0;
}v.backgroundPosition=A+b+top;
if(y){var w=qx.util.AliasManager.getInstance().resolve(y);
z=qx.bom.element.Decoration.create(w,x,v);
}else{if((qx.core.Environment.get(q)==r)){if(parseFloat(qx.core.Environment.get(k))<7||qx.core.Environment.get(d)){v.overflow=i;
}}
if(!content){content=s;
}z=o+qx.bom.element.Style.compile(v)+c+content+l;
}return z;
},_applyBackgroundImage:function(){if(qx.core.Environment.get(m)){if(this._isInitialized()){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}}}});
})();
(function(){var j="solid",i="_applyStyle",h="double",g="px ",f="dotted",e="_applyWidth",d="Color",c="",b="dashed",a="Number",E=" ",D="shorthand",C="widthTop",B="styleRight",A="styleBottom",z="qx.debug",y="widthBottom",x="widthLeft",w="styleTop",v="colorBottom",q="styleLeft",r="widthRight",o="colorLeft",p="colorRight",m="colorTop",n="border-top",k="border-left",l="border-right",s="qx.ui.decoration.MSingleBorder",t="border-bottom",u="absolute";
qx.Mixin.define(s,{properties:{widthTop:{check:a,init:0,apply:e},widthRight:{check:a,init:0,apply:e},widthBottom:{check:a,init:0,apply:e},widthLeft:{check:a,init:0,apply:e},styleTop:{nullable:true,check:[j,f,b,h],init:j,apply:i},styleRight:{nullable:true,check:[j,f,b,h],init:j,apply:i},styleBottom:{nullable:true,check:[j,f,b,h],init:j,apply:i},styleLeft:{nullable:true,check:[j,f,b,h],init:j,apply:i},colorTop:{nullable:true,check:d,apply:i},colorRight:{nullable:true,check:d,apply:i},colorBottom:{nullable:true,check:d,apply:i},colorLeft:{nullable:true,check:d,apply:i},left:{group:[x,q,o]},right:{group:[r,B,p]},top:{group:[C,w,m]},bottom:{group:[y,A,v]},width:{group:[C,r,y,x],mode:D},style:{group:[w,B,A,q],mode:D},color:{group:[m,p,v,o],mode:D}},members:{_styleBorder:function(F){var G=qx.theme.manager.Color.getInstance();
var H=this.getWidthTop();

if(H>0){F[n]=H+g+this.getStyleTop()+E+(G.resolve(this.getColorTop())||c);
}var H=this.getWidthRight();

if(H>0){F[l]=H+g+this.getStyleRight()+E+(G.resolve(this.getColorRight())||c);
}var H=this.getWidthBottom();

if(H>0){F[t]=H+g+this.getStyleBottom()+E+(G.resolve(this.getColorBottom())||c);
}var H=this.getWidthLeft();

if(H>0){F[k]=H+g+this.getStyleLeft()+E+(G.resolve(this.getColorLeft())||c);
}if(qx.core.Environment.get(z)){if(F.length===0){throw new Error("Invalid Single decorator (zero border width). Use qx.ui.decorator.Background instead!");
}}F.position=u;
F.top=0;
F.left=0;
},_resizeBorder:function(I,J,K){var L=this.getInsets();
J-=L.left+L.right;
K-=L.top+L.bottom;
if(J<0){J=0;
}
if(K<0){K=0;
}return {left:L.left-this.getWidthLeft(),top:L.top-this.getWidthTop(),width:J,height:K};
},_getDefaultInsetsForBorder:function(){return {top:this.getWidthTop(),right:this.getWidthRight(),bottom:this.getWidthBottom(),left:this.getWidthLeft()};
},_applyWidth:function(){this._applyStyle();
this._resetInsets();
},_applyStyle:function(){if(qx.core.Environment.get(z)){if(this._markup){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}}}});
})();
(function(){var a="qx.ui.decoration.IDecorator";
qx.Interface.define(a,{members:{getMarkup:function(){},resize:function(b,c,d){},tint:function(e,f){},getInsets:function(){}}});
})();
(function(){var j="Number",i="_applyInsets",h="abstract",g="insetRight",f="insetTop",e="qx.debug",d="insetBottom",c="qx.ui.decoration.Abstract",b="shorthand",a="insetLeft";
qx.Class.define(c,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],type:h,properties:{insetLeft:{check:j,nullable:true,apply:i},insetRight:{check:j,nullable:true,apply:i},insetBottom:{check:j,nullable:true,apply:i},insetTop:{check:j,nullable:true,apply:i},insets:{group:[f,g,d,a],mode:b}},members:{__dW:null,_getDefaultInsets:function(){throw new Error("Abstract method called.");
},_isInitialized:function(){throw new Error("Abstract method called.");
},_resetInsets:function(){this.__dW=null;
},getInsets:function(){if(this.__dW){return this.__dW;
}var k=this._getDefaultInsets();
return this.__dW={left:this.getInsetLeft()==null?k.left:this.getInsetLeft(),right:this.getInsetRight()==null?k.right:this.getInsetRight(),bottom:this.getInsetBottom()==null?k.bottom:this.getInsetBottom(),top:this.getInsetTop()==null?k.top:this.getInsetTop()};
},_applyInsets:function(){if(qx.core.Environment.get(e)){if(this._isInitialized()){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}this.__dW=null;
}},destruct:function(){this.__dW=null;
}});
})();
(function(){var b="px",a="qx.ui.decoration.Single";
qx.Class.define(a,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage,qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MSingleBorder],construct:function(c,d,e){qx.ui.decoration.Abstract.call(this);
if(c!=null){this.setWidth(c);
}
if(d!=null){this.setStyle(d);
}
if(e!=null){this.setColor(e);
}},members:{_markup:null,getMarkup:function(f){if(this._markup){return this._markup;
}var g={};
this._styleBorder(g,f);
var h=this._generateBackgroundMarkup(g);
return this._markup=h;
},resize:function(i,j,k){var l=this._resizeBorder(i,j,k);
i.style.width=l.width+b;
i.style.height=l.height+b;
i.style.left=parseInt(i.style.left)+l.left+b;
i.style.top=parseInt(i.style.top)+l.top+b;
},tint:function(m,n){this._tintBackgroundColor(m,n,m.style);
},_isInitialized:function(){return !!this._markup;
},_getDefaultInsets:function(){return this._getDefaultInsetsForBorder();
}},destruct:function(){this._markup=null;
}});
})();
(function(){var a="qx.ui.decoration.Uniform";
qx.Class.define(a,{extend:qx.ui.decoration.Single,construct:function(b,c,d){qx.ui.decoration.Single.call(this);
if(b!=null){this.setWidth(b);
}
if(c!=null){this.setStyle(c);
}
if(d!=null){this.setColor(d);
}}});
})();
(function(){var j='',i="px ",h=" ",g="border-top",f="border-left",e="border-bottom",d="border-right",c="Color",b="Number",a="qx.debug",D="shorthand",C="line-height",B="engine.name",A="mshtml",z="innerWidthRight",y="top",x="innerColorBottom",w="innerWidthTop",v="innerColorRight",u="innerColorTop",q="relative",r="browser.documentmode",o="innerColorLeft",p="qx.ui.decoration.MDoubleBorder",m="left",n="engine.version",k="innerWidthBottom",l="innerWidthLeft",s="position",t="absolute";
qx.Mixin.define(p,{include:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundImage],construct:function(){this._getDefaultInsetsForBorder=this.__tY;
this._resizeBorder=this.__tX;
this._styleBorder=this.__tV;
this._generateMarkup=this.__tW;
},properties:{innerWidthTop:{check:b,init:0},innerWidthRight:{check:b,init:0},innerWidthBottom:{check:b,init:0},innerWidthLeft:{check:b,init:0},innerWidth:{group:[w,z,k,l],mode:D},innerColorTop:{nullable:true,check:c},innerColorRight:{nullable:true,check:c},innerColorBottom:{nullable:true,check:c},innerColorLeft:{nullable:true,check:c},innerColor:{group:[u,v,x,o],mode:D}},members:{__tU:null,__tV:function(E){var F=qx.theme.manager.Color.getInstance();
E.position=q;
var G=this.getInnerWidthTop();

if(G>0){E[g]=G+i+this.getStyleTop()+h+F.resolve(this.getInnerColorTop());
}var G=this.getInnerWidthRight();

if(G>0){E[d]=G+i+this.getStyleRight()+h+F.resolve(this.getInnerColorRight());
}var G=this.getInnerWidthBottom();

if(G>0){E[e]=G+i+this.getStyleBottom()+h+F.resolve(this.getInnerColorBottom());
}var G=this.getInnerWidthLeft();

if(G>0){E[f]=G+i+this.getStyleLeft()+h+F.resolve(this.getInnerColorLeft());
}
if(qx.core.Environment.get(a)){if(!E[g]&&!E[d]&&!E[e]&&!E[f]){throw new Error("Invalid Double decorator (zero inner border width). Use qx.ui.decoration.Single instead!");
}}},__tW:function(H){var K=this._generateBackgroundMarkup(H);
var I=qx.theme.manager.Color.getInstance();
H[g]=j;
H[d]=j;
H[e]=j;
H[f]=j;
H[C]=0;
if((qx.core.Environment.get(B)==A&&parseFloat(qx.core.Environment.get(n))<8)||(qx.core.Environment.get(B)==A&&qx.core.Environment.get(r)<8)){H[C]=j;
}var J=this.getWidthTop();

if(J>0){H[g]=J+i+this.getStyleTop()+h+I.resolve(this.getColorTop());
}var J=this.getWidthRight();

if(J>0){H[d]=J+i+this.getStyleRight()+h+I.resolve(this.getColorRight());
}var J=this.getWidthBottom();

if(J>0){H[e]=J+i+this.getStyleBottom()+h+I.resolve(this.getColorBottom());
}var J=this.getWidthLeft();

if(J>0){H[f]=J+i+this.getStyleLeft()+h+I.resolve(this.getColorLeft());
}
if(qx.core.Environment.get(a)){if(H[g]==j&&H[d]==j&&H[e]==j&&H[f]==j){throw new Error("Invalid Double decorator (zero outer border width). Use qx.ui.decoration.Single instead!");
}}H[s]=t;
H[y]=0;
H[m]=0;
return this.__tU=this._generateBackgroundMarkup(H,K);
},__tX:function(L,M,N){var O=this.getInsets();
M-=O.left+O.right;
N-=O.top+O.bottom;
var P=O.left-this.getWidthLeft()-this.getInnerWidthLeft();
var top=O.top-this.getWidthTop()-this.getInnerWidthTop();
return {left:P,top:top,width:M,height:N,elementToApplyDimensions:L.firstChild};
},__tY:function(){return {top:this.getWidthTop()+this.getInnerWidthTop(),right:this.getWidthRight()+this.getInnerWidthRight(),bottom:this.getWidthBottom()+this.getInnerWidthBottom(),left:this.getWidthLeft()+this.getInnerWidthLeft()};
}}});
})();
(function(){var e="px",d="qx.ui.decoration.Double",c="css.boxmodel",b="content",a="scale";
qx.Class.define(d,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MDoubleBorder],construct:function(f,g,h,innerWidth,i){qx.ui.decoration.Abstract.call(this);
if(f!=null){this.setWidth(f);
}
if(g!=null){this.setStyle(g);
}
if(h!=null){this.setColor(h);
}
if(innerWidth!=null){this.setInnerWidth(innerWidth);
}
if(i!=null){this.setInnerColor(i);
}},members:{__IR:null,_getDefaultInsets:function(){return this._getDefaultInsetsForBorder();
},_isInitialized:function(){return !!this.__IR;
},getMarkup:function(j){if(this.__IR){return this.__IR;
}var k={};
this._styleBorder(k);
return this.__IR=this._generateMarkup(k);
},resize:function(l,m,n){var s=this.getBackgroundImage()&&this.getBackgroundRepeat()==a;
var q=this.getInsets();

if(s||qx.core.Environment.get(c)==b){var innerWidth=m-q.left-q.right;
var innerHeight=n-q.top-q.bottom;
}else{var o=q.top-this.getInnerWidthTop();
var t=q.bottom-this.getInnerWidthBottom();
var p=q.left-this.getInnerWidthLeft();
var r=q.right-this.getInnerWidthRight();
var innerWidth=m-p-r;
var innerHeight=n-o-t;
}if(innerWidth<0){innerWidth=0;
}
if(innerHeight<0){innerHeight=0;
}l.firstChild.style.width=innerWidth+e;
l.firstChild.style.height=innerHeight+e;
l.style.left=(q.left-this.getWidthLeft()-this.getInnerWidthLeft())+e;
l.style.top=(q.top-this.getWidthTop()-this.getInnerWidthTop())+e;
},tint:function(u,v){this._tintBackgroundColor(u,v,u.style);
}},destruct:function(){this.__IR=null;
}});
})();
(function(){var j='"></div>',i="_applyStyle",h="1px",g='<div style="',f='border:',e="1px solid ",d="Color",c=";",b="px",a='</div>',y="qx.ui.decoration.Beveled",x="css.boxmodel",w="qx.debug",v='<div style="position:absolute;top:1px;left:1px;',u='border-bottom:',t='border-right:',s="",r="content",q='border-left:',p='border-top:',n="Number",o='<div style="position:absolute;top:1px;left:0px;',l='position:absolute;top:0px;left:1px;',m='<div style="overflow:hidden;font-size:0;line-height:0;">',k="absolute";
qx.Class.define(y,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage,qx.ui.decoration.MBackgroundColor],construct:function(z,A,B){qx.ui.decoration.Abstract.call(this);
if(z!=null){this.setOuterColor(z);
}
if(A!=null){this.setInnerColor(A);
}
if(B!=null){this.setInnerOpacity(B);
}},properties:{innerColor:{check:d,nullable:true,apply:i},innerOpacity:{check:n,init:1,apply:i},outerColor:{check:d,nullable:true,apply:i}},members:{__ub:null,_getDefaultInsets:function(){return {top:2,right:2,bottom:2,left:2};
},_isInitialized:function(){return !!this.__ub;
},_applyStyle:function(){if(qx.core.Environment.get(w)){if(this.__ub){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}},getMarkup:function(){if(this.__ub){return this.__ub;
}var C=qx.theme.manager.Color.getInstance();
var D=[];
var G=e+C.resolve(this.getOuterColor())+c;
var F=e+C.resolve(this.getInnerColor())+c;
D.push(m);
D.push(g);
D.push(f,G);
D.push(qx.bom.element.Opacity.compile(0.35));
D.push(j);
D.push(o);
D.push(q,G);
D.push(t,G);
D.push(qx.bom.element.Opacity.compile(1));
D.push(j);
D.push(g);
D.push(l);
D.push(p,G);
D.push(u,G);
D.push(qx.bom.element.Opacity.compile(1));
D.push(j);
var E={position:k,top:h,left:h,opacity:1};
D.push(this._generateBackgroundMarkup(E));
D.push(v);
D.push(f,F);
D.push(qx.bom.element.Opacity.compile(this.getInnerOpacity()));
D.push(j);
D.push(a);
return this.__ub=D.join(s);
},resize:function(H,I,J){if(I<4){I=4;
}
if(J<4){J=4;
}if(qx.core.Environment.get(x)==r){var outerWidth=I-2;
var outerHeight=J-2;
var P=outerWidth;
var O=outerHeight;
var innerWidth=I-4;
var innerHeight=J-4;
}else{var outerWidth=I;
var outerHeight=J;
var P=I-2;
var O=J-2;
var innerWidth=P;
var innerHeight=O;
}var R=b;
var N=H.childNodes[0].style;
N.width=outerWidth+R;
N.height=outerHeight+R;
var M=H.childNodes[1].style;
M.width=outerWidth+R;
M.height=O+R;
var L=H.childNodes[2].style;
L.width=P+R;
L.height=outerHeight+R;
var K=H.childNodes[3].style;
K.width=P+R;
K.height=O+R;
var Q=H.childNodes[4].style;
Q.width=innerWidth+R;
Q.height=innerHeight+R;
},tint:function(S,T){this._tintBackgroundColor(S,T,S.childNodes[3].style);
}},destruct:function(){this.__ub=null;
}});
})();
(function(){var r="Number",q="_applyInsets",p="-l",o="Please verify the image '",n="' is present.",m="-t",l="insetRight",k="insetTop",j="qx.debug",i="The value of the property 'topSlice' is null! ",c="_applyBaseImage",h="insetBottom",f="set",b="shorthand",a="insetLeft",e="String",d="qx.ui.decoration.Grid",g="The value of the property 'leftSlice' is null! ";
qx.Class.define(d,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],construct:function(s,t){qx.core.Object.call(this);

if(qx.ui.decoration.css3.BorderImage.IS_SUPPORTED){this.__uc=new qx.ui.decoration.css3.BorderImage();

if(s){this.__ud(s);
}}else{this.__uc=new qx.ui.decoration.GridDiv(s);
}
if(t!=null){this.__uc.setInsets(t);
}},properties:{baseImage:{check:e,nullable:true,apply:c},insetLeft:{check:r,nullable:true,apply:q},insetRight:{check:r,nullable:true,apply:q},insetBottom:{check:r,nullable:true,apply:q},insetTop:{check:r,nullable:true,apply:q},insets:{group:[k,l,h,a],mode:b}},members:{__uc:null,getMarkup:function(){return this.__uc.getMarkup();
},resize:function(u,v,w){this.__uc.resize(u,v,w);
},tint:function(x,y){},getInsets:function(){return this.__uc.getInsets();
},_applyInsets:function(z,A,name){var B=f+qx.lang.String.firstUp(name);
this.__uc[B](z);
},_applyBaseImage:function(C,D){if(this.__uc instanceof qx.ui.decoration.GridDiv){this.__uc.setBaseImage(C);
}else{this.__ud(C);
}},__ud:function(E){this.__uc.setBorderImage(E);
var K=qx.util.AliasManager.getInstance().resolve(E);
var L=/(.*)(\.[a-z]+)$/.exec(K);
var H=L[1];
var J=L[2];
var F=qx.util.ResourceManager.getInstance();
var M=F.getImageHeight(H+m+J);
var N=F.getImageWidth(H+p+J);

if(qx.core.Environment.get(j)){var G=i+o+H+m+J+n;
var I=g+o+H+p+J+n;
qx.core.Assert.assertNotNull(M,G);
qx.core.Assert.assertNotNull(N,I);
}this.__uc.setSlice([M,N]);
}},destruct:function(){this.__uc=null;
}});
})();
(function(){var j="border-dark-shadow",i="border-light",h="border-dark",g="border-light-shadow",f="solid",e="gray",d="border-focused-light",c="border-focused-dark",b="border-focused-light-shadow",a="border-focused-dark-shadow",z="border-separator",y="table-header-border",x="dotted",w="tooltip-text",v="invalid",u="white",t="decoration/shadow/shadow.png",s="black",r="#FFF",q="effect",o="table-focus-indicator",p="border-focused-invalid",m="qx/decoration/Classic",n="border-lead",k="decoration/shadow/shadow-small.png",l="qx.theme.classic.Decoration";
qx.Theme.define(l,{aliases:{decoration:m},decorations:{"main":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:h}},"keyboard-focus":{decorator:qx.ui.decoration.Single,style:{width:1,color:s,style:x}},"inset":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[j,i,i,j],innerColor:[h,g,g,h]}},"outset":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[g,h,h,g],innerColor:[i,j,j,i]}},"groove":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[j,i,i,j],innerColor:[i,j,j,i]}},"ridge":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[i,j,j,i],innerColor:[j,i,i,j]}},"inset-thin":{decorator:qx.ui.decoration.Single,style:{width:1,color:[j,i,i,j]}},"outset-thin":{decorator:qx.ui.decoration.Single,style:{width:1,color:[i,j,j,i]}},"focused-inset":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[a,d,d,a],innerColor:[c,b,b,c]}},"focused-outset":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[b,c,c,b],innerColor:[d,a,a,d]}},"border-invalid":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[j,i,i,j],innerColor:v}},"separator-horizontal":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:z}},"separator-vertical":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:z}},"shadow":{decorator:qx.ui.decoration.Grid,style:{baseImage:t,insets:[4,8,8,4]}},"shadow-window":{decorator:qx.ui.decoration.Grid,style:{baseImage:t,insets:[4,8,8,4]}},"shadow-small":{decorator:qx.ui.decoration.Grid,style:{baseImage:k,insets:[0,3,3,0]}},"checkbox-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:v,innerColor:p,insets:[0]}},"lead-item":{decorator:qx.ui.decoration.Uniform,style:{width:1,style:x,color:n}},"tooltip":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:w}},"tooltip-error":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:w}},"toolbar-separator":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:j}},"toolbar-part-handle":{decorator:qx.ui.decoration.Single,style:{width:1,style:f,colorTop:u,colorLeft:u,colorRight:j,colorBottom:j}},"menu-separator":{decorator:qx.ui.decoration.Single,style:{widthTop:1,widthBottom:1,colorTop:h,colorBottom:i}},"datechooser-date-pane":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:e,style:f}},"datechooser-weekday":{decorator:qx.ui.decoration.Single,style:{widthBottom:1,colorBottom:e,style:f}},"datechooser-week":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:e,style:f}},"datechooser-week-header":{decorator:qx.ui.decoration.Single,style:{widthBottom:1,colorBottom:e,widthRight:1,colorRight:e,style:f}},"tabview-page-button-top":{decorator:qx.ui.decoration.Double,style:{width:1,color:[g,h,h,g],innerWidth:1,innerColor:[i,j,j,i],widthBottom:0,innerWidthBottom:0}},"tabview-page-button-bottom":{decorator:qx.ui.decoration.Double,style:{width:1,color:[g,h,h,g],innerWidth:1,innerColor:[i,j,j,i],widthTop:0,innerWidthTop:0}},"tabview-page-button-left":{decorator:qx.ui.decoration.Double,style:{width:1,color:[g,h,h,g],innerWidth:1,innerColor:[i,j,j,i],widthRight:0,innerWidthRight:0}},"tabview-page-button-right":{decorator:qx.ui.decoration.Double,style:{width:1,color:[g,h,h,g],innerWidth:1,innerColor:[i,j,j,i],widthLeft:0,innerWidthLeft:0}},"table-statusbar":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:j,styleTop:f}},"table-scroller-header":{decorator:qx.ui.decoration.Single,style:{widthBottom:1,colorBottom:y,styleBottom:f}},"table-scroller-focus-indicator":{decorator:qx.ui.decoration.Single,style:{width:2,color:o,style:f}},"table-header-cell":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:y,styleRight:f}},"table-header-cell-hovered":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:y,styleRight:f,widthBottom:2,colorBottom:q,styleBottom:f}},"progressbar":{decorator:qx.ui.decoration.Single,style:{backgroundColor:r,width:1,color:z}}}});
})();
(function(){var df="button",de="widget",dd="background",dc="atom",db="inset-thin",da="text-selected",cY="outset",cX="text-disabled",cW="inset",cV="background-selected",bY="label",bX="image",bW="groupbox",bV="cell",bU="popup",bT="focused-inset",bS="tooltip",bR="list",bQ="white",bP="menu-button",dm="middle",dn="decoration/arrows/down.gif",dk="spinner",dl="background-disabled",di="button-hovered",dj="bold",dg="checkbox",dh="toolbar-button",dp="button-frame",dq="textfield",cE="background-invalid",cD="shadow-small",cG="invalid",cF="combobox",cI="scrollbar",cH="center",cK="datechooser/button",cJ="button-abandoned",cC="background-light",cB="main",k="date-chooser",l="date-chooser-title",m="radiobutton",n="default",o="tree-folder",p="selectbox",q="background-field",r="outset-thin",s="icon/16/places/folder-open.png",t="menu-slidebar-button",dE="scrollbar/button",dD="combobox/button",dC="decoration/arrows/right.gif",dB="decoration/arrows/up.gif",dI="text",dH="virtual-list",dG="decoration/arrows/down-small.gif",dF="checkbox-undetermined",dK="icon/16/places/folder.png",dJ="slidebar/button-forward",bg="icon/16/mimetypes/text-plain.png",bh="right-top",be="table-header-cell",bf="button-checked",bk=".png",bl="background-focused",bi="datechooser",bj="slidebar/button-backward",bc="treevirtual-folder",bd="checkbox-checked",L="decoration/form/",K="decoration/tree/minus.gif",N="",M="decoration/tree/plus.gif",H="-invalid",G="decoration/arrows/left.gif",J="table-row-background-even",I="decoration/treevirtual/cross_minus.gif",F="radiobutton-hovered",E="keyboard-focus",bq="decoration/treevirtual/start_plus.gif",br="decoration/cursors/",bs="icon/16/actions/dialog-ok.png",bt="slidebar",bm="#BABABA",bn="table-scroller-focus-indicator",bo="move-frame",bp="nodrop",bu="date-chooser-selected",bv="tabview-page-button-left",W="decoration/arrows/up-small.gif",V="move",U="radiobutton-checked-focused",T="qx.theme.classic.Appearance",S="decoration/menu/checkbox.gif",R="tooltip-error",Q="right",P="decoration/arrows/rewind.gif",bb="table-scroller-header",ba="table-pane",bw="table-header-cell-hover",bx="focused-outset",by="checkbox-hovered",bz="icon/16/actions/dialog-cancel.png",bA="menu-slidebar",bB="datechooser-date-pane",bC="background-pane",bD="decoration/treevirtual/cross_plus.gif",bE="qx/icon/Oxygen/16/actions/window-close.png",bF="datechooser-week",cg="icon/16/apps/office-calendar.png",cf="datechooser-weekday",ce="table-header-border",cd="window-active-caption-text",ck="window-active-caption",cj="icon",ci="checkbox-checked-focused",ch="toolbar-separator",cn="groove",cm="checkbox-pressed",cx="tooltip-invalid",cy="decoration/window/restore.gif",cv="decoration/menu/checkbox-invert.gif",cw="scrollarea",ct="window-inactive-caption-text",cu="best-fit",cr="up.gif",cs="checkbox-undetermined-hovered",cz="keep-align",cA="tabview-page-button-right",cO="tabview-page-button-top",cN="tabview-page-button-bottom",cQ="row-layer",cP="decoration/menu/radiobutton.gif",cS="decoration/arrows/",cR="decoration/table/descending.png",cU="progressbar",cT="tree-file",cM="tooltip-text",cL="checkbox-checked-hovered",dx="left.gif",dy="decoration/arrows/up-invert.gif",dz="alias",dA="decoration/arrows/right-invert.gif",dt="radiobutton-checked-disabled",du="lead-item",dv="checkbox-focused",dw="border-dark",dr="decoration/treevirtual/end_plus.gif",ds="decoration/treevirtual/start_minus.gif",j="radiobutton-checked-hovered",i="decoration/window/minimize.gif",h="table-header-cell-hovered",g="down.gif",f="decoration/treevirtual/end.gif",e="decoration/treevirtual/end_minus.gif",d="window-inactive-caption",c="decoration/menu/radiobutton-invert.gif",b="text-placeholder",a="slider",w="decoration/table/select-column-order.png",x="decoration/arrows/next.gif",u="table-header",v="decoration/treevirtual/only_minus.gif",A="datechooser-week-header",B="decoration/window/maximize.gif",y="decoration/treevirtual/only_plus.gif",z="checkbox-checked-pressed",C="decoration/arrows/down-invert.gif",D="menu-separator",co="decoration/splitpane/knob-vertical.png",cl=".gif",cq="decoration/arrows/forward.gif",cp="radiobutton-checked-pressed",cb="table-statusbar",ca="radiobutton-pressed",O="copy",cc="table-row-background-selected",Y="radiobutton-focused",X="decoration/splitpane/knob-horizontal.png",bH="right.gif",bI="radiobutton-checked",bJ="decoration/treevirtual/cross.gif",bK="decoration/table/ascending.png",bL="decoration/treevirtual/line.gif",bM="checkbox-undetermined-focused",bN="toolbar-part-handle",bO="decoration/window/close.gif",bG="icon/16/actions/view-refresh.png";
qx.Theme.define(T,{appearances:{"widget":{},"label":{style:function(dL){return {textColor:dL.disabled?cX:undefined};
}},"image":{style:function(dM){return {opacity:!dM.replacement&&dM.disabled?0.3:undefined};
}},"atom":{},"atom/label":bY,"atom/icon":bX,"root":{style:function(dN){return {backgroundColor:dd,textColor:dI,font:n};
}},"popup":{style:function(dO){return {decorator:cB,backgroundColor:bC,shadow:cD};
}},"tooltip":{include:bU,style:function(dP){return {backgroundColor:bS,textColor:cM,decorator:bS,shadow:cD,padding:[1,3,2,3],offset:[15,5,5,5]};
}},"tooltip/atom":dc,"tooltip-error":{include:bS,style:function(dQ){return {textColor:da,showTimeout:100,hideTimeout:10000,decorator:R,font:dj,backgroundColor:cx};
}},"tooltip-error/atom":dc,"iframe":{style:function(dR){return {backgroundColor:bQ,decorator:cW};
}},"move-frame":{style:function(dS){return {decorator:cB};
}},"resize-frame":bo,"dragdrop-cursor":{style:function(dT){var dU=bp;

if(dT.copy){dU=O;
}else if(dT.move){dU=V;
}else if(dT.alias){dU=dz;
}return {source:br+dU+cl,position:bh,offset:[2,16,2,6]};
}},"button-frame":{alias:dc,style:function(dV){if(dV.pressed||dV.abandoned||dV.checked){var dX=!dV.inner&&dV.focused?bT:cW;
var dW=[4,3,2,5];
}else{var dX=!dV.inner&&dV.focused?bx:cY;
var dW=[3,4];
}return {backgroundColor:dV.abandoned?cJ:dV.hovered?di:dV.checked?bf:df,decorator:dX,padding:dW};
}},"button":{alias:dp,include:dp,style:function(dY){return {center:true};
}},"hover-button":{alias:dc,include:dc,style:function(ea){return {backgroundColor:ea.hovered?cV:undefined,textColor:ea.hovered?da:undefined};
}},"splitbutton":{},"splitbutton/button":df,"splitbutton/arrow":{alias:df,include:df,style:function(eb){return {icon:dn};
}},"scrollarea/corner":{style:function(){return {backgroundColor:dd};
}},"scrollarea":de,"scrollarea/pane":de,"scrollarea/scrollbar-x":cI,"scrollarea/scrollbar-y":cI,"list":{alias:cw,style:function(ec){var eg;
var ee=!!ec.focused;
var ef=!!ec.invalid;
var ed=!!ec.disabled;

if(ef&&!ed){eg=cE;
}else if(ee&&!ef&&!ed){eg=bl;
}else if(ed){eg=dl;
}else{eg=bQ;
}return {decorator:ec.focused?bT:cW,backgroundColor:eg};
}},"listitem":{alias:dc,style:function(eh){return {gap:4,padding:eh.lead?[2,4]:[3,5],backgroundColor:eh.selected?cV:undefined,textColor:eh.selected?da:undefined,decorator:eh.lead?du:undefined};
}},"textfield":{style:function(ei){var en;
var el=!!ei.focused;
var em=!!ei.invalid;
var ej=!!ei.disabled;

if(em&&!ej){en=cE;
}else if(el&&!em&&!ej){en=bl;
}else if(ej){en=dl;
}else{en=q;
}var ek;

if(ei.disabled){ek=cX;
}else if(ei.showingPlaceholder){ek=b;
}else{ek=undefined;
}return {decorator:ei.focused?bT:cW,padding:[2,3],textColor:ek,backgroundColor:en};
}},"textarea":dq,"checkbox":{alias:dc,style:function(eo){var eq;
if(eo.checked){if(eo.disabled){eq=bd;
}else if(eo.focused){eq=ci;
}else if(eo.pressed){eq=z;
}else if(eo.hovered){eq=cL;
}else{eq=bd;
}}else if(eo.undetermined){if(eo.disabled){eq=dF;
}else if(eo.focused){eq=bM;
}else if(eo.hovered){eq=cs;
}else{eq=dF;
}}else if(!eo.disabled){if(eo.focused){eq=dv;
}else if(eo.pressed){eq=cm;
}else if(eo.hovered){eq=by;
}}eq=eq||dg;
var ep=eo.invalid&&!eo.disabled?H:N;
return {icon:L+eq+ep+bk,gap:6};
}},"radiobutton":{alias:dg,include:dg,style:function(er){var et;

if(er.checked&&er.focused){et=U;
}else if(er.checked&&er.disabled){et=dt;
}else if(er.checked&&er.pressed){et=cp;
}else if(er.checked&&er.hovered){et=j;
}else if(er.checked){et=bI;
}else if(er.focused){et=Y;
}else if(er.pressed){et=ca;
}else if(er.hovered){et=F;
}else{et=m;
}var es=er.invalid&&!er.disabled?H:N;
return {icon:L+et+es+bk,shadow:undefined};
}},"spinner":{style:function(eu){return {decorator:eu.focused?bT:cW,textColor:eu.disabled?cX:undefined};
}},"spinner/textfield":{include:dq,style:function(ev){return {decorator:undefined,padding:[2,3]};
}},"spinner/upbutton":{alias:df,include:df,style:function(ew){return {icon:W,padding:ew.pressed?[2,2,0,4]:[1,3,1,3],backgroundColor:ew.hovered?di:df};
}},"spinner/downbutton":{alias:df,include:df,style:function(ex){return {icon:dG,padding:ex.pressed?[2,2,0,4]:[1,3,1,3],backgroundColor:ex.hovered?di:df};
}},"datefield":cF,"datefield/button":{alias:dD,include:dD,style:function(ey){return {icon:cg,padding:[0,3],backgroundColor:undefined,decorator:undefined};
}},"datefield/list":{alias:bi,include:bi,style:function(ez){return {decorator:ez.focused?bT:cW};
}},"groupbox":{style:function(eA){return {backgroundColor:dd};
}},"groupbox/legend":{alias:dc,style:function(eB){return {backgroundColor:dd,textColor:eB.invalid?cG:undefined,padding:[1,0,1,4]};
}},"groupbox/frame":{style:function(eC){return {padding:[12,9],marginTop:10,decorator:cn};
}},"check-groupbox":bW,"check-groupbox/legend":{alias:dg,include:dg,style:function(eD){return {backgroundColor:dd,textColor:eD.invalid?cG:undefined,padding:[1,0,1,4]};
}},"radio-groupbox":bW,"radio-groupbox/legend":{alias:m,include:m,style:function(eE){return {backgroundColor:dd,textColor:eE.invalid?cG:undefined,padding:[1,0,1,4]};
}},"toolbar":{style:function(eF){return {backgroundColor:dd};
}},"toolbar/part":{},"toolbar/part/container":{},"toolbar/part/handle":{style:function(eG){return {decorator:bN,backgroundColor:dd,padding:[0,1],margin:[3,2],allowGrowY:true};
}},"toolbar-separator":{style:function(eH){return {margin:[3,2],decorator:ch};
}},"toolbar-button":{alias:dc,style:function(eI){if(eI.pressed||eI.checked||eI.abandoned){var eK=db;
var eJ=[3,2,1,4];
}else if(eI.hovered){var eK=r;
var eJ=[2,3];
}else{var eK=undefined;
var eJ=[3,4];
}return {cursor:n,decorator:eK,padding:eJ,backgroundColor:eI.abandoned?cJ:eI.checked?cC:df};
}},"toolbar-menubutton":{alias:dh,include:dh,style:function(eL){return {showArrow:true};
}},"toolbar-menubutton/arrow":{alias:bX,include:bX,style:function(eM){return {source:dG};
}},"toolbar-splitbutton":{},"toolbar-splitbutton/button":dh,"toolbar-splitbutton/arrow":{alias:dh,include:dh,style:function(eN){return {icon:dn};
}},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:df,include:df,style:function(eO){return {icon:eO.vertical?dn:x};
}},"slidebar/button-backward":{alias:df,include:df,style:function(eP){return {icon:eP.vertical?dB:G};
}},"tabview":{},"tabview/bar":{alias:bt,style:function(eQ){var eR=0,eU=0,eS=0,eT=0;

if(eQ.barTop){eS=-2;
}else if(eQ.barBottom){eR=-2;
}else if(eQ.barRight){eT=-2;
}else{eU=-2;
}return {marginBottom:eS,marginTop:eR,marginLeft:eT,marginRight:eU};
}},"tabview/bar/button-forward":{include:dJ,alias:dJ,style:function(eV){if(eV.barTop||eV.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/button-backward":{include:bj,alias:bj,style:function(eW){if(eW.barTop||eW.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/pane":{style:function(eX){return {backgroundColor:dd,decorator:cY,padding:10};
}},"tabview-page":de,"tabview-page/button":{style:function(eY){var fi;
var fg=0,fe=0,fb=0,fd=0;

if(eY.barTop||eY.barBottom){var fc=2,fa=2,ff=6,fh=6;
}else{var fc=6,fa=6,ff=6,fh=6;
}
if(eY.barTop){fi=cO;
}else if(eY.barRight){fi=cA;
}else if(eY.barBottom){fi=cN;
}else{fi=bv;
}
if(eY.checked){if(eY.barTop||eY.barBottom){ff+=2;
fh+=2;
}else{fc+=2;
fa+=2;
}}else{if(eY.barTop||eY.barBottom){fb+=2;
fg+=2;
}else if(eY.barLeft||eY.barRight){fe+=2;
fd+=2;
}}
if(eY.checked){if(!eY.firstTab){if(eY.barTop||eY.barBottom){fd=-4;
}else{fg=-4;
}}
if(!eY.lastTab){if(eY.barTop||eY.barBottom){fe=-4;
}else{fb=-4;
}}}return {zIndex:eY.checked?10:5,decorator:fi,backgroundColor:dd,padding:[fc,fh,fa,ff],margin:[fg,fe,fb,fd]};
}},"tabview-page/button/label":{alias:bY,style:function(fj){return {padding:[0,1,0,1],margin:fj.focused?0:1,decorator:fj.focused?E:undefined};
}},"tabview-page/button/icon":bX,"tabview-page/button/close-button":{alias:dc,style:function(fk){return {icon:bE};
}},"scrollbar":{},"scrollbar/slider":{alias:a,style:function(fl){return {backgroundColor:cC};
}},"scrollbar/slider/knob":{include:dp,style:function(fm){return {height:14,width:14,minHeight:fm.horizontal?undefined:9,minWidth:fm.horizontal?9:undefined};
}},"scrollbar/button":{alias:df,include:df,style:function(fn){var fo;

if(fn.up||fn.down){if(fn.pressed||fn.abandoned||fn.checked){fo=[5,2,3,4];
}else{fo=[4,3];
}}else{if(fn.pressed||fn.abandoned||fn.checked){fo=[4,3,2,5];
}else{fo=[3,4];
}}var fp=cS;

if(fn.left){fp+=dx;
}else if(fn.right){fp+=bH;
}else if(fn.up){fp+=cr;
}else{fp+=g;
}return {padding:fo,icon:fp};
}},"scrollbar/button-begin":dE,"scrollbar/button-end":dE,"slider":{style:function(fq){var fr;

if(fq.disabled){fr=dl;
}else if(fq.invalid){fr=cE;
}else if(fq.focused){fr=cC;
}else{fr=q;
}return {backgroundColor:fr,decorator:fq.focused?bT:cW};
}},"slider/knob":{include:dp,style:function(fs){return {width:14,height:14,decorator:cY};
}},"tree-folder/open":{style:function(ft){return {source:ft.opened?K:M};
}},"tree-folder":{style:function(fu){return {padding:[2,3,2,0],icon:fu.opened?s:dK,iconOpened:s};
}},"tree-folder/icon":{style:function(fv){return {padding:[0,4,0,0]};
}},"tree-folder/label":{style:function(fw){return {padding:[1,2],backgroundColor:fw.selected?cV:undefined,textColor:fw.selected?da:undefined};
}},"tree-file":{include:o,alias:o,style:function(fx){return {icon:bg};
}},"tree":{include:bR,alias:bR,style:function(fy){return {contentPadding:[4,4,4,4]};
}},"treevirtual":{style:function(fz){return {decorator:cB};
}},"treevirtual-folder":{style:function(fA){return {icon:(fA.opened?s:dK)};
}},"treevirtual-file":{include:bc,alias:bc,style:function(fB){return {icon:bg};
}},"treevirtual-line":{style:function(fC){return {icon:bL};
}},"treevirtual-contract":{style:function(fD){return {icon:K};
}},"treevirtual-expand":{style:function(fE){return {icon:M};
}},"treevirtual-only-contract":{style:function(fF){return {icon:v};
}},"treevirtual-only-expand":{style:function(fG){return {icon:y};
}},"treevirtual-start-contract":{style:function(fH){return {icon:ds};
}},"treevirtual-start-expand":{style:function(fI){return {icon:bq};
}},"treevirtual-end-contract":{style:function(fJ){return {icon:e};
}},"treevirtual-end-expand":{style:function(fK){return {icon:dr};
}},"treevirtual-cross-contract":{style:function(fL){return {icon:I};
}},"treevirtual-cross-expand":{style:function(fM){return {icon:bD};
}},"treevirtual-end":{style:function(fN){return {icon:f};
}},"treevirtual-cross":{style:function(fO){return {icon:bJ};
}},"window":{style:function(fP){return {contentPadding:[10,10,10,10],backgroundColor:dd,decorator:fP.maximized?undefined:cY,shadow:fP.maximized?undefined:cD};
}},"window/pane":{},"window/captionbar":{style:function(fQ){return {padding:1,backgroundColor:fQ.active?ck:d,textColor:fQ.active?cd:ct};
}},"window/icon":{style:function(fR){return {marginRight:4};
}},"window/title":{style:function(fS){return {cursor:n,font:dj,marginRight:20,alignY:dm};
}},"window/minimize-button":{include:df,alias:df,style:function(fT){return {icon:i,padding:fT.pressed||fT.abandoned?[2,1,0,3]:[1,2]};
}},"window/restore-button":{include:df,alias:df,style:function(fU){return {icon:cy,padding:fU.pressed||fU.abandoned?[2,1,0,3]:[1,2]};
}},"window/maximize-button":{include:df,alias:df,style:function(fV){return {icon:B,padding:fV.pressed||fV.abandoned?[2,1,0,3]:[1,2]};
}},"window/close-button":{include:df,alias:df,style:function(fW){return {marginLeft:2,icon:bO,padding:fW.pressed||fW.abandoned?[2,1,0,3]:[1,2]};
}},"window/statusbar":{style:function(fX){return {decorator:db,padding:[2,6]};
}},"window/statusbar-text":bY,"resizer":{style:function(fY){return {decorator:cY};
}},"splitpane":{},"splitpane/splitter":{style:function(ga){return {backgroundColor:dd};
}},"splitpane/splitter/knob":{style:function(gb){return {source:gb.horizontal?X:co,padding:2};
}},"splitpane/slider":{style:function(gc){return {backgroundColor:dw,opacity:0.3};
}},"selectbox":{include:dp,style:function(gd){var ge=df;

if(gd.invalid&&!gd.disabled){ge=cE;
}else if(gd.abandoned){ge=cJ;
}else if(!gd.abandoned&&gd.hovered){ge=di;
}else if(!gd.abandoned&&!gd.hovered&&gd.checked){ge=bf;
}return {backgroundColor:ge};
}},"selectbox/atom":dc,"selectbox/popup":bU,"selectbox/list":bR,"selectbox/arrow":{include:bX,style:function(gf){return {source:dn,paddingRight:4,paddingLeft:5};
}},"datechooser":{style:function(gg){return {decorator:cY};
}},"datechooser/navigation-bar":{style:function(gh){return {backgroundColor:k,textColor:gh.disabled?cX:gh.invalid?cG:undefined,padding:[2,10]};
}},"datechooser/last-year-button-tooltip":bS,"datechooser/last-month-button-tooltip":bS,"datechooser/next-year-button-tooltip":bS,"datechooser/next-month-button-tooltip":bS,"datechooser/last-year-button":cK,"datechooser/last-month-button":cK,"datechooser/next-year-button":cK,"datechooser/next-month-button":cK,"datechooser/button/icon":{},"datechooser/button":{style:function(gi){var gj={width:17,show:cj};

if(gi.lastYear){gj.icon=P;
}else if(gi.lastMonth){gj.icon=G;
}else if(gi.nextYear){gj.icon=cq;
}else if(gi.nextMonth){gj.icon=dC;
}
if(gi.pressed||gi.checked||gi.abandoned){gj.decorator=db;
}else if(gi.hovered){gj.decorator=r;
}else{gj.decorator=undefined;
}
if(gi.pressed||gi.checked||gi.abandoned){gj.padding=[2,0,0,2];
}else if(gi.hovered){gj.padding=1;
}else{gj.padding=2;
}return gj;
}},"datechooser/month-year-label":{style:function(gk){return {font:dj,textAlign:cH};
}},"datechooser/date-pane":{style:function(gl){return {decorator:bB,backgroundColor:k};
}},"datechooser/weekday":{style:function(gm){return {decorator:cf,font:dj,textAlign:cH,textColor:gm.disabled?cX:gm.weekend?l:k,backgroundColor:gm.weekend?k:l};
}},"datechooser/day":{style:function(gn){return {textAlign:cH,decorator:gn.today?cB:undefined,textColor:gn.disabled?cX:gn.selected?da:gn.otherMonth?cX:undefined,backgroundColor:gn.disabled?undefined:gn.selected?bu:undefined,padding:[2,4]};
}},"datechooser/week":{style:function(go){return {textAlign:cH,textColor:l,padding:[2,4],decorator:go.header?A:bF};
}},"combobox":{style:function(gp){var gq;

if(gp.disabled){gq=dl;
}else if(gp.invalid){gq=cE;
}else if(gp.focused){gq=cC;
}else{gq=q;
}return {decorator:gp.focused?bT:cW,textColor:gp.disabled?cX:undefined,backgroundColor:gq};
}},"combobox/button":{alias:df,include:df,style:function(gr){return {icon:dn,backgroundColor:gr.hovered?di:df};
}},"combobox/popup":bU,"combobox/list":bR,"combobox/textfield":{include:dq,style:function(gs){return {decorator:undefined,padding:[2,3],backgroundColor:undefined};
}},"menu":{style:function(gt){var gu={backgroundColor:dd,shadow:cD,decorator:cY,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4,padding:1,placementModeY:gt.submenu||gt.contextmenu?cu:cz};

if(gt.submenu){gu.position=bh;
gu.offset=[-2,-3];
}
if(gt.contextmenu){gu.offset=4;
}return gu;
}},"menu/slidebar":bA,"menu-slidebar":de,"menu-slidebar-button":{style:function(gv){return {backgroundColor:gv.hovered?cV:undefined,padding:6,center:true};
}},"menu-slidebar/button-backward":{include:t,style:function(gw){return {icon:gw.hovered?dy:dB};
}},"menu-slidebar/button-forward":{include:t,style:function(gx){return {icon:gx.hovered?C:dn};
}},"menu-separator":{style:function(gy){return {height:0,decorator:D,marginTop:4,marginBottom:4,marginLeft:2,marginRight:2};
}},"menu-button":{alias:dc,style:function(gz){return {backgroundColor:gz.selected?cV:undefined,textColor:gz.selected?da:undefined,padding:[2,6]};
}},"menu-button/icon":{include:bX,style:function(gA){return {alignY:dm};
}},"menu-button/label":{include:bY,style:function(gB){return {alignY:dm,padding:1};
}},"menu-button/shortcut":{include:bY,style:function(gC){return {alignY:dm,marginLeft:14,padding:1};
}},"menu-button/arrow":{include:bX,style:function(gD){return {source:gD.selected?dA:dC,alignY:dm};
}},"menu-checkbox":{alias:bP,include:bP,style:function(gE){return {icon:!gE.checked?undefined:gE.selected?cv:S};
}},"menu-radiobutton":{alias:bP,include:bP,style:function(gF){return {icon:!gF.checked?undefined:gF.selected?c:cP};
}},"menubar":{style:function(gG){return {backgroundColor:dd,decorator:cY};
}},"menubar-button":{alias:dc,style:function(gH){return {padding:[2,6],backgroundColor:gH.pressed||gH.hovered?cV:undefined,textColor:gH.pressed||gH.hovered?da:undefined};
}},"colorselector":de,"colorselector/control-bar":de,"colorselector/visual-pane":bW,"colorselector/control-pane":de,"colorselector/preset-grid":de,"colorselector/colorbucket":{style:function(gI){return {decorator:db,width:16,height:16};
}},"colorselector/preset-field-set":bW,"colorselector/input-field-set":bW,"colorselector/preview-field-set":bW,"colorselector/hex-field-composite":de,"colorselector/hex-field":dq,"colorselector/rgb-spinner-composite":de,"colorselector/rgb-spinner-red":dk,"colorselector/rgb-spinner-green":dk,"colorselector/rgb-spinner-blue":dk,"colorselector/hsb-spinner-composite":de,"colorselector/hsb-spinner-hue":dk,"colorselector/hsb-spinner-saturation":dk,"colorselector/hsb-spinner-brightness":dk,"colorselector/preview-content-old":{style:function(gJ){return {decorator:db,width:50,height:10};
}},"colorselector/preview-content-new":{style:function(gK){return {decorator:db,backgroundColor:bQ,width:50,height:10};
}},"colorselector/hue-saturation-field":{style:function(gL){return {decorator:db,margin:5};
}},"colorselector/brightness-field":{style:function(gM){return {decorator:db,margin:[5,7]};
}},"colorselector/hue-saturation-pane":de,"colorselector/hue-saturation-handle":de,"colorselector/brightness-pane":de,"colorselector/brightness-handle":de,"table":de,"table/statusbar":{style:function(gN){return {decorator:cb,paddingLeft:2,paddingRight:2};
}},"table/column-button":{alias:df,style:function(gO){var gQ,gP;

if(gO.pressed||gO.checked||gO.abandoned){gQ=db;
gP=[3,2,1,4];
}else if(gO.hovered){gQ=r;
gP=[2,3];
}else{gQ=undefined;
gP=[3,4];
}return {decorator:gQ,padding:gP,backgroundColor:gO.abandoned?cJ:df,icon:w};
}},"table-column-reset-button":{extend:bP,alias:bP,style:function(){return {icon:bG};
}},"table-scroller/scrollbar-x":cI,"table-scroller/scrollbar-y":cI,"table-scroller":de,"table-scroller/header":{style:function(gR){return {decorator:bb,backgroundColor:u};
}},"table-scroller/pane":{style:function(gS){return {backgroundColor:ba};
}},"table-scroller/focus-indicator":{style:function(gT){return {decorator:bn};
}},"table-scroller/resize-line":{style:function(gU){return {backgroundColor:ce,width:3};
}},"table-header-cell":{alias:dc,style:function(gV){return {minWidth:13,paddingLeft:2,paddingRight:2,paddingBottom:gV.hovered?0:2,decorator:gV.hovered?h:be,backgroundColor:gV.hovered?bw:be,sortIcon:gV.sorted?(gV.sortedAscending?bK:cR):undefined};
}},"table-header-cell/icon":{style:function(gW){return {marginRight:4};
}},"table-header-cell/sort-icon":{style:function(gX){return {alignY:dm};
}},"table-editor-textfield":{include:dq,style:function(gY){return {decorator:undefined,padding:[2,2]};
}},"table-editor-selectbox":{include:p,alias:p,style:function(ha){return {padding:[0,2]};
}},"table-editor-combobox":{include:cF,alias:cF,style:function(hb){return {decorator:undefined};
}},"colorpopup":{alias:bU,include:bU,style:function(hc){return {decorator:cY,padding:5,backgroundColor:dd};
}},"colorpopup/field":{style:function(hd){return {decorator:db,margin:2,width:14,height:14,backgroundColor:dd};
}},"colorpopup/selector-button":df,"colorpopup/auto-button":df,"colorpopup/preview-pane":bW,"colorpopup/current-preview":{style:function(he){return {height:20,padding:4,marginLeft:4,decorator:db,allowGrowX:true};
}},"colorpopup/selected-preview":{style:function(hf){return {height:20,padding:4,marginRight:4,decorator:db,allowGrowX:true};
}},"colorpopup/colorselector-okbutton":{alias:df,include:df,style:function(hg){return {icon:bs};
}},"colorpopup/colorselector-cancelbutton":{alias:df,include:df,style:function(hh){return {icon:bz};
}},"virtual-list":bR,"virtual-list/row-layer":cQ,"row-layer":de,"column-layer":de,"group-item":{include:bY,alias:bY,style:function(hi){return {padding:4,backgroundColor:bm,textColor:bQ,font:dj};
}},"virtual-selectbox":p,"virtual-selectbox/dropdown":bU,"virtual-selectbox/dropdown/list":{alias:dH},"virtual-combobox":cF,"virtual-combobox/dropdown":bU,"virtual-combobox/dropdown/list":{alias:dH},"virtual-tree":bR,"virtual-tree-folder":o,"virtual-tree-file":cT,"cell":{style:function(hj){return {backgroundColor:hj.selected?cc:J,textColor:hj.selected?da:dI,padding:[3,6]};
}},"cell-string":bV,"cell-number":{include:bV,style:function(hk){return {textAlign:Q};
}},"cell-image":bV,"cell-boolean":bV,"cell-atom":bV,"cell-date":bV,"cell-html":bV,"htmlarea":{"include":de,style:function(hl){return {backgroundColor:bQ};
}},"progressbar":{style:function(hm){return {decorator:cU,padding:[1],backgroundColor:bQ};
}},"progressbar/progress":{style:function(hn){return {backgroundColor:hn.disabled?dl:cV};
}},"app-header":{style:function(ho){return {textColor:da,backgroundColor:cV,padding:[8,12]};
}},"app-header-label":bY}});
})();
(function(){var i="Liberation Sans",h="Verdana",g="Bitstream Vera Sans",f="Lucida Grande",e="Tahoma",d="monospace",c="qx.theme.classic.Font",b="Courier New",a="DejaVu Sans Mono";
qx.Theme.define(c,{fonts:{"default":{size:11,lineHeight:1.4,family:[f,e,h,g,i]},"bold":{size:11,lineHeight:1.4,family:[f,e,h,g,i],bold:true},"small":{size:10,lineHeight:1.4,family:[f,e,h,g,i]},"monospace":{size:11,lineHeight:1.4,family:[a,b,d]}}});
})();
(function(){var j="white",i="black",h="#3E6CA8",g="#EBE9ED",f="#A7A6AA",e="#EEE",d="#F3F0F5",c="gray",b="#85878C",a="#888888",E="#3E5B97",D="#FFFFE1",C="#F3F8FD",B="#CBC8CD",A="#FFE0E0",z="#F4F4F4",y="#808080",x="#CCCCCC",w="#C82C2C",v="#DBEAF9",q="#BCCEE5",r="#A5BDDE",o="#7CA0CF",p="#F6F5F7",m="#FF9999",n="qx.theme.classic.Color",k="#990000",l="#F9F8E9",s="#DCDFE4",t="#FAFBFE",u="#AAAAAA";
qx.Theme.define(n,{colors:{"background":g,"background-light":d,"background-focused":C,"background-focused-inner":v,"background-disabled":z,"background-selected":h,"background-field":j,"background-pane":t,"background-invalid":A,"border-lead":a,"border-light":j,"border-light-shadow":s,"border-dark-shadow":f,"border-dark":b,"border-main":b,"border-focused-light":q,"border-focused-light-shadow":r,"border-focused-dark-shadow":o,"border-focused-dark":h,"border-separator":y,"invalid":k,"border-focused-invalid":m,"text":i,"text-disabled":f,"text-selected":j,"text-focused":E,"text-placeholder":B,"tooltip":D,"tooltip-text":i,"tooltip-invalid":w,"button":g,"button-hovered":p,"button-abandoned":l,"button-checked":d,"window-active-caption-text":[255,255,255],"window-inactive-caption-text":[255,255,255],"window-active-caption":[51,94,168],"window-inactive-caption":[111,161,217],"date-chooser":j,"date-chooser-title":[116,116,116],"date-chooser-selected":[52,52,52],"effect":[254,200,60],"table-pane":j,"table-header":[242,242,242],"table-header-border":[214,213,217],"table-header-cell":[235,234,219],"table-header-cell-hover":[255,255,255],"table-focus-indicator":[179,217,255],"table-row-background-focused-selected":[90,138,211],"table-row-background-focused":[221,238,255],"table-row-background-selected":[51,94,168],"table-row-background-even":[250,248,243],"table-row-background-odd":[255,255,255],"table-row-selected":[255,255,255],"table-row":[0,0,0],"table-row-line":e,"table-column-line":e,"progressive-table-header":u,"progressive-table-row-background-even":[250,248,243],"progressive-table-row-background-odd":[255,255,255],"progressive-progressbar-background":c,"progressive-progressbar-indicator-done":x,"progressive-progressbar-indicator-undone":j,"progressive-progressbar-percent-background":c,"progressive-progressbar-percent-text":j}});
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
},members:{_dynamic:null,resolveDynamic:function(c){return this._dynamic[c];
},isDynamic:function(d){return !!this._dynamic[d];
},resolve:function(e){if(e&&this._dynamic[e]){return this._dynamic[e];
}return e;
},_setDynamic:function(f){this._dynamic=f;
},_getDynamic:function(){return this._dynamic;
}},destruct:function(){this._dynamic=null;
}});
})();
(function(){var f="_applyTheme",e="qx.theme.manager.Color",d="Theme",c="changeTheme",b="string",a="singleton";
qx.Class.define(e,{type:a,extend:qx.util.ValueManager,properties:{theme:{check:d,nullable:true,apply:f,event:c}},members:{_applyTheme:function(g){var h={};

if(g){var i=g.colors;
var j=qx.util.ColorUtil;
var k;

for(var l in i){k=i[l];

if(typeof k===b){if(!j.isCssString(k)){throw new Error("Could not parse color: "+k);
}}else if(k instanceof Array){k=j.rgbToRgbString(k);
}else{throw new Error("Could not parse color: "+k);
}h[l]=k;
}}this._setDynamic(h);
},resolve:function(m){var p=this._dynamic;
var n=p[m];

if(n){return n;
}var o=this.getTheme();

if(o!==null&&o.colors[m]){return p[m]=o.colors[m];
}return m;
},isDynamic:function(q){var s=this._dynamic;

if(q&&(s[q]!==undefined)){return true;
}var r=this.getTheme();

if(r!==null&&q&&(r.colors[q]!==undefined)){s[q]=r.colors[q];
return true;
}return false;
}}});
})();
(function(){var h=",",e="rgb(",d=")",c="qx.theme.manager.Color",a="qx.util.ColorUtil";
qx.Class.define(a,{statics:{REGEXP:{hex3:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,rgb:/^rgb\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/,rgba:/^rgba\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/},SYSTEM:{activeborder:true,activecaption:true,appworkspace:true,background:true,buttonface:true,buttonhighlight:true,buttonshadow:true,buttontext:true,captiontext:true,graytext:true,highlight:true,highlighttext:true,inactiveborder:true,inactivecaption:true,inactivecaptiontext:true,infobackground:true,infotext:true,menu:true,menutext:true,scrollbar:true,threeddarkshadow:true,threedface:true,threedhighlight:true,threedlightshadow:true,threedshadow:true,window:true,windowframe:true,windowtext:true},NAMED:{black:[0,0,0],silver:[192,192,192],gray:[128,128,128],white:[255,255,255],maroon:[128,0,0],red:[255,0,0],purple:[128,0,128],fuchsia:[255,0,255],green:[0,128,0],lime:[0,255,0],olive:[128,128,0],yellow:[255,255,0],navy:[0,0,128],blue:[0,0,255],teal:[0,128,128],aqua:[0,255,255],transparent:[-1,-1,-1],magenta:[255,0,255],orange:[255,165,0],brown:[165,42,42]},isNamedColor:function(j){return this.NAMED[j]!==undefined;
},isSystemColor:function(k){return this.SYSTEM[k]!==undefined;
},supportsThemes:function(){return qx.Class.isDefined(c);
},isThemedColor:function(l){if(!this.supportsThemes()){return false;
}return qx.theme.manager.Color.getInstance().isDynamic(l);
},stringToRgb:function(m){if(this.supportsThemes()&&this.isThemedColor(m)){var m=qx.theme.manager.Color.getInstance().resolveDynamic(m);
}
if(this.isNamedColor(m)){return this.NAMED[m];
}else if(this.isSystemColor(m)){throw new Error("Could not convert system colors to RGB: "+m);
}else if(this.isRgbString(m)){return this.__jd();
}else if(this.isHex3String(m)){return this.__jf();
}else if(this.isHex6String(m)){return this.__jg();
}throw new Error("Could not parse color: "+m);
},cssStringToRgb:function(n){if(this.isNamedColor(n)){return this.NAMED[n];
}else if(this.isSystemColor(n)){throw new Error("Could not convert system colors to RGB: "+n);
}else if(this.isRgbString(n)){return this.__jd();
}else if(this.isRgbaString(n)){return this.__je();
}else if(this.isHex3String(n)){return this.__jf();
}else if(this.isHex6String(n)){return this.__jg();
}throw new Error("Could not parse color: "+n);
},stringToRgbString:function(o){return this.rgbToRgbString(this.stringToRgb(o));
},rgbToRgbString:function(s){return e+s[0]+h+s[1]+h+s[2]+d;
},rgbToHexString:function(u){return (qx.lang.String.pad(u[0].toString(16).toUpperCase(),2)+qx.lang.String.pad(u[1].toString(16).toUpperCase(),2)+qx.lang.String.pad(u[2].toString(16).toUpperCase(),2));
},isValidPropertyValue:function(v){return this.isThemedColor(v)||this.isNamedColor(v)||this.isHex3String(v)||this.isHex6String(v)||this.isRgbString(v);
},isCssString:function(w){return this.isSystemColor(w)||this.isNamedColor(w)||this.isHex3String(w)||this.isHex6String(w)||this.isRgbString(w);
},isHex3String:function(x){return this.REGEXP.hex3.test(x);
},isHex6String:function(y){return this.REGEXP.hex6.test(y);
},isRgbString:function(z){return this.REGEXP.rgb.test(z);
},isRgbaString:function(A){return this.REGEXP.rgba.test(A);
},__jd:function(){var D=parseInt(RegExp.$1,10);
var C=parseInt(RegExp.$2,10);
var B=parseInt(RegExp.$3,10);
return [D,C,B];
},__je:function(){var G=parseInt(RegExp.$1,10);
var F=parseInt(RegExp.$2,10);
var E=parseInt(RegExp.$3,10);
return [G,F,E];
},__jf:function(){var J=parseInt(RegExp.$1,16)*17;
var I=parseInt(RegExp.$2,16)*17;
var H=parseInt(RegExp.$3,16)*17;
return [J,I,H];
},__jg:function(){var M=(parseInt(RegExp.$1,16)*16)+parseInt(RegExp.$2,16);
var L=(parseInt(RegExp.$3,16)*16)+parseInt(RegExp.$4,16);
var K=(parseInt(RegExp.$5,16)*16)+parseInt(RegExp.$6,16);
return [M,L,K];
},hex3StringToRgb:function(N){if(this.isHex3String(N)){return this.__jf(N);
}throw new Error("Invalid hex3 value: "+N);
},hex6StringToRgb:function(O){if(this.isHex6String(O)){return this.__jg(O);
}throw new Error("Invalid hex6 value: "+O);
},hexStringToRgb:function(P){if(this.isHex3String(P)){return this.__jf(P);
}
if(this.isHex6String(P)){return this.__jg(P);
}throw new Error("Invalid hex value: "+P);
},rgbToHsb:function(Q){var S,T,V;
var bc=Q[0];
var Y=Q[1];
var R=Q[2];
var bb=(bc>Y)?bc:Y;

if(R>bb){bb=R;
}var U=(bc<Y)?bc:Y;

if(R<U){U=R;
}V=bb/255.0;

if(bb!=0){T=(bb-U)/bb;
}else{T=0;
}
if(T==0){S=0;
}else{var X=(bb-bc)/(bb-U);
var ba=(bb-Y)/(bb-U);
var W=(bb-R)/(bb-U);

if(bc==bb){S=W-ba;
}else if(Y==bb){S=2.0+X-W;
}else{S=4.0+ba-X;
}S=S/6.0;

if(S<0){S=S+1.0;
}}return [Math.round(S*360),Math.round(T*100),Math.round(V*100)];
},hsbToRgb:function(bd){var i,f,p,q,t;
var be=bd[0]/360;
var bf=bd[1]/100;
var bg=bd[2]/100;

if(be>=1.0){be%=1.0;
}
if(bf>1.0){bf=1.0;
}
if(bg>1.0){bg=1.0;
}var bh=Math.floor(255*bg);
var bi={};

if(bf==0.0){bi.red=bi.green=bi.blue=bh;
}else{be*=6.0;
i=Math.floor(be);
f=be-i;
p=Math.floor(bh*(1.0-bf));
q=Math.floor(bh*(1.0-(bf*f)));
t=Math.floor(bh*(1.0-(bf*(1.0-f))));

switch(i){case 0:bi.red=bh;
bi.green=t;
bi.blue=p;
break;
case 1:bi.red=q;
bi.green=bh;
bi.blue=p;
break;
case 2:bi.red=p;
bi.green=bh;
bi.blue=t;
break;
case 3:bi.red=p;
bi.green=q;
bi.blue=bh;
break;
case 4:bi.red=t;
bi.green=p;
bi.blue=bh;
break;
case 5:bi.red=bh;
bi.green=p;
bi.blue=q;
break;
}}return [bi.red,bi.green,bi.blue];
},randomColor:function(){var r=Math.round(Math.random()*255);
var g=Math.round(Math.random()*255);
var b=Math.round(Math.random()*255);
return this.rgbToRgbString([r,g,b]);
}}});
})();
(function(){var j="/",i="0",h="qx/static",g="http://",f="https://",e="file://",d="qx.util.AliasManager",c="singleton",b=".",a="static";
qx.Class.define(d,{type:c,extend:qx.util.ValueManager,construct:function(){qx.util.ValueManager.call(this);
this.__el={};
this.add(a,h);
},members:{__el:null,_preprocess:function(k){var n=this._getDynamic();

if(n[k]===false){return k;
}else if(n[k]===undefined){if(k.charAt(0)===j||k.charAt(0)===b||k.indexOf(g)===0||k.indexOf(f)===i||k.indexOf(e)===0){n[k]=false;
return k;
}
if(this.__el[k]){return this.__el[k];
}var m=k.substring(0,k.indexOf(j));
var l=this.__el[m];

if(l!==undefined){n[k]=l+k.substring(m.length);
}}return k;
},add:function(o,p){this.__el[o]=p;
var r=this._getDynamic();
for(var q in r){if(q.substring(0,q.indexOf(j))===o){r[q]=p+q.substring(o.length);
}}},remove:function(s){delete this.__el[s];
},resolve:function(t){var u=this._getDynamic();

if(t!=null){t=this._preprocess(t);
}return u[t]||t;
},getAliases:function(){var v={};

for(var w in this.__el){v[w]=this.__el[w];
}return v;
}},destruct:function(){this.__el=null;
}});
})();
(function(){var k="px",j="engine.name",i="div",h="img",g="",f="no-repeat",d="qx.debug",c="scale-x",b="mshtml",a="repeat",J="scale",I="b64",H="scale-y",G="qx/icon",F=".png",E="crop",D="engine.version",C="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",B='<div style="',A="repeat-y",r='<img src="',s="qx.bom.element.Decoration",p="', sizingMethod='",q='"/>',n="png",o="')",l='"></div>',m='" style="',t="none",u="webkit",w=" ",v="repeat-x",y="DXImageTransform.Microsoft.AlphaImageLoader",x="qx/static/blank.gif",z="absolute";
qx.Class.define(s,{statics:{DEBUG:false,__iE:{},__iF:(qx.core.Environment.get(j)==b)&&qx.core.Environment.get(D)<9,__iG:qx.core.Environment.select(j,{"mshtml":{"scale-x":true,"scale-y":true,"scale":true,"no-repeat":true},"default":null}),__iH:{"scale-x":h,"scale-y":h,"scale":h,"repeat":i,"no-repeat":i,"repeat-x":i,"repeat-y":i},update:function(K,L,M,N){var P=this.getTagName(M,L);

if(P!=K.tagName.toLowerCase()){throw new Error("Image modification not possible because elements could not be replaced at runtime anymore!");
}var Q=this.getAttributes(L,M,N);

if(P===h){K.src=Q.src||qx.util.ResourceManager.getInstance().toUri(x);
}if(K.style.backgroundPosition!=g&&Q.style.backgroundPosition===undefined){Q.style.backgroundPosition=null;
}if(K.style.clip!=g&&Q.style.clip===undefined){Q.style.clip=null;
}var O=qx.bom.element.Style;
O.setStyles(K,Q.style);
if(this.__iF){try{K.filters[y].apply();
}catch(e){}}},create:function(R,S,T){var U=this.getTagName(S,R);
var W=this.getAttributes(R,S,T);
var V=qx.bom.element.Style.compile(W.style);

if(U===h){return r+W.src+m+V+q;
}else{return B+V+l;
}},getTagName:function(X,Y){if((qx.core.Environment.get(j)==b)){if(Y&&this.__iF&&this.__iG[X]&&qx.lang.String.endsWith(Y,F)){return i;
}}return this.__iH[X];
},getAttributes:function(ba,bb,bc){if(!bc){bc={};
}
if(!bc.position){bc.position=z;
}
if((qx.core.Environment.get(j)==b)){bc.fontSize=0;
bc.lineHeight=0;
}else if((qx.core.Environment.get(j)==u)){bc.WebkitUserDrag=t;
}var be=qx.util.ResourceManager.getInstance().getImageFormat(ba)||qx.io.ImageLoader.getFormat(ba);

if(qx.core.Environment.get(d)){if(ba!=null&&be==null){qx.log.Logger.warn("ImageLoader: Not recognized format of external image '"+ba+"'!");
}}var bd;
if(this.__iF&&this.__iG[bb]&&be===n){bd=this.__iK(bc,bb,ba);
}else{if(bb===J){bd=this.__iL(bc,bb,ba);
}else if(bb===c||bb===H){bd=this.__iM(bc,bb,ba);
}else{bd=this.__iP(bc,bb,ba);
}}return bd;
},__iI:function(bf,bh,bi){if(bf.width==null&&bh!=null){bf.width=bh+k;
}
if(bf.height==null&&bi!=null){bf.height=bi+k;
}return bf;
},__iJ:function(bj){var bk=qx.util.ResourceManager.getInstance().getImageWidth(bj)||qx.io.ImageLoader.getWidth(bj);
var bl=qx.util.ResourceManager.getInstance().getImageHeight(bj)||qx.io.ImageLoader.getHeight(bj);
return {width:bk,height:bl};
},__iK:function(bm,bn,bo){var br=this.__iJ(bo);
bm=this.__iI(bm,br.width,br.height);
var bq=bn==f?E:J;
var bp=C+qx.util.ResourceManager.getInstance().toUri(bo)+p+bq+o;
bm.filter=bp;
bm.backgroundImage=bm.backgroundRepeat=g;
return {style:bm};
},__iL:function(bs,bt,bu){var bv=qx.util.ResourceManager.getInstance().toUri(bu);
var bw=this.__iJ(bu);
bs=this.__iI(bs,bw.width,bw.height);
return {src:bv,style:bs};
},__iM:function(bx,by,bz){var bA=qx.util.ResourceManager.getInstance();
var bD=bA.getCombinedFormat(bz);
var bF=this.__iJ(bz);
var bB;

if(bD){var bE=bA.getData(bz);
var bC=bE[4];

if(bD==I){bB=bA.toDataUri(bz);
}else{bB=bA.toUri(bC);
}
if(by===c){bx=this.__iN(bx,bE,bF.height);
}else{bx=this.__iO(bx,bE,bF.width);
}return {src:bB,style:bx};
}else{if(qx.core.Environment.get(d)){this.__iR(bz);
}
if(by==c){bx.height=bF.height==null?null:bF.height+k;
}else if(by==H){bx.width=bF.width==null?null:bF.width+k;
}bB=bA.toUri(bz);
return {src:bB,style:bx};
}},__iN:function(bG,bH,bI){var bJ=qx.util.ResourceManager.getInstance().getImageHeight(bH[4]);
bG.clip={top:-bH[6],height:bI};
bG.height=bJ+k;
if(bG.top!=null){bG.top=(parseInt(bG.top,10)+bH[6])+k;
}else if(bG.bottom!=null){bG.bottom=(parseInt(bG.bottom,10)+bI-bJ-bH[6])+k;
}return bG;
},__iO:function(bK,bL,bM){var bN=qx.util.ResourceManager.getInstance().getImageWidth(bL[4]);
bK.clip={left:-bL[5],width:bM};
bK.width=bN+k;
if(bK.left!=null){bK.left=(parseInt(bK.left,10)+bL[5])+k;
}else if(bK.right!=null){bK.right=(parseInt(bK.right,10)+bM-bN-bL[5])+k;
}return bK;
},__iP:function(bO,bP,bQ){var bT=qx.util.ResourceManager.getInstance();
var bY=bT.getCombinedFormat(bQ);
var cb=this.__iJ(bQ);
if(bY&&bP!==a){var ca=bT.getData(bQ);
var bX=ca[4];

if(bY==I){var bW=bT.toDataUri(bQ);
var bV=bU=0;
}else{var bW=bT.toUri(bX);
var bV=ca[5];
var bU=ca[6];
}var bR=qx.bom.element.Background.getStyles(bW,bP,bV,bU);

for(var bS in bR){bO[bS]=bR[bS];
}
if(cb.width!=null&&bO.width==null&&(bP==A||bP===f)){bO.width=cb.width+k;
}
if(cb.height!=null&&bO.height==null&&(bP==v||bP===f)){bO.height=cb.height+k;
}return {style:bO};
}else{if(qx.core.Environment.get(d)){if(bP!==a){this.__iR(bQ);
}}bO=this.__iI(bO,cb.width,cb.height);
bO=this.__iQ(bO,bQ,bP);
return {style:bO};
}},__iQ:function(cc,cd,ce){var top=null;
var ci=null;

if(cc.backgroundPosition){var cf=cc.backgroundPosition.split(w);
ci=parseInt(cf[0],10);

if(isNaN(ci)){ci=cf[0];
}top=parseInt(cf[1],10);

if(isNaN(top)){top=cf[1];
}}var ch=qx.bom.element.Background.getStyles(cd,ce,ci,top);

for(var cg in ch){cc[cg]=ch[cg];
}if(cc.filter){cc.filter=g;
}return cc;
},__iR:function(cj){if(this.DEBUG&&qx.util.ResourceManager.getInstance().has(cj)&&cj.indexOf(G)==-1){if(!this.__iE[cj]){qx.log.Logger.debug("Potential clipped image candidate: "+cj);
this.__iE[cj]=true;
}}},isAlphaImageLoaderEnabled:qx.core.Environment.select(j,{"mshtml":function(){return qx.bom.element.Decoration.__iF;
},"default":function(){return false;
}})}});
})();
(function(){var q="",p="string",o="/",n="mshtml",m="engine.name",l="io.ssl",k="//",j="?",i="data",h="isClippedImage has been superseded by getCombinedFormat",c="type",g="data:image/",f=";",b="encoding",a="qx.util.ResourceManager",e="singleton",d=",";
qx.Class.define(a,{extend:qx.core.Object,type:e,construct:function(){qx.core.Object.call(this);
},statics:{__ir:qx.$$resources||{},__is:{}},members:{has:function(r){return !!this.self(arguments).__ir[r];
},getData:function(s){return this.self(arguments).__ir[s]||null;
},getImageWidth:function(t){var u=this.self(arguments).__ir[t];
return u?u[0]:null;
},getImageHeight:function(v){var w=this.self(arguments).__ir[v];
return w?w[1]:null;
},getImageFormat:function(x){var y=this.self(arguments).__ir[x];
return y?y[2]:null;
},isClippedImage:function(z){qx.log.Logger.deprecatedMethodWarning(arguments.callee,h);
var A=this.self(arguments).__ir[z];
return A&&A.length>4&&typeof (A[4])==p&&this.constructor.__ir[A[4]];
},getCombinedFormat:function(B){var E=q;
var D=this.self(arguments).__ir[B];
var C=D&&D.length>4&&typeof (D[4])==p&&this.constructor.__ir[D[4]];

if(C){var G=D[4];
var F=this.constructor.__ir[G];
E=F[2];
}return E;
},toUri:function(H){if(H==null){return H;
}var I=this.self(arguments).__ir[H];

if(!I){return H;
}
if(typeof I===p){var K=I;
}else{var K=I[3];
if(!K){return H;
}}var J=q;

if((qx.core.Environment.get(m)==n)&&qx.core.Environment.get(l)){J=this.self(arguments).__is[K];
}return J+qx.$$libraries[K].resourceUri+o+H;
},toDataUri:function(L){var N=this.constructor.__ir[L];
var O=this.constructor.__ir[N[4]];
var P;

if(O){var M=O[4][L];
P=g+M[c]+f+M[b]+d+M[i];
}else{this.debug("ResourceManager.toDataUri: falling back for",L);
P=this.toUri(L);
}return P;
}},defer:function(Q){if((qx.core.Environment.get(m)==n)){if(qx.core.Environment.get(l)){for(var U in qx.$$libraries){var S;

if(qx.$$libraries[U].resourceUri){S=qx.$$libraries[U].resourceUri;
}else{Q.__is[U]=q;
continue;
}if(S.match(/^\/\//)!=null){Q.__is[U]=window.location.protocol;
}else if(S.match(/^\//)!=null){Q.__is[U]=window.location.protocol+k+window.location.host;
}else if(S.match(/^\.\//)!=null){var R=document.URL;
Q.__is[U]=R.substring(0,R.lastIndexOf(o)+1);
}else if(S.match(/^http/)!=null){Q.__is[U]=q;
}else{var V=window.location.href.indexOf(j);
var T;

if(V==-1){T=window.location.href;
}else{T=window.location.href.substring(0,V);
}Q.__is[U]=T.substring(0,T.lastIndexOf(o)+1);
}}}}}});
})();
(function(){var k="engine.version",j="",i="engine.name",h="hidden",g="-moz-scrollbars-none",f="overflow",e=";",d="overflowY",b=":",a="overflowX",z="overflow:",y="none",x="scroll",w="borderLeftStyle",v="borderRightStyle",u="div",r="borderRightWidth",q="overflow-y",p="borderLeftWidth",o="-moz-scrollbars-vertical",m="100px",n="qx.bom.element.Overflow",l="overflow-x";
qx.Class.define(n,{statics:{__dX:null,getScrollbarWidth:function(){if(this.__dX!==null){return this.__dX;
}var A=qx.bom.element.Style;
var C=function(G,H){return parseInt(A.get(G,H),10)||0;
};
var D=function(I){return (A.get(I,v)==y?0:C(I,r));
};
var B=function(J){return (A.get(J,w)==y?0:C(J,p));
};
var F=qx.core.Environment.select(i,{"mshtml":function(K){if(A.get(K,d)==h||K.clientWidth==0){return D(K);
}return Math.max(0,K.offsetWidth-K.clientLeft-K.clientWidth);
},"default":function(L){if(L.clientWidth==0){var M=A.get(L,f);
var N=(M==x||M==o?16:0);
return Math.max(0,D(L)+N);
}return Math.max(0,(L.offsetWidth-L.clientWidth-B(L)));
}});
var E=function(O){return F(O)-D(O);
};
var t=document.createElement(u);
var s=t.style;
s.height=s.width=m;
s.overflow=x;
document.body.appendChild(t);
var c=E(t);
this.__dX=c?c:16;
document.body.removeChild(t);
return this.__dX;
},_compile:qx.core.Environment.select(i,{"gecko":parseFloat(qx.core.Environment.get(k))<
1.8?
function(P,Q){if(Q==h){Q=g;
}return z+Q+e;
}:
function(R,S){return R+b+S+e;
},"opera":parseFloat(qx.core.Environment.get(k))<
9.5?
function(T,U){return z+U+e;
}:
function(V,W){return V+b+W+e;
},"default":function(X,Y){return X+b+Y+e;
}}),compileX:function(ba){return this._compile(l,ba);
},compileY:function(bb){return this._compile(q,bb);
},getX:qx.core.Environment.select(i,{"gecko":parseFloat(qx.core.Environment.get(k))<
1.8?
function(bc,bd){var be=qx.bom.element.Style.get(bc,f,bd,false);

if(be===g){be=h;
}return be;
}:
function(bf,bg){return qx.bom.element.Style.get(bf,a,bg,false);
},"opera":parseFloat(qx.core.Environment.get(k))<
9.5?
function(bh,bi){return qx.bom.element.Style.get(bh,f,bi,false);
}:
function(bj,bk){return qx.bom.element.Style.get(bj,a,bk,false);
},"default":function(bl,bm){return qx.bom.element.Style.get(bl,a,bm,false);
}}),setX:qx.core.Environment.select(i,{"gecko":parseFloat(qx.core.Environment.get(k))<
1.8?
function(bn,bo){if(bo==h){bo=g;
}bn.style.overflow=bo;
}:
function(bp,bq){bp.style.overflowX=bq;
},"opera":parseFloat(qx.core.Environment.get(k))<
9.5?
function(br,bs){br.style.overflow=bs;
}:
function(bt,bu){bt.style.overflowX=bu;
},"default":function(bv,bw){bv.style.overflowX=bw;
}}),resetX:qx.core.Environment.select(i,{"gecko":parseFloat(qx.core.Environment.get(k))<
1.8?
function(bx){bx.style.overflow=j;
}:
function(by){by.style.overflowX=j;
},"opera":parseFloat(qx.core.Environment.get(k))<
9.5?
function(bz,bA){bz.style.overflow=j;
}:
function(bB,bC){bB.style.overflowX=j;
},"default":function(bD){bD.style.overflowX=j;
}}),getY:qx.core.Environment.select(i,{"gecko":parseFloat(qx.core.Environment.get(k))<
1.8?
function(bE,bF){var bG=qx.bom.element.Style.get(bE,f,bF,false);

if(bG===g){bG=h;
}return bG;
}:
function(bH,bI){return qx.bom.element.Style.get(bH,d,bI,false);
},"opera":parseFloat(qx.core.Environment.get(k))<
9.5?
function(bJ,bK){return qx.bom.element.Style.get(bJ,f,bK,false);
}:
function(bL,bM){return qx.bom.element.Style.get(bL,d,bM,false);
},"default":function(bN,bO){return qx.bom.element.Style.get(bN,d,bO,false);
}}),setY:qx.core.Environment.select(i,{"gecko":parseFloat(qx.core.Environment.get(k))<
1.8?
function(bP,bQ){if(bQ===h){bQ=g;
}bP.style.overflow=bQ;
}:
function(bR,bS){bR.style.overflowY=bS;
},"opera":parseFloat(qx.core.Environment.get(k))<
9.5?
function(bT,bU){bT.style.overflow=bU;
}:
function(bV,bW){bV.style.overflowY=bW;
},"default":function(bX,bY){bX.style.overflowY=bY;
}}),resetY:qx.core.Environment.select(i,{"gecko":parseFloat(qx.core.Environment.get(k))<
1.8?
function(ca){ca.style.overflow=j;
}:
function(cb){cb.style.overflowY=j;
},"opera":parseFloat(qx.core.Environment.get(k))<
9.5?
function(cc,cd){cc.style.overflow=j;
}:
function(ce,cf){ce.style.overflowY=j;
},"default":function(cg){cg.style.overflowY=j;
}})}});
})();
(function(){var k="n-resize",j="e-resize",i="nw-resize",h="ne-resize",g="engine.name",f="",e="cursor:",d=";",c="qx.bom.element.Cursor",b="cursor",a="hand";
qx.Class.define(c,{statics:{__dY:qx.core.Environment.select(g,{"mshtml":{"cursor":a,"ew-resize":j,"ns-resize":k,"nesw-resize":h,"nwse-resize":i},"opera":{"col-resize":j,"row-resize":k,"ew-resize":j,"ns-resize":k,"nesw-resize":h,"nwse-resize":i},"default":{}}),compile:function(l){return e+(this.__dY[l]||l)+d;
},get:function(m,n){return qx.bom.element.Style.get(m,b,n,false);
},set:function(o,p){o.style.cursor=this.__dY[p]||p;
},reset:function(q){q.style.cursor=f;
}}});
})();
(function(){var r="engine.name",q="",p="qx.debug",o="boxSizing",n="box-sizing",m="qx.bom.element.BoxSizing",k="KhtmlBoxSizing",j="border-box",h="-moz-box-sizing",g="WebkitBoxSizing",c=":",f=";",e="-khtml-box-sizing",b="content-box",a="-webkit-box-sizing",d="MozBoxSizing";
qx.Class.define(m,{statics:{__ea:qx.core.Environment.select(r,{"mshtml":null,"webkit":[o,k,g],"gecko":[d],"opera":[o]}),__eb:qx.core.Environment.select(r,{"mshtml":null,"webkit":[n,e,a],"gecko":[h],"opera":[n]}),__ec:{tags:{button:true,select:true},types:{search:true,button:true,submit:true,reset:true,checkbox:true,radio:true}},__ed:function(s){var t=this.__ec;
return t.tags[s.tagName.toLowerCase()]||t.types[s.type];
},compile:qx.core.Environment.select(r,{"mshtml":function(u){if(qx.core.Environment.get(p)){qx.log.Logger.warn(this,"This client do not support the dynamic modification of the box-sizing property.");
qx.log.Logger.trace();
}},"default":function(v){var x=this.__eb;
var w=q;

if(x){for(var i=0,l=x.length;i<l;i++){w+=x[i]+c+v+f;
}}return w;
}}),get:qx.core.Environment.select(r,{"mshtml":function(y){if(qx.bom.Document.isStandardMode(qx.dom.Node.getDocument(y))){if(!this.__ed(y)){return b;
}}return j;
},"default":function(z){var B=this.__ea;
var A;

if(B){for(var i=0,l=B.length;i<l;i++){A=qx.bom.element.Style.get(z,B[i],null,false);

if(A!=null&&A!==q){return A;
}}}return q;
}}),set:qx.core.Environment.select(r,{"mshtml":function(C,D){if(qx.core.Environment.get(p)){qx.log.Logger.warn(this,"This client do not support the dynamic modification of the box-sizing property.");
}},"default":function(E,F){var G=this.__ea;

if(G){for(var i=0,l=G.length;i<l;i++){E.style[G[i]]=F;
}}}}),reset:function(H){this.set(H,q);
}}});
})();
(function(){var o="auto",n="px",m=",",l="clip:auto;",k="rect(",j=");",i="",h=")",g="qx.bom.element.Clip",f="string",c="clip:rect(",e=" ",d="clip",b="rect(auto,auto,auto,auto)",a="rect(auto, auto, auto, auto)";
qx.Class.define(g,{statics:{compile:function(p){if(!p){return l;
}var u=p.left;
var top=p.top;
var t=p.width;
var s=p.height;
var q,r;

if(u==null){q=(t==null?o:t+n);
u=o;
}else{q=(t==null?o:u+t+n);
u=u+n;
}
if(top==null){r=(s==null?o:s+n);
top=o;
}else{r=(s==null?o:top+s+n);
top=top+n;
}return c+top+m+q+m+r+m+u+j;
},get:function(v,w){var y=qx.bom.element.Style.get(v,d,w,false);
var E,top,C,B;
var x,z;

if(typeof y===f&&y!==o&&y!==i){y=qx.lang.String.trim(y);
if(/\((.*)\)/.test(y)){var D=RegExp.$1;
if(/,/.test(D)){var A=D.split(m);
}else{var A=D.split(e);
}top=qx.lang.String.trim(A[0]);
x=qx.lang.String.trim(A[1]);
z=qx.lang.String.trim(A[2]);
E=qx.lang.String.trim(A[3]);
if(E===o){E=null;
}
if(top===o){top=null;
}
if(x===o){x=null;
}
if(z===o){z=null;
}if(top!=null){top=parseInt(top,10);
}
if(x!=null){x=parseInt(x,10);
}
if(z!=null){z=parseInt(z,10);
}
if(E!=null){E=parseInt(E,10);
}if(x!=null&&E!=null){C=x-E;
}else if(x!=null){C=x;
}
if(z!=null&&top!=null){B=z-top;
}else if(z!=null){B=z;
}}else{throw new Error("Could not parse clip string: "+y);
}}return {left:E||null,top:top||null,width:C||null,height:B||null};
},set:function(F,G){if(!G){F.style.clip=b;
return;
}var L=G.left;
var top=G.top;
var K=G.width;
var J=G.height;
var H,I;

if(L==null){H=(K==null?o:K+n);
L=o;
}else{H=(K==null?o:L+K+n);
L=L+n;
}
if(top==null){I=(J==null?o:J+n);
top=o;
}else{I=(J==null?o:top+J+n);
top=top+n;
}F.style.clip=k+top+m+H+m+I+m+L+h;
},reset:function(M){M.style.clip=a;
}}});
})();
(function(){var m="",l="engine.name",k=";",j="opacity:",i="opacity",h="filter",g="MozOpacity",f=");",e=")",d="zoom:1;filter:alpha(opacity=",a="qx.bom.element.Opacity",c="alpha(opacity=",b="-moz-opacity:";
qx.Class.define(a,{statics:{SUPPORT_CSS3_OPACITY:false,compile:qx.core.Environment.select(l,{"mshtml":function(n){if(n>=1){n=1;
}
if(n<0.00001){n=0;
}
if(qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){return j+n+k;
}else{return d+(n*100)+f;
}},"gecko":function(o){if(o>=1){o=0.999999;
}
if(!qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){return b+o+k;
}else{return j+o+k;
}},"default":function(p){if(p>=1){return m;
}return j+p+k;
}}),set:qx.core.Environment.select(l,{"mshtml":function(q,r){if(qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){if(r>=1){r=m;
}q.style.opacity=r;
}else{var s=qx.bom.element.Style.get(q,h,qx.bom.element.Style.COMPUTED_MODE,false);

if(r>=1){r=1;
}
if(r<0.00001){r=0;
}if(!q.currentStyle||!q.currentStyle.hasLayout){q.style.zoom=1;
}q.style.filter=s.replace(/alpha\([^\)]*\)/gi,m)+c+r*100+e;
}},"gecko":function(t,u){if(u>=1){u=0.999999;
}
if(!qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){t.style.MozOpacity=u;
}else{t.style.opacity=u;
}},"default":function(v,w){if(w>=1){w=m;
}v.style.opacity=w;
}}),reset:qx.core.Environment.select(l,{"mshtml":function(x){if(qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){x.style.opacity=m;
}else{var y=qx.bom.element.Style.get(x,h,qx.bom.element.Style.COMPUTED_MODE,false);
x.style.filter=y.replace(/alpha\([^\)]*\)/gi,m);
}},"gecko":function(z){if(!qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){z.style.MozOpacity=m;
}else{z.style.opacity=m;
}},"default":function(A){A.style.opacity=m;
}}),get:qx.core.Environment.select(l,{"mshtml":function(B,C){if(qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){var D=qx.bom.element.Style.get(B,i,C,false);

if(D!=null){return parseFloat(D);
}return 1.0;
}else{var E=qx.bom.element.Style.get(B,h,C,false);

if(E){var D=E.match(/alpha\(opacity=(.*)\)/);

if(D&&D[1]){return parseFloat(D[1])/100;
}}return 1.0;
}},"gecko":function(F,G){var H=qx.bom.element.Style.get(F,!qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY?g:i,G,false);

if(H==0.999999){H=1.0;
}
if(H!=null){return parseFloat(H);
}return 1.0;
},"default":function(I,J){var K=qx.bom.element.Style.get(I,i,J,false);

if(K!=null){return parseFloat(K);
}return 1.0;
}})},defer:function(L){L.SUPPORT_CSS3_OPACITY=(typeof document.documentElement.style.opacity=="string");
}});
})();
(function(){var m="",k="engine.name",h="userSelect",g="qx.debug",f="Invalid argument 'smart'",e="style",d="Invalid argument 'element'",c="MozUserModify",b="px",a="pixelBottom",K="float",J="borderImage",I="styleFloat",H="appearance",G="pixelHeight",F='Ms',E=":",D="cssFloat",C="pixelTop",B="Invalid argument 'name'",t="pixelLeft",u='O',r="Invalid argument 'styles'",s="qx.bom.element.Style",p='Khtml',q='string',n="pixelRight",o='Moz',v="pixelWidth",w=";",y="textOverflow",x="userModify",A='Webkit',z="WebkitUserModify";
qx.Class.define(s,{statics:{__ee:function(){var L=[H,h,y,J];
var P={};
var M=document.documentElement.style;
var Q=[o,A,p,u,F];

for(var i=0,l=L.length;i<l;i++){var R=L[i];
var N=R;

if(M[R]){P[N]=R;
continue;
}R=qx.lang.String.firstUp(R);

for(var j=0,S=Q.length;j<S;j++){var O=Q[j]+R;

if(typeof M[O]==q){P[N]=O;
break;
}}}this.__ef=P;
this.__ef[x]=qx.core.Environment.select(k,{"gecko":c,"webkit":z,"default":h});
this.__eg={};

for(var N in P){this.__eg[N]=this.__ek(P[N]);
}this.__ef[K]=qx.core.Environment.select(k,{"mshtml":I,"default":D});
},__eh:{width:v,height:G,left:t,right:n,top:C,bottom:a},__ei:{clip:qx.bom.element.Clip,cursor:qx.bom.element.Cursor,opacity:qx.bom.element.Opacity,boxSizing:qx.bom.element.BoxSizing,overflowX:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setX,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getX,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetX,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileX,qx.bom.element.Overflow)},overflowY:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setY,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getY,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetY,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileY,qx.bom.element.Overflow)}},compile:function(T){var V=[];
var X=this.__ei;
var W=this.__eg;
var name,U;

for(name in T){U=T[name];

if(U==null){continue;
}name=W[name]||name;
if(X[name]){V.push(X[name].compile(U));
}else{V.push(this.__ek(name),E,U,w);
}}return V.join(m);
},__ej:{},__ek:function(Y){var ba=this.__ej;
var bb=ba[Y];

if(!bb){bb=ba[Y]=qx.lang.String.hyphenate(Y);
}return bb;
},setCss:qx.core.Environment.select(k,{"mshtml":function(bc,bd){bc.style.cssText=bd;
},"default":function(be,bf){be.setAttribute(e,bf);
}}),getCss:qx.core.Environment.select(k,{"mshtml":function(bg){return bg.style.cssText.toLowerCase();
},"default":function(bh){return bh.getAttribute(e);
}}),isPropertySupported:function(bi){return (this.__ei[bi]||this.__ef[bi]||bi in document.documentElement.style);
},COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(bj,name,bk,bl){if(qx.core.Environment.get(g)){qx.core.Assert.assertElement(bj,d);
qx.core.Assert.assertString(name,B);

if(bl!==undefined){qx.core.Assert.assertBoolean(bl,f);
}}name=this.__ef[name]||name;
if(bl!==false&&this.__ei[name]){return this.__ei[name].set(bj,bk);
}else{bj.style[name]=bk!==null?bk:m;
}},setStyles:function(bm,bn,bo){if(qx.core.Environment.get(g)){qx.core.Assert.assertElement(bm,d);
qx.core.Assert.assertMap(bn,r);

if(bo!==undefined){qx.core.Assert.assertBoolean(bo,f);
}}var br=this.__ef;
var bt=this.__ei;
var bp=bm.style;

for(var bs in bn){var bq=bn[bs];
var name=br[bs]||bs;

if(bq===undefined){if(bo!==false&&bt[name]){bt[name].reset(bm);
}else{bp[name]=m;
}}else{if(bo!==false&&bt[name]){bt[name].set(bm,bq);
}else{bp[name]=bq!==null?bq:m;
}}}},reset:function(bu,name,bv){name=this.__ef[name]||name;
if(bv!==false&&this.__ei[name]){return this.__ei[name].reset(bu);
}else{bu.style[name]=m;
}},get:qx.core.Environment.select(k,{"mshtml":function(bw,name,bx,by){name=this.__ef[name]||name;
if(by!==false&&this.__ei[name]){return this.__ei[name].get(bw,bx);
}if(!bw.currentStyle){return bw.style[name]||m;
}switch(bx){case this.LOCAL_MODE:return bw.style[name]||m;
case this.CASCADED_MODE:return bw.currentStyle[name]||m;
default:var bC=bw.currentStyle[name]||m;
if(/^-?[\.\d]+(px)?$/i.test(bC)){return bC;
}var bB=this.__eh[name];

if(bB){var bz=bw.style[name];
bw.style[name]=bC||0;
var bA=bw.style[bB]+b;
bw.style[name]=bz;
return bA;
}if(/^-?[\.\d]+(em|pt|%)?$/i.test(bC)){throw new Error("Untranslated computed property value: "+name+". Only pixel values work well across different clients.");
}return bC;
}},"default":function(bD,name,bE,bF){name=this.__ef[name]||name;
if(bF!==false&&this.__ei[name]){return this.__ei[name].get(bD,bE);
}switch(bE){case this.LOCAL_MODE:return bD.style[name]||m;
case this.CASCADED_MODE:if(bD.currentStyle){return bD.currentStyle[name]||m;
}throw new Error("Cascaded styles are not supported in this browser!");
default:var bG=qx.dom.Node.getDocument(bD);
var bH=bG.defaultView.getComputedStyle(bD,null);
return bH?bH[name]:m;
}}})},defer:function(bI){bI.__ee();
}});
})();
(function(){var c="engine.name",b="load",a="qx.io.ImageLoader";
qx.Bootstrap.define(a,{statics:{__iS:{},__iT:{width:null,height:null},__iU:/\.(png|gif|jpg|jpeg|bmp)\b/i,isLoaded:function(d){var e=this.__iS[d];
return !!(e&&e.loaded);
},isFailed:function(f){var g=this.__iS[f];
return !!(g&&g.failed);
},isLoading:function(h){var j=this.__iS[h];
return !!(j&&j.loading);
},getFormat:function(k){var m=this.__iS[k];
return m?m.format:null;
},getSize:function(n){var o=this.__iS[n];
return o?
{width:o.width,height:o.height}:this.__iT;
},getWidth:function(p){var q=this.__iS[p];
return q?q.width:null;
},getHeight:function(r){var s=this.__iS[r];
return s?s.height:null;
},load:function(t,u,v){var w=this.__iS[t];

if(!w){w=this.__iS[t]={};
}if(u&&!v){v=window;
}if(w.loaded||w.loading||w.failed){if(u){if(w.loading){w.callbacks.push(u,v);
}else{u.call(v,t,w);
}}}else{w.loading=true;
w.callbacks=[];

if(u){w.callbacks.push(u,v);
}var y=new Image();
var x=qx.lang.Function.listener(this.__iV,this,y,t);
y.onload=x;
y.onerror=x;
y.src=t;
w.element=y;
}},abort:function(z){var A=this.__iS[z];

if(A&&!A.loaded){A.aborted=true;
var C=A.callbacks;
var B=A.element;
B.onload=B.onerror=null;
delete A.callbacks;
delete A.element;
delete A.loading;

for(var i=0,l=C.length;i<l;i+=2){C[i].call(C[i+1],z,A);
}}this.__iS[z]=null;
},__iV:qx.event.GlobalError.observeMethod(function(event,D,E){var F=this.__iS[E];

if(!F){}if(event.type===b){F.loaded=true;
F.width=this.__iW(D);
F.height=this.__iX(D);
var G=this.__iU.exec(E);

if(G!=null){F.format=G[1];
}}else{F.failed=true;
}D.onload=D.onerror=null;
var H=F.callbacks;
delete F.loading;
delete F.callbacks;
delete F.element;
for(var i=0,l=H.length;i<l;i+=2){H[i].call(H[i+1],E,F);
}}),__iW:qx.core.Environment.select(c,{"gecko":function(I){return I.naturalWidth;
},"default":function(J){return J.width;
}}),__iX:qx.core.Environment.select(c,{"gecko":function(K){return K.naturalHeight;
},"default":function(L){return L.height;
}})}});
})();
(function(){var u="number",t="0",s="px",r=";",q="'",p="')",o="gecko",n="background-image:url(",m=");",l="",e=")",k="background-repeat:",h="engine.version",c="data:",b=" ",g="qx.bom.element.Background",f="url(",i="background-position:",a="base64",j="url('",d="engine.name";
qx.Class.define(g,{statics:{__iY:[n,null,m,i,null,r,k,null,r],__ja:{backgroundImage:null,backgroundPosition:null,backgroundRepeat:null},__jb:function(v,top){var w=qx.core.Environment.get(d);
var x=qx.core.Environment.get(h);

if(w==o&&x<1.9&&v==top&&typeof v==u){top+=0.01;
}
if(v){var z=(typeof v==u)?v+s:v;
}else{z=t;
}
if(top){var y=(typeof top==u)?top+s:top;
}else{y=t;
}return z+b+y;
},__jc:function(A){var String=qx.lang.String;
var B=A.substr(0,50);
return String.startsWith(B,c)&&String.contains(B,a);
},compile:function(C,D,E,top){var F=this.__jb(E,top);
var G=qx.util.ResourceManager.getInstance().toUri(C);

if(this.__jc(G)){G=q+G+q;
}var H=this.__iY;
H[1]=G;
H[4]=F;
H[7]=D;
return H.join(l);
},getStyles:function(I,J,K,top){if(!I){return this.__ja;
}var L=this.__jb(K,top);
var N=qx.util.ResourceManager.getInstance().toUri(I);
var O;

if(this.__jc(N)){O=j+N+p;
}else{O=f+N+e;
}var M={backgroundPosition:L,backgroundImage:O};

if(J!=null){M.backgroundRepeat=J;
}return M;
},set:function(P,Q,R,S,top){var T=this.getStyles(Q,R,S,top);

for(var U in T){P.style[U]=T[U];
}}}});
})();
(function(){var j="_applyStyle",i="stretch",h="Integer",g="px",f=" ",e="repeat",d="round",c="shorthand",b="px ",a="sliceBottom",z=";'></div>",y="<div style='",x="qx.debug",w="sliceLeft",v="sliceRight",u="repeatX",t="String",s="qx.ui.decoration.css3.BorderImage",r="border-box",q="",o='") ',p="sliceTop",m='url("',n="hidden",k="repeatY",l="absolute";
qx.Class.define(s,{extend:qx.ui.decoration.Abstract,construct:function(A,B){qx.ui.decoration.Abstract.call(this);
if(A!=null){this.setBorderImage(A);
}
if(B!=null){this.setSlice(B);
}},statics:{IS_SUPPORTED:qx.bom.element.Style.isPropertySupported("borderImage")},properties:{borderImage:{check:t,nullable:true,apply:j},sliceTop:{check:h,init:0,apply:j},sliceRight:{check:h,init:0,apply:j},sliceBottom:{check:h,init:0,apply:j},sliceLeft:{check:h,init:0,apply:j},slice:{group:[p,v,a,w],mode:c},repeatX:{check:[i,e,d],init:i,apply:j},repeatY:{check:[i,e,d],init:i,apply:j},repeat:{group:[u,k],mode:c}},members:{__ue:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__ue;
},getMarkup:function(){if(this.__ue){return this.__ue;
}var C=this._resolveImageUrl(this.getBorderImage());
var D=[this.getSliceTop(),this.getSliceRight(),this.getSliceBottom(),this.getSliceLeft()];
var E=[this.getRepeatX(),this.getRepeatY()].join(f);
this.__ue=[y,qx.bom.element.Style.compile({"borderImage":m+C+o+D.join(f)+f+E,position:l,lineHeight:0,fontSize:0,overflow:n,boxSizing:r,borderWidth:D.join(b)+g}),z].join(q);
return this.__ue;
},resize:function(F,G,H){F.style.width=G+g;
F.style.height=H+g;
},tint:function(I,J){},_applyStyle:function(){if(qx.core.Environment.get(x)){if(this._isInitialized()){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}},_resolveImageUrl:function(K){return qx.util.ResourceManager.getInstance().toUri(qx.util.AliasManager.getInstance().resolve(K));
}},destruct:function(){this.__ue=null;
}});
})();
(function(){var j="px",i="0px",h="-1px",g="no-repeat",f="engine.version",e="scale-x",d="scale-y",c="-tr",b="-l",a='</div>',A="scale",z="-br",y="-t",x="browser.quirksmode",w="-tl",v="-r",u='<div style="position:absolute;top:0;left:0;overflow:hidden;font-size:0;line-height:0;">',t="qx.debug",s="_applyBaseImage",r="-b",p="String",q="",n="-bl",o="qx.ui.decoration.GridDiv",l="-c",m="mshtml",k="engine.name";
qx.Class.define(o,{extend:qx.ui.decoration.Abstract,construct:function(B,C){qx.ui.decoration.Abstract.call(this);
if(B!=null){this.setBaseImage(B);
}
if(C!=null){this.setInsets(C);
}},properties:{baseImage:{check:p,nullable:true,apply:s}},members:{__uf:null,__ug:null,__uh:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__uf;
},getMarkup:function(){if(this.__uf){return this.__uf;
}var D=qx.bom.element.Decoration;
var E=this.__ug;
var F=this.__uh;
var G=[];
G.push(u);
G.push(D.create(E.tl,g,{top:0,left:0}));
G.push(D.create(E.t,e,{top:0,left:F.left+j}));
G.push(D.create(E.tr,g,{top:0,right:0}));
G.push(D.create(E.bl,g,{bottom:0,left:0}));
G.push(D.create(E.b,e,{bottom:0,left:F.left+j}));
G.push(D.create(E.br,g,{bottom:0,right:0}));
G.push(D.create(E.l,d,{top:F.top+j,left:0}));
G.push(D.create(E.c,A,{top:F.top+j,left:F.left+j}));
G.push(D.create(E.r,d,{top:F.top+j,right:0}));
G.push(a);
return this.__uf=G.join(q);
},resize:function(H,I,J){var K=this.__uh;
var innerWidth=I-K.left-K.right;
var innerHeight=J-K.top-K.bottom;
if(innerWidth<0){innerWidth=0;
}
if(innerHeight<0){innerHeight=0;
}H.style.width=I+j;
H.style.height=J+j;
H.childNodes[1].style.width=innerWidth+j;
H.childNodes[4].style.width=innerWidth+j;
H.childNodes[7].style.width=innerWidth+j;
H.childNodes[6].style.height=innerHeight+j;
H.childNodes[7].style.height=innerHeight+j;
H.childNodes[8].style.height=innerHeight+j;

if((qx.core.Environment.get(k)==m)){if(parseFloat(qx.core.Environment.get(f))<7||(qx.core.Environment.get(x)&&parseFloat(qx.core.Environment.get(f))<8)){if(I%2==1){H.childNodes[2].style.marginRight=h;
H.childNodes[5].style.marginRight=h;
H.childNodes[8].style.marginRight=h;
}else{H.childNodes[2].style.marginRight=i;
H.childNodes[5].style.marginRight=i;
H.childNodes[8].style.marginRight=i;
}
if(J%2==1){H.childNodes[3].style.marginBottom=h;
H.childNodes[4].style.marginBottom=h;
H.childNodes[5].style.marginBottom=h;
}else{H.childNodes[3].style.marginBottom=i;
H.childNodes[4].style.marginBottom=i;
H.childNodes[5].style.marginBottom=i;
}}}},tint:function(L,M){},_applyBaseImage:function(N,O){if(qx.core.Environment.get(t)){if(this.__uf){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}
if(N){var S=this._resolveImageUrl(N);
var T=/(.*)(\.[a-z]+)$/.exec(S);
var R=T[1];
var Q=T[2];
var P=this.__ug={tl:R+w+Q,t:R+y+Q,tr:R+c+Q,bl:R+n+Q,b:R+r+Q,br:R+z+Q,l:R+b+Q,c:R+l+Q,r:R+v+Q};
this.__uh=this._computeEdgeSizes(P);
}},_resolveImageUrl:function(U){return qx.util.AliasManager.getInstance().resolve(U);
},_computeEdgeSizes:function(V){var W=qx.util.ResourceManager.getInstance();
return {top:W.getImageHeight(V.t),bottom:W.getImageHeight(V.b),left:W.getImageWidth(V.l),right:W.getImageWidth(V.r)};
}},destruct:function(){this.__uf=this.__ug=this.__uh=null;
}});
})();
(function(){var l="'>",k="[",h=", ",g="</span>",f="<span class='type-",e="</span> ",d="}",c="",b="]",a="\n",K="{",J="map",I="function",H="<span class='object'>",G="]:",F="&gt;",E="<span class='object' title='Object instance with hash code: ",D="string",C="level-",B="0",s="&lt;",t="<span class='offset'>",q=":",r="qx.log.appender.Util",o="&amp;",p="&#39;",m="DIV",n="<span>",u="&quot;",v="<span class='type-key'>",x="</span>:<span class='type-",w="</span>: ",z=" ",y="]</span>: ",A="?";
qx.Class.define(r,{statics:{toHtml:function(L){var V=[];
var S,U,N,P;
V.push(t,this.formatOffset(L.offset,6),e);

if(L.object){var M=L.win.qx.core.ObjectRegistry.fromHashCode(L.object);

if(M){V.push(E+M.$$hash+l,M.classname,k,M.$$hash,y);
}}else if(L.clazz){V.push(H+L.clazz.classname,w);
}var O=L.items;

for(var i=0,T=O.length;i<T;i++){S=O[i];
U=S.text;

if(U instanceof Array){var P=[];

for(var j=0,R=U.length;j<R;j++){N=U[j];

if(typeof N===D){P.push(n+this.escapeHTML(N)+g);
}else if(N.key){P.push(v+N.key+x+N.type+l+this.escapeHTML(N.text)+g);
}else{P.push(f+N.type+l+this.escapeHTML(N.text)+g);
}}V.push(f+S.type+l);

if(S.type===J){V.push(K,P.join(h),d);
}else{V.push(k,P.join(h),b);
}V.push(g);
}else{V.push(f+S.type+l+this.escapeHTML(U)+e);
}}var Q=document.createElement(m);
Q.innerHTML=V.join(c);
Q.className=C+L.level;
return Q;
},formatOffset:function(W,length){var ba=W.toString();
var X=(length||6)-ba.length;
var Y=c;

for(var i=0;i<X;i++){Y+=B;
}return Y+ba;
},FORMAT_STACK:null,escapeHTML:function(bb){return String(bb).replace(/[<>&"']/g,this.__tk);
},__tk:function(bc){var bd={"<":s,">":F,"&":o,"'":p,'"':u};
return bd[bc]||A;
},toText:function(be){return this.toTextArray(be).join(z);
},toTextArray:function(bf){var bn=[];
bn.push(this.formatOffset(bf.offset,6));

if(bf.object){var bg=bf.win.qx.core.ObjectRegistry.fromHashCode(bf.object);

if(bg){bn.push(bg.classname+k+bg.$$hash+G);
}}else if(bf.clazz){bn.push(bf.clazz.classname+q);
}var bh=bf.items;
var bk,bm;

for(var i=0,bl=bh.length;i<bl;i++){bk=bh[i];
bm=bk.text;

if(bk.trace&&bk.trace.length>0){if(typeof (this.FORMAT_STACK)==I){bm+=a+this.FORMAT_STACK(bk.trace);
}else{bm+=a+bk.trace;
}}
if(bm instanceof Array){var bi=[];

for(var j=0,bj=bm.length;j<bj;j++){bi.push(bm[j].text);
}
if(bk.type===J){bn.push(K,bi.join(h),d);
}else{bn.push(k,bi.join(h),b);
}}else{bn.push(bm);
}}return bn;
}}});
})();
(function(){var d="debug",c="log",b="engine.name",a="qx.log.appender.Native";
qx.Class.define(a,{statics:{process:qx.core.Environment.select(b,{"gecko":function(e){if(window.console&&console.firebug){console[e.level].call(console,qx.log.appender.Util.toText(e));
}},"mshtml":function(f){if(window.console){var h=f.level;

if(h==d){h=c;
}var g=qx.log.appender.Util.toText(f);
console[h](g);
}},"webkit":function(i){if(window.console){var k=i.level;

if(k==d){k=c;
}var j=qx.log.appender.Util.toText(i);
console[k](j);
}},"opera":function(l){}})},defer:function(m){qx.log.Logger.register(m);
}});
})();
(function(){var k="",j='</div>',i="Up",h="none",g="keypress",f='.qxconsole .messages{background:white;height:100%;width:100%;overflow:auto;}',d="Enter",c="px",b='.qxconsole .messages .user-result{background:white}',a='.qxconsole .messages .level-error{background:#FFE2D5}',V="div",U="user-command",T='<div class="command">',S='.qxconsole .command input:focus{outline:none;}',R='.qxconsole .messages .type-key{color:#565656;font-style:italic}',Q='.qxconsole .messages .type-instance{color:#565656;font-weight:bold}',P='.qxconsole .messages div{padding:0px 4px;}',O='.qxconsole .messages .level-debug{background:white}',N='.qxconsole .messages .type-class{color:#5F3E8A;font-weight:bold}',M="DIV",r='.qxconsole .messages .level-user{background:#E3EFE9}',s='<div class="qxconsole">',p="D",q='.qxconsole .messages .type-map{color:#CC3E8A;font-weight:bold;}',n='.qxconsole .messages .type-string{color:black;font-weight:normal;}',o='.qxconsole .control a{text-decoration:none;color:black;}',l='<div class="messages">',m='.qxconsole .messages .type-boolean{color:#15BC91;font-weight:normal;}',t='<input type="text"/>',u="clear",B='.qxconsole .command input{width:100%;border:0 none;font-family:Consolas,Monaco,monospace;font-size:11px;line-height:1.2;}',z='.qxconsole .messages .type-array{color:#CC3E8A;font-weight:bold;}',F='.qxconsole{z-index:10000;width:600px;height:300px;top:0px;right:0px;position:absolute;border-left:1px solid black;color:black;border-bottom:1px solid black;color:black;font-family:Consolas,Monaco,monospace;font-size:11px;line-height:1.2;}',D='.qxconsole .command{background:white;padding:2px 4px;border-top:1px solid black;}',I='.qxconsole .messages .user-command{color:blue}',H="F7",w="qx.log.appender.Console",L='.qxconsole .messages .level-info{background:#DEEDFA}',K="block",J='.qxconsole .messages .level-warn{background:#FFF7D5}',v='.qxconsole .messages .type-stringify{color:#565656;font-weight:bold}',x='.qxconsole .messages .user-error{background:#FFE2D5}',y='.qxconsole .control{background:#cdcdcd;border-bottom:1px solid black;padding:4px 8px;}',A='<div class="control"><a href="javascript:qx.log.appender.Console.clear()">Clear</a> | <a href="javascript:qx.log.appender.Console.toggle()">Hide</a></div>',C=">>> ",E="Down",G='.qxconsole .messages .type-number{color:#155791;font-weight:normal;}';
qx.Class.define(w,{statics:{init:function(){var W=[F,y,o,f,P,I,b,x,O,L,J,a,r,n,G,m,z,q,R,N,Q,v,D,B,S];
qx.bom.Stylesheet.createElement(W.join(k));
var Y=[s,A,l,j,T,t,j,j];
var ba=document.createElement(M);
ba.innerHTML=Y.join(k);
var X=ba.firstChild;
document.body.appendChild(ba.firstChild);
this.__tl=X;
this.__tm=X.childNodes[1];
this.__tn=X.childNodes[2].firstChild;
this.__ts();
qx.log.Logger.register(this);
qx.core.ObjectRegistry.register(this);
},dispose:function(){qx.event.Registration.removeListener(document.documentElement,g,this.__tt,this);
qx.log.Logger.unregister(this);
},clear:function(){this.__tm.innerHTML=k;
},process:function(bb){this.__tm.appendChild(qx.log.appender.Util.toHtml(bb));
this.__to();
},__to:function(){this.__tm.scrollTop=this.__tm.scrollHeight;
},__tp:true,toggle:function(){if(!this.__tl){this.init();
}else if(this.__tl.style.display==h){this.show();
}else{this.__tl.style.display=h;
}},show:function(){if(!this.__tl){this.init();
}else{this.__tl.style.display=K;
this.__tm.scrollTop=this.__tm.scrollHeight;
}},__tq:[],execute:function(){var be=this.__tn.value;

if(be==k){return;
}
if(be==u){return this.clear();
}var bc=document.createElement(V);
bc.innerHTML=qx.log.appender.Util.escapeHTML(C+be);
bc.className=U;
this.__tq.push(be);
this.__tr=this.__tq.length;
this.__tm.appendChild(bc);
this.__to();

try{var bd=window.eval(be);
}catch(bf){qx.log.Logger.error(bf);
}
if(bd!==undefined){qx.log.Logger.debug(bd);
}},__ts:function(e){this.__tm.style.height=(this.__tl.clientHeight-this.__tl.firstChild.offsetHeight-this.__tl.lastChild.offsetHeight)+c;
},__tt:function(e){var bh=e.getKeyIdentifier();
if((bh==H)||(bh==p&&e.isCtrlPressed())){this.toggle();
e.preventDefault();
}if(!this.__tl){return;
}if(!qx.dom.Hierarchy.contains(this.__tl,e.getTarget())){return;
}if(bh==d&&this.__tn.value!=k){this.execute();
this.__tn.value=k;
}if(bh==i||bh==E){this.__tr+=bh==i?-1:1;
this.__tr=Math.min(Math.max(0,this.__tr),this.__tq.length);
var bg=this.__tq[this.__tr];
this.__tn.value=bg||k;
this.__tn.select();
}}},defer:function(bi){qx.event.Registration.addListener(document.documentElement,g,bi.__tt,bi);
}});
})();
(function(){var l="engine.name",k="head",j="text/css",h="stylesheet",g="}",f='@import "',e="{",d='";',c="qx.bom.Stylesheet",b="link",a="style";
qx.Class.define(c,{statics:{includeFile:function(m,n){if(!n){n=document;
}var o=n.createElement(b);
o.type=j;
o.rel=h;
o.href=qx.util.ResourceManager.getInstance().toUri(m);
var p=n.getElementsByTagName(k)[0];
p.appendChild(o);
},createElement:qx.core.Environment.select(l,{"mshtml":function(q){var r=document.createStyleSheet();

if(q){r.cssText=q;
}return r;
},"default":function(s){var t=document.createElement(a);
t.type=j;

if(s){t.appendChild(document.createTextNode(s));
}document.getElementsByTagName(k)[0].appendChild(t);
return t.sheet;
}}),addRule:qx.core.Environment.select(l,{"mshtml":function(u,v,w){u.addRule(v,w);
},"default":function(x,y,z){x.insertRule(y+e+z+g,x.cssRules.length);
}}),removeRule:qx.core.Environment.select(l,{"mshtml":function(A,B){var C=A.rules;
var D=C.length;

for(var i=D-1;i>=0;--i){if(C[i].selectorText==B){A.removeRule(i);
}}},"default":function(E,F){var G=E.cssRules;
var H=G.length;

for(var i=H-1;i>=0;--i){if(G[i].selectorText==F){E.deleteRule(i);
}}}}),removeAllRules:qx.core.Environment.select(l,{"mshtml":function(I){var J=I.rules;
var K=J.length;

for(var i=K-1;i>=0;i--){I.removeRule(i);
}},"default":function(L){var M=L.cssRules;
var N=M.length;

for(var i=N-1;i>=0;i--){L.deleteRule(i);
}}}),addImport:qx.core.Environment.select(l,{"mshtml":function(O,P){O.addImport(P);
},"default":function(Q,R){Q.insertRule(f+R+d,Q.cssRules.length);
}}),removeImport:qx.core.Environment.select(l,{"mshtml":function(S,T){var U=S.imports;
var V=U.length;

for(var i=V-1;i>=0;i--){if(U[i].href==T){S.removeImport(i);
}}},"default":function(W,X){var Y=W.cssRules;
var ba=Y.length;

for(var i=ba-1;i>=0;i--){if(Y[i].href==X){W.deleteRule(i);
}}}}),removeAllImports:qx.core.Environment.select(l,{"mshtml":function(bb){var bc=bb.imports;
var bd=bc.length;

for(var i=bd-1;i>=0;i--){bb.removeImport(i);
}},"default":function(be){var bf=be.cssRules;
var bg=bf.length;

for(var i=bg-1;i>=0;i--){if(bf[i].type==bf[i].IMPORT_RULE){be.deleteRule(i);
}}}})}});
})();
(function(){var l=": ",k="Summary: (",j="qx.dev.ObjectSummary",h="\n",g=" Objects)\n\n",f=")\r\n",e=" (",d=" Objects)\r\n\r\n",c=", ";
qx.Class.define(j,{statics:{getInfo:function(){var m={};
var t=0;
var n;
var p=qx.core.ObjectRegistry.getRegistry();

for(var q in p){n=p[q];

if(n&&n.isDisposed()===false){if(m[n.classname]==null){m[n.classname]=1;
}else{m[n.classname]++;
}t++;
}}var s=[];

for(var o in m){s.push({classname:o,number:m[o]});
}s.sort(function(a,b){return b.number-a.number;
});
var r=k+t+g;

for(var i=0;i<s.length;i++){r+=s[i].number+l+s[i].classname+h;
}return r;
},getNewObjects:function(){var v={};
var F=0;
var w;
var A=qx.core.ObjectRegistry.getRegistry();
var y={};
var E;

for(var B in A){w=A[B];

if(w&&w.__disposed===false){var z=w.classname;

if(v[z]==null){v[z]=1;
}else{v[z]++;
}E=y[z];

if(E==null){E=y[z]=new Array();
}E[E.length]=w.toHashCode();
F++;
}}
if(!this._m_dObjectList){this._m_dObjectList={};
}var u={};

for(var z in v){if(!(z in this._m_dObjectList)){this._m_dObjectList[z]=0;
}
if(this._m_dObjectList[z]>=0&&this._m_dObjectList[z]<v[z]){u[z]=v[z]-this._m_dObjectList[z];
}}this._m_dObjectList=v;
var D=[];

for(var x in u){D.push({classname:x,number:u[x],aHashCode:y[x]});
}D.sort(function(a,b){return b.number-a.number;
});
var C=k+F+d;

for(var i=0;i<D.length;i++){C+=D[i].number+l+D[i].classname+e+D[i].aHashCode.join(c)+f;
}return C;
}}});
})();
(function(){var cn="window",cm="engine.name",cl="",ck="childNodes",cj="nodeName",ci="nodeType",ch="document",cg="function",cf="mshtml",ce="firstChild",bt="external",bs="location",br="[native code]",bq="lastChild",bp="scrollY",bo="scrollWidth",bn="defaultView",bm="closed",bl="content",bk="qx",cu="</td><td>",cv="filters",cs="locationbar",ct="screenX",cq="previousSibling",cr="localStorage",co="scrollX",cp="Global namespace is polluted by the following unknown objects:\n\n",cw="doctype",cx="parent",bR="qx.dev.Pollution",bQ="outerText",bT="pageYOffset",bS="parentElement",bV="opera",bU="designMode",bX="cookie",bW="fullScreen",bP="links",bO="pageXOffset",a="frames",b="documentElement",c="screenY",d="statusbar",e="history",f="sun",g="pkcs11",h="java",j="style",k="innerWidth",cB="plugins",cA="implementation",cz="clientWidth",cy="compatMode",cF="length",cE="textContent",cD="controllers",cC="netscape",cH="self",cG="domConfig",J="attributes",K="clientHeight",H="outerHeight",I="parentNode",N="innerHeight",O="title",L="ownerDocument",M="<table>",F="globalStorage",G="Global namespace is not polluted by any unknown objects.",s="toolbar",r="outerHTML",u="crypto",t="forms",o="scrollbars",n="frameElement",q="Components",p="body",m="clientInformation",l="offscreenBuffering",T="embeds",U="localName",V="scrollTop",W="isMultiLine",P="scrollLeft",Q="images",R="event",S="offsetHeight",X="scrollMaxY",Y="sessionStorage",C="screen",B="name",A="offsetLeft",z="console",y="XMLHttpRequest",x="nextSibling",w="innerText",v="menubar",E="scopeName",D="top",ba="outerWidth",bb=": ",bc="\n",bd="status",be="contentEditable",bf="anchors",bg="</table>",bh="<tr style='vertical-align:top'><td>",bi="scrollMaxX",bj="screenTop",bx="defaultStatus",bw="styleSheets",bv="className",bu="personalbar",bB="</td></tr>",bA="currentStyle",bz="directories",by="navigator",bD="applets",bC="screenLeft",bK="opener",bL="scrollHeight",bI="__firebug__",bJ="Option",bG="innerHTML",bH="tabIndex",bE="offsetTop",bF="[function]",bM="clipboardData",bN="Packages",ca="tagName",bY="offsetWidth",cc="applicationCache",cb="undefined",cd="Image";
qx.Class.define(bR,{statics:{names:{"window":window,"document":document,"body":document.body},ignore:{"window":[bk,h,f,bN,bI,q,cD,Y,F,z,R,l,bM,m,bJ,cd,bt,bj,bC,cF,cn,ch,bs,by,cC,cx,a,D,o,B,co,bp,cH,C,e,bl,v,s,cs,bu,d,bz,bm,u,g,bK,bd,bx,k,N,ba,H,ct,c,bO,bT,bi,X,bW,n,y,cc,cr],"document":[cG,bs,cy,cA,bn,O,p,bw,b,cj,ci,ce,bq,cw,Q,bD,bP,t,bf,bX,T,cB,bU,ck],"body":[cE,bG,r,w,bQ,E,bS,ca,cv,be,ch,bA,W,K,cz,bq,ce,bE,A,bY,S,bH,bv,J,cq,x,L,U,ck,I,ci,cj,j,V,P,bo,bL]},getInfo:function(cI){var cJ=qx.dev.Pollution.getTextList(cI||cn);

if(cJ){return cp+cJ;
}else{return G;
}},extract:function(cK){var cM=[];
var cL=qx.dev.Pollution.ignore[cK];
if((qx.core.Environment.get(cm)==cf)){if(cK==cn){cL=cL.slice(0);

for(var cN=0;cN<window.length;cN++){cL.push(cl+cN);
}}}var cO=qx.dev.Pollution.names[cK];

for(var cP in cO){try{if(qx.core.Environment.get(cm)==cf||qx.core.Environment.get(cm)==bV){if(cK==cn&&cP==bt){continue;
}}if(typeof cO[cP]==cb||cO[cP]===null){continue;
}if(typeof cO[cP]==cg&&cO[cP].toString().indexOf(br)!=-1){continue;
}if(typeof cO[cP].constructor==cg){if((cO[cP].constructor.toString().indexOf(br)!=-1)||(cO[cP].constructor.toString().indexOf(bF)!=-1)){continue;
}}if(qx.lang.Array.contains(cL,cP)){continue;
}}catch(cQ){continue;
}cM.push({"key":cP,"value":cO[cP]});
}return cM;
},getHtmlTable:function(cR){var cT=[];
var cS=bh;
var cV=cu;
var cW=bB;
cT.push(M);
var cU=this.extract(cR);

for(var i=0;i<cU.length;i++){cT.push(cS+cU[i].key+cV+cU[i].value+cW);
}cT.push(bg);
return cT.join(cl);
},getTextList:function(cX){var da=[];
var db=bb;
var dc=bc;
var cY=this.extract(cX);

for(var i=0;i<cY.length;i++){da.push(cY[i].key+db+cY[i].value+dc);
}return da.join(cl);
}}});
})();


qx.$$loader.init();

