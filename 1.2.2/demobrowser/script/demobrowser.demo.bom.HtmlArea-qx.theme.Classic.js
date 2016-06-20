(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!window.qxsettings) qxsettings = {};
var settings = {"qx.allowUrlSettings":"true","qx.allowUrlVariants":"true","qx.application":"demobrowser.demo.bom.HtmlArea","qx.theme":"qx.theme.Classic"};
for (var k in settings) qxsettings[k] = settings[k];

if (!window.qxvariants) qxvariants = {};
var variants = {"qx.aspects":"off","qx.debug":"off"};
for (var k in variants) qxvariants[k] = variants[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"__out__":{"sourceUri":"../../script"},"demobrowser.demo":{"resourceUri":"../../resource","sourceUri":"../../script","version":"trunk"},"qx":{"resourceUri":"../../resource","sourceUri":"../../script","version":"1.2.2"}};
for (var k in libinfo) qx.$$libraries[k] = libinfo[k];

qx.$$resources = {};
qx.$$translations = {};
qx.$$locales = {};
qx.$$packageData = {};

qx.$$loader = {
  parts : {"boot":[0]},
  uris : [["__out__:demobrowser.demo.bom.HtmlArea-qx.theme.Classic.js"]],
  urisBefore : [],
  packageHashes : {"0":"ddc017020e40"},
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

qx.$$packageData['ddc017020e40']={"locales":{},"resources":{"demobrowser/demo/icons/htmlarea/format-fill-color.png":[16,16,"png","demobrowser.demo"],"demobrowser/demo/icons/htmlarea/format-list-ordered.png":[16,16,"png","demobrowser.demo"],"demobrowser/demo/icons/htmlarea/format-list-unordered.png":[16,16,"png","demobrowser.demo"],"demobrowser/demo/icons/htmlarea/format-text-color.png":[16,16,"png","demobrowser.demo"],"demobrowser/demo/icons/htmlarea/insert-horizontal-rule.png":[16,16,"png","demobrowser.demo"],"demobrowser/demo/icons/htmlarea/insert-table.png":[16,16,"png","demobrowser.demo"],"demobrowser/demo/icons/htmlarea/insert-text.png":[16,16,"png","demobrowser.demo"],"demobrowser/demo/icons/htmlarea/qooxdoo_logo.png":[136,41,"png","demobrowser.demo"],"qx/decoration/Classic/arrows-combined.gif":[124,7,"gif","qx"],"qx/decoration/Classic/arrows/down-invert.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-38,0],"qx/decoration/Classic/arrows/down-small-invert.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-87,0],"qx/decoration/Classic/arrows/down-small.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-53,0],"qx/decoration/Classic/arrows/down.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-113,0],"qx/decoration/Classic/arrows/forward-invert.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-30,0],"qx/decoration/Classic/arrows/forward.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-18,0],"qx/decoration/Classic/arrows/left-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-92,0],"qx/decoration/Classic/arrows/left-small-invert.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-58,0],"qx/decoration/Classic/arrows/left-small.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-15,0],"qx/decoration/Classic/arrows/left.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-120,0],"qx/decoration/Classic/arrows/next-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-80,0],"qx/decoration/Classic/arrows/next.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-109,0],"qx/decoration/Classic/arrows/previous-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-69,0],"qx/decoration/Classic/arrows/previous.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-65,0],"qx/decoration/Classic/arrows/rewind-invert.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-45,0],"qx/decoration/Classic/arrows/rewind.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-101,0],"qx/decoration/Classic/arrows/right-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-61,0],"qx/decoration/Classic/arrows/right-small-invert.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",0,0],"qx/decoration/Classic/arrows/right-small.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-84,0],"qx/decoration/Classic/arrows/right.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-26,0],"qx/decoration/Classic/arrows/up-invert.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-73,0],"qx/decoration/Classic/arrows/up-small-invert.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-96,0],"qx/decoration/Classic/arrows/up-small.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-3,0],"qx/decoration/Classic/arrows/up.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-8,0],"qx/decoration/Classic/checkbox-radiobutton-combined.png":[504,14,"png","qx"],"qx/decoration/Classic/colorselector-combined.gif":[46,11,"gif","qx"],"qx/decoration/Classic/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Classic/colorselector/brightness-handle.gif":[35,11,"gif","qx","qx/decoration/Classic/colorselector-combined.gif",-11,0],"qx/decoration/Classic/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Classic/colorselector/huesaturation-handle.gif":[11,11,"gif","qx","qx/decoration/Classic/colorselector-combined.gif",0,0],"qx/decoration/Classic/cursors-combined.gif":[71,20,"gif","qx"],"qx/decoration/Classic/cursors/alias.gif":[19,15,"gif","qx","qx/decoration/Classic/cursors-combined.gif",-52,0],"qx/decoration/Classic/cursors/copy.gif":[19,15,"gif","qx","qx/decoration/Classic/cursors-combined.gif",-20,0],"qx/decoration/Classic/cursors/move.gif":[13,9,"gif","qx","qx/decoration/Classic/cursors-combined.gif",-39,0],"qx/decoration/Classic/cursors/nodrop.gif":[20,20,"gif","qx","qx/decoration/Classic/cursors-combined.gif",0,0],"qx/decoration/Classic/datechooser/last-month-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/last-month.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/last-year-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/last-year.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-month-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-month.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-year-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-year.png":[16,16,"png","qx"],"qx/decoration/Classic/form/checkbox-checked-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-336,0],"qx/decoration/Classic/form/checkbox-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-28,0],"qx/decoration/Classic/form/checkbox-checked-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-462,0],"qx/decoration/Classic/form/checkbox-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-112,0],"qx/decoration/Classic/form/checkbox-checked-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-140,0],"qx/decoration/Classic/form/checkbox-checked-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-98,0],"qx/decoration/Classic/form/checkbox-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-308,0],"qx/decoration/Classic/form/checkbox-checked-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",0,0],"qx/decoration/Classic/form/checkbox-checked.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-266,0],"qx/decoration/Classic/form/checkbox-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-84,0],"qx/decoration/Classic/form/checkbox-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-476,0],"qx/decoration/Classic/form/checkbox-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-392,0],"qx/decoration/Classic/form/checkbox-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-196,0],"qx/decoration/Classic/form/checkbox-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-154,0],"qx/decoration/Classic/form/checkbox-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-350,0],"qx/decoration/Classic/form/checkbox-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-448,0],"qx/decoration/Classic/form/checkbox-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-70,0],"qx/decoration/Classic/form/checkbox.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-490,0],"qx/decoration/Classic/form/radiobutton-checked-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-210,0],"qx/decoration/Classic/form/radiobutton-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-406,0],"qx/decoration/Classic/form/radiobutton-checked-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-378,0],"qx/decoration/Classic/form/radiobutton-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-252,0],"qx/decoration/Classic/form/radiobutton-checked-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-182,0],"qx/decoration/Classic/form/radiobutton-checked-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-294,0],"qx/decoration/Classic/form/radiobutton-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-420,0],"qx/decoration/Classic/form/radiobutton-checked-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-56,0],"qx/decoration/Classic/form/radiobutton-checked.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-322,0],"qx/decoration/Classic/form/radiobutton-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-364,0],"qx/decoration/Classic/form/radiobutton-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-434,0],"qx/decoration/Classic/form/radiobutton-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-168,0],"qx/decoration/Classic/form/radiobutton-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-126,0],"qx/decoration/Classic/form/radiobutton-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-42,0],"qx/decoration/Classic/form/radiobutton-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-280,0],"qx/decoration/Classic/form/radiobutton-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-238,0],"qx/decoration/Classic/form/radiobutton-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-14,0],"qx/decoration/Classic/form/radiobutton.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-224,0],"qx/decoration/Classic/menu-combined.gif":[64,7,"gif","qx"],"qx/decoration/Classic/menu/checkbox-invert.gif":[16,7,"gif","qx","qx/decoration/Classic/menu-combined.gif",-16,0],"qx/decoration/Classic/menu/checkbox.gif":[16,7,"gif","qx","qx/decoration/Classic/menu-combined.gif",-32,0],"qx/decoration/Classic/menu/radiobutton-invert.gif":[16,5,"gif","qx","qx/decoration/Classic/menu-combined.gif",0,0],"qx/decoration/Classic/menu/radiobutton.gif":[16,5,"gif","qx","qx/decoration/Classic/menu-combined.gif",-48,0],"qx/decoration/Classic/shadow-lr-combined.png":[30,382,"png","qx"],"qx/decoration/Classic/shadow-small-lr-combined.png":[10,136,"png","qx"],"qx/decoration/Classic/shadow-small-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Classic/shadow-tb-combined.png":[15,90,"png","qx"],"qx/decoration/Classic/shadow/shadow-b.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-30],"qx/decoration/Classic/shadow/shadow-bl.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-br.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-60],"qx/decoration/Classic/shadow/shadow-c.png":[40,382,"png","qx"],"qx/decoration/Classic/shadow/shadow-l.png":[15,382,"png","qx","qx/decoration/Classic/shadow-lr-combined.png",-15,0],"qx/decoration/Classic/shadow/shadow-r.png":[15,382,"png","qx","qx/decoration/Classic/shadow-lr-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-small-b.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-25],"qx/decoration/Classic/shadow/shadow-small-bl.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-20],"qx/decoration/Classic/shadow/shadow-small-br.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-small-c.png":[40,136,"png","qx"],"qx/decoration/Classic/shadow/shadow-small-l.png":[5,136,"png","qx","qx/decoration/Classic/shadow-small-lr-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-small-r.png":[5,136,"png","qx","qx/decoration/Classic/shadow-small-lr-combined.png",-5,0],"qx/decoration/Classic/shadow/shadow-small-t.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-5],"qx/decoration/Classic/shadow/shadow-small-tl.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-15],"qx/decoration/Classic/shadow/shadow-small-tr.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-10],"qx/decoration/Classic/shadow/shadow-small.png":[114,146,"png","qx"],"qx/decoration/Classic/shadow/shadow-t.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-75],"qx/decoration/Classic/shadow/shadow-tl.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-45],"qx/decoration/Classic/shadow/shadow-tr.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-15],"qx/decoration/Classic/shadow/shadow.png":[381,412,"png","qx"],"qx/decoration/Classic/splitpane/knob-horizontal.png":[4,15,"png","qx"],"qx/decoration/Classic/splitpane/knob-vertical.png":[15,4,"png","qx"],"qx/decoration/Classic/table-combined.png":[72,11,"png","qx"],"qx/decoration/Classic/table/ascending-invert.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",-62,0],"qx/decoration/Classic/table/ascending.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",-52,0],"qx/decoration/Classic/table/boolean-false.png":[11,11,"png","qx","qx/decoration/Classic/table-combined.png",-31,0],"qx/decoration/Classic/table/boolean-true.png":[11,11,"png","qx","qx/decoration/Classic/table-combined.png",-10,0],"qx/decoration/Classic/table/descending-invert.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",-42,0],"qx/decoration/Classic/table/descending.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",0,0],"qx/decoration/Classic/table/select-column-order.png":[10,9,"png","qx","qx/decoration/Classic/table-combined.png",-21,0],"qx/decoration/Classic/tree/minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/tree/plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/cross.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/cross_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/cross_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/end.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/end_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/end_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/line.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/only_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/only_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/start.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/start_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/start_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/window-captionbar-buttons-combined.gif":[36,9,"gif","qx"],"qx/decoration/Classic/window/close.gif":[10,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",0,0],"qx/decoration/Classic/window/maximize.gif":[9,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",-10,0],"qx/decoration/Classic/window/minimize.gif":[9,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",-19,0],"qx/decoration/Classic/window/restore.gif":[8,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",-28,0],"qx/icon/Oxygen/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/edit-clear.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/edit-copy.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/edit-cut.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/edit-delete.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/edit-find.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/edit-paste.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/edit-redo.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/edit-select-all.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/edit-undo.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/format-indent-less.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/format-indent-more.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/format-justify-center.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/format-justify-fill.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/format-justify-left.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/format-justify-right.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/format-text-bold.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/format-text-direction-ltr.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/format-text-direction-rtl.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/format-text-italic.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/format-text-strikethrough.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/format-text-underline.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/insert-image.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/insert-link.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/insert-text.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/mimetypes/text-plain.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/places/folder-open.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/places/folder.png":[16,16,"png","qx"],"qx/static/blank.html":"qx"},"translations":{}};
(function(){var by="toString",bx=".",bw="default",bv="Object",bu='"',bt="Array",bs="()",br="String",bq="Function",bp=".prototype",bX="function",bW="Boolean",bV="Error",bU="constructor",bT="warn",bS="hasOwnProperty",bR="string",bQ="toLocaleString",bP="RegExp",bO='\", "',bF="info",bG="BROKEN_IE",bD="isPrototypeOf",bE="Date",bB="",bC="qx.Bootstrap",bz="]",bA="Class",bH="error",bI="[Class ",bK="valueOf",bJ="Number",bM="count",bL="debug",bN="ES5";
if(!window.qx){window.qx={};
}qx.Bootstrap={genericToString:function(){return bI+this.classname+bz;
},createNamespace:function(name,cf){var ch=name.split(bx);
var parent=window;
var cg=ch[0];

for(var i=0,ci=ch.length-1;i<ci;i++,cg=ch[i]){if(!parent[cg]){parent=parent[cg]={};
}else{parent=parent[cg];
}}parent[cg]=cf;
return cg;
},setDisplayName:function(j,k,name){j.displayName=k+bx+name+bs;
},setDisplayNames:function(o,p){for(var name in o){var q=o[name];

if(q instanceof Function){q.displayName=p+bx+name+bs;
}}},define:function(name,V){if(!V){var V={statics:{}};
}var bb;
var Y=null;
qx.Bootstrap.setDisplayNames(V.statics,name);

if(V.members||V.extend){qx.Bootstrap.setDisplayNames(V.members,name+bp);
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
bb.$$type=bA;
if(!bb.hasOwnProperty(by)){bb.toString=this.genericToString;
}if(V.defer){V.defer(bb,Y);
}qx.Bootstrap.$$registry[name]=V.statics;
return bb;
}};
qx.Bootstrap.define(bC,{statics:{LOADSTART:qx.$$start||new Date(),createNamespace:qx.Bootstrap.createNamespace,define:qx.Bootstrap.define,setDisplayName:qx.Bootstrap.setDisplayName,setDisplayNames:qx.Bootstrap.setDisplayNames,genericToString:qx.Bootstrap.genericToString,extendClass:function(G,H,I,name,J){var M=I.prototype;
var L=new Function;
L.prototype=M;
var K=new L;
G.prototype=K;
K.name=K.classname=name;
K.basename=J;
H.base=G.superclass=I;
H.self=G.constructor=K.constructor=G;
},getByName:function(name){return qx.Bootstrap.$$registry[name];
},$$registry:{},objectGetLength:({"count":function(u){return u.__count__;
},"default":function(b){var length=0;

for(var c in b){length++;
}return length;
}})[(({}).__count__==0)?bM:bw],objectMergeWith:function(N,O,P){if(P===undefined){P=true;
}
for(var Q in O){if(P||N[Q]===undefined){N[Q]=O[Q];
}}return N;
},__ho:[bD,bS,bQ,by,bK,bU],getKeys:({"ES5":Object.keys,"BROKEN_IE":function(d){var e=[];
var g=Object.prototype.hasOwnProperty;

for(var h in d){if(g.call(d,h)){e.push(h);
}}var f=qx.Bootstrap.__ho;

for(var i=0,a=f,l=a.length;i<l;i++){if(g.call(d,a[i])){e.push(a[i]);
}}return e;
},"default":function(C){var D=[];
var E=Object.prototype.hasOwnProperty;

for(var F in C){if(E.call(C,F)){D.push(F);
}}return D;
}})[typeof (Object.keys)==
bX?bN:
(function(){for(var ce in {toString:1}){return ce;
}})()!==by?bG:bw],getKeysAsString:function(bn){var bo=qx.Bootstrap.getKeys(bn);

if(bo.length==0){return bB;
}return bu+bo.join(bO)+bu;
},__hp:{"[object String]":br,"[object Array]":bt,"[object Object]":bv,"[object RegExp]":bP,"[object Number]":bJ,"[object Boolean]":bW,"[object Date]":bE,"[object Function]":bq,"[object Error]":bV},bind:function(y,self,z){var A=Array.prototype.slice.call(arguments,2,arguments.length);
return function(){var n=Array.prototype.slice.call(arguments,0,arguments.length);
return y.apply(self,A.concat(n));
};
},firstUp:function(be){return be.charAt(0).toUpperCase()+be.substr(1);
},firstLow:function(R){return R.charAt(0).toLowerCase()+R.substr(1);
},getClass:function(s){var t=Object.prototype.toString.call(s);
return (qx.Bootstrap.__hp[t]||t.slice(8,-1));
},isString:function(m){return (m!==null&&(typeof m===bR||qx.Bootstrap.getClass(m)==br||m instanceof String||(!!m&&!!m.$$isString)));
},isArray:function(cb){return (cb!==null&&(cb instanceof Array||(cb&&qx.data&&qx.data.IListData&&qx.Bootstrap.hasInterface(cb.constructor,qx.data.IListData))||qx.Bootstrap.getClass(cb)==bt||(!!cb&&!!cb.$$isArray)));
},isObject:function(cj){return (cj!==undefined&&cj!==null&&qx.Bootstrap.getClass(cj)==bv);
},isFunction:function(ck){return qx.Bootstrap.getClass(ck)==bq;
},classIsDefined:function(name){return qx.Bootstrap.getByName(name)!==undefined;
},getPropertyDefinition:function(U,name){while(U){if(U.$$properties&&U.$$properties[name]){return U.$$properties[name];
}U=U.superclass;
}return null;
},hasProperty:function(r,name){return !!qx.Bootstrap.getPropertyDefinition(r,name);
},getEventType:function(bh,name){var bh=bh.constructor;

while(bh.superclass){if(bh.$$events&&bh.$$events[name]!==undefined){return bh.$$events[name];
}bh=bh.superclass;
}return null;
},supportsEvent:function(B,name){return !!qx.Bootstrap.getEventType(B,name);
},getByInterface:function(v,w){var x,i,l;

while(v){if(v.$$implements){x=v.$$flatImplements;

for(i=0,l=x.length;i<l;i++){if(x[i]===w){return v;
}}}v=v.superclass;
}return null;
},hasInterface:function(bi,bj){return !!qx.Bootstrap.getByInterface(bi,bj);
},getMixins:function(bf){var bg=[];

while(bf){if(bf.$$includes){bg.push.apply(bg,bf.$$flatIncludes);
}bf=bf.superclass;
}return bg;
},$$logs:[],debug:function(cc,cd){qx.Bootstrap.$$logs.push([bL,arguments]);
},info:function(bl,bm){qx.Bootstrap.$$logs.push([bF,arguments]);
},warn:function(bY,ca){qx.Bootstrap.$$logs.push([bT,arguments]);
},error:function(S,T){qx.Bootstrap.$$logs.push([bH,arguments]);
},trace:function(bk){}}});
})();
(function(){var j="qx.allowUrlSettings",h="&",g="qx.core.Setting",f="qx.allowUrlVariants",e="qx.propertyDebugLevel",d="qxsetting",c=":",b=".";
qx.Bootstrap.define(g,{statics:{__eo:{},define:function(p,q){if(q===undefined){throw new Error('Default value of setting "'+p+'" must be defined!');
}
if(!this.__eo[p]){this.__eo[p]={};
}else if(this.__eo[p].defaultValue!==undefined){throw new Error('Setting "'+p+'" is already defined!');
}this.__eo[p].defaultValue=q;
},get:function(k){var l=this.__eo[k];

if(l===undefined){throw new Error('Setting "'+k+'" is not defined.');
}
if(l.value!==undefined){return l.value;
}return l.defaultValue;
},set:function(m,n){if((m.split(b)).length<2){throw new Error('Malformed settings key "'+m+'". Must be following the schema "namespace.key".');
}
if(!this.__eo[m]){this.__eo[m]={};
}this.__eo[m].value=n;
},__ep:function(){if(window.qxsettings){for(var t in window.qxsettings){this.set(t,window.qxsettings[t]);
}window.qxsettings=undefined;

try{delete window.qxsettings;
}catch(a){}this.__eq();
}},__eq:function(){if(this.get(j)!=true){return;
}var s=document.location.search.slice(1).split(h);

for(var i=0;i<s.length;i++){var r=s[i].split(c);

if(r.length!=3||r[0]!=d){continue;
}this.set(r[1],decodeURIComponent(r[2]));
}}},defer:function(o){o.define(j,false);
o.define(f,false);
o.define(e,0);
o.__ep();
}});
})();
(function(){var p="function",o="Boolean",n="qx.Interface",m="]",k="toggle",j="Interface",h="is",g="[Interface ";
qx.Bootstrap.define(n,{statics:{define:function(name,s){if(s){if(s.extend&&!(s.extend instanceof Array)){s.extend=[s.extend];
}{};
var t=s.statics?s.statics:{};
if(s.extend){t.$$extends=s.extend;
}
if(s.properties){t.$$properties=s.properties;
}
if(s.members){t.$$members=s.members;
}
if(s.events){t.$$events=s.events;
}}else{var t={};
}t.$$type=j;
t.name=name;
t.toString=this.genericToString;
t.basename=qx.Bootstrap.createNamespace(name,t);
qx.Interface.$$registry[name]=t;
return t;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(q){if(!q){return [];
}var r=q.concat();

for(var i=0,l=q.length;i<l;i++){if(q[i].$$extends){r.push.apply(r,this.flatten(q[i].$$extends));
}}return r;
},__fy:function(B,C,D,E){var I=D.$$members;

if(I){for(var H in I){if(qx.Bootstrap.isFunction(I[H])){var G=this.__fz(C,H);
var F=G||qx.Bootstrap.isFunction(B[H]);

if(!F){throw new Error('Implementation of method "'+H+'" is missing in class "'+C.classname+'" required by interface "'+D.name+'"');
}var J=E===true&&!G&&!qx.Bootstrap.hasInterface(C,D);

if(J){B[H]=this.__fC(D,B[H],H,I[H]);
}}else{if(typeof B[H]===undefined){if(typeof B[H]!==p){throw new Error('Implementation of member "'+H+'" is missing in class "'+C.classname+'" required by interface "'+D.name+'"');
}}}}}},__fz:function(a,b){var f=b.match(/^(is|toggle|get|set|reset)(.*)$/);

if(!f){return false;
}var c=qx.Bootstrap.firstLow(f[2]);
var d=qx.Bootstrap.getPropertyDefinition(a,c);

if(!d){return false;
}var e=f[0]==h||f[0]==k;

if(e){return qx.Bootstrap.getPropertyDefinition(a,c).check==o;
}return true;
},__fA:function(K,L){if(L.$$properties){for(var M in L.$$properties){if(!qx.Bootstrap.getPropertyDefinition(K,M)){throw new Error('The property "'+M+'" is not supported by Class "'+K.classname+'"!');
}}}},__fB:function(u,v){if(v.$$events){for(var w in v.$$events){if(!qx.Bootstrap.supportsEvent(u,w)){throw new Error('The event "'+w+'" is not supported by Class "'+u.classname+'"!');
}}}},assertObject:function(N,O){var Q=N.constructor;
this.__fy(N,Q,O,false);
this.__fA(Q,O);
this.__fB(Q,O);
var P=O.$$extends;

if(P){for(var i=0,l=P.length;i<l;i++){this.assertObject(N,P[i]);
}}},assert:function(x,y,z){this.__fy(x.prototype,x,y,z);
this.__fA(x,y);
this.__fB(x,y);
var A=y.$$extends;

if(A){for(var i=0,l=A.length;i<l;i++){this.assert(x,A[i],z);
}}},genericToString:function(){return g+this.name+m;
},$$registry:{},__fC:function(){},__fD:null,__fE:function(){}}});
})();
(function(){var g="qx.Mixin",f=".prototype",e="constructor",d="[Mixin ",c="]",b="destruct",a="Mixin";
qx.Bootstrap.define(g,{statics:{define:function(name,w){if(w){if(w.include&&!(w.include instanceof Array)){w.include=[w.include];
}{};
var y=w.statics?w.statics:{};
qx.Bootstrap.setDisplayNames(y,name);

for(var x in y){if(y[x] instanceof Function){y[x].$$mixin=y;
}}if(w.construct){y.$$constructor=w.construct;
qx.Bootstrap.setDisplayName(w.construct,name,e);
}
if(w.include){y.$$includes=w.include;
}
if(w.properties){y.$$properties=w.properties;
}
if(w.members){y.$$members=w.members;
qx.Bootstrap.setDisplayNames(w.members,name+f);
}
for(var x in y.$$members){if(y.$$members[x] instanceof Function){y.$$members[x].$$mixin=y;
}}
if(w.events){y.$$events=w.events;
}
if(w.destruct){y.$$destructor=w.destruct;
qx.Bootstrap.setDisplayName(w.destruct,name,b);
}}else{var y={};
}y.$$type=a;
y.name=name;
y.toString=this.genericToString;
y.basename=qx.Bootstrap.createNamespace(name,y);
this.$$registry[name]=y;
return y;
},checkCompatibility:function(o){var r=this.flatten(o);
var s=r.length;

if(s<2){return true;
}var v={};
var u={};
var t={};
var q;

for(var i=0;i<s;i++){q=r[i];

for(var p in q.events){if(t[p]){throw new Error('Conflict between mixin "'+q.name+'" and "'+t[p]+'" in member "'+p+'"!');
}t[p]=q.name;
}
for(var p in q.properties){if(v[p]){throw new Error('Conflict between mixin "'+q.name+'" and "'+v[p]+'" in property "'+p+'"!');
}v[p]=q.name;
}
for(var p in q.members){if(u[p]){throw new Error('Conflict between mixin "'+q.name+'" and "'+u[p]+'" in member "'+p+'"!');
}u[p]=q.name;
}}return true;
},isCompatible:function(h,j){var k=qx.Bootstrap.getMixins(j);
k.push(h);
return qx.Mixin.checkCompatibility(k);
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(m){if(!m){return [];
}var n=m.concat();

for(var i=0,l=m.length;i<l;i++){if(m[i].$$includes){n.push.apply(n,this.flatten(m[i].$$includes));
}}return n;
},genericToString:function(){return d+this.name+c;
},$$registry:{},__el:null,__em:function(){}}});
})();
(function(){var dU=';',dT='computed=this.',dS='=value;',dR='this.',dQ="set",dP="setThemed",dO="setRuntime",dN="init",dM='if(this.',dL='delete this.',cU='!==undefined)',cT='}',cS="resetThemed",cR='else if(this.',cQ="string",cP='return this.',cO="reset",cN="boolean",cM="resetRuntime",cL='!==undefined){',ec="",ed="refresh",ea='=true;',eb="this.",dX=";",dY='old=this.',dV="();",dW='else ',ee='if(old===undefined)old=this.',ef='old=computed=this.',du="return this.",dt="get",dw='(value);',dv="(a[",dy='if(old===computed)return value;',dx='if(old===undefined)old=null;',dA=' of an instance of ',dz=' is not (yet) ready!");',ds="]);",dr='!==inherit){',bC='qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)',bD='value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)',bE='value !== null && value.nodeType === 9 && value.documentElement',bF='===value)return value;',bG='value !== null && value.$$type === "Mixin"',bH='return init;',bI='var init=this.',bJ='value !== null && value.nodeType === 1 && value.attributes',bK="var parent = this.getLayoutParent();",bL="Error in property ",et='var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){',es='.validate.call(this, value);',er='qx.core.Assert.assertInstance(value, Date, msg) || true',eq='else{',ex="if (!parent) return;",ew=" in method ",ev='qx.core.Assert.assertInstance(value, Error, msg) || true',eu='=computed;',ez='Undefined value is not allowed!',ey='(backup);',cl="MSIE 6.0",cm='if(computed===inherit){',cj="inherit",ck='Is invalid!',cp='if(value===undefined)prop.error(this,2,"',cq='var computed, old=this.',cn='else if(computed===undefined)',co="': ",ch=" of class ",ci='value !== null && value.nodeType !== undefined',bT='===undefined)return;',bS='value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',bV="')){",bU='qx.core.Assert.assertPositiveInteger(value, msg) || true',bP='else this.',bO='value=this.',bR='","',bQ='if(init==qx.core.Property.$$inherit)init=null;',bN='value !== null && value.$$type === "Interface"',bM='var inherit=prop.$$inherit;',cv="', qx.event.type.Data, [computed, old]",cw="var value = parent.",cx="$$useinit_",cy='computed=undefined;delete this.',cr="(value);",cs='Requires exactly one argument!',ct='",value);',cu='computed=value;',cz="$$runtime_",cA=';}',ce="$$user_",cd='){',cc='qx.core.Assert.assertArray(value, msg) || true',cb='if(computed===undefined||computed===inherit){',ca='qx.core.Assert.assertPositiveNumber(value, msg) || true',bY=".prototype",bX="Boolean",bW=")}",cg='(computed, old, "',cf='return value;',cB='if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ',cC="if(reg.hasListener(this, '",cD='Does not allow any arguments!',cE=')a[i].',cF="()",cG="var a=arguments[0] instanceof Array?arguments[0]:arguments;",cH='.$$properties.',cI='value !== null && value.$$type === "Theme"',cJ="var reg=qx.event.Registration;",cK="())",cY='return null;',cX='qx.core.Assert.assertObject(value, msg) || true',cW='");',cV='qx.core.Assert.assertString(value, msg) || true',dd='var pa=this.getLayoutParent();if(pa)computed=pa.',dc="if (value===undefined) value = parent.",db='value !== null && value.$$type === "Class"',da='qx.core.Assert.assertFunction(value, msg) || true',df='!==undefined&&',de='var computed, old;',dm='var backup=computed;',dn='}else{',dk="object",dl="$$init_",di="$$theme_",dj='if(computed===undefined)computed=null;',dg='qx.core.Assert.assertMap(value, msg) || true',dh='qx.core.Assert.assertNumber(value, msg) || true',dp='if((computed===undefined||computed===inherit)&&',dq="reg.fireEvent(this, '",dE='Null value is not allowed!',dD='qx.core.Assert.assertInteger(value, msg) || true',dG="value",dF="rv:1.8.1",dI="shorthand",dH='qx.core.Assert.assertInstance(value, RegExp, msg) || true',dK='value !== null && value.type !== undefined',dJ='value !== null && value.document',dC='throw new Error("Property ',dB="(!this.",em='qx.core.Assert.assertBoolean(value, msg) || true',en='if(a[i].',eo="toggle",ep="$$inherit_",ei='var prop=qx.core.Property;',ej=" with incoming value '",ek="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));",el='if(computed===undefined||computed==inherit)computed=null;',eg="qx.core.Property",eh="is",bB='Could not change or apply init value after constructing phase!';
qx.Bootstrap.define(eg,{statics:{__la:{"Boolean":em,"String":cV,"Number":dh,"Integer":dD,"PositiveNumber":ca,"PositiveInteger":bU,"Error":ev,"RegExp":dH,"Object":cX,"Array":cc,"Map":dg,"Function":da,"Date":er,"Node":ci,"Element":bJ,"Document":bE,"Window":dJ,"Event":dK,"Class":db,"Mixin":bG,"Interface":bN,"Theme":cI,"Color":bC,"Decorator":bS,"Font":bD},__lb:{"Node":true,"Element":true,"Document":true,"Window":true,"Event":true},$$inherit:cj,$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},set:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{name:cQ,dereference:cN,inheritable:cN,nullable:cN,themeable:cN,refine:cN,init:null,apply:cQ,event:cQ,check:null,transform:cQ,deferredInit:cN,validate:null},$$allowedGroupKeys:{name:cQ,group:dk,mode:cQ,themeable:cN},$$inheritable:{},__lc:function(G){var H=this.__ld(G);

if(!H.length){var I=qx.lang.Function.empty;
}else{I=this.__le(H);
}G.prototype.$$refreshInheritables=I;
},__ld:function(D){var F=[];

while(D){var E=D.$$properties;

if(E){for(var name in this.$$inheritable){if(E[name]&&E[name].inheritable){F.push(name);
}}}D=D.superclass;
}return F;
},__le:function(eL){var eP=this.$$store.inherit;
var eO=this.$$store.init;
var eN=this.$$method.refresh;
var eM=[bK,ex];

for(var i=0,l=eL.length;i<l;i++){var name=eL[i];
eM.push(cw,eP[name],dX,dc,eO[name],dX,eb,eN[name],cr);
}return new Function(eM.join(ec));
},attachRefreshInheritables:function(v){v.prototype.$$refreshInheritables=function(){qx.core.Property.__lc(v);
return this.$$refreshInheritables();
};
},attachMethods:function(m,name,n){n.group?this.__lf(m,n,name):this.__lg(m,n,name);
},__lf:function(O,P,name){var W=qx.Bootstrap.firstUp(name);
var V=O.prototype;
var X=P.themeable===true;
{};
var Y=[];
var S=[];

if(X){var Q=[];
var U=[];
}var T=cG;
Y.push(T);

if(X){Q.push(T);
}
if(P.mode==dI){var R=ek;
Y.push(R);

if(X){Q.push(R);
}}
for(var i=0,a=P.group,l=a.length;i<l;i++){{};
Y.push(eb,this.$$method.set[a[i]],dv,i,ds);
S.push(eb,this.$$method.reset[a[i]],dV);

if(X){{};
Q.push(eb,this.$$method.setThemed[a[i]],dv,i,ds);
U.push(eb,this.$$method.resetThemed[a[i]],dV);
}}this.$$method.set[name]=dQ+W;
V[this.$$method.set[name]]=new Function(Y.join(ec));
this.$$method.reset[name]=cO+W;
V[this.$$method.reset[name]]=new Function(S.join(ec));

if(X){this.$$method.setThemed[name]=dP+W;
V[this.$$method.setThemed[name]]=new Function(Q.join(ec));
this.$$method.resetThemed[name]=cS+W;
V[this.$$method.resetThemed[name]]=new Function(U.join(ec));
}},__lg:function(c,d,name){var f=qx.Bootstrap.firstUp(name);
var h=c.prototype;
{};
if(d.dereference===undefined&&typeof d.check===cQ){d.dereference=this.__lh(d.check);
}var g=this.$$method;
var e=this.$$store;
e.runtime[name]=cz+name;
e.user[name]=ce+name;
e.theme[name]=di+name;
e.init[name]=dl+name;
e.inherit[name]=ep+name;
e.useinit[name]=cx+name;
g.get[name]=dt+f;
h[g.get[name]]=function(){return qx.core.Property.executeOptimizedGetter(this,c,name,dt);
};
g.set[name]=dQ+f;
h[g.set[name]]=function(bm){return qx.core.Property.executeOptimizedSetter(this,c,name,dQ,arguments);
};
g.reset[name]=cO+f;
h[g.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,c,name,cO);
};

if(d.inheritable||d.apply||d.event||d.deferredInit){g.init[name]=dN+f;
h[g.init[name]]=function(eT){return qx.core.Property.executeOptimizedSetter(this,c,name,dN,arguments);
};
}
if(d.inheritable){g.refresh[name]=ed+f;
h[g.refresh[name]]=function(bl){return qx.core.Property.executeOptimizedSetter(this,c,name,ed,arguments);
};
}g.setRuntime[name]=dO+f;
h[g.setRuntime[name]]=function(J){return qx.core.Property.executeOptimizedSetter(this,c,name,dO,arguments);
};
g.resetRuntime[name]=cM+f;
h[g.resetRuntime[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,c,name,cM);
};

if(d.themeable){g.setThemed[name]=dP+f;
h[g.setThemed[name]]=function(b){return qx.core.Property.executeOptimizedSetter(this,c,name,dP,arguments);
};
g.resetThemed[name]=cS+f;
h[g.resetThemed[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,c,name,cS);
};
}
if(d.check===bX){h[eo+f]=new Function(du+g.set[name]+dB+g.get[name]+cK);
h[eh+f]=new Function(du+g.get[name]+cF);
}},__lh:function(bA){return !!this.__lb[bA];
},__li:function(fa){return this.__lb[fa]||qx.Bootstrap.classIsDefined(fa)||(qx.Interface&&qx.Interface.isDefined(fa));
},__lj:{0:bB,1:cs,2:ez,3:cD,4:dE,5:ck},error:function(o,p,q,r,s){var t=o.constructor.classname;
var u=bL+q+ch+t+ew+this.$$method[r][q]+ej+s+co;
throw new Error(u+(this.__lj[p]||"Unknown reason: "+p));
},__lk:function(eD,eE,name,eF,eG,eH){var eI=this.$$method[eF][name];
{eE[eI]=new Function(dG,eG.join(ec));
};
{};
qx.Bootstrap.setDisplayName(eE[eI],eD.classname+bY,eI);
if(eH===undefined){return eD[eI]();
}else{return eD[eI](eH[0]);
}},executeOptimizedGetter:function(w,x,name,y){var A=x.$$properties[name];
var C=x.prototype;
var z=[];
var B=this.$$store;
z.push(dM,B.runtime[name],cU);
z.push(cP,B.runtime[name],dU);

if(A.inheritable){z.push(cR,B.inherit[name],cU);
z.push(cP,B.inherit[name],dU);
z.push(dW);
}z.push(dM,B.user[name],cU);
z.push(cP,B.user[name],dU);

if(A.themeable){z.push(cR,B.theme[name],cU);
z.push(cP,B.theme[name],dU);
}
if(A.deferredInit&&A.init===undefined){z.push(cR,B.init[name],cU);
z.push(cP,B.init[name],dU);
}z.push(dW);

if(A.init!==undefined){if(A.inheritable){z.push(bI,B.init[name],dU);

if(A.nullable){z.push(bQ);
}else if(A.init!==undefined){z.push(cP,B.init[name],dU);
}else{z.push(cB,name,dA,x.classname,dz);
}z.push(bH);
}else{z.push(cP,B.init[name],dU);
}}else if(A.inheritable||A.nullable){z.push(cY);
}else{z.push(dC,name,dA,x.classname,dz);
}return this.__lk(w,C,name,y,z);
},executeOptimizedSetter:function(bn,bo,name,bp,bq){var bv=bo.$$properties[name];
var bu=bo.prototype;
var bs=[];
var br=bp===dQ||bp===dP||bp===dO||(bp===dN&&bv.init===undefined);
var bt=bv.apply||bv.event||bv.inheritable;
var bw=this.__ll(bp,name);
this.__lm(bs,bv,name,bp,br);

if(br){this.__ln(bs,bo,bv,name);
}
if(bt){this.__lo(bs,br,bw,bp);
}
if(bv.inheritable){bs.push(bM);
}{};

if(!bt){this.__lq(bs,name,bp,br);
}else{this.__lr(bs,bv,name,bp,br);
}
if(bv.inheritable){this.__ls(bs,bv,name,bp);
}else if(bt){this.__lt(bs,bv,name,bp);
}
if(bt){this.__lu(bs,bv,name);
if(bv.inheritable&&bu._getChildren){this.__lv(bs,name);
}}if(br){bs.push(cf);
}return this.__lk(bn,bu,name,bp,bs,bq);
},__ll:function(eJ,name){if(eJ===dO||eJ===cM){var eK=this.$$store.runtime[name];
}else if(eJ===dP||eJ===cS){eK=this.$$store.theme[name];
}else if(eJ===dN){eK=this.$$store.init[name];
}else{eK=this.$$store.user[name];
}return eK;
},__lm:function(bh,bi,name,bj,bk){{if(!bi.nullable||bi.check||bi.inheritable){bh.push(ei);
}if(bj===dQ){bh.push(cp,name,bR,bj,ct);
}};
},__ln:function(eA,eB,eC,name){if(eC.transform){eA.push(bO,eC.transform,dw);
}if(eC.validate){if(typeof eC.validate===cQ){eA.push(dR,eC.validate,dw);
}else if(eC.validate instanceof Function){eA.push(eB.classname,cH,name);
eA.push(es);
}}},__lo:function(eU,eV,eW,eX){var eY=(eX===cO||eX===cS||eX===cM);

if(eV){eU.push(dM,eW,bF);
}else if(eY){eU.push(dM,eW,bT);
}},__lp:undefined,__lq:function(eQ,name,eR,eS){if(eR===dO){eQ.push(dR,this.$$store.runtime[name],dS);
}else if(eR===cM){eQ.push(dM,this.$$store.runtime[name],cU);
eQ.push(dL,this.$$store.runtime[name],dU);
}else if(eR===dQ){eQ.push(dR,this.$$store.user[name],dS);
}else if(eR===cO){eQ.push(dM,this.$$store.user[name],cU);
eQ.push(dL,this.$$store.user[name],dU);
}else if(eR===dP){eQ.push(dR,this.$$store.theme[name],dS);
}else if(eR===cS){eQ.push(dM,this.$$store.theme[name],cU);
eQ.push(dL,this.$$store.theme[name],dU);
}else if(eR===dN&&eS){eQ.push(dR,this.$$store.init[name],dS);
}},__lr:function(ba,bb,name,bc,bd){if(bb.inheritable){ba.push(cq,this.$$store.inherit[name],dU);
}else{ba.push(de);
}ba.push(dM,this.$$store.runtime[name],cL);

if(bc===dO){ba.push(dT,this.$$store.runtime[name],dS);
}else if(bc===cM){ba.push(dL,this.$$store.runtime[name],dU);
ba.push(dM,this.$$store.user[name],cU);
ba.push(dT,this.$$store.user[name],dU);
ba.push(cR,this.$$store.theme[name],cU);
ba.push(dT,this.$$store.theme[name],dU);
ba.push(cR,this.$$store.init[name],cL);
ba.push(dT,this.$$store.init[name],dU);
ba.push(dR,this.$$store.useinit[name],ea);
ba.push(cT);
}else{ba.push(ef,this.$$store.runtime[name],dU);
if(bc===dQ){ba.push(dR,this.$$store.user[name],dS);
}else if(bc===cO){ba.push(dL,this.$$store.user[name],dU);
}else if(bc===dP){ba.push(dR,this.$$store.theme[name],dS);
}else if(bc===cS){ba.push(dL,this.$$store.theme[name],dU);
}else if(bc===dN&&bd){ba.push(dR,this.$$store.init[name],dS);
}}ba.push(cT);
ba.push(cR,this.$$store.user[name],cL);

if(bc===dQ){if(!bb.inheritable){ba.push(dY,this.$$store.user[name],dU);
}ba.push(dT,this.$$store.user[name],dS);
}else if(bc===cO){if(!bb.inheritable){ba.push(dY,this.$$store.user[name],dU);
}ba.push(dL,this.$$store.user[name],dU);
ba.push(dM,this.$$store.runtime[name],cU);
ba.push(dT,this.$$store.runtime[name],dU);
ba.push(dM,this.$$store.theme[name],cU);
ba.push(dT,this.$$store.theme[name],dU);
ba.push(cR,this.$$store.init[name],cL);
ba.push(dT,this.$$store.init[name],dU);
ba.push(dR,this.$$store.useinit[name],ea);
ba.push(cT);
}else{if(bc===dO){ba.push(dT,this.$$store.runtime[name],dS);
}else if(bb.inheritable){ba.push(dT,this.$$store.user[name],dU);
}else{ba.push(ef,this.$$store.user[name],dU);
}if(bc===dP){ba.push(dR,this.$$store.theme[name],dS);
}else if(bc===cS){ba.push(dL,this.$$store.theme[name],dU);
}else if(bc===dN&&bd){ba.push(dR,this.$$store.init[name],dS);
}}ba.push(cT);
if(bb.themeable){ba.push(cR,this.$$store.theme[name],cL);

if(!bb.inheritable){ba.push(dY,this.$$store.theme[name],dU);
}
if(bc===dO){ba.push(dT,this.$$store.runtime[name],dS);
}else if(bc===dQ){ba.push(dT,this.$$store.user[name],dS);
}else if(bc===dP){ba.push(dT,this.$$store.theme[name],dS);
}else if(bc===cS){ba.push(dL,this.$$store.theme[name],dU);
ba.push(dM,this.$$store.init[name],cL);
ba.push(dT,this.$$store.init[name],dU);
ba.push(dR,this.$$store.useinit[name],ea);
ba.push(cT);
}else if(bc===dN){if(bd){ba.push(dR,this.$$store.init[name],dS);
}ba.push(dT,this.$$store.theme[name],dU);
}else if(bc===ed){ba.push(dT,this.$$store.theme[name],dU);
}ba.push(cT);
}ba.push(cR,this.$$store.useinit[name],cd);

if(!bb.inheritable){ba.push(dY,this.$$store.init[name],dU);
}
if(bc===dN){if(bd){ba.push(dT,this.$$store.init[name],dS);
}else{ba.push(dT,this.$$store.init[name],dU);
}}else if(bc===dQ||bc===dO||bc===dP||bc===ed){ba.push(dL,this.$$store.useinit[name],dU);

if(bc===dO){ba.push(dT,this.$$store.runtime[name],dS);
}else if(bc===dQ){ba.push(dT,this.$$store.user[name],dS);
}else if(bc===dP){ba.push(dT,this.$$store.theme[name],dS);
}else if(bc===ed){ba.push(dT,this.$$store.init[name],dU);
}}ba.push(cT);
if(bc===dQ||bc===dO||bc===dP||bc===dN){ba.push(eq);

if(bc===dO){ba.push(dT,this.$$store.runtime[name],dS);
}else if(bc===dQ){ba.push(dT,this.$$store.user[name],dS);
}else if(bc===dP){ba.push(dT,this.$$store.theme[name],dS);
}else if(bc===dN){if(bd){ba.push(dT,this.$$store.init[name],dS);
}else{ba.push(dT,this.$$store.init[name],dU);
}ba.push(dR,this.$$store.useinit[name],ea);
}ba.push(cT);
}},__ls:function(L,M,name,N){L.push(cb);

if(N===ed){L.push(cu);
}else{L.push(dd,this.$$store.inherit[name],dU);
}L.push(dp);
L.push(dR,this.$$store.init[name],df);
L.push(dR,this.$$store.init[name],dr);
L.push(dT,this.$$store.init[name],dU);
L.push(dR,this.$$store.useinit[name],ea);
L.push(dn);
L.push(dL,this.$$store.useinit[name],cA);
L.push(cT);
L.push(dy);
L.push(cm);
L.push(cy,this.$$store.inherit[name],dU);
L.push(cT);
L.push(cn);
L.push(dL,this.$$store.inherit[name],dU);
L.push(bP,this.$$store.inherit[name],eu);
L.push(dm);
if(M.init!==undefined&&N!==dN){L.push(ee,this.$$store.init[name],dX);
}else{L.push(dx);
}L.push(el);
},__lt:function(bx,by,name,bz){if(bz!==dQ&&bz!==dO&&bz!==dP){bx.push(dj);
}bx.push(dy);
if(by.init!==undefined&&bz!==dN){bx.push(ee,this.$$store.init[name],dX);
}else{bx.push(dx);
}},__lu:function(j,k,name){if(k.apply){j.push(dR,k.apply,cg,name,cW);
}if(k.event){j.push(cJ,cC,k.event,bV,dq,k.event,cv,bW);
}},__lv:function(K,name){K.push(et);
K.push(en,this.$$method.refresh[name],cE,this.$$method.refresh[name],ey);
K.push(cT);
}},defer:function(be){var bg=navigator.userAgent.indexOf(cl)!=-1;
var bf=navigator.userAgent.indexOf(dF)!=-1;
if(bg||bf){be.__lh=be.__li;
}}});
})();
(function(){var g="emulated",f="native",e='"',d="qx.lang.Core",c="\\\\",b="\\\"",a="[object Error]";
qx.Bootstrap.define(d,{statics:{errorToString:{"native":Error.prototype.toString,"emulated":function(){return this.message;
}}[(!Error.prototype.toString||Error.prototype.toString()==a)?g:f],arrayIndexOf:{"native":Array.prototype.indexOf,"emulated":function(q,r){if(r==null){r=0;
}else if(r<0){r=Math.max(0,this.length+r);
}
for(var i=r;i<this.length;i++){if(this[i]===q){return i;
}}return -1;
}}[Array.prototype.indexOf?f:g],arrayLastIndexOf:{"native":Array.prototype.lastIndexOf,"emulated":function(y,z){if(z==null){z=this.length-1;
}else if(z<0){z=Math.max(0,this.length+z);
}
for(var i=z;i>=0;i--){if(this[i]===y){return i;
}}return -1;
}}[Array.prototype.lastIndexOf?f:g],arrayForEach:{"native":Array.prototype.forEach,"emulated":function(s,t){var l=this.length;

for(var i=0;i<l;i++){var u=this[i];

if(u!==undefined){s.call(t||window,u,i,this);
}}}}[Array.prototype.forEach?f:g],arrayFilter:{"native":Array.prototype.filter,"emulated":function(h,j){var k=[];
var l=this.length;

for(var i=0;i<l;i++){var m=this[i];

if(m!==undefined){if(h.call(j||window,m,i,this)){k.push(this[i]);
}}}return k;
}}[Array.prototype.filter?f:g],arrayMap:{"native":Array.prototype.map,"emulated":function(A,B){var C=[];
var l=this.length;

for(var i=0;i<l;i++){var D=this[i];

if(D!==undefined){C[i]=A.call(B||window,D,i,this);
}}return C;
}}[Array.prototype.map?f:g],arraySome:{"native":Array.prototype.some,"emulated":function(v,w){var l=this.length;

for(var i=0;i<l;i++){var x=this[i];

if(x!==undefined){if(v.call(w||window,x,i,this)){return true;
}}}return false;
}}[Array.prototype.some?f:g],arrayEvery:{"native":Array.prototype.every,"emulated":function(n,o){var l=this.length;

for(var i=0;i<l;i++){var p=this[i];

if(p!==undefined){if(!n.call(o||window,p,i,this)){return false;
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
(function(){var bt="[Class ",bs="]",br="$$init_",bq="toString",bp="constructor",bo="singleton",bn=".prototype",bm="extend",bl="Class",bk="destruct",bh="qx.Class",bj=".",bi="static",bg="qx.event.type.Data";
qx.Bootstrap.define(bh,{statics:{define:function(name,bu){if(!bu){var bu={};
}if(bu.include&&!(bu.include instanceof Array)){bu.include=[bu.include];
}if(bu.implement&&!(bu.implement instanceof Array)){bu.implement=[bu.implement];
}var bv=false;

if(!bu.hasOwnProperty(bm)&&!bu.type){bu.type=bi;
bv=true;
}{};
var bw=this.__cb(name,bu.type,bu.extend,bu.statics,bu.construct,bu.destruct,bu.include);
if(bu.extend){if(bu.properties){this.__cd(bw,bu.properties,true);
}if(bu.members){this.__cf(bw,bu.members,true,true,false);
}if(bu.events){this.__cc(bw,bu.events,true);
}if(bu.include){for(var i=0,l=bu.include.length;i<l;i++){this.__cj(bw,bu.include[i],false);
}}}if(bu.settings){for(var bx in bu.settings){qx.core.Setting.define(bx,bu.settings[bx]);
}}if(bu.variants){for(var bx in bu.variants){qx.core.Variant.define(bx,bu.variants[bx].allowedValues,bu.variants[bx].defaultValue);
}}if(bu.implement){for(var i=0,l=bu.implement.length;i<l;i++){this.__ch(bw,bu.implement[i]);
}}{};
if(bu.defer){bu.defer.self=bw;
bu.defer(bw,bw.prototype,{add:function(name,b){var c={};
c[name]=b;
qx.Class.__cd(bw,c,true);
}});
}return bw;
},undefine:function(name){delete this.$$registry[name];
var bO=name.split(bj);
var bQ=[window];

for(var i=0;i<bO.length;i++){bQ.push(bQ[i][bO[i]]);
}for(var i=bQ.length-1;i>=1;i--){var bP=bQ[i];
var parent=bQ[i-1];

if(qx.Bootstrap.isFunction(bP)||qx.Bootstrap.objectGetLength(bP)===0){delete parent[bO[i-1]];
}else{break;
}}},isDefined:qx.Bootstrap.classIsDefined,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},getByName:qx.Bootstrap.getByName,include:function(M,N){{};
qx.Class.__cj(M,N,false);
},patch:function(bG,bH){{};
qx.Class.__cj(bG,bH,true);
},isSubClassOf:function(s,t){if(!s){return false;
}
if(s==t){return true;
}
if(s.prototype instanceof t){return true;
}return false;
},getPropertyDefinition:qx.Bootstrap.getPropertyDefinition,getProperties:function(O){var P=[];

while(O){if(O.$$properties){P.push.apply(P,qx.Bootstrap.getKeys(O.$$properties));
}O=O.superclass;
}return P;
},getByProperty:function(g,name){while(g){if(g.$$properties&&g.$$properties[name]){return g;
}g=g.superclass;
}return null;
},hasProperty:qx.Bootstrap.hasProperty,getEventType:qx.Bootstrap.getEventType,supportsEvent:qx.Bootstrap.supportsEvent,hasOwnMixin:function(cc,cd){return cc.$$includes&&cc.$$includes.indexOf(cd)!==-1;
},getByMixin:function(h,j){var k,i,l;

while(h){if(h.$$includes){k=h.$$flatIncludes;

for(i=0,l=k.length;i<l;i++){if(k[i]===j){return h;
}}}h=h.superclass;
}return null;
},getMixins:qx.Bootstrap.getMixins,hasMixin:function(v,w){return !!this.getByMixin(v,w);
},hasOwnInterface:function(ch,ci){return ch.$$implements&&ch.$$implements.indexOf(ci)!==-1;
},getByInterface:qx.Bootstrap.getByInterface,getInterfaces:function(bR){var bS=[];

while(bR){if(bR.$$implements){bS.push.apply(bS,bR.$$flatImplements);
}bR=bR.superclass;
}return bS;
},hasInterface:qx.Bootstrap.hasInterface,implementsInterface:function(ce,cf){var cg=ce.constructor;

if(this.hasInterface(cg,cf)){return true;
}
try{qx.Interface.assertObject(ce,cf);
return true;
}catch(H){}
try{qx.Interface.assert(cg,cf,false);
return true;
}catch(u){}return false;
},getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;
this.$$instance=new this;
delete this.$$allowconstruct;
}return this.$$instance;
},genericToString:function(){return bt+this.classname+bs;
},$$registry:qx.Bootstrap.$$registry,__bW:null,__bX:null,__bY:function(){},__ca:function(){},__cb:function(name,x,y,z,A,B,C){var F;

if(!y&&true){F=z||{};
qx.Bootstrap.setDisplayNames(F,name);
}else{var F={};

if(y){if(!A){A=this.__ck();
}
if(this.__cm(y,C)){F=this.__cn(A,name,x);
}else{F=A;
}if(x===bo){F.getInstance=this.getInstance;
}qx.Bootstrap.setDisplayName(A,name,bp);
}if(z){qx.Bootstrap.setDisplayNames(z,name);
var G;

for(var i=0,a=qx.Bootstrap.getKeys(z),l=a.length;i<l;i++){G=a[i];
var D=z[G];
{F[G]=D;
};
}}}var E=qx.Bootstrap.createNamespace(name,F);
F.name=F.classname=name;
F.basename=E;
F.$$type=bl;

if(x){F.$$classtype=x;
}if(!F.hasOwnProperty(bq)){F.toString=this.genericToString;
}
if(y){qx.Bootstrap.extendClass(F,A,y,name,E);
if(B){{};
F.$$destructor=B;
qx.Bootstrap.setDisplayName(B,name,bk);
}}this.$$registry[name]=F;
return F;
},__cc:function(bK,bL,bM){var bN,bN;
{};

if(bK.$$events){for(var bN in bL){bK.$$events[bN]=bL[bN];
}}else{bK.$$events=bL;
}},__cd:function(bW,bX,bY){var ca;

if(bY===undefined){bY=false;
}var cb=bW.prototype;

for(var name in bX){ca=bX[name];
{};
ca.name=name;
if(!ca.refine){if(bW.$$properties===undefined){bW.$$properties={};
}bW.$$properties[name]=ca;
}if(ca.init!==undefined){bW.prototype[br+name]=ca.init;
}if(ca.event!==undefined){var event={};
event[ca.event]=bg;
this.__cc(bW,event,bY);
}if(ca.inheritable){qx.core.Property.$$inheritable[name]=true;

if(!cb.$$refreshInheritables){qx.core.Property.attachRefreshInheritables(bW);
}}
if(!ca.refine){qx.core.Property.attachMethods(bW,name,ca);
}}},__ce:null,__cf:function(by,bz,bA,bB,bC){var bD=by.prototype;
var bF,bE;
qx.Bootstrap.setDisplayNames(bz,by.classname+bn);

for(var i=0,a=qx.Bootstrap.getKeys(bz),l=a.length;i<l;i++){bF=a[i];
bE=bz[bF];
{};
if(bB!==false&&bE instanceof Function&&bE.$$type==null){if(bC==true){bE=this.__cg(bE,bD[bF]);
}else{if(bD[bF]){bE.base=bD[bF];
}bE.self=by;
}{};
}bD[bF]=bE;
}},__cg:function(be,bf){if(bf){return function(){var bJ=be.base;
be.base=bf;
var bI=be.apply(this,arguments);
be.base=bJ;
return bI;
};
}else{return be;
}},__ch:function(bT,bU){{};
var bV=qx.Interface.flatten([bU]);

if(bT.$$implements){bT.$$implements.push(bU);
bT.$$flatImplements.push.apply(bT.$$flatImplements,bV);
}else{bT.$$implements=[bU];
bT.$$flatImplements=bV;
}},__ci:function(T){var name=T.classname;
var U=this.__cn(T,name,T.$$classtype);
for(var i=0,a=qx.Bootstrap.getKeys(T),l=a.length;i<l;i++){V=a[i];
U[V]=T[V];
}U.prototype=T.prototype;
var X=T.prototype;

for(var i=0,a=qx.Bootstrap.getKeys(X),l=a.length;i<l;i++){V=a[i];
var Y=X[V];
if(Y&&Y.self==T){Y.self=U;
}}for(var V in this.$$registry){var W=this.$$registry[V];

if(!W){continue;
}
if(W.base==T){W.base=U;
}
if(W.superclass==T){W.superclass=U;
}
if(W.$$original){if(W.$$original.base==T){W.$$original.base=U;
}
if(W.$$original.superclass==T){W.$$original.superclass=U;
}}}qx.Bootstrap.createNamespace(name,U);
this.$$registry[name]=U;
return U;
},__cj:function(m,n,o){{};

if(this.hasMixin(m,n)){return;
}var r=m.$$original;

if(n.$$constructor&&!r){m=this.__ci(m);
}var q=qx.Mixin.flatten([n]);
var p;

for(var i=0,l=q.length;i<l;i++){p=q[i];
if(p.$$events){this.__cc(m,p.$$events,o);
}if(p.$$properties){this.__cd(m,p.$$properties,o);
}if(p.$$members){this.__cf(m,p.$$members,o,o,o);
}}if(m.$$includes){m.$$includes.push(n);
m.$$flatIncludes.push.apply(m.$$flatIncludes,q);
}else{m.$$includes=[n];
m.$$flatIncludes=q;
}},__ck:function(){function cj(){cj.base.apply(this,arguments);
}return cj;
},__cl:function(){return function(){};
},__cm:function(I,J){{};
if(I&&I.$$includes){var K=I.$$flatIncludes;

for(var i=0,l=K.length;i<l;i++){if(K[i].$$constructor){return true;
}}}if(J){var L=qx.Mixin.flatten(J);

for(var i=0,l=L.length;i<l;i++){if(L[i].$$constructor){return true;
}}}return false;
},__cn:function(ba,name,bb){var bc;
var bd=function(){var f=bd;
{};
var e=f.$$original.apply(this,arguments);
if(f.$$includes){var d=f.$$flatIncludes;

for(var i=0,l=d.length;i<l;i++){if(d[i].$$constructor){d[i].$$constructor.apply(this,arguments);
}}}{};
return e;
};
{};
bd.$$original=ba;
ba.wrapper=bd;
return bd;
}},defer:function(){var Q,R,S;
{};
}});
})();
(function(){var s="gecko",r="1.9.0.0",q=".",p="[object Opera]",o="function",n="[^\\.0-9]",m="525.26",l="",k="mshtml",j="AppleWebKit/",d="unknown",i="9.6.0",g="4.0",c="Gecko",b="opera",f="webkit",e="0.0.0",h="8.0",a="qx.bom.client.Engine";
qx.Bootstrap.define(a,{statics:{NAME:"",FULLVERSION:"0.0.0",VERSION:0.0,OPERA:false,WEBKIT:false,GECKO:false,MSHTML:false,UNKNOWN_ENGINE:false,UNKNOWN_VERSION:false,DOCUMENT_MODE:null,__en:function(){var u=d;
var y=e;
var x=window.navigator.userAgent;
var A=false;
var w=false;

if(window.opera&&Object.prototype.toString.call(window.opera)==p){u=b;
this.OPERA=true;
if(/Opera[\s\/]([0-9]+)\.([0-9])([0-9]*)/.test(x)){y=RegExp.$1+q+RegExp.$2;

if(RegExp.$3!=l){y+=q+RegExp.$3;
}}else{w=true;
y=i;
}}else if(window.navigator.userAgent.indexOf(j)!=-1){u=f;
this.WEBKIT=true;

if(/AppleWebKit\/([^ ]+)/.test(x)){y=RegExp.$1;
var z=RegExp(n).exec(y);

if(z){y=y.slice(0,z.index);
}}else{w=true;
y=m;
}}else if(window.controllers&&window.navigator.product===c){u=s;
this.GECKO=true;
if(/rv\:([^\);]+)(\)|;)/.test(x)){y=RegExp.$1;
}else{w=true;
y=r;
}}else if(window.navigator.cpuClass&&/MSIE\s+([^\);]+)(\)|;)/.test(x)){u=k;
y=RegExp.$1;

if(document.documentMode){this.DOCUMENT_MODE=document.documentMode;
}if(y<8&&/Trident\/([^\);]+)(\)|;)/.test(x)){if(RegExp.$1===g){y=h;
}}this.MSHTML=true;
}else{var v=window.qxFail;

if(v&&typeof v===o){var u=v();

if(u.NAME&&u.FULLVERSION){u=u.NAME;
this[u.toUpperCase()]=true;
y=u.FULLVERSION;
}}else{A=true;
w=true;
y=r;
u=s;
this.GECKO=true;
qx.Bootstrap.warn("Unsupported client: "+x+"! Assumed gecko version 1.9.0.0 (Firefox 3.0).");
}}this.UNKNOWN_ENGINE=A;
this.UNKNOWN_VERSION=w;
this.NAME=u;
this.FULLVERSION=y;
this.VERSION=parseFloat(y);
}},defer:function(t){t.__en();
}});
})();
(function(){var u="on",t="off",s="|",r="default",q="object",p="&",o="qx.aspects",n="$",m="qx.allowUrlVariants",k="qx.debug",d="qx.client",j="qx.dynlocale",g="webkit",c="qxvariant",b="opera",f=":",e="qx.core.Variant",h="mshtml",a="gecko";
qx.Bootstrap.define(e,{statics:{__ku:{},__kv:{},compilerIsSet:function(){return true;
},define:function(K,L,M){{};

if(!this.__ku[K]){this.__ku[K]={};
}else{}this.__ku[K].allowedValues=L;
this.__ku[K].defaultValue=M;
},get:function(D){var E=this.__ku[D];
{};

if(E.value!==undefined){return E.value;
}return E.defaultValue;
},__kw:function(){if(window.qxvariants){for(var B in qxvariants){{};

if(!this.__ku[B]){this.__ku[B]={};
}this.__ku[B].value=qxvariants[B];
}window.qxvariants=undefined;

try{delete window.qxvariants;
}catch(C){}this.__kx(this.__ku);
}},__kx:function(){if(qx.core.Setting.get(m)!=true){return;
}var O=document.location.search.slice(1).split(p);

for(var i=0;i<O.length;i++){var P=O[i].split(f);

if(P.length!=3||P[0]!=c){continue;
}var Q=P[1];

if(!this.__ku[Q]){this.__ku[Q]={};
}this.__ku[Q].value=decodeURIComponent(P[2]);
}},select:function(y,z){{};

for(var A in z){if(this.isSet(y,A)){return z[A];
}}
if(z[r]!==undefined){return z[r];
}{};
},isSet:function(F,G){var H=F+n+G;

if(this.__kv[H]!==undefined){return this.__kv[H];
}var J=false;
if(G.indexOf(s)<0){J=this.get(F)===G;
}else{var I=G.split(s);

for(var i=0,l=I.length;i<l;i++){if(this.get(F)===I[i]){J=true;
break;
}}}this.__kv[H]=J;
return J;
},__ky:function(v){return typeof v===q&&v!==null&&v instanceof Array;
},__kz:function(v){return typeof v===q&&v!==null&&!(v instanceof Array);
},__kA:function(w,x){for(var i=0,l=w.length;i<l;i++){if(w[i]==x){return true;
}}return false;
}},defer:function(N){N.define(d,[a,h,b,g],qx.bom.client.Engine.NAME);
N.define(k,[u,t],u);
N.define(o,[u,t],t);
N.define(j,[u,t],u);
N.__kw();
}});
})();
(function(){var i="qx.client",h="on",g="function",f="mousedown",d="qx.bom.Event",c="return;",b="mouseover",a="HTMLEvents";
qx.Class.define(d,{statics:{addNativeListener:qx.core.Variant.select(i,{"mshtml":function(A,B,C){A.attachEvent(h+B,C);
},"default":function(x,y,z){x.addEventListener(y,z,false);
}}),removeNativeListener:qx.core.Variant.select(i,{"mshtml":function(j,k,l){try{j.detachEvent(h+k,l);
}catch(e){if(e.number!==-2146828218){throw e;
}}},"default":function(D,E,F){D.removeEventListener(E,F,false);
}}),getTarget:function(e){return e.target||e.srcElement;
},getRelatedTarget:qx.core.Variant.select(i,{"mshtml":function(e){if(e.type===b){return e.fromElement;
}else{return e.toElement;
}},"gecko":function(e){try{e.relatedTarget&&e.relatedTarget.nodeType;
}catch(e){return null;
}return e.relatedTarget;
},"default":function(e){return e.relatedTarget;
}}),preventDefault:qx.core.Variant.select(i,{"gecko":function(e){if(qx.bom.client.Engine.VERSION>=1.9&&e.type==f&&e.button==2){return;
}e.preventDefault();
if(qx.bom.client.Engine.VERSION<1.9){try{e.keyCode=0;
}catch(s){}}},"mshtml":function(e){try{e.keyCode=0;
}catch(m){}e.returnValue=false;
},"default":function(e){e.preventDefault();
}}),stopPropagation:function(e){if(e.stopPropagation){e.stopPropagation();
}e.cancelBubble=true;
},fire:function(p,q){if(document.createEventObject){var r=document.createEventObject();
return p.fireEvent(h+q,r);
}else{var r=document.createEvent(a);
r.initEvent(q,true,true);
return !p.dispatchEvent(r);
}},supportsEvent:qx.core.Variant.select(i,{"webkit":function(n,o){return n.hasOwnProperty(h+o);
},"default":function(t,u){var v=h+u;
var w=(v in t);

if(!w){w=typeof t[v]==g;

if(!w&&t.setAttribute){t.setAttribute(v,c);
w=typeof t[v]==g;
t.removeAttribute(v);
}}return w;
}})}});
})();
(function(){var A="|bubble",z="|capture",y="|",x="",w="_",v="unload",u="UNKNOWN_",t="__fj",s="c",r="__fi",o="DOM_",q="WIN_",p="capture",n="qx.event.Manager",m="QX_";
qx.Class.define(n,{extend:Object,construct:function(bV,bW){this.__fe=bV;
this.__ff=qx.core.ObjectRegistry.toHashCode(bV);
this.__fg=bW;
if(bV.qx!==qx){var self=this;
qx.bom.Event.addNativeListener(bV,v,qx.event.GlobalError.observeMethod(function(){qx.bom.Event.removeNativeListener(bV,v,arguments.callee);
self.dispose();
}));
}this.__fh={};
this.__fi={};
this.__fj={};
this.__fk={};
},statics:{__fl:0,getNextUniqueId:function(){return (this.__fl++)+x;
}},members:{__fg:null,__fh:null,__fj:null,__fm:null,__fi:null,__fk:null,__fe:null,__ff:null,getWindow:function(){return this.__fe;
},getWindowId:function(){return this.__ff;
},getHandler:function(bf){var bg=this.__fi[bf.classname];

if(bg){return bg;
}return this.__fi[bf.classname]=new bf(this);
},getDispatcher:function(V){var W=this.__fj[V.classname];

if(W){return W;
}return this.__fj[V.classname]=new V(this,this.__fg);
},getListeners:function(F,G,H){var I=F.$$hash||qx.core.ObjectRegistry.toHashCode(F);
var K=this.__fh[I];

if(!K){return null;
}var L=G+(H?z:A);
var J=K[L];
return J?J.concat():null;
},serializeListeners:function(bL){var bS=bL.$$hash||qx.core.ObjectRegistry.toHashCode(bL);
var bU=this.__fh[bS];
var bQ=[];

if(bU){var bO,bT,bM,bP,bR;

for(var bN in bU){bO=bN.indexOf(y);
bT=bN.substring(0,bO);
bM=bN.charAt(bO+1)==s;
bP=bU[bN];

for(var i=0,l=bP.length;i<l;i++){bR=bP[i];
bQ.push({self:bR.context,handler:bR.handler,type:bT,capture:bM});
}}}return bQ;
},toggleAttachedEvents:function(M,N){var S=M.$$hash||qx.core.ObjectRegistry.toHashCode(M);
var U=this.__fh[S];

if(U){var P,T,O,Q;

for(var R in U){P=R.indexOf(y);
T=R.substring(0,P);
O=R.charCodeAt(P+1)===99;
Q=U[R];

if(N){this.__fn(M,T,O);
}else{this.__fo(M,T,O);
}}}},hasListener:function(bX,bY,ca){{};
var cb=bX.$$hash||qx.core.ObjectRegistry.toHashCode(bX);
var cd=this.__fh[cb];

if(!cd){return false;
}var ce=bY+(ca?z:A);
var cc=cd[ce];
return cc&&cc.length>0;
},importListeners:function(cf,cg){{};
var cm=cf.$$hash||qx.core.ObjectRegistry.toHashCode(cf);
var cn=this.__fh[cm]={};
var cj=qx.event.Manager;

for(var ch in cg){var ck=cg[ch];
var cl=ck.type+(ck.capture?z:A);
var ci=cn[cl];

if(!ci){ci=cn[cl]=[];
this.__fn(cf,ck.type,ck.capture);
}ci.push({handler:ck.listener,context:ck.self,unique:ck.unique||(cj.__fl++)+x});
}},addListener:function(bh,bi,bj,self,bk){var bo;
{};
var bp=bh.$$hash||qx.core.ObjectRegistry.toHashCode(bh);
var br=this.__fh[bp];

if(!br){br=this.__fh[bp]={};
}var bn=bi+(bk?z:A);
var bm=br[bn];

if(!bm){bm=br[bn]=[];
}if(bm.length===0){this.__fn(bh,bi,bk);
}var bq=(qx.event.Manager.__fl++)+x;
var bl={handler:bj,context:self,unique:bq};
bm.push(bl);
return bn+y+bq;
},findHandler:function(co,cp){var cz=false,cs=false,cA=false;
var cy;

if(co.nodeType===1){cz=true;
cy=o+co.tagName.toLowerCase()+w+cp;
}else if(co==this.__fe){cs=true;
cy=q+cp;
}else if(co.classname){cA=true;
cy=m+co.classname+w+cp;
}else{cy=u+co+w+cp;
}var cu=this.__fk;

if(cu[cy]){return cu[cy];
}var cx=this.__fg.getHandlers();
var ct=qx.event.IEventHandler;
var cv,cw,cr,cq;

for(var i=0,l=cx.length;i<l;i++){cv=cx[i];
cr=cv.SUPPORTED_TYPES;

if(cr&&!cr[cp]){continue;
}cq=cv.TARGET_CHECK;

if(cq){if(!cz&&cq===ct.TARGET_DOMNODE){continue;
}else if(!cs&&cq===ct.TARGET_WINDOW){continue;
}else if(!cA&&cq===ct.TARGET_OBJECT){continue;
}}cw=this.getHandler(cx[i]);

if(cv.IGNORE_CAN_HANDLE||cw.canHandleEvent(co,cp)){cu[cy]=cw;
return cw;
}}return null;
},__fn:function(B,C,D){var E=this.findHandler(B,C);

if(E){E.registerEvent(B,C,D);
return;
}{};
},removeListener:function(a,b,c,self,d){var h;
{};
var j=a.$$hash||qx.core.ObjectRegistry.toHashCode(a);
var k=this.__fh[j];

if(!k){return false;
}var e=b+(d?z:A);
var f=k[e];

if(!f){return false;
}var g;

for(var i=0,l=f.length;i<l;i++){g=f[i];

if(g.handler===c&&g.context===self){qx.lang.Array.removeAt(f,i);

if(f.length==0){this.__fo(a,b,d);
}return true;
}}return false;
},removeListenerById:function(bs,bt){var bz;
{};
var bx=bt.split(y);
var bC=bx[0];
var bu=bx[1].charCodeAt(0)==99;
var bB=bx[2];
var bA=bs.$$hash||qx.core.ObjectRegistry.toHashCode(bs);
var bD=this.__fh[bA];

if(!bD){return false;
}var by=bC+(bu?z:A);
var bw=bD[by];

if(!bw){return false;
}var bv;

for(var i=0,l=bw.length;i<l;i++){bv=bw[i];

if(bv.unique===bB){qx.lang.Array.removeAt(bw,i);

if(bw.length==0){this.__fo(bs,bC,bu);
}return true;
}}return false;
},removeAllListeners:function(X){var bc=X.$$hash||qx.core.ObjectRegistry.toHashCode(X);
var be=this.__fh[bc];

if(!be){return false;
}var ba,bd,Y;

for(var bb in be){if(be[bb].length>0){ba=bb.split(y);
bd=ba[0];
Y=ba[1]===p;
this.__fo(X,bd,Y);
}}delete this.__fh[bc];
return true;
},deleteAllListeners:function(cF){delete this.__fh[cF];
},__fo:function(cB,cC,cD){var cE=this.findHandler(cB,cC);

if(cE){cE.unregisterEvent(cB,cC,cD);
return;
}{};
},dispatchEvent:function(bE,event){var bJ;
{};
var bK=event.getType();

if(!event.getBubbles()&&!this.hasListener(bE,bK)){qx.event.Pool.getInstance().poolObject(event);
return true;
}
if(!event.getTarget()){event.setTarget(bE);
}var bI=this.__fg.getDispatchers();
var bH;
var bG=false;

for(var i=0,l=bI.length;i<l;i++){bH=this.getDispatcher(bI[i]);
if(bH.canDispatchEvent(bE,event,bK)){bH.dispatchEvent(bE,event,bK);
bG=true;
break;
}}
if(!bG){{};
return true;
}var bF=event.getDefaultPrevented();
qx.event.Pool.getInstance().poolObject(event);
return !bF;
},dispose:function(){this.__fg.removeManager(this);
qx.util.DisposeUtil.disposeMap(this,r);
qx.util.DisposeUtil.disposeMap(this,t);
this.__fh=this.__fe=this.__fm=null;
this.__fg=this.__fk=null;
}}});
})();
(function(){var d="qx.dom.Node",c="qx.client",b="";
qx.Class.define(d,{statics:{ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12,getDocument:function(s){return s.nodeType===
this.DOCUMENT?s:
s.ownerDocument||s.document;
},getWindow:qx.core.Variant.select(c,{"mshtml":function(p){if(p.nodeType==null){return p;
}if(p.nodeType!==this.DOCUMENT){p=p.ownerDocument;
}return p.parentWindow;
},"default":function(l){if(l.nodeType==null){return l;
}if(l.nodeType!==this.DOCUMENT){l=l.ownerDocument;
}return l.defaultView;
}}),getDocumentElement:function(o){return this.getDocument(o).documentElement;
},getBodyElement:function(q){return this.getDocument(q).body;
},isNode:function(n){return !!(n&&n.nodeType!=null);
},isElement:function(h){return !!(h&&h.nodeType===this.ELEMENT);
},isDocument:function(e){return !!(e&&e.nodeType===this.DOCUMENT);
},isText:function(m){return !!(m&&m.nodeType===this.TEXT);
},isWindow:function(r){return !!(r&&r.history&&r.location&&r.document);
},isNodeName:function(f,g){if(!g||!f||!f.nodeName){return false;
}return g.toLowerCase()==qx.dom.Node.getName(f);
},getName:function(t){if(!t||!t.nodeName){return null;
}return t.nodeName.toLowerCase();
},getText:function(j){if(!j||!j.nodeType){return null;
}
switch(j.nodeType){case 1:var i,a=[],k=j.childNodes,length=k.length;

for(i=0;i<length;i++){a[i]=this.getText(k[i]);
}return a.join(b);
case 2:return j.nodeValue;
break;
case 3:return j.nodeValue;
break;
}return null;
}}});
})();
(function(){var s="mshtml",r="qx.client",q="[object Array]",p="qx.lang.Array",o="qx",n="number",m="string";
qx.Class.define(p,{statics:{toArray:function(A,B){return this.cast(A,Array,B);
},cast:function(c,d,e){if(c.constructor===d){return c;
}
if(qx.Class.hasInterface(c,qx.data.IListData)){var c=c.toArray();
}var f=new d;
if(qx.core.Variant.isSet(r,s)){if(c.item){for(var i=e||0,l=c.length;i<l;i++){f.push(c[i]);
}return f;
}}if(Object.prototype.toString.call(c)===q&&e==null){f.push.apply(f,c);
}else{f.push.apply(f,Array.prototype.slice.call(c,e||0));
}return f;
},fromArguments:function(bh,bi){return Array.prototype.slice.call(bh,bi||0);
},fromCollection:function(K){if(qx.core.Variant.isSet(r,s)){if(K.item){var L=[];

for(var i=0,l=K.length;i<l;i++){L[i]=K[i];
}return L;
}}return Array.prototype.slice.call(K,0);
},fromShortHand:function(M){var O=M.length;
var N=qx.lang.Array.clone(M);
switch(O){case 1:N[1]=N[2]=N[3]=N[0];
break;
case 2:N[2]=N[0];
case 3:N[3]=N[1];
}return N;
},clone:function(bp){return bp.concat();
},insertAt:function(E,F,i){E.splice(i,0,F);
return E;
},insertBefore:function(bj,bk,bl){var i=bj.indexOf(bl);

if(i==-1){bj.push(bk);
}else{bj.splice(i,0,bk);
}return bj;
},insertAfter:function(H,I,J){var i=H.indexOf(J);

if(i==-1||i==(H.length-1)){H.push(I);
}else{H.splice(i+1,0,I);
}return H;
},removeAt:function(G,i){return G.splice(i,1)[0];
},removeAll:function(P){P.length=0;
return this;
},append:function(bn,bo){{};
Array.prototype.push.apply(bn,bo);
return bn;
},exclude:function(g,h){{};

for(var i=0,k=h.length,j;i<k;i++){j=g.indexOf(h[i]);

if(j!=-1){g.splice(j,1);
}}return g;
},remove:function(a,b){var i=a.indexOf(b);

if(i!=-1){a.splice(i,1);
return b;
}},contains:function(w,x){return w.indexOf(x)!==-1;
},equals:function(C,D){var length=C.length;

if(length!==D.length){return false;
}
for(var i=0;i<length;i++){if(C[i]!==D[i]){return false;
}}return true;
},sum:function(y){var z=0;

for(var i=0,l=y.length;i<l;i++){z+=y[i];
}return z;
},max:function(Q){{};
var i,S=Q.length,R=Q[0];

for(i=1;i<S;i++){if(Q[i]>R){R=Q[i];
}}return R===undefined?null:R;
},min:function(t){{};
var i,v=t.length,u=t[0];

for(i=1;i<v;i++){if(t[i]<u){u=t[i];
}}return u===undefined?null:u;
},unique:function(T){var be=[],V={},Y={},bb={};
var ba,U=0;
var bf=o+qx.lang.Date.now();
var W=false,bd=false,bg=false;
for(var i=0,bc=T.length;i<bc;i++){ba=T[i];
if(ba===null){if(!W){W=true;
be.push(ba);
}}else if(ba===undefined){}else if(ba===false){if(!bd){bd=true;
be.push(ba);
}}else if(ba===true){if(!bg){bg=true;
be.push(ba);
}}else if(typeof ba===m){if(!V[ba]){V[ba]=1;
be.push(ba);
}}else if(typeof ba===n){if(!Y[ba]){Y[ba]=1;
be.push(ba);
}}else{X=ba[bf];

if(X==null){X=ba[bf]=U++;
}
if(!bb[X]){bb[X]=ba;
be.push(ba);
}}}for(var X in bb){try{delete bb[X][bf];
}catch(bq){try{bb[X][bf]=null;
}catch(bm){throw new Error("Cannot clean-up map entry doneObjects["+X+"]["+bf+"]");
}}}return be;
}}});
})();
(function(){var B="()",A=".",z=".prototype.",y='anonymous()',x="qx.lang.Function",w=".constructor()";
qx.Class.define(x,{statics:{getCaller:function(s){return s.caller?s.caller.callee:s.callee.caller;
},getName:function(E){if(E.displayName){return E.displayName;
}
if(E.$$original||E.wrapper||E.classname){return E.classname+w;
}
if(E.$$mixin){for(var G in E.$$mixin.$$members){if(E.$$mixin.$$members[G]==E){return E.$$mixin.name+z+G+B;
}}for(var G in E.$$mixin){if(E.$$mixin[G]==E){return E.$$mixin.name+A+G+B;
}}}
if(E.self){var H=E.self.constructor;

if(H){for(var G in H.prototype){if(H.prototype[G]==E){return H.classname+z+G+B;
}}for(var G in H){if(H[G]==E){return H.classname+A+G+B;
}}}}var F=E.toString().match(/function\s*(\w*)\s*\(.*/);

if(F&&F.length>=1&&F[1]){return F[1]+B;
}return y;
},globalEval:function(d){if(window.execScript){return window.execScript(d);
}else{return eval.call(window,d);
}},empty:function(){},returnTrue:function(){return true;
},returnFalse:function(){return false;
},returnNull:function(){return null;
},returnThis:function(){return this;
},returnZero:function(){return 0;
},create:function(n,o){{};
if(!o){return n;
}if(!(o.self||o.args||o.delay!=null||o.periodical!=null||o.attempt)){return n;
}return function(event){{};
var f=qx.lang.Array.fromArguments(arguments);
if(o.args){f=o.args.concat(f);
}
if(o.delay||o.periodical){var e=qx.event.GlobalError.observeMethod(function(){return n.apply(o.self||this,f);
});

if(o.delay){return window.setTimeout(e,o.delay);
}
if(o.periodical){return window.setInterval(e,o.periodical);
}}else if(o.attempt){var g=false;

try{g=n.apply(o.self||this,f);
}catch(j){}return g;
}else{return n.apply(o.self||this,f);
}};
},bind:function(b,self,c){return this.create(b,{self:self,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null});
},curry:function(h,i){return this.create(h,{args:arguments.length>1?qx.lang.Array.fromArguments(arguments,1):null});
},listener:function(k,self,l){if(arguments.length<3){return function(event){return k.call(self||this,event||window.event);
};
}else{var m=qx.lang.Array.fromArguments(arguments,2);
return function(event){var a=[event||window.event];
a.push.apply(a,m);
k.apply(self||this,a);
};
}},attempt:function(C,self,D){return this.create(C,{self:self,attempt:true,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null})();
},delay:function(p,q,self,r){return this.create(p,{delay:q,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
},periodical:function(t,u,self,v){return this.create(t,{periodical:u,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
}}});
})();
(function(){var g="qx.event.Registration";
qx.Class.define(g,{statics:{__eR:{},getManager:function(K){if(K==null){{};
K=window;
}else if(K.nodeType){K=qx.dom.Node.getWindow(K);
}else if(!qx.dom.Node.isWindow(K)){K=window;
}var M=K.$$hash||qx.core.ObjectRegistry.toHashCode(K);
var L=this.__eR[M];

if(!L){L=new qx.event.Manager(K,this);
this.__eR[M]=L;
}return L;
},removeManager:function(v){var w=v.getWindowId();
delete this.__eR[w];
},addListener:function(c,d,e,self,f){return this.getManager(c).addListener(c,d,e,self,f);
},removeListener:function(F,G,H,self,I){return this.getManager(F).removeListener(F,G,H,self,I);
},removeListenerById:function(z,A){return this.getManager(z).removeListenerById(z,A);
},removeAllListeners:function(l){return this.getManager(l).removeAllListeners(l);
},deleteAllListeners:function(t){var u=t.$$hash;

if(u){this.getManager(t).deleteAllListeners(u);
}},hasListener:function(C,D,E){return this.getManager(C).hasListener(C,D,E);
},serializeListeners:function(s){return this.getManager(s).serializeListeners(s);
},createEvent:function(h,i,j){{};
if(i==null){i=qx.event.type.Event;
}var k=qx.event.Pool.getInstance().getObject(i);
j?k.init.apply(k,j):k.init();
if(h){k.setType(h);
}return k;
},dispatchEvent:function(B,event){return this.getManager(B).dispatchEvent(B,event);
},fireEvent:function(N,O,P,Q){var R;
{};
var S=this.createEvent(O,P||null,Q);
return this.getManager(N).dispatchEvent(N,S);
},fireNonBubblingEvent:function(m,n,o,p){{};
var q=this.getManager(m);

if(!q.hasListener(m,n,false)){return true;
}var r=this.createEvent(n,o||null,p);
return q.dispatchEvent(m,r);
},PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__eS:[],addHandler:function(J){{};
this.__eS.push(J);
this.__eS.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getHandlers:function(){return this.__eS;
},__eT:[],addDispatcher:function(x,y){{};
this.__eT.push(x);
this.__eT.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getDispatchers:function(){return this.__eT;
}}});
})();
(function(){var e="$$hash",d="",c="qx.core.ObjectRegistry";
qx.Class.define(c,{statics:{inShutDown:false,__hI:{},__hJ:0,__hK:[],register:function(k){var o=this.__hI;

if(!o){return;
}var n=k.$$hash;

if(n==null){var m=this.__hK;

if(m.length>0){n=m.pop();
}else{n=(this.__hJ++)+d;
}k.$$hash=n;
}{};
o[n]=k;
},unregister:function(g){var h=g.$$hash;

if(h==null){return;
}var j=this.__hI;

if(j&&j[h]){delete j[h];
this.__hK.push(h);
}try{delete g.$$hash;
}catch(f){if(g.removeAttribute){g.removeAttribute(e);
}}},toHashCode:function(r){{};
var t=r.$$hash;

if(t!=null){return t;
}var s=this.__hK;

if(s.length>0){t=s.pop();
}else{t=(this.__hJ++)+d;
}return r.$$hash=t;
},clearHashCode:function(u){{};
var v=u.$$hash;

if(v!=null){this.__hK.push(v);
try{delete u.$$hash;
}catch(p){if(u.removeAttribute){u.removeAttribute(e);
}}}},fromHashCode:function(A){return this.__hI[A]||null;
},shutdown:function(){this.inShutDown=true;
var x=this.__hI;
var z=[];

for(var y in x){z.push(y);
}z.sort(function(a,b){return parseInt(b)-parseInt(a);
});
var w,i=0,l=z.length;

while(true){try{for(;i<l;i++){y=z[i];
w=x[y];

if(w&&w.dispose){w.dispose();
}}}catch(q){qx.Bootstrap.error(this,"Could not dispose object "+w.toString()+": "+q);

if(i!==l){i++;
continue;
}}break;
}qx.Bootstrap.debug(this,"Disposed "+l+" objects");
delete this.__hI;
},getRegistry:function(){return this.__hI;
}}});
})();
(function(){var a="qx.data.MBinding";
qx.Mixin.define(a,{members:{bind:function(c,d,e,f){return qx.data.SingleValueBinding.bind(this,c,d,e,f);
},removeBinding:function(b){qx.data.SingleValueBinding.removeBindingFromObject(this,b);
},removeAllBindings:function(){qx.data.SingleValueBinding.removeAllBindingsForObject(this);
},getBindings:function(){return qx.data.SingleValueBinding.getAllBindingsForObject(this);
}}});
})();
(function(){var k=":",j="qx.client",h="anonymous",g="...",f="qx.dev.StackTrace",e="",d="\n",c="/source/class/",b=".";
qx.Class.define(f,{statics:{getStackTrace:qx.core.Variant.select(j,{"gecko":function(){try{throw new Error();
}catch(l){var O=this.getStackTraceFromError(l);
qx.lang.Array.removeAt(O,0);
var M=this.getStackTraceFromCaller(arguments);
var K=M.length>O.length?M:O;

for(var i=0;i<Math.min(M.length,O.length);i++){var L=M[i];

if(L.indexOf(h)>=0){continue;
}var S=L.split(k);

if(S.length!=2){continue;
}var Q=S[0];
var J=S[1];
var I=O[i];
var T=I.split(k);
var P=T[0];
var H=T[1];

if(qx.Class.getByName(P)){var N=P;
}else{N=Q;
}var R=N+k;

if(J){R+=J+k;
}R+=H;
K[i]=R;
}return K;
}},"mshtml|webkit":function(){return this.getStackTraceFromCaller(arguments);
},"opera":function(){var x;

try{x.bar();
}catch(U){var y=this.getStackTraceFromError(U);
qx.lang.Array.removeAt(y,0);
return y;
}return [];
}}),getStackTraceFromCaller:qx.core.Variant.select(j,{"opera":function(w){return [];
},"default":function(q){var v=[];
var u=qx.lang.Function.getCaller(q);
var r={};

while(u){var s=qx.lang.Function.getName(u);
v.push(s);

try{u=u.caller;
}catch(G){break;
}
if(!u){break;
}var t=qx.core.ObjectRegistry.toHashCode(u);

if(r[t]){v.push(g);
break;
}r[t]=u;
}return v;
}}),getStackTraceFromError:qx.core.Variant.select(j,{"gecko":function(z){if(!z.stack){return [];
}var F=/@(.+):(\d+)$/gm;
var A;
var B=[];

while((A=F.exec(z.stack))!=null){var C=A[1];
var E=A[2];
var D=this.__ko(C);
B.push(D+k+E);
}return B;
},"webkit":function(a){if(a.sourceURL&&a.line){return [this.__ko(a.sourceURL)+k+a.line];
}else{return [];
}},"opera":function(V){if(V.message.indexOf("Backtrace:")<0){return [];
}var X=[];
var Y=qx.lang.String.trim(V.message.split("Backtrace:")[1]);
var ba=Y.split(d);

for(var i=0;i<ba.length;i++){var W=ba[i].match(/\s*Line ([0-9]+) of.* (\S.*)/);

if(W&&W.length>=2){var bc=W[1];
var bb=this.__ko(W[2]);
X.push(bb+k+bc);
}}return X;
},"default":function(){return [];
}}),__ko:function(m){var p=c;
var n=m.indexOf(p);
var o=(n==-1)?m:m.substring(n+p.length).replace(/\//g,b).replace(/\.js$/,e);
return o;
}}});
})();
(function(){var a="qx.lang.RingBuffer";
qx.Class.define(a,{extend:Object,construct:function(n){this.setMaxEntries(n||50);
},members:{__hB:0,__hC:0,__hD:false,__hE:0,__hF:null,__hG:null,setMaxEntries:function(m){this.__hG=m;
this.clear();
},getMaxEntries:function(){return this.__hG;
},addEntry:function(g){this.__hF[this.__hB]=g;
this.__hB=this.__hH(this.__hB,1);
var h=this.getMaxEntries();

if(this.__hC<h){this.__hC++;
}if(this.__hD&&(this.__hE<h)){this.__hE++;
}},mark:function(){this.__hD=true;
this.__hE=0;
},clearMark:function(){this.__hD=false;
},getAllEntries:function(){return this.getEntries(this.getMaxEntries(),false);
},getEntries:function(b,c){if(b>this.__hC){b=this.__hC;
}if(c&&this.__hD&&(b>this.__hE)){b=this.__hE;
}
if(b>0){var e=this.__hH(this.__hB,-1);
var d=this.__hH(e,-b+1);
var f;

if(d<=e){f=this.__hF.slice(d,e+1);
}else{f=this.__hF.slice(d,this.__hC).concat(this.__hF.slice(0,e+1));
}}else{f=[];
}return f;
},clear:function(){this.__hF=new Array(this.getMaxEntries());
this.__hC=0;
this.__hE=0;
this.__hB=0;
},__hH:function(i,j){var k=this.getMaxEntries();
var l=(i+j)%k;
if(l<0){l+=k;
}return l;
}}});
})();
(function(){var a="qx.log.appender.RingBuffer";
qx.Class.define(a,{extend:qx.lang.RingBuffer,construct:function(c){this.setMaxMessages(c||50);
},members:{setMaxMessages:function(b){this.setMaxEntries(b);
},getMaxMessages:function(){return this.getMaxEntries();
},process:function(d){this.addEntry(d);
},getAllLogEvents:function(){return this.getAllEntries();
},retrieveLogEvents:function(e,f){return this.getEntries(e,f);
},clearHistory:function(){this.clear();
}}});
})();
(function(){var bd="node",bc="error",bb="...(+",ba="array",Y=")",X="info",W="instance",V="string",U="null",T="class",bz="number",by="stringify",bx="]",bw="date",bv="unknown",bu="function",bt="boolean",bs="debug",br="map",bq="undefined",bk="qx.log.Logger",bl="[",bi="#",bj="warn",bg="document",bh="{...(",be="text[",bf="[...(",bm="\n",bn=")}",bp=")]",bo="object";
qx.Class.define(bk,{statics:{__eU:bs,setLevel:function(E){this.__eU=E;
},getLevel:function(){return this.__eU;
},setTreshold:function(bC){this.__eX.setMaxMessages(bC);
},getTreshold:function(){return this.__eX.getMaxMessages();
},__eV:{},__eW:0,register:function(bO){if(bO.$$id){return;
}var bQ=this.__eW++;
this.__eV[bQ]=bO;
bO.$$id=bQ;
var bP=this.__eY;
var bR=this.__eX.getAllLogEvents();

for(var i=0,l=bR.length;i<l;i++){if(bP[bR[i].level]>=bP[this.__eU]){bO.process(bR[i]);
}}},unregister:function(bA){var bB=bA.$$id;

if(bB==null){return;
}delete this.__eV[bB];
delete bA.$$id;
},debug:function(H,I){qx.log.Logger.__fa(bs,arguments);
},info:function(j,k){qx.log.Logger.__fa(X,arguments);
},warn:function(o,p){qx.log.Logger.__fa(bj,arguments);
},error:function(bD,bE){qx.log.Logger.__fa(bc,arguments);
},trace:function(D){qx.log.Logger.__fa(X,[D,qx.dev.StackTrace.getStackTrace().join(bm)]);
},deprecatedMethodWarning:function(M,N){var O;
{};
},deprecatedClassWarning:function(q,r){var s;
{};
},deprecatedEventWarning:function(J,event,K){var L;
{};
},deprecatedMixinWarning:function(f,g){var h;
{};
},deprecatedConstantWarning:function(P,Q,R){var self,S;
{};
},deprecateMethodOverriding:function(a,b,c,d){var e;
{};
},clear:function(){this.__eX.clearHistory();
},__eX:new qx.log.appender.RingBuffer(50),__eY:{debug:0,info:1,warn:2,error:3},__fa:function(t,u){var z=this.__eY;

if(z[t]<z[this.__eU]){return;
}var w=u.length<2?null:u[0];
var y=w?1:0;
var v=[];

for(var i=y,l=u.length;i<l;i++){v.push(this.__fc(u[i],true));
}var A=new Date;
var B={time:A,offset:A-qx.Bootstrap.LOADSTART,level:t,items:v,win:window};
if(w){if(w instanceof qx.core.Object){B.object=w.$$hash;
}else if(w.$$type){B.clazz=w;
}}this.__eX.process(B);
var C=this.__eV;

for(var x in C){C[x].process(B);
}},__fb:function(F){if(F===undefined){return bq;
}else if(F===null){return U;
}
if(F.$$type){return T;
}var G=typeof F;

if(G===bu||G==V||G===bz||G===bt){return G;
}else if(G===bo){if(F.nodeType){return bd;
}else if(F.classname){return W;
}else if(F instanceof Array){return ba;
}else if(F instanceof Error){return bc;
}else if(F instanceof Date){return bw;
}else{return br;
}}
if(F.toString){return by;
}return bv;
},__fc:function(bF,bG){var bN=this.__fb(bF);
var bJ=bv;
var bI=[];

switch(bN){case U:case bq:bJ=bN;
break;
case V:case bz:case bt:case bw:bJ=bF;
break;
case bd:if(bF.nodeType===9){bJ=bg;
}else if(bF.nodeType===3){bJ=be+bF.nodeValue+bx;
}else if(bF.nodeType===1){bJ=bF.nodeName.toLowerCase();

if(bF.id){bJ+=bi+bF.id;
}}else{bJ=bd;
}break;
case bu:bJ=qx.lang.Function.getName(bF)||bN;
break;
case W:bJ=bF.basename+bl+bF.$$hash+bx;
break;
case T:case by:bJ=bF.toString();
break;
case bc:bI=qx.dev.StackTrace.getStackTraceFromError(bF);
bJ=bF.toString();
break;
case ba:if(bG){bJ=[];

for(var i=0,l=bF.length;i<l;i++){if(bJ.length>20){bJ.push(bb+(l-i)+Y);
break;
}bJ.push(this.__fc(bF[i],false));
}}else{bJ=bf+bF.length+bp;
}break;
case br:if(bG){var bH;
var bM=[];

for(var bL in bF){bM.push(bL);
}bM.sort();
bJ=[];

for(var i=0,l=bM.length;i<l;i++){if(bJ.length>20){bJ.push(bb+(l-i)+Y);
break;
}bL=bM[i];
bH=this.__fc(bF[bL],false);
bH.key=bL;
bJ.push(bH);
}}else{var bK=0;

for(var bL in bF){bK++;
}bJ=bh+bK+bn;
}break;
}return {type:bN,text:bJ,trace:bI};
}},defer:function(m){var n=qx.Bootstrap.$$logs;

for(var i=0;i<n.length;i++){m.__fa(n[i][0],n[i][1]);
}qx.Bootstrap.debug=m.debug;
qx.Bootstrap.info=m.info;
qx.Bootstrap.warn=m.warn;
qx.Bootstrap.error=m.error;
qx.Bootstrap.trace=m.trace;
}});
})();
(function(){var bB="set",bA="get",bz="reset",by="MSIE 6.0",bx="info",bw="qx.core.Object",bv="error",bu="warn",bt="]",bs="debug",bp="[",br="$$user_",bq="rv:1.8.1",bo="Object";
qx.Class.define(bw,{extend:Object,include:[qx.data.MBinding],construct:function(){qx.core.ObjectRegistry.register(this);
},statics:{$$type:bo},members:{toHashCode:function(){return this.$$hash;
},toString:function(){return this.classname+bp+this.$$hash+bt;
},base:function(bE,bF){{};

if(arguments.length===1){return bE.callee.base.call(this);
}else{return bE.callee.base.apply(this,Array.prototype.slice.call(arguments,1));
}},self:function(bD){return bD.callee.self;
},clone:function(){var u=this.constructor;
var t=new u;
var w=qx.Class.getProperties(u);
var v=qx.core.Property.$$store.user;
var x=qx.core.Property.$$method.set;
var name;
for(var i=0,l=w.length;i<l;i++){name=w[i];

if(this.hasOwnProperty(v[name])){t[x[name]](this[v[name]]);
}}return t;
},set:function(T,U){var W=qx.core.Property.$$method.set;

if(qx.Bootstrap.isString(T)){if(!this[W[T]]){if(this[bB+qx.Bootstrap.firstUp(T)]!=undefined){this[bB+qx.Bootstrap.firstUp(T)](U);
return this;
}{};
}return this[W[T]](U);
}else{for(var V in T){if(!this[W[V]]){if(this[bB+qx.Bootstrap.firstUp(V)]!=undefined){this[bB+qx.Bootstrap.firstUp(V)](T[V]);
continue;
}{};
}this[W[V]](T[V]);
}return this;
}},get:function(g){var h=qx.core.Property.$$method.get;

if(!this[h[g]]){if(this[bA+qx.Bootstrap.firstUp(g)]!=undefined){return this[bA+qx.Bootstrap.firstUp(g)]();
}{};
}return this[h[g]]();
},reset:function(z){var A=qx.core.Property.$$method.reset;

if(!this[A[z]]){if(this[bz+qx.Bootstrap.firstUp(z)]!=undefined){this[bz+qx.Bootstrap.firstUp(z)]();
return;
}{};
}this[A[z]]();
},__kQ:qx.event.Registration,addListener:function(I,J,self,K){if(!this.$$disposed){return this.__kQ.addListener(this,I,J,self,K);
}return null;
},addListenerOnce:function(b,c,self,d){var f=function(e){this.removeListener(b,f,this,d);
c.call(self||this,e);
};
return this.addListener(b,f,this,d);
},removeListener:function(B,C,self,D){if(!this.$$disposed){return this.__kQ.removeListener(this,B,C,self,D);
}return false;
},removeListenerById:function(y){if(!this.$$disposed){return this.__kQ.removeListenerById(this,y);
}return false;
},hasListener:function(bM,bN){return this.__kQ.hasListener(this,bM,bN);
},dispatchEvent:function(j){if(!this.$$disposed){return this.__kQ.dispatchEvent(this,j);
}return true;
},fireEvent:function(E,F,G){if(!this.$$disposed){return this.__kQ.fireEvent(this,E,F,G);
}return true;
},fireNonBubblingEvent:function(L,M,N){if(!this.$$disposed){return this.__kQ.fireNonBubblingEvent(this,L,M,N);
}return true;
},fireDataEvent:function(Y,ba,bb,bc){if(!this.$$disposed){if(bb===undefined){bb=null;
}return this.__kQ.fireNonBubblingEvent(this,Y,qx.event.type.Data,[ba,bb,!!bc]);
}return true;
},__kR:null,setUserData:function(bm,bn){if(!this.__kR){this.__kR={};
}this.__kR[bm]=bn;
},getUserData:function(R){if(!this.__kR){return null;
}var S=this.__kR[R];
return S===undefined?null:S;
},__kS:qx.log.Logger,debug:function(m){this.__kT(bs,arguments);
},info:function(k){this.__kT(bx,arguments);
},warn:function(bG){this.__kT(bu,arguments);
},error:function(H){this.__kT(bv,arguments);
},trace:function(){this.__kS.trace(this);
},__kT:function(O,P){var Q=qx.lang.Array.fromArguments(P);
Q.unshift(this);
this.__kS[O].apply(this.__kS,Q);
},isDisposed:function(){return this.$$disposed||false;
},dispose:function(){var r,p,o,s;
if(this.$$disposed){return;
}this.$$disposed=true;
this.$$instance=null;
this.$$allowconstruct=null;
{};
var q=this.constructor;
var n;

while(q.superclass){if(q.$$destructor){q.$$destructor.call(this);
}if(q.$$includes){n=q.$$flatIncludes;

for(var i=0,l=n.length;i<l;i++){if(n[i].$$destructor){n[i].$$destructor.call(this);
}}}q=q.superclass;
}if(this.__kU){this.__kU();
}{};
},__kU:null,__kV:function(){var X=qx.Class.getProperties(this.constructor);

for(var i=0,l=X.length;i<l;i++){delete this[br+X[i]];
}},_disposeObjects:function(bH){qx.util.DisposeUtil.disposeObjects(this,arguments);
},_disposeSingletonObjects:function(bd){qx.util.DisposeUtil.disposeObjects(this,arguments,true);
},_disposeArray:function(bC){qx.util.DisposeUtil.disposeArray(this,bC);
},_disposeMap:function(a){qx.util.DisposeUtil.disposeMap(this,a);
}},settings:{"qx.disposerDebugLevel":0},defer:function(bI,bJ){{};
var bL=navigator.userAgent.indexOf(by)!=-1;
var bK=navigator.userAgent.indexOf(bq)!=-1;
if(bL||bK){bJ.__kU=bJ.__kV;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.event.Registration.removeAllListeners(this);
}else{qx.event.Registration.deleteAllListeners(this);
}qx.core.ObjectRegistry.unregister(this);
this.__kR=null;
var bg=this.constructor;
var bk;
var bl=qx.core.Property.$$store;
var bi=bl.user;
var bj=bl.theme;
var be=bl.inherit;
var bh=bl.useinit;
var bf=bl.init;

while(bg){bk=bg.$$properties;

if(bk){for(var name in bk){if(bk[name].dereference){this[bi[name]]=this[bj[name]]=this[be[name]]=this[bh[name]]=this[bf[name]]=undefined;
}}}bg=bg.superclass;
}}});
})();
(function(){var a="qx.event.IEventHandler";
qx.Interface.define(a,{statics:{TARGET_DOMNODE:1,TARGET_WINDOW:2,TARGET_OBJECT:3},members:{canHandleEvent:function(h,i){},registerEvent:function(e,f,g){},unregisterEvent:function(b,c,d){}}});
})();
(function(){var d="qx.globalErrorHandling",c="on",b="qx.event.GlobalError";
qx.Bootstrap.define(b,{statics:{setErrorHandler:function(k,l){this.__jU=k||null;
this.__jV=l||window;

if(qx.core.Setting.get(d)===c){if(k&&window.onerror){var m=qx.Bootstrap.bind(this.__jX,this);

if(this.__jW==null){this.__jW=window.onerror;
}var self=this;
window.onerror=function(e){self.__jW(e);
m(e);
};
}
if(k&&!window.onerror){window.onerror=qx.Bootstrap.bind(this.__jX,this);
}if(this.__jU==null){if(this.__jW!=null){window.onerror=this.__jW;
this.__jW=null;
}else{window.onerror=null;
}}}},__jX:function(g,h,i){if(this.__jU){this.handleError(new qx.core.WindowError(g,h,i));
return true;
}},observeMethod:function(f){if(qx.core.Setting.get(d)===c){var self=this;
return function(){if(!self.__jU){return f.apply(this,arguments);
}
try{return f.apply(this,arguments);
}catch(n){self.handleError(new qx.core.GlobalError(n,arguments));
}};
}else{return f;
}},handleError:function(a){if(this.__jU){this.__jU.call(this.__jV,a);
}}},defer:function(j){qx.core.Setting.define(d,c);
j.setErrorHandler(null,null);
}});
})();
(function(){var n="ready",m="qx.client",l="mshtml",k="load",j="unload",i="qx.event.handler.Application",h="complete",g="qx.application",f="gecko|opera|webkit",d="left",b="DOMContentLoaded",c="shutdown";
qx.Class.define(i,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(a){qx.core.Object.call(this);
this._window=a.getWindow();
this.__hu=false;
this.__hv=false;
this._initObserver();
qx.event.handler.Application.$$instance=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{ready:1,shutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true,onScriptLoaded:function(){var A=qx.event.handler.Application.$$instance;

if(A){A.__hy();
}}},members:{canHandleEvent:function(t,u){},registerEvent:function(x,y,z){},unregisterEvent:function(p,q,r){},__hw:null,__hu:null,__hv:null,__hx:null,__hy:function(){if(!this.__hw&&this.__hu&&qx.$$loader.scriptLoaded){try{var s=qx.core.Setting.get(g);

if(!qx.Class.getByName(s)){return;
}}catch(e){}if(qx.core.Variant.isSet(m,l)){if(qx.event.Registration.hasListener(this._window,n)){this.__hw=true;
qx.event.Registration.fireEvent(this._window,n);
}}else{this.__hw=true;
qx.event.Registration.fireEvent(this._window,n);
}}},isApplicationReady:function(){return this.__hw;
},_initObserver:function(){if(qx.$$domReady||document.readyState==h||document.readyState==n){this.__hu=true;
this.__hy();
}else{this._onNativeLoadWrapped=qx.lang.Function.bind(this._onNativeLoad,this);

if(qx.core.Variant.isSet(m,f)){qx.bom.Event.addNativeListener(this._window,b,this._onNativeLoadWrapped);
}else if(qx.core.Variant.isSet(m,l)){var self=this;
var v=function(){try{document.documentElement.doScroll(d);

if(document.body){self._onNativeLoadWrapped();
}}catch(w){window.setTimeout(v,100);
}};
v();
}qx.bom.Event.addNativeListener(this._window,k,this._onNativeLoadWrapped);
}this._onNativeUnloadWrapped=qx.lang.Function.bind(this._onNativeUnload,this);
qx.bom.Event.addNativeListener(this._window,j,this._onNativeUnloadWrapped);
},_stopObserver:function(){if(this._onNativeLoadWrapped){qx.bom.Event.removeNativeListener(this._window,k,this._onNativeLoadWrapped);
}qx.bom.Event.removeNativeListener(this._window,j,this._onNativeUnloadWrapped);
this._onNativeLoadWrapped=null;
this._onNativeUnloadWrapped=null;
},_onNativeLoad:qx.event.GlobalError.observeMethod(function(){this.__hu=true;
this.__hy();
}),_onNativeUnload:qx.event.GlobalError.observeMethod(function(){if(!this.__hx){this.__hx=true;

try{qx.event.Registration.fireEvent(this._window,c);
}catch(e){throw e;
}finally{qx.core.ObjectRegistry.shutdown();
}}})},destruct:function(){this._stopObserver();
this._window=null;
},defer:function(o){qx.event.Registration.addHandler(o);
}});
})();
(function(){var c="qx.event.handler.Window";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(d){qx.core.Object.call(this);
this._manager=d;
this._window=d.getWindow();
this._initWindowObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{error:1,load:1,beforeunload:1,unload:1,resize:1,scroll:1,beforeshutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(a,b){},registerEvent:function(f,g,h){},unregisterEvent:function(p,q,r){},_initWindowObserver:function(){this._onNativeWrapper=qx.lang.Function.listener(this._onNative,this);
var o=qx.event.handler.Window.SUPPORTED_TYPES;

for(var n in o){qx.bom.Event.addNativeListener(this._window,n,this._onNativeWrapper);
}},_stopWindowObserver:function(){var u=qx.event.handler.Window.SUPPORTED_TYPES;

for(var t in u){qx.bom.Event.removeNativeListener(this._window,t,this._onNativeWrapper);
}},_onNative:qx.event.GlobalError.observeMethod(function(e){if(this.isDisposed()){return;
}var j=this._window;

try{var m=j.document;
}catch(e){return ;
}var k=m.documentElement;
var i=e.target||e.srcElement;

if(i==null||i===j||i===m||i===k){var event=qx.event.Registration.createEvent(e.type,qx.event.type.Native,[e,j]);
qx.event.Registration.dispatchEvent(j,event);
var l=event.getReturnValue();

if(l!=null){e.returnValue=l;
return l;
}}})},destruct:function(){this._stopWindowObserver();
this._manager=this._window=null;
},defer:function(s){qx.event.Registration.addHandler(s);
}});
})();
(function(){var a="qx.event.IEventDispatcher";
qx.Interface.define(a,{members:{canDispatchEvent:function(b,event,c){this.assertInstance(event,qx.event.type.Event);
this.assertString(c);
},dispatchEvent:function(d,event,e){this.assertInstance(event,qx.event.type.Event);
this.assertString(e);
}}});
})();
(function(){var a="qx.event.dispatch.Direct";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,construct:function(e){this._manager=e;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST},members:{canDispatchEvent:function(b,event,c){return !event.getBubbles();
},dispatchEvent:function(f,event,g){var k,h;
{};
event.setEventPhase(qx.event.type.Event.AT_TARGET);
var m=this._manager.getListeners(f,g,false);

if(m){for(var i=0,l=m.length;i<l;i++){var j=m[i].context||f;
m[i].handler.call(j,event);
}}}},defer:function(d){qx.event.Registration.addDispatcher(d);
}});
})();
(function(){var f="ready",d="qx.application",c="beforeunload",b="qx.core.Init",a="shutdown";
qx.Class.define(b,{statics:{getApplication:function(){return this.__jR||null;
},ready:function(){if(this.__jR){return;
}
if(qx.bom.client.Engine.UNKNOWN_ENGINE){qx.log.Logger.warn("Could not detect engine!");
}
if(qx.bom.client.Engine.UNKNOWN_VERSION){qx.log.Logger.warn("Could not detect the version of the engine!");
}
if(qx.bom.client.Platform.UNKNOWN_PLATFORM){qx.log.Logger.warn("Could not detect platform!");
}
if(qx.bom.client.System.UNKNOWN_SYSTEM){qx.log.Logger.warn("Could not detect system!");
}qx.log.Logger.debug(this,"Load runtime: "+(new Date-qx.Bootstrap.LOADSTART)+"ms");
var k=qx.core.Setting.get(d);
var l=qx.Class.getByName(k);

if(l){this.__jR=new l;
var j=new Date;
this.__jR.main();
qx.log.Logger.debug(this,"Main runtime: "+(new Date-j)+"ms");
var j=new Date;
this.__jR.finalize();
qx.log.Logger.debug(this,"Finalize runtime: "+(new Date-j)+"ms");
}else{qx.log.Logger.warn("Missing application class: "+k);
}},__jS:function(e){var g=this.__jR;

if(g){e.setReturnValue(g.close());
}},__jT:function(){var i=this.__jR;

if(i){i.terminate();
}}},defer:function(h){qx.event.Registration.addListener(window,f,h.ready,h);
qx.event.Registration.addListener(window,a,h.__jT,h);
qx.event.Registration.addListener(window,c,h.__jS,h);
}});
})();
(function(){var a="qx.application.IApplication";
qx.Interface.define(a,{members:{main:function(){},finalize:function(){},close:function(){},terminate:function(){}}});
})();
(function(){var a="qx.application.Native";
qx.Class.define(a,{extend:qx.core.Object,implement:[qx.application.IApplication],members:{main:function(){},finalize:function(){},close:function(){},terminate:function(){}}});
})();
(function(){var n="0px",m="div",l="840px",k="#",h="1px solid #AAA",g="demobrowser.demo.bom.HtmlArea",f="traditional web pages / single-page applications.<br/> ",d="20px 20px",c="<h1>HtmlArea low-level widget</h1>",b="<p>This low-level widget can be used separately at ",A="BgColor (Hex): ",z="",y="innerHTML",x="You can play around with this widget by hitting the ",w="Color (Hex): ",v="buttons at the toolbar.</p>",u="350px",t='<h1>About</h1><p>qooxdoo (pronounced [ku:ksdu:]) is a comprehensive and innovative Ajax application framework. Leveraging object-oriented JavaScript allows developers to build impressive cross-browser applications. No <acronym title="HyperText Markup Language">HTML</acronym>, <acronym title="Cascading Style Sheets">CSS</acronym> nor <acronym title="Document Object Model">DOM</acronym> knowledge is needed. qooxdoo includes a platform-independent development tool chain, a state-of-the-art <acronym title="Graphical User Interface">GUI</acronym> toolkit and an advanced client-server communication layer. It is Open Source under an <acronym title="GNU Lesser General Public License">LGPL</acronym>/<acronym title="Eclipse Public License">EPL</acronym> dual <a href="http://qooxdoo.org/license" class="wikilink1" title="license">license</a>.</p>',s="blank.html",r="<p style='margin-bottom:10px'><b>No UI-level code</b> is included in this demo.",p="white",q="FontSize: ",o="It is the foundation for the UI widget component.</p>";
qx.Class.define(g,{extend:qx.application.Native,members:{__Ns:null,__Nt:null,__Nu:null,__Nv:null,__Nw:null,main:function(){qx.application.Native.prototype.main.call(this);
this.__Ns=qx.bom.Element.create(m);
qx.bom.element.Style.setStyles(this.__Ns,{margin:d});
var V=qx.bom.Element.create(m);
qx.bom.element.Style.setStyles(V,{width:l,padding:n,margin:n});
var U=c+b+f+o+r+x+v;
qx.bom.element.Attribute.set(V,y,U);
this.__Nt=qx.bom.Element.create(m);
qx.bom.element.Style.setStyles(this.__Nt,{width:l,padding:n,margin:n,lineHeight:n,border:h});
this.__Nu=qx.bom.Element.create(m);
qx.bom.element.Style.setStyles(this.__Nu,{width:l,height:u,border:h,borderTop:n,backgroundColor:p});
qx.dom.Element.insertEnd(this.__Nu,this.__Ns);
var T=t;
this.__Nv=new qx.bom.htmlarea.HtmlArea(this.__Nu,T,null,s);
this.__NG();
qx.dom.Element.insertBegin(this.__Nt,this.__Ns);
qx.dom.Element.insertBegin(V,this.__Ns);
qx.dom.Element.insertBegin(this.__Ns,document.body);
},__Nx:function(e){var a=window.prompt(q,z);
this.setFontSize(parseInt(a));
},__Ny:function(e){var D=window.prompt(w,k);
this.setTextColor(D);
},__Nz:function(e){var G=window.prompt(A,k);
this.setTextBackgroundColor(G);
},__NA:function(e){var E={src:qx.util.ResourceManager.getInstance().toUri("demobrowser/demo/icons/htmlarea/qooxdoo_logo.png"),border:0,title:"qooxdoo logo",alt:"qooxdoo logo"};
this.insertImage(E);
},__NB:function(e){var H="<table border='1'>"+"<tbody>"+"<tr>"+"<td>First Row, First cell</td>"+"<td>First Row, Second cell</td>"+"</tr>"+"<tr>"+"<td>Second Row, First cell</td>"+"<td>Second Row, Second cell</td>"+"</tr>"+"</tbody>"+"</table>";
this.insertHtml(H);
},__NC:function(e){var S=window.prompt("Link: ","http://");
this.insertHyperLink(S);
},__ND:function(e){var F=window.prompt("HTML Code:","");
this.insertHtml(F);
},__NE:function(){var bd=qx.bom.Element.create("div");
qx.bom.element.Style.setStyles(bd,{"float":"left"});
var bf;
var be=qx.bom.Element.create("select",{title:"Change font family"});

if(qx.core.Variant.isSet("qx.client","mshtml")){qx.bom.element.Attribute.set(be,"hideFocus","true");
}else{qx.bom.element.Style.set(be,"outline","none");
}bf=qx.bom.Collection.html("<option value=''></option>");
qx.dom.Element.insertEnd(bf[0],be);
var bg=["Tahoma","Verdana","Times New Roman","Arial","Arial Black","Courier New","Courier","Georgia","Impact","Comic Sans MS","Lucida Console"];
var bc;
var bh;

for(var i=0,j=bg.length;i<j;i++){bc="<option qxKeepFocus='on' qxSelectable='off'"+"value='"+bg[i]+"'>"+bg[i]+"</option>";
bh=qx.bom.Collection.html(bc);

if(qx.core.Variant.isSet("qx.client","mshtml")){qx.bom.element.Attribute.set(bh[0],"hideFocus","true");
}else{qx.bom.element.Style.set(bh[0],"outline","none");
}qx.dom.Element.insertEnd(bh[0],be);
}qx.event.Registration.addListener(be,"change",function(e){var I=e.getTarget();
var J=I.selectedIndex;

if(J!=0){this.setFontFamily(I.options[J].value);
I.options[0].selected=true;
}},this.__Nv);
qx.dom.Element.insertBegin(be,bd);
return bd;
},__NF:function(){var X=qx.bom.Element.create("div");
qx.bom.element.Style.setStyles(X,{"marginRight":"16px","float":"left"});
var ba;
var Y=qx.bom.Element.create("select",{title:"Change font size"});

if(qx.core.Variant.isSet("qx.client","mshtml")){qx.bom.element.Attribute.set(Y,"hideFocus","true");
}else{qx.bom.element.Style.set(Y,"outline","none");
}ba=qx.bom.Collection.html("<option value=''></option>");
qx.dom.Element.insertEnd(ba[0],Y);
var bb;
var W;

for(var i=1;i<=7;i++){W="<option qxKeepFocus='on' qxSelectable='off' "+"value='"+i+"'>"+i+"</option>";
bb=qx.bom.Collection.html(W);

if(qx.core.Variant.isSet("qx.client","mshtml")){qx.bom.element.Attribute.set(bb[0],"hideFocus","true");
}else{qx.bom.element.Style.set(bb[0],"outline","none");
}qx.dom.Element.insertEnd(bb[0],Y);
}qx.event.Registration.addListener(Y,"change",function(e){var B=e.getTarget();
var C=B.selectedIndex;

if(C!=0){this.setFontSize(B.options[C].value);
B.options[0].selected=true;
}},this.__Nv);
qx.dom.Element.insertBegin(Y,X);
return X;
},__NG:function(){var L=[{bold:{text:"Format Bold",image:"qx/icon/Oxygen/16/actions/format-text-bold.png",action:this.__Nv.setBold},italic:{text:"Format Italic",image:"qx/icon/Oxygen/16/actions/format-text-italic.png",action:this.__Nv.setItalic},underline:{text:"Format Underline",image:"qx/icon/Oxygen/16/actions/format-text-underline.png",action:this.__Nv.setUnderline},strikethrough:{text:"Format Strikethrough",image:"qx/icon/Oxygen/16/actions/format-text-strikethrough.png",action:this.__Nv.setStrikeThrough},removeFormat:{text:"Remove Format",image:"qx/icon/Oxygen/16/actions/edit-clear.png",action:this.__Nv.removeFormat}},{alignLeft:{text:"Align Left",image:"qx/icon/Oxygen/16/actions/format-justify-left.png",action:this.__Nv.setJustifyLeft},alignCenter:{text:"Align Center",image:"qx/icon/Oxygen/16/actions/format-justify-center.png",action:this.__Nv.setJustifyCenter},alignRight:{text:"Align Right",image:"qx/icon/Oxygen/16/actions/format-justify-right.png",action:this.__Nv.setJustifyRight},alignJustify:{text:"Align Justify",image:"qx/icon/Oxygen/16/actions/format-justify-fill.png",action:this.__Nv.setJustifyFull}},{fontFamily:{custom:this.__NE},fontSize:{custom:this.__NF},fontColor:{text:"Set Text Color",image:"demobrowser/demo/icons/htmlarea/format-text-color.png",action:this.__Ny},textBackgroundColor:{text:"Set Text Background Color",image:"demobrowser/demo/icons/htmlarea/format-fill-color.png",action:this.__Nz}},{indent:{text:"Indent More",image:"qx/icon/Oxygen/16/actions/format-indent-more.png",action:this.__Nv.insertIndent},outdent:{text:"Indent Less",image:"qx/icon/Oxygen/16/actions/format-indent-less.png",action:this.__Nv.insertOutdent}},{insertImage:{text:"Insert Image",image:"qx/icon/Oxygen/16/actions/insert-image.png",action:this.__NA},insertTable:{text:"Insert Table",image:"demobrowser/demo/icons/htmlarea/insert-table.png",action:this.__NB},insertLink:{text:"Insert Link",image:"qx/icon/Oxygen/16/actions/insert-link.png",action:this.__NC},insertHTML:{text:"Insert HTML Code",image:"demobrowser/demo/icons/htmlarea/insert-text.png",action:this.__ND},insertHR:{text:"Insert Horizontal Ruler",image:"demobrowser/demo/icons/htmlarea/insert-horizontal-rule.png",action:this.__Nv.insertHorizontalRuler}},{ol:{text:"Insert Ordered List",image:"demobrowser/demo/icons/htmlarea/format-list-ordered.png",action:this.__Nv.insertOrderedList},ul:{text:"Inserted Unordered List",image:"demobrowser/demo/icons/htmlarea/format-list-unordered.png",action:this.__Nv.insertUnorderedList}},{undo:{text:"Undo Last Change",image:"qx/icon/Oxygen/16/actions/edit-undo.png",action:this.__Nv.undo},redo:{text:"Redo Last Undo Step",image:"qx/icon/Oxygen/16/actions/edit-redo.png",action:this.__Nv.redo}}];
var N,R,K,P;

for(var i=0,j=L.length;i<j;i++){R={};
R["marginRight"]=i==j-1?"0px":"16px";
R["float"]="left";
N=qx.bom.Element.create("div");
qx.bom.element.Style.setStyles(N,R);

for(var O in L[i]){var Q=L[i][O];

if(Q.custom){K=Q.custom.call(this);
}else{var M=qx.util.AliasManager.getInstance().resolve(Q.image);
P={type:"image",src:qx.util.ResourceManager.getInstance().toUri(M),title:Q.text,qxKeepFocus:"on",qxSelectable:"off"};
K=qx.bom.Element.create("input",P);
qx.bom.element.Style.setStyles(K,{width:"16px",height:"16px",padding:"4px"});

if(qx.core.Variant.isSet("qx.client","mshtml")){qx.bom.element.Attribute.set(K,"hideFocus","true");
}else{qx.bom.element.Style.set(K,"outline","none");
}qx.event.Registration.addListener(K,"click",Q.action,this.__Nv);
}qx.dom.Element.insertEnd(K,N);
}qx.dom.Element.insertEnd(N,this.__Nt);
}qx.dom.Element.insertEnd(qx.bom.Element.create("br",{style:"clear:both"}),this.__Nt);
}}});
})();
(function(){var a="qx.event.type.Event";
qx.Class.define(a,{extend:qx.core.Object,statics:{CAPTURING_PHASE:1,AT_TARGET:2,BUBBLING_PHASE:3},members:{init:function(h,i){{};
this._type=null;
this._target=null;
this._currentTarget=null;
this._relatedTarget=null;
this._originalTarget=null;
this._stopPropagation=false;
this._preventDefault=false;
this._bubbles=!!h;
this._cancelable=!!i;
this._timeStamp=(new Date()).getTime();
this._eventPhase=null;
return this;
},clone:function(d){if(d){var e=d;
}else{var e=qx.event.Pool.getInstance().getObject(this.constructor);
}e._type=this._type;
e._target=this._target;
e._currentTarget=this._currentTarget;
e._relatedTarget=this._relatedTarget;
e._originalTarget=this._originalTarget;
e._stopPropagation=this._stopPropagation;
e._bubbles=this._bubbles;
e._preventDefault=this._preventDefault;
e._cancelable=this._cancelable;
return e;
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
},setType:function(g){this._type=g;
},getEventPhase:function(){return this._eventPhase;
},setEventPhase:function(j){this._eventPhase=j;
},getTimeStamp:function(){return this._timeStamp;
},getTarget:function(){return this._target;
},setTarget:function(l){this._target=l;
},getCurrentTarget:function(){return this._currentTarget||this._target;
},setCurrentTarget:function(k){this._currentTarget=k;
},getRelatedTarget:function(){return this._relatedTarget;
},setRelatedTarget:function(c){this._relatedTarget=c;
},getOriginalTarget:function(){return this._originalTarget;
},setOriginalTarget:function(f){this._originalTarget=f;
},getBubbles:function(){return this._bubbles;
},setBubbles:function(m){this._bubbles=m;
},isCancelable:function(){return this._cancelable;
},setCancelable:function(b){this._cancelable=b;
}},destruct:function(){this._target=this._currentTarget=this._relatedTarget=this._originalTarget=null;
}});
})();
(function(){var a="qx.event.type.Data";
qx.Class.define(a,{extend:qx.event.type.Event,members:{__jm:null,__jn:null,init:function(d,e,f){qx.event.type.Event.prototype.init.call(this,false,f);
this.__jm=d;
this.__jn=e;
return this;
},clone:function(b){var c=qx.event.type.Event.prototype.clone.call(this,b);
c.__jm=this.__jm;
c.__jn=this.__jn;
return c;
},getData:function(){return this.__jm;
},getOldData:function(){return this.__jn;
}},destruct:function(){this.__jm=this.__jn=null;
}});
})();
(function(){var m="get",l="",k="[",h="last",g="change",f="]",d=".",c="Number",b="String",a="set",D="deepBinding",C="item",B="reset",A="' (",z="Boolean",y=") to the object '",x="Integer",w=" of object ",v="qx.data.SingleValueBinding",u="Binding property ",s="Binding from '",t="PositiveNumber",q="PositiveInteger",r="Binding does not exist!",o=").",p="Date",n=" not possible: No event available. ";
qx.Class.define(v,{statics:{DEBUG_ON:false,__fQ:{},bind:function(T,U,V,W,X){var bi=this.__fS(T,U,V,W,X);
var bd=U.split(d);
var ba=this.__ga(bd);
var bh=[];
var be=[];
var bf=[];
var bb=[];
var bc=T;
for(var i=0;i<bd.length;i++){if(ba[i]!==l){bb.push(g);
}else{bb.push(this.__fU(bc,bd[i]));
}bh[i]=bc;
if(i==bd.length-1){if(ba[i]!==l){var bl=ba[i]===h?bc.length-1:ba[i];
var Y=bc.getItem(bl);
this.__fY(Y,V,W,X,T);
bf[i]=this.__gb(bc,bb[i],V,W,X,ba[i]);
}else{if(bd[i]!=null&&bc[m+qx.lang.String.firstUp(bd[i])]!=null){var Y=bc[m+qx.lang.String.firstUp(bd[i])]();
this.__fY(Y,V,W,X,T);
}bf[i]=this.__gb(bc,bb[i],V,W,X);
}}else{var bj={index:i,propertyNames:bd,sources:bh,listenerIds:bf,arrayIndexValues:ba,targetObject:V,targetPropertyChain:W,options:X,listeners:be};
var bg=qx.lang.Function.bind(this.__fR,this,bj);
be.push(bg);
bf[i]=bc.addListener(bb[i],bg);
}if(bc[m+qx.lang.String.firstUp(bd[i])]==null){bc=null;
}else if(ba[i]!==l){bc=bc[m+qx.lang.String.firstUp(bd[i])](ba[i]);
}else{bc=bc[m+qx.lang.String.firstUp(bd[i])]();
}
if(!bc){break;
}}var bk={type:D,listenerIds:bf,sources:bh,targetListenerIds:bi.listenerIds,targets:bi.targets};
this.__gc(bk,T,U,V,W);
return bk;
},__fR:function(bH){if(bH.options&&bH.options.onUpdate){bH.options.onUpdate(bH.sources[bH.index],bH.targetObject);
}for(var j=bH.index+1;j<bH.propertyNames.length;j++){var bL=bH.sources[j];
bH.sources[j]=null;

if(!bL){continue;
}bL.removeListenerById(bH.listenerIds[j]);
}var bL=bH.sources[bH.index];
for(var j=bH.index+1;j<bH.propertyNames.length;j++){if(bH.arrayIndexValues[j-1]!==l){bL=bL[m+qx.lang.String.firstUp(bH.propertyNames[j-1])](bH.arrayIndexValues[j-1]);
}else{bL=bL[m+qx.lang.String.firstUp(bH.propertyNames[j-1])]();
}bH.sources[j]=bL;
if(!bL){this.__fV(bH.targetObject,bH.targetPropertyChain);
break;
}if(j==bH.propertyNames.length-1){if(qx.Class.implementsInterface(bL,qx.data.IListData)){var bM=bH.arrayIndexValues[j]===h?bL.length-1:bH.arrayIndexValues[j];
var bJ=bL.getItem(bM);
this.__fY(bJ,bH.targetObject,bH.targetPropertyChain,bH.options,bH.sources[bH.index]);
bH.listenerIds[j]=this.__gb(bL,g,bH.targetObject,bH.targetPropertyChain,bH.options,bH.arrayIndexValues[j]);
}else{if(bH.propertyNames[j]!=null&&bL[m+qx.lang.String.firstUp(bH.propertyNames[j])]!=null){var bJ=bL[m+qx.lang.String.firstUp(bH.propertyNames[j])]();
this.__fY(bJ,bH.targetObject,bH.targetPropertyChain,bH.options,bH.sources[bH.index]);
}var bK=this.__fU(bL,bH.propertyNames[j]);
bH.listenerIds[j]=this.__gb(bL,bK,bH.targetObject,bH.targetPropertyChain,bH.options);
}}else{if(bH.listeners[j]==null){var bI=qx.lang.Function.bind(this.__fR,this,bH);
bH.listeners.push(bI);
}if(qx.Class.implementsInterface(bL,qx.data.IListData)){var bK=g;
}else{var bK=this.__fU(bL,bH.propertyNames[j]);
}bH.listenerIds[j]=bL.addListener(bK,bH.listeners[j]);
}}},__fS:function(cw,cx,cy,cz,cA){var cE=cz.split(d);
var cC=this.__ga(cE);
var cJ=[];
var cI=[];
var cG=[];
var cF=[];
var cD=cy;
for(var i=0;i<cE.length-1;i++){if(cC[i]!==l){cF.push(g);
}else{try{cF.push(this.__fU(cD,cE[i]));
}catch(e){break;
}}cJ[i]=cD;
var cH=function(){for(var j=i+1;j<cE.length-1;j++){var R=cJ[j];
cJ[j]=null;

if(!R){continue;
}R.removeListenerById(cG[j]);
}var R=cJ[i];
for(var j=i+1;j<cE.length-1;j++){var P=qx.lang.String.firstUp(cE[j-1]);
if(cC[j-1]!==l){var S=cC[j-1]===h?R.getLength()-1:cC[j-1];
R=R[m+P](S);
}else{R=R[m+P]();
}cJ[j]=R;
if(cI[j]==null){cI.push(cH);
}if(qx.Class.implementsInterface(R,qx.data.IListData)){var Q=g;
}else{try{var Q=qx.data.SingleValueBinding.__fU(R,cE[j]);
}catch(e){break;
}}cG[j]=R.addListener(Q,cI[j]);
}qx.data.SingleValueBinding.__fT(cw,cx,cy,cz,cA);
};
cI.push(cH);
cG[i]=cD.addListener(cF[i],cH);
var cB=qx.lang.String.firstUp(cE[i]);
if(cD[m+cB]==null){cD=null;
}else if(cC[i]!==l){cD=cD[m+cB](cC[i]);
}else{cD=cD[m+cB]();
}
if(!cD){break;
}}return {listenerIds:cG,targets:cJ};
},__fT:function(E,F,G,H,I){var M=this.__fX(E,F);

if(M!=null){var O=F.substring(F.lastIndexOf(d)+1,F.length);
if(O.charAt(O.length-1)==f){var J=O.substring(O.lastIndexOf(k)+1,O.length-1);
var L=O.substring(0,O.lastIndexOf(k));
var N=M[m+qx.lang.String.firstUp(L)]();

if(J==h){J=N.length-1;
}
if(N!=null){var K=N.getItem(J);
}}else{var K=M[m+qx.lang.String.firstUp(O)]();
}}K=qx.data.SingleValueBinding.__gd(K,G,H,I);
this.__fW(G,H,K);
},__fU:function(bU,bV){var bW=this.__ge(bU,bV);
if(bW==null){if(qx.Class.supportsEvent(bU.constructor,bV)){bW=bV;
}else if(qx.Class.supportsEvent(bU.constructor,g+qx.lang.String.firstUp(bV))){bW=g+qx.lang.String.firstUp(bV);
}else{throw new qx.core.AssertionError(u+bV+w+bU+n);
}}return bW;
},__fV:function(cb,cc){var cd=this.__fX(cb,cc);

if(cd!=null){var ce=cc.substring(cc.lastIndexOf(d)+1,cc.length);
if(ce.charAt(ce.length-1)==f){this.__fW(cb,cc,null);
return;
}if(cd[B+qx.lang.String.firstUp(ce)]!=undefined){cd[B+qx.lang.String.firstUp(ce)]();
}else{cd[a+qx.lang.String.firstUp(ce)](null);
}}},__fW:function(cP,cQ,cR){var cV=this.__fX(cP,cQ);

if(cV!=null){var cW=cQ.substring(cQ.lastIndexOf(d)+1,cQ.length);
if(cW.charAt(cW.length-1)==f){var cS=cW.substring(cW.lastIndexOf(k)+1,cW.length-1);
var cU=cW.substring(0,cW.lastIndexOf(k));
var cT=cV[m+qx.lang.String.firstUp(cU)]();

if(cS==h){cS=cT.length-1;
}
if(cT!=null){cT.setItem(cS,cR);
}}else{cV[a+qx.lang.String.firstUp(cW)](cR);
}}},__fX:function(cq,cr){var cu=cr.split(d);
var cv=cq;
for(var i=0;i<cu.length-1;i++){try{var ct=cu[i];
if(ct.indexOf(f)==ct.length-1){var cs=ct.substring(ct.indexOf(k)+1,ct.length-1);
ct=ct.substring(0,ct.indexOf(k));
}cv=cv[m+qx.lang.String.firstUp(ct)]();

if(cs!=null){if(cs==h){cs=cv.length-1;
}cv=cv.getItem(cs);
cs=null;
}}catch(bA){return null;
}}return cv;
},__fY:function(cl,cm,cn,co,cp){cl=this.__gd(cl,cm,cn,co);
if(cl===undefined){this.__fV(cm,cn);
}if(cl!==undefined){try{this.__fW(cm,cn,cl);
if(co&&co.onUpdate){co.onUpdate(cp,cm,cl);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(co&&co.onSetFail){co.onSetFail(e);
}else{qx.log.Logger.warn("Failed so set value "+cl+" on "+cm+". Error message: "+e);
}}}},__ga:function(bR){var bS=[];
for(var i=0;i<bR.length;i++){var name=bR[i];
if(qx.lang.String.endsWith(name,f)){var bT=name.substring(name.indexOf(k)+1,name.indexOf(f));
if(name.indexOf(f)!=name.length-1){throw new Error("Please use only one array at a time: "+name+" does not work.");
}
if(bT!==h){if(bT==l||isNaN(parseInt(bT))){throw new Error("No number or 'last' value hast been given"+" in a array binding: "+name+" does not work.");
}}if(name.indexOf(k)!=0){bR[i]=name.substring(0,name.indexOf(k));
bS[i]=l;
bS[i+1]=bT;
bR.splice(i+1,0,C);
i++;
}else{bS[i]=bT;
bR.splice(i,1,C);
}}else{bS[i]=l;
}}return bS;
},__gb:function(cX,cY,da,db,dc,dd){var de;
{};
var dg=function(ch,e){if(ch!==l){if(ch===h){ch=cX.length-1;
}var ck=cX.getItem(ch);
if(ck===undefined){qx.data.SingleValueBinding.__fV(da,db);
}var ci=e.getData().start;
var cj=e.getData().end;

if(ch<ci||ch>cj){return;
}}else{var ck=e.getData();
}if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Binding executed from "+cX+" by "+cY+" to "+da+" ("+db+")");
qx.log.Logger.debug("Data before conversion: "+ck);
}ck=qx.data.SingleValueBinding.__gd(ck,da,db,dc);
if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Data after conversion: "+ck);
}try{if(ck!==undefined){qx.data.SingleValueBinding.__fW(da,db,ck);
}else{qx.data.SingleValueBinding.__fV(da,db);
}if(dc&&dc.onUpdate){dc.onUpdate(cX,da,ck);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(dc&&dc.onSetFail){dc.onSetFail(e);
}else{qx.log.Logger.warn("Failed so set value "+ck+" on "+da+". Error message: "+e);
}}};
if(!dd){dd=l;
}dg=qx.lang.Function.bind(dg,cX,dd);
var df=cX.addListener(cY,dg);
return df;
},__gc:function(cK,cL,cM,cN,cO){if(this.__fQ[cL.toHashCode()]===undefined){this.__fQ[cL.toHashCode()]=[];
}this.__fQ[cL.toHashCode()].push([cK,cL,cM,cN,cO]);
},__gd:function(br,bs,bt,bu){if(bu&&bu.converter){var bw;

if(bs.getModel){bw=bs.getModel();
}return bu.converter(br,bw);
}else{var by=this.__fX(bs,bt);
var bz=bt.substring(bt.lastIndexOf(d)+1,bt.length);
if(by==null){return br;
}var bx=qx.Class.getPropertyDefinition(by.constructor,bz);
var bv=bx==null?l:bx.check;
return this.__gf(br,bv);
}},__ge:function(bX,bY){var ca=qx.Class.getPropertyDefinition(bX.constructor,bY);

if(ca==null){return null;
}return ca.event;
},__gf:function(bB,bC){var bD=qx.lang.Type.getClass(bB);
if((bD==c||bD==b)&&(bC==x||bC==q)){bB=parseInt(bB);
}if((bD==z||bD==c||bD==p)&&bC==b){bB=bB+l;
}if((bD==c||bD==b)&&(bC==c||bC==t)){bB=parseFloat(bB);
}return bB;
},removeBindingFromObject:function(bE,bF){if(bF.type==D){for(var i=0;i<bF.sources.length;i++){if(bF.sources[i]){bF.sources[i].removeListenerById(bF.listenerIds[i]);
}}for(var i=0;i<bF.targets.length;i++){if(bF.targets[i]){bF.targets[i].removeListenerById(bF.targetListenerIds[i]);
}}}else{bE.removeListenerById(bF);
}var bG=this.__fQ[bE.toHashCode()];
if(bG!=undefined){for(var i=0;i<bG.length;i++){if(bG[i][0]==bF){qx.lang.Array.remove(bG,bG[i]);
return;
}}}throw new Error("Binding could not be found!");
},removeAllBindingsForObject:function(bo){{};
var bp=this.__fQ[bo.toHashCode()];

if(bp!=undefined){for(var i=bp.length-1;i>=0;i--){this.removeBindingFromObject(bo,bp[i][0]);
}}},getAllBindingsForObject:function(bq){if(this.__fQ[bq.toHashCode()]===undefined){this.__fQ[bq.toHashCode()]=[];
}return this.__fQ[bq.toHashCode()];
},removeAllBindings:function(){for(var bn in this.__fQ){var bm=qx.core.ObjectRegistry.fromHashCode(bn);
if(bm==null){delete this.__fQ[bn];
continue;
}this.removeAllBindingsForObject(bm);
}this.__fQ={};
},getAllBindings:function(){return this.__fQ;
},showBindingInLog:function(bN,bO){var bQ;
for(var i=0;i<this.__fQ[bN.toHashCode()].length;i++){if(this.__fQ[bN.toHashCode()][i][0]==bO){bQ=this.__fQ[bN.toHashCode()][i];
break;
}}
if(bQ===undefined){var bP=r;
}else{var bP=s+bQ[1]+A+bQ[2]+y+bQ[3]+A+bQ[4]+o;
}qx.log.Logger.debug(bP);
},showAllBindingsInLog:function(){for(var cg in this.__fQ){var cf=qx.core.ObjectRegistry.fromHashCode(cg);

for(var i=0;i<this.__fQ[cg].length;i++){this.showBindingInLog(cf,this.__fQ[cg][i][0]);
}}}}});
})();
(function(){var I="",H="g",G="0",F='\\$1',E="%",D='-',C="qx.lang.String",B=' ',A='\n',z="undefined";
qx.Class.define(C,{statics:{camelCase:function(d){return d.replace(/\-([a-z])/g,function(m,n){return n.toUpperCase();
});
},hyphenate:function(e){return e.replace(/[A-Z]/g,function(O){return (D+O.charAt(0).toLowerCase());
});
},capitalize:function(b){return b.replace(/\b[a-z]/g,function(c){return c.toUpperCase();
});
},clean:function(f){return this.trim(f.replace(/\s+/g,B));
},trimLeft:function(a){return a.replace(/^\s+/,I);
},trimRight:function(j){return j.replace(/\s+$/,I);
},trim:function(k){return k.replace(/^\s+|\s+$/g,I);
},startsWith:function(J,K){return J.indexOf(K)===0;
},endsWith:function(P,Q){return P.substring(P.length-Q.length,P.length)===Q;
},repeat:function(u,v){return u.length>0?new Array(v+1).join(u):I;
},pad:function(L,length,M){var N=length-L.length;

if(N>0){if(typeof M===z){M=G;
}return this.repeat(M,N)+L;
}else{return L;
}},firstUp:qx.Bootstrap.firstUp,firstLow:qx.Bootstrap.firstLow,contains:function(s,t){return s.indexOf(t)!=-1;
},format:function(w,x){var y=w;

for(var i=0;i<x.length;i++){y=y.replace(new RegExp(E+(i+1),H),x[i]+I);
}return y;
},escapeRegexpChars:function(l){return l.replace(/([.*+?^${}()|[\]\/\\])/g,F);
},toArray:function(g){return g.split(/\B|\b/g);
},stripTags:function(h){return h.replace(/<\/?[^>]+>/gi,I);
},stripScripts:function(o,p){var r=I;
var q=o.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(){r+=arguments[1]+A;
return I;
});

if(p===true){qx.lang.Function.globalEval(r);
}return q;
}}});
})();
(function(){var c="qx.event.type.Data",b="qx.event.type.Event",a="qx.data.IListData";
qx.Interface.define(a,{events:{"change":c,"changeLength":b},members:{getItem:function(f){},setItem:function(d,e){},splice:function(h,i,j){},contains:function(g){},getLength:function(){},toArray:function(){}}});
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
this.__kp=b+(c&&c.message?c.message:c);
Error.call(this,this.__kp);
this.__kq=d;
this.__kr=c;
},members:{__kr:null,__kq:null,__kp:null,toString:function(){return this.__kp;
},getArguments:function(){return this.__kq;
},getSourceException:function(){return this.__kr;
}},destruct:function(){this.__kr=null;
this.__kq=null;
this.__kp=null;
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
this.__kW=qx.dev.StackTrace.getStackTrace();
},members:{__kW:null,getStackTrace:function(){return this.__kW;
}}});
})();
(function(){var a="qx.core.ValidationError";
qx.Class.define(a,{extend:qx.type.BaseError});
})();
(function(){var f="qx.lang.Type",e="Error",d="RegExp",c="Date",b="Number",a="Boolean";
qx.Class.define(f,{statics:{getClass:qx.Bootstrap.getClass,isString:qx.Bootstrap.isString,isArray:qx.Bootstrap.isArray,isObject:qx.Bootstrap.isObject,isFunction:qx.Bootstrap.isFunction,isRegExp:function(j){return this.getClass(j)==d;
},isNumber:function(g){return (g!==null&&(this.getClass(g)==b||g instanceof Number));
},isBoolean:function(h){return (h!==null&&(this.getClass(h)==a||h instanceof Boolean));
},isDate:function(k){return (k!==null&&(this.getClass(k)==c||k instanceof Date));
},isError:function(i){return (i!==null&&(this.getClass(i)==e||i instanceof Error));
}}});
})();
(function(){var b="qx.util.ObjectPool",a="Integer";
qx.Class.define(b,{extend:qx.core.Object,construct:function(f){qx.core.Object.call(this);
this.__fx={};

if(f!=null){this.setSize(f);
}},properties:{size:{check:a,init:Infinity}},members:{__fx:null,getObject:function(c){if(this.$$disposed){return new c;
}
if(!c){throw new Error("Class needs to be defined!");
}var d=null;
var e=this.__fx[c.classname];

if(e){d=e.pop();
}
if(d){d.$$pooled=false;
}else{d=new c;
}return d;
},poolObject:function(g){if(!this.__fx){return;
}var h=g.classname;
var j=this.__fx[h];

if(g.$$pooled){throw new Error("Object is already pooled: "+g);
}
if(!j){this.__fx[h]=j=[];
}if(j.length>this.getSize()){if(g.destroy){g.destroy();
}else{g.dispose();
}return;
}g.$$pooled=true;
j.push(g);
}},destruct:function(){var n=this.__fx;
var k,m,i,l;

for(k in n){m=n[k];

for(i=0,l=m.length;i<l;i++){m[i].dispose();
}}delete this.__fx;
}});
})();
(function(){var b="singleton",a="qx.event.Pool";
qx.Class.define(a,{extend:qx.util.ObjectPool,type:b,construct:function(){qx.util.ObjectPool.call(this,30);
}});
})();
(function(){var a="qx.util.DisposeUtil";
qx.Class.define(a,{statics:{disposeObjects:function(f,g,h){var name;

for(var i=0,l=g.length;i<l;i++){name=g[i];

if(f[name]==null||!f.hasOwnProperty(name)){continue;
}
if(!qx.core.ObjectRegistry.inShutDown){if(f[name].dispose){if(!h&&f[name].constructor.$$instance){throw new Error("The object stored in key "+name+" is a singleton! Please use disposeSingleton instead.");
}else{f[name].dispose();
}}else{throw new Error("Has no disposable object under key: "+name+"!");
}}f[name]=null;
}},disposeArray:function(q,r){var t=q[r];

if(!t){return;
}if(qx.core.ObjectRegistry.inShutDown){q[r]=null;
return;
}try{var s;

for(var i=t.length-1;i>=0;i--){s=t[i];

if(s){s.dispose();
}}}catch(b){throw new Error("The array field: "+r+" of object: "+q+" has non disposable entries: "+b);
}t.length=0;
q[r]=null;
},disposeMap:function(j,k){var n=j[k];

if(!n){return;
}if(qx.core.ObjectRegistry.inShutDown){j[k]=null;
return;
}try{var m;

for(var o in n){m=n[o];

if(n.hasOwnProperty(o)&&m){m.dispose();
}}}catch(p){throw new Error("The map field: "+k+" of object: "+j+" has non disposable entries: "+p);
}j[k]=null;
},disposeTriggeredBy:function(c,d){var e=d.dispose;
d.dispose=function(){e.call(d);
c.dispose();
};
}}});
})();
(function(){var a="qx.event.handler.Object";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST,SUPPORTED_TYPES:null,TARGET_CHECK:qx.event.IEventHandler.TARGET_OBJECT,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(b,c){return qx.Class.supportsEvent(b.constructor,c);
},registerEvent:function(g,h,i){},unregisterEvent:function(d,e,f){}},defer:function(j){qx.event.Registration.addHandler(j);
}});
})();
(function(){var k="indexOf",j="lastIndexOf",h="slice",g="concat",f="join",e="toLocaleUpperCase",d="shift",c="substr",b="filter",a="unshift",I="match",H="quote",G="qx.lang.Generics",F="localeCompare",E="sort",D="some",C="charAt",B="split",A="substring",z="pop",t="toUpperCase",u="replace",q="push",r="charCodeAt",o="every",p="reverse",m="search",n="forEach",v="map",w="toLowerCase",y="splice",x="toLocaleLowerCase";
qx.Class.define(G,{statics:{__eO:{"Array":[f,p,E,q,z,d,a,y,g,h,k,j,n,v,b,D,o],"String":[H,A,w,t,C,r,k,j,x,e,F,I,m,u,B,c,g,h]},__eP:function(K,L){return function(s){return K.prototype[L].apply(s,Array.prototype.slice.call(arguments,1));
};
},__eQ:function(){var M=qx.lang.Generics.__eO;

for(var Q in M){var O=window[Q];
var N=M[Q];

for(var i=0,l=N.length;i<l;i++){var P=N[i];

if(!O[P]){O[P]=qx.lang.Generics.__eP(O,P);
}}}}},defer:function(J){J.__eQ();
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
},clone:function(j){var k=qx.event.type.Event.prototype.clone.call(this,j);
var l={};
k._native=this._cloneNativeEvent(this._native,l);
k._returnValue=this._returnValue;
return k;
},_cloneNativeEvent:function(h,i){i.preventDefault=qx.lang.Function.empty;
return i;
},preventDefault:function(){qx.event.type.Event.prototype.preventDefault.call(this);
qx.bom.Event.preventDefault(this._native);
},getNativeEvent:function(){return this._native;
},setReturnValue:function(g){this._returnValue=g;
},getReturnValue:function(){return this._returnValue;
}},destruct:function(){this._native=this._returnValue=null;
}});
})();
(function(){var n="iPod",m="Win32",l="",k="Win64",j="Linux",i="BSD",h="Macintosh",g="iPhone",f="Windows",e="qx.bom.client.Platform",b="iPad",d="X11",c="MacIntel",a="MacPPC";
qx.Class.define(e,{statics:{NAME:"",WIN:false,MAC:false,UNIX:false,UNKNOWN_PLATFORM:false,__ke:function(){var p=navigator.platform;
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
}}},defer:function(o){o.__ke();
}});
})();
(function(){var j="win98",i="osx2",h="osx0",g="osx4",f="win95",e="win2000",d="osx1",c="osx5",b="osx3",a="Windows NT 5.01",H=")",G="winxp",F="freebsd",E="sunos",D="SV1",C="|",B="nintendods",A="winnt4",z="wince",y="winme",q="os9",r="\.",o="osx",p="linux",m="netbsd",n="winvista",k="openbsd",l="(",s="win2003",t="symbian",v="win7",u="g",x="qx.bom.client.System",w=" Mobile/";
qx.Class.define(x,{statics:{NAME:"",SP1:false,SP2:false,WIN95:false,WIN98:false,WINME:false,WINNT4:false,WIN2000:false,WINXP:false,WIN2003:false,WINVISTA:false,WIN7:false,WINCE:false,LINUX:false,SUNOS:false,FREEBSD:false,NETBSD:false,OPENBSD:false,OSX:false,OS9:false,SYMBIAN:false,NINTENDODS:false,PSP:false,IPHONE:false,UNKNOWN_SYSTEM:false,__kO:{"Windows NT 6.1":v,"Windows NT 6.0":n,"Windows NT 5.2":s,"Windows NT 5.1":G,"Windows NT 5.0":e,"Windows 2000":e,"Windows NT 4.0":A,"Win 9x 4.90":y,"Windows CE":z,"Windows 98":j,"Win98":j,"Windows 95":f,"Win95":f,"Linux":p,"FreeBSD":F,"NetBSD":m,"OpenBSD":k,"SunOS":E,"Symbian System":t,"Nitro":B,"PSP":"sonypsp","Mac OS X 10_5":c,"Mac OS X 10.5":c,"Mac OS X 10_4":g,"Mac OS X 10.4":g,"Mac OS X 10_3":b,"Mac OS X 10.3":b,"Mac OS X 10_2":i,"Mac OS X 10.2":i,"Mac OS X 10_1":d,"Mac OS X 10.1":d,"Mac OS X 10_0":h,"Mac OS X 10.0":h,"Mac OS X":o,"Mac OS 9":q},__kP:function(){var L=navigator.userAgent;
var K=[];

for(var J in this.__kO){K.push(J);
}var M=new RegExp(l+K.join(C).replace(/\./g,r)+H,u);

if(!M.test(L)){this.UNKNOWN_SYSTEM=true;

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
}else{this.NAME=this.__kO[RegExp.$1];
this[this.NAME.toUpperCase()]=true;

if(qx.bom.client.Platform.WIN){if(L.indexOf(a)!==-1){this.SP1=true;
}else if(qx.bom.client.Engine.MSHTML&&L.indexOf(D)!==-1){this.SP2=true;
}}}}},defer:function(I){I.__kP();
}});
})();
(function(){var t="abstract",s="qx.event.dispatch.AbstractBubbling";
qx.Class.define(s,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,type:t,construct:function(w){this._manager=w;
},members:{_getParent:function(x){throw new Error("Missing implementation");
},canDispatchEvent:function(u,event,v){return event.getBubbles();
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
qx.Class.define(a,{extend:qx.event.dispatch.AbstractBubbling,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL},members:{_getParent:function(d){return d.parentNode;
},canDispatchEvent:function(b,event,c){return b.nodeType!==undefined&&event.getBubbles();
}},defer:function(e){qx.event.Registration.addDispatcher(e);
}});
})();
(function(){var a="qx.event.handler.UserAction";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(k){qx.core.Object.call(this);
this.__jY=k;
this.__ka=k.getWindow();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__jY:null,__ka:null,canHandleEvent:function(b,c){},registerEvent:function(d,e,f){},unregisterEvent:function(g,h,i){}},destruct:function(){this.__jY=this.__ka=null;
},defer:function(j){qx.event.Registration.addHandler(j);
}});
})();
(function(){var D="keydown",C="qx.client",B="keypress",A="NumLock",z="keyup",y="Enter",x="0",w="9",v="-",u="PageUp",bL="+",bK="PrintScreen",bJ="gecko",bI="A",bH="Z",bG="Left",bF="F5",bE="Down",bD="Up",bC="F11",K="F6",L="useraction",I="F3",J="keyinput",G="Insert",H="F8",E="End",F="/",S="Delete",T="*",bg="cmd",bc="F1",bo="F4",bj="Home",by="F2",bt="F12",X="PageDown",bB="F7",bA="Win",bz="F9",W="F10",ba="Right",bb="text",be="Escape",bh="webkit",bk="5",bq="3",bv="Meta",M="7",N="CapsLock",Y="input",bn="Control",bm="Space",bl="Tab",bs="Shift",br="Pause",bi="Unidentified",bp="qx.event.handler.Keyboard",r="mshtml|webkit",bu="6",O="off",P="Apps",bd="4",s="Alt",t="mshtml",V="2",Q="Scroll",R="1",U="8",bf="autoComplete",bx=",",bw="Backspace";
qx.Class.define(bp,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(bY){qx.core.Object.call(this);
this.__gA=bY;
this.__gB=bY.getWindow();
if(qx.core.Variant.isSet(C,bJ)){this.__gC=this.__gB;
}else{this.__gC=this.__gB.document.documentElement;
}this.__gD={};
this._initKeyObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{keyup:1,keydown:1,keypress:1,keyinput:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,isValidKeyIdentifier:function(cI){if(this._identifierToKeyCodeMap[cI]){return true;
}
if(cI.length!=1){return false;
}
if(cI>=x&&cI<=w){return true;
}
if(cI>=bI&&cI<=bH){return true;
}
switch(cI){case bL:case v:case T:case F:return true;
default:return false;
}}},members:{__gE:null,__gA:null,__gB:null,__gC:null,__gD:null,__gF:null,__gG:null,__gH:null,canHandleEvent:function(ce,cf){},registerEvent:function(cJ,cK,cL){},unregisterEvent:function(bV,bW,bX){},_fireInputEvent:function(co,cp){var cq=this.__gI();
if(cq&&cq.offsetWidth!=0){var event=qx.event.Registration.createEvent(J,qx.event.type.KeyInput,[co,cq,cp]);
this.__gA.dispatchEvent(cq,event);
}if(this.__gB){qx.event.Registration.fireEvent(this.__gB,L,qx.event.type.Data,[J]);
}},_fireSequenceEvent:function(cz,cA,cB){var cC=this.__gI();
var cD=cz.keyCode;
var event=qx.event.Registration.createEvent(cA,qx.event.type.KeySequence,[cz,cC,cB]);
this.__gA.dispatchEvent(cC,event);
if(qx.core.Variant.isSet(C,r)){if(cA==D&&event.getDefaultPrevented()){if(!this._isNonPrintableKeyCode(cD)&&!this._emulateKeyPress[cD]){this._fireSequenceEvent(cz,B,cB);
}}}if(this.__gB){qx.event.Registration.fireEvent(this.__gB,L,qx.event.type.Data,[cA]);
}},__gI:function(){var cg=this.__gA.getHandler(qx.event.handler.Focus);
var ch=cg.getActive();
if(!ch||ch.offsetWidth==0){ch=cg.getFocus();
}if(!ch||ch.offsetWidth==0){ch=this.__gA.getWindow().document.body;
}return ch;
},_initKeyObserver:function(){this.__gE=qx.lang.Function.listener(this.__gJ,this);
this.__gH=qx.lang.Function.listener(this.__gL,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__gC,z,this.__gE);
Event.addNativeListener(this.__gC,D,this.__gE);
Event.addNativeListener(this.__gC,B,this.__gH);
},_stopKeyObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__gC,z,this.__gE);
Event.removeNativeListener(this.__gC,D,this.__gE);
Event.removeNativeListener(this.__gC,B,this.__gH);

for(var cc in (this.__gG||{})){var cb=this.__gG[cc];
Event.removeNativeListener(cb.target,B,cb.callback);
}delete (this.__gG);
},__gJ:qx.event.GlobalError.observeMethod(qx.core.Variant.select(C,{"mshtml":function(e){e=window.event||e;
var h=e.keyCode;
var f=0;
var g=e.type;
if(!(this.__gD[h]==D&&g==D)){this._idealKeyHandler(h,f,g,e);
}if(g==D){if(this._isNonPrintableKeyCode(h)||this._emulateKeyPress[h]){this._idealKeyHandler(h,f,B,e);
}}this.__gD[h]=g;
},"gecko":function(cu){var cy=this._keyCodeFix[cu.keyCode]||cu.keyCode;
var cw=0;
var cx=cu.type;
if(qx.bom.client.Platform.WIN){var cv=cy?this._keyCodeToIdentifier(cy):this._charCodeToIdentifier(cw);

if(!(this.__gD[cv]==D&&cx==D)){this._idealKeyHandler(cy,cw,cx,cu);
}this.__gD[cv]=cx;
}else{this._idealKeyHandler(cy,cw,cx,cu);
}this.__gK(cu.target,cx,cy);
},"webkit":function(bM){var bP=0;
var bN=0;
var bO=bM.type;
if(qx.bom.client.Engine.VERSION<525.13){if(bO==z||bO==D){bP=this._charCode2KeyCode[bM.charCode]||bM.keyCode;
}else{if(this._charCode2KeyCode[bM.charCode]){bP=this._charCode2KeyCode[bM.charCode];
}else{bN=bM.charCode;
}}this._idealKeyHandler(bP,bN,bO,bM);
}else{bP=bM.keyCode;
this._idealKeyHandler(bP,bN,bO,bM);
if(bO==D){if(this._isNonPrintableKeyCode(bP)||this._emulateKeyPress[bP]){this._idealKeyHandler(bP,bN,B,bM);
}}this.__gD[bP]=bO;
}},"opera":function(cn){this.__gF=cn.keyCode;
this._idealKeyHandler(cn.keyCode,0,cn.type,cn);
}})),__gK:qx.core.Variant.select(C,{"gecko":function(ci,cj,ck){if(cj===D&&(ck==33||ck==34||ck==38||ck==40)&&ci.type==bb&&ci.tagName.toLowerCase()===Y&&ci.getAttribute(bf)!==O){if(!this.__gG){this.__gG={};
}var cm=qx.core.ObjectRegistry.toHashCode(ci);

if(this.__gG[cm]){return;
}var self=this;
this.__gG[cm]={target:ci,callback:function(cd){qx.bom.Event.stopPropagation(cd);
self.__gL(cd);
}};
var cl=qx.event.GlobalError.observeMethod(this.__gG[cm].callback);
qx.bom.Event.addNativeListener(ci,B,cl);
}},"default":null}),__gL:qx.event.GlobalError.observeMethod(qx.core.Variant.select(C,{"mshtml":function(d){d=window.event||d;

if(this._charCode2KeyCode[d.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[d.keyCode],0,d.type,d);
}else{this._idealKeyHandler(0,d.keyCode,d.type,d);
}},"gecko":function(i){var l=this._keyCodeFix[i.keyCode]||i.keyCode;
var j=i.charCode;
var k=i.type;
this._idealKeyHandler(l,j,k,i);
},"webkit":function(bQ){if(qx.bom.client.Engine.VERSION<525.13){var bT=0;
var bR=0;
var bS=bQ.type;

if(bS==z||bS==D){bT=this._charCode2KeyCode[bQ.charCode]||bQ.keyCode;
}else{if(this._charCode2KeyCode[bQ.charCode]){bT=this._charCode2KeyCode[bQ.charCode];
}else{bR=bQ.charCode;
}}this._idealKeyHandler(bT,bR,bS,bQ);
}else{if(this._charCode2KeyCode[bQ.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[bQ.keyCode],0,bQ.type,bQ);
}else{this._idealKeyHandler(0,bQ.keyCode,bQ.type,bQ);
}}},"opera":function(cr){var ct=cr.keyCode;
var cs=cr.type;
if(ct!=this.__gF){this._idealKeyHandler(0,this.__gF,cs,cr);
}else{if(this._keyCodeToIdentifierMap[cr.keyCode]){this._idealKeyHandler(cr.keyCode,0,cr.type,cr);
}else{this._idealKeyHandler(0,cr.keyCode,cr.type,cr);
}}}})),_idealKeyHandler:function(m,n,o,p){var q;
if(m||(!m&&!n)){q=this._keyCodeToIdentifier(m);
this._fireSequenceEvent(p,o,q);
}else{q=this._charCodeToIdentifier(n);
this._fireSequenceEvent(p,B,q);
this._fireInputEvent(p,n);
}},_specialCharCodeMap:{8:bw,9:bl,13:y,27:be,32:bm},_emulateKeyPress:qx.core.Variant.select(C,{"mshtml":{8:true,9:true},"webkit":{8:true,9:true,27:true},"default":{}}),_keyCodeToIdentifierMap:{16:bs,17:bn,18:s,20:N,224:bv,37:bG,38:bD,39:ba,40:bE,33:u,34:X,35:E,36:bj,45:G,46:S,112:bc,113:by,114:I,115:bo,116:bF,117:K,118:bB,119:H,120:bz,121:W,122:bC,123:bt,144:A,44:bK,145:Q,19:br,91:qx.bom.client.Platform.MAC?bg:bA,92:bA,93:qx.bom.client.Platform.MAC?bg:P},_numpadToCharCode:{96:x.charCodeAt(0),97:R.charCodeAt(0),98:V.charCodeAt(0),99:bq.charCodeAt(0),100:bd.charCodeAt(0),101:bk.charCodeAt(0),102:bu.charCodeAt(0),103:M.charCodeAt(0),104:U.charCodeAt(0),105:w.charCodeAt(0),106:T.charCodeAt(0),107:bL.charCodeAt(0),109:v.charCodeAt(0),110:bx.charCodeAt(0),111:F.charCodeAt(0)},_charCodeA:bI.charCodeAt(0),_charCodeZ:bH.charCodeAt(0),_charCode0:x.charCodeAt(0),_charCode9:w.charCodeAt(0),_isNonPrintableKeyCode:function(a){return this._keyCodeToIdentifierMap[a]?true:false;
},_isIdentifiableKeyCode:function(cH){if(cH>=this._charCodeA&&cH<=this._charCodeZ){return true;
}if(cH>=this._charCode0&&cH<=this._charCode9){return true;
}if(this._specialCharCodeMap[cH]){return true;
}if(this._numpadToCharCode[cH]){return true;
}if(this._isNonPrintableKeyCode(cH)){return true;
}return false;
},_keyCodeToIdentifier:function(b){if(this._isIdentifiableKeyCode(b)){var c=this._numpadToCharCode[b];

if(c){return String.fromCharCode(c);
}return (this._keyCodeToIdentifierMap[b]||this._specialCharCodeMap[b]||String.fromCharCode(b));
}else{return bi;
}},_charCodeToIdentifier:function(ca){return this._specialCharCodeMap[ca]||String.fromCharCode(ca).toUpperCase();
},_identifierToKeyCode:function(bU){return qx.event.handler.Keyboard._identifierToKeyCodeMap[bU]||bU.charCodeAt(0);
}},destruct:function(){this._stopKeyObserver();
this.__gF=this.__gA=this.__gB=this.__gC=this.__gD=null;
},defer:function(cE,cF){qx.event.Registration.addHandler(cE);
if(!cE._identifierToKeyCodeMap){cE._identifierToKeyCodeMap={};

for(var cG in cF._keyCodeToIdentifierMap){cE._identifierToKeyCodeMap[cF._keyCodeToIdentifierMap[cG]]=parseInt(cG,10);
}
for(var cG in cF._specialCharCodeMap){cE._identifierToKeyCodeMap[cF._specialCharCodeMap[cG]]=parseInt(cG,10);
}}
if(qx.core.Variant.isSet(C,t)){cF._charCode2KeyCode={13:13,27:27};
}else if(qx.core.Variant.isSet(C,bJ)){cF._keyCodeFix={12:cF._identifierToKeyCode(A)};
}else if(qx.core.Variant.isSet(C,bh)){if(qx.bom.client.Engine.VERSION<525.13){cF._charCode2KeyCode={63289:cF._identifierToKeyCode(A),63276:cF._identifierToKeyCode(u),63277:cF._identifierToKeyCode(X),63275:cF._identifierToKeyCode(E),63273:cF._identifierToKeyCode(bj),63234:cF._identifierToKeyCode(bG),63232:cF._identifierToKeyCode(bD),63235:cF._identifierToKeyCode(ba),63233:cF._identifierToKeyCode(bE),63272:cF._identifierToKeyCode(S),63302:cF._identifierToKeyCode(G),63236:cF._identifierToKeyCode(bc),63237:cF._identifierToKeyCode(by),63238:cF._identifierToKeyCode(I),63239:cF._identifierToKeyCode(bo),63240:cF._identifierToKeyCode(bF),63241:cF._identifierToKeyCode(K),63242:cF._identifierToKeyCode(bB),63243:cF._identifierToKeyCode(H),63244:cF._identifierToKeyCode(bz),63245:cF._identifierToKeyCode(W),63246:cF._identifierToKeyCode(bC),63247:cF._identifierToKeyCode(bt),63248:cF._identifierToKeyCode(bK),3:cF._identifierToKeyCode(y),12:cF._identifierToKeyCode(A),13:cF._identifierToKeyCode(y)};
}else{cF._charCode2KeyCode={13:13,27:27};
}}}});
})();
(function(){var v="qx.client",u="mouseup",t="click",s="mousedown",r="contextmenu",q="mousewheel",p="dblclick",o="mshtml",n="mouseover",m="mouseout",h="DOMMouseScroll",l="mousemove",k="on",g="mshtml|webkit|opera",f="useraction",j="gecko|webkit",i="qx.event.handler.Mouse";
qx.Class.define(i,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(w){qx.core.Object.call(this);
this.__eu=w;
this.__ev=w.getWindow();
this.__ew=this.__ev.document;
this._initButtonObserver();
this._initMoveObserver();
this._initWheelObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{__ex:null,__ey:null,__ez:null,__eA:null,__eB:null,__eu:null,__ev:null,__ew:null,canHandleEvent:function(d,e){},registerEvent:qx.bom.client.System.IPHONE?
function(K,L,M){K[k+L]=qx.lang.Function.returnNull;
}:qx.lang.Function.returnNull,unregisterEvent:qx.bom.client.System.IPHONE?
function(H,I,J){H[k+I]=undefined;
}:qx.lang.Function.returnNull,__eC:function(D,E,F){if(!F){F=D.target||D.srcElement;
}if(F&&F.nodeType){qx.event.Registration.fireEvent(F,E||D.type,E==q?qx.event.type.MouseWheel:qx.event.type.Mouse,[D,F,null,true,true]);
}qx.event.Registration.fireEvent(this.__ev,f,qx.event.type.Data,[E||D.type]);
},_initButtonObserver:function(){this.__ex=qx.lang.Function.listener(this._onButtonEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__ew,s,this.__ex);
Event.addNativeListener(this.__ew,u,this.__ex);
Event.addNativeListener(this.__ew,t,this.__ex);
Event.addNativeListener(this.__ew,p,this.__ex);
Event.addNativeListener(this.__ew,r,this.__ex);
},_initMoveObserver:function(){this.__ey=qx.lang.Function.listener(this._onMoveEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__ew,l,this.__ey);
Event.addNativeListener(this.__ew,n,this.__ey);
Event.addNativeListener(this.__ew,m,this.__ey);
},_initWheelObserver:function(){this.__ez=qx.lang.Function.listener(this._onWheelEvent,this);
var Event=qx.bom.Event;
var S=qx.core.Variant.isSet(v,g)?q:h;
var T=qx.core.Variant.isSet(v,o)?this.__ew:this.__ev;
Event.addNativeListener(T,S,this.__ez);
},_stopButtonObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__ew,s,this.__ex);
Event.removeNativeListener(this.__ew,u,this.__ex);
Event.removeNativeListener(this.__ew,t,this.__ex);
Event.removeNativeListener(this.__ew,p,this.__ex);
Event.removeNativeListener(this.__ew,r,this.__ex);
},_stopMoveObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__ew,l,this.__ey);
Event.removeNativeListener(this.__ew,n,this.__ey);
Event.removeNativeListener(this.__ew,m,this.__ey);
},_stopWheelObserver:function(){var Event=qx.bom.Event;
var B=qx.core.Variant.isSet(v,g)?q:h;
var C=qx.core.Variant.isSet(v,o)?this.__ew:this.__ev;
Event.removeNativeListener(C,B,this.__ez);
},_onMoveEvent:qx.event.GlobalError.observeMethod(function(N){this.__eC(N);
}),_onButtonEvent:qx.event.GlobalError.observeMethod(function(a){var b=a.type;
var c=a.target||a.srcElement;
if(qx.core.Variant.isSet(v,j)){if(c&&c.nodeType==3){c=c.parentNode;
}}
if(this.__eD){this.__eD(a,b,c);
}
if(this.__eF){this.__eF(a,b,c);
}this.__eC(a,b,c);

if(this.__eE){this.__eE(a,b,c);
}
if(this.__eG){this.__eG(a,b,c);
}this.__eA=b;
}),_onWheelEvent:qx.event.GlobalError.observeMethod(function(G){this.__eC(G,q);
}),__eD:qx.core.Variant.select(v,{"webkit":function(P,Q,R){if(qx.bom.client.Engine.VERSION<530){if(Q==r){this.__eC(P,u,R);
}}},"default":null}),__eE:qx.core.Variant.select(v,{"opera":function(U,V,W){if(V==u&&U.button==2){this.__eC(U,r,W);
}},"default":null}),__eF:qx.core.Variant.select(v,{"mshtml":function(X,Y,ba){if(Y==u&&this.__eA==t){this.__eC(X,s,ba);
}else if(Y==p){this.__eC(X,t,ba);
}},"default":null}),__eG:qx.core.Variant.select(v,{"mshtml":null,"default":function(x,y,z){switch(y){case s:this.__eB=z;
break;
case u:if(z!==this.__eB){var A=qx.dom.Hierarchy.getCommonParent(z,this.__eB);
this.__eC(x,t,A);
}}}})},destruct:function(){this._stopButtonObserver();
this._stopMoveObserver();
this._stopWheelObserver();
this.__eu=this.__ev=this.__ew=this.__eB=null;
},defer:function(O){qx.event.Registration.addHandler(O);
}});
})();
(function(){var a="qx.event.handler.Capture";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{capture:true,losecapture:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(i,j){},registerEvent:function(f,g,h){},unregisterEvent:function(b,c,d){}},defer:function(e){qx.event.Registration.addHandler(e);
}});
})();
(function(){var O="alias",N="copy",M="blur",L="mouseout",K="keydown",J="Ctrl",I="Shift",H="mousemove",G="move",F="mouseover",bf="Alt",be="keyup",bd="mouseup",bc="dragend",bb="on",ba="mousedown",Y="qxDraggable",X="drag",W="drop",V="qxDroppable",T="qx.event.handler.DragDrop",U="droprequest",R="dragstart",S="dragchange",P="dragleave",Q="dragover";
qx.Class.define(T,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(bm){qx.core.Object.call(this);
this.__iQ=bm;
this.__iR=bm.getWindow().document.documentElement;
this.__iQ.addListener(this.__iR,ba,this._onMouseDown,this);
this.__je();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:true},members:{__iQ:null,__iR:null,__iS:null,__iT:null,__iU:null,__iV:null,__iW:null,__iX:null,__iY:null,__ja:null,__jb:false,__jc:0,__jd:0,canHandleEvent:function(m,n){},registerEvent:function(j,k,l){},unregisterEvent:function(bh,bi,bj){},addType:function(a){this.__iU[a]=true;
},addAction:function(u){this.__iV[u]=true;
},supportsType:function(bk){return !!this.__iU[bk];
},supportsAction:function(v){return !!this.__iV[v];
},getData:function(s){if(!this.__jl||!this.__iS){throw new Error("This method must not be used outside the drop event listener!");
}
if(!this.__iU[s]){throw new Error("Unsupported data type: "+s+"!");
}
if(!this.__iX[s]){this.__iY=s;
this.__jg(U,this.__iT,this.__iS,false);
}
if(!this.__iX[s]){throw new Error("Please use a droprequest listener to the drag source to fill the manager with data!");
}return this.__iX[s]||null;
},getCurrentAction:function(){return this.__ja;
},addData:function(h,i){this.__iX[h]=i;
},getCurrentType:function(){return this.__iY;
},isSessionActive:function(){return this.__jb;
},__je:function(){this.__iU={};
this.__iV={};
this.__iW={};
this.__iX={};
},__jf:function(){if(this.__iT==null){return;
}var f=this.__iV;
var c=this.__iW;
var d=null;

if(this.__jl){if(c.Shift&&c.Ctrl&&f.alias){d=O;
}else if(c.Shift&&c.Alt&&f.copy){d=N;
}else if(c.Shift&&f.move){d=G;
}else if(c.Alt&&f.alias){d=O;
}else if(c.Ctrl&&f.copy){d=N;
}else if(f.move){d=G;
}else if(f.copy){d=N;
}else if(f.alias){d=O;
}}
if(d!=this.__ja){this.__ja=d;
this.__jg(S,this.__iT,this.__iS,false);
}},__jg:function(w,x,y,z,A){var C=qx.event.Registration;
var B=C.createEvent(w,qx.event.type.Drag,[z,A]);

if(x!==y){B.setRelatedTarget(y);
}return C.dispatchEvent(x,B);
},__jh:function(b){while(b&&b.nodeType==1){if(b.getAttribute(Y)==bb){return b;
}b=b.parentNode;
}return null;
},__ji:function(bl){while(bl&&bl.nodeType==1){if(bl.getAttribute(V)==bb){return bl;
}bl=bl.parentNode;
}return null;
},__jj:function(){this.__iT=null;
this.__iQ.removeListener(this.__iR,H,this._onMouseMove,this,true);
this.__iQ.removeListener(this.__iR,bd,this._onMouseUp,this,true);
qx.event.Registration.removeListener(window,M,this._onWindowBlur,this);
this.__je();
},__jk:function(){if(this.__jb){this.__iQ.removeListener(this.__iR,F,this._onMouseOver,this,true);
this.__iQ.removeListener(this.__iR,L,this._onMouseOut,this,true);
this.__iQ.removeListener(this.__iR,K,this._onKeyDown,this,true);
this.__iQ.removeListener(this.__iR,be,this._onKeyUp,this,true);
this.__jg(bc,this.__iT,this.__iS,false);
this.__jb=false;
}this.__jl=false;
this.__iS=null;
this.__jj();
},__jl:false,_onWindowBlur:function(e){this.__jk();
},_onKeyDown:function(e){var g=e.getKeyIdentifier();

switch(g){case bf:case J:case I:if(!this.__iW[g]){this.__iW[g]=true;
this.__jf();
}}},_onKeyUp:function(e){var bg=e.getKeyIdentifier();

switch(bg){case bf:case J:case I:if(this.__iW[bg]){this.__iW[bg]=false;
this.__jf();
}}},_onMouseDown:function(e){if(this.__jb){return;
}var t=this.__jh(e.getTarget());

if(t){this.__jc=e.getDocumentLeft();
this.__jd=e.getDocumentTop();
this.__iT=t;
this.__iQ.addListener(this.__iR,H,this._onMouseMove,this,true);
this.__iQ.addListener(this.__iR,bd,this._onMouseUp,this,true);
qx.event.Registration.addListener(window,M,this._onWindowBlur,this);
}},_onMouseUp:function(e){if(this.__jl){this.__jg(W,this.__iS,this.__iT,false,e);
}if(this.__jb){e.stopPropagation();
}this.__jk();
},_onMouseMove:function(e){if(this.__jb){if(!this.__jg(X,this.__iT,this.__iS,true,e)){this.__jk();
}}else{if(Math.abs(e.getDocumentLeft()-this.__jc)>3||Math.abs(e.getDocumentTop()-this.__jd)>3){if(this.__jg(R,this.__iT,this.__iS,true,e)){this.__jb=true;
this.__iQ.addListener(this.__iR,F,this._onMouseOver,this,true);
this.__iQ.addListener(this.__iR,L,this._onMouseOut,this,true);
this.__iQ.addListener(this.__iR,K,this._onKeyDown,this,true);
this.__iQ.addListener(this.__iR,be,this._onKeyUp,this,true);
var r=this.__iW;
r.Ctrl=e.isCtrlPressed();
r.Shift=e.isShiftPressed();
r.Alt=e.isAltPressed();
this.__jf();
}else{this.__jg(bc,this.__iT,this.__iS,false);
this.__jj();
}}}},_onMouseOver:function(e){var D=e.getTarget();
var E=this.__ji(D);

if(E&&E!=this.__iS){this.__jl=this.__jg(Q,E,this.__iT,true,e);
this.__iS=E;
this.__jf();
}},_onMouseOut:function(e){var p=this.__ji(e.getTarget());
var o=this.__ji(e.getRelatedTarget());

if(p&&p!==o&&p==this.__iS){this.__jg(P,this.__iS,o,false,e);
this.__iS=null;
this.__jl=false;
qx.event.Timer.once(this.__jf,this,0);
}}},destruct:function(){this.__iT=this.__iS=this.__iQ=this.__iR=this.__iU=this.__iV=this.__iW=this.__iX=null;
},defer:function(q){qx.event.Registration.addHandler(q);
}});
})();
(function(){var f="-",e="qx.event.handler.Element";
qx.Class.define(e,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(g){qx.core.Object.call(this);
this._manager=g;
this._registeredEvents={};
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{abort:true,scroll:true,select:true,reset:true,submit:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(n,o){},registerEvent:function(h,i,j){var m=qx.core.ObjectRegistry.toHashCode(h);
var k=m+f+i;
var l=qx.lang.Function.listener(this._onNative,this,k);
qx.bom.Event.addNativeListener(h,i,l);
this._registeredEvents[k]={element:h,type:i,listener:l};
},unregisterEvent:function(s,t,u){var x=this._registeredEvents;

if(!x){return;
}var y=qx.core.ObjectRegistry.toHashCode(s);
var v=y+f+t;
var w=this._registeredEvents[v];

if(w){qx.bom.Event.removeNativeListener(s,t,w.listener);
}delete this._registeredEvents[v];
},_onNative:qx.event.GlobalError.observeMethod(function(a,b){var d=this._registeredEvents;

if(!d){return;
}var c=d[b];
qx.event.Registration.fireNonBubblingEvent(c.element,c.type,qx.event.type.Native,[a]);
})},destruct:function(){var p;
var q=this._registeredEvents;

for(var r in q){p=q[r];
qx.bom.Event.removeNativeListener(p.element,p.type,p.listener);
}this._manager=this._registeredEvents=null;
},defer:function(z){qx.event.Registration.addHandler(z);
}});
})();
(function(){var d="qx.event.handler.Appear",c="disappear",b="appear";
qx.Class.define(d,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(a){qx.core.Object.call(this);
this.__co=a;
this.__cp={};
qx.event.handler.Appear.__cq[this.$$hash]=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{appear:true,disappear:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,__cq:{},refresh:function(){var j=this.__cq;

for(var k in j){j[k].refresh();
}}},members:{__co:null,__cp:null,canHandleEvent:function(l,m){},registerEvent:function(t,u,v){var w=qx.core.ObjectRegistry.toHashCode(t)+u;
var x=this.__cp;

if(x&&!x[w]){x[w]=t;
t.$$displayed=t.offsetWidth>0;
}},unregisterEvent:function(e,f,g){var h=qx.core.ObjectRegistry.toHashCode(e)+f;
var i=this.__cp;

if(!i){return;
}
if(i[h]){delete i[h];
}},refresh:function(){var q=this.__cp;
var r;

for(var p in q){r=q[p];
var n=r.offsetWidth>0;

if((!!r.$$displayed)!==n){r.$$displayed=n;
var o=qx.event.Registration.createEvent(n?b:c);
this.__co.dispatchEvent(r,o);
}}}},destruct:function(){this.__co=this.__cp=null;
delete qx.event.handler.Appear.__cq[this.$$hash];
},defer:function(s){qx.event.Registration.addHandler(s);
}});
})();
(function(){var u="mshtml",t="",s="qx.client",r=" ",q=">",p="<",o="='",n="none",m="<INPUT TYPE='RADIO' NAME='RADIOTEST' VALUE='Second Choice'>",k="qx.bom.Element",f="' ",h="div",g="></";
qx.Class.define(k,{statics:{__kf:{"onload":true,"onpropertychange":true,"oninput":true,"onchange":true,"name":true,"type":true,"checked":true,"disabled":true},__kg:{},__kh:{},allowCreationWithMarkup:function(O){if(!O){O=window;
}var P=O.location.href;

if(qx.bom.Element.__kh[P]==undefined){try{O.document.createElement(m);
qx.bom.Element.__kh[P]=true;
}catch(e){qx.bom.Element.__kh[P]=false;
}}return qx.bom.Element.__kh[P];
},getHelperElement:function(K){if(!K){K=window;
}var M=K.location.href;

if(!qx.bom.Element.__kg[M]){var L=qx.bom.Element.__kg[M]=K.document.createElement(h);
if(qx.bom.client.Engine.WEBKIT){L.style.display=n;
K.document.body.appendChild(L);
}}return qx.bom.Element.__kg[M];
},create:function(name,be,bf){if(!bf){bf=window;
}
if(!name){throw new Error("The tag name is missing!");
}var bh=this.__kf;
var bg=t;

for(var bj in be){if(bh[bj]){bg+=bj+o+be[bj]+f;
}}var bk;
if(bg!=t){if(qx.bom.Element.allowCreationWithMarkup(bf)){bk=bf.document.createElement(p+name+r+bg+q);
}else{var bi=qx.bom.Element.getHelperElement(bf);
bi.innerHTML=p+name+r+bg+g+name+q;
bk=bi.firstChild;
}}else{bk=bf.document.createElement(name);
}
for(var bj in be){if(!bh[bj]){qx.bom.element.Attribute.set(bk,bj,be[bj]);
}}return bk;
},empty:function(bd){return bd.innerHTML=t;
},addListener:function(a,b,c,self,d){return qx.event.Registration.addListener(a,b,c,self,d);
},removeListener:function(Q,R,S,self,T){return qx.event.Registration.removeListener(Q,R,S,self,T);
},removeListenerById:function(Y,ba){return qx.event.Registration.removeListenerById(Y,ba);
},hasListener:function(U,V,W){return qx.event.Registration.hasListener(U,V,W);
},focus:function(X){qx.event.Registration.getManager(X).getHandler(qx.event.handler.Focus).focus(X);
},blur:function(I){qx.event.Registration.getManager(I).getHandler(qx.event.handler.Focus).blur(I);
},activate:function(v){qx.event.Registration.getManager(v).getHandler(qx.event.handler.Focus).activate(v);
},deactivate:function(N){qx.event.Registration.getManager(N).getHandler(qx.event.handler.Focus).deactivate(N);
},capture:function(bb,bc){qx.event.Registration.getManager(bb).getDispatcher(qx.event.dispatch.MouseCapture).activateCapture(bb,bc);
},releaseCapture:function(J){qx.event.Registration.getManager(J).getDispatcher(qx.event.dispatch.MouseCapture).releaseCapture(J);
},clone:function(w,x){var A;

if(x||(qx.core.Variant.isSet(s,u)&&!qx.xml.Document.isXmlDocument(w))){var E=qx.event.Registration.getManager(w);
var y=qx.dom.Hierarchy.getDescendants(w);
y.push(w);
}if(qx.core.Variant.isSet(s,u)){for(var i=0,l=y.length;i<l;i++){E.toggleAttachedEvents(y[i],false);
}}var A=w.cloneNode(true);
if(qx.core.Variant.isSet(s,u)){for(var i=0,l=y.length;i<l;i++){E.toggleAttachedEvents(y[i],true);
}}if(x===true){var H=qx.dom.Hierarchy.getDescendants(A);
H.push(A);
var z,C,G,B;

for(var i=0,F=y.length;i<F;i++){G=y[i];
z=E.serializeListeners(G);

if(z.length>0){C=H[i];

for(var j=0,D=z.length;j<D;j++){B=z[j];
E.addListener(C,B.type,B.handler,B.self,B.capture);
}}}}return A;
}}});
})();
(function(){var a="qx.event.type.Dom";
qx.Class.define(a,{extend:qx.event.type.Native,statics:{SHIFT_MASK:1,CTRL_MASK:2,ALT_MASK:4,META_MASK:8},members:{_cloneNativeEvent:function(b,c){var c=qx.event.type.Native.prototype._cloneNativeEvent.call(this,b,c);
c.shiftKey=b.shiftKey;
c.ctrlKey=b.ctrlKey;
c.altKey=b.altKey;
c.metaKey=b.metaKey;
return c;
},getModifiers:function(){var e=0;
var d=this._native;

if(d.shiftKey){e|=qx.event.type.Dom.SHIFT_MASK;
}
if(d.ctrlKey){e|=qx.event.type.Dom.CTRL_MASK;
}
if(d.altKey){e|=qx.event.type.Dom.ALT_MASK;
}
if(d.metaKey){e|=qx.event.type.Dom.META_MASK;
}return e;
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
(function(){var bf="qx.client",be="mousedown",bd="mouseup",bc="blur",bb="focus",ba="on",Y="DOMFocusOut",X="selectstart",W="DOMFocusIn",V="focusin",bA="focusout",bz="draggesture",by="onmousedown",bx="qx.event.handler.Focus",bw="_applyFocus",bv="deactivate",bu="textarea",bt="onfocusout",bs="_applyActive",br='character',bm="input",bn="onmouseup",bk="onfocusin",bl="qxSelectable",bi="tabIndex",bj="off",bg="activate",bh="mshtml",bo="qxKeepFocus",bp="onselectstart",bq="qxKeepActive";
qx.Class.define(bx,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(y){qx.core.Object.call(this);
this._manager=y;
this._window=y.getWindow();
this._document=this._window.document;
this._root=this._document.documentElement;
this._body=this._document.body;
this._initObserver();
},properties:{active:{apply:bs,nullable:true},focus:{apply:bw,nullable:true}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{focus:1,blur:1,focusin:1,focusout:1,activate:1,deactivate:1},IGNORE_CAN_HANDLE:true,FOCUSABLE_ELEMENTS:qx.core.Variant.select("qx.client",{"mshtml|gecko":{a:1,body:1,button:1,frame:1,iframe:1,img:1,input:1,object:1,select:1,textarea:1},"opera|webkit":{button:1,input:1,select:1,textarea:1}})},members:{__jo:null,__jp:null,__jq:null,__jr:null,__js:null,__jt:null,__ju:null,__jv:null,__jw:null,__jx:null,canHandleEvent:function(A,B){},registerEvent:function(bF,bG,bH){},unregisterEvent:function(o,p,q){},focus:function(K){if(qx.core.Variant.isSet(bf,bh)){window.setTimeout(function(){try{K.focus();
var bK=qx.bom.Selection.get(K);

if(bK.length==0){var bL=K.createTextRange();
bL.moveStart(br,K.value.length);
bL.collapse();
bL.select();
}}catch(b){}},0);
}else{try{K.focus();
}catch(m){}}this.setFocus(K);
this.setActive(K);
},activate:function(G){this.setActive(G);
},blur:function(bO){try{bO.blur();
}catch(bQ){}
if(this.getActive()===bO){this.resetActive();
}
if(this.getFocus()===bO){this.resetFocus();
}},deactivate:function(bP){if(this.getActive()===bP){this.resetActive();
}},tryActivate:function(bD){var bE=this.__jM(bD);

if(bE){this.setActive(bE);
}},__jy:function(P,Q,R,S){var U=qx.event.Registration;
var T=U.createEvent(R,qx.event.type.Focus,[P,Q,S]);
U.dispatchEvent(P,T);
},_windowFocused:true,__jz:function(){if(this._windowFocused){this._windowFocused=false;
this.__jy(this._window,null,bc,false);
}},__jA:function(){if(!this._windowFocused){this._windowFocused=true;
this.__jy(this._window,null,bb,false);
}},_initObserver:qx.core.Variant.select(bf,{"gecko":function(){this.__jo=qx.lang.Function.listener(this.__jG,this);
this.__jp=qx.lang.Function.listener(this.__jH,this);
this.__jq=qx.lang.Function.listener(this.__jF,this);
this.__jr=qx.lang.Function.listener(this.__jE,this);
this.__js=qx.lang.Function.listener(this.__jB,this);
this._document.addEventListener(be,this.__jo,true);
this._document.addEventListener(bd,this.__jp,true);
this._window.addEventListener(bb,this.__jq,true);
this._window.addEventListener(bc,this.__jr,true);
this._window.addEventListener(bz,this.__js,true);
},"mshtml":function(){this.__jo=qx.lang.Function.listener(this.__jG,this);
this.__jp=qx.lang.Function.listener(this.__jH,this);
this.__ju=qx.lang.Function.listener(this.__jC,this);
this.__jv=qx.lang.Function.listener(this.__jD,this);
this.__jt=qx.lang.Function.listener(this.__jJ,this);
this._document.attachEvent(by,this.__jo);
this._document.attachEvent(bn,this.__jp);
this._document.attachEvent(bk,this.__ju);
this._document.attachEvent(bt,this.__jv);
this._document.attachEvent(bp,this.__jt);
},"webkit":function(){this.__jo=qx.lang.Function.listener(this.__jG,this);
this.__jp=qx.lang.Function.listener(this.__jH,this);
this.__jv=qx.lang.Function.listener(this.__jD,this);
this.__jq=qx.lang.Function.listener(this.__jF,this);
this.__jr=qx.lang.Function.listener(this.__jE,this);
this.__jt=qx.lang.Function.listener(this.__jJ,this);
this._document.addEventListener(be,this.__jo,true);
this._document.addEventListener(bd,this.__jp,true);
this._document.addEventListener(X,this.__jt,false);
this._window.addEventListener(Y,this.__jv,true);
this._window.addEventListener(bb,this.__jq,true);
this._window.addEventListener(bc,this.__jr,true);
},"opera":function(){this.__jo=qx.lang.Function.listener(this.__jG,this);
this.__jp=qx.lang.Function.listener(this.__jH,this);
this.__ju=qx.lang.Function.listener(this.__jC,this);
this.__jv=qx.lang.Function.listener(this.__jD,this);
this._document.addEventListener(be,this.__jo,true);
this._document.addEventListener(bd,this.__jp,true);
this._window.addEventListener(W,this.__ju,true);
this._window.addEventListener(Y,this.__jv,true);
}}),_stopObserver:qx.core.Variant.select(bf,{"gecko":function(){this._document.removeEventListener(be,this.__jo,true);
this._document.removeEventListener(bd,this.__jp,true);
this._window.removeEventListener(bb,this.__jq,true);
this._window.removeEventListener(bc,this.__jr,true);
this._window.removeEventListener(bz,this.__js,true);
},"mshtml":function(){var Event=qx.bom.Event;
Event.removeNativeListener(this._document,be,this.__jo);
Event.removeNativeListener(this._document,bd,this.__jp);
Event.removeNativeListener(this._document,V,this.__ju);
Event.removeNativeListener(this._document,bA,this.__jv);
Event.removeNativeListener(this._document,X,this.__jt);
},"webkit":function(){this._document.removeEventListener(be,this.__jo,true);
this._document.removeEventListener(bd,this.__jp,true);
this._document.removeEventListener(X,this.__jt,false);
this._window.removeEventListener(Y,this.__jv,true);
this._window.removeEventListener(bb,this.__jq,true);
this._window.removeEventListener(bc,this.__jr,true);
},"opera":function(){this._document.removeEventListener(be,this.__jo,true);
this._document.removeEventListener(bd,this.__jp,true);
this._window.removeEventListener(W,this.__ju,true);
this._window.removeEventListener(Y,this.__jv,true);
}}),__jB:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bf,{"gecko":function(e){if(!this.__jN(e.target)){qx.bom.Event.preventDefault(e);
}},"default":null})),__jC:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bf,{"mshtml":function(e){this.__jA();
var bC=e.srcElement;
var bB=this.__jL(bC);

if(bB){this.setFocus(bB);
}this.tryActivate(bC);
},"opera":function(e){var bM=e.target;

if(bM==this._document||bM==this._window){this.__jA();

if(this.__jw){this.setFocus(this.__jw);
delete this.__jw;
}
if(this.__jx){this.setActive(this.__jx);
delete this.__jx;
}}else{this.setFocus(bM);
this.tryActivate(bM);
if(!this.__jN(bM)){bM.selectionStart=0;
bM.selectionEnd=0;
}}},"default":null})),__jD:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bf,{"mshtml":function(e){if(!e.toElement){this.__jz();
this.resetFocus();
this.resetActive();
}},"webkit":function(e){var a=e.target;

if(a===this.getFocus()){this.resetFocus();
}
if(a===this.getActive()){this.resetActive();
}},"opera":function(e){var N=e.target;

if(N==this._document){this.__jz();
this.__jw=this.getFocus();
this.__jx=this.getActive();
this.resetFocus();
this.resetActive();
}else{if(N===this.getFocus()){this.resetFocus();
}
if(N===this.getActive()){this.resetActive();
}}},"default":null})),__jE:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bf,{"gecko":function(e){if(e.target===this._window||e.target===this._document){this.__jz();
this.resetActive();
this.resetFocus();
}},"webkit":function(e){if(e.target===this._window||e.target===this._document){this.__jz();
this.__jw=this.getFocus();
this.__jx=this.getActive();
this.resetActive();
this.resetFocus();
}},"default":null})),__jF:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bf,{"gecko":function(e){var bN=e.target;

if(bN===this._window||bN===this._document){this.__jA();
bN=this._body;
}this.setFocus(bN);
this.tryActivate(bN);
},"webkit":function(e){var O=e.target;

if(O===this._window||O===this._document){this.__jA();

if(this.__jw){this.setFocus(this.__jw);
delete this.__jw;
}
if(this.__jx){this.setActive(this.__jx);
delete this.__jx;
}}else{this.setFocus(O);
this.tryActivate(O);
}},"default":null})),__jG:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bf,{"gecko":function(e){var F=this.__jL(e.target);

if(!F){qx.bom.Event.preventDefault(e);
}else if(F===this._body){this.setFocus(F);
}},"mshtml":function(e){var bJ=e.srcElement;
var bI=this.__jL(bJ);

if(bI){if(!this.__jN(bJ)){bJ.unselectable=ba;
try{document.selection.empty();
}catch(e){}try{bI.focus();
}catch(e){}}}else{qx.bom.Event.preventDefault(e);
if(!this.__jN(bJ)){bJ.unselectable=ba;
}}},"webkit":function(e){var h=e.target;
var g=this.__jL(h);

if(g){this.setFocus(g);
}else{qx.bom.Event.preventDefault(e);
}},"opera":function(e){var E=e.target;
var C=this.__jL(E);

if(!this.__jN(E)){qx.bom.Event.preventDefault(e);
if(C){var D=this.getFocus();

if(D&&D.selectionEnd){D.selectionStart=0;
D.selectionEnd=0;
D.blur();
}if(C){this.setFocus(C);
}}}else if(C){this.setFocus(C);
}},"default":null})),__jH:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bf,{"mshtml":function(e){var J=e.srcElement;

if(J.unselectable){J.unselectable=bj;
}this.tryActivate(this.__jI(J));
},"gecko":function(e){var n=e.target;

while(n&&n.offsetWidth===undefined){n=n.parentNode;
}
if(n){this.tryActivate(n);
}},"webkit|opera":function(e){this.tryActivate(this.__jI(e.target));
},"default":null})),__jI:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bf,{"mshtml|webkit":function(t){var u=this.getFocus();

if(u&&t!=u&&(u.nodeName.toLowerCase()===bm||u.nodeName.toLowerCase()===bu)){t=u;
}return t;
},"default":function(i){return i;
}})),__jJ:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bf,{"mshtml|webkit":function(e){var x=qx.bom.client.Engine.MSHTML?e.srcElement:e.target;

if(!this.__jN(x)){qx.bom.Event.preventDefault(e);
}},"default":null})),__jK:function(j){var k=qx.bom.element.Attribute.get(j,bi);

if(k>=1){return true;
}var l=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(k>=0&&l[j.tagName]){return true;
}return false;
},__jL:function(z){while(z&&z.nodeType===1){if(z.getAttribute(bo)==ba){return null;
}
if(this.__jK(z)){return z;
}z=z.parentNode;
}return this._body;
},__jM:function(H){var I=H;

while(H&&H.nodeType===1){if(H.getAttribute(bq)==ba){return null;
}H=H.parentNode;
}return I;
},__jN:function(L){while(L&&L.nodeType===1){var M=L.getAttribute(bl);

if(M!=null){return M===ba;
}L=L.parentNode;
}return true;
},_applyActive:function(v,w){if(w){this.__jy(w,v,bv,true);
}
if(v){this.__jy(v,w,bg,true);
}},_applyFocus:function(r,s){if(s){this.__jy(s,r,bA,true);
}
if(r){this.__jy(r,s,V,true);
}if(s){this.__jy(s,r,bc,false);
}
if(r){this.__jy(r,s,bb,false);
}}},destruct:function(){this._stopObserver();
this._manager=this._window=this._document=this._root=this._body=this.__jO=null;
},defer:function(c){qx.event.Registration.addHandler(c);
var d=c.FOCUSABLE_ELEMENTS;

for(var f in d){d[f.toUpperCase()]=1;
}}});
})();
(function(){var q="qx.client",p="character",o="EndToEnd",n="input",m="textarea",l="StartToStart",k='character',j="qx.bom.Selection",i="button",h="#text",g="body";
qx.Class.define(j,{statics:{getSelectionObject:qx.core.Variant.select(q,{"mshtml":function(R){return R.selection;
},"default":function(br){return qx.dom.Node.getWindow(br).getSelection();
}}),get:qx.core.Variant.select(q,{"mshtml":function(bg){var bh=qx.bom.Range.get(qx.dom.Node.getDocument(bg));
return bh.text;
},"default":function(H){if(this.__kB(H)){return H.value.substring(H.selectionStart,H.selectionEnd);
}else{return this.getSelectionObject(qx.dom.Node.getDocument(H)).toString();
}}}),getLength:qx.core.Variant.select(q,{"mshtml":function(bw){var by=this.get(bw);
var bx=qx.util.StringSplit.split(by,/\r\n/);
return by.length-(bx.length-1);
},"opera":function(a){var f,d,b;

if(this.__kB(a)){var e=a.selectionStart;
var c=a.selectionEnd;
f=a.value.substring(e,c);
d=c-e;
}else{f=qx.bom.Selection.get(a);
d=f.length;
}b=qx.util.StringSplit.split(f,/\r\n/);
return d-(b.length-1);
},"default":function(bi){if(this.__kB(bi)){return bi.selectionEnd-bi.selectionStart;
}else{return this.get(bi).length;
}}}),getStart:qx.core.Variant.select(q,{"mshtml":function(V){if(this.__kB(V)){var bb=qx.bom.Range.get();
if(!V.contains(bb.parentElement())){return -1;
}var bc=qx.bom.Range.get(V);
var ba=V.value.length;
bc.moveToBookmark(bb.getBookmark());
bc.moveEnd(k,ba);
return ba-bc.text.length;
}else{var bc=qx.bom.Range.get(V);
var X=bc.parentElement();
var bd=qx.bom.Range.get();
bd.moveToElementText(X);
var W=qx.bom.Range.get(qx.dom.Node.getBodyElement(V));
W.setEndPoint(l,bc);
W.setEndPoint(o,bd);
if(bd.compareEndPoints(l,W)==0){return 0;
}var Y;
var be=0;

while(true){Y=W.moveStart(p,-1);
if(bd.compareEndPoints(l,W)==0){break;
}if(Y==0){break;
}else{be++;
}}return ++be;
}},"gecko|webkit":function(bt){if(this.__kB(bt)){return bt.selectionStart;
}else{var bv=qx.dom.Node.getDocument(bt);
var bu=this.getSelectionObject(bv);
if(bu.anchorOffset<bu.focusOffset){return bu.anchorOffset;
}else{return bu.focusOffset;
}}},"default":function(bq){if(this.__kB(bq)){return bq.selectionStart;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(bq)).anchorOffset;
}}}),getEnd:qx.core.Variant.select(q,{"mshtml":function(r){if(this.__kB(r)){var w=qx.bom.Range.get();
if(!r.contains(w.parentElement())){return -1;
}var x=qx.bom.Range.get(r);
var v=r.value.length;
x.moveToBookmark(w.getBookmark());
x.moveStart(k,-v);
return x.text.length;
}else{var x=qx.bom.Range.get(r);
var t=x.parentElement();
var y=qx.bom.Range.get();
y.moveToElementText(t);
var v=y.text.length;
var s=qx.bom.Range.get(qx.dom.Node.getBodyElement(r));
s.setEndPoint(o,x);
s.setEndPoint(l,y);
if(y.compareEndPoints(o,s)==0){return v-1;
}var u;
var z=0;

while(true){u=s.moveEnd(p,1);
if(y.compareEndPoints(o,s)==0){break;
}if(u==0){break;
}else{z++;
}}return v-(++z);
}},"gecko|webkit":function(S){if(this.__kB(S)){return S.selectionEnd;
}else{var U=qx.dom.Node.getDocument(S);
var T=this.getSelectionObject(U);
if(T.focusOffset>T.anchorOffset){return T.focusOffset;
}else{return T.anchorOffset;
}}},"default":function(bf){if(this.__kB(bf)){return bf.selectionEnd;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(bf)).focusOffset;
}}}),__kB:function(bs){return qx.dom.Node.isElement(bs)&&(bs.nodeName.toLowerCase()==n||bs.nodeName.toLowerCase()==m);
},set:qx.core.Variant.select(q,{"mshtml":function(M,N,O){var P;
if(qx.dom.Node.isDocument(M)){M=M.body;
}
if(qx.dom.Node.isElement(M)||qx.dom.Node.isText(M)){switch(M.nodeName.toLowerCase()){case n:case m:case i:if(O===undefined){O=M.value.length;
}
if(N>=0&&N<=M.value.length&&O>=0&&O<=M.value.length){P=qx.bom.Range.get(M);
P.collapse(true);
P.moveStart(p,N);
P.moveEnd(p,O-N);
P.select();
return true;
}break;
case h:if(O===undefined){O=M.nodeValue.length;
}
if(N>=0&&N<=M.nodeValue.length&&O>=0&&O<=M.nodeValue.length){P=qx.bom.Range.get(qx.dom.Node.getBodyElement(M));
P.moveToElementText(M.parentNode);
P.collapse(true);
P.moveStart(p,N);
P.moveEnd(p,O-N);
P.select();
return true;
}break;
default:if(O===undefined){O=M.childNodes.length-1;
}if(M.childNodes[N]&&M.childNodes[O]){P=qx.bom.Range.get(qx.dom.Node.getBodyElement(M));
P.moveToElementText(M.childNodes[N]);
P.collapse(true);
var Q=qx.bom.Range.get(qx.dom.Node.getBodyElement(M));
Q.moveToElementText(M.childNodes[O]);
P.setEndPoint(o,Q);
P.select();
return true;
}}}return false;
},"default":function(A,B,C){var G=A.nodeName.toLowerCase();

if(qx.dom.Node.isElement(A)&&(G==n||G==m)){if(C===undefined){C=A.value.length;
}if(B>=0&&B<=A.value.length&&C>=0&&C<=A.value.length){A.focus();
A.select();
A.setSelectionRange(B,C);
return true;
}}else{var E=false;
var F=qx.dom.Node.getWindow(A).getSelection();
var D=qx.bom.Range.get(A);
if(qx.dom.Node.isText(A)){if(C===undefined){C=A.length;
}
if(B>=0&&B<A.length&&C>=0&&C<=A.length){E=true;
}}else if(qx.dom.Node.isElement(A)){if(C===undefined){C=A.childNodes.length-1;
}
if(B>=0&&A.childNodes[B]&&C>=0&&A.childNodes[C]){E=true;
}}else if(qx.dom.Node.isDocument(A)){A=A.body;

if(C===undefined){C=A.childNodes.length-1;
}
if(B>=0&&A.childNodes[B]&&C>=0&&A.childNodes[C]){E=true;
}}
if(E){if(!F.isCollapsed){F.collapseToStart();
}D.setStart(A,B);
if(qx.dom.Node.isText(A)){D.setEnd(A,C);
}else{D.setEndAfter(A.childNodes[C]);
}if(F.rangeCount>0){F.removeAllRanges();
}F.addRange(D);
return true;
}}return false;
}}),setAll:function(bp){return qx.bom.Selection.set(bp,0);
},clear:qx.core.Variant.select(q,{"mshtml":function(I){var J=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(I));
var K=qx.bom.Range.get(I);
var parent=K.parentElement();
var L=qx.bom.Range.get(qx.dom.Node.getDocument(I));
if(parent==L.parentElement()&&parent==I){J.empty();
}},"default":function(bj){var bl=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(bj));
var bn=bj.nodeName.toLowerCase();
if(qx.dom.Node.isElement(bj)&&(bn==n||bn==m)){bj.setSelectionRange(0,0);
qx.bom.Element.blur(bj);
}else if(qx.dom.Node.isDocument(bj)||bn==g){bl.collapse(bj.body?bj.body:bj,0);
}else{var bm=qx.bom.Range.get(bj);

if(!bm.collapsed){var bo;
var bk=bm.commonAncestorContainer;
if(qx.dom.Node.isElement(bj)&&qx.dom.Node.isText(bk)){bo=bk.parentNode;
}else{bo=bk;
}
if(bo==bj){bl.collapse(bj,0);
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
(function(){var a="qx.event.type.Focus";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(b,c,d){qx.event.type.Event.prototype.init.call(this,d,false);
this._target=b;
this._relatedTarget=c;
return this;
}}});
})();
(function(){var j="",i="undefined",h="qx.client",g="readOnly",f="accessKey",e="qx.bom.element.Attribute",d="rowSpan",c="vAlign",b="className",a="textContent",y="'",x="htmlFor",w="longDesc",v="cellSpacing",u="frameBorder",t="='",s="useMap",r="innerText",q="innerHTML",p="tabIndex",n="dateTime",o="maxLength",l="mshtml",m="cellPadding",k="colSpan";
qx.Class.define(e,{statics:{__gM:{names:{"class":b,"for":x,html:q,text:qx.core.Variant.isSet(h,l)?r:a,colspan:k,rowspan:d,valign:c,datetime:n,accesskey:f,tabindex:p,maxlength:o,readonly:g,longdesc:w,cellpadding:m,cellspacing:v,frameborder:u,usemap:s},runtime:{"html":1,"text":1},bools:{compact:1,nowrap:1,ismap:1,declare:1,noshade:1,checked:1,disabled:1,readOnly:1,multiple:1,selected:1,noresize:1,defer:1,allowTransparency:1},property:{$$html:1,$$widget:1,disabled:1,checked:1,readOnly:1,multiple:1,selected:1,value:1,maxLength:1,className:1,innerHTML:1,innerText:1,textContent:1,htmlFor:1,tabIndex:1},qxProperties:{$$widget:1,$$html:1},propertyDefault:{disabled:false,checked:false,readOnly:false,multiple:false,selected:false,value:j,className:j,innerHTML:j,innerText:j,textContent:j,htmlFor:j,tabIndex:0,maxLength:qx.core.Variant.select(h,{"mshtml":2147483647,"webkit":524288,"default":-1})},removeableProperties:{disabled:1,multiple:1,maxLength:1},original:{href:1,src:1,type:1}},compile:function(C){var D=[];
var F=this.__gM.runtime;

for(var E in C){if(!F[E]){D.push(E,t,C[E],y);
}}return D.join(j);
},get:qx.core.Variant.select(h,{"mshtml":function(K,name){var M=this.__gM;
var L;
name=M.names[name]||name;
if(M.original[name]){L=K.getAttribute(name,2);
}else if(M.property[name]){L=K[name];

if(typeof M.propertyDefault[name]!==i&&L==M.propertyDefault[name]){if(typeof M.bools[name]===i){return null;
}else{return L;
}}}else{L=K.getAttribute(name);
}if(M.bools[name]){return !!L;
}return L;
},"default":function(z,name){var B=this.__gM;
var A;
name=B.names[name]||name;
if(B.property[name]){A=z[name];

if(typeof B.propertyDefault[name]!==i&&A==B.propertyDefault[name]){if(typeof B.bools[name]===i){return null;
}else{return A;
}}}else{A=z.getAttribute(name);
}if(B.bools[name]){return !!A;
}return A;
}}),set:function(G,name,H){var I=this.__gM;
name=I.names[name]||name;
if(I.bools[name]){H=!!H;
}if(I.property[name]&&(!(G[name]===undefined)||I.qxProperties[name])){if(H==null){if(I.removeableProperties[name]){G.removeAttribute(name);
return;
}else if(typeof I.propertyDefault[name]!==i){H=I.propertyDefault[name];
}}G[name]=H;
}else{if(H===true){G.setAttribute(name,name);
}else if(H===false||H===null){G.removeAttribute(name);
}else{G.setAttribute(name,H);
}}},reset:function(J,name){this.set(J,name,null);
}}});
})();
(function(){var h="qx.client",g="left",f="right",e="middle",d="click",c="none",b="contextmenu",a="qx.event.type.Mouse";
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(i,j,k,l,m){qx.event.type.Dom.prototype.init.call(this,i,j,k,l,m);

if(!k){this._relatedTarget=qx.bom.Event.getRelatedTarget(i);
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
},__kb:qx.core.Variant.select(h,{"mshtml":{1:g,2:f,4:e},"default":{0:g,2:f,1:e}}),stop:function(){this.stopPropagation();
},getButton:function(){switch(this._type){case b:return f;
case d:if(this.__kc){return this.__kc();
}default:return this.__kb[this._native.button]||c;
}},__kc:qx.core.Variant.select(h,{"mshtml":function(){return g;
},"default":null}),isLeftPressed:function(){return this.getButton()===g;
},isMiddlePressed:function(){return this.getButton()===e;
},isRightPressed:function(){return this.getButton()===f;
},getRelatedTarget:function(){return this._relatedTarget;
},getViewportLeft:function(){return this._native.clientX;
},getViewportTop:function(){return this._native.clientY;
},getDocumentLeft:qx.core.Variant.select(h,{"mshtml":function(){var n=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(n);
},"default":function(){return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(h,{"mshtml":function(){var q=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(q);
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
},"webkit":function(){if(qx.bom.client.Browser.NAME==b){if(qx.bom.client.Platform.MAC){if(qx.bom.client.Browser.VERSION>=7){return -(this._native.wheelDelta/30);
}return -(this._native.wheelDelta/1200);
}else{return -(this._native.wheelDelta/120);
}}else{if(qx.bom.client.Platform.WIN){var d=120;
if(qx.bom.client.Engine.VERSION==533.16){d=1200;
}}else{d=40;
if(qx.bom.client.Engine.VERSION==533.16||qx.bom.client.Engine.VERSION==533.17||qx.bom.client.Engine.VERSION==533.18){d=1200;
}}return -(this._native.wheelDelta/d);
}}})}});
})();
(function(){var d="qx.client",c="qx.bom.Viewport";
qx.Class.define(c,{statics:{getWidth:qx.core.Variant.select(d,{"opera":function(s){if(qx.bom.client.Engine.VERSION<9.5){return (s||window).document.body.clientWidth;
}else{var t=(s||window).document;
return qx.bom.Document.isStandardMode(s)?t.documentElement.clientWidth:t.body.clientWidth;
}},"webkit":function(q){if(qx.bom.client.Engine.VERSION<523.15){return (q||window).innerWidth;
}else{var r=(q||window).document;
return qx.bom.Document.isStandardMode(q)?r.documentElement.clientWidth:r.body.clientWidth;
}},"default":function(a){var b=(a||window).document;
return qx.bom.Document.isStandardMode(a)?b.documentElement.clientWidth:b.body.clientWidth;
}}),getHeight:qx.core.Variant.select(d,{"opera":function(l){if(qx.bom.client.Engine.VERSION<9.5){return (l||window).document.body.clientHeight;
}else{var m=(l||window).document;
return qx.bom.Document.isStandardMode(l)?m.documentElement.clientHeight:m.body.clientHeight;
}},"webkit":function(j){if(qx.bom.client.Engine.VERSION<523.15){return (j||window).innerHeight;
}else{var k=(j||window).document;
return qx.bom.Document.isStandardMode(j)?k.documentElement.clientHeight:k.body.clientHeight;
}},"default":function(h){var i=(h||window).document;
return qx.bom.Document.isStandardMode(h)?i.documentElement.clientHeight:i.body.clientHeight;
}}),getScrollLeft:qx.core.Variant.select(d,{"mshtml":function(f){var g=(f||window).document;
return g.documentElement.scrollLeft||g.body.scrollLeft;
},"default":function(e){return (e||window).pageXOffset;
}}),getScrollTop:qx.core.Variant.select(d,{"mshtml":function(o){var p=(o||window).document;
return p.documentElement.scrollTop||p.body.scrollTop;
},"default":function(n){return (n||window).pageYOffset;
}})}});
})();
(function(){var f="CSS1Compat",e="position:absolute;width:0;height:0;width:1",d="qx.bom.Document",c="1px",b="qx.client",a="div";
qx.Class.define(d,{statics:{isQuirksMode:qx.core.Variant.select(b,{"mshtml":function(m){if(qx.bom.client.Engine.VERSION>=8){return (m||window).document.documentMode===5;
}else{return (m||window).document.compatMode!==f;
}},"webkit":function(j){if(document.compatMode===undefined){var k=(j||window).document.createElement(a);
k.style.cssText=e;
return k.style.width===c?true:false;
}else{return (j||window).document.compatMode!==f;
}},"default":function(n){return (n||window).document.compatMode!==f;
}}),isStandardMode:function(l){return !this.isQuirksMode(l);
},getWidth:function(o){var p=(o||window).document;
var q=qx.bom.Viewport.getWidth(o);
var scroll=this.isStandardMode(o)?p.documentElement.scrollWidth:p.body.scrollWidth;
return Math.max(scroll,q);
},getHeight:function(g){var h=(g||window).document;
var i=qx.bom.Viewport.getHeight(g);
var scroll=this.isStandardMode(g)?h.documentElement.scrollHeight:h.body.scrollHeight;
return Math.max(scroll,i);
}}});
})();
(function(){var k="qx.client",j="ie",i="msie",h="android",g="operamini",f="mobile chrome",e=")(/| )([0-9]+\.[0-9])",d="iemobile",c="opera mobi",b="Mobile Safari",y="operamobile",x="mobile safari",w="IEMobile|Maxthon|MSIE",v="qx.bom.client.Browser",u="opera mini",t="(",s="opera",r="mshtml",q="Opera Mini|Opera Mobi|Opera",p="AdobeAIR|Titanium|Fluid|Chrome|Android|Epiphany|Konqueror|iCab|OmniWeb|Maxthon|Pre|Mobile Safari|Safari",n="webkit",o="5.0",l="prism|Fennec|Camino|Kmeleon|Galeon|Netscape|SeaMonkey|Firefox",m="Mobile/";
qx.Bootstrap.define(v,{statics:{UNKNOWN:true,NAME:"unknown",TITLE:"unknown 0.0",VERSION:0.0,FULLVERSION:"0.0.0",__kY:function(C){var D=navigator.userAgent;
var F=new RegExp(t+C+e);
var G=D.match(F);

if(!G){return;
}var name=G[1].toLowerCase();
var E=G[3];
if(D.match(/Version(\/| )([0-9]+\.[0-9])/)){E=RegExp.$2;
}
if(qx.core.Variant.isSet(k,n)){if(name===h){name=f;
}else if(D.indexOf(b)!==-1||D.indexOf(m)!==-1){name=x;
}}else if(qx.core.Variant.isSet(k,r)){if(name===i){name=j;
if(qx.bom.client.System.WINCE&&name===j){name=d;
E=o;
}}}else if(qx.core.Variant.isSet(k,s)){if(name===c){name=y;
}else if(name===u){name=g;
}}this.NAME=name;
this.FULLVERSION=E;
this.VERSION=parseFloat(E,10);
this.TITLE=name+" "+this.VERSION;
this.UNKNOWN=false;
}},defer:qx.core.Variant.select(k,{"webkit":function(B){B.__kY(p);
},"gecko":function(z){z.__kY(l);
},"mshtml":function(a){a.__kY(w);
},"opera":function(A){A.__kY(q);
}})});
})();
(function(){var L="qx.client",K="qx.dom.Hierarchy",J="previousSibling",I="*",H="nextSibling",G="parentNode";
qx.Class.define(K,{statics:{getNodeIndex:function(A){var B=0;

while(A&&(A=A.previousSibling)){B++;
}return B;
},getElementIndex:function(D){var E=0;
var F=qx.dom.Node.ELEMENT;

while(D&&(D=D.previousSibling)){if(D.nodeType==F){E++;
}}return E;
},getNextElementSibling:function(x){while(x&&(x=x.nextSibling)&&!qx.dom.Node.isElement(x)){continue;
}return x||null;
},getPreviousElementSibling:function(v){while(v&&(v=v.previousSibling)&&!qx.dom.Node.isElement(v)){continue;
}return v||null;
},contains:qx.core.Variant.select(L,{"webkit|mshtml|opera":function(k,l){if(qx.dom.Node.isDocument(k)){var m=qx.dom.Node.getDocument(l);
return k&&m==k;
}else if(qx.dom.Node.isDocument(l)){return false;
}else{return k.contains(l);
}},"gecko":function(q,r){return !!(q.compareDocumentPosition(r)&16);
},"default":function(U,V){while(V){if(U==V){return true;
}V=V.parentNode;
}return false;
}}),isRendered:function(o){if(!o.parentNode||!o.offsetParent){return false;
}var p=o.ownerDocument||o.document;
if(p.body.contains){return p.body.contains(o);
}if(p.compareDocumentPosition){return !!(p.compareDocumentPosition(o)&16);
}throw new Error("Missing support for isRendered()!");
},isDescendantOf:function(i,j){return this.contains(j,i);
},getCommonParent:qx.core.Variant.select(L,{"mshtml|opera":function(Q,R){if(Q===R){return Q;
}
while(Q&&qx.dom.Node.isElement(Q)){if(Q.contains(R)){return Q;
}Q=Q.parentNode;
}return null;
},"default":function(a,b){if(a===b){return a;
}var c={};
var f=qx.core.ObjectRegistry;
var e,d;

while(a||b){if(a){e=f.toHashCode(a);

if(c[e]){return c[e];
}c[e]=a;
a=a.parentNode;
}
if(b){d=f.toHashCode(b);

if(c[d]){return c[d];
}c[d]=b;
b=b.parentNode;
}}return null;
}}),getAncestors:function(M){return this._recursivelyCollect(M,G);
},getChildElements:function(g){g=g.firstChild;

if(!g){return [];
}var h=this.getNextSiblings(g);

if(g.nodeType===1){h.unshift(g);
}return h;
},getDescendants:function(z){return qx.lang.Array.fromCollection(z.getElementsByTagName(I));
},getFirstDescendant:function(n){n=n.firstChild;

while(n&&n.nodeType!=1){n=n.nextSibling;
}return n;
},getLastDescendant:function(T){T=T.lastChild;

while(T&&T.nodeType!=1){T=T.previousSibling;
}return T;
},getPreviousSiblings:function(S){return this._recursivelyCollect(S,J);
},getNextSiblings:function(w){return this._recursivelyCollect(w,H);
},_recursivelyCollect:function(s,t){var u=[];

while(s=s[t]){if(s.nodeType==1){u.push(s);
}}return u;
},getSiblings:function(y){return this.getPreviousSiblings(y).reverse().concat(this.getNextSiblings(y));
},isEmpty:function(C){C=C.firstChild;

while(C){if(C.nodeType===qx.dom.Node.ELEMENT||C.nodeType===qx.dom.Node.TEXT){return false;
}C=C.nextSibling;
}return true;
},cleanWhitespace:function(N){var O=N.firstChild;

while(O){var P=O.nextSibling;

if(O.nodeType==3&&!/\S/.test(O.nodeValue)){N.removeChild(O);
}O=P;
}}}});
})();
(function(){var b="qx.client",a="qx.event.type.Drag";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(j,k){qx.event.type.Event.prototype.init.call(this,true,j);

if(k){this._native=k.getNativeEvent()||null;
this._originalTarget=k.getTarget()||null;
}else{this._native=null;
this._originalTarget=null;
}return this;
},clone:function(c){var d=qx.event.type.Event.prototype.clone.call(this,c);
d._native=this._native;
return d;
},getDocumentLeft:qx.core.Variant.select(b,{"mshtml":function(){if(this._native==null){return 0;
}var l=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(l);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(b,{"mshtml":function(){if(this._native==null){return 0;
}var o=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(o);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageY;
}}),getManager:function(){return qx.event.Registration.getManager(this.getTarget()).getHandler(qx.event.handler.DragDrop);
},addType:function(g){this.getManager().addType(g);
},addAction:function(m){this.getManager().addAction(m);
},supportsType:function(n){return this.getManager().supportsType(n);
},supportsAction:function(f){return this.getManager().supportsAction(f);
},addData:function(h,i){this.getManager().addData(h,i);
},getData:function(e){return this.getManager().getData(e);
},getCurrentType:function(){return this.getManager().getCurrentType();
},getCurrentAction:function(){return this.getManager().getCurrentAction();
}}});
})();
(function(){var h="interval",g="qx.event.Timer",f="_applyInterval",d="_applyEnabled",c="Boolean",b="qx.event.type.Event",a="Integer";
qx.Class.define(g,{extend:qx.core.Object,construct:function(m){qx.core.Object.call(this);
this.setEnabled(false);

if(m!=null){this.setInterval(m);
}var self=this;
this.__er=function(){self._oninterval.call(self);
};
},events:{"interval":b},statics:{once:function(p,q,r){var s=new qx.event.Timer(r);
s.__es=p;
s.addListener(h,function(e){s.stop();
p.call(q,e);
s.dispose();
q=null;
},q);
s.start();
return s;
}},properties:{enabled:{init:true,check:c,apply:d},interval:{check:a,init:1000,apply:f}},members:{__et:null,__er:null,_applyInterval:function(i,j){if(this.getEnabled()){this.restart();
}},_applyEnabled:function(n,o){if(o){window.clearInterval(this.__et);
this.__et=null;
}else if(n){this.__et=window.setInterval(this.__er,this.getInterval());
}},start:function(){this.setEnabled(true);
},startWith:function(l){this.setInterval(l);
this.start();
},stop:function(){this.setEnabled(false);
},restart:function(){this.stop();
this.start();
},restartWith:function(k){this.stop();
this.startWith(k);
},_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.$$disposed){return;
}
if(this.getEnabled()){this.fireEvent(h);
}})},destruct:function(){if(this.__et){window.clearInterval(this.__et);
}this.__et=this.__er=null;
}});
})();
(function(){var j="losecapture",i="qx.client",h="blur",g="focus",f="click",e="qx.event.dispatch.MouseCapture",d="capture",c="scroll";
qx.Class.define(e,{extend:qx.event.dispatch.AbstractBubbling,construct:function(r,s){qx.event.dispatch.AbstractBubbling.call(this,r);
this.__gg=r.getWindow();
this.__gh=s;
r.addListener(this.__gg,h,this.releaseCapture,this);
r.addListener(this.__gg,g,this.releaseCapture,this);
r.addListener(this.__gg,c,this.releaseCapture,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST},members:{__gh:null,__gi:null,__gj:true,__gg:null,_getParent:function(p){return p.parentNode;
},canDispatchEvent:function(n,event,o){return (this.__gi&&this.__gk[o]);
},dispatchEvent:function(u,event,v){if(v==f){event.stopPropagation();
this.releaseCapture();
return;
}
if(this.__gj||!qx.dom.Hierarchy.contains(this.__gi,u)){u=this.__gi;
}qx.event.dispatch.AbstractBubbling.prototype.dispatchEvent.call(this,u,event,v);
},__gk:{"mouseup":1,"mousedown":1,"click":1,"dblclick":1,"mousemove":1,"mouseout":1,"mouseover":1},activateCapture:function(a,b){var b=b!==false;

if(this.__gi===a&&this.__gj==b){return;
}
if(this.__gi){this.releaseCapture();
}this.nativeSetCapture(a,b);

if(this.hasNativeCapture){var self=this;
qx.bom.Event.addNativeListener(a,j,function(){qx.bom.Event.removeNativeListener(a,j,arguments.callee);
self.releaseCapture();
});
}this.__gj=b;
this.__gi=a;
this.__gh.fireEvent(a,d,qx.event.type.Event,[true,false]);
},getCaptureElement:function(){return this.__gi;
},releaseCapture:function(){var m=this.__gi;

if(!m){return;
}this.__gi=null;
this.__gh.fireEvent(m,j,qx.event.type.Event,[true,false]);
this.nativeReleaseCapture(m);
},hasNativeCapture:qx.bom.client.Engine.MSHTML,nativeSetCapture:qx.core.Variant.select(i,{"mshtml":function(k,l){qx.event.Timer.once(function(){k.setCapture(l!==false);
},this,0);
},"default":qx.lang.Function.empty}),nativeReleaseCapture:qx.core.Variant.select(i,{"mshtml":function(t){qx.event.Timer.once(function(){t.releaseCapture();
},this,0);
},"default":qx.lang.Function.empty})},destruct:function(){this.__gi=this.__gg=this.__gh=null;
},defer:function(q){qx.event.Registration.addDispatcher(q);
}});
})();
(function(){var s="qx.client",r="",q="mshtml",p="'",o="SelectionLanguage",n="qx.xml.Document",m=" />",k="MSXML2.DOMDocument.3.0",j='<\?xml version="1.0" encoding="utf-8"?>\n<',h="MSXML2.XMLHTTP.3.0",d="MSXML2.XMLHTTP.6.0",g=" xmlns='",f="text/xml",c="XPath",b="MSXML2.DOMDocument.6.0",e="HTML";
qx.Class.define(n,{statics:{DOMDOC:null,XMLHTTP:null,isXmlDocument:function(a){if(a.nodeType===9){return a.documentElement.nodeName!==e;
}else if(a.ownerDocument){return this.isXmlDocument(a.ownerDocument);
}else{return false;
}},create:qx.core.Variant.select(s,{"mshtml":function(u,v){var w=new ActiveXObject(this.DOMDOC);
w.setProperty(o,c);

if(v){var x=j;
x+=v;

if(u){x+=g+u+p;
}x+=m;
w.loadXML(x);
}return w;
},"default":function(C,D){return document.implementation.createDocument(C||r,D||r,null);
}}),fromString:qx.core.Variant.select(s,{"mshtml":function(A){var B=qx.xml.Document.create();
B.loadXML(A);
return B;
},"default":function(y){var z=new DOMParser();
return z.parseFromString(y,f);
}})},defer:function(E){if(qx.core.Variant.isSet(s,q)){var F=[b,k];
var G=[d,h];

for(var i=0,l=F.length;i<l;i++){try{new ActiveXObject(F[i]);
new ActiveXObject(G[i]);
}catch(t){continue;
}E.DOMDOC=F[i];
E.XMLHTTP=G[i];
break;
}}}});
})();
(function(){var n="auto",m="px",l=",",k="clip:auto;",j="rect(",i=");",h="",g=")",f="qx.bom.element.Clip",e="string",b="clip:rect(",d="clip",c="rect(auto,auto,auto,auto)",a="rect(auto, auto, auto, auto)";
qx.Class.define(f,{statics:{compile:function(v){if(!v){return k;
}var A=v.left;
var top=v.top;
var z=v.width;
var y=v.height;
var w,x;

if(A==null){w=(z==null?n:z+m);
A=n;
}else{w=(z==null?n:A+z+m);
A=A+m;
}
if(top==null){x=(y==null?n:y+m);
top=n;
}else{x=(y==null?n:top+y+m);
top=top+m;
}return b+top+l+w+l+x+l+A+i;
},get:function(C,D){var F=qx.bom.element.Style.get(C,d,D,false);
var K,top,I,H;
var E,G;

if(typeof F===e&&F!==n&&F!==h){F=qx.lang.String.trim(F);
if(/\((.*)\)/.test(F)){var J=RegExp.$1.split(l);
top=qx.lang.String.trim(J[0]);
E=qx.lang.String.trim(J[1]);
G=qx.lang.String.trim(J[2]);
K=qx.lang.String.trim(J[3]);
if(K===n){K=null;
}
if(top===n){top=null;
}
if(E===n){E=null;
}
if(G===n){G=null;
}if(top!=null){top=parseInt(top,10);
}
if(E!=null){E=parseInt(E,10);
}
if(G!=null){G=parseInt(G,10);
}
if(K!=null){K=parseInt(K,10);
}if(E!=null&&K!=null){I=E-K;
}else if(E!=null){I=E;
}
if(G!=null&&top!=null){H=G-top;
}else if(G!=null){H=G;
}}else{throw new Error("Could not parse clip string: "+F);
}}return {left:K||null,top:top||null,width:I||null,height:H||null};
},set:function(o,p){if(!p){o.style.clip=c;
return;
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
}o.style.clip=j+top+l+q+l+r+l+u+g;
},reset:function(B){B.style.clip=a;
}}});
})();
(function(){var l="n-resize",k="e-resize",j="nw-resize",i="ne-resize",h="",g="cursor:",f="qx.client",e=";",d="qx.bom.element.Cursor",c="cursor",b="hand";
qx.Class.define(d,{statics:{__eH:qx.core.Variant.select(f,{"mshtml":{"cursor":b,"ew-resize":k,"ns-resize":l,"nesw-resize":i,"nwse-resize":j},"opera":{"col-resize":k,"row-resize":l,"ew-resize":k,"ns-resize":l,"nesw-resize":i,"nwse-resize":j},"default":{}}),compile:function(o){return g+(this.__eH[o]||o)+e;
},get:function(p,q){return qx.bom.element.Style.get(p,c,q,false);
},set:function(m,n){m.style.cursor=this.__eH[n]||n;
},reset:function(a){a.style.cursor=h;
}}});
})();
(function(){var m="",l="qx.client",k=";",j="opacity:",i="opacity",h="filter",g="MozOpacity",f=");",e=")",d="zoom:1;filter:alpha(opacity=",a="qx.bom.element.Opacity",c="alpha(opacity=",b="-moz-opacity:";
qx.Class.define(a,{statics:{SUPPORT_CSS3_OPACITY:false,compile:qx.core.Variant.select(l,{"mshtml":function(G){if(G>=1){G=1;
}
if(G<0.00001){G=0;
}
if(qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){return j+G+k;
}else{return d+(G*100)+f;
}},"gecko":function(o){if(o>=1){o=0.999999;
}
if(!qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){return b+o+k;
}else{return j+o+k;
}},"default":function(u){if(u>=1){return m;
}return j+u+k;
}}),set:qx.core.Variant.select(l,{"mshtml":function(B,C){if(qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){if(C>=1){C=m;
}B.style.opacity=C;
}else{var D=qx.bom.element.Style.get(B,h,qx.bom.element.Style.COMPUTED_MODE,false);

if(C>=1){C=1;
}
if(C<0.00001){C=0;
}if(!B.currentStyle||!B.currentStyle.hasLayout){B.style.zoom=1;
}B.style.filter=D.replace(/alpha\([^\)]*\)/gi,m)+c+C*100+e;
}},"gecko":function(z,A){if(A>=1){A=0.999999;
}
if(!qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){z.style.MozOpacity=A;
}else{z.style.opacity=A;
}},"default":function(E,F){if(F>=1){F=m;
}E.style.opacity=F;
}}),reset:qx.core.Variant.select(l,{"mshtml":function(H){if(qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){H.style.opacity=m;
}else{var I=qx.bom.element.Style.get(H,h,qx.bom.element.Style.COMPUTED_MODE,false);
H.style.filter=I.replace(/alpha\([^\)]*\)/gi,m);
}},"gecko":function(t){if(!qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){t.style.MozOpacity=m;
}else{t.style.opacity=m;
}},"default":function(v){v.style.opacity=m;
}}),get:qx.core.Variant.select(l,{"mshtml":function(p,q){if(qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){var r=qx.bom.element.Style.get(p,i,q,false);

if(r!=null){return parseFloat(r);
}return 1.0;
}else{var s=qx.bom.element.Style.get(p,h,q,false);

if(s){var r=s.match(/alpha\(opacity=(.*)\)/);

if(r&&r[1]){return parseFloat(r[1])/100;
}}return 1.0;
}},"gecko":function(J,K){var L=qx.bom.element.Style.get(J,!qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY?g:i,K,false);

if(L==0.999999){L=1.0;
}
if(L!=null){return parseFloat(L);
}return 1.0;
},"default":function(w,x){var y=qx.bom.element.Style.get(w,i,x,false);

if(y!=null){return parseFloat(y);
}return 1.0;
}})},defer:function(n){n.SUPPORT_CSS3_OPACITY=(typeof document.documentElement.style.opacity=="string");
}});
})();
(function(){var q="qx.client",p="",o="boxSizing",n="box-sizing",m=":",k="border-box",j="qx.bom.element.BoxSizing",h="KhtmlBoxSizing",g="-moz-box-sizing",f="WebkitBoxSizing",c=";",e="-khtml-box-sizing",d="content-box",b="-webkit-box-sizing",a="MozBoxSizing";
qx.Class.define(j,{statics:{__cJ:qx.core.Variant.select(q,{"mshtml":null,"webkit":[o,h,f],"gecko":[a],"opera":[o]}),__cK:qx.core.Variant.select(q,{"mshtml":null,"webkit":[n,e,b],"gecko":[g],"opera":[n]}),__cL:{tags:{button:true,select:true},types:{search:true,button:true,submit:true,reset:true,checkbox:true,radio:true}},__cM:function(D){var E=this.__cL;
return E.tags[D.tagName.toLowerCase()]||E.types[D.type];
},compile:qx.core.Variant.select(q,{"mshtml":function(G){{};
},"default":function(x){var z=this.__cK;
var y=p;

if(z){for(var i=0,l=z.length;i<l;i++){y+=z[i]+m+x+c;
}}return y;
}}),get:qx.core.Variant.select(q,{"mshtml":function(C){if(qx.bom.Document.isStandardMode(qx.dom.Node.getDocument(C))){if(!this.__cM(C)){return d;
}}return k;
},"default":function(u){var w=this.__cJ;
var v;

if(w){for(var i=0,l=w.length;i<l;i++){v=qx.bom.element.Style.get(u,w[i],null,false);

if(v!=null&&v!==p){return v;
}}}return p;
}}),set:qx.core.Variant.select(q,{"mshtml":function(A,B){{};
},"default":function(r,s){var t=this.__cJ;

if(t){for(var i=0,l=t.length;i<l;i++){r.style[t[i]]=s;
}}}}),reset:function(F){this.set(F,p);
}}});
})();
(function(){var bl="",bk="qx.client",bj="hidden",bi="-moz-scrollbars-none",bh="overflow",bg=";",bf="overflowY",be=":",bd="overflowX",bc="overflow:",bx="none",bw="scroll",bv="borderLeftStyle",bu="borderRightStyle",bt="div",bs="borderRightWidth",br="overflow-y",bq="borderLeftWidth",bp="-moz-scrollbars-vertical",bo="100px",bm="qx.bom.element.Overflow",bn="overflow-x";
qx.Class.define(bm,{statics:{__ki:null,getScrollbarWidth:function(){if(this.__ki!==null){return this.__ki;
}var d=qx.bom.element.Style;
var f=function(ca,cb){return parseInt(d.get(ca,cb))||0;
};
var g=function(ba){return (d.get(ba,bu)==bx?0:f(ba,bs));
};
var e=function(L){return (d.get(L,bv)==bx?0:f(L,bq));
};
var i=qx.core.Variant.select(bk,{"mshtml":function(v){if(d.get(v,bf)==bj||v.clientWidth==0){return g(v);
}return Math.max(0,v.offsetWidth-v.clientLeft-v.clientWidth);
},"default":function(bL){if(bL.clientWidth==0){var bM=d.get(bL,bh);
var bN=(bM==bw||bM==bp?16:0);
return Math.max(0,g(bL)+bN);
}return Math.max(0,(bL.offsetWidth-bL.clientWidth-e(bL)));
}});
var h=function(Q){return i(Q)-g(Q);
};
var t=document.createElement(bt);
var s=t.style;
s.height=s.width=bo;
s.overflow=bw;
document.body.appendChild(t);
var c=h(t);
this.__ki=c?c:16;
document.body.removeChild(t);
return this.__ki;
},_compile:qx.core.Variant.select(bk,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bJ,bK){if(bK==bj){bK=bi;
}return bc+bK+bg;
}:
function(bU,bV){return bU+be+bV+bg;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(T,U){return bc+U+bg;
}:
function(ce,cf){return ce+be+cf+bg;
},"default":function(C,D){return C+be+D+bg;
}}),compileX:function(k){return this._compile(bn,k);
},compileY:function(bY){return this._compile(br,bY);
},getX:qx.core.Variant.select(bk,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bQ,bR){var bS=qx.bom.element.Style.get(bQ,bh,bR,false);

if(bS===bi){bS=bj;
}return bS;
}:
function(n,o){return qx.bom.element.Style.get(n,bd,o,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(X,Y){return qx.bom.element.Style.get(X,bh,Y,false);
}:
function(V,W){return qx.bom.element.Style.get(V,bd,W,false);
},"default":function(p,q){return qx.bom.element.Style.get(p,bd,q,false);
}}),setX:qx.core.Variant.select(bk,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(F,G){if(G==bj){G=bi;
}F.style.overflow=G;
}:
function(bF,bG){bF.style.overflowX=bG;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(R,S){R.style.overflow=S;
}:
function(r,u){r.style.overflowX=u;
},"default":function(cc,cd){cc.style.overflowX=cd;
}}),resetX:qx.core.Variant.select(bk,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(y){y.style.overflow=bl;
}:
function(j){j.style.overflowX=bl;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(M,N){M.style.overflow=bl;
}:
function(a,b){a.style.overflowX=bl;
},"default":function(z){z.style.overflowX=bl;
}}),getY:qx.core.Variant.select(bk,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bA,bB){var bC=qx.bom.element.Style.get(bA,bh,bB,false);

if(bC===bi){bC=bj;
}return bC;
}:
function(bW,bX){return qx.bom.element.Style.get(bW,bf,bX,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(A,B){return qx.bom.element.Style.get(A,bh,B,false);
}:
function(by,bz){return qx.bom.element.Style.get(by,bf,bz,false);
},"default":function(w,x){return qx.bom.element.Style.get(w,bf,x,false);
}}),setY:qx.core.Variant.select(bk,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(O,P){if(P===bj){P=bi;
}O.style.overflow=P;
}:
function(J,K){J.style.overflowY=K;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bH,bI){bH.style.overflow=bI;
}:
function(H,I){H.style.overflowY=I;
},"default":function(l,m){l.style.overflowY=m;
}}),resetY:qx.core.Variant.select(bk,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bb){bb.style.overflow=bl;
}:
function(bT){bT.style.overflowY=bl;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bO,bP){bO.style.overflow=bl;
}:
function(bD,bE){bD.style.overflowY=bl;
},"default":function(E){E.style.overflowY=bl;
}})}});
})();
(function(){var m="",k="qx.client",h="userSelect",g="style",f="MozUserModify",e="px",d="float",c="borderImage",b="styleFloat",a="appearance",F="pixelHeight",E='Ms',D=":",C="cssFloat",B="pixelTop",A="pixelLeft",z='O',y="qx.bom.element.Style",x='Khtml',w='string',t="pixelRight",u='Moz',r="pixelWidth",s="pixelBottom",p=";",q="textOverflow",n="userModify",o='Webkit',v="WebkitUserModify";
qx.Class.define(y,{statics:{__cu:function(){var X=[a,h,q,c];
var bc={};
var Y=document.documentElement.style;
var bd=[u,o,x,z,E];

for(var i=0,l=X.length;i<l;i++){var be=X[i];
var ba=be;

if(Y[be]){bc[ba]=be;
continue;
}be=qx.lang.String.firstUp(be);

for(var j=0,bf=bd.length;j<bf;j++){var bb=bd[j]+be;

if(typeof Y[bb]==w){bc[ba]=bb;
break;
}}}this.__cv=bc;
this.__cv[n]=qx.core.Variant.select(k,{"gecko":f,"webkit":v,"default":h});
this.__cw={};

for(var ba in bc){this.__cw[ba]=this.__cA(bc[ba]);
}this.__cv[d]=qx.core.Variant.select(k,{"mshtml":b,"default":C});
},__cx:{width:r,height:F,left:A,right:t,top:B,bottom:s},__cy:{clip:qx.bom.element.Clip,cursor:qx.bom.element.Cursor,opacity:qx.bom.element.Opacity,boxSizing:qx.bom.element.BoxSizing,overflowX:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setX,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getX,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetX,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileX,qx.bom.element.Overflow)},overflowY:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setY,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getY,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetY,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileY,qx.bom.element.Overflow)}},compile:function(Q){var S=[];
var U=this.__cy;
var T=this.__cw;
var name,R;

for(name in Q){R=Q[name];

if(R==null){continue;
}name=T[name]||name;
if(U[name]){S.push(U[name].compile(R));
}else{S.push(this.__cA(name),D,R,p);
}}return S.join(m);
},__cz:{},__cA:function(bo){var bp=this.__cz;
var bq=bp[bo];

if(!bq){bq=bp[bo]=qx.lang.String.hyphenate(bo);
}return bq;
},setCss:qx.core.Variant.select(k,{"mshtml":function(br,bs){br.style.cssText=bs;
},"default":function(H,I){H.setAttribute(g,I);
}}),getCss:qx.core.Variant.select(k,{"mshtml":function(J){return J.style.cssText.toLowerCase();
},"default":function(K){return K.getAttribute(g);
}}),isPropertySupported:function(G){return (this.__cy[G]||this.__cv[G]||G in document.documentElement.style);
},COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(bB,name,bC,bD){{};
name=this.__cv[name]||name;
if(bD!==false&&this.__cy[name]){return this.__cy[name].set(bB,bC);
}else{bB.style[name]=bC!==null?bC:m;
}},setStyles:function(bg,bh,bi){{};
var bl=this.__cv;
var bn=this.__cy;
var bj=bg.style;

for(var bm in bh){var bk=bh[bm];
var name=bl[bm]||bm;

if(bk===undefined){if(bi!==false&&bn[name]){bn[name].reset(bg);
}else{bj[name]=m;
}}else{if(bi!==false&&bn[name]){bn[name].set(bg,bk);
}else{bj[name]=bk!==null?bk:m;
}}}},reset:function(V,name,W){name=this.__cv[name]||name;
if(W!==false&&this.__cy[name]){return this.__cy[name].reset(V);
}else{V.style[name]=m;
}},get:qx.core.Variant.select(k,{"mshtml":function(bu,name,bv,bw){name=this.__cv[name]||name;
if(bw!==false&&this.__cy[name]){return this.__cy[name].get(bu,bv);
}if(!bu.currentStyle){return bu.style[name]||m;
}switch(bv){case this.LOCAL_MODE:return bu.style[name]||m;
case this.CASCADED_MODE:return bu.currentStyle[name]||m;
default:var bA=bu.currentStyle[name]||m;
if(/^-?[\.\d]+(px)?$/i.test(bA)){return bA;
}var bz=this.__cx[name];

if(bz){var bx=bu.style[name];
bu.style[name]=bA||0;
var by=bu.style[bz]+e;
bu.style[name]=bx;
return by;
}if(/^-?[\.\d]+(em|pt|%)?$/i.test(bA)){throw new Error("Untranslated computed property value: "+name+". Only pixel values work well across different clients.");
}return bA;
}},"default":function(L,name,M,N){name=this.__cv[name]||name;
if(N!==false&&this.__cy[name]){return this.__cy[name].get(L,M);
}switch(M){case this.LOCAL_MODE:return L.style[name]||m;
case this.CASCADED_MODE:if(L.currentStyle){return L.currentStyle[name]||m;
}throw new Error("Cascaded styles are not supported in this browser!");
default:var O=qx.dom.Node.getDocument(L);
var P=O.defaultView.getComputedStyle(L,null);
return P?P[name]:m;
}}})},defer:function(bt){bt.__cu();
}});
})();
(function(){var a="qx.dom.Element";
qx.Class.define(a,{statics:{hasChild:function(parent,b){return b.parentNode===parent;
},hasChildren:function(m){return !!m.firstChild;
},hasChildElements:function(s){s=s.firstChild;

while(s){if(s.nodeType===1){return true;
}s=s.nextSibling;
}return false;
},getParentElement:function(w){return w.parentNode;
},isInDom:function(t,u){if(!u){u=window;
}var v=u.document.getElementsByTagName(t.nodeName);

for(var i=0,l=v.length;i<l;i++){if(v[i]===t){return true;
}}return false;
},insertAt:function(h,parent,j){var k=parent.childNodes[j];

if(k){parent.insertBefore(h,k);
}else{parent.appendChild(h);
}return true;
},insertBegin:function(d,parent){if(parent.firstChild){this.insertBefore(d,parent.firstChild);
}else{parent.appendChild(d);
}},insertEnd:function(g,parent){parent.appendChild(g);
},insertBefore:function(e,f){f.parentNode.insertBefore(e,f);
return true;
},insertAfter:function(x,y){var parent=y.parentNode;

if(y==parent.lastChild){parent.appendChild(x);
}else{return this.insertBefore(x,y.nextSibling);
}return true;
},remove:function(c){if(!c.parentNode){return false;
}c.parentNode.removeChild(c);
return true;
},removeChild:function(B,parent){if(B.parentNode!==parent){return false;
}parent.removeChild(B);
return true;
},removeChildAt:function(z,parent){var A=parent.childNodes[z];

if(!A){return false;
}parent.removeChild(A);
return true;
},replaceChild:function(n,o){if(!o.parentNode){return false;
}o.parentNode.replaceChild(n,o);
return true;
},replaceAt:function(p,q,parent){var r=parent.childNodes[q];

if(!r){return false;
}parent.replaceChild(p,r);
return true;
}}});
})();
(function(){var fy="qx.client",fx="",fw="mshtml",fv="gecko",fu="qx.event.type.Data",ft="qx.event.type.Event",fs=" ",fr="Boolean",fq="opera",fp="enter",ed="id",ec='"',eb="__elementToFocus__",ea="qx.bom.htmlarea.HtmlArea.debug",dY="on",dX="old_id",dW="loadingError",dV="contextmenu",dU="pageup",dT="backgroundcolor",fF="end",fG="div",fD='On',fE="gecko|webkit",fB="redo",fC="i",fz="backspace",fA="mouseup",fH="y",fI="inserthtml",eX="style",eW="backgroundimage",fa="100%",eY='</head>',fc='<head>',fb="k",fe=":",fd='redo',eV='Off',eU='">',ch="down",ci="g",cj="keypress",ck="left",cl=";",cn="undo",co="pagedown",cp='</style>',cq="u",cr="right",fW="focus",fV="control",fU="click",fT='<style type="text/css">',gb="up",ga="blur",fY="None",fX="'",gd="delete",gc=">",dh="b",di='</body></html>',df="String",dg="z",dl="keydown",dm="keyup",dj="focusout",dk="webkit",dd="-",de='</span>',cK="backgroundColor",cJ="li",cM='undo',cL="textbackgroundcolor",cG="Function",cF="fontSize",cI="textcolor",cH="br",cE="home",cD="<",dt="focused",du="fontFamily",dv="load",dw='id="__elementToFocus__"',dp="setUnderline",dq="backgroundPosition",dr="<!--",ds=' size="',dx='/www.w3.org/1999/xhtml" xml:lang="en" lang="en">',dy="'>",cV='underline',cU='bold',cT="&copy;",cS="bold",cR="readyAfterInvalid",cQ="styleWithCSS",cP="span",cO=" />",da="setBold",cY="P",dz="<P>&nbsp;</P>",dA="</",dB="qx/static/blank.html",dC="&gt;",dD='="',dE="paddingLeft",dF="__zO",dG="X",dH="inserthorizontalrule",dI='<p>',em="#",ek="backgroundRepeat",ej="insertimage",ei="a",eq="&amp;",ep="removeformat",eo="marginLeft",en="ready",eu="<p>&nbsp;</p>",et='DOCTYPE html PUBLIC "-/',eQ="mshtml|webkit",eR="italic",eO="outline",eP=" html, body {overflow-x: visible; } ",eM='<body>',eN="insertorderedlist",eK='body { font-size:100.01%; font-family:Verdana, Geneva, Arial, Helvetica, sans-serif; background-color:transparent; overflow:visible; background-image:none; margin:0px; padding:5px; } ',eL="hideFocus",eS="none",eT='/DTD XHTML 1.0 Transitional/',fi='<html xmlns="http:/',fh="S",fk="fontsize",fj="setItalic",fm="body",fl="marginBottom",fo="xhtml",fn="focusOut",fg="justifyleft",ff='</p>',fP="paddingTop",fQ="underline",fR='</font>',fS='<title></title><meta http-equiv="Content-type" content="text/html; charset=UTF-8" />',fL="Control",fM='<span style="font-family:',fN='/W3C/',fO="placeholder",fJ="backgroundImage",fK="marginTop",cg="> ",cf=" { ",ce='italic',cd='<!',cc="off",cb="\ufeff",ca='<font ',bY="&quot;",bX="marginRight",bW="STYLE",cu="justifyfull",cv="inserthyperlink",cs="<br />",ct='html { margin:0px; padding:0px; } ',cy="<br>",cz='/EN" "http:/',cw="justifycenter",cx="<br /><div id='placeholder'></div>",cB="useCSS",cC="object",ey="strikethrough",es="indent",eF="text/html",eB="true",eg="1.9",ee='',cN=' style="',eh="messengerContent",cX="Integer",cW="insertunorderedlist",dL="Text",dM="&lt;",dN="_moz_dirty",dO='<br _moz_editor_bogus_node="TRUE" _moz_dirty=""/>',dP='<br/><div class="placeholder"></div>',dQ="selectall",dR="transparent",dS=" SCRIPT STYLE DIV SPAN TR TD TBODY TABLE EM STRONG FONT A P B I U STRIKE H1 H2 H3 H4 H5 H6 ",dJ="justifyright",dK='/www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">',ef="//text()[string-length(normalize-space(.))>0]",eE="outdent",eD="about:blank",eC="fontfamily",eJ="<body style='",eI="qx.bom.htmlarea.HtmlArea",eH="paddingBottom",eG="Verdana",eA="$",ez="-->",cA=" }",dc="paddingRight",db='html { width:100%; height:100%; margin:0px; padding:0px; overflow-y:auto; overflow-x:auto; } ',er="Off",dn='p { margin:0px; padding:0px; }',ew="mshtml|opera",ev='body { font-size: 100.01%; font-family:Verdana, Geneva, Arial, Helvetica, sans-serif; width:100%; height:100%; background-color:transparent; overflow:auto; background-image:none; margin:0px; padding:5px; } ';
qx.Class.define(eI,{extend:qx.core.Object,construct:function(ho,hp,hq,hr){qx.core.Object.call(this);
var ht=hr||qx.util.ResourceManager.getInstance().toUri(dB);
this.__Aj(ho);
this.__Ak();
this._createAndAddIframe(ht);
this._addIframeLoadListener();
this.__zM=qx.bom.htmlarea.HtmlArea.__zP(hq);
if(qx.lang.Type.isString(hp)){this.__zN=hp;
}if(qx.core.Variant.isSet(fy,fq)){var hs=qx.dom.Node.getWindow(ho);
var hu=qx.event.Registration.getManager(hs).getHandler(qx.event.handler.Keyboard);
hu._keyCodeToIdentifierMap[35]=em;
hu._keyCodeToIdentifierMap[45]=dd;
hu._keyCodeToIdentifierMap[112]=cY;
hu._keyCodeToIdentifierMap[115]=fh;
hu._keyCodeToIdentifierMap[120]=dG;
}this.__zO=this.__Ax();
},events:{"load":ft,"loadingError":fu,"messengerContent":fu,"cursorContext":fu,"ready":ft,"readyAfterInvalid":ft,"focused":ft,"focusOut":ft,"contextmenu":fu,"undoRedoState":fu},statics:{simpleLinebreak:cy,EMPTY_DIV:"<div></div>",GetWordsRegExp:/([^\u0000-\u0040\u005b-\u005f\u007b-\u007f]|['])+/g,CleanupWordsRegExp:/[\u0000-\u0040]/gi,hotkeyInfo:{bold:{method:da},italic:{method:fj},underline:{method:dp},undo:{method:cn},redo:{method:fB}},__zP:function(hM){if(hM==null||hM==fx){return fx;
}else if(typeof hM==cC){var hN=fx;

for(var i in hM){hN+=i+cf+hM[i]+cA;
}return hN;
}else{return hM;
}},__zQ:function(he){var hf={};
var a=he.split(cl);
var i;

for(i=0;i<a.length;i++){var hg=a[i],hh=hg.indexOf(fe);

if(hh===-1){continue;
}var name=qx.lang.String.trim(hg.substring(0,hh));
var hi=qx.lang.String.trim(hg.substring(hh+1,hg.length));

if(name&&hi){hf[name]=hi;
}}return hf;
},__zR:function(gy,gz,gA,gB){var gG=[];

switch(gy.nodeType){case 1:case 11:var i;
var gE=gy.tagName.toLowerCase();
var gI={};
var gC={};
var closed=(!(gy.hasChildNodes()||qx.bom.htmlarea.HtmlArea.__zS(gy)));

if(gz){if(qx.core.Variant.isSet(fy,fw)){if(gE==fG&&gy.className&&gy.className==fO){for(i=gy.firstChild;i;i=i.nextSibling){gG.push(qx.bom.htmlarea.HtmlArea.__zR(i,true,gA,gB));
}return gG.join(fx);
}}var gH=gy.attributes;
var gF=gH.length;
var a;

if(qx.core.Variant.isSet(fy,fv)){if(gE==cP&&gF==1&&gH[0].name==dN&&gy.childNodes.length==0){return fx;
}}
for(i=0;i<gF;i++){a=gH[i];
if(!a.specified){continue;
}var name=qx.dom.Node.getName(a);
var gJ=a.nodeValue;
if(/(_moz|contenteditable)/.test(name)){continue;
}
if(name!=eX){if(qx.bom.client.Engine.MSHTML){if(name==ed&&gy.getAttribute(dX)){gJ=gy.getAttribute(dX);
}else if(!isNaN(gJ)){gJ=gy.getAttribute(name);
}else{gJ=a.nodeValue;
}}else{gJ=a.nodeValue;
}}else{gJ=gy.style.cssText;
}
if(/(_moz|^$)/.test(gJ)){continue;
}if(name==dX){continue;
}if(!gJ){continue;
}if(name==ed&&gJ==eb){continue;
}if(name.charAt(0)===eA){continue;
}gI[name]=gJ;
}if(gI.style!==undefined){gC=qx.bom.htmlarea.HtmlArea.__zQ(gI.style);
delete gI.style;
}if(gB){var gD={domElement:gy,tag:gE,attributes:gI,styles:gC};
gB(gD);
gD.domElement=null;
gE=gD.tag;
}if(gE){gG.push(cD,gE);
for(var name in gI){var gJ=gI[name];
gG.push(fs,name,dD,gJ.toString().replace(new RegExp(ec,ci),fX),ec);
}if(!qx.lang.Object.isEmpty(gC)){gG.push(cN);

for(var name in gC){var gJ=gC[name];
gG.push(name,fe,gJ.toString().replace(new RegExp(ec,ci),fX),cl);
}gG.push(ec);
}gG.push(closed?cO:gc);
}}for(i=gy.firstChild;i;i=i.nextSibling){gG.push(qx.bom.htmlarea.HtmlArea.__zR(i,true,gA,gB));
}if(gz&&!closed&&gE){gG.push(dA,gE,gc);
}break;
case 3:gG.push(gA?gy.data:qx.bom.htmlarea.HtmlArea.__zT(gy.data));
break;
case 8:gG.push(dr,gy.data,ez);
break;
}return gG.join(fx);
},closingTags:dS,__zS:function(gh){return (qx.bom.htmlarea.HtmlArea.closingTags.indexOf(fs+gh.tagName+fs)!=-1);
},__zT:function(s){s=s.replace(/&/ig,eq);
s=s.replace(/</ig,dM);
s=s.replace(/>/ig,dC);
s=s.replace(/\x22/ig,bY);
s=s.replace(/\xA9/ig,cT);
return s;
},isBlockNode:function(br){if(!qx.dom.Node.isElement(br)){return false;
}br=qx.dom.Node.getName(br);
return /^(body|form|textarea|fieldset|ul|ol|dl|li|div|p|h[1-6]|quote|pre|table|thead|tbody|tfoot|tr|td|th|iframe|address|blockquote)$/.test(br);
},isParagraphParent:function(b){if(!qx.dom.Node.isElement(b)){return false;
}b=qx.dom.Node.getName(b);
return /^(body|td|th|caption|fieldset|div)$/.test(b);
},isHeadlineNode:function(y){if(!qx.dom.Node.isElement(y)){return false;
}var z=qx.dom.Node.getName(y);
return /^h[1-6]$/.test(z);
}},properties:{contentType:{check:df,init:fo},messengerMode:{check:fr,init:false},insertParagraphOnLinebreak:{check:fr,init:true},insertLinebreakOnCtrlEnter:{check:fr,init:true},postProcess:{check:cG,nullable:true,init:null},useUndoRedo:{check:fr,init:true},nativeContextMenu:{check:fr,init:false},defaultFontFamily:{check:df,init:eG},defaultFontSize:{check:cX,init:4}},members:{__zU:null,__zV:false,__zW:false,__zX:false,__zY:false,__Aa:false,__zO:null,__Ab:null,__Ac:null,__Ad:null,__Ae:null,__zM:null,__Af:null,__Ag:null,__Ah:false,__Ai:false,__Aj:function(I){if(qx.dom.Node.isElement(I)&&qx.dom.Node.isNodeName(I,fG)){this.__zU=I;
}},_createAndAddIframe:function(gx){this.__Ae=qx.bom.Iframe.create();
qx.bom.Iframe.setSource(this.__Ae,gx);
if(qx.core.Variant.isSet(fy,fw)){qx.bom.element.Attribute.set(this.__Ae,eL,eB);
}else{qx.bom.element.Style.set(this.__Ae,eO,eS);
}qx.bom.element.Style.setStyles(this.__Ae,{width:fa,height:fa});
qx.dom.Element.insertBegin(this.__Ae,this.__zU);
},_getIframeDocument:function(){return qx.bom.Iframe.getDocument(this.__Ae);
},_getIframeWindow:function(){return qx.bom.Iframe.getWindow(this.__Ae);
},_addIframeLoadListener:function(){qx.event.Registration.addListener(this.__Ae,dv,this._loaded,this);
},__Ak:function(){this.__Af={"xhtml":{doctype:cd+et+fN+eT+cz+dK,html:fi+dx,meta:fS,style:qx.core.Variant.select(fy,{"mshtml":ct+ev,"default":db+eK}),contentStyle:dn,body:eM,footer:di}};
},__zN:fx,getIframeObject:function(){return this.__Ae;
},getCommandManager:function(){return this.__zO;
},setValue:function(hX){if(qx.lang.Type.isString(hX)){this.__zN=hX;
var hY=this._getIframeDocument();

if(hY&&hY.body){hY.body.innerHTML=this.__Al(hX);
}}},__Al:function(bm){var bp=fx;

if(qx.core.Variant.isSet(fy,fv)){if(qx.bom.client.Browser.VERSION<=2){bp+=dO;
}}var bq=bm.length==0?cb:fx;
var bo=qx.core.Variant.isSet(fy,fE)?dw:ee;
var bn=dI+fM+this.getDefaultFontFamily()+eU+ca+bo+ds+this.getDefaultFontSize()+eU+bp+bm+bq+fR+de+ff;
return bn;
},getValue:function(){return this.__zN;
},getComputedValue:function(gl){return this.getHtml(gl);
},getCompleteHtml:function(){var m=this.__Af[this.getContentType()];
var l=m.html+fc+m.meta+fT+m.contentStyle+cp+eY;
l+=eJ+this.__Am()+dy;
l+=this.getHtml()+di;
return l;
},__Am:function(){var Y=[cK,fJ,ek,dq,du,cF,fK,fl,eo,bX,fP,eH,dE,dc];
var X=qx.bom.element.Style;
var W=this.getContentBody();
var bc={};
var bb,bd;
var ba=qx.bom.client.Engine.MSHTML?2:1;

for(var i=0,j=Y.length;i<j;i++){bb=Y[i];
bd=X.get(W,bb,ba);

if(bd!==undefined&&bd!=fx){bc[bb]=bd;
}}return qx.bom.element.Style.compile(bc);
},getContentDocument:function(){if(this.__zV){return this._getIframeDocument();
}},getContentBody:function(){if(this.__zV){return this._getIframeDocument().body;
}},getContentWindow:function(){if(this.__zV){return this._getIframeWindow();
}},getWords:function(bx){if(!bx){bx=this.getContentBody();
}
if(!bx){return [];
}var bz=bx.cloneNode(true);
bz.innerHTML=bz.innerHTML.replace(/>/gi,cg);
bz.innerHTML=bz.innerHTML.replace(/\n/gi,fs);
bz.innerHTML=bz.innerHTML.replace(/<!--.*-->/gi,fx);
var by=qx.core.Variant.isSet(fy,ew)?bz.innerText:bz.textContent;
var bA=by.match(qx.bom.htmlarea.HtmlArea.GetWordsRegExp);
return !bA?[]:bA;
},getWordsWithElement:function(){var gL=this.getTextNodes();
var gP={};
var i,j,gQ,gM,gK;

for(var i=0,gO=gL.length;i<gO;++i){gM=gL[i];
gQ=gM.nodeValue.split(fs);

for(var j=0,gN=gQ.length;j<gN;++j){gK=this._cleanupWord(gQ[j]);

if(gK!=null&&gK.length>1){if(!gP[gK]){gP[gK]=[];
}gP[gK].push(gM);
}}}return gP;
},_cleanupWord:function(V){if(!V){return null;
}return V.replace(qx.bom.htmlarea.HtmlArea.CleanupWordsRegExp,fx);
},getTextNodes:function(){return this._fetchTextNodes(this.getContentBody());
},_fetchTextNodes:function(hC){var hE=[];
var hD;
if(hC.hasChildNodes){for(var i=0;i<hC.childNodes.length;i++){hD=this._fetchTextNodes(hC.childNodes[i]);
qx.lang.Array.append(hE,hD);
}}if(hC.nodeType==3){if(hC.nodeValue.length>1){hE.push(hC);
}}return hE;
},__An:0,__Ao:function(){var H=this._getIframeDocument();
if(!H){this.__An++;

if(this.__An>5){this.error('cant load HtmlArea. Document is not available. '+H);
this.fireDataEvent(dW);
}else{{};
qx.event.Timer.once(function(){this.__Ao();
},this,0);
}}else{this.__An=0;
this._onDocumentIsReady();
}},_loaded:function(e){if(this.__zX){return;
}
if(this.__zW){this.__Ap();
return;
}if(qx.core.Variant.isSet(fy,fw)){this.__Ao();
}else{this._onDocumentIsReady();
}},isReady:function(){return this.__zV;
},_onDocumentIsReady:function(){var gi=new qx.bom.htmlarea.manager.Command(this);

if(this.getUseUndoRedo()){gi=new qx.bom.htmlarea.manager.UndoRedo(gi,this);
}this.__zX=true;
if(qx.core.Variant.isSet(fy,fw)){this.setEditable(true);
}this.__As();

if(!qx.core.Variant.isSet(fy,fq)){this.__At();
}if(!qx.core.Variant.isSet(fy,fw)){this.setEditable(true);
}this.__zV=true;
this.__zO=gi;
gi.setContentDocument(this._getIframeDocument());
this.__Ay();
if(qx.core.Variant.isSet(fy,fq)){this.__At();
}this.fireEvent(en);
},forceEditable:qx.core.Variant.select(fy,{"gecko":function(){var hn=this._getIframeDocument();

if(hn){if(qx.bom.client.Engine.VERSION>=eg){hn.designMode=er;
hn.body.contentEditable=false;
hn.body.contentEditable=true;
}else{hn.body.contentEditable=true;
this.__Az(true);
}}},"default":qx.lang.Function.empty}),invalidateEditor:qx.core.Variant.select(fy,{"gecko":function(){this.__zX=false;
this.__zV=false;
this.__zW=true;
},"default":function(){}}),__Ap:qx.core.Variant.select(fy,{"gecko":function(){this.__As();
this.__At();
this.__zO.setContentDocument(this._getIframeDocument());
this.setEditable(true);
this.forceEditable();
this.__zX=true;
this.__zV=true;
this.__zW=false;
this.fireEvent(cR);
},"default":function(){}}),__Aq:function(hI){var hK=fx;

if(!hI){return hK;
}
try{var hJ=hI.getAttribute(eX);

if(!hJ){return hK;
}if(qx.core.Variant.isSet(fy,fw)){hK=hJ.cssText;
}else{hK=hJ;
}}catch(x){this.error("can't extract style from elem. ");
}return hK;
},__Ar:function(D){var E=qx.bom.client.Engine.GECKO?eP:fx;
var F=this.__Af[this.getContentType()];
var G=fc+F.meta+fT+E+F.style+F.contentStyle+this.__zM+cp+eY;
var content=F.body+D;
return F.html+G+content+F.footer;
},__As:function(){var hB=this.__Al(this.getValue());

if(qx.lang.Type.isString(hB)){var hA=this._getIframeDocument();

try{hA.open(eF,true);
hA.write(this.__Ar(hB));
hA.close();
}catch(e){this.error("cant open document on source '"+qx.bom.Iframe.queryCurrentUrl(this.__Ae)+"'",e);
this.fireDataEvent(dW,e);
}}},__At:function(){this.__Au();
this.__Aw();
this.__Av();
},__Au:function(){var bf=qx.event.Registration;
var be=this._getIframeDocument();
bf.addListener(be.body,cj,this._handleKeyPress,this);
bf.addListener(be.body,dm,this._handleKeyUp,this);
bf.addListener(be.body,dl,this._handleKeyDown,this);
},__Av:function(){var hQ=qx.event.Registration;
var hO=this._getIframeDocument();
var hP=qx.bom.client.Engine.WEBKIT?this._getIframeWindow():hO.body;
hQ.addListener(hP,fW,this._handleFocusEvent,this);
hQ.addListener(hP,ga,this._handleBlurEvent,this);
hQ.addListener(hO,dj,this._handleFocusOutEvent,this);
},__Aw:function(){var gw=qx.event.Registration;
var gv=this._getIframeDocument();
var gu=qx.bom.client.Engine.MSHTML?fU:fA;
gw.addListener(gv.body,gu,this._handleMouseUpOnBody,this);
gw.addListener(gv.documentElement,gu,this._handleMouseUpOnDocument,this);
gw.addListener(gv.documentElement,dV,this._handleContextMenuEvent,this);
},__Ax:function(){if(this.__Ab==null){this.__Ab={execute:function(L,M){this.stackedCommands=true;
this.commandStack.push({command:L,value:M});
},commandStack:[],stackedCommands:false};
}this.__Ab.stackedCommands=false;
return this.__Ab;
},__Ay:function(){var J=this.__Ab;

if(J!=null&&J.stackedCommands){var K=J.commandStack;

if(K!=null){for(var i=0,j=K.length;i<j;i++){this.__zO.execute(K[i].command,K[i].value);
}}}},__Az:function(hv){var hw=this._getIframeDocument();

if(this.__zX&&hw){try{if(qx.core.Variant.isSet(fy,fv)){hw.designMode=(hv!==false)?eV:fD;
}hw.designMode=(hv!==false)?fD:eV;
}catch(e){}}},setEditable:function(t){if(this.__zX){this.__Az(true);
if(qx.core.Variant.isSet(fy,fv)){try{var u=this._getIframeDocument();
u.execCommand(cQ,false,true);
}catch(bw){try{var u=this._getIframeDocument();
u.execCommand(cB,false,false);
}catch(c){if(!this.__zV){this.error("Failed to enable rich edit functionality");
this.fireDataEvent(dW,c);
}else{throw new Error("Failed to enable rich edit functionality");
}}}}this.__zY=t;
}},getEditable:function(){return this.__zY;
},isEditable:function(){return this.__zY;
},__AA:false,_handleKeyUp:function(e){var go=e.getKeyIdentifier().toLowerCase();
this.__Ac=e;

if(false&&qx.core.Setting.get(ea)==dY){this.debug(e.getType()+" | "+go);
}if(qx.core.Variant.isSet(fy,eQ)){if(this.__AA){switch(go){case fp:if(this.getInsertLinebreakOnCtrlEnter()){if(qx.core.Variant.isSet(fy,dk)){this.__AB();
e.preventDefault();
e.stopPropagation();
}else{var gp=this.__AL(this.getSelection());

if(gp){gp.collapse(true);
gp.pasteHTML(dP);
}}this.__AG();
}break;
case fV:this.__AA=false;
return;
break;
}}}else if(qx.core.Variant.isSet(fy,fv)){switch(go){case ck:case cr:case gb:case ch:case dU:case co:case gd:case fF:case fz:this.__Aa=(this.getFocusNode()==this.getContentBody().firstChild);
break;
}}},__AB:function(){var hy=this.getSelection();
var hz="";
if(hy&&(hy.focusNode.textContent==""||hy.focusNode.parentElement.tagName=="LI")){hz="<br class='webkit-block-placeholder' />";
}this.__zO.execute("inserthtml",hz+qx.bom.htmlarea.HtmlArea.simpleLinebreak);
},_handleKeyDown:qx.core.Variant.select(fy,{"mshtml|webkit":function(e){var hR=e.getKeyIdentifier().toLowerCase();

if(false&&qx.core.Setting.get(ea)==dY){}if(this.__AA&&(hR==dg||hR==fH||hR==dh||hR==cq||hR==fC||hR==fb)){e.preventDefault();
e.stopPropagation();
}if(hR==fV){this.__AA=true;
}},"default":function(e){}}),_handleKeyPress:function(e){var gV=this.getContentDocument();
var gR=e.getKeyIdentifier().toLowerCase();
var gT=e.isCtrlPressed();
var gU=e.isShiftPressed();
this.__Ac=e;

if(false&&qx.core.Setting.get(ea)==dY){this.debug(e.getType()+" | "+gR);
}if(this.__Ah){var hd=!(qx.core.Variant.isSet(fy,fw)&&gR==fp)||!(qx.core.Variant.isSet(fy,fv)&&gR==fp);

if(hd){this.__AG();
this.__Ah=false;
}}
switch(gR){case fp:if(!gU&&!gT&&this.getMessengerMode()){e.preventDefault();
e.stopPropagation();
var hb=new qx.event.type.Data(eh,this.getComputedValue());
this.dispatchEvent(hb,true);
this.resetHtml();
}if(gT){if(!this.getInsertLinebreakOnCtrlEnter()){return;
}e.preventDefault();
e.stopPropagation();

if(qx.core.Variant.isSet(fy,fv)){if(this.__AJ()){this.insertHtml(cs);
this.__AG();
return;
}this.insertHtml(cx);
}else if(qx.core.Variant.isSet(fy,fq)){var hc=this.getSelection();
var gW=this.__AL(hc);

if(hc&&gW){var gX=gV.createElement(cH);
gW.collapse(true);
gW.insertNode(gX);
gW.collapse(true);
gW.selectNode(gX);
hc.addRange(gW);
gW.collapse(true);
}}this.__AG();
}if(qx.core.Variant.isSet(fy,fw)){if(!this.getInsertParagraphOnLinebreak()){if(this.__zO.execute(fI,qx.bom.htmlarea.HtmlArea.simpleLinebreak)){this.__AG();
e.preventDefault();
e.stopPropagation();
}}}else if(qx.core.Variant.isSet(fy,fv)){if(this.getInsertParagraphOnLinebreak()&&!gU&&!gT){var hc=this.getSelection();

if(hc){var gS=hc.focusNode;
if(this.__AJ()){this.__AG();
return;
}if(this.__AK()){this.__AG();
return;
}while(!qx.dom.Node.isNodeName(gS,fm)){if(qx.dom.Node.isNodeName(gS,cJ)){this.__AG();
return;
}gS=gS.parentNode;
}}this.__zO.insertParagraphOnLinebreak();
e.preventDefault();
e.stopPropagation();
this.__AG();
this.__Ah=true;
}}else if(qx.core.Variant.isSet(fy,dk)){if(this.getInsertParagraphOnLinebreak()&&gU){this.__AB();
e.preventDefault();
e.stopPropagation();
this.__AG();
}}break;
case gb:if(qx.bom.client.Engine.GECKO&&qx.bom.client.Engine.FULLVERSION<1.9&&gU){var hc=this.getSelection();
if(hc&&hc.focusNode==gV.body.firstChild){if(this.__Aa){if(hc.focusOffset!=0){hc.extend(hc.focusNode,0);
}}}}this.__AG();
break;
case cE:if(qx.bom.client.Engine.GECKO&&qx.bom.client.Engine.FULLVERSION<1.9){if(gT){var hc=this.getSelection();
if(gU){if(hc&&(hc.focusOffset!=0)||(hc.focusNode!=gV.body.firstChild)){hc.extend(gV.body.firstChild,0);
}}else{var gY=null;
var ha;
if(gV){gY=gV.evaluate(ef,gV.body,null,XPathResult.ANY_TYPE,null);
}
if(gY&&hc){while(ha=gY.iterateNext()){if(ha&&ha.parentNode&&ha.parentNode.tagName!=bW){try{hc.extend(ha,0);

if(!this.isSelectionCollapsed()){hc.collapseToStart();
}}catch(e){}break;
}}}}}}this.__AG();
break;
case ck:case cr:case ch:case dU:case co:case gd:case fF:case fz:this.__AG();
break;
case dh:if(gT){this.__AC(cU,true);
}break;
case fC:case fb:if(gT){this.__AC(ce,true);
}break;
case cq:if(gT){this.__AC(cV,true);
}break;
case dg:if(gT&&!gU){this.__AC(cM,true);
}else if(gT&&gU){this.__AC(fd,true);
}break;
case fH:if(gT){this.__AC(fd,true);
}break;
case ei:if(gT){this.selectAll();
}break;
}this.__Ac=null;
},__AC:function(bg,bh){var bj=null;
var bi=qx.bom.htmlarea.HtmlArea.hotkeyInfo;

if(bi[bg]){bj=bi[bg].method;
}
if(bj!=null&&this[bj]){this[bj]();

if(bh){this.__Ac.preventDefault();
this.__Ac.stopPropagation();
}
if(this.isSelectionCollapsed()){this.__Ah=true;
}this.__AG();
}},_handleFocusEvent:function(e){this.__Ad=null;

if(qx.core.Variant.isSet(fy,fE)){var hW=this.getContentDocument().getElementById(eb);

if(hW){qx.bom.element.Attribute.reset(hW,ed);
}}this.fireEvent(dt);
},_handleBlurEvent:function(e){this.__zN=this.getComputedValue();
},_handleFocusOutEvent:function(e){this.__AA=false;

if(this.__Ad==null){this.__Ad=this.getSelectedHtml();
}this.fireEvent(fn);
},_handleMouseUpOnBody:function(e){if(false&&qx.core.Setting.get(ea)==dY){this.debug("handleMouse "+e.getType());
}this.__Ai=true;
this.__AG();
},_handleMouseUpOnDocument:qx.core.Variant.select(fy,{"mshtml":qx.lang.Function.empty,"default":function(e){if(!this.__Ai){qx.bom.Element.activate(this.getContentBody());
}this.__Ai=false;
}}),_handleContextMenuEvent:function(e){if(!this.getNativeContextMenu()){var g=e.getViewportLeft();
var f=e.getViewportTop();
var h=qx.bom.element.Location.getLeft(this.__zU)+g;
var k=qx.bom.element.Location.getTop(this.__zU)+f;
var d={x:h,y:k,relX:g,relY:f,target:e.getTarget()};
e.preventDefault();
e.stopPropagation();
qx.event.Timer.once(function(){this.fireDataEvent(dV,d);
},this,0);
}},isLoaded:function(){return this.__zX;
},insertHtml:function(gm){return this.__zO.execute(fI,gm);
},removeFormat:function(){return this.__zO.execute(ep);
},setBold:function(){return this.__zO.execute(cS);
},setItalic:function(){return this.__zO.execute(eR);
},setUnderline:function(){return this.__zO.execute(fQ);
},setStrikeThrough:function(){return this.__zO.execute(ey);
},setFontSize:function(gf){return this.__zO.execute(fk,gf);
},setFontFamily:function(S){return this.__zO.execute(eC,S);
},setTextColor:function(hj){return this.__zO.execute(cI,hj);
},setTextBackgroundColor:function(w){return this.__zO.execute(cL,w);
},setJustifyLeft:function(){return this.__zO.execute(fg);
},setJustifyCenter:function(){return this.__zO.execute(cw);
},setJustifyRight:function(){return this.__zO.execute(dJ);
},setJustifyFull:function(){return this.__zO.execute(cu);
},insertIndent:function(){return this.__zO.execute(es);
},insertOutdent:function(){return this.__zO.execute(eE);
},insertOrderedList:function(){return this.__zO.execute(eN);
},insertUnorderedList:function(){return this.__zO.execute(cW);
},insertHorizontalRuler:function(){return this.__zO.execute(dH);
},insertImage:function(bV){return this.__zO.execute(ej,bV);
},insertHyperLink:function(gk){return this.__zO.execute(cv,gk);
},removeBackgroundColor:function(){this.__zO.execute(dT,dR);
},setBackgroundColor:function(gn){this.__zO.execute(dT,gn);
},removeBackgroundImage:function(){this.__zO.execute(eW);
},setBackgroundImage:function(hT,hU,hV){return this.__zO.execute(eW,[hT,hU,hV]);
},selectAll:function(){return this.__zO.execute(dQ);
},undo:function(){if(this.getUseUndoRedo()){return this.__zO.execute(cn);
}else{return true;
}},redo:function(){if(this.getUseUndoRedo()){return this.__zO.execute(fB);
}else{return true;
}},resetHtml:function(){var N=this._getIframeDocument();
while(N.body.firstChild){N.body.removeChild(N.body.firstChild);
}if(qx.bom.client.Engine.GECKO){N.body.innerHTML=eu;
}else if(qx.bom.client.Engine.WEBKIT){var O=this.getSelection();
var P=N.createRange();

if(P&&O){O.addRange(P);
}}},getHtml:function(p){var q=this._getIframeDocument();

if(q==null){return null;
}return qx.bom.htmlarea.HtmlArea.__zR(q.body,false,p,this.getPostProcess());
},containsOnlyPlaceholder:qx.core.Variant.select(fy,{"mshtml":function(){var ia=this._getIframeDocument();
return (ia.body.innerHTML==dz);
},"default":qx.lang.Function.returnFalse}),_selectElement:function(A){var C=this.getContentWindow().getSelection();
var B=this.getContentDocument().createRange();
B.setStart(A,0);
C.removeAllRanges();
C.addRange(B);
},focusContent:qx.core.Variant.select(fy,{"gecko":function(){var id=this.getContentDocument();
var ic=id.getElementById(eb);
this.getContentWindow().focus();
qx.bom.Element.focus(this.getContentBody());

if(ic){this._selectElement(ic);
}else{this.__AD();
}},"webkit":function(){qx.bom.Element.focus(this.getContentWindow());
qx.bom.Element.focus(this.getContentBody());
var hF=this.getContentDocument().getElementById(eb);

if(hF){qx.bom.element.Attribute.reset(hF,ed);
}this.__AD();
},"opera":function(){qx.bom.Element.focus(this.getContentWindow());
qx.bom.Element.focus(this.getContentBody());
this.__AD();
},"default":function(){qx.bom.Element.focus(this.getContentBody());
this.__AD();
}}),__AD:function(){if(!this.__AE()){this.__AF();
}},__AE:qx.core.Variant.select("qx.client",{"gecko":function(){var bt=this.getContentBody().childNodes;

if(bt.length==0){return false;
}else if(bt.length==1){return !(bt[0]&&qx.dom.Node.isNodeName(bt[0],"br")&&qx.bom.element.Attribute.get(bt[0],"_moz_dirty")!=null);
}else{return true;
}},"webkit":function(){var ib=this.getContentBody().childNodes;

if(ib.length==0){return false;
}else if(ib.length==1){return !(ib[0]&&qx.dom.Node.isNodeName(ib[0],"br"));
}else{return true;
}},"default":function(){var T=this.getContentBody().childNodes;

if(T.length==0){return false;
}else if(T.length==1){return !(T[0]&&qx.dom.Node.isNodeName(T[0],"p")&&T[0].firstChild==null);
}else{return true;
}}}),__AF:qx.core.Variant.select("qx.client",{"gecko|webkit":function(){this.getContentDocument().body.innerHTML=this.__Al("");
var ge=this.getContentDocument().getElementById("__elementToFocus__");
qx.bom.element.Attribute.reset(ge,"id");
this._selectElement(ge);
},"default":function(){var hx=qx.dom.Hierarchy.getFirstDescendant(this.getContentBody());

if(qx.dom.Node.isNodeName(hx,"p")){qx.bom.element.Style.set(hx,"font-family",this.getDefaultFontFamily());
qx.bom.element.Style.set(hx,"font-size",this.getDefaultFontSize());
}}}),getContextInformation:function(){return this.__AH();
},__AG:function(){qx.event.Timer.once(function(e){var hS=this.__AH();
this.fireDataEvent("cursorContext",hS);
},this,200);
},__AH:function(){if(this._processingExamineCursorContext||this.getEditable()==false){return;
}this._processingExamineCursorContext=true;

if(!this.__AE()){this.__AF();
}var bE=this.getFocusNode();

if(bE==null){return;
}
if(qx.dom.Node.isText(bE)){bE=bE.parentNode;
}var bI=this._getIframeDocument();
var bR=qx.core.Variant.isSet("qx.client","mshtml")?bE.currentStyle:bI.defaultView.getComputedStyle(bE,null);
var bL=false;
var bB=false;
var bG=false;
var bF=false;
var bM=false;
var bQ=false;
var bH=false;
var bS=false;
var bD=false;
var bO=false;
var bP=null;
var bT=null;
var bK=null;

if(bR!=null){if(qx.core.Variant.isSet("qx.client","mshtml")){bB=bR.fontStyle=="italic";
bG=bR.textDecoration.indexOf("underline")!==-1;
bF=bR.textDecoration.indexOf("line-through")!==-1;
bP=bR.fontSize;
bK=bR.fontFamily;
bH=bR.textAlign=="left";
bS=bR.textAlign=="center";
bD=bR.textAlign=="right";
bO=bR.textAlign=="justify";
}else{bB=bR.getPropertyValue("font-style")=="italic";
bG=bR.getPropertyValue("text-decoration").indexOf("underline")!==-1;
bF=bR.getPropertyValue("text-decoration").indexOf("line-through")!==-1;
bP=bR.getPropertyValue("font-size");
bK=bR.getPropertyValue("font-family");
bH=bR.getPropertyValue("text-align")=="left";
bS=bR.getPropertyValue("text-align")=="center";
bD=bR.getPropertyValue("text-align")=="right";
bO=bR.getPropertyValue("text-align")=="justify";
}
if(qx.core.Variant.isSet("qx.client","mshtml|opera")){bL=bR.fontWeight==700;
}else{bL=bR.getPropertyValue("font-weight")=="bold"||qx.dom.Node.isNodeName(bE,"b");
}}var bC=bE;
if(bC!=null&&bC.parentNode!=null&&!qx.dom.Node.isDocument(bC.parentNode)){while(bC!=null&&!qx.dom.Node.isNodeName(bC,"body")){var bJ=qx.dom.Node.getName(bC);

if(bJ=="ol"){bQ=true;
break;
}else if(bJ=="ul"){bM=true;
break;
}
if(bT==null||bT==""){bT=qx.bom.element.Attribute.get(bC,'size');
}bC=bC.parentNode;
}}var bN={bold:bL?1:0,italic:bB?1:0,underline:bG?1:0,strikethrough:bF?1:0,fontSize:(bT==null)?bP:bT,fontFamily:bK,insertUnorderedList:bM?1:0,insertOrderedList:bQ?1:0,justifyLeft:bH?1:0,justifyCenter:bS?1:0,justifyRight:bD?1:0,justifyFull:bO?1:0};
this._processingExamineCursorContext=false;
return bN;
},getSelection:qx.core.Variant.select(fy,{"mshtml":function(){return this._getIframeDocument()?this._getIframeDocument().selection:null;
},"default":function(){return this._getIframeWindow()?this._getIframeWindow().getSelection():null;
}}),isSelectionCollapsed:qx.core.Variant.select(fy,{"mshtml":function(){return this.getSelection()&&this.getSelection().type==fY;
},"default":function(){return this.getSelection()&&this.getSelection().isCollapsed;
}}),getSelectedText:qx.core.Variant.select(fy,{"mshtml":function(){return this.getRange()?this.getRange().text:fx;
},"default":function(){return this.getRange()?this.getRange().toString():fx;
}}),getSelectedHtml:function(){if(this.__Ad!=null){return this.__Ad;
}var bu=this.getRange();

if(!bu){return fx;
}else{return this.__AI(bu);
}},__AI:qx.core.Variant.select("qx.client",{"mshtml":function(v){if(!v){return "";
}return v.item?v.item(0).outerHTML:v.htmlText;
},"default":function(hk){var hl=this._getIframeDocument();

if(hl&&hk){try{var hm=hl.createElement("body");
hm.appendChild(hk.cloneContents());
return hm.innerHTML;
}catch(U){}return hk+"";
}return "";
}}),clearSelection:qx.core.Variant.select(fy,{"mshtml":function(){var bv=this.getSelection();

if(bv){bv.empty();
}},"default":function(){var r=this.getSelection();

if(r){r.collapseToStart();
}}}),__AJ:qx.core.Variant.select("qx.client",{"gecko":function(){var hG=this.getSelection();
var hH=this.getFocusNode();
return hG&&this.isSelectionCollapsed()&&hH!=null&&qx.dom.Node.isText(hH)&&hG.anchorOffset<hH.length;
},"default":function(){return false;
}}),__AK:qx.core.Variant.select("qx.client",{"gecko":function(){return qx.dom.Node.isElement(this.getFocusNode());
},"default":function(){return false;
}}),getRange:function(){return this.__AL(this.getSelection());
},__AL:qx.core.Variant.select("qx.client",{"mshtml":function(n){var o=this._getIframeDocument();

if(n){try{return n.createRange();
}catch(hL){return o?o.body.createTextRange():null;
}}else{return o?o.body.createTextRange():null;
}},"default":function(bk){var bl=this._getIframeDocument();

if(bk){try{return bk.getRangeAt(0);
}catch(bs){return bl?bl.createRange():null;
}}else{return bl?bl.createRange():null;
}}}),saveRange:qx.core.Variant.select(fy,{"mshtml":function(){this.__Ag=this.getRange();
},"default":function(){}}),getSavedRange:qx.core.Variant.select(fy,{"mshtml":function(){return this.__Ag;
},"default":function(){}}),resetSavedRange:qx.core.Variant.select(fy,{"mshtml":function(){this.__Ag=null;
},"default":function(){}}),getFocusNode:qx.core.Variant.select(fy,{"mshtml":function(){var Q=this.getSelection();
var R;

switch(Q.type){case dL:case fY:R=this.__AL(Q);

if(R){R.collapse(false);
return R.parentElement();
}else{return null;
}break;
case fL:R=this.__AL(Q);

if(R){try{R.collapse(false);
}catch(bU){}return R.item(0);
}else{return null;
}break;
default:return this._getIframeDocument().body;
}},"default":function(){var gj=this.getSelection();

if(gj&&gj.focusNode){return gj.focusNode;
}return this._getIframeDocument().body;
}})},settings:{"qx.bom.htmlarea.HtmlArea.debug":cc},destruct:function(){try{var gr=this._getIframeDocument();
var gt=qx.event.Registration;
gt.removeListener(gr.body,cj,this._handleKeyPress,this);
gt.removeListener(gr.body,dm,this._handleKeyUp,this);
gt.removeListener(gr.body,dl,this._handleKeyDown,this);
var gs=qx.bom.client.Engine.WEBKIT?this._getIframeWindow():gr.body;
gt.removeListener(gs,fW,this._handleFocusEvent);
gt.removeListener(gs,ga,this._handleBlurEvent);
gt.removeListener(gr,dj,this._handleFocusOutEvent);
var gq=qx.bom.client.Engine.MSHTML?fU:fA;
gt.removeListener(gr.body,gq,this._handleMouseUpOnBody,this);
gt.removeListener(gr.documentElement,gq,this._handleMouseUpOnDocument,this);
gt.removeListener(gr.documentElement,dV,this._handleContextMenuEvent,this);

if(qx.core.Variant.isSet(fy,fw)){qx.bom.Iframe.setSource(this.__Ae,eD);
}}catch(gg){}this._disposeObjects(dF);
this.__Af=this.__Ae=this.__zU=this.__Ab=null;
}});
})();
(function(){var f="CSS1Compat",d="qx.bom.client.Feature",c="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",b="pointerEvents",a="label";
qx.Class.define(d,{statics:{STANDARD_MODE:false,QUIRKS_MODE:false,CONTENT_BOX:false,BORDER_BOX:false,SVG:false,CANVAS:!!window.CanvasRenderingContext2D,VML:false,XPATH:!!document.evaluate,AIR:navigator.userAgent.indexOf("adobeair")!==-1,GEARS:!!(window.google&&window.google.gears),SSL:window.location.protocol==="https:",ECMA_OBJECT_COUNT:(({}).__count__==0),CSS_POINTER_EVENTS:false,XUL:false,CSS_TEXT_OVERFLOW:("textOverflow" in document.documentElement.style||"OTextOverflow" in document.documentElement.style),HTML5_CLASSLIST:!!(document.documentElement.classList&&qx.Bootstrap.getClass(document.documentElement.classList)==="DOMTokenList"),__gs:function(){this.QUIRKS_MODE=this.__gt();
this.STANDARD_MODE=!this.QUIRKS_MODE;
this.CONTENT_BOX=!qx.bom.client.Engine.MSHTML||this.STANDARD_MODE;
this.BORDER_BOX=!this.CONTENT_BOX;
this.SVG=document.implementation&&document.implementation.hasFeature&&(document.implementation.hasFeature("org.w3c.dom.svg","1.0")||document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1"));
this.VML=qx.bom.client.Engine.MSHTML;

try{document.createElementNS(c,a);
this.XUL=true;
}catch(e){this.XUL=false;
}if(b in document.documentElement.style){if(qx.bom.client.Engine.OPERA){this.CSS_POINTER_EVENTS=false;
}else{this.CSS_POINTER_EVENTS=true;
}}},__gt:function(){if(qx.bom.client.Engine.MSHTML&&qx.bom.client.Engine.VERSION>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;
}else{return document.compatMode!==f;
}}},defer:function(g){g.__gs();
}});
})();
(function(){var i="",h="/",g="mshtml",f="qx.client",e="//",d="?",c="string",b="qx.util.ResourceManager",a="singleton";
qx.Class.define(b,{extend:qx.core.Object,type:a,statics:{__cr:qx.$$resources||{},__cs:{}},members:{has:function(o){return !!this.self(arguments).__cr[o];
},getData:function(j){return this.self(arguments).__cr[j]||null;
},getImageWidth:function(B){var C=this.self(arguments).__cr[B];
return C?C[0]:null;
},getImageHeight:function(t){var u=this.self(arguments).__cr[t];
return u?u[1]:null;
},getImageFormat:function(r){var s=this.self(arguments).__cr[r];
return s?s[2]:null;
},isClippedImage:function(p){var q=this.self(arguments).__cr[p];
return q&&q.length>4;
},toUri:function(k){if(k==null){return k;
}var l=this.self(arguments).__cr[k];

if(!l){return k;
}
if(typeof l===c){var n=l;
}else{var n=l[3];
if(!n){return k;
}}var m=i;

if(qx.core.Variant.isSet(f,g)&&qx.bom.client.Feature.SSL){m=this.self(arguments).__cs[n];
}return m+qx.$$libraries[n].resourceUri+h+k;
}},defer:function(v){if(qx.core.Variant.isSet(f,g)){if(qx.bom.client.Feature.SSL){for(var z in qx.$$libraries){var x;

if(qx.$$libraries[z].resourceUri){x=qx.$$libraries[z].resourceUri;
}else{v.__cs[z]=i;
continue;
}if(x.match(/^\/\//)!=null){v.__cs[z]=window.location.protocol;
}else if(x.match(/^\//)!=null){v.__cs[z]=window.location.protocol+e+window.location.host;
}else if(x.match(/^\.\//)!=null){var w=document.URL;
v.__cs[z]=w.substring(0,w.lastIndexOf(h)+1);
}else if(x.match(/^http/)!=null){v.__cs[z]=i;
}else{var A=window.location.href.indexOf(d);
var y;

if(A==-1){y=window.location.href;
}else{y=window.location.href.substring(0,A);
}v.__cs[z]=y.substring(0,y.lastIndexOf(h)+1);
}}}}}});
})();
(function(){var a="qx.lang.Object";
qx.Class.define(a,{statics:{empty:function(r){{};

for(var s in r){if(r.hasOwnProperty(s)){delete r[s];
}}},isEmpty:(qx.bom.client.Feature.ECMA_OBJECT_COUNT)?
function(g){{};
return g.__count__===0;
}:
function(D){{};

for(var E in D){return false;
}return true;
},hasMinLength:(qx.bom.client.Feature.ECMA_OBJECT_COUNT)?
function(B,C){{};
return B.__count__>=C;
}:
function(t,u){{};

if(u<=0){return true;
}var length=0;

for(var v in t){if((++length)>=u){return true;
}}return false;
},getLength:qx.Bootstrap.objectGetLength,getKeys:qx.Bootstrap.getKeys,getKeysAsString:qx.Bootstrap.getKeysAsString,getValues:function(h){{};
var k=[];
var j=this.getKeys(h);

for(var i=0,l=j.length;i<l;i++){k.push(h[j[i]]);
}return k;
},mergeWith:qx.Bootstrap.objectMergeWith,carefullyMergeWith:function(F,G){{};
return qx.lang.Object.mergeWith(F,G,false);
},merge:function(w,x){{};
var y=arguments.length;

for(var i=1;i<y;i++){qx.lang.Object.mergeWith(w,arguments[i]);
}return w;
},clone:function(m){{};
var n={};

for(var o in m){n[o]=m[o];
}return n;
},invert:function(H){{};
var I={};

for(var J in H){I[H[J].toString()]=J;
}return I;
},getKeyFromValue:function(d,e){{};

for(var f in d){if(d.hasOwnProperty(f)&&d[f]===e){return f;
}}return null;
},contains:function(p,q){{};
return this.getKeyFromValue(p,q)!==null;
},select:function(b,c){{};
return c[b];
},fromArray:function(z){{};
var A={};

for(var i=0,l=z.length;i<l;i++){{};
A[z[i].toString()]=true;
}return A;
}}});
})();
(function(){var c="qx.event.handler.Iframe",b="load",a="iframe";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{load:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false,onevent:qx.event.GlobalError.observeMethod(function(d){qx.event.Registration.fireEvent(d,b);
})},members:{canHandleEvent:function(e,f){return e.tagName.toLowerCase()===a;
},registerEvent:function(g,h,i){},unregisterEvent:function(j,k,l){}},defer:function(m){qx.event.Registration.addHandler(m);
}});
})();
(function(){var f="qx.client",e="webkit",d="body",c="iframe",b="qx.bom.Iframe";
qx.Class.define(b,{statics:{DEFAULT_ATTRIBUTES:{onload:"qx.event.handler.Iframe.onevent(this)",frameBorder:0,frameSpacing:0,marginWidth:0,marginHeight:0,hspace:0,vspace:0,border:0,allowTransparency:true},create:function(y,z){var y=y?qx.lang.Object.clone(y):{};
var A=qx.bom.Iframe.DEFAULT_ATTRIBUTES;

for(var B in A){if(y[B]==null){y[B]=A[B];
}}return qx.bom.Element.create(c,y,z);
},getWindow:qx.core.Variant.select(f,{"mshtml|gecko":function(a){try{return a.contentWindow;
}catch(x){return null;
}},"default":function(v){try{var w=this.getDocument(v);
return w?w.defaultView:null;
}catch(C){return null;
}}}),getDocument:qx.core.Variant.select(f,{"mshtml":function(k){try{var l=this.getWindow(k);
return l?l.document:null;
}catch(m){return null;
}},"default":function(q){try{return q.contentDocument;
}catch(r){return null;
}}}),getBody:function(n){try{var o=this.getDocument(n);
return o?o.getElementsByTagName(d)[0]:null;
}catch(D){return null;
}},setSource:function(s,t){try{if(this.getWindow(s)&&qx.dom.Hierarchy.isRendered(s)){try{if(qx.core.Variant.isSet(f,e)&&qx.bom.client.Platform.MAC){var u=this.getContentWindow();

if(u){u.stop();
}}this.getWindow(s).location.replace(t);
}catch(p){s.src=t;
}}else{s.src=t;
}}catch(g){qx.log.Logger.warn("Iframe source could not be set!");
}},queryCurrentUrl:function(i){var j=this.getDocument(i);

try{if(j&&j.location){return j.location.href;
}}catch(h){}return null;
}}});
})();
(function(){var dU="qx.client",dT="",dS="legacy-font-size",dR="mshtml",dQ="inserthtml",dP='color',dO="text-decoration",dN=';',dM="span",dL="transparent",dA="id",dz='">',dy="font-family",dx="BackColor",dw="gecko",dv="text-align",du='text-decoration',dt="child",ds="/>",dr="<img ",ec="backgroundPosition",ed="p",ea='|',eb="string",dX="background-color",dY="backgroundRepeat",dV="font",dW=":",ee="='",ef=" ",dE=";",dD="</font>",dG="px",dF="Control",dI="FontSize",dH="backgroundImage",dK="__paragraph__",dJ="size",dC="font-size",dB="' ",cx=':',cy="BODY",cz="undefined",cA="backgroundColor",cB="OL",cC="insertParagraph",cD="_moz",cE="no-repeat",cF=' <a href="',cG="FONT",ej="__placeholder__",ei='font-family:',eh="<p style='",eg="outdent",en='</a> ',em='<span style="',el="blockquote",ek="li",ep="a",eo="style",da="qx.bom.htmlarea.manager.Command",db="'><br class='webkit-block-placeholder' />",cX='"',cY="<span></span>",de="type",df="InsertHtml",dc="qx_link",dd="none",cV='"></span>',cW="body",cO='text-align:',cN="url(",cQ='" ',cP='</p>',cK="<hr />",cJ='<font style="',cM='<p id="',cL="LI",cI='>',cH='" size="',dk="top",dl="HiliteColor",dm="br",dn="</span>",dg="indent",dh='',di='style="',dj="_moz_dirty",dp="color",dq=")",cU="href",cT='<span id="',cS="UL",cR="webkit";
qx.Class.define(da,{extend:qx.core.Object,construct:function(ch){qx.core.Object.call(this);
this.__AM=ch;
this.__AN=null;
this._commands=null;
this.__AU();
this.__AO={"Bold":true,"Italic":true,"Underline":true,"StrikeThrough":true};
this.__AP=[10,12,16,18,24,32,48];
this.__AQ=0;
},statics:{__AR:"|top|bottom|center|left|right|right top|left top|left bottom|right bottom|",__AS:"repeat repeat-x repeat-y no-repeat"},members:{__AN:null,__AM:null,__AT:false,__AO:null,__AP:null,__AQ:null,setContentDocument:function(gw){this.__AN=gw;
},getCommandObject:function(fC){if(this._commands[fC]){return this._commands[fC];
}else{return null;
}},__AU:function(){this._commands={bold:{useBuiltin:false,identifier:"Bold",method:"__BA"},italic:{useBuiltin:false,identifier:"Italic",method:"__BB"},underline:{useBuiltin:false,identifier:"Underline",method:"__BC"},strikethrough:{useBuiltin:false,identifier:"StrikeThrough",method:"__BD"},fontfamily:{useBuiltin:true,identifier:"FontName",method:null},fontsize:{useBuiltin:false,identifier:"FontSize",method:"__Bs"},textcolor:{useBuiltin:true,identifier:"ForeColor",method:null},textbackgroundcolor:{useBuiltin:false,identifier:null,method:"__Bt"},backgroundcolor:{useBuiltin:false,identifier:null,method:"__Bu"},backgroundimage:{useBuiltin:false,identifier:null,method:"__Bv"},justifyleft:{useBuiltin:false,identifier:"JustifyLeft",method:"__Be"},justifyright:{useBuiltin:false,identifier:"JustifyRight",method:"__Be"},justifycenter:{useBuiltin:false,identifier:"JustifyCenter",method:"__Be"},justifyfull:{useBuiltin:false,identifier:"JustifyFull",method:"__Be"},indent:{useBuiltin:true,identifier:"Indent",method:null},outdent:{useBuiltin:true,identifier:"Outdent",method:null},copy:{useBuiltin:true,identifier:"Copy",method:null},cut:{useBuiltin:true,identifier:"Cut",method:null},paste:{useBuiltin:true,identifier:"Paste",method:null},insertorderedlist:{useBuiltin:false,identifier:"InsertOrderedList",method:"__Bf"},insertunorderedlist:{useBuiltin:false,identifier:"InsertUnorderedList",method:"__Bf"},inserthorizontalrule:{useBuiltin:false,identifier:"InsertHtml",method:"__Bk"},insertimage:{useBuiltin:false,identifier:"InsertImage",method:"__Bh"},inserthyperlink:{useBuiltin:false,identifier:"CreateLink",method:"__Bj"},selectall:{useBuiltin:false,identifier:"SelectAll",method:"__Bw"},selectedtext:{useBuiltin:false,identifier:null,method:"__Bx"},selectedhtml:{useBuiltin:false,identifier:null,method:"__By"},inserthtml:{useBuiltin:false,identifier:"InsertHtml",method:"__Ba"},resethtml:{useBuiltin:false,identifier:null,method:"__resetHtml"},gethtml:{useBuiltin:false,identifier:null,method:"__getHtml"},removeformat:{useBuiltin:true,identifier:"RemoveFormat",method:null}};
},execute:function(fM,fN){if(!this.__AM.isReady()){this.error("editor not ready! '"+fM+"':'"+fN+"'");
return false;
}fM=fM.toLowerCase();
fN=fN!=null?fN:null;
if(this._commands[fM]){var fO;
var fP=this._commands[fM];
if(!(qx.bom.client.Engine.WEBKIT&&(fM==dg||fM==eg))){if(this.__AV()){this.__AW();
}}if(fP.useBuiltin){fO=this.__AX(fP.identifier,false,fN);
}else{if(fP.method!=null&&this[fP.method]){fO=this[fP.method].call(this,fN,fP);
}else{this.error("The method '"+fP.method+"' you calling to execute the command '"+fM+"' is not available!");
}}this.__AM.resetSavedRange();
return fO;
}else{this.error("Command "+fM+" is currently not supported!");
}},__AV:function(){var Node=qx.dom.Node;
var gI=this.__AM.getFocusNode();
var gL=false;
var gJ=false;

if(gI){if(Node.isText(gI)){var gK=qx.dom.Hierarchy.getAncestors(gI);

for(var i=0,j=gK.length;i<j;i++){if(Node.isNodeName(gK[i],"p")||qx.bom.htmlarea.HtmlArea.isHeadlineNode(gK[i])){gL=true;
break;
}}}else if(Node.isNodeName(gI,"body")){gJ=true;
}}return gJ||!gL;
},__AW:function(){this.__AX("formatBlock",false,"p");
},__AX:function(gx,gy,gz){try{var gC=this.__AN;
var gA=false;
var gB=this.__AM.getRange();
this.__AN.body.focus();
if(qx.core.Variant.isSet("qx.client","mshtml")){if(gx!="selectall"){gB.select();
if(((gB.text)&&(gB.text.length>0))||((gB.length==1)&&(gB.item(0))&&(gB.item(0).tagName=="IMG"))){gC=gB;
}else{gC=this.__AN;
}}if((qx.core.Variant.isSet("qx.client","mshtml"))&&(this.__AO[gx])){if(gB.text==""){gA=true;
}}}var gD=gC.execCommand(gx,gy,gz);

if(gA&&gB.text!=""){gB.collapse();
}
if(false&&qx.core.Setting.get("qx.bom.htmlarea.HtmlArea.debug")=="on"){this.debug("execCommand "+gx+" with value "+gz+" succeded");
}this.__AT=false;
}catch(cq){if(false&&qx.core.Setting.get("qx.bom.htmlarea.HtmlArea.debug")=="on"){this.debug("execCommand "+gx+" with value "+gz+" failed");
}return false;
}return gD;
},__AY:qx.core.Variant.select("qx.client",{"mshtml":function(){var et=this.__AM;
var es=et.getSavedRange()!=null?et.getSavedRange():et.getRange();
return es;
},"default":function(){return this.__AM.getRange();
}}),__Ba:qx.core.Variant.select(dU,{"mshtml":function(gd,ge){var gh;
if(gd==qx.bom.htmlarea.HtmlArea.simpleLinebreak){return this.__Bd();
}else{this.__AN.body.focus();
var gg=this.__AM.getSelection();
var gf=this.__AY();
if(gf&&gg&&gg.type!=dF){try{gf.pasteHTML(gd);
gf.collapse(false);
gf.select();
gh=true;
}catch(e){}}else{gh=false;
}this.__AM.resetSavedRange();
return gh;
}},"default":function(gG,gH){this.__AN.body.focus();
return this.__AN.execCommand(gH.identifier,false,gG);
}}),insertParagraphOnLinebreak:qx.core.Variant.select(dU,{"gecko":function(){var fX=this.__Bn();
var gc=this.__Bb(fX);
var fT=this.__Bl(fX);
var fY=ej+Date.parse(new Date());
var ga=dK+Date.parse(new Date());
var fR=dh;
var fV=cT+fY+cV;
fR+=fV;
fR+=cM+ga+cQ+gc+cI;
fR+=fT+cP;
this.__AM.getCommandManager().addUndoStep(dQ,cC,this.getCommandObject(dQ));
this.execute(dQ,fR);
this.__Bc();
qx.bom.element.Attribute.reset(this.__AN.getElementById(fY),dA);
var fW=this.__AN.getElementById(ga);

if(fW.previousSibling.innerHTML==fV){var fQ=this.__Bm();
var fU=this.__AN.createElement(dm);
var fS=this.__AN.createAttribute(dj);
fS.nodeValue=dT;
fU.setAttributeNode(fS);
var gb=this.__AN.createAttribute(de);
gb.nodeValue=cD;
fU.setAttributeNode(gb);
fW.previousSibling.appendChild(fQ);
fW.previousSibling.appendChild(fU);
}qx.bom.element.Attribute.reset(fW,dA);
return true;
},"webkit":function(){var bG=this.getCurrentStyles();
var bH=dT;
var bJ={"background-color":true,"text-align":true};
for(var bI in bG){if(bJ[bI]){bH+=bI+dW+bG[bI]+dE;
}}this.__AM.insertHtml(eh+bH+db);
},"default":qx.lang.Function.empty}),__Bb:qx.core.Variant.select(dU,{"gecko":function(eS){var eX=di;
var eW=eS.child;
if(eW[dv]){eX+=cO+eW[dv]+dN;
delete eS.child[dv];
}if(eW[dy]){eX+=ei+eW[dy]+dN;
delete eS.child[dy];
}var eV={"padding-top":true,"padding-bottom":true,"padding-left":true,"padding-right":true};
var eT={"margin-top":true,"margin-bottom":true,"margin-left":true,"margin-right":true};

for(var eU in eW){if(eV[eU]||eT[eU]){eX+=eU+cx+eW[eU]+dN;
delete eS.child[eU];
}}eX+=cX;
return eX;
},"default":function(){return dT;
}}),__Bc:qx.core.Variant.select(dU,{"gecko":function(){var fi=this.__AM.getSelection();

if(!fi||!fi.focusNode){return;
}var fb=fi.focusNode;
var fg=fi.focusNode;

while(!qx.dom.Node.isNodeName(fg,ed)){fg=fg.parentNode;
}var ff=fg.previousSibling.id;
var fj=fg.nextSibling?fg.nextSibling.id:null;

if(qx.lang.String.startsWith(ff,dK)&&ff==fj){var fh=fg.nextSibling;
var fd=this.__AM.getRange();
fd.selectNode(fh);
fi.addRange(fd);
var fc=qx.bom.htmlarea.HtmlArea.EMPTY_DIV;
this.__AM.getCommandManager().addUndoStep(dQ,fc,this.getCommandObject(dQ));
this.execute(dQ,fc);
var fe=this.__AM.getRange();

if(fb){while(fb&&fb.firstChild&&qx.dom.Node.isElement(fb.firstChild)){fb=fb.firstChild;
}}fe.selectNode(fb);
fi.addRange(fe);
fe.collapse(true);
}},"default":qx.lang.Function.empty}),__Bd:qx.core.Variant.select(dU,{"mshtml":function(){var z=this.__AM.getRange();
if(z&&!qx.dom.Node.isNodeName(z.parentElement(),ek)){z.pasteHTML(qx.bom.htmlarea.HtmlArea.simpleLinebreak);
z.collapse(false);
z.select();
return true;
}return false;
},"default":function(){return false;
}}),__Be:function(J,K){var L=qx.core.Variant.isSet(dU,dR)?this.__AM.getRange():this.__AN;
return L.execCommand(K.identifier,false,J);
},__Bf:function(eO,eP){if(qx.core.Variant.isSet(dU,dR)){var eQ=this.__AM.getFocusNode();
this.__Bg(eQ);
}this.__AN.body.focus();
var eR=this.__AN.execCommand(eP.identifier,false,eO);

if(qx.core.Variant.isSet(dU,cR)){var eQ=this.__AM.getFocusNode();
this.__Bg(eQ.parentNode);
}return eR;
},__Bg:function(ct){var cu=[];
var parent=ct.parentNode;

while(qx.dom.Node.isNodeName(parent,el)){cu.push(parent);
parent=parent.parentNode;
}if(cu.length>0){parent.appendChild(ct);
parent.removeChild(cu[cu.length-1]);
}},__Bh:qx.core.Variant.select(dU,{"gecko":function(bQ,bR){if(bQ.src){this.__AN.execCommand(bR.identifier,false,bQ.src);
delete bQ.src;
var cf=this.__AM.getSelection();
if(cf){var ce=cf.anchorNode;
var bY=cf.anchorOffset;
var bV=ce.childNodes[bY-1];
var cc;

for(var bX in bQ){cc=this.__AN.createAttribute(bX);
cc.nodeValue=bQ[bX];
bV.setAttributeNode(cc);
}var bW={"font":true,"span":true};
var bT=null;
var cb=true;
if(qx.dom.Node.isElement(bV.previousSibling)&&bW[qx.dom.Node.getName(bV.previousSibling)]){bT=bV.previousSibling;
}else if(bW[qx.dom.Node.getName(bV.parentNode)]){bT=bV.parentNode;
cb=false;
}var bU=this.__AN.createDocumentFragment();
var cg;

if(cb&&bT!=null){var bW=this.__Bi(bT);
bU.appendChild(bW.root);
cg=bW.inline;
}else{cg=this.__AN.createElement(dM);
bU.appendChild(cg);
}var cd=this.__AN.createTextNode(dT);
cg.appendChild(cd);
var ca=bV.parentNode;
if(bV==ca.lastChild){ca.appendChild(bU);
}else{ca.insertBefore(bU,bV.nextSibling);
}var bS=this.__AM.getRange();
bS.selectNodeContents(cg);
}return true;
}else{return false;
}},"mshtml":function(fq,fr){var fv=false;
var fw=dr;

for(var fs in fq){fw+=fs+ee+fq[fs]+dB;
}fw+=ds;
var ft=this.__AM.getSelection();
var fu=this.__AY();
if(ft&&ft.type!=dF){try{fu.select();
fu.pasteHTML(fw);
fv=true;
}catch(e){}}this.__AM.resetSavedRange();
return fv;
},"default":function(o,p){if(o.src){var r=dr;

for(var q in o){r+=q+ee+o[q]+dB;
}r+=ds;
return this.__AN.execCommand(df,false,r);
}else{return false;
}}}),__Bi:function(a){while(a.firstChild&&a.firstChild.nodeType==1){a=a.firstChild;
}var f=this.__Bn(a);
var n,c,h;
var b=dT;
var parent=null;
var m=null;
var g=f.child;

while(g){m=this.__AN.createElement(g[dS]?dV:dM);
c=this.__AN.createAttribute(eo);
m.setAttributeNode(c);
for(var d in g){if(d!=dt&&d!=dS){b+=d+dW+g[d]+dE;
}else if(d==dS){h=this.__AN.createAttribute(dJ);
h.nodeValue=g[d];
m.setAttributeNode(h);
}}c.nodeValue=b;

if(parent!=null){parent.appendChild(m);
}else{n=m;
}parent=m;
g=g.child;
b=dT;
}return {root:n,inline:m};
},__Bj:qx.core.Variant.select(dU,{"gecko|opera":function(bx,by){var bE=this.__AM.getSelection();
var bB=this.__AM.getRange();
if(bE.isCollapsed){var bA=dc+(++this.__AQ);
var bF=this.__AN.createElement(ep);
var bC=this.__AN.createAttribute(cU);
var bz=this.__AN.createAttribute(dA);
var bD=this.__AN.createTextNode(bx);
bz.nodeValue=bA;
bF.setAttributeNode(bz);
bC.nodeValue=bx;
bF.setAttributeNode(bC);
bF.appendChild(bD);
bB.insertNode(bF);
bB.selectNode(bF);
bE.collapseToEnd();
return true;
}else{return this.__AN.execCommand(by.identifier,false,bx);
}},"mshtml":function(fD,fE){try{var fG;
var fF=this.__AY();
var fH=this.__AM;
var fF=fH.getSavedRange()!=null?fH.getSavedRange():fH.getRange();

if(fF!=null&&fF.text!=dT){fG=fF.execCommand(fE.identifier,false,fD);
}else{fG=this.__Ba(cF+fD+dz+fD+en,fE);
}this.__AM.resetSavedRange();
return fG;
}catch(e){{};
return false;
}},"default":function(A,B){return this.__AN.execCommand(B.identifier,false,A);
}}),__Bk:function(V,W){var X=cK;
if(qx.core.Variant.isSet(dU,dw)){X+=this.__Bl();
}return this.__Ba(X,W);
},__Bl:function(bn){var br=dT;
var bq=em;
var bp=[];
var bu=typeof bn!==cz?bn:this.__Bn();
var bs=bu.child;
var bt=false;
if(qx.lang.Object.isEmpty(bs)){return dT;
}
while(bs){bt=bs[dS]!=null;
br+=bt?cJ:bq;

for(var bo in bs){br+=(bo!=dt&&bo!=dS)?bo+cx+bs[bo]+dN:dT;
}br+=bt?cH+bs[dS]+dz:dz;
bp.unshift(bt?dD:dn);
bs=bs.child;
}if(bp.length==1&&bp[0]==dD){br+=cY;
}for(var i=0,j=bp.length;i<j;i++){br+=bp[i];
}return br;
},__Bm:function(){var D=this.__AN.createDocumentFragment();
var I=this.__Bn();
var parent=D;
var G=I.child;
var E;
var H=false;

while(G){H=G[dS]!=null;
E=this.__AN.createElement(H?dV:dM);
parent.appendChild(E);
for(var C in G){if(C!=dt&&C!=dS){qx.bom.element.Style.set(E,C,G[C]);
}}
if(H){var F=this.__AN.createAttribute(dJ);
F.nodeValue=G[dS];
E.setAttributeNode(F);
}parent=E;
G=G.child;
}return D;
},__Bn:function(ci){var ck={};
var cl=null;
var cm=this.getCurrentStyles(ci);
cl=ck.child={};

for(var cj in cm){if(cj!=dO){cl[cj]=cm[cj];
}}if(cm[dO]){var cn=cm[dO];
for(var i=0,j=cn.length;i<j;i++){if(cl==null){cl=ck.child={};
}else{cl=cl.child={};
}cl[dP]=cn[i][dP];
cl[du]=cn[i][du];
}}if(cm[dP]&&cm[du]){cl=cl.child={};
cl[dP]=cm[dP];
}return ck;
},getCurrentStyles:function(eI){if(eI==null){var eK=this.__AM.getSelection();

if(!eK||eK.focusNode==null){return {};
}eI=(eK.focusNode.nodeType==3)?eK.focusNode.parentNode:eK.focusNode;
}var eL=qx.dom.Hierarchy.getAncestors(eI);
var eN=qx.lang.Array.insertBefore(eL,eI,eL[0]);
var eJ=this.__Bo(eN);
var eM=this.__Bp(eJ,eN);
return eM;
},__Bo:function(bM){var bP={};
var bN,bO;

for(var i=0,j=bM.length;i<j;i++){bO=bM[i];

for(var k=0,l=bO.style.length;k<l;k++){bN=bO.style[k];

if(bN.length>0&&typeof bP[bN]===cz){bP[bN]=bO.style.getPropertyValue(bN);
}}if(bO.tagName.toUpperCase()==cG&&bO.size&&bP[dS]===undefined){bP[dS]=bO.size;
}}if(bP[dS]&&bP[dC]){delete bP[dC];
}return bP;
},__Bp:function(eu,ev){var eB=ev[0];
var ez=this.__AM.getContentWindow().getComputedStyle(eB,null);
var ew;
var eA={};

for(var ey in eu){if(ey!=dS){ew=ez.getPropertyValue(ey);
}else{ew=eu[ey];
}if(ey==dX&&ew==dL){eA[ey]=this.__Br(ev);
}else if(ey==dO){eA[ey]=this.__Bq(ev);
}else{eA[ey]=ew;
}}return eA;
},__Bq:function(bf){var bi,bk,bg;
var bj=[];
var bh=this.__AM.getContentWindow();

for(var i=0,j=bf.length;i<j;i++){bg=bh.getComputedStyle(bf[i],null);
bi=bg.getPropertyValue(dO);
bk=bg.getPropertyValue(dp);
if(bi!=dd){bj.push({'text-decoration':bi,'color':bk});
}}return bj;
},__Br:function(fI){var fK,fJ,fL;

for(var i=0;i<fI.length;i++){fK=fI[i];
fJ=this.__AM.getContentWindow().getComputedStyle(fK,null);
fL=fJ.getPropertyValue(dX);
if(fL!=dL){return fL;
}}},__Bs:function(gi,gj){var gv=this.__AM.getSelection();
var gq=(qx.core.Variant.isSet(dU,dR))?this.__AM.getRange():gq=gv.getRangeAt(0);
var gr=[];
var gu;
var gp=[cB,cS];
var gk,i,j,gs;
gs=(qx.core.Variant.isSet(dU,dR))?gq.parentElement():gq.commonAncestorContainer;
if(gs.tagName==cy){for(var i=0;i<gp.length;i++){gk=gs.getElementsByTagName(gp[i]);

for(var j=0;j<gk.length;j++){if(gk[j]){gr.push(gk[j]);
}}}}else if(qx.lang.Array.contains(gp,gs.tagName)){gr.push(gs);
}
if(gr.length>0){for(var i=0;i<gr.length;i++){var gm=gr[i];
gu=(qx.core.Variant.isSet(dU,dR))?
((gm==gs)||(gs.tagName==cy)):
gv.containsNode(gm,false);
for(j=0;j<gm.childNodes.length;j++){var go=gm.childNodes[j];
if(gu||
(gv.focusNode.nodeValue&&qx.dom.Hierarchy.contains(go,gv.focusNode)&&(gv.focusOffset==gv.focusNode.nodeValue.length))||
(qx.dom.Hierarchy.contains(go,gv.anchorNode)&&(gv.anchorOffset==0))||
(gv.containsNode(go,false))){go.style.fontSize=(this.__AP[gi]||gi)+dG;
}}}}else{var gn=(qx.core.Variant.isSet(dU,dR))?gs:gv.focusNode;
var gt=qx.dom.Hierarchy.getAncestors(gn);

for(i=0;i<gt.length;i++){if(gt[i].tagName==cL){if(((qx.core.Variant.isSet(dU,dw))&&
((gv.anchorOffset==0)&&
(gv.focusNode.nodeValue&&(gv.focusOffset==gv.focusNode.nodeValue.length))&&
qx.dom.Hierarchy.contains(gt[i].firstChild,gv.anchorNode)&&
qx.dom.Hierarchy.contains(gt[i].lastChild,gv.focusNode)))||
((qx.core.Variant.isSet(dU,dR))&&(gq.htmlText==gt[i].innerHTML))){gt[i].style.fontSize=(this.__AP[gi]||gi)+dG;
}break;
}}}if(qx.core.Variant.isSet(dU,dR)){this.__AN.body.focus();
this.__AM.getRange().select();
return this.__AN.execCommand(dI,false,gi);
}else if(qx.core.Variant.isSet(dU,dw)){var parent=gq.commonAncestorContainer;
if(parent.nodeType===1){var gl=parent.getElementsByTagName(dM);

for(i=0;i<gl.length;i++){if(gl[i].style.fontSize){gl[i].style.fontSize=null;
}}}}return this.__AN.execCommand(dI,false,gi);
},__Bt:qx.core.Variant.select(dU,{"mshtml":function(eY,fa){this.__AN.body.focus();
return this.__AN.execCommand(dx,false,eY);
},"gecko|opera":function(M,N){this.__AN.body.focus();
return this.__AN.execCommand(dl,false,M);
},"webkit":function(O,P){var Q=this.__AM.getSelection();
var R=this.__AM.getRange();
if(!Q||!Q.isCollapsed){this.__AN.body.focus();
this.__AN.execCommand(dx,false,O);
if(Q){Q.collapseToEnd();
}return true;
}else{var T=Q.anchorOffset;
var U=Q.anchorOffset;
var R=Q.getRangeAt(0);
var S=Q.anchorNode;
while(U>0){if(S.nodeValue.charCodeAt(U)==160||S.nodeValue.charCodeAt(U)==32){break;
}else{U--;
}}while(T<S.nodeValue.length){if(S.nodeValue.charCodeAt(T)==160||S.nodeValue.charCodeAt(T)==32){break;
}else{T++;
}}R.setStart(Q.anchorNode,Q.anchorNode.nodeValue.charAt(U)==ef?U+1:U);
R.setEnd(Q.anchorNode,T);
Q.addRange(R);
this.__AN.body.focus();
this.__AN.execCommand(dx,false,O);
Q.collapseToEnd();
return true;
}}}),__Bu:function(cv,cw){cv=cv!=null&&typeof cv==eb?cv:dL;
qx.bom.element.Style.set(this.__AN.body,cA,cv);
return true;
},__Bv:function(Y,ba){var bb,bd,bc;
var be=qx.bom.htmlarea.manager.Command;

if(Y==null){bb=null;
}else{bb=Y[0];
bd=Y[1];
bc=Y[2];
}if(bb==null||typeof bb!=eb){qx.bom.element.Style.set(this.__AN.body,dH,dT);
qx.bom.element.Style.set(this.__AN.body,dY,dT);
qx.bom.element.Style.set(this.__AN.body,ec,dT);
return true;
}else{if(bb.search(/^url.*\(/)==-1){bb=cN+bb+dq;
}}if(bd!=null&&!qx.lang.String.contains(be.__AS,bd)){{};
return false;
}else{bd=cE;
}
if(bc!=null){if(qx.lang.Type.isString(bc)&&!qx.lang.String.contains(be.__AR,ea+bc+ea)){{};
return false;
}else{if(qx.lang.Type.isArray(bc)&&bc.length==2){bc=bc[0]+ef+bc[1];
}else{{};
return false;
}}}else{bc=dk;
}qx.bom.element.Style.set(this.__AN.body,dH,bb);
qx.bom.element.Style.set(this.__AN.body,dY,bd);
qx.bom.element.Style.set(this.__AN.body,ec,bc);
return true;
},__Bw:qx.core.Variant.select(dU,{"mshtml":function(fx,fy){var fz=this.__AN.body.createTextRange();
fz.select();
return true;
},"default":function(bl,bm){return this.__AX(bm.identifier,false,bl);
}}),__Bx:function(){return this.__AM.getSelectedText();
},__By:function(){return this.__AM.getSelectedHtml();
},__Bz:function(fk,fl){var fp=this.__AM.getFocusNode();

if(fp.textContent==dT){var fn=qx.dom.Hierarchy.getAncestors(fp);
fn.unshift(fp);
var Node=qx.dom.Node;
var fm=qx.bom.element.Style;
var fo=fn.shift();

while(fn.length>0){if(Node.getName(fo)==ed||Node.getName(fo)==cW){break;
}if(fm.get(fo,fk,fm.LOCAL_MODE)==fl){fm.reset(fo,fk);
return true;
}fo=fn.shift();
}}return false;
},__BA:qx.core.Variant.select("qx.client",{"gecko":function(co,cp){if(this.__Bz("fontWeight","bold")){return true;
}else{return this.__AX(cp.identifier,false,co);
}},"default":function(cr,cs){return this.__AX(cs.identifier,false,cr);
}}),__BB:qx.core.Variant.select("qx.client",{"gecko":function(bv,bw){if(this.__Bz("fontStyle","italic")){return true;
}else{return this.__AX(bw.identifier,false,bv);
}},"default":function(bK,bL){return this.__AX(bL.identifier,false,bK);
}}),__BC:qx.core.Variant.select("qx.client",{"gecko":function(gE,gF){if(this.__Bz("textDecoration","underline")){return true;
}else{return this.__AX(gF.identifier,false,gE);
}},"webkit":function(eC,eD){var eE=this.__AM.getContextInformation();
var eG=this.__AM.getFocusNode();
if(eE.underline){eG.style.textDecoration="none";
}else{if(eE.strikethrough){var eH=this.__AN.createElement("span");
qx.bom.element.Style.set(eH,"textDecoration","underline");
eG.appendChild(eH);
var eF=this.__AM.getSelection();

if(eF){eF.extend(eH,0);

if(!eF.isCollapsed){eF.collapseToEnd();
}}}else{eG.style.textDecoration="underline";
}}return true;
},"default":function(x,y){return this.__AX(y.identifier,false,x);
}}),__BD:qx.core.Variant.select("qx.client",{"gecko":function(fA,fB){if(this.__Bz("textDecoration","line-through")){return true;
}else{return this.__AX(fB.identifier,false,fA);
}},"webkit":function(s,t){var v=this.__AM.getFocusNode();
var w=this.__AN.createElement("span");
qx.bom.element.Style.set(w,"textDecoration","line-through");
v.appendChild(w);
var u=this.__AM.getSelection();

if(u){u.extend(w,0);

if(!u.isCollapsed){u.collapseToEnd();
}}return true;
},"default":function(eq,er){return this.__AX(er.identifier,false,eq);
}})},destruct:function(){this.__AN=this.__AM=this._commands=null;
this.__AO=this.__AP=null;
}});
})();
(function(){var bz="qx.client",by="Command",bx="mshtml",bw="Custom",bv="Content",bu="Internal",bt="gecko",bs="webkit",br="mousedown",bq="backgroundimage",cs="table",cr="backgroundcolor",cq="td",cp="img",co="p",cn="mouseup",cm="keypress",cl="qx.bom.htmlarea.HtmlArea.debug",ck="inserthtml",cj="on",bG="undo",bH="backgroundColor",bE="undoRedoState",bF="pageup",bC="b",bD="shift",bA="end",bB="insertorderedlist",bK="control",bL="insertunorderedlist",bT="pagedown",bR="home",cb="backgroundImage",bV="backgroundRepeat",cf="a",cd="y",bN="backgroundPosition",ci="justifyright",ch="redo",cg="k",bM="qx.bom.htmlarea.manager.UndoRedo",bP="left",bQ="i",bS="__BE",bU="u",bW="inserthyperlink",cc="right",ce="Redo",bI="enter",bJ="insertimage",bO="z",ca="down",bY="up",bX="body";
qx.Class.define(bM,{extend:qx.core.Object,construct:function(bb,bc){qx.core.Object.call(this);
this.__BE=bb;
this.__BF=bc;
this.__BG=[];
this.__BH=[];
this._commands=null;
this.__BI=null;
this.__BJ={};
this.__BK={command:true,content:true,custom:true};
this.__Cj();
this.__BL=qx.lang.Function.bind(this._handleKeyPress,this);
this.__BM=qx.lang.Function.bind(this._handleMouseUp,this);

if(qx.core.Variant.isSet(bz,bx)){this.__BN=qx.lang.Function.bind(this._handleMouseDown,this);
}},members:{__BO:false,__BP:false,__BQ:false,__BK:null,__BJ:null,__BE:null,__BI:null,__BG:null,__BH:null,__BF:null,__BL:null,__BM:null,__BN:null,__BR:null,setContentDocument:function(bd){this.__BI=bd;
this.__BE.setContentDocument(bd);
qx.event.Registration.addListener(bd.body,cm,this.__BL,this);
qx.event.Registration.addListener(bd.body,cn,this.__BM,this);

if(qx.core.Variant.isSet(bz,bx)){qx.event.Registration.addListener(bd.body,br,this.__BN,this,true);
}},insertParagraphOnLinebreak:function(){return this.__BE.insertParagraphOnLinebreak();
},execute:function(cy,cz){var cA;
cy=cy.toLowerCase();
if(this._commands[cy]){if(this._commands[cy].passthrough){cA=this.__BE.execute(cy,cz);
}else{cA=this[cy].call(this);
}}else{if(qx.core.Variant.isSet(bz,bx)||qx.core.Variant.isSet(bz,bs)){this.__Ck(cy,cz,this.__BE.getCommandObject(cy));
cA=this.__BE.execute(cy,cz);
if(!cA){this.__BG.pop();
}}else{cA=this.__BE.execute(cy,cz);

if(cA){this.__Ck(cy,cz,this.__BE.getCommandObject(cy));
}}
if(cy==bG&&this.__BG.length==0){this.__BP=false;
this.__Cs();
}else if(cy==ch&&this.__BH.length==0){this.__BO=false;
this.__Cs();
}}this.__BQ=false;
return cA;
},addUndoStep:function(y,z,A){this.__Ck(y,z,A);
},registerHandler:function(a,b,c,d){this.__BJ[a]={undo:b,redo:c,context:d};
},isUndoPossible:function(){return this.__BP;
},undo:function(){var cG;

if(this.__BQ){this.__Cm();
}if(this.__BG.length>0){var cF=this.__BG.pop();

if(this.__BK[cF.actionType.toLowerCase()]){switch(cF.actionType){case by:cG=this.__BT(cF);
break;
case bv:cG=this.__BX(cF);
break;
case bu:cG=this.__BW(cF);
break;
case bw:cG=this.__BS(cF);
break;
}}else if(this.__BJ[cF.actionType]){var cE=this.__BJ[cF.actionType];
cG=cE.undo.call(cE.context?cE.context:this,cF);
this.__Co(cF);
}else{this.error("actionType "+cF.actionType+" is not managed! Please provide a handler method!");
}this.__BO=true;
this.__Cs();
return cG;
}},__BS:qx.core.Variant.select("qx.client",{"mshtml|webkit":function(cK){var cL=this.__BI.body.innerHTML;
var cN=cK.content;
this.__BI.body.innerHTML=cN;
var cM=cK;
cM.content=cL;
this.__Co(cM);
return true;
},"default":function(n){var r=n;
var q=qx.bom.element.Style;
switch(n.command){case "backgroundcolor":r.parameter=[q.get(this.__BI.body,"backgroundColor")];
break;
case "backgroundimage":r.parameter=[q.get(this.__BI.body,"backgroundImage"),q.get(this.__BI.body,"backgroundRepeat"),q.get(this.__BI.body,"backgroundPosition")];
break;
}this.__Co(r);
if(n.command=="inserthyperlink"){if(qx.core.Variant.isSet("qx.client","gecko")){var p="qx_link"+this.__BE.__hyperLinkId;
var o=this.__BI.getElementById(p);

if(o){o.parentNode.removeChild(o);
return true;
}else{return false;
}}}else{return this.__BE.execute(n.command,n.value);
}}}),__BT:qx.core.Variant.select("qx.client",{"mshtml|webkit":function(D){},"default":function(x){this.__Co(x);

if(qx.core.Variant.isSet("qx.client","gecko")){if(x.command=="inserthtml"&&x.value==qx.bom.htmlarea.HtmlArea.EMPTY_DIV&&this.__BU("inserthtml","insertParagraph")){this.__BV();
}}return this.__BY();
}}),__BU:function(s,t){if(this.__BG.length>0){var u=this.__BG[this.__BG.length-1];
return (u.command==s&&u.value==t);
}return false;
},__BV:function(){this.__BY();

if(this.__BG.length>0){var w=this.__BG.pop();
this.__Co(w);
}},__BW:function(cP){this.__Co(cP);
return this.__BY();
},__BX:qx.core.Variant.select("qx.client",{"gecko":function(T){this.__Co(T);

try{return this.__BY();
}catch(cH){{};
}},"mshtml|webkit":function(l){},"default":function(v){this.__Co(v);
return this.__BY();
}}),__BY:function(){try{return this.__BI.execCommand("Undo",false,null);
}catch(e){return false;
}},isRedoPossible:function(){return this.__BO;
},redo:function(){if(this.__BO){var bf;
if(this.__BH.length>0){var bg=this.__BH.pop();

if(this.__BK[bg.actionType.toLowerCase()]){switch(bg.actionType){case by:bf=this.__Cb(bg);
break;
case bv:bf=this.__Ch(bg);
break;
case bu:bf=this.__Cg(bg);
break;
case bw:bf=this.__Ca(bg);
break;
}}else if(this.__BJ[bg.actionType]){var be=this.__BJ[bg.actionType];
bf=be.redo.call(be.context?be.context:this,bg);
this.__Cn(bg);
}else{this.error("actionType "+bg.actionType+" is not managed! Please provide a handler method!");
}this.__BP=true;
this.__Cs();
}return bf;
}},__Ca:qx.core.Variant.select(bz,{"mshtml|webkit":function(f){var g=this.__BI.body.innerHTML;
var k=f.content;
this.__BI.body.innerHTML=k;
var h=f;
h.content=g;
this.__Cn(h);
return true;
},"default":function(B){this.__Cn(B);
return this.__Ci();
}}),__Cb:qx.core.Variant.select(bz,{"mshtml|webkit":function(cJ){},"default":function(cB){this.__Cn(cB);
var cC=this.__Ci();

if(qx.core.Variant.isSet(bz,bt)){if(this.__Cc(ck,qx.bom.htmlarea.HtmlArea.EMPTY_DIV)){var cD=this.__Cd();
this.__Ce();

if(cD!=null){this.__Cf(cD);
}}}return cC;
}}),__Cc:function(H,I){if(this.__BH.length>0){var J=this.__BH[this.__BH.length-1];
return (J.command==H&&J.value==I);
}return false;
},__Cd:function(){if(this.__BF==null){return null;
}var K=this.__BF.getSelection();
var L=K?K.focusNode:null;

if(L==null){return null;
}
try{while(L.nodeName.toLowerCase()!=co){L=L.parentNode;

if(!L||qx.dom.Node.isNodeName(L,bX)){return null;
}}}catch(m){return null;
}
if(L!=null&&qx.dom.Node.isNodeName(L,co)){return L;
}else{return null;
}},__Ce:function(){var Y=this.__BH.pop();
this.__Cn(Y);
this.__Ci();
},__Cf:qx.core.Variant.select(bz,{"gecko":function(cu){if(cu==this.__BF.getContentBody().lastChild){return;
}var cx=cu.firstChild;

while(cx.firstChild){cx=cx.firstChild;
}var cv=this.__BF.getSelection();
var cw=this.__BF.getRange();

if(cv&&cw){cw.selectNode(cx);
cv.addRange(cw);
cw.collapse(true);
}},"default":qx.lang.Function.empty}),__Cg:function(F){this.__Cn(F);
return this.__Ci();
},__Ch:qx.core.Variant.select(bz,{"mshtml|webkit":function(ct){},"default":function(S){this.__Cn(S);
return this.__Ci();
}}),__Ci:function(){try{return this.__BI.execCommand(ce,false,null);
}catch(e){return false;
}},__Cj:function(){this._commands={undo:{passthrough:false},redo:{passthrough:false}};
this.__BE.getCommandObject(cr).customUndo=true;
this.__BE.getCommandObject(bq).customUndo=true;

if(qx.core.Variant.isSet(bz,bt)){}},__Ck:qx.core.Variant.select(bz,{"mshtml|webkit":function(U,V,W){var X=this.getUndoRedoObject();
X.commandObject=W;
X.command=U;
X.value=V;
X.actionType=bw;
X.content=this.__BI.body.innerHTML;
this.__Cl(X);
},"default":function(M,N,O){if(this.__BF==null){return;
}var Q=this.getUndoRedoObject();
Q.commandObject=O;
Q.command=M;
Q.value=N;
Q.actionType=bw;
var P=this.__BF.getSelection();

if(O.customUndo){var R=[];

switch(M){case cr:R.push(qx.bom.element.Style.get(this.__BI.body,bH));
break;
case bq:R.push(qx.bom.element.Style.get(this.__BI.body,cb),qx.bom.element.Style.get(this.__BI.body,bV),qx.bom.element.Style.get(this.__BI.body,bN));
break;
case bW:if(P&&!P.isCollapsed){Q.actionType=by;
}break;
}Q.parameter=R;
}else{if(qx.core.Variant.isSet(bz,bt)){if(P&&P.isCollapsed){switch(M){case bB:case bL:case ci:case ck:case bJ:Q.actionType=by;
break;
default:return;
}}else{Q.actionType=by;
}}else{Q.actionType=by;
}}this.__Cl(Q);
}}),__Cl:function(cO){if(this.__BQ){this.__Cm();
}this.__Cn(cO);
this.__BO=false;
this.__BH=[];
this.__Cs();
},__Cm:function(){var bo=this.__BG[this.__BG.length-1];

if(bo==null||bo.actionType!=bv){var bp=this.getUndoRedoObject();
bp.actionType=bv;

if(qx.core.Variant.isSet(bz,bx)||qx.core.Variant.isSet(bz,bs)){bp.content=this.__BR;
bp.actionType=bw;
this.__BR=null;
}this.__Cn(bp);
this.__BQ=false;
}},getUndoRedoObject:function(){return {actionType:null,commandObject:null,command:null,value:null,parameter:null,range:null,marker:null,content:null};
},__Cn:function(ba){if(false&&qx.core.Setting.get(cl)==cj){this.debug("ADD TO UNDO STACK");
this.debug(ba.actionType+" "+ba.command+" "+ba.value);
}this.__BG.push(ba);
},__Co:function(E){if(false&&qx.core.Setting.get(cl)==cj){this.debug("ADD TO REDO STACK");
this.debug(E.actionType+" "+E.command+" "+E.value);
}this.__BH.push(E);
},_handleKeyPress:function(e){var bl=e.getKeyIdentifier().toLowerCase();
var bm=e.isCtrlPressed();

switch(bl){case bK:case bD:case bP:case cc:case bY:case ca:case bF:case bT:case bR:case bA:case bI:break;
case cf:case bC:case bQ:case bU:case cg:case cd:case bO:if(!bm){this.__Cp();
}break;
default:this.__BO=false;
this.__BH=[];
this.__Cp();
}},__Cp:function(){if(!this.__BQ){this.__BQ=true;
this.__BP=true;
if(qx.core.Variant.isSet(bz,bx)||qx.core.Variant.isSet(bz,bs)){this.__BR=this.__BI.body.innerHTML;
}this.__Cs();
}},__Cq:null,_handleMouseDown:qx.core.Variant.select(bz,{"mshtml":function(e){var cI=e.getOriginalTarget();

if(qx.dom.Node.isElement(cI)&&(qx.dom.Node.isNodeName(cI,cp)||qx.dom.Node.isNodeName(cI,cs))){this.__Cq={node:cI,content:cI.outerHTML};
}else{this.__Cq=null;
}},"default":function(e){return true;
}}),_handleMouseUp:qx.core.Variant.select(bz,{"gecko":function(e){if(this.__BF==null){return;
}var bi=this.__BF.getSelection();

if(!bi){this.__Cq=null;
return;
}var bh=bi.anchorNode;
var bj=bh.childNodes[bi.anchorOffset];
if(qx.dom.Node.isNodeName(bj,cp)){if(this.__Cq==null){this.__Cq=bj.cloneNode(true);
}else{if(this.__Cq.style.width!=bj.style.width||this.__Cq.style.height!=bj.style.height){this.__Cr();
this.__Cq=bj.cloneNode(true);
}}}else if(qx.dom.Node.isNodeName(bh,cq)||qx.dom.Node.isNodeName(bh.parentNode,cq)){var bk=bh.parentNode;

while(qx.dom.Node.isNodeName(bk,cs)){bk=bk.parentNode;
}if(this.__Cq==null){this.__Cq=bk.cloneNode(true);
}else{qx.event.Timer.once(function(){if(bk.style.width!=this.__Cq.style.width||bk.style.height!=this.__Cq.style.height||bk.innerHTML!=this.__Cq.innerHTML){this.__Cr();
this.__Cq=bk.cloneNode(true);
}},this,0);
}}else{this.__Cq=null;
}},"default":function(e){var bn=e.srcElement;

if(this.__Cq!=null){if(bn.nodeType==1){if(bn==this.__Cq.node){if(bn.outerHTML!=this.__Cq.content){this.__Cq.content=bn.outerHTML;
this.__Cr();
}}else{for(var i=0,j=bn.childNodes.length;i<j;i++){if(bn.childNodes[i]==this.__Cq.node){if(bn.childNodes[i].outerHTML!=this.__Cq.content){this.__Cq.content=bn.childNodes[i].outerHTML;
this.__Cr();
}}}}}else{this.__Cq=null;
}}}}),__Cr:qx.core.Variant.select(bz,{"mshtml|webkit":function(){this.__Ck(bu,null,null);
},"default":function(){var C=this.getUndoRedoObject();
C.actionType=bu;
this.__Cn(C);
}}),__Cs:function(){qx.event.Timer.once(function(e){if(this.__BF!=null){var G={undo:this.isUndoPossible()?0:-1,redo:this.isRedoPossible()?0:-1};
this.__BF.fireDataEvent(bE,G);
}},this,200);
}},destruct:function(){try{qx.event.Registration.removeListener(this.__BI.body,cm,this.__BL);
qx.event.Registration.removeListener(this.__BI,cn,this.__BM);

if(qx.core.Variant.isSet(bz,bx)){qx.event.Registration.removeListener(this.__BI,br,this.__BN);
}}catch(e){}this._disposeObjects(bS);
this.__BF=this.__BG=this.__BH=this._commands=this.__BI=null;
this.__BK=this.__BJ=null;
}});
})();
(function(){var C="borderTopWidth",B="borderLeftWidth",A="marginTop",z="marginLeft",y="scroll",x="qx.client",w="border-box",v="borderBottomWidth",u="borderRightWidth",t="auto",R="padding",Q="qx.bom.element.Location",P="paddingLeft",O="static",N="marginBottom",M="visible",L="BODY",K="paddingBottom",J="paddingTop",I="marginRight",G="position",H="margin",E="overflow",F="paddingRight",D="border";
qx.Class.define(Q,{statics:{__ih:function(ba,bb){return qx.bom.element.Style.get(ba,bb,qx.bom.element.Style.COMPUTED_MODE,false);
},__ii:function(c,d){return parseInt(qx.bom.element.Style.get(c,d,qx.bom.element.Style.COMPUTED_MODE,false),10)||0;
},__ij:function(S){var V=0,top=0;
if(S.getBoundingClientRect&&!qx.bom.client.Engine.OPERA){var U=qx.dom.Node.getWindow(S);
V-=qx.bom.Viewport.getScrollLeft(U);
top-=qx.bom.Viewport.getScrollTop(U);
}else{var T=qx.dom.Node.getDocument(S).body;
S=S.parentNode;
while(S&&S!=T){V+=S.scrollLeft;
top+=S.scrollTop;
S=S.parentNode;
}}return {left:V,top:top};
},__ik:qx.core.Variant.select(x,{"mshtml":function(bw){var by=qx.dom.Node.getDocument(bw);
var bx=by.body;
var bz=0;
var top=0;
bz-=bx.clientLeft+by.documentElement.clientLeft;
top-=bx.clientTop+by.documentElement.clientTop;

if(qx.bom.client.Feature.STANDARD_MODE){bz+=this.__ii(bx,B);
top+=this.__ii(bx,C);
}return {left:bz,top:top};
},"webkit":function(p){var r=qx.dom.Node.getDocument(p);
var q=r.body;
var s=q.offsetLeft;
var top=q.offsetTop;
if(qx.bom.client.Engine.VERSION<530.17){s+=this.__ii(q,B);
top+=this.__ii(q,C);
}return {left:s,top:top};
},"gecko":function(W){var X=qx.dom.Node.getDocument(W).body;
var Y=X.offsetLeft;
var top=X.offsetTop;
if(qx.bom.client.Engine.VERSION<1.9){Y+=this.__ii(X,z);
top+=this.__ii(X,A);
}if(qx.bom.element.BoxSizing.get(X)!==w){Y+=this.__ii(X,B);
top+=this.__ii(X,C);
}return {left:Y,top:top};
},"default":function(bd){var be=qx.dom.Node.getDocument(bd).body;
var bf=be.offsetLeft;
var top=be.offsetTop;
return {left:bf,top:top};
}}),__il:qx.core.Variant.select(x,{"mshtml|webkit":function(bJ){var bL=qx.dom.Node.getDocument(bJ);
if(bJ.getBoundingClientRect){var bM=bJ.getBoundingClientRect();
var bN=bM.left;
var top=bM.top;
}else{var bN=bJ.offsetLeft;
var top=bJ.offsetTop;
bJ=bJ.offsetParent;
var bK=bL.body;
while(bJ&&bJ!=bK){bN+=bJ.offsetLeft;
top+=bJ.offsetTop;
bN+=this.__ii(bJ,B);
top+=this.__ii(bJ,C);
bJ=bJ.offsetParent;
}}return {left:bN,top:top};
},"gecko":function(bl){if(bl.getBoundingClientRect){var bo=bl.getBoundingClientRect();
var bp=Math.round(bo.left);
var top=Math.round(bo.top);
}else{var bp=0;
var top=0;
var bm=qx.dom.Node.getDocument(bl).body;
var bn=qx.bom.element.BoxSizing;

if(bn.get(bl)!==w){bp-=this.__ii(bl,B);
top-=this.__ii(bl,C);
}
while(bl&&bl!==bm){bp+=bl.offsetLeft;
top+=bl.offsetTop;
if(bn.get(bl)!==w){bp+=this.__ii(bl,B);
top+=this.__ii(bl,C);
}if(bl.parentNode&&this.__ih(bl.parentNode,E)!=M){bp+=this.__ii(bl.parentNode,B);
top+=this.__ii(bl.parentNode,C);
}bl=bl.offsetParent;
}}return {left:bp,top:top};
},"default":function(bg){var bi=0;
var top=0;
var bh=qx.dom.Node.getDocument(bg).body;
while(bg&&bg!==bh){bi+=bg.offsetLeft;
top+=bg.offsetTop;
bg=bg.offsetParent;
}return {left:bi,top:top};
}}),get:function(e,f){if(e.tagName==L){var location=this.__im(e);
var m=location.left;
var top=location.top;
}else{var g=this.__ik(e);
var l=this.__il(e);
var scroll=this.__ij(e);
var m=l.left+g.left-scroll.left;
var top=l.top+g.top-scroll.top;
}var h=m+e.offsetWidth;
var i=top+e.offsetHeight;

if(f){if(f==R||f==y){var j=qx.bom.element.Overflow.getX(e);

if(j==y||j==t){h+=e.scrollWidth-e.offsetWidth+this.__ii(e,B)+this.__ii(e,u);
}var k=qx.bom.element.Overflow.getY(e);

if(k==y||k==t){i+=e.scrollHeight-e.offsetHeight+this.__ii(e,C)+this.__ii(e,v);
}}
switch(f){case R:m+=this.__ii(e,P);
top+=this.__ii(e,J);
h-=this.__ii(e,F);
i-=this.__ii(e,K);
case y:m-=e.scrollLeft;
top-=e.scrollTop;
h-=e.scrollLeft;
i-=e.scrollTop;
case D:m+=this.__ii(e,B);
top+=this.__ii(e,C);
h-=this.__ii(e,u);
i-=this.__ii(e,v);
break;
case H:m-=this.__ii(e,z);
top-=this.__ii(e,A);
h+=this.__ii(e,I);
i+=this.__ii(e,N);
break;
}}return {left:m,top:top,right:h,bottom:i};
},__im:qx.core.Variant.select(x,{"default":function(n){var top=n.offsetTop+this.__ii(n,A);
var o=n.offsetLeft+this.__ii(n,z);
return {left:o,top:top};
},"mshtml":function(bj){var top=bj.offsetTop;
var bk=bj.offsetLeft;

if(!((qx.bom.client.Engine.VERSION<8||qx.bom.client.Engine.DOCUMENT_MODE<8)&&!qx.bom.client.Feature.QUIRKS_MODE)){top+=this.__ii(bj,A);
bk+=this.__ii(bj,z);
}return {left:bk,top:top};
},"gecko":function(bO){var top=bO.offsetTop+this.__ii(bO,A)+this.__ii(bO,B);
var bP=bO.offsetLeft+this.__ii(bO,z)+this.__ii(bO,C);
return {left:bP,top:top};
}}),getLeft:function(a,b){return this.get(a,b).left;
},getTop:function(bC,bD){return this.get(bC,bD).top;
},getRight:function(bA,bB){return this.get(bA,bB).right;
},getBottom:function(bH,bI){return this.get(bH,bI).bottom;
},getRelative:function(bq,br,bs,bt){var bv=this.get(bq,bs);
var bu=this.get(br,bt);
return {left:bv.left-bu.left,top:bv.top-bu.top,right:bv.right-bu.right,bottom:bv.bottom-bu.bottom};
},getPosition:function(bc){return this.getRelative(bc,this.getOffsetParent(bc));
},getOffsetParent:function(bE){var bG=bE.offsetParent||document.body;
var bF=qx.bom.element.Style;

while(bG&&(!/^body|html$/i.test(bG.tagName)&&bF.get(bG,G)===O)){bG=bG.offsetParent;
}return bG;
}}});
})();
(function(){var f="mshtml",e="pop.push.reverse.shift.sort.splice.unshift.join.slice",d="number",c="qx.type.BaseArray",b="qx.client",a=".";
qx.Class.define(c,{extend:Array,construct:function(length){},members:{toArray:null,valueOf:null,pop:null,push:null,reverse:null,shift:null,sort:null,splice:null,unshift:null,concat:null,join:null,slice:null,toString:null,indexOf:null,lastIndexOf:null,forEach:null,filter:null,map:null,some:null,every:null}});
(function(){function u(n){if(qx.core.Variant.isSet(b,f)){t.prototype={length:0,$$isArray:true};
var q=e.split(a);

for(var length=q.length;length;){t.prototype[q[--length]]=Array.prototype[q[length]];
}}var r=Array.prototype.slice;
t.prototype.concat=function(){var l=this.slice(0);

for(var i=0,length=arguments.length;i<length;i++){var k;

if(arguments[i] instanceof t){k=r.call(arguments[i],0);
}else if(arguments[i] instanceof Array){k=arguments[i];
}else{k=[arguments[i]];
}l.push.apply(l,k);
}return l;
};
t.prototype.toString=function(){return r.call(this,0).toString();
};
t.prototype.toLocaleString=function(){return r.call(this,0).toLocaleString();
};
t.prototype.constructor=t;
t.prototype.indexOf=qx.lang.Core.arrayIndexOf;
t.prototype.lastIndexOf=qx.lang.Core.arrayLastIndexOf;
t.prototype.forEach=qx.lang.Core.arrayForEach;
t.prototype.some=qx.lang.Core.arraySome;
t.prototype.every=qx.lang.Core.arrayEvery;
var o=qx.lang.Core.arrayFilter;
var p=qx.lang.Core.arrayMap;
t.prototype.filter=function(){var g=new this.constructor;
g.push.apply(g,o.apply(this,arguments));
return g;
};
t.prototype.map=function(){var h=new this.constructor;
h.push.apply(h,p.apply(this,arguments));
return h;
};
t.prototype.slice=function(){var m=new this.constructor;
m.push.apply(m,Array.prototype.slice.apply(this,arguments));
return m;
};
t.prototype.splice=function(){var j=new this.constructor;
j.push.apply(j,Array.prototype.splice.apply(this,arguments));
return j;
};
t.prototype.toArray=function(){return Array.prototype.slice.call(this,0);
};
t.prototype.valueOf=function(){return this.length;
};
return t;
}function t(length){if(arguments.length===1&&typeof length===d){this.length=-1<length&&length===length>>.5?length:this.push(length);
}else if(arguments.length){this.push.apply(this,arguments);
}}function s(){}s.prototype=[];
t.prototype=new s;
t.prototype.length=0;
qx.type.BaseArray=u(t);
})();
})();
(function(){var w="change",v="input",u="qx.client",t="text",s="password",r="checkbox",q="radio",p="textarea",n="keypress",m="opera",d="propertychange",k="blur",h="keydown",c="keyup",b="select-multiple",g="checked",f="value",j="select",a="qx.event.handler.Input";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){qx.core.Object.call(this);
this._onChangeCheckedWrapper=qx.lang.Function.listener(this._onChangeChecked,this);
this._onChangeValueWrapper=qx.lang.Function.listener(this._onChangeValue,this);
this._onInputWrapper=qx.lang.Function.listener(this._onInput,this);
this._onPropertyWrapper=qx.lang.Function.listener(this._onProperty,this);
if(qx.core.Variant.isSet(u,m)){this._onKeyDownWrapper=qx.lang.Function.listener(this._onKeyDown,this);
this._onKeyUpWrapper=qx.lang.Function.listener(this._onKeyUp,this);
this._onBlurWrapper=qx.lang.Function.listener(this._onBlur,this);
}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{input:1,change:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{__g:false,__h:null,__i:null,canHandleEvent:function(bd,be){var bf=bd.tagName.toLowerCase();

if(be===v&&(bf===v||bf===p)){return true;
}
if(be===w&&(bf===v||bf===p||bf===j)){return true;
}return false;
},registerEvent:qx.core.Variant.select(u,{"mshtml":function(A,B,C){if(!A.__j){var D=A.tagName.toLowerCase();
var E=A.type;

if(E===t||E===s||D===p||E===r||E===q){qx.bom.Event.addNativeListener(A,d,this._onPropertyWrapper);
}
if(E!==r&&E!==q){qx.bom.Event.addNativeListener(A,w,this._onChangeValueWrapper);
}
if(E===t||E===s){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,A);
qx.bom.Event.addNativeListener(A,n,this._onKeyPressWrapped);
}A.__j=true;
}},"default":function(W,X,Y){if(X===v){this.__k(W);
}else if(X===w){if(W.type===q||W.type===r){qx.bom.Event.addNativeListener(W,w,this._onChangeCheckedWrapper);
}else{qx.bom.Event.addNativeListener(W,w,this._onChangeValueWrapper);
}if(qx.core.Variant.isSet(u,m)){if(W.type===t||W.type===s){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,W);
qx.bom.Event.addNativeListener(W,n,this._onKeyPressWrapped);
}}}}}),__k:qx.core.Variant.select(u,{"mshtml":null,"webkit":function(bb){var bc=bb.tagName.toLowerCase();
if(qx.bom.client.Engine.VERSION<532&&bc==p){qx.bom.Event.addNativeListener(bb,n,this._onInputWrapper);
}qx.bom.Event.addNativeListener(bb,v,this._onInputWrapper);
},"opera":function(V){qx.bom.Event.addNativeListener(V,c,this._onKeyUpWrapper);
qx.bom.Event.addNativeListener(V,h,this._onKeyDownWrapper);
qx.bom.Event.addNativeListener(V,k,this._onBlurWrapper);
qx.bom.Event.addNativeListener(V,v,this._onInputWrapper);
},"default":function(K){qx.bom.Event.addNativeListener(K,v,this._onInputWrapper);
}}),unregisterEvent:qx.core.Variant.select(u,{"mshtml":function(P,Q){if(P.__j){var R=P.tagName.toLowerCase();
var S=P.type;

if(S===t||S===s||R===p||S===r||S===q){qx.bom.Event.removeNativeListener(P,d,this._onPropertyWrapper);
}
if(S!==r&&S!==q){qx.bom.Event.removeNativeListener(P,w,this._onChangeValueWrapper);
}
if(S===t||S===s){qx.bom.Event.removeNativeListener(P,n,this._onKeyPressWrapped);
}
try{delete P.__j;
}catch(G){P.__j=null;
}}},"default":function(L,M){if(M===v){this.__k(L);
}else if(M===w){if(L.type===q||L.type===r){qx.bom.Event.removeNativeListener(L,w,this._onChangeCheckedWrapper);
}else{qx.bom.Event.removeNativeListener(L,w,this._onChangeValueWrapper);
}}
if(qx.core.Variant.isSet(u,m)){if(L.type===t||L.type===s){qx.bom.Event.removeNativeListener(L,n,this._onKeyPressWrapped);
}}}}),__l:qx.core.Variant.select(u,{"mshtml":null,"webkit":function(I){var J=I.tagName.toLowerCase();
if(qx.bom.client.Engine.VERSION<532&&J==p){qx.bom.Event.removeNativeListener(I,n,this._onInputWrapper);
}qx.bom.Event.removeNativeListener(I,v,this._onInputWrapper);
},"opera":function(ba){qx.bom.Event.removeNativeListener(ba,c,this._onKeyUpWrapper);
qx.bom.Event.removeNativeListener(ba,h,this._onKeyDownWrapper);
qx.bom.Event.removeNativeListener(ba,k,this._onBlurWrapper);
qx.bom.Event.removeNativeListener(ba,v,this._onInputWrapper);
},"default":function(F){qx.bom.Event.removeNativeListener(F,v,this._onInputWrapper);
}}),_onKeyPress:qx.core.Variant.select(u,{"mshtml|opera":function(e,N){if(e.keyCode===13){if(N.value!==this.__i){this.__i=N.value;
qx.event.Registration.fireEvent(N,w,qx.event.type.Data,[N.value]);
}}},"default":null}),_onKeyDown:qx.core.Variant.select(u,{"opera":function(e){if(e.keyCode===13){this.__g=true;
}},"default":null}),_onKeyUp:qx.core.Variant.select(u,{"opera":function(e){if(e.keyCode===13){this.__g=false;
}},"default":null}),_onBlur:qx.core.Variant.select(u,{"opera":function(e){if(this.__h){window.clearTimeout(this.__h);
}},"default":null}),_onInput:qx.event.GlobalError.observeMethod(function(e){var H=e.target;
if(!this.__g){if(qx.core.Variant.isSet(u,m)){this.__h=window.setTimeout(function(){qx.event.Registration.fireEvent(H,v,qx.event.type.Data,[H.value]);
},0);
}else{qx.event.Registration.fireEvent(H,v,qx.event.type.Data,[H.value]);
}}}),_onChangeValue:qx.event.GlobalError.observeMethod(function(e){var U=e.target||e.srcElement;
var T=U.value;

if(U.type===b){var T=[];

for(var i=0,o=U.options,l=o.length;i<l;i++){if(o[i].selected){T.push(o[i].value);
}}}qx.event.Registration.fireEvent(U,w,qx.event.type.Data,[T]);
}),_onChangeChecked:qx.event.GlobalError.observeMethod(function(e){var O=e.target;

if(O.type===q){if(O.checked){qx.event.Registration.fireEvent(O,w,qx.event.type.Data,[O.value]);
}}else{qx.event.Registration.fireEvent(O,w,qx.event.type.Data,[O.checked]);
}}),_onProperty:qx.core.Variant.select(u,{"mshtml":qx.event.GlobalError.observeMethod(function(e){var x=e.target||e.srcElement;
var y=e.propertyName;

if(y===f&&(x.type===t||x.type===s||x.tagName.toLowerCase()===p)){if(!x.$$inValueSet){qx.event.Registration.fireEvent(x,v,qx.event.type.Data,[x.value]);
}}else if(y===g){if(x.type===r){qx.event.Registration.fireEvent(x,w,qx.event.type.Data,[x.checked]);
}else if(x.checked){qx.event.Registration.fireEvent(x,w,qx.event.type.Data,[x.value]);
}}}),"default":function(){}})},defer:function(z){qx.event.Registration.addHandler(z);
}});
})();
(function(){var z="",y="select",x="soft",w="off",v="qx.client",u="textarea",t="wrap",s="text",r="mshtml",q="number",h="checkbox",p="select-one",m="input",g="option",f="value",k="radio",j="qx.bom.Input",n="nowrap",e="auto",o="normal";
qx.Class.define(j,{statics:{__f:{text:1,textarea:1,select:1,checkbox:1,radio:1,password:1,hidden:1,submit:1,image:1,file:1,search:1,reset:1,button:1},create:function(J,K,L){{};
var K=K?qx.lang.Object.clone(K):{};
var M;

if(J===u||J===y){M=J;
}else{M=m;
K.type=J;
}return qx.bom.Element.create(M,K,L);
},setValue:function(A,B){var G=A.nodeName.toLowerCase();
var D=A.type;
var Array=qx.lang.Array;
var H=qx.lang.Type;

if(typeof B===q){B+=z;
}
if((D===h||D===k)){if(H.isArray(B)){A.checked=Array.contains(B,A.value);
}else{A.checked=A.value==B;
}}else if(G===y){var C=H.isArray(B);
var I=A.options;
var E,F;

for(var i=0,l=I.length;i<l;i++){E=I[i];
F=E.getAttribute(f);

if(F==null){F=E.text;
}E.selected=C?Array.contains(B,F):B==F;
}
if(C&&B.length==0){A.selectedIndex=-1;
}}else if((D===s||D===u)&&qx.core.Variant.isSet(v,r)){A.$$inValueSet=true;
A.value=B;
A.$$inValueSet=null;
}else{A.value=B;
}},getValue:function(R){var X=R.nodeName.toLowerCase();

if(X===g){return (R.attributes.value||{}).specified?R.value:R.text;
}
if(X===y){var S=R.selectedIndex;
if(S<0){return null;
}var Y=[];
var bb=R.options;
var ba=R.type==p;
var W=qx.bom.Input;
var V;
for(var i=ba?S:0,U=ba?S+1:bb.length;i<U;i++){var T=bb[i];

if(T.selected){V=W.getValue(T);
if(ba){return V;
}Y.push(V);
}}return Y;
}else{return (R.value||z).replace(/\r/g,z);
}},setWrap:qx.core.Variant.select(v,{"mshtml":function(P,Q){P.wrap=Q?x:w;
},"gecko|webkit":function(a,b){var d=b?x:w;
var c=b?z:e;
a.setAttribute(t,d);
a.style.overflow=c;
},"default":function(N,O){N.style.whiteSpace=O?o:n;
}})}});
})();
(function(){var N="qx.bom.Selector";
qx.Class.define(N,{statics:{query:null,matches:null}});
(function(){var dJ=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,dQ=0,dM=Object.prototype.toString,dK=false,dS=true;
[0,0].sort(function(){dS=false;
return 0;
});
var dG=function(f,g,h,k){h=h||[];
g=g||document;
var v=g;

if(g.nodeType!==1&&g.nodeType!==9){return [];
}
if(!f||typeof f!=="string"){return h;
}var s=[],m,p,n,r,q=true,o=dG.isXML(g),u=f,t,x,w,i;
do{dJ.exec("");
m=dJ.exec(u);

if(m){u=m[3];
s.push(m[1]);

if(m[2]){r=m[3];
break;
}}}while(m);

if(s.length>1&&dL.exec(f)){if(s.length===2&&dI.relative[s[0]]){p=dH(s[0]+s[1],g);
}else{p=dI.relative[s[0]]?[g]:dG(s.shift(),g);

while(s.length){f=s.shift();

if(dI.relative[f]){f+=s.shift();
}p=dH(f,p);
}}}else{if(!k&&s.length>1&&g.nodeType===9&&!o&&dI.match.ID.test(s[0])&&!dI.match.ID.test(s[s.length-1])){t=dG.find(s.shift(),g,o);
g=t.expr?dG.filter(t.expr,t.set)[0]:t.set[0];
}
if(g){t=k?
{expr:s.pop(),set:dF(k)}:dG.find(s.pop(),s.length===1&&(s[0]==="~"||s[0]==="+")&&g.parentNode?g.parentNode:g,o);
p=t.expr?dG.filter(t.expr,t.set):t.set;

if(s.length>0){n=dF(p);
}else{q=false;
}
while(s.length){x=s.pop();
w=x;

if(!dI.relative[x]){x="";
}else{w=s.pop();
}
if(w==null){w=g;
}dI.relative[x](n,w,o);
}}else{n=s=[];
}}
if(!n){n=p;
}
if(!n){dG.error(x||f);
}
if(dM.call(n)==="[object Array]"){if(!q){h.push.apply(h,n);
}else if(g&&g.nodeType===1){for(i=0;n[i]!=null;i++){if(n[i]&&(n[i]===true||n[i].nodeType===1&&dG.contains(g,n[i]))){h.push(p[i]);
}}}else{for(i=0;n[i]!=null;i++){if(n[i]&&n[i].nodeType===1){h.push(p[i]);
}}}}else{dF(n,h);
}
if(r){dG(r,v,h,k);
dG.uniqueSort(h);
}return h;
};
dG.uniqueSort=function(U){if(dN){dK=dS;
U.sort(dN);

if(dK){for(var i=1;i<U.length;i++){if(U[i]===U[i-1]){U.splice(i--,1);
}}}}return U;
};
dG.matches=function(cH,cI){return dG(cH,null,null,cI);
};
dG.find=function(eT,eU,eV){var eW;

if(!eT){return [];
}
for(var i=0,l=dI.order.length;i<l;i++){var eX=dI.order[i],eY;

if((eY=dI.leftMatch[eX].exec(eT))){var fa=eY[1];
eY.splice(1,1);

if(fa.substr(fa.length-1)!=="\\"){eY[1]=(eY[1]||"").replace(/\\/g,"");
eW=dI.find[eX](eY,eU,eV);

if(eW!=null){eT=eT.replace(dI.match[eX],"");
break;
}}}}
if(!eW){eW=eU.getElementsByTagName("*");
}return {set:eW,expr:eT};
};
dG.filter=function(bm,bn,bo,bp){var bq=bm,bv=[],br=bn,bA,bz,bs=bn&&bn[0]&&dG.isXML(bn[0]);

while(bm&&bn.length){for(var by in dI.filter){if((bA=dI.leftMatch[by].exec(bm))!=null&&bA[2]){var bt=dI.filter[by],bx,bu,bB=bA[1];
bz=false;
bA.splice(1,1);

if(bB.substr(bB.length-1)==="\\"){continue;
}
if(br===bv){bv=[];
}
if(dI.preFilter[by]){bA=dI.preFilter[by](bA,br,bo,bv,bp,bs);

if(!bA){bz=bx=true;
}else if(bA===true){continue;
}}
if(bA){for(var i=0;(bu=br[i])!=null;i++){if(bu){bx=bt(bu,bA,i,br);
var bw=bp^!!bx;

if(bo&&bx!=null){if(bw){bz=true;
}else{br[i]=false;
}}else if(bw){bv.push(bu);
bz=true;
}}}}
if(bx!==undefined){if(!bo){br=bv;
}bm=bm.replace(dI.match[by],"");

if(!bz){return [];
}break;
}}}if(bm===bq){if(bz==null){dG.error(bm);
}else{break;
}}bq=bm;
}return br;
};
dG.error=function(X){throw "Syntax error, unrecognized expression: "+X;
};
var dI=dG.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+\-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(K){return K.getAttribute("href");
}},relative:{"+":function(cY,da){var db=typeof da==="string",dd=db&&!/\W/.test(da),de=db&&!dd;

if(dd){da=da.toLowerCase();
}
for(var i=0,l=cY.length,dc;i<l;i++){if((dc=cY[i])){while((dc=dc.previousSibling)&&dc.nodeType!==1){}cY[i]=de||dc&&dc.nodeName.toLowerCase()===da?dc||false:dc===da;
}}
if(de){dG.filter(da,cY,true);
}},">":function(ex,ey){var ez=typeof ey==="string",eA,i=0,l=ex.length;

if(ez&&!/\W/.test(ey)){ey=ey.toLowerCase();

for(;i<l;i++){eA=ex[i];

if(eA){var parent=eA.parentNode;
ex[i]=parent.nodeName.toLowerCase()===ey?parent:false;
}}}else{for(;i<l;i++){eA=ex[i];

if(eA){ex[i]=ez?eA.parentNode:eA.parentNode===ey;
}}
if(ez){dG.filter(ey,ex,true);
}}},"":function(cL,cM,cN){var cO=dQ++,cP=dR,cQ;

if(typeof cM==="string"&&!/\W/.test(cM)){cM=cM.toLowerCase();
cQ=cM;
cP=dT;
}cP("parentNode",cM,cO,cL,cQ,cN);
},"~":function(cS,cT,cU){var cV=dQ++,cW=dR,cX;

if(typeof cT==="string"&&!/\W/.test(cT)){cT=cT.toLowerCase();
cX=cT;
cW=dT;
}cW("previousSibling",cT,cV,cS,cX,cU);
}},find:{ID:function(cu,cv,cw){if(typeof cv.getElementById!=="undefined"&&!cw){var m=cv.getElementById(cu[1]);
return m?[m]:[];
}},NAME:function(z,A){if(typeof A.getElementsByName!=="undefined"){var C=[],B=A.getElementsByName(z[1]);

for(var i=0,l=B.length;i<l;i++){if(B[i].getAttribute("name")===z[1]){C.push(B[i]);
}}return C.length===0?null:C;
}},TAG:function(ck,cl){return cl.getElementsByTagName(ck[1]);
}},preFilter:{CLASS:function(bO,bP,bQ,bR,bS,bT){bO=" "+bO[1].replace(/\\/g,"")+" ";

if(bT){return bO;
}
for(var i=0,bU;(bU=bP[i])!=null;i++){if(bU){if(bS^(bU.className&&(" "+bU.className+" ").replace(/[\t\n]/g," ").indexOf(bO)>=0)){if(!bQ){bR.push(bU);
}}else if(bQ){bP[i]=false;
}}}return false;
},ID:function(y){return y[1].replace(/\\/g,"");
},TAG:function(cB,cC){return cB[1].toLowerCase();
},CHILD:function(dj){if(dj[1]==="nth"){var dk=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(dj[2]==="even"&&"2n"||dj[2]==="odd"&&"2n+1"||!/\D/.test(dj[2])&&"0n+"+dj[2]||dj[2]);
dj[2]=(dk[1]+(dk[2]||1))-0;
dj[3]=dk[3]-0;
}dj[0]=dQ++;
return dj;
},ATTR:function(bc,bd,be,bf,bg,bh){var name=bc[1].replace(/\\/g,"");

if(!bh&&dI.attrMap[name]){bc[1]=dI.attrMap[name];
}
if(bc[2]==="~="){bc[4]=" "+bc[4]+" ";
}return bc;
},PSEUDO:function(E,F,G,H,I){if(E[1]==="not"){if((dJ.exec(E[3])||"").length>1||/^\w/.test(E[3])){E[3]=dG(E[3],null,null,F);
}else{var J=dG.filter(E[3],F,G,true^I);

if(!G){H.push.apply(H,J);
}return false;
}}else if(dI.match.POS.test(E[0])||dI.match.CHILD.test(E[0])){return true;
}return E;
},POS:function(cs){cs.unshift(true);
return cs;
}},filters:{enabled:function(cr){return cr.disabled===false&&cr.type!=="hidden";
},disabled:function(dV){return dV.disabled===true;
},checked:function(dC){return dC.checked===true;
},selected:function(cA){cA.parentNode.selectedIndex;
return cA.selected===true;
},parent:function(dh){return !!dh.firstChild;
},empty:function(dD){return !dD.firstChild;
},has:function(eK,i,eL){return !!dG(eL[3],eK).length;
},header:function(cK){return (/h\d/i).test(cK.nodeName);
},text:function(cR){return "text"===cR.type;
},radio:function(ef){return "radio"===ef.type;
},checkbox:function(cD){return "checkbox"===cD.type;
},file:function(bN){return "file"===bN.type;
},password:function(dU){return "password"===dU.type;
},submit:function(du){return "submit"===du.type;
},image:function(ct){return "image"===ct.type;
},reset:function(cm){return "reset"===cm.type;
},button:function(bV){return "button"===bV.type||bV.nodeName.toLowerCase()==="button";
},input:function(eD){return (/input|select|textarea|button/i).test(eD.nodeName);
}},setFilters:{first:function(bi,i){return i===0;
},last:function(cE,i,cF,cG){return i===cG.length-1;
},even:function(cJ,i){return i%2===0;
},odd:function(eE,i){return i%2===1;
},lt:function(L,i,M){return i<M[3]-0;
},gt:function(eF,i,eG){return i>eG[3]-0;
},nth:function(V,i,W){return W[3]-0===i;
},eq:function(cp,i,cq){return cq[3]-0===i;
}},filter:{PSEUDO:function(bW,bX,i,bY){var name=bX[1],ca=dI.filters[name];

if(ca){return ca(bW,i,bX,bY);
}else if(name==="contains"){return (bW.textContent||bW.innerText||dG.getText([bW])||"").indexOf(bX[3])>=0;
}else if(name==="not"){var cb=bX[3];

for(var j=0,l=cb.length;j<l;j++){if(cb[j]===bW){return false;
}}return true;
}else{dG.error("Syntax error, unrecognized expression: "+name);
}},CHILD:function(em,en){var et=en[1],eo=em;

switch(et){case 'only':case 'first':while((eo=eo.previousSibling)){if(eo.nodeType===1){return false;
}}
if(et==="first"){return true;
}eo=em;
case 'last':while((eo=eo.nextSibling)){if(eo.nodeType===1){return false;
}}return true;
case 'nth':var eu=en[2],eq=en[3];

if(eu===1&&eq===0){return true;
}var es=en[0],parent=em.parentNode;

if(parent&&(parent.sizcache!==es||!em.nodeIndex)){var ep=0;

for(eo=parent.firstChild;eo;eo=eo.nextSibling){if(eo.nodeType===1){eo.nodeIndex=++ep;
}}parent.sizcache=es;
}var er=em.nodeIndex-eq;

if(eu===0){return er===0;
}else{return (er%eu===0&&er/eu>=0);
}}},ID:function(df,dg){return df.nodeType===1&&df.getAttribute("id")===dg;
},TAG:function(cn,co){return (co==="*"&&cn.nodeType===1)||cn.nodeName.toLowerCase()===co;
},CLASS:function(bj,bk){return (" "+(bj.className||bj.getAttribute("class"))+" ").indexOf(bk)>-1;
},ATTR:function(eg,eh){var name=eh[1],el=dI.attrHandle[name]?dI.attrHandle[name](eg):eg[name]!=null?eg[name]:eg.getAttribute(name),ek=el+"",ej=eh[2],ei=eh[4];
return el==null?ej==="!=":ej==="="?ek===ei:ej==="*="?ek.indexOf(ei)>=0:ej==="~="?(" "+ek+" ").indexOf(ei)>=0:!ei?ek&&el!==false:ej==="!="?ek!==ei:ej==="^="?ek.indexOf(ei)===0:ej==="$="?ek.substr(ek.length-ei.length)===ei:ej==="|="?ek===ei||ek.substr(0,ei.length+1)===ei+"-":false;
},POS:function(cg,ch,i,ci){var name=ch[2],cj=dI.setFilters[name];

if(cj){return cj(cg,i,ch,ci);
}}}};
var dL=dI.match.POS,dE=function(ev,ew){return "\\"+(ew-0+1);
};

for(var dP in dI.match){dI.match[dP]=new RegExp(dI.match[dP].source+(/(?![^\[]*\])(?![^\(]*\))/.source));
dI.leftMatch[dP]=new RegExp(/(^(?:.|\r|\n)*?)/.source+dI.match[dP].source.replace(/\\(\d+)/g,dE));
}var dF=function(eB,eC){eB=Array.prototype.slice.call(eB,0);

if(eC){eC.push.apply(eC,eB);
return eC;
}return eB;
};
try{Array.prototype.slice.call(document.documentElement.childNodes,0)[0].nodeType;
}catch(e){dF=function(R,S){var T=S||[],i=0;

if(dM.call(R)==="[object Array]"){Array.prototype.push.apply(T,R);
}else{if(typeof R.length==="number"){for(var l=R.length;i<l;i++){T.push(R[i]);
}}else{for(;R[i];i++){T.push(R[i]);
}}}return T;
};
}var dN;

if(document.documentElement.compareDocumentPosition){dN=function(a,b){if(!a.compareDocumentPosition||!b.compareDocumentPosition){if(a==b){dK=true;
}return a.compareDocumentPosition?-1:1;
}var eM=a.compareDocumentPosition(b)&4?-1:a===b?0:1;

if(eM===0){dK=true;
}return eM;
};
}else if("sourceIndex" in document.documentElement){dN=function(a,b){if(!a.sourceIndex||!b.sourceIndex){if(a==b){dK=true;
}return a.sourceIndex?-1:1;
}var bl=a.sourceIndex-b.sourceIndex;

if(bl===0){dK=true;
}return bl;
};
}else if(document.createRange){dN=function(a,b){if(!a.ownerDocument||!b.ownerDocument){if(a==b){dK=true;
}return a.ownerDocument?-1:1;
}var ba=a.ownerDocument.createRange(),bb=b.ownerDocument.createRange();
ba.setStart(a,0);
ba.setEnd(a,0);
bb.setStart(b,0);
bb.setEnd(b,0);
var Y=ba.compareBoundaryPoints(Range.START_TO_END,bb);

if(Y===0){dK=true;
}return Y;
};
}dG.getText=function(O){var Q="",P;

for(var i=0;O[i];i++){P=O[i];
if(P.nodeType===3||P.nodeType===4){Q+=P.nodeValue;
}else if(P.nodeType!==8){Q+=dG.getText(P.childNodes);
}}return Q;
};
(function(){var ed=document.createElement("div"),ec="script"+(new Date()).getTime();
ed.innerHTML="<a name='"+ec+"'/>";
var eb=document.documentElement;
eb.insertBefore(ed,eb.firstChild);
if(document.getElementById(ec)){dI.find.ID=function(bC,bD,bE){if(typeof bD.getElementById!=="undefined"&&!bE){var m=bD.getElementById(bC[1]);
return m?m.id===bC[1]||typeof m.getAttributeNode!=="undefined"&&m.getAttributeNode("id").nodeValue===bC[1]?[m]:undefined:[];
}};
dI.filter.ID=function(eH,eI){var eJ=typeof eH.getAttributeNode!=="undefined"&&eH.getAttributeNode("id");
return eH.nodeType===1&&eJ&&eJ.nodeValue===eI;
};
}eb.removeChild(ed);
eb=ed=null;
})();
(function(){var ee=document.createElement("div");
ee.appendChild(document.createComment(""));
if(ee.getElementsByTagName("*").length>0){dI.find.TAG=function(dv,dw){var dy=dw.getElementsByTagName(dv[1]);
if(dv[1]==="*"){var dx=[];

for(var i=0;dy[i];i++){if(dy[i].nodeType===1){dx.push(dy[i]);
}}dy=dx;
}return dy;
};
}ee.innerHTML="<a href='#'></a>";

if(ee.firstChild&&typeof ee.firstChild.getAttribute!=="undefined"&&ee.firstChild.getAttribute("href")!=="#"){dI.attrHandle.href=function(di){return di.getAttribute("href",2);
};
}ee=null;
})();

if(document.querySelectorAll){(function(){var dA=dG,dz=document.createElement("div");
dz.innerHTML="<p class='TEST'></p>";
if(dz.querySelectorAll&&dz.querySelectorAll(".TEST").length===0){return;
}dG=function(dW,dX,dY,ea){dX=dX||document;
if(!ea&&dX.nodeType===9&&!dG.isXML(dX)){try{return dF(dX.querySelectorAll(dW),dY);
}catch(e){}}return dA(dW,dX,dY,ea);
};

for(var dB in dA){dG[dB]=dA[dB];
}dz=null;
})();
}(function(){var D=document.createElement("div");
D.innerHTML="<div class='test e'></div><div class='test'></div>";
if(!D.getElementsByClassName||D.getElementsByClassName("e").length===0){return;
}D.lastChild.className="e";

if(D.getElementsByClassName("e").length===1){return;
}dI.order.splice(1,0,"CLASS");
dI.find.CLASS=function(cx,cy,cz){if(typeof cy.getElementsByClassName!=="undefined"&&!cz){return cy.getElementsByClassName(cx[1]);
}};
D=null;
})();
function dT(bF,bG,bH,bI,bJ,bK){for(var i=0,l=bI.length;i<l;i++){var bM=bI[i];

if(bM){bM=bM[bF];
var bL=false;

while(bM){if(bM.sizcache===bH){bL=bI[bM.sizset];
break;
}
if(bM.nodeType===1&&!bK){bM.sizcache=bH;
bM.sizset=i;
}
if(bM.nodeName.toLowerCase()===bG){bL=bM;
break;
}bM=bM[bF];
}bI[i]=bL;
}}}function dR(dl,dm,dn,dp,dq,dr){for(var i=0,l=dp.length;i<l;i++){var dt=dp[i];

if(dt){dt=dt[dl];
var ds=false;

while(dt){if(dt.sizcache===dn){ds=dp[dt.sizset];
break;
}
if(dt.nodeType===1){if(!dr){dt.sizcache=dn;
dt.sizset=i;
}
if(typeof dm!=="string"){if(dt===dm){ds=true;
break;
}}else if(dG.filter(dm,[dt]).length>0){ds=dt;
break;
}}dt=dt[dl];
}dp[i]=ds;
}}}dG.contains=document.compareDocumentPosition?
function(a,b){return !!(a.compareDocumentPosition(b)&16);
}:
function(a,b){return a!==b&&(a.contains?a.contains(b):true);
};
dG.isXML=function(cc){var cd=(cc?cc.ownerDocument||cc:0).documentElement;
return cd?cd.nodeName!=="HTML":false;
};
var dH=function(eN,eO){var eQ=[],eP="",eS,eR=eO.nodeType?[eO]:eO;
while((eS=dI.match.PSEUDO.exec(eN))){eP+=eS[0];
eN=eN.replace(dI.match.PSEUDO,"");
}eN=dI.relative[eN]?eN+"*":eN;

for(var i=0,l=eR.length;i<l;i++){dG(eN,eR[i],eQ);
}return dG.filter(eP,eQ);
};
var dO=qx.bom.Selector;
dO.query=function(c,d){return dG(c,d);
};
dO.matches=function(ce,cf){return dG(ce,null,null,cf);
};
})();
})();
(function(){var n="default",m="native",k="",j=" ",h="\\b",g="(\\s|$)",f="(^|\\s)",e="g",d="qx.bom.element.Class",c="$2",b="\\b|\\b";
qx.Class.define(d,{statics:{__rV:/\s+/g,__rW:/^\s+|\s+$/g,add:qx.lang.Object.select(qx.bom.client.Feature.HTML5_CLASSLIST?m:n,{"native":function(a,name){a.classList.add(name);
return name;
},"default":function(r,name){if(!this.has(r,name)){r.className+=(r.className?j:k)+name;
}return name;
}}),addClasses:qx.lang.Object.select(qx.bom.client.Feature.HTML5_CLASSLIST?m:n,{"native":function(p,q){for(var i=0;i<q.length;i++){p.classList.add(q[i]);
}return p.className;
},"default":function(w,x){var y={};
var A;
var z=w.className;

if(z){A=z.split(this.__rV);

for(var i=0,l=A.length;i<l;i++){y[A[i]]=true;
}
for(var i=0,l=x.length;i<l;i++){if(!y[x[i]]){A.push(x[i]);
}}}else{A=x;
}return w.className=A.join(j);
}}),get:function(o){return o.className;
},has:qx.lang.Object.select(qx.bom.client.Feature.HTML5_CLASSLIST?m:n,{"native":function(s,name){return s.classList.contains(name);
},"default":function(B,name){var C=new RegExp(f+name+g);
return C.test(B.className);
}}),remove:qx.lang.Object.select(qx.bom.client.Feature.HTML5_CLASSLIST?m:n,{"native":function(v,name){v.classList.remove(name);
return name;
},"default":function(N,name){var O=new RegExp(f+name+g);
N.className=N.className.replace(O,c);
return name;
}}),removeClasses:qx.lang.Object.select(qx.bom.client.Feature.HTML5_CLASSLIST?m:n,{"native":function(I,J){for(var i=0;i<J.length;i++){I.classList.remove(J[i]);
}return I.className;
},"default":function(D,E){var F=new RegExp(h+E.join(b)+h,e);
return D.className=D.className.replace(F,k).replace(this.__rW,k).replace(this.__rV,j);
}}),replace:function(K,L,M){this.remove(K,L);
return this.add(K,M);
},toggle:qx.lang.Object.select(qx.bom.client.Feature.HTML5_CLASSLIST?m:n,{"native":function(t,name,u){if(u===undefined){t.classList.toggle(name);
}else{u?this.add(t,name):this.remove(t,name);
}return name;
},"default":function(G,name,H){if(H==null){H=!this.has(G,name);
}H?this.add(G,name):this.remove(G,name);
return name;
}})}});
})();
(function(){var E="get",D="set",C="reset",B=":not(",A="getValue",z="append",y=")",x="getPreviousSiblings",w="#",v="qx.bom.Collection",bc="setValue",bb="prepend",ba="string",Y="getAncestors",X="getOffsetParent",W="remove",V=">*",U="add",T="*",S="addListener",L="has",M="toggle",J="getSiblings",K="replace",H="after",I="replaceWith",F="setCss",G="setStyles",N="before",O="getNextSiblings",Q="getPosition",P="getCss",R="removeListener";
(function(){var cu=function(ck,cl){return function(g,h,k,m,n,o){var length=this.length;

if(length>0){var p=ck[cl];

for(var i=0;i<length;i++){if(this[i].nodeType===1){p.call(ck,this[i],g,h,k,m,n,o);
}}}return this;
};
};
var ct=function(cY,da){return function(dj,dk,dl,dm,dn,dp){if(this.length>0){var dq=this[0].nodeType===1?cY[da](this[0],dj,dk,dl,dm,dn,dp):null;

if(dq&&dq.nodeType){return this.__GT([dq]);
}else{return dq;
}}return null;
};
};
qx.Class.define(v,{extend:qx.type.BaseArray,statics:{query:function(bg,bh){var bi=qx.bom.Selector.query(bg,bh);
return qx.lang.Array.cast(bi,qx.bom.Collection);
},id:function(dg){var dh=document.getElementById(dg);
if(dh&&dh.id!=dg){return qx.bom.Collection.query(w+dg);
}if(dh){return new qx.bom.Collection(dh);
}else{return new qx.bom.Collection();
}},html:function(cG,cH){var cI=qx.bom.Html.clean([cG],cH);
return qx.lang.Array.cast(cI,qx.bom.Collection);
},__GP:/^[^<]*(<(.|\s)+>)[^>]*$|^#([\w-]+)$/,create:function(ds,dt){var dv=qx.bom.Collection;
if(ds.nodeType){return new dv(ds);
}else if(typeof ds===ba){var du=dv.__GP.exec(ds);

if(du){return du[1]?dv.html(du[1],dt):dv.id(du[3].substring(1));
}else{return dv.query(ds,dt);
}}else{return qx.lang.Array.cast(ds,qx.bom.Collection);
}}},members:{__GQ:null,setAttribute:cu(qx.bom.element.Attribute,D),resetAttribute:cu(qx.bom.element.Attribute,C),getAttribute:ct(qx.bom.element.Attribute,E),addClass:cu(qx.bom.element.Class,U),getClass:ct(qx.bom.element.Class,E),hasClass:ct(qx.bom.element.Class,L),removeClass:cu(qx.bom.element.Class,W),replaceClass:cu(qx.bom.element.Class,K),toggleClass:cu(qx.bom.element.Class,M),setValue:cu(qx.bom.Input,bc),getValue:ct(qx.bom.Input,A),setStyle:cu(qx.bom.element.Style,D),setStyles:cu(qx.bom.element.Style,G),resetStyle:cu(qx.bom.element.Style,C),getStyle:ct(qx.bom.element.Style,E),setCss:cu(qx.bom.element.Style,F),getCss:cu(qx.bom.element.Style,P),getOffset:ct(qx.bom.element.Location,E),getPosition:ct(qx.bom.element.Location,Q),getOffsetParent:ct(qx.bom.element.Location,X),setScrollLeft:function(bG){var Node=qx.dom.Node;

for(var i=0,l=this.length,bH;i<l;i++){bH=this[i];

if(Node.isElement(bH)){bH.scrollLeft=bG;
}else if(Node.isWindow(bH)){bH.scrollTo(bG,this.getScrollTop(bH));
}else if(Node.isDocument(bH)){Node.getWindow(bH).scrollTo(bG,this.getScrollTop(bH));
}}return this;
},setScrollTop:function(cn){var Node=qx.dom.Node;

for(var i=0,l=this.length,co;i<l;i++){co=this[i];

if(Node.isElement(co)){co.scrollTop=cn;
}else if(Node.isWindow(co)){co.scrollTo(this.getScrollLeft(co),cn);
}else if(Node.isDocument(co)){Node.getWindow(co).scrollTo(this.getScrollLeft(co),cn);
}}return this;
},getScrollLeft:function(){var cm=this[0];

if(!cm){return null;
}var Node=qx.dom.Node;

if(Node.isWindow(cm)||Node.isDocument(cm)){return qx.bom.Viewport.getScrollLeft();
}return cm.scrollLeft;
},getScrollTop:function(){var ci=this[0];

if(!ci){return null;
}var Node=qx.dom.Node;

if(Node.isWindow(ci)||Node.isDocument(ci)){return qx.bom.Viewport.getScrollTop();
}return ci.scrollTop;
},getWidth:function(){var bI=this[0];
var Node=qx.dom.Node;

if(bI){if(Node.isElement(bI)){return qx.bom.element.Dimension.getWidth(bI);
}else if(Node.isDocument(bI)){return qx.bom.Document.getWidth(Node.getWindow(bI));
}else if(Node.isWindow(bI)){return qx.bom.Viewport.getWidth(bI);
}}return null;
},getContentWidth:function(){var bq=this[0];

if(qx.dom.Node.isElement(bq)){return qx.bom.element.Dimension.getContentWidth(bq);
}return null;
},getHeight:function(){var bk=this[0];
var Node=qx.dom.Node;

if(bk){if(Node.isElement(bk)){return qx.bom.element.Dimension.getHeight(bk);
}else if(Node.isDocument(bk)){return qx.bom.Document.getHeight(Node.getWindow(bk));
}else if(Node.isWindow(bk)){return qx.bom.Viewport.getHeight(bk);
}}return null;
},getContentHeight:function(){var cd=this[0];

if(qx.dom.Node.isElement(cd)){return qx.bom.element.Dimension.getContentHeight(cd);
}return null;
},addListener:cu(qx.bom.Element,S),removeListener:cu(qx.bom.Element,R),eq:function(ce){return this.slice(ce,+ce+1);
},filter:function(q,r){var s;

if(qx.lang.Type.isFunction(q)){s=qx.type.BaseArray.prototype.filter.call(this,q,r);
}else{s=qx.bom.Selector.matches(q,this);
}return this.__GT(s);
},is:function(dw){return !!dw&&qx.bom.Selector.matches(dw,this).length>0;
},__GR:/^.[^:#\[\.,]*$/,not:function(e){if(this.__GR.test(e)){var f=qx.bom.Selector.matches(B+e+y,this);
return this.__GT(f);
}var f=qx.bom.Selector.matches(e,this);
return this.filter(function(bp){return f.indexOf(bp)===-1;
});
},add:function(cJ,cK){var cL=qx.bom.Selector.query(cJ,cK);
var cM=qx.lang.Array.unique(this.concat(cL));
return this.__GT(cM);
},children:function(cE){var cF=[];

for(var i=0,l=this.length;i<l;i++){cF.push.apply(cF,qx.dom.Hierarchy.getChildElements(this[i]));
}
if(cE){cF=qx.bom.Selector.matches(cE,cF);
}return this.__GT(cF);
},closest:function(bl){var bm=new qx.bom.Collection(1);
var bo=qx.bom.Selector;
var bn=this.map(function(db){while(db&&db.ownerDocument){bm[0]=db;

if(bo.matches(bl,bm).length>0){return db;
}db=db.parentNode;
}});
return this.__GT(qx.lang.Array.unique(bn));
},contents:function(){var bs=[];
var br=qx.lang.Array;

for(var i=0,l=this.length;i<l;i++){bs.push.apply(bs,br.fromCollection(this[i].childNodes));
}return this.__GT(bs);
},find:function(cf){var ch=qx.bom.Selector;
if(this.length===1){return this.__GT(ch.query(cf,this[0]));
}else{var cg=[];

for(var i=0,l=this.length;i<l;i++){cg.push.apply(cg,ch.query(cf,this[i]));
}return this.__GT(qx.lang.Array.unique(cg));
}},next:function(cv){var cw=qx.dom.Hierarchy;
var cx=this.map(cw.getNextElementSibling,cw);
if(cv){cx=qx.bom.Selector.matches(cv,cx);
}return this.__GT(cx);
},nextAll:function(cj){return this.__GS(O,cj);
},prev:function(dc){var dd=qx.dom.Hierarchy;
var de=this.map(dd.getPreviousElementSibling,dd);
if(dc){de=qx.bom.Selector.matches(dc,de);
}return this.__GT(de);
},prevAll:function(bf){return this.__GS(x,bf);
},parent:function(bt){var Element=qx.dom.Element;
var bu=qx.lang.Array.unique(this.map(Element.getParentElement,Element));
if(bt){bu=qx.bom.Selector.matches(bt,bu);
}return this.__GT(bu);
},parents:function(cz){return this.__GS(Y,cz);
},siblings:function(di){return this.__GS(J,di);
},__GS:function(cO,cP){var cR=[];
var cQ=qx.dom.Hierarchy;

for(var i=0,l=this.length;i<l;i++){cR.push.apply(cR,cQ[cO](this[i]));
}var cS=qx.lang.Array.unique(cR);
if(cP){cS=qx.bom.Selector.matches(cP,cS);
}return this.__GT(cS);
},__GT:function(cT){var cU=new qx.bom.Collection;
cU.__GQ=this;
cT=Array.prototype.slice.call(cT,0);
cU.push.apply(cU,cT);
return cU;
},andSelf:function(){return this.add(this.__GQ);
},end:function(){return this.__GQ||new qx.bom.Collection();
},__GU:function(bQ,bR){var bW=this[0];
var bV=bW.ownerDocument||bW;
var bU=bV.createDocumentFragment();
var bY=qx.bom.Html.clean(bQ,bV,bU);
var cb=bU.firstChild;
if(cb){var bS=this.length-1;

for(var i=0,l=bS;i<l;i++){bR.call(this,this[i],bU.cloneNode(true));
}bR.call(this,this[bS],bU);
}if(bY){var bT;
var ca=qx.io.ScriptLoader;
var bX=qx.lang.Function;

for(var i=0,l=bY.length;i<l;i++){bT=bY[i];
if(bT.src){ca.get().load(bT.src);
}else{bX.globalEval(bT.text||bT.textContent||bT.innerHTML||"");
}if(bT.parentNode){bT.parentNode.removeChild(bT);
}}}return this;
},__GV:function(bK,bL){var bN=qx.bom.Selector;
var bM=qx.lang.Array;
var bP=[];

for(var i=0,l=bK.length;i<l;i++){{};
bP.push.apply(bP,bN.query(bK[i]));
}bP=bM.cast(bM.unique(bP),qx.bom.Collection);
for(var i=0,bO=this.length;i<bO;i++){bP[bL](this[i]);
}return this;
},append:function(bx){return this.__GU(arguments,this.__GW);
},prepend:function(cN){return this.__GU(arguments,this.__GX);
},__GW:function(cV,cW){cV.appendChild(cW);
},__GX:function(cA,cB){cA.insertBefore(cB,cA.firstChild);
},appendTo:function(dr){return this.__GV(arguments,z);
},prependTo:function(bJ){return this.__GV(arguments,bb);
},before:function(bw){return this.__GU(arguments,this.__GY);
},after:function(cc){return this.__GU(arguments,this.__Ha);
},__GY:function(bd,be){bd.parentNode.insertBefore(be,bd);
},__Ha:function(cC,cD){cC.parentNode.insertBefore(cD,cC.nextSibling);
},insertBefore:function(b){return this.__GV(arguments,N);
},insertAfter:function(bF){return this.__GV(arguments,H);
},wrapAll:function(content){var u=this[0];

if(u){var t=qx.bom.Collection.create(content,u.ownerDocument).clone();
if(u.parentNode){u.parentNode.insertBefore(t[0],u);
}t.map(this.__Hb).append(this);
}return this;
},__Hb:function(a){while(a.firstChild){a=a.firstChild;
}return a;
},wrapInner:function(content){var bv=new qx.bom.Collection(1);

for(var i=0,l=this.length;i<l;i++){bv[0]=this[i];
bv.contents().wrapAll(content);
}return this;
},wrap:function(content){var d=new qx.bom.Collection(1);
for(var i=0,l=this.length;i<l;i++){d[0]=this[i];
d.wrapAll(content);
}return this;
},replaceWith:function(content){return this.after(content).remove();
},replaceAll:function(bj){return this.__GV(arguments,I);
},remove:function(cp){var cr=this;

if(cp){cr=this.filter(cp);

if(cr.length==0){return this;
}}for(var i=0,cs=cr.length,cq;i<cs;i++){cq=cr[i];

if(cq.parentNode){cq.parentNode.removeChild(cq);
}}return cr;
},destroy:function(by){if(this.length==0){return this;
}var bA=qx.bom.Selector;
var bD=this;

if(by){bD=this.filter(by);

if(bD.length==0){return this;
}}var bC=qx.event.Registration.getManager(this[0]);

for(var i=0,l=bD.length,bB,bE;i<l;i++){bB=bD[i];
bC.removeAllListeners(bB);
bE=bA.query(T,bB);

for(var j=0,bz=bE.length;j<bz;j++){bC.removeAllListeners(bE[j]);
}if(bB.parentNode){bB.parentNode.removeChild(bB);
}}if(by){bD.end();
qx.lang.Array.exclude(this,bD);
}else{this.length=0;
}return this;
},empty:function(){var cX=qx.bom.Collection;

for(var i=0,l=this.length;i<l;i++){cX.query(V,this[i]).destroy();
while(this.firstChild){this.removeChild(this.firstChild);
}}return this;
},clone:function(df){var Element=qx.bom.Element;
return df?
this.map(function(c){return Element.clone(c,true);
}):this.map(Element.clone,Element);
}},defer:function(cy){if(window.$==null){window.$=cy.create;
}}});
})();
})();
(function(){var e="script",d="string",c="undefined",b="qx.bom.Html",a="text/javascript";
qx.Class.define(b,{statics:{__DF:function(B,C,D){return D.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i)?B:C+"></"+D+">";
},__DG:{opt:[1,"<select multiple='multiple'>","</select>"],leg:[1,"<fieldset>","</fieldset>"],table:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],def:qx.core.Variant.select("qx.client",{"mshtml":[1,"div<div>","</div>"],"default":null})},__DH:function(s,t){var z=t.createElement("div");
s=s.replace(/(<(\w+)[^>]*?)\/>/g,this.__DF);
var v=s.replace(/^\s+/,"").substring(0,5).toLowerCase();
var y,u=this.__DG;

if(!v.indexOf("<opt")){y=u.opt;
}else if(!v.indexOf("<leg")){y=u.leg;
}else if(v.match(/^<(thead|tbody|tfoot|colg|cap)/)){y=u.table;
}else if(!v.indexOf("<tr")){y=u.tr;
}else if(!v.indexOf("<td")||!v.indexOf("<th")){y=u.td;
}else if(!v.indexOf("<col")){y=u.col;
}else{y=u.def;
}if(y){z.innerHTML=y[1]+s+y[2];
var x=y[0];

while(x--){z=z.lastChild;
}}else{z.innerHTML=s;
}if(qx.core.Variant.isSet("qx.client","mshtml")){var A=/<tbody/i.test(s);
var w=!v.indexOf("<table")&&!A?z.firstChild&&z.firstChild.childNodes:y[1]=="<table>"&&!A?z.childNodes:[];

for(var j=w.length-1;j>=0;--j){if(w[j].tagName.toLowerCase()==="tbody"&&!w[j].childNodes.length){w[j].parentNode.removeChild(w[j]);
}}if(/^\s/.test(s)){z.insertBefore(t.createTextNode(s.match(/^\s*/)[0]),z.firstChild);
}}return qx.lang.Array.fromCollection(z.childNodes);
},clean:function(f,g,h){g=g||document;
if(typeof g.createElement===c){g=g.ownerDocument||g[0]&&g[0].ownerDocument||document;
}if(!h&&f.length===1&&typeof f[0]===d){var r=/^<(\w+)\s*\/?>$/.exec(f[0]);

if(r){return [g.createElement(r[1])];
}}var k,n=[];

for(var i=0,l=f.length;i<l;i++){k=f[i];
if(typeof k===d){k=this.__DH(k,g);
}if(k.nodeType){n.push(k);
}else if(k instanceof qx.type.BaseArray){n.push.apply(n,Array.prototype.slice.call(k,0));
}else if(k.toElement){n.push(k.toElement());
}else{n.push.apply(n,k);
}}if(h){var q=[],p=qx.lang.Array,o,m;

for(var i=0;n[i];i++){o=n[i];

if(o.nodeType==1&&o.tagName.toLowerCase()===e&&(!o.type||o.type.toLowerCase()===a)){if(o.parentNode){o.parentNode.removeChild(n[i]);
}q.push(o);
}else{if(o.nodeType===1){m=p.fromCollection(o.getElementsByTagName(e));
n.splice.apply(n,[i+1,0].concat(m));
}h.appendChild(o);
}}return q;
}return n;
}}});
})();
(function(){var h="0px",g="mshtml",f="qx.client",e="qx.bom.element.Dimension",d="paddingRight",c="paddingLeft",b="paddingTop",a="paddingBottom";
qx.Class.define(e,{statics:{getWidth:qx.core.Variant.select(f,{"gecko":function(i){if(i.getBoundingClientRect){var j=i.getBoundingClientRect();
return Math.round(j.right)-Math.round(j.left);
}else{return i.offsetWidth;
}},"default":function(w){return w.offsetWidth;
}}),getHeight:qx.core.Variant.select(f,{"gecko":function(t){if(t.getBoundingClientRect){var u=t.getBoundingClientRect();
return Math.round(u.bottom)-Math.round(u.top);
}else{return t.offsetHeight;
}},"default":function(s){return s.offsetHeight;
}}),getSize:function(r){return {width:this.getWidth(r),height:this.getHeight(r)};
},__hA:{visible:true,hidden:true},getContentWidth:function(x){var z=qx.bom.element.Style;
var A=qx.bom.element.Overflow.getX(x);
var B=parseInt(z.get(x,c)||h,10);
var E=parseInt(z.get(x,d)||h,10);

if(this.__hA[A]){var D=x.clientWidth;

if(D>0){D=D-B-E;
}return D;
}else{if(x.clientWidth>=x.scrollWidth){return Math.max(x.clientWidth,x.scrollWidth)-B-E;
}else{var C=x.scrollWidth-B;
var y=qx.bom.client.Engine;

if(y.NAME===g&&y.VERSION==6){C-=E;
}return C;
}}},getContentHeight:function(k){var m=qx.bom.element.Style;
var o=qx.bom.element.Overflow.getY(k);
var p=parseInt(m.get(k,b)||h,10);
var n=parseInt(m.get(k,a)||h,10);

if(this.__hA[o]){return k.clientHeight-p-n;
}else{if(k.clientHeight>=k.scrollHeight){return Math.max(k.clientHeight,k.scrollHeight)-p-n;
}else{var q=k.scrollHeight-p;
var l=qx.bom.client.Engine;

if(l.NAME===g&&l.VERSION==6){q-=n;
}return q;
}}},getContentSize:function(v){return {width:this.getContentWidth(v),height:this.getContentHeight(v)};
}}});
})();
(function(){var o="success",n="complete",m="error",l="load",k="fail",j="qx.client",i="loaded",h="readystatechange",g="head",f="qx.io.ScriptLoader",b="mshtml|webkit",d="script",c="text/javascript",a="abort";
qx.Bootstrap.define(f,{construct:function(){this.__lV=qx.Bootstrap.bind(this.__mc,this);
this.__lW=document.createElement(d);
},members:{__lX:null,__lY:null,__ma:null,__mb:null,__lV:null,__lW:null,load:function(s,t,u){if(this.__lX){throw new Error("Another request is still running!");
}this.__lX=true;
this.__lY=false;
var v=document.getElementsByTagName(g)[0];
var w=this.__lW;
this.__ma=t||null;
this.__mb=u||window;
w.type=c;
w.onerror=w.onload=w.onreadystatechange=this.__lV;
w.src=s;
setTimeout(function(){v.appendChild(w);
},0);
},abort:function(){if(this.__lX){this.dispose(a);
}},dispose:function(status){if(this.__lY){return;
}this.__lY=true;
var r=this.__lW;
r.onerror=r.onload=r.onreadystatechange=null;
var q=r.parentNode;

if(q){q.removeChild(r);
}delete this.__lX;
if(this.__ma){if(qx.core.Variant.isSet(j,b)){var self=this;
setTimeout(qx.event.GlobalError.observeMethod(function(){self.__ma.call(self.__mb,status);
delete self.__ma;
}),0);
}else{this.__ma.call(this.__mb,status);
delete this.__ma;
}}},__mc:qx.event.GlobalError.observeMethod(qx.core.Variant.select(j,{"mshtml":function(e){var p=this.__lW.readyState;

if(p==i){this.dispose(o);
}else if(p==n){this.dispose(o);
}else{return;
}},"opera":function(e){if(qx.Bootstrap.isString(e)||e.type===m){return this.dispose(k);
}else if(e.type===l){return this.dispose(o);
}else{return;
}},"default":function(e){if(qx.Bootstrap.isString(e)||e.type===m){this.dispose(k);
}else if(e.type===l){this.dispose(o);
}else if(e.type===h&&(e.target.readyState===n||e.target.readyState===i)){this.dispose(o);
}else{return;
}}}))}});
})();
(function(){var b="qx.util.ValueManager",a="abstract";
qx.Class.define(b,{type:a,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this._dynamic={};
},members:{_dynamic:null,resolveDynamic:function(e){return this._dynamic[e];
},isDynamic:function(d){return !!this._dynamic[d];
},resolve:function(f){if(f&&this._dynamic[f]){return this._dynamic[f];
}return f;
},_setDynamic:function(c){this._dynamic=c;
},_getDynamic:function(){return this._dynamic;
}},destruct:function(){this._dynamic=null;
}});
})();
(function(){var j="/",i="0",h="qx/static",g="http://",f="https://",e="file://",d="qx.util.AliasManager",c="singleton",b=".",a="static";
qx.Class.define(d,{type:c,extend:qx.util.ValueManager,construct:function(){qx.util.ValueManager.call(this);
this.__gr={};
this.add(a,h);
},members:{__gr:null,_preprocess:function(l){var o=this._getDynamic();

if(o[l]===false){return l;
}else if(o[l]===undefined){if(l.charAt(0)===j||l.charAt(0)===b||l.indexOf(g)===0||l.indexOf(f)===i||l.indexOf(e)===0){o[l]=false;
return l;
}
if(this.__gr[l]){return this.__gr[l];
}var n=l.substring(0,l.indexOf(j));
var m=this.__gr[n];

if(m!==undefined){o[l]=m+l.substring(n.length);
}}return l;
},add:function(r,s){this.__gr[r]=s;
var u=this._getDynamic();
for(var t in u){if(t.substring(0,t.indexOf(j))===r){u[t]=s+t.substring(r.length);
}}},remove:function(k){delete this.__gr[k];
},resolve:function(p){var q=this._getDynamic();

if(p!=null){p=this._preprocess(p);
}return q[p]||p;
}},destruct:function(){this.__gr=null;
}});
})();
(function(){var l="'>",k="[",h=", ",g="</span>",f="<span class='type-",e="</span> ",d="}",c="",b="]",a="{",I="map",H="<span class='object'>",G="]:",F="&gt;",E="<span class='object' title='Object instance with hash code: ",D="string",C="level-",B="0",A="&lt;",z="<span class='offset'>",s=":",t="qx.log.appender.Util",q="&amp;",r="&#39;",o="DIV",p="<span>",m="&quot;",n="<span class='type-key'>",u="</span>:<span class='type-",v="</span>: ",x=" ",w="]</span>: ",y="?";
qx.Class.define(t,{statics:{toHtml:function(W){var bh=[];
var be,bg,Y,bb;
bh.push(z,this.formatOffset(W.offset,6),e);

if(W.object){var X=W.win.qx.core.ObjectRegistry.fromHashCode(W.object);

if(X){bh.push(E+X.$$hash+l,X.classname,k,X.$$hash,w);
}}else if(W.clazz){bh.push(H+W.clazz.classname,v);
}var ba=W.items;

for(var i=0,bf=ba.length;i<bf;i++){be=ba[i];
bg=be.text;

if(bg instanceof Array){var bb=[];

for(var j=0,bd=bg.length;j<bd;j++){Y=bg[j];

if(typeof Y===D){bb.push(p+this.escapeHTML(Y)+g);
}else if(Y.key){bb.push(n+Y.key+u+Y.type+l+this.escapeHTML(Y.text)+g);
}else{bb.push(f+Y.type+l+this.escapeHTML(Y.text)+g);
}}bh.push(f+be.type+l);

if(be.type===I){bh.push(a,bb.join(h),d);
}else{bh.push(k,bb.join(h),b);
}bh.push(g);
}else{bh.push(f+be.type+l+this.escapeHTML(bg)+e);
}}var bc=document.createElement(o);
bc.innerHTML=bh.join(c);
bc.className=C+W.level;
return bc;
},formatOffset:function(bi,length){var bl=bi.toString();
var bj=(length||6)-bl.length;
var bk=c;

for(var i=0;i<bj;i++){bk+=B;
}return bk+bl;
},escapeHTML:function(J){return String(J).replace(/[<>&"']/g,this.__us);
},__us:function(U){var V={"<":A,">":F,"&":q,"'":r,'"':m};
return V[U]||y;
},toText:function(T){return this.toTextArray(T).join(x);
},toTextArray:function(K){var S=[];
S.push(this.formatOffset(K.offset,6));

if(K.object){var L=K.win.qx.core.ObjectRegistry.fromHashCode(K.object);

if(L){S.push(L.classname+k+L.$$hash+G);
}}else if(K.clazz){S.push(K.clazz.classname+s);
}var M=K.items;
var P,R;

for(var i=0,Q=M.length;i<Q;i++){P=M[i];
R=P.text;

if(R instanceof Array){var N=[];

for(var j=0,O=R.length;j<O;j++){N.push(R[j].text);
}
if(P.type===I){S.push(a,N.join(h),d);
}else{S.push(k,N.join(h),b);
}}else{S.push(R);
}}return S;
}}});
})();
(function(){var e="debug",d="log",c="qx.log.appender.Native",b="qx.client";
qx.Class.define(c,{statics:{process:qx.core.Variant.select(b,{"gecko":function(i){if(window.console&&console.firebug){console[i.level].call(console,qx.log.appender.Util.toText(i));
}},"mshtml":function(f){if(window.console){var h=f.level;

if(h==e){h=d;
}var g=qx.log.appender.Util.toText(f);
console[h](g);
}},"webkit":function(k){if(window.console){var m=k.level;

if(m==e){m=d;
}var l=qx.log.appender.Util.toText(k);
console[m](l);
}},"opera":function(j){}})},defer:function(a){qx.log.Logger.register(a);
}});
})();
(function(){var k="",j='</div>',i="none",h="keypress",g='.qxconsole .messages{background:white;height:100%;width:100%;overflow:auto;}',f='.qxconsole .messages .user-result{background:white}',d='.qxconsole .messages .level-error{background:#FFE2D5}',c="div",b="user-command",a='<div class="command">',P='.qxconsole .command input:focus{outline:none;}',O='.qxconsole .messages .type-key{color:#565656;font-style:italic}',N='.qxconsole .messages .type-instance{color:#565656;font-weight:bold}',M='.qxconsole .messages div{padding:0px 4px;}',L='.qxconsole .messages .level-debug{background:white}',K='.qxconsole .messages .type-class{color:#5F3E8A;font-weight:bold}',J="DIV",I='.qxconsole .messages .level-user{background:#E3EFE9}',H='<div class="qxconsole">',G='.qxconsole .messages .type-map{color:#CC3E8A;font-weight:bold;}',r='.qxconsole .messages .type-string{color:black;font-weight:normal;}',s='.qxconsole .control a{text-decoration:none;color:black;}',p='<div class="messages">',q='.qxconsole .messages .type-boolean{color:#15BC91;font-weight:normal;}',n='<input type="text"/>',o="clear",l='.qxconsole .command input{width:100%;border:0 none;font-family:Consolas,Monaco,monospace;font-size:11px;line-height:1.2;}',m='.qxconsole .messages .type-array{color:#CC3E8A;font-weight:bold;}',t='.qxconsole{z-index:10000;width:600px;height:300px;top:0px;right:0px;position:absolute;border-left:1px solid black;color:black;border-bottom:1px solid black;color:black;font-family:Consolas,Monaco,monospace;font-size:11px;line-height:1.2;}',u='.qxconsole .command{background:white;padding:2px 4px;border-top:1px solid black;}',y='.qxconsole .messages .user-command{color:blue}',x="qx.log.appender.Console",A='.qxconsole .messages .level-info{background:#DEEDFA}',z="block",C='.qxconsole .messages .level-warn{background:#FFF7D5}',B='.qxconsole .messages .type-stringify{color:#565656;font-weight:bold}',w='.qxconsole .messages .user-error{background:#FFE2D5}',F='.qxconsole .control{background:#cdcdcd;border-bottom:1px solid black;padding:4px 8px;}',E='<div class="control"><a href="javascript:qx.log.appender.Console.clear()">Clear</a> | <a href="javascript:qx.log.appender.Console.toggle()">Hide</a></div>',D=">>> ",v='.qxconsole .messages .type-number{color:#155791;font-weight:normal;}';
qx.Class.define(x,{statics:{init:function(){var X=[t,F,s,g,M,y,f,w,L,A,C,d,I,r,v,q,m,G,O,K,N,B,u,l,P];
qx.bom.Stylesheet.createElement(X.join(k));
var ba=[H,E,p,j,a,n,j,j];
var bb=document.createElement(J);
bb.innerHTML=ba.join(k);
var Y=bb.firstChild;
document.body.appendChild(bb.firstChild);
this.__Gw=Y;
this.__Gx=Y.childNodes[1];
this.__Gy=Y.childNodes[2].firstChild;
this.__GD();
qx.log.Logger.register(this);
qx.core.ObjectRegistry.register(this);
},dispose:function(){qx.event.Registration.removeListener(document.documentElement,h,this.__GE,this);
qx.log.Logger.unregister(this);
},clear:function(){this.__Gx.innerHTML=k;
},process:function(bc){this.__Gx.appendChild(qx.log.appender.Util.toHtml(bc));
this.__Gz();
},__Gz:function(){this.__Gx.scrollTop=this.__Gx.scrollHeight;
},__GA:true,toggle:function(){if(!this.__Gw){this.init();
}else if(this.__Gw.style.display==i){this.show();
}else{this.__Gw.style.display=i;
}},show:function(){if(!this.__Gw){this.init();
}else{this.__Gw.style.display=z;
this.__Gx.scrollTop=this.__Gx.scrollHeight;
}},__GB:[],execute:function(){var S=this.__Gy.value;

if(S==k){return;
}
if(S==o){return this.clear();
}var Q=document.createElement(c);
Q.innerHTML=qx.log.appender.Util.escapeHTML(D+S);
Q.className=b;
this.__GB.push(S);
this.__GC=this.__GB.length;
this.__Gx.appendChild(Q);
this.__Gz();

try{var R=window.eval(S);
}catch(T){qx.log.Logger.error(T);
}
if(R!==undefined){qx.log.Logger.debug(R);
}},__GD:function(e){this.__Gx.style.height=(this.__Gw.clientHeight-this.__Gw.firstChild.offsetHeight-this.__Gw.lastChild.offsetHeight)+"px";
},__GE:function(e){var V=e.getKeyIdentifier();
if((V=="F7")||(V=="D"&&e.isCtrlPressed())){this.toggle();
e.preventDefault();
}if(!this.__Gw){return;
}if(!qx.dom.Hierarchy.contains(this.__Gw,e.getTarget())){return;
}if(V=="Enter"&&this.__Gy.value!=""){this.execute();
this.__Gy.value="";
}if(V=="Up"||V=="Down"){this.__GC+=V=="Up"?-1:1;
this.__GC=Math.min(Math.max(0,this.__GC),this.__GB.length);
var U=this.__GB[this.__GC];
this.__Gy.value=U||"";
this.__Gy.select();
}}},defer:function(W){qx.event.Registration.addListener(document.documentElement,h,W.__GE,W);
}});
})();
(function(){var o="qx.client",n="head",m="text/css",l="stylesheet",k="}",j='@import "',h="{",g='";',f="qx.bom.Stylesheet",e="link",d="style";
qx.Class.define(f,{statics:{includeFile:function(p,q){if(!q){q=document;
}var r=q.createElement(e);
r.type=m;
r.rel=l;
r.href=qx.util.ResourceManager.getInstance().toUri(p);
var s=q.getElementsByTagName(n)[0];
s.appendChild(r);
},createElement:qx.core.Variant.select(o,{"mshtml":function(x){var y=document.createStyleSheet();

if(x){y.cssText=x;
}return y;
},"default":function(z){var A=document.createElement(d);
A.type=m;

if(z){A.appendChild(document.createTextNode(z));
}document.getElementsByTagName(n)[0].appendChild(A);
return A.sheet;
}}),addRule:qx.core.Variant.select(o,{"mshtml":function(N,O,P){N.addRule(O,P);
},"default":function(F,G,H){F.insertRule(G+h+H+k,F.cssRules.length);
}}),removeRule:qx.core.Variant.select(o,{"mshtml":function(B,C){var D=B.rules;
var E=D.length;

for(var i=E-1;i>=0;--i){if(D[i].selectorText==C){B.removeRule(i);
}}},"default":function(S,T){var U=S.cssRules;
var V=U.length;

for(var i=V-1;i>=0;--i){if(U[i].selectorText==T){S.deleteRule(i);
}}}}),removeAllRules:qx.core.Variant.select(o,{"mshtml":function(a){var b=a.rules;
var c=b.length;

for(var i=c-1;i>=0;i--){a.removeRule(i);
}},"default":function(W){var X=W.cssRules;
var Y=X.length;

for(var i=Y-1;i>=0;i--){W.deleteRule(i);
}}}),addImport:qx.core.Variant.select(o,{"mshtml":function(I,J){I.addImport(J);
},"default":function(Q,R){Q.insertRule(j+R+g,Q.cssRules.length);
}}),removeImport:qx.core.Variant.select(o,{"mshtml":function(bd,be){var bf=bd.imports;
var bg=bf.length;

for(var i=bg-1;i>=0;i--){if(bf[i].href==be){bd.removeImport(i);
}}},"default":function(t,u){var v=t.cssRules;
var w=v.length;

for(var i=w-1;i>=0;i--){if(v[i].href==u){t.deleteRule(i);
}}}}),removeAllImports:qx.core.Variant.select(o,{"mshtml":function(K){var L=K.imports;
var M=L.length;

for(var i=M-1;i>=0;i--){K.removeImport(i);
}},"default":function(ba){var bb=ba.cssRules;
var bc=bb.length;

for(var i=bc-1;i>=0;i--){if(bb[i].type==bb[i].IMPORT_RULE){ba.deleteRule(i);
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
(function(){var cr="window",cq="",cp="childNodes",co="nodeName",cn="nodeType",cm="document",cl="function",ck="firstChild",cj="qx.client",ci="external",bz="location",by="[native code]",bx="lastChild",bw="scrollY",bv="scrollWidth",bu="defaultView",bt="closed",bs="content",br="qx",bq="</td><td>",cy="filters",cz="locationbar",cw="screenX",cx="previousSibling",cu="scrollX",cv="Global namespace is polluted by the following unknown objects:\n\n",cs="doctype",ct="parent",cA="qx.dev.Pollution",cB="outerText",bX="applets",bW="parentElement",ca="designMode",bY="cookie",cc="fullScreen",cb="links",ce="pageXOffset",cd="frames",bV="documentElement",bU="screenY",g="statusbar",h="history",j="sun",k="pkcs11",l="java",m="style",n="innerWidth",o="plugins",p="implementation",q="clientWidth",cF="compatMode",cE="length",cD="textContent",cC="controllers",cJ="netscape",cI="self",cH="domConfig",cG="attributes",cL="clientHeight",cK="outerHeight",P="parentNode",Q="innerHeight",N="title",O="ownerDocument",T="<table>",U="globalStorage",R="Global namespace is not polluted by any unknown objects.",S="toolbar",L="outerHTML",M="crypto",y="forms",x="scrollbars",A="frameElement",z="Components",u="body",t="clientInformation",w="offscreenBuffering",v="embeds",s="localName",r="scrollTop",ba="isMultiLine",bb="scrollLeft",bc="images",bd="event",V="offsetHeight",W="scrollMaxY",X="sessionStorage",Y="screen",be="name",bf="offsetLeft",I="console",H="XMLHttpRequest",G="mshtml",F="nextSibling",E="innerText",D="menubar",C="scopeName",B="top",K="outerWidth",J=": ",bg="\n",bh="status",bi="contentEditable",bj="anchors",bk="</table>",bl="<tr style='vertical-align:top'><td>",bm="scrollMaxX",bn="screenTop",bo="defaultStatus",bp="styleSheets",bD="className",bC="personalbar",bB="</td></tr>",bA="currentStyle",bH="directories",bG="navigator",bF="pageYOffset",bE="screenLeft",bJ="opener",bI="scrollHeight",bQ="__firebug__",bR="Option",bO="innerHTML",bP="tabIndex",bM="offsetTop",bN="[function]",bK="clipboardData",bL="Packages",bS="tagName",bT="offsetWidth",cg="mshtml|opera",cf="undefined",ch="Image";
qx.Class.define(cA,{statics:{names:{"window":window,"document":document,"body":document.body},ignore:{"window":[br,l,j,bL,bQ,z,cC,X,U,I,bd,w,bK,t,bR,ch,ci,bn,bE,cE,cr,cm,bz,bG,cJ,ct,cd,B,x,be,cu,bw,cI,Y,h,bs,D,S,cz,bC,g,bH,bt,M,k,bJ,bh,bo,n,Q,K,cK,cw,bU,ce,bF,bm,W,cc,A,H],"document":[cH,bz,cF,p,bu,N,u,bp,bV,co,cn,ck,bx,cs,bc,bX,cb,y,bj,bY,v,o,ca,cp],"body":[cD,bO,L,E,cB,C,bW,bS,cy,bi,cm,bA,ba,cL,q,bx,ck,bM,bf,bT,V,bP,bD,cG,cx,F,O,s,cp,P,cn,co,m,r,bb,bv,bI]},getInfo:function(cY){var da=qx.dev.Pollution.getTextList(cY||cr);

if(da){return cv+da;
}else{return R;
}},extract:function(cM){var cO=[];
var cN=qx.dev.Pollution.ignore[cM];
if(qx.core.Variant.isSet(cj,G)){if(cM==cr){cN=cN.slice(0);

for(var cP=0;cP<window.length;cP++){cN.push(cq+cP);
}}}var cQ=qx.dev.Pollution.names[cM];

for(var cR in cQ){try{if(qx.core.Variant.isSet(cj,cg)){if(cM==cr&&cR==ci){continue;
}}if(typeof cQ[cR]==cf||cQ[cR]===null){continue;
}if(typeof cQ[cR]==cl&&cQ[cR].toString().indexOf(by)!=-1){continue;
}if(typeof cQ[cR].constructor==cl){if((cQ[cR].constructor.toString().indexOf(by)!=-1)||(cQ[cR].constructor.toString().indexOf(bN)!=-1)){continue;
}}if(qx.lang.Array.contains(cN,cR)){continue;
}}catch(cS){continue;
}cO.push({"key":cR,"value":cQ[cR]});
}return cO;
},getHtmlTable:function(a){var c=[];
var b=bl;
var e=bq;
var f=bB;
c.push(T);
var d=this.extract(a);

for(var i=0;i<d.length;i++){c.push(b+d[i].key+e+d[i].value+f);
}c.push(bk);
return c.join(cq);
},getTextList:function(cT){var cV=[];
var cW=J;
var cX=bg;
var cU=this.extract(cT);

for(var i=0;i<cU.length;i++){cV.push(cU[i].key+cW+cU[i].value+cX);
}return cV.join(cq);
}}});
})();
(function(){var r="other",q="widgets",p="fonts",o="appearances",n="qx.Theme",m="]",k="[Theme ",j="colors",h="decorations",g="Theme",d="meta",f="borders",e="icons";
qx.Bootstrap.define(n,{statics:{define:function(name,b){if(!b){var b={};
}b.include=this.__qx(b.include);
b.patch=this.__qx(b.patch);
{};
var c={$$type:g,name:name,title:b.title,toString:this.genericToString};
if(b.extend){c.supertheme=b.extend;
}c.basename=qx.Bootstrap.createNamespace(name,c);
this.__qA(c,b);
this.__qy(c,b);
this.$$registry[name]=c;
for(var i=0,a=b.include,l=a.length;i<l;i++){this.include(c,a[i]);
}
for(var i=0,a=b.patch,l=a.length;i<l;i++){this.patch(c,a[i]);
}},__qx:function(v){if(!v){return [];
}
if(qx.Bootstrap.isArray(v)){return v;
}else{return [v];
}},__qy:function(s,t){var u=t.aliases||{};

if(t.extend&&t.extend.aliases){qx.Bootstrap.objectMergeWith(u,t.extend.aliases,false);
}s.aliases=u;
},getAll:function(){return this.$$registry;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},genericToString:function(){return k+this.name+m;
},__qz:function(I){for(var i=0,J=this.__qB,l=J.length;i<l;i++){if(I[J[i]]){return J[i];
}}},__qA:function(K,L){var O=this.__qz(L);
if(L.extend&&!O){O=L.extend.type;
}K.type=O||r;
if(!O){return;
}var Q=function(){};
if(L.extend){Q.prototype=new L.extend.$$clazz;
}var P=Q.prototype;
var N=L[O];
for(var M in N){P[M]=N[M];
if(P[M].base){{};
P[M].base=L.extend;
}}K.$$clazz=Q;
K[O]=new Q;
},$$registry:{},__qB:[j,f,h,p,e,q,o,d],__qC:null,__qD:null,__qE:function(){},patch:function(w,x){var z=this.__qz(x);

if(z!==this.__qz(w)){throw new Error("The mixins '"+w.name+"' are not compatible '"+x.name+"'!");
}var y=x[z];
var A=w.$$clazz.prototype;

for(var B in y){A[B]=y[B];
}},include:function(C,D){var F=D.type;

if(F!==C.type){throw new Error("The mixins '"+C.name+"' are not compatible '"+D.name+"'!");
}var E=D[F];
var G=C.$$clazz.prototype;

for(var H in E){if(G[H]!==undefined){continue;
}G[H]=E[H];
}}}});
})();
(function(){var j="white",i="black",h="#3E6CA8",g="#EBE9ED",f="#A7A6AA",e="#EEE",d="#F3F0F5",c="gray",b="#85878C",a="#888888",E="#3E5B97",D="#FFFFE1",C="#F3F8FD",B="#CBC8CD",A="#FFE0E0",z="#F4F4F4",y="#808080",x="#CCCCCC",w="#C82C2C",v="#DBEAF9",q="#BCCEE5",r="#A5BDDE",o="#7CA0CF",p="#F6F5F7",m="#FF9999",n="qx.theme.classic.Color",k="#990000",l="#F9F8E9",s="#DCDFE4",t="#FAFBFE",u="#AAAAAA";
qx.Theme.define(n,{colors:{"background":g,"background-light":d,"background-focused":C,"background-focused-inner":v,"background-disabled":z,"background-selected":h,"background-field":j,"background-pane":t,"background-invalid":A,"border-lead":a,"border-light":j,"border-light-shadow":s,"border-dark-shadow":f,"border-dark":b,"border-main":b,"border-focused-light":q,"border-focused-light-shadow":r,"border-focused-dark-shadow":o,"border-focused-dark":h,"border-separator":y,"invalid":k,"border-focused-invalid":m,"text":i,"text-disabled":f,"text-selected":j,"text-focused":E,"text-placeholder":B,"tooltip":D,"tooltip-text":i,"tooltip-invalid":w,"button":g,"button-hovered":p,"button-abandoned":l,"button-checked":d,"window-active-caption-text":[255,255,255],"window-inactive-caption-text":[255,255,255],"window-active-caption":[51,94,168],"window-inactive-caption":[111,161,217],"date-chooser":j,"date-chooser-title":[116,116,116],"date-chooser-selected":[52,52,52],"effect":[254,200,60],"table-pane":j,"table-header":[242,242,242],"table-header-border":[214,213,217],"table-header-cell":[235,234,219],"table-header-cell-hover":[255,255,255],"table-focus-indicator":[179,217,255],"table-row-background-focused-selected":[90,138,211],"table-row-background-focused":[221,238,255],"table-row-background-selected":[51,94,168],"table-row-background-even":[250,248,243],"table-row-background-odd":[255,255,255],"table-row-selected":[255,255,255],"table-row":[0,0,0],"table-row-line":e,"table-column-line":e,"progressive-table-header":u,"progressive-table-row-background-even":[250,248,243],"progressive-table-row-background-odd":[255,255,255],"progressive-progressbar-background":c,"progressive-progressbar-indicator-done":x,"progressive-progressbar-indicator-undone":j,"progressive-progressbar-percent-background":c,"progressive-progressbar-percent-text":j}});
})();
(function(){var a="qx.ui.decoration.IDecorator";
qx.Interface.define(a,{members:{getMarkup:function(){},resize:function(d,e,f){},tint:function(b,c){},getInsets:function(){}}});
})();
(function(){var i="Number",h="_applyInsets",g="abstract",f="insetRight",e="insetTop",d="insetBottom",c="qx.ui.decoration.Abstract",b="shorthand",a="insetLeft";
qx.Class.define(c,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],type:g,properties:{insetLeft:{check:i,nullable:true,apply:h},insetRight:{check:i,nullable:true,apply:h},insetBottom:{check:i,nullable:true,apply:h},insetTop:{check:i,nullable:true,apply:h},insets:{group:[e,f,d,a],mode:b}},members:{__ni:null,_getDefaultInsets:function(){throw new Error("Abstract method called.");
},_isInitialized:function(){throw new Error("Abstract method called.");
},_resetInsets:function(){this.__ni=null;
},getInsets:function(){if(this.__ni){return this.__ni;
}var j=this._getDefaultInsets();
return this.__ni={left:this.getInsetLeft()==null?j.left:this.getInsetLeft(),right:this.getInsetRight()==null?j.right:this.getInsetRight(),bottom:this.getInsetBottom()==null?j.bottom:this.getInsetBottom(),top:this.getInsetTop()==null?j.top:this.getInsetTop()};
},_applyInsets:function(){{};
this.__ni=null;
}},destruct:function(){this.__ni=null;
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
(function(){var o="_applyStyle",n="",m="Color",l="px",k="solid",j="dotted",i="double",h="dashed",g="_applyWidth",f="qx.ui.decoration.Uniform",c="px ",e=" ",d="scale",b="PositiveInteger",a="absolute";
qx.Class.define(f,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(p,q,r){qx.ui.decoration.Abstract.call(this);
if(p!=null){this.setWidth(p);
}
if(q!=null){this.setStyle(q);
}
if(r!=null){this.setColor(r);
}},properties:{width:{check:b,init:0,apply:g},style:{nullable:true,check:[k,j,h,i],init:k,apply:o},color:{nullable:true,check:m,apply:o},backgroundColor:{check:m,nullable:true,apply:o}},members:{__rd:null,_getDefaultInsets:function(){var E=this.getWidth();
return {top:E,right:E,bottom:E,left:E};
},_isInitialized:function(){return !!this.__rd;
},getMarkup:function(){if(this.__rd){return this.__rd;
}var s={position:a,top:0,left:0};
var t=this.getWidth();
{};
var v=qx.theme.manager.Color.getInstance();
s.border=t+c+this.getStyle()+e+(v.resolve(this.getColor())||n);
var u=this._generateBackgroundMarkup(s);
return this.__rd=u;
},resize:function(w,x,y){var A=this.getBackgroundImage()&&this.getBackgroundRepeat()==d;

if(A||qx.bom.client.Feature.CONTENT_BOX){var z=this.getWidth()*2;
x-=z;
y-=z;
if(x<0){x=0;
}
if(y<0){y=0;
}}w.style.width=x+l;
w.style.height=y+l;
},tint:function(B,C){var D=qx.theme.manager.Color.getInstance();

if(C==null){C=this.getBackgroundColor();
}B.style.backgroundColor=D.resolve(C)||n;
},_applyWidth:function(){{};
this._resetInsets();
},_applyStyle:function(){{};
}},destruct:function(){this.__rd=null;
}});
})();
(function(){var j="_applyStyle",i="solid",h="Color",g="",f="double",e="px",d="px ",c="dotted",b="_applyWidth",a="dashed",E="Number",D=" ",C="shorthand",B="widthTop",A="styleRight",z="styleLeft",y="widthLeft",x="widthBottom",w="styleTop",v="colorBottom",q="styleBottom",r="widthRight",o="colorLeft",p="colorRight",m="colorTop",n="border-top",k="border-left",l="border-right",s="qx.ui.decoration.Single",t="border-bottom",u="absolute";
qx.Class.define(s,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(N,O,P){qx.ui.decoration.Abstract.call(this);
if(N!=null){this.setWidth(N);
}
if(O!=null){this.setStyle(O);
}
if(P!=null){this.setColor(P);
}},properties:{widthTop:{check:E,init:0,apply:b},widthRight:{check:E,init:0,apply:b},widthBottom:{check:E,init:0,apply:b},widthLeft:{check:E,init:0,apply:b},styleTop:{nullable:true,check:[i,c,a,f],init:i,apply:j},styleRight:{nullable:true,check:[i,c,a,f],init:i,apply:j},styleBottom:{nullable:true,check:[i,c,a,f],init:i,apply:j},styleLeft:{nullable:true,check:[i,c,a,f],init:i,apply:j},colorTop:{nullable:true,check:h,apply:j},colorRight:{nullable:true,check:h,apply:j},colorBottom:{nullable:true,check:h,apply:j},colorLeft:{nullable:true,check:h,apply:j},backgroundColor:{check:h,nullable:true,apply:j},left:{group:[y,z,o]},right:{group:[r,A,p]},top:{group:[B,w,m]},bottom:{group:[x,q,v]},width:{group:[B,r,x,y],mode:C},style:{group:[w,A,q,z],mode:C},color:{group:[m,p,v,o],mode:C}},members:{__pk:null,_getDefaultInsets:function(){return {top:this.getWidthTop(),right:this.getWidthRight(),bottom:this.getWidthBottom(),left:this.getWidthLeft()};
},_isInitialized:function(){return !!this.__pk;
},getMarkup:function(F){if(this.__pk){return this.__pk;
}var G=qx.theme.manager.Color.getInstance();
var H={};
var J=this.getWidthTop();

if(J>0){H[n]=J+d+this.getStyleTop()+D+(G.resolve(this.getColorTop())||g);
}var J=this.getWidthRight();

if(J>0){H[l]=J+d+this.getStyleRight()+D+(G.resolve(this.getColorRight())||g);
}var J=this.getWidthBottom();

if(J>0){H[t]=J+d+this.getStyleBottom()+D+(G.resolve(this.getColorBottom())||g);
}var J=this.getWidthLeft();

if(J>0){H[k]=J+d+this.getStyleLeft()+D+(G.resolve(this.getColorLeft())||g);
}{};
H.position=u;
H.top=0;
H.left=0;
var I=this._generateBackgroundMarkup(H);
return this.__pk=I;
},resize:function(Q,R,S){var T=this.getInsets();
R-=T.left+T.right;
S-=T.top+T.bottom;
if(R<0){R=0;
}
if(S<0){S=0;
}Q.style.width=R+e;
Q.style.height=S+e;
Q.style.left=(parseInt(Q.style.left)+T.left-this.getWidthLeft())+e;
Q.style.top=(parseInt(Q.style.top)+T.top-this.getWidthTop())+e;
},tint:function(K,L){var M=qx.theme.manager.Color.getInstance();

if(L==null){L=this.getBackgroundColor();
}K.style.backgroundColor=M.resolve(L)||g;
},_applyWidth:function(){{};
this._resetInsets();
},_applyStyle:function(){{};
}},destruct:function(){this.__pk=null;
}});
})();
(function(){var j="px ",i=" ",h="px",g="Color",f="Number",e=";",d="shorthand",c="innerWidthRight",b="border-left:",a='<div style="position:absolute;top:0;left:0;',E="innerColorBottom",D='</div>',C='',B="scale",A="border-top",z="innerWidthTop",y="border-left",x="innerColorRight",w="innerColorTop",v="relative",q="border-top:",r="qx.ui.decoration.Double",o="border-right:",p='line-height:0;',m="innerColorLeft",n="border-bottom",k='">',l="innerWidthBottom",s="innerWidthLeft",t="border-bottom:",u="border-right";
qx.Class.define(r,{extend:qx.ui.decoration.Single,construct:function(T,U,V,innerWidth,W){qx.ui.decoration.Single.call(this,T,U,V,innerWidth,W);
if(innerWidth!=null){this.setInnerWidth(innerWidth);
}
if(W!=null){this.setInnerColor(W);
}},properties:{innerWidthTop:{check:f,init:0},innerWidthRight:{check:f,init:0},innerWidthBottom:{check:f,init:0},innerWidthLeft:{check:f,init:0},innerWidth:{group:[z,c,l,s],mode:d},innerColorTop:{nullable:true,check:g},innerColorRight:{nullable:true,check:g},innerColorBottom:{nullable:true,check:g},innerColorLeft:{nullable:true,check:g},innerColor:{group:[w,x,E,m],mode:d}},members:{__wO:null,_getDefaultInsets:function(){return {top:this.getWidthTop()+this.getInnerWidthTop(),right:this.getWidthRight()+this.getInnerWidthRight(),bottom:this.getWidthBottom()+this.getInnerWidthBottom(),left:this.getWidthLeft()+this.getInnerWidthLeft()};
},_isInitialized:function(){return !!this.__wO;
},getMarkup:function(){if(this.__wO){return this.__wO;
}var F=qx.theme.manager.Color.getInstance();
var I={position:v};
var G=this.getInnerWidthTop();

if(G>0){I[A]=G+j+this.getStyleTop()+i+F.resolve(this.getInnerColorTop());
}var G=this.getInnerWidthRight();

if(G>0){I[u]=G+j+this.getStyleRight()+i+F.resolve(this.getInnerColorRight());
}var G=this.getInnerWidthBottom();

if(G>0){I[n]=G+j+this.getStyleBottom()+i+F.resolve(this.getInnerColorBottom());
}var G=this.getInnerWidthLeft();

if(G>0){I[y]=G+j+this.getStyleLeft()+i+F.resolve(this.getInnerColorLeft());
}{};
var J=this._generateBackgroundMarkup(I);
var H=p;
if((qx.bom.client.Engine.MSHTML&&qx.bom.client.Engine.VERSION<8)||(qx.bom.client.Engine.MSHTML&&qx.bom.client.Engine.DOCUMENT_MODE<8)){H=C;
}var G=this.getWidthTop();

if(G>0){H+=q+G+j+this.getStyleTop()+i+F.resolve(this.getColorTop())+e;
}var G=this.getWidthRight();

if(G>0){H+=o+G+j+this.getStyleRight()+i+F.resolve(this.getColorRight())+e;
}var G=this.getWidthBottom();

if(G>0){H+=t+G+j+this.getStyleBottom()+i+F.resolve(this.getColorBottom())+e;
}var G=this.getWidthLeft();

if(G>0){H+=b+G+j+this.getStyleLeft()+i+F.resolve(this.getColorLeft())+e;
}{};
return this.__wO=a+H+k+J+D;
},resize:function(K,L,M){var R=this.getBackgroundImage()&&this.getBackgroundRepeat()==B;
var P=this.getInsets();

if(R||qx.bom.client.Feature.CONTENT_BOX){var innerWidth=L-P.left-P.right;
var innerHeight=M-P.top-P.bottom;
}else{var N=P.top-this.getInnerWidthTop();
var S=P.bottom-this.getInnerWidthBottom();
var O=P.left-this.getInnerWidthLeft();
var Q=P.right-this.getInnerWidthRight();
var innerWidth=L-O-Q;
var innerHeight=M-N-S;
}if(innerWidth<0){innerWidth=0;
}
if(innerHeight<0){innerHeight=0;
}K.firstChild.style.width=innerWidth+h;
K.firstChild.style.height=innerHeight+h;
K.style.left=(parseInt(K.style.left)+P.left-this.getWidthLeft()-this.getInnerWidthLeft())+h;
K.style.top=(parseInt(K.style.top)+P.top-this.getWidthTop()-this.getInnerWidthTop())+h;
}},destruct:function(){this.__wO=null;
}});
})();
(function(){var m="Number",l="_applyInsets",k="-l",j="insetRight",i="insetTop",h="_applyBaseImage",g="insetBottom",f="set",e="shorthand",d="-t",a="insetLeft",c="String",b="qx.ui.decoration.Grid";
qx.Class.define(b,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],construct:function(A,B){qx.core.Object.call(this);

if(qx.ui.decoration.css3.BorderImage.IS_SUPPORTED){this.__mV=new qx.ui.decoration.css3.BorderImage();

if(A){this.__mW(A);
}}else{this.__mV=new qx.ui.decoration.GridDiv(A);
}
if(B!=null){this.__mV.setInsets(B);
}},properties:{baseImage:{check:c,nullable:true,apply:h},insetLeft:{check:m,nullable:true,apply:l},insetRight:{check:m,nullable:true,apply:l},insetBottom:{check:m,nullable:true,apply:l},insetTop:{check:m,nullable:true,apply:l},insets:{group:[i,j,g,a],mode:e}},members:{__mV:null,getMarkup:function(){return this.__mV.getMarkup();
},resize:function(E,F,G){this.__mV.resize(E,F,G);
},tint:function(H,I){},getInsets:function(){return this.__mV.getInsets();
},_applyInsets:function(x,y,name){var z=f+qx.lang.String.firstUp(name);
this.__mV[z](x);
},_applyBaseImage:function(C,D){if(this.__mV instanceof qx.ui.decoration.GridDiv){this.__mV.setBaseImage(C);
}else{this.__mW(C);
}},__mW:function(n){var p,r;
this.__mV.setBorderImage(n);
var t=qx.util.AliasManager.getInstance().resolve(n);
var u=/(.*)(\.[a-z]+)$/.exec(t);
var q=u[1];
var s=u[2];
var o=qx.util.ResourceManager.getInstance();
var v=o.getImageHeight(q+d+s);
var w=o.getImageWidth(q+k+s);
{};
this.__mV.setSlice([v,w]);
}},destruct:function(){this.__mV=null;
}});
})();
(function(){var j="_applyStyle",i='"></div>',h="Color",g="1px",f='<div style="',e='border:',d="1px solid ",c="",b=";",a="px",v='</div>',u="qx.ui.decoration.Beveled",t='<div style="position:absolute;top:1px;left:1px;',s='border-bottom:',r='border-right:',q='border-left:',p='border-top:',o="Number",n='<div style="position:absolute;top:1px;left:0px;',m='position:absolute;top:0px;left:1px;',k='<div style="overflow:hidden;font-size:0;line-height:0;">',l="absolute";
qx.Class.define(u,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(P,Q,R){qx.ui.decoration.Abstract.call(this);
if(P!=null){this.setOuterColor(P);
}
if(Q!=null){this.setInnerColor(Q);
}
if(R!=null){this.setInnerOpacity(R);
}},properties:{innerColor:{check:h,nullable:true,apply:j},innerOpacity:{check:o,init:1,apply:j},outerColor:{check:h,nullable:true,apply:j},backgroundColor:{check:h,nullable:true,apply:j}},members:{__qL:null,_getDefaultInsets:function(){return {top:2,right:2,bottom:2,left:2};
},_isInitialized:function(){return !!this.__qL;
},_applyStyle:function(){{};
},getMarkup:function(){if(this.__qL){return this.__qL;
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
L.push(qx.bom.element.Opacity.compile(1));
L.push(i);
L.push(f);
L.push(m);
L.push(p,O);
L.push(s,O);
L.push(qx.bom.element.Opacity.compile(1));
L.push(i);
var M={position:l,top:g,left:g,opacity:1};
L.push(this._generateBackgroundMarkup(M));
L.push(t);
L.push(e,N);
L.push(qx.bom.element.Opacity.compile(this.getInnerOpacity()));
L.push(i);
L.push(v);
return this.__qL=L.join(c);
},resize:function(z,A,B){if(A<4){A=4;
}
if(B<4){B=4;
}if(qx.bom.client.Feature.CONTENT_BOX){var outerWidth=A-2;
var outerHeight=B-2;
var H=outerWidth;
var G=outerHeight;
var innerWidth=A-4;
var innerHeight=B-4;
}else{var outerWidth=A;
var outerHeight=B;
var H=A-2;
var G=B-2;
var innerWidth=H;
var innerHeight=G;
}var J=a;
var F=z.childNodes[0].style;
F.width=outerWidth+J;
F.height=outerHeight+J;
var E=z.childNodes[1].style;
E.width=outerWidth+J;
E.height=G+J;
var D=z.childNodes[2].style;
D.width=H+J;
D.height=outerHeight+J;
var C=z.childNodes[3].style;
C.width=H+J;
C.height=G+J;
var I=z.childNodes[4].style;
I.width=innerWidth+J;
I.height=innerHeight+J;
},tint:function(w,x){var y=qx.theme.manager.Color.getInstance();

if(x==null){x=this.getBackgroundColor();
}w.childNodes[3].style.backgroundColor=y.resolve(x)||c;
}},destruct:function(){this.__qL=null;
}});
})();
(function(){var j="border-dark-shadow",i="border-light",h="border-dark",g="border-light-shadow",f="solid",e="gray",d="border-focused-light",c="border-focused-dark",b="border-focused-light-shadow",a="border-focused-dark-shadow",y="table-header-border",x="dotted",w="border-separator",v="tooltip-text",u="invalid",t="white",s="decoration/shadow/shadow.png",r="black",q="effect",p="table-focus-indicator",n="border-focused-invalid",o="qx/decoration/Classic",l="border-lead",m="decoration/shadow/shadow-small.png",k="qx.theme.classic.Decoration";
qx.Theme.define(k,{aliases:{decoration:o},decorations:{"main":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:h}},"keyboard-focus":{decorator:qx.ui.decoration.Single,style:{width:1,color:r,style:x}},"inset":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[j,i,i,j],innerColor:[h,g,g,h]}},"outset":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[g,h,h,g],innerColor:[i,j,j,i]}},"groove":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[j,i,i,j],innerColor:[i,j,j,i]}},"ridge":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[i,j,j,i],innerColor:[j,i,i,j]}},"inset-thin":{decorator:qx.ui.decoration.Single,style:{width:1,color:[j,i,i,j]}},"outset-thin":{decorator:qx.ui.decoration.Single,style:{width:1,color:[i,j,j,i]}},"focused-inset":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[a,d,d,a],innerColor:[c,b,b,c]}},"focused-outset":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[b,c,c,b],innerColor:[d,a,a,d]}},"border-invalid":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[j,i,i,j],innerColor:u}},"separator-horizontal":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:w}},"separator-vertical":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:w}},"shadow":{decorator:qx.ui.decoration.Grid,style:{baseImage:s,insets:[4,8,8,4]}},"shadow-window":{decorator:qx.ui.decoration.Grid,style:{baseImage:s,insets:[4,8,8,4]}},"shadow-small":{decorator:qx.ui.decoration.Grid,style:{baseImage:m,insets:[0,3,3,0]}},"checkbox-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:u,innerColor:n,insets:[0]}},"lead-item":{decorator:qx.ui.decoration.Uniform,style:{width:1,style:x,color:l}},"tooltip":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:v}},"tooltip-error":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:v}},"toolbar-separator":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:j}},"toolbar-part-handle":{decorator:qx.ui.decoration.Single,style:{width:1,style:f,colorTop:t,colorLeft:t,colorRight:j,colorBottom:j}},"menu-separator":{decorator:qx.ui.decoration.Single,style:{widthTop:1,widthBottom:1,colorTop:h,colorBottom:i}},"datechooser-date-pane":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:e,style:f}},"datechooser-weekday":{decorator:qx.ui.decoration.Single,style:{widthBottom:1,colorBottom:e,style:f}},"datechooser-week":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:e,style:f}},"datechooser-week-header":{decorator:qx.ui.decoration.Single,style:{widthBottom:1,colorBottom:e,widthRight:1,colorRight:e,style:f}},"tabview-page-button-top":{decorator:qx.ui.decoration.Double,style:{width:1,color:[g,h,h,g],innerWidth:1,innerColor:[i,j,j,i],widthBottom:0,innerWidthBottom:0}},"tabview-page-button-bottom":{decorator:qx.ui.decoration.Double,style:{width:1,color:[g,h,h,g],innerWidth:1,innerColor:[i,j,j,i],widthTop:0,innerWidthTop:0}},"tabview-page-button-left":{decorator:qx.ui.decoration.Double,style:{width:1,color:[g,h,h,g],innerWidth:1,innerColor:[i,j,j,i],widthRight:0,innerWidthRight:0}},"tabview-page-button-right":{decorator:qx.ui.decoration.Double,style:{width:1,color:[g,h,h,g],innerWidth:1,innerColor:[i,j,j,i],widthLeft:0,innerWidthLeft:0}},"table-statusbar":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:j,styleTop:f}},"table-scroller-header":{decorator:qx.ui.decoration.Single,style:{widthBottom:1,colorBottom:y,styleBottom:f}},"table-scroller-focus-indicator":{decorator:qx.ui.decoration.Single,style:{width:2,color:p,style:f}},"table-header-cell":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:y,styleRight:f}},"table-header-cell-hovered":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:y,styleRight:f,widthBottom:2,colorBottom:q,styleBottom:f}}}});
})();
(function(){var i="Liberation Sans",h="Verdana",g="Bitstream Vera Sans",f="Lucida Grande",e="Tahoma",d="monospace",c="qx.theme.classic.Font",b="Courier New",a="DejaVu Sans Mono";
qx.Theme.define(c,{fonts:{"default":{size:11,lineHeight:1.4,family:[f,e,h,g,i]},"bold":{size:11,lineHeight:1.4,family:[f,e,h,g,i],bold:true},"small":{size:10,lineHeight:1.4,family:[f,e,h,g,i]},"monospace":{size:11,lineHeight:1.4,family:[a,b,d]}}});
})();
(function(){var dY="button",dX="widget",dW="background",dV="atom",dU="inset-thin",dT="outset",dS="text-disabled",dR="text-selected",dQ="inset",dP="image",cR="groupbox",cQ="cell",cP="focused-inset",cO="tooltip",cN="menu-button",cM="middle",cL="decoration/arrows/down.gif",cK="spinner",cJ="background-selected",cI="list",eg="popup",eh="button-hovered",ee="checkbox",ef="toolbar-button",ec="button-frame",ed="textfield",ea="label",eb="background-invalid",ei="background-disabled",ej="bold",dy="white",dx="shadow-small",dA="invalid",dz="scrollbar",dC="center",dB="datechooser/button",dE="button-abandoned",dD="background-light",dw="main",dv="date-chooser",bk="date-chooser-title",bl="radiobutton",bm="default",bn="combobox",bo="background-field",bp="outset-thin",bq="menu-slidebar-button",br="scrollbar/button",bs="combobox/button",bt="table-header-cell",ex="decoration/arrows/right.gif",ew="text",ev="decoration/arrows/down-small.gif",eu="icon/16/places/folder.png",eB="tree-folder",eA="slidebar/button-forward",ez="icon/16/mimetypes/text-plain.png",ey="right-top",eD="button-checked",eC=".png",cg="background-focused",ch="datechooser",ce="slidebar/button-backward",cf="selectbox",ck="decoration/arrows/up.gif",cl="treevirtual-folder",ci="checkbox-checked",cj="decoration/form/",cc="decoration/tree/minus.gif",cd="",bL="decoration/tree/plus.gif",bK="-invalid",bN="decoration/arrows/left.gif",bM="icon/16/places/folder-open.png",bH="table-row-background-even",bG="decoration/treevirtual/cross_minus.gif",bJ="radiobutton-hovered",bI="keyboard-focus",bF="decoration/treevirtual/start_plus.gif",bE="decoration/cursors/",cq="icon/16/actions/dialog-ok.png",cr="slidebar",cs="table-scroller-focus-indicator",ct="move-frame",cm="nodrop",cn="tabview-page-button-left",co="decoration/arrows/up-small.gif",cp="move",cu="radiobutton-checked-focused",cv="qx.theme.classic.Appearance",bW="decoration/menu/checkbox.gif",bV="tooltip-error",bU="right",bT="decoration/arrows/rewind.gif",bS="table-scroller-header",bR="table-pane",bQ="focused-outset",bP="checkbox-hovered",cb="icon/16/actions/dialog-cancel.png",ca="menu-slidebar",cw="datechooser-date-pane",cx="background-pane",cy="decoration/treevirtual/cross_plus.gif",cz="qx/icon/Oxygen/16/actions/window-close.png",cA="datechooser-week",cB="icon/16/apps/office-calendar.png",cC="datechooser-weekday",cD="table-header-border",cE="table-header-cell-hover",cF="window-active-caption-text",cY="window-active-caption",cX="icon",cW="checkbox-checked-focused",cV="toolbar-separator",dd="groove",dc="checkbox-pressed",db="tooltip-invalid",da="decoration/window/restore.gif",dg="decoration/menu/checkbox-invert.gif",df="scrollarea",dr="window-inactive-caption-text",ds="best-fit",dp="up.gif",dq="keep-align",dm="tabview-page-button-right",dn="tabview-page-button-top",dk="tabview-page-button-bottom",dl="row-layer",dt="decoration/menu/radiobutton.gif",du="decoration/arrows/",dI="decoration/table/descending.png",dH="tooltip-text",dK="checkbox-checked-hovered",dJ="left.gif",dM="decoration/arrows/up-invert.gif",dL="alias",dO="decoration/arrows/right-invert.gif",dN="radiobutton-checked-disabled",dG="lead-item",dF="checkbox-focused",eq="border-dark",er="decoration/treevirtual/end_plus.gif",es="decoration/treevirtual/start_minus.gif",et="radiobutton-checked-hovered",em="decoration/window/minimize.gif",en="table-header-cell-hovered",eo="down.gif",ep="decoration/treevirtual/end.gif",ek="decoration/treevirtual/end_minus.gif",el="window-inactive-caption",bj="decoration/menu/radiobutton-invert.gif",bi="text-placeholder",bh="slider",bg="decoration/table/select-column-order.png",bf="decoration/arrows/next.gif",be="table-header",bd="decoration/treevirtual/only_minus.gif",bc="datechooser-week-header",bb="decoration/window/maximize.gif",ba="decoration/treevirtual/only_plus.gif",bw="checkbox-checked-pressed",bx="decoration/arrows/down-invert.gif",bu="menu-separator",bv="decoration/splitpane/knob-vertical.png",bA=".gif",bB="decoration/arrows/forward.gif",by="radiobutton-checked-pressed",bz="table-statusbar",bC="radiobutton-pressed",bD="copy",dh="table-row-background-selected",de="radiobutton-focused",dj="decoration/splitpane/knob-horizontal.png",di="right.gif",cT="radiobutton-checked",cS="decoration/treevirtual/cross.gif",bO="decoration/table/ascending.png",cU="decoration/treevirtual/line.gif",bY="date-chooser-selected",bX="toolbar-part-handle",cG="decoration/window/close.gif",cH="icon/16/actions/view-refresh.png";
qx.Theme.define(cv,{appearances:{"widget":{},"label":{style:function(eH){return {textColor:eH.disabled?dS:undefined};
}},"image":{style:function(fq){return {opacity:!fq.replacement&&fq.disabled?0.3:undefined};
}},"atom":{},"atom/label":ea,"atom/icon":dP,"root":{style:function(fj){return {backgroundColor:dW,textColor:ew,font:bm};
}},"popup":{style:function(gG){return {decorator:dw,backgroundColor:cx,shadow:dx};
}},"tooltip":{include:eg,style:function(gM){return {backgroundColor:cO,textColor:dH,decorator:cO,shadow:dx,padding:[1,3,2,3],offset:[15,5,5,5]};
}},"tooltip/atom":dV,"tooltip-error":{include:cO,style:function(Q){return {textColor:dR,showTimeout:100,hideTimeout:10000,decorator:bV,font:ej,backgroundColor:db};
}},"tooltip-error/atom":dV,"iframe":{style:function(gl){return {backgroundColor:dy,decorator:dQ};
}},"move-frame":{style:function(gi){return {decorator:dw};
}},"resize-frame":ct,"dragdrop-cursor":{style:function(e){var f=cm;

if(e.copy){f=bD;
}else if(e.move){f=cp;
}else if(e.alias){f=dL;
}return {source:bE+f+bA,position:ey,offset:[2,16,2,6]};
}},"button-frame":{alias:dV,style:function(gz){if(gz.pressed||gz.abandoned||gz.checked){var gB=!gz.inner&&gz.focused?cP:dQ;
var gA=[4,3,2,5];
}else{var gB=!gz.inner&&gz.focused?bQ:dT;
var gA=[3,4];
}return {backgroundColor:gz.abandoned?dE:gz.hovered?eh:gz.checked?eD:dY,decorator:gB,padding:gA};
}},"button":{alias:ec,include:ec,style:function(ff){return {center:true};
}},"hover-button":{alias:dV,include:dV,style:function(eT){return {backgroundColor:eT.hovered?cJ:undefined,textColor:eT.hovered?dR:undefined};
}},"splitbutton":{},"splitbutton/button":dY,"splitbutton/arrow":{alias:dY,include:dY,style:function(gT){return {icon:cL};
}},"scrollarea/corner":{style:function(){return {backgroundColor:dW};
}},"scrollarea":dX,"scrollarea/pane":dX,"scrollarea/scrollbar-x":dz,"scrollarea/scrollbar-y":dz,"list":{alias:df,style:function(fa){var fe;
var fc=!!fa.focused;
var fd=!!fa.invalid;
var fb=!!fa.disabled;

if(fd&&!fb){fe=eb;
}else if(fc&&!fd&&!fb){fe=cg;
}else if(fb){fe=ei;
}else{fe=dy;
}return {decorator:fa.focused?cP:dQ,backgroundColor:fe};
}},"listitem":{alias:dV,style:function(gR){return {gap:4,padding:gR.lead?[2,4]:[3,5],backgroundColor:gR.selected?cJ:undefined,textColor:gR.selected?dR:undefined,decorator:gR.lead?dG:undefined};
}},"textfield":{style:function(gn){var gs;
var gq=!!gn.focused;
var gr=!!gn.invalid;
var go=!!gn.disabled;

if(gr&&!go){gs=eb;
}else if(gq&&!gr&&!go){gs=cg;
}else if(go){gs=ei;
}else{gs=bo;
}var gp;

if(gn.disabled){gp=dS;
}else if(gn.showingPlaceholder){gp=bi;
}else{gp=undefined;
}return {decorator:gn.focused?cP:dQ,padding:[2,3],textColor:gp,backgroundColor:gs};
}},"textarea":ed,"checkbox":{alias:dV,style:function(gJ){var gL;
if(gJ.checked){if(gJ.disabled){gL=ci;
}else if(gJ.focused){gL=cW;
}else if(gJ.pressed){gL=bw;
}else if(gJ.hovered){gL=dK;
}else{gL=ci;
}}else if(!gJ.disabled){if(gJ.focused){gL=dF;
}else if(gJ.pressed){gL=dc;
}else if(gJ.hovered){gL=bP;
}}gL=gL||ee;
var gK=gJ.invalid&&!gJ.disabled?bK:cd;
return {icon:cj+gL+gK+eC,gap:6};
}},"radiobutton":{alias:ee,include:ee,style:function(C){var E;

if(C.checked&&C.focused){E=cu;
}else if(C.checked&&C.disabled){E=dN;
}else if(C.checked&&C.pressed){E=by;
}else if(C.checked&&C.hovered){E=et;
}else if(C.checked){E=cT;
}else if(C.focused){E=de;
}else if(C.pressed){E=bC;
}else if(C.hovered){E=bJ;
}else{E=bl;
}var D=C.invalid&&!C.disabled?bK:cd;
return {icon:cj+E+D+eC,shadow:undefined};
}},"spinner":{style:function(gk){return {decorator:gk.focused?cP:dQ,textColor:gk.disabled?dS:undefined};
}},"spinner/textfield":{include:ed,style:function(gH){return {decorator:undefined,padding:[2,3]};
}},"spinner/upbutton":{alias:dY,include:dY,style:function(fQ){return {icon:co,padding:fQ.pressed?[2,2,0,4]:[1,3,1,3],backgroundColor:fQ.hovered?eh:dY};
}},"spinner/downbutton":{alias:dY,include:dY,style:function(K){return {icon:ev,padding:K.pressed?[2,2,0,4]:[1,3,1,3],backgroundColor:K.hovered?eh:dY};
}},"datefield":bn,"datefield/button":{alias:bs,include:bs,style:function(gX){return {icon:cB,padding:[0,3],backgroundColor:undefined,decorator:undefined};
}},"datefield/list":{alias:ch,include:ch,style:function(fJ){return {decorator:fJ.focused?cP:dQ};
}},"groupbox":{style:function(fG){return {backgroundColor:dW};
}},"groupbox/legend":{alias:dV,style:function(eV){return {backgroundColor:dW,textColor:eV.invalid?dA:undefined,paddingRight:4,paddingLeft:4,marginRight:10,marginLeft:10};
}},"groupbox/frame":{style:function(gS){return {padding:[12,9],decorator:dd};
}},"check-groupbox":cR,"check-groupbox/legend":{alias:ee,include:ee,style:function(j){return {backgroundColor:dW,textColor:j.invalid?dA:undefined,paddingRight:3,paddingLeft:3,marginRight:10,marginLeft:10};
}},"radio-groupbox":cR,"radio-groupbox/legend":{alias:bl,include:bl,style:function(fx){return {backgroundColor:dW,textColor:fx.invalid?dA:undefined,paddingRight:3,paddingLeft:3,marginRight:10,marginLeft:10};
}},"toolbar":{style:function(S){return {backgroundColor:dW};
}},"toolbar/part":{},"toolbar/part/container":{},"toolbar/part/handle":{style:function(R){return {decorator:bX,backgroundColor:dW,padding:[0,1],margin:[3,2],allowGrowY:true};
}},"toolbar-separator":{style:function(eU){return {margin:[3,2],decorator:cV};
}},"toolbar-button":{alias:dV,style:function(fg){if(fg.pressed||fg.checked||fg.abandoned){var fi=dU;
var fh=[3,2,1,4];
}else if(fg.hovered){var fi=bp;
var fh=[2,3];
}else{var fi=undefined;
var fh=[3,4];
}return {cursor:bm,decorator:fi,padding:fh,backgroundColor:fg.abandoned?dE:fg.checked?dD:dY};
}},"toolbar-menubutton":{alias:ef,include:ef,style:function(u){return {showArrow:true};
}},"toolbar-menubutton/arrow":{alias:dP,include:dP,style:function(g){return {source:ev};
}},"toolbar-splitbutton":{},"toolbar-splitbutton/button":ef,"toolbar-splitbutton/arrow":{alias:ef,include:ef,style:function(L){return {icon:cL};
}},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:dY,include:dY,style:function(y){return {icon:y.vertical?cL:bf};
}},"slidebar/button-backward":{alias:dY,include:dY,style:function(gN){return {icon:gN.vertical?ck:bN};
}},"tabview":{},"tabview/bar":{alias:cr,style:function(gu){var gv=0,gy=0,gw=0,gx=0;

if(gu.barTop){gw=-2;
}else if(gu.barBottom){gv=-2;
}else if(gu.barRight){gx=-2;
}else{gy=-2;
}return {marginBottom:gw,marginTop:gv,marginLeft:gx,marginRight:gy};
}},"tabview/bar/button-forward":{include:eA,alias:eA,style:function(eL){if(eL.barTop||eL.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/button-backward":{include:ce,alias:ce,style:function(I){if(I.barTop||I.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/pane":{style:function(n){return {backgroundColor:dW,decorator:dT,padding:10};
}},"tabview-page":dX,"tabview-page/button":{style:function(fR){var gb;
var fY=0,fW=0,fT=0,fV=0;

if(fR.barTop||fR.barBottom){var fU=2,fS=2,fX=6,ga=6;
}else{var fU=6,fS=6,fX=6,ga=6;
}
if(fR.barTop){gb=dn;
}else if(fR.barRight){gb=dm;
}else if(fR.barBottom){gb=dk;
}else{gb=cn;
}
if(fR.checked){if(fR.barTop||fR.barBottom){fX+=2;
ga+=2;
}else{fU+=2;
fS+=2;
}}else{if(fR.barTop||fR.barBottom){fT+=2;
fY+=2;
}else if(fR.barLeft||fR.barRight){fW+=2;
fV+=2;
}}
if(fR.checked){if(!fR.firstTab){if(fR.barTop||fR.barBottom){fV=-4;
}else{fY=-4;
}}
if(!fR.lastTab){if(fR.barTop||fR.barBottom){fW=-4;
}else{fT=-4;
}}}return {zIndex:fR.checked?10:5,decorator:gb,backgroundColor:dW,padding:[fU,ga,fS,fX],margin:[fY,fW,fT,fV]};
}},"tabview-page/button/label":{alias:ea,style:function(gd){return {padding:[0,1,0,1],margin:gd.focused?0:1,decorator:gd.focused?bI:undefined};
}},"tabview-page/button/icon":dP,"tabview-page/button/close-button":{alias:dV,style:function(eJ){return {icon:cz};
}},"scrollbar":{},"scrollbar/slider":{alias:bh,style:function(eG){return {backgroundColor:dD};
}},"scrollbar/slider/knob":{include:ec,style:function(gt){return {height:14,width:14,minHeight:gt.horizontal?undefined:9,minWidth:gt.horizontal?9:undefined};
}},"scrollbar/button":{alias:dY,include:dY,style:function(W){var X;

if(W.up||W.down){if(W.pressed||W.abandoned||W.checked){X=[5,2,3,4];
}else{X=[4,3];
}}else{if(W.pressed||W.abandoned||W.checked){X=[4,3,2,5];
}else{X=[3,4];
}}var Y=du;

if(W.left){Y+=dJ;
}else if(W.right){Y+=di;
}else if(W.up){Y+=dp;
}else{Y+=eo;
}return {padding:X,icon:Y};
}},"scrollbar/button-begin":br,"scrollbar/button-end":br,"slider":{style:function(gU){var gV;

if(gU.disabled){gV=ei;
}else if(gU.invalid){gV=eb;
}else if(gU.focused){gV=dD;
}else{gV=bo;
}return {backgroundColor:gV,decorator:gU.focused?cP:dQ};
}},"slider/knob":{include:ec,style:function(p){return {width:14,height:14,decorator:dT};
}},"tree-folder/open":{style:function(fp){return {source:fp.opened?cc:bL};
}},"tree-folder":{style:function(fs){return {padding:[2,3,2,0],icon:fs.opened?bM:eu};
}},"tree-folder/icon":{style:function(fn){return {padding:[0,4,0,0]};
}},"tree-folder/label":{style:function(T){return {padding:[1,2],backgroundColor:T.selected?cJ:undefined,textColor:T.selected?dR:undefined};
}},"tree-file":{include:eB,alias:eB,style:function(fr){return {icon:ez};
}},"tree":{include:cI,alias:cI,style:function(t){return {contentPadding:[4,4,4,4]};
}},"treevirtual":{style:function(A){return {decorator:dw};
}},"treevirtual-folder":{style:function(gW){return {icon:(gW.opened?bM:eu)};
}},"treevirtual-file":{include:cl,alias:cl,style:function(r){return {icon:ez};
}},"treevirtual-line":{style:function(fO){return {icon:cU};
}},"treevirtual-contract":{style:function(gD){return {icon:cc};
}},"treevirtual-expand":{style:function(eR){return {icon:bL};
}},"treevirtual-only-contract":{style:function(eS){return {icon:bd};
}},"treevirtual-only-expand":{style:function(gI){return {icon:ba};
}},"treevirtual-start-contract":{style:function(hc){return {icon:es};
}},"treevirtual-start-expand":{style:function(gf){return {icon:bF};
}},"treevirtual-end-contract":{style:function(fC){return {icon:ek};
}},"treevirtual-end-expand":{style:function(z){return {icon:er};
}},"treevirtual-cross-contract":{style:function(eY){return {icon:bG};
}},"treevirtual-cross-expand":{style:function(i){return {icon:cy};
}},"treevirtual-end":{style:function(gF){return {icon:ep};
}},"treevirtual-cross":{style:function(gE){return {icon:cS};
}},"window":{style:function(fk){return {contentPadding:[10,10,10,10],backgroundColor:dW,decorator:fk.maximized?undefined:dT,shadow:fk.maximized?undefined:dx};
}},"window/pane":{},"window/captionbar":{style:function(eK){return {padding:1,backgroundColor:eK.active?cY:el,textColor:eK.active?cF:dr};
}},"window/icon":{style:function(gQ){return {marginRight:4};
}},"window/title":{style:function(gj){return {cursor:bm,font:ej,marginRight:20,alignY:cM};
}},"window/minimize-button":{include:dY,alias:dY,style:function(fP){return {icon:em,padding:fP.pressed||fP.abandoned?[2,1,0,3]:[1,2]};
}},"window/restore-button":{include:dY,alias:dY,style:function(B){return {icon:da,padding:B.pressed||B.abandoned?[2,1,0,3]:[1,2]};
}},"window/maximize-button":{include:dY,alias:dY,style:function(P){return {icon:bb,padding:P.pressed||P.abandoned?[2,1,0,3]:[1,2]};
}},"window/close-button":{include:dY,alias:dY,style:function(eO){return {marginLeft:2,icon:cG,padding:eO.pressed||eO.abandoned?[2,1,0,3]:[1,2]};
}},"window/statusbar":{style:function(J){return {decorator:dU,padding:[2,6]};
}},"window/statusbar-text":ea,"resizer":{style:function(fm){return {decorator:dT};
}},"splitpane":{},"splitpane/splitter":{style:function(gh){return {backgroundColor:dW};
}},"splitpane/splitter/knob":{style:function(q){return {source:q.horizontal?dj:bv,padding:2};
}},"splitpane/slider":{style:function(k){return {backgroundColor:eq,opacity:0.3};
}},"selectbox":{include:ec,style:function(U){var V=dY;

if(U.invalid&&!U.disabled){V=eb;
}else if(U.abandoned){V=dE;
}else if(!U.abandoned&&U.hovered){V=eh;
}else if(!U.abandoned&&!U.hovered&&U.checked){V=eD;
}return {backgroundColor:V};
}},"selectbox/atom":dV,"selectbox/popup":eg,"selectbox/list":cI,"selectbox/arrow":{include:dP,style:function(fB){return {source:cL,paddingRight:4,paddingLeft:5};
}},"datechooser":{style:function(eW){return {decorator:dT};
}},"datechooser/navigation-bar":{style:function(m){return {backgroundColor:dv,textColor:m.disabled?dS:m.invalid?dA:undefined,padding:[2,10]};
}},"datechooser/last-year-button-tooltip":cO,"datechooser/last-month-button-tooltip":cO,"datechooser/next-year-button-tooltip":cO,"datechooser/next-month-button-tooltip":cO,"datechooser/last-year-button":dB,"datechooser/last-month-button":dB,"datechooser/next-year-button":dB,"datechooser/next-month-button":dB,"datechooser/button/icon":{},"datechooser/button":{style:function(fv){var fw={width:17,show:cX};

if(fv.lastYear){fw.icon=bT;
}else if(fv.lastMonth){fw.icon=bN;
}else if(fv.nextYear){fw.icon=bB;
}else if(fv.nextMonth){fw.icon=ex;
}
if(fv.pressed||fv.checked||fv.abandoned){fw.decorator=dU;
}else if(fv.hovered){fw.decorator=bp;
}else{fw.decorator=undefined;
}
if(fv.pressed||fv.checked||fv.abandoned){fw.padding=[2,0,0,2];
}else if(fv.hovered){fw.padding=1;
}else{fw.padding=2;
}return fw;
}},"datechooser/month-year-label":{style:function(o){return {font:ej,textAlign:dC};
}},"datechooser/date-pane":{style:function(l){return {decorator:cw,backgroundColor:dv};
}},"datechooser/weekday":{style:function(fo){return {decorator:cC,font:ej,textAlign:dC,textColor:fo.disabled?dS:fo.weekend?bk:dv,backgroundColor:fo.weekend?dv:bk};
}},"datechooser/day":{style:function(fl){return {textAlign:dC,decorator:fl.today?dw:undefined,textColor:fl.disabled?dS:fl.selected?dR:fl.otherMonth?dS:undefined,backgroundColor:fl.disabled?undefined:fl.selected?bY:undefined,padding:[2,4]};
}},"datechooser/week":{style:function(c){return {textAlign:dC,textColor:bk,padding:[2,4],decorator:c.header?bc:cA};
}},"combobox":{style:function(w){var x;

if(w.disabled){x=ei;
}else if(w.invalid){x=eb;
}else if(w.focused){x=dD;
}else{x=bo;
}return {decorator:w.focused?cP:dQ,textColor:w.disabled?dS:undefined,backgroundColor:x};
}},"combobox/button":{alias:dY,include:dY,style:function(b){return {icon:cL,backgroundColor:b.hovered?eh:dY};
}},"combobox/popup":eg,"combobox/list":cI,"combobox/textfield":{include:ed,style:function(ge){return {decorator:undefined,padding:[2,3],backgroundColor:undefined};
}},"menu":{style:function(M){var N={backgroundColor:dW,shadow:dx,decorator:dT,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4,padding:1,placementModeY:M.submenu||M.contextmenu?ds:dq};

if(M.submenu){N.position=ey;
N.offset=[-2,-3];
}
if(M.contextmenu){N.offset=4;
}return N;
}},"menu/slidebar":ca,"menu-slidebar":dX,"menu-slidebar-button":{style:function(d){return {backgroundColor:d.hovered?cJ:undefined,padding:6,center:true};
}},"menu-slidebar/button-backward":{include:bq,style:function(v){return {icon:v.hovered?dM:ck};
}},"menu-slidebar/button-forward":{include:bq,style:function(s){return {icon:s.hovered?bx:cL};
}},"menu-separator":{style:function(O){return {height:0,decorator:bu,marginTop:4,marginBottom:4,marginLeft:2,marginRight:2};
}},"menu-button":{alias:dV,style:function(eF){return {backgroundColor:eF.selected?cJ:undefined,textColor:eF.selected?dR:undefined,padding:[2,6]};
}},"menu-button/icon":{include:dP,style:function(gm){return {alignY:cM};
}},"menu-button/label":{include:ea,style:function(fH){return {alignY:cM,padding:1};
}},"menu-button/shortcut":{include:ea,style:function(fD){return {alignY:cM,marginLeft:14,padding:1};
}},"menu-button/arrow":{include:dP,style:function(eN){return {source:eN.selected?dO:ex,alignY:cM};
}},"menu-checkbox":{alias:cN,include:cN,style:function(eE){return {icon:!eE.checked?undefined:eE.selected?dg:bW};
}},"menu-radiobutton":{alias:cN,include:cN,style:function(hb){return {icon:!hb.checked?undefined:hb.selected?bj:dt};
}},"menubar":{style:function(eM){return {backgroundColor:dW,decorator:dT};
}},"menubar-button":{alias:dV,style:function(fA){return {padding:[2,6],backgroundColor:fA.pressed||fA.hovered?cJ:undefined,textColor:fA.pressed||fA.hovered?dR:undefined};
}},"colorselector":dX,"colorselector/control-bar":dX,"colorselector/visual-pane":cR,"colorselector/control-pane":dX,"colorselector/preset-grid":dX,"colorselector/colorbucket":{style:function(ft){return {decorator:dU,width:16,height:16};
}},"colorselector/preset-field-set":cR,"colorselector/input-field-set":cR,"colorselector/preview-field-set":cR,"colorselector/hex-field-composite":dX,"colorselector/hex-field":ed,"colorselector/rgb-spinner-composite":dX,"colorselector/rgb-spinner-red":cK,"colorselector/rgb-spinner-green":cK,"colorselector/rgb-spinner-blue":cK,"colorselector/hsb-spinner-composite":dX,"colorselector/hsb-spinner-hue":cK,"colorselector/hsb-spinner-saturation":cK,"colorselector/hsb-spinner-brightness":cK,"colorselector/preview-content-old":{style:function(gg){return {decorator:dU,width:50,height:10};
}},"colorselector/preview-content-new":{style:function(fI){return {decorator:dU,backgroundColor:dy,width:50,height:10};
}},"colorselector/hue-saturation-field":{style:function(fK){return {decorator:dU,margin:5};
}},"colorselector/brightness-field":{style:function(fL){return {decorator:dU,margin:[5,7]};
}},"colorselector/hue-saturation-pane":dX,"colorselector/hue-saturation-handle":dX,"colorselector/brightness-pane":dX,"colorselector/brightness-handle":dX,"table":dX,"table/statusbar":{style:function(a){return {decorator:bz,paddingLeft:2,paddingRight:2};
}},"table/column-button":{alias:dY,style:function(F){var H,G;

if(F.pressed||F.checked||F.abandoned){H=dU;
G=[3,2,1,4];
}else if(F.hovered){H=bp;
G=[2,3];
}else{H=undefined;
G=[3,4];
}return {decorator:H,padding:G,backgroundColor:F.abandoned?dE:dY,icon:bg};
}},"table-column-reset-button":{extend:cN,alias:cN,style:function(){return {icon:cH};
}},"table-scroller/scrollbar-x":dz,"table-scroller/scrollbar-y":dz,"table-scroller":dX,"table-scroller/header":{style:function(fN){return {decorator:bS,backgroundColor:be};
}},"table-scroller/pane":{style:function(h){return {backgroundColor:bR};
}},"table-scroller/focus-indicator":{style:function(fu){return {decorator:cs};
}},"table-scroller/resize-line":{style:function(eX){return {backgroundColor:cD,width:3};
}},"table-header-cell":{alias:dV,style:function(fM){return {minWidth:13,paddingLeft:2,paddingRight:2,paddingBottom:fM.hovered?0:2,decorator:fM.hovered?en:bt,backgroundColor:fM.hovered?cE:bt,sortIcon:fM.sorted?(fM.sortedAscending?bO:dI):undefined};
}},"table-header-cell/sort-icon":{style:function(gc){return {alignY:cM};
}},"table-editor-textfield":{include:ed,style:function(gP){return {decorator:undefined,padding:[2,2]};
}},"table-editor-selectbox":{include:cf,alias:cf,style:function(ha){return {padding:[0,2]};
}},"table-editor-combobox":{include:bn,alias:bn,style:function(fE){return {decorator:undefined};
}},"colorpopup":{alias:eg,include:eg,style:function(eI){return {decorator:dT,padding:5,backgroundColor:dW};
}},"colorpopup/field":{style:function(fz){return {decorator:dU,margin:2,width:14,height:14,backgroundColor:dW};
}},"colorpopup/selector-button":dY,"colorpopup/auto-button":dY,"colorpopup/preview-pane":cR,"colorpopup/current-preview":{style:function(eQ){return {height:20,padding:4,marginLeft:4,decorator:dU,allowGrowX:true};
}},"colorpopup/selected-preview":{style:function(eP){return {height:20,padding:4,marginRight:4,decorator:dU,allowGrowX:true};
}},"colorpopup/colorselector-okbutton":{alias:dY,include:dY,style:function(gO){return {icon:cq};
}},"colorpopup/colorselector-cancelbutton":{alias:dY,include:dY,style:function(gY){return {icon:cb};
}},"virtual-list":cI,"virtual-list/row-layer":dl,"row-layer":dX,"column-layer":dX,"cell":{style:function(gC){return {backgroundColor:gC.selected?dh:bH,textColor:gC.selected?dR:ew,padding:[3,6]};
}},"cell-string":cQ,"cell-number":{include:cQ,style:function(fy){return {textAlign:bU};
}},"cell-image":cQ,"cell-boolean":cQ,"cell-atom":cQ,"cell-date":cQ,"cell-html":cQ,"htmlarea":{"include":dX,style:function(fF){return {backgroundColor:dy};
}}}});
})();
(function(){var c="Oxygen",b="qx.theme.icon.Oxygen",a="qx/icon/Oxygen";
qx.Theme.define(b,{title:c,aliases:{"icon":a},icons:{}});
})();
(function(){var b="Classic Windows",a="qx.theme.Classic";
qx.Theme.define(a,{title:b,meta:{color:qx.theme.classic.Color,decoration:qx.theme.classic.Decoration,font:qx.theme.classic.Font,appearance:qx.theme.classic.Appearance,icon:qx.theme.icon.Oxygen}});
})();
(function(){var m="px",l="qx.client",k="div",j="img",i="",h="no-repeat",g="scale-x",f="mshtml",d="scale",c="scale-y",I="qx/icon",H="repeat",G=".png",F="crop",E="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",D='<div style="',C="repeat-y",B='<img src="',A="qx.bom.element.Decoration",z="', sizingMethod='",t="png",u="')",r='"></div>',s='"/>',p='" style="',q="none",n="webkit",o=" ",v="repeat-x",w="DXImageTransform.Microsoft.AlphaImageLoader",y="qx/static/blank.gif",x="absolute";
qx.Class.define(A,{statics:{DEBUG:false,__gN:{},__gO:qx.core.Variant.isSet(l,f),__gP:qx.core.Variant.select(l,{"mshtml":{"scale-x":true,"scale-y":true,"scale":true,"no-repeat":true},"default":null}),__gQ:{"scale-x":j,"scale-y":j,"scale":j,"repeat":k,"no-repeat":k,"repeat-x":k,"repeat-y":k},update:function(bv,bw,bx,by){var bA=this.getTagName(bx,bw);

if(bA!=bv.tagName.toLowerCase()){throw new Error("Image modification not possible because elements could not be replaced at runtime anymore!");
}var bB=this.getAttributes(bw,bx,by);

if(bA===j){bv.src=bB.src||qx.util.ResourceManager.getInstance().toUri(y);
}if(bv.style.backgroundPosition!=i&&bB.style.backgroundPosition===undefined){bB.style.backgroundPosition=null;
}if(bv.style.clip!=i&&bB.style.clip===undefined){bB.style.clip=null;
}var bz=qx.bom.element.Style;
bz.setStyles(bv,bB.style);
if(this.__gO){try{bv.filters[w].apply();
}catch(e){}}},create:function(R,S,T){var U=this.getTagName(S,R);
var W=this.getAttributes(R,S,T);
var V=qx.bom.element.Style.compile(W.style);

if(U===j){return B+W.src+p+V+s;
}else{return D+V+r;
}},getTagName:function(a,b){if(qx.core.Variant.isSet(l,f)){if(b&&this.__gO&&this.__gP[a]&&qx.lang.String.endsWith(b,G)){return k;
}}return this.__gQ[a];
},getAttributes:function(bC,bD,bE){if(!bE){bE={};
}
if(!bE.position){bE.position=x;
}
if(qx.core.Variant.isSet(l,f)){bE.fontSize=0;
bE.lineHeight=0;
}else if(qx.core.Variant.isSet(l,n)){bE.WebkitUserDrag=q;
}var bG=qx.util.ResourceManager.getInstance().getImageFormat(bC)||qx.io.ImageLoader.getFormat(bC);
{};
var bF;
if(this.__gO&&this.__gP[bD]&&bG===t){bF=this.__gT(bE,bD,bC);
}else{if(bD===d){bF=this.__gU(bE,bD,bC);
}else if(bD===g||bD===c){bF=this.__gV(bE,bD,bC);
}else{bF=this.__gY(bE,bD,bC);
}}return bF;
},__gR:function(bs,bt,bu){if(bs.width==null&&bt!=null){bs.width=bt+m;
}
if(bs.height==null&&bu!=null){bs.height=bu+m;
}return bs;
},__gS:function(bH){var bI=qx.util.ResourceManager.getInstance().getImageWidth(bH)||qx.io.ImageLoader.getWidth(bH);
var bJ=qx.util.ResourceManager.getInstance().getImageHeight(bH)||qx.io.ImageLoader.getHeight(bH);
return {width:bI,height:bJ};
},__gT:function(bK,bL,bM){var bP=this.__gS(bM);
bK=this.__gR(bK,bP.width,bP.height);
var bO=bL==h?F:d;
var bN=E+qx.util.ResourceManager.getInstance().toUri(bM)+z+bO+u;
bK.filter=bN;
bK.backgroundImage=bK.backgroundRepeat=i;
return {style:bK};
},__gU:function(bV,bW,bX){var bY=qx.util.ResourceManager.getInstance().toUri(bX);
var ca=this.__gS(bX);
bV=this.__gR(bV,ca.width,ca.height);
return {src:bY,style:bV};
},__gV:function(bc,bd,be){var bj=qx.util.ResourceManager.getInstance();
var bi=bj.isClippedImage(be);
var bk=this.__gS(be);

if(bi){var bh=bj.getData(be);
var bf=bj.toUri(bh[4]);

if(bd===g){bc=this.__gW(bc,bh,bk.height);
}else{bc=this.__gX(bc,bh,bk.width);
}return {src:bf,style:bc};
}else{{};

if(bd==g){bc.height=bk.height==null?null:bk.height+m;
}else if(bd==c){bc.width=bk.width==null?null:bk.width+m;
}var bf=bj.toUri(be);
return {src:bf,style:bc};
}},__gW:function(bR,bS,bT){var bU=qx.util.ResourceManager.getInstance().getImageHeight(bS[4]);
bR.clip={top:-bS[6],height:bT};
bR.height=bU+m;
if(bR.top!=null){bR.top=(parseInt(bR.top,10)+bS[6])+m;
}else if(bR.bottom!=null){bR.bottom=(parseInt(bR.bottom,10)+bT-bU-bS[6])+m;
}return bR;
},__gX:function(X,Y,ba){var bb=qx.util.ResourceManager.getInstance().getImageWidth(Y[4]);
X.clip={left:-Y[5],width:ba};
X.width=bb+m;
if(X.left!=null){X.left=(parseInt(X.left,10)+Y[5])+m;
}else if(X.right!=null){X.right=(parseInt(X.right,10)+ba-bb-Y[5])+m;
}return X;
},__gY:function(J,K,L){var Q=qx.util.ResourceManager.getInstance().isClippedImage(L);
var P=this.__gS(L);
if(Q&&K!==H){var O=qx.util.ResourceManager.getInstance().getData(L);
var N=qx.bom.element.Background.getStyles(O[4],K,O[5],O[6]);

for(var M in N){J[M]=N[M];
}
if(P.width!=null&&J.width==null&&(K==C||K===h)){J.width=P.width+m;
}
if(P.height!=null&&J.height==null&&(K==v||K===h)){J.height=P.height+m;
}return {style:J};
}else{{};
J=this.__gR(J,P.width,P.height);
J=this.__ha(J,L,K);
return {style:J};
}},__ha:function(bl,bm,bn){var top=null;
var br=null;

if(bl.backgroundPosition){var bo=bl.backgroundPosition.split(o);
br=parseInt(bo[0]);

if(isNaN(br)){br=bo[0];
}top=parseInt(bo[1]);

if(isNaN(top)){top=bo[1];
}}var bq=qx.bom.element.Background.getStyles(bm,bn,br,top);

for(var bp in bq){bl[bp]=bq[bp];
}if(bl.filter){bl.filter=i;
}return bl;
},__hb:function(bQ){if(this.DEBUG&&qx.util.ResourceManager.getInstance().has(bQ)&&bQ.indexOf(I)==-1){if(!this.__gN[bQ]){qx.log.Logger.debug("Potential clipped image candidate: "+bQ);
this.__gN[bQ]=true;
}}},isAlphaImageLoaderEnabled:qx.core.Variant.select(l,{"mshtml":function(){return qx.bom.element.Decoration.__gO;
},"default":function(){return false;
}})}});
})();
(function(){var j="qx.client",h="load",g="qx.io.ImageLoader";
qx.Bootstrap.define(g,{statics:{__kI:{},__kJ:{width:null,height:null},__kK:/\.(png|gif|jpg|jpeg|bmp)\b/i,isLoaded:function(r){var s=this.__kI[r];
return !!(s&&s.loaded);
},isFailed:function(u){var v=this.__kI[u];
return !!(v&&v.failed);
},isLoading:function(F){var G=this.__kI[F];
return !!(G&&G.loading);
},getFormat:function(o){var p=this.__kI[o];
return p?p.format:null;
},getSize:function(D){var E=this.__kI[D];
return E?
{width:E.width,height:E.height}:this.__kJ;
},getWidth:function(w){var x=this.__kI[w];
return x?x.width:null;
},getHeight:function(k){var m=this.__kI[k];
return m?m.height:null;
},load:function(a,b,c){var d=this.__kI[a];

if(!d){d=this.__kI[a]={};
}if(b&&!c){c=window;
}if(d.loaded||d.loading||d.failed){if(b){if(d.loading){d.callbacks.push(b,c);
}else{b.call(c,a,d);
}}}else{d.loading=true;
d.callbacks=[];

if(b){d.callbacks.push(b,c);
}var f=new Image();
var e=qx.lang.Function.listener(this.__kL,this,f,a);
f.onload=e;
f.onerror=e;
f.src=a;
}},__kL:qx.event.GlobalError.observeMethod(function(event,y,z){var A=this.__kI[z];
if(event.type===h){A.loaded=true;
A.width=this.__kM(y);
A.height=this.__kN(y);
var B=this.__kK.exec(z);

if(B!=null){A.format=B[1];
}}else{A.failed=true;
}y.onload=y.onerror=null;
var C=A.callbacks;
delete A.loading;
delete A.callbacks;
for(var i=0,l=C.length;i<l;i+=2){C[i].call(C[i+1],z,A);
}}),__kM:qx.core.Variant.select(j,{"gecko":function(H){return H.naturalWidth;
},"default":function(n){return n.width;
}}),__kN:qx.core.Variant.select(j,{"gecko":function(q){return q.naturalHeight;
},"default":function(t){return t.height;
}})}});
})();
(function(){var m="number",l="0",k="px",j=";",i="background-image:url(",h=");",g="",f=")",e="background-repeat:",d=" ",a="qx.bom.element.Background",c="url(",b="background-position:";
qx.Class.define(a,{statics:{__cT:[i,null,h,b,null,j,e,null,j],__cU:{backgroundImage:null,backgroundPosition:null,backgroundRepeat:null},__cV:function(F,top){var G=qx.bom.client.Engine;

if(G.GECKO&&G.VERSION<1.9&&F==top&&typeof F==m){top+=0.01;
}
if(F){var H=(typeof F==m)?F+k:F;
}else{H=l;
}
if(top){var I=(typeof top==m)?top+k:top;
}else{I=l;
}return H+d+I;
},compile:function(z,A,B,top){var C=this.__cV(B,top);
var D=qx.util.ResourceManager.getInstance().toUri(z);
var E=this.__cT;
E[1]=D;
E[4]=C;
E[7]=A;
return E.join(g);
},getStyles:function(t,u,v,top){if(!t){return this.__cU;
}var w=this.__cV(v,top);
var x=qx.util.ResourceManager.getInstance().toUri(t);
var y={backgroundPosition:w,backgroundImage:c+x+f};

if(u!=null){y.backgroundRepeat=u;
}return y;
},set:function(n,o,p,q,top){var r=this.getStyles(o,p,q,top);

for(var s in r){n.style[s]=r[s];
}}}});
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
(function(){var s=",",o="rgb(",n=")",m="qx.theme.manager.Color",l="qx.util.ColorUtil";
qx.Class.define(l,{statics:{REGEXP:{hex3:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,rgb:/^rgb\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/,rgba:/^rgba\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/},SYSTEM:{activeborder:true,activecaption:true,appworkspace:true,background:true,buttonface:true,buttonhighlight:true,buttonshadow:true,buttontext:true,captiontext:true,graytext:true,highlight:true,highlighttext:true,inactiveborder:true,inactivecaption:true,inactivecaptiontext:true,infobackground:true,infotext:true,menu:true,menutext:true,scrollbar:true,threeddarkshadow:true,threedface:true,threedhighlight:true,threedlightshadow:true,threedshadow:true,window:true,windowframe:true,windowtext:true},NAMED:{black:[0,0,0],silver:[192,192,192],gray:[128,128,128],white:[255,255,255],maroon:[128,0,0],red:[255,0,0],purple:[128,0,128],fuchsia:[255,0,255],green:[0,128,0],lime:[0,255,0],olive:[128,128,0],yellow:[255,255,0],navy:[0,0,128],blue:[0,0,255],teal:[0,128,128],aqua:[0,255,255],transparent:[-1,-1,-1],magenta:[255,0,255],orange:[255,165,0],brown:[165,42,42]},isNamedColor:function(U){return this.NAMED[U]!==undefined;
},isSystemColor:function(S){return this.SYSTEM[S]!==undefined;
},supportsThemes:function(){return qx.Class.isDefined(m);
},isThemedColor:function(W){if(!this.supportsThemes()){return false;
}return qx.theme.manager.Color.getInstance().isDynamic(W);
},stringToRgb:function(bd){if(this.supportsThemes()&&this.isThemedColor(bd)){var bd=qx.theme.manager.Color.getInstance().resolveDynamic(bd);
}
if(this.isNamedColor(bd)){return this.NAMED[bd];
}else if(this.isSystemColor(bd)){throw new Error("Could not convert system colors to RGB: "+bd);
}else if(this.isRgbString(bd)){return this.__gn();
}else if(this.isHex3String(bd)){return this.__gp();
}else if(this.isHex6String(bd)){return this.__gq();
}throw new Error("Could not parse color: "+bd);
},cssStringToRgb:function(T){if(this.isNamedColor(T)){return this.NAMED[T];
}else if(this.isSystemColor(T)){throw new Error("Could not convert system colors to RGB: "+T);
}else if(this.isRgbString(T)){return this.__gn();
}else if(this.isRgbaString(T)){return this.__go();
}else if(this.isHex3String(T)){return this.__gp();
}else if(this.isHex6String(T)){return this.__gq();
}throw new Error("Could not parse color: "+T);
},stringToRgbString:function(X){return this.rgbToRgbString(this.stringToRgb(X));
},rgbToRgbString:function(R){return o+R[0]+s+R[1]+s+R[2]+n;
},rgbToHexString:function(u){return (qx.lang.String.pad(u[0].toString(16).toUpperCase(),2)+qx.lang.String.pad(u[1].toString(16).toUpperCase(),2)+qx.lang.String.pad(u[2].toString(16).toUpperCase(),2));
},isValidPropertyValue:function(v){return this.isThemedColor(v)||this.isNamedColor(v)||this.isHex3String(v)||this.isHex6String(v)||this.isRgbString(v);
},isCssString:function(w){return this.isSystemColor(w)||this.isNamedColor(w)||this.isHex3String(w)||this.isHex6String(w)||this.isRgbString(w);
},isHex3String:function(V){return this.REGEXP.hex3.test(V);
},isHex6String:function(bf){return this.REGEXP.hex6.test(bf);
},isRgbString:function(Y){return this.REGEXP.rgb.test(Y);
},isRgbaString:function(be){return this.REGEXP.rgba.test(be);
},__gn:function(){var bc=parseInt(RegExp.$1,10);
var bb=parseInt(RegExp.$2,10);
var ba=parseInt(RegExp.$3,10);
return [bc,bb,ba];
},__go:function(){var j=parseInt(RegExp.$1,10);
var h=parseInt(RegExp.$2,10);
var e=parseInt(RegExp.$3,10);
return [j,h,e];
},__gp:function(){var d=parseInt(RegExp.$1,16)*17;
var c=parseInt(RegExp.$2,16)*17;
var a=parseInt(RegExp.$3,16)*17;
return [d,c,a];
},__gq:function(){var bi=(parseInt(RegExp.$1,16)*16)+parseInt(RegExp.$2,16);
var bh=(parseInt(RegExp.$3,16)*16)+parseInt(RegExp.$4,16);
var bg=(parseInt(RegExp.$5,16)*16)+parseInt(RegExp.$6,16);
return [bi,bh,bg];
},hex3StringToRgb:function(x){if(this.isHex3String(x)){return this.__gp(x);
}throw new Error("Invalid hex3 value: "+x);
},hex6StringToRgb:function(E){if(this.isHex6String(E)){return this.__gq(E);
}throw new Error("Invalid hex6 value: "+E);
},hexStringToRgb:function(k){if(this.isHex3String(k)){return this.__gp(k);
}
if(this.isHex6String(k)){return this.__gq(k);
}throw new Error("Invalid hex value: "+k);
},rgbToHsb:function(F){var H,I,K;
var Q=F[0];
var N=F[1];
var G=F[2];
var P=(Q>N)?Q:N;

if(G>P){P=G;
}var J=(Q<N)?Q:N;

if(G<J){J=G;
}K=P/255.0;

if(P!=0){I=(P-J)/P;
}else{I=0;
}
if(I==0){H=0;
}else{var M=(P-Q)/(P-J);
var O=(P-N)/(P-J);
var L=(P-G)/(P-J);

if(Q==P){H=L-O;
}else if(N==P){H=2.0+M-L;
}else{H=4.0+O-M;
}H=H/6.0;

if(H<0){H=H+1.0;
}}return [Math.round(H*360),Math.round(I*100),Math.round(K*100)];
},hsbToRgb:function(y){var i,f,p,q,t;
var z=y[0]/360;
var A=y[1]/100;
var B=y[2]/100;

if(z>=1.0){z%=1.0;
}
if(A>1.0){A=1.0;
}
if(B>1.0){B=1.0;
}var C=Math.floor(255*B);
var D={};

if(A==0.0){D.red=D.green=D.blue=C;
}else{z*=6.0;
i=Math.floor(z);
f=z-i;
p=Math.floor(C*(1.0-A));
q=Math.floor(C*(1.0-(A*f)));
t=Math.floor(C*(1.0-(A*(1.0-f))));

switch(i){case 0:D.red=C;
D.green=t;
D.blue=p;
break;
case 1:D.red=q;
D.green=C;
D.blue=p;
break;
case 2:D.red=p;
D.green=C;
D.blue=t;
break;
case 3:D.red=p;
D.green=q;
D.blue=C;
break;
case 4:D.red=t;
D.green=p;
D.blue=C;
break;
case 5:D.red=C;
D.green=p;
D.blue=q;
break;
}}return [D.red,D.green,D.blue];
},randomColor:function(){var r=Math.round(Math.random()*255);
var g=Math.round(Math.random()*255);
var b=Math.round(Math.random()*255);
return this.rgbToRgbString([r,g,b]);
}}});
})();
(function(){var j="_applyStyle",i="stretch",h="Integer",g="px",f=" ",e="repeat",d="round",c="shorthand",b="px ",a="sliceBottom",y=";'></div>",x="<div style='",w="sliceLeft",v="sliceRight",u="repeatX",t="String",s="qx.ui.decoration.css3.BorderImage",r="border-box",q="",p='") ',n="sliceTop",o='url("',l="hidden",m="repeatY",k="absolute";
qx.Class.define(s,{extend:qx.ui.decoration.Abstract,construct:function(B,C){qx.ui.decoration.Abstract.call(this);
if(B!=null){this.setBorderImage(B);
}
if(C!=null){this.setSlice(C);
}},statics:{IS_SUPPORTED:qx.bom.element.Style.isPropertySupported("borderImage")},properties:{borderImage:{check:t,nullable:true,apply:j},sliceTop:{check:h,init:0,apply:j},sliceRight:{check:h,init:0,apply:j},sliceBottom:{check:h,init:0,apply:j},sliceLeft:{check:h,init:0,apply:j},slice:{group:[n,v,a,w],mode:c},repeatX:{check:[i,e,d],init:i,apply:j},repeatY:{check:[i,e,d],init:i,apply:j},repeat:{group:[u,m],mode:c}},members:{__mR:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__mR;
},getMarkup:function(){if(this.__mR){return this.__mR;
}var E=this._resolveImageUrl(this.getBorderImage());
var F=[this.getSliceTop(),this.getSliceRight(),this.getSliceBottom(),this.getSliceLeft()];
var G=[this.getRepeatX(),this.getRepeatY()].join(f);
this.__mR=[x,qx.bom.element.Style.compile({"borderImage":o+E+p+F.join(f)+f+G,position:k,lineHeight:0,fontSize:0,overflow:l,boxSizing:r,borderWidth:F.join(b)+g}),y].join(q);
return this.__mR;
},resize:function(H,I,J){H.style.width=I+g;
H.style.height=J+g;
},tint:function(z,A){},_applyStyle:function(){{};
},_resolveImageUrl:function(D){return qx.util.ResourceManager.getInstance().toUri(qx.util.AliasManager.getInstance().resolve(D));
}},destruct:function(){this.__mR=null;
}});
})();
(function(){var j="px",i="0px",h="-1px",g="no-repeat",f="scale-x",e="scale-y",d="-tr",c="-l",b='</div>',a="scale",x="qx.client",w="-br",v="-t",u="-tl",t="-r",s='<div style="position:absolute;top:0;left:0;overflow:hidden;font-size:0;line-height:0;">',r="_applyBaseImage",q="-b",p="String",o="",m="-bl",n="qx.ui.decoration.GridDiv",k="-c",l="mshtml";
qx.Class.define(n,{extend:qx.ui.decoration.Abstract,construct:function(M,N){qx.ui.decoration.Abstract.call(this);
if(M!=null){this.setBaseImage(M);
}
if(N!=null){this.setInsets(N);
}},properties:{baseImage:{check:p,nullable:true,apply:r}},members:{__mS:null,__mT:null,__mU:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__mS;
},getMarkup:function(){if(this.__mS){return this.__mS;
}var H=qx.bom.element.Decoration;
var I=this.__mT;
var J=this.__mU;
var K=[];
K.push(s);
K.push(H.create(I.tl,g,{top:0,left:0}));
K.push(H.create(I.t,f,{top:0,left:J.left+j}));
K.push(H.create(I.tr,g,{top:0,right:0}));
K.push(H.create(I.bl,g,{bottom:0,left:0}));
K.push(H.create(I.b,f,{bottom:0,left:J.left+j}));
K.push(H.create(I.br,g,{bottom:0,right:0}));
K.push(H.create(I.l,e,{top:J.top+j,left:0}));
K.push(H.create(I.c,a,{top:J.top+j,left:J.left+j}));
K.push(H.create(I.r,e,{top:J.top+j,right:0}));
K.push(b);
return this.__mS=K.join(o);
},resize:function(O,P,Q){var R=this.__mU;
var innerWidth=P-R.left-R.right;
var innerHeight=Q-R.top-R.bottom;
if(innerWidth<0){innerWidth=0;
}
if(innerHeight<0){innerHeight=0;
}O.style.width=P+j;
O.style.height=Q+j;
O.childNodes[1].style.width=innerWidth+j;
O.childNodes[4].style.width=innerWidth+j;
O.childNodes[7].style.width=innerWidth+j;
O.childNodes[6].style.height=innerHeight+j;
O.childNodes[7].style.height=innerHeight+j;
O.childNodes[8].style.height=innerHeight+j;

if(qx.core.Variant.isSet(x,l)){if(qx.bom.client.Engine.VERSION<7||(qx.bom.client.Feature.QUIRKS_MODE&&qx.bom.client.Engine.VERSION<8)){if(P%2==1){O.childNodes[2].style.marginRight=h;
O.childNodes[5].style.marginRight=h;
O.childNodes[8].style.marginRight=h;
}else{O.childNodes[2].style.marginRight=i;
O.childNodes[5].style.marginRight=i;
O.childNodes[8].style.marginRight=i;
}
if(Q%2==1){O.childNodes[3].style.marginBottom=h;
O.childNodes[4].style.marginBottom=h;
O.childNodes[5].style.marginBottom=h;
}else{O.childNodes[3].style.marginBottom=i;
O.childNodes[4].style.marginBottom=i;
O.childNodes[5].style.marginBottom=i;
}}}},tint:function(y,z){},_applyBaseImage:function(A,B){{};

if(A){var F=this._resolveImageUrl(A);
var G=/(.*)(\.[a-z]+)$/.exec(F);
var E=G[1];
var D=G[2];
var C=this.__mT={tl:E+u+D,t:E+v+D,tr:E+d+D,bl:E+m+D,b:E+q+D,br:E+w+D,l:E+c+D,c:E+k+D,r:E+t+D};
this.__mU=this._computeEdgeSizes(C);
}},_resolveImageUrl:function(L){return qx.util.AliasManager.getInstance().resolve(L);
},_computeEdgeSizes:function(S){var T=qx.util.ResourceManager.getInstance();
return {top:T.getImageHeight(S.t),bottom:T.getImageHeight(S.b),left:T.getImageWidth(S.l),right:T.getImageWidth(S.r)};
}},destruct:function(){this.__mS=this.__mT=this.__mU=null;
}});
})();


qx.$$loader.init();

