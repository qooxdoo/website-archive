(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!window.qxsettings) qxsettings = {};
var settings = {"qx.application":"portal.Application","qx.theme":"qx.theme.Modern","qx.version":"1.2.1"};
for (var k in settings) qxsettings[k] = settings[k];

if (!window.qxvariants) qxvariants = {};
var variants = {"qx.debug":"off"};
for (var k in variants) qxvariants[k] = variants[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"__out__":{"sourceUri":"script"},"portal":{"resourceUri":"resource","sourceUri":"script","version":"trunk"},"qx":{"resourceUri":"resource","sourceUri":"script","version":"1.2.1"}};
for (var k in libinfo) qx.$$libraries[k] = libinfo[k];

qx.$$resources = {};
qx.$$translations = {};
qx.$$locales = {};
qx.$$packageData = {};

qx.$$loader = {
  parts : {"boot":[0]},
  uris : [["__out__:portal.js"]],
  urisBefore : [],
  packageHashes : {"0":"e39d5f00e8b3"},
  boot : "boot",
  closureParts : {},
  bootIsInline : true,
  addNoCacheParam : false,
  
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

qx.$$packageData['e39d5f00e8b3']={"locales":{},"resources":{"portal/css/style.css":"portal","portal/data/boxData.js":"portal","qx/decoration/Modern/app-header.png":[110,20,"png","qx"],"qx/decoration/Modern/arrows-combined.png":[87,8,"png","qx"],"qx/decoration/Modern/arrows/down-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-74,0],"qx/decoration/Modern/arrows/down-small-invert.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-69,0],"qx/decoration/Modern/arrows/down-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-49,0],"qx/decoration/Modern/arrows/down.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-20,0],"qx/decoration/Modern/arrows/forward.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-59,0],"qx/decoration/Modern/arrows/left-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",0,0],"qx/decoration/Modern/arrows/left.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-44,0],"qx/decoration/Modern/arrows/rewind.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-10,0],"qx/decoration/Modern/arrows/right-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-5,0],"qx/decoration/Modern/arrows/right.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-54,0],"qx/decoration/Modern/arrows/up-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-28,0],"qx/decoration/Modern/arrows/up-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-82,0],"qx/decoration/Modern/arrows/up.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-36,0],"qx/decoration/Modern/button-lr-combined.png":[72,52,"png","qx"],"qx/decoration/Modern/button-tb-combined.png":[4,216,"png","qx"],"qx/decoration/Modern/checkradio-combined.png":[504,14,"png","qx"],"qx/decoration/Modern/colorselector-combined.gif":[46,11,"gif","qx"],"qx/decoration/Modern/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Modern/colorselector/brightness-handle.gif":[35,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",0,0],"qx/decoration/Modern/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Modern/colorselector/huesaturation-handle.gif":[11,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",-35,0],"qx/decoration/Modern/cursors-combined.gif":[71,20,"gif","qx"],"qx/decoration/Modern/cursors/alias.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-52,0],"qx/decoration/Modern/cursors/copy.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-33,0],"qx/decoration/Modern/cursors/move.gif":[13,9,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-20,0],"qx/decoration/Modern/cursors/nodrop.gif":[20,20,"gif","qx","qx/decoration/Modern/cursors-combined.gif",0,0],"qx/decoration/Modern/form/button-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-72],"qx/decoration/Modern/form/button-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-204],"qx/decoration/Modern/form/button-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-188],"qx/decoration/Modern/form/button-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-36],"qx/decoration/Modern/form/button-checked-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-84],"qx/decoration/Modern/form/button-checked-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-184],"qx/decoration/Modern/form/button-checked-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-156],"qx/decoration/Modern/form/button-checked-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-208],"qx/decoration/Modern/form/button-checked-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-160],"qx/decoration/Modern/form/button-checked-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-40,0],"qx/decoration/Modern/form/button-checked-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-32,0],"qx/decoration/Modern/form/button-checked-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-28],"qx/decoration/Modern/form/button-checked-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-24],"qx/decoration/Modern/form/button-checked-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-48],"qx/decoration/Modern/form/button-checked-focused.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-checked-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-16,0],"qx/decoration/Modern/form/button-checked-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-60,0],"qx/decoration/Modern/form/button-checked-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-140],"qx/decoration/Modern/form/button-checked-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-56],"qx/decoration/Modern/form/button-checked-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-112],"qx/decoration/Modern/form/button-checked.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-disabled-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-40],"qx/decoration/Modern/form/button-disabled-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-136],"qx/decoration/Modern/form/button-disabled-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-16],"qx/decoration/Modern/form/button-disabled-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-disabled-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-68,0],"qx/decoration/Modern/form/button-disabled-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-4,0],"qx/decoration/Modern/form/button-disabled-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-116],"qx/decoration/Modern/form/button-disabled-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-168],"qx/decoration/Modern/form/button-disabled-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-60],"qx/decoration/Modern/form/button-disabled.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-68],"qx/decoration/Modern/form/button-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-144],"qx/decoration/Modern/form/button-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-8],"qx/decoration/Modern/form/button-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-24,0],"qx/decoration/Modern/form/button-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-44,0],"qx/decoration/Modern/form/button-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-192],"qx/decoration/Modern/form/button-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-148],"qx/decoration/Modern/form/button-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-104],"qx/decoration/Modern/form/button-focused.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-hovered-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-108],"qx/decoration/Modern/form/button-hovered-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-32],"qx/decoration/Modern/form/button-hovered-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-128],"qx/decoration/Modern/form/button-hovered-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-hovered-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-20,0],"qx/decoration/Modern/form/button-hovered-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-48,0],"qx/decoration/Modern/form/button-hovered-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-44],"qx/decoration/Modern/form/button-hovered-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-76],"qx/decoration/Modern/form/button-hovered-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-88],"qx/decoration/Modern/form/button-hovered.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-56,0],"qx/decoration/Modern/form/button-preselected-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-124],"qx/decoration/Modern/form/button-preselected-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-176],"qx/decoration/Modern/form/button-preselected-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-200],"qx/decoration/Modern/form/button-preselected-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,0],"qx/decoration/Modern/form/button-preselected-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-4],"qx/decoration/Modern/form/button-preselected-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-152],"qx/decoration/Modern/form/button-preselected-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-28,0],"qx/decoration/Modern/form/button-preselected-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-36,0],"qx/decoration/Modern/form/button-preselected-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-196],"qx/decoration/Modern/form/button-preselected-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-164],"qx/decoration/Modern/form/button-preselected-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-212],"qx/decoration/Modern/form/button-preselected-focused.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-preselected-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-8,0],"qx/decoration/Modern/form/button-preselected-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-64,0],"qx/decoration/Modern/form/button-preselected-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-96],"qx/decoration/Modern/form/button-preselected-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-80],"qx/decoration/Modern/form/button-preselected-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-132],"qx/decoration/Modern/form/button-preselected.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-pressed-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-12],"qx/decoration/Modern/form/button-pressed-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-52],"qx/decoration/Modern/form/button-pressed-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-20],"qx/decoration/Modern/form/button-pressed-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-pressed-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-52,0],"qx/decoration/Modern/form/button-pressed-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-12,0],"qx/decoration/Modern/form/button-pressed-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-100],"qx/decoration/Modern/form/button-pressed-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-172],"qx/decoration/Modern/form/button-pressed-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-64],"qx/decoration/Modern/form/button-pressed.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",0,0],"qx/decoration/Modern/form/button-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-92],"qx/decoration/Modern/form/button-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-120],"qx/decoration/Modern/form/button-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-180],"qx/decoration/Modern/form/button.png":[80,60,"png","qx"],"qx/decoration/Modern/form/checkbox-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-126,0],"qx/decoration/Modern/form/checkbox-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-322,0],"qx/decoration/Modern/form/checkbox-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-294,0],"qx/decoration/Modern/form/checkbox-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-364,0],"qx/decoration/Modern/form/checkbox-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-490,0],"qx/decoration/Modern/form/checkbox-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-224,0],"qx/decoration/Modern/form/checkbox-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-378,0],"qx/decoration/Modern/form/checkbox-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-84,0],"qx/decoration/Modern/form/checkbox-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-182,0],"qx/decoration/Modern/form/checkbox-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-42,0],"qx/decoration/Modern/form/checkbox-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-392,0],"qx/decoration/Modern/form/checkbox-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-210,0],"qx/decoration/Modern/form/checkbox-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-14,0],"qx/decoration/Modern/form/checkbox-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-238,0],"qx/decoration/Modern/form/checkbox-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-462,0],"qx/decoration/Modern/form/checkbox-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-112,0],"qx/decoration/Modern/form/checkbox-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-448,0],"qx/decoration/Modern/form/checkbox.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-140,0],"qx/decoration/Modern/form/input-focused.png":[40,12,"png","qx"],"qx/decoration/Modern/form/input.png":[84,12,"png","qx"],"qx/decoration/Modern/form/radiobutton-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-196,0],"qx/decoration/Modern/form/radiobutton-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-168,0],"qx/decoration/Modern/form/radiobutton-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-98,0],"qx/decoration/Modern/form/radiobutton-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-308,0],"qx/decoration/Modern/form/radiobutton-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-406,0],"qx/decoration/Modern/form/radiobutton-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-28,0],"qx/decoration/Modern/form/radiobutton-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-350,0],"qx/decoration/Modern/form/radiobutton-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-266,0],"qx/decoration/Modern/form/radiobutton-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-252,0],"qx/decoration/Modern/form/radiobutton-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-336,0],"qx/decoration/Modern/form/radiobutton-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-476,0],"qx/decoration/Modern/form/radiobutton-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-420,0],"qx/decoration/Modern/form/radiobutton-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-56,0],"qx/decoration/Modern/form/radiobutton-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",0,0],"qx/decoration/Modern/form/radiobutton-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-154,0],"qx/decoration/Modern/form/radiobutton-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-434,0],"qx/decoration/Modern/form/radiobutton-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-280,0],"qx/decoration/Modern/form/radiobutton.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-70,0],"qx/decoration/Modern/form/tooltip-error-arrow.png":[11,14,"png","qx"],"qx/decoration/Modern/form/tooltip-error-b.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-30],"qx/decoration/Modern/form/tooltip-error-bl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-24],"qx/decoration/Modern/form/tooltip-error-br.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-c.png":[40,18,"png","qx"],"qx/decoration/Modern/form/tooltip-error-l.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",-6,0],"qx/decoration/Modern/form/tooltip-error-r.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-t.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-6],"qx/decoration/Modern/form/tooltip-error-tl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-18],"qx/decoration/Modern/form/tooltip-error-tr.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-12],"qx/decoration/Modern/form/tooltip-error.png":[127,30,"png","qx"],"qx/decoration/Modern/groupbox-lr-combined.png":[8,51,"png","qx"],"qx/decoration/Modern/groupbox-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-b.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-12],"qx/decoration/Modern/groupbox/groupbox-bl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-16],"qx/decoration/Modern/groupbox/groupbox-br.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-8],"qx/decoration/Modern/groupbox/groupbox-c.png":[40,51,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-l.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",-4,0],"qx/decoration/Modern/groupbox/groupbox-r.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-t.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-4],"qx/decoration/Modern/groupbox/groupbox-tl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-tr.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-20],"qx/decoration/Modern/groupbox/groupbox.png":[255,59,"png","qx"],"qx/decoration/Modern/menu-background-combined.png":[80,49,"png","qx"],"qx/decoration/Modern/menu-checkradio-combined.gif":[64,7,"gif","qx"],"qx/decoration/Modern/menu/background.png":[40,49,"png","qx","qx/decoration/Modern/menu-background-combined.png",-40,0],"qx/decoration/Modern/menu/bar-background.png":[40,20,"png","qx","qx/decoration/Modern/menu-background-combined.png",0,0],"qx/decoration/Modern/menu/checkbox-invert.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-16,0],"qx/decoration/Modern/menu/checkbox.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-48,0],"qx/decoration/Modern/menu/radiobutton-invert.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-32,0],"qx/decoration/Modern/menu/radiobutton.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",0,0],"qx/decoration/Modern/pane-lr-combined.png":[12,238,"png","qx"],"qx/decoration/Modern/pane-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/pane/pane-b.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-30],"qx/decoration/Modern/pane/pane-bl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-18],"qx/decoration/Modern/pane/pane-br.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-12],"qx/decoration/Modern/pane/pane-c.png":[40,238,"png","qx"],"qx/decoration/Modern/pane/pane-l.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",0,0],"qx/decoration/Modern/pane/pane-r.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",-6,0],"qx/decoration/Modern/pane/pane-t.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,0],"qx/decoration/Modern/pane/pane-tl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-24],"qx/decoration/Modern/pane/pane-tr.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-6],"qx/decoration/Modern/pane/pane.png":[185,250,"png","qx"],"qx/decoration/Modern/scrollbar-combined.png":[54,12,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-horizontal.png":[76,15,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-horizontal.png":[19,10,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-vertical.png":[10,19,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-vertical.png":[15,76,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-horizontal.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-34,0],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-vertical.png":[10,12,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-6,0],"qx/decoration/Modern/scrollbar/scrollbar-down.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-28,0],"qx/decoration/Modern/scrollbar/scrollbar-left.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-50,0],"qx/decoration/Modern/scrollbar/scrollbar-right.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-46,0],"qx/decoration/Modern/scrollbar/scrollbar-up.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",0,0],"qx/decoration/Modern/scrollbar/slider-knob-background.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-16,0],"qx/decoration/Modern/selection.png":[110,20,"png","qx"],"qx/decoration/Modern/shadow-lr-combined.png":[30,382,"png","qx"],"qx/decoration/Modern/shadow-small-lr-combined.png":[10,136,"png","qx"],"qx/decoration/Modern/shadow-small-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/shadow-tb-combined.png":[15,90,"png","qx"],"qx/decoration/Modern/shadow/shadow-b.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-30],"qx/decoration/Modern/shadow/shadow-bl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-br.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-45],"qx/decoration/Modern/shadow/shadow-c.png":[40,382,"png","qx"],"qx/decoration/Modern/shadow/shadow-l.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-r.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",-15,0],"qx/decoration/Modern/shadow/shadow-small-b.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-20],"qx/decoration/Modern/shadow/shadow-small-bl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-small-br.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-10],"qx/decoration/Modern/shadow/shadow-small-c.png":[40,136,"png","qx"],"qx/decoration/Modern/shadow/shadow-small-l.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-r.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",-5,0],"qx/decoration/Modern/shadow/shadow-small-t.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-5],"qx/decoration/Modern/shadow/shadow-small-tl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-tr.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-25],"qx/decoration/Modern/shadow/shadow-small.png":[114,146,"png","qx"],"qx/decoration/Modern/shadow/shadow-t.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-60],"qx/decoration/Modern/shadow/shadow-tl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-75],"qx/decoration/Modern/shadow/shadow-tr.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,0],"qx/decoration/Modern/shadow/shadow.png":[381,412,"png","qx"],"qx/decoration/Modern/splitpane-knobs-combined.png":[8,9,"png","qx"],"qx/decoration/Modern/splitpane/knob-horizontal.png":[1,8,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,-1],"qx/decoration/Modern/splitpane/knob-vertical.png":[8,1,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,0],"qx/decoration/Modern/table-combined.png":[94,18,"png","qx"],"qx/decoration/Modern/table/ascending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",0,0],"qx/decoration/Modern/table/boolean-false.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-80,0],"qx/decoration/Modern/table/boolean-true.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-26,0],"qx/decoration/Modern/table/descending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",-18,0],"qx/decoration/Modern/table/header-cell.png":[40,18,"png","qx","qx/decoration/Modern/table-combined.png",-40,0],"qx/decoration/Modern/table/select-column-order.png":[10,9,"png","qx","qx/decoration/Modern/table-combined.png",-8,0],"qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png":[10,14,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-lr-combined.png":[10,12,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-pane-lr-combined.png":[60,2,"png","qx"],"qx/decoration/Modern/tabview-pane-tb-combined.png":[30,180,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-bottom-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-bottom-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-bottom-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-l.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-r.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-bottom-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-bottom-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-active.png":[49,24,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-bottom-inactive.png":[45,21,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-left-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-left-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-left-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-left-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-left-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-left-active.png":[22,47,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-inactive.png":[20,45,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-right-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-right-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-right-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-right-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-right-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-right-active.png":[22,47,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-inactive.png":[20,45,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-top-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-top-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-top-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-active-l.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-r.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-top-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-top-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-top-active.png":[48,22,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-top-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-top-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-inactive.png":[45,21,"png","qx"],"qx/decoration/Modern/tabview/tabview-pane-b.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-60],"qx/decoration/Modern/tabview/tabview-pane-bl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-br.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-120],"qx/decoration/Modern/tabview/tabview-pane-c.png":[40,120,"png","qx"],"qx/decoration/Modern/tabview/tabview-pane-l.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-r.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",-30,0],"qx/decoration/Modern/tabview/tabview-pane-t.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-150],"qx/decoration/Modern/tabview/tabview-pane-tl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-30],"qx/decoration/Modern/tabview/tabview-pane-tr.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-90],"qx/decoration/Modern/tabview/tabview-pane.png":[185,250,"png","qx"],"qx/decoration/Modern/toolbar-combined.png":[80,130,"png","qx"],"qx/decoration/Modern/toolbar/toolbar-gradient-blue.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",-40,0],"qx/decoration/Modern/toolbar/toolbar-gradient.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",0,0],"qx/decoration/Modern/toolbar/toolbar-handle-knob.gif":[1,8,"gif","qx"],"qx/decoration/Modern/toolbar/toolbar-part.gif":[7,1,"gif","qx"],"qx/decoration/Modern/tooltip-error-lr-combined.png":[12,18,"png","qx"],"qx/decoration/Modern/tooltip-error-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/tree-combined.png":[32,8,"png","qx"],"qx/decoration/Modern/tree/closed-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-24,0],"qx/decoration/Modern/tree/closed.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-16,0],"qx/decoration/Modern/tree/open-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-8,0],"qx/decoration/Modern/tree/open.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",0,0],"qx/decoration/Modern/window-captionbar-buttons-combined.png":[108,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-active-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-inactive-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-active-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-inactive-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-statusbar-lr-combined.png":[8,7,"png","qx"],"qx/decoration/Modern/window-statusbar-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/window/captionbar-active-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-18],"qx/decoration/Modern/window/captionbar-active-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-active-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-active-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-active-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-active-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-6],"qx/decoration/Modern/window/captionbar-active-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-active.png":[69,21,"png","qx"],"qx/decoration/Modern/window/captionbar-inactive-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-inactive-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-6],"qx/decoration/Modern/window/captionbar-inactive-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-inactive-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-inactive-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-inactive-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-inactive-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-18],"qx/decoration/Modern/window/captionbar-inactive.png":[69,21,"png","qx"],"qx/decoration/Modern/window/close-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-27,0],"qx/decoration/Modern/window/close-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-9,0],"qx/decoration/Modern/window/close-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-90,0],"qx/decoration/Modern/window/maximize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-18,0],"qx/decoration/Modern/window/maximize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-81,0],"qx/decoration/Modern/window/maximize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-54,0],"qx/decoration/Modern/window/minimize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-63,0],"qx/decoration/Modern/window/minimize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-72,0],"qx/decoration/Modern/window/minimize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-36,0],"qx/decoration/Modern/window/restore-active-hovered.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",0,0],"qx/decoration/Modern/window/restore-active.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-99,0],"qx/decoration/Modern/window/restore-inactive.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-45,0],"qx/decoration/Modern/window/statusbar-b.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-16],"qx/decoration/Modern/window/statusbar-bl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-20],"qx/decoration/Modern/window/statusbar-br.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-4],"qx/decoration/Modern/window/statusbar-c.png":[40,7,"png","qx"],"qx/decoration/Modern/window/statusbar-l.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",-4,0],"qx/decoration/Modern/window/statusbar-r.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",0,0],"qx/decoration/Modern/window/statusbar-t.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,0],"qx/decoration/Modern/window/statusbar-tl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-8],"qx/decoration/Modern/window/statusbar-tr.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-12],"qx/decoration/Modern/window/statusbar.png":[369,15,"png","qx"],"qx/icon/Tango/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/utilities-color-chooser.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/office-document.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder-open.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder.png":[16,16,"png","qx"],"qx/icon/Tango/22/mimetypes/office-document.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder-open.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder.png":[22,22,"png","qx"],"qx/icon/Tango/32/mimetypes/office-document.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder-open.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder.png":[32,32,"png","qx"]},"translations":{}};
(function(){var br="toString",bq=".",bp="default",bo="Object",bn='"',bm="Array",bl="()",bk="String",bj="Function",bi=".prototype",bQ="function",bP="Boolean",bO="Error",bN="constructor",bM="warn",bL="hasOwnProperty",bK="string",bJ="toLocaleString",bI="RegExp",bH='\", "',by="info",bz="BROKEN_IE",bw="isPrototypeOf",bx="Date",bu="",bv="qx.Bootstrap",bs="]",bt="Class",bA="error",bB="[Class ",bD="valueOf",bC="Number",bF="count",bE="debug",bG="ES5";
if(!window.qx){window.qx={};
}qx.Bootstrap={genericToString:function(){return bB+this.classname+bs;
},createNamespace:function(name,D){var F=name.split(bq);
var parent=window;
var E=F[0];

for(var i=0,G=F.length-1;i<G;i++,E=F[i]){if(!parent[E]){parent=parent[E]={};
}else{parent=parent[E];
}}parent[E]=D;
return E;
},setDisplayName:function(w,x,name){w.displayName=x+bq+name+bl;
},setDisplayNames:function(bR,bS){for(var name in bR){var bT=bR[name];

if(bT instanceof Function){bT.displayName=bS+bq+name+bl;
}}},define:function(name,cb){if(!cb){var cb={statics:{}};
}var cg;
var ce=null;
qx.Bootstrap.setDisplayNames(cb.statics,name);

if(cb.members||cb.extend){qx.Bootstrap.setDisplayNames(cb.members,name+bi);
cg=cb.construct||new Function;

if(cb.extend){this.extendClass(cg,cg,cb.extend,name,cf);
}var cc=cb.statics||{};
for(var i=0,ch=qx.Bootstrap.getKeys(cc),l=ch.length;i<l;i++){var ci=ch[i];
cg[ci]=cc[ci];
}ce=cg.prototype;
var cd=cb.members||{};
for(var i=0,ch=qx.Bootstrap.getKeys(cd),l=ch.length;i<l;i++){var ci=ch[i];
ce[ci]=cd[ci];
}}else{cg=cb.statics||{};
}var cf=this.createNamespace(name,cg);
cg.name=cg.classname=name;
cg.basename=cf;
cg.$$type=bt;
if(!cg.hasOwnProperty(br)){cg.toString=this.genericToString;
}if(cb.defer){cb.defer(cg,ce);
}qx.Bootstrap.$$registry[name]=cb.statics;
return cg;
}};
qx.Bootstrap.define(bv,{statics:{LOADSTART:qx.$$start||new Date(),createNamespace:qx.Bootstrap.createNamespace,define:qx.Bootstrap.define,setDisplayName:qx.Bootstrap.setDisplayName,setDisplayNames:qx.Bootstrap.setDisplayNames,genericToString:qx.Bootstrap.genericToString,extendClass:function(R,S,T,name,U){var X=T.prototype;
var W=new Function;
W.prototype=X;
var V=new W;
R.prototype=V;
V.name=V.classname=name;
V.basename=U;
S.base=R.superclass=T;
S.self=R.constructor=V.constructor=R;
},getByName:function(name){return qx.Bootstrap.$$registry[name];
},$$registry:{},objectGetLength:({"count":function(v){return v.__count__;
},"default":function(bg){var length=0;

for(var bh in bg){length++;
}return length;
}})[(({}).__count__==0)?bF:bp],objectMergeWith:function(d,e,f){if(f===undefined){f=true;
}
for(var g in e){if(f||d[g]===undefined){d[g]=e[g];
}}return d;
},__a:[bw,bL,bJ,br,bD,bN],getKeys:({"ES5":Object.keys,"BROKEN_IE":function(h){var j=[];
var m=Object.prototype.hasOwnProperty;

for(var n in h){if(m.call(h,n)){j.push(n);
}}var k=qx.Bootstrap.__a;

for(var i=0,a=k,l=a.length;i<l;i++){if(m.call(h,a[i])){j.push(a[i]);
}}return j;
},"default":function(z){var A=[];
var B=Object.prototype.hasOwnProperty;

for(var C in z){if(B.call(z,C)){A.push(C);
}}return A;
}})[typeof (Object.keys)==
bQ?bG:
(function(){for(var H in {toString:1}){return H;
}})()!==br?bz:bp],getKeysAsString:function(b){var c=qx.Bootstrap.getKeys(b);

if(c.length==0){return bu;
}return bn+c.join(bH)+bn;
},__b:{"[object String]":bk,"[object Array]":bm,"[object Object]":bo,"[object RegExp]":bI,"[object Number]":bC,"[object Boolean]":bP,"[object Date]":bx,"[object Function]":bj,"[object Error]":bO},bind:function(p,self,q){var r=Array.prototype.slice.call(arguments,2,arguments.length);
return function(){var Y=Array.prototype.slice.call(arguments,0,arguments.length);
return p.apply(self,r.concat(Y));
};
},firstUp:function(bX){return bX.charAt(0).toUpperCase()+bX.substr(1);
},firstLow:function(ba){return ba.charAt(0).toLowerCase()+ba.substr(1);
},getClass:function(K){var L=Object.prototype.toString.call(K);
return (qx.Bootstrap.__b[L]||L.slice(8,-1));
},isString:function(o){return (o!==null&&(typeof o===bK||qx.Bootstrap.getClass(o)==bk||o instanceof String||(!!o&&!!o.$$isString)));
},isArray:function(y){return (y!==null&&(y instanceof Array||(y&&qx.data&&qx.data.IListData&&qx.Bootstrap.hasInterface(y.constructor,qx.data.IListData))||qx.Bootstrap.getClass(y)==bm||(!!y&&!!y.$$isArray)));
},isObject:function(s){return (s!==undefined&&s!==null&&qx.Bootstrap.getClass(s)==bo);
},isFunction:function(Q){return qx.Bootstrap.getClass(Q)==bj;
},classIsDefined:function(name){return qx.Bootstrap.getByName(name)!==undefined;
},getPropertyDefinition:function(bY,name){while(bY){if(bY.$$properties&&bY.$$properties[name]){return bY.$$properties[name];
}bY=bY.superclass;
}return null;
},hasProperty:function(t,name){return !!qx.Bootstrap.getPropertyDefinition(t,name);
},getEventType:function(u,name){var u=u.constructor;

while(u.superclass){if(u.$$events&&u.$$events[name]!==undefined){return u.$$events[name];
}u=u.superclass;
}return null;
},supportsEvent:function(bW,name){return !!qx.Bootstrap.getEventType(bW,name);
},getByInterface:function(bd,be){var bf,i,l;

while(bd){if(bd.$$implements){bf=bd.$$flatImplements;

for(i=0,l=bf.length;i<l;i++){if(bf[i]===be){return bd;
}}}bd=bd.superclass;
}return null;
},hasInterface:function(bU,bV){return !!qx.Bootstrap.getByInterface(bU,bV);
},getMixins:function(M){var N=[];

while(M){if(M.$$includes){N.push.apply(N,M.$$flatIncludes);
}M=M.superclass;
}return N;
},$$logs:[],debug:function(cj,ck){qx.Bootstrap.$$logs.push([bE,arguments]);
},info:function(O,P){qx.Bootstrap.$$logs.push([by,arguments]);
},warn:function(I,J){qx.Bootstrap.$$logs.push([bM,arguments]);
},error:function(bb,bc){qx.Bootstrap.$$logs.push([bA,arguments]);
},trace:function(ca){}}});
})();
(function(){var h="qx.allowUrlSettings",g="&",f="qx.core.Setting",e="qx.allowUrlVariants",d="qx.propertyDebugLevel",c="qxsetting",b=":",a=".";
qx.Bootstrap.define(f,{statics:{__c:{},define:function(o,p){if(p===undefined){throw new Error('Default value of setting "'+o+'" must be defined!');
}
if(!this.__c[o]){this.__c[o]={};
}else if(this.__c[o].defaultValue!==undefined){throw new Error('Setting "'+o+'" is already defined!');
}this.__c[o].defaultValue=p;
},get:function(q){var r=this.__c[q];

if(r===undefined){throw new Error('Setting "'+q+'" is not defined.');
}
if(r.value!==undefined){return r.value;
}return r.defaultValue;
},set:function(k,l){if((k.split(a)).length<2){throw new Error('Malformed settings key "'+k+'". Must be following the schema "namespace.key".');
}
if(!this.__c[k]){this.__c[k]={};
}this.__c[k].value=l;
},__d:function(){if(window.qxsettings){for(var t in window.qxsettings){this.set(t,window.qxsettings[t]);
}window.qxsettings=undefined;

try{delete window.qxsettings;
}catch(j){}this.__e();
}},__e:function(){if(this.get(h)!=true){return;
}var n=document.location.search.slice(1).split(g);

for(var i=0;i<n.length;i++){var m=n[i].split(b);

if(m.length!=3||m[0]!=c){continue;
}this.set(m[1],decodeURIComponent(m[2]));
}}},defer:function(s){s.define(h,false);
s.define(e,false);
s.define(d,0);
s.__d();
}});
})();
(function(){var n="function",m="Boolean",k="qx.Interface",j="]",h="toggle",g="Interface",f="is",e="[Interface ";
qx.Bootstrap.define(k,{statics:{define:function(name,G){if(G){if(G.extend&&!(G.extend instanceof Array)){G.extend=[G.extend];
}{};
var H=G.statics?G.statics:{};
if(G.extend){H.$$extends=G.extend;
}
if(G.properties){H.$$properties=G.properties;
}
if(G.members){H.$$members=G.members;
}
if(G.events){H.$$events=G.events;
}}else{var H={};
}H.$$type=g;
H.name=name;
H.toString=this.genericToString;
H.basename=qx.Bootstrap.createNamespace(name,H);
qx.Interface.$$registry[name]=H;
return H;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(u){if(!u){return [];
}var v=u.concat();

for(var i=0,l=u.length;i<l;i++){if(u[i].$$extends){v.push.apply(v,this.flatten(u[i].$$extends));
}}return v;
},__f:function(I,J,K,L){var P=K.$$members;

if(P){for(var O in P){if(qx.Bootstrap.isFunction(P[O])){var N=this.__g(J,O);
var M=N||qx.Bootstrap.isFunction(I[O]);

if(!M){throw new Error('Implementation of method "'+O+'" is missing in class "'+J.classname+'" required by interface "'+K.name+'"');
}var Q=L===true&&!N&&!qx.Bootstrap.hasInterface(J,K);

if(Q){I[O]=this.__j(K,I[O],O,P[O]);
}}else{if(typeof I[O]===undefined){if(typeof I[O]!==n){throw new Error('Implementation of member "'+O+'" is missing in class "'+J.classname+'" required by interface "'+K.name+'"');
}}}}}},__g:function(o,p){var t=p.match(/^(is|toggle|get|set|reset)(.*)$/);

if(!t){return false;
}var q=qx.Bootstrap.firstLow(t[2]);
var r=qx.Bootstrap.getPropertyDefinition(o,q);

if(!r){return false;
}var s=t[0]==f||t[0]==h;

if(s){return qx.Bootstrap.getPropertyDefinition(o,q).check==m;
}return true;
},__h:function(w,x){if(x.$$properties){for(var y in x.$$properties){if(!qx.Bootstrap.getPropertyDefinition(w,y)){throw new Error('The property "'+y+'" is not supported by Class "'+w.classname+'"!');
}}}},__i:function(D,E){if(E.$$events){for(var F in E.$$events){if(!qx.Bootstrap.supportsEvent(D,F)){throw new Error('The event "'+F+'" is not supported by Class "'+D.classname+'"!');
}}}},assertObject:function(a,b){var d=a.constructor;
this.__f(a,d,b,false);
this.__h(d,b);
this.__i(d,b);
var c=b.$$extends;

if(c){for(var i=0,l=c.length;i<l;i++){this.assertObject(a,c[i]);
}}},assert:function(z,A,B){this.__f(z.prototype,z,A,B);
this.__h(z,A);
this.__i(z,A);
var C=A.$$extends;

if(C){for(var i=0,l=C.length;i<l;i++){this.assert(z,C[i],B);
}}},genericToString:function(){return e+this.name+j;
},$$registry:{},__j:function(){},__k:null,__l:function(){}}});
})();
(function(){var g="qx.Mixin",f=".prototype",e="constructor",d="[Mixin ",c="]",b="destruct",a="Mixin";
qx.Bootstrap.define(g,{statics:{define:function(name,h){if(h){if(h.include&&!(h.include instanceof Array)){h.include=[h.include];
}{};
var k=h.statics?h.statics:{};
qx.Bootstrap.setDisplayNames(k,name);

for(var j in k){if(k[j] instanceof Function){k[j].$$mixin=k;
}}if(h.construct){k.$$constructor=h.construct;
qx.Bootstrap.setDisplayName(h.construct,name,e);
}
if(h.include){k.$$includes=h.include;
}
if(h.properties){k.$$properties=h.properties;
}
if(h.members){k.$$members=h.members;
qx.Bootstrap.setDisplayNames(h.members,name+f);
}
for(var j in k.$$members){if(k.$$members[j] instanceof Function){k.$$members[j].$$mixin=k;
}}
if(h.events){k.$$events=h.events;
}
if(h.destruct){k.$$destructor=h.destruct;
qx.Bootstrap.setDisplayName(h.destruct,name,b);
}}else{var k={};
}k.$$type=a;
k.name=name;
k.toString=this.genericToString;
k.basename=qx.Bootstrap.createNamespace(name,k);
this.$$registry[name]=k;
return k;
},checkCompatibility:function(r){var u=this.flatten(r);
var v=u.length;

if(v<2){return true;
}var y={};
var x={};
var w={};
var t;

for(var i=0;i<v;i++){t=u[i];

for(var s in t.events){if(w[s]){throw new Error('Conflict between mixin "'+t.name+'" and "'+w[s]+'" in member "'+s+'"!');
}w[s]=t.name;
}
for(var s in t.properties){if(y[s]){throw new Error('Conflict between mixin "'+t.name+'" and "'+y[s]+'" in property "'+s+'"!');
}y[s]=t.name;
}
for(var s in t.members){if(x[s]){throw new Error('Conflict between mixin "'+t.name+'" and "'+x[s]+'" in member "'+s+'"!');
}x[s]=t.name;
}}return true;
},isCompatible:function(m,n){var o=qx.Bootstrap.getMixins(n);
o.push(m);
return qx.Mixin.checkCompatibility(o);
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(p){if(!p){return [];
}var q=p.concat();

for(var i=0,l=p.length;i<l;i++){if(p[i].$$includes){q.push.apply(q,this.flatten(p[i].$$includes));
}}return q;
},genericToString:function(){return d+this.name+c;
},$$registry:{},__m:null,__n:function(){}}});
})();
(function(){var dp=';',dn='return this.',dm="string",dl="boolean",dk="",dj="setThemed",di='!==undefined)',dh="this.",dg="set",df="resetThemed",cT="setRuntime",cS="init",cR='else if(this.',cQ="resetRuntime",cP="reset",cO="();",cN='else ',cM='if(this.',cL="return this.",cK="get",dw=";",dx="(a[",du=' of an instance of ',dv="refresh",ds=' is not (yet) ready!");',dt="]);",dq='qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)',dr='value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)',dy='value !== null && value.nodeType === 9 && value.documentElement',dz='value !== null && value.$$type === "Mixin"',cX='return init;',cW='var init=this.',da='value !== null && value.nodeType === 1 && value.attributes',cY="var parent = this.getLayoutParent();",dc="Error in property ",db="property",de='qx.core.Assert.assertInstance(value, Date, msg) || true',dd="if (!parent) return;",cV=" in method ",cU='qx.core.Assert.assertInstance(value, Error, msg) || true',bK='Undefined value is not allowed!',bL="inherit",bM='Is invalid!',bN="MSIE 6.0",bO="': ",bP=" of class ",bQ='value !== null && value.nodeType !== undefined',bR='value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',bS='qx.core.Assert.assertPositiveInteger(value, msg) || true',bT='if(init==qx.core.Property.$$inherit)init=null;',dD='value !== null && value.$$type === "Interface"',dC='var inherit=prop.$$inherit;',dB="var value = parent.",dA="$$useinit_",dH="(value);",dG='Requires exactly one argument!',dF="on",dE="$$runtime_",dJ="$$user_",dI='qx.core.Assert.assertArray(value, msg) || true',ct='qx.core.Assert.assertPositiveNumber(value, msg) || true',cu=".prototype",cr="Boolean",cs='return value;',cx='if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ',cy='Does not allow any arguments!',cv="()",cw="var a=arguments[0] instanceof Array?arguments[0]:arguments;",cp='value !== null && value.$$type === "Theme"',cq="())",cc='return null;',cb='qx.core.Assert.assertObject(value, msg) || true',ce='qx.core.Assert.assertString(value, msg) || true',cd="if (value===undefined) value = parent.",bX='value !== null && value.$$type === "Class"',bW='qx.core.Assert.assertFunction(value, msg) || true',ca=".",bY="object",bV="$$init_",bU="$$theme_",cD='qx.core.Assert.assertMap(value, msg) || true',cE="qx.aspects",cF='qx.core.Assert.assertNumber(value, msg) || true',cG='Null value is not allowed!',cz='qx.core.Assert.assertInteger(value, msg) || true',cA="value",cB="rv:1.8.1",cC="shorthand",cH='qx.core.Assert.assertInstance(value, RegExp, msg) || true',cI='value !== null && value.type !== undefined',cm='value !== null && value.document',cl='throw new Error("Property ',ck="(!this.",cj='qx.core.Assert.assertBoolean(value, msg) || true',ci="toggle",ch="$$inherit_",cg=" with incoming value '",cf="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));",co="qx.core.Property",cn="is",cJ='Could not change or apply init value after constructing phase!';
qx.Bootstrap.define(co,{statics:{__o:{"Boolean":cj,"String":ce,"Number":cF,"Integer":cz,"PositiveNumber":ct,"PositiveInteger":bS,"Error":cU,"RegExp":cH,"Object":cb,"Array":dI,"Map":cD,"Function":bW,"Date":de,"Node":bQ,"Element":da,"Document":dy,"Window":cm,"Event":cI,"Class":bX,"Mixin":dz,"Interface":dD,"Theme":cp,"Color":dq,"Decorator":bR,"Font":dr},__p:{"Node":true,"Element":true,"Document":true,"Window":true,"Event":true},$$inherit:bL,$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},set:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{name:dm,dereference:dl,inheritable:dl,nullable:dl,themeable:dl,refine:dl,init:null,apply:dm,event:dm,check:null,transform:dm,deferredInit:dl,validate:null},$$allowedGroupKeys:{name:dm,group:bY,mode:dm,themeable:dl},$$inheritable:{},__q:function(t){var u=this.__r(t);

if(!u.length){var v=qx.lang.Function.empty;
}else{v=this.__s(u);
}t.prototype.$$refreshInheritables=v;
},__r:function(bk){var bm=[];

while(bk){var bl=bk.$$properties;

if(bl){for(var name in this.$$inheritable){if(bl[name]&&bl[name].inheritable){bm.push(name);
}}}bk=bk.superclass;
}return bm;
},__s:function(bq){var bu=this.$$store.inherit;
var bt=this.$$store.init;
var bs=this.$$method.refresh;
var br=[cY,dd];

for(var i=0,l=bq.length;i<l;i++){var name=bq[i];
br.push(dB,bu[name],dw,cd,bt[name],dw,dh,bs[name],dH);
}return new Function(br.join(dk));
},attachRefreshInheritables:function(dW){dW.prototype.$$refreshInheritables=function(){qx.core.Property.__q(dW);
return this.$$refreshInheritables();
};
},attachMethods:function(r,name,s){s.group?this.__t(r,s,name):this.__u(r,s,name);
},__t:function(D,E,name){var L=qx.Bootstrap.firstUp(name);
var K=D.prototype;
var M=E.themeable===true;
{};
var N=[];
var H=[];

if(M){var F=[];
var J=[];
}var I=cw;
N.push(I);

if(M){F.push(I);
}
if(E.mode==cC){var G=cf;
N.push(G);

if(M){F.push(G);
}}
for(var i=0,a=E.group,l=a.length;i<l;i++){{};
N.push(dh,this.$$method.set[a[i]],dx,i,dt);
H.push(dh,this.$$method.reset[a[i]],cO);

if(M){{};
F.push(dh,this.$$method.setThemed[a[i]],dx,i,dt);
J.push(dh,this.$$method.resetThemed[a[i]],cO);
}}this.$$method.set[name]=dg+L;
K[this.$$method.set[name]]=new Function(N.join(dk));
this.$$method.reset[name]=cP+L;
K[this.$$method.reset[name]]=new Function(H.join(dk));

if(M){this.$$method.setThemed[name]=dj+L;
K[this.$$method.setThemed[name]]=new Function(F.join(dk));
this.$$method.resetThemed[name]=df+L;
K[this.$$method.resetThemed[name]]=new Function(J.join(dk));
}},__u:function(X,Y,name){var bb=qx.Bootstrap.firstUp(name);
var bd=X.prototype;
{};
if(Y.dereference===undefined&&typeof Y.check===dm){Y.dereference=this.__v(Y.check);
}var bc=this.$$method;
var ba=this.$$store;
ba.runtime[name]=dE+name;
ba.user[name]=dJ+name;
ba.theme[name]=bU+name;
ba.init[name]=bV+name;
ba.inherit[name]=ch+name;
ba.useinit[name]=dA+name;
bc.get[name]=cK+bb;
bd[bc.get[name]]=function(){return qx.core.Property.executeOptimizedGetter(this,X,name,cK);
};
bc.set[name]=dg+bb;
bd[bc.set[name]]=function(be){return qx.core.Property.executeOptimizedSetter(this,X,name,dg,arguments);
};
bc.reset[name]=cP+bb;
bd[bc.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,X,name,cP);
};

if(Y.inheritable||Y.apply||Y.event||Y.deferredInit){bc.init[name]=cS+bb;
bd[bc.init[name]]=function(x){return qx.core.Property.executeOptimizedSetter(this,X,name,cS,arguments);
};
}
if(Y.inheritable){bc.refresh[name]=dv+bb;
bd[bc.refresh[name]]=function(eb){return qx.core.Property.executeOptimizedSetter(this,X,name,dv,arguments);
};
}bc.setRuntime[name]=cT+bb;
bd[bc.setRuntime[name]]=function(bf){return qx.core.Property.executeOptimizedSetter(this,X,name,cT,arguments);
};
bc.resetRuntime[name]=cQ+bb;
bd[bc.resetRuntime[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,X,name,cQ);
};

if(Y.themeable){bc.setThemed[name]=dj+bb;
bd[bc.setThemed[name]]=function(w){return qx.core.Property.executeOptimizedSetter(this,X,name,dj,arguments);
};
bc.resetThemed[name]=df+bb;
bd[bc.resetThemed[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,X,name,df);
};
}
if(Y.check===cr){bd[ci+bb]=new Function(cL+bc.set[name]+ck+bc.get[name]+cq);
bd[cn+bb]=new Function(cL+bc.get[name]+cv);
}},__v:function(b){return !!this.__p[b];
},__w:function(bF){return this.__p[bF]||qx.Bootstrap.classIsDefined(bF)||(qx.Interface&&qx.Interface.isDefined(bF));
},__x:{0:cJ,1:dG,2:bK,3:cy,4:cG,5:bM},error:function(j,k,m,n,o){var p=j.constructor.classname;
var q=dc+m+bP+p+cV+this.$$method[n][m]+cg+o+bO;
throw new Error(q+(this.__x[k]||"Unknown reason: "+k));
},__y:function(R,S,name,T,U,V){var W=this.$$method[T][name];
{S[W]=new Function(cA,U.join(dk));
};
if(qx.core.Variant.isSet(cE,dF)){S[W]=qx.core.Aspect.wrap(R.classname+ca+W,S[W],db);
}qx.Bootstrap.setDisplayName(S[W],R.classname+cu,W);
if(V===undefined){return R[W]();
}else{return R[W](V[0]);
}},executeOptimizedGetter:function(dK,dL,name,dM){var dO=dL.$$properties[name];
var dQ=dL.prototype;
var dN=[];
var dP=this.$$store;
dN.push(cM,dP.runtime[name],di);
dN.push(dn,dP.runtime[name],dp);

if(dO.inheritable){dN.push(cR,dP.inherit[name],di);
dN.push(dn,dP.inherit[name],dp);
dN.push(cN);
}dN.push(cM,dP.user[name],di);
dN.push(dn,dP.user[name],dp);

if(dO.themeable){dN.push(cR,dP.theme[name],di);
dN.push(dn,dP.theme[name],dp);
}
if(dO.deferredInit&&dO.init===undefined){dN.push(cR,dP.init[name],di);
dN.push(dn,dP.init[name],dp);
}dN.push(cN);

if(dO.init!==undefined){if(dO.inheritable){dN.push(cW,dP.init[name],dp);

if(dO.nullable){dN.push(bT);
}else if(dO.init!==undefined){dN.push(dn,dP.init[name],dp);
}else{dN.push(cx,name,du,dL.classname,ds);
}dN.push(cX);
}else{dN.push(dn,dP.init[name],dp);
}}else if(dO.inheritable||dO.nullable){dN.push(cc);
}else{dN.push(cl,name,du,dL.classname,ds);
}return this.__y(dK,dQ,name,dM,dN);
},executeOptimizedSetter:function(bv,bw,name,bx,by){var bD=bw.$$properties[name];
var bC=bw.prototype;
var bA=[];
var bz=bx===dg||bx===dj||bx===cT||(bx===cS&&bD.init===undefined);
var bB=bD.apply||bD.event||bD.inheritable;
var bE=this.__z(bx,name);
this.__A(bA,bD,name,bx,bz);

if(bz){this.__B(bA,bw,bD,name);
}
if(bB){this.__C(bA,bz,bE,bx);
}
if(bD.inheritable){bA.push(dC);
}{};

if(!bB){this.__E(bA,name,bx,bz);
}else{this.__F(bA,bD,name,bx,bz);
}
if(bD.inheritable){this.__G(bA,bD,name,bx);
}else if(bB){this.__H(bA,bD,name,bx);
}
if(bB){this.__I(bA,bD,name);
if(bD.inheritable&&bC._getChildren){this.__J(bA,name);
}}if(bz){bA.push(cs);
}return this.__y(bv,bC,name,bx,bA,by);
},__z:function(dR,name){if(dR===cT||dR===cQ){var dS=this.$$store.runtime[name];
}else if(dR===dj||dR===df){dS=this.$$store.theme[name];
}else if(dR===cS){dS=this.$$store.init[name];
}else{dS=this.$$store.user[name];
}return dS;
},__A:function(bg,bh,name,bi,bj){{if(!bh.nullable||bh.check||bh.inheritable){bg.push('var prop=qx.core.Property;');
}if(bi==="set"){bg.push('if(value===undefined)prop.error(this,2,"',name,'","',bi,'",value);');
}};
},__B:function(O,P,Q,name){if(Q.transform){O.push('value=this.',Q.transform,'(value);');
}if(Q.validate){if(typeof Q.validate==="string"){O.push('this.',Q.validate,'(value);');
}else if(Q.validate instanceof Function){O.push(P.classname,'.$$properties.',name);
O.push('.validate.call(this, value);');
}}},__C:function(y,z,A,B){var C=(B==="reset"||B==="resetThemed"||B==="resetRuntime");

if(z){y.push('if(this.',A,'===value)return value;');
}else if(C){y.push('if(this.',A,'===undefined)return;');
}},__D:undefined,__E:function(bH,name,bI,bJ){if(bI==="setRuntime"){bH.push('this.',this.$$store.runtime[name],'=value;');
}else if(bI==="resetRuntime"){bH.push('if(this.',this.$$store.runtime[name],'!==undefined)');
bH.push('delete this.',this.$$store.runtime[name],';');
}else if(bI==="set"){bH.push('this.',this.$$store.user[name],'=value;');
}else if(bI==="reset"){bH.push('if(this.',this.$$store.user[name],'!==undefined)');
bH.push('delete this.',this.$$store.user[name],';');
}else if(bI==="setThemed"){bH.push('this.',this.$$store.theme[name],'=value;');
}else if(bI==="resetThemed"){bH.push('if(this.',this.$$store.theme[name],'!==undefined)');
bH.push('delete this.',this.$$store.theme[name],';');
}else if(bI==="init"&&bJ){bH.push('this.',this.$$store.init[name],'=value;');
}},__F:function(c,d,name,e,f){if(d.inheritable){c.push('var computed, old=this.',this.$$store.inherit[name],';');
}else{c.push('var computed, old;');
}c.push('if(this.',this.$$store.runtime[name],'!==undefined){');

if(e==="setRuntime"){c.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(e==="resetRuntime"){c.push('delete this.',this.$$store.runtime[name],';');
c.push('if(this.',this.$$store.user[name],'!==undefined)');
c.push('computed=this.',this.$$store.user[name],';');
c.push('else if(this.',this.$$store.theme[name],'!==undefined)');
c.push('computed=this.',this.$$store.theme[name],';');
c.push('else if(this.',this.$$store.init[name],'!==undefined){');
c.push('computed=this.',this.$$store.init[name],';');
c.push('this.',this.$$store.useinit[name],'=true;');
c.push('}');
}else{c.push('old=computed=this.',this.$$store.runtime[name],';');
if(e==="set"){c.push('this.',this.$$store.user[name],'=value;');
}else if(e==="reset"){c.push('delete this.',this.$$store.user[name],';');
}else if(e==="setThemed"){c.push('this.',this.$$store.theme[name],'=value;');
}else if(e==="resetThemed"){c.push('delete this.',this.$$store.theme[name],';');
}else if(e==="init"&&f){c.push('this.',this.$$store.init[name],'=value;');
}}c.push('}');
c.push('else if(this.',this.$$store.user[name],'!==undefined){');

if(e==="set"){if(!d.inheritable){c.push('old=this.',this.$$store.user[name],';');
}c.push('computed=this.',this.$$store.user[name],'=value;');
}else if(e==="reset"){if(!d.inheritable){c.push('old=this.',this.$$store.user[name],';');
}c.push('delete this.',this.$$store.user[name],';');
c.push('if(this.',this.$$store.runtime[name],'!==undefined)');
c.push('computed=this.',this.$$store.runtime[name],';');
c.push('if(this.',this.$$store.theme[name],'!==undefined)');
c.push('computed=this.',this.$$store.theme[name],';');
c.push('else if(this.',this.$$store.init[name],'!==undefined){');
c.push('computed=this.',this.$$store.init[name],';');
c.push('this.',this.$$store.useinit[name],'=true;');
c.push('}');
}else{if(e==="setRuntime"){c.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(d.inheritable){c.push('computed=this.',this.$$store.user[name],';');
}else{c.push('old=computed=this.',this.$$store.user[name],';');
}if(e==="setThemed"){c.push('this.',this.$$store.theme[name],'=value;');
}else if(e==="resetThemed"){c.push('delete this.',this.$$store.theme[name],';');
}else if(e==="init"&&f){c.push('this.',this.$$store.init[name],'=value;');
}}c.push('}');
if(d.themeable){c.push('else if(this.',this.$$store.theme[name],'!==undefined){');

if(!d.inheritable){c.push('old=this.',this.$$store.theme[name],';');
}
if(e==="setRuntime"){c.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(e==="set"){c.push('computed=this.',this.$$store.user[name],'=value;');
}else if(e==="setThemed"){c.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(e==="resetThemed"){c.push('delete this.',this.$$store.theme[name],';');
c.push('if(this.',this.$$store.init[name],'!==undefined){');
c.push('computed=this.',this.$$store.init[name],';');
c.push('this.',this.$$store.useinit[name],'=true;');
c.push('}');
}else if(e==="init"){if(f){c.push('this.',this.$$store.init[name],'=value;');
}c.push('computed=this.',this.$$store.theme[name],';');
}else if(e==="refresh"){c.push('computed=this.',this.$$store.theme[name],';');
}c.push('}');
}c.push('else if(this.',this.$$store.useinit[name],'){');

if(!d.inheritable){c.push('old=this.',this.$$store.init[name],';');
}
if(e==="init"){if(f){c.push('computed=this.',this.$$store.init[name],'=value;');
}else{c.push('computed=this.',this.$$store.init[name],';');
}}else if(e==="set"||e==="setRuntime"||e==="setThemed"||e==="refresh"){c.push('delete this.',this.$$store.useinit[name],';');

if(e==="setRuntime"){c.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(e==="set"){c.push('computed=this.',this.$$store.user[name],'=value;');
}else if(e==="setThemed"){c.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(e==="refresh"){c.push('computed=this.',this.$$store.init[name],';');
}}c.push('}');
if(e==="set"||e==="setRuntime"||e==="setThemed"||e==="init"){c.push('else{');

if(e==="setRuntime"){c.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(e==="set"){c.push('computed=this.',this.$$store.user[name],'=value;');
}else if(e==="setThemed"){c.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(e==="init"){if(f){c.push('computed=this.',this.$$store.init[name],'=value;');
}else{c.push('computed=this.',this.$$store.init[name],';');
}c.push('this.',this.$$store.useinit[name],'=true;');
}c.push('}');
}},__G:function(dT,dU,name,dV){dT.push('if(computed===undefined||computed===inherit){');

if(dV==="refresh"){dT.push('computed=value;');
}else{dT.push('var pa=this.getLayoutParent();if(pa)computed=pa.',this.$$store.inherit[name],';');
}dT.push('if((computed===undefined||computed===inherit)&&');
dT.push('this.',this.$$store.init[name],'!==undefined&&');
dT.push('this.',this.$$store.init[name],'!==inherit){');
dT.push('computed=this.',this.$$store.init[name],';');
dT.push('this.',this.$$store.useinit[name],'=true;');
dT.push('}else{');
dT.push('delete this.',this.$$store.useinit[name],';}');
dT.push('}');
dT.push('if(old===computed)return value;');
dT.push('if(computed===inherit){');
dT.push('computed=undefined;delete this.',this.$$store.inherit[name],';');
dT.push('}');
dT.push('else if(computed===undefined)');
dT.push('delete this.',this.$$store.inherit[name],';');
dT.push('else this.',this.$$store.inherit[name],'=computed;');
dT.push('var backup=computed;');
if(dU.init!==undefined&&dV!=="init"){dT.push('if(old===undefined)old=this.',this.$$store.init[name],";");
}else{dT.push('if(old===undefined)old=null;');
}dT.push('if(computed===undefined||computed==inherit)computed=null;');
},__H:function(dX,dY,name,ea){if(ea!=="set"&&ea!=="setRuntime"&&ea!=="setThemed"){dX.push('if(computed===undefined)computed=null;');
}dX.push('if(old===computed)return value;');
if(dY.init!==undefined&&ea!=="init"){dX.push('if(old===undefined)old=this.',this.$$store.init[name],";");
}else{dX.push('if(old===undefined)old=null;');
}},__I:function(g,h,name){if(h.apply){g.push('this.',h.apply,'(computed, old, "',name,'");');
}if(h.event){g.push("var reg=qx.event.Registration;","if(reg.hasListener(this, '",h.event,"')){","reg.fireEvent(this, '",h.event,"', qx.event.type.Data, [computed, old]",")}");
}},__J:function(bG,name){bG.push('var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){');
bG.push('if(a[i].',this.$$method.refresh[name],')a[i].',this.$$method.refresh[name],'(backup);');
bG.push('}');
}},defer:function(bn){var bp=navigator.userAgent.indexOf(bN)!=-1;
var bo=navigator.userAgent.indexOf(cB)!=-1;
if(bp||bo){bn.__v=bn.__w;
}}});
})();
(function(){var m="emulated",k="native",j='"',h="qx.lang.Core",g="\\\\",f="\\\"",e="[object Error]";
qx.Bootstrap.define(h,{statics:{errorToString:{"native":Error.prototype.toString,"emulated":function(){return this.message;
}}[(!Error.prototype.toString||Error.prototype.toString()==e)?m:k],arrayIndexOf:{"native":Array.prototype.indexOf,"emulated":function(t,u){if(u==null){u=0;
}else if(u<0){u=Math.max(0,this.length+u);
}
for(var i=u;i<this.length;i++){if(this[i]===t){return i;
}}return -1;
}}[Array.prototype.indexOf?k:m],arrayLastIndexOf:{"native":Array.prototype.lastIndexOf,"emulated":function(C,D){if(D==null){D=this.length-1;
}else if(D<0){D=Math.max(0,this.length+D);
}
for(var i=D;i>=0;i--){if(this[i]===C){return i;
}}return -1;
}}[Array.prototype.lastIndexOf?k:m],arrayForEach:{"native":Array.prototype.forEach,"emulated":function(q,r){var l=this.length;

for(var i=0;i<l;i++){var s=this[i];

if(s!==undefined){q.call(r||window,s,i,this);
}}}}[Array.prototype.forEach?k:m],arrayFilter:{"native":Array.prototype.filter,"emulated":function(a,b){var c=[];
var l=this.length;

for(var i=0;i<l;i++){var d=this[i];

if(d!==undefined){if(a.call(b||window,d,i,this)){c.push(this[i]);
}}}return c;
}}[Array.prototype.filter?k:m],arrayMap:{"native":Array.prototype.map,"emulated":function(y,z){var A=[];
var l=this.length;

for(var i=0;i<l;i++){var B=this[i];

if(B!==undefined){A[i]=y.call(z||window,B,i,this);
}}return A;
}}[Array.prototype.map?k:m],arraySome:{"native":Array.prototype.some,"emulated":function(n,o){var l=this.length;

for(var i=0;i<l;i++){var p=this[i];

if(p!==undefined){if(n.call(o||window,p,i,this)){return true;
}}}return false;
}}[Array.prototype.some?k:m],arrayEvery:{"native":Array.prototype.every,"emulated":function(v,w){var l=this.length;

for(var i=0;i<l;i++){var x=this[i];

if(x!==undefined){if(!v.call(w||window,x,i,this)){return false;
}}}return true;
}}[Array.prototype.every?k:m],stringQuote:{"native":String.prototype.quote,"emulated":function(){return j+this.replace(/\\/g,g).replace(/\"/g,f)+j;
}}[String.prototype.quote?k:m]}});
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
(function(){var s="gecko",r="1.9.0.0",q=".",p="[object Opera]",o="function",n="[^\\.0-9]",m="525.26",l="",k="mshtml",j="AppleWebKit/",d="unknown",i="9.6.0",g="4.0",c="Gecko",b="opera",f="webkit",e="0.0.0",h="8.0",a="qx.bom.client.Engine";
qx.Bootstrap.define(a,{statics:{NAME:"",FULLVERSION:"0.0.0",VERSION:0.0,OPERA:false,WEBKIT:false,GECKO:false,MSHTML:false,UNKNOWN_ENGINE:false,UNKNOWN_VERSION:false,DOCUMENT_MODE:null,__bf:function(){var t=d;
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
}},defer:function(A){A.__bf();
}});
})();
(function(){var u="on",t="off",s="|",r="default",q="object",p="&",o="qx.aspects",n="$",m="qx.allowUrlVariants",k="qx.debug",d="qx.client",j="qx.dynlocale",g="webkit",c="qxvariant",b="opera",f=":",e="qx.core.Variant",h="mshtml",a="gecko";
qx.Bootstrap.define(e,{statics:{__bg:{},__bh:{},compilerIsSet:function(){return true;
},define:function(L,M,N){{};

if(!this.__bg[L]){this.__bg[L]={};
}else{}this.__bg[L].allowedValues=M;
this.__bg[L].defaultValue=N;
},get:function(O){var P=this.__bg[O];
{};

if(P.value!==undefined){return P.value;
}return P.defaultValue;
},__bi:function(){if(window.qxvariants){for(var C in qxvariants){{};

if(!this.__bg[C]){this.__bg[C]={};
}this.__bg[C].value=qxvariants[C];
}window.qxvariants=undefined;

try{delete window.qxvariants;
}catch(B){}this.__bj(this.__bg);
}},__bj:function(){if(qx.core.Setting.get(m)!=true){return;
}var I=document.location.search.slice(1).split(p);

for(var i=0;i<I.length;i++){var J=I[i].split(f);

if(J.length!=3||J[0]!=c){continue;
}var K=J[1];

if(!this.__bg[K]){this.__bg[K]={};
}this.__bg[K].value=decodeURIComponent(J[2]);
}},select:function(y,z){{};

for(var A in z){if(this.isSet(y,A)){return z[A];
}}
if(z[r]!==undefined){return z[r];
}{};
},isSet:function(D,E){var F=D+n+E;

if(this.__bh[F]!==undefined){return this.__bh[F];
}var H=false;
if(E.indexOf(s)<0){H=this.get(D)===E;
}else{var G=E.split(s);

for(var i=0,l=G.length;i<l;i++){if(this.get(D)===G[i]){H=true;
break;
}}}this.__bh[F]=H;
return H;
},__bk:function(v){return typeof v===q&&v!==null&&v instanceof Array;
},__bl:function(v){return typeof v===q&&v!==null&&!(v instanceof Array);
},__bm:function(w,x){for(var i=0,l=w.length;i<l;i++){if(w[i]==x){return true;
}}return false;
}},defer:function(Q){Q.define(d,[a,h,b,g],qx.bom.client.Engine.NAME);
Q.define(k,[u,t],u);
Q.define(o,[u,t],t);
Q.define(j,[u,t],u);
Q.__bi();
}});
})();
(function(){var d="qx.core.Aspect",c="before",b="*",a="static";
qx.Bootstrap.define(d,{statics:{__xb:[],wrap:function(j,k,l){var q=[];
var m=[];
var p=this.__xb;
var o;

for(var i=0;i<p.length;i++){o=p[i];

if((o.type==null||l==o.type||o.type==b)&&(o.name==null||j.match(o.name))){o.pos==-1?q.push(o.fcn):m.push(o.fcn);
}}
if(q.length===0&&m.length===0){return k;
}var n=function(){for(var i=0;i<q.length;i++){q[i].call(this,j,k,l,arguments);
}var e=k.apply(this,arguments);

for(var i=0;i<m.length;i++){m[i].call(this,j,k,l,arguments,e);
}return e;
};

if(l!==a){n.self=k.self;
n.base=k.base;
}k.wrapper=n;
n.original=k;
return n;
},addAdvice:function(f,g,h,name){this.__xb.push({fcn:f,pos:g===c?-1:1,type:h,name:name});
}}});
})();
(function(){var v="qx.aspects",u="on",t=".",s="static",r="[Class ",q="]",p="constructor",o="extend",n="qx.Class";
qx.Bootstrap.define(n,{statics:{define:function(name,bk){if(!bk){var bk={};
}if(bk.include&&!(bk.include instanceof Array)){bk.include=[bk.include];
}if(bk.implement&&!(bk.implement instanceof Array)){bk.implement=[bk.implement];
}var bl=false;

if(!bk.hasOwnProperty(o)&&!bk.type){bk.type=s;
bl=true;
}{};
var bm=this.__O(name,bk.type,bk.extend,bk.statics,bk.construct,bk.destruct,bk.include);
if(bk.extend){if(bk.properties){this.__Q(bm,bk.properties,true);
}if(bk.members){this.__S(bm,bk.members,true,true,false);
}if(bk.events){this.__P(bm,bk.events,true);
}if(bk.include){for(var i=0,l=bk.include.length;i<l;i++){this.__W(bm,bk.include[i],false);
}}}if(bk.settings){for(var bn in bk.settings){qx.core.Setting.define(bn,bk.settings[bn]);
}}if(bk.variants){for(var bn in bk.variants){qx.core.Variant.define(bn,bk.variants[bn].allowedValues,bk.variants[bn].defaultValue);
}}if(bk.implement){for(var i=0,l=bk.implement.length;i<l;i++){this.__U(bm,bk.implement[i]);
}}{};
if(bk.defer){bk.defer.self=bm;
bk.defer(bm,bm.prototype,{add:function(name,bg){var bh={};
bh[name]=bg;
qx.Class.__Q(bm,bh,true);
}});
}return bm;
},undefine:function(name){delete this.$$registry[name];
var w=name.split(t);
var y=[window];

for(var i=0;i<w.length;i++){y.push(y[i][w[i]]);
}for(var i=y.length-1;i>=1;i--){var x=y[i];
var parent=y[i-1];

if(qx.Bootstrap.isFunction(x)||qx.Bootstrap.objectGetLength(x)===0){delete parent[w[i-1]];
}else{break;
}}},isDefined:qx.Bootstrap.classIsDefined,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},getByName:qx.Bootstrap.getByName,include:function(b,c){{};
qx.Class.__W(b,c,false);
},patch:function(bo,bp){{};
qx.Class.__W(bo,bp,true);
},isSubClassOf:function(d,e){if(!d){return false;
}
if(d==e){return true;
}
if(d.prototype instanceof e){return true;
}return false;
},getPropertyDefinition:qx.Bootstrap.getPropertyDefinition,getProperties:function(bq){var br=[];

while(bq){if(bq.$$properties){br.push.apply(br,qx.Bootstrap.getKeys(bq.$$properties));
}bq=bq.superclass;
}return br;
},getByProperty:function(cb,name){while(cb){if(cb.$$properties&&cb.$$properties[name]){return cb;
}cb=cb.superclass;
}return null;
},hasProperty:qx.Bootstrap.hasProperty,getEventType:qx.Bootstrap.getEventType,supportsEvent:qx.Bootstrap.supportsEvent,hasOwnMixin:function(bs,bt){return bs.$$includes&&bs.$$includes.indexOf(bt)!==-1;
},getByMixin:function(B,C){var D,i,l;

while(B){if(B.$$includes){D=B.$$flatIncludes;

for(i=0,l=D.length;i<l;i++){if(D[i]===C){return B;
}}}B=B.superclass;
}return null;
},getMixins:qx.Bootstrap.getMixins,hasMixin:function(be,bf){return !!this.getByMixin(be,bf);
},hasOwnInterface:function(f,g){return f.$$implements&&f.$$implements.indexOf(g)!==-1;
},getByInterface:qx.Bootstrap.getByInterface,getInterfaces:function(L){var M=[];

while(L){if(L.$$implements){M.push.apply(M,L.$$flatImplements);
}L=L.superclass;
}return M;
},hasInterface:qx.Bootstrap.hasInterface,implementsInterface:function(cc,cd){var ce=cc.constructor;

if(this.hasInterface(ce,cd)){return true;
}
try{qx.Interface.assertObject(cc,cd);
return true;
}catch(E){}
try{qx.Interface.assert(ce,cd,false);
return true;
}catch(ca){}return false;
},getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;
this.$$instance=new this;
delete this.$$allowconstruct;
}return this.$$instance;
},genericToString:function(){return r+this.classname+q;
},$$registry:qx.Bootstrap.$$registry,__K:null,__L:null,__M:function(){},__N:function(){},__O:function(name,bu,bv,bw,bx,by,bz){var bC;

if(!bv&&qx.core.Variant.isSet("qx.aspects","off")){bC=bw||{};
qx.Bootstrap.setDisplayNames(bC,name);
}else{var bC={};

if(bv){if(!bx){bx=this.__X();
}
if(this.__ba(bv,bz)){bC=this.__bb(bx,name,bu);
}else{bC=bx;
}if(bu==="singleton"){bC.getInstance=this.getInstance;
}qx.Bootstrap.setDisplayName(bx,name,"constructor");
}if(bw){qx.Bootstrap.setDisplayNames(bw,name);
var bD;

for(var i=0,a=qx.Bootstrap.getKeys(bw),l=a.length;i<l;i++){bD=a[i];
var bA=bw[bD];

if(qx.core.Variant.isSet("qx.aspects","on")){if(bA instanceof Function){bA=qx.core.Aspect.wrap(name+"."+bD,bA,"static");
}bC[bD]=bA;
}else{bC[bD]=bA;
}}}}var bB=qx.Bootstrap.createNamespace(name,bC);
bC.name=bC.classname=name;
bC.basename=bB;
bC.$$type="Class";

if(bu){bC.$$classtype=bu;
}if(!bC.hasOwnProperty("toString")){bC.toString=this.genericToString;
}
if(bv){qx.Bootstrap.extendClass(bC,bx,bv,name,bB);
if(by){if(qx.core.Variant.isSet("qx.aspects","on")){by=qx.core.Aspect.wrap(name,by,"destructor");
}bC.$$destructor=by;
qx.Bootstrap.setDisplayName(by,name,"destruct");
}}this.$$registry[name]=bC;
return bC;
},__P:function(bV,bW,bX){var bY,bY;
{};

if(bV.$$events){for(var bY in bW){bV.$$events[bY]=bW[bY];
}}else{bV.$$events=bW;
}},__Q:function(bQ,bR,bS){var bT;

if(bS===undefined){bS=false;
}var bU=bQ.prototype;

for(var name in bR){bT=bR[name];
{};
bT.name=name;
if(!bT.refine){if(bQ.$$properties===undefined){bQ.$$properties={};
}bQ.$$properties[name]=bT;
}if(bT.init!==undefined){bQ.prototype["$$init_"+name]=bT.init;
}if(bT.event!==undefined){var event={};
event[bT.event]="qx.event.type.Data";
this.__P(bQ,event,bS);
}if(bT.inheritable){qx.core.Property.$$inheritable[name]=true;

if(!bU.$$refreshInheritables){qx.core.Property.attachRefreshInheritables(bQ);
}}
if(!bT.refine){qx.core.Property.attachMethods(bQ,name,bT);
}}},__R:null,__S:function(N,O,P,Q,R){var S=N.prototype;
var U,T;
qx.Bootstrap.setDisplayNames(O,N.classname+".prototype");

for(var i=0,a=qx.Bootstrap.getKeys(O),l=a.length;i<l;i++){U=a[i];
T=O[U];
{};
if(Q!==false&&T instanceof Function&&T.$$type==null){if(R==true){T=this.__T(T,S[U]);
}else{if(S[U]){T.base=S[U];
}T.self=N;
}
if(qx.core.Variant.isSet("qx.aspects","on")){T=qx.core.Aspect.wrap(N.classname+"."+U,T,"member");
}}S[U]=T;
}},__T:function(bi,bj){if(bj){return function(){var A=bi.base;
bi.base=bj;
var z=bi.apply(this,arguments);
bi.base=A;
return z;
};
}else{return bi;
}},__U:function(V,W){{};
var X=qx.Interface.flatten([W]);

if(V.$$implements){V.$$implements.push(W);
V.$$flatImplements.push.apply(V.$$flatImplements,X);
}else{V.$$implements=[W];
V.$$flatImplements=X;
}},__V:function(bE){var name=bE.classname;
var bF=this.__bb(bE,name,bE.$$classtype);
for(var i=0,a=qx.Bootstrap.getKeys(bE),l=a.length;i<l;i++){bG=a[i];
bF[bG]=bE[bG];
}bF.prototype=bE.prototype;
var bI=bE.prototype;

for(var i=0,a=qx.Bootstrap.getKeys(bI),l=a.length;i<l;i++){bG=a[i];
var bJ=bI[bG];
if(bJ&&bJ.self==bE){bJ.self=bF;
}}for(var bG in this.$$registry){var bH=this.$$registry[bG];

if(!bH){continue;
}
if(bH.base==bE){bH.base=bF;
}
if(bH.superclass==bE){bH.superclass=bF;
}
if(bH.$$original){if(bH.$$original.base==bE){bH.$$original.base=bF;
}
if(bH.$$original.superclass==bE){bH.$$original.superclass=bF;
}}}qx.Bootstrap.createNamespace(name,bF);
this.$$registry[name]=bF;
return bF;
},__W:function(F,G,H){{};

if(this.hasMixin(F,G)){return;
}var K=F.$$original;

if(G.$$constructor&&!K){F=this.__V(F);
}var J=qx.Mixin.flatten([G]);
var I;

for(var i=0,l=J.length;i<l;i++){I=J[i];
if(I.$$events){this.__P(F,I.$$events,H);
}if(I.$$properties){this.__Q(F,I.$$properties,H);
}if(I.$$members){this.__S(F,I.$$members,H,H,H);
}}if(F.$$includes){F.$$includes.push(G);
F.$$flatIncludes.push.apply(F.$$flatIncludes,J);
}else{F.$$includes=[G];
F.$$flatIncludes=J;
}},__X:function(){function bd(){bd.base.apply(this,arguments);
}return bd;
},__Y:function(){return function(){};
},__ba:function(h,j){{};
if(h&&h.$$includes){var k=h.$$flatIncludes;

for(var i=0,l=k.length;i<l;i++){if(k[i].$$constructor){return true;
}}}if(j){var m=qx.Mixin.flatten(j);

for(var i=0,l=m.length;i<l;i++){if(m[i].$$constructor){return true;
}}}return false;
},__bb:function(Y,name,ba){var bc=function(){var bP=bc;
{};
var bO=bP.$$original.apply(this,arguments);
if(bP.$$includes){var bN=bP.$$flatIncludes;

for(var i=0,l=bN.length;i<l;i++){if(bN[i].$$constructor){bN[i].$$constructor.apply(this,arguments);
}}}{};
return bO;
};

if(qx.core.Variant.isSet(v,u)){var bb=qx.core.Aspect.wrap(name,bc,p);
bc.$$original=Y;
bc.constructor=bb;
bc=bb;
}bc.$$original=Y;
Y.wrapper=bc;
return bc;
}},defer:function(){if(qx.core.Variant.isSet(v,u)){for(var bK in qx.Bootstrap.$$registry){var bL=qx.Bootstrap.$$registry[bK];

for(var bM in bL){if(bL[bM] instanceof Function){bL[bM]=qx.core.Aspect.wrap(bK+t+bM,bL[bM],s);
}}}}}});
})();
(function(){var i="qx.client",h="on",g="function",f="mousedown",d="qx.bom.Event",c="return;",b="mouseover",a="HTMLEvents";
qx.Class.define(d,{statics:{addNativeListener:qx.core.Variant.select(i,{"mshtml":function(A,B,C){A.attachEvent(h+B,C);
},"default":function(x,y,z){x.addEventListener(y,z,false);
}}),removeNativeListener:qx.core.Variant.select(i,{"mshtml":function(r,s,t){try{r.detachEvent(h+s,t);
}catch(e){if(e.number!==-2146828218){throw e;
}}},"default":function(D,E,F){D.removeEventListener(E,F,false);
}}),getTarget:function(e){return e.target||e.srcElement;
},getRelatedTarget:qx.core.Variant.select(i,{"mshtml":function(e){if(e.type===b){return e.fromEvent;
}else{return e.toElement;
}},"gecko":function(e){try{e.relatedTarget&&e.relatedTarget.nodeType;
}catch(e){return null;
}return e.relatedTarget;
},"default":function(e){return e.relatedTarget;
}}),preventDefault:qx.core.Variant.select(i,{"gecko":function(e){if(qx.bom.client.Engine.VERSION>=1.9&&e.type==f&&e.button==2){return;
}e.preventDefault();
if(qx.bom.client.Engine.VERSION<1.9){try{e.keyCode=0;
}catch(n){}}},"mshtml":function(e){try{e.keyCode=0;
}catch(w){}e.returnValue=false;
},"default":function(e){e.preventDefault();
}}),stopPropagation:function(e){if(e.stopPropagation){e.stopPropagation();
}e.cancelBubble=true;
},fire:function(o,p){if(document.createEventObject){var q=document.createEventObject();
return o.fireEvent(h+p,q);
}else{var q=document.createEvent(a);
q.initEvent(p,true,true);
return !o.dispatchEvent(q);
}},supportsEvent:qx.core.Variant.select(i,{"webkit":function(u,v){return u.hasOwnProperty(h+v);
},"default":function(j,k){var l=h+k;
var m=(l in j);

if(!m){m=typeof j[l]==g;

if(!m&&j.setAttribute){j.setAttribute(l,c);
m=typeof j[l]==g;
j.removeAttribute(l);
}}return m;
}})}});
})();
(function(){var x="|bubble",w="|capture",v="|",u="",t="_",s="unload",r="UNKNOWN_",q="__bs",p="__br",o="c",k="DOM_",n="WIN_",m="capture",j="qx.event.Manager",h="QX_";
qx.Class.define(j,{extend:Object,construct:function(cu,cv){this.__bn=cu;
this.__bo=qx.core.ObjectRegistry.toHashCode(cu);
this.__bp=cv;
if(cu.qx!==qx){var self=this;
qx.bom.Event.addNativeListener(cu,s,qx.event.GlobalError.observeMethod(function(){qx.bom.Event.removeNativeListener(cu,s,arguments.callee);
self.dispose();
}));
}this.__bq={};
this.__br={};
this.__bs={};
this.__bt={};
},statics:{__bu:0,getNextUniqueId:function(){return (this.__bu++)+u;
}},members:{__bp:null,__bq:null,__bs:null,__bv:null,__br:null,__bt:null,__bn:null,__bo:null,getWindow:function(){return this.__bn;
},getWindowId:function(){return this.__bo;
},getHandler:function(ch){var ci=this.__br[ch.classname];

if(ci){return ci;
}return this.__br[ch.classname]=new ch(this);
},getDispatcher:function(bM){var bN=this.__bs[bM.classname];

if(bN){return bN;
}return this.__bs[bM.classname]=new bM(this,this.__bp);
},getListeners:function(ca,cb,cc){var cd=ca.$$hash||qx.core.ObjectRegistry.toHashCode(ca);
var cf=this.__bq[cd];

if(!cf){return null;
}var cg=cb+(cc?w:x);
var ce=cf[cg];
return ce?ce.concat():null;
},serializeListeners:function(cw){var cD=cw.$$hash||qx.core.ObjectRegistry.toHashCode(cw);
var cF=this.__bq[cD];
var cB=[];

if(cF){var cz,cE,cx,cA,cC;

for(var cy in cF){cz=cy.indexOf(v);
cE=cy.substring(0,cz);
cx=cy.charAt(cz+1)==o;
cA=cF[cy];

for(var i=0,l=cA.length;i<l;i++){cC=cA[i];
cB.push({self:cC.context,handler:cC.handler,type:cE,capture:cx});
}}}return cB;
},toggleAttachedEvents:function(bD,bE){var bJ=bD.$$hash||qx.core.ObjectRegistry.toHashCode(bD);
var bL=this.__bq[bJ];

if(bL){var bG,bK,bF,bH;

for(var bI in bL){bG=bI.indexOf(v);
bK=bI.substring(0,bG);
bF=bI.charCodeAt(bG+1)===99;
bH=bL[bI];

if(bE){this.__bw(bD,bK,bF);
}else{this.__bx(bD,bK,bF);
}}}},hasListener:function(a,b,c){{};
var d=a.$$hash||qx.core.ObjectRegistry.toHashCode(a);
var f=this.__bq[d];

if(!f){return false;
}var g=b+(c?w:x);
var e=f[g];
return e&&e.length>0;
},importListeners:function(K,L){{};
var R=K.$$hash||qx.core.ObjectRegistry.toHashCode(K);
var S=this.__bq[R]={};
var O=qx.event.Manager;

for(var M in L){var P=L[M];
var Q=P.type+(P.capture?w:x);
var N=S[Q];

if(!N){N=S[Q]=[];
this.__bw(K,P.type,P.capture);
}N.push({handler:P.listener,context:P.self,unique:P.unique||(O.__bu++)+u});
}},addListener:function(bl,bm,bn,self,bo){var bs;
{};
var bt=bl.$$hash||qx.core.ObjectRegistry.toHashCode(bl);
var bv=this.__bq[bt];

if(!bv){bv=this.__bq[bt]={};
}var br=bm+(bo?w:x);
var bq=bv[br];

if(!bq){bq=bv[br]=[];
}if(bq.length===0){this.__bw(bl,bm,bo);
}var bu=(qx.event.Manager.__bu++)+u;
var bp={handler:bn,context:self,unique:bu};
bq.push(bp);
return br+v+bu;
},findHandler:function(T,U){var bf=false,X=false,bg=false;
var be;

if(T.nodeType===1){bf=true;
be=k+T.tagName.toLowerCase()+t+U;
}else if(T==this.__bn){X=true;
be=n+U;
}else if(T.classname){bg=true;
be=h+T.classname+t+U;
}else{be=r+T+t+U;
}var ba=this.__bt;

if(ba[be]){return ba[be];
}var bd=this.__bp.getHandlers();
var Y=qx.event.IEventHandler;
var bb,bc,W,V;

for(var i=0,l=bd.length;i<l;i++){bb=bd[i];
W=bb.SUPPORTED_TYPES;

if(W&&!W[U]){continue;
}V=bb.TARGET_CHECK;

if(V){if(!bf&&V===Y.TARGET_DOMNODE){continue;
}else if(!X&&V===Y.TARGET_WINDOW){continue;
}else if(!bg&&V===Y.TARGET_OBJECT){continue;
}}bc=this.getHandler(bd[i]);

if(bb.IGNORE_CAN_HANDLE||bc.canHandleEvent(T,U)){ba[be]=bc;
return bc;
}}return null;
},__bw:function(bh,bi,bj){var bk=this.findHandler(bh,bi);

if(bk){bk.registerEvent(bh,bi,bj);
return;
}{};
},removeListener:function(ck,cl,cm,self,cn){var cr;
{};
var cs=ck.$$hash||qx.core.ObjectRegistry.toHashCode(ck);
var ct=this.__bq[cs];

if(!ct){return false;
}var co=cl+(cn?w:x);
var cp=ct[co];

if(!cp){return false;
}var cq;

for(var i=0,l=cp.length;i<l;i++){cq=cp[i];

if(cq.handler===cm&&cq.context===self){qx.lang.Array.removeAt(cp,i);

if(cp.length==0){this.__bx(ck,cl,cn);
}return true;
}}return false;
},removeListenerById:function(y,z){var F;
{};
var D=z.split(v);
var I=D[0];
var A=D[1].charCodeAt(0)==99;
var H=D[2];
var G=y.$$hash||qx.core.ObjectRegistry.toHashCode(y);
var J=this.__bq[G];

if(!J){return false;
}var E=I+(A?w:x);
var C=J[E];

if(!C){return false;
}var B;

for(var i=0,l=C.length;i<l;i++){B=C[i];

if(B.unique===H){qx.lang.Array.removeAt(C,i);

if(C.length==0){this.__bx(y,I,A);
}return true;
}}return false;
},removeAllListeners:function(bw){var bA=bw.$$hash||qx.core.ObjectRegistry.toHashCode(bw);
var bC=this.__bq[bA];

if(!bC){return false;
}var by,bB,bx;

for(var bz in bC){if(bC[bz].length>0){by=bz.split(v);
bB=by[0];
bx=by[1]===m;
this.__bx(bw,bB,bx);
}}delete this.__bq[bA];
return true;
},deleteAllListeners:function(cj){delete this.__bq[cj];
},__bx:function(bV,bW,bX){var bY=this.findHandler(bV,bW);

if(bY){bY.unregisterEvent(bV,bW,bX);
return;
}{};
},dispatchEvent:function(bO,event){var bT;
{};
var bU=event.getType();

if(!event.getBubbles()&&!this.hasListener(bO,bU)){qx.event.Pool.getInstance().poolObject(event);
return true;
}
if(!event.getTarget()){event.setTarget(bO);
}var bS=this.__bp.getDispatchers();
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
},dispose:function(){this.__bp.removeManager(this);
qx.util.DisposeUtil.disposeMap(this,p);
qx.util.DisposeUtil.disposeMap(this,q);
this.__bq=this.__bn=this.__bv=null;
this.__bp=this.__bt=null;
}}});
})();
(function(){var e="qx.dom.Node",d="qx.client",c="";
qx.Class.define(e,{statics:{ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12,getDocument:function(b){return b.nodeType===
this.DOCUMENT?b:
b.ownerDocument||b.document;
},getWindow:qx.core.Variant.select(d,{"mshtml":function(o){if(o.nodeType==null){return o;
}if(o.nodeType!==this.DOCUMENT){o=o.ownerDocument;
}return o.parentWindow;
},"default":function(f){if(f.nodeType==null){return f;
}if(f.nodeType!==this.DOCUMENT){f=f.ownerDocument;
}return f.defaultView;
}}),getDocumentElement:function(t){return this.getDocument(t).documentElement;
},getBodyElement:function(r){return this.getDocument(r).body;
},isNode:function(s){return !!(s&&s.nodeType!=null);
},isElement:function(k){return !!(k&&k.nodeType===this.ELEMENT);
},isDocument:function(j){return !!(j&&j.nodeType===this.DOCUMENT);
},isText:function(g){return !!(g&&g.nodeType===this.TEXT);
},isWindow:function(h){return !!(h&&h.history&&h.location&&h.document);
},isNodeName:function(p,q){if(!q||!p||!p.nodeName){return false;
}return q.toLowerCase()==qx.dom.Node.getName(p);
},getName:function(l){if(!l||!l.nodeName){return null;
}return l.nodeName.toLowerCase();
},getText:function(m){if(!m||!m.nodeType){return null;
}
switch(m.nodeType){case 1:var i,a=[],n=m.childNodes,length=n.length;

for(i=0;i<length;i++){a[i]=this.getText(n[i]);
}return a.join(c);
case 2:return m.nodeValue;
break;
case 3:return m.nodeValue;
break;
}return null;
}}});
})();
(function(){var n="mshtml",m="qx.client",k="[object Array]",j="qx.lang.Array",h="qx",g="number",f="string";
qx.Class.define(j,{statics:{toArray:function(bh,bi){return this.cast(bh,Array,bi);
},cast:function(I,J,K){if(I.constructor===J){return I;
}
if(qx.Class.hasInterface(I,qx.data.IListData)){var I=I.toArray();
}var L=new J;
if(qx.core.Variant.isSet(m,n)){if(I.item){for(var i=K||0,l=I.length;i<l;i++){L.push(I[i]);
}return L;
}}if(Object.prototype.toString.call(I)===k&&K==null){L.push.apply(L,I);
}else{L.push.apply(L,Array.prototype.slice.call(I,K||0));
}return L;
},fromArguments:function(M,N){return Array.prototype.slice.call(M,N||0);
},fromCollection:function(bn){if(qx.core.Variant.isSet(m,n)){if(bn.item){var bo=[];

for(var i=0,l=bn.length;i<l;i++){bo[i]=bn[i];
}return bo;
}}return Array.prototype.slice.call(bn,0);
},fromShortHand:function(b){var d=b.length;
var c=qx.lang.Array.clone(b);
switch(d){case 1:c[1]=c[2]=c[3]=c[0];
break;
case 2:c[2]=c[0];
case 3:c[3]=c[1];
}return c;
},clone:function(e){return e.concat();
},insertAt:function(be,bf,i){be.splice(i,0,bf);
return be;
},insertBefore:function(w,x,y){var i=w.indexOf(y);

if(i==-1){w.push(x);
}else{w.splice(i,0,x);
}return w;
},insertAfter:function(F,G,H){var i=F.indexOf(H);

if(i==-1||i==(F.length-1)){F.push(G);
}else{F.splice(i+1,0,G);
}return F;
},removeAt:function(o,i){return o.splice(i,1)[0];
},removeAll:function(bj){bj.length=0;
return this;
},append:function(bp,bq){{};
Array.prototype.push.apply(bp,bq);
return bp;
},exclude:function(B,C){{};

for(var i=0,E=C.length,D;i<E;i++){D=B.indexOf(C[i]);

if(D!=-1){B.splice(D,1);
}}return B;
},remove:function(u,v){var i=u.indexOf(v);

if(i!=-1){u.splice(i,1);
return v;
}},contains:function(z,A){return z.indexOf(A)!==-1;
},equals:function(p,q){var length=p.length;

if(length!==q.length){return false;
}
for(var i=0;i<length;i++){if(p[i]!==q[i]){return false;
}}return true;
},sum:function(O){var P=0;

for(var i=0,l=O.length;i<l;i++){P+=O[i];
}return P;
},max:function(bk){{};
var i,bm=bk.length,bl=bk[0];

for(i=1;i<bm;i++){if(bk[i]>bl){bl=bk[i];
}}return bl===undefined?null:bl;
},min:function(r){{};
var i,t=r.length,s=r[0];

for(i=1;i<t;i++){if(r[i]<s){s=r[i];
}}return s===undefined?null:s;
},unique:function(Q){var bb=[],S={},V={},X={};
var W,R=0;
var bc=h+qx.lang.Date.now();
var T=false,ba=false,bd=false;
for(var i=0,Y=Q.length;i<Y;i++){W=Q[i];
if(W===null){if(!T){T=true;
bb.push(W);
}}else if(W===undefined){}else if(W===false){if(!ba){ba=true;
bb.push(W);
}}else if(W===true){if(!bd){bd=true;
bb.push(W);
}}else if(typeof W===f){if(!S[W]){S[W]=1;
bb.push(W);
}}else if(typeof W===g){if(!V[W]){V[W]=1;
bb.push(W);
}}else{U=W[bc];

if(U==null){U=W[bc]=R++;
}
if(!X[U]){X[U]=W;
bb.push(W);
}}}for(var U in X){try{delete X[U][bc];
}catch(bg){try{X[U][bc]=null;
}catch(a){throw new Error("Cannot clean-up map entry doneObjects["+U+"]["+bc+"]");
}}}return bb;
}}});
})();
(function(){var A="()",z=".",y=".prototype.",x='anonymous()',w="qx.lang.Function",v=".constructor()";
qx.Class.define(w,{statics:{getCaller:function(H){return H.caller?H.caller.callee:H.callee.caller;
},getName:function(i){if(i.displayName){return i.displayName;
}
if(i.$$original||i.wrapper||i.classname){return i.classname+v;
}
if(i.$$mixin){for(var k in i.$$mixin.$$members){if(i.$$mixin.$$members[k]==i){return i.$$mixin.name+y+k+A;
}}for(var k in i.$$mixin){if(i.$$mixin[k]==i){return i.$$mixin.name+z+k+A;
}}}
if(i.self){var l=i.self.constructor;

if(l){for(var k in l.prototype){if(l.prototype[k]==i){return l.classname+y+k+A;
}}for(var k in l){if(l[k]==i){return l.classname+z+k+A;
}}}}var j=i.toString().match(/function\s*(\w*)\s*\(.*/);

if(j&&j.length>=1&&j[1]){return j[1]+A;
}return x;
},globalEval:function(G){if(window.execScript){return window.execScript(G);
}else{return eval.call(window,G);
}},empty:function(){},returnTrue:function(){return true;
},returnFalse:function(){return false;
},returnNull:function(){return null;
},returnThis:function(){return this;
},returnZero:function(){return 0;
},create:function(E,F){{};
if(!F){return E;
}if(!(F.self||F.args||F.delay!=null||F.periodical!=null||F.attempt)){return E;
}return function(event){{};
var r=qx.lang.Array.fromArguments(arguments);
if(F.args){r=F.args.concat(r);
}
if(F.delay||F.periodical){var q=qx.event.GlobalError.observeMethod(function(){return E.apply(F.self||this,r);
});

if(F.delay){return window.setTimeout(q,F.delay);
}
if(F.periodical){return window.setInterval(q,F.periodical);
}}else if(F.attempt){var s=false;

try{s=E.apply(F.self||this,r);
}catch(u){}return s;
}else{return E.apply(F.self||this,r);
}};
},bind:function(a,self,b){return this.create(a,{self:self,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null});
},curry:function(o,p){return this.create(o,{args:arguments.length>1?qx.lang.Array.fromArguments(arguments,1):null});
},listener:function(B,self,C){if(arguments.length<3){return function(event){return B.call(self||this,event||window.event);
};
}else{var D=qx.lang.Array.fromArguments(arguments,2);
return function(event){var t=[event||window.event];
t.push.apply(t,D);
B.apply(self||this,t);
};
}},attempt:function(m,self,n){return this.create(m,{self:self,attempt:true,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null})();
},delay:function(c,d,self,e){return this.create(c,{delay:d,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
},periodical:function(f,g,self,h){return this.create(f,{periodical:g,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
}}});
})();
(function(){var g="qx.event.Registration";
qx.Class.define(g,{statics:{__by:{},getManager:function(z){if(z==null){{};
z=window;
}else if(z.nodeType){z=qx.dom.Node.getWindow(z);
}else if(!qx.dom.Node.isWindow(z)){z=window;
}var B=z.$$hash||qx.core.ObjectRegistry.toHashCode(z);
var A=this.__by[B];

if(!A){A=new qx.event.Manager(z,this);
this.__by[B]=A;
}return A;
},removeManager:function(k){var l=k.getWindowId();
delete this.__by[l];
},addListener:function(K,L,M,self,N){return this.getManager(K).addListener(K,L,M,self,N);
},removeListener:function(F,G,H,self,I){return this.getManager(F).removeListener(F,G,H,self,I);
},removeListenerById:function(h,i){return this.getManager(h).removeListenerById(h,i);
},removeAllListeners:function(J){return this.getManager(J).removeAllListeners(J);
},deleteAllListeners:function(R){var S=R.$$hash;

if(S){this.getManager(R).deleteAllListeners(S);
}},hasListener:function(O,P,Q){return this.getManager(O).hasListener(O,P,Q);
},serializeListeners:function(s){return this.getManager(s).serializeListeners(s);
},createEvent:function(c,d,e){{};
if(d==null){d=qx.event.type.Event;
}var f=qx.event.Pool.getInstance().getObject(d);
e?f.init.apply(f,e):f.init();
if(c){f.setType(c);
}return f;
},dispatchEvent:function(E,event){return this.getManager(E).dispatchEvent(E,event);
},fireEvent:function(t,u,v,w){var x;
{};
var y=this.createEvent(u,v||null,w);
return this.getManager(t).dispatchEvent(t,y);
},fireNonBubblingEvent:function(m,n,o,p){{};
var q=this.getManager(m);

if(!q.hasListener(m,n,false)){return true;
}var r=this.createEvent(n,o||null,p);
return q.dispatchEvent(m,r);
},PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__bz:[],addHandler:function(j){{};
this.__bz.push(j);
this.__bz.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getHandlers:function(){return this.__bz;
},__bA:[],addDispatcher:function(C,D){{};
this.__bA.push(C);
this.__bA.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getDispatchers:function(){return this.__bA;
}}});
})();
(function(){var e="$$hash",d="",c="qx.core.ObjectRegistry";
qx.Class.define(c,{statics:{inShutDown:false,__bc:{},__bd:0,__be:[],register:function(t){var w=this.__bc;

if(!w){return;
}var v=t.$$hash;

if(v==null){var u=this.__be;

if(u.length>0){v=u.pop();
}else{v=(this.__bd++)+d;
}t.$$hash=v;
}{};
w[v]=t;
},unregister:function(p){var q=p.$$hash;

if(q==null){return;
}var r=this.__bc;

if(r&&r[q]){delete r[q];
this.__be.push(q);
}try{delete p.$$hash;
}catch(f){if(p.removeAttribute){p.removeAttribute(e);
}}},toHashCode:function(m){{};
var o=m.$$hash;

if(o!=null){return o;
}var n=this.__be;

if(n.length>0){o=n.pop();
}else{o=(this.__bd++)+d;
}return m.$$hash=o;
},clearHashCode:function(j){{};
var k=j.$$hash;

if(k!=null){this.__be.push(k);
try{delete j.$$hash;
}catch(g){if(j.removeAttribute){j.removeAttribute(e);
}}}},fromHashCode:function(h){return this.__bc[h]||null;
},shutdown:function(){this.inShutDown=true;
var y=this.__bc;
var A=[];

for(var z in y){A.push(z);
}A.sort(function(a,b){return parseInt(b)-parseInt(a);
});
var x,i=0,l=A.length;

while(true){try{for(;i<l;i++){z=A[i];
x=y[z];

if(x&&x.dispose){x.dispose();
}}}catch(s){qx.Bootstrap.error(this,"Could not dispose object "+x.toString()+": "+s);

if(i!==l){i++;
continue;
}}break;
}qx.Bootstrap.debug(this,"Disposed "+l+" objects");
delete this.__bc;
},getRegistry:function(){return this.__bc;
}}});
})();
(function(){var a="qx.data.MBinding";
qx.Mixin.define(a,{members:{bind:function(b,c,d,e){return qx.data.SingleValueBinding.bind(this,b,c,d,e);
},removeBinding:function(f){qx.data.SingleValueBinding.removeBindingFromObject(this,f);
},removeAllBindings:function(){qx.data.SingleValueBinding.removeAllBindingsForObject(this);
},getBindings:function(){return qx.data.SingleValueBinding.getAllBindingsForObject(this);
}}});
})();
(function(){var k=":",j="qx.client",h="anonymous",g="...",f="qx.dev.StackTrace",e="",d="\n",c="/source/class/",b=".";
qx.Class.define(f,{statics:{getStackTrace:qx.core.Variant.select(j,{"gecko":function(){try{throw new Error();
}catch(a){var T=this.getStackTraceFromError(a);
qx.lang.Array.removeAt(T,0);
var R=this.getStackTraceFromCaller(arguments);
var P=R.length>T.length?R:T;

for(var i=0;i<Math.min(R.length,T.length);i++){var Q=R[i];

if(Q.indexOf(h)>=0){continue;
}var X=Q.split(k);

if(X.length!=2){continue;
}var V=X[0];
var O=X[1];
var N=T[i];
var Y=N.split(k);
var U=Y[0];
var M=Y[1];

if(qx.Class.getByName(U)){var S=U;
}else{S=V;
}var W=S+k;

if(O){W+=O+k;
}W+=M;
P[i]=W;
}return P;
}},"mshtml|webkit":function(){return this.getStackTraceFromCaller(arguments);
},"opera":function(){var K;

try{K.bar();
}catch(ba){var L=this.getStackTraceFromError(ba);
qx.lang.Array.removeAt(L,0);
return L;
}return [];
}}),getStackTraceFromCaller:qx.core.Variant.select(j,{"opera":function(bb){return [];
},"default":function(x){var C=[];
var B=qx.lang.Function.getCaller(x);
var y={};

while(B){var z=qx.lang.Function.getName(B);
C.push(z);

try{B=B.caller;
}catch(p){break;
}
if(!B){break;
}var A=qx.core.ObjectRegistry.toHashCode(B);

if(y[A]){C.push(g);
break;
}y[A]=B;
}return C;
}}),getStackTraceFromError:qx.core.Variant.select(j,{"gecko":function(D){if(!D.stack){return [];
}var J=/@(.+):(\d+)$/gm;
var E;
var F=[];

while((E=J.exec(D.stack))!=null){var G=E[1];
var I=E[2];
var H=this.__bB(G);
F.push(H+k+I);
}return F;
},"webkit":function(bc){if(bc.sourceURL&&bc.line){return [this.__bB(bc.sourceURL)+k+bc.line];
}else{return [];
}},"opera":function(q){if(q.message.indexOf("Backtrace:")<0){return [];
}var s=[];
var t=qx.lang.String.trim(q.message.split("Backtrace:")[1]);
var u=t.split(d);

for(var i=0;i<u.length;i++){var r=u[i].match(/\s*Line ([0-9]+) of.* (\S.*)/);

if(r&&r.length>=2){var w=r[1];
var v=this.__bB(r[2]);
s.push(v+k+w);
}}return s;
},"default":function(){return [];
}}),__bB:function(l){var o=c;
var m=l.indexOf(o);
var n=(m==-1)?l:l.substring(m+o.length).replace(/\//g,b).replace(/\.js$/,e);
return n;
}}});
})();
(function(){var a="qx.lang.RingBuffer";
qx.Class.define(a,{extend:Object,construct:function(b){this.setMaxEntries(b||50);
},members:{__bC:0,__bD:0,__bE:false,__bF:0,__bG:null,__bH:null,setMaxEntries:function(j){this.__bH=j;
this.clear();
},getMaxEntries:function(){return this.__bH;
},addEntry:function(h){this.__bG[this.__bC]=h;
this.__bC=this.__bI(this.__bC,1);
var i=this.getMaxEntries();

if(this.__bD<i){this.__bD++;
}if(this.__bE&&(this.__bF<i)){this.__bF++;
}},mark:function(){this.__bE=true;
this.__bF=0;
},clearMark:function(){this.__bE=false;
},getAllEntries:function(){return this.getEntries(this.getMaxEntries(),false);
},getEntries:function(c,d){if(c>this.__bD){c=this.__bD;
}if(d&&this.__bE&&(c>this.__bF)){c=this.__bF;
}
if(c>0){var f=this.__bI(this.__bC,-1);
var e=this.__bI(f,-c+1);
var g;

if(e<=f){g=this.__bG.slice(e,f+1);
}else{g=this.__bG.slice(e,this.__bD).concat(this.__bG.slice(0,f+1));
}}else{g=[];
}return g;
},clear:function(){this.__bG=new Array(this.getMaxEntries());
this.__bD=0;
this.__bF=0;
this.__bC=0;
},__bI:function(k,l){var m=this.getMaxEntries();
var n=(k+l)%m;
if(n<0){n+=m;
}return n;
}}});
})();
(function(){var a="qx.log.appender.RingBuffer";
qx.Class.define(a,{extend:qx.lang.RingBuffer,construct:function(d){this.setMaxMessages(d||50);
},members:{setMaxMessages:function(f){this.setMaxEntries(f);
},getMaxMessages:function(){return this.getMaxEntries();
},process:function(e){this.addEntry(e);
},getAllLogEvents:function(){return this.getAllEntries();
},retrieveLogEvents:function(b,c){return this.getEntries(b,c);
},clearHistory:function(){this.clear();
}}});
})();
(function(){var s="node",r="error",q="...(+",p="array",o=")",n="info",m="instance",k="string",j="null",h="class",N="number",M="stringify",L="]",K="unknown",J="function",I="boolean",H="debug",G="map",F="undefined",E="qx.log.Logger",z=")}",A="#",x="warn",y="document",v="{...(",w="[",t="text[",u="[...(",B="\n",C=")]",D="object";
qx.Class.define(E,{statics:{__bJ:H,setLevel:function(bz){this.__bJ=bz;
},getLevel:function(){return this.__bJ;
},setTreshold:function(bC){this.__bM.setMaxMessages(bC);
},getTreshold:function(){return this.__bM.getMaxMessages();
},__bK:{},__bL:0,register:function(bN){if(bN.$$id){return;
}var bO=this.__bL++;
this.__bK[bO]=bN;
bN.$$id=bO;
var bP=this.__bM.getAllLogEvents();

for(var i=0,l=bP.length;i<l;i++){bN.process(bP[i]);
}},unregister:function(bt){var bu=bt.$$id;

if(bu==null){return;
}delete this.__bK[bu];
delete bt.$$id;
},debug:function(bF,bG){qx.log.Logger.__bO(H,arguments);
},info:function(bA,bB){qx.log.Logger.__bO(n,arguments);
},warn:function(T,U){qx.log.Logger.__bO(x,arguments);
},error:function(bD,bE){qx.log.Logger.__bO(r,arguments);
},trace:function(g){qx.log.Logger.__bO(n,[g,qx.dev.StackTrace.getStackTrace().join(B)]);
},deprecatedMethodWarning:function(a,b){var c;
{};
},deprecatedClassWarning:function(bH,bI){var bJ;
{};
},deprecatedEventWarning:function(d,event,e){var f;
{};
},deprecatedMixinWarning:function(bK,bL){var bM;
{};
},deprecatedConstantWarning:function(bp,bq,br){var self,bs;
{};
},deprecateMethodOverriding:function(O,P,Q,R){var S;
{};
},clear:function(){this.__bM.clearHistory();
},__bM:new qx.log.appender.RingBuffer(50),__bN:{debug:0,info:1,warn:2,error:3},__bO:function(V,W){var bc=this.__bN;

if(bc[V]<bc[this.__bJ]){return;
}var Y=W.length<2?null:W[0];
var bb=Y?1:0;
var X=[];

for(var i=bb,l=W.length;i<l;i++){X.push(this.__bQ(W[i],true));
}var bd=new Date;
var be={time:bd,offset:bd-qx.Bootstrap.LOADSTART,level:V,items:X,win:window};
if(Y){if(Y instanceof qx.core.Object){be.object=Y.$$hash;
}else if(Y.$$type){be.clazz=Y;
}}this.__bM.process(be);
var bf=this.__bK;

for(var ba in bf){bf[ba].process(be);
}},__bP:function(bx){if(bx===undefined){return F;
}else if(bx===null){return j;
}
if(bx.$$type){return h;
}var by=typeof bx;

if(by===J||by==k||by===N||by===I){return by;
}else if(by===D){if(bx.nodeType){return s;
}else if(bx.classname){return m;
}else if(bx instanceof Array){return p;
}else if(bx instanceof Error){return r;
}else{return G;
}}
if(bx.toString){return M;
}return K;
},__bQ:function(bg,bh){var bo=this.__bP(bg);
var bk=K;
var bj=[];

switch(bo){case j:case F:bk=bo;
break;
case k:case N:case I:bk=bg;
break;
case s:if(bg.nodeType===9){bk=y;
}else if(bg.nodeType===3){bk=t+bg.nodeValue+L;
}else if(bg.nodeType===1){bk=bg.nodeName.toLowerCase();

if(bg.id){bk+=A+bg.id;
}}else{bk=s;
}break;
case J:bk=qx.lang.Function.getName(bg)||bo;
break;
case m:bk=bg.basename+w+bg.$$hash+L;
break;
case h:case M:bk=bg.toString();
break;
case r:bj=qx.dev.StackTrace.getStackTraceFromError(bg);
bk=bg.toString();
break;
case p:if(bh){bk=[];

for(var i=0,l=bg.length;i<l;i++){if(bk.length>20){bk.push(q+(l-i)+o);
break;
}bk.push(this.__bQ(bg[i],false));
}}else{bk=u+bg.length+C;
}break;
case G:if(bh){var bi;
var bn=[];

for(var bm in bg){bn.push(bm);
}bn.sort();
bk=[];

for(var i=0,l=bn.length;i<l;i++){if(bk.length>20){bk.push(q+(l-i)+o);
break;
}bm=bn[i];
bi=this.__bQ(bg[bm],false);
bi.key=bm;
bk.push(bi);
}}else{var bl=0;

for(var bm in bg){bl++;
}bk=v+bl+z;
}break;
}return {type:bo,text:bk,trace:bj};
}},defer:function(bv){var bw=qx.Bootstrap.$$logs;

for(var i=0;i<bw.length;i++){bv.__bO(bw[i][0],bw[i][1]);
}qx.Bootstrap.debug=bv.debug;
qx.Bootstrap.info=bv.info;
qx.Bootstrap.warn=bv.warn;
qx.Bootstrap.error=bv.error;
qx.Bootstrap.trace=bv.trace;
}});
})();
(function(){var t="set",s="get",r="reset",q="MSIE 6.0",p="qx.core.Object",o="]",n="rv:1.8.1",m="[",k="$$user_",j="Object";
qx.Class.define(p,{extend:Object,include:[qx.data.MBinding],construct:function(){qx.core.ObjectRegistry.register(this);
},statics:{$$type:j},members:{toHashCode:function(){return this.$$hash;
},toString:function(){return this.classname+m+this.$$hash+o;
},base:function(bE,bF){{};

if(arguments.length===1){return bE.callee.base.call(this);
}else{return bE.callee.base.apply(this,Array.prototype.slice.call(arguments,1));
}},self:function(U){return U.callee.self;
},clone:function(){var br=this.constructor;
var bq=new br;
var bt=qx.Class.getProperties(br);
var bs=qx.core.Property.$$store.user;
var bu=qx.core.Property.$$method.set;
var name;
for(var i=0,l=bt.length;i<l;i++){name=bt[i];

if(this.hasOwnProperty(bs[name])){bq[bu[name]](this[bs[name]]);
}}return bq;
},set:function(W,X){var ba=qx.core.Property.$$method.set;

if(qx.Bootstrap.isString(W)){if(!this[ba[W]]){if(this[t+qx.Bootstrap.firstUp(W)]!=undefined){this[t+qx.Bootstrap.firstUp(W)](X);
return this;
}{};
}return this[ba[W]](X);
}else{for(var Y in W){if(!this[ba[Y]]){if(this[t+qx.Bootstrap.firstUp(Y)]!=undefined){this[t+qx.Bootstrap.firstUp(Y)](W[Y]);
continue;
}{};
}this[ba[Y]](W[Y]);
}return this;
}},get:function(v){var w=qx.core.Property.$$method.get;

if(!this[w[v]]){if(this[s+qx.Bootstrap.firstUp(v)]!=undefined){return this[s+qx.Bootstrap.firstUp(v)]();
}{};
}return this[w[v]]();
},reset:function(bj){var bk=qx.core.Property.$$method.reset;

if(!this[bk[bj]]){if(this[r+qx.Bootstrap.firstUp(bj)]!=undefined){this[r+qx.Bootstrap.firstUp(bj)]();
return;
}{};
}this[bk[bj]]();
},__bR:qx.event.Registration,addListener:function(bl,bm,self,bn){if(!this.$$disposed){return this.__bR.addListener(this,bl,bm,self,bn);
}return null;
},addListenerOnce:function(bc,bd,self,be){var bf=function(e){bd.call(self||this,e);
this.removeListener(bc,bf,this,be);
};
return this.addListener(bc,bf,this,be);
},removeListener:function(H,I,self,J){if(!this.$$disposed){return this.__bR.removeListener(this,H,I,self,J);
}return false;
},removeListenerById:function(bD){if(!this.$$disposed){return this.__bR.removeListenerById(this,bD);
}return false;
},hasListener:function(bx,by){return this.__bR.hasListener(this,bx,by);
},dispatchEvent:function(x){if(!this.$$disposed){return this.__bR.dispatchEvent(this,x);
}return true;
},fireEvent:function(bg,bh,bi){if(!this.$$disposed){return this.__bR.fireEvent(this,bg,bh,bi);
}return true;
},fireNonBubblingEvent:function(a,b,c){if(!this.$$disposed){return this.__bR.fireNonBubblingEvent(this,a,b,c);
}return true;
},fireDataEvent:function(d,f,g,h){if(!this.$$disposed){if(g===undefined){g=null;
}return this.__bR.fireNonBubblingEvent(this,d,qx.event.type.Data,[f,g,!!h]);
}return true;
},__bS:null,setUserData:function(K,L){if(!this.__bS){this.__bS={};
}this.__bS[K]=L;
},getUserData:function(bv){if(!this.__bS){return null;
}var bw=this.__bS[bv];
return bw===undefined?null:bw;
},__bT:qx.log.Logger,debug:function(z){this.__bT.debug(this,z);
},info:function(A){this.__bT.info(this,A);
},warn:function(bb){this.__bT.warn(this,bb);
},error:function(u){this.__bT.error(this,u);
},trace:function(){this.__bT.trace(this);
},isDisposed:function(){return this.$$disposed||false;
},dispose:function(){var F,D,C,G;
if(this.$$disposed){return;
}this.$$disposed=true;
this.$$instance=null;
this.$$allowconstruct=null;
{};
var E=this.constructor;
var B;

while(E.superclass){if(E.$$destructor){E.$$destructor.call(this);
}if(E.$$includes){B=E.$$flatIncludes;

for(var i=0,l=B.length;i<l;i++){if(B[i].$$destructor){B[i].$$destructor.call(this);
}}}E=E.superclass;
}if(this.__bU){this.__bU();
}{};
},__bU:null,__bV:function(){var y=qx.Class.getProperties(this.constructor);

for(var i=0,l=y.length;i<l;i++){delete this[k+y[i]];
}},_disposeObjects:function(bG){qx.util.DisposeUtil.disposeObjects(this,arguments);
},_disposeSingletonObjects:function(bp){qx.util.DisposeUtil.disposeObjects(this,arguments,true);
},_disposeArray:function(V){qx.util.DisposeUtil.disposeArray(this,V);
},_disposeMap:function(bo){qx.util.DisposeUtil.disposeMap(this,bo);
}},settings:{"qx.disposerDebugLevel":0},defer:function(bz,bA){{};
var bC=navigator.userAgent.indexOf(q)!=-1;
var bB=navigator.userAgent.indexOf(n)!=-1;
if(bC||bB){bA.__bU=bA.__bV;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.event.Registration.removeAllListeners(this);
}else{qx.event.Registration.deleteAllListeners(this);
}qx.core.ObjectRegistry.unregister(this);
this.__bS=null;
var O=this.constructor;
var S;
var T=qx.core.Property.$$store;
var Q=T.user;
var R=T.theme;
var M=T.inherit;
var P=T.useinit;
var N=T.init;

while(O){S=O.$$properties;

if(S){for(var name in S){if(S[name].dereference){this[Q[name]]=this[R[name]]=this[M[name]]=this[P[name]]=this[N[name]]=undefined;
}}}O=O.superclass;
}}});
})();
(function(){var a="qx.event.IEventHandler";
qx.Interface.define(a,{statics:{TARGET_DOMNODE:1,TARGET_WINDOW:2,TARGET_OBJECT:3},members:{canHandleEvent:function(b,c){},registerEvent:function(d,e,f){},unregisterEvent:function(g,h,i){}}});
})();
(function(){var c="qx.globalErrorHandling",b="on",a="qx.event.GlobalError";
qx.Bootstrap.define(a,{statics:{setErrorHandler:function(k,l){this.__ct=k||null;
this.__cu=l||window;

if(qx.core.Setting.get(c)===b){if(k&&window.onerror){var m=qx.Bootstrap.bind(this.__cw,this);

if(this.__cv==null){this.__cv=window.onerror;
}var self=this;
window.onerror=function(e){self.__cv(e);
m(e);
};
}
if(k&&!window.onerror){window.onerror=qx.Bootstrap.bind(this.__cw,this);
}if(this.__ct==null){if(this.__cv!=null){window.onerror=this.__cv;
this.__cv=null;
}else{window.onerror=null;
}}}},__cw:function(d,f,g){if(this.__ct){this.handleError(new qx.core.WindowError(d,f,g));
return true;
}},observeMethod:function(n){if(qx.core.Setting.get(c)===b){var self=this;
return function(){if(!self.__ct){return n.apply(this,arguments);
}
try{return n.apply(this,arguments);
}catch(j){self.handleError(new qx.core.GlobalError(j,arguments));
}};
}else{return n;
}},handleError:function(i){if(this.__ct){this.__ct.call(this.__cu,i);
}}},defer:function(h){qx.core.Setting.define(c,b);
h.setErrorHandler(null,null);
}});
})();
(function(){var m="ready",l="qx.client",k="mshtml",j="load",i="unload",h="qx.event.handler.Application",g="complete",f="qx.application",d="gecko|opera|webkit",c="left",a="DOMContentLoaded",b="shutdown";
qx.Class.define(h,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(n){qx.core.Object.call(this);
this._window=n.getWindow();
this.__gO=false;
this.__gP=false;
this._initObserver();
qx.event.handler.Application.$$instance=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{ready:1,shutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true,onScriptLoaded:function(){var u=qx.event.handler.Application.$$instance;

if(u){u.__gS();
}}},members:{canHandleEvent:function(r,s){},registerEvent:function(y,z,A){},unregisterEvent:function(o,p,q){},__gQ:null,__gO:null,__gP:null,__gR:null,__gS:function(){if(!this.__gQ&&this.__gO&&qx.$$loader.scriptLoaded){try{var x=qx.core.Setting.get(f);

if(!qx.Class.getByName(x)){return;
}}catch(e){}if(qx.core.Variant.isSet(l,k)){if(qx.event.Registration.hasListener(this._window,m)){this.__gQ=true;
qx.event.Registration.fireEvent(this._window,m);
}}else{this.__gQ=true;
qx.event.Registration.fireEvent(this._window,m);
}}},isApplicationReady:function(){return this.__gQ;
},_initObserver:function(){if(qx.$$domReady||document.readyState==g||document.readyState==m){this.__gO=true;
this.__gS();
}else{this._onNativeLoadWrapped=qx.lang.Function.bind(this._onNativeLoad,this);

if(qx.core.Variant.isSet(l,d)){qx.bom.Event.addNativeListener(this._window,a,this._onNativeLoadWrapped);
}else if(qx.core.Variant.isSet(l,k)){var self=this;
var v=function(){try{document.documentElement.doScroll(c);

if(document.body){self._onNativeLoadWrapped();
}}catch(w){window.setTimeout(v,100);
}};
v();
}qx.bom.Event.addNativeListener(this._window,j,this._onNativeLoadWrapped);
}this._onNativeUnloadWrapped=qx.lang.Function.bind(this._onNativeUnload,this);
qx.bom.Event.addNativeListener(this._window,i,this._onNativeUnloadWrapped);
},_stopObserver:function(){if(this._onNativeLoadWrapped){qx.bom.Event.removeNativeListener(this._window,j,this._onNativeLoadWrapped);
}qx.bom.Event.removeNativeListener(this._window,i,this._onNativeUnloadWrapped);
this._onNativeLoadWrapped=null;
this._onNativeUnloadWrapped=null;
},_onNativeLoad:qx.event.GlobalError.observeMethod(function(){this.__gO=true;
this.__gS();
}),_onNativeUnload:qx.event.GlobalError.observeMethod(function(){if(!this.__gR){this.__gR=true;

try{qx.event.Registration.fireEvent(this._window,b);
}catch(e){throw e;
}finally{qx.core.ObjectRegistry.shutdown();
}}})},destruct:function(){this._stopObserver();
this._window=null;
},defer:function(t){qx.event.Registration.addHandler(t);
}});
})();
(function(){var g="qx.event.handler.Window";
qx.Class.define(g,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(k){qx.core.Object.call(this);
this._manager=k;
this._window=k.getWindow();
this._initWindowObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{error:1,load:1,beforeunload:1,unload:1,resize:1,scroll:1,beforeshutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(t,u){},registerEvent:function(n,o,p){},unregisterEvent:function(h,i,j){},_initWindowObserver:function(){this._onNativeWrapper=qx.lang.Function.listener(this._onNative,this);
var m=qx.event.handler.Window.SUPPORTED_TYPES;

for(var l in m){qx.bom.Event.addNativeListener(this._window,l,this._onNativeWrapper);
}},_stopWindowObserver:function(){var s=qx.event.handler.Window.SUPPORTED_TYPES;

for(var r in s){qx.bom.Event.removeNativeListener(this._window,r,this._onNativeWrapper);
}},_onNative:qx.event.GlobalError.observeMethod(function(e){if(this.isDisposed()){return;
}var b=this._window;

try{var f=b.document;
}catch(e){return ;
}var c=f.documentElement;
var a=e.target||e.srcElement;

if(a==null||a===b||a===f||a===c){var event=qx.event.Registration.createEvent(e.type,qx.event.type.Native,[e,b]);
qx.event.Registration.dispatchEvent(b,event);
var d=event.getReturnValue();

if(d!=null){e.returnValue=d;
return d;
}}})},destruct:function(){this._stopWindowObserver();
this._manager=this._window=null;
},defer:function(q){qx.event.Registration.addHandler(q);
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
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,construct:function(b){this._manager=b;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST},members:{canDispatchEvent:function(j,event,k){return !event.getBubbles();
},dispatchEvent:function(c,event,d){var g,e;
{};
event.setEventPhase(qx.event.type.Event.AT_TARGET);
var h=this._manager.getListeners(c,d,false);

if(h){for(var i=0,l=h.length;i<l;i++){var f=h[i].context||c;
h[i].handler.call(f,event);
}}}},defer:function(m){qx.event.Registration.addDispatcher(m);
}});
})();
(function(){var f="ready",d="qx.application",c="beforeunload",b="qx.core.Init",a="shutdown";
qx.Class.define(b,{statics:{getApplication:function(){return this.__gT||null;
},ready:function(){if(this.__gT){return;
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

if(i){this.__gT=new i;
var g=new Date;
this.__gT.main();
qx.log.Logger.debug(this,"Main runtime: "+(new Date-g)+"ms");
var g=new Date;
this.__gT.finalize();
qx.log.Logger.debug(this,"Finalize runtime: "+(new Date-g)+"ms");
}else{qx.log.Logger.warn("Missing application class: "+h);
}},__gU:function(e){var k=this.__gT;

if(k){e.setReturnValue(k.close());
}},__gV:function(){var l=this.__gT;

if(l){l.terminate();
}}},defer:function(j){qx.event.Registration.addListener(window,f,j.ready,j);
qx.event.Registration.addListener(window,a,j.__gV,j);
qx.event.Registration.addListener(window,c,j.__gU,j);
}});
})();
(function(){var a="qx.application.IApplication";
qx.Interface.define(a,{members:{main:function(){},finalize:function(){},close:function(){},terminate:function(){}}});
})();
(function(){var a="qx.application.Native";
qx.Class.define(a,{extend:qx.core.Object,implement:[qx.application.IApplication],members:{main:function(){},finalize:function(){},close:function(){},terminate:function(){}}});
})();
(function(){var a="portal.Application";
qx.Class.define(a,{extend:qx.application.Native,members:{main:function(){qx.application.Native.prototype.main.call(this);
{};
portal.box.Manager.getInstance().load();
portal.dragdrop.Manager.getInstance();
}}});
})();
(function(){var j="qx.event.type.Event";
qx.Class.define(j,{extend:qx.core.Object,statics:{CAPTURING_PHASE:1,AT_TARGET:2,BUBBLING_PHASE:3},members:{init:function(l,m){{};
this._type=null;
this._target=null;
this._currentTarget=null;
this._relatedTarget=null;
this._originalTarget=null;
this._stopPropagation=false;
this._preventDefault=false;
this._bubbles=!!l;
this._cancelable=!!m;
this._timeStamp=(new Date()).getTime();
this._eventPhase=null;
return this;
},clone:function(c){if(c){var d=c;
}else{var d=qx.event.Pool.getInstance().getObject(this.constructor);
}d._type=this._type;
d._target=this._target;
d._currentTarget=this._currentTarget;
d._relatedTarget=this._relatedTarget;
d._originalTarget=this._originalTarget;
d._stopPropagation=this._stopPropagation;
d._bubbles=this._bubbles;
d._preventDefault=this._preventDefault;
d._cancelable=this._cancelable;
return d;
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
},setType:function(h){this._type=h;
},getEventPhase:function(){return this._eventPhase;
},setEventPhase:function(k){this._eventPhase=k;
},getTimeStamp:function(){return this._timeStamp;
},getTarget:function(){return this._target;
},setTarget:function(e){this._target=e;
},getCurrentTarget:function(){return this._currentTarget||this._target;
},setCurrentTarget:function(b){this._currentTarget=b;
},getRelatedTarget:function(){return this._relatedTarget;
},setRelatedTarget:function(a){this._relatedTarget=a;
},getOriginalTarget:function(){return this._originalTarget;
},setOriginalTarget:function(g){this._originalTarget=g;
},getBubbles:function(){return this._bubbles;
},setBubbles:function(f){this._bubbles=f;
},isCancelable:function(){return this._cancelable;
},setCancelable:function(i){this._cancelable=i;
}},destruct:function(){this._target=this._currentTarget=this._relatedTarget=this._originalTarget=null;
}});
})();
(function(){var a="qx.event.type.Data";
qx.Class.define(a,{extend:qx.event.type.Event,members:{__cc:null,__cd:null,init:function(d,e,f){qx.event.type.Event.prototype.init.call(this,false,f);
this.__cc=d;
this.__cd=e;
return this;
},clone:function(b){var c=qx.event.type.Event.prototype.clone.call(this,b);
c.__cc=this.__cc;
c.__cd=this.__cd;
return c;
},getData:function(){return this.__cc;
},getOldData:function(){return this.__cd;
}},destruct:function(){this.__cc=this.__cd=null;
}});
})();
(function(){var cI="get",cH="",cG="[",cF="last",cE="change",cD="]",cC=".",cB="Number",cA="String",cz="set",cX="deepBinding",cW="item",cV="reset",cU="' (",cT="Boolean",cS=") to the object '",cR="Integer",cQ="qx.data.SingleValueBinding",cP="No event could be found for the property",cO="Binding from '",cM="PositiveNumber",cN="PositiveInteger",cK="Binding does not exist!",cL=").",cJ="Date";
qx.Class.define(cQ,{statics:{DEBUG_ON:false,__ce:{},bind:function(cg,ch,ci,cj,ck){var cu=this.__cg(cg,ch,ci,cj,ck);
var cp=ch.split(cC);
var cm=this.__cn(cp);
var ct=[];
var cq=[];
var cr=[];
var cn=[];
var co=cg;
for(var i=0;i<cp.length;i++){if(cm[i]!==cH){cn.push(cE);
}else{cn.push(this.__ci(co,cp[i]));
}ct[i]=co;
if(i==cp.length-1){if(cm[i]!==cH){var cx=cm[i]===cF?co.length-1:cm[i];
var cl=co.getItem(cx);
this.__cm(cl,ci,cj,ck,cg);
cr[i]=this.__co(co,cn[i],ci,cj,ck,cm[i]);
}else{if(cp[i]!=null&&co[cI+qx.lang.String.firstUp(cp[i])]!=null){var cl=co[cI+qx.lang.String.firstUp(cp[i])]();
this.__cm(cl,ci,cj,ck,cg);
}cr[i]=this.__co(co,cn[i],ci,cj,ck);
}}else{var cv={index:i,propertyNames:cp,sources:ct,listenerIds:cr,arrayIndexValues:cm,targetObject:ci,targetPropertyChain:cj,options:ck,listeners:cq};
var cs=qx.lang.Function.bind(this.__cf,this,cv);
cq.push(cs);
cr[i]=co.addListener(cn[i],cs);
}if(co[cI+qx.lang.String.firstUp(cp[i])]==null){co=null;
}else if(cm[i]!==cH){co=co[cI+qx.lang.String.firstUp(cp[i])](cm[i]);
}else{co=co[cI+qx.lang.String.firstUp(cp[i])]();
}
if(!co){break;
}}var cw={type:cX,listenerIds:cr,sources:ct,targetListenerIds:cu.listenerIds,targets:cu.targets};
this.__cp(cw,cg,ch,ci,cj);
return cw;
},__cf:function(G){if(G.options&&G.options.onUpdate){G.options.onUpdate(G.sources[G.index],G.targetObject);
}for(var j=G.index+1;j<G.propertyNames.length;j++){var K=G.sources[j];
G.sources[j]=null;

if(!K){continue;
}K.removeListenerById(G.listenerIds[j]);
}var K=G.sources[G.index];
for(var j=G.index+1;j<G.propertyNames.length;j++){if(G.arrayIndexValues[j-1]!==cH){K=K[cI+qx.lang.String.firstUp(G.propertyNames[j-1])](G.arrayIndexValues[j-1]);
}else{K=K[cI+qx.lang.String.firstUp(G.propertyNames[j-1])]();
}G.sources[j]=K;
if(!K){this.__cj(G.targetObject,G.targetPropertyChain);
break;
}if(j==G.propertyNames.length-1){if(qx.Class.implementsInterface(K,qx.data.IListData)){var L=G.arrayIndexValues[j]===cF?K.length-1:G.arrayIndexValues[j];
var I=K.getItem(L);
this.__cm(I,G.targetObject,G.targetPropertyChain,G.options,G.sources[G.index]);
G.listenerIds[j]=this.__co(K,cE,G.targetObject,G.targetPropertyChain,G.options,G.arrayIndexValues[j]);
}else{if(G.propertyNames[j]!=null&&K[cI+qx.lang.String.firstUp(G.propertyNames[j])]!=null){var I=K[cI+qx.lang.String.firstUp(G.propertyNames[j])]();
this.__cm(I,G.targetObject,G.targetPropertyChain,G.options,G.sources[G.index]);
}var J=this.__ci(K,G.propertyNames[j]);
G.listenerIds[j]=this.__co(K,J,G.targetObject,G.targetPropertyChain,G.options);
}}else{if(G.listeners[j]==null){var H=qx.lang.Function.bind(this.__cf,this,G);
G.listeners.push(H);
}if(qx.Class.implementsInterface(K,qx.data.IListData)){var J=cE;
}else{var J=this.__ci(K,G.propertyNames[j]);
}G.listenerIds[j]=K.addListener(J,G.listeners[j]);
}}},__cg:function(bD,bE,bF,bG,bH){var bL=bG.split(cC);
var bJ=this.__cn(bL);
var bQ=[];
var bP=[];
var bN=[];
var bM=[];
var bK=bF;
for(var i=0;i<bL.length-1;i++){if(bJ[i]!==cH){bM.push(cE);
}else{try{bM.push(this.__ci(bK,bL[i]));
}catch(e){break;
}}bQ[i]=bK;
var bO=function(){for(var j=i+1;j<bL.length-1;j++){var g=bQ[j];
bQ[j]=null;

if(!g){continue;
}g.removeListenerById(bN[j]);
}var g=bQ[i];
for(var j=i+1;j<bL.length-1;j++){var d=qx.lang.String.firstUp(bL[j-1]);
if(bJ[j-1]!==cH){var h=bJ[j-1]===cF?g.getLength()-1:bJ[j-1];
g=g[cI+d](h);
}else{g=g[cI+d]();
}bQ[j]=g;
if(bP[j]==null){bP.push(bO);
}if(qx.Class.implementsInterface(g,qx.data.IListData)){var f=cE;
}else{try{var f=qx.data.SingleValueBinding.__ci(g,bL[j]);
}catch(e){break;
}}bN[j]=g.addListener(f,bP[j]);
}qx.data.SingleValueBinding.__ch(bD,bE,bF,bG,bH);
};
bP.push(bO);
bN[i]=bK.addListener(bM[i],bO);
var bI=qx.lang.String.firstUp(bL[i]);
if(bK[cI+bI]==null){bK=null;
}else if(bJ[i]!==cH){bK=bK[cI+bI](bJ[i]);
}else{bK=bK[cI+bI]();
}
if(!bK){break;
}}return {listenerIds:bN,targets:bQ};
},__ch:function(bR,bS,bT,bU,bV){var ca=this.__cl(bR,bS);

if(ca!=null){var cc=bS.substring(bS.lastIndexOf(cC)+1,bS.length);
if(cc.charAt(cc.length-1)==cD){var bW=cc.substring(cc.lastIndexOf(cG)+1,cc.length-1);
var bY=cc.substring(0,cc.lastIndexOf(cG));
var cb=ca[cI+qx.lang.String.firstUp(bY)]();

if(bW==cF){bW=cb.length-1;
}
if(cb!=null){var bX=cb.getItem(bW);
}}else{var bX=ca[cI+qx.lang.String.firstUp(cc)]();
}}bX=qx.data.SingleValueBinding.__cq(bX,bT,bU,bV);
this.__ck(bT,bU,bX);
},__ci:function(y,z){var A=this.__cr(y,z);
if(A==null){if(qx.Class.supportsEvent(y.constructor,z)){A=z;
}else if(qx.Class.supportsEvent(y.constructor,cE+qx.lang.String.firstUp(z))){A=cE+qx.lang.String.firstUp(z);
}else{throw new qx.core.AssertionError(cP,z);
}}return A;
},__cj:function(k,l){var m=this.__cl(k,l);

if(m!=null){var n=l.substring(l.lastIndexOf(cC)+1,l.length);
if(n.charAt(n.length-1)==cD){this.__ck(k,l,null);
return;
}if(m[cV+qx.lang.String.firstUp(n)]!=undefined){m[cV+qx.lang.String.firstUp(n)]();
}else{m[cz+qx.lang.String.firstUp(n)](null);
}}},__ck:function(bv,bw,bx){var bB=this.__cl(bv,bw);

if(bB!=null){var bC=bw.substring(bw.lastIndexOf(cC)+1,bw.length);
if(bC.charAt(bC.length-1)==cD){var by=bC.substring(bC.lastIndexOf(cG)+1,bC.length-1);
var bA=bC.substring(0,bC.lastIndexOf(cG));
var bz=bB[cI+qx.lang.String.firstUp(bA)]();

if(by==cF){by=bz.length-1;
}
if(bz!=null){bz.setItem(by,bx);
}}else{bB[cz+qx.lang.String.firstUp(bC)](bx);
}}},__cl:function(o,p){var s=p.split(cC);
var t=o;
for(var i=0;i<s.length-1;i++){try{var r=s[i];
if(r.indexOf(cD)==r.length-1){var q=r.substring(r.indexOf(cG)+1,r.length-1);
r=r.substring(0,r.indexOf(cG));
}t=t[cI+qx.lang.String.firstUp(r)]();

if(q!=null){if(q==cF){q=t.length-1;
}t=t.getItem(q);
q=null;
}}catch(bi){return null;
}}return t;
},__cm:function(B,C,D,E,F){B=this.__cq(B,C,D,E);
if(B==null){this.__cj(C,D);
}if(B!=undefined){try{this.__ck(C,D,B);
if(E&&E.onUpdate){E.onUpdate(F,C,B);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(E&&E.onSetFail){E.onSetFail(e);
}else{this.warn("Failed so set value "+B+" on "+C+". Error message: "+e);
}}}},__cn:function(bf){var bg=[];
for(var i=0;i<bf.length;i++){var name=bf[i];
if(qx.lang.String.endsWith(name,cD)){var bh=name.substring(name.indexOf(cG)+1,name.indexOf(cD));
if(name.indexOf(cD)!=name.length-1){throw new Error("Please use only one array at a time: "+name+" does not work.");
}
if(bh!==cF){if(bh==cH||isNaN(parseInt(bh))){throw new Error("No number or 'last' value hast been given"+" in a array binding: "+name+" does not work.");
}}if(name.indexOf(cG)!=0){bf[i]=name.substring(0,name.indexOf(cG));
bg[i]=cH;
bg[i+1]=bh;
bf.splice(i+1,0,cW);
i++;
}else{bg[i]=bh;
bf.splice(i,1,cW);
}}else{bg[i]=cH;
}}return bg;
},__co:function(V,W,X,Y,ba,bb){var bc;
{};
var be=function(bo,e){if(bo!==cH){if(bo===cF){bo=V.length-1;
}var br=V.getItem(bo);
if(br==undefined){qx.data.SingleValueBinding.__cj(X,Y);
}var bp=e.getData().start;
var bq=e.getData().end;

if(bo<bp||bo>bq){return;
}}else{var br=e.getData();
}if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Binding executed from "+V+" by "+W+" to "+X+" ("+Y+")");
qx.log.Logger.debug("Data before conversion: "+br);
}br=qx.data.SingleValueBinding.__cq(br,X,Y,ba);
if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Data after conversion: "+br);
}try{if(br!=undefined){qx.data.SingleValueBinding.__ck(X,Y,br);
}else{qx.data.SingleValueBinding.__cj(X,Y);
}if(ba&&ba.onUpdate){ba.onUpdate(V,X,br);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(ba&&ba.onSetFail){ba.onSetFail(e);
}else{this.warn("Failed so set value "+br+" on "+X+". Error message: "+e);
}}};
if(!bb){bb=cH;
}be=qx.lang.Function.bind(be,V,bb);
var bd=V.addListener(W,be);
return bd;
},__cp:function(bj,bk,bl,bm,bn){if(this.__ce[bk.toHashCode()]===undefined){this.__ce[bk.toHashCode()]=[];
}this.__ce[bk.toHashCode()].push([bj,bk,bl,bm,bn]);
},__cq:function(M,N,O,P){if(P&&P.converter){var R;

if(N.getModel){R=N.getModel();
}return P.converter(M,R);
}else{var T=this.__cl(N,O);
var U=O.substring(O.lastIndexOf(cC)+1,O.length);
if(T==null){return M;
}var S=qx.Class.getPropertyDefinition(T.constructor,U);
var Q=S==null?cH:S.check;
return this.__cs(M,Q);
}},__cr:function(cd,ce){var cf=qx.Class.getPropertyDefinition(cd.constructor,ce);

if(cf==null){return null;
}return cf.event;
},__cs:function(bs,bt){var bu=qx.lang.Type.getClass(bs);
if((bu==cB||bu==cA)&&(bt==cR||bt==cN)){bs=parseInt(bs);
}if((bu==cT||bu==cB||bu==cJ)&&bt==cA){bs=bs+cH;
}if((bu==cB||bu==cA)&&(bt==cB||bt==cM)){bs=parseFloat(bs);
}return bs;
},removeBindingFromObject:function(a,b){if(b.type==cX){for(var i=0;i<b.sources.length;i++){if(b.sources[i]){b.sources[i].removeListenerById(b.listenerIds[i]);
}}for(var i=0;i<b.targets.length;i++){if(b.targets[i]){b.targets[i].removeListenerById(b.targetListenerIds[i]);
}}}else{a.removeListenerById(b);
}var c=this.__ce[a.toHashCode()];
if(c!=undefined){for(var i=0;i<c.length;i++){if(c[i][0]==b){qx.lang.Array.remove(c,c[i]);
return;
}}}throw new Error("Binding could not be found!");
},removeAllBindingsForObject:function(cY){{};
var da=this.__ce[cY.toHashCode()];

if(da!=undefined){for(var i=da.length-1;i>=0;i--){this.removeBindingFromObject(cY,da[i][0]);
}}},getAllBindingsForObject:function(cy){if(this.__ce[cy.toHashCode()]===undefined){this.__ce[cy.toHashCode()]=[];
}return this.__ce[cy.toHashCode()];
},removeAllBindings:function(){for(var de in this.__ce){var dd=qx.core.ObjectRegistry.fromHashCode(de);
if(dd==null){delete this.__ce[de];
continue;
}this.removeAllBindingsForObject(dd);
}this.__ce={};
},getAllBindings:function(){return this.__ce;
},showBindingInLog:function(u,v){var x;
for(var i=0;i<this.__ce[u.toHashCode()].length;i++){if(this.__ce[u.toHashCode()][i][0]==v){x=this.__ce[u.toHashCode()][i];
break;
}}
if(x===undefined){var w=cK;
}else{var w=cO+x[1]+cU+x[2]+cS+x[3]+cU+x[4]+cL;
}qx.log.Logger.debug(w);
},showAllBindingsInLog:function(){for(var dc in this.__ce){var db=qx.core.ObjectRegistry.fromHashCode(dc);

for(var i=0;i<this.__ce[dc].length;i++){this.showBindingInLog(db,this.__ce[dc][i][0]);
}}}}});
})();
(function(){var I="",H="g",G="0",F='\\$1',E="%",D='-',C="qx.lang.String",B=' ',A='\n',z="undefined";
qx.Class.define(C,{statics:{camelCase:function(a){return a.replace(/\-([a-z])/g,function(v,w){return w.toUpperCase();
});
},hyphenate:function(Q){return Q.replace(/[A-Z]/g,function(L){return (D+L.charAt(0).toLowerCase());
});
},capitalize:function(l){return l.replace(/\b[a-z]/g,function(s){return s.toUpperCase();
});
},clean:function(M){return this.trim(M.replace(/\s+/g,B));
},trimLeft:function(c){return c.replace(/^\s+/,I);
},trimRight:function(t){return t.replace(/\s+$/,I);
},trim:function(f){return f.replace(/^\s+|\s+$/g,I);
},startsWith:function(O,P){return O.indexOf(P)===0;
},endsWith:function(x,y){return x.substring(x.length-y.length,x.length)===y;
},repeat:function(d,e){return d.length>0?new Array(e+1).join(d):I;
},pad:function(p,length,q){var r=length-p.length;

if(r>0){if(typeof q===z){q=G;
}return this.repeat(q,r)+p;
}else{return p;
}},firstUp:qx.Bootstrap.firstUp,firstLow:qx.Bootstrap.firstLow,contains:function(J,K){return J.indexOf(K)!=-1;
},format:function(m,n){var o=m;

for(var i=0;i<n.length;i++){o=o.replace(new RegExp(E+(i+1),H),n[i]+I);
}return o;
},escapeRegexpChars:function(b){return b.replace(/([.*+?^${}()|[\]\/\\])/g,F);
},toArray:function(u){return u.split(/\B|\b/g);
},stripTags:function(N){return N.replace(/<\/?[^>]+>/gi,I);
},stripScripts:function(g,h){var k=I;
var j=g.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(){k+=arguments[1]+A;
return I;
});

if(h===true){qx.lang.Function.globalEval(k);
}return j;
}}});
})();
(function(){var c="qx.event.type.Data",b="qx.event.type.Event",a="qx.data.IListData";
qx.Interface.define(a,{events:{"change":c,"changeLength":b},members:{getItem:function(j){},setItem:function(h,i){},splice:function(d,e,f){},contains:function(g){},getLength:function(){},toArray:function(){}}});
})();
(function(){var a="qx.lang.Date";
qx.Class.define(a,{statics:{now:function(){return +new Date;
}}});
})();
(function(){var b="",a="qx.core.WindowError";
qx.Bootstrap.define(a,{extend:Error,construct:function(c,d,e){Error.call(this,c);
this.__cx=c;
this.__cy=d||b;
this.__cz=e===undefined?-1:e;
},members:{__cx:null,__cy:null,__cz:null,toString:function(){return this.__cx;
},getUri:function(){return this.__cy;
},getLineNumber:function(){return this.__cz;
}}});
})();
(function(){var b="GlobalError: ",a="qx.core.GlobalError";
qx.Bootstrap.define(a,{extend:Error,construct:function(c,d){{};
this.__cA=b+(c&&c.message?c.message:c);
Error.call(this,this.__cA);
this.__cB=d;
this.__cC=c;
},members:{__cC:null,__cB:null,__cA:null,toString:function(){return this.__cA;
},getArguments:function(){return this.__cB;
},getSourceException:function(){return this.__cC;
}},destruct:function(){this.__cC=null;
this.__cB=null;
this.__cA=null;
}});
})();
(function(){var c=": ",b="qx.type.BaseError",a="";
qx.Class.define(b,{extend:Error,construct:function(d,e){Error.call(this,e);
this.__cD=d||a;
this.message=e||qx.type.BaseError.DEFAULTMESSAGE;
},statics:{DEFAULTMESSAGE:"error"},members:{__cD:null,message:null,getComment:function(){return this.__cD;
},toString:function(){return this.__cD+c+this.message;
}}});
})();
(function(){var a="qx.core.AssertionError";
qx.Class.define(a,{extend:qx.type.BaseError,construct:function(b,c){qx.type.BaseError.call(this,b,c);
this.__cE=qx.dev.StackTrace.getStackTrace();
},members:{__cE:null,getStackTrace:function(){return this.__cE;
}}});
})();
(function(){var a="qx.core.ValidationError";
qx.Class.define(a,{extend:qx.type.BaseError});
})();
(function(){var g="qx.lang.Type",f="Error",e="RegExp",d="Date",c="Number",b="Boolean";
qx.Class.define(g,{statics:{getClass:qx.Bootstrap.getClass,isString:qx.Bootstrap.isString,isArray:qx.Bootstrap.isArray,isObject:qx.Bootstrap.isObject,isFunction:qx.Bootstrap.isFunction,isRegExp:function(k){return this.getClass(k)==e;
},isNumber:function(j){return (j!==null&&(this.getClass(j)==c||j instanceof Number));
},isBoolean:function(h){return (h!==null&&(this.getClass(h)==b||h instanceof Boolean));
},isDate:function(i){return (i!==null&&(this.getClass(i)==d||i instanceof Date));
},isError:function(a){return (a!==null&&(this.getClass(a)==f||a instanceof Error));
}}});
})();
(function(){var b="qx.util.ObjectPool",a="Integer";
qx.Class.define(b,{extend:qx.core.Object,construct:function(f){qx.core.Object.call(this);
this.__cF={};

if(f!=null){this.setSize(f);
}},properties:{size:{check:a,init:Infinity}},members:{__cF:null,getObject:function(k){if(this.$$disposed){return new k;
}
if(!k){throw new Error("Class needs to be defined!");
}var m=null;
var n=this.__cF[k.classname];

if(n){m=n.pop();
}
if(m){m.$$pooled=false;
}else{m=new k;
}return m;
},poolObject:function(g){if(!this.__cF){return;
}var h=g.classname;
var j=this.__cF[h];

if(g.$$pooled){throw new Error("Object is already pooled: "+g);
}
if(!j){this.__cF[h]=j=[];
}if(j.length>this.getSize()){if(g.destroy){g.destroy();
}else{g.dispose();
}return;
}g.$$pooled=true;
j.push(g);
}},destruct:function(){var e=this.__cF;
var c,d,i,l;

for(c in e){d=e[c];

for(i=0,l=d.length;i<l;i++){d[i].dispose();
}}delete this.__cF;
}});
})();
(function(){var b="singleton",a="qx.event.Pool";
qx.Class.define(a,{extend:qx.util.ObjectPool,type:b,construct:function(){qx.util.ObjectPool.call(this,30);
}});
})();
(function(){var e="qx.util.DisposeUtil";
qx.Class.define(e,{statics:{disposeObjects:function(g,h,j){var name;

for(var i=0,l=h.length;i<l;i++){name=h[i];

if(g[name]==null||!g.hasOwnProperty(name)){continue;
}
if(!qx.core.ObjectRegistry.inShutDown){if(g[name].dispose){if(!j&&g[name].constructor.$$instance){throw new Error("The object stored in key "+name+" is a singleton! Please use disposeSingleton instead.");
}else{g[name].dispose();
}}else{throw new Error("Has no disposable object under key: "+name+"!");
}}g[name]=null;
}},disposeArray:function(a,b){var d=a[b];

if(!d){return;
}if(qx.core.ObjectRegistry.inShutDown){a[b]=null;
return;
}try{var c;

for(var i=d.length-1;i>=0;i--){c=d[i];

if(c){c.dispose();
}}}catch(k){throw new Error("The array field: "+b+" of object: "+a+" has non disposable entries: "+k);
}d.length=0;
a[b]=null;
},disposeMap:function(m,n){var o=m[n];

if(!o){return;
}if(qx.core.ObjectRegistry.inShutDown){m[n]=null;
return;
}try{for(var p in o){if(o.hasOwnProperty(p)){o[p].dispose();
}}}catch(f){throw new Error("The map field: "+n+" of object: "+m+" has non disposable entries: "+f);
}m[n]=null;
},disposeTriggeredBy:function(q,r){var s=r.dispose;
r.dispose=function(){s.call(r);
q.dispose();
};
}}});
})();
(function(){var a="qx.event.handler.Object";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST,SUPPORTED_TYPES:null,TARGET_CHECK:qx.event.IEventHandler.TARGET_OBJECT,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(e,f){return qx.Class.supportsEvent(e.constructor,f);
},registerEvent:function(g,h,i){},unregisterEvent:function(b,c,d){}},defer:function(j){qx.event.Registration.addHandler(j);
}});
})();
(function(){var k="indexOf",j="lastIndexOf",h="slice",g="concat",f="join",e="toLocaleUpperCase",d="shift",c="substr",b="filter",a="unshift",I="match",H="quote",G="qx.lang.Generics",F="localeCompare",E="sort",D="some",C="charAt",B="split",A="substring",z="pop",t="toUpperCase",u="replace",q="push",r="charCodeAt",o="every",p="reverse",m="search",n="forEach",v="map",w="toLowerCase",y="splice",x="toLocaleLowerCase";
qx.Class.define(G,{statics:{__cG:{"Array":[f,p,E,q,z,d,a,y,g,h,k,j,n,v,b,D,o],"String":[H,A,w,t,C,r,k,j,x,e,F,I,m,u,B,c,g,h]},__cH:function(P,Q){return function(s){return P.prototype[Q].apply(s,Array.prototype.slice.call(arguments,1));
};
},__cI:function(){var J=qx.lang.Generics.__cG;

for(var N in J){var L=window[N];
var K=J[N];

for(var i=0,l=K.length;i<l;i++){var M=K[i];

if(!L[M]){L[M]=qx.lang.Generics.__cH(L,M);
}}}}},defer:function(O){O.__cI();
}});
})();
(function(){var a="qx.event.type.Native";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(d,e,f,g,h){qx.event.type.Event.prototype.init.call(this,g,h);
this._target=e||qx.bom.Event.getTarget(d);
this._relatedTarget=f||qx.bom.Event.getRelatedTarget(d);

if(d.timeStamp){this._timeStamp=d.timeStamp;
}this._native=d;
this._returnValue=null;
return this;
},clone:function(j){var k=qx.event.type.Event.prototype.clone.call(this,j);
var l={};
k._native=this._cloneNativeEvent(this._native,l);
k._returnValue=this._returnValue;
return k;
},_cloneNativeEvent:function(b,c){c.preventDefault=qx.lang.Function.empty;
return c;
},preventDefault:function(){qx.event.type.Event.prototype.preventDefault.call(this);
qx.bom.Event.preventDefault(this._native);
},getNativeEvent:function(){return this._native;
},setReturnValue:function(i){this._returnValue=i;
},getReturnValue:function(){return this._returnValue;
}},destruct:function(){this._native=this._returnValue=null;
}});
})();
(function(){var n="iPod",m="Win32",l="",k="Win64",j="Linux",i="BSD",h="Macintosh",g="iPhone",f="Windows",e="qx.bom.client.Platform",b="iPad",d="X11",c="MacIntel",a="MacPPC";
qx.Class.define(e,{statics:{NAME:"",WIN:false,MAC:false,UNIX:false,UNKNOWN_PLATFORM:false,__dL:function(){var p=navigator.platform;
if(p==null||p===l){p=navigator.userAgent;
}
if(p.indexOf(f)!=-1||p.indexOf(m)!=-1||p.indexOf(k)!=-1){this.WIN=true;
this.NAME="win";
}else if(p.indexOf(h)!=-1||p.indexOf(a)!=-1||p.indexOf(c)!=-1||p.indexOf(n)!=-1||p.indexOf(g)!=-1||p.indexOf(b)!=-1){this.MAC=true;
this.NAME="mac";
}else if(p.indexOf(d)!=-1||p.indexOf(j)!=-1||p.indexOf(i)!=-1){this.UNIX=true;
this.NAME="unix";
}else{this.UNKNOWN_PLATFORM=true;
this.WIN=true;
this.NAME="win";
}}},defer:function(o){o.__dL();
}});
})();
(function(){var j="win98",i="osx2",h="osx0",g="osx4",f="win95",e="win2000",d="osx1",c="osx5",b="osx3",a="Windows NT 5.01",H=")",G="winxp",F="freebsd",E="sunos",D="SV1",C="|",B="nintendods",A="winnt4",z="wince",y="winme",q="os9",r="\.",o="osx",p="linux",m="netbsd",n="winvista",k="openbsd",l="(",s="win2003",t="symbian",v="win7",u="g",x="qx.bom.client.System",w=" Mobile/";
qx.Class.define(x,{statics:{NAME:"",SP1:false,SP2:false,WIN95:false,WIN98:false,WINME:false,WINNT4:false,WIN2000:false,WINXP:false,WIN2003:false,WINVISTA:false,WIN7:false,WINCE:false,LINUX:false,SUNOS:false,FREEBSD:false,NETBSD:false,OPENBSD:false,OSX:false,OS9:false,SYMBIAN:false,NINTENDODS:false,PSP:false,IPHONE:false,UNKNOWN_SYSTEM:false,__dY:{"Windows NT 6.1":v,"Windows NT 6.0":n,"Windows NT 5.2":s,"Windows NT 5.1":G,"Windows NT 5.0":e,"Windows 2000":e,"Windows NT 4.0":A,"Win 9x 4.90":y,"Windows CE":z,"Windows 98":j,"Win98":j,"Windows 95":f,"Win95":f,"Linux":p,"FreeBSD":F,"NetBSD":m,"OpenBSD":k,"SunOS":E,"Symbian System":t,"Nitro":B,"PSP":"sonypsp","Mac OS X 10_5":c,"Mac OS X 10.5":c,"Mac OS X 10_4":g,"Mac OS X 10.4":g,"Mac OS X 10_3":b,"Mac OS X 10.3":b,"Mac OS X 10_2":i,"Mac OS X 10.2":i,"Mac OS X 10_1":d,"Mac OS X 10.1":d,"Mac OS X 10_0":h,"Mac OS X 10.0":h,"Mac OS X":o,"Mac OS 9":q},__ea:function(){var K=navigator.userAgent;
var J=[];

for(var I in this.__dY){J.push(I);
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
}else{this.NAME=this.__dY[RegExp.$1];
this[this.NAME.toUpperCase()]=true;

if(qx.bom.client.Platform.WIN){if(K.indexOf(a)!==-1){this.SP1=true;
}else if(qx.bom.client.Engine.MSHTML&&K.indexOf(D)!==-1){this.SP2=true;
}}}}},defer:function(M){M.__ea();
}});
})();
(function(){var m="groupBoxes",h="boxData",g="portal.box.Box",f="portal.box.Manager",e="qx.event.type.Event",d="boxes",c="_applyActiveBox",b="loaded",a="singleton";
qx.Class.define(f,{type:a,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__Bj=[];
this.__Bk=[];
this.__Bl={};
},statics:{dataKeyRoot:h,dataKeyGroupBoxes:m,dataKeyBoxes:d},events:{"loaded":e},properties:{activeBox:{init:null,check:g,apply:c}},members:{__Bj:null,__Bk:null,__Bl:null,_applyActiveBox:function(C,D){if(D!=null){D.setActive(false);
}C.setActive(true);
},load:function(){this.__Bm(window[portal.box.Manager.dataKeyRoot]);
qx.event.Registration.fireEvent(this,b);
},__Bm:function(n){var r,u,s,t,v,n;
var o=n[portal.box.Manager.dataKeyGroupBoxes];
var q=n[portal.box.Manager.dataKeyBoxes];
for(var u in o){r=o[u];
s=r.boxes;
u=r.id;
t={id:u,element:document.getElementById(u)};
this.__Bk.push(t);
this.__Bl[u]=[];
for(var k=0,l=s.length;k<l;k++){n=q[s[k]];
var p=document.getElementById(n.id);
var v=new portal.box.Box(n,p,null,u);
this.__Bj.push(v);
this.__Bl[u].push(v);
}}},getBoxes:function(){return this.__Bj;
},getGroupBoxes:function(){return this.__Bk;
},updateGroupBoxMembers:function(w,x,y){var z=qx.dom.Hierarchy.getElementIndex(y.getElement());
qx.lang.Array.remove(this.__Bl[x],y);
qx.lang.Array.insertAt(this.__Bl[w],y,z);
},getGroupBoxDataOfBox:function(A){for(var i=0,j=this.__Bk.length,B;i<j;i++){B=this.__Bl[this.__Bk[i].id];

for(var k=0,l=B.length;k<l;k++){if(B[k].getId()===A){return this.__Bk[i];
}}}return null;
}},destruct:function(){this.__Bj=this.__Bk=this.__Bl=null;
}});
})();
(function(){var s="Boolean",r="<br/><br/>",q="border",p="portal.box.Box",o="click",n="1px solid #444444",m="height",l="position",k="zIndex",j="_applyActive",c="width",i="box_content",g=" It does contain no UI widget code at all.",b="relative",a="1px solid orange",f="This is a demo application showing the low-level capabilities.",d="div",h="String";
qx.Class.define(p,{extend:qx.core.Object,construct:function(A,B,C,D){qx.core.Object.call(this);
this.__Bn=A;
this.__Bo=A.id;

if(B!=null){qx.bom.element.Style.set(B,c,A.width);
qx.bom.element.Style.set(B,m,A.height);
this.__Br(B,C);
}this.setElement(B);
this.setGroupBoxId(D);
this.__Bp=null;
this.__Bq=null;
if(A.resizable){this.setResizable(true);
var E={minWidth:parseInt(A.minWidth),minHeight:parseInt(A.minHeight),maxWidth:parseInt(A.maxWidth),maxHeight:parseInt(A.maxHeight),handles:A.resizeHandles};
this.__Bp=new portal.box.Resizable(this,E);
}if(A.draggable){this.setDraggable(true);
this.__Bq=new portal.box.Draggable(this);
}this.__Bs();
},properties:{element:{init:null},groupBoxId:{init:null,check:h},active:{check:s,init:false,apply:j},resizable:{check:s,init:false},draggable:{check:s,init:false}},members:{__Bo:null,__Bn:null,__Bq:null,__Bp:null,_applyActive:function(y,z){if(y){qx.bom.element.Style.set(this.getElement(),q,a);
}else{qx.bom.element.Style.set(this.getElement(),q,n);
}},getId:function(){return this.getElement()?this.getElement().id:null;
},getData:function(){return this.__Bn;
},getDraggableComponent:function(){return this.__Bq;
},getResizableComponent:function(){return this.__Bp;
},__Br:function(v,w){if(w){for(var x in w){qx.bom.element.Style.set(x,w[x]);
}}qx.bom.element.Style.set(v,l,b);
qx.bom.element.Style.set(v,k,0);
qx.bom.Element.addListener(v,o,this.__Bt,this,true);
},__Bs:function(){var u=f+g;
u=u+r+u+r+u;
var t=qx.bom.Element.create(d,{"class":i});
t.innerHTML=u;
qx.dom.Element.insertEnd(t,this.getElement());
},__Bt:function(e){portal.box.Manager.getInstance().setActiveBox(this);
}},destruct:function(){this.resetElement();
this.__Bn=this.__Bp=this.__Bq=null;
}});
})();
(function(){var n="auto",m="px",l=",",k="clip:auto;",j="rect(",i=");",h="",g=")",f="qx.bom.element.Clip",e="string",b="rect(auto)",d="clip:rect(",c="clip",a="rect(auto,auto,auto,auto)";
qx.Class.define(f,{statics:{compile:function(p){if(!p){return k;
}var u=p.left;
var top=p.top;
var t=p.width;
var s=p.height;
var q,r;

if(u==null){q=(t==null?n:t+m);
u=n;
}else{q=(t==null?n:u+t+m);
u=u+m;
}
if(top==null){r=(s==null?n:s+m);
top=n;
}else{r=(s==null?n:top+s+m);
top=top+m;
}return d+top+l+q+l+r+l+u+i;
},get:function(v,w){var y=qx.bom.element.Style.get(v,c,w,false);
var D,top,B,A;
var x,z;

if(typeof y===e&&y!==n&&y!==h){y=qx.lang.String.trim(y);
if(/\((.*)\)/.test(y)){var C=RegExp.$1.split(l);
top=qx.lang.String.trim(C[0]);
x=qx.lang.String.trim(C[1]);
z=qx.lang.String.trim(C[2]);
D=qx.lang.String.trim(C[3]);
if(D===n){D=null;
}
if(top===n){top=null;
}
if(x===n){x=null;
}
if(z===n){z=null;
}if(top!=null){top=parseInt(top,10);
}
if(x!=null){x=parseInt(x,10);
}
if(z!=null){z=parseInt(z,10);
}
if(D!=null){D=parseInt(D,10);
}if(x!=null&&D!=null){B=x-D;
}else if(x!=null){B=x;
}
if(z!=null&&top!=null){A=z-top;
}else if(z!=null){A=z;
}}else{throw new Error("Could not parse clip string: "+y);
}}return {left:D||null,top:top||null,width:B||null,height:A||null};
},set:function(E,F){if(!F){E.style.clip=a;
return;
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
}E.style.clip=j+top+l+G+l+H+l+K+g;
},reset:function(o){o.style.clip=qx.bom.client.Engine.MSHTML?b:n;
}}});
})();
(function(){var l="n-resize",k="e-resize",j="nw-resize",i="ne-resize",h="",g="cursor:",f="qx.client",e=";",d="qx.bom.element.Cursor",c="cursor",b="hand";
qx.Class.define(d,{statics:{__fD:qx.core.Variant.select(f,{"mshtml":{"cursor":b,"ew-resize":k,"ns-resize":l,"nesw-resize":i,"nwse-resize":j},"opera":{"col-resize":k,"row-resize":l,"ew-resize":k,"ns-resize":l,"nesw-resize":i,"nwse-resize":j},"default":{}}),compile:function(a){return g+(this.__fD[a]||a)+e;
},get:function(o,p){return qx.bom.element.Style.get(o,c,p,false);
},set:function(m,n){m.style.cursor=this.__fD[n]||n;
},reset:function(q){q.style.cursor=h;
}}});
})();
(function(){var p="",o="qx.client",n=";",m="filter",l="opacity:",k="opacity",j="MozOpacity",i=");",h=")",g="zoom:1;filter:alpha(opacity=",d="qx.bom.element.Opacity",f="alpha(opacity=",e="-moz-opacity:";
qx.Class.define(d,{statics:{compile:qx.core.Variant.select(o,{"mshtml":function(B){if(B>=1){return p;
}
if(B<0.00001){B=0;
}return g+(B*100)+i;
},"gecko":function(t){if(t==1){t=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){return e+t+n;
}else{return l+t+n;
}},"default":function(q){if(q==1){return p;
}return l+q+n;
}}),set:qx.core.Variant.select(o,{"mshtml":function(a,b){var c=qx.bom.element.Style.get(a,m,qx.bom.element.Style.COMPUTED_MODE,false);
if(b>=1){a.style.filter=c.replace(/alpha\([^\)]*\)/gi,p);
return;
}
if(b<0.00001){b=0;
}if(!a.currentStyle||!a.currentStyle.hasLayout){a.style.zoom=1;
}a.style.filter=c.replace(/alpha\([^\)]*\)/gi,p)+f+b*100+h;
},"gecko":function(E,F){if(F==1){F=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){E.style.MozOpacity=F;
}else{E.style.opacity=F;
}},"default":function(C,D){if(D==1){D=p;
}C.style.opacity=D;
}}),reset:qx.core.Variant.select(o,{"mshtml":function(r){var s=qx.bom.element.Style.get(r,m,qx.bom.element.Style.COMPUTED_MODE,false);
r.style.filter=s.replace(/alpha\([^\)]*\)/gi,p);
},"gecko":function(H){if(qx.bom.client.Engine.VERSION<1.7){H.style.MozOpacity=p;
}else{H.style.opacity=p;
}},"default":function(G){G.style.opacity=p;
}}),get:qx.core.Variant.select(o,{"mshtml":function(x,y){var z=qx.bom.element.Style.get(x,m,y,false);

if(z){var A=z.match(/alpha\(opacity=(.*)\)/);

if(A&&A[1]){return parseFloat(A[1])/100;
}}return 1.0;
},"gecko":function(I,J){var K=qx.bom.element.Style.get(I,qx.bom.client.Engine.VERSION<1.7?j:k,J,false);

if(K==0.999999){K=1.0;
}
if(K!=null){return parseFloat(K);
}return 1.0;
},"default":function(u,v){var w=qx.bom.element.Style.get(u,k,v,false);

if(w!=null){return parseFloat(w);
}return 1.0;
}})}});
})();
(function(){var r="qx.client",q="",p="boxSizing",o="box-sizing",n=":",m="border-box",k="qx.bom.element.BoxSizing",j="KhtmlBoxSizing",h="-moz-box-sizing",g="WebkitBoxSizing",d=";",f="-khtml-box-sizing",e="content-box",c="-webkit-box-sizing",b="MozBoxSizing";
qx.Class.define(k,{statics:{__fE:qx.core.Variant.select(r,{"mshtml":null,"webkit":[p,j,g],"gecko":[b],"opera":[p]}),__fF:qx.core.Variant.select(r,{"mshtml":null,"webkit":[o,f,c],"gecko":[h],"opera":[o]}),__fG:{tags:{button:true,select:true},types:{search:true,button:true,submit:true,reset:true,checkbox:true,radio:true}},__fH:function(t){var u=this.__fG;
return u.tags[t.tagName.toLowerCase()]||u.types[t.type];
},compile:qx.core.Variant.select(r,{"mshtml":function(B){{};
},"default":function(E){var G=this.__fF;
var F=q;

if(G){for(var i=0,l=G.length;i<l;i++){F+=G[i]+n+E+d;
}}return F;
}}),get:qx.core.Variant.select(r,{"mshtml":function(a){if(qx.bom.Document.isStandardMode(qx.dom.Node.getDocument(a))){if(!this.__fH(a)){return e;
}}return m;
},"default":function(y){var A=this.__fE;
var z;

if(A){for(var i=0,l=A.length;i<l;i++){z=qx.bom.element.Style.get(y,A[i],null,false);

if(z!=null&&z!==q){return z;
}}}return q;
}}),set:qx.core.Variant.select(r,{"mshtml":function(C,D){{};
},"default":function(v,w){var x=this.__fE;

if(x){for(var i=0,l=x.length;i<l;i++){v.style[x[i]]=w;
}}}}),reset:function(s){this.set(s,q);
}}});
})();
(function(){var bw="",bv="qx.client",bu="hidden",bt="-moz-scrollbars-none",bs="overflow",br=";",bq="overflowY",bp=":",bo="overflowX",bn="overflow:",bI="none",bH="scroll",bG="borderLeftStyle",bF="borderRightStyle",bE="div",bD="borderRightWidth",bC="overflow-y",bB="borderLeftWidth",bA="-moz-scrollbars-vertical",bz="100px",bx="qx.bom.element.Overflow",by="overflow-x";
qx.Class.define(bx,{statics:{__fC:null,getScrollbarWidth:function(){if(this.__fC!==null){return this.__fC;
}var d=qx.bom.element.Style;
var f=function(bK,bL){return parseInt(d.get(bK,bL))||0;
};
var g=function(bm){return (d.get(bm,bF)==bI?0:f(bm,bD));
};
var e=function(bh){return (d.get(bh,bG)==bI?0:f(bh,bB));
};
var i=qx.core.Variant.select(bv,{"mshtml":function(bO){if(d.get(bO,bq)==bu||bO.clientWidth==0){return g(bO);
}return Math.max(0,bO.offsetWidth-bO.clientLeft-bO.clientWidth);
},"default":function(Y){if(Y.clientWidth==0){var ba=d.get(Y,bs);
var bb=(ba==bH||ba==bA?16:0);
return Math.max(0,g(Y)+bb);
}return Math.max(0,(Y.offsetWidth-Y.clientWidth-e(Y)));
}});
var h=function(P){return i(P)-g(P);
};
var t=document.createElement(bE);
var s=t.style;
s.height=s.width=bz;
s.overflow=bH;
document.body.appendChild(t);
var c=h(t);
this.__fC=c?c:16;
document.body.removeChild(t);
return this.__fC;
},_compile:qx.core.Variant.select(bv,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(Q,R){if(R==bu){R=bt;
}return bn+R+br;
}:
function(bi,bj){return bi+bp+bj+br;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(S,T){return bn+T+br;
}:
function(bk,bl){return bk+bp+bl+br;
},"default":function(ce,cf){return ce+bp+cf+br;
}}),compileX:function(r){return this._compile(by,r);
},compileY:function(z){return this._compile(bC,z);
},getX:qx.core.Variant.select(bv,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(K,L){var M=qx.bom.element.Style.get(K,bs,L,false);

if(M===bt){M=bu;
}return M;
}:
function(N,O){return qx.bom.element.Style.get(N,bo,O,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bR,bS){return qx.bom.element.Style.get(bR,bs,bS,false);
}:
function(W,X){return qx.bom.element.Style.get(W,bo,X,false);
},"default":function(I,J){return qx.bom.element.Style.get(I,bo,J,false);
}}),setX:qx.core.Variant.select(bv,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bT,bU){if(bU==bu){bU=bt;
}bT.style.overflow=bU;
}:
function(ca,cb){ca.style.overflowX=cb;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(l,m){l.style.overflow=m;
}:
function(w,x){w.style.overflowX=x;
},"default":function(bV,bW){bV.style.overflowX=bW;
}}),resetX:qx.core.Variant.select(bv,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bJ){bJ.style.overflow=bw;
}:
function(bN){bN.style.overflowX=bw;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(n,o){n.style.overflow=bw;
}:
function(bf,bg){bf.style.overflowX=bw;
},"default":function(bM){bM.style.overflowX=bw;
}}),getY:qx.core.Variant.select(bv,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bc,bd){var be=qx.bom.element.Style.get(bc,bs,bd,false);

if(be===bt){be=bu;
}return be;
}:
function(C,D){return qx.bom.element.Style.get(C,bq,D,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(cc,cd){return qx.bom.element.Style.get(cc,bs,cd,false);
}:
function(j,k){return qx.bom.element.Style.get(j,bq,k,false);
},"default":function(bP,bQ){return qx.bom.element.Style.get(bP,bq,bQ,false);
}}),setY:qx.core.Variant.select(bv,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bX,bY){if(bY===bu){bY=bt;
}bX.style.overflow=bY;
}:
function(A,B){A.style.overflowY=B;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(E,F){E.style.overflow=F;
}:
function(a,b){a.style.overflowY=b;
},"default":function(U,V){U.style.overflowY=V;
}}),resetY:qx.core.Variant.select(bv,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(u){u.style.overflow=bw;
}:
function(y){y.style.overflowY=bw;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(G,H){G.style.overflow=bw;
}:
function(p,q){p.style.overflowY=bw;
},"default":function(v){v.style.overflowY=bw;
}})}});
})();
(function(){var o="",n="qx.client",m="userSelect",k="style",h="MozUserModify",g="px",f="float",e="borderImage",d="styleFloat",c="appearance",H="pixelHeight",G='Ms',F=":",E="cssFloat",D="pixelTop",C="pixelLeft",B='O',A="qx.bom.element.Style",z='Khtml',y='string',v="pixelRight",w='Moz',t="pixelWidth",u="pixelBottom",r=";",s="textOverflow",p="userModify",q='Webkit',x="WebkitUserModify";
qx.Class.define(A,{statics:{__fI:function(){var bj=[c,m,s,e];
var bn={};
var bk=document.documentElement.style;
var bo=[w,q,z,B,G];

for(var i=0,l=bj.length;i<l;i++){var bp=bj[i];
var bl=bp;

if(bk[bp]){bn[bl]=bp;
continue;
}bp=qx.lang.String.firstUp(bp);

for(var j=0,bq=bo.length;j<bq;j++){var bm=bo[j]+bp;

if(typeof bk[bm]==y){bn[bl]=bm;
break;
}}}this.__fJ=bn;
this.__fJ[p]=qx.core.Variant.select(n,{"gecko":h,"webkit":x,"default":m});
this.__fK={};

for(var bl in bn){this.__fK[bl]=this.__fO(bn[bl]);
}this.__fJ[f]=qx.core.Variant.select(n,{"mshtml":d,"default":E});
},__fL:{width:t,height:H,left:C,right:v,top:D,bottom:u},__fM:{clip:qx.bom.element.Clip,cursor:qx.bom.element.Cursor,opacity:qx.bom.element.Opacity,boxSizing:qx.bom.element.BoxSizing,overflowX:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setX,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getX,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetX,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileX,qx.bom.element.Overflow)},overflowY:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setY,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getY,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetY,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileY,qx.bom.element.Overflow)}},compile:function(J){var L=[];
var N=this.__fM;
var M=this.__fK;
var name,K;

for(name in J){K=J[name];

if(K==null){continue;
}name=M[name]||name;
if(N[name]){L.push(N[name].compile(K));
}else{L.push(this.__fO(name),F,K,r);
}}return L.join(o);
},__fN:{},__fO:function(bw){var bx=this.__fN;
var by=bx[bw];

if(!by){by=bx[bw]=qx.lang.String.hyphenate(bw);
}return by;
},setCss:qx.core.Variant.select(n,{"mshtml":function(bC,bD){bC.style.cssText=bD;
},"default":function(a,b){a.setAttribute(k,b);
}}),getCss:qx.core.Variant.select(n,{"mshtml":function(R){return R.style.cssText.toLowerCase();
},"default":function(I){return I.getAttribute(k);
}}),isPropertySupported:function(bB){return (this.__fM[bB]||this.__fJ[bB]||bB in document.documentElement.style);
},COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(O,name,P,Q){{};
name=this.__fJ[name]||name;
if(Q!==false&&this.__fM[name]){return this.__fM[name].set(O,P);
}else{O.style[name]=P!==null?P:o;
}},setStyles:function(bb,bc,bd){{};
var bg=this.__fJ;
var bi=this.__fM;
var be=bb.style;

for(var bh in bc){var bf=bc[bh];
var name=bg[bh]||bh;

if(bf===undefined){if(bd!==false&&bi[name]){bi[name].reset(bb);
}else{be[name]=o;
}}else{if(bd!==false&&bi[name]){bi[name].set(bb,bf);
}else{be[name]=bf!==null?bf:o;
}}}},reset:function(bz,name,bA){name=this.__fJ[name]||name;
if(bA!==false&&this.__fM[name]){return this.__fM[name].reset(bz);
}else{bz.style[name]=o;
}},get:qx.core.Variant.select(n,{"mshtml":function(S,name,T,U){name=this.__fJ[name]||name;
if(U!==false&&this.__fM[name]){return this.__fM[name].get(S,T);
}if(!S.currentStyle){return S.style[name]||o;
}switch(T){case this.LOCAL_MODE:return S.style[name]||o;
case this.CASCADED_MODE:return S.currentStyle[name]||o;
default:var Y=S.currentStyle[name]||o;
if(/^-?[\.\d]+(px)?$/i.test(Y)){return Y;
}var X=this.__fL[name];

if(X){var V=S.style[name];
S.style[name]=Y||0;
var W=S.style[X]+g;
S.style[name]=V;
return W;
}if(/^-?[\.\d]+(em|pt|%)?$/i.test(Y)){throw new Error("Untranslated computed property value: "+name+". Only pixel values work well across different clients.");
}return Y;
}},"default":function(br,name,bs,bt){name=this.__fJ[name]||name;
if(bt!==false&&this.__fM[name]){return this.__fM[name].get(br,bs);
}switch(bs){case this.LOCAL_MODE:return br.style[name]||o;
case this.CASCADED_MODE:if(br.currentStyle){return br.currentStyle[name]||o;
}throw new Error("Cascaded styles are not supported in this browser!");
default:var bu=qx.dom.Node.getDocument(br);
var bv=bu.defaultView.getComputedStyle(br,null);
return bv?bv[name]:o;
}}})},defer:function(ba){ba.__fI();
}});
})();
(function(){var f="CSS1Compat",e="position:absolute;width:0;height:0;width:1",d="qx.bom.Document",c="1px",b="qx.client",a="div";
qx.Class.define(d,{statics:{isQuirksMode:qx.core.Variant.select(b,{"mshtml":function(q){if(qx.bom.client.Engine.VERSION>=8){return (q||window).document.documentMode===5;
}else{return (q||window).document.compatMode!==f;
}},"webkit":function(k){if(document.compatMode===undefined){var l=(k||window).document.createElement(a);
l.style.cssText=e;
return l.style.width===c?true:false;
}else{return (k||window).document.compatMode!==f;
}},"default":function(g){return (g||window).document.compatMode!==f;
}}),isStandardMode:function(p){return !this.isQuirksMode(p);
},getWidth:function(h){var i=(h||window).document;
var j=qx.bom.Viewport.getWidth(h);
var scroll=this.isStandardMode(h)?i.documentElement.scrollWidth:i.body.scrollWidth;
return Math.max(scroll,j);
},getHeight:function(m){var n=(m||window).document;
var o=qx.bom.Viewport.getHeight(m);
var scroll=this.isStandardMode(m)?n.documentElement.scrollHeight:n.body.scrollHeight;
return Math.max(scroll,o);
}}});
})();
(function(){var b="qx.client",a="qx.bom.Viewport";
qx.Class.define(a,{statics:{getWidth:qx.core.Variant.select(b,{"opera":function(p){if(qx.bom.client.Engine.VERSION<9.5){return (p||window).document.body.clientWidth;
}else{var q=(p||window).document;
return qx.bom.Document.isStandardMode(p)?q.documentElement.clientWidth:q.body.clientWidth;
}},"webkit":function(g){if(qx.bom.client.Engine.VERSION<523.15){return (g||window).innerWidth;
}else{var h=(g||window).document;
return qx.bom.Document.isStandardMode(g)?h.documentElement.clientWidth:h.body.clientWidth;
}},"default":function(r){var s=(r||window).document;
return qx.bom.Document.isStandardMode(r)?s.documentElement.clientWidth:s.body.clientWidth;
}}),getHeight:qx.core.Variant.select(b,{"opera":function(e){if(qx.bom.client.Engine.VERSION<9.5){return (e||window).document.body.clientHeight;
}else{var f=(e||window).document;
return qx.bom.Document.isStandardMode(e)?f.documentElement.clientHeight:f.body.clientHeight;
}},"webkit":function(i){if(qx.bom.client.Engine.VERSION<523.15){return (i||window).innerHeight;
}else{var j=(i||window).document;
return qx.bom.Document.isStandardMode(i)?j.documentElement.clientHeight:j.body.clientHeight;
}},"default":function(c){var d=(c||window).document;
return qx.bom.Document.isStandardMode(c)?d.documentElement.clientHeight:d.body.clientHeight;
}}),getScrollLeft:qx.core.Variant.select(b,{"mshtml":function(k){var l=(k||window).document;
return l.documentElement.scrollLeft||l.body.scrollLeft;
},"default":function(t){return (t||window).pageXOffset;
}}),getScrollTop:qx.core.Variant.select(b,{"mshtml":function(n){var o=(n||window).document;
return o.documentElement.scrollTop||o.body.scrollTop;
},"default":function(m){return (m||window).pageYOffset;
}})}});
})();
(function(){var c="portal.box.Resizable",b="mouseover",a="mouseout";
qx.Class.define(c,{extend:qx.core.Object,construct:function(g,h){qx.core.Object.call(this);
this.__Bu=g;
this.__Bv=this.__Bu.getElement();
this.__Bw={};
this.__Bx=false;
this.__By={orientation:null,lastCoord:{left:null,top:null}};
this.__Bz={minWidth:10,minHeight:10,maxWidth:null,maxHeight:null,autoHide:true,handles:3};

for(var name in this.__Bz){if(h[name]){this.__Bz[name]=h[name];
}}this.__BA();
},members:{__By:null,__Bu:null,__Bv:null,__Bw:null,__Bz:null,__Bx:false,getBox:function(){return this.__Bu;
},__BA:function(){switch(this.__Bz.handles){case 1:this.__Bw.east=null;
break;
case 2:this.__Bw.south=null;
break;
case 3:this.__Bw.south=null;
this.__Bw.southeast=null;
this.__Bw.east=null;
break;
}for(var u in this.__Bw){var t=this.__Bw[u]=qx.bom.Element.create("div");
qx.bom.element.Attribute.set(t,"orientation",u);
qx.dom.Element.insertEnd(t,this.__Bv);

if(this.__Bv.id){t.id=this.__Bv.id+"_"+u;
}this.__BB(u);
this.__BC(u);
}},__BB:function(v){qx.bom.element.Class.add(this.__Bw[v],v+"Handle");
qx.bom.element.Style.set(this.__Bw[v],"visibility",this.__Bz.autoHide?"hidden":"visible");
},__BC:function(w){var y=qx.event.Registration;
var x=this.__Bw[w];
y.addListener(x,"mousedown",this.__BF,this);
y.addListener(document.body,"mouseup",this.__BG,this);

if(this.__Bz.autoHide){y.addListener(this.__Bu.getElement(),"mouseover",this.__BD,this);
y.addListener(this.__Bu.getElement(),"mouseout",this.__BE,this);
}},__BD:function(e){for(var i in this.__Bw){qx.bom.element.Style.set(this.__Bw[i],"visibility","visible");
}},__BE:function(e){if(!this.__Bx){for(var d in this.__Bw){qx.bom.element.Style.set(this.__Bw[d],"visibility","hidden");
}}},__BF:function(e){e.stopPropagation();
if(e.isLeftPressed()){qx.event.Registration.addListener(document.body,"mousemove",this.__BH,this,true);
this.__Bx=true;
var j=e.getTarget();
this.__By.orientation=qx.bom.element.Attribute.get(j,"orientation");
this.__By.lastCoord.left=e.getDocumentLeft();
this.__By.lastCoord.top=e.getDocumentTop();
portal.box.Util.bringToFront(this.__Bv);
}},__BG:function(e){e.stopPropagation();

if(this.__Bx){qx.event.Registration.removeListener(document.body,"mousemove",this.__BH,this,true);
portal.box.Util.sendToBack(this.__Bv);

if(this.__Bz.autoHide){for(var f in this.__Bw){qx.bom.element.Style.set(this.__Bw[f],"visibility","hidden");
}}this.__Bx=false;
qx.bom.Selection.clear(document.body);
}},__BH:function(e){e.stopPropagation();

if(this.__Bx){var z={left:null,top:null};

switch(this.__By.orientation){case "south":z.top=e.getDocumentTop();
break;
case "southeast":z.top=e.getDocumentTop();
z.left=e.getDocumentLeft();
break;
case "east":z.left=e.getDocumentLeft();
break;
}this.__BI(z,this.__By.lastCoord);
this.__By.lastCoord.left=e.getDocumentLeft();
this.__By.lastCoord.top=e.getDocumentTop();
}},__BI:function(k,l){var s=qx.bom.element.Dimension;
var p=portal.box.Manager.getInstance().getGroupBoxDataOfBox(this.__Bu.getId());
var r=s.getContentSize(p.element);

if(k.left){var o=k.left-l.left;

if(o!==0){var n=s.getContentWidth(this.__Bv)+o;
var q=s.getWidth(this.__Bv)+o;

if((this.__Bz.minWidth==null||n>this.__Bz.minWidth)&&(this.__Bz.maxWidth==null||n<=this.__Bz.maxWidth)){if(r.width>=q){qx.bom.element.Style.set(this.__Bv,"width",n+'px');
}}}}
if(k.top){var o=k.top-l.top;

if(o!==0){var m=s.getContentHeight(this.__Bv)+o;

if((this.__Bz.minHeight==null||m>this.__Bz.minHeight)&&(this.__Bz.maxHeight==null||m<=this.__Bz.maxHeight)){qx.bom.element.Style.set(this.__Bv,"height",m+"px");
}}}}},destruct:function(){if(this.__Bz.autoHide){qx.event.Registration.removeListener(this.__Bu.getElement(),b,this.__BD,this);
qx.event.Registration.removeListener(this.__Bu.getElement(),a,this.__BE,this);
}this.__Bu=this.__Bz=this.__Bv=this.__Bw=null;
this.__By=null;
}});
})();
(function(){var t="abstract",s="qx.event.dispatch.AbstractBubbling";
qx.Class.define(s,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,type:t,construct:function(u){this._manager=u;
},members:{_getParent:function(v){throw new Error("Missing implementation");
},canDispatchEvent:function(w,event,x){return event.getBubbles();
},dispatchEvent:function(a,event,b){var parent=a;
var m=this._manager;
var h,q;
var f;
var l,o;
var n;
var p=[];
h=m.getListeners(a,b,true);
q=m.getListeners(a,b,false);

if(h){p.push(h);
}
if(q){p.push(q);
}var parent=this._getParent(a);
var d=[];
var c=[];
var e=[];
var k=[];
while(parent!=null){h=m.getListeners(parent,b,true);

if(h){e.push(h);
k.push(parent);
}q=m.getListeners(parent,b,false);

if(q){d.push(q);
c.push(parent);
}parent=this._getParent(parent);
}event.setEventPhase(qx.event.type.Event.CAPTURING_PHASE);

for(var i=e.length-1;i>=0;i--){n=k[i];
event.setCurrentTarget(n);
f=e[i];

for(var j=0,g=f.length;j<g;j++){l=f[j];
o=l.context||n;
l.handler.call(o,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.AT_TARGET);
event.setCurrentTarget(a);

for(var i=0,r=p.length;i<r;i++){f=p[i];

for(var j=0,g=f.length;j<g;j++){l=f[j];
o=l.context||a;
l.handler.call(o,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.BUBBLING_PHASE);

for(var i=0,r=d.length;i<r;i++){n=c[i];
event.setCurrentTarget(n);
f=d[i];

for(var j=0,g=f.length;j<g;j++){l=f[j];
o=l.context||n;
l.handler.call(o,event);
}
if(event.getPropagationStopped()){return;
}}}}});
})();
(function(){var a="qx.event.dispatch.DomBubbling";
qx.Class.define(a,{extend:qx.event.dispatch.AbstractBubbling,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL},members:{_getParent:function(b){return b.parentNode;
},canDispatchEvent:function(d,event,e){return d.nodeType!==undefined&&event.getBubbles();
}},defer:function(c){qx.event.Registration.addDispatcher(c);
}});
})();
(function(){var a="qx.event.handler.UserAction";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(b){qx.core.Object.call(this);
this.__cJ=b;
this.__cK=b.getWindow();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__cJ:null,__cK:null,canHandleEvent:function(d,e){},registerEvent:function(f,g,h){},unregisterEvent:function(i,j,k){}},destruct:function(){this.__cJ=this.__cK=null;
},defer:function(c){qx.event.Registration.addHandler(c);
}});
})();
(function(){var z="keydown",y="qx.client",x="keypress",w="NumLock",v="keyup",u="Enter",t="0",s="9",r="-",q="PageUp",bH="+",bG="PrintScreen",bF="gecko",bE="A",bD="Z",bC="Left",bB="F5",bA="Down",bz="Up",by="F11",G="F6",H="useraction",E="F3",F="keyinput",C="Insert",D="F8",A="End",B="/",O="Delete",P="*",bc="cmd",X="F1",bk="F4",bf="Home",bu="F2",bp="F12",T="PageDown",bx="F7",bw="Win",bv="F9",S="F10",V="Right",W="text",ba="Escape",bd="webkit",bg="5",bm="3",br="Meta",I="7",J="CapsLock",U="input",bj="Control",bi="Space",bh="Tab",bo="Shift",bn="Pause",be="Unidentified",bl="qx.event.handler.Keyboard",n="mshtml|webkit",bq="6",K="off",L="Apps",Y="4",o="Alt",p="mshtml",R="2",M="Scroll",N="1",Q="8",bb="autoComplete",bt=",",bs="Backspace";
qx.Class.define(bl,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(cn){qx.core.Object.call(this);
this.__dM=cn;
this.__dN=cn.getWindow();
if(qx.core.Variant.isSet(y,bF)){this.__dO=this.__dN;
}else{this.__dO=this.__dN.document.documentElement;
}this.__dP={};
this._initKeyObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{keyup:1,keydown:1,keypress:1,keyinput:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,isValidKeyIdentifier:function(bJ){if(this._identifierToKeyCodeMap[bJ]){return true;
}
if(bJ.length!=1){return false;
}
if(bJ>=t&&bJ<=s){return true;
}
if(bJ>=bE&&bJ<=bD){return true;
}
switch(bJ){case bH:case r:case P:case B:return true;
default:return false;
}}},members:{__dQ:null,__dM:null,__dN:null,__dO:null,__dP:null,__dR:null,__dS:null,__dT:null,canHandleEvent:function(bT,bU){},registerEvent:function(cx,cy,cz){},unregisterEvent:function(cJ,cK,cL){},_fireInputEvent:function(ck,cl){var cm=this.__dU();
if(cm&&cm.offsetWidth!=0){var event=qx.event.Registration.createEvent(F,qx.event.type.KeyInput,[ck,cm,cl]);
this.__dM.dispatchEvent(cm,event);
}if(this.__dN){qx.event.Registration.fireEvent(this.__dN,H,qx.event.type.Data,[F]);
}},_fireSequenceEvent:function(bO,bP,bQ){var bR=this.__dU();
var bS=bO.keyCode;
var event=qx.event.Registration.createEvent(bP,qx.event.type.KeySequence,[bO,bR,bQ]);
this.__dM.dispatchEvent(bR,event);
if(qx.core.Variant.isSet(y,n)){if(bP==z&&event.getDefaultPrevented()){if(!this._isNonPrintableKeyCode(bS)&&!this._emulateKeyPress[bS]){this._fireSequenceEvent(bO,x,bQ);
}}}if(this.__dN){qx.event.Registration.fireEvent(this.__dN,H,qx.event.type.Data,[bP]);
}},__dU:function(){var cA=this.__dM.getHandler(qx.event.handler.Focus);
var cB=cA.getActive();
if(!cB||cB.offsetWidth==0){cB=cA.getFocus();
}if(!cB||cB.offsetWidth==0){cB=this.__dM.getWindow().document.body;
}return cB;
},_initKeyObserver:function(){this.__dQ=qx.lang.Function.listener(this.__dV,this);
this.__dT=qx.lang.Function.listener(this.__dX,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__dO,v,this.__dQ);
Event.addNativeListener(this.__dO,z,this.__dQ);
Event.addNativeListener(this.__dO,x,this.__dT);
},_stopKeyObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__dO,v,this.__dQ);
Event.removeNativeListener(this.__dO,z,this.__dQ);
Event.removeNativeListener(this.__dO,x,this.__dT);

for(var cD in (this.__dS||{})){var cC=this.__dS[cD];
Event.removeNativeListener(cC.target,x,cC.callback);
}delete (this.__dS);
},__dV:qx.event.GlobalError.observeMethod(qx.core.Variant.select(y,{"mshtml":function(ct){ct=window.event||ct;
var cw=ct.keyCode;
var cu=0;
var cv=ct.type;
if(!(this.__dP[cw]==z&&cv==z)){this._idealKeyHandler(cw,cu,cv,ct);
}if(cv==z){if(this._isNonPrintableKeyCode(cw)||this._emulateKeyPress[cw]){this._idealKeyHandler(cw,cu,x,ct);
}}this.__dP[cw]=cv;
},"gecko":function(i){var m=this._keyCodeFix[i.keyCode]||i.keyCode;
var k=0;
var l=i.type;
if(qx.bom.client.Platform.WIN){var j=m?this._keyCodeToIdentifier(m):this._charCodeToIdentifier(k);

if(!(this.__dP[j]==z&&l==z)){this._idealKeyHandler(m,k,l,i);
}this.__dP[j]=l;
}else{this._idealKeyHandler(m,k,l,i);
}this.__dW(i.target,l,m);
},"webkit":function(b){var e=0;
var c=0;
var d=b.type;
if(qx.bom.client.Engine.VERSION<525.13){if(d==v||d==z){e=this._charCode2KeyCode[b.charCode]||b.keyCode;
}else{if(this._charCode2KeyCode[b.charCode]){e=this._charCode2KeyCode[b.charCode];
}else{c=b.charCode;
}}this._idealKeyHandler(e,c,d,b);
}else{e=b.keyCode;
this._idealKeyHandler(e,c,d,b);
if(d==z){if(this._isNonPrintableKeyCode(e)||this._emulateKeyPress[e]){this._idealKeyHandler(e,c,x,b);
}}this.__dP[e]=d;
}},"opera":function(cI){this.__dR=cI.keyCode;
this._idealKeyHandler(cI.keyCode,0,cI.type,cI);
}})),__dW:qx.core.Variant.select(y,{"gecko":function(co,cp,cq){if(cp===z&&(cq==33||cq==34||cq==38||cq==40)&&co.type==W&&co.tagName.toLowerCase()===U&&co.getAttribute(bb)!==K){if(!this.__dS){this.__dS={};
}var cs=qx.core.ObjectRegistry.toHashCode(co);

if(this.__dS[cs]){return;
}var self=this;
this.__dS[cs]={target:co,callback:function(cd){qx.bom.Event.stopPropagation(cd);
self.__dX(cd);
}};
var cr=qx.event.GlobalError.observeMethod(this.__dS[cs].callback);
qx.bom.Event.addNativeListener(co,x,cr);
}},"default":null}),__dX:qx.event.GlobalError.observeMethod(qx.core.Variant.select(y,{"mshtml":function(cH){cH=window.event||cH;

if(this._charCode2KeyCode[cH.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[cH.keyCode],0,cH.type,cH);
}else{this._idealKeyHandler(0,cH.keyCode,cH.type,cH);
}},"gecko":function(bK){var bN=this._keyCodeFix[bK.keyCode]||bK.keyCode;
var bL=bK.charCode;
var bM=bK.type;
this._idealKeyHandler(bN,bL,bM,bK);
},"webkit":function(bV){if(qx.bom.client.Engine.VERSION<525.13){var bY=0;
var bW=0;
var bX=bV.type;

if(bX==v||bX==z){bY=this._charCode2KeyCode[bV.charCode]||bV.keyCode;
}else{if(this._charCode2KeyCode[bV.charCode]){bY=this._charCode2KeyCode[bV.charCode];
}else{bW=bV.charCode;
}}this._idealKeyHandler(bY,bW,bX,bV);
}else{if(this._charCode2KeyCode[bV.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[bV.keyCode],0,bV.type,bV);
}else{this._idealKeyHandler(0,bV.keyCode,bV.type,bV);
}}},"opera":function(f){var h=f.keyCode;
var g=f.type;
if(h!=this.__dR){this._idealKeyHandler(0,this.__dR,g,f);
}else{if(this._keyCodeToIdentifierMap[f.keyCode]){this._idealKeyHandler(f.keyCode,0,f.type,f);
}else{this._idealKeyHandler(0,f.keyCode,f.type,f);
}}}})),_idealKeyHandler:function(cf,cg,ch,ci){var cj;
if(cf||(!cf&&!cg)){cj=this._keyCodeToIdentifier(cf);
this._fireSequenceEvent(ci,ch,cj);
}else{cj=this._charCodeToIdentifier(cg);
this._fireSequenceEvent(ci,x,cj);
this._fireInputEvent(ci,cg);
}},_specialCharCodeMap:{8:bs,9:bh,13:u,27:ba,32:bi},_emulateKeyPress:qx.core.Variant.select(y,{"mshtml":{8:true,9:true},"webkit":{8:true,9:true,27:true},"default":{}}),_keyCodeToIdentifierMap:{16:bo,17:bj,18:o,20:J,224:br,37:bC,38:bz,39:V,40:bA,33:q,34:T,35:A,36:bf,45:C,46:O,112:X,113:bu,114:E,115:bk,116:bB,117:G,118:bx,119:D,120:bv,121:S,122:by,123:bp,144:w,44:bG,145:M,19:bn,91:qx.bom.client.Platform.MAC?bc:bw,92:bw,93:qx.bom.client.Platform.MAC?bc:L},_numpadToCharCode:{96:t.charCodeAt(0),97:N.charCodeAt(0),98:R.charCodeAt(0),99:bm.charCodeAt(0),100:Y.charCodeAt(0),101:bg.charCodeAt(0),102:bq.charCodeAt(0),103:I.charCodeAt(0),104:Q.charCodeAt(0),105:s.charCodeAt(0),106:P.charCodeAt(0),107:bH.charCodeAt(0),109:r.charCodeAt(0),110:bt.charCodeAt(0),111:B.charCodeAt(0)},_charCodeA:bE.charCodeAt(0),_charCodeZ:bD.charCodeAt(0),_charCode0:t.charCodeAt(0),_charCode9:s.charCodeAt(0),_isNonPrintableKeyCode:function(ce){return this._keyCodeToIdentifierMap[ce]?true:false;
},_isIdentifiableKeyCode:function(a){if(a>=this._charCodeA&&a<=this._charCodeZ){return true;
}if(a>=this._charCode0&&a<=this._charCode9){return true;
}if(this._specialCharCodeMap[a]){return true;
}if(this._numpadToCharCode[a]){return true;
}if(this._isNonPrintableKeyCode(a)){return true;
}return false;
},_keyCodeToIdentifier:function(cb){if(this._isIdentifiableKeyCode(cb)){var cc=this._numpadToCharCode[cb];

if(cc){return String.fromCharCode(cc);
}return (this._keyCodeToIdentifierMap[cb]||this._specialCharCodeMap[cb]||String.fromCharCode(cb));
}else{return be;
}},_charCodeToIdentifier:function(ca){return this._specialCharCodeMap[ca]||String.fromCharCode(ca).toUpperCase();
},_identifierToKeyCode:function(bI){return qx.event.handler.Keyboard._identifierToKeyCodeMap[bI]||bI.charCodeAt(0);
}},destruct:function(){this._stopKeyObserver();
this.__dR=this.__dM=this.__dN=this.__dO=this.__dP=null;
},defer:function(cE,cF){qx.event.Registration.addHandler(cE);
if(!cE._identifierToKeyCodeMap){cE._identifierToKeyCodeMap={};

for(var cG in cF._keyCodeToIdentifierMap){cE._identifierToKeyCodeMap[cF._keyCodeToIdentifierMap[cG]]=parseInt(cG,10);
}
for(var cG in cF._specialCharCodeMap){cE._identifierToKeyCodeMap[cF._specialCharCodeMap[cG]]=parseInt(cG,10);
}}
if(qx.core.Variant.isSet(y,p)){cF._charCode2KeyCode={13:13,27:27};
}else if(qx.core.Variant.isSet(y,bF)){cF._keyCodeFix={12:cF._identifierToKeyCode(w)};
}else if(qx.core.Variant.isSet(y,bd)){if(qx.bom.client.Engine.VERSION<525.13){cF._charCode2KeyCode={63289:cF._identifierToKeyCode(w),63276:cF._identifierToKeyCode(q),63277:cF._identifierToKeyCode(T),63275:cF._identifierToKeyCode(A),63273:cF._identifierToKeyCode(bf),63234:cF._identifierToKeyCode(bC),63232:cF._identifierToKeyCode(bz),63235:cF._identifierToKeyCode(V),63233:cF._identifierToKeyCode(bA),63272:cF._identifierToKeyCode(O),63302:cF._identifierToKeyCode(C),63236:cF._identifierToKeyCode(X),63237:cF._identifierToKeyCode(bu),63238:cF._identifierToKeyCode(E),63239:cF._identifierToKeyCode(bk),63240:cF._identifierToKeyCode(bB),63241:cF._identifierToKeyCode(G),63242:cF._identifierToKeyCode(bx),63243:cF._identifierToKeyCode(D),63244:cF._identifierToKeyCode(bv),63245:cF._identifierToKeyCode(S),63246:cF._identifierToKeyCode(by),63247:cF._identifierToKeyCode(bp),63248:cF._identifierToKeyCode(bG),3:cF._identifierToKeyCode(u),12:cF._identifierToKeyCode(w),13:cF._identifierToKeyCode(u)};
}else{cF._charCode2KeyCode={13:13,27:27};
}}}});
})();
(function(){var P="qx.client",O="mouseup",N="click",M="mousedown",L="contextmenu",K="mousewheel",J="dblclick",I="mshtml",H="mouseover",G="mouseout",B="DOMMouseScroll",F="mousemove",E="on",A="mshtml|webkit|opera",z="useraction",D="gecko|webkit",C="qx.event.handler.Mouse";
qx.Class.define(C,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(y){qx.core.Object.call(this);
this.__eb=y;
this.__ec=y.getWindow();
this.__ed=this.__ec.document;
this._initButtonObserver();
this._initMoveObserver();
this._initWheelObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{__ee:null,__ef:null,__eg:null,__eh:null,__ei:null,__eb:null,__ec:null,__ed:null,canHandleEvent:function(l,m){},registerEvent:qx.bom.client.System.IPHONE?
function(Q,R,S){Q[E+R]=qx.lang.Function.returnNull;
}:qx.lang.Function.returnNull,unregisterEvent:qx.bom.client.System.IPHONE?
function(v,w,x){v[E+w]=undefined;
}:qx.lang.Function.returnNull,__ej:function(a,b,c){if(!c){c=a.target||a.srcElement;
}if(c&&c.nodeType){qx.event.Registration.fireEvent(c,b||a.type,b==K?qx.event.type.MouseWheel:qx.event.type.Mouse,[a,c,null,true,true]);
}qx.event.Registration.fireEvent(this.__ec,z,qx.event.type.Data,[b||a.type]);
},_initButtonObserver:function(){this.__ee=qx.lang.Function.listener(this._onButtonEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__ed,M,this.__ee);
Event.addNativeListener(this.__ed,O,this.__ee);
Event.addNativeListener(this.__ed,N,this.__ee);
Event.addNativeListener(this.__ed,J,this.__ee);
Event.addNativeListener(this.__ed,L,this.__ee);
},_initMoveObserver:function(){this.__ef=qx.lang.Function.listener(this._onMoveEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__ed,F,this.__ef);
Event.addNativeListener(this.__ed,H,this.__ef);
Event.addNativeListener(this.__ed,G,this.__ef);
},_initWheelObserver:function(){this.__eg=qx.lang.Function.listener(this._onWheelEvent,this);
var Event=qx.bom.Event;
var T=qx.core.Variant.isSet(P,A)?K:B;
var U=qx.core.Variant.isSet(P,I)?this.__ed:this.__ec;
Event.addNativeListener(U,T,this.__eg);
},_stopButtonObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__ed,M,this.__ee);
Event.removeNativeListener(this.__ed,O,this.__ee);
Event.removeNativeListener(this.__ed,N,this.__ee);
Event.removeNativeListener(this.__ed,J,this.__ee);
Event.removeNativeListener(this.__ed,L,this.__ee);
},_stopMoveObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__ed,F,this.__ef);
Event.removeNativeListener(this.__ed,H,this.__ef);
Event.removeNativeListener(this.__ed,G,this.__ef);
},_stopWheelObserver:function(){var Event=qx.bom.Event;
var V=qx.core.Variant.isSet(P,A)?K:B;
var W=qx.core.Variant.isSet(P,I)?this.__ed:this.__ec;
Event.removeNativeListener(W,V,this.__eg);
},_onMoveEvent:qx.event.GlobalError.observeMethod(function(r){this.__ej(r);
}),_onButtonEvent:qx.event.GlobalError.observeMethod(function(e){var f=e.type;
var g=e.target||e.srcElement;
if(qx.core.Variant.isSet(P,D)){if(g&&g.nodeType==3){g=g.parentNode;
}}
if(this.__ek){this.__ek(e,f,g);
}
if(this.__em){this.__em(e,f,g);
}this.__ej(e,f,g);

if(this.__el){this.__el(e,f,g);
}
if(this.__en){this.__en(e,f,g);
}this.__eh=f;
}),_onWheelEvent:qx.event.GlobalError.observeMethod(function(h){this.__ej(h,K);
}),__ek:qx.core.Variant.select(P,{"webkit":function(X,Y,ba){if(qx.bom.client.Engine.VERSION<530){if(Y==L){this.__ej(X,O,ba);
}}},"default":null}),__el:qx.core.Variant.select(P,{"opera":function(s,t,u){if(t==O&&s.button==2){this.__ej(s,L,u);
}},"default":null}),__em:qx.core.Variant.select(P,{"mshtml":function(i,j,k){if(j==O&&this.__eh==N){this.__ej(i,M,k);
}else if(j==J){this.__ej(i,N,k);
}},"default":null}),__en:qx.core.Variant.select(P,{"mshtml":null,"default":function(n,o,p){switch(o){case M:this.__ei=p;
break;
case O:if(p!==this.__ei){var q=qx.dom.Hierarchy.getCommonParent(p,this.__ei);
this.__ej(n,N,q);
}}}})},destruct:function(){this._stopButtonObserver();
this._stopMoveObserver();
this._stopWheelObserver();
this.__eb=this.__ec=this.__ed=this.__ei=null;
},defer:function(d){qx.event.Registration.addHandler(d);
}});
})();
(function(){var a="qx.event.handler.Capture";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{capture:true,losecapture:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(b,c){},registerEvent:function(h,i,j){},unregisterEvent:function(e,f,g){}},defer:function(d){qx.event.Registration.addHandler(d);
}});
})();
(function(){var l="alias",k="copy",j="blur",i="mouseout",h="keydown",g="Ctrl",f="Shift",d="mousemove",c="move",b="mouseover",B="Alt",A="keyup",z="mouseup",y="dragend",x="on",w="mousedown",v="qxDraggable",u="drag",t="drop",s="qxDroppable",q="qx.event.handler.DragDrop",r="droprequest",o="dragstart",p="dragchange",m="dragleave",n="dragover";
qx.Class.define(q,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(bh){qx.core.Object.call(this);
this.__eo=bh;
this.__ep=bh.getWindow().document.documentElement;
this.__eo.addListener(this.__ep,w,this._onMouseDown,this);
this.__eB();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:true},members:{__eo:null,__ep:null,__eq:null,__er:null,__es:null,__et:null,__eu:null,__ev:null,__ew:null,__ex:null,__ey:false,__ez:0,__eA:0,canHandleEvent:function(Y,ba){},registerEvent:function(bk,bl,bm){},unregisterEvent:function(T,U,V){},addType:function(F){this.__es[F]=true;
},addAction:function(a){this.__et[a]=true;
},supportsType:function(bc){return !!this.__es[bc];
},supportsAction:function(D){return !!this.__et[D];
},getData:function(Q){if(!this.__eI||!this.__eq){throw new Error("This method must not be used outside the drop event listener!");
}
if(!this.__es[Q]){throw new Error("Unsupported data type: "+Q+"!");
}
if(!this.__ev[Q]){this.__ew=Q;
this.__eD(r,this.__er,this.__eq,false);
}
if(!this.__ev[Q]){throw new Error("Please use a droprequest listener to the drag source to fill the manager with data!");
}return this.__ev[Q]||null;
},getCurrentAction:function(){return this.__ex;
},addData:function(bi,bj){this.__ev[bi]=bj;
},getCurrentType:function(){return this.__ew;
},isSessionActive:function(){return this.__ey;
},__eB:function(){this.__es={};
this.__et={};
this.__eu={};
this.__ev={};
},__eC:function(){if(this.__er==null){return;
}var I=this.__et;
var G=this.__eu;
var H=null;

if(this.__eI){if(G.Shift&&G.Ctrl&&I.alias){H=l;
}else if(G.Shift&&G.Alt&&I.copy){H=k;
}else if(G.Shift&&I.move){H=c;
}else if(G.Alt&&I.alias){H=l;
}else if(G.Ctrl&&I.copy){H=k;
}else if(I.move){H=c;
}else if(I.copy){H=k;
}else if(I.alias){H=l;
}}
if(H!=this.__ex){this.__ex=H;
this.__eD(p,this.__er,this.__eq,false);
}},__eD:function(J,K,L,M,N){var P=qx.event.Registration;
var O=P.createEvent(J,qx.event.type.Drag,[M,N]);

if(K!==L){O.setRelatedTarget(L);
}return P.dispatchEvent(K,O);
},__eE:function(bf){while(bf&&bf.nodeType==1){if(bf.getAttribute(v)==x){return bf;
}bf=bf.parentNode;
}return null;
},__eF:function(C){while(C&&C.nodeType==1){if(C.getAttribute(s)==x){return C;
}C=C.parentNode;
}return null;
},__eG:function(){this.__er=null;
this.__eo.removeListener(this.__ep,d,this._onMouseMove,this,true);
this.__eo.removeListener(this.__ep,z,this._onMouseUp,this,true);
qx.event.Registration.removeListener(window,j,this._onWindowBlur,this);
this.__eB();
},__eH:function(){if(this.__ey){this.__eo.removeListener(this.__ep,b,this._onMouseOver,this,true);
this.__eo.removeListener(this.__ep,i,this._onMouseOut,this,true);
this.__eo.removeListener(this.__ep,h,this._onKeyDown,this,true);
this.__eo.removeListener(this.__ep,A,this._onKeyUp,this,true);
this.__eD(y,this.__er,this.__eq,false);
this.__ey=false;
}this.__eI=false;
this.__eq=null;
this.__eG();
},__eI:false,_onWindowBlur:function(e){this.__eH();
},_onKeyDown:function(e){var E=e.getKeyIdentifier();

switch(E){case B:case g:case f:if(!this.__eu[E]){this.__eu[E]=true;
this.__eC();
}}},_onKeyUp:function(e){var be=e.getKeyIdentifier();

switch(be){case B:case g:case f:if(this.__eu[be]){this.__eu[be]=false;
this.__eC();
}}},_onMouseDown:function(e){if(this.__ey){return;
}var bg=this.__eE(e.getTarget());

if(bg){this.__ez=e.getDocumentLeft();
this.__eA=e.getDocumentTop();
this.__er=bg;
this.__eo.addListener(this.__ep,d,this._onMouseMove,this,true);
this.__eo.addListener(this.__ep,z,this._onMouseUp,this,true);
qx.event.Registration.addListener(window,j,this._onWindowBlur,this);
}},_onMouseUp:function(e){if(this.__eI){this.__eD(t,this.__eq,this.__er,false,e);
}if(this.__ey){e.stopPropagation();
}this.__eH();
},_onMouseMove:function(e){if(this.__ey){if(!this.__eD(u,this.__er,this.__eq,true,e)){this.__eH();
}}else{if(Math.abs(e.getDocumentLeft()-this.__ez)>3||Math.abs(e.getDocumentTop()-this.__eA)>3){if(this.__eD(o,this.__er,this.__eq,true,e)){this.__ey=true;
this.__eo.addListener(this.__ep,b,this._onMouseOver,this,true);
this.__eo.addListener(this.__ep,i,this._onMouseOut,this,true);
this.__eo.addListener(this.__ep,h,this._onKeyDown,this,true);
this.__eo.addListener(this.__ep,A,this._onKeyUp,this,true);
var bb=this.__eu;
bb.Ctrl=e.isCtrlPressed();
bb.Shift=e.isShiftPressed();
bb.Alt=e.isAltPressed();
this.__eC();
}else{this.__eD(y,this.__er,this.__eq,false);
this.__eG();
}}}},_onMouseOver:function(e){var W=e.getTarget();
var X=this.__eF(W);

if(X&&X!=this.__eq){this.__eI=this.__eD(n,X,this.__er,true,e);
this.__eq=X;
this.__eC();
}},_onMouseOut:function(e){var S=this.__eF(e.getTarget());
var R=this.__eF(e.getRelatedTarget());

if(S&&S!==R&&S==this.__eq){this.__eD(m,this.__eq,R,false,e);
this.__eq=null;
this.__eI=false;
qx.event.Timer.once(this.__eC,this,0);
}}},destruct:function(){this.__er=this.__eq=this.__eo=this.__ep=this.__es=this.__et=this.__eu=this.__ev=null;
},defer:function(bd){qx.event.Registration.addHandler(bd);
}});
})();
(function(){var b="-",a="qx.event.handler.Element";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(h){qx.core.Object.call(this);
this._manager=h;
this._registeredEvents={};
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{abort:true,scroll:true,select:true,reset:true,submit:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(i,j){},registerEvent:function(n,o,p){var s=qx.core.ObjectRegistry.toHashCode(n);
var q=s+b+o;
var r=qx.lang.Function.listener(this._onNative,this,q);
qx.bom.Event.addNativeListener(n,o,r);
this._registeredEvents[q]={element:n,type:o,listener:r};
},unregisterEvent:function(t,u,v){var y=this._registeredEvents;

if(!y){return;
}var z=qx.core.ObjectRegistry.toHashCode(t);
var w=z+b+u;
var x=this._registeredEvents[w];

if(x){qx.bom.Event.removeNativeListener(t,u,x.listener);
}delete this._registeredEvents[w];
},_onNative:qx.event.GlobalError.observeMethod(function(c,d){var f=this._registeredEvents;

if(!f){return;
}var e=f[d];
qx.event.Registration.fireNonBubblingEvent(e.element,e.type,qx.event.type.Native,[c]);
})},destruct:function(){var k;
var l=this._registeredEvents;

for(var m in l){k=l[m];
qx.bom.Event.removeNativeListener(k.element,k.type,k.listener);
}this._manager=this._registeredEvents=null;
},defer:function(g){qx.event.Registration.addHandler(g);
}});
})();
(function(){var h="qx.event.handler.Appear",g="disappear",f="appear";
qx.Class.define(h,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(i){qx.core.Object.call(this);
this.__eJ=i;
this.__eK={};
qx.event.handler.Appear.__eL[this.$$hash]=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{appear:true,disappear:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,__eL:{},refresh:function(){var l=this.__eL;

for(var m in l){l[m].refresh();
}}},members:{__eJ:null,__eK:null,canHandleEvent:function(j,k){},registerEvent:function(t,u,v){var w=qx.core.ObjectRegistry.toHashCode(t)+u;
var x=this.__eK;

if(x&&!x[w]){x[w]=t;
t.$$displayed=t.offsetWidth>0;
}},unregisterEvent:function(a,b,c){var d=qx.core.ObjectRegistry.toHashCode(a)+b;
var e=this.__eK;

if(!e){return;
}
if(e[d]){delete e[d];
}},refresh:function(){var r=this.__eK;
var s;

for(var q in r){s=r[q];
var o=s.offsetWidth>0;

if((!!s.$$displayed)!==o){s.$$displayed=o;
var p=qx.event.Registration.createEvent(o?f:g);
this.__eJ.dispatchEvent(s,p);
}}}},destruct:function(){this.__eJ=this.__eK=null;
delete qx.event.handler.Appear.__eL[this.$$hash];
},defer:function(n){qx.event.Registration.addHandler(n);
}});
})();
(function(){var t="mshtml",s="",r="qx.client",q=" ",p=">",o="<",n="='",m="none",k="<INPUT TYPE='RADIO' NAME='RADIOTEST' VALUE='Second Choice'>",h="qx.bom.Element",d="' ",g="div",f="></";
qx.Class.define(h,{statics:{__eM:{"onload":true,"onpropertychange":true,"oninput":true,"onchange":true,"name":true,"type":true,"checked":true,"disabled":true},__eN:{},__eO:{},allowCreationWithMarkup:function(K){if(!K){K=window;
}var L=K.location.href;

if(qx.bom.Element.__eO[L]==undefined){try{K.document.createElement(k);
qx.bom.Element.__eO[L]=true;
}catch(e){qx.bom.Element.__eO[L]=false;
}}return qx.bom.Element.__eO[L];
},getHelperElement:function(B){if(!B){B=window;
}var D=B.location.href;

if(!qx.bom.Element.__eN[D]){var C=qx.bom.Element.__eN[D]=B.document.createElement(g);
if(qx.bom.client.Engine.WEBKIT){C.style.display=m;
B.document.body.appendChild(C);
}}return qx.bom.Element.__eN[D];
},create:function(name,bb,bc){if(!bc){bc=window;
}
if(!name){throw new Error("The tag name is missing!");
}var be=this.__eM;
var bd=s;

for(var bg in bb){if(be[bg]){bd+=bg+n+bb[bg]+d;
}}var bh;
if(bd!=s){if(qx.bom.Element.allowCreationWithMarkup(bc)){bh=bc.document.createElement(o+name+q+bd+p);
}else{var bf=qx.bom.Element.getHelperElement(bc);
bf.innerHTML=o+name+q+bd+f+name+p;
bh=bf.firstChild;
}}else{bh=bc.document.createElement(name);
}
for(var bg in bb){if(!be[bg]){qx.bom.element.Attribute.set(bh,bg,bb[bg]);
}}return bh;
},empty:function(v){return v.innerHTML=s;
},addListener:function(x,y,z,self,A){return qx.event.Registration.addListener(x,y,z,self,A);
},removeListener:function(E,F,G,self,H){return qx.event.Registration.removeListener(E,F,G,self,H);
},removeListenerById:function(M,N){return qx.event.Registration.removeListenerById(M,N);
},hasListener:function(a,b,c){return qx.event.Registration.hasListener(a,b,c);
},focus:function(u){qx.event.Registration.getManager(u).getHandler(qx.event.handler.Focus).focus(u);
},blur:function(w){qx.event.Registration.getManager(w).getHandler(qx.event.handler.Focus).blur(w);
},activate:function(bi){qx.event.Registration.getManager(bi).getHandler(qx.event.handler.Focus).activate(bi);
},deactivate:function(J){qx.event.Registration.getManager(J).getHandler(qx.event.handler.Focus).deactivate(J);
},capture:function(bj,bk){qx.event.Registration.getManager(bj).getDispatcher(qx.event.dispatch.MouseCapture).activateCapture(bj,bk);
},releaseCapture:function(I){qx.event.Registration.getManager(I).getDispatcher(qx.event.dispatch.MouseCapture).releaseCapture(I);
},clone:function(O,P){var S;

if(P||(qx.core.Variant.isSet(r,t)&&!qx.xml.Document.isXmlDocument(O))){var W=qx.event.Registration.getManager(O);
var Q=qx.dom.Hierarchy.getDescendants(O);
Q.push(O);
}if(qx.core.Variant.isSet(r,t)){for(var i=0,l=Q.length;i<l;i++){W.toggleAttachedEvents(Q[i],false);
}}var S=O.cloneNode(true);
if(qx.core.Variant.isSet(r,t)){for(var i=0,l=Q.length;i<l;i++){W.toggleAttachedEvents(Q[i],true);
}}if(P===true){var ba=qx.dom.Hierarchy.getDescendants(S);
ba.push(S);
var R,U,Y,T;

for(var i=0,X=Q.length;i<X;i++){Y=Q[i];
R=W.serializeListeners(Y);

if(R.length>0){U=ba[i];

for(var j=0,V=R.length;j<V;j++){T=R[j];
W.addListener(U,T.type,T.handler,T.self,T.capture);
}}}}return S;
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
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(d,e,f){qx.event.type.Dom.prototype.init.call(this,d,e,null,true,true);
this._charCode=f;
return this;
},clone:function(b){var c=qx.event.type.Dom.prototype.clone.call(this,b);
c._charCode=this._charCode;
return c;
},getCharCode:function(){return this._charCode;
},getChar:function(){return String.fromCharCode(this._charCode);
}}});
})();
(function(){var a="qx.event.type.KeySequence";
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(d,e,f){qx.event.type.Dom.prototype.init.call(this,d,e,null,true,true);
this._identifier=f;
return this;
},clone:function(b){var c=qx.event.type.Dom.prototype.clone.call(this,b);
c._identifier=this._identifier;
return c;
},getKeyIdentifier:function(){return this._identifier;
}}});
})();
(function(){var bb="qx.client",ba="blur",Y="focus",X="mousedown",W="on",V="mouseup",U="DOMFocusOut",T="DOMFocusIn",S="selectstart",R="onmousedown",bv="onfocusout",bu="onfocusin",bt="onmouseup",bs="onselectstart",br="draggesture",bq="qx.event.handler.Focus",bp="_applyFocus",bo="deactivate",bn="textarea",bm="_applyActive",bi="input",bj="focusin",bg="qxSelectable",bh="tabIndex",be="off",bf="activate",bc="mshtml",bd="focusout",bk="qxKeepFocus",bl="qxKeepActive";
qx.Class.define(bq,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(Q){qx.core.Object.call(this);
this._manager=Q;
this._window=Q.getWindow();
this._document=this._window.document;
this._root=this._document.documentElement;
this._body=this._document.body;
this._initObserver();
},properties:{active:{apply:bm,nullable:true},focus:{apply:bp,nullable:true}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{focus:1,blur:1,focusin:1,focusout:1,activate:1,deactivate:1},IGNORE_CAN_HANDLE:true,FOCUSABLE_ELEMENTS:qx.core.Variant.select("qx.client",{"mshtml|gecko":{a:1,body:1,button:1,frame:1,iframe:1,img:1,input:1,object:1,select:1,textarea:1},"opera|webkit":{button:1,input:1,select:1,textarea:1}})},members:{__eP:null,__eQ:null,__eR:null,__eS:null,__eT:null,__eU:null,__eV:null,__eW:null,__eX:null,__eY:null,canHandleEvent:function(a,b){},registerEvent:function(n,o,p){},unregisterEvent:function(bK,bL,bM){},focus:function(s){if(qx.core.Variant.isSet(bb,bc)){window.setTimeout(function(){try{s.focus();
}catch(i){}},0);
}else{try{s.focus();
}catch(d){}}this.setFocus(s);
this.setActive(s);
},activate:function(f){this.setActive(f);
},blur:function(C){try{C.blur();
}catch(y){}
if(this.getActive()===C){this.resetActive();
}
if(this.getFocus()===C){this.resetFocus();
}},deactivate:function(P){if(this.getActive()===P){this.resetActive();
}},tryActivate:function(l){var m=this.__fo(l);

if(m){this.setActive(m);
}},__fa:function(bD,bE,bF,bG){var bI=qx.event.Registration;
var bH=bI.createEvent(bF,qx.event.type.Focus,[bD,bE,bG]);
bI.dispatchEvent(bD,bH);
},_windowFocused:true,__fb:function(){if(this._windowFocused){this._windowFocused=false;
this.__fa(this._window,null,ba,false);
}},__fc:function(){if(!this._windowFocused){this._windowFocused=true;
this.__fa(this._window,null,Y,false);
}},_initObserver:qx.core.Variant.select(bb,{"gecko":function(){this.__eP=qx.lang.Function.listener(this.__fi,this);
this.__eQ=qx.lang.Function.listener(this.__fj,this);
this.__eR=qx.lang.Function.listener(this.__fh,this);
this.__eS=qx.lang.Function.listener(this.__fg,this);
this.__eT=qx.lang.Function.listener(this.__fd,this);
this._document.addEventListener(X,this.__eP,true);
this._document.addEventListener(V,this.__eQ,true);
this._window.addEventListener(Y,this.__eR,true);
this._window.addEventListener(ba,this.__eS,true);
this._window.addEventListener(br,this.__eT,true);
},"mshtml":function(){this.__eP=qx.lang.Function.listener(this.__fi,this);
this.__eQ=qx.lang.Function.listener(this.__fj,this);
this.__eV=qx.lang.Function.listener(this.__fe,this);
this.__eW=qx.lang.Function.listener(this.__ff,this);
this.__eU=qx.lang.Function.listener(this.__fl,this);
this._document.attachEvent(R,this.__eP);
this._document.attachEvent(bt,this.__eQ);
this._document.attachEvent(bu,this.__eV);
this._document.attachEvent(bv,this.__eW);
this._document.attachEvent(bs,this.__eU);
},"webkit":function(){this.__eP=qx.lang.Function.listener(this.__fi,this);
this.__eQ=qx.lang.Function.listener(this.__fj,this);
this.__eW=qx.lang.Function.listener(this.__ff,this);
this.__eR=qx.lang.Function.listener(this.__fh,this);
this.__eS=qx.lang.Function.listener(this.__fg,this);
this.__eU=qx.lang.Function.listener(this.__fl,this);
this._document.addEventListener(X,this.__eP,true);
this._document.addEventListener(V,this.__eQ,true);
this._document.addEventListener(S,this.__eU,false);
this._window.addEventListener(U,this.__eW,true);
this._window.addEventListener(Y,this.__eR,true);
this._window.addEventListener(ba,this.__eS,true);
},"opera":function(){this.__eP=qx.lang.Function.listener(this.__fi,this);
this.__eQ=qx.lang.Function.listener(this.__fj,this);
this.__eV=qx.lang.Function.listener(this.__fe,this);
this.__eW=qx.lang.Function.listener(this.__ff,this);
this._document.addEventListener(X,this.__eP,true);
this._document.addEventListener(V,this.__eQ,true);
this._window.addEventListener(T,this.__eV,true);
this._window.addEventListener(U,this.__eW,true);
}}),_stopObserver:qx.core.Variant.select(bb,{"gecko":function(){this._document.removeEventListener(X,this.__eP,true);
this._document.removeEventListener(V,this.__eQ,true);
this._window.removeEventListener(Y,this.__eR,true);
this._window.removeEventListener(ba,this.__eS,true);
this._window.removeEventListener(br,this.__eT,true);
},"mshtml":function(){qx.bom.Event.removeNativeListener(this._document,R,this.__eP);
qx.bom.Event.removeNativeListener(this._document,bt,this.__eQ);
qx.bom.Event.removeNativeListener(this._document,bu,this.__eV);
qx.bom.Event.removeNativeListener(this._document,bv,this.__eW);
qx.bom.Event.removeNativeListener(this._document,bs,this.__eU);
},"webkit":function(){this._document.removeEventListener(X,this.__eP,true);
this._document.removeEventListener(S,this.__eU,false);
this._window.removeEventListener(T,this.__eV,true);
this._window.removeEventListener(U,this.__eW,true);
this._window.removeEventListener(Y,this.__eR,true);
this._window.removeEventListener(ba,this.__eS,true);
},"opera":function(){this._document.removeEventListener(X,this.__eP,true);
this._window.removeEventListener(T,this.__eV,true);
this._window.removeEventListener(U,this.__eW,true);
this._window.removeEventListener(Y,this.__eR,true);
this._window.removeEventListener(ba,this.__eS,true);
}}),__fd:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bb,{"gecko":function(e){if(!this.__fp(e.target)){qx.bom.Event.preventDefault(e);
}},"default":null})),__fe:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bb,{"mshtml":function(e){this.__fc();
var h=e.srcElement;
var g=this.__fn(h);

if(g){this.setFocus(g);
}this.tryActivate(h);
},"opera":function(e){var D=e.target;

if(D==this._document||D==this._window){this.__fc();

if(this.__eX){this.setFocus(this.__eX);
delete this.__eX;
}
if(this.__eY){this.setActive(this.__eY);
delete this.__eY;
}}else{this.setFocus(D);
this.tryActivate(D);
if(!this.__fp(D)){D.selectionStart=0;
D.selectionEnd=0;
}}},"default":null})),__ff:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bb,{"mshtml":function(e){if(!e.toElement){this.__fb();
this.resetFocus();
this.resetActive();
}},"webkit":function(e){var by=e.target;

if(by===this.getFocus()){this.resetFocus();
}
if(by===this.getActive()){this.resetActive();
}},"opera":function(e){var c=e.target;

if(c==this._document){this.__fb();
this.__eX=this.getFocus();
this.__eY=this.getActive();
this.resetFocus();
this.resetActive();
}else{if(c===this.getFocus()){this.resetFocus();
}
if(c===this.getActive()){this.resetActive();
}}},"default":null})),__fg:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bb,{"gecko":function(e){if(e.target===this._window||e.target===this._document){this.__fb();
this.resetActive();
this.resetFocus();
}},"webkit":function(e){if(e.target===this._window||e.target===this._document){this.__fb();
this.__eX=this.getFocus();
this.__eY=this.getActive();
this.resetActive();
this.resetFocus();
}},"default":null})),__fh:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bb,{"gecko":function(e){var M=e.target;

if(M===this._window||M===this._document){this.__fc();
M=this._body;
}this.setFocus(M);
this.tryActivate(M);
},"webkit":function(e){var J=e.target;

if(J===this._window||J===this._document){this.__fc();

if(this.__eX){this.setFocus(this.__eX);
delete this.__eX;
}
if(this.__eY){this.setActive(this.__eY);
delete this.__eY;
}}else{this.setFocus(J);
this.tryActivate(J);
}},"default":null})),__fi:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bb,{"gecko":function(e){var v=this.__fn(e.target);

if(!v){qx.bom.Event.preventDefault(e);
}else if(v===this._body){this.setFocus(v);
}},"mshtml":function(e){var L=e.srcElement;
var K=this.__fn(L);

if(K){if(!this.__fp(L)){L.unselectable=W;
try{document.selection.empty();
}catch(e){}try{K.focus();
}catch(e){}}}else{qx.bom.Event.preventDefault(e);
if(!this.__fp(L)){L.unselectable=W;
}}},"webkit":function(e){var u=e.target;
var t=this.__fn(u);

if(t){this.setFocus(t);
}else{qx.bom.Event.preventDefault(e);
}},"opera":function(e){var bB=e.target;
var bz=this.__fn(bB);

if(!this.__fp(bB)){qx.bom.Event.preventDefault(e);
if(bz){var bA=this.getFocus();

if(bA&&bA.selectionEnd){bA.selectionStart=0;
bA.selectionEnd=0;
bA.blur();
}if(bz){this.setFocus(bz);
}}}else if(bz){this.setFocus(bz);
}},"default":null})),__fj:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bb,{"mshtml":function(e){var bJ=e.srcElement;

if(bJ.unselectable){bJ.unselectable=be;
}this.tryActivate(this.__fk(bJ));
},"gecko":function(e){var N=e.target;

while(N&&N.offsetWidth===undefined){N=N.parentNode;
}
if(N){this.tryActivate(N);
}},"webkit|opera":function(e){this.tryActivate(this.__fk(e.target));
},"default":null})),__fk:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bb,{"mshtml|webkit":function(q){var r=this.getFocus();

if(r&&q!=r&&(r.nodeName.toLowerCase()===bi||r.nodeName.toLowerCase()===bn)){q=r;
}return q;
},"default":function(O){return O;
}})),__fl:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bb,{"mshtml|webkit":function(e){var bN=qx.bom.client.Engine.MSHTML?e.srcElement:e.target;

if(!this.__fp(bN)){qx.bom.Event.preventDefault(e);
}},"default":null})),__fm:function(G){var H=qx.bom.element.Attribute.get(G,bh);

if(H>=1){return true;
}var I=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(H>=0&&I[G.tagName]){return true;
}return false;
},__fn:function(bC){while(bC&&bC.nodeType===1){if(bC.getAttribute(bk)==W){return null;
}
if(this.__fm(bC)){return bC;
}bC=bC.parentNode;
}return this._body;
},__fo:function(j){var k=j;

while(j&&j.nodeType===1){if(j.getAttribute(bl)==W){return null;
}j=j.parentNode;
}return k;
},__fp:function(E){while(E&&E.nodeType===1){var F=E.getAttribute(bg);

if(F!=null){return F===W;
}E=E.parentNode;
}return true;
},_applyActive:function(bw,bx){if(bx){this.__fa(bx,bw,bo,true);
}
if(bw){this.__fa(bw,bx,bf,true);
}},_applyFocus:function(w,x){if(x){this.__fa(x,w,bd,true);
}
if(w){this.__fa(w,x,bj,true);
}if(x){this.__fa(x,w,ba,false);
}
if(w){this.__fa(w,x,Y,false);
}}},destruct:function(){this._stopObserver();
this._manager=this._window=this._document=this._root=this._body=this.__fq=null;
},defer:function(z){qx.event.Registration.addHandler(z);
var A=z.FOCUSABLE_ELEMENTS;

for(var B in A){A[B.toUpperCase()]=1;
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
qx.Class.define(e,{statics:{__fr:{names:{"class":b,"for":x,html:q,text:qx.core.Variant.isSet(h,l)?r:a,colspan:k,rowspan:d,valign:c,datetime:n,accesskey:f,tabindex:p,maxlength:o,readonly:g,longdesc:w,cellpadding:m,cellspacing:v,frameborder:u,usemap:s},runtime:{"html":1,"text":1},bools:{compact:1,nowrap:1,ismap:1,declare:1,noshade:1,checked:1,disabled:1,readOnly:1,multiple:1,selected:1,noresize:1,defer:1,allowTransparency:1},property:{$$html:1,$$widget:1,disabled:1,checked:1,readOnly:1,multiple:1,selected:1,value:1,maxLength:1,className:1,innerHTML:1,innerText:1,textContent:1,htmlFor:1,tabIndex:1},qxProperties:{$$widget:1,$$html:1},propertyDefault:{disabled:false,checked:false,readOnly:false,multiple:false,selected:false,value:j,className:j,innerHTML:j,innerText:j,textContent:j,htmlFor:j,tabIndex:0,maxLength:qx.core.Variant.select(h,{"mshtml":2147483647,"webkit":524288,"default":-1})},removeableProperties:{disabled:1,multiple:1,maxLength:1},original:{href:1,src:1,type:1}},compile:function(z){var A=[];
var C=this.__fr.runtime;

for(var B in z){if(!C[B]){A.push(B,t,z[B],y);
}}return A.join(j);
},get:qx.core.Variant.select(h,{"mshtml":function(G,name){var I=this.__fr;
var H;
name=I.names[name]||name;
if(I.original[name]){H=G.getAttribute(name,2);
}else if(I.property[name]){H=G[name];

if(typeof I.propertyDefault[name]!==i&&H==I.propertyDefault[name]){if(typeof I.bools[name]===i){return null;
}else{return H;
}}}else{H=G.getAttribute(name);
}if(I.bools[name]){return !!H;
}return H;
},"default":function(D,name){var F=this.__fr;
var E;
name=F.names[name]||name;
if(F.property[name]){E=D[name];

if(typeof F.propertyDefault[name]!==i&&E==F.propertyDefault[name]){if(typeof F.bools[name]===i){return null;
}else{return E;
}}}else{E=D.getAttribute(name);
}if(F.bools[name]){return !!E;
}return E;
}}),set:function(K,name,L){var M=this.__fr;
name=M.names[name]||name;
if(M.bools[name]){L=!!L;
}if(M.property[name]&&(!(K[name]===undefined)||M.qxProperties[name])){if(L==null){if(M.removeableProperties[name]){K.removeAttribute(name);
return;
}else if(typeof M.propertyDefault[name]!==i){L=M.propertyDefault[name];
}}K[name]=L;
}else{if(L===true){K.setAttribute(name,name);
}else if(L===false||L===null){K.removeAttribute(name);
}else{K.setAttribute(name,L);
}}},reset:function(J,name){this.set(J,name,null);
}}});
})();
(function(){var i="left",h="right",g="middle",f="qx.client",e="dblclick",d="click",c="none",b="contextmenu",a="qx.event.type.Mouse";
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(j,k,l,m,n){qx.event.type.Dom.prototype.init.call(this,j,k,l,m,n);

if(!l){this._relatedTarget=qx.bom.Event.getRelatedTarget(j);
}return this;
},_cloneNativeEvent:function(o,p){var p=qx.event.type.Dom.prototype._cloneNativeEvent.call(this,o,p);
p.button=o.button;
p.clientX=o.clientX;
p.clientY=o.clientY;
p.pageX=o.pageX;
p.pageY=o.pageY;
p.screenX=o.screenX;
p.screenY=o.screenY;
p.wheelDelta=o.wheelDelta;
p.detail=o.detail;
p.srcElement=o.srcElement;
return p;
},__fs:qx.core.Variant.select(f,{"mshtml":{1:i,2:h,4:g},"default":{0:i,2:h,1:g}}),stop:function(){this.stopPropagation();
},getButton:function(){switch(this._type){case d:case e:return i;
case b:return h;
default:return this.__fs[this._native.button]||c;
}},isLeftPressed:function(){return this.getButton()===i;
},isMiddlePressed:function(){return this.getButton()===g;
},isRightPressed:function(){return this.getButton()===h;
},getRelatedTarget:function(){return this._relatedTarget;
},getViewportLeft:function(){return this._native.clientX;
},getViewportTop:function(){return this._native.clientY;
},getDocumentLeft:qx.core.Variant.select(f,{"mshtml":function(){var q=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(q);
},"default":function(){return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(f,{"mshtml":function(){var r=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(r);
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
(function(){var j="qx.client",i="ie",h="msie",g="android",f="operamini",e="mobile chrome",d=")(/| )([0-9]+\.[0-9])",c="iemobile",b="opera mobi",a="Mobile Safari",x="operamobile",w="mobile safari",v="IEMobile|Maxthon|MSIE",u="qx.bom.client.Browser",t="opera mini",s="(",r="opera",q="mshtml",p="Opera Mini|Opera Mobi|Opera",o="AdobeAIR|Titanium|Fluid|Chrome|Android|Epiphany|Konqueror|iCab|OmniWeb|Maxthon|Pre|Mobile Safari|Safari",m="webkit",n="5.0",k="prism|Fennec|Camino|Kmeleon|Galeon|Netscape|SeaMonkey|Firefox",l="Mobile/";
qx.Bootstrap.define(u,{statics:{UNKNOWN:true,NAME:"unknown",TITLE:"unknown 0.0",VERSION:0.0,FULLVERSION:"0.0.0",__ft:function(B){var C=navigator.userAgent;
var E=new RegExp(s+B+d);
var F=C.match(E);

if(!F){return;
}var name=F[1].toLowerCase();
var D=F[3];
if(C.match(/Version(\/| )([0-9]+\.[0-9])/)){D=RegExp.$2;
}
if(qx.core.Variant.isSet(j,m)){if(name===g){name=e;
}else if(C.indexOf(a)!==-1||C.indexOf(l)!==-1){name=w;
}}else if(qx.core.Variant.isSet(j,q)){if(name===h){name=i;
if(qx.bom.client.System.WINCE&&name===i){name=c;
D=n;
}}}else if(qx.core.Variant.isSet(j,r)){if(name===b){name=x;
}else if(name===t){name=f;
}}this.NAME=name;
this.FULLVERSION=D;
this.VERSION=parseFloat(D,10);
this.TITLE=name+" "+this.VERSION;
this.UNKNOWN=false;
}},defer:qx.core.Variant.select(j,{"webkit":function(G){G.__ft(o);
},"gecko":function(y){y.__ft(k);
},"mshtml":function(A){A.__ft(v);
},"opera":function(z){z.__ft(p);
}})});
})();
(function(){var O="qx.client",N="qx.dom.Hierarchy",M="previousSibling",L="*",K="nextSibling",J="parentNode";
qx.Class.define(N,{statics:{getNodeIndex:function(U){var V=0;

while(U&&(U=U.previousSibling)){V++;
}return V;
},getElementIndex:function(c){var d=0;
var e=qx.dom.Node.ELEMENT;

while(c&&(c=c.previousSibling)){if(c.nodeType==e){d++;
}}return d;
},getNextElementSibling:function(j){while(j&&(j=j.nextSibling)&&!qx.dom.Node.isElement(j)){continue;
}return j||null;
},getPreviousElementSibling:function(g){while(g&&(g=g.previousSibling)&&!qx.dom.Node.isElement(g)){continue;
}return g||null;
},contains:qx.core.Variant.select(O,{"webkit|mshtml|opera":function(z,A){if(qx.dom.Node.isDocument(z)){var B=qx.dom.Node.getDocument(A);
return z&&B==z;
}else if(qx.dom.Node.isDocument(A)){return false;
}else{return z.contains(A);
}},"gecko":function(h,i){return !!(h.compareDocumentPosition(i)&16);
},"default":function(k,l){while(l){if(k==l){return true;
}l=l.parentNode;
}return false;
}}),isRendered:function(G){if(!G.parentNode||!G.offsetParent){return false;
}var H=G.ownerDocument||G.document;
if(H.body.contains){return H.body.contains(G);
}if(H.compareDocumentPosition){return !!(H.compareDocumentPosition(G)&16);
}throw new Error("Missing support for isRendered()!");
},isDescendantOf:function(C,D){return this.contains(D,C);
},getCommonParent:qx.core.Variant.select(O,{"mshtml|opera":function(S,T){if(S===T){return S;
}
while(S&&qx.dom.Node.isElement(S)){if(S.contains(T)){return S;
}S=S.parentNode;
}return null;
},"default":function(r,s){if(r===s){return r;
}var t={};
var w=qx.core.ObjectRegistry;
var v,u;

while(r||s){if(r){v=w.toHashCode(r);

if(t[v]){return t[v];
}t[v]=r;
r=r.parentNode;
}
if(s){u=w.toHashCode(s);

if(t[u]){return t[u];
}t[u]=s;
s=s.parentNode;
}}return null;
}}),getAncestors:function(y){return this._recursivelyCollect(y,J);
},getChildElements:function(E){E=E.firstChild;

if(!E){return [];
}var F=this.getNextSiblings(E);

if(E.nodeType===1){F.unshift(E);
}return F;
},getDescendants:function(x){return qx.lang.Array.fromCollection(x.getElementsByTagName(L));
},getFirstDescendant:function(a){a=a.firstChild;

while(a&&a.nodeType!=1){a=a.nextSibling;
}return a;
},getLastDescendant:function(f){f=f.lastChild;

while(f&&f.nodeType!=1){f=f.previousSibling;
}return f;
},getPreviousSiblings:function(m){return this._recursivelyCollect(m,M);
},getNextSiblings:function(n){return this._recursivelyCollect(n,K);
},_recursivelyCollect:function(P,Q){var R=[];

while(P=P[Q]){if(P.nodeType==1){R.push(P);
}}return R;
},getSiblings:function(I){return this.getPreviousSiblings(I).reverse().concat(this.getNextSiblings(I));
},isEmpty:function(b){b=b.firstChild;

while(b){if(b.nodeType===qx.dom.Node.ELEMENT||b.nodeType===qx.dom.Node.TEXT){return false;
}b=b.nextSibling;
}return true;
},cleanWhitespace:function(o){var p=o.firstChild;

while(p){var q=p.nextSibling;

if(p.nodeType==3&&!/\S/.test(p.nodeValue)){o.removeChild(p);
}p=q;
}}}});
})();
(function(){var c="qx.client",b="qx.event.type.Drag";
qx.Class.define(b,{extend:qx.event.type.Event,members:{init:function(g,h){qx.event.type.Event.prototype.init.call(this,true,g);

if(h){this._native=h.getNativeEvent()||null;
this._originalTarget=h.getTarget()||null;
}else{this._native=null;
this._originalTarget=null;
}return this;
},clone:function(l){var m=qx.event.type.Event.prototype.clone.call(this,l);
m._native=this._native;
return m;
},getDocumentLeft:qx.core.Variant.select(c,{"mshtml":function(){if(this._native==null){return 0;
}var f=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(f);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(c,{"mshtml":function(){if(this._native==null){return 0;
}var d=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(d);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageY;
}}),getManager:function(){return qx.event.Registration.getManager(this.getTarget()).getHandler(qx.event.handler.DragDrop);
},addType:function(n){this.getManager().addType(n);
},addAction:function(k){this.getManager().addAction(k);
},supportsType:function(e){return this.getManager().supportsType(e);
},supportsAction:function(o){return this.getManager().supportsAction(o);
},addData:function(i,j){this.getManager().addData(i,j);
},getData:function(a){return this.getManager().getData(a);
},getCurrentType:function(){return this.getManager().getCurrentType();
},getCurrentAction:function(){return this.getManager().getCurrentAction();
}}});
})();
(function(){var h="interval",g="qx.event.Timer",f="_applyInterval",d="_applyEnabled",c="Boolean",b="qx.event.type.Event",a="Integer";
qx.Class.define(g,{extend:qx.core.Object,construct:function(n){qx.core.Object.call(this);
this.setEnabled(false);

if(n!=null){this.setInterval(n);
}var self=this;
this.__fu=function(){self._oninterval.call(self);
};
},events:{"interval":b},statics:{once:function(p,q,r){var s=new qx.event.Timer(r);
s.__fv=p;
s.addListener(h,function(e){s.stop();
p.call(q,e);
s.dispose();
q=null;
},q);
s.start();
return s;
}},properties:{enabled:{init:true,check:c,apply:d},interval:{check:a,init:1000,apply:f}},members:{__fw:null,__fu:null,_applyInterval:function(l,m){if(this.getEnabled()){this.restart();
}},_applyEnabled:function(j,k){if(k){window.clearInterval(this.__fw);
this.__fw=null;
}else if(j){this.__fw=window.setInterval(this.__fu,this.getInterval());
}},start:function(){this.setEnabled(true);
},startWith:function(i){this.setInterval(i);
this.start();
},stop:function(){this.setEnabled(false);
},restart:function(){this.stop();
this.start();
},restartWith:function(o){this.stop();
this.startWith(o);
},_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.$$disposed){return;
}
if(this.getEnabled()){this.fireEvent(h);
}})},destruct:function(){if(this.__fw){window.clearInterval(this.__fw);
}this.__fw=this.__fu=null;
}});
})();
(function(){var h="losecapture",g="qx.client",f="blur",e="focus",d="click",c="qx.event.dispatch.MouseCapture",b="capture",a="scroll";
qx.Class.define(c,{extend:qx.event.dispatch.AbstractBubbling,construct:function(u,v){qx.event.dispatch.AbstractBubbling.call(this,u);
this.__fx=u.getWindow();
this.__fy=v;
u.addListener(this.__fx,f,this.releaseCapture,this);
u.addListener(this.__fx,e,this.releaseCapture,this);
u.addListener(this.__fx,a,this.releaseCapture,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST},members:{__fy:null,__fz:null,__fA:true,__fx:null,_getParent:function(i){return i.parentNode;
},canDispatchEvent:function(k,event,l){return (this.__fz&&this.__fB[l]);
},dispatchEvent:function(s,event,t){if(t==d){event.stopPropagation();
this.releaseCapture();
return;
}
if(this.__fA||!qx.dom.Hierarchy.contains(this.__fz,s)){s=this.__fz;
}qx.event.dispatch.AbstractBubbling.prototype.dispatchEvent.call(this,s,event,t);
},__fB:{"mouseup":1,"mousedown":1,"click":1,"dblclick":1,"mousemove":1,"mouseout":1,"mouseover":1},activateCapture:function(q,r){var r=r!==false;

if(this.__fz===q&&this.__fA==r){return;
}
if(this.__fz){this.releaseCapture();
}this.nativeSetCapture(q,r);

if(this.hasNativeCapture){var self=this;
qx.bom.Event.addNativeListener(q,h,function(){qx.bom.Event.removeNativeListener(q,h,arguments.callee);
self.releaseCapture();
});
}this.__fA=r;
this.__fz=q;
this.__fy.fireEvent(q,b,qx.event.type.Event,[true,false]);
},getCaptureElement:function(){return this.__fz;
},releaseCapture:function(){var j=this.__fz;

if(!j){return;
}this.__fz=null;
this.__fy.fireEvent(j,h,qx.event.type.Event,[true,false]);
this.nativeReleaseCapture(j);
},hasNativeCapture:qx.bom.client.Engine.MSHTML,nativeSetCapture:qx.core.Variant.select(g,{"mshtml":function(m,n){m.setCapture(n!==false);
},"default":qx.lang.Function.empty}),nativeReleaseCapture:qx.core.Variant.select(g,{"mshtml":function(p){p.releaseCapture();
},"default":qx.lang.Function.empty})},destruct:function(){this.__fz=this.__fx=this.__fy=null;
},defer:function(o){qx.event.Registration.addDispatcher(o);
}});
})();
(function(){var r="qx.client",q="",p="mshtml",o="'",n="SelectionLanguage",m="qx.xml.Document",k=" />",j="MSXML2.DOMDocument.3.0",h='<\?xml version="1.0" encoding="utf-8"?>\n<',g="MSXML2.XMLHTTP.3.0",c="MSXML2.XMLHTTP.6.0",f=" xmlns='",e="text/xml",b="XPath",a="MSXML2.DOMDocument.6.0",d="HTML";
qx.Class.define(m,{statics:{DOMDOC:null,XMLHTTP:null,isXmlDocument:function(G){if(G.nodeType===9){return G.documentElement.nodeName!==d;
}else if(G.ownerDocument){return this.isXmlDocument(G.ownerDocument);
}else{return false;
}},create:qx.core.Variant.select(r,{"mshtml":function(y,z){var A=new ActiveXObject(this.DOMDOC);
A.setProperty(n,b);

if(z){var B=h;
B+=z;

if(y){B+=f+y+o;
}B+=k;
A.loadXML(B);
}return A;
},"default":function(E,F){return document.implementation.createDocument(E||q,F||q,null);
}}),fromString:qx.core.Variant.select(r,{"mshtml":function(C){var D=qx.xml.Document.create();
D.loadXML(C);
return D;
},"default":function(w){var x=new DOMParser();
return x.parseFromString(w,e);
}})},defer:function(t){if(qx.core.Variant.isSet(r,p)){var u=[a,j];
var v=[c,g];

for(var i=0,l=u.length;i<l;i++){try{new ActiveXObject(u[i]);
new ActiveXObject(v[i]);
}catch(s){continue;
}t.DOMDOC=u[i];
t.XMLHTTP=v[i];
break;
}}}});
})();
(function(){var b="qx.dom.Element";
qx.Class.define(b,{statics:{hasChild:function(parent,a){return a.parentNode===parent;
},hasChildren:function(n){return !!n.firstChild;
},hasChildElements:function(u){u=u.firstChild;

while(u){if(u.nodeType===1){return true;
}u=u.nextSibling;
}return false;
},getParentElement:function(A){return A.parentNode;
},isInDom:function(v,w){if(!w){w=window;
}var x=w.document.getElementsByTagName(v.nodeName);

for(var i=0,l=x.length;i<l;i++){if(x[i]===v){return true;
}}return false;
},insertAt:function(r,parent,s){var t=parent.childNodes[s];

if(t){parent.insertBefore(r,t);
}else{parent.appendChild(r);
}return true;
},insertBegin:function(B,parent){if(parent.firstChild){this.insertBefore(B,parent.firstChild);
}else{parent.appendChild(B);
}},insertEnd:function(o,parent){parent.appendChild(o);
},insertBefore:function(y,z){z.parentNode.insertBefore(y,z);
return true;
},insertAfter:function(c,d){var parent=d.parentNode;

if(d==parent.lastChild){parent.appendChild(c);
}else{return this.insertBefore(c,d.nextSibling);
}return true;
},remove:function(g){if(!g.parentNode){return false;
}g.parentNode.removeChild(g);
return true;
},removeChild:function(m,parent){if(m.parentNode!==parent){return false;
}parent.removeChild(m);
return true;
},removeChildAt:function(e,parent){var f=parent.childNodes[e];

if(!f){return false;
}parent.removeChild(f);
return true;
},replaceChild:function(p,q){if(!q.parentNode){return false;
}q.parentNode.replaceChild(p,q);
return true;
},replaceAt:function(h,j,parent){var k=parent.childNodes[j];

if(!k){return false;
}parent.replaceChild(h,k);
return true;
}}});
})();
(function(){var d="CSS1Compat",c="qx.bom.client.Feature",b="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",a="label";
qx.Class.define(c,{statics:{STANDARD_MODE:false,QUIRKS_MODE:false,CONTENT_BOX:false,BORDER_BOX:false,SVG:false,CANVAS:!!window.CanvasRenderingContext2D,VML:false,XPATH:!!document.evaluate,AIR:navigator.userAgent.indexOf("adobeair")!==-1,GEARS:!!(window.google&&window.google.gears),SSL:window.location.protocol==="https:",ECMA_OBJECT_COUNT:(({}).__count__==0),CSS_POINTER_EVENTS:"pointerEvents" in document.documentElement.style,XUL:false,CSS_TEXT_OVERFLOW:("textOverflow" in document.documentElement.style||"OTextOverflow" in document.documentElement.style),HTML5_CLASSLIST:(document.documentElement.classList&&qx.Bootstrap.getClass(document.documentElement.classList)==="DOMTokenList"),__dJ:function(){this.QUIRKS_MODE=this.__dK();
this.STANDARD_MODE=!this.QUIRKS_MODE;
this.CONTENT_BOX=!qx.bom.client.Engine.MSHTML||this.STANDARD_MODE;
this.BORDER_BOX=!this.CONTENT_BOX;
this.SVG=document.implementation&&document.implementation.hasFeature&&(document.implementation.hasFeature("org.w3c.dom.svg","1.0")||document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1"));
this.VML=qx.bom.client.Engine.MSHTML;

try{document.createElementNS(b,a);
this.XUL=true;
}catch(e){this.XUL=false;
}},__dK:function(){if(qx.bom.client.Engine.MSHTML&&qx.bom.client.Engine.VERSION>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;
}else{return document.compatMode!==d;
}}},defer:function(f){f.__dJ();
}});
})();
(function(){var d="qx.lang.Object";
qx.Class.define(d,{statics:{empty:function(B){{};

for(var C in B){if(B.hasOwnProperty(C)){delete B[C];
}}},isEmpty:(qx.bom.client.Feature.ECMA_OBJECT_COUNT)?
function(e){{};
return e.__count__===0;
}:
function(j){{};

for(var k in j){return false;
}return true;
},hasMinLength:(qx.bom.client.Feature.ECMA_OBJECT_COUNT)?
function(r,s){{};
return r.__count__>=s;
}:
function(t,u){{};

if(u<=0){return true;
}var length=0;

for(var v in t){if((++length)>=u){return true;
}}return false;
},getLength:qx.Bootstrap.objectGetLength,getKeys:qx.Bootstrap.getKeys,getKeysAsString:qx.Bootstrap.getKeysAsString,getValues:function(o){{};
var q=[];
var p=this.getKeys(o);

for(var i=0,l=p.length;i<l;i++){q.push(o[p[i]]);
}return q;
},mergeWith:qx.Bootstrap.objectMergeWith,carefullyMergeWith:function(F,G){{};
return qx.lang.Object.mergeWith(F,G,false);
},merge:function(f,g){{};
var h=arguments.length;

for(var i=1;i<h;i++){qx.lang.Object.mergeWith(f,arguments[i]);
}return f;
},clone:function(H){{};
var I={};

for(var J in H){I[J]=H[J];
}return I;
},invert:function(w){{};
var x={};

for(var y in w){x[w[y].toString()]=y;
}return x;
},getKeyFromValue:function(a,b){{};

for(var c in a){if(a.hasOwnProperty(c)&&a[c]===b){return c;
}}return null;
},contains:function(D,E){{};
return this.getKeyFromValue(D,E)!==null;
},select:function(m,n){{};
return n[m];
},fromArray:function(z){{};
var A={};

for(var i=0,l=z.length;i<l;i++){{};
A[z[i].toString()]=true;
}return A;
}}});
})();
(function(){var o="default",n="native",m="",k=" ",j="\\b",h="(\\s|$)",g="(^|\\s)",f="g",e="qx.bom.element.Class",d="$2",c="\\b|\\b";
qx.Class.define(e,{statics:{__BJ:/\s+/g,__BK:/^\s+|\s+$/g,add:qx.lang.Object.select(qx.bom.client.Feature.HTML5_CLASSLIST?n:o,{"native":function(J,name){J.classList.add(name);
return name;
},"default":function(E,name){if(!this.has(E,name)){E.className+=(E.className?k:m)+name;
}return name;
}}),addClasses:qx.lang.Object.select(qx.bom.client.Feature.HTML5_CLASSLIST?n:o,{"native":function(x,y){for(var i=0;i<y.length;i++){x.classList.add(y[i]);
}return x.className;
},"default":function(K,L){var M={};
var O;
var N=K.className;

if(N){O=N.split(this.__BJ);

for(var i=0,l=O.length;i<l;i++){M[O[i]]=true;
}
for(var i=0,l=L.length;i<l;i++){if(!M[L[i]]){O.push(L[i]);
}}}else{O=L;
}return K.className=O.join(k);
}}),get:function(D){return D.className;
},has:qx.lang.Object.select(qx.bom.client.Feature.HTML5_CLASSLIST?n:o,{"native":function(s,name){return s.classList.contains(name);
},"default":function(H,name){var I=new RegExp(g+name+h);
return I.test(H.className);
}}),remove:qx.lang.Object.select(qx.bom.client.Feature.HTML5_CLASSLIST?n:o,{"native":function(C,name){C.classList.remove(name);
return name;
},"default":function(v,name){var w=new RegExp(g+name+h);
v.className=v.className.replace(w,d);
return name;
}}),removeClasses:qx.lang.Object.select(qx.bom.client.Feature.HTML5_CLASSLIST?n:o,{"native":function(a,b){for(var i=0;i<b.length;i++){a.classList.remove(b[i]);
}return a.className;
},"default":function(p,q){var r=new RegExp(j+q.join(c)+j,f);
return p.className=p.className.replace(r,m).replace(this.__BK,m).replace(this.__BJ,k);
}}),replace:function(z,A,B){this.remove(z,A);
return this.add(z,B);
},toggle:qx.lang.Object.select(qx.bom.client.Feature.HTML5_CLASSLIST?n:o,{"native":function(F,name,G){if(G===undefined){F.classList.toggle(name);
}else{G?this.add(F,name):this.remove(F,name);
}return name;
},"default":function(t,name,u){if(u==null){u=!this.has(t,name);
}u?this.add(t,name):this.remove(t,name);
return name;
}})}});
})();
(function(){var c="zIndex",b="portal.box.Util",a="auto";
qx.Class.define(b,{statics:{__BL:1000,bringToFront:function(f){var g=qx.bom.element.Style.get(f,c);
g=g==a?0:g;
qx.bom.element.Style.set(f,c,g+this.__BL);
},sendToBack:function(d){var e=qx.bom.element.Style.get(d,c);
qx.bom.element.Style.set(d,c,e-this.__BL);
}}});
})();
(function(){var k="qx.client",j="character",i="EndToEnd",h="input",g="textarea",f="StartToStart",e='character',d="qx.bom.Selection",c="button",b="#text",a="body";
qx.Class.define(d,{statics:{getSelectionObject:qx.core.Variant.select(k,{"mshtml":function(M){return M.selection;
},"default":function(w){return qx.dom.Node.getWindow(w).getSelection();
}}),get:qx.core.Variant.select(k,{"mshtml":function(Q){var R=qx.bom.Range.get(qx.dom.Node.getDocument(Q));
return R.text;
},"default":function(u){if(this.__fV(u)){return u.value.substring(u.selectionStart,u.selectionEnd);
}else{return this.getSelectionObject(qx.dom.Node.getDocument(u)).toString();
}}}),getLength:qx.core.Variant.select(k,{"mshtml":function(N){var P=this.get(N);
var O=qx.util.StringSplit.split(P,/\r\n/);
return P.length-(O.length-1);
},"opera":function(S){var X,V,T;

if(this.__fV(S)){var W=S.selectionStart;
var U=S.selectionEnd;
X=S.value.substring(W,U);
V=U-W;
}else{X=qx.bom.Selection.get(S);
V=X.length;
}T=qx.util.StringSplit.split(X,/\r\n/);
return V-(T.length-1);
},"default":function(y){if(this.__fV(y)){return y.selectionEnd-y.selectionStart;
}else{return this.get(y).length;
}}}),getStart:qx.core.Variant.select(k,{"mshtml":function(bq){if(this.__fV(bq)){var bv=qx.bom.Range.get();
if(!bq.contains(bv.parentElement())){return -1;
}var bw=qx.bom.Range.get(bq);
var bu=bq.value.length;
bw.moveToBookmark(bv.getBookmark());
bw.moveEnd(e,bu);
return bu-bw.text.length;
}else{var bw=qx.bom.Range.get(bq);
var bs=bw.parentElement();
var bx=qx.bom.Range.get();
bx.moveToElementText(bs);
var br=qx.bom.Range.get(qx.dom.Node.getBodyElement(bq));
br.setEndPoint(f,bw);
br.setEndPoint(i,bx);
if(bx.compareEndPoints(f,br)==0){return 0;
}var bt;
var by=0;

while(true){bt=br.moveStart(j,-1);
if(bx.compareEndPoints(f,br)==0){break;
}if(bt==0){break;
}else{by++;
}}return ++by;
}},"gecko|webkit":function(J){if(this.__fV(J)){return J.selectionStart;
}else{var L=qx.dom.Node.getDocument(J);
var K=this.getSelectionObject(L);
if(K.anchorOffset<K.focusOffset){return K.anchorOffset;
}else{return K.focusOffset;
}}},"default":function(Y){if(this.__fV(Y)){return Y.selectionStart;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(Y)).anchorOffset;
}}}),getEnd:qx.core.Variant.select(k,{"mshtml":function(ba){if(this.__fV(ba)){var bf=qx.bom.Range.get();
if(!ba.contains(bf.parentElement())){return -1;
}var bg=qx.bom.Range.get(ba);
var be=ba.value.length;
bg.moveToBookmark(bf.getBookmark());
bg.moveStart(e,-be);
return bg.text.length;
}else{var bg=qx.bom.Range.get(ba);
var bc=bg.parentElement();
var bh=qx.bom.Range.get();
bh.moveToElementText(bc);
var be=bh.text.length;
var bb=qx.bom.Range.get(qx.dom.Node.getBodyElement(ba));
bb.setEndPoint(i,bg);
bb.setEndPoint(f,bh);
if(bh.compareEndPoints(i,bb)==0){return be-1;
}var bd;
var bi=0;

while(true){bd=bb.moveEnd(j,1);
if(bh.compareEndPoints(i,bb)==0){break;
}if(bd==0){break;
}else{bi++;
}}return be-(++bi);
}},"gecko|webkit":function(l){if(this.__fV(l)){return l.selectionEnd;
}else{var n=qx.dom.Node.getDocument(l);
var m=this.getSelectionObject(n);
if(m.focusOffset>m.anchorOffset){return m.focusOffset;
}else{return m.anchorOffset;
}}},"default":function(t){if(this.__fV(t)){return t.selectionEnd;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(t)).focusOffset;
}}}),__fV:function(v){return qx.dom.Node.isElement(v)&&(v.nodeName.toLowerCase()==h||v.nodeName.toLowerCase()==g);
},set:qx.core.Variant.select(k,{"mshtml":function(o,p,q){var r;
if(qx.dom.Node.isDocument(o)){o=o.body;
}
if(qx.dom.Node.isElement(o)||qx.dom.Node.isText(o)){switch(o.nodeName.toLowerCase()){case h:case g:case c:if(q===undefined){q=o.value.length;
}
if(p>=0&&p<=o.value.length&&q>=0&&q<=o.value.length){r=qx.bom.Range.get(o);
r.collapse(true);
r.moveStart(j,p);
r.moveEnd(j,q-p);
r.select();
return true;
}break;
case b:if(q===undefined){q=o.nodeValue.length;
}
if(p>=0&&p<=o.nodeValue.length&&q>=0&&q<=o.nodeValue.length){r=qx.bom.Range.get(qx.dom.Node.getBodyElement(o));
r.moveToElementText(o.parentNode);
r.collapse(true);
r.moveStart(j,p);
r.moveEnd(j,q-p);
r.select();
return true;
}break;
default:if(q===undefined){q=o.childNodes.length-1;
}if(o.childNodes[p]&&o.childNodes[q]){r=qx.bom.Range.get(qx.dom.Node.getBodyElement(o));
r.moveToElementText(o.childNodes[p]);
r.collapse(true);
var s=qx.bom.Range.get(qx.dom.Node.getBodyElement(o));
s.moveToElementText(o.childNodes[q]);
r.setEndPoint(i,s);
r.select();
return true;
}}}return false;
},"default":function(bj,bk,bl){var bp=bj.nodeName.toLowerCase();

if(qx.dom.Node.isElement(bj)&&(bp==h||bp==g)){if(bl===undefined){bl=bj.value.length;
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
}}),setAll:function(x){return qx.bom.Selection.set(x,0);
},clear:qx.core.Variant.select(k,{"mshtml":function(z){var A=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(z));
var B=qx.bom.Range.get(z);
var parent=B.parentElement();
var C=qx.bom.Range.get(qx.dom.Node.getDocument(z));
if(parent==C.parentElement()&&parent==z){A.empty();
}},"default":function(D){var F=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(D));
var H=D.nodeName.toLowerCase();
if(qx.dom.Node.isElement(D)&&(H==h||H==g)){D.setSelectionRange(0,0);
qx.bom.Element.blur(D);
}else if(qx.dom.Node.isDocument(D)||H==a){F.collapse(D.body?D.body:D,0);
}else{var G=qx.bom.Range.get(D);

if(!G.collapsed){var I;
var E=G.commonAncestorContainer;
if(qx.dom.Node.isElement(D)&&qx.dom.Node.isText(E)){I=E.parentNode;
}else{I=E;
}
if(I==D){F.collapse(D,0);
}}}}})}});
})();
(function(){var l="button",k="qx.bom.Range",j="text",i="password",h="file",g="submit",f="reset",e="textarea",d="input",c="hidden",a="qx.client",b="body";
qx.Class.define(k,{statics:{get:qx.core.Variant.select(a,{"mshtml":function(m){if(qx.dom.Node.isElement(m)){switch(m.nodeName.toLowerCase()){case d:switch(m.type){case j:case i:case c:case l:case f:case h:case g:return m.createTextRange();
break;
default:return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(m)).createRange();
}break;
case e:case b:case l:return m.createTextRange();
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
(function(){var i="0px",h="mshtml",g="qx.client",f="qx.bom.element.Dimension",e="paddingRight",d="paddingLeft",c="paddingTop",b="paddingBottom";
qx.Class.define(f,{statics:{getWidth:qx.core.Variant.select(g,{"gecko":function(n){if(n.getBoundingClientRect){var o=n.getBoundingClientRect();
return Math.round(o.right)-Math.round(o.left);
}else{return n.offsetWidth;
}},"default":function(j){return j.offsetWidth;
}}),getHeight:qx.core.Variant.select(g,{"gecko":function(k){if(k.getBoundingClientRect){var l=k.getBoundingClientRect();
return Math.round(l.bottom)-Math.round(l.top);
}else{return k.offsetHeight;
}},"default":function(w){return w.offsetHeight;
}}),getSize:function(a){return {width:this.getWidth(a),height:this.getHeight(a)};
},__iU:{visible:true,hidden:true},getContentWidth:function(x){var z=qx.bom.element.Style;
var A=qx.bom.element.Overflow.getX(x);
var B=parseInt(z.get(x,d)||i,10);
var D=parseInt(z.get(x,e)||i,10);

if(this.__iU[A]){return x.clientWidth-B-D;
}else{if(x.clientWidth>=x.scrollWidth){return Math.max(x.clientWidth,x.scrollWidth)-B-D;
}else{var C=x.scrollWidth-B;
var y=qx.bom.client.Engine;

if(y.NAME===h&&y.VERSION==6){C-=D;
}return C;
}}},getContentHeight:function(p){var r=qx.bom.element.Style;
var t=qx.bom.element.Overflow.getY(p);
var u=parseInt(r.get(p,c)||i,10);
var s=parseInt(r.get(p,b)||i,10);

if(this.__iU[t]){return p.clientHeight-u-s;
}else{if(p.clientHeight>=p.scrollHeight){return Math.max(p.clientHeight,p.scrollHeight)-u-s;
}else{var v=p.scrollHeight-u;
var q=qx.bom.client.Engine;

if(q.NAME===h&&q.VERSION==6){v-=s;
}return v;
}}},getContentSize:function(m){return {width:this.getContentWidth(m),height:this.getContentHeight(m)};
}}});
})();
(function(){var a="portal.box.Draggable";
qx.Class.define(a,{extend:qx.core.Object,construct:function(b){qx.core.Object.call(this);
this.__BM=b;
this.__BN=b.getElement();
this.__BO=null;
this.__BP=null;
this.__BQ();
},members:{__BM:null,__BN:null,__BO:null,__BP:null,getBox:function(){return this.__BM;
},getElement:function(){return this.__BN;
},__BQ:function(){this.__BR();
this.__BS();
},__BR:function(){this.__BO=qx.bom.Element.create("div");
qx.bom.element.Class.add(this.__BO,"dragHandle");
qx.dom.Element.insertBegin(this.__BO,this.__BN);
},__BS:function(){qx.bom.Element.addListener(this.__BO,"mousedown",this.__BT,this);
qx.bom.Element.addListener(this.__BO,"mouseover",function(e){qx.bom.element.Style.set(this,"cursor","move");
},this.__BO);
qx.bom.Element.addListener(this.__BO,"dragstart",this.__BW,this);
qx.bom.Element.addListener(this.__BO,"dragend",portal.dragdrop.Manager.getInstance().stopSession,portal.dragdrop.Manager.getInstance());
qx.bom.Element.addListener(this.__BO,"drag",this.__BX,this);
},__BT:function(e){if(e.isLeftPressed()){this.__BP={left:e.getDocumentLeft()-qx.bom.element.Location.getLeft(this.__BN),top:e.getDocumentTop()-qx.bom.element.Location.getTop(this.__BN)};
qx.bom.Element.addListener(document.body,"mouseup",this.__BV,this,true);
this.__BU();
qx.event.Registration.fireEvent(this.__BO,"dragstart",qx.event.type.Event);
}},__BU:qx.core.Variant.select("qx.client",{"mshtml":function(){var f=this;
var d=qx.lang.Function.bind(this.__BV,f);
document.getElementsByTagName("html")[0].onmouseleave=d;
},"default":qx.lang.Function.empty}),__BV:function(e){try{e.stopPropagation();
}catch(c){}
if(portal.dragdrop.Manager.getInstance().isSessionActive()){qx.event.Registration.removeListener(document.body,"mousemove",this.__BX,this,true);
portal.dragdrop.Manager.getInstance().stopSession();
}qx.bom.Element.removeListener(document.body,"mouseup",this.__BV,this,true);
},__BW:function(e){portal.box.Manager.getInstance().setActiveBox(this.__BM);
portal.dragdrop.Manager.getInstance().startSession(this.__BM);
qx.event.Registration.addListener(document.body,"mousemove",this.__BX,this,true);
},__BX:function(e){e.stopPropagation();
var g=e.getDocumentLeft()-this.__BP.left;
var top=e.getDocumentTop()-this.__BP.top;
qx.event.Timer.once(function(){this.checkGroupBox(g);
this.onDragMove(top,g);
},portal.dragdrop.Manager.getInstance(),0);
}},destruct:function(){this.__BM=this.__BO=this.__BN=this.__BP=null;
}});
})();
(function(){var x="px",w="px;",v="border",u="portal.box.Box",t="1px dashed red",s="top",r="Boolean",q="left",p="paddingTop",o="width:",f="height:",n="finish",k="opacity:0.5;margin:0;position:absolute;",c="left:",b="div",h="absolute",g="spring",l="paddingBottom",a="portal.dragdrop.Manager",m="singleton",d="top:";
qx.Class.define(a,{type:m,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__BY={top:null,height:null};
this.__Ca={top:0,left:0};
},properties:{activeBox:{check:u,init:null,nullable:true},sessionActive:{check:r,init:false}},members:{__BY:null,__Cb:null,__Cc:false,__Ca:null,__Cd:null,__Ce:null,startSession:function(G){this.setSessionActive(true);
this.setActiveBox(G);
this.__Cb=G.getGroupBoxId();
this.__Cf();
if(this.__Cd==null){this.__Cd={};
var H=portal.box.Manager.getInstance().getGroupBoxes();

for(var i=0,j=H.length;i<j;i++){this.__Cd[H[i].element.id]={left:qx.bom.element.Location.getLeft(H[i].element),right:qx.bom.element.Location.getLeft(H[i].element)+qx.bom.element.Dimension.getWidth(H[i].element)};
}}},__Cf:function(){if(!this.__Ce){this.__Ce=qx.bom.Element.create(b);
}var N=this.getActiveBox().getElement();
var L=qx.bom.element.Dimension.getContentSize(N);
this.__Cg(N,this.__Ce);
qx.bom.element.Class.add(this.__Ce,qx.bom.element.Class.get(N));
var M=k+d+qx.bom.element.Location.getTop(N)+w+c+qx.bom.element.Location.getLeft(N)+w+o+L.width+w+f+L.height+x;
qx.bom.element.Style.setCss(this.__Ce,M);
qx.bom.element.Style.set(N,v,t);
qx.dom.Node.getBodyElement(N).appendChild(this.__Ce);
portal.box.Util.bringToFront(this.__Ce);
},__Cg:function(R,S){while(R.firstChild){S.appendChild(R.firstChild);
}},stopSession:function(e){this.setSessionActive(false);
var J=this.getActiveBox();
var K=J.getElement();
portal.box.Manager.getInstance().updateGroupBoxMembers(J.getGroupBoxId(),this.__Cb,J);
J.setGroupBoxId(this.__Cb);
var I=new qx.fx.effect.core.Move(this.__Ce);
I.set({x:qx.bom.element.Location.getLeft(K),y:qx.bom.element.Location.getTop(K),mode:h,duration:0.5,transition:g});
I.start();
I.addListener(n,function(){this.__Cg(this.__Ce,K);
qx.bom.element.Style.reset(K,v);
this.__Ce.parentNode.removeChild(this.__Ce);

if(J.isActive()){J._applyActive(true);
}else{portal.box.Manager.getInstance().setActiveBox(J);
}},this);
},onDragMove:function(top,O){if(this.__Ca.left!=O){qx.bom.element.Style.set(this.__Ce,q,O+x);
}
if(this.__Ca.top!=top){qx.bom.element.Style.set(this.__Ce,s,top+x);
}var P=this.getActiveBox().getElement();

if(this.__BY.top==null){this.__BY.top=qx.bom.element.Location.getTop(P);
}
if(this.__BY.height==null){this.__BY.height=qx.bom.element.Dimension.getHeight(P);
}if(this.__Cc==false&&top>=this.__BY.top&&top<=(this.__BY.top+this.__BY.height)){return;
}var Q;
if(this.__Cc){Q=qx.dom.Hierarchy.getFirstDescendant(document.getElementById(this.__Cb));
while(Q!=null){if(this.__Ch(true,top,P,Q)){this.__Cc=false;
return;
}Q=qx.dom.Hierarchy.getNextElementSibling(Q);
}}else{Q=P;
}if(top-this.__Ca.top>0){Q=qx.dom.Hierarchy.getNextElementSibling(Q);

while(Q!=null){if(Q){if(this.__Ch(true,top,P,Q)){return;
}}Q=qx.dom.Hierarchy.getNextElementSibling(Q);
}}else{var Q=qx.dom.Hierarchy.getPreviousElementSibling(Q);

while(Q!=null){if(Q){if(this.__Ch(false,top,P,Q)){return;
}}Q=qx.dom.Hierarchy.getPreviousElementSibling(Q);
}}this.__Ca.left=O;
this.__Ca.top=top;
},__Ch:function(y,top,z,A){var B=qx.bom.element.Location.getTop(A);
var D=parseInt(qx.bom.element.Style.get(A,p));
var E=parseInt(qx.bom.element.Style.get(A,l));
var C=qx.bom.element.Dimension.getContentHeight(A)+E+D;
var F;

if(y){if(top>=(B+(C/3))){F=qx.dom.Hierarchy.getNextElementSibling(A);

if(F!=z||F==null){qx.dom.Element.insertAfter(z,A);
this.__BY.top=qx.bom.element.Location.getTop(z);
}return true;
}}else{if(top<=(B+C*2/3)){F=qx.dom.Hierarchy.getPreviousElementSibling(A);

if(F!=z||F==null){qx.dom.Element.insertBefore(z,A);
this.__BY.top=qx.bom.element.Location.getTop(z);
}return true;
}}return false;
},checkGroupBox:function(T){if(this.__Cd[this.__Cb].left<=T&&this.__Cd[this.__Cb].right>=T){return;
}
for(var U in this.__Cd){if(U!=this.__Cb){if(this.__Cd[U].left<=T&&this.__Cd[U].right>=T){this.__Cb=U;
this.__Cc=true;
return;
}}}}},destruct:function(){this.__BY=this.__Ca=this.__Cb=null;
this.__Ci=this.__Ce=this.__Cd=null;
}});
})();
(function(){var p="borderTopWidth",o="borderLeftWidth",n="marginTop",m="marginLeft",l="scroll",k="qx.client",j="border-box",i="borderBottomWidth",h="borderRightWidth",g="auto",E="padding",D="qx.bom.element.Location",C="paddingLeft",B="static",A="marginBottom",z="visible",y="BODY",x="paddingBottom",w="paddingTop",v="marginRight",t="position",u="margin",r="overflow",s="paddingRight",q="border";
qx.Class.define(D,{statics:{__fP:function(U,V){return qx.bom.element.Style.get(U,V,qx.bom.element.Style.COMPUTED_MODE,false);
},__fQ:function(a,b){return parseInt(qx.bom.element.Style.get(a,b,qx.bom.element.Style.COMPUTED_MODE,false),10)||0;
},__fR:function(bt){var bw=0,top=0;
if(bt.getBoundingClientRect&&!qx.bom.client.Engine.OPERA){var bv=qx.dom.Node.getWindow(bt);
bw-=qx.bom.Viewport.getScrollLeft(bv);
top-=qx.bom.Viewport.getScrollTop(bv);
}else{var bu=qx.dom.Node.getDocument(bt).body;
bt=bt.parentNode;
while(bt&&bt!=bu){bw+=bt.scrollLeft;
top+=bt.scrollTop;
bt=bt.parentNode;
}}return {left:bw,top:top};
},__fS:qx.core.Variant.select(k,{"mshtml":function(Q){var S=qx.dom.Node.getDocument(Q);
var R=S.body;
var T=0;
var top=0;
T-=R.clientLeft+S.documentElement.clientLeft;
top-=R.clientTop+S.documentElement.clientTop;

if(qx.bom.client.Feature.STANDARD_MODE){T+=this.__fQ(R,o);
top+=this.__fQ(R,p);
}return {left:T,top:top};
},"webkit":function(bp){var br=qx.dom.Node.getDocument(bp);
var bq=br.body;
var bs=bq.offsetLeft;
var top=bq.offsetTop;
if(qx.bom.client.Engine.VERSION<530.17){bs+=this.__fQ(bq,o);
top+=this.__fQ(bq,p);
}return {left:bs,top:top};
},"gecko":function(W){var X=qx.dom.Node.getDocument(W).body;
var Y=X.offsetLeft;
var top=X.offsetTop;
if(qx.bom.client.Engine.VERSION<1.9){Y+=this.__fQ(X,m);
top+=this.__fQ(X,n);
}if(qx.bom.element.BoxSizing.get(X)!==j){Y+=this.__fQ(X,o);
top+=this.__fQ(X,p);
}return {left:Y,top:top};
},"default":function(bG){var bH=qx.dom.Node.getDocument(bG).body;
var bI=bH.offsetLeft;
var top=bH.offsetTop;
return {left:bI,top:top};
}}),__fT:qx.core.Variant.select(k,{"mshtml|webkit":function(bx){var bz=qx.dom.Node.getDocument(bx);
if(bx.getBoundingClientRect){var bA=bx.getBoundingClientRect();
var bB=bA.left;
var top=bA.top;
}else{var bB=bx.offsetLeft;
var top=bx.offsetTop;
bx=bx.offsetParent;
var by=bz.body;
while(bx&&bx!=by){bB+=bx.offsetLeft;
top+=bx.offsetTop;
bB+=this.__fQ(bx,o);
top+=this.__fQ(bx,p);
bx=bx.offsetParent;
}}return {left:bB,top:top};
},"gecko":function(bJ){if(bJ.getBoundingClientRect){var bM=bJ.getBoundingClientRect();
var bN=Math.round(bM.left);
var top=Math.round(bM.top);
}else{var bN=0;
var top=0;
var bK=qx.dom.Node.getDocument(bJ).body;
var bL=qx.bom.element.BoxSizing;

if(bL.get(bJ)!==j){bN-=this.__fQ(bJ,o);
top-=this.__fQ(bJ,p);
}
while(bJ&&bJ!==bK){bN+=bJ.offsetLeft;
top+=bJ.offsetTop;
if(bL.get(bJ)!==j){bN+=this.__fQ(bJ,o);
top+=this.__fQ(bJ,p);
}if(bJ.parentNode&&this.__fP(bJ.parentNode,r)!=z){bN+=this.__fQ(bJ.parentNode,o);
top+=this.__fQ(bJ.parentNode,p);
}bJ=bJ.offsetParent;
}}return {left:bN,top:top};
},"default":function(c){var e=0;
var top=0;
var d=qx.dom.Node.getDocument(c).body;
while(c&&c!==d){e+=c.offsetLeft;
top+=c.offsetTop;
c=c.offsetParent;
}return {left:e,top:top};
}}),get:function(F,G){if(F.tagName==y){var location=this.__fU(F);
var N=location.left;
var top=location.top;
}else{var H=this.__fS(F);
var M=this.__fT(F);
var scroll=this.__fR(F);
var N=M.left+H.left-scroll.left;
var top=M.top+H.top-scroll.top;
}var I=N+F.offsetWidth;
var J=top+F.offsetHeight;

if(G){if(G==E||G==l){var K=qx.bom.element.Overflow.getX(F);

if(K==l||K==g){I+=F.scrollWidth-F.offsetWidth+this.__fQ(F,o)+this.__fQ(F,h);
}var L=qx.bom.element.Overflow.getY(F);

if(L==l||L==g){J+=F.scrollHeight-F.offsetHeight+this.__fQ(F,p)+this.__fQ(F,i);
}}
switch(G){case E:N+=this.__fQ(F,C);
top+=this.__fQ(F,w);
I-=this.__fQ(F,s);
J-=this.__fQ(F,x);
case l:N-=F.scrollLeft;
top-=F.scrollTop;
I-=F.scrollLeft;
J-=F.scrollTop;
case q:N+=this.__fQ(F,o);
top+=this.__fQ(F,p);
I-=this.__fQ(F,h);
J-=this.__fQ(F,i);
break;
case u:N-=this.__fQ(F,m);
top-=this.__fQ(F,n);
I+=this.__fQ(F,v);
J+=this.__fQ(F,A);
break;
}}return {left:N,top:top,right:I,bottom:J};
},__fU:qx.core.Variant.select(k,{"default":function(bE){var top=bE.offsetTop+this.__fQ(bE,n);
var bF=bE.offsetLeft+this.__fQ(bE,m);
return {left:bF,top:top};
},"mshtml":function(bn){var top=bn.offsetTop;
var bo=bn.offsetLeft;

if(!((qx.bom.client.Engine.VERSION<8||qx.bom.client.Engine.DOCUMENT_MODE<8)&&!qx.bom.client.Feature.QUIRKS_MODE)){top+=this.__fQ(bn,n);
bo+=this.__fQ(bn,m);
}return {left:bo,top:top};
},"gecko":function(bf){var top=bf.offsetTop+this.__fQ(bf,n)+this.__fQ(bf,o);
var bg=bf.offsetLeft+this.__fQ(bf,m)+this.__fQ(bf,p);
return {left:bg,top:top};
}}),getLeft:function(O,P){return this.get(O,P).left;
},getTop:function(ba,bb){return this.get(ba,bb).top;
},getRight:function(bO,bP){return this.get(bO,bP).right;
},getBottom:function(bC,bD){return this.get(bC,bD).bottom;
},getRelative:function(bh,bi,bj,bk){var bm=this.get(bh,bj);
var bl=this.get(bi,bk);
return {left:bm.left-bl.left,top:bm.top-bl.top,right:bm.right-bl.right,bottom:bm.bottom-bl.bottom};
},getPosition:function(f){return this.getRelative(f,this.getOffsetParent(f));
},getOffsetParent:function(bc){var be=bc.offsetParent||document.body;
var bd=qx.bom.element.Style;

while(be&&(!/^body|html$/i.test(be.tagName)&&bd.get(be,t)===B)){be=be.offsetParent;
}return be;
}}});
})();
(function(){var z="Number",y="qx.event.type.Event",x="update",w="linear",v="reverse",u="Boolean",t="setup",s="none",r="qx.fx.Base",q="sinodial",j="flicker",p="pulse",m="_applyDuration",i="easeOutQuad",h="spring",l="easeInQuad",k="full",n="wobble",g="finish",o="Object";
qx.Class.define(r,{extend:qx.core.Object,construct:function(d){qx.core.Object.call(this);
this.setQueue(qx.fx.queue.Manager.getInstance().getDefaultQueue());
this.__yL=qx.fx.Base.EffectState.IDLE;
this.__yM=d;
},events:{"setup":y,"update":y,"finish":y},properties:{duration:{init:0.5,check:z,apply:m},fps:{init:100,check:z},sync:{init:false,check:u},from:{init:0,check:z},to:{init:1,check:z},delay:{init:0.0,check:z},queue:{check:o},transition:{init:w,check:[w,l,i,q,v,j,n,p,h,s,k]}},statics:{EffectState:{IDLE:'idle',PREPARING:'preparing',FINISHED:'finished',RUNNING:'running'}},members:{__yL:null,__yN:null,__yO:null,__yP:null,__yQ:null,__yR:null,__yS:null,__yT:null,__yM:null,_getElement:function(){return this.__yM;
},_setElement:function(e){this.__yM=e;
},_applyDuration:function(b,c){},init:function(){this.__yL=qx.fx.Base.EffectState.PREPARING;
this.__yN=0;
this.__yO=this.getDelay()*1000+(new Date().getTime());
this.__yP=this.__yO+(this.getDuration()*1000);
this.__yQ=this.getTo()-this.getFrom();
this.__yR=this.__yP-this.__yO;
this.__yS=this.getFps()*this.getDuration();
},beforeFinishInternal:function(){},beforeFinish:function(){},afterFinishInternal:function(){},afterFinish:function(){},beforeSetupInternal:function(){},beforeSetup:function(){},afterSetupInternal:function(){},afterSetup:function(){},beforeUpdateInternal:function(){},beforeUpdate:function(){},afterUpdateInternal:function(){},afterUpdate:function(){},beforeStartInternal:function(){},beforeStart:function(){},setup:function(){this.fireEvent(t);
},update:function(a){},finish:function(){this.fireEvent(g);
},start:function(){if(this.__yL!=qx.fx.Base.EffectState.IDLE){return false;
}this.init();
this.beforeStartInternal();
this.beforeStart();

if(!this.getSync()){this.getQueue().add(this);
}return true;
},end:function(){this.render(1.0);
this.cancel();
this.beforeFinishInternal();
this.beforeFinish();
this.finish();
this.afterFinishInternal();
this.afterFinish();
},render:function(f){if(this.__yL==qx.fx.Base.EffectState.PREPARING){this.__yL=qx.fx.Base.EffectState.RUNNING;
this.beforeSetupInternal();
this.beforeSetup();
this.setup();
this.afterSetupInternal();
this.afterSetup();
}
if(this.__yL==qx.fx.Base.EffectState.RUNNING){this.__yT=qx.fx.Transition.get(this.getTransition())(f)*this.__yQ+this.getFrom();
this.beforeUpdateInternal();
this.beforeUpdate();
this.update(this.__yT);
this.afterUpdateInternal();
this.afterUpdate();

if(this.hasListener(x)){this.fireEvent(x);
}}},loop:function(A){if(A>=this.__yO){if(A>=this.__yP){this.end();
}var C=(A-this.__yO)/this.__yR;
var B=Math.round(C*this.__yS);
if(B>this.__yN){this.render(C);
this.__yN=B;
}}},cancel:function(){if(!this.getSync()){this.getQueue().remove(this);
}this.__yL=qx.fx.Base.EffectState.IDLE;
},resetState:function(){this.__yL=qx.fx.Base.EffectState.IDLE;
}},destruct:function(){this.__yM=this.__yL=null;
}});
})();
(function(){var i="position",h="px",g="relative",f="Number",e="absolute",d="top",c="left",b='absolute',a="qx.fx.effect.core.Move";
qx.Class.define(a,{extend:qx.fx.Base,properties:{mode:{init:g,check:[g,e]},x:{init:0,check:f},y:{init:0,check:f}},members:{__Cj:null,__Ck:null,__Cl:null,__Cm:null,__Cn:null,setup:function(){var m=this._getElement();
qx.fx.Base.prototype.setup.call(this);

if(m.parentNode){this.__Cl=qx.bom.element.Location.getLeft(m)-qx.bom.element.Location.getLeft(m.parentNode);
this.__Cm=qx.bom.element.Location.getTop(m)-qx.bom.element.Location.getTop(m.parentNode);
}else{this.__Cl=qx.bom.element.Location.getLeft(m);
this.__Cm=qx.bom.element.Location.getTop(m);
}this.__Cn=qx.bom.element.Style.get(m,i);
qx.bom.element.Style.set(m,i,e);

if(this.getMode()==b){this.__Cj=this.getX()-this.__Cl;
this.__Ck=this.getY()-this.__Cm;
}else{this.__Cj=this.getX();
this.__Ck=this.getY();
}},update:function(j){var l=this._getElement();
qx.fx.Base.prototype.update.call(this);
var k=Math.round(this.__Cj*j+this.__Cl);
var top=Math.round(this.__Ck*j+this.__Cm);
qx.bom.element.Style.set(l,c,k+h);
qx.bom.element.Style.set(l,d,top+h);
},afterFinishInternal:function(){qx.bom.element.Style.set(this._getElement(),i,this.__Cn);
}}});
})();
(function(){var e="__default",d="__yC",c="qx.fx.queue.Manager",b="singleton",a="object";
qx.Class.define(c,{extend:qx.core.Object,type:b,construct:function(){qx.core.Object.call(this);
this.__yC={};
},members:{__yC:null,getQueue:function(f){if(typeof (this.__yC[f])==a){return this.__yC[f];
}else{return this.__yC[f]=new qx.fx.queue.Queue;
}},getDefaultQueue:function(){return this.getQueue(e);
}},destruct:function(){this._disposeMap(d);
}});
})();
(function(){var b="qx.fx.queue.Queue",a="Number";
qx.Class.define(b,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__yA=[];
},properties:{limit:{init:Infinity,check:a}},members:{__yB:null,__yA:null,add:function(f){var g=new Date().getTime();
f._startOn+=g;
f._finishOn+=g;

if(this.__yA.length<this.getLimit()){this.__yA.push(f);
}else{f.resetState();
}
if(!this.__yB){this.__yB=qx.lang.Function.periodical(this.loop,15,this);
}},remove:function(e){qx.lang.Array.remove(this.__yA,e);

if(this.__yA.length==0){window.clearInterval(this.__yB);
delete this.__yB;
}},loop:function(){var c=new Date().getTime();

for(var i=0,d=this.__yA.length;i<d;i++){this.__yA[i]&&this.__yA[i].loop(c);
}}},destruct:function(){this.__yA=null;
}});
})();
(function(){var c="Number",b="static",a="qx.fx.Transition";
qx.Class.define(a,{type:b,statics:{get:function(d){return qx.fx.Transition[d]||false;
},linear:function(l){return l;
},easeInQuad:function(i){return Math.pow(2,10*(i-1));
},easeOutQuad:function(e){return (-Math.pow(2,-10*e)+1);
},sinodial:function(p){return (-Math.cos(p*Math.PI)/2)+0.5;
},reverse:function(m){return 1-m;
},flicker:function(o){var o=((-Math.cos(o*Math.PI)/4)+0.75)+Math.random()/4;
return o>1?1:o;
},wobble:function(n){return (-Math.cos(n*Math.PI*(9*n))/2)+0.5;
},pulse:function(f,g){g=(typeof (g)==c)?g:5;
return (Math.round((f%(1/g))*g)==0?Math.floor((f*g*2)-(f*g*2)):1-Math.floor((f*g*2)-(f*g*2)));
},spring:function(j){return 1-(Math.cos(j*4.5*Math.PI)*Math.exp(-j*6));
},none:function(k){return 0;
},full:function(h){return 1;
}}});
})();
(function(){var p="other",o="widgets",n="fonts",m="appearances",k="qx.Theme",j="]",h="[Theme ",g="colors",f="decorations",e="Theme",b="meta",d="borders",c="icons";
qx.Bootstrap.define(k,{statics:{define:function(name,M){if(!M){var M={};
}M.include=this.__rr(M.include);
M.patch=this.__rr(M.patch);
{};
var N={$$type:e,name:name,title:M.title,toString:this.genericToString};
if(M.extend){N.supertheme=M.extend;
}N.basename=qx.Bootstrap.createNamespace(name,N);
this.__ru(N,M);
this.__rs(N,M);
this.$$registry[name]=N;
for(var i=0,a=M.include,l=a.length;i<l;i++){this.include(N,a[i]);
}
for(var i=0,a=M.patch,l=a.length;i<l;i++){this.patch(N,a[i]);
}},__rr:function(J){if(!J){return [];
}
if(qx.Bootstrap.isArray(J)){return J;
}else{return [J];
}},__rs:function(O,P){var Q=P.aliases||{};

if(P.extend&&P.extend.aliases){qx.Bootstrap.objectMergeWith(Q,P.extend.aliases,false);
}O.aliases=Q;
},getAll:function(){return this.$$registry;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},genericToString:function(){return h+this.name+j;
},__rt:function(K){for(var i=0,L=this.__rv,l=L.length;i<l;i++){if(K[L[i]]){return L[i];
}}},__ru:function(q,r){var u=this.__rt(r);
if(r.extend&&!u){u=r.extend.type;
}q.type=u||p;
if(!u){return;
}var w=function(){};
if(r.extend){w.prototype=new r.extend.$$clazz;
}var v=w.prototype;
var t=r[u];
for(var s in t){v[s]=t[s];
if(v[s].base){{};
v[s].base=r.extend;
}}q.$$clazz=w;
q[u]=new w;
},$$registry:{},__rv:[g,d,f,n,c,o,m,b],__rw:null,__rx:null,__ry:function(){},patch:function(x,y){var A=this.__rt(y);

if(A!==this.__rt(x)){throw new Error("The mixins '"+x.name+"' are not compatible '"+y.name+"'!");
}var z=y[A];
var B=x.$$clazz.prototype;

for(var C in z){B[C]=z[C];
}},include:function(D,E){var G=E.type;

if(G!==D.type){throw new Error("The mixins '"+D.name+"' are not compatible '"+E.name+"'!");
}var F=E[G];
var H=D.$$clazz.prototype;

for(var I in F){if(H[I]!==undefined){continue;
}H[I]=F[I];
}}}});
})();
(function(){var j="#CCCCCC",i="#F3F3F3",h="#E4E4E4",g="#1a1a1a",f="#084FAB",e="gray",d="#fffefe",c="white",b="#4a4a4a",a="#EEEEEE",K="#80B4EF",J="#C72B2B",I="#ffffdd",H="#334866",G="#00204D",F="#666666",E="#CBC8CD",D="#99C3FE",C="#808080",B="#F4F4F4",q="#001533",r="#909090",o="#FCFCFC",p="#314a6e",m="#B6B6B6",n="#0880EF",k="#4d4d4d",l="#DFDFDF",s="#000000",t="#FF9999",w="#7B7A7E",v="#26364D",y="#990000",x="#AFAFAF",A="#404955",z="#AAAAAA",u="qx.theme.modern.Color";
qx.Theme.define(u,{colors:{"background-application":l,"background-pane":i,"background-light":o,"background-medium":a,"background-splitpane":x,"background-tip":I,"background-tip-error":J,"background-odd":h,"text-light":r,"text-gray":b,"text-label":g,"text-title":p,"text-input":s,"text-hovered":q,"text-disabled":w,"text-selected":d,"text-active":v,"text-inactive":A,"text-placeholder":E,"border-main":k,"border-separator":C,"border-input":H,"border-disabled":m,"border-pane":G,"border-button":F,"border-column":j,"border-focused":D,"invalid":y,"border-focused-invalid":t,"table-pane":i,"table-focus-indicator":n,"table-row-background-focused-selected":f,"table-row-background-focused":K,"table-row-background-selected":f,"table-row-background-even":i,"table-row-background-odd":h,"table-row-selected":d,"table-row":g,"table-row-line":j,"table-column-line":j,"progressive-table-header":z,"progressive-table-row-background-even":B,"progressive-table-row-background-odd":h,"progressive-progressbar-background":e,"progressive-progressbar-indicator-done":j,"progressive-progressbar-indicator-undone":c,"progressive-progressbar-percent-background":e,"progressive-progressbar-percent-text":c}});
})();
(function(){var a="qx.ui.decoration.IDecorator";
qx.Interface.define(a,{members:{getMarkup:function(){},resize:function(d,e,f){},tint:function(b,c){},getInsets:function(){}}});
})();
(function(){var i="Number",h="_applyInsets",g="abstract",f="insetRight",e="insetTop",d="insetBottom",c="qx.ui.decoration.Abstract",b="shorthand",a="insetLeft";
qx.Class.define(c,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],type:g,properties:{insetLeft:{check:i,nullable:true,apply:h},insetRight:{check:i,nullable:true,apply:h},insetBottom:{check:i,nullable:true,apply:h},insetTop:{check:i,nullable:true,apply:h},insets:{group:[e,f,d,a],mode:b}},members:{__sq:null,_getDefaultInsets:function(){throw new Error("Abstract method called.");
},_isInitialized:function(){throw new Error("Abstract method called.");
},_resetInsets:function(){this.__sq=null;
},getInsets:function(){if(this.__sq){return this.__sq;
}var j=this._getDefaultInsets();
return this.__sq={left:this.getInsetLeft()==null?j.left:this.getInsetLeft(),right:this.getInsetRight()==null?j.right:this.getInsetRight(),bottom:this.getInsetBottom()==null?j.bottom:this.getInsetBottom(),top:this.getInsetTop()==null?j.top:this.getInsetTop()};
},_applyInsets:function(){{};
this.__sq=null;
}},destruct:function(){this.__sq=null;
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
(function(){var r="_applyStyle",q="",p="Color",o="px",n="solid",m="dotted",l="double",k="dashed",j="_applyWidth",i="qx.ui.decoration.Uniform",f="px ",h=" ",g="scale",e="PositiveInteger",d="absolute";
qx.Class.define(i,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(a,b,c){qx.ui.decoration.Abstract.call(this);
if(a!=null){this.setWidth(a);
}
if(b!=null){this.setStyle(b);
}
if(c!=null){this.setColor(c);
}},properties:{width:{check:e,init:0,apply:j},style:{nullable:true,check:[n,m,k,l],init:n,apply:r},color:{nullable:true,check:p,apply:r},backgroundColor:{check:p,nullable:true,apply:r}},members:{__sr:null,_getDefaultInsets:function(){var s=this.getWidth();
return {top:s,right:s,bottom:s,left:s};
},_isInitialized:function(){return !!this.__sr;
},getMarkup:function(){if(this.__sr){return this.__sr;
}var y={position:d,top:0,left:0};
var z=this.getWidth();
{};
var B=qx.theme.manager.Color.getInstance();
y.border=z+f+this.getStyle()+h+(B.resolve(this.getColor())||q);
var A=this._generateBackgroundMarkup(y);
return this.__sr=A;
},resize:function(t,u,v){var x=this.getBackgroundImage()&&this.getBackgroundRepeat()==g;

if(x||qx.bom.client.Feature.CONTENT_BOX){var w=this.getWidth()*2;
u-=w;
v-=w;
if(u<0){u=0;
}
if(v<0){v=0;
}}t.style.width=u+o;
t.style.height=v+o;
},tint:function(C,D){var E=qx.theme.manager.Color.getInstance();

if(D==null){D=this.getBackgroundColor();
}C.style.backgroundColor=E.resolve(D)||q;
},_applyWidth:function(){{};
this._resetInsets();
},_applyStyle:function(){{};
}},destruct:function(){this.__sr=null;
}});
})();
(function(){var f="px",e="qx.ui.decoration.Background",d="",c="_applyStyle",b="Color",a="absolute";
qx.Class.define(e,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(o){qx.ui.decoration.Abstract.call(this);

if(o!=null){this.setBackgroundColor(o);
}},properties:{backgroundColor:{check:b,nullable:true,apply:c}},members:{__ss:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__ss;
},getMarkup:function(){if(this.__ss){return this.__ss;
}var j={position:a,top:0,left:0};
var k=this._generateBackgroundMarkup(j);
return this.__ss=k;
},resize:function(l,m,n){l.style.width=m+f;
l.style.height=n+f;
},tint:function(g,h){var i=qx.theme.manager.Color.getInstance();

if(h==null){h=this.getBackgroundColor();
}g.style.backgroundColor=i.resolve(h)||d;
},_applyStyle:function(){{};
}},destruct:function(){this.__ss=null;
}});
})();
(function(){var j="_applyStyle",i="solid",h="Color",g="",f="double",e="px ",d="dotted",c="_applyWidth",b="dashed",a="Number",F=" ",E="shorthand",D="px",C="widthTop",B="styleRight",A="styleLeft",z="widthLeft",y="widthBottom",x="styleTop",w="colorBottom",q="styleBottom",r="widthRight",o="colorLeft",p="colorRight",m="colorTop",n="scale",k="border-top",l="border-left",s="border-right",t="qx.ui.decoration.Single",v="border-bottom",u="absolute";
qx.Class.define(t,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(L,M,N){qx.ui.decoration.Abstract.call(this);
if(L!=null){this.setWidth(L);
}
if(M!=null){this.setStyle(M);
}
if(N!=null){this.setColor(N);
}},properties:{widthTop:{check:a,init:0,apply:c},widthRight:{check:a,init:0,apply:c},widthBottom:{check:a,init:0,apply:c},widthLeft:{check:a,init:0,apply:c},styleTop:{nullable:true,check:[i,d,b,f],init:i,apply:j},styleRight:{nullable:true,check:[i,d,b,f],init:i,apply:j},styleBottom:{nullable:true,check:[i,d,b,f],init:i,apply:j},styleLeft:{nullable:true,check:[i,d,b,f],init:i,apply:j},colorTop:{nullable:true,check:h,apply:j},colorRight:{nullable:true,check:h,apply:j},colorBottom:{nullable:true,check:h,apply:j},colorLeft:{nullable:true,check:h,apply:j},backgroundColor:{check:h,nullable:true,apply:j},left:{group:[z,A,o]},right:{group:[r,B,p]},top:{group:[C,x,m]},bottom:{group:[y,q,w]},width:{group:[C,r,y,z],mode:E},style:{group:[x,B,q,A],mode:E},color:{group:[m,p,w,o],mode:E}},members:{__st:null,_getDefaultInsets:function(){return {top:this.getWidthTop(),right:this.getWidthRight(),bottom:this.getWidthBottom(),left:this.getWidthLeft()};
},_isInitialized:function(){return !!this.__st;
},getMarkup:function(R){if(this.__st){return this.__st;
}var S=qx.theme.manager.Color.getInstance();
var T={};
var V=this.getWidthTop();

if(V>0){T[k]=V+e+this.getStyleTop()+F+(S.resolve(this.getColorTop())||g);
}var V=this.getWidthRight();

if(V>0){T[s]=V+e+this.getStyleRight()+F+(S.resolve(this.getColorRight())||g);
}var V=this.getWidthBottom();

if(V>0){T[v]=V+e+this.getStyleBottom()+F+(S.resolve(this.getColorBottom())||g);
}var V=this.getWidthLeft();

if(V>0){T[l]=V+e+this.getStyleLeft()+F+(S.resolve(this.getColorLeft())||g);
}{};
T.position=u;
T.top=0;
T.left=0;
var U=this._generateBackgroundMarkup(T);
return this.__st=U;
},resize:function(G,H,I){var K=this.getBackgroundImage()&&this.getBackgroundRepeat()==n;

if(K||qx.bom.client.Feature.CONTENT_BOX){var J=this.getInsets();
H-=J.left+J.right;
I-=J.top+J.bottom;
if(H<0){H=0;
}
if(I<0){I=0;
}}G.style.width=H+D;
G.style.height=I+D;
},tint:function(O,P){var Q=qx.theme.manager.Color.getInstance();

if(P==null){P=this.getBackgroundColor();
}O.style.backgroundColor=Q.resolve(P)||g;
},_applyWidth:function(){{};
this._resetInsets();
},_applyStyle:function(){{};
}},destruct:function(){this.__st=null;
}});
})();
(function(){var o="Number",n="_applyInsets",m="-l",l="insetRight",k="insetTop",j="_applyBaseImage",i="insetBottom",h="set",g="shorthand",f="-t",c="insetLeft",e="String",d="qx.ui.decoration.Grid";
qx.Class.define(d,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],construct:function(a,b){qx.core.Object.call(this);

if(qx.ui.decoration.css3.BorderImage.IS_SUPPORTED){this.__su=new qx.ui.decoration.css3.BorderImage();

if(a){this.__sv(a);
}}else{this.__su=new qx.ui.decoration.GridDiv(a);
}
if(b!=null){this.__su.setInsets(b);
}},properties:{baseImage:{check:e,nullable:true,apply:j},insetLeft:{check:o,nullable:true,apply:n},insetRight:{check:o,nullable:true,apply:n},insetBottom:{check:o,nullable:true,apply:n},insetTop:{check:o,nullable:true,apply:n},insets:{group:[k,l,i,c],mode:g}},members:{__su:null,getMarkup:function(){return this.__su.getMarkup();
},resize:function(u,v,w){this.__su.resize(u,v,w);
},tint:function(s,t){},getInsets:function(){return this.__su.getInsets();
},_applyInsets:function(p,q,name){var r=h+qx.lang.String.firstUp(name);
this.__su[r](p);
},_applyBaseImage:function(F,G){if(this.__su instanceof qx.ui.decoration.GridDiv){this.__su.setBaseImage(F);
}else{this.__sv(F);
}},__sv:function(x){this.__su.setBorderImage(x);
var B=qx.util.AliasManager.getInstance().resolve(x);
var C=/(.*)(\.[a-z]+)$/.exec(B);
var z=C[1];
var A=C[2];
var y=qx.util.ResourceManager.getInstance();
var D=y.getImageHeight(z+f+A);
var E=y.getImageWidth(z+m+A);
this.__su.setSlice([D,E]);
}},destruct:function(){this.__su=null;
}});
})();
(function(){var j="_applyStyle",i='"></div>',h="Color",g="1px",f='<div style="',e='border:',d="1px solid ",c="",b=";",a="px",v='</div>',u="qx.ui.decoration.Beveled",t='<div style="position:absolute;top:1px;left:1px;',s='border-bottom:',r='border-right:',q='border-left:',p='border-top:',o="Number",n='<div style="position:absolute;top:1px;left:0px;',m='position:absolute;top:0px;left:1px;',k='<div style="overflow:hidden;font-size:0;line-height:0;">',l="absolute";
qx.Class.define(u,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(H,I,J){qx.ui.decoration.Abstract.call(this);
if(H!=null){this.setOuterColor(H);
}
if(I!=null){this.setInnerColor(I);
}
if(J!=null){this.setInnerOpacity(J);
}},properties:{innerColor:{check:h,nullable:true,apply:j},innerOpacity:{check:o,init:1,apply:j},outerColor:{check:h,nullable:true,apply:j},backgroundColor:{check:h,nullable:true,apply:j}},members:{__sw:null,_getDefaultInsets:function(){return {top:2,right:2,bottom:2,left:2};
},_isInitialized:function(){return !!this.__sw;
},_applyStyle:function(){{};
},getMarkup:function(){if(this.__sw){return this.__sw;
}var K=qx.theme.manager.Color.getInstance();
var L=[];
var O=d+K.resolve(this.getOuterColor())+b;
var N=d+K.resolve(this.getInnerColor())+b;
L.push(k);
L.push(f);
L.push(e,O);
L.push(qx.bom.element.Opacity.compile(0.35));
L.push(i);
L.push(n);
L.push(q,O);
L.push(r,O);
L.push(i);
L.push(f);
L.push(m);
L.push(p,O);
L.push(s,O);
L.push(i);
var M={position:l,top:g,left:g};
L.push(this._generateBackgroundMarkup(M));
L.push(t);
L.push(e,N);
L.push(qx.bom.element.Opacity.compile(this.getInnerOpacity()));
L.push(i);
L.push(v);
return this.__sw=L.join(c);
},resize:function(w,x,y){if(x<4){x=4;
}
if(y<4){y=4;
}if(qx.bom.client.Feature.CONTENT_BOX){var outerWidth=x-2;
var outerHeight=y-2;
var E=outerWidth;
var D=outerHeight;
var innerWidth=x-4;
var innerHeight=y-4;
}else{var outerWidth=x;
var outerHeight=y;
var E=x-2;
var D=y-2;
var innerWidth=E;
var innerHeight=D;
}var G=a;
var C=w.childNodes[0].style;
C.width=outerWidth+G;
C.height=outerHeight+G;
var B=w.childNodes[1].style;
B.width=outerWidth+G;
B.height=D+G;
var A=w.childNodes[2].style;
A.width=E+G;
A.height=outerHeight+G;
var z=w.childNodes[3].style;
z.width=E+G;
z.height=D+G;
var F=w.childNodes[4].style;
F.width=innerWidth+G;
F.height=innerHeight+G;
},tint:function(P,Q){var R=qx.theme.manager.Color.getInstance();

if(Q==null){Q=this.getBackgroundColor();
}P.childNodes[3].style.backgroundColor=R.resolve(Q)||c;
}},destruct:function(){this.__sw=null;
}});
})();
(function(){var m="solid",l="scale",k="border-main",j="white",i="repeat-x",h="border-separator",g="background-light",f="invalid",e="border-focused-invalid",d="border-disabled",bs="decoration/table/header-cell.png",br="decoration/form/input.png",bq="#f8f8f8",bp="decoration/scrollbar/scrollbar-button-bg-horizontal.png",bo="#b6b6b6",bn="background-pane",bm="repeat-y",bl="decoration/form/input-focused.png",bk="#33508D",bj="decoration/selection.png",t="border-input",u="decoration/scrollbar/scrollbar-button-bg-vertical.png",r="decoration/tabview/tab-button-top-active.png",s="black",p="decoration/form/button-c.png",q="decoration/scrollbar/scrollbar-bg-vertical.png",n="decoration/form/button.png",o="decoration/form/button-checked.png",B="decoration/tabview/tab-button-left-inactive.png",C="decoration/groupbox/groupbox.png",O="#FAFAFA",K="decoration/pane/pane.png",W="dotted",R="decoration/toolbar/toolbar-part.gif",bf="decoration/tabview/tab-button-top-inactive.png",bc="decoration/menu/bar-background.png",G="center",bi="decoration/tabview/tab-button-bottom-active.png",bh="decoration/form/button-hovered.png",bg="decoration/form/tooltip-error-arrow.png",F="decoration/window/captionbar-inactive.png",I="qx/decoration/Modern",J="decoration/menu/background.png",M="decoration/window/statusbar.png",P="border-focused",S="table-focus-indicator",Y="#F2F2F2",be="decoration/form/button-checked-c.png",v="decoration/scrollbar/scrollbar-bg-horizontal.png",w="qx.theme.modern.Decoration",H="#f4f4f4",V="decoration/shadow/shadow-small.png",U="decoration/app-header.png",T="decoration/tabview/tabview-pane.png",bb="decoration/form/tooltip-error.png",ba="decoration/form/button-focused.png",Q="decoration/tabview/tab-button-bottom-inactive.png",X="decoration/form/button-disabled.png",a="decoration/tabview/tab-button-right-active.png",bd="decoration/form/button-pressed.png",x="no-repeat",y="decoration/window/captionbar-active.png",L="decoration/tabview/tab-button-left-active.png",b="background-splitpane",c="decoration/form/button-checked-focused.png",E="#C5C5C5",z="decoration/toolbar/toolbar-gradient.png",A="decoration/tabview/tab-button-right-inactive.png",D="#b8b8b8",N="decoration/shadow/shadow.png";
qx.Theme.define(w,{aliases:{decoration:I},decorations:{"main":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:k}},"selected":{decorator:qx.ui.decoration.Background,style:{backgroundImage:bj,backgroundRepeat:l}},"selected-dragover":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bj,backgroundRepeat:l,bottom:[2,m,bk]}},"dragover":{decorator:qx.ui.decoration.Single,style:{bottom:[2,m,bk]}},"pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:K,insets:[0,2,3,0]}},"group":{decorator:qx.ui.decoration.Grid,style:{baseImage:C}},"border-invalid":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:j,innerOpacity:0.5,backgroundImage:br,backgroundRepeat:i,backgroundColor:g}},"keyboard-focus":{decorator:qx.ui.decoration.Single,style:{width:1,color:s,style:W}},"separator-horizontal":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:h}},"separator-vertical":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:h}},"tooltip-error":{decorator:qx.ui.decoration.Grid,style:{baseImage:bb,insets:[2,5,5,2]}},"tooltip-error-arrow":{decorator:qx.ui.decoration.Background,style:{backgroundImage:bg,backgroundPositionY:G,backgroundRepeat:x,insets:[0,0,0,10]}},"shadow-window":{decorator:qx.ui.decoration.Grid,style:{baseImage:N,insets:[4,8,8,4]}},"shadow-popup":{decorator:qx.ui.decoration.Grid,style:{baseImage:V,insets:[0,3,3,0]}},"scrollbar-horizontal":{decorator:qx.ui.decoration.Background,style:{backgroundImage:v,backgroundRepeat:i}},"scrollbar-vertical":{decorator:qx.ui.decoration.Background,style:{backgroundImage:q,backgroundRepeat:bm}},"scrollbar-slider-horizontal":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bp,backgroundRepeat:l,outerColor:k,innerColor:j,innerOpacity:0.5}},"scrollbar-slider-horizontal-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bp,backgroundRepeat:l,outerColor:d,innerColor:j,innerOpacity:0.3}},"scrollbar-slider-vertical":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:u,backgroundRepeat:l,outerColor:k,innerColor:j,innerOpacity:0.5}},"scrollbar-slider-vertical-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:u,backgroundRepeat:l,outerColor:d,innerColor:j,innerOpacity:0.3}},"button":{decorator:qx.ui.decoration.Grid,style:{baseImage:n,insets:2}},"button-disabled":{decorator:qx.ui.decoration.Grid,style:{baseImage:X,insets:2}},"button-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:ba,insets:2}},"button-hovered":{decorator:qx.ui.decoration.Grid,style:{baseImage:bh,insets:2}},"button-pressed":{decorator:qx.ui.decoration.Grid,style:{baseImage:bd,insets:2}},"button-checked":{decorator:qx.ui.decoration.Grid,style:{baseImage:o,insets:2}},"button-checked-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:c,insets:2}},"button-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,insets:[1]}},"checkbox-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,insets:[0]}},"input":{decorator:qx.ui.decoration.Beveled,style:{outerColor:t,innerColor:j,innerOpacity:0.5,backgroundImage:br,backgroundRepeat:i,backgroundColor:g}},"input-focused":{decorator:qx.ui.decoration.Beveled,style:{outerColor:t,innerColor:P,backgroundImage:bl,backgroundRepeat:i,backgroundColor:g}},"input-focused-invalid":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,backgroundImage:bl,backgroundRepeat:i,backgroundColor:g,insets:[2]}},"input-disabled":{decorator:qx.ui.decoration.Beveled,style:{outerColor:d,innerColor:j,innerOpacity:0.5,backgroundImage:br,backgroundRepeat:i,backgroundColor:g}},"toolbar":{decorator:qx.ui.decoration.Background,style:{backgroundImage:z,backgroundRepeat:l}},"toolbar-button-hovered":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bo,innerColor:bq,backgroundImage:p,backgroundRepeat:l}},"toolbar-button-checked":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bo,innerColor:bq,backgroundImage:be,backgroundRepeat:l}},"toolbar-separator":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,widthRight:1,colorLeft:D,colorRight:H,styleLeft:m,styleRight:m}},"toolbar-part":{decorator:qx.ui.decoration.Background,style:{backgroundImage:R,backgroundRepeat:bm}},"tabview-pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:T,insets:[4,6,7,4]}},"tabview-page-button-top-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:r}},"tabview-page-button-top-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:bf}},"tabview-page-button-bottom-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:bi}},"tabview-page-button-bottom-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:Q}},"tabview-page-button-left-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:L}},"tabview-page-button-left-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:B}},"tabview-page-button-right-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:a}},"tabview-page-button-right-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:A}},"splitpane":{decorator:qx.ui.decoration.Uniform,style:{backgroundColor:bn,width:3,color:b,style:m}},"window":{decorator:qx.ui.decoration.Single,style:{backgroundColor:bn,width:1,color:k,widthTop:0}},"window-captionbar-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:y}},"window-captionbar-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:F}},"window-statusbar":{decorator:qx.ui.decoration.Grid,style:{baseImage:M}},"table":{decorator:qx.ui.decoration.Single,style:{width:1,color:k,style:m}},"table-statusbar":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:k,style:m}},"table-scroller-header":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bs,backgroundRepeat:l,widthBottom:1,colorBottom:k,style:m}},"table-header-cell":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:h,styleRight:m}},"table-header-cell-hovered":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:h,styleRight:m,widthBottom:1,colorBottom:j,styleBottom:m}},"table-column-button":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bs,backgroundRepeat:l,widthBottom:1,colorBottom:k,style:m}},"table-scroller-focus-indicator":{decorator:qx.ui.decoration.Single,style:{width:2,color:S,style:m}},"progressive-table-header":{decorator:qx.ui.decoration.Single,style:{width:1,color:k,style:m}},"progressive-table-header-cell":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bs,backgroundRepeat:l,widthRight:1,colorRight:Y,style:m}},"menu":{decorator:qx.ui.decoration.Single,style:{backgroundImage:J,backgroundRepeat:l,width:1,color:k,style:m}},"menu-separator":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:E,widthBottom:1,colorBottom:O}},"menubar":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bc,backgroundRepeat:l,width:1,color:h,style:m}},"app-header":{decorator:qx.ui.decoration.Background,style:{backgroundImage:U,backgroundRepeat:l}}}});
})();
(function(){var n="Liberation Sans",m="Arial",l="Lucida Grande",k="sans-serif",j="Tahoma",i="Candara",h="Segoe UI",g="Consolas",f="Courier New",e="Monaco",b="monospace",d="Lucida Console",c="qx.theme.modern.Font",a="DejaVu Sans Mono";
qx.Theme.define(c,{fonts:{"default":{size:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?12:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[l]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[h,i]:[j,n,m,k]},"bold":{size:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?12:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[l]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[h,i]:[j,n,m,k],bold:true},"small":{size:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?11:10,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[l]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[h,i]:[j,n,m,k]},"monospace":{size:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[d,e]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[g]:[g,a,f,b]}}});
})();
(function(){var ej="button-frame",ei="atom",eh="widget",eg="main",ef="button",ee="text-selected",ed="image",ec="bold",eb="middle",ea="background-light",cM="text-disabled",cL="groupbox",cK="decoration/arrows/down.png",cJ="cell",cI="selected",cH="border-invalid",cG="input",cF="input-disabled",cE="menu-button",cD="input-focused-invalid",eq="toolbar-button",er="spinner",eo="input-focused",ep="popup",em="tooltip",en="label",ek="list",el="white",es="tree-item",et="treevirtual-contract",dI="scrollbar",dH="datechooser/nav-button",dK="text-hovered",dJ="center",dM="treevirtual-expand",dL="textfield",dO="decoration/arrows/right.png",dN="background-application",dG="radiobutton",dF="invalid",J="combobox",K="right-top",L="checkbox",M="text-title",N="qx/static/blank.gif",O="scrollbar/button",P="right",Q="combobox/button",R="icon/16/places/folder.png",S="text-label",eH="decoration/tree/closed.png",eG="scrollbar-slider-horizontal",eF="decoration/arrows/left.png",eE="button-focused",eL="text-light",eK="menu-slidebar-button",eJ="text-input",eI="slidebar/button-forward",eN="background-splitpane",eM=".png",bL="decoration/tree/open.png",bM="default",bJ="decoration/arrows/down-small.png",bK="datechooser",bP="slidebar/button-backward",bQ="selectbox",bN="treevirtual-folder",bO="shadow-popup",bH="icon/16/mimetypes/office-document.png",bI="background-medium",bn="table",bm="decoration/arrows/up.png",bp="decoration/form/",bo="",bj="-invalid",bi="icon/16/places/folder-open.png",bl="button-checked",bk="decoration/window/maximize-active-hovered.png",bh="radiobutton-hovered",bg="keyboard-focus",bW="decoration/cursors/",bX="slidebar",bY="tooltip-error-arrow",ca="table-scroller-focus-indicator",bS="move-frame",bT="nodrop",bU="decoration/table/boolean-true.png",bV="table-header-cell",cb="menu",cc="app-header",bA="row-layer",bz="text-inactive",by="move",bx="radiobutton-checked-focused",bw="decoration/window/restore-active-hovered.png",bv="shadow-window",bu="table-column-button",bt="right.png",bE="tabview-page-button-bottom-inactive",bD="tooltip-error",cd="window-statusbar",ce="button-hovered",cf="decoration/scrollbar/scrollbar-",cg="background-tip",ch="scrollbar-slider-horizontal-disabled",ci="table-scroller-header",cj="button-pressed",ck="table-pane",cl="decoration/window/close-active.png",cm="native",cU="checkbox-hovered",cT="button-invalid-shadow",cS="checkbox-checked",cR="decoration/window/minimize-active-hovered.png",cY="menubar",cX="icon/16/actions/dialog-cancel.png",cW="tabview-page-button-top-inactive",cV="tabview-page-button-left-inactive",dd="menu-slidebar",dc="toolbar-button-checked",dB="decoration/tree/open-selected.png",dC="radiobutton-checked",dz="decoration/window/minimize-inactive.png",dA="icon/16/apps/office-calendar.png",dx="group",dy="tabview-page-button-right-inactive",dv="decoration/window/minimize-active.png",dw="decoration/window/restore-inactive.png",dD="checkbox-checked-focused",dE="splitpane",dS="combobox/textfield",dR="button-preselected-focused",dU="decoration/window/close-active-hovered.png",dT="qx/icon/Tango/16/actions/window-close.png",dW="checkbox-pressed",dV="button-disabled",dY="selected-dragover",dX="border-separator",dQ="decoration/window/maximize-inactive.png",dP="dragover",eA="scrollarea",eB="scrollbar-vertical",eC="decoration/menu/checkbox-invert.gif",eD="decoration/toolbar/toolbar-handle-knob.gif",ew="icon/22/mimetypes/office-document.png",ex="button-preselected",ey="button-checked-focused",ez="up.png",eu="best-fit",ev="decoration/tree/closed-selected.png",I="qx.theme.modern.Appearance",H="text-active",G="toolbar-button-hovered",F="progressive-table-header",E="decoration/table/select-column-order.png",D="decoration/menu/radiobutton.gif",C="decoration/arrows/forward.png",B="decoration/table/descending.png",A="window-captionbar-active",z="checkbox-checked-hovered",V="scrollbar-slider-vertical",W="toolbar",T="alias",U="decoration/window/restore-active.png",ba="decoration/table/boolean-false.png",bb="checkbox-checked-disabled",X="icon/32/mimetypes/office-document.png",Y="radiobutton-checked-disabled",bd="tabview-pane",be="decoration/arrows/rewind.png",dh="checkbox-focused",db="top",dp="icon/16/actions/dialog-ok.png",dk="radiobutton-checked-hovered",cP="table-header-cell-hovered",cN="window",br="text-gray",cQ="decoration/menu/radiobutton-invert.gif",bC="text-placeholder",bB="slider",cv="keep-align",cw="down.png",cx="tabview-page-button-top-active",cy="icon/32/places/folder-open.png",cz="icon/22/places/folder.png",cA="decoration/window/maximize-active.png",cB="checkbox-checked-pressed",cC="decoration/window/close-inactive.png",ct="tabview-page-button-left-active",cu="toolbar-part",cO="decoration/splitpane/knob-vertical.png",dn=".gif",dm="icon/22/places/folder-open.png",dl="radiobutton-checked-pressed",dt="table-statusbar",ds="radiobutton-pressed",dr="window-captionbar-inactive",dq="copy",dj="radiobutton-focused",di="decoration/arrows/down-invert.png",bc="decoration/menu/checkbox.gif",bG="decoration/splitpane/knob-horizontal.png",bF="icon/32/places/folder.png",da="toolbar-separator",bR="tabview-page-button-bottom-active",dg="decoration/arrows/up-small.png",df="decoration/table/ascending.png",de="decoration/arrows/up-invert.png",bq="small",du="tabview-page-button-right-active",bf="-disabled",bs="scrollbar-horizontal",cn="progressive-table-header-cell",co="menu-separator",cp="pane",cq="decoration/arrows/right-invert.png",cr="left.png",cs="icon/16/actions/view-refresh.png";
qx.Theme.define(I,{appearances:{"widget":{},"root":{style:function(eV){return {backgroundColor:dN,textColor:S,font:bM};
}},"label":{style:function(fW){return {textColor:fW.disabled?cM:undefined};
}},"move-frame":{style:function(fs){return {decorator:eg};
}},"resize-frame":bS,"dragdrop-cursor":{style:function(t){var u=bT;

if(t.copy){u=dq;
}else if(t.move){u=by;
}else if(t.alias){u=T;
}return {source:bW+u+dn,position:K,offset:[2,16,2,6]};
}},"image":{style:function(hs){return {opacity:!hs.replacement&&hs.disabled?0.3:1};
}},"atom":{},"atom/label":en,"atom/icon":ed,"popup":{style:function(d){return {decorator:eg,backgroundColor:ea,shadow:bO};
}},"button-frame":{alias:ei,style:function(gh){var gj,gi;

if(gh.checked&&gh.focused&&!gh.inner){gj=ey;
gi=undefined;
}else if(gh.disabled){gj=dV;
gi=undefined;
}else if(gh.pressed){gj=cj;
gi=dK;
}else if(gh.checked){gj=bl;
gi=undefined;
}else if(gh.hovered){gj=ce;
gi=dK;
}else if(gh.preselected&&gh.focused&&!gh.inner){gj=dR;
gi=dK;
}else if(gh.preselected){gj=ex;
gi=dK;
}else if(gh.focused&&!gh.inner){gj=eE;
gi=undefined;
}else{gj=ef;
gi=undefined;
}return {decorator:gj,textColor:gi,shadow:gh.invalid&&!gh.disabled?cT:undefined};
}},"button-frame/image":{style:function(fr){return {opacity:!fr.replacement&&fr.disabled?0.5:1};
}},"button":{alias:ej,include:ej,style:function(go){return {padding:[2,8],center:true};
}},"hover-button":{alias:ei,include:ei,style:function(hc){return {decorator:hc.hovered?cI:undefined,textColor:hc.hovered?ee:undefined};
}},"splitbutton":{},"splitbutton/button":ef,"splitbutton/arrow":{alias:ef,include:ef,style:function(fK){return {icon:cK,padding:2,marginLeft:1};
}},"checkbox":{alias:ei,style:function(gG){var gI;

if(gG.checked&&gG.focused){gI=dD;
}else if(gG.checked&&gG.disabled){gI=bb;
}else if(gG.checked&&gG.pressed){gI=cB;
}else if(gG.checked&&gG.hovered){gI=z;
}else if(gG.checked){gI=cS;
}else if(gG.focused){gI=dh;
}else if(gG.pressed){gI=dW;
}else if(gG.hovered){gI=cU;
}else{gI=L;
}var gH=gG.invalid&&!gG.disabled?bj:bo;
return {icon:bp+gI+gH+eM,gap:6};
}},"radiobutton":{alias:ei,style:function(fd){var ff;

if(fd.checked&&fd.focused){ff=bx;
}else if(fd.checked&&fd.disabled){ff=Y;
}else if(fd.checked&&fd.pressed){ff=dl;
}else if(fd.checked&&fd.hovered){ff=dk;
}else if(fd.checked){ff=dC;
}else if(fd.focused){ff=dj;
}else if(fd.pressed){ff=ds;
}else if(fd.hovered){ff=bh;
}else{ff=dG;
}var fe=fd.invalid&&!fd.disabled?bj:bo;
return {icon:bp+ff+fe+eM,gap:6};
}},"textfield":{style:function(eO){var eT;
var eR=!!eO.focused;
var eS=!!eO.invalid;
var eP=!!eO.disabled;

if(eR&&eS&&!eP){eT=cD;
}else if(eR&&!eS&&!eP){eT=eo;
}else if(eP){eT=cF;
}else if(!eR&&eS&&!eP){eT=cH;
}else{eT=cG;
}var eQ;

if(eO.disabled){eQ=cM;
}else if(eO.showingPlaceholder){eQ=bC;
}else{eQ=eJ;
}return {decorator:eT,padding:[2,4,1],textColor:eQ};
}},"textarea":{include:dL,style:function(fB){return {padding:4};
}},"spinner":{style:function(gz){var gD;
var gB=!!gz.focused;
var gC=!!gz.invalid;
var gA=!!gz.disabled;

if(gB&&gC&&!gA){gD=cD;
}else if(gB&&!gC&&!gA){gD=eo;
}else if(gA){gD=cF;
}else if(!gB&&gC&&!gA){gD=cH;
}else{gD=cG;
}return {decorator:gD};
}},"spinner/textfield":{style:function(hS){return {marginRight:2,padding:[2,4,1],textColor:hS.disabled?cM:eJ};
}},"spinner/upbutton":{alias:ej,include:ej,style:function(fu){return {icon:dg,padding:fu.pressed?[2,2,0,4]:[1,3,1,3],shadow:undefined};
}},"spinner/downbutton":{alias:ej,include:ej,style:function(gn){return {icon:bJ,padding:gn.pressed?[2,2,0,4]:[1,3,1,3],shadow:undefined};
}},"datefield":J,"datefield/button":{alias:Q,include:Q,style:function(ha){return {icon:dA,padding:[0,3],decorator:undefined};
}},"datefield/textfield":dS,"datefield/list":{alias:bK,include:bK,style:function(hV){return {decorator:undefined};
}},"groupbox":{style:function(fl){return {legendPosition:db};
}},"groupbox/legend":{alias:ei,style:function(ib){return {padding:[1,0,1,4],textColor:ib.invalid?dF:M,font:ec};
}},"groupbox/frame":{style:function(gT){return {padding:12,decorator:dx};
}},"check-groupbox":cL,"check-groupbox/legend":{alias:L,include:L,style:function(ic){return {padding:[1,0,1,4],textColor:ic.invalid?dF:M,font:ec};
}},"radio-groupbox":cL,"radio-groupbox/legend":{alias:dG,include:dG,style:function(hU){return {padding:[1,0,1,4],textColor:hU.invalid?dF:M,font:ec};
}},"scrollarea":{style:function(fp){return {minWidth:50,minHeight:50};
}},"scrollarea/corner":{style:function(g){return {backgroundColor:dN};
}},"scrollarea/pane":eh,"scrollarea/scrollbar-x":dI,"scrollarea/scrollbar-y":dI,"scrollbar":{style:function(gS){if(gS[cm]){return {};
}return {width:gS.horizontal?undefined:16,height:gS.horizontal?16:undefined,decorator:gS.horizontal?bs:eB,padding:1};
}},"scrollbar/slider":{alias:bB,style:function(w){return {padding:w.horizontal?[0,1,0,1]:[1,0,1,0]};
}},"scrollbar/slider/knob":{include:ej,style:function(k){var l=k.horizontal?eG:V;

if(k.disabled){l+=bf;
}return {decorator:l,minHeight:k.horizontal?undefined:9,minWidth:k.horizontal?9:undefined};
}},"scrollbar/button":{alias:ej,include:ej,style:function(hL){var hM=cf;

if(hL.left){hM+=cr;
}else if(hL.right){hM+=bt;
}else if(hL.up){hM+=ez;
}else{hM+=cw;
}
if(hL.left||hL.right){return {padding:[0,0,0,hL.left?3:4],icon:hM,width:15,height:14};
}else{return {padding:[0,0,0,2],icon:hM,width:14,height:15};
}}},"scrollbar/button-begin":O,"scrollbar/button-end":O,"slider":{style:function(hE){var hI;
var hG=!!hE.focused;
var hH=!!hE.invalid;
var hF=!!hE.disabled;

if(hG&&hH&&!hF){hI=cD;
}else if(hG&&!hH&&!hF){hI=eo;
}else if(hF){hI=cF;
}else if(!hG&&hH&&!hF){hI=cH;
}else{hI=cG;
}return {decorator:hI};
}},"slider/knob":{include:ej,style:function(v){return {decorator:v.disabled?ch:eG,shadow:undefined,height:14,width:14};
}},"list":{alias:eA,style:function(gc){var gg;
var ge=!!gc.focused;
var gf=!!gc.invalid;
var gd=!!gc.disabled;

if(ge&&gf&&!gd){gg=cD;
}else if(ge&&!gf&&!gd){gg=eo;
}else if(gd){gg=cF;
}else if(!ge&&gf&&!gd){gg=cH;
}else{gg=cG;
}return {backgroundColor:ea,decorator:gg};
}},"list/pane":eh,"listitem":{alias:ei,style:function(hq){var hr;

if(hq.dragover){hr=hq.selected?dY:dP;
}else{hr=hq.selected?cI:undefined;
}return {padding:hq.dragover?[4,4,2,4]:4,textColor:hq.selected?ee:undefined,decorator:hr};
}},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:ej,include:ej,style:function(hp){return {padding:5,center:true,icon:hp.vertical?cK:dO};
}},"slidebar/button-backward":{alias:ej,include:ej,style:function(hk){return {padding:5,center:true,icon:hk.vertical?bm:eF};
}},"tabview":{style:function(fo){return {contentPadding:16};
}},"tabview/bar":{alias:bX,style:function(gx){var gy={marginBottom:gx.barTop?-1:0,marginTop:gx.barBottom?-4:0,marginLeft:gx.barRight?-3:0,marginRight:gx.barLeft?-1:0,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0};

if(gx.barTop||gx.barBottom){gy.paddingLeft=5;
gy.paddingRight=7;
}else{gy.paddingTop=5;
gy.paddingBottom=7;
}return gy;
}},"tabview/bar/button-forward":{include:eI,alias:eI,style:function(fA){if(fA.barTop||fA.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/button-backward":{include:bP,alias:bP,style:function(hR){if(hR.barTop||hR.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/scrollpane":{},"tabview/pane":{style:function(fS){return {decorator:bd,minHeight:100,marginBottom:fS.barBottom?-1:0,marginTop:fS.barTop?-1:0,marginLeft:fS.barLeft?-1:0,marginRight:fS.barRight?-1:0};
}},"tabview-page":eh,"tabview-page/button":{alias:ei,style:function(m){var s,o=0;
var r=0,n=0,p=0,q=0;

if(m.checked){if(m.barTop){s=cx;
o=[6,14];
p=m.firstTab?0:-5;
q=m.lastTab?0:-5;
}else if(m.barBottom){s=bR;
o=[6,14];
p=m.firstTab?0:-5;
q=m.lastTab?0:-5;
}else if(m.barRight){s=du;
o=[6,13];
r=m.firstTab?0:-5;
n=m.lastTab?0:-5;
}else{s=ct;
o=[6,13];
r=m.firstTab?0:-5;
n=m.lastTab?0:-5;
}}else{if(m.barTop){s=cW;
o=[4,10];
r=4;
p=m.firstTab?5:1;
q=1;
}else if(m.barBottom){s=bE;
o=[4,10];
n=4;
p=m.firstTab?5:1;
q=1;
}else if(m.barRight){s=dy;
o=[4,10];
q=5;
r=m.firstTab?5:1;
n=1;
p=1;
}else{s=cV;
o=[4,10];
p=5;
r=m.firstTab?5:1;
n=1;
q=1;
}}return {zIndex:m.checked?10:5,decorator:s,padding:o,marginTop:r,marginBottom:n,marginLeft:p,marginRight:q,textColor:m.checked?H:bz};
}},"tabview-page/button/label":{alias:en,style:function(gV){return {padding:[0,1,0,1],margin:gV.focused?0:1,decorator:gV.focused?bg:undefined};
}},"tabview-page/button/close-button":{alias:ei,style:function(hK){return {icon:dT};
}},"toolbar":{style:function(gk){return {decorator:W,spacing:2};
}},"toolbar/part":{style:function(gt){return {decorator:cu,spacing:2};
}},"toolbar/part/container":{style:function(fU){return {paddingLeft:2,paddingRight:2};
}},"toolbar/part/handle":{style:function(fa){return {source:eD,marginLeft:3,marginRight:3};
}},"toolbar-button":{alias:ei,style:function(fg){return {marginTop:2,marginBottom:2,padding:(fg.pressed||fg.checked||fg.hovered)&&!fg.disabled||(fg.disabled&&fg.checked)?3:5,decorator:fg.pressed||(fg.checked&&!fg.hovered)||(fg.checked&&fg.disabled)?dc:fg.hovered&&!fg.disabled?G:undefined};
}},"toolbar-menubutton":{alias:eq,include:eq,style:function(e){return {showArrow:true};
}},"toolbar-menubutton/arrow":{alias:ed,include:ed,style:function(fn){return {source:bJ};
}},"toolbar-splitbutton":{style:function(ia){return {marginTop:2,marginBottom:2};
}},"toolbar-splitbutton/button":{alias:eq,include:eq,style:function(hW){return {icon:cK,marginTop:undefined,marginBottom:undefined};
}},"toolbar-splitbutton/arrow":{alias:eq,include:eq,style:function(fP){return {padding:fP.pressed||fP.checked?1:fP.hovered?1:3,icon:cK,marginTop:undefined,marginBottom:undefined};
}},"toolbar-separator":{style:function(hA){return {decorator:da,margin:7};
}},"tree":ek,"tree-item":{style:function(eU){return {padding:[2,6],textColor:eU.selected?ee:undefined,decorator:eU.selected?cI:undefined};
}},"tree-item/icon":{include:ed,style:function(hj){return {paddingRight:5};
}},"tree-item/label":en,"tree-item/open":{include:ed,style:function(fb){var fc;

if(fb.selected&&fb.opened){fc=dB;
}else if(fb.selected&&!fb.opened){fc=ev;
}else if(fb.opened){fc=bL;
}else{fc=eH;
}return {padding:[0,5,0,2],source:fc};
}},"tree-folder":{include:es,alias:es,style:function(gQ){var gR;

if(gQ.small){gR=gQ.opened?bi:R;
}else if(gQ.large){gR=gQ.opened?cy:bF;
}else{gR=gQ.opened?dm:cz;
}return {icon:gR};
}},"tree-file":{include:es,alias:es,style:function(ga){return {icon:ga.small?bH:ga.large?X:ew};
}},"treevirtual":bn,"treevirtual-folder":{style:function(hQ){return {icon:hQ.opened?bi:R};
}},"treevirtual-file":{include:bN,alias:bN,style:function(fR){return {icon:bH};
}},"treevirtual-line":{style:function(c){return {icon:N};
}},"treevirtual-contract":{style:function(hu){return {icon:bL,paddingLeft:5,paddingTop:2};
}},"treevirtual-expand":{style:function(hl){return {icon:eH,paddingLeft:5,paddingTop:2};
}},"treevirtual-only-contract":et,"treevirtual-only-expand":dM,"treevirtual-start-contract":et,"treevirtual-start-expand":dM,"treevirtual-end-contract":et,"treevirtual-end-expand":dM,"treevirtual-cross-contract":et,"treevirtual-cross-expand":dM,"treevirtual-end":{style:function(gv){return {icon:N};
}},"treevirtual-cross":{style:function(ht){return {icon:N};
}},"tooltip":{include:ep,style:function(x){return {backgroundColor:cg,padding:[1,3,2,3],offset:[15,5,5,5]};
}},"tooltip/atom":ei,"tooltip-error":{include:em,style:function(hT){return {textColor:ee,placeMethod:eh,offset:[0,0,0,14],marginTop:-2,position:K,showTimeout:100,hideTimeout:10000,decorator:bD,shadow:bY,font:ec};
}},"tooltip-error/atom":ei,"window":{style:function(hz){return {shadow:bv,contentPadding:[10,10,10,10]};
}},"window/pane":{style:function(he){return {decorator:cN};
}},"window/captionbar":{style:function(gX){return {decorator:gX.active?A:dr,textColor:gX.active?el:br,minHeight:26,paddingRight:2};
}},"window/icon":{style:function(fO){return {margin:[5,0,3,6]};
}},"window/title":{style:function(hN){return {alignY:eb,font:ec,marginLeft:6,marginRight:12};
}},"window/minimize-button":{alias:ei,style:function(hP){return {icon:hP.active?hP.hovered?cR:dv:dz,margin:[4,8,2,0]};
}},"window/restore-button":{alias:ei,style:function(hX){return {icon:hX.active?hX.hovered?bw:U:dw,margin:[5,8,2,0]};
}},"window/maximize-button":{alias:ei,style:function(gp){return {icon:gp.active?gp.hovered?bk:cA:dQ,margin:[4,8,2,0]};
}},"window/close-button":{alias:ei,style:function(fk){return {icon:fk.active?fk.hovered?dU:cl:cC,margin:[4,8,2,0]};
}},"window/statusbar":{style:function(gW){return {padding:[2,6],decorator:cd,minHeight:18};
}},"window/statusbar-text":{style:function(f){return {font:bq};
}},"iframe":{style:function(fv){return {decorator:eg};
}},"resizer":{style:function(hw){return {decorator:cp};
}},"splitpane":{style:function(hf){return {decorator:dE};
}},"splitpane/splitter":{style:function(hJ){return {width:hJ.horizontal?3:undefined,height:hJ.vertical?3:undefined,backgroundColor:eN};
}},"splitpane/splitter/knob":{style:function(gE){return {source:gE.horizontal?bG:cO};
}},"splitpane/slider":{style:function(fN){return {width:fN.horizontal?3:undefined,height:fN.vertical?3:undefined,backgroundColor:eN};
}},"selectbox":{alias:ej,include:ej,style:function(fL){return {padding:[2,8]};
}},"selectbox/atom":ei,"selectbox/popup":ep,"selectbox/list":{alias:ek},"selectbox/arrow":{include:ed,style:function(fh){return {source:cK,paddingLeft:5};
}},"datechooser":{style:function(fF){var fJ;
var fH=!!fF.focused;
var fI=!!fF.invalid;
var fG=!!fF.disabled;

if(fH&&fI&&!fG){fJ=cD;
}else if(fH&&!fI&&!fG){fJ=eo;
}else if(fG){fJ=cF;
}else if(!fH&&fI&&!fG){fJ=cH;
}else{fJ=cG;
}return {padding:2,decorator:fJ,backgroundColor:ea};
}},"datechooser/navigation-bar":{},"datechooser/nav-button":{include:ej,alias:ej,style:function(fX){var fY={padding:[2,4],shadow:undefined};

if(fX.lastYear){fY.icon=be;
fY.marginRight=1;
}else if(fX.lastMonth){fY.icon=eF;
}else if(fX.nextYear){fY.icon=C;
fY.marginLeft=1;
}else if(fX.nextMonth){fY.icon=dO;
}return fY;
}},"datechooser/last-year-button-tooltip":em,"datechooser/last-month-button-tooltip":em,"datechooser/next-year-button-tooltip":em,"datechooser/next-month-button-tooltip":em,"datechooser/last-year-button":dH,"datechooser/last-month-button":dH,"datechooser/next-month-button":dH,"datechooser/next-year-button":dH,"datechooser/month-year-label":{style:function(fx){return {font:ec,textAlign:dJ,textColor:fx.disabled?cM:undefined};
}},"datechooser/date-pane":{style:function(hy){return {textColor:hy.disabled?cM:undefined,marginTop:2};
}},"datechooser/weekday":{style:function(fj){return {textColor:fj.disabled?cM:fj.weekend?eL:undefined,textAlign:dJ,paddingTop:2,backgroundColor:bI};
}},"datechooser/week":{style:function(hO){return {textAlign:dJ,padding:[2,4],backgroundColor:bI};
}},"datechooser/day":{style:function(fi){return {textAlign:dJ,decorator:fi.disabled?undefined:fi.selected?cI:undefined,textColor:fi.disabled?cM:fi.selected?ee:fi.otherMonth?eL:undefined,font:fi.today?ec:undefined,padding:[2,4]};
}},"combobox":{style:function(gJ){var gN;
var gL=!!gJ.focused;
var gM=!!gJ.invalid;
var gK=!!gJ.disabled;

if(gL&&gM&&!gK){gN=cD;
}else if(gL&&!gM&&!gK){gN=eo;
}else if(gK){gN=cF;
}else if(!gL&&gM&&!gK){gN=cH;
}else{gN=cG;
}return {decorator:gN};
}},"combobox/popup":ep,"combobox/list":{alias:ek},"combobox/button":{include:ej,alias:ej,style:function(i){var j={icon:cK,padding:2};

if(i.selected){j.decorator=eE;
}return j;
}},"combobox/textfield":{include:dL,style:function(hx){return {decorator:undefined};
}},"menu":{style:function(fy){var fz={decorator:cb,shadow:bO,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4,placementModeY:fy.submenu||fy.contextmenu?eu:cv};

if(fy.submenu){fz.position=K;
fz.offset=[-2,-3];
}return fz;
}},"menu/slidebar":dd,"menu-slidebar":eh,"menu-slidebar-button":{style:function(gY){return {decorator:gY.hovered?cI:undefined,padding:7,center:true};
}},"menu-slidebar/button-backward":{include:eK,style:function(hY){return {icon:hY.hovered?de:bm};
}},"menu-slidebar/button-forward":{include:eK,style:function(hg){return {icon:hg.hovered?di:cK};
}},"menu-separator":{style:function(hi){return {height:0,decorator:co,margin:[4,2]};
}},"menu-button":{alias:ei,style:function(gO){return {decorator:gO.selected?cI:undefined,textColor:gO.selected?ee:undefined,padding:[4,6]};
}},"menu-button/icon":{include:ed,style:function(fD){return {alignY:eb};
}},"menu-button/label":{include:en,style:function(hC){return {alignY:eb,padding:1};
}},"menu-button/shortcut":{include:en,style:function(gF){return {alignY:eb,marginLeft:14,padding:1};
}},"menu-button/arrow":{include:ed,style:function(ho){return {source:ho.selected?cq:dO,alignY:eb};
}},"menu-checkbox":{alias:cE,include:cE,style:function(gm){return {icon:!gm.checked?undefined:gm.selected?eC:bc};
}},"menu-radiobutton":{alias:cE,include:cE,style:function(a){return {icon:!a.checked?undefined:a.selected?cQ:D};
}},"menubar":{style:function(hd){return {decorator:cY};
}},"menubar-button":{alias:ei,style:function(h){return {decorator:h.pressed||h.hovered?cI:undefined,textColor:h.pressed||h.hovered?ee:undefined,padding:[3,8]};
}},"colorselector":eh,"colorselector/control-bar":eh,"colorselector/control-pane":eh,"colorselector/visual-pane":cL,"colorselector/preset-grid":eh,"colorselector/colorbucket":{style:function(fV){return {decorator:eg,width:16,height:16};
}},"colorselector/preset-field-set":cL,"colorselector/input-field-set":cL,"colorselector/preview-field-set":cL,"colorselector/hex-field-composite":eh,"colorselector/hex-field":dL,"colorselector/rgb-spinner-composite":eh,"colorselector/rgb-spinner-red":er,"colorselector/rgb-spinner-green":er,"colorselector/rgb-spinner-blue":er,"colorselector/hsb-spinner-composite":eh,"colorselector/hsb-spinner-hue":er,"colorselector/hsb-spinner-saturation":er,"colorselector/hsb-spinner-brightness":er,"colorselector/preview-content-old":{style:function(gq){return {decorator:eg,width:50,height:10};
}},"colorselector/preview-content-new":{style:function(fm){return {decorator:eg,backgroundColor:ea,width:50,height:10};
}},"colorselector/hue-saturation-field":{style:function(eX){return {decorator:eg,margin:5};
}},"colorselector/brightness-field":{style:function(y){return {decorator:eg,margin:[5,7]};
}},"colorselector/hue-saturation-pane":eh,"colorselector/hue-saturation-handle":eh,"colorselector/brightness-pane":eh,"colorselector/brightness-handle":eh,"colorpopup":{alias:ep,include:ep,style:function(hm){return {padding:5,backgroundColor:dN};
}},"colorpopup/field":{style:function(gP){return {decorator:eg,margin:2,width:14,height:14,backgroundColor:ea};
}},"colorpopup/selector-button":ef,"colorpopup/auto-button":ef,"colorpopup/preview-pane":cL,"colorpopup/current-preview":{style:function(gw){return {height:20,padding:4,marginLeft:4,decorator:eg,allowGrowX:true};
}},"colorpopup/selected-preview":{style:function(b){return {height:20,padding:4,marginRight:4,decorator:eg,allowGrowX:true};
}},"colorpopup/colorselector-okbutton":{alias:ef,include:ef,style:function(fq){return {icon:dp};
}},"colorpopup/colorselector-cancelbutton":{alias:ef,include:ef,style:function(gl){return {icon:cX};
}},"table":{alias:eh,style:function(hv){return {decorator:bn};
}},"table-header":{},"table/statusbar":{style:function(fw){return {decorator:dt,padding:[0,2]};
}},"table/column-button":{alias:ej,style:function(hh){return {decorator:bu,padding:3,icon:E};
}},"table-column-reset-button":{include:cE,alias:cE,style:function(){return {icon:cs};
}},"table-scroller":eh,"table-scroller/scrollbar-x":dI,"table-scroller/scrollbar-y":dI,"table-scroller/header":{style:function(fQ){return {decorator:ci};
}},"table-scroller/pane":{style:function(fT){return {backgroundColor:ck};
}},"table-scroller/focus-indicator":{style:function(fC){return {decorator:ca};
}},"table-scroller/resize-line":{style:function(hD){return {backgroundColor:dX,width:2};
}},"table-header-cell":{alias:ei,style:function(eW){return {minWidth:13,minHeight:20,padding:eW.hovered?[3,4,2,4]:[3,4],decorator:eW.hovered?cP:bV,sortIcon:eW.sorted?(eW.sortedAscending?df:B):undefined};
}},"table-header-cell/label":{style:function(id){return {minWidth:0,alignY:eb,paddingRight:5};
}},"table-header-cell/sort-icon":{style:function(gr){return {alignY:eb,alignX:P};
}},"table-header-cell/icon":{style:function(gb){return {minWidth:0,alignY:eb,paddingRight:5};
}},"table-editor-textfield":{include:dL,style:function(fM){return {decorator:undefined,padding:[2,2],backgroundColor:ea};
}},"table-editor-selectbox":{include:bQ,alias:bQ,style:function(gs){return {padding:[0,2],backgroundColor:ea};
}},"table-editor-combobox":{include:J,alias:J,style:function(hn){return {decorator:undefined,backgroundColor:ea};
}},"progressive-table-header":{alias:eh,style:function(fE){return {decorator:F};
}},"progressive-table-header-cell":{alias:ei,style:function(gU){return {minWidth:40,minHeight:25,paddingLeft:6,decorator:cn};
}},"app-header":{style:function(hB){return {font:ec,textColor:ee,padding:[8,12],decorator:cc};
}},"virtual-list":ek,"virtual-list/row-layer":bA,"row-layer":{style:function(eY){return {colorEven:el,colorOdd:el};
}},"column-layer":eh,"cell":{style:function(gu){return {textColor:gu.selected?ee:S,padding:[3,6],font:bM};
}},"cell-string":cJ,"cell-number":{include:cJ,style:function(ie){return {textAlign:P};
}},"cell-image":cJ,"cell-boolean":{include:cJ,style:function(hb){return {iconTrue:bU,iconFalse:ba};
}},"cell-atom":cJ,"cell-date":cJ,"cell-html":cJ,"htmlarea":{"include":eh,style:function(ft){return {backgroundColor:el};
}}}});
})();
(function(){var c="Tango",b="qx/icon/Tango",a="qx.theme.icon.Tango";
qx.Theme.define(a,{title:c,aliases:{"icon":b},icons:{}});
})();
(function(){var b="qx.theme.Modern",a="Modern";
qx.Theme.define(b,{title:a,meta:{color:qx.theme.modern.Color,decoration:qx.theme.modern.Decoration,font:qx.theme.modern.Font,appearance:qx.theme.modern.Appearance,icon:qx.theme.icon.Tango}});
})();
(function(){var c="qx.util.ValueManager",b="abstract";
qx.Class.define(c,{type:b,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this._dynamic={};
},members:{_dynamic:null,resolveDynamic:function(e){return this._dynamic[e];
},isDynamic:function(a){return !!this._dynamic[a];
},resolve:function(d){if(d&&this._dynamic[d]){return this._dynamic[d];
}return d;
},_setDynamic:function(f){this._dynamic=f;
},_getDynamic:function(){return this._dynamic;
}},destruct:function(){this._dynamic=null;
}});
})();
(function(){var j="/",i="0",h="qx/static",g="http://",f="https://",e="file://",d="qx.util.AliasManager",c="singleton",b=".",a="static";
qx.Class.define(d,{type:c,extend:qx.util.ValueManager,construct:function(){qx.util.ValueManager.call(this);
this.__gX={};
this.add(a,h);
},members:{__gX:null,_preprocess:function(q){var t=this._getDynamic();

if(t[q]===false){return q;
}else if(t[q]===undefined){if(q.charAt(0)===j||q.charAt(0)===b||q.indexOf(g)===0||q.indexOf(f)===i||q.indexOf(e)===0){t[q]=false;
return q;
}
if(this.__gX[q]){return this.__gX[q];
}var s=q.substring(0,q.indexOf(j));
var r=this.__gX[s];

if(r!==undefined){t[q]=r+q.substring(s.length);
}}return q;
},add:function(m,n){this.__gX[m]=n;
var p=this._getDynamic();
for(var o in p){if(o.substring(0,o.indexOf(j))===m){p[o]=n+o.substring(m.length);
}}},remove:function(u){delete this.__gX[u];
},resolve:function(k){var l=this._getDynamic();

if(k!=null){k=this._preprocess(k);
}return l[k]||k;
}},destruct:function(){this.__gX=null;
}});
})();
(function(){var n="px",m="qx.client",l="div",k="img",j="",i="no-repeat",h="scale-x",g="mshtml",f="scale",d="scale-y",J="qx/icon",I="repeat",H=".png",G="crop",F="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",E='<div style="',D="repeat-y",C='<img src="',B="qx.bom.element.Decoration",A="', sizingMethod='",u="png",v="')",s='"></div>',t='"/>',q='" style="',r="none",o="webkit",p=" ",w="repeat-x",x="DXImageTransform.Microsoft.AlphaImageLoader",z="qx/static/blank.gif",y="absolute";
qx.Class.define(B,{statics:{DEBUG:false,__hr:{},__hs:qx.core.Variant.isSet(m,g),__ht:qx.core.Variant.select(m,{"mshtml":{"scale-x":true,"scale-y":true,"scale":true,"no-repeat":true},"default":null}),__hu:{"scale-x":k,"scale-y":k,"scale":k,"repeat":l,"no-repeat":l,"repeat-x":l,"repeat-y":l},update:function(bK,bL,bM,bN){var bP=this.getTagName(bM,bL);

if(bP!=bK.tagName.toLowerCase()){throw new Error("Image modification not possible because elements could not be replaced at runtime anymore!");
}var bQ=this.getAttributes(bL,bM,bN);

if(bP===k){bK.src=bQ.src||qx.util.ResourceManager.getInstance().toUri(z);
}if(bK.style.backgroundPosition!=j&&bQ.style.backgroundPosition===undefined){bQ.style.backgroundPosition=null;
}if(bK.style.clip!=j&&bQ.style.clip===undefined){bQ.style.clip=null;
}var bO=qx.bom.element.Style;
bO.setStyles(bK,bQ.style);
if(this.__hs){try{bK.filters[x].apply();
}catch(e){}}},create:function(bw,bx,by){var bz=this.getTagName(bx,bw);
var bB=this.getAttributes(bw,bx,by);
var bA=qx.bom.element.Style.compile(bB.style);

if(bz===k){return C+bB.src+q+bA+t;
}else{return E+bA+s;
}},getTagName:function(bj,bk){if(qx.core.Variant.isSet(m,g)){if(bk&&this.__hs&&this.__ht[bj]&&qx.lang.String.endsWith(bk,H)){return l;
}}return this.__hu[bj];
},getAttributes:function(bV,bW,bX){if(!bX){bX={};
}
if(!bX.position){bX.position=y;
}
if(qx.core.Variant.isSet(m,g)){bX.fontSize=0;
bX.lineHeight=0;
}else if(qx.core.Variant.isSet(m,o)){bX.WebkitUserDrag=r;
}var ca=qx.util.ResourceManager.getInstance().getImageFormat(bV)||qx.io.ImageLoader.getFormat(bV);
{};
var bY;
if(this.__hs&&this.__ht[bW]&&ca===u){bY=this.__hx(bX,bW,bV);
}else{if(bW===f){bY=this.__hy(bX,bW,bV);
}else if(bW===h||bW===d){bY=this.__hz(bX,bW,bV);
}else{bY=this.__hC(bX,bW,bV);
}}return bY;
},__hv:function(a,b,c){if(a.width==null&&b!=null){a.width=b+n;
}
if(a.height==null&&c!=null){a.height=c+n;
}return a;
},__hw:function(bC){var bD=qx.util.ResourceManager.getInstance().getImageWidth(bC)||qx.io.ImageLoader.getWidth(bC);
var bE=qx.util.ResourceManager.getInstance().getImageHeight(bC)||qx.io.ImageLoader.getHeight(bC);
return {width:bD,height:bE};
},__hx:function(bp,bq,br){var bu=this.__hw(br);
bp=this.__hv(bp,bu.width,bu.height);
var bt=bq==i?G:f;
var bs=F+qx.util.ResourceManager.getInstance().toUri(br)+A+bt+v;
bp.filter=bs;
bp.backgroundImage=bp.backgroundRepeat=j;
return {style:bp};
},__hy:function(bF,bG,bH){var bI=qx.util.ResourceManager.getInstance().toUri(bH);
var bJ=this.__hw(bH);
bF=this.__hv(bF,bJ.width,bJ.height);
return {src:bI,style:bF};
},__hz:function(ba,bb,bc){var bh=qx.util.ResourceManager.getInstance();
var bf=bh.isClippedImage(bc);
var bi=this.__hw(bc);

if(bf){var be=bh.getData(bc);
var bd=bh.toUri(be[4]);

if(bb===h){ba=this.__hA(ba,be,bi.height);
}else{ba=this.__hB(ba,be,bi.width);
}return {src:bd,style:ba};
}else{{};

if(bb==h){ba.height=bi.height==null?null:bi.height+n;
}else if(bb==d){ba.width=bi.width==null?null:bi.width+n;
}var bd=bh.toUri(bc);
return {src:bd,style:ba};
}},__hA:function(bR,bS,bT){var bU=qx.util.ResourceManager.getInstance().getImageHeight(bS[4]);
bR.clip={top:-bS[6],height:bT};
bR.height=bU+n;
if(bR.top!=null){bR.top=(parseInt(bR.top,10)+bS[6])+n;
}else if(bR.bottom!=null){bR.bottom=(parseInt(bR.bottom,10)+bT-bU-bS[6])+n;
}return bR;
},__hB:function(bl,bm,bn){var bo=qx.util.ResourceManager.getInstance().getImageWidth(bm[4]);
bl.clip={left:-bm[5],width:bn};
bl.width=bo+n;
if(bl.left!=null){bl.left=(parseInt(bl.left,10)+bm[5])+n;
}else if(bl.right!=null){bl.right=(parseInt(bl.right,10)+bn-bo-bm[5])+n;
}return bl;
},__hC:function(R,S,T){var Y=qx.util.ResourceManager.getInstance().isClippedImage(T);
var X=this.__hw(T);
if(Y&&S!==I){var W=qx.util.ResourceManager.getInstance().getData(T);
var V=qx.bom.element.Background.getStyles(W[4],S,W[5],W[6]);

for(var U in V){R[U]=V[U];
}
if(X.width!=null&&R.width==null&&(S==D||S===i)){R.width=X.width+n;
}
if(X.height!=null&&R.height==null&&(S==w||S===i)){R.height=X.height+n;
}return {style:R};
}else{{};
R=this.__hv(R,X.width,X.height);
R=this.__hD(R,T,S);
return {style:R};
}},__hD:function(K,L,M){var top=null;
var Q=null;

if(K.backgroundPosition){var N=K.backgroundPosition.split(p);
Q=parseInt(N[0]);

if(isNaN(Q)){Q=N[0];
}top=parseInt(N[1]);

if(isNaN(top)){top=N[1];
}}var P=qx.bom.element.Background.getStyles(L,M,Q,top);

for(var O in P){K[O]=P[O];
}if(K.filter){K.filter=j;
}return K;
},__hE:function(bv){if(this.DEBUG&&qx.util.ResourceManager.getInstance().has(bv)&&bv.indexOf(J)==-1){if(!this.__hr[bv]){qx.log.Logger.debug("Potential clipped image candidate: "+bv);
this.__hr[bv]=true;
}}},isAlphaImageLoaderEnabled:qx.core.Variant.select(m,{"mshtml":function(){return qx.bom.element.Decoration.__hs;
},"default":function(){return false;
}})}});
})();
(function(){var l="/",k="mshtml",j="",i="qx.client",h="?",g="string",f="qx.util.ResourceManager",e="singleton";
qx.Class.define(f,{extend:qx.core.Object,type:e,statics:{__he:qx.$$resources||{},__hf:{}},members:{has:function(q){return !!this.self(arguments).__he[q];
},getData:function(t){return this.self(arguments).__he[t]||null;
},getImageWidth:function(o){var p=this.self(arguments).__he[o];
return p?p[0]:null;
},getImageHeight:function(u){var v=this.self(arguments).__he[u];
return v?v[1]:null;
},getImageFormat:function(m){var n=this.self(arguments).__he[m];
return n?n[2]:null;
},isClippedImage:function(r){var s=this.self(arguments).__he[r];
return s&&s.length>4;
},toUri:function(a){if(a==null){return a;
}var b=this.self(arguments).__he[a];

if(!b){return a;
}
if(typeof b===g){var d=b;
}else{var d=b[3];
if(!d){return a;
}}var c=j;

if(qx.core.Variant.isSet(i,k)&&qx.bom.client.Feature.SSL){c=this.self(arguments).__hf[d];
}return c+qx.$$libraries[d].resourceUri+l+a;
}},defer:function(w){if(qx.core.Variant.isSet(i,k)){if(qx.bom.client.Feature.SSL){for(var A in qx.$$libraries){var y;

if(qx.$$libraries[A].resourceUri){y=qx.$$libraries[A].resourceUri;
}else{w.__hf[A]=j;
continue;
}if(y.match(/^\/\//)!=null){w.__hf[A]=window.location.protocol;
}else if(y.match(/^\.\//)!=null){var x=document.URL;
w.__hf[A]=x.substring(0,x.lastIndexOf(l)+1);
}else if(y.match(/^http/)!=null){}else{var B=window.location.href.indexOf(h);
var z;

if(B==-1){z=window.location.href;
}else{z=window.location.href.substring(0,B);
}w.__hf[A]=z.substring(0,z.lastIndexOf(l)+1);
}}}}}});
})();
(function(){var c="qx.client",b="load",a="qx.io.ImageLoader";
qx.Bootstrap.define(a,{statics:{__hF:{},__hG:{width:null,height:null},__hH:/\.(png|gif|jpg|jpeg|bmp)\b/i,isLoaded:function(u){var v=this.__hF[u];
return !!(v&&v.loaded);
},isFailed:function(d){var e=this.__hF[d];
return !!(e&&e.failed);
},isLoading:function(m){var n=this.__hF[m];
return !!(n&&n.loading);
},getFormat:function(y){var z=this.__hF[y];
return z?z.format:null;
},getSize:function(w){var x=this.__hF[w];
return x?
{width:x.width,height:x.height}:this.__hG;
},getWidth:function(F){var G=this.__hF[F];
return G?G.width:null;
},getHeight:function(C){var D=this.__hF[C];
return D?D.height:null;
},load:function(o,p,q){var r=this.__hF[o];

if(!r){r=this.__hF[o]={};
}if(p&&!q){q=window;
}if(r.loaded||r.loading||r.failed){if(p){if(r.loading){r.callbacks.push(p,q);
}else{p.call(q,o,r);
}}}else{r.loading=true;
r.callbacks=[];

if(p){r.callbacks.push(p,q);
}var t=new Image();
var s=qx.lang.Function.listener(this.__hI,this,t,o);
t.onload=s;
t.onerror=s;
t.src=o;
}},__hI:qx.event.GlobalError.observeMethod(function(event,f,g){var h=this.__hF[g];
if(event.type===b){h.loaded=true;
h.width=this.__hJ(f);
h.height=this.__hK(f);
var j=this.__hH.exec(g);

if(j!=null){h.format=j[1];
}}else{h.failed=true;
}f.onload=f.onerror=null;
var k=h.callbacks;
delete h.loading;
delete h.callbacks;
for(var i=0,l=k.length;i<l;i+=2){k[i].call(k[i+1],g,h);
}}),__hJ:qx.core.Variant.select(c,{"gecko":function(E){return E.naturalWidth;
},"default":function(H){return H.width;
}}),__hK:qx.core.Variant.select(c,{"gecko":function(A){return A.naturalHeight;
},"default":function(B){return B.height;
}})}});
})();
(function(){var m="number",l="0",k="px",j=";",i="background-image:url(",h=");",g="",f=")",e="background-repeat:",d=" ",a="qx.bom.element.Background",c="url(",b="background-position:";
qx.Class.define(a,{statics:{__hL:[i,null,h,b,null,j,e,null,j],__hM:{backgroundImage:null,backgroundPosition:null,backgroundRepeat:null},__hN:function(t,top){var u=qx.bom.client.Engine;

if(u.GECKO&&u.VERSION<1.9&&t==top&&typeof t==m){top+=0.01;
}
if(t){var v=(typeof t==m)?t+k:t;
}else{v=l;
}
if(top){var w=(typeof top==m)?top+k:top;
}else{w=l;
}return v+d+w;
},compile:function(x,y,z,top){var A=this.__hN(z,top);
var B=qx.util.ResourceManager.getInstance().toUri(x);
var C=this.__hL;
C[1]=B;
C[4]=A;
C[7]=y;
return C.join(g);
},getStyles:function(D,E,F,top){if(!D){return this.__hM;
}var G=this.__hN(F,top);
var H=qx.util.ResourceManager.getInstance().toUri(D);
var I={backgroundPosition:G,backgroundImage:c+H+f};

if(E!=null){I.backgroundRepeat=E;
}return I;
},set:function(n,o,p,q,top){var r=this.getStyles(o,p,q,top);

for(var s in r){n.style[s]=r[s];
}}}});
})();
(function(){var f="_applyTheme",e="qx.theme.manager.Color",d="Theme",c="changeTheme",b="string",a="singleton";
qx.Class.define(e,{type:a,extend:qx.util.ValueManager,properties:{theme:{check:d,nullable:true,apply:f,event:c}},members:{_applyTheme:function(n){var o={};

if(n){var p=n.colors;
var q=qx.util.ColorUtil;
var r;

for(var s in p){r=p[s];

if(typeof r===b){if(!q.isCssString(r)){throw new Error("Could not parse color: "+r);
}}else if(r instanceof Array){r=q.rgbToRgbString(r);
}else{throw new Error("Could not parse color: "+r);
}o[s]=r;
}}this._setDynamic(o);
},resolve:function(g){var j=this._dynamic;
var h=j[g];

if(h){return h;
}var i=this.getTheme();

if(i!==null&&i.colors[g]){return j[g]=i.colors[g];
}return g;
},isDynamic:function(k){var m=this._dynamic;

if(k&&(m[k]!==undefined)){return true;
}var l=this.getTheme();

if(l!==null&&k&&(l.colors[k]!==undefined)){m[k]=l.colors[k];
return true;
}return false;
}}});
})();
(function(){var A=",",z="rgb(",y=")",x="qx.theme.manager.Color",w="qx.util.ColorUtil";
qx.Class.define(w,{statics:{REGEXP:{hex3:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,rgb:/^rgb\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/,rgba:/^rgba\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/},SYSTEM:{activeborder:true,activecaption:true,appworkspace:true,background:true,buttonface:true,buttonhighlight:true,buttonshadow:true,buttontext:true,captiontext:true,graytext:true,highlight:true,highlighttext:true,inactiveborder:true,inactivecaption:true,inactivecaptiontext:true,infobackground:true,infotext:true,menu:true,menutext:true,scrollbar:true,threeddarkshadow:true,threedface:true,threedhighlight:true,threedlightshadow:true,threedshadow:true,window:true,windowframe:true,windowtext:true},NAMED:{black:[0,0,0],silver:[192,192,192],gray:[128,128,128],white:[255,255,255],maroon:[128,0,0],red:[255,0,0],purple:[128,0,128],fuchsia:[255,0,255],green:[0,128,0],lime:[0,255,0],olive:[128,128,0],yellow:[255,255,0],navy:[0,0,128],blue:[0,0,255],teal:[0,128,128],aqua:[0,255,255],transparent:[-1,-1,-1],magenta:[255,0,255],orange:[255,165,0],brown:[165,42,42]},isNamedColor:function(be){return this.NAMED[be]!==undefined;
},isSystemColor:function(V){return this.SYSTEM[V]!==undefined;
},supportsThemes:function(){return qx.Class.isDefined(x);
},isThemedColor:function(bh){if(!this.supportsThemes()){return false;
}return qx.theme.manager.Color.getInstance().isDynamic(bh);
},stringToRgb:function(X){if(this.supportsThemes()&&this.isThemedColor(X)){var X=qx.theme.manager.Color.getInstance().resolveDynamic(X);
}
if(this.isNamedColor(X)){return this.NAMED[X];
}else if(this.isSystemColor(X)){throw new Error("Could not convert system colors to RGB: "+X);
}else if(this.isRgbString(X)){return this.__hO();
}else if(this.isHex3String(X)){return this.__hQ();
}else if(this.isHex6String(X)){return this.__hR();
}throw new Error("Could not parse color: "+X);
},cssStringToRgb:function(T){if(this.isNamedColor(T)){return this.NAMED[T];
}else if(this.isSystemColor(T)){throw new Error("Could not convert system colors to RGB: "+T);
}else if(this.isRgbString(T)){return this.__hO();
}else if(this.isRgbaString(T)){return this.__hP();
}else if(this.isHex3String(T)){return this.__hQ();
}else if(this.isHex6String(T)){return this.__hR();
}throw new Error("Could not parse color: "+T);
},stringToRgbString:function(M){return this.rgbToRgbString(this.stringToRgb(M));
},rgbToRgbString:function(bd){return z+bd[0]+A+bd[1]+A+bd[2]+y;
},rgbToHexString:function(c){return (qx.lang.String.pad(c[0].toString(16).toUpperCase(),2)+qx.lang.String.pad(c[1].toString(16).toUpperCase(),2)+qx.lang.String.pad(c[2].toString(16).toUpperCase(),2));
},isValidPropertyValue:function(E){return this.isThemedColor(E)||this.isNamedColor(E)||this.isHex3String(E)||this.isHex6String(E)||this.isRgbString(E);
},isCssString:function(W){return this.isSystemColor(W)||this.isNamedColor(W)||this.isHex3String(W)||this.isHex6String(W)||this.isRgbString(W);
},isHex3String:function(bg){return this.REGEXP.hex3.test(bg);
},isHex6String:function(U){return this.REGEXP.hex6.test(U);
},isRgbString:function(L){return this.REGEXP.rgb.test(L);
},isRgbaString:function(bi){return this.REGEXP.rgba.test(bi);
},__hO:function(){var K=parseInt(RegExp.$1,10);
var J=parseInt(RegExp.$2,10);
var I=parseInt(RegExp.$3,10);
return [K,J,I];
},__hP:function(){var H=parseInt(RegExp.$1,10);
var G=parseInt(RegExp.$2,10);
var F=parseInt(RegExp.$3,10);
return [H,G,F];
},__hQ:function(){var bb=parseInt(RegExp.$1,16)*17;
var ba=parseInt(RegExp.$2,16)*17;
var Y=parseInt(RegExp.$3,16)*17;
return [bb,ba,Y];
},__hR:function(){var D=(parseInt(RegExp.$1,16)*16)+parseInt(RegExp.$2,16);
var C=(parseInt(RegExp.$3,16)*16)+parseInt(RegExp.$4,16);
var B=(parseInt(RegExp.$5,16)*16)+parseInt(RegExp.$6,16);
return [D,C,B];
},hex3StringToRgb:function(bc){if(this.isHex3String(bc)){return this.__hQ(bc);
}throw new Error("Invalid hex3 value: "+bc);
},hex6StringToRgb:function(a){if(this.isHex6String(a)){return this.__hR(a);
}throw new Error("Invalid hex6 value: "+a);
},hexStringToRgb:function(bf){if(this.isHex3String(bf)){return this.__hQ(bf);
}
if(this.isHex6String(bf)){return this.__hR(bf);
}throw new Error("Invalid hex value: "+bf);
},rgbToHsb:function(d){var h,j,l;
var v=d[0];
var o=d[1];
var e=d[2];
var u=(v>o)?v:o;

if(e>u){u=e;
}var k=(v<o)?v:o;

if(e<k){k=e;
}l=u/255.0;

if(u!=0){j=(u-k)/u;
}else{j=0;
}
if(j==0){h=0;
}else{var n=(u-v)/(u-k);
var s=(u-o)/(u-k);
var m=(u-e)/(u-k);

if(v==u){h=m-s;
}else if(o==u){h=2.0+n-m;
}else{h=4.0+s-n;
}h=h/6.0;

if(h<0){h=h+1.0;
}}return [Math.round(h*360),Math.round(j*100),Math.round(l*100)];
},hsbToRgb:function(N){var i,f,p,q,t;
var O=N[0]/360;
var P=N[1]/100;
var Q=N[2]/100;

if(O>=1.0){O%=1.0;
}
if(P>1.0){P=1.0;
}
if(Q>1.0){Q=1.0;
}var R=Math.floor(255*Q);
var S={};

if(P==0.0){S.red=S.green=S.blue=R;
}else{O*=6.0;
i=Math.floor(O);
f=O-i;
p=Math.floor(R*(1.0-P));
q=Math.floor(R*(1.0-(P*f)));
t=Math.floor(R*(1.0-(P*(1.0-f))));

switch(i){case 0:S.red=R;
S.green=t;
S.blue=p;
break;
case 1:S.red=q;
S.green=R;
S.blue=p;
break;
case 2:S.red=p;
S.green=R;
S.blue=t;
break;
case 3:S.red=p;
S.green=q;
S.blue=R;
break;
case 4:S.red=t;
S.green=p;
S.blue=R;
break;
case 5:S.red=R;
S.green=p;
S.blue=q;
break;
}}return [S.red,S.green,S.blue];
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
}},statics:{IS_SUPPORTED:qx.bom.element.Style.isPropertySupported("borderImage")},properties:{borderImage:{check:t,nullable:true,apply:j},sliceTop:{check:h,init:0,apply:j},sliceRight:{check:h,init:0,apply:j},sliceBottom:{check:h,init:0,apply:j},sliceLeft:{check:h,init:0,apply:j},slice:{group:[n,v,a,w],mode:c},repeatX:{check:[i,e,d],init:i,apply:j},repeatY:{check:[i,e,d],init:i,apply:j},repeat:{group:[u,m],mode:c}},members:{__sx:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__sx;
},getMarkup:function(){if(this.__sx){return this.__sx;
}var G=this._resolveImageUrl(this.getBorderImage());
var H=[this.getSliceTop(),this.getSliceRight(),this.getSliceBottom(),this.getSliceLeft()];
var I=[this.getRepeatX(),this.getRepeatY()].join(f);
this.__sx=[x,qx.bom.element.Style.compile({"borderImage":o+G+p+H.join(f)+f+I,position:k,lineHeight:0,fontSize:0,overflow:l,boxSizing:r,borderWidth:H.join(b)+g}),y].join(q);
return this.__sx;
},resize:function(z,A,B){z.style.width=A+g;
z.style.height=B+g;
},tint:function(E,F){},_applyStyle:function(){{};
},_resolveImageUrl:function(J){return qx.util.ResourceManager.getInstance().toUri(qx.util.AliasManager.getInstance().resolve(J));
}},destruct:function(){this.__sx=null;
}});
})();
(function(){var n="px",m="0px",l="-1px",k="no-repeat",j="scale-x",i="scale-y",h="-tr",g="-l",f='</div>',e="scale",B="qx.client",A="-br",z="-t",y="-tl",x="-r",w='<div style="position:absolute;top:0;left:0;overflow:hidden;font-size:0;line-height:0;">',v="_applyBaseImage",u="-b",t="String",s="",q="-bl",r="qx.ui.decoration.GridDiv",o="-c",p="mshtml";
qx.Class.define(r,{extend:qx.ui.decoration.Abstract,construct:function(C,D){qx.ui.decoration.Abstract.call(this);
if(C!=null){this.setBaseImage(C);
}
if(D!=null){this.setInsets(D);
}},properties:{baseImage:{check:t,nullable:true,apply:v}},members:{__sy:null,__sz:null,__sA:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__sy;
},getMarkup:function(){if(this.__sy){return this.__sy;
}var H=qx.bom.element.Decoration;
var I=this.__sz;
var J=this.__sA;
var K=[];
K.push(w);
K.push(H.create(I.tl,k,{top:0,left:0}));
K.push(H.create(I.t,j,{top:0,left:J.left+n}));
K.push(H.create(I.tr,k,{top:0,right:0}));
K.push(H.create(I.bl,k,{bottom:0,left:0}));
K.push(H.create(I.b,j,{bottom:0,left:J.left+n}));
K.push(H.create(I.br,k,{bottom:0,right:0}));
K.push(H.create(I.l,i,{top:J.top+n,left:0}));
K.push(H.create(I.c,e,{top:J.top+n,left:J.left+n}));
K.push(H.create(I.r,i,{top:J.top+n,right:0}));
K.push(f);
return this.__sy=K.join(s);
},resize:function(a,b,c){var d=this.__sA;
var innerWidth=b-d.left-d.right;
var innerHeight=c-d.top-d.bottom;
if(innerWidth<0){innerWidth=0;
}
if(innerHeight<0){innerHeight=0;
}a.style.width=b+n;
a.style.height=c+n;
a.childNodes[1].style.width=innerWidth+n;
a.childNodes[4].style.width=innerWidth+n;
a.childNodes[7].style.width=innerWidth+n;
a.childNodes[6].style.height=innerHeight+n;
a.childNodes[7].style.height=innerHeight+n;
a.childNodes[8].style.height=innerHeight+n;

if(qx.core.Variant.isSet(B,p)){if(qx.bom.client.Engine.VERSION<7||(qx.bom.client.Feature.QUIRKS_MODE&&qx.bom.client.Engine.VERSION<8)){if(b%2==1){a.childNodes[2].style.marginRight=l;
a.childNodes[5].style.marginRight=l;
a.childNodes[8].style.marginRight=l;
}else{a.childNodes[2].style.marginRight=m;
a.childNodes[5].style.marginRight=m;
a.childNodes[8].style.marginRight=m;
}
if(c%2==1){a.childNodes[3].style.marginBottom=l;
a.childNodes[4].style.marginBottom=l;
a.childNodes[5].style.marginBottom=l;
}else{a.childNodes[3].style.marginBottom=m;
a.childNodes[4].style.marginBottom=m;
a.childNodes[5].style.marginBottom=m;
}}}},tint:function(E,F){},_applyBaseImage:function(L,M){{};

if(L){var Q=this._resolveImageUrl(L);
var R=/(.*)(\.[a-z]+)$/.exec(Q);
var P=R[1];
var O=R[2];
var N=this.__sz={tl:P+y+O,t:P+z+O,tr:P+h+O,bl:P+q+O,b:P+u+O,br:P+A+O,l:P+g+O,c:P+o+O,r:P+x+O};
this.__sA=this._computeEdgeSizes(N);
}},_resolveImageUrl:function(G){return qx.util.AliasManager.getInstance().resolve(G);
},_computeEdgeSizes:function(S){var T=qx.util.ResourceManager.getInstance();
return {top:T.getImageHeight(S.t),bottom:T.getImageHeight(S.b),left:T.getImageWidth(S.l),right:T.getImageWidth(S.r)};
}},destruct:function(){this.__sy=this.__sz=this.__sA=null;
}});
})();


qx.$$loader.init();

