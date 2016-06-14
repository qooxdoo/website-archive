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
var libinfo = {"__out__":{"sourceUri":"../../script"},"demobrowser.demo":{"resourceUri":"../../resource","sourceUri":"../../script","version":"trunk"},"qx":{"resourceUri":"../../resource","sourceUri":"../../script","version":"1.2.1"}};
for (var k in libinfo) qx.$$libraries[k] = libinfo[k];

qx.$$resources = {};
qx.$$translations = {};
qx.$$locales = {};
qx.$$packageData = {};

qx.$$loader = {
  parts : {"boot":[0]},
  uris : [["__out__:demobrowser.demo.bom.HtmlArea-qx.theme.Classic.js"]],
  urisBefore : [],
  packageHashes : {"0":"98e48ef71d09"},
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

qx.$$packageData['98e48ef71d09']={"locales":{},"resources":{"demobrowser/demo/icons/htmlarea/format-fill-color.png":[16,16,"png","demobrowser.demo"],"demobrowser/demo/icons/htmlarea/format-list-ordered.png":[16,16,"png","demobrowser.demo"],"demobrowser/demo/icons/htmlarea/format-list-unordered.png":[16,16,"png","demobrowser.demo"],"demobrowser/demo/icons/htmlarea/format-text-color.png":[16,16,"png","demobrowser.demo"],"demobrowser/demo/icons/htmlarea/insert-horizontal-rule.png":[16,16,"png","demobrowser.demo"],"demobrowser/demo/icons/htmlarea/insert-table.png":[16,16,"png","demobrowser.demo"],"demobrowser/demo/icons/htmlarea/insert-text.png":[16,16,"png","demobrowser.demo"],"demobrowser/demo/icons/htmlarea/qooxdoo_logo.png":[136,41,"png","demobrowser.demo"],"qx/decoration/Classic/arrows-combined.gif":[124,7,"gif","qx"],"qx/decoration/Classic/arrows/down-invert.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-38,0],"qx/decoration/Classic/arrows/down-small-invert.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-87,0],"qx/decoration/Classic/arrows/down-small.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-53,0],"qx/decoration/Classic/arrows/down.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-113,0],"qx/decoration/Classic/arrows/forward-invert.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-30,0],"qx/decoration/Classic/arrows/forward.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-18,0],"qx/decoration/Classic/arrows/left-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-92,0],"qx/decoration/Classic/arrows/left-small-invert.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-58,0],"qx/decoration/Classic/arrows/left-small.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-15,0],"qx/decoration/Classic/arrows/left.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-120,0],"qx/decoration/Classic/arrows/next-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-80,0],"qx/decoration/Classic/arrows/next.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-109,0],"qx/decoration/Classic/arrows/previous-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-69,0],"qx/decoration/Classic/arrows/previous.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-65,0],"qx/decoration/Classic/arrows/rewind-invert.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-45,0],"qx/decoration/Classic/arrows/rewind.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-101,0],"qx/decoration/Classic/arrows/right-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-61,0],"qx/decoration/Classic/arrows/right-small-invert.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",0,0],"qx/decoration/Classic/arrows/right-small.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-84,0],"qx/decoration/Classic/arrows/right.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-26,0],"qx/decoration/Classic/arrows/up-invert.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-73,0],"qx/decoration/Classic/arrows/up-small-invert.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-96,0],"qx/decoration/Classic/arrows/up-small.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-3,0],"qx/decoration/Classic/arrows/up.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-8,0],"qx/decoration/Classic/checkbox-radiobutton-combined.png":[504,14,"png","qx"],"qx/decoration/Classic/colorselector-combined.gif":[46,11,"gif","qx"],"qx/decoration/Classic/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Classic/colorselector/brightness-handle.gif":[35,11,"gif","qx","qx/decoration/Classic/colorselector-combined.gif",-11,0],"qx/decoration/Classic/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Classic/colorselector/huesaturation-handle.gif":[11,11,"gif","qx","qx/decoration/Classic/colorselector-combined.gif",0,0],"qx/decoration/Classic/cursors-combined.gif":[71,20,"gif","qx"],"qx/decoration/Classic/cursors/alias.gif":[19,15,"gif","qx","qx/decoration/Classic/cursors-combined.gif",-52,0],"qx/decoration/Classic/cursors/copy.gif":[19,15,"gif","qx","qx/decoration/Classic/cursors-combined.gif",-20,0],"qx/decoration/Classic/cursors/move.gif":[13,9,"gif","qx","qx/decoration/Classic/cursors-combined.gif",-39,0],"qx/decoration/Classic/cursors/nodrop.gif":[20,20,"gif","qx","qx/decoration/Classic/cursors-combined.gif",0,0],"qx/decoration/Classic/datechooser/last-month-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/last-month.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/last-year-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/last-year.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-month-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-month.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-year-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-year.png":[16,16,"png","qx"],"qx/decoration/Classic/form/checkbox-checked-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-336,0],"qx/decoration/Classic/form/checkbox-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-28,0],"qx/decoration/Classic/form/checkbox-checked-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-462,0],"qx/decoration/Classic/form/checkbox-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-112,0],"qx/decoration/Classic/form/checkbox-checked-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-140,0],"qx/decoration/Classic/form/checkbox-checked-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-98,0],"qx/decoration/Classic/form/checkbox-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-308,0],"qx/decoration/Classic/form/checkbox-checked-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",0,0],"qx/decoration/Classic/form/checkbox-checked.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-266,0],"qx/decoration/Classic/form/checkbox-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-84,0],"qx/decoration/Classic/form/checkbox-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-476,0],"qx/decoration/Classic/form/checkbox-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-392,0],"qx/decoration/Classic/form/checkbox-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-196,0],"qx/decoration/Classic/form/checkbox-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-154,0],"qx/decoration/Classic/form/checkbox-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-350,0],"qx/decoration/Classic/form/checkbox-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-448,0],"qx/decoration/Classic/form/checkbox-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-70,0],"qx/decoration/Classic/form/checkbox.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-490,0],"qx/decoration/Classic/form/radiobutton-checked-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-210,0],"qx/decoration/Classic/form/radiobutton-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-406,0],"qx/decoration/Classic/form/radiobutton-checked-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-378,0],"qx/decoration/Classic/form/radiobutton-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-252,0],"qx/decoration/Classic/form/radiobutton-checked-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-182,0],"qx/decoration/Classic/form/radiobutton-checked-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-294,0],"qx/decoration/Classic/form/radiobutton-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-420,0],"qx/decoration/Classic/form/radiobutton-checked-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-56,0],"qx/decoration/Classic/form/radiobutton-checked.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-322,0],"qx/decoration/Classic/form/radiobutton-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-364,0],"qx/decoration/Classic/form/radiobutton-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-434,0],"qx/decoration/Classic/form/radiobutton-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-168,0],"qx/decoration/Classic/form/radiobutton-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-126,0],"qx/decoration/Classic/form/radiobutton-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-42,0],"qx/decoration/Classic/form/radiobutton-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-280,0],"qx/decoration/Classic/form/radiobutton-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-238,0],"qx/decoration/Classic/form/radiobutton-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-14,0],"qx/decoration/Classic/form/radiobutton.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-224,0],"qx/decoration/Classic/menu-combined.gif":[64,7,"gif","qx"],"qx/decoration/Classic/menu/checkbox-invert.gif":[16,7,"gif","qx","qx/decoration/Classic/menu-combined.gif",-16,0],"qx/decoration/Classic/menu/checkbox.gif":[16,7,"gif","qx","qx/decoration/Classic/menu-combined.gif",-32,0],"qx/decoration/Classic/menu/radiobutton-invert.gif":[16,5,"gif","qx","qx/decoration/Classic/menu-combined.gif",0,0],"qx/decoration/Classic/menu/radiobutton.gif":[16,5,"gif","qx","qx/decoration/Classic/menu-combined.gif",-48,0],"qx/decoration/Classic/shadow-lr-combined.png":[30,382,"png","qx"],"qx/decoration/Classic/shadow-small-lr-combined.png":[10,136,"png","qx"],"qx/decoration/Classic/shadow-small-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Classic/shadow-tb-combined.png":[15,90,"png","qx"],"qx/decoration/Classic/shadow/shadow-b.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-30],"qx/decoration/Classic/shadow/shadow-bl.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-br.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-60],"qx/decoration/Classic/shadow/shadow-c.png":[40,382,"png","qx"],"qx/decoration/Classic/shadow/shadow-l.png":[15,382,"png","qx","qx/decoration/Classic/shadow-lr-combined.png",-15,0],"qx/decoration/Classic/shadow/shadow-r.png":[15,382,"png","qx","qx/decoration/Classic/shadow-lr-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-small-b.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-25],"qx/decoration/Classic/shadow/shadow-small-bl.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-20],"qx/decoration/Classic/shadow/shadow-small-br.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-small-c.png":[40,136,"png","qx"],"qx/decoration/Classic/shadow/shadow-small-l.png":[5,136,"png","qx","qx/decoration/Classic/shadow-small-lr-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-small-r.png":[5,136,"png","qx","qx/decoration/Classic/shadow-small-lr-combined.png",-5,0],"qx/decoration/Classic/shadow/shadow-small-t.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-5],"qx/decoration/Classic/shadow/shadow-small-tl.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-15],"qx/decoration/Classic/shadow/shadow-small-tr.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-10],"qx/decoration/Classic/shadow/shadow-small.png":[114,146,"png","qx"],"qx/decoration/Classic/shadow/shadow-t.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-75],"qx/decoration/Classic/shadow/shadow-tl.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-45],"qx/decoration/Classic/shadow/shadow-tr.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-15],"qx/decoration/Classic/shadow/shadow.png":[381,412,"png","qx"],"qx/decoration/Classic/splitpane/knob-horizontal.png":[4,15,"png","qx"],"qx/decoration/Classic/splitpane/knob-vertical.png":[15,4,"png","qx"],"qx/decoration/Classic/table-combined.png":[72,11,"png","qx"],"qx/decoration/Classic/table/ascending-invert.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",-62,0],"qx/decoration/Classic/table/ascending.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",-52,0],"qx/decoration/Classic/table/boolean-false.png":[11,11,"png","qx","qx/decoration/Classic/table-combined.png",-31,0],"qx/decoration/Classic/table/boolean-true.png":[11,11,"png","qx","qx/decoration/Classic/table-combined.png",-10,0],"qx/decoration/Classic/table/descending-invert.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",-42,0],"qx/decoration/Classic/table/descending.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",0,0],"qx/decoration/Classic/table/select-column-order.png":[10,9,"png","qx","qx/decoration/Classic/table-combined.png",-21,0],"qx/decoration/Classic/tree/minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/tree/plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/cross.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/cross_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/cross_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/end.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/end_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/end_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/line.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/only_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/only_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/start.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/start_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/start_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/window-captionbar-buttons-combined.gif":[36,9,"gif","qx"],"qx/decoration/Classic/window/close.gif":[10,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",0,0],"qx/decoration/Classic/window/maximize.gif":[9,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",-10,0],"qx/decoration/Classic/window/minimize.gif":[9,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",-19,0],"qx/decoration/Classic/window/restore.gif":[8,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",-28,0],"qx/icon/Oxygen/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/edit-clear.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/edit-copy.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/edit-cut.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/edit-delete.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/edit-find.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/edit-paste.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/edit-redo.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/edit-select-all.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/edit-undo.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/format-indent-less.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/format-indent-more.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/format-justify-center.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/format-justify-fill.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/format-justify-left.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/format-justify-right.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/format-text-bold.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/format-text-direction-ltr.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/format-text-direction-rtl.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/format-text-italic.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/format-text-strikethrough.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/format-text-underline.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/insert-image.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/insert-link.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/insert-text.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/mimetypes/text-plain.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/places/folder-open.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/places/folder.png":[16,16,"png","qx"],"qx/static/blank.html":"qx"},"translations":{}};
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
(function(){var da=';',cY='return this.',cX="string",cW="boolean",cV="",cU="setThemed",cT='!==undefined)',cS="this.",cR="set",cQ="resetThemed",cF="setRuntime",cE="init",cD='else if(this.',cC="resetRuntime",cB="reset",cA="();",cz='else ',cy='if(this.',cx="return this.",cw="get",dh=";",di="(a[",df=' of an instance of ',dg="refresh",dd=' is not (yet) ready!");',de="]);",db='qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)',dc='value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)',dj='value !== null && value.nodeType === 9 && value.documentElement',dk='value !== null && value.$$type === "Mixin"',cJ='return init;',cI='var init=this.',cL='value !== null && value.nodeType === 1 && value.attributes',cK="var parent = this.getLayoutParent();",cN="Error in property ",cM='qx.core.Assert.assertInstance(value, Date, msg) || true',cP="if (!parent) return;",cO=" in method ",cH='qx.core.Assert.assertInstance(value, Error, msg) || true',cG='Undefined value is not allowed!',bA="inherit",bB='Is invalid!',bC="MSIE 6.0",bD="': ",bE=" of class ",bF='value !== null && value.nodeType !== undefined',bG='value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',bH='qx.core.Assert.assertPositiveInteger(value, msg) || true',bI='if(init==qx.core.Property.$$inherit)init=null;',bJ='value !== null && value.$$type === "Interface"',dp='var inherit=prop.$$inherit;',dn="var value = parent.",dm="$$useinit_",dl="(value);",dt='Requires exactly one argument!',ds="$$runtime_",dr="$$user_",dq='qx.core.Assert.assertArray(value, msg) || true',dv='qx.core.Assert.assertPositiveNumber(value, msg) || true',du=".prototype",cg="Boolean",ch='return value;',ce='if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ',cf='Does not allow any arguments!',ck="()",cl="var a=arguments[0] instanceof Array?arguments[0]:arguments;",ci='value !== null && value.$$type === "Theme"',cj="())",cc='return null;',cd='qx.core.Assert.assertObject(value, msg) || true',bR='qx.core.Assert.assertString(value, msg) || true',bQ="if (value===undefined) value = parent.",bT='value !== null && value.$$type === "Class"',bS='qx.core.Assert.assertFunction(value, msg) || true',bN="object",bM="$$init_",bP="$$theme_",bO='qx.core.Assert.assertMap(value, msg) || true',bL='qx.core.Assert.assertNumber(value, msg) || true',bK='Null value is not allowed!',cq='qx.core.Assert.assertInteger(value, msg) || true',cr="value",cs="rv:1.8.1",ct="shorthand",cm='qx.core.Assert.assertInstance(value, RegExp, msg) || true',cn='value !== null && value.type !== undefined',co='value !== null && value.document',cp='throw new Error("Property ',cu="(!this.",cv='qx.core.Assert.assertBoolean(value, msg) || true',cb="toggle",ca="$$inherit_",bY=" with incoming value '",bX="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));",bW="qx.core.Property",bV="is",bU='Could not change or apply init value after constructing phase!';
qx.Bootstrap.define(bW,{statics:{__o:{"Boolean":cv,"String":bR,"Number":bL,"Integer":cq,"PositiveNumber":dv,"PositiveInteger":bH,"Error":cH,"RegExp":cm,"Object":cd,"Array":dq,"Map":bO,"Function":bS,"Date":cM,"Node":bF,"Element":cL,"Document":dj,"Window":co,"Event":cn,"Class":bT,"Mixin":dk,"Interface":bJ,"Theme":ci,"Color":db,"Decorator":bG,"Font":dc},__p:{"Node":true,"Element":true,"Document":true,"Window":true,"Event":true},$$inherit:bA,$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},set:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{name:cX,dereference:cW,inheritable:cW,nullable:cW,themeable:cW,refine:cW,init:null,apply:cX,event:cX,check:null,transform:cX,deferredInit:cW,validate:null},$$allowedGroupKeys:{name:cX,group:bN,mode:cX,themeable:cW},$$inheritable:{},__q:function(dS){var dT=this.__r(dS);

if(!dT.length){var dU=qx.lang.Function.empty;
}else{dU=this.__s(dT);
}dS.prototype.$$refreshInheritables=dU;
},__r:function(v){var x=[];

while(v){var w=v.$$properties;

if(w){for(var name in this.$$inheritable){if(w[name]&&w[name].inheritable){x.push(name);
}}}v=v.superclass;
}return x;
},__s:function(bu){var by=this.$$store.inherit;
var bx=this.$$store.init;
var bw=this.$$method.refresh;
var bv=[cK,cP];

for(var i=0,l=bu.length;i<l;i++){var name=bu[i];
bv.push(dn,by[name],dh,bQ,bx[name],dh,cS,bw[name],dl);
}return new Function(bv.join(cV));
},attachRefreshInheritables:function(B){B.prototype.$$refreshInheritables=function(){qx.core.Property.__q(B);
return this.$$refreshInheritables();
};
},attachMethods:function(dH,name,dI){dI.group?this.__t(dH,dI,name):this.__u(dH,dI,name);
},__t:function(bj,bk,name){var br=qx.Bootstrap.firstUp(name);
var bq=bj.prototype;
var bs=bk.themeable===true;
{};
var bt=[];
var bn=[];

if(bs){var bl=[];
var bp=[];
}var bo=cl;
bt.push(bo);

if(bs){bl.push(bo);
}
if(bk.mode==ct){var bm=bX;
bt.push(bm);

if(bs){bl.push(bm);
}}
for(var i=0,a=bk.group,l=a.length;i<l;i++){{};
bt.push(cS,this.$$method.set[a[i]],di,i,de);
bn.push(cS,this.$$method.reset[a[i]],cA);

if(bs){{};
bl.push(cS,this.$$method.setThemed[a[i]],di,i,de);
bp.push(cS,this.$$method.resetThemed[a[i]],cA);
}}this.$$method.set[name]=cR+br;
bq[this.$$method.set[name]]=new Function(bt.join(cV));
this.$$method.reset[name]=cB+br;
bq[this.$$method.reset[name]]=new Function(bn.join(cV));

if(bs){this.$$method.setThemed[name]=cU+br;
bq[this.$$method.setThemed[name]]=new Function(bl.join(cV));
this.$$method.resetThemed[name]=cQ+br;
bq[this.$$method.resetThemed[name]]=new Function(bp.join(cV));
}},__u:function(dw,dx,name){var dz=qx.Bootstrap.firstUp(name);
var dB=dw.prototype;
{};
if(dx.dereference===undefined&&typeof dx.check===cX){dx.dereference=this.__v(dx.check);
}var dA=this.$$method;
var dy=this.$$store;
dy.runtime[name]=ds+name;
dy.user[name]=dr+name;
dy.theme[name]=bP+name;
dy.init[name]=bM+name;
dy.inherit[name]=ca+name;
dy.useinit[name]=dm+name;
dA.get[name]=cw+dz;
dB[dA.get[name]]=function(){return qx.core.Property.executeOptimizedGetter(this,dw,name,cw);
};
dA.set[name]=cR+dz;
dB[dA.set[name]]=function(dJ){return qx.core.Property.executeOptimizedSetter(this,dw,name,cR,arguments);
};
dA.reset[name]=cB+dz;
dB[dA.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,dw,name,cB);
};

if(dx.inheritable||dx.apply||dx.event||dx.deferredInit){dA.init[name]=cE+dz;
dB[dA.init[name]]=function(dG){return qx.core.Property.executeOptimizedSetter(this,dw,name,cE,arguments);
};
}
if(dx.inheritable){dA.refresh[name]=dg+dz;
dB[dA.refresh[name]]=function(dW){return qx.core.Property.executeOptimizedSetter(this,dw,name,dg,arguments);
};
}dA.setRuntime[name]=cF+dz;
dB[dA.setRuntime[name]]=function(q){return qx.core.Property.executeOptimizedSetter(this,dw,name,cF,arguments);
};
dA.resetRuntime[name]=cC+dz;
dB[dA.resetRuntime[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,dw,name,cC);
};

if(dx.themeable){dA.setThemed[name]=cU+dz;
dB[dA.setThemed[name]]=function(dV){return qx.core.Property.executeOptimizedSetter(this,dw,name,cU,arguments);
};
dA.resetThemed[name]=cQ+dz;
dB[dA.resetThemed[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,dw,name,cQ);
};
}
if(dx.check===cg){dB[cb+dz]=new Function(cx+dA.set[name]+cu+dA.get[name]+cj);
dB[bV+dz]=new Function(cx+dA.get[name]+ck);
}},__v:function(dK){return !!this.__p[dK];
},__w:function(bz){return this.__p[bz]||qx.Bootstrap.classIsDefined(bz)||(qx.Interface&&qx.Interface.isDefined(bz));
},__x:{0:bU,1:dt,2:cG,3:cf,4:bK,5:bB},error:function(dL,dM,dN,dO,dP){var dQ=dL.constructor.classname;
var dR=cN+dN+bE+dQ+cO+this.$$method[dO][dN]+bY+dP+bD;
throw new Error(dR+(this.__x[dM]||"Unknown reason: "+dM));
},__y:function(bd,be,name,bf,bg,bh){var bi=this.$$method[bf][name];
{be[bi]=new Function(cr,bg.join(cV));
};
{};
qx.Bootstrap.setDisplayName(be[bi],bd.classname+du,bi);
if(bh===undefined){return bd[bi]();
}else{return bd[bi](bh[0]);
}},executeOptimizedGetter:function(V,W,name,X){var ba=W.$$properties[name];
var bc=W.prototype;
var Y=[];
var bb=this.$$store;
Y.push(cy,bb.runtime[name],cT);
Y.push(cY,bb.runtime[name],da);

if(ba.inheritable){Y.push(cD,bb.inherit[name],cT);
Y.push(cY,bb.inherit[name],da);
Y.push(cz);
}Y.push(cy,bb.user[name],cT);
Y.push(cY,bb.user[name],da);

if(ba.themeable){Y.push(cD,bb.theme[name],cT);
Y.push(cY,bb.theme[name],da);
}
if(ba.deferredInit&&ba.init===undefined){Y.push(cD,bb.init[name],cT);
Y.push(cY,bb.init[name],da);
}Y.push(cz);

if(ba.init!==undefined){if(ba.inheritable){Y.push(cI,bb.init[name],da);

if(ba.nullable){Y.push(bI);
}else if(ba.init!==undefined){Y.push(cY,bb.init[name],da);
}else{Y.push(ce,name,df,W.classname,dd);
}Y.push(cJ);
}else{Y.push(cY,bb.init[name],da);
}}else if(ba.inheritable||ba.nullable){Y.push(cc);
}else{Y.push(cp,name,df,W.classname,dd);
}return this.__y(V,bc,name,X,Y);
},executeOptimizedSetter:function(b,c,name,d,e){var k=c.$$properties[name];
var j=c.prototype;
var g=[];
var f=d===cR||d===cU||d===cF||(d===cE&&k.init===undefined);
var h=k.apply||k.event||k.inheritable;
var m=this.__z(d,name);
this.__A(g,k,name,d,f);

if(f){this.__B(g,c,k,name);
}
if(h){this.__C(g,f,m,d);
}
if(k.inheritable){g.push(dp);
}{};

if(!h){this.__E(g,name,d,f);
}else{this.__F(g,k,name,d,f);
}
if(k.inheritable){this.__G(g,k,name,d);
}else if(h){this.__H(g,k,name,d);
}
if(h){this.__I(g,k,name);
if(k.inheritable&&j._getChildren){this.__J(g,name);
}}if(f){g.push(ch);
}return this.__y(b,j,name,d,g,e);
},__z:function(F,name){if(F===cF||F===cC){var G=this.$$store.runtime[name];
}else if(F===cU||F===cQ){G=this.$$store.theme[name];
}else if(F===cE){G=this.$$store.init[name];
}else{G=this.$$store.user[name];
}return G;
},__A:function(O,P,name,Q,R){{if(!P.nullable||P.check||P.inheritable){O.push('var prop=qx.core.Property;');
}if(Q==="set"){O.push('if(value===undefined)prop.error(this,2,"',name,'","',Q,'",value);');
}};
},__B:function(S,T,U,name){if(U.transform){S.push('value=this.',U.transform,'(value);');
}if(U.validate){if(typeof U.validate==="string"){S.push('this.',U.validate,'(value);');
}else if(U.validate instanceof Function){S.push(T.classname,'.$$properties.',name);
S.push('.validate.call(this, value);');
}}},__C:function(J,K,L,M){var N=(M==="reset"||M==="resetThemed"||M==="resetRuntime");

if(K){J.push('if(this.',L,'===value)return value;');
}else if(N){J.push('if(this.',L,'===undefined)return;');
}},__D:undefined,__E:function(dC,name,dD,dE){if(dD==="setRuntime"){dC.push('this.',this.$$store.runtime[name],'=value;');
}else if(dD==="resetRuntime"){dC.push('if(this.',this.$$store.runtime[name],'!==undefined)');
dC.push('delete this.',this.$$store.runtime[name],';');
}else if(dD==="set"){dC.push('this.',this.$$store.user[name],'=value;');
}else if(dD==="reset"){dC.push('if(this.',this.$$store.user[name],'!==undefined)');
dC.push('delete this.',this.$$store.user[name],';');
}else if(dD==="setThemed"){dC.push('this.',this.$$store.theme[name],'=value;');
}else if(dD==="resetThemed"){dC.push('if(this.',this.$$store.theme[name],'!==undefined)');
dC.push('delete this.',this.$$store.theme[name],';');
}else if(dD==="init"&&dE){dC.push('this.',this.$$store.init[name],'=value;');
}},__F:function(r,s,name,t,u){if(s.inheritable){r.push('var computed, old=this.',this.$$store.inherit[name],';');
}else{r.push('var computed, old;');
}r.push('if(this.',this.$$store.runtime[name],'!==undefined){');

if(t==="setRuntime"){r.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(t==="resetRuntime"){r.push('delete this.',this.$$store.runtime[name],';');
r.push('if(this.',this.$$store.user[name],'!==undefined)');
r.push('computed=this.',this.$$store.user[name],';');
r.push('else if(this.',this.$$store.theme[name],'!==undefined)');
r.push('computed=this.',this.$$store.theme[name],';');
r.push('else if(this.',this.$$store.init[name],'!==undefined){');
r.push('computed=this.',this.$$store.init[name],';');
r.push('this.',this.$$store.useinit[name],'=true;');
r.push('}');
}else{r.push('old=computed=this.',this.$$store.runtime[name],';');
if(t==="set"){r.push('this.',this.$$store.user[name],'=value;');
}else if(t==="reset"){r.push('delete this.',this.$$store.user[name],';');
}else if(t==="setThemed"){r.push('this.',this.$$store.theme[name],'=value;');
}else if(t==="resetThemed"){r.push('delete this.',this.$$store.theme[name],';');
}else if(t==="init"&&u){r.push('this.',this.$$store.init[name],'=value;');
}}r.push('}');
r.push('else if(this.',this.$$store.user[name],'!==undefined){');

if(t==="set"){if(!s.inheritable){r.push('old=this.',this.$$store.user[name],';');
}r.push('computed=this.',this.$$store.user[name],'=value;');
}else if(t==="reset"){if(!s.inheritable){r.push('old=this.',this.$$store.user[name],';');
}r.push('delete this.',this.$$store.user[name],';');
r.push('if(this.',this.$$store.runtime[name],'!==undefined)');
r.push('computed=this.',this.$$store.runtime[name],';');
r.push('if(this.',this.$$store.theme[name],'!==undefined)');
r.push('computed=this.',this.$$store.theme[name],';');
r.push('else if(this.',this.$$store.init[name],'!==undefined){');
r.push('computed=this.',this.$$store.init[name],';');
r.push('this.',this.$$store.useinit[name],'=true;');
r.push('}');
}else{if(t==="setRuntime"){r.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(s.inheritable){r.push('computed=this.',this.$$store.user[name],';');
}else{r.push('old=computed=this.',this.$$store.user[name],';');
}if(t==="setThemed"){r.push('this.',this.$$store.theme[name],'=value;');
}else if(t==="resetThemed"){r.push('delete this.',this.$$store.theme[name],';');
}else if(t==="init"&&u){r.push('this.',this.$$store.init[name],'=value;');
}}r.push('}');
if(s.themeable){r.push('else if(this.',this.$$store.theme[name],'!==undefined){');

if(!s.inheritable){r.push('old=this.',this.$$store.theme[name],';');
}
if(t==="setRuntime"){r.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(t==="set"){r.push('computed=this.',this.$$store.user[name],'=value;');
}else if(t==="setThemed"){r.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(t==="resetThemed"){r.push('delete this.',this.$$store.theme[name],';');
r.push('if(this.',this.$$store.init[name],'!==undefined){');
r.push('computed=this.',this.$$store.init[name],';');
r.push('this.',this.$$store.useinit[name],'=true;');
r.push('}');
}else if(t==="init"){if(u){r.push('this.',this.$$store.init[name],'=value;');
}r.push('computed=this.',this.$$store.theme[name],';');
}else if(t==="refresh"){r.push('computed=this.',this.$$store.theme[name],';');
}r.push('}');
}r.push('else if(this.',this.$$store.useinit[name],'){');

if(!s.inheritable){r.push('old=this.',this.$$store.init[name],';');
}
if(t==="init"){if(u){r.push('computed=this.',this.$$store.init[name],'=value;');
}else{r.push('computed=this.',this.$$store.init[name],';');
}}else if(t==="set"||t==="setRuntime"||t==="setThemed"||t==="refresh"){r.push('delete this.',this.$$store.useinit[name],';');

if(t==="setRuntime"){r.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(t==="set"){r.push('computed=this.',this.$$store.user[name],'=value;');
}else if(t==="setThemed"){r.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(t==="refresh"){r.push('computed=this.',this.$$store.init[name],';');
}}r.push('}');
if(t==="set"||t==="setRuntime"||t==="setThemed"||t==="init"){r.push('else{');

if(t==="setRuntime"){r.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(t==="set"){r.push('computed=this.',this.$$store.user[name],'=value;');
}else if(t==="setThemed"){r.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(t==="init"){if(u){r.push('computed=this.',this.$$store.init[name],'=value;');
}else{r.push('computed=this.',this.$$store.init[name],';');
}r.push('this.',this.$$store.useinit[name],'=true;');
}r.push('}');
}},__G:function(C,D,name,E){C.push('if(computed===undefined||computed===inherit){');

if(E==="refresh"){C.push('computed=value;');
}else{C.push('var pa=this.getLayoutParent();if(pa)computed=pa.',this.$$store.inherit[name],';');
}C.push('if((computed===undefined||computed===inherit)&&');
C.push('this.',this.$$store.init[name],'!==undefined&&');
C.push('this.',this.$$store.init[name],'!==inherit){');
C.push('computed=this.',this.$$store.init[name],';');
C.push('this.',this.$$store.useinit[name],'=true;');
C.push('}else{');
C.push('delete this.',this.$$store.useinit[name],';}');
C.push('}');
C.push('if(old===computed)return value;');
C.push('if(computed===inherit){');
C.push('computed=undefined;delete this.',this.$$store.inherit[name],';');
C.push('}');
C.push('else if(computed===undefined)');
C.push('delete this.',this.$$store.inherit[name],';');
C.push('else this.',this.$$store.inherit[name],'=computed;');
C.push('var backup=computed;');
if(D.init!==undefined&&E!=="init"){C.push('if(old===undefined)old=this.',this.$$store.init[name],";");
}else{C.push('if(old===undefined)old=null;');
}C.push('if(computed===undefined||computed==inherit)computed=null;');
},__H:function(n,o,name,p){if(p!=="set"&&p!=="setRuntime"&&p!=="setThemed"){n.push('if(computed===undefined)computed=null;');
}n.push('if(old===computed)return value;');
if(o.init!==undefined&&p!=="init"){n.push('if(old===undefined)old=this.',this.$$store.init[name],";");
}else{n.push('if(old===undefined)old=null;');
}},__I:function(H,I,name){if(I.apply){H.push('this.',I.apply,'(computed, old, "',name,'");');
}if(I.event){H.push("var reg=qx.event.Registration;","if(reg.hasListener(this, '",I.event,"')){","reg.fireEvent(this, '",I.event,"', qx.event.type.Data, [computed, old]",")}");
}},__J:function(dF,name){dF.push('var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){');
dF.push('if(a[i].',this.$$method.refresh[name],')a[i].',this.$$method.refresh[name],'(backup);');
dF.push('}');
}},defer:function(y){var A=navigator.userAgent.indexOf(bC)!=-1;
var z=navigator.userAgent.indexOf(cs)!=-1;
if(A||z){y.__v=y.__w;
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
(function(){var bp="[Class ",bo="]",bn="extend",bm="qx.Class",bl=".",bk="static";
qx.Bootstrap.define(bm,{statics:{define:function(name,bW){if(!bW){var bW={};
}if(bW.include&&!(bW.include instanceof Array)){bW.include=[bW.include];
}if(bW.implement&&!(bW.implement instanceof Array)){bW.implement=[bW.implement];
}var bX=false;

if(!bW.hasOwnProperty(bn)&&!bW.type){bW.type=bk;
bX=true;
}{};
var bY=this.__O(name,bW.type,bW.extend,bW.statics,bW.construct,bW.destruct,bW.include);
if(bW.extend){if(bW.properties){this.__Q(bY,bW.properties,true);
}if(bW.members){this.__S(bY,bW.members,true,true,false);
}if(bW.events){this.__P(bY,bW.events,true);
}if(bW.include){for(var i=0,l=bW.include.length;i<l;i++){this.__W(bY,bW.include[i],false);
}}}if(bW.settings){for(var ca in bW.settings){qx.core.Setting.define(ca,bW.settings[ca]);
}}if(bW.variants){for(var ca in bW.variants){qx.core.Variant.define(ca,bW.variants[ca].allowedValues,bW.variants[ca].defaultValue);
}}if(bW.implement){for(var i=0,l=bW.implement.length;i<l;i++){this.__U(bY,bW.implement[i]);
}}{};
if(bW.defer){bW.defer.self=bY;
bW.defer(bY,bY.prototype,{add:function(name,k){var m={};
m[name]=k;
qx.Class.__Q(bY,m,true);
}});
}return bY;
},undefine:function(name){delete this.$$registry[name];
var D=name.split(bl);
var F=[window];

for(var i=0;i<D.length;i++){F.push(F[i][D[i]]);
}for(var i=F.length-1;i>=1;i--){var E=F[i];
var parent=F[i-1];

if(qx.Bootstrap.isFunction(E)||qx.Bootstrap.objectGetLength(E)===0){delete parent[D[i-1]];
}else{break;
}}},isDefined:qx.Bootstrap.classIsDefined,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},getByName:qx.Bootstrap.getByName,include:function(bD,bE){{};
qx.Class.__W(bD,bE,false);
},patch:function(n,o){{};
qx.Class.__W(n,o,true);
},isSubClassOf:function(bB,bC){if(!bB){return false;
}
if(bB==bC){return true;
}
if(bB.prototype instanceof bC){return true;
}return false;
},getPropertyDefinition:qx.Bootstrap.getPropertyDefinition,getProperties:function(R){var S=[];

while(R){if(R.$$properties){S.push.apply(S,qx.Bootstrap.getKeys(R.$$properties));
}R=R.superclass;
}return S;
},getByProperty:function(by,name){while(by){if(by.$$properties&&by.$$properties[name]){return by;
}by=by.superclass;
}return null;
},hasProperty:qx.Bootstrap.hasProperty,getEventType:qx.Bootstrap.getEventType,supportsEvent:qx.Bootstrap.supportsEvent,hasOwnMixin:function(bU,bV){return bU.$$includes&&bU.$$includes.indexOf(bV)!==-1;
},getByMixin:function(bF,bG){var bH,i,l;

while(bF){if(bF.$$includes){bH=bF.$$flatIncludes;

for(i=0,l=bH.length;i<l;i++){if(bH[i]===bG){return bF;
}}}bF=bF.superclass;
}return null;
},getMixins:qx.Bootstrap.getMixins,hasMixin:function(B,C){return !!this.getByMixin(B,C);
},hasOwnInterface:function(X,Y){return X.$$implements&&X.$$implements.indexOf(Y)!==-1;
},getByInterface:qx.Bootstrap.getByInterface,getInterfaces:function(bw){var bx=[];

while(bw){if(bw.$$implements){bx.push.apply(bx,bw.$$flatImplements);
}bw=bw.superclass;
}return bx;
},hasInterface:qx.Bootstrap.hasInterface,implementsInterface:function(bI,bJ){var bK=bI.constructor;

if(this.hasInterface(bK,bJ)){return true;
}
try{qx.Interface.assertObject(bI,bJ);
return true;
}catch(x){}
try{qx.Interface.assert(bK,bJ,false);
return true;
}catch(I){}return false;
},getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;
this.$$instance=new this;
delete this.$$allowconstruct;
}return this.$$instance;
},genericToString:function(){return bp+this.classname+bo;
},$$registry:qx.Bootstrap.$$registry,__K:null,__L:null,__M:function(){},__N:function(){},__O:function(name,ba,bb,bc,bd,be,bf){var bi;

if(!bb&&true){bi=bc||{};
qx.Bootstrap.setDisplayNames(bi,name);
}else{var bi={};

if(bb){if(!bd){bd=this.__X();
}
if(this.__ba(bb,bf)){bi=this.__bb(bd,name,ba);
}else{bi=bd;
}if(ba==="singleton"){bi.getInstance=this.getInstance;
}qx.Bootstrap.setDisplayName(bd,name,"constructor");
}if(bc){qx.Bootstrap.setDisplayNames(bc,name);
var bj;

for(var i=0,a=qx.Bootstrap.getKeys(bc),l=a.length;i<l;i++){bj=a[i];
var bg=bc[bj];
{bi[bj]=bg;
};
}}}var bh=qx.Bootstrap.createNamespace(name,bi);
bi.name=bi.classname=name;
bi.basename=bh;
bi.$$type="Class";

if(ba){bi.$$classtype=ba;
}if(!bi.hasOwnProperty("toString")){bi.toString=this.genericToString;
}
if(bb){qx.Bootstrap.extendClass(bi,bd,bb,name,bh);
if(be){{};
bi.$$destructor=be;
qx.Bootstrap.setDisplayName(be,name,"destruct");
}}this.$$registry[name]=bi;
return bi;
},__P:function(T,U,V){var W,W;
{};

if(T.$$events){for(var W in U){T.$$events[W]=U[W];
}}else{T.$$events=U;
}},__Q:function(b,c,d){var e;

if(d===undefined){d=false;
}var f=b.prototype;

for(var name in c){e=c[name];
{};
e.name=name;
if(!e.refine){if(b.$$properties===undefined){b.$$properties={};
}b.$$properties[name]=e;
}if(e.init!==undefined){b.prototype["$$init_"+name]=e.init;
}if(e.event!==undefined){var event={};
event[e.event]="qx.event.type.Data";
this.__P(b,event,d);
}if(e.inheritable){qx.core.Property.$$inheritable[name]=true;

if(!f.$$refreshInheritables){qx.core.Property.attachRefreshInheritables(b);
}}
if(!e.refine){qx.core.Property.attachMethods(b,name,e);
}}},__R:null,__S:function(J,K,L,M,N){var O=J.prototype;
var Q,P;
qx.Bootstrap.setDisplayNames(K,J.classname+".prototype");

for(var i=0,a=qx.Bootstrap.getKeys(K),l=a.length;i<l;i++){Q=a[i];
P=K[Q];
{};
if(M!==false&&P instanceof Function&&P.$$type==null){if(N==true){P=this.__T(P,O[Q]);
}else{if(O[Q]){P.base=O[Q];
}P.self=J;
}{};
}O[Q]=P;
}},__T:function(G,H){if(H){return function(){var bA=G.base;
G.base=H;
var bz=G.apply(this,arguments);
G.base=bA;
return bz;
};
}else{return G;
}},__U:function(bL,bM){{};
var bN=qx.Interface.flatten([bM]);

if(bL.$$implements){bL.$$implements.push(bM);
bL.$$flatImplements.push.apply(bL.$$flatImplements,bN);
}else{bL.$$implements=[bM];
bL.$$flatImplements=bN;
}},__V:function(bO){var name=bO.classname;
var bP=this.__bb(bO,name,bO.$$classtype);
for(var i=0,a=qx.Bootstrap.getKeys(bO),l=a.length;i<l;i++){bQ=a[i];
bP[bQ]=bO[bQ];
}bP.prototype=bO.prototype;
var bS=bO.prototype;

for(var i=0,a=qx.Bootstrap.getKeys(bS),l=a.length;i<l;i++){bQ=a[i];
var bT=bS[bQ];
if(bT&&bT.self==bO){bT.self=bP;
}}for(var bQ in this.$$registry){var bR=this.$$registry[bQ];

if(!bR){continue;
}
if(bR.base==bO){bR.base=bP;
}
if(bR.superclass==bO){bR.superclass=bP;
}
if(bR.$$original){if(bR.$$original.base==bO){bR.$$original.base=bP;
}
if(bR.$$original.superclass==bO){bR.$$original.superclass=bP;
}}}qx.Bootstrap.createNamespace(name,bP);
this.$$registry[name]=bP;
return bP;
},__W:function(bq,br,bs){{};

if(this.hasMixin(bq,br)){return;
}var bv=bq.$$original;

if(br.$$constructor&&!bv){bq=this.__V(bq);
}var bu=qx.Mixin.flatten([br]);
var bt;

for(var i=0,l=bu.length;i<l;i++){bt=bu[i];
if(bt.$$events){this.__P(bq,bt.$$events,bs);
}if(bt.$$properties){this.__Q(bq,bt.$$properties,bs);
}if(bt.$$members){this.__S(bq,bt.$$members,bs,bs,bs);
}}if(bq.$$includes){bq.$$includes.push(br);
bq.$$flatIncludes.push.apply(bq.$$flatIncludes,bu);
}else{bq.$$includes=[br];
bq.$$flatIncludes=bu;
}},__X:function(){function cb(){cb.base.apply(this,arguments);
}return cb;
},__Y:function(){return function(){};
},__ba:function(p,q){{};
if(p&&p.$$includes){var r=p.$$flatIncludes;

for(var i=0,l=r.length;i<l;i++){if(r[i].$$constructor){return true;
}}}if(q){var s=qx.Mixin.flatten(q);

for(var i=0,l=s.length;i<l;i++){if(s[i].$$constructor){return true;
}}}return false;
},__bb:function(t,name,u){var v;
var w=function(){var j=w;
{};
var h=j.$$original.apply(this,arguments);
if(j.$$includes){var g=j.$$flatIncludes;

for(var i=0,l=g.length;i<l;i++){if(g[i].$$constructor){g[i].$$constructor.apply(this,arguments);
}}}{};
return h;
};
{};
w.$$original=t;
t.wrapper=w;
return w;
}},defer:function(){var y,z,A;
{};
}});
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
(function(){var cb="div",ca="0px",bY="outline",bX="mshtml",bW="hideFocus",bV="none",bU="true",bT="qx.client",bS="16px",bR="840px",bv="left",bu="<tr>",bt="<option value=''></option>",bs="1px solid #AAA",br="'>",bq="value='",bp="#",bo="</option>",bn="qooxdoo logo",bm="change",ci="select",cj="</tr>",cg="",ch="clear:both",ce="Insert Table",cf="Color (Hex): ",cc="Georgia",cd="<p>This low-level widget can be used separately at ",ck="http://",cl="BgColor (Hex): ",bK="Indent More",bJ="Change font family",bM="demobrowser/demo/icons/htmlarea/format-fill-color.png",bL="Align Right",bO="Format Italic",bN="qx/icon/Oxygen/16/actions/format-text-underline.png",bQ="350px",bP='<h1>About</h1><p>qooxdoo (pronounced [ku:ksdu:]) is a comprehensive and innovative Ajax application framework. Leveraging object-oriented JavaScript allows developers to build impressive cross-browser applications. No <acronym title="HyperText Markup Language">HTML</acronym>, <acronym title="Cascading Style Sheets">CSS</acronym> nor <acronym title="Document Object Model">DOM</acronym> knowledge is needed. qooxdoo includes a platform-independent development tool chain, a state-of-the-art <acronym title="Graphical User Interface">GUI</acronym> toolkit and an advanced client-server communication layer. It is Open Source under an <acronym title="GNU Lesser General Public License">LGPL</acronym>/<acronym title="Eclipse Public License">EPL</acronym> dual <a href="http://qooxdoo.org/license" class="wikilink1" title="license">license</a>.</p>',bI="white",bH="buttons at the toolbar.</p>",a="demobrowser/demo/icons/htmlarea/format-list-ordered.png",b="qx/icon/Oxygen/16/actions/format-indent-more.png",c="Comic Sans MS",d="Tahoma",f="20px 20px",g="float",h="<h1>HtmlArea low-level widget</h1>",k="<td>First Row, First cell</td>",l="demobrowser/demo/icons/htmlarea/qooxdoo_logo.png",m="Align Left",cp="qx/icon/Oxygen/16/actions/format-justify-center.png",co="input",cn="Align Justify",cm="demobrowser/demo/icons/htmlarea/insert-text.png",ct="Insert Horizontal Ruler",cs="demobrowser/demo/icons/htmlarea/insert-horizontal-rule.png",cr="demobrowser/demo/icons/htmlarea/format-list-unordered.png",cq="HTML Code:",cv="Set Text Background Color",cu="Insert Link",L="on",M="You can play around with this widget by hitting the ",J="<td>Second Row, First cell</td>",K="</tbody>",P="Set Text Color",Q="demobrowser/demo/icons/htmlarea/format-text-color.png",N="traditional web pages / single-page applications.<br/> ",O="demobrowser/demo/icons/htmlarea/insert-table.png",H="qx/icon/Oxygen/16/actions/edit-undo.png",I="qx/icon/Oxygen/16/actions/edit-clear.png",u="Arial Black",t="Impact",w="Change font size",v="Link: ",q="Redo Last Undo Step",p="Format Bold",s="off",r="qx/icon/Oxygen/16/actions/format-text-strikethrough.png",o="br",n="marginRight",V="image",W="<option qxKeepFocus='on' qxSelectable='off'",X="click",Y="<option qxKeepFocus='on' qxSelectable='off' ",R="Remove Format",S="blank.html",T="qx/icon/Oxygen/16/actions/insert-image.png",U="<p style='margin-bottom:10px'><b>No UI-level code</b> is included in this demo.",ba="</table>",bb="<td>First Row, Second cell</td>",E="Insert HTML Code",D="qx/icon/Oxygen/16/actions/insert-link.png",C="Insert Ordered List",B="demobrowser.demo.bom.HtmlArea",A="qx/icon/Oxygen/16/actions/format-justify-left.png",z="Courier",y="Courier New",x="4px",G="qx/icon/Oxygen/16/actions/format-justify-right.png",F="qx/icon/Oxygen/16/actions/format-text-bold.png",bc="<td>Second Row, Second cell</td>",bd="Insert Image",be="qx/icon/Oxygen/16/actions/format-indent-less.png",bf="<tbody>",bg="Times New Roman",bh="Align Center",bi="qx/icon/Oxygen/16/actions/edit-redo.png",bj="Lucida Console",bk="innerHTML",bl="Undo Last Change",bz="qx/icon/Oxygen/16/actions/format-text-italic.png",by="Arial",bx="qx/icon/Oxygen/16/actions/format-justify-fill.png",bw="Verdana",bD="Indent Less",bC="Format Strikethrough",bB="Format Underline",bA="<table border='1'>",bF="Inserted Unordered List",bE="FontSize: ",bG="It is the foundation for the UI widget component.</p>";
qx.Class.define(B,{extend:qx.application.Native,members:{__Oh:null,__Oi:null,__Oj:null,__Ok:null,__Ol:null,main:function(){qx.application.Native.prototype.main.call(this);
this.__Oh=qx.bom.Element.create(cb);
qx.bom.element.Style.setStyles(this.__Oh,{margin:f});
var cO=qx.bom.Element.create(cb);
qx.bom.element.Style.setStyles(cO,{width:bR,padding:ca,margin:ca});
var cN=h+cd+N+bG+U+M+bH;
qx.bom.element.Attribute.set(cO,bk,cN);
this.__Oi=qx.bom.Element.create(cb);
qx.bom.element.Style.setStyles(this.__Oi,{width:bR,padding:ca,margin:ca,lineHeight:ca,border:bs});
this.__Oj=qx.bom.Element.create(cb);
qx.bom.element.Style.setStyles(this.__Oj,{width:bR,height:bQ,border:bs,borderTop:ca,backgroundColor:bI});
qx.dom.Element.insertEnd(this.__Oj,this.__Oh);
var cM=bP;
this.__Ok=new qx.bom.htmlarea.HtmlArea(this.__Oj,cM,null,S);
this.__Ov();
qx.dom.Element.insertBegin(this.__Oi,this.__Oh);
qx.dom.Element.insertBegin(cO,this.__Oh);
qx.dom.Element.insertBegin(this.__Oh,document.body);
},__Om:function(e){var cV=window.prompt(bE,cg);
this.setFontSize(parseInt(cV));
},__On:function(e){var cI=window.prompt(cf,bp);
this.setTextColor(cI);
},__Oo:function(e){var cL=window.prompt(cl,bp);
this.setTextBackgroundColor(cL);
},__Op:function(e){var cw={src:qx.util.ResourceManager.getInstance().toUri(l),border:0,title:bn,alt:bn};
this.insertImage(cw);
},__Oq:function(e){var cH=bA+bf+bu+k+bb+cj+bu+J+bc+cj+K+ba;
this.insertHtml(cH);
},__Or:function(e){var dd=window.prompt(v,ck);
this.insertHyperLink(dd);
},__Os:function(e){var cU=window.prompt(cq,cg);
this.insertHtml(cU);
},__Ot:function(){var cX=qx.bom.Element.create(cb);
qx.bom.element.Style.setStyles(cX,{"float":bv});
var da;
var cY=qx.bom.Element.create(ci,{title:bJ});

if(qx.core.Variant.isSet(bT,bX)){qx.bom.element.Attribute.set(cY,bW,bU);
}else{qx.bom.element.Style.set(cY,bY,bV);
}da=qx.bom.Collection.html(bt);
qx.dom.Element.insertEnd(da[0],cY);
var db=[d,bw,bg,by,u,y,z,cc,t,c,bj];
var cW;
var dc;

for(var i=0,j=db.length;i<j;i++){cW=W+bq+db[i]+br+db[i]+bo;
dc=qx.bom.Collection.html(cW);

if(qx.core.Variant.isSet(bT,bX)){qx.bom.element.Attribute.set(dc[0],bW,bU);
}else{qx.bom.element.Style.set(dc[0],bY,bV);
}qx.dom.Element.insertEnd(dc[0],cY);
}qx.event.Registration.addListener(cY,bm,function(e){var cF=e.getTarget();
var cG=cF.selectedIndex;

if(cG!=0){this.setFontFamily(cF.options[cG].value);
cF.options[0].selected=true;
}},this.__Ok);
qx.dom.Element.insertBegin(cY,cX);
return cX;
},__Ou:function(){var cQ=qx.bom.Element.create(cb);
qx.bom.element.Style.setStyles(cQ,{"marginRight":bS,"float":bv});
var cS;
var cR=qx.bom.Element.create(ci,{title:w});

if(qx.core.Variant.isSet(bT,bX)){qx.bom.element.Attribute.set(cR,bW,bU);
}else{qx.bom.element.Style.set(cR,bY,bV);
}cS=qx.bom.Collection.html(bt);
qx.dom.Element.insertEnd(cS[0],cR);
var cT;
var cP;

for(var i=1;i<=7;i++){cP=Y+bq+i+br+i+bo;
cT=qx.bom.Collection.html(cP);

if(qx.core.Variant.isSet(bT,bX)){qx.bom.element.Attribute.set(cT[0],bW,bU);
}else{qx.bom.element.Style.set(cT[0],bY,bV);
}qx.dom.Element.insertEnd(cT[0],cR);
}qx.event.Registration.addListener(cR,bm,function(e){var cJ=e.getTarget();
var cK=cJ.selectedIndex;

if(cK!=0){this.setFontSize(cJ.options[cK].value);
cJ.options[0].selected=true;
}},this.__Ok);
qx.dom.Element.insertBegin(cR,cQ);
return cQ;
},__Ov:function(){var cy=[{bold:{text:p,image:F,action:this.__Ok.setBold},italic:{text:bO,image:bz,action:this.__Ok.setItalic},underline:{text:bB,image:bN,action:this.__Ok.setUnderline},strikethrough:{text:bC,image:r,action:this.__Ok.setStrikeThrough},removeFormat:{text:R,image:I,action:this.__Ok.removeFormat}},{alignLeft:{text:m,image:A,action:this.__Ok.setJustifyLeft},alignCenter:{text:bh,image:cp,action:this.__Ok.setJustifyCenter},alignRight:{text:bL,image:G,action:this.__Ok.setJustifyRight},alignJustify:{text:cn,image:bx,action:this.__Ok.setJustifyFull}},{fontFamily:{custom:this.__Ot},fontSize:{custom:this.__Ou},fontColor:{text:P,image:Q,action:this.__On},textBackgroundColor:{text:cv,image:bM,action:this.__Oo}},{indent:{text:bK,image:b,action:this.__Ok.insertIndent},outdent:{text:bD,image:be,action:this.__Ok.insertOutdent}},{insertImage:{text:bd,image:T,action:this.__Op},insertTable:{text:ce,image:O,action:this.__Oq},insertLink:{text:cu,image:D,action:this.__Or},insertHTML:{text:E,image:cm,action:this.__Os},insertHR:{text:ct,image:cs,action:this.__Ok.insertHorizontalRuler}},{ol:{text:C,image:a,action:this.__Ok.insertOrderedList},ul:{text:bF,image:cr,action:this.__Ok.insertUnorderedList}},{undo:{text:bl,image:H,action:this.__Ok.undo},redo:{text:q,image:bi,action:this.__Ok.redo}}];
var cA,cE,cx,cC;

for(var i=0,j=cy.length;i<j;i++){cE={};
cE[n]=i==j-1?ca:bS;
cE[g]=bv;
cA=qx.bom.Element.create(cb);
qx.bom.element.Style.setStyles(cA,cE);

for(var cB in cy[i]){var cD=cy[i][cB];

if(cD.custom){cx=cD.custom.call(this);
}else{var cz=qx.util.AliasManager.getInstance().resolve(cD.image);
cC={type:V,src:qx.util.ResourceManager.getInstance().toUri(cz),title:cD.text,qxKeepFocus:L,qxSelectable:s};
cx=qx.bom.Element.create(co,cC);
qx.bom.element.Style.setStyles(cx,{width:bS,height:bS,padding:x});

if(qx.core.Variant.isSet(bT,bX)){qx.bom.element.Attribute.set(cx,bW,bU);
}else{qx.bom.element.Style.set(cx,bY,bV);
}qx.event.Registration.addListener(cx,X,cD.action,this.__Ok);
}qx.dom.Element.insertEnd(cx,cA);
}qx.dom.Element.insertEnd(cA,this.__Oi);
}qx.dom.Element.insertEnd(qx.bom.Element.create(o,{style:ch}),this.__Oi);
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
(function(){var ed="qx.client",ec="",eb="mshtml",ea="gecko",dY="qx.event.type.Data",dX="id",dW="qx.event.type.Event",dV=" ",dU="Boolean",dT="__elementToFocus__",cC="opera",cB="enter",cA='"',cz="left",cy="text-align",cx="right",cw="qx.bom.htmlarea.HtmlArea.debug",cv="on",cu="br",ct="inserthtml",ek="italic",em="body",ei="underline",ej="old_id",eg="b",eh="loadingError",ee="contextmenu",ef="pageup",en="backgroundcolor",eo="end",dz="div",dy='On',dB="gecko|webkit",dA="redo",dD="i",dC="backspace",dF="bold",dE="mouseup",dx="y",dw="style",x="backgroundimage",y="100%",z='</head>',A='<head>',B="k",C=":",D='redo',E='Off',F='">',G="down",eD="font-family",eC="g",eB="keypress",eA=";",eH="undo",eG="text-decoration",eF="pagedown",eE="justify",eJ="center",eI="p",bz='</style>',bA="u",bx="focus",by="control",bD="click",bE='<style type="text/css">',bB="up",bC="blur",bv="font-size",bw="None",bb="'",ba="delete",bd="_moz_dirty",bc=">",W='</body></html>',V="line-through",Y="String",X="z",U="keydown",T="keyup",bK="focusout",bL="webkit",bM="mshtml|opera",bN="-",bG='</span>',bH="backgroundColor",bI="li",bJ='undo',bO="<br class='webkit-block-placeholder' />",bP="textbackgroundcolor",bo="Function",bn="fontSize",bm="textcolor",bl="home",bk="<",bj="focused",bi="fontFamily",bh="load",bs='id="__elementToFocus__"',br="setUnderline",bQ="backgroundPosition",bR="<!--",bS=' size="',bT='/www.w3.org/1999/xhtml" xml:lang="en" lang="en">',bU="'>",bV='underline',bW='bold',bX="&copy;",bY="ul",ca="cursorContext",cK="readyAfterInvalid",cJ="styleWithCSS",cI="span",cH=" />",cO="setBold",cN="P",cM="<P>&nbsp;</P>",cL="</",cS="qx/static/blank.html",cR="&gt;",dr='="',ds="paddingLeft",dp="X",dq="inserthorizontalrule",dm='<p>',dn="#",dk="backgroundRepeat",dl="insertimage",dt="a",du="&amp;",dJ="removeformat",dI="marginLeft",dL="ready",dK="<p>&nbsp;</p>",dN='DOCTYPE html PUBLIC "-/',dM="mshtml|webkit",dP="outline",dO=" html, body {overflow-x: visible; } ",dH='<body>',dG="insertorderedlist",ev='body { font-size:100.01%; font-family:Verdana, Geneva, Arial, Helvetica, sans-serif; background-color:transparent; overflow:visible; background-image:none; margin:0px; padding:5px; } ',ew="hideFocus",ey="none",ez='/DTD XHTML 1.0 Transitional/',er='<html xmlns="http:/',es="S",et="fontsize",eu="setItalic",ep="font-style",eq="marginBottom",w="xhtml",v="focusOut",u="justifyleft",t='</p>',r="paddingTop",q='</font>',p='<title></title><meta http-equiv="Content-type" content="text/html; charset=UTF-8" />',o="Control",n='<span style="font-family:',m='/W3C/',J="placeholder",K='size',H="backgroundImage",I="marginTop",N="> ",O=" { ",L="__tQ",M="font-weight",Q="LI",R='italic',cW='<!',cQ="off",de="\ufeff",da='<font ',cF="&quot;",cD="marginRight",bf="STYLE",cG="justifyfull",bq="inserthyperlink",bp="<br />",ck='html { margin:0px; padding:0px; } ',cl="<br>",cn='/EN" "http:/',co="justifycenter",cp="<br /><div id='placeholder'></div>",cq="useCSS",cr="object",cs="strikethrough",ch="indent",ci="text/html",cE="true",dd="1.9",dc='',db=' style="',di="messengerContent",dh="Integer",dg="insertunorderedlist",df="Text",cY="&lt;",cX='<br _moz_editor_bogus_node="TRUE" _moz_dirty=""/>',P='<br/><div class="placeholder"></div>',bu="selectall",bt="transparent",cP=" SCRIPT STYLE DIV SPAN TR TD TBODY TABLE EM STRONG FONT A P B I U STRIKE H1 H2 H3 H4 H5 H6 ",bF="justifyright",cV='/www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">',cU="ol",cT="//text()[string-length(normalize-space(.))>0]",be="outdent",dj="about:blank",S="fontfamily",bg="<body style='",cb="qx.bom.htmlarea.HtmlArea",cc="paddingBottom",cd="Verdana",ce="$",cf="-->",cg=" }",dv="paddingRight",cj='html { width:100%; height:100%; margin:0px; padding:0px; overflow-y:auto; overflow-x:auto; } ',dR="Off",dQ='p { margin:0px; padding:0px; }',dS='body { font-size: 100.01%; font-family:Verdana, Geneva, Arial, Helvetica, sans-serif; width:100%; height:100%; background-color:transparent; overflow:auto; background-image:none; margin:0px; padding:5px; } ';
qx.Class.define(cb,{extend:qx.core.Object,construct:function(il,im,io,ip){qx.core.Object.call(this);
var ir=ip||qx.util.ResourceManager.getInstance().toUri(cS);
this.__ul(il);
this.__um();
this._createAndAddIframe(ir);
this._addIframeLoadListener();
this.__tO=qx.bom.htmlarea.HtmlArea.__tR(io);
if(qx.lang.Type.isString(im)){this.__tP=im;
}if(qx.core.Variant.isSet(ed,cC)){var iq=qx.dom.Node.getWindow(il);
var is=qx.event.Registration.getManager(iq).getHandler(qx.event.handler.Keyboard);
is._keyCodeToIdentifierMap[35]=dn;
is._keyCodeToIdentifierMap[45]=bN;
is._keyCodeToIdentifierMap[112]=cN;
is._keyCodeToIdentifierMap[115]=es;
is._keyCodeToIdentifierMap[120]=dp;
}this.__tQ=this.__uz();
},events:{"load":dW,"loadingError":dY,"messengerContent":dY,"cursorContext":dY,"ready":dW,"readyAfterInvalid":dW,"focused":dW,"focusOut":dW,"contextmenu":dY,"undoRedoState":dY},statics:{simpleLinebreak:cl,EMPTY_DIV:"<div></div>",GetWordsRegExp:/([^\u0000-\u0040\u005b-\u005f\u007b-\u007f]|['])+/g,CleanupWordsRegExp:/[\u0000-\u0040]/gi,hotkeyInfo:{bold:{method:cO},italic:{method:eu},underline:{method:br},undo:{method:eH},redo:{method:dA}},__tR:function(eS){if(eS==null||eS==ec){return ec;
}else if(typeof eS==cr){var eT=ec;

for(var i in eS){eT+=i+O+eS[i]+cg;
}return eT;
}else{return eS;
}},__tS:function(fm){var fn={};
var a=fm.split(eA);
var i;

for(i=0;i<a.length;i++){var fo=a[i],fp=fo.indexOf(C);

if(fp===-1){continue;
}var name=qx.lang.String.trim(fo.substring(0,fp));
var fq=qx.lang.String.trim(fo.substring(fp+1,fo.length));

if(name&&fq){fn[name]=fq;
}}return fn;
},__tT:function(fK,fL,fM,fN){var fS=[];

switch(fK.nodeType){case 1:case 11:var i;
var fQ=fK.tagName.toLowerCase();
var fU={};
var fO={};
var closed=(!(fK.hasChildNodes()||qx.bom.htmlarea.HtmlArea.__tU(fK)));

if(fL){if(qx.core.Variant.isSet(ed,eb)){if(fQ==dz&&fK.className&&fK.className==J){for(i=fK.firstChild;i;i=i.nextSibling){fS.push(qx.bom.htmlarea.HtmlArea.__tT(i,true,fM,fN));
}return fS.join(ec);
}}var fT=fK.attributes;
var fR=fT.length;
var a;

if(qx.core.Variant.isSet(ed,ea)){if(fQ==cI&&fR==1&&fT[0].name==bd&&fK.childNodes.length==0){return ec;
}}
for(i=0;i<fR;i++){a=fT[i];
if(!a.specified){continue;
}var name=qx.dom.Node.getName(a);
var fV=a.nodeValue;
if(/(_moz|contenteditable)/.test(name)){continue;
}
if(name!=dw){if(qx.bom.client.Engine.MSHTML){if(name==dX&&fK.getAttribute(ej)){fV=fK.getAttribute(ej);
}else if(!isNaN(fV)){fV=fK.getAttribute(name);
}else{fV=a.nodeValue;
}}else{fV=a.nodeValue;
}}else{fV=fK.style.cssText;
}
if(/(_moz|^$)/.test(fV)){continue;
}if(name==ej){continue;
}if(!fV){continue;
}if(name==dX&&fV==dT){continue;
}if(name.charAt(0)===ce){continue;
}fU[name]=fV;
}if(fU.style!==undefined){fO=qx.bom.htmlarea.HtmlArea.__tS(fU.style);
delete fU.style;
}if(fN){var fP={domElement:fK,tag:fQ,attributes:fU,styles:fO};
fN(fP);
fP.domElement=null;
fQ=fP.tag;
}if(fQ){fS.push(bk,fQ);
for(var name in fU){var fV=fU[name];
fS.push(dV,name,dr,fV.toString().replace(new RegExp(cA,eC),bb),cA);
}if(!qx.lang.Object.isEmpty(fO)){fS.push(db);

for(var name in fO){var fV=fO[name];
fS.push(name,C,fV.toString().replace(new RegExp(cA,eC),bb),eA);
}fS.push(cA);
}fS.push(closed?cH:bc);
}}for(i=fK.firstChild;i;i=i.nextSibling){fS.push(qx.bom.htmlarea.HtmlArea.__tT(i,true,fM,fN));
}if(fL&&!closed&&fQ){fS.push(cL,fQ,bc);
}break;
case 3:fS.push(fM?fK.data:qx.bom.htmlarea.HtmlArea.__tV(fK.data));
break;
case 8:fS.push(bR,fK.data,cf);
break;
}return fS.join(ec);
},closingTags:cP,__tU:function(eU){return (qx.bom.htmlarea.HtmlArea.closingTags.indexOf(dV+eU.tagName+dV)!=-1);
},__tV:function(s){s=s.replace(/&/ig,du);
s=s.replace(/</ig,cY);
s=s.replace(/>/ig,cR);
s=s.replace(/\x22/ig,cF);
s=s.replace(/\xA9/ig,bX);
return s;
},isBlockNode:function(eM){if(!qx.dom.Node.isElement(eM)){return false;
}eM=qx.dom.Node.getName(eM);
return /^(body|form|textarea|fieldset|ul|ol|dl|li|div|p|h[1-6]|quote|pre|table|thead|tbody|tfoot|tr|td|th|iframe|address|blockquote)$/.test(eM);
},isParagraphParent:function(gN){if(!qx.dom.Node.isElement(gN)){return false;
}gN=qx.dom.Node.getName(gN);
return /^(body|td|th|caption|fieldset|div)$/.test(gN);
},isHeadlineNode:function(ie){if(!qx.dom.Node.isElement(ie)){return false;
}var ig=qx.dom.Node.getName(ie);
return /^h[1-6]$/.test(ig);
}},properties:{contentType:{check:Y,init:w},messengerMode:{check:dU,init:false},insertParagraphOnLinebreak:{check:dU,init:true},insertLinebreakOnCtrlEnter:{check:dU,init:true},postProcess:{check:bo,nullable:true,init:null},useUndoRedo:{check:dU,init:true},nativeContextMenu:{check:dU,init:false},defaultFontFamily:{check:Y,init:cd},defaultFontSize:{check:dh,init:4}},members:{__tW:null,__tX:false,__tY:false,__ua:false,__ub:false,__uc:false,__tQ:null,__ud:null,__ue:null,__uf:null,__ug:null,__tO:null,__uh:null,__ui:null,__uj:false,__uk:false,__ul:function(fd){if(qx.dom.Node.isElement(fd)&&qx.dom.Node.isNodeName(fd,dz)){this.__tW=fd;
}},_createAndAddIframe:function(id){this.__ug=qx.bom.Iframe.create();
qx.bom.Iframe.setSource(this.__ug,id);
if(qx.core.Variant.isSet(ed,eb)){qx.bom.element.Attribute.set(this.__ug,ew,cE);
}else{qx.bom.element.Style.set(this.__ug,dP,ey);
}qx.bom.element.Style.setStyles(this.__ug,{width:y,height:y});
qx.dom.Element.insertBegin(this.__ug,this.__tW);
},_getIframeDocument:function(){return qx.bom.Iframe.getDocument(this.__ug);
},_getIframeWindow:function(){return qx.bom.Iframe.getWindow(this.__ug);
},_addIframeLoadListener:function(){qx.event.Registration.addListener(this.__ug,bh,this._loaded,this);
},__um:function(){this.__uh={"xhtml":{doctype:cW+dN+m+ez+cn+cV,html:er+bT,meta:p,style:qx.core.Variant.select(ed,{"mshtml":ck+dS,"default":cj+ev}),contentStyle:dQ,body:dH,footer:W}};
},__tP:ec,getIframeObject:function(){return this.__ug;
},getCommandManager:function(){return this.__tQ;
},setValue:function(hX){if(qx.lang.Type.isString(hX)){this.__tP=hX;
var hY=this._getIframeDocument();

if(hY&&hY.body){hY.body.innerHTML=this.__un(hX);
}}},__un:function(eV){var eY=ec;

if(qx.core.Variant.isSet(ed,ea)){if(qx.bom.client.Browser.VERSION<=2){eY+=cX;
}}var fa=eV.length==0?de:ec;
var eX=qx.core.Variant.isSet(ed,dB)?bs:dc;
var eW=dm+n+this.getDefaultFontFamily()+F+da+eX+bS+this.getDefaultFontSize()+F+eY+eV+fa+q+bG+t;
return eW;
},getValue:function(){return this.__tP;
},getComputedValue:function(gJ){return this.getHtml(gJ);
},getCompleteHtml:function(){var gE=this.__uh[this.getContentType()];
var gD=gE.html+A+gE.meta+bE+gE.contentStyle+bz+z;
gD+=bg+this.__uo()+bU;
gD+=this.getHtml()+W;
return gD;
},__uo:function(){var hM=[bH,H,dk,bQ,bi,bn,I,eq,dI,cD,r,cc,ds,dv];
var hL=qx.bom.element.Style;
var hK=this.getContentBody();
var hP={};
var hO,hQ;
var hN=qx.bom.client.Engine.MSHTML?2:1;

for(var i=0,j=hM.length;i<j;i++){hO=hM[i];
hQ=hL.get(hK,hO,hN);

if(hQ!==undefined&&hQ!=ec){hP[hO]=hQ;
}}return qx.bom.element.Style.compile(hP);
},getContentDocument:function(){if(this.__tX){return this._getIframeDocument();
}},getContentBody:function(){if(this.__tX){return this._getIframeDocument().body;
}},getContentWindow:function(){if(this.__tX){return this._getIframeWindow();
}},getWords:function(gS){if(!gS){gS=this.getContentBody();
}
if(!gS){return [];
}var gU=gS.cloneNode(true);
gU.innerHTML=gU.innerHTML.replace(/>/gi,N);
gU.innerHTML=gU.innerHTML.replace(/\n/gi,dV);
gU.innerHTML=gU.innerHTML.replace(/<!--.*-->/gi,ec);
var gT=qx.core.Variant.isSet(ed,bM)?gU.innerText:gU.textContent;
var gV=gT.match(qx.bom.htmlarea.HtmlArea.GetWordsRegExp);
return !gV?[]:gV;
},getWordsWithElement:function(){var fg=this.getTextNodes();
var fk={};
var i,j,fl,fh,ff;

for(var i=0,fj=fg.length;i<fj;++i){fh=fg[i];
fl=fh.nodeValue.split(dV);

for(var j=0,fi=fl.length;j<fi;++j){ff=this._cleanupWord(fl[j]);

if(ff!=null&&ff.length>1){if(!fk[ff]){fk[ff]=[];
}fk[ff].push(fh);
}}}return fk;
},_cleanupWord:function(hR){if(!hR){return null;
}return hR.replace(qx.bom.htmlarea.HtmlArea.CleanupWordsRegExp,ec);
},getTextNodes:function(){return this._fetchTextNodes(this.getContentBody());
},_fetchTextNodes:function(eP){var eR=[];
var eQ;
if(eP.hasChildNodes){for(var i=0;i<eP.childNodes.length;i++){eQ=this._fetchTextNodes(eP.childNodes[i]);
qx.lang.Array.append(eR,eQ);
}}if(eP.nodeType==3){if(eP.nodeValue.length>1){eR.push(eP);
}}return eR;
},__up:0,__uq:function(){var gj=this._getIframeDocument();
if(!gj){this.__up++;

if(this.__up>5){this.error('cant load HtmlArea. Document is not available. '+gj);
this.fireDataEvent(eh);
}else{{};
qx.event.Timer.once(function(){this.__uq();
},this,0);
}}else{this.__up=0;
this._onDocumentIsReady();
}},_loaded:function(e){if(this.__ua){return;
}
if(this.__tY){this.__ur();
return;
}if(qx.core.Variant.isSet(ed,eb)){this.__uq();
}else{this._onDocumentIsReady();
}},isReady:function(){return this.__tX;
},_onDocumentIsReady:function(){var fx=new qx.bom.htmlarea.manager.Command(this);

if(this.getUseUndoRedo()){fx=new qx.bom.htmlarea.manager.UndoRedo(fx,this);
}this.__ua=true;
if(qx.core.Variant.isSet(ed,eb)){this.setEditable(true);
}this.__uu();

if(!qx.core.Variant.isSet(ed,cC)){this.__uv();
}if(!qx.core.Variant.isSet(ed,eb)){this.setEditable(true);
}this.__tX=true;
this.__tQ=fx;
fx.setContentDocument(this._getIframeDocument());
this.__uA();
if(qx.core.Variant.isSet(ed,cC)){this.__uv();
}this.fireEvent(dL);
},forceEditable:qx.core.Variant.select(ed,{"gecko":function(){var gM=this._getIframeDocument();

if(gM){if(qx.bom.client.Engine.VERSION>=dd){gM.designMode=dR;
gM.body.contentEditable=false;
gM.body.contentEditable=true;
}else{gM.body.contentEditable=true;
this.__uB(true);
}}},"default":qx.lang.Function.empty}),invalidateEditor:qx.core.Variant.select(ed,{"gecko":function(){this.__ua=false;
this.__tX=false;
this.__tY=true;
},"default":function(){}}),__ur:qx.core.Variant.select(ed,{"gecko":function(){this.__uu();
this.__uv();
this.__tQ.setContentDocument(this._getIframeDocument());
this.setEditable(true);
this.forceEditable();
this.__ua=true;
this.__tX=true;
this.__tY=false;
this.fireEvent(cK);
},"default":function(){}}),__us:function(fr){var ft=ec;

if(!fr){return ft;
}
try{var fs=fr.getAttribute(dw);

if(!fs){return ft;
}if(qx.core.Variant.isSet(ed,eb)){ft=fs.cssText;
}else{ft=fs;
}}catch(hT){this.error("can't extract style from elem. ");
}return ft;
},__ut:function(gO){var gP=qx.bom.client.Engine.GECKO?dO:ec;
var gQ=this.__uh[this.getContentType()];
var gR=A+gQ.meta+bE+gP+gQ.style+gQ.contentStyle+this.__tO+bz+z;
var content=gQ.body+gO;
return gQ.html+gR+content+gQ.footer;
},__uu:function(){var hH=this.__un(this.getValue());

if(qx.lang.Type.isString(hH)){var hG=this._getIframeDocument();

try{hG.open(ci,true);
hG.write(this.__ut(hH));
hG.close();
}catch(e){this.error("cant open document on source '"+qx.bom.Iframe.queryCurrentUrl(this.__ug)+"'",e);
this.fireDataEvent(eh,e);
}}},__uv:function(){this.__uw();
this.__uy();
this.__ux();
},__uw:function(){var gi=qx.event.Registration;
var gh=this._getIframeDocument();
gi.addListener(gh.body,eB,this._handleKeyPress,this);
gi.addListener(gh.body,T,this._handleKeyUp,this);
gi.addListener(gh.body,U,this._handleKeyDown,this);
},__ux:function(){var fH=qx.event.Registration;
var fF=this._getIframeDocument();
var fG=qx.bom.client.Engine.WEBKIT?this._getIframeWindow():fF.body;
fH.addListener(fG,bx,this._handleFocusEvent,this);
fH.addListener(fG,bC,this._handleBlurEvent,this);
fH.addListener(fF,bK,this._handleFocusOutEvent,this);
},__uy:function(){var gY=qx.event.Registration;
var gX=this._getIframeDocument();
var gW=qx.bom.client.Engine.MSHTML?bD:dE;
gY.addListener(gX.body,gW,this._handleMouseUpOnBody,this);
gY.addListener(gX.documentElement,gW,this._handleMouseUpOnDocument,this);
gY.addListener(gX.documentElement,ee,this._handleContextMenuEvent,this);
},__uz:function(){if(this.__ud==null){this.__ud={execute:function(ih,ii){this.stackedCommands=true;
this.commandStack.push({command:ih,value:ii});
},commandStack:[],stackedCommands:false};
}this.__ud.stackedCommands=false;
return this.__ud;
},__uA:function(){var eN=this.__ud;

if(eN!=null&&eN.stackedCommands){var eO=eN.commandStack;

if(eO!=null){for(var i=0,j=eO.length;i<j;i++){this.__tQ.execute(eO[i].command,eO[i].value);
}}}},__uB:function(ij){var ik=this._getIframeDocument();

if(this.__ua&&ik){try{if(qx.core.Variant.isSet(ed,ea)){ik.designMode=(ij!==false)?E:dy;
}ik.designMode=(ij!==false)?dy:E;
}catch(e){}}},setEditable:function(gG){if(this.__ua){this.__uB(true);
if(qx.core.Variant.isSet(ed,ea)){try{var gH=this._getIframeDocument();
gH.execCommand(cJ,false,true);
}catch(fv){try{var gH=this._getIframeDocument();
gH.execCommand(cq,false,false);
}catch(gI){if(!this.__tX){this.error("Failed to enable rich edit functionality");
this.fireDataEvent(eh,gI);
}else{throw new Error("Failed to enable rich edit functionality");
}}}}this.__ub=gG;
}},getEditable:function(){return this.__ub;
},isEditable:function(){return this.__ub;
},__uC:false,_handleKeyUp:function(e){var ga=e.getKeyIdentifier().toLowerCase();
this.__ue=e;

if(false&&qx.core.Setting.get(cw)==cv){this.debug(e.getType()+" | "+ga);
}if(qx.core.Variant.isSet(ed,dM)){if(this.__uC){switch(ga){case cB:if(this.getInsertLinebreakOnCtrlEnter()){if(qx.core.Variant.isSet(ed,bL)){this.__uD();
e.preventDefault();
e.stopPropagation();
}else{var gb=this.__uN(this.getSelection());

if(gb){gb.collapse(true);
gb.pasteHTML(P);
}}this.__uI();
}break;
case by:this.__uC=false;
return;
break;
}}}else if(qx.core.Variant.isSet(ed,ea)){switch(ga){case cz:case cx:case bB:case G:case ef:case eF:case ba:case eo:case dC:this.__uc=(this.getFocusNode()==this.getContentBody().firstChild);
break;
}}},__uD:function(){var fW=this.getSelection();
var fX=ec;
if(fW&&(fW.focusNode.textContent==ec||fW.focusNode.parentElement.tagName==Q)){fX=bO;
}this.__tQ.execute(ct,fX+qx.bom.htmlarea.HtmlArea.simpleLinebreak);
},_handleKeyDown:qx.core.Variant.select(ed,{"mshtml|webkit":function(e){var hd=e.getKeyIdentifier().toLowerCase();

if(false&&qx.core.Setting.get(cw)==cv){}if(this.__uC&&(hd==X||hd==dx||hd==eg||hd==bA||hd==dD||hd==B)){e.preventDefault();
e.stopPropagation();
}if(hd==by){this.__uC=true;
}},"default":function(e){}}),_handleKeyPress:function(e){var go=this.getContentDocument();
var gk=e.getKeyIdentifier().toLowerCase();
var gm=e.isCtrlPressed();
var gn=e.isShiftPressed();
this.__ue=e;

if(false&&qx.core.Setting.get(cw)==cv){this.debug(e.getType()+" | "+gk);
}if(this.__uj){var gv=!(qx.core.Variant.isSet(ed,eb)&&gk==cB)||!(qx.core.Variant.isSet(ed,ea)&&gk==cB);

if(gv){this.__uI();
this.__uj=false;
}}
switch(gk){case cB:if(!gn&&!gm&&this.getMessengerMode()){e.preventDefault();
e.stopPropagation();
var gt=new qx.event.type.Data(di,this.getComputedValue());
this.dispatchEvent(gt,true);
this.resetHtml();
}if(gm){if(!this.getInsertLinebreakOnCtrlEnter()){return;
}e.preventDefault();
e.stopPropagation();

if(qx.core.Variant.isSet(ed,ea)){if(this.__uL()){this.insertHtml(bp);
this.__uI();
return;
}this.insertHtml(cp);
}else if(qx.core.Variant.isSet(ed,cC)){var gu=this.getSelection();
var gp=this.__uN(gu);

if(gu&&gp){var gq=go.createElement(cu);
gp.collapse(true);
gp.insertNode(gq);
gp.collapse(true);
gp.selectNode(gq);
gu.addRange(gp);
gp.collapse(true);
}}this.__uI();
}if(qx.core.Variant.isSet(ed,eb)){if(!this.getInsertParagraphOnLinebreak()){if(this.__tQ.execute(ct,qx.bom.htmlarea.HtmlArea.simpleLinebreak)){this.__uI();
e.preventDefault();
e.stopPropagation();
}}}else if(qx.core.Variant.isSet(ed,ea)){if(this.getInsertParagraphOnLinebreak()&&!gn&&!gm){var gu=this.getSelection();

if(gu){var gl=gu.focusNode;
if(this.__uL()){this.__uI();
return;
}if(this.__uM()){this.__uI();
return;
}while(!qx.dom.Node.isNodeName(gl,em)){if(qx.dom.Node.isNodeName(gl,bI)){this.__uI();
return;
}gl=gl.parentNode;
}}this.__tQ.insertParagraphOnLinebreak();
e.preventDefault();
e.stopPropagation();
this.__uI();
this.__uj=true;
}}else if(qx.core.Variant.isSet(ed,bL)){if(this.getInsertParagraphOnLinebreak()&&gn){this.__uD();
e.preventDefault();
e.stopPropagation();
this.__uI();
}}break;
case bB:if(qx.bom.client.Engine.GECKO&&qx.bom.client.Engine.FULLVERSION<1.9&&gn){var gu=this.getSelection();
if(gu&&gu.focusNode==go.body.firstChild){if(this.__uc){if(gu.focusOffset!=0){gu.extend(gu.focusNode,0);
}}}}this.__uI();
break;
case bl:if(qx.bom.client.Engine.GECKO&&qx.bom.client.Engine.FULLVERSION<1.9){if(gm){var gu=this.getSelection();
if(gn){if(gu&&(gu.focusOffset!=0)||(gu.focusNode!=go.body.firstChild)){gu.extend(go.body.firstChild,0);
}}else{var gr=null;
var gs;
if(go){gr=go.evaluate(cT,go.body,null,XPathResult.ANY_TYPE,null);
}
if(gr&&gu){while(gs=gr.iterateNext()){if(gs&&gs.parentNode&&gs.parentNode.tagName!=bf){try{gu.extend(gs,0);

if(!this.isSelectionCollapsed()){gu.collapseToStart();
}}catch(e){}break;
}}}}}}this.__uI();
break;
case cz:case cx:case G:case ef:case eF:case ba:case eo:case dC:this.__uI();
break;
case eg:if(gm){this.__uE(bW,true);
}break;
case dD:case B:if(gm){this.__uE(R,true);
}break;
case bA:if(gm){this.__uE(bV,true);
}break;
case X:if(gm&&!gn){this.__uE(bJ,true);
}else if(gm&&gn){this.__uE(D,true);
}break;
case dx:if(gm){this.__uE(D,true);
}break;
case dt:if(gm){this.selectAll();
}break;
}this.__ue=null;
},__uE:function(he,hf){var hh=null;
var hg=qx.bom.htmlarea.HtmlArea.hotkeyInfo;

if(hg[he]){hh=hg[he].method;
}
if(hh!=null&&this[hh]){this[hh]();

if(hf){this.__ue.preventDefault();
this.__ue.stopPropagation();
}
if(this.isSelectionCollapsed()){this.__uj=true;
}this.__uI();
}},_handleFocusEvent:function(e){this.__uf=null;

if(qx.core.Variant.isSet(ed,dB)){var ia=this.getContentDocument().getElementById(dT);

if(ia){qx.bom.element.Attribute.reset(ia,dX);
}}this.fireEvent(bj);
},_handleBlurEvent:function(e){this.__tP=this.getComputedValue();
},_handleFocusOutEvent:function(e){this.__uC=false;

if(this.__uf==null){this.__uf=this.getSelectedHtml();
}this.fireEvent(v);
},_handleMouseUpOnBody:function(e){if(false&&qx.core.Setting.get(cw)==cv){this.debug("handleMouse "+e.getType());
}this.__uk=true;
this.__uI();
},_handleMouseUpOnDocument:qx.core.Variant.select(ed,{"mshtml":qx.lang.Function.empty,"default":function(e){if(!this.__uk){qx.bom.Element.activate(this.getContentBody());
}this.__uk=false;
}}),_handleContextMenuEvent:function(e){if(!this.getNativeContextMenu()){var ge=e.getViewportLeft();
var gd=e.getViewportTop();
var gf=qx.bom.element.Location.getLeft(this.__tW)+ge;
var gg=qx.bom.element.Location.getTop(this.__tW)+gd;
var gc={x:gf,y:gg,relX:ge,relY:gd,target:e.getTarget()};
e.preventDefault();
e.stopPropagation();
qx.event.Timer.once(function(){this.fireDataEvent(ee,gc);
},this,0);
}},isLoaded:function(){return this.__ua;
},insertHtml:function(hI){return this.__tQ.execute(ct,hI);
},removeFormat:function(){return this.__tQ.execute(dJ);
},setBold:function(){return this.__tQ.execute(dF);
},setItalic:function(){return this.__tQ.execute(ek);
},setUnderline:function(){return this.__tQ.execute(ei);
},setStrikeThrough:function(){return this.__tQ.execute(cs);
},setFontSize:function(eK){return this.__tQ.execute(et,eK);
},setFontFamily:function(gz){return this.__tQ.execute(S,gz);
},setTextColor:function(fb){return this.__tQ.execute(bm,fb);
},setTextBackgroundColor:function(hB){return this.__tQ.execute(bP,hB);
},setJustifyLeft:function(){return this.__tQ.execute(u);
},setJustifyCenter:function(){return this.__tQ.execute(co);
},setJustifyRight:function(){return this.__tQ.execute(bF);
},setJustifyFull:function(){return this.__tQ.execute(cG);
},insertIndent:function(){return this.__tQ.execute(ch);
},insertOutdent:function(){return this.__tQ.execute(be);
},insertOrderedList:function(){return this.__tQ.execute(dG);
},insertUnorderedList:function(){return this.__tQ.execute(dg);
},insertHorizontalRuler:function(){return this.__tQ.execute(dq);
},insertImage:function(hD){return this.__tQ.execute(dl,hD);
},insertHyperLink:function(fc){return this.__tQ.execute(bq,fc);
},removeBackgroundColor:function(){this.__tQ.execute(en,bt);
},setBackgroundColor:function(fJ){this.__tQ.execute(en,fJ);
},removeBackgroundImage:function(){this.__tQ.execute(x);
},setBackgroundImage:function(hU,hV,hW){return this.__tQ.execute(x,[hU,hV,hW]);
},selectAll:function(){return this.__tQ.execute(bu);
},undo:function(){if(this.getUseUndoRedo()){return this.__tQ.execute(eH);
}else{return true;
}},redo:function(){if(this.getUseUndoRedo()){return this.__tQ.execute(dA);
}else{return true;
}},resetHtml:function(){var gA=this._getIframeDocument();
while(gA.body.firstChild){gA.body.removeChild(gA.body.firstChild);
}if(qx.bom.client.Engine.GECKO){gA.body.innerHTML=dK;
}else if(qx.bom.client.Engine.WEBKIT){var gB=this.getSelection();
var gC=gA.createRange();

if(gC&&gB){gB.addRange(gC);
}}},getHtml:function(b){var c=this._getIframeDocument();

if(c==null){return null;
}return qx.bom.htmlarea.HtmlArea.__tT(c.body,false,b,this.getPostProcess());
},containsOnlyPlaceholder:qx.core.Variant.select(ed,{"mshtml":function(){var fI=this._getIframeDocument();
return (fI.body.innerHTML==cM);
},"default":qx.lang.Function.returnFalse}),_selectElement:function(fC){var fE=this.getContentWindow().getSelection();
var fD=this.getContentDocument().createRange();
fD.setStart(fC,0);
fE.removeAllRanges();
fE.addRange(fD);
},focusContent:qx.core.Variant.select(ed,{"gecko":function(){var fA=this.getContentDocument();
var fz=fA.getElementById(dT);
this.getContentWindow().focus();
qx.bom.Element.focus(this.getContentBody());

if(fz){this._selectElement(fz);
}else{this.__uF();
}},"webkit":function(){qx.bom.Element.focus(this.getContentWindow());
qx.bom.Element.focus(this.getContentBody());
var eL=this.getContentDocument().getElementById(dT);

if(eL){qx.bom.element.Attribute.reset(eL,dX);
}this.__uF();
},"opera":function(){qx.bom.Element.focus(this.getContentWindow());
qx.bom.Element.focus(this.getContentBody());
this.__uF();
},"default":function(){qx.bom.Element.focus(this.getContentBody());
this.__uF();
}}),__uF:function(){if(!this.__uG()){this.__uH();
}},__uG:qx.core.Variant.select(ed,{"gecko":function(){var fy=this.getContentBody().childNodes;

if(fy.length==0){return false;
}else if(fy.length==1){return !(fy[0]&&qx.dom.Node.isNodeName(fy[0],cu)&&qx.bom.element.Attribute.get(fy[0],bd)!=null);
}else{return true;
}},"webkit":function(){var it=this.getContentBody().childNodes;

if(it.length==0){return false;
}else if(it.length==1){return !(it[0]&&qx.dom.Node.isNodeName(it[0],cu));
}else{return true;
}},"default":function(){var fB=this.getContentBody().childNodes;

if(fB.length==0){return false;
}else if(fB.length==1){return !(fB[0]&&qx.dom.Node.isNodeName(fB[0],eI)&&fB[0].firstChild==null);
}else{return true;
}}}),__uH:qx.core.Variant.select(ed,{"gecko|webkit":function(){this.getContentDocument().body.innerHTML=this.__un(ec);
var fw=this.getContentDocument().getElementById(dT);
qx.bom.element.Attribute.reset(fw,dX);
this._selectElement(fw);
},"default":function(){var fY=qx.dom.Hierarchy.getFirstDescendant(this.getContentBody());

if(qx.dom.Node.isNodeName(fY,eI)){qx.bom.element.Style.set(fY,eD,this.getDefaultFontFamily());
qx.bom.element.Style.set(fY,bv,this.getDefaultFontSize());
}}}),getContextInformation:function(){return this.__uJ();
},__uI:function(){qx.event.Timer.once(function(e){var fu=this.__uJ();
this.fireDataEvent(ca,fu);
},this,200);
},__uJ:function(){if(this._processingExamineCursorContext||this.getEditable()==false){return;
}this._processingExamineCursorContext=true;

if(!this.__uG()){this.__uH();
}var hl=this.getFocusNode();

if(hl==null){return;
}
if(qx.dom.Node.isText(hl)){hl=hl.parentNode;
}var hp=this._getIframeDocument();
var hy=qx.core.Variant.isSet(ed,eb)?hl.currentStyle:hp.defaultView.getComputedStyle(hl,null);
var hs=false;
var hi=false;
var hn=false;
var hm=false;
var ht=false;
var hx=false;
var ho=false;
var hz=false;
var hk=false;
var hv=false;
var hw=null;
var hA=null;
var hr=null;

if(hy!=null){if(qx.core.Variant.isSet(ed,eb)){hi=hy.fontStyle==ek;
hn=hy.textDecoration.indexOf(ei)!==-1;
hm=hy.textDecoration.indexOf(V)!==-1;
hw=hy.fontSize;
hr=hy.fontFamily;
ho=hy.textAlign==cz;
hz=hy.textAlign==eJ;
hk=hy.textAlign==cx;
hv=hy.textAlign==eE;
}else{hi=hy.getPropertyValue(ep)==ek;
hn=hy.getPropertyValue(eG).indexOf(ei)!==-1;
hm=hy.getPropertyValue(eG).indexOf(V)!==-1;
hw=hy.getPropertyValue(bv);
hr=hy.getPropertyValue(eD);
ho=hy.getPropertyValue(cy)==cz;
hz=hy.getPropertyValue(cy)==eJ;
hk=hy.getPropertyValue(cy)==cx;
hv=hy.getPropertyValue(cy)==eE;
}
if(qx.core.Variant.isSet(ed,bM)){hs=hy.fontWeight==700;
}else{hs=hy.getPropertyValue(M)==dF||qx.dom.Node.isNodeName(hl,eg);
}}var hj=hl;
if(hj!=null&&hj.parentNode!=null&&!qx.dom.Node.isDocument(hj.parentNode)){while(hj!=null&&!qx.dom.Node.isNodeName(hj,em)){var hq=qx.dom.Node.getName(hj);

if(hq==cU){hx=true;
break;
}else if(hq==bY){ht=true;
break;
}
if(hA==null||hA==ec){hA=qx.bom.element.Attribute.get(hj,K);
}hj=hj.parentNode;
}}var hu={bold:hs?1:0,italic:hi?1:0,underline:hn?1:0,strikethrough:hm?1:0,fontSize:(hA==null)?hw:hA,fontFamily:hr,insertUnorderedList:ht?1:0,insertOrderedList:hx?1:0,justifyLeft:ho?1:0,justifyCenter:hz?1:0,justifyRight:hk?1:0,justifyFull:hv?1:0};
this._processingExamineCursorContext=false;
return hu;
},getSelection:qx.core.Variant.select(ed,{"mshtml":function(){return this._getIframeDocument()?this._getIframeDocument().selection:null;
},"default":function(){return this._getIframeWindow()?this._getIframeWindow().getSelection():null;
}}),isSelectionCollapsed:qx.core.Variant.select(ed,{"mshtml":function(){return this.getSelection()&&this.getSelection().type==bw;
},"default":function(){return this.getSelection()&&this.getSelection().isCollapsed;
}}),getSelectedText:qx.core.Variant.select(ed,{"mshtml":function(){return this.getRange()?this.getRange().text:ec;
},"default":function(){return this.getRange()?this.getRange().toString():ec;
}}),getSelectedHtml:function(){if(this.__uf!=null){return this.__uf;
}var hC=this.getRange();

if(!hC){return ec;
}else{return this.__uK(hC);
}},__uK:qx.core.Variant.select(ed,{"mshtml":function(ic){if(!ic){return ec;
}return ic.item?ic.item(0).outerHTML:ic.htmlText;
},"default":function(ha){var hb=this._getIframeDocument();

if(hb&&ha){try{var hc=hb.createElement(em);
hc.appendChild(ha.cloneContents());
return hc.innerHTML;
}catch(fe){}return ha+ec;
}return ec;
}}),clearSelection:qx.core.Variant.select(ed,{"mshtml":function(){var gL=this.getSelection();

if(gL){gL.empty();
}},"default":function(){var gF=this.getSelection();

if(gF){gF.collapseToStart();
}}}),__uL:qx.core.Variant.select(ed,{"gecko":function(){var gx=this.getSelection();
var gy=this.getFocusNode();
return gx&&this.isSelectionCollapsed()&&gy!=null&&qx.dom.Node.isText(gy)&&gx.anchorOffset<gy.length;
},"default":function(){return false;
}}),__uM:qx.core.Variant.select(ed,{"gecko":function(){return qx.dom.Node.isElement(this.getFocusNode());
},"default":function(){return false;
}}),getRange:function(){return this.__uN(this.getSelection());
},__uN:qx.core.Variant.select(ed,{"mshtml":function(hE){var hF=this._getIframeDocument();

if(hE){try{return hE.createRange();
}catch(gK){return hF?hF.body.createTextRange():null;
}}else{return hF?hF.body.createTextRange():null;
}},"default":function(d){var f=this._getIframeDocument();

if(d){try{return d.getRangeAt(0);
}catch(hJ){return f?f.createRange():null;
}}else{return f?f.createRange():null;
}}}),saveRange:qx.core.Variant.select(ed,{"mshtml":function(){this.__ui=this.getRange();
},"default":function(){}}),getSavedRange:qx.core.Variant.select(ed,{"mshtml":function(){return this.__ui;
},"default":function(){}}),resetSavedRange:qx.core.Variant.select(ed,{"mshtml":function(){this.__ui=null;
},"default":function(){}}),getFocusNode:qx.core.Variant.select(ed,{"mshtml":function(){var iu=this.getSelection();
var iv;

switch(iu.type){case df:case bw:iv=this.__uN(iu);

if(iv){iv.collapse(false);
return iv.parentElement();
}else{return null;
}break;
case o:iv=this.__uN(iu);

if(iv){try{iv.collapse(false);
}catch(ib){}return iv.item(0);
}else{return null;
}break;
default:return this._getIframeDocument().body;
}},"default":function(){var gw=this.getSelection();

if(gw&&gw.focusNode){return gw.focusNode;
}return this._getIframeDocument().body;
}})},settings:{"qx.bom.htmlarea.HtmlArea.debug":cQ},destruct:function(){try{var h=this._getIframeDocument();
var l=qx.event.Registration;
l.removeListener(h.body,eB,this._handleKeyPress,this);
l.removeListener(h.body,T,this._handleKeyUp,this);
l.removeListener(h.body,U,this._handleKeyDown,this);
var k=qx.bom.client.Engine.WEBKIT?this._getIframeWindow():h.body;
l.removeListener(k,bx,this._handleFocusEvent);
l.removeListener(k,bC,this._handleBlurEvent);
l.removeListener(h,bK,this._handleFocusOutEvent);
var g=qx.bom.client.Engine.MSHTML?bD:dE;
l.removeListener(h.body,g,this._handleMouseUpOnBody,this);
l.removeListener(h.documentElement,g,this._handleMouseUpOnDocument,this);
l.removeListener(h.documentElement,ee,this._handleContextMenuEvent,this);

if(qx.core.Variant.isSet(ed,eb)){qx.bom.Iframe.setSource(this.__ug,dj);
}}catch(hS){}this._disposeObjects(L);
this.__uh=this.__ug=this.__tW=this.__ud=null;
}});
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
(function(){var c="qx.event.handler.Iframe",b="load",a="iframe";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{load:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false,onevent:qx.event.GlobalError.observeMethod(function(l){qx.event.Registration.fireEvent(l,b);
})},members:{canHandleEvent:function(g,h){return g.tagName.toLowerCase()===a;
},registerEvent:function(d,e,f){},unregisterEvent:function(i,j,k){}},defer:function(m){qx.event.Registration.addHandler(m);
}});
})();
(function(){var e="qx.client",d="webkit",c="body",b="iframe",a="qx.bom.Iframe";
qx.Class.define(a,{statics:{DEFAULT_ATTRIBUTES:{onload:"qx.event.handler.Iframe.onevent(this)",frameBorder:0,frameSpacing:0,marginWidth:0,marginHeight:0,hspace:0,vspace:0,border:0,allowTransparency:true},create:function(y,z){var y=y?qx.lang.Object.clone(y):{};
var A=qx.bom.Iframe.DEFAULT_ATTRIBUTES;

for(var B in A){if(y[B]==null){y[B]=A[B];
}}return qx.bom.Element.create(b,y,z);
},getWindow:qx.core.Variant.select(e,{"mshtml|gecko":function(u){try{return u.contentWindow;
}catch(k){return null;
}},"default":function(n){try{var o=this.getDocument(n);
return o?o.defaultView:null;
}catch(C){return null;
}}}),getDocument:qx.core.Variant.select(e,{"mshtml":function(g){try{var h=this.getWindow(g);
return h?h.document:null;
}catch(D){return null;
}},"default":function(j){try{return j.contentDocument;
}catch(l){return null;
}}}),getBody:function(q){try{var r=this.getDocument(q);
return r?r.getElementsByTagName(c)[0]:null;
}catch(p){return null;
}},setSource:function(v,w){try{if(this.getWindow(v)&&qx.dom.Hierarchy.isRendered(v)){try{if(qx.core.Variant.isSet(e,d)&&qx.bom.client.Platform.MAC){var x=this.getContentWindow();

if(x){x.stop();
}}this.getWindow(v).location.replace(w);
}catch(m){v.src=w;
}}else{v.src=w;
}}catch(f){qx.log.Logger.warn("Iframe source could not be set!");
}},queryCurrentUrl:function(s){var t=this.getDocument(s);

try{if(t&&t.location){return t.location.href;
}}catch(i){}return null;
}}});
})();
(function(){var gb="qx.client",ga="",fY="legacy-font-size",fX="mshtml",fW="inserthtml",fV="span",fU='color',fT="text-decoration",fS=';',fR="__vg",fc="transparent",fb="p",fa="id",eY="InsertHtml",eX='">',eW="child",eV="gecko",eU="font-family",eT="text-align",eS='text-decoration',gi="BackColor",gj="FontSize",gg="/>",gh="<img ",ge="textDecoration",gf="</font>",gc="font-size",gd="underline",gk='|',gl="background-color",fA="backgroundRepeat",fz="font",fC=":",fB="='",fE=" ",fD=";",fG="px",fF="backgroundImage",fy="Control",fx="__paragraph__",dI=':',dJ="qx.bom.htmlarea.HtmlArea.debug",dK="none",dL="on",dM="backgroundPosition",dN="size",dO="' ",dP="__vh",dQ="string",dR="BODY",gp="undefined",go="backgroundColor",gn="_moz",gm="top",gt="formatBlock",gs="insertParagraph",gr="li",gq='<span style="',gv="__vA",gu="no-repeat",er=' <a href="',es="FONT",ep="__vw",eq="|top|bottom|center|left|right|right top|left top|left bottom|right bottom|",ev="__placeholder__",ew='font-family:',et="<p style='",eu="outdent",en='</a> ',eo="__vl",ea="InsertImage",dY="__resetHtml",ec="FontName",eb="blockquote",dV="style",dU="__vu",dX="qx.bom.htmlarea.manager.Command",dW="'><br class='webkit-block-placeholder' />",dT="__vm",dS="a",eC='"',eD="<span></span>",eE="type",eF="CreateLink",ey="__vj",ez="qx_link",eA="__vz",eB='"></span>',eG="Italic",eH="InsertUnorderedList",ek="body",ej="OL",ei='text-align:',eh="Bold",eg="ForeColor",ef="url(",ee='" ',ed="repeat repeat-x repeat-y no-repeat",em='</p>',el="<hr />",eI='<font style="',eJ="IMG",eK='<p id="',eL="StrikeThrough",eM="LI",eN="__getHtml",eO='>',eP='" size="',eQ="Indent",eR="HiliteColor",fg="br",ff="Copy",fe="</span>",fd="Paste",fk="__vc",fj="__vx",fi="RemoveFormat",fh="JustifyRight",fm="indent",fl='',ft='style="',fu="JustifyCenter",fr="color",fs="JustifyLeft",fp="__vy",fq="Underline",fn="SelectAll",fo="Cut",fv="line-through",fw=")",fK="href",fJ='<span id="',fM="UL",fL="JustifyFull",fO="_moz_dirty",fN="Outdent",fQ="webkit",fP="selectall",fI="InsertOrderedList",fH="__vv";
qx.Class.define(dX,{extend:qx.core.Object,construct:function(cU){qx.core.Object.call(this);
this.__uO=cU;
this.__uP=null;
this._commands=null;
this.__uW();
this.__uQ={"Bold":true,"Italic":true,"Underline":true,"StrikeThrough":true};
this.__uR=[10,12,16,18,24,32,48];
this.__uS=0;
},statics:{__uT:eq,__uU:ed},members:{__uP:null,__uO:null,__uV:false,__uQ:null,__uR:null,__uS:null,setContentDocument:function(dF){this.__uP=dF;
},getCommandObject:function(cI){if(this._commands[cI]){return this._commands[cI];
}else{return null;
}},__uW:function(){this._commands={bold:{useBuiltin:true,identifier:eh,method:null},italic:{useBuiltin:true,identifier:eG,method:null},underline:{useBuiltin:true,identifier:fq,method:null},strikethrough:{useBuiltin:true,identifier:eL,method:null},fontfamily:{useBuiltin:true,identifier:ec,method:null},fontsize:{useBuiltin:false,identifier:gj,method:dU},textcolor:{useBuiltin:true,identifier:eg,method:null},textbackgroundcolor:{useBuiltin:false,identifier:null,method:fH},backgroundcolor:{useBuiltin:false,identifier:null,method:ep},backgroundimage:{useBuiltin:false,identifier:null,method:fj},justifyleft:{useBuiltin:false,identifier:fs,method:fR},justifyright:{useBuiltin:false,identifier:fh,method:fR},justifycenter:{useBuiltin:false,identifier:fu,method:fR},justifyfull:{useBuiltin:false,identifier:fL,method:fR},indent:{useBuiltin:true,identifier:eQ,method:null},outdent:{useBuiltin:true,identifier:fN,method:null},copy:{useBuiltin:true,identifier:ff,method:null},cut:{useBuiltin:true,identifier:fo,method:null},paste:{useBuiltin:true,identifier:fd,method:null},insertorderedlist:{useBuiltin:false,identifier:fI,method:dP},insertunorderedlist:{useBuiltin:false,identifier:eH,method:dP},inserthorizontalrule:{useBuiltin:false,identifier:eY,method:dT},insertimage:{useBuiltin:false,identifier:ea,method:ey},inserthyperlink:{useBuiltin:false,identifier:eF,method:eo},selectall:{useBuiltin:false,identifier:fn,method:fp},selectedtext:{useBuiltin:false,identifier:null,method:eA},selectedhtml:{useBuiltin:false,identifier:null,method:gv},inserthtml:{useBuiltin:false,identifier:eY,method:fk},resethtml:{useBuiltin:false,identifier:null,method:dY},gethtml:{useBuiltin:false,identifier:null,method:eN},removeformat:{useBuiltin:true,identifier:fi,method:null}};
},execute:function(cV,cW){if(!this.__uO.isReady()){this.error("editor not ready! '"+cV+"':'"+cW+"'");
return false;
}cV=cV.toLowerCase();
cW=cW!=null?cW:null;
if(this._commands[cV]){var cX;
var cY=this._commands[cV];
if(!(qx.bom.client.Engine.WEBKIT&&(cV==fm||cV==eu))){if(this.__uX()){this.__uY();
}}if(cY.useBuiltin){cX=this.__va(cY.identifier,false,cW);
}else{if(cY.method!=null&&this[cY.method]){cX=this[cY.method].call(this,cW,cY);
}else{this.error("The method '"+cY.method+"' you calling to execute the command '"+cV+"' is not available!");
}}this.__uO.resetSavedRange();
return cX;
}else{this.error("Command "+cV+" is currently not supported!");
}},__uX:function(){var Node=qx.dom.Node;
var bi=this.__uO.getFocusNode();
var bl=false;
var bj=false;

if(bi){if(Node.isText(bi)){var bk=qx.dom.Hierarchy.getAncestors(bi);

for(var i=0,j=bk.length;i<j;i++){if(Node.isNodeName(bk[i],fb)||qx.bom.htmlarea.HtmlArea.isHeadlineNode(bk[i])){bl=true;
break;
}}}else if(Node.isNodeName(bi,ek)){bj=true;
}}return bj||!bl;
},__uY:function(){this.__va(gt,false,fb);
},__va:function(bU,bV,bW){try{var ca=this.__uP;
var bX=false;
var bY=this.__uO.getRange();
this.__uP.body.focus();
if(qx.core.Variant.isSet(gb,fX)){if(bU!=fP){bY.select();
if(((bY.text)&&(bY.text.length>0))||((bY.length==1)&&(bY.item(0))&&(bY.item(0).tagName==eJ))){ca=bY;
}else{ca=this.__uP;
}}if((qx.core.Variant.isSet(gb,fX))&&(this.__uQ[bU])){if(bY.text==ga){bX=true;
}}}var cb=ca.execCommand(bU,bV,bW);

if(bX&&bY.text!=ga){bY.collapse();
}
if(false&&qx.core.Setting.get(dJ)==dL){this.debug("execCommand "+bU+" with value "+bW+" succeded");
}this.__uV=false;
}catch(ho){if(false&&qx.core.Setting.get(dJ)==dL){this.debug("execCommand "+bU+" with value "+bW+" failed");
}return false;
}return cb;
},__vb:qx.core.Variant.select(gb,{"mshtml":function(){var b=this.__uO;
var a=b.getSavedRange()!=null?b.getSavedRange():b.getRange();
return a;
},"default":function(){return this.__uO.getRange();
}}),__vc:qx.core.Variant.select(gb,{"mshtml":function(gE,gF){var gI;
if(gE==qx.bom.htmlarea.HtmlArea.simpleLinebreak){return this.__vf();
}else{this.__uP.body.focus();
var gH=this.__uO.getSelection();
var gG=this.__vb();
if(gG&&gH&&gH.type!=fy){try{gG.pasteHTML(gE);
gG.collapse(false);
gG.select();
gI=true;
}catch(e){}}else{gI=false;
}this.__uO.resetSavedRange();
return gI;
}},"default":function(T,U){this.__uP.body.focus();
return this.__uP.execCommand(U.identifier,false,T);
}}),insertParagraphOnLinebreak:qx.core.Variant.select(gb,{"gecko":function(){var cj=this.__vp();
var cn=this.__vd(cj);
var cf=this.__vn(cj);
var ck=ev+Date.parse(new Date());
var cl=fx+Date.parse(new Date());
var cd=fl;
var ch=fJ+ck+eB;
cd+=ch;
cd+=eK+cl+ee+cn+eO;
cd+=cf+em;
this.__uO.getCommandManager().addUndoStep(fW,gs,this.getCommandObject(fW));
this.execute(fW,cd);
this.__ve();
qx.bom.element.Attribute.reset(this.__uP.getElementById(ck),fa);
var ci=this.__uP.getElementById(cl);

if(ci.previousSibling.innerHTML==ch){var cc=this.__vo();
var cg=this.__uP.createElement(fg);
var ce=this.__uP.createAttribute(fO);
ce.nodeValue=ga;
cg.setAttributeNode(ce);
var cm=this.__uP.createAttribute(eE);
cm.nodeValue=gn;
cg.setAttributeNode(cm);
ci.previousSibling.appendChild(cc);
ci.previousSibling.appendChild(cg);
}qx.bom.element.Attribute.reset(ci,fa);
return true;
},"webkit":function(){var B=this.getCurrentStyles();
var C=ga;
var E={"background-color":true,"text-align":true};
for(var D in B){if(E[D]){C+=D+fC+B[D]+fD;
}}this.__uO.insertHtml(et+C+dW);
},"default":qx.lang.Function.empty}),__vd:qx.core.Variant.select(gb,{"gecko":function(bs){var bx=ft;
var bw=bs.child;
if(bw[eT]){bx+=ei+bw[eT]+fS;
delete bs.child[eT];
}if(bw[eU]){bx+=ew+bw[eU]+fS;
delete bs.child[eU];
}var bv={"padding-top":true,"padding-bottom":true,"padding-left":true,"padding-right":true};
var bt={"margin-top":true,"margin-bottom":true,"margin-left":true,"margin-right":true};

for(var bu in bw){if(bv[bu]||bt[bu]){bx+=bu+dI+bw[bu]+fS;
delete bs.child[bu];
}}bx+=eC;
return bx;
},"default":function(){return ga;
}}),__ve:qx.core.Variant.select(gb,{"gecko":function(){var cv=this.__uO.getSelection();

if(!cv||!cv.focusNode){return;
}var co=cv.focusNode;
var ct=cv.focusNode;

while(!qx.dom.Node.isNodeName(ct,fb)){ct=ct.parentNode;
}var cs=ct.previousSibling.id;
var cw=ct.nextSibling?ct.nextSibling.id:null;

if(qx.lang.String.startsWith(cs,fx)&&cs==cw){var cu=ct.nextSibling;
var cq=this.__uO.getRange();
cq.selectNode(cu);
cv.addRange(cq);
var cp=qx.bom.htmlarea.HtmlArea.EMPTY_DIV;
this.__uO.getCommandManager().addUndoStep(fW,cp,this.getCommandObject(fW));
this.execute(fW,cp);
var cr=this.__uO.getRange();

if(co){while(co&&co.firstChild&&qx.dom.Node.isElement(co.firstChild)){co=co.firstChild;
}}cr.selectNode(co);
cv.addRange(cr);
cr.collapse(true);
}},"default":qx.lang.Function.empty}),__vf:qx.core.Variant.select(gb,{"mshtml":function(){var he=this.__uO.getRange();
if(he&&!qx.dom.Node.isNodeName(he.parentElement(),gr)){he.pasteHTML(qx.bom.htmlarea.HtmlArea.simpleLinebreak);
he.collapse(false);
he.select();
return true;
}return false;
},"default":function(){return false;
}}),__vg:function(bf,bg){var bh=qx.core.Variant.isSet(gb,fX)?this.__uO.getRange():this.__uP;
return bh.execCommand(bg.identifier,false,bf);
},__vh:function(gJ,gK){if(qx.core.Variant.isSet(gb,fX)){var gL=this.__uO.getFocusNode();
this.__vi(gL);
}this.__uP.body.focus();
var gM=this.__uP.execCommand(gK.identifier,false,gJ);

if(qx.core.Variant.isSet(gb,fQ)){var gL=this.__uO.getFocusNode();
this.__vi(gL.parentNode);
}return gM;
},__vi:function(cG){var cH=[];
var parent=cG.parentNode;

while(qx.dom.Node.isNodeName(parent,eb)){cH.push(parent);
parent=parent.parentNode;
}if(cH.length>0){parent.appendChild(cG);
parent.removeChild(cH[cH.length-1]);
}},__vj:qx.core.Variant.select(gb,{"gecko":function(da,db){if(da.src){this.__uP.execCommand(db.identifier,false,da.src);
delete da.src;
var dp=this.__uO.getSelection();
if(dp){var dn=dp.anchorNode;
var di=dp.anchorOffset;
var df=dn.childNodes[di-1];
var dl;

for(var dh in da){dl=this.__uP.createAttribute(dh);
dl.nodeValue=da[dh];
df.setAttributeNode(dl);
}var dg={"font":true,"span":true};
var dd=null;
var dk=true;
if(qx.dom.Node.isElement(df.previousSibling)&&dg[qx.dom.Node.getName(df.previousSibling)]){dd=df.previousSibling;
}else if(dg[qx.dom.Node.getName(df.parentNode)]){dd=df.parentNode;
dk=false;
}var de=this.__uP.createDocumentFragment();
var dq;

if(dk&&dd!=null){var dg=this.__vk(dd);
de.appendChild(dg.root);
dq=dg.inline;
}else{dq=this.__uP.createElement(fV);
de.appendChild(dq);
}var dm=this.__uP.createTextNode(ga);
dq.appendChild(dm);
var dj=df.parentNode;
if(df==dj.lastChild){dj.appendChild(de);
}else{dj.insertBefore(de,df.nextSibling);
}var dc=this.__uO.getRange();
dc.selectNodeContents(dq);
}return true;
}else{return false;
}},"mshtml":function(cJ,cK){var cO=false;
var cP=gh;

for(var cL in cJ){cP+=cL+fB+cJ[cL]+dO;
}cP+=gg;
var cM=this.__uO.getSelection();
var cN=this.__vb();
if(cM&&cM.type!=fy){try{cN.select();
cN.pasteHTML(cP);
cO=true;
}catch(e){}}this.__uO.resetSavedRange();
return cO;
},"default":function(ha,hb){if(ha.src){var hd=gh;

for(var hc in ha){hd+=hc+fB+ha[hc]+dO;
}hd+=gg;
return this.__uP.execCommand(eY,false,hd);
}else{return false;
}}}),__vk:function(V){while(V.firstChild&&V.firstChild.nodeType==1){V=V.firstChild;
}var ba=this.__vp(V);
var be,X,bc;
var W=ga;
var parent=null;
var bd=null;
var bb=ba.child;

while(bb){bd=this.__uP.createElement(bb[fY]?fz:fV);
X=this.__uP.createAttribute(dV);
bd.setAttributeNode(X);
for(var Y in bb){if(Y!=eW&&Y!=fY){W+=Y+fC+bb[Y]+fD;
}else if(Y==fY){bc=this.__uP.createAttribute(dN);
bc.nodeValue=bb[Y];
bd.setAttributeNode(bc);
}}X.nodeValue=W;

if(parent!=null){parent.appendChild(bd);
}else{be=bd;
}parent=bd;
bb=bb.child;
W=ga;
}return {root:be,inline:bd};
},__vl:qx.core.Variant.select(gb,{"gecko|opera":function(s,t){var z=this.__uO.getSelection();
var w=this.__uO.getRange();
if(z.isCollapsed){var v=ez+(++this.__uS);
var A=this.__uP.createElement(dS);
var x=this.__uP.createAttribute(fK);
var u=this.__uP.createAttribute(fa);
var y=this.__uP.createTextNode(s);
u.nodeValue=v;
A.setAttributeNode(u);
x.nodeValue=s;
A.setAttributeNode(x);
A.appendChild(y);
w.insertNode(A);
w.selectNode(A);
z.collapseToEnd();
return true;
}else{return this.__uP.execCommand(t.identifier,false,s);
}},"mshtml":function(bP,bQ){try{var bS;
var bR=this.__vb();
var bT=this.__uO;
var bR=bT.getSavedRange()!=null?bT.getSavedRange():bT.getRange();

if(bR!=null&&bR.text!=ga){bS=bR.execCommand(bQ.identifier,false,bP);
}else{bS=this.__vc(er+bP+eX+bP+en,bQ);
}this.__uO.resetSavedRange();
return bS;
}catch(e){{};
return false;
}},"default":function(gw,gx){return this.__uP.execCommand(gx.identifier,false,gw);
}}),__vm:function(c,d){var f=el;
if(qx.core.Variant.isSet(gb,eV)){f+=this.__vn();
}return this.__vc(f,d);
},__vn:function(bC){var bG=ga;
var bF=gq;
var bE=[];
var bJ=typeof bC!==gp?bC:this.__vp();
var bH=bJ.child;
var bI=false;
if(qx.lang.Object.isEmpty(bH)){return ga;
}
while(bH){bI=bH[fY]!=null;
bG+=bI?eI:bF;

for(var bD in bH){bG+=(bD!=eW&&bD!=fY)?bD+dI+bH[bD]+fS:ga;
}bG+=bI?eP+bH[fY]+eX:eX;
bE.unshift(bI?gf:fe);
bH=bH.child;
}if(bE.length==1&&bE[0]==gf){bG+=eD;
}for(var i=0,j=bE.length;i<j;i++){bG+=bE[i];
}return bG;
},__vo:function(){var hi=this.__uP.createDocumentFragment();
var hn=this.__vp();
var parent=hi;
var hl=hn.child;
var hj;
var hm=false;

while(hl){hm=hl[fY]!=null;
hj=this.__uP.createElement(hm?fz:fV);
parent.appendChild(hj);
for(var hh in hl){if(hh!=eW&&hh!=fY){qx.bom.element.Style.set(hj,hh,hl[hh]);
}}
if(hm){var hk=this.__uP.createAttribute(dN);
hk.nodeValue=hl[fY];
hj.setAttributeNode(hk);
}parent=hj;
hl=hl.child;
}return hi;
},__vp:function(gy){var gA={};
var gB=null;
var gC=this.getCurrentStyles(gy);
gB=gA.child={};

for(var gz in gC){if(gz!=fT){gB[gz]=gC[gz];
}}if(gC[fT]){var gD=gC[fT];
for(var i=0,j=gD.length;i<j;i++){if(gB==null){gB=gA.child={};
}else{gB=gB.child={};
}gB[fU]=gD[i][fU];
gB[eS]=gD[i][eS];
}}if(gC[fU]&&gC[eS]){gB=gB.child={};
gB[fU]=gC[fU];
}return gA;
},getCurrentStyles:function(g){if(g==null){var m=this.__uO.getSelection();

if(!m||m.focusNode==null){return {};
}g=(m.focusNode.nodeType==3)?m.focusNode.parentNode:m.focusNode;
}var n=qx.dom.Hierarchy.getAncestors(g);
var p=qx.lang.Array.insertBefore(n,g,n[0]);
var h=this.__vq(p);
var o=this.__vr(h,p);
return o;
},__vq:function(by){var bB={};
var bz,bA;

for(var i=0,j=by.length;i<j;i++){bA=by[i];

for(var k=0,l=bA.style.length;k<l;k++){bz=bA.style[k];

if(bz.length>0&&typeof bB[bz]===gp){bB[bz]=bA.style.getPropertyValue(bz);
}}if(bA.tagName.toUpperCase()==es&&bA.size&&bB[fY]===undefined){bB[fY]=bA.size;
}}if(bB[fY]&&bB[gc]){delete bB[gc];
}return bB;
},__vr:function(dr,ds){var dx=ds[0];
var dv=this.__uO.getContentWindow().getComputedStyle(dx,null);
var dt;
var dw={};

for(var du in dr){if(du!=fY){dt=dv.getPropertyValue(du);
}else{dt=dr[du];
}if(du==gl&&dt==fc){dw[du]=this.__vt(ds);
}else if(du==fT){dw[du]=this.__vs(ds);
}else{dw[du]=dt;
}}return dw;
},__vs:function(bm){var bp,br,bn;
var bq=[];
var bo=this.__uO.getContentWindow();

for(var i=0,j=bm.length;i<j;i++){bn=bo.getComputedStyle(bm[i],null);
bp=bn.getPropertyValue(fT);
br=bn.getPropertyValue(fr);
if(bp!=dK){bq.push({'text-decoration':bp,'color':br});
}}return bq;
},__vt:function(cx){var cz,cy,cA;

for(var i=0;i<cx.length;i++){cz=cx[i];
cy=this.__uO.getContentWindow().getComputedStyle(cz,null);
cA=cy.getPropertyValue(gl);
if(cA!=fc){return cA;
}}},__vu:function(F,G){var S=this.__uO.getSelection();
var N=(qx.core.Variant.isSet(gb,fX))?this.__uO.getRange():N=S.getRangeAt(0);
var O=[];
var R;
var M=[ej,fM];
var H,i,j,P;
P=(qx.core.Variant.isSet(gb,fX))?N.parentElement():N.commonAncestorContainer;
if(P.tagName==dR){for(var i=0;i<M.length;i++){H=P.getElementsByTagName(M[i]);

for(var j=0;j<H.length;j++){if(H[j]){O.push(H[j]);
}}}}else if(qx.lang.Array.contains(M,P.tagName)){O.push(P);
}
if(O.length>0){for(var i=0;i<O.length;i++){var J=O[i];
R=(qx.core.Variant.isSet(gb,fX))?
((J==P)||(P.tagName==dR)):
S.containsNode(J,false);
for(j=0;j<J.childNodes.length;j++){var L=J.childNodes[j];
if(R||
(S.focusNode.nodeValue&&qx.dom.Hierarchy.contains(L,S.focusNode)&&(S.focusOffset==S.focusNode.nodeValue.length))||
(qx.dom.Hierarchy.contains(L,S.anchorNode)&&(S.anchorOffset==0))||
(S.containsNode(L,false))){L.style.fontSize=(this.__uR[F]||F)+fG;
}}}}else{var K=(qx.core.Variant.isSet(gb,fX))?P:S.focusNode;
var Q=qx.dom.Hierarchy.getAncestors(K);

for(i=0;i<Q.length;i++){if(Q[i].tagName==eM){if(((qx.core.Variant.isSet(gb,eV))&&
((S.anchorOffset==0)&&
(S.focusNode.nodeValue&&(S.focusOffset==S.focusNode.nodeValue.length))&&
qx.dom.Hierarchy.contains(Q[i].firstChild,S.anchorNode)&&
qx.dom.Hierarchy.contains(Q[i].lastChild,S.focusNode)))||
((qx.core.Variant.isSet(gb,fX))&&(N.htmlText==Q[i].innerHTML))){Q[i].style.fontSize=(this.__uR[F]||F)+fG;
}break;
}}}if(qx.core.Variant.isSet(gb,fX)){this.__uP.body.focus();
this.__uO.getRange().select();
return this.__uP.execCommand(gj,false,F);
}else if(qx.core.Variant.isSet(gb,eV)){var parent=N.commonAncestorContainer;
if(parent.nodeType===1){var I=parent.getElementsByTagName(fV);

for(i=0;i<I.length;i++){if(I[i].style.fontSize){I[i].style.fontSize=null;
}}}}return this.__uP.execCommand(gj,false,F);
},__vv:qx.core.Variant.select(gb,{"mshtml":function(cS,cT){this.__uP.body.focus();
return this.__uP.execCommand(gi,false,cS);
},"gecko|opera":function(dG,dH){this.__uP.body.focus();
return this.__uP.execCommand(eR,false,dG);
},"webkit":function(dy,dz){var dA=this.__uO.getSelection();
var dB=this.__uO.getRange();
if(!dA||!dA.isCollapsed){this.__uP.body.focus();
this.__uP.execCommand(gi,false,dy);
if(dA){dA.collapseToEnd();
}return true;
}else{var dD=dA.anchorOffset;
var dE=dA.anchorOffset;
var dB=dA.getRangeAt(0);
var dC=dA.anchorNode;
while(dE>0){if(dC.nodeValue.charCodeAt(dE)==160||dC.nodeValue.charCodeAt(dE)==32){break;
}else{dE--;
}}while(dD<dC.nodeValue.length){if(dC.nodeValue.charCodeAt(dD)==160||dC.nodeValue.charCodeAt(dD)==32){break;
}else{dD++;
}}dB.setStart(dA.anchorNode,dA.anchorNode.nodeValue.charAt(dE)==fE?dE+1:dE);
dB.setEnd(dA.anchorNode,dD);
dA.addRange(dB);
this.__uP.body.focus();
this.__uP.execCommand(gi,false,dy);
dA.collapseToEnd();
return true;
}}}),__vw:function(cB,cC){cB=cB!=null&&typeof cB==dQ?cB:fc;
qx.bom.element.Style.set(this.__uP.body,go,cB);
return true;
},__vx:function(gT,gU){var gV,gX,gW;
var gY=qx.bom.htmlarea.manager.Command;

if(gT==null){gV=null;
}else{gV=gT[0];
gX=gT[1];
gW=gT[2];
}if(gV==null||typeof gV!=dQ){qx.bom.element.Style.set(this.__uP.body,fF,ga);
qx.bom.element.Style.set(this.__uP.body,fA,ga);
qx.bom.element.Style.set(this.__uP.body,dM,ga);
return true;
}else{if(gV.search(/^url.*\(/)==-1){gV=ef+gV+fw;
}}if(gX!=null&&!qx.lang.String.contains(gY.__uU,gX)){{};
return false;
}else{gX=gu;
}
if(gW!=null){if(qx.lang.Type.isString(gW)&&!qx.lang.String.contains(gY.__uT,gk+gW+gk)){{};
return false;
}else{if(qx.lang.Type.isArray(gW)&&gW.length==2){gW=gW[0]+fE+gW[1];
}else{{};
return false;
}}}else{gW=gm;
}qx.bom.element.Style.set(this.__uP.body,fF,gV);
qx.bom.element.Style.set(this.__uP.body,fA,gX);
qx.bom.element.Style.set(this.__uP.body,dM,gW);
return true;
},__vy:qx.core.Variant.select(gb,{"mshtml":function(cD,cE){var cF=this.__uP.body.createTextRange();
cF.select();
return true;
},"default":function(hf,hg){return this.__va(hg.identifier,false,hf);
}}),__vz:function(){return this.__uO.getSelectedText();
},__vA:function(){return this.__uO.getSelectedHtml();
},__vB:qx.core.Variant.select(gb,{"webkit":function(gN,gO){var gP=this.__uO.getContextInformation();
var gR=this.__uO.getFocusNode();
if(gP.underline){gR.style.textDecoration=dK;
}else{if(gP.strikethrough){var gS=this.__uP.createElement(fV);
qx.bom.element.Style.set(gS,ge,gd);
gR.appendChild(gS);
var gQ=this.__uO.getSelection();

if(gQ){gQ.extend(gS,0);

if(!gQ.isCollapsed){gQ.collapseToEnd();
}}}else{gR.style.textDecoration=gd;
}}return true;
},"default":function(q,r){return this.__va(r.identifier,false,q);
}}),__vC:qx.core.Variant.select(gb,{"webkit":function(bK,bL){var bN=this.__uO.getFocusNode();
var bO=this.__uP.createElement(fV);
qx.bom.element.Style.set(bO,ge,fv);
bN.appendChild(bO);
var bM=this.__uO.getSelection();

if(bM){bM.extend(bO,0);

if(!bM.isCollapsed){bM.collapseToEnd();
}}return true;
},"default":function(cQ,cR){return this.__va(cR.identifier,false,cQ);
}})},destruct:function(){this.__uP=this.__uO=this._commands=this.__uQ=this.__uR=null;
}});
})();
(function(){var y="qx.client",x="Command",w="mshtml",v="gecko",u="Custom",t="Content",s="Internal",r="inserthtml",q="backgroundimage",p="backgroundcolor",bu="webkit",bt="backgroundColor",bs="mousedown",br="table",bq="backgroundImage",bp="backgroundRepeat",bo="p",bn="backgroundPosition",bm="td",bl="img",F="inserthyperlink",G="mouseup",D="keypress",E="qx.bom.htmlarea.HtmlArea.debug",B="on",C="undo",z="undoRedoState",A="pageup",J="b",K="control",S="shift",Q="end",bb="right",V="qx_link",bh="insertunorderedlist",bf="Undo",M="pagedown",bk="k",bj="home",bi="a",L="insertorderedlist",O="y",P="justifyright",R="redo",T="insertParagraph",W="qx.bom.htmlarea.manager.UndoRedo",bc="left",bg="i",H="Redo",I="u",N="enter",ba="__ta",Y="insertimage",X="z",be="down",bd="up",U="body";
qx.Class.define(W,{extend:qx.core.Object,construct:function(cj,ck){qx.core.Object.call(this);
this.__ta=cj;
this.__tb=ck;
this.__tc=[];
this.__td=[];
this._commands=null;
this.__te=null;
this.__tf={};
this.__tg={command:true,content:true,custom:true};
this.__tE();
this.__th=qx.lang.Function.bind(this._handleKeyPress,this);
this.__ti=qx.lang.Function.bind(this._handleMouseUp,this);

if(qx.core.Variant.isSet(y,w)){this.__tj=qx.lang.Function.bind(this._handleMouseDown,this);
}},members:{__tk:false,__tl:false,__tm:false,__tg:null,__tf:null,__ta:null,__te:null,__tc:null,__td:null,__tb:null,__th:null,__ti:null,__tj:null,__tn:null,setContentDocument:function(o){this.__te=o;
this.__ta.setContentDocument(o);
qx.event.Registration.addListener(o.body,D,this.__th,this);
qx.event.Registration.addListener(o.body,G,this.__ti,this);

if(qx.core.Variant.isSet(y,w)){qx.event.Registration.addListener(o.body,bs,this.__tj,this,true);
}},insertParagraphOnLinebreak:function(){return this.__ta.insertParagraphOnLinebreak();
},execute:function(cI,cJ){var cK;
cI=cI.toLowerCase();
if(this._commands[cI]){if(this._commands[cI].passthrough){cK=this.__ta.execute(cI,cJ);
}else{cK=this[cI].call(this);
}}else{if(qx.core.Variant.isSet(y,w)||qx.core.Variant.isSet(y,bu)){this.__tF(cI,cJ,this.__ta.getCommandObject(cI));
cK=this.__ta.execute(cI,cJ);
if(!cK){this.__tc.pop();
}}else{cK=this.__ta.execute(cI,cJ);

if(cK){this.__tF(cI,cJ,this.__ta.getCommandObject(cI));
}}
if(cI==C&&this.__tc.length==0){this.__tl=false;
this.__tN();
}else if(cI==R&&this.__td.length==0){this.__tk=false;
this.__tN();
}}this.__tm=false;
return cK;
},addUndoStep:function(cB,cC,cD){this.__tF(cB,cC,cD);
},registerHandler:function(bK,bL,bM,bN){this.__tf[bK]={undo:bL,redo:bM,context:bN};
},isUndoPossible:function(){return this.__tl;
},undo:function(){var bT;

if(this.__tm){this.__tH();
}if(this.__tc.length>0){var bS=this.__tc.pop();

if(this.__tg[bS.actionType.toLowerCase()]){switch(bS.actionType){case x:bT=this.__tp(bS);
break;
case t:bT=this.__tt(bS);
break;
case s:bT=this.__ts(bS);
break;
case u:bT=this.__to(bS);
break;
}}else if(this.__tf[bS.actionType]){var bR=this.__tf[bS.actionType];
bT=bR.undo.call(bR.context?bR.context:this,bS);
this.__tJ(bS);
}else{this.error("actionType "+bS.actionType+" is not managed! Please provide a handler method!");
}this.__tk=true;
this.__tN();
return bT;
}},__to:qx.core.Variant.select(y,{"mshtml|webkit":function(cx){var cy=this.__te.body.innerHTML;
var cA=cx.content;
this.__te.body.innerHTML=cA;
var cz=cx;
cz.content=cy;
this.__tJ(cz);
return true;
},"default":function(cm){var cq=cm;
var cp=qx.bom.element.Style;
switch(cm.command){case p:cq.parameter=[cp.get(this.__te.body,bt)];
break;
case q:cq.parameter=[cp.get(this.__te.body,bq),cp.get(this.__te.body,bp),cp.get(this.__te.body,bn)];
break;
}this.__tJ(cq);
if(cm.command==F){if(qx.core.Variant.isSet(y,v)){var co=V+this.__ta.__hyperLinkId;
var cn=this.__te.getElementById(co);

if(cn){cn.parentNode.removeChild(cn);
return true;
}else{return false;
}}}else{return this.__ta.execute(cm.command,cm.value);
}}}),__tp:qx.core.Variant.select(y,{"mshtml|webkit":function(cw){},"default":function(cQ){this.__tJ(cQ);

if(qx.core.Variant.isSet(y,v)){if(cQ.command==r&&cQ.value==qx.bom.htmlarea.HtmlArea.EMPTY_DIV&&this.__tq(r,T)){this.__tr();
}}return this.__tu();
}}),__tq:function(cs,ct){if(this.__tc.length>0){var cu=this.__tc[this.__tc.length-1];
return (cu.command==cs&&cu.value==ct);
}return false;
},__tr:function(){this.__tu();

if(this.__tc.length>0){var cv=this.__tc.pop();
this.__tJ(cv);
}},__ts:function(cf){this.__tJ(cf);
return this.__tu();
},__tt:qx.core.Variant.select(y,{"gecko":function(cR){this.__tJ(cR);

try{return this.__tu();
}catch(cE){{};
}},"mshtml|webkit":function(cL){},"default":function(bU){this.__tJ(bU);
return this.__tu();
}}),__tu:function(){try{return this.__te.execCommand(bf,false,null);
}catch(e){return false;
}},isRedoPossible:function(){return this.__tk;
},redo:function(){if(this.__tk){var ch;
if(this.__td.length>0){var ci=this.__td.pop();

if(this.__tg[ci.actionType.toLowerCase()]){switch(ci.actionType){case x:ch=this.__tw(ci);
break;
case t:ch=this.__tC(ci);
break;
case s:ch=this.__tB(ci);
break;
case u:ch=this.__tv(ci);
break;
}}else if(this.__tf[ci.actionType]){var cg=this.__tf[ci.actionType];
ch=cg.redo.call(cg.context?cg.context:this,ci);
this.__tI(ci);
}else{this.error("actionType "+ci.actionType+" is not managed! Please provide a handler method!");
}this.__tl=true;
this.__tN();
}return ch;
}},__tv:qx.core.Variant.select(y,{"mshtml|webkit":function(a){var b=this.__te.body.innerHTML;
var d=a.content;
this.__te.body.innerHTML=d;
var c=a;
c.content=b;
this.__tI(c);
return true;
},"default":function(cM){this.__tI(cM);
return this.__tD();
}}),__tw:qx.core.Variant.select(y,{"mshtml|webkit":function(bW){},"default":function(cN){this.__tI(cN);
var cO=this.__tD();

if(qx.core.Variant.isSet(y,v)){if(this.__tx(r,qx.bom.htmlarea.HtmlArea.EMPTY_DIV)){var cP=this.__ty();
this.__tz();

if(cP!=null){this.__tA(cP);
}}}return cO;
}}),__tx:function(bX,bY){if(this.__td.length>0){var ca=this.__td[this.__td.length-1];
return (ca.command==bX&&ca.value==bY);
}return false;
},__ty:function(){if(this.__tb==null){return null;
}var bG=this.__tb.getSelection();
var bH=bG?bG.focusNode:null;

if(bH==null){return null;
}
try{while(bH.nodeName.toLowerCase()!=bo){bH=bH.parentNode;

if(!bH||qx.dom.Node.isNodeName(bH,U)){return null;
}}}catch(cl){return null;
}
if(bH!=null&&qx.dom.Node.isNodeName(bH,bo)){return bH;
}else{return null;
}},__tz:function(){var bO=this.__td.pop();
this.__tI(bO);
this.__tD();
},__tA:qx.core.Variant.select(y,{"gecko":function(g){if(g==this.__tb.getContentBody().lastChild){return;
}var l=g.firstChild;

while(l.firstChild){l=l.firstChild;
}var h=this.__tb.getSelection();
var k=this.__tb.getRange();

if(h&&k){k.selectNode(l);
h.addRange(k);
k.collapse(true);
}},"default":qx.lang.Function.empty}),__tB:function(n){this.__tI(n);
return this.__tD();
},__tC:qx.core.Variant.select(y,{"mshtml|webkit":function(m){},"default":function(cr){this.__tI(cr);
return this.__tD();
}}),__tD:function(){try{return this.__te.execCommand(H,false,null);
}catch(e){return false;
}},__tE:function(){this._commands={undo:{passthrough:false},redo:{passthrough:false}};
this.__ta.getCommandObject(p).customUndo=true;
this.__ta.getCommandObject(q).customUndo=true;

if(qx.core.Variant.isSet(y,v)){}},__tF:qx.core.Variant.select(y,{"mshtml|webkit":function(bw,bx,by){var bz=this.getUndoRedoObject();
bz.commandObject=by;
bz.command=bw;
bz.value=bx;
bz.actionType=u;
bz.content=this.__te.body.innerHTML;
this.__tG(bz);
},"default":function(bA,bB,bC){if(this.__tb==null){return;
}var bE=this.getUndoRedoObject();
bE.commandObject=bC;
bE.command=bA;
bE.value=bB;
bE.actionType=u;
var bD=this.__tb.getSelection();

if(bC.customUndo){var bF=[];

switch(bA){case p:bF.push(qx.bom.element.Style.get(this.__te.body,bt));
break;
case q:bF.push(qx.bom.element.Style.get(this.__te.body,bq),qx.bom.element.Style.get(this.__te.body,bp),qx.bom.element.Style.get(this.__te.body,bn));
break;
case F:if(bD&&!bD.isCollapsed){bE.actionType=x;
}break;
}bE.parameter=bF;
}else{if(qx.core.Variant.isSet(y,v)){if(bD&&bD.isCollapsed){switch(bA){case L:case bh:case P:case r:case Y:bE.actionType=x;
break;
default:return;
}}else{bE.actionType=x;
}}else{bE.actionType=x;
}}this.__tG(bE);
}}),__tG:function(bV){if(this.__tm){this.__tH();
}this.__tI(bV);
this.__tk=false;
this.__td=[];
this.__tN();
},__tH:function(){var cF=this.__tc[this.__tc.length-1];

if(cF==null||cF.actionType!=t){var cG=this.getUndoRedoObject();
cG.actionType=t;

if(qx.core.Variant.isSet(y,w)||qx.core.Variant.isSet(y,bu)){cG.content=this.__tn;
cG.actionType=u;
this.__tn=null;
}this.__tI(cG);
this.__tm=false;
}},getUndoRedoObject:function(){return {actionType:null,commandObject:null,command:null,value:null,parameter:null,range:null,marker:null,content:null};
},__tI:function(bv){if(false&&qx.core.Setting.get(E)==B){this.debug("ADD TO UNDO STACK");
this.debug(bv.actionType+" "+bv.command+" "+bv.value);
}this.__tc.push(bv);
},__tJ:function(f){if(false&&qx.core.Setting.get(E)==B){this.debug("ADD TO REDO STACK");
this.debug(f.actionType+" "+f.command+" "+f.value);
}this.__td.push(f);
},_handleKeyPress:function(e){var bP=e.getKeyIdentifier().toLowerCase();
var bQ=e.isCtrlPressed();

switch(bP){case K:case S:case bc:case bb:case bd:case be:case A:case M:case bj:case Q:case N:break;
case bi:case J:case bg:case I:case bk:case O:case X:if(!bQ){this.__tK();
}break;
default:this.__tk=false;
this.__td=[];
this.__tK();
}},__tK:function(){if(!this.__tm){this.__tm=true;
this.__tl=true;
if(qx.core.Variant.isSet(y,w)||qx.core.Variant.isSet(y,bu)){this.__tn=this.__te.body.innerHTML;
}this.__tN();
}},__tL:null,_handleMouseDown:qx.core.Variant.select(y,{"mshtml":function(e){var cH=e.getOriginalTarget();

if(qx.dom.Node.isElement(cH)&&(qx.dom.Node.isNodeName(cH,bl)||qx.dom.Node.isNodeName(cH,br))){this.__tL={node:cH,content:cH.outerHTML};
}else{this.__tL=null;
}},"default":function(e){return true;
}}),_handleMouseUp:qx.core.Variant.select(y,{"gecko":function(e){if(this.__tb==null){return;
}var cc=this.__tb.getSelection();

if(!cc){this.__tL=null;
return;
}var cb=cc.anchorNode;
var cd=cb.childNodes[cc.anchorOffset];
if(qx.dom.Node.isNodeName(cd,bl)){if(this.__tL==null){this.__tL=cd.cloneNode(true);
}else{if(this.__tL.style.width!=cd.style.width||this.__tL.style.height!=cd.style.height){this.__tM();
this.__tL=cd.cloneNode(true);
}}}else if(qx.dom.Node.isNodeName(cb,bm)||qx.dom.Node.isNodeName(cb.parentNode,bm)){var ce=cb.parentNode;

while(qx.dom.Node.isNodeName(ce,br)){ce=ce.parentNode;
}if(this.__tL==null){this.__tL=ce.cloneNode(true);
}else{qx.event.Timer.once(function(){if(ce.style.width!=this.__tL.style.width||ce.style.height!=this.__tL.style.height||ce.innerHTML!=this.__tL.innerHTML){this.__tM();
this.__tL=ce.cloneNode(true);
}},this,0);
}}else{this.__tL=null;
}},"default":function(e){var bI=e.srcElement;

if(this.__tL!=null){if(bI.nodeType==1){if(bI==this.__tL.node){if(bI.outerHTML!=this.__tL.content){this.__tL.content=bI.outerHTML;
this.__tM();
}}else{for(var i=0,j=bI.childNodes.length;i<j;i++){if(bI.childNodes[i]==this.__tL.node){if(bI.childNodes[i].outerHTML!=this.__tL.content){this.__tL.content=bI.childNodes[i].outerHTML;
this.__tM();
}}}}}else{this.__tL=null;
}}}}),__tM:qx.core.Variant.select(y,{"mshtml|webkit":function(){this.__tF(s,null,null);
},"default":function(){var bJ=this.getUndoRedoObject();
bJ.actionType=s;
this.__tI(bJ);
}}),__tN:function(){qx.event.Timer.once(function(e){if(this.__tb!=null){var cS={undo:this.isUndoPossible()?0:-1,redo:this.isRedoPossible()?0:-1};
this.__tb.fireDataEvent(z,cS);
}},this,200);
}},destruct:function(){try{qx.event.Registration.removeListener(this.__te.body,D,this.__th);
qx.event.Registration.removeListener(this.__te,G,this.__ti);

if(qx.core.Variant.isSet(y,w)){qx.event.Registration.removeListener(this.__te,bs,this.__tj);
}}catch(e){}this._disposeObjects(ba);
this.__tb=this.__tc=this.__td=this._commands=this.__te=null;
this.__tg=this.__tf=null;
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
(function(){var f="mshtml",e="pop.push.reverse.shift.sort.splice.unshift.join.slice",d="number",c="qx.type.BaseArray",b="qx.client",a=".";
qx.Class.define(c,{extend:Array,construct:function(length){},members:{toArray:null,valueOf:null,pop:null,push:null,reverse:null,shift:null,sort:null,splice:null,unshift:null,concat:null,join:null,slice:null,toString:null,indexOf:null,lastIndexOf:null,forEach:null,filter:null,map:null,some:null,every:null}});
(function(){function m(n){if(qx.core.Variant.isSet(b,f)){l.prototype={length:0,$$isArray:true};
var q=e.split(a);

for(var length=q.length;length;){l.prototype[q[--length]]=Array.prototype[q[length]];
}}var r=Array.prototype.slice;
l.prototype.concat=function(){var u=this.slice(0);

for(var i=0,length=arguments.length;i<length;i++){var t;

if(arguments[i] instanceof l){t=r.call(arguments[i],0);
}else if(arguments[i] instanceof Array){t=arguments[i];
}else{t=[arguments[i]];
}u.push.apply(u,t);
}return u;
};
l.prototype.toString=function(){return r.call(this,0).toString();
};
l.prototype.toLocaleString=function(){return r.call(this,0).toLocaleString();
};
l.prototype.constructor=l;
l.prototype.indexOf=qx.lang.Core.arrayIndexOf;
l.prototype.lastIndexOf=qx.lang.Core.arrayLastIndexOf;
l.prototype.forEach=qx.lang.Core.arrayForEach;
l.prototype.some=qx.lang.Core.arraySome;
l.prototype.every=qx.lang.Core.arrayEvery;
var o=qx.lang.Core.arrayFilter;
var p=qx.lang.Core.arrayMap;
l.prototype.filter=function(){var h=new this.constructor;
h.push.apply(h,o.apply(this,arguments));
return h;
};
l.prototype.map=function(){var g=new this.constructor;
g.push.apply(g,p.apply(this,arguments));
return g;
};
l.prototype.slice=function(){var s=new this.constructor;
s.push.apply(s,Array.prototype.slice.apply(this,arguments));
return s;
};
l.prototype.splice=function(){var j=new this.constructor;
j.push.apply(j,Array.prototype.splice.apply(this,arguments));
return j;
};
l.prototype.toArray=function(){return Array.prototype.slice.call(this,0);
};
l.prototype.valueOf=function(){return this.length;
};
return l;
}function l(length){if(arguments.length===1&&typeof length===d){this.length=-1<length&&length===length>>.5?length:this.push(length);
}else if(arguments.length){this.push.apply(this,arguments);
}}function k(){}k.prototype=[];
l.prototype=new k;
l.prototype.length=0;
qx.type.BaseArray=m(l);
})();
})();
(function(){var H="change",G="input",F="qx.client",E="text",D="password",C="checkbox",B="radio",A="textarea",z="keypress",y="opera",s="propertychange",x="blur",v="keydown",r="keyup",q="select-multiple",u="checked",t="value",w="select",p="qx.event.handler.Input";
qx.Class.define(p,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){qx.core.Object.call(this);
this._onChangeCheckedWrapper=qx.lang.Function.listener(this._onChangeChecked,this);
this._onChangeValueWrapper=qx.lang.Function.listener(this._onChangeValue,this);
this._onInputWrapper=qx.lang.Function.listener(this._onInput,this);
this._onPropertyWrapper=qx.lang.Function.listener(this._onProperty,this);
if(qx.core.Variant.isSet(F,y)){this._onKeyDownWrapper=qx.lang.Function.listener(this._onKeyDown,this);
this._onKeyUpWrapper=qx.lang.Function.listener(this._onKeyUp,this);
this._onBlurWrapper=qx.lang.Function.listener(this._onBlur,this);
}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{input:1,change:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{__me:false,__mf:null,__mg:null,canHandleEvent:function(h,j){var k=h.tagName.toLowerCase();

if(j===G&&(k===G||k===A)){return true;
}
if(j===H&&(k===G||k===A||k===w)){return true;
}return false;
},registerEvent:qx.core.Variant.select(F,{"mshtml":function(a,b,c){if(!a.__mh){var d=a.tagName.toLowerCase();
var f=a.type;

if(f===E||f===D||d===A||f===C||f===B){qx.bom.Event.addNativeListener(a,s,this._onPropertyWrapper);
}
if(f!==C&&f!==B){qx.bom.Event.addNativeListener(a,H,this._onChangeValueWrapper);
}
if(f===E||f===D){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,a);
qx.bom.Event.addNativeListener(a,z,this._onKeyPressWrapped);
}a.__mh=true;
}},"default":function(Q,R,S){if(R===G){this.__mi(Q);
}else if(R===H){if(Q.type===B||Q.type===C){qx.bom.Event.addNativeListener(Q,H,this._onChangeCheckedWrapper);
}else{qx.bom.Event.addNativeListener(Q,H,this._onChangeValueWrapper);
}if(qx.core.Variant.isSet(F,y)){if(Q.type===E||Q.type===D){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,Q);
qx.bom.Event.addNativeListener(Q,z,this._onKeyPressWrapped);
}}}}}),__mi:qx.core.Variant.select(F,{"mshtml":null,"webkit":function(O){var P=O.tagName.toLowerCase();
if(qx.bom.client.Engine.VERSION<532&&P==A){qx.bom.Event.addNativeListener(O,z,this._onInputWrapper);
}qx.bom.Event.addNativeListener(O,G,this._onInputWrapper);
},"opera":function(L){qx.bom.Event.addNativeListener(L,r,this._onKeyUpWrapper);
qx.bom.Event.addNativeListener(L,v,this._onKeyDownWrapper);
qx.bom.Event.addNativeListener(L,x,this._onBlurWrapper);
qx.bom.Event.addNativeListener(L,G,this._onInputWrapper);
},"default":function(g){qx.bom.Event.addNativeListener(g,G,this._onInputWrapper);
}}),unregisterEvent:qx.core.Variant.select(F,{"mshtml":function(U,V){if(U.__mh){var W=U.tagName.toLowerCase();
var X=U.type;

if(X===E||X===D||W===A||X===C||X===B){qx.bom.Event.removeNativeListener(U,s,this._onPropertyWrapper);
}
if(X!==C&&X!==B){qx.bom.Event.removeNativeListener(U,H,this._onChangeValueWrapper);
}
if(X===E||X===D){qx.bom.Event.removeNativeListener(U,z,this._onKeyPressWrapped);
}
try{delete U.__mh;
}catch(N){U.__mh=null;
}}},"default":function(m,n){if(n===G){this.__mi(m);
}else if(n===H){if(m.type===B||m.type===C){qx.bom.Event.removeNativeListener(m,H,this._onChangeCheckedWrapper);
}else{qx.bom.Event.removeNativeListener(m,H,this._onChangeValueWrapper);
}}
if(qx.core.Variant.isSet(F,y)){if(m.type===E||m.type===D){qx.bom.Event.removeNativeListener(m,z,this._onKeyPressWrapped);
}}}}),__mj:qx.core.Variant.select(F,{"mshtml":null,"webkit":function(J){var K=J.tagName.toLowerCase();
if(qx.bom.client.Engine.VERSION<532&&K==A){qx.bom.Event.removeNativeListener(J,z,this._onInputWrapper);
}qx.bom.Event.removeNativeListener(J,G,this._onInputWrapper);
},"opera":function(bf){qx.bom.Event.removeNativeListener(bf,r,this._onKeyUpWrapper);
qx.bom.Event.removeNativeListener(bf,v,this._onKeyDownWrapper);
qx.bom.Event.removeNativeListener(bf,x,this._onBlurWrapper);
qx.bom.Event.removeNativeListener(bf,G,this._onInputWrapper);
},"default":function(bc){qx.bom.Event.removeNativeListener(bc,G,this._onInputWrapper);
}}),_onKeyPress:qx.core.Variant.select(F,{"mshtml|opera":function(e,T){if(e.keyCode===13){if(T.value!==this.__mg){this.__mg=T.value;
qx.event.Registration.fireEvent(T,H,qx.event.type.Data,[T.value]);
}}},"default":null}),_onKeyDown:qx.core.Variant.select(F,{"opera":function(e){if(e.keyCode===13){this.__me=true;
}},"default":null}),_onKeyUp:qx.core.Variant.select(F,{"opera":function(e){if(e.keyCode===13){this.__me=false;
}},"default":null}),_onBlur:qx.core.Variant.select(F,{"opera":function(e){if(this.__mf){window.clearTimeout(this.__mf);
}},"default":null}),_onInput:qx.event.GlobalError.observeMethod(function(e){var bb=e.target;
if(!this.__me){if(qx.core.Variant.isSet(F,y)){this.__mf=window.setTimeout(function(){qx.event.Registration.fireEvent(bb,G,qx.event.type.Data,[bb.value]);
},0);
}else{qx.event.Registration.fireEvent(bb,G,qx.event.type.Data,[bb.value]);
}}}),_onChangeValue:qx.event.GlobalError.observeMethod(function(e){var be=e.target||e.srcElement;
var bd=be.value;

if(be.type===q){var bd=[];

for(var i=0,o=be.options,l=o.length;i<l;i++){if(o[i].selected){bd.push(o[i].value);
}}}qx.event.Registration.fireEvent(be,H,qx.event.type.Data,[bd]);
}),_onChangeChecked:qx.event.GlobalError.observeMethod(function(e){var M=e.target;

if(M.type===B){if(M.checked){qx.event.Registration.fireEvent(M,H,qx.event.type.Data,[M.value]);
}}else{qx.event.Registration.fireEvent(M,H,qx.event.type.Data,[M.checked]);
}}),_onProperty:qx.core.Variant.select(F,{"mshtml":qx.event.GlobalError.observeMethod(function(e){var Y=e.target||e.srcElement;
var ba=e.propertyName;

if(ba===t&&(Y.type===E||Y.type===D||Y.tagName.toLowerCase()===A)){if(!Y.$$inValueSet){qx.event.Registration.fireEvent(Y,G,qx.event.type.Data,[Y.value]);
}}else if(ba===u){if(Y.type===C){qx.event.Registration.fireEvent(Y,H,qx.event.type.Data,[Y.checked]);
}else if(Y.checked){qx.event.Registration.fireEvent(Y,H,qx.event.type.Data,[Y.value]);
}}}),"default":function(){}})},defer:function(I){qx.event.Registration.addHandler(I);
}});
})();
(function(){var x="",w="select",v="soft",u="off",t="qx.client",s="wrap",r="text",q="mshtml",p="number",o="checkbox",f="select-one",n="input",j="option",e="value",d="radio",h="qx.bom.Input",g="nowrap",k="textarea",c="auto",m="normal";
qx.Class.define(h,{statics:{__mk:{text:1,textarea:1,select:1,checkbox:1,radio:1,password:1,hidden:1,submit:1,image:1,file:1,search:1,reset:1,button:1},create:function(A,B,C){{};
var B=B?qx.lang.Object.clone(B):{};
var D;

if(A===k||A===w){D=A;
}else{D=n;
B.type=A;
}return qx.bom.Element.create(D,B,C);
},setValue:function(E,F){var K=E.nodeName.toLowerCase();
var H=E.type;
var Array=qx.lang.Array;
var L=qx.lang.Type;

if(typeof F===p){F+=x;
}
if((H===o||H===d)){if(L.isArray(F)){E.checked=Array.contains(F,E.value);
}else{E.checked=E.value==F;
}}else if(K===w){var G=L.isArray(F);
var M=E.options;
var I,J;

for(var i=0,l=M.length;i<l;i++){I=M[i];
J=I.getAttribute(e);

if(J==null){J=I.text;
}I.selected=G?Array.contains(F,J):F==J;
}
if(G&&F.length==0){E.selectedIndex=-1;
}}else if(H===r&&qx.core.Variant.isSet(t,q)){E.$$inValueSet=true;
E.value=F;
E.$$inValueSet=null;
}else{E.value=F;
}},getValue:function(N){var T=N.nodeName.toLowerCase();

if(T===j){return (N.attributes.value||{}).specified?N.value:N.text;
}
if(T===w){var O=N.selectedIndex;
if(O<0){return null;
}var U=[];
var W=N.options;
var V=N.type==f;
var S=qx.bom.Input;
var R;
for(var i=V?O:0,Q=V?O+1:W.length;i<Q;i++){var P=W[i];

if(P.selected){R=S.getValue(P);
if(V){return R;
}U.push(R);
}}return U;
}else{return (N.value||x).replace(/\r/g,x);
}},setWrap:qx.core.Variant.select(t,{"mshtml":function(y,z){y.wrap=z?v:u;
},"gecko|webkit":function(X,Y){var bb=Y?v:u;
var ba=Y?x:c;
X.setAttribute(s,bb);
X.style.overflow=ba;
},"default":function(a,b){a.style.whiteSpace=b?m:g;
}})}});
})();
(function(){var dq="qx.bom.Selector";
qx.Class.define(dq,{statics:{query:null,matches:null}});
(function(){var eo=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,ev=0,er=Object.prototype.toString,ep=false,ex=true;
[0,0].sort(function(){ex=false;
return 0;
});
var el=function(dr,ds,dt,du){dt=dt||[];
ds=ds||document;
var dD=ds;

if(ds.nodeType!==1&&ds.nodeType!==9){return [];
}
if(!dr||typeof dr!=="string"){return dt;
}var dA=[],m,dx,dv,dz,dy=true,dw=el.isXML(ds),dC=dr,dB,dF,dE,i;
do{eo.exec("");
m=eo.exec(dC);

if(m){dC=m[3];
dA.push(m[1]);

if(m[2]){dz=m[3];
break;
}}}while(m);

if(dA.length>1&&eq.exec(dr)){if(dA.length===2&&en.relative[dA[0]]){dx=em(dA[0]+dA[1],ds);
}else{dx=en.relative[dA[0]]?[ds]:el(dA.shift(),ds);

while(dA.length){dr=dA.shift();

if(en.relative[dr]){dr+=dA.shift();
}dx=em(dr,dx);
}}}else{if(!du&&dA.length>1&&ds.nodeType===9&&!dw&&en.match.ID.test(dA[0])&&!en.match.ID.test(dA[dA.length-1])){dB=el.find(dA.shift(),ds,dw);
ds=dB.expr?el.filter(dB.expr,dB.set)[0]:dB.set[0];
}
if(ds){dB=du?
{expr:dA.pop(),set:ek(du)}:el.find(dA.pop(),dA.length===1&&(dA[0]==="~"||dA[0]==="+")&&ds.parentNode?ds.parentNode:ds,dw);
dx=dB.expr?el.filter(dB.expr,dB.set):dB.set;

if(dA.length>0){dv=ek(dx);
}else{dy=false;
}
while(dA.length){dF=dA.pop();
dE=dF;

if(!en.relative[dF]){dF="";
}else{dE=dA.pop();
}
if(dE==null){dE=ds;
}en.relative[dF](dv,dE,dw);
}}else{dv=dA=[];
}}
if(!dv){dv=dx;
}
if(!dv){el.error(dF||dr);
}
if(er.call(dv)==="[object Array]"){if(!dy){dt.push.apply(dt,dv);
}else if(ds&&ds.nodeType===1){for(i=0;dv[i]!=null;i++){if(dv[i]&&(dv[i]===true||dv[i].nodeType===1&&el.contains(ds,dv[i]))){dt.push(dx[i]);
}}}else{for(i=0;dv[i]!=null;i++){if(dv[i]&&dv[i].nodeType===1){dt.push(dx[i]);
}}}}else{ek(dv,dt);
}
if(dz){el(dz,dD,dt,du);
el.uniqueSort(dt);
}return dt;
};
el.uniqueSort=function(x){if(es){ep=ex;
x.sort(es);

if(ep){for(var i=1;i<x.length;i++){if(x[i]===x[i-1]){x.splice(i--,1);
}}}}return x;
};
el.matches=function(bF,bG){return el(bF,null,null,bG);
};
el.find=function(p,q,r){var s;

if(!p){return [];
}
for(var i=0,l=en.order.length;i<l;i++){var t=en.order[i],u;

if((u=en.leftMatch[t].exec(p))){var v=u[1];
u.splice(1,1);

if(v.substr(v.length-1)!=="\\"){u[1]=(u[1]||"").replace(/\\/g,"");
s=en.find[t](u,q,r);

if(s!=null){p=p.replace(en.match[t],"");
break;
}}}}
if(!s){s=q.getElementsByTagName("*");
}return {set:s,expr:p};
};
el.filter=function(cW,cX,cY,da){var db=cW,dg=[],dc=cX,dl,dk,dd=cX&&cX[0]&&el.isXML(cX[0]);

while(cW&&cX.length){for(var dj in en.filter){if((dl=en.leftMatch[dj].exec(cW))!=null&&dl[2]){var de=en.filter[dj],di,df,dm=dl[1];
dk=false;
dl.splice(1,1);

if(dm.substr(dm.length-1)==="\\"){continue;
}
if(dc===dg){dg=[];
}
if(en.preFilter[dj]){dl=en.preFilter[dj](dl,dc,cY,dg,da,dd);

if(!dl){dk=di=true;
}else if(dl===true){continue;
}}
if(dl){for(var i=0;(df=dc[i])!=null;i++){if(df){di=de(df,dl,i,dc);
var dh=da^!!di;

if(cY&&di!=null){if(dh){dk=true;
}else{dc[i]=false;
}}else if(dh){dg.push(df);
dk=true;
}}}}
if(di!==undefined){if(!cY){dc=dg;
}cW=cW.replace(en.match[dj],"");

if(!dk){return [];
}break;
}}}if(cW===db){if(dk==null){el.error(cW);
}else{break;
}}db=cW;
}return dc;
};
el.error=function(bO){throw "Syntax error, unrecognized expression: "+bO;
};
var en=el.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+\-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(dI){return dI.getAttribute("href");
}},relative:{"+":function(cH,cI){var cJ=typeof cI==="string",cL=cJ&&!/\W/.test(cI),cM=cJ&&!cL;

if(cL){cI=cI.toLowerCase();
}
for(var i=0,l=cH.length,cK;i<l;i++){if((cK=cH[i])){while((cK=cK.previousSibling)&&cK.nodeType!==1){}cH[i]=cM||cK&&cK.nodeName.toLowerCase()===cI?cK||false:cK===cI;
}}
if(cM){el.filter(cI,cH,true);
}},">":function(cQ,cR){var cS=typeof cR==="string",cT,i=0,l=cQ.length;

if(cS&&!/\W/.test(cR)){cR=cR.toLowerCase();

for(;i<l;i++){cT=cQ[i];

if(cT){var parent=cT.parentNode;
cQ[i]=parent.nodeName.toLowerCase()===cR?parent:false;
}}}else{for(;i<l;i++){cT=cQ[i];

if(cT){cQ[i]=cS?cT.parentNode:cT.parentNode===cR;
}}
if(cS){el.filter(cR,cQ,true);
}}},"":function(V,W,X){var Y=ev++,ba=ew,bb;

if(typeof W==="string"&&!/\W/.test(W)){W=W.toLowerCase();
bb=W;
ba=ey;
}ba("parentNode",W,Y,V,bb,X);
},"~":function(ce,cf,cg){var ch=ev++,ci=ew,cj;

if(typeof cf==="string"&&!/\W/.test(cf)){cf=cf.toLowerCase();
cj=cf;
ci=ey;
}ci("previousSibling",cf,ch,ce,cj,cg);
}},find:{ID:function(dU,dV,dW){if(typeof dV.getElementById!=="undefined"&&!dW){var m=dV.getElementById(dU[1]);
return m?[m]:[];
}},NAME:function(eM,eN){if(typeof eN.getElementsByName!=="undefined"){var eP=[],eO=eN.getElementsByName(eM[1]);

for(var i=0,l=eO.length;i<l;i++){if(eO[i].getAttribute("name")===eM[1]){eP.push(eO[i]);
}}return eP.length===0?null:eP;
}},TAG:function(G,H){return H.getElementsByTagName(G[1]);
}},preFilter:{CLASS:function(cn,co,cp,cq,cr,cs){cn=" "+cn[1].replace(/\\/g,"")+" ";

if(cs){return cn;
}
for(var i=0,ct;(ct=co[i])!=null;i++){if(ct){if(cr^(ct.className&&(" "+ct.className+" ").replace(/[\t\n]/g," ").indexOf(cn)>=0)){if(!cp){cq.push(ct);
}}else if(cp){co[i]=false;
}}}return false;
},ID:function(dT){return dT[1].replace(/\\/g,"");
},TAG:function(B,C){return B[1].toLowerCase();
},CHILD:function(O){if(O[1]==="nth"){var P=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(O[2]==="even"&&"2n"||O[2]==="odd"&&"2n+1"||!/\D/.test(O[2])&&"0n+"+O[2]||O[2]);
O[2]=(P[1]+(P[2]||1))-0;
O[3]=P[3]-0;
}O[0]=ev++;
return O;
},ATTR:function(bm,bn,bo,bp,bq,br){var name=bm[1].replace(/\\/g,"");

if(!br&&en.attrMap[name]){bm[1]=en.attrMap[name];
}
if(bm[2]==="~="){bm[4]=" "+bm[4]+" ";
}return bm;
},PSEUDO:function(I,J,K,L,M){if(I[1]==="not"){if((eo.exec(I[3])||"").length>1||/^\w/.test(I[3])){I[3]=el(I[3],null,null,J);
}else{var N=el.filter(I[3],J,K,true^M);

if(!K){L.push.apply(L,N);
}return false;
}}else if(en.match.POS.test(I[0])||en.match.CHILD.test(I[0])){return true;
}return I;
},POS:function(cN){cN.unshift(true);
return cN;
}},filters:{enabled:function(bL){return bL.disabled===false&&bL.type!=="hidden";
},disabled:function(y){return y.disabled===true;
},checked:function(eB){return eB.checked===true;
},selected:function(cB){cB.parentNode.selectedIndex;
return cB.selected===true;
},parent:function(R){return !!R.firstChild;
},empty:function(by){return !by.firstChild;
},has:function(D,i,E){return !!el(E[3],D).length;
},header:function(z){return (/h\d/i).test(z.nodeName);
},text:function(Q){return "text"===Q.type;
},radio:function(bj){return "radio"===bj.type;
},checkbox:function(w){return "checkbox"===w.type;
},file:function(c){return "file"===c.type;
},password:function(bI){return "password"===bI.type;
},submit:function(eQ){return "submit"===eQ.type;
},image:function(F){return "image"===F.type;
},reset:function(cu){return "reset"===cu.type;
},button:function(bH){return "button"===bH.type||bH.nodeName.toLowerCase()==="button";
},input:function(d){return (/input|select|textarea|button/i).test(d.nodeName);
}},setFilters:{first:function(bN,i){return i===0;
},last:function(bC,i,bD,bE){return i===bE.length-1;
},even:function(A,i){return i%2===0;
},odd:function(bk,i){return i%2===1;
},lt:function(bP,i,bQ){return i<bQ[3]-0;
},gt:function(bw,i,bx){return i>bx[3]-0;
},nth:function(dn,i,dp){return dp[3]-0===i;
},eq:function(dG,i,dH){return dH[3]-0===i;
}},filter:{PSEUDO:function(cC,cD,i,cE){var name=cD[1],cF=en.filters[name];

if(cF){return cF(cC,i,cD,cE);
}else if(name==="contains"){return (cC.textContent||cC.innerText||el.getText([cC])||"").indexOf(cD[3])>=0;
}else if(name==="not"){var cG=cD[3];

for(var j=0,l=cG.length;j<l;j++){if(cG[j]===cC){return false;
}}return true;
}else{el.error("Syntax error, unrecognized expression: "+name);
}},CHILD:function(eR,eS){var eY=eS[1],eT=eR;

switch(eY){case 'only':case 'first':while((eT=eT.previousSibling)){if(eT.nodeType===1){return false;
}}
if(eY==="first"){return true;
}eT=eR;
case 'last':while((eT=eT.nextSibling)){if(eT.nodeType===1){return false;
}}return true;
case 'nth':var fa=eS[2],eV=eS[3];

if(fa===1&&eV===0){return true;
}var eX=eS[0],parent=eR.parentNode;

if(parent&&(parent.sizcache!==eX||!eR.nodeIndex)){var eU=0;

for(eT=parent.firstChild;eT;eT=eT.nextSibling){if(eT.nodeType===1){eT.nodeIndex=++eU;
}}parent.sizcache=eX;
}var eW=eR.nodeIndex-eV;

if(fa===0){return eW===0;
}else{return (eW%fa===0&&eW/fa>=0);
}}},ID:function(cO,cP){return cO.nodeType===1&&cO.getAttribute("id")===cP;
},TAG:function(bd,be){return (be==="*"&&bd.nodeType===1)||bd.nodeName.toLowerCase()===be;
},CLASS:function(bJ,bK){return (" "+(bJ.className||bJ.getAttribute("class"))+" ").indexOf(bK)>-1;
},ATTR:function(f,g){var name=g[1],o=en.attrHandle[name]?en.attrHandle[name](f):f[name]!=null?f[name]:f.getAttribute(name),n=o+"",k=g[2],h=g[4];
return o==null?k==="!=":k==="="?n===h:k==="*="?n.indexOf(h)>=0:k==="~="?(" "+n+" ").indexOf(h)>=0:!h?n&&o!==false:k==="!="?n!==h:k==="^="?n.indexOf(h)===0:k==="$="?n.substr(n.length-h.length)===h:k==="|="?n===h||n.substr(0,h.length+1)===h+"-":false;
},POS:function(bf,bg,i,bh){var name=bg[2],bi=en.setFilters[name];

if(bi){return bi(bf,i,bg,bh);
}}}};
var eq=en.match.POS,ej=function(eC,eD){return "\\"+(eD-0+1);
};

for(var eu in en.match){en.match[eu]=new RegExp(en.match[eu].source+(/(?![^\[]*\])(?![^\(]*\))/.source));
en.leftMatch[eu]=new RegExp(/(^(?:.|\r|\n)*?)/.source+en.match[eu].source.replace(/\\(\d+)/g,ej));
}var ek=function(ez,eA){ez=Array.prototype.slice.call(ez,0);

if(eA){eA.push.apply(eA,ez);
return eA;
}return ez;
};
try{Array.prototype.slice.call(document.documentElement.childNodes,0)[0].nodeType;
}catch(e){ek=function(S,T){var U=T||[],i=0;

if(er.call(S)==="[object Array]"){Array.prototype.push.apply(U,S);
}else{if(typeof S.length==="number"){for(var l=S.length;i<l;i++){U.push(S[i]);
}}else{for(;S[i];i++){U.push(S[i]);
}}}return U;
};
}var es;

if(document.documentElement.compareDocumentPosition){es=function(a,b){if(!a.compareDocumentPosition||!b.compareDocumentPosition){if(a==b){ep=true;
}return a.compareDocumentPosition?-1:1;
}var bc=a.compareDocumentPosition(b)&4?-1:a===b?0:1;

if(bc===0){ep=true;
}return bc;
};
}else if("sourceIndex" in document.documentElement){es=function(a,b){if(!a.sourceIndex||!b.sourceIndex){if(a==b){ep=true;
}return a.sourceIndex?-1:1;
}var bl=a.sourceIndex-b.sourceIndex;

if(bl===0){ep=true;
}return bl;
};
}else if(document.createRange){es=function(a,b){if(!a.ownerDocument||!b.ownerDocument){if(a==b){ep=true;
}return a.ownerDocument?-1:1;
}var dN=a.ownerDocument.createRange(),dO=b.ownerDocument.createRange();
dN.setStart(a,0);
dN.setEnd(a,0);
dO.setStart(b,0);
dO.setEnd(b,0);
var dM=dN.compareBoundaryPoints(Range.START_TO_END,dO);

if(dM===0){ep=true;
}return dM;
};
}el.getText=function(cb){var cd="",cc;

for(var i=0;cb[i];i++){cc=cb[i];
if(cc.nodeType===3||cc.nodeType===4){cd+=cc.nodeValue;
}else if(cc.nodeType!==8){cd+=el.getText(cc.childNodes);
}}return cd;
};
(function(){var dL=document.createElement("div"),dK="script"+(new Date()).getTime();
dL.innerHTML="<a name='"+dK+"'/>";
var dJ=document.documentElement;
dJ.insertBefore(dL,dJ.firstChild);
if(document.getElementById(dK)){en.find.ID=function(bz,bA,bB){if(typeof bA.getElementById!=="undefined"&&!bB){var m=bA.getElementById(bz[1]);
return m?m.id===bz[1]||typeof m.getAttributeNode!=="undefined"&&m.getAttributeNode("id").nodeValue===bz[1]?[m]:undefined:[];
}};
en.filter.ID=function(bX,bY){var ca=typeof bX.getAttributeNode!=="undefined"&&bX.getAttributeNode("id");
return bX.nodeType===1&&ca&&ca.nodeValue===bY;
};
}dJ.removeChild(dL);
dJ=dL=null;
})();
(function(){var bM=document.createElement("div");
bM.appendChild(document.createComment(""));
if(bM.getElementsByTagName("*").length>0){en.find.TAG=function(bS,bT){var bV=bT.getElementsByTagName(bS[1]);
if(bS[1]==="*"){var bU=[];

for(var i=0;bV[i];i++){if(bV[i].nodeType===1){bU.push(bV[i]);
}}bV=bU;
}return bV;
};
}bM.innerHTML="<a href='#'></a>";

if(bM.firstChild&&typeof bM.firstChild.getAttribute!=="undefined"&&bM.firstChild.getAttribute("href")!=="#"){en.attrHandle.href=function(bR){return bR.getAttribute("href",2);
};
}bM=null;
})();

if(document.querySelectorAll){(function(){var dY=el,dX=document.createElement("div");
dX.innerHTML="<p class='TEST'></p>";
if(dX.querySelectorAll&&dX.querySelectorAll(".TEST").length===0){return;
}el=function(dP,dQ,dR,dS){dQ=dQ||document;
if(!dS&&dQ.nodeType===9&&!el.isXML(dQ)){try{return ek(dQ.querySelectorAll(dP),dR);
}catch(e){}}return dY(dP,dQ,dR,dS);
};

for(var ea in dY){el[ea]=dY[ea];
}dX=null;
})();
}(function(){var bW=document.createElement("div");
bW.innerHTML="<div class='test e'></div><div class='test'></div>";
if(!bW.getElementsByClassName||bW.getElementsByClassName("e").length===0){return;
}bW.lastChild.className="e";

if(bW.getElementsByClassName("e").length===1){return;
}en.order.splice(1,0,"CLASS");
en.find.CLASS=function(ck,cl,cm){if(typeof cl.getElementsByClassName!=="undefined"&&!cm){return cl.getElementsByClassName(ck[1]);
}};
bW=null;
})();
function ey(eb,ec,ed,ee,ef,eg){for(var i=0,l=ee.length;i<l;i++){var ei=ee[i];

if(ei){ei=ei[eb];
var eh=false;

while(ei){if(ei.sizcache===ed){eh=ee[ei.sizset];
break;
}
if(ei.nodeType===1&&!eg){ei.sizcache=ed;
ei.sizset=i;
}
if(ei.nodeName.toLowerCase()===ec){eh=ei;
break;
}ei=ei[eb];
}ee[i]=eh;
}}}function ew(eE,eF,eG,eH,eI,eJ){for(var i=0,l=eH.length;i<l;i++){var eL=eH[i];

if(eL){eL=eL[eE];
var eK=false;

while(eL){if(eL.sizcache===eG){eK=eH[eL.sizset];
break;
}
if(eL.nodeType===1){if(!eJ){eL.sizcache=eG;
eL.sizset=i;
}
if(typeof eF!=="string"){if(eL===eF){eK=true;
break;
}}else if(el.filter(eF,[eL]).length>0){eK=eL;
break;
}}eL=eL[eE];
}eH[i]=eK;
}}}el.contains=document.compareDocumentPosition?
function(a,b){return !!(a.compareDocumentPosition(b)&16);
}:
function(a,b){return a!==b&&(a.contains?a.contains(b):true);
};
el.isXML=function(bu){var bv=(bu?bu.ownerDocument||bu:0).documentElement;
return bv?bv.nodeName!=="HTML":false;
};
var em=function(cv,cw){var cy=[],cx="",cA,cz=cw.nodeType?[cw]:cw;
while((cA=en.match.PSEUDO.exec(cv))){cx+=cA[0];
cv=cv.replace(en.match.PSEUDO,"");
}cv=en.relative[cv]?cv+"*":cv;

for(var i=0,l=cz.length;i<l;i++){el(cv,cz[i],cy);
}return el.filter(cx,cy);
};
var et=qx.bom.Selector;
et.query=function(bs,bt){return el(bs,bt);
};
et.matches=function(cU,cV){return el(cU,null,null,cV);
};
})();
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
(function(){var y="get",x="set",w="reset",v=":not(",u="getValue",t="append",s=")",r="getPreviousSiblings",q="#",p="qx.bom.Collection",V="setValue",U="prepend",T="string",S="getAncestors",R="getOffsetParent",Q="remove",P=">*",O="add",N="*",M="addListener",F="has",G="toggle",D="getSiblings",E="replace",B="after",C="replaceWith",z="setCss",A="setStyles",H="before",I="getNextSiblings",K="getPosition",J="getCss",L="removeListener";
(function(){var bI=function(cc,cd){return function(dj,dk,dl,dm,dn,dp){var length=this.length;

if(length>0){var dq=cc[cd];

for(var i=0;i<length;i++){if(this[i].nodeType===1){dq.call(cc,this[i],dj,dk,dl,dm,dn,dp);
}}}return this;
};
};
var bH=function(m,n){return function(bT,bU,bV,bW,bX,bY){if(this.length>0){var ca=this[0].nodeType===1?m[n](this[0],bT,bU,bV,bW,bX,bY):null;

if(ca&&ca.nodeType){return this.__JO([ca]);
}else{return ca;
}}return null;
};
};
qx.Class.define(p,{extend:qx.type.BaseArray,statics:{query:function(cf,cg){var ch=qx.bom.Selector.query(cf,cg);
return qx.lang.Array.cast(ch,qx.bom.Collection);
},id:function(ci){var cj=document.getElementById(ci);
if(cj&&cj.id!=ci){return qx.bom.Collection.query(q+ci);
}if(cj){return new qx.bom.Collection(cj);
}else{return new qx.bom.Collection();
}},html:function(dt,du){var dv=qx.bom.Html.clean([dt],du);
return qx.lang.Array.cast(dv,qx.bom.Collection);
},__JK:/^[^<]*(<(.|\s)+>)[^>]*$|^#([\w-]+)$/,create:function(cT,cU){var cW=qx.bom.Collection;
if(cT.nodeType){return new cW(cT);
}else if(typeof cT===T){var cV=cW.__JK.exec(cT);

if(cV){return cV[1]?cW.html(cV[1],cU):cW.id(cV[3].substring(1));
}else{return cW.query(cT,cU);
}}else{return qx.lang.Array.cast(cT,qx.bom.Collection);
}}},members:{__JL:null,setAttribute:bI(qx.bom.element.Attribute,x),resetAttribute:bI(qx.bom.element.Attribute,w),getAttribute:bH(qx.bom.element.Attribute,y),addClass:bI(qx.bom.element.Class,O),getClass:bH(qx.bom.element.Class,y),hasClass:bH(qx.bom.element.Class,F),removeClass:bI(qx.bom.element.Class,Q),replaceClass:bI(qx.bom.element.Class,E),toggleClass:bI(qx.bom.element.Class,G),setValue:bI(qx.bom.Input,V),getValue:bH(qx.bom.Input,u),setStyle:bI(qx.bom.element.Style,x),setStyles:bI(qx.bom.element.Style,A),resetStyle:bI(qx.bom.element.Style,w),getStyle:bH(qx.bom.element.Style,y),setCss:bI(qx.bom.element.Style,z),getCss:bI(qx.bom.element.Style,J),getOffset:bH(qx.bom.element.Location,y),getPosition:bH(qx.bom.element.Location,K),getOffsetParent:bH(qx.bom.element.Location,R),setScrollLeft:function(cq){var Node=qx.dom.Node;

for(var i=0,l=this.length,cr;i<l;i++){cr=this[i];

if(Node.isElement(cr)){cr.scrollLeft=cq;
}else if(Node.isWindow(cr)){cr.scrollTo(cq,this.getScrollTop(cr));
}else if(Node.isDocument(cr)){Node.getWindow(cr).scrollTo(cq,this.getScrollTop(cr));
}}return this;
},setScrollTop:function(bP){var Node=qx.dom.Node;

for(var i=0,l=this.length,bQ;i<l;i++){bQ=this[i];

if(Node.isElement(bQ)){bQ.scrollTop=bP;
}else if(Node.isWindow(bQ)){bQ.scrollTo(this.getScrollLeft(bQ),bP);
}else if(Node.isDocument(bQ)){Node.getWindow(bQ).scrollTo(this.getScrollLeft(bQ),bP);
}}return this;
},getScrollLeft:function(){var cY=this[0];

if(!cY){return null;
}var Node=qx.dom.Node;

if(Node.isWindow(cY)||Node.isDocument(cY)){return qx.bom.Viewport.getScrollLeft();
}return cY.scrollLeft;
},getScrollTop:function(){var dw=this[0];

if(!dw){return null;
}var Node=qx.dom.Node;

if(Node.isWindow(dw)||Node.isDocument(dw)){return qx.bom.Viewport.getScrollTop();
}return dw.scrollTop;
},getWidth:function(){var W=this[0];
var Node=qx.dom.Node;

if(W){if(Node.isElement(W)){return qx.bom.element.Dimension.getWidth(W);
}else if(Node.isDocument(W)){return qx.bom.Document.getWidth(Node.getWindow(W));
}else if(Node.isWindow(W)){return qx.bom.Viewport.getWidth(W);
}}return null;
},getContentWidth:function(){var ds=this[0];

if(qx.dom.Node.isElement(ds)){return qx.bom.element.Dimension.getContentWidth(ds);
}return null;
},getHeight:function(){var cO=this[0];
var Node=qx.dom.Node;

if(cO){if(Node.isElement(cO)){return qx.bom.element.Dimension.getHeight(cO);
}else if(Node.isDocument(cO)){return qx.bom.Document.getHeight(Node.getWindow(cO));
}else if(Node.isWindow(cO)){return qx.bom.Viewport.getHeight(cO);
}}return null;
},getContentHeight:function(){var bN=this[0];

if(qx.dom.Node.isElement(bN)){return qx.bom.element.Dimension.getContentHeight(bN);
}return null;
},addListener:bI(qx.bom.Element,M),removeListener:bI(qx.bom.Element,L),eq:function(cG){return this.slice(cG,+cG+1);
},filter:function(bd,be){var bf;

if(qx.lang.Type.isFunction(bd)){bf=qx.type.BaseArray.prototype.filter.call(this,bd,be);
}else{bf=qx.bom.Selector.matches(bd,this);
}return this.__JO(bf);
},is:function(bz){return !!bz&&qx.bom.Selector.matches(bz,this).length>0;
},__JM:/^.[^:#\[\.,]*$/,not:function(bb){if(this.__JM.test(bb)){var bc=qx.bom.Selector.matches(v+bb+s,this);
return this.__JO(bc);
}var bc=qx.bom.Selector.matches(bb,this);
return this.filter(function(bn){return bc.indexOf(bn)===-1;
});
},add:function(df,dg){var dh=qx.bom.Selector.query(df,dg);
var di=qx.lang.Array.unique(this.concat(dh));
return this.__JO(di);
},children:function(bJ){var bK=[];

for(var i=0,l=this.length;i<l;i++){bK.push.apply(bK,qx.dom.Hierarchy.getChildElements(this[i]));
}
if(bJ){bK=qx.bom.Selector.matches(bJ,bK);
}return this.__JO(bK);
},closest:function(cm){var cn=new qx.bom.Collection(1);
var cp=qx.bom.Selector;
var co=this.map(function(cX){while(cX&&cX.ownerDocument){cn[0]=cX;

if(cp.matches(cm,cn).length>0){return cX;
}cX=cX.parentNode;
}});
return this.__JO(qx.lang.Array.unique(co));
},contents:function(){var bl=[];
var bk=qx.lang.Array;

for(var i=0,l=this.length;i<l;i++){bl.push.apply(bl,bk.fromCollection(this[i].childNodes));
}return this.__JO(bl);
},find:function(X){var ba=qx.bom.Selector;
if(this.length===1){return this.__JO(ba.query(X,this[0]));
}else{var Y=[];

for(var i=0,l=this.length;i<l;i++){Y.push.apply(Y,ba.query(X,this[i]));
}return this.__JO(qx.lang.Array.unique(Y));
}},next:function(db){var dc=qx.dom.Hierarchy;
var dd=this.map(dc.getNextElementSibling,dc);
if(db){dd=qx.bom.Selector.matches(db,dd);
}return this.__JO(dd);
},nextAll:function(cQ){return this.__JN(I,cQ);
},prev:function(bu){var bv=qx.dom.Hierarchy;
var bw=this.map(bv.getPreviousElementSibling,bv);
if(bu){bw=qx.bom.Selector.matches(bu,bw);
}return this.__JO(bw);
},prevAll:function(cH){return this.__JN(r,cH);
},parent:function(bx){var Element=qx.dom.Element;
var by=qx.lang.Array.unique(this.map(Element.getParentElement,Element));
if(bx){by=qx.bom.Selector.matches(bx,by);
}return this.__JO(by);
},parents:function(bF){return this.__JN(S,bF);
},siblings:function(de){return this.__JN(D,de);
},__JN:function(bA,bB){var bD=[];
var bC=qx.dom.Hierarchy;

for(var i=0,l=this.length;i<l;i++){bD.push.apply(bD,bC[bA](this[i]));
}var bE=qx.lang.Array.unique(bD);
if(bB){bE=qx.bom.Selector.matches(bB,bE);
}return this.__JO(bE);
},__JO:function(bL){var bM=new qx.bom.Collection;
bM.__JL=this;
bL=Array.prototype.slice.call(bL,0);
bM.push.apply(bM,bL);
return bM;
},andSelf:function(){return this.add(this.__JL);
},end:function(){return this.__JL||new qx.bom.Collection();
},__JP:function(cv,cw){var cB=this[0];
var cA=cB.ownerDocument||cB;
var cz=cA.createDocumentFragment();
var cD=qx.bom.Html.clean(cv,cA,cz);
var cF=cz.firstChild;
if(cF){var cx=this.length-1;

for(var i=0,l=cx;i<l;i++){cw.call(this,this[i],cz.cloneNode(true));
}cw.call(this,this[cx],cz);
}if(cD){var cy;
var cE=qx.io.ScriptLoader;
var cC=qx.lang.Function;

for(var i=0,l=cD.length;i<l;i++){cy=cD[i];
if(cy.src){cE.get().load(cy.src);
}else{cC.globalEval(cy.text||cy.textContent||cy.innerHTML||"");
}if(cy.parentNode){cy.parentNode.removeChild(cy);
}}}return this;
},__JQ:function(cI,cJ){var cL=qx.bom.Selector;
var cK=qx.lang.Array;
var cN=[];

for(var i=0,l=cI.length;i<l;i++){{};
cN.push.apply(cN,cL.query(cI[i]));
}cN=cK.cast(cK.unique(cN),qx.bom.Collection);
for(var i=0,cM=this.length;i<cM;i++){cN[cJ](this[i]);
}return this;
},append:function(bS){return this.__JP(arguments,this.__JR);
},prepend:function(bm){return this.__JP(arguments,this.__JS);
},__JR:function(bq,br){bq.appendChild(br);
},__JS:function(ct,cu){ct.insertBefore(cu,ct.firstChild);
},appendTo:function(cP){return this.__JQ(arguments,t);
},prependTo:function(cs){return this.__JQ(arguments,U);
},before:function(bt){return this.__JP(arguments,this.__JT);
},after:function(h){return this.__JP(arguments,this.__JU);
},__JT:function(ck,cl){ck.parentNode.insertBefore(cl,ck);
},__JU:function(cR,cS){cR.parentNode.insertBefore(cS,cR.nextSibling);
},insertBefore:function(bR){return this.__JQ(arguments,H);
},insertAfter:function(cb){return this.__JQ(arguments,B);
},wrapAll:function(content){var bp=this[0];

if(bp){var bo=qx.bom.Collection.create(content,bp.ownerDocument).clone();
if(bp.parentNode){bp.parentNode.insertBefore(bo[0],bp);
}bo.map(this.__JV).append(this);
}return this;
},__JV:function(o){while(o.firstChild){o=o.firstChild;
}return o;
},wrapInner:function(content){var dr=new qx.bom.Collection(1);

for(var i=0,l=this.length;i<l;i++){dr[0]=this[i];
dr.contents().wrapAll(content);
}return this;
},wrap:function(content){var bO=new qx.bom.Collection(1);
for(var i=0,l=this.length;i<l;i++){bO[0]=this[i];
bO.wrapAll(content);
}return this;
},replaceWith:function(content){return this.after(content).remove();
},replaceAll:function(ce){return this.__JQ(arguments,C);
},remove:function(bg){var bi=this;

if(bg){bi=this.filter(bg);

if(bi.length==0){return this;
}}for(var i=0,bj=bi.length,bh;i<bj;i++){bh=bi[i];

if(bh.parentNode){bh.parentNode.removeChild(bh);
}}return bi;
},destroy:function(a){if(this.length==0){return this;
}var c=qx.bom.Selector;
var f=this;

if(a){f=this.filter(a);

if(f.length==0){return this;
}}var e=qx.event.Registration.getManager(this[0]);

for(var i=0,l=f.length,d,g;i<l;i++){d=f[i];
e.removeAllListeners(d);
g=c.query(N,d);

for(var j=0,b=g.length;j<b;j++){e.removeAllListeners(g[j]);
}if(d.parentNode){d.parentNode.removeChild(d);
}}if(a){f.end();
qx.lang.Array.exclude(this,f);
}else{this.length=0;
}return this;
},empty:function(){var da=qx.bom.Collection;

for(var i=0,l=this.length;i<l;i++){da.query(P,this[i]).destroy();
while(this.firstChild){this.removeChild(this.firstChild);
}}return this;
},clone:function(k){var Element=qx.bom.Element;
return k?
this.map(function(bG){return Element.clone(bG,true);
}):this.map(Element.clone,Element);
}},defer:function(bs){if(window.$==null){window.$=bs.create;
}}});
})();
})();
(function(){var e="script",d="string",c="undefined",b="qx.bom.Html",a="text/javascript";
qx.Class.define(b,{statics:{__GT:function(f,g,h){return h.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i)?f:g+"></"+h+">";
},__GU:{opt:[1,"<select multiple='multiple'>","</select>"],leg:[1,"<fieldset>","</fieldset>"],table:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],def:qx.core.Variant.select("qx.client",{"mshtml":[1,"div<div>","</div>"],"default":null})},__GV:function(k,m){var s=m.createElement("div");
k=k.replace(/(<(\w+)[^>]*?)\/>/g,this.__GT);
var o=k.replace(/^\s+/,"").substring(0,5).toLowerCase();
var r,n=this.__GU;

if(!o.indexOf("<opt")){r=n.opt;
}else if(!o.indexOf("<leg")){r=n.leg;
}else if(o.match(/^<(thead|tbody|tfoot|colg|cap)/)){r=n.table;
}else if(!o.indexOf("<tr")){r=n.tr;
}else if(!o.indexOf("<td")||!o.indexOf("<th")){r=n.td;
}else if(!o.indexOf("<col")){r=n.col;
}else{r=n.def;
}if(r){s.innerHTML=r[1]+k+r[2];
var q=r[0];

while(q--){s=s.lastChild;
}}else{s.innerHTML=k;
}if(qx.core.Variant.isSet("qx.client","mshtml")){var t=/<tbody/i.test(k);
var p=!o.indexOf("<table")&&!t?s.firstChild&&s.firstChild.childNodes:r[1]=="<table>"&&!t?s.childNodes:[];

for(var j=p.length-1;j>=0;--j){if(p[j].tagName.toLowerCase()==="tbody"&&!p[j].childNodes.length){p[j].parentNode.removeChild(p[j]);
}}if(/^\s/.test(k)){s.insertBefore(m.createTextNode(k.match(/^\s*/)[0]),s.firstChild);
}}return qx.lang.Array.fromCollection(s.childNodes);
},clean:function(u,v,w){v=v||document;
if(typeof v.createElement===c){v=v.ownerDocument||v[0]&&v[0].ownerDocument||document;
}if(!w&&u.length===1&&typeof u[0]===d){var D=/^<(\w+)\s*\/?>$/.exec(u[0]);

if(D){return [v.createElement(D[1])];
}}var x,z=[];

for(var i=0,l=u.length;i<l;i++){x=u[i];
if(typeof x===d){x=this.__GV(x,v);
}if(x.nodeType){z.push(x);
}else if(x instanceof qx.type.BaseArray){z.push.apply(z,Array.prototype.slice.call(x,0));
}else if(x.toElement){z.push(x.toElement());
}else{z.push.apply(z,x);
}}if(w){var C=[],B=qx.lang.Array,A,y;

for(var i=0;z[i];i++){A=z[i];

if(A.nodeType==1&&A.tagName.toLowerCase()===e&&(!A.type||A.type.toLowerCase()===a)){if(A.parentNode){A.parentNode.removeChild(z[i]);
}C.push(A);
}else{if(A.nodeType===1){y=B.fromCollection(A.getElementsByTagName(e));
z.splice.apply(z,[i+1,0].concat(y));
}w.appendChild(A);
}}return C;
}return z;
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
(function(){var o="success",n="complete",m="error",l="load",k="fail",j="qx.client",i="loaded",h="readystatechange",g="head",f="qx.io.ScriptLoader",b="mshtml|webkit",d="script",c="text/javascript",a="abort";
qx.Bootstrap.define(f,{construct:function(){this.__xc=qx.Bootstrap.bind(this.__xh,this);
this.__xd=document.createElement(d);
},members:{__xe:null,__xf:null,__xg:null,__xc:null,__xd:null,load:function(p,q,r){if(this.__xe){throw new Error("Another request is still running!");
}this.__xe=true;
var s=document.getElementsByTagName(g)[0];
var t=this.__xd;
this.__xf=q||null;
this.__xg=r||window;
t.type=c;
t.onerror=t.onload=t.onreadystatechange=this.__xc;
t.src=p;
setTimeout(function(){s.appendChild(t);
},0);
},abort:function(){if(this.__xe){this.dispose(a);
}},dispose:function(status){if(this._disposed){return;
}this._disposed=true;
var v=this.__xd;
v.onerror=v.onload=v.onreadystatechange=null;
var u=v.parentNode;

if(u){u.removeChild(v);
}delete this.__xe;
if(this.__xf){if(qx.core.Variant.isSet(j,b)){var self=this;
setTimeout(qx.event.GlobalError.observeMethod(function(){self.__xf.call(self.__xg,status);
delete self.__xf;
}),0);
}else{this.__xf.call(this.__xg,status);
delete this.__xf;
}}},__xh:qx.event.GlobalError.observeMethod(qx.core.Variant.select(j,{"mshtml":function(e){var w=this.__xd.readyState;

if(w==i){this.dispose(o);
}else if(w==n){this.dispose(o);
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
(function(){var l="'>",k="[",h=", ",g="</span>",f="<span class='type-",e="</span> ",d="}",c="",b="]",a="{",C="map",B="<span class='object'>",A="]:",z="<span class='object' title='Object instance with hash code: ",y="string",x="level-",w="0",v="<span class='offset'>",u=":",t="qx.log.appender.Util",r="DIV",s="<span>",p="<span class='type-key'>",q="</span>:<span class='type-",n="</span>: ",o=" ",m="]</span>: ";
qx.Class.define(t,{statics:{toHtml:function(G){var Q=[];
var N,P,I,K;
Q.push(v,this.formatOffset(G.offset,6),e);

if(G.object){var H=G.win.qx.core.ObjectRegistry.fromHashCode(G.object);

if(H){Q.push(z+H.$$hash+l,H.classname,k,H.$$hash,m);
}}else if(G.clazz){Q.push(B+G.clazz.classname,n);
}var J=G.items;

for(var i=0,O=J.length;i<O;i++){N=J[i];
P=N.text;

if(P instanceof Array){var K=[];

for(var j=0,M=P.length;j<M;j++){I=P[j];

if(typeof I===y){K.push(s+this.escapeHTML(I)+g);
}else if(I.key){K.push(p+I.key+q+I.type+l+this.escapeHTML(I.text)+g);
}else{K.push(f+I.type+l+this.escapeHTML(I.text)+g);
}}Q.push(f+N.type+l);

if(N.type===C){Q.push(a,K.join(h),d);
}else{Q.push(k,K.join(h),b);
}Q.push(g);
}else{Q.push(f+N.type+l+this.escapeHTML(P)+e);
}}var L=document.createElement(r);
L.innerHTML=Q.join(c);
L.className=x+G.level;
return L;
},formatOffset:function(bb,length){var be=bb.toString();
var bc=(length||6)-be.length;
var bd=c;

for(var i=0;i<bc;i++){bd+=w;
}return bd+be;
},escapeHTML:function(F){return String(F).replace(/[<>&"']/g,this.__DB);
},__DB:function(D){var E={"<":"&lt;",">":"&gt;","&":"&amp;","'":"&#39;",'"':"&quot;"};
return E[D]||"?";
},toText:function(bf){return this.toTextArray(bf).join(o);
},toTextArray:function(R){var ba=[];
ba.push(this.formatOffset(R.offset,6));

if(R.object){var S=R.win.qx.core.ObjectRegistry.fromHashCode(R.object);

if(S){ba.push(S.classname+k+S.$$hash+A);
}}else if(R.clazz){ba.push(R.clazz.classname+u);
}var T=R.items;
var W,Y;

for(var i=0,X=T.length;i<X;i++){W=T[i];
Y=W.text;

if(Y instanceof Array){var U=[];

for(var j=0,V=Y.length;j<V;j++){U.push(Y[j].text);
}
if(W.type===C){ba.push(a,U.join(h),d);
}else{ba.push(k,U.join(h),b);
}}else{ba.push(Y);
}}return ba;
}}});
})();
(function(){var d="debug",c="log",b="qx.log.appender.Native",a="qx.client";
qx.Class.define(b,{statics:{process:qx.core.Variant.select(a,{"gecko":function(e){if(window.console&&console.firebug){console[e.level].call(console,qx.log.appender.Util.toText(e));
}},"mshtml":function(k){if(window.console){var m=k.level;

if(m==d){m=c;
}var l=qx.log.appender.Util.toText(k);
console[m](l);
}},"webkit":function(f){if(window.console){var h=f.level;

if(h==d){h=c;
}var g=qx.log.appender.Util.toText(f);
console[h](g);
}},"opera":function(i){}})},defer:function(j){qx.log.Logger.register(j);
}});
})();
(function(){var o="",n='</div>',m="Up",l="none",k="keypress",j='.qxconsole .messages{background:white;height:100%;width:100%;overflow:auto;}',i="Enter",h="px",g='.qxconsole .messages .user-result{background:white}',f='.qxconsole .messages .level-error{background:#FFE2D5}',ba="div",Y="user-command",X='<div class="command">',W='.qxconsole .command input:focus{outline:none;}',V='.qxconsole .messages .type-key{color:#565656;font-style:italic}',U='.qxconsole .messages .type-instance{color:#565656;font-weight:bold}',T='.qxconsole .messages div{padding:0px 4px;}',S='.qxconsole .messages .level-debug{background:white}',R='.qxconsole .messages .type-class{color:#5F3E8A;font-weight:bold}',Q="DIV",v='.qxconsole .messages .level-user{background:#E3EFE9}',w='<div class="qxconsole">',t="D",u='.qxconsole .messages .type-map{color:#CC3E8A;font-weight:bold;}',r='.qxconsole .messages .type-string{color:black;font-weight:normal;}',s='.qxconsole .control a{text-decoration:none;color:black;}',p='<div class="messages">',q='.qxconsole .messages .type-boolean{color:#15BC91;font-weight:normal;}',x='<input type="text"/>',y="clear",F='.qxconsole .command input{width:100%;border:0 none;font-family:Consolas,Monaco,monospace;font-size:11px;line-height:1.2;}',D='.qxconsole .messages .type-array{color:#CC3E8A;font-weight:bold;}',J='.qxconsole{z-index:10000;width:600px;height:300px;top:0px;right:0px;position:absolute;border-left:1px solid black;color:black;border-bottom:1px solid black;color:black;font-family:Consolas,Monaco,monospace;font-size:11px;line-height:1.2;}',H='.qxconsole .command{background:white;padding:2px 4px;border-top:1px solid black;}',M='.qxconsole .messages .user-command{color:blue}',L="F7",A="qx.log.appender.Console",P='.qxconsole .messages .level-info{background:#DEEDFA}',O="block",N='.qxconsole .messages .level-warn{background:#FFF7D5}',z='.qxconsole .messages .type-stringify{color:#565656;font-weight:bold}',B='.qxconsole .messages .user-error{background:#FFE2D5}',C='.qxconsole .control{background:#cdcdcd;border-bottom:1px solid black;padding:4px 8px;}',E='<div class="control"><a href="javascript:qx.log.appender.Console.clear()">Clear</a> | <a href="javascript:qx.log.appender.Console.toggle()">Hide</a></div>',G=">>> ",I="Down",K='.qxconsole .messages .type-number{color:#155791;font-weight:normal;}';
qx.Class.define(A,{statics:{init:function(){var a=[J,C,s,j,T,M,g,B,S,P,N,f,v,r,K,q,D,u,V,R,U,z,H,F,W];
qx.bom.Stylesheet.createElement(a.join(o));
var c=[w,E,p,n,X,x,n,n];
var d=document.createElement(Q);
d.innerHTML=c.join(o);
var b=d.firstChild;
document.body.appendChild(d.firstChild);
this.__Jr=b;
this.__Js=b.childNodes[1];
this.__Jt=b.childNodes[2].firstChild;
this.__Jy();
qx.log.Logger.register(this);
qx.core.ObjectRegistry.register(this);
},dispose:function(){qx.event.Registration.removeListener(document.documentElement,k,this.__Jz,this);
qx.log.Logger.unregister(this);
},clear:function(){this.__Js.innerHTML=o;
},process:function(bd){this.__Js.appendChild(qx.log.appender.Util.toHtml(bd));
this.__Ju();
},__Ju:function(){this.__Js.scrollTop=this.__Js.scrollHeight;
},__Jv:true,toggle:function(){if(!this.__Jr){this.init();
}else if(this.__Jr.style.display==l){this.show();
}else{this.__Jr.style.display=l;
}},show:function(){if(!this.__Jr){this.init();
}else{this.__Jr.style.display=O;
this.__Js.scrollTop=this.__Js.scrollHeight;
}},__Jw:[],execute:function(){var bg=this.__Jt.value;

if(bg==o){return;
}
if(bg==y){return this.clear();
}var be=document.createElement(ba);
be.innerHTML=qx.log.appender.Util.escapeHTML(G+bg);
be.className=Y;
this.__Jw.push(bg);
this.__Jx=this.__Jw.length;
this.__Js.appendChild(be);
this.__Ju();

try{var bf=window.eval(bg);
}catch(bi){qx.log.Logger.error(bi);
}
if(bf!==undefined){qx.log.Logger.debug(bf);
}},__Jy:function(e){this.__Js.style.height=(this.__Jr.clientHeight-this.__Jr.firstChild.offsetHeight-this.__Jr.lastChild.offsetHeight)+h;
},__Jz:function(e){var bc=e.getKeyIdentifier();
if((bc==L)||(bc==t&&e.isCtrlPressed())){this.toggle();
e.preventDefault();
}if(!this.__Jr){return;
}if(!qx.dom.Hierarchy.contains(this.__Jr,e.getTarget())){return;
}if(bc==i&&this.__Jt.value!=o){this.execute();
this.__Jt.value=o;
}if(bc==m||bc==I){this.__Jx+=bc==m?-1:1;
this.__Jx=Math.min(Math.max(0,this.__Jx),this.__Jw.length);
var bb=this.__Jw[this.__Jx];
this.__Jt.value=bb||o;
this.__Jt.select();
}}},defer:function(bh){qx.event.Registration.addListener(document.documentElement,k,bh.__Jz,bh);
}});
})();
(function(){var p="qx.client",o="head",n="text/css",m="stylesheet",l="}",k='@import "',j="{",h='";',g="qx.bom.Stylesheet",f="link",e="style";
qx.Class.define(g,{statics:{includeFile:function(bd,be){if(!be){be=document;
}var bf=be.createElement(f);
bf.type=n;
bf.rel=m;
bf.href=qx.util.ResourceManager.getInstance().toUri(bd);
var bg=be.getElementsByTagName(o)[0];
bg.appendChild(bf);
},createElement:qx.core.Variant.select(p,{"mshtml":function(v){var w=document.createStyleSheet();

if(v){w.cssText=v;
}return w;
},"default":function(z){var A=document.createElement(e);
A.type=n;

if(z){A.appendChild(document.createTextNode(z));
}document.getElementsByTagName(o)[0].appendChild(A);
return A.sheet;
}}),addRule:qx.core.Variant.select(p,{"mshtml":function(ba,bb,bc){ba.addRule(bb,bc);
},"default":function(P,Q,R){P.insertRule(Q+j+R+l,P.cssRules.length);
}}),removeRule:qx.core.Variant.select(p,{"mshtml":function(I,J){var K=I.rules;
var L=K.length;

for(var i=L-1;i>=0;--i){if(K[i].selectorText==J){I.removeRule(i);
}}},"default":function(E,F){var G=E.cssRules;
var H=G.length;

for(var i=H-1;i>=0;--i){if(G[i].selectorText==F){E.deleteRule(i);
}}}}),removeAllRules:qx.core.Variant.select(p,{"mshtml":function(M){var N=M.rules;
var O=N.length;

for(var i=O-1;i>=0;i--){M.removeRule(i);
}},"default":function(s){var t=s.cssRules;
var u=t.length;

for(var i=u-1;i>=0;i--){s.deleteRule(i);
}}}),addImport:qx.core.Variant.select(p,{"mshtml":function(q,r){q.addImport(r);
},"default":function(x,y){x.insertRule(k+y+h,x.cssRules.length);
}}),removeImport:qx.core.Variant.select(p,{"mshtml":function(a,b){var c=a.imports;
var d=c.length;

for(var i=d-1;i>=0;i--){if(c[i].href==b){a.removeImport(i);
}}},"default":function(S,T){var U=S.cssRules;
var V=U.length;

for(var i=V-1;i>=0;i--){if(U[i].href==T){S.deleteRule(i);
}}}}),removeAllImports:qx.core.Variant.select(p,{"mshtml":function(B){var C=B.imports;
var D=C.length;

for(var i=D-1;i>=0;i--){B.removeImport(i);
}},"default":function(W){var X=W.cssRules;
var Y=X.length;

for(var i=Y-1;i>=0;i--){if(X[i].type==X[i].IMPORT_RULE){W.deleteRule(i);
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
qx.Class.define(cv,{statics:{names:{"window":window,"document":document,"body":document.body},ignore:{"window":[bm,f,d,bG,bL,u,cx,S,P,D,X,r,bF,o,bM,cc,cd,bi,bz,cz,cm,ch,bu,bB,cE,co,bX,w,s,Y,cp,br,cD,T,c,bn,y,N,cu,bx,b,bC,bo,H,e,bE,bc,bj,h,L,F,cF,cr,bP,bY,bA,bh,R,bW,v,C],"document":[cC,bu,cA,k,bp,I,p,bk,bQ,cj,ci,cf,bs,cn,W,bS,bV,t,be,bT,q,j,bU,ck],"body":[cy,bJ,G,z,cw,x,bR,bN,ct,bd,ch,bv,U,cG,l,bs,cf,bH,ba,bO,Q,bK,by,cB,cs,A,J,n,ck,K,ci,cj,g,m,V,bq,bD]},getInfo:function(cN){var cO=qx.dev.Pollution.getTextList(cN||cm);

if(cO){return cq+cO;
}else{return M;
}},extract:function(cP){var cR=[];
var cQ=qx.dev.Pollution.ignore[cP];
if(qx.core.Variant.isSet(ce,B)){if(cP==cm){cQ=cQ.slice(0);

for(var cS=0;cS<window.length;cS++){cQ.push(cl+cS);
}}}var cT=qx.dev.Pollution.names[cP];

for(var cU in cT){try{if(qx.core.Variant.isSet(ce,cb)){if(cP==cm&&cU==cd){continue;
}}if(typeof cT[cU]==ca||cT[cU]===null){continue;
}if(typeof cT[cU]==cg&&cT[cU].toString().indexOf(bt)!=-1){continue;
}if(typeof cT[cU].constructor==cg){if((cT[cU].constructor.toString().indexOf(bt)!=-1)||(cT[cU].constructor.toString().indexOf(bI)!=-1)){continue;
}}if(qx.lang.Array.contains(cQ,cU)){continue;
}}catch(a){continue;
}cR.push({"key":cU,"value":cT[cU]});
}return cR;
},getHtmlTable:function(cH){var cJ=[];
var cI=bg;
var cL=bl;
var cM=bw;
cJ.push(O);
var cK=this.extract(cH);

for(var i=0;i<cK.length;i++){cJ.push(cI+cK[i].key+cL+cK[i].value+cM);
}cJ.push(bf);
return cJ.join(cl);
},getTextList:function(cV){var cX=[];
var cY=E;
var da=bb;
var cW=this.extract(cV);

for(var i=0;i<cW.length;i++){cX.push(cW[i].key+cY+cW[i].value+da);
}return cX.join(cl);
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
(function(){var j="white",i="black",h="#3E6CA8",g="#EBE9ED",f="#A7A6AA",e="#EEE",d="#F3F0F5",c="gray",b="#85878C",a="#888888",E="#3E5B97",D="#FFFFE1",C="#F3F8FD",B="#CBC8CD",A="#FFE0E0",z="#F4F4F4",y="#808080",x="#CCCCCC",w="#C82C2C",v="#DBEAF9",q="#BCCEE5",r="#A5BDDE",o="#7CA0CF",p="#F6F5F7",m="#FF9999",n="qx.theme.classic.Color",k="#990000",l="#F9F8E9",s="#DCDFE4",t="#FAFBFE",u="#AAAAAA";
qx.Theme.define(n,{colors:{"background":g,"background-light":d,"background-focused":C,"background-focused-inner":v,"background-disabled":z,"background-selected":h,"background-field":j,"background-pane":t,"background-invalid":A,"border-lead":a,"border-light":j,"border-light-shadow":s,"border-dark-shadow":f,"border-dark":b,"border-main":b,"border-focused-light":q,"border-focused-light-shadow":r,"border-focused-dark-shadow":o,"border-focused-dark":h,"border-separator":y,"invalid":k,"border-focused-invalid":m,"text":i,"text-disabled":f,"text-selected":j,"text-focused":E,"text-placeholder":B,"tooltip":D,"tooltip-text":i,"tooltip-invalid":w,"button":g,"button-hovered":p,"button-abandoned":l,"button-checked":d,"window-active-caption-text":[255,255,255],"window-inactive-caption-text":[255,255,255],"window-active-caption":[51,94,168],"window-inactive-caption":[111,161,217],"date-chooser":j,"date-chooser-title":[116,116,116],"date-chooser-selected":[52,52,52],"effect":[254,200,60],"table-pane":j,"table-header":[242,242,242],"table-header-border":[214,213,217],"table-header-cell":[235,234,219],"table-header-cell-hover":[255,255,255],"table-focus-indicator":[179,217,255],"table-row-background-focused-selected":[90,138,211],"table-row-background-focused":[221,238,255],"table-row-background-selected":[51,94,168],"table-row-background-even":[250,248,243],"table-row-background-odd":[255,255,255],"table-row-selected":[255,255,255],"table-row":[0,0,0],"table-row-line":e,"table-column-line":e,"progressive-table-header":u,"progressive-table-row-background-even":[250,248,243],"progressive-table-row-background-odd":[255,255,255],"progressive-progressbar-background":c,"progressive-progressbar-indicator-done":x,"progressive-progressbar-indicator-undone":j,"progressive-progressbar-percent-background":c,"progressive-progressbar-percent-text":j}});
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
(function(){var j="px ",i=" ",h="Color",g="Number",f=";",e="px",d="shorthand",c="innerWidthRight",b="border-left:",a="innerColorBottom",B='',A="scale",z="border-top",y="innerWidthTop",x="border-left",w="innerColorRight",v="innerColorTop",u="relative",t="border-top:",s="qx.ui.decoration.Double",q="border-right:",r='line-height:0;',o="innerColorLeft",p="border-bottom",m="innerWidthBottom",n="innerWidthLeft",k="border-bottom:",l="border-right";
qx.Class.define(s,{extend:qx.ui.decoration.Single,construct:function(H,I,J,innerWidth,K){qx.ui.decoration.Single.call(this,H,I,J,innerWidth,K);
if(innerWidth!=null){this.setInnerWidth(innerWidth);
}
if(K!=null){this.setInnerColor(K);
}},properties:{innerWidthTop:{check:g,init:0},innerWidthRight:{check:g,init:0},innerWidthBottom:{check:g,init:0},innerWidthLeft:{check:g,init:0},innerWidth:{group:[y,c,m,n],mode:d},innerColorTop:{nullable:true,check:h},innerColorRight:{nullable:true,check:h},innerColorBottom:{nullable:true,check:h},innerColorLeft:{nullable:true,check:h},innerColor:{group:[v,w,a,o],mode:d}},members:{__DE:null,_getDefaultInsets:function(){return {top:this.getWidthTop()+this.getInnerWidthTop(),right:this.getWidthRight()+this.getInnerWidthRight(),bottom:this.getWidthBottom()+this.getInnerWidthBottom(),left:this.getWidthLeft()+this.getInnerWidthLeft()};
},_isInitialized:function(){return !!this.__DE;
},getMarkup:function(){if(this.__DE){return this.__DE;
}var C=qx.theme.manager.Color.getInstance();
var F={position:u};
var D=this.getInnerWidthTop();

if(D>0){F[z]=D+j+this.getStyleTop()+i+C.resolve(this.getInnerColorTop());
}var D=this.getInnerWidthRight();

if(D>0){F[l]=D+j+this.getStyleRight()+i+C.resolve(this.getInnerColorRight());
}var D=this.getInnerWidthBottom();

if(D>0){F[p]=D+j+this.getStyleBottom()+i+C.resolve(this.getInnerColorBottom());
}var D=this.getInnerWidthLeft();

if(D>0){F[x]=D+j+this.getStyleLeft()+i+C.resolve(this.getInnerColorLeft());
}{};
var G=this._generateBackgroundMarkup(F);
var E=r;
if((qx.bom.client.Engine.MSHTML&&qx.bom.client.Engine.VERSION<8)||(qx.bom.client.Engine.MSHTML&&qx.bom.client.Engine.DOCUMENT_MODE<8)){E=B;
}var D=this.getWidthTop();

if(D>0){E+=t+D+j+this.getStyleTop()+i+C.resolve(this.getColorTop())+f;
}var D=this.getWidthRight();

if(D>0){E+=q+D+j+this.getStyleRight()+i+C.resolve(this.getColorRight())+f;
}var D=this.getWidthBottom();

if(D>0){E+=k+D+j+this.getStyleBottom()+i+C.resolve(this.getColorBottom())+f;
}var D=this.getWidthLeft();

if(D>0){E+=b+D+j+this.getStyleLeft()+i+C.resolve(this.getColorLeft())+f;
}{};
return this.__DE='<div style="position:absolute;top:0;left:0;'+E+'">'+G+'</div>';
},resize:function(L,M,N){var P=this.getBackgroundImage()&&this.getBackgroundRepeat()==A;

if(P||qx.bom.client.Feature.CONTENT_BOX){var O=this.getInsets();
var innerWidth=M-O.left-O.right;
var innerHeight=N-O.top-O.bottom;
}else{var innerWidth=M-this.getWidthLeft()-this.getWidthRight();
var innerHeight=N-this.getWidthTop()-this.getWidthBottom();
}if(innerWidth<0){innerWidth=0;
}
if(innerHeight<0){innerHeight=0;
}L.firstChild.style.width=innerWidth+e;
L.firstChild.style.height=innerHeight+e;
}},destruct:function(){this.__DE=null;
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
(function(){var j="border-dark-shadow",i="border-light",h="border-dark",g="border-light-shadow",f="solid",e="gray",d="border-focused-light",c="border-focused-dark",b="border-focused-light-shadow",a="border-focused-dark-shadow",y="table-header-border",x="dotted",w="border-separator",v="tooltip-text",u="invalid",t="white",s="decoration/shadow/shadow.png",r="black",q="effect",p="table-focus-indicator",n="border-focused-invalid",o="qx/decoration/Classic",l="border-lead",m="decoration/shadow/shadow-small.png",k="qx.theme.classic.Decoration";
qx.Theme.define(k,{aliases:{decoration:o},decorations:{"main":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:h}},"keyboard-focus":{decorator:qx.ui.decoration.Single,style:{width:1,color:r,style:x}},"inset":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[j,i,i,j],innerColor:[h,g,g,h]}},"outset":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[g,h,h,g],innerColor:[i,j,j,i]}},"groove":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[j,i,i,j],innerColor:[i,j,j,i]}},"ridge":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[i,j,j,i],innerColor:[j,i,i,j]}},"inset-thin":{decorator:qx.ui.decoration.Single,style:{width:1,color:[j,i,i,j]}},"outset-thin":{decorator:qx.ui.decoration.Single,style:{width:1,color:[i,j,j,i]}},"focused-inset":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[a,d,d,a],innerColor:[c,b,b,c]}},"focused-outset":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[b,c,c,b],innerColor:[d,a,a,d]}},"border-invalid":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[j,i,i,j],innerColor:u}},"separator-horizontal":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:w}},"separator-vertical":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:w}},"shadow":{decorator:qx.ui.decoration.Grid,style:{baseImage:s,insets:[4,8,8,4]}},"shadow-window":{decorator:qx.ui.decoration.Grid,style:{baseImage:s,insets:[4,8,8,4]}},"shadow-small":{decorator:qx.ui.decoration.Grid,style:{baseImage:m,insets:[0,3,3,0]}},"checkbox-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:u,innerColor:n,insets:[0]}},"lead-item":{decorator:qx.ui.decoration.Uniform,style:{width:1,style:x,color:l}},"tooltip":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:v}},"tooltip-error":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:v}},"toolbar-separator":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:j}},"toolbar-part-handle":{decorator:qx.ui.decoration.Single,style:{width:1,style:f,colorTop:t,colorLeft:t,colorRight:j,colorBottom:j}},"menu-separator":{decorator:qx.ui.decoration.Single,style:{widthTop:1,widthBottom:1,colorTop:h,colorBottom:i}},"datechooser-date-pane":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:e,style:f}},"datechooser-weekday":{decorator:qx.ui.decoration.Single,style:{widthBottom:1,colorBottom:e,style:f}},"datechooser-week":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:e,style:f}},"datechooser-week-header":{decorator:qx.ui.decoration.Single,style:{widthBottom:1,colorBottom:e,widthRight:1,colorRight:e,style:f}},"tabview-page-button-top":{decorator:qx.ui.decoration.Double,style:{width:1,color:[g,h,h,g],innerWidth:1,innerColor:[i,j,j,i],widthBottom:0,innerWidthBottom:0}},"tabview-page-button-bottom":{decorator:qx.ui.decoration.Double,style:{width:1,color:[g,h,h,g],innerWidth:1,innerColor:[i,j,j,i],widthTop:0,innerWidthTop:0}},"tabview-page-button-left":{decorator:qx.ui.decoration.Double,style:{width:1,color:[g,h,h,g],innerWidth:1,innerColor:[i,j,j,i],widthRight:0,innerWidthRight:0}},"tabview-page-button-right":{decorator:qx.ui.decoration.Double,style:{width:1,color:[g,h,h,g],innerWidth:1,innerColor:[i,j,j,i],widthLeft:0,innerWidthLeft:0}},"table-statusbar":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:j,styleTop:f}},"table-scroller-header":{decorator:qx.ui.decoration.Single,style:{widthBottom:1,colorBottom:y,styleBottom:f}},"table-scroller-focus-indicator":{decorator:qx.ui.decoration.Single,style:{width:2,color:p,style:f}},"table-header-cell":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:y,styleRight:f}},"table-header-cell-hovered":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:y,styleRight:f,widthBottom:2,colorBottom:q,styleBottom:f}}}});
})();
(function(){var i="Liberation Sans",h="Verdana",g="Bitstream Vera Sans",f="Lucida Grande",e="Tahoma",d="monospace",c="qx.theme.classic.Font",b="Courier New",a="DejaVu Sans Mono";
qx.Theme.define(c,{fonts:{"default":{size:11,lineHeight:1.4,family:[f,e,h,g,i]},"bold":{size:11,lineHeight:1.4,family:[f,e,h,g,i],bold:true},"small":{size:10,lineHeight:1.4,family:[f,e,h,g,i]},"monospace":{size:11,lineHeight:1.4,family:[a,b,d]}}});
})();
(function(){var du="button",dt="widget",ds="background",dr="atom",dq="inset-thin",dp="outset",dn="text-disabled",dm="text-selected",dl="inset",dk="image",cn="groupbox",cm="cell",cl="focused-inset",ck="tooltip",cj="menu-button",ci="middle",ch="decoration/arrows/down.gif",cg="spinner",cf="background-selected",ce="list",dB="button-hovered",dC="checkbox",dz="toolbar-button",dA="button-frame",dx="popup",dy="textfield",dv="label",dw="background-invalid",dD="background-disabled",dE="bold",cS="white",cR="shadow-small",cU="invalid",cT="scrollbar",cW="center",cV="datechooser/button",cY="button-abandoned",cX="background-light",cQ="main",cP="date-chooser",E="date-chooser-title",F="radiobutton",G="default",H="combobox",I="background-field",J="outset-thin",K="menu-slidebar-button",L="scrollbar/button",M="combobox/button",N="table-header-cell",dS="decoration/arrows/right.gif",dR="decoration/arrows/up.gif",dQ="text",dP="decoration/arrows/down-small.gif",dW="icon/16/places/folder.png",dV="tree-folder",dU="slidebar/button-forward",dT="icon/16/mimetypes/text-plain.png",dY="right-top",dX="button-checked",bA=".png",bB="background-focused",by="datechooser",bz="slidebar/button-backward",bE="selectbox",bF="treevirtual-folder",bC="decoration/form/",bD="decoration/tree/minus.gif",bw="",bx="decoration/tree/plus.gif",bg="-invalid",bf="decoration/arrows/left.gif",bi="icon/16/places/folder-open.png",bh="table-row-background-even",bc="decoration/treevirtual/cross_minus.gif",bb="radiobutton-hovered",be="keyboard-focus",bd="decoration/treevirtual/start_plus.gif",ba="decoration/cursors/",Y="icon/16/actions/dialog-ok.png",bK="slidebar",bL="table-scroller-focus-indicator",bM="move-frame",bN="nodrop",bG="tabview-page-button-left",bH="decoration/arrows/up-small.gif",bI="move",bJ="radiobutton-checked-focused",bO="qx.theme.classic.Appearance",bP="decoration/menu/checkbox.gif",br="tooltip-error",bq="right",bp="decoration/arrows/rewind.gif",bo="table-scroller-header",bn="table-pane",bm="focused-outset",bl="checkbox-hovered",bk="icon/16/actions/dialog-cancel.png",bv="menu-slidebar",bu="datechooser-date-pane",bQ="background-pane",bR="decoration/treevirtual/cross_plus.gif",bS="qx/icon/Oxygen/16/actions/window-close.png",bT="datechooser-week",bU="icon/16/apps/office-calendar.png",bV="datechooser-weekday",bW="table-header-border",bX="table-header-cell-hover",bY="window-active-caption-text",ca="window-active-caption",cu="icon",ct="checkbox-checked-focused",cs="toolbar-separator",cr="groove",cy="checkbox-pressed",cx="tooltip-invalid",cw="decoration/window/restore.gif",cv="decoration/menu/checkbox-invert.gif",cB="scrollarea",cA="window-inactive-caption-text",cL="best-fit",cM="up.gif",cJ="keep-align",cK="tabview-page-button-right",cH="tabview-page-button-top",cI="tabview-page-button-bottom",cF="row-layer",cG="decoration/menu/radiobutton.gif",cN="decoration/arrows/",cO="decoration/table/descending.png",dd="tooltip-text",dc="checkbox-checked-hovered",df="left.gif",de="decoration/arrows/up-invert.gif",dh="alias",dg="checkbox-checked-disabled",dj="decoration/arrows/right-invert.gif",di="radiobutton-checked-disabled",db="lead-item",da="checkbox-focused",dL="border-dark",dM="decoration/treevirtual/end_plus.gif",dN="decoration/treevirtual/start_minus.gif",dO="radiobutton-checked-hovered",dH="decoration/window/minimize.gif",dI="checkbox-checked",dJ="table-header-cell-hovered",dK="down.gif",dF="decoration/treevirtual/end.gif",dG="decoration/treevirtual/end_minus.gif",D="window-inactive-caption",C="decoration/menu/radiobutton-invert.gif",B="text-placeholder",A="slider",z="decoration/table/select-column-order.png",y="decoration/arrows/next.gif",x="table-header",w="decoration/treevirtual/only_minus.gif",v="datechooser-week-header",u="decoration/window/maximize.gif",Q="decoration/treevirtual/only_plus.gif",R="checkbox-checked-pressed",O="decoration/arrows/down-invert.gif",P="menu-separator",U="decoration/splitpane/knob-vertical.png",V=".gif",S="decoration/arrows/forward.gif",T="radiobutton-checked-pressed",W="table-statusbar",X="radiobutton-pressed",cC="copy",cz="table-row-background-selected",cE="radiobutton-focused",cD="decoration/splitpane/knob-horizontal.png",cp="right.gif",co="radiobutton-checked",bj="decoration/treevirtual/cross.gif",cq="decoration/table/ascending.png",bt="decoration/treevirtual/line.gif",bs="date-chooser-selected",cb="toolbar-part-handle",cc="decoration/window/close.gif",cd="icon/16/actions/view-refresh.png";
qx.Theme.define(bO,{appearances:{"widget":{},"label":{style:function(ha){return {textColor:ha.disabled?dn:undefined};
}},"image":{style:function(gC){return {opacity:!gC.replacement&&gC.disabled?0.3:undefined};
}},"atom":{},"atom/label":dv,"atom/icon":dk,"root":{style:function(eJ){return {backgroundColor:ds,textColor:dQ,font:G};
}},"popup":{style:function(fD){return {decorator:cQ,backgroundColor:bQ,shadow:cR};
}},"tooltip":{include:dx,style:function(em){return {backgroundColor:ck,textColor:dd,decorator:ck,shadow:cR,padding:[1,3,2,3],offset:[15,5,5,5]};
}},"tooltip/atom":dr,"tooltip-error":{include:ck,style:function(fU){return {textColor:dm,showTimeout:100,hideTimeout:10000,decorator:br,font:dE,backgroundColor:cx};
}},"tooltip-error/atom":dr,"iframe":{style:function(fV){return {backgroundColor:cS,decorator:dl};
}},"move-frame":{style:function(j){return {decorator:cQ};
}},"resize-frame":bM,"dragdrop-cursor":{style:function(gv){var gw=bN;

if(gv.copy){gw=cC;
}else if(gv.move){gw=bI;
}else if(gv.alias){gw=dh;
}return {source:ba+gw+V,position:dY,offset:[2,16,2,6]};
}},"button-frame":{alias:dr,style:function(gK){if(gK.pressed||gK.abandoned||gK.checked){var gM=!gK.inner&&gK.focused?cl:dl;
var gL=[4,3,2,5];
}else{var gM=!gK.inner&&gK.focused?bm:dp;
var gL=[3,4];
}return {backgroundColor:gK.abandoned?cY:gK.hovered?dB:gK.checked?dX:du,decorator:gM,padding:gL};
}},"button":{alias:dA,include:dA,style:function(gO){return {center:true};
}},"hover-button":{alias:dr,include:dr,style:function(gN){return {backgroundColor:gN.hovered?cf:undefined,textColor:gN.hovered?dm:undefined};
}},"splitbutton":{},"splitbutton/button":du,"splitbutton/arrow":{alias:du,include:du,style:function(eW){return {icon:ch};
}},"scrollarea/corner":{style:function(){return {backgroundColor:ds};
}},"scrollarea":dt,"scrollarea/pane":dt,"scrollarea/scrollbar-x":cT,"scrollarea/scrollbar-y":cT,"list":{alias:cB,style:function(o){var s;
var q=!!o.focused;
var r=!!o.invalid;
var p=!!o.disabled;

if(r&&!p){s=dw;
}else if(q&&!r&&!p){s=bB;
}else if(p){s=dD;
}else{s=cS;
}return {decorator:o.focused?cl:dl,backgroundColor:s};
}},"listitem":{alias:dr,style:function(gE){return {gap:4,padding:gE.lead?[2,4]:[3,5],backgroundColor:gE.selected?cf:undefined,textColor:gE.selected?dm:undefined,decorator:gE.lead?db:undefined};
}},"textfield":{style:function(gf){var gk;
var gi=!!gf.focused;
var gj=!!gf.invalid;
var gg=!!gf.disabled;

if(gj&&!gg){gk=dw;
}else if(gi&&!gj&&!gg){gk=bB;
}else if(gg){gk=dD;
}else{gk=I;
}var gh;

if(gf.disabled){gh=dn;
}else if(gf.showingPlaceholder){gh=B;
}else{gh=undefined;
}return {decorator:gf.focused?cl:dl,padding:[2,3],textColor:gh,backgroundColor:gk};
}},"textarea":dy,"checkbox":{alias:dr,style:function(fo){var fq;

if(fo.checked&&fo.focused){fq=ct;
}else if(fo.checked&&fo.disabled){fq=dg;
}else if(fo.checked&&fo.pressed){fq=R;
}else if(fo.checked&&fo.hovered){fq=dc;
}else if(fo.checked){fq=dI;
}else if(fo.focused){fq=da;
}else if(fo.pressed){fq=cy;
}else if(fo.hovered){fq=bl;
}else{fq=dC;
}var fp=fo.invalid&&!fo.disabled?bg:bw;
return {icon:bC+fq+fp+bA,gap:6};
}},"radiobutton":{alias:dC,include:dC,style:function(eM){var eO;

if(eM.checked&&eM.focused){eO=bJ;
}else if(eM.checked&&eM.disabled){eO=di;
}else if(eM.checked&&eM.pressed){eO=T;
}else if(eM.checked&&eM.hovered){eO=dO;
}else if(eM.checked){eO=co;
}else if(eM.focused){eO=cE;
}else if(eM.pressed){eO=X;
}else if(eM.hovered){eO=bb;
}else{eO=F;
}var eN=eM.invalid&&!eM.disabled?bg:bw;
return {icon:bC+eO+eN+bA,shadow:undefined};
}},"spinner":{style:function(gY){return {decorator:gY.focused?cl:dl,textColor:gY.disabled?dn:undefined};
}},"spinner/textfield":{include:dy,style:function(ec){return {decorator:undefined,padding:[2,3]};
}},"spinner/upbutton":{alias:du,include:du,style:function(fI){return {icon:bH,padding:fI.pressed?[2,2,0,4]:[1,3,1,3],backgroundColor:fI.hovered?dB:du};
}},"spinner/downbutton":{alias:du,include:du,style:function(fP){return {icon:dP,padding:fP.pressed?[2,2,0,4]:[1,3,1,3],backgroundColor:fP.hovered?dB:du};
}},"datefield":H,"datefield/button":{alias:M,include:M,style:function(t){return {icon:bU,padding:[0,3],backgroundColor:undefined,decorator:undefined};
}},"datefield/list":{alias:by,include:by,style:function(gt){return {decorator:gt.focused?cl:dl};
}},"groupbox":{style:function(eg){return {backgroundColor:ds};
}},"groupbox/legend":{alias:dr,style:function(fr){return {backgroundColor:ds,textColor:fr.invalid?cU:undefined,paddingRight:4,paddingLeft:4,marginRight:10,marginLeft:10};
}},"groupbox/frame":{style:function(gm){return {padding:[12,9],decorator:cr};
}},"check-groupbox":cn,"check-groupbox/legend":{alias:dC,include:dC,style:function(eX){return {backgroundColor:ds,textColor:eX.invalid?cU:undefined,paddingRight:3,paddingLeft:3,marginRight:10,marginLeft:10};
}},"radio-groupbox":cn,"radio-groupbox/legend":{alias:F,include:F,style:function(fv){return {backgroundColor:ds,textColor:fv.invalid?cU:undefined,paddingRight:3,paddingLeft:3,marginRight:10,marginLeft:10};
}},"toolbar":{style:function(fH){return {backgroundColor:ds};
}},"toolbar/part":{},"toolbar/part/container":{},"toolbar/part/handle":{style:function(ea){return {decorator:cb,backgroundColor:ds,padding:[0,1],margin:[3,2],allowGrowY:true};
}},"toolbar-separator":{style:function(fS){return {margin:[3,2],decorator:cs};
}},"toolbar-button":{alias:dr,style:function(hb){if(hb.pressed||hb.checked||hb.abandoned){var hd=dq;
var hc=[3,2,1,4];
}else if(hb.hovered){var hd=J;
var hc=[2,3];
}else{var hd=undefined;
var hc=[3,4];
}return {cursor:G,decorator:hd,padding:hc,backgroundColor:hb.abandoned?cY:hb.checked?cX:du};
}},"toolbar-menubutton":{alias:dz,include:dz,style:function(e){return {showArrow:true};
}},"toolbar-menubutton/arrow":{alias:dk,include:dk,style:function(c){return {source:dP};
}},"toolbar-splitbutton":{},"toolbar-splitbutton/button":dz,"toolbar-splitbutton/arrow":{alias:dz,include:dz,style:function(eI){return {icon:ch};
}},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:du,include:du,style:function(fQ){return {icon:fQ.vertical?ch:y};
}},"slidebar/button-backward":{alias:du,include:du,style:function(fO){return {icon:fO.vertical?dR:bf};
}},"tabview":{},"tabview/bar":{alias:bK,style:function(et){var eu=0,ex=0,ev=0,ew=0;

if(et.barTop){ev=-2;
}else if(et.barBottom){eu=-2;
}else if(et.barRight){ew=-2;
}else{ex=-2;
}return {marginBottom:ev,marginTop:eu,marginLeft:ew,marginRight:ex};
}},"tabview/bar/button-forward":{include:dU,alias:dU,style:function(eC){if(eC.barTop||eC.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/button-backward":{include:bz,alias:bz,style:function(el){if(el.barTop||el.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/pane":{style:function(gW){return {backgroundColor:ds,decorator:dp,padding:10};
}},"tabview-page":dt,"tabview-page/button":{style:function(fb){var fk;
var fi=0,fg=0,fd=0,ff=0;

if(fb.barTop||fb.barBottom){var fe=2,fc=2,fh=6,fj=6;
}else{var fe=6,fc=6,fh=6,fj=6;
}
if(fb.barTop){fk=cH;
}else if(fb.barRight){fk=cK;
}else if(fb.barBottom){fk=cI;
}else{fk=bG;
}
if(fb.checked){if(fb.barTop||fb.barBottom){fh+=2;
fj+=2;
}else{fe+=2;
fc+=2;
}}else{if(fb.barTop||fb.barBottom){fd+=2;
fi+=2;
}else if(fb.barLeft||fb.barRight){fg+=2;
ff+=2;
}}
if(fb.checked){if(!fb.firstTab){if(fb.barTop||fb.barBottom){ff=-4;
}else{fi=-4;
}}
if(!fb.lastTab){if(fb.barTop||fb.barBottom){fg=-4;
}else{fd=-4;
}}}return {zIndex:fb.checked?10:5,decorator:fk,backgroundColor:ds,padding:[fe,fj,fc,fh],margin:[fi,fg,fd,ff]};
}},"tabview-page/button/label":{alias:dv,style:function(gu){return {padding:[0,1,0,1],margin:gu.focused?0:1,decorator:gu.focused?be:undefined};
}},"tabview-page/button/icon":dk,"tabview-page/button/close-button":{alias:dr,style:function(eF){return {icon:bS};
}},"scrollbar":{},"scrollbar/slider":{alias:A,style:function(l){return {backgroundColor:cX};
}},"scrollbar/slider/knob":{include:dA,style:function(ef){return {height:14,width:14,minHeight:ef.horizontal?undefined:9,minWidth:ef.horizontal?9:undefined};
}},"scrollbar/button":{alias:du,include:du,style:function(fJ){var fK;

if(fJ.up||fJ.down){if(fJ.pressed||fJ.abandoned||fJ.checked){fK=[5,2,3,4];
}else{fK=[4,3];
}}else{if(fJ.pressed||fJ.abandoned||fJ.checked){fK=[4,3,2,5];
}else{fK=[3,4];
}}var fL=cN;

if(fJ.left){fL+=df;
}else if(fJ.right){fL+=cp;
}else if(fJ.up){fL+=cM;
}else{fL+=dK;
}return {padding:fK,icon:fL};
}},"scrollbar/button-begin":L,"scrollbar/button-end":L,"slider":{style:function(gT){var gU;

if(gT.disabled){gU=dD;
}else if(gT.invalid){gU=dw;
}else if(gT.focused){gU=cX;
}else{gU=I;
}return {backgroundColor:gU,decorator:gT.focused?cl:dl};
}},"slider/knob":{include:dA,style:function(gV){return {width:14,height:14,decorator:dp};
}},"tree-folder/open":{style:function(es){return {source:es.opened?bD:bx};
}},"tree-folder":{style:function(ek){return {padding:[2,3,2,0],icon:ek.opened?bi:dW};
}},"tree-folder/icon":{style:function(fa){return {padding:[0,4,0,0]};
}},"tree-folder/label":{style:function(eq){return {padding:[1,2],backgroundColor:eq.selected?cf:undefined,textColor:eq.selected?dm:undefined};
}},"tree-file":{include:dV,alias:dV,style:function(n){return {icon:dT};
}},"tree":{include:ce,alias:ce,style:function(gP){return {contentPadding:[4,4,4,4]};
}},"treevirtual":{style:function(fl){return {decorator:cQ};
}},"treevirtual-folder":{style:function(eE){return {icon:(eE.opened?bi:dW)};
}},"treevirtual-file":{include:bF,alias:bF,style:function(eL){return {icon:dT};
}},"treevirtual-line":{style:function(gJ){return {icon:bt};
}},"treevirtual-contract":{style:function(eB){return {icon:bD};
}},"treevirtual-expand":{style:function(er){return {icon:bx};
}},"treevirtual-only-contract":{style:function(gX){return {icon:w};
}},"treevirtual-only-expand":{style:function(gA){return {icon:Q};
}},"treevirtual-start-contract":{style:function(b){return {icon:dN};
}},"treevirtual-start-expand":{style:function(fN){return {icon:bd};
}},"treevirtual-end-contract":{style:function(fA){return {icon:dG};
}},"treevirtual-end-expand":{style:function(fF){return {icon:dM};
}},"treevirtual-cross-contract":{style:function(gB){return {icon:bc};
}},"treevirtual-cross-expand":{style:function(eH){return {icon:bR};
}},"treevirtual-end":{style:function(eP){return {icon:dF};
}},"treevirtual-cross":{style:function(gq){return {icon:bj};
}},"window":{style:function(gd){return {contentPadding:[10,10,10,10],backgroundColor:ds,decorator:gd.maximized?undefined:dp,shadow:gd.maximized?undefined:cR};
}},"window/pane":{},"window/captionbar":{style:function(m){return {padding:1,backgroundColor:m.active?ca:D,textColor:m.active?bY:cA};
}},"window/icon":{style:function(gG){return {marginRight:4};
}},"window/title":{style:function(ep){return {cursor:G,font:dE,marginRight:20,alignY:ci};
}},"window/minimize-button":{include:du,alias:du,style:function(fY){return {icon:dH,padding:fY.pressed||fY.abandoned?[2,1,0,3]:[1,2]};
}},"window/restore-button":{include:du,alias:du,style:function(fy){return {icon:cw,padding:fy.pressed||fy.abandoned?[2,1,0,3]:[1,2]};
}},"window/maximize-button":{include:du,alias:du,style:function(fz){return {icon:u,padding:fz.pressed||fz.abandoned?[2,1,0,3]:[1,2]};
}},"window/close-button":{include:du,alias:du,style:function(eG){return {marginLeft:2,icon:cc,padding:eG.pressed||eG.abandoned?[2,1,0,3]:[1,2]};
}},"window/statusbar":{style:function(d){return {decorator:dq,padding:[2,6]};
}},"window/statusbar-text":dv,"resizer":{style:function(fW){return {decorator:dp};
}},"splitpane":{},"splitpane/splitter":{style:function(fm){return {backgroundColor:ds};
}},"splitpane/splitter/knob":{style:function(fu){return {source:fu.horizontal?cD:U,padding:2};
}},"splitpane/slider":{style:function(eo){return {backgroundColor:dL,opacity:0.3};
}},"selectbox":{include:dA,style:function(gr){var gs=du;

if(gr.invalid&&!gr.disabled){gs=dw;
}else if(gr.abandoned){gs=cY;
}else if(!gr.abandoned&&gr.hovered){gs=dB;
}else if(!gr.abandoned&&!gr.hovered&&gr.checked){gs=dX;
}return {backgroundColor:gs};
}},"selectbox/atom":dr,"selectbox/popup":dx,"selectbox/list":ce,"selectbox/arrow":{include:dk,style:function(en){return {source:ch,paddingRight:4,paddingLeft:5};
}},"datechooser":{style:function(fR){return {decorator:dp};
}},"datechooser/navigation-bar":{style:function(eK){return {backgroundColor:cP,textColor:eK.disabled?dn:eK.invalid?cU:undefined,padding:[2,10]};
}},"datechooser/last-year-button-tooltip":ck,"datechooser/last-month-button-tooltip":ck,"datechooser/next-year-button-tooltip":ck,"datechooser/next-month-button-tooltip":ck,"datechooser/last-year-button":cV,"datechooser/last-month-button":cV,"datechooser/next-year-button":cV,"datechooser/next-month-button":cV,"datechooser/button/icon":{},"datechooser/button":{style:function(fB){var fC={width:17,show:cu};

if(fB.lastYear){fC.icon=bp;
}else if(fB.lastMonth){fC.icon=bf;
}else if(fB.nextYear){fC.icon=S;
}else if(fB.nextMonth){fC.icon=dS;
}
if(fB.pressed||fB.checked||fB.abandoned){fC.decorator=dq;
}else if(fB.hovered){fC.decorator=J;
}else{fC.decorator=undefined;
}
if(fB.pressed||fB.checked||fB.abandoned){fC.padding=[2,0,0,2];
}else if(fB.hovered){fC.padding=1;
}else{fC.padding=2;
}return fC;
}},"datechooser/month-year-label":{style:function(go){return {font:dE,textAlign:cW};
}},"datechooser/date-pane":{style:function(gQ){return {decorator:bu,backgroundColor:cP};
}},"datechooser/weekday":{style:function(gl){return {decorator:bV,font:dE,textAlign:cW,textColor:gl.disabled?dn:gl.weekend?E:cP,backgroundColor:gl.weekend?cP:E};
}},"datechooser/day":{style:function(ei){return {textAlign:cW,decorator:ei.today?cQ:undefined,textColor:ei.disabled?dn:ei.selected?dm:ei.otherMonth?dn:undefined,backgroundColor:ei.disabled?undefined:ei.selected?bs:undefined,padding:[2,4]};
}},"datechooser/week":{style:function(fn){return {textAlign:cW,textColor:E,padding:[2,4],decorator:fn.header?v:bT};
}},"combobox":{style:function(fw){var fx;

if(fw.disabled){fx=dD;
}else if(fw.invalid){fx=dw;
}else if(fw.focused){fx=cX;
}else{fx=I;
}return {decorator:fw.focused?cl:dl,textColor:fw.disabled?dn:undefined,backgroundColor:fx};
}},"combobox/button":{alias:du,include:du,style:function(fs){return {icon:ch,backgroundColor:fs.hovered?dB:du};
}},"combobox/popup":dx,"combobox/list":ce,"combobox/textfield":{include:dy,style:function(gn){return {decorator:undefined,padding:[2,3],backgroundColor:undefined};
}},"menu":{style:function(eQ){var eR={backgroundColor:ds,shadow:cR,decorator:dp,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4,padding:1,placementModeY:eQ.submenu||eQ.contextmenu?cL:cJ};

if(eQ.submenu){eR.position=dY;
eR.offset=[-2,-3];
}
if(eQ.contextmenu){eR.offset=4;
}return eR;
}},"menu/slidebar":bv,"menu-slidebar":dt,"menu-slidebar-button":{style:function(eY){return {backgroundColor:eY.hovered?cf:undefined,padding:6,center:true};
}},"menu-slidebar/button-backward":{include:K,style:function(f){return {icon:f.hovered?de:dR};
}},"menu-slidebar/button-forward":{include:K,style:function(gD){return {icon:gD.hovered?O:ch};
}},"menu-separator":{style:function(eS){return {height:0,decorator:P,marginTop:4,marginBottom:4,marginLeft:2,marginRight:2};
}},"menu-button":{alias:dr,style:function(ft){return {backgroundColor:ft.selected?cf:undefined,textColor:ft.selected?dm:undefined,padding:[2,6]};
}},"menu-button/icon":{include:dk,style:function(gp){return {alignY:ci};
}},"menu-button/label":{include:dv,style:function(gR){return {alignY:ci,padding:1};
}},"menu-button/shortcut":{include:dv,style:function(eV){return {alignY:ci,marginLeft:14,padding:1};
}},"menu-button/arrow":{include:dk,style:function(gy){return {source:gy.selected?dj:dS,alignY:ci};
}},"menu-checkbox":{alias:cj,include:cj,style:function(fX){return {icon:!fX.checked?undefined:fX.selected?cv:bP};
}},"menu-radiobutton":{alias:cj,include:cj,style:function(a){return {icon:!a.checked?undefined:a.selected?C:cG};
}},"menubar":{style:function(ee){return {backgroundColor:ds,decorator:dp};
}},"menubar-button":{alias:dr,style:function(eA){return {padding:[2,6],backgroundColor:eA.pressed||eA.hovered?cf:undefined,textColor:eA.pressed||eA.hovered?dm:undefined};
}},"colorselector":dt,"colorselector/control-bar":dt,"colorselector/visual-pane":cn,"colorselector/control-pane":dt,"colorselector/preset-grid":dt,"colorselector/colorbucket":{style:function(fG){return {decorator:dq,width:16,height:16};
}},"colorselector/preset-field-set":cn,"colorselector/input-field-set":cn,"colorselector/preview-field-set":cn,"colorselector/hex-field-composite":dt,"colorselector/hex-field":dy,"colorselector/rgb-spinner-composite":dt,"colorselector/rgb-spinner-red":cg,"colorselector/rgb-spinner-green":cg,"colorselector/rgb-spinner-blue":cg,"colorselector/hsb-spinner-composite":dt,"colorselector/hsb-spinner-hue":cg,"colorselector/hsb-spinner-saturation":cg,"colorselector/hsb-spinner-brightness":cg,"colorselector/preview-content-old":{style:function(ga){return {decorator:dq,width:50,height:10};
}},"colorselector/preview-content-new":{style:function(gc){return {decorator:dq,backgroundColor:cS,width:50,height:10};
}},"colorselector/hue-saturation-field":{style:function(eb){return {decorator:dq,margin:5};
}},"colorselector/brightness-field":{style:function(ez){return {decorator:dq,margin:[5,7]};
}},"colorselector/hue-saturation-pane":dt,"colorselector/hue-saturation-handle":dt,"colorselector/brightness-pane":dt,"colorselector/brightness-handle":dt,"table":dt,"table/statusbar":{style:function(gb){return {decorator:W,paddingLeft:2,paddingRight:2};
}},"table/column-button":{alias:du,style:function(g){var i,h;

if(g.pressed||g.checked||g.abandoned){i=dq;
h=[3,2,1,4];
}else if(g.hovered){i=J;
h=[2,3];
}else{i=undefined;
h=[3,4];
}return {decorator:i,padding:h,backgroundColor:g.abandoned?cY:du,icon:z};
}},"table-column-reset-button":{extend:cj,alias:cj,style:function(){return {icon:cd};
}},"table-scroller/scrollbar-x":cT,"table-scroller/scrollbar-y":cT,"table-scroller":dt,"table-scroller/header":{style:function(eU){return {decorator:bo,backgroundColor:x};
}},"table-scroller/pane":{style:function(ed){return {backgroundColor:bn};
}},"table-scroller/focus-indicator":{style:function(gS){return {decorator:bL};
}},"table-scroller/resize-line":{style:function(eh){return {backgroundColor:bW,width:3};
}},"table-header-cell":{alias:dr,style:function(eT){return {minWidth:13,paddingLeft:2,paddingRight:2,paddingBottom:eT.hovered?0:2,decorator:eT.hovered?dJ:N,backgroundColor:eT.hovered?bX:N,sortIcon:eT.sorted?(eT.sortedAscending?cq:cO):undefined};
}},"table-header-cell/sort-icon":{style:function(gx){return {alignY:ci};
}},"table-editor-textfield":{include:dy,style:function(fM){return {decorator:undefined,padding:[2,2]};
}},"table-editor-selectbox":{include:bE,alias:bE,style:function(k){return {padding:[0,2]};
}},"table-editor-combobox":{include:H,alias:H,style:function(eD){return {decorator:undefined};
}},"colorpopup":{alias:dx,include:dx,style:function(gF){return {decorator:dp,padding:5,backgroundColor:ds};
}},"colorpopup/field":{style:function(gH){return {decorator:dq,margin:2,width:14,height:14,backgroundColor:ds};
}},"colorpopup/selector-button":du,"colorpopup/auto-button":du,"colorpopup/preview-pane":cn,"colorpopup/current-preview":{style:function(fE){return {height:20,padding:4,marginLeft:4,decorator:dq,allowGrowX:true};
}},"colorpopup/selected-preview":{style:function(fT){return {height:20,padding:4,marginRight:4,decorator:dq,allowGrowX:true};
}},"colorpopup/colorselector-okbutton":{alias:du,include:du,style:function(gI){return {icon:Y};
}},"colorpopup/colorselector-cancelbutton":{alias:du,include:du,style:function(gz){return {icon:bk};
}},"virtual-list":ce,"virtual-list/row-layer":cF,"row-layer":dt,"column-layer":dt,"cell":{style:function(ey){return {backgroundColor:ey.selected?cz:bh,textColor:ey.selected?dm:dQ,padding:[3,6]};
}},"cell-string":cm,"cell-number":{include:cm,style:function(ge){return {textAlign:bq};
}},"cell-image":cm,"cell-boolean":cm,"cell-atom":cm,"cell-date":cm,"cell-html":cm,"htmlarea":{"include":dt,style:function(ej){return {backgroundColor:cS};
}}}});
})();
(function(){var c="Oxygen",b="qx.theme.icon.Oxygen",a="qx/icon/Oxygen";
qx.Theme.define(b,{title:c,aliases:{"icon":a},icons:{}});
})();
(function(){var b="Classic Windows",a="qx.theme.Classic";
qx.Theme.define(a,{title:b,meta:{color:qx.theme.classic.Color,decoration:qx.theme.classic.Decoration,font:qx.theme.classic.Font,appearance:qx.theme.classic.Appearance,icon:qx.theme.icon.Oxygen}});
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

