(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();

if (!qx.$$environment) qx.$$environment = {};
var envinfo = {"locale":"en","locale.variant":"US","qx.allowUrlSettings":true,"qx.allowUrlVariants":true,"qx.application":"demobrowser.demo.bom.Transform","qx.optimization.basecalls":true,"qx.optimization.privates":true,"qx.optimization.strings":true,"qx.optimization.variables":true,"qx.optimization.whitespace":true,"qx.theme":"qx.theme.Indigo"};
for (var k in envinfo) qx.$$environment[k] = envinfo[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"__out__":{"sourceUri":"../../script"},"demobrowser.demo":{"resourceUri":"../../resource","sourceUri":"../../script"},"qx":{"resourceUri":"../../resource","sourceUri":"../../script","sourceViewUri":"https://github.com/qooxdoo/qooxdoo/blob/%{qxGitBranch}/framework/source/class/%{classFilePath}#L%{lineNumber}"}};
for (var k in libinfo) qx.$$libraries[k] = libinfo[k];

qx.$$resources = {};
qx.$$translations = {"C":null,"de":null,"de_DE":null,"en":null,"en_US":null,"fr":null,"fr_FR":null};
qx.$$locales = {"C":null,"de":null,"de_DE":null,"en":null,"en_US":null,"fr":null,"fr_FR":null};
qx.$$packageData = {};

qx.$$loader = {
  parts : {"boot":[0]},
  packages : {"0":{"uris":["__out__:demobrowser.demo.bom.Transform.b8d79b23f9ad.js"]}},
  urisBefore : [],
  cssBefore : [],
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

var readyStateValue = {"complete" : true};
if (document.documentMode && document.documentMode < 10 ||
    (typeof window.ActiveXObject !== "undefined" && !document.documentMode)) {
  readyStateValue["loaded"] = true;
}

function loadScript(uri, callback) {
  var elem = document.createElement("script");
  elem.charset = "utf-8";
  elem.src = uri;
  elem.onreadystatechange = elem.onload = function() {
    if (!this.readyState || readyStateValue[this.readyState]) {
      elem.onreadystatechange = elem.onload = null;
      if (typeof callback === "function") {
        callback();
      }
    }
  };

  if (isLoadParallel) {
    elem.async = null;
  }

  var head = document.getElementsByTagName("head")[0];
  head.appendChild(elem);
}

function loadCss(uri) {
  var elem = document.createElement("link");
  elem.rel = "stylesheet";
  elem.type= "text/css";
  elem.href= uri;
  var head = document.getElementsByTagName("head")[0];
  head.appendChild(elem);
}

var isWebkit = /AppleWebKit\/([^ ]+)/.test(navigator.userAgent);
var isLoadParallel = 'async' in document.createElement('script');

function loadScriptList(list, callback) {
  if (list.length == 0) {
    callback();
    return;
  }

  var item;

  if (isLoadParallel) {
    while (list.length) {
      item = list.shift();
      if (list.length) {
        loadScript(item);
      } else {
        loadScript(item, callback);
      }
    }
  } else {
    item = list.shift();
    loadScript(item,  function() {
      if (isWebkit) {
        // force async, else Safari fails with a "maximum recursion depth exceeded"
        window.setTimeout(function() {
          loadScriptList(list, callback);
        }, 0);
      } else {
        loadScriptList(list, callback);
      }
    });
  }
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

// Load all stuff
qx.$$loader.init = function(){
  var l=qx.$$loader;
  if (l.cssBefore.length>0) {
    for (var i=0, m=l.cssBefore.length; i<m; i++) {
      loadCss(l.cssBefore[i]);
    }
  }
  if (l.urisBefore.length>0){
    loadScriptList(l.urisBefore, function(){
      l.initUris();
    });
  } else {
    l.initUris();
  }
}

// Load qooxdoo boot stuff
qx.$$loader.initUris = function(){
  var l=qx.$$loader;
  var bootPackageHash=l.parts[l.boot][0];
  if (l.bootIsInline){
    l.importPackageData(qx.$$packageData[bootPackageHash]);
    l.signalStartup();
  } else {
    loadScriptList(l.decodeUris(l.packages[l.parts[l.boot][0]].uris), function(){
      // Opera needs this extra time to parse the scripts
      window.setTimeout(function(){
        l.importPackageData(qx.$$packageData[bootPackageHash] || {});
        l.signalStartup();
      }, 0);
    });
  }
}
})();

qx.$$packageData['0']={"locales":{},"resources":{"demobrowser/demo/test/combined/icons22.png":[22,176,"png","demobrowser.demo"],"qx/decoration/Classic/arrows-combined.gif":[124,7,"gif","qx"],"qx/decoration/Classic/arrows/down-invert.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-38,0],"qx/decoration/Classic/arrows/down-small-invert.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-87,0],"qx/decoration/Classic/arrows/down-small.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-53,0],"qx/decoration/Classic/arrows/down.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-113,0],"qx/decoration/Classic/arrows/forward-invert.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-30,0],"qx/decoration/Classic/arrows/forward.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-18,0],"qx/decoration/Classic/arrows/left-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-92,0],"qx/decoration/Classic/arrows/left-small-invert.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-58,0],"qx/decoration/Classic/arrows/left-small.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-15,0],"qx/decoration/Classic/arrows/left.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-120,0],"qx/decoration/Classic/arrows/next-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-80,0],"qx/decoration/Classic/arrows/next.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-109,0],"qx/decoration/Classic/arrows/previous-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-69,0],"qx/decoration/Classic/arrows/previous.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-65,0],"qx/decoration/Classic/arrows/rewind-invert.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-45,0],"qx/decoration/Classic/arrows/rewind.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-101,0],"qx/decoration/Classic/arrows/right-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-61,0],"qx/decoration/Classic/arrows/right-small-invert.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",0,0],"qx/decoration/Classic/arrows/right-small.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-84,0],"qx/decoration/Classic/arrows/right.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-26,0],"qx/decoration/Classic/arrows/up-invert.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-73,0],"qx/decoration/Classic/arrows/up-small-invert.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-96,0],"qx/decoration/Classic/arrows/up-small.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-3,0],"qx/decoration/Classic/arrows/up.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-8,0],"qx/decoration/Classic/checkbox-radiobutton-combined.png":[504,14,"png","qx"],"qx/decoration/Classic/colorselector-combined.gif":[46,11,"gif","qx"],"qx/decoration/Classic/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Classic/colorselector/brightness-handle.gif":[35,11,"gif","qx","qx/decoration/Classic/colorselector-combined.gif",-11,0],"qx/decoration/Classic/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Classic/colorselector/huesaturation-handle.gif":[11,11,"gif","qx","qx/decoration/Classic/colorselector-combined.gif",0,0],"qx/decoration/Classic/cursors-combined.gif":[71,20,"gif","qx"],"qx/decoration/Classic/cursors/alias.gif":[19,15,"gif","qx","qx/decoration/Classic/cursors-combined.gif",-52,0],"qx/decoration/Classic/cursors/copy.gif":[19,15,"gif","qx","qx/decoration/Classic/cursors-combined.gif",-20,0],"qx/decoration/Classic/cursors/move.gif":[13,9,"gif","qx","qx/decoration/Classic/cursors-combined.gif",-39,0],"qx/decoration/Classic/cursors/nodrop.gif":[20,20,"gif","qx","qx/decoration/Classic/cursors-combined.gif",0,0],"qx/decoration/Classic/datechooser/last-month-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/last-month.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/last-year-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/last-year.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-month-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-month.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-year-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-year.png":[16,16,"png","qx"],"qx/decoration/Classic/form/checkbox-checked-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-336,0],"qx/decoration/Classic/form/checkbox-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-28,0],"qx/decoration/Classic/form/checkbox-checked-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-462,0],"qx/decoration/Classic/form/checkbox-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-112,0],"qx/decoration/Classic/form/checkbox-checked-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-140,0],"qx/decoration/Classic/form/checkbox-checked-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-98,0],"qx/decoration/Classic/form/checkbox-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-308,0],"qx/decoration/Classic/form/checkbox-checked-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",0,0],"qx/decoration/Classic/form/checkbox-checked.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-266,0],"qx/decoration/Classic/form/checkbox-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-84,0],"qx/decoration/Classic/form/checkbox-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-476,0],"qx/decoration/Classic/form/checkbox-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-392,0],"qx/decoration/Classic/form/checkbox-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-196,0],"qx/decoration/Classic/form/checkbox-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-154,0],"qx/decoration/Classic/form/checkbox-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-350,0],"qx/decoration/Classic/form/checkbox-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-448,0],"qx/decoration/Classic/form/checkbox-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-70,0],"qx/decoration/Classic/form/checkbox-undetermined-disabled.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox-undetermined-focused-invalid.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox-undetermined-focused.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox-undetermined-hovered-invalid.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox-undetermined-hovered.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox-undetermined-invalid.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox-undetermined.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-490,0],"qx/decoration/Classic/form/radiobutton-checked-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-210,0],"qx/decoration/Classic/form/radiobutton-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-406,0],"qx/decoration/Classic/form/radiobutton-checked-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-378,0],"qx/decoration/Classic/form/radiobutton-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-252,0],"qx/decoration/Classic/form/radiobutton-checked-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-182,0],"qx/decoration/Classic/form/radiobutton-checked-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-294,0],"qx/decoration/Classic/form/radiobutton-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-420,0],"qx/decoration/Classic/form/radiobutton-checked-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-56,0],"qx/decoration/Classic/form/radiobutton-checked.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-322,0],"qx/decoration/Classic/form/radiobutton-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-364,0],"qx/decoration/Classic/form/radiobutton-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-434,0],"qx/decoration/Classic/form/radiobutton-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-168,0],"qx/decoration/Classic/form/radiobutton-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-126,0],"qx/decoration/Classic/form/radiobutton-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-42,0],"qx/decoration/Classic/form/radiobutton-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-280,0],"qx/decoration/Classic/form/radiobutton-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-238,0],"qx/decoration/Classic/form/radiobutton-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-14,0],"qx/decoration/Classic/form/radiobutton.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-224,0],"qx/decoration/Classic/menu-combined.gif":[64,7,"gif","qx"],"qx/decoration/Classic/menu/checkbox-invert.gif":[16,7,"gif","qx","qx/decoration/Classic/menu-combined.gif",-16,0],"qx/decoration/Classic/menu/checkbox.gif":[16,7,"gif","qx","qx/decoration/Classic/menu-combined.gif",-32,0],"qx/decoration/Classic/menu/radiobutton-invert.gif":[16,5,"gif","qx","qx/decoration/Classic/menu-combined.gif",0,0],"qx/decoration/Classic/menu/radiobutton.gif":[16,5,"gif","qx","qx/decoration/Classic/menu-combined.gif",-48,0],"qx/decoration/Classic/shadow-lr-combined.png":[30,382,"png","qx"],"qx/decoration/Classic/shadow-small-lr-combined.png":[10,136,"png","qx"],"qx/decoration/Classic/shadow-small-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Classic/shadow-tb-combined.png":[15,90,"png","qx"],"qx/decoration/Classic/shadow/shadow-b.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-30],"qx/decoration/Classic/shadow/shadow-bl.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-br.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-60],"qx/decoration/Classic/shadow/shadow-c.png":[40,382,"png","qx"],"qx/decoration/Classic/shadow/shadow-l.png":[15,382,"png","qx","qx/decoration/Classic/shadow-lr-combined.png",-15,0],"qx/decoration/Classic/shadow/shadow-r.png":[15,382,"png","qx","qx/decoration/Classic/shadow-lr-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-small-b.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-25],"qx/decoration/Classic/shadow/shadow-small-bl.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-20],"qx/decoration/Classic/shadow/shadow-small-br.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-small-c.png":[40,136,"png","qx"],"qx/decoration/Classic/shadow/shadow-small-l.png":[5,136,"png","qx","qx/decoration/Classic/shadow-small-lr-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-small-r.png":[5,136,"png","qx","qx/decoration/Classic/shadow-small-lr-combined.png",-5,0],"qx/decoration/Classic/shadow/shadow-small-t.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-5],"qx/decoration/Classic/shadow/shadow-small-tl.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-15],"qx/decoration/Classic/shadow/shadow-small-tr.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-10],"qx/decoration/Classic/shadow/shadow-small.png":[114,146,"png","qx"],"qx/decoration/Classic/shadow/shadow-t.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-75],"qx/decoration/Classic/shadow/shadow-tl.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-45],"qx/decoration/Classic/shadow/shadow-tr.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-15],"qx/decoration/Classic/shadow/shadow.png":[381,412,"png","qx"],"qx/decoration/Classic/splitpane/knob-horizontal.png":[4,15,"png","qx"],"qx/decoration/Classic/splitpane/knob-vertical.png":[15,4,"png","qx"],"qx/decoration/Classic/table-combined.png":[72,11,"png","qx"],"qx/decoration/Classic/table/ascending-invert.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",-62,0],"qx/decoration/Classic/table/ascending.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",-52,0],"qx/decoration/Classic/table/boolean-false.png":[11,11,"png","qx","qx/decoration/Classic/table-combined.png",-31,0],"qx/decoration/Classic/table/boolean-true.png":[11,11,"png","qx","qx/decoration/Classic/table-combined.png",-10,0],"qx/decoration/Classic/table/descending-invert.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",-42,0],"qx/decoration/Classic/table/descending.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",0,0],"qx/decoration/Classic/table/select-column-order.png":[10,9,"png","qx","qx/decoration/Classic/table-combined.png",-21,0],"qx/decoration/Classic/tree/minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/tree/plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/cross.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/cross_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/cross_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/end.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/end_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/end_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/line.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/only_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/only_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/start.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/start_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/start_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/window-captionbar-buttons-combined.gif":[36,9,"gif","qx"],"qx/decoration/Classic/window/close.gif":[10,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",0,0],"qx/decoration/Classic/window/maximize.gif":[9,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",-10,0],"qx/decoration/Classic/window/minimize.gif":[9,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",-19,0],"qx/decoration/Classic/window/restore.gif":[8,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",-28,0],"qx/decoration/Indigo/font/JosefinSlab-SemiBold.ttf":"qx","qx/decoration/Indigo/font/JosefinSlab-SemiBold.woff":"qx","qx/decoration/Modern/app-header.png":[110,20,"png","qx"],"qx/decoration/Modern/arrows-combined.png":[87,8,"png","qx"],"qx/decoration/Modern/arrows/down-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-74,0],"qx/decoration/Modern/arrows/down-small-invert.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-69,0],"qx/decoration/Modern/arrows/down-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-49,0],"qx/decoration/Modern/arrows/down.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-20,0],"qx/decoration/Modern/arrows/forward.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-59,0],"qx/decoration/Modern/arrows/left-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",0,0],"qx/decoration/Modern/arrows/left.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-44,0],"qx/decoration/Modern/arrows/rewind.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-10,0],"qx/decoration/Modern/arrows/right-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-5,0],"qx/decoration/Modern/arrows/right.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-54,0],"qx/decoration/Modern/arrows/up-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-28,0],"qx/decoration/Modern/arrows/up-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-82,0],"qx/decoration/Modern/arrows/up.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-36,0],"qx/decoration/Modern/button-lr-combined.png":[72,52,"png","qx"],"qx/decoration/Modern/button-tb-combined.png":[4,216,"png","qx"],"qx/decoration/Modern/checkradio-combined.png":[504,14,"png","qx"],"qx/decoration/Modern/colorselector-combined.gif":[46,11,"gif","qx"],"qx/decoration/Modern/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Modern/colorselector/brightness-handle.gif":[35,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",0,0],"qx/decoration/Modern/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Modern/colorselector/huesaturation-handle.gif":[11,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",-35,0],"qx/decoration/Modern/cursors-combined.gif":[71,20,"gif","qx"],"qx/decoration/Modern/cursors/alias.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-52,0],"qx/decoration/Modern/cursors/copy.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-33,0],"qx/decoration/Modern/cursors/move.gif":[13,9,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-20,0],"qx/decoration/Modern/cursors/nodrop.gif":[20,20,"gif","qx","qx/decoration/Modern/cursors-combined.gif",0,0],"qx/decoration/Modern/form/button-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-72],"qx/decoration/Modern/form/button-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-204],"qx/decoration/Modern/form/button-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-188],"qx/decoration/Modern/form/button-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-36],"qx/decoration/Modern/form/button-checked-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-84],"qx/decoration/Modern/form/button-checked-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-184],"qx/decoration/Modern/form/button-checked-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-156],"qx/decoration/Modern/form/button-checked-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-208],"qx/decoration/Modern/form/button-checked-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-160],"qx/decoration/Modern/form/button-checked-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-40,0],"qx/decoration/Modern/form/button-checked-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-32,0],"qx/decoration/Modern/form/button-checked-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-28],"qx/decoration/Modern/form/button-checked-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-24],"qx/decoration/Modern/form/button-checked-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-48],"qx/decoration/Modern/form/button-checked-focused.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-checked-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-16,0],"qx/decoration/Modern/form/button-checked-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-60,0],"qx/decoration/Modern/form/button-checked-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-140],"qx/decoration/Modern/form/button-checked-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-56],"qx/decoration/Modern/form/button-checked-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-112],"qx/decoration/Modern/form/button-checked.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-disabled-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-40],"qx/decoration/Modern/form/button-disabled-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-136],"qx/decoration/Modern/form/button-disabled-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-16],"qx/decoration/Modern/form/button-disabled-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-disabled-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-68,0],"qx/decoration/Modern/form/button-disabled-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-4,0],"qx/decoration/Modern/form/button-disabled-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-116],"qx/decoration/Modern/form/button-disabled-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-168],"qx/decoration/Modern/form/button-disabled-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-60],"qx/decoration/Modern/form/button-disabled.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-68],"qx/decoration/Modern/form/button-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-144],"qx/decoration/Modern/form/button-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-8],"qx/decoration/Modern/form/button-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-24,0],"qx/decoration/Modern/form/button-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-44,0],"qx/decoration/Modern/form/button-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-192],"qx/decoration/Modern/form/button-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-148],"qx/decoration/Modern/form/button-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-104],"qx/decoration/Modern/form/button-focused.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-hovered-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-108],"qx/decoration/Modern/form/button-hovered-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-32],"qx/decoration/Modern/form/button-hovered-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-128],"qx/decoration/Modern/form/button-hovered-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-hovered-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-20,0],"qx/decoration/Modern/form/button-hovered-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-48,0],"qx/decoration/Modern/form/button-hovered-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-44],"qx/decoration/Modern/form/button-hovered-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-76],"qx/decoration/Modern/form/button-hovered-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-88],"qx/decoration/Modern/form/button-hovered.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-56,0],"qx/decoration/Modern/form/button-preselected-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-124],"qx/decoration/Modern/form/button-preselected-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-176],"qx/decoration/Modern/form/button-preselected-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-200],"qx/decoration/Modern/form/button-preselected-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,0],"qx/decoration/Modern/form/button-preselected-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-4],"qx/decoration/Modern/form/button-preselected-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-152],"qx/decoration/Modern/form/button-preselected-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-28,0],"qx/decoration/Modern/form/button-preselected-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-36,0],"qx/decoration/Modern/form/button-preselected-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-196],"qx/decoration/Modern/form/button-preselected-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-164],"qx/decoration/Modern/form/button-preselected-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-212],"qx/decoration/Modern/form/button-preselected-focused.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-preselected-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-8,0],"qx/decoration/Modern/form/button-preselected-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-64,0],"qx/decoration/Modern/form/button-preselected-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-96],"qx/decoration/Modern/form/button-preselected-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-80],"qx/decoration/Modern/form/button-preselected-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-132],"qx/decoration/Modern/form/button-preselected.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-pressed-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-12],"qx/decoration/Modern/form/button-pressed-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-52],"qx/decoration/Modern/form/button-pressed-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-20],"qx/decoration/Modern/form/button-pressed-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-pressed-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-52,0],"qx/decoration/Modern/form/button-pressed-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-12,0],"qx/decoration/Modern/form/button-pressed-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-100],"qx/decoration/Modern/form/button-pressed-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-172],"qx/decoration/Modern/form/button-pressed-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-64],"qx/decoration/Modern/form/button-pressed.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",0,0],"qx/decoration/Modern/form/button-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-92],"qx/decoration/Modern/form/button-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-120],"qx/decoration/Modern/form/button-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-180],"qx/decoration/Modern/form/button.png":[80,60,"png","qx"],"qx/decoration/Modern/form/checkbox-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-126,0],"qx/decoration/Modern/form/checkbox-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-322,0],"qx/decoration/Modern/form/checkbox-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-294,0],"qx/decoration/Modern/form/checkbox-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-364,0],"qx/decoration/Modern/form/checkbox-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-490,0],"qx/decoration/Modern/form/checkbox-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-224,0],"qx/decoration/Modern/form/checkbox-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-378,0],"qx/decoration/Modern/form/checkbox-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-84,0],"qx/decoration/Modern/form/checkbox-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-182,0],"qx/decoration/Modern/form/checkbox-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-42,0],"qx/decoration/Modern/form/checkbox-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-392,0],"qx/decoration/Modern/form/checkbox-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-210,0],"qx/decoration/Modern/form/checkbox-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-14,0],"qx/decoration/Modern/form/checkbox-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-238,0],"qx/decoration/Modern/form/checkbox-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-462,0],"qx/decoration/Modern/form/checkbox-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-112,0],"qx/decoration/Modern/form/checkbox-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-448,0],"qx/decoration/Modern/form/checkbox-undetermined-disabled.png":[14,14,"png","qx"],"qx/decoration/Modern/form/checkbox-undetermined-focused-invalid.png":[14,14,"png","qx"],"qx/decoration/Modern/form/checkbox-undetermined-focused.png":[14,14,"png","qx"],"qx/decoration/Modern/form/checkbox-undetermined-hovered-invalid.png":[14,14,"png","qx"],"qx/decoration/Modern/form/checkbox-undetermined-hovered.png":[14,14,"png","qx"],"qx/decoration/Modern/form/checkbox-undetermined-invalid.png":[14,14,"png","qx"],"qx/decoration/Modern/form/checkbox-undetermined.png":[14,14,"png","qx"],"qx/decoration/Modern/form/checkbox.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-140,0],"qx/decoration/Modern/form/checked-disabled.png":[6,6,"png","qx"],"qx/decoration/Modern/form/checked.png":[6,6,"png","qx"],"qx/decoration/Modern/form/input-focused.png":[40,12,"png","qx"],"qx/decoration/Modern/form/input.png":[84,12,"png","qx"],"qx/decoration/Modern/form/radiobutton-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-196,0],"qx/decoration/Modern/form/radiobutton-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-168,0],"qx/decoration/Modern/form/radiobutton-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-98,0],"qx/decoration/Modern/form/radiobutton-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-308,0],"qx/decoration/Modern/form/radiobutton-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-406,0],"qx/decoration/Modern/form/radiobutton-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-28,0],"qx/decoration/Modern/form/radiobutton-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-350,0],"qx/decoration/Modern/form/radiobutton-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-266,0],"qx/decoration/Modern/form/radiobutton-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-252,0],"qx/decoration/Modern/form/radiobutton-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-336,0],"qx/decoration/Modern/form/radiobutton-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-476,0],"qx/decoration/Modern/form/radiobutton-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-420,0],"qx/decoration/Modern/form/radiobutton-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-56,0],"qx/decoration/Modern/form/radiobutton-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",0,0],"qx/decoration/Modern/form/radiobutton-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-154,0],"qx/decoration/Modern/form/radiobutton-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-434,0],"qx/decoration/Modern/form/radiobutton-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-280,0],"qx/decoration/Modern/form/radiobutton.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-70,0],"qx/decoration/Modern/form/tooltip-error-arrow-right.png":[11,14,"png","qx"],"qx/decoration/Modern/form/tooltip-error-arrow.png":[11,14,"png","qx"],"qx/decoration/Modern/form/tooltip-error-b.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-30],"qx/decoration/Modern/form/tooltip-error-bl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-24],"qx/decoration/Modern/form/tooltip-error-br.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-c.png":[40,18,"png","qx"],"qx/decoration/Modern/form/tooltip-error-l.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",-6,0],"qx/decoration/Modern/form/tooltip-error-r.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-t.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-6],"qx/decoration/Modern/form/tooltip-error-tl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-18],"qx/decoration/Modern/form/tooltip-error-tr.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-12],"qx/decoration/Modern/form/tooltip-error.png":[127,30,"png","qx"],"qx/decoration/Modern/form/undetermined-disabled.png":[6,2,"png","qx"],"qx/decoration/Modern/form/undetermined.png":[6,2,"png","qx"],"qx/decoration/Modern/group-item.png":[110,20,"png","qx"],"qx/decoration/Modern/groupbox-lr-combined.png":[8,51,"png","qx"],"qx/decoration/Modern/groupbox-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-b.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-12],"qx/decoration/Modern/groupbox/groupbox-bl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-16],"qx/decoration/Modern/groupbox/groupbox-br.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-8],"qx/decoration/Modern/groupbox/groupbox-c.png":[40,51,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-l.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",-4,0],"qx/decoration/Modern/groupbox/groupbox-r.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-t.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-4],"qx/decoration/Modern/groupbox/groupbox-tl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-tr.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-20],"qx/decoration/Modern/groupbox/groupbox.png":[255,59,"png","qx"],"qx/decoration/Modern/menu-background-combined.png":[80,49,"png","qx"],"qx/decoration/Modern/menu-checkradio-combined.gif":[64,7,"gif","qx"],"qx/decoration/Modern/menu/background.png":[40,49,"png","qx","qx/decoration/Modern/menu-background-combined.png",-40,0],"qx/decoration/Modern/menu/bar-background.png":[40,20,"png","qx","qx/decoration/Modern/menu-background-combined.png",0,0],"qx/decoration/Modern/menu/checkbox-invert.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-16,0],"qx/decoration/Modern/menu/checkbox.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-48,0],"qx/decoration/Modern/menu/radiobutton-invert.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-32,0],"qx/decoration/Modern/menu/radiobutton.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",0,0],"qx/decoration/Modern/pane-lr-combined.png":[12,238,"png","qx"],"qx/decoration/Modern/pane-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/pane/pane-b.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-30],"qx/decoration/Modern/pane/pane-bl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-18],"qx/decoration/Modern/pane/pane-br.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-12],"qx/decoration/Modern/pane/pane-c.png":[40,238,"png","qx"],"qx/decoration/Modern/pane/pane-l.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",0,0],"qx/decoration/Modern/pane/pane-r.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",-6,0],"qx/decoration/Modern/pane/pane-t.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,0],"qx/decoration/Modern/pane/pane-tl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-24],"qx/decoration/Modern/pane/pane-tr.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-6],"qx/decoration/Modern/pane/pane.png":[185,250,"png","qx"],"qx/decoration/Modern/scrollbar-combined.png":[54,12,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-horizontal.png":[76,15,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-horizontal.png":[19,10,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-vertical.png":[10,19,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-vertical.png":[15,76,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-horizontal.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-34,0],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-vertical.png":[10,12,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-6,0],"qx/decoration/Modern/scrollbar/scrollbar-down.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-28,0],"qx/decoration/Modern/scrollbar/scrollbar-left.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-50,0],"qx/decoration/Modern/scrollbar/scrollbar-right.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-46,0],"qx/decoration/Modern/scrollbar/scrollbar-up.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",0,0],"qx/decoration/Modern/scrollbar/slider-knob-background.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-16,0],"qx/decoration/Modern/selection.png":[110,20,"png","qx"],"qx/decoration/Modern/shadow-lr-combined.png":[30,382,"png","qx"],"qx/decoration/Modern/shadow-small-lr-combined.png":[10,136,"png","qx"],"qx/decoration/Modern/shadow-small-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/shadow-tb-combined.png":[15,90,"png","qx"],"qx/decoration/Modern/shadow/shadow-b.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-30],"qx/decoration/Modern/shadow/shadow-bl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-br.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-45],"qx/decoration/Modern/shadow/shadow-c.png":[40,382,"png","qx"],"qx/decoration/Modern/shadow/shadow-l.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-r.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",-15,0],"qx/decoration/Modern/shadow/shadow-small-b.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-20],"qx/decoration/Modern/shadow/shadow-small-bl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-small-br.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-10],"qx/decoration/Modern/shadow/shadow-small-c.png":[40,136,"png","qx"],"qx/decoration/Modern/shadow/shadow-small-l.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-r.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",-5,0],"qx/decoration/Modern/shadow/shadow-small-t.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-5],"qx/decoration/Modern/shadow/shadow-small-tl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-tr.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-25],"qx/decoration/Modern/shadow/shadow-small.png":[114,146,"png","qx"],"qx/decoration/Modern/shadow/shadow-t.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-60],"qx/decoration/Modern/shadow/shadow-tl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-75],"qx/decoration/Modern/shadow/shadow-tr.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,0],"qx/decoration/Modern/shadow/shadow.png":[381,412,"png","qx"],"qx/decoration/Modern/splitpane-knobs-combined.png":[8,9,"png","qx"],"qx/decoration/Modern/splitpane/knob-horizontal.png":[1,8,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,-1],"qx/decoration/Modern/splitpane/knob-vertical.png":[8,1,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,0],"qx/decoration/Modern/table-combined.png":[94,18,"png","qx"],"qx/decoration/Modern/table/ascending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",0,0],"qx/decoration/Modern/table/boolean-false.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-80,0],"qx/decoration/Modern/table/boolean-true.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-26,0],"qx/decoration/Modern/table/descending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",-18,0],"qx/decoration/Modern/table/header-cell.png":[40,18,"png","qx","qx/decoration/Modern/table-combined.png",-40,0],"qx/decoration/Modern/table/select-column-order.png":[10,9,"png","qx","qx/decoration/Modern/table-combined.png",-8,0],"qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png":[10,14,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-lr-combined.png":[10,12,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-pane-lr-combined.png":[60,2,"png","qx"],"qx/decoration/Modern/tabview-pane-tb-combined.png":[30,180,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-bottom-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-bottom-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-bottom-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-l.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-r.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-bottom-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-bottom-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-active.png":[49,24,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-bottom-inactive.png":[45,21,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-left-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-left-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-left-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-left-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-left-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-left-active.png":[22,47,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-inactive.png":[20,45,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-right-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-right-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-right-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-right-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-right-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-right-active.png":[22,47,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-inactive.png":[20,45,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-top-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-top-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-top-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-active-l.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-r.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-top-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-top-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-top-active.png":[48,22,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-top-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-top-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-inactive.png":[45,21,"png","qx"],"qx/decoration/Modern/tabview/tabview-pane-b.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-60],"qx/decoration/Modern/tabview/tabview-pane-bl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-br.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-120],"qx/decoration/Modern/tabview/tabview-pane-c.png":[40,120,"png","qx"],"qx/decoration/Modern/tabview/tabview-pane-l.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-r.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",-30,0],"qx/decoration/Modern/tabview/tabview-pane-t.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-150],"qx/decoration/Modern/tabview/tabview-pane-tl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-30],"qx/decoration/Modern/tabview/tabview-pane-tr.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-90],"qx/decoration/Modern/tabview/tabview-pane.png":[185,250,"png","qx"],"qx/decoration/Modern/toolbar-combined.png":[80,130,"png","qx"],"qx/decoration/Modern/toolbar/toolbar-gradient-blue.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",-40,0],"qx/decoration/Modern/toolbar/toolbar-gradient.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",0,0],"qx/decoration/Modern/toolbar/toolbar-handle-knob.gif":[1,8,"gif","qx"],"qx/decoration/Modern/toolbar/toolbar-part.gif":[7,1,"gif","qx"],"qx/decoration/Modern/tooltip-error-lr-combined.png":[12,18,"png","qx"],"qx/decoration/Modern/tooltip-error-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/tree-combined.png":[32,8,"png","qx"],"qx/decoration/Modern/tree/closed-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-24,0],"qx/decoration/Modern/tree/closed.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-16,0],"qx/decoration/Modern/tree/open-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-8,0],"qx/decoration/Modern/tree/open.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",0,0],"qx/decoration/Modern/window-captionbar-buttons-combined.png":[108,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-active-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-inactive-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-active-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-inactive-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-statusbar-lr-combined.png":[8,7,"png","qx"],"qx/decoration/Modern/window-statusbar-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/window/captionbar-active-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-18],"qx/decoration/Modern/window/captionbar-active-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-active-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-active-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-active-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-active-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-6],"qx/decoration/Modern/window/captionbar-active-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-active.png":[69,21,"png","qx"],"qx/decoration/Modern/window/captionbar-inactive-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-inactive-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-6],"qx/decoration/Modern/window/captionbar-inactive-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-inactive-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-inactive-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-inactive-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-inactive-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-18],"qx/decoration/Modern/window/captionbar-inactive.png":[69,21,"png","qx"],"qx/decoration/Modern/window/close-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-27,0],"qx/decoration/Modern/window/close-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-9,0],"qx/decoration/Modern/window/close-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-90,0],"qx/decoration/Modern/window/maximize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-18,0],"qx/decoration/Modern/window/maximize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-81,0],"qx/decoration/Modern/window/maximize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-54,0],"qx/decoration/Modern/window/minimize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-63,0],"qx/decoration/Modern/window/minimize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-72,0],"qx/decoration/Modern/window/minimize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-36,0],"qx/decoration/Modern/window/restore-active-hovered.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",0,0],"qx/decoration/Modern/window/restore-active.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-99,0],"qx/decoration/Modern/window/restore-inactive.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-45,0],"qx/decoration/Modern/window/statusbar-b.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-16],"qx/decoration/Modern/window/statusbar-bl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-20],"qx/decoration/Modern/window/statusbar-br.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-4],"qx/decoration/Modern/window/statusbar-c.png":[40,7,"png","qx"],"qx/decoration/Modern/window/statusbar-l.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",-4,0],"qx/decoration/Modern/window/statusbar-r.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",0,0],"qx/decoration/Modern/window/statusbar-t.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,0],"qx/decoration/Modern/window/statusbar-tl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-8],"qx/decoration/Modern/window/statusbar-tr.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-12],"qx/decoration/Modern/window/statusbar.png":[369,15,"png","qx"],"qx/decoration/Simple/arrows/down-invert.gif":[7,4,"gif","qx"],"qx/decoration/Simple/arrows/down-small.gif":[5,3,"gif","qx"],"qx/decoration/Simple/arrows/down.gif":[7,4,"gif","qx"],"qx/decoration/Simple/arrows/forward.gif":[8,7,"gif","qx"],"qx/decoration/Simple/arrows/left-invert.gif":[4,7,"gif","qx"],"qx/decoration/Simple/arrows/left.gif":[4,7,"gif","qx"],"qx/decoration/Simple/arrows/rewind.gif":[8,7,"gif","qx"],"qx/decoration/Simple/arrows/right-invert.gif":[4,7,"gif","qx"],"qx/decoration/Simple/arrows/right.gif":[4,7,"gif","qx"],"qx/decoration/Simple/arrows/up-invert.gif":[7,4,"gif","qx"],"qx/decoration/Simple/arrows/up-small.gif":[5,3,"gif","qx"],"qx/decoration/Simple/arrows/up.gif":[7,4,"gif","qx"],"qx/decoration/Simple/checkbox/checked-disabled.png":[6,6,"png","qx"],"qx/decoration/Simple/checkbox/checked.png":[6,6,"png","qx"],"qx/decoration/Simple/checkbox/undetermined-disabled.png":[6,2,"png","qx"],"qx/decoration/Simple/checkbox/undetermined.png":[6,2,"png","qx"],"qx/decoration/Simple/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Simple/colorselector/brightness-handle.gif":[35,11,"gif","qx"],"qx/decoration/Simple/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Simple/colorselector/huesaturation-handle.gif":[11,11,"gif","qx"],"qx/decoration/Simple/cursors/alias.gif":[19,15,"gif","qx"],"qx/decoration/Simple/cursors/copy.gif":[19,15,"gif","qx"],"qx/decoration/Simple/cursors/move.gif":[13,9,"gif","qx"],"qx/decoration/Simple/cursors/nodrop.gif":[20,20,"gif","qx"],"qx/decoration/Simple/menu/checkbox-invert.gif":[16,7,"gif","qx"],"qx/decoration/Simple/menu/checkbox.gif":[16,7,"gif","qx"],"qx/decoration/Simple/menu/radiobutton-invert.gif":[16,5,"gif","qx"],"qx/decoration/Simple/menu/radiobutton.gif":[16,5,"gif","qx"],"qx/decoration/Simple/splitpane/knob-horizontal.png":[1,8,"png","qx"],"qx/decoration/Simple/splitpane/knob-vertical.png":[8,1,"png","qx"],"qx/decoration/Simple/table/ascending-invert.png":[10,10,"png","qx"],"qx/decoration/Simple/table/ascending.png":[10,10,"png","qx"],"qx/decoration/Simple/table/boolean-false.png":[11,11,"png","qx"],"qx/decoration/Simple/table/boolean-true.png":[11,11,"png","qx"],"qx/decoration/Simple/table/descending-invert.png":[10,10,"png","qx"],"qx/decoration/Simple/table/descending.png":[10,10,"png","qx"],"qx/decoration/Simple/table/select-column-order.png":[10,9,"png","qx"],"qx/decoration/Simple/tabview/close.gif":[10,9,"gif","qx"],"qx/decoration/Simple/tree/minus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/tree/plus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/cross.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/cross_minus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/cross_plus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/end.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/end_minus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/end_plus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/line.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/only_minus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/only_plus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/start.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/start_minus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/start_plus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/window/close-white.gif":[10,9,"gif","qx"],"qx/decoration/Simple/window/close.gif":[10,9,"gif","qx"],"qx/decoration/Simple/window/maximize-white.gif":[9,9,"gif","qx"],"qx/decoration/Simple/window/maximize.gif":[9,9,"gif","qx"],"qx/decoration/Simple/window/minimize-white.gif":[9,9,"gif","qx"],"qx/decoration/Simple/window/minimize.gif":[9,9,"gif","qx"],"qx/decoration/Simple/window/restore-white.gif":[8,9,"gif","qx"],"qx/decoration/Simple/window/restore.gif":[8,9,"gif","qx"],"qx/icon/Oxygen/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/mimetypes/text-plain.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/places/folder-open.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/places/folder.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/utilities-color-chooser.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/office-document.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/text-plain.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder-open.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder.png":[16,16,"png","qx"],"qx/icon/Tango/22/mimetypes/office-document.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder-open.png":[22,22,"png","qx","demobrowser/demo/test/combined/icons22.png",0,-44],"qx/icon/Tango/22/places/folder.png":[22,22,"png","qx","demobrowser/demo/test/combined/icons22.png",0,-22],"qx/icon/Tango/32/mimetypes/office-document.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder-open.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder.png":[32,32,"png","qx"]},"translations":{"C":{},"de":{},"de_DE":{},"en":{},"en_US":{},"fr":{},"fr_FR":{}}};
(function(){var m=".prototype",k="Boolean",j="Error",h="Object.keys requires an object as argument.",g="constructor",f="warn",e="default",d="hasOwnProperty",c="string",b="toLocaleString",O="error",N="qx.debug",M="RegExp",L='\", "',K="info",J="BROKEN_IE",I="isPrototypeOf",H="Date",G="qx.Bootstrap",F="]",t="Class",u="[Class ",r="valueOf",s="Number",p="debug",q="ES5",n="propertyIsEnumerable",o="object",v="function",w="Object",z='"',y="",B="()",A="String",D="Function",C="Array",x="toString",E=".";if(!window.qx){window.qx={};}
;qx.Bootstrap={genericToString:function(){return u+this.classname+F;}
,createNamespace:function(name,P){var R=name.split(E);var parent=window;var Q=R[0];for(var i=0,S=R.length-1;i<S;i++ ,Q=R[i]){if(!parent[Q]){parent=parent[Q]={};}
else {parent=parent[Q];}
;}
;parent[Q]=P;return Q;}
,setDisplayName:function(T,U,name){T.displayName=U+E+name+B;}
,setDisplayNames:function(V,W){for(var name in V){var X=V[name];if(X instanceof Function){X.displayName=W+E+name+B;}
;}
;}
,define:function(name,Y){if(!Y){var Y={statics:{}};}
;var be;var bc=null;qx.Bootstrap.setDisplayNames(Y.statics,name);if(Y.members||Y.extend){qx.Bootstrap.setDisplayNames(Y.members,name+m);be=Y.construct||new Function;if(Y.extend){this.extendClass(be,be,Y.extend,name,bd);}
;var ba=Y.statics||{};for(var i=0,bf=qx.Bootstrap.keys(ba),l=bf.length;i<l;i++ ){var bg=bf[i];be[bg]=ba[bg];}
;bc=be.prototype;var bb=Y.members||{};for(var i=0,bf=qx.Bootstrap.keys(bb),l=bf.length;i<l;i++ ){var bg=bf[i];bc[bg]=bb[bg];}
;}
else {be=Y.statics||{};}
;var bd=name?this.createNamespace(name,be):y;be.name=be.classname=name;be.basename=bd;be.$$type=t;if(!be.hasOwnProperty(x)){be.toString=this.genericToString;}
;if(Y.defer){Y.defer(be,bc);}
;qx.Bootstrap.$$registry[name]=be;return be;}
};qx.Bootstrap.define(G,{statics:{LOADSTART:qx.$$start||new Date(),DEBUG:(function(){var bh=true;if(qx.$$environment&&qx.$$environment["qx.debug"]===false){bh=false;}
;return bh;}
)(),getEnvironmentSetting:function(bi){if(qx.$$environment){return qx.$$environment[bi];}
;}
,setEnvironmentSetting:function(bj,bk){if(!qx.$$environment){qx.$$environment={};}
;if(qx.$$environment[bj]===undefined){qx.$$environment[bj]=bk;}
;}
,createNamespace:qx.Bootstrap.createNamespace,define:qx.Bootstrap.define,setDisplayName:qx.Bootstrap.setDisplayName,setDisplayNames:qx.Bootstrap.setDisplayNames,genericToString:qx.Bootstrap.genericToString,extendClass:function(bl,bm,bn,name,bo){var br=bn.prototype;var bq=new Function();bq.prototype=br;var bp=new bq();bl.prototype=bp;bp.name=bp.classname=name;bp.basename=bo;bm.base=bn;bl.superclass=bn;bm.self=bl.constructor=bp.constructor=bl;}
,getByName:function(name){return qx.Bootstrap.$$registry[name];}
,$$registry:{},objectGetLength:function(bs){return qx.Bootstrap.keys(bs).length;}
,objectMergeWith:function(bt,bu,bv){if(bv===undefined){bv=true;}
;for(var bw in bu){if(bv||bt[bw]===undefined){bt[bw]=bu[bw];}
;}
;return bt;}
,__a:[I,d,b,x,r,n,g],getKeys:function(bx){if(qx.Bootstrap.DEBUG){qx.Bootstrap.warn("'qx.Bootstrap.getKeys' is deprecated. "+"Please use the native 'Object.keys()' instead.");}
;return qx.Bootstrap.keys(bx);}
,keys:({"ES5":Object.keys,"BROKEN_IE":function(by){if(by===null||(typeof by!="object"&&typeof by!="function")){throw new TypeError("Object.keys requires an object as argument.");}
;var bz=[];var bB=Object.prototype.hasOwnProperty;for(var bC in by){if(bB.call(by,bC)){bz.push(bC);}
;}
;var bA=qx.Bootstrap.__a;for(var i=0,a=bA,l=a.length;i<l;i++ ){if(bB.call(by,a[i])){bz.push(a[i]);}
;}
;return bz;}
,"default":function(bD){if(bD===null||(typeof bD!=o&&typeof bD!=v)){throw new TypeError(h);}
;var bE=[];var bF=Object.prototype.hasOwnProperty;for(var bG in bD){if(bF.call(bD,bG)){bE.push(bG);}
;}
;return bE;}
})[typeof (Object.keys)==v?q:(function(){for(var bH in {toString:1}){return bH;}
;}
)()!==x?J:e],getKeysAsString:function(bI){if(qx.core.Environment.get(N)){qx.Bootstrap.warn("'qx.Bootstrap.getKeysAsString' is deprecared. "+"Please use 'Object.keys(map).join()' instead.");}
;var bJ=qx.Bootstrap.keys(bI);if(bJ.length==0){return y;}
;return z+bJ.join(L)+z;}
,__b:{"[object String]":A,"[object Array]":C,"[object Object]":w,"[object RegExp]":M,"[object Number]":s,"[object Boolean]":k,"[object Date]":H,"[object Function]":D,"[object Error]":j},bind:function(bK,self,bL){var bM=Array.prototype.slice.call(arguments,2,arguments.length);return function(){var bN=Array.prototype.slice.call(arguments,0,arguments.length);return bK.apply(self,bM.concat(bN));}
;}
,firstUp:function(bO){return bO.charAt(0).toUpperCase()+bO.substr(1);}
,firstLow:function(bP){return bP.charAt(0).toLowerCase()+bP.substr(1);}
,getClass:function(bQ){var bR=Object.prototype.toString.call(bQ);return (qx.Bootstrap.__b[bR]||bR.slice(8,-1));}
,isString:function(bS){return (bS!==null&&(typeof bS===c||qx.Bootstrap.getClass(bS)==A||bS instanceof String||(!!bS&&!!bS.$$isString)));}
,isArray:function(bT){return (bT!==null&&(bT instanceof Array||(bT&&qx.data&&qx.data.IListData&&qx.util.OOUtil.hasInterface(bT.constructor,qx.data.IListData))||qx.Bootstrap.getClass(bT)==C||(!!bT&&!!bT.$$isArray)));}
,isObject:function(bU){return (bU!==undefined&&bU!==null&&qx.Bootstrap.getClass(bU)==w);}
,isFunction:function(bV){return qx.Bootstrap.getClass(bV)==D;}
,$$logs:[],debug:function(bW,bX){qx.Bootstrap.$$logs.push([p,arguments]);}
,info:function(bY,ca){qx.Bootstrap.$$logs.push([K,arguments]);}
,warn:function(cb,cc){qx.Bootstrap.$$logs.push([f,arguments]);}
,error:function(cd,ce){qx.Bootstrap.$$logs.push([O,arguments]);}
,trace:function(cf){}
}});}
)();
(function(){var cI="qx.bom.client.Xml.getSelectSingleNode",cH="qx.bom.client.Stylesheet.getInsertRule",cG="qx.bom.client.Html.getDataset",cF="qx.bom.client.PhoneGap.getPhoneGap",cE="qx.bom.client.EcmaScript.getArrayReduce",cD="qx.bom.client.Html.getAudioAif",cC="qx.bom.client.CssTransform.get3D",cB="qx.bom.client.EcmaScript.getArrayLastIndexOf",cA="qx.debug.dispose",cz="qx.bom.client.EcmaScript.getArrayForEach",bJ="qx.bom.client.Xml.getAttributeNS",bI="qx.bom.client.Stylesheet.getRemoveImport",bH="qx.bom.client.Css.getUserModify",bG="qx.bom.client.Css.getBoxShadow",bF="qx.bom.client.Html.getXul",bE="qx.bom.client.Plugin.getWindowsMedia",bD=":",bC="qx.blankpage",bB="qx.bom.client.Html.getVideo",bA="qx.bom.client.Device.getName",cP="qx.bom.client.Event.getTouch",cQ="qx.optimization.strings",cN="qx.debug.property.level",cO="qx.bom.client.EcmaScript.getArrayFilter",cL="qx.bom.client.EcmaScript.getStringTrim",cM="qx.optimization.variables",cJ="qx.bom.client.EcmaScript.getDateNow",cK="qx.bom.client.EcmaScript.getArrayEvery",cR="qx.bom.client.Xml.getImplementation",cS="qx.bom.client.Html.getConsole",ci="qx.bom.client.Engine.getVersion",ch="qx.bom.client.Plugin.getQuicktime",ck="qx.bom.client.Html.getNaturalDimensions",cj="qx.bom.client.Xml.getSelectNodes",cm="qx.bom.client.Xml.getElementsByTagNameNS",cl="qx.nativeScrollBars",co="qx.bom.client.Html.getDataUrl",cn="qx.bom.client.Flash.isAvailable",cg="qx.bom.client.Html.getCanvas",cf="qx.bom.client.Css.getBoxModel",l="qx.bom.client.Plugin.getSilverlight",m="qx/static/blank.html",n="qx.bom.client.EcmaScript.getArrayMap",o="qx.bom.client.Css.getUserSelect",p="qx.bom.client.Css.getRadialGradient",q="module.property",r="qx.bom.client.Plugin.getWindowsMediaVersion",s="qx.bom.client.Stylesheet.getCreateStyleSheet",t="qx.bom.client.Locale.getLocale",u="module.events",dh="qx.bom.client.Plugin.getSkype",dg="module.databinding",df="qx.bom.client.Html.getFileReader",de="qx.bom.client.Css.getBorderImage",dl="qx.bom.client.Stylesheet.getDeleteRule",dk="qx.bom.client.EcmaScript.getErrorToString",dj="qx.bom.client.Plugin.getDivXVersion",di="qx.bom.client.Scroll.scrollBarOverlayed",dn="qx.bom.client.Plugin.getPdfVersion",dm="qx.bom.client.Xml.getCreateNode",ba="qx.bom.client.Css.getLinearGradient",bb="qx.bom.client.Transport.getXmlHttpRequest",X="qx.bom.client.Css.getBorderImageSyntax",Y="qx.bom.client.Html.getClassList",be="qx.bom.client.Event.getHelp",bf="qx.optimization.comments",bc="qx.bom.client.Locale.getVariant",bd="qx.bom.client.Css.getBoxSizing",V="qx.bom.client.OperatingSystem.getName",W="module.logger",I="qx.bom.client.Css.getOverflowXY",H="qx.mobile.emulatetouch",K="css.overflowxy",J="qx.bom.client.Html.getAudioWav",E="qx.bom.client.Browser.getName",D="qx.bom.client.Css.getInlineBlock",G="qx.bom.client.Plugin.getPdf",F="qx.dynlocale",C="ecmascript.error.stacktrace",B="qx.bom.client.Html.getAudio",bk="qx.core.Environment",bl="qx.bom.client.EcmaScript.getFunctionBind",bm="qx.bom.client.CssTransform.getSupport",bn="qx.bom.client.Html.getTextContent",bg="qx.bom.client.Css.getPlaceholder",bh="qx.bom.client.Css.getFloat",bi="false",bj="qx.bom.client.Css.getFilterGradient",bo="qx.bom.client.Html.getHistoryState",bp="qxenv",S="qx.bom.client.Html.getSessionStorage",R="qx.bom.client.Html.getAudioAu",Q="qx.bom.client.Css.getOpacity",P="qx.bom.client.Css.getFilterTextShadow",O="qx.bom.client.Html.getVml",N="qx.bom.client.Transport.getMaxConcurrentRequestCount",M="qx.bom.client.Event.getHashChange",L="qx.bom.client.Css.getRgba",U="qx.bom.client.Css.getBorderRadius",T="qx.bom.client.Event.getPointer",bq="qx.bom.client.EcmaScript.getArraySome",br="qx.bom.client.Transport.getSsl",bs="qx.bom.client.Html.getWebWorker",bt="qx.bom.client.Json.getJson",bu="qx.bom.client.Browser.getQuirksMode",bv="qx.bom.client.Css.getTextOverflow",bw="qx.bom.client.EcmaScript.getArrayIndexOf",bx="qx.bom.client.Xml.getQualifiedItem",by="qx.bom.client.Html.getVideoOgg",bz="&",bN="qx.bom.client.EcmaScript.getArrayReduceRight",bM="qx.bom.client.Device.getType",bL="qx.bom.client.Browser.getDocumentMode",bK="qx.allowUrlVariants",bR="qx.debug.ui.queue",bQ="qx.bom.client.Html.getContains",bP="qx.bom.client.Plugin.getActiveX",bO=".",bT="qx.bom.client.Xml.getDomProperties",bS="qx.bom.client.CssAnimation.getSupport",cb="qx.debug.databinding",cc="qx.optimization.basecalls",bY="ecmascript.stacktrace",ca="qx.bom.client.Browser.getVersion",bW="qx.bom.client.Css.getUserSelectNone",bX="qx.bom.client.Html.getSvg",bU="qx.bom.client.EcmaScript.getObjectKeys",bV="qx.bom.client.Plugin.getDivX",cd="qx.bom.client.Runtime.getName",ce="qx.bom.client.Html.getLocalStorage",cs="qx.bom.client.Flash.getStrictSecurityModel",cr="qx.aspects",cu="qx.debug",ct="qx.dynamicmousewheel",cw="qx.bom.client.Html.getAudioMp3",cv="qx.bom.client.Engine.getName",cy="qx.bom.client.Html.getUserDataStorage",cx="qx.bom.client.Plugin.getGears",cq="qx.bom.client.Plugin.getQuicktimeVersion",cp="qx.bom.client.Html.getAudioOgg",da="qx.bom.client.Css.getTextShadow",db="qx.bom.client.Plugin.getSilverlightVersion",dc="qx.bom.client.Html.getCompareDocumentPosition",dd="qx.bom.client.Flash.getExpressInstall",cV="qx.bom.client.Html.getSelection",cW="qx.bom.client.OperatingSystem.getVersion",cX="qx.bom.client.Html.getXPath",cY="qx.bom.client.Html.getGeoLocation",cT="qx.optimization.privates",cU="qx.bom.client.Css.getAppearance",k="qx.mobile.nativescroll",j="qx.bom.client.Xml.getDomParser",h="qx.bom.client.Stylesheet.getAddImport",g="qx.optimization.variants",f="qx.bom.client.Html.getVideoWebm",e="qx.bom.client.Flash.getVersion",d="qx.bom.client.CssAnimation.getRequestAnimationFrame",c="qx.bom.client.Css.getLegacyWebkitGradient",b="qx.bom.client.PhoneGap.getNotification",a="qx.bom.client.Html.getVideoH264",x="qx.bom.client.Xml.getCreateElementNS",y="qx.bom.client.EcmaScript.getStackTrace",v="default",w="|",z="true",A="qx.allowUrlSettings";qx.Bootstrap.define(bk,{statics:{_checks:{},_asyncChecks:{},__c:{},_checksMap:{"engine.version":ci,"engine.name":cv,"browser.name":E,"browser.version":ca,"browser.documentmode":bL,"browser.quirksmode":bu,"runtime.name":cd,"device.name":bA,"device.type":bM,"locale":t,"locale.variant":bc,"os.name":V,"os.version":cW,"os.scrollBarOverlayed":di,"plugin.gears":cx,"plugin.activex":bP,"plugin.skype":dh,"plugin.quicktime":ch,"plugin.quicktime.version":cq,"plugin.windowsmedia":bE,"plugin.windowsmedia.version":r,"plugin.divx":bV,"plugin.divx.version":dj,"plugin.silverlight":l,"plugin.silverlight.version":db,"plugin.flash":cn,"plugin.flash.version":e,"plugin.flash.express":dd,"plugin.flash.strictsecurity":cs,"plugin.pdf":G,"plugin.pdf.version":dn,"io.maxrequests":N,"io.ssl":br,"io.xhr":bb,"event.touch":cP,"event.pointer":T,"event.help":be,"event.hashchange":M,"ecmascript.stacktrace":y,"ecmascript.error.stacktrace":y,"ecmascript.array.indexof":bw,"ecmascript.array.lastindexof":cB,"ecmascript.array.foreach":cz,"ecmascript.array.filter":cO,"ecmascript.array.map":n,"ecmascript.array.some":bq,"ecmascript.array.every":cK,"ecmascript.array.reduce":cE,"ecmascript.array.reduceright":bN,"ecmascript.function.bind":bl,"ecmascript.object.keys":bU,"ecmascript.date.now":cJ,"ecmascript.error.toString":dk,"ecmascript.string.trim":cL,"html.webworker":bs,"html.filereader":df,"html.geolocation":cY,"html.audio":B,"html.audio.ogg":cp,"html.audio.mp3":cw,"html.audio.wav":J,"html.audio.au":R,"html.audio.aif":cD,"html.video":bB,"html.video.ogg":by,"html.video.h264":a,"html.video.webm":f,"html.storage.local":ce,"html.storage.session":S,"html.storage.userdata":cy,"html.classlist":Y,"html.xpath":cX,"html.xul":bF,"html.canvas":cg,"html.svg":bX,"html.vml":O,"html.dataset":cG,"html.dataurl":co,"html.console":cS,"html.stylesheet.createstylesheet":s,"html.stylesheet.insertrule":cH,"html.stylesheet.deleterule":dl,"html.stylesheet.addimport":h,"html.stylesheet.removeimport":bI,"html.element.contains":bQ,"html.element.compareDocumentPosition":dc,"html.element.textcontent":bn,"html.image.naturaldimensions":ck,"html.history.state":bo,"html.selection":cV,"json":bt,"css.textoverflow":bv,"css.placeholder":bg,"css.borderradius":U,"css.borderimage":de,"css.borderimage.standardsyntax":X,"css.boxshadow":bG,"css.gradient.linear":ba,"css.gradient.filter":bj,"css.gradient.radial":p,"css.gradient.legacywebkit":c,"css.boxmodel":cf,"css.rgba":L,"css.userselect":o,"css.userselect.none":bW,"css.usermodify":bH,"css.appearance":cU,"css.float":bh,"css.boxsizing":bd,"css.animation":bS,"css.animation.requestframe":d,"css.transform":bm,"css.transform.3d":cC,"css.inlineblock":D,"css.opacity":Q,"css.overflowxy":I,"css.textShadow":da,"css.textShadow.filter":P,"phonegap":cF,"phonegap.notification":b,"xml.implementation":cR,"xml.domparser":j,"xml.selectsinglenode":cI,"xml.selectnodes":cj,"xml.getelementsbytagnamens":cm,"xml.domproperties":bT,"xml.attributens":bJ,"xml.createnode":dm,"xml.getqualifieditem":bx,"xml.createelementns":x},get:function(dp){if(qx.Bootstrap.DEBUG){if(dp==K){qx.Bootstrap.warn("The environment key 'css.overflowxy' is deprecated.");}
;if(dp==bY){qx.Bootstrap.warn("The environment key 'ecmascript.stacktrace' is now 'ecmascript.error.stacktrace'.");dp=C;}
;}
;if(this.__c[dp]!=undefined){return this.__c[dp];}
;var ds=this._checks[dp];if(ds){var dt=ds();this.__c[dp]=dt;return dt;}
;var dr=this._getClassNameFromEnvKey(dp);if(dr[0]!=undefined){var du=dr[0];var dq=dr[1];var dt=du[dq]();this.__c[dp]=dt;return dt;}
;if(qx.Bootstrap.DEBUG){qx.Bootstrap.warn(dp+" is not a valid key. Please see the API-doc of "+"qx.core.Environment for a list of predefined keys.");qx.Bootstrap.trace(this);}
;}
,_getClassNameFromEnvKey:function(dv){var dB=this._checksMap;if(dB[dv]!=undefined){var dx=dB[dv];var dA=dx.lastIndexOf(bO);if(dA>-1){var dz=dx.slice(0,dA);var dw=dx.slice(dA+1);var dy=qx.Bootstrap.getByName(dz);if(dy!=undefined){return [dy,dw];}
;}
;}
;return [undefined,undefined];}
,getAsync:function(dC,dD,self){var dH=this;if(this.__c[dC]!=undefined){window.setTimeout(function(){dD.call(self,dH.__c[dC]);}
,0);return;}
;var dG=this._asyncChecks[dC];if(dG){dG(function(dJ){dH.__c[dC]=dJ;dD.call(self,dJ);}
);return;}
;var dF=this._getClassNameFromEnvKey(dC);if(dF[0]!=undefined){var dI=dF[0];var dE=dF[1];dI[dE](function(dK){dH.__c[dC]=dK;dD.call(self,dK);}
);return;}
;if(qx.Bootstrap.DEBUG){qx.Bootstrap.warn(dC+" is not a valid key. Please see the API-doc of "+"qx.core.Environment for a list of predefined keys.");qx.Bootstrap.trace(this);}
;}
,select:function(dL,dM){return this.__d(this.get(dL),dM);}
,selectAsync:function(dN,dO,self){this.getAsync(dN,function(dP){var dQ=this.__d(dN,dO);dQ.call(self,dP);}
,this);}
,__d:function(dR,dS){var dU=dS[dR];if(dS.hasOwnProperty(dR)){return dU;}
;for(var dT in dS){if(dT.indexOf(w)!=-1){var dV=dT.split(w);for(var i=0;i<dV.length;i++ ){if(dV[i]==dR){return dS[dT];}
;}
;}
;}
;if(dS[v]!==undefined){return dS[v];}
;if(qx.Bootstrap.DEBUG){throw new Error('No match for variant "'+dR+'" ('+(typeof dR)+' type)'+' in variants ['+qx.Bootstrap.keys(dS)+'] found, and no default ("default") given');}
;}
,filter:function(dW){var dY=[];for(var dX in dW){if(this.get(dX)){dY.push(dW[dX]);}
;}
;return dY;}
,invalidateCacheKey:function(ea){delete this.__c[ea];}
,add:function(eb,ec){if(this._checks[eb]==undefined){if(ec instanceof Function){this._checks[eb]=ec;}
else {this._checks[eb]=this.__g(ec);}
;}
;}
,addAsync:function(ed,ee){if(this._checks[ed]==undefined){this._asyncChecks[ed]=ee;}
;}
,getChecks:function(){return this._checks;}
,getAsyncChecks:function(){return this._asyncChecks;}
,_initDefaultQxValues:function(){this.add(z,function(){return true;}
);this.add(A,function(){return false;}
);this.add(bK,function(){return false;}
);this.add(cN,function(){return 0;}
);this.add(cu,function(){return true;}
);this.add(bR,function(){return true;}
);this.add(cr,function(){return false;}
);this.add(F,function(){return true;}
);this.add(H,function(){return false;}
);this.add(k,function(){return false;}
);this.add(bC,function(){return m;}
);this.add(ct,function(){return true;}
);this.add(cb,function(){return false;}
);this.add(cA,function(){return false;}
);this.add(cc,function(){return false;}
);this.add(bf,function(){return false;}
);this.add(cT,function(){return false;}
);this.add(cQ,function(){return false;}
);this.add(cM,function(){return false;}
);this.add(g,function(){return false;}
);this.add(dg,function(){return true;}
);this.add(W,function(){return true;}
);this.add(q,function(){return true;}
);this.add(u,function(){return true;}
);this.add(cl,function(){return false;}
);}
,__e:function(){if(qx&&qx.$$environment){for(var eg in qx.$$environment){var ef=qx.$$environment[eg];this._checks[eg]=this.__g(ef);}
;}
;}
,__f:function(){if(window.document&&window.document.location){var eh=window.document.location.search.slice(1).split(bz);for(var i=0;i<eh.length;i++ ){var ej=eh[i].split(bD);if(ej.length!=3||ej[0]!=bp){continue;}
;var ek=ej[1];var ei=decodeURIComponent(ej[2]);if(ei==z){ei=true;}
else if(ei==bi){ei=false;}
else if(/^(\d|\.)+$/.test(ei)){ei=parseFloat(ei);}
;this._checks[ek]=this.__g(ei);}
;}
;}
,__g:function(el){return qx.Bootstrap.bind(function(em){return em;}
,null,el);}
},defer:function(en){en._initDefaultQxValues();en.__e();if(en.get(A)===true){en.__f();}
;}
});}
)();
(function(){var u="ecmascript.array.lastindexof",t="ecmascript.array.map",s="ecmascript.date.now",r="ecmascript.array.reduce",q="qx.bom.client.EcmaScript",p="ecmascript.object.keys",o="ecmascript.error.stacktrace",n="ecmascript.string.trim",m="ecmascript.array.indexof",l="ecmascript.error.toString",d="[object Error]",k="ecmascript.array.foreach",h="ecmascript.function.bind",c="ecmascript.array.reduceright",b="ecmascript.array.some",g="ecmascript.array.filter",f="ecmascript.array.every",i="stack",a="stacktrace",j="function";qx.Bootstrap.define(q,{statics:{getStackTrace:function(){var v;var e=new Error("e");v=e.stack?i:e.stacktrace?a:null;if(!v){try{throw e;}
catch(w){e=w;}
;}
;return e.stacktrace?a:e.stack?i:null;}
,getArrayIndexOf:function(){return !!Array.prototype.indexOf;}
,getArrayLastIndexOf:function(){return !!Array.prototype.lastIndexOf;}
,getArrayForEach:function(){return !!Array.prototype.forEach;}
,getArrayFilter:function(){return !!Array.prototype.filter;}
,getArrayMap:function(){return !!Array.prototype.map;}
,getArraySome:function(){return !!Array.prototype.some;}
,getArrayEvery:function(){return !!Array.prototype.every;}
,getArrayReduce:function(){return !!Array.prototype.reduce;}
,getArrayReduceRight:function(){return !!Array.prototype.reduceRight;}
,getErrorToString:function(){return typeof Error.prototype.toString==j&&Error.prototype.toString()!==d;}
,getFunctionBind:function(){return typeof Function.prototype.bind===j;}
,getObjectKeys:function(){return !!Object.keys;}
,getDateNow:function(){return !!Date.now;}
,getStringTrim:function(){return typeof String.prototype.trim===j;}
},defer:function(x){qx.core.Environment.add(m,x.getArrayIndexOf);qx.core.Environment.add(u,x.getArrayLastIndexOf);qx.core.Environment.add(k,x.getArrayForEach);qx.core.Environment.add(g,x.getArrayFilter);qx.core.Environment.add(t,x.getArrayMap);qx.core.Environment.add(b,x.getArraySome);qx.core.Environment.add(f,x.getArrayEvery);qx.core.Environment.add(r,x.getArrayReduce);qx.core.Environment.add(c,x.getArrayReduceRight);qx.core.Environment.add(s,x.getDateNow);qx.core.Environment.add(l,x.getErrorToString);qx.core.Environment.add(o,x.getStackTrace);qx.core.Environment.add(h,x.getFunctionBind);qx.core.Environment.add(p,x.getObjectKeys);qx.core.Environment.add(n,x.getStringTrim);}
});}
)();
(function(){var d="qx.lang.normalize.Function",c="ecmascript.function.bind",b="function",a="Function.prototype.bind called on incompatible ";qx.Bootstrap.define(d,{defer:function(){if(!qx.core.Environment.get(c)){var e=Array.prototype.slice;Function.prototype.bind=function(f){var h=this;if(typeof h!=b){throw new TypeError(a+h);}
;var g=e.call(arguments,1);var i=function(){if(this instanceof i){var F=function(){}
;F.prototype=h.prototype;var self=new F;var j=h.apply(self,g.concat(e.call(arguments)));if(Object(j)===j){return j;}
;return self;}
else {return h.apply(f,g.concat(e.call(arguments)));}
;}
;return i;}
;}
;}
});}
)();
(function(){var a="qx.util.OOUtil";qx.Bootstrap.define(a,{statics:{classIsDefined:function(name){return qx.Bootstrap.getByName(name)!==undefined;}
,getPropertyDefinition:function(b,name){while(b){if(b.$$properties&&b.$$properties[name]){return b.$$properties[name];}
;b=b.superclass;}
;return null;}
,hasProperty:function(c,name){return !!qx.util.OOUtil.getPropertyDefinition(c,name);}
,getEventType:function(d,name){var d=d.constructor;while(d.superclass){if(d.$$events&&d.$$events[name]!==undefined){return d.$$events[name];}
;d=d.superclass;}
;return null;}
,supportsEvent:function(e,name){return !!qx.util.OOUtil.getEventType(e,name);}
,getByInterface:function(f,g){var h,i,l;while(f){if(f.$$implements){h=f.$$flatImplements;for(i=0,l=h.length;i<l;i++ ){if(h[i]===g){return f;}
;}
;}
;f=f.superclass;}
;return null;}
,hasInterface:function(j,k){return !!qx.util.OOUtil.getByInterface(j,k);}
,getMixins:function(m){var n=[];while(m){if(m.$$includes){n.push.apply(n,m.$$flatIncludes);}
;m=m.superclass;}
;return n;}
}});}
)();
(function(){var o="ecmascript.array.lastindexof",n="ecmascript.array.map",m="ecmascript.array.filter",k="qx.lang.normalize.Array",j="ecmascript.array.indexof",h="ecmascript.array.reduce",g="ecmascript.array.foreach",f="ecmascript.array.reduceright",e="ecmascript.array.some",d="ecmascript.array.every",a="function",c="Length is 0 and no second argument given",b="First argument is not callable";qx.Bootstrap.define(k,{defer:function(){if(!qx.core.Environment.get(j)){Array.prototype.indexOf=function(p,q){if(q==null){q=0;}
else if(q<0){q=Math.max(0,this.length+q);}
;for(var i=q;i<this.length;i++ ){if(this[i]===p){return i;}
;}
;return -1;}
;}
;if(!qx.core.Environment.get(o)){Array.prototype.lastIndexOf=function(r,s){if(s==null){s=this.length-1;}
else if(s<0){s=Math.max(0,this.length+s);}
;for(var i=s;i>=0;i-- ){if(this[i]===r){return i;}
;}
;return -1;}
;}
;if(!qx.core.Environment.get(g)){Array.prototype.forEach=function(t,u){var l=this.length;for(var i=0;i<l;i++ ){var v=this[i];if(v!==undefined){t.call(u||window,v,i,this);}
;}
;}
;}
;if(!qx.core.Environment.get(m)){Array.prototype.filter=function(w,x){var y=[];var l=this.length;for(var i=0;i<l;i++ ){var z=this[i];if(z!==undefined){if(w.call(x||window,z,i,this)){y.push(this[i]);}
;}
;}
;return y;}
;}
;if(!qx.core.Environment.get(n)){Array.prototype.map=function(A,B){var C=[];var l=this.length;for(var i=0;i<l;i++ ){var D=this[i];if(D!==undefined){C[i]=A.call(B||window,D,i,this);}
;}
;return C;}
;}
;if(!qx.core.Environment.get(e)){Array.prototype.some=function(E,F){var l=this.length;for(var i=0;i<l;i++ ){var G=this[i];if(G!==undefined){if(E.call(F||window,G,i,this)){return true;}
;}
;}
;return false;}
;}
;if(!qx.core.Environment.get(d)){Array.prototype.every=function(H,I){var l=this.length;for(var i=0;i<l;i++ ){var J=this[i];if(J!==undefined){if(!H.call(I||window,J,i,this)){return false;}
;}
;}
;return true;}
;}
;if(!qx.core.Environment.get(h)){Array.prototype.reduce=function(K,L){if(typeof K!==a){throw new TypeError(b);}
;if(L===undefined&&this.length===0){throw new TypeError(c);}
;var M=L===undefined?this[0]:L;for(var i=L===undefined?1:0;i<this.length;i++ ){if(i in this){M=K.call(undefined,M,this[i],i,this);}
;}
;return M;}
;}
;if(!qx.core.Environment.get(f)){Array.prototype.reduceRight=function(N,O){if(typeof N!==a){throw new TypeError(b);}
;if(O===undefined&&this.length===0){throw new TypeError(c);}
;var P=O===undefined?this[this.length-1]:O;for(var i=O===undefined?this.length-2:this.length-1;i>=0;i-- ){if(i in this){P=N.call(undefined,P,this[i],i,this);}
;}
;return P;}
;}
;}
});}
)();
(function(){var t="qx.Mixin",s=".prototype",r="constructor",q="[Mixin ",p="]",o="RegExp",n="members",m="destruct",k="properties",j="Date",d="events",h="statics",g="function",c="Array",b="Mixin",f="qx.debug",e="object";qx.Bootstrap.define(t,{statics:{define:function(name,u){if(u){if(u.include&&!(qx.Bootstrap.getClass(u.include)===c)){u.include=[u.include];}
;if(qx.core.Environment.get(f)){this.__i(name,u);}
;var w=u.statics?u.statics:{};qx.Bootstrap.setDisplayNames(w,name);for(var v in w){if(w[v] instanceof Function){w[v].$$mixin=w;}
;}
;if(u.construct){w.$$constructor=u.construct;qx.Bootstrap.setDisplayName(u.construct,name,r);}
;if(u.include){w.$$includes=u.include;}
;if(u.properties){w.$$properties=u.properties;}
;if(u.members){w.$$members=u.members;qx.Bootstrap.setDisplayNames(u.members,name+s);}
;for(var v in w.$$members){if(w.$$members[v] instanceof Function){w.$$members[v].$$mixin=w;}
;}
;if(u.events){w.$$events=u.events;}
;if(u.destruct){w.$$destructor=u.destruct;qx.Bootstrap.setDisplayName(u.destruct,name,m);}
;}
else {var w={};}
;w.$$type=b;w.name=name;w.toString=this.genericToString;w.basename=qx.Bootstrap.createNamespace(name,w);this.$$registry[name]=w;return w;}
,checkCompatibility:function(x){var A=this.flatten(x);var B=A.length;if(B<2){return true;}
;var E={};var D={};var C={};var z;for(var i=0;i<B;i++ ){z=A[i];for(var y in z.events){if(C[y]){throw new Error('Conflict between mixin "'+z.name+'" and "'+C[y]+'" in member "'+y+'"!');}
;C[y]=z.name;}
;for(var y in z.properties){if(E[y]){throw new Error('Conflict between mixin "'+z.name+'" and "'+E[y]+'" in property "'+y+'"!');}
;E[y]=z.name;}
;for(var y in z.members){if(D[y]){throw new Error('Conflict between mixin "'+z.name+'" and "'+D[y]+'" in member "'+y+'"!');}
;D[y]=z.name;}
;}
;return true;}
,isCompatible:function(F,G){var H=qx.util.OOUtil.getMixins(G);H.push(F);return qx.Mixin.checkCompatibility(H);}
,getByName:function(name){return this.$$registry[name];}
,isDefined:function(name){return this.getByName(name)!==undefined;}
,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);}
,flatten:function(I){if(!I){return [];}
;var J=I.concat();for(var i=0,l=I.length;i<l;i++ ){if(I[i].$$includes){J.push.apply(J,this.flatten(I[i].$$includes));}
;}
;return J;}
,genericToString:function(){return q+this.name+p;}
,$$registry:{},__h:qx.core.Environment.select(f,{"true":{"include":e,"statics":e,"members":e,"properties":e,"events":e,"destruct":g,"construct":g},"default":null}),__i:qx.core.Environment.select(f,{"true":function(name,K){var N=this.__h;for(var M in K){if(!N[M]){throw new Error('The configuration key "'+M+'" in mixin "'+name+'" is not allowed!');}
;if(K[M]==null){throw new Error('Invalid key "'+M+'" in mixin "'+name+'"! The value is undefined/null!');}
;if(N[M]!==null&&typeof K[M]!==N[M]){throw new Error('Invalid type of key "'+M+'" in mixin "'+name+'"! The type of the key must be "'+N[M]+'"!');}
;}
;var L=[h,n,k,d];for(var i=0,l=L.length;i<l;i++ ){var M=L[i];if(K[M]!==undefined&&([c,o,j].indexOf(qx.Bootstrap.getClass(K[M]))!=-1||K[M].classname!==undefined)){throw new Error('Invalid key "'+M+'" in mixin "'+name+'"! The value needs to be a map!');}
;}
;if(K.include){for(var i=0,a=K.include,l=a.length;i<l;i++ ){if(a[i]==null){throw new Error("Includes of mixins must be mixins. The include number '"+(i+1)+"' in mixin '"+name+"'is undefined/null!");}
;if(a[i].$$type!==b){throw new Error("Includes of mixins must be mixins. The include number '"+(i+1)+"' in mixin '"+name+"'is not a mixin!");}
;}
;this.checkCompatibility(K.include);}
;}
,"default":function(name,O){}
})}});}
)();
(function(){var d="qx.core.Aspect",c="before",b="*",a="static";qx.Bootstrap.define(d,{statics:{__j:[],wrap:function(e,f,g){var m=[];var h=[];var l=this.__j;var k;for(var i=0;i<l.length;i++ ){k=l[i];if((k.type==null||g==k.type||k.type==b)&&(k.name==null||e.match(k.name))){k.pos==-1?m.push(k.fcn):h.push(k.fcn);}
;}
;if(m.length===0&&h.length===0){return f;}
;var j=function(){for(var i=0;i<m.length;i++ ){m[i].call(this,e,f,g,arguments);}
;var n=f.apply(this,arguments);for(var i=0;i<h.length;i++ ){h[i].call(this,e,f,g,arguments,n);}
;return n;}
;if(g!==a){j.self=f.self;j.base=f.base;}
;f.wrapper=j;j.original=f;return j;}
,addAdvice:function(o,p,q,name){this.__j.push({fcn:o,pos:p===c?-1:1,type:q,name:name});}
}});}
)();
(function(){var c='',b="ecmascript.string.trim",a="qx.lang.normalize.String";qx.Bootstrap.define(a,{defer:function(){if(!qx.core.Environment.get(b)){String.prototype.trim=function(d){return this.replace(/^\s+|\s+$/g,c);}
;}
;}
});}
)();
(function(){var b="ecmascript.object.keys",a="qx.lang.normalize.Object";qx.Bootstrap.define(a,{defer:function(){if(!qx.core.Environment.get(b)){Object.keys=qx.Bootstrap.keys;}
;}
});}
)();
(function(){var w="string",v="number",u="function",t="Boolean",s="qx.Interface",r="events",q="[Interface ",p="]",o="members",n="properties",e="Date",m="RegExp",h="toggle",d="boolean",c="is",g="statics",f="Array",j="Interface",b="qx.debug",k="object";qx.Bootstrap.define(s,{statics:{define:function(name,x){if(x){if(x.extend&&!(qx.Bootstrap.getClass(x.extend)===f)){x.extend=[x.extend];}
;if(qx.core.Environment.get(b)){this.__i(name,x);}
;var y=x.statics?x.statics:{};if(x.extend){y.$$extends=x.extend;}
;if(x.properties){y.$$properties=x.properties;}
;if(x.members){y.$$members=x.members;}
;if(x.events){y.$$events=x.events;}
;}
else {var y={};}
;y.$$type=j;y.name=name;y.toString=this.genericToString;y.basename=qx.Bootstrap.createNamespace(name,y);qx.Interface.$$registry[name]=y;return y;}
,getByName:function(name){return this.$$registry[name];}
,isDefined:function(name){return this.getByName(name)!==undefined;}
,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);}
,flatten:function(z){if(!z){return [];}
;var A=z.concat();for(var i=0,l=z.length;i<l;i++ ){if(z[i].$$extends){A.push.apply(A,this.flatten(z[i].$$extends));}
;}
;return A;}
,__k:function(B,C,D,E){var I=D.$$members;if(I){for(var H in I){if(qx.Bootstrap.isFunction(I[H])){var G=this.__l(C,H);var F=G||qx.Bootstrap.isFunction(B[H]);if(!F){throw new Error('Implementation of method "'+H+'" is missing in class "'+C.classname+'" required by interface "'+D.name+'"');}
;var J=E===true&&!G&&!qx.util.OOUtil.hasInterface(C,D);if(J){B[H]=this.__o(D,B[H],H,I[H]);}
;}
else {if(typeof B[H]===undefined){if(typeof B[H]!==u){throw new Error('Implementation of member "'+H+'" is missing in class "'+C.classname+'" required by interface "'+D.name+'"');}
;}
;}
;}
;}
;}
,__l:function(K,L){var P=L.match(/^(is|toggle|get|set|reset)(.*)$/);if(!P){return false;}
;var M=qx.Bootstrap.firstLow(P[2]);var N=qx.util.OOUtil.getPropertyDefinition(K,M);if(!N){return false;}
;var O=P[0]==c||P[0]==h;if(O){return qx.util.OOUtil.getPropertyDefinition(K,M).check==t;}
;return true;}
,__m:function(Q,R){if(R.$$properties){for(var S in R.$$properties){if(!qx.util.OOUtil.getPropertyDefinition(Q,S)){throw new Error('The property "'+S+'" is not supported by Class "'+Q.classname+'"!');}
;}
;}
;}
,__n:function(T,U){if(U.$$events){for(var V in U.$$events){if(!qx.util.OOUtil.supportsEvent(T,V)){throw new Error('The event "'+V+'" is not supported by Class "'+T.classname+'"!');}
;}
;}
;}
,assertObject:function(W,X){var ba=W.constructor;this.__k(W,ba,X,false);this.__m(ba,X);this.__n(ba,X);var Y=X.$$extends;if(Y){for(var i=0,l=Y.length;i<l;i++ ){this.assertObject(W,Y[i]);}
;}
;}
,assert:function(bb,bc,bd){this.__k(bb.prototype,bb,bc,bd);this.__m(bb,bc);this.__n(bb,bc);var be=bc.$$extends;if(be){for(var i=0,l=be.length;i<l;i++ ){this.assert(bb,be[i],bd);}
;}
;}
,genericToString:function(){return q+this.name+p;}
,$$registry:{},__o:qx.core.Environment.select(b,{"true":function(bf,bg,bh,bi){function bj(){bi.apply(this,arguments);return bg.apply(this,arguments);}
;bg.wrapper=bj;return bj;}
,"default":function(bk,bl,bm,bn){}
}),__h:qx.core.Environment.select(b,{"true":{"extend":k,"statics":k,"members":k,"properties":k,"events":k},"default":null}),__i:qx.core.Environment.select(b,{"true":function(name,bo){if(qx.core.Environment.get(b)){var br=this.__h;for(var bq in bo){if(br[bq]===undefined){throw new Error('The configuration key "'+bq+'" in class "'+name+'" is not allowed!');}
;if(bo[bq]==null){throw new Error("Invalid key '"+bq+"' in interface '"+name+"'! The value is undefined/null!");}
;if(br[bq]!==null&&typeof bo[bq]!==br[bq]){throw new Error('Invalid type of key "'+bq+'" in interface "'+name+'"! The type of the key must be "'+br[bq]+'"!');}
;}
;var bp=[g,o,n,r];for(var i=0,l=bp.length;i<l;i++ ){var bq=bp[i];if(bo[bq]!==undefined&&([f,m,e].indexOf(qx.Bootstrap.getClass(bo[bq]))!=-1||bo[bq].classname!==undefined)){throw new Error('Invalid key "'+bq+'" in interface "'+name+'"! The value needs to be a map!');}
;}
;if(bo.extend){for(var i=0,a=bo.extend,l=a.length;i<l;i++ ){if(a[i]==null){throw new Error("Extends of interfaces must be interfaces. The extend number '"+i+1+"' in interface '"+name+"' is undefined/null!");}
;if(a[i].$$type!==j){throw new Error("Extends of interfaces must be interfaces. The extend number '"+i+1+"' in interface '"+name+"' is not an interface!");}
;}
;}
;if(bo.statics){for(var bq in bo.statics){if(bq.toUpperCase()!==bq){throw new Error('Invalid key "'+bq+'" in interface "'+name+'"! Static constants must be all uppercase.');}
;switch(typeof bo.statics[bq]){case d:case w:case v:break;default:throw new Error('Invalid key "'+bq+'" in interface "'+name+'"! Static constants must be all of a primitive type.');};}
;}
;}
;}
,"default":function(name,bs){}
})}});}
)();
(function(){var e="qx.lang.normalize.Error",d=": ",c="ecmascript.error.toString",b="Error",a="";qx.Bootstrap.define(e,{defer:function(){if(!qx.core.Environment.get(c)){Error.prototype.toString=function(){var name=this.name||b;var f=this.message||a;if(name===a&&f===a){return b;}
;if(name===a){return f;}
;if(f===a){return name;}
;return name+d+f;}
;}
;}
});}
)();
(function(){var b="qx.lang.normalize.Date",a="ecmascript.date.now";qx.Bootstrap.define(b,{defer:function(){if(!qx.core.Environment.get(a)){Date.now=function(){return +new Date();}
;}
;}
});}
)();
(function(){var bD='qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)',bC='value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)',bB='value !== null && value.nodeType === 9 && value.documentElement',bA='value !== null && value.$$type === "Mixin"',bz='return init;',by='var init=this.',bx='value !== null && value.nodeType === 1 && value.attributes',bw="var parent = this.getLayoutParent();",bv="Error in property ",bu='qx.core.Assert.assertInstance(value, Date, msg) || true',bj="if (!parent) return;",bi=" in method ",bh='qx.core.Assert.assertInstance(value, Error, msg) || true',bg='Undefined value is not allowed!',bf="inherit",be='Is invalid!',bd="MSIE 6.0",bc="': ",bb=" of class ",ba='value !== null && value.nodeType !== undefined',bK='value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',bL="module.events",bI='qx.core.Assert.assertPositiveInteger(value, msg) || true',bJ='if(init==qx.core.Property.$$inherit)init=null;',bG='value !== null && value.$$type === "Interface"',bH='var inherit=prop.$$inherit;',bE="var value = parent.",bF="$$useinit_",bM="(value);",bN='Requires exactly one argument!',bn="$$runtime_",bm="$$user_",bp='qx.core.Assert.assertArray(value, msg) || true',bo='qx.core.Assert.assertPositiveNumber(value, msg) || true',br="Boolean",bq='return value;',bt='if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ',bs='Does not allow any arguments!',bl="()",bk="var a=arguments[0] instanceof Array?arguments[0]:arguments;",b='value !== null && value.$$type === "Theme"',c="())",d='return null;',e='qx.core.Assert.assertObject(value, msg) || true',f='qx.core.Assert.assertString(value, msg) || true',g="if (value===undefined) value = parent.",h='value !== null && value.$$type === "Class"',j='qx.core.Assert.assertFunction(value, msg) || true',k="object",m="$$init_",bR="$$theme_",bQ='qx.core.Assert.assertMap(value, msg) || true',bP='qx.core.Assert.assertNumber(value, msg) || true',bO='Null value is not allowed!',bV='qx.core.Assert.assertInteger(value, msg) || true',bU="rv:1.8.1",bT="shorthand",bS='qx.core.Assert.assertInstance(value, RegExp, msg) || true',bX='value !== null && value.type !== undefined',bW='value !== null && value.document',J='throw new Error("Property ',K="(!this.",H='qx.core.Assert.assertBoolean(value, msg) || true',I="toggle",N="$$inherit_",O=" with incoming value '",L="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));",M="qx.core.Property",F="is",G='Could not change or apply init value after constructing phase!',u="();",t="qx.debug.property.level",w='else ',v='if(this.',q="resetRuntime",p="return this.",s="get",r=";",o="(a[",n=' of an instance of ',T="refresh",U=' is not (yet) ready!");',V="]);",W="resetThemed",P='else if(this.',Q="reset",R="setRuntime",S="init",X="set",Y="setThemed",E='!==undefined)',D="this.",C="qx.debug",B="",A='return this.',z="string",y="boolean",x=';';qx.Bootstrap.define(M,{statics:{__p:function(){if(qx.core.Environment.get(bL)){qx.event.type.Data;qx.event.dispatch.Direct;}
;}
,__q:{"Boolean":H,"String":f,"Number":bP,"Integer":bV,"PositiveNumber":bo,"PositiveInteger":bI,"Error":bh,"RegExp":bS,"Object":e,"Array":bp,"Map":bQ,"Function":j,"Date":bu,"Node":ba,"Element":bx,"Document":bB,"Window":bW,"Event":bX,"Class":h,"Mixin":bA,"Interface":bG,"Theme":b,"Color":bD,"Decorator":bK,"Font":bC},__r:{"Node":true,"Element":true,"Document":true,"Window":true,"Event":true},$$inherit:bf,$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},set:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{name:z,dereference:y,inheritable:y,nullable:y,themeable:y,refine:y,init:null,apply:z,event:z,check:null,transform:z,deferredInit:y,validate:null},$$allowedGroupKeys:{name:z,group:k,mode:z,themeable:y},$$inheritable:{},__s:function(bY){var ca=this.__t(bY);if(!ca.length){var cb=function(){}
;}
else {cb=this.__u(ca);}
;bY.prototype.$$refreshInheritables=cb;}
,__t:function(cc){var ce=[];while(cc){var cd=cc.$$properties;if(cd){for(var name in this.$$inheritable){if(cd[name]&&cd[name].inheritable){ce.push(name);}
;}
;}
;cc=cc.superclass;}
;return ce;}
,__u:function(cf){var cj=this.$$store.inherit;var ci=this.$$store.init;var ch=this.$$method.refresh;var cg=[bw,bj];for(var i=0,l=cf.length;i<l;i++ ){var name=cf[i];cg.push(bE,cj[name],r,g,ci[name],r,D,ch[name],bM);}
;return new Function(cg.join(B));}
,attachRefreshInheritables:function(ck){ck.prototype.$$refreshInheritables=function(){qx.core.Property.__s(ck);return this.$$refreshInheritables();}
;}
,attachMethods:function(cl,name,cm){cm.group?this.__v(cl,cm,name):this.__w(cl,cm,name);}
,__v:function(cn,co,name){var cv=qx.Bootstrap.firstUp(name);var cu=cn.prototype;var cw=co.themeable===true;if(qx.core.Environment.get(C)){if(qx.core.Environment.get(t)>1){qx.Bootstrap.debug("Generating property group: "+name);}
;}
;var cx=[];var cr=[];if(cw){var cp=[];var ct=[];}
;var cs=bk;cx.push(cs);if(cw){cp.push(cs);}
;if(co.mode==bT){var cq=L;cx.push(cq);if(cw){cp.push(cq);}
;}
;for(var i=0,a=co.group,l=a.length;i<l;i++ ){if(qx.core.Environment.get(C)){if(!this.$$method.set[a[i]]||!this.$$method.reset[a[i]]){throw new Error("Cannot create property group '"+name+"' including non-existing property '"+a[i]+"'!");}
;}
;cx.push(D,this.$$method.set[a[i]],o,i,V);cr.push(D,this.$$method.reset[a[i]],u);if(cw){if(qx.core.Environment.get(C)){if(!this.$$method.setThemed[a[i]]){throw new Error("Cannot add the non themable property '"+a[i]+"' to the themable property group '"+name+"'");}
;}
;cp.push(D,this.$$method.setThemed[a[i]],o,i,V);ct.push(D,this.$$method.resetThemed[a[i]],u);}
;}
;this.$$method.set[name]=X+cv;cu[this.$$method.set[name]]=new Function(cx.join(B));this.$$method.reset[name]=Q+cv;cu[this.$$method.reset[name]]=new Function(cr.join(B));if(cw){this.$$method.setThemed[name]=Y+cv;cu[this.$$method.setThemed[name]]=new Function(cp.join(B));this.$$method.resetThemed[name]=W+cv;cu[this.$$method.resetThemed[name]]=new Function(ct.join(B));}
;}
,__w:function(cy,cz,name){var cB=qx.Bootstrap.firstUp(name);var cD=cy.prototype;if(qx.core.Environment.get(C)){if(qx.core.Environment.get(t)>1){qx.Bootstrap.debug("Generating property wrappers: "+name);}
;}
;if(cz.dereference===undefined&&typeof cz.check===z){cz.dereference=this.__x(cz.check);}
;var cC=this.$$method;var cA=this.$$store;cA.runtime[name]=bn+name;cA.user[name]=bm+name;cA.theme[name]=bR+name;cA.init[name]=m+name;cA.inherit[name]=N+name;cA.useinit[name]=bF+name;cC.get[name]=s+cB;cD[cC.get[name]]=function(){return qx.core.Property.executeOptimizedGetter(this,cy,name,s);}
;cC.set[name]=X+cB;cD[cC.set[name]]=function(cE){return qx.core.Property.executeOptimizedSetter(this,cy,name,X,arguments);}
;cC.reset[name]=Q+cB;cD[cC.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,cy,name,Q);}
;if(cz.inheritable||cz.apply||cz.event||cz.deferredInit){cC.init[name]=S+cB;cD[cC.init[name]]=function(cF){return qx.core.Property.executeOptimizedSetter(this,cy,name,S,arguments);}
;}
;if(cz.inheritable){cC.refresh[name]=T+cB;cD[cC.refresh[name]]=function(cG){return qx.core.Property.executeOptimizedSetter(this,cy,name,T,arguments);}
;}
;cC.setRuntime[name]=R+cB;cD[cC.setRuntime[name]]=function(cH){return qx.core.Property.executeOptimizedSetter(this,cy,name,R,arguments);}
;cC.resetRuntime[name]=q+cB;cD[cC.resetRuntime[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,cy,name,q);}
;if(cz.themeable){cC.setThemed[name]=Y+cB;cD[cC.setThemed[name]]=function(cI){return qx.core.Property.executeOptimizedSetter(this,cy,name,Y,arguments);}
;cC.resetThemed[name]=W+cB;cD[cC.resetThemed[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,cy,name,W);}
;}
;if(cz.check===br){cD[I+cB]=new Function(p+cC.set[name]+K+cC.get[name]+c);cD[F+cB]=new Function(p+cC.get[name]+bl);}
;}
,__x:function(cJ){return !!this.__r[cJ];}
,__y:function(cK){return this.__r[cK]||qx.util.OOUtil.classIsDefined(cK)||(qx.Interface&&qx.Interface.isDefined(cK));}
,__z:{'0':G,'1':bN,'2':bg,'3':bs,'4':bO,'5':be},error:function(cL,cM,cN,cO,cP){var cQ=cL.constructor.classname;var cR=bv+cN+bb+cQ+bi+this.$$method[cO][cN]+O+cP+bc;throw new Error(cR+(this.__z[cM]||"Unknown reason: "+cM));}
,__A:function(cS,cT,name,cU,cV,cW){var cX=this.$$method[cU][name];if(qx.core.Environment.get("qx.debug")){if(qx.core.Environment.get("qx.debug.property.level")>1){qx.Bootstrap.debug("Code["+this.$$method[cU][name]+"]: "+cV.join(""));}
;try{cT[cX]=new Function("value",cV.join(""));}
catch(cY){throw new Error("Malformed generated code to unwrap method: "+this.$$method[cU][name]+"\n"+cV.join(""));}
;}
else {cT[cX]=new Function("value",cV.join(""));}
;if(qx.core.Environment.get("qx.aspects")){cT[cX]=qx.core.Aspect.wrap(cS.classname+"."+cX,cT[cX],"property");}
;qx.Bootstrap.setDisplayName(cT[cX],cS.classname+".prototype",cX);if(cW===undefined){return cS[cX]();}
else if(qx.core.Environment.get("qx.debug")){return cS[cX].apply(cS,cW);}
else {return cS[cX](cW[0]);}
;}
,executeOptimizedGetter:function(da,db,name,dc){var de=db.$$properties[name];var dg=db.prototype;var dd=[];var df=this.$$store;dd.push(v,df.runtime[name],E);dd.push(A,df.runtime[name],x);if(de.inheritable){dd.push(P,df.inherit[name],E);dd.push(A,df.inherit[name],x);dd.push(w);}
;dd.push(v,df.user[name],E);dd.push(A,df.user[name],x);if(de.themeable){dd.push(P,df.theme[name],E);dd.push(A,df.theme[name],x);}
;if(de.deferredInit&&de.init===undefined){dd.push(P,df.init[name],E);dd.push(A,df.init[name],x);}
;dd.push(w);if(de.init!==undefined){if(de.inheritable){dd.push(by,df.init[name],x);if(de.nullable){dd.push(bJ);}
else if(de.init!==undefined){dd.push(A,df.init[name],x);}
else {dd.push(bt,name,n,db.classname,U);}
;dd.push(bz);}
else {dd.push(A,df.init[name],x);}
;}
else if(de.inheritable||de.nullable){dd.push(d);}
else {dd.push(J,name,n,db.classname,U);}
;return this.__A(da,dg,name,dc,dd);}
,executeOptimizedSetter:function(dh,di,name,dj,dk){var dq=di.$$properties[name];var dp=di.prototype;var dm=[];var dl=dj===X||dj===Y||dj===R||(dj===S&&dq.init===undefined);var dn=dq.apply||dq.event||dq.inheritable;var dr=this.__B(dj,name);this.__C(dm,dq,name,dj,dl);if(dl){this.__D(dm,di,dq,name);}
;if(dn){this.__E(dm,dl,dr,dj);}
;if(dq.inheritable){dm.push(bH);}
;if(qx.core.Environment.get(C)){if(dl){this.__F(dm,dq,di,name,dj);}
;}
;if(!dn){this.__G(dm,name,dj,dl);}
else {this.__H(dm,dq,name,dj,dl);}
;if(dq.inheritable){this.__I(dm,dq,name,dj);}
else if(dn){this.__J(dm,dq,name,dj);}
;if(dn){this.__K(dm,dq,name,dj);if(dq.inheritable&&dp._getChildren){this.__L(dm,name);}
;}
;if(dl){dm.push(bq);}
;return this.__A(dh,dp,name,dj,dm,dk);}
,__B:function(ds,name){if(ds==="setRuntime"||ds==="resetRuntime"){var dt=this.$$store.runtime[name];}
else if(ds==="setThemed"||ds==="resetThemed"){dt=this.$$store.theme[name];}
else if(ds==="init"){dt=this.$$store.init[name];}
else {dt=this.$$store.user[name];}
;return dt;}
,__C:function(du,dv,name,dw,dx){if(qx.core.Environment.get("qx.debug")){du.push('var prop=qx.core.Property;');if(dw==="init"){du.push('if(this.$$initialized)prop.error(this,0,"',name,'","',dw,'",value);');}
;if(dw==="refresh"){}
else if(dx){du.push('if(arguments.length!==1)prop.error(this,1,"',name,'","',dw,'",value);');du.push('if(value===undefined)prop.error(this,2,"',name,'","',dw,'",value);');}
else {du.push('if(arguments.length!==0)prop.error(this,3,"',name,'","',dw,'",value);');}
;}
else {if(!dv.nullable||dv.check||dv.inheritable){du.push('var prop=qx.core.Property;');}
;if(dw==="set"){du.push('if(value===undefined)prop.error(this,2,"',name,'","',dw,'",value);');}
;}
;}
,__D:function(dy,dz,dA,name){if(dA.transform){dy.push('value=this.',dA.transform,'(value);');}
;if(dA.validate){if(typeof dA.validate==="string"){dy.push('this.',dA.validate,'(value);');}
else if(dA.validate instanceof Function){dy.push(dz.classname,'.$$properties.',name);dy.push('.validate.call(this, value);');}
;}
;}
,__E:function(dB,dC,dD,dE){var dF=(dE==="reset"||dE==="resetThemed"||dE==="resetRuntime");if(dC){dB.push('if(this.',dD,'===value)return value;');}
else if(dF){dB.push('if(this.',dD,'===undefined)return;');}
;}
,__F:qx.core.Environment.select("qx.debug",{"true":function(dG,dH,dI,name,dJ){if(!dH.nullable){dG.push('if(value===null)prop.error(this,4,"',name,'","',dJ,'",value);');}
;if(dH.check!==undefined){dG.push('var msg = "Invalid incoming value for property \''+name+'\' of class \''+dI.classname+'\'";');if(dH.nullable){dG.push('if(value!==null)');}
;if(dH.inheritable){dG.push('if(value!==inherit)');}
;dG.push('if(');if(this.__q[dH.check]!==undefined){dG.push('!(',this.__q[dH.check],')');}
else if(qx.Class.isDefined(dH.check)){dG.push('qx.core.Assert.assertInstance(value, qx.Class.getByName("',dH.check,'"), msg)');}
else if(qx.Interface&&qx.Interface.isDefined(dH.check)){dG.push('qx.core.Assert.assertInterface(value, qx.Interface.getByName("',dH.check,'"), msg)');}
else if(typeof dH.check==="function"){dG.push('!',dI.classname,'.$$properties.',name);dG.push('.check.call(this, value)');}
else if(typeof dH.check==="string"){dG.push('!(',dH.check,')');}
else if(dH.check instanceof Array){dG.push('qx.core.Assert.assertInArray(value, ',dI.classname,'.$$properties.',name,'.check, msg)');}
else {throw new Error("Could not add check to property "+name+" of class "+dI.classname);}
;dG.push(')prop.error(this,5,"',name,'","',dJ,'",value);');}
;}
,"false":undefined}),__G:function(dK,name,dL,dM){if(dL==="setRuntime"){dK.push('this.',this.$$store.runtime[name],'=value;');}
else if(dL==="resetRuntime"){dK.push('if(this.',this.$$store.runtime[name],'!==undefined)');dK.push('delete this.',this.$$store.runtime[name],';');}
else if(dL==="set"){dK.push('this.',this.$$store.user[name],'=value;');}
else if(dL==="reset"){dK.push('if(this.',this.$$store.user[name],'!==undefined)');dK.push('delete this.',this.$$store.user[name],';');}
else if(dL==="setThemed"){dK.push('this.',this.$$store.theme[name],'=value;');}
else if(dL==="resetThemed"){dK.push('if(this.',this.$$store.theme[name],'!==undefined)');dK.push('delete this.',this.$$store.theme[name],';');}
else if(dL==="init"&&dM){dK.push('this.',this.$$store.init[name],'=value;');}
;}
,__H:function(dN,dO,name,dP,dQ){if(dO.inheritable){dN.push('var computed, old=this.',this.$$store.inherit[name],';');}
else {dN.push('var computed, old;');}
;dN.push('if(this.',this.$$store.runtime[name],'!==undefined){');if(dP==="setRuntime"){dN.push('computed=this.',this.$$store.runtime[name],'=value;');}
else if(dP==="resetRuntime"){dN.push('delete this.',this.$$store.runtime[name],';');dN.push('if(this.',this.$$store.user[name],'!==undefined)');dN.push('computed=this.',this.$$store.user[name],';');dN.push('else if(this.',this.$$store.theme[name],'!==undefined)');dN.push('computed=this.',this.$$store.theme[name],';');dN.push('else if(this.',this.$$store.init[name],'!==undefined){');dN.push('computed=this.',this.$$store.init[name],';');dN.push('this.',this.$$store.useinit[name],'=true;');dN.push('}');}
else {dN.push('old=computed=this.',this.$$store.runtime[name],';');if(dP==="set"){dN.push('this.',this.$$store.user[name],'=value;');}
else if(dP==="reset"){dN.push('delete this.',this.$$store.user[name],';');}
else if(dP==="setThemed"){dN.push('this.',this.$$store.theme[name],'=value;');}
else if(dP==="resetThemed"){dN.push('delete this.',this.$$store.theme[name],';');}
else if(dP==="init"&&dQ){dN.push('this.',this.$$store.init[name],'=value;');}
;}
;dN.push('}');dN.push('else if(this.',this.$$store.user[name],'!==undefined){');if(dP==="set"){if(!dO.inheritable){dN.push('old=this.',this.$$store.user[name],';');}
;dN.push('computed=this.',this.$$store.user[name],'=value;');}
else if(dP==="reset"){if(!dO.inheritable){dN.push('old=this.',this.$$store.user[name],';');}
;dN.push('delete this.',this.$$store.user[name],';');dN.push('if(this.',this.$$store.runtime[name],'!==undefined)');dN.push('computed=this.',this.$$store.runtime[name],';');dN.push('if(this.',this.$$store.theme[name],'!==undefined)');dN.push('computed=this.',this.$$store.theme[name],';');dN.push('else if(this.',this.$$store.init[name],'!==undefined){');dN.push('computed=this.',this.$$store.init[name],';');dN.push('this.',this.$$store.useinit[name],'=true;');dN.push('}');}
else {if(dP==="setRuntime"){dN.push('computed=this.',this.$$store.runtime[name],'=value;');}
else if(dO.inheritable){dN.push('computed=this.',this.$$store.user[name],';');}
else {dN.push('old=computed=this.',this.$$store.user[name],';');}
;if(dP==="setThemed"){dN.push('this.',this.$$store.theme[name],'=value;');}
else if(dP==="resetThemed"){dN.push('delete this.',this.$$store.theme[name],';');}
else if(dP==="init"&&dQ){dN.push('this.',this.$$store.init[name],'=value;');}
;}
;dN.push('}');if(dO.themeable){dN.push('else if(this.',this.$$store.theme[name],'!==undefined){');if(!dO.inheritable){dN.push('old=this.',this.$$store.theme[name],';');}
;if(dP==="setRuntime"){dN.push('computed=this.',this.$$store.runtime[name],'=value;');}
else if(dP==="set"){dN.push('computed=this.',this.$$store.user[name],'=value;');}
else if(dP==="setThemed"){dN.push('computed=this.',this.$$store.theme[name],'=value;');}
else if(dP==="resetThemed"){dN.push('delete this.',this.$$store.theme[name],';');dN.push('if(this.',this.$$store.init[name],'!==undefined){');dN.push('computed=this.',this.$$store.init[name],';');dN.push('this.',this.$$store.useinit[name],'=true;');dN.push('}');}
else if(dP==="init"){if(dQ){dN.push('this.',this.$$store.init[name],'=value;');}
;dN.push('computed=this.',this.$$store.theme[name],';');}
else if(dP==="refresh"){dN.push('computed=this.',this.$$store.theme[name],';');}
;dN.push('}');}
;dN.push('else if(this.',this.$$store.useinit[name],'){');if(!dO.inheritable){dN.push('old=this.',this.$$store.init[name],';');}
;if(dP==="init"){if(dQ){dN.push('computed=this.',this.$$store.init[name],'=value;');}
else {dN.push('computed=this.',this.$$store.init[name],';');}
;}
else if(dP==="set"||dP==="setRuntime"||dP==="setThemed"||dP==="refresh"){dN.push('delete this.',this.$$store.useinit[name],';');if(dP==="setRuntime"){dN.push('computed=this.',this.$$store.runtime[name],'=value;');}
else if(dP==="set"){dN.push('computed=this.',this.$$store.user[name],'=value;');}
else if(dP==="setThemed"){dN.push('computed=this.',this.$$store.theme[name],'=value;');}
else if(dP==="refresh"){dN.push('computed=this.',this.$$store.init[name],';');}
;}
;dN.push('}');if(dP==="set"||dP==="setRuntime"||dP==="setThemed"||dP==="init"){dN.push('else{');if(dP==="setRuntime"){dN.push('computed=this.',this.$$store.runtime[name],'=value;');}
else if(dP==="set"){dN.push('computed=this.',this.$$store.user[name],'=value;');}
else if(dP==="setThemed"){dN.push('computed=this.',this.$$store.theme[name],'=value;');}
else if(dP==="init"){if(dQ){dN.push('computed=this.',this.$$store.init[name],'=value;');}
else {dN.push('computed=this.',this.$$store.init[name],';');}
;dN.push('this.',this.$$store.useinit[name],'=true;');}
;dN.push('}');}
;}
,__I:function(dR,dS,name,dT){dR.push('if(computed===undefined||computed===inherit){');if(dT==="refresh"){dR.push('computed=value;');}
else {dR.push('var pa=this.getLayoutParent();if(pa)computed=pa.',this.$$store.inherit[name],';');}
;dR.push('if((computed===undefined||computed===inherit)&&');dR.push('this.',this.$$store.init[name],'!==undefined&&');dR.push('this.',this.$$store.init[name],'!==inherit){');dR.push('computed=this.',this.$$store.init[name],';');dR.push('this.',this.$$store.useinit[name],'=true;');dR.push('}else{');dR.push('delete this.',this.$$store.useinit[name],';}');dR.push('}');dR.push('if(old===computed)return value;');dR.push('if(computed===inherit){');dR.push('computed=undefined;delete this.',this.$$store.inherit[name],';');dR.push('}');dR.push('else if(computed===undefined)');dR.push('delete this.',this.$$store.inherit[name],';');dR.push('else this.',this.$$store.inherit[name],'=computed;');dR.push('var backup=computed;');if(dS.init!==undefined&&dT!=="init"){dR.push('if(old===undefined)old=this.',this.$$store.init[name],";");}
else {dR.push('if(old===undefined)old=null;');}
;dR.push('if(computed===undefined||computed==inherit)computed=null;');}
,__J:function(dU,dV,name,dW){if(dW!=="set"&&dW!=="setRuntime"&&dW!=="setThemed"){dU.push('if(computed===undefined)computed=null;');}
;dU.push('if(old===computed)return value;');if(dV.init!==undefined&&dW!=="init"){dU.push('if(old===undefined)old=this.',this.$$store.init[name],";");}
else {dU.push('if(old===undefined)old=null;');}
;}
,__K:function(dX,dY,name,ea){if(dY.apply){dX.push('this.',dY.apply,'(computed, old, "',name,'", "',ea,'");');}
;if(dY.event){dX.push("var reg=qx.event.Registration;","if(reg.hasListener(this, '",dY.event,"')){","reg.fireEvent(this, '",dY.event,"', qx.event.type.Data, [computed, old]",")}");}
;}
,__L:function(eb,name){eb.push('var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){');eb.push('if(a[i].',this.$$method.refresh[name],')a[i].',this.$$method.refresh[name],'(backup);');eb.push('}');}
},defer:function(ec){var ee=navigator.userAgent.indexOf(bd)!=-1;var ed=navigator.userAgent.indexOf(bU)!=-1;if(ee||ed){ec.__x=ec.__y;}
;}
});}
)();
(function(){var m="constructor",k="environment",j="extend",h="string",g="members",f="variants",e="properties",d="statics",c="events",b="]",B="Interface",A="qx.Class",z="Mixin",y="settings",x='Assumed static class because no "extend" key was found. ',w="[Class ",v="singleton",u="qx.aspects",t="abstract",s="function",q="Array",r="static",o="object",p=".",n="qx.debug";qx.Bootstrap.define(A,{statics:{__M:qx.core.Environment.get("module.property")?qx.core.Property:null,define:function(name,C){if(!C){C={};}
;if(C.include&&!(qx.Bootstrap.getClass(C.include)===q)){C.include=[C.include];}
;if(C.implement&&!(qx.Bootstrap.getClass(C.implement)===q)){C.implement=[C.implement];}
;var D=false;if(!C.hasOwnProperty(j)&&!C.type){C.type=r;D=true;}
;if(qx.core.Environment.get(n)){try{this.__i(name,C);}
catch(G){if(D){G.message=x+G.message;}
;throw G;}
;}
;var F=this.__P(name,C.type,C.extend,C.statics,C.construct,C.destruct,C.include);if(C.extend){if(C.properties){this.__R(F,C.properties,true);}
;if(C.members){this.__T(F,C.members,true,true,false);}
;if(C.events){this.__Q(F,C.events,true);}
;if(C.include){for(var i=0,l=C.include.length;i<l;i++ ){this.__X(F,C.include[i],false);}
;}
;}
;if(C.environment){for(var E in C.environment){qx.core.Environment.add(E,C.environment[E]);}
;}
;if(C.implement){for(var i=0,l=C.implement.length;i<l;i++ ){this.__V(F,C.implement[i]);}
;}
;if(qx.core.Environment.get(n)){this.__O(F);}
;if(C.defer){C.defer.self=F;C.defer(F,F.prototype,{add:function(name,H){var I={};I[name]=H;qx.Class.__R(F,I,true);}
});}
;return F;}
,undefine:function(name){delete this.$$registry[name];var J=name.split(p);var L=[window];for(var i=0;i<J.length;i++ ){L.push(L[i][J[i]]);}
;for(var i=L.length-1;i>=1;i-- ){var K=L[i];var parent=L[i-1];if(qx.Bootstrap.isFunction(K)||qx.Bootstrap.objectGetLength(K)===0){delete parent[J[i-1]];}
else {break;}
;}
;}
,isDefined:qx.util.OOUtil.classIsDefined,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);}
,getByName:qx.Bootstrap.getByName,include:function(M,N){if(qx.core.Environment.get(n)){if(!N){throw new Error("The mixin to include into class '"+M.classname+"' is undefined/null!");}
;qx.Mixin.isCompatible(N,M);}
;qx.Class.__X(M,N,false);}
,patch:function(O,P){if(qx.core.Environment.get(n)){if(!P){throw new Error("The mixin to patch class '"+O.classname+"' is undefined/null!");}
;qx.Mixin.isCompatible(P,O);}
;qx.Class.__X(O,P,true);}
,isSubClassOf:function(Q,R){if(!Q){return false;}
;if(Q==R){return true;}
;if(Q.prototype instanceof R){return true;}
;return false;}
,getPropertyDefinition:qx.util.OOUtil.getPropertyDefinition,getProperties:function(S){var T=[];while(S){if(S.$$properties){T.push.apply(T,Object.keys(S.$$properties));}
;S=S.superclass;}
;return T;}
,getByProperty:function(U,name){while(U){if(U.$$properties&&U.$$properties[name]){return U;}
;U=U.superclass;}
;return null;}
,hasProperty:qx.util.OOUtil.hasProperty,getEventType:qx.util.OOUtil.getEventType,supportsEvent:qx.util.OOUtil.supportsEvent,hasOwnMixin:function(V,W){return V.$$includes&&V.$$includes.indexOf(W)!==-1;}
,getByMixin:function(X,Y){var ba,i,l;while(X){if(X.$$includes){ba=X.$$flatIncludes;for(i=0,l=ba.length;i<l;i++ ){if(ba[i]===Y){return X;}
;}
;}
;X=X.superclass;}
;return null;}
,getMixins:qx.util.OOUtil.getMixins,hasMixin:function(bb,bc){return !!this.getByMixin(bb,bc);}
,hasOwnInterface:function(bd,be){return bd.$$implements&&bd.$$implements.indexOf(be)!==-1;}
,getByInterface:qx.util.OOUtil.getByInterface,getInterfaces:function(bf){var bg=[];while(bf){if(bf.$$implements){bg.push.apply(bg,bf.$$flatImplements);}
;bf=bf.superclass;}
;return bg;}
,hasInterface:qx.util.OOUtil.hasInterface,implementsInterface:function(bh,bi){var bj=bh.constructor;if(this.hasInterface(bj,bi)){return true;}
;try{qx.Interface.assertObject(bh,bi);return true;}
catch(bk){}
;try{qx.Interface.assert(bj,bi,false);return true;}
catch(bl){}
;return false;}
,getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;this.$$instance=new this();delete this.$$allowconstruct;}
;return this.$$instance;}
,genericToString:function(){return w+this.classname+b;}
,$$registry:qx.Bootstrap.$$registry,__h:qx.core.Environment.select(n,{"true":{"type":h,"extend":s,"implement":o,"include":o,"construct":s,"statics":o,"properties":o,"members":o,"environment":o,"events":o,"defer":s,"destruct":s},"default":null}),__N:qx.core.Environment.select("qx.debug",{"true":{"type":"string","statics":"object","environment":"object","defer":"function"},"default":null}),__i:qx.core.Environment.select(n,{"true":function(name,bm){if(bm.type&&!(bm.type===r||bm.type===t||bm.type===v)){throw new Error('Invalid type "'+bm.type+'" definition for class "'+name+'"!');}
;if(bm.type&&bm.type!==r&&!bm.extend){throw new Error('Invalid config in class "'+name+'"! Every non-static class has to extend at least the "qx.core.Object" class.');}
;var bp=bm.type===r?this.__N:this.__h;for(var bo in bm){if(!bp[bo]){throw new Error('The configuration key "'+bo+'" in class "'+name+'" is not allowed!');}
;if(bm[bo]==null){throw new Error('Invalid key "'+bo+'" in class "'+name+'"! The value is undefined/null!');}
;if(typeof bm[bo]!==bp[bo]){throw new Error('Invalid type of key "'+bo+'" in class "'+name+'"! The type of the key must be "'+bp[bo]+'"!');}
;}
;var bn=[d,e,g,k,y,f,c];for(var i=0,l=bn.length;i<l;i++ ){var bo=bn[i];if(bm[bo]!==undefined&&(bm[bo].$$hash!==undefined||!qx.Bootstrap.isObject(bm[bo]))){throw new Error('Invalid key "'+bo+'" in class "'+name+'"! The value needs to be a map!');}
;}
;if(bm.include){if(qx.Bootstrap.getClass(bm.include)===q){for(var i=0,a=bm.include,l=a.length;i<l;i++ ){if(a[i]==null||a[i].$$type!==z){throw new Error('The include definition in class "'+name+'" contains an invalid mixin at position '+i+': '+a[i]);}
;}
;}
else {throw new Error('Invalid include definition in class "'+name+'"! Only mixins and arrays of mixins are allowed!');}
;}
;if(bm.implement){if(qx.Bootstrap.getClass(bm.implement)===q){for(var i=0,a=bm.implement,l=a.length;i<l;i++ ){if(a[i]==null||a[i].$$type!==B){throw new Error('The implement definition in class "'+name+'" contains an invalid interface at position '+i+': '+a[i]);}
;}
;}
else {throw new Error('Invalid implement definition in class "'+name+'"! Only interfaces and arrays of interfaces are allowed!');}
;}
;if(bm.include){try{qx.Mixin.checkCompatibility(bm.include);}
catch(bq){throw new Error('Error in include definition of class "'+name+'"! '+bq.message);}
;}
;if(bm.environment){for(var bo in bm.environment){if(bo.substr(0,bo.indexOf(p))!=name.substr(0,name.indexOf(p))){throw new Error('Forbidden environment setting "'+bo+'" found in "'+name+'". It is forbidden to define a '+'environment setting for an external namespace!');}
;}
;}
;if(bm.settings){for(var bo in bm.settings){if(bo.substr(0,bo.indexOf(p))!=name.substr(0,name.indexOf(p))){throw new Error('Forbidden setting "'+bo+'" found in "'+name+'". It is forbidden to define a default setting for an external namespace!');}
;}
;}
;if(bm.variants){for(var bo in bm.variants){if(bo.substr(0,bo.indexOf(p))!=name.substr(0,name.indexOf(p))){throw new Error('Forbidden variant "'+bo+'" found in "'+name+'". It is forbidden to define a variant for an external namespace!');}
;}
;}
;}
,"default":function(name,br){}
}),__O:qx.core.Environment.select("qx.debug",{"true":function(bs){var bu=bs.superclass;while(bu){if(bu.$$classtype!=="abstract"){break;}
;var bt=bu.$$implements;if(bt){for(var i=0;i<bt.length;i++ ){qx.Interface.assert(bs,bt[i],true);}
;}
;bu=bu.superclass;}
;}
,"default":function(bv){}
}),__P:function(name,bw,bx,by,bz,bA,bB){var bE;if(!bx&&qx.core.Environment.get("qx.aspects")==false){bE=by||{};qx.Bootstrap.setDisplayNames(bE,name);}
else {bE={};if(bx){if(!bz){bz=this.__Y();}
;if(this.__bb(bx,bB)){bE=this.__bc(bz,name,bw);}
else {bE=bz;}
;if(bw==="singleton"){bE.getInstance=this.getInstance;}
;qx.Bootstrap.setDisplayName(bz,name,"constructor");}
;if(by){qx.Bootstrap.setDisplayNames(by,name);var bF;for(var i=0,a=Object.keys(by),l=a.length;i<l;i++ ){bF=a[i];var bC=by[bF];if(qx.core.Environment.get("qx.aspects")){if(bC instanceof Function){bC=qx.core.Aspect.wrap(name+"."+bF,bC,"static");}
;bE[bF]=bC;}
else {bE[bF]=bC;}
;}
;}
;}
;var bD=name?qx.Bootstrap.createNamespace(name,bE):"";bE.name=bE.classname=name;bE.basename=bD;bE.$$type="Class";if(bw){bE.$$classtype=bw;}
;if(!bE.hasOwnProperty("toString")){bE.toString=this.genericToString;}
;if(bx){qx.Bootstrap.extendClass(bE,bz,bx,name,bD);if(bA){if(qx.core.Environment.get("qx.aspects")){bA=qx.core.Aspect.wrap(name,bA,"destructor");}
;bE.$$destructor=bA;qx.Bootstrap.setDisplayName(bA,name,"destruct");}
;}
;this.$$registry[name]=bE;return bE;}
,__Q:function(bG,bH,bI){if(qx.core.Environment.get("qx.debug")){if(typeof bH!=="object"||qx.Bootstrap.getClass(bH)==="Array"){throw new Error(bG.classname+": the events must be defined as map!");}
;for(var bJ in bH){if(typeof bH[bJ]!=="string"){throw new Error(bG.classname+"/"+bJ+": the event value needs to be a string with the class name of the event object which will be fired.");}
;}
;if(bG.$$events&&bI!==true){for(var bJ in bH){if(bG.$$events[bJ]!==undefined&&bG.$$events[bJ]!==bH[bJ]){throw new Error(bG.classname+"/"+bJ+": the event value/type cannot be changed from "+bG.$$events[bJ]+" to "+bH[bJ]);}
;}
;}
;}
;if(bG.$$events){for(var bJ in bH){bG.$$events[bJ]=bH[bJ];}
;}
else {bG.$$events=bH;}
;}
,__R:function(bK,bL,bM){if(!qx.core.Environment.get("module.property")){throw new Error("Property module disabled.");}
;var bN;if(bM===undefined){bM=false;}
;var bO=bK.prototype;for(var name in bL){bN=bL[name];if(qx.core.Environment.get("qx.debug")){this.__S(bK,name,bN,bM);}
;bN.name=name;if(!bN.refine){if(bK.$$properties===undefined){bK.$$properties={};}
;bK.$$properties[name]=bN;}
;if(bN.init!==undefined){bK.prototype["$$init_"+name]=bN.init;}
;if(bN.event!==undefined){if(!qx.core.Environment.get("module.events")){throw new Error("Events module not enabled.");}
;var event={};event[bN.event]="qx.event.type.Data";this.__Q(bK,event,bM);}
;if(bN.inheritable){this.__M.$$inheritable[name]=true;if(!bO.$$refreshInheritables){this.__M.attachRefreshInheritables(bK);}
;}
;if(!bN.refine){this.__M.attachMethods(bK,name,bN);}
;}
;}
,__S:qx.core.Environment.select("qx.debug",{"true":function(bP,name,bQ,bR){if(!qx.core.Environment.get("module.property")){throw new Error("Property module disabled.");}
;var bT=this.hasProperty(bP,name);if(bT){var bS=this.getPropertyDefinition(bP,name);if(bQ.refine&&bS.init===undefined){throw new Error("Could not refine an init value if there was previously no init value defined. Property '"+name+"' of class '"+bP.classname+"'.");}
;}
;if(!bT&&bQ.refine){throw new Error("Could not refine non-existent property: '"+name+"' of class: '"+bP.classname+"'!");}
;if(bT&&!bR){throw new Error("Class "+bP.classname+" already has a property: "+name+"!");}
;if(bT&&bR){if(!bQ.refine){throw new Error('Could not refine property "'+name+'" without a "refine" flag in the property definition! This class: '+bP.classname+', original class: '+this.getByProperty(bP,name).classname+'.');}
;for(var bU in bQ){if(bU!=="init"&&bU!=="refine"){throw new Error("Class "+bP.classname+" could not refine property: "+name+"! Key: "+bU+" could not be refined!");}
;}
;}
;var bV=bQ.group?this.__M.$$allowedGroupKeys:this.__M.$$allowedKeys;for(var bU in bQ){if(bV[bU]===undefined){throw new Error('The configuration key "'+bU+'" of property "'+name+'" in class "'+bP.classname+'" is not allowed!');}
;if(bQ[bU]===undefined){throw new Error('Invalid key "'+bU+'" of property "'+name+'" in class "'+bP.classname+'"! The value is undefined: '+bQ[bU]);}
;if(bV[bU]!==null&&typeof bQ[bU]!==bV[bU]){throw new Error('Invalid type of key "'+bU+'" of property "'+name+'" in class "'+bP.classname+'"! The type of the key must be "'+bV[bU]+'"!');}
;}
;if(bQ.transform!=null){if(!(typeof bQ.transform=="string")){throw new Error('Invalid transform definition of property "'+name+'" in class "'+bP.classname+'"! Needs to be a String.');}
;}
;if(bQ.check!=null){if(!qx.Bootstrap.isString(bQ.check)&&!qx.Bootstrap.isArray(bQ.check)&&!qx.Bootstrap.isFunction(bQ.check)){throw new Error('Invalid check definition of property "'+name+'" in class "'+bP.classname+'"! Needs to be a String, Array or Function.');}
;}
;}
,"default":null}),__T:function(bW,bX,bY,ca,cb){var cc=bW.prototype;var ce,cd;qx.Bootstrap.setDisplayNames(bX,bW.classname+".prototype");for(var i=0,a=Object.keys(bX),l=a.length;i<l;i++ ){ce=a[i];cd=bX[ce];if(qx.core.Environment.get("qx.debug")){if(cc[ce]!==undefined&&ce.charAt(0)=="_"&&ce.charAt(1)=="_"){throw new Error('Overwriting private member "'+ce+'" of Class "'+bW.classname+'" is not allowed!');}
;if(bY!==true&&cc.hasOwnProperty(ce)){throw new Error('Overwriting member "'+ce+'" of Class "'+bW.classname+'" is not allowed!');}
;}
;if(ca!==false&&cd instanceof Function&&cd.$$type==null){if(cb==true){cd=this.__U(cd,cc[ce]);}
else {if(cc[ce]){cd.base=cc[ce];}
;cd.self=bW;}
;if(qx.core.Environment.get("qx.aspects")){cd=qx.core.Aspect.wrap(bW.classname+"."+ce,cd,"member");}
;}
;cc[ce]=cd;}
;}
,__U:function(cf,cg){if(cg){return function(){var ci=cf.base;cf.base=cg;var ch=cf.apply(this,arguments);cf.base=ci;return ch;}
;}
else {return cf;}
;}
,__V:function(cj,ck){if(qx.core.Environment.get("qx.debug")){if(!cj||!ck){throw new Error("Incomplete parameters!");}
;if(this.hasOwnInterface(cj,ck)){throw new Error('Interface "'+ck.name+'" is already used by Class "'+cj.classname+'!');}
;if(cj.$$classtype!=="abstract"){qx.Interface.assert(cj,ck,true);}
;}
;var cl=qx.Interface.flatten([ck]);if(cj.$$implements){cj.$$implements.push(ck);cj.$$flatImplements.push.apply(cj.$$flatImplements,cl);}
else {cj.$$implements=[ck];cj.$$flatImplements=cl;}
;}
,__W:function(cm){var name=cm.classname;var cn=this.__bc(cm,name,cm.$$classtype);for(var i=0,a=Object.keys(cm),l=a.length;i<l;i++ ){co=a[i];cn[co]=cm[co];}
;cn.prototype=cm.prototype;var cq=cm.prototype;for(var i=0,a=Object.keys(cq),l=a.length;i<l;i++ ){co=a[i];var cr=cq[co];if(cr&&cr.self==cm){cr.self=cn;}
;}
;for(var co in this.$$registry){var cp=this.$$registry[co];if(!cp){continue;}
;if(cp.base==cm){cp.base=cn;}
;if(cp.superclass==cm){cp.superclass=cn;}
;if(cp.$$original){if(cp.$$original.base==cm){cp.$$original.base=cn;}
;if(cp.$$original.superclass==cm){cp.$$original.superclass=cn;}
;}
;}
;qx.Bootstrap.createNamespace(name,cn);this.$$registry[name]=cn;return cn;}
,__X:function(cs,ct,cu){if(qx.core.Environment.get("qx.debug")){if(!cs||!ct){throw new Error("Incomplete parameters!");}
;}
;if(this.hasMixin(cs,ct)){return;}
;var cx=cs.$$original;if(ct.$$constructor&&!cx){cs=this.__W(cs);}
;var cw=qx.Mixin.flatten([ct]);var cv;for(var i=0,l=cw.length;i<l;i++ ){cv=cw[i];if(cv.$$events){this.__Q(cs,cv.$$events,cu);}
;if(cv.$$properties){this.__R(cs,cv.$$properties,cu);}
;if(cv.$$members){this.__T(cs,cv.$$members,cu,cu,cu);}
;}
;if(cs.$$includes){cs.$$includes.push(ct);cs.$$flatIncludes.push.apply(cs.$$flatIncludes,cw);}
else {cs.$$includes=[ct];cs.$$flatIncludes=cw;}
;}
,__Y:function(){function cy(){cy.base.apply(this,arguments);}
;return cy;}
,__ba:function(){return function(){}
;}
,__bb:function(cz,cA){if(qx.core.Environment.get(n)){return true;}
;if(cz&&cz.$$includes){var cB=cz.$$flatIncludes;for(var i=0,l=cB.length;i<l;i++ ){if(cB[i].$$constructor){return true;}
;}
;}
;if(cA){var cC=qx.Mixin.flatten(cA);for(var i=0,l=cC.length;i<l;i++ ){if(cC[i].$$constructor){return true;}
;}
;}
;return false;}
,__bc:function(cD,name,cE){var cG=function(){var cJ=cG;if(qx.core.Environment.get(n)){if(!(this instanceof cJ)){throw new Error("Please initialize '"+name+"' objects using the new keyword!");}
;if(cE===t){if(this.classname===name){throw new Error("The class ',"+name+"' is abstract! It is not possible to instantiate it.");}
;}
else if(cE===v){if(!cJ.$$allowconstruct){throw new Error("The class '"+name+"' is a singleton! It is not possible to instantiate it directly. Use the static getInstance() method instead.");}
;}
;}
;var cI=cJ.$$original.apply(this,arguments);if(cJ.$$includes){var cH=cJ.$$flatIncludes;for(var i=0,l=cH.length;i<l;i++ ){if(cH[i].$$constructor){cH[i].$$constructor.apply(this,arguments);}
;}
;}
;if(qx.core.Environment.get(n)){if(this.classname===name){this.$$initialized=true;}
;}
;return cI;}
;if(qx.core.Environment.get(u)){var cF=qx.core.Aspect.wrap(name,cG,m);cG.$$original=cD;cG.constructor=cF;cG=cF;}
;cG.$$original=cD;cD.wrapper=cG;return cG;}
},defer:function(){if(qx.core.Environment.get(u)){for(var cK in qx.Bootstrap.$$registry){var cL=qx.Bootstrap.$$registry[cK];for(var cM in cL){if(cL[cM] instanceof Function){cL[cM]=qx.core.Aspect.wrap(cK+p+cM,cL[cM],r);}
;}
;}
;}
;}
});}
)();
(function(){var k="join",j="toLocaleUpperCase",h="shift",g="substr",f="filter",e="unshift",d="match",c="quote",b="qx.lang.Generics",a="localeCompare",I="sort",H="some",G="charAt",F="split",E="substring",D="pop",C="toUpperCase",B="replace",A="push",z="charCodeAt",t="every",u="reverse",q="search",r="forEach",o="map",p="toLowerCase",m="splice",n="toLocaleLowerCase",v="indexOf",w="lastIndexOf",y="slice",x="concat";qx.Class.define(b,{statics:{__bd:{"Array":[k,u,I,A,D,h,e,m,x,y,v,w,r,o,f,H,t],"String":[c,E,p,C,G,z,v,w,n,j,a,d,q,B,F,g,x,y]},__be:function(J,K){return function(s){return J.prototype[K].apply(s,Array.prototype.slice.call(arguments,1));}
;}
,__bf:function(){var L=qx.lang.Generics.__bd;for(var P in L){var N=window[P];var M=L[P];for(var i=0,l=M.length;i<l;i++ ){var O=M[i];if(!N[O]){N[O]=qx.lang.Generics.__be(N,O);}
;}
;}
;}
},defer:function(Q){Q.__bf();}
});}
)();
(function(){var a="qx.data.MBinding";qx.Mixin.define(a,{members:{bind:function(b,c,d,e){return qx.data.SingleValueBinding.bind(this,b,c,d,e);}
,removeBinding:function(f){qx.data.SingleValueBinding.removeBindingFromObject(this,f);}
,removeAllBindings:function(){qx.data.SingleValueBinding.removeAllBindingsForObject(this);}
,getBindings:function(){return qx.data.SingleValueBinding.getAllBindingsForObject(this);}
}});}
)();
(function(){var m="Boolean",l=") to the object '",k="Integer",h=" of object ",g="qx.event.type.Data",f="qx.data.SingleValueBinding",d="Binding property ",c="Can not remove the bindings for null object!",b="Binding from '",a="PositiveNumber",J="PositiveInteger",I="Binding does not exist!",H=" is not an data (qx.event.type.Data) event on ",G=").",F="Date",E=" not possible: No event available. ",D="qx.debug.databinding",C="set",B="deepBinding",A="item",u="reset",v="qx.debug",s="' (",t="String",q="Number",r="change",n="]",p=".",w="last",x="[",z="",y="get";qx.Class.define(f,{statics:{__bg:{},bind:function(K,L,M,N,O){var ba=this.__bi(K,L,M,N,O);var U=L.split(p);var Q=this.__bo(U);var Y=[];var V=[];var W=[];var S=[];var T=K;try{for(var i=0;i<U.length;i++ ){if(Q[i]!==z){S.push(r);}
else {S.push(this.__bj(T,U[i]));}
;Y[i]=T;if(i==U.length-1){if(Q[i]!==z){var be=Q[i]===w?T.length-1:Q[i];var P=T.getItem(be);this.__bn(P,M,N,O,K);W[i]=this.__bp(T,S[i],M,N,O,Q[i]);}
else {if(U[i]!=null&&T[y+qx.lang.String.firstUp(U[i])]!=null){var P=T[y+qx.lang.String.firstUp(U[i])]();this.__bn(P,M,N,O,K);}
;W[i]=this.__bp(T,S[i],M,N,O);}
;}
else {var bb={index:i,propertyNames:U,sources:Y,listenerIds:W,arrayIndexValues:Q,targetObject:M,targetPropertyChain:N,options:O,listeners:V};var X=qx.lang.Function.bind(this.__bh,this,bb);V.push(X);W[i]=T.addListener(S[i],X);}
;if(T[y+qx.lang.String.firstUp(U[i])]==null){T=null;}
else if(Q[i]!==z){T=T[y+qx.lang.String.firstUp(U[i])](Q[i]);}
else {T=T[y+qx.lang.String.firstUp(U[i])]();}
;if(!T){break;}
;}
;}
catch(bf){for(var i=0;i<Y.length;i++ ){if(Y[i]&&W[i]){Y[i].removeListenerById(W[i]);}
;}
;var bd=ba.targets;var R=ba.listenerIds;for(var i=0;i<bd.length;i++ ){if(bd[i]&&R[i]){bd[i].removeListenerById(R[i]);}
;}
;throw bf;}
;var bc={type:B,listenerIds:W,sources:Y,targetListenerIds:ba.listenerIds,targets:ba.targets};this.__bq(bc,K,L,M,N);return bc;}
,__bh:function(bg){if(bg.options&&bg.options.onUpdate){bg.options.onUpdate(bg.sources[bg.index],bg.targetObject);}
;for(var j=bg.index+1;j<bg.propertyNames.length;j++ ){var bk=bg.sources[j];bg.sources[j]=null;if(!bk){continue;}
;bk.removeListenerById(bg.listenerIds[j]);}
;var bk=bg.sources[bg.index];for(var j=bg.index+1;j<bg.propertyNames.length;j++ ){if(bg.arrayIndexValues[j-1]!==z){bk=bk[y+qx.lang.String.firstUp(bg.propertyNames[j-1])](bg.arrayIndexValues[j-1]);}
else {bk=bk[y+qx.lang.String.firstUp(bg.propertyNames[j-1])]();}
;bg.sources[j]=bk;if(!bk){if(bg.options&&bg.options.converter){var bl=bg.options.converter();this.__bl(bg.targetObject,bg.targetPropertyChain,bl);}
else {this.__bk(bg.targetObject,bg.targetPropertyChain);}
;break;}
;if(j==bg.propertyNames.length-1){if(qx.Class.implementsInterface(bk,qx.data.IListData)){var bm=bg.arrayIndexValues[j]===w?bk.length-1:bg.arrayIndexValues[j];var bi=bk.getItem(bm);this.__bn(bi,bg.targetObject,bg.targetPropertyChain,bg.options,bg.sources[bg.index]);bg.listenerIds[j]=this.__bp(bk,r,bg.targetObject,bg.targetPropertyChain,bg.options,bg.arrayIndexValues[j]);}
else {if(bg.propertyNames[j]!=null&&bk[y+qx.lang.String.firstUp(bg.propertyNames[j])]!=null){var bi=bk[y+qx.lang.String.firstUp(bg.propertyNames[j])]();this.__bn(bi,bg.targetObject,bg.targetPropertyChain,bg.options,bg.sources[bg.index]);}
;var bj=this.__bj(bk,bg.propertyNames[j]);bg.listenerIds[j]=this.__bp(bk,bj,bg.targetObject,bg.targetPropertyChain,bg.options);}
;}
else {if(bg.listeners[j]==null){var bh=qx.lang.Function.bind(this.__bh,this,bg);bg.listeners.push(bh);}
;if(qx.Class.implementsInterface(bk,qx.data.IListData)){var bj=r;}
else {var bj=this.__bj(bk,bg.propertyNames[j]);}
;bg.listenerIds[j]=bk.addListener(bj,bg.listeners[j]);}
;}
;}
,__bi:function(bn,bo,bp,bq,br){var bv=bq.split(p);var bt=this.__bo(bv);var bA=[];var bz=[];var bx=[];var bw=[];var bu=bp;for(var i=0;i<bv.length-1;i++ ){if(bt[i]!==z){bw.push(r);}
else {try{bw.push(this.__bj(bu,bv[i]));}
catch(e){break;}
;}
;bA[i]=bu;var by=function(){for(var j=i+1;j<bv.length-1;j++ ){var bD=bA[j];bA[j]=null;if(!bD){continue;}
;bD.removeListenerById(bx[j]);}
;var bD=bA[i];for(var j=i+1;j<bv.length-1;j++ ){var bB=qx.lang.String.firstUp(bv[j-1]);if(bt[j-1]!==z){var bE=bt[j-1]===w?bD.getLength()-1:bt[j-1];bD=bD[y+bB](bE);}
else {bD=bD[y+bB]();}
;bA[j]=bD;if(bz[j]==null){bz.push(by);}
;if(qx.Class.implementsInterface(bD,qx.data.IListData)){var bC=r;}
else {try{var bC=qx.data.SingleValueBinding.__bj(bD,bv[j]);}
catch(e){break;}
;}
;bx[j]=bD.addListener(bC,bz[j]);}
;qx.data.SingleValueBinding.updateTarget(bn,bo,bp,bq,br);}
;bz.push(by);bx[i]=bu.addListener(bw[i],by);var bs=qx.lang.String.firstUp(bv[i]);if(bu[y+bs]==null){bu=null;}
else if(bt[i]!==z){bu=bu[y+bs](bt[i]);}
else {bu=bu[y+bs]();}
;if(!bu){break;}
;}
;return {listenerIds:bx,targets:bA};}
,updateTarget:function(bF,bG,bH,bI,bJ){var bK=this.resolvePropertyChain(bF,bG);bK=qx.data.SingleValueBinding.__br(bK,bH,bI,bJ,bF);this.__bl(bH,bI,bK);}
,resolvePropertyChain:function(o,bL){var bP=this.__bm(o,bL);var bN;if(bP!=null){var bR=bL.substring(bL.lastIndexOf(p)+1,bL.length);if(bR.charAt(bR.length-1)==n){var bM=bR.substring(bR.lastIndexOf(x)+1,bR.length-1);var bO=bR.substring(0,bR.lastIndexOf(x));var bQ=bP[y+qx.lang.String.firstUp(bO)]();if(bM==w){bM=bQ.length-1;}
;if(bQ!=null){bN=bQ.getItem(bM);}
;}
else {bN=bP[y+qx.lang.String.firstUp(bR)]();}
;}
;return bN;}
,__bj:function(bS,bT){var bU=this.__bs(bS,bT);if(bU==null){if(qx.Class.supportsEvent(bS.constructor,bT)){bU=bT;}
else if(qx.Class.supportsEvent(bS.constructor,r+qx.lang.String.firstUp(bT))){bU=r+qx.lang.String.firstUp(bT);}
else {throw new qx.core.AssertionError(d+bT+h+bS+E);}
;}
;return bU;}
,__bk:function(bV,bW){var bX=this.__bm(bV,bW);if(bX!=null){var bY=bW.substring(bW.lastIndexOf(p)+1,bW.length);if(bY.charAt(bY.length-1)==n){this.__bl(bV,bW,null);return;}
;if(bX[u+qx.lang.String.firstUp(bY)]!=undefined){bX[u+qx.lang.String.firstUp(bY)]();}
else {bX[C+qx.lang.String.firstUp(bY)](null);}
;}
;}
,__bl:function(ca,cb,cc){var cg=this.__bm(ca,cb);if(cg!=null){var ch=cb.substring(cb.lastIndexOf(p)+1,cb.length);if(ch.charAt(ch.length-1)==n){var cd=ch.substring(ch.lastIndexOf(x)+1,ch.length-1);var cf=ch.substring(0,ch.lastIndexOf(x));var ce=ca;if(!qx.Class.implementsInterface(ce,qx.data.IListData)){ce=cg[y+qx.lang.String.firstUp(cf)]();}
;if(cd==w){cd=ce.length-1;}
;if(ce!=null){ce.setItem(cd,cc);}
;}
else {cg[C+qx.lang.String.firstUp(ch)](cc);}
;}
;}
,__bm:function(ci,cj){var cm=cj.split(p);var cn=ci;for(var i=0;i<cm.length-1;i++ ){try{var cl=cm[i];if(cl.indexOf(n)==cl.length-1){var ck=cl.substring(cl.indexOf(x)+1,cl.length-1);cl=cl.substring(0,cl.indexOf(x));}
;if(cl!=z){cn=cn[y+qx.lang.String.firstUp(cl)]();}
;if(ck!=null){if(ck==w){ck=cn.length-1;}
;cn=cn.getItem(ck);ck=null;}
;}
catch(co){return null;}
;}
;return cn;}
,__bn:function(cp,cq,cr,cs,ct){cp=this.__br(cp,cq,cr,cs,ct);if(cp===undefined){this.__bk(cq,cr);}
;if(cp!==undefined){try{this.__bl(cq,cr,cp);if(cs&&cs.onUpdate){cs.onUpdate(ct,cq,cp);}
;}
catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;}
;if(cs&&cs.onSetFail){cs.onSetFail(e);}
else {qx.log.Logger.warn("Failed so set value "+cp+" on "+cq+". Error message: "+e);}
;}
;}
;}
,__bo:function(cu){var cv=[];for(var i=0;i<cu.length;i++ ){var name=cu[i];if(qx.lang.String.endsWith(name,n)){var cw=name.substring(name.indexOf(x)+1,name.indexOf(n));if(name.indexOf(n)!=name.length-1){throw new Error("Please use only one array at a time: "+name+" does not work.");}
;if(cw!==w){if(cw==z||isNaN(parseInt(cw,10))){throw new Error("No number or 'last' value hast been given"+" in an array binding: "+name+" does not work.");}
;}
;if(name.indexOf(x)!=0){cu[i]=name.substring(0,name.indexOf(x));cv[i]=z;cv[i+1]=cw;cu.splice(i+1,0,A);i++ ;}
else {cv[i]=cw;cu.splice(i,1,A);}
;}
else {cv[i]=z;}
;}
;return cv;}
,__bp:function(cx,cy,cz,cA,cB,cC){if(qx.core.Environment.get(v)){var cD=qx.Class.getEventType(cx.constructor,cy);qx.core.Assert.assertEquals(g,cD,cy+H+cx+p);}
;var cF=function(cG,e){if(cG!==z){if(cG===w){cG=cx.length-1;}
;var cJ=cx.getItem(cG);if(cJ===undefined){qx.data.SingleValueBinding.__bk(cz,cA);}
;var cH=e.getData().start;var cI=e.getData().end;if(cG<cH||cG>cI){return;}
;}
else {var cJ=e.getData();}
;if(qx.core.Environment.get(D)){qx.log.Logger.debug("Binding executed from "+cx+" by "+cy+" to "+cz+" ("+cA+")");qx.log.Logger.debug("Data before conversion: "+cJ);}
;cJ=qx.data.SingleValueBinding.__br(cJ,cz,cA,cB,cx);if(qx.core.Environment.get(D)){qx.log.Logger.debug("Data after conversion: "+cJ);}
;try{if(cJ!==undefined){qx.data.SingleValueBinding.__bl(cz,cA,cJ);}
else {qx.data.SingleValueBinding.__bk(cz,cA);}
;if(cB&&cB.onUpdate){cB.onUpdate(cx,cz,cJ);}
;}
catch(cK){if(!(cK instanceof qx.core.ValidationError)){throw cK;}
;if(cB&&cB.onSetFail){cB.onSetFail(cK);}
else {qx.log.Logger.warn("Failed so set value "+cJ+" on "+cz+". Error message: "+cK);}
;}
;}
;if(!cC){cC=z;}
;cF=qx.lang.Function.bind(cF,cx,cC);var cE=cx.addListener(cy,cF);return cE;}
,__bq:function(cL,cM,cN,cO,cP){if(this.__bg[cM.toHashCode()]===undefined){this.__bg[cM.toHashCode()]=[];}
;this.__bg[cM.toHashCode()].push([cL,cM,cN,cO,cP]);}
,__br:function(cQ,cR,cS,cT,cU){if(cT&&cT.converter){var cW;if(cR.getModel){cW=cR.getModel();}
;return cT.converter(cQ,cW,cU,cR);}
else {var cY=this.__bm(cR,cS);var da=cS.substring(cS.lastIndexOf(p)+1,cS.length);if(cY==null){return cQ;}
;var cX=qx.Class.getPropertyDefinition(cY.constructor,da);var cV=cX==null?z:cX.check;return this.__bt(cQ,cV);}
;}
,__bs:function(db,dc){var dd=qx.Class.getPropertyDefinition(db.constructor,dc);if(dd==null){return null;}
;return dd.event;}
,__bt:function(de,df){var dg=qx.lang.Type.getClass(de);if((dg==q||dg==t)&&(df==k||df==J)){de=parseInt(de,10);}
;if((dg==m||dg==q||dg==F)&&df==t){de=de+z;}
;if((dg==q||dg==t)&&(df==q||df==a)){de=parseFloat(de);}
;return de;}
,removeBindingFromObject:function(dh,di){if(di.type==B){for(var i=0;i<di.sources.length;i++ ){if(di.sources[i]){di.sources[i].removeListenerById(di.listenerIds[i]);}
;}
;for(var i=0;i<di.targets.length;i++ ){if(di.targets[i]){di.targets[i].removeListenerById(di.targetListenerIds[i]);}
;}
;}
else {dh.removeListenerById(di);}
;var dj=this.__bg[dh.toHashCode()];if(dj!=undefined){for(var i=0;i<dj.length;i++ ){if(dj[i][0]==di){qx.lang.Array.remove(dj,dj[i]);return;}
;}
;}
;throw new Error("Binding could not be found!");}
,removeAllBindingsForObject:function(dk){if(qx.core.Environment.get(v)){qx.core.Assert.assertNotNull(dk,c);}
;var dl=this.__bg[dk.toHashCode()];if(dl!=undefined){for(var i=dl.length-1;i>=0;i-- ){this.removeBindingFromObject(dk,dl[i][0]);}
;}
;}
,getAllBindingsForObject:function(dm){if(this.__bg[dm.toHashCode()]===undefined){this.__bg[dm.toHashCode()]=[];}
;return this.__bg[dm.toHashCode()];}
,removeAllBindings:function(){for(var dp in this.__bg){var dn=qx.core.ObjectRegistry.fromHashCode(dp);if(dn==null){delete this.__bg[dp];continue;}
;this.removeAllBindingsForObject(dn);}
;this.__bg={};}
,getAllBindings:function(){return this.__bg;}
,showBindingInLog:function(dq,dr){var dt;for(var i=0;i<this.__bg[dq.toHashCode()].length;i++ ){if(this.__bg[dq.toHashCode()][i][0]==dr){dt=this.__bg[dq.toHashCode()][i];break;}
;}
;if(dt===undefined){var ds=I;}
else {var ds=b+dt[1]+s+dt[2]+l+dt[3]+s+dt[4]+G;}
;qx.log.Logger.debug(ds);}
,showAllBindingsInLog:function(){for(var dv in this.__bg){var du=qx.core.ObjectRegistry.fromHashCode(dv);for(var i=0;i<this.__bg[dv].length;i++ ){this.showBindingInLog(du,this.__bg[dv][i][0]);}
;}
;}
}});}
)();
(function(){var u="]",t='\\u',s="undefined",r='\\$1',q="0041-005A0061-007A00AA00B500BA00C0-00D600D8-00F600F8-02C102C6-02D102E0-02E402EC02EE0370-037403760377037A-037D03860388-038A038C038E-03A103A3-03F503F7-0481048A-05250531-055605590561-058705D0-05EA05F0-05F20621-064A066E066F0671-06D306D506E506E606EE06EF06FA-06FC06FF07100712-072F074D-07A507B107CA-07EA07F407F507FA0800-0815081A082408280904-0939093D09500958-0961097109720979-097F0985-098C098F09900993-09A809AA-09B009B209B6-09B909BD09CE09DC09DD09DF-09E109F009F10A05-0A0A0A0F0A100A13-0A280A2A-0A300A320A330A350A360A380A390A59-0A5C0A5E0A72-0A740A85-0A8D0A8F-0A910A93-0AA80AAA-0AB00AB20AB30AB5-0AB90ABD0AD00AE00AE10B05-0B0C0B0F0B100B13-0B280B2A-0B300B320B330B35-0B390B3D0B5C0B5D0B5F-0B610B710B830B85-0B8A0B8E-0B900B92-0B950B990B9A0B9C0B9E0B9F0BA30BA40BA8-0BAA0BAE-0BB90BD00C05-0C0C0C0E-0C100C12-0C280C2A-0C330C35-0C390C3D0C580C590C600C610C85-0C8C0C8E-0C900C92-0CA80CAA-0CB30CB5-0CB90CBD0CDE0CE00CE10D05-0D0C0D0E-0D100D12-0D280D2A-0D390D3D0D600D610D7A-0D7F0D85-0D960D9A-0DB10DB3-0DBB0DBD0DC0-0DC60E01-0E300E320E330E40-0E460E810E820E840E870E880E8A0E8D0E94-0E970E99-0E9F0EA1-0EA30EA50EA70EAA0EAB0EAD-0EB00EB20EB30EBD0EC0-0EC40EC60EDC0EDD0F000F40-0F470F49-0F6C0F88-0F8B1000-102A103F1050-1055105A-105D106110651066106E-10701075-1081108E10A0-10C510D0-10FA10FC1100-1248124A-124D1250-12561258125A-125D1260-1288128A-128D1290-12B012B2-12B512B8-12BE12C012C2-12C512C8-12D612D8-13101312-13151318-135A1380-138F13A0-13F41401-166C166F-167F1681-169A16A0-16EA1700-170C170E-17111720-17311740-17511760-176C176E-17701780-17B317D717DC1820-18771880-18A818AA18B0-18F51900-191C1950-196D1970-19741980-19AB19C1-19C71A00-1A161A20-1A541AA71B05-1B331B45-1B4B1B83-1BA01BAE1BAF1C00-1C231C4D-1C4F1C5A-1C7D1CE9-1CEC1CEE-1CF11D00-1DBF1E00-1F151F18-1F1D1F20-1F451F48-1F4D1F50-1F571F591F5B1F5D1F5F-1F7D1F80-1FB41FB6-1FBC1FBE1FC2-1FC41FC6-1FCC1FD0-1FD31FD6-1FDB1FE0-1FEC1FF2-1FF41FF6-1FFC2071207F2090-209421022107210A-211321152119-211D212421262128212A-212D212F-2139213C-213F2145-2149214E218321842C00-2C2E2C30-2C5E2C60-2CE42CEB-2CEE2D00-2D252D30-2D652D6F2D80-2D962DA0-2DA62DA8-2DAE2DB0-2DB62DB8-2DBE2DC0-2DC62DC8-2DCE2DD0-2DD62DD8-2DDE2E2F300530063031-3035303B303C3041-3096309D-309F30A1-30FA30FC-30FF3105-312D3131-318E31A0-31B731F0-31FF3400-4DB54E00-9FCBA000-A48CA4D0-A4FDA500-A60CA610-A61FA62AA62BA640-A65FA662-A66EA67F-A697A6A0-A6E5A717-A71FA722-A788A78BA78CA7FB-A801A803-A805A807-A80AA80C-A822A840-A873A882-A8B3A8F2-A8F7A8FBA90A-A925A930-A946A960-A97CA984-A9B2A9CFAA00-AA28AA40-AA42AA44-AA4BAA60-AA76AA7AAA80-AAAFAAB1AAB5AAB6AAB9-AABDAAC0AAC2AADB-AADDABC0-ABE2AC00-D7A3D7B0-D7C6D7CB-D7FBF900-FA2DFA30-FA6DFA70-FAD9FB00-FB06FB13-FB17FB1DFB1F-FB28FB2A-FB36FB38-FB3CFB3EFB40FB41FB43FB44FB46-FBB1FBD3-FD3DFD50-FD8FFD92-FDC7FDF0-FDFBFE70-FE74FE76-FEFCFF21-FF3AFF41-FF5AFF66-FFBEFFC2-FFC7FFCA-FFCFFFD2-FFD7FFDA-FFDC",p="\\\\",o="qx.debug",n='-',m="\\\"",l="qx.lang.String",d="(^|[^",k="0",g="%",c=' ',b='\n',f="])[",e="-",h="g",a='"',j="";qx.Bootstrap.define(l,{statics:{__bu:q,__bv:null,__bw:{},camelCase:function(v){var w=this.__bw[v];if(!w){w=v.replace(/\-([a-z])/g,function(x,y){return y.toUpperCase();}
);if(v.indexOf(e)>=0){this.__bw[v]=w;}
;}
;return w;}
,hyphenate:function(z){var A=this.__bw[z];if(!A){A=z.replace(/[A-Z]/g,function(B){return (n+B.charAt(0).toLowerCase());}
);if(z.indexOf(e)==-1){this.__bw[z]=A;}
;}
;return A;}
,capitalize:function(C){if(this.__bv===null){var D=t;this.__bv=new RegExp(d+this.__bu.replace(/[0-9A-F]{4}/g,function(E){return D+E;}
)+f+this.__bu.replace(/[0-9A-F]{4}/g,function(F){return D+F;}
)+u,h);}
;return C.replace(this.__bv,function(G){return G.toUpperCase();}
);}
,clean:function(H){return H.replace(/\s+/g,c).trim();}
,trimLeft:function(I){return I.replace(/^\s+/,j);}
,trimRight:function(J){return J.replace(/\s+$/,j);}
,trim:function(K){if(qx.core.Environment.get(o)){qx.Bootstrap.warn("'qx.lang.String.trim' is deprecated. Please use the native .trim method on String objects.");}
;return K.replace(/^\s+|\s+$/g,j);}
,startsWith:function(L,M){return L.indexOf(M)===0;}
,endsWith:function(N,O){return N.substring(N.length-O.length,N.length)===O;}
,repeat:function(P,Q){return P.length>0?new Array(Q+1).join(P):j;}
,pad:function(R,length,S){var T=length-R.length;if(T>0){if(typeof S===s){S=k;}
;return this.repeat(S,T)+R;}
else {return R;}
;}
,firstUp:qx.Bootstrap.firstUp,firstLow:qx.Bootstrap.firstLow,contains:function(U,V){return U.indexOf(V)!=-1;}
,format:function(W,X){var Y=W;var i=X.length;while(i-- ){Y=Y.replace(new RegExp(g+(i+1),h),X[i]+j);}
;return Y;}
,escapeRegexpChars:function(ba){return ba.replace(/([.*+?^${}()|[\]\/\\])/g,r);}
,toArray:function(bb){return bb.split(/\B|\b/g);}
,stripTags:function(bc){return bc.replace(/<\/?[^>]+>/gi,j);}
,stripScripts:function(bd,be){var bg=j;var bf=bd.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(){bg+=arguments[1]+b;return j;}
);if(be===true){qx.lang.Function.globalEval(bg);}
;return bf;}
,quote:function(bh){return a+bh.replace(/\\/g,p).replace(/\"/g,m)+a;}
}});}
)();
(function(){var m="[object Array]",k="qx.lang.Array",j="qx",h="number",g="string",f="The second parameter must be an array.",e="mshtml",d="engine.name",c="The first parameter must be an array.",b="Parameter must be an array.",a="qx.debug";qx.Bootstrap.define(k,{statics:{toArray:function(n,o){if(qx.core.Environment.get(a)){qx.Bootstrap.warn("'qx.lang.Array.toArray' is deprecared. "+"Please use 'qx.lang.Array.cast' instead.");}
;return this.cast(n,Array,o);}
,cast:function(p,q,r){if(p.constructor===q){return p;}
;if(qx.data&&qx.data.IListData){if(qx.Class&&qx.Class.hasInterface(p,qx.data.IListData)){var p=p.toArray();}
;}
;var s=new q;if((qx.core.Environment.get(d)==e)){if(p.item){for(var i=r||0,l=p.length;i<l;i++ ){s.push(p[i]);}
;return s;}
;}
;if(Object.prototype.toString.call(p)===m&&r==null){s.push.apply(s,p);}
else {s.push.apply(s,Array.prototype.slice.call(p,r||0));}
;return s;}
,fromArguments:function(t,u){return Array.prototype.slice.call(t,u||0);}
,fromCollection:function(v){if((qx.core.Environment.get(d)==e)){if(v.item){var w=[];for(var i=0,l=v.length;i<l;i++ ){w[i]=v[i];}
;return w;}
;}
;return Array.prototype.slice.call(v,0);}
,fromShortHand:function(x){var z=x.length;var y=qx.lang.Array.clone(x);switch(z){case 1:y[1]=y[2]=y[3]=y[0];break;case 2:y[2]=y[0];case 3:y[3]=y[1];};return y;}
,clone:function(A){return A.concat();}
,insertAt:function(B,C,i){B.splice(i,0,C);return B;}
,insertBefore:function(D,E,F){var i=D.indexOf(F);if(i==-1){D.push(E);}
else {D.splice(i,0,E);}
;return D;}
,insertAfter:function(G,H,I){var i=G.indexOf(I);if(i==-1||i==(G.length-1)){G.push(H);}
else {G.splice(i+1,0,H);}
;return G;}
,removeAt:function(J,i){return J.splice(i,1)[0];}
,removeAll:function(K){K.length=0;return this;}
,append:function(L,M){if(qx.core.Environment.get(a)){qx.core.Assert&&qx.core.Assert.assertArray(L,c);qx.core.Assert&&qx.core.Assert.assertArray(M,f);}
;Array.prototype.push.apply(L,M);return L;}
,exclude:function(N,O){if(qx.core.Environment.get(a)){qx.core.Assert&&qx.core.Assert.assertArray(N,c);qx.core.Assert&&qx.core.Assert.assertArray(O,f);}
;for(var i=0,Q=O.length,P;i<Q;i++ ){P=N.indexOf(O[i]);if(P!=-1){N.splice(P,1);}
;}
;return N;}
,remove:function(R,S){var i=R.indexOf(S);if(i!=-1){R.splice(i,1);return S;}
;}
,contains:function(T,U){return T.indexOf(U)!==-1;}
,equals:function(V,W){var length=V.length;if(length!==W.length){return false;}
;for(var i=0;i<length;i++ ){if(V[i]!==W[i]){return false;}
;}
;return true;}
,sum:function(X){var Y=0;for(var i=0,l=X.length;i<l;i++ ){Y+=X[i];}
;return Y;}
,max:function(ba){if(qx.core.Environment.get(a)){qx.core.Assert&&qx.core.Assert.assertArray(ba,b);}
;var i,bc=ba.length,bb=ba[0];for(i=1;i<bc;i++ ){if(ba[i]>bb){bb=ba[i];}
;}
;return bb===undefined?null:bb;}
,min:function(bd){if(qx.core.Environment.get(a)){qx.core.Assert&&qx.core.Assert.assertArray(bd,b);}
;var i,bf=bd.length,be=bd[0];for(i=1;i<bf;i++ ){if(bd[i]<be){be=bd[i];}
;}
;return be===undefined?null:be;}
,unique:function(bg){var bq=[],bi={},bl={},bn={};var bm,bh=0;var br=j+Date.now();var bj=false,bp=false,bs=false;for(var i=0,bo=bg.length;i<bo;i++ ){bm=bg[i];if(bm===null){if(!bj){bj=true;bq.push(bm);}
;}
else if(bm===undefined){}
else if(bm===false){if(!bp){bp=true;bq.push(bm);}
;}
else if(bm===true){if(!bs){bs=true;bq.push(bm);}
;}
else if(typeof bm===g){if(!bi[bm]){bi[bm]=1;bq.push(bm);}
;}
else if(typeof bm===h){if(!bl[bm]){bl[bm]=1;bq.push(bm);}
;}
else {var bk=bm[br];if(bk==null){bk=bm[br]=bh++ ;}
;if(!bn[bk]){bn[bk]=bm;bq.push(bm);}
;}
;}
;for(var bk in bn){try{delete bn[bk][br];}
catch(bt){try{bn[bk][br]=null;}
catch(bu){throw new Error("Cannot clean-up map entry doneObjects["+bk+"]["+br+"]");}
;}
;}
;return bq;}
}});}
)();
(function(){var j="[object Opera]",i="[^\\.0-9]",h="4.0",g="1.9.0.0",f="Version/",e="9.0",d="8.0",c="Gecko",b="AppleWebKit/",a="Trident",v="opera",u="engine.version",t="mshtml",s="engine.name",r="webkit",q="5.0",p="qx.bom.client.Engine",o="function",n="gecko",m="Maple",k="",l=".";qx.Bootstrap.define(p,{statics:{getVersion:function(){var y=window.navigator.userAgent;var z=k;if(qx.bom.client.Engine.__bx()){if(/Opera[\s\/]([0-9]+)\.([0-9])([0-9]*)/.test(y)){if(y.indexOf(f)!=-1){var B=y.match(/Version\/(\d+)\.(\d+)/);z=B[1]+l+B[2].charAt(0)+l+B[2].substring(1,B[2].length);}
else {z=RegExp.$1+l+RegExp.$2;if(RegExp.$3!=k){z+=l+RegExp.$3;}
;}
;}
;}
else if(qx.bom.client.Engine.__by()){if(/AppleWebKit\/([^ ]+)/.test(y)){z=RegExp.$1;var A=RegExp(i).exec(z);if(A){z=z.slice(0,A.index);}
;}
;}
else if(qx.bom.client.Engine.__bA()||qx.bom.client.Engine.__bz()){if(/rv\:([^\);]+)(\)|;)/.test(y)){z=RegExp.$1;}
;}
else if(qx.bom.client.Engine.__bB()){var x=/Trident\/([^\);]+)(\)|;)/.test(y);if(/MSIE\s+([^\);]+)(\)|;)/.test(y)){z=RegExp.$1;if(z<8&&x){if(RegExp.$1==h){z=d;}
else if(RegExp.$1==q){z=e;}
;}
;}
else if(x){var B=/\brv\:(\d+?\.\d+?)\b/.exec(y);if(B){z=B[1];}
;}
;}
else {var w=window.qxFail;if(w&&typeof w===o){z=w().FULLVERSION;}
else {z=g;qx.Bootstrap.warn("Unsupported client: "+y+"! Assumed gecko version 1.9.0.0 (Firefox 3.0).");}
;}
;return z;}
,getName:function(){var name;if(qx.bom.client.Engine.__bx()){name=v;}
else if(qx.bom.client.Engine.__by()){name=r;}
else if(qx.bom.client.Engine.__bA()||qx.bom.client.Engine.__bz()){name=n;}
else if(qx.bom.client.Engine.__bB()){name=t;}
else {var C=window.qxFail;if(C&&typeof C===o){name=C().NAME;}
else {name=n;qx.Bootstrap.warn("Unsupported client: "+window.navigator.userAgent+"! Assumed gecko version 1.9.0.0 (Firefox 3.0).");}
;}
;return name;}
,__bx:function(){return window.opera&&Object.prototype.toString.call(window.opera)==j;}
,__by:function(){return window.navigator.userAgent.indexOf(b)!=-1;}
,__bz:function(){return window.navigator.userAgent.indexOf(m)!=-1;}
,__bA:function(){return window.controllers&&window.navigator.product===c&&window.navigator.userAgent.indexOf(m)==-1&&window.navigator.userAgent.indexOf(a)==-1;}
,__bB:function(){return window.navigator.cpuClass&&(/MSIE\s+([^\);]+)(\)|;)/.test(window.navigator.userAgent)||/Trident\/\d+?\.\d+?/.test(window.navigator.userAgent));}
},defer:function(D){qx.core.Environment.add(u,D.getVersion);qx.core.Environment.add(s,D.getName);}
});}
)();
(function(){var f="qx.lang.Type",e="Error",d="RegExp",c="Date",b="Number",a="Boolean";qx.Bootstrap.define(f,{statics:{getClass:qx.Bootstrap.getClass,isString:qx.Bootstrap.isString,isArray:qx.Bootstrap.isArray,isObject:qx.Bootstrap.isObject,isFunction:qx.Bootstrap.isFunction,isRegExp:function(g){return this.getClass(g)==d;}
,isNumber:function(h){return (h!==null&&(this.getClass(h)==b||h instanceof Number));}
,isBoolean:function(i){return (i!==null&&(this.getClass(i)==a||i instanceof Boolean));}
,isDate:function(j){return (j!==null&&(this.getClass(j)==c||j instanceof Date));}
,isError:function(k){return (k!==null&&(this.getClass(k)==e||k instanceof Error));}
}});}
)();
(function(){var p=" != ",o="qx.core.Object",n="Expected value to be an array but found ",m=") was fired.",k="Expected value to be an integer >= 0 but found ",j="' to be not equal with '",h="' to '",g="Expected object '",f="Called assertTrue with '",d="Expected value to be a map but found ",bA="The function did not raise an exception!",bz="Expected value to be undefined but found ",by="Expected value to be a DOM element but found  '",bx="Expected value to be a regular expression but found ",bw="' to implement the interface '",bv="Expected value to be null but found ",bu="Invalid argument 'type'",bt="Called assert with 'false'",bs="Assertion error! ",br="null",w="' but found '",x="'undefined'",u="' must must be a key of the map '",v="The String '",s="Expected value to be a string but found ",t="Expected value not to be undefined but found undefined!",q="qx.util.ColorUtil",r=": ",E="The raised exception does not have the expected type! ",F=") not fired.",T="qx.core.Assert",P="Expected value to be typeof object but found ",bc="' (identical) but found '",W="' must have any of the values defined in the array '",bn="Expected value to be a number but found ",bh="Called assertFalse with '",K="qx.ui.core.Widget",bq="Expected value to be a qooxdoo object but found ",bp="' arguments.",bo="Expected value '%1' to be in the range '%2'..'%3'!",I="Array[",M="' does not match the regular expression '",O="' to be not identical with '",R="Expected [",U="' arguments but found '",X="', which cannot be converted to a CSS color!",be="qx.core.AssertionError",bj="Expected value to be a boolean but found ",y="Expected value not to be null but found null!",z="))!",L="Expected value to be a qooxdoo widget but found ",bb="Expected value to be typeof '",ba="Expected value to be typeof function but found ",Y="Expected value to be an integer but found ",bg="Called fail().",bf="The parameter 're' must be a string or a regular expression.",V="Expected value to be a number >= 0 but found ",bd="Expected value to be instanceof '",a="], but found [",bi="Wrong number of arguments given. Expected '",A="object",B="Event (",Q="Expected value to be the CSS color '",b="' but found ",c="]",H=", ",C="The value '",D=")), but found value '",G="' (rgb(",S=",",bl="'",bk="Expected '",N="'!",bm="!",J="";qx.Class.define(T,{statics:{__cA:true,__cB:function(bB,bC){var bG=J;for(var i=1,l=arguments.length;i<l;i++ ){bG=bG+this.__cC(arguments[i]===undefined?x:arguments[i]);}
;var bF=J;if(bG){bF=bB+r+bG;}
else {bF=bB;}
;var bE=bs+bF;if(qx.Class.isDefined(be)){var bD=new qx.core.AssertionError(bB,bG);if(this.__cA){qx.Bootstrap.error(bE+"\n Stack trace: \n"+bD.getStackTrace());}
;throw bD;}
else {if(this.__cA){qx.Bootstrap.error(bE);}
;throw new Error(bE);}
;}
,__cC:function(bH){var bI;if(bH===null){bI=br;}
else if(qx.lang.Type.isArray(bH)&&bH.length>10){bI=I+bH.length+c;}
else if((bH instanceof Object)&&(bH.toString==null)){bI=qx.lang.Json.stringify(bH,null,2);}
else {try{bI=bH.toString();}
catch(e){bI=J;}
;}
;return bI;}
,assert:function(bJ,bK){bJ==true||this.__cB(bK||J,bt);}
,fail:function(bL,bM){var bN=bM?J:bg;this.__cB(bL||J,bN);}
,assertTrue:function(bO,bP){(bO===true)||this.__cB(bP||J,f,bO,bl);}
,assertFalse:function(bQ,bR){(bQ===false)||this.__cB(bR||J,bh,bQ,bl);}
,assertEquals:function(bS,bT,bU){bS==bT||this.__cB(bU||J,bk,bS,w,bT,N);}
,assertNotEquals:function(bV,bW,bX){bV!=bW||this.__cB(bX||J,bk,bV,j,bW,N);}
,assertIdentical:function(bY,ca,cb){bY===ca||this.__cB(cb||J,bk,bY,bc,ca,N);}
,assertNotIdentical:function(cc,cd,ce){cc!==cd||this.__cB(ce||J,bk,cc,O,cd,N);}
,assertNotUndefined:function(cf,cg){cf!==undefined||this.__cB(cg||J,t);}
,assertUndefined:function(ch,ci){ch===undefined||this.__cB(ci||J,bz,ch,bm);}
,assertNotNull:function(cj,ck){cj!==null||this.__cB(ck||J,y);}
,assertNull:function(cl,cm){cl===null||this.__cB(cm||J,bv,cl,bm);}
,assertJsonEquals:function(cn,co,cp){this.assertEquals(qx.lang.Json.stringify(cn),qx.lang.Json.stringify(co),cp);}
,assertMatch:function(cq,cr,cs){this.assertString(cq);this.assert(qx.lang.Type.isRegExp(cr)||qx.lang.Type.isString(cr),bf);cq.search(cr)>=0||this.__cB(cs||J,v,cq,M,cr.toString(),N);}
,assertArgumentsCount:function(ct,cu,cv,cw){var cx=ct.length;(cx>=cu&&cx<=cv)||this.__cB(cw||J,bi,cu,h,cv,U,cx,bp);}
,assertEventFired:function(cy,event,cz,cA,cB){var cD=false;var cC=function(e){if(cA){cA.call(cy,e);}
;cD=true;}
;var cE;try{cE=cy.addListener(event,cC,cy);cz.call(cy);}
catch(cF){throw cF;}
finally{try{cy.removeListenerById(cE);}
catch(cG){}
;}
;cD===true||this.__cB(cB||J,B,event,F);}
,assertEventNotFired:function(cH,event,cI,cJ){var cL=false;var cK=function(e){cL=true;}
;var cM=cH.addListener(event,cK,cH);cI.call();cL===false||this.__cB(cJ||J,B,event,m);cH.removeListenerById(cM);}
,assertException:function(cN,cO,cP,cQ){var cO=cO||Error;var cR;try{this.__cA=false;cN();}
catch(cS){cR=cS;}
finally{this.__cA=true;}
;if(cR==null){this.__cB(cQ||J,bA);}
;cR instanceof cO||this.__cB(cQ||J,E,cO,p,cR);if(cP){this.assertMatch(cR.toString(),cP,cQ);}
;}
,assertInArray:function(cT,cU,cV){cU.indexOf(cT)!==-1||this.__cB(cV||J,C,cT,W,cU,bl);}
,assertArrayEquals:function(cW,cX,cY){this.assertArray(cW,cY);this.assertArray(cX,cY);cY=cY||R+cW.join(H)+a+cX.join(H)+c;if(cW.length!==cX.length){this.fail(cY,true);}
;for(var i=0;i<cW.length;i++ ){if(cW[i]!==cX[i]){this.fail(cY,true);}
;}
;}
,assertKeyInMap:function(da,db,dc){db[da]!==undefined||this.__cB(dc||J,C,da,u,db,bl);}
,assertFunction:function(dd,de){qx.lang.Type.isFunction(dd)||this.__cB(de||J,ba,dd,bm);}
,assertString:function(df,dg){qx.lang.Type.isString(df)||this.__cB(dg||J,s,df,bm);}
,assertBoolean:function(dh,di){qx.lang.Type.isBoolean(dh)||this.__cB(di||J,bj,dh,bm);}
,assertNumber:function(dj,dk){(qx.lang.Type.isNumber(dj)&&isFinite(dj))||this.__cB(dk||J,bn,dj,bm);}
,assertPositiveNumber:function(dl,dm){(qx.lang.Type.isNumber(dl)&&isFinite(dl)&&dl>=0)||this.__cB(dm||J,V,dl,bm);}
,assertInteger:function(dn,dp){(qx.lang.Type.isNumber(dn)&&isFinite(dn)&&dn%1===0)||this.__cB(dp||J,Y,dn,bm);}
,assertPositiveInteger:function(dq,dr){var ds=(qx.lang.Type.isNumber(dq)&&isFinite(dq)&&dq%1===0&&dq>=0);ds||this.__cB(dr||J,k,dq,bm);}
,assertInRange:function(dt,du,dv,dw){(dt>=du&&dt<=dv)||this.__cB(dw||J,qx.lang.String.format(bo,[dt,du,dv]));}
,assertObject:function(dx,dy){var dz=dx!==null&&(qx.lang.Type.isObject(dx)||typeof dx===A);dz||this.__cB(dy||J,P,(dx),bm);}
,assertArray:function(dA,dB){qx.lang.Type.isArray(dA)||this.__cB(dB||J,n,dA,bm);}
,assertMap:function(dC,dD){qx.lang.Type.isObject(dC)||this.__cB(dD||J,d,dC,bm);}
,assertRegExp:function(dE,dF){qx.lang.Type.isRegExp(dE)||this.__cB(dF||J,bx,dE,bm);}
,assertType:function(dG,dH,dI){this.assertString(dH,bu);typeof (dG)===dH||this.__cB(dI||J,bb,dH,b,dG,bm);}
,assertInstance:function(dJ,dK,dL){var dM=dK.classname||dK+J;dJ instanceof dK||this.__cB(dL||J,bd,dM,b,dJ,bm);}
,assertInterface:function(dN,dO,dP){qx.Class.implementsInterface(dN,dO)||this.__cB(dP||J,g,dN,bw,dO,N);}
,assertCssColor:function(dQ,dR,dS){var dT=qx.Class.getByName(q);if(!dT){throw new Error("qx.util.ColorUtil not available! Your code must have a dependency on 'qx.util.ColorUtil'");}
;var dV=dT.stringToRgb(dQ);try{var dU=dT.stringToRgb(dR);}
catch(dX){this.__cB(dS||J,Q,dQ,G,dV.join(S),D,dR,X);}
;var dW=dV[0]==dU[0]&&dV[1]==dU[1]&&dV[2]==dU[2];dW||this.__cB(dS||J,Q,dV,G,dV.join(S),D,dR,G,dU.join(S),z);}
,assertElement:function(dY,ea){!!(dY&&dY.nodeType===1)||this.__cB(ea||J,by,dY,N);}
,assertQxObject:function(eb,ec){this.__cD(eb,o)||this.__cB(ec||J,bq,eb,bm);}
,assertQxWidget:function(ed,ee){this.__cD(ed,K)||this.__cB(ee||J,L,ed,bm);}
,__cD:function(ef,eg){if(!ef){return false;}
;var eh=ef.constructor;while(eh){if(eh.classname===eg){return true;}
;eh=eh.superclass;}
;return false;}
}});}
)();
(function(){var c=": ",b="qx.type.BaseError",a="";qx.Class.define(b,{extend:Error,construct:function(d,e){var f=Error.call(this,e);if(f.stack){this.stack=f.stack;}
;if(f.stacktrace){this.stacktrace=f.stacktrace;}
;this.__bC=d||a;this.message=e||qx.type.BaseError.DEFAULTMESSAGE;}
,statics:{DEFAULTMESSAGE:"error"},members:{__bD:null,__bC:null,message:null,getComment:function(){return this.__bC;}
,toString:function(){return this.__bC+(this.message?c+this.message:a);}
}});}
)();
(function(){var a="qx.core.AssertionError";qx.Class.define(a,{extend:qx.type.BaseError,construct:function(b,c){qx.type.BaseError.call(this,b,c);this.__bE=qx.dev.StackTrace.getStackTrace();}
,members:{__bE:null,getStackTrace:function(){return this.__bE;}
}});}
)();
(function(){var q="?",p="anonymous",o="...",n="qx.dev.StackTrace",m="",l="\n",k="/source/class/",j="stack",h="prototype",g="stacktrace",c="qx.debug",f="Error created at",e="ecmascript.error.stacktrace",b="function",a=".",d=":";qx.Bootstrap.define(n,{statics:{FILENAME_TO_CLASSNAME:null,FORMAT_STACKTRACE:null,getStackTrace:function(){var v=[];try{throw new Error();}
catch(G){if(qx.dev.StackTrace.hasEnvironmentCheck&&qx.core.Environment.get(e)){var A=qx.dev.StackTrace.getStackTraceFromError(G);var y=qx.dev.StackTrace.getStackTraceFromCaller(arguments);qx.lang.Array.removeAt(A,0);v=y.length>A.length?y:A;for(var i=0;i<Math.min(y.length,A.length);i++ ){var w=y[i];if(w.indexOf(p)>=0){continue;}
;var u=null;var E=w.split(a);var x=/(.*?)\(/.exec(E[E.length-1]);if(x&&x.length==2){u=x[1];E.pop();}
;if(E[E.length-1]==h){E.pop();}
;var C=E.join(a);var t=A[i];var F=t.split(d);var B=F[0];var r=F[1];var s;if(F[2]){s=F[2];}
;var z=null;if(qx.Class.getByName(B)){z=B;}
else {z=C;}
;var D=z;if(u){D+=a+u;}
;D+=d+r;if(s){D+=d+s;}
;v[i]=D;}
;}
else {v=this.getStackTraceFromCaller(arguments);}
;}
;return v;}
,getStackTraceFromCaller:function(H){var M=[];var L=qx.lang.Function.getCaller(H);var I={};while(L){var J=qx.lang.Function.getName(L);M.push(J);try{L=L.caller;}
catch(N){break;}
;if(!L){break;}
;var K=qx.core.ObjectRegistry.toHashCode(L);if(I[K]){M.push(o);break;}
;I[K]=L;}
;return M;}
,getStackTraceFromError:function(O){var T=[];var bf,S,bb,bd,Q,ba,V;var bc=qx.dev.StackTrace.hasEnvironmentCheck?qx.core.Environment.get(e):null;if(bc===j){if(!O.stack){return T;}
;bf=/@(.+):(\d+)$/gm;while((S=bf.exec(O.stack))!=null){V=S[1];bd=S[2];bb=this.__bF(V);T.push(bb+d+bd);}
;if(T.length>0){return this.__bH(T);}
;bf=/at (.*)/gm;var be=/\((.*?)(:[^\/].*)\)/;var R=/(.*?)(:[^\/].*)/;while((S=bf.exec(O.stack))!=null){var Y=be.exec(S[1]);if(!Y){Y=R.exec(S[1]);}
;if(Y){bb=this.__bF(Y[1]);T.push(bb+Y[2]);}
else {T.push(S[1]);}
;}
;}
else if(bc===g){var U=O.stacktrace;if(!U){return T;}
;if(U.indexOf(f)>=0){U=U.split(f)[0];}
;bf=/line\ (\d+?),\ column\ (\d+?)\ in\ (?:.*?)\ in\ (.*?):[^\/]/gm;while((S=bf.exec(U))!=null){bd=S[1];Q=S[2];V=S[3];bb=this.__bF(V);T.push(bb+d+bd+d+Q);}
;if(T.length>0){return this.__bH(T);}
;bf=/Line\ (\d+?)\ of\ linked\ script\ (.*?)$/gm;while((S=bf.exec(U))!=null){bd=S[1];V=S[2];bb=this.__bF(V);T.push(bb+d+bd);}
;}
else if(O.message&&O.message.indexOf("Backtrace:")>=0){var X=O.message.split("Backtrace:")[1].trim();var W=X.split(l);for(var i=0;i<W.length;i++ ){var P=W[i].match(/\s*Line ([0-9]+) of.* (\S.*)/);if(P&&P.length>=2){bd=P[1];ba=this.__bF(P[2]);T.push(ba+d+bd);}
;}
;}
else if(O.sourceURL&&O.line){T.push(this.__bF(O.sourceURL)+d+O.line);}
;return this.__bH(T);}
,__bF:function(bg){if(typeof qx.dev.StackTrace.FILENAME_TO_CLASSNAME==b){var bh=qx.dev.StackTrace.FILENAME_TO_CLASSNAME(bg);if(qx.core.Environment.get(c)&&!qx.lang.Type.isString(bh)){throw new Error("FILENAME_TO_CLASSNAME must return a string!");}
;return bh;}
;return qx.dev.StackTrace.__bG(bg);}
,__bG:function(bi){var bm=k;var bj=bi.indexOf(bm);var bl=bi.indexOf(q);if(bl>=0){bi=bi.substring(0,bl);}
;var bk=(bj==-1)?bi:bi.substring(bj+bm.length).replace(/\//g,a).replace(/\.js$/,m);return bk;}
,__bH:function(bn){if(typeof qx.dev.StackTrace.FORMAT_STACKTRACE==b){bn=qx.dev.StackTrace.FORMAT_STACKTRACE(bn);if(qx.core.Environment.get(c)&&!qx.lang.Type.isArray(bn)){throw new Error("FORMAT_STACKTRACE must return an array of strings!");}
;}
;return bn;}
},defer:function(bo){bo.hasEnvironmentCheck=qx.bom.client.EcmaScript&&qx.bom.client.EcmaScript.getStackTrace;}
});}
)();
(function(){var k="Invalid parameter 'func'.",j='anonymous()',i="Trying to call a bound function with a disposed object as context: ",h="qx.globalErrorHandling",g=" :: ",f="qx.lang.Function",e=".constructor()",d="qx.debug",c=".",b=".prototype.",a="()";qx.Bootstrap.define(f,{statics:{getCaller:function(l){return l.caller?l.caller.callee:l.callee.caller;}
,getName:function(m){if(m.displayName){return m.displayName;}
;if(m.$$original||m.wrapper||m.classname){return m.classname+e;}
;if(m.$$mixin){for(var o in m.$$mixin.$$members){if(m.$$mixin.$$members[o]==m){return m.$$mixin.name+b+o+a;}
;}
;for(var o in m.$$mixin){if(m.$$mixin[o]==m){return m.$$mixin.name+c+o+a;}
;}
;}
;if(m.self){var p=m.self.constructor;if(p){for(var o in p.prototype){if(p.prototype[o]==m){return p.classname+b+o+a;}
;}
;for(var o in p){if(p[o]==m){return p.classname+c+o+a;}
;}
;}
;}
;var n=m.toString().match(/function\s*(\w*)\s*\(.*/);if(n&&n.length>=1&&n[1]){return n[1]+a;}
;return j;}
,globalEval:function(q){if(window.execScript){return window.execScript(q);}
else {return eval.call(window,q);}
;}
,empty:function(){}
,returnTrue:function(){return true;}
,returnFalse:function(){return false;}
,returnNull:function(){return null;}
,returnThis:function(){return this;}
,returnZero:function(){return 0;}
,create:function(r,s){if(qx.core.Environment.get(d)){qx.core.Assert&&qx.core.Assert.assertFunction(r,k);}
;if(!s){return r;}
;if(!(s.self||s.args||s.delay!=null||s.periodical!=null||s.attempt)){return r;}
;return function(event){if(qx.core.Environment.get(d)){if(qx.core&&qx.core.Object&&s.self&&qx.Bootstrap.isObject(s.self)&&s.self.isDisposed&&qx.Bootstrap.isFunction(s.self.isDisposed)){qx.core.Assert&&qx.core.Assert.assertFalse(s.self.isDisposed(),i+s.self.toString()+g+qx.lang.Function.getName(r));}
;}
;var u=qx.lang.Array.fromArguments(arguments);if(s.args){u=s.args.concat(u);}
;if(s.delay||s.periodical){var t=function(){return r.apply(s.self||this,u);}
;if(qx.core.Environment.get(h)){t=qx.event.GlobalError.observeMethod(t);}
;if(s.delay){return window.setTimeout(t,s.delay);}
;if(s.periodical){return window.setInterval(t,s.periodical);}
;}
else if(s.attempt){var v=false;try{v=r.apply(s.self||this,u);}
catch(w){}
;return v;}
else {return r.apply(s.self||this,u);}
;}
;}
,bind:function(x,self,y){return this.create(x,{self:self,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null});}
,curry:function(z,A){return this.create(z,{args:arguments.length>1?qx.lang.Array.fromArguments(arguments,1):null});}
,listener:function(B,self,C){if(arguments.length<3){return function(event){return B.call(self||this,event||window.event);}
;}
else {var D=qx.lang.Array.fromArguments(arguments,2);return function(event){var E=[event||window.event];E.push.apply(E,D);B.apply(self||this,E);}
;}
;}
,attempt:function(F,self,G){return this.create(F,{self:self,attempt:true,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null})();}
,delay:function(H,I,self,J){return this.create(H,{delay:I,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();}
,periodical:function(K,L,self,M){return this.create(K,{periodical:L,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();}
}});}
)();
(function(){var j="-",h="",g="qx.core.ObjectRegistry",f="-0",e="qx.debug.dispose",d="$$hash",c="qx.debug";qx.Class.define(g,{statics:{inShutDown:false,__j:{},__bI:0,__bJ:[],__bK:h,__bL:{},register:function(k){var o=this.__j;if(!o){return;}
;var n=k.$$hash;if(n==null){var m=this.__bJ;if(m.length>0&&!qx.core.Environment.get(e)){n=m.pop();}
else {n=(this.__bI++ )+this.__bK;}
;k.$$hash=n;if(qx.core.Environment.get(e)){if(qx.dev&&qx.dev.Debug&&qx.dev.Debug.disposeProfilingActive){this.__bL[n]=qx.dev.StackTrace.getStackTrace();}
;}
;}
;if(qx.core.Environment.get(c)){if(!k.dispose){throw new Error("Invalid object: "+k);}
;}
;o[n]=k;}
,unregister:function(p){var q=p.$$hash;if(q==null){return;}
;var r=this.__j;if(r&&r[q]){delete r[q];this.__bJ.push(q);}
;try{delete p.$$hash;}
catch(s){if(p.removeAttribute){p.removeAttribute(d);}
;}
;}
,toHashCode:function(t){if(qx.core.Environment.get(c)){if(t==null){throw new Error("Invalid object: "+t);}
;}
;var v=t.$$hash;if(v!=null){return v;}
;var u=this.__bJ;if(u.length>0){v=u.pop();}
else {v=(this.__bI++ )+this.__bK;}
;return t.$$hash=v;}
,clearHashCode:function(w){if(qx.core.Environment.get(c)){if(w==null){throw new Error("Invalid object: "+w);}
;}
;var x=w.$$hash;if(x!=null){this.__bJ.push(x);try{delete w.$$hash;}
catch(y){if(w.removeAttribute){w.removeAttribute(d);}
;}
;}
;}
,fromHashCode:function(z){return this.__j[z]||null;}
,shutdown:function(){this.inShutDown=true;var B=this.__j;var D=[];for(var C in B){D.push(C);}
;D.sort(function(a,b){return parseInt(b,10)-parseInt(a,10);}
);var A,i=0,l=D.length;while(true){try{for(;i<l;i++ ){C=D[i];A=B[C];if(A&&A.dispose){A.dispose();}
;}
;}
catch(E){qx.Bootstrap.error(this,"Could not dispose object "+A.toString()+": "+E,E);if(i!==l){i++ ;continue;}
;}
;break;}
;qx.Bootstrap.debug(this,"Disposed "+l+" objects");delete this.__j;}
,getRegistry:function(){return this.__j;}
,getNextHash:function(){return this.__bI;}
,getPostId:function(){return this.__bK;}
,getStackTraces:function(){return this.__bL;}
},defer:function(F){if(window&&window.top){var frames=window.top.frames;for(var i=0;i<frames.length;i++ ){if(frames[i]===window){F.__bK=j+(i+1);return;}
;}
;}
;F.__bK=f;}
});}
)();
(function(){var g="prop",f="qx.bom.client.Json",e="JSON",d='{"x":1}',c="json",b="val",a="repl";qx.Bootstrap.define(f,{statics:{getJson:function(){return (qx.Bootstrap.getClass(window.JSON)==e&&JSON.parse(d).x===1&&JSON.stringify({"prop":b},function(k,v){return k===g?a:v;}
).indexOf(a)>0);}
},defer:function(h){qx.core.Environment.add(c,h.getJson);}
});}
)();
(function(){var p='String',o='Boolean',m='\\\\',l='\\f',h='\\t',g='{\n',f='[]',e="qx.lang.JsonImpl",d='Z',b='\\n',ba='Object',Y='{}',X='@',W='.',V='(',U='Array',T='T',S='\\r',R='{',Q='JSON.parse',x=' ',y='[',u='Number',w=')',s='[\n',t='\\"',q='\\b',r=': ',z='object',A='function',H=',',F='\n',K='\\u',J=',\n',M='0000',L='string',C="Cannot stringify a recursive object.",P='0',O='-',N='}',B=']',D='null',E='"',G=':',I='';qx.Bootstrap.define(e,{extend:Object,construct:function(){this.stringify=qx.lang.Function.bind(this.stringify,this);this.parse=qx.lang.Function.bind(this.parse,this);}
,members:{__cE:null,__cF:null,__cG:null,__cH:null,stringify:function(bb,bc,bd){this.__cE=I;this.__cF=I;this.__cH=[];if(qx.lang.Type.isNumber(bd)){var bd=Math.min(10,Math.floor(bd));for(var i=0;i<bd;i+=1){this.__cF+=x;}
;}
else if(qx.lang.Type.isString(bd)){if(bd.length>10){bd=bd.slice(0,10);}
;this.__cF=bd;}
;if(bc&&(qx.lang.Type.isFunction(bc)||qx.lang.Type.isArray(bc))){this.__cG=bc;}
else {this.__cG=null;}
;return this.__cI(I,{'':bb});}
,__cI:function(be,bf){var bi=this.__cE,bg,bj=bf[be];if(bj&&qx.lang.Type.isFunction(bj.toJSON)){bj=bj.toJSON(be);}
else if(qx.lang.Type.isDate(bj)){bj=this.dateToJSON(bj);}
;if(typeof this.__cG===A){bj=this.__cG.call(bf,be,bj);}
;if(bj===null){return D;}
;if(bj===undefined){return undefined;}
;switch(qx.lang.Type.getClass(bj)){case p:return this.__cJ(bj);case u:return isFinite(bj)?String(bj):D;case o:return String(bj);case U:this.__cE+=this.__cF;bg=[];if(this.__cH.indexOf(bj)!==-1){throw new TypeError(C);}
;this.__cH.push(bj);var length=bj.length;for(var i=0;i<length;i+=1){bg[i]=this.__cI(i,bj)||D;}
;this.__cH.pop();if(bg.length===0){var bh=f;}
else if(this.__cE){bh=s+this.__cE+bg.join(J+this.__cE)+F+bi+B;}
else {bh=y+bg.join(H)+B;}
;this.__cE=bi;return bh;case ba:this.__cE+=this.__cF;bg=[];if(this.__cH.indexOf(bj)!==-1){throw new TypeError(C);}
;this.__cH.push(bj);if(this.__cG&&typeof this.__cG===z){var length=this.__cG.length;for(var i=0;i<length;i+=1){var k=this.__cG[i];if(typeof k===L){var v=this.__cI(k,bj);if(v){bg.push(this.__cJ(k)+(this.__cE?r:G)+v);}
;}
;}
;}
else {for(var k in bj){if(Object.hasOwnProperty.call(bj,k)){var v=this.__cI(k,bj);if(v){bg.push(this.__cJ(k)+(this.__cE?r:G)+v);}
;}
;}
;}
;this.__cH.pop();if(bg.length===0){var bh=Y;}
else if(this.__cE){bh=g+this.__cE+bg.join(J+this.__cE)+F+bi+N;}
else {bh=R+bg.join(H)+N;}
;this.__cE=bi;return bh;};}
,dateToJSON:function(bk){var bl=function(n){return n<10?P+n:n;}
;var bm=function(n){var bn=bl(n);return n<100?P+bn:bn;}
;return isFinite(bk.valueOf())?bk.getUTCFullYear()+O+bl(bk.getUTCMonth()+1)+O+bl(bk.getUTCDate())+T+bl(bk.getUTCHours())+G+bl(bk.getUTCMinutes())+G+bl(bk.getUTCSeconds())+W+bm(bk.getUTCMilliseconds())+d:null;}
,__cJ:function(bo){var bp={'\b':q,'\t':h,'\n':b,'\f':l,'\r':S,'"':t,'\\':m};var bq=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;bq.lastIndex=0;if(bq.test(bo)){return E+bo.replace(bq,function(a){var c=bp[a];return typeof c===L?c:K+(M+a.charCodeAt(0).toString(16)).slice(-4);}
)+E;}
else {return E+bo+E;}
;}
,parse:function(br,bs){var bt=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;bt.lastIndex=0;if(bt.test(br)){br=br.replace(bt,function(a){return K+(M+a.charCodeAt(0).toString(16)).slice(-4);}
);}
;if(/^[\],:{}\s]*$/.test(br.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,X).replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,B).replace(/(?:^|:|,)(?:\s*\[)+/g,I))){var j=eval(V+br+w);return typeof bs===A?this.__cK({'':j},I,bs):j;}
;throw new SyntaxError(Q);}
,__cK:function(bu,bv,bw){var bx=bu[bv];if(bx&&typeof bx===z){for(var k in bx){if(Object.hasOwnProperty.call(bx,k)){var v=this.__cK(bx,k,bw);if(v!==undefined){bx[k]=v;}
else {delete bx[k];}
;}
;}
;}
;return bw.call(bu,bv,bx);}
}});}
)();
(function(){var a="qx.lang.Json";qx.Bootstrap.define(a,{statics:{JSON:qx.core.Environment.get("json")?window.JSON:new qx.lang.JsonImpl(),stringify:null,parse:null},defer:function(b){b.stringify=b.JSON.stringify;b.parse=b.JSON.parse;}
});}
)();
(function(){var c="qx.event.type.Data",b="qx.event.type.Event",a="qx.data.IListData";qx.Interface.define(a,{events:{"change":c,"changeLength":b},members:{getItem:function(d){}
,setItem:function(e,f){}
,splice:function(g,h,i){}
,contains:function(j){}
,getLength:function(){}
,toArray:function(){}
}});}
)();
(function(){var a="qx.core.ValidationError";qx.Class.define(a,{extend:qx.type.BaseError});}
)();
(function(){var a="qx.util.RingBuffer";qx.Class.define(a,{extend:Object,construct:function(b){this.setMaxEntries(b||50);}
,members:{__bM:0,__bN:0,__bO:false,__bP:0,__bQ:null,__bR:null,setMaxEntries:function(c){this.__bR=c;this.clear();}
,getMaxEntries:function(){return this.__bR;}
,addEntry:function(d){this.__bQ[this.__bM]=d;this.__bM=this.__bS(this.__bM,1);var e=this.getMaxEntries();if(this.__bN<e){this.__bN++ ;}
;if(this.__bO&&(this.__bP<e)){this.__bP++ ;}
;}
,mark:function(){this.__bO=true;this.__bP=0;}
,clearMark:function(){this.__bO=false;}
,getAllEntries:function(){return this.getEntries(this.getMaxEntries(),false);}
,getEntries:function(f,g){if(f>this.__bN){f=this.__bN;}
;if(g&&this.__bO&&(f>this.__bP)){f=this.__bP;}
;if(f>0){var i=this.__bS(this.__bM,-1);var h=this.__bS(i,-f+1);var j;if(h<=i){j=this.__bQ.slice(h,i+1);}
else {j=this.__bQ.slice(h,this.__bN).concat(this.__bQ.slice(0,i+1));}
;}
else {j=[];}
;return j;}
,clear:function(){this.__bQ=new Array(this.getMaxEntries());this.__bN=0;this.__bP=0;this.__bM=0;}
,__bS:function(k,l){var m=this.getMaxEntries();var n=(k+l)%m;if(n<0){n+=m;}
;return n;}
}});}
)();
(function(){var a="qx.log.appender.RingBuffer";qx.Class.define(a,{extend:qx.util.RingBuffer,construct:function(b){this.setMaxMessages(b||50);}
,members:{setMaxMessages:function(c){this.setMaxEntries(c);}
,getMaxMessages:function(){return this.getMaxEntries();}
,process:function(d){this.addEntry(d);}
,getAllLogEvents:function(){return this.getAllEntries();}
,retrieveLogEvents:function(e,f){return this.getEntries(e,f);}
,clearHistory:function(){this.clear();}
}});}
)();
(function(){var k="qx.log.Logger",j="[",h="#",g=": ",f="warn",e="document",d="{...(",c="",b="text[",a="[...(",K="\n",J=")}",I=")]",H="object",G="...(+",F="array",E=")",D="info",C="instance",B="string",s="null",t="class",q="number",r="stringify",o="]",p="date",m="function",n="boolean",u="debug",v="map",x="node",w="error",z="undefined",y="unknown",A="qx.debug";qx.Class.define(k,{statics:{__bT:u,setLevel:function(L){this.__bT=L;}
,getLevel:function(){return this.__bT;}
,setTreshold:function(M){this.__bW.setMaxMessages(M);}
,getTreshold:function(){return this.__bW.getMaxMessages();}
,__bU:{},__bV:0,register:function(N){if(N.$$id){return;}
;var P=this.__bV++ ;this.__bU[P]=N;N.$$id=P;var O=this.__bX;var Q=this.__bW.getAllLogEvents();for(var i=0,l=Q.length;i<l;i++ ){if(O[Q[i].level]>=O[this.__bT]){N.process(Q[i]);}
;}
;}
,unregister:function(R){var S=R.$$id;if(S==null){return;}
;delete this.__bU[S];delete R.$$id;}
,debug:function(T,U){qx.log.Logger.__bY(u,arguments);}
,info:function(V,W){qx.log.Logger.__bY(D,arguments);}
,warn:function(X,Y){qx.log.Logger.__bY(f,arguments);}
,error:function(ba,bb){qx.log.Logger.__bY(w,arguments);}
,trace:function(bc){var bd=qx.dev.StackTrace.getStackTrace();qx.log.Logger.__bY(D,[(typeof bc!==z?[bc].concat(bd):bd).join(K)]);}
,deprecatedMethodWarning:function(be,bf){if(qx.core.Environment.get(A)){var bg=qx.lang.Function.getName(be);this.warn("The method '"+bg+"' is deprecated: "+(bf||"Please consult the API documentation of this method for alternatives."));this.trace();}
;}
,deprecatedClassWarning:function(bh,bi){if(qx.core.Environment.get(A)){var bj=bh.classname||y;this.warn("The class '"+bj+"' is deprecated: "+(bi||"Please consult the API documentation of this class for alternatives."));this.trace();}
;}
,deprecatedEventWarning:function(bk,event,bl){if(qx.core.Environment.get(A)){var bm=bk.self?bk.self.classname:y;this.warn("The event '"+(event||"unknown")+"' from class '"+bm+"' is deprecated: "+(bl||"Please consult the API documentation of this class for alternatives."));this.trace();}
;}
,deprecatedMixinWarning:function(bn,bo){if(qx.core.Environment.get(A)){var bp=bn?bn.name:y;this.warn("The mixin '"+bp+"' is deprecated: "+(bo||"Please consult the API documentation of this class for alternatives."));this.trace();}
;}
,deprecatedConstantWarning:function(bq,br,bs){if(qx.core.Environment.get(A)){if(bq.__defineGetter__){var self=this;var bt=bq[br];bq.__defineGetter__(br,function(){self.warn("The constant '"+br+"' is deprecated: "+(bs||"Please consult the API documentation for alternatives."));self.trace();return bt;}
);}
;}
;}
,deprecateMethodOverriding:function(bu,bv,bw,bx){if(qx.core.Environment.get(A)){var by=bu.constructor;while(by.classname!==bv.classname){if(by.prototype.hasOwnProperty(bw)){this.warn("The method '"+qx.lang.Function.getName(bu[bw])+"' overrides a deprecated method: "+(bx||"Please consult the API documentation for alternatives."));this.trace();break;}
;by=by.superclass;}
;}
;}
,clear:function(){this.__bW.clearHistory();}
,__bW:new qx.log.appender.RingBuffer(50),__bX:{debug:0,info:1,warn:2,error:3},__bY:function(bz,bA){var bF=this.__bX;if(bF[bz]<bF[this.__bT]){return;}
;var bC=bA.length<2?null:bA[0];var bE=bC?1:0;var bB=[];for(var i=bE,l=bA.length;i<l;i++ ){bB.push(this.__cb(bA[i],true));}
;var bG=new Date;var bH={time:bG,offset:bG-qx.Bootstrap.LOADSTART,level:bz,items:bB,win:window};if(bC){if(bC.$$hash!==undefined){bH.object=bC.$$hash;}
else if(bC.$$type){bH.clazz=bC;}
;}
;this.__bW.process(bH);var bI=this.__bU;for(var bD in bI){bI[bD].process(bH);}
;}
,__ca:function(bJ){if(bJ===undefined){return z;}
else if(bJ===null){return s;}
;if(bJ.$$type){return t;}
;var bK=typeof bJ;if(bK===m||bK==B||bK===q||bK===n){return bK;}
else if(bK===H){if(bJ.nodeType){return x;}
else if(bJ instanceof Error||(bJ.name&&bJ.message)){return w;}
else if(bJ.classname){return C;}
else if(bJ instanceof Array){return F;}
else if(bJ instanceof Date){return p;}
else {return v;}
;}
;if(bJ.toString){return r;}
;return y;}
,__cb:function(bL,bM){var bT=this.__ca(bL);var bP=y;var bO=[];switch(bT){case s:case z:bP=bT;break;case B:case q:case n:case p:bP=bL;break;case x:if(bL.nodeType===9){bP=e;}
else if(bL.nodeType===3){bP=b+bL.nodeValue+o;}
else if(bL.nodeType===1){bP=bL.nodeName.toLowerCase();if(bL.id){bP+=h+bL.id;}
;}
else {bP=x;}
;break;case m:bP=qx.lang.Function.getName(bL)||bT;break;case C:bP=bL.basename+j+bL.$$hash+o;break;case t:case r:bP=bL.toString();break;case w:bO=qx.dev.StackTrace.getStackTraceFromError(bL);bP=(bL.basename?bL.basename+g:c)+bL.toString();break;case F:if(bM){bP=[];for(var i=0,l=bL.length;i<l;i++ ){if(bP.length>20){bP.push(G+(l-i)+E);break;}
;bP.push(this.__cb(bL[i],false));}
;}
else {bP=a+bL.length+I;}
;break;case v:if(bM){var bN;var bS=[];for(var bR in bL){bS.push(bR);}
;bS.sort();bP=[];for(var i=0,l=bS.length;i<l;i++ ){if(bP.length>20){bP.push(G+(l-i)+E);break;}
;bR=bS[i];bN=this.__cb(bL[bR],false);bN.key=bR;bP.push(bN);}
;}
else {var bQ=0;for(var bR in bL){bQ++ ;}
;bP=d+bQ+J;}
;break;};return {type:bT,text:bP,trace:bO};}
},defer:function(bU){var bV=qx.Bootstrap.$$logs;for(var i=0;i<bV.length;i++ ){bU.__bY(bV[i][0],bV[i][1]);}
;qx.Bootstrap.debug=bU.debug;qx.Bootstrap.info=bU.info;qx.Bootstrap.warn=bU.warn;qx.Bootstrap.error=bU.error;qx.Bootstrap.trace=bU.trace;}
});}
)();
(function(){var e="info",d="debug",c="warn",b="qx.core.MLogging",a="error";qx.Mixin.define(b,{members:{__cc:qx.log.Logger,debug:function(f){this.__cd(d,arguments);}
,info:function(g){this.__cd(e,arguments);}
,warn:function(h){this.__cd(c,arguments);}
,error:function(i){this.__cd(a,arguments);}
,trace:function(){this.__cc.trace(this);}
,__cd:function(j,k){var l=qx.lang.Array.fromArguments(k);l.unshift(this);this.__cc[j].apply(this.__cc,l);}
}});}
)();
(function(){var c="qx.dom.Node",b="";qx.Bootstrap.define(c,{statics:{ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12,getDocument:function(d){return d.nodeType===this.DOCUMENT?d:d.ownerDocument||d.document;}
,getWindow:function(e){if(e.nodeType==null){return e;}
;if(e.nodeType!==this.DOCUMENT){e=e.ownerDocument;}
;return e.defaultView||e.parentWindow;}
,getDocumentElement:function(f){return this.getDocument(f).documentElement;}
,getBodyElement:function(g){return this.getDocument(g).body;}
,isNode:function(h){return !!(h&&h.nodeType!=null);}
,isElement:function(j){return !!(j&&j.nodeType===this.ELEMENT);}
,isDocument:function(k){return !!(k&&k.nodeType===this.DOCUMENT);}
,isText:function(l){return !!(l&&l.nodeType===this.TEXT);}
,isWindow:function(m){return !!(m&&m.history&&m.location&&m.document);}
,isNodeName:function(n,o){if(!o||!n||!n.nodeName){return false;}
;return o.toLowerCase()==qx.dom.Node.getName(n);}
,getName:function(p){if(!p||!p.nodeName){return null;}
;return p.nodeName.toLowerCase();}
,getText:function(q){if(!q||!q.nodeType){return null;}
;switch(q.nodeType){case 1:var i,a=[],r=q.childNodes,length=r.length;for(i=0;i<length;i++ ){a[i]=this.getText(r[i]);}
;return a.join(b);case 2:case 3:case 4:return q.nodeValue;};return null;}
,isBlockNode:function(s){if(!qx.dom.Node.isElement(s)){return false;}
;s=qx.dom.Node.getName(s);return /^(body|form|textarea|fieldset|ul|ol|dl|dt|dd|li|div|hr|p|h[1-6]|quote|pre|table|thead|tbody|tfoot|tr|td|th|iframe|address|blockquote)$/.test(s);}
}});}
)();
(function(){var q="HTMLEvents",p="engine.name",o="E",n="qx.bom.Event",m="mouseover",l="transitionend",k="gecko",j="e",i="nd",h="transition",c="return;",g="Trans",f="qx.debug",b="function",a="undefined",d="on";qx.Bootstrap.define(n,{statics:{addNativeListener:function(r,s,t,u){if(r.addEventListener){r.addEventListener(s,t,!!u);}
else if(r.attachEvent){r.attachEvent(d+s,t);}
else if(typeof r[d+s]!=a){r[d+s]=t;}
else {if(qx.core.Environment.get(f)){qx.log.Logger.warn("No method available to add native listener to "+r);}
;}
;}
,removeNativeListener:function(v,w,x,y){if(v.removeEventListener){v.removeEventListener(w,x,!!y);}
else if(v.detachEvent){try{v.detachEvent(d+w,x);}
catch(e){if(e.number!==-2146828218){throw e;}
;}
;}
else if(typeof v[d+w]!=a){v[d+w]=null;}
else {if(qx.core.Environment.get(f)){qx.log.Logger.warn("No method available to remove native listener from "+v);}
;}
;}
,getTarget:function(e){return e.target||e.srcElement;}
,getRelatedTarget:function(e){if(e.relatedTarget!==undefined){if((qx.core.Environment.get(p)==k)){try{e.relatedTarget&&e.relatedTarget.nodeType;}
catch(z){return null;}
;}
;return e.relatedTarget;}
else if(e.fromElement!==undefined&&e.type===m){return e.fromElement;}
else if(e.toElement!==undefined){return e.toElement;}
else {return null;}
;}
,preventDefault:function(e){if(e.preventDefault){e.preventDefault();}
else {try{e.keyCode=0;}
catch(A){}
;e.returnValue=false;}
;}
,stopPropagation:function(e){if(e.stopPropagation){e.stopPropagation();}
else {e.cancelBubble=true;}
;}
,fire:function(B,C){if(document.createEvent){var D=document.createEvent(q);D.initEvent(C,true,true);return !B.dispatchEvent(D);}
else {var D=document.createEventObject();return B.fireEvent(d+C,D);}
;}
,supportsEvent:function(E,F){if(F.toLowerCase().indexOf(l)!=-1){var I=qx.bom.Style.getPropertyName(h);if(!I){return false;}
;var J=qx.lang.String.firstLow(I)+(I.indexOf(g)>0?o:j)+i;return F==J;}
;var G=d+F;var H=(G in E);if(!H){H=typeof E[G]==b;if(!H&&E.setAttribute){E.setAttribute(G,c);H=typeof E[G]==b;E.removeAttribute(G);}
;}
;return H;}
}});}
)();
(function(){var e='-',d="qx.bom.Style",c="string",b="",a="-";qx.Bootstrap.define(d,{statics:{VENDOR_PREFIXES:["Webkit","Moz","O","ms","Khtml"],__ce:{},getPropertyName:function(f){var g=document.documentElement.style;if(g[f]!==undefined){return f;}
;for(var i=0,l=this.VENDOR_PREFIXES.length;i<l;i++ ){var h=this.VENDOR_PREFIXES[i]+qx.lang.String.firstUp(f);if(g[h]!==undefined){return h;}
;}
;return null;}
,getCssName:function(j){var k=this.__ce[j];if(!k){k=j.replace(/[A-Z]/g,function(m){return (e+m.charAt(0).toLowerCase());}
);if((/^ms/.test(k))){k=a+k;}
;this.__ce[j]=k;}
;return k;}
,getAppliedStyle:function(n,o,p,q){var r=(q!==false)?[null].concat(this.VENDOR_PREFIXES):[null];for(var i=0,l=r.length;i<l;i++ ){var s=r[i]?a+r[i].toLowerCase()+a+p:p;try{n.style[o]=s;if(typeof n.style[o]==c&&n.style[o]!==b){return s;}
;}
catch(t){}
;}
;return null;}
}});}
)();
(function(){var k="Failed to remove event listener for id '",j="Invalid context for callback.",h="Failed to add event listener for type '",g="UNKNOWN_",f="__ck",e="capture",d="qx.event.Manager",c="' on target '",b="Could not dispatch event '",a="DOM_",J="QX_",I=" to the target '",H="__cj",G="Failed to remove event listener for type '",F="Invalid id type.",E="c",D="DOCUMENT_",C="WIN_",B="Invalid event object.",A="Invalid capture flag.",s="Invalid event type.",t=" from the target '",q="Invalid callback function",r="Invalid event target.",o="unload",p="'",m="",n="_",u="Invalid Target.",v="': ",x="|",w="|bubble",z="|capture",y="qx.debug";qx.Class.define(d,{extend:Object,construct:function(K,L){this.__cf=K;this.__cg=qx.core.ObjectRegistry.toHashCode(K);this.__ch=L;if(K.qx!==qx){var self=this;qx.bom.Event.addNativeListener(K,o,qx.event.GlobalError.observeMethod(function(){qx.bom.Event.removeNativeListener(K,o,arguments.callee);self.dispose();}
));}
;this.__ci={};this.__cj={};this.__ck={};this.__cl={};}
,statics:{__cm:0,getNextUniqueId:function(){return (this.__cm++ )+m;}
},members:{__ch:null,__ci:null,__ck:null,__cn:null,__cj:null,__cl:null,__cf:null,__cg:null,getWindow:function(){return this.__cf;}
,getWindowId:function(){return this.__cg;}
,getHandler:function(M){var N=this.__cj[M.classname];if(N){return N;}
;return this.__cj[M.classname]=new M(this);}
,getDispatcher:function(O){var P=this.__ck[O.classname];if(P){return P;}
;return this.__ck[O.classname]=new O(this,this.__ch);}
,getListeners:function(Q,R,S){var T=Q.$$hash||qx.core.ObjectRegistry.toHashCode(Q);var V=this.__ci[T];if(!V){return null;}
;var W=R+(S?z:w);var U=V[W];return U?U.concat():null;}
,getAllListeners:function(){return this.__ci;}
,serializeListeners:function(X){var bf=X.$$hash||qx.core.ObjectRegistry.toHashCode(X);var bh=this.__ci[bf];var bd=[];if(bh){var bb,bg,Y,bc,be;for(var ba in bh){bb=ba.indexOf(x);bg=ba.substring(0,bb);Y=ba.charAt(bb+1)==E;bc=bh[ba];for(var i=0,l=bc.length;i<l;i++ ){be=bc[i];bd.push({self:be.context,handler:be.handler,type:bg,capture:Y});}
;}
;}
;return bd;}
,toggleAttachedEvents:function(bi,bj){var bo=bi.$$hash||qx.core.ObjectRegistry.toHashCode(bi);var bq=this.__ci[bo];if(bq){var bl,bp,bk,bm;for(var bn in bq){bl=bn.indexOf(x);bp=bn.substring(0,bl);bk=bn.charCodeAt(bl+1)===99;bm=bq[bn];if(bj){this.__co(bi,bp,bk);}
else {this.__cp(bi,bp,bk);}
;}
;}
;}
,hasListener:function(br,bs,bt){if(qx.core.Environment.get(y)){if(br==null){qx.log.Logger.trace(this);throw new Error("Invalid object: "+br);}
;}
;var bu=br.$$hash||qx.core.ObjectRegistry.toHashCode(br);var bw=this.__ci[bu];if(!bw){return false;}
;var bx=bs+(bt?z:w);var bv=bw[bx];return !!(bv&&bv.length>0);}
,importListeners:function(by,bz){if(qx.core.Environment.get(y)){if(by==null){qx.log.Logger.trace(this);throw new Error("Invalid object: "+by);}
;}
;var bF=by.$$hash||qx.core.ObjectRegistry.toHashCode(by);var bG=this.__ci[bF]={};var bC=qx.event.Manager;for(var bA in bz){var bD=bz[bA];var bE=bD.type+(bD.capture?z:w);var bB=bG[bE];if(!bB){bB=bG[bE]=[];this.__co(by,bD.type,bD.capture);}
;bB.push({handler:bD.listener,context:bD.self,unique:bD.unique||(bC.__cm++ )+m});}
;}
,addListener:function(bH,bI,bJ,self,bK){if(qx.core.Environment.get(y)){var bO=h+bI+p+I+bH.classname+v;qx.core.Assert.assertObject(bH,bO+u);qx.core.Assert.assertString(bI,bO+s);qx.core.Assert.assertFunction(bJ,bO+q);if(bK!==undefined){qx.core.Assert.assertBoolean(bK,A);}
;}
;var bP=bH.$$hash||qx.core.ObjectRegistry.toHashCode(bH);var bR=this.__ci[bP];if(!bR){bR=this.__ci[bP]={};}
;var bN=bI+(bK?z:w);var bM=bR[bN];if(!bM){bM=bR[bN]=[];}
;if(bM.length===0){this.__co(bH,bI,bK);}
;var bQ=(qx.event.Manager.__cm++ )+m;var bL={handler:bJ,context:self,unique:bQ};bM.push(bL);return bN+x+bQ;}
,findHandler:function(bS,bT){var cg=false,bX=false,ch=false,bU=false;var ce;if(bS.nodeType===1){cg=true;ce=a+bS.tagName.toLowerCase()+n+bT;}
else if(bS.nodeType===9){bU=true;ce=D+bT;}
else if(bS==this.__cf){bX=true;ce=C+bT;}
else if(bS.classname){ch=true;ce=J+bS.classname+n+bT;}
else {ce=g+bS+n+bT;}
;var ca=this.__cl;if(ca[ce]){return ca[ce];}
;var cd=this.__ch.getHandlers();var bY=qx.event.IEventHandler;var cb,cc,bW,bV;for(var i=0,l=cd.length;i<l;i++ ){cb=cd[i];bW=cb.SUPPORTED_TYPES;if(bW&&!bW[bT]){continue;}
;bV=cb.TARGET_CHECK;if(bV){var cf=false;if(cg&&((bV&bY.TARGET_DOMNODE)!=0)){cf=true;}
else if(bX&&((bV&bY.TARGET_WINDOW)!=0)){cf=true;}
else if(ch&&((bV&bY.TARGET_OBJECT)!=0)){cf=true;}
else if(bU&&((bV&bY.TARGET_DOCUMENT)!=0)){cf=true;}
;if(!cf){continue;}
;}
;cc=this.getHandler(cd[i]);if(cb.IGNORE_CAN_HANDLE||cc.canHandleEvent(bS,bT)){ca[ce]=cc;return cc;}
;}
;return null;}
,__co:function(ci,cj,ck){var cl=this.findHandler(ci,cj);if(cl){cl.registerEvent(ci,cj,ck);return;}
;if(qx.core.Environment.get(y)){qx.log.Logger.warn(this,"There is no event handler for the event '"+cj+"' on target '"+ci+"'!");}
;}
,removeListener:function(cm,cn,co,self,cp){if(qx.core.Environment.get(y)){var ct=G+cn+p+t+cm.classname+v;qx.core.Assert.assertObject(cm,ct+u);qx.core.Assert.assertString(cn,ct+s);qx.core.Assert.assertFunction(co,ct+q);if(self!==undefined){qx.core.Assert.assertObject(self,j);}
;if(cp!==undefined){qx.core.Assert.assertBoolean(cp,A);}
;}
;var cu=cm.$$hash||qx.core.ObjectRegistry.toHashCode(cm);var cv=this.__ci[cu];if(!cv){return false;}
;var cq=cn+(cp?z:w);var cr=cv[cq];if(!cr){return false;}
;var cs;for(var i=0,l=cr.length;i<l;i++ ){cs=cr[i];if(cs.handler===co&&cs.context===self){qx.lang.Array.removeAt(cr,i);if(cr.length==0){this.__cp(cm,cn,cp);}
;return true;}
;}
;return false;}
,removeListenerById:function(cw,cx){if(qx.core.Environment.get(y)){var cD=k+cx+p+t+cw.classname+v;qx.core.Assert.assertObject(cw,cD+u);qx.core.Assert.assertString(cx,cD+F);}
;var cB=cx.split(x);var cG=cB[0];var cy=cB[1].charCodeAt(0)==99;var cF=cB[2];var cE=cw.$$hash||qx.core.ObjectRegistry.toHashCode(cw);var cH=this.__ci[cE];if(!cH){return false;}
;var cC=cG+(cy?z:w);var cA=cH[cC];if(!cA){return false;}
;var cz;for(var i=0,l=cA.length;i<l;i++ ){cz=cA[i];if(cz.unique===cF){qx.lang.Array.removeAt(cA,i);if(cA.length==0){this.__cp(cw,cG,cy);}
;return true;}
;}
;return false;}
,removeAllListeners:function(cI){var cM=cI.$$hash||qx.core.ObjectRegistry.toHashCode(cI);var cO=this.__ci[cM];if(!cO){return false;}
;var cK,cN,cJ;for(var cL in cO){if(cO[cL].length>0){cK=cL.split(x);cN=cK[0];cJ=cK[1]===e;this.__cp(cI,cN,cJ);}
;}
;delete this.__ci[cM];return true;}
,deleteAllListeners:function(cP){delete this.__ci[cP];}
,__cp:function(cQ,cR,cS){var cT=this.findHandler(cQ,cR);if(cT){cT.unregisterEvent(cQ,cR,cS);return;}
;if(qx.core.Environment.get(y)){qx.log.Logger.warn(this,"There is no event handler for the event '"+cR+"' on target '"+cQ+"'!");}
;}
,dispatchEvent:function(cU,event){if(qx.core.Environment.get(y)){var da=b+event+c+cU.classname+v;qx.core.Assert.assertNotUndefined(cU,da+r);qx.core.Assert.assertNotNull(cU,da+r);qx.core.Assert.assertInstance(event,qx.event.type.Event,da+B);}
;var db=event.getType();if(!event.getBubbles()&&!this.hasListener(cU,db)){qx.event.Pool.getInstance().poolObject(event);return true;}
;if(!event.getTarget()){event.setTarget(cU);}
;var cY=this.__ch.getDispatchers();var cX;var cW=false;for(var i=0,l=cY.length;i<l;i++ ){cX=this.getDispatcher(cY[i]);if(cX.canDispatchEvent(cU,event,db)){cX.dispatchEvent(cU,event,db);cW=true;break;}
;}
;if(!cW){if(qx.core.Environment.get(y)){qx.log.Logger.error(this,"No dispatcher can handle event of type "+db+" on "+cU);}
;return true;}
;var cV=event.getDefaultPrevented();qx.event.Pool.getInstance().poolObject(event);return !cV;}
,dispose:function(){this.__ch.removeManager(this);qx.util.DisposeUtil.disposeMap(this,H);qx.util.DisposeUtil.disposeMap(this,f);this.__ci=this.__cf=this.__cn=null;this.__ch=this.__cl=null;}
}});}
)();
(function(){var b="qx.event.GlobalError",a="qx.globalErrorHandling";qx.Bootstrap.define(b,{statics:{__cq:null,__cr:null,__cs:null,__ct:function(){if(qx.core&&qx.core.Environment){return qx.core.Environment.get(a);}
else {return !!qx.Bootstrap.getEnvironmentSetting(a);}
;}
,setErrorHandler:function(c,d){this.__cq=c||null;this.__cs=d||window;if(this.__ct()){if(c&&window.onerror){var e=qx.Bootstrap.bind(this.__cu,this);if(this.__cr==null){this.__cr=window.onerror;}
;var self=this;window.onerror=function(f,g,h){self.__cr(f,g,h);e(f,g,h);}
;}
;if(c&&!window.onerror){window.onerror=qx.Bootstrap.bind(this.__cu,this);}
;if(this.__cq==null){if(this.__cr!=null){window.onerror=this.__cr;this.__cr=null;}
else {window.onerror=null;}
;}
;}
;}
,__cu:function(i,j,k){if(this.__cq){this.handleError(new qx.core.WindowError(i,j,k));}
;}
,observeMethod:function(l){if(this.__ct()){var self=this;return function(){if(!self.__cq){return l.apply(this,arguments);}
;try{return l.apply(this,arguments);}
catch(m){self.handleError(new qx.core.GlobalError(m,arguments));}
;}
;}
else {return l;}
;}
,handleError:function(n){if(this.__cq){this.__cq.call(this.__cs,n);}
;}
},defer:function(o){if(qx.core&&qx.core.Environment){qx.core.Environment.add(a,true);}
else {qx.Bootstrap.setEnvironmentSetting(a,true);}
;o.setErrorHandler(null,null);}
});}
)();
(function(){var b="",a="qx.core.WindowError";qx.Bootstrap.define(a,{extend:Error,construct:function(c,d,e){var f=Error.call(this,c);if(f.stack){this.stack=f.stack;}
;if(f.stacktrace){this.stacktrace=f.stacktrace;}
;this.__cv=c;this.__cw=d||b;this.__cx=e===undefined?-1:e;}
,members:{__cv:null,__cw:null,__cx:null,toString:function(){return this.__cv;}
,getUri:function(){return this.__cw;}
,getLineNumber:function(){return this.__cx;}
}});}
)();
(function(){var b="GlobalError: ",a="qx.core.GlobalError";qx.Bootstrap.define(a,{extend:Error,construct:function(c,d){if(qx.Bootstrap.DEBUG){qx.core.Assert.assertNotUndefined(c);}
;this.__cv=b+(c&&c.message?c.message:c);var e=Error.call(this,this.__cv);if(e.stack){this.stack=e.stack;}
;if(e.stacktrace){this.stacktrace=e.stacktrace;}
;this.__cy=d;this.__cz=c;}
,members:{__cz:null,__cy:null,__cv:null,toString:function(){return this.__cv;}
,getArguments:function(){return this.__cy;}
,getSourceException:function(){return this.__cz;}
},destruct:function(){this.__cz=null;this.__cy=null;this.__cv=null;}
});}
)();
(function(){var a="qx.event.IEventHandler";qx.Interface.define(a,{statics:{TARGET_DOMNODE:1,TARGET_WINDOW:2,TARGET_OBJECT:4,TARGET_DOCUMENT:8},members:{canHandleEvent:function(b,c){}
,registerEvent:function(d,e,f){}
,unregisterEvent:function(g,h,i){}
}});}
)();
(function(){var k="Invalid event dispatcher!",j="': ",i="Invalid event handler.",h="' on target '",g="Could not fire event '",f="undefined",e="qx.event.Registration",d="Invalid event target.",c="qx.debug";qx.Class.define(e,{statics:{__cL:{},getManager:function(l){if(l==null){if(qx.core.Environment.get(c)){qx.log.Logger.error("qx.event.Registration.getManager(null) was called!");qx.log.Logger.trace(this);}
;l=window;}
else if(l.nodeType){l=qx.dom.Node.getWindow(l);}
else if(!qx.dom.Node.isWindow(l)){l=window;}
;var n=l.$$hash||qx.core.ObjectRegistry.toHashCode(l);var m=this.__cL[n];if(!m){m=new qx.event.Manager(l,this);this.__cL[n]=m;}
;return m;}
,removeManager:function(o){var p=o.getWindowId();delete this.__cL[p];}
,addListener:function(q,r,s,self,t){return this.getManager(q).addListener(q,r,s,self,t);}
,removeListener:function(u,v,w,self,x){return this.getManager(u).removeListener(u,v,w,self,x);}
,removeListenerById:function(y,z){return this.getManager(y).removeListenerById(y,z);}
,removeAllListeners:function(A){return this.getManager(A).removeAllListeners(A);}
,deleteAllListeners:function(B){var C=B.$$hash;if(C){this.getManager(B).deleteAllListeners(C);}
;}
,hasListener:function(D,E,F){return this.getManager(D).hasListener(D,E,F);}
,serializeListeners:function(G){return this.getManager(G).serializeListeners(G);}
,createEvent:function(H,I,J){if(qx.core.Environment.get(c)){if(arguments.length>1&&I===undefined){throw new Error("Create event of type "+H+" with undefined class. Please use null to explicit fallback to default event type!");}
;}
;if(I==null){I=qx.event.type.Event;}
;var K=qx.event.Pool.getInstance().getObject(I);J?K.init.apply(K,J):K.init();if(H){K.setType(H);}
;return K;}
,dispatchEvent:function(L,event){return this.getManager(L).dispatchEvent(L,event);}
,fireEvent:function(M,N,O,P){if(qx.core.Environment.get(c)){if(arguments.length>2&&O===undefined&&P!==undefined){throw new Error("Create event of type "+N+" with undefined class. Please use null to explicit fallback to default event type!");}
;var Q=g+N+h+(M?M.classname:f)+j;qx.core.Assert.assertNotUndefined(M,Q+d);qx.core.Assert.assertNotNull(M,Q+d);}
;var R=this.createEvent(N,O||null,P);return this.getManager(M).dispatchEvent(M,R);}
,fireNonBubblingEvent:function(S,T,U,V){if(qx.core.Environment.get(c)){if(arguments.length>2&&U===undefined&&V!==undefined){throw new Error("Create event of type "+T+" with undefined class. Please use null to explicit fallback to default event type!");}
;}
;var W=this.getManager(S);if(!W.hasListener(S,T,false)){return true;}
;var X=this.createEvent(T,U||null,V);return W.dispatchEvent(S,X);}
,PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__cj:[],addHandler:function(Y){if(qx.core.Environment.get(c)){qx.core.Assert.assertInterface(Y,qx.event.IEventHandler,i);}
;this.__cj.push(Y);this.__cj.sort(function(a,b){return a.PRIORITY-b.PRIORITY;}
);}
,getHandlers:function(){return this.__cj;}
,__ck:[],addDispatcher:function(ba,bb){if(qx.core.Environment.get(c)){qx.core.Assert.assertInterface(ba,qx.event.IEventDispatcher,k);}
;this.__ck.push(ba);this.__ck.sort(function(a,b){return a.PRIORITY-b.PRIORITY;}
);}
,getDispatchers:function(){return this.__ck;}
}});}
)();
(function(){var a="qx.core.MEvent";qx.Mixin.define(a,{members:{__cM:qx.event.Registration,addListener:function(b,c,self,d){if(!this.$$disposed){return this.__cM.addListener(this,b,c,self,d);}
;return null;}
,addListenerOnce:function(f,g,self,h){var i=function(e){this.removeListener(f,g,this,h);g.call(self||this,e);}
;g.$$wrapped_callback=i;return this.addListener(f,i,this,h);}
,removeListener:function(j,k,self,l){if(!this.$$disposed){if(k.$$wrapped_callback){var m=k.$$wrapped_callback;delete k.$$wrapped_callback;k=m;}
;return this.__cM.removeListener(this,j,k,self,l);}
;return false;}
,removeListenerById:function(n){if(!this.$$disposed){return this.__cM.removeListenerById(this,n);}
;return false;}
,hasListener:function(o,p){return this.__cM.hasListener(this,o,p);}
,dispatchEvent:function(q){if(!this.$$disposed){return this.__cM.dispatchEvent(this,q);}
;return true;}
,fireEvent:function(r,s,t){if(!this.$$disposed){return this.__cM.fireEvent(this,r,s,t);}
;return true;}
,fireNonBubblingEvent:function(u,v,w){if(!this.$$disposed){return this.__cM.fireNonBubblingEvent(this,u,v,w);}
;return true;}
,fireDataEvent:function(x,y,z,A){if(!this.$$disposed){if(z===undefined){z=null;}
;return this.__cM.fireNonBubblingEvent(this,x,qx.event.type.Data,[y,z,!!A]);}
;return true;}
}});}
)();
(function(){var a="qx.event.IEventDispatcher";qx.Interface.define(a,{members:{canDispatchEvent:function(b,event,c){this.assertInstance(event,qx.event.type.Event);this.assertString(c);}
,dispatchEvent:function(d,event,e){this.assertInstance(event,qx.event.type.Event);this.assertString(e);}
}});}
)();
(function(){var d="qx.core.MProperty",c="reset",b="get",a="set";qx.Mixin.define(d,{members:{set:function(e,f){var h=qx.core.Property.$$method.set;if(qx.Bootstrap.isString(e)){if(!this[h[e]]){if(this[a+qx.Bootstrap.firstUp(e)]!=undefined){this[a+qx.Bootstrap.firstUp(e)](f);return this;}
;throw new Error("No such property: "+e);}
;return this[h[e]](f);}
else {for(var g in e){if(!this[h[g]]){if(this[a+qx.Bootstrap.firstUp(g)]!=undefined){this[a+qx.Bootstrap.firstUp(g)](e[g]);continue;}
;throw new Error("No such property: "+g);}
;this[h[g]](e[g]);}
;return this;}
;}
,get:function(i){var j=qx.core.Property.$$method.get;if(!this[j[i]]){if(this[b+qx.Bootstrap.firstUp(i)]!=undefined){return this[b+qx.Bootstrap.firstUp(i)]();}
;throw new Error("No such property: "+i);}
;return this[j[i]]();}
,reset:function(k){var l=qx.core.Property.$$method.reset;if(!this[l[k]]){if(this[c+qx.Bootstrap.firstUp(k)]!=undefined){this[c+qx.Bootstrap.firstUp(k)]();return;}
;throw new Error("No such property: "+k);}
;this[l[k]]();}
}});}
)();
(function(){var a="qx.core.MAssert";qx.Mixin.define(a,{members:{assert:function(b,c){qx.core.Assert.assert(b,c);}
,fail:function(d,e){qx.core.Assert.fail(d,e);}
,assertTrue:function(f,g){qx.core.Assert.assertTrue(f,g);}
,assertFalse:function(h,i){qx.core.Assert.assertFalse(h,i);}
,assertEquals:function(j,k,l){qx.core.Assert.assertEquals(j,k,l);}
,assertNotEquals:function(m,n,o){qx.core.Assert.assertNotEquals(m,n,o);}
,assertIdentical:function(p,q,r){qx.core.Assert.assertIdentical(p,q,r);}
,assertNotIdentical:function(s,t,u){qx.core.Assert.assertNotIdentical(s,t,u);}
,assertNotUndefined:function(v,w){qx.core.Assert.assertNotUndefined(v,w);}
,assertUndefined:function(x,y){qx.core.Assert.assertUndefined(x,y);}
,assertNotNull:function(z,A){qx.core.Assert.assertNotNull(z,A);}
,assertNull:function(B,C){qx.core.Assert.assertNull(B,C);}
,assertJsonEquals:function(D,E,F){qx.core.Assert.assertJsonEquals(D,E,F);}
,assertMatch:function(G,H,I){qx.core.Assert.assertMatch(G,H,I);}
,assertArgumentsCount:function(J,K,L,M){qx.core.Assert.assertArgumentsCount(J,K,L,M);}
,assertEventFired:function(N,event,O,P,Q){qx.core.Assert.assertEventFired(N,event,O,P,Q);}
,assertEventNotFired:function(R,event,S,T){qx.core.Assert.assertEventNotFired(R,event,S,T);}
,assertException:function(U,V,W,X){qx.core.Assert.assertException(U,V,W,X);}
,assertInArray:function(Y,ba,bb){qx.core.Assert.assertInArray(Y,ba,bb);}
,assertArrayEquals:function(bc,bd,be){qx.core.Assert.assertArrayEquals(bc,bd,be);}
,assertKeyInMap:function(bf,bg,bh){qx.core.Assert.assertKeyInMap(bf,bg,bh);}
,assertFunction:function(bi,bj){qx.core.Assert.assertFunction(bi,bj);}
,assertString:function(bk,bl){qx.core.Assert.assertString(bk,bl);}
,assertBoolean:function(bm,bn){qx.core.Assert.assertBoolean(bm,bn);}
,assertNumber:function(bo,bp){qx.core.Assert.assertNumber(bo,bp);}
,assertPositiveNumber:function(bq,br){qx.core.Assert.assertPositiveNumber(bq,br);}
,assertInteger:function(bs,bt){qx.core.Assert.assertInteger(bs,bt);}
,assertPositiveInteger:function(bu,bv){qx.core.Assert.assertPositiveInteger(bu,bv);}
,assertInRange:function(bw,bx,by,bz){qx.core.Assert.assertInRange(bw,bx,by,bz);}
,assertObject:function(bA,bB){qx.core.Assert.assertObject(bA,bB);}
,assertArray:function(bC,bD){qx.core.Assert.assertArray(bC,bD);}
,assertMap:function(bE,bF){qx.core.Assert.assertMap(bE,bF);}
,assertRegExp:function(bG,bH){qx.core.Assert.assertRegExp(bG,bH);}
,assertType:function(bI,bJ,bK){qx.core.Assert.assertType(bI,bJ,bK);}
,assertInstance:function(bL,bM,bN){qx.core.Assert.assertInstance(bL,bM,bN);}
,assertInterface:function(bO,bP,bQ){qx.core.Assert.assertInterface(bO,bP,bQ);}
,assertCssColor:function(bR,bS,bT){qx.core.Assert.assertCssColor(bR,bS,bT);}
,assertElement:function(bU,bV){qx.core.Assert.assertElement(bU,bV);}
,assertQxObject:function(bW,bX){qx.core.Assert.assertQxObject(bW,bX);}
,assertQxWidget:function(bY,ca){qx.core.Assert.assertQxWidget(bY,ca);}
}});}
)();
(function(){var n="module.events",m="qx.core.Object",k="[",j="$$user_",h="]",g="object",f="Object",e="rv:1.8.1",d="module.property",c="MSIE 6.0",a="qx.debug",b="qx.debug.dispose.level";qx.Class.define(m,{extend:Object,include:qx.core.Environment.filter({"module.databinding":qx.data.MBinding,"module.logger":qx.core.MLogging,"module.events":qx.core.MEvent,"module.property":qx.core.MProperty,"qx.debug":qx.core.MAssert}),construct:function(){qx.core.ObjectRegistry.register(this);}
,statics:{$$type:f},members:{__M:qx.core.Environment.get("module.property")?qx.core.Property:null,toHashCode:function(){return this.$$hash;}
,toString:function(){return this.classname+k+this.$$hash+h;}
,base:function(o,p){if(qx.core.Environment.get(a)){if(!qx.Bootstrap.isFunction(o.callee.base)){throw new Error("Cannot call super class. Method is not derived: "+o.callee.displayName);}
;}
;if(arguments.length===1){return o.callee.base.call(this);}
else {return o.callee.base.apply(this,Array.prototype.slice.call(arguments,1));}
;}
,self:function(q){return q.callee.self;}
,clone:function(){if(!qx.core.Environment.get(d)){throw new Error("Cloning only possible with properties.");}
;var s=this.constructor;var r=new s;var u=qx.Class.getProperties(s);var t=this.__M.$$store.user;var v=this.__M.$$method.set;var name;for(var i=0,l=u.length;i<l;i++ ){name=u[i];if(this.hasOwnProperty(t[name])){r[v[name]](this[t[name]]);}
;}
;return r;}
,__cN:null,setUserData:function(w,x){if(!this.__cN){this.__cN={};}
;this.__cN[w]=x;}
,getUserData:function(y){if(!this.__cN){return null;}
;var z=this.__cN[y];return z===undefined?null:z;}
,isDisposed:function(){return this.$$disposed||false;}
,dispose:function(){if(this.$$disposed){return;}
;this.$$disposed=true;this.$$instance=null;this.$$allowconstruct=null;if(qx.core.Environment.get(a)){if(qx.core.Environment.get(b)>2){qx.Bootstrap.debug(this,"Disposing "+this.classname+"["+this.toHashCode()+"]");}
;}
;var C=this.constructor;var A;while(C.superclass){if(C.$$destructor){C.$$destructor.call(this);}
;if(C.$$includes){A=C.$$flatIncludes;for(var i=0,l=A.length;i<l;i++ ){if(A[i].$$destructor){A[i].$$destructor.call(this);}
;}
;}
;C=C.superclass;}
;if(this.__cO){this.__cO();}
;if(qx.core.Environment.get(a)){if(qx.core.Environment.get(b)>0){var D,B;for(D in this){B=this[D];if(B!==null&&typeof B===g&&!(qx.Bootstrap.isString(B))){if(this.constructor.prototype[D]!=null){continue;}
;var F=navigator.userAgent.indexOf(e)!=-1;var E=navigator.userAgent.indexOf(c)!=-1;if(F||E){if(B instanceof qx.core.Object||qx.core.Environment.get(b)>1){qx.Bootstrap.warn(this,"Missing destruct definition for '"+D+"' in "+this.classname+"["+this.toHashCode()+"]: "+B);delete this[D];}
;}
else {if(qx.core.Environment.get(b)>1){qx.Bootstrap.warn(this,"Missing destruct definition for '"+D+"' in "+this.classname+"["+this.toHashCode()+"]: "+B);delete this[D];}
;}
;}
;}
;}
;}
;}
,__cO:null,__cP:function(){var G=qx.Class.getProperties(this.constructor);for(var i=0,l=G.length;i<l;i++ ){delete this[j+G[i]];}
;}
,_disposeObjects:function(H){qx.util.DisposeUtil.disposeObjects(this,arguments);}
,_disposeSingletonObjects:function(I){qx.util.DisposeUtil.disposeObjects(this,arguments,true);}
,_disposeArray:function(J){qx.util.DisposeUtil.disposeArray(this,J);}
,_disposeMap:function(K){qx.util.DisposeUtil.disposeMap(this,K);}
},environment:{"qx.debug.dispose.level":0},defer:function(L,M){var O=navigator.userAgent.indexOf(c)!=-1;var N=navigator.userAgent.indexOf(e)!=-1;if(O||N){M.__cO=M.__cP;}
;}
,destruct:function(){if(qx.core.Environment.get(n)){if(!qx.core.ObjectRegistry.inShutDown){qx.event.Registration.removeAllListeners(this);}
else {qx.event.Registration.deleteAllListeners(this);}
;}
;qx.core.ObjectRegistry.unregister(this);this.__cN=null;if(qx.core.Environment.get(d)){var R=this.constructor;var V;var W=this.__M.$$store;var T=W.user;var U=W.theme;var P=W.inherit;var S=W.useinit;var Q=W.init;while(R){V=R.$$properties;if(V){for(var name in V){if(V[name].dereference){this[T[name]]=this[U[name]]=this[P[name]]=this[S[name]]=this[Q[name]]=undefined;}
;}
;}
;R=R.superclass;}
;}
;}
});}
)();
(function(){var g="Container must be a instance of qx.ui.container.Composite or ",f="qx.debug",e="qx.ui.container.SlideBar or qx.ui.container.Stack!",d="qx.util.DisposeUtil",c="First argument must be a container widget!",b="qx.ui.container.Scroll or qx.ui.container.Resizer or ",a="undefined";qx.Class.define(d,{statics:{disposeObjects:function(h,j,k){var name;for(var i=0,l=j.length;i<l;i++ ){name=j[i];if(h[name]==null||!h.hasOwnProperty(name)){continue;}
;if(!qx.core.ObjectRegistry.inShutDown){if(h[name].dispose){if(!k&&h[name].constructor.$$instance){throw new Error("The object stored in key "+name+" is a singleton! Please use disposeSingleton instead.");}
else {h[name].dispose();}
;}
else {throw new Error("Has no disposable object under key: "+name+"!");}
;}
;h[name]=null;}
;}
,disposeArray:function(m,n){var p=m[n];if(!p){return;}
;if(qx.core.ObjectRegistry.inShutDown){m[n]=null;return;}
;try{var o;for(var i=p.length-1;i>=0;i-- ){o=p[i];if(o){o.dispose();}
;}
;}
catch(q){throw new Error("The array field: "+n+" of object: "+m+" has non disposable entries: "+q);}
;p.length=0;m[n]=null;}
,disposeMap:function(r,s){var u=r[s];if(!u){return;}
;if(qx.core.ObjectRegistry.inShutDown){r[s]=null;return;}
;try{var t;for(var v in u){t=u[v];if(u.hasOwnProperty(v)&&t){t.dispose();}
;}
;}
catch(w){throw new Error("The map field: "+s+" of object: "+r+" has non disposable entries: "+w);}
;r[s]=null;}
,disposeTriggeredBy:function(x,y){var z=y.dispose;y.dispose=function(){z.call(y);x.dispose();}
;}
,destroyContainer:function(A){if(qx.core.Environment.get(f)){qx.core.Assert.assertQxWidget(A,c);qx.core.Assert.assertTrue(this.__cQ(A),g+b+e);}
;var B=[];this._collectContainerChildren(A,B);var C=B.length;for(var i=C-1;i>=0;i-- ){B[i].destroy();}
;A.destroy();}
,_collectContainerChildren:function(D,E){var G=D.getChildren();for(var i=0;i<G.length;i++ ){var F=G[i];E.push(F);if(this.__cQ(F)){this._collectContainerChildren(F,E);}
;}
;}
,__cQ:function(H){var I=[qx.ui.container.Composite,qx.ui.container.Scroll,qx.ui.container.SlideBar,qx.ui.container.Stack];for(var i=0,l=I.length;i<l;i++ ){if(typeof I[i]!==a&&qx.Class.isSubClassOf(H.constructor,I[i])){return true;}
;}
;return false;}
}});}
)();
(function(){var f="Cannot stop propagation on a non bubbling event: ",e="Invalid argument value 'cancelable'.",d="Cannot prevent default action on a non cancelable event: ",c="Invalid argument value 'canBubble'.",b="qx.event.type.Event",a="qx.debug";qx.Class.define(b,{extend:qx.core.Object,statics:{CAPTURING_PHASE:1,AT_TARGET:2,BUBBLING_PHASE:3},members:{init:function(g,h){if(qx.core.Environment.get(a)){if(g!==undefined){qx.core.Assert.assertBoolean(g,c);}
;if(h!==undefined){qx.core.Assert.assertBoolean(h,e);}
;}
;this._type=null;this._target=null;this._currentTarget=null;this._relatedTarget=null;this._originalTarget=null;this._stopPropagation=false;this._preventDefault=false;this._bubbles=!!g;this._cancelable=!!h;this._timeStamp=(new Date()).getTime();this._eventPhase=null;return this;}
,clone:function(i){if(i){var j=i;}
else {var j=qx.event.Pool.getInstance().getObject(this.constructor);}
;j._type=this._type;j._target=this._target;j._currentTarget=this._currentTarget;j._relatedTarget=this._relatedTarget;j._originalTarget=this._originalTarget;j._stopPropagation=this._stopPropagation;j._bubbles=this._bubbles;j._preventDefault=this._preventDefault;j._cancelable=this._cancelable;return j;}
,stop:function(){if(this._bubbles){this.stopPropagation();}
;if(this._cancelable){this.preventDefault();}
;}
,stopPropagation:function(){if(qx.core.Environment.get(a)){this.assertTrue(this._bubbles,f+this.getType());}
;this._stopPropagation=true;}
,getPropagationStopped:function(){return !!this._stopPropagation;}
,preventDefault:function(){if(qx.core.Environment.get(a)){this.assertTrue(this._cancelable,d+this.getType());}
;this._preventDefault=true;}
,getDefaultPrevented:function(){return !!this._preventDefault;}
,getType:function(){return this._type;}
,setType:function(k){this._type=k;}
,getEventPhase:function(){return this._eventPhase;}
,setEventPhase:function(l){this._eventPhase=l;}
,getTimeStamp:function(){return this._timeStamp;}
,getTarget:function(){return this._target;}
,setTarget:function(m){this._target=m;}
,getCurrentTarget:function(){return this._currentTarget||this._target;}
,setCurrentTarget:function(n){this._currentTarget=n;}
,getRelatedTarget:function(){return this._relatedTarget;}
,setRelatedTarget:function(o){this._relatedTarget=o;}
,getOriginalTarget:function(){return this._originalTarget;}
,setOriginalTarget:function(p){this._originalTarget=p;}
,getBubbles:function(){return this._bubbles;}
,setBubbles:function(q){this._bubbles=q;}
,isCancelable:function(){return this._cancelable;}
,setCancelable:function(r){this._cancelable=r;}
},destruct:function(){this._target=this._currentTarget=this._relatedTarget=this._originalTarget=null;}
});}
)();
(function(){var b="qx.util.ObjectPool",a="Integer";qx.Class.define(b,{extend:qx.core.Object,construct:function(c){qx.core.Object.call(this);this.__cR={};if(c!=null){this.setSize(c);}
;}
,properties:{size:{check:a,init:Infinity}},members:{__cR:null,getObject:function(d){if(this.$$disposed){return new d;}
;if(!d){throw new Error("Class needs to be defined!");}
;var e=null;var f=this.__cR[d.classname];if(f){e=f.pop();}
;if(e){e.$$pooled=false;}
else {e=new d;}
;return e;}
,poolObject:function(g){if(!this.__cR){return;}
;var h=g.classname;var j=this.__cR[h];if(g.$$pooled){throw new Error("Object is already pooled: "+g);}
;if(!j){this.__cR[h]=j=[];}
;if(j.length>this.getSize()){if(g.destroy){g.destroy();}
else {g.dispose();}
;return;}
;g.$$pooled=true;j.push(g);}
},destruct:function(){var n=this.__cR;var k,m,i,l;for(k in n){m=n[k];for(i=0,l=m.length;i<l;i++ ){m[i].dispose();}
;}
;delete this.__cR;}
});}
)();
(function(){var b="singleton",a="qx.event.Pool";qx.Class.define(a,{extend:qx.util.ObjectPool,type:b,construct:function(){qx.util.ObjectPool.call(this,30);}
});}
)();
(function(){var b="qx.event.dispatch.Direct",a="qx.debug";qx.Class.define(b,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,construct:function(c){this._manager=c;}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST},members:{canDispatchEvent:function(d,event,e){return !event.getBubbles();}
,dispatchEvent:function(f,event,g){if(qx.core.Environment.get(a)){if(f instanceof qx.core.Object){var k=qx.Class.getEventType(f.constructor,g);var h=qx.Class.getByName(k);if(!h){this.error("The event type '"+g+"' declared in the class '"+f.constructor+" is not an available class': "+k);}
else if(!(event instanceof h)){this.error("Expected event type to be instanceof '"+k+"' but found '"+event.classname+"'");}
;}
;}
;event.setEventPhase(qx.event.type.Event.AT_TARGET);var m=this._manager.getListeners(f,g,false);if(m){for(var i=0,l=m.length;i<l;i++ ){var j=m[i].context||f;if(qx.core.Environment.get(a)){if(j&&j.isDisposed&&j.isDisposed()){this.warn("The context object '"+j+"' for the event '"+g+"' of '"+f+"'is already disposed.");}
;}
;m[i].handler.call(j,event);}
;}
;}
},defer:function(n){qx.event.Registration.addDispatcher(n);}
});}
)();
(function(){var a="qx.event.handler.Object";qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST,SUPPORTED_TYPES:null,TARGET_CHECK:qx.event.IEventHandler.TARGET_OBJECT,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(b,c){return qx.Class.supportsEvent(b.constructor,c);}
,registerEvent:function(d,e,f){}
,unregisterEvent:function(g,h,i){}
},defer:function(j){qx.event.Registration.addHandler(j);}
});}
)();
(function(){var a="qx.event.type.Data";qx.Class.define(a,{extend:qx.event.type.Event,members:{__cS:null,__cT:null,init:function(b,c,d){qx.event.type.Event.prototype.init.call(this,false,d);this.__cS=b;this.__cT=c;return this;}
,clone:function(e){var f=qx.event.type.Event.prototype.clone.call(this,e);f.__cS=this.__cS;f.__cT=this.__cT;return f;}
,getData:function(){return this.__cS;}
,getOldData:function(){return this.__cT;}
},destruct:function(){this.__cS=this.__cT=null;}
});}
)();
(function(){var a="qx.application.IApplication";qx.Interface.define(a,{members:{main:function(){}
,finalize:function(){}
,close:function(){}
,terminate:function(){}
}});}
)();
(function(){var g="qx.core.BaseInit",f="engine.name",d="qx.application",c="os.name",b="engine.version",a="";qx.Class.define(g,{statics:{__cU:null,getApplication:function(){return this.__cU||null;}
,ready:function(){if(this.__cU){return;}
;if(qx.core.Environment.get(f)==a){qx.log.Logger.warn("Could not detect engine!");}
;if(qx.core.Environment.get(b)==a){qx.log.Logger.warn("Could not detect the version of the engine!");}
;if(qx.core.Environment.get(c)==a){qx.log.Logger.warn("Could not detect operating system!");}
;qx.log.Logger.debug(this,"Load runtime: "+(new Date-qx.Bootstrap.LOADSTART)+"ms");var i=qx.core.Environment.get(d);var j=qx.Class.getByName(i);if(j){this.__cU=new j;var h=new Date;this.__cU.main();qx.log.Logger.debug(this,"Main runtime: "+(new Date-h)+"ms");var h=new Date;this.__cU.finalize();qx.log.Logger.debug(this,"Finalize runtime: "+(new Date-h)+"ms");}
else {qx.log.Logger.warn("Missing application class: "+i);}
;}
,__cV:function(e){var k=this.__cU;if(k){k.close();}
;}
,__cW:function(){var l=this.__cU;if(l){l.terminate();}
;qx.core.ObjectRegistry.shutdown();}
}});}
)();
(function(){var k="rim_tabletos",j="Darwin",i="os.version",h="2003",g=")",f="iPhone",e="android",d="unix",c="ce",b="7",bj="SymbianOS",bi="os.name",bh="|",bg="MacPPC",bf="iPod",be="\.",bd="Win64",bc="linux",bb="me",ba="Macintosh",r="Windows",s="ios",p="vista",q="8",n="blackberry",o="8.1",l="(",m="win",w="Linux",x="BSD",F="Mac OS X",D="iPad",N="X11",I="xp",V="symbian",S="qx.bom.client.OperatingSystem",z="g",Y="Win32",X="osx",W="webOS",y="RIM Tablet OS",B="BlackBerry",C="nt4",E=".",G="MacIntel",J="webos",P="10.1",U="10.3",t="10.7",u="10.5",A="10.9",M="95",L="10.8",K="10.2",R="Android",Q="98",H="2000",O="10.6",a="10.0",T="10.4",v="";qx.Bootstrap.define(S,{statics:{getName:function(){if(!navigator){return v;}
;var bk=navigator.platform||v;var bl=navigator.userAgent||v;if(bk.indexOf(r)!=-1||bk.indexOf(Y)!=-1||bk.indexOf(bd)!=-1){return m;}
else if(bk.indexOf(ba)!=-1||bk.indexOf(bg)!=-1||bk.indexOf(G)!=-1||bk.indexOf(F)!=-1){return X;}
else if(bl.indexOf(y)!=-1){return k;}
else if(bl.indexOf(W)!=-1){return J;}
else if(bk.indexOf(bf)!=-1||bk.indexOf(f)!=-1||bk.indexOf(D)!=-1){return s;}
else if(bl.indexOf(R)!=-1){return e;}
else if(bk.indexOf(w)!=-1){return bc;}
else if(bk.indexOf(N)!=-1||bk.indexOf(x)!=-1||bk.indexOf(j)!=-1){return d;}
else if(bk.indexOf(bj)!=-1){return V;}
else if(bk.indexOf(B)!=-1){return n;}
;return v;}
,__cX:{"Windows NT 6.3":o,"Windows NT 6.2":q,"Windows NT 6.1":b,"Windows NT 6.0":p,"Windows NT 5.2":h,"Windows NT 5.1":I,"Windows NT 5.0":H,"Windows 2000":H,"Windows NT 4.0":C,"Win 9x 4.90":bb,"Windows CE":c,"Windows 98":Q,"Win98":Q,"Windows 95":M,"Win95":M,"Mac OS X 10_9":A,"Mac OS X 10.9":A,"Mac OS X 10_8":L,"Mac OS X 10.8":L,"Mac OS X 10_7":t,"Mac OS X 10.7":t,"Mac OS X 10_6":O,"Mac OS X 10.6":O,"Mac OS X 10_5":u,"Mac OS X 10.5":u,"Mac OS X 10_4":T,"Mac OS X 10.4":T,"Mac OS X 10_3":U,"Mac OS X 10.3":U,"Mac OS X 10_2":K,"Mac OS X 10.2":K,"Mac OS X 10_1":P,"Mac OS X 10.1":P,"Mac OS X 10_0":a,"Mac OS X 10.0":a},getVersion:function(){var bm=qx.bom.client.OperatingSystem.__cY(navigator.userAgent);if(bm==null){bm=qx.bom.client.OperatingSystem.__da(navigator.userAgent);}
;if(bm!=null){return bm;}
else {return v;}
;}
,__cY:function(bn){var bq=[];for(var bp in qx.bom.client.OperatingSystem.__cX){bq.push(bp);}
;var br=new RegExp(l+bq.join(bh).replace(/\./g,be)+g,z);var bo=br.exec(bn);if(bo&&bo[1]){return qx.bom.client.OperatingSystem.__cX[bo[1]];}
;return null;}
,__da:function(bs){var bw=bs.indexOf(R)!=-1;var bt=bs.match(/(iPad|iPhone|iPod)/i)?true:false;if(bw){var bv=new RegExp(/ Android (\d+(?:\.\d+)+)/i);var bx=bv.exec(bs);if(bx&&bx[1]){return bx[1];}
;}
else if(bt){var by=new RegExp(/(CPU|iPhone|iPod) OS (\d+)_(\d+)\s+/);var bu=by.exec(bs);if(bu&&bu[2]&&bu[3]){return bu[2]+E+bu[3];}
;}
;return null;}
},defer:function(bz){qx.core.Environment.add(bi,bz.getName);qx.core.Environment.add(i,bz.getVersion);}
});}
)();
(function(){var a="qx.event.type.Native";qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(b,c,d,e,f){qx.event.type.Event.prototype.init.call(this,e,f);this._target=c||qx.bom.Event.getTarget(b);this._relatedTarget=d||qx.bom.Event.getRelatedTarget(b);if(b.timeStamp){this._timeStamp=b.timeStamp;}
;this._native=b;this._returnValue=null;return this;}
,clone:function(g){var h=qx.event.type.Event.prototype.clone.call(this,g);var i={};h._native=this._cloneNativeEvent(this._native,i);h._returnValue=this._returnValue;return h;}
,_cloneNativeEvent:function(j,k){k.preventDefault=(function(){}
);return k;}
,preventDefault:function(){qx.event.type.Event.prototype.preventDefault.call(this);qx.bom.Event.preventDefault(this._native);}
,getNativeEvent:function(){return this._native;}
,setReturnValue:function(l){this._returnValue=l;}
,getReturnValue:function(){return this._returnValue;}
},destruct:function(){this._native=this._returnValue=null;}
});}
)();
(function(){var a="qx.event.handler.Window";qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(b){qx.core.Object.call(this);this._manager=b;this._window=b.getWindow();this._initWindowObserver();}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{error:1,load:1,beforeunload:1,unload:1,resize:1,scroll:1,beforeshutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(c,d){}
,registerEvent:function(f,g,h){}
,unregisterEvent:function(i,j,k){}
,_initWindowObserver:function(){this._onNativeWrapper=qx.lang.Function.listener(this._onNative,this);var m=qx.event.handler.Window.SUPPORTED_TYPES;for(var l in m){qx.bom.Event.addNativeListener(this._window,l,this._onNativeWrapper);}
;}
,_stopWindowObserver:function(){var o=qx.event.handler.Window.SUPPORTED_TYPES;for(var n in o){qx.bom.Event.removeNativeListener(this._window,n,this._onNativeWrapper);}
;}
,_onNative:qx.event.GlobalError.observeMethod(function(e){if(this.isDisposed()){return;}
;var q=this._window;try{var t=q.document;}
catch(u){return;}
;var r=t.documentElement;var p=qx.bom.Event.getTarget(e);if(p==null||p===q||p===t||p===r){var event=qx.event.Registration.createEvent(e.type,qx.event.type.Native,[e,q]);qx.event.Registration.dispatchEvent(q,event);var s=event.getReturnValue();if(s!=null){e.returnValue=s;return s;}
;}
;}
)},destruct:function(){this._stopWindowObserver();this._manager=this._window=null;}
,defer:function(v){qx.event.Registration.addHandler(v);}
});}
)();
(function(){var n="qx.event.handler.Application",m="complete",l="webkit",k="gecko",j="opera",i="left",h="DOMContentLoaded",g="shutdown",f="mshtml",d="load",a="unload",c="ready",b="engine.name";qx.Class.define(n,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(o){qx.core.Object.call(this);this._window=o.getWindow();this.__db=false;this.__dc=false;this.__dd=false;this.__de=false;this._initObserver();qx.event.handler.Application.$$instance=this;}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{ready:1,shutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true,onScriptLoaded:function(){var p=qx.event.handler.Application.$$instance;if(p){p.__df();}
;}
},members:{canHandleEvent:function(q,r){}
,registerEvent:function(s,t,u){}
,unregisterEvent:function(v,w,x){}
,__dd:null,__db:null,__dc:null,__de:null,__df:function(){if(!this.__dd&&this.__db&&qx.$$loader.scriptLoaded){if((qx.core.Environment.get(b)==f)){if(qx.event.Registration.hasListener(this._window,c)){this.__dd=true;qx.event.Registration.fireEvent(this._window,c);}
;}
else {this.__dd=true;qx.event.Registration.fireEvent(this._window,c);}
;}
;}
,isApplicationReady:function(){return this.__dd;}
,_initObserver:function(){if(qx.$$domReady||document.readyState==m||document.readyState==c){this.__db=true;this.__df();}
else {this._onNativeLoadWrapped=qx.lang.Function.bind(this._onNativeLoad,this);if(qx.core.Environment.get(b)==k||qx.core.Environment.get(b)==j||qx.core.Environment.get(b)==l){qx.bom.Event.addNativeListener(this._window,h,this._onNativeLoadWrapped);}
else if((qx.core.Environment.get(b)==f)){var self=this;var y=function(){try{document.documentElement.doScroll(i);if(document.body){self._onNativeLoadWrapped();}
;}
catch(z){window.setTimeout(y,100);}
;}
;y();}
;qx.bom.Event.addNativeListener(this._window,d,this._onNativeLoadWrapped);}
;this._onNativeUnloadWrapped=qx.lang.Function.bind(this._onNativeUnload,this);qx.bom.Event.addNativeListener(this._window,a,this._onNativeUnloadWrapped);}
,_stopObserver:function(){if(this._onNativeLoadWrapped){qx.bom.Event.removeNativeListener(this._window,d,this._onNativeLoadWrapped);}
;qx.bom.Event.removeNativeListener(this._window,a,this._onNativeUnloadWrapped);this._onNativeLoadWrapped=null;this._onNativeUnloadWrapped=null;}
,_onNativeLoad:qx.event.GlobalError.observeMethod(function(){this.__db=true;this.__df();}
),_onNativeUnload:qx.event.GlobalError.observeMethod(function(){if(!this.__de){this.__de=true;try{qx.event.Registration.fireEvent(this._window,g);}
catch(e){throw e;}
finally{qx.core.ObjectRegistry.shutdown();}
;}
;}
)},destruct:function(){this._stopObserver();this._window=null;}
,defer:function(A){qx.event.Registration.addHandler(A);}
});}
)();
(function(){var d="ready",c="shutdown",b="beforeunload",a="qx.core.Init";qx.Class.define(a,{statics:{getApplication:qx.core.BaseInit.getApplication,ready:qx.core.BaseInit.ready,__cV:function(e){var f=this.getApplication();if(f){e.setReturnValue(f.close());}
;}
,__cW:function(){var g=this.getApplication();if(g){g.terminate();}
;}
},defer:function(h){qx.event.Registration.addListener(window,d,h.ready,h);qx.event.Registration.addListener(window,c,h.__cW,h);qx.event.Registration.addListener(window,b,h.__cV,h);}
});}
)();
(function(){var a="qx.application.Native";qx.Class.define(a,{extend:qx.core.Object,implement:[qx.application.IApplication],members:{main:function(){}
,finalize:function(){}
,close:function(){}
,terminate:function(){}
}});}
)();
(function(){var j="preserve-3d",i="perspective30",h="css.transform.3d",g="CSS transforms not supported, sorry!",f="bottom left",e="origin-rt",d="skew",c="scale",b="3dpart",a="perspective100",S="50% 50%",R="bottom right",Q="origin-lb",P="perorig-br",O="rotate",N="center",M="visible",L="perspective1000",K="perorig-bl",J="perorig-c",q="combo",r="",o="perspective500",p="left bottom",m="demobrowser.demo.bom.Transform",n="origin-c",k="none",l="css.transform",s="translate",t="<br><br>Your browser does not support 3D CSS transforms, sorry!",A="hidden",y="3d",D="right top",C="display",F="25deg",E="10px",v="150deg",I="50px",H='label',G="40deg",u="flat",w="10deg",x="20deg",z="15deg",B="45deg";qx.Class.define(m,{extend:qx.application.Native,members:{main:function(){qx.application.Native.prototype.main.call(this);if(qx.core.Environment.get(l)==null){document.body.innerHTML=r;var U=document.createElement(H);U.innerHTML=g;document.body.appendChild(U);return;}
;var T=document.getElementById(c);qx.bom.element.Transform.scale(T,0.8);T=document.getElementById(s);qx.bom.element.Transform.translate(T,[E,E]);T=document.getElementById(O);qx.bom.element.Transform.rotate(T,B);T=document.getElementById(d);qx.bom.element.Transform.skew(T,F);T=document.getElementById(q);qx.bom.element.Transform.transform(T,{rotate:F,scale:[1.2,0.6],skew:[x,w]});T=document.getElementById(n);qx.bom.element.Transform.setOrigin(T,S);qx.bom.element.Transform.transform(T,{rotate:z});T=document.getElementById(Q);qx.bom.element.Transform.setOrigin(T,p);qx.bom.element.Transform.transform(T,{rotate:z});T=document.getElementById(e);qx.bom.element.Transform.setOrigin(T,D);qx.bom.element.Transform.transform(T,{rotate:z});if(qx.core.Environment.get(h)){T=document.getElementById(u);qx.bom.element.Transform.setStyle(T,u);qx.bom.element.Transform.transform(T,{rotate:[x,G]});qx.bom.element.Transform.transform(T.children[0],{translate:[null,null,I]});T=document.getElementById(y);qx.bom.element.Transform.setStyle(T,j);qx.bom.element.Transform.transform(T,{rotate:[x,G]});qx.bom.element.Transform.transform(T.children[0],{translate:[null,null,I]});T=document.getElementById(i);qx.bom.element.Transform.setPerspective(T,30);qx.bom.element.Transform.transform(T.children[0],{rotate:[B]});T=document.getElementById(a);qx.bom.element.Transform.setPerspective(T,100);qx.bom.element.Transform.transform(T.children[0],{rotate:[B]});T=document.getElementById(o);qx.bom.element.Transform.setPerspective(T,500);qx.bom.element.Transform.transform(T.children[0],{rotate:[B]});T=document.getElementById(L);qx.bom.element.Transform.setPerspective(T,1000);qx.bom.element.Transform.transform(T.children[0],{rotate:[B]});T=document.getElementById(J);qx.bom.element.Transform.setPerspective(T,100);qx.bom.element.Transform.setPerspectiveOrigin(T,N);qx.bom.element.Transform.transform(T.children[0],{rotate:[B]});T=document.getElementById(K);qx.bom.element.Transform.setPerspective(T,100);qx.bom.element.Transform.setPerspectiveOrigin(T,f);qx.bom.element.Transform.transform(T.children[0],{rotate:[B]});T=document.getElementById(P);qx.bom.element.Transform.setPerspective(T,100);qx.bom.element.Transform.setPerspectiveOrigin(T,R);qx.bom.element.Transform.transform(T.children[0],{rotate:[B]});T=document.getElementById(M);qx.bom.element.Transform.setPerspective(T,50);qx.bom.element.Transform.setBackfaceVisibility(T,true);qx.bom.element.Transform.transform(T,{rotate:[null,v,w]});T=document.getElementById(A);qx.bom.element.Transform.setPerspective(T,100);qx.bom.element.Transform.setBackfaceVisibility(T,false);qx.bom.element.Transform.transform(T,{rotate:[null,v,w]});}
else {document.getElementById(b).style[C]=k;var U=document.createElement(H);U.innerHTML=t;document.body.appendChild(U);}
;}
}});}
)();
(function(){var i="css.transform.3d",h="backfaceVisibility",g="transformStyle",f="css.transform",e="transformOrigin",d="qx.bom.client.CssTransform",c="transform",b="perspective",a="perspectiveOrigin";qx.Bootstrap.define(d,{statics:{getSupport:function(){var name=qx.bom.client.CssTransform.getName();if(name!=null){return {"name":name,"style":qx.bom.client.CssTransform.getStyle(),"origin":qx.bom.client.CssTransform.getOrigin(),"3d":qx.bom.client.CssTransform.get3D(),"perspective":qx.bom.client.CssTransform.getPerspective(),"perspective-origin":qx.bom.client.CssTransform.getPerspectiveOrigin(),"backface-visibility":qx.bom.client.CssTransform.getBackFaceVisibility()};}
;return null;}
,getStyle:function(){return qx.bom.Style.getPropertyName(g);}
,getPerspective:function(){return qx.bom.Style.getPropertyName(b);}
,getPerspectiveOrigin:function(){return qx.bom.Style.getPropertyName(a);}
,getBackFaceVisibility:function(){return qx.bom.Style.getPropertyName(h);}
,getOrigin:function(){return qx.bom.Style.getPropertyName(e);}
,getName:function(){return qx.bom.Style.getPropertyName(c);}
,get3D:function(){return qx.bom.client.CssTransform.getPerspective()!=null;}
},defer:function(j){qx.core.Environment.add(f,j.getSupport);qx.core.Environment.add(i,j.get3D);}
});}
)();
(function(){var u="px",t="css.transform",s=" ",r="qx.bom.element.Transform",q="hidden",p="Z",o=";",n=":",m="backface-visibility",l="name",d="perspective",k="visible",g="(",c=") ",b="X",f="Y",e="origin",h="style",a="perspective-origin",j="";qx.Bootstrap.define(r,{statics:{__fw:[b,f,p],__fx:qx.core.Environment.get(t),transform:function(v,w){var y=this.__fy(w);if(this.__fx!=null){var x=this.__fx[l];v.style[x]=y;}
;}
,translate:function(z,A){this.transform(z,{translate:A});}
,scale:function(B,C){this.transform(B,{scale:C});}
,rotate:function(D,E){this.transform(D,{rotate:E});}
,skew:function(F,G){this.transform(F,{skew:G});}
,getCss:function(H){var J=this.__fy(H);if(this.__fx!=null){var I=this.__fx[l];return qx.bom.Style.getCssName(I)+n+J+o;}
;return j;}
,setOrigin:function(K,L){if(this.__fx!=null){K.style[this.__fx[e]]=L;}
;}
,getOrigin:function(M){if(this.__fx!=null){return M.style[this.__fx[e]];}
;return j;}
,setStyle:function(N,O){if(this.__fx!=null){N.style[this.__fx[h]]=O;}
;}
,getStyle:function(P){if(this.__fx!=null){return P.style[this.__fx[h]];}
;return j;}
,setPerspective:function(Q,R){if(this.__fx!=null){Q.style[this.__fx[d]]=R+u;}
;}
,getPerspective:function(S){if(this.__fx!=null){return S.style[this.__fx[d]];}
;return j;}
,setPerspectiveOrigin:function(T,U){if(this.__fx!=null){T.style[this.__fx[a]]=U;}
;}
,getPerspectiveOrigin:function(V){if(this.__fx!=null){var X=V.style[this.__fx[a]];if(X!=j){return X;}
else {var Y=V.style[this.__fx[a]+b];var W=V.style[this.__fx[a]+f];if(Y!=j){return Y+s+W;}
;}
;}
;return j;}
,setBackfaceVisibility:function(ba,bb){if(this.__fx!=null){ba.style[this.__fx[m]]=bb?k:q;}
;}
,getBackfaceVisibility:function(bc){if(this.__fx!=null){return bc.style[this.__fx[m]]==k;}
;return true;}
,__fy:function(bd){var bg=j;for(var bf in bd){var be=bd[bf];if(qx.Bootstrap.isArray(be)){for(var i=0;i<be.length;i++ ){if(be[i]==undefined){continue;}
;bg+=bf+this.__fw[i]+g;bg+=be[i];bg+=c;}
;}
else {bg+=bf+g+bd[bf]+c;}
;}
;return bg;}
}});}
)();
(function(){var t="other",s="qx.Theme",r="]",q="[Theme ",p="widgets",o="fonts",n="string",m="colors",k="decorations",j="meta",d="appearances",h="borders",g="icons",c="undefined",b="Theme",f="qx.debug",e="object";qx.Bootstrap.define(s,{statics:{define:function(name,u){if(!u){var u={};}
;u.include=this.__eu(u.include);u.patch=this.__eu(u.patch);if(qx.core.Environment.get(f)){this.__i(name,u);}
;var v={$$type:b,name:name,title:u.title,toString:this.genericToString};if(u.extend){v.supertheme=u.extend;}
;v.basename=qx.Bootstrap.createNamespace(name,v);this.__ex(v,u);this.__ev(v,u);this.$$registry[name]=v;for(var i=0,a=u.include,l=a.length;i<l;i++ ){this.include(v,a[i]);}
;for(var i=0,a=u.patch,l=a.length;i<l;i++ ){this.patch(v,a[i]);}
;}
,__eu:function(w){if(!w){return [];}
;if(qx.Bootstrap.isArray(w)){return w;}
else {return [w];}
;}
,__ev:function(x,y){var z=y.aliases||{};if(y.extend&&y.extend.aliases){qx.Bootstrap.objectMergeWith(z,y.extend.aliases,false);}
;x.aliases=z;}
,getAll:function(){return this.$$registry;}
,getByName:function(name){return this.$$registry[name];}
,isDefined:function(name){return this.getByName(name)!==undefined;}
,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);}
,genericToString:function(){return q+this.name+r;}
,__ew:function(A){for(var i=0,B=this.__ey,l=B.length;i<l;i++ ){if(A[B[i]]){return B[i];}
;}
;}
,__ex:function(C,D){var G=this.__ew(D);if(D.extend&&!G){G=D.extend.type;}
;C.type=G||t;var I=function(){}
;if(D.extend){I.prototype=new D.extend.$$clazz;}
;var H=I.prototype;var F=D[G];for(var E in F){H[E]=F[E];if(H[E].base){if(qx.core.Environment.get(f)){if(!D.extend){throw new Error("Found base flag in entry '"+E+"' of theme '"+D.name+"'. Base flags are not allowed for themes without a valid super theme!");}
;}
;H[E].base=D.extend;}
;}
;C.$$clazz=I;C[G]=new I;}
,$$registry:{},__ey:[m,h,k,o,g,p,d,j],__h:qx.core.Environment.select(f,{"true":{"title":n,"aliases":e,"type":n,"extend":e,"colors":e,"borders":e,"decorations":e,"fonts":e,"icons":e,"widgets":e,"appearances":e,"meta":e,"include":e,"patch":e},"default":null}),__ez:qx.core.Environment.select(f,{"true":{"color":e,"border":e,"decoration":e,"font":e,"icon":e,"appearance":e,"widget":e},"default":null}),__i:qx.core.Environment.select(f,{"true":function(name,J){var O=this.__h;for(var N in J){if(O[N]===undefined){throw new Error('The configuration key "'+N+'" in theme "'+name+'" is not allowed!');}
;if(J[N]==null){throw new Error('Invalid key "'+N+'" in theme "'+name+'"! The value is undefined/null!');}
;if(O[N]!==null&&typeof J[N]!==O[N]){throw new Error('Invalid type of key "'+N+'" in theme "'+name+'"! The type of the key must be "'+O[N]+'"!');}
;}
;var M=[m,h,k,o,g,p,d,j];for(var i=0,l=M.length;i<l;i++ ){var N=M[i];if(J[N]!==undefined&&(J[N] instanceof Array||J[N] instanceof RegExp||J[N] instanceof Date||J[N].classname!==undefined)){throw new Error('Invalid key "'+N+'" in theme "'+name+'"! The value needs to be a map!');}
;}
;var K=0;for(var i=0,l=M.length;i<l;i++ ){var N=M[i];if(J[N]){K++ ;}
;if(K>1){throw new Error("You can only define one theme category per file! Invalid theme: "+name);}
;}
;if(J.meta){var L;for(var N in J.meta){L=J.meta[N];if(this.__ez[N]===undefined){throw new Error('The key "'+N+'" is not allowed inside a meta theme block.');}
;if(typeof L!==this.__ez[N]){throw new Error('The type of the key "'+N+'" inside the meta block is wrong.');}
;if(!(typeof L===e&&L!==null&&L.$$type===b)){throw new Error('The content of a meta theme must reference to other themes. The value for "'+N+'" in theme "'+name+'" is invalid: '+L);}
;}
;}
;if(J.extend&&J.extend.$$type!==b){throw new Error('Invalid extend in theme "'+name+'": '+J.extend);}
;if(J.include){for(var i=0,l=J.include.length;i<l;i++ ){if(typeof (J.include[i])==c||J.include[i].$$type!==b){throw new Error('Invalid include in theme "'+name+'": '+J.include[i]);}
;}
;}
;if(J.patch){for(var i=0,l=J.patch.length;i<l;i++ ){if(typeof (J.patch[i])==c||J.patch[i].$$type!==b){throw new Error('Invalid patch in theme "'+name+'": '+J.patch[i]);}
;}
;}
;}
,"default":function(){}
}),patch:function(P,Q){this.__eA(Q);var S=this.__ew(Q);if(S!==this.__ew(P)){throw new Error("The mixins '"+P.name+"' are not compatible '"+Q.name+"'!");}
;var R=Q[S];var T=P.$$clazz.prototype;for(var U in R){T[U]=R[U];}
;}
,include:function(V,W){this.__eA(W);var Y=W.type;if(Y!==V.type){throw new Error("The mixins '"+V.name+"' are not compatible '"+W.name+"'!");}
;var X=W[Y];var ba=V.$$clazz.prototype;for(var bb in X){if(ba[bb]!==undefined){continue;}
;ba[bb]=X[bb];}
;}
,__eA:function(bc){if(typeof bc===c||bc==null){var bd=new Error("Mixin theme is not a valid theme!");if(qx.core.Environment.get(f)){var be=qx.dev.StackTrace.getStackTraceFromError(bd);qx.Bootstrap.error(this,be);}
;throw bd;}
;}
}});}
)();
(function(){var m="JosefinSlab",l="qx/decoration/Indigo/font/JosefinSlab-SemiBold.ttf",k="qx/decoration/Indigo/font/JosefinSlab-SemiBold.woff",j="qx.theme.indigo.Font",i="monospace",h="serif",g="Courier New",f="DejaVu Sans Mono",e="Verdana",d="Lucida Grande",a="sans-serif",c="DejaVu Sans",b="font";qx.Theme.define(j,{fonts:{"default":{size:12,family:[d,c,e,a],color:b,lineHeight:1.8},"bold":{size:12,family:[d,c,e,a],bold:true,color:b,lineHeight:1.8},"headline":{size:22,family:[h],sources:[{family:m,source:[k,l]}]},"small":{size:11,family:[d,c,e,a],color:b,lineHeight:1.8},"monospace":{size:11,family:[f,g,i],color:b,lineHeight:1.8}}});}
)();
(function(){var dj="table-row-background-even",di="button-box-pressed-top-right",dh="arrow-left",dg="datechooser-weekday",df="arrow-up",de="icon/16/actions/dialog-ok.png",dd="button-box-top-right",dc="slidebar",db="#BABABA",da="button-box-hovered-bottom-right",cb="move-frame",ca="nodrop",bY="window-caption",bX="table-header-cell",bW="button-box-hovered-top-right",bV="row-layer",bU="treevirtual-plus-only",bT="move",bS="treevirtual-plus-end",bR="vertical",dr="arrow-down-small",ds="tooltip-error",dp="window-restore",dq="resize-frame",dm="scroll-knob",dn="tabview-close",dk="atom/label",dl="button-box-pressed-bottom-right",dt="button-box-pressed-hovered-bottom-right",du="icon/16/actions/dialog-cancel.png",cI="qx.theme.simple.Appearance",cH="menu-slidebar",cK="treevirtual-minus-cross",cJ="background-pane",cM="table-",cL="scroll-knob-pressed",cO="icon",cN="arrow-rewind",cG="icon/16/apps/office-calendar.png",cF="headline",l="treevirtual-plus-start",m="treevirtual-minus-end",n="checkbox-undetermined",o="button-box-bottom-right",p="datechooser-week",q="descending",r="splitpane",s="toolbar-separator",t="arrow-up-small",u="horizontal",dI="border-light-shadow",dH="text-placeholder",dG="dragover",dF="treevirtual-plus-cross",dM="scrollarea",dL="treevirtual-line",dK="menu-checkbox",dJ="best-fit",dO="button-border",dN="treevirtual-cross",bh="tabview-page-button-right",bi="button-hover",bf="tabview-page-button-top",bg="tabview-page-button-bottom",bl="tabview-page-button-left",bm="menubar-button-pressed",bj="progressbar",bk="tree-file",bd="tooltip-text",be="keep-align",M="alias",L="ascending",O="button-box-hovered-right-borderless",N="button-box-right-borderless",I="lead-item",H="checkbox-focused",K="window-minimize",J="button-box-pressed-hovered-top-right",G="knob-",F="treevirtual-minus-only",br="treevirtual-minus-start",bs="checkbox-checked",bt="window",bu="window-active",bn="table-header-cell-first",bo="button-box-pressed-right-borderless",bp="scroll-knob-hovered",bq="select-column-order",bv="button-box-pressed-hovered-right-borderless",bw="scroll-knob-pressed-hovered",X="white-box",W="datechooser-week-header",V="menubar-button-hovered",U="table-header-column-button",T="window-close",S="datechooser-date-pane",R="cursor-",Q="menu-radiobutton",bc="window-maximize",bb="treevirtual-end",bx="table",by="arrow-forward",bz="copy",bA="table-row-background-selected",bB="radiobutton-focused",bC="scrollbar/slider/knob",bD="atom/icon",bE="table-header",bF="menu-separator",bG="icon/16/actions/view-refresh.png",cj="menu-slidebar-button",ci="scrollbar/button",ch="border-invalid",cg="-pressed",cn="tree-minus",cm="statusbar",cl="down",ck="text",cq="background-disabled-checked",cp="tree",cB="slidebar/button-forward",cC="icon/16/places/folder.png",cz="icon/16/mimetypes/text-plain.png",cA="tree-plus",cx="default",cy="datechooser",cv="blank",cw="treevirtual-folder",cD="virtual-list",cE="arrow-right",cS="-hovered",cR="left",cU="up",cT="right-top",cW="focused-inset",cV="slidebar/button-backward",cY="-disabled",cX="link",cQ="background-disabled",cP="-right",dB="radiobutton",dC="arrow-",dD="checkbox",dE="-left",dx="combobox",dy="tree-folder",dz="selectbox",dA="-invalid",dv="-focused",dw="icon/16/places/folder-open.png",k="background-selected-dark",j="invalid",h="scrollbar",g="inset",f="center",e="datechooser/button",d="right",c="button-box-hovered",b="button-box-pressed-hovered",a="button-box-pressed",x="button-frame",y="-middle",v="main",w="light-background",B="-invert",C="combobox/button",z="list",A="middle",D="menu-button",E="toolbar-button",cr="spinner",co="arrow-down",cu="white",cs="background-selected",ce="text-selected",cc="cell",P="tooltip",cf="popup",ba="",Y="label",bJ="text-disabled",bK="groupbox",bL="image",bM="button-box",bN="bold",bO="textfield",bP="background",bQ="main-dark",bH="atom",bI="pointer",cd="button",ct="widget";qx.Theme.define(cI,{appearances:{"widget":{},"label":{style:function(dP){return {textColor:dP.disabled?bJ:undefined};}
},"image":{style:function(dQ){return {opacity:!dQ.replacement&&dQ.disabled?0.3:undefined};}
},"atom":{},"atom/label":Y,"atom/icon":bL,"root":{style:function(dR){return {backgroundColor:bP,textColor:ck,font:cx};}
},"popup":{style:function(dS){return {decorator:cf,backgroundColor:cJ};}
},"tooltip":{include:cf,style:function(dT){return {backgroundColor:P,textColor:bd,decorator:P,padding:[1,3,2,3],offset:[15,5,5,5]};}
},"tooltip/atom":bH,"tooltip-error":{include:P,style:function(dU){return {textColor:ce,showTimeout:100,hideTimeout:10000,decorator:ds,font:bN,backgroundColor:undefined};}
},"tooltip-error/atom":bH,"iframe":{style:function(dV){return {backgroundColor:cu,decorator:bQ};}
},"move-frame":{style:function(dW){return {decorator:bQ};}
},"resize-frame":cb,"dragdrop-cursor":{style:function(dX){var dY=ca;if(dX.copy){dY=bz;}
else if(dX.move){dY=bT;}
else if(dX.alias){dY=M;}
;return {source:qx.theme.simple.Image.URLS[R+dY],position:cT,offset:[2,16,2,6]};}
},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:cd,include:cd,style:function(ea){return {icon:qx.theme.simple.Image.URLS[dC+(ea.vertical?cl:d)]};}
},"slidebar/button-backward":{alias:cd,include:cd,style:function(eb){return {icon:qx.theme.simple.Image.URLS[dC+(eb.vertical?cU:cR)]};}
},"table":ct,"table/statusbar":{style:function(ec){return {decorator:cm,padding:[2,5]};}
},"table/column-button":{alias:cd,style:function(ed){return {decorator:U,padding:3,icon:qx.theme.simple.Image.URLS[bq]};}
},"table-column-reset-button":{include:D,alias:D,style:function(){return {icon:bG};}
},"table-scroller/scrollbar-x":h,"table-scroller/scrollbar-y":h,"table-scroller":ct,"table-scroller/header":{style:function(){return {decorator:bE};}
},"table-scroller/pane":{},"table-scroller/focus-indicator":{style:function(ee){return {decorator:v};}
},"table-scroller/resize-line":{style:function(ef){return {backgroundColor:dO,width:3};}
},"table-header-cell":{alias:bH,style:function(eg){return {decorator:eg.first?bn:bX,minWidth:13,font:bN,paddingTop:3,paddingLeft:5,cursor:eg.disabled?undefined:bI,sortIcon:eg.sorted?(qx.theme.simple.Image.URLS[cM+(eg.sortedAscending?L:q)]):undefined};}
},"table-header-cell/icon":{include:bD,style:function(eh){return {paddingRight:5};}
},"table-header-cell/sort-icon":{style:function(ei){return {alignY:A,alignX:d,paddingRight:5};}
},"table-editor-textfield":{include:bO,style:function(ej){return {decorator:undefined,padding:[2,2]};}
},"table-editor-selectbox":{include:dz,alias:dz,style:function(ek){return {padding:[0,2]};}
},"table-editor-combobox":{include:dx,alias:dx,style:function(el){return {decorator:undefined};}
},"treevirtual":{include:bO,alias:bx,style:function(em,en){return {padding:[en.padding[0]+2,en.padding[1]+1]};}
},"treevirtual-folder":{style:function(eo){return {icon:(eo.opened?dw:cC)};}
},"treevirtual-file":{include:cw,alias:cw,style:function(ep){return {icon:cz};}
},"treevirtual-line":{style:function(eq){return {icon:qx.theme.simple.Image.URLS[dL]};}
},"treevirtual-contract":{style:function(er){return {icon:qx.theme.simple.Image.URLS[cn]};}
},"treevirtual-expand":{style:function(es){return {icon:qx.theme.simple.Image.URLS[cA]};}
},"treevirtual-only-contract":{style:function(et){return {icon:qx.theme.simple.Image.URLS[F]};}
},"treevirtual-only-expand":{style:function(eu){return {icon:qx.theme.simple.Image.URLS[bU]};}
},"treevirtual-start-contract":{style:function(ev){return {icon:qx.theme.simple.Image.URLS[br]};}
},"treevirtual-start-expand":{style:function(ew){return {icon:qx.theme.simple.Image.URLS[l]};}
},"treevirtual-end-contract":{style:function(ex){return {icon:qx.theme.simple.Image.URLS[m]};}
},"treevirtual-end-expand":{style:function(ey){return {icon:qx.theme.simple.Image.URLS[bS]};}
},"treevirtual-cross-contract":{style:function(ez){return {icon:qx.theme.simple.Image.URLS[cK]};}
},"treevirtual-cross-expand":{style:function(eA){return {icon:qx.theme.simple.Image.URLS[dF]};}
},"treevirtual-end":{style:function(eB){return {icon:qx.theme.simple.Image.URLS[bb]};}
},"treevirtual-cross":{style:function(eC){return {icon:qx.theme.simple.Image.URLS[dN]};}
},"resizer":{style:function(eD){return {decorator:bQ};}
},"splitpane":{},"splitpane/splitter":{style:function(eE){return {backgroundColor:w};}
},"splitpane/splitter/knob":{style:function(eF){return {source:qx.theme.simple.Image.URLS[G+(eF.horizontal?u:bR)],padding:2};}
},"splitpane/slider":{style:function(eG){return {backgroundColor:dI,opacity:0.3};}
},"menu":{style:function(eH){var eI={backgroundColor:bP,decorator:v,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4,padding:1,placementModeY:eH.submenu||eH.contextmenu?dJ:be};if(eH.submenu){eI.position=cT;eI.offset=[-2,-3];}
;if(eH.contextmenu){eI.offset=4;}
;return eI;}
},"menu/slidebar":cH,"menu-slidebar":ct,"menu-slidebar-button":{style:function(eJ){return {backgroundColor:eJ.hovered?cs:undefined,padding:6,center:true};}
},"menu-slidebar/button-backward":{include:cj,style:function(eK){return {icon:qx.theme.simple.Image.URLS[df+(eK.hovered?B:ba)]};}
},"menu-slidebar/button-forward":{include:cj,style:function(eL){return {icon:qx.theme.simple.Image.URLS[co+(eL.hovered?B:ba)]};}
},"menu-separator":{style:function(eM){return {height:0,decorator:bF,marginTop:4,marginBottom:4,marginLeft:2,marginRight:2};}
},"menu-button":{alias:bH,style:function(eN){return {backgroundColor:eN.selected?cs:undefined,textColor:eN.selected?ce:undefined,padding:[2,6]};}
},"menu-button/icon":{include:bL,style:function(eO){return {alignY:A};}
},"menu-button/label":{include:Y,style:function(eP){return {alignY:A,padding:1};}
},"menu-button/shortcut":{include:Y,style:function(eQ){return {alignY:A,marginLeft:14,padding:1};}
},"menu-button/arrow":{include:bL,style:function(eR){return {source:qx.theme.simple.Image.URLS[cE+(eR.selected?B:ba)],alignY:A};}
},"menu-checkbox":{alias:D,include:D,style:function(eS){return {icon:!eS.checked?undefined:qx.theme.simple.Image.URLS[dK+(eS.selected?B:ba)]};}
},"menu-radiobutton":{alias:D,include:D,style:function(eT){return {icon:!eT.checked?undefined:qx.theme.simple.Image.URLS[Q+(eT.selected?B:ba)]};}
},"menubar":{style:function(eU){return {backgroundColor:w,padding:[4,2]};}
},"menubar-button":{style:function(eV){var eX;var eW=[2,6];if(!eV.disabled){if(eV.pressed){eX=bm;eW=[1,5,2,5];}
else if(eV.hovered){eX=V;eW=[1,5];}
;}
;return {padding:eW,cursor:eV.disabled?undefined:bI,textColor:cX,decorator:eX};}
},"virtual-list":z,"virtual-list/row-layer":bV,"row-layer":ct,"column-layer":ct,"group-item":{include:Y,alias:Y,style:function(eY){return {padding:4,backgroundColor:db,textColor:cu,font:bN};}
},"virtual-selectbox":dz,"virtual-selectbox/dropdown":cf,"virtual-selectbox/dropdown/list":{alias:cD},"virtual-combobox":dx,"virtual-combobox/dropdown":cf,"virtual-combobox/dropdown/list":{alias:cD},"virtual-tree":{include:cp,alias:cp,style:function(fa){return {itemHeight:21};}
},"virtual-tree-folder":dy,"virtual-tree-file":bk,"cell":{style:function(fb){return {backgroundColor:fb.selected?bA:dj,textColor:fb.selected?ce:ck,padding:[3,6]};}
},"cell-string":cc,"cell-number":{include:cc,style:function(fc){return {textAlign:d};}
},"cell-image":cc,"cell-boolean":cc,"cell-atom":cc,"cell-date":cc,"cell-html":cc,"htmlarea":{"include":ct,style:function(fd){return {backgroundColor:cu};}
},"scrollbar":{},"scrollbar/slider":{},"scrollbar/slider/knob":{style:function(fe){var ff=dm;if(!fe.disabled){if(fe.hovered&&!fe.pressed&&!fe.checked){ff=bp;}
else if(fe.hovered&&(fe.pressed||fe.checked)){ff=bw;}
else if(fe.pressed||fe.checked){ff=cL;}
;}
;return {height:14,width:14,cursor:fe.disabled?undefined:bI,decorator:ff,minHeight:fe.horizontal?undefined:20,minWidth:fe.horizontal?20:undefined};}
},"scrollbar/button":{style:function(fg){var fh={};fh.padding=4;var fi=ba;if(fg.left){fi=cR;fh.marginRight=2;}
else if(fg.right){fi+=d;fh.marginLeft=2;}
else if(fg.up){fi+=cU;fh.marginBottom=2;}
else {fi+=cl;fh.marginTop=2;}
;fh.icon=qx.theme.simple.Image.URLS[dC+fi];fh.cursor=bI;fh.decorator=bM;return fh;}
},"scrollbar/button-begin":ci,"scrollbar/button-end":ci,"scrollarea/corner":{style:function(fj){return {backgroundColor:bP};}
},"scrollarea":ct,"scrollarea/pane":ct,"scrollarea/scrollbar-x":h,"scrollarea/scrollbar-y":h,"textfield":{style:function(fk){var fm;if(fk.disabled){fm=bJ;}
else if(fk.showingPlaceholder){fm=dH;}
else {fm=undefined;}
;var fn;var fl;if(fk.disabled){fn=g;fl=[2,3];}
else if(fk.invalid){fn=ch;fl=[1,2];}
else if(fk.focused){fn=cW;fl=[1,2];}
else {fl=[2,3];fn=g;}
;return {decorator:fn,padding:fl,textColor:fm,backgroundColor:fk.disabled?cQ:cu};}
},"textarea":bO,"radiobutton/icon":{style:function(fo){var fq=dB;if(fo.focused&&!fo.invalid){fq=bB;}
;fq+=fo.invalid&&!fo.disabled?dA:ba;var fp;if(fo.disabled&&fo.checked){fp=cq;}
else if(fo.disabled){fp=cQ;}
else if(fo.checked){fp=cs;}
;return {decorator:fq,width:12,height:12,backgroundColor:fp};}
},"radiobutton":{style:function(fr){return {icon:qx.theme.simple.Image.URLS[cv]};}
},"form-renderer-label":{include:Y,style:function(){return {paddingTop:3};}
},"checkbox":{alias:bH,style:function(fs){var ft;if(fs.checked){ft=qx.theme.simple.Image.URLS[bs];}
else if(fs.undetermined){ft=qx.theme.simple.Image.URLS[n];}
else {ft=qx.theme.simple.Image.URLS[cv];}
;return {icon:ft,gap:6};}
},"checkbox/icon":{style:function(fu){var fw=dD;if(fu.focused&&!fu.invalid){fw=H;}
;fw+=fu.invalid&&!fu.disabled?dA:ba;var fv;if(fu.checked){fv=2;}
else if(fu.undetermined){fv=[4,2];}
;return {decorator:fw,width:12,height:12,padding:fv,backgroundColor:cu};}
},"spinner":{style:function(fx){return {textColor:fx.disabled?bJ:undefined};}
},"spinner/textfield":bO,"spinner/upbutton":{alias:C,include:C,style:function(fy){var fz=dd;if(fy.hovered&&!fy.pressed&&!fy.checked){fz=bW;}
else if(fy.hovered&&(fy.pressed||fy.checked)){fz=J;}
else if(fy.pressed||fy.checked){fz=di;}
;return {icon:qx.theme.simple.Image.URLS[t],decorator:fz,width:17};}
},"spinner/downbutton":{alias:C,include:C,style:function(fA){var fB=o;if(fA.hovered&&!fA.pressed&&!fA.checked){fB=da;}
else if(fA.hovered&&(fA.pressed||fA.checked)){fB=dt;}
else if(fA.pressed||fA.checked){fB=dl;}
;return {icon:qx.theme.simple.Image.URLS[dr],decorator:fB,width:17};}
},"selectbox":x,"selectbox/atom":bH,"selectbox/popup":cf,"selectbox/list":{alias:z,include:z,style:function(){return {decorator:undefined};}
},"selectbox/arrow":{include:bL,style:function(fC){return {source:qx.theme.simple.Image.URLS[co],paddingRight:4,paddingLeft:5};}
},"combobox":{},"combobox/button":{alias:x,include:x,style:function(fD){var fE=N;if(fD.hovered&&!fD.pressed&&!fD.checked){fE=O;}
else if(fD.hovered&&(fD.pressed||fD.checked)){fE=bv;}
else if(fD.pressed||fD.checked){fE=bo;}
;return {icon:qx.theme.simple.Image.URLS[co],decorator:fE,padding:[0,5],width:19};}
},"combobox/popup":cf,"combobox/list":{alias:z},"combobox/textfield":bO,"datefield":bO,"datefield/button":{alias:C,include:C,style:function(fF){return {icon:cG,padding:[0,0,0,3],backgroundColor:undefined,decorator:undefined,width:19};}
},"datefield/textfield":{alias:bO,include:bO,style:function(fG){return {decorator:undefined,padding:0};}
},"datefield/list":{alias:cy,include:cy,style:function(fH){return {decorator:undefined};}
},"list":{alias:dM,include:bO},"listitem":{alias:bH,style:function(fI){var fJ=[3,5,3,5];if(fI.lead){fJ=[2,4,2,4];}
;if(fI.dragover){fJ[2]-=2;}
;var fK;if(fI.selected){fK=cs;if(fI.disabled){fK+=cY;}
;}
;return {gap:4,padding:fJ,backgroundColor:fK,textColor:fI.selected?ce:undefined,decorator:fI.lead?I:fI.dragover?dG:undefined};}
},"slider":{style:function(fL){var fN;var fM;if(fL.disabled){fN=g;fM=[2,3];}
else if(fL.invalid){fN=ch;fM=[1,2];}
else if(fL.focused){fN=cW;fM=[1,2];}
else {fM=[2,3];fN=g;}
;return {decorator:fN,padding:fM};}
},"slider/knob":bC,"button-frame":{alias:bH,style:function(fO){var fP=bM;if(!fO.disabled){if(fO.hovered&&!fO.pressed&&!fO.checked){fP=c;}
else if(fO.hovered&&(fO.pressed||fO.checked)){fP=b;}
else if(fO.pressed||fO.checked){fP=a;}
;}
;if(fO.invalid&&!fO.disabled){fP+=dA;}
else if(fO.focused){fP+=dv;}
;return {decorator:fP,padding:[3,8],cursor:fO.disabled?undefined:bI,minWidth:5,minHeight:5};}
},"button-frame/label":{alias:dk,style:function(fQ){return {textColor:fQ.disabled?bJ:undefined};}
},"button":{alias:x,include:x,style:function(fR){return {center:true};}
},"hover-button":{alias:cd,include:cd,style:function(fS){return {decorator:fS.hovered?bi:undefined};}
},"splitbutton":{},"splitbutton/button":{alias:bH,style:function(fT){var fU=bM;if(!fT.disabled){if(fT.pressed||fT.checked){fU+=cg;}
;if(fT.hovered){fU+=cS;}
;}
;if(fT.focused){fU+=dv;}
;fU+=dE;return {decorator:fU,padding:[3,8],cursor:fT.disabled?undefined:bI};}
},"splitbutton/arrow":{style:function(fV){var fW=bM;if(!fV.disabled){if(fV.pressed||fV.checked){fW+=cg;}
;if(fV.hovered){fW+=cS;}
;}
;if(fV.focused){fW+=dv;}
;fW+=cP;return {icon:qx.theme.simple.Image.URLS[co],decorator:fW,cursor:fV.disabled?undefined:bI,padding:[3,4]};}
},"groupbox":{},"groupbox/legend":{alias:bH,style:function(fX){return {textColor:fX.invalid?j:undefined,padding:5,margin:4,font:bN};}
},"groupbox/frame":{style:function(fY){return {backgroundColor:bP,padding:[6,9],margin:[18,2,2,2],decorator:X};}
},"check-groupbox":bK,"check-groupbox/legend":{alias:dD,include:dD,style:function(ga){return {textColor:ga.invalid?j:undefined,padding:5,margin:4,font:bN};}
},"radio-groupbox":bK,"radio-groupbox/legend":{alias:dB,include:dB,style:function(gb){return {textColor:gb.invalid?j:undefined,padding:5,margin:4,font:bN};}
},"tree-folder/open":{include:bL,style:function(gc){return {source:gc.opened?qx.theme.simple.Image.URLS[cn]:qx.theme.simple.Image.URLS[cA]};}
},"tree-folder":{style:function(gd){var ge;if(gd.selected){ge=cs;if(gd.disabled){ge+=cY;}
;}
;return {padding:[2,8,2,5],icon:gd.opened?dw:cC,backgroundColor:ge,iconOpened:dw};}
},"tree-folder/icon":{include:bL,style:function(gf){return {padding:[0,4,0,0]};}
},"tree-folder/label":{style:function(gg){return {padding:[1,2],textColor:gg.selected&&!gg.disabled?ce:undefined};}
},"tree-file":{include:dy,alias:dy,style:function(gh){return {icon:cz};}
},"tree":{include:z,alias:z,style:function(gi){return {contentPadding:gi.invalid&&!gi.disabled?[3,0]:[4,1],padding:gi.focused?0:1};}
},"window":{style:function(gj){return {contentPadding:[10,10,10,10],backgroundColor:bP,decorator:gj.maximized?undefined:gj.active?bu:bt};}
},"window-resize-frame":dq,"window/pane":{},"window/captionbar":{style:function(gk){return {backgroundColor:gk.active?w:cQ,padding:8,font:bN,decorator:bY};}
},"window/icon":{style:function(gl){return {marginRight:4};}
},"window/title":{style:function(gm){return {cursor:cx,font:bN,marginRight:20,alignY:A};}
},"window/minimize-button":{alias:cd,style:function(gn){return {icon:qx.theme.simple.Image.URLS[K],padding:[1,2],cursor:gn.disabled?undefined:bI};}
},"window/restore-button":{alias:cd,style:function(go){return {icon:qx.theme.simple.Image.URLS[dp],padding:[1,2],cursor:go.disabled?undefined:bI};}
},"window/maximize-button":{alias:cd,style:function(gp){return {icon:qx.theme.simple.Image.URLS[bc],padding:[1,2],cursor:gp.disabled?undefined:bI};}
},"window/close-button":{alias:cd,style:function(gq){return {marginLeft:2,icon:qx.theme.simple.Image.URLS[T],padding:[1,2],cursor:gq.disabled?undefined:bI};}
},"window/statusbar":{style:function(gr){return {decorator:cm,padding:[2,6]};}
},"window/statusbar-text":Y,"datechooser":{style:function(gs){return {decorator:v,minWidth:220};}
},"datechooser/navigation-bar":{style:function(gt){return {backgroundColor:bP,textColor:gt.disabled?bJ:gt.invalid?j:undefined,padding:[2,10]};}
},"datechooser/last-year-button-tooltip":P,"datechooser/last-month-button-tooltip":P,"datechooser/next-year-button-tooltip":P,"datechooser/next-month-button-tooltip":P,"datechooser/last-year-button":e,"datechooser/last-month-button":e,"datechooser/next-year-button":e,"datechooser/next-month-button":e,"datechooser/button/icon":{},"datechooser/button":{style:function(gu){var gv={width:17,show:cO,cursor:gu.disabled?undefined:bI};if(gu.lastYear){gv.icon=qx.theme.simple.Image.URLS[cN];}
else if(gu.lastMonth){gv.icon=qx.theme.simple.Image.URLS[dh];}
else if(gu.nextYear){gv.icon=qx.theme.simple.Image.URLS[by];}
else if(gu.nextMonth){gv.icon=qx.theme.simple.Image.URLS[cE];}
;return gv;}
},"datechooser/month-year-label":{style:function(gw){return {font:bN,textAlign:f};}
},"datechooser/date-pane":{style:function(gx){return {decorator:S,backgroundColor:bP};}
},"datechooser/weekday":{style:function(gy){return {decorator:dg,font:bN,textAlign:f,textColor:gy.disabled?bJ:gy.weekend?k:bP,backgroundColor:gy.weekend?bP:k,paddingTop:2};}
},"datechooser/day":{style:function(gz){return {textAlign:f,decorator:gz.today?v:undefined,textColor:gz.disabled?bJ:gz.selected?ce:gz.otherMonth?bJ:undefined,backgroundColor:gz.disabled?undefined:gz.selected?cs:undefined,padding:gz.today?[1,3]:[2,4]};}
},"datechooser/week":{style:function(gA){return {textAlign:f,textColor:k,padding:[2,4],decorator:gA.header?W:p};}
},"progressbar":{style:function(gB){return {decorator:bj,padding:1,backgroundColor:cu,width:200,height:20};}
},"progressbar/progress":{style:function(gC){return {backgroundColor:gC.disabled?cq:cs};}
},"toolbar":{style:function(gD){return {backgroundColor:w,padding:0};}
},"toolbar/part":{style:function(gE){return {margin:[0,15]};}
},"toolbar/part/container":{},"toolbar/part/handle":{},"toolbar-separator":{style:function(gF){return {decorator:s,margin:[7,0],width:4};}
},"toolbar-button":{alias:bH,style:function(gG){var gI=bM;if(gG.disabled){gI=bM;}
else if(gG.hovered&&!gG.pressed&&!gG.checked){gI=c;}
else if(gG.hovered&&(gG.pressed||gG.checked)){gI=b;}
else if(gG.pressed||gG.checked){gI=a;}
;if(gG.left){gI+=dE;}
else if(gG.right){gI+=cP;}
else if(gG.middle){gI+=y;}
;var gH=[7,10];if(gG.left||gG.middle||gG.right){gH=[7,0];}
;return {cursor:gG.disabled?undefined:bI,decorator:gI,margin:gH,padding:[3,5]};}
},"toolbar-menubutton":{alias:E,include:E,style:function(gJ){return {showArrow:true};}
},"toolbar-menubutton/arrow":{alias:bL,include:bL,style:function(gK){return {source:qx.theme.simple.Image.URLS[co],cursor:gK.disabled?undefined:bI,padding:[0,5],marginLeft:2};}
},"toolbar-splitbutton":{},"toolbar-splitbutton/button":{alias:E,include:E,style:function(gL){var gM=bM;if(gL.disabled){gM=bM;}
else if(gL.hovered&&!gL.pressed&&!gL.checked){gM=c;}
else if(gL.hovered&&(gL.pressed||gL.checked)){gM=b;}
else if(gL.pressed||gL.checked){gM=a;}
;if(gL.left){gM+=dE;}
else if(gL.right){gM+=y;}
else if(gL.middle){gM+=y;}
;return {icon:qx.theme.simple.Image.URLS[co],decorator:gM};}
},"toolbar-splitbutton/arrow":{alias:E,include:E,style:function(gN){var gO=bM;if(gN.disabled){gO=bM;}
else if(gN.hovered&&!gN.pressed&&!gN.checked){gO=c;}
else if(gN.hovered&&(gN.pressed||gN.checked)){gO=b;}
else if(gN.pressed||gN.checked){gO=a;}
;if(gN.left){gO+=y;}
else if(gN.right){gO+=cP;}
else if(gN.middle){gO+=y;}
;return {icon:qx.theme.simple.Image.URLS[co],decorator:gO};}
},"tabview":{},"tabview/bar":{alias:dc,style:function(gP){var gQ=0,gT=0,gR=0,gS=0;if(gP.barTop){gR-=1;}
else if(gP.barBottom){gQ-=1;}
else if(gP.barRight){gS-=1;}
else {gT-=1;}
;return {marginBottom:gR,marginTop:gQ,marginLeft:gS,marginRight:gT};}
},"tabview/bar/button-forward":{include:cB,alias:cB,style:function(gU){if(gU.barTop){return {marginTop:4,marginBottom:2,decorator:null};}
else if(gU.barBottom){return {marginTop:2,marginBottom:4,decorator:null};}
else if(gU.barLeft){return {marginLeft:4,marginRight:2,decorator:null};}
else {return {marginLeft:2,marginRight:4,decorator:null};}
;}
},"tabview/bar/button-backward":{include:cV,alias:cV,style:function(gV){if(gV.barTop){return {marginTop:4,marginBottom:2,decorator:null};}
else if(gV.barBottom){return {marginTop:2,marginBottom:4,decorator:null};}
else if(gV.barLeft){return {marginLeft:4,marginRight:2,decorator:null};}
else {return {marginLeft:2,marginRight:4,decorator:null};}
;}
},"tabview/pane":{style:function(gW){return {backgroundColor:bP,decorator:v,padding:10};}
},"tabview-page":ct,"tabview-page/button":{style:function(gX){var ha;if(gX.barTop||gX.barBottom){var gY=[8,16,8,13];}
else {var gY=[8,4,8,4];}
;if(gX.checked){if(gX.barTop){ha=bf;}
else if(gX.barBottom){ha=bg;}
else if(gX.barRight){ha=bh;}
else if(gX.barLeft){ha=bl;}
;}
else {for(var i=0;i<gY.length;i++ ){gY[i]+=1;}
;if(gX.barTop){gY[2]-=1;}
else if(gX.barBottom){gY[0]-=1;}
else if(gX.barRight){gY[3]-=1;}
else if(gX.barLeft){gY[1]-=1;}
;}
;return {zIndex:gX.checked?10:5,decorator:ha,textColor:gX.disabled?bJ:gX.checked?null:cX,padding:gY,cursor:bI};}
},"tabview-page/button/label":{alias:Y,style:function(hb){return {padding:[0,1,0,1]};}
},"tabview-page/button/icon":bL,"tabview-page/button/close-button":{alias:bH,style:function(hc){return {cursor:hc.disabled?undefined:bI,icon:qx.theme.simple.Image.URLS[dn]};}
},"colorpopup":{alias:cf,include:cf,style:function(hd){return {padding:5};}
},"colorpopup/field":{style:function(he){return {margin:2,width:14,height:14,backgroundColor:bP,decorator:bQ};}
},"colorpopup/selector-button":cd,"colorpopup/auto-button":cd,"colorpopup/preview-pane":bK,"colorpopup/current-preview":{style:function(hf){return {height:20,padding:4,marginLeft:4,decorator:bQ,allowGrowX:true};}
},"colorpopup/selected-preview":{style:function(hg){return {height:20,padding:4,marginRight:4,decorator:bQ,allowGrowX:true};}
},"colorpopup/colorselector-okbutton":{alias:cd,include:cd,style:function(hh){return {icon:de};}
},"colorpopup/colorselector-cancelbutton":{alias:cd,include:cd,style:function(hi){return {icon:du};}
},"colorselector":ct,"colorselector/control-bar":ct,"colorselector/visual-pane":bK,"colorselector/control-pane":ct,"colorselector/preset-grid":ct,"colorselector/colorbucket":{style:function(hj){return {decorator:bQ,width:16,height:16};}
},"colorselector/preset-field-set":bK,"colorselector/input-field-set":{include:bK,alias:bK,style:function(){return {paddingTop:12};}
},"colorselector/preview-field-set":{include:bK,alias:bK,style:function(){return {paddingTop:12};}
},"colorselector/hex-field-composite":ct,"colorselector/hex-field":bO,"colorselector/rgb-spinner-composite":ct,"colorselector/rgb-spinner-red":cr,"colorselector/rgb-spinner-green":cr,"colorselector/rgb-spinner-blue":cr,"colorselector/hsb-spinner-composite":ct,"colorselector/hsb-spinner-hue":cr,"colorselector/hsb-spinner-saturation":cr,"colorselector/hsb-spinner-brightness":cr,"colorselector/preview-content-old":{style:function(hk){return {decorator:bQ,width:50,height:25};}
},"colorselector/preview-content-new":{style:function(hl){return {decorator:bQ,backgroundColor:cu,width:50,height:25};}
},"colorselector/hue-saturation-field":{style:function(hm){return {decorator:bQ,margin:5};}
},"colorselector/brightness-field":{style:function(hn){return {decorator:bQ,margin:[5,7]};}
},"colorselector/hue-saturation-pane":ct,"colorselector/hue-saturation-handle":ct,"colorselector/brightness-pane":ct,"colorselector/brightness-handle":ct,"app-header":{style:function(ho){return {font:cF,textColor:ce,backgroundColor:k,padding:[8,12]};}
},"app-header-label":{style:function(hp){return {paddingTop:5};}
},"app-splitpane":{alias:r,style:function(hq){return {padding:[0,10,10,10],backgroundColor:w};}
}}});}
)();
(function(){var a="qx.theme.simple.Image";qx.Class.define(a,{extend:qx.core.Object,statics:{URLS:{"blank":"qx/static/blank.gif","checkbox-checked":"decoration/checkbox/checked.png","checkbox-undetermined":"decoration/checkbox/undetermined.png","window-minimize":"decoration/window/minimize.gif","window-maximize":"decoration/window/maximize.gif","window-restore":"decoration/window/restore.gif","window-close":"decoration/window/close.gif","cursor-copy":"decoration/cursors/copy.gif","cursor-move":"decoration/cursors/move.gif","cursor-alias":"decoration/cursors/alias.gif","cursor-nodrop":"decoration/cursors/nodrop.gif","arrow-right":"decoration/arrows/right.gif","arrow-left":"decoration/arrows/left.gif","arrow-up":"decoration/arrows/up.gif","arrow-down":"decoration/arrows/down.gif","arrow-forward":"decoration/arrows/forward.gif","arrow-rewind":"decoration/arrows/rewind.gif","arrow-down-small":"decoration/arrows/down-small.gif","arrow-up-small":"decoration/arrows/up-small.gif","arrow-up-invert":"decoration/arrows/up-invert.gif","arrow-down-invert":"decoration/arrows/down-invert.gif","arrow-right-invert":"decoration/arrows/right-invert.gif","knob-horizontal":"decoration/splitpane/knob-horizontal.png","knob-vertical":"decoration/splitpane/knob-vertical.png","tree-minus":"decoration/tree/minus.gif","tree-plus":"decoration/tree/plus.gif","select-column-order":"decoration/table/select-column-order.png","table-ascending":"decoration/table/ascending.png","table-descending":"decoration/table/descending.png","treevirtual-line":"decoration/treevirtual/line.gif","treevirtual-minus-only":"decoration/treevirtual/only_minus.gif","treevirtual-plus-only":"decoration/treevirtual/only_plus.gif","treevirtual-minus-start":"decoration/treevirtual/start_minus.gif","treevirtual-plus-start":"decoration/treevirtual/start_plus.gif","treevirtual-minus-end":"decoration/treevirtual/end_minus.gif","treevirtual-plus-end":"decoration/treevirtual/end_plus.gif","treevirtual-minus-cross":"decoration/treevirtual/cross_minus.gif","treevirtual-plus-cross":"decoration/treevirtual/cross_plus.gif","treevirtual-end":"decoration/treevirtual/end.gif","treevirtual-cross":"decoration/treevirtual/cross.gif","menu-checkbox":"decoration/menu/checkbox.gif","menu-checkbox-invert":"decoration/menu/checkbox-invert.gif","menu-radiobutton-invert":"decoration/menu/radiobutton-invert.gif","menu-radiobutton":"decoration/menu/radiobutton.gif","tabview-close":"decoration/tabview/close.gif"}}});}
)();
(function(){var t="knob-",s="window",r="vertical",q="font",p="window-caption-active",o="window-caption",n="headline",m="background",l="splitpane",k="window-active",d="highlight",j="middle",g="horizontal",c="app-header",b="text-selected",f="qx.theme.indigo.Appearance",e="default",h="tree",a="light-background",i="groupbox";qx.Theme.define(f,{extend:qx.theme.simple.Appearance,appearances:{"colorselector/input-field-set":{include:i,alias:i,style:function(){return {paddingTop:0};}
},"colorselector/preview-field-set":{include:i,alias:i,style:function(){return {paddingTop:0};}
},"toolbar":{style:function(u){return {backgroundColor:a,padding:[4,0]};}
},"splitpane/splitter/knob":{style:function(v){return {source:qx.theme.simple.Image.URLS[t+(v.horizontal?g:r)],padding:3};}
},"window":{style:function(w){return {contentPadding:[10,10,10,10],backgroundColor:w.maximized?m:undefined,decorator:w.maximized?undefined:w.active?k:s};}
},"window/captionbar":{style:function(x){var y=x.active&&!x.disabled;return {padding:[3,8,y?1:3,8],textColor:y?d:q,decorator:y?p:o};}
},"window/title":{style:function(z){return {cursor:e,font:e,marginRight:20,alignY:j};}
},"virtual-tree":{include:h,alias:h,style:function(A){return {itemHeight:27};}
},"app-header":{style:function(B){return {font:n,textColor:b,decorator:c,padding:10};}
},"app-header-label":{style:function(C){return {paddingTop:5};}
},"app-splitpane":{alias:l,style:function(D){return {padding:[0,10,10,10],backgroundColor:a};}
}}});}
)();
(function(){var c="Tango",b="qx/icon/Tango",a="qx.theme.icon.Tango";qx.Theme.define(a,{title:c,aliases:{"icon":b}});}
)();
(function(){var f="",e="qx.debug",d="qx.theme",c="qx.ui.decoration.MBackgroundColor",b="Color",a="_applyBackgroundColor";qx.Mixin.define(c,{properties:{backgroundColor:{check:b,nullable:true,apply:a}},members:{_tintBackgroundColor:function(g,h,i){if(h==null){h=this.getBackgroundColor();}
;if(qx.core.Environment.get(d)){h=qx.theme.manager.Color.getInstance().resolve(h);}
;i.backgroundColor=h||f;}
,_resizeBackgroundColor:function(j,k,l){var m=this.getInsets();k-=m.left+m.right;l-=m.top+m.bottom;return {left:m.left,top:m.top,width:k,height:l};}
,_applyBackgroundColor:function(){if(qx.core.Environment.get(e)){if(this._isInitialized()){throw new Error("This decorator is already in-use. Modification is not possible anymore!");}
;}
;}
}});}
)();
(function(){var b="qx.util.ValueManager",a="abstract";qx.Class.define(b,{type:a,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);this._dynamic={};}
,members:{_dynamic:null,resolveDynamic:function(c){return this._dynamic[c];}
,isDynamic:function(d){return !!this._dynamic[d];}
,resolve:function(e){if(e&&this._dynamic[e]){return this._dynamic[e];}
;return e;}
,_setDynamic:function(f){this._dynamic=f;}
,_getDynamic:function(){return this._dynamic;}
},destruct:function(){this._dynamic=null;}
});}
)();
(function(){var f="_applyTheme",e="qx.theme.manager.Color",d="Theme",c="changeTheme",b="string",a="singleton";qx.Class.define(e,{type:a,extend:qx.util.ValueManager,properties:{theme:{check:d,nullable:true,apply:f,event:c}},members:{_applyTheme:function(g){var h={};if(g){var i=g.colors;for(var name in i){h[name]=this.__dh(i,name);}
;}
;this._setDynamic(h);}
,__dh:function(j,name){var k=j[name];if(typeof k===b){if(!qx.util.ColorUtil.isCssString(k)){if(j[k]!=undefined){return this.__dh(j,k);}
;throw new Error("Could not parse color: "+k);}
;return k;}
else if(k instanceof Array){return qx.util.ColorUtil.rgbToRgbString(k);}
;throw new Error("Could not parse color: "+k);}
,resolve:function(l){var o=this._dynamic;var m=o[l];if(m){return m;}
;var n=this.getTheme();if(n!==null&&n.colors[l]){return o[l]=n.colors[l];}
;return l;}
,isDynamic:function(p){var r=this._dynamic;if(p&&(r[p]!==undefined)){return true;}
;var q=this.getTheme();if(q!==null&&p&&(q.colors[p]!==undefined)){r[p]=q.colors[p];return true;}
;return false;}
}});}
)();
(function(){var j="qx.util.ColorUtil",h=")",e="#",d="qx.theme.manager.Color",c="rgb(",a=",";qx.Bootstrap.define(j,{statics:{REGEXP:{hex3:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,rgb:/^rgb\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/,rgba:/^rgba\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/},SYSTEM:{activeborder:true,activecaption:true,appworkspace:true,background:true,buttonface:true,buttonhighlight:true,buttonshadow:true,buttontext:true,captiontext:true,graytext:true,highlight:true,highlighttext:true,inactiveborder:true,inactivecaption:true,inactivecaptiontext:true,infobackground:true,infotext:true,menu:true,menutext:true,scrollbar:true,threeddarkshadow:true,threedface:true,threedhighlight:true,threedlightshadow:true,threedshadow:true,window:true,windowframe:true,windowtext:true},NAMED:{black:[0,0,0],silver:[192,192,192],gray:[128,128,128],white:[255,255,255],maroon:[128,0,0],red:[255,0,0],purple:[128,0,128],fuchsia:[255,0,255],green:[0,128,0],lime:[0,255,0],olive:[128,128,0],yellow:[255,255,0],navy:[0,0,128],blue:[0,0,255],teal:[0,128,128],aqua:[0,255,255],transparent:[-1,-1,-1],magenta:[255,0,255],orange:[255,165,0],brown:[165,42,42]},isNamedColor:function(k){return this.NAMED[k]!==undefined;}
,isSystemColor:function(l){return this.SYSTEM[l]!==undefined;}
,supportsThemes:function(){if(qx.Class){return qx.Class.isDefined(d);}
;return false;}
,isThemedColor:function(m){if(!this.supportsThemes()){return false;}
;if(qx.theme&&qx.theme.manager&&qx.theme.manager.Color){return qx.theme.manager.Color.getInstance().isDynamic(m);}
;return false;}
,stringToRgb:function(n){if(this.supportsThemes()&&this.isThemedColor(n)){var n=qx.theme.manager.Color.getInstance().resolveDynamic(n);}
;if(this.isNamedColor(n)){return this.NAMED[n];}
else if(this.isSystemColor(n)){throw new Error("Could not convert system colors to RGB: "+n);}
else if(this.isRgbString(n)){return this.__di();}
else if(this.isHex3String(n)){return this.__dk();}
else if(this.isHex6String(n)){return this.__dl();}
;throw new Error("Could not parse color: "+n);}
,cssStringToRgb:function(o){if(this.isNamedColor(o)){return this.NAMED[o];}
else if(this.isSystemColor(o)){throw new Error("Could not convert system colors to RGB: "+o);}
else if(this.isRgbString(o)){return this.__di();}
else if(this.isRgbaString(o)){return this.__dj();}
else if(this.isHex3String(o)){return this.__dk();}
else if(this.isHex6String(o)){return this.__dl();}
;throw new Error("Could not parse color: "+o);}
,stringToRgbString:function(s){return this.rgbToRgbString(this.stringToRgb(s));}
,rgbToRgbString:function(u){return c+u[0]+a+u[1]+a+u[2]+h;}
,rgbToHexString:function(v){return (e+qx.lang.String.pad(v[0].toString(16).toUpperCase(),2)+qx.lang.String.pad(v[1].toString(16).toUpperCase(),2)+qx.lang.String.pad(v[2].toString(16).toUpperCase(),2));}
,isValidPropertyValue:function(w){return (this.isThemedColor(w)||this.isNamedColor(w)||this.isHex3String(w)||this.isHex6String(w)||this.isRgbString(w)||this.isRgbaString(w));}
,isCssString:function(x){return (this.isSystemColor(x)||this.isNamedColor(x)||this.isHex3String(x)||this.isHex6String(x)||this.isRgbString(x)||this.isRgbaString(x));}
,isHex3String:function(y){return this.REGEXP.hex3.test(y);}
,isHex6String:function(z){return this.REGEXP.hex6.test(z);}
,isRgbString:function(A){return this.REGEXP.rgb.test(A);}
,isRgbaString:function(B){return this.REGEXP.rgba.test(B);}
,__di:function(){var E=parseInt(RegExp.$1,10);var D=parseInt(RegExp.$2,10);var C=parseInt(RegExp.$3,10);return [E,D,C];}
,__dj:function(){var H=parseInt(RegExp.$1,10);var G=parseInt(RegExp.$2,10);var F=parseInt(RegExp.$3,10);return [H,G,F];}
,__dk:function(){var K=parseInt(RegExp.$1,16)*17;var J=parseInt(RegExp.$2,16)*17;var I=parseInt(RegExp.$3,16)*17;return [K,J,I];}
,__dl:function(){var N=(parseInt(RegExp.$1,16)*16)+parseInt(RegExp.$2,16);var M=(parseInt(RegExp.$3,16)*16)+parseInt(RegExp.$4,16);var L=(parseInt(RegExp.$5,16)*16)+parseInt(RegExp.$6,16);return [N,M,L];}
,hex3StringToRgb:function(O){if(this.isHex3String(O)){return this.__dk(O);}
;throw new Error("Invalid hex3 value: "+O);}
,hex3StringToHex6String:function(P){if(this.isHex3String(P)){return this.rgbToHexString(this.hex3StringToRgb(P));}
;return P;}
,hex6StringToRgb:function(Q){if(this.isHex6String(Q)){return this.__dl(Q);}
;throw new Error("Invalid hex6 value: "+Q);}
,hexStringToRgb:function(R){if(this.isHex3String(R)){return this.__dk(R);}
;if(this.isHex6String(R)){return this.__dl(R);}
;throw new Error("Invalid hex value: "+R);}
,rgbToHsb:function(S){var U,V,X;var be=S[0];var bb=S[1];var T=S[2];var bd=(be>bb)?be:bb;if(T>bd){bd=T;}
;var W=(be<bb)?be:bb;if(T<W){W=T;}
;X=bd/255.0;if(bd!=0){V=(bd-W)/bd;}
else {V=0;}
;if(V==0){U=0;}
else {var ba=(bd-be)/(bd-W);var bc=(bd-bb)/(bd-W);var Y=(bd-T)/(bd-W);if(be==bd){U=Y-bc;}
else if(bb==bd){U=2.0+ba-Y;}
else {U=4.0+bc-ba;}
;U=U/6.0;if(U<0){U=U+1.0;}
;}
;return [Math.round(U*360),Math.round(V*100),Math.round(X*100)];}
,hsbToRgb:function(bf){var i,f,p,q,t;var bg=bf[0]/360;var bh=bf[1]/100;var bi=bf[2]/100;if(bg>=1.0){bg%=1.0;}
;if(bh>1.0){bh=1.0;}
;if(bi>1.0){bi=1.0;}
;var bj=Math.floor(255*bi);var bk={};if(bh==0.0){bk.red=bk.green=bk.blue=bj;}
else {bg*=6.0;i=Math.floor(bg);f=bg-i;p=Math.floor(bj*(1.0-bh));q=Math.floor(bj*(1.0-(bh*f)));t=Math.floor(bj*(1.0-(bh*(1.0-f))));switch(i){case 0:bk.red=bj;bk.green=t;bk.blue=p;break;case 1:bk.red=q;bk.green=bj;bk.blue=p;break;case 2:bk.red=p;bk.green=bj;bk.blue=t;break;case 3:bk.red=p;bk.green=q;bk.blue=bj;break;case 4:bk.red=t;bk.green=p;bk.blue=bj;break;case 5:bk.red=bj;bk.green=p;bk.blue=q;break;};}
;return [bk.red,bk.green,bk.blue];}
,randomColor:function(){var r=Math.round(Math.random()*255);var g=Math.round(Math.random()*255);var b=Math.round(Math.random()*255);return this.rgbToRgbString([r,g,b]);}
}});}
)();
(function(){var j="backgroundPositionX",i='</div>',h="engine.version",g="scale",f="browser.quirksmode",e='<div style="',d="repeat-y",c="hidden",b="qx.ui.decoration.MBackgroundImage",a="String",v="backgroundPositionY",u='">',t="mshtml",s="engine.name",r="no-repeat",q=" ",p="repeat-x",o="repeat",n="_applyBackgroundImage",m="qx.debug",k="",l="_applyBackgroundPosition";qx.Mixin.define(b,{properties:{backgroundImage:{check:a,nullable:true,apply:n},backgroundRepeat:{check:[o,p,d,r,g],init:o,apply:n},backgroundPositionX:{nullable:true,apply:l},backgroundPositionY:{nullable:true,apply:l},backgroundPosition:{group:[v,j]}},members:{__tR:false,_generateMarkup:function(w,content){return this._generateBackgroundMarkup(w,content);}
,_generateBackgroundMarkup:function(x,content){var B=k;var A=this.getBackgroundImage();var z=this.getBackgroundRepeat();var top=this.getBackgroundPositionY();if(top==null){top=0;}
;var C=this.getBackgroundPositionX();if(C==null){C=0;}
;x.backgroundPosition=C+q+top;if(A){var y=qx.util.AliasManager.getInstance().resolve(A);B=qx.bom.element.Decoration.create(y,z,x);}
else {if((qx.core.Environment.get(s)==t)){if(parseFloat(qx.core.Environment.get(h))<7||qx.core.Environment.get(f)){x.overflow=c;}
;}
;if(!content){content=k;}
;B=e+qx.bom.element.Style.compile(x)+u+content+i;}
;return B;}
,_applyBackgroundImage:function(){if(qx.core.Environment.get(m)){if(this._isInitialized()){throw new Error("This decorator is already in-use. Modification is not possible anymore!");}
;}
;}
,_applyBackgroundPosition:function(){if(qx.core.Environment.get(m)){if(qx.bom.element.Decoration.isAlphaImageLoaderEnabled()&&!this.__tR){this.info("Applying a background-position value has no impact when using the 'AlphaImageLoader' to display PNG images!");this.__tR=true;}
;}
;}
}});}
)();
(function(){var j="0",i="qx/static",h="http://",g="https://",f="file://",e="qx.util.AliasManager",d="singleton",c=".",b="static",a="/";qx.Class.define(e,{type:d,extend:qx.util.ValueManager,construct:function(){qx.util.ValueManager.call(this);this.__dC={};this.add(b,i);}
,members:{__dC:null,_preprocess:function(k){var n=this._getDynamic();if(n[k]===false){return k;}
else if(n[k]===undefined){if(k.charAt(0)===a||k.charAt(0)===c||k.indexOf(h)===0||k.indexOf(g)===j||k.indexOf(f)===0){n[k]=false;return k;}
;if(this.__dC[k]){return this.__dC[k];}
;var m=k.substring(0,k.indexOf(a));var l=this.__dC[m];if(l!==undefined){n[k]=l+k.substring(m.length);}
;}
;return k;}
,add:function(o,p){this.__dC[o]=p;var r=this._getDynamic();for(var q in r){if(q.substring(0,q.indexOf(a))===o){r[q]=p+q.substring(o.length);}
;}
;}
,remove:function(s){delete this.__dC[s];}
,resolve:function(t){var u=this._getDynamic();if(t!=null){t=this._preprocess(t);}
;return u[t]||t;}
,getAliases:function(){var v={};for(var w in this.__dC){v[w]=this.__dC[w];}
;return v;}
},destruct:function(){this.__dC=null;}
});}
)();
(function(){var j="CSS1Compat",i="android",h="operamini",g="gecko",f="browser.quirksmode",e="browser.name",d="trident",c="mobile chrome",b="iemobile",a="prism|Fennec|Camino|Kmeleon|Galeon|Netscape|SeaMonkey|Namoroka|Firefox",I="IEMobile|Maxthon|MSIE|Trident",H="opera mobi",G="Mobile Safari",F="Maple",E="operamobile",D="ie",C="mobile safari",B="qx.bom.client.Browser",A="(Maple )([0-9]+\.[0-9]+\.[0-9]*)",z="opera mini",q="browser.version",r="opera",o="Opera Mini|Opera Mobi|Opera",p="AdobeAIR|Titanium|Fluid|Chrome|Android|Epiphany|Konqueror|iCab|OmniWeb|Maxthon|Pre|Mobile Safari|Safari",m="webkit",n="browser.documentmode",k="5.0",l="Mobile/",s="msie",t="maple",v=")(/| )([0-9]+\.[0-9])",u="(",x="ce",w="",y="mshtml";qx.Bootstrap.define(B,{statics:{getName:function(){var M=navigator.userAgent;var L=new RegExp(u+qx.bom.client.Browser.__dr+v);var K=M.match(L);if(!K){return w;}
;var name=K[1].toLowerCase();var J=qx.bom.client.Engine.getName();if(J===m){if(name===i){name=c;}
else if(M.indexOf(G)!==-1||M.indexOf(l)!==-1){name=C;}
;}
else if(J===y){if(name===s||name===d){name=D;if(qx.bom.client.OperatingSystem.getVersion()===x){name=b;}
;}
;}
else if(J===r){if(name===H){name=E;}
else if(name===z){name=h;}
;}
else if(J===g){if(M.indexOf(F)!==-1){name=t;}
;}
;return name;}
,getVersion:function(){var Q=navigator.userAgent;var P=new RegExp(u+qx.bom.client.Browser.__dr+v);var O=Q.match(P);if(!O){return w;}
;var name=O[1].toLowerCase();var N=O[3];if(Q.match(/Version(\/| )([0-9]+\.[0-9])/)){N=RegExp.$2;}
;if(qx.bom.client.Engine.getName()==y){N=qx.bom.client.Engine.getVersion();if(name===s&&qx.bom.client.OperatingSystem.getVersion()==x){N=k;}
;}
;if(qx.bom.client.Browser.getName()==t){P=new RegExp(A);O=Q.match(P);if(!O){return w;}
;N=O[2];}
;return N;}
,getDocumentMode:function(){if(document.documentMode){return document.documentMode;}
;return 0;}
,getQuirksMode:function(){if(qx.bom.client.Engine.getName()==y&&parseFloat(qx.bom.client.Engine.getVersion())>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;}
else {return document.compatMode!==j;}
;}
,__dr:{"webkit":p,"gecko":a,"mshtml":I,"opera":o}[qx.bom.client.Engine.getName()]},defer:function(R){qx.core.Environment.add(e,R.getName),qx.core.Environment.add(q,R.getVersion),qx.core.Environment.add(n,R.getDocumentMode),qx.core.Environment.add(f,R.getQuirksMode);}
});}
)();
(function(){var k="qx/icon",j=".png",i="crop",h="engine.version",g="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",f='<div style="',d="repeat-y",c='<img src="',b="qx.bom.element.Decoration",a="', sizingMethod='",K="browser.documentmode",J='"/>',I="png",H="')",G="DXImageTransform.Microsoft.AlphaImageLoader",F='" style="',E="none",D="webkit",C=" ",B="repeat-x",r='"></div>',s="qx/static/blank.gif",p="absolute",q="repeat",n="scale",o="mshtml",l="b64",m="scale-y",t="no-repeat",u="qx.debug",w="scale-x",v="",y="engine.name",x="div",A="img",z="px";qx.Class.define(b,{statics:{DEBUG:false,__jM:{},__jN:(qx.core.Environment.get(y)==o)&&(qx.core.Environment.get(h)<9||qx.core.Environment.get(K)<9),__jO:qx.core.Environment.select(y,{"mshtml":{"scale-x":true,"scale-y":true,"scale":true,"no-repeat":true},"default":null}),__jP:{"scale-x":A,"scale-y":A,"scale":A,"repeat":x,"no-repeat":x,"repeat-x":x,"repeat-y":x},update:function(L,M,N,O){var Q=this.getTagName(N,M);if(Q!=L.tagName.toLowerCase()){throw new Error("Image modification not possible because elements could not be replaced at runtime anymore!");}
;var R=this.getAttributes(M,N,O);if(Q===A){L.src=R.src||qx.util.ResourceManager.getInstance().toUri(s);}
;if(L.style.backgroundPosition!=v&&R.style.backgroundPosition===undefined){R.style.backgroundPosition=null;}
;if(L.style.clip!=v&&R.style.clip===undefined){R.style.clip=null;}
;var P=qx.bom.element.Style;P.setStyles(L,R.style);if(this.__jN){try{L.filters[G].apply();}
catch(e){}
;}
;}
,create:function(S,T,U){var V=this.getTagName(T,S);var X=this.getAttributes(S,T,U);var W=qx.bom.element.Style.compile(X.style);if(V===A){return c+X.src+F+W+J;}
else {return f+W+r;}
;}
,getTagName:function(Y,ba){if(ba&&this.__jN&&this.__jO[Y]&&qx.lang.String.endsWith(ba,j)){return x;}
;return this.__jP[Y];}
,getAttributes:function(bb,bc,bd){if(!bd){bd={};}
;if(!bd.position){bd.position=p;}
;if((qx.core.Environment.get(y)==o)){bd.fontSize=0;bd.lineHeight=0;}
else if((qx.core.Environment.get(y)==D)){bd.WebkitUserDrag=E;}
;var bf=qx.util.ResourceManager.getInstance().getImageFormat(bb)||qx.io.ImageLoader.getFormat(bb);if(qx.core.Environment.get(u)){if(bb!=null&&bf==null){qx.log.Logger.warn("ImageLoader: Not recognized format of external image '"+bb+"'!");}
;}
;var be;if(this.__jN&&this.__jO[bc]&&bf===I){be=this.__jS(bd,bc,bb);}
else {if(bc===n){be=this.__jT(bd,bc,bb);}
else if(bc===w||bc===m){be=this.__jU(bd,bc,bb);}
else {be=this.__jX(bd,bc,bb);}
;}
;return be;}
,__jQ:function(bh,bi,bj){if(bh.width==null&&bi!=null){bh.width=bi+z;}
;if(bh.height==null&&bj!=null){bh.height=bj+z;}
;}
,__jR:function(bk){var bl=qx.util.ResourceManager.getInstance().getImageWidth(bk)||qx.io.ImageLoader.getWidth(bk);var bm=qx.util.ResourceManager.getInstance().getImageHeight(bk)||qx.io.ImageLoader.getHeight(bk);return {width:bl,height:bm};}
,__jS:function(bn,bo,bp){var bs=this.__jR(bp);this.__jQ(bn,bs.width,bs.height);var br=bo==t?i:n;var bq=g+qx.util.ResourceManager.getInstance().toUri(bp)+a+br+H;bn.filter=bq;bn.backgroundImage=bn.backgroundRepeat=v;return {style:bn};}
,__jT:function(bt,bu,bv){var bw=qx.util.ResourceManager.getInstance().toUri(bv);var bx=this.__jR(bv);this.__jQ(bt,bx.width,bx.height);return {src:bw,style:bt};}
,__jU:function(by,bz,bA){var bB=qx.util.ResourceManager.getInstance();var bE=bB.getCombinedFormat(bA);var bG=this.__jR(bA);var bC;if(bE){var bF=bB.getData(bA);var bD=bF[4];if(bE==l){bC=bB.toDataUri(bA);}
else {bC=bB.toUri(bD);}
;if(bz===w){by=this.__jV(by,bF,bG.height);}
else {by=this.__jW(by,bF,bG.width);}
;return {src:bC,style:by};}
else {if(qx.core.Environment.get(u)){this.__ka(bA);}
;if(bz==w){by.height=bG.height==null?null:bG.height+z;}
else if(bz==m){by.width=bG.width==null?null:bG.width+z;}
;bC=bB.toUri(bA);return {src:bC,style:by};}
;}
,__jV:function(bH,bI,bJ){var bK=qx.util.ResourceManager.getInstance().getImageHeight(bI[4]);bH.clip={top:-bI[6],height:bJ};bH.height=bK+z;if(bH.top!=null){bH.top=(parseInt(bH.top,10)+bI[6])+z;}
else if(bH.bottom!=null){bH.bottom=(parseInt(bH.bottom,10)+bJ-bK-bI[6])+z;}
;return bH;}
,__jW:function(bL,bM,bN){var bO=qx.util.ResourceManager.getInstance().getImageWidth(bM[4]);bL.clip={left:-bM[5],width:bN};bL.width=bO+z;if(bL.left!=null){bL.left=(parseInt(bL.left,10)+bM[5])+z;}
else if(bL.right!=null){bL.right=(parseInt(bL.right,10)+bN-bO-bM[5])+z;}
;return bL;}
,__jX:function(bP,bQ,bR){var bU=qx.util.ResourceManager.getInstance();var ca=bU.getCombinedFormat(bR);var cc=this.__jR(bR);if(ca&&bQ!==q){var cb=bU.getData(bR);var bY=cb[4];if(ca==l){var bX=bU.toDataUri(bR);var bW=0;var bV=0;}
else {var bX=bU.toUri(bY);var bW=cb[5];var bV=cb[6];}
;var bS=qx.bom.element.Background.getStyles(bX,bQ,bW,bV);for(var bT in bS){bP[bT]=bS[bT];}
;if(cc.width!=null&&bP.width==null&&(bQ==d||bQ===t)){bP.width=cc.width+z;}
;if(cc.height!=null&&bP.height==null&&(bQ==B||bQ===t)){bP.height=cc.height+z;}
;return {style:bP};}
else {if(qx.core.Environment.get(u)){if(bQ!==q){this.__ka(bR);}
;}
;this.__jQ(bP,cc.width,cc.height);this.__jY(bP,bR,bQ);return {style:bP};}
;}
,__jY:function(cd,ce,cf){var top=null;var cj=null;if(cd.backgroundPosition){var cg=cd.backgroundPosition.split(C);cj=parseInt(cg[0],10);if(isNaN(cj)){cj=cg[0];}
;top=parseInt(cg[1],10);if(isNaN(top)){top=cg[1];}
;}
;var ci=qx.bom.element.Background.getStyles(ce,cf,cj,top);for(var ch in ci){cd[ch]=ci[ch];}
;if(cd.filter){cd.filter=v;}
;}
,__ka:function(ck){if(this.DEBUG&&qx.util.ResourceManager.getInstance().has(ck)&&ck.indexOf(k)==-1){if(!this.__jM[ck]){qx.log.Logger.debug("Potential clipped image candidate: "+ck);this.__jM[ck]=true;}
;}
;}
,isAlphaImageLoaderEnabled:function(){return qx.bom.element.Decoration.__jN;}
}});}
)();
(function(){var b="singleton",a="qx.util.LibraryManager";qx.Class.define(a,{extend:qx.core.Object,type:b,statics:{__dX:qx.$$libraries||{}},members:{has:function(c){return !!this.self(arguments).__dX[c];}
,get:function(d,e){return this.self(arguments).__dX[d][e]?this.self(arguments).__dX[d][e]:null;}
,set:function(f,g,h){this.self(arguments).__dX[f][g]=h;}
}});}
)();
(function(){var n="Microsoft.XMLHTTP",m="io.ssl",l="io.xhr",k="",j="file:",i="https:",h="webkit",g="gecko",f="activex",e="opera",b=".",d="io.maxrequests",c="qx.bom.client.Transport",a="xhr";qx.Bootstrap.define(c,{statics:{getMaxConcurrentRequestCount:function(){var o;var r=qx.bom.client.Engine.getVersion().split(b);var p=0;var s=0;var q=0;if(r[0]){p=r[0];}
;if(r[1]){s=r[1];}
;if(r[2]){q=r[2];}
;if(window.maxConnectionsPerServer){o=window.maxConnectionsPerServer;}
else if(qx.bom.client.Engine.getName()==e){o=8;}
else if(qx.bom.client.Engine.getName()==h){o=4;}
else if(qx.bom.client.Engine.getName()==g&&((p>1)||((p==1)&&(s>9))||((p==1)&&(s==9)&&(q>=1)))){o=6;}
else {o=2;}
;return o;}
,getSsl:function(){return window.location.protocol===i;}
,getXmlHttpRequest:function(){var t=window.ActiveXObject?(function(){if(window.location.protocol!==j){try{new window.XMLHttpRequest();return a;}
catch(u){}
;}
;try{new window.ActiveXObject(n);return f;}
catch(v){}
;}
)():(function(){try{new window.XMLHttpRequest();return a;}
catch(w){}
;}
)();return t||k;}
},defer:function(x){qx.core.Environment.add(d,x.getMaxConcurrentRequestCount);qx.core.Environment.add(m,x.getSsl);qx.core.Environment.add(l,x.getXmlHttpRequest);}
});}
)();
(function(){var q="//",p="encoding",o="?",n="data",m="type",l="data:image/",k=";",j="qx.util.ResourceManager",i="singleton",h=",",c="mshtml",g="engine.name",f="io.ssl",b="string",a="/",e="resourceUri",d="";qx.Class.define(j,{extend:qx.core.Object,type:i,construct:function(){qx.core.Object.call(this);}
,statics:{__j:qx.$$resources||{},__dY:{}},members:{has:function(r){return !!this.self(arguments).__j[r];}
,getData:function(s){return this.self(arguments).__j[s]||null;}
,getImageWidth:function(t){var u=this.self(arguments).__j[t];return u?u[0]:null;}
,getImageHeight:function(v){var w=this.self(arguments).__j[v];return w?w[1]:null;}
,getImageFormat:function(x){var y=this.self(arguments).__j[x];return y?y[2]:null;}
,getCombinedFormat:function(z){var C=d;var B=this.self(arguments).__j[z];var A=B&&B.length>4&&typeof (B[4])==b&&this.constructor.__j[B[4]];if(A){var E=B[4];var D=this.constructor.__j[E];C=D[2];}
;return C;}
,toUri:function(F){if(F==null){return F;}
;var G=this.self(arguments).__j[F];if(!G){return F;}
;if(typeof G===b){var I=G;}
else {var I=G[3];if(!I){return F;}
;}
;var H=d;if((qx.core.Environment.get(g)==c)&&qx.core.Environment.get(f)){H=this.self(arguments).__dY[I];}
;return H+qx.util.LibraryManager.getInstance().get(I,e)+a+F;}
,toDataUri:function(J){var L=this.constructor.__j[J];var M=this.constructor.__j[L[4]];var N;if(M){var K=M[4][J];N=l+K[m]+k+K[p]+h+K[n];}
else {N=this.toUri(J);}
;return N;}
},defer:function(O){if((qx.core.Environment.get(g)==c)){if(qx.core.Environment.get(f)){for(var S in qx.$$libraries){var Q;if(qx.util.LibraryManager.getInstance().get(S,e)){Q=qx.util.LibraryManager.getInstance().get(S,e);}
else {O.__dY[S]=d;continue;}
;if(Q.match(/^\/\//)!=null){O.__dY[S]=window.location.protocol;}
else if(Q.match(/^\//)!=null){O.__dY[S]=window.location.protocol+q+window.location.host;}
else if(Q.match(/^\.\//)!=null){var P=document.URL;O.__dY[S]=P.substring(0,P.lastIndexOf(a)+1);}
else if(Q.match(/^http/)!=null){O.__dY[S]=d;}
else {var T=window.location.href.indexOf(o);var R;if(T==-1){R=window.location.href;}
else {R=window.location.href.substring(0,T);}
;O.__dY[S]=R.substring(0,R.lastIndexOf(a)+1);}
;}
;}
;}
;}
});}
)();
(function(){var n="css.float",m="css.borderimage.standardsyntax",l="borderRadius",k="boxSizing",j="stretch",h='m11',g="content",f="css.inlineblock",e="css.gradient.filter",d="css.appearance",br="css.opacity",bq="css.gradient.radial",bp="input",bo="userSelect",bn="css.overflowxy",bm="styleFloat",bl="css.textShadow.filter",bk="css.usermodify",bj="css.boxsizing",bi='url("foo.png") 4 4 4 4 fill stretch',u="css.boxmodel",v="qx.bom.client.Css",s="appearance",t="placeholder",q="css.textShadow",r="DXImageTransform.Microsoft.Shadow",o="css.boxshadow",p="css.gradient.legacywebkit",C="css.borderradius",D="linear-gradient(0deg, #fff, #000)",N="textShadow",K="css.borderimage",V="rgba(1, 2, 3, 0.5)",Q="color=#666666,direction=45",be="radial-gradient(0px 0px, cover, red 50%, blue 100%)",bb="rgba",G="(",bh='url("foo.png") 4 4 4 4 stretch',bg="css.gradient.linear",bf="DXImageTransform.Microsoft.Gradient",F="css.userselect",I="-webkit-gradient(linear,0% 0%,100% 100%,from(white), to(red))",J="mshtml",M="css.rgba",O=");",R="4 fill",X='WebKitCSSMatrix',bd="none",w="startColorStr=#550000FF, endColorStr=#55FFFF00",x="progid:",H="css.placeholder",U="css.userselect.none",T="css.textoverflow",S="textOverflow",ba="userModify",Y="boxShadow",P="cssFloat",W="border",a="color",bc="borderImage",y="foo.png",z="span",L="string",b="-moz-none",c="backgroundImage",E="inline-block",A="-moz-inline-box",B="div";qx.Bootstrap.define(v,{statics:{__dp:null,getBoxModel:function(){var content=qx.bom.client.Engine.getName()!==J||!qx.bom.client.Browser.getQuirksMode();return content?g:W;}
,getTextOverflow:function(){return qx.bom.Style.getPropertyName(S);}
,getPlaceholder:function(){var i=document.createElement(bp);return t in i;}
,getAppearance:function(){return qx.bom.Style.getPropertyName(s);}
,getBorderRadius:function(){return qx.bom.Style.getPropertyName(l);}
,getBoxShadow:function(){return qx.bom.Style.getPropertyName(Y);}
,getBorderImage:function(){return qx.bom.Style.getPropertyName(bc);}
,getBorderImageSyntax:function(){var bt=qx.bom.client.Css.getBorderImage();if(!bt){return null;}
;var bs=document.createElement(B);if(bt===bc){bs.style[bt]=bi;if(bs.style.borderImageSource.indexOf(y)>=0&&bs.style.borderImageSlice.indexOf(R)>=0&&bs.style.borderImageRepeat.indexOf(j)>=0){return true;}
;}
else {bs.style[bt]=bh;if(bs.style[bt].indexOf(y)>=0){return false;}
;}
;return null;}
,getUserSelect:function(){return qx.bom.Style.getPropertyName(bo);}
,getUserSelectNone:function(){var bv=qx.bom.client.Css.getUserSelect();if(bv){var bu=document.createElement(z);bu.style[bv]=b;return bu.style[bv]===b?b:bd;}
;return null;}
,getUserModify:function(){return qx.bom.Style.getPropertyName(ba);}
,getFloat:function(){var bw=document.documentElement.style;return bw.cssFloat!==undefined?P:bw.styleFloat!==undefined?bm:null;}
,getTranslate3d:function(){return X in window&&h in new WebKitCSSMatrix();}
,getLinearGradient:function(){qx.bom.client.Css.__dp=false;var bA=D;var bx=document.createElement(B);var by=qx.bom.Style.getAppliedStyle(bx,c,bA);if(!by){bA=I;var by=qx.bom.Style.getAppliedStyle(bx,c,bA,false);if(by){qx.bom.client.Css.__dp=true;}
;}
;if(!by){return null;}
;var bz=/(.*?)\(/.exec(by);return bz?bz[1]:null;}
,getFilterGradient:function(){return qx.bom.client.Css.__dq(bf,w);}
,getRadialGradient:function(){var bE=be;var bB=document.createElement(B);var bC=qx.bom.Style.getAppliedStyle(bB,c,bE);if(!bC){return null;}
;var bD=/(.*?)\(/.exec(bC);return bD?bD[1]:null;}
,getLegacyWebkitGradient:function(){if(qx.bom.client.Css.__dp===null){qx.bom.client.Css.getLinearGradient();}
;return qx.bom.client.Css.__dp;}
,getRgba:function(){var bF;try{bF=document.createElement(B);}
catch(bG){bF=document.createElement();}
;try{bF.style[a]=V;if(bF.style[a].indexOf(bb)!=-1){return true;}
;}
catch(bH){}
;return false;}
,getBoxSizing:function(){return qx.bom.Style.getPropertyName(k);}
,getInlineBlock:function(){var bI=document.createElement(z);bI.style.display=E;if(bI.style.display==E){return E;}
;bI.style.display=A;if(bI.style.display!==A){return A;}
;return null;}
,getOpacity:function(){return (typeof document.documentElement.style.opacity==L);}
,getOverflowXY:function(){return (typeof document.documentElement.style.overflowX==L)&&(typeof document.documentElement.style.overflowY==L);}
,getTextShadow:function(){return !!qx.bom.Style.getPropertyName(N);}
,getFilterTextShadow:function(){return qx.bom.client.Css.__dq(r,Q);}
,__dq:function(bJ,bK){var bM=false;var bN=x+bJ+G+bK+O;var bL=document.createElement(B);document.body.appendChild(bL);bL.style.filter=bN;if(bL.filters&&bL.filters.length>0&&bL.filters.item(bJ).enabled==true){bM=true;}
;document.body.removeChild(bL);return bM;}
},defer:function(bO){qx.core.Environment.add(T,bO.getTextOverflow);qx.core.Environment.add(H,bO.getPlaceholder);qx.core.Environment.add(C,bO.getBorderRadius);qx.core.Environment.add(o,bO.getBoxShadow);qx.core.Environment.add(bg,bO.getLinearGradient);qx.core.Environment.add(e,bO.getFilterGradient);qx.core.Environment.add(bq,bO.getRadialGradient);qx.core.Environment.add(p,bO.getLegacyWebkitGradient);qx.core.Environment.add(u,bO.getBoxModel);qx.core.Environment.add(M,bO.getRgba);qx.core.Environment.add(K,bO.getBorderImage);qx.core.Environment.add(m,bO.getBorderImageSyntax);qx.core.Environment.add(bk,bO.getUserModify);qx.core.Environment.add(F,bO.getUserSelect);qx.core.Environment.add(U,bO.getUserSelectNone);qx.core.Environment.add(d,bO.getAppearance);qx.core.Environment.add(n,bO.getFloat);qx.core.Environment.add(bj,bO.getBoxSizing);qx.core.Environment.add(f,bO.getInlineBlock);qx.core.Environment.add(br,bO.getOpacity);qx.core.Environment.add(bn,bO.getOverflowXY);qx.core.Environment.add(q,bO.getTextShadow);qx.core.Environment.add(bl,bO.getFilterTextShadow);}
});}
)();
(function(){var o=");",n="Please use 'qx.core.Environment.get(\"css.opacity\")' instead.",m="SUPPORT_CSS3_OPACITY",l=")",k="qx.debug",j="zoom:1;filter:alpha(opacity=",i="qx.bom.element.Opacity",h="alpha(opacity=",g=";",f="opacity:",c="opacity",e="filter",d="engine.name",b="css.opacity",a="";qx.Bootstrap.define(i,{statics:{SUPPORT_CSS3_OPACITY:false,compile:qx.core.Environment.select(d,{"mshtml":function(p){if(p>=1){p=1;}
;if(p<0.00001){p=0;}
;if(qx.core.Environment.get(b)){return f+p+g;}
else {return j+(p*100)+o;}
;}
,"default":function(q){if(q>=1){return a;}
;return f+q+g;}
}),set:qx.core.Environment.select(d,{"mshtml":function(r,s){if(qx.core.Environment.get(b)){if(s>=1){s=a;}
;r.style.opacity=s;}
else {var t=qx.bom.element.Style.get(r,e,qx.bom.element.Style.COMPUTED_MODE,false);if(s>=1){s=1;}
;if(s<0.00001){s=0;}
;if(!r.currentStyle||!r.currentStyle.hasLayout){r.style.zoom=1;}
;r.style.filter=t.replace(/alpha\([^\)]*\)/gi,a)+h+s*100+l;}
;}
,"default":function(u,v){if(v>=1){v=a;}
;u.style.opacity=v;}
}),reset:qx.core.Environment.select(d,{"mshtml":function(w){if(qx.core.Environment.get(b)){w.style.opacity=a;}
else {var x=qx.bom.element.Style.get(w,e,qx.bom.element.Style.COMPUTED_MODE,false);w.style.filter=x.replace(/alpha\([^\)]*\)/gi,a);}
;}
,"default":function(y){y.style.opacity=a;}
}),get:qx.core.Environment.select(d,{"mshtml":function(z,A){if(qx.core.Environment.get(b)){var B=qx.bom.element.Style.get(z,c,A,false);if(B!=null){return parseFloat(B);}
;return 1.0;}
else {var C=qx.bom.element.Style.get(z,e,A,false);if(C){var B=C.match(/alpha\(opacity=(.*)\)/);if(B&&B[1]){return parseFloat(B[1])/100;}
;}
;return 1.0;}
;}
,"default":function(D,E){var F=qx.bom.element.Style.get(D,c,E,false);if(F!=null){return parseFloat(F);}
;return 1.0;}
})},defer:function(G){G.SUPPORT_CSS3_OPACITY=qx.core.Environment.get(b);}
});if(qx.core.Environment.get(k)){qx.log.Logger.deprecatedConstantWarning(qx.bom.element.Opacity,m,n);}
;}
)();
(function(){var o="clip:auto;",n="rect(",m=");",l="",k=")",j="qx.bom.element.Clip",i="string",h="clip:rect(",g=" ",f="clip",c="rect(auto,auto,auto,auto)",e="rect(auto, auto, auto, auto)",d=",",b="px",a="auto";qx.Bootstrap.define(j,{statics:{compile:function(p){if(!p){return o;}
;var u=p.left;var top=p.top;var t=p.width;var s=p.height;var q,r;if(u==null){q=(t==null?a:t+b);u=a;}
else {q=(t==null?a:u+t+b);u=u+b;}
;if(top==null){r=(s==null?a:s+b);top=a;}
else {r=(s==null?a:top+s+b);top=top+b;}
;return h+top+d+q+d+r+d+u+m;}
,get:function(v,w){var y=qx.bom.element.Style.get(v,f,w,false);var E,top,C,B;var x,z;if(typeof y===i&&y!==a&&y!==l){y=y.trim();if(/\((.*)\)/.test(y)){var D=RegExp.$1;if(/,/.test(D)){var A=D.split(d);}
else {var A=D.split(g);}
;top=A[0].trim();x=A[1].trim();z=A[2].trim();E=A[3].trim();if(E===a){E=null;}
;if(top===a){top=null;}
;if(x===a){x=null;}
;if(z===a){z=null;}
;if(top!=null){top=parseInt(top,10);}
;if(x!=null){x=parseInt(x,10);}
;if(z!=null){z=parseInt(z,10);}
;if(E!=null){E=parseInt(E,10);}
;if(x!=null&&E!=null){C=x-E;}
else if(x!=null){C=x;}
;if(z!=null&&top!=null){B=z-top;}
else if(z!=null){B=z;}
;}
else {throw new Error("Could not parse clip string: "+y);}
;}
;return {left:E||null,top:top||null,width:C||null,height:B||null};}
,set:function(F,G){if(!G){F.style.clip=c;return;}
;var L=G.left;var top=G.top;var K=G.width;var J=G.height;var H,I;if(L==null){H=(K==null?a:K+b);L=a;}
else {H=(K==null?a:L+K+b);L=L+b;}
;if(top==null){I=(J==null?a:J+b);top=a;}
else {I=(J==null?a:top+J+b);top=top+b;}
;F.style.clip=n+top+d+H+d+I+d+L+k;}
,reset:function(M){M.style.clip=e;}
}});}
)();
(function(){var s="cursor:",r="ns-resize",q="",p="mshtml",o="n-resize",n="opera",m=";",l="ew-resize",k="qx.bom.element.Cursor",j="e-resize",d="cursor",i="engine.name",g="nw-resize",c="nesw-resize",b="browser.documentmode",f="nwse-resize",e="ne-resize",h="browser.quirksmode",a="engine.version";qx.Bootstrap.define(k,{statics:{__bd:{},compile:function(t){return s+(this.__bd[t]||t)+m;}
,get:function(u,v){return qx.bom.element.Style.get(u,d,v,false);}
,set:function(w,x){w.style.cursor=this.__bd[x]||x;}
,reset:function(y){y.style.cursor=q;}
},defer:function(z){if(qx.core.Environment.get(i)==p&&((parseFloat(qx.core.Environment.get(a))<9||qx.core.Environment.get(b)<9)&&!qx.core.Environment.get(h))){z.__bd[c]=e;z.__bd[f]=g;if(((parseFloat(qx.core.Environment.get(a))<8||qx.core.Environment.get(b)<8)&&!qx.core.Environment.get(h))){z.__bd[l]=j;z.__bd[r]=o;}
;}
else if(qx.core.Environment.get(i)==n&&parseInt(qx.core.Environment.get(a))<12){z.__bd[c]=e;z.__bd[f]=g;}
;}
});}
)();
(function(){var k="function",j="Invalid argument 'array'",h="Invalid argument 'minLength'",g="Invalid argument 'source'",f="qx.lang.Object",e="undefined",d="object",c="Invalid argument 'target'",b="Invalid argument 'map'",a="qx.debug";qx.Bootstrap.define(f,{statics:{empty:function(m){if(qx.core.Environment.get(a)){qx.core.Assert&&qx.core.Assert.assertMap(m,b);}
;for(var n in m){if(m.hasOwnProperty(n)){delete m[n];}
;}
;}
,isEmpty:function(o){if(qx.core.Environment.get(a)){qx.core.Assert&&qx.core.Assert.assertMap(o,b);}
;for(var p in o){return false;}
;return true;}
,hasMinLength:function(q,r){if(qx.core.Environment.get(a)){qx.core.Assert&&qx.core.Assert.assertMap(q,b);qx.core.Assert&&qx.core.Assert.assertInteger(r,h);}
;if(r<=0){return true;}
;var length=0;for(var s in q){if(( ++length)>=r){return true;}
;}
;return false;}
,getLength:qx.Bootstrap.objectGetLength,getKeys:qx.Bootstrap.getKeys,getKeysAsString:qx.Bootstrap.getKeysAsString,getValues:function(t){if(qx.core.Environment.get(a)){qx.core.Assert&&qx.core.Assert.assertMap(t,b);}
;var v=[];var u=Object.keys(t);for(var i=0,l=u.length;i<l;i++ ){v.push(t[u[i]]);}
;return v;}
,mergeWith:qx.Bootstrap.objectMergeWith,carefullyMergeWith:function(w,x){if(qx.core.Environment.get(a)){qx.core.Assert&&qx.core.Assert.assertMap(w,c);qx.core.Assert&&qx.core.Assert.assertMap(x,g);qx.Bootstrap.warn("'qx.lang.Object.carefullyMergeWith' is deprecated."+" Please use 'qx.lang.Object.mergeWith' with override set to false instead");}
;return qx.lang.Object.mergeWith(w,x,false);}
,merge:function(y,z){if(qx.core.Environment.get(a)){qx.core.Assert&&qx.core.Assert.assertMap(y,c);qx.Bootstrap.warn("'qx.lang.Object.merge' is deprecated."+" Please use 'qx.lang.Object.mergeWith' several times instead");}
;var A=arguments.length;for(var i=1;i<A;i++ ){qx.lang.Object.mergeWith(y,arguments[i]);}
;return y;}
,clone:function(B,C){if(qx.lang.Type.isObject(B)){var D={};for(var E in B){if(C){D[E]=qx.lang.Object.clone(B[E],C);}
else {D[E]=B[E];}
;}
;return D;}
else if(qx.lang.Type.isArray(B)){var D=[];for(var i=0;i<B.length;i++ ){if(C){D[i]=qx.lang.Object.clone(B[i]);}
else {D[i]=B[i];}
;}
;return D;}
;return B;}
,invert:function(F){if(qx.core.Environment.get(a)){qx.core.Assert&&qx.core.Assert.assertMap(F,b);}
;var G={};for(var H in F){G[F[H].toString()]=H;}
;return G;}
,getKeyFromValue:function(I,J){if(qx.core.Environment.get(a)){qx.core.Assert&&qx.core.Assert.assertMap(I,b);}
;for(var K in I){if(I.hasOwnProperty(K)&&I[K]===J){return K;}
;}
;return null;}
,contains:function(L,M){if(qx.core.Environment.get(a)){qx.core.Assert&&qx.core.Assert.assertMap(L,b);}
;return this.getKeyFromValue(L,M)!==null;}
,select:function(N,O){if(qx.core.Environment.get(a)){qx.core.Assert&&qx.core.Assert.assertMap(O,b);}
;if(qx.core.Environment.get(a)){qx.Bootstrap.warn("'qx.lang.Object.select()' is deprecated. Please use map[key] instead.");}
;return O[N];}
,fromArray:function(P){if(qx.core.Environment.get(a)){qx.core.Assert&&qx.core.Assert.assertArray(P,j);}
;var Q={};for(var i=0,l=P.length;i<l;i++ ){if(qx.core.Environment.get(a)){switch(typeof P[i]){case d:case k:case e:throw new Error("Could not convert complex objects like "+P[i]+" at array index "+i+" to map syntax");};}
;Q[P[i].toString()]=true;}
;return Q;}
,toUriParameter:function(R,S){if(qx.core.Environment.get(a)){qx.Bootstrap.warn("'qx.util.Uri.toParameter' has been moved to 'qx.util.Uri.toParameter'.");}
;return qx.util.Uri.toParameter(R,S);}
}});}
)();
(function(){var k="file",j="strict",h="anchor",g="div",f="query",e="source",d="password",c="host",b="protocol",a="qx.debug",D="user",C="directory",B="loose",A="relative",z="queryKey",y="qx.util.Uri",x="",w="path",v="authority",u='">0</a>',s="port",t='<a href="',q="userInfo",r="?",n="+",p="&",l="=";qx.Bootstrap.define(y,{statics:{parseUri:function(E,F){var G={key:[e,b,v,q,D,d,c,s,A,w,C,k,f,h],q:{name:z,parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}};var o=G,m=G.parser[F?j:B].exec(E),H={},i=14;while(i-- ){H[o.key[i]]=m[i]||x;}
;H[o.q.name]={};H[o.key[12]].replace(o.q.parser,function(I,J,K){if(J){H[o.q.name][J]=K;}
;}
);return H;}
,appendParamsToUrl:function(L,M){if(M===undefined){return L;}
;if(qx.core.Environment.get(a)){if(!(qx.lang.Type.isString(M)||qx.lang.Type.isObject(M))){throw new Error("params must be either string or object");}
;}
;if(qx.lang.Type.isObject(M)){M=qx.util.Uri.toParameter(M);}
;if(!M){return L;}
;return L+=(/\?/).test(L)?p+M:r+M;}
,toParameter:function(N,O){var R,P=[];for(R in N){if(N.hasOwnProperty(R)){var Q=N[R];if(Q instanceof Array){for(var i=0;i<Q.length;i++ ){this.__dn(R,Q[i],P,O);}
;}
else {this.__dn(R,Q,P,O);}
;}
;}
;return P.join(p);}
,__dn:function(S,T,U,V){var W=window.encodeURIComponent;if(V){U.push(W(S).replace(/%20/g,n)+l+W(T).replace(/%20/g,n));}
else {U.push(W(S)+l+W(T));}
;}
,getAbsolute:function(X){var Y=document.createElement(g);Y.innerHTML=t+X+u;return Y.firstChild.href;}
}});}
)();
(function(){var i="border-box",h="qx.bom.element.BoxSizing",g="boxSizing",f="content-box",e=":",d=";",c="",b="qx.debug",a="css.boxsizing";qx.Bootstrap.define(h,{statics:{__ds:{tags:{button:true,select:true},types:{search:true,button:true,submit:true,reset:true,checkbox:true,radio:true}},__dt:function(j){var k=this.__ds;return k.tags[j.tagName.toLowerCase()]||k.types[j.type];}
,compile:function(l){if(qx.core.Environment.get(a)){var m=qx.bom.Style.getCssName(qx.core.Environment.get(a));return m+e+l+d;}
else {if(qx.core.Environment.get(b)){qx.log.Logger.warn(this,"This client does not support dynamic modification of the boxSizing property.");qx.log.Logger.trace();}
;}
;}
,get:function(n){if(qx.core.Environment.get(a)){return qx.bom.element.Style.get(n,g,null,false)||c;}
;if(qx.bom.Document.isStandardMode(qx.dom.Node.getWindow(n))){if(!this.__dt(n)){return f;}
;}
;return i;}
,set:function(o,p){if(qx.core.Environment.get(a)){try{o.style[qx.core.Environment.get(a)]=p;}
catch(q){if(qx.core.Environment.get(b)){qx.log.Logger.warn(this,"This client does not support the boxSizing value",p);}
;}
;}
else {if(qx.core.Environment.get(b)){qx.log.Logger.warn(this,"This client does not support dynamic modification of the boxSizing property.");}
;}
;}
,reset:function(r){this.set(r,c);}
}});}
)();
(function(){var j="css.float",i="px",h="css.appearance",g="pixelRight",f="css.userselect",e="css.boxsizing",d="css.textoverflow",c="pixelHeight",b=":",a="pixelTop",B="css.borderimage",A="Invalid argument 'name'",z="pixelLeft",y="css.usermodify",x="qx.bom.element.Style",w="pixelBottom",v="Invalid argument 'styles'",u="pixelWidth",t=";",s="float",q="qx.debug",r="browser.documentmode",o="mshtml",p="Invalid argument 'smart'",m="Invalid argument 'element'",n="style",k="engine.name",l="";qx.Bootstrap.define(x,{statics:{__du:null,__dv:null,__dw:function(){var D={"appearance":qx.core.Environment.get(h),"userSelect":qx.core.Environment.get(f),"textOverflow":qx.core.Environment.get(d),"borderImage":qx.core.Environment.get(B),"float":qx.core.Environment.get(j),"userModify":qx.core.Environment.get(y),"boxSizing":qx.core.Environment.get(e)};this.__dv={};for(var C in qx.lang.Object.clone(D)){if(!D[C]){delete D[C];}
else {this.__dv[C]=C==s?s:qx.bom.Style.getCssName(D[C]);}
;}
;this.__du=D;}
,__dx:function(name){var E=qx.bom.Style.getPropertyName(name);if(E){this.__du[name]=E;}
;return E;}
,__dy:{width:u,height:c,left:z,right:g,top:a,bottom:w},__dz:{clip:qx.bom.element.Clip,cursor:qx.bom.element.Cursor,opacity:qx.bom.element.Opacity,boxSizing:qx.bom.element.BoxSizing},compile:function(F){var H=[];var I=this.__dz;var J=this.__dv;var name,G;for(name in F){G=F[name];if(G==null){continue;}
;name=this.__du[name]||this.__dx(name)||name;if(I[name]){H.push(I[name].compile(G));}
else {if(!J[name]){J[name]=qx.bom.Style.getCssName(name);}
;H.push(J[name],b,G,t);}
;}
;return H.join(l);}
,setCss:function(K,L){if(qx.core.Environment.get(k)===o&&parseInt(qx.core.Environment.get(r),10)<8){K.style.cssText=L;}
else {K.setAttribute(n,L);}
;}
,getCss:function(M){if(qx.core.Environment.get(k)===o&&parseInt(qx.core.Environment.get(r),10)<8){return M.style.cssText.toLowerCase();}
else {return M.getAttribute(n);}
;}
,isPropertySupported:function(N){return (this.__dz[N]||this.__du[N]||N in document.documentElement.style);}
,COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(O,name,P,Q){if(qx.core.Environment.get(q)){qx.core.Assert.assertElement(O,m);qx.core.Assert.assertString(name,A);if(Q!==undefined){qx.core.Assert.assertBoolean(Q,p);}
;}
;name=this.__du[name]||this.__dx(name)||name;if(Q!==false&&this.__dz[name]){this.__dz[name].set(O,P);}
else {O.style[name]=P!==null?P:l;}
;}
,setStyles:function(R,S,T){if(qx.core.Environment.get(q)){qx.core.Assert.assertElement(R,m);qx.core.Assert.assertMap(S,v);if(T!==undefined){qx.core.Assert.assertBoolean(T,p);}
;}
;var W=this.__du;var Y=this.__dz;var U=R.style;for(var X in S){var V=S[X];var name=W[X]||this.__dx(X)||X;if(V===undefined){if(T!==false&&Y[name]){Y[name].reset(R);}
else {U[name]=l;}
;}
else {if(T!==false&&Y[name]){Y[name].set(R,V);}
else {U[name]=V!==null?V:l;}
;}
;}
;}
,reset:function(ba,name,bb){name=this.__du[name]||this.__dx(name)||name;if(bb!==false&&this.__dz[name]){this.__dz[name].reset(ba);}
else {ba.style[name]=l;}
;}
,get:qx.core.Environment.select(k,{"mshtml":function(bc,name,bd,be){name=this.__du[name]||this.__dx(name)||name;if(be!==false&&this.__dz[name]){return this.__dz[name].get(bc,bd);}
;if(!bc.currentStyle){return bc.style[name]||l;}
;switch(bd){case this.LOCAL_MODE:return bc.style[name]||l;case this.CASCADED_MODE:return bc.currentStyle[name]||l;default:var bi=bc.currentStyle[name]||bc.style[name]||l;if(/^-?[\.\d]+(px)?$/i.test(bi)){return bi;}
;var bh=this.__dy[name];if(bh){var bf=bc.style[name];bc.style[name]=bi||0;var bg=bc.style[bh]+i;bc.style[name]=bf;return bg;}
;return bi;};}
,"default":function(bj,name,bk,bl){name=this.__du[name]||this.__dx(name)||name;if(bl!==false&&this.__dz[name]){return this.__dz[name].get(bj,bk);}
;switch(bk){case this.LOCAL_MODE:return bj.style[name]||l;case this.CASCADED_MODE:if(bj.currentStyle){return bj.currentStyle[name]||l;}
;throw new Error("Cascaded styles are not supported in this browser!");default:var bm=qx.dom.Node.getDocument(bj);var bn=bm.defaultView.getComputedStyle(bj,null);if(bn&&bn[name]){return bn[name];}
;return bj.style[name]||l;};}
})},defer:function(bo){bo.__dw();}
});}
)();
(function(){var g="engine.name",f="position:absolute;width:0;height:0;width:1",e="engine.version",d="qx.bom.Document",c="1px",b="div",a="CSS1Compat";qx.Bootstrap.define(d,{statics:{isQuirksMode:qx.core.Environment.select(g,{"mshtml":function(h){if(qx.core.Environment.get(e)>=8){return (h||window).document.documentMode===5;}
else {return (h||window).document.compatMode!==a;}
;}
,"webkit":function(i){if(document.compatMode===undefined){var j=(i||window).document.createElement(b);j.style.cssText=f;return j.style.width===c?true:false;}
else {return (i||window).document.compatMode!==a;}
;}
,"default":function(k){return (k||window).document.compatMode!==a;}
}),isStandardMode:function(l){return !this.isQuirksMode(l);}
,getWidth:function(m){var n=(m||window).document;var o=qx.bom.Viewport.getWidth(m);var scroll=this.isStandardMode(m)?n.documentElement.scrollWidth:n.body.scrollWidth;return Math.max(scroll,o);}
,getHeight:function(p){var q=(p||window).document;var r=qx.bom.Viewport.getHeight(p);var scroll=this.isStandardMode(p)?q.documentElement.scrollHeight:q.body.scrollHeight;return Math.max(scroll,r);}
}});}
)();
(function(){var b="qx.bom.Viewport",a="undefined";qx.Bootstrap.define(b,{statics:{getWidth:function(c){var c=c||window;var d=c.document;return qx.bom.Document.isStandardMode(c)?d.documentElement.clientWidth:d.body.clientWidth;}
,getHeight:function(e){var e=e||window;var f=e.document;return qx.bom.Document.isStandardMode(e)?f.documentElement.clientHeight:f.body.clientHeight;}
,getScrollLeft:function(g){var g=g?g:window;if(typeof g.pageXOffset!==a){return g.pageXOffset;}
;var h=g.document;return h.documentElement.scrollLeft||h.body.scrollLeft;}
,getScrollTop:function(i){var i=i?i:window;if(typeof i.pageYOffeset!==a){return i.pageYOffset;}
;var j=i.document;return j.documentElement.scrollTop||j.body.scrollTop;}
,__dA:function(k){var l=this.getWidth(k)>this.getHeight(k)?90:0;var m=k.orientation;if(m==null||Math.abs(m%180)==l){return {"-270":90,"-180":180,"-90":-90,"0":0,"90":90,"180":180,"270":-90};}
else {return {"-270":180,"-180":-90,"-90":0,"0":90,"90":180,"180":-90,"270":0};}
;}
,__dB:null,getOrientation:function(n){var n=n||window.top;var o=n.orientation;if(o==null){o=this.getWidth(n)>this.getHeight(n)?90:0;}
else {if(this.__dB==null){this.__dB=this.__dA(n);}
;o=this.__dB[o];}
;return o;}
,isLandscape:function(p){return this.getWidth(p)>=this.getHeight(p);}
,isPortrait:function(q){return this.getWidth(q)<this.getHeight(q);}
}});}
)();
(function(){var c="load",b="qx.io.ImageLoader",a="html.image.naturaldimensions";qx.Bootstrap.define(b,{statics:{__cS:{},__kb:{width:null,height:null},__kc:/\.(png|gif|jpg|jpeg|bmp)\b/i,__kd:/^data:image\/(png|gif|jpg|jpeg|bmp)\b/i,isLoaded:function(d){var e=this.__cS[d];return !!(e&&e.loaded);}
,isFailed:function(f){var g=this.__cS[f];return !!(g&&g.failed);}
,isLoading:function(h){var j=this.__cS[h];return !!(j&&j.loading);}
,getFormat:function(k){var m=this.__cS[k];if(!m||!m.format){var o=this.__kd.exec(k);if(o!=null){var p=(m&&qx.lang.Type.isNumber(m.width)?m.width:this.__kb.width);var n=(m&&qx.lang.Type.isNumber(m.height)?m.height:this.__kb.height);m={loaded:true,format:o[1],width:p,height:n};}
;}
;return m?m.format:null;}
,getSize:function(q){var r=this.__cS[q];return r?{width:r.width,height:r.height}:this.__kb;}
,getWidth:function(s){var t=this.__cS[s];return t?t.width:null;}
,getHeight:function(u){var v=this.__cS[u];return v?v.height:null;}
,load:function(w,x,y){var z=this.__cS[w];if(!z){z=this.__cS[w]={};}
;if(x&&!y){y=window;}
;if(z.loaded||z.loading||z.failed){if(x){if(z.loading){z.callbacks.push(x,y);}
else {x.call(y,w,z);}
;}
;}
else {z.loading=true;z.callbacks=[];if(x){z.callbacks.push(x,y);}
;var B=new Image();var A=qx.lang.Function.listener(this.__ke,this,B,w);B.onload=A;B.onerror=A;B.src=w;z.element=B;}
;}
,abort:function(C){var D=this.__cS[C];if(D&&!D.loaded){D.aborted=true;var F=D.callbacks;var E=D.element;E.onload=E.onerror=null;delete D.callbacks;delete D.element;delete D.loading;for(var i=0,l=F.length;i<l;i+=2){F[i].call(F[i+1],C,D);}
;}
;this.__cS[C]=null;}
,__ke:qx.event.GlobalError.observeMethod(function(event,G,H){var L=this.__cS[H];var J=function(M){return (M&&M.height!==0);}
;if(event.type===c&&J(G)){L.loaded=true;L.width=this.__kf(G);L.height=this.__kg(G);var K=this.__kc.exec(H);if(K!=null){L.format=K[1];}
;}
else {L.failed=true;}
;G.onload=G.onerror=null;var I=L.callbacks;delete L.loading;delete L.callbacks;delete L.element;for(var i=0,l=I.length;i<l;i+=2){I[i].call(I[i+1],H,L);}
;}
),__kf:function(N){return qx.core.Environment.get(a)?N.naturalWidth:N.width;}
,__kg:function(O){return qx.core.Environment.get(a)?O.naturalHeight:O.height;}
,dispose:function(){this.__cS={};}
}});}
)();
(function(){var o="html.video.h264",n="html.element.contains",m='video/ogg; codecs="theora, vorbis"',l="html.console",k="html.xul",j="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",i="html.video.ogg",h="http://www.w3.org/TR/SVG11/feature#BasicStructure",g="html.storage.local",f="qx.bom.client.Html",bu="getSelection",bt='audio',bs='video/mp4; codecs="avc1.42E01E, mp4a.40.2"',br="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",bq="html.audio",bp="url(#default#VML)",bo="audio/mpeg",bn="org.w3c.dom.svg",bm="html.classlist",bl="html.svg",w="html.video",x="html.geolocation",t="DOMTokenList",u="html.storage.session",r="1.1",s="html.history.state",p="html.image.naturaldimensions",q="html.audio.aif",E="audio/x-wav",F='<v:shape id="vml_flag1" adj="1" />',Q="html.canvas",N="audio/ogg",Y="html.storage.userdata",T="html.element.compareDocumentPosition",bh="audio/x-aiff",be="html.audio.au",J="img",bk="html.selection",bj="selection",bi="html.xpath",I="qxtest",L='video',M="span",P="html.element.textcontent",R="html.audio.mp3",U="html.vml",bb="html.audio.ogg",bg="none",y="label",z='video/webm; codecs="vp8, vorbis"',K="html.dataurl",X="html.webworker",W="html.dataset",V="1.0",bd="html.audio.wav",bc="html.filereader",S="audio/basic",ba="#default#userdata",b="html.video.webm",bf="display",A="function",B="div",O="head",c="object",d="number",H="video",C="audio",D="undefined",G="";qx.Bootstrap.define(f,{statics:{getWebWorker:function(){return window.Worker!=null;}
,getFileReader:function(){return window.FileReader!=null;}
,getGeoLocation:function(){return navigator.geolocation!=null;}
,getAudio:function(){return !!document.createElement(bt).canPlayType;}
,getAudioOgg:function(){if(!qx.bom.client.Html.getAudio()){return G;}
;var a=document.createElement(C);return a.canPlayType(N);}
,getAudioMp3:function(){if(!qx.bom.client.Html.getAudio()){return G;}
;var a=document.createElement(C);return a.canPlayType(bo);}
,getAudioWav:function(){if(!qx.bom.client.Html.getAudio()){return G;}
;var a=document.createElement(C);return a.canPlayType(E);}
,getAudioAu:function(){if(!qx.bom.client.Html.getAudio()){return G;}
;var a=document.createElement(C);return a.canPlayType(S);}
,getAudioAif:function(){if(!qx.bom.client.Html.getAudio()){return G;}
;var a=document.createElement(C);return a.canPlayType(bh);}
,getVideo:function(){return !!document.createElement(L).canPlayType;}
,getVideoOgg:function(){if(!qx.bom.client.Html.getVideo()){return G;}
;var v=document.createElement(H);return v.canPlayType(m);}
,getVideoH264:function(){if(!qx.bom.client.Html.getVideo()){return G;}
;var v=document.createElement(H);return v.canPlayType(bs);}
,getVideoWebm:function(){if(!qx.bom.client.Html.getVideo()){return G;}
;var v=document.createElement(H);return v.canPlayType(z);}
,getLocalStorage:function(){try{return window.localStorage!=null;}
catch(bv){return false;}
;}
,getSessionStorage:function(){try{return window.sessionStorage!=null;}
catch(bw){return false;}
;}
,getUserDataStorage:function(){var bx=document.createElement(B);bx.style[bf]=bg;document.getElementsByTagName(O)[0].appendChild(bx);var by=false;try{bx.addBehavior(ba);bx.load(I);by=true;}
catch(e){}
;document.getElementsByTagName(O)[0].removeChild(bx);return by;}
,getClassList:function(){return !!(document.documentElement.classList&&qx.Bootstrap.getClass(document.documentElement.classList)===t);}
,getXPath:function(){return !!document.evaluate;}
,getXul:function(){try{document.createElementNS(j,y);return true;}
catch(e){return false;}
;}
,getSvg:function(){return document.implementation&&document.implementation.hasFeature&&(document.implementation.hasFeature(bn,V)||document.implementation.hasFeature(h,r));}
,getVml:function(){var bz=document.createElement(B);document.body.appendChild(bz);bz.innerHTML=F;bz.firstChild.style.behavior=bp;var bA=typeof bz.firstChild.adj==c;document.body.removeChild(bz);return bA;}
,getCanvas:function(){return !!window.CanvasRenderingContext2D;}
,getDataUrl:function(bB){var bC=new Image();bC.onload=bC.onerror=function(){window.setTimeout(function(){bB.call(null,(bC.width==1&&bC.height==1));}
,0);}
;bC.src=br;}
,getDataset:function(){return !!document.documentElement.dataset;}
,getContains:function(){return (typeof document.documentElement.contains!==D);}
,getCompareDocumentPosition:function(){return (typeof document.documentElement.compareDocumentPosition===A);}
,getTextContent:function(){var bD=document.createElement(M);return (typeof bD.textContent!==D);}
,getConsole:function(){return typeof window.console!==D;}
,getNaturalDimensions:function(){var bE=document.createElement(J);return typeof bE.naturalHeight===d&&typeof bE.naturalWidth===d;}
,getHistoryState:function(){return (typeof window.onpopstate!==D&&typeof window.history.replaceState!==D&&typeof window.history.pushState!==D);}
,getSelection:function(){if(typeof window.getSelection===A){return bu;}
;if(typeof document.selection===c){return bj;}
;return null;}
},defer:function(bF){qx.core.Environment.add(X,bF.getWebWorker);qx.core.Environment.add(bc,bF.getFileReader);qx.core.Environment.add(x,bF.getGeoLocation);qx.core.Environment.add(bq,bF.getAudio);qx.core.Environment.add(bb,bF.getAudioOgg);qx.core.Environment.add(R,bF.getAudioMp3);qx.core.Environment.add(bd,bF.getAudioWav);qx.core.Environment.add(be,bF.getAudioAu);qx.core.Environment.add(q,bF.getAudioAif);qx.core.Environment.add(w,bF.getVideo);qx.core.Environment.add(i,bF.getVideoOgg);qx.core.Environment.add(o,bF.getVideoH264);qx.core.Environment.add(b,bF.getVideoWebm);qx.core.Environment.add(g,bF.getLocalStorage);qx.core.Environment.add(u,bF.getSessionStorage);qx.core.Environment.add(Y,bF.getUserDataStorage);qx.core.Environment.add(bm,bF.getClassList);qx.core.Environment.add(bi,bF.getXPath);qx.core.Environment.add(k,bF.getXul);qx.core.Environment.add(Q,bF.getCanvas);qx.core.Environment.add(bl,bF.getSvg);qx.core.Environment.add(U,bF.getVml);qx.core.Environment.add(W,bF.getDataset);qx.core.Environment.addAsync(K,bF.getDataUrl);qx.core.Environment.add(n,bF.getContains);qx.core.Environment.add(T,bF.getCompareDocumentPosition);qx.core.Environment.add(P,bF.getTextContent);qx.core.Environment.add(l,bF.getConsole);qx.core.Environment.add(p,bF.getNaturalDimensions);qx.core.Environment.add(s,bF.getHistoryState);qx.core.Environment.add(bk,bF.getSelection);}
});}
)();
(function(){var u="')",t="gecko",s="background-image:url(",r=");",q="",p=")",o="background-repeat:",n="engine.version",m="data:",l=" ",e="qx.bom.element.Background",k="url(",h="background-position:",c="base64",b="url('",g="engine.name",f="0",i="px",a=";",j="'",d="number";qx.Class.define(e,{statics:{__kh:[s,null,r,h,null,a,o,null,a],__ki:{backgroundImage:null,backgroundPosition:null,backgroundRepeat:null},__kj:function(v,top){var w=qx.core.Environment.get(g);var x=qx.core.Environment.get(n);if(w==t&&x<1.9&&v==top&&typeof v==d){top+=0.01;}
;if(v){var z=(typeof v==d)?v+i:v;}
else {z=f;}
;if(top){var y=(typeof top==d)?top+i:top;}
else {y=f;}
;return z+l+y;}
,__kk:function(A){var String=qx.lang.String;var B=A.substr(0,50);return String.startsWith(B,m)&&String.contains(B,c);}
,compile:function(C,D,E,top){var F=this.__kj(E,top);var G=qx.util.ResourceManager.getInstance().toUri(C);if(this.__kk(G)){G=j+G+j;}
;var H=this.__kh;H[1]=G;H[4]=F;H[7]=D;return H.join(q);}
,getStyles:function(I,J,K,top){if(!I){return this.__ki;}
;var L=this.__kj(K,top);var N=qx.util.ResourceManager.getInstance().toUri(I);var O;if(this.__kk(N)){O=b+N+u;}
else {O=k+N+p;}
;var M={backgroundPosition:L,backgroundImage:O};if(J!=null){M.backgroundRepeat=J;}
;return M;}
,set:function(P,Q,R,S,top){var T=this.getStyles(Q,R,S,top);for(var U in T){P.style[U]=T[U];}
;}
}});}
)();
(function(){var j="qx.theme",i="border-top",h="border-left",g="border-right",f="qx.ui.decoration.MSingleBorder",e="border-bottom",d="absolute",c="widthTop",b="styleRight",a="styleBottom",F="qx.debug",E="widthBottom",D="widthLeft",C="styleTop",B="colorBottom",A="styleLeft",z="widthRight",y="colorLeft",x="colorRight",w="colorTop",q="shorthand",r="double",o="px ",p="dotted",m="_applyWidth",n="Color",k="",l="dashed",s="Number",t=" ",v="solid",u="_applyStyle";qx.Mixin.define(f,{properties:{widthTop:{check:s,init:0,apply:m},widthRight:{check:s,init:0,apply:m},widthBottom:{check:s,init:0,apply:m},widthLeft:{check:s,init:0,apply:m},styleTop:{nullable:true,check:[v,p,l,r],init:v,apply:u},styleRight:{nullable:true,check:[v,p,l,r],init:v,apply:u},styleBottom:{nullable:true,check:[v,p,l,r],init:v,apply:u},styleLeft:{nullable:true,check:[v,p,l,r],init:v,apply:u},colorTop:{nullable:true,check:n,apply:u},colorRight:{nullable:true,check:n,apply:u},colorBottom:{nullable:true,check:n,apply:u},colorLeft:{nullable:true,check:n,apply:u},left:{group:[D,A,y]},right:{group:[z,b,x]},top:{group:[c,C,w]},bottom:{group:[E,a,B]},width:{group:[c,z,E,D],mode:q},style:{group:[C,b,a,A],mode:q},color:{group:[w,x,B,y],mode:q}},members:{_styleBorder:function(G){if(qx.core.Environment.get(j)){var I=qx.theme.manager.Color.getInstance();var M=I.resolve(this.getColorTop());var J=I.resolve(this.getColorRight());var H=I.resolve(this.getColorBottom());var L=I.resolve(this.getColorLeft());}
else {var M=this.getColorTop();var J=this.getColorRight();var H=this.getColorBottom();var L=this.getColorLeft();}
;var K=this.getWidthTop();if(K>0){G[i]=K+o+this.getStyleTop()+t+(M||k);}
;var K=this.getWidthRight();if(K>0){G[g]=K+o+this.getStyleRight()+t+(J||k);}
;var K=this.getWidthBottom();if(K>0){G[e]=K+o+this.getStyleBottom()+t+(H||k);}
;var K=this.getWidthLeft();if(K>0){G[h]=K+o+this.getStyleLeft()+t+(L||k);}
;if(qx.core.Environment.get(F)){if(G.length===0){throw new Error("Invalid Single decorator (zero border width). Use qx.ui.decorator.Background instead!");}
;}
;G.position=d;G.top=0;G.left=0;}
,_resizeBorder:function(N,O,P){var Q=this.getInsets();O-=Q.left+Q.right;P-=Q.top+Q.bottom;if(O<0){O=0;}
;if(P<0){P=0;}
;return {left:Q.left-this.getWidthLeft(),top:Q.top-this.getWidthTop(),width:O,height:P};}
,_getDefaultInsetsForBorder:function(){return {top:this.getWidthTop(),right:this.getWidthRight(),bottom:this.getWidthBottom(),left:this.getWidthLeft()};}
,_applyWidth:function(){this._applyStyle();this._resetInsets();}
,_applyStyle:function(){if(qx.core.Environment.get(F)){if(this._markup){throw new Error("This decorator is already in-use. Modification is not possible anymore!");}
;}
;}
}});}
)();
(function(){var a="qx.ui.decoration.IDecorator";qx.Interface.define(a,{members:{getMarkup:function(){}
,resize:function(b,c,d){}
,tint:function(e,f){}
,getInsets:function(){}
}});}
)();
(function(){var j="abstract",i="insetRight",h="insetTop",g="qx.debug",f="insetBottom",e="qx.ui.decoration.Abstract",d="shorthand",c="insetLeft",b="Number",a="_applyInsets";qx.Class.define(e,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],type:j,properties:{insetLeft:{check:b,nullable:true,apply:a},insetRight:{check:b,nullable:true,apply:a},insetBottom:{check:b,nullable:true,apply:a},insetTop:{check:b,nullable:true,apply:a},insets:{group:[h,i,f,c],mode:d}},members:{__do:null,_getDefaultInsets:function(){throw new Error("Abstract method called.");}
,_isInitialized:function(){throw new Error("Abstract method called.");}
,_resetInsets:function(){this.__do=null;}
,getInsets:function(){if(this.__do){return this.__do;}
;var k=this._getDefaultInsets();return this.__do={left:this.getInsetLeft()==null?k.left:this.getInsetLeft(),right:this.getInsetRight()==null?k.right:this.getInsetRight(),bottom:this.getInsetBottom()==null?k.bottom:this.getInsetBottom(),top:this.getInsetTop()==null?k.top:this.getInsetTop()};}
,_applyInsets:function(){if(qx.core.Environment.get(g)){if(this._isInitialized()){throw new Error("This decorator is already in-use. Modification is not possible anymore!");}
;}
;this.__do=null;}
},destruct:function(){this.__do=null;}
});}
)();
(function(){var b="qx.ui.decoration.Single",a="px";qx.Class.define(b,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage,qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MSingleBorder],construct:function(c,d,e){qx.ui.decoration.Abstract.call(this);if(c!=null){this.setWidth(c);}
;if(d!=null){this.setStyle(d);}
;if(e!=null){this.setColor(e);}
;}
,members:{_markup:null,getMarkup:function(){if(this._markup){return this._markup;}
;var f={};this._styleBorder(f);var g=this._generateBackgroundMarkup(f);return this._markup=g;}
,resize:function(h,i,j){var k=this._resizeBorder(h,i,j);h.style.width=k.width+a;h.style.height=k.height+a;h.style.left=k.left+a;h.style.top=k.top+a;}
,tint:function(l,m){this._tintBackgroundColor(l,m,l.style);}
,_isInitialized:function(){return !!this._markup;}
,_getDefaultInsets:function(){return this._getDefaultInsetsForBorder();}
},destruct:function(){this._markup=null;}
});}
)();
(function(){var j="radiusTopRight",i="radiusTopLeft",h="-webkit-border-bottom-left-radius",g="-webkit-background-clip",f="radiusBottomRight",e="-webkit-border-bottom-right-radius",d="background-clip",c="border-top-left-radius",b="qx.debug",a="border-top-right-radius",y="border-bottom-left-radius",x="radiusBottomLeft",w="-webkit-border-top-left-radius",v="shorthand",u="-moz-border-radius-bottomright",t="border-bottom-right-radius",s="qx.ui.decoration.MBorderRadius",r="-moz-border-radius-topright",q="-webkit-border-top-right-radius",p="-moz-border-radius-topleft",n="-moz-border-radius-bottomleft",o="padding-box",l="Integer",m="_applyBorderRadius",k="px";qx.Mixin.define(s,{properties:{radiusTopLeft:{nullable:true,check:l,apply:m},radiusTopRight:{nullable:true,check:l,apply:m},radiusBottomLeft:{nullable:true,check:l,apply:m},radiusBottomRight:{nullable:true,check:l,apply:m},radius:{group:[i,j,f,x],mode:v}},members:{_styleBorderRadius:function(z){z[g]=o;z[d]=o;var A=this.getRadiusTopLeft();if(A>0){z[p]=A+k;z[w]=A+k;z[c]=A+k;}
;A=this.getRadiusTopRight();if(A>0){z[r]=A+k;z[q]=A+k;z[a]=A+k;}
;A=this.getRadiusBottomLeft();if(A>0){z[n]=A+k;z[h]=A+k;z[y]=A+k;}
;A=this.getRadiusBottomRight();if(A>0){z[u]=A+k;z[e]=A+k;z[t]=A+k;}
;}
,_applyBorderRadius:function(){if(qx.core.Environment.get(b)){if(this._isInitialized()){throw new Error("This decorator is already in-use. Modification is not possible anymore!");}
;}
;}
}});}
)();
(function(){var p="box-shadow",o="shadowHorizontalLength",n="Boolean",m="",l="-webkit-box-shadow",k="qx.debug",j="-moz-box-shadow",i="qx.theme",h="shadowVerticalLength",g="inset ",c="shorthand",f="qx.ui.decoration.MBoxShadow",e="Color",b="px ",a="Integer",d="_applyBoxShadow";qx.Mixin.define(f,{properties:{shadowHorizontalLength:{nullable:true,check:a,apply:d},shadowVerticalLength:{nullable:true,check:a,apply:d},shadowBlurRadius:{nullable:true,check:a,apply:d},shadowSpreadRadius:{nullable:true,check:a,apply:d},shadowColor:{nullable:true,check:e,apply:d},inset:{init:false,check:n,apply:d},shadowLength:{group:[o,h],mode:c}},members:{_styleBoxShadow:function(q){if(qx.core.Environment.get(i)){var r=qx.theme.manager.Color.getInstance();var u=r.resolve(this.getShadowColor());}
else {var u=this.getShadowColor();}
;if(u!=null){var x=this.getShadowVerticalLength()||0;var s=this.getShadowHorizontalLength()||0;var blur=this.getShadowBlurRadius()||0;var w=this.getShadowSpreadRadius()||0;var v=this.getInset()?g:m;var t=v+s+b+x+b+blur+b+w+b+u;q[j]=t;q[l]=t;q[p]=t;}
;}
,_applyBoxShadow:function(){if(qx.core.Environment.get(k)){if(this._isInitialized()){throw new Error("This decorator is already in-use. Modification is not possible anymore!");}
;}
;}
}});}
)();
(function(){var a="qx.ui.decoration.Uniform";qx.Class.define(a,{extend:qx.ui.decoration.Single,construct:function(b,c,d){qx.ui.decoration.Single.call(this);if(b!=null){this.setWidth(b);}
;if(c!=null){this.setStyle(c);}
;if(d!=null){this.setColor(d);}
;}
});}
)();
(function(){var j="</div>",i="),to(",h="from(",g="background-image",f="background",e="<div style='width: 100%; height: 100%; position: absolute;",d="StartColorStr='#FF",c="', ",b="'></div>",a="-webkit-gradient(linear,",T="startColorPosition",S="qx.debug",R="deg, ",Q="css.gradient.legacywebkit",P="EndColorStr='#FF",O="startColor",N="qx.theme",M="MBoxShadow",L="<div style=\"position: absolute; width: 100%; height: 100%; ",K="(GradientType=",q="qx.ui.decoration.MLinearBackgroundGradient",r="(",o="endColorPosition",p="';)\">",m="endColor",n=", ",k="overflow",l="hidden",s="linear-gradient",t="filter:progid:DXImageTransform.Microsoft.Gradient",A=" 0",y="px",E="0",C="shorthand",G="Color",F="vertical",v="css.gradient.filter",J="Number",I="%",H=")",u="",w="css.gradient.linear",x=",",z=" ",B="horizontal",D="_applyLinearBackgroundGradient";qx.Mixin.define(q,{properties:{startColor:{check:G,nullable:true,apply:D},endColor:{check:G,nullable:true,apply:D},orientation:{check:[B,F],init:F,apply:D},startColorPosition:{check:J,init:0,apply:D},endColorPosition:{check:J,init:100,apply:D},colorPositionUnit:{check:[y,I],init:I,apply:D},gradientStart:{group:[O,T],mode:C},gradientEnd:{group:[m,o],mode:C}},members:{_styleLinearBackgroundGradient:function(U){var bb=this.__wk();var bf=bb.start;var Y=bb.end;var bg=this.getColorPositionUnit();if(qx.core.Environment.get(Q)){bg=bg===y?u:bg;if(this.getOrientation()==B){var be=this.getStartColorPosition()+bg+A+bg;var bc=this.getEndColorPosition()+bg+A+bg;}
else {var be=E+bg+z+this.getStartColorPosition()+bg;var bc=E+bg+z+this.getEndColorPosition()+bg;}
;var W=h+bf+i+Y+H;var X=a+be+x+bc+x+W+H;U[f]=X;}
else if(qx.core.Environment.get(v)&&!qx.core.Environment.get(w)){U[k]=l;}
else {var bh=this.getOrientation()==B?0:270;var ba=bf+z+this.getStartColorPosition()+bg;var V=Y+z+this.getEndColorPosition()+bg;var bd=qx.core.Environment.get(w);if(bd===s){bh=this.getOrientation()==B?bh+90:bh-90;}
;U[g]=bd+r+bh+R+ba+x+V+H;}
;}
,__wk:function(){if(qx.core.Environment.get(N)){var bi=qx.theme.manager.Color.getInstance();var bk=bi.resolve(this.getStartColor());var bj=bi.resolve(this.getEndColor());}
else {var bk=this.getStartColor();var bj=this.getEndColor();}
;return {start:bk,end:bj};}
,_getContent:function(){if(qx.core.Environment.get(v)&&!qx.core.Environment.get(w)){var bn=this.__wk();var bq=this.getOrientation()==B?1:0;var bp=bn.start;var bm=bn.end;if(!qx.util.ColorUtil.isHex6String(bp)){bp=qx.util.ColorUtil.stringToRgb(bp);bp=qx.util.ColorUtil.rgbToHexString(bp);}
;if(!qx.util.ColorUtil.isHex6String(bm)){bm=qx.util.ColorUtil.stringToRgb(bm);bm=qx.util.ColorUtil.rgbToHexString(bm);}
;bp=bp.substring(1,bp.length);bm=bm.substring(1,bm.length);var bo=u;if(this.classname.indexOf(M)!=-1){var bl={};this._styleBoxShadow(bl);bo=e+qx.bom.element.Style.compile(bl)+b;}
;return L+t+K+bq+n+d+bp+c+P+bm+p+bo+j;}
;return u;}
,_resizeLinearBackgroundGradient:function(br,bs,bt){var bu=this.getInsets();bs-=bu.left+bu.right;bt-=bu.top+bu.bottom;return {left:bu.left,top:bu.top,width:bs,height:bt};}
,_applyLinearBackgroundGradient:function(){if(qx.core.Environment.get(S)){if(this._isInitialized()){throw new Error("This decorator is already in-use. Modification is not possible anymore!");}
;}
;}
}});}
)();
(function(){var j="innerWidthRight",i="innerColorBottom",h="engine.version",g="innerWidthTop",f="innerColorRight",e="innerColorTop",d="innerColorLeft",c="browser.documentmode",b="relative",a="",G="qx.ui.decoration.MDoubleBorder",F="left",E="box-shadow",D="top",C="innerWidthBottom",B="innerWidthLeft",A="position",z="absolute",y="qx.theme",x="qx.debug",q="shorthand",r="line-height",o="engine.name",p="mshtml",m="border-top",n="border-left",k="Color",l="border-bottom",s="Number",t="border-right",v='',u="px ",w=" ";qx.Mixin.define(G,{include:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundImage],construct:function(){this._getDefaultInsetsForBorder=this.__wp;this._resizeBorder=this.__wo;this._styleBorder=this.__wm;this._generateMarkup=this.__wn;}
,properties:{innerWidthTop:{check:s,init:0},innerWidthRight:{check:s,init:0},innerWidthBottom:{check:s,init:0},innerWidthLeft:{check:s,init:0},innerWidth:{group:[g,j,C,B],mode:q},innerColorTop:{nullable:true,check:k},innerColorRight:{nullable:true,check:k},innerColorBottom:{nullable:true,check:k},innerColorLeft:{nullable:true,check:k},innerColor:{group:[e,f,i,d],mode:q}},members:{__wl:null,__wm:function(H){var N,K,I,M;if(qx.core.Environment.get(y)){var J=qx.theme.manager.Color.getInstance();N=J.resolve(this.getColorTop());K=J.resolve(this.getColorRight());I=J.resolve(this.getColorBottom());M=J.resolve(this.getColorLeft());}
else {N=this.getColorTop();K=this.getColorRight();I=this.getColorBottom();M=this.getColorLeft();}
;var L=this.getWidthTop();if(L>0){H[m]=L+u+this.getStyleTop()+w+N;}
;L=this.getWidthRight();if(L>0){H[t]=L+u+this.getStyleRight()+w+K;}
;L=this.getWidthBottom();if(L>0){H[l]=L+u+this.getStyleBottom()+w+I;}
;L=this.getWidthLeft();if(L>0){H[n]=L+u+this.getStyleLeft()+w+M;}
;H[r]=0;if((qx.core.Environment.get(o)==p&&parseFloat(qx.core.Environment.get(h))<8)||(qx.core.Environment.get(o)==p&&qx.core.Environment.get(c)<8)){H[r]=v;}
;H[A]=z;H[D]=0;H[F]=0;if(qx.core.Environment.get(x)){if(!H[m]&&!H[t]&&!H[l]&&!H[n]){throw new Error("Invalid Double decorator (zero outer border width). Use qx.ui.decoration.Single instead!");}
;}
;}
,__wn:function(O){var W,S,Q,V;if(qx.core.Environment.get(y)){var R=qx.theme.manager.Color.getInstance();W=R.resolve(this.getInnerColorTop());S=R.resolve(this.getInnerColorRight());Q=R.resolve(this.getInnerColorBottom());V=R.resolve(this.getInnerColorLeft());}
else {W=this.getInnerColorTop();S=this.getInnerColorRight();Q=this.getInnerColorBottom();V=this.getInnerColorLeft();}
;var X=qx.lang.Object.clone(O);for(var P in X){if(P.indexOf(E)!=-1){delete X[P];}
;}
;X.position=b;var U=this.getInnerWidthTop();if(U>0){X[m]=U+u+this.getStyleTop()+w+W;}
;U=this.getInnerWidthRight();if(U>0){X[t]=U+u+this.getStyleRight()+w+S;}
;U=this.getInnerWidthBottom();if(U>0){X[l]=U+u+this.getStyleBottom()+w+Q;}
;U=this.getInnerWidthLeft();if(U>0){X[n]=U+u+this.getStyleLeft()+w+V;}
;if(qx.core.Environment.get(x)){if(X[m]==v&&X[t]==v&&X[l]==v&&X[n]==v){throw new Error("Invalid Double decorator (zero inner border width). Use qx.ui.decoration.Single instead!");}
;}
;var T=this._generateBackgroundMarkup(X,this._getContent?this._getContent():a);return this.__wl=this._generateBackgroundMarkup(O,T);}
,__wo:function(Y,ba,bb){var bc=this.getInsets();ba-=bc.left+bc.right;bb-=bc.top+bc.bottom;var bd=bc.left-this.getWidthLeft()-this.getInnerWidthLeft();var top=bc.top-this.getWidthTop()-this.getInnerWidthTop();return {left:bd,top:top,width:ba,height:bb,elementToApplyDimensions:Y.firstChild};}
,__wp:function(){return {top:this.getWidthTop()+this.getInnerWidthTop(),right:this.getWidthRight()+this.getInnerWidthRight(),bottom:this.getWidthBottom()+this.getInnerWidthBottom(),left:this.getWidthLeft()+this.getInnerWidthLeft()};}
}});}
)();
(function(){var j="button-box-dark-pressed",i="table-header",h="button-box-invalid",g="menubar-button-hovered",f="button-box-dark",e="#999999",d="qx/decoration/Simple",c="dotted",b="tooltip-text",a="table-focus-indicator",Y="button-box-pressed-invalid",X="dark-blue",W="scrollbar-dark",V="qx.theme.simple.Decoration",U="table-header-cell",T="button",S="scroll-knob-pressed",R="border-lead",Q="#FFF",P="scrollbar-bright",q="border-light-shadow",r="white-box-border",o="window",p="checkbox",m="button-box-hovered-focused",n="window-border",k="radiobutton",l="scroll-knob",u="button-box-bright",v="window-border-inner",D="white",B="button-box-bright-pressed",H="button-box-pressed-hovered-focused",F="tabview-page-button-top",L="border-separator",J="shadow",x="button-box-focused",O="border-main",N="button-box-pressed-focused",M="background",w="border-light",z="button-border-hovered",A="gray",C="invalid",E="solid",G="button-border",I="button-box-hovered",K="button-box-pressed-hovered",s="background-selected",t="button-box-pressed",y="button-box";qx.Theme.define(V,{aliases:{decoration:d},decorations:{"border-blue":{decorator:qx.ui.decoration.Uniform,style:{width:4,color:s}},"main":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:O}},"main-dark":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:G}},"popup":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBoxShadow,qx.ui.decoration.MBackgroundColor],style:{width:1,color:n,shadowLength:2,shadowBlurRadius:5,shadowColor:J}},"dragover":{decorator:qx.ui.decoration.Single,style:{bottom:[2,E,X]}},"button-box":{decorator:[qx.ui.decoration.MLinearBackgroundGradient,qx.ui.decoration.MBorderRadius,qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundColor],style:{radius:3,width:1,color:G,gradientStart:[u,40],gradientEnd:[f,70],backgroundColor:u}},"button-box-pressed":{include:y,style:{gradientStart:[B,40],gradientEnd:[j,70],backgroundColor:B}},"button-box-pressed-hovered":{include:t,style:{color:z}},"button-box-hovered":{include:y,style:{color:z}},"button-box-invalid":{include:y,style:{color:C}},"button-box-pressed-invalid":{include:t,style:{color:C}},"button-box-hovered-invalid":{include:h},"button-box-pressed-hovered-invalid":{include:Y},"button-box-focused":{include:y,style:{color:s}},"button-box-pressed-focused":{include:t,style:{color:s}},"button-box-hovered-focused":{include:x},"button-box-pressed-hovered-focused":{include:N},"button-box-right":{include:y,style:{radius:[0,3,3,0]}},"button-box-pressed-right":{include:t,style:{radius:[0,3,3,0]}},"button-box-pressed-hovered-right":{include:K,style:{radius:[0,3,3,0]}},"button-box-hovered-right":{include:I,style:{radius:[0,3,3,0]}},"button-box-focused-right":{include:x,style:{radius:[0,3,3,0]}},"button-box-hovered-focused-right":{include:m,style:{radius:[0,3,3,0]}},"button-box-pressed-focused-right":{include:N,style:{radius:[0,3,3,0]}},"button-box-pressed-hovered-focused-right":{include:H,style:{radius:[0,3,3,0]}},"button-box-right-borderless":{include:y,style:{radius:[0,3,3,0],width:[1,1,1,0]}},"button-box-pressed-right-borderless":{include:t,style:{radius:[0,3,3,0],width:[1,1,1,0]}},"button-box-pressed-hovered-right-borderless":{include:K,style:{radius:[0,3,3,0],width:[1,1,1,0]}},"button-box-hovered-right-borderless":{include:I,style:{radius:[0,3,3,0],width:[1,1,1,0]}},"button-box-top-right":{include:y,style:{radius:[0,3,0,0],width:[1,1,1,0]}},"button-box-pressed-top-right":{include:t,style:{radius:[0,3,0,0],width:[1,1,1,0]}},"button-box-pressed-hovered-top-right":{include:K,style:{radius:[0,3,0,0],width:[1,1,1,0]}},"button-box-hovered-top-right":{include:I,style:{radius:[0,3,0,0],width:[1,1,1,0]}},"button-box-bottom-right":{include:y,style:{radius:[0,0,3,0],width:[0,1,1,0]}},"button-box-pressed-bottom-right":{include:t,style:{radius:[0,0,3,0],width:[0,1,1,0]}},"button-box-pressed-hovered-bottom-right":{include:K,style:{radius:[0,0,3,0],width:[0,1,1,0]}},"button-box-hovered-bottom-right":{include:I,style:{radius:[0,0,3,0],width:[0,1,1,0]}},"button-box-bottom-left":{include:y,style:{radius:[0,0,0,3],width:[0,0,1,1]}},"button-box-pressed-bottom-left":{include:t,style:{radius:[0,0,0,3],width:[0,0,1,1]}},"button-box-pressed-hovered-bottom-left":{include:K,style:{radius:[0,0,0,3],width:[0,0,1,1]}},"button-box-hovered-bottom-left":{include:I,style:{radius:[0,0,0,3],width:[0,0,1,1]}},"button-box-top-left":{include:y,style:{radius:[3,0,0,0],width:[1,0,0,1]}},"button-box-pressed-top-left":{include:t,style:{radius:[3,0,0,0],width:[1,0,0,1]}},"button-box-pressed-hovered-top-left":{include:K,style:{radius:[3,0,0,0],width:[1,0,0,1]}},"button-box-hovered-top-left":{include:I,style:{radius:[3,0,0,0],width:[1,0,0,1]}},"button-box-middle":{include:y,style:{radius:0,width:[1,0,1,1]}},"button-box-pressed-middle":{include:t,style:{radius:0,width:[1,0,1,1]}},"button-box-pressed-hovered-middle":{include:K,style:{radius:0,width:[1,0,1,1]}},"button-box-hovered-middle":{include:I,style:{radius:0,width:[1,0,1,1]}},"button-box-left":{include:y,style:{radius:[3,0,0,3],width:[1,0,1,1]}},"button-box-pressed-left":{include:t,style:{radius:[3,0,0,3],width:[1,0,1,1]}},"button-box-pressed-hovered-left":{include:K,style:{radius:[3,0,0,3],width:[1,0,1,1]}},"button-box-hovered-left":{include:I,style:{radius:[3,0,0,3],width:[1,0,1,1]}},"button-box-focused-left":{include:x,style:{radius:[3,0,0,3],width:[1,0,1,1]}},"button-box-hovered-focused-left":{include:m,style:{radius:[3,0,0,3],width:[1,0,1,1]}},"button-box-pressed-hovered-focused-left":{include:H,style:{radius:[3,0,0,3],width:[1,0,1,1]}},"button-box-pressed-focused-left":{include:N,style:{radius:[3,0,0,3],width:[1,0,1,1]}},"separator-horizontal":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:L}},"separator-vertical":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:L}},"scroll-knob":{decorator:[qx.ui.decoration.MBorderRadius,qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundColor],style:{radius:3,width:1,color:G,backgroundColor:P}},"scroll-knob-pressed":{include:l,style:{backgroundColor:W}},"scroll-knob-hovered":{include:l,style:{color:z}},"scroll-knob-pressed-hovered":{include:S,style:{color:z}},"button-hover":{decorator:[qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MBorderRadius],style:{backgroundColor:T,radius:3}},"window":{decorator:[qx.ui.decoration.MDoubleBorder,qx.ui.decoration.MBoxShadow,qx.ui.decoration.MBackgroundColor],style:{width:1,color:n,innerWidth:4,innerColor:v,shadowLength:1,shadowBlurRadius:3,shadowColor:J,backgroundColor:M}},"window-active":{include:o,style:{shadowLength:2,shadowBlurRadius:5}},"window-caption":{decorator:qx.ui.decoration.Single,style:{width:[0,0,2,0],color:v}},"white-box":{decorator:[qx.ui.decoration.MBorderRadius,qx.ui.decoration.MBoxShadow,qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundColor],style:{width:1,color:r,shadowBlurRadius:2,shadowColor:e,radius:7,backgroundColor:D}},"inset":{decorator:qx.ui.decoration.Single,style:{width:1,color:[q,w,w,w]}},"focused-inset":{decorator:qx.ui.decoration.Uniform,style:{width:2,color:s}},"border-invalid":{decorator:qx.ui.decoration.Uniform,style:{width:2,color:C}},"lead-item":{decorator:qx.ui.decoration.Uniform,style:{width:1,style:c,color:R}},"tooltip":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MBoxShadow],style:{width:1,color:b,shadowLength:1,shadowBlurRadius:2,shadowColor:J}},"tooltip-error":{decorator:[qx.ui.decoration.MBorderRadius,qx.ui.decoration.MBackgroundColor],style:{radius:5,backgroundColor:C}},"toolbar-separator":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:G}},"menu-separator":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:s}},"menubar-button-hovered":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBorderRadius,qx.ui.decoration.MBackgroundColor],style:{width:1,color:O,radius:3,backgroundColor:D}},"menubar-button-pressed":{include:g,style:{radius:[3,3,0,0],width:[1,1,0,1]}},"datechooser-date-pane":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:A,style:E}},"datechooser-weekday":{decorator:qx.ui.decoration.Single,style:{widthBottom:1,colorBottom:A,style:E}},"datechooser-week":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:A,style:E}},"datechooser-week-header":{decorator:qx.ui.decoration.Single,style:{widthBottom:1,colorBottom:A,widthRight:1,colorRight:A,style:E}},"tabview-page-button-top":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBorderRadius,qx.ui.decoration.MBackgroundColor],style:{width:[1,1,0,1],backgroundColor:M,color:O,radius:[3,3,0,0]}},"tabview-page-button-bottom":{include:F,style:{radius:[0,0,3,3],width:[0,1,1,1]}},"tabview-page-button-left":{include:F,style:{radius:[3,0,0,3],width:[1,0,1,1]}},"tabview-page-button-right":{include:F,style:{radius:[0,3,3,0],width:[1,1,1,0]}},"statusbar":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:s,styleTop:E}},"table-scroller-focus-indicator":{decorator:qx.ui.decoration.Single,style:{width:2,color:a,style:E}},"table-header":{include:y,style:{radius:0,width:[1,0,1,0]}},"table-header-column-button":{include:i,style:{width:1,color:G}},"table-header-cell":{decorator:qx.ui.decoration.Single,style:{widthRight:1,color:G}},"table-header-cell-first":{include:U,style:{widthLeft:1}},"progressbar":{decorator:qx.ui.decoration.Single,style:{backgroundColor:Q,width:1,color:L}},"radiobutton":{decorator:[qx.ui.decoration.MBorderRadius,qx.ui.decoration.MDoubleBorder,qx.ui.decoration.MBackgroundColor],style:{radius:10,width:1,color:G,innerColor:M,innerWidth:2}},"radiobutton-focused":{include:k,style:{color:s}},"radiobutton-invalid":{include:k,style:{color:C}},"checkbox":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundColor],style:{width:1,color:G}},"checkbox-focused":{include:p,style:{color:s}},"checkbox-invalid":{include:p,style:{color:C}}}});}
)();
(function(){var m="qx.theme.indigo.Decoration",l="solid",k="white-box-border",j="#505154",i="background",h="border-main",g="white",f="highlight-shade",e="shadow",d="qx/decoration/Simple",a="window-border",c="highlight",b="#323335";qx.Theme.define(m,{extend:qx.theme.simple.Decoration,aliases:{decoration:d},decorations:{"window":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBoxShadow,qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MBorderRadius],style:{width:1,color:a,shadowLength:1,shadowBlurRadius:3,shadowColor:e,backgroundColor:i,radius:3}},"window-caption":{decorator:[qx.ui.decoration.MBorderRadius,qx.ui.decoration.MSingleBorder],style:{radius:[3,3,0,0],color:a,widthBottom:1}},"window-caption-active":{decorator:[qx.ui.decoration.MBorderRadius,qx.ui.decoration.MSingleBorder],style:{radius:[3,3,0,0],color:c,widthBottom:3}},"white-box":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundColor],style:{width:1,color:k,backgroundColor:g}},"statusbar":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:h,styleTop:l}},"app-header":{decorator:[qx.ui.decoration.MLinearBackgroundGradient,qx.ui.decoration.MDoubleBorder,qx.ui.decoration.MBackgroundColor],style:{innerWidthBottom:1,innerColorBottom:f,widthBottom:9,colorBottom:c,gradientStart:[j,0],gradientEnd:[b,100],backgroundColor:b}}}});}
)();
(function(){var j="#D9D9D9",i="#BBBBBB",h="#24B",g="qx.theme.indigo.Color",f="#888888",e="#CCCCCC",d="rgba(0, 0, 0, 0.4)",c="#B7B7B7",b="#1866B5",a="#BABABA",M="black",L="#F7F7F7",K="#A7A6AA",J="#666666",I="#CBC8CD",H="#F9F9F9",G="#CDCDCD",F="#808080",E="#C00F00",D="#686868",q="#5583D0",r="css.rgba",o="#E3E3E3",p="#BBB",m="#FE0",n="#F1F1F1",k="#939393",l="#134983",s="#E8F0E3",t="#AAAAAA",w="#EBEBEB",v="#262626",y="#EEE",x="#323335",A="gray",z="#dddddd",u="#F4F4F4",C="#3D72C9",B="white";qx.Theme.define(g,{colors:{"background":B,"dark-blue":x,"light-background":u,"font":v,"highlight":C,"highlight-shade":q,"background-selected":C,"background-selected-disabled":G,"background-selected-dark":x,"background-disabled":L,"background-disabled-checked":i,"background-pane":B,"tabview-unselected":b,"tabview-button-border":l,"tabview-label-active-disabled":j,"link":h,"scrollbar-bright":n,"scrollbar-dark":w,"button":s,"button-border":p,"button-border-hovered":k,"invalid":E,"button-box-bright":H,"button-box-dark":o,"button-box-bright-pressed":a,"button-box-dark-pressed":w,"border-lead":f,"window-border":z,"window-border-inner":u,"white-box-border":z,"shadow":qx.core.Environment.get(r)?d:J,"border-main":z,"border-light":c,"border-light-shadow":D,"border-separator":F,"text":v,"text-disabled":K,"text-selected":B,"text-placeholder":I,"tooltip":m,"tooltip-text":M,"table-header":[242,242,242],"table-focus-indicator":C,"table-header-cell":[235,234,219],"table-row-background-focused-selected":C,"table-row-background-focused":u,"table-row-background-selected":[51,94,168],"table-row-background-even":B,"table-row-background-odd":B,"table-row-selected":[255,255,255],"table-row":[0,0,0],"table-row-line":y,"table-column-line":y,"progressive-table-header":t,"progressive-table-row-background-even":[250,248,243],"progressive-table-row-background-odd":[255,255,255],"progressive-progressbar-background":A,"progressive-progressbar-indicator-done":e,"progressive-progressbar-indicator-undone":B,"progressive-progressbar-percent-background":A,"progressive-progressbar-percent-text":B}});}
)();
(function(){var b="Indigo",a="qx.theme.Indigo";qx.Theme.define(a,{title:b,meta:{color:qx.theme.indigo.Color,decoration:qx.theme.indigo.Decoration,font:qx.theme.indigo.Font,appearance:qx.theme.indigo.Appearance,icon:qx.theme.icon.Tango}});}
)();
(function(){var f="monospace",e="Courier New",d="qx.theme.simple.Font",c="DejaVu Sans Mono",b="sans-serif",a="arial";qx.Theme.define(d,{fonts:{"default":{size:13,family:[a,b]},"bold":{size:13,family:[a,b],bold:true},"headline":{size:24,family:[b,a]},"small":{size:11,family:[a,b]},"monospace":{size:11,family:[c,e,f]}}});}
)();
(function(){var j="#D9D9D9",i="#1866B5",h="#24B",g="#FF0000",f="#CCCCCC",e="rgba(0, 0, 0, 0.4)",d="#FFFFE1",c="#B7B7B7",b="#BBBBBB",a="#9DCBFE",O="#A7A6AA",N="#EBEBEB",M="#666666",L="#CBC8CD",K="#F9F9F9",J="#CDCDCD",I="#808080",H="#F7F7F7",G="#686868",F="#888888",q="#E0ECFF",r="#2E3A46",o="css.rgba",p="#F5F5F5",m="#E3E3E3",n="#DDDDDD",k="#BBB",l="qx.theme.simple.Color",s="#F1F1F1",t="#939393",x="#BCBCBC",w="#134983",z="#E8F0E3",y="#FAFBFE",B="#AAAAAA",A="#5685D6",v="black",E="#6694E3",D="#EEE",C="gray",u="white";qx.Theme.define(l,{colors:{"background":u,"dark-blue":A,"light-background":q,"background-selected":E,"background-selected-disabled":J,"background-selected-dark":A,"background-disabled":H,"background-disabled-checked":b,"background-pane":y,"tabview-unselected":i,"tabview-button-border":w,"tabview-label-active-disabled":j,"link":h,"scrollbar-bright":s,"scrollbar-dark":N,"button":z,"button-border":k,"button-border-hovered":t,"invalid":g,"button-box-bright":K,"button-box-dark":m,"button-box-bright-pressed":n,"button-box-dark-pressed":p,"border-lead":F,"window-border":r,"window-border-inner":a,"white-box-border":x,"shadow":qx.core.Environment.get(o)?e:M,"border-main":E,"border-light":c,"border-light-shadow":G,"border-separator":I,"text":v,"text-disabled":O,"text-selected":u,"text-placeholder":L,"tooltip":d,"tooltip-text":v,"table-header":[242,242,242],"table-focus-indicator":[179,217,255],"table-header-cell":[235,234,219],"table-row-background-focused-selected":[90,138,211],"table-row-background-focused":[221,238,255],"table-row-background-selected":[51,94,168],"table-row-background-even":u,"table-row-background-odd":u,"table-row-selected":[255,255,255],"table-row":[0,0,0],"table-row-line":D,"table-column-line":D,"progressive-table-header":B,"progressive-table-row-background-even":[250,248,243],"progressive-table-row-background-odd":[255,255,255],"progressive-progressbar-background":C,"progressive-progressbar-indicator-done":f,"progressive-progressbar-indicator-undone":u,"progressive-progressbar-percent-background":C,"progressive-progressbar-percent-text":u}});}
)();
(function(){var b="Simple",a="qx.theme.Simple";qx.Theme.define(a,{title:b,meta:{color:qx.theme.simple.Color,decoration:qx.theme.simple.Decoration,font:qx.theme.simple.Font,appearance:qx.theme.simple.Appearance,icon:qx.theme.icon.Tango}});}
)();
(function(){var eq="button-checked",ep="decoration/window/maximize-active-hovered.png",eo="keyboard-focus",en="menu-css",em="decoration/cursors/",el="slidebar",ek="tooltip-error-arrow",ej="table-scroller-focus-indicator",ei="popup-css",eh="move-frame",cC="nodrop",cB="decoration/table/boolean-true.png",cA="-invalid-css",cz="menu",cy="app-header",cx="row-layer",cw="text-inactive",cv="move",cu="decoration/window/restore-active-hovered.png",ct="shadow-window",ex="tree-folder",ey="window-pane-css",ev="right.png",ew="checkbox-undetermined-hovered",et="window-incl-statusbar-css",eu="tabview-page-button-bottom-inactive",er="tooltip-error",es="window-css",ez="window-statusbar",eA="button-hovered",dI="decoration/scrollbar/scrollbar-",dH="background-tip",dK="menubar-css",dJ="scrollbar-slider-horizontal-disabled",dM="radiobutton-disabled",dL="window-resize-frame-css",dO="button-pressed",dN="table-pane",dF="decoration/window/close-active.png",dE="native",v="button-invalid-shadow",w="decoration/window/minimize-active-hovered.png",x="menubar",y="icon/16/actions/dialog-cancel.png",z="tabview-page-button-top-inactive",A="tabview-page-button-left-inactive",B="menu-slidebar",C="toolbar-button-checked",D="-left",E="decoration/tree/open-selected.png",eS="decoration/window/minimize-inactive.png",eR="icon/16/apps/office-calendar.png",eQ="group-item-css",eP="group",eW="tabview-page-button-right-inactive",eV="decoration/window/minimize-active.png",eU="decoration/window/restore-inactive.png",eT="checkbox-checked-focused",eY="combobox/textfield",eX="decoration/window/close-active-hovered.png",bz="qx/icon/Tango/16/actions/window-close.png",bA="checkbox-pressed",bx="button-disabled",by="selected-dragover",bD="border-separator",bE="decoration/window/maximize-inactive.png",bB="dragover",bC="scrollarea",bv="scrollbar-vertical",bw="decoration/menu/checkbox-invert.gif",bb="decoration/toolbar/toolbar-handle-knob.gif",ba="icon/22/mimetypes/office-document.png",bd="table-header-cell",bc="button-checked-focused",W="up.png",V="best-fit",Y="pane-css",X="decoration/tree/closed-selected.png",U="tooltip-error-arrow-left",T="qx.theme.modern.Appearance",bK="text-active",bL="checkbox-disabled",bM="toolbar-button-hovered",bN="window-resize-frame-incl-statusbar-css",bG="decoration/form/checked.png",bH="progressive-table-header",bI="decoration/table/select-column-order.png",bJ="decoration/menu/radiobutton.gif",bO="decoration/arrows/forward.png",bP="decoration/table/descending.png",bo="decoration/form/undetermined.png",bn="tree-file",bm="window-captionbar-active",bl="checkbox-checked-hovered",bk="scrollbar-slider-vertical",bj="toolbar",bi="alias",bh="decoration/window/restore-active.png",bs="decoration/table/boolean-false.png",br="icon/32/mimetypes/office-document.png",bQ="text-gray",bR="mshtml",bS="tabview-pane",bT="decoration/arrows/rewind.png",bU="top",bV="icon/16/actions/dialog-ok.png",bW="progressbar-background",bX="engine.name",bY="table-header-cell-hovered",ca="window-statusbar-css",cK="window",cJ="browser.documentmode",cI="decoration/menu/radiobutton-invert.gif",cH="text-placeholder",cO="slider",cN="toolbar-css",cM="keep-align",cL="down.png",cS="groupitem-text",cR="tabview-page-button-top-active",ds="icon/22/places/folder.png",dt="decoration/window/maximize-active.png",dq="checkbox-checked-pressed",dr="decoration/window/close-inactive.png",dn="tabview-page-button-left-active",dp="toolbar-part",dl="decoration/splitpane/knob-vertical.png",dm=".gif",dA="table-statusbar",dB="progressive-table-header-cell-css",dT="window-captionbar-inactive",dS="copy",dV="decoration/arrows/down-invert.png",dU="decoration/menu/checkbox.gif",dX="window-caption-active-text",dW="decoration/splitpane/knob-horizontal.png",ea="group-css",dY="icon/32/places/folder.png",dQ="toolbar-separator",dP="tabview-page-button-bottom-active",eH="decoration/arrows/up-small.png",eI="decoration/table/ascending.png",eJ="decoration/arrows/up-invert.png",eK="small",eD="tabview-page-button-right-active",eE="-disabled",eF="scrollbar-horizontal",eG="progressbar",eB="checkbox-undetermined-focused",eC="progressive-table-header-cell",k="menu-separator",j="tabview-pane-css",i="pane",h="htmlarea-background",g="decoration/arrows/right-invert.png",f="left.png",e="icon/16/actions/view-refresh.png",d="radiobutton-hovered",c="group-item",b="scrollbar/button",J="right",K="combobox/button",H="virtual-list",I="icon/16/places/folder.png",N="radiobutton-checked-focused",O="text-label",L="decoration/tree/closed.png",M="table-scroller-header",Q="scrollbar-slider-horizontal",R="checkbox-hovered",cW="checkbox-checked",cQ="decoration/arrows/left.png",de="radiobutton-checked",da="button-focused",cF="text-light",cD="menu-slidebar-button",bf="tree",cG="checkbox-undetermined",bq="table-scroller-header-css",bp="splitpane",ck="text-input",cl="slidebar/button-forward",cm="background-splitpane",cn="text-hovered",co=".png",cp="decoration/tree/open.png",cq="default",cr="decoration/arrows/down-small.png",ch="datechooser",ci="slidebar/button-backward",cE="radiobutton-checked-disabled",dd="checkbox-focused",dc="radiobutton-checked-hovered",db="treevirtual-folder",di="shadow-popup",dh="icon/16/mimetypes/office-document.png",dg="background-medium",df="icon/32/places/folder-open.png",cY="icon/22/places/folder-open.png",cX="table",P="decoration/arrows/up.png",bu="decoration/form/",bt="radiobutton-focused",cP="decoration/arrows/right.png",bF="background-application",cV="invalid",cU="right-top",cT="selectbox",be="text-title",dk="icon/16/places/folder-open.png",S="radiobutton",bg="list",cb="tree-item",cc="combobox",cd="treevirtual-contract",ce="scrollbar",cf="datechooser/nav-button",cg="center",dD="checkbox",cj="treevirtual-expand",ec="",eb="textfield",ee="-invalid",ed="tooltip",eg="qx/static/blank.gif",ef="border-invalid",cs="input",dR="input-disabled",dj="menu-button",dG="input-focused-invalid",F="toolbar-button",G="spinner",dy="input-focused",dz="decoration/arrows/down.png",dw="popup",dx="cell",du="image",dv="middle",a="selected",dC="background-light",s="bold",r="text-disabled",q="groupbox",p="text-selected",o="label",n="button",m="main",l="css.boxshadow",u="css.borderradius",t="button-frame",eL="atom",eM="-css",eN="widget",eO="css.gradient.linear";qx.Theme.define(T,{appearances:{"widget":{},"root":{style:function(fa){return {backgroundColor:bF,textColor:O,font:cq};}
},"label":{style:function(fb){return {textColor:fb.disabled?r:undefined};}
},"move-frame":{style:function(fc){return {decorator:m};}
},"resize-frame":eh,"dragdrop-cursor":{style:function(fd){var fe=cC;if(fd.copy){fe=dS;}
else if(fd.move){fe=cv;}
else if(fd.alias){fe=bi;}
;return {source:em+fe+dm,position:cU,offset:[2,16,2,6]};}
},"image":{style:function(ff){return {opacity:!ff.replacement&&ff.disabled?0.3:1};}
},"atom":{},"atom/label":o,"atom/icon":du,"popup":{style:function(fg){var fh=qx.core.Environment.get(l);return {decorator:fh?ei:m,backgroundColor:dC,shadow:fh?undefined:di};}
},"button-frame":{alias:eL,style:function(fi){var fm,fl;var fj=[3,9];if(fi.checked&&fi.focused&&!fi.inner){fm=bc;fl=undefined;fj=[1,7];}
else if(fi.disabled){fm=bx;fl=undefined;}
else if(fi.pressed){fm=dO;fl=cn;}
else if(fi.checked){fm=eq;fl=undefined;}
else if(fi.hovered){fm=eA;fl=cn;}
else if(fi.focused&&!fi.inner){fm=da;fl=undefined;fj=[1,7];}
else {fm=n;fl=undefined;}
;var fk;if(qx.core.Environment.get(u)&&qx.core.Environment.get(eO)){if(fi.invalid&&!fi.disabled){fm+=cA;}
else {fm+=eM;}
;}
else {fk=fi.invalid&&!fi.disabled?v:undefined;fj=[2,8];}
;return {decorator:fm,textColor:fl,shadow:fk,padding:fj,margin:[1,0]};}
},"button-frame/image":{style:function(fn){return {opacity:!fn.replacement&&fn.disabled?0.5:1};}
},"button":{alias:t,include:t,style:function(fo){return {center:true};}
},"hover-button":{alias:eL,include:eL,style:function(fp){var fq=fp.hovered?a:undefined;if(fq&&qx.core.Environment.get(eO)){fq+=eM;}
;return {decorator:fq,textColor:fp.hovered?p:undefined};}
},"splitbutton":{},"splitbutton/button":n,"splitbutton/arrow":{alias:n,include:n,style:function(fr,fs){return {icon:dz,padding:[fs.padding[0],fs.padding[1]-6],marginLeft:1};}
},"form-renderer-label":{include:o,style:function(){return {paddingTop:4};}
},"checkbox":{alias:eL,style:function(ft){var fu=qx.core.Environment.get(eO)&&qx.core.Environment.get(l);var fw;if(fu){if(ft.checked){fw=bG;}
else if(ft.undetermined){fw=bo;}
else {fw=eg;}
;}
else {if(ft.checked){if(ft.disabled){fw=cW;}
else if(ft.focused){fw=eT;}
else if(ft.pressed){fw=dq;}
else if(ft.hovered){fw=bl;}
else {fw=cW;}
;}
else if(ft.undetermined){if(ft.disabled){fw=cG;}
else if(ft.focused){fw=eB;}
else if(ft.hovered){fw=ew;}
else {fw=cG;}
;}
else if(!ft.disabled){if(ft.focused){fw=dd;}
else if(ft.pressed){fw=bA;}
else if(ft.hovered){fw=R;}
;}
;fw=fw||dD;var fv=ft.invalid&&!ft.disabled?ee:ec;fw=bu+fw+fv+co;}
;return {icon:fw,minWidth:fu?14:undefined,gap:fu?8:6};}
},"checkbox/icon":{style:function(fx){var fz=qx.core.Environment.get(eO)&&qx.core.Environment.get(l);if(!fz){return {opacity:!fx.replacement&&fx.disabled?0.3:1};}
;var fA;if(fx.disabled){fA=bL;}
else if(fx.focused){fA=dd;}
else if(fx.hovered){fA=R;}
else {fA=dD;}
;fA+=fx.invalid&&!fx.disabled?ee:ec;var fy;if(fx.undetermined){fy=[2,0];}
;return {decorator:fA,padding:fy,width:12,height:10};}
},"radiobutton":{alias:eL,style:function(fB){var fC=qx.core.Environment.get(u)&&qx.core.Environment.get(l);var fE;if(fC){fE=eg;}
else {if(fB.checked&&fB.focused){fE=N;}
else if(fB.checked&&fB.disabled){fE=cE;}
else if(fB.checked&&fB.hovered){fE=dc;}
else if(fB.checked){fE=de;}
else if(fB.focused){fE=bt;}
else if(fB.hovered){fE=d;}
else {fE=S;}
;var fD=fB.invalid&&!fB.disabled?ee:ec;fE=bu+fE+fD+co;}
;return {icon:fE,gap:fC?8:6};}
},"radiobutton/icon":{style:function(fF){var fG=qx.core.Environment.get(u)&&qx.core.Environment.get(l);if(!fG){return {opacity:!fF.replacement&&fF.disabled?0.3:1};}
;var fH;if(fF.disabled&&!fF.checked){fH=dM;}
else if(fF.checked&&fF.focused){fH=N;}
else if(fF.checked&&fF.disabled){fH=cE;}
else if(fF.checked&&fF.hovered){fH=dc;}
else if(fF.checked){fH=de;}
else if(fF.focused){fH=bt;}
else if(fF.hovered){fH=d;}
else {fH=S;}
;fH+=fF.invalid&&!fF.disabled?ee:ec;return {decorator:fH,width:12,height:10};}
},"textfield":{style:function(fI){var fN;var fL=!!fI.focused;var fM=!!fI.invalid;var fJ=!!fI.disabled;if(fL&&fM&&!fJ){fN=dG;}
else if(fL&&!fM&&!fJ){fN=dy;}
else if(fJ){fN=dR;}
else if(!fL&&fM&&!fJ){fN=ef;}
else {fN=cs;}
;if(qx.core.Environment.get(eO)){fN+=eM;}
;var fK;if(fI.disabled){fK=r;}
else if(fI.showingPlaceholder){fK=cH;}
else {fK=ck;}
;return {decorator:fN,padding:[2,4,1],textColor:fK};}
},"textarea":{include:eb,style:function(fO){return {padding:4};}
},"spinner":{style:function(fP){var fT;var fR=!!fP.focused;var fS=!!fP.invalid;var fQ=!!fP.disabled;if(fR&&fS&&!fQ){fT=dG;}
else if(fR&&!fS&&!fQ){fT=dy;}
else if(fQ){fT=dR;}
else if(!fR&&fS&&!fQ){fT=ef;}
else {fT=cs;}
;if(qx.core.Environment.get(eO)){fT+=eM;}
;return {decorator:fT};}
},"spinner/textfield":{style:function(fU){return {marginRight:2,padding:[2,4,1],textColor:fU.disabled?r:ck};}
},"spinner/upbutton":{alias:t,include:t,style:function(fV,fW){return {icon:eH,padding:[fW.padding[0]-1,fW.padding[1]-5],shadow:undefined,margin:0};}
},"spinner/downbutton":{alias:t,include:t,style:function(fX,fY){return {icon:cr,padding:[fY.padding[0]-1,fY.padding[1]-5],shadow:undefined,margin:0};}
},"datefield":cc,"datefield/button":{alias:K,include:K,style:function(ga){return {icon:eR,padding:[0,3],decorator:undefined};}
},"datefield/textfield":eY,"datefield/list":{alias:ch,include:ch,style:function(gb){return {decorator:undefined};}
},"groupbox":{style:function(gc){return {legendPosition:bU};}
},"groupbox/legend":{alias:eL,style:function(gd){return {padding:[1,0,1,4],textColor:gd.invalid?cV:be,font:s};}
},"groupbox/frame":{style:function(ge){var gf=qx.core.Environment.get(u);return {padding:gf?10:12,margin:gf?1:undefined,decorator:gf?ea:eP};}
},"check-groupbox":q,"check-groupbox/legend":{alias:dD,include:dD,style:function(gg){return {padding:[1,0,1,4],textColor:gg.invalid?cV:be,font:s};}
},"radio-groupbox":q,"radio-groupbox/legend":{alias:S,include:S,style:function(gh){return {padding:[1,0,1,4],textColor:gh.invalid?cV:be,font:s};}
},"scrollarea":{style:function(gi){return {minWidth:50,minHeight:50};}
},"scrollarea/corner":{style:function(gj){return {backgroundColor:bF};}
},"scrollarea/pane":eN,"scrollarea/scrollbar-x":ce,"scrollarea/scrollbar-y":ce,"scrollbar":{style:function(gk){if(gk[dE]){return {};}
;var gl=qx.core.Environment.get(eO);var gm=gk.horizontal?eF:bv;if(gl){gm+=eM;}
;return {width:gk.horizontal?undefined:16,height:gk.horizontal?16:undefined,decorator:gm,padding:1};}
},"scrollbar/slider":{alias:cO,style:function(gn){return {padding:gn.horizontal?[0,1,0,1]:[1,0,1,0]};}
},"scrollbar/slider/knob":{include:t,style:function(go){var gp=qx.core.Environment.get(eO);var gq=go.horizontal?Q:bk;if(go.disabled){gq+=eE;}
;if(gp){gq+=eM;}
;return {decorator:gq,minHeight:go.horizontal?undefined:9,minWidth:go.horizontal?9:undefined,padding:undefined,margin:0};}
},"scrollbar/button":{alias:t,include:t,style:function(gr){var gu=dI;if(gr.left){gu+=f;}
else if(gr.right){gu+=ev;}
else if(gr.up){gu+=W;}
else {gu+=cL;}
;var gt=qx.core.Environment.get(eO);if(gr.left||gr.right){var gs=gr.left?3:4;return {padding:gt?[3,0,3,gs]:[2,0,2,gs],icon:gu,width:15,height:14,margin:0};}
else {return {padding:gt?3:[3,2],icon:gu,width:14,height:15,margin:0};}
;}
},"scrollbar/button-begin":b,"scrollbar/button-end":b,"slider":{style:function(gv){var gz;var gx=!!gv.focused;var gy=!!gv.invalid;var gw=!!gv.disabled;if(gx&&gy&&!gw){gz=dG;}
else if(gx&&!gy&&!gw){gz=dy;}
else if(gw){gz=dR;}
else if(!gx&&gy&&!gw){gz=ef;}
else {gz=cs;}
;if(qx.core.Environment.get(eO)){gz+=eM;}
;return {decorator:gz};}
},"slider/knob":{include:t,style:function(gA){return {decorator:gA.disabled?dJ:Q,shadow:undefined,height:14,width:14,padding:0};}
},"list":{alias:bC,style:function(gB){var gF;var gD=!!gB.focused;var gE=!!gB.invalid;var gC=!!gB.disabled;if(gD&&gE&&!gC){gF=dG;}
else if(gD&&!gE&&!gC){gF=dy;}
else if(gC){gF=dR;}
else if(!gD&&gE&&!gC){gF=ef;}
else {gF=cs;}
;if(qx.core.Environment.get(eO)){gF+=eM;}
;return {backgroundColor:dC,decorator:gF};}
},"list/pane":eN,"listitem":{alias:eL,style:function(gG){var gH;if(gG.dragover){gH=gG.selected?by:bB;}
else {gH=gG.selected?a:undefined;if(gH&&qx.core.Environment.get(eO)){gH+=eM;}
;}
;return {padding:gG.dragover?[4,4,2,4]:4,textColor:gG.selected?p:undefined,decorator:gH};}
},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:t,include:t,style:function(gI){return {padding:5,center:true,icon:gI.vertical?dz:cP};}
},"slidebar/button-backward":{alias:t,include:t,style:function(gJ){return {padding:5,center:true,icon:gJ.vertical?P:cQ};}
},"tabview":{style:function(gK){return {contentPadding:16};}
},"tabview/bar":{alias:el,style:function(gL){var gM=qx.core.Environment.get(u)&&qx.core.Environment.get(l)&&qx.core.Environment.get(eO);var gN={marginBottom:gL.barTop?-1:0,marginTop:gL.barBottom?gM?-4:-7:0,marginLeft:gL.barRight?gM?-3:-5:0,marginRight:gL.barLeft?-1:0,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0};if(gL.barTop||gL.barBottom){gN.paddingLeft=5;gN.paddingRight=7;}
else {gN.paddingTop=5;gN.paddingBottom=7;}
;return gN;}
},"tabview/bar/button-forward":{include:cl,alias:cl,style:function(gO){if(gO.barTop||gO.barBottom){return {marginTop:2,marginBottom:2};}
else {return {marginLeft:2,marginRight:2};}
;}
},"tabview/bar/button-backward":{include:ci,alias:ci,style:function(gP){if(gP.barTop||gP.barBottom){return {marginTop:2,marginBottom:2};}
else {return {marginLeft:2,marginRight:2};}
;}
},"tabview/bar/scrollpane":{},"tabview/pane":{style:function(gQ){var gR=qx.core.Environment.get(eO)&&qx.core.Environment.get(u);return {decorator:gR?j:bS,marginBottom:gQ.barBottom?-1:0,marginTop:gQ.barTop?-1:0,marginLeft:gQ.barLeft?-1:0,marginRight:gQ.barRight?-1:0};}
},"tabview-page":{alias:eN,include:eN,style:function(gS){var gT=qx.core.Environment.get(eO)&&qx.core.Environment.get(u);return {padding:gT?[4,3]:undefined};}
},"tabview-page/button":{alias:eL,style:function(gU){var hc,gX=0;var hb=0,gV=0,gY=0,ha=0;var gW=qx.core.Environment.get(u)&&qx.core.Environment.get(l)&&qx.core.Environment.get(eO);if(gU.checked){if(gU.barTop){hc=cR;gX=gW?[5,11]:[6,14];gY=gU.firstTab?0:-5;ha=gU.lastTab?0:-5;}
else if(gU.barBottom){hc=dP;gX=gW?[5,11]:[6,14];gY=gU.firstTab?0:-5;ha=gU.lastTab?0:-5;hb=3;}
else if(gU.barRight){hc=eD;gX=gW?[5,10]:[6,13];hb=gU.firstTab?0:-5;gV=gU.lastTab?0:-5;gY=2;}
else {hc=dn;gX=gW?[5,10]:[6,13];hb=gU.firstTab?0:-5;gV=gU.lastTab?0:-5;}
;}
else {if(gU.barTop){hc=z;gX=gW?[3,9]:[4,10];hb=4;gY=gU.firstTab?5:1;ha=1;}
else if(gU.barBottom){hc=eu;gX=gW?[3,9]:[4,10];gV=4;gY=gU.firstTab?5:1;ha=1;hb=3;}
else if(gU.barRight){hc=eW;gX=gW?[3,9]:[4,10];ha=5;hb=gU.firstTab?5:1;gV=1;gY=3;}
else {hc=A;gX=gW?[3,9]:[4,10];gY=5;hb=gU.firstTab?5:1;gV=1;ha=1;}
;}
;if(hc&&gW){hc+=eM;}
;return {zIndex:gU.checked?10:5,decorator:hc,padding:gX,marginTop:hb,marginBottom:gV,marginLeft:gY,marginRight:ha,textColor:gU.disabled?r:gU.checked?bK:cw};}
},"tabview-page/button/label":{alias:o,style:function(hd){return {padding:[0,1,0,1],margin:hd.focused?0:1,decorator:hd.focused?eo:undefined};}
},"tabview-page/button/close-button":{alias:eL,style:function(he){return {icon:bz};}
},"toolbar":{style:function(hf){var hg=qx.core.Environment.get(eO);return {decorator:hg?cN:bj,spacing:2};}
},"toolbar/part":{style:function(hh){return {decorator:dp,spacing:2};}
},"toolbar/part/container":{style:function(hi){return {paddingLeft:2,paddingRight:2};}
},"toolbar/part/handle":{style:function(hj){return {source:bb,marginLeft:3,marginRight:3};}
},"toolbar-button":{alias:eL,style:function(hk){var hm;if(hk.pressed||(hk.checked&&!hk.hovered)||(hk.checked&&hk.disabled)){hm=C;}
else if(hk.hovered&&!hk.disabled){hm=bM;}
;var hl=qx.core.Environment.get(eO)&&qx.core.Environment.get(u);if(hl&&hm){hm+=eM;}
;return {marginTop:2,marginBottom:2,padding:(hk.pressed||hk.checked||hk.hovered)&&!hk.disabled||(hk.disabled&&hk.checked)?3:5,decorator:hm};}
},"toolbar-menubutton":{alias:F,include:F,style:function(hn){return {showArrow:true};}
},"toolbar-menubutton/arrow":{alias:du,include:du,style:function(ho){return {source:cr};}
},"toolbar-splitbutton":{style:function(hp){return {marginTop:2,marginBottom:2};}
},"toolbar-splitbutton/button":{alias:F,include:F,style:function(hq){return {icon:dz,marginTop:undefined,marginBottom:undefined};}
},"toolbar-splitbutton/arrow":{alias:F,include:F,style:function(hr){if(hr.pressed||hr.checked||(hr.hovered&&!hr.disabled)){var hs=1;}
else {var hs=3;}
;return {padding:hs,icon:dz,marginTop:undefined,marginBottom:undefined};}
},"toolbar-separator":{style:function(ht){return {decorator:dQ,margin:7};}
},"tree":bg,"tree-item":{style:function(hu){var hv=hu.selected?a:undefined;if(hv&&qx.core.Environment.get(eO)){hv+=eM;}
;return {padding:[2,6],textColor:hu.selected?p:undefined,decorator:hv};}
},"tree-item/icon":{include:du,style:function(hw){return {paddingRight:5};}
},"tree-item/label":o,"tree-item/open":{include:du,style:function(hx){var hy;if(hx.selected&&hx.opened){hy=E;}
else if(hx.selected&&!hx.opened){hy=X;}
else if(hx.opened){hy=cp;}
else {hy=L;}
;return {padding:[0,5,0,2],source:hy};}
},"tree-folder":{include:cb,alias:cb,style:function(hz){var hB,hA;if(hz.small){hB=hz.opened?dk:I;hA=dk;}
else if(hz.large){hB=hz.opened?df:dY;hA=df;}
else {hB=hz.opened?cY:ds;hA=cY;}
;return {icon:hB,iconOpened:hA};}
},"tree-file":{include:cb,alias:cb,style:function(hC){return {icon:hC.small?dh:hC.large?br:ba};}
},"treevirtual":cX,"treevirtual-folder":{style:function(hD){return {icon:hD.opened?dk:I};}
},"treevirtual-file":{include:db,alias:db,style:function(hE){return {icon:dh};}
},"treevirtual-line":{style:function(hF){return {icon:eg};}
},"treevirtual-contract":{style:function(hG){return {icon:cp,paddingLeft:5,paddingTop:2};}
},"treevirtual-expand":{style:function(hH){return {icon:L,paddingLeft:5,paddingTop:2};}
},"treevirtual-only-contract":cd,"treevirtual-only-expand":cj,"treevirtual-start-contract":cd,"treevirtual-start-expand":cj,"treevirtual-end-contract":cd,"treevirtual-end-expand":cj,"treevirtual-cross-contract":cd,"treevirtual-cross-expand":cj,"treevirtual-end":{style:function(hI){return {icon:eg};}
},"treevirtual-cross":{style:function(hJ){return {icon:eg};}
},"tooltip":{include:dw,style:function(hK){return {backgroundColor:dH,padding:[1,3,2,3],offset:[15,5,5,5]};}
},"tooltip/atom":eL,"tooltip-error":{include:ed,style:function(hL){var hO=qx.core.Environment.get(u)&&qx.core.Environment.get(l);var hN=er;if(hO){hN+=eM;}
;if(hL.placementLeft){hN+=D;}
;var hP=ek;if(hL.placementLeft){hP=U;if(hO){hP+=eM;}
;}
;if(hO){if(hL.placementLeft){var hM=[9,20,3,6];}
else {var hM=[6,6,7,-8];}
;}
else {if(hL.placementLeft){var hM=[6,20,3,4];}
else {var hM=[6,10,6,-10];}
;}
;if(!hO&&hL.placementLeft&&qx.core.Environment.get(bX)==bR&&qx.core.Environment.get(cJ)<9){hP=undefined;hM=[5,10];}
;return {textColor:p,backgroundColor:undefined,placeMethod:eN,offset:[0,14,0,14],marginTop:-2,position:cU,showTimeout:100,hideTimeout:10000,shadow:hN,decorator:hP,font:s,padding:hM,maxWidth:333};}
},"tooltip-error/atom":eL,"window":{style:function(hQ){var hS=qx.core.Environment.get(u)&&qx.core.Environment.get(eO)&&qx.core.Environment.get(l);var hT;var hR;if(hS){if(hQ.showStatusbar){hT=et;}
else {hT=es;}
;}
else {hR=ct;}
;return {decorator:hT,shadow:hR,contentPadding:[10,10,10,10],margin:hQ.maximized?0:[0,5,5,0]};}
},"window-resize-frame":{style:function(hU){var hV=qx.core.Environment.get(u);var hW;if(hV){if(hU.showStatusbar){hW=bN;}
else {hW=dL;}
;}
else {hW=m;}
;return {decorator:hW};}
},"window/pane":{style:function(hX){var hY=qx.core.Environment.get(u)&&qx.core.Environment.get(eO)&&qx.core.Environment.get(l);return {decorator:hY?ey:cK};}
},"window/captionbar":{style:function(ia){var ib=qx.core.Environment.get(u)&&qx.core.Environment.get(eO)&&qx.core.Environment.get(l);var ic=ia.active?bm:dT;if(ib){ic+=eM;}
;return {decorator:ic,textColor:ia.active?dX:bQ,minHeight:26,paddingRight:2};}
},"window/icon":{style:function(id){return {margin:[5,0,3,6]};}
},"window/title":{style:function(ie){return {alignY:dv,font:s,marginLeft:6,marginRight:12};}
},"window/minimize-button":{alias:eL,style:function(ig){return {icon:ig.active?ig.hovered?w:eV:eS,margin:[4,8,2,0]};}
},"window/restore-button":{alias:eL,style:function(ih){return {icon:ih.active?ih.hovered?cu:bh:eU,margin:[5,8,2,0]};}
},"window/maximize-button":{alias:eL,style:function(ii){return {icon:ii.active?ii.hovered?ep:dt:bE,margin:[4,8,2,0]};}
},"window/close-button":{alias:eL,style:function(ij){return {icon:ij.active?ij.hovered?eX:dF:dr,margin:[4,8,2,0]};}
},"window/statusbar":{style:function(ik){var il=qx.core.Environment.get(u)&&qx.core.Environment.get(eO)&&qx.core.Environment.get(l);return {padding:[2,6],decorator:il?ca:ez,minHeight:18};}
},"window/statusbar-text":{style:function(im){return {font:eK};}
},"iframe":{style:function(io){return {decorator:m};}
},"resizer":{style:function(ip){var iq=qx.core.Environment.get(l)&&qx.core.Environment.get(u)&&qx.core.Environment.get(eO);return {decorator:iq?Y:i};}
},"splitpane":{style:function(ir){return {decorator:bp};}
},"splitpane/splitter":{style:function(is){return {width:is.horizontal?3:undefined,height:is.vertical?3:undefined,backgroundColor:cm};}
},"splitpane/splitter/knob":{style:function(it){return {source:it.horizontal?dW:dl};}
},"splitpane/slider":{style:function(iu){return {width:iu.horizontal?3:undefined,height:iu.vertical?3:undefined,backgroundColor:cm};}
},"selectbox":t,"selectbox/atom":eL,"selectbox/popup":dw,"selectbox/list":{alias:bg},"selectbox/arrow":{include:du,style:function(iv){return {source:dz,paddingLeft:5};}
},"datechooser":{style:function(iw){var iA;var iy=!!iw.focused;var iz=!!iw.invalid;var ix=!!iw.disabled;if(iy&&iz&&!ix){iA=dG;}
else if(iy&&!iz&&!ix){iA=dy;}
else if(ix){iA=dR;}
else if(!iy&&iz&&!ix){iA=ef;}
else {iA=cs;}
;if(qx.core.Environment.get(eO)){iA+=eM;}
;return {padding:2,decorator:iA,backgroundColor:dC};}
},"datechooser/navigation-bar":{},"datechooser/nav-button":{include:t,alias:t,style:function(iB){var iC={padding:[2,4],shadow:undefined};if(iB.lastYear){iC.icon=bT;iC.marginRight=1;}
else if(iB.lastMonth){iC.icon=cQ;}
else if(iB.nextYear){iC.icon=bO;iC.marginLeft=1;}
else if(iB.nextMonth){iC.icon=cP;}
;return iC;}
},"datechooser/last-year-button-tooltip":ed,"datechooser/last-month-button-tooltip":ed,"datechooser/next-year-button-tooltip":ed,"datechooser/next-month-button-tooltip":ed,"datechooser/last-year-button":cf,"datechooser/last-month-button":cf,"datechooser/next-month-button":cf,"datechooser/next-year-button":cf,"datechooser/month-year-label":{style:function(iD){return {font:s,textAlign:cg,textColor:iD.disabled?r:undefined};}
},"datechooser/date-pane":{style:function(iE){return {textColor:iE.disabled?r:undefined,marginTop:2};}
},"datechooser/weekday":{style:function(iF){return {textColor:iF.disabled?r:iF.weekend?cF:undefined,textAlign:cg,paddingTop:2,backgroundColor:dg};}
},"datechooser/week":{style:function(iG){return {textAlign:cg,padding:[2,4],backgroundColor:dg};}
},"datechooser/day":{style:function(iH){var iI=iH.disabled?undefined:iH.selected?a:undefined;if(iI&&qx.core.Environment.get(eO)){iI+=eM;}
;return {textAlign:cg,decorator:iI,textColor:iH.disabled?r:iH.selected?p:iH.otherMonth?cF:undefined,font:iH.today?s:undefined,padding:[2,4]};}
},"combobox":{style:function(iJ){var iN;var iL=!!iJ.focused;var iM=!!iJ.invalid;var iK=!!iJ.disabled;if(iL&&iM&&!iK){iN=dG;}
else if(iL&&!iM&&!iK){iN=dy;}
else if(iK){iN=dR;}
else if(!iL&&iM&&!iK){iN=ef;}
else {iN=cs;}
;if(qx.core.Environment.get(eO)){iN+=eM;}
;return {decorator:iN};}
},"combobox/popup":dw,"combobox/list":{alias:bg},"combobox/button":{include:t,alias:t,style:function(iO,iP){var iQ={icon:dz,padding:[iP.padding[0],iP.padding[1]-6],shadow:undefined,margin:undefined};if(iO.selected){iQ.decorator=da;}
;return iQ;}
},"combobox/textfield":{include:eb,style:function(iR){return {decorator:undefined};}
},"menu":{style:function(iS){var iT=qx.core.Environment.get(eO)&&qx.core.Environment.get(l);var iU={decorator:iT?en:cz,shadow:iT?undefined:di,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4,placementModeY:iS.submenu||iS.contextmenu?V:cM};if(iS.submenu){iU.position=cU;iU.offset=[-2,-3];}
;return iU;}
},"menu/slidebar":B,"menu-slidebar":eN,"menu-slidebar-button":{style:function(iV){var iW=iV.hovered?a:undefined;if(iW&&qx.core.Environment.get(eO)){iW+=eM;}
;return {decorator:iW,padding:7,center:true};}
},"menu-slidebar/button-backward":{include:cD,style:function(iX){return {icon:iX.hovered?eJ:P};}
},"menu-slidebar/button-forward":{include:cD,style:function(iY){return {icon:iY.hovered?dV:dz};}
},"menu-separator":{style:function(ja){return {height:0,decorator:k,margin:[4,2]};}
},"menu-button":{alias:eL,style:function(jb){var jc=jb.selected?a:undefined;if(jc&&qx.core.Environment.get(eO)){jc+=eM;}
;return {decorator:jc,textColor:jb.selected?p:undefined,padding:[4,6]};}
},"menu-button/icon":{include:du,style:function(jd){return {alignY:dv};}
},"menu-button/label":{include:o,style:function(je){return {alignY:dv,padding:1};}
},"menu-button/shortcut":{include:o,style:function(jf){return {alignY:dv,marginLeft:14,padding:1};}
},"menu-button/arrow":{include:du,style:function(jg){return {source:jg.selected?g:cP,alignY:dv};}
},"menu-checkbox":{alias:dj,include:dj,style:function(jh){return {icon:!jh.checked?undefined:jh.selected?bw:dU};}
},"menu-radiobutton":{alias:dj,include:dj,style:function(ji){return {icon:!ji.checked?undefined:ji.selected?cI:bJ};}
},"menubar":{style:function(jj){var jk=qx.core.Environment.get(eO);return {decorator:jk?dK:x};}
},"menubar-button":{alias:eL,style:function(jl){var jm=(jl.pressed||jl.hovered)&&!jl.disabled?a:undefined;if(jm&&qx.core.Environment.get(eO)){jm+=eM;}
;return {decorator:jm,textColor:jl.pressed||jl.hovered?p:undefined,padding:[3,8]};}
},"colorselector":eN,"colorselector/control-bar":eN,"colorselector/control-pane":eN,"colorselector/visual-pane":q,"colorselector/preset-grid":eN,"colorselector/colorbucket":{style:function(jn){return {decorator:m,width:16,height:16};}
},"colorselector/preset-field-set":q,"colorselector/input-field-set":{include:q,alias:q,style:function(){return {paddingTop:20};}
},"colorselector/preview-field-set":{include:q,alias:q,style:function(){return {paddingTop:20};}
},"colorselector/hex-field-composite":eN,"colorselector/hex-field":eb,"colorselector/rgb-spinner-composite":eN,"colorselector/rgb-spinner-red":G,"colorselector/rgb-spinner-green":G,"colorselector/rgb-spinner-blue":G,"colorselector/hsb-spinner-composite":eN,"colorselector/hsb-spinner-hue":G,"colorselector/hsb-spinner-saturation":G,"colorselector/hsb-spinner-brightness":G,"colorselector/preview-content-old":{style:function(jo){return {decorator:m,width:50,height:10};}
},"colorselector/preview-content-new":{style:function(jp){return {decorator:m,backgroundColor:dC,width:50,height:10};}
},"colorselector/hue-saturation-field":{style:function(jq){return {decorator:m,margin:5};}
},"colorselector/brightness-field":{style:function(jr){return {decorator:m,margin:[5,7]};}
},"colorselector/hue-saturation-pane":eN,"colorselector/hue-saturation-handle":eN,"colorselector/brightness-pane":eN,"colorselector/brightness-handle":eN,"colorpopup":{alias:dw,include:dw,style:function(js){return {padding:5,backgroundColor:bF};}
},"colorpopup/field":{style:function(jt){return {decorator:m,margin:2,width:14,height:14,backgroundColor:dC};}
},"colorpopup/selector-button":n,"colorpopup/auto-button":n,"colorpopup/preview-pane":q,"colorpopup/current-preview":{style:function(ju){return {height:20,padding:4,marginLeft:4,decorator:m,allowGrowX:true};}
},"colorpopup/selected-preview":{style:function(jv){return {height:20,padding:4,marginRight:4,decorator:m,allowGrowX:true};}
},"colorpopup/colorselector-okbutton":{alias:n,include:n,style:function(jw){return {icon:bV};}
},"colorpopup/colorselector-cancelbutton":{alias:n,include:n,style:function(jx){return {icon:y};}
},"table":{alias:eN,style:function(jy){return {decorator:cX};}
},"table/statusbar":{style:function(jz){return {decorator:dA,padding:[0,2]};}
},"table/column-button":{alias:t,style:function(jA){var jB=qx.core.Environment.get(eO);return {decorator:jB?bq:M,padding:3,icon:bI};}
},"table-column-reset-button":{include:dj,alias:dj,style:function(){return {icon:e};}
},"table-scroller":eN,"table-scroller/scrollbar-x":ce,"table-scroller/scrollbar-y":ce,"table-scroller/header":{style:function(jC){var jD=qx.core.Environment.get(eO);return {decorator:jD?bq:M,textColor:jC.disabled?r:undefined};}
},"table-scroller/pane":{style:function(jE){return {backgroundColor:dN};}
},"table-scroller/focus-indicator":{style:function(jF){return {decorator:ej};}
},"table-scroller/resize-line":{style:function(jG){return {backgroundColor:bD,width:2};}
},"table-header-cell":{alias:eL,style:function(jH){return {minWidth:13,minHeight:20,padding:jH.hovered?[3,4,2,4]:[3,4],decorator:jH.hovered?bY:bd,sortIcon:jH.sorted?(jH.sortedAscending?eI:bP):undefined};}
},"table-header-cell/label":{style:function(jI){return {minWidth:0,alignY:dv,paddingRight:5};}
},"table-header-cell/sort-icon":{style:function(jJ){return {alignY:dv,alignX:J,opacity:jJ.disabled?0.3:1};}
},"table-header-cell/icon":{style:function(jK){return {minWidth:0,alignY:dv,paddingRight:5,opacity:jK.disabled?0.3:1};}
},"table-editor-textfield":{include:eb,style:function(jL){return {decorator:undefined,padding:[2,2],backgroundColor:dC};}
},"table-editor-selectbox":{include:cT,alias:cT,style:function(jM){return {padding:[0,2],backgroundColor:dC};}
},"table-editor-combobox":{include:cc,alias:cc,style:function(jN){return {decorator:undefined,backgroundColor:dC};}
},"progressive-table-header":{alias:eN,style:function(jO){return {decorator:bH};}
},"progressive-table-header-cell":{alias:eL,style:function(jP){var jQ=qx.core.Environment.get(eO);return {minWidth:40,minHeight:25,paddingLeft:6,decorator:jQ?dB:eC};}
},"app-header":{style:function(jR){return {font:s,textColor:p,padding:[8,12],decorator:cy};}
},"app-header-label":o,"app-splitpane":{alias:bp,style:function(jS){return {padding:0};}
},"virtual-list":bg,"virtual-list/row-layer":cx,"row-layer":eN,"group-item":{include:o,alias:o,style:function(jT){return {padding:4,decorator:qx.core.Environment.get(eO)?eQ:c,textColor:cS,font:s};}
},"virtual-selectbox":cT,"virtual-selectbox/dropdown":dw,"virtual-selectbox/dropdown/list":{alias:H},"virtual-combobox":cc,"virtual-combobox/dropdown":dw,"virtual-combobox/dropdown/list":{alias:H},"virtual-tree":{include:bf,alias:bf,style:function(jU){return {itemHeight:26};}
},"virtual-tree-folder":ex,"virtual-tree-file":bn,"column-layer":eN,"cell":{style:function(jV){return {textColor:jV.selected?p:O,padding:[3,6],font:cq};}
},"cell-string":dx,"cell-number":{include:dx,style:function(jW){return {textAlign:J};}
},"cell-image":dx,"cell-boolean":{include:dx,style:function(jX){return {iconTrue:cB,iconFalse:bs};}
},"cell-atom":dx,"cell-date":dx,"cell-html":dx,"htmlarea":{"include":eN,style:function(jY){return {backgroundColor:h};}
},"progressbar":{style:function(ka){return {decorator:eG,padding:[1],backgroundColor:bW,width:200,height:20};}
},"progressbar/progress":{style:function(kb){var kc=kb.disabled?c:a;if(qx.core.Environment.get(eO)){kc+=eM;}
;return {decorator:kc};}
}}});}
)();
(function(){var c="qx.ui.decoration.Background",b="absolute",a="px";qx.Class.define(c,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage,qx.ui.decoration.MBackgroundColor],construct:function(d){qx.ui.decoration.Abstract.call(this);if(d!=null){this.setBackgroundColor(d);}
;}
,members:{__wq:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};}
,_isInitialized:function(){return !!this.__wq;}
,getMarkup:function(){if(this.__wq){return this.__wq;}
;var e={position:b,top:0,left:0};var f=this._generateBackgroundMarkup(e);return this.__wq=f;}
,resize:function(g,h,i){var j=this.getInsets();g.style.width=(h-j.left-j.right)+a;g.style.height=(i-j.top-j.bottom)+a;g.style.left=-j.left+a;g.style.top=-j.top+a;}
,tint:function(k,l){this._tintBackgroundColor(k,l,k.style);}
},destruct:function(){this.__wq=null;}
});}
)();
(function(){var j="px",i='</div>',h="qx.ui.decoration.Beveled",g="css.boxmodel",f="qx.debug",e='<div style="position:absolute;top:1px;left:1px;',d='border-bottom:',c='border-right:',b="",a="content",y='border-left:',x='border-top:',w="Number",v='<div style="position:absolute;top:1px;left:0px;',u='position:absolute;top:0px;left:1px;',t='<div style="overflow:hidden;font-size:0;line-height:0;">',s="absolute",r="1px",q='<div style="',p='border:',n="1px solid ",o="Color",l=";",m="_applyStyle",k='"></div>';qx.Class.define(h,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage,qx.ui.decoration.MBackgroundColor],construct:function(z,A,B){qx.ui.decoration.Abstract.call(this);if(z!=null){this.setOuterColor(z);}
;if(A!=null){this.setInnerColor(A);}
;if(B!=null){this.setInnerOpacity(B);}
;}
,properties:{innerColor:{check:o,nullable:true,apply:m},innerOpacity:{check:w,init:1,apply:m},outerColor:{check:o,nullable:true,apply:m}},members:{__wq:null,_getDefaultInsets:function(){return {top:2,right:2,bottom:2,left:2};}
,_isInitialized:function(){return !!this.__wq;}
,_applyStyle:function(){if(qx.core.Environment.get(f)){if(this.__wq){throw new Error("This decorator is already in-use. Modification is not possible anymore!");}
;}
;}
,getMarkup:function(){if(this.__wq){return this.__wq;}
;var C=qx.theme.manager.Color.getInstance();var D=[];var G=n+C.resolve(this.getOuterColor())+l;var F=n+C.resolve(this.getInnerColor())+l;D.push(t);D.push(q);D.push(p,G);D.push(qx.bom.element.Opacity.compile(0.35));D.push(k);D.push(v);D.push(y,G);D.push(c,G);D.push(qx.bom.element.Opacity.compile(1));D.push(k);D.push(q);D.push(u);D.push(x,G);D.push(d,G);D.push(qx.bom.element.Opacity.compile(1));D.push(k);var E={position:s,top:r,left:r,opacity:1};D.push(this._generateBackgroundMarkup(E));D.push(e);D.push(p,F);D.push(qx.bom.element.Opacity.compile(this.getInnerOpacity()));D.push(k);D.push(i);return this.__wq=D.join(b);}
,resize:function(H,I,J){if(I<4){I=4;}
;if(J<4){J=4;}
;if(qx.core.Environment.get(g)==a){var outerWidth=I-2;var outerHeight=J-2;var P=outerWidth;var O=outerHeight;var innerWidth=I-4;var innerHeight=J-4;}
else {var outerWidth=I;var outerHeight=J;var P=I-2;var O=J-2;var innerWidth=P;var innerHeight=O;}
;var R=j;var N=H.childNodes[0].style;N.width=outerWidth+R;N.height=outerHeight+R;var M=H.childNodes[1].style;M.width=outerWidth+R;M.height=O+R;var L=H.childNodes[2].style;L.width=P+R;L.height=outerHeight+R;var K=H.childNodes[3].style;K.width=P+R;K.height=O+R;var Q=H.childNodes[4].style;Q.width=innerWidth+R;Q.height=innerHeight+R;}
,tint:function(S,T){this._tintBackgroundColor(S,T,S.childNodes[3].style);}
},destruct:function(){this.__wq=null;}
});}
)();
(function(){var j="qx.debug.dispose",i="insetTop",h="insetBottom",g="sliceBottom",f="_applyFill",e="The value of the property 'rightSlice' is null! ",d="qx.debug",c="sliceLeft",b="_applyBaseImage",a="sliceRight",C="The value of the property 'bottomSlice' is null! ",B="String",A="The value of the property 'leftSlice' is null! ",z="insetRight",y="sliceTop",x="The value of the property 'topSlice' is null! ",w="insetLeft",v="qx.ui.decoration.Grid",u="-l",t="set",q="-t",r="-r",o="-b",p="shorthand",m="_applySlices",n="Please verify the image '",k="_applyInsets",l="' is present.",s="Number";qx.Class.define(v,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],construct:function(D,E){qx.core.Object.call(this);if(qx.ui.decoration.css3.BorderImage.IS_SUPPORTED){this.__zE=new qx.ui.decoration.css3.BorderImage();if(D){this.__Dx(D);}
;}
else {this.__zE=new qx.ui.decoration.GridDiv(D);}
;if(E!=null){this.__zE.setInsets(E);}
;if(qx.core.Environment.get(j)){this.__zE.$$ignoreDisposeWarning=true;}
;}
,properties:{baseImage:{check:B,nullable:true,apply:b},insetLeft:{check:s,nullable:true,apply:k},insetRight:{check:s,nullable:true,apply:k},insetBottom:{check:s,nullable:true,apply:k},insetTop:{check:s,nullable:true,apply:k},insets:{group:[i,z,h,w],mode:p},sliceLeft:{check:s,nullable:true,apply:m},sliceRight:{check:s,nullable:true,apply:m},sliceBottom:{check:s,nullable:true,apply:m},sliceTop:{check:s,nullable:true,apply:m},slices:{group:[y,a,g,c],mode:p},fill:{apply:f}},members:{__zE:null,getMarkup:function(){return this.__zE.getMarkup();}
,resize:function(F,G,H){this.__zE.resize(F,G,H);}
,tint:function(I,J){}
,getInsets:function(){return this.__zE.getInsets();}
,_applyInsets:function(K,L,name){var M=t+qx.lang.String.firstUp(name);this.__zE[M](K);}
,_applySlices:function(N,O,name){var P=t+qx.lang.String.firstUp(name);if(this.__zE[P]){this.__zE[P](N);}
;}
,_applyFill:function(Q,R,name){if(this.__zE.setFill){this.__zE.setFill(Q);}
;}
,_applyBaseImage:function(S,T){if(this.__zE instanceof qx.ui.decoration.GridDiv){this.__zE.setBaseImage(S);}
else {this.__Dx(S);}
;}
,__Dx:function(U){this.__zE.setBorderImage(U);var bf=qx.util.AliasManager.getInstance().resolve(U);var bg=/(.*)(\.[a-z]+)$/.exec(bf);var bb=bg[1];var be=bg[2];var X=qx.util.ResourceManager.getInstance();var bh=X.getImageHeight(bb+q+be);var V=X.getImageWidth(bb+r+be);var W=X.getImageHeight(bb+o+be);var bi=X.getImageWidth(bb+u+be);if(qx.core.Environment.get(d)&&!this.__zE instanceof qx.ui.decoration.css3.BorderImage){var Y=x+n+bb+q+be+l;var ba=e+n+bb+r+be+l;var bd=C+n+bb+o+be+l;var bc=A+n+bb+u+be+l;qx.core.Assert.assertNotNull(bh,Y);qx.core.Assert.assertNotNull(V,ba);qx.core.Assert.assertNotNull(W,bd);qx.core.Assert.assertNotNull(bi,bc);}
;if(bh&&V&&W&&bi){this.__zE.setSlice([bh,V,W,bi]);}
;}
},destruct:function(){this.__zE.dispose();this.__zE=null;}
});}
)();
(function(){var j="css.borderimage.standardsyntax",i="Boolean",h="px ",g="sliceBottom",f="solid",e=";'></div>",d="<div style='",c="qx.debug",b="sliceLeft",a="sliceRight",E="repeatX",D=" fill",C="String",B="qx.ui.decoration.css3.BorderImage",A="border-box",z="transparent",y='") ',x="sliceTop",w='url("',v="hidden",q="repeatY",r="absolute",o="repeat",p="",m="round",n="shorthand",k="px",l=" ",s="stretch",t="Integer",u="_applyStyle";qx.Class.define(B,{extend:qx.ui.decoration.Abstract,construct:function(F,G){qx.ui.decoration.Abstract.call(this);if(F!=null){this.setBorderImage(F);}
;if(G!=null){this.setSlice(G);}
;}
,statics:{IS_SUPPORTED:qx.bom.element.Style.isPropertySupported("borderImage")},properties:{borderImage:{check:C,nullable:true,apply:u},sliceTop:{check:t,init:0,apply:u},sliceRight:{check:t,init:0,apply:u},sliceBottom:{check:t,init:0,apply:u},sliceLeft:{check:t,init:0,apply:u},slice:{group:[x,a,g,b],mode:n},repeatX:{check:[s,o,m],init:s,apply:u},repeatY:{check:[s,o,m],init:s,apply:u},repeat:{group:[E,q],mode:n},fill:{check:i,init:true}},members:{__wq:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};}
,_isInitialized:function(){return !!this.__wq;}
,getMarkup:function(){if(this.__wq){return this.__wq;}
;var H=this._resolveImageUrl(this.getBorderImage());var I=[this.getSliceTop(),this.getSliceRight(),this.getSliceBottom(),this.getSliceLeft()];var J=[this.getRepeatX(),this.getRepeatY()].join(l);var K=this.getFill()&&qx.core.Environment.get(j)?D:p;this.__wq=[d,qx.bom.element.Style.compile({"borderImage":w+H+y+I.join(l)+K+l+J,"borderStyle":f,"borderColor":z,position:r,lineHeight:0,fontSize:0,overflow:v,boxSizing:A,borderWidth:I.join(h)+k}),e].join(p);return this.__wq;}
,resize:function(L,M,N){L.style.width=M+k;L.style.height=N+k;}
,tint:function(O,P){}
,_applyStyle:function(Q,R,name){if(qx.core.Environment.get(c)){if(this._isInitialized()){throw new Error("This decorator is already in-use. Modification is not possible anymore!");}
;}
;}
,_resolveImageUrl:function(S){return qx.util.ResourceManager.getInstance().toUri(qx.util.AliasManager.getInstance().resolve(S));}
},destruct:function(){this.__wq=null;}
});}
)();
(function(){var j="-tr",i="-l",h='</div>',g="scale",f="-br",e="-t",d="browser.quirksmode",c="-tl",b="-r",a='<div style="position:absolute;top:0;left:0;overflow:hidden;font-size:0;line-height:0;">',A="qx.debug",z="_applyBaseImage",y="-b",x="String",w="",v="-bl",u="qx.ui.decoration.GridDiv",t="-c",s="mshtml",r="engine.name",p="engine.version",q="scale-x",n="scale-y",o="no-repeat",l="0px",m="-1px",k="px";qx.Class.define(u,{extend:qx.ui.decoration.Abstract,construct:function(B,C){qx.ui.decoration.Abstract.call(this);if(B!=null){this.setBaseImage(B);}
;if(C!=null){this.setInsets(C);}
;}
,properties:{baseImage:{check:x,nullable:true,apply:z}},members:{_markup:null,_images:null,_edges:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};}
,_isInitialized:function(){return !!this._markup;}
,getMarkup:function(){if(this._markup){return this._markup;}
;var D=qx.bom.element.Decoration;var E=this._images;var F=this._edges;var G=[];G.push(a);G.push(D.create(E.tl,o,{top:0,left:0}));G.push(D.create(E.t,q,{top:0,left:F.left+k}));G.push(D.create(E.tr,o,{top:0,right:0}));G.push(D.create(E.bl,o,{bottom:0,left:0}));G.push(D.create(E.b,q,{bottom:0,left:F.left+k}));G.push(D.create(E.br,o,{bottom:0,right:0}));G.push(D.create(E.l,n,{top:F.top+k,left:0}));G.push(D.create(E.c,g,{top:F.top+k,left:F.left+k}));G.push(D.create(E.r,n,{top:F.top+k,right:0}));G.push(h);return this._markup=G.join(w);}
,resize:function(H,I,J){var K=this._edges;var innerWidth=I-K.left-K.right;var innerHeight=J-K.top-K.bottom;if(innerWidth<0){innerWidth=0;}
;if(innerHeight<0){innerHeight=0;}
;H.style.width=I+k;H.style.height=J+k;H.childNodes[1].style.width=innerWidth+k;H.childNodes[4].style.width=innerWidth+k;H.childNodes[7].style.width=innerWidth+k;H.childNodes[6].style.height=innerHeight+k;H.childNodes[7].style.height=innerHeight+k;H.childNodes[8].style.height=innerHeight+k;if((qx.core.Environment.get(r)==s)){if(parseFloat(qx.core.Environment.get(p))<7||(qx.core.Environment.get(d)&&parseFloat(qx.core.Environment.get(p))<8)){if(I%2==1){H.childNodes[2].style.marginRight=m;H.childNodes[5].style.marginRight=m;H.childNodes[8].style.marginRight=m;}
else {H.childNodes[2].style.marginRight=l;H.childNodes[5].style.marginRight=l;H.childNodes[8].style.marginRight=l;}
;if(J%2==1){H.childNodes[3].style.marginBottom=m;H.childNodes[4].style.marginBottom=m;H.childNodes[5].style.marginBottom=m;}
else {H.childNodes[3].style.marginBottom=l;H.childNodes[4].style.marginBottom=l;H.childNodes[5].style.marginBottom=l;}
;}
;}
;}
,tint:function(L,M){}
,_applyBaseImage:function(N,O){if(qx.core.Environment.get(A)){if(this._markup){throw new Error("This decorator is already in-use. Modification is not possible anymore!");}
;}
;if(N){var S=this._resolveImageUrl(N);var T=/(.*)(\.[a-z]+)$/.exec(S);var R=T[1];var Q=T[2];var P=this._images={tl:R+c+Q,t:R+e+Q,tr:R+j+Q,bl:R+v+Q,b:R+y+Q,br:R+f+Q,l:R+i+Q,c:R+t+Q,r:R+b+Q};this._edges=this._computeEdgeSizes(P);}
;}
,_resolveImageUrl:function(U){return qx.util.AliasManager.getInstance().resolve(U);}
,_computeEdgeSizes:function(V){var W=qx.util.ResourceManager.getInstance();return {top:W.getImageHeight(V.t),bottom:W.getImageHeight(V.b),left:W.getImageWidth(V.l),right:W.getImageWidth(V.r)};}
},destruct:function(){this._markup=this._images=this._edges=null;}
});}
)();
(function(){var cM="checkbox-start",cL="decoration/tabview/tab-button-top-active.png",cK="group-background",cJ="decoration/form/button-c.png",cI="keyboard-focus",cH="button-disabled-start",cG="selected-end",cF="table-header-hovered",cE="decoration/groupbox/groupbox.png",cD="decoration/pane/pane.png",bM="decoration/menu/background.png",bL="decoration/tabview/tabview-pane.png",bK="decoration/toolbar/toolbar-part.gif",bJ="input-focused-css",bI="decoration/menu/bar-background.png",bH="window-border-caption",bG="radiobutton-hovered",bF="tooltip-error-css",bE="radiobutton-checked-focused",bD="groupitem-end",cT="button-disabled-css",cU="group-border",cR="scrollbar-slider-vertical-css",cS="window-css",cP="selected-start",cQ="window-resize-frame-css",cN="tabview-end",cO="window-statusbar-background",cV="decoration/scrollbar/scrollbar-bg-vertical.png",cW="button-pressed-css",cm="toolbar-button-hovered-css",cl="window-caption-active-end",co="dotted",cn="checkbox-disabled-end",cq="window-caption-active-start",cp="button-focused",cs="menu-start",cr="decoration/form/tooltip-error.png",ck="window-captionbar-active-css",cj="qx/decoration/Modern",k="decoration/tabview/tab-button-right-inactive.png",l="border-toolbar-separator-left",m="decoration/form/button-checked.png",n="decoration/scrollbar/scrollbar-bg-horizontal.png",o="decoration/tabview/tab-button-left-active.png",p="decoration/tabview/tab-button-bottom-active.png",q="decoration/tabview/tab-button-bottom-inactive.png",r="decoration/form/button-disabled.png",s="decoration/form/button-pressed.png",t="background-splitpane",dl="decoration/form/button-checked-focused.png",dk="px",dj="decoration/window/statusbar.png",di="input-border-disabled",dq="checkbox-inner",dp="scrollbar-horizontal-css",dn="button-disabled-end",dm="toolbar-end",ds="groupitem-start",dr="decoration/form/button-hovered.png",bd="checkbox-hovered-inner",be="input-focused-start",bb="scrollbar-start",bc="scrollbar-slider-start",bh="radiobutton-checked-disabled",bi="checkbox-focused",bf="qx.theme.modern.Decoration",bg="decoration/form/button.png",Y="decoration/app-header.png",ba="decoration/form/button-focused.png",L="radiobutton-checked-hovered",K="button-hovered-css",N="checkbox-disabled-inner",M="border-toolbar-separator-right",H="border-focused",G="decoration/shadow/shadow.png",J="scrollbar-end",I="decoration/group-item.png",F="window-caption-inactive-end",E="checkbox-end",bn="tabview-inactive-end",bo="input-end",bp="button-checked-focused-css",bq="decoration/tabview/tab-button-left-inactive.png",bj="input-focused-inner-invalid",bk="menu-separator-top",bl="window-caption-inactive-start",bm="scrollbar-slider-end",br="decoration/window/captionbar-inactive.png",bs="decoration/tabview/tab-button-top-inactive.png",V="pane-end",U="input-focused-end",T="decoration/form/tooltip-error-arrow.png",S="menubar-start",R="toolbar-start",Q="checkbox-disabled-start",P="radiobutton-focused",O="pane-start",X="table-focus-indicator",W="button-checked-css",bt="decoration/form/button-checked-c.png",bu="menu-separator-bottom",bv="decoration/shadow/shadow-small.png",bw="input-start",bx="decoration/window/captionbar-active.png",by="decoration/tabview/tab-button-right-active.png",bz="decoration/toolbar/toolbar-gradient.png",bA="checkbox-hovered-inner-invalid",bB="checkbox-disabled-border",bC="button-hovered-end",bQ="repeat-y",bP="border-dragover",bO="button-hovered-start",bN="tooltip-error",bU="progressive-table-header-border-right",bT="decoration/scrollbar/scrollbar-button-bg-vertical.png",bS="radiobutton-background",bR="decoration/form/tooltip-error-arrow-right.png",bW="checkbox-focus",bV="scrollbar-slider-horizontal-css",cf="menu-end",cg="decoration/selection.png",cd="horizontal",ce="table-header-start",cb="decoration/scrollbar/scrollbar-button-bg-horizontal.png",cc="decoration/form/input-focused.png",bY="right",ca="checkbox-hovered-invalid",ch="decoration/table/header-cell.png",ci="tabview-inactive-start",cw="table-header-end",cv="border-button",cy="border-focused-invalid",cx="button-focused-css",cA="checkbox-border",cz="tabview-start",cC="radiobutton-disabled",cB="radiobutton-hovered-invalid",cu="tabview-page-button-top-active-css",ct="button-border-disabled",de="tabview-page-button-top-inactive-css",df="decoration/form/input.png",dg="border-toolbar-border-inner",dh="input-css",da="border-toolbar-button-outer",db="top",dc="border-disabled",dd="background-pane",cX="no-repeat",cY="border-input",j="border-inner-input",i="border-inner-scrollbar",h="radiobutton-checked",g="window-border",f="tabview-inactive",e="checkbox",d="radiobutton",c="button-css",b="border-separator",a="checkbox-hovered",w="button-start",x="button-end",u="background-light",v="tabview-background",A="repeat-x",B="shadow",y="border-invalid",z="border-main",C="scale",D="solid",bX="invalid";qx.Theme.define(bf,{aliases:{decoration:cj},decorations:{"main":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:z}},"selected":{decorator:qx.ui.decoration.Background,style:{backgroundImage:cg,backgroundRepeat:C}},"selected-css":{decorator:[qx.ui.decoration.MLinearBackgroundGradient],style:{startColorPosition:0,endColorPosition:100,startColor:cP,endColor:cG}},"selected-dragover":{decorator:qx.ui.decoration.Single,style:{backgroundImage:cg,backgroundRepeat:C,bottom:[2,D,bP]}},"dragover":{decorator:qx.ui.decoration.Single,style:{bottom:[2,D,bP]}},"pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:cD,insets:[0,2,3,0]}},"pane-css":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBorderRadius,qx.ui.decoration.MBoxShadow,qx.ui.decoration.MLinearBackgroundGradient],style:{width:1,color:v,radius:3,shadowColor:B,shadowBlurRadius:2,shadowLength:0,gradientStart:[O,0],gradientEnd:[V,100]}},"group":{decorator:qx.ui.decoration.Grid,style:{baseImage:cE}},"group-css":{decorator:[qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MBorderRadius,qx.ui.decoration.MSingleBorder],style:{backgroundColor:cK,radius:4,color:cU,width:1}},"border-invalid":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bX,innerColor:j,innerOpacity:0.5,backgroundImage:df,backgroundRepeat:A,backgroundColor:u}},"keyboard-focus":{decorator:qx.ui.decoration.Single,style:{width:1,color:cI,style:co}},"radiobutton":{decorator:[qx.ui.decoration.MDoubleBorder,qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MBorderRadius,qx.ui.decoration.MBoxShadow],style:{backgroundColor:bS,radius:5,width:1,innerWidth:2,color:cA,innerColor:bS,shadowLength:0,shadowBlurRadius:0,shadowColor:bW,insetLeft:5}},"radiobutton-checked":{include:d,style:{backgroundColor:h}},"radiobutton-checked-focused":{include:h,style:{shadowBlurRadius:4}},"radiobutton-checked-hovered":{include:h,style:{innerColor:a}},"radiobutton-focused":{include:d,style:{shadowBlurRadius:4}},"radiobutton-hovered":{include:d,style:{backgroundColor:a,innerColor:a}},"radiobutton-disabled":{include:d,style:{innerColor:cC,backgroundColor:cC,color:bB}},"radiobutton-checked-disabled":{include:cC,style:{backgroundColor:bh}},"radiobutton-invalid":{include:d,style:{color:bX}},"radiobutton-checked-invalid":{include:h,style:{color:bX}},"radiobutton-checked-focused-invalid":{include:bE,style:{color:bX,shadowColor:bX}},"radiobutton-checked-hovered-invalid":{include:L,style:{color:bX,innerColor:cB}},"radiobutton-focused-invalid":{include:P,style:{color:bX,shadowColor:bX}},"radiobutton-hovered-invalid":{include:bG,style:{color:bX,innerColor:cB,backgroundColor:cB}},"separator-horizontal":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:b}},"separator-vertical":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:b}},"tooltip-error":{decorator:qx.ui.decoration.Grid,style:{baseImage:cr,insets:[2,0,2,2]}},"tooltip-error-css":{decorator:[qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MBorderRadius,qx.ui.decoration.MBoxShadow],style:{backgroundColor:bN,radius:4,shadowColor:B,shadowBlurRadius:2,shadowLength:1,insets:[2,0,0,2]}},"tooltip-error-left":{include:bN,style:{insets:[2,5,5,2]}},"tooltip-error-css-left":{include:bF,style:{insets:[-1,0,0,-2]}},"tooltip-error-arrow":{decorator:qx.ui.decoration.Background,style:{backgroundImage:T,backgroundPositionY:db,backgroundRepeat:cX,insets:[-4,0,0,13]}},"tooltip-error-arrow-left":{decorator:qx.ui.decoration.Background,style:{backgroundImage:bR,backgroundPositionY:db,backgroundPositionX:bY,backgroundRepeat:cX,insets:[-4,-13,0,0]}},"tooltip-error-arrow-left-css":{decorator:qx.ui.decoration.Background,style:{backgroundImage:bR,backgroundPositionY:db,backgroundPositionX:bY,backgroundRepeat:cX,insets:[-6,-13,0,0]}},"shadow-window":{decorator:qx.ui.decoration.Grid,style:{baseImage:G,insets:[0,8,8,0]}},"shadow-window-css":{decorator:[qx.ui.decoration.MBoxShadow,qx.ui.decoration.MBackgroundColor],style:{shadowColor:B,shadowBlurRadius:2,shadowLength:1}},"shadow-popup":{decorator:qx.ui.decoration.Grid,style:{baseImage:bv,insets:[0,3,3,0]}},"popup-css":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBoxShadow,qx.ui.decoration.MBackgroundColor],style:{width:1,color:z,shadowColor:B,shadowBlurRadius:3,shadowLength:1}},"scrollbar-horizontal":{decorator:qx.ui.decoration.Background,style:{backgroundImage:n,backgroundRepeat:A}},"scrollbar-vertical":{decorator:qx.ui.decoration.Background,style:{backgroundImage:cV,backgroundRepeat:bQ}},"scrollbar-slider-horizontal":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:cb,backgroundRepeat:C,outerColor:z,innerColor:i,innerOpacity:0.5}},"scrollbar-slider-horizontal-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:cb,backgroundRepeat:C,outerColor:dc,innerColor:i,innerOpacity:0.3}},"scrollbar-slider-vertical":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bT,backgroundRepeat:C,outerColor:z,innerColor:i,innerOpacity:0.5}},"scrollbar-slider-vertical-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bT,backgroundRepeat:C,outerColor:dc,innerColor:i,innerOpacity:0.3}},"scrollbar-horizontal-css":{decorator:[qx.ui.decoration.MLinearBackgroundGradient],style:{gradientStart:[bb,0],gradientEnd:[J,100]}},"scrollbar-vertical-css":{include:dp,style:{orientation:cd}},"scrollbar-slider-horizontal-css":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MLinearBackgroundGradient],style:{gradientStart:[bc,0],gradientEnd:[bm,100],color:z,width:1}},"scrollbar-slider-vertical-css":{include:bV,style:{orientation:cd}},"scrollbar-slider-horizontal-disabled-css":{include:bV,style:{color:ct}},"scrollbar-slider-vertical-disabled-css":{include:cR,style:{color:ct}},"button-css":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MLinearBackgroundGradient,qx.ui.decoration.MBorderRadius],style:{radius:3,color:cv,width:1,startColor:w,endColor:x,startColorPosition:35,endColorPosition:100}},"button-disabled-css":{include:c,style:{color:ct,startColor:cH,endColor:dn}},"button-hovered-css":{include:c,style:{startColor:bO,endColor:bC}},"button-checked-css":{include:c,style:{endColor:w,startColor:x}},"button-pressed-css":{include:c,style:{endColor:bO,startColor:bC}},"button-focused-css":{decorator:[qx.ui.decoration.MDoubleBorder,qx.ui.decoration.MLinearBackgroundGradient,qx.ui.decoration.MBorderRadius],style:{radius:3,color:cv,width:1,innerColor:cp,innerWidth:2,startColor:w,endColor:x,startColorPosition:30,endColorPosition:100}},"button-checked-focused-css":{include:cx,style:{endColor:w,startColor:x}},"button-invalid-css":{include:c,style:{color:y}},"button-disabled-invalid-css":{include:cT,style:{color:y}},"button-hovered-invalid-css":{include:K,style:{color:y}},"button-checked-invalid-css":{include:W,style:{color:y}},"button-pressed-invalid-css":{include:cW,style:{color:y}},"button-focused-invalid-css":{include:cx,style:{color:y}},"button-checked-focused-invalid-css":{include:bp,style:{color:y}},"button":{decorator:qx.ui.decoration.Grid,style:{baseImage:bg,insets:2}},"button-disabled":{decorator:qx.ui.decoration.Grid,style:{baseImage:r,insets:2}},"button-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:ba,insets:2}},"button-hovered":{decorator:qx.ui.decoration.Grid,style:{baseImage:dr,insets:2}},"button-pressed":{decorator:qx.ui.decoration.Grid,style:{baseImage:s,insets:2}},"button-checked":{decorator:qx.ui.decoration.Grid,style:{baseImage:m,insets:2}},"button-checked-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:dl,insets:2}},"button-invalid-shadow":{decorator:qx.ui.decoration.Single,style:{color:bX,width:1,insets:0}},"checkbox-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bX,innerColor:cy,insets:[0]}},"checkbox":{decorator:[qx.ui.decoration.MDoubleBorder,qx.ui.decoration.MLinearBackgroundGradient,qx.ui.decoration.MBoxShadow],style:{width:1,color:cA,innerWidth:1,innerColor:dq,gradientStart:[cM,0],gradientEnd:[E,100],shadowLength:0,shadowBlurRadius:0,shadowColor:bW,insetLeft:4}},"checkbox-hovered":{include:e,style:{innerColor:bd,gradientStart:[a,0],gradientEnd:[a,100]}},"checkbox-focused":{include:e,style:{shadowBlurRadius:4}},"checkbox-disabled":{include:e,style:{color:bB,innerColor:N,gradientStart:[Q,0],gradientEnd:[cn,100]}},"checkbox-invalid":{include:e,style:{color:bX}},"checkbox-hovered-invalid":{include:a,style:{color:bX,innerColor:bA,gradientStart:[ca,0],gradientEnd:[ca,100]}},"checkbox-focused-invalid":{include:bi,style:{color:bX,shadowColor:bX}},"input-css":{decorator:[qx.ui.decoration.MDoubleBorder,qx.ui.decoration.MLinearBackgroundGradient,qx.ui.decoration.MBackgroundColor],style:{color:cY,innerColor:j,innerWidth:1,width:1,backgroundColor:u,startColor:bw,endColor:bo,startColorPosition:0,endColorPosition:12,colorPositionUnit:dk}},"border-invalid-css":{include:dh,style:{color:y}},"input-focused-css":{include:dh,style:{startColor:be,innerColor:U,endColorPosition:4}},"input-focused-invalid-css":{include:bJ,style:{innerColor:bj,color:y}},"input-disabled-css":{include:dh,style:{color:di}},"input":{decorator:qx.ui.decoration.Beveled,style:{outerColor:cY,innerColor:j,innerOpacity:0.5,backgroundImage:df,backgroundRepeat:A,backgroundColor:u}},"input-focused":{decorator:qx.ui.decoration.Beveled,style:{outerColor:cY,innerColor:H,backgroundImage:cc,backgroundRepeat:A,backgroundColor:u}},"input-focused-invalid":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bX,innerColor:cy,backgroundImage:cc,backgroundRepeat:A,backgroundColor:u,insets:[2]}},"input-disabled":{decorator:qx.ui.decoration.Beveled,style:{outerColor:dc,innerColor:j,innerOpacity:0.5,backgroundImage:df,backgroundRepeat:A,backgroundColor:u}},"toolbar":{decorator:qx.ui.decoration.Background,style:{backgroundImage:bz,backgroundRepeat:C}},"toolbar-css":{decorator:[qx.ui.decoration.MLinearBackgroundGradient],style:{startColorPosition:40,endColorPosition:60,startColor:R,endColor:dm}},"toolbar-button-hovered":{decorator:qx.ui.decoration.Beveled,style:{outerColor:da,innerColor:dg,backgroundImage:cJ,backgroundRepeat:C}},"toolbar-button-checked":{decorator:qx.ui.decoration.Beveled,style:{outerColor:da,innerColor:dg,backgroundImage:bt,backgroundRepeat:C}},"toolbar-button-hovered-css":{decorator:[qx.ui.decoration.MDoubleBorder,qx.ui.decoration.MLinearBackgroundGradient,qx.ui.decoration.MBorderRadius],style:{color:da,width:1,innerWidth:1,innerColor:dg,radius:2,gradientStart:[w,30],gradientEnd:[x,100]}},"toolbar-button-checked-css":{include:cm,style:{gradientStart:[x,30],gradientEnd:[w,100]}},"toolbar-separator":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,widthRight:1,colorLeft:l,colorRight:M,styleLeft:D,styleRight:D}},"toolbar-part":{decorator:qx.ui.decoration.Background,style:{backgroundImage:bK,backgroundRepeat:bQ}},"tabview-pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:bL,insets:[4,6,7,4]}},"tabview-pane-css":{decorator:[qx.ui.decoration.MBorderRadius,qx.ui.decoration.MLinearBackgroundGradient,qx.ui.decoration.MSingleBorder],style:{width:1,color:g,radius:3,gradientStart:[cz,90],gradientEnd:[cN,100]}},"tabview-page-button-top-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:cL}},"tabview-page-button-top-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:bs}},"tabview-page-button-bottom-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:p}},"tabview-page-button-bottom-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:q}},"tabview-page-button-left-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:o}},"tabview-page-button-left-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:bq}},"tabview-page-button-right-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:by}},"tabview-page-button-right-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:k}},"tabview-page-button-top-active-css":{decorator:[qx.ui.decoration.MBorderRadius,qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MBoxShadow],style:{radius:[3,3,0,0],width:[1,1,0,1],color:v,backgroundColor:cz,shadowLength:1,shadowColor:B,shadowBlurRadius:2}},"tabview-page-button-top-inactive-css":{decorator:[qx.ui.decoration.MBorderRadius,qx.ui.decoration.MSingleBorder,qx.ui.decoration.MLinearBackgroundGradient],style:{radius:[3,3,0,0],color:f,colorBottom:v,width:1,gradientStart:[ci,0],gradientEnd:[bn,100]}},"tabview-page-button-bottom-active-css":{include:cu,style:{radius:[0,0,3,3],width:[0,1,1,1],backgroundColor:ci,shadowLength:0,shadowBlurRadius:0}},"tabview-page-button-bottom-inactive-css":{include:de,style:{radius:[0,0,3,3],width:[0,1,1,1],colorBottom:f,colorTop:v}},"tabview-page-button-left-active-css":{include:cu,style:{radius:[3,0,0,3],width:[1,0,1,1],shadowLength:0,shadowBlurRadius:0}},"tabview-page-button-left-inactive-css":{include:de,style:{radius:[3,0,0,3],width:[1,0,1,1],colorBottom:f,colorRight:v}},"tabview-page-button-right-active-css":{include:cu,style:{radius:[0,3,3,0],width:[1,1,1,0],shadowLength:0,shadowBlurRadius:0}},"tabview-page-button-right-inactive-css":{include:de,style:{radius:[0,3,3,0],width:[1,1,1,0],colorBottom:f,colorLeft:v}},"splitpane":{decorator:qx.ui.decoration.Uniform,style:{backgroundColor:dd,width:3,color:t,style:D}},"window":{decorator:qx.ui.decoration.Single,style:{backgroundColor:dd,width:1,color:z,widthTop:0}},"window-captionbar-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:bx}},"window-captionbar-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:br}},"window-statusbar":{decorator:qx.ui.decoration.Grid,style:{baseImage:dj}},"window-css":{decorator:[qx.ui.decoration.MBorderRadius,qx.ui.decoration.MBoxShadow,qx.ui.decoration.MSingleBorder],style:{radius:[5,5,0,0],shadowBlurRadius:4,shadowLength:2,shadowColor:B}},"window-incl-statusbar-css":{include:cS,style:{radius:[5,5,5,5]}},"window-resize-frame-css":{decorator:[qx.ui.decoration.MBorderRadius,qx.ui.decoration.MSingleBorder],style:{radius:[5,5,0,0],width:1,color:z}},"window-resize-frame-incl-statusbar-css":{include:cQ,style:{radius:[5,5,5,5]}},"window-captionbar-active-css":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBorderRadius,qx.ui.decoration.MLinearBackgroundGradient],style:{width:1,color:g,colorBottom:bH,radius:[5,5,0,0],gradientStart:[cq,30],gradientEnd:[cl,70]}},"window-captionbar-inactive-css":{include:ck,style:{gradientStart:[bl,30],gradientEnd:[F,70]}},"window-statusbar-css":{decorator:[qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBorderRadius],style:{backgroundColor:cO,width:[0,1,1,1],color:g,radius:[0,0,5,5]}},"window-pane-css":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundColor],style:{backgroundColor:dd,width:1,color:g,widthTop:0}},"table":{decorator:qx.ui.decoration.Single,style:{width:1,color:z,style:D}},"table-statusbar":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:z,style:D}},"table-scroller-header":{decorator:qx.ui.decoration.Single,style:{backgroundImage:ch,backgroundRepeat:C,widthBottom:1,colorBottom:z,style:D}},"table-scroller-header-css":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MLinearBackgroundGradient],style:{gradientStart:[ce,10],gradientEnd:[cw,90],widthBottom:1,colorBottom:z}},"table-header-cell":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:b,styleRight:D}},"table-header-cell-hovered":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:b,styleRight:D,widthBottom:1,colorBottom:cF,styleBottom:D}},"table-scroller-focus-indicator":{decorator:qx.ui.decoration.Single,style:{width:2,color:X,style:D}},"progressive-table-header":{decorator:qx.ui.decoration.Single,style:{width:1,color:z,style:D}},"progressive-table-header-cell":{decorator:qx.ui.decoration.Single,style:{backgroundImage:ch,backgroundRepeat:C,widthRight:1,colorRight:bU,style:D}},"progressive-table-header-cell-css":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MLinearBackgroundGradient],style:{gradientStart:[ce,10],gradientEnd:[cw,90],widthRight:1,colorRight:bU}},"menu":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bM,backgroundRepeat:C,width:1,color:z,style:D}},"menu-css":{decorator:[qx.ui.decoration.MLinearBackgroundGradient,qx.ui.decoration.MBoxShadow,qx.ui.decoration.MSingleBorder],style:{gradientStart:[cs,0],gradientEnd:[cf,100],shadowColor:B,shadowBlurRadius:2,shadowLength:1,width:1,color:z}},"menu-separator":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:bk,widthBottom:1,colorBottom:bu}},"menubar":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bI,backgroundRepeat:C,width:1,color:b,style:D}},"menubar-css":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MLinearBackgroundGradient],style:{gradientStart:[S,0],gradientEnd:[cf,100],width:1,color:b}},"app-header":{decorator:qx.ui.decoration.Background,style:{backgroundImage:Y,backgroundRepeat:C}},"progressbar":{decorator:qx.ui.decoration.Single,style:{width:1,color:cY}},"group-item":{decorator:qx.ui.decoration.Background,style:{backgroundImage:I,backgroundRepeat:C}},"group-item-css":{decorator:[qx.ui.decoration.MLinearBackgroundGradient],style:{startColorPosition:0,endColorPosition:100,startColor:ds,endColor:bD}}}});}
)();
(function(){var bB="black",bA="#ffffdd",bz="#b6b6b6",by="#004DAD",bx="#BABABA",bw="#005BC3",bv="#334866",bu="#CECECE",bt="#D9D9D9",bs="#D8D8D8",bh="#99C3FE",bg="#001533",bf="#B3B3B3",be="#D5D5D5",bd="#C3C3C3",bc="#DDDDDD",bb="#FF9999",ba="css.rgba",Y="#E8E8E9",X="#084FAA",bI="#C5C5C5",bJ="rgba(0, 0, 0, 0.4)",bG="#DBDBDB",bH="#4a4a4a",bE="#83BAEA",bF="#D7E7F4",bC="#07125A",bD="#FAF2F2",bK="#87AFE7",bL="#F7EAEA",bl="#777D8D",bk="#FBFBFB",bn="#CACACA",bm="#909090",bp="#9B9B9B",bo="#F0F9FE",br="#314a6e",bq="#B4B4B4",bj="#787878",bi="qx.theme.modern.Color",a="#000000",b="#26364D",c="#A7A7A7",d="#D1E4FF",e="#5CB0FD",f="#EAEAEA",g="#003B91",h="#80B4EF",i="#FF6B78",j="#949494",bP="#808080",bO="#930000",bN="#7B7B7B",bM="#C82C2C",bT="#DFDFDF",bS="#B6B6B6",bR="#0880EF",bQ="#4d4d4d",bV="#f4f4f4",bU="#7B7A7E",H="#D0D0D0",I="#f8f8f8",F="#404955",G="#959595",L="#AAAAAA",M="#F7E9E9",J="#314A6E",K="#C72B2B",D="#FAFAFA",E="#FBFCFB",r="#B2D2FF",q="#666666",t="#CBC8CD",s="#999999",n="#8EB8D6",m="#b8b8b8",p="#727272",o="#33508D",l="#F1F1F1",k="#990000",R="#00368A",S="#1a1a1a",T="#00204D",U="gray",N="#F4F4F4",O="#fffefe",P="#AFAFAF",Q="#084FAB",V="#FCFCFC",W="#CCC",B="#F2F2F2",A="#F0F0F0",z="#E8E8E8",y="#CCCCCC",x="#EFEFEF",w="#EEEEEE",v="#E4E4E4",u="#F3F3F3",C="white";qx.Theme.define(bi,{colors:{"background-application":bT,"background-pane":u,"background-light":V,"background-medium":w,"background-splitpane":P,"background-tip":bA,"background-tip-error":K,"background-odd":v,"htmlarea-background":C,"progressbar-background":C,"text-light":bm,"text-gray":bH,"text-label":S,"text-title":br,"text-input":a,"text-hovered":bg,"text-disabled":bU,"text-selected":O,"text-active":b,"text-inactive":F,"text-placeholder":t,"border-inner-scrollbar":C,"border-main":bQ,"menu-separator-top":bI,"menu-separator-bottom":D,"border-separator":bP,"border-toolbar-button-outer":bz,"border-toolbar-border-inner":I,"border-toolbar-separator-right":bV,"border-toolbar-separator-left":m,"border-input":bv,"border-inner-input":C,"border-disabled":bS,"border-pane":T,"border-button":q,"border-column":y,"border-focused":bh,"invalid":k,"border-focused-invalid":bb,"border-dragover":o,"keyboard-focus":bB,"table-pane":u,"table-focus-indicator":bR,"table-row-background-focused-selected":Q,"table-row-background-focused":h,"table-row-background-selected":Q,"table-row-background-even":u,"table-row-background-odd":v,"table-row-selected":O,"table-row":S,"table-row-line":W,"table-column-line":W,"table-header-hovered":C,"progressive-table-header":L,"progressive-table-header-border-right":B,"progressive-table-row-background-even":N,"progressive-table-row-background-odd":v,"progressive-progressbar-background":U,"progressive-progressbar-indicator-done":y,"progressive-progressbar-indicator-undone":C,"progressive-progressbar-percent-background":U,"progressive-progressbar-percent-text":C,"selected-start":by,"selected-end":R,"tabview-background":bC,"shadow":qx.core.Environment.get(ba)?bJ:s,"pane-start":bk,"pane-end":A,"group-background":z,"group-border":bq,"radiobutton-background":x,"checkbox-border":J,"checkbox-focus":bK,"checkbox-hovered":r,"checkbox-hovered-inner":d,"checkbox-inner":w,"checkbox-start":v,"checkbox-end":u,"checkbox-disabled-border":bj,"checkbox-disabled-inner":bn,"checkbox-disabled-start":H,"checkbox-disabled-end":bs,"checkbox-hovered-inner-invalid":bD,"checkbox-hovered-invalid":M,"radiobutton-checked":bw,"radiobutton-disabled":be,"radiobutton-checked-disabled":bN,"radiobutton-hovered-invalid":bL,"tooltip-error":bM,"scrollbar-start":y,"scrollbar-end":l,"scrollbar-slider-start":w,"scrollbar-slider-end":bd,"button-border-disabled":G,"button-start":A,"button-end":P,"button-disabled-start":N,"button-disabled-end":bx,"button-hovered-start":bo,"button-hovered-end":n,"button-focused":bE,"border-invalid":bO,"input-start":A,"input-end":E,"input-focused-start":bF,"input-focused-end":e,"input-focused-inner-invalid":i,"input-border-disabled":bp,"input-border-inner":C,"toolbar-start":x,"toolbar-end":bc,"window-border":T,"window-border-caption":p,"window-caption-active-text":C,"window-caption-active-start":X,"window-caption-active-end":g,"window-caption-inactive-start":B,"window-caption-inactive-end":bG,"window-statusbar-background":x,"tabview-start":V,"tabview-end":w,"tabview-inactive":bl,"tabview-inactive-start":f,"tabview-inactive-end":bu,"table-header-start":z,"table-header-end":bf,"menu-start":Y,"menu-end":bt,"menubar-start":z,"groupitem-start":c,"groupitem-end":j,"groupitem-text":C,"virtual-row-layer-background-even":C,"virtual-row-layer-background-odd":C}});}
)();
(function(){var t="monospace",s="Courier New",r="Lucida Console",q="Monaco",p="qx.theme.modern.Font",o="DejaVu Sans Mono",n="Consolas",m="Liberation Sans",l="Tahoma",k="sans-serif",d="Arial",j="Lucida Grande",g="Candara",c="Segoe UI",b="osx",f="win",e="7",h="vista",a="os.name",i="os.version";qx.Theme.define(p,{fonts:{"default":{size:(qx.core.Environment.get(a)==f&&(qx.core.Environment.get(i)==e||qx.core.Environment.get(i)==h))?12:11,lineHeight:1.4,family:qx.core.Environment.get(a)==b?[j]:((qx.core.Environment.get(a)==f&&(qx.core.Environment.get(i)==e||qx.core.Environment.get(i)==h)))?[c,g]:[l,m,d,k]},"bold":{size:(qx.core.Environment.get(a)==f&&(qx.core.Environment.get(i)==e||qx.core.Environment.get(i)==h))?12:11,lineHeight:1.4,family:qx.core.Environment.get(a)==b?[j]:((qx.core.Environment.get(a)==f&&(qx.core.Environment.get(i)==e||qx.core.Environment.get(i)==h)))?[c,g]:[l,m,d,k],bold:true},"small":{size:(qx.core.Environment.get(a)==f&&(qx.core.Environment.get(i)==e||qx.core.Environment.get(i)==h))?11:10,lineHeight:1.4,family:qx.core.Environment.get(a)==b?[j]:((qx.core.Environment.get(a)==f&&(qx.core.Environment.get(i)==e||qx.core.Environment.get(i)==h)))?[c,g]:[l,m,d,k]},"monospace":{size:11,lineHeight:1.4,family:qx.core.Environment.get(a)==b?[r,q]:((qx.core.Environment.get(a)==f&&(qx.core.Environment.get(i)==e||qx.core.Environment.get(i)==h)))?[n]:[n,o,s,t]}}});}
)();
(function(){var b="qx.theme.Modern",a="Modern";qx.Theme.define(b,{title:a,meta:{color:qx.theme.modern.Color,decoration:qx.theme.modern.Decoration,font:qx.theme.modern.Font,appearance:qx.theme.modern.Appearance,icon:qx.theme.icon.Tango}});}
)();
(function(){var e="qx.ui.decoration.Double",d="css.boxmodel",c="content",b="scale",a="px";qx.Class.define(e,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MDoubleBorder],construct:function(f,g,h,innerWidth,i){qx.ui.decoration.Abstract.call(this);if(f!=null){this.setWidth(f);}
;if(g!=null){this.setStyle(g);}
;if(h!=null){this.setColor(h);}
;if(innerWidth!=null){this.setInnerWidth(innerWidth);}
;if(i!=null){this.setInnerColor(i);}
;}
,members:{__wq:null,_getDefaultInsets:function(){return this._getDefaultInsetsForBorder();}
,_isInitialized:function(){return !!this.__wq;}
,getMarkup:function(){if(this.__wq){return this.__wq;}
;var j={};this._styleBorder(j);return this.__wq=this._generateMarkup(j);}
,resize:function(k,l,m){var r=this.getBackgroundImage()&&this.getBackgroundRepeat()==b;var p=this.getInsets();if(r||qx.core.Environment.get(d)==c){var innerWidth=l-p.left-p.right;var innerHeight=m-p.top-p.bottom;}
else {var n=p.top-this.getInnerWidthTop();var s=p.bottom-this.getInnerWidthBottom();var o=p.left-this.getInnerWidthLeft();var q=p.right-this.getInnerWidthRight();var innerWidth=l-o-q;var innerHeight=m-n-s;}
;if(innerWidth<0){innerWidth=0;}
;if(innerHeight<0){innerHeight=0;}
;if(k.firstChild){k.firstChild.style.width=innerWidth+a;k.firstChild.style.height=innerHeight+a;}
;k.style.left=(p.left-this.getWidthLeft()-this.getInnerWidthLeft())+a;k.style.top=(p.top-this.getWidthTop()-this.getInnerWidthTop())+a;}
,tint:function(t,u){this._tintBackgroundColor(t,u,t.style);}
},destruct:function(){this.__wq=null;}
});}
)();
(function(){var j="black",i="#FFF",h="effect",g="table-focus-indicator",f="border-focused-invalid",e="qx/decoration/Classic",d="border-lead",c="decoration/shadow/shadow-small.png",b="qx.theme.classic.Decoration",a="dotted",z="tooltip-text",y="invalid",x="white",w="decoration/shadow/shadow.png",v="border-separator",u="table-header-border",t="border-focused-light",s="border-focused-dark",r="border-focused-light-shadow",q="border-focused-dark-shadow",o="gray",p="solid",m="border-light-shadow",n="border-dark",k="border-light",l="border-dark-shadow";qx.Theme.define(b,{aliases:{decoration:e},decorations:{"main":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:n}},"keyboard-focus":{decorator:qx.ui.decoration.Single,style:{width:1,color:j,style:a}},"inset":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[l,k,k,l],innerColor:[n,m,m,n]}},"outset":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[m,n,n,m],innerColor:[k,l,l,k]}},"groove":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[l,k,k,l],innerColor:[k,l,l,k]}},"ridge":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[k,l,l,k],innerColor:[l,k,k,l]}},"inset-thin":{decorator:qx.ui.decoration.Single,style:{width:1,color:[l,k,k,l]}},"outset-thin":{decorator:qx.ui.decoration.Single,style:{width:1,color:[k,l,l,k]}},"focused-inset":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[q,t,t,q],innerColor:[s,r,r,s]}},"focused-outset":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[r,s,s,r],innerColor:[t,q,q,t]}},"border-invalid":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[l,k,k,l],innerColor:y}},"separator-horizontal":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:v}},"separator-vertical":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:v}},"shadow":{decorator:qx.ui.decoration.Grid,style:{baseImage:w,insets:[4,8,8,4]}},"shadow-window":{decorator:qx.ui.decoration.Grid,style:{baseImage:w,insets:[4,8,8,4]}},"shadow-small":{decorator:qx.ui.decoration.Grid,style:{baseImage:c,insets:[0,3,3,0]}},"checkbox-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:y,innerColor:f,insets:[0]}},"lead-item":{decorator:qx.ui.decoration.Uniform,style:{width:1,style:a,color:d}},"tooltip":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:z}},"tooltip-error":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:z}},"toolbar-separator":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:l}},"toolbar-part-handle":{decorator:qx.ui.decoration.Single,style:{width:1,style:p,colorTop:x,colorLeft:x,colorRight:l,colorBottom:l}},"menu-separator":{decorator:qx.ui.decoration.Single,style:{widthTop:1,widthBottom:1,colorTop:n,colorBottom:k}},"datechooser-date-pane":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:o,style:p}},"datechooser-weekday":{decorator:qx.ui.decoration.Single,style:{widthBottom:1,colorBottom:o,style:p}},"datechooser-week":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:o,style:p}},"datechooser-week-header":{decorator:qx.ui.decoration.Single,style:{widthBottom:1,colorBottom:o,widthRight:1,colorRight:o,style:p}},"tabview-page-button-top":{decorator:qx.ui.decoration.Double,style:{width:1,color:[m,n,n,m],innerWidth:1,innerColor:[k,l,l,k],widthBottom:0,innerWidthBottom:0}},"tabview-page-button-bottom":{decorator:qx.ui.decoration.Double,style:{width:1,color:[m,n,n,m],innerWidth:1,innerColor:[k,l,l,k],widthTop:0,innerWidthTop:0}},"tabview-page-button-left":{decorator:qx.ui.decoration.Double,style:{width:1,color:[m,n,n,m],innerWidth:1,innerColor:[k,l,l,k],widthRight:0,innerWidthRight:0}},"tabview-page-button-right":{decorator:qx.ui.decoration.Double,style:{width:1,color:[m,n,n,m],innerWidth:1,innerColor:[k,l,l,k],widthLeft:0,innerWidthLeft:0}},"table-statusbar":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:l,styleTop:p}},"table-scroller-header":{decorator:qx.ui.decoration.Single,style:{widthBottom:1,colorBottom:u,styleBottom:p}},"table-scroller-focus-indicator":{decorator:qx.ui.decoration.Single,style:{width:2,color:g,style:p}},"table-header-cell":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:u,styleRight:p}},"table-header-cell-hovered":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:u,styleRight:p,widthBottom:2,colorBottom:h,styleBottom:p}},"progressbar":{decorator:qx.ui.decoration.Single,style:{backgroundColor:i,width:1,color:v}}}});}
)();
(function(){var dj="table-row-background-even",di="decoration/treevirtual/cross_minus.gif",dh="radiobutton-hovered",dg="keyboard-focus",df="decoration/treevirtual/start_plus.gif",de="decoration/cursors/",dd="icon/16/actions/dialog-ok.png",dc="slidebar",db="#BABABA",da="table-scroller-focus-indicator",ca="move-frame",bY="nodrop",bX="date-chooser-selected",bW="tabview-page-button-left",bV="decoration/arrows/up-small.gif",bU="move",bT="radiobutton-checked-focused",bS="qx.theme.classic.Appearance",bR="decoration/menu/checkbox.gif",bQ="tooltip-error",dr="right",ds="resize-frame",dp="decoration/arrows/rewind.gif",dq="table-scroller-header",dm="table-pane",dn="table-header-cell-hover",dk="focused-outset",dl="checkbox-hovered",dt="icon/16/actions/dialog-cancel.png",du="menu-slidebar",cI="datechooser-date-pane",cH="background-pane",cK="decoration/treevirtual/cross_plus.gif",cJ="qx/icon/Oxygen/16/actions/window-close.png",cM="datechooser-week",cL="icon/16/apps/office-calendar.png",cO="datechooser-weekday",cN="table-header-border",cG="window-active-caption-text",cF="window-active-caption",k="icon",l="checkbox-checked-focused",m="splitpane",n="toolbar-separator",o="groove",p="checkbox-pressed",q="tooltip-invalid",r="decoration/window/restore.gif",s="decoration/menu/checkbox-invert.gif",t="scrollarea",dI="window-inactive-caption-text",dH="best-fit",dG="up.gif",dF="checkbox-undetermined-hovered",dM="keep-align",dL="tabview-page-button-right",dK="tabview-page-button-top",dJ="tabview-page-button-bottom",dO="row-layer",dN="decoration/menu/radiobutton.gif",bg="decoration/arrows/",bh="decoration/table/descending.png",be="progressbar",bf="tree-file",bk="tooltip-text",bl="checkbox-checked-hovered",bi="left.gif",bj="decoration/arrows/up-invert.gif",bc="alias",bd="decoration/arrows/right-invert.gif",L="radiobutton-checked-disabled",K="lead-item",N="checkbox-focused",M="border-dark",H="decoration/treevirtual/end_plus.gif",G="decoration/treevirtual/start_minus.gif",J="radiobutton-checked-hovered",I="decoration/window/minimize.gif",F="table-header-cell-hovered",E="down.gif",bq="decoration/treevirtual/end.gif",br="decoration/treevirtual/end_minus.gif",bs="window-inactive-caption",bt="decoration/menu/radiobutton-invert.gif",bm="text-placeholder",bn="slider",bo="decoration/table/select-column-order.png",bp="decoration/arrows/next.gif",bu="table-header",bv="decoration/treevirtual/only_minus.gif",W="datechooser-week-header",V="decoration/window/maximize.gif",U="decoration/treevirtual/only_plus.gif",T="checkbox-checked-pressed",S="decoration/arrows/down-invert.gif",R="menu-separator",Q="decoration/splitpane/knob-vertical.png",P=".gif",bb="decoration/arrows/forward.gif",ba="radiobutton-checked-pressed",bw="table-statusbar",bx="radiobutton-pressed",by="light-background",bz="copy",bA="table-row-background-selected",bB="radiobutton-focused",bC="decoration/splitpane/knob-horizontal.png",bD="right.gif",bE="radiobutton-checked",bF="decoration/treevirtual/cross.gif",ci="decoration/table/ascending.png",ch="decoration/treevirtual/line.gif",cg="checkbox-undetermined-focused",cf="toolbar-part-handle",cm="decoration/window/close.gif",cl="icon/16/actions/view-refresh.png",ck="menu-slidebar-button",cj="scrollbar/button",cp="combobox/button",co="decoration/arrows/right.gif",cB="decoration/arrows/up.gif",cC="text",cz="virtual-list",cA="decoration/arrows/down-small.gif",cx="tree",cy="checkbox-undetermined",cv="icon/16/places/folder.png",cw="slidebar/button-forward",cD="icon/16/mimetypes/text-plain.png",cE="right-top",cS="table-header-cell",cR="button-checked",cU=".png",cT="datechooser",cW="slidebar/button-backward",cV="treevirtual-folder",cY="checkbox-checked",cX="decoration/form/",cQ="decoration/tree/minus.gif",cP="",dB="decoration/tree/plus.gif",dC="-invalid",dD="decoration/arrows/left.gif",dE="date-chooser-title",dx="radiobutton",dy="default",dz="tree-folder",dA="background-focused",dv="selectbox",dw="background-light",j="background-field",i="outset-thin",h="icon/16/places/folder-open.png",g="shadow-small",f="invalid",e="combobox",d="scrollbar",c="center",b="datechooser/button",a="button-abandoned",w="main",x="date-chooser",u="background-disabled",v="list",A="button-hovered",B="bold",y="checkbox",z="toolbar-button",C="button-frame",D="textfield",cq="background-invalid",cn="white",cu="menu-button",cr="middle",cd="decoration/arrows/down.gif",cb="spinner",O="image",ce="cell",Y="popup",X="focused-inset",bI="tooltip",bJ="inset",bK="background-selected",bL="text-disabled",bM="groupbox",bN="text-selected",bO="outset",bP="label",bG="inset-thin",bH="atom",cc="background",ct="widget",cs="button";qx.Theme.define(bS,{appearances:{"widget":{},"label":{style:function(dP){return {textColor:dP.disabled?bL:undefined};}
},"image":{style:function(dQ){return {opacity:!dQ.replacement&&dQ.disabled?0.3:undefined};}
},"atom":{},"atom/label":bP,"atom/icon":O,"root":{style:function(dR){return {backgroundColor:cc,textColor:cC,font:dy};}
},"popup":{style:function(dS){return {decorator:w,backgroundColor:cH,shadow:g};}
},"tooltip":{include:Y,style:function(dT){return {backgroundColor:bI,textColor:bk,decorator:bI,shadow:g,padding:[1,3,2,3],offset:[15,5,5,5]};}
},"tooltip/atom":bH,"tooltip-error":{include:bI,style:function(dU){return {textColor:bN,showTimeout:100,hideTimeout:10000,decorator:bQ,font:B,backgroundColor:q};}
},"tooltip-error/atom":bH,"iframe":{style:function(dV){return {backgroundColor:cn,decorator:bJ};}
},"move-frame":{style:function(dW){return {decorator:w};}
},"resize-frame":ca,"dragdrop-cursor":{style:function(dX){var dY=bY;if(dX.copy){dY=bz;}
else if(dX.move){dY=bU;}
else if(dX.alias){dY=bc;}
;return {source:de+dY+P,position:cE,offset:[2,16,2,6]};}
},"button-frame":{alias:bH,style:function(ea){if(ea.pressed||ea.abandoned||ea.checked){var ec=!ea.inner&&ea.focused?X:bJ;var eb=[4,3,2,5];}
else {var ec=!ea.inner&&ea.focused?dk:bO;var eb=[3,4];}
;return {backgroundColor:ea.abandoned?a:ea.hovered?A:ea.checked?cR:cs,decorator:ec,padding:eb};}
},"button":{alias:C,include:C,style:function(ed){return {center:true};}
},"hover-button":{alias:bH,include:bH,style:function(ee){return {backgroundColor:ee.hovered?bK:undefined,textColor:ee.hovered?bN:undefined};}
},"splitbutton":{},"splitbutton/button":cs,"splitbutton/arrow":{alias:cs,include:cs,style:function(ef){return {icon:cd};}
},"scrollarea/corner":{style:function(){return {backgroundColor:cc};}
},"scrollarea":ct,"scrollarea/pane":ct,"scrollarea/scrollbar-x":d,"scrollarea/scrollbar-y":d,"list":{alias:t,style:function(eg){var ek;var ei=!!eg.focused;var ej=!!eg.invalid;var eh=!!eg.disabled;if(ej&&!eh){ek=cq;}
else if(ei&&!ej&&!eh){ek=dA;}
else if(eh){ek=u;}
else {ek=cn;}
;return {decorator:eg.focused?X:bJ,backgroundColor:ek};}
},"listitem":{alias:bH,style:function(el){return {gap:4,padding:el.lead?[2,4]:[3,5],backgroundColor:el.selected?bK:undefined,textColor:el.selected?bN:undefined,decorator:el.lead?K:undefined};}
},"form-renderer-label":{include:bP,style:function(){return {paddingTop:4};}
},"textfield":{style:function(em){var er;var ep=!!em.focused;var eq=!!em.invalid;var en=!!em.disabled;if(eq&&!en){er=cq;}
else if(ep&&!eq&&!en){er=dA;}
else if(en){er=u;}
else {er=j;}
;var eo;if(em.disabled){eo=bL;}
else if(em.showingPlaceholder){eo=bm;}
else {eo=undefined;}
;return {decorator:em.focused?X:bJ,padding:[2,3],textColor:eo,backgroundColor:er};}
},"textarea":D,"checkbox":{alias:bH,style:function(es){var eu;if(es.checked){if(es.disabled){eu=cY;}
else if(es.focused){eu=l;}
else if(es.pressed){eu=T;}
else if(es.hovered){eu=bl;}
else {eu=cY;}
;}
else if(es.undetermined){if(es.disabled){eu=cy;}
else if(es.focused){eu=cg;}
else if(es.hovered){eu=dF;}
else {eu=cy;}
;}
else if(!es.disabled){if(es.focused){eu=N;}
else if(es.pressed){eu=p;}
else if(es.hovered){eu=dl;}
;}
;eu=eu||y;var et=es.invalid&&!es.disabled?dC:cP;return {icon:cX+eu+et+cU,gap:6};}
},"radiobutton":{alias:y,include:y,style:function(ev){var ex;if(ev.checked&&ev.focused){ex=bT;}
else if(ev.checked&&ev.disabled){ex=L;}
else if(ev.checked&&ev.pressed){ex=ba;}
else if(ev.checked&&ev.hovered){ex=J;}
else if(ev.checked){ex=bE;}
else if(ev.focused){ex=bB;}
else if(ev.pressed){ex=bx;}
else if(ev.hovered){ex=dh;}
else {ex=dx;}
;var ew=ev.invalid&&!ev.disabled?dC:cP;return {icon:cX+ex+ew+cU,shadow:undefined};}
},"spinner":{style:function(ey){return {decorator:ey.focused?X:bJ,textColor:ey.disabled?bL:undefined};}
},"spinner/textfield":{include:D,style:function(ez){return {decorator:undefined,padding:[2,3]};}
},"spinner/upbutton":{alias:cs,include:cs,style:function(eA){return {icon:bV,padding:eA.pressed?[2,2,0,4]:[1,3,1,3],backgroundColor:eA.hovered?A:cs};}
},"spinner/downbutton":{alias:cs,include:cs,style:function(eB){return {icon:cA,padding:eB.pressed?[2,2,0,4]:[1,3,1,3],backgroundColor:eB.hovered?A:cs};}
},"datefield":e,"datefield/button":{alias:cp,include:cp,style:function(eC){return {icon:cL,padding:[0,3],backgroundColor:undefined,decorator:undefined};}
},"datefield/list":{alias:cT,include:cT,style:function(eD){return {decorator:eD.focused?X:bJ};}
},"groupbox":{style:function(eE){return {backgroundColor:cc};}
},"groupbox/legend":{alias:bH,style:function(eF){return {backgroundColor:cc,textColor:eF.invalid?f:undefined,padding:[1,0,1,4]};}
},"groupbox/frame":{style:function(eG){return {padding:[12,9],marginTop:10,decorator:o};}
},"check-groupbox":bM,"check-groupbox/legend":{alias:y,include:y,style:function(eH){return {backgroundColor:cc,textColor:eH.invalid?f:undefined,padding:[1,0,1,4]};}
},"radio-groupbox":bM,"radio-groupbox/legend":{alias:dx,include:dx,style:function(eI){return {backgroundColor:cc,textColor:eI.invalid?f:undefined,padding:[1,0,1,4]};}
},"toolbar":{style:function(eJ){return {backgroundColor:cc};}
},"toolbar/part":{},"toolbar/part/container":{},"toolbar/part/handle":{style:function(eK){return {decorator:cf,backgroundColor:cc,padding:[0,1],margin:[3,2],allowGrowY:true};}
},"toolbar-separator":{style:function(eL){return {margin:[3,2],decorator:n};}
},"toolbar-button":{alias:bH,style:function(eM){if(eM.pressed||eM.checked||eM.abandoned){var eO=bG;var eN=[3,2,1,4];}
else if(eM.hovered&&!eM.disabled){var eO=i;var eN=[2,3];}
else {var eO=undefined;var eN=[3,4];}
;return {cursor:dy,decorator:eO,padding:eN,backgroundColor:eM.abandoned?a:eM.checked?dw:cs};}
},"toolbar-menubutton":{alias:z,include:z,style:function(eP){return {showArrow:true};}
},"toolbar-menubutton/arrow":{alias:O,include:O,style:function(eQ){return {source:cA};}
},"toolbar-splitbutton":{},"toolbar-splitbutton/button":z,"toolbar-splitbutton/arrow":{alias:z,include:z,style:function(eR){return {icon:cd};}
},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:cs,include:cs,style:function(eS){return {icon:eS.vertical?cd:bp};}
},"slidebar/button-backward":{alias:cs,include:cs,style:function(eT){return {icon:eT.vertical?cB:dD};}
},"tabview":{},"tabview/bar":{alias:dc,style:function(eU){var eV=0,eY=0,eW=0,eX=0;if(eU.barTop){eW=-2;}
else if(eU.barBottom){eV=-2;}
else if(eU.barRight){eX=-2;}
else {eY=-2;}
;return {marginBottom:eW,marginTop:eV,marginLeft:eX,marginRight:eY};}
},"tabview/bar/button-forward":{include:cw,alias:cw,style:function(fa){if(fa.barTop||fa.barBottom){return {marginTop:2,marginBottom:2};}
else {return {marginLeft:2,marginRight:2};}
;}
},"tabview/bar/button-backward":{include:cW,alias:cW,style:function(fb){if(fb.barTop||fb.barBottom){return {marginTop:2,marginBottom:2};}
else {return {marginLeft:2,marginRight:2};}
;}
},"tabview/pane":{style:function(fc){return {backgroundColor:cc,decorator:bO,padding:10};}
},"tabview-page":ct,"tabview-page/button":{style:function(fd){var fm;var fk=0,fi=0,ff=0,fh=0;if(fd.barTop||fd.barBottom){var fg=2,fe=2,fj=6,fl=6;}
else {var fg=6,fe=6,fj=6,fl=6;}
;if(fd.barTop){fm=dK;}
else if(fd.barRight){fm=dL;}
else if(fd.barBottom){fm=dJ;}
else {fm=bW;}
;if(fd.checked){if(fd.barTop||fd.barBottom){fj+=2;fl+=2;}
else {fg+=2;fe+=2;}
;}
else {if(fd.barTop||fd.barBottom){ff+=2;fk+=2;}
else if(fd.barLeft||fd.barRight){fi+=2;fh+=2;}
;}
;if(fd.checked){if(!fd.firstTab){if(fd.barTop||fd.barBottom){fh=-4;}
else {fk=-4;}
;}
;if(!fd.lastTab){if(fd.barTop||fd.barBottom){fi=-4;}
else {ff=-4;}
;}
;}
;return {zIndex:fd.checked?10:5,decorator:fm,backgroundColor:cc,padding:[fg,fl,fe,fj],margin:[fk,fi,ff,fh],textColor:fd.disabled?bL:undefined};}
},"tabview-page/button/label":{alias:bP,style:function(fn){return {padding:[0,1,0,1],margin:fn.focused?0:1,decorator:fn.focused?dg:undefined};}
},"tabview-page/button/icon":O,"tabview-page/button/close-button":{alias:bH,style:function(fo){return {icon:cJ};}
},"scrollbar":{},"scrollbar/slider":{alias:bn,style:function(fp){return {backgroundColor:dw};}
},"scrollbar/slider/knob":{include:C,style:function(fq){return {height:14,width:14,minHeight:fq.horizontal?undefined:9,minWidth:fq.horizontal?9:undefined};}
},"scrollbar/button":{alias:cs,include:cs,style:function(fr){var fs;if(fr.up||fr.down){if(fr.pressed||fr.abandoned||fr.checked){fs=[5,2,3,4];}
else {fs=[4,3];}
;}
else {if(fr.pressed||fr.abandoned||fr.checked){fs=[4,3,2,5];}
else {fs=[3,4];}
;}
;var ft=bg;if(fr.left){ft+=bi;}
else if(fr.right){ft+=bD;}
else if(fr.up){ft+=dG;}
else {ft+=E;}
;return {padding:fs,icon:ft};}
},"scrollbar/button-begin":cj,"scrollbar/button-end":cj,"slider":{style:function(fu){var fv;if(fu.disabled){fv=u;}
else if(fu.invalid){fv=cq;}
else if(fu.focused){fv=dw;}
else {fv=j;}
;return {backgroundColor:fv,decorator:fu.focused?X:bJ};}
},"slider/knob":{include:C,style:function(fw){return {width:14,height:14,decorator:bO};}
},"tree-folder/open":{style:function(fx){return {source:fx.opened?cQ:dB};}
},"tree-folder":{style:function(fy){return {padding:[2,3,2,0],icon:fy.opened?h:cv,iconOpened:h};}
},"tree-folder/icon":{style:function(fz){return {padding:[0,4,0,0]};}
},"tree-folder/label":{style:function(fA){return {padding:[1,2],backgroundColor:fA.selected?bK:undefined,textColor:fA.selected?bN:undefined};}
},"tree-file":{include:dz,alias:dz,style:function(fB){return {icon:cD};}
},"tree":{include:v,alias:v,style:function(fC){return {contentPadding:[4,4,4,4]};}
},"treevirtual":{style:function(fD){return {decorator:w};}
},"treevirtual-folder":{style:function(fE){return {icon:(fE.opened?h:cv)};}
},"treevirtual-file":{include:cV,alias:cV,style:function(fF){return {icon:cD};}
},"treevirtual-line":{style:function(fG){return {icon:ch};}
},"treevirtual-contract":{style:function(fH){return {icon:cQ};}
},"treevirtual-expand":{style:function(fI){return {icon:dB};}
},"treevirtual-only-contract":{style:function(fJ){return {icon:bv};}
},"treevirtual-only-expand":{style:function(fK){return {icon:U};}
},"treevirtual-start-contract":{style:function(fL){return {icon:G};}
},"treevirtual-start-expand":{style:function(fM){return {icon:df};}
},"treevirtual-end-contract":{style:function(fN){return {icon:br};}
},"treevirtual-end-expand":{style:function(fO){return {icon:H};}
},"treevirtual-cross-contract":{style:function(fP){return {icon:di};}
},"treevirtual-cross-expand":{style:function(fQ){return {icon:cK};}
},"treevirtual-end":{style:function(fR){return {icon:bq};}
},"treevirtual-cross":{style:function(fS){return {icon:bF};}
},"window":{style:function(fT){return {contentPadding:[10,10,10,10],backgroundColor:cc,decorator:fT.maximized?undefined:bO,shadow:fT.maximized?undefined:g};}
},"window-resize-frame":ds,"window/pane":{},"window/captionbar":{style:function(fU){return {padding:1,backgroundColor:fU.active?cF:bs,textColor:fU.active?cG:dI};}
},"window/icon":{style:function(fV){return {marginRight:4};}
},"window/title":{style:function(fW){return {cursor:dy,font:B,marginRight:20,alignY:cr};}
},"window/minimize-button":{include:cs,alias:cs,style:function(fX){return {icon:I,padding:fX.pressed||fX.abandoned?[2,1,0,3]:[1,2]};}
},"window/restore-button":{include:cs,alias:cs,style:function(fY){return {icon:r,padding:fY.pressed||fY.abandoned?[2,1,0,3]:[1,2]};}
},"window/maximize-button":{include:cs,alias:cs,style:function(ga){return {icon:V,padding:ga.pressed||ga.abandoned?[2,1,0,3]:[1,2]};}
},"window/close-button":{include:cs,alias:cs,style:function(gb){return {marginLeft:2,icon:cm,padding:gb.pressed||gb.abandoned?[2,1,0,3]:[1,2]};}
},"window/statusbar":{style:function(gc){return {decorator:bG,padding:[2,6]};}
},"window/statusbar-text":bP,"resizer":{style:function(gd){return {decorator:bO};}
},"splitpane":{},"splitpane/splitter":{style:function(ge){return {backgroundColor:cc};}
},"splitpane/splitter/knob":{style:function(gf){return {source:gf.horizontal?bC:Q,padding:2};}
},"splitpane/slider":{style:function(gg){return {backgroundColor:M,opacity:0.3};}
},"selectbox":{include:C,style:function(gh){var gi=cs;if(gh.invalid&&!gh.disabled){gi=cq;}
else if(gh.abandoned){gi=a;}
else if(!gh.abandoned&&gh.hovered){gi=A;}
else if(!gh.abandoned&&!gh.hovered&&gh.checked){gi=cR;}
;return {backgroundColor:gi};}
},"selectbox/atom":bH,"selectbox/popup":Y,"selectbox/list":v,"selectbox/arrow":{include:O,style:function(gj){return {source:cd,paddingRight:4,paddingLeft:5};}
},"datechooser":{style:function(gk){return {decorator:bO};}
},"datechooser/navigation-bar":{style:function(gl){return {backgroundColor:x,textColor:gl.disabled?bL:gl.invalid?f:undefined,padding:[2,10]};}
},"datechooser/last-year-button-tooltip":bI,"datechooser/last-month-button-tooltip":bI,"datechooser/next-year-button-tooltip":bI,"datechooser/next-month-button-tooltip":bI,"datechooser/last-year-button":b,"datechooser/last-month-button":b,"datechooser/next-year-button":b,"datechooser/next-month-button":b,"datechooser/button/icon":{},"datechooser/button":{style:function(gm){var gn={width:17,show:k};if(gm.lastYear){gn.icon=dp;}
else if(gm.lastMonth){gn.icon=dD;}
else if(gm.nextYear){gn.icon=bb;}
else if(gm.nextMonth){gn.icon=co;}
;if(gm.pressed||gm.checked||gm.abandoned){gn.decorator=bG;}
else if(gm.hovered){gn.decorator=i;}
else {gn.decorator=undefined;}
;if(gm.pressed||gm.checked||gm.abandoned){gn.padding=[2,0,0,2];}
else if(gm.hovered){gn.padding=1;}
else {gn.padding=2;}
;return gn;}
},"datechooser/month-year-label":{style:function(go){return {font:B,textAlign:c};}
},"datechooser/date-pane":{style:function(gp){return {decorator:cI,backgroundColor:x};}
},"datechooser/weekday":{style:function(gq){return {decorator:cO,font:B,textAlign:c,textColor:gq.disabled?bL:gq.weekend?dE:x,backgroundColor:gq.weekend?x:dE};}
},"datechooser/day":{style:function(gr){return {textAlign:c,decorator:gr.today?w:undefined,textColor:gr.disabled?bL:gr.selected?bN:gr.otherMonth?bL:undefined,backgroundColor:gr.disabled?undefined:gr.selected?bX:undefined,padding:[2,4]};}
},"datechooser/week":{style:function(gs){return {textAlign:c,textColor:dE,padding:[2,4],decorator:gs.header?W:cM};}
},"combobox":{style:function(gt){var gu;if(gt.disabled){gu=u;}
else if(gt.invalid){gu=cq;}
else if(gt.focused){gu=dA;}
else {gu=j;}
;return {decorator:gt.focused?X:bJ,textColor:gt.disabled?bL:undefined,backgroundColor:gu};}
},"combobox/button":{alias:cs,include:cs,style:function(gv){return {icon:cd,backgroundColor:gv.hovered?A:cs};}
},"combobox/popup":Y,"combobox/list":v,"combobox/textfield":{include:D,style:function(gw){return {decorator:undefined,padding:[2,3],backgroundColor:undefined};}
},"menu":{style:function(gx){var gy={backgroundColor:cc,shadow:g,decorator:bO,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4,padding:1,placementModeY:gx.submenu||gx.contextmenu?dH:dM};if(gx.submenu){gy.position=cE;gy.offset=[-2,-3];}
;if(gx.contextmenu){gy.offset=4;}
;return gy;}
},"menu/slidebar":du,"menu-slidebar":ct,"menu-slidebar-button":{style:function(gz){return {backgroundColor:gz.hovered?bK:undefined,padding:6,center:true};}
},"menu-slidebar/button-backward":{include:ck,style:function(gA){return {icon:gA.hovered?bj:cB};}
},"menu-slidebar/button-forward":{include:ck,style:function(gB){return {icon:gB.hovered?S:cd};}
},"menu-separator":{style:function(gC){return {height:0,decorator:R,marginTop:4,marginBottom:4,marginLeft:2,marginRight:2};}
},"menu-button":{alias:bH,style:function(gD){return {backgroundColor:gD.selected?bK:undefined,textColor:gD.selected?bN:undefined,padding:[2,6]};}
},"menu-button/icon":{include:O,style:function(gE){return {alignY:cr};}
},"menu-button/label":{include:bP,style:function(gF){return {alignY:cr,padding:1};}
},"menu-button/shortcut":{include:bP,style:function(gG){return {alignY:cr,marginLeft:14,padding:1};}
},"menu-button/arrow":{include:O,style:function(gH){return {source:gH.selected?bd:co,alignY:cr};}
},"menu-checkbox":{alias:cu,include:cu,style:function(gI){return {icon:!gI.checked?undefined:gI.selected?s:bR};}
},"menu-radiobutton":{alias:cu,include:cu,style:function(gJ){return {icon:!gJ.checked?undefined:gJ.selected?bt:dN};}
},"menubar":{style:function(gK){return {backgroundColor:cc,decorator:bO};}
},"menubar-button":{alias:bH,style:function(gL){return {padding:[2,6],backgroundColor:gL.pressed||gL.hovered&&!gL.disabled?bK:undefined,textColor:gL.pressed||gL.hovered?bN:undefined};}
},"colorselector":ct,"colorselector/control-bar":ct,"colorselector/visual-pane":bM,"colorselector/control-pane":ct,"colorselector/preset-grid":ct,"colorselector/colorbucket":{style:function(gM){return {decorator:bG,width:16,height:16};}
},"colorselector/preset-field-set":bM,"colorselector/input-field-set":{include:bM,alias:bM,style:function(){return {paddingTop:12};}
},"colorselector/preview-field-set":{include:bM,alias:bM,style:function(){return {paddingTop:12};}
},"colorselector/hex-field-composite":ct,"colorselector/hex-field":D,"colorselector/rgb-spinner-composite":ct,"colorselector/rgb-spinner-red":cb,"colorselector/rgb-spinner-green":cb,"colorselector/rgb-spinner-blue":cb,"colorselector/hsb-spinner-composite":ct,"colorselector/hsb-spinner-hue":cb,"colorselector/hsb-spinner-saturation":cb,"colorselector/hsb-spinner-brightness":cb,"colorselector/preview-content-old":{style:function(gN){return {decorator:bG,width:50,height:10};}
},"colorselector/preview-content-new":{style:function(gO){return {decorator:bG,backgroundColor:cn,width:50,height:10};}
},"colorselector/hue-saturation-field":{style:function(gP){return {decorator:bG,margin:5};}
},"colorselector/brightness-field":{style:function(gQ){return {decorator:bG,margin:[5,7]};}
},"colorselector/hue-saturation-pane":ct,"colorselector/hue-saturation-handle":ct,"colorselector/brightness-pane":ct,"colorselector/brightness-handle":ct,"table":ct,"table/statusbar":{style:function(gR){return {decorator:bw,paddingLeft:2,paddingRight:2};}
},"table/column-button":{alias:cs,style:function(gS){var gU,gT;if(gS.pressed||gS.checked||gS.abandoned){gU=bG;gT=[3,2,1,4];}
else if(gS.hovered){gU=i;gT=[2,3];}
else {gU=undefined;gT=[3,4];}
;return {decorator:gU,padding:gT,backgroundColor:gS.abandoned?a:cs,icon:bo};}
},"table-column-reset-button":{extend:cu,alias:cu,style:function(){return {icon:cl};}
},"table-scroller/scrollbar-x":d,"table-scroller/scrollbar-y":d,"table-scroller":ct,"table-scroller/header":{style:function(gV){return {decorator:dq,backgroundColor:bu};}
},"table-scroller/pane":{style:function(gW){return {backgroundColor:dm};}
},"table-scroller/focus-indicator":{style:function(gX){return {decorator:da};}
},"table-scroller/resize-line":{style:function(gY){return {backgroundColor:cN,width:3};}
},"table-header-cell":{alias:bH,style:function(ha){return {minWidth:13,paddingLeft:2,paddingRight:2,paddingBottom:ha.hovered?0:2,decorator:ha.hovered?F:cS,backgroundColor:ha.hovered?dn:cS,sortIcon:ha.sorted?(ha.sortedAscending?ci:bh):undefined};}
},"table-header-cell/icon":{style:function(hb){return {marginRight:4,opacity:hb.disabled?0.3:1};}
},"table-header-cell/sort-icon":{style:function(hc){return {alignY:cr,opacity:hc.disabled?0.3:1};}
},"table-editor-textfield":{include:D,style:function(hd){return {decorator:undefined,padding:[2,2]};}
},"table-editor-selectbox":{include:dv,alias:dv,style:function(he){return {padding:[0,2]};}
},"table-editor-combobox":{include:e,alias:e,style:function(hf){return {decorator:undefined};}
},"colorpopup":{alias:Y,include:Y,style:function(hg){return {decorator:bO,padding:5,backgroundColor:cc};}
},"colorpopup/field":{style:function(hh){return {decorator:bG,margin:2,width:14,height:14,backgroundColor:cc};}
},"colorpopup/selector-button":cs,"colorpopup/auto-button":cs,"colorpopup/preview-pane":bM,"colorpopup/current-preview":{style:function(hi){return {height:20,padding:4,marginLeft:4,decorator:bG,allowGrowX:true};}
},"colorpopup/selected-preview":{style:function(hj){return {height:20,padding:4,marginRight:4,decorator:bG,allowGrowX:true};}
},"colorpopup/colorselector-okbutton":{alias:cs,include:cs,style:function(hk){return {icon:dd};}
},"colorpopup/colorselector-cancelbutton":{alias:cs,include:cs,style:function(hl){return {icon:dt};}
},"virtual-list":v,"virtual-list/row-layer":dO,"row-layer":ct,"column-layer":ct,"group-item":{include:bP,alias:bP,style:function(hm){return {padding:4,backgroundColor:db,textColor:cn,font:B};}
},"virtual-selectbox":dv,"virtual-selectbox/dropdown":Y,"virtual-selectbox/dropdown/list":{alias:cz},"virtual-combobox":e,"virtual-combobox/dropdown":Y,"virtual-combobox/dropdown/list":{alias:cz},"virtual-tree":{include:cx,alias:cx,style:function(hn){return {itemHeight:21};}
},"virtual-tree-folder":dz,"virtual-tree-file":bf,"cell":{style:function(ho){return {backgroundColor:ho.selected?bA:dj,textColor:ho.selected?bN:cC,padding:[3,6]};}
},"cell-string":ce,"cell-number":{include:ce,style:function(hp){return {textAlign:dr};}
},"cell-image":ce,"cell-boolean":ce,"cell-atom":ce,"cell-date":ce,"cell-html":ce,"htmlarea":{"include":ct,style:function(hq){return {backgroundColor:cn};}
},"progressbar":{style:function(hr){return {decorator:be,padding:[1],backgroundColor:cn,width:200,height:20};}
},"progressbar/progress":{style:function(hs){return {backgroundColor:hs.disabled?u:bK};}
},"app-header":{style:function(ht){return {textColor:bN,backgroundColor:bK,padding:[8,12]};}
},"app-header-label":bP,"app-splitpane":{alias:m,style:function(hu){return {padding:[0,10,10,10],backgroundColor:by};}
}}});}
)();
(function(){var i="monospace",h="qx.theme.classic.Font",g="Courier New",f="DejaVu Sans Mono",e="Liberation Sans",d="Verdana",c="Bitstream Vera Sans",b="Lucida Grande",a="Tahoma";qx.Theme.define(h,{fonts:{"default":{size:11,lineHeight:1.4,family:[b,a,d,c,e]},"bold":{size:11,lineHeight:1.4,family:[b,a,d,c,e],bold:true},"small":{size:10,lineHeight:1.4,family:[b,a,d,c,e]},"monospace":{size:11,lineHeight:1.4,family:[f,g,i]}}});}
)();
(function(){var c="Oxygen",b="qx.theme.icon.Oxygen",a="qx/icon/Oxygen";qx.Theme.define(b,{title:c,aliases:{"icon":a}});}
)();
(function(){var j="#888888",i="#3E5B97",h="#FFFFE1",g="#F3F8FD",f="#CBC8CD",e="#FFE0E0",d="#F4F4F4",c="#808080",b="#CCCCCC",a="#C82C2C",E="#DBEAF9",D="#BCCEE5",C="#A5BDDE",B="#7CA0CF",A="#F6F5F7",z="#FF9999",y="qx.theme.classic.Color",x="#990000",w="#F9F8E9",v="#DCDFE4",q="#FAFBFE",r="#AAAAAA",o="black",p="#3E6CA8",m="#A7A6AA",n="#EEE",k="#F3F0F5",l="gray",s="#85878C",t="#EBE9ED",u="white";qx.Theme.define(y,{colors:{"background":t,"background-light":k,"light-background":t,"background-focused":g,"background-focused-inner":E,"background-disabled":d,"background-selected":p,"background-field":u,"background-pane":q,"background-invalid":e,"border-lead":j,"border-light":u,"border-light-shadow":v,"border-dark-shadow":m,"border-dark":s,"border-main":s,"border-focused-light":D,"border-focused-light-shadow":C,"border-focused-dark-shadow":B,"border-focused-dark":p,"border-separator":c,"invalid":x,"border-focused-invalid":z,"text":o,"text-disabled":m,"text-selected":u,"text-focused":i,"text-placeholder":f,"tooltip":h,"tooltip-text":o,"tooltip-invalid":a,"button":t,"button-hovered":A,"button-abandoned":w,"button-checked":k,"window-active-caption-text":[255,255,255],"window-inactive-caption-text":[255,255,255],"window-active-caption":[51,94,168],"window-inactive-caption":[111,161,217],"date-chooser":u,"date-chooser-title":[116,116,116],"date-chooser-selected":[52,52,52],"effect":[254,200,60],"table-pane":u,"table-header":[242,242,242],"table-header-border":[214,213,217],"table-header-cell":[235,234,219],"table-header-cell-hover":[255,255,255],"table-focus-indicator":[179,217,255],"table-row-background-focused-selected":[90,138,211],"table-row-background-focused":[221,238,255],"table-row-background-selected":[51,94,168],"table-row-background-even":[250,248,243],"table-row-background-odd":[255,255,255],"table-row-selected":[255,255,255],"table-row":[0,0,0],"table-row-line":n,"table-column-line":n,"progressive-table-header":r,"progressive-table-row-background-even":[250,248,243],"progressive-table-row-background-odd":[255,255,255],"progressive-progressbar-background":l,"progressive-progressbar-indicator-done":b,"progressive-progressbar-indicator-undone":u,"progressive-progressbar-percent-background":l,"progressive-progressbar-percent-text":u}});}
)();
(function(){var b="Classic Windows",a="qx.theme.Classic";qx.Theme.define(a,{title:b,meta:{color:qx.theme.classic.Color,decoration:qx.theme.classic.Decoration,font:qx.theme.classic.Font,appearance:qx.theme.classic.Appearance,icon:qx.theme.icon.Oxygen}});}
)();
(function(){var l="Use qx.dev.StackTrace.FORMAT_STACKTRACE instead",k="function",h="<span class='object'>",g="]:",f="&gt;",e="<span class='object' title='Object instance with hash code: ",d="FORMAT_STACK",c="string",b="level-",a="0",M="&lt;",L="<span class='offset'>",K=":",J="qx.log.appender.Util",I="&amp;",H="&#39;",G="DIV",F="<span>",E="&quot;",D="<span class='type-key'>",s="</span>:<span class='type-",t="</span>: ",q=" ",r="]</span>: ",o="?",p="</span> ",m="}",n="",u="]",v="\n",y="{",x="map",A="<span class='type-",z="[",C=", ",B="</span>",w="'>";qx.Class.define(J,{statics:{toHtml:function(N){var X=[];var U,W,P,R;X.push(L,this.formatOffset(N.offset,6),p);if(N.object){var O=N.win.qx.core.ObjectRegistry.fromHashCode(N.object);if(O){X.push(e+O.$$hash+w,O.classname,z,O.$$hash,r);}
;}
else if(N.clazz){X.push(h+N.clazz.classname,t);}
;var Q=N.items;for(var i=0,V=Q.length;i<V;i++ ){U=Q[i];W=U.text;if(W instanceof Array){var R=[];for(var j=0,T=W.length;j<T;j++ ){P=W[j];if(typeof P===c){R.push(F+this.escapeHTML(P)+B);}
else if(P.key){R.push(D+P.key+s+P.type+w+this.escapeHTML(P.text)+B);}
else {R.push(A+P.type+w+this.escapeHTML(P.text)+B);}
;}
;X.push(A+U.type+w);if(U.type===x){X.push(y,R.join(C),m);}
else {X.push(z,R.join(C),u);}
;X.push(B);}
else {X.push(A+U.type+w+this.escapeHTML(W)+p);}
;}
;var S=document.createElement(G);S.innerHTML=X.join(n);S.className=b+N.level;return S;}
,formatOffset:function(Y,length){var bc=Y.toString();var ba=(length||6)-bc.length;var bb=n;for(var i=0;i<ba;i++ ){bb+=a;}
;return bb+bc;}
,escapeHTML:function(bd){return String(bd).replace(/[<>&"']/g,this.__zk);}
,__zk:function(be){var bf={"<":M,">":f,"&":I,"'":H,'"':E};return bf[be]||o;}
,toText:function(bg){return this.toTextArray(bg).join(q);}
,toTextArray:function(bh){var bp=[];bp.push(this.formatOffset(bh.offset,6));if(bh.object){var bi=bh.win.qx.core.ObjectRegistry.fromHashCode(bh.object);if(bi){bp.push(bi.classname+z+bi.$$hash+g);}
;}
else if(bh.clazz){bp.push(bh.clazz.classname+K);}
;var bj=bh.items;var bm,bo;for(var i=0,bn=bj.length;i<bn;i++ ){bm=bj[i];bo=bm.text;if(bm.trace&&bm.trace.length>0){if(typeof (this.FORMAT_STACK)==k){qx.log.Logger.deprecatedConstantWarning(qx.log.appender.Util,d,l);bo+=v+this.FORMAT_STACK(bm.trace);}
else {bo+=v+bm.trace;}
;}
;if(bo instanceof Array){var bk=[];for(var j=0,bl=bo.length;j<bl;j++ ){bk.push(bo[j].text);}
;if(bm.type===x){bp.push(y,bk.join(C),m);}
else {bp.push(z,bk.join(C),u);}
;}
else {bp.push(bo);}
;}
;return bp;}
}});}
)();
(function(){var c="html.console",b="qx.log.appender.Native",a="log";qx.Class.define(b,{statics:{process:function(d){if(qx.core.Environment.get(c)){var f=console[d.level]?d.level:a;if(console[f]){var e=qx.log.appender.Util.toText(d);console[f](e);}
;}
;}
},defer:function(g){qx.log.Logger.register(g);}
});}
)();
(function(){var k="PageUp",j="Escape",i="Enter",h="PrintScreen",g="7",f="Left",e="5",d="F5",c="Down",b="Up",bi="3",bh="Meta",bg="F11",bf="F6",be="PageDown",bd="CapsLock",bc="Insert",bb="F8",ba="Scroll",Y="Control",r="Tab",s="Shift",p="End",q="Pause",n="Unidentified",o="8",l="F1",m="F4",v="Home",w="qx.event.util.Keyboard",E="F2",C="6",M="F7",H="Apps",U="4",R="F12",y="Alt",X="2",W="NumLock",V="Delete",x="1",A="Backspace",B="F9",D="F10",F="Right",I="F3",O=",",T="-",t="+",u="os.name",z="A",L="Space",K="osx",J="/",Q="Z",P="*",G="cmd",N="Win",a="0",S="9";qx.Bootstrap.define(w,{statics:{specialCharCodeMap:{'8':A,'9':r,'13':i,'27':j,'32':L},numpadToCharCode:{'96':a.charCodeAt(0),'97':x.charCodeAt(0),'98':X.charCodeAt(0),'99':bi.charCodeAt(0),'100':U.charCodeAt(0),'101':e.charCodeAt(0),'102':C.charCodeAt(0),'103':g.charCodeAt(0),'104':o.charCodeAt(0),'105':S.charCodeAt(0),'106':P.charCodeAt(0),'107':t.charCodeAt(0),'109':T.charCodeAt(0),'110':O.charCodeAt(0),'111':J.charCodeAt(0)},keyCodeToIdentifierMap:{'16':s,'17':Y,'18':y,'20':bd,'224':bh,'37':f,'38':b,'39':F,'40':c,'33':k,'34':be,'35':p,'36':v,'45':bc,'46':V,'112':l,'113':E,'114':I,'115':m,'116':d,'117':bf,'118':M,'119':bb,'120':B,'121':D,'122':bg,'123':R,'144':W,'44':h,'145':ba,'19':q,'91':qx.core.Environment.get(u)==K?G:N,'92':N,'93':qx.core.Environment.get(u)==K?G:H},charCodeA:z.charCodeAt(0),charCodeZ:Q.charCodeAt(0),charCode0:a.charCodeAt(0),charCode9:S.charCodeAt(0),keyCodeToIdentifier:function(bj){if(this.isIdentifiableKeyCode(bj)){var bk=this.numpadToCharCode[bj];if(bk){return String.fromCharCode(bk);}
;return (this.keyCodeToIdentifierMap[bj]||this.specialCharCodeMap[bj]||String.fromCharCode(bj));}
else {return n;}
;}
,charCodeToIdentifier:function(bl){return this.specialCharCodeMap[bl]||String.fromCharCode(bl).toUpperCase();}
,isIdentifiableKeyCode:function(bm){if(bm>=this.charCodeA&&bm<=this.charCodeZ){return true;}
;if(bm>=this.charCode0&&bm<=this.charCode9){return true;}
;if(this.specialCharCodeMap[bm]){return true;}
;if(this.numpadToCharCode[bm]){return true;}
;if(this.isNonPrintableKeyCode(bm)){return true;}
;return false;}
,isNonPrintableKeyCode:function(bn){return this.keyCodeToIdentifierMap[bn]?true:false;}
,isValidKeyIdentifier:function(bo){if(this.identifierToKeyCodeMap[bo]){return true;}
;if(bo.length!=1){return false;}
;if(bo>=a&&bo<=S){return true;}
;if(bo>=z&&bo<=Q){return true;}
;switch(bo){case t:case T:case P:case J:return true;default:return false;};}
,isPrintableKeyIdentifier:function(bp){if(bp===L){return true;}
else {return this.identifierToKeyCodeMap[bp]?false:true;}
;}
},defer:function(bq,br){if(!bq.identifierToKeyCodeMap){bq.identifierToKeyCodeMap={};for(var bs in bq.keyCodeToIdentifierMap){bq.identifierToKeyCodeMap[bq.keyCodeToIdentifierMap[bs]]=parseInt(bs,10);}
;for(var bs in bq.specialCharCodeMap){bq.identifierToKeyCodeMap[bq.specialCharCodeMap[bs]]=parseInt(bs,10);}
;}
;}
});}
)();
(function(){var a="qx.event.handler.UserAction";qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(b){qx.core.Object.call(this);this.__fN=b;this.__cf=b.getWindow();}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__fN:null,__cf:null,canHandleEvent:function(c,d){}
,registerEvent:function(e,f,g){}
,unregisterEvent:function(h,i,j){}
},destruct:function(){this.__fN=this.__cf=null;}
,defer:function(k){qx.event.Registration.addHandler(k);}
});}
)();
(function(){var j="text",i="PageUp",h="PrintScreen",g="os.name",f="gecko",e="F1",d="Left",c="F5",b="Down",a="Up",P="F3",O="F11",N="F6",M="Insert",L="F8",K="input",J="End",I="Delete",H="qx.event.handler.Keyboard",G="win",q="Home",r="F2",o="off",p="F12",m="F4",n="PageDown",k="F7",l="F9",s="F10",t="Right",y="autoComplete",x="Enter",A="NumLock",z="useraction",C="keyinput",B="mshtml",v="webkit",F="engine.version",E="keyup",D="keypress",u="engine.name",w="keydown";qx.Class.define(H,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(Q){qx.core.Object.call(this);this.__fN=Q;this.__cf=Q.getWindow();if((qx.core.Environment.get(u)==f)){this.__dg=this.__cf;}
else {this.__dg=this.__cf.document.documentElement;}
;this.__gO={};this._initKeyObserver();}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{keyup:1,keydown:1,keypress:1,keyinput:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{__gP:null,__fN:null,__cf:null,__dg:null,__gO:null,__gQ:null,__gR:null,__gS:null,canHandleEvent:function(R,S){}
,registerEvent:function(T,U,V){}
,unregisterEvent:function(W,X,Y){}
,_fireInputEvent:function(ba,bb){var bc=this.__gT();if(bc&&bc.offsetWidth!=0){var event=qx.event.Registration.createEvent(C,qx.event.type.KeyInput,[ba,bc,bb]);this.__fN.dispatchEvent(bc,event);}
;if(this.__cf){qx.event.Registration.fireEvent(this.__cf,z,qx.event.type.Data,[C]);}
;}
,_fireSequenceEvent:function(bd,be,bf){var bg=this.__gT();var bh=bd.keyCode;var event=qx.event.Registration.createEvent(be,qx.event.type.KeySequence,[bd,bg,bf]);this.__fN.dispatchEvent(bg,event);if(qx.core.Environment.get(u)==B||qx.core.Environment.get(u)==v){if(be==w&&event.getDefaultPrevented()){if(!qx.event.util.Keyboard.isNonPrintableKeyCode(bh)&&!this._emulateKeyPress[bh]){this._fireSequenceEvent(bd,D,bf);}
;}
;}
;if(this.__cf){qx.event.Registration.fireEvent(this.__cf,z,qx.event.type.Data,[be]);}
;}
,__gT:function(){var bi=this.__fN.getHandler(qx.event.handler.Focus);var bj=bi.getActive();if(!bj||bj.offsetWidth==0){bj=bi.getFocus();}
;if(!bj||bj.offsetWidth==0){bj=this.__fN.getWindow().document.body;}
;return bj;}
,_initKeyObserver:function(){this.__gP=qx.lang.Function.listener(this.__gU,this);this.__gS=qx.lang.Function.listener(this.__gW,this);var Event=qx.bom.Event;Event.addNativeListener(this.__dg,E,this.__gP);Event.addNativeListener(this.__dg,w,this.__gP);Event.addNativeListener(this.__dg,D,this.__gS);}
,_stopKeyObserver:function(){var Event=qx.bom.Event;Event.removeNativeListener(this.__dg,E,this.__gP);Event.removeNativeListener(this.__dg,w,this.__gP);Event.removeNativeListener(this.__dg,D,this.__gS);for(var bl in (this.__gR||{})){var bk=this.__gR[bl];Event.removeNativeListener(bk.target,D,bk.callback);}
;delete (this.__gR);}
,__gU:qx.event.GlobalError.observeMethod(qx.core.Environment.select(u,{"mshtml":function(bm){bm=window.event||bm;var bp=bm.keyCode;var bn=0;var bo=bm.type;if(!(this.__gO[bp]==w&&bo==w)){this._idealKeyHandler(bp,bn,bo,bm);}
;if(bo==w){if(qx.event.util.Keyboard.isNonPrintableKeyCode(bp)||this._emulateKeyPress[bp]){this._idealKeyHandler(bp,bn,D,bm);}
;}
;this.__gO[bp]=bo;}
,"gecko":function(bq){var bs=0;var bu=bq.keyCode;var bt=bq.type;var br=qx.event.util.Keyboard;if(qx.core.Environment.get(g)==G){var bv=bu?br.keyCodeToIdentifier(bu):br.charCodeToIdentifier(bs);if(!(this.__gO[bv]==w&&bt==w)){this._idealKeyHandler(bu,bs,bt,bq);}
;this.__gO[bv]=bt;}
else {this._idealKeyHandler(bu,bs,bt,bq);}
;this.__gV(bq.target,bt,bu);}
,"webkit":function(bw){var bz=0;var bx=0;var by=bw.type;if(parseFloat(qx.core.Environment.get(F))<525.13){if(by==E||by==w){bz=this._charCode2KeyCode[bw.charCode]||bw.keyCode;}
else {if(this._charCode2KeyCode[bw.charCode]){bz=this._charCode2KeyCode[bw.charCode];}
else {bx=bw.charCode;}
;}
;this._idealKeyHandler(bz,bx,by,bw);}
else {bz=bw.keyCode;this._idealKeyHandler(bz,bx,by,bw);if(by==w){if(qx.event.util.Keyboard.isNonPrintableKeyCode(bz)||this._emulateKeyPress[bz]){this._idealKeyHandler(bz,bx,D,bw);}
;}
;this.__gO[bz]=by;}
;}
,"opera":function(bA){this.__gQ=bA.keyCode;this._idealKeyHandler(bA.keyCode,0,bA.type,bA);}
})),__gV:qx.core.Environment.select(u,{"gecko":function(bB,bC,bD){if(bC===w&&(bD==33||bD==34||bD==38||bD==40)&&bB.type==j&&bB.tagName.toLowerCase()===K&&bB.getAttribute(y)!==o){if(!this.__gR){this.__gR={};}
;var bF=qx.core.ObjectRegistry.toHashCode(bB);if(this.__gR[bF]){return;}
;var self=this;this.__gR[bF]={target:bB,callback:function(bG){qx.bom.Event.stopPropagation(bG);self.__gW(bG);}
};var bE=qx.event.GlobalError.observeMethod(this.__gR[bF].callback);qx.bom.Event.addNativeListener(bB,D,bE);}
;}
,"default":null}),__gW:qx.event.GlobalError.observeMethod(qx.core.Environment.select(u,{"mshtml":function(bH){bH=window.event||bH;if(this._charCode2KeyCode[bH.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[bH.keyCode],0,bH.type,bH);}
else {this._idealKeyHandler(0,bH.keyCode,bH.type,bH);}
;}
,"gecko":function(bI){var bJ=bI.charCode;var bK=bI.type;this._idealKeyHandler(bI.keyCode,bJ,bK,bI);}
,"webkit":function(bL){if(parseFloat(qx.core.Environment.get(F))<525.13){var bO=0;var bM=0;var bN=bL.type;if(bN==E||bN==w){bO=this._charCode2KeyCode[bL.charCode]||bL.keyCode;}
else {if(this._charCode2KeyCode[bL.charCode]){bO=this._charCode2KeyCode[bL.charCode];}
else {bM=bL.charCode;}
;}
;this._idealKeyHandler(bO,bM,bN,bL);}
else {if(this._charCode2KeyCode[bL.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[bL.keyCode],0,bL.type,bL);}
else {this._idealKeyHandler(0,bL.keyCode,bL.type,bL);}
;}
;}
,"opera":function(bP){var bR=bP.keyCode;var bQ=bP.type;if(bR!=this.__gQ){this._idealKeyHandler(0,this.__gQ,bQ,bP);}
else {if(qx.event.util.Keyboard.keyCodeToIdentifierMap[bP.keyCode]){this._idealKeyHandler(bP.keyCode,0,bP.type,bP);}
else {this._idealKeyHandler(0,bP.keyCode,bP.type,bP);}
;}
;}
})),_idealKeyHandler:function(bS,bT,bU,bV){var bW;if(bS||(!bS&&!bT)){bW=qx.event.util.Keyboard.keyCodeToIdentifier(bS);this._fireSequenceEvent(bV,bU,bW);}
else {bW=qx.event.util.Keyboard.charCodeToIdentifier(bT);this._fireSequenceEvent(bV,D,bW);this._fireInputEvent(bV,bT);}
;}
,_emulateKeyPress:qx.core.Environment.select(u,{"mshtml":{'8':true,'9':true},"webkit":{'8':true,'9':true,'27':true},"default":{}}),_identifierToKeyCode:function(bX){return qx.event.util.Keyboard.identifierToKeyCodeMap[bX]||bX.charCodeAt(0);}
},destruct:function(){this._stopKeyObserver();this.__gQ=this.__fN=this.__cf=this.__dg=this.__gO=null;}
,defer:function(bY,ca){qx.event.Registration.addHandler(bY);if((qx.core.Environment.get(u)==B)){ca._charCode2KeyCode={'13':13,'27':27};}
else if((qx.core.Environment.get(u)==v)){if(parseFloat(qx.core.Environment.get(F))<525.13){ca._charCode2KeyCode={'63289':ca._identifierToKeyCode(A),'63276':ca._identifierToKeyCode(i),'63277':ca._identifierToKeyCode(n),'63275':ca._identifierToKeyCode(J),'63273':ca._identifierToKeyCode(q),'63234':ca._identifierToKeyCode(d),'63232':ca._identifierToKeyCode(a),'63235':ca._identifierToKeyCode(t),'63233':ca._identifierToKeyCode(b),'63272':ca._identifierToKeyCode(I),'63302':ca._identifierToKeyCode(M),'63236':ca._identifierToKeyCode(e),'63237':ca._identifierToKeyCode(r),'63238':ca._identifierToKeyCode(P),'63239':ca._identifierToKeyCode(m),'63240':ca._identifierToKeyCode(c),'63241':ca._identifierToKeyCode(N),'63242':ca._identifierToKeyCode(k),'63243':ca._identifierToKeyCode(L),'63244':ca._identifierToKeyCode(l),'63245':ca._identifierToKeyCode(s),'63246':ca._identifierToKeyCode(O),'63247':ca._identifierToKeyCode(p),'63248':ca._identifierToKeyCode(h),'3':ca._identifierToKeyCode(x),'12':ca._identifierToKeyCode(A),'13':ca._identifierToKeyCode(x)};}
else {ca._charCode2KeyCode={'13':13,'27':27};}
;}
;}
});}
)();
(function(){var e="os.name",d="opera",c="engine.name",b="qx.event.type.Dom",a="osx";qx.Class.define(b,{extend:qx.event.type.Native,statics:{SHIFT_MASK:1,CTRL_MASK:2,ALT_MASK:4,META_MASK:8},members:{_cloneNativeEvent:function(f,g){var g=qx.event.type.Native.prototype._cloneNativeEvent.call(this,f,g);g.shiftKey=f.shiftKey;g.ctrlKey=f.ctrlKey;g.altKey=f.altKey;g.metaKey=f.metaKey;return g;}
,getModifiers:function(){var i=0;var h=this._native;if(h.shiftKey){i|=qx.event.type.Dom.SHIFT_MASK;}
;if(h.ctrlKey){i|=qx.event.type.Dom.CTRL_MASK;}
;if(h.altKey){i|=qx.event.type.Dom.ALT_MASK;}
;if(h.metaKey){i|=qx.event.type.Dom.META_MASK;}
;return i;}
,isCtrlPressed:function(){return this._native.ctrlKey;}
,isShiftPressed:function(){return this._native.shiftKey;}
,isAltPressed:function(){return this._native.altKey;}
,isMetaPressed:function(){return this._native.metaKey;}
,isCtrlOrCommandPressed:function(){if(qx.core.Environment.get(e)==a&&qx.core.Environment.get(c)!=d){return this._native.metaKey;}
else {return this._native.ctrlKey;}
;}
}});}
)();
(function(){var a="qx.event.type.KeyInput";qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(b,c,d){qx.event.type.Dom.prototype.init.call(this,b,c,null,true,true);this._charCode=d;return this;}
,clone:function(e){var f=qx.event.type.Dom.prototype.clone.call(this,e);f._charCode=this._charCode;return f;}
,getCharCode:function(){return this._charCode;}
,getChar:function(){return String.fromCharCode(this._charCode);}
}});}
)();
(function(){var a="qx.event.type.KeySequence";qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(b,c,d){qx.event.type.Dom.prototype.init.call(this,b,c,null,true,true);this._keyCode=b.keyCode;this._identifier=d;return this;}
,clone:function(e){var f=qx.event.type.Dom.prototype.clone.call(this,e);f._keyCode=this._keyCode;f._identifier=this._identifier;return f;}
,getKeyIdentifier:function(){return this._identifier;}
,getKeyCode:function(){return this._keyCode;}
,isPrintable:function(){return qx.event.util.Keyboard.isPrintableKeyIdentifier(this._identifier);}
}});}
)();
(function(){var j="qx.event.handler.Focus",i="_applyFocus",h="deactivate",g="textarea",f="_applyActive",e='character',d="input",c="qxSelectable",b="tabIndex",a="off",z="activate",y="mshtml",x="qxKeepFocus",w="qxKeepActive",v="DOMFocusIn",u="draggesture",t="focusin",s="focusout",r="selectstart",q="DOMFocusOut",o="on",p="blur",m="focus",n="mousedown",k="mouseup",l="engine.name";qx.Class.define(j,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(A){qx.core.Object.call(this);this._manager=A;this._window=A.getWindow();this._document=this._window.document;this._root=this._document.documentElement;this._body=this._document.body;this._initObserver();}
,properties:{active:{apply:f,nullable:true},focus:{apply:i,nullable:true}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{focus:1,blur:1,focusin:1,focusout:1,activate:1,deactivate:1},IGNORE_CAN_HANDLE:true,FOCUSABLE_ELEMENTS:qx.core.Environment.select("engine.name",{"mshtml|gecko":{a:1,body:1,button:1,frame:1,iframe:1,img:1,input:1,object:1,select:1,textarea:1},"opera|webkit":{button:1,input:1,select:1,textarea:1}})},members:{__gX:null,__gY:null,__ha:null,__hb:null,__hc:null,__hd:null,__he:null,__hf:null,__hg:null,__hh:null,canHandleEvent:function(B,C){}
,registerEvent:function(D,E,F){}
,unregisterEvent:function(G,H,I){}
,focus:function(J){if((qx.core.Environment.get(l)==y)){window.setTimeout(function(){try{J.focus();var K=qx.bom.Selection.get(J);if(K.length==0){var L=J.createTextRange();L.moveStart(e,J.value.length);L.collapse();L.select();}
;}
catch(M){}
;}
,0);}
else {try{J.focus();}
catch(N){}
;}
;this.setFocus(J);this.setActive(J);}
,activate:function(O){this.setActive(O);}
,blur:function(P){try{P.blur();}
catch(Q){}
;if(this.getActive()===P){this.resetActive();}
;if(this.getFocus()===P){this.resetFocus();}
;}
,deactivate:function(R){if(this.getActive()===R){this.resetActive();}
;}
,tryActivate:function(S){var T=this.__hv(S);if(T){this.setActive(T);}
;}
,__gD:function(U,V,W,X){var ba=qx.event.Registration;var Y=ba.createEvent(W,qx.event.type.Focus,[U,V,X]);ba.dispatchEvent(U,Y);}
,_windowFocused:true,__hi:function(){if(this._windowFocused){this._windowFocused=false;this.__gD(this._window,null,p,false);}
;}
,__hj:function(){if(!this._windowFocused){this._windowFocused=true;this.__gD(this._window,null,m,false);}
;}
,_initObserver:qx.core.Environment.select(l,{"gecko":function(){this.__gX=qx.lang.Function.listener(this.__hp,this);this.__gY=qx.lang.Function.listener(this.__hq,this);this.__ha=qx.lang.Function.listener(this.__ho,this);this.__hb=qx.lang.Function.listener(this.__hn,this);this.__hc=qx.lang.Function.listener(this.__hk,this);qx.bom.Event.addNativeListener(this._document,n,this.__gX,true);qx.bom.Event.addNativeListener(this._document,k,this.__gY,true);qx.bom.Event.addNativeListener(this._window,m,this.__ha,true);qx.bom.Event.addNativeListener(this._window,p,this.__hb,true);qx.bom.Event.addNativeListener(this._window,u,this.__hc,true);}
,"mshtml":function(){this.__gX=qx.lang.Function.listener(this.__hp,this);this.__gY=qx.lang.Function.listener(this.__hq,this);this.__he=qx.lang.Function.listener(this.__hl,this);this.__hf=qx.lang.Function.listener(this.__hm,this);this.__hd=qx.lang.Function.listener(this.__hs,this);qx.bom.Event.addNativeListener(this._document,n,this.__gX);qx.bom.Event.addNativeListener(this._document,k,this.__gY);qx.bom.Event.addNativeListener(this._document,t,this.__he);qx.bom.Event.addNativeListener(this._document,s,this.__hf);qx.bom.Event.addNativeListener(this._document,r,this.__hd);}
,"webkit":function(){this.__gX=qx.lang.Function.listener(this.__hp,this);this.__gY=qx.lang.Function.listener(this.__hq,this);this.__hf=qx.lang.Function.listener(this.__hm,this);this.__ha=qx.lang.Function.listener(this.__ho,this);this.__hb=qx.lang.Function.listener(this.__hn,this);this.__hd=qx.lang.Function.listener(this.__hs,this);qx.bom.Event.addNativeListener(this._document,n,this.__gX,true);qx.bom.Event.addNativeListener(this._document,k,this.__gY,true);qx.bom.Event.addNativeListener(this._document,r,this.__hd,false);qx.bom.Event.addNativeListener(this._window,q,this.__hf,true);qx.bom.Event.addNativeListener(this._window,m,this.__ha,true);qx.bom.Event.addNativeListener(this._window,p,this.__hb,true);}
,"opera":function(){this.__gX=qx.lang.Function.listener(this.__hp,this);this.__gY=qx.lang.Function.listener(this.__hq,this);this.__he=qx.lang.Function.listener(this.__hl,this);this.__hf=qx.lang.Function.listener(this.__hm,this);qx.bom.Event.addNativeListener(this._document,n,this.__gX,true);qx.bom.Event.addNativeListener(this._document,k,this.__gY,true);qx.bom.Event.addNativeListener(this._window,v,this.__he,true);qx.bom.Event.addNativeListener(this._window,q,this.__hf,true);}
}),_stopObserver:qx.core.Environment.select(l,{"gecko":function(){qx.bom.Event.removeNativeListener(this._document,n,this.__gX,true);qx.bom.Event.removeNativeListener(this._document,k,this.__gY,true);qx.bom.Event.removeNativeListener(this._window,m,this.__ha,true);qx.bom.Event.removeNativeListener(this._window,p,this.__hb,true);qx.bom.Event.removeNativeListener(this._window,u,this.__hc,true);}
,"mshtml":function(){qx.bom.Event.removeNativeListener(this._document,n,this.__gX);qx.bom.Event.removeNativeListener(this._document,k,this.__gY);qx.bom.Event.removeNativeListener(this._document,t,this.__he);qx.bom.Event.removeNativeListener(this._document,s,this.__hf);qx.bom.Event.removeNativeListener(this._document,r,this.__hd);}
,"webkit":function(){qx.bom.Event.removeNativeListener(this._document,n,this.__gX,true);qx.bom.Event.removeNativeListener(this._document,k,this.__gY,true);qx.bom.Event.removeNativeListener(this._document,r,this.__hd,false);qx.bom.Event.removeNativeListener(this._window,q,this.__hf,true);qx.bom.Event.removeNativeListener(this._window,m,this.__ha,true);qx.bom.Event.removeNativeListener(this._window,p,this.__hb,true);}
,"opera":function(){qx.bom.Event.removeNativeListener(this._document,n,this.__gX,true);qx.bom.Event.removeNativeListener(this._document,k,this.__gY,true);qx.bom.Event.removeNativeListener(this._window,v,this.__he,true);qx.bom.Event.removeNativeListener(this._window,q,this.__hf,true);}
}),__hk:qx.event.GlobalError.observeMethod(qx.core.Environment.select(l,{"gecko":function(bb){var bc=qx.bom.Event.getTarget(bb);if(!this.__hw(bc)){qx.bom.Event.preventDefault(bb);}
;}
,"default":null})),__hl:qx.event.GlobalError.observeMethod(qx.core.Environment.select(l,{"mshtml":function(bd){this.__hj();var bf=qx.bom.Event.getTarget(bd);var be=this.__hu(bf);if(be){this.setFocus(be);}
;this.tryActivate(bf);}
,"opera":function(bg){var bh=qx.bom.Event.getTarget(bg);if(bh==this._document||bh==this._window){this.__hj();if(this.__hg){this.setFocus(this.__hg);delete this.__hg;}
;if(this.__hh){this.setActive(this.__hh);delete this.__hh;}
;}
else {this.setFocus(bh);this.tryActivate(bh);if(!this.__hw(bh)){bh.selectionStart=0;bh.selectionEnd=0;}
;}
;}
,"default":null})),__hm:qx.event.GlobalError.observeMethod(qx.core.Environment.select(l,{"mshtml":function(bi){var bj=qx.bom.Event.getRelatedTarget(bi);if(bj==null){this.__hi();this.resetFocus();this.resetActive();}
;}
,"webkit":function(bk){var bl=qx.bom.Event.getTarget(bk);if(bl===this.getFocus()){this.resetFocus();}
;if(bl===this.getActive()){this.resetActive();}
;}
,"opera":function(bm){var bn=qx.bom.Event.getTarget(bm);if(bn==this._document){this.__hi();this.__hg=this.getFocus();this.__hh=this.getActive();this.resetFocus();this.resetActive();}
else {if(bn===this.getFocus()){this.resetFocus();}
;if(bn===this.getActive()){this.resetActive();}
;}
;}
,"default":null})),__hn:qx.event.GlobalError.observeMethod(qx.core.Environment.select(l,{"gecko":function(bo){var bp=qx.bom.Event.getTarget(bo);if(bp===this._window||bp===this._document){this.__hi();this.resetActive();this.resetFocus();}
;}
,"webkit":function(bq){var br=qx.bom.Event.getTarget(bq);if(br===this._window||br===this._document){this.__hi();this.__hg=this.getFocus();this.__hh=this.getActive();this.resetActive();this.resetFocus();}
;}
,"default":null})),__ho:qx.event.GlobalError.observeMethod(qx.core.Environment.select(l,{"gecko":function(bs){var bt=qx.bom.Event.getTarget(bs);if(bt===this._window||bt===this._document){this.__hj();bt=this._body;}
;this.setFocus(bt);this.tryActivate(bt);}
,"webkit":function(bu){var bv=qx.bom.Event.getTarget(bu);if(bv===this._window||bv===this._document){this.__hj();if(this.__hg){this.setFocus(this.__hg);delete this.__hg;}
;if(this.__hh){this.setActive(this.__hh);delete this.__hh;}
;}
else {this.setFocus(bv);this.tryActivate(bv);}
;}
,"default":null})),__hp:qx.event.GlobalError.observeMethod(qx.core.Environment.select(l,{"mshtml":function(bw){var by=qx.bom.Event.getTarget(bw);var bx=this.__hu(by);if(bx){if(!this.__hw(by)){by.unselectable=o;try{document.selection.empty();}
catch(bz){}
;try{bx.focus();}
catch(bA){}
;}
;}
else {qx.bom.Event.preventDefault(bw);if(!this.__hw(by)){by.unselectable=o;}
;}
;}
,"webkit|gecko":function(bB){var bD=qx.bom.Event.getTarget(bB);var bC=this.__hu(bD);if(bC){this.setFocus(bC);}
else {qx.bom.Event.preventDefault(bB);}
;}
,"opera":function(bE){var bH=qx.bom.Event.getTarget(bE);var bF=this.__hu(bH);if(!this.__hw(bH)){qx.bom.Event.preventDefault(bE);if(bF){var bG=this.getFocus();if(bG&&bG.selectionEnd){bG.selectionStart=0;bG.selectionEnd=0;bG.blur();}
;if(bF){this.setFocus(bF);}
;}
;}
else if(bF){this.setFocus(bF);}
;}
,"default":null})),__hq:qx.event.GlobalError.observeMethod(qx.core.Environment.select(l,{"mshtml":function(bI){var bJ=qx.bom.Event.getTarget(bI);if(bJ.unselectable){bJ.unselectable=a;}
;this.tryActivate(this.__hr(bJ));}
,"gecko":function(bK){var bL=qx.bom.Event.getTarget(bK);while(bL&&bL.offsetWidth===undefined){bL=bL.parentNode;}
;if(bL){this.tryActivate(bL);}
;}
,"webkit|opera":function(bM){var bN=qx.bom.Event.getTarget(bM);this.tryActivate(this.__hr(bN));}
,"default":null})),__hr:qx.event.GlobalError.observeMethod(qx.core.Environment.select(l,{"mshtml|webkit":function(bO){var bP=this.getFocus();if(bP&&bO!=bP&&(bP.nodeName.toLowerCase()===d||bP.nodeName.toLowerCase()===g)){bO=bP;}
;return bO;}
,"default":function(bQ){return bQ;}
})),__hs:qx.event.GlobalError.observeMethod(qx.core.Environment.select(l,{"mshtml|webkit":function(bR){var bS=qx.bom.Event.getTarget(bR);if(!this.__hw(bS)){qx.bom.Event.preventDefault(bR);}
;}
,"default":null})),__ht:function(bT){var bU=qx.bom.element.Attribute.get(bT,b);if(bU>=1){return true;}
;var bV=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;if(bU>=0&&bV[bT.tagName]){return true;}
;return false;}
,__hu:function(bW){while(bW&&bW.nodeType===1){if(bW.getAttribute(x)==o){return null;}
;if(this.__ht(bW)){return bW;}
;bW=bW.parentNode;}
;return this._body;}
,__hv:function(bX){var bY=bX;while(bX&&bX.nodeType===1){if(bX.getAttribute(w)==o){return null;}
;bX=bX.parentNode;}
;return bY;}
,__hw:function(ca){while(ca&&ca.nodeType===1){var cb=ca.getAttribute(c);if(cb!=null){return cb===o;}
;ca=ca.parentNode;}
;return true;}
,_applyActive:function(cc,cd){if(cd){this.__gD(cd,cc,h,true);}
;if(cc){this.__gD(cc,cd,z,true);}
;}
,_applyFocus:function(ce,cf){if(cf){this.__gD(cf,ce,s,true);}
;if(ce){this.__gD(ce,cf,t,true);}
;if(cf){this.__gD(cf,ce,p,false);}
;if(ce){this.__gD(ce,cf,m,false);}
;}
},destruct:function(){this._stopObserver();this._manager=this._window=this._document=this._root=this._body=this.__hx=null;}
,defer:function(cg){qx.event.Registration.addHandler(cg);var ch=cg.FOCUSABLE_ELEMENTS;for(var ci in ch){ch[ci.toUpperCase()]=1;}
;}
});}
)();
(function(){var c="abstract",b="qx.event.dispatch.AbstractBubbling",a="qx.debug";qx.Class.define(b,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,type:c,construct:function(d){this._manager=d;}
,members:{_getParent:function(e){throw new Error("Missing implementation");}
,canDispatchEvent:function(f,event,g){return event.getBubbles();}
,dispatchEvent:function(h,event,k){var parent=h;var t=this._manager;var q,x;var o;var s,v;var u;var w=[];q=t.getListeners(h,k,true);x=t.getListeners(h,k,false);if(q){w.push(q);}
;if(x){w.push(x);}
;var parent=this._getParent(h);var m=[];var l=[];var n=[];var r=[];while(parent!=null){q=t.getListeners(parent,k,true);if(q){n.push(q);r.push(parent);}
;x=t.getListeners(parent,k,false);if(x){m.push(x);l.push(parent);}
;parent=this._getParent(parent);}
;event.setEventPhase(qx.event.type.Event.CAPTURING_PHASE);for(var i=n.length-1;i>=0;i-- ){u=r[i];event.setCurrentTarget(u);o=n[i];for(var j=0,p=o.length;j<p;j++ ){s=o[j];v=s.context||u;if(qx.core.Environment.get(a)){if(v&&v.isDisposed&&v.isDisposed()){this.warn("The context object '"+v+"' for the event '"+k+"' of '"+u+"'is already disposed.");}
;}
;s.handler.call(v,event);}
;if(event.getPropagationStopped()){return;}
;}
;event.setEventPhase(qx.event.type.Event.AT_TARGET);event.setCurrentTarget(h);for(var i=0,y=w.length;i<y;i++ ){o=w[i];for(var j=0,p=o.length;j<p;j++ ){s=o[j];v=s.context||h;if(qx.core.Environment.get(a)){if(v&&v.isDisposed&&v.isDisposed()){this.warn("The context object '"+v+"' for the event '"+k+"' of '"+h+"'is already disposed.");}
;}
;s.handler.call(v,event);}
;if(event.getPropagationStopped()){return;}
;}
;event.setEventPhase(qx.event.type.Event.BUBBLING_PHASE);for(var i=0,y=m.length;i<y;i++ ){u=l[i];event.setCurrentTarget(u);o=m[i];for(var j=0,p=o.length;j<p;j++ ){s=o[j];v=s.context||u;if(qx.core.Environment.get(a)){if(v&&v.isDisposed&&v.isDisposed()){this.warn("The context object '"+v+"' for the event '"+k+"' of '"+u+"'is already disposed.");}
;}
;s.handler.call(v,event);}
;if(event.getPropagationStopped()){return;}
;}
;}
}});}
)();
(function(){var a="qx.event.dispatch.DomBubbling";qx.Class.define(a,{extend:qx.event.dispatch.AbstractBubbling,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL},members:{_getParent:function(b){return b.parentNode;}
,canDispatchEvent:function(c,event,d){return c.nodeType!==undefined&&event.getBubbles();}
},defer:function(e){qx.event.Registration.addDispatcher(e);}
});}
)();
(function(){var o="qx.bom.Selection",n="button",m="#text",l="opera",k="body",j='character',i="webkit",h="gecko",g="input",f="StartToStart",c="textarea",e="engine.name",d="EndToEnd",b="character",a="html.selection";qx.Class.define(o,{statics:{getSelectionObject:qx.core.Environment.select(a,{"selection":function(p){return p.selection;}
,"default":function(q){return qx.dom.Node.getWindow(q).getSelection();}
}),get:qx.core.Environment.select(a,{"selection":function(r){var s=qx.bom.Range.get(qx.dom.Node.getDocument(r));return s.text;}
,"default":function(t){if(this.__hy(t)){return t.value.substring(t.selectionStart,t.selectionEnd);}
else {return this.getSelectionObject(qx.dom.Node.getDocument(t)).toString();}
;}
}),getLength:qx.core.Environment.select(a,{"selection":function(u){var w=this.get(u);var v=qx.util.StringSplit.split(w,/\r\n/);return w.length-(v.length-1);}
,"default":function(x){if(qx.core.Environment.get(e)==l){var C,A,y;if(this.__hy(x)){var B=x.selectionStart;var z=x.selectionEnd;C=x.value.substring(B,z);A=z-B;}
else {C=qx.bom.Selection.get(x);A=C.length;}
;y=qx.util.StringSplit.split(C,/\r\n/);return A-(y.length-1);}
;if(this.__hy(x)){return x.selectionEnd-x.selectionStart;}
else {return this.get(x).length;}
;}
}),getStart:qx.core.Environment.select(a,{"selection":function(D){if(this.__hy(D)){var I=qx.bom.Range.get();if(!D.contains(I.parentElement())){return -1;}
;var J=qx.bom.Range.get(D);var H=D.value.length;J.moveToBookmark(I.getBookmark());J.moveEnd(j,H);return H-J.text.length;}
else {var J=qx.bom.Range.get(D);var F=J.parentElement();var K=qx.bom.Range.get();try{K.moveToElementText(F);}
catch(M){return 0;}
;var E=qx.bom.Range.get(qx.dom.Node.getBodyElement(D));E.setEndPoint(f,J);E.setEndPoint(d,K);if(K.compareEndPoints(f,E)==0){return 0;}
;var G;var L=0;while(true){G=E.moveStart(b,-1);if(K.compareEndPoints(f,E)==0){break;}
;if(G==0){break;}
else {L++ ;}
;}
;return  ++L;}
;}
,"default":function(N){if(qx.core.Environment.get(e)===h||qx.core.Environment.get(e)===i){if(this.__hy(N)){return N.selectionStart;}
else {var P=qx.dom.Node.getDocument(N);var O=this.getSelectionObject(P);if(O.anchorOffset<O.focusOffset){return O.anchorOffset;}
else {return O.focusOffset;}
;}
;}
;if(this.__hy(N)){return N.selectionStart;}
else {return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(N)).anchorOffset;}
;}
}),getEnd:qx.core.Environment.select(a,{"selection":function(Q){if(this.__hy(Q)){var V=qx.bom.Range.get();if(!Q.contains(V.parentElement())){return -1;}
;var W=qx.bom.Range.get(Q);var U=Q.value.length;W.moveToBookmark(V.getBookmark());W.moveStart(j,-U);return W.text.length;}
else {var W=qx.bom.Range.get(Q);var S=W.parentElement();var X=qx.bom.Range.get();try{X.moveToElementText(S);}
catch(ba){return 0;}
;var U=X.text.length;var R=qx.bom.Range.get(qx.dom.Node.getBodyElement(Q));R.setEndPoint(d,W);R.setEndPoint(f,X);if(X.compareEndPoints(d,R)==0){return U-1;}
;var T;var Y=0;while(true){T=R.moveEnd(b,1);if(X.compareEndPoints(d,R)==0){break;}
;if(T==0){break;}
else {Y++ ;}
;}
;return U-( ++Y);}
;}
,"default":function(bb){if(qx.core.Environment.get(e)===h||qx.core.Environment.get(e)===i){if(this.__hy(bb)){return bb.selectionEnd;}
else {var bd=qx.dom.Node.getDocument(bb);var bc=this.getSelectionObject(bd);if(bc.focusOffset>bc.anchorOffset){return bc.focusOffset;}
else {return bc.anchorOffset;}
;}
;}
;if(this.__hy(bb)){return bb.selectionEnd;}
else {return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(bb)).focusOffset;}
;}
}),__hy:function(be){return qx.dom.Node.isElement(be)&&(be.nodeName.toLowerCase()==g||be.nodeName.toLowerCase()==c);}
,set:qx.core.Environment.select(a,{"selection":function(bf,bg,bh){var bi;if(qx.dom.Node.isDocument(bf)){bf=bf.body;}
;if(qx.dom.Node.isElement(bf)||qx.dom.Node.isText(bf)){switch(bf.nodeName.toLowerCase()){case g:case c:case n:if(bh===undefined){bh=bf.value.length;}
;if(bg>=0&&bg<=bf.value.length&&bh>=0&&bh<=bf.value.length){bi=qx.bom.Range.get(bf);bi.collapse(true);bi.moveStart(b,bg);bi.moveEnd(b,bh-bg);bi.select();return true;}
;break;case m:if(bh===undefined){bh=bf.nodeValue.length;}
;if(bg>=0&&bg<=bf.nodeValue.length&&bh>=0&&bh<=bf.nodeValue.length){bi=qx.bom.Range.get(qx.dom.Node.getBodyElement(bf));bi.moveToElementText(bf.parentNode);bi.collapse(true);bi.moveStart(b,bg);bi.moveEnd(b,bh-bg);bi.select();return true;}
;break;default:if(bh===undefined){bh=bf.childNodes.length-1;}
;if(bf.childNodes[bg]&&bf.childNodes[bh]){bi=qx.bom.Range.get(qx.dom.Node.getBodyElement(bf));bi.moveToElementText(bf.childNodes[bg]);bi.collapse(true);var bj=qx.bom.Range.get(qx.dom.Node.getBodyElement(bf));bj.moveToElementText(bf.childNodes[bh]);bi.setEndPoint(d,bj);bi.select();return true;}
;};}
;return false;}
,"default":function(bk,bl,bm){var bq=bk.nodeName.toLowerCase();if(qx.dom.Node.isElement(bk)&&(bq==g||bq==c)){if(bm===undefined){bm=bk.value.length;}
;if(bl>=0&&bl<=bk.value.length&&bm>=0&&bm<=bk.value.length){bk.focus();bk.select();bk.setSelectionRange(bl,bm);return true;}
;}
else {var bo=false;var bp=qx.dom.Node.getWindow(bk).getSelection();var bn=qx.bom.Range.get(bk);if(qx.dom.Node.isText(bk)){if(bm===undefined){bm=bk.length;}
;if(bl>=0&&bl<bk.length&&bm>=0&&bm<=bk.length){bo=true;}
;}
else if(qx.dom.Node.isElement(bk)){if(bm===undefined){bm=bk.childNodes.length-1;}
;if(bl>=0&&bk.childNodes[bl]&&bm>=0&&bk.childNodes[bm]){bo=true;}
;}
else if(qx.dom.Node.isDocument(bk)){bk=bk.body;if(bm===undefined){bm=bk.childNodes.length-1;}
;if(bl>=0&&bk.childNodes[bl]&&bm>=0&&bk.childNodes[bm]){bo=true;}
;}
;if(bo){if(!bp.isCollapsed){bp.collapseToStart();}
;bn.setStart(bk,bl);if(qx.dom.Node.isText(bk)){bn.setEnd(bk,bm);}
else {bn.setEndAfter(bk.childNodes[bm]);}
;if(bp.rangeCount>0){bp.removeAllRanges();}
;bp.addRange(bn);return true;}
;}
;return false;}
}),setAll:function(br){return qx.bom.Selection.set(br,0);}
,clear:qx.core.Environment.select(a,{"selection":function(bs){var bt=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(bs));var bu=qx.bom.Range.get(bs);var parent=bu.parentElement();var bv=qx.bom.Range.get(qx.dom.Node.getDocument(bs));if(parent==bv.parentElement()&&parent==bs){bt.empty();}
;}
,"default":function(bw){var by=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(bw));var bA=bw.nodeName.toLowerCase();if(qx.dom.Node.isElement(bw)&&(bA==g||bA==c)){bw.setSelectionRange(0,0);qx.bom.Element.blur(bw);}
else if(qx.dom.Node.isDocument(bw)||bA==k){by.collapse(bw.body?bw.body:bw,0);}
else {var bz=qx.bom.Range.get(bw);if(!bz.collapsed){var bB;var bx=bz.commonAncestorContainer;if(qx.dom.Node.isElement(bw)&&qx.dom.Node.isText(bx)){bB=bx.parentNode;}
else {bB=bx;}
;if(bB==bw){by.collapse(bw,0);}
;}
;}
;}
})}});}
)();
(function(){var l="qx.bom.Range",k="text",j="password",i="file",h="submit",g="reset",f="textarea",e="input",d="hidden",c="html.selection",a="body",b="button";qx.Class.define(l,{statics:{get:qx.core.Environment.select(c,{"selection":function(m){if(qx.dom.Node.isElement(m)){switch(m.nodeName.toLowerCase()){case e:switch(m.type){case k:case j:case d:case b:case g:case i:case h:return m.createTextRange();break;default:return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(m)).createRange();};break;case f:case a:case b:return m.createTextRange();break;default:return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(m)).createRange();};}
else {if(m==null){m=window;}
;return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(m)).createRange();}
;}
,"default":function(n){var o=qx.dom.Node.getDocument(n);var p=qx.bom.Selection.getSelectionObject(o);if(p.rangeCount>0){return p.getRangeAt(0);}
else {return o.createRange();}
;}
})}});}
)();
(function(){var j="m",h="g",g="^",f="qx.util.StringSplit",e="i",d="$(?!\\s)",c="[object RegExp]",b="y",a="";qx.Class.define(f,{statics:{split:function(k,l,m){if(Object.prototype.toString.call(l)!==c){return String.prototype.split.call(k,l,m);}
;var t=[],n=0,r=(l.ignoreCase?e:a)+(l.multiline?j:a)+(l.sticky?b:a),l=RegExp(l.source,r+h),q,u,o,p,s=/()??/.exec(a)[1]===undefined;k=k+a;if(!s){q=RegExp(g+l.source+d,r);}
;if(m===undefined||+m<0){m=Infinity;}
else {m=Math.floor(+m);if(!m){return [];}
;}
;while(u=l.exec(k)){o=u.index+u[0].length;if(o>n){t.push(k.slice(n,u.index));if(!s&&u.length>1){u[0].replace(q,function(){for(var i=1;i<arguments.length-2;i++ ){if(arguments[i]===undefined){u[i]=undefined;}
;}
;}
);}
;if(u.length>1&&u.index<k.length){Array.prototype.push.apply(t,u.slice(1));}
;p=u[0].length;n=o;if(t.length>=m){break;}
;}
;if(l.lastIndex===u.index){l.lastIndex++ ;}
;}
;if(n===k.length){if(p||!l.test(a)){t.push(a);}
;}
else {t.push(k.slice(n));}
;return t.length>m?t.slice(0,m):t;}
}});}
)();
(function(){var c="qx.event.handler.Appear",b="disappear",a="appear";qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(d){qx.core.Object.call(this);this.__fN=d;this.__gw={};qx.event.handler.Appear.__gx[this.$$hash]=this;}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{appear:true,disappear:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,__gx:{},refresh:function(){var e=this.__gx;for(var f in e){e[f].refresh();}
;}
},members:{__fN:null,__gw:null,canHandleEvent:function(g,h){}
,registerEvent:function(i,j,k){var l=qx.core.ObjectRegistry.toHashCode(i)+j;var m=this.__gw;if(m&&!m[l]){m[l]=i;i.$$displayed=i.offsetWidth>0;}
;}
,unregisterEvent:function(n,o,p){var q=qx.core.ObjectRegistry.toHashCode(n)+o;var r=this.__gw;if(!r){return;}
;if(r[q]){delete r[q];}
;}
,refresh:function(){var v=this.__gw;var w;for(var u in v){w=v[u];var s=w.offsetWidth>0;if((!!w.$$displayed)!==s){w.$$displayed=s;var t=qx.event.Registration.createEvent(s?a:b);this.__fN.dispatchEvent(w,t);}
;}
;}
},destruct:function(){this.__fN=this.__gw=null;delete qx.event.handler.Appear.__gx[this.$$hash];}
,defer:function(x){qx.event.Registration.addHandler(x);}
});}
)();
(function(){var d="qx.event.handler.Element",c="load",b="iframe",a="-";qx.Class.define(d,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(e){qx.core.Object.call(this);this._manager=e;this._registeredEvents={};}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{abort:true,load:true,scroll:true,select:true,reset:true,submit:true},CANCELABLE:{selectstart:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(f,g){if(g===c){return f.tagName.toLowerCase()!==b;}
else {return true;}
;}
,registerEvent:function(h,i,j){var m=qx.core.ObjectRegistry.toHashCode(h);var k=m+a+i;var l=qx.lang.Function.listener(this._onNative,this,k);qx.bom.Event.addNativeListener(h,i,l);this._registeredEvents[k]={element:h,type:i,listener:l};}
,unregisterEvent:function(n,o,p){var s=this._registeredEvents;if(!s){return;}
;var t=qx.core.ObjectRegistry.toHashCode(n);var q=t+a+o;var r=this._registeredEvents[q];if(r){qx.bom.Event.removeNativeListener(n,o,r.listener);}
;delete this._registeredEvents[q];}
,_onNative:qx.event.GlobalError.observeMethod(function(u,v){var x=this._registeredEvents;if(!x){return;}
;var w=x[v];var y=this.constructor.CANCELABLE[w.type];qx.event.Registration.fireNonBubblingEvent(w.element,w.type,qx.event.type.Native,[u,undefined,undefined,undefined,y]);}
)},destruct:function(){var z;var A=this._registeredEvents;for(var B in A){z=A[B];qx.bom.Event.removeNativeListener(z.element,z.type,z.listener);}
;this._manager=this._registeredEvents=null;}
,defer:function(C){qx.event.Registration.addHandler(C);}
});}
)();
(function(){var t="engine.version",s="useraction",r="webkit",q="gecko",p="DOMMouseScroll",o="qx.event.handler.Mouse",n="os.name",m="mouseover",l="mouseout",k="ios",d="mousemove",j="on",g="dblclick",c="mousedown",b="contextmenu",f="mousewheel",e="mouseup",h="engine.name",a="click";qx.Class.define(o,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(u){qx.core.Object.call(this);this.__fN=u;this.__cf=u.getWindow();this.__dg=this.__cf.document;this._initButtonObserver();this._initMoveObserver();this._initWheelObserver();}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE+qx.event.IEventHandler.TARGET_DOCUMENT+qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__gy:null,__gz:null,__gA:null,__gB:null,__gC:null,__fN:null,__cf:null,__dg:null,canHandleEvent:function(v,w){}
,registerEvent:qx.core.Environment.get(n)===k?function(x,y,z){x[j+y]=(function(){return null;}
);}
:(function(){return null;}
),unregisterEvent:qx.core.Environment.get(n)===k?function(A,B,C){A[j+B]=undefined;}
:(function(){return null;}
),__gD:function(D,E,F){if(!F){F=qx.bom.Event.getTarget(D);}
;if(F&&F.nodeType){qx.event.Registration.fireEvent(F,E||D.type,E==f?qx.event.type.MouseWheel:qx.event.type.Mouse,[D,F,null,true,true]);}
;qx.event.Registration.fireEvent(this.__cf,s,qx.event.type.Data,[E||D.type]);}
,__gE:function(){var H=[this.__cf,this.__dg,this.__dg.body];var I=this.__cf;var G=p;for(var i=0;i<H.length;i++ ){if(qx.bom.Event.supportsEvent(H[i],f)){G=f;I=H[i];break;}
;}
;return {type:G,target:I};}
,_initButtonObserver:function(){this.__gy=qx.lang.Function.listener(this._onButtonEvent,this);var Event=qx.bom.Event;Event.addNativeListener(this.__dg,c,this.__gy);Event.addNativeListener(this.__dg,e,this.__gy);Event.addNativeListener(this.__dg,a,this.__gy);Event.addNativeListener(this.__dg,g,this.__gy);Event.addNativeListener(this.__dg,b,this.__gy);}
,_initMoveObserver:function(){this.__gz=qx.lang.Function.listener(this._onMoveEvent,this);var Event=qx.bom.Event;Event.addNativeListener(this.__dg,d,this.__gz);Event.addNativeListener(this.__dg,m,this.__gz);Event.addNativeListener(this.__dg,l,this.__gz);}
,_initWheelObserver:function(){this.__gA=qx.lang.Function.listener(this._onWheelEvent,this);var J=this.__gE();qx.bom.Event.addNativeListener(J.target,J.type,this.__gA);}
,_stopButtonObserver:function(){var Event=qx.bom.Event;Event.removeNativeListener(this.__dg,c,this.__gy);Event.removeNativeListener(this.__dg,e,this.__gy);Event.removeNativeListener(this.__dg,a,this.__gy);Event.removeNativeListener(this.__dg,g,this.__gy);Event.removeNativeListener(this.__dg,b,this.__gy);}
,_stopMoveObserver:function(){var Event=qx.bom.Event;Event.removeNativeListener(this.__dg,d,this.__gz);Event.removeNativeListener(this.__dg,m,this.__gz);Event.removeNativeListener(this.__dg,l,this.__gz);}
,_stopWheelObserver:function(){var K=this.__gE();qx.bom.Event.removeNativeListener(K.target,K.type,this.__gA);}
,_onMoveEvent:qx.event.GlobalError.observeMethod(function(L){this.__gD(L);}
),_onButtonEvent:qx.event.GlobalError.observeMethod(function(M){var O=M.type;var P=qx.bom.Event.getTarget(M);if(qx.core.Environment.get(h)==q||qx.core.Environment.get(h)==r){if(P&&P.nodeType==3){P=P.parentNode;}
;}
;var N=qx.event.handler.DragDrop&&this.__fN.getHandler(qx.event.handler.DragDrop).isSessionActive();if(N&&O==a){return;}
;if(this.__gF){this.__gF(M,O,P);}
;if(this.__gH){this.__gH(M,O,P);}
;this.__gD(M,O,P);if(this.__gG){this.__gG(M,O,P);}
;if(this.__gI&&!N){this.__gI(M,O,P);}
;this.__gB=O;}
),_onWheelEvent:qx.event.GlobalError.observeMethod(function(Q){this.__gD(Q,f);}
),__gF:qx.core.Environment.select(h,{"webkit":function(R,S,T){if(parseFloat(qx.core.Environment.get(t))<530){if(S==b){this.__gD(R,e,T);}
;}
;}
,"default":null}),__gG:qx.core.Environment.select(h,{"opera":function(U,V,W){if(V==e&&U.button==2){this.__gD(U,b,W);}
;}
,"default":null}),__gH:qx.core.Environment.select(h,{"mshtml":function(X,Y,ba){if(X.target!==undefined){return;}
;if(Y==e&&this.__gB==a){this.__gD(X,c,ba);}
else if(Y==g){this.__gD(X,a,ba);}
;}
,"default":null}),__gI:qx.core.Environment.select(h,{"mshtml":null,"default":function(bb,bc,bd){switch(bc){case c:this.__gC=bd;break;case e:if(bd!==this.__gC){var be=qx.dom.Hierarchy.getCommonParent(bd,this.__gC);if(be){this.__gD(bb,a,be);}
;}
;};}
})},destruct:function(){this._stopButtonObserver();this._stopMoveObserver();this._stopWheelObserver();this.__fN=this.__cf=this.__dg=this.__gC=null;}
,defer:function(bf){qx.event.Registration.addHandler(bf);}
});}
)();
(function(){var j="click",i="contextmenu",h="qx.event.type.Mouse",g="browser.documentmode",f="browser.name",e="ie",d="none",c="middle",b="left",a="right";qx.Class.define(h,{extend:qx.event.type.Dom,members:{_cloneNativeEvent:function(k,l){var l=qx.event.type.Dom.prototype._cloneNativeEvent.call(this,k,l);l.button=k.button;l.clientX=k.clientX;l.clientY=k.clientY;l.pageX=k.pageX;l.pageY=k.pageY;l.screenX=k.screenX;l.screenY=k.screenY;l.wheelDelta=k.wheelDelta;l.wheelDeltaX=k.wheelDeltaX;l.wheelDeltaY=k.wheelDeltaY;l.detail=k.detail;l.axis=k.axis;l.wheelX=k.wheelX;l.wheelY=k.wheelY;l.HORIZONTAL_AXIS=k.HORIZONTAL_AXIS;l.srcElement=k.srcElement;l.target=k.target;return l;}
,__gJ:{'0':b,'2':a,'1':c},__gK:{'1':b,'2':a,'4':c},stop:function(){this.stopPropagation();}
,getButton:function(){switch(this._type){case i:return a;case j:if(qx.core.Environment.get(f)===e&&qx.core.Environment.get(g)<9){return b;}
;default:if(this._native.target!==undefined){return this.__gJ[this._native.button]||d;}
else {return this.__gK[this._native.button]||d;}
;};}
,isLeftPressed:function(){return this.getButton()===b;}
,isMiddlePressed:function(){return this.getButton()===c;}
,isRightPressed:function(){return this.getButton()===a;}
,getRelatedTarget:function(){return this._relatedTarget;}
,getViewportLeft:function(){return this._native.clientX;}
,getViewportTop:function(){return this._native.clientY;}
,getDocumentLeft:function(){if(this._native.pageX!==undefined){return this._native.pageX;}
else {var m=qx.dom.Node.getWindow(this._native.srcElement);return this._native.clientX+qx.bom.Viewport.getScrollLeft(m);}
;}
,getDocumentTop:function(){if(this._native.pageY!==undefined){return this._native.pageY;}
else {var n=qx.dom.Node.getWindow(this._native.srcElement);return this._native.clientY+qx.bom.Viewport.getScrollTop(n);}
;}
,getScreenLeft:function(){return this._native.screenX;}
,getScreenTop:function(){return this._native.screenY;}
}});}
)();
(function(){var l="engine.name",k="x",j="osx",i="win",h="qx.dynamicmousewheel",g="chrome",f="qx.event.type.MouseWheel",d="browser.name",c="y",b="os.name",a="engine.version";qx.Class.define(f,{extend:qx.event.type.Mouse,statics:{MAXSCROLL:null,MINSCROLL:null,FACTOR:1},members:{stop:function(){this.stopPropagation();this.preventDefault();}
,__gL:function(m){var n=Math.abs(m);if(qx.event.type.MouseWheel.MINSCROLL==null||qx.event.type.MouseWheel.MINSCROLL>n){qx.event.type.MouseWheel.MINSCROLL=n;this.__gM();}
;if(qx.event.type.MouseWheel.MAXSCROLL==null||qx.event.type.MouseWheel.MAXSCROLL<n){qx.event.type.MouseWheel.MAXSCROLL=n;this.__gM();}
;if(qx.event.type.MouseWheel.MAXSCROLL===n&&qx.event.type.MouseWheel.MINSCROLL===n){return 2*(m/n);}
;var o=qx.event.type.MouseWheel.MAXSCROLL-qx.event.type.MouseWheel.MINSCROLL;var p=(m/o)*Math.log(o)*qx.event.type.MouseWheel.FACTOR;return p<0?Math.min(p,-1):Math.max(p,1);}
,__gM:function(){var q=qx.event.type.MouseWheel.MAXSCROLL||0;var t=qx.event.type.MouseWheel.MINSCROLL||q;if(q<=t){return;}
;var r=q-t;var s=(q/r)*Math.log(r);if(s==0){s=1;}
;qx.event.type.MouseWheel.FACTOR=6/s;}
,getWheelDelta:function(u){var e=this._native;if(u===undefined){if(v===undefined){var v=-e.wheelDelta;if(e.wheelDelta===undefined){v=e.detail;}
;}
;return this.__gN(v);}
;if(u===k){var x=0;if(e.wheelDelta!==undefined){if(e.wheelDeltaX!==undefined){x=e.wheelDeltaX?this.__gN(-e.wheelDeltaX):0;}
;}
else {if(e.axis&&e.axis==e.HORIZONTAL_AXIS){x=this.__gN(e.detail);}
;}
;return x;}
;if(u===c){var y=0;if(e.wheelDelta!==undefined){if(e.wheelDeltaY!==undefined){y=e.wheelDeltaY?this.__gN(-e.wheelDeltaY):0;}
else {y=this.__gN(-e.wheelDelta);}
;}
else {if(!(e.axis&&e.axis==e.HORIZONTAL_AXIS)){y=this.__gN(e.detail);}
;}
;return y;}
;return 0;}
,__gN:function(w){if(qx.core.Environment.get(h)){return this.__gL(w);}
else {var z=qx.core.Environment.select(l,{"default":function(){return w/40;}
,"gecko":function(){return w;}
,"webkit":function(){if(qx.core.Environment.get(d)==g){if(qx.core.Environment.get(b)==j){return w/60;}
else {return w/120;}
;}
else {if(qx.core.Environment.get(b)==i){var A=120;if(parseFloat(qx.core.Environment.get(a))==533.16){A=1200;}
;}
else {A=40;if(parseFloat(qx.core.Environment.get(a))==533.16||parseFloat(qx.core.Environment.get(a))==533.17||parseFloat(qx.core.Environment.get(a))==533.18){A=1200;}
;}
;return w/A;}
;}
});return z.call(this);}
;}
}});}
)();
(function(){var g="qx.dom.Hierarchy",f="previousSibling",e="nextSibling",d="parentNode",c="*",b="html.element.compareDocumentPosition",a="html.element.contains";qx.Bootstrap.define(g,{statics:{getNodeIndex:function(h){var i=0;while(h&&(h=h.previousSibling)){i++ ;}
;return i;}
,getElementIndex:function(j){var k=0;var l=qx.dom.Node.ELEMENT;while(j&&(j=j.previousSibling)){if(j.nodeType==l){k++ ;}
;}
;return k;}
,getNextElementSibling:function(m){while(m&&(m=m.nextSibling)&&!qx.dom.Node.isElement(m)){continue;}
;return m||null;}
,getPreviousElementSibling:function(n){while(n&&(n=n.previousSibling)&&!qx.dom.Node.isElement(n)){continue;}
;return n||null;}
,contains:function(o,p){if(qx.core.Environment.get(a)){if(qx.dom.Node.isDocument(o)){var q=qx.dom.Node.getDocument(p);return o&&q==o;}
else if(qx.dom.Node.isDocument(p)){return false;}
else {return o.contains(p);}
;}
else if(qx.core.Environment.get(b)){return !!(o.compareDocumentPosition(p)&16);}
else {while(p){if(o==p){return true;}
;p=p.parentNode;}
;return false;}
;}
,isRendered:function(r){var s=r.ownerDocument||r.document;if(qx.core.Environment.get(a)){if(!r.parentNode||!r.offsetParent){return false;}
;return s.body.contains(r);}
else if(qx.core.Environment.get(b)){return !!(s.compareDocumentPosition(r)&16);}
else {while(r){if(r==s.body){return true;}
;r=r.parentNode;}
;return false;}
;}
,isDescendantOf:function(t,u){return this.contains(u,t);}
,getCommonParent:function(v,w){if(v===w){return v;}
;if(qx.core.Environment.get(a)){while(v&&qx.dom.Node.isElement(v)){if(v.contains(w)){return v;}
;v=v.parentNode;}
;return null;}
else {var x=[];while(v||w){if(v){if(qx.lang.Array.contains(x,v)){return v;}
;x.push(v);v=v.parentNode;}
;if(w){if(qx.lang.Array.contains(x,w)){return w;}
;x.push(w);w=w.parentNode;}
;}
;return null;}
;}
,getAncestors:function(y){return this._recursivelyCollect(y,d);}
,getChildElements:function(z){z=z.firstChild;if(!z){return [];}
;var A=this.getNextSiblings(z);if(z.nodeType===1){A.unshift(z);}
;return A;}
,getDescendants:function(B){return qx.lang.Array.fromCollection(B.getElementsByTagName(c));}
,getFirstDescendant:function(C){C=C.firstChild;while(C&&C.nodeType!=1){C=C.nextSibling;}
;return C;}
,getLastDescendant:function(D){D=D.lastChild;while(D&&D.nodeType!=1){D=D.previousSibling;}
;return D;}
,getPreviousSiblings:function(E){return this._recursivelyCollect(E,f);}
,getNextSiblings:function(F){return this._recursivelyCollect(F,e);}
,_recursivelyCollect:function(G,H){var I=[];while(G=G[H]){if(G.nodeType==1){I.push(G);}
;}
;return I;}
,getSiblings:function(J){return this.getPreviousSiblings(J).reverse().concat(this.getNextSiblings(J));}
,isEmpty:function(K){K=K.firstChild;while(K){if(K.nodeType===qx.dom.Node.ELEMENT||K.nodeType===qx.dom.Node.TEXT){return false;}
;K=K.nextSibling;}
;return true;}
,cleanWhitespace:function(L){var M=L.firstChild;while(M){var N=M.nextSibling;if(M.nodeType==3&&!/\S/.test(M.nodeValue)){L.removeChild(M);}
;M=N;}
;}
}});}
)();
(function(){var c="touchcancel",b="qx.event.type.Touch",a="touchend";qx.Class.define(b,{extend:qx.event.type.Dom,members:{_cloneNativeEvent:function(d,e){var e=qx.event.type.Dom.prototype._cloneNativeEvent.call(this,d,e);e.pageX=d.pageX;e.pageY=d.pageY;e.offsetX=d.offsetX;e.offsetY=d.offsetY;e.layerX=(d.offsetX||d.layerX);e.layerY=(d.offsetY||d.layerY);e.scale=d.scale;e.rotation=d.rotation;e.srcElement=d.srcElement;e.targetTouches=[];for(var i=0;i<d.targetTouches.length;i++ ){e.targetTouches[i]=d.targetTouches[i];}
;e.changedTouches=[];for(i=0;i<d.changedTouches.length;i++ ){e.changedTouches[i]=d.changedTouches[i];}
;e.touches=[];for(i=0;i<d.touches.length;i++ ){e.touches[i]=d.touches[i];}
;return e;}
,stop:function(){this.stopPropagation();}
,getAllTouches:function(){return this._native.touches;}
,getTargetTouches:function(){return this._native.targetTouches;}
,getChangedTargetTouches:function(){return this._native.changedTouches;}
,isMultiTouch:function(){return this.__hA().length>1;}
,getScale:function(){return this._native.scale;}
,getRotation:function(){return this._native.rotation;}
,getDocumentLeft:function(f){return this.__hz(f).pageX;}
,getDocumentTop:function(g){return this.__hz(g).pageY;}
,getScreenLeft:function(h){return this.__hz(h).screenX;}
,getScreenTop:function(j){return this.__hz(j).screenY;}
,getViewportLeft:function(k){return this.__hz(k).clientX;}
,getViewportTop:function(l){return this.__hz(l).clientY;}
,getIdentifier:function(m){return this.__hz(m).identifier;}
,__hz:function(n){n=n==null?0:n;return this.__hA()[n];}
,__hA:function(){var o=(this._isTouchEnd()?this.getChangedTargetTouches():this.getTargetTouches());return o;}
,_isTouchEnd:function(){return (this.getType()==a||this.getType()==c);}
}});}
)();
(function(){var a="qx.event.type.Tap";qx.Class.define(a,{extend:qx.event.type.Touch,members:{_isTouchEnd:function(){return true;}
}});}
)();
(function(){var a="qx.event.type.Swipe";qx.Class.define(a,{extend:qx.event.type.Touch,members:{_cloneNativeEvent:function(b,c){var c=qx.event.type.Touch.prototype._cloneNativeEvent.call(this,b,c);c.swipe=b.swipe;return c;}
,_isTouchEnd:function(){return true;}
,getStartTime:function(){return this._native.swipe.startTime;}
,getDuration:function(){return this._native.swipe.duration;}
,getAxis:function(){return this._native.swipe.axis;}
,getDirection:function(){return this._native.swipe.direction;}
,getVelocity:function(){return this._native.swipe.velocity;}
,getDistance:function(){return this._native.swipe.distance;}
}});}
)();
(function(){var o="event.pointer",n="foo",m="onhashchange",l="event.help",k="event.mspointer",j="event.touch",i="msPointerEnabled",h="event.hashchange",g="onhelp",f="pointerEvents",c="documentMode",e="qx.bom.client.Event",d="ontouchstart",b="mshtml",a="auto";qx.Bootstrap.define(e,{statics:{getTouch:function(){return (d in window);}
,getPointer:function(){var q=document.documentElement;if(f in q.style){var r=q.style.pointerEvents;q.style.pointerEvents=a;q.style.pointerEvents=n;var p=q.style.pointerEvents==a;q.style.pointerEvents=r;return p;}
;return false;}
,getMsPointer:function(){if(i in window.navigator){return window.navigator.msPointerEnabled;}
;return false;}
,getHelp:function(){return (g in document);}
,getHashChange:function(){var s=qx.bom.client.Engine.getName();var t=m in window;return (s!==b&&t)||(s===b&&c in document&&document.documentMode>=8&&t);}
},defer:function(u){qx.core.Environment.add(j,u.getTouch);qx.core.Environment.add(o,u.getPointer);qx.core.Environment.add(k,u.getMsPointer);qx.core.Environment.add(l,u.getHelp);qx.core.Environment.add(h,u.getHashChange);}
});}
)();
(function(){var g="resize",f="os.name",e="qx.event.handler.Orientation",d="landscape",c="android",b="portrait",a="orientationchange";qx.Class.define(e,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(h){qx.core.Object.call(this);this.__fN=h;this.__cf=h.getWindow();this._initObserver();}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{orientationchange:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__fN:null,__cf:null,__hB:null,_currentOrientation:null,__hC:null,canHandleEvent:function(i,j){}
,registerEvent:function(k,l,m){}
,unregisterEvent:function(n,o,p){}
,_initObserver:function(){this.__hC=qx.lang.Function.listener(this._onNative,this);this.__hB=qx.bom.Event.supportsEvent(this.__cf,a)?a:g;var Event=qx.bom.Event;Event.addNativeListener(this.__cf,this.__hB,this.__hC);}
,_stopObserver:function(){var Event=qx.bom.Event;Event.removeNativeListener(this.__cf,this.__hB,this.__hC);}
,_onNative:qx.event.GlobalError.observeMethod(function(q){var r=0;if(qx.core.Environment.get(f)==c){r=300;}
;qx.lang.Function.delay(this._onOrientationChange,r,this,q);}
),_onOrientationChange:function(s){var u=qx.bom.Viewport;var t=u.getOrientation(s.target);if(this._currentOrientation!=t){this._currentOrientation=t;var v=u.isLandscape(s.target)?d:b;qx.event.Registration.fireEvent(this.__cf,a,qx.event.type.Orientation,[t,v]);}
;}
},destruct:function(){this._stopObserver();this.__fN=this.__cf=null;}
,defer:function(w){qx.event.Registration.addHandler(w);}
});}
)();
(function(){var c="landscape",b="qx.event.type.Orientation",a="portrait";qx.Class.define(b,{extend:qx.event.type.Event,members:{__hD:null,__hE:null,init:function(d,e){qx.event.type.Event.prototype.init.call(this,false,false);this.__hD=d;this.__hE=e;return this;}
,clone:function(f){var g=qx.event.type.Event.prototype.clone.call(this,f);g.__hD=this.__hD;g.__hE=this.__hE;return g;}
,getOrientation:function(){return this.__hD;}
,isLandscape:function(){return this.__hE==c;}
,isPortrait:function(){return this.__hE==a;}
}});}
)();
(function(){var t="x",s="pointer-events",r="engine.name",q="webkit",p="none",o="tap",n="y",m="swipe",l="qx.event.handler.TouchCore",k="undefined",d="MSPointerUp",j="MSPointerDown",g="touchcancel",c="MSPointerMove",b="MSPointerCancel",f="touchend",e="event.mspointer",h="touchmove",a="touchstart";qx.Bootstrap.define(l,{extend:Object,statics:{TAP_MAX_DISTANCE:qx.core.Environment.get("os.name")!="android"?10:40,SWIPE_DIRECTION:{x:["left","right"],y:["up","down"]},SWIPE_MIN_DISTANCE:qx.core.Environment.get("os.name")!="android"?11:41,SWIPE_MIN_VELOCITY:0},construct:function(u,v){this.__hF=u;this.__fa=v;this._initTouchObserver();}
,members:{__hF:null,__fa:null,__hG:null,__hH:null,__hI:null,__hJ:null,__hK:null,__hL:null,__hM:null,__hN:null,__hO:null,__hP:null,_initTouchObserver:function(){this.__hG=qx.lang.Function.listener(this._onTouchEvent,this);var Event=qx.bom.Event;Event.addNativeListener(this.__hF,a,this.__hG);Event.addNativeListener(this.__hF,h,this.__hG);Event.addNativeListener(this.__hF,f,this.__hG);Event.addNativeListener(this.__hF,g,this.__hG);if(qx.core.Environment.get(e)){Event.addNativeListener(this.__hF,j,this.__hG);Event.addNativeListener(this.__hF,c,this.__hG);Event.addNativeListener(this.__hF,d,this.__hG);Event.addNativeListener(this.__hF,b,this.__hG);}
;}
,_stopTouchObserver:function(){var Event=qx.bom.Event;Event.removeNativeListener(this.__hF,a,this.__hG);Event.removeNativeListener(this.__hF,h,this.__hG);Event.removeNativeListener(this.__hF,f,this.__hG);Event.removeNativeListener(this.__hF,g,this.__hG);if(qx.core.Environment.get(e)){Event.removeNativeListener(this.__hF,j,this.__hG);Event.removeNativeListener(this.__hF,c,this.__hG);Event.removeNativeListener(this.__hF,d,this.__hG);Event.removeNativeListener(this.__hF,b,this.__hG);}
;}
,_onTouchEvent:function(w){this._commonTouchEventHandler(w);}
,_getScalingDistance:function(z,A){return (Math.sqrt(Math.pow(z.pageX-A.pageX,2)+Math.pow(z.pageY-A.pageY,2)));}
,_getRotationAngle:function(B,C){var x=B.pageX-C.pageX;var y=B.pageY-C.pageY;return (Math.atan2(y,x)*180/Math.PI);}
,_commonTouchEventHandler:function(D,E){var E=E||D.type;if(qx.core.Environment.get(e)){D.changedTouches=[D];D.targetTouches=[D];D.touches=[D];if(E==j){E=a;}
else if(E==d){E=f;}
else if(E==c){if(this.__hN==true){E=h;}
;}
else if(E==b){E=g;}
;}
;if(E==a){this.__hH=this._getTarget(D);this.__hM=true;if(D.touches&&D.touches.length>1){this.__hO=this._getScalingDistance(D.touches[0],D.touches[1]);this.__hP=this._getRotationAngle(D.touches[0],D.touches[1]);}
;}
;if(E==h){if(typeof D.scale==k&&D.changedTouches.length>1){var G=this._getScalingDistance(D.changedTouches[0],D.changedTouches[1]);D.scale=G/this.__hO;}
;if(typeof D.rotation==k&&D.changedTouches.length>1){var F=this._getRotationAngle(D.changedTouches[0],D.changedTouches[1]);D.rotation=F-this.__hP;}
;if(this.__hM){this.__hM=this._isBelowTapMaxDistance(D.changedTouches[0]);}
;}
;this._fireEvent(D,E);this.__hR(D,E);}
,_isBelowTapMaxDistance:function(H){var I={x:H.screenX-this.__hI,y:H.screenY-this.__hJ};var J=qx.event.handler.TouchCore;return (Math.abs(I.x)<=J.TAP_MAX_DISTANCE&&Math.abs(I.y)<=J.TAP_MAX_DISTANCE);}
,_getTarget:function(K){var M=qx.bom.Event.getTarget(K);if(qx.core.Environment.get(r)==q){if(M&&M.nodeType==3){M=M.parentNode;}
;}
else if(qx.core.Environment.get(e)){var L=this.__hQ(K);if(L){M=L;}
;}
;return M;}
,__hQ:function(N){if(N&&N.touches){var O=N.touches[0].clientX;var P=N.touches[0].clientY;}
;var R=document.msElementsFromPoint(O,P);if(R){for(var i=0;i<R.length;i++ ){var S=R[i];var Q=qx.bom.element.Style.get(S,s,3);if(Q!=p){return S;}
;}
;}
;return null;}
,_fireEvent:function(T,U,V){if(!V){V=this._getTarget(T);}
;var U=U||T.type;if(V&&V.nodeType&&this.__fa){this.__fa.emit(U,T);}
;}
,__hR:function(W,X,Y){if(!Y){Y=this._getTarget(W);}
;var X=X||W.type;if(X==a){this.__hS(W,Y);}
else if(X==h){this.__hT(W,Y);}
else if(X==f){this.__hU(W,Y);}
;}
,__hS:function(ba,bb){var bc=ba.changedTouches[0];this.__hN=true;this.__hI=bc.screenX;this.__hJ=bc.screenY;this.__hK=new Date().getTime();this.__hL=ba.changedTouches.length===1;}
,__hT:function(bd,be){if(this.__hL&&bd.changedTouches.length>1){this.__hL=false;}
;}
,__hU:function(bf,bg){this.__hN=false;if(this.__hL){var bh=bf.changedTouches[0];var bk={x:bh.screenX-this.__hI,y:bh.screenY-this.__hJ};var bi;if(this.__hH==bg&&this.__hM){if(qx.event&&qx.event.type&&qx.event.type.Tap){bi=qx.event.type.Tap;}
;this._fireEvent(bf,o,bg,bi);}
else {var bj=this.__hV(bf,bg,bk);if(bj){if(qx.event&&qx.event.type&&qx.event.type.Swipe){bi=qx.event.type.Swipe;}
;bf.swipe=bj;this._fireEvent(bf,m,bg,bi);}
;}
;}
;}
,__hV:function(bl,bm,bn){var br=qx.event.handler.TouchCore;var bs=new Date().getTime()-this.__hK;var bu=(Math.abs(bn.x)>=Math.abs(bn.y))?t:n;var bo=bn[bu];var bp=br.SWIPE_DIRECTION[bu][bo<0?0:1];var bt=(bs!==0)?bo/bs:0;var bq=null;if(Math.abs(bt)>=br.SWIPE_MIN_VELOCITY&&Math.abs(bo)>=br.SWIPE_MIN_DISTANCE){bq={startTime:this.__hK,duration:bs,axis:bu,direction:bp,distance:bo,velocity:bt};}
;return bq;}
,dispose:function(){this._stopTouchObserver();this.__hH=this.__hF=this.__fa=this.__hO=this.__hP=null;}
}});}
)();
(function(){var p="mshtml",o="engine.name",n="qx.event.handler.Touch",m="useraction",l="touchmove",k="event.mspointer",j="qx.mobile.nativescroll",i="dispose",h="touchstart",g="mouseup",c="touchend",f="mousedown",d="mousemove",b="event.touch",a="qx.mobile.emulatetouch";qx.Class.define(n,{extend:qx.event.handler.TouchCore,implement:qx.event.IEventHandler,construct:function(q){this.__fN=q;this.__cf=q.getWindow();this.__dg=this.__cf.document;qx.event.handler.TouchCore.apply(this,[this.__dg]);if(!qx.core.Environment.get(k)){this._initMouseObserver();}
;}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{touchstart:1,touchmove:1,touchend:1,touchcancel:1,tap:1,swipe:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE+qx.event.IEventHandler.TARGET_DOCUMENT,IGNORE_CAN_HANDLE:true,MOUSE_TO_TOUCH_MAPPING:{"mousedown":"touchstart","mousemove":"touchmove","mouseup":"touchend"}},members:{__hW:null,__fN:null,__cf:null,__dg:null,__hX:false,canHandleEvent:function(r,s){}
,registerEvent:function(t,u,v){}
,unregisterEvent:function(w,x,y){}
,_fireEvent:function(z,A,B,C){if(!B){B=this._getTarget(z);}
;var A=A||z.type;if(B&&B.nodeType){qx.event.Registration.fireEvent(B,A,C||qx.event.type.Touch,[z,B,null,true,true]);}
;qx.event.Registration.fireEvent(this.__cf,m,qx.event.type.Data,[A]);}
,__hY:qx.core.Environment.select(a,{"true":function(D){var E=D.type;var G=qx.event.handler.Touch.MOUSE_TO_TOUCH_MAPPING;if(G[E]){E=G[E];if(E==h&&this.__ia(D)){this.__hX=true;}
else if(E==c){this.__hX=false;}
;var H=this.__ib(D);var F=(E==c?[]:[H]);D.touches=F;D.targetTouches=F;D.changedTouches=[H];}
;return E;}
,"default":(function(){}
)}),__ia:qx.core.Environment.select(a,{"true":function(I){if((qx.core.Environment.get(o)==p)){var J=1;}
else {var J=0;}
;return I.button==J;}
,"default":(function(){}
)}),__ib:qx.core.Environment.select(a,{"true":function(K){var L=this._getTarget(K);return {clientX:K.clientX,clientY:K.clientY,screenX:K.screenX,screenY:K.screenY,pageX:K.pageX,pageY:K.pageY,identifier:1,target:L};}
,"default":(function(){}
)}),_initMouseObserver:qx.core.Environment.select(a,{"true":function(){if(!qx.core.Environment.get(b)){this.__hW=qx.lang.Function.listener(this._onMouseEvent,this);var Event=qx.bom.Event;Event.addNativeListener(this.__dg,f,this.__hW);Event.addNativeListener(this.__dg,d,this.__hW);Event.addNativeListener(this.__dg,g,this.__hW);}
;}
,"default":(function(){}
)}),_stopMouseObserver:qx.core.Environment.select(a,{"true":function(){if(!qx.core.Environment.get(b)){var Event=qx.bom.Event;Event.removeNativeListener(this.__dg,f,this.__hW);Event.removeNativeListener(this.__dg,d,this.__hW);Event.removeNativeListener(this.__dg,g,this.__hW);}
;}
,"default":(function(){}
)}),_onTouchEvent:qx.event.GlobalError.observeMethod(function(M){this._commonTouchEventHandler(M);}
),_onMouseEvent:qx.core.Environment.select(a,{"true":qx.event.GlobalError.observeMethod(function(N){if(!qx.core.Environment.get(b)){if(N.type==d&&!this.__hX){return;}
;var O=this.__hY(N);this._commonTouchEventHandler(N,O);}
;}
),"default":(function(){}
)}),dispose:function(){this.__ic(i);this._stopMouseObserver();this.__fN=this.__cf=this.__dg=null;}
,__ic:function(P,Q){qx.event.handler.TouchCore.prototype[P].apply(this,Q||[]);}
},defer:function(R){qx.event.Registration.addHandler(R);if(qx.core.Environment.get(b)){if(qx.core.Environment.get(j)==false){document.addEventListener(l,function(e){e.preventDefault();}
);}
;qx.event.Registration.getManager(document).getHandler(R);}
;}
});}
)();
(function(){var m="select-multiple",k="value",j="select",h="qx.event.handler.Input",g="checked",f="blur",d="keydown",c="propertychange",b="browser.version",a="browser.documentmode",A="opera",z="keyup",y="mshtml",x="keypress",w="engine.version",v="radio",u="checkbox",t="text",s="textarea",r="password",p="change",q="engine.name",n="input";qx.Class.define(h,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){qx.core.Object.call(this);this._onChangeCheckedWrapper=qx.lang.Function.listener(this._onChangeChecked,this);this._onChangeValueWrapper=qx.lang.Function.listener(this._onChangeValue,this);this._onInputWrapper=qx.lang.Function.listener(this._onInput,this);this._onPropertyWrapper=qx.lang.Function.listener(this._onProperty,this);if((qx.core.Environment.get(q)==A)){this._onKeyDownWrapper=qx.lang.Function.listener(this._onKeyDown,this);this._onKeyUpWrapper=qx.lang.Function.listener(this._onKeyUp,this);this._onBlurWrapper=qx.lang.Function.listener(this._onBlur,this);}
;}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{input:1,change:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{__id:false,__ie:null,__if:null,__ig:null,canHandleEvent:function(B,C){var D=B.tagName.toLowerCase();if(C===n&&(D===n||D===s)){return true;}
;if(C===p&&(D===n||D===s||D===j)){return true;}
;return false;}
,registerEvent:function(E,F,G){if(qx.core.Environment.get(q)==y&&(qx.core.Environment.get(w)<9||(qx.core.Environment.get(w)>=9&&qx.core.Environment.get(a)<9))){if(!E.__ih){var H=E.tagName.toLowerCase();var I=E.type;if(I===t||I===r||H===s||I===u||I===v){qx.bom.Event.addNativeListener(E,c,this._onPropertyWrapper);}
;if(I!==u&&I!==v){qx.bom.Event.addNativeListener(E,p,this._onChangeValueWrapper);}
;if(I===t||I===r){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,E);qx.bom.Event.addNativeListener(E,x,this._onKeyPressWrapped);}
;E.__ih=true;}
;}
else {if(F===n){this.__ii(E);}
else if(F===p){if(E.type===v||E.type===u){qx.bom.Event.addNativeListener(E,p,this._onChangeCheckedWrapper);}
else {qx.bom.Event.addNativeListener(E,p,this._onChangeValueWrapper);}
;if((qx.core.Environment.get(q)==A)||(qx.core.Environment.get(q)==y)){if(E.type===t||E.type===r){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,E);qx.bom.Event.addNativeListener(E,x,this._onKeyPressWrapped);}
;}
;}
;}
;}
,__ii:qx.core.Environment.select(q,{"mshtml":function(J){if(qx.core.Environment.get(w)>=9&&qx.core.Environment.get(a)>=9){qx.bom.Event.addNativeListener(J,n,this._onInputWrapper);if(J.type===t||J.type===r||J.type===s){this._inputFixWrapper=qx.lang.Function.listener(this._inputFix,this,J);qx.bom.Event.addNativeListener(J,z,this._inputFixWrapper);}
;}
;}
,"webkit":function(K){var L=K.tagName.toLowerCase();if(parseFloat(qx.core.Environment.get(w))<532&&L==s){qx.bom.Event.addNativeListener(K,x,this._onInputWrapper);}
;qx.bom.Event.addNativeListener(K,n,this._onInputWrapper);}
,"opera":function(M){qx.bom.Event.addNativeListener(M,z,this._onKeyUpWrapper);qx.bom.Event.addNativeListener(M,d,this._onKeyDownWrapper);qx.bom.Event.addNativeListener(M,f,this._onBlurWrapper);qx.bom.Event.addNativeListener(M,n,this._onInputWrapper);}
,"default":function(N){qx.bom.Event.addNativeListener(N,n,this._onInputWrapper);}
}),unregisterEvent:function(O,P){if(qx.core.Environment.get(q)==y&&qx.core.Environment.get(w)<9&&qx.core.Environment.get(a)<9){if(O.__ih){var Q=O.tagName.toLowerCase();var R=O.type;if(R===t||R===r||Q===s||R===u||R===v){qx.bom.Event.removeNativeListener(O,c,this._onPropertyWrapper);}
;if(R!==u&&R!==v){qx.bom.Event.removeNativeListener(O,p,this._onChangeValueWrapper);}
;if(R===t||R===r){qx.bom.Event.removeNativeListener(O,x,this._onKeyPressWrapped);}
;try{delete O.__ih;}
catch(S){O.__ih=null;}
;}
;}
else {if(P===n){this.__ij(O);}
else if(P===p){if(O.type===v||O.type===u){qx.bom.Event.removeNativeListener(O,p,this._onChangeCheckedWrapper);}
else {qx.bom.Event.removeNativeListener(O,p,this._onChangeValueWrapper);}
;}
;if((qx.core.Environment.get(q)==A)||(qx.core.Environment.get(q)==y)){if(O.type===t||O.type===r){qx.bom.Event.removeNativeListener(O,x,this._onKeyPressWrapped);}
;}
;}
;}
,__ij:qx.core.Environment.select(q,{"mshtml":function(T){if(qx.core.Environment.get(w)>=9&&qx.core.Environment.get(a)>=9){qx.bom.Event.removeNativeListener(T,n,this._onInputWrapper);if(T.type===t||T.type===r||T.type===s){qx.bom.Event.removeNativeListener(T,z,this._inputFixWrapper);}
;}
;}
,"webkit":function(U){var V=U.tagName.toLowerCase();if(parseFloat(qx.core.Environment.get(w))<532&&V==s){qx.bom.Event.removeNativeListener(U,x,this._onInputWrapper);}
;qx.bom.Event.removeNativeListener(U,n,this._onInputWrapper);}
,"opera":function(W){qx.bom.Event.removeNativeListener(W,z,this._onKeyUpWrapper);qx.bom.Event.removeNativeListener(W,d,this._onKeyDownWrapper);qx.bom.Event.removeNativeListener(W,f,this._onBlurWrapper);qx.bom.Event.removeNativeListener(W,n,this._onInputWrapper);}
,"default":function(X){qx.bom.Event.removeNativeListener(X,n,this._onInputWrapper);}
}),_onKeyPress:qx.core.Environment.select(q,{"mshtml|opera":function(e,Y){if(e.keyCode===13){if(Y.value!==this.__if){this.__if=Y.value;qx.event.Registration.fireEvent(Y,p,qx.event.type.Data,[Y.value]);}
;}
;}
,"default":null}),_inputFix:qx.core.Environment.select(q,{"mshtml":function(e,ba){if(e.keyCode===46||e.keyCode===8){if(ba.value!==this.__ig){this.__ig=ba.value;qx.event.Registration.fireEvent(ba,n,qx.event.type.Data,[ba.value]);}
;}
;}
,"default":null}),_onKeyDown:qx.core.Environment.select(q,{"opera":function(e){if(e.keyCode===13){this.__id=true;}
;}
,"default":null}),_onKeyUp:qx.core.Environment.select(q,{"opera":function(e){if(e.keyCode===13){this.__id=false;}
;}
,"default":null}),_onBlur:qx.core.Environment.select(q,{"opera":function(e){if(this.__ie&&qx.core.Environment.get(b)<10.6){window.clearTimeout(this.__ie);}
;}
,"default":null}),_onInput:qx.event.GlobalError.observeMethod(function(e){var bc=qx.bom.Event.getTarget(e);var bb=bc.tagName.toLowerCase();if(!this.__id||bb!==n){if((qx.core.Environment.get(q)==A)&&qx.core.Environment.get(b)<10.6){this.__ie=window.setTimeout(function(){qx.event.Registration.fireEvent(bc,n,qx.event.type.Data,[bc.value]);}
,0);}
else {qx.event.Registration.fireEvent(bc,n,qx.event.type.Data,[bc.value]);}
;}
;}
),_onChangeValue:qx.event.GlobalError.observeMethod(function(e){var be=qx.bom.Event.getTarget(e);var bd=be.value;if(be.type===m){var bd=[];for(var i=0,o=be.options,l=o.length;i<l;i++ ){if(o[i].selected){bd.push(o[i].value);}
;}
;}
;qx.event.Registration.fireEvent(be,p,qx.event.type.Data,[bd]);}
),_onChangeChecked:qx.event.GlobalError.observeMethod(function(e){var bf=qx.bom.Event.getTarget(e);if(bf.type===v){if(bf.checked){qx.event.Registration.fireEvent(bf,p,qx.event.type.Data,[bf.value]);}
;}
else {qx.event.Registration.fireEvent(bf,p,qx.event.type.Data,[bf.checked]);}
;}
),_onProperty:qx.core.Environment.select(q,{"mshtml":qx.event.GlobalError.observeMethod(function(e){var bg=qx.bom.Event.getTarget(e);var bh=e.propertyName;if(bh===k&&(bg.type===t||bg.type===r||bg.tagName.toLowerCase()===s)){if(!bg.$$inValueSet){qx.event.Registration.fireEvent(bg,n,qx.event.type.Data,[bg.value]);}
;}
else if(bh===g){if(bg.type===u){qx.event.Registration.fireEvent(bg,p,qx.event.type.Data,[bg.checked]);}
else if(bg.checked){qx.event.Registration.fireEvent(bg,p,qx.event.type.Data,[bg.value]);}
;}
;}
),"default":function(){}
})},defer:function(bi){qx.event.Registration.addHandler(bi);}
});}
)();
(function(){var a="qx.event.handler.Capture";qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{capture:true,losecapture:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(b,c){}
,registerEvent:function(d,e,f){}
,unregisterEvent:function(g,h,i){}
},defer:function(j){qx.event.Registration.addHandler(j);}
});}
)();
(function(){var k="mousedown",j="qxDraggable",i="Escape",h="drag",g="drop",f="qxDroppable",d="qx.event.handler.DragDrop",c="droprequest",b="dragstart",a="dragleave",D="dragover",C="left",B="blur",A="mouseout",z="keydown",y="Control",x="Shift",w="mousemove",v="move",u="mouseover",r="dragchange",s="Alt",p="keyup",q="mouseup",n="keypress",o="dragend",l="on",m="alias",t="copy";qx.Class.define(d,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(E){qx.core.Object.call(this);this.__fN=E;this.__dg=E.getWindow().document.documentElement;this.__fN.addListener(this.__dg,k,this._onMouseDown,this);this.__iu();}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:true},members:{__fN:null,__dg:null,__ik:null,__il:null,__im:null,__in:null,__io:null,__c:null,__ip:null,__iq:null,__ir:false,__is:0,__it:0,canHandleEvent:function(F,G){}
,registerEvent:function(H,I,J){}
,unregisterEvent:function(K,L,M){}
,addType:function(N){this.__im[N]=true;}
,addAction:function(O){this.__in[O]=true;}
,supportsType:function(P){return !!this.__im[P];}
,supportsAction:function(Q){return !!this.__in[Q];}
,getData:function(R){if(!this.__iA||!this.__ik){throw new Error("This method must not be used outside the drop event listener!");}
;if(!this.__im[R]){throw new Error("Unsupported data type: "+R+"!");}
;if(!this.__c[R]){this.__ip=R;this.__gD(c,this.__il,this.__ik,false);}
;if(!this.__c[R]){throw new Error("Please use a droprequest listener to the drag source to fill the manager with data!");}
;return this.__c[R]||null;}
,getCurrentAction:function(){return this.__iq;}
,addData:function(S,T){this.__c[S]=T;}
,getCurrentType:function(){return this.__ip;}
,isSessionActive:function(){return this.__ir;}
,__iu:function(){this.__im={};this.__in={};this.__io={};this.__c={};}
,__iv:function(){if(this.__il==null){return;}
;var X=this.__in;var U=this.__io;var V=null;if(this.__iA){if(U.Shift&&U.Control&&X.alias){V=m;}
else if(U.Shift&&U.Alt&&X.copy){V=t;}
else if(U.Shift&&X.move){V=v;}
else if(U.Alt&&X.alias){V=m;}
else if(U.Control&&X.copy){V=t;}
else if(X.move){V=v;}
else if(X.copy){V=t;}
else if(X.alias){V=m;}
;}
;var W=this.__iq;if(V!=W){if(this.__ik){this.__iq=V;this.__iw=this.__gD(r,this.__ik,this.__il,true);if(!this.__iw){V=null;}
;}
;if(V!=W){this.__iq=V;this.__gD(r,this.__il,this.__ik,false);}
;}
;}
,__gD:function(Y,ba,bb,bc,bd){var bf=qx.event.Registration;var be=bf.createEvent(Y,qx.event.type.Drag,[bc,bd]);if(ba!==bb){be.setRelatedTarget(bb);}
;return bf.dispatchEvent(ba,be);}
,__ix:function(bg){while(bg&&bg.nodeType==1){if(bg.getAttribute(j)==l){return bg;}
;bg=bg.parentNode;}
;return null;}
,__iy:function(bh){while(bh&&bh.nodeType==1){if(bh.getAttribute(f)==l){return bh;}
;bh=bh.parentNode;}
;return null;}
,__iz:function(){this.__il=null;this.__fN.removeListener(this.__dg,w,this._onMouseMove,this,true);this.__fN.removeListener(this.__dg,q,this._onMouseUp,this,true);qx.event.Registration.removeListener(window,B,this._onWindowBlur,this);this.__iu();}
,clearSession:function(){if(this.__ir){this.__fN.removeListener(this.__dg,u,this._onMouseOver,this,true);this.__fN.removeListener(this.__dg,A,this._onMouseOut,this,true);this.__fN.removeListener(this.__dg,z,this._onKeyDown,this,true);this.__fN.removeListener(this.__dg,p,this._onKeyUp,this,true);this.__fN.removeListener(this.__dg,n,this._onKeyPress,this,true);this.__gD(o,this.__il,this.__ik,false);this.__ir=false;}
;this.__iA=false;this.__ik=null;this.__iz();}
,__iA:false,__iw:false,_onWindowBlur:function(e){this.clearSession();}
,_onKeyDown:function(e){var bi=e.getKeyIdentifier();switch(bi){case s:case y:case x:if(!this.__io[bi]){this.__io[bi]=true;this.__iv();}
;};}
,_onKeyUp:function(e){var bj=e.getKeyIdentifier();switch(bj){case s:case y:case x:if(this.__io[bj]){this.__io[bj]=false;this.__iv();}
;};}
,_onKeyPress:function(e){var bk=e.getKeyIdentifier();switch(bk){case i:this.clearSession();};}
,_onMouseDown:function(e){if(this.__ir||e.getButton()!==C){return;}
;var bl=this.__ix(e.getTarget());if(bl){this.__is=e.getDocumentLeft();this.__it=e.getDocumentTop();this.__il=bl;this.__fN.addListener(this.__dg,w,this._onMouseMove,this,true);this.__fN.addListener(this.__dg,q,this._onMouseUp,this,true);qx.event.Registration.addListener(window,B,this._onWindowBlur,this);}
;}
,_onMouseUp:function(e){if(this.__iA&&this.__iw){this.__gD(g,this.__ik,this.__il,false,e);}
;if(this.__ir){e.stopPropagation();}
;this.clearSession();}
,_onMouseMove:function(e){if(this.__ir){if(!this.__gD(h,this.__il,this.__ik,true,e)){this.clearSession();}
;}
else {if(Math.abs(e.getDocumentLeft()-this.__is)>3||Math.abs(e.getDocumentTop()-this.__it)>3){if(this.__gD(b,this.__il,this.__ik,true,e)){this.__ir=true;this.__fN.addListener(this.__dg,u,this._onMouseOver,this,true);this.__fN.addListener(this.__dg,A,this._onMouseOut,this,true);this.__fN.addListener(this.__dg,z,this._onKeyDown,this,true);this.__fN.addListener(this.__dg,p,this._onKeyUp,this,true);this.__fN.addListener(this.__dg,n,this._onKeyPress,this,true);var bm=this.__io;bm.Control=e.isCtrlPressed();bm.Shift=e.isShiftPressed();bm.Alt=e.isAltPressed();this.__iv();}
else {this.__gD(o,this.__il,this.__ik,false);this.__iz();}
;}
;}
;}
,_onMouseOver:function(e){var bn=e.getTarget();var bo=this.__iy(bn);if(bo&&bo!=this.__ik){this.__iA=this.__gD(D,bo,this.__il,true,e);this.__ik=bo;this.__iv();}
;}
,_onMouseOut:function(e){var bq=this.__iy(e.getTarget());var bp=this.__iy(e.getRelatedTarget());if(bq&&bq!==bp&&bq==this.__ik){this.__gD(a,this.__ik,bp,false,e);this.__ik=null;this.__iA=false;qx.event.Timer.once(this.__iv,this,0);}
;}
},destruct:function(){this.__il=this.__ik=this.__fN=this.__dg=this.__im=this.__in=this.__io=this.__c=null;}
,defer:function(br){qx.event.Registration.addHandler(br);}
});}
)();
(function(){var a="qx.event.type.Drag";qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(b,c){qx.event.type.Event.prototype.init.call(this,true,b);if(c){this._native=c.getNativeEvent()||null;this._originalTarget=c.getTarget()||null;}
else {this._native=null;this._originalTarget=null;}
;return this;}
,clone:function(d){var e=qx.event.type.Event.prototype.clone.call(this,d);e._native=this._native;return e;}
,getDocumentLeft:function(){if(this._native==null){return 0;}
;if(this._native.pageX!==undefined){return this._native.pageX;}
else {var f=qx.dom.Node.getWindow(this._native.srcElement);return this._native.clientX+qx.bom.Viewport.getScrollLeft(f);}
;}
,getDocumentTop:function(){if(this._native==null){return 0;}
;if(this._native.pageY!==undefined){return this._native.pageY;}
else {var g=qx.dom.Node.getWindow(this._native.srcElement);return this._native.clientY+qx.bom.Viewport.getScrollTop(g);}
;}
,getManager:function(){return qx.event.Registration.getManager(this.getTarget()).getHandler(qx.event.handler.DragDrop);}
,addType:function(h){this.getManager().addType(h);}
,addAction:function(i){this.getManager().addAction(i);}
,supportsType:function(j){return this.getManager().supportsType(j);}
,supportsAction:function(k){return this.getManager().supportsAction(k);}
,addData:function(l,m){this.getManager().addData(l,m);}
,getData:function(n){return this.getManager().getData(n);}
,getCurrentType:function(){return this.getManager().getCurrentType();}
,getCurrentAction:function(){return this.getManager().getCurrentAction();}
,stopSession:function(){this.getManager().clearSession();}
}});}
)();
(function(){var k="qx.event.Timer",j="_applyInterval",i="func is not a function",h="Boolean",g="qx.debug",f="No timeout given",d="Integer",c="qx.event.type.Event",b="_applyEnabled",a="interval";qx.Class.define(k,{extend:qx.core.Object,construct:function(l){qx.core.Object.call(this);this.setEnabled(false);if(l!=null){this.setInterval(l);}
;var self=this;this.__ea=function(){self._oninterval.call(self);}
;}
,events:{"interval":c},statics:{once:function(m,n,o){if(qx.core.Environment.get(g)){qx.core.Assert.assertFunction(m,i);qx.core.Assert.assertNotUndefined(o,f);}
;var p=new qx.event.Timer(o);p.__eb=m;p.addListener(a,function(e){p.stop();m.call(n,e);p.dispose();n=null;}
,n);p.start();return p;}
},properties:{enabled:{init:true,check:h,apply:b},interval:{check:d,init:1000,apply:j}},members:{__ec:null,__ea:null,_applyInterval:function(q,r){if(this.getEnabled()){this.restart();}
;}
,_applyEnabled:function(s,t){if(t){window.clearInterval(this.__ec);this.__ec=null;}
else if(s){this.__ec=window.setInterval(this.__ea,this.getInterval());}
;}
,start:function(){this.setEnabled(true);}
,startWith:function(u){this.setInterval(u);this.start();}
,stop:function(){this.setEnabled(false);}
,restart:function(){this.stop();this.start();}
,restartWith:function(v){this.stop();this.startWith(v);}
,_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.$$disposed){return;}
;if(this.getEnabled()){this.fireEvent(a);}
;}
)},destruct:function(){if(this.__ec){window.clearInterval(this.__ec);}
;this.__ec=this.__ea=null;}
});}
)();
(function(){var c="qx.event.handler.Offline",b="offline",a="online";qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(d){qx.core.Object.call(this);this.__fN=d;this.__cf=d.getWindow();this._initObserver();}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{online:true,offline:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__fN:null,__cf:null,__hC:null,canHandleEvent:function(e,f){}
,registerEvent:function(g,h,i){}
,unregisterEvent:function(j,k,l){}
,_initObserver:function(){this.__hC=qx.lang.Function.listener(this._onNative,this);qx.bom.Event.addNativeListener(this.__cf,b,this.__hC);qx.bom.Event.addNativeListener(this.__cf,a,this.__hC);}
,_stopObserver:function(){qx.bom.Event.removeNativeListener(this.__cf,b,this.__hC);qx.bom.Event.removeNativeListener(this.__cf,a,this.__hC);}
,_onNative:qx.event.GlobalError.observeMethod(function(m){qx.event.Registration.fireEvent(this.__cf,m.type,qx.event.type.Event,[]);}
),isOnline:function(){return !!this.__cf.navigator.onLine;}
},destruct:function(){this.__fN=null;this._stopObserver();delete qx.event.handler.Appear.__instances[this.$$hash];}
,defer:function(n){qx.event.Registration.addHandler(n);}
});}
)();
(function(){var c="qx.bom.Element",b="mshtml",a="engine.name";qx.Class.define(c,{statics:{addListener:function(d,e,f,self,g){return qx.event.Registration.addListener(d,e,f,self,g);}
,removeListener:function(h,k,m,self,n){return qx.event.Registration.removeListener(h,k,m,self,n);}
,removeListenerById:function(o,p){return qx.event.Registration.removeListenerById(o,p);}
,hasListener:function(q,r,s){return qx.event.Registration.hasListener(q,r,s);}
,focus:function(t){qx.event.Registration.getManager(t).getHandler(qx.event.handler.Focus).focus(t);}
,blur:function(u){qx.event.Registration.getManager(u).getHandler(qx.event.handler.Focus).blur(u);}
,activate:function(v){qx.event.Registration.getManager(v).getHandler(qx.event.handler.Focus).activate(v);}
,deactivate:function(w){qx.event.Registration.getManager(w).getHandler(qx.event.handler.Focus).deactivate(w);}
,capture:function(x,y){qx.event.Registration.getManager(x).getDispatcher(qx.event.dispatch.MouseCapture).activateCapture(x,y);}
,releaseCapture:function(z){qx.event.Registration.getManager(z).getDispatcher(qx.event.dispatch.MouseCapture).releaseCapture(z);}
,clone:function(A,B){var E;if(B||((qx.core.Environment.get(a)==b)&&!qx.xml.Document.isXmlDocument(A))){var I=qx.event.Registration.getManager(A);var C=qx.dom.Hierarchy.getDescendants(A);C.push(A);}
;if((qx.core.Environment.get(a)==b)){for(var i=0,l=C.length;i<l;i++ ){I.toggleAttachedEvents(C[i],false);}
;}
;var E=A.cloneNode(true);if((qx.core.Environment.get(a)==b)){for(var i=0,l=C.length;i<l;i++ ){I.toggleAttachedEvents(C[i],true);}
;}
;if(B===true){var L=qx.dom.Hierarchy.getDescendants(E);L.push(E);var D,G,K,F;for(var i=0,J=C.length;i<J;i++ ){K=C[i];D=I.serializeListeners(K);if(D.length>0){G=L[i];for(var j=0,H=D.length;j<H;j++ ){F=D[j];I.addListener(G,F.type,F.handler,F.self,F.capture);}
;}
;}
;}
;return E;}
}});}
)();
(function(){var i="mshtml",h="blur",g="focus",f="click",e="qx.event.dispatch.MouseCapture",d="capture",c="scroll",b="engine.name",a="losecapture";qx.Class.define(e,{extend:qx.event.dispatch.AbstractBubbling,construct:function(j,k){qx.event.dispatch.AbstractBubbling.call(this,j);this.__cf=j.getWindow();this.__ch=k;j.addListener(this.__cf,h,this.releaseCapture,this);j.addListener(this.__cf,g,this.releaseCapture,this);j.addListener(this.__cf,c,this.releaseCapture,this);}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST},members:{__ch:null,__iB:null,__iC:true,__cf:null,_getParent:function(l){return l.parentNode;}
,canDispatchEvent:function(m,event,n){return !!(this.__iB&&this.__iD[n]);}
,dispatchEvent:function(o,event,p){if(p==f){event.stopPropagation();this.releaseCapture();return;}
;if(this.__iC||!qx.dom.Hierarchy.contains(this.__iB,o)){o=this.__iB;}
;qx.event.dispatch.AbstractBubbling.prototype.dispatchEvent.call(this,o,event,p);}
,__iD:{"mouseup":1,"mousedown":1,"click":1,"dblclick":1,"mousemove":1,"mouseout":1,"mouseover":1},activateCapture:function(q,r){var r=r!==false;if(this.__iB===q&&this.__iC==r){return;}
;if(this.__iB){this.releaseCapture();}
;this.nativeSetCapture(q,r);if(this.hasNativeCapture){var self=this;qx.bom.Event.addNativeListener(q,a,function(){qx.bom.Event.removeNativeListener(q,a,arguments.callee);self.releaseCapture();}
);}
;this.__iC=r;this.__iB=q;this.__ch.fireEvent(q,d,qx.event.type.Event,[true,false]);}
,getCaptureElement:function(){return this.__iB;}
,releaseCapture:function(){var s=this.__iB;if(!s){return;}
;this.__iB=null;this.__ch.fireEvent(s,a,qx.event.type.Event,[true,false]);this.nativeReleaseCapture(s);}
,hasNativeCapture:qx.core.Environment.get(b)==i,nativeSetCapture:qx.core.Environment.select(b,{"mshtml":function(t,u){t.setCapture(u!==false);}
,"default":(function(){}
)}),nativeReleaseCapture:qx.core.Environment.select(b,{"mshtml":function(v){v.releaseCapture();}
,"default":(function(){}
)})},destruct:function(){this.__iB=this.__cf=this.__ch=null;}
,defer:function(w){qx.event.Registration.addDispatcher(w);}
});}
)();
(function(){var m="function",l="plugin.silverlight.version",k="Silverlight",h="Skype.Detection",g="QuickTimeCheckObject.QuickTimeCheck.1",f="Adobe Acrobat",d="plugin.windowsmedia",c="QuickTime",b="plugin.silverlight",a="qx.bom.client.Plugin",P="application/x-skype",O="plugin.divx",N="Chrome PDF Viewer",M="Windows Media",L="skype.click2call",K="plugin.skype",J="plugin.gears",I="plugin.quicktime",H="plugin.windowsmedia.version",G="DivX Web Player",t="AgControl.AgControl",u="Microsoft.XMLHTTP",r="plugin.pdf",s="plugin.pdf.version",p="MSXML2.DOMDocument.6.0",q="WMPlayer.OCX.7",n="AcroPDF.PDF",o="plugin.activex",v="plugin.quicktime.version",w="plugin.divx.version",z="npdivx.DivXBrowserPlugin.1",y="pdf",B="wmv",A="divx",D="mshtml",C="quicktime",x="silverlight",F="object",E="";qx.Bootstrap.define(a,{statics:{getGears:function(){return !!(window.google&&window.google.gears);}
,getActiveX:function(){if(typeof window.ActiveXObject===m){return true;}
;try{return (typeof (new window.ActiveXObject(u))===F||typeof (new window.ActiveXObject(p))===F);}
catch(Q){return false;}
;}
,getSkype:function(){if(qx.bom.client.Plugin.getActiveX()){try{new ActiveXObject(h);return true;}
catch(e){}
;}
;var R=navigator.mimeTypes;if(R){if(P in R){return true;}
;for(var i=0;i<R.length;i++ ){var S=R[i];if(S.type.indexOf(L)!=-1){return true;}
;}
;}
;return false;}
,__iE:{quicktime:{plugin:[c],control:g},wmv:{plugin:[M],control:q},divx:{plugin:[G],control:z},silverlight:{plugin:[k],control:t},pdf:{plugin:[N,f],control:n}},getQuicktimeVersion:function(){var T=qx.bom.client.Plugin.__iE[C];return qx.bom.client.Plugin.__iF(T.control,T.plugin);}
,getWindowsMediaVersion:function(){var U=qx.bom.client.Plugin.__iE[B];return qx.bom.client.Plugin.__iF(U.control,U.plugin);}
,getDivXVersion:function(){var V=qx.bom.client.Plugin.__iE[A];return qx.bom.client.Plugin.__iF(V.control,V.plugin);}
,getSilverlightVersion:function(){var W=qx.bom.client.Plugin.__iE[x];return qx.bom.client.Plugin.__iF(W.control,W.plugin);}
,getPdfVersion:function(){var X=qx.bom.client.Plugin.__iE[y];return qx.bom.client.Plugin.__iF(X.control,X.plugin);}
,getQuicktime:function(){var Y=qx.bom.client.Plugin.__iE[C];return qx.bom.client.Plugin.__iG(Y.control,Y.plugin);}
,getWindowsMedia:function(){var ba=qx.bom.client.Plugin.__iE[B];return qx.bom.client.Plugin.__iG(ba.control,ba.plugin);}
,getDivX:function(){var bb=qx.bom.client.Plugin.__iE[A];return qx.bom.client.Plugin.__iG(bb.control,bb.plugin);}
,getSilverlight:function(){var bc=qx.bom.client.Plugin.__iE[x];return qx.bom.client.Plugin.__iG(bc.control,bc.plugin);}
,getPdf:function(){var bd=qx.bom.client.Plugin.__iE[y];return qx.bom.client.Plugin.__iG(bd.control,bd.plugin);}
,__iF:function(be,bf){var bg=qx.bom.client.Plugin.__iG(be,bf);if(!bg){return E;}
;if(qx.bom.client.Engine.getName()==D){var bh=new ActiveXObject(be);try{var bk=bh.versionInfo;if(bk!=undefined){return bk;}
;bk=bh.version;if(bk!=undefined){return bk;}
;bk=bh.settings.version;if(bk!=undefined){return bk;}
;}
catch(bm){return E;}
;return E;}
else {var bl=navigator.plugins;var bj=/([0-9]\.[0-9])/g;for(var i=0;i<bl.length;i++ ){var bi=bl[i];for(var j=0;j<bf.length;j++ ){if(bi.name.indexOf(bf[j])!==-1){if(bj.test(bi.name)||bj.test(bi.description)){return RegExp.$1;}
;}
;}
;}
;return E;}
;}
,__iG:function(bn,bo){if(qx.bom.client.Engine.getName()==D){var bp=window.ActiveXObject;if(!bp){return false;}
;try{new ActiveXObject(bn);}
catch(br){return false;}
;return true;}
else {var bq=navigator.plugins;if(!bq){return false;}
;var name;for(var i=0;i<bq.length;i++ ){name=bq[i].name;for(var j=0;j<bo.length;j++ ){if(name.indexOf(bo[j])!==-1){return true;}
;}
;}
;return false;}
;}
},defer:function(bs){qx.core.Environment.add(J,bs.getGears);qx.core.Environment.add(I,bs.getQuicktime);qx.core.Environment.add(v,bs.getQuicktimeVersion);qx.core.Environment.add(d,bs.getWindowsMedia);qx.core.Environment.add(H,bs.getWindowsMediaVersion);qx.core.Environment.add(O,bs.getDivX);qx.core.Environment.add(w,bs.getDivXVersion);qx.core.Environment.add(b,bs.getSilverlight);qx.core.Environment.add(l,bs.getSilverlightVersion);qx.core.Environment.add(r,bs.getPdf);qx.core.Environment.add(s,bs.getPdfVersion);qx.core.Environment.add(o,bs.getActiveX);qx.core.Environment.add(K,bs.getSkype);}
});}
)();
(function(){var s='<\?xml version="1.0" encoding="utf-8"?>\n<',r="qx.xml.Document",q=" />",p="xml.domparser",o="SelectionLanguage",n="'",m="MSXML2.XMLHTTP.3.0",k="MSXML2.XMLHTTP.6.0",j="xml.implementation",h=" xmlns='",c="text/xml",g="XPath",f="MSXML2.DOMDocument.6.0",b="HTML",a="MSXML2.DOMDocument.3.0",e="",d="plugin.activex";qx.Class.define(r,{statics:{DOMDOC:null,XMLHTTP:null,isXmlDocument:function(t){if(t.nodeType===9){return t.documentElement.nodeName!==b;}
else if(t.ownerDocument){return this.isXmlDocument(t.ownerDocument);}
else {return false;}
;}
,create:function(u,v){if(qx.core.Environment.get(d)){var w=new ActiveXObject(this.DOMDOC);if(this.DOMDOC==a){w.setProperty(o,g);}
;if(v){var x=s;x+=v;if(u){x+=h+u+n;}
;x+=q;w.loadXML(x);}
;return w;}
;if(qx.core.Environment.get(j)){return document.implementation.createDocument(u||e,v||e,null);}
;throw new Error("No XML implementation available!");}
,fromString:function(y){if(qx.core.Environment.get(d)){var A=qx.xml.Document.create();A.loadXML(y);return A;}
;if(qx.core.Environment.get(p)){var z=new DOMParser();return z.parseFromString(y,c);}
;throw new Error("No XML implementation available!");}
},defer:function(B){if(qx.core.Environment.get(d)){var C=[f,a];var D=[k,m];for(var i=0,l=C.length;i<l;i++ ){try{new ActiveXObject(C[i]);new ActiveXObject(D[i]);}
catch(E){continue;}
;B.DOMDOC=C[i];B.XMLHTTP=D[i];break;}
;}
;}
});}
)();
(function(){var s="xml.implementation",r="xml.attributens",q="xml.selectnodes",p="xml.getqualifieditem",o="SelectionLanguage",n="xml.getelementsbytagnamens",m="qx.bom.client.Xml",l="xml.domproperties",k="xml.selectsinglenode",j="1.0",d="xml.createnode",i="xml.domparser",g="getProperty",c="XML",b="string",f="xml.createelementns",e="<a></a>",h="function",a="undefined";qx.Bootstrap.define(m,{statics:{getImplementation:function(){return document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature(c,j);}
,getDomParser:function(){return typeof window.DOMParser!==a;}
,getSelectSingleNode:function(){return typeof qx.xml.Document.create().selectSingleNode!==a;}
,getSelectNodes:function(){return typeof qx.xml.Document.create().selectNodes!==a;}
,getElementsByTagNameNS:function(){return typeof qx.xml.Document.create().getElementsByTagNameNS!==a;}
,getDomProperties:function(){var t=qx.xml.Document.create();return (g in t&&typeof t.getProperty(o)===b);}
,getAttributeNS:function(){var u=qx.xml.Document.fromString(e).documentElement;return typeof u.getAttributeNS===h&&typeof u.setAttributeNS===h;}
,getCreateElementNS:function(){return typeof qx.xml.Document.create().createElementNS===h;}
,getCreateNode:function(){return typeof qx.xml.Document.create().createNode!==a;}
,getQualifiedItem:function(){var v=qx.xml.Document.fromString(e).documentElement;return typeof v.attributes.getQualifiedItem!==a;}
},defer:function(w){qx.core.Environment.add(s,w.getImplementation);qx.core.Environment.add(i,w.getDomParser);qx.core.Environment.add(k,w.getSelectSingleNode);qx.core.Environment.add(q,w.getSelectNodes);qx.core.Environment.add(n,w.getElementsByTagNameNS);qx.core.Environment.add(l,w.getDomProperties);qx.core.Environment.add(r,w.getAttributeNS);qx.core.Environment.add(f,w.getCreateElementNS);qx.core.Environment.add(d,w.getCreateNode);qx.core.Environment.add(p,w.getQualifiedItem);}
});}
)();
(function(){var a="qx.event.type.Focus";qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(b,c,d){qx.event.type.Event.prototype.init.call(this,d,false);this._target=b;this._relatedTarget=c;return this;}
}});}
)();
(function(){var j="readOnly",i="accessKey",h="qx.bom.element.Attribute",g="rowSpan",f="vAlign",e="className",d="textContent",c="'",b="htmlFor",a="longDesc",A="cellSpacing",z="frameBorder",y="='",x="useMap",w="innerText",v="innerHTML",u="tabIndex",t="dateTime",s="maxLength",r="html.element.textcontent",p="mshtml",q="cellPadding",n="browser.documentmode",o="colSpan",l="engine.name",m="undefined",k="";qx.Bootstrap.define(h,{statics:{__ei:{names:{"class":e,"for":b,html:v,text:qx.core.Environment.get(r)?d:w,colspan:o,rowspan:g,valign:f,datetime:t,accesskey:i,tabindex:u,maxlength:s,readonly:j,longdesc:a,cellpadding:q,cellspacing:A,frameborder:z,usemap:x},runtime:{"html":1,"text":1},bools:{compact:1,nowrap:1,ismap:1,declare:1,noshade:1,checked:1,disabled:1,readOnly:1,multiple:1,selected:1,noresize:1,defer:1,allowTransparency:1},property:{$$html:1,$$widget:1,disabled:1,checked:1,readOnly:1,multiple:1,selected:1,value:1,maxLength:1,className:1,innerHTML:1,innerText:1,textContent:1,htmlFor:1,tabIndex:1},qxProperties:{$$widget:1,$$html:1},propertyDefault:{disabled:false,checked:false,readOnly:false,multiple:false,selected:false,value:k,className:k,innerHTML:k,innerText:k,textContent:k,htmlFor:k,tabIndex:0,maxLength:qx.core.Environment.select(l,{"mshtml":2147483647,"webkit":524288,"default":-1})},removeableProperties:{disabled:1,multiple:1,maxLength:1},original:{href:1,src:1,type:1}},compile:function(B){var C=[];var E=this.__ei.runtime;for(var D in B){if(!E[D]){C.push(D,y,B[D],c);}
;}
;return C.join(k);}
,get:function(F,name){var H=this.__ei;var G;name=H.names[name]||name;if(qx.core.Environment.get(l)==p&&parseInt(qx.core.Environment.get(n),10)<8&&H.original[name]){G=F.getAttribute(name,2);}
else if(H.property[name]){G=F[name];if(typeof H.propertyDefault[name]!==m&&G==H.propertyDefault[name]){if(typeof H.bools[name]===m){return null;}
else {return G;}
;}
;}
else {G=F.getAttribute(name);}
;if(H.bools[name]){return !!G;}
;return G;}
,set:function(I,name,J){if(typeof J===m){return;}
;var K=this.__ei;name=K.names[name]||name;if(K.bools[name]){J=!!J;}
;if(K.property[name]&&(!(I[name]===undefined)||K.qxProperties[name])){if(J==null){if(K.removeableProperties[name]){I.removeAttribute(name);return;}
else if(typeof K.propertyDefault[name]!==m){J=K.propertyDefault[name];}
;}
;I[name]=J;}
else {if(J===true){I.setAttribute(name,name);}
else if(J===false||J===null){I.removeAttribute(name);}
else {I.setAttribute(name,J);}
;}
;}
,reset:function(L,name){this.set(L,name,null);}
}});}
)();
(function(){var k='.qxconsole .messages{background:white;height:100%;width:100%;overflow:auto;}',j="Enter",i="px",h='.qxconsole .messages .user-result{background:white}',g='.qxconsole .messages .level-error{background:#FFE2D5}',f="div",d="user-command",c='<div class="command">',b='.qxconsole .command input:focus{outline:none;}',a='.qxconsole .messages .type-key{color:#565656;font-style:italic}',V='.qxconsole .messages .type-instance{color:#565656;font-weight:bold}',U='.qxconsole .messages div{padding:0px 4px;}',T='.qxconsole .messages .level-debug{background:white}',S='.qxconsole .messages .type-class{color:#5F3E8A;font-weight:bold}',R="DIV",Q='.qxconsole .messages .level-user{background:#E3EFE9}',P='<div class="qxconsole">',O="D",N='.qxconsole .messages .type-map{color:#CC3E8A;font-weight:bold;}',M='.qxconsole .messages .type-string{color:black;font-weight:normal;}',r='.qxconsole .control a{text-decoration:none;color:black;}',s='<div class="messages">',p='.qxconsole .messages .type-boolean{color:#15BC91;font-weight:normal;}',q='<input type="text"/>',n="clear",o='.qxconsole .command input{width:100%;border:0 none;font-family:Consolas,Monaco,monospace;font-size:11px;line-height:1.2;}',l='.qxconsole .messages .type-array{color:#CC3E8A;font-weight:bold;}',m='.qxconsole{z-index:10000;width:600px;height:300px;top:0px;right:0px;position:absolute;border-left:1px solid black;color:black;border-bottom:1px solid black;color:black;font-family:Consolas,Monaco,monospace;font-size:11px;line-height:1.2;}',t='.qxconsole .command{background:white;padding:2px 4px;border-top:1px solid black;}',u='.qxconsole .messages .user-command{color:blue}',B="F7",z="qx.log.appender.Console",F='.qxconsole .messages .level-info{background:#DEEDFA}',D="block",I='.qxconsole .messages .level-warn{background:#FFF7D5}',H='.qxconsole .messages .type-stringify{color:#565656;font-weight:bold}',w='.qxconsole .messages .user-error{background:#FFE2D5}',L='.qxconsole .control{background:#cdcdcd;border-bottom:1px solid black;padding:4px 8px;}',K='<div class="control"><a href="javascript:qx.log.appender.Console.clear()">Clear</a> | <a href="javascript:qx.log.appender.Console.toggle()">Hide</a></div>',J=">>> ",v="Down",x='.qxconsole .messages .type-number{color:#155791;font-weight:normal;}',y="Up",A="none",C="keypress",E='</div>',G="";qx.Class.define(z,{statics:{__zf:null,__bY:null,__zg:null,__zh:null,init:function(){var W=[m,L,r,k,U,u,h,w,T,F,I,g,Q,M,x,p,l,N,a,S,V,H,t,o,b];qx.bom.Stylesheet.createElement(W.join(G));var Y=[P,K,s,E,c,q,E,E];var ba=document.createElement(R);ba.innerHTML=Y.join(G);var X=ba.firstChild;document.body.appendChild(ba.firstChild);this.__zf=X;this.__bY=X.childNodes[1];this.__zg=X.childNodes[2].firstChild;this.__lr();qx.log.Logger.register(this);qx.core.ObjectRegistry.register(this);}
,dispose:function(){qx.event.Registration.removeListener(document.documentElement,C,this.__gW,this);qx.log.Logger.unregister(this);}
,clear:function(){this.__bY.innerHTML=G;}
,process:function(bb){this.__bY.appendChild(qx.log.appender.Util.toHtml(bb));this.__zi();}
,__zi:function(){this.__bY.scrollTop=this.__bY.scrollHeight;}
,__ga:true,toggle:function(){if(!this.__zf){this.init();}
else if(this.__zf.style.display==A){this.show();}
else {this.__zf.style.display=A;}
;}
,show:function(){if(!this.__zf){this.init();}
else {this.__zf.style.display=D;this.__bY.scrollTop=this.__bY.scrollHeight;}
;}
,__zj:[],execute:function(){var be=this.__zg.value;if(be==G){return;}
;if(be==n){this.clear();return;}
;var bc=document.createElement(f);bc.innerHTML=qx.log.appender.Util.escapeHTML(J+be);bc.className=d;this.__zj.push(be);this.__zh=this.__zj.length;this.__bY.appendChild(bc);this.__zi();try{var bd=window.eval(be);}
catch(bf){qx.log.Logger.error(bf);}
;if(bd!==undefined){qx.log.Logger.debug(bd);}
;}
,__lr:function(e){this.__bY.style.height=(this.__zf.clientHeight-this.__zf.firstChild.offsetHeight-this.__zf.lastChild.offsetHeight)+i;}
,__gW:function(e){var bh=e.getKeyIdentifier();if((bh==B)||(bh==O&&e.isCtrlPressed())){this.toggle();e.preventDefault();}
;if(!this.__zf){return;}
;if(!qx.dom.Hierarchy.contains(this.__zf,e.getTarget())){return;}
;if(bh==j&&this.__zg.value!=G){this.execute();this.__zg.value=G;}
;if(bh==y||bh==v){this.__zh+=bh==y?-1:1;this.__zh=Math.min(Math.max(0,this.__zh),this.__zj.length);var bg=this.__zj[this.__zh];this.__zg.value=bg||G;this.__zg.select();}
;}
},defer:function(bi){qx.event.Registration.addListener(document.documentElement,C,bi.__gW,bi);}
});}
)();
(function(){var p="stylesheet",o="html.stylesheet.addimport",n="html.stylesheet.insertrule",m="}",l="html.stylesheet.createstylesheet",k='@import "',j="{",h='";',g="qx.bom.Stylesheet",f="link",c="style",e="head",d="text/css",b="html.stylesheet.removeimport",a="html.stylesheet.deleterule";qx.Bootstrap.define(g,{statics:{includeFile:function(q,r){if(!r){r=document;}
;var s=r.createElement(f);s.type=d;s.rel=p;s.href=q;var t=r.getElementsByTagName(e)[0];t.appendChild(s);}
,createElement:function(u){if(qx.core.Environment.get(l)){var v=document.createStyleSheet();if(u){v.cssText=u;}
;return v;}
else {var w=document.createElement(c);w.type=d;if(u){w.appendChild(document.createTextNode(u));}
;document.getElementsByTagName(e)[0].appendChild(w);return w.sheet;}
;}
,addRule:function(x,y,z){if(qx.core.Environment.get(n)){x.insertRule(y+j+z+m,x.cssRules.length);}
else {x.addRule(y,z);}
;}
,removeRule:function(A,B){if(qx.core.Environment.get(a)){var C=A.cssRules;var D=C.length;for(var i=D-1;i>=0; --i){if(C[i].selectorText==B){A.deleteRule(i);}
;}
;}
else {var C=A.rules;var D=C.length;for(var i=D-1;i>=0; --i){if(C[i].selectorText==B){A.removeRule(i);}
;}
;}
;}
,removeSheet:function(E){var F=E.ownerNode?E.ownerNode:E.owningElement;qx.dom.Element.removeChild(F,F.parentNode);}
,removeAllRules:function(G){if(qx.core.Environment.get(a)){var H=G.cssRules;var I=H.length;for(var i=I-1;i>=0;i-- ){G.deleteRule(i);}
;}
else {var H=G.rules;var I=H.length;for(var i=I-1;i>=0;i-- ){G.removeRule(i);}
;}
;}
,addImport:function(J,K){if(qx.core.Environment.get(o)){J.addImport(K);}
else {J.insertRule(k+K+h,J.cssRules.length);}
;}
,removeImport:function(L,M){if(qx.core.Environment.get(b)){var N=L.imports;var P=N.length;for(var i=P-1;i>=0;i-- ){if(N[i].href==M||N[i].href==qx.util.Uri.getAbsolute(M)){L.removeImport(i);}
;}
;}
else {var O=L.cssRules;var P=O.length;for(var i=P-1;i>=0;i-- ){if(O[i].href==M){L.deleteRule(i);}
;}
;}
;}
,removeAllImports:function(Q){if(qx.core.Environment.get(b)){var R=Q.imports;var T=R.length;for(var i=T-1;i>=0;i-- ){Q.removeImport(i);}
;}
else {var S=Q.cssRules;var T=S.length;for(var i=T-1;i>=0;i-- ){if(S[i].type==S[i].IMPORT_RULE){Q.deleteRule(i);}
;}
;}
;}
}});}
)();
(function(){var h="qx.bom.client.Stylesheet",g="html.stylesheet.deleterule",f="html.stylesheet.insertrule",e="html.stylesheet.createstylesheet",d="html.stylesheet.addimport",c="html.stylesheet.removeimport",b="function",a="object";qx.Bootstrap.define(h,{statics:{__ed:function(){if(!qx.bom.client.Stylesheet.__ee){qx.bom.client.Stylesheet.__ee=qx.bom.Stylesheet.createElement();}
;return qx.bom.client.Stylesheet.__ee;}
,getCreateStyleSheet:function(){return typeof document.createStyleSheet===a;}
,getInsertRule:function(){return typeof qx.bom.client.Stylesheet.__ed().insertRule===b;}
,getDeleteRule:function(){return typeof qx.bom.client.Stylesheet.__ed().deleteRule===b;}
,getAddImport:function(){return (typeof qx.bom.client.Stylesheet.__ed().addImport===a);}
,getRemoveImport:function(){return (typeof qx.bom.client.Stylesheet.__ed().removeImport===a);}
},defer:function(i){qx.core.Environment.add(e,i.getCreateStyleSheet);qx.core.Environment.add(f,i.getInsertRule);qx.core.Environment.add(g,i.getDeleteRule);qx.core.Environment.add(d,i.getAddImport);qx.core.Environment.add(c,i.getRemoveImport);}
});}
)();
(function(){var p="engine.name",o="='",n="none",m="<INPUT TYPE='RADIO' NAME='RADIOTEST' VALUE='Second Choice'>",k="qx.dom.Element",j="webkit",h="' ",g="div",f="></",d=" ",a=">",c="<",b="";qx.Bootstrap.define(k,{statics:{__ef:{"onload":true,"onpropertychange":true,"oninput":true,"onchange":true,"name":true,"type":true,"checked":true,"disabled":true},hasChild:function(parent,q){return q.parentNode===parent;}
,hasChildren:function(r){return !!r.firstChild;}
,hasChildElements:function(s){s=s.firstChild;while(s){if(s.nodeType===1){return true;}
;s=s.nextSibling;}
;return false;}
,getParentElement:function(t){return t.parentNode;}
,isInDom:function(u,v){if(!v){v=window;}
;var w=v.document.getElementsByTagName(u.nodeName);for(var i=0,l=w.length;i<l;i++ ){if(w[i]===u){return true;}
;}
;return false;}
,insertAt:function(x,parent,y){var z=parent.childNodes[y];if(z){parent.insertBefore(x,z);}
else {parent.appendChild(x);}
;return true;}
,insertBegin:function(A,parent){if(parent.firstChild){this.insertBefore(A,parent.firstChild);}
else {parent.appendChild(A);}
;return true;}
,insertEnd:function(B,parent){parent.appendChild(B);return true;}
,insertBefore:function(C,D){D.parentNode.insertBefore(C,D);return true;}
,insertAfter:function(E,F){var parent=F.parentNode;if(F==parent.lastChild){parent.appendChild(E);}
else {return this.insertBefore(E,F.nextSibling);}
;return true;}
,remove:function(G){if(!G.parentNode){return false;}
;G.parentNode.removeChild(G);return true;}
,removeChild:function(H,parent){if(H.parentNode!==parent){return false;}
;parent.removeChild(H);return true;}
,removeChildAt:function(I,parent){var J=parent.childNodes[I];if(!J){return false;}
;parent.removeChild(J);return true;}
,replaceChild:function(K,L){if(!L.parentNode){return false;}
;L.parentNode.replaceChild(K,L);return true;}
,replaceAt:function(M,N,parent){var O=parent.childNodes[N];if(!O){return false;}
;parent.replaceChild(M,O);return true;}
,__eg:{},__eh:{},_allowCreationWithMarkup:function(P){if(!P){P=window;}
;var Q=P.location.href;if(qx.dom.Element.__eh[Q]==undefined){try{P.document.createElement(m);qx.dom.Element.__eh[Q]=true;}
catch(e){qx.dom.Element.__eh[Q]=false;}
;}
;return qx.dom.Element.__eh[Q];}
,getHelperElement:function(R){if(!R){R=window;}
;var T=R.location.href;if(!qx.dom.Element.__eg[T]){var S=qx.dom.Element.__eg[T]=R.document.createElement(g);if(qx.core.Environment.get(p)==j){S.style.display=n;R.document.body.appendChild(S);}
;}
;return qx.dom.Element.__eg[T];}
,create:function(name,U,V){if(!V){V=window;}
;if(!name){throw new Error("The tag name is missing!");}
;var X=this.__ef;var W=b;for(var ba in U){if(X[ba]){W+=ba+o+U[ba]+h;}
;}
;var bb;if(W!=b){if(qx.dom.Element._allowCreationWithMarkup(V)){bb=V.document.createElement(c+name+d+W+a);}
else {var Y=qx.dom.Element.getHelperElement(V);Y.innerHTML=c+name+d+W+f+name+a;bb=Y.firstChild;}
;}
else {bb=V.document.createElement(name);}
;for(var ba in U){if(!X[ba]){qx.bom.element.Attribute.set(bb,ba,U[ba]);}
;}
;return bb;}
,empty:function(bc){return bc.innerHTML=b;}
}});}
)();
(function(){var l="qx.dev.ObjectSummary",k="\n",j=" Objects)\n\n",h=")\r\n",g=" (",f=" Objects)\r\n\r\n",e=", ",d=": ",c="Summary: (";qx.Class.define(l,{statics:{getInfo:function(){var m={};var t=0;var n;var p=qx.core.ObjectRegistry.getRegistry();for(var q in p){n=p[q];if(n&&n.isDisposed()===false){if(m[n.classname]==null){m[n.classname]=1;}
else {m[n.classname]++ ;}
;t++ ;}
;}
;var s=[];for(var o in m){s.push({classname:o,number:m[o]});}
;s.sort(function(a,b){return b.number-a.number;}
);var r=c+t+j;for(var i=0;i<s.length;i++ ){r+=s[i].number+d+s[i].classname+k;}
;return r;}
,getNewObjects:function(){var v={};var F=0;var w;var A=qx.core.ObjectRegistry.getRegistry();var y={};var E;for(var B in A){w=A[B];if(w&&w.isDisposed()===false){var z=w.classname;if(v[z]==null){v[z]=1;}
else {v[z]++ ;}
;E=y[z];if(E==null){E=y[z]=new Array();}
;E[E.length]=w.toHashCode();F++ ;}
;}
;if(!this._m_dObjectList){this._m_dObjectList={};}
;var u={};for(var z in v){if(!(z in this._m_dObjectList)){this._m_dObjectList[z]=0;}
;if(this._m_dObjectList[z]>=0&&this._m_dObjectList[z]<v[z]){u[z]=v[z]-this._m_dObjectList[z];}
;}
;this._m_dObjectList=v;var D=[];for(var x in u){D.push({classname:x,number:u[x],aHashCode:y[x]});}
;D.sort(function(a,b){return b.number-a.number;}
);var C=c+F+f;for(var i=0;i<D.length;i++ ){C+=D[i].number+d+D[i].classname+g+D[i].aHashCode.join(e)+h;}
;return C;}
}});}
)();


qx.$$loader.init();

