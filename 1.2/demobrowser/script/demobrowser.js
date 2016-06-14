(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!window.qxsettings) qxsettings = {};
var settings = {"qx.application":"demobrowser.Application","qx.theme":"demobrowser.Theme","qx.version":"1.2"};
for (var k in settings) qxsettings[k] = settings[k];

if (!window.qxvariants) qxvariants = {};
var variants = {"qx.contrib":"off"};
for (var k in variants) qxvariants[k] = variants[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"__out__":{"sourceUri":"script"},"demobrowser":{"resourceUri":"resource","sourceUri":"script","version":"trunk"},"qx":{"resourceUri":"resource","sourceUri":"script","version":"1.2"}};
for (var k in libinfo) qx.$$libraries[k] = libinfo[k];

qx.$$resources = {};
qx.$$translations = {};
qx.$$locales = {};
qx.$$packageData = {};

qx.$$loader = {
  parts : {"boot":[0]},
  uris : [["__out__:demobrowser.js"]],
  urisBefore : [],
  packageHashes : {"0":"4297d891d429"},
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

qx.$$packageData['4297d891d429']={"locales":{"C":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_Hms":"H:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMMEd":"E, MMMM d","cldr_date_time_format_MMMMd":"MMMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE, M/d/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"T","cldr_day_format_narrow_tue":"T","cldr_day_format_narrow_wed":"W","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_abbreviated_fri":"Fri","cldr_day_stand-alone_abbreviated_mon":"Mon","cldr_day_stand-alone_abbreviated_sat":"Sat","cldr_day_stand-alone_abbreviated_sun":"Sun","cldr_day_stand-alone_abbreviated_thu":"Thu","cldr_day_stand-alone_abbreviated_tue":"Tue","cldr_day_stand-alone_abbreviated_wed":"Wed","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_day_stand-alone_wide_fri":"Friday","cldr_day_stand-alone_wide_mon":"Monday","cldr_day_stand-alone_wide_sat":"Saturday","cldr_day_stand-alone_wide_sun":"Sunday","cldr_day_stand-alone_wide_thu":"Thursday","cldr_day_stand-alone_wide_tue":"Tuesday","cldr_day_stand-alone_wide_wed":"Wednesday","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","quotationEnd":"”","quotationStart":"“"}},"resources":{"demobrowser/backend/remote_table.php":"demobrowser","demobrowser/css/sourceview.css":"demobrowser","demobrowser/css/style.css":"demobrowser","demobrowser/demo/background/gradient-pressed.png":[250,18,"png","demobrowser"],"demobrowser/demo/background/gradient.png":[250,34,"png","demobrowser"],"demobrowser/demo/background/gradients.svg":"demobrowser","demobrowser/demo/flash/FlashVersion.swf":"demobrowser","demobrowser/demo/flash/TestFlash.mxml":"demobrowser","demobrowser/demo/flash/TestFlash.swf":"demobrowser","demobrowser/demo/flash/build.xml":"demobrowser","demobrowser/demo/flash/fo_tester.fla":"demobrowser","demobrowser/demo/flash/fo_tester.swf":"demobrowser","demobrowser/demo/html/ModalWindow.html":"demobrowser","demobrowser/demo/icons/feed-reader.png":[48,48,"png","demobrowser"],"demobrowser/demo/icons/format-indent-less.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/format-indent-more.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/format-justify-center.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/format-justify-fill.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/format-justify-left.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/format-justify-right.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/format.png":[96,16,"png","demobrowser"],"demobrowser/demo/icons/graphics-viewer-document.png":[48,48,"png","demobrowser"],"demobrowser/demo/icons/htmlarea/format-fill-color.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/htmlarea/format-list-ordered.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/htmlarea/format-list-unordered.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/htmlarea/format-text-color.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/htmlarea/insert-horizontal-rule.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/htmlarea/insert-table.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/htmlarea/insert-text.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/htmlarea/qooxdoo_logo.png":[136,41,"png","demobrowser"],"demobrowser/demo/icons/imicons/christian_schmidt.png":[52,64,"png","demobrowser"],"demobrowser/demo/icons/imicons/fabian_jakobs.png":[70,70,"png","demobrowser"],"demobrowser/demo/icons/imicons/jonathan_weiss.png":[218,218,"png","demobrowser"],"demobrowser/demo/icons/imicons/martin_wittemann.png":[52,52,"png","demobrowser"],"demobrowser/demo/icons/imicons/readme.txt":"demobrowser","demobrowser/demo/icons/imicons/status_away.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/imicons/status_busy.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/imicons/status_offline.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/imicons/status_online.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/imicons/user_add.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/imicons/user_delete.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/multimedia-player-disabled.png":[128,128,"png","demobrowser"],"demobrowser/demo/icons/multimedia-player.png":[128,128,"png","demobrowser"],"demobrowser/demo/test/alphaPNG.png":[20,20,"png","demobrowser"],"demobrowser/demo/test/combined/icons22.png":[22,176,"png","demobrowser"],"demobrowser/demo/test/combined/thumbs.png":[218,65,"png","demobrowser"],"demobrowser/demo/test/demobrowser_thumb.png":[113,65,"png","demobrowser","demobrowser/demo/test/combined/thumbs.png",-105,0],"demobrowser/demo/test/feedreader_thumb.png":[105,65,"png","demobrowser","demobrowser/demo/test/combined/thumbs.png",0,0],"demobrowser/demo/test/logo.gif":[136,41,"gif","demobrowser"],"demobrowser/demo/theme/tag-hor-c.png":[6,12,"png","demobrowser"],"demobrowser/demo/theme/tag-hor-l.png":[6,12,"png","demobrowser"],"demobrowser/demo/theme/tag-hor-r.png":[6,12,"png","demobrowser"],"demobrowser/demo/theme/tag-hor.png":[18,12,"png","demobrowser"],"demobrowser/demo/theme/tag-vert-b.png":[12,6,"png","demobrowser"],"demobrowser/demo/theme/tag-vert-c.png":[12,6,"png","demobrowser"],"demobrowser/demo/theme/tag-vert-t.png":[12,6,"png","demobrowser"],"demobrowser/demo/theme/tag-vert.png":[12,18,"png","demobrowser"],"demobrowser/welcome/feedreader.png":[250,185,"png","demobrowser"],"demobrowser/welcome/playground.png":[250,185,"png","demobrowser"],"demobrowser/welcome/portal.png":[250,185,"png","demobrowser"],"demobrowser/welcome/showcase.png":[250,185,"png","demobrowser"],"qx/decoration/Modern/app-header.png":[110,20,"png","qx"],"qx/decoration/Modern/arrows-combined.png":[87,8,"png","qx"],"qx/decoration/Modern/arrows/down-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-74,0],"qx/decoration/Modern/arrows/down-small-invert.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-69,0],"qx/decoration/Modern/arrows/down-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-49,0],"qx/decoration/Modern/arrows/down.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-20,0],"qx/decoration/Modern/arrows/forward.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-59,0],"qx/decoration/Modern/arrows/left-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",0,0],"qx/decoration/Modern/arrows/left.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-44,0],"qx/decoration/Modern/arrows/rewind.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-10,0],"qx/decoration/Modern/arrows/right-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-5,0],"qx/decoration/Modern/arrows/right.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-54,0],"qx/decoration/Modern/arrows/up-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-28,0],"qx/decoration/Modern/arrows/up-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-82,0],"qx/decoration/Modern/arrows/up.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-36,0],"qx/decoration/Modern/button-lr-combined.png":[72,52,"png","qx"],"qx/decoration/Modern/button-tb-combined.png":[4,216,"png","qx"],"qx/decoration/Modern/checkradio-combined.png":[504,14,"png","qx"],"qx/decoration/Modern/colorselector-combined.gif":[46,11,"gif","qx"],"qx/decoration/Modern/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Modern/colorselector/brightness-handle.gif":[35,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",0,0],"qx/decoration/Modern/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Modern/colorselector/huesaturation-handle.gif":[11,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",-35,0],"qx/decoration/Modern/cursors-combined.gif":[71,20,"gif","qx"],"qx/decoration/Modern/cursors/alias.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-52,0],"qx/decoration/Modern/cursors/copy.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-33,0],"qx/decoration/Modern/cursors/move.gif":[13,9,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-20,0],"qx/decoration/Modern/cursors/nodrop.gif":[20,20,"gif","qx","qx/decoration/Modern/cursors-combined.gif",0,0],"qx/decoration/Modern/form/button-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-72],"qx/decoration/Modern/form/button-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-204],"qx/decoration/Modern/form/button-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-188],"qx/decoration/Modern/form/button-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-36],"qx/decoration/Modern/form/button-checked-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-84],"qx/decoration/Modern/form/button-checked-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-184],"qx/decoration/Modern/form/button-checked-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-156],"qx/decoration/Modern/form/button-checked-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-208],"qx/decoration/Modern/form/button-checked-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-160],"qx/decoration/Modern/form/button-checked-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-40,0],"qx/decoration/Modern/form/button-checked-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-32,0],"qx/decoration/Modern/form/button-checked-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-28],"qx/decoration/Modern/form/button-checked-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-24],"qx/decoration/Modern/form/button-checked-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-48],"qx/decoration/Modern/form/button-checked-focused.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-checked-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-16,0],"qx/decoration/Modern/form/button-checked-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-60,0],"qx/decoration/Modern/form/button-checked-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-140],"qx/decoration/Modern/form/button-checked-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-56],"qx/decoration/Modern/form/button-checked-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-112],"qx/decoration/Modern/form/button-checked.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-disabled-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-40],"qx/decoration/Modern/form/button-disabled-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-136],"qx/decoration/Modern/form/button-disabled-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-16],"qx/decoration/Modern/form/button-disabled-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-disabled-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-68,0],"qx/decoration/Modern/form/button-disabled-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-4,0],"qx/decoration/Modern/form/button-disabled-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-116],"qx/decoration/Modern/form/button-disabled-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-168],"qx/decoration/Modern/form/button-disabled-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-60],"qx/decoration/Modern/form/button-disabled.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-68],"qx/decoration/Modern/form/button-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-144],"qx/decoration/Modern/form/button-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-8],"qx/decoration/Modern/form/button-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-24,0],"qx/decoration/Modern/form/button-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-44,0],"qx/decoration/Modern/form/button-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-192],"qx/decoration/Modern/form/button-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-148],"qx/decoration/Modern/form/button-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-104],"qx/decoration/Modern/form/button-focused.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-hovered-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-108],"qx/decoration/Modern/form/button-hovered-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-32],"qx/decoration/Modern/form/button-hovered-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-128],"qx/decoration/Modern/form/button-hovered-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-hovered-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-20,0],"qx/decoration/Modern/form/button-hovered-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-48,0],"qx/decoration/Modern/form/button-hovered-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-44],"qx/decoration/Modern/form/button-hovered-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-76],"qx/decoration/Modern/form/button-hovered-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-88],"qx/decoration/Modern/form/button-hovered.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-56,0],"qx/decoration/Modern/form/button-preselected-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-124],"qx/decoration/Modern/form/button-preselected-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-176],"qx/decoration/Modern/form/button-preselected-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-200],"qx/decoration/Modern/form/button-preselected-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,0],"qx/decoration/Modern/form/button-preselected-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-4],"qx/decoration/Modern/form/button-preselected-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-152],"qx/decoration/Modern/form/button-preselected-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-28,0],"qx/decoration/Modern/form/button-preselected-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-36,0],"qx/decoration/Modern/form/button-preselected-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-196],"qx/decoration/Modern/form/button-preselected-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-164],"qx/decoration/Modern/form/button-preselected-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-212],"qx/decoration/Modern/form/button-preselected-focused.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-preselected-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-8,0],"qx/decoration/Modern/form/button-preselected-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-64,0],"qx/decoration/Modern/form/button-preselected-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-96],"qx/decoration/Modern/form/button-preselected-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-80],"qx/decoration/Modern/form/button-preselected-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-132],"qx/decoration/Modern/form/button-preselected.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-pressed-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-12],"qx/decoration/Modern/form/button-pressed-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-52],"qx/decoration/Modern/form/button-pressed-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-20],"qx/decoration/Modern/form/button-pressed-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-pressed-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-52,0],"qx/decoration/Modern/form/button-pressed-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-12,0],"qx/decoration/Modern/form/button-pressed-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-100],"qx/decoration/Modern/form/button-pressed-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-172],"qx/decoration/Modern/form/button-pressed-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-64],"qx/decoration/Modern/form/button-pressed.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",0,0],"qx/decoration/Modern/form/button-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-92],"qx/decoration/Modern/form/button-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-120],"qx/decoration/Modern/form/button-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-180],"qx/decoration/Modern/form/button.png":[80,60,"png","qx"],"qx/decoration/Modern/form/checkbox-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-126,0],"qx/decoration/Modern/form/checkbox-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-322,0],"qx/decoration/Modern/form/checkbox-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-294,0],"qx/decoration/Modern/form/checkbox-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-364,0],"qx/decoration/Modern/form/checkbox-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-490,0],"qx/decoration/Modern/form/checkbox-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-224,0],"qx/decoration/Modern/form/checkbox-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-378,0],"qx/decoration/Modern/form/checkbox-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-84,0],"qx/decoration/Modern/form/checkbox-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-182,0],"qx/decoration/Modern/form/checkbox-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-42,0],"qx/decoration/Modern/form/checkbox-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-392,0],"qx/decoration/Modern/form/checkbox-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-210,0],"qx/decoration/Modern/form/checkbox-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-14,0],"qx/decoration/Modern/form/checkbox-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-238,0],"qx/decoration/Modern/form/checkbox-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-462,0],"qx/decoration/Modern/form/checkbox-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-112,0],"qx/decoration/Modern/form/checkbox-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-448,0],"qx/decoration/Modern/form/checkbox.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-140,0],"qx/decoration/Modern/form/input-focused.png":[40,12,"png","qx"],"qx/decoration/Modern/form/input.png":[84,12,"png","qx"],"qx/decoration/Modern/form/radiobutton-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-196,0],"qx/decoration/Modern/form/radiobutton-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-168,0],"qx/decoration/Modern/form/radiobutton-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-98,0],"qx/decoration/Modern/form/radiobutton-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-308,0],"qx/decoration/Modern/form/radiobutton-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-406,0],"qx/decoration/Modern/form/radiobutton-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-28,0],"qx/decoration/Modern/form/radiobutton-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-350,0],"qx/decoration/Modern/form/radiobutton-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-266,0],"qx/decoration/Modern/form/radiobutton-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-252,0],"qx/decoration/Modern/form/radiobutton-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-336,0],"qx/decoration/Modern/form/radiobutton-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-476,0],"qx/decoration/Modern/form/radiobutton-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-420,0],"qx/decoration/Modern/form/radiobutton-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-56,0],"qx/decoration/Modern/form/radiobutton-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",0,0],"qx/decoration/Modern/form/radiobutton-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-154,0],"qx/decoration/Modern/form/radiobutton-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-434,0],"qx/decoration/Modern/form/radiobutton-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-280,0],"qx/decoration/Modern/form/radiobutton.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-70,0],"qx/decoration/Modern/form/tooltip-error-arrow.png":[11,14,"png","qx"],"qx/decoration/Modern/form/tooltip-error-b.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-30],"qx/decoration/Modern/form/tooltip-error-bl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-24],"qx/decoration/Modern/form/tooltip-error-br.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-c.png":[40,18,"png","qx"],"qx/decoration/Modern/form/tooltip-error-l.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",-6,0],"qx/decoration/Modern/form/tooltip-error-r.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-t.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-6],"qx/decoration/Modern/form/tooltip-error-tl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-18],"qx/decoration/Modern/form/tooltip-error-tr.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-12],"qx/decoration/Modern/form/tooltip-error.png":[127,30,"png","qx"],"qx/decoration/Modern/groupbox-lr-combined.png":[8,51,"png","qx"],"qx/decoration/Modern/groupbox-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-b.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-12],"qx/decoration/Modern/groupbox/groupbox-bl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-16],"qx/decoration/Modern/groupbox/groupbox-br.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-8],"qx/decoration/Modern/groupbox/groupbox-c.png":[40,51,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-l.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",-4,0],"qx/decoration/Modern/groupbox/groupbox-r.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-t.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-4],"qx/decoration/Modern/groupbox/groupbox-tl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-tr.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-20],"qx/decoration/Modern/groupbox/groupbox.png":[255,59,"png","qx"],"qx/decoration/Modern/menu-background-combined.png":[80,49,"png","qx"],"qx/decoration/Modern/menu-checkradio-combined.gif":[64,7,"gif","qx"],"qx/decoration/Modern/menu/background.png":[40,49,"png","qx","qx/decoration/Modern/menu-background-combined.png",-40,0],"qx/decoration/Modern/menu/bar-background.png":[40,20,"png","qx","qx/decoration/Modern/menu-background-combined.png",0,0],"qx/decoration/Modern/menu/checkbox-invert.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-16,0],"qx/decoration/Modern/menu/checkbox.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-48,0],"qx/decoration/Modern/menu/radiobutton-invert.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-32,0],"qx/decoration/Modern/menu/radiobutton.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",0,0],"qx/decoration/Modern/pane-lr-combined.png":[12,238,"png","qx"],"qx/decoration/Modern/pane-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/pane/pane-b.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-30],"qx/decoration/Modern/pane/pane-bl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-18],"qx/decoration/Modern/pane/pane-br.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-12],"qx/decoration/Modern/pane/pane-c.png":[40,238,"png","qx"],"qx/decoration/Modern/pane/pane-l.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",0,0],"qx/decoration/Modern/pane/pane-r.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",-6,0],"qx/decoration/Modern/pane/pane-t.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,0],"qx/decoration/Modern/pane/pane-tl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-24],"qx/decoration/Modern/pane/pane-tr.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-6],"qx/decoration/Modern/pane/pane.png":[185,250,"png","qx"],"qx/decoration/Modern/scrollbar-combined.png":[54,12,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-horizontal.png":[76,15,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-horizontal.png":[19,10,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-vertical.png":[10,19,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-vertical.png":[15,76,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-horizontal.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-34,0],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-vertical.png":[10,12,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-6,0],"qx/decoration/Modern/scrollbar/scrollbar-down.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-28,0],"qx/decoration/Modern/scrollbar/scrollbar-left.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-50,0],"qx/decoration/Modern/scrollbar/scrollbar-right.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-46,0],"qx/decoration/Modern/scrollbar/scrollbar-up.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",0,0],"qx/decoration/Modern/scrollbar/slider-knob-background.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-16,0],"qx/decoration/Modern/selection.png":[110,20,"png","qx"],"qx/decoration/Modern/shadow-lr-combined.png":[30,382,"png","qx"],"qx/decoration/Modern/shadow-small-lr-combined.png":[10,136,"png","qx"],"qx/decoration/Modern/shadow-small-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/shadow-tb-combined.png":[15,90,"png","qx"],"qx/decoration/Modern/shadow/shadow-b.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-30],"qx/decoration/Modern/shadow/shadow-bl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-br.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-45],"qx/decoration/Modern/shadow/shadow-c.png":[40,382,"png","qx"],"qx/decoration/Modern/shadow/shadow-l.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-r.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",-15,0],"qx/decoration/Modern/shadow/shadow-small-b.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-20],"qx/decoration/Modern/shadow/shadow-small-bl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-small-br.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-10],"qx/decoration/Modern/shadow/shadow-small-c.png":[40,136,"png","qx"],"qx/decoration/Modern/shadow/shadow-small-l.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-r.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",-5,0],"qx/decoration/Modern/shadow/shadow-small-t.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-5],"qx/decoration/Modern/shadow/shadow-small-tl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-tr.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-25],"qx/decoration/Modern/shadow/shadow-small.png":[114,146,"png","qx"],"qx/decoration/Modern/shadow/shadow-t.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-60],"qx/decoration/Modern/shadow/shadow-tl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-75],"qx/decoration/Modern/shadow/shadow-tr.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,0],"qx/decoration/Modern/shadow/shadow.png":[381,412,"png","qx"],"qx/decoration/Modern/splitpane-knobs-combined.png":[8,9,"png","qx"],"qx/decoration/Modern/splitpane/knob-horizontal.png":[1,8,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,-1],"qx/decoration/Modern/splitpane/knob-vertical.png":[8,1,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,0],"qx/decoration/Modern/table-combined.png":[94,18,"png","qx"],"qx/decoration/Modern/table/ascending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",0,0],"qx/decoration/Modern/table/boolean-false.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-80,0],"qx/decoration/Modern/table/boolean-true.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-26,0],"qx/decoration/Modern/table/descending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",-18,0],"qx/decoration/Modern/table/header-cell.png":[40,18,"png","qx","qx/decoration/Modern/table-combined.png",-40,0],"qx/decoration/Modern/table/select-column-order.png":[10,9,"png","qx","qx/decoration/Modern/table-combined.png",-8,0],"qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png":[10,14,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-lr-combined.png":[10,12,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-pane-lr-combined.png":[60,2,"png","qx"],"qx/decoration/Modern/tabview-pane-tb-combined.png":[30,180,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-bottom-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-bottom-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-bottom-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-l.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-r.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-bottom-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-bottom-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-active.png":[49,24,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-bottom-inactive.png":[45,21,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-left-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-left-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-left-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-left-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-left-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-left-active.png":[22,47,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-inactive.png":[20,45,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-right-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-right-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-right-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-right-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-right-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-right-active.png":[22,47,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-inactive.png":[20,45,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-top-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-top-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-top-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-active-l.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-r.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-top-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-top-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-top-active.png":[48,22,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-top-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-top-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-inactive.png":[45,21,"png","qx"],"qx/decoration/Modern/tabview/tabview-pane-b.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-60],"qx/decoration/Modern/tabview/tabview-pane-bl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-br.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-120],"qx/decoration/Modern/tabview/tabview-pane-c.png":[40,120,"png","qx"],"qx/decoration/Modern/tabview/tabview-pane-l.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-r.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",-30,0],"qx/decoration/Modern/tabview/tabview-pane-t.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-150],"qx/decoration/Modern/tabview/tabview-pane-tl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-30],"qx/decoration/Modern/tabview/tabview-pane-tr.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-90],"qx/decoration/Modern/tabview/tabview-pane.png":[185,250,"png","qx"],"qx/decoration/Modern/toolbar-combined.png":[80,130,"png","qx"],"qx/decoration/Modern/toolbar/toolbar-gradient-blue.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",-40,0],"qx/decoration/Modern/toolbar/toolbar-gradient.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",0,0],"qx/decoration/Modern/toolbar/toolbar-handle-knob.gif":[1,8,"gif","qx"],"qx/decoration/Modern/toolbar/toolbar-part.gif":[7,1,"gif","qx"],"qx/decoration/Modern/tooltip-error-lr-combined.png":[12,18,"png","qx"],"qx/decoration/Modern/tooltip-error-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/tree-combined.png":[32,8,"png","qx"],"qx/decoration/Modern/tree/closed-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-24,0],"qx/decoration/Modern/tree/closed.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-16,0],"qx/decoration/Modern/tree/open-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-8,0],"qx/decoration/Modern/tree/open.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",0,0],"qx/decoration/Modern/window-captionbar-buttons-combined.png":[108,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-active-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-inactive-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-active-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-inactive-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-statusbar-lr-combined.png":[8,7,"png","qx"],"qx/decoration/Modern/window-statusbar-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/window/captionbar-active-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-18],"qx/decoration/Modern/window/captionbar-active-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-active-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-active-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-active-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-active-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-6],"qx/decoration/Modern/window/captionbar-active-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-active.png":[69,21,"png","qx"],"qx/decoration/Modern/window/captionbar-inactive-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-inactive-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-6],"qx/decoration/Modern/window/captionbar-inactive-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-inactive-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-inactive-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-inactive-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-inactive-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-18],"qx/decoration/Modern/window/captionbar-inactive.png":[69,21,"png","qx"],"qx/decoration/Modern/window/close-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-27,0],"qx/decoration/Modern/window/close-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-9,0],"qx/decoration/Modern/window/close-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-90,0],"qx/decoration/Modern/window/maximize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-18,0],"qx/decoration/Modern/window/maximize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-81,0],"qx/decoration/Modern/window/maximize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-54,0],"qx/decoration/Modern/window/minimize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-63,0],"qx/decoration/Modern/window/minimize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-72,0],"qx/decoration/Modern/window/minimize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-36,0],"qx/decoration/Modern/window/restore-active-hovered.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",0,0],"qx/decoration/Modern/window/restore-active.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-99,0],"qx/decoration/Modern/window/restore-inactive.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-45,0],"qx/decoration/Modern/window/statusbar-b.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-16],"qx/decoration/Modern/window/statusbar-bl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-20],"qx/decoration/Modern/window/statusbar-br.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-4],"qx/decoration/Modern/window/statusbar-c.png":[40,7,"png","qx"],"qx/decoration/Modern/window/statusbar-l.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",-4,0],"qx/decoration/Modern/window/statusbar-r.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",0,0],"qx/decoration/Modern/window/statusbar-t.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,0],"qx/decoration/Modern/window/statusbar-tl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-8],"qx/decoration/Modern/window/statusbar-tr.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-12],"qx/decoration/Modern/window/statusbar.png":[369,15,"png","qx"],"qx/icon/Tango/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/edit-find.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/utilities-color-chooser.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/office-document.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder-open.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder.png":[16,16,"png","qx"],"qx/icon/Tango/22/actions/application-exit.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/edit-clear.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/edit-redo.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/go-next.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/go-previous.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/help-faq.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/media-playback-start.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/media-playback-stop.png":[22,22,"png","qx"],"qx/icon/Tango/22/apps/internet-web-browser.png":[22,22,"png","qx"],"qx/icon/Tango/22/apps/office-spreadsheet.png":[22,22,"png","qx"],"qx/icon/Tango/22/apps/utilities-color-chooser.png":[22,22,"png","qx"],"qx/icon/Tango/22/apps/utilities-log-viewer.png":[22,22,"png","qx"],"qx/icon/Tango/22/mimetypes/executable.png":[22,22,"png","qx"],"qx/icon/Tango/22/mimetypes/office-document.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder-open.png":[22,22,"png","qx","demobrowser/demo/test/combined/icons22.png",0,-44],"qx/icon/Tango/22/places/folder.png":[22,22,"png","qx","demobrowser/demo/test/combined/icons22.png",0,-22],"qx/icon/Tango/32/mimetypes/office-document.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder-open.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder.png":[32,32,"png","qx"],"qx/static/blank.gif":[1,1,"gif","qx"],"qx/static/blank.html":"qx"},"translations":{"C":{}}};
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
(function(){var w="on",u="qx.debug",t="off",s="|",r="default",q="object",p="&",o="qx.aspects",n="$",m="qx.allowUrlVariants",d="qx.client",k="qx.dynlocale",g="webkit",c="qxvariant",b="opera",f=":",e=".",h="qx.core.Variant",a="mshtml",j="gecko";
qx.Bootstrap.define(h,{statics:{__kq:{},__kr:{},compilerIsSet:function(){return true;
},define:function(x,y,z){if(qx.core.Variant.compilerIsSet(u,w)){if(!this.__ku(y)){throw new Error('Allowed values of variant "'+x+'" must be defined!');
}
if(z===undefined){throw new Error('Default value of variant "'+x+'" must be defined!');
}}
if(!this.__kq[x]){this.__kq[x]={};
}else if(qx.core.Variant.compilerIsSet(u,w)){if(this.__kq[x].defaultValue!==undefined){throw new Error('Variant "'+x+'" is already defined!');
}}this.__kq[x].allowedValues=y;
this.__kq[x].defaultValue=z;
},get:function(C){var D=this.__kq[C];

if(qx.core.Variant.compilerIsSet(u,w)){if(D===undefined){throw new Error('Variant "'+C+'" is not defined.');
}}
if(D.value!==undefined){return D.value;
}return D.defaultValue;
},__ks:function(){if(window.qxvariants){for(var B in qxvariants){if(qx.core.Variant.compilerIsSet(u,w)){if((B.split(e)).length<2){throw new Error('Malformed settings key "'+B+'". Must be following the schema "namespace.key".');
}}
if(!this.__kq[B]){this.__kq[B]={};
}this.__kq[B].value=qxvariants[B];
}window.qxvariants=undefined;

try{delete window.qxvariants;
}catch(H){}this.__kt(this.__kq);
}},__kt:function(){if(qx.core.Setting.get(m)!=true){return;
}var N=document.location.search.slice(1).split(p);

for(var i=0;i<N.length;i++){var O=N[i].split(f);

if(O.length!=3||O[0]!=c){continue;
}var P=O[1];

if(!this.__kq[P]){this.__kq[P]={};
}this.__kq[P].value=decodeURIComponent(O[2]);
}},select:function(E,F){if(qx.core.Variant.compilerIsSet(u,w)){if(!this.__kv(this.__kq[E])){throw new Error("Variant \""+E+"\" is not defined");
}
if(!this.__kv(F)){throw new Error("the second parameter must be a map!");
}}
for(var G in F){if(this.isSet(E,G)){return F[G];
}}
if(F[r]!==undefined){return F[r];
}
if(qx.core.Variant.compilerIsSet(u,w)){throw new Error('No match for variant "'+E+'" in variants ['+qx.Bootstrap.getKeysAsString(F)+'] found, and no default ("default") given');
}},isSet:function(I,J){var K=I+n+J;

if(this.__kr[K]!==undefined){return this.__kr[K];
}var M=false;
if(J.indexOf(s)<0){M=this.get(I)===J;
}else{var L=J.split(s);

for(var i=0,l=L.length;i<l;i++){if(this.get(I)===L[i]){M=true;
break;
}}}this.__kr[K]=M;
return M;
},__ku:function(v){return typeof v===q&&v!==null&&v instanceof Array;
},__kv:function(v){return typeof v===q&&v!==null&&!(v instanceof Array);
},__kw:function(Q,R){for(var i=0,l=Q.length;i<l;i++){if(Q[i]==R){return true;
}}return false;
}},defer:function(A){A.define(d,[j,a,b,g],qx.bom.client.Engine.NAME);
A.define(u,[w,t],w);
A.define(o,[w,t],t);
A.define(k,[w,t],w);
A.__ks();
}});
})();
(function(){var u="qx.debug",t="object",s="Interface",r="on",q="string",p="function",o="Boolean",n="qx.Interface",m="events",k="toggle",d="properties",j="]",g="members",c="number",b="boolean",f="is",e="[Interface ",h="statics";
qx.Bootstrap.define(n,{statics:{define:function(name,I){if(I){if(I.extend&&!(I.extend instanceof Array)){I.extend=[I.extend];
}if(qx.core.Variant.isSet(u,r)){this.__fD(name,I);
}var J=I.statics?I.statics:{};
if(I.extend){J.$$extends=I.extend;
}
if(I.properties){J.$$properties=I.properties;
}
if(I.members){J.$$members=I.members;
}
if(I.events){J.$$events=I.events;
}}else{var J={};
}J.$$type=s;
J.name=name;
J.toString=this.genericToString;
J.basename=qx.Bootstrap.createNamespace(name,J);
qx.Interface.$$registry[name]=J;
return J;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(v){if(!v){return [];
}var w=v.concat();

for(var i=0,l=v.length;i<l;i++){if(v[i].$$extends){w.push.apply(w,this.flatten(v[i].$$extends));
}}return w;
},__fx:function(K,L,M,N){var R=M.$$members;

if(R){for(var Q in R){if(qx.Bootstrap.isFunction(R[Q])){var P=this.__fy(L,Q);
var O=P||qx.Bootstrap.isFunction(K[Q]);

if(!O){throw new Error('Implementation of method "'+Q+'" is missing in class "'+L.classname+'" required by interface "'+M.name+'"');
}var S=N===true&&!P&&!qx.Bootstrap.hasInterface(L,M);

if(S){K[Q]=this.__fB(M,K[Q],Q,R[Q]);
}}else{if(typeof K[Q]===undefined){if(typeof K[Q]!==p){throw new Error('Implementation of member "'+Q+'" is missing in class "'+L.classname+'" required by interface "'+M.name+'"');
}}}}}},__fy:function(bd,be){var bi=be.match(/^(is|toggle|get|set|reset)(.*)$/);

if(!bi){return false;
}var bf=qx.Bootstrap.firstLow(bi[2]);
var bg=qx.Bootstrap.getPropertyDefinition(bd,bf);

if(!bg){return false;
}var bh=bi[0]==f||bi[0]==k;

if(bh){return qx.Bootstrap.getPropertyDefinition(bd,bf).check==o;
}return true;
},__fz:function(x,y){if(y.$$properties){for(var z in y.$$properties){if(!qx.Bootstrap.getPropertyDefinition(x,z)){throw new Error('The property "'+z+'" is not supported by Class "'+x.classname+'"!');
}}}},__fA:function(bj,bk){if(bk.$$events){for(var bl in bk.$$events){if(!qx.Bootstrap.supportsEvent(bj,bl)){throw new Error('The event "'+bl+'" is not supported by Class "'+bj.classname+'"!');
}}}},assertObject:function(A,B){var D=A.constructor;
this.__fx(A,D,B,false);
this.__fz(D,B);
this.__fA(D,B);
var C=B.$$extends;

if(C){for(var i=0,l=C.length;i<l;i++){this.assertObject(A,C[i]);
}}},assert:function(T,U,V){this.__fx(T.prototype,T,U,V);
this.__fz(T,U);
this.__fA(T,U);
var W=U.$$extends;

if(W){for(var i=0,l=W.length;i<l;i++){this.assert(T,W[i],V);
}}},genericToString:function(){return e+this.name+j;
},$$registry:{},__fB:qx.core.Variant.select(u,{"on":function(X,Y,ba,bb){function bc(){bb.apply(this,arguments);
return Y.apply(this,arguments);
}Y.wrapper=bc;
return bc;
},"default":function(){}}),__fC:qx.core.Variant.select(u,{"on":{"extend":t,"statics":t,"members":t,"properties":t,"events":t},"default":null}),__fD:qx.core.Variant.select(u,{"on":function(name,E){if(qx.core.Variant.isSet(u,r)){var H=this.__fC;

for(var G in E){if(H[G]===undefined){throw new Error('The configuration key "'+G+'" in class "'+name+'" is not allowed!');
}
if(E[G]==null){throw new Error("Invalid key '"+G+"' in interface '"+name+"'! The value is undefined/null!");
}
if(H[G]!==null&&typeof E[G]!==H[G]){throw new Error('Invalid type of key "'+G+'" in interface "'+name+'"! The type of the key must be "'+H[G]+'"!');
}}var F=[h,g,d,m];

for(var i=0,l=F.length;i<l;i++){var G=F[i];

if(E[G]!==undefined&&(E[G] instanceof Array||E[G] instanceof RegExp||E[G] instanceof Date||E[G].classname!==undefined)){throw new Error('Invalid key "'+G+'" in interface "'+name+'"! The value needs to be a map!');
}}if(E.extend){for(var i=0,a=E.extend,l=a.length;i<l;i++){if(a[i]==null){throw new Error("Extends of interfaces must be interfaces. The extend number '"+i+1+"' in interface '"+name+"' is undefined/null!");
}
if(a[i].$$type!==s){throw new Error("Extends of interfaces must be interfaces. The extend number '"+i+1+"' in interface '"+name+"' is not an interface!");
}}}if(E.statics){for(var G in E.statics){if(G.toUpperCase()!==G){throw new Error('Invalid key "'+G+'" in interface "'+name+'"! Static constants must be all uppercase.');
}
switch(typeof E.statics[G]){case b:case q:case c:break;
default:throw new Error('Invalid key "'+G+'" in interface "'+name+'"! Static constants must be all of a primitive type.');
}}}}},"default":function(){}})}});
})();
(function(){var r="object",q="qx.debug",p="function",o="Mixin",n="qx.Mixin",m=".prototype",k="constructor",j="[Mixin ",h="]",g="members",d="destruct",f="events",e="on",c="properties",b="statics";
qx.Bootstrap.define(n,{statics:{define:function(name,A){if(A){if(A.include&&!(A.include instanceof Array)){A.include=[A.include];
}if(qx.core.Variant.isSet(q,e)){this.__em(name,A);
}var C=A.statics?A.statics:{};
qx.Bootstrap.setDisplayNames(C,name);

for(var B in C){if(C[B] instanceof Function){C[B].$$mixin=C;
}}if(A.construct){C.$$constructor=A.construct;
qx.Bootstrap.setDisplayName(A.construct,name,k);
}
if(A.include){C.$$includes=A.include;
}
if(A.properties){C.$$properties=A.properties;
}
if(A.members){C.$$members=A.members;
qx.Bootstrap.setDisplayNames(A.members,name+m);
}
for(var B in C.$$members){if(C.$$members[B] instanceof Function){C.$$members[B].$$mixin=C;
}}
if(A.events){C.$$events=A.events;
}
if(A.destruct){C.$$destructor=A.destruct;
qx.Bootstrap.setDisplayName(A.destruct,name,d);
}}else{var C={};
}C.$$type=o;
C.name=name;
C.toString=this.genericToString;
C.basename=qx.Bootstrap.createNamespace(name,C);
this.$$registry[name]=C;
return C;
},checkCompatibility:function(s){var v=this.flatten(s);
var w=v.length;

if(w<2){return true;
}var z={};
var y={};
var x={};
var u;

for(var i=0;i<w;i++){u=v[i];

for(var t in u.events){if(x[t]){throw new Error('Conflict between mixin "'+u.name+'" and "'+x[t]+'" in member "'+t+'"!');
}x[t]=u.name;
}
for(var t in u.properties){if(z[t]){throw new Error('Conflict between mixin "'+u.name+'" and "'+z[t]+'" in property "'+t+'"!');
}z[t]=u.name;
}
for(var t in u.members){if(y[t]){throw new Error('Conflict between mixin "'+u.name+'" and "'+y[t]+'" in member "'+t+'"!');
}y[t]=u.name;
}}return true;
},isCompatible:function(D,E){var F=qx.Bootstrap.getMixins(E);
F.push(D);
return qx.Mixin.checkCompatibility(F);
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(K){if(!K){return [];
}var L=K.concat();

for(var i=0,l=K.length;i<l;i++){if(K[i].$$includes){L.push.apply(L,this.flatten(K[i].$$includes));
}}return L;
},genericToString:function(){return j+this.name+h;
},$$registry:{},__el:qx.core.Variant.select(q,{"on":{"include":r,"statics":r,"members":r,"properties":r,"events":r,"destruct":p,"construct":p},"default":null}),__em:qx.core.Variant.select(q,{"on":function(name,G){var J=this.__el;

for(var I in G){if(!J[I]){throw new Error('The configuration key "'+I+'" in mixin "'+name+'" is not allowed!');
}
if(G[I]==null){throw new Error('Invalid key "'+I+'" in mixin "'+name+'"! The value is undefined/null!');
}
if(J[I]!==null&&typeof G[I]!==J[I]){throw new Error('Invalid type of key "'+I+'" in mixin "'+name+'"! The type of the key must be "'+J[I]+'"!');
}}var H=[b,g,c,f];

for(var i=0,l=H.length;i<l;i++){var I=H[i];

if(G[I]!==undefined&&(G[I] instanceof Array||G[I] instanceof RegExp||G[I] instanceof Date||G[I].classname!==undefined)){throw new Error('Invalid key "'+I+'" in mixin "'+name+'"! The value needs to be a map!');
}}if(G.include){for(var i=0,a=G.include,l=a.length;i<l;i++){if(a[i]==null){throw new Error("Includes of mixins must be mixins. The include number '"+(i+1)+"' in mixin '"+name+"'is undefined/null!");
}
if(a[i].$$type!==o){throw new Error("Includes of mixins must be mixins. The include number '"+(i+1)+"' in mixin '"+name+"'is not a mixin!");
}}this.checkCompatibility(G.include);
}},"default":function(){}})}});
})();
(function(){var eE=';',eD='computed=this.',eC='=value;',eB='this.',eA="set",ez="setThemed",ey="init",ew="setRuntime",ev='if(this.',eu='delete this.',dx='!==undefined)',dw='}',dv="resetThemed",du='else if(this.',dt="string",ds="on",dr="qx.debug",dq='return this.',dp="reset",dn='","',eL='",value);',eM="",eJ="refresh",eK="boolean",eH="resetRuntime",eI='!==undefined){',eF='=true;',eG="this.",eN=";",eO='old=this.',ed="qx.propertyDebugLevel",ec='.$$properties.',ef="();",ee='else ',eh='if(old===undefined)old=this.',eg='old=computed=this.',ej='if(value===undefined)prop.error(this,2,"',ei="return this.",eb="get",ea='(value);',bS="(a[",bT='if(old===computed)return value;',bU='"), msg)',bV='!(',bW="value",bX=' of an instance of ',bY='var prop=qx.core.Property;',ca='if(old===undefined)old=null;',cb=')',cc=' is not (yet) ready!");',fd="]);",fc='!==inherit){',fb='var msg = "Invalid incoming value for property \'',fa='qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)',fh='value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)',fg='value !== null && value.nodeType === 9 && value.documentElement',ff='===value)return value;',fe='value !== null && value.$$type === "Mixin"',fj='return init;',fi='var init=this.',cM=')prop.error(this,5,"',cN='value !== null && value.nodeType === 1 && value.attributes',cK="var parent = this.getLayoutParent();",cL="Error in property ",cQ='var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){',cR="property",cO='.check.call(this, value)',cP='if((computed===undefined||computed===inherit)&&',cI='.validate.call(this, value);',cJ='qx.core.Assert.assertInstance(value, Date, msg) || true',cu='else{',ct="if (!parent) return;",cw=" in method ",cv='qx.core.Assert.assertInstance(value, Error, msg) || true',cq='=computed;',cp='Undefined value is not allowed!',cs='(backup);',cr='if(',co="MSIE 6.0",cn='if(computed===inherit){',cW="inherit",cX='Is invalid!',cY='var computed, old=this.',da='else if(computed===undefined)',cS="': ",cT=" of class ",cU='value !== null && value.nodeType !== undefined',cV='===undefined)return;',db='value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',dc="')){",cF='qx.core.Assert.assertPositiveInteger(value, msg) || true',cE='else this.',cD='value=this.',cC='if(init==qx.core.Property.$$inherit)init=null;',cB='qx.core.Assert.assertInArray(value, ',cA='value !== null && value.$$type === "Interface"',cz='var inherit=prop.$$inherit;',cy="', qx.event.type.Data, [computed, old]",cH="var value = parent.",cG="$$useinit_",dd='computed=undefined;delete this.',de="(value);",df='Requires exactly one argument!',dg='computed=value;',dh="$$runtime_",di='if(this.$$initialized)prop.error(this,0,"',dj='qx.core.Assert.assertInstance(value, qx.Class.getByName("',dk="$$user_",dl='if(value===null)prop.error(this,4,"',dm='){',dE='!',dD='qx.core.Assert.assertArray(value, msg) || true',dC='if(computed===undefined||computed===inherit){',dB='qx.core.Assert.assertPositiveNumber(value, msg) || true',dI=".prototype",dH="function",dG="Boolean",dF=")}",dL='(computed, old, "',dK='return value;',dV='if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ',dW='}else{',dT="if(reg.hasListener(this, '",dU='Does not allow any arguments!',dR='\'";',dS=')a[i].',dP="()",dQ=';}',dX="var a=arguments[0] instanceof Array?arguments[0]:arguments;",dY='value !== null && value.$$type === "Theme"',en='if(value!==null)',em="var reg=qx.event.Registration;",ep="())",eo='return null;',er='qx.core.Assert.assertObject(value, msg) || true',eq='");',et='qx.core.Assert.assertString(value, msg) || true',es='!==undefined&&',el='var pa=this.getLayoutParent();if(pa)computed=pa.',ek="if (value===undefined) value = parent.",eV='value !== null && value.$$type === "Class"',eW='qx.core.Assert.assertFunction(value, msg) || true',eX='var computed, old;',eY='var backup=computed;',eR=".",eS="object",eT="$$init_",eU='qx.core.Assert.assertInterface(value, qx.Interface.getByName("',eP="$$theme_",eQ='if(computed===undefined)computed=null;',bR='\' of class \'',bQ='if(arguments.length!==1)prop.error(this,1,"',bP='qx.core.Assert.assertMap(value, msg) || true',bO="qx.aspects",bN='qx.core.Assert.assertNumber(value, msg) || true',bM="reg.fireEvent(this, '",bL='Null value is not allowed!',bK='if(value!==inherit)',bJ='qx.core.Assert.assertInteger(value, msg) || true',bI="rv:1.8.1",cf="shorthand",cg='qx.core.Assert.assertInstance(value, RegExp, msg) || true',cd='value !== null && value.type !== undefined',ce='value !== null && value.document',cj='throw new Error("Property ',ck="(!this.",ch='qx.core.Assert.assertBoolean(value, msg) || true',ci='if(a[i].',cl='.check, msg)',cm="toggle",dM="$$inherit_",dJ=" with incoming value '",dO='if(arguments.length!==0)prop.error(this,3,"',dN="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));",dz='if(computed===undefined||computed==inherit)computed=null;',dy="qx.core.Property",cx="is",dA='Could not change or apply init value after constructing phase!';
qx.Bootstrap.define(dy,{statics:{__kU:{"Boolean":ch,"String":et,"Number":bN,"Integer":bJ,"PositiveNumber":dB,"PositiveInteger":cF,"Error":cv,"RegExp":cg,"Object":er,"Array":dD,"Map":bP,"Function":eW,"Date":cJ,"Node":cU,"Element":cN,"Document":fg,"Window":ce,"Event":cd,"Class":eV,"Mixin":fe,"Interface":cA,"Theme":dY,"Color":fa,"Decorator":db,"Font":fh},__kV:{"Node":true,"Element":true,"Document":true,"Window":true,"Event":true},$$inherit:cW,$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},set:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{name:dt,dereference:eK,inheritable:eK,nullable:eK,themeable:eK,refine:eK,init:null,apply:dt,event:dt,check:null,transform:dt,deferredInit:eK,validate:null},$$allowedGroupKeys:{name:dt,group:eS,mode:dt,themeable:eK},$$inheritable:{},__kW:function(p){var q=this.__kX(p);

if(!q.length){var r=qx.lang.Function.empty;
}else{r=this.__kY(q);
}p.prototype.$$refreshInheritables=r;
},__kX:function(C){var E=[];

while(C){var D=C.$$properties;

if(D){for(var name in this.$$inheritable){if(D[name]&&D[name].inheritable){E.push(name);
}}}C=C.superclass;
}return E;
},__kY:function(F){var J=this.$$store.inherit;
var I=this.$$store.init;
var H=this.$$method.refresh;
var G=[cK,ct];

for(var i=0,l=F.length;i<l;i++){var name=F[i];
G.push(cH,J[name],eN,ek,I[name],eN,eG,H[name],de);
}return new Function(G.join(eM));
},attachRefreshInheritables:function(s){s.prototype.$$refreshInheritables=function(){qx.core.Property.__kW(s);
return this.$$refreshInheritables();
};
},attachMethods:function(bs,name,bt){bt.group?this.__la(bs,bt,name):this.__lb(bs,bt,name);
},__la:function(fu,fv,name){var fC=qx.Bootstrap.firstUp(name);
var fB=fu.prototype;
var fD=fv.themeable===true;

if(qx.core.Variant.isSet(dr,ds)){if(qx.core.Setting.get(ed)>1){qx.Bootstrap.debug("Generating property group: "+name);
}}var fE=[];
var fy=[];

if(fD){var fw=[];
var fA=[];
}var fz=dX;
fE.push(fz);

if(fD){fw.push(fz);
}
if(fv.mode==cf){var fx=dN;
fE.push(fx);

if(fD){fw.push(fx);
}}
for(var i=0,a=fv.group,l=a.length;i<l;i++){if(qx.core.Variant.isSet(dr,ds)){if(!this.$$method.set[a[i]]||!this.$$method.reset[a[i]]){throw new Error("Cannot create property group '"+name+"' including non-existing property '"+a[i]+"'!");
}}fE.push(eG,this.$$method.set[a[i]],bS,i,fd);
fy.push(eG,this.$$method.reset[a[i]],ef);

if(fD){if(qx.core.Variant.isSet(dr,ds)){if(!this.$$method.setThemed[a[i]]){throw new Error("Cannot add the non themable property '"+a[i]+"' to the themable property group '"+name+"'");
}}fw.push(eG,this.$$method.setThemed[a[i]],bS,i,fd);
fA.push(eG,this.$$method.resetThemed[a[i]],ef);
}}this.$$method.set[name]=eA+fC;
fB[this.$$method.set[name]]=new Function(fE.join(eM));
this.$$method.reset[name]=dp+fC;
fB[this.$$method.reset[name]]=new Function(fy.join(eM));

if(fD){this.$$method.setThemed[name]=ez+fC;
fB[this.$$method.setThemed[name]]=new Function(fw.join(eM));
this.$$method.resetThemed[name]=dv+fC;
fB[this.$$method.resetThemed[name]]=new Function(fA.join(eM));
}},__lb:function(X,Y,name){var bb=qx.Bootstrap.firstUp(name);
var bd=X.prototype;

if(qx.core.Variant.isSet(dr,ds)){if(qx.core.Setting.get(ed)>1){qx.Bootstrap.debug("Generating property wrappers: "+name);
}}if(Y.dereference===undefined&&typeof Y.check===dt){Y.dereference=this.__lc(Y.check);
}var bc=this.$$method;
var ba=this.$$store;
ba.runtime[name]=dh+name;
ba.user[name]=dk+name;
ba.theme[name]=eP+name;
ba.init[name]=eT+name;
ba.inherit[name]=dM+name;
ba.useinit[name]=cG+name;
bc.get[name]=eb+bb;
bd[bc.get[name]]=function(){return qx.core.Property.executeOptimizedGetter(this,X,name,eb);
};
bc.set[name]=eA+bb;
bd[bc.set[name]]=function(g){return qx.core.Property.executeOptimizedSetter(this,X,name,eA,arguments);
};
bc.reset[name]=dp+bb;
bd[bc.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,X,name,dp);
};

if(Y.inheritable||Y.apply||Y.event||Y.deferredInit){bc.init[name]=ey+bb;
bd[bc.init[name]]=function(f){return qx.core.Property.executeOptimizedSetter(this,X,name,ey,arguments);
};
}
if(Y.inheritable){bc.refresh[name]=eJ+bb;
bd[bc.refresh[name]]=function(e){return qx.core.Property.executeOptimizedSetter(this,X,name,eJ,arguments);
};
}bc.setRuntime[name]=ew+bb;
bd[bc.setRuntime[name]]=function(br){return qx.core.Property.executeOptimizedSetter(this,X,name,ew,arguments);
};
bc.resetRuntime[name]=eH+bb;
bd[bc.resetRuntime[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,X,name,eH);
};

if(Y.themeable){bc.setThemed[name]=ez+bb;
bd[bc.setThemed[name]]=function(O){return qx.core.Property.executeOptimizedSetter(this,X,name,ez,arguments);
};
bc.resetThemed[name]=dv+bb;
bd[bc.resetThemed[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,X,name,dv);
};
}
if(Y.check===dG){bd[cm+bb]=new Function(ei+bc.set[name]+ck+bc.get[name]+ep);
bd[cx+bb]=new Function(ei+bc.get[name]+dP);
}},__lc:function(bu){return !!this.__kV[bu];
},__ld:function(z){return this.__kV[z]||qx.Bootstrap.classIsDefined(z)||(qx.Interface&&qx.Interface.isDefined(z));
},__le:{0:dA,1:df,2:cp,3:dU,4:bL,5:cX},error:function(P,Q,R,S,T){var U=P.constructor.classname;
var V=cL+R+cT+U+cw+this.$$method[S][R]+dJ+T+cS;
throw new Error(V+(this.__le[Q]||"Unknown reason: "+Q));
},__lf:function(h,j,name,k,m,n){var o=this.$$method[k][name];
if(qx.core.Variant.isSet(dr,ds)){if(qx.core.Setting.get(ed)>1){qx.Bootstrap.debug("Code["+this.$$method[k][name]+"]: "+m.join(""));
}try{j[o]=new Function(bW,m.join(eM));
}catch(be){throw new Error("Malformed generated code to unwrap method: "+this.$$method[k][name]+"\n"+m.join(""));
}}else{j[o]=new Function(bW,m.join(eM));
}if(qx.core.Variant.isSet(bO,ds)){j[o]=qx.core.Aspect.wrap(h.classname+eR+o,j[o],cR);
}qx.Bootstrap.setDisplayName(j[o],h.classname+dI,o);
if(n===undefined){return h[o]();
}else if(qx.core.Variant.isSet(dr,ds)){return h[o].apply(h,n);
}else{return h[o](n[0]);
}},executeOptimizedGetter:function(bf,bg,name,bh){var bj=bg.$$properties[name];
var bl=bg.prototype;
var bi=[];
var bk=this.$$store;
bi.push(ev,bk.runtime[name],dx);
bi.push(dq,bk.runtime[name],eE);

if(bj.inheritable){bi.push(du,bk.inherit[name],dx);
bi.push(dq,bk.inherit[name],eE);
bi.push(ee);
}bi.push(ev,bk.user[name],dx);
bi.push(dq,bk.user[name],eE);

if(bj.themeable){bi.push(du,bk.theme[name],dx);
bi.push(dq,bk.theme[name],eE);
}
if(bj.deferredInit&&bj.init===undefined){bi.push(du,bk.init[name],dx);
bi.push(dq,bk.init[name],eE);
}bi.push(ee);

if(bj.init!==undefined){if(bj.inheritable){bi.push(fi,bk.init[name],eE);

if(bj.nullable){bi.push(cC);
}else if(bj.init!==undefined){bi.push(dq,bk.init[name],eE);
}else{bi.push(dV,name,bX,bg.classname,cc);
}bi.push(fj);
}else{bi.push(dq,bk.init[name],eE);
}}else if(bj.inheritable||bj.nullable){bi.push(eo);
}else{bi.push(cj,name,bX,bg.classname,cc);
}return this.__lf(bf,bl,name,bh,bi);
},executeOptimizedSetter:function(fk,fl,name,fm,fn){var fs=fl.$$properties[name];
var fr=fl.prototype;
var fp=[];
var fo=fm===eA||fm===ez||fm===ew||(fm===ey&&fs.init===undefined);
var fq=fs.apply||fs.event||fs.inheritable;
var ft=this.__lg(fm,name);
this.__lh(fp,fs,name,fm,fo);

if(fo){this.__li(fp,fl,fs,name);
}
if(fq){this.__lj(fp,fo,ft,fm);
}
if(fs.inheritable){fp.push(cz);
}
if(qx.core.Variant.isSet(dr,ds)){if(fo){this.__lk(fp,fs,fl,name,fm);
}}
if(!fq){this.__ll(fp,name,fm,fo);
}else{this.__lm(fp,fs,name,fm,fo);
}
if(fs.inheritable){this.__ln(fp,fs,name,fm);
}else if(fq){this.__lo(fp,fs,name,fm);
}
if(fq){this.__lp(fp,fs,name);
if(fs.inheritable&&fr._getChildren){this.__lq(fp,name);
}}if(fo){fp.push(dK);
}return this.__lf(fk,fr,name,fm,fp,fn);
},__lg:function(A,name){if(A===ew||A===eH){var B=this.$$store.runtime[name];
}else if(A===ez||A===dv){B=this.$$store.theme[name];
}else if(A===ey){B=this.$$store.init[name];
}else{B=this.$$store.user[name];
}return B;
},__lh:function(bE,bF,name,bG,bH){if(qx.core.Variant.isSet(dr,ds)){bE.push(bY);

if(bG===ey){bE.push(di,name,dn,bG,eL);
}
if(bG===eJ){}else if(bH){bE.push(bQ,name,dn,bG,eL);
bE.push(ej,name,dn,bG,eL);
}else{bE.push(dO,name,dn,bG,eL);
}}else{if(!bF.nullable||bF.check||bF.inheritable){bE.push(bY);
}if(bG===eA){bE.push(ej,name,dn,bG,eL);
}}},__li:function(bv,bw,bx,name){if(bx.transform){bv.push(cD,bx.transform,ea);
}if(bx.validate){if(typeof bx.validate===dt){bv.push(eB,bx.validate,ea);
}else if(bx.validate instanceof Function){bv.push(bw.classname,ec,name);
bv.push(cI);
}}},__lj:function(bm,bn,bo,bp){var bq=(bp===dp||bp===dv||bp===eH);

if(bn){bm.push(ev,bo,ff);
}else if(bq){bm.push(ev,bo,cV);
}},__lk:qx.core.Variant.select(dr,{"on":function(v,w,x,name,y){if(!w.nullable){v.push(dl,name,dn,y,eL);
}if(w.check!==undefined){v.push(fb+name+bR+x.classname+dR);
if(w.nullable){v.push(en);
}if(w.inheritable){v.push(bK);
}v.push(cr);

if(this.__kU[w.check]!==undefined){v.push(bV,this.__kU[w.check],cb);
}else if(qx.Class.isDefined(w.check)){v.push(dj,w.check,bU);
}else if(qx.Interface&&qx.Interface.isDefined(w.check)){v.push(eU,w.check,bU);
}else if(typeof w.check===dH){v.push(dE,x.classname,ec,name);
v.push(cO);
}else if(typeof w.check===dt){v.push(bV,w.check,cb);
}else if(w.check instanceof Array){v.push(cB,x.classname,ec,name,cl);
}else{throw new Error("Could not add check to property "+name+" of class "+x.classname);
}v.push(cM,name,dn,y,eL);
}},"off":undefined}),__ll:function(b,name,c,d){if(c===ew){b.push(eB,this.$$store.runtime[name],eC);
}else if(c===eH){b.push(ev,this.$$store.runtime[name],dx);
b.push(eu,this.$$store.runtime[name],eE);
}else if(c===eA){b.push(eB,this.$$store.user[name],eC);
}else if(c===dp){b.push(ev,this.$$store.user[name],dx);
b.push(eu,this.$$store.user[name],eE);
}else if(c===ez){b.push(eB,this.$$store.theme[name],eC);
}else if(c===dv){b.push(ev,this.$$store.theme[name],dx);
b.push(eu,this.$$store.theme[name],eE);
}else if(c===ey&&d){b.push(eB,this.$$store.init[name],eC);
}},__lm:function(K,L,name,M,N){if(L.inheritable){K.push(cY,this.$$store.inherit[name],eE);
}else{K.push(eX);
}K.push(ev,this.$$store.runtime[name],eI);

if(M===ew){K.push(eD,this.$$store.runtime[name],eC);
}else if(M===eH){K.push(eu,this.$$store.runtime[name],eE);
K.push(ev,this.$$store.user[name],dx);
K.push(eD,this.$$store.user[name],eE);
K.push(du,this.$$store.theme[name],dx);
K.push(eD,this.$$store.theme[name],eE);
K.push(du,this.$$store.init[name],eI);
K.push(eD,this.$$store.init[name],eE);
K.push(eB,this.$$store.useinit[name],eF);
K.push(dw);
}else{K.push(eg,this.$$store.runtime[name],eE);
if(M===eA){K.push(eB,this.$$store.user[name],eC);
}else if(M===dp){K.push(eu,this.$$store.user[name],eE);
}else if(M===ez){K.push(eB,this.$$store.theme[name],eC);
}else if(M===dv){K.push(eu,this.$$store.theme[name],eE);
}else if(M===ey&&N){K.push(eB,this.$$store.init[name],eC);
}}K.push(dw);
K.push(du,this.$$store.user[name],eI);

if(M===eA){if(!L.inheritable){K.push(eO,this.$$store.user[name],eE);
}K.push(eD,this.$$store.user[name],eC);
}else if(M===dp){if(!L.inheritable){K.push(eO,this.$$store.user[name],eE);
}K.push(eu,this.$$store.user[name],eE);
K.push(ev,this.$$store.runtime[name],dx);
K.push(eD,this.$$store.runtime[name],eE);
K.push(ev,this.$$store.theme[name],dx);
K.push(eD,this.$$store.theme[name],eE);
K.push(du,this.$$store.init[name],eI);
K.push(eD,this.$$store.init[name],eE);
K.push(eB,this.$$store.useinit[name],eF);
K.push(dw);
}else{if(M===ew){K.push(eD,this.$$store.runtime[name],eC);
}else if(L.inheritable){K.push(eD,this.$$store.user[name],eE);
}else{K.push(eg,this.$$store.user[name],eE);
}if(M===ez){K.push(eB,this.$$store.theme[name],eC);
}else if(M===dv){K.push(eu,this.$$store.theme[name],eE);
}else if(M===ey&&N){K.push(eB,this.$$store.init[name],eC);
}}K.push(dw);
if(L.themeable){K.push(du,this.$$store.theme[name],eI);

if(!L.inheritable){K.push(eO,this.$$store.theme[name],eE);
}
if(M===ew){K.push(eD,this.$$store.runtime[name],eC);
}else if(M===eA){K.push(eD,this.$$store.user[name],eC);
}else if(M===ez){K.push(eD,this.$$store.theme[name],eC);
}else if(M===dv){K.push(eu,this.$$store.theme[name],eE);
K.push(ev,this.$$store.init[name],eI);
K.push(eD,this.$$store.init[name],eE);
K.push(eB,this.$$store.useinit[name],eF);
K.push(dw);
}else if(M===ey){if(N){K.push(eB,this.$$store.init[name],eC);
}K.push(eD,this.$$store.theme[name],eE);
}else if(M===eJ){K.push(eD,this.$$store.theme[name],eE);
}K.push(dw);
}K.push(du,this.$$store.useinit[name],dm);

if(!L.inheritable){K.push(eO,this.$$store.init[name],eE);
}
if(M===ey){if(N){K.push(eD,this.$$store.init[name],eC);
}else{K.push(eD,this.$$store.init[name],eE);
}}else if(M===eA||M===ew||M===ez||M===eJ){K.push(eu,this.$$store.useinit[name],eE);

if(M===ew){K.push(eD,this.$$store.runtime[name],eC);
}else if(M===eA){K.push(eD,this.$$store.user[name],eC);
}else if(M===ez){K.push(eD,this.$$store.theme[name],eC);
}else if(M===eJ){K.push(eD,this.$$store.init[name],eE);
}}K.push(dw);
if(M===eA||M===ew||M===ez||M===ey){K.push(cu);

if(M===ew){K.push(eD,this.$$store.runtime[name],eC);
}else if(M===eA){K.push(eD,this.$$store.user[name],eC);
}else if(M===ez){K.push(eD,this.$$store.theme[name],eC);
}else if(M===ey){if(N){K.push(eD,this.$$store.init[name],eC);
}else{K.push(eD,this.$$store.init[name],eE);
}K.push(eB,this.$$store.useinit[name],eF);
}K.push(dw);
}},__ln:function(fF,fG,name,fH){fF.push(dC);

if(fH===eJ){fF.push(dg);
}else{fF.push(el,this.$$store.inherit[name],eE);
}fF.push(cP);
fF.push(eB,this.$$store.init[name],es);
fF.push(eB,this.$$store.init[name],fc);
fF.push(eD,this.$$store.init[name],eE);
fF.push(eB,this.$$store.useinit[name],eF);
fF.push(dW);
fF.push(eu,this.$$store.useinit[name],dQ);
fF.push(dw);
fF.push(bT);
fF.push(cn);
fF.push(dd,this.$$store.inherit[name],eE);
fF.push(dw);
fF.push(da);
fF.push(eu,this.$$store.inherit[name],eE);
fF.push(cE,this.$$store.inherit[name],cq);
fF.push(eY);
if(fG.init!==undefined&&fH!==ey){fF.push(eh,this.$$store.init[name],eN);
}else{fF.push(ca);
}fF.push(dz);
},__lo:function(bB,bC,name,bD){if(bD!==eA&&bD!==ew&&bD!==ez){bB.push(eQ);
}bB.push(bT);
if(bC.init!==undefined&&bD!==ey){bB.push(eh,this.$$store.init[name],eN);
}else{bB.push(ca);
}},__lp:function(t,u,name){if(u.apply){t.push(eB,u.apply,dL,name,eq);
}if(u.event){t.push(em,dT,u.event,dc,bM,u.event,cy,dF);
}},__lq:function(W,name){W.push(cQ);
W.push(ci,this.$$method.refresh[name],dS,this.$$method.refresh[name],cs);
W.push(dw);
}},defer:function(by){var bA=navigator.userAgent.indexOf(co)!=-1;
var bz=navigator.userAgent.indexOf(bI)!=-1;
if(bA||bz){by.__lc=by.__ld;
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
(function(){var d="qx.core.Aspect",c="before",b="*",a="static";
qx.Bootstrap.define(d,{statics:{__ka:[],wrap:function(f,g,h){var n=[];
var j=[];
var m=this.__ka;
var l;

for(var i=0;i<m.length;i++){l=m[i];

if((l.type==null||h==l.type||l.type==b)&&(l.name==null||f.match(l.name))){l.pos==-1?n.push(l.fcn):j.push(l.fcn);
}}
if(n.length===0&&j.length===0){return g;
}var k=function(){for(var i=0;i<n.length;i++){n[i].call(this,f,g,h,arguments);
}var e=g.apply(this,arguments);

for(var i=0;i<j.length;i++){j[i].call(this,f,g,h,arguments,e);
}return e;
};

if(h!==a){k.self=g.self;
k.base=g.base;
}g.wrapper=k;
k.original=g;
return k;
},addAdvice:function(o,p,q,name){this.__ka.push({fcn:o,pos:p===c?-1:1,type:q,name:name});
}}});
})();
(function(){var G="qx.debug",F="on",E="object",D=".",C="qx.aspects",B="static",A="function",z="string",y="abstract",x="singleton",bh="constructor",bg="_",bf=".prototype",be="$$init_",bd="extend",bc="init",bb="qx.event.type.Data",ba="refine",Y="members",X="variants",N="off",O="properties",L="statics",M="toString",J="events",K="]",H="Class",I="Interface",P="qx.Class",Q="Mixin",S="settings",R='Assumed static class because no "extend" key was found. ',U="[Class ",T="destructor",W="destruct",V="member";
qx.Bootstrap.define(P,{statics:{define:function(name,bn){if(!bn){var bn={};
}if(bn.include&&!(bn.include instanceof Array)){bn.include=[bn.include];
}if(bn.implement&&!(bn.implement instanceof Array)){bn.implement=[bn.implement];
}var bo=false;

if(!bn.hasOwnProperty(bd)&&!bn.type){bn.type=B;
bo=true;
}if(qx.core.Variant.isSet(G,F)){try{this.__bY(name,bn);
}catch(bJ){if(bo){bJ.message=R+bJ.message;
}throw bJ;
}}var bp=this.__cb(name,bn.type,bn.extend,bn.statics,bn.construct,bn.destruct,bn.include);
if(bn.extend){if(bn.properties){this.__cd(bp,bn.properties,true);
}if(bn.members){this.__cf(bp,bn.members,true,true,false);
}if(bn.events){this.__cc(bp,bn.events,true);
}if(bn.include){for(var i=0,l=bn.include.length;i<l;i++){this.__cj(bp,bn.include[i],false);
}}}if(bn.settings){for(var bq in bn.settings){qx.core.Setting.define(bq,bn.settings[bq]);
}}if(bn.variants){for(var bq in bn.variants){qx.core.Variant.define(bq,bn.variants[bq].allowedValues,bn.variants[bq].defaultValue);
}}if(bn.implement){for(var i=0,l=bn.implement.length;i<l;i++){this.__ch(bp,bn.implement[i]);
}}
if(qx.core.Variant.isSet(G,F)){this.__ca(bp);
}if(bn.defer){bn.defer.self=bp;
bn.defer(bp,bp.prototype,{add:function(name,bU){var bV={};
bV[name]=bU;
qx.Class.__cd(bp,bV,true);
}});
}return bp;
},undefine:function(name){delete this.$$registry[name];
var cu=name.split(D);
var cw=[window];

for(var i=0;i<cu.length;i++){cw.push(cw[i][cu[i]]);
}for(var i=cw.length-1;i>=1;i--){var cv=cw[i];
var parent=cw[i-1];

if(qx.Bootstrap.isFunction(cv)||qx.Bootstrap.objectGetLength(cv)===0){delete parent[cu[i-1]];
}else{break;
}}},isDefined:qx.Bootstrap.classIsDefined,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},getByName:qx.Bootstrap.getByName,include:function(cB,cC){if(qx.core.Variant.isSet(G,F)){if(!cC){throw new Error("The mixin to include into class '"+cB.classname+"' is undefined/null!");
}qx.Mixin.isCompatible(cC,cB);
}qx.Class.__cj(cB,cC,false);
},patch:function(cx,cy){if(qx.core.Variant.isSet(G,F)){if(!cy){throw new Error("The mixin to patch class '"+cx.classname+"' is undefined/null!");
}qx.Mixin.isCompatible(cy,cx);
}qx.Class.__cj(cx,cy,true);
},isSubClassOf:function(bz,bA){if(!bz){return false;
}
if(bz==bA){return true;
}
if(bz.prototype instanceof bA){return true;
}return false;
},getPropertyDefinition:qx.Bootstrap.getPropertyDefinition,getProperties:function(bi){var bj=[];

while(bi){if(bi.$$properties){bj.push.apply(bj,qx.Bootstrap.getKeys(bi.$$properties));
}bi=bi.superclass;
}return bj;
},getByProperty:function(bX,name){while(bX){if(bX.$$properties&&bX.$$properties[name]){return bX;
}bX=bX.superclass;
}return null;
},hasProperty:qx.Bootstrap.hasProperty,getEventType:qx.Bootstrap.getEventType,supportsEvent:qx.Bootstrap.supportsEvent,hasOwnMixin:function(bH,bI){return bH.$$includes&&bH.$$includes.indexOf(bI)!==-1;
},getByMixin:function(bE,bF){var bG,i,l;

while(bE){if(bE.$$includes){bG=bE.$$flatIncludes;

for(i=0,l=bG.length;i<l;i++){if(bG[i]===bF){return bE;
}}}bE=bE.superclass;
}return null;
},getMixins:qx.Bootstrap.getMixins,hasMixin:function(cH,cI){return !!this.getByMixin(cH,cI);
},hasOwnInterface:function(br,bs){return br.$$implements&&br.$$implements.indexOf(bs)!==-1;
},getByInterface:qx.Bootstrap.getByInterface,getInterfaces:function(f){var g=[];

while(f){if(f.$$implements){g.push.apply(g,f.$$flatImplements);
}f=f.superclass;
}return g;
},hasInterface:qx.Bootstrap.hasInterface,implementsInterface:function(bt,bu){var bv=bt.constructor;

if(this.hasInterface(bv,bu)){return true;
}
try{qx.Interface.assertObject(bt,bu);
return true;
}catch(bW){}
try{qx.Interface.assert(bv,bu,false);
return true;
}catch(cA){}return false;
},getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;
this.$$instance=new this;
delete this.$$allowconstruct;
}return this.$$instance;
},genericToString:function(){return U+this.classname+K;
},$$registry:qx.Bootstrap.$$registry,__bW:qx.core.Variant.select(G,{"on":{"type":z,"extend":A,"implement":E,"include":E,"construct":A,"statics":E,"properties":E,"members":E,"settings":E,"variants":E,"events":E,"defer":A,"destruct":A},"default":null}),__bX:qx.core.Variant.select(G,{"on":{"type":z,"statics":E,"settings":E,"variants":E,"defer":A},"default":null}),__bY:qx.core.Variant.select(G,{"on":function(name,b){if(b.type&&!(b.type===B||b.type===y||b.type===x)){throw new Error('Invalid type "'+b.type+'" definition for class "'+name+'"!');
}if(b.type&&b.type!==B&&!b.extend){throw new Error('Invalid config in class "'+name+'"! Every non-static class has to extend at least the "qx.core.Object" class.');
}var e=b.type===B?this.__bX:this.__bW;

for(var d in b){if(!e[d]){throw new Error('The configuration key "'+d+'" in class "'+name+'" is not allowed!');
}
if(b[d]==null){throw new Error('Invalid key "'+d+'" in class "'+name+'"! The value is undefined/null!');
}
if(typeof b[d]!==e[d]){throw new Error('Invalid type of key "'+d+'" in class "'+name+'"! The type of the key must be "'+e[d]+'"!');
}}var c=[L,O,Y,S,X,J];

for(var i=0,l=c.length;i<l;i++){var d=c[i];

if(b[d]!==undefined&&(b[d].$$hash!==undefined||!qx.Bootstrap.isObject(b[d]))){throw new Error('Invalid key "'+d+'" in class "'+name+'"! The value needs to be a map!');
}}if(b.include){if(b.include instanceof Array){for(var i=0,a=b.include,l=a.length;i<l;i++){if(a[i]==null||a[i].$$type!==Q){throw new Error('The include definition in class "'+name+'" contains an invalid mixin at position '+i+': '+a[i]);
}}}else{throw new Error('Invalid include definition in class "'+name+'"! Only mixins and arrays of mixins are allowed!');
}}if(b.implement){if(b.implement instanceof Array){for(var i=0,a=b.implement,l=a.length;i<l;i++){if(a[i]==null||a[i].$$type!==I){throw new Error('The implement definition in class "'+name+'" contains an invalid interface at position '+i+': '+a[i]);
}}}else{throw new Error('Invalid implement definition in class "'+name+'"! Only interfaces and arrays of interfaces are allowed!');
}}if(b.include){try{qx.Mixin.checkCompatibility(b.include);
}catch(cz){throw new Error('Error in include definition of class "'+name+'"! '+cz.message);
}}if(b.settings){for(var d in b.settings){if(d.substr(0,d.indexOf(D))!=name.substr(0,name.indexOf(D))){throw new Error('Forbidden setting "'+d+'" found in "'+name+'". It is forbidden to define a default setting for an external namespace!');
}}}if(b.variants){for(var d in b.variants){if(d.substr(0,d.indexOf(D))!=name.substr(0,name.indexOf(D))){throw new Error('Forbidden variant "'+d+'" found in "'+name+'". It is forbidden to define a variant for an external namespace!');
}}}},"default":function(){}}),__ca:qx.core.Variant.select(G,{"on":function(bB){var bD=bB.superclass;

while(bD){if(bD.$$classtype!==y){break;
}var bC=bD.$$implements;

if(bC){for(var i=0;i<bC.length;i++){qx.Interface.assert(bB,bC[i],true);
}}bD=bD.superclass;
}},"default":function(){}}),__cb:function(name,cf,cg,ch,ci,cj,ck){var cn;

if(!cg&&qx.core.Variant.isSet(C,N)){cn=ch||{};
qx.Bootstrap.setDisplayNames(cn,name);
}else{var cn={};

if(cg){if(!ci){ci=this.__ck();
}
if(this.__cm(cg,ck)){cn=this.__cn(ci,name,cf);
}else{cn=ci;
}if(cf===x){cn.getInstance=this.getInstance;
}qx.Bootstrap.setDisplayName(ci,name,bh);
}if(ch){qx.Bootstrap.setDisplayNames(ch,name);
var co;

for(var i=0,a=qx.Bootstrap.getKeys(ch),l=a.length;i<l;i++){co=a[i];
var cl=ch[co];

if(qx.core.Variant.isSet(C,F)){if(cl instanceof Function){cl=qx.core.Aspect.wrap(name+D+co,cl,B);
}cn[co]=cl;
}else{cn[co]=cl;
}}}}var cm=qx.Bootstrap.createNamespace(name,cn);
cn.name=cn.classname=name;
cn.basename=cm;
cn.$$type=H;

if(cf){cn.$$classtype=cf;
}if(!cn.hasOwnProperty(M)){cn.toString=this.genericToString;
}
if(cg){qx.Bootstrap.extendClass(cn,ci,cg,name,cm);
if(cj){if(qx.core.Variant.isSet(C,F)){cj=qx.core.Aspect.wrap(name,cj,T);
}cn.$$destructor=cj;
qx.Bootstrap.setDisplayName(cj,name,W);
}}this.$$registry[name]=cn;
return cn;
},__cc:function(t,u,v){if(qx.core.Variant.isSet(G,F)){if(typeof u!==E||u instanceof Array){throw new Error(t.classname+": the events must be defined as map!");
}
for(var w in u){if(typeof u[w]!==z){throw new Error(t.classname+"/"+w+": the event value needs to be a string with the class name of the event object which will be fired.");
}}if(t.$$events&&v!==true){for(var w in u){if(t.$$events[w]!==undefined&&t.$$events[w]!==u[w]){throw new Error(t.classname+"/"+w+": the event value/type cannot be changed from "+t.$$events[w]+" to "+u[w]);
}}}}
if(t.$$events){for(var w in u){t.$$events[w]=u[w];
}}else{t.$$events=u;
}},__cd:function(o,p,q){var r;

if(q===undefined){q=false;
}var s=o.prototype;

for(var name in p){r=p[name];
if(qx.core.Variant.isSet(G,F)){this.__ce(o,name,r,q);
}r.name=name;
if(!r.refine){if(o.$$properties===undefined){o.$$properties={};
}o.$$properties[name]=r;
}if(r.init!==undefined){o.prototype[be+name]=r.init;
}if(r.event!==undefined){var event={};
event[r.event]=bb;
this.__cc(o,event,q);
}if(r.inheritable){qx.core.Property.$$inheritable[name]=true;

if(!s.$$refreshInheritables){qx.core.Property.attachRefreshInheritables(o);
}}
if(!r.refine){qx.core.Property.attachMethods(o,name,r);
}}},__ce:qx.core.Variant.select(G,{"on":function(cP,name,cQ,cR){var cT=this.hasProperty(cP,name);

if(cT){var cS=this.getPropertyDefinition(cP,name);

if(cQ.refine&&cS.init===undefined){throw new Error("Could not refine a init value if there was previously no init value defined. Property '"+name+"' of class '"+cP.classname+"'.");
}}
if(!cT&&cQ.refine){throw new Error("Could not refine non-existent property: '"+name+"' of class: '"+cP.classname+"'!");
}
if(cT&&!cR){throw new Error("Class "+cP.classname+" already has a property: "+name+"!");
}
if(cT&&cR){if(!cQ.refine){throw new Error('Could not refine property "'+name+'" without a "refine" flag in the property definition! This class: '+cP.classname+', original class: '+this.getByProperty(cP,name).classname+'.');
}
for(var cU in cQ){if(cU!==bc&&cU!==ba){throw new Error("Class "+cP.classname+" could not refine property: "+name+"! Key: "+cU+" could not be refined!");
}}}var cV=cQ.group?qx.core.Property.$$allowedGroupKeys:qx.core.Property.$$allowedKeys;

for(var cU in cQ){if(cV[cU]===undefined){throw new Error('The configuration key "'+cU+'" of property "'+name+'" in class "'+cP.classname+'" is not allowed!');
}
if(cQ[cU]===undefined){throw new Error('Invalid key "'+cU+'" of property "'+name+'" in class "'+cP.classname+'"! The value is undefined: '+cQ[cU]);
}
if(cV[cU]!==null&&typeof cQ[cU]!==cV[cU]){throw new Error('Invalid type of key "'+cU+'" of property "'+name+'" in class "'+cP.classname+'"! The type of the key must be "'+cV[cU]+'"!');
}}
if(cQ.transform!=null){if(!(typeof cQ.transform==z)){throw new Error('Invalid transform definition of property "'+name+'" in class "'+cP.classname+'"! Needs to be a String.');
}}
if(cQ.check!=null){if(!qx.Bootstrap.isString(cQ.check)&&!qx.Bootstrap.isArray(cQ.check)&&!qx.Bootstrap.isFunction(cQ.check)){throw new Error('Invalid check definition of property "'+name+'" in class "'+cP.classname+'"! Needs to be a String, Array or Function.');
}}},"default":null}),__cf:function(bK,bL,bM,bN,bO){var bP=bK.prototype;
var bR,bQ;
qx.Bootstrap.setDisplayNames(bL,bK.classname+bf);

for(var i=0,a=qx.Bootstrap.getKeys(bL),l=a.length;i<l;i++){bR=a[i];
bQ=bL[bR];

if(qx.core.Variant.isSet(G,F)){if(bP[bR]!==undefined&&bR.charAt(0)==bg&&bR.charAt(1)==bg){throw new Error('Overwriting private member "'+bR+'" of Class "'+bK.classname+'" is not allowed!');
}
if(bM!==true&&bP.hasOwnProperty(bR)){throw new Error('Overwriting member "'+bR+'" of Class "'+bK.classname+'" is not allowed!');
}}if(bN!==false&&bQ instanceof Function&&bQ.$$type==null){if(bO==true){bQ=this.__cg(bQ,bP[bR]);
}else{if(bP[bR]){bQ.base=bP[bR];
}bQ.self=bK;
}
if(qx.core.Variant.isSet(C,F)){bQ=qx.core.Aspect.wrap(bK.classname+D+bR,bQ,V);
}}bP[bR]=bQ;
}},__cg:function(bS,bT){if(bT){return function(){var n=bS.base;
bS.base=bT;
var m=bS.apply(this,arguments);
bS.base=n;
return m;
};
}else{return bS;
}},__ch:function(h,j){if(qx.core.Variant.isSet(G,F)){if(!h||!j){throw new Error("Incomplete parameters!");
}if(this.hasOwnInterface(h,j)){throw new Error('Interface "'+j.name+'" is already used by Class "'+h.classname+'!');
}if(h.$$classtype!==y){qx.Interface.assert(h,j,true);
}}var k=qx.Interface.flatten([j]);

if(h.$$implements){h.$$implements.push(j);
h.$$flatImplements.push.apply(h.$$flatImplements,k);
}else{h.$$implements=[j];
h.$$flatImplements=k;
}},__ci:function(bY){var name=bY.classname;
var ca=this.__cn(bY,name,bY.$$classtype);
for(var i=0,a=qx.Bootstrap.getKeys(bY),l=a.length;i<l;i++){cb=a[i];
ca[cb]=bY[cb];
}ca.prototype=bY.prototype;
var cd=bY.prototype;

for(var i=0,a=qx.Bootstrap.getKeys(cd),l=a.length;i<l;i++){cb=a[i];
var ce=cd[cb];
if(ce&&ce.self==bY){ce.self=ca;
}}for(var cb in this.$$registry){var cc=this.$$registry[cb];

if(!cc){continue;
}
if(cc.base==bY){cc.base=ca;
}
if(cc.superclass==bY){cc.superclass=ca;
}
if(cc.$$original){if(cc.$$original.base==bY){cc.$$original.base=ca;
}
if(cc.$$original.superclass==bY){cc.$$original.superclass=ca;
}}}qx.Bootstrap.createNamespace(name,ca);
this.$$registry[name]=ca;
return ca;
},__cj:function(cJ,cK,cL){if(qx.core.Variant.isSet(G,F)){if(!cJ||!cK){throw new Error("Incomplete parameters!");
}}
if(this.hasMixin(cJ,cK)){return;
}var cO=cJ.$$original;

if(cK.$$constructor&&!cO){cJ=this.__ci(cJ);
}var cN=qx.Mixin.flatten([cK]);
var cM;

for(var i=0,l=cN.length;i<l;i++){cM=cN[i];
if(cM.$$events){this.__cc(cJ,cM.$$events,cL);
}if(cM.$$properties){this.__cd(cJ,cM.$$properties,cL);
}if(cM.$$members){this.__cf(cJ,cM.$$members,cL,cL,cL);
}}if(cJ.$$includes){cJ.$$includes.push(cK);
cJ.$$flatIncludes.push.apply(cJ.$$flatIncludes,cN);
}else{cJ.$$includes=[cK];
cJ.$$flatIncludes=cN;
}},__ck:function(){function ct(){ct.base.apply(this,arguments);
}return ct;
},__cl:function(){return function(){};
},__cm:function(cD,cE){if(qx.core.Variant.isSet(G,F)){return true;
}if(cD&&cD.$$includes){var cF=cD.$$flatIncludes;

for(var i=0,l=cF.length;i<l;i++){if(cF[i].$$constructor){return true;
}}}if(cE){var cG=qx.Mixin.flatten(cE);

for(var i=0,l=cG.length;i<l;i++){if(cG[i].$$constructor){return true;
}}}return false;
},__cn:function(cp,name,cq){var cs=function(){var bm=cs;

if(qx.core.Variant.isSet(G,F)){if(!(this instanceof bm)){throw new Error("Please initialize '"+name+"' objects using the new keyword!");
}if(cq===y){if(this.classname===name){throw new Error("The class ',"+name+"' is abstract! It is not possible to instantiate it.");
}}else if(cq===x){if(!bm.$$allowconstruct){throw new Error("The class '"+name+"' is a singleton! It is not possible to instantiate it directly. Use the static getInstance() method instead.");
}}}var bl=bm.$$original.apply(this,arguments);
if(bm.$$includes){var bk=bm.$$flatIncludes;

for(var i=0,l=bk.length;i<l;i++){if(bk[i].$$constructor){bk[i].$$constructor.apply(this,arguments);
}}}
if(qx.core.Variant.isSet(G,F)){if(this.classname===name){this.$$initialized=true;
}}return bl;
};

if(qx.core.Variant.isSet(C,F)){var cr=qx.core.Aspect.wrap(name,cs,bh);
cs.$$original=cp;
cs.constructor=cr;
cs=cr;
}cs.$$original=cp;
cp.wrapper=cs;
return cs;
}},defer:function(){if(qx.core.Variant.isSet(C,F)){for(var bw in qx.Bootstrap.$$registry){var bx=qx.Bootstrap.$$registry[bw];

for(var by in bx){if(bx[by] instanceof Function){bx[by]=qx.core.Aspect.wrap(bw+D+by,bx[by],B);
}}}}}});
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
(function(){var v="qx.debug",u="on",t="|bubble",s="|capture",r="|",q="': ",p="'",o="",n="_",m="Invalid Target.",U="Invalid event type.",T="Invalid event target.",S=" from the target '",R="Invalid callback function",Q="unload",P="Failed to remove event listener for id '",O="Invalid context for callback.",N="Invalid capture flag.",M="Failed to add event listener for type '",L="UNKNOWN_",C="__fi",D="capture",A="__fh",B="qx.event.Manager",y="Could not dispatch event '",z="DOM_",w="QX_",x=" to the target '",E="Failed to remove event listener for type '",F="Invalid capture falg.",H="c",G="Invalid id type.",J="' on target '",I="WIN_",K="Invalid event object.";
qx.Class.define(B,{extend:Object,construct:function(ca,cb){this.__fd=ca;
this.__fe=qx.core.ObjectRegistry.toHashCode(ca);
this.__ff=cb;
if(ca.qx!==qx){var self=this;
qx.bom.Event.addNativeListener(ca,Q,qx.event.GlobalError.observeMethod(function(){qx.bom.Event.removeNativeListener(ca,Q,arguments.callee);
self.dispose();
}));
}this.__fg={};
this.__fh={};
this.__fi={};
this.__fj={};
},statics:{__fk:0,getNextUniqueId:function(){return (this.__fk++)+o;
}},members:{__ff:null,__fg:null,__fi:null,__fl:null,__fh:null,__fj:null,__fd:null,__fe:null,getWindow:function(){return this.__fd;
},getWindowId:function(){return this.__fe;
},getHandler:function(a){var b=this.__fh[a.classname];

if(b){return b;
}return this.__fh[a.classname]=new a(this);
},getDispatcher:function(bB){var bC=this.__fi[bB.classname];

if(bC){return bC;
}return this.__fi[bB.classname]=new bB(this,this.__ff);
},getListeners:function(c,d,e){var f=c.$$hash||qx.core.ObjectRegistry.toHashCode(c);
var h=this.__fg[f];

if(!h){return null;
}var j=d+(e?s:t);
var g=h[j];
return g?g.concat():null;
},serializeListeners:function(V){var bd=V.$$hash||qx.core.ObjectRegistry.toHashCode(V);
var bf=this.__fg[bd];
var bb=[];

if(bf){var Y,be,W,ba,bc;

for(var X in bf){Y=X.indexOf(r);
be=X.substring(0,Y);
W=X.charAt(Y+1)==H;
ba=bf[X];

for(var i=0,l=ba.length;i<l;i++){bc=ba[i];
bb.push({self:bc.context,handler:bc.handler,type:be,capture:W});
}}}return bb;
},toggleAttachedEvents:function(co,cp){var cu=co.$$hash||qx.core.ObjectRegistry.toHashCode(co);
var cw=this.__fg[cu];

if(cw){var cr,cv,cq,cs;

for(var ct in cw){cr=ct.indexOf(r);
cv=ct.substring(0,cr);
cq=ct.charCodeAt(cr+1)===99;
cs=cw[ct];

if(cp){this.__fm(co,cv,cq);
}else{this.__fn(co,cv,cq);
}}}},hasListener:function(bH,bI,bJ){if(qx.core.Variant.isSet(v,u)){if(bH==null){qx.log.Logger.trace(this);
throw new Error("Invalid object: "+bH);
}}var bK=bH.$$hash||qx.core.ObjectRegistry.toHashCode(bH);
var bM=this.__fg[bK];

if(!bM){return false;
}var bN=bI+(bJ?s:t);
var bL=bM[bN];
return bL&&bL.length>0;
},importListeners:function(cR,cS){if(qx.core.Variant.isSet(v,u)){if(cR==null){qx.log.Logger.trace(this);
throw new Error("Invalid object: "+cR);
}}var cY=cR.$$hash||qx.core.ObjectRegistry.toHashCode(cR);
var da=this.__fg[cY]={};
var cV=qx.event.Manager;

for(var cT in cS){var cW=cS[cT];
var cX=cW.type+(cW.capture?s:t);
var cU=da[cX];

if(!cU){cU=da[cX]=[];
this.__fm(cR,cW.type,cW.capture);
}cU.push({handler:cW.listener,context:cW.self,unique:cW.unique||(cV.__fk++)+o});
}},addListener:function(bO,bP,bQ,self,bR){if(qx.core.Variant.isSet(v,u)){var bV=M+bP+p+x+bO.classname+q;
qx.core.Assert.assertObject(bO,bV+m);
qx.core.Assert.assertString(bP,bV+U);
qx.core.Assert.assertFunction(bQ,bV+R);

if(bR!==undefined){qx.core.Assert.assertBoolean(bR,N);
}}var bW=bO.$$hash||qx.core.ObjectRegistry.toHashCode(bO);
var bY=this.__fg[bW];

if(!bY){bY=this.__fg[bW]={};
}var bU=bP+(bR?s:t);
var bT=bY[bU];

if(!bT){bT=bY[bU]=[];
}if(bT.length===0){this.__fm(bO,bP,bR);
}var bX=(qx.event.Manager.__fk++)+o;
var bS={handler:bQ,context:self,unique:bX};
bT.push(bS);
return bU+r+bX;
},findHandler:function(cE,cF){var cP=false,cI=false,cQ=false;
var cO;

if(cE.nodeType===1){cP=true;
cO=z+cE.tagName.toLowerCase()+n+cF;
}else if(cE==this.__fd){cI=true;
cO=I+cF;
}else if(cE.classname){cQ=true;
cO=w+cE.classname+n+cF;
}else{cO=L+cE+n+cF;
}var cK=this.__fj;

if(cK[cO]){return cK[cO];
}var cN=this.__ff.getHandlers();
var cJ=qx.event.IEventHandler;
var cL,cM,cH,cG;

for(var i=0,l=cN.length;i<l;i++){cL=cN[i];
cH=cL.SUPPORTED_TYPES;

if(cH&&!cH[cF]){continue;
}cG=cL.TARGET_CHECK;

if(cG){if(!cP&&cG===cJ.TARGET_DOMNODE){continue;
}else if(!cI&&cG===cJ.TARGET_WINDOW){continue;
}else if(!cQ&&cG===cJ.TARGET_OBJECT){continue;
}}cM=this.getHandler(cN[i]);

if(cL.IGNORE_CAN_HANDLE||cM.canHandleEvent(cE,cF)){cK[cO]=cM;
return cM;
}}return null;
},__fm:function(bD,bE,bF){var bG=this.findHandler(bD,bE);

if(bG){bG.registerEvent(bD,bE,bF);
return;
}
if(qx.core.Variant.isSet(v,u)){qx.log.Logger.warn(this,"There is no event handler for the event '"+bE+"' on target '"+bD+"'!");
}},removeListener:function(br,bs,bt,self,bu){if(qx.core.Variant.isSet(v,u)){var by=E+bs+p+S+br.classname+q;
qx.core.Assert.assertObject(br,by+m);
qx.core.Assert.assertString(bs,by+U);
qx.core.Assert.assertFunction(bt,by+R);

if(self!==undefined){qx.core.Assert.assertObject(self,O);
}
if(bu!==undefined){qx.core.Assert.assertBoolean(bu,F);
}}var bz=br.$$hash||qx.core.ObjectRegistry.toHashCode(br);
var bA=this.__fg[bz];

if(!bA){return false;
}var bv=bs+(bu?s:t);
var bw=bA[bv];

if(!bw){return false;
}var bx;

for(var i=0,l=bw.length;i<l;i++){bx=bw[i];

if(bx.handler===bt&&bx.context===self){qx.lang.Array.removeAt(bw,i);

if(bw.length==0){this.__fn(br,bs,bu);
}return true;
}}return false;
},removeListenerById:function(cc,cd){if(qx.core.Variant.isSet(v,u)){var cj=P+cd+p+S+cc.classname+q;
qx.core.Assert.assertObject(cc,cj+m);
qx.core.Assert.assertString(cd,cj+G);
}var ch=cd.split(r);
var cm=ch[0];
var ce=ch[1].charCodeAt(0)==99;
var cl=ch[2];
var ck=cc.$$hash||qx.core.ObjectRegistry.toHashCode(cc);
var cn=this.__fg[ck];

if(!cn){return false;
}var ci=cm+(ce?s:t);
var cg=cn[ci];

if(!cg){return false;
}var cf;

for(var i=0,l=cg.length;i<l;i++){cf=cg[i];

if(cf.unique===cl){qx.lang.Array.removeAt(cg,i);

if(cg.length==0){this.__fn(cc,cm,ce);
}return true;
}}return false;
},removeAllListeners:function(bg){var bk=bg.$$hash||qx.core.ObjectRegistry.toHashCode(bg);
var bm=this.__fg[bk];

if(!bm){return false;
}var bi,bl,bh;

for(var bj in bm){if(bm[bj].length>0){bi=bj.split(r);
bl=bi[0];
bh=bi[1]===D;
this.__fn(bg,bl,bh);
}}delete this.__fg[bk];
return true;
},deleteAllListeners:function(k){delete this.__fg[k];
},__fn:function(bn,bo,bp){var bq=this.findHandler(bn,bo);

if(bq){bq.unregisterEvent(bn,bo,bp);
return;
}
if(qx.core.Variant.isSet(v,u)){qx.log.Logger.warn(this,"There is no event handler for the event '"+bo+"' on target '"+bn+"'!");
}},dispatchEvent:function(cx,event){if(qx.core.Variant.isSet(v,u)){var cC=y+event+J+cx.classname+q;
qx.core.Assert.assertNotUndefined(cx,cC+T);
qx.core.Assert.assertNotNull(cx,cC+T);
qx.core.Assert.assertInstance(event,qx.event.type.Event,cC+K);
}var cD=event.getType();

if(!event.getBubbles()&&!this.hasListener(cx,cD)){qx.event.Pool.getInstance().poolObject(event);
return true;
}
if(!event.getTarget()){event.setTarget(cx);
}var cB=this.__ff.getDispatchers();
var cA;
var cz=false;

for(var i=0,l=cB.length;i<l;i++){cA=this.getDispatcher(cB[i]);
if(cA.canDispatchEvent(cx,event,cD)){cA.dispatchEvent(cx,event,cD);
cz=true;
break;
}}
if(!cz){if(qx.core.Variant.isSet(v,u)){qx.log.Logger.error(this,"No dispatcher can handle event of type "+cD+" on "+cx);
}return true;
}var cy=event.getDefaultPrevented();
qx.event.Pool.getInstance().poolObject(event);
return !cy;
},dispose:function(){this.__ff.removeManager(this);
qx.util.DisposeUtil.disposeMap(this,A);
qx.util.DisposeUtil.disposeMap(this,C);
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
(function(){var ba="qx.debug",Y="on",X="The second parameter must be an array.",W="mshtml",V="The first parameter must be an array.",U="Parameter must be an array.",T="qx.client",S="[object Array]",R="qx.lang.Array",Q="qx",O="number",P="string";
qx.Class.define(R,{statics:{toArray:function(a,b){return this.cast(a,Array,b);
},cast:function(h,j,k){if(h.constructor===j){return h;
}
if(qx.Class.hasInterface(h,qx.data.IListData)){var h=h.toArray();
}var m=new j;
if(qx.core.Variant.isSet(T,W)){if(h.item){for(var i=k||0,l=h.length;i<l;i++){m.push(h[i]);
}return m;
}}if(Object.prototype.toString.call(h)===S&&k==null){m.push.apply(m,h);
}else{m.push.apply(m,Array.prototype.slice.call(h,k||0));
}return m;
},fromArguments:function(q,r){return Array.prototype.slice.call(q,r||0);
},fromCollection:function(C){if(qx.core.Variant.isSet(T,W)){if(C.item){var D=[];

for(var i=0,l=C.length;i<l;i++){D[i]=C[i];
}return D;
}}return Array.prototype.slice.call(C,0);
},fromShortHand:function(n){var p=n.length;
var o=qx.lang.Array.clone(n);
switch(p){case 1:o[1]=o[2]=o[3]=o[0];
break;
case 2:o[2]=o[0];
case 3:o[3]=o[1];
}return o;
},clone:function(d){return d.concat();
},insertAt:function(w,x,i){w.splice(i,0,x);
return w;
},insertBefore:function(be,bf,bg){var i=be.indexOf(bg);

if(i==-1){be.push(bf);
}else{be.splice(i,0,bf);
}return be;
},insertAfter:function(e,f,g){var i=e.indexOf(g);

if(i==-1||i==(e.length-1)){e.push(f);
}else{e.splice(i+1,0,f);
}return e;
},removeAt:function(c,i){return c.splice(i,1)[0];
},removeAll:function(I){I.length=0;
return this;
},append:function(y,z){if(qx.core.Variant.isSet(ba,Y)){qx.core.Assert&&qx.core.Assert.assertArray(y,V);
qx.core.Assert&&qx.core.Assert.assertArray(z,X);
}Array.prototype.push.apply(y,z);
return y;
},exclude:function(E,F){if(qx.core.Variant.isSet(ba,Y)){qx.core.Assert&&qx.core.Assert.assertArray(E,V);
qx.core.Assert&&qx.core.Assert.assertArray(F,X);
}
for(var i=0,H=F.length,G;i<H;i++){G=E.indexOf(F[i]);

if(G!=-1){E.splice(G,1);
}}return E;
},remove:function(bh,bi){var i=bh.indexOf(bi);

if(i!=-1){bh.splice(i,1);
return bi;
}},contains:function(M,N){return M.indexOf(N)!==-1;
},equals:function(s,t){var length=s.length;

if(length!==t.length){return false;
}
for(var i=0;i<length;i++){if(s[i]!==t[i]){return false;
}}return true;
},sum:function(A){var B=0;

for(var i=0,l=A.length;i<l;i++){B+=A[i];
}return B;
},max:function(bb){if(qx.core.Variant.isSet(ba,Y)){qx.core.Assert&&qx.core.Assert.assertArray(bb,U);
}var i,bd=bb.length,bc=bb[0];

for(i=1;i<bd;i++){if(bb[i]>bc){bc=bb[i];
}}return bc===undefined?null:bc;
},min:function(J){if(qx.core.Variant.isSet(ba,Y)){qx.core.Assert&&qx.core.Assert.assertArray(J,U);
}var i,L=J.length,K=J[0];

for(i=1;i<L;i++){if(J[i]<K){K=J[i];
}}return K===undefined?null:K;
},unique:function(bj){var bt=[],bl={},bo={},bq={};
var bp,bk=0;
var bu=Q+qx.lang.Date.now();
var bm=false,bs=false,bv=false;
for(var i=0,br=bj.length;i<br;i++){bp=bj[i];
if(bp===null){if(!bm){bm=true;
bt.push(bp);
}}else if(bp===undefined){}else if(bp===false){if(!bs){bs=true;
bt.push(bp);
}}else if(bp===true){if(!bv){bv=true;
bt.push(bp);
}}else if(typeof bp===P){if(!bl[bp]){bl[bp]=1;
bt.push(bp);
}}else if(typeof bp===O){if(!bo[bp]){bo[bp]=1;
bt.push(bp);
}}else{bn=bp[bu];

if(bn==null){bn=bp[bu]=bk++;
}
if(!bq[bn]){bq[bn]=bp;
bt.push(bp);
}}}for(var bn in bq){try{delete bq[bn][bu];
}catch(u){try{bq[bn][bu]=null;
}catch(v){throw new Error("Cannot clean-up map entry doneObjects["+bn+"]["+bu+"]");
}}}return bt;
}}});
})();
(function(){var H="()",G="qx.debug",F=".",E=".prototype.",D="on",C="Invalid parameter 'func'.",B='anonymous()',A="Trying to call a bound function with a disposed object as context: ",z=" :: ",y="qx.lang.Function",x=".constructor()";
qx.Class.define(y,{statics:{getCaller:function(L){return L.caller?L.caller.callee:L.callee.caller;
},getName:function(o){if(o.displayName){return o.displayName;
}
if(o.$$original||o.wrapper||o.classname){return o.classname+x;
}
if(o.$$mixin){for(var q in o.$$mixin.$$members){if(o.$$mixin.$$members[q]==o){return o.$$mixin.name+E+q+H;
}}for(var q in o.$$mixin){if(o.$$mixin[q]==o){return o.$$mixin.name+F+q+H;
}}}
if(o.self){var r=o.self.constructor;

if(r){for(var q in r.prototype){if(r.prototype[q]==o){return r.classname+E+q+H;
}}for(var q in r){if(r[q]==o){return r.classname+F+q+H;
}}}}var p=o.toString().match(/function\s*(\w*)\s*\(.*/);

if(p&&p.length>=1&&p[1]){return p[1]+H;
}return B;
},globalEval:function(c){if(window.execScript){return window.execScript(c);
}else{return eval.call(window,c);
}},empty:function(){},returnTrue:function(){return true;
},returnFalse:function(){return false;
},returnNull:function(){return null;
},returnThis:function(){return this;
},returnZero:function(){return 0;
},create:function(a,b){if(qx.core.Variant.isSet(G,D)){qx.core.Assert&&qx.core.Assert.assertFunction(a,C);
}if(!b){return a;
}if(!(b.self||b.args||b.delay!=null||b.periodical!=null||b.attempt)){return a;
}return function(event){if(qx.core.Variant.isSet(G,D)){if(b.self instanceof qx.core.Object){qx.core.Assert&&qx.core.Assert.assertFalse(b.self.isDisposed(),A+b.self.toString()+z+qx.lang.Function.getName(a));
}}var t=qx.lang.Array.fromArguments(arguments);
if(b.args){t=b.args.concat(t);
}
if(b.delay||b.periodical){var s=qx.event.GlobalError.observeMethod(function(){return a.apply(b.self||this,t);
});

if(b.delay){return window.setTimeout(s,b.delay);
}
if(b.periodical){return window.setInterval(s,b.periodical);
}}else if(b.attempt){var u=false;

try{u=a.apply(b.self||this,t);
}catch(l){}return u;
}else{return a.apply(b.self||this,t);
}};
},bind:function(m,self,n){return this.create(m,{self:self,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null});
},curry:function(v,w){return this.create(v,{args:arguments.length>1?qx.lang.Array.fromArguments(arguments,1):null});
},listener:function(f,self,g){if(arguments.length<3){return function(event){return f.call(self||this,event||window.event);
};
}else{var h=qx.lang.Array.fromArguments(arguments,2);
return function(event){var M=[event||window.event];
M.push.apply(M,h);
f.apply(self||this,M);
};
}},attempt:function(d,self,e){return this.create(d,{self:self,attempt:true,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null})();
},delay:function(i,j,self,k){return this.create(i,{delay:j,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
},periodical:function(I,J,self,K){return this.create(I,{periodical:J,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
}}});
})();
(function(){var p="qx.debug",o="on",n="Invalid event target.",m="Invalid event dispatcher!",l="': ",k="Invalid event handler.",j="' on target '",i="Could not fire event '",h="undefined",g="qx.event.Registration";
qx.Class.define(g,{statics:{__eR:{},getManager:function(s){if(s==null){if(qx.core.Variant.isSet(p,o)){qx.log.Logger.error("qx.event.Registration.getManager(null) was called!");
qx.log.Logger.trace(this);
}s=window;
}else if(s.nodeType){s=qx.dom.Node.getWindow(s);
}else if(!qx.dom.Node.isWindow(s)){s=window;
}var u=s.$$hash||qx.core.ObjectRegistry.toHashCode(s);
var t=this.__eR[u];

if(!t){t=new qx.event.Manager(s,this);
this.__eR[u]=t;
}return t;
},removeManager:function(bb){var bc=bb.getWindowId();
delete this.__eR[bc];
},addListener:function(V,W,X,self,Y){return this.getManager(V).addListener(V,W,X,self,Y);
},removeListener:function(R,S,T,self,U){return this.getManager(R).removeListener(R,S,T,self,U);
},removeListenerById:function(B,C){return this.getManager(B).removeListenerById(B,C);
},removeAllListeners:function(J){return this.getManager(J).removeAllListeners(J);
},deleteAllListeners:function(q){var r=q.$$hash;

if(r){this.getManager(q).deleteAllListeners(r);
}},hasListener:function(O,P,Q){return this.getManager(O).hasListener(O,P,Q);
},serializeListeners:function(K){return this.getManager(K).serializeListeners(K);
},createEvent:function(c,d,e){if(qx.core.Variant.isSet(p,o)){if(arguments.length>1&&d===undefined){throw new Error("Create event of type "+c+" with undefined class. Please use null to explicit fallback to default event type!");
}}if(d==null){d=qx.event.type.Event;
}var f=qx.event.Pool.getInstance().getObject(d);
e?f.init.apply(f,e):f.init();
if(c){f.setType(c);
}return f;
},dispatchEvent:function(L,event){return this.getManager(L).dispatchEvent(L,event);
},fireEvent:function(v,w,x,y){if(qx.core.Variant.isSet(p,o)){if(arguments.length>2&&x===undefined&&y!==undefined){throw new Error("Create event of type "+w+" with undefined class. Please use null to explicit fallback to default event type!");
}var z=i+w+j+(v?v.classname:h)+l;
qx.core.Assert.assertNotUndefined(v,z+n);
qx.core.Assert.assertNotNull(v,z+n);
}var A=this.createEvent(w,x||null,y);
return this.getManager(v).dispatchEvent(v,A);
},fireNonBubblingEvent:function(D,E,F,G){if(qx.core.Variant.isSet(p,o)){if(arguments.length>2&&F===undefined&&G!==undefined){throw new Error("Create event of type "+E+" with undefined class. Please use null to explicit fallback to default event type!");
}}var H=this.getManager(D);

if(!H.hasListener(D,E,false)){return true;
}var I=this.createEvent(E,F||null,G);
return H.dispatchEvent(D,I);
},PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__eS:[],addHandler:function(ba){if(qx.core.Variant.isSet(p,o)){qx.core.Assert.assertInterface(ba,qx.event.IEventHandler,k);
}this.__eS.push(ba);
this.__eS.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getHandlers:function(){return this.__eS;
},__eT:[],addDispatcher:function(M,N){if(qx.core.Variant.isSet(p,o)){qx.core.Assert.assertInterface(M,qx.event.IEventDispatcher,m);
}this.__eT.push(M);
this.__eT.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getDispatchers:function(){return this.__eT;
}}});
})();
(function(){var k="on",j="qx.debug",h="$$hash",g="",f="qx.core.ObjectRegistry";
qx.Class.define(f,{statics:{inShutDown:false,__hH:{},__hI:0,__hJ:[],register:function(w){var z=this.__hH;

if(!z){return;
}var y=w.$$hash;

if(y==null){var x=this.__hJ;

if(x.length>0){y=x.pop();
}else{y=(this.__hI++)+g;
}w.$$hash=y;
}
if(qx.core.Variant.isSet(j,k)){if(!w.dispose){throw new Error("Invalid object: "+w);
}}z[y]=w;
},unregister:function(n){var o=n.$$hash;

if(o==null){return;
}var p=this.__hH;

if(p&&p[o]){delete p[o];
this.__hJ.push(o);
}try{delete n.$$hash;
}catch(m){if(n.removeAttribute){n.removeAttribute(h);
}}},toHashCode:function(c){if(qx.core.Variant.isSet(j,k)){if(c==null){throw new Error("Invalid object: "+c);
}}var e=c.$$hash;

if(e!=null){return e;
}var d=this.__hJ;

if(d.length>0){e=d.pop();
}else{e=(this.__hI++)+g;
}return c.$$hash=e;
},clearHashCode:function(B){if(qx.core.Variant.isSet(j,k)){if(B==null){throw new Error("Invalid object: "+B);
}}var C=B.$$hash;

if(C!=null){this.__hJ.push(C);
try{delete B.$$hash;
}catch(r){if(B.removeAttribute){B.removeAttribute(h);
}}}},fromHashCode:function(q){return this.__hH[q]||null;
},shutdown:function(){this.inShutDown=true;
var t=this.__hH;
var v=[];

for(var u in t){v.push(u);
}v.sort(function(a,b){return parseInt(b)-parseInt(a);
});
var s,i=0,l=v.length;

while(true){try{for(;i<l;i++){u=v[i];
s=t[u];

if(s&&s.dispose){s.dispose();
}}}catch(A){qx.Bootstrap.error(this,"Could not dispose object "+s.toString()+": "+A);

if(i!==l){i++;
continue;
}}break;
}qx.Bootstrap.debug(this,"Disposed "+l+" objects");
delete this.__hH;
},getRegistry:function(){return this.__hH;
}}});
})();
(function(){var f="qx.lang.Type",e="Error",d="RegExp",c="Date",b="Number",a="Boolean";
qx.Class.define(f,{statics:{getClass:qx.Bootstrap.getClass,isString:qx.Bootstrap.isString,isArray:qx.Bootstrap.isArray,isObject:qx.Bootstrap.isObject,isFunction:qx.Bootstrap.isFunction,isRegExp:function(k){return this.getClass(k)==d;
},isNumber:function(h){return (h!==null&&(this.getClass(h)==b||h instanceof Number));
},isBoolean:function(i){return (i!==null&&(this.getClass(i)==a||i instanceof Boolean));
},isDate:function(g){return (g!==null&&(this.getClass(g)==c||g instanceof Date));
},isError:function(j){return (j!==null&&(this.getClass(j)==e||j instanceof Error));
}}});
})();
(function(){var bY="",bX="!",bW="'!",bV="'",bU="Expected '",bT="' (rgb(",bS=",",bR=")), but found value '",bQ="Event (",bP="Expected value to be the CSS color '",dg="' but found ",df="The value '",de=" != ",dd="qx.core.Object",dc="Expected value to be an array but found ",db=") was fired.",da="Expected value to be an integer >= 0 but found ",cY="' to be not equal with '",cX="' to '",cW="qx.ui.core.Widget",cg="Called assertTrue with '",ch="Expected value to be a map but found ",ce="The function did not raise an exception!",cf="Expected value to be undefined but found ",cc="Expected value to be a DOM element but found  '",cd="Expected value to be a regular expression but found ",ca="' to implement the interface '",cb="Expected value to be null but found ",co="Invalid argument 'type'",cp="Called assert with 'false'",cB="Assertion error! ",cx="Expected value to be a string but found ",cJ="null",cE="' but found '",cS="' must must be a key of the map '",cO="The String '",ct="Expected value not to be undefined but found ",cV="qx.util.ColorUtil",cU=": ",cT="The raised exception does not have the expected type! ",cs=") not fired.",cv="qx.core.Assert",cw="Expected value to be typeof object but found ",cz="' (identical) but found '",cC="' must have any of the values defined in the array '",cF="Expected value to be a number but found ",cL="Called assertFalse with '",cQ="]",ci="Expected value to be a qooxdoo object but found ",cj="' arguments.",cu="Expected value not to be null but found ",cI="Array[",cH="' does not match the regular expression '",cG="' to be not identical with '",cN="' arguments but found '",cM="', which cannot be converted to a CSS color!",cD="Expected object '",cK="qx.core.AssertionError",bM="Expected value to be a boolean but found ",cP="))!",ck="Expected value to be a qooxdoo widget but found ",cl="Expected value '%1' to be in the range '%2'..'%3'!",cy="Expected value to be typeof '",bN="Expected value to be typeof function but found ",bO="Expected value to be an integer but found ",cr="Called fail().",cm="The parameter 're' must be a string or a regular expression.",cn="Expected value to be a number >= 0 but found ",cq="Expected value to be instanceof '",cA="Wrong number of arguments given. Expected '",cR="object";
qx.Class.define(cv,{statics:{__sD:true,__sE:function(dw,dx){var dy=bY;

for(var i=1,l=arguments.length;i<l;i++){dy=dy+this.__sF(arguments[i]);
}var dA=cB+dw+cU+dy;

if(this.__sD){qx.Bootstrap.error(dA);
}
if(qx.Class.isDefined(cK)){var dz=new qx.core.AssertionError(dw,dy);

if(this.__sD){qx.Bootstrap.error("Stack trace: \n"+dz.getStackTrace());
}throw dz;
}else{throw new Error(dA);
}},__sF:function(bc){var bd;

if(bc===null){bd=cJ;
}else if(qx.lang.Type.isArray(bc)&&bc.length>10){bd=cI+bc.length+cQ;
}else if((bc instanceof Object)&&(bc.toString==null)){bd=qx.lang.Json.stringify(bc,null,2);
}else{try{bd=bc.toString();
}catch(e){bd=bY;
}}return bd;
},assert:function(dj,dk){dj==true||this.__sE(dk||bY,cp);
},fail:function(F){this.__sE(F||bY,cr);
},assertTrue:function(dD,dE){(dD===true)||this.__sE(dE||bY,cg,dD,bV);
},assertFalse:function(dB,dC){(dB===false)||this.__sE(dC||bY,cL,dB,bV);
},assertEquals:function(t,u,v){t==u||this.__sE(v||bY,bU,t,cE,u,bW);
},assertNotEquals:function(bJ,bK,bL){bJ!=bK||this.__sE(bL||bY,bU,bJ,cY,bK,bW);
},assertIdentical:function(C,D,E){C===D||this.__sE(E||bY,bU,C,cz,D,bW);
},assertNotIdentical:function(bG,bH,bI){bG!==bH||this.__sE(bI||bY,bU,bG,cG,bH,bW);
},assertNotUndefined:function(dO,dP){dO!==undefined||this.__sE(dP||bY,ct,dO,bX);
},assertUndefined:function(bE,bF){bE===undefined||this.__sE(bF||bY,cf,bE,bX);
},assertNotNull:function(bC,bD){bC!==null||this.__sE(bD||bY,cu,bC,bX);
},assertNull:function(J,K){J===null||this.__sE(K||bY,cb,J,bX);
},assertJsonEquals:function(O,P,Q){this.assertEquals(qx.lang.Json.stringify(O),qx.lang.Json.stringify(P),Q);
},assertMatch:function(p,q,r){this.assertString(p);
this.assert(qx.lang.Type.isRegExp(q)||qx.lang.Type.isString(q),cm);
p.search(q)>=0||this.__sE(r||bY,cO,p,cH,q.toString(),bW);
},assertArgumentsCount:function(dF,dG,dH,dI){var dJ=dF.length;
(dJ>=dG&&dJ<=dH)||this.__sE(dI||bY,cA,dG,cX,dH,cN,arguments.length,cj);
},assertEventFired:function(d,event,f,g,h){var k=false;
var j=function(e){if(g){g.call(d,e);
}k=true;
};
var m=d.addListener(event,j,d);
f.call();
k===true||this.__sE(h||bY,bQ,event,cs);
d.removeListenerById(m);
},assertEventNotFired:function(dl,event,dm,dn){var dq=false;
var dp=function(e){dq=true;
};
var dr=dl.addListener(event,dp,dl);
dm.call();
dq===false||this.__sE(dn||bY,bQ,event,db);
dl.removeListenerById(dr);
},assertException:function(W,X,Y,ba){var X=X||Error;
var bb;

try{this.__sD=false;
W();
}catch(be){bb=be;
}finally{this.__sD=true;
}
if(bb==null){this.__sE(ba||bY,ce);
}bb instanceof X||this.__sE(ba||bY,cT,X,de,bb);

if(Y){this.assertMatch(bb.toString(),Y,ba);
}},assertInArray:function(R,S,T){S.indexOf(R)!==-1||this.__sE(T||bY,df,R,cC,S,bV);
},assertArrayEquals:function(bs,bt,bu){this.assertArray(bs,bu);
this.assertArray(bt,bu);
this.assertEquals(bs.length,bt.length,bu);

for(var i=0;i<bs.length;i++){this.assertIdentical(bs[i],bt[i],bu);
}},assertKeyInMap:function(a,b,c){b[a]!==undefined||this.__sE(c||bY,df,a,cS,b,bV);
},assertFunction:function(U,V){qx.lang.Type.isFunction(U)||this.__sE(V||bY,bN,U,bX);
},assertString:function(bo,bp){qx.lang.Type.isString(bo)||this.__sE(bp||bY,cx,bo,bX);
},assertBoolean:function(dU,dV){qx.lang.Type.isBoolean(dU)||this.__sE(dV||bY,bM,dU,bX);
},assertNumber:function(n,o){(qx.lang.Type.isNumber(n)&&isFinite(n))||this.__sE(o||bY,cF,n,bX);
},assertPositiveNumber:function(w,x){(qx.lang.Type.isNumber(w)&&isFinite(w)&&w>=0)||this.__sE(x||bY,cn,w,bX);
},assertInteger:function(bq,br){(qx.lang.Type.isNumber(bq)&&isFinite(bq)&&bq%1===0)||this.__sE(br||bY,bO,bq,bX);
},assertPositiveInteger:function(bi,bj){var bk=(qx.lang.Type.isNumber(bi)&&isFinite(bi)&&bi%1===0&&bi>=0);
bk||this.__sE(bj||bY,da,bi,bX);
},assertInRange:function(dQ,dR,dS,dT){(dQ>=dR&&dQ<=dS)||this.__sE(dT||bY,qx.lang.String.format(cl,[dQ,dR,dS]));
},assertObject:function(bl,bm){var bn=bl!==null&&(qx.lang.Type.isObject(bl)||typeof bl===cR);
bn||this.__sE(bm||bY,cw,(bl),bX);
},assertArray:function(ds,dt){qx.lang.Type.isArray(ds)||this.__sE(dt||bY,dc,ds,bX);
},assertMap:function(A,B){qx.lang.Type.isObject(A)||this.__sE(B||bY,ch,A,bX);
},assertRegExp:function(du,dv){qx.lang.Type.isRegExp(du)||this.__sE(dv||bY,cd,du,bX);
},assertType:function(bf,bg,bh){this.assertString(bg,co);
typeof (bf)===bg||this.__sE(bh||bY,cy,bg,dg,bf,bX);
},assertInstance:function(dK,dL,dM){var dN=dL.classname||dL+bY;
dK instanceof dL||this.__sE(dM||bY,cq,dN,dg,dK,bX);
},assertInterface:function(L,M,N){qx.Class.implementsInterface(L,M)||this.__sE(N||bY,cD,L,ca,M,bW);
},assertCssColor:function(bv,bw,bx){var by=qx.Class.getByName(cV);

if(!by){throw new Error("qx.util.ColorUtil not available! Your code must have a dependency on 'qx.util.ColorUtil'");
}var bA=by.stringToRgb(bv);

try{var bz=by.stringToRgb(bw);
}catch(s){this.__sE(bx||bY,bP,bv,bT,bA.join(bS),bR,bw,cM);
}var bB=bA[0]==bz[0]&&bA[1]==bz[1]&&bA[2]==bz[2];
bB||this.__sE(bx||bY,bP,bA,bT,bA.join(bS),bR,bw,bT,bz.join(bS),cP);
},assertElement:function(dW,dX){!!(dW&&dW.nodeType===1)||this.__sE(dX||bY,cc,dW,bW);
},assertQxObject:function(y,z){this.__sG(y,dd)||this.__sE(z||bY,ci,y,bX);
},assertQxWidget:function(dh,di){this.__sG(dh,cW)||this.__sE(di||bY,ck,dh,bX);
},__sG:function(G,H){if(!G){return false;
}var I=G.constructor;

while(I){if(I.classname===H){return true;
}I=I.superclass;
}return false;
}}});
})();
(function(){var l="qx.core.MAssert";
qx.Mixin.define(l,{members:{assert:function(bh,bi){qx.core.Assert.assert(bh,bi);
},fail:function(bj){qx.core.Assert.fail(bj);
},assertTrue:function(u,v){qx.core.Assert.assertTrue(u,v);
},assertFalse:function(bn,bo){qx.core.Assert.assertFalse(bn,bo);
},assertEquals:function(bt,bu,bv){qx.core.Assert.assertEquals(bt,bu,bv);
},assertNotEquals:function(bP,bQ,bR){qx.core.Assert.assertNotEquals(bP,bQ,bR);
},assertIdentical:function(bk,bl,bm){qx.core.Assert.assertIdentical(bk,bl,bm);
},assertNotIdentical:function(O,P,Q){qx.core.Assert.assertNotIdentical(O,P,Q);
},assertNotUndefined:function(C,D){qx.core.Assert.assertNotUndefined(C,D);
},assertUndefined:function(w,x){qx.core.Assert.assertUndefined(w,x);
},assertNotNull:function(bp,bq){qx.core.Assert.assertNotNull(bp,bq);
},assertNull:function(j,k){qx.core.Assert.assertNull(j,k);
},assertJsonEquals:function(bA,bB,bC){qx.core.Assert.assertJsonEquals(bA,bB,bC);
},assertMatch:function(bJ,bK,bL){qx.core.Assert.assertMatch(bJ,bK,bL);
},assertArgumentsCount:function(y,z,A,B){qx.core.Assert.assertArgumentsCount(y,z,A,B);
},assertEventFired:function(bF,event,bG,bH,bI){qx.core.Assert.assertEventFired(bF,event,bG,bH,bI);
},assertEventNotFired:function(J,event,K,L){qx.core.Assert.assertEventNotFired(J,event,K,L);
},assertException:function(bS,bT,bU,bV){qx.core.Assert.assertException(bS,bT,bU,bV);
},assertInArray:function(R,S,T){qx.core.Assert.assertInArray(R,S,T);
},assertArrayEquals:function(bM,bN,bO){qx.core.Assert.assertArrayEquals(bM,bN,bO);
},assertKeyInMap:function(E,F,G){qx.core.Assert.assertKeyInMap(E,F,G);
},assertFunction:function(br,bs){qx.core.Assert.assertFunction(br,bs);
},assertString:function(s,t){qx.core.Assert.assertString(s,t);
},assertBoolean:function(bc,bd){qx.core.Assert.assertBoolean(bc,bd);
},assertNumber:function(c,d){qx.core.Assert.assertNumber(c,d);
},assertPositiveNumber:function(H,I){qx.core.Assert.assertPositiveNumber(H,I);
},assertInteger:function(bw,bx){qx.core.Assert.assertInteger(bw,bx);
},assertPositiveInteger:function(m,n){qx.core.Assert.assertPositiveInteger(m,n);
},assertInRange:function(X,Y,ba,bb){qx.core.Assert.assertInRange(X,Y,ba,bb);
},assertObject:function(h,i){qx.core.Assert.assertObject(h,i);
},assertArray:function(a,b){qx.core.Assert.assertArray(a,b);
},assertMap:function(by,bz){qx.core.Assert.assertMap(by,bz);
},assertRegExp:function(o,p){qx.core.Assert.assertRegExp(o,p);
},assertType:function(be,bf,bg){qx.core.Assert.assertType(be,bf,bg);
},assertInstance:function(e,f,g){qx.core.Assert.assertInstance(e,f,g);
},assertInterface:function(U,V,W){qx.core.Assert.assertInterface(U,V,W);
},assertCssColor:function(bW,bX,bY){qx.core.Assert.assertCssColor(bW,bX,bY);
},assertElement:function(M,N){qx.core.Assert.assertElement(M,N);
},assertQxObject:function(bD,bE){qx.core.Assert.assertQxObject(bD,bE);
},assertQxWidget:function(q,r){qx.core.Assert.assertQxWidget(q,r);
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
(function(){var t="qx.debug",s="on",r="unknown",q="node",p="error",o="...(+",n="array",m=")",k="info",j="instance",Q="string",P="null",O="class",N="number",M="stringify",L="]",K="function",J="boolean",I="debug",H="map",A="undefined",B="qx.log.Logger",y=")}",z="#",w="warn",x="document",u="{...(",v="[",C="text[",D="[...(",F="\n",E=")]",G="object";
qx.Class.define(B,{statics:{__eU:I,setLevel:function(bx){this.__eU=bx;
},getLevel:function(){return this.__eU;
},setTreshold:function(bF){this.__eX.setMaxMessages(bF);
},getTreshold:function(){return this.__eX.getMaxMessages();
},__eV:{},__eW:0,register:function(a){if(a.$$id){return;
}var b=this.__eW++;
this.__eV[b]=a;
a.$$id=b;
var c=this.__eX.getAllLogEvents();

for(var i=0,l=c.length;i<l;i++){a.process(c[i]);
}},unregister:function(U){var V=U.$$id;

if(V==null){return;
}delete this.__eV[V];
delete U.$$id;
},debug:function(bb,bc){qx.log.Logger.__fa(I,arguments);
},info:function(bC,bD){qx.log.Logger.__fa(k,arguments);
},warn:function(g,h){qx.log.Logger.__fa(w,arguments);
},error:function(bl,bm){qx.log.Logger.__fa(p,arguments);
},trace:function(bE){qx.log.Logger.__fa(k,[bE,qx.dev.StackTrace.getStackTrace().join(F)]);
},deprecatedMethodWarning:function(d,e){if(qx.core.Variant.isSet(t,s)){var f=qx.lang.Function.getName(d);
this.warn("The method '"+f+"' is deprecated: "+(e||"Please consult the API documentation of this method for alternatives."));
this.trace();
}},deprecatedClassWarning:function(bP,bQ){if(qx.core.Variant.isSet(t,s)){var bR=bP.classname||r;
this.warn("The class '"+bR+"' is deprecated: "+(bQ||"Please consult the API documentation of this class for alternatives."));
this.trace();
}},deprecatedEventWarning:function(bd,event,be){if(qx.core.Variant.isSet(t,s)){var bf=bd.self?bd.self.classname:r;
this.warn("The event '"+(event||"unknown")+"' from class '"+bf+"' is deprecated: "+(be||"Please consult the API documentation of this class for alternatives."));
this.trace();
}},deprecatedMixinWarning:function(R,S){if(qx.core.Variant.isSet(t,s)){var T=R?R.name:r;
this.warn("The mixin '"+T+"' is deprecated: "+(S||"Please consult the API documentation of this class for alternatives."));
this.trace();
}},deprecatedConstantWarning:function(by,bz,bA){if(qx.core.Variant.isSet(t,s)){if(by.__defineGetter__){var self=this;
var bB=by[bz];
by.__defineGetter__(bz,function(){self.warn("The constant '"+bz+"' is deprecated: "+(bA||"Please consult the API documentation for alternatives."));
self.trace();
return bB;
});
}}},deprecateMethodOverriding:function(bg,bh,bi,bj){if(qx.core.Variant.isSet(t,s)){var bk=bg.constructor;

while(bk.classname!==bh.classname){if(bk.prototype.hasOwnProperty(bi)){this.warn("The method '"+qx.lang.Function.getName(bg[bi])+"' overrides a deprecated method: "+(bj||"Please consult the API documentation for alternatives."));
this.trace();
break;
}bk=bk.superclass;
}}},clear:function(){this.__eX.clearHistory();
},__eX:new qx.log.appender.RingBuffer(50),__eY:{debug:0,info:1,warn:2,error:3},__fa:function(bn,bo){var bt=this.__eY;

if(bt[bn]<bt[this.__eU]){return;
}var bq=bo.length<2?null:bo[0];
var bs=bq?1:0;
var bp=[];

for(var i=bs,l=bo.length;i<l;i++){bp.push(this.__fc(bo[i],true));
}var bu=new Date;
var bv={time:bu,offset:bu-qx.Bootstrap.LOADSTART,level:bn,items:bp,win:window};
if(bq){if(bq instanceof qx.core.Object){bv.object=bq.$$hash;
}else if(bq.$$type){bv.clazz=bq;
}}this.__eX.process(bv);
var bw=this.__eV;

for(var br in bw){bw[br].process(bv);
}},__fb:function(W){if(W===undefined){return A;
}else if(W===null){return P;
}
if(W.$$type){return O;
}var X=typeof W;

if(X===K||X==Q||X===N||X===J){return X;
}else if(X===G){if(W.nodeType){return q;
}else if(W.classname){return j;
}else if(W instanceof Array){return n;
}else if(W instanceof Error){return p;
}else{return H;
}}
if(W.toString){return M;
}return r;
},__fc:function(bG,bH){var bO=this.__fb(bG);
var bK=r;
var bJ=[];

switch(bO){case P:case A:bK=bO;
break;
case Q:case N:case J:bK=bG;
break;
case q:if(bG.nodeType===9){bK=x;
}else if(bG.nodeType===3){bK=C+bG.nodeValue+L;
}else if(bG.nodeType===1){bK=bG.nodeName.toLowerCase();

if(bG.id){bK+=z+bG.id;
}}else{bK=q;
}break;
case K:bK=qx.lang.Function.getName(bG)||bO;
break;
case j:bK=bG.basename+v+bG.$$hash+L;
break;
case O:case M:bK=bG.toString();
break;
case p:bJ=qx.dev.StackTrace.getStackTraceFromError(bG);
bK=bG.toString();
break;
case n:if(bH){bK=[];

for(var i=0,l=bG.length;i<l;i++){if(bK.length>20){bK.push(o+(l-i)+m);
break;
}bK.push(this.__fc(bG[i],false));
}}else{bK=D+bG.length+E;
}break;
case H:if(bH){var bI;
var bN=[];

for(var bM in bG){bN.push(bM);
}bN.sort();
bK=[];

for(var i=0,l=bN.length;i<l;i++){if(bK.length>20){bK.push(o+(l-i)+m);
break;
}bM=bN[i];
bI=this.__fc(bG[bM],false);
bI.key=bM;
bK.push(bI);
}}else{var bL=0;

for(var bM in bG){bL++;
}bK=u+bL+y;
}break;
}return {type:bO,text:bK,trace:bJ};
}},defer:function(Y){var ba=qx.Bootstrap.$$logs;

for(var i=0;i<ba.length;i++){Y.__fa(ba[i][0],ba[i][1]);
}qx.Bootstrap.debug=Y.debug;
qx.Bootstrap.info=Y.info;
qx.Bootstrap.warn=Y.warn;
qx.Bootstrap.error=Y.error;
qx.Bootstrap.trace=Y.trace;
}});
})();
(function(){var bv="qx.debug",bu="on",bt="qx.disposerDebugLevel",bs="set",br="MSIE 6.0",bq="rv:1.8.1",bp="get",bo="reset",bn="qx.core.Object",bm="]",bj="[",bl="$$user_",bk="object",bi="Object";
qx.Class.define(bn,{extend:Object,include:[qx.data.MBinding],construct:function(){qx.core.ObjectRegistry.register(this);
},statics:{$$type:bi},members:{toHashCode:function(){return this.$$hash;
},toString:function(){return this.classname+bj+this.$$hash+bm;
},base:function(bD,bE){if(qx.core.Variant.isSet(bv,bu)){if(!qx.Bootstrap.isFunction(bD.callee.base)){throw new Error("Cannot call super class. Method is not derived: "+bD.callee.displayName);
}}
if(arguments.length===1){return bD.callee.base.call(this);
}else{return bD.callee.base.apply(this,Array.prototype.slice.call(arguments,1));
}},self:function(t){return t.callee.self;
},clone:function(){var be=this.constructor;
var bd=new be;
var bg=qx.Class.getProperties(be);
var bf=qx.core.Property.$$store.user;
var bh=qx.core.Property.$$method.set;
var name;
for(var i=0,l=bg.length;i<l;i++){name=bg[i];

if(this.hasOwnProperty(bf[name])){bd[bh[name]](this[bf[name]]);
}}return bd;
},set:function(O,P){var R=qx.core.Property.$$method.set;

if(qx.Bootstrap.isString(O)){if(!this[R[O]]){if(this[bs+qx.Bootstrap.firstUp(O)]!=undefined){this[bs+qx.Bootstrap.firstUp(O)](P);
return this;
}
if(qx.core.Variant.isSet(bv,bu)){qx.Bootstrap.error("No such property: "+O);
return this;
}}return this[R[O]](P);
}else{for(var Q in O){if(!this[R[Q]]){if(this[bs+qx.Bootstrap.firstUp(Q)]!=undefined){this[bs+qx.Bootstrap.firstUp(Q)](O[Q]);
continue;
}
if(qx.core.Variant.isSet(bv,bu)){qx.Bootstrap.error("No such property: "+Q);
return this;
}}this[R[Q]](O[Q]);
}return this;
}},get:function(M){var N=qx.core.Property.$$method.get;

if(!this[N[M]]){if(this[bp+qx.Bootstrap.firstUp(M)]!=undefined){return this[bp+qx.Bootstrap.firstUp(M)]();
}
if(qx.core.Variant.isSet(bv,bu)){qx.Bootstrap.error("No such property: "+M);
return this;
}}return this[N[M]]();
},reset:function(bH){var bI=qx.core.Property.$$method.reset;

if(!this[bI[bH]]){if(this[bo+qx.Bootstrap.firstUp(bH)]!=undefined){this[bo+qx.Bootstrap.firstUp(bH)]();
return;
}
if(qx.core.Variant.isSet(bv,bu)){qx.Bootstrap.error("No such property: "+bH);
return;
}}this[bI[bH]]();
},__kM:qx.event.Registration,addListener:function(B,C,self,D){if(!this.$$disposed){return this.__kM.addListener(this,B,C,self,D);
}return null;
},addListenerOnce:function(Y,ba,self,bb){var bc=function(e){ba.call(self||this,e);
this.removeListener(Y,bc,this,bb);
};
return this.addListener(Y,bc,this,bb);
},removeListener:function(x,y,self,z){if(!this.$$disposed){return this.__kM.removeListener(this,x,y,self,z);
}return false;
},removeListenerById:function(A){if(!this.$$disposed){return this.__kM.removeListenerById(this,A);
}return false;
},hasListener:function(q,r){return this.__kM.hasListener(this,q,r);
},dispatchEvent:function(a){if(!this.$$disposed){return this.__kM.dispatchEvent(this,a);
}return true;
},fireEvent:function(E,F,G){if(!this.$$disposed){return this.__kM.fireEvent(this,E,F,G);
}return true;
},fireNonBubblingEvent:function(u,v,w){if(!this.$$disposed){return this.__kM.fireNonBubblingEvent(this,u,v,w);
}return true;
},fireDataEvent:function(by,bz,bA,bB){if(!this.$$disposed){if(bA===undefined){bA=null;
}return this.__kM.fireNonBubblingEvent(this,by,qx.event.type.Data,[bz,bA,!!bB]);
}return true;
},__kN:null,setUserData:function(o,p){if(!this.__kN){this.__kN={};
}this.__kN[o]=p;
},getUserData:function(bJ){if(!this.__kN){return null;
}var bK=this.__kN[bJ];
return bK===undefined?null:bK;
},__kO:qx.log.Logger,debug:function(b){this.__kO.debug(this,b);
},info:function(bF){this.__kO.info(this,bF);
},warn:function(s){this.__kO.warn(this,s);
},error:function(bx){this.__kO.error(this,bx);
},trace:function(){this.__kO.trace(this);
},isDisposed:function(){return this.$$disposed||false;
},dispose:function(){if(this.$$disposed){return;
}this.$$disposed=true;
this.$$instance=null;
this.$$allowconstruct=null;
if(qx.core.Variant.isSet(bv,bu)){if(qx.core.Setting.get(bt)>2){qx.Bootstrap.debug(this,"Disposing "+this.classname+"["+this.toHashCode()+"]");
}}var U=this.constructor;
var S;

while(U.superclass){if(U.$$destructor){U.$$destructor.call(this);
}if(U.$$includes){S=U.$$flatIncludes;

for(var i=0,l=S.length;i<l;i++){if(S[i].$$destructor){S[i].$$destructor.call(this);
}}}U=U.superclass;
}if(this.__kP){this.__kP();
}if(qx.core.Variant.isSet(bv,bu)){if(qx.core.Setting.get(bt)>0){var V,T;

for(V in this){T=this[V];
if(T!==null&&typeof T===bk&&!(qx.Bootstrap.isString(T))){if(this.constructor.prototype[V]!=null){continue;
}var X=navigator.userAgent.indexOf(bq)!=-1;
var W=navigator.userAgent.indexOf(br)!=-1;
if(X||W){if(T instanceof qx.core.Object||qx.core.Setting.get(bt)>1){qx.Bootstrap.warn(this,"Missing destruct definition for '"+V+"' in "+this.classname+"["+this.toHashCode()+"]: "+T);
delete this[V];
}}else{if(qx.core.Setting.get(bt)>1){qx.Bootstrap.warn(this,"Missing destruct definition for '"+V+"' in "+this.classname+"["+this.toHashCode()+"]: "+T);
delete this[V];
}}}}}}},__kP:null,__kQ:function(){var c=qx.Class.getProperties(this.constructor);

for(var i=0,l=c.length;i<l;i++){delete this[bl+c[i]];
}},_disposeObjects:function(bG){qx.util.DisposeUtil.disposeObjects(this,arguments);
},_disposeSingletonObjects:function(bC){qx.util.DisposeUtil.disposeObjects(this,arguments,true);
},_disposeArray:function(H){qx.util.DisposeUtil.disposeArray(this,H);
},_disposeMap:function(bw){qx.util.DisposeUtil.disposeMap(this,bw);
}},settings:{"qx.disposerDebugLevel":0},defer:function(I,J){if(qx.core.Variant.isSet(bv,bu)){qx.Class.include(I,qx.core.MAssert);
}var L=navigator.userAgent.indexOf(br)!=-1;
var K=navigator.userAgent.indexOf(bq)!=-1;
if(L||K){J.__kP=J.__kQ;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.event.Registration.removeAllListeners(this);
}else{qx.event.Registration.deleteAllListeners(this);
}qx.core.ObjectRegistry.unregister(this);
this.__kN=null;
var g=this.constructor;
var m;
var n=qx.core.Property.$$store;
var j=n.user;
var k=n.theme;
var d=n.inherit;
var h=n.useinit;
var f=n.init;

while(g){m=g.$$properties;

if(m){for(var name in m){if(m[name].dereference){this[j[name]]=this[k[name]]=this[d[name]]=this[h[name]]=this[f[name]]=undefined;
}}}g=g.superclass;
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
(function(){var c="on",b="qx.debug",a="qx.event.dispatch.Direct";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,construct:function(g){this._manager=g;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST},members:{canDispatchEvent:function(e,event,f){return !event.getBubbles();
},dispatchEvent:function(h,event,j){if(qx.core.Variant.isSet(b,c)){if(h instanceof qx.core.Object){var n=qx.Class.getEventType(h.constructor,j);
var k=qx.Class.getByName(n);

if(!k){this.error("The event type '"+j+"' declared in the class '"+h.constructor+" is not an available class': "+n);
}else if(!(event instanceof k)){this.error("Expected event type to be instanceof '"+n+"' but found '"+event.classname+"'");
}}}event.setEventPhase(qx.event.type.Event.AT_TARGET);
var o=this._manager.getListeners(h,j,false);

if(o){for(var i=0,l=o.length;i<l;i++){var m=o[i].context||h;
o[i].handler.call(m,event);
}}}},defer:function(d){qx.event.Registration.addDispatcher(d);
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
(function(){var a="qx.locale.MTranslation";
qx.Mixin.define(a,{members:{tr:function(b,c){var d=qx.locale.Manager;

if(d){return d.tr.apply(d,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trn:function(g,h,i,j){var k=qx.locale.Manager;

if(k){return k.trn.apply(k,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trc:function(l,m,n){var o=qx.locale.Manager;

if(o){return o.trc.apply(o,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},marktr:function(e){var f=qx.locale.Manager;

if(f){return f.marktr.apply(f,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
}}});
})();
(function(){var b="abstract",a="qx.application.AbstractGui";
qx.Class.define(a,{type:b,extend:qx.core.Object,implement:[qx.application.IApplication],include:qx.locale.MTranslation,members:{__mI:null,_createRootWidget:function(){throw new Error("Abstract method call");
},getRoot:function(){return this.__mI;
},main:function(){qx.theme.manager.Meta.getInstance().initialize();
qx.ui.tooltip.Manager.getInstance();
this.__mI=this._createRootWidget();
},finalize:function(){this.render();
},render:function(){qx.ui.core.queue.Manager.flush();
},close:function(c){},terminate:function(){}},destruct:function(){this.__mI=null;
}});
})();
(function(){var a="qx.application.Standalone";
qx.Class.define(a,{extend:qx.application.AbstractGui,members:{_createRootWidget:function(){return new qx.ui.root.Application(document);
}}});
})();
(function(){var g="demobrowser.Application",f="viewer",e="qx.debug",d="demobrowser/css/sourceview.css",c="script/demodata.json",b="on",a="demobrowser/css/style.css";
qx.Class.define(g,{extend:qx.application.Standalone,construct:function(){qx.application.Standalone.call(this);
qx.bom.Stylesheet.includeFile(a);
qx.bom.Stylesheet.includeFile(d);
},members:{main:function(){qx.application.Standalone.prototype.main.call(this);
if(qx.core.Variant.isSet(e,b)){qx.log.appender.Native;
qx.log.appender.Console;
}this.viewer=new demobrowser.DemoBrowser;
this.getRoot().add(this.viewer,{edge:0});
},finalize:function(){qx.application.Standalone.prototype.finalize.call(this);
this.viewer.dataLoader(c);
}},destruct:function(){this._disposeObjects(f);
}});
})();
(function(){var i="qx.debug",h="on",g="Cannot stop propagation on a non bubbling event: ",f="Invalid argument value 'cancelable'.",e="Cannot prevent default action on a non cancelable event: ",d="Invalid argument value 'canBubble'.",c="qx.event.type.Event";
qx.Class.define(c,{extend:qx.core.Object,statics:{CAPTURING_PHASE:1,AT_TARGET:2,BUBBLING_PHASE:3},members:{init:function(r,s){if(qx.core.Variant.isSet(i,h)){if(r!==undefined){qx.core.Assert.assertBoolean(r,d);
}
if(s!==undefined){qx.core.Assert.assertBoolean(s,f);
}}this._type=null;
this._target=null;
this._currentTarget=null;
this._relatedTarget=null;
this._originalTarget=null;
this._stopPropagation=false;
this._preventDefault=false;
this._bubbles=!!r;
this._cancelable=!!s;
this._timeStamp=(new Date()).getTime();
this._eventPhase=null;
return this;
},clone:function(m){if(m){var n=m;
}else{var n=qx.event.Pool.getInstance().getObject(this.constructor);
}n._type=this._type;
n._target=this._target;
n._currentTarget=this._currentTarget;
n._relatedTarget=this._relatedTarget;
n._originalTarget=this._originalTarget;
n._stopPropagation=this._stopPropagation;
n._bubbles=this._bubbles;
n._preventDefault=this._preventDefault;
n._cancelable=this._cancelable;
return n;
},stop:function(){if(this._bubbles){this.stopPropagation();
}
if(this._cancelable){this.preventDefault();
}},stopPropagation:function(){if(qx.core.Variant.isSet(i,h)){this.assertTrue(this._bubbles,g+this.getType());
}this._stopPropagation=true;
},getPropagationStopped:function(){return !!this._stopPropagation;
},preventDefault:function(){if(qx.core.Variant.isSet(i,h)){this.assertTrue(this._cancelable,e+this.getType());
}this._preventDefault=true;
},getDefaultPrevented:function(){return !!this._preventDefault;
},getType:function(){return this._type;
},setType:function(p){this._type=p;
},getEventPhase:function(){return this._eventPhase;
},setEventPhase:function(k){this._eventPhase=k;
},getTimeStamp:function(){return this._timeStamp;
},getTarget:function(){return this._target;
},setTarget:function(q){this._target=q;
},getCurrentTarget:function(){return this._currentTarget||this._target;
},setCurrentTarget:function(l){this._currentTarget=l;
},getRelatedTarget:function(){return this._relatedTarget;
},setRelatedTarget:function(o){this._relatedTarget=o;
},getOriginalTarget:function(){return this._originalTarget;
},setOriginalTarget:function(a){this._originalTarget=a;
},getBubbles:function(){return this._bubbles;
},setBubbles:function(j){this._bubbles=j;
},isCancelable:function(){return this._cancelable;
},setCancelable:function(b){this._cancelable=b;
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
(function(){var d="on",c="qx.debug",b="GlobalError: ",a="qx.core.GlobalError";
qx.Bootstrap.define(a,{extend:Error,construct:function(e,f){if(qx.core.Variant.isSet(c,d)){qx.core.Assert.assertNotUndefined(e);
}this.__kl=b+(e&&e.message?e.message:e);
Error.call(this,this.__kl);
this.__km=f;
this.__kn=e;
},members:{__kn:null,__km:null,__kl:null,toString:function(){return this.__kl;
},getArguments:function(){return this.__km;
},getSourceException:function(){return this.__kn;
}},destruct:function(){this.__kn=null;
this.__km=null;
this.__kl=null;
}});
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
(function(){var p='',o='"',m=':',l=']',h='null',g=': ',f='object',e='function',d=',',b='\n',ba='\\u',Y=',\n',X='0000',W='string',V="Cannot stringify a recursive object.",U='0',T='-',S='}',R='String',Q='Boolean',x='\\\\',y='\\f',u='\\t',w='{\n',s='[]',t="qx.lang.JsonImpl",q='Z',r='\\n',z='Object',A='{}',H='@',F='.',K='(',J='Array',M='T',L='\\r',C='{',P='JSON.parse',O=' ',N='[',B='Number',D=')',E='[\n',G='\\"',I='\\b';
qx.Class.define(t,{extend:Object,construct:function(){this.stringify=qx.lang.Function.bind(this.stringify,this);
this.parse=qx.lang.Function.bind(this.parse,this);
},members:{__sJ:null,__sK:null,__sL:null,__sM:null,stringify:function(br,bs,bt){this.__sJ=p;
this.__sK=p;
this.__sM=[];

if(qx.lang.Type.isNumber(bt)){var bt=Math.min(10,Math.floor(bt));

for(var i=0;i<bt;i+=1){this.__sK+=O;
}}else if(qx.lang.Type.isString(bt)){if(bt.length>10){bt=bt.slice(0,10);
}this.__sK=bt;
}if(bs&&(qx.lang.Type.isFunction(bs)||qx.lang.Type.isArray(bs))){this.__sL=bs;
}else{this.__sL=null;
}return this.__sN(p,{'':br});
},__sN:function(bl,bm){var bp=this.__sJ,bn,bq=bm[bl];
if(bq&&qx.lang.Type.isFunction(bq.toJSON)){bq=bq.toJSON(bl);
}else if(qx.lang.Type.isDate(bq)){bq=this.dateToJSON(bq);
}if(typeof this.__sL===e){bq=this.__sL.call(bm,bl,bq);
}
if(bq===null){return h;
}
if(bq===undefined){return undefined;
}switch(qx.lang.Type.getClass(bq)){case R:return this.__sO(bq);
case B:return isFinite(bq)?String(bq):h;
case Q:return String(bq);
case J:this.__sJ+=this.__sK;
bn=[];

if(this.__sM.indexOf(bq)!==-1){throw new TypeError(V);
}this.__sM.push(bq);
var length=bq.length;

for(var i=0;i<length;i+=1){bn[i]=this.__sN(i,bq)||h;
}this.__sM.pop();
if(bn.length===0){var bo=s;
}else if(this.__sJ){bo=E+this.__sJ+bn.join(Y+this.__sJ)+b+bp+l;
}else{bo=N+bn.join(d)+l;
}this.__sJ=bp;
return bo;
case z:this.__sJ+=this.__sK;
bn=[];

if(this.__sM.indexOf(bq)!==-1){throw new TypeError(V);
}this.__sM.push(bq);
if(this.__sL&&typeof this.__sL===f){var length=this.__sL.length;

for(var i=0;i<length;i+=1){var k=this.__sL[i];

if(typeof k===W){var v=this.__sN(k,bq);

if(v){bn.push(this.__sO(k)+(this.__sJ?g:m)+v);
}}}}else{for(var k in bq){if(Object.hasOwnProperty.call(bq,k)){var v=this.__sN(k,bq);

if(v){bn.push(this.__sO(k)+(this.__sJ?g:m)+v);
}}}}this.__sM.pop();
if(bn.length===0){var bo=A;
}else if(this.__sJ){bo=w+this.__sJ+bn.join(Y+this.__sJ)+b+bp+S;
}else{bo=C+bn.join(d)+S;
}this.__sJ=bp;
return bo;
}},dateToJSON:function(be){var bf=function(n){return n<10?U+n:n;
};
var bg=function(n){var bk=bf(n);
return n<100?U+bk:bk;
};
return isFinite(be.valueOf())?be.getUTCFullYear()+T+bf(be.getUTCMonth()+1)+T+bf(be.getUTCDate())+M+bf(be.getUTCHours())+m+bf(be.getUTCMinutes())+m+bf(be.getUTCSeconds())+F+bg(be.getUTCMilliseconds())+q:null;
},__sO:function(bb){var bc={'\b':I,'\t':u,'\n':r,'\f':y,'\r':L,'"':G,'\\':x};
var bd=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
bd.lastIndex=0;

if(bd.test(bb)){return o+
bb.replace(bd,function(a){var c=bc[a];
return typeof c===W?c:ba+(X+a.charCodeAt(0).toString(16)).slice(-4);
})+o;
}else{return o+bb+o;
}},parse:function(bh,bi){var bj=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
bj.lastIndex=0;
if(bj.test(bh)){bh=bh.replace(bj,function(a){return ba+(X+a.charCodeAt(0).toString(16)).slice(-4);
});
}if(/^[\],:{}\s]*$/.test(bh.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,H).replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,l).replace(/(?:^|:|,)(?:\s*\[)+/g,p))){var j=eval(K+bh+D);
return typeof bi===e?this.__sP({'':j},p,bi):j;
}throw new SyntaxError(P);
},__sP:function(bu,bv,bw){var bx=bu[bv];

if(bx&&typeof bx===f){for(var k in bx){if(Object.hasOwnProperty.call(bx,k)){var v=this.__sP(bx,k,bw);

if(v!==undefined){bx[k]=v;
}else{delete bx[k];
}}}}return bw.call(bu,bv,bx);
}}});
})();
(function(){var a="qx.lang.Json";
qx.Class.define(a,{statics:{JSON:(qx.lang.Type.getClass(window.JSON)=="JSON"&&JSON.parse('{"x":1}').x===1)?window.JSON:new qx.lang.JsonImpl(),stringify:null,parse:null},defer:function(b){b.stringify=b.JSON.stringify;
b.parse=b.JSON.parse;
}});
})();
(function(){var P="get",O="",N="[",M=".",L="last",K="change",J="]",I="Number",H="String",G="set",bk="deepBinding",bj="item",bi="reset",bh="' (",bg="on",bf="qx.debug",be="Boolean",bd=") to the object '",bc="Integer",bb="qx.event.type.Data",W="qx.data.SingleValueBinding",X="No event could be found for the property",U="Can not remove the bindings for null object!",V="Binding from '",S="PositiveNumber",T="PositiveInteger",Q="Binding does not exist!",R=" is not an data (qx.event.type.Data) event on ",Y=").",ba="Date";
qx.Class.define(W,{statics:{DEBUG_ON:false,__fP:{},bind:function(b,c,d,f,g){var s=this.__fR(b,c,d,f,g);
var n=c.split(M);
var k=this.__fY(n);
var r=[];
var o=[];
var p=[];
var l=[];
var m=b;
for(var i=0;i<n.length;i++){if(k[i]!==O){l.push(K);
}else{l.push(this.__fT(m,n[i]));
}r[i]=m;
if(i==n.length-1){if(k[i]!==O){var v=k[i]===L?m.length-1:k[i];
var h=m.getItem(v);
this.__fX(h,d,f,g,b);
p[i]=this.__ga(m,l[i],d,f,g,k[i]);
}else{if(n[i]!=null&&m[P+qx.lang.String.firstUp(n[i])]!=null){var h=m[P+qx.lang.String.firstUp(n[i])]();
this.__fX(h,d,f,g,b);
}p[i]=this.__ga(m,l[i],d,f,g);
}}else{var t={index:i,propertyNames:n,sources:r,listenerIds:p,arrayIndexValues:k,targetObject:d,targetPropertyChain:f,options:g,listeners:o};
var q=qx.lang.Function.bind(this.__fQ,this,t);
o.push(q);
p[i]=m.addListener(l[i],q);
}if(m[P+qx.lang.String.firstUp(n[i])]==null){m=null;
}else if(k[i]!==O){m=m[P+qx.lang.String.firstUp(n[i])](k[i]);
}else{m=m[P+qx.lang.String.firstUp(n[i])]();
}
if(!m){break;
}}var u={type:bk,listenerIds:p,sources:r,targetListenerIds:s.listenerIds,targets:s.targets};
this.__gb(u,b,c,d,f);
return u;
},__fQ:function(co){if(co.options&&co.options.onUpdate){co.options.onUpdate(co.sources[co.index],co.targetObject);
}for(var j=co.index+1;j<co.propertyNames.length;j++){var cs=co.sources[j];
co.sources[j]=null;

if(!cs){continue;
}cs.removeListenerById(co.listenerIds[j]);
}var cs=co.sources[co.index];
for(var j=co.index+1;j<co.propertyNames.length;j++){if(co.arrayIndexValues[j-1]!==O){cs=cs[P+qx.lang.String.firstUp(co.propertyNames[j-1])](co.arrayIndexValues[j-1]);
}else{cs=cs[P+qx.lang.String.firstUp(co.propertyNames[j-1])]();
}co.sources[j]=cs;
if(!cs){this.__fU(co.targetObject,co.targetPropertyChain);
break;
}if(j==co.propertyNames.length-1){if(qx.Class.implementsInterface(cs,qx.data.IListData)){var ct=co.arrayIndexValues[j]===L?cs.length-1:co.arrayIndexValues[j];
var cq=cs.getItem(ct);
this.__fX(cq,co.targetObject,co.targetPropertyChain,co.options,co.sources[co.index]);
co.listenerIds[j]=this.__ga(cs,K,co.targetObject,co.targetPropertyChain,co.options,co.arrayIndexValues[j]);
}else{if(co.propertyNames[j]!=null&&cs[P+qx.lang.String.firstUp(co.propertyNames[j])]!=null){var cq=cs[P+qx.lang.String.firstUp(co.propertyNames[j])]();
this.__fX(cq,co.targetObject,co.targetPropertyChain,co.options,co.sources[co.index]);
}var cr=this.__fT(cs,co.propertyNames[j]);
co.listenerIds[j]=this.__ga(cs,cr,co.targetObject,co.targetPropertyChain,co.options);
}}else{if(co.listeners[j]==null){var cp=qx.lang.Function.bind(this.__fQ,this,co);
co.listeners.push(cp);
}if(qx.Class.implementsInterface(cs,qx.data.IListData)){var cr=K;
}else{var cr=this.__fT(cs,co.propertyNames[j]);
}co.listenerIds[j]=cs.addListener(cr,co.listeners[j]);
}}},__fR:function(bQ,bR,bS,bT,bU){var bY=bT.split(M);
var bW=this.__fY(bY);
var ce=[];
var cd=[];
var cb=[];
var ca=[];
var bX=bS;
for(var i=0;i<bY.length-1;i++){if(bW[i]!==O){ca.push(K);
}else{try{ca.push(this.__fT(bX,bY[i]));
}catch(e){break;
}}ce[i]=bX;
var cc=function(){for(var j=i+1;j<bY.length-1;j++){var bO=ce[j];
ce[j]=null;

if(!bO){continue;
}bO.removeListenerById(cb[j]);
}var bO=ce[i];
for(var j=i+1;j<bY.length-1;j++){var bM=qx.lang.String.firstUp(bY[j-1]);
if(bW[j-1]!==O){var bP=bW[j-1]===L?bO.getLength()-1:bW[j-1];
bO=bO[P+bM](bP);
}else{bO=bO[P+bM]();
}ce[j]=bO;
if(cd[j]==null){cd.push(cc);
}if(qx.Class.implementsInterface(bO,qx.data.IListData)){var bN=K;
}else{try{var bN=qx.data.SingleValueBinding.__fT(bO,bY[j]);
}catch(e){break;
}}cb[j]=bO.addListener(bN,cd[j]);
}qx.data.SingleValueBinding.__fS(bQ,bR,bS,bT,bU);
};
cd.push(cc);
cb[i]=bX.addListener(ca[i],cc);
var bV=qx.lang.String.firstUp(bY[i]);
if(bX[P+bV]==null){bX=null;
}else if(bW[i]!==O){bX=bX[P+bV](bW[i]);
}else{bX=bX[P+bV]();
}
if(!bX){break;
}}return {listenerIds:cb,targets:ce};
},__fS:function(cQ,cR,cS,cT,cU){var cY=this.__fW(cQ,cR);

if(cY!=null){var db=cR.substring(cR.lastIndexOf(M)+1,cR.length);
if(db.charAt(db.length-1)==J){var cV=db.substring(db.lastIndexOf(N)+1,db.length-1);
var cX=db.substring(0,db.lastIndexOf(N));
var da=cY[P+qx.lang.String.firstUp(cX)]();

if(cV==L){cV=da.length-1;
}
if(da!=null){var cW=da.getItem(cV);
}}else{var cW=cY[P+qx.lang.String.firstUp(db)]();
}}cW=qx.data.SingleValueBinding.__gc(cW,cS,cT,cU);
this.__fV(cS,cT,cW);
},__fT:function(cH,cI){var cJ=this.__gd(cH,cI);
if(cJ==null){if(qx.Class.supportsEvent(cH.constructor,cI)){cJ=cI;
}else if(qx.Class.supportsEvent(cH.constructor,K+qx.lang.String.firstUp(cI))){cJ=K+qx.lang.String.firstUp(cI);
}else{throw new qx.core.AssertionError(X,cI);
}}return cJ;
},__fU:function(bI,bJ){var bK=this.__fW(bI,bJ);

if(bK!=null){var bL=bJ.substring(bJ.lastIndexOf(M)+1,bJ.length);
if(bL.charAt(bL.length-1)==J){this.__fV(bI,bJ,null);
return;
}if(bK[bi+qx.lang.String.firstUp(bL)]!=undefined){bK[bi+qx.lang.String.firstUp(bL)]();
}else{bK[G+qx.lang.String.firstUp(bL)](null);
}}},__fV:function(bl,bm,bn){var br=this.__fW(bl,bm);

if(br!=null){var bs=bm.substring(bm.lastIndexOf(M)+1,bm.length);
if(bs.charAt(bs.length-1)==J){var bo=bs.substring(bs.lastIndexOf(N)+1,bs.length-1);
var bq=bs.substring(0,bs.lastIndexOf(N));
var bp=br[P+qx.lang.String.firstUp(bq)]();

if(bo==L){bo=bp.length-1;
}
if(bp!=null){bp.setItem(bo,bn);
}}else{br[G+qx.lang.String.firstUp(bs)](bn);
}}},__fW:function(cu,cv){var cy=cv.split(M);
var cz=cu;
for(var i=0;i<cy.length-1;i++){try{var cx=cy[i];
if(cx.indexOf(J)==cx.length-1){var cw=cx.substring(cx.indexOf(N)+1,cx.length-1);
cx=cx.substring(0,cx.indexOf(N));
}cz=cz[P+qx.lang.String.firstUp(cx)]();

if(cw!=null){if(cw==L){cw=cz.length-1;
}cz=cz.getItem(cw);
cw=null;
}}catch(cC){return null;
}}return cz;
},__fX:function(z,A,B,C,D){z=this.__gc(z,A,B,C);
if(z==null){this.__fU(A,B);
}if(z!=undefined){try{this.__fV(A,B,z);
if(C&&C.onUpdate){C.onUpdate(D,A,z);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(C&&C.onSetFail){C.onSetFail(e);
}else{this.warn("Failed so set value "+z+" on "+A+". Error message: "+e);
}}}},__fY:function(dh){var di=[];
for(var i=0;i<dh.length;i++){var name=dh[i];
if(qx.lang.String.endsWith(name,J)){var dj=name.substring(name.indexOf(N)+1,name.indexOf(J));
if(name.indexOf(J)!=name.length-1){throw new Error("Please use only one array at a time: "+name+" does not work.");
}
if(dj!==L){if(dj==O||isNaN(parseInt(dj))){throw new Error("No number or 'last' value hast been given"+" in a array binding: "+name+" does not work.");
}}if(name.indexOf(N)!=0){dh[i]=name.substring(0,name.indexOf(N));
di[i]=O;
di[i+1]=dj;
dh.splice(i+1,0,bj);
i++;
}else{di[i]=dj;
dh.splice(i,1,bj);
}}else{di[i]=O;
}}return di;
},__ga:function(cf,cg,ch,ci,cj,ck){if(qx.core.Variant.isSet(bf,bg)){var cl=qx.Class.getEventType(cf.constructor,cg);
qx.core.Assert.assertEquals(bb,cl,cg+R+cf+M);
}var cn=function(cD,e){if(cD!==O){if(cD===L){cD=cf.length-1;
}var cG=cf.getItem(cD);
if(cG==undefined){qx.data.SingleValueBinding.__fU(ch,ci);
}var cE=e.getData().start;
var cF=e.getData().end;

if(cD<cE||cD>cF){return;
}}else{var cG=e.getData();
}if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Binding executed from "+cf+" by "+cg+" to "+ch+" ("+ci+")");
qx.log.Logger.debug("Data before conversion: "+cG);
}cG=qx.data.SingleValueBinding.__gc(cG,ch,ci,cj);
if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Data after conversion: "+cG);
}try{if(cG!=undefined){qx.data.SingleValueBinding.__fV(ch,ci,cG);
}else{qx.data.SingleValueBinding.__fU(ch,ci);
}if(cj&&cj.onUpdate){cj.onUpdate(cf,ch,cG);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(cj&&cj.onSetFail){cj.onSetFail(e);
}else{this.warn("Failed so set value "+cG+" on "+ch+". Error message: "+e);
}}};
if(!ck){ck=O;
}cn=qx.lang.Function.bind(cn,cf,ck);
var cm=cf.addListener(cg,cn);
return cm;
},__gb:function(dc,dd,de,df,dg){if(this.__fP[dd.toHashCode()]===undefined){this.__fP[dd.toHashCode()]=[];
}this.__fP[dd.toHashCode()].push([dc,dd,de,df,dg]);
},__gc:function(bt,bu,bv,bw){if(bw&&bw.converter){var by;

if(bu.getModel){by=bu.getModel();
}return bw.converter(bt,by);
}else{var bA=this.__fW(bu,bv);
var bB=bv.substring(bv.lastIndexOf(M)+1,bv.length);
if(bA==null){return bt;
}var bz=qx.Class.getPropertyDefinition(bA.constructor,bB);
var bx=bz==null?O:bz.check;
return this.__ge(bt,bx);
}},__gd:function(w,x){var y=qx.Class.getPropertyDefinition(w.constructor,x);

if(y==null){return null;
}return y.event;
},__ge:function(bC,bD){var bE=qx.lang.Type.getClass(bC);
if((bE==I||bE==H)&&(bD==bc||bD==T)){bC=parseInt(bC);
}if((bE==be||bE==I||bE==ba)&&bD==H){bC=bC+O;
}if((bE==I||bE==H)&&(bD==I||bD==S)){bC=parseFloat(bC);
}return bC;
},removeBindingFromObject:function(bF,bG){if(bG.type==bk){for(var i=0;i<bG.sources.length;i++){if(bG.sources[i]){bG.sources[i].removeListenerById(bG.listenerIds[i]);
}}for(var i=0;i<bG.targets.length;i++){if(bG.targets[i]){bG.targets[i].removeListenerById(bG.targetListenerIds[i]);
}}}else{bF.removeListenerById(bG);
}var bH=this.__fP[bF.toHashCode()];
if(bH!=undefined){for(var i=0;i<bH.length;i++){if(bH[i][0]==bG){qx.lang.Array.remove(bH,bH[i]);
return;
}}}throw new Error("Binding could not be found!");
},removeAllBindingsForObject:function(cA){if(qx.core.Variant.isSet(bf,bg)){qx.core.Assert.assertNotNull(cA,U);
}var cB=this.__fP[cA.toHashCode()];

if(cB!=undefined){for(var i=cB.length-1;i>=0;i--){this.removeBindingFromObject(cA,cB[i][0]);
}}},getAllBindingsForObject:function(a){if(this.__fP[a.toHashCode()]===undefined){this.__fP[a.toHashCode()]=[];
}return this.__fP[a.toHashCode()];
},removeAllBindings:function(){for(var F in this.__fP){var E=qx.core.ObjectRegistry.fromHashCode(F);
if(E==null){delete this.__fP[F];
continue;
}this.removeAllBindingsForObject(E);
}this.__fP={};
},getAllBindings:function(){return this.__fP;
},showBindingInLog:function(cM,cN){var cP;
for(var i=0;i<this.__fP[cM.toHashCode()].length;i++){if(this.__fP[cM.toHashCode()][i][0]==cN){cP=this.__fP[cM.toHashCode()][i];
break;
}}
if(cP===undefined){var cO=Q;
}else{var cO=V+cP[1]+bh+cP[2]+bd+cP[3]+bh+cP[4]+Y;
}qx.log.Logger.debug(cO);
},showAllBindingsInLog:function(){for(var cL in this.__fP){var cK=qx.core.ObjectRegistry.fromHashCode(cL);

for(var i=0;i<this.__fP[cL].length;i++){this.showBindingInLog(cK,this.__fP[cL][i][0]);
}}}}});
})();
(function(){var a="qx.core.ValidationError";
qx.Class.define(a,{extend:qx.type.BaseError});
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
(function(){var f="_applyTheme",e="qx.theme",d="qx.theme.manager.Meta",c="qx.theme.Modern",b="Theme",a="singleton";
qx.Class.define(d,{type:a,extend:qx.core.Object,properties:{theme:{check:b,nullable:true,apply:f}},members:{_applyTheme:function(j,k){var n=null;
var q=null;
var t=null;
var u=null;
var p=null;

if(j){n=j.meta.color||null;
q=j.meta.decoration||null;
t=j.meta.font||null;
u=j.meta.icon||null;
p=j.meta.appearance||null;
}var r=qx.theme.manager.Color.getInstance();
var s=qx.theme.manager.Decoration.getInstance();
var l=qx.theme.manager.Font.getInstance();
var o=qx.theme.manager.Icon.getInstance();
var m=qx.theme.manager.Appearance.getInstance();
r.setTheme(n);
s.setTheme(q);
l.setTheme(t);
o.setTheme(u);
m.setTheme(p);
},initialize:function(){var h=qx.core.Setting;
var g,i;
g=h.get(e);

if(g){i=qx.Theme.getByName(g);

if(!i){throw new Error("The theme to use is not available: "+g);
}this.setTheme(i);
}}},settings:{"qx.theme":c}});
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
(function(){var h="object",g="_applyTheme",f="qx.theme.manager.Decoration",e="Theme",d="__ct",c="changeTheme",b="string",a="singleton";
qx.Class.define(f,{type:a,extend:qx.core.Object,properties:{theme:{check:e,nullable:true,apply:g,event:c}},members:{__ct:null,resolve:function(k){if(!k){return null;
}
if(typeof k===h){return k;
}var n=this.getTheme();

if(!n){return null;
}var n=this.getTheme();

if(!n){return null;
}var o=this.__ct;

if(!o){o=this.__ct={};
}var l=o[k];

if(l){return l;
}var m=n.decorations[k];

if(!m){return null;
}var p=m.decorator;

if(p==null){throw new Error("Missing definition of which decorator to use in entry: "+k+"!");
}return o[k]=(new p).set(m.style);
},isValidPropertyValue:function(i){if(typeof i===b){return this.isDynamic(i);
}else if(typeof i===h){var j=i.constructor;
return qx.Class.hasInterface(j,qx.ui.decoration.IDecorator);
}return false;
},isDynamic:function(q){if(!q){return false;
}var r=this.getTheme();

if(!r){return false;
}return !!r.decorations[q];
},_applyTheme:function(s,t){var v=qx.util.AliasManager.getInstance();

if(t){for(var u in t.aliases){v.remove(u);
}}
if(s){for(var u in s.aliases){v.add(u,s.aliases[u]);
}}
if(!s){this.__ct={};
}}},destruct:function(){this._disposeMap(d);
}});
})();
(function(){var d="qx.ui.decoration.IDecorator";
qx.Interface.define(d,{members:{getMarkup:function(){},resize:function(a,b,c){},tint:function(e,f){},getInsets:function(){}}});
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
(function(){var e="qx.theme.manager.Font",d="Theme",c="changeTheme",b="_applyTheme",a="singleton";
qx.Class.define(e,{type:a,extend:qx.util.ValueManager,properties:{theme:{check:d,nullable:true,apply:b,event:c}},members:{resolveDynamic:function(f){var g=this._dynamic;
return f instanceof qx.bom.Font?f:g[f];
},resolve:function(p){var s=this._dynamic;
var q=s[p];

if(q){return q;
}var r=this.getTheme();

if(r!==null&&r.fonts[p]){return s[p]=(new qx.bom.Font).set(r.fonts[p]);
}return p;
},isDynamic:function(t){var v=this._dynamic;

if(t&&(t instanceof qx.bom.Font||v[t]!==undefined)){return true;
}var u=this.getTheme();

if(u!==null&&t&&u.fonts[t]){v[t]=(new qx.bom.Font).set(u.fonts[t]);
return true;
}return false;
},__hy:function(h,i){if(h[i].include){var j=h[h[i].include];
h[i].include=null;
delete h[i].include;
h[i]=qx.lang.Object.mergeWith(h[i],j,false);
this.__hy(h,i);
}},_applyTheme:function(k){var l=this._getDynamic();

for(var o in l){if(l[o].themed){l[o].dispose();
delete l[o];
}}
if(k){var m=k.fonts;
var n=qx.bom.Font;

for(var o in m){if(m[o].include&&m[m[o].include]){this.__hy(m,o);
}l[o]=(new n).set(m[o]);
l[o].themed=true;
}}this._setDynamic(l);
}}});
})();
(function(){var n="",m="underline",k="Boolean",j="px",h='"',g="italic",f="normal",e="bold",d="_applyItalic",c="_applyBold",z="Integer",y="_applyFamily",x="_applyLineHeight",w="Array",v="overline",u="line-through",t="qx.bom.Font",s="Number",r="_applyDecoration",q=" ",o="_applySize",p=",";
qx.Class.define(t,{extend:qx.core.Object,construct:function(A,B){qx.core.Object.call(this);

if(A!==undefined){this.setSize(A);
}
if(B!==undefined){this.setFamily(B);
}},statics:{fromString:function(I){var M=new qx.bom.Font();
var K=I.split(/\s+/);
var name=[];
var L;

for(var i=0;i<K.length;i++){switch(L=K[i]){case e:M.setBold(true);
break;
case g:M.setItalic(true);
break;
case m:M.setDecoration(m);
break;
default:var J=parseInt(L,10);

if(J==L||qx.lang.String.contains(L,j)){M.setSize(J);
}else{name.push(L);
}break;
}}
if(name.length>0){M.setFamily(name);
}return M;
},fromConfig:function(N){var O=new qx.bom.Font;
O.set(N);
return O;
},__cB:{fontFamily:n,fontSize:n,fontWeight:n,fontStyle:n,textDecoration:n,lineHeight:1.2},getDefaultStyles:function(){return this.__cB;
}},properties:{size:{check:z,nullable:true,apply:o},lineHeight:{check:s,nullable:true,apply:x},family:{check:w,nullable:true,apply:y},bold:{check:k,nullable:true,apply:c},italic:{check:k,nullable:true,apply:d},decoration:{check:[m,u,v],nullable:true,apply:r}},members:{__cC:null,__cD:null,__cE:null,__cF:null,__cG:null,__cH:null,_applySize:function(E,F){this.__cC=E===null?null:E+j;
},_applyLineHeight:function(a,b){this.__cH=a===null?null:a;
},_applyFamily:function(R,S){var T=n;

for(var i=0,l=R.length;i<l;i++){if(R[i].indexOf(q)>0){T+=h+R[i]+h;
}else{T+=R[i];
}
if(i!==l-1){T+=p;
}}this.__cD=T;
},_applyBold:function(G,H){this.__cE=G===null?null:G?e:f;
},_applyItalic:function(C,D){this.__cF=C===null?null:C?g:f;
},_applyDecoration:function(P,Q){this.__cG=P===null?null:P;
},getStyles:function(){return {fontFamily:this.__cD,fontSize:this.__cC,fontWeight:this.__cE,fontStyle:this.__cF,textDecoration:this.__cG,lineHeight:this.__cH};
}}});
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
(function(){var m="qx.debug",k="on",j="Invalid argument 'map'",h="Invalid argument 'minLength'",g="Invalid argument 'source'",f="Invalid argument 'target'",e="function",d="Invalid argument 'array'",c="qx.lang.Object",b="undefined",a="object";
qx.Class.define(c,{statics:{empty:function(K){if(qx.core.Variant.isSet(m,k)){qx.core.Assert&&qx.core.Assert.assertMap(K,j);
}
for(var L in K){if(K.hasOwnProperty(L)){delete K[L];
}}},isEmpty:(qx.bom.client.Feature.ECMA_OBJECT_COUNT)?
function(q){if(qx.core.Variant.isSet(m,k)){qx.core.Assert&&qx.core.Assert.assertMap(q,j);
}return q.__count__===0;
}:
function(u){if(qx.core.Variant.isSet(m,k)){qx.core.Assert&&qx.core.Assert.assertMap(u,j);
}
for(var v in u){return false;
}return true;
},hasMinLength:(qx.bom.client.Feature.ECMA_OBJECT_COUNT)?
function(G,H){if(qx.core.Variant.isSet(m,k)){qx.core.Assert&&qx.core.Assert.assertMap(G,j);
qx.core.Assert&&qx.core.Assert.assertInteger(H,h);
}return G.__count__>=H;
}:
function(P,Q){if(qx.core.Variant.isSet(m,k)){qx.core.Assert&&qx.core.Assert.assertMap(P,j);
qx.core.Assert&&qx.core.Assert.assertInteger(Q,h);
}
if(Q<=0){return true;
}var length=0;

for(var R in P){if((++length)>=Q){return true;
}}return false;
},getLength:qx.Bootstrap.objectGetLength,getKeys:qx.Bootstrap.getKeys,getKeysAsString:qx.Bootstrap.getKeysAsString,getValues:function(w){if(qx.core.Variant.isSet(m,k)){qx.core.Assert&&qx.core.Assert.assertMap(w,j);
}var y=[];
var x=this.getKeys(w);

for(var i=0,l=x.length;i<l;i++){y.push(w[x[i]]);
}return y;
},mergeWith:qx.Bootstrap.objectMergeWith,carefullyMergeWith:function(z,A){if(qx.core.Variant.isSet(m,k)){qx.core.Assert&&qx.core.Assert.assertMap(z,f);
qx.core.Assert&&qx.core.Assert.assertMap(A,g);
}return qx.lang.Object.mergeWith(z,A,false);
},merge:function(r,s){if(qx.core.Variant.isSet(m,k)){qx.core.Assert&&qx.core.Assert.assertMap(r,f);
}var t=arguments.length;

for(var i=1;i<t;i++){qx.lang.Object.mergeWith(r,arguments[i]);
}return r;
},clone:function(M){if(qx.core.Variant.isSet(m,k)){qx.core.Assert&&qx.core.Assert.assertMap(M,g);
}var N={};

for(var O in M){N[O]=M[O];
}return N;
},invert:function(B){if(qx.core.Variant.isSet(m,k)){qx.core.Assert&&qx.core.Assert.assertMap(B,j);
}var C={};

for(var D in B){C[B[D].toString()]=D;
}return C;
},getKeyFromValue:function(n,o){if(qx.core.Variant.isSet(m,k)){qx.core.Assert&&qx.core.Assert.assertMap(n,j);
}
for(var p in n){if(n.hasOwnProperty(p)&&n[p]===o){return p;
}}return null;
},contains:function(S,T){if(qx.core.Variant.isSet(m,k)){qx.core.Assert&&qx.core.Assert.assertMap(S,j);
}return this.getKeyFromValue(S,T)!==null;
},select:function(I,J){if(qx.core.Variant.isSet(m,k)){qx.core.Assert&&qx.core.Assert.assertMap(J,j);
}return J[I];
},fromArray:function(E){if(qx.core.Variant.isSet(m,k)){qx.core.Assert&&qx.core.Assert.assertArray(E,d);
}var F={};

for(var i=0,l=E.length;i<l;i++){if(qx.core.Variant.isSet(m,k)){switch(typeof E[i]){case a:case e:case b:throw new Error("Could not convert complex objects like "+E[i]+" at array index "+i+" to map syntax");
}}F[E[i].toString()]=true;
}return F;
}}});
})();
(function(){var e="qx.theme.manager.Icon",d="Theme",c="changeTheme",b="_applyTheme",a="singleton";
qx.Class.define(e,{type:a,extend:qx.core.Object,properties:{theme:{check:d,nullable:true,apply:b,event:c}},members:{_applyTheme:function(f,g){var i=qx.util.AliasManager.getInstance();

if(g){for(var h in g.aliases){i.remove(h);
}}
if(f){for(var h in f.aliases){i.add(h,f.aliases[h]);
}}}}});
})();
(function(){var j="string",i="_applyTheme",h="qx.theme.manager.Appearance",g=":",f="Theme",e="changeTheme",d="/",c="singleton";
qx.Class.define(h,{type:c,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__dF={};
this.__dG={};
},properties:{theme:{check:f,nullable:true,event:e,apply:i}},members:{__dH:{},__dF:null,__dG:null,_applyTheme:function(a,b){this.__dG={};
this.__dF={};
},__dI:function(B,C,D){var H=C.appearances;
var K=H[B];

if(!K){var L=d;
var E=[];
var J=B.split(L);
var I;

while(!K&&J.length>0){E.unshift(J.pop());
var F=J.join(L);
K=H[F];

if(K){I=K.alias||K;

if(typeof I===j){var G=I+L+E.join(L);
return this.__dI(G,C,D);
}}}if(D!=null){return this.__dI(D,C);
}return null;
}else if(typeof K===j){return this.__dI(K,C,D);
}else if(K.include&&!K.style){return this.__dI(K.include,C,D);
}return B;
},styleFrom:function(k,l,m,n){if(!m){m=this.getTheme();
}var t=this.__dG;
var o=t[k];

if(!o){o=t[k]=this.__dI(k,m,n);
}var y=m.appearances[o];

if(!y){this.warn("Missing appearance: "+k);
return null;
}if(!y.style){return null;
}var z=o;

if(l){var A=y.$$bits;

if(!A){A=y.$$bits={};
y.$$length=0;
}var r=0;

for(var u in l){if(!l[u]){continue;
}
if(A[u]==null){A[u]=1<<y.$$length++;
}r+=A[u];
}if(r>0){z+=g+r;
}}var s=this.__dF;

if(s[z]!==undefined){return s[z];
}if(!l){l=this.__dH;
}var w;
if(y.include||y.base){var q=y.style(l);
var p;

if(y.include){p=this.styleFrom(y.include,l,m,n);
}w={};
if(y.base){var v=this.styleFrom(o,l,y.base,n);

if(y.include){for(var x in v){if(!p.hasOwnProperty(x)&&!q.hasOwnProperty(x)){w[x]=v[x];
}}}else{for(var x in v){if(!q.hasOwnProperty(x)){w[x]=v[x];
}}}}if(y.include){for(var x in p){if(!q.hasOwnProperty(x)){w[x]=p[x];
}}}for(var x in q){w[x]=q[x];
}}else{w=y.style(l);
}return s[z]=w||null;
}},destruct:function(){this.__dF=this.__dG=null;
}});
})();
(function(){var u="object",t="qx.debug",s="Theme",r="widgets",q="undefined",p="fonts",o="string",n="colors",m="decorations",k="on",d="meta",j="appearances",g="borders",c="icons",b="other",f="qx.Theme",e="]",h="[Theme ";
qx.Bootstrap.define(f,{statics:{define:function(name,v){if(!v){var v={};
}v.include=this.__qo(v.include);
v.patch=this.__qo(v.patch);
if(qx.core.Variant.isSet(t,k)){this.__qv(name,v);
}var w={$$type:s,name:name,title:v.title,toString:this.genericToString};
if(v.extend){w.supertheme=v.extend;
}w.basename=qx.Bootstrap.createNamespace(name,w);
this.__qr(w,v);
this.__qp(w,v);
this.$$registry[name]=w;
for(var i=0,a=v.include,l=a.length;i<l;i++){this.include(w,a[i]);
}
for(var i=0,a=v.patch,l=a.length;i<l;i++){this.patch(w,a[i]);
}},__qo:function(N){if(!N){return [];
}
if(qx.Bootstrap.isArray(N)){return N;
}else{return [N];
}},__qp:function(x,y){var z=y.aliases||{};

if(y.extend&&y.extend.aliases){qx.Bootstrap.objectMergeWith(z,y.extend.aliases,false);
}x.aliases=z;
},getAll:function(){return this.$$registry;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},genericToString:function(){return h+this.name+e;
},__qq:function(U){for(var i=0,V=this.__qs,l=V.length;i<l;i++){if(U[V[i]]){return V[i];
}}},__qr:function(G,H){var K=this.__qq(H);
if(H.extend&&!K){K=H.extend.type;
}G.type=K||b;
if(!K){return;
}var M=function(){};
if(H.extend){M.prototype=new H.extend.$$clazz;
}var L=M.prototype;
var J=H[K];
for(var I in J){L[I]=J[I];
if(L[I].base){if(qx.core.Variant.isSet(t,k)){if(!H.extend){throw new Error("Found base flag in entry '"+I+"' of theme '"+H.name+"'. Base flags are not allowed for themes without a valid super theme!");
}}L[I].base=H.extend;
}}G.$$clazz=M;
G[K]=new M;
},$$registry:{},__qs:[n,g,m,p,c,r,j,d],__qt:qx.core.Variant.select(t,{"on":{"title":o,"aliases":u,"type":o,"extend":u,"colors":u,"borders":u,"decorations":u,"fonts":u,"icons":u,"widgets":u,"appearances":u,"meta":u,"include":u,"patch":u},"default":null}),__qu:qx.core.Variant.select(t,{"on":{"color":u,"border":u,"decoration":u,"font":u,"icon":u,"appearance":u,"widget":u},"default":null}),__qv:qx.core.Variant.select(t,{"on":function(name,A){var F=this.__qt;

for(var E in A){if(F[E]===undefined){throw new Error('The configuration key "'+E+'" in theme "'+name+'" is not allowed!');
}
if(A[E]==null){throw new Error('Invalid key "'+E+'" in theme "'+name+'"! The value is undefined/null!');
}
if(F[E]!==null&&typeof A[E]!==F[E]){throw new Error('Invalid type of key "'+E+'" in theme "'+name+'"! The type of the key must be "'+F[E]+'"!');
}}var D=[n,g,m,p,c,r,j,d];

for(var i=0,l=D.length;i<l;i++){var E=D[i];

if(A[E]!==undefined&&(A[E] instanceof Array||A[E] instanceof RegExp||A[E] instanceof Date||A[E].classname!==undefined)){throw new Error('Invalid key "'+E+'" in theme "'+name+'"! The value needs to be a map!');
}}var B=0;

for(var i=0,l=D.length;i<l;i++){var E=D[i];

if(A[E]){B++;
}
if(B>1){throw new Error("You can only define one theme category per file! Invalid theme: "+name);
}}if(!A.extend&&B===0){throw new Error("You must define at least one entry in your theme configuration :"+name);
}if(A.meta){var C;

for(var E in A.meta){C=A.meta[E];

if(this.__qu[E]===undefined){throw new Error('The key "'+E+'" is not allowed inside a meta theme block.');
}
if(typeof C!==this.__qu[E]){throw new Error('The type of the key "'+E+'" inside the meta block is wrong.');
}
if(!(typeof C===u&&C!==null&&C.$$type===s)){throw new Error('The content of a meta theme must reference to other themes. The value for "'+E+'" in theme "'+name+'" is invalid: '+C);
}}}if(A.extend&&A.extend.$$type!==s){throw new Error('Invalid extend in theme "'+name+'": '+A.extend);
}if(A.include){for(var i=0,l=A.include.length;i<l;i++){if(typeof (A.include[i])==q||A.include[i].$$type!==s){throw new Error('Invalid include in theme "'+name+'": '+A.include[i]);
}}}if(A.patch){for(var i=0,l=A.patch.length;i<l;i++){if(typeof (A.patch[i])==q||A.patch[i].$$type!==s){throw new Error('Invalid patch in theme "'+name+'": '+A.patch[i]);
}}}},"default":function(){}}),patch:function(W,X){var ba=this.__qq(X);

if(ba!==this.__qq(W)){throw new Error("The mixins '"+W.name+"' are not compatible '"+X.name+"'!");
}var Y=X[ba];
var bb=W.$$clazz.prototype;

for(var bc in Y){bb[bc]=Y[bc];
}},include:function(O,P){var R=P.type;

if(R!==O.type){throw new Error("The mixins '"+O.name+"' are not compatible '"+P.name+"'!");
}var Q=P[R];
var S=O.$$clazz.prototype;

for(var T in Q){if(S[T]!==undefined){continue;
}S[T]=Q[T];
}}}});
})();
(function(){var A="Boolean",z="focusout",y="interval",x="mouseover",w="mouseout",v="mousemove",u="widget",t="Use isShowInvalidToolTips() instead.",s="__qb",r="qx.ui.tooltip.ToolTip",k="Use setShowInvalidToolTips() instead.",q="__qc",n="Use initShowInvalidToolTips() instead.",i="Use resetShowInvalidToolTips() instead.",h="__qe",m="_applyCurrent",l="qx.ui.tooltip.Manager",o="tooltip-error",g="Use toggleShowInvalidToolTips() instead.",p="singleton",j="Use getShowInvalidToolTips() instead.";
qx.Class.define(l,{type:p,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
qx.event.Registration.addListener(document.body,x,this.__ql,this,true);
this.__qb=new qx.event.Timer();
this.__qb.addListener(y,this.__qi,this);
this.__qc=new qx.event.Timer();
this.__qc.addListener(y,this.__qj,this);
this.__qd={left:0,top:0};
},properties:{current:{check:r,nullable:true,apply:m},showInvalidToolTips:{check:A,init:true},showToolTips:{check:A,init:true}},members:{__qd:null,__qc:null,__qb:null,__qe:null,__qf:null,__qg:function(){if(!this.__qe){this.__qe=new qx.ui.tooltip.ToolTip().set({rich:true});
}return this.__qe;
},__qh:function(){if(!this.__qf){this.__qf=new qx.ui.tooltip.ToolTip().set({appearance:o});
this.__qf.syncAppearance();
}return this.__qf;
},_applyCurrent:function(J,K){if(K&&qx.ui.core.Widget.contains(K,J)){return;
}if(K){if(!K.isDisposed()){K.exclude();
}this.__qb.stop();
this.__qc.stop();
}var M=qx.event.Registration;
var L=document.body;
if(J){this.__qb.startWith(J.getShowTimeout());
M.addListener(L,w,this.__qm,this,true);
M.addListener(L,z,this.__qn,this,true);
M.addListener(L,v,this.__qk,this,true);
}else{M.removeListener(L,w,this.__qm,this,true);
M.removeListener(L,z,this.__qn,this,true);
M.removeListener(L,v,this.__qk,this,true);
}},__qi:function(e){var G=this.getCurrent();

if(G&&!G.isDisposed()){this.__qc.startWith(G.getHideTimeout());

if(G.getPlaceMethod()==u){G.placeToWidget(G.getOpener());
}else{G.placeToPoint(this.__qd);
}G.show();
}this.__qb.stop();
},__qj:function(e){var E=this.getCurrent();

if(E&&!E.isDisposed()){E.exclude();
}this.__qc.stop();
this.resetCurrent();
},__qk:function(e){var N=this.__qd;
N.left=e.getDocumentLeft();
N.top=e.getDocumentTop();
},__ql:function(e){var c=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!c){return;
}var d,f,b,a;
while(c!=null){d=c.getToolTip();
f=c.getToolTipText()||null;
b=c.getToolTipIcon()||null;

if(qx.Class.hasInterface(c.constructor,qx.ui.form.IForm)&&!c.isValid()){a=c.getInvalidMessage();
}
if(d||f||b||a){break;
}c=c.getLayoutParent();
}if(!c||
!c.getEnabled()||
c.isBlockToolTip()||
(!a&&!this.getShowToolTips())||(a&&!this.getShowInvalidToolTips())){return;
}
if(a){d=this.__qh().set({label:a});
}
if(!d){d=this.__qg().set({label:f,icon:b});
}this.setCurrent(d);
d.setOpener(c);
},__qm:function(e){var B=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!B){return;
}var C=qx.ui.core.Widget.getWidgetByElement(e.getRelatedTarget());

if(!C){return;
}var D=this.getCurrent();
if(D&&(C==D||qx.ui.core.Widget.contains(D,C))){return;
}if(C&&B&&qx.ui.core.Widget.contains(B,C)){return;
}if(D&&!C){this.setCurrent(null);
}else{this.resetCurrent();
}},__qn:function(e){var H=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!H){return;
}var I=this.getCurrent();
if(I&&I==H.getToolTip()){this.setCurrent(null);
}},setShowInvalidTooltips:function(F){qx.log.Logger.deprecatedMethodWarning(arguments.callee,k);
return this.setShowInvalidToolTips(F);
},getShowInvalidTooltips:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,j);
return this.getShowInvalidToolTips();
},resetShowInvalidTooltips:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,i);
return this.resetShowInvalidToolTips();
},isShowInvalidTooltips:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,t);
return this.isShowInvalidToolTips();
},toggleShowInvalidTooltips:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,g);
return this.toggleShowInvalidToolTips();
},initShowInvalidTooltips:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,n);
return this.initShowInvalidToolTips();
}},destruct:function(){qx.event.Registration.removeListener(document.body,x,this.__ql,this,true);
this._disposeObjects(s,q,h);
this.__qd=null;
}});
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
(function(){var d="qx.ui.core.MChildrenHandling";
qx.Mixin.define(d,{members:{getChildren:function(){return this._getChildren();
},hasChildren:function(){return this._hasChildren();
},indexOf:function(i){return this._indexOf(i);
},add:function(m,n){this._add(m,n);
},addAt:function(a,b,c){this._addAt(a,b,c);
},addBefore:function(e,f,g){this._addBefore(e,f,g);
},addAfter:function(j,k,l){this._addAfter(j,k,l);
},remove:function(h){this._remove(h);
},removeAt:function(p){return this._removeAt(p);
},removeAll:function(){this._removeAll();
}},statics:{remap:function(o){o.getChildren=o._getChildren;
o.hasChildren=o._hasChildren;
o.indexOf=o._indexOf;
o.add=o._add;
o.addAt=o._addAt;
o.addBefore=o._addBefore;
o.addAfter=o._addAfter;
o.remove=o._remove;
o.removeAt=o._removeAt;
o.removeAll=o._removeAll;
}}});
})();
(function(){var a="qx.ui.core.MLayoutHandling";
qx.Mixin.define(a,{members:{setLayout:function(b){return this._setLayout(b);
},getLayout:function(){return this._getLayout();
}},statics:{remap:function(c){c.getLayout=c._getLayout;
c.setLayout=c._setLayout;
}}});
})();
(function(){var v="Integer",u="_applyDimension",t="Boolean",s="_applyStretching",r="_applyMargin",q="shorthand",p="_applyAlign",o="qx.debug",n="on",m="allowShrinkY",R="Wrong 'width' argument. ",Q="Something went wrong with the layout of ",P="bottom",O="Wrong 'left' argument. ",N="baseline",M="marginBottom",L="qx.ui.core.LayoutItem",K="center",J="marginTop",I="!",C="allowGrowX",D="middle",A="marginLeft",B="allowShrinkX",y="top",z="right",w="marginRight",x="abstract",E="Wrong 'top' argument. ",F="Wrong 'height' argument. ",H="allowGrowY",G="left";
qx.Class.define(L,{type:x,extend:qx.core.Object,properties:{minWidth:{check:v,nullable:true,apply:u,init:null,themeable:true},width:{check:v,nullable:true,apply:u,init:null,themeable:true},maxWidth:{check:v,nullable:true,apply:u,init:null,themeable:true},minHeight:{check:v,nullable:true,apply:u,init:null,themeable:true},height:{check:v,nullable:true,apply:u,init:null,themeable:true},maxHeight:{check:v,nullable:true,apply:u,init:null,themeable:true},allowGrowX:{check:t,apply:s,init:true,themeable:true},allowShrinkX:{check:t,apply:s,init:true,themeable:true},allowGrowY:{check:t,apply:s,init:true,themeable:true},allowShrinkY:{check:t,apply:s,init:true,themeable:true},allowStretchX:{group:[C,B],mode:q,themeable:true},allowStretchY:{group:[H,m],mode:q,themeable:true},marginTop:{check:v,init:0,apply:r,themeable:true},marginRight:{check:v,init:0,apply:r,themeable:true},marginBottom:{check:v,init:0,apply:r,themeable:true},marginLeft:{check:v,init:0,apply:r,themeable:true},margin:{group:[J,w,M,A],mode:q,themeable:true},alignX:{check:[G,K,z],nullable:true,apply:p,themeable:true},alignY:{check:[y,D,P,N],nullable:true,apply:p,themeable:true}},members:{__fo:null,__fp:null,__fq:null,__fr:null,__fs:null,__ft:null,__fu:null,getBounds:function(){return this.__ft||this.__fp||null;
},clearSeparators:function(){},renderSeparator:function(bk,bl){},renderLayout:function(bd,top,be,bf){if(qx.core.Variant.isSet(o,n)){var bg=Q+this.toString()+I;
this.assertInteger(bd,O+bg);
this.assertInteger(top,E+bg);
this.assertInteger(be,R+bg);
this.assertInteger(bf,F+bg);
}var bh=null;

if(this.getHeight()==null&&this._hasHeightForWidth()){var bh=this._getHeightForWidth(be);
}
if(bh!=null&&bh!==this.__fo){this.__fo=bh;
qx.ui.core.queue.Layout.add(this);
return null;
}var bj=this.__fp;

if(!bj){bj=this.__fp={};
}var bi={};

if(bd!==bj.left||top!==bj.top){bi.position=true;
bj.left=bd;
bj.top=top;
}
if(be!==bj.width||bf!==bj.height){bi.size=true;
bj.width=be;
bj.height=bf;
}if(this.__fq){bi.local=true;
delete this.__fq;
}
if(this.__fs){bi.margin=true;
delete this.__fs;
}return bi;
},isExcluded:function(){return false;
},hasValidLayout:function(){return !this.__fq;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutCache:function(){this.__fq=true;
this.__fr=null;
},getSizeHint:function(i){var j=this.__fr;

if(j){return j;
}
if(i===false){return null;
}j=this.__fr=this._computeSizeHint();
if(this._hasHeightForWidth()&&this.__fo&&this.getHeight()==null){j.height=this.__fo;
}if(j.minWidth>j.width){j.width=j.minWidth;
}
if(j.maxWidth<j.width){j.width=j.maxWidth;
}
if(!this.getAllowGrowX()){j.maxWidth=j.width;
}
if(!this.getAllowShrinkX()){j.minWidth=j.width;
}if(j.minHeight>j.height){j.height=j.minHeight;
}
if(j.maxHeight<j.height){j.height=j.maxHeight;
}
if(!this.getAllowGrowY()){j.maxHeight=j.height;
}
if(!this.getAllowShrinkY()){j.minHeight=j.height;
}return j;
},_computeSizeHint:function(){var bb=this.getMinWidth()||0;
var X=this.getMinHeight()||0;
var bc=this.getWidth()||bb;
var ba=this.getHeight()||X;
var W=this.getMaxWidth()||Infinity;
var Y=this.getMaxHeight()||Infinity;
return {minWidth:bb,width:bc,maxWidth:W,minHeight:X,height:ba,maxHeight:Y};
},_hasHeightForWidth:function(){var S=this._getLayout();

if(S){return S.hasHeightForWidth();
}return false;
},_getHeightForWidth:function(k){var l=this._getLayout();

if(l&&l.hasHeightForWidth()){return l.getHeightForWidth(k);
}return null;
},_getLayout:function(){return null;
},_applyMargin:function(){this.__fs=true;
var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyAlign:function(){var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyDimension:function(){qx.ui.core.queue.Layout.add(this);
},_applyStretching:function(){qx.ui.core.queue.Layout.add(this);
},hasUserBounds:function(){return !!this.__ft;
},setUserBounds:function(d,top,e,f){this.__ft={left:d,top:top,width:e,height:f};
qx.ui.core.queue.Layout.add(this);
},resetUserBounds:function(){delete this.__ft;
qx.ui.core.queue.Layout.add(this);
},__fv:{},setLayoutProperties:function(T){if(T==null){return;
}var U=this.__fu;

if(!U){U=this.__fu={};
}var parent=this.getLayoutParent();

if(parent){parent.updateLayoutProperties(T);
}for(var V in T){if(T[V]==null){delete U[V];
}else{U[V]=T[V];
}}},getLayoutProperties:function(){return this.__fu||this.__fv;
},clearLayoutProperties:function(){delete this.__fu;
},updateLayoutProperties:function(a){var b=this._getLayout();

if(b){if(qx.core.Variant.isSet(o,n)){if(a){for(var c in a){if(a[c]!==null){b.verifyLayoutProperty(this,c,a[c]);
}}}}b.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
},getApplicationRoot:function(){return qx.core.Init.getApplication().getRoot();
},getLayoutParent:function(){return this.$$parent||null;
},setLayoutParent:function(parent){if(this.$$parent===parent){return;
}this.$$parent=parent||null;
qx.ui.core.queue.Visibility.add(this);
},isRootWidget:function(){return false;
},_getRoot:function(){var parent=this;

while(parent){if(parent.isRootWidget()){return parent;
}parent=parent.$$parent;
}return null;
},clone:function(){var g=qx.core.Object.prototype.clone.call(this);
var h=this.__fu;

if(h){g.__fu=qx.lang.Object.clone(h);
}return g;
}},destruct:function(){this.$$parent=this.$$subparent=this.__fu=this.__fp=this.__ft=this.__fr=null;
}});
})();
(function(){var k="qx.debug",j="qx.ui.core.DecoratorFactory",i="qxType",h="",g="decorator",f="$$nopool$$",e="qx.ui.core.DecoratorFactory[",d="] ",c="on",b="keys: ",a=", elements: ";
qx.Class.define(j,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__cO={};
},statics:{MAX_SIZE:15,__cP:f},members:{__cO:null,getDecoratorElement:function(q){var v=qx.ui.core.DecoratorFactory;

if(qx.lang.Type.isString(q)){var t=q;
var s=qx.theme.manager.Decoration.getInstance().resolve(q);
}else{var t=v.__cP;
s=q;
}var u=this.__cO;

if(u[t]&&u[t].length>0){var r=u[t].pop();
}else{var r=this._createDecoratorElement(s,t);
}r.$$pooled=false;
return r;
},poolDecorator:function(z){if(!z||z.$$pooled||z.isDisposed()){return;
}var C=qx.ui.core.DecoratorFactory;
var A=z.getId();

if(A==C.__cP){z.dispose();
return;
}var B=this.__cO;

if(!B[A]){B[A]=[];
}
if(B[A].length>C.MAX_SIZE){z.dispose();
}else{z.$$pooled=true;
B[A].push(z);
}},_createDecoratorElement:function(l,m){var n=new qx.html.Decorator(l,m);

if(qx.core.Variant.isSet(k,c)){n.setAttribute(i,g);
}return n;
},toString:qx.core.Variant.select(k,{"on":function(){var w=0;
var x=0;

for(var y in this.__cO){w+=1;
x+=this.__cO[y].length;
}return [e,this.$$hash,d,b,w,a,x].join(h);
},"off":function(){return qx.core.Object.prototype.toString.call(this);
}})},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){var p=this.__cO;

for(var o in p){qx.util.DisposeUtil.disposeArray(p,o);
}}this.__cO=null;
}});
})();
(function(){var dM="on",dL="px",dK="qx.debug",dJ="Boolean",dI="qx.event.type.Mouse",dH="qx.event.type.Drag",dG="visible",dF="qx.event.type.Focus",dE="Integer",dD="excluded",cS="qx.event.type.Data",cR="_applyPadding",cQ="qx.event.type.Event",cP="hidden",cO="contextmenu",cN="String",cM="tabIndex",cL="backgroundColor",cK="focused",cJ="changeVisibility",dT="mshtml",dU="hovered",dR="qx.event.type.KeySequence",dS="qx.client",dP="absolute",dQ="drag",dN="div",dO="object",dV="disabled",dW="move",ds="dragstart",dr="qx.dynlocale",du="dragchange",dt="dragend",dw="resize",dv="Decorator",dy="zIndex",dx="opacity",dq="default",dp="Color",bA="qxType",bB="changeToolTipText",bC="beforeContextmenuOpen",bD="_applyNativeContextMenu",bE="content",bF="_applyBackgroundColor",bG="_applyFocusable",bH="changeShadow",bI="qx.event.type.KeyInput",bJ="__dX",eb="createChildControl",ea="__dP",dY="Invalid left decorator inset detected: ",dX="Font",ef="_applyShadow",ee="Invalid layout data: ",ed="Could not add widget to itself: ",ec="_applyEnabled",eh="_applySelectable",eg="Number",cj="_applyKeepActive",ck="_applyVisibility",ch="The 'after' widget is not a child of this widget!",ci="repeat",cn="qxDraggable",co="syncAppearance",cl="__dO",cm="paddingLeft",cf="_applyDroppable",cg="Wrong 'left' argument. ",bR="protector",bQ="#",bT="qx.event.type.MouseWheel",bS="_applyCursor",bN="_applyDraggable",bM="__dL",bP="changeTextColor",bO="$$widget",bL="changeContextMenu",bK="paddingTop",ct="changeSelectable",cu="hideFocus",cv="Invalid top decorator inset detected: ",cw="none",cp="__dT",cq="outline",cr="The 'before' widget is not a child of this widget!",cs="_applyAppearance",cx=" returned an invalid size hint!",cy="_applyOpacity",cc="url(",cb=")",ca="qx.ui.core.Widget",bY="minHeight is larger than maxHeight!",bX="_applyFont",bW="cursor",bV="qxDroppable",bU="changeZIndex",ce="changeEnabled",cd="changeFont",cz="__dK",cA="_applyDecorator",cB="_applyZIndex",cC="_applyTextColor",cD="qx.ui.menu.Menu",cE="Invalid right decorator inset detected: ",cF="Invalid widget to add: ",cG="_applyToolTipText",cH="The layout of the widget",cI="true",cW="widget",cV="Wrong 'top' argument. ",cU="changeDecorator",cT="__dV",db="changeBackgroundColor",da="_applyTabIndex",cY="Invalid bottom decorator inset detected: ",cX="changeAppearance",dd="shorthand",dc="/",dk="",dl="_applyContextMenu",di="container",dj="paddingBottom",dg="__dQ",dh="changeNativeContextMenu",de="qx.ui.tooltip.ToolTip",df="qxKeepActive",dm="_applyKeepFocus",dn="paddingRight",dA="minWidth is larger than maxWidth!",dz="changeLocale",dC="qxKeepFocus",dB="qx/static/blank.gif";
qx.Class.define(ca,{extend:qx.ui.core.LayoutItem,include:[qx.locale.MTranslation],construct:function(){qx.ui.core.LayoutItem.call(this);
this.__dK=this._createContainerElement();
this.__dL=this.__dW();
this.__dK.add(this.__dL);
this.initFocusable();
this.initSelectable();
this.initNativeContextMenu();
},events:{appear:cQ,disappear:cQ,createChildControl:cS,resize:cS,move:cS,syncAppearance:cS,mousemove:dI,mouseover:dI,mouseout:dI,mousedown:dI,mouseup:dI,click:dI,dblclick:dI,contextmenu:dI,beforeContextmenuOpen:dI,mousewheel:bT,keyup:dR,keydown:dR,keypress:dR,keyinput:bI,focus:dF,blur:dF,focusin:dF,focusout:dF,activate:dF,deactivate:dF,capture:cQ,losecapture:cQ,drop:dH,dragleave:dH,dragover:dH,drag:dH,dragstart:dH,dragend:dH,dragchange:dH,droprequest:dH},properties:{paddingTop:{check:dE,init:0,apply:cR,themeable:true},paddingRight:{check:dE,init:0,apply:cR,themeable:true},paddingBottom:{check:dE,init:0,apply:cR,themeable:true},paddingLeft:{check:dE,init:0,apply:cR,themeable:true},padding:{group:[bK,dn,dj,cm],mode:dd,themeable:true},zIndex:{nullable:true,init:null,apply:cB,event:bU,check:dE,themeable:true},decorator:{nullable:true,init:null,apply:cA,event:cU,check:dv,themeable:true},shadow:{nullable:true,init:null,apply:ef,event:bH,check:dv,themeable:true},backgroundColor:{nullable:true,check:dp,apply:bF,event:db,themeable:true},textColor:{nullable:true,check:dp,apply:cC,event:bP,themeable:true,inheritable:true},font:{nullable:true,apply:bX,check:dX,event:cd,themeable:true,inheritable:true,dereference:true},opacity:{check:eg,apply:cy,themeable:true,nullable:true,init:null},cursor:{check:cN,apply:bS,themeable:true,inheritable:true,nullable:true,init:null},toolTip:{check:de,nullable:true},toolTipText:{check:cN,nullable:true,event:bB,apply:cG},toolTipIcon:{check:cN,nullable:true,event:bB},blockToolTip:{check:dJ,init:false},visibility:{check:[dG,cP,dD],init:dG,apply:ck,event:cJ},enabled:{init:true,check:dJ,inheritable:true,apply:ec,event:ce},anonymous:{init:false,check:dJ},tabIndex:{check:dE,nullable:true,apply:da},focusable:{check:dJ,init:false,apply:bG},keepFocus:{check:dJ,init:false,apply:dm},keepActive:{check:dJ,init:false,apply:cj},draggable:{check:dJ,init:false,apply:bN},droppable:{check:dJ,init:false,apply:cf},selectable:{check:dJ,init:false,event:ct,apply:eh},contextMenu:{check:cD,apply:dl,nullable:true,event:bL},nativeContextMenu:{check:dJ,init:false,themeable:true,event:dh,apply:bD},appearance:{check:cN,init:cW,apply:cs,event:cX}},statics:{DEBUG:false,getWidgetByElement:function(ey){while(ey){var ez=ey.$$widget;
if(ez!=null){return qx.core.ObjectRegistry.fromHashCode(ez);
}try{ey=ey.parentNode;
}catch(e){return null;
}}return null;
},contains:function(parent,gY){while(gY){if(parent==gY){return true;
}gY=gY.getLayoutParent();
}return false;
},__dM:new qx.ui.core.DecoratorFactory(),__dN:new qx.ui.core.DecoratorFactory()},members:{__dK:null,__dL:null,__dO:null,__dP:null,__dQ:null,__dR:null,__dS:null,__dT:null,_getLayout:function(){return this.__dT;
},_setLayout:function(C){if(qx.core.Variant.isSet(dK,dM)){if(C){this.assertInstance(C,qx.ui.layout.Abstract);
}}
if(this.__dT){this.__dT.connectToWidget(null);
}
if(C){C.connectToWidget(this);
}this.__dT=C;
qx.ui.core.queue.Layout.add(this);
},setLayoutParent:function(parent){if(this.$$parent===parent){return;
}var w=this.getContainerElement();

if(this.$$parent&&!this.$$parent.$$disposed){this.$$parent.getContentElement().remove(w);
}this.$$parent=parent||null;

if(parent&&!parent.$$disposed){this.$$parent.getContentElement().add(w);
}this.$$refreshInheritables();
qx.ui.core.queue.Visibility.add(this);
},_updateInsets:null,__dU:function(a,b){if(a==b){return false;
}
if(a==null||b==null){return true;
}var hm=qx.theme.manager.Decoration.getInstance();
var ho=hm.resolve(a).getInsets();
var hn=hm.resolve(b).getInsets();

if(ho.top!=hn.top||ho.right!=hn.right||ho.bottom!=hn.bottom||ho.left!=hn.left){return true;
}return false;
},renderLayout:function(eX,top,eY,fa){var fj=qx.ui.core.LayoutItem.prototype.renderLayout.call(this,eX,top,eY,fa);
if(!fj){return;
}var fc=this.getContainerElement();
var content=this.getContentElement();
var fg=fj.size||this._updateInsets;
var fk=dL;
var fh={};
if(fj.position){fh.left=eX+fk;
fh.top=top+fk;
}if(fj.size){fh.width=eY+fk;
fh.height=fa+fk;
}
if(fj.position||fj.size){fc.setStyles(fh);
}
if(fg||fj.local||fj.margin){var fb=this.getInsets();
var innerWidth=eY-fb.left-fb.right;
var innerHeight=fa-fb.top-fb.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}var fe={};

if(this._updateInsets){fe.left=fb.left+fk;
fe.top=fb.top+fk;
}
if(fg){fe.width=innerWidth+fk;
fe.height=innerHeight+fk;
}
if(fg||this._updateInsets){content.setStyles(fe);
}
if(fj.size){var fi=this.__dQ;

if(fi){fi.setStyles({width:eY+dL,height:fa+dL});
}}
if(fj.size||this._updateInsets){if(this.__dO){this.__dO.resize(eY,fa);
}}
if(fj.size){if(this.__dP){var fb=this.__dP.getInsets();
var ff=eY+fb.left+fb.right;
var fd=fa+fb.top+fb.bottom;
this.__dP.resize(ff,fd);
}}
if(fg||fj.local||fj.margin){if(this.__dT&&this.hasLayoutChildren()){this.__dT.renderLayout(innerWidth,innerHeight);
}else if(this.hasLayoutChildren()){throw new Error("At least one child in control "+this._findTopControl()+" requires a layout, but no one was defined!");
}}if(fj.position&&this.hasListener(dW)){this.fireDataEvent(dW,this.getBounds());
}
if(fj.size&&this.hasListener(dw)){this.fireDataEvent(dw,this.getBounds());
}delete this._updateInsets;
return fj;
},__dV:null,clearSeparators:function(){var gW=this.__dV;

if(!gW){return;
}var gX=qx.ui.core.Widget.__dM;
var content=this.getContentElement();
var gV;

for(var i=0,l=gW.length;i<l;i++){gV=gW[i];
gX.poolDecorator(gV);
content.remove(gV);
}gW.length=0;
},renderSeparator:function(fN,fO){var fP=qx.ui.core.Widget.__dM.getDecoratorElement(fN);
this.getContentElement().add(fP);
fP.resize(fO.width,fO.height);
fP.setStyles({left:fO.left+dL,top:fO.top+dL});
if(!this.__dV){this.__dV=[fP];
}else{this.__dV.push(fP);
}},_computeSizeHint:function(){var bc=this.getWidth();
var bb=this.getMinWidth();
var W=this.getMaxWidth();
var ba=this.getHeight();
var X=this.getMinHeight();
var Y=this.getMaxHeight();

if(qx.core.Variant.isSet(dK,dM)){if(bb!==null&&W!==null){this.assert(bb<=W,dA);
}
if(X!==null&&Y!==null){this.assert(X<=Y,bY);
}}var bd=this._getContentHint();
var V=this.getInsets();
var bf=V.left+V.right;
var be=V.top+V.bottom;

if(bc==null){bc=bd.width+bf;
}
if(ba==null){ba=bd.height+be;
}
if(bb==null){bb=bf;

if(bd.minWidth!=null){bb+=bd.minWidth;
}}
if(X==null){X=be;

if(bd.minHeight!=null){X+=bd.minHeight;
}}
if(W==null){if(bd.maxWidth==null){W=Infinity;
}else{W=bd.maxWidth+bf;
}}
if(Y==null){if(bd.maxHeight==null){Y=Infinity;
}else{Y=bd.maxHeight+be;
}}return {width:bc,minWidth:bb,maxWidth:W,height:ba,minHeight:X,maxHeight:Y};
},invalidateLayoutCache:function(){qx.ui.core.LayoutItem.prototype.invalidateLayoutCache.call(this);

if(this.__dT){this.__dT.invalidateLayoutCache();
}},_getContentHint:function(){var gs=this.__dT;

if(gs){if(this.hasLayoutChildren()){var gt=gs.getSizeHint();

if(qx.core.Variant.isSet(dK,dM)){var gr=cH+this.toString()+cx;
this.assertInteger(gt.width,cg+gr);
this.assertInteger(gt.height,cV+gr);
}return gt;
}else{return {width:0,height:0};
}}else{return {width:100,height:50};
}},_getHeightForWidth:function(gu){var gy=this.getInsets();
var gB=gy.left+gy.right;
var gA=gy.top+gy.bottom;
var gz=gu-gB;
var gw=this._getLayout();

if(gw&&gw.hasHeightForWidth()){var gv=gw.getHeightForWidth(gu);
}else{gv=this._getContentHeightForWidth(gz);
}var gx=gv+gA;
return gx;
},_getContentHeightForWidth:function(x){throw new Error("Abstract method call: _getContentHeightForWidth()!");
},getInsets:function(){var top=this.getPaddingTop();
var M=this.getPaddingRight();
var O=this.getPaddingBottom();
var N=this.getPaddingLeft();

if(this.__dO){var L=this.__dO.getInsets();

if(qx.core.Variant.isSet(dK,dM)){this.assertNumber(L.top,cv+L.top);
this.assertNumber(L.right,cE+L.right);
this.assertNumber(L.bottom,cY+L.bottom);
this.assertNumber(L.left,dY+L.left);
}top+=L.top;
M+=L.right;
O+=L.bottom;
N+=L.left;
}return {"top":top,"right":M,"bottom":O,"left":N};
},getInnerSize:function(){var B=this.getBounds();

if(!B){return null;
}var A=this.getInsets();
return {width:B.width-A.left-A.right,height:B.height-A.top-A.bottom};
},show:function(){this.setVisibility(dG);
},hide:function(){this.setVisibility(cP);
},exclude:function(){this.setVisibility(dD);
},isVisible:function(){return this.getVisibility()===dG;
},isHidden:function(){return this.getVisibility()!==dG;
},isExcluded:function(){return this.getVisibility()===dD;
},isSeeable:function(){var bz=this.getContainerElement().getDomElement();

if(bz){return bz.offsetWidth>0;
}var by=this;

do{if(!by.isVisible()){return false;
}
if(by.isRootWidget()){return true;
}by=by.getLayoutParent();
}while(by);
return false;
},_createContainerElement:function(){var fM={"$$widget":this.toHashCode()};

if(qx.core.Variant.isSet(dK,dM)){fM.qxType=di;
fM.qxClass=this.classname;
}var fL={zIndex:0,position:dP};
return new qx.html.Element(dN,fL,fM);
},__dW:function(){var U=this._createContentElement();

if(qx.core.Variant.isSet(dK,dM)){U.setAttribute(bA,bE);
}U.setStyles({"position":dP,"zIndex":10});
return U;
},_createContentElement:function(){return new qx.html.Element(dN,{overflowX:cP,overflowY:cP});
},getContainerElement:function(){return this.__dK;
},getContentElement:function(){return this.__dL;
},getDecoratorElement:function(){return this.__dO||null;
},getShadowElement:function(){return this.__dP||null;
},__dX:null,getLayoutChildren:function(){var F=this.__dX;

if(!F){return this.__dY;
}var G;

for(var i=0,l=F.length;i<l;i++){var E=F[i];

if(E.hasUserBounds()||E.isExcluded()){if(G==null){G=F.concat();
}qx.lang.Array.remove(G,E);
}}return G||F;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutChildren:function(){var D=this.__dT;

if(D){D.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
},hasLayoutChildren:function(){var s=this.__dX;

if(!s){return false;
}var t;

for(var i=0,l=s.length;i<l;i++){t=s[i];

if(!t.hasUserBounds()&&!t.isExcluded()){return true;
}}return false;
},getChildrenContainer:function(){return this;
},__dY:[],_getChildren:function(){return this.__dX||this.__dY;
},_indexOf:function(eJ){var eK=this.__dX;

if(!eK){return -1;
}return eK.indexOf(eJ);
},_hasChildren:function(){var ex=this.__dX;
return ex!=null&&(!!ex[0]);
},addChildrenToQueue:function(fw){var fx=this.__dX;

if(!fx){return;
}var fy;

for(var i=0,l=fx.length;i<l;i++){fy=fx[i];
fw[fy.$$hash]=fy;
fy.addChildrenToQueue(fw);
}},_add:function(eO,eP){if(eO.getLayoutParent()==this){qx.lang.Array.remove(this.__dX,eO);
}
if(this.__dX){this.__dX.push(eO);
}else{this.__dX=[eO];
}this.__ea(eO,eP);
},_addAt:function(fn,fo,fp){if(!this.__dX){this.__dX=[];
}if(fn.getLayoutParent()==this){qx.lang.Array.remove(this.__dX,fn);
}var fq=this.__dX[fo];

if(fq===fn){return fn.setLayoutProperties(fp);
}
if(fq){qx.lang.Array.insertBefore(this.__dX,fn,fq);
}else{this.__dX.push(fn);
}this.__ea(fn,fp);
},_addBefore:function(hj,hk,hl){if(qx.core.Variant.isSet(dK,dM)){this.assertInArray(hk,this._getChildren(),cr);
}
if(hj==hk){return;
}
if(!this.__dX){this.__dX=[];
}if(hj.getLayoutParent()==this){qx.lang.Array.remove(this.__dX,hj);
}qx.lang.Array.insertBefore(this.__dX,hj,hk);
this.__ea(hj,hl);
},_addAfter:function(p,q,r){if(qx.core.Variant.isSet(dK,dM)){this.assertInArray(q,this._getChildren(),ch);
}
if(p==q){return;
}
if(!this.__dX){this.__dX=[];
}if(p.getLayoutParent()==this){qx.lang.Array.remove(this.__dX,p);
}qx.lang.Array.insertAfter(this.__dX,p,q);
this.__ea(p,r);
},_remove:function(S){if(!this.__dX){throw new Error("This widget has no children!");
}qx.lang.Array.remove(this.__dX,S);
this.__eb(S);
},_removeAt:function(gC){if(!this.__dX){throw new Error("This widget has no children!");
}var gD=this.__dX[gC];
qx.lang.Array.removeAt(this.__dX,gC);
this.__eb(gD);
return gD;
},_removeAll:function(){if(!this.__dX){return;
}var fH=this.__dX.concat();
this.__dX.length=0;

for(var i=fH.length-1;i>=0;i--){this.__eb(fH[i]);
}qx.ui.core.queue.Layout.add(this);
},_afterAddChild:null,_afterRemoveChild:null,__ea:function(gN,gO){if(qx.core.Variant.isSet(dK,dM)){this.assertInstance(gN,qx.ui.core.LayoutItem,cF+gN);
this.assertNotIdentical(gN,this,ed+gN);

if(gO!=null){this.assertType(gO,dO,ee+gO);
}}var parent=gN.getLayoutParent();

if(parent&&parent!=this){parent._remove(gN);
}gN.setLayoutParent(this);
if(gO){gN.setLayoutProperties(gO);
}else{this.updateLayoutProperties();
}if(this._afterAddChild){this._afterAddChild(gN);
}},__eb:function(fU){if(qx.core.Variant.isSet(dK,dM)){this.assertNotUndefined(fU);
}
if(fU.getLayoutParent()!==this){throw new Error("Remove Error: "+fU+" is not a child of this widget!");
}fU.setLayoutParent(null);
if(this.__dT){this.__dT.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
if(this._afterRemoveChild){this._afterRemoveChild(fU);
}},capture:function(R){this.getContainerElement().capture(R);
},releaseCapture:function(){this.getContainerElement().releaseCapture();
},_applyPadding:function(hd,he,name){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
},_createProtectorElement:function(){if(this.__dQ){return;
}var H=this.__dQ=new qx.html.Element;

if(qx.core.Variant.isSet(dK,dM)){H.setAttribute(bA,bR);
}H.setStyles({position:dP,top:0,left:0,zIndex:7});
var I=this.getBounds();

if(I){this.__dQ.setStyles({width:I.width+dL,height:I.height+dL});
}if(qx.core.Variant.isSet(dS,dT)){H.setStyles({backgroundImage:cc+qx.util.ResourceManager.getInstance().toUri(dB)+cb,backgroundRepeat:ci});
}this.getContainerElement().add(H);
},_applyDecorator:function(fX,fY){if(qx.core.Variant.isSet(dK,dM)){if(fX&&typeof fX===dO){if(qx.ui.core.Widget.DEBUG){this.warn("Decorator instances may increase memory usage and processing time. Often it is better to lay them out to a theme file. Hash code of decorator object: "+fX);
}}}var gd=qx.ui.core.Widget.__dM;
var gb=this.getContainerElement();
if(!this.__dQ&&!qx.bom.client.Feature.CSS_POINTER_EVENTS){this._createProtectorElement();
}if(fY){gb.remove(this.__dO);
gd.poolDecorator(this.__dO);
}if(fX){var gc=this.__dO=gd.getDecoratorElement(fX);
gc.setStyle(dy,5);
var ga=this.getBackgroundColor();
gc.tint(ga);
gb.add(gc);
}else{delete this.__dO;
this._applyBackgroundColor(this.getBackgroundColor());
}if(fX&&!fY&&ga){this.getContainerElement().setStyle(cL,null);
}if(this.__dU(fY,fX)){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
}else if(fX){var ge=this.getBounds();

if(ge){gc.resize(ge.width,ge.height);
this.__dQ&&
this.__dQ.setStyles({width:ge.width+dL,height:ge.height+dL});
}}},_applyShadow:function(bp,bq){var bx=qx.ui.core.Widget.__dN;
var bs=this.getContainerElement();
if(bq){bs.remove(this.__dP);
bx.poolDecorator(this.__dP);
}if(bp){var bu=this.__dP=bx.getDecoratorElement(bp);
bs.add(bu);
var bw=bu.getInsets();
bu.setStyles({left:(-bw.left)+dL,top:(-bw.top)+dL});
var bv=this.getBounds();

if(bv){var bt=bv.width+bw.left+bw.right;
var br=bv.height+bw.top+bw.bottom;
bu.resize(bt,br);
}bu.tint(null);
}else{delete this.__dP;
}},_applyToolTipText:function(gK,gL){if(qx.core.Variant.isSet(dr,dM)){if(this.__dS){return;
}var gM=qx.locale.Manager.getInstance();
this.__dS=gM.addListener(dz,function(){if(gK&&gK.translate){this.setToolTipText(gK.translate());
}},this);
}},_applyTextColor:function(fD,fE){},_applyZIndex:function(u,v){this.getContainerElement().setStyle(dy,u==null?0:u);
},_applyVisibility:function(ei,ej){var ek=this.getContainerElement();

if(ei===dG){ek.show();
}else{ek.hide();
}var parent=this.$$parent;

if(parent&&(ej==null||ei==null||ej===dD||ei===dD)){parent.invalidateLayoutChildren();
}qx.ui.core.queue.Visibility.add(this);
},_applyOpacity:function(fI,fJ){this.getContainerElement().setStyle(dx,fI==1?null:fI);
if(qx.core.Variant.isSet(dS,dT)&&qx.bom.element.Decoration.isAlphaImageLoaderEnabled()){if(!qx.Class.isSubClassOf(this.getContentElement().constructor,qx.html.Image)){var fK=(fI==1||fI==null)?null:0.99;
this.getContentElement().setStyle(dx,fK);
}}},_applyCursor:function(eH,eI){if(eH==null&&!this.isSelectable()){eH=dq;
}this.getContainerElement().setStyle(bW,eH,qx.bom.client.Engine.OPERA);
},_applyBackgroundColor:function(gk,gl){var gm=this.getBackgroundColor();
var go=this.getContainerElement();

if(this.__dO){this.__dO.tint(gm);
go.setStyle(cL,null);
}else{var gn=qx.theme.manager.Color.getInstance().resolve(gm);
go.setStyle(cL,gn);
}},_applyFont:function(fr,fs){},__ec:null,$$stateChanges:null,_forwardStates:null,hasState:function(eM){var eN=this.__ec;
return !!eN&&!!eN[eM];
},addState:function(eA){var eB=this.__ec;

if(!eB){eB=this.__ec={};
}
if(eB[eA]){return;
}this.__ec[eA]=true;
if(eA===dU){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var eE=this.__ef;

if(forward&&forward[eA]&&eE){var eC;

for(var eD in eE){eC=eE[eD];

if(eC instanceof qx.ui.core.Widget){eE[eD].addState(eA);
}}}},removeState:function(bg){var bh=this.__ec;

if(!bh||!bh[bg]){return;
}delete this.__ec[bg];
if(bg===dU){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var bk=this.__ef;

if(forward&&forward[bg]&&bk){for(var bj in bk){var bi=bk[bj];

if(bi instanceof qx.ui.core.Widget){bi.removeState(bg);
}}}},replaceState:function(em,en){var eo=this.__ec;

if(!eo){eo=this.__ec={};
}
if(!eo[en]){eo[en]=true;
}
if(eo[em]){delete eo[em];
}
if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var er=this.__ef;

if(forward&&forward[en]&&er){for(var eq in er){var ep=er[eq];

if(ep instanceof qx.ui.core.Widget){ep.replaceState(em,en);
}}}},__ed:null,__ee:null,syncAppearance:function(){var h=this.__ec;
var g=this.__ed;
var j=qx.theme.manager.Appearance.getInstance();
var d=qx.core.Property.$$method.setThemed;
var o=qx.core.Property.$$method.resetThemed;
if(this.__ee){delete this.__ee;
if(g){var c=j.styleFrom(g,h,null,this.getAppearance());
if(c){g=null;
}}}if(!g){var f=this;
var n=[];

do{n.push(f.$$subcontrol||f.getAppearance());
}while(f=f.$$subparent);
g=this.__ed=n.reverse().join(dc).replace(/#[0-9]+/g,dk);
}var k=j.styleFrom(g,h,null,this.getAppearance());

if(k){if(c){for(var m in c){if(k[m]===undefined){this[o[m]]();
}}}if(qx.core.Variant.isSet(dK,dM)){for(var m in k){if(!this[d[m]]){throw new Error(this.classname+' has no themeable property "'+m+'" while styling '+g);
}}}for(var m in k){k[m]===undefined?this[o[m]]():this[d[m]](k[m]);
}}else if(c){for(var m in c){this[o[m]]();
}}this.fireDataEvent(co,this.__ec);
},_applyAppearance:function(gE,gF){this.updateAppearance();
},checkAppearanceNeeds:function(){if(!this.__dR){qx.ui.core.queue.Appearance.add(this);
this.__dR=true;
}else if(this.$$stateChanges){qx.ui.core.queue.Appearance.add(this);
delete this.$$stateChanges;
}},updateAppearance:function(){this.__ee=true;
qx.ui.core.queue.Appearance.add(this);
var fS=this.__ef;

if(fS){var fQ;

for(var fR in fS){fQ=fS[fR];

if(fQ instanceof qx.ui.core.Widget){fQ.updateAppearance();
}}}},syncWidget:function(){},getEventTarget:function(){var fT=this;

while(fT.getAnonymous()){fT=fT.getLayoutParent();

if(!fT){return null;
}}return fT;
},getFocusTarget:function(){var T=this;

if(!T.getEnabled()){return null;
}
while(T.getAnonymous()||!T.getFocusable()){T=T.getLayoutParent();

if(!T||!T.getEnabled()){return null;
}}return T;
},getFocusElement:function(){return this.getContainerElement();
},isTabable:function(){return (!!this.getContainerElement().getDomElement())&&this.isFocusable();
},_applyFocusable:function(fz,fA){var fB=this.getFocusElement();
if(fz){var fC=this.getTabIndex();

if(fC==null){fC=1;
}fB.setAttribute(cM,fC);
if(qx.core.Variant.isSet(dS,dT)){fB.setAttribute(cu,cI);
}else{fB.setStyle(cq,cw);
}}else{if(fB.isNativelyFocusable()){fB.setAttribute(cM,-1);
}else if(fA){fB.setAttribute(cM,null);
}}},_applyKeepFocus:function(hh){var hi=this.getFocusElement();
hi.setAttribute(dC,hh?dM:null);
},_applyKeepActive:function(ev){var ew=this.getContainerElement();
ew.setAttribute(df,ev?dM:null);
},_applyTabIndex:function(hg){if(hg==null){hg=1;
}else if(hg<1||hg>32000){throw new Error("TabIndex property must be between 1 and 32000");
}
if(this.getFocusable()&&hg!=null){this.getFocusElement().setAttribute(cM,hg);
}},_applySelectable:function(eV,eW){if(eW!==null){this._applyCursor(this.getCursor());
}this.getContainerElement().setSelectable(eV);
this.getContentElement().setSelectable(eV);
},_applyEnabled:function(bn,bo){if(bn===false){this.addState(dV);
this.removeState(dU);
if(this.isFocusable()){this.removeState(cK);
this._applyFocusable(false,true);
}if(this.isDraggable()){this._applyDraggable(false,true);
}if(this.isDroppable()){this._applyDroppable(false,true);
}}else{this.removeState(dV);
if(this.isFocusable()){this._applyFocusable(true,false);
}if(this.isDraggable()){this._applyDraggable(true,false);
}if(this.isDroppable()){this._applyDroppable(true,false);
}}},_applyNativeContextMenu:function(J,K,name){},_applyContextMenu:function(gp,gq){if(gq){gq.removeState(cO);

if(gq.getOpener()==this){gq.resetOpener();
}
if(!gp){this.removeListener(cO,this._onContextMenuOpen);
gq.removeListener(cJ,this._onBeforeContextMenuOpen,this);
}}
if(gp){gp.setOpener(this);
gp.addState(cO);

if(!gq){this.addListener(cO,this._onContextMenuOpen);
gp.addListener(cJ,this._onBeforeContextMenuOpen,this);
}}},_onContextMenuOpen:function(e){this.getContextMenu().openAtMouse(e);
e.stop();
},_onBeforeContextMenuOpen:function(e){if(e.getData()==dG&&this.hasListener(bC)){this.fireDataEvent(bC,e);
}},_onStopEvent:function(e){e.stopPropagation();
},_applyDraggable:function(fF,fG){if(!this.isEnabled()&&fF===true){fF=false;
}qx.ui.core.DragDropCursor.getInstance();
if(fF){this.addListener(ds,this._onDragStart);
this.addListener(dQ,this._onDrag);
this.addListener(dt,this._onDragEnd);
this.addListener(du,this._onDragChange);
}else{this.removeListener(ds,this._onDragStart);
this.removeListener(dQ,this._onDrag);
this.removeListener(dt,this._onDragEnd);
this.removeListener(du,this._onDragChange);
}this.getContainerElement().setAttribute(cn,fF?dM:null);
},_applyDroppable:function(hr,hs){if(!this.isEnabled()&&hr===true){hr=false;
}this.getContainerElement().setAttribute(bV,hr?dM:null);
},_onDragStart:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
this.getApplicationRoot().setGlobalCursor(dq);
},_onDrag:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
},_onDragEnd:function(e){qx.ui.core.DragDropCursor.getInstance().moveTo(-1000,-1000);
this.getApplicationRoot().resetGlobalCursor();
},_onDragChange:function(e){var eT=qx.ui.core.DragDropCursor.getInstance();
var eU=e.getCurrentAction();
eU?eT.setAction(eU):eT.resetAction();
},visualizeFocus:function(){this.addState(cK);
},visualizeBlur:function(){this.removeState(cK);
},scrollChildIntoView:function(gG,gH,gI,gJ){this.scrollChildIntoViewX(gG,gH,gJ);
this.scrollChildIntoViewY(gG,gI,gJ);
},scrollChildIntoViewX:function(es,et,eu){this.getContentElement().scrollChildIntoViewX(es.getContainerElement(),et,eu);
},scrollChildIntoViewY:function(eQ,eR,eS){this.getContentElement().scrollChildIntoViewY(eQ.getContainerElement(),eR,eS);
},focus:function(){if(this.isFocusable()){this.getFocusElement().focus();
}else{throw new Error("Widget is not focusable!");
}},blur:function(){if(this.isFocusable()){this.getFocusElement().blur();
}else{throw new Error("Widget is not focusable!");
}},activate:function(){this.getContainerElement().activate();
},deactivate:function(){this.getContainerElement().deactivate();
},tabFocus:function(){this.getFocusElement().focus();
},hasChildControl:function(ha){if(!this.__ef){return false;
}return !!this.__ef[ha];
},__ef:null,_getCreatedChildControls:function(){return this.__ef;
},getChildControl:function(ft,fu){if(!this.__ef){if(fu){return null;
}this.__ef={};
}var fv=this.__ef[ft];

if(fv){return fv;
}
if(fu===true){return null;
}return this._createChildControl(ft);
},_showChildControl:function(eF){var eG=this.getChildControl(eF);
eG.show();
return eG;
},_excludeChildControl:function(bl){var bm=this.getChildControl(bl,true);

if(bm){bm.exclude();
}},_isChildControlVisible:function(ht){var hu=this.getChildControl(ht,true);

if(hu){return hu.isVisible();
}return false;
},_createChildControl:function(gf){if(!this.__ef){this.__ef={};
}else if(this.__ef[gf]){throw new Error("Child control '"+gf+"' already created!");
}var gj=gf.indexOf(bQ);

if(gj==-1){var gg=this._createChildControlImpl(gf);
}else{var gg=this._createChildControlImpl(gf.substring(0,gj));
}
if(!gg){throw new Error("Unsupported control: "+gf);
}gg.$$subcontrol=gf;
gg.$$subparent=this;
var gh=this.__ec;
var forward=this._forwardStates;

if(gh&&forward&&gg instanceof qx.ui.core.Widget){for(var gi in gh){if(forward[gi]){gg.addState(gi);
}}}this.fireDataEvent(eb,gg);
return this.__ef[gf]=gg;
},_createChildControlImpl:function(eL){return null;
},_disposeChildControls:function(){var gS=this.__ef;

if(!gS){return;
}var gQ=qx.ui.core.Widget;

for(var gR in gS){var gP=gS[gR];

if(!gQ.contains(this,gP)){gP.destroy();
}else{gP.dispose();
}}delete this.__ef;
},_findTopControl:function(){var hf=this;

while(hf){if(!hf.$$subparent){return hf;
}hf=hf.$$subparent;
}return null;
},getContainerLocation:function(hp){var hq=this.getContainerElement().getDomElement();
return hq?qx.bom.element.Location.get(hq,hp):null;
},getContentLocation:function(hb){var hc=this.getContentElement().getDomElement();
return hc?qx.bom.element.Location.get(hc,hb):null;
},setDomLeft:function(gT){var gU=this.getContainerElement().getDomElement();

if(gU){gU.style.left=gT+dL;
}else{throw new Error("DOM element is not yet created!");
}},setDomTop:function(P){var Q=this.getContainerElement().getDomElement();

if(Q){Q.style.top=P+dL;
}else{throw new Error("DOM element is not yet created!");
}},setDomPosition:function(y,top){var z=this.getContainerElement().getDomElement();

if(z){z.style.left=y+dL;
z.style.top=top+dL;
}else{throw new Error("DOM element is not yet created!");
}},destroy:function(){if(this.$$disposed){return;
}var parent=this.$$parent;

if(parent){parent._remove(this);
}qx.ui.core.queue.Dispose.add(this);
},clone:function(){var fl=qx.ui.core.LayoutItem.prototype.clone.call(this);

if(this.getChildren){var fm=this.getChildren();

for(var i=0,l=fm.length;i<l;i++){fl.add(fm[i].clone());
}}return fl;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){if(qx.core.Variant.isSet(dr,dM)){if(this.__dS){qx.locale.Manager.getInstance().removeListenerById(this.__dS);
}}this.getContainerElement().setAttribute(bO,null,true);
this._disposeChildControls();
qx.ui.core.queue.Appearance.remove(this);
qx.ui.core.queue.Layout.remove(this);
qx.ui.core.queue.Visibility.remove(this);
qx.ui.core.queue.Widget.remove(this);
}if(!qx.core.ObjectRegistry.inShutDown){var fW=qx.ui.core.Widget;
var fV=this.getContainerElement();

if(this.__dO){fV.remove(this.__dO);
fW.__dM.poolDecorator(this.__dO);
}
if(this.__dP){fV.remove(this.__dP);
fW.__dN.poolDecorator(this.__dP);
}this.clearSeparators();
this.__dO=this.__dP=this.__dV=null;
}else{this._disposeArray(cT);
this._disposeObjects(cl,ea);
}this._disposeArray(bJ);
this.__ec=this.__ef=null;
this._disposeObjects(cp,cz,bM,dg);
}});
})();
(function(){var d="qx.event.type.Data",c="qx.ui.container.Composite",b="addChildWidget",a="removeChildWidget";
qx.Class.define(c,{extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MLayoutHandling],construct:function(i){qx.ui.core.Widget.call(this);

if(i!=null){this._setLayout(i);
}},events:{addChildWidget:d,removeChildWidget:d},members:{_afterAddChild:function(g){this.fireNonBubblingEvent(b,qx.event.type.Data,[g]);
},_afterRemoveChild:function(h){this.fireNonBubblingEvent(a,qx.event.type.Data,[h]);
}},defer:function(e,f){qx.ui.core.MChildrenHandling.remap(f);
qx.ui.core.MLayoutHandling.remap(f);
}});
})();
(function(){var k="Integer",j="interval",i="keep-align",h="disappear",g="best-fit",f="mouse",e="bottom-left",d="direct",c="Boolean",b="bottom-right",y="widget",x="qx.ui.core.MPlacement",w="left-top",v="offsetRight",u="shorthand",t="offsetLeft",s="top-left",r="appear",q="offsetBottom",p="top-right",n="offsetTop",o="right-bottom",l="right-top",m="left-bottom";
qx.Mixin.define(x,{properties:{position:{check:[s,p,e,b,w,m,l,o],init:e,themeable:true},placeMethod:{check:[y,f],init:f,themeable:true},domMove:{check:c,init:false},placementModeX:{check:[d,i,g],init:i,themeable:true},placementModeY:{check:[d,i,g],init:i,themeable:true},offsetLeft:{check:k,init:0,themeable:true},offsetTop:{check:k,init:0,themeable:true},offsetRight:{check:k,init:0,themeable:true},offsetBottom:{check:k,init:0,themeable:true},offset:{group:[n,v,q,t],mode:u,themeable:true}},members:{__ia:null,__ib:null,__ic:null,getLayoutLocation:function(C){var F,E,G,top;
E=C.getBounds();
G=E.left;
top=E.top;
var H=E;
C=C.getLayoutParent();

while(C&&!C.isRootWidget()){E=C.getBounds();
G+=E.left;
top+=E.top;
F=C.getInsets();
G+=F.left;
top+=F.top;
C=C.getLayoutParent();
}if(C.isRootWidget()){var D=C.getContainerLocation();

if(D){G+=D.left;
top+=D.top;
}}return {left:G,top:top,right:G+H.width,bottom:top+H.height};
},moveTo:function(a,top){if(this.getDomMove()){this.setDomPosition(a,top);
}else{this.setLayoutProperties({left:a,top:top});
}},placeToWidget:function(z,A){if(A){this.__id();
this.__ia=qx.lang.Function.bind(this.placeToWidget,this,z,false);
qx.event.Idle.getInstance().addListener(j,this.__ia);
this.__ic=function(){this.__id();
};
this.addListener(h,this.__ic,this);
}var B=z.getContainerLocation()||this.getLayoutLocation(z);
this.__if(B);
},__id:function(){if(this.__ia){qx.event.Idle.getInstance().removeListener(j,this.__ia);
this.__ia=null;
}
if(this.__ic){this.removeListener(h,this.__ic,this);
this.__ic=null;
}},placeToMouse:function(event){var M=event.getDocumentLeft();
var top=event.getDocumentTop();
var L={left:M,top:top,right:M,bottom:top};
this.__if(L);
},placeToElement:function(P,Q){var location=qx.bom.element.Location.get(P);
var R={left:location.left,top:location.top,right:location.left+P.offsetWidth,bottom:location.top+P.offsetHeight};
if(Q){this.__ia=qx.lang.Function.bind(this.placeToElement,this,P,false);
qx.event.Idle.getInstance().addListener(j,this.__ia);
this.addListener(h,function(){if(this.__ia){qx.event.Idle.getInstance().removeListener(j,this.__ia);
this.__ia=null;
}},this);
}this.__if(R);
},placeToPoint:function(N){var O={left:N.left,top:N.top,right:N.left,bottom:N.top};
this.__if(O);
},_getPlacementOffsets:function(){return {left:this.getOffsetLeft(),top:this.getOffsetTop(),right:this.getOffsetRight(),bottom:this.getOffsetBottom()};
},__ie:function(S){var T=null;

if(this._computePlacementSize){var T=this._computePlacementSize();
}else if(this.isVisible()){var T=this.getBounds();
}
if(T==null){this.addListenerOnce(r,function(){this.__ie(S);
},this);
}else{S.call(this,T);
}},__if:function(K){this.__ie(function(I){var J=qx.util.placement.Placement.compute(I,this.getLayoutParent().getBounds(),K,this._getPlacementOffsets(),this.getPosition(),this.getPlacementModeX(),this.getPlacementModeY());
this.moveTo(J.left,J.top);
});
}},destruct:function(){this.__id();
}});
})();
(function(){var e="qx.ui.popup.Popup",d="visible",c="excluded",b="popup",a="Boolean";
qx.Class.define(e,{extend:qx.ui.container.Composite,include:qx.ui.core.MPlacement,construct:function(f){qx.ui.container.Composite.call(this,f);
qx.core.Init.getApplication().getRoot().add(this);
this.initVisibility();
},properties:{appearance:{refine:true,init:b},visibility:{refine:true,init:c},autoHide:{check:a,init:true}},members:{_applyVisibility:function(g,h){qx.ui.container.Composite.prototype._applyVisibility.call(this,g,h);
var i=qx.ui.popup.Manager.getInstance();
g===d?i.add(this):i.remove(this);
}},destruct:function(){qx.ui.popup.Manager.getInstance().remove(this);
}});
})();
(function(){var l="atom",k="Integer",j="String",i="_applyRich",h="qx.ui.tooltip.ToolTip",g="_applyIcon",f="tooltip",d="qx.ui.core.Widget",c="mouseover",b="Boolean",a="_applyLabel";
qx.Class.define(h,{extend:qx.ui.popup.Popup,construct:function(m,n){qx.ui.popup.Popup.call(this);
this.setLayout(new qx.ui.layout.Grow);
this._createChildControl(l);
if(m!=null){this.setLabel(m);
}
if(n!=null){this.setIcon(n);
}this.addListener(c,this._onMouseOver,this);
},properties:{appearance:{refine:true,init:f},showTimeout:{check:k,init:700,themeable:true},hideTimeout:{check:k,init:4000,themeable:true},label:{check:j,nullable:true,apply:a},icon:{check:j,nullable:true,apply:g,themeable:true},rich:{check:b,init:false,apply:i},opener:{check:d,nullable:true}},members:{_createChildControlImpl:function(r){var s;

switch(r){case l:s=new qx.ui.basic.Atom;
this._add(s);
break;
}return s||qx.ui.popup.Popup.prototype._createChildControlImpl.call(this,r);
},_onMouseOver:function(e){this.hide();
},_applyIcon:function(w,x){var y=this.getChildControl(l);
w==null?y.resetIcon():y.setIcon(w);
},_applyLabel:function(o,p){var q=this.getChildControl(l);
o==null?q.resetLabel():q.setLabel(o);
},_applyRich:function(t,u){var v=this.getChildControl(l);
v.setRich(t);
}}});
})();
(function(){var b="qx.ui.core.queue.Layout",a="layout";
qx.Class.define(b,{statics:{__hp:{},remove:function(A){delete this.__hp[A.$$hash];
},add:function(t){this.__hp[t.$$hash]=t;
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var g=this.__hs();
for(var i=g.length-1;i>=0;i--){var h=g[i];
if(h.hasValidLayout()){continue;
}if(h.isRootWidget()&&!h.hasUserBounds()){var k=h.getSizeHint();
h.renderLayout(0,0,k.width,k.height);
}else{var j=h.getBounds();
h.renderLayout(j.left,j.top,j.width,j.height);
}}},getNestingLevel:function(c){var d=this.__hr;
var f=0;
var parent=c;
while(true){if(d[parent.$$hash]!=null){f+=d[parent.$$hash];
break;
}
if(!parent.$$parent){break;
}parent=parent.$$parent;
f+=1;
}var e=f;

while(c&&c!==parent){d[c.$$hash]=e--;
c=c.$$parent;
}return f;
},__hq:function(){var z=qx.ui.core.queue.Visibility;
this.__hr={};
var y=[];
var x=this.__hp;
var u,w;

for(var v in x){u=x[v];

if(z.isVisible(u)){w=this.getNestingLevel(u);
if(!y[w]){y[w]={};
}y[w][v]=u;
delete x[v];
}}return y;
},__hs:function(){var o=[];
var q=this.__hq();

for(var n=q.length-1;n>=0;n--){if(!q[n]){continue;
}
for(var m in q[n]){var l=q[n][m];
if(n==0||l.isRootWidget()||l.hasUserBounds()){o.push(l);
l.invalidateLayoutCache();
continue;
}var s=l.getSizeHint(false);

if(s){l.invalidateLayoutCache();
var p=l.getSizeHint();
var r=(!l.getBounds()||s.minWidth!==p.minWidth||s.width!==p.width||s.maxWidth!==p.maxWidth||s.minHeight!==p.minHeight||s.height!==p.height||s.maxHeight!==p.maxHeight);
}else{r=true;
}
if(r){var parent=l.getLayoutParent();

if(!q[n-1]){q[n-1]={};
}q[n-1][parent.$$hash]=parent;
}else{o.push(l);
}}}return o;
}}});
})();
(function(){var a="qx.event.handler.UserAction";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(d){qx.core.Object.call(this);
this.__jW=d;
this.__jX=d.getWindow();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__jW:null,__jX:null,canHandleEvent:function(b,c){},registerEvent:function(e,f,g){},unregisterEvent:function(h,i,j){}},destruct:function(){this.__jW=this.__jX=null;
},defer:function(k){qx.event.Registration.addHandler(k);
}});
})();
(function(){var b="qx.util.DeferredCallManager",a="singleton";
qx.Class.define(b,{extend:qx.core.Object,type:a,construct:function(){this.__fJ={};
this.__fK=qx.lang.Function.bind(this.__fO,this);
this.__fL=false;
},members:{__fM:null,__fN:null,__fJ:null,__fL:null,__fK:null,schedule:function(g){if(this.__fM==null){this.__fM=window.setTimeout(this.__fK,0);
}var h=g.toHashCode();
if(this.__fN&&this.__fN[h]){return;
}this.__fJ[h]=g;
this.__fL=true;
},cancel:function(e){var f=e.toHashCode();
if(this.__fN&&this.__fN[f]){this.__fN[f]=null;
return;
}delete this.__fJ[f];
if(qx.lang.Object.isEmpty(this.__fJ)&&this.__fM!=null){window.clearTimeout(this.__fM);
this.__fM=null;
}},__fO:qx.event.GlobalError.observeMethod(function(){this.__fM=null;
while(this.__fL){this.__fN=qx.lang.Object.clone(this.__fJ);
this.__fJ={};
this.__fL=false;

for(var d in this.__fN){var c=this.__fN[d];

if(c){this.__fN[d]=null;
c.call();
}}}this.__fN=null;
})},destruct:function(){if(this.__fM!=null){window.clearTimeout(this.__fM);
}this.__fK=this.__fJ=null;
}});
})();
(function(){var a="qx.util.DeferredCall";
qx.Class.define(a,{extend:qx.core.Object,construct:function(d,e){qx.core.Object.call(this);
this.__hk=d;
this.__hl=e||null;
this.__hm=qx.util.DeferredCallManager.getInstance();
},members:{__hk:null,__hl:null,__hm:null,cancel:function(){this.__hm.cancel(this);
},schedule:function(){this.__hm.schedule(this);
},call:function(){this.__hl?this.__hk.apply(this.__hl):this.__hk();
}},destruct:function(b,c){this.cancel();
this.__hl=this.__hk=this.__hm=null;
}});
})();
(function(){var v="on",u="element",t="qx.debug",s="qx.client",r="qxSelectable",q="off",p="': ",o="Invalid context for callback.",n="div",m="'",bc="Invalid event type.",bb="Invalid callback function",ba="",Y="mshtml",X="none",W="scroll",V="text",U="|bubble|",T="qx.html.Element",S="|capture|",E="Invalid capture flag.",F="focus",C="Failed to add event listener for type '",D="blur",A="deactivate",B="capture",w="userSelect",z=" from the target '",G="-moz-none",H="visible",K="releaseCapture",J="tabIndex",M="activate",L="MozUserSelect",O="normal",N=" to the target '",I="Failed to remove event listener for type '",R="__dt",Q="Invalid capture falg.",P="hidden";
qx.Class.define(T,{extend:qx.core.Object,construct:function(bS,bT,bU){qx.core.Object.call(this);
this.__cW=bS||n;
this.__cX=bT||null;
this.__cY=bU||null;
},statics:{DEBUG:false,_modified:{},_visibility:{},_scroll:{},_actions:[],__da:{},_scheduleFlush:function(ec){qx.html.Element.__dE.schedule();
},flush:function(){var cD;

if(qx.core.Variant.isSet(t,v)){if(this.DEBUG){qx.log.Logger.debug(this,"Flushing elements...");
}}var cv=this.__db();
var cu=cv.getFocus();

if(cu&&this.__df(cu)){cv.blur(cu);
}var cK=cv.getActive();

if(cK&&this.__df(cK)){qx.bom.Element.deactivate(cK);
}var cy=this.__dd();

if(cy&&this.__df(cy)){qx.bom.Element.releaseCapture(cy);
}var cE=[];
var cF=this._modified;

for(var cC in cF){cD=cF[cC];
if(cD.__dx()){if(cD.__dg&&qx.dom.Hierarchy.isRendered(cD.__dg)){cE.push(cD);
}else{if(qx.core.Variant.isSet(t,v)){if(this.DEBUG){cD.debug("Flush invisible element");
}}cD.__dw();
}delete cF[cC];
}}
for(var i=0,l=cE.length;i<l;i++){cD=cE[i];

if(qx.core.Variant.isSet(t,v)){if(this.DEBUG){cD.debug("Flush rendered element");
}}cD.__dw();
}var cA=this._visibility;

for(var cC in cA){cD=cA[cC];
var cG=cD.__dg;

if(!cG){delete cA[cC];
continue;
}
if(qx.core.Variant.isSet(t,v)){if(this.DEBUG){qx.log.Logger.debug(this,"Switching visibility to: "+cD.__dj);
}}if(!cD.$$disposed){cG.style.display=cD.__dj?ba:X;
if(qx.core.Variant.isSet(s,Y)){if(!(document.documentMode>=8)){cG.style.visibility=cD.__dj?H:P;
}}}delete cA[cC];
}var scroll=this._scroll;

for(var cC in scroll){cD=scroll[cC];
var cL=cD.__dg;

if(cL&&cL.offsetWidth){var cx=true;
if(cD.__dm!=null){cD.__dg.scrollLeft=cD.__dm;
delete cD.__dm;
}if(cD.__dn!=null){cD.__dg.scrollTop=cD.__dn;
delete cD.__dn;
}var cH=cD.__dk;

if(cH!=null){var cB=cH.element.getDomElement();

if(cB&&cB.offsetWidth){qx.bom.element.Scroll.intoViewX(cB,cL,cH.align);
delete cD.__dk;
}else{cx=false;
}}var cI=cD.__dl;

if(cI!=null){var cB=cI.element.getDomElement();

if(cB&&cB.offsetWidth){qx.bom.element.Scroll.intoViewY(cB,cL,cI.align);
delete cD.__dl;
}else{cx=false;
}}if(cx){delete scroll[cC];
}}}var cw={"releaseCapture":1,"blur":1,"deactivate":1};
for(var i=0;i<this._actions.length;i++){var cJ=this._actions[i];
var cG=cJ.element.__dg;

if(!cG||!cw[cJ.type]&&!cJ.element.__dx()){continue;
}var cz=cJ.args;
cz.unshift(cG);
qx.bom.Element[cJ.type].apply(qx.bom.Element,cz);
}this._actions=[];
for(var cC in this.__da){var ct=this.__da[cC];
var cL=ct.element.__dg;

if(cL){qx.bom.Selection.set(cL,ct.start,ct.end);
delete this.__da[cC];
}}qx.event.handler.Appear.refresh();
},__db:function(){if(!this.__dc){var dn=qx.event.Registration.getManager(window);
this.__dc=dn.getHandler(qx.event.handler.Focus);
}return this.__dc;
},__dd:function(){if(!this.__de){var bP=qx.event.Registration.getManager(window);
this.__de=bP.getDispatcher(qx.event.dispatch.MouseCapture);
}return this.__de.getCaptureElement();
},__df:function(bE){var bF=qx.core.ObjectRegistry.fromHashCode(bE.$$element);
return bF&&!bF.__dx();
}},members:{__cW:null,__dg:null,__dh:false,__di:true,__dj:true,__dk:null,__dl:null,__dm:null,__dn:null,__do:null,__dp:null,__dq:null,__cX:null,__cY:null,__dr:null,__ds:null,__dt:null,__du:null,__dv:null,_scheduleChildrenUpdate:function(){if(this.__du){return;
}this.__du=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(u);
},_createDomElement:function(){return qx.bom.Element.create(this.__cW);
},__dw:function(){if(qx.core.Variant.isSet(t,v)){if(this.DEBUG){this.debug("Flush: "+this.getAttribute("id"));
}}var cq=this.__dt;

if(cq){var length=cq.length;
var cr;

for(var i=0;i<length;i++){cr=cq[i];

if(cr.__dj&&cr.__di&&!cr.__dg){cr.__dw();
}}}
if(!this.__dg){this.__dg=this._createDomElement();
this.__dg.$$element=this.$$hash;
this._copyData(false);

if(cq&&length>0){this._insertChildren();
}}else{this._syncData();

if(this.__du){this._syncChildren();
}}delete this.__du;
},_insertChildren:function(){var c=this.__dt;
var length=c.length;
var f;

if(length>2){var d=document.createDocumentFragment();

for(var i=0;i<length;i++){f=c[i];

if(f.__dg&&f.__di){d.appendChild(f.__dg);
}}this.__dg.appendChild(d);
}else{var d=this.__dg;

for(var i=0;i<length;i++){f=c[i];

if(f.__dg&&f.__di){d.appendChild(f.__dg);
}}}},_syncChildren:function(){var bt=qx.core.ObjectRegistry;
var bk=this.__dt;
var br=bk.length;
var bl;
var bp;
var bn=this.__dg;
var bq=bn.childNodes;
var bm=0;
var bo;

if(qx.core.Variant.isSet(t,v)){var bs=0;
}for(var i=bq.length-1;i>=0;i--){bo=bq[i];
bp=bt.fromHashCode(bo.$$element);

if(!bp||!bp.__di||bp.__dv!==this){bn.removeChild(bo);

if(qx.core.Variant.isSet(t,v)){bs++;
}}}for(var i=0;i<br;i++){bl=bk[i];
if(bl.__di){bp=bl.__dg;
bo=bq[bm];

if(!bp){continue;
}if(bp!=bo){if(bo){bn.insertBefore(bp,bo);
}else{bn.appendChild(bp);
}
if(qx.core.Variant.isSet(t,v)){bs++;
}}bm++;
}}if(qx.core.Variant.isSet(t,v)){if(qx.html.Element.DEBUG){this.debug("Synced DOM with "+bs+" operations");
}}},_copyData:function(dL){var dP=this.__dg;
var dO=this.__cY;

if(dO){var dM=qx.bom.element.Attribute;

for(var dQ in dO){dM.set(dP,dQ,dO[dQ]);
}}var dO=this.__cX;

if(dO){var dN=qx.bom.element.Style;

if(dL){dN.setStyles(dP,dO);
}else{dN.setCss(dP,dN.compile(dO));
}}var dO=this.__dr;

if(dO){for(var dQ in dO){this._applyProperty(dQ,dO[dQ]);
}}var dO=this.__ds;

if(dO){qx.event.Registration.getManager(dP).importListeners(dP,dO);
delete this.__ds;
}},_syncData:function(){var bz=this.__dg;
var by=qx.bom.element.Attribute;
var bw=qx.bom.element.Style;
var bx=this.__dp;

if(bx){var bC=this.__cY;

if(bC){var bA;

for(var bB in bx){bA=bC[bB];

if(bA!==undefined){by.set(bz,bB,bA);
}else{by.reset(bz,bB);
}}}this.__dp=null;
}var bx=this.__do;

if(bx){var bC=this.__cX;

if(bC){var bv={};

for(var bB in bx){bv[bB]=bC[bB];
}bw.setStyles(bz,bv);
}this.__do=null;
}var bx=this.__dq;

if(bx){var bC=this.__dr;

if(bC){var bA;

for(var bB in bx){this._applyProperty(bB,bC[bB]);
}}this.__dq=null;
}},__dx:function(){var cm=this;
while(cm){if(cm.__dh){return true;
}
if(!cm.__di||!cm.__dj){return false;
}cm=cm.__dv;
}return false;
},__dy:function(bf){if(bf.__dv===this){throw new Error("Child is already in: "+bf);
}
if(bf.__dh){throw new Error("Root elements could not be inserted into other ones.");
}if(bf.__dv){bf.__dv.remove(bf);
}bf.__dv=this;
if(!this.__dt){this.__dt=[];
}if(this.__dg){this._scheduleChildrenUpdate();
}},__dz:function(bd){if(bd.__dv!==this){throw new Error("Has no child: "+bd);
}if(this.__dg){this._scheduleChildrenUpdate();
}delete bd.__dv;
},__dA:function(a){if(a.__dv!==this){throw new Error("Has no child: "+a);
}if(this.__dg){this._scheduleChildrenUpdate();
}},getChildren:function(){return this.__dt||null;
},getChild:function(dp){var dq=this.__dt;
return dq&&dq[dp]||null;
},hasChildren:function(){var bg=this.__dt;
return bg&&bg[0]!==undefined;
},indexOf:function(dR){var dS=this.__dt;
return dS?dS.indexOf(dR):-1;
},hasChild:function(ed){var ee=this.__dt;
return ee&&ee.indexOf(ed)!==-1;
},add:function(cs){if(arguments[1]){for(var i=0,l=arguments.length;i<l;i++){this.__dy(arguments[i]);
}this.__dt.push.apply(this.__dt,arguments);
}else{this.__dy(cs);
this.__dt.push(cs);
}return this;
},addAt:function(dT,dU){this.__dy(dT);
qx.lang.Array.insertAt(this.__dt,dT,dU);
return this;
},remove:function(dr){var ds=this.__dt;

if(!ds){return;
}
if(arguments[1]){var dt;

for(var i=0,l=arguments.length;i<l;i++){dt=arguments[i];
this.__dz(dt);
qx.lang.Array.remove(ds,dt);
}}else{this.__dz(dr);
qx.lang.Array.remove(ds,dr);
}return this;
},removeAt:function(dH){var dI=this.__dt;

if(!dI){throw new Error("Has no children!");
}var dJ=dI[dH];

if(!dJ){throw new Error("Has no child at this position!");
}this.__dz(dJ);
qx.lang.Array.removeAt(this.__dt,dH);
return this;
},removeAll:function(){var ek=this.__dt;

if(ek){for(var i=0,l=ek.length;i<l;i++){this.__dz(ek[i]);
}ek.length=0;
}return this;
},getParent:function(){return this.__dv||null;
},insertInto:function(parent,dK){parent.__dy(this);

if(dK==null){parent.__dt.push(this);
}else{qx.lang.Array.insertAt(this.__dt,this,dK);
}return this;
},insertBefore:function(bO){var parent=bO.__dv;
parent.__dy(this);
qx.lang.Array.insertBefore(parent.__dt,this,bO);
return this;
},insertAfter:function(cS){var parent=cS.__dv;
parent.__dy(this);
qx.lang.Array.insertAfter(parent.__dt,this,cS);
return this;
},moveTo:function(em){var parent=this.__dv;
parent.__dA(this);
var en=parent.__dt.indexOf(this);

if(en===em){throw new Error("Could not move to same index!");
}else if(en<em){em--;
}qx.lang.Array.removeAt(parent.__dt,en);
qx.lang.Array.insertAt(parent.__dt,this,em);
return this;
},moveBefore:function(bu){var parent=this.__dv;
return this.moveTo(parent.__dt.indexOf(bu));
},moveAfter:function(dG){var parent=this.__dv;
return this.moveTo(parent.__dt.indexOf(dG)+1);
},free:function(){var parent=this.__dv;

if(!parent){throw new Error("Has no parent to remove from.");
}
if(!parent.__dt){return;
}parent.__dz(this);
qx.lang.Array.remove(parent.__dt,this);
return this;
},getDomElement:function(){return this.__dg||null;
},getNodeName:function(){return this.__cW;
},setNodeName:function(name){this.__cW=name;
},setRoot:function(cn){this.__dh=cn;
},useMarkup:function(dA){if(this.__dg){throw new Error("Could not overwrite existing element!");
}if(qx.core.Variant.isSet(s,Y)){var dB=document.createElement(n);
}else{var dB=qx.bom.Element.getHelperElement();
}dB.innerHTML=dA;
this.useElement(dB.firstChild);
return this.__dg;
},useElement:function(be){if(this.__dg){throw new Error("Could not overwrite existing element!");
}this.__dg=be;
this.__dg.$$element=this.$$hash;
this._copyData(true);
},isFocusable:function(){var bM=this.getAttribute(J);

if(bM>=1){return true;
}var bL=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(bM>=0&&bL[this.__cW]){return true;
}return false;
},setSelectable:qx.core.Variant.select(s,{"webkit":function(dF){this.setAttribute(r,dF?v:q);
this.setStyle(w,dF?O:X);
},"gecko":function(bD){this.setAttribute(r,bD?v:q);
this.setStyle(L,bD?V:G);
},"default":function(ce){this.setAttribute(r,ce?v:q);
}}),isNativelyFocusable:function(){return !!qx.event.handler.Focus.FOCUSABLE_ELEMENTS[this.__cW];
},include:function(){if(this.__di){return;
}delete this.__di;

if(this.__dv){this.__dv._scheduleChildrenUpdate();
}return this;
},exclude:function(){if(!this.__di){return;
}this.__di=false;

if(this.__dv){this.__dv._scheduleChildrenUpdate();
}return this;
},isIncluded:function(){return this.__di===true;
},show:function(){if(this.__dj){return;
}
if(this.__dg){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(u);
}if(this.__dv){this.__dv._scheduleChildrenUpdate();
}delete this.__dj;
},hide:function(){if(!this.__dj){return;
}
if(this.__dg){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(u);
}this.__dj=false;
},isVisible:function(){return this.__dj===true;
},scrollChildIntoViewX:function(bY,ca,cb){var cc=this.__dg;
var cd=bY.getDomElement();

if(cb!==false&&cc&&cc.offsetWidth&&cd&&cd.offsetWidth){qx.bom.element.Scroll.intoViewX(cd,cc,ca);
}else{this.__dk={element:bY,align:ca};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(u);
}delete this.__dm;
},scrollChildIntoViewY:function(cg,ch,ci){var cj=this.__dg;
var ck=cg.getDomElement();

if(ci!==false&&cj&&cj.offsetWidth&&ck&&ck.offsetWidth){qx.bom.element.Scroll.intoViewY(ck,cj,ch);
}else{this.__dl={element:cg,align:ch};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(u);
}delete this.__dn;
},scrollToX:function(x,dl){var dm=this.__dg;

if(dl!==true&&dm&&dm.offsetWidth){dm.scrollLeft=x;
}else{this.__dm=x;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(u);
}delete this.__dk;
},getScrollX:function(){var eo=this.__dg;

if(eo){return eo.scrollLeft;
}return this.__dm||0;
},scrollToY:function(y,cT){var cU=this.__dg;

if(cT!==true&&cU&&cU.offsetWidth){cU.scrollTop=y;
}else{this.__dn=y;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(u);
}delete this.__dl;
},getScrollY:function(){var dz=this.__dg;

if(dz){return dz.scrollTop;
}return this.__dn||0;
},disableScrolling:function(){this.enableScrolling();
this.scrollToX(0);
this.scrollToY(0);
this.addListener(W,this.__dC,this);
},enableScrolling:function(){this.removeListener(W,this.__dC,this);
},__dB:null,__dC:function(e){if(!this.__dB){this.__dB=true;
this.__dg.scrollTop=0;
this.__dg.scrollLeft=0;
delete this.__dB;
}},getTextSelection:function(){var bR=this.__dg;

if(bR){return qx.bom.Selection.get(bR);
}return null;
},getTextSelectionLength:function(){var eg=this.__dg;

if(eg){return qx.bom.Selection.getLength(eg);
}return null;
},getTextSelectionStart:function(){var cN=this.__dg;

if(cN){return qx.bom.Selection.getStart(cN);
}return null;
},getTextSelectionEnd:function(){var bN=this.__dg;

if(bN){return qx.bom.Selection.getEnd(bN);
}return null;
},setTextSelection:function(bG,bH){var bI=this.__dg;

if(bI){qx.bom.Selection.set(bI,bG,bH);
return;
}qx.html.Element.__da[this.toHashCode()]={element:this,start:bG,end:bH};
qx.html.Element._scheduleFlush(u);
},clearTextSelection:function(){var cM=this.__dg;

if(cM){qx.bom.Selection.clear(cM);
}delete qx.html.Element.__da[this.toHashCode()];
},__dD:function(h,j){var k=qx.html.Element._actions;
k.push({type:h,element:this,args:j||[]});
qx.html.Element._scheduleFlush(u);
},focus:function(){this.__dD(F);
},blur:function(){this.__dD(D);
},activate:function(){this.__dD(M);
},deactivate:function(){this.__dD(A);
},capture:function(ef){this.__dD(B,[ef!==false]);
},releaseCapture:function(){this.__dD(K);
},setStyle:function(dC,dD,dE){if(!this.__cX){this.__cX={};
}
if(this.__cX[dC]==dD){return;
}
if(dD==null){delete this.__cX[dC];
}else{this.__cX[dC]=dD;
}if(this.__dg){if(dE){qx.bom.element.Style.set(this.__dg,dC,dD);
return this;
}if(!this.__do){this.__do={};
}this.__do[dC]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(u);
}return this;
},setStyles:function(de,df){var dg=qx.bom.element.Style;

if(!this.__cX){this.__cX={};
}
if(this.__dg){if(!this.__do){this.__do={};
}
for(var di in de){var dh=de[di];

if(this.__cX[di]==dh){continue;
}
if(dh==null){delete this.__cX[di];
}else{this.__cX[di]=dh;
}if(df){dg.set(this.__dg,di,dh);
continue;
}this.__do[di]=true;
}qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(u);
}else{for(var di in de){var dh=de[di];

if(this.__cX[di]==dh){continue;
}
if(dh==null){delete this.__cX[di];
}else{this.__cX[di]=dh;
}}}return this;
},removeStyle:function(bJ,bK){this.setStyle(bJ,null,bK);
},getStyle:function(bQ){return this.__cX?this.__cX[bQ]:null;
},getAllStyles:function(){return this.__cX||null;
},setAttribute:function(eh,ei,ej){if(!this.__cY){this.__cY={};
}
if(this.__cY[eh]==ei){return;
}
if(ei==null){delete this.__cY[eh];
}else{this.__cY[eh]=ei;
}if(this.__dg){if(ej){qx.bom.element.Attribute.set(this.__dg,eh,ei);
return this;
}if(!this.__dp){this.__dp={};
}this.__dp[eh]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(u);
}return this;
},setAttributes:function(cO,cP){for(var cQ in cO){this.setAttribute(cQ,cO[cQ],cP);
}return this;
},removeAttribute:function(co,cp){this.setAttribute(co,null,cp);
},getAttribute:function(cf){return this.__cY?this.__cY[cf]:null;
},_applyProperty:function(name,g){},_setProperty:function(bh,bi,bj){if(!this.__dr){this.__dr={};
}
if(this.__dr[bh]==bi){return;
}
if(bi==null){delete this.__dr[bh];
}else{this.__dr[bh]=bi;
}if(this.__dg){if(bj){this._applyProperty(bh,bi);
return this;
}if(!this.__dq){this.__dq={};
}this.__dq[bh]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(u);
}return this;
},_removeProperty:function(dj,dk){this._setProperty(dj,null,dk);
},_getProperty:function(bV){var bW=this.__dr;

if(!bW){return null;
}var bX=bW[bV];
return bX==null?null:bX;
},addListener:function(dV,dW,self,dX){if(this.$$disposed){return null;
}
if(qx.core.Variant.isSet(t,v)){var dY=C+dV+m+N+this+p;
this.assertString(dV,dY+bc);
this.assertFunction(dW,dY+bb);

if(self!==undefined){this.assertObject(self,o);
}
if(dX!==undefined){this.assertBoolean(dX,Q);
}}
if(this.__dg){return qx.event.Registration.addListener(this.__dg,dV,dW,self,dX);
}
if(!this.__ds){this.__ds={};
}
if(dX==null){dX=false;
}var ea=qx.event.Manager.getNextUniqueId();
var eb=dV+(dX?S:U)+ea;
this.__ds[eb]={type:dV,listener:dW,self:self,capture:dX,unique:ea};
return eb;
},removeListener:function(cV,cW,self,cX){if(this.$$disposed){return null;
}
if(qx.core.Variant.isSet(t,v)){var cY=I+cV+m+z+this+p;
this.assertString(cV,cY+bc);
this.assertFunction(cW,cY+bb);

if(self!==undefined){this.assertObject(self,o);
}
if(cX!==undefined){this.assertBoolean(cX,E);
}}
if(this.__dg){qx.event.Registration.removeListener(this.__dg,cV,cW,self,cX);
}else{var dc=this.__ds;
var da;

if(cX==null){cX=false;
}
for(var dd in dc){da=dc[dd];
if(da.listener===cW&&da.self===self&&da.capture===cX&&da.type===cV){delete dc[dd];
break;
}}}return this;
},removeListenerById:function(cl){if(this.$$disposed){return null;
}
if(this.__dg){qx.event.Registration.removeListenerById(this.__dg,cl);
}else{delete this.__ds[cl];
}return this;
},hasListener:function(du,dv){if(this.$$disposed){return false;
}
if(this.__dg){return qx.event.Registration.hasListener(this.__dg,du,dv);
}var dx=this.__ds;
var dw;

if(dv==null){dv=false;
}
for(var dy in dx){dw=dx[dy];
if(dw.capture===dv&&dw.type===du){return true;
}}return false;
}},defer:function(b){b.__dE=new qx.util.DeferredCall(b.flush,b);
},destruct:function(){var cR=this.__dg;

if(cR){qx.event.Registration.getManager(cR).removeAllListeners(cR);
cR.$$element=ba;
}
if(!qx.core.ObjectRegistry.inShutDown){var parent=this.__dv;

if(parent&&!parent.$$disposed){parent.remove(this);
}}this._disposeArray(R);
this.__cY=this.__cX=this.__ds=this.__dr=this.__dp=this.__do=this.__dq=this.__dg=this.__dv=this.__dk=this.__dl=null;
}});
})();
(function(){var d="qx.debug",c="on",b="qx.ui.core.queue.Manager",a="useraction";
qx.Class.define(b,{statics:{__ky:false,__kz:{},__kA:0,MAX_RETRIES:10,scheduleFlush:function(i){var self=qx.ui.core.queue.Manager;
self.__kz[i]=true;

if(!self.__ky){self.__kD.schedule();
self.__ky=true;
}},flush:function(){var self=qx.ui.core.queue.Manager;
if(self.__kB){return;
}self.__kB=true;
self.__kD.cancel();
var l=self.__kz;
self.__kC(function(){while(l.visibility||l.widget||l.appearance||l.layout||l.element){if(l.widget){delete l.widget;
qx.ui.core.queue.Widget.flush();
}
if(l.visibility){delete l.visibility;
qx.ui.core.queue.Visibility.flush();
}
if(l.appearance){delete l.appearance;
qx.ui.core.queue.Appearance.flush();
}if(l.widget||l.visibility||l.appearance){continue;
}
if(l.layout){delete l.layout;
qx.ui.core.queue.Layout.flush();
}if(l.widget||l.visibility||l.appearance||l.layout){continue;
}
if(l.element){delete l.element;
qx.html.Element.flush();
}}},function(){self.__ky=false;
});
self.__kC(function(){if(l.dispose){delete l.dispose;
qx.ui.core.queue.Dispose.flush();
}},function(){self.__kB=false;
});
self.__kA=0;
},__kC:qx.core.Variant.select(d,{"on":function(j,k){j();
k();
},"off":function(f,g){var self=qx.ui.core.queue.Manager;

try{f();
}catch(e){if(qx.core.Variant.isSet(d,c)){qx.log.Logger.error("Error while layout flush: "+e+"\n"+"Stack trace: \n"+qx.dev.StackTrace.getStackTraceFromError(e));
}self.__ky=false;
self.__kB=false;
self.__kA+=1;

if(self.__kA<=self.MAX_RETRIES){self.scheduleFlush();
}else{throw new Error("Fatal Error: Flush terminated "+(self.__kA-1)+" times in a row"+" due to exceptions in user code. The application has to be reloaded!");
}throw e;
}finally{g();
}}})},defer:function(h){h.__kD=new qx.util.DeferredCall(h.flush);
qx.html.Element._scheduleFlush=h.scheduleFlush;
qx.event.Registration.addListener(window,a,h.flush);
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
(function(){var k="visible",j="scroll",i="borderBottomWidth",h="borderTopWidth",g="left",f="borderLeftWidth",e="bottom",d="top",c="right",b="qx.bom.element.Scroll",a="borderRightWidth";
qx.Class.define(b,{statics:{intoViewX:function(l,stop,m){var parent=l.parentNode;
var r=qx.dom.Node.getDocument(l);
var n=r.body;
var z,x,u;
var B,s,C;
var v,D,G;
var E,p,y,o;
var t,F,w;
var q=m===g;
var A=m===c;
stop=stop?stop.parentNode:r;
while(parent&&parent!=stop){if(parent.scrollWidth>parent.clientWidth&&(parent===n||qx.bom.element.Overflow.getY(parent)!=k)){if(parent===n){x=parent.scrollLeft;
u=x+qx.bom.Viewport.getWidth();
B=qx.bom.Viewport.getWidth();
s=parent.clientWidth;
C=parent.scrollWidth;
v=0;
D=0;
G=0;
}else{z=qx.bom.element.Location.get(parent);
x=z.left;
u=z.right;
B=parent.offsetWidth;
s=parent.clientWidth;
C=parent.scrollWidth;
v=parseInt(qx.bom.element.Style.get(parent,f),10)||0;
D=parseInt(qx.bom.element.Style.get(parent,a),10)||0;
G=B-s-v-D;
}E=qx.bom.element.Location.get(l);
p=E.left;
y=E.right;
o=l.offsetWidth;
t=p-x-v;
F=y-u+D;
w=0;
if(q){w=t;
}else if(A){w=F+G;
}else if(t<0||o>s){w=t;
}else if(F>0){w=F+G;
}parent.scrollLeft+=w;
if(qx.bom.client.Engine.GECKO||qx.bom.client.Engine.OPERA){qx.event.Registration.fireNonBubblingEvent(parent,j);
}}
if(parent===n){break;
}parent=parent.parentNode;
}},intoViewY:function(K,stop,L){var parent=K.parentNode;
var R=qx.dom.Node.getDocument(K);
var M=R.body;
var ba,N,V;
var bc,Y,T;
var P,Q,O;
var be,bf,bb,U;
var X,S,bg;
var bd=L===d;
var W=L===e;
stop=stop?stop.parentNode:R;
while(parent&&parent!=stop){if(parent.scrollHeight>parent.clientHeight&&(parent===M||qx.bom.element.Overflow.getY(parent)!=k)){if(parent===M){N=parent.scrollTop;
V=N+qx.bom.Viewport.getHeight();
bc=qx.bom.Viewport.getHeight();
Y=parent.clientHeight;
T=parent.scrollHeight;
P=0;
Q=0;
O=0;
}else{ba=qx.bom.element.Location.get(parent);
N=ba.top;
V=ba.bottom;
bc=parent.offsetHeight;
Y=parent.clientHeight;
T=parent.scrollHeight;
P=parseInt(qx.bom.element.Style.get(parent,h),10)||0;
Q=parseInt(qx.bom.element.Style.get(parent,i),10)||0;
O=bc-Y-P-Q;
}be=qx.bom.element.Location.get(K);
bf=be.top;
bb=be.bottom;
U=K.offsetHeight;
X=bf-N-P;
S=bb-V+Q;
bg=0;
if(bd){bg=X;
}else if(W){bg=S+O;
}else if(X<0||U>Y){bg=X;
}else if(S>0){bg=S+O;
}parent.scrollTop+=bg;
if(qx.bom.client.Engine.GECKO||qx.bom.client.Engine.OPERA){qx.event.Registration.fireNonBubblingEvent(parent,j);
}}
if(parent===M){break;
}parent=parent.parentNode;
}},intoView:function(H,stop,I,J){this.intoViewX(H,stop,I);
this.intoViewY(H,stop,J);
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
(function(){var v="qx.client",u="",t="qx.debug",s="boxSizing",r="on",q="box-sizing",p=":",o="border-box",n="qx.bom.element.BoxSizing",m="KhtmlBoxSizing",f="-moz-box-sizing",k="WebkitBoxSizing",j=";",e="-khtml-box-sizing",d="content-box",h="-webkit-box-sizing",g="MozBoxSizing";
qx.Class.define(n,{statics:{__cJ:qx.core.Variant.select(v,{"mshtml":null,"webkit":[s,m,k],"gecko":[g],"opera":[s]}),__cK:qx.core.Variant.select(v,{"mshtml":null,"webkit":[q,e,h],"gecko":[f],"opera":[q]}),__cL:{tags:{button:true,select:true},types:{search:true,button:true,submit:true,reset:true,checkbox:true,radio:true}},__cM:function(C){var D=this.__cL;
return D.tags[C.tagName.toLowerCase()]||D.types[C.type];
},compile:qx.core.Variant.select(v,{"mshtml":function(B){if(qx.core.Variant.isSet(t,r)){qx.log.Logger.warn(this,"This client do not support the dynamic modification of the box-sizing property.");
qx.log.Logger.trace();
}},"default":function(G){var I=this.__cK;
var H=u;

if(I){for(var i=0,l=I.length;i<l;i++){H+=I[i]+p+G+j;
}}return H;
}}),get:qx.core.Variant.select(v,{"mshtml":function(w){if(qx.bom.Document.isStandardMode(qx.dom.Node.getDocument(w))){if(!this.__cM(w)){return d;
}}return o;
},"default":function(a){var c=this.__cJ;
var b;

if(c){for(var i=0,l=c.length;i<l;i++){b=qx.bom.element.Style.get(a,c[i],null,false);

if(b!=null&&b!==u){return b;
}}}return u;
}}),set:qx.core.Variant.select(v,{"mshtml":function(E,F){if(qx.core.Variant.isSet(t,r)){qx.log.Logger.warn(this,"This client do not support the dynamic modification of the box-sizing property.");
}},"default":function(y,z){var A=this.__cJ;

if(A){for(var i=0,l=A.length;i<l;i++){y.style[A[i]]=z;
}}}}),reset:function(x){this.set(x,u);
}}});
})();
(function(){var p="",o="qx.client",n="userSelect",m="qx.debug",k="on",h="Invalid argument 'smart'",g="style",f="Invalid argument 'element'",e="MozUserModify",d="px",O="float",N="borderImage",M="styleFloat",L="appearance",K="pixelHeight",J='Ms',I=":",H="cssFloat",G="pixelTop",F="Invalid argument 'name'",w="pixelLeft",x='O',u="Invalid argument 'styles'",v="qx.bom.element.Style",s='Khtml',t='string',q="pixelRight",r='Moz',y="pixelWidth",z="pixelBottom",B=";",A="textOverflow",D="userModify",C='Webkit',E="WebkitUserModify";
qx.Class.define(v,{statics:{__cu:function(){var bk=[L,n,A,N];
var bo={};
var bl=document.documentElement.style;
var bp=[r,C,s,x,J];

for(var i=0,l=bk.length;i<l;i++){var bq=bk[i];
var bm=bq;

if(bl[bq]){bo[bm]=bq;
continue;
}bq=qx.lang.String.firstUp(bq);

for(var j=0,br=bp.length;j<br;j++){var bn=bp[j]+bq;

if(typeof bl[bn]==t){bo[bm]=bn;
break;
}}}this.__cv=bo;
this.__cv[D]=qx.core.Variant.select(o,{"gecko":e,"webkit":E,"default":n});
this.__cw={};

for(var bm in bo){this.__cw[bm]=this.__cA(bo[bm]);
}this.__cv[O]=qx.core.Variant.select(o,{"mshtml":M,"default":H});
},__cx:{width:y,height:K,left:w,right:q,top:G,bottom:z},__cy:{clip:qx.bom.element.Clip,cursor:qx.bom.element.Cursor,opacity:qx.bom.element.Opacity,boxSizing:qx.bom.element.BoxSizing,overflowX:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setX,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getX,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetX,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileX,qx.bom.element.Overflow)},overflowY:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setY,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getY,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetY,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileY,qx.bom.element.Overflow)}},compile:function(bu){var bw=[];
var by=this.__cy;
var bx=this.__cw;
var name,bv;

for(name in bu){bv=bu[name];

if(bv==null){continue;
}name=bx[name]||name;
if(by[name]){bw.push(by[name].compile(bv));
}else{bw.push(this.__cA(name),I,bv,B);
}}return bw.join(p);
},__cz:{},__cA:function(a){var b=this.__cz;
var c=b[a];

if(!c){c=b[a]=qx.lang.String.hyphenate(a);
}return c;
},setCss:qx.core.Variant.select(o,{"mshtml":function(bh,bi){bh.style.cssText=bi;
},"default":function(bI,bJ){bI.setAttribute(g,bJ);
}}),getCss:qx.core.Variant.select(o,{"mshtml":function(P){return P.style.cssText.toLowerCase();
},"default":function(bj){return bj.getAttribute(g);
}}),isPropertySupported:function(bs){return (this.__cy[bs]||this.__cv[bs]||bs in document.documentElement.style);
},COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(Q,name,R,S){if(qx.core.Variant.isSet(m,k)){qx.core.Assert.assertElement(Q,f);
qx.core.Assert.assertString(name,F);

if(S!==undefined){qx.core.Assert.assertBoolean(S,h);
}}name=this.__cv[name]||name;
if(S!==false&&this.__cy[name]){return this.__cy[name].set(Q,R);
}else{Q.style[name]=R!==null?R:p;
}},setStyles:function(Y,ba,bb){if(qx.core.Variant.isSet(m,k)){qx.core.Assert.assertElement(Y,f);
qx.core.Assert.assertMap(ba,u);

if(bb!==undefined){qx.core.Assert.assertBoolean(bb,h);
}}var be=this.__cv;
var bg=this.__cy;
var bc=Y.style;

for(var bf in ba){var bd=ba[bf];
var name=be[bf]||bf;

if(bd===undefined){if(bb!==false&&bg[name]){bg[name].reset(Y);
}else{bc[name]=p;
}}else{if(bb!==false&&bg[name]){bg[name].set(Y,bd);
}else{bc[name]=bd!==null?bd:p;
}}}},reset:function(bz,name,bA){name=this.__cv[name]||name;
if(bA!==false&&this.__cy[name]){return this.__cy[name].reset(bz);
}else{bz.style[name]=p;
}},get:qx.core.Variant.select(o,{"mshtml":function(bB,name,bC,bD){name=this.__cv[name]||name;
if(bD!==false&&this.__cy[name]){return this.__cy[name].get(bB,bC);
}if(!bB.currentStyle){return bB.style[name]||p;
}switch(bC){case this.LOCAL_MODE:return bB.style[name]||p;
case this.CASCADED_MODE:return bB.currentStyle[name]||p;
default:var bH=bB.currentStyle[name]||p;
if(/^-?[\.\d]+(px)?$/i.test(bH)){return bH;
}var bG=this.__cx[name];

if(bG){var bE=bB.style[name];
bB.style[name]=bH||0;
var bF=bB.style[bG]+d;
bB.style[name]=bE;
return bF;
}if(/^-?[\.\d]+(em|pt|%)?$/i.test(bH)){throw new Error("Untranslated computed property value: "+name+". Only pixel values work well across different clients.");
}return bH;
}},"default":function(T,name,U,V){name=this.__cv[name]||name;
if(V!==false&&this.__cy[name]){return this.__cy[name].get(T,U);
}switch(U){case this.LOCAL_MODE:return T.style[name]||p;
case this.CASCADED_MODE:if(T.currentStyle){return T.currentStyle[name]||p;
}throw new Error("Cascaded styles are not supported in this browser!");
default:var W=qx.dom.Node.getDocument(T);
var X=W.defaultView.getComputedStyle(T,null);
return X?X[name]:p;
}}})},defer:function(bt){bt.__cu();
}});
})();
(function(){var bx="borderTopWidth",bw="borderLeftWidth",bv="marginTop",bu="marginLeft",bt="scroll",bs="qx.client",br="border-box",bq="borderBottomWidth",bp="borderRightWidth",bo="auto",bM="padding",bL="qx.bom.element.Location",bK="paddingLeft",bJ="static",bI="marginBottom",bH="visible",bG="BODY",bF="paddingBottom",bE="paddingTop",bD="marginRight",bB="position",bC="margin",bz="overflow",bA="paddingRight",by="border";
qx.Class.define(bL,{statics:{__ig:function(m,n){return qx.bom.element.Style.get(m,n,qx.bom.element.Style.COMPUTED_MODE,false);
},__ih:function(B,C){return parseInt(qx.bom.element.Style.get(B,C,qx.bom.element.Style.COMPUTED_MODE,false),10)||0;
},__ii:function(i){var l=0,top=0;
if(i.getBoundingClientRect&&!qx.bom.client.Engine.OPERA){var k=qx.dom.Node.getWindow(i);
l-=qx.bom.Viewport.getScrollLeft(k);
top-=qx.bom.Viewport.getScrollTop(k);
}else{var j=qx.dom.Node.getDocument(i).body;
i=i.parentNode;
while(i&&i!=j){l+=i.scrollLeft;
top+=i.scrollTop;
i=i.parentNode;
}}return {left:l,top:top};
},__ij:qx.core.Variant.select(bs,{"mshtml":function(bk){var bm=qx.dom.Node.getDocument(bk);
var bl=bm.body;
var bn=0;
var top=0;
bn-=bl.clientLeft+bm.documentElement.clientLeft;
top-=bl.clientTop+bm.documentElement.clientTop;

if(qx.bom.client.Feature.STANDARD_MODE){bn+=this.__ih(bl,bw);
top+=this.__ih(bl,bx);
}return {left:bn,top:top};
},"webkit":function(a){var c=qx.dom.Node.getDocument(a);
var b=c.body;
var d=b.offsetLeft;
var top=b.offsetTop;
if(qx.bom.client.Engine.VERSION<530.17){d+=this.__ih(b,bw);
top+=this.__ih(b,bx);
}return {left:d,top:top};
},"gecko":function(w){var x=qx.dom.Node.getDocument(w).body;
var y=x.offsetLeft;
var top=x.offsetTop;
if(qx.bom.client.Engine.VERSION<1.9){y+=this.__ih(x,bu);
top+=this.__ih(x,bv);
}if(qx.bom.element.BoxSizing.get(x)!==br){y+=this.__ih(x,bw);
top+=this.__ih(x,bx);
}return {left:y,top:top};
},"default":function(bh){var bi=qx.dom.Node.getDocument(bh).body;
var bj=bi.offsetLeft;
var top=bi.offsetTop;
return {left:bj,top:top};
}}),__ik:qx.core.Variant.select(bs,{"mshtml|webkit":function(bc){var be=qx.dom.Node.getDocument(bc);
if(bc.getBoundingClientRect){var bf=bc.getBoundingClientRect();
var bg=bf.left;
var top=bf.top;
}else{var bg=bc.offsetLeft;
var top=bc.offsetTop;
bc=bc.offsetParent;
var bd=be.body;
while(bc&&bc!=bd){bg+=bc.offsetLeft;
top+=bc.offsetTop;
bg+=this.__ih(bc,bw);
top+=this.__ih(bc,bx);
bc=bc.offsetParent;
}}return {left:bg,top:top};
},"gecko":function(o){if(o.getBoundingClientRect){var r=o.getBoundingClientRect();
var s=Math.round(r.left);
var top=Math.round(r.top);
}else{var s=0;
var top=0;
var p=qx.dom.Node.getDocument(o).body;
var q=qx.bom.element.BoxSizing;

if(q.get(o)!==br){s-=this.__ih(o,bw);
top-=this.__ih(o,bx);
}
while(o&&o!==p){s+=o.offsetLeft;
top+=o.offsetTop;
if(q.get(o)!==br){s+=this.__ih(o,bw);
top+=this.__ih(o,bx);
}if(o.parentNode&&this.__ig(o.parentNode,bz)!=bH){s+=this.__ih(o.parentNode,bw);
top+=this.__ih(o.parentNode,bx);
}o=o.offsetParent;
}}return {left:s,top:top};
},"default":function(t){var v=0;
var top=0;
var u=qx.dom.Node.getDocument(t).body;
while(t&&t!==u){v+=t.offsetLeft;
top+=t.offsetTop;
t=t.offsetParent;
}return {left:v,top:top};
}}),get:function(F,G){if(F.tagName==bG){var location=this.__il(F);
var N=location.left;
var top=location.top;
}else{var H=this.__ij(F);
var M=this.__ik(F);
var scroll=this.__ii(F);
var N=M.left+H.left-scroll.left;
var top=M.top+H.top-scroll.top;
}var I=N+F.offsetWidth;
var J=top+F.offsetHeight;

if(G){if(G==bM||G==bt){var K=qx.bom.element.Overflow.getX(F);

if(K==bt||K==bo){I+=F.scrollWidth-F.offsetWidth+this.__ih(F,bw)+this.__ih(F,bp);
}var L=qx.bom.element.Overflow.getY(F);

if(L==bt||L==bo){J+=F.scrollHeight-F.offsetHeight+this.__ih(F,bx)+this.__ih(F,bq);
}}
switch(G){case bM:N+=this.__ih(F,bK);
top+=this.__ih(F,bE);
I-=this.__ih(F,bA);
J-=this.__ih(F,bF);
case bt:N-=F.scrollLeft;
top-=F.scrollTop;
I-=F.scrollLeft;
J-=F.scrollTop;
case by:N+=this.__ih(F,bw);
top+=this.__ih(F,bx);
I-=this.__ih(F,bp);
J-=this.__ih(F,bq);
break;
case bC:N-=this.__ih(F,bu);
top-=this.__ih(F,bv);
I+=this.__ih(F,bD);
J+=this.__ih(F,bI);
break;
}}return {left:N,top:top,right:I,bottom:J};
},__il:qx.core.Variant.select(bs,{"default":function(O){var top=O.offsetTop+this.__ih(O,bv);
var P=O.offsetLeft+this.__ih(O,bu);
return {left:P,top:top};
},"mshtml":function(e){var top=e.offsetTop;
var f=e.offsetLeft;

if(!((qx.bom.client.Engine.VERSION<8||qx.bom.client.Engine.DOCUMENT_MODE<8)&&!qx.bom.client.Feature.QUIRKS_MODE)){top+=this.__ih(e,bv);
f+=this.__ih(e,bu);
}return {left:f,top:top};
},"gecko":function(bN){var top=bN.offsetTop+this.__ih(bN,bv)+this.__ih(bN,bw);
var bO=bN.offsetLeft+this.__ih(bN,bu)+this.__ih(bN,bx);
return {left:bO,top:top};
}}),getLeft:function(W,X){return this.get(W,X).left;
},getTop:function(g,h){return this.get(g,h).top;
},getRight:function(D,E){return this.get(D,E).right;
},getBottom:function(z,A){return this.get(z,A).bottom;
},getRelative:function(Q,R,S,T){var V=this.get(Q,S);
var U=this.get(R,T);
return {left:V.left-U.left,top:V.top-U.top,right:V.right-U.right,bottom:V.bottom-U.bottom};
},getPosition:function(bP){return this.getRelative(bP,this.getOffsetParent(bP));
},getOffsetParent:function(Y){var bb=Y.offsetParent||document.body;
var ba=qx.bom.element.Style;

while(bb&&(!/^body|html$/i.test(bb.tagName)&&ba.get(bb,bB)===bJ)){bb=bb.offsetParent;
}return bb;
}}});
})();
(function(){var l="qx.client",k="character",j="EndToEnd",i="input",h="textarea",g="StartToStart",f='character',e="qx.bom.Selection",d="button",c="#text",b="body";
qx.Class.define(e,{statics:{getSelectionObject:qx.core.Variant.select(l,{"mshtml":function(F){return F.selection;
},"default":function(V){return qx.dom.Node.getWindow(V).getSelection();
}}),get:qx.core.Variant.select(l,{"mshtml":function(bp){var bq=qx.bom.Range.get(qx.dom.Node.getDocument(bp));
return bq.text;
},"default":function(a){if(this.__kx(a)){return a.value.substring(a.selectionStart,a.selectionEnd);
}else{return this.getSelectionObject(qx.dom.Node.getDocument(a)).toString();
}}}),getLength:qx.core.Variant.select(l,{"mshtml":function(br){var bt=this.get(br);
var bs=qx.util.StringSplit.split(bt,/\r\n/);
return bt.length-(bs.length-1);
},"opera":function(bg){var bl,bj,bh;

if(this.__kx(bg)){var bk=bg.selectionStart;
var bi=bg.selectionEnd;
bl=bg.value.substring(bk,bi);
bj=bi-bk;
}else{bl=qx.bom.Selection.get(bg);
bj=bl.length;
}bh=qx.util.StringSplit.split(bl,/\r\n/);
return bj-(bh.length-1);
},"default":function(Q){if(this.__kx(Q)){return Q.selectionEnd-Q.selectionStart;
}else{return this.get(Q).length;
}}}),getStart:qx.core.Variant.select(l,{"mshtml":function(m){if(this.__kx(m)){var r=qx.bom.Range.get();
if(!m.contains(r.parentElement())){return -1;
}var s=qx.bom.Range.get(m);
var q=m.value.length;
s.moveToBookmark(r.getBookmark());
s.moveEnd(f,q);
return q-s.text.length;
}else{var s=qx.bom.Range.get(m);
var o=s.parentElement();
var t=qx.bom.Range.get();
t.moveToElementText(o);
var n=qx.bom.Range.get(qx.dom.Node.getBodyElement(m));
n.setEndPoint(g,s);
n.setEndPoint(j,t);
if(t.compareEndPoints(g,n)==0){return 0;
}var p;
var u=0;

while(true){p=n.moveStart(k,-1);
if(t.compareEndPoints(g,n)==0){break;
}if(p==0){break;
}else{u++;
}}return ++u;
}},"gecko|webkit":function(G){if(this.__kx(G)){return G.selectionStart;
}else{var I=qx.dom.Node.getDocument(G);
var H=this.getSelectionObject(I);
if(H.anchorOffset<H.focusOffset){return H.anchorOffset;
}else{return H.focusOffset;
}}},"default":function(v){if(this.__kx(v)){return v.selectionStart;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(v)).anchorOffset;
}}}),getEnd:qx.core.Variant.select(l,{"mshtml":function(W){if(this.__kx(W)){var bc=qx.bom.Range.get();
if(!W.contains(bc.parentElement())){return -1;
}var bd=qx.bom.Range.get(W);
var bb=W.value.length;
bd.moveToBookmark(bc.getBookmark());
bd.moveStart(f,-bb);
return bd.text.length;
}else{var bd=qx.bom.Range.get(W);
var Y=bd.parentElement();
var be=qx.bom.Range.get();
be.moveToElementText(Y);
var bb=be.text.length;
var X=qx.bom.Range.get(qx.dom.Node.getBodyElement(W));
X.setEndPoint(j,bd);
X.setEndPoint(g,be);
if(be.compareEndPoints(j,X)==0){return bb-1;
}var ba;
var bf=0;

while(true){ba=X.moveEnd(k,1);
if(be.compareEndPoints(j,X)==0){break;
}if(ba==0){break;
}else{bf++;
}}return bb-(++bf);
}},"gecko|webkit":function(bm){if(this.__kx(bm)){return bm.selectionEnd;
}else{var bo=qx.dom.Node.getDocument(bm);
var bn=this.getSelectionObject(bo);
if(bn.focusOffset>bn.anchorOffset){return bn.focusOffset;
}else{return bn.anchorOffset;
}}},"default":function(x){if(this.__kx(x)){return x.selectionEnd;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(x)).focusOffset;
}}}),__kx:function(E){return qx.dom.Node.isElement(E)&&(E.nodeName.toLowerCase()==i||E.nodeName.toLowerCase()==h);
},set:qx.core.Variant.select(l,{"mshtml":function(bu,bv,bw){var bx;
if(qx.dom.Node.isDocument(bu)){bu=bu.body;
}
if(qx.dom.Node.isElement(bu)||qx.dom.Node.isText(bu)){switch(bu.nodeName.toLowerCase()){case i:case h:case d:if(bw===undefined){bw=bu.value.length;
}
if(bv>=0&&bv<=bu.value.length&&bw>=0&&bw<=bu.value.length){bx=qx.bom.Range.get(bu);
bx.collapse(true);
bx.moveStart(k,bv);
bx.moveEnd(k,bw-bv);
bx.select();
return true;
}break;
case c:if(bw===undefined){bw=bu.nodeValue.length;
}
if(bv>=0&&bv<=bu.nodeValue.length&&bw>=0&&bw<=bu.nodeValue.length){bx=qx.bom.Range.get(qx.dom.Node.getBodyElement(bu));
bx.moveToElementText(bu.parentNode);
bx.collapse(true);
bx.moveStart(k,bv);
bx.moveEnd(k,bw-bv);
bx.select();
return true;
}break;
default:if(bw===undefined){bw=bu.childNodes.length-1;
}if(bu.childNodes[bv]&&bu.childNodes[bw]){bx=qx.bom.Range.get(qx.dom.Node.getBodyElement(bu));
bx.moveToElementText(bu.childNodes[bv]);
bx.collapse(true);
var by=qx.bom.Range.get(qx.dom.Node.getBodyElement(bu));
by.moveToElementText(bu.childNodes[bw]);
bx.setEndPoint(j,by);
bx.select();
return true;
}}}return false;
},"default":function(J,K,L){var P=J.nodeName.toLowerCase();

if(qx.dom.Node.isElement(J)&&(P==i||P==h)){if(L===undefined){L=J.value.length;
}if(K>=0&&K<=J.value.length&&L>=0&&L<=J.value.length){J.focus();
J.select();
J.setSelectionRange(K,L);
return true;
}}else{var N=false;
var O=qx.dom.Node.getWindow(J).getSelection();
var M=qx.bom.Range.get(J);
if(qx.dom.Node.isText(J)){if(L===undefined){L=J.length;
}
if(K>=0&&K<J.length&&L>=0&&L<=J.length){N=true;
}}else if(qx.dom.Node.isElement(J)){if(L===undefined){L=J.childNodes.length-1;
}
if(K>=0&&J.childNodes[K]&&L>=0&&J.childNodes[L]){N=true;
}}else if(qx.dom.Node.isDocument(J)){J=J.body;

if(L===undefined){L=J.childNodes.length-1;
}
if(K>=0&&J.childNodes[K]&&L>=0&&J.childNodes[L]){N=true;
}}
if(N){if(!O.isCollapsed){O.collapseToStart();
}M.setStart(J,K);
if(qx.dom.Node.isText(J)){M.setEnd(J,L);
}else{M.setEndAfter(J.childNodes[L]);
}if(O.rangeCount>0){O.removeAllRanges();
}O.addRange(M);
return true;
}}return false;
}}),setAll:function(w){return qx.bom.Selection.set(w,0);
},clear:qx.core.Variant.select(l,{"mshtml":function(R){var S=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(R));
var T=qx.bom.Range.get(R);
var parent=T.parentElement();
var U=qx.bom.Range.get(qx.dom.Node.getDocument(R));
if(parent==U.parentElement()&&parent==R){S.empty();
}},"default":function(y){var A=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(y));
var C=y.nodeName.toLowerCase();
if(qx.dom.Node.isElement(y)&&(C==i||C==h)){y.setSelectionRange(0,0);
qx.bom.Element.blur(y);
}else if(qx.dom.Node.isDocument(y)||C==b){A.collapse(y.body?y.body:y,0);
}else{var B=qx.bom.Range.get(y);

if(!B.collapsed){var D;
var z=B.commonAncestorContainer;
if(qx.dom.Node.isElement(y)&&qx.dom.Node.isText(z)){D=z.parentNode;
}else{D=z;
}
if(D==y){A.collapse(y,0);
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
(function(){var b="qx.ui.core.queue.Widget",a="widget";
qx.Class.define(b,{statics:{__hY:{},remove:function(f){delete this.__hY[f.$$hash];
},add:function(g){var h=this.__hY;

if(h[g.$$hash]){return;
}h[g.$$hash]=g;
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var c=this.__hY;
var e;

for(var d in c){e=c[d];
delete c[d];
e.syncWidget();
}for(var d in c){return;
}this.__hY={};
}}});
})();
(function(){var b="qx.ui.core.queue.Visibility",a="visibility";
qx.Class.define(b,{statics:{__hK:{},__hL:{},remove:function(i){var j=i.$$hash;
delete this.__hL[j];
delete this.__hK[j];
},isVisible:function(h){return this.__hL[h.$$hash]||false;
},__hM:function(k){var m=this.__hL;
var l=k.$$hash;
var n;
if(k.isExcluded()){n=false;
}else{var parent=k.$$parent;

if(parent){n=this.__hM(parent);
}else{n=k.isRootWidget();
}}return m[l]=n;
},add:function(o){var p=this.__hK;

if(p[o.$$hash]){return;
}p[o.$$hash]=o;
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var c=this.__hK;
var g=this.__hL;
for(var d in c){if(g[d]!=null){c[d].addChildrenToQueue(c);
}}var f={};

for(var d in c){f[d]=g[d];
g[d]=null;
}for(var d in c){var e=c[d];
delete c[d];
if(g[d]==null){this.__hM(e);
}if(g[d]&&g[d]!=f[d]){e.checkAppearanceNeeds();
}}this.__hK={};
}}});
})();
(function(){var b="appearance",a="qx.ui.core.queue.Appearance";
qx.Class.define(a,{statics:{__hb:{},remove:function(c){delete this.__hb[c.$$hash];
},add:function(i){var j=this.__hb;

if(j[i.$$hash]){return;
}j[i.$$hash]=i;
qx.ui.core.queue.Manager.scheduleFlush(b);
},has:function(d){return !!this.__hb[d.$$hash];
},flush:function(){var h=qx.ui.core.queue.Visibility;
var e=this.__hb;
var g;

for(var f in e){g=e[f];
delete e[f];
if(h.isVisible(g)){g.syncAppearance();
}else{g.$$stateChanges=true;
}}}}});
})();
(function(){var b="dispose",a="qx.ui.core.queue.Dispose";
qx.Class.define(a,{statics:{__eN:{},add:function(c){var d=this.__eN;

if(d[c.$$hash]){return;
}d[c.$$hash]=c;
qx.ui.core.queue.Manager.scheduleFlush(b);
},flush:function(){var e=this.__eN;

for(var g in e){var f=e[g];
delete e[g];
f.dispose();
}for(var g in e){return;
}this.__eN={};
}}});
})();
(function(){var c="none",b="qx.html.Decorator",a="absolute";
qx.Class.define(b,{extend:qx.html.Element,construct:function(d,e){var f={position:a,top:0,left:0};

if(qx.bom.client.Feature.CSS_POINTER_EVENTS){f.pointerEvents=c;
}qx.html.Element.call(this,null,f);
this.__jN=d;
this.__jO=e||d.toHashCode();
this.useMarkup(d.getMarkup());
},members:{__jO:null,__jN:null,getId:function(){return this.__jO;
},getDecorator:function(){return this.__jN;
},resize:function(h,i){this.__jN.resize(this.getDomElement(),h,i);
},tint:function(g){this.__jN.tint(this.getDomElement(),g);
},getInsets:function(){return this.__jN.getInsets();
}},destruct:function(){this.__jN=null;
}});
})();
(function(){var f="blur",e="focus",d="input",c="load",b="qx.ui.core.EventHandler",a="activate";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){qx.core.Object.call(this);
this.__eg=qx.event.Registration.getManager(window);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1,keyup:1,keydown:1,keypress:1,keyinput:1,capture:1,losecapture:1,focusin:1,focusout:1,focus:1,blur:1,activate:1,deactivate:1,appear:1,disappear:1,dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:false},members:{__eg:null,__eh:{focusin:1,focusout:1,focus:1,blur:1},__ei:{mouseover:1,mouseout:1,appear:1,disappear:1},canHandleEvent:function(G,H){return G instanceof qx.ui.core.Widget;
},_dispatchEvent:function(q){var v=q.getTarget();
var u=qx.ui.core.Widget.getWidgetByElement(v);
var w=false;

while(u&&u.isAnonymous()){var w=true;
u=u.getLayoutParent();
}if(u&&w&&q.getType()==a){u.getContainerElement().activate();
}if(this.__eh[q.getType()]){u=u&&u.getFocusTarget();
if(!u){return;
}}if(q.getRelatedTarget){var D=q.getRelatedTarget();
var C=qx.ui.core.Widget.getWidgetByElement(D);

while(C&&C.isAnonymous()){C=C.getLayoutParent();
}
if(C){if(this.__eh[q.getType()]){C=C.getFocusTarget();
}if(C===u){return;
}}}var y=q.getCurrentTarget();
var A=qx.ui.core.Widget.getWidgetByElement(y);

if(!A||A.isAnonymous()){return;
}if(this.__eh[q.getType()]){A=A.getFocusTarget();
}var B=q.getType();

if(!A||!(A.isEnabled()||this.__ei[B])){return;
}var r=q.getEventPhase()==qx.event.type.Event.CAPTURING_PHASE;
var x=this.__eg.getListeners(A,B,r);

if(!x||x.length===0){return;
}var s=qx.event.Pool.getInstance().getObject(q.constructor);
q.clone(s);
s.setTarget(u);
s.setRelatedTarget(C||null);
s.setCurrentTarget(A);
var E=q.getOriginalTarget();

if(E){var t=qx.ui.core.Widget.getWidgetByElement(E);

while(t&&t.isAnonymous()){t=t.getLayoutParent();
}s.setOriginalTarget(t);
}else{s.setOriginalTarget(v);
}for(var i=0,l=x.length;i<l;i++){var z=x[i].context||A;
x[i].handler.call(z,s);
}if(s.getPropagationStopped()){q.stopPropagation();
}
if(s.getDefaultPrevented()){q.preventDefault();
}qx.event.Pool.getInstance().poolObject(s);
},registerEvent:function(g,h,j){var k;

if(h===e||h===f){k=g.getFocusElement();
}else if(h===c||h===d){k=g.getContentElement();
}else{k=g.getContainerElement();
}
if(k){k.addListener(h,this._dispatchEvent,this,j);
}},unregisterEvent:function(m,n,o){var p;

if(n===e||n===f){p=m.getFocusElement();
}else if(n===c||n===d){p=m.getContentElement();
}else{p=m.getContainerElement();
}
if(p){p.removeListener(n,this._dispatchEvent,this,o);
}}},destruct:function(){this.__eg=null;
},defer:function(F){qx.event.Registration.addHandler(F);
}});
})();
(function(){var c="abstract",b="qx.debug",a="qx.ui.layout.Abstract";
qx.Class.define(a,{type:c,extend:qx.core.Object,members:{__gk:null,_invalidChildrenCache:null,__gl:null,invalidateLayoutCache:function(){this.__gk=null;
},renderLayout:function(h,i){this.warn("Missing renderLayout() implementation!");
},getSizeHint:function(){if(this.__gk){return this.__gk;
}return this.__gk=this._computeSizeHint();
},hasHeightForWidth:function(){return false;
},getHeightForWidth:function(d){this.warn("Missing getHeightForWidth() implementation!");
return null;
},_computeSizeHint:function(){return null;
},invalidateChildrenCache:function(){this._invalidChildrenCache=true;
},verifyLayoutProperty:qx.core.Variant.select(b,{"on":function(j,name,k){},"off":null}),_clearSeparators:function(){var l=this.__gl;

if(l instanceof qx.ui.core.LayoutItem){l.clearSeparators();
}},_renderSeparator:function(e,f){this.__gl.renderSeparator(e,f);
},connectToWidget:function(g){if(g&&this.__gl){throw new Error("It is not possible to manually set the connected widget.");
}this.__gl=g;
this.invalidateChildrenCache();
},_getWidget:function(){return this.__gl;
},_applyLayoutChange:function(){if(this.__gl){this.__gl.scheduleLayoutUpdate();
}},_getLayoutChildren:function(){return this.__gl.getLayoutChildren();
}},destruct:function(){this.__gl=this.__gk=null;
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
(function(){var c="qx.bom.client.Locale",b="-",a="";
qx.Class.define(c,{statics:{LOCALE:"",VARIANT:"",__kS:function(){var e=(navigator.userLanguage||navigator.language).toLowerCase();
var g=a;
var f=e.indexOf(b);

if(f!=-1){g=e.substr(f+1);
e=e.substr(0,f);
}this.LOCALE=e;
this.VARIANT=g;
}},defer:function(d){d.__kS();
}});
})();
(function(){var y="",x='indexOf',w='slice',v='concat',u='toLocaleLowerCase',t="qx.type.BaseString",s='match',r="qx.debug",q='search',p='replace',g='toLowerCase',o='charCodeAt',k='split',f='substring',e='lastIndexOf',j="on",h='substr',m='toLocaleUpperCase',d='toUpperCase',n='charAt';
qx.Class.define(t,{extend:Object,construct:function(B){var B=B||y;
this.__lr=B;
this.length=B.length;
},members:{$$isString:true,length:0,__lr:null,toString:function(){return this.__lr;
},charAt:null,valueOf:null,charCodeAt:null,concat:null,indexOf:null,lastIndexOf:null,match:null,replace:null,search:null,slice:null,split:null,substr:null,substring:null,toLowerCase:null,toUpperCase:null,toHashCode:function(){return qx.core.ObjectRegistry.toHashCode(this);
},toLocaleLowerCase:null,toLocaleUpperCase:null,base:function(z,A){return qx.core.Object.prototype.base.apply(this,arguments);
}},defer:function(a,b){if(qx.core.Variant.isSet(r,j)){qx.Class.include(a,qx.core.MAssert);
}var c=[n,o,v,x,e,s,p,q,w,k,h,f,g,d,u,m];
b.valueOf=b.toString;

if(new a(y).valueOf()==null){delete b.valueOf;
}
for(var i=0,l=c.length;i<l;i++){b[c[i]]=String.prototype[c[i]];
}}});
})();
(function(){var a="qx.locale.LocalizedString";
qx.Class.define(a,{extend:qx.type.BaseString,construct:function(b,c,d){qx.type.BaseString.call(this,b);
this.__ej=c;
this.__ek=d;
},members:{__ej:null,__ek:null,translate:function(){return qx.locale.Manager.getInstance().translate(this.__ej,this.__ek);
}}});
})();
(function(){var o="_",n="",m="_applyLocale",l="changeLocale",k="C",j="qx.dynlocale",h="on",g="qx.locale.Manager",f="String",e="singleton";
qx.Class.define(g,{type:e,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__im=qx.$$translations||{};
this.__in=qx.$$locales||{};
var J=qx.bom.client.Locale;
var H=J.LOCALE;
var I=J.VARIANT;

if(I!==n){H+=o+I;
}this.setLocale(H||this.__io);
},statics:{tr:function(O,P){var Q=qx.lang.Array.fromArguments(arguments);
Q.splice(0,1);
return qx.locale.Manager.getInstance().translate(O,Q);
},trn:function(x,y,z,A){var B=qx.lang.Array.fromArguments(arguments);
B.splice(0,3);
if(z!=1){return qx.locale.Manager.getInstance().translate(y,B);
}else{return qx.locale.Manager.getInstance().translate(x,B);
}},trc:function(a,b,c){var d=qx.lang.Array.fromArguments(arguments);
d.splice(0,2);
return qx.locale.Manager.getInstance().translate(b,d);
},marktr:function(bg){return bg;
}},properties:{locale:{check:f,nullable:true,apply:m,event:l}},members:{__io:k,__ip:null,__iq:null,__im:null,__in:null,getLanguage:function(){return this.__iq;
},getTerritory:function(){return this.getLocale().split(o)[1]||n;
},getAvailableLocales:function(){var D=[];

for(var C in this.__in){if(C!=this.__io){D.push(C);
}}return D;
},__ir:function(E){var G;
var F=E.indexOf(o);

if(F==-1){G=E;
}else{G=E.substring(0,F);
}return G;
},_applyLocale:function(V,W){this.__ip=V;
this.__iq=this.__ir(V);
},addTranslation:function(bc,bd){var be=this.__im;

if(be[bc]){for(var bf in bd){be[bc][bf]=bd[bf];
}}else{be[bc]=bd;
}},addLocale:function(R,S){var T=this.__in;

if(T[R]){for(var U in S){T[R][U]=S[U];
}}else{T[R]=S;
}},translate:function(X,Y,ba){var bb=this.__im;
return this.__is(bb,X,Y,ba);
},localize:function(K,L,M){var N=this.__in;
return this.__is(N,K,L,M);
},__is:function(p,q,r,s){var t;

if(!p){return q;
}
if(s){var v=this.__ir(s);
}else{s=this.__ip;
v=this.__iq;
}if(!t&&p[s]){t=p[s][q];
}if(!t&&p[v]){t=p[v][q];
}if(!t&&p[this.__io]){t=p[this.__io][q];
}
if(!t){t=q;
}
if(r.length>0){var u=[];

for(var i=0;i<r.length;i++){var w=r[i];

if(w&&w.translate){u[i]=w.translate();
}else{u[i]=w;
}}t=qx.lang.String.format(t,u);
}
if(qx.core.Variant.isSet(j,h)){t=new qx.locale.LocalizedString(t,q,r);
}return t;
}},destruct:function(){this.__im=this.__in=null;
}});
})();
(function(){var p="px",o="qx.client",n="div",m="img",l="",k="no-repeat",j="qx.debug",i="scale-x",h="mshtml",g="on",N="repeat",M="scale",L="scale-y",K="qx/icon",J=".png",I="crop",H="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",G='<div style="',F="repeat-y",E='<img src="',w="qx.bom.element.Decoration",x="', sizingMethod='",u="png",v="')",s='"></div>',t='"/>',q='" style="',r="none",y="webkit",z=" ",B="repeat-x",A="DXImageTransform.Microsoft.AlphaImageLoader",D="qx/static/blank.gif",C="absolute";
qx.Class.define(w,{statics:{DEBUG:false,__gM:{},__gN:qx.core.Variant.isSet(o,h),__gO:qx.core.Variant.select(o,{"mshtml":{"scale-x":true,"scale-y":true,"scale":true,"no-repeat":true},"default":null}),__gP:{"scale-x":m,"scale-y":m,"scale":m,"repeat":n,"no-repeat":n,"repeat-x":n,"repeat-y":n},update:function(bh,bi,bj,bk){var bm=this.getTagName(bj,bi);

if(bm!=bh.tagName.toLowerCase()){throw new Error("Image modification not possible because elements could not be replaced at runtime anymore!");
}var bn=this.getAttributes(bi,bj,bk);

if(bm===m){bh.src=bn.src||qx.util.ResourceManager.getInstance().toUri(D);
}if(bh.style.backgroundPosition!=l&&bn.style.backgroundPosition===undefined){bn.style.backgroundPosition=null;
}if(bh.style.clip!=l&&bn.style.clip===undefined){bn.style.clip=null;
}var bl=qx.bom.element.Style;
bl.setStyles(bh,bn.style);
if(this.__gN){try{bh.filters[A].apply();
}catch(e){}}},create:function(ba,bb,bc){var bd=this.getTagName(bb,ba);
var bf=this.getAttributes(ba,bb,bc);
var be=qx.bom.element.Style.compile(bf.style);

if(bd===m){return E+bf.src+q+be+t;
}else{return G+be+s;
}},getTagName:function(bW,bX){if(qx.core.Variant.isSet(o,h)){if(bX&&this.__gN&&this.__gO[bW]&&qx.lang.String.endsWith(bX,J)){return n;
}}return this.__gP[bW];
},getAttributes:function(O,P,Q){if(!Q){Q={};
}
if(!Q.position){Q.position=C;
}
if(qx.core.Variant.isSet(o,h)){Q.fontSize=0;
Q.lineHeight=0;
}else if(qx.core.Variant.isSet(o,y)){Q.WebkitUserDrag=r;
}var S=qx.util.ResourceManager.getInstance().getImageFormat(O)||qx.io.ImageLoader.getFormat(O);

if(qx.core.Variant.isSet(j,g)){if(O!=null&&S==null){qx.log.Logger.warn("ImageLoader: Not recognized format of external image '"+O+"'!");
}}var R;
if(this.__gN&&this.__gO[P]&&S===u){R=this.__gS(Q,P,O);
}else{if(P===M){R=this.__gT(Q,P,O);
}else if(P===i||P===L){R=this.__gU(Q,P,O);
}else{R=this.__gX(Q,P,O);
}}return R;
},__gQ:function(bo,bp,bq){if(bo.width==null&&bp!=null){bo.width=bp+p;
}
if(bo.height==null&&bq!=null){bo.height=bq+p;
}return bo;
},__gR:function(by){var bz=qx.util.ResourceManager.getInstance().getImageWidth(by)||qx.io.ImageLoader.getWidth(by);
var bA=qx.util.ResourceManager.getInstance().getImageHeight(by)||qx.io.ImageLoader.getHeight(by);
return {width:bz,height:bA};
},__gS:function(T,U,V){var Y=this.__gR(V);
T=this.__gQ(T,Y.width,Y.height);
var X=U==k?I:M;
var W=H+qx.util.ResourceManager.getInstance().toUri(V)+x+X+v;
T.filter=W;
T.backgroundImage=T.backgroundRepeat=l;
return {style:T};
},__gT:function(a,b,c){var d=qx.util.ResourceManager.getInstance().toUri(c);
var f=this.__gR(c);
a=this.__gQ(a,f.width,f.height);
return {src:d,style:a};
},__gU:function(bB,bC,bD){var bH=qx.util.ResourceManager.getInstance();
var bG=bH.isClippedImage(bD);
var bI=this.__gR(bD);

if(bG){var bF=bH.getData(bD);
var bE=bH.toUri(bF[4]);

if(bC===i){bB=this.__gV(bB,bF,bI.height);
}else{bB=this.__gW(bB,bF,bI.width);
}return {src:bE,style:bB};
}else{if(qx.core.Variant.isSet(j,g)){this.__ha(bD);
}
if(bC==i){bB.height=bI.height==null?null:bI.height+p;
}else if(bC==L){bB.width=bI.width==null?null:bI.width+p;
}var bE=bH.toUri(bD);
return {src:bE,style:bB};
}},__gV:function(bY,ca,cb){var cc=qx.util.ResourceManager.getInstance().getImageHeight(ca[4]);
bY.clip={top:-ca[6],height:cb};
bY.height=cc+p;
if(bY.top!=null){bY.top=(parseInt(bY.top,10)+ca[6])+p;
}else if(bY.bottom!=null){bY.bottom=(parseInt(bY.bottom,10)+cb-cc-ca[6])+p;
}return bY;
},__gW:function(bS,bT,bU){var bV=qx.util.ResourceManager.getInstance().getImageWidth(bT[4]);
bS.clip={left:-bT[5],width:bU};
bS.width=bV+p;
if(bS.left!=null){bS.left=(parseInt(bS.left,10)+bT[5])+p;
}else if(bS.right!=null){bS.right=(parseInt(bS.right,10)+bU-bV-bT[5])+p;
}return bS;
},__gX:function(bJ,bK,bL){var bQ=qx.util.ResourceManager.getInstance().isClippedImage(bL);
var bP=this.__gR(bL);
if(bQ&&bK!==N){var bO=qx.util.ResourceManager.getInstance().getData(bL);
var bN=qx.bom.element.Background.getStyles(bO[4],bK,bO[5],bO[6]);

for(var bM in bN){bJ[bM]=bN[bM];
}
if(bP.width!=null&&bJ.width==null&&(bK==F||bK===k)){bJ.width=bP.width+p;
}
if(bP.height!=null&&bJ.height==null&&(bK==B||bK===k)){bJ.height=bP.height+p;
}return {style:bJ};
}else{if(qx.core.Variant.isSet(j,g)){if(bK!==N){this.__ha(bL);
}}bJ=this.__gQ(bJ,bP.width,bP.height);
bJ=this.__gY(bJ,bL,bK);
return {style:bJ};
}},__gY:function(br,bs,bt){var top=null;
var bx=null;

if(br.backgroundPosition){var bu=br.backgroundPosition.split(z);
bx=parseInt(bu[0]);

if(isNaN(bx)){bx=bu[0];
}top=parseInt(bu[1]);

if(isNaN(top)){top=bu[1];
}}var bw=qx.bom.element.Background.getStyles(bs,bt,bx,top);

for(var bv in bw){br[bv]=bw[bv];
}if(br.filter){br.filter=l;
}return br;
},__ha:function(bR){if(this.DEBUG&&qx.util.ResourceManager.getInstance().has(bR)&&bR.indexOf(K)==-1){if(!this.__gM[bR]){qx.log.Logger.debug("Potential clipped image candidate: "+bR);
this.__gM[bR]=true;
}}},isAlphaImageLoaderEnabled:qx.core.Variant.select(o,{"mshtml":function(){return qx.bom.element.Decoration.__gN;
},"default":function(){return false;
}})}});
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
(function(){var j="source",i="scale",h="no-repeat",g="qx.client",f="mshtml",e="webkit",d="backgroundImage",c="div",b="qx.html.Image",a="qx/static/blank.gif";
qx.Class.define(b,{extend:qx.html.Element,members:{tagNameHint:null,_applyProperty:function(name,q){qx.html.Element.prototype._applyProperty.call(this,name,q);

if(name===j){var u=this.getDomElement();
var r=this.getAllStyles();

if(this.getNodeName()==c&&this.getStyle(d)){r.backgroundPosition=null;
r.backgroundRepeat=null;
}var s=this._getProperty(j);
var t=this._getProperty(i);
var v=t?i:h;
if(s!=null){qx.bom.element.Decoration.update(u,s,v,r);
}}},_createDomElement:function(){var o=this._getProperty(i);
var p=o?i:h;

if(qx.core.Variant.isSet(g,f)){var n=this._getProperty(j);

if(this.tagNameHint!=null){this.setNodeName(this.tagNameHint);
}else{this.setNodeName(qx.bom.element.Decoration.getTagName(p,n));
}}else{this.setNodeName(qx.bom.element.Decoration.getTagName(p));
}return qx.html.Element.prototype._createDomElement.call(this);
},_copyData:function(m){return qx.html.Element.prototype._copyData.call(this,true);
},setSource:function(k){this._setProperty(j,k);
return this;
},getSource:function(){return this._getProperty(j);
},resetSource:function(){if(qx.core.Variant.isSet(g,e)){this._setProperty(j,qx.util.ResourceManager.getInstance().toUri(a));
}else{this._removeProperty(j,true);
}return this;
},setScale:function(l){this._setProperty(i,l);
return this;
},getScale:function(){return this._getProperty(i);
}}});
})();
(function(){var T="nonScaled",S="scaled",R="alphaScaled",Q=".png",P="qx.client",O="div",N="replacement",M="qx.event.type.Event",L="hidden",K="Boolean",bm="px",bl="http",bk="scale",bj="changeSource",bi="qx.ui.basic.Image",bh="__it",bg="qx.debug",bf="loaded",be="-disabled.$1",bd="loadingFailed",bb="String",bc="_applySource",Y="img",ba="image",W="mshtml",X="_applyScale",U="no-repeat",V="on";
qx.Class.define(bi,{extend:qx.ui.core.Widget,construct:function(z){this.__it={};
qx.ui.core.Widget.call(this);

if(z){this.setSource(z);
}},properties:{source:{check:bb,init:null,nullable:true,event:bj,apply:bc,themeable:true},scale:{check:K,init:false,themeable:true,apply:X},appearance:{refine:true,init:ba},allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false}},events:{loadingFailed:M,loaded:M},members:{__iu:null,__iv:null,__iw:null,__it:null,getContentElement:function(){return this.__iA();
},_createContentElement:function(){return this.__iA();
},_getContentHint:function(){return {width:this.__iu||0,height:this.__iv||0};
},_applyEnabled:function(I,J){qx.ui.core.Widget.prototype._applyEnabled.call(this,I,J);

if(this.getSource()){this._styleSource();
}},_applySource:function(bn){this._styleSource();
},_applyScale:function(r){this._styleSource();
},__ix:function(y){this.__iw=y;
},__iy:function(){if(this.__iw==null){var b=this.getSource();
var a=false;

if(b!=null){a=qx.lang.String.endsWith(b,Q);
}
if(this.getScale()&&a&&qx.bom.element.Decoration.isAlphaImageLoaderEnabled()){this.__iw=R;
}else if(this.getScale()){this.__iw=S;
}else{this.__iw=T;
}}return this.__iw;
},__iz:function(h){var i;
var j;

if(h==R){i=true;
j=O;
}else if(h==T){i=false;
j=O;
}else{i=true;
j=Y;
}var k=new qx.html.Image(j);
k.setScale(i);
k.setStyles({"overflowX":L,"overflowY":L});
return k;
},__iA:function(){var bq=this.__iy();

if(this.__it[bq]==null){this.__it[bq]=this.__iz(bq);
}return this.__it[bq];
},_styleSource:function(){var br=qx.util.AliasManager.getInstance().resolve(this.getSource());

if(!br){this.getContentElement().resetSource();
return;
}this.__iB(br);

if(qx.core.Variant.isSet(P,W)){var bs=this.getScale()?bk:U;
this.getContentElement().tagNameHint=qx.bom.element.Decoration.getTagName(bs,br);
}if(qx.util.ResourceManager.getInstance().has(br)){this.__iD(this.getContentElement(),br);
}else if(qx.io.ImageLoader.isLoaded(br)){this.__iE(this.getContentElement(),br);
}else{this.__iF(this.getContentElement(),br);
}},__iB:qx.core.Variant.select(P,{"mshtml":function(o){var q=qx.bom.element.Decoration.isAlphaImageLoaderEnabled();
var p=qx.lang.String.endsWith(o,Q);

if(q&&p){if(this.getScale()&&this.__iy()!=R){this.__ix(R);
}else if(!this.getScale()&&this.__iy()!=T){this.__ix(T);
}}else{if(this.getScale()&&this.__iy()!=S){this.__ix(S);
}else if(!this.getScale()&&this.__iy()!=T){this.__ix(T);
}}this.__iC(this.__iA());
},"default":function(A){if(this.getScale()&&this.__iy()!=S){this.__ix(S);
}else if(!this.getScale()&&this.__iy(T)){this.__ix(T);
}this.__iC(this.__iA());
}}),__iC:function(B){var E=this.getContainerElement();
var F=E.getChild(0);

if(F!=B){if(F!=null){var H=bm;
var C={};
var D=this.getInnerSize();

if(D!=null){C.width=D.width+H;
C.height=D.height+H;
}var G=this.getInsets();
C.left=G.left+H;
C.top=G.top+H;
C.zIndex=10;
B.setStyles(C,true);
B.setSelectable(this.getSelectable());
}E.removeAt(0);
E.addAt(B,0);
}},__iD:function(s,t){var v=qx.util.ResourceManager.getInstance();
if(!this.getEnabled()){var u=t.replace(/\.([a-z]+)$/,be);

if(v.has(u)){t=u;
this.addState(N);
}else{this.removeState(N);
}}if(s.getSource()===t){return;
}s.setSource(t);
this.__iH(v.getImageWidth(t),v.getImageHeight(t));
},__iE:function(c,d){var f=qx.io.ImageLoader;
c.setSource(d);
var e=f.getWidth(d);
var g=f.getHeight(d);
this.__iH(e,g);
},__iF:function(l,m){var n=qx.io.ImageLoader;

if(qx.core.Variant.isSet(bg,V)){if(!qx.lang.String.startsWith(m.toLowerCase(),bl)){var self=this.self(arguments);

if(!self.__sV){self.__sV={};
}
if(!self.__sV[m]){this.debug("try to load a unmanaged relative image: "+m);
self.__sV[m]=true;
}}}if(!n.isFailed(m)){n.load(m,this.__iG,this);
}else{if(l!=null){l.resetSource();
}}},__iG:function(w,x){if(this.$$disposed===true){return;
}if(w!==qx.util.AliasManager.getInstance().resolve(this.getSource())){return;
}if(x.failed){this.warn("Image could not be loaded: "+w);
this.fireEvent(bd);
}else{this.fireEvent(bf);
}this._styleSource();
},__iH:function(bo,bp){if(bo!==this.__iu||bp!==this.__iv){this.__iu=bo;
this.__iv=bp;
qx.ui.core.queue.Layout.add(this);
}}},destruct:function(){this._disposeMap(bh);
}});
})();
(function(){var g="dragdrop-cursor",f="_applyAction",e="alias",d="qx.ui.core.DragDropCursor",c="move",b="singleton",a="copy";
qx.Class.define(d,{extend:qx.ui.basic.Image,include:qx.ui.core.MPlacement,type:b,construct:function(){qx.ui.basic.Image.call(this);
this.setZIndex(1e8);
this.setDomMove(true);
var j=this.getApplicationRoot();
j.add(this,{left:-1000,top:-1000});
},properties:{appearance:{refine:true,init:g},action:{check:[e,a,c],apply:f,nullable:true}},members:{_applyAction:function(h,i){if(i){this.removeState(i);
}
if(h){this.addState(h);
}}}});
})();
(function(){var f="interval",e="Number",d="_applyTimeoutInterval",c="qx.event.type.Event",b="qx.event.Idle",a="singleton";
qx.Class.define(b,{extend:qx.core.Object,type:a,construct:function(){qx.core.Object.call(this);
var g=new qx.event.Timer(this.getTimeoutInterval());
g.addListener(f,this._onInterval,this);
g.start();
this.__kf=g;
},events:{"interval":c},properties:{timeoutInterval:{check:e,init:100,apply:d}},members:{__kf:null,_applyTimeoutInterval:function(h){this.__kf.setInterval(h);
},_onInterval:function(){this.fireEvent(f);
}},destruct:function(){if(this.__kf){this.__kf.stop();
}this.__kf=null;
}});
})();
(function(){var j="top",i="right",h="bottom",g="left",f="edge-start",e="align-start",d="align-end",c="edge-end",b="qx.util.placement.AbstractAxis",a="-",G="best-fit",F="size",E="target.bottom",D="offsets",C="size.width",B="offsets.bottom",A="qx.util.placement.Placement",z='__hc',y="qx.debug",x="keep-align",q="target.right",r="direct",o="offsets.right",p="target",m="offsets.left",n="area",k="target.top",l="area.height",s="target.left",t="area.width",v="on",u="size.height",w="offsets.top";
qx.Class.define(A,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__hc=new qx.util.placement.DirectAxis();
},properties:{axisX:{check:b},axisY:{check:b},edge:{check:[j,i,h,g],init:j},align:{check:[j,i,h,g],init:i}},statics:{__hd:null,compute:function(T,U,V,W,X,Y,ba){this.__hd=this.__hd||new qx.util.placement.Placement();
var bd=X.split(a);
var bc=bd[0];
var bb=bd[1];
this.__hd.set({axisX:this.__hh(Y),axisY:this.__hh(ba),edge:bc,align:bb});
return this.__hd.compute(T,U,V,W);
},__he:null,__hf:null,__hg:null,__hh:function(S){switch(S){case r:this.__he=this.__he||new qx.util.placement.DirectAxis();
return this.__he;
case x:this.__hf=this.__hf||new qx.util.placement.KeepAlignAxis();
return this.__hf;
case G:this.__hg=this.__hg||new qx.util.placement.BestFitAxis();
return this.__hg;
default:throw new Error("Invalid 'mode' argument!'");
}}},members:{__hc:null,compute:function(L,M,N,O){if(qx.core.Variant.isSet(y,v)){this.assertObject(L,F);
this.assertNumber(L.width,C);
this.assertNumber(L.height,u);
this.assertObject(M,n);
this.assertNumber(M.width,t);
this.assertNumber(M.height,l);
this.assertObject(N,p);
this.assertNumber(N.top,k);
this.assertNumber(N.right,q);
this.assertNumber(N.bottom,E);
this.assertNumber(N.left,s);
this.assertObject(O,D);
this.assertNumber(O.top,w);
this.assertNumber(O.right,o);
this.assertNumber(O.bottom,B);
this.assertNumber(O.left,m);
}var P=this.getAxisX()||this.__hc;
var R=P.computeStart(L.width,{start:N.left,end:N.right},{start:O.left,end:O.right},M.width,this.__hi());
var Q=this.getAxisY()||this.__hc;
var top=Q.computeStart(L.height,{start:N.top,end:N.bottom},{start:O.top,end:O.bottom},M.height,this.__hj());
return {left:R,top:top};
},__hi:function(){var K=this.getEdge();
var J=this.getAlign();

if(K==g){return f;
}else if(K==i){return c;
}else if(J==g){return e;
}else if(J==i){return d;
}},__hj:function(){var I=this.getEdge();
var H=this.getAlign();

if(I==j){return f;
}else if(I==h){return c;
}else if(H==j){return e;
}else if(H==h){return d;
}}},destruct:function(){this._disposeObjects(z);
}});
})();
(function(){var e="edge-start",d="align-start",c="align-end",b="edge-end",a="qx.util.placement.AbstractAxis";
qx.Class.define(a,{extend:qx.core.Object,members:{computeStart:function(f,g,h,i,j){throw new Error("abstract method call!");
},_moveToEdgeAndAlign:function(n,o,p,q){switch(q){case e:return o.start-p.end-n;
case b:return o.end+p.start;
case d:return o.start+p.start;
case c:return o.end-p.end-n;
}},_isInRange:function(k,l,m){return k>=0&&k+l<=m;
}}});
})();
(function(){var a="qx.util.placement.DirectAxis";
qx.Class.define(a,{extend:qx.util.placement.AbstractAxis,members:{computeStart:function(b,c,d,e,f){return this._moveToEdgeAndAlign(b,c,d,f);
}}});
})();
(function(){var c="qx.util.placement.KeepAlignAxis",b="edge-start",a="edge-end";
qx.Class.define(c,{extend:qx.util.placement.AbstractAxis,members:{computeStart:function(d,e,f,g,h){var i=this._moveToEdgeAndAlign(d,e,f,h);
var j,k;

if(this._isInRange(i,d,g)){return i;
}
if(h==b||h==a){j=e.start-f.end;
k=e.end+f.start;
}else{j=e.end-f.end;
k=e.start+f.start;
}
if(j>g-k){i=j-d;
}else{i=k;
}return i;
}}});
})();
(function(){var a="qx.util.placement.BestFitAxis";
qx.Class.define(a,{extend:qx.util.placement.AbstractAxis,members:{computeStart:function(b,c,d,e,f){var g=this._moveToEdgeAndAlign(b,c,d,f);

if(this._isInRange(g,b,e)){return g;
}
if(g<0){g=Math.min(0,e-b);
}
if(g+b>e){g=Math.max(0,e-b);
}return g;
}}});
})();
(function(){var h="mousedown",g="qx.debug",f="on",d="blur",c="__qD",b="qx.ui.popup.Manager",a="singleton";
qx.Class.define(b,{type:a,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__qD={};
qx.event.Registration.addListener(document.documentElement,h,this.__qF,this,true);
qx.bom.Element.addListener(window,d,this.hideAll,this);
},members:{__qD:null,add:function(t){if(qx.core.Variant.isSet(g,f)){if(!(t instanceof qx.ui.popup.Popup)){throw new Error("Object is no popup: "+t);
}}this.__qD[t.$$hash]=t;
this.__qE();
},remove:function(k){if(qx.core.Variant.isSet(g,f)){if(!(k instanceof qx.ui.popup.Popup)){throw new Error("Object is no popup: "+k);
}}var l=this.__qD;

if(l){delete l[k.$$hash];
this.__qE();
}},hideAll:function(){var j=this.__qD;

if(j){for(var i in j){j[i].exclude();
}}},__qE:function(){var s=1e7;
var r=this.__qD;

for(var q in r){r[q].setZIndex(s++);
}},__qF:function(e){var o=qx.ui.core.Widget.getWidgetByElement(e.getTarget());
var p=this.__qD;

for(var n in p){var m=p[n];

if(!m.getAutoHide()||o==m||qx.ui.core.Widget.contains(m,o)){continue;
}m.exclude();
}}},destruct:function(){qx.event.Registration.removeListener(document.documentElement,h,this.__qF,this,true);
this._disposeMap(c);
}});
})();
(function(){var d="' is not supported by the Grow layout!",c="qx.ui.layout.Grow",b="qx.debug",a="The property '";
qx.Class.define(c,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:qx.core.Variant.select(b,{"on":function(e,name,f){this.assert(false,a+name+d);
},"off":null}),renderLayout:function(g,h){var n=this._getLayoutChildren();
var m,o,k,j;
for(var i=0,l=n.length;i<l;i++){m=n[i];
o=m.getSizeHint();
k=g;

if(k<o.minWidth){k=o.minWidth;
}else if(k>o.maxWidth){k=o.maxWidth;
}j=h;

if(j<o.minHeight){j=o.minHeight;
}else if(j>o.maxHeight){j=o.maxHeight;
}m.renderLayout(0,0,k,j);
}},_computeSizeHint:function(){var v=this._getLayoutChildren();
var t,x;
var w=0,u=0;
var s=0,q=0;
var p=Infinity,r=Infinity;
for(var i=0,l=v.length;i<l;i++){t=v[i];
x=t.getSizeHint();
w=Math.max(w,x.width);
u=Math.max(u,x.height);
s=Math.max(s,x.minWidth);
q=Math.max(q,x.minHeight);
p=Math.min(p,x.maxWidth);
r=Math.min(r,x.maxHeight);
}return {width:w,height:u,minWidth:s,minHeight:q,maxWidth:p,maxHeight:r};
}}});
})();
(function(){var j="label",i="icon",h="Boolean",g="both",f="String",e="left",d="changeGap",c="changeShow",b="bottom",a="_applyCenter",y="changeIcon",x="qx.ui.basic.Atom",w="changeLabel",v="Integer",u="_applyIconPosition",t="qx.debug",s="top",r="right",q="_applyRich",p="_applyIcon",n="_applyShow",o="on",l="_applyLabel",m="_applyGap",k="atom";
qx.Class.define(x,{extend:qx.ui.core.Widget,construct:function(S,T){if(qx.core.Variant.isSet(t,o)){this.assertArgumentsCount(arguments,0,2);
}qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.Atom());

if(S!=null){this.setLabel(S);
}
if(T!=null){this.setIcon(T);
}},properties:{appearance:{refine:true,init:k},label:{apply:l,nullable:true,check:f,event:w},rich:{check:h,init:false,apply:q},icon:{check:f,apply:p,nullable:true,themeable:true,event:y},gap:{check:v,nullable:false,event:d,apply:m,themeable:true,init:4},show:{init:g,check:[g,j,i],themeable:true,inheritable:true,apply:n,event:c},iconPosition:{init:e,check:[s,r,b,e],themeable:true,apply:u},center:{init:false,check:h,themeable:true,apply:a}},members:{_createChildControlImpl:function(z){var A;

switch(z){case j:A=new qx.ui.basic.Label(this.getLabel());
A.setAnonymous(true);
A.setRich(this.getRich());
this._add(A);

if(this.getLabel()==null||this.getShow()===i){A.exclude();
}break;
case i:A=new qx.ui.basic.Image(this.getIcon());
A.setAnonymous(true);
this._addAt(A,0);

if(this.getIcon()==null||this.getShow()===j){A.exclude();
}break;
}return A||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,z);
},_forwardStates:{focused:true,hovered:true},_handleLabel:function(){if(this.getLabel()==null||this.getShow()===i){this._excludeChildControl(j);
}else{this._showChildControl(j);
}},_handleIcon:function(){if(this.getIcon()==null||this.getShow()===j){this._excludeChildControl(i);
}else{this._showChildControl(i);
}},_applyLabel:function(B,C){var D=this.getChildControl(j,true);

if(D){D.setValue(B);
}this._handleLabel();
},_applyRich:function(E,F){var G=this.getChildControl(j,true);

if(G){G.setRich(E);
}},_applyIcon:function(L,M){var N=this.getChildControl(i,true);

if(N){N.setSource(L);
}this._handleIcon();
},_applyGap:function(O,P){this._getLayout().setGap(O);
},_applyShow:function(Q,R){this._handleLabel();
this._handleIcon();
},_applyIconPosition:function(H,I){this._getLayout().setIconPosition(H);
},_applyCenter:function(J,K){this._getLayout().setCenter(J);
}}});
})();
(function(){var n="bottom",m="_applyLayoutChange",l="top",k="left",j="right",h="middle",g="' is not supported by the Atom layout!",f="qx.debug",e="center",d="qx.ui.layout.Atom",a="Integer",c="The property '",b="Boolean";
qx.Class.define(d,{extend:qx.ui.layout.Abstract,properties:{gap:{check:a,init:4,apply:m},iconPosition:{check:[k,l,j,n],init:k,apply:m},center:{check:b,init:false,apply:m}},members:{verifyLayoutProperty:qx.core.Variant.select(f,{"on":function(z,name,A){this.assert(false,c+name+g);
},"off":null}),renderLayout:function(B,C){var L=qx.ui.layout.Util;
var E=this.getIconPosition();
var H=this._getLayoutChildren();
var length=H.length;
var V,top,M,F;
var R,K;
var P=this.getGap();
var U=this.getCenter();
if(E===n||E===j){var N=length-1;
var I=-1;
var G=-1;
}else{var N=0;
var I=length;
var G=1;
}if(E==l||E==n){if(U){var Q=0;

for(var i=N;i!=I;i+=G){F=H[i].getSizeHint().height;

if(F>0){Q+=F;

if(i!=N){Q+=P;
}}}top=Math.round((C-Q)/2);
}else{top=0;
}
for(var i=N;i!=I;i+=G){R=H[i];
K=R.getSizeHint();
M=Math.min(K.maxWidth,Math.max(B,K.minWidth));
F=K.height;
V=L.computeHorizontalAlignOffset(e,M,B);
R.renderLayout(V,top,M,F);
if(F>0){top+=F+P;
}}}else{var J=B;
var D=null;
var T=0;

for(var i=N;i!=I;i+=G){R=H[i];
M=R.getSizeHint().width;

if(M>0){if(!D&&R instanceof qx.ui.basic.Label){D=R;
}else{J-=M;
}T++;
}}
if(T>1){var S=(T-1)*P;
J-=S;
}
if(D){var K=D.getSizeHint();
var O=Math.max(K.minWidth,Math.min(J,K.maxWidth));
J-=O;
}
if(U&&J>0){V=Math.round(J/2);
}else{V=0;
}
for(var i=N;i!=I;i+=G){R=H[i];
K=R.getSizeHint();
F=Math.min(K.maxHeight,Math.max(C,K.minHeight));

if(R===D){M=O;
}else{M=K.width;
}top=L.computeVerticalAlignOffset(h,K.height,C);
R.renderLayout(V,top,M,F);
if(M>0){V+=M+P;
}}}},_computeSizeHint:function(){var y=this._getLayoutChildren();
var length=y.length;
var q,w;
if(length===1){var q=y[0].getSizeHint();
w={width:q.width,height:q.height,minWidth:q.minWidth,minHeight:q.minHeight};
}else{var u=0,v=0;
var r=0,t=0;
var s=this.getIconPosition();
var x=this.getGap();

if(s===l||s===n){var o=0;

for(var i=0;i<length;i++){q=y[i].getSizeHint();
v=Math.max(v,q.width);
u=Math.max(u,q.minWidth);
if(q.height>0){t+=q.height;
r+=q.minHeight;
o++;
}}
if(o>1){var p=(o-1)*x;
t+=p;
r+=p;
}}else{var o=0;

for(var i=0;i<length;i++){q=y[i].getSizeHint();
t=Math.max(t,q.height);
r=Math.max(r,q.minHeight);
if(q.width>0){v+=q.width;
u+=q.minWidth;
o++;
}}
if(o>1){var p=(o-1)*x;
v+=p;
u+=p;
}}w={minWidth:u,width:v,minHeight:r,height:t};
}return w;
}}});
})();
(function(){var o="middle",n="qx.ui.layout.Util",m="left",k="center",j="top",h="bottom",g="right";
qx.Class.define(n,{statics:{PERCENT_VALUE:/[0-9]+(?:\.[0-9]+)?%/,computeFlexOffsets:function(p,q,r){var t,x,s,y;
var u=q>r;
var z=Math.abs(q-r);
var A,v;
var w={};

for(x in p){t=p[x];
w[x]={potential:u?t.max-t.value:t.value-t.min,flex:u?t.flex:1/t.flex,offset:0};
}while(z!=0){y=Infinity;
s=0;

for(x in w){t=w[x];

if(t.potential>0){s+=t.flex;
y=Math.min(y,t.potential/t.flex);
}}if(s==0){break;
}y=Math.min(z,y*s)/s;
A=0;

for(x in w){t=w[x];

if(t.potential>0){v=Math.min(z,t.potential,Math.ceil(y*t.flex));
A+=v-y*t.flex;

if(A>=1){A-=1;
v-=1;
}t.potential-=v;

if(u){t.offset+=v;
}else{t.offset-=v;
}z-=v;
}}}return w;
},computeHorizontalAlignOffset:function(X,Y,ba,bb,bc){if(bb==null){bb=0;
}
if(bc==null){bc=0;
}var bd=0;

switch(X){case m:bd=bb;
break;
case g:bd=ba-Y-bc;
break;
case k:bd=Math.round((ba-Y)/2);
if(bd<bb){bd=bb;
}else if(bd<bc){bd=Math.max(bb,ba-Y-bc);
}break;
}return bd;
},computeVerticalAlignOffset:function(a,b,c,d,e){if(d==null){d=0;
}
if(e==null){e=0;
}var f=0;

switch(a){case j:f=d;
break;
case h:f=c-b-e;
break;
case o:f=Math.round((c-b)/2);
if(f<d){f=d;
}else if(f<e){f=Math.max(d,c-b-e);
}break;
}return f;
},collapseMargins:function(bm){var bn=0,bp=0;

for(var i=0,l=arguments.length;i<l;i++){var bo=arguments[i];

if(bo<0){bp=Math.min(bp,bo);
}else if(bo>0){bn=Math.max(bn,bo);
}}return bn+bp;
},computeHorizontalGaps:function(bi,bj,bk){if(bj==null){bj=0;
}var bl=0;

if(bk){bl+=bi[0].getMarginLeft();

for(var i=1,l=bi.length;i<l;i+=1){bl+=this.collapseMargins(bj,bi[i-1].getMarginRight(),bi[i].getMarginLeft());
}bl+=bi[l-1].getMarginRight();
}else{for(var i=1,l=bi.length;i<l;i+=1){bl+=bi[i].getMarginLeft()+bi[i].getMarginRight();
}bl+=(bj*(l-1));
}return bl;
},computeVerticalGaps:function(be,bf,bg){if(bf==null){bf=0;
}var bh=0;

if(bg){bh+=be[0].getMarginTop();

for(var i=1,l=be.length;i<l;i+=1){bh+=this.collapseMargins(bf,be[i-1].getMarginBottom(),be[i].getMarginTop());
}bh+=be[l-1].getMarginBottom();
}else{for(var i=1,l=be.length;i<l;i+=1){bh+=be[i].getMarginTop()+be[i].getMarginBottom();
}bh+=(bf*(l-1));
}return bh;
},computeHorizontalSeparatorGaps:function(P,Q,R){var U=qx.theme.manager.Decoration.getInstance().resolve(R);
var T=U.getInsets();
var S=T.left+T.right;
var V=0;

for(var i=0,l=P.length;i<l;i++){var W=P[i];
V+=W.getMarginLeft()+W.getMarginRight();
}V+=(Q+S+Q)*(l-1);
return V;
},computeVerticalSeparatorGaps:function(H,I,J){var M=qx.theme.manager.Decoration.getInstance().resolve(J);
var L=M.getInsets();
var K=L.top+L.bottom;
var N=0;

for(var i=0,l=H.length;i<l;i++){var O=H[i];
N+=O.getMarginTop()+O.getMarginBottom();
}N+=(I+K+I)*(l-1);
return N;
},arrangeIdeals:function(B,C,D,E,F,G){if(C<B||F<E){if(C<B&&F<E){C=B;
F=E;
}else if(C<B){F-=(B-C);
C=B;
if(F<E){F=E;
}}else if(F<E){C-=(E-F);
F=E;
if(C<B){C=B;
}}}
if(C>D||F>G){if(C>D&&F>G){C=D;
F=G;
}else if(C>D){F+=(C-D);
C=D;
if(F>G){F=G;
}}else if(F>G){C+=(F-G);
F=G;
if(C>D){C=D;
}}}return {begin:C,end:F};
}}});
})();
(function(){var b="qx.event.type.Data",a="qx.ui.form.IStringForm";
qx.Interface.define(a,{events:{"changeValue":b},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var l="on",k="qx.dynlocale",j="text",i="Boolean",h="qx.client",g="color",f="userSelect",d="changeLocale",c="qx.debug",b="enabled",K="none",J="_applyTextAlign",I="qx.ui.core.Widget",H="nowrap",G="gecko",F="changeTextAlign",E="_applyWrap",D="changeValue",C="changeContent",B="qx.ui.basic.Label",s="A",t="whiteSpace",q="_applyValue",r="center",o="_applyBuddy",p="String",m="textAlign",n="right",u="changeRich",v="normal",x="_applyRich",w="click",z="label",y="webkit",A="left";
qx.Class.define(B,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm],construct:function(bi){qx.ui.core.Widget.call(this);

if(bi!=null){this.setValue(bi);
}
if(qx.core.Variant.isSet(k,l)){qx.locale.Manager.getInstance().addListener(d,this._onChangeLocale,this);
}},properties:{rich:{check:i,init:false,event:u,apply:x},wrap:{check:i,init:true,apply:E},value:{check:p,apply:q,event:D,nullable:true},buddy:{check:I,apply:o,nullable:true,init:null,dereference:true},textAlign:{check:[A,r,n],nullable:true,themeable:true,apply:J,event:F},appearance:{refine:true,init:z},selectable:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{__gt:null,__gu:null,__gv:null,__gw:null,_getContentHint:function(){if(this.__gu){this.__gx=this.__gy();
delete this.__gu;
}return {width:this.__gx.width,height:this.__gx.height};
},_hasHeightForWidth:function(){return this.getRich()&&this.getWrap();
},_applySelectable:function(a){if(qx.core.Variant.isSet(h,G)){if(a&&!this.isRich()){if(qx.core.Variant.isSet(c,l)){this.warn("Only rich labels are selectable in browsers with Gecko engine!");
}return;
}}qx.ui.core.Widget.prototype._applySelectable.call(this,a);
if(qx.core.Variant.isSet(h,y)){this.getContainerElement().setStyle(f,a?j:K);
this.getContentElement().setStyle(f,a?j:K);
}},_getContentHeightForWidth:function(bh){if(!this.getRich()&&!this.getWrap()){return null;
}return this.__gy(bh).height;
},_createContentElement:function(){return new qx.html.Label;
},_applyTextAlign:function(ba,bb){this.getContentElement().setStyle(m,ba);
},_applyTextColor:function(bf,bg){if(bf){this.getContentElement().setStyle(g,qx.theme.manager.Color.getInstance().resolve(bf));
}else{this.getContentElement().removeStyle(g);
}},__gx:{width:0,height:0},_applyFont:function(bc,bd){var be;

if(bc){this.__gt=qx.theme.manager.Font.getInstance().resolve(bc);
be=this.__gt.getStyles();
}else{this.__gt=null;
be=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(be);
this.__gu=true;
qx.ui.core.queue.Layout.add(this);
},__gy:function(U){var Y=qx.bom.Label;
var W=this.getFont();
var V=W?this.__gt.getStyles():qx.bom.Font.getDefaultStyles();
var content=this.getValue()||s;
var X=this.getRich();
return X?Y.getHtmlSize(content,V,U):Y.getTextSize(content,V);
},_applyBuddy:function(L,M){if(M!=null){M.removeBinding(this.__gv);
this.__gv=null;
this.removeListenerById(this.__gw);
this.__gw=null;
}
if(L!=null){this.__gv=L.bind(b,this,b);
this.__gw=this.addListener(w,function(){if(L.isFocusable()){L.focus.apply(L);
}},this);
}},_applyRich:function(T){this.getContentElement().setRich(T);
this.__gu=true;
qx.ui.core.queue.Layout.add(this);
},_applyWrap:function(Q,R){if(Q&&!this.isRich()){if(qx.core.Variant.isSet(c,l)){this.warn("Only rich labels support wrap.");
}}
if(this.isRich()){var S=Q?v:H;
this.getContentElement().setStyle(t,S);
}},_onChangeLocale:qx.core.Variant.select(k,{"on":function(e){var content=this.getValue();

if(content&&content.translate){this.setValue(content.translate());
}},"off":null}),_applyValue:function(O,P){this.getContentElement().setValue(O);
this.__gu=true;
qx.ui.core.queue.Layout.add(this);
this.fireDataEvent(C,O,P);
}},destruct:function(){if(qx.core.Variant.isSet(k,l)){qx.locale.Manager.getInstance().removeListener(d,this._onChangeLocale,this);
}if(this.__gv!=null){var N=this.getBuddy();

if(N!=null&&!N.isDisposed()){N.removeBinding(this.__gv);
}}this.__gt=this.__gv=null;
}});
})();
(function(){var b="value",a="qx.html.Label";
qx.Class.define(a,{extend:qx.html.Element,members:{__dJ:null,_applyProperty:function(name,i){qx.html.Element.prototype._applyProperty.call(this,name,i);

if(name==b){var j=this.getDomElement();
qx.bom.Label.setValue(j,i);
}},_createDomElement:function(){var h=this.__dJ;
var g=qx.bom.Label.create(this._content,h);
return g;
},_copyData:function(f){return qx.html.Element.prototype._copyData.call(this,true);
},setRich:function(c){var d=this.getDomElement();

if(d){throw new Error("The label mode cannot be modified after initial creation");
}c=!!c;

if(this.__dJ==c){return;
}this.__dJ=c;
return this;
},setValue:function(e){this._setProperty(b,e);
return this;
},getValue:function(){return this._getProperty(b);
}}});
})();
(function(){var p="qx.client",o="gecko",n="div",m="inherit",l="text",k="value",j="",i="hidden",h="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",g="nowrap",F="auto",E="0",D="ellipsis",C="normal",B="label",A="px",z="crop",y="end",x="100%",w="visible",u="qx.bom.Label",v="opera",s="block",t="none",q="-1000px",r="absolute";
qx.Class.define(u,{statics:{__iI:{fontFamily:1,fontSize:1,fontWeight:1,fontStyle:1,lineHeight:1},__iJ:function(){var I=this.__iL(false);
document.body.insertBefore(I,document.body.firstChild);
return this._textElement=I;
},__iK:function(){var P=this.__iL(true);
document.body.insertBefore(P,document.body.firstChild);
return this._htmlElement=P;
},__iL:function(Y){var ba=qx.bom.Element.create(n);
var bb=ba.style;
bb.width=bb.height=F;
bb.left=bb.top=q;
bb.visibility=i;
bb.position=r;
bb.overflow=w;

if(Y){bb.whiteSpace=C;
}else{bb.whiteSpace=g;

if(qx.core.Variant.isSet(p,o)){var bc=document.createElementNS(h,B);
var bb=bc.style;
bb.padding=E;

for(var bd in this.__iI){bb[bd]=m;
}ba.appendChild(bc);
}}return ba;
},__iM:function(Q){var R={};

if(Q){R.whiteSpace=C;
}else if(qx.core.Variant.isSet(p,o)){R.display=s;
}else{R.overflow=i;
R.whiteSpace=g;
R.textOverflow=D;
R.userSelect=t;
if(qx.core.Variant.isSet(p,v)){R.OTextOverflow=D;
}}return R;
},create:function(content,a,b){if(!b){b=window;
}
if(a){var c=b.document.createElement(n);
c.useHtml=true;
}else if(qx.core.Variant.isSet(p,o)){var c=b.document.createElement(n);
var e=b.document.createElementNS(h,B);
var d=e.style;
d.cursor=m;
d.color=m;
d.overflow=i;
d.maxWidth=x;
d.padding=E;
for(var f in this.__iI){e.style[f]=m;
}e.setAttribute(z,y);
c.appendChild(e);
}else{var c=b.document.createElement(n);
qx.bom.element.Style.setStyles(c,this.__iM(a));
}
if(content){this.setValue(c,content);
}return c;
},setValue:function(G,H){H=H||j;

if(G.useHtml){G.innerHTML=H;
}else if(qx.core.Variant.isSet(p,o)){G.firstChild.setAttribute(k,H);
}else{qx.bom.element.Attribute.set(G,l,H);
}},getValue:function(X){if(X.useHtml){return X.innerHTML;
}else if(qx.core.Variant.isSet(p,o)){return X.firstChild.getAttribute(k)||j;
}else{return qx.bom.element.Attribute.get(X,l);
}},getHtmlSize:function(content,M,N){var O=this._htmlElement||this.__iK();
O.style.width=N!==undefined?N+A:F;
O.innerHTML=content;
return this.__iN(O,M);
},getTextSize:function(J,K){var L=this._textElement||this.__iJ();

if(qx.core.Variant.isSet(p,o)){L.firstChild.setAttribute(k,J);
}else{qx.bom.element.Attribute.set(L,l,J);
}return this.__iN(L,K);
},__iN:function(S,T){var U=this.__iI;

if(!T){T={};
}
for(var V in U){S.style[V]=T[V]||j;
}var W=qx.bom.element.Dimension.getSize(S);

if(qx.core.Variant.isSet(p,o)){if(!qx.bom.client.Platform.WIN){W.width++;
}}return W;
}}});
})();
(function(){var j="0px",i="mshtml",h="qx.client",g="qx.bom.element.Dimension",f="paddingRight",e="paddingLeft",d="paddingTop",c="paddingBottom";
qx.Class.define(g,{statics:{getWidth:qx.core.Variant.select(h,{"gecko":function(a){if(a.getBoundingClientRect){var b=a.getBoundingClientRect();
return Math.round(b.right)-Math.round(b.left);
}else{return a.offsetWidth;
}},"default":function(l){return l.offsetWidth;
}}),getHeight:qx.core.Variant.select(h,{"gecko":function(m){if(m.getBoundingClientRect){var n=m.getBoundingClientRect();
return Math.round(n.bottom)-Math.round(n.top);
}else{return m.offsetHeight;
}},"default":function(D){return D.offsetHeight;
}}),getSize:function(C){return {width:this.getWidth(C),height:this.getHeight(C)};
},__hz:{visible:true,hidden:true},getContentWidth:function(o){var q=qx.bom.element.Style;
var r=qx.bom.element.Overflow.getX(o);
var s=parseInt(q.get(o,e)||j,10);
var u=parseInt(q.get(o,f)||j,10);

if(this.__hz[r]){return o.clientWidth-s-u;
}else{if(o.clientWidth>=o.scrollWidth){return Math.max(o.clientWidth,o.scrollWidth)-s-u;
}else{var t=o.scrollWidth-s;
var p=qx.bom.client.Engine;

if(p.NAME===i&&p.VERSION==6){t-=u;
}return t;
}}},getContentHeight:function(v){var x=qx.bom.element.Style;
var z=qx.bom.element.Overflow.getY(v);
var A=parseInt(x.get(v,d)||j,10);
var y=parseInt(x.get(v,c)||j,10);

if(this.__hz[z]){return v.clientHeight-A-y;
}else{if(v.clientHeight>=v.scrollHeight){return Math.max(v.clientHeight,v.scrollHeight)-A-y;
}else{var B=v.scrollHeight-A;
var w=qx.bom.client.Engine;

if(w.NAME===i&&w.VERSION==6){B-=y;
}return B;
}}},getContentSize:function(k){return {width:this.getContentWidth(k),height:this.getContentHeight(k)};
}}});
})();
(function(){var c="qx.event.type.Data",b="qx.ui.form.IForm";
qx.Interface.define(b,{events:{"changeEnabled":c,"changeValid":c,"changeInvalidMessage":c,"changeRequired":c},members:{setEnabled:function(d){return arguments.length==1;
},getEnabled:function(){},setRequired:function(f){return arguments.length==1;
},getRequired:function(){},setValid:function(e){return arguments.length==1;
},getValid:function(){},setInvalidMessage:function(g){return arguments.length==1;
},getInvalidMessage:function(){},setRequiredInvalidMessage:function(a){return arguments.length==1;
},getRequiredInvalidMessage:function(){}}});
})();
(function(){var f="_applyBlockerColor",e="Number",d="__qU",c="qx.ui.core.MBlocker",b="_applyBlockerOpacity",a="Color";
qx.Mixin.define(c,{construct:function(){this.__qU=new qx.ui.core.Blocker(this);
},properties:{blockerColor:{check:a,init:null,nullable:true,apply:f,themeable:true},blockerOpacity:{check:e,init:1,apply:b,themeable:true}},members:{__qU:null,_applyBlockerColor:function(i,j){this.__qU.setColor(i);
},_applyBlockerOpacity:function(g,h){this.__qU.setOpacity(g);
},block:function(){this.__qU.block();
},isBlocked:function(){return this.__qU.isBlocked();
},unblock:function(){this.__qU.unblock();
},forceUnblock:function(){this.__qU.forceUnblock();
},blockContent:function(k){this.__qU.blockContent(k);
},isContentBlocked:function(){return this.__qU.isContentBlocked();
},unblockContent:function(){this.__qU.unblockContent();
},forceUnblockContent:function(){this.__qU.forceUnblockContent();
},getBlocker:function(){return this.__qU;
}},destruct:function(){this._disposeObjects(d);
}});
})();
(function(){var i="qx.ui.window.Window",h="changeModal",g="changeVisibility",f="changeActive",d="_applyActiveWindow",c="__nh",b="__ng",a="qx.ui.window.MDesktop";
qx.Mixin.define(a,{properties:{activeWindow:{check:i,apply:d,init:null,nullable:true}},members:{__ng:null,__nh:null,getWindowManager:function(){if(!this.__nh){this.setWindowManager(new qx.ui.window.Window.DEFAULT_MANAGER_CLASS());
}return this.__nh;
},supportsMaximize:function(){return true;
},setWindowManager:function(j){if(this.__nh){this.__nh.setDesktop(null);
}j.setDesktop(this);
this.__nh=j;
},_onChangeActive:function(e){if(e.getData()){this.setActiveWindow(e.getTarget());
}else if(this.getActiveWindow()==e.getTarget()){this.setActiveWindow(null);
}},_applyActiveWindow:function(m,n){this.getWindowManager().changeActiveWindow(m,n);
},_onChangeModal:function(e){this.getWindowManager().updateStack();
},_onChangeVisibility:function(){this.getWindowManager().updateStack();
},_afterAddChild:function(o){if(qx.Class.isDefined(i)&&o instanceof qx.ui.window.Window){this._addWindow(o);
}},_addWindow:function(k){if(!qx.lang.Array.contains(this.getWindows(),k)){this.getWindows().push(k);
k.addListener(f,this._onChangeActive,this);
k.addListener(h,this._onChangeModal,this);
k.addListener(g,this._onChangeVisibility,this);
}
if(k.getActive()){this.setActiveWindow(k);
}this.getWindowManager().updateStack();
},_afterRemoveChild:function(p){if(qx.Class.isDefined(i)&&p instanceof qx.ui.window.Window){this._removeWindow(p);
}},_removeWindow:function(l){qx.lang.Array.remove(this.getWindows(),l);
l.removeListener(f,this._onChangeActive,this);
l.removeListener(h,this._onChangeModal,this);
l.removeListener(g,this._onChangeVisibility,this);
this.getWindowManager().updateStack();
},getWindows:function(){if(!this.__ng){this.__ng=[];
}return this.__ng;
}},destruct:function(){this._disposeArray(b);
this._disposeObjects(c);
}});
})();
(function(){var p="contextmenu",o="help",n="qx.client",m="changeGlobalCursor",l="abstract",k="Boolean",j="root",i="",h=" !important",g="_applyGlobalCursor",c="_applyNativeHelp",f=";",d="qx.ui.root.Abstract",b="String",a="*";
qx.Class.define(d,{type:l,extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MBlocker,qx.ui.window.MDesktop],construct:function(){qx.ui.core.Widget.call(this);
qx.ui.core.FocusHandler.getInstance().addRoot(this);
qx.ui.core.queue.Visibility.add(this);
this.initNativeHelp();
},properties:{appearance:{refine:true,init:j},enabled:{refine:true,init:true},focusable:{refine:true,init:true},globalCursor:{check:b,nullable:true,themeable:true,apply:g,event:m},nativeContextMenu:{refine:true,init:false},nativeHelp:{check:k,init:false,apply:c}},members:{__mh:null,isRootWidget:function(){return true;
},getLayout:function(){return this._getLayout();
},_applyGlobalCursor:qx.core.Variant.select(n,{"mshtml":function(w,x){},"default":function(y,z){var A=qx.bom.Stylesheet;
var B=this.__mh;

if(!B){this.__mh=B=A.createElement();
}A.removeAllRules(B);

if(y){A.addRule(B,a,qx.bom.element.Cursor.compile(y).replace(f,i)+h);
}}}),_applyNativeContextMenu:function(u,v){if(u){this.removeListener(p,this._onNativeContextMenu,this,true);
}else{this.addListener(p,this._onNativeContextMenu,this,true);
}},_onNativeContextMenu:function(e){if(e.getTarget().getNativeContextMenu()){return;
}e.preventDefault();
},_applyNativeHelp:qx.core.Variant.select(n,{"mshtml":function(q,r){if(r===false){qx.bom.Event.removeNativeListener(document,o,qx.lang.Function.returnFalse);
}
if(q===false){qx.bom.Event.addNativeListener(document,o,qx.lang.Function.returnFalse);
}},"default":function(){}})},destruct:function(){this.__mh=null;
},defer:function(s,t){qx.ui.core.MChildrenHandling.remap(t);
}});
})();
(function(){var o="resize",n="position",m="0px",l="webkit",k="paddingLeft",j="$$widget",i="qx.ui.root.Application",h="hidden",g="qx.client",f="div",b="paddingTop",d="100%",c="absolute";
qx.Class.define(i,{extend:qx.ui.root.Abstract,construct:function(a){this.__qV=qx.dom.Node.getWindow(a);
this.__qW=a;
qx.ui.root.Abstract.call(this);
qx.event.Registration.addListener(this.__qV,o,this._onResize,this);
this._setLayout(new qx.ui.layout.Canvas());
qx.ui.core.queue.Layout.add(this);
qx.ui.core.FocusHandler.getInstance().connectTo(this);
this.getContentElement().disableScrolling();
},members:{__qV:null,__qW:null,_createContainerElement:function(){var s=this.__qW;
if(qx.core.Variant.isSet(g,l)){if(!s.body){alert("The application could not be started due to a missing body tag in the HTML file!");
}}var w=s.documentElement.style;
var t=s.body.style;
w.overflow=t.overflow=h;
w.padding=w.margin=t.padding=t.margin=m;
w.width=w.height=t.width=t.height=d;
var v=s.createElement(f);
s.body.appendChild(v);
var u=new qx.html.Root(v);
u.setStyle(n,c);
u.setAttribute(j,this.toHashCode());
return u;
},_onResize:function(e){qx.ui.core.queue.Layout.add(this);
},_computeSizeHint:function(){var x=qx.bom.Viewport.getWidth(this.__qV);
var y=qx.bom.Viewport.getHeight(this.__qV);
return {minWidth:x,width:x,maxWidth:x,minHeight:y,height:y,maxHeight:y};
},_applyPadding:function(z,A,name){if(z&&(name==b||name==k)){throw new Error("The root widget does not support 'left', or 'top' paddings!");
}qx.ui.root.Abstract.prototype._applyPadding.call(this,z,A,name);
},_applyDecorator:function(p,q){qx.ui.root.Abstract.prototype._applyDecorator.call(this,p,q);

if(!p){return;
}var r=this.getDecoratorElement().getInsets();

if(r.left||r.top){throw new Error("The root widget does not support decorators with 'left', or 'top' insets!");
}}},destruct:function(){this.__qV=this.__qW=null;
}});
})();
(function(){var B="zIndex",A="px",z="keydown",y="deactivate",x="resize",w="keyup",v="keypress",u="backgroundColor",t="_applyOpacity",s="Boolean",N="__oR",M="opacity",L="interval",K="Tab",J="Color",I="__oP",H="qx.ui.root.Page",G="__oN",F="Number",E="qx.ui.core.Blocker",C="qx.ui.root.Application",D="_applyColor";
qx.Class.define(E,{extend:qx.core.Object,construct:function(q){qx.core.Object.call(this);
this._widget=q;
this._isPageRoot=(qx.Class.isDefined(H)&&q instanceof qx.ui.root.Page);

if(this._isPageRoot){q.addListener(x,this.__oS,this);
}
if(qx.Class.isDefined(C)&&q instanceof qx.ui.root.Application){this.setKeepBlockerActive(true);
}this.__oK=[];
this.__oL=[];
this.__oM=[];
},properties:{color:{check:J,init:null,nullable:true,apply:D,themeable:true},opacity:{check:F,init:1,apply:t,themeable:true},keepBlockerActive:{check:s,init:false}},members:{__oN:null,__oO:0,__oP:null,__oM:null,__oK:null,__oL:null,__oQ:null,__oR:null,_isPageRoot:false,_widget:null,__oS:function(e){var T=e.getData();

if(this.isContentBlocked()){this.getContentBlockerElement().setStyles({width:T.width,height:T.height});
}
if(this.isBlocked()){this.getBlockerElement().setStyles({width:T.width,height:T.height});
}},_applyColor:function(g,h){var j=qx.theme.manager.Color.getInstance().resolve(g);
this.__oT(u,j);
},_applyOpacity:function(b,c){this.__oT(M,b);
},__oT:function(n,o){var p=[];
this.__oN&&p.push(this.__oN);
this.__oP&&p.push(this.__oP);

for(var i=0;i<p.length;i++){p[i].setStyle(n,o);
}},_backupActiveWidget:function(){var a=qx.event.Registration.getManager(window).getHandler(qx.event.handler.Focus);
this.__oK.push(a.getActive());
this.__oL.push(a.getFocus());

if(this._widget.isFocusable()){this._widget.focus();
}},_restoreActiveWidget:function(){var m=this.__oK.length;

if(m>0){var l=this.__oK[m-1];

if(l){qx.bom.Element.activate(l);
}this.__oK.pop();
}var k=this.__oL.length;

if(k>0){var l=this.__oL[k-1];

if(l){qx.bom.Element.focus(this.__oL[k-1]);
}this.__oL.pop();
}},__oU:function(){return new qx.html.Blocker(this.getColor(),this.getOpacity());
},getBlockerElement:function(){if(!this.__oN){this.__oN=this.__oU();
this.__oN.setStyle(B,15);
this._widget.getContainerElement().add(this.__oN);
this.__oN.exclude();
}return this.__oN;
},block:function(){this.__oO++;

if(this.__oO<2){this._backupActiveWidget();
var Q=this.getBlockerElement();
Q.include();
Q.activate();
Q.addListener(y,this.__pa,this);
Q.addListener(v,this.__oY,this);
Q.addListener(z,this.__oY,this);
Q.addListener(w,this.__oY,this);
}},isBlocked:function(){return this.__oO>0;
},unblock:function(){if(!this.isBlocked()){return;
}this.__oO--;

if(this.__oO<1){this.__oV();
this.__oO=0;
}},forceUnblock:function(){if(!this.isBlocked()){return;
}this.__oO=0;
this.__oV();
},__oV:function(){this._restoreActiveWidget();
var U=this.getBlockerElement();
U.removeListener(y,this.__pa,this);
U.removeListener(v,this.__oY,this);
U.removeListener(z,this.__oY,this);
U.removeListener(w,this.__oY,this);
U.exclude();
},getContentBlockerElement:function(){if(!this.__oP){this.__oP=this.__oU();
this._widget.getContentElement().add(this.__oP);
this.__oP.exclude();
}return this.__oP;
},blockContent:function(O){var P=this.getContentBlockerElement();
P.setStyle(B,O);
this.__oM.push(O);

if(this.__oM.length<2){P.include();

if(this._isPageRoot){if(!this.__oR){this.__oR=new qx.event.Timer(300);
this.__oR.addListener(L,this.__oX,this);
}this.__oR.start();
this.__oX();
}}},isContentBlocked:function(){return this.__oM.length>0;
},unblockContent:function(){if(!this.isContentBlocked()){return;
}this.__oM.pop();
var R=this.__oM[this.__oM.length-1];
var S=this.getContentBlockerElement();
S.setStyle(B,R);

if(this.__oM.length<1){this.__oW();
this.__oM=[];
}},forceUnblockContent:function(){if(!this.isContentBlocked()){return;
}this.__oM=[];
var r=this.getContentBlockerElement();
r.setStyle(B,null);
this.__oW();
},__oW:function(){this.getContentBlockerElement().exclude();

if(this._isPageRoot){this.__oR.stop();
}},__oX:function(){var d=this._widget.getContainerElement().getDomElement();
var f=qx.dom.Node.getDocument(d);
this.getContentBlockerElement().setStyles({height:f.documentElement.scrollHeight+A,width:f.documentElement.scrollWidth+A});
},__oY:function(e){if(e.getKeyIdentifier()==K){e.stop();
}},__pa:function(){if(this.getKeepBlockerActive()){this.getBlockerElement().activate();
}}},destruct:function(){if(this._isPageRoot){this._widget.removeListener(x,this.__oS,this);
}this._disposeObjects(I,G,N);
this.__oQ=this.__oK=this.__oL=this._widget=this.__oM=null;
}});
})();
(function(){var k="cursor",j="100%",i="repeat",h="mousedown",g="url(",f=")",d="mouseout",c="qx.client",b="div",a="dblclick",w="mousewheel",v="qx.html.Blocker",u="mousemove",t="mouseover",s="appear",r="click",q="mshtml",p="mouseup",o="contextmenu",n="disappear",l="qx/static/blank.gif",m="absolute";
qx.Class.define(v,{extend:qx.html.Element,construct:function(y,z){var y=y?qx.theme.manager.Color.getInstance().resolve(y):null;
var A={position:m,width:j,height:j,opacity:z||0,backgroundColor:y};
if(qx.core.Variant.isSet(c,q)){A.backgroundImage=g+qx.util.ResourceManager.getInstance().toUri(l)+f;
A.backgroundRepeat=i;
}qx.html.Element.call(this,b,A);
this.addListener(h,this._stopPropagation,this);
this.addListener(p,this._stopPropagation,this);
this.addListener(r,this._stopPropagation,this);
this.addListener(a,this._stopPropagation,this);
this.addListener(u,this._stopPropagation,this);
this.addListener(t,this._stopPropagation,this);
this.addListener(d,this._stopPropagation,this);
this.addListener(w,this._stopPropagation,this);
this.addListener(o,this._stopPropagation,this);
this.addListener(s,this.__pY,this);
this.addListener(n,this.__pY,this);
},members:{_stopPropagation:function(e){e.stopPropagation();
},__pY:function(){var x=this.getStyle(k);
this.setStyle(k,null,true);
this.setStyle(k,x,true);
}}});
})();
(function(){var X="keypress",W="focusout",V="__bH",U="activate",T="Tab",S="singleton",R="deactivate",Q="focusin",P="qx.ui.core.FocusHandler";
qx.Class.define(P,{extend:qx.core.Object,type:S,construct:function(){qx.core.Object.call(this);
this.__bH={};
},members:{__bH:null,__bI:null,__bJ:null,__bK:null,connectTo:function(Y){Y.addListener(X,this.__bL,this);
Y.addListener(Q,this._onFocusIn,this,true);
Y.addListener(W,this._onFocusOut,this,true);
Y.addListener(U,this._onActivate,this,true);
Y.addListener(R,this._onDeactivate,this,true);
},addRoot:function(c){this.__bH[c.$$hash]=c;
},removeRoot:function(k){delete this.__bH[k.$$hash];
},getActiveWidget:function(){return this.__bI;
},isActive:function(d){return this.__bI==d;
},getFocusedWidget:function(){return this.__bJ;
},isFocused:function(F){return this.__bJ==F;
},isFocusRoot:function(bb){return !!this.__bH[bb.$$hash];
},_onActivate:function(e){var n=e.getTarget();
this.__bI=n;
var m=this.__bM(n);

if(m!=this.__bK){this.__bK=m;
}},_onDeactivate:function(e){var K=e.getTarget();

if(this.__bI==K){this.__bI=null;
}},_onFocusIn:function(e){var ba=e.getTarget();

if(ba!=this.__bJ){this.__bJ=ba;
ba.visualizeFocus();
}},_onFocusOut:function(e){var J=e.getTarget();

if(J==this.__bJ){this.__bJ=null;
J.visualizeBlur();
}},__bL:function(e){if(e.getKeyIdentifier()!=T){return;
}
if(!this.__bK){return;
}e.stopPropagation();
e.preventDefault();
var o=this.__bJ;

if(!e.isShiftPressed()){var p=o?this.__bQ(o):this.__bO();
}else{var p=o?this.__bR(o):this.__bP();
}if(p){p.tabFocus();
}},__bM:function(a){var b=this.__bH;

while(a){if(b[a.$$hash]){return a;
}a=a.getLayoutParent();
}return null;
},__bN:function(q,r){if(q===r){return 0;
}var t=q.getTabIndex()||0;
var s=r.getTabIndex()||0;

if(t!=s){return t-s;
}var y=q.getContainerElement().getDomElement();
var x=r.getContainerElement().getDomElement();
var w=qx.bom.element.Location;
var v=w.get(y);
var u=w.get(x);
if(v.top!=u.top){return v.top-u.top;
}if(v.left!=u.left){return v.left-u.left;
}var z=q.getZIndex();
var A=r.getZIndex();

if(z!=A){return z-A;
}return 0;
},__bO:function(){return this.__bU(this.__bK,null);
},__bP:function(){return this.__bV(this.__bK,null);
},__bQ:function(L){var M=this.__bK;

if(M==L){return this.__bO();
}
while(L&&L.getAnonymous()){L=L.getLayoutParent();
}
if(L==null){return [];
}var N=[];
this.__bS(M,L,N);
N.sort(this.__bN);
var O=N.length;
return O>0?N[0]:this.__bO();
},__bR:function(f){var g=this.__bK;

if(g==f){return this.__bP();
}
while(f&&f.getAnonymous()){f=f.getLayoutParent();
}
if(f==null){return [];
}var h=[];
this.__bT(g,f,h);
h.sort(this.__bN);
var j=h.length;
return j>0?h[j-1]:this.__bP();
},__bS:function(parent,bf,bg){var bh=parent.getLayoutChildren();
var bi;

for(var i=0,l=bh.length;i<l;i++){bi=bh[i];
if(!(bi instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(bi)&&bi.isEnabled()&&bi.isVisible()){if(bi.isTabable()&&this.__bN(bf,bi)<0){bg.push(bi);
}this.__bS(bi,bf,bg);
}}},__bT:function(parent,B,C){var D=parent.getLayoutChildren();
var E;

for(var i=0,l=D.length;i<l;i++){E=D[i];
if(!(E instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(E)&&E.isEnabled()&&E.isVisible()){if(E.isTabable()&&this.__bN(B,E)>0){C.push(E);
}this.__bT(E,B,C);
}}},__bU:function(parent,G){var H=parent.getLayoutChildren();
var I;

for(var i=0,l=H.length;i<l;i++){I=H[i];
if(!(I instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(I)&&I.isEnabled()&&I.isVisible()){if(I.isTabable()){if(G==null||this.__bN(I,G)<0){G=I;
}}G=this.__bU(I,G);
}}return G;
},__bV:function(parent,bc){var bd=parent.getLayoutChildren();
var be;

for(var i=0,l=bd.length;i<l;i++){be=bd[i];
if(!(be instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(be)&&be.isEnabled()&&be.isVisible()){if(be.isTabable()){if(bc==null||this.__bN(be,bc)>0){bc=be;
}}bc=this.__bV(be,bc);
}}return bc;
}},destruct:function(){this._disposeMap(V);
this.__bJ=this.__bI=this.__bK=null;
}});
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
(function(){var k="number",j="': ",h="width",g="qx.ui.layout.Canvas",f="qx.debug",e="height",d="Bad format of layout property '",c="' is not supported by the Canvas layout!",b=". The value must be either an integer or an percent string.",a="The property '";
qx.Class.define(g,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:qx.core.Variant.select(f,{"on":function(m,name,n){var o={top:1,left:1,bottom:1,right:1,width:1,height:1,edge:1};
this.assert(o[name]==1,a+name+c);

if(name==h||name==e){this.assertMatch(n,qx.ui.layout.Util.PERCENT_VALUE);
}else{if(typeof n===k){this.assertInteger(n);
}else if(qx.lang.Type.isString(n)){this.assertMatch(n,qx.ui.layout.Util.PERCENT_VALUE);
}else{this.fail(d+name+j+n+b);
}}},"off":null}),renderLayout:function(p,q){var B=this._getLayoutChildren();
var t,A,y;
var D,top,r,s,v,u;
var z,x,C,w;

for(var i=0,l=B.length;i<l;i++){t=B[i];
A=t.getSizeHint();
y=t.getLayoutProperties();
z=t.getMarginTop();
x=t.getMarginRight();
C=t.getMarginBottom();
w=t.getMarginLeft();
D=y.left!=null?y.left:y.edge;

if(qx.lang.Type.isString(D)){D=Math.round(parseFloat(D)*p/100);
}r=y.right!=null?y.right:y.edge;

if(qx.lang.Type.isString(r)){r=Math.round(parseFloat(r)*p/100);
}top=y.top!=null?y.top:y.edge;

if(qx.lang.Type.isString(top)){top=Math.round(parseFloat(top)*q/100);
}s=y.bottom!=null?y.bottom:y.edge;

if(qx.lang.Type.isString(s)){s=Math.round(parseFloat(s)*q/100);
}if(D!=null&&r!=null){v=p-D-r-w-x;
if(v<A.minWidth){v=A.minWidth;
}else if(v>A.maxWidth){v=A.maxWidth;
}D+=w;
}else{v=y.width;

if(v==null){v=A.width;
}else{v=Math.round(parseFloat(v)*p/100);
if(v<A.minWidth){v=A.minWidth;
}else if(v>A.maxWidth){v=A.maxWidth;
}}
if(r!=null){D=p-v-r-x-w;
}else if(D==null){D=w;
}else{D+=w;
}}if(top!=null&&s!=null){u=q-top-s-z-C;
if(u<A.minHeight){u=A.minHeight;
}else if(u>A.maxHeight){u=A.maxHeight;
}top+=z;
}else{u=y.height;

if(u==null){u=A.height;
}else{u=Math.round(parseFloat(u)*q/100);
if(u<A.minHeight){u=A.minHeight;
}else if(u>A.maxHeight){u=A.maxHeight;
}}
if(s!=null){top=q-u-s-C-z;
}else if(top==null){top=z;
}else{top+=z;
}}t.renderLayout(D,top,v,u);
}},_computeSizeHint:function(){var T=0,S=0;
var Q=0,O=0;
var M,L;
var K,I;
var E=this._getLayoutChildren();
var H,R,G;
var U,top,F,J;

for(var i=0,l=E.length;i<l;i++){H=E[i];
R=H.getLayoutProperties();
G=H.getSizeHint();
var P=H.getMarginLeft()+H.getMarginRight();
var N=H.getMarginTop()+H.getMarginBottom();
M=G.width+P;
L=G.minWidth+P;
U=R.left!=null?R.left:R.edge;

if(U&&typeof U===k){M+=U;
L+=U;
}F=R.right!=null?R.right:R.edge;

if(F&&typeof F===k){M+=F;
L+=F;
}T=Math.max(T,M);
S=Math.max(S,L);
K=G.height+N;
I=G.minHeight+N;
top=R.top!=null?R.top:R.edge;

if(top&&typeof top===k){K+=top;
I+=top;
}J=R.bottom!=null?R.bottom:R.edge;

if(J&&typeof J===k){K+=J;
I+=J;
}Q=Math.max(Q,K);
O=Math.max(O,I);
}return {width:T,minWidth:S,height:Q,minHeight:O};
}}});
})();
(function(){var a="qx.html.Root";
qx.Class.define(a,{extend:qx.html.Element,construct:function(b){qx.html.Element.call(this);

if(b!=null){this.useElement(b);
}},members:{useElement:function(c){qx.html.Element.prototype.useElement.call(this,c);
this.setRoot(true);
qx.html.Element._modified[this.$$hash]=this;
}}});
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
(function(){var dR="execute",dQ="/",dP="",dO="current",dN="visible",dM="excluded",dL="modelLink",dK="all",dJ="category",dI="node",dx="qx.version",dw="horizontal",dv="tags",du="_demoView",dt="html",ds="~",dr="widget",dq="separator-vertical",dp="request",dn="_leftComposite",dY="^.*",ea="filled",dW="changeValue",dX="demobrowser.DemoBrowser",dU="changeSelection",dV="__Ku",dS="_history",dT="_status",eb="Ctrl+N",ec="completed",dB="failed",dA="_searchTextField",dD="f1",dC="Ctrl+O",dF="logappender",dE="_runbutton",dH=".html",dG="f2",dz="_stopbutton",dy='_cmdNamespacePollution',cx="ig",cy="animation",cz='_cmdDisposeSample',cA="qx.theme.Modern",cB="__Ko",cC="toolbar",cD="tree1",cE="demo/welcome.html",cF='_cmdSampleInOwnWindow',cG=".*",eg=" ",ef="background-splitpane",ee='demo/',ed="Ctrl+P",ek="Filter...",ej="/playground/",ei="__Kw",eh="viewGroup",em="icon/16/actions/edit-find.png",el="_",cW="qooxdoo ",cX="right",cU="main",cV='_cmdObjectSummary',db="js",dc='_cmdNextSample',cY="_tree",da="left",cS=".",cT="__Kv",cO='_cmdPrevSample',cN="Ctrl+Left",cQ='_cmdRunSample',cP="F5",cK="http://demo.qooxdoo.org/",cJ="interval",cM="value",cL="_infosplit",cI="runbutton",cH="__Kq",dh="Ctrl+Right",di="_navPart",dj="?qx.theme=",dk="textfield",dd="Ctrl+D",de="mainsplit",df="app-header",dg="Demo Browser",dl="__Kp",dm="log",cR="_iframe";
qx.Class.define(dX,{extend:qx.ui.container.Composite,construct:function(){qx.ui.container.Composite.call(this);
var v=new qx.ui.layout.VBox;
v.setSeparator(dq);
this.setLayout(v);
this.add(this._createHeader());
this.widgets={};
this.tests={};
this.__Kn=cA;
this.__Ky();
this.__Ko=this.__KF();
this.add(this.__Ko);
var A=new qx.ui.splitpane.Pane(dw);
this.mainsplit=A;
var x=new qx.ui.splitpane.Pane(dw);
x.setDecorator(null);
this._infosplit=x;
this.add(A,{flex:1});
var B=this._leftComposite=new qx.ui.container.Composite();
B.setLayout(new qx.ui.layout.VBox(3));
B.setBackgroundColor(ef);
A.add(B,0);
{};
var q=new qx.ui.container.Composite();
q.setLayout(new qx.ui.layout.HBox(3));
q.setAppearance(dk);
B.add(q);
var C=new qx.ui.basic.Image(em);
q.add(C);
this._searchTextField=new qx.ui.form.TextField();
this._searchTextField.setLiveUpdate(true);
this._searchTextField.setAppearance(dr);
this._searchTextField.setPlaceholder(ek);
this._searchTextField.addListener(dW,function(e){this.filter(e.getData());
},this);
q.add(this._searchTextField,{flex:1});
this._status=new qx.ui.basic.Label(dP);
this._status.setAppearance(dr);
this._status.setWidth(80);
this._status.setTextAlign(cX);
q.add(this._status);
A.add(x,1);
this._tree=this.__KK();
B.add(this._tree,{flex:1});
this._demoView=this.__KG();
{x.add(this._demoView,2);
};
var o=this.__KI();
var p=this.__KJ();
var y=this.__KH();
var z=new qx.ui.container.Stack;
z.setDecorator(cU);
z.add(o);
z.add(p);
z.add(y);
this.viewGroup.addListener(dU,function(e){var eO=e.getData()[0];
var eP=eO!=null?eO.getUserData(cM):dP;

switch(eP){case dt:this.setSelection([o]);
z.show();
break;
case db:this.setSelection([p]);
z.show();
break;
case dm:this.setSelection([y]);
z.show();
break;
default:this.resetSelection();
z.exclude();
}},z);
x.add(z,1);
z.resetSelection();
z.exclude();
this._history=qx.bom.History.getInstance();
this._history.addListener(dp,function(e){var bE=e.getData().replace(ds,dQ);

if(this._currentSample!=bE){this.setCurrentSample(bE);
}},this);
this.__Kp=[this.__Ku,this.__Kv,this.__Kw];
{this.__Kp.push(this.__Ks);
};
this.__Kq=new qx.event.Timer(250);
this.__Kq.addListener(cJ,this.__KM,this);
this.__Kq.start();
},properties:{playDemos:{check:[dK,dJ,dO],init:dO}},members:{_iframe:null,__Kn:null,__Kq:null,__Kr:null,_tree:null,_status:null,_searchTextField:null,__Ks:null,__Kt:null,__Kp:null,_versionFilter:null,__Ku:null,__Kv:null,__Kw:null,__Kx:null,__Ko:null,_leftComposite:null,_infosplit:null,_demoView:null,defaultUrl:cE,playgroundUrl:cK+qx.core.Setting.get(dx)+ej,__Ky:function(){this._cmdObjectSummary=new qx.ui.core.Command(dC);
this._cmdObjectSummary.addListener(dR,this.__Kz,this);
this._cmdRunSample=new qx.ui.core.Command(cP);
this._cmdRunSample.addListener(dR,this.runSample,this);
this._cmdPrevSample=new qx.ui.core.Command(cN);
this._cmdPrevSample.addListener(dR,this.playPrev,this);
this._cmdNextSample=new qx.ui.core.Command(dh);
this._cmdNextSample.addListener(dR,this.playNext,this);
this._cmdSampleInOwnWindow=new qx.ui.core.Command(eb);
this._cmdSampleInOwnWindow.addListener(dR,this.__KA,this);
this._cmdDisposeSample=new qx.ui.core.Command(dd);
this._cmdDisposeSample.addListener(dR,this.__KD,this);
this._cmdNamespacePollution=new qx.ui.core.Command(ed);
this._cmdNamespacePollution.addListener(dR,this.__KE,this);
},__Kz:function(){var J=this._iframe.getWindow();

if(J&&J.qx){alert(J.qx.dev.ObjectSummary.getInfo());
}else{alert("Unable to access namespace. Maybe no demo loaded.");
}},__KA:function(){var eq=this._iframe.getSource();
window.open(eq,"_blank");
},__KB:function(K){var L=!!K;
var M=this._tree.getSelection()[0].getUserData("tags");

if(M){L=L&&!qx.lang.Array.contains(M,"noPlayground");
}this.__Kt=K;
},__KC:function(){if(this.__Kt){var I=this.__Kt;
var H='{"code": '+'"'+encodeURIComponent(I)+'"}';
var G=this.playgroundUrl+"#"+encodeURIComponent(H);
window.open(G,"_blank");
}else{alert(this.tr("Could not open the Playground."));
}},__KD:function(e){var cb=this._iframe.getWindow();

if(cb&&cb.qx){cb.qx.core.ObjectRegistry.shutdown();
alert("Done!");
}else{alert("Unable to access application.");
}},__KE:function(e){var eu=this._iframe.getWindow();

if(eu&&eu.qx){alert(eu.qx.dev.Pollution.getInfo());
}else{alert("Unable to access application.");
}},__KF:function(){var bi=new qx.ui.toolbar.ToolBar();
this._navPart=new qx.ui.toolbar.Part();
bi.add(this._navPart);
this._runbutton=new qx.ui.toolbar.Button(this.tr("Run"),"icon/22/actions/media-playback-start.png");
this._runbutton.addListener("execute",this.runSample,this);
this._runbutton.setToolTipText("Run the selected demo(s)");
this._navPart.add(this._runbutton);
this._stopbutton=new qx.ui.toolbar.Button(this.tr("Stop"),"icon/22/actions/media-playback-stop.png");
this._stopbutton.addListener("execute",this.stopSample,this);
this._stopbutton.setToolTipText("Stop playback after current demo");
this._navPart.add(this._stopbutton);
this._stopbutton.setVisibility("excluded");
this._runbutton.setMinWidth(60);
this._stopbutton.setMinWidth(60);
var bv=new qx.ui.toolbar.Button(this.tr("Previous"),"icon/22/actions/go-previous.png");
bv.addListener("execute",this.playPrev,this);
bv.setToolTipText("Run previous demo");
this._navPart.add(bv);
var by=new qx.ui.toolbar.Button(this.tr("Next"),"icon/22/actions/go-next.png");
by.addListener("execute",this.playNext,this);
by.setToolTipText("Run next demo");
this._navPart.add(by);
var br=new qx.ui.toolbar.Button(this.tr("Own Window"),"icon/22/actions/edit-redo.png");
br.addListener("execute",this.__KA,this);
br.setToolTipText("Open demo in new window");
this.__Ku=br;
this._navPart.add(br);
{var bh=new qx.ui.toolbar.Button(this.tr("To Playground"),"icon/22/actions/application-exit.png");
bh.addListener("execute",this.__KC,this);
bh.setToolTipText("Open demo in the playground");
bh.setEnabled(false);
if(qx.core.Variant.isSet("qx.client","mshtml")){bh.exclude();
}this.__Ks=bh;
this._navPart.add(bh);
};
var bj=new qx.ui.toolbar.Part;
this.__Kw=bj;
bi.add(bj);
{var bu=new qx.ui.menu.Menu;
this.__Kx=bu;
var bp=new qx.ui.menu.RadioButton("Modern Theme");
var bn=new qx.ui.menu.RadioButton("Classic Theme");
bp.setUserData("value","qx.theme.Modern");
bp.setValue(true);
bn.setUserData("value","qx.theme.Classic");
var bw=new qx.ui.form.RadioGroup(bp,bn);
bw.addListener("changeSelection",this.__KR,this);
bu.add(bp);
bu.add(bn);
var bf=new qx.ui.toolbar.MenuButton(this.tr("Theme"),"icon/22/apps/utilities-color-chooser.png",bu);
bf.setToolTipText("Choose theme");
bj.add(bf);
};
var bl=new qx.ui.menu.Menu;
{var bm=new qx.ui.menu.Button(this.tr("Object Summary"));
bm.setCommand(this._cmdObjectSummary);
bl.add(bm);
var bx=new qx.ui.menu.Button(this.tr("Global Namespace Pollution"));
bx.setCommand(this._cmdNamespacePollution);
bl.add(bx);
};
var bs=new qx.ui.menu.Button(this.tr("Dispose Demo"));
bs.setCommand(this._cmdDisposeSample);
bl.add(bs);
var bt=new qx.ui.toolbar.MenuButton(this.tr("Debug"),"icon/22/apps/office-spreadsheet.png",bl);
bt.setToolTipText("Debugging options");
bj.add(bt);
var bg=new qx.ui.toolbar.Part;
this.__Kv=bg;
bi.addSpacer();
bi.add(bg);
{var bz=new qx.ui.toolbar.RadioButton("HTML Code","icon/22/apps/internet-web-browser.png");
bz.setToolTipText("Display HTML source");
var bq=new qx.ui.toolbar.RadioButton("JS Code","icon/22/mimetypes/executable.png");
bq.setToolTipText("Display JavaScript source");
bz.setUserData("value","html");
bq.setUserData("value","js");
bg.add(bz);
bg.add(bq);
};
var bo=new qx.ui.toolbar.RadioButton("Log File","icon/22/apps/utilities-log-viewer.png");
bo.setToolTipText("Display log file");
bo.setUserData("value","log");
bg.add(bo);
var bk=this.viewGroup=new qx.ui.form.RadioGroup;
bk.setAllowEmptySelection(true);
bk.add(bo);
{bk.add(bz,bq);
};
return bi;
},__KG:function(){var ev=new qx.ui.embed.Iframe().set({nativeContextMenu:true});
ev.addListener("load",this.__KL,this);
this._iframe=ev;
return ev;
},__KH:function(){var eS=new qx.ui.layout.VBox(0,"middle","main");
eS.setAlignX("right");
var eU=new qx.ui.container.Composite(eS);
var eQ=new qx.ui.decoration.Background().set({backgroundColor:"background-medium"});
eU.setDecorator(eQ);
var eT=new qx.ui.form.Button(this.tr("Clear log"),"icon/22/actions/edit-clear.png");
eT.setAllowGrowX(false);
eT.setMargin(5);
eT.addListener("execute",function(){this.logappender.clear();
},this);
eU.add(eT,{flex:0});
this.f2=new qx.ui.embed.Html();
this.f2.setOverflow("auto","auto");
this.f2.setFont("monospace");
this.f2.setBackgroundColor("white");
this.logappender=new qx.log.appender.Element();
qx.log.Logger.unregister(this.logappender);
var eR=document.createElement("div");
this.logelem=document.createElement("div");
this.logelem.style.padding="8px";
this.logappender.setElement(this.logelem);
eR.appendChild(this.logelem);
this.f2.getContentElement().useElement(eR);
eU.add(this.f2,{flex:1});
return eU;
},__KI:function(){var F=new qx.ui.embed.Html("<div class='script'>The sample source will be displayed here.</div>");
F.setOverflow("auto","auto");
F.setFont("monospace");
F.setBackgroundColor("white");
this.widgets["outputviews.sourcepage.html.page"]=F;
F.getContentElement().setAttribute("id","qx_srcview");
return F;
},__KJ:function(){var D=new qx.ui.embed.Html("<div class='script'>The sample JS source will be displayed here.</div>");
D.setOverflow("auto","auto");
D.setFont("monospace");
D.setBackgroundColor("white");
this.widgets["outputviews.sourcepage.js.page"]=D;
D.getContentElement().setAttribute("id","qx_srcview");
return D;
},__KK:function(){var eW=new qx.ui.tree.Tree();
var eV=new qx.ui.tree.TreeFolder("Demos");
eW.setAppearance("demo-tree");
eW.setRoot(eV);
eW.setSelection([eV]);
this.tree=this.widgets["treeview.flat"]=eW;
eW.addListener("changeSelection",this.treeGetSelection,this);
eW.addListener("dblclick",function(e){qx.event.Timer.once(this.runSample,this,50);
},this);
return eW;
},treeGetSelection:function(e){var eM=this.tree.getSelection()[0];
var eN=eM.getUserData(dL);
this.tests.selected=this.tests.handler.getFullName(eN);
},leftReloadTree:function(e){this._sampleToTreeNodeMap={};
var ck=this._sampleToTreeNodeMap;
var cq=null;
var ct=null;
var cs;
{cs=/\?autorun=true/.test(location.href);
};
var cp=this._history.getState();
var cn=cp.match(/([^~]+)~/);

if(cn){cq=cn[1];
}else{var cl=cp.match(/([^~][\w]*)/);

if(cl){cq=cl[1];

if(cs){this.setPlayDemos(dJ);
}}else{cq=cy;

if(cs){this.setPlayDemos(dK);
}}}function cr(Y,ba){var be=ba.getChildren();
var t;

for(var i=0;i<be.length;i++){var bb=be[i];

if(bb.hasChildren()){t=new qx.ui.tree.TreeFolder(cm.polish(bb.label));
t.setUserData(ea,false);
t.setUserData(dI,bb);
cr(t,t.getUserData(dI));

if(bb.label==cq){ct=t;
t.setOpen(true);
}}else{t=new qx.ui.tree.TreeFile(cm.polish(bb.label));
var bd=bb.pwd().slice(1).join(dQ)+dQ+bb.label;

if(bb.tags){var j,m,bc;
t.setUserData(dv,bb.tags);
{};
}ck[bd]=t;
}Y.add(t);
t.setUserData(dL,bb);
bb.widgetLinkFull=t;
}}var co=this.tests.handler.ttree;
var cm=this;
this.tree.setUserData(dL,co);
this.tree.getRoot().setOpen(true);
cr(this.tree.getRoot(),co);
{};

if(ct!=null){this.tree.setSelection([ct]);
}},runSample:function(e){if(e&&e.getType()===dR){if(this.tests.selected===dP){this.setPlayDemos(dK);
}else if(this.tests.selected.indexOf(dt)>0){this.setPlayDemos(dO);
}else{this.setPlayDemos(dJ);
}}this._runbutton.setVisibility(dM);
this._stopbutton.setVisibility(dN);

if(this.tests.selected!=dP){var bB=this.tests.selected.replace(cS,dQ);
this.setCurrentSample(bB);
}else{this.playNext();
}},stopSample:function(e){this.setPlayDemos(dO);
this._stopbutton.setVisibility(dM);
this._runbutton.setVisibility(dN);
},setCurrentSample:function(er){if(!er){return;
}
if(!this._sampleToTreeNodeMap){return;
}var es;
var et=this._sampleToTreeNodeMap[er];

if(et){et.getTree().setSelection([et]);
es=ee+er;
{es+=dj+this.__Kn;
};
}else{es=this.defaultUrl;
}
if(this._iframe.getSource()==es){this._iframe.reload();
}else{this.__Kr=false;
this._iframe.setSource(es);
}if(es==this.defaultUrl){this.disableMenuButtons();
}else{this.enableMenuButtons();
}this._currentSample=er;
this._currentSampleUrl=es;
},__KL:function(){var bL=this._iframe.getWindow();
var bR=this._iframe.getSource();

if(bR!=null&&bR!=this.defaultUrl){var bK;

try{bK=bL.location.href;
}catch(eX){bK=window.location.href;
var bS=bK.lastIndexOf("/");

if(bS!=-1){bK=bK.substring(0,bS+1);
}bK+=bR;
}var bP=bK.indexOf("/demo/")+6;
var bM=bK.indexOf("?");
bM=bM==-1?bK.length:bM;
var bN=bK.substring(bP,bM).split("/");
var bQ=String.fromCharCode(187);

if(bN.length==2){var bI=bN[0];
bI=bI.charAt(0).toUpperCase()+bI.substring(1);
var bO=bN[1].replace(".html","").replace("_"," ");
bO=bO.charAt(0).toUpperCase()+bO.substring(1);
var bJ="qooxdoo "+bQ+" Demo Browser "+bQ+" "+bI+" "+bQ+" "+bO;
}else{var bJ="qooxdoo "+bQ+" Demo Browser "+bQ+" Start";
}document.title=bJ;
}if(this.getPlayDemos()!="current"){if(!bO){this.playNext();
}else{var self=this;
qx.event.Timer.once(this.playNext,self,5000);
}}else{this._stopbutton.setVisibility("excluded");
this._runbutton.setVisibility("visible");
}},__KM:function(e){var bF=this._iframe.getWindow();

try{if(bF&&bF.qx&&bF.qx.log&&bF.qx.log.appender){if(!this.__Kr){this.__Kr=true;
this.debug("Demo loaded: "+this._currentSample);
this.logappender.$$id=null;
this.logappender.clear();

try{bF.qx.log.Logger.register(this.logappender);
}catch(e){return ;
}this._history.addToHistory(this._currentSample.replace("/","~"),document.title);
if(this._currentSampleUrl!=this.defaultUrl){this.__KN(this._currentSampleUrl);
}}}else{this.__Kr=false;
}}catch(cc){this.__Kr=false;
}},filter:function(ew){var eF=new RegExp(dY+ew+cG,cx);
var eD=this._tree.getRoot().getItems(true,true);
var eE=0;
var ey=0;

for(var i=0;i<eD.length;i++){var eG=eD[i];
var parent=eG.getParent();
var eC=eG.getUserData(dv);
var ez=false;

if(eC!=null){for(var j=0;j<eC.length;j++){ez=!!eC[j].match(eF);

if(ez){break;
}}}
if(eG.getChildren().length==0){ey++;
}
if((ez||(eG.getLabel().search(eF)!=-1)||(parent.getLabel().search(eF)!=-1))){if(eG.getChildren().length==0){eE++;
}eG.show();
eG.getParent().setOpen(true);
eG.getParent().show();
}else{eG.exclude();
}}if(ew==dP){var eB=this._tree.getRoot().getItems(false,true);
var eA=this._tree.getSelection();
for(var i=0;i<eB.length;i++){if(eB[i]==eA[0]||eB[i]==eA[0].getParent()){continue;
}eB[i].setOpen(false);
}}this._status.setValue(eE+dQ+ey);
},__KN:function(bC){if(typeof (bC)!="string"){return;
}var bD=new qx.io.remote.Request(bC);
bD.setTimeout(180000);
bD.setProhibitCaching(false);
bD.addListener("completed",function(a){var content=a.getContent();
if(content){{var d=content.indexOf("<script",content.indexOf("<script")+7);
var n=content.indexOf("src",d);
var c=content.indexOf("\"",n+5);
var f=content.substring(n+5,c);
var k=f.substring(4,f.length-3)+".src.js";
var u="script/demobrowser.demo";
var h=bC.split('/');
var g=h[1];
var l=h[2];
l=l.substr(0,l.indexOf('.html'));
u+="."+g+"."+l+".src.js";
k=u;
var b=new qx.io.remote.Request(k);
b.setTimeout(180000);
b.setProhibitCaching(false);
b.addListener("completed",function(bU){var bV=bU.getContent();
this.__KB(bV);

if(bV){this.widgets["outputviews.sourcepage.js.page"].setHtml(this.__KO(bV,"javascript"));
}},this);
b.addListener("failed",function(eL){this.error("Couldn't load file: "+bC);
},this);
b.send();
this.widgets["outputviews.sourcepage.html.page"].setHtml(this.__KO(content));
};
}},this);
bD.addListener("failed",function(X){this.error("Couldn't load file: "+bC);
},this);
bD.send();
},dataLoader:function(N){var O=new qx.io.remote.Request(N);
O.setTimeout(180000);
O.setProhibitCaching(false);
O.addListener(ec,function(cu){var content=cu.getContent();
var cv=eval(content);
qx.event.Timer.once(function(){this.tests.handler=new demobrowser.TreeDataHandler(cv);
this.leftReloadTree();
var bG=this._history.getState();

if(bG){this.setCurrentSample(bG.replace(ds,dQ));
}else{this.setCurrentSample(this.defaultUrl);
}},this,0);
},this);
O.addListener(dB,function(bH){this.error("Couldn't load file: "+N);
},this);
O.send();
},playPrev:function(e){this.setPlayDemos(dO);
var eK=this.tree.getSelection()[0];

if(eK){var eH=this.tree.getPreviousNodeOf(eK,false);

if(!eH||eH==this.tree.getRoot()){return;
}
while(eH.isVisible&&!eH.isVisible()){eH=this.tree.getPreviousNodeOf(eH,false);
}
if(eH.getParent()==this.tree.getRoot()){var eJ=this.tree.getPreviousNodeOf(eH,false);

while(eJ.isVisible&&!eJ.isVisible()){eJ=this.tree.getPreviousNodeOf(eJ,false);
}
if(eJ.getParent()==this.tree.getRoot()){eJ.setOpen(true);
var eI=this.tree.getPreviousNodeOf(eH,false);

while(eI.isVisible&&!eI.isVisible()){eI=this.tree.getPreviousNodeOf(eI,false);
}
if(eJ!==eI){eH=eI;
}}else{eH=eJ;
}}
if(!eH||eH===eK){this._stopbutton.setVisibility(dM);
this._runbutton.setVisibility(dN);
return;
}else{this.tree.setSelection([eH]);
this.runSample();
}}},playNext:function(e){var ep=this.tree.getSelection()[0];

if(ep){var en=this.tree.getNextNodeOf(ep,false);

if(!en){return;
}
if(en.getParent()==this.tree.getRoot()){en.setOpen(true);
en=this.tree.getNextNodeOf(en,false);
}
if(!en){return;
}
while(!en.isVisible()){var eo=this.tree.getNextNodeOf(en,false);

if(!eo){return ;
}
if(eo.getParent()==this.tree.getRoot()){en.setOpen(true);
var eo=this.tree.getNextNodeOf(eo,false);
}en=eo;
}
if(en){this.tree.setSelection([en]);
this.runSample();
}else{this._stopbutton.setVisibility(dM);
this._runbutton.setVisibility(dN);
}}},__KO:function(P,Q){var R=new qx.util.StringBuilder("<pre class='script'>");
var T=[];
var U=new qx.util.StringBuilder();
var V=/^\s*<script\b[^>]*?(?!\bsrc\s*=)[^>]*?>\s*$/i;
var S=/^\s*<\/script>\s*$/i;
P=P.replace(/\r\n/g,"\n").replace(/\r/g,"\n");
var T=P.split('\n');
if(Q=="javascript"){return "<pre ><div class='script'>"+qx.dev.Tokenizer.javaScriptToHtml(P)+"</div></pre>";
}
for(var i=0;i<T.length;i++){if(V.exec(T[i])){R.add(this.__KP(qx.bom.String.escape(U.get()+T[i])));
U.clear();
}else if(S.exec(T[i])){var W=qx.dev.Tokenizer.javaScriptToHtml(U.get());
R.add('<div class="script">',W,'</div>');
U.clear();
U.add(T[i],'\n');
}else{U.add(T[i],'\n');
}}R.add(this.__KP(qx.bom.String.escape(U.get())),"</pre>");
return R.get();
},disableMenuButtons:function(){var E=this.__Kp;

for(var i=0;i<E.length;i++){E[i].setEnabled(false);
}},enableMenuButtons:function(){var cj=this.__Kp;

for(var i=0;i<cj.length;i++){cj[i].setEnabled(true);
}},__KP:function(cg){var ci=cg;
function ch(cd){var s=new qx.util.StringBuilder(arguments[1],'<span class="html-tag-name">',arguments[2],'</span>');
var ce;
var cf=false;
if(arguments.length-2>3){for(var i=3;i<arguments.length-2;i++){ce=arguments[i];

if(ce=="/"){cf=true;
break;
}else{var m=/\s*([^=]+?)\s*=\s*((?!&quot;)\S+|&quot;.*?&quot;)\s*/g;
var r;

while((r=m.exec(ce))!=null){s.add(' <span class="keyword">',r[1],'</span>=<span class="string">',r[2].replace(/\s*$/,""),'</span>');
}}}s.add((cf?"/":""));
}s.add('&gt;');
return s.get();
}ci=ci.replace(/(&lt;\/?)([a-zA-Z]+)(.*?)(\/?)&gt;/g,ch);
return ci;
},polish:function(bT){return bT.replace(dH,dP).replace(el,eg);
},__KQ:function(){var w=this._iframe.getWindow();
var bA;

if(w.qx&&w.qx.log&&w.qx.log.Logger){bA=w.qx.log.Logger;
bA.register(this.logappender);
bA.clear();
bA.unregister(this.logappender);
}},__KR:function(e){this.__Kn=e.getData()[0].getUserData("value");
this.runSample();
},_createHeader:function(){var bY=new qx.ui.layout.HBox();
var bW=new qx.ui.container.Composite(bY);
bW.setAppearance(df);
var ca=new qx.ui.basic.Label(dg);
var bX=new qx.ui.basic.Label(cW+qx.core.Setting.get(dx));
bW.add(ca);
bW.add(new qx.ui.core.Spacer,{flex:1});
bW.add(bX);
return bW;
}},destruct:function(){this.widgets=this.tests=this._sampleToTreeNodeMap=this.tree=this.logelem=null;
this._disposeObjects(de,cD,da,cI,cC,dD,dG,dS,dF,cV,cQ,cO,dc,cF,cz,dy,di,dE,dz,dV,ei,cT,eh,cB,cL,dA,dT,cY,cR,du,dl,cH,dn,du);
}});
})();
(function(){var s="_applyLayoutChange",r="top",q="left",p="height",o="middle",n="Decorator",m="center",k="_applyReversed",j="qx.debug",h="bottom",c="' is not supported by the VBox layout!",g="qx.ui.layout.VBox",f="flex",b="Integer",a="The property '",e="right",d="Boolean";
qx.Class.define(g,{extend:qx.ui.layout.Abstract,construct:function(bp,bq,br){qx.ui.layout.Abstract.call(this);

if(bp){this.setSpacing(bp);
}
if(bq){this.setAlignY(bq);
}
if(br){this.setSeparator(br);
}},properties:{alignY:{check:[r,o,h],init:r,apply:s},alignX:{check:[q,m,e],init:q,apply:s},spacing:{check:b,init:0,apply:s},separator:{check:n,nullable:true,apply:s},reversed:{check:d,init:false,apply:k}},members:{__eI:null,__eJ:null,__eK:null,__eL:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__eM:function(){var bo=this._getLayoutChildren();
var length=bo.length;
var bk=false;
var bj=this.__eI&&this.__eI.length!=length&&this.__eJ&&this.__eI;
var bm;
var bl=bj?this.__eI:new Array(length);
var bn=bj?this.__eJ:new Array(length);
if(this.getReversed()){bo=bo.concat().reverse();
}for(var i=0;i<length;i++){bm=bo[i].getLayoutProperties();

if(bm.height!=null){bl[i]=parseFloat(bm.height)/100;
}
if(bm.flex!=null){bn[i]=bm.flex;
bk=true;
}else{bn[i]=0;
}}if(!bj){this.__eI=bl;
this.__eJ=bn;
}this.__eK=bk;
this.__eL=bo;
delete this._invalidChildrenCache;
},verifyLayoutProperty:qx.core.Variant.select(j,{"on":function(t,name,u){this.assert(name===f||name===p,a+name+c);

if(name==p){this.assertMatch(u,qx.ui.layout.Util.PERCENT_VALUE);
}else{this.assertNumber(u);
this.assert(u>=0);
}},"off":null}),renderLayout:function(v,w){if(this._invalidChildrenCache){this.__eM();
}var D=this.__eL;
var length=D.length;
var N=qx.ui.layout.Util;
var M=this.getSpacing();
var Q=this.getSeparator();

if(Q){var A=N.computeVerticalSeparatorGaps(D,M,Q);
}else{var A=N.computeVerticalGaps(D,M,true);
}var i,y,z,H;
var I=[];
var O=A;

for(i=0;i<length;i+=1){H=this.__eI[i];
z=H!=null?Math.floor((w-A)*H):D[i].getSizeHint().height;
I.push(z);
O+=z;
}if(this.__eK&&O!=w){var F={};
var L,P;

for(i=0;i<length;i+=1){L=this.__eJ[i];

if(L>0){E=D[i].getSizeHint();
F[i]={min:E.minHeight,value:I[i],max:E.maxHeight,flex:L};
}}var B=N.computeFlexOffsets(F,w,O);

for(i in B){P=B[i].offset;
I[i]+=P;
O+=P;
}}var top=D[0].getMarginTop();
if(O<w&&this.getAlignY()!=r){top=w-O;

if(this.getAlignY()===o){top=Math.round(top/2);
}}var E,S,J,z,G,K,C;
this._clearSeparators();
if(Q){var R=qx.theme.manager.Decoration.getInstance().resolve(Q).getInsets();
var x=R.top+R.bottom;
}for(i=0;i<length;i+=1){y=D[i];
z=I[i];
E=y.getSizeHint();
K=y.getMarginLeft();
C=y.getMarginRight();
J=Math.max(E.minWidth,Math.min(v-K-C,E.maxWidth));
S=N.computeHorizontalAlignOffset(y.getAlignX()||this.getAlignX(),J,v,K,C);
if(i>0){if(Q){top+=G+M;
this._renderSeparator(Q,{top:top,left:0,height:x,width:v});
top+=x+M+y.getMarginTop();
}else{top+=N.collapseMargins(M,G,y.getMarginTop());
}}y.renderLayout(S,top,J,z);
top+=z;
G=y.getMarginBottom();
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__eM();
}var ba=qx.ui.layout.Util;
var bi=this.__eL;
var V=0,Y=0,X=0;
var T=0,bb=0;
var bf,U,bh;
for(var i=0,l=bi.length;i<l;i+=1){bf=bi[i];
U=bf.getSizeHint();
Y+=U.height;
var be=this.__eJ[i];
var W=this.__eI[i];

if(be){V+=U.minHeight;
}else if(W){X=Math.max(X,Math.round(U.minHeight/W));
}else{V+=U.height;
}bh=bf.getMarginLeft()+bf.getMarginRight();
if((U.width+bh)>bb){bb=U.width+bh;
}if((U.minWidth+bh)>T){T=U.minWidth+bh;
}}V+=X;
var bd=this.getSpacing();
var bg=this.getSeparator();

if(bg){var bc=ba.computeVerticalSeparatorGaps(bi,bd,bg);
}else{var bc=ba.computeVerticalGaps(bi,bd,true);
}return {minHeight:V+bc,height:Y+bc,minWidth:T,width:bb};
}},destruct:function(){this.__eI=this.__eJ=this.__eL=null;
}});
})();
(function(){var n="splitter",m="slider",l="mousedown",k="mouseout",j="mousemove",i="mouseup",h="losecapture",g="active",f="horizontal",d="vertical",F="knob",E="Integer",D="height",C="row-resize",B="move",A="maxHeight",z="width",w="_applyOrientation",v="mouseover",u="splitpane",s="qx.ui.splitpane.Pane",t="_applyOffset",q="minHeight",r="minWidth",o="col-resize",p="maxWidth";
qx.Class.define(s,{extend:qx.ui.core.Widget,construct:function(bq){qx.ui.core.Widget.call(this);
this.__mi=[];
if(bq){this.setOrientation(bq);
}else{this.initOrientation();
}this.addListener(l,this._onMouseDown);
this.addListener(i,this._onMouseUp);
this.addListener(j,this._onMouseMove);
this.addListener(k,this._onMouseOut);
this.addListener(h,this._onMouseUp);
},properties:{appearance:{refine:true,init:u},offset:{check:E,init:6,apply:t},orientation:{init:f,check:[f,d],apply:w}},members:{__mj:null,__mk:false,__ml:null,__mm:null,__mn:null,__mo:null,__mp:null,__mi:null,_createChildControlImpl:function(a){var b;

switch(a){case m:b=new qx.ui.splitpane.Slider(this);
b.exclude();
this._add(b,{type:a});
break;
case n:b=new qx.ui.splitpane.Splitter(this);
this._add(b,{type:a});
b.addListener(B,this._onSplitterMove,this);
if(qx.bom.client.Engine.OPERA){b.addListener(v,this._onSplitterMouseOver,b);
}break;
}return b||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,a);
},_applyOrientation:function(bw,bx){var by=this.getChildControl(m);
var bB=this.getChildControl(n);
this.__mn=bw===f;
var bA=this._getLayout();

if(bA){bA.dispose();
}var bz=bw===d?new qx.ui.splitpane.VLayout:new qx.ui.splitpane.HLayout;
this._setLayout(bz);
bB.removeState(bx);
bB.addState(bw);
bB.getChildControl(F).removeState(bx);
bB.getChildControl(F).addState(bw);
by.removeState(bx);
by.addState(bw);
},_applyOffset:function(bb,bc){var bd=this.getChildControl(n);

if(bc===0){bd.removeListener(l,this._onMouseDown,this);
bd.removeListener(j,this._onMouseMove,this);
bd.removeListener(k,this._onMouseOut,this);
bd.removeListener(i,this._onMouseUp,this);
bd.removeListener(h,this._onMouseUp,this);
this.addListener(l,this._onMouseDown);
this.addListener(i,this._onMouseUp);
this.addListener(j,this._onMouseMove);
this.addListener(k,this._onMouseOut);
this.addListener(h,this._onMouseUp);
}
if(bb===0){this.removeListener(l,this._onMouseDown);
this.removeListener(i,this._onMouseUp);
this.removeListener(j,this._onMouseMove);
this.removeListener(k,this._onMouseOut);
this.removeListener(h,this._onMouseUp);
bd.addListener(l,this._onMouseDown,this);
bd.addListener(j,this._onMouseMove,this);
bd.addListener(k,this._onMouseOut,this);
bd.addListener(i,this._onMouseUp,this);
bd.addListener(h,this._onMouseUp,this);
}},add:function(bl,bm){if(bm==null){this._add(bl);
}else{this._add(bl,{flex:bm});
}this.__mi.push(bl);
},remove:function(c){this._remove(c);
qx.lang.Array.remove(this.__mi,c);
},getChildren:function(){return this.__mi;
},_onMouseDown:function(e){if(!e.isLeftPressed()||!this._isNear()){return;
}var br=this.getChildControl(n);
var bt=br.getContainerLocation();
var bs=this.getContentLocation();
this.__mj=this.__mn?e.getDocumentLeft()-bt.left+bs.left:e.getDocumentTop()-bt.top+bs.top;
var bv=this.getChildControl(m);
var bu=br.getBounds();
bv.setUserBounds(bu.left,bu.top,bu.width,bu.height);
bv.setZIndex(br.getZIndex()+1);
bv.show();
this.__mk=true;
e.getCurrentTarget().capture();
e.stop();
},_onMouseMove:function(e){this._setLastMousePosition(e.getDocumentLeft(),e.getDocumentTop());
if(this.__mk){this.__mr();
var N=this.getChildControl(m);
var O=this.__mo;

if(this.__mn){N.setDomLeft(O);
}else{N.setDomTop(O);
}e.stop();
}else{this.__mq();
}},_onMouseOut:function(e){this._setLastMousePosition(-100,-100);
this.__mq();
},_onMouseUp:function(e){if(!this.__mk){return;
}this._finalizeSizes();
var P=this.getChildControl(m);
P.exclude();
this.__mk=false;
this.releaseCapture();
this.__mq();
e.stop();
},_onSplitterMove:function(){this.__mq();
},_onSplitterMouseOver:function(){this.addState(g);
},_finalizeSizes:function(){var J=this.__mo;
var G=this.__mp;

if(J==null){return;
}var L=this._getChildren();
var K=L[2];
var H=L[3];
var I=K.getLayoutProperties().flex;
var M=H.getLayoutProperties().flex;
if((I!=0)&&(M!=0)){K.setLayoutProperties({flex:J});
H.setLayoutProperties({flex:G});
}else{if(this.__mn){K.setWidth(J);
H.setWidth(G);
}else{K.setHeight(J);
H.setHeight(G);
}}},_isNear:function(){var be=this.getChildControl(n);
var bg=be.getBounds();
var bi=be.getContainerLocation();
var bf=this.getOffset();
if(!bi){return;
}var bj=this.__ml;
var bk=bg.width;
var bh=bi.left;

if(bk<bf){bh-=Math.floor((bf-bk)/2);
bk=bf;
}
if(bj<bh||bj>(bh+bk)){return false;
}var bj=this.__mm;
var bk=bg.height;
var bh=bi.top;

if(bk<bf){bh-=Math.floor((bf-bk)/2);
bk=bf;
}
if(bj<bh||bj>(bh+bk)){return false;
}return true;
},__mq:function(){var bo=this.getChildControl(n);
var bp=this.getApplicationRoot();
if(this.__mk||this._isNear()){var bn=this.__mn?o:C;
this.setCursor(bn);
bp.setGlobalCursor(bn);
bo.addState(g);
}else if(bo.hasState(g)){this.resetCursor();
bp.resetGlobalCursor();
bo.removeState(g);
}},__mr:function(){if(this.__mn){var S=r,ba=z,T=p,X=this.__ml;
}else{var S=q,ba=D,T=A,X=this.__mm;
}var Y=this._getChildren();
var Q=Y[2].getSizeHint();
var V=Y[3].getSizeHint();
var W=Y[2].getBounds()[ba]+Y[3].getBounds()[ba];
var U=X-this.__mj;
var R=W-U;
if(U<Q[S]){R-=Q[S]-U;
U=Q[S];
}else if(R<V[S]){U-=V[S]-R;
R=V[S];
}if(U>Q[T]){R+=U-Q[T];
U=Q[T];
}else if(R>V[T]){U+=R-V[T];
R=V[T];
}this.__mo=U;
this.__mp=R;
},_isActiveDragSession:function(){return this.__mk;
},_setLastMousePosition:function(x,y){this.__ml=x;
this.__mm=y;
}},destruct:function(){this.__mi=null;
}});
})();
(function(){var a="qx.ui.splitpane.Slider";
qx.Class.define(a,{extend:qx.ui.core.Widget,properties:{allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false}}});
})();
(function(){var e="center",d="knob",c="middle",b="qx.ui.splitpane.Splitter",a="vertical";
qx.Class.define(b,{extend:qx.ui.core.Widget,construct:function(f){qx.ui.core.Widget.call(this);
if(f.getOrientation()==a){this._setLayout(new qx.ui.layout.HBox(0,e));
this._getLayout().setAlignY(c);
}else{this._setLayout(new qx.ui.layout.VBox(0,c));
this._getLayout().setAlignX(e);
}this._createChildControl(d);
},properties:{allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{_createChildControlImpl:function(g){var h;

switch(g){case d:h=new qx.ui.basic.Image;
this._add(h);
break;
}return h||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,g);
}}});
})();
(function(){var s="_applyLayoutChange",r="left",q="width",p="center",o="top",n="Decorator",m="middle",k="_applyReversed",j="qx.debug",h="bottom",c="' is not supported by the HBox layout!",g="Boolean",f="flex",b="right",a="Integer",e="The property '",d="qx.ui.layout.HBox";
qx.Class.define(d,{extend:qx.ui.layout.Abstract,construct:function(t,u,v){qx.ui.layout.Abstract.call(this);

if(t){this.setSpacing(t);
}
if(u){this.setAlignX(u);
}
if(v){this.setSeparator(v);
}},properties:{alignX:{check:[r,p,b],init:r,apply:s},alignY:{check:[o,m,h],init:o,apply:s},spacing:{check:a,init:0,apply:s},separator:{check:n,nullable:true,apply:s},reversed:{check:g,init:false,apply:k}},members:{__fE:null,__fF:null,__fG:null,__fH:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__fI:function(){var D=this._getLayoutChildren();
var length=D.length;
var A=false;
var y=this.__fE&&this.__fE.length!=length&&this.__fF&&this.__fE;
var B;
var z=y?this.__fE:new Array(length);
var C=y?this.__fF:new Array(length);
if(this.getReversed()){D=D.concat().reverse();
}for(var i=0;i<length;i++){B=D[i].getLayoutProperties();

if(B.width!=null){z[i]=parseFloat(B.width)/100;
}
if(B.flex!=null){C[i]=B.flex;
A=true;
}else{C[i]=0;
}}if(!y){this.__fE=z;
this.__fF=C;
}this.__fG=A;
this.__fH=D;
delete this._invalidChildrenCache;
},verifyLayoutProperty:qx.core.Variant.select(j,{"on":function(w,name,x){this.assert(name===f||name===q,e+name+c);

if(name==q){this.assertMatch(x,qx.ui.layout.Util.PERCENT_VALUE);
}else{this.assertNumber(x);
this.assert(x>=0);
}},"off":null}),renderLayout:function(E,F){if(this._invalidChildrenCache){this.__fI();
}var L=this.__fH;
var length=L.length;
var U=qx.ui.layout.Util;
var T=this.getSpacing();
var X=this.getSeparator();

if(X){var I=U.computeHorizontalSeparatorGaps(L,T,X);
}else{var I=U.computeHorizontalGaps(L,T,true);
}var i,G,R,Q;
var W=[];
var M=I;

for(i=0;i<length;i+=1){Q=this.__fE[i];
R=Q!=null?Math.floor((E-I)*Q):L[i].getSizeHint().width;
W.push(R);
M+=R;
}if(this.__fG&&M!=E){var O={};
var S,V;

for(i=0;i<length;i+=1){S=this.__fF[i];

if(S>0){N=L[i].getSizeHint();
O[i]={min:N.minWidth,value:W[i],max:N.maxWidth,flex:S};
}}var J=U.computeFlexOffsets(O,E,M);

for(i in J){V=J[i].offset;
W[i]+=V;
M+=V;
}}var bc=L[0].getMarginLeft();
if(M<E&&this.getAlignX()!=r){bc=E-M;

if(this.getAlignX()===p){bc=Math.round(bc/2);
}}var N,top,H,R,K,ba,P;
var T=this.getSpacing();
this._clearSeparators();
if(X){var Y=qx.theme.manager.Decoration.getInstance().resolve(X).getInsets();
var bb=Y.left+Y.right;
}for(i=0;i<length;i+=1){G=L[i];
R=W[i];
N=G.getSizeHint();
ba=G.getMarginTop();
P=G.getMarginBottom();
H=Math.max(N.minHeight,Math.min(F-ba-P,N.maxHeight));
top=U.computeVerticalAlignOffset(G.getAlignY()||this.getAlignY(),H,F,ba,P);
if(i>0){if(X){bc+=K+T;
this._renderSeparator(X,{left:bc,top:0,width:bb,height:F});
bc+=bb+T+G.getMarginLeft();
}else{bc+=U.collapseMargins(T,K,G.getMarginLeft());
}}G.renderLayout(bc,top,R,H);
bc+=R;
K=G.getMarginRight();
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__fI();
}var bj=qx.ui.layout.Util;
var br=this.__fH;
var bd=0,bk=0,bh=0;
var bg=0,bi=0;
var bo,be,bq;
for(var i=0,l=br.length;i<l;i+=1){bo=br[i];
be=bo.getSizeHint();
bk+=be.width;
var bn=this.__fF[i];
var bf=this.__fE[i];

if(bn){bd+=be.minWidth;
}else if(bf){bh=Math.max(bh,Math.round(be.minWidth/bf));
}else{bd+=be.width;
}bq=bo.getMarginTop()+bo.getMarginBottom();
if((be.height+bq)>bi){bi=be.height+bq;
}if((be.minHeight+bq)>bg){bg=be.minHeight+bq;
}}bd+=bh;
var bm=this.getSpacing();
var bp=this.getSeparator();

if(bp){var bl=bj.computeHorizontalSeparatorGaps(br,bm,bp);
}else{var bl=bj.computeHorizontalGaps(br,bm,true);
}return {minWidth:bd+bl,width:bk+bl,minHeight:bg,height:bi};
}},destruct:function(){this.__fE=this.__fF=this.__fH=null;
}});
})();
(function(){var h="slider",g="type",f="flex",e="splitter",d="qx.ui.splitpane.VLayout",c="qx.debug",b="' is not supported by the split layout!",a="The property '";
qx.Class.define(d,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:qx.core.Variant.select(c,{"on":function(N,name,O){this.assert(name===g||name===f,a+name+b);

if(name==f){this.assertNumber(O);
}
if(name==g){this.assertString(O);
}},"off":null}),renderLayout:function(j,k){var A=this._getLayoutChildren();
var length=A.length;
var w,z;
var m,l,u,n;

for(var i=0;i<length;i++){w=A[i];
z=w.getLayoutProperties().type;

if(z===e){l=w;
}else if(z===h){u=w;
}else if(!m){m=w;
}else{n=w;
}}
if(m&&n){var C=m.getLayoutProperties().flex;
var p=n.getLayoutProperties().flex;

if(C==null){C=1;
}
if(p==null){p=1;
}var B=m.getSizeHint();
var s=l.getSizeHint();
var t=n.getSizeHint();
var o=B.height;
var x=s.height;
var y=t.height;

if(C>0&&p>0){var q=C+p;
var r=k-x;
var o=Math.round((r/q)*C);
var y=r-o;
var v=qx.ui.layout.Util.arrangeIdeals(B.minHeight,o,B.maxHeight,t.minHeight,y,t.maxHeight);
o=v.begin;
y=v.end;
}else if(C>0){o=k-x-y;

if(o<B.minHeight){o=B.minHeight;
}
if(o>B.maxHeight){o=B.maxHeight;
}}else if(p>0){y=k-o-x;

if(y<t.minHeight){y=t.minHeight;
}
if(y>t.maxHeight){y=t.maxHeight;
}}m.renderLayout(0,0,j,o);
l.renderLayout(0,o,j,x);
n.renderLayout(0,o+x,j,y);
}else{l.renderLayout(0,0,0,0);
if(m){m.renderLayout(0,0,j,k);
}else if(n){n.renderLayout(0,0,j,k);
}}},_computeSizeHint:function(){var M=this._getLayoutChildren();
var length=M.length;
var F,E,L;
var G=0,I=0,H=0;
var J=0,K=0,D=0;

for(var i=0;i<length;i++){F=M[i];
L=F.getLayoutProperties();
if(L.type===h){continue;
}E=F.getSizeHint();
G+=E.minHeight;
I+=E.height;
H+=E.maxHeight;

if(E.minWidth>J){J=E.minWidth;
}
if(E.width>K){K=E.width;
}
if(E.maxWidth>D){D=E.maxWidth;
}}return {minHeight:G,height:I,maxHeight:H,minWidth:J,width:K,maxWidth:D};
}}});
})();
(function(){var h="slider",g="type",f="flex",e="splitter",d="qx.ui.splitpane.HLayout",c="' is not supported by the split layout!",b="The property '",a="qx.debug";
qx.Class.define(d,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:qx.core.Variant.select(a,{"on":function(D,name,E){this.assert(name===g||name===f,b+name+c);

if(name==f){this.assertNumber(E);
}
if(name==g){this.assertString(E);
}},"off":null}),renderLayout:function(j,k){var A=this._getLayoutChildren();
var length=A.length;
var x,z;
var m,l,u,n;

for(var i=0;i<length;i++){x=A[i];
z=x.getLayoutProperties().type;

if(z===e){l=x;
}else if(z===h){u=x;
}else if(!m){m=x;
}else{n=x;
}}
if(m&&n){var C=m.getLayoutProperties().flex;
var o=n.getLayoutProperties().flex;

if(C==null){C=1;
}
if(o==null){o=1;
}var B=m.getSizeHint();
var r=l.getSizeHint();
var t=n.getSizeHint();
var y=B.width;
var w=r.width;
var v=t.width;

if(C>0&&o>0){var p=C+o;
var q=j-w;
var y=Math.round((q/p)*C);
var v=q-y;
var s=qx.ui.layout.Util.arrangeIdeals(B.minWidth,y,B.maxWidth,t.minWidth,v,t.maxWidth);
y=s.begin;
v=s.end;
}else if(C>0){y=j-w-v;

if(y<B.minWidth){y=B.minWidth;
}
if(y>B.maxWidth){y=B.maxWidth;
}}else if(o>0){v=j-y-w;

if(v<t.minWidth){v=t.minWidth;
}
if(v>t.maxWidth){v=t.maxWidth;
}}m.renderLayout(0,0,y,k);
l.renderLayout(y,0,w,k);
n.renderLayout(y+w,0,v,k);
}else{l.renderLayout(0,0,0,0);
if(m){m.renderLayout(0,0,j,k);
}else if(n){n.renderLayout(0,0,j,k);
}}},_computeSizeHint:function(){var O=this._getLayoutChildren();
var length=O.length;
var H,G,N;
var L=0,M=0,F=0;
var I=0,K=0,J=0;

for(var i=0;i<length;i++){H=O[i];
N=H.getLayoutProperties();
if(N.type===h){continue;
}G=H.getSizeHint();
L+=G.minWidth;
M+=G.width;
F+=G.maxWidth;

if(G.minHeight>I){I=G.minHeight;
}
if(G.height>K){K=G.height;
}
if(G.maxHeight>J){J=G.maxHeight;
}}return {minWidth:L,width:M,maxWidth:F,minHeight:I,height:K,maxHeight:J};
}}});
})();
(function(){var i="Boolean",h="changeInvalidMessage",g="String",f="invalid",e="qx.ui.form.MForm",d="_applyValid",c="",b="changeRequired",a="changeValid";
qx.Mixin.define(e,{properties:{valid:{check:i,init:true,apply:d,event:a},required:{check:i,init:false,event:b},invalidMessage:{check:g,init:c,event:h},requiredInvalidMessage:{check:g,nullable:true,event:h}},members:{_applyValid:function(j,k){j?this.removeState(f):this.addState(f);
}}});
})();
(function(){var l="showingPlaceholder",k="color",j="",i="none",h="qx.dynlocale",g="Boolean",f="qx.client",d="qx.event.type.Data",c="readonly",b="input",X="focusin",W="visibility",V="focusout",U="changeLocale",T="on",S="readOnly",R="text",Q="_applyTextAlign",P="px",O="RegExp",s=")",t="syncAppearance",q="change",r="textAlign",o="focused",p="center",m="visible",n="disabled",u="url(",v="off",C="String",A="resize",G="qx.ui.form.AbstractField",E="transparent",K="spellcheck",I="false",x="right",N="PositiveInteger",M="mshtml",L="abstract",w="block",y="webkit",z="_applyReadOnly",B="_applyPlaceholder",D="hidden",F="left",H="qx/static/blank.gif",J="absolute";
qx.Class.define(G,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm,qx.ui.form.IForm],include:[qx.ui.form.MForm],type:L,construct:function(bu){qx.ui.core.Widget.call(this);

if(bu!=null){this.setValue(bu);
}this.getContentElement().addListener(q,this._onChangeContent,this);
this.addListener(t,this._syncPlaceholder,this);
if(qx.core.Variant.isSet(h,T)){qx.locale.Manager.getInstance().addListener(U,this._onChangeLocale,this);
}},events:{"input":d,"changeValue":d},properties:{textAlign:{check:[F,p,x],nullable:true,themeable:true,apply:Q},readOnly:{check:g,apply:z,init:false},selectable:{refine:true,init:true},focusable:{refine:true,init:true},maxLength:{check:N,init:Infinity},liveUpdate:{check:g,init:false},placeholder:{check:C,nullable:true,apply:B},filter:{check:O,nullable:true,init:null}},members:{__J:true,__K:null,__L:null,__M:null,getFocusElement:function(){var bb=this.getContentElement();

if(bb){return bb;
}},_createInputElement:function(){return new qx.html.Input(R);
},renderLayout:function(bc,top,bd,be){var bf=this._updateInsets;
var bj=qx.ui.core.Widget.prototype.renderLayout.call(this,bc,top,bd,be);
if(!bj){return;
}var bh=bj.size||bf;
var bk=P;

if(bh||bj.local||bj.margin){var bg=this.getInsets();
var innerWidth=bd-bg.left-bg.right;
var innerHeight=be-bg.top-bg.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}var bi=this.getContentElement();

if(bf){this.__P().setStyles({"left":bg.left+bk,"top":bg.top+bk});
}
if(bh){this.__P().setStyles({"width":innerWidth+bk,"height":innerHeight+bk});
bi.setStyles({"width":innerWidth+bk,"height":innerHeight+bk});
}},_createContentElement:function(){var bF=this._createInputElement();
bF.setStyles({"border":i,"padding":0,"margin":0,"display":w,"background":E,"outline":i,"appearance":i,"position":J,"autoComplete":v});
bF.setSelectable(this.getSelectable());
bF.setEnabled(this.getEnabled());
bF.addListener(b,this._onHtmlInput,this);
bF.setAttribute(K,I);
if(qx.core.Variant.isSet(f,y)){bF.setStyle(A,i);
}if(qx.core.Variant.isSet(f,M)){bF.setStyles({backgroundImage:u+qx.util.ResourceManager.getInstance().toUri(H)+s});
}return bF;
},_applyEnabled:function(bG,bH){qx.ui.core.Widget.prototype._applyEnabled.call(this,bG,bH);
this.getContentElement().setEnabled(bG);

if(bG){this._showPlaceholder();
}else{this._removePlaceholder();
}},__N:{width:16,height:16},_getContentHint:function(){return {width:this.__N.width*10,height:this.__N.height||16};
},_applyFont:function(bv,bw){var bx;

if(bv){var by=qx.theme.manager.Font.getInstance().resolve(bv);
bx=by.getStyles();
}else{bx=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(bx);
this.__P().setStyles(bx);
if(bv){this.__N=qx.bom.Label.getTextSize("A",bx);
}else{delete this.__N;
}qx.ui.core.queue.Layout.add(this);
},_applyTextColor:function(bD,bE){if(bD){this.getContentElement().setStyle(k,qx.theme.manager.Color.getInstance().resolve(bD));
this.__P().setStyle(k,qx.theme.manager.Color.getInstance().resolve(bD));
}else{this.getContentElement().removeStyle(k);
this.__P().removeStyle(k);
}},tabFocus:function(){qx.ui.core.Widget.prototype.tabFocus.call(this);
this.selectAllText();
},_getTextSize:function(){return this.__N;
},_onHtmlInput:function(e){var bs=e.getData();
var br=true;
this.__J=false;
if(this.getFilter()!=null){var bt=j;
var bp=bs.search(this.getFilter());
var bq=bs;

while(bp>=0){bt=bt+(bq.charAt(bp));
bq=bq.substring(bp+1,bq.length);
bp=bq.search(this.getFilter());
}
if(bt!=bs){br=false;
bs=bt;
this.getContentElement().setValue(bs);
}}if(bs.length>this.getMaxLength()){var br=false;
this.getContentElement().setValue(bs.substr(0,this.getMaxLength()));
}if(br){this.fireDataEvent(b,bs,this.__M);
this.__M=bs;
if(this.getLiveUpdate()){this.__O(bs);
}}},__O:function(a){if(this.__L!=a){this.fireNonBubblingEvent("changeValue",qx.event.type.Data,[a,this.__L]);
this.__L=a;
}},setValue:function(bl){if(bl===null){if(this.__J){return bl;
}bl=j;
this.__J=true;
}else{this.__J=false;
this._removePlaceholder();
}
if(qx.lang.Type.isString(bl)){var bn=this.getContentElement();

if(bl.length>this.getMaxLength()){bl=bl.substr(0,this.getMaxLength());
}
if(bn.getValue()!=bl){var bo=bn.getValue();
bn.setValue(bl);
var bm=this.__J?null:bl;
this.__L=bo;
this.__O(bm);
}this._showPlaceholder();
return bl;
}throw new Error("Invalid value type: "+bl);
},getValue:function(){var bI=this.getContentElement().getValue();
return this.__J?null:bI;
},resetValue:function(){this.setValue(null);
},_onChangeContent:function(e){this.__J=e.getData()===null;
this.__O(e.getData());
},getTextSelection:function(){return this.getContentElement().getTextSelection();
},getTextSelectionLength:function(){return this.getContentElement().getTextSelectionLength();
},getTextSelectionStart:function(){return this.getContentElement().getTextSelectionStart();
},getTextSelectionEnd:function(){return this.getContentElement().getTextSelectionEnd();
},setTextSelection:function(Y,ba){this.getContentElement().setTextSelection(Y,ba);
},clearTextSelection:function(){this.getContentElement().clearTextSelection();
},selectAllText:function(){this.setTextSelection(0);
},_showPlaceholder:function(){var bC=this.getValue()||j;
var bB=this.getPlaceholder();

if(bB!=null&&bC==j&&!this.hasState(o)&&!this.hasState(n)){if(this.hasState(l)){this._syncPlaceholder();
}else{this.addState(l);
}}},_removePlaceholder:function(){if(this.hasState(l)){this.__P().setStyle(W,D);
this.removeState(l);
}},_syncPlaceholder:function(){if(this.hasState(l)){this.__P().setStyle(W,m);
}},__P:function(){if(this.__K==null){this.__K=new qx.html.Label();
this.__K.setStyles({"visibility":"hidden","zIndex":6,"position":"absolute"});
this.getContainerElement().add(this.__K);
}return this.__K;
},_onChangeLocale:qx.core.Variant.select(h,{"on":function(e){var content=this.getPlaceholder();

if(content&&content.translate){this.setPlaceholder(content.translate());
}},"off":null}),_applyPlaceholder:function(bJ,bK){this.__P().setValue(bJ);

if(bJ!=null){this.addListener(X,this._removePlaceholder,this);
this.addListener(V,this._showPlaceholder,this);
this._showPlaceholder();
}else{this.removeListener(X,this._removePlaceholder,this);
this.removeListener(V,this._showPlaceholder,this);
this._removePlaceholder();
}},_applyTextAlign:function(bz,bA){this.getContentElement().setStyle(r,bz);
},_applyReadOnly:function(bL,bM){var bN=this.getContentElement();
bN.setAttribute(S,bL);

if(bL){this.addState(c);
this.setFocusable(false);
}else{this.removeState(c);
this.setFocusable(true);
}}},destruct:function(){this.__K=null;

if(qx.core.Variant.isSet(h,T)){qx.locale.Manager.getInstance().removeListener(U,this._onChangeLocale,this);
}}});
})();
(function(){var b="qx.ui.form.TextField",a="textfield";
qx.Class.define(b,{extend:qx.ui.form.AbstractField,properties:{appearance:{refine:true,init:a},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}}});
})();
(function(){var q="none",p="wrap",o="value",n="qx.client",m="textarea",l="off",k="on",j="qxSelectable",i="",h="webkit",d="input",g="qx.html.Input",f="select",c="disabled",b="read-only",e="userSelect";
qx.Class.define(g,{extend:qx.html.Element,construct:function(z,A,B){if(z===f||z===m){var C=z;
}else{C=d;
}qx.html.Element.call(this,C,A,B);
this.__c=z;
},members:{__c:null,__d:null,__e:null,_createDomElement:function(){return qx.bom.Input.create(this.__c);
},_applyProperty:function(name,x){qx.html.Element.prototype._applyProperty.call(this,name,x);
var y=this.getDomElement();

if(name===o){qx.bom.Input.setValue(y,x);
}else if(name===p){qx.bom.Input.setWrap(y,x);
}},setEnabled:qx.core.Variant.select(n,{"webkit":function(D){this.__e=D;

if(!D){this.setStyles({"userModify":b,"userSelect":q});
}else{this.setStyles({"userModify":null,"userSelect":this.__d?null:q});
}},"default":function(a){this.setAttribute(c,a===false);
}}),setSelectable:qx.core.Variant.select(n,{"webkit":function(s){this.__d=s;
this.setAttribute(j,s?k:l);
if(qx.core.Variant.isSet(n,h)){var t=this.__e?s?null:q:q;
this.setStyle(e,t);
}},"default":function(r){this.setAttribute(j,r?k:l);
}}),setValue:function(u){var v=this.getDomElement();

if(v){if(v.value!=u){qx.bom.Input.setValue(v,u);
}}else{this._setProperty(o,u);
}return this;
},getValue:function(){var E=this.getDomElement();

if(E){return qx.bom.Input.getValue(E);
}return this._getProperty(o)||i;
},setWrap:function(w){if(this.__c===m){this._setProperty(p,w);
}else{throw new Error("Text wrapping is only support by textareas!");
}return this;
},getWrap:function(){if(this.__c===m){return this._getProperty(p);
}else{throw new Error("Text wrapping is only support by textareas!");
}}}});
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
(function(){var k="",j="select",h="qx.client",g="soft",f="off",e="text",d="Unsupported input type.",c="nowrap",b="radio",a="textarea",y="auto",x="qx.debug",w="input",v="option",u="value",t="number",s="qx.bom.Input",r="normal",q="mshtml",p="wrap",n="checkbox",o="select-one",m="on";
qx.Class.define(s,{statics:{__f:{text:1,textarea:1,select:1,checkbox:1,radio:1,password:1,hidden:1,submit:1,image:1,file:1,search:1,reset:1,button:1},create:function(M,N,O){if(qx.core.Variant.isSet(x,m)){qx.core.Assert.assertKeyInMap(M,this.__f,d);
}var N=N?qx.lang.Object.clone(N):{};
var P;

if(M===a||M===j){P=M;
}else{P=w;
N.type=M;
}return qx.bom.Element.create(P,N,O);
},setValue:function(D,E){var J=D.nodeName.toLowerCase();
var G=D.type;
var Array=qx.lang.Array;
var K=qx.lang.Type;

if(typeof E===t){E+=k;
}
if((G===n||G===b)){if(K.isArray(E)){D.checked=Array.contains(E,D.value);
}else{D.checked=D.value==E;
}}else if(J===j){var F=K.isArray(E);
var L=D.options;
var H,I;

for(var i=0,l=L.length;i<l;i++){H=L[i];
I=H.getAttribute(u);

if(I==null){I=H.text;
}H.selected=F?Array.contains(E,I):E==I;
}
if(F&&E.length==0){D.selectedIndex=-1;
}}else if(G===e&&qx.core.Variant.isSet(h,q)){D.$$inValueSet=true;
D.value=E;
D.$$inValueSet=null;
}else{D.value=E;
}},getValue:function(U){var bb=U.nodeName.toLowerCase();

if(bb===v){return (U.attributes.value||{}).specified?U.value:U.text;
}
if(bb===j){var V=U.selectedIndex;
if(V<0){return null;
}var bc=[];
var be=U.options;
var bd=U.type==o;
var ba=qx.bom.Input;
var Y;
for(var i=bd?V:0,X=bd?V+1:be.length;i<X;i++){var W=be[i];

if(W.selected){Y=ba.getValue(W);
if(bd){return Y;
}bc.push(Y);
}}return bc;
}else{return (U.value||k).replace(/\r/g,k);
}},setWrap:qx.core.Variant.select(h,{"mshtml":function(S,T){S.wrap=T?g:f;
},"gecko|webkit":function(z,A){var C=A?g:f;
var B=A?k:y;
z.setAttribute(p,C);
z.style.overflow=B;
},"default":function(Q,R){Q.style.whiteSpace=R?r:c;
}})}});
})();
(function(){var b="qx.ui.core.ISingleSelection",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeSelection":a},members:{getSelection:function(){return true;
},setSelection:function(c){return arguments.length==1;
},resetSelection:function(){return true;
},isSelected:function(e){return arguments.length==1;
},isSelectionEmpty:function(){return true;
},getSelectables:function(d){return arguments.length==1;
}}});
})();
(function(){var f="qx.ui.core.MSingleSelectionHandling",d="changeSelection",c="changeSelected",b="__lN",a="qx.event.type.Data";
qx.Mixin.define(f,{events:{"changeSelection":a},members:{__lN:null,getSelection:function(){var l=this.__lO().getSelected();

if(l){return [l];
}else{return [];
}},setSelection:function(j){switch(j.length){case 0:this.resetSelection();
break;
case 1:this.__lO().setSelected(j[0]);
break;
default:throw new Error("Could only select one item, but the selection "+" array contains "+j.length+" items!");
}},resetSelection:function(){this.__lO().resetSelected();
},isSelected:function(n){return this.__lO().isSelected(n);
},isSelectionEmpty:function(){return this.__lO().isSelectionEmpty();
},getSelectables:function(m){return this.__lO().getSelectables(m);
},_onChangeSelected:function(e){var i=e.getData();
var h=e.getOldData();
i==null?i=[]:i=[i];
h==null?h=[]:h=[h];
this.fireDataEvent(d,i,h);
},__lO:function(){if(this.__lN==null){var g=this;
this.__lN=new qx.ui.core.SingleSelectionManager({getItems:function(){return g._getItems();
},isItemSelectable:function(k){if(g._isItemSelectable){return g._isItemSelectable(k);
}else{return k.isVisible();
}}});
this.__lN.addListener(c,this._onChangeSelected,this);
}this.__lN.setAllowEmptySelection(this._isAllowEmptySelection());
return this.__lN;
}},destruct:function(){this._disposeObjects(b);
}});
})();
(function(){var d="_applyDynamic",c="changeSelection",b="Boolean",a="qx.ui.container.Stack";
qx.Class.define(a,{extend:qx.ui.core.Widget,implement:qx.ui.core.ISingleSelection,include:qx.ui.core.MSingleSelectionHandling,construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.Grow);
this.addListener(c,this.__mH,this);
},properties:{dynamic:{check:b,init:false,apply:d}},members:{_applyDynamic:function(f){var h=this._getChildren();
var g=this.getSelection()[0];
var j;

for(var i=0,l=h.length;i<l;i++){j=h[i];

if(j!=g){if(f){h[i].exclude();
}else{h[i].hide();
}}}},_getItems:function(){return this.getChildren();
},_isAllowEmptySelection:function(){return true;
},_isItemSelectable:function(A){return true;
},__mH:function(e){var y=e.getOldData()[0];
var z=e.getData()[0];

if(y){if(this.isDynamic()){y.exclude();
}else{y.hide();
}}
if(z){z.show();
}},add:function(w){this._add(w);
var x=this.getSelection()[0];

if(!x){this.setSelection([w]);
}else if(x!==w){if(this.isDynamic()){w.exclude();
}else{w.hide();
}}},remove:function(u){this._remove(u);

if(this.getSelection()[0]===u){var v=this._getChildren()[0];

if(v){this.setSelection([v]);
}else{this.resetSelection();
}}},indexOf:function(p){return this._indexOf(p);
},getChildren:function(){return this._getChildren();
},previous:function(){var n=this.getSelection()[0];
var k=this._indexOf(n)-1;
var o=this._getChildren();

if(k<0){k=o.length-1;
}var m=o[k];
this.setSelection([m]);
},next:function(){var r=this.getSelection()[0];
var q=this._indexOf(r)+1;
var s=this._getChildren();
var t=s[q]||s[0];
this.setSelection([t]);
}}});
})();
(function(){var k="Boolean",j="qx.ui.core.SingleSelectionManager",h="qx.debug",g="Invalid selectionProvider!",f="__lK",e="changeSelected",d="on",c="__lI",b="__lJ",a="qx.event.type.Data";
qx.Class.define(j,{extend:qx.core.Object,construct:function(o){qx.core.Object.call(this);

if(qx.core.Variant.isSet(h,d)){qx.core.Assert.assertInterface(o,qx.ui.core.ISingleSelectionProvider,g);
}this.__lI=o;
},events:{"changeSelected":a},properties:{allowEmptySelection:{check:k,init:true,apply:f}},members:{__lJ:null,__lI:null,getSelected:function(){return this.__lJ;
},setSelected:function(y){if(!this.__lM(y)){throw new Error("Could not select "+y+", because it is not a child element!");
}this.__lL(y);
},resetSelected:function(){this.__lL(null);
},isSelected:function(l){if(!this.__lM(l)){throw new Error("Could not check if "+l+" is selected,"+" because it is not a child element!");
}return this.__lJ===l;
},isSelectionEmpty:function(){return this.__lJ==null;
},getSelectables:function(p){var q=this.__lI.getItems();
var r=[];

for(var i=0;i<q.length;i++){if(this.__lI.isItemSelectable(q[i])){r.push(q[i]);
}}if(!p){for(var i=r.length-1;i>=0;i--){if(!r[i].getEnabled()){r.splice(i,1);
}}}return r;
},__lK:function(s,t){if(!s){this.__lL(this.__lJ);
}},__lL:function(u){var x=this.__lJ;
var w=u;

if(w!=null&&x===w){return;
}
if(!this.isAllowEmptySelection()&&w==null){var v=this.getSelectables(true)[0];

if(v){w=v;
}}this.__lJ=w;
this.fireDataEvent(e,w,x);
},__lM:function(m){var n=this.__lI.getItems();

for(var i=0;i<n.length;i++){if(n[i]===m){return true;
}}return false;
}},destruct:function(){if(this.__lI.toHashCode){this._disposeObjects(c);
}else{this.__lI=null;
}this._disposeObjects(b);
}});
})();
(function(){var a="qx.ui.core.ISingleSelectionProvider";
qx.Interface.define(a,{members:{getItems:function(){},isItemSelectable:function(b){}}});
})();
(function(){var m="",l='#',k="String",j="request",i="mshtml",h="changeTitle",g="abstract",f="_applyState",e="qx.client",d="changeState",a="qx.bom.History",c="_applyTitle",b="qx.event.type.Data";
qx.Class.define(a,{extend:qx.core.Object,type:g,construct:function(){qx.core.Object.call(this);
this._baseUrl=window.location.href.split(l)[0]+l;
this.__uk={};
this._setInitialState();
},events:{"request":b},statics:{SUPPORTS_HASH_CHANGE_EVENT:(qx.bom.client.Engine.MSHTML&&document.documentMode>=8)||(!qx.bom.client.Engine.MSHTML&&document.documentMode&&"onhashchange" in window),getInstance:function(){if(!this.$$instance){if(this.SUPPORTS_HASH_CHANGE_EVENT){this.$$instance=new qx.bom.NativeHistory();
}else if(qx.core.Variant.isSet(e,i)){this.$$instance=new qx.bom.IframeHistory();
}else{this.$$instance=new qx.bom.NativeHistory();
}}return this.$$instance;
}},properties:{title:{check:k,event:h,nullable:true,apply:c},state:{check:k,event:d,nullable:true,apply:f}},members:{__uk:null,_applyState:function(n,o){this._writeState(n);
},_setInitialState:function(){this.setState(this._readState());
},_encode:function(q){if(qx.lang.Type.isString(q)){return encodeURIComponent(q);
}return m;
},_decode:function(t){if(qx.lang.Type.isString(t)){return decodeURIComponent(t);
}return m;
},_applyTitle:function(v){if(v!=null){document.title=v||m;
}},addToHistory:function(r,s){if(!qx.lang.Type.isString(r)){r=r+m;
}
if(qx.lang.Type.isString(s)){this.setTitle(s);
this.__uk[r]=s;
}
if(this.getState()!==r){this._writeState(r);
}},navigateBack:function(){qx.event.Timer.once(function(){history.back();
},0);
},navigateForward:function(){qx.event.Timer.once(function(){history.forward();
},0);
},_onHistoryLoad:function(u){this.setState(u);
this.fireDataEvent(j,u);

if(this.__uk[u]!=null){this.setTitle(this.__uk[u]);
}},_readState:function(){throw new Error("Abstract method call");
},_writeState:function(){throw new Error("Abstract method call");
},_setHash:function(w){var x=this._baseUrl+(w||m);
var y=window.location;

if(x!=y.href){y.href=x;
}},_getHash:function(){var p=/#(.*)$/.exec(window.location.href);
return p&&p[1]?p[1]:m;
}},destruct:function(){this.__uk=null;
}});
})();
(function(){var d="hashchange",c="interval",b="qx.bom.NativeHistory",a="qx.client";
qx.Class.define(b,{extend:qx.bom.History,construct:function(){qx.bom.History.call(this);
this.__um();
},members:{__ul:null,__um:function(){if(qx.bom.History.SUPPORTS_HASH_CHANGE_EVENT){this.__ul=qx.lang.Function.bind(this.__uo,this);
qx.bom.Event.addNativeListener(window,d,this.__ul);
}else{qx.event.Idle.getInstance().addListener(c,this.__uo,this);
}},__un:function(){if(qx.bom.History.SUPPORTS_HASH_CHANGE_EVENT){qx.bom.Event.removeNativeListener(window,d,this.__ul);
}else{qx.event.Idle.getInstance().removeListener(c,this.__uo,this);
}},__uo:function(){var f=this._readState();

if(qx.lang.Type.isString(f)&&f!=this.getState()){this._onHistoryLoad(f);
}},_readState:function(){return this._decode(this._getHash());
},_writeState:qx.core.Variant.select(a,{"opera":function(g){qx.event.Timer.once(function(){this._setHash(this._encode(g));
},this,0);
},"default":function(e){this._setHash(this._encode(e));
}})},destruct:function(){this.__un();
}});
})();
(function(){var o="interval",n="-1000px",m="mshtml",l="",k="qx.bom.IframeHistory",j="qx/static/blank.html",i="state",h='<html><body><div id="state">',g='</div></body></html>',f="hidden",b="qx.client",d="undefined",c="absolute";
if(qx.core.Variant.isSet(b,m)){qx.Class.define(k,{extend:qx.bom.History,construct:function(){qx.bom.History.call(this);
this.__us();
},members:{__up:null,__uq:false,__ur:null,_setInitialState:function(){qx.bom.History.prototype._setInitialState.call(this);
this.__ur=this._getHash();
},_setHash:function(a){qx.bom.History.prototype._setHash.call(this,a);
this.__ur=this._encode(a);
},_readState:function(){if(!this.__uq){return this._decode(this._getHash());
}var p=this.__up.contentWindow.document;
var q=p.getElementById(i);
return q?this._decode(q.innerText):l;
},_writeState:function(z){var z=this._encode(z);
this._setHash(z);
this.__ur=z;

try{var A=this.__up.contentWindow.document;
A.open();
A.write(h+z+g);
A.close();
}catch(C){}},__us:function(){this.__uw(function(){qx.event.Idle.getInstance().addListener(o,this.__ut,this);
});
},__ut:function(e){var s=null;
var r=this._getHash();

if(!this.__uv(r)){s=this.__uu(r);
}else{s=this._readState();
}
if(qx.lang.Type.isString(s)&&s!=this.getState()){this._onHistoryLoad(s);
}},__uu:function(y){y=this._decode(y);
this._writeState(y);
return y;
},__uv:function(x){return qx.lang.Type.isString(x)&&x==this.__ur;
},__uw:function(t){this.__up=this.__ux();
document.body.appendChild(this.__up);
this.__uy(function(){this._writeState(this.getState());

if(t){t.call(this);
}},this);
},__ux:function(){var B=qx.bom.Iframe.create({src:qx.util.ResourceManager.getInstance().toUri(j)});
B.style.visibility=f;
B.style.position=c;
B.style.left=n;
B.style.top=n;
return B;
},__uy:function(u,v,w){if(typeof w===d){w=0;
}
if(!this.__up.contentWindow||!this.__up.contentWindow.document){if(w>20){throw new Error("can't initialize iframe");
}qx.event.Timer.once(function(){this.__uy(u,v,++w);
},this,10);
return;
}this.__uq=true;
u.call(v||window);
}},destruct:function(){this.__up=null;
qx.event.Idle.getInstance().addListener(o,this.__ut,this);
}});
}})();
(function(){var c="qx.event.handler.Iframe",b="load",a="iframe";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{load:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false,onevent:qx.event.GlobalError.observeMethod(function(d){qx.event.Registration.fireEvent(d,b);
})},members:{canHandleEvent:function(e,f){return e.tagName.toLowerCase()===a;
},registerEvent:function(j,k,l){},unregisterEvent:function(g,h,i){}},defer:function(m){qx.event.Registration.addHandler(m);
}});
})();
(function(){var e="qx.client",d="webkit",c="body",b="iframe",a="qx.bom.Iframe";
qx.Class.define(a,{statics:{DEFAULT_ATTRIBUTES:{onload:"qx.event.handler.Iframe.onevent(this)",frameBorder:0,frameSpacing:0,marginWidth:0,marginHeight:0,hspace:0,vspace:0,border:0,allowTransparency:true},create:function(t,u){var t=t?qx.lang.Object.clone(t):{};
var v=qx.bom.Iframe.DEFAULT_ATTRIBUTES;

for(var w in v){if(t[w]==null){t[w]=v[w];
}}return qx.bom.Element.create(b,t,u);
},getWindow:qx.core.Variant.select(e,{"mshtml|gecko":function(D){try{return D.contentWindow;
}catch(C){return null;
}},"default":function(n){try{var o=this.getDocument(n);
return o?o.defaultView:null;
}catch(i){return null;
}}}),getDocument:qx.core.Variant.select(e,{"mshtml":function(A){try{var B=this.getWindow(A);
return B?B.document:null;
}catch(l){return null;
}},"default":function(p){try{return p.contentDocument;
}catch(q){return null;
}}}),getBody:function(j){try{var k=this.getDocument(j);
return k?k.getElementsByTagName(c)[0]:null;
}catch(m){return null;
}},setSource:function(f,g){try{if(this.getWindow(f)&&qx.dom.Hierarchy.isRendered(f)){try{if(qx.core.Variant.isSet(e,d)&&qx.bom.client.Platform.MAC){var h=this.getContentWindow();

if(h){h.stop();
}}this.getWindow(f).location.replace(g);
}catch(x){f.src=g;
}}else{f.src=g;
}}catch(r){qx.log.Logger.warn("Iframe source could not be set!");
}},queryCurrentUrl:function(y){var z=this.getDocument(y);

try{if(z&&z.location){return z.location.href;
}}catch(s){}return null;
}}});
})();
(function(){var p="String",o="execute",n="qx.ui.menu.Menu",m="_shortcut",l="changeEnabled",k="changeToolTipText",j="Boolean",i="qx.ui.core.Command",h="changeLabel",g="changeMenu",d="changeIcon",f="changeValue",e="_applyShortcut",c="_applyEnabled",b="qx.event.type.Data";
qx.Class.define(i,{extend:qx.core.Object,construct:function(a){qx.core.Object.call(this);
this._shortcut=new qx.bom.Shortcut(a);
this._shortcut.addListener(o,this.execute,this);
},events:{"execute":b},properties:{enabled:{init:true,check:j,event:l,apply:c},shortcut:{check:p,apply:e,nullable:true},label:{check:p,nullable:true,event:h},icon:{check:p,nullable:true,event:d},toolTipText:{check:p,nullable:true,event:k},value:{nullable:true,event:f},menu:{check:n,nullable:true,event:g}},members:{_shortcut:null,_applyEnabled:function(s){this._shortcut.setEnabled(s);
},_applyShortcut:function(r){this._shortcut.setShortcut(r);
},execute:function(q){this.fireDataEvent(o,q);
},toString:function(){return this._shortcut.toString();
}},destruct:function(){this._disposeObjects(m);
}});
})();
(function(){var p="Unidentified",o="Boolean",n="+",m="short",l="keydown",k="",j="Control",h="keypress",g="-",f="PageUp",V="Escape",U="qx.event.type.Data",T="_applyShortcut",S="PrintScreen",R="NumLock",Q="5",P="8",O="execute",N="Meta",M="0",w="2",x="Shift",u="You can only specify one non modifier key!",v="3",s="/",t="Delete",q="String",r="changeEnabled",y="*",z="qx.bom.Shortcut",E="6",D="4",G="1",F="Alt",I="Not a valid key name for a shortcut: ",H="PageDown",B="Whitespaces are not allowed within shortcuts",L="_applyEnabled",K="7",J="a",A="z",C="9";
qx.Class.define(z,{extend:qx.core.Object,construct:function(X){qx.core.Object.call(this);
this.__pc={};
this.__pd=null;

if(X!=null){this.setShortcut(X);
}this.initEnabled();
},events:{"execute":U},properties:{enabled:{init:true,check:o,event:r,apply:L},shortcut:{check:q,apply:T,nullable:true},autoRepeat:{check:o,init:false}},members:{__pc:k,__pd:k,execute:function(bk){this.fireDataEvent(O,bk);
},__pe:function(event){if(this.getEnabled()&&this.__pg(event)){if(!this.isAutoRepeat()){this.execute(event.getTarget());
}event.stop();
}},__pf:function(event){if(this.getEnabled()&&this.__pg(event)){if(this.isAutoRepeat()){this.execute(event.getTarget());
}event.stop();
}},_applyEnabled:function(bi,bj){if(bi){qx.event.Registration.addListener(document.documentElement,l,this.__pe,this);
qx.event.Registration.addListener(document.documentElement,h,this.__pf,this);
}else{qx.event.Registration.removeListener(document.documentElement,l,this.__pe,this);
qx.event.Registration.removeListener(document.documentElement,h,this.__pf,this);
}},_applyShortcut:function(Y,ba){if(Y){if(Y.search(/[\s]+/)!=-1){var bd=B;
this.error(bd);
throw new Error(bd);
}this.__pc={"Control":false,"Shift":false,"Meta":false,"Alt":false};
this.__pd=null;
var bb;
var a=[];

while(Y.length>0&&bb!=-1){bb=Y.search(/[-+]+/);
a.push((Y.length==1||bb==-1)?Y:Y.substring(0,bb));
Y=Y.substring(bb+1);
}var bc=a.length;

for(var i=0;i<bc;i++){var be=this.__pi(a[i]);

switch(be){case j:case x:case N:case F:this.__pc[be]=true;
break;
case p:var bd=I+a[i];
this.error(bd);
throw bd;
default:if(this.__pd){var bd=u;
this.error(bd);
throw bd;
}this.__pd=be;
}}}return true;
},__pg:function(e){var W=this.__pd;

if(!W){return ;
}if((!this.__pc.Shift&&e.isShiftPressed())||(this.__pc.Shift&&!e.isShiftPressed())||(!this.__pc.Control&&e.isCtrlPressed())||(this.__pc.Control&&!e.isCtrlPressed())||(!this.__pc.Meta&&e.isMetaPressed())||(this.__pc.Meta&&!e.isMetaPressed())||(!this.__pc.Alt&&e.isAltPressed())||(this.__pc.Alt&&!e.isAltPressed())){return false;
}
if(W==e.getKeyIdentifier()){return true;
}return false;
},__ph:{esc:V,ctrl:j,print:S,del:t,pageup:f,pagedown:H,numlock:R,numpad_0:M,numpad_1:G,numpad_2:w,numpad_3:v,numpad_4:D,numpad_5:Q,numpad_6:E,numpad_7:K,numpad_8:P,numpad_9:C,numpad_divide:s,numpad_multiply:y,numpad_minus:g,numpad_plus:n},__pi:function(b){var c=qx.event.handler.Keyboard;
var d=p;

if(c.isValidKeyIdentifier(b)){return b;
}
if(b.length==1&&b>=J&&b<=A){return b.toUpperCase();
}b=b.toLowerCase();
var d=this.__ph[b]||qx.lang.String.firstUp(b);

if(c.isValidKeyIdentifier(d)){return d;
}else{return p;
}},toString:function(){var bh=this.__pd;
var bg=[];

for(var bf in this.__pc){if(this.__pc[bf]){bg.push(qx.locale.Key.getKeyName(m,bf));
}}
if(bh){bg.push(qx.locale.Key.getKeyName(m,bh));
}return bg.join(n);
}},destruct:function(){this.setEnabled(false);
this.__pc=this.__pd=null;
}});
})();
(function(){var bA="Control",bz="Left",by="Meta",bx="Pause",bw="End",bv="Down",bu="Ctrl",bt="Home",bs="Apps",br="Win",bg="Right",bf="Backspace",be="Space",bd="Up",bc="Shift",bb="Enter",ba="Scroll",Y="Alt",X="Escape",W="key_full_Meta",bH="PrintScreen",bI="NumLock",bF="key_short_Alt",bG="key_short_Control_Mac",bD="key_short_Insert",bE="Del",bB="key_full_Enter",bC="key_full_Control",bJ="qx.locale.Key",bK="Tabulator",bk="key_full_Space",bj="key_short_Meta",bm="key_short_PageUp",bl="key_short_Pause",bo="key_full_Down",bn="key_short_Apps",bq="key_short_Win",bp="key_full_Right",bi="key_short_Up",bh="key_full_PageDown",a="key_full_Alt",b="PgDn",c="Esc",d="key_full_Insert",e="key_short_Space",f="key_short_Backspace",g="key_short_Home",h="full",i="key_short_Down",j="PgUp",bO="_Mac",bN="key_short_CapsLock",bM="PageUp",bL="key_full_Up",bS="key_full_Home",bR="key_full_Backspace",bQ="PageDown",bP="CapsLock",bU="Ins",bT="key_short_PrintScreen",G="Tab",H="key_full_Apps",E="key_short_Tab",F="key_short_End",K="_",L="Caps",I="key_short_NumLock",J="Num",C="key_full_Scroll",D="key_short_Left",r="key_short_Scroll",q="on",t="key_full_Control_Mac",s="key_",n="key_full_Pause",m="key_short_Right",p="key_full_PrintScreen",o="key_full_Win",l="short",k="key_short_Shift",Q="key_short_PageDown",R="key_short_Enter",S="key_short_Control",T="qx.debug",M="Insert",N="key_short_Escape",O="key_full_Tab",P="Print",U="Delete",V="key_full_CapsLock",B="key_full_Escape",A="key_short_Delete",z="key_full_PageUp",y="key_full_Shift",x="key_full_NumLock",w="key_full_Delete",v="key_full_End",u="key_full_Left";
qx.Class.define(bJ,{statics:{getKeyName:function(bY,ca,cb){if(qx.core.Variant.isSet(T,q)){qx.core.Assert.assertInArray(bY,[l,h]);
}var cd=s+bY+K+ca;
if(qx.bom.client.Platform.MAC&&ca==bA){cd+=bO;
}var cc=qx.locale.Manager.getInstance().translate(cd,[],cb);

if(cc==cd){return qx.locale.Key._keyNames[cd]||ca;
}else{return cc;
}}},defer:function(bV){var bX={};
var bW=qx.locale.Manager;
bX[bW.marktr(f)]=bf;
bX[bW.marktr(E)]=G;
bX[bW.marktr(e)]=be;
bX[bW.marktr(R)]=bb;
bX[bW.marktr(k)]=bc;
bX[bW.marktr(S)]=bu;
bX[bW.marktr(bG)]=bu;
bX[bW.marktr(bF)]=Y;
bX[bW.marktr(bN)]=L;
bX[bW.marktr(bj)]=by;
bX[bW.marktr(N)]=c;
bX[bW.marktr(D)]=bz;
bX[bW.marktr(bi)]=bd;
bX[bW.marktr(m)]=bg;
bX[bW.marktr(i)]=bv;
bX[bW.marktr(bm)]=j;
bX[bW.marktr(Q)]=b;
bX[bW.marktr(F)]=bw;
bX[bW.marktr(g)]=bt;
bX[bW.marktr(bD)]=bU;
bX[bW.marktr(A)]=bE;
bX[bW.marktr(I)]=J;
bX[bW.marktr(bT)]=P;
bX[bW.marktr(r)]=ba;
bX[bW.marktr(bl)]=bx;
bX[bW.marktr(bq)]=br;
bX[bW.marktr(bn)]=bs;
bX[bW.marktr(bR)]=bf;
bX[bW.marktr(O)]=bK;
bX[bW.marktr(bk)]=be;
bX[bW.marktr(bB)]=bb;
bX[bW.marktr(y)]=bc;
bX[bW.marktr(bC)]=bA;
bX[bW.marktr(t)]=bA;
bX[bW.marktr(a)]=Y;
bX[bW.marktr(V)]=bP;
bX[bW.marktr(W)]=by;
bX[bW.marktr(B)]=X;
bX[bW.marktr(u)]=bz;
bX[bW.marktr(bL)]=bd;
bX[bW.marktr(bp)]=bg;
bX[bW.marktr(bo)]=bv;
bX[bW.marktr(z)]=bM;
bX[bW.marktr(bh)]=bQ;
bX[bW.marktr(v)]=bw;
bX[bW.marktr(bS)]=bt;
bX[bW.marktr(d)]=M;
bX[bW.marktr(w)]=U;
bX[bW.marktr(x)]=bI;
bX[bW.marktr(p)]=bH;
bX[bW.marktr(C)]=ba;
bX[bW.marktr(n)]=bx;
bX[bW.marktr(o)]=br;
bX[bW.marktr(H)]=bs;
bV._keyNames=bX;
}});
})();
(function(){var k="both",j="qx.ui.menu.Menu",h="_applySpacing",g="icon",f="label",e="changeShow",d="Integer",c="qx.ui.toolbar.ToolBar",b="toolbar",a="changeOpenMenu";
qx.Class.define(c,{extend:qx.ui.core.Widget,include:qx.ui.core.MChildrenHandling,construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.HBox());
},properties:{appearance:{refine:true,init:b},openMenu:{check:j,event:a,nullable:true},show:{init:k,check:[k,f,g],inheritable:true,event:e},spacing:{nullable:true,check:d,themeable:true,apply:h}},members:{__qx:false,_setAllowMenuOpenHover:function(p){this.__qx=p;
},_isAllowMenuOpenHover:function(){return this.__qx;
},_applySpacing:function(r,s){var t=this._getLayout();
r==null?t.resetSpacing():t.setSpacing(r);
},addSpacer:function(){var q=new qx.ui.core.Spacer;
this._add(q,{flex:1});
return q;
},addSeparator:function(){this.add(new qx.ui.toolbar.Separator);
},getMenuButtons:function(){var n=this.getChildren();
var m=[];
var o;

for(var i=0,l=n.length;i<l;i++){o=n[i];

if(o instanceof qx.ui.menubar.Button){m.push(o);
}else if(o instanceof qx.ui.toolbar.Part){m.push.apply(m,o.getMenuButtons());
}}return m;
}}});
})();
(function(){var a="qx.ui.core.Spacer";
qx.Class.define(a,{extend:qx.ui.core.LayoutItem,construct:function(b,c){qx.ui.core.LayoutItem.call(this);
this.setWidth(b!=null?b:0);
this.setHeight(c!=null?c:0);
},members:{checkAppearanceNeeds:function(){},addChildrenToQueue:function(d){},destroy:function(){if(this.$$disposed){return;
}var parent=this.$$parent;

if(parent){parent._remove(this);
}qx.ui.core.queue.Dispose.add(this);
}}});
})();
(function(){var b="toolbar-separator",a="qx.ui.toolbar.Separator";
qx.Class.define(a,{extend:qx.ui.core.Widget,properties:{appearance:{refine:true,init:b},anonymous:{refine:true,init:true},width:{refine:true,init:0},height:{refine:true,init:0}}});
})();
(function(){var n="execute",m="toolTipText",l="icon",k="label",j="qx.ui.core.MExecutable",h="value",g="qx.event.type.Event",f="_applyCommand",d="enabled",c="menu",a="changeCommand",b="qx.ui.core.Command";
qx.Mixin.define(j,{events:{"execute":g},properties:{command:{check:b,apply:f,event:a,nullable:true}},members:{__kg:null,__kh:false,__ki:null,_bindableProperties:[d,k,l,m,h,c],execute:function(){var u=this.getCommand();

if(u){if(this.__kh){this.__kh=false;
}else{this.__kh=true;
u.execute(this);
}}this.fireEvent(n);
},__kj:function(e){if(this.__kh){this.__kh=false;
return;
}this.__kh=true;
this.execute();
},_applyCommand:function(o,p){if(p!=null){p.removeListenerById(this.__ki);
}
if(o!=null){this.__ki=o.addListener(n,this.__kj,this);
}var s=this.__kg;

if(s==null){this.__kg=s={};
}
for(var i=0;i<this._bindableProperties.length;i++){var r=this._bindableProperties[i];
if(p!=null&&s[r]!=null){p.removeBinding(s[r]);
s[r]=null;
}if(o!=null&&qx.Class.hasProperty(this.constructor,r)){var q=o.get(r);

if(q==null){var t=this.get(r);
}s[r]=o.bind(r,this,r);
if(t){this.set(r,t);
}}}}},destruct:function(){this.__kg=null;
}});
})();
(function(){var b="qx.ui.form.IExecutable",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"execute":a},members:{setCommand:function(c){return arguments.length==1;
},getCommand:function(){},execute:function(){}}});
})();
(function(){var o="pressed",n="abandoned",m="hovered",l="Enter",k="Space",j="dblclick",i="qx.ui.form.Button",h="mouseup",g="mousedown",f="mouseover",b="mouseout",d="keydown",c="button",a="keyup";
qx.Class.define(i,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],construct:function(p,q,r){qx.ui.basic.Atom.call(this,p,q);

if(r!=null){this.setCommand(r);
}this.addListener(f,this._onMouseOver);
this.addListener(b,this._onMouseOut);
this.addListener(g,this._onMouseDown);
this.addListener(h,this._onMouseUp);
this.addListener(d,this._onKeyDown);
this.addListener(a,this._onKeyUp);
this.addListener(j,this._onStopEvent);
},properties:{appearance:{refine:true,init:c},focusable:{refine:true,init:true}},members:{_forwardStates:{focused:true,hovered:true,pressed:true,disabled:true},press:function(){if(this.hasState(n)){return;
}this.addState(o);
},release:function(){if(this.hasState(o)){this.removeState(o);
}},reset:function(){this.removeState(o);
this.removeState(n);
this.removeState(m);
},_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}
if(this.hasState(n)){this.removeState(n);
this.addState(o);
}this.addState(m);
},_onMouseOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.removeState(m);

if(this.hasState(o)){this.removeState(o);
this.addState(n);
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}e.stopPropagation();
this.capture();
this.removeState(n);
this.addState(o);
},_onMouseUp:function(e){this.releaseCapture();
var s=this.hasState(o);
var t=this.hasState(n);

if(s){this.removeState(o);
}
if(t){this.removeState(n);
}else{this.addState(m);

if(s){this.execute();
}}e.stopPropagation();
},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case l:case k:this.removeState(n);
this.addState(o);
e.stopPropagation();
}},_onKeyUp:function(e){switch(e.getKeyIdentifier()){case l:case k:if(this.hasState(o)){this.removeState(n);
this.removeState(o);
this.execute();
e.stopPropagation();
}}}}});
})();
(function(){var l="pressed",k="hovered",j="changeVisibility",i="qx.ui.menu.Menu",h="submenu",g="Enter",f="contextmenu",d="changeMenu",c="qx.ui.form.MenuButton",b="abandoned",a="_applyMenu";
qx.Class.define(c,{extend:qx.ui.form.Button,construct:function(m,n,o){qx.ui.form.Button.call(this,m,n);
if(o!=null){this.setMenu(o);
}},properties:{menu:{check:i,nullable:true,apply:a,event:d}},members:{_applyMenu:function(r,s){if(s){s.removeListener(j,this._onMenuChange,this);
s.resetOpener();
}
if(r){r.addListener(j,this._onMenuChange,this);
r.setOpener(this);
r.removeState(h);
r.removeState(f);
}},open:function(u){var v=this.getMenu();

if(v){qx.ui.menu.Manager.getInstance().hideAll();
v.setOpener(this);
v.open();
if(u){var w=v.getSelectables()[0];

if(w){v.setSelectedButton(w);
}}}},_onMenuChange:function(e){var q=this.getMenu();

if(q.isVisible()){this.addState(l);
}else{this.removeState(l);
}},_onMouseDown:function(e){var p=this.getMenu();

if(p){if(!p.isVisible()){this.open();
}else{p.exclude();
}e.stopPropagation();
}},_onMouseUp:function(e){qx.ui.form.Button.prototype._onMouseUp.call(this,e);
e.stopPropagation();
},_onMouseOver:function(e){this.addState(k);
},_onMouseOut:function(e){this.removeState(k);
},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case g:this.removeState(b);
this.addState(l);
var t=this.getMenu();

if(t){if(!t.isVisible()){this.open();
}else{t.exclude();
}}e.stopPropagation();
}},_onKeyUp:function(e){}},destruct:function(){if(this.getMenu()){if(!qx.core.ObjectRegistry.inShutDown){this.getMenu().destroy();
}}}});
})();
(function(){var i="pressed",h="hovered",g="inherit",f="qx.ui.menubar.Button",d="keydown",c="menubar-button",b="keyup";
qx.Class.define(f,{extend:qx.ui.form.MenuButton,construct:function(k,l,m){qx.ui.form.MenuButton.call(this,k,l,m);
this.removeListener(d,this._onKeyDown);
this.removeListener(b,this._onKeyUp);
},properties:{appearance:{refine:true,init:c},show:{refine:true,init:g},focusable:{refine:true,init:false}},members:{getMenuBar:function(){var parent=this;

while(parent){if(parent instanceof qx.ui.toolbar.ToolBar){return parent;
}parent=parent.getLayoutParent();
}return null;
},open:function(n){qx.ui.form.MenuButton.prototype.open.call(this,n);
var menubar=this.getMenuBar();
menubar._setAllowMenuOpenHover(true);
},_onMenuChange:function(e){var a=this.getMenu();
var menubar=this.getMenuBar();

if(a.isVisible()){this.addState(i);
if(menubar){menubar.setOpenMenu(a);
}}else{this.removeState(i);
if(menubar&&menubar.getOpenMenu()==a){menubar.resetOpenMenu();
menubar._setAllowMenuOpenHover(false);
}}},_onMouseUp:function(e){qx.ui.form.MenuButton.prototype._onMouseUp.call(this,e);
var j=this.getMenu();

if(j&&j.isVisible()&&!this.hasState(i)){this.addState(i);
}},_onMouseOver:function(e){this.addState(h);
if(this.getMenu()){var menubar=this.getMenuBar();

if(menubar._isAllowMenuOpenHover()){qx.ui.menu.Manager.getInstance().hideAll();
menubar._setAllowMenuOpenHover(true);
if(this.isEnabled()){this.open();
}}}}}});
})();
(function(){var y="keypress",x="qx.debug",w="interval",v="keydown",u="on",t="mousedown",s="keyup",r="blur",q="Enter",p="__no",h="__nn",o="__nm",l="Up",g="Escape",f="qx.ui.menu.Manager",k="Left",j="Down",m="Right",d="singleton",n="Space";
qx.Class.define(f,{type:d,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__nm=[];
var bn=document.body;
var bo=qx.event.Registration;
bo.addListener(window.document.documentElement,t,this._onMouseDown,this,true);
bo.addListener(bn,v,this._onKeyUpDown,this,true);
bo.addListener(bn,s,this._onKeyUpDown,this,true);
bo.addListener(bn,y,this._onKeyPress,this,true);
qx.bom.Element.addListener(window,r,this.hideAll,this);
this.__nn=new qx.event.Timer;
this.__nn.addListener(w,this._onOpenInterval,this);
this.__no=new qx.event.Timer;
this.__no.addListener(w,this._onCloseInterval,this);
},members:{__np:null,__nq:null,__nn:null,__no:null,__nm:null,_getChild:function(z,A,B,C){var D=z.getChildren();
var length=D.length;
var E;

for(var i=A;i<length&&i>=0;i+=B){E=D[i];

if(E.isEnabled()&&!E.isAnonymous()){return E;
}}
if(C){i=i==length?0:length-1;

for(;i!=A;i+=B){E=D[i];

if(E.isEnabled()&&!E.isAnonymous()){return E;
}}}return null;
},_isInMenu:function(bz){while(bz){if(bz instanceof qx.ui.menu.Menu){return true;
}bz=bz.getLayoutParent();
}return false;
},_getMenuButton:function(bg){while(bg){if(bg instanceof qx.ui.menu.AbstractButton){return bg;
}bg=bg.getLayoutParent();
}return null;
},add:function(bD){if(qx.core.Variant.isSet(x,u)){if(!(bD instanceof qx.ui.menu.Menu)){throw new Error("Object is no menu: "+bD);
}}var bE=this.__nm;
bE.push(bD);
bD.setZIndex(1e6+bE.length);
},remove:function(b){if(qx.core.Variant.isSet(x,u)){if(!(b instanceof qx.ui.menu.Menu)){throw new Error("Object is no menu: "+b);
}}var c=this.__nm;

if(c){qx.lang.Array.remove(c,b);
}},hideAll:function(){var bm=this.__nm;

if(bm){for(var i=bm.length-1;i>=0;i--){bm[i].exclude();
}}},getActiveMenu:function(){var bs=this.__nm;
return bs.length>0?bs[bs.length-1]:null;
},scheduleOpen:function(bb){this.cancelClose(bb);
if(bb.isVisible()){if(this.__np){this.cancelOpen(this.__np);
}}else if(this.__np!=bb){this.__np=bb;
this.__nn.restartWith(bb.getOpenInterval());
}},scheduleClose:function(F){this.cancelOpen(F);
if(!F.isVisible()){if(this.__nq){this.cancelClose(this.__nq);
}}else if(this.__nq!=F){this.__nq=F;
this.__no.restartWith(F.getCloseInterval());
}},cancelOpen:function(bF){if(this.__np==bF){this.__nn.stop();
this.__np=null;
}},cancelClose:function(a){if(this.__nq==a){this.__no.stop();
this.__nq=null;
}},_onOpenInterval:function(e){this.__nn.stop();
this.__np.open();
this.__np=null;
},_onCloseInterval:function(e){this.__no.stop();
this.__nq.exclude();
this.__nq=null;
},_onMouseDown:function(e){var bt=e.getTarget();
bt=qx.ui.core.Widget.getWidgetByElement(bt);
if(bt==null){this.hideAll();
return;
}if(bt.getMenu&&bt.getMenu()&&bt.getMenu().isVisible()){return;
}if(this.__nm.length>0&&!this._isInMenu(bt)){this.hideAll();
}},__nr:{"Enter":1,"Space":1},__ns:{"Escape":1,"Up":1,"Down":1,"Left":1,"Right":1},_onKeyUpDown:function(e){var be=this.getActiveMenu();

if(!be){return;
}var bf=e.getKeyIdentifier();

if(this.__ns[bf]||(this.__nr[bf]&&be.getSelectedButton())){e.stopPropagation();
}},_onKeyPress:function(e){var bu=this.getActiveMenu();

if(!bu){return;
}var bv=e.getKeyIdentifier();
var bx=this.__ns[bv];
var bw=this.__nr[bv];

if(bx){switch(bv){case l:this._onKeyPressUp(bu);
break;
case j:this._onKeyPressDown(bu);
break;
case k:this._onKeyPressLeft(bu);
break;
case m:this._onKeyPressRight(bu);
break;
case g:this.hideAll();
break;
}e.stopPropagation();
e.preventDefault();
}else if(bw){var by=bu.getSelectedButton();

if(by){switch(bv){case q:this._onKeyPressEnter(bu,by,e);
break;
case n:this._onKeyPressSpace(bu,by,e);
break;
}e.stopPropagation();
e.preventDefault();
}}},_onKeyPressUp:function(bh){var bi=bh.getSelectedButton();
var bj=bh.getChildren();
var bl=bi?bh.indexOf(bi)-1:bj.length-1;
var bk=this._getChild(bh,bl,-1,true);
if(bk){bh.setSelectedButton(bk);
}else{bh.resetSelectedButton();
}},_onKeyPressDown:function(P){var Q=P.getSelectedButton();
var S=Q?P.indexOf(Q)+1:0;
var R=this._getChild(P,S,1,true);
if(R){P.setSelectedButton(R);
}else{P.resetSelectedButton();
}},_onKeyPressLeft:function(T){var Y=T.getOpener();

if(!Y){return;
}if(Y instanceof qx.ui.menu.Button){var V=Y.getLayoutParent();
V.resetOpenedButton();
V.setSelectedButton(Y);
}else if(Y instanceof qx.ui.menubar.Button){var X=Y.getMenuBar().getMenuButtons();
var U=X.indexOf(Y);
if(U===-1){return;
}var ba=null;
var length=X.length;

for(var i=1;i<=length;i++){var W=X[(U-i+length)%length];

if(W.isEnabled()){ba=W;
break;
}}
if(ba&&ba!=Y){ba.open(true);
}}},_onKeyPressRight:function(G){var I=G.getSelectedButton();
if(I){var H=I.getMenu();

if(H){G.setOpenedButton(I);
var O=this._getChild(H,0,1);

if(O){H.setSelectedButton(O);
}return;
}}else if(!G.getOpenedButton()){var O=this._getChild(G,0,1);

if(O){G.setSelectedButton(O);

if(O.getMenu()){G.setOpenedButton(O);
}return;
}}var M=G.getOpener();
if(M instanceof qx.ui.menu.Button&&I){while(M){M=M.getLayoutParent();

if(M instanceof qx.ui.menu.Menu){M=M.getOpener();

if(M instanceof qx.ui.menubar.Button){break;
}}else{break;
}}
if(!M){return;
}}if(M instanceof qx.ui.menubar.Button){var L=M.getMenuBar().getMenuButtons();
var J=L.indexOf(M);
if(J===-1){return;
}var N=null;
var length=L.length;

for(var i=1;i<=length;i++){var K=L[(J+i)%length];

if(K.isEnabled()){N=K;
break;
}}
if(N&&N!=M){N.open(true);
}}},_onKeyPressEnter:function(bA,bB,e){if(bB.hasListener(y)){var bC=e.clone();
bC.setBubbles(false);
bC.setTarget(bB);
bB.dispatchEvent(bC);
}this.hideAll();
},_onKeyPressSpace:function(bp,bq,e){if(bq.hasListener(y)){var br=e.clone();
br.setBubbles(false);
br.setTarget(bq);
bq.dispatchEvent(br);
}}},destruct:function(){var bd=qx.event.Registration;
var bc=document.body;
bd.removeListener(window.document.documentElement,t,this._onMouseDown,this,true);
bd.removeListener(bc,v,this._onKeyUpDown,this,true);
bd.removeListener(bc,s,this._onKeyUpDown,this,true);
bd.removeListener(bc,y,this._onKeyPress,this,true);
this._disposeObjects(h,p);
this._disposeArray(o);
}});
})();
(function(){var l="indexOf",k="addAfter",j="add",i="addBefore",h="_",g="addAt",f="hasChildren",e="removeAt",d="removeAll",c="getChildren",a="remove",b="qx.ui.core.MRemoteChildrenHandling";
qx.Mixin.define(b,{members:{__cI:function(z,A,B,C){var D=this.getChildrenContainer();

if(D===this){z=h+z;
}return (D[z])(A,B,C);
},getChildren:function(){return this.__cI(c);
},hasChildren:function(){return this.__cI(f);
},add:function(x,y){return this.__cI(j,x,y);
},remove:function(E){return this.__cI(a,E);
},removeAll:function(){return this.__cI(d);
},indexOf:function(p){return this.__cI(l,p);
},addAt:function(q,r,s){this.__cI(g,q,r,s);
},addBefore:function(u,v,w){this.__cI(i,u,v,w);
},addAfter:function(m,n,o){this.__cI(k,m,n,o);
},removeAt:function(t){this.__cI(e,t);
}}});
})();
(function(){var Q="slidebar",P="Integer",O="resize",N="qx.ui.core.Widget",M="selected",L="visible",K="Boolean",J="mouseout",I="excluded",H="menu",bg="_applySelectedButton",bf="_applyOpenInterval",be="_applySpacingY",bd="_blocker",bc="_applyCloseInterval",bb="_applyBlockerColor",ba="_applyIconColumnWidth",Y="mouseover",X="qx.ui.menu.Menu",W="Color",U="Number",V="_applyOpenedButton",S="_applySpacingX",T="_applyBlockerOpacity",R="_applyArrowColumnWidth";
qx.Class.define(X,{extend:qx.ui.core.Widget,include:[qx.ui.core.MPlacement,qx.ui.core.MRemoteChildrenHandling],construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.menu.Layout);
var y=this.getApplicationRoot();
y.add(this);
this.addListener(Y,this._onMouseOver);
this.addListener(J,this._onMouseOut);
this.addListener(O,this._onResize,this);
y.addListener(O,this._onResize,this);
this._blocker=new qx.ui.core.Blocker(y);
this.initVisibility();
this.initKeepFocus();
this.initKeepActive();
},properties:{appearance:{refine:true,init:H},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},visibility:{refine:true,init:I},keepFocus:{refine:true,init:true},keepActive:{refine:true,init:true},spacingX:{check:P,apply:S,init:0,themeable:true},spacingY:{check:P,apply:be,init:0,themeable:true},iconColumnWidth:{check:P,init:0,themeable:true,apply:ba},arrowColumnWidth:{check:P,init:0,themeable:true,apply:R},blockerColor:{check:W,init:null,nullable:true,apply:bb,themeable:true},blockerOpacity:{check:U,init:1,apply:T,themeable:true},selectedButton:{check:N,nullable:true,apply:bg},openedButton:{check:N,nullable:true,apply:V},opener:{check:N,nullable:true},openInterval:{check:P,themeable:true,init:250,apply:bf},closeInterval:{check:P,themeable:true,init:250,apply:bc},blockBackground:{check:K,themeable:true,init:false}},members:{__mv:null,__mw:null,_blocker:null,open:function(){if(this.getOpener()!=null){this.placeToWidget(this.getOpener());
this.__my();
this.show();
this._placementTarget=this.getOpener();
}else{this.warn("The menu instance needs a configured 'opener' widget!");
}},openAtMouse:function(e){this.placeToMouse(e);
this.__my();
this.show();
this._placementTarget={left:e.getDocumentLeft(),top:e.getDocumentTop()};
},openAtPoint:function(c){this.placeToPoint(c);
this.__my();
this.show();
this._placementTarget=c;
},addSeparator:function(){this.add(new qx.ui.menu.Separator);
},getColumnSizes:function(){return this._getMenuLayout().getColumnSizes();
},getSelectables:function(){var u=[];
var v=this.getChildren();

for(var i=0;i<v.length;i++){if(v[i].isEnabled()){u.push(v[i]);
}}return u;
},_applyIconColumnWidth:function(s,t){this._getMenuLayout().setIconColumnWidth(s);
},_applyArrowColumnWidth:function(q,r){this._getMenuLayout().setArrowColumnWidth(q);
},_applySpacingX:function(f,g){this._getMenuLayout().setColumnSpacing(f);
},_applySpacingY:function(a,b){this._getMenuLayout().setSpacing(a);
},_applyVisibility:function(bo,bp){qx.ui.core.Widget.prototype._applyVisibility.call(this,bo,bp);
var bq=qx.ui.menu.Manager.getInstance();

if(bo===L){bq.add(this);
var br=this.getParentMenu();

if(br){br.setOpenedButton(this.getOpener());
}}else if(bp===L){bq.remove(this);
var br=this.getParentMenu();

if(br&&br.getOpenedButton()==this.getOpener()){br.resetOpenedButton();
}this.resetOpenedButton();
this.resetSelectedButton();
}this.__mx();
},__mx:function(){if(this.isVisible()){if(this.getBlockBackground()){var bi=this.getZIndex();
this._blocker.blockContent(bi-1);
}}else{if(this._blocker.isContentBlocked()){this._blocker.unblockContent();
}}},getParentMenu:function(){var G=this.getOpener();

if(!G||!(G instanceof qx.ui.menu.AbstractButton)){return null;
}
while(G&&!(G instanceof qx.ui.menu.Menu)){G=G.getLayoutParent();
}return G;
},_applySelectedButton:function(bj,bk){if(bk){bk.removeState(M);
}
if(bj){bj.addState(M);
}},_applyOpenedButton:function(o,p){if(p){p.getMenu().exclude();
}
if(o){o.getMenu().open();
}},_applyBlockerColor:function(w,x){this._blocker.setColor(w);
},_applyBlockerOpacity:function(E,F){this._blocker.setOpacity(E);
},getChildrenContainer:function(){return this.getChildControl(Q,true)||this;
},_createChildControlImpl:function(z){var A;

switch(z){case Q:var A=new qx.ui.menu.MenuSlideBar();
var C=this._getLayout();
this._setLayout(new qx.ui.layout.Grow());
var B=A.getLayout();
A.setLayout(C);
B.dispose();
var D=qx.lang.Array.clone(this.getChildren());

for(var i=0;i<D.length;i++){A.add(D[i]);
}this.removeListener(O,this._onResize,this);
A.getChildrenContainer().addListener(O,this._onResize,this);
this._add(A);
break;
}return A||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,z);
},_getMenuLayout:function(){if(this.hasChildControl(Q)){return this.getChildControl(Q).getChildrenContainer().getLayout();
}else{return this._getLayout();
}},_getMenuBounds:function(){if(this.hasChildControl(Q)){return this.getChildControl(Q).getChildrenContainer().getBounds();
}else{return this.getBounds();
}},_computePlacementSize:function(){return this._getMenuBounds();
},__my:function(){var bm=this._getMenuBounds();

if(!bm){this.addListenerOnce(O,this.__my,this);
return;
}var bl=this.getLayoutParent().getBounds().height;
var top=this.getLayoutProperties().top;
var bn=this.getLayoutProperties().left;
if(top<0){this._assertSlideBar(function(){this.setHeight(bm.height+top);
this.moveTo(bn,0);
});
}else if(top+bm.height>bl){this._assertSlideBar(function(){this.setHeight(bl-top);
});
}else{this.setHeight(null);
}},_assertSlideBar:function(bh){if(this.hasChildControl(Q)){return bh.call(this);
}this.__mw=bh;
qx.ui.core.queue.Widget.add(this);
},syncWidget:function(){this.getChildControl(Q);

if(this.__mw){this.__mw.call(this);
delete this.__mw;
}},_onResize:function(){if(this.isVisible()){var d=this._placementTarget;

if(!d){return;
}else if(d instanceof qx.ui.core.Widget){this.placeToWidget(d);
}else if(d.top!==undefined){this.placeToPoint(d);
}else{throw new Error("Unknown target: "+d);
}this.__my();
}},_onMouseOver:function(e){var l=qx.ui.menu.Manager.getInstance();
l.cancelClose(this);
var m=e.getTarget();

if(m.isEnabled()&&m instanceof qx.ui.menu.AbstractButton){this.setSelectedButton(m);
var k=m.getMenu&&m.getMenu();

if(k){k.setOpener(m);
l.scheduleOpen(k);
this.__mv=k;
}else{var n=this.getOpenedButton();

if(n){l.scheduleClose(n.getMenu());
}
if(this.__mv){l.cancelOpen(this.__mv);
this.__mv=null;
}}}else if(!this.getOpenedButton()){this.resetSelectedButton();
}},_onMouseOut:function(e){var h=qx.ui.menu.Manager.getInstance();
if(!qx.ui.core.Widget.contains(this,e.getRelatedTarget())){var j=this.getOpenedButton();
j?this.setSelectedButton(j):this.resetSelectedButton();
if(j){h.cancelClose(j.getMenu());
}if(this.__mv){h.cancelOpen(this.__mv);
}}}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.ui.menu.Manager.getInstance().remove(this);
}this.getApplicationRoot().removeListener(O,this._onResize,this);
this._placementTarget=null;
this._disposeObjects(bd);
}});
})();
(function(){var c="Integer",b="_applyLayoutChange",a="qx.ui.menu.Layout";
qx.Class.define(a,{extend:qx.ui.layout.VBox,properties:{columnSpacing:{check:c,init:0,apply:b},spanColumn:{check:c,init:1,nullable:true,apply:b},iconColumnWidth:{check:c,init:0,themeable:true,apply:b},arrowColumnWidth:{check:c,init:0,themeable:true,apply:b}},members:{__pV:null,_computeSizeHint:function(){var q=this._getLayoutChildren();
var o,g,j;
var e=this.getSpanColumn();
var h=this.__pV=[0,0,0,0];
var m=this.getColumnSpacing();
var k=0;
var f=0;
for(var i=0,l=q.length;i<l;i++){o=q[i];

if(o.isAnonymous()){continue;
}g=o.getChildrenSizes();

for(var n=0;n<g.length;n++){if(e!=null&&n==e&&g[e+1]==0){k=Math.max(k,g[n]);
}else{h[n]=Math.max(h[n],g[n]);
}}var d=q[i].getInsets();
f=Math.max(f,d.left+d.right);
}if(e!=null&&h[e]+m+h[e+1]<k){h[e]=k-h[e+1]-m;
}if(k==0){j=m*2;
}else{j=m*3;
}if(h[0]==0){h[0]=this.getIconColumnWidth();
}if(h[3]==0){h[3]=this.getArrowColumnWidth();
}var p=qx.ui.layout.VBox.prototype._computeSizeHint.call(this).height;
return {minHeight:p,height:p,width:qx.lang.Array.sum(h)+f+j};
},getColumnSizes:function(){return this.__pV||null;
}},destruct:function(){this.__pV=null;
}});
})();
(function(){var b="menu-separator",a="qx.ui.menu.Separator";
qx.Class.define(a,{extend:qx.ui.core.Widget,properties:{appearance:{refine:true,init:b},anonymous:{refine:true,init:true}}});
})();
(function(){var t="icon",s="label",r="arrow",q="shortcut",p="changeLocale",o="qx.dynlocale",n="submenu",m="on",l="String",k="qx.ui.menu.Menu",d="qx.ui.menu.AbstractButton",j="keypress",h="",c="_applyIcon",b="mouseup",g="abstract",f="_applyLabel",i="_applyMenu",a="changeCommand";
qx.Class.define(d,{extend:qx.ui.core.Widget,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],type:g,construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.menu.ButtonLayout);
this.addListener(b,this._onMouseUp);
this.addListener(j,this._onKeyPress);
this.addListener(a,this._onChangeCommand,this);
},properties:{blockToolTip:{refine:true,init:true},label:{check:l,apply:f,nullable:true},menu:{check:k,apply:i,nullable:true},icon:{check:l,apply:c,themeable:true,nullable:true}},members:{_createChildControlImpl:function(M){var N;

switch(M){case t:N=new qx.ui.basic.Image;
N.setAnonymous(true);
this._add(N,{column:0});
break;
case s:N=new qx.ui.basic.Label;
N.setAnonymous(true);
this._add(N,{column:1});
break;
case q:N=new qx.ui.basic.Label;
N.setAnonymous(true);
this._add(N,{column:2});
break;
case r:N=new qx.ui.basic.Image;
N.setAnonymous(true);
this._add(N,{column:3});
break;
}return N||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,M);
},_forwardStates:{selected:1},getChildrenSizes:function(){var u=0,v=0,w=0,A=0;

if(this._isChildControlVisible(t)){var B=this.getChildControl(t);
u=B.getMarginLeft()+B.getSizeHint().width+B.getMarginRight();
}
if(this._isChildControlVisible(s)){var y=this.getChildControl(s);
v=y.getMarginLeft()+y.getSizeHint().width+y.getMarginRight();
}
if(this._isChildControlVisible(q)){var x=this.getChildControl(q);
w=x.getMarginLeft()+x.getSizeHint().width+x.getMarginRight();
}
if(this._isChildControlVisible(r)){var z=this.getChildControl(r);
A=z.getMarginLeft()+z.getSizeHint().width+z.getMarginRight();
}return [u,v,w,A];
},_onMouseUp:function(e){},_onKeyPress:function(e){},_onChangeCommand:function(e){var L=e.getData();

if(qx.core.Variant.isSet(o,m)){var J=e.getOldData();

if(!J){qx.locale.Manager.getInstance().addListener(p,this._onChangeLocale,this);
}
if(!L){qx.locale.Manager.getInstance().removeListener(p,this._onChangeLocale,this);
}}var K=L!=null?L.toString():h;
this.getChildControl(q).setValue(K);
},_onChangeLocale:qx.core.Variant.select(o,{"on":function(e){var I=this.getCommand();

if(I!=null){this.getChildControl(q).setValue(I.toString());
}},"off":null}),_applyIcon:function(E,F){if(E){this._showChildControl(t).setSource(E);
}else{this._excludeChildControl(t);
}},_applyLabel:function(C,D){if(C){this._showChildControl(s).setValue(C);
}else{this._excludeChildControl(s);
}},_applyMenu:function(G,H){if(H){H.resetOpener();
H.removeState(n);
}
if(G){this._showChildControl(r);
G.setOpener(this);
G.addState(n);
}else{this._excludeChildControl(r);
}}},destruct:function(){if(this.getMenu()){if(!qx.core.ObjectRegistry.inShutDown){this.getMenu().destroy();
}}
if(qx.core.Variant.isSet(o,m)){qx.locale.Manager.getInstance().removeListener(p,this._onChangeLocale,this);
}}});
})();
(function(){var g="qx.ui.menu.ButtonLayout",f="qx.debug",e="column",d="left",c="middle",b="' is not supported by the MenuButton layout!",a="The property '";
qx.Class.define(g,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:qx.core.Variant.select(f,{"on":function(h,name,j){this.assert(name==e,a+name+b);
},"off":null}),renderLayout:function(q,r){var B=this._getLayoutChildren();
var A;
var t;
var u=[];

for(var i=0,l=B.length;i<l;i++){A=B[i];
t=A.getLayoutProperties().column;
u[t]=A;
}var z=this.__nb(B[0]);
var C=z.getColumnSizes();
var w=z.getSpacingX();
var v=qx.lang.Array.sum(C)+w*(C.length-1);

if(v<q){C[1]+=q-v;
}var D=0,top=0;
var x=qx.ui.layout.Util;

for(var i=0,l=C.length;i<l;i++){A=u[i];

if(A){var s=A.getSizeHint();
var top=x.computeVerticalAlignOffset(A.getAlignY()||c,s.height,r,0,0);
var y=x.computeHorizontalAlignOffset(A.getAlignX()||d,s.width,C[i],A.getMarginLeft(),A.getMarginRight());
A.renderLayout(D+y,top,s.width,s.height);
}D+=C[i]+w;
}},__nb:function(k){while(!(k instanceof qx.ui.menu.Menu)){k=k.getLayoutParent();
}return k;
},_computeSizeHint:function(){var o=this._getLayoutChildren();
var n=0;
var p=0;

for(var i=0,l=o.length;i<l;i++){var m=o[i].getSizeHint();
p+=m.width;
n=Math.max(n,m.height);
}return {width:p,height:n};
}}});
})();
(function(){var a="qx.ui.core.MRemoteLayoutHandling";
qx.Mixin.define(a,{members:{setLayout:function(b){return this.getChildrenContainer().setLayout(b);
},getLayout:function(){return this.getChildrenContainer().getLayout();
}}});
})();
(function(){var q="horizontal",p="scrollpane",o="vertical",n="button-backward",m="button-forward",l="content",k="execute",j="qx.ui.container.SlideBar",i="scrollY",h="removeChildWidget",c="scrollX",g="_applyOrientation",f="mousewheel",b="Integer",a="slidebar",d="update";
qx.Class.define(j,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MRemoteLayoutHandling],construct:function(I){qx.ui.core.Widget.call(this);
var J=this.getChildControl(p);
this._add(J,{flex:1});

if(I!=null){this.setOrientation(I);
}else{this.initOrientation();
}this.addListener(f,this._onMouseWheel,this);
},properties:{appearance:{refine:true,init:a},orientation:{check:[q,o],init:q,apply:g},scrollStep:{check:b,init:15,themeable:true}},members:{getChildrenContainer:function(){return this.getChildControl(l);
},_createChildControlImpl:function(r){var s;

switch(r){case m:s=new qx.ui.form.RepeatButton;
s.addListener(k,this._onExecuteForward,this);
s.setFocusable(false);
this._addAt(s,2);
break;
case n:s=new qx.ui.form.RepeatButton;
s.addListener(k,this._onExecuteBackward,this);
s.setFocusable(false);
this._addAt(s,0);
break;
case l:s=new qx.ui.container.Composite();
if(qx.bom.client.Engine.GECKO){s.addListener(h,this._onRemoveChild,this);
}this.getChildControl(p).add(s);
break;
case p:s=new qx.ui.core.scroll.ScrollPane();
s.addListener(d,this._onResize,this);
s.addListener(c,this._onScroll,this);
s.addListener(i,this._onScroll,this);
break;
}return s||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,r);
},_forwardStates:{barLeft:true,barTop:true,barRight:true,barBottom:true},scrollBy:function(y){var z=this.getChildControl(p);

if(this.getOrientation()===q){z.scrollByX(y);
}else{z.scrollByY(y);
}},scrollTo:function(w){var x=this.getChildControl(p);

if(this.getOrientation()===q){x.scrollToX(w);
}else{x.scrollToY(w);
}},_applyOrientation:function(D,E){var H=[this.getLayout(),this._getLayout()];
var G=this.getChildControl(m);
var F=this.getChildControl(n);
if(E==o){G.removeState(o);
F.removeState(o);
G.addState(q);
F.addState(q);
}else if(E==q){G.removeState(q);
F.removeState(q);
G.addState(o);
F.addState(o);
}
if(D==q){this._setLayout(new qx.ui.layout.HBox());
this.setLayout(new qx.ui.layout.HBox());
}else{this._setLayout(new qx.ui.layout.VBox());
this.setLayout(new qx.ui.layout.VBox());
}
if(H[0]){H[0].dispose();
}
if(H[1]){H[1].dispose();
}},_onMouseWheel:function(e){this.scrollBy(e.getWheelDelta()*this.getScrollStep());
e.stop();
},_onScroll:function(){this._updateArrowsEnabled();
},_onResize:function(e){var content=this.getChildControl(p).getChildren()[0];

if(!content){return;
}var A=this.getInnerSize();
var C=content.getBounds();
var B=(this.getOrientation()===q)?C.width>A.width:C.height>A.height;

if(B){this._showArrows();
this._updateArrowsEnabled();
}else{this._hideArrows();
}},_onExecuteBackward:function(){this.scrollBy(-this.getScrollStep());
},_onExecuteForward:function(){this.scrollBy(this.getScrollStep());
},_onRemoveChild:function(){qx.event.Timer.once(function(){this.scrollBy(this.getChildControl(p).getScrollX());
},this,50);
},_updateArrowsEnabled:function(){var u=this.getChildControl(p);

if(this.getOrientation()===q){var t=u.getScrollX();
var v=u.getScrollMaxX();
}else{var t=u.getScrollY();
var v=u.getScrollMaxY();
}this.getChildControl(n).setEnabled(t>0);
this.getChildControl(m).setEnabled(t<v);
},_showArrows:function(){this._showChildControl(m);
this._showChildControl(n);
},_hideArrows:function(){this._excludeChildControl(m);
this._excludeChildControl(n);
this.scrollTo(0);
}}});
})();
(function(){var f="execute",e="button-backward",d="vertical",c="button-forward",b="menu-slidebar",a="qx.ui.menu.MenuSlideBar";
qx.Class.define(a,{extend:qx.ui.container.SlideBar,construct:function(){qx.ui.container.SlideBar.call(this,d);
},properties:{appearance:{refine:true,init:b}},members:{_createChildControlImpl:function(g){var h;

switch(g){case c:h=new qx.ui.form.HoverButton();
h.addListener(f,this._onExecuteForward,this);
this._addAt(h,2);
break;
case e:h=new qx.ui.form.HoverButton();
h.addListener(f,this._onExecuteBackward,this);
this._addAt(h,0);
break;
}return h||qx.ui.container.SlideBar.prototype._createChildControlImpl.call(this,g);
}}});
})();
(function(){var n="pressed",m="abandoned",l="Integer",k="hovered",j="qx.event.type.Event",i="Enter",h="Space",g="press",f="qx.ui.form.RepeatButton",d="release",a="interval",c="__mS",b="execute";
qx.Class.define(f,{extend:qx.ui.form.Button,construct:function(q,r){qx.ui.form.Button.call(this,q,r);
this.__mS=new qx.event.AcceleratingTimer();
this.__mS.addListener(a,this._onInterval,this);
},events:{"execute":j,"press":j,"release":j},properties:{interval:{check:l,init:100},firstInterval:{check:l,init:500},minTimer:{check:l,init:20},timerDecrease:{check:l,init:2}},members:{__mT:null,__mS:null,press:function(){if(this.isEnabled()){if(!this.hasState(n)){this.__mU();
}this.removeState(m);
this.addState(n);
}},release:function(s){if(!this.isEnabled()){return;
}if(this.hasState(n)){if(!this.__mT){this.execute();
}}this.removeState(n);
this.removeState(m);
this.__mV();
},_applyEnabled:function(o,p){qx.ui.form.Button.prototype._applyEnabled.call(this,o,p);

if(!o){this.removeState(n);
this.removeState(m);
this.__mV();
}},_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}
if(this.hasState(m)){this.removeState(m);
this.addState(n);
this.__mS.start();
}this.addState(k);
},_onMouseOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.removeState(k);

if(this.hasState(n)){this.removeState(n);
this.addState(m);
this.__mS.stop();
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}this.capture();
this.__mU();
e.stopPropagation();
},_onMouseUp:function(e){this.releaseCapture();

if(!this.hasState(m)){this.addState(k);

if(this.hasState(n)&&!this.__mT){this.execute();
}}this.__mV();
e.stopPropagation();
},_onKeyUp:function(e){switch(e.getKeyIdentifier()){case i:case h:if(this.hasState(n)){if(!this.__mT){this.execute();
}this.removeState(n);
this.removeState(m);
e.stopPropagation();
this.__mV();
}}},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case i:case h:this.removeState(m);
this.addState(n);
e.stopPropagation();
this.__mU();
}},_onInterval:function(e){this.__mT=true;
this.fireEvent(b);
},__mU:function(){this.fireEvent(g);
this.__mT=false;
this.__mS.set({interval:this.getInterval(),firstInterval:this.getFirstInterval(),minimum:this.getMinTimer(),decrease:this.getTimerDecrease()}).start();
this.removeState(m);
this.addState(n);
},__mV:function(){this.fireEvent(d);
this.__mS.stop();
this.removeState(m);
this.removeState(n);
}},destruct:function(){this._disposeObjects(c);
}});
})();
(function(){var e="Integer",d="interval",c="qx.event.type.Event",b="__pW",a="qx.event.AcceleratingTimer";
qx.Class.define(a,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__pW=new qx.event.Timer(this.getInterval());
this.__pW.addListener(d,this._onInterval,this);
},events:{"interval":c},properties:{interval:{check:e,init:100},firstInterval:{check:e,init:500},minimum:{check:e,init:20},decrease:{check:e,init:2}},members:{__pW:null,__pX:null,start:function(){this.__pW.setInterval(this.getFirstInterval());
this.__pW.start();
},stop:function(){this.__pW.stop();
this.__pX=null;
},_onInterval:function(){this.__pW.stop();

if(this.__pX==null){this.__pX=this.getInterval();
}this.__pX=Math.max(this.getMinimum(),this.__pX-this.getDecrease());
this.__pW.setInterval(this.__pX);
this.__pW.start();
this.fireEvent(d);
}},destruct:function(){this._disposeObjects(b);
}});
})();
(function(){var I="resize",H="scrollY",G="update",F="scrollX",E="_applyScrollX",D="_applyScrollY",C="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getScrollMaxX()",B="appear",A="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getScrollMaxY()",z="qx.event.type.Event",v="qx.ui.core.scroll.ScrollPane",w="scroll";
qx.Class.define(v,{extend:qx.ui.core.Widget,construct:function(){qx.ui.core.Widget.call(this);
this.set({minWidth:0,minHeight:0});
this._setLayout(new qx.ui.layout.Grow());
this.addListener(I,this._onUpdate);
var L=this.getContentElement();
L.addListener(w,this._onScroll,this);
L.addListener(B,this._onAppear,this);
},events:{update:z},properties:{scrollX:{check:C,apply:E,event:F,init:0},scrollY:{check:A,apply:D,event:H,init:0}},members:{add:function(M){var N=this._getChildren()[0];

if(N){this._remove(N);
N.removeListener(I,this._onUpdate,this);
}
if(M){this._add(M);
M.addListener(I,this._onUpdate,this);
}},remove:function(u){if(u){this._remove(u);
u.removeListener(I,this._onUpdate,this);
}},getChildren:function(){return this._getChildren();
},_onUpdate:function(e){this.fireEvent(G);
},_onScroll:function(e){var a=this.getContentElement();
this.setScrollX(a.getScrollX());
this.setScrollY(a.getScrollY());
},_onAppear:function(e){var j=this.getContentElement();
var g=this.getScrollX();
var h=j.getScrollX();

if(g!=h){j.scrollToX(g);
}var k=this.getScrollY();
var i=j.getScrollY();

if(k!=i){j.scrollToY(k);
}},getItemTop:function(o){var top=0;

do{top+=o.getBounds().top;
o=o.getLayoutParent();
}while(o&&o!==this);
return top;
},getItemBottom:function(n){return this.getItemTop(n)+n.getBounds().height;
},getItemLeft:function(d){var f=0;
var parent;

do{f+=d.getBounds().left;
parent=d.getLayoutParent();

if(parent){f+=parent.getInsets().left;
}d=parent;
}while(d&&d!==this);
return f;
},getItemRight:function(p){return this.getItemLeft(p)+p.getBounds().width;
},getScrollSize:function(){return this.getChildren()[0].getBounds();
},getScrollMaxX:function(){var r=this.getInnerSize();
var q=this.getScrollSize();

if(r&&q){return Math.max(0,q.width-r.width);
}return 0;
},getScrollMaxY:function(){var t=this.getInnerSize();
var s=this.getScrollSize();

if(t&&s){return Math.max(0,s.height-t.height);
}return 0;
},scrollToX:function(J){var K=this.getScrollMaxX();

if(J<0){J=0;
}else if(J>K){J=K;
}this.setScrollX(J);
},scrollToY:function(b){var c=this.getScrollMaxY();

if(b<0){b=0;
}else if(b>c){b=c;
}this.setScrollY(b);
},scrollByX:function(x){this.scrollToX(this.getScrollX()+x);
},scrollByY:function(y){this.scrollToY(this.getScrollY()+y);
},_applyScrollX:function(l){this.getContentElement().scrollToX(l);
},_applyScrollY:function(m){this.getContentElement().scrollToY(m);
}}});
})();
(function(){var k="Integer",j="hovered",i="hover-button",h="interval",g="mouseover",f="mouseout",d="qx.ui.form.HoverButton",c="__mz";
qx.Class.define(d,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],construct:function(a,b){qx.ui.basic.Atom.call(this,a,b);
this.addListener(g,this._onMouseOver,this);
this.addListener(f,this._onMouseOut,this);
this.__mz=new qx.event.AcceleratingTimer();
this.__mz.addListener(h,this._onInterval,this);
},properties:{appearance:{refine:true,init:i},interval:{check:k,init:80},firstInterval:{check:k,init:200},minTimer:{check:k,init:20},timerDecrease:{check:k,init:2}},members:{__mz:null,_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.__mz.set({interval:this.getInterval(),firstInterval:this.getFirstInterval(),minimum:this.getMinTimer(),decrease:this.getTimerDecrease()}).start();
this.addState(j);
},_onMouseOut:function(e){this.__mz.stop();
this.removeState(j);

if(!this.isEnabled()||e.getTarget()!==this){return;
}},_onInterval:function(){if(this.isEnabled()){this.execute();
}else{this.__mz.stop();
}}},destruct:function(){this._disposeObjects(c);
}});
})();
(function(){var b="qx.ui.menu.Button",a="menu-button";
qx.Class.define(b,{extend:qx.ui.menu.AbstractButton,construct:function(c,d,f,g){qx.ui.menu.AbstractButton.call(this);
if(c!=null){this.setLabel(c);
}
if(d!=null){this.setIcon(d);
}
if(f!=null){this.setCommand(f);
}
if(g!=null){this.setMenu(g);
}},properties:{appearance:{refine:true,init:a}},members:{_onMouseUp:function(e){if(e.isLeftPressed()){this.execute();
if(this.getMenu()){return;
}}qx.ui.menu.Manager.getInstance().hideAll();
},_onKeyPress:function(e){this.execute();
}}});
})();
(function(){var m="container",k="handle",j="both",h="Integer",g="middle",f="qx.ui.toolbar.Part",e="icon",d="label",c="changeShow",b="_applySpacing",a="toolbar/part";
qx.Class.define(f,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling],construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.HBox);
this._createChildControl(k);
},properties:{appearance:{refine:true,init:a},show:{init:j,check:[j,d,e],inheritable:true,event:c},spacing:{nullable:true,check:h,themeable:true,apply:b}},members:{_createChildControlImpl:function(n){var o;

switch(n){case k:o=new qx.ui.basic.Image();
o.setAlignY(g);
this._add(o);
break;
case m:o=new qx.ui.toolbar.PartContainer;
this._add(o);
break;
}return o||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,n);
},getChildrenContainer:function(){return this.getChildControl(m);
},_applySpacing:function(p,q){var r=this.getChildControl(m).getLayout();
p==null?r.resetSpacing():r.setSpacing(p);
},addSeparator:function(){this.add(new qx.ui.toolbar.Separator);
},getMenuButtons:function(){var t=this.getChildren();
var s=[];
var u;

for(var i=0,l=t.length;i<l;i++){u=t[i];

if(u instanceof qx.ui.menubar.Button){s.push(u);
}}return s;
}}});
})();
(function(){var f="both",e="toolbar/part/container",d="icon",c="changeShow",b="qx.ui.toolbar.PartContainer",a="label";
qx.Class.define(b,{extend:qx.ui.container.Composite,construct:function(){qx.ui.container.Composite.call(this);
this._setLayout(new qx.ui.layout.HBox);
},properties:{appearance:{refine:true,init:e},show:{init:f,check:[f,a,d],inheritable:true,event:c}}});
})();
(function(){var e="inherit",d="toolbar-button",c="keydown",b="qx.ui.toolbar.Button",a="keyup";
qx.Class.define(b,{extend:qx.ui.form.Button,construct:function(f,g,h){qx.ui.form.Button.call(this,f,g,h);
this.removeListener(c,this._onKeyDown);
this.removeListener(a,this._onKeyUp);
},properties:{appearance:{refine:true,init:d},show:{refine:true,init:e},focusable:{refine:true,init:false}}});
})();
(function(){var b="changeModel",a="qx.ui.form.MModelProperty";
qx.Mixin.define(a,{properties:{model:{nullable:true,event:b}}});
})();
(function(){var b="qx.ui.form.IRadioItem",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){},getValue:function(){},setGroup:function(d){this.assertInstance(d,qx.ui.form.RadioGroup);
},getGroup:function(){}}});
})();
(function(){var b="qx.ui.form.IBooleanForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var b="qx.ui.form.IModel",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeModel":a},members:{setModel:function(c){},getModel:function(){},resetModel:function(){}}});
})();
(function(){var j="checked",i="qx.ui.form.RadioGroup",h="Boolean",g="menu-radiobutton",f="_applyValue",d="qx.ui.menu.RadioButton",c="changeValue",b="_applyGroup",a="execute";
qx.Class.define(d,{extend:qx.ui.menu.AbstractButton,include:[qx.ui.form.MModelProperty],implement:[qx.ui.form.IRadioItem,qx.ui.form.IBooleanForm,qx.ui.form.IModel],construct:function(m,n){qx.ui.menu.AbstractButton.call(this);
if(m!=null){this.setLabel(m);
}
if(n!=null){this.setMenu(n);
}this.addListener(a,this._onExecute,this);
},properties:{appearance:{refine:true,init:g},value:{check:h,nullable:true,event:c,apply:f,init:false},group:{check:i,nullable:true,apply:b}},members:{_applyValue:function(o,p){o?this.addState(j):this.removeState(j);
},_applyGroup:function(k,l){if(l){l.remove(this);
}
if(k){k.add(this);
}},_onExecute:function(e){this.setValue(true);
},_onMouseUp:function(e){if(e.isLeftPressed()){this.execute();
}qx.ui.menu.Manager.getInstance().hideAll();
},_onKeyPress:function(e){this.execute();
}}});
})();
(function(){var a="qx.ui.form.IModelSelection";
qx.Interface.define(a,{members:{setModelSelection:function(b){},getModelSelection:function(){}}});
})();
(function(){var h="Please use an array as parameter.",g="qx.ui.form.MModelSelection",f="change",e="qx.debug",d="changeSelection",c="on",b="__lE",a="qx.event.type.Data";
qx.Mixin.define(g,{construct:function(){this.__lE=new qx.data.Array();
this.__lE.addListener(f,this.__lH,this);
this.addListener(d,this.__lG,this);
},events:{changeModelSelection:a},members:{__lE:null,__lF:false,__lG:function(){if(this.__lF){return;
}var o=this.getSelection();
var m=[];

for(var i=0;i<o.length;i++){var p=o[i];
var n=p.getModel?p.getModel():null;

if(n!==null){m.push(n);
}}if(m.length===o.length){this.setModelSelection(m);
}},__lH:function(){this.__lF=true;
var r=this.getSelectables(true);
var t=[];
var s=this.__lE.toArray();

for(var i=0;i<s.length;i++){var v=s[i];

for(var j=0;j<r.length;j++){var w=r[j];
var q=w.getModel?w.getModel():null;

if(v===q){t.push(w);
break;
}}}this.setSelection(t);
this.__lF=false;
var u=this.getSelection();

if(!qx.lang.Array.equals(u,t)){this.__lG();
}},getModelSelection:function(){return this.__lE;
},setModelSelection:function(k){if(!k){this.__lE.removeAll();
return;
}
if(qx.core.Variant.isSet(e,c)){this.assertArray(k,h);
}k.unshift(this.__lE.getLength());
k.unshift(0);
var l=this.__lE.splice.apply(this.__lE,k);
l.dispose();
}},destruct:function(){this._disposeObjects(b);
}});
})();
(function(){var t="Boolean",s="changeInvalidMessage",r="changeValue",q="String",p="_applyAllowEmptySelection",o="_applyInvalidMessage",n="qx.ui.form.RadioGroup",m="_applyValid",k="",j="changeRequired",f="changeValid",h="changeEnabled",g="__a",d="changeSelection",c="_applyEnabled";
qx.Class.define(n,{extend:qx.core.Object,implement:[qx.ui.core.ISingleSelection,qx.ui.form.IForm,qx.ui.form.IModelSelection],include:[qx.ui.core.MSingleSelectionHandling,qx.ui.form.MModelSelection],construct:function(u){qx.core.Object.call(this);
this.__a=[];
this.addListener(d,this.__b,this);

if(u!=null){this.add.apply(this,arguments);
}},properties:{enabled:{check:t,apply:c,event:h,init:true},wrap:{check:t,init:true},allowEmptySelection:{check:t,init:false,apply:p},valid:{check:t,init:true,apply:m,event:f},required:{check:t,init:false,event:j},invalidMessage:{check:q,init:k,event:s,apply:o},requiredInvalidMessage:{check:q,nullable:true,event:s}},members:{__a:null,getItems:function(){return this.__a;
},add:function(v){var w=this.__a;
var x;

for(var i=0,l=arguments.length;i<l;i++){x=arguments[i];

if(qx.lang.Array.contains(w,x)){continue;
}x.addListener(r,this._onItemChangeChecked,this);
w.push(x);
x.setGroup(this);
if(x.getValue()){this.setSelection([x]);
}}if(!this.isAllowEmptySelection()&&w.length>0&&!this.getSelection()[0]){this.setSelection([w[0]]);
}},remove:function(C){var D=this.__a;

if(qx.lang.Array.contains(D,C)){qx.lang.Array.remove(D,C);
if(C.getGroup()===this){C.resetGroup();
}C.removeListener(r,this._onItemChangeChecked,this);
if(C.getValue()){this.resetSelection();
}}},getChildren:function(){return this.__a;
},_onItemChangeChecked:function(e){var P=e.getTarget();

if(P.getValue()){this.setSelection([P]);
}else if(this.getSelection()[0]==P){this.resetSelection();
}},_applyInvalidMessage:function(y,z){for(var i=0;i<this.__a.length;i++){this.__a[i].setInvalidMessage(y);
}},_applyValid:function(A,B){for(var i=0;i<this.__a.length;i++){this.__a[i].setValid(A);
}},_applyEnabled:function(E,F){var G=this.__a;

if(E==null){for(var i=0,l=G.length;i<l;i++){G[i].resetEnabled();
}}else{for(var i=0,l=G.length;i<l;i++){G[i].setEnabled(E);
}}},_applyAllowEmptySelection:function(N,O){if(!N&&this.isSelectionEmpty()){this.resetSelection();
}},selectNext:function(){var H=this.getSelection()[0];
var J=this.__a;
var I=J.indexOf(H);

if(I==-1){return;
}var i=0;
var length=J.length;
if(this.getWrap()){I=(I+1)%length;
}else{I=Math.min(I+1,length-1);
}
while(i<length&&!J[I].getEnabled()){I=(I+1)%length;
i++;
}this.setSelection([J[I]]);
},selectPrevious:function(){var K=this.getSelection()[0];
var M=this.__a;
var L=M.indexOf(K);

if(L==-1){return;
}var i=0;
var length=M.length;
if(this.getWrap()){L=(L-1+length)%length;
}else{L=Math.max(L-1,0);
}
while(i<length&&!M[L].getEnabled()){L=(L-1+length)%length;
i++;
}this.setSelection([M[L]]);
},_getItems:function(){return this.getItems();
},_isAllowEmptySelection:function(){return this.isAllowEmptySelection();
},__b:function(e){var b=e.getData()[0];
var a=e.getOldData()[0];

if(a){a.setValue(false);
}
if(b){b.setValue(true);
}}},destruct:function(){this._disposeArray(g);
}});
})();
(function(){var h="[",g="]",f=".",d="idBubble",c="changeBubble",b="qx.data.marshal.MEventBubbling",a="qx.event.type.Data";
qx.Mixin.define(b,{events:{"changeBubble":a},members:{_applyEventPropagation:function(u,v,name){this.fireDataEvent(c,{value:u,name:name,old:v});
this._registerEventChaining(u,v,name);
},_registerEventChaining:function(q,r,name){if((q instanceof qx.core.Object)&&qx.Class.hasMixin(q.constructor,qx.data.marshal.MEventBubbling)){var s=qx.lang.Function.bind(this.__lP,this,name);
var t=q.addListener(c,s,this);
q.setUserData(d,t);
}if(r!=null&&r.getUserData&&r.getUserData(d)!=null){r.removeListenerById(r.getUserData(d));
}},__lP:function(name,e){var p=e.getData();
var l=p.value;
var j=p.old;
if(qx.Class.hasInterface(e.getTarget().constructor,qx.data.IListData)){if(p.name.indexOf){var o=p.name.indexOf(f)!=-1?p.name.indexOf(f):p.name.length;
var m=p.name.indexOf(h)!=-1?p.name.indexOf(h):p.name.length;

if(o<m){var i=p.name.substring(0,o);
var n=p.name.substring(o+1,p.name.length);

if(n[0]!=h){n=f+n;
}var k=name+h+i+g+n;
}else if(m<o){var i=p.name.substring(0,m);
var n=p.name.substring(m,p.name.length);
var k=name+h+i+g+n;
}else{var k=name+h+p.name+g;
}}else{var k=name+h+p.name+g;
}}else{var k=name+f+p.name;
}this.fireDataEvent(c,{value:l,name:k,old:j});
}}});
})();
(function(){var be="change",bd="add",bc="remove",bb="order",ba="qx.event.type.Data",Y="The parameter must be an array.",X="",W="qx.data.Array",V="?",U="changeBubble",R="number",T="on",S="changeLength",Q="qx.debug";
qx.Class.define(W,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,implement:[qx.data.IListData],construct:function(bk){qx.core.Object.call(this);
if(bk==undefined){this.__lB=[];
}else if(arguments.length>1){this.__lB=[];

for(var i=0;i<arguments.length;i++){this.__lB.push(arguments[i]);
}}else if(typeof bk==R){this.__lB=new Array(bk);
}else if(bk instanceof Array){this.__lB=qx.lang.Array.clone(bk);
}else{this.__lB=[];
throw new Error("Type of the parameter not supported!");
}for(var i=0;i<this.__lB.length;i++){this._applyEventPropagation(this.__lB[i],null,i);
}this.__lC();
},events:{"change":ba,"changeLength":ba},members:{__lB:null,concat:function(p){if(p){var q=this.__lB.concat(p);
}else{var q=this.__lB.concat();
}return new qx.data.Array(q);
},join:function(O){return this.__lB.join(O);
},pop:function(){var M=this.__lB.pop();
this.__lC();
this._applyEventPropagation(null,M,this.length-1);
this.fireDataEvent(be,{start:this.length-1,end:this.length-1,type:bc,items:[M]},null);
return M;
},push:function(N){for(var i=0;i<arguments.length;i++){this.__lB.push(arguments[i]);
this.__lC();
this._applyEventPropagation(arguments[i],null,this.length-1);
this.fireDataEvent(be,{start:this.length-1,end:this.length-1,type:bd,items:[arguments[i]]},null);
}return this.length;
},reverse:function(){this.__lB.reverse();
this.fireDataEvent(be,{start:0,end:this.length-1,type:bb,items:null},null);
},shift:function(){var e=this.__lB.shift();
this.__lC();
this._applyEventPropagation(null,e,this.length-1);
this.fireDataEvent(be,{start:0,end:this.length-1,type:bc,items:[e]},null);
return e;
},slice:function(bi,bj){return new qx.data.Array(this.__lB.slice(bi,bj));
},splice:function(f,g,h){var o=this.__lB.length;
var l=this.__lB.splice.apply(this.__lB,arguments);
if(this.__lB.length!=o){this.__lC();
}var m=g>0;
var j=arguments.length>2;
var k=null;

if(m||j){if(this.__lB.length>o){var n=bd;
}else if(this.__lB.length<o){var n=bc;
k=l;
}else{var n=bb;
}this.fireDataEvent(be,{start:f,end:this.length-1,type:n,items:k},null);
}for(var i=2;i<arguments.length;i++){this._registerEventChaining(arguments[i],null,f+i);
}this.fireDataEvent(U,{value:this,name:V,old:l});
for(var i=0;i<l.length;i++){this._applyEventPropagation(null,l[i],i);
}return (new qx.data.Array(l));
},sort:function(u){this.__lB.sort.apply(this.__lB,arguments);
this.fireDataEvent(be,{start:0,end:this.length-1,type:bb,items:null},null);
},unshift:function(P){for(var i=arguments.length-1;i>=0;i--){this.__lB.unshift(arguments[i]);
this.__lC();
this._applyEventPropagation(arguments[i],null,0);
this.fireDataEvent(be,{start:0,end:this.length-1,type:bd,items:[arguments[i]]},null);
}return this.length;
},toArray:function(){return this.__lB;
},getItem:function(H){return this.__lB[H];
},setItem:function(a,b){var c=this.__lB[a];
this.__lB[a]=b;
this._applyEventPropagation(b,c,a);
if(this.length!=this.__lB.length){this.__lC();
}this.fireDataEvent(be,{start:a,end:a,type:bd,items:[b]},null);
},getLength:function(){return this.length;
},indexOf:function(A){return this.__lB.indexOf(A);
},toString:function(){if(this.__lB!=null){return this.__lB.toString();
}return X;
},contains:function(I){return this.__lB.indexOf(I)!==-1;
},copy:function(){return this.concat();
},insertAt:function(bg,bh){this.splice(bg,0,bh);
},insertBefore:function(r,s){var t=this.indexOf(r);

if(t==-1){this.push(s);
}else{this.splice(t,0,s);
}},insertAfter:function(v,w){var x=this.indexOf(v);

if(x==-1||x==(this.length-1)){this.push(w);
}else{this.splice(x+1,0,w);
}},removeAt:function(bf){return this.splice(bf,1)[0];
},removeAll:function(){for(var i=0;i<this.__lB.length;i++){this._applyEventPropagation(null,this.__lB[i],i);
}var z=this.getLength();
var y=this.__lB.concat();
this.__lB.length=0;
this.__lC();
this.fireDataEvent(be,{start:0,end:z-1,type:bc,items:y},null);
},append:function(C){if(C instanceof qx.data.Array){C=C.toArray();
}if(qx.core.Variant.isSet(Q,T)){qx.core.Assert.assertArray(C,Y);
}for(var i=0;i<C.length;i++){this._applyEventPropagation(C[i],null,this.__lB.length+i);
}Array.prototype.push.apply(this.__lB,C);
var D=this.length;
this.__lC();
this.fireDataEvent(be,{start:D,end:this.length-1,type:bd,items:C},null);
},remove:function(E){var F=this.indexOf(E);

if(F!=-1){this.splice(F,1);
return E;
}},equals:function(G){if(this.length!==G.length){return false;
}
for(var i=0;i<this.length;i++){if(this.getItem(i)!==G.getItem(i)){return false;
}}return true;
},sum:function(){var bl=0;

for(var i=0;i<this.length;i++){bl+=this.getItem(i);
}return bl;
},max:function(){var d=this.getItem(0);

for(var i=1;i<this.length;i++){if(this.getItem(i)>d){d=this.getItem(i);
}}return d===undefined?null:d;
},min:function(){var L=this.getItem(0);

for(var i=1;i<this.length;i++){if(this.getItem(i)<L){L=this.getItem(i);
}}return L===undefined?null:L;
},forEach:function(J,K){for(var i=0;i<this.__lB.length;i++){J.call(K,this.__lB[i]);
}},__lC:function(){var B=this.length;
this.length=this.__lB.length;
this.fireDataEvent(S,this.length,B);
}},destruct:function(){for(var i=0;i<this.__lB.length;i++){this._applyEventPropagation(null,this.__lB[i],i);
}this.__lB=null;
}});
})();
(function(){var e="arrow",d="qx.ui.toolbar.MenuButton",c="Boolean",b="_applyShowArrow",a="toolbar-menubutton";
qx.Class.define(d,{extend:qx.ui.menubar.Button,properties:{appearance:{refine:true,init:a},showArrow:{check:c,init:false,themeable:true,apply:b}},members:{_createChildControlImpl:function(h){var i;

switch(h){case e:i=new qx.ui.basic.Image();
i.setAnonymous(true);
this._addAt(i,10);
break;
}return i||qx.ui.menubar.Button.prototype._createChildControlImpl.call(this,h);
},_applyShowArrow:function(f,g){if(f){this._showChildControl(e);
}else{this._excludeChildControl(e);
}}}});
})();
(function(){var s="pressed",r="abandoned",q="hovered",p="checked",o="Space",n="Enter",m="mouseup",l="mousedown",k="Boolean",j="_applyValue",c="mouseover",i="mouseout",g="qx.ui.form.ToggleButton",b="keydown",a="changeValue",f="button",d="keyup",h="execute";
qx.Class.define(g,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IBooleanForm,qx.ui.form.IExecutable],construct:function(t,u){qx.ui.basic.Atom.call(this,t,u);
this.addListener(c,this._onMouseOver);
this.addListener(i,this._onMouseOut);
this.addListener(l,this._onMouseDown);
this.addListener(m,this._onMouseUp);
this.addListener(b,this._onKeyDown);
this.addListener(d,this._onKeyUp);
this.addListener(h,this._onExecute,this);
},properties:{appearance:{refine:true,init:f},focusable:{refine:true,init:true},value:{check:k,nullable:true,event:a,apply:j,init:false}},members:{_applyValue:function(v,w){v?this.addState(p):this.removeState(p);
},_onExecute:function(e){this.toggleValue();
},_onMouseOver:function(e){if(e.getTarget()!==this){return;
}this.addState(q);

if(this.hasState(r)){this.removeState(r);
this.addState(s);
}},_onMouseOut:function(e){if(e.getTarget()!==this){return;
}this.removeState(q);

if(this.hasState(s)){if(!this.getValue()){this.removeState(s);
}this.addState(r);
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}this.capture();
this.removeState(r);
this.addState(s);
e.stopPropagation();
},_onMouseUp:function(e){this.releaseCapture();

if(this.hasState(r)){this.removeState(r);
}else if(this.hasState(s)){this.execute();
}this.removeState(s);
e.stopPropagation();
},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case n:case o:this.removeState(r);
this.addState(s);
e.stopPropagation();
}},_onKeyUp:function(e){if(!this.hasState(s)){return;
}
switch(e.getKeyIdentifier()){case n:case o:this.removeState(r);
this.execute();
this.removeState(s);
e.stopPropagation();
}}}});
})();
(function(){var e="inherit",d="toolbar-button",c="qx.ui.toolbar.CheckBox",b="keydown",a="keyup";
qx.Class.define(c,{extend:qx.ui.form.ToggleButton,construct:function(f,g){qx.ui.form.ToggleButton.call(this,f,g);
this.removeListener(b,this._onKeyDown);
this.removeListener(a,this._onKeyUp);
},properties:{appearance:{refine:true,init:d},show:{refine:true,init:e},focusable:{refine:true,init:false}}});
})();
(function(){var c="qx.ui.form.RadioGroup",b="_applyGroup",a="qx.ui.toolbar.RadioButton";
qx.Class.define(a,{extend:qx.ui.toolbar.CheckBox,include:[qx.ui.form.MModelProperty],implement:[qx.ui.form.IModel,qx.ui.form.IRadioItem],properties:{group:{check:c,apply:b,nullable:true}},members:{_applyValue:function(d,e){qx.ui.toolbar.CheckBox.prototype._applyValue.call(this,d,e);

if(d){var f=this.getGroup();

if(f){f.setSelection([this]);
}}},_applyGroup:function(g,h){if(h){h.remove(this);
}
if(g){g.add(this);
}}}});
})();
(function(){var h="String",g="qx.ui.embed.AbstractIframe",f="name",e="",d="_applySource",c="qx.event.type.Event",b="_applyFrameName";
qx.Class.define(g,{extend:qx.ui.core.Widget,construct:function(a){qx.ui.core.Widget.call(this);

if(a){this.setSource(a);
}},events:{"load":c},properties:{source:{check:h,apply:d,nullable:true},frameName:{check:h,init:e,apply:b}},members:{_getIframeElement:function(){throw new Error("Abstract method call");
},_applySource:function(i,j){this._getIframeElement().setSource(i);
},_applyFrameName:function(k,l){this._getIframeElement().setAttribute(f,k);
},getWindow:function(){return this._getIframeElement().getWindow();
},getDocument:function(){return this._getIframeElement().getDocument();
},getBody:function(){return this._getIframeElement().getBody();
},getName:function(){return this._getIframeElement().getName();
},reload:function(){this._getIframeElement().reload();
}}});
})();
(function(){var y="Please use the 'scrollbar' property instead.",x="qx.client",w="auto",v="mousedown",u="qx.debug",t="load",s="visible",r="hidden",q="help",p="overflowY",bd="mouseup",bc="losecapture",bb="contextmenu",ba="overflowX",Y="none",X="on",W="display",V="scroll",U="no",T="Boolean",F="px",G="url(",D=")",E="gecko",B="repeat",C="div",z="_applyScrollbar",A="DOMNodeInserted",H="_applyNativeHelp",I="yes",L="scrolling",K="/",N="appear",M="__yz",P="mshtml",O="block",J="qx.ui.embed.Iframe",S="iframe",R="qx/static/blank.gif",Q="absolute";
qx.Class.define(J,{extend:qx.ui.embed.AbstractIframe,construct:function(bn){if(bn!=null){this.__yy=bn;
}qx.ui.embed.AbstractIframe.call(this,bn);
qx.event.Registration.addListener(document.body,v,this.block,this,true);
qx.event.Registration.addListener(document.body,bd,this.release,this,true);
qx.event.Registration.addListener(document.body,bc,this.release,this,true);
this.__yz=this._createBlockerElement();
this.getContainerElement().add(this.__yz);

if(qx.core.Variant.isSet(x,E)){this.addListenerOnce(N,function(e){var m=this.getContainerElement().getDomElement();
qx.bom.Event.addNativeListener(m,A,this._onDOMNodeInserted);
});
this._onDOMNodeInserted=qx.lang.Function.listener(this._syncSourceAfterDOMMove,this);
}},properties:{appearance:{refine:true,init:S},nativeContextMenu:{refine:true,init:false},nativeHelp:{check:T,init:false,apply:H},scrollbar:{check:[w,U,I],nullable:true,themeable:true,apply:z}},members:{__yy:null,__yz:null,renderLayout:function(b,top,c,d){qx.ui.embed.AbstractIframe.prototype.renderLayout.call(this,b,top,c,d);
var g=F;
var f=this.getInsets();
this.__yz.setStyles({"left":f.left+g,"top":f.top+g,"width":(c-f.left-f.right)+g,"height":(d-f.top-f.bottom)+g});
},_createContentElement:function(){var h=new qx.html.Iframe(this.__yy);
h.addListener(t,this._onIframeLoad,this);
return h;
},_getIframeElement:function(){return this.getContentElement();
},_createBlockerElement:function(){var l=new qx.html.Element(C);
l.setStyles({"zIndex":20,"position":Q,"display":Y});
if(qx.core.Variant.isSet(x,P)){l.setStyles({backgroundImage:G+qx.util.ResourceManager.getInstance().toUri(R)+D,backgroundRepeat:B});
}return l;
},_onIframeLoad:function(e){this._applyNativeContextMenu(this.getNativeContextMenu(),null);
this._applyNativeHelp(this.getNativeHelp(),null);
this.fireNonBubblingEvent(t);
},block:function(){this.__yz.setStyle(W,O);
},release:function(){this.__yz.setStyle(W,Y);
},_applyNativeContextMenu:function(be,bf){if(be!==false&&bf!==false){return;
}var bg=this.getDocument();

if(!bg){return;
}
try{var bh=bg.documentElement;
}catch(e){return ;
}
if(bf===false){qx.event.Registration.removeListener(bh,bb,this._onNativeContextMenu,this,true);
}
if(be===false){qx.event.Registration.addListener(bh,bb,this._onNativeContextMenu,this,true);
}},_onNativeContextMenu:function(e){e.preventDefault();
},_applyNativeHelp:qx.core.Variant.select(x,{"mshtml":function(bi,bj){var document=this.getDocument();

if(!document){return;
}
try{if(bj===false){qx.bom.Event.removeNativeListener(document,q,qx.lang.Function.returnFalse);
}
if(bi===false){qx.bom.Event.addNativeListener(document,q,qx.lang.Function.returnFalse);
}}catch(e){}},"default":function(){}}),_syncSourceAfterDOMMove:function(){var o=this.getContentElement().getDomElement();
var n=o.src;
if(n.charAt(n.length-1)==K){n=n.substring(0,n.length-1);
}
if(n!=this.getSource()){qx.bom.Iframe.getWindow(o).stop();
o.src=this.getSource();
}},_applyScrollbar:function(a){this.getContentElement().setAttribute(L,a);
},setOverflow:function(bl,bm){qx.log.Logger.deprecatedMethodWarning(arguments.callee,y);

if(arguments[0] instanceof Array){this.setOverflowX(bl[0]);
this.setOverflowY(bl[1]);
}else{this.setOverflowX(bl);
this.setOverflowY(bm);
}},resetOverflow:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,y);
this.resetOverflowX();
this.resetOverflowY();
},setOverflowX:function(k){qx.log.Logger.deprecatedMethodWarning(arguments.callee,y);

if(qx.core.Variant.isSet(u,X)){qx.core.Assert.assertInArray(k,[r,s,V,w,null]);
}this.getContentElement().setStyle(ba,k);
},getOverflowX:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,y);
return this.getContentElement().getStyle(ba);
},initOverflowX:function(bk){qx.log.Logger.deprecatedMethodWarning(arguments.callee,y);
this.setOverflowX(bk);
},resetOverflowX:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,y);
this.setOverflowX(null);
},setOverflowY:function(i){qx.log.Logger.deprecatedMethodWarning(arguments.callee,y);

if(qx.core.Variant.isSet(u,X)){qx.core.Assert.assertInArray(i,[r,s,V,w,null]);
}this.getContentElement().setStyle(p,i);
},getOverflowY:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,y);
return this.getContentElement().getStyle(p);
},initOverflowY:function(j){qx.log.Logger.deprecatedMethodWarning(arguments.callee,y);
this.setOverflowY(j);
},resetOverflowY:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,y);
this.setOverflowY(null);
}},destruct:function(){this._disposeObjects(M);
qx.event.Registration.removeListener(document.body,v,this.block,this,true);
qx.event.Registration.removeListener(document.body,bd,this.release,this,true);
qx.event.Registration.removeListener(document.body,bc,this.release,this,true);
}});
})();
(function(){var e="source",d="name",c="qx.html.Iframe",b="qx.event.type.Event",a="iframe";
qx.Class.define(c,{extend:qx.html.Element,construct:function(g,h,i){qx.html.Element.call(this,a,h,i);
this._setProperty(e,g);
},events:{"load":b},members:{_applyProperty:function(name,j){qx.html.Element.prototype._applyProperty.call(this,name,j);

if(name==e){var k=this.getDomElement();
qx.bom.Iframe.setSource(k,j);
}},_createDomElement:function(){return qx.bom.Iframe.create(this._content);
},getWindow:function(){var p=this.getDomElement();

if(p){return qx.bom.Iframe.getWindow(p);
}else{return null;
}},getDocument:function(){var l=this.getDomElement();

if(l){return qx.bom.Iframe.getDocument(l);
}else{return null;
}},getBody:function(){var f=this.getDomElement();

if(f){return qx.bom.Iframe.getBody(f);
}else{return null;
}},setSource:function(m){this._setProperty(e,m);
return this;
},getSource:function(){return this._getProperty(e);
},setName:function(name){this.setAttribute(d,name);
return this;
},getName:function(){return this.getAttribute(d);
},reload:function(){var o=this.getDomElement();

if(o){var n=this.getSource();
this.setSource(null);
this.setSource(n);
}}}});
})();
(function(){var k="Number",j="_applyInsets",i="abstract",h="insetRight",g="insetTop",f="qx.debug",e="insetBottom",d="qx.ui.decoration.Abstract",c="shorthand",b="on",a="insetLeft";
qx.Class.define(d,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],type:i,properties:{insetLeft:{check:k,nullable:true,apply:j},insetRight:{check:k,nullable:true,apply:j},insetBottom:{check:k,nullable:true,apply:j},insetTop:{check:k,nullable:true,apply:j},insets:{group:[g,h,e,a],mode:c}},members:{__na:null,_getDefaultInsets:function(){throw new Error("Abstract method called.");
},_isInitialized:function(){throw new Error("Abstract method called.");
},_resetInsets:function(){this.__na=null;
},getInsets:function(){if(this.__na){return this.__na;
}var l=this._getDefaultInsets();
return this.__na={left:this.getInsetLeft()==null?l.left:this.getInsetLeft(),right:this.getInsetRight()==null?l.right:this.getInsetRight(),bottom:this.getInsetBottom()==null?l.bottom:this.getInsetBottom(),top:this.getInsetTop()==null?l.top:this.getInsetTop()};
},_applyInsets:function(){if(qx.core.Variant.isSet(f,b)){if(this._isInitialized()){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}this.__na=null;
}},destruct:function(){this.__na=null;
}});
})();
(function(){var s="_applyBackground",r="repeat",q="mshtml",p="on",o="backgroundPositionX",n="",m="backgroundPositionY",l="qx.debug",k="no-repeat",j="scale",d=" ",i="repeat-x",g="qx.client",c="repeat-y",b="hidden",f="qx.ui.decoration.MBackgroundImage",e="String",h='"></div>',a='<div style="';
qx.Mixin.define(f,{properties:{backgroundImage:{check:e,nullable:true,apply:s},backgroundRepeat:{check:[r,i,c,k,j],init:r,apply:s},backgroundPositionX:{nullable:true,apply:s},backgroundPositionY:{nullable:true,apply:s},backgroundPosition:{group:[m,o]}},members:{_generateBackgroundMarkup:function(t){var x=n;
var w=this.getBackgroundImage();
var v=this.getBackgroundRepeat();
var top=this.getBackgroundPositionY();

if(top==null){top=0;
}var y=this.getBackgroundPositionX();

if(y==null){y=0;
}t.backgroundPosition=y+d+top;
if(w){var u=qx.util.AliasManager.getInstance().resolve(w);
x=qx.bom.element.Decoration.create(u,v,t);
}else{if(t){if(qx.core.Variant.isSet(g,q)){if(qx.bom.client.Engine.VERSION<7||qx.bom.client.Feature.QUIRKS_MODE){t.overflow=b;
}}x=a+qx.bom.element.Style.compile(t)+h;
}}return x;
},_applyBackground:function(){if(qx.core.Variant.isSet(l,p)){if(this._isInitialized()){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}}}});
})();
(function(){var h="px",g="qx.ui.decoration.Background",f="",e="qx.debug",d="_applyStyle",c="on",b="Color",a="absolute";
qx.Class.define(g,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(o){qx.ui.decoration.Abstract.call(this);

if(o!=null){this.setBackgroundColor(o);
}},properties:{backgroundColor:{check:b,nullable:true,apply:d}},members:{__nf:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__nf;
},getMarkup:function(){if(this.__nf){return this.__nf;
}var p={position:a,top:0,left:0};
var q=this._generateBackgroundMarkup(p);
return this.__nf=q;
},resize:function(i,j,k){i.style.width=j+h;
i.style.height=k+h;
},tint:function(l,m){var n=qx.theme.manager.Color.getInstance();

if(m==null){m=this.getBackgroundColor();
}l.style.backgroundColor=n.resolve(m)||f;
},_applyStyle:function(){if(qx.core.Variant.isSet(e,c)){if(this._isInitialized()){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}}},destruct:function(){this.__nf=null;
}});
})();
(function(){var i="auto",h="overflowX",g="visible",f="hidden",e="scroll",d="overflowY",c="_applyOverflowX",b="_applyOverflowY",a="qx.ui.core.MNativeOverflow";
qx.Mixin.define(a,{properties:{overflowX:{check:[f,g,e,i],nullable:true,apply:c},overflowY:{check:[f,g,e,i],nullable:true,apply:b},overflow:{group:[h,d]}},members:{_applyOverflowX:function(j){this.getContentElement().setStyle(h,j);
},_applyOverflowY:function(k){this.getContentElement().setStyle(d,k);
}}});
})();
(function(){var o="none",n="text",m="",l="userSelect",k="color",j="String",i="0px",h="webkit",g="changeHtml",f="_applyCssClass",c="class",e="qx.ui.embed.Html",d="_applyHtml",b="qx.client",a="html";
qx.Class.define(e,{extend:qx.ui.core.Widget,include:[qx.ui.core.MNativeOverflow],construct:function(A){qx.ui.core.Widget.call(this);

if(A!=null){this.setHtml(A);
}},properties:{html:{check:j,apply:d,event:g,nullable:true},cssClass:{check:j,init:m,apply:f},selectable:{refine:true,init:true},focusable:{refine:true,init:true}},members:{getFocusElement:function(){return this.getContentElement();
},_applyHtml:function(u,v){var w=this.getContentElement();
w.setAttribute(a,u||m);
w.setStyles({"padding":i,"border":o});
},_applyCssClass:function(s,t){this.getContentElement().setAttribute(c,s);
},_applySelectable:function(x){qx.ui.core.Widget.prototype._applySelectable.call(this,x);
if(qx.core.Variant.isSet(b,h)){this.getContainerElement().setStyle(l,x?n:o);
this.getContentElement().setStyle(l,x?n:o);
}},_applyFont:function(p,q){var r=p?qx.theme.manager.Font.getInstance().resolve(p).getStyles():qx.bom.Font.getDefaultStyles();
this.getContentElement().setStyles(r);
},_applyTextColor:function(y,z){if(y){this.getContentElement().setStyle(k,qx.theme.manager.Color.getInstance().resolve(y));
}else{this.getContentElement().removeStyle(k);
}}}});
})();
(function(){var s="",r='.qxappender .type-array{color:#CC3E8A;font-weight:bold;}',q='.qxappender .type-instance{color:#565656;font-weight:bold}',p="qx.log.appender.Element",o='.qxappender .level-info{background:#DEEDFA}',n='.qxappender .type-stringify{color:#565656;font-weight:bold}',m='.qxappender .type-number{color:#155791;font-weight:normal;}',l="qxappender",k='.qxappender .type-map{color:#CC3E8A;font-weight:bold;}',j='.qxappender .type-class{color:#5F3E8A;font-weight:bold}',e='.qxappender .type-boolean{color:#15BC91;font-weight:normal;}',i='.qxappender .level-error{background:#FFE2D5}',h='.qxappender .level-debug{background:white}',d='.qxappender .type-key{color:#565656;font-style:italic}',c='.qxappender .level-user{background:#E3EFE9}',g='.qxappender .level-warn{background:#FFF7D5}',f='.qxappender .type-string{color:black;font-weight:normal;}';
qx.Class.define(p,{extend:qx.core.Object,construct:function(a){qx.core.Object.call(this);
var b=[h,o,g,i,c,f,m,e,r,k,d,j,q,n];
qx.bom.Stylesheet.createElement(b.join(s));
qx.log.Logger.register(this);
},members:{__ui:null,setElement:function(w){this.clear();
if(w){qx.bom.element.Class.add(w,l);
}this.__ui=w;
},clear:function(){var t=this.__ui;
if(t){t.innerHTML=s;
}},process:function(u){var v=this.__ui;

if(!v){return;
}v.appendChild(qx.log.appender.Util.toHtml(u));
v.scrollTop=v.scrollHeight;
}},destruct:function(){this.__ui=null;
}});
})();
(function(){var n="default",m="native",k="",j=" ",h="\\b",g="(\\s|$)",f="(^|\\s)",e="g",d="qx.bom.element.Class",c="$2",b="\\b|\\b";
qx.Class.define(d,{statics:{__rM:/\s+/g,__rN:/^\s+|\s+$/g,add:qx.lang.Object.select(qx.bom.client.Feature.HTML5_CLASSLIST?m:n,{"native":function(a,name){a.classList.add(name);
return name;
},"default":function(I,name){if(!this.has(I,name)){I.className+=(I.className?j:k)+name;
}return name;
}}),addClasses:qx.lang.Object.select(qx.bom.client.Feature.HTML5_CLASSLIST?m:n,{"native":function(G,H){for(var i=0;i<H.length;i++){G.classList.add(H[i]);
}return G.className;
},"default":function(o,p){var q={};
var s;
var r=o.className;

if(r){s=r.split(this.__rM);

for(var i=0,l=s.length;i<l;i++){q[s[i]]=true;
}
for(var i=0,l=p.length;i<l;i++){if(!q[p[i]]){s.push(p[i]);
}}}else{s=p;
}return o.className=s.join(j);
}}),get:function(M){return M.className;
},has:qx.lang.Object.select(qx.bom.client.Feature.HTML5_CLASSLIST?m:n,{"native":function(F,name){return F.classList.contains(name);
},"default":function(v,name){var w=new RegExp(f+name+g);
return w.test(v.className);
}}),remove:qx.lang.Object.select(qx.bom.client.Feature.HTML5_CLASSLIST?m:n,{"native":function(J,name){J.classList.remove(name);
return name;
},"default":function(K,name){var L=new RegExp(f+name+g);
K.className=K.className.replace(L,c);
return name;
}}),removeClasses:qx.lang.Object.select(qx.bom.client.Feature.HTML5_CLASSLIST?m:n,{"native":function(t,u){for(var i=0;i<u.length;i++){t.classList.remove(u[i]);
}return t.className;
},"default":function(x,y){var z=new RegExp(h+y.join(b)+h,e);
return x.className=x.className.replace(z,k).replace(this.__rN,k).replace(this.__rM,j);
}}),replace:function(A,B,C){this.remove(A,B);
return this.add(A,C);
},toggle:qx.lang.Object.select(qx.bom.client.Feature.HTML5_CLASSLIST?m:n,{"native":function(D,name,E){if(E===undefined){D.classList.toggle(name);
}else{E?this.add(D,name):this.remove(D,name);
}return name;
},"default":function(N,name,O){if(O==null){O=!this.has(N,name);
}O?this.add(N,name):this.remove(N,name);
return name;
}})}});
})();
(function(){var b="qx.nativeScrollBars",a="qx.ui.core.scroll.MScrollBarFactory";
qx.core.Setting.define(b,false);
qx.Mixin.define(a,{members:{_createScrollBar:function(c){if(qx.core.Setting.get(b)){return new qx.ui.core.scroll.NativeScrollBar(c);
}else{return new qx.ui.core.scroll.ScrollBar(c);
}}}});
})();
(function(){var V="scrollbar-y",U="scrollbar-x",T="pane",S="auto",R="corner",Q="on",P="changeVisibility",O="scroll",N="_computeScrollbars",M="off",F="scrollY",L="qx.ui.core.scroll.AbstractScrollArea",I="abstract",D="update",C="scrollX",H="mousewheel",G="scrollbarY",J="scrollbarX",B="horizontal",K="scrollarea",E="vertical";
qx.Class.define(L,{extend:qx.ui.core.Widget,include:qx.ui.core.scroll.MScrollBarFactory,type:I,construct:function(){qx.ui.core.Widget.call(this);
var y=new qx.ui.layout.Grid();
y.setColumnFlex(0,1);
y.setRowFlex(0,1);
this._setLayout(y);
this.addListener(H,this._onMouseWheel,this);
},properties:{appearance:{refine:true,init:K},width:{refine:true,init:100},height:{refine:true,init:200},scrollbarX:{check:[S,Q,M],init:S,themeable:true,apply:N},scrollbarY:{check:[S,Q,M],init:S,themeable:true,apply:N},scrollbar:{group:[J,G]}},members:{_createChildControlImpl:function(f){var g;

switch(f){case T:g=new qx.ui.core.scroll.ScrollPane();
g.addListener(D,this._computeScrollbars,this);
g.addListener(C,this._onScrollPaneX,this);
g.addListener(F,this._onScrollPaneY,this);
this._add(g,{row:0,column:0});
break;
case U:g=this._createScrollBar(B);
g.setMinWidth(0);
g.exclude();
g.addListener(O,this._onScrollBarX,this);
g.addListener(P,this._onChangeScrollbarXVisibility,this);
this._add(g,{row:1,column:0});
break;
case V:g=this._createScrollBar(E);
g.setMinHeight(0);
g.exclude();
g.addListener(O,this._onScrollBarY,this);
g.addListener(P,this._onChangeScrollbarYVisibility,this);
this._add(g,{row:0,column:1});
break;
case R:g=new qx.ui.core.Widget();
g.setWidth(0);
g.setHeight(0);
g.exclude();
this._add(g,{row:1,column:1});
break;
}return g||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,f);
},getPaneSize:function(){return this.getChildControl(T).getInnerSize();
},getItemTop:function(c){return this.getChildControl(T).getItemTop(c);
},getItemBottom:function(x){return this.getChildControl(T).getItemBottom(x);
},getItemLeft:function(ba){return this.getChildControl(T).getItemLeft(ba);
},getItemRight:function(v){return this.getChildControl(T).getItemRight(v);
},scrollToX:function(z){qx.ui.core.queue.Manager.flush();
this.getChildControl(U).scrollTo(z);
},scrollByX:function(d){qx.ui.core.queue.Manager.flush();
this.getChildControl(U).scrollBy(d);
},getScrollX:function(){var A=this.getChildControl(U,true);
return A?A.getPosition():0;
},scrollToY:function(W){qx.ui.core.queue.Manager.flush();
this.getChildControl(V).scrollTo(W);
},scrollByY:function(r){qx.ui.core.queue.Manager.flush();
this.getChildControl(V).scrollBy(r);
},getScrollY:function(){var w=this.getChildControl(V,true);
return w?w.getPosition():0;
},_onScrollBarX:function(e){this.getChildControl(T).scrollToX(e.getData());
},_onScrollBarY:function(e){this.getChildControl(T).scrollToY(e.getData());
},_onScrollPaneX:function(e){this.scrollToX(e.getData());
},_onScrollPaneY:function(e){this.scrollToY(e.getData());
},_onMouseWheel:function(e){var t=this._isChildControlVisible(U);
var u=this._isChildControlVisible(V);
var s=(u)?this.getChildControl(V,true):(t?this.getChildControl(U,true):null);

if(s){s.scrollBySteps(e.getWheelDelta());
}e.stop();
},_onChangeScrollbarXVisibility:function(e){var X=this._isChildControlVisible(U);
var Y=this._isChildControlVisible(V);

if(!X){this.scrollToX(0);
}X&&Y?this._showChildControl(R):this._excludeChildControl(R);
},_onChangeScrollbarYVisibility:function(e){var a=this._isChildControlVisible(U);
var b=this._isChildControlVisible(V);

if(!b){this.scrollToY(0);
}a&&b?this._showChildControl(R):this._excludeChildControl(R);
},_computeScrollbars:function(){var n=this.getChildControl(T);
var content=n.getChildren()[0];

if(!content){this._excludeChildControl(U);
this._excludeChildControl(V);
return;
}var h=this.getInnerSize();
var m=n.getInnerSize();
var k=n.getScrollSize();
if(!m||!k){return;
}var o=this.getScrollbarX();
var p=this.getScrollbarY();

if(o===S&&p===S){var l=k.width>h.width;
var q=k.height>h.height;
if((l||q)&&!(l&&q)){if(l){q=k.height>m.height;
}else if(q){l=k.width>m.width;
}}}else{var l=o===Q;
var q=p===Q;
if(k.width>(l?m.width:h.width)&&o===S){l=true;
}
if(k.height>(l?m.height:h.height)&&p===S){q=true;
}}if(l){var j=this.getChildControl(U);
j.show();
j.setMaximum(Math.max(0,k.width-m.width));
j.setKnobFactor((k.width===0)?0:m.width/k.width);
}else{this._excludeChildControl(U);
}
if(q){var i=this.getChildControl(V);
i.show();
i.setMaximum(Math.max(0,k.height-m.height));
i.setKnobFactor((k.height===0)?0:m.height/k.height);
}else{this._excludeChildControl(V);
}}}});
})();
(function(){var a="qx.ui.core.IMultiSelection";
qx.Interface.define(a,{extend:qx.ui.core.ISingleSelection,members:{selectAll:function(){return true;
},addToSelection:function(c){return arguments.length==1;
},removeFromSelection:function(b){return arguments.length==1;
}}});
})();
(function(){var G="single",F="Boolean",E="one",D="changeSelection",C="mouseup",B="mousedown",A="losecapture",z="multi",y="_applyQuickSelection",x="mouseover",q="_applySelectionMode",w="_applyDragSelection",t="qx.ui.core.MMultiSelectionHandling",p="removeItem",o="__mG",s="keypress",r="qx.event.type.Data",u="addItem",n="additive",v="mousemove";
qx.Mixin.define(t,{construct:function(){var M=this.SELECTION_MANAGER;
var L=this.__mG=new M(this);
this.addListener(B,L.handleMouseDown,L);
this.addListener(C,L.handleMouseUp,L);
this.addListener(x,L.handleMouseOver,L);
this.addListener(v,L.handleMouseMove,L);
this.addListener(A,L.handleLoseCapture,L);
this.addListener(s,L.handleKeyPress,L);
this.addListener(u,L.handleAddItem,L);
this.addListener(p,L.handleRemoveItem,L);
L.addListener(D,this._onSelectionChange,this);
},events:{"changeSelection":r},properties:{selectionMode:{check:[G,z,n,E],init:G,apply:q},dragSelection:{check:F,init:false,apply:w},quickSelection:{check:F,init:false,apply:y}},members:{__mG:null,selectAll:function(){this.__mG.selectAll();
},isSelected:function(l){if(!qx.ui.core.Widget.contains(this,l)){throw new Error("Could not test if "+l+" is selected, because it is not a child element!");
}return this.__mG.isItemSelected(l);
},addToSelection:function(a){if(!qx.ui.core.Widget.contains(this,a)){throw new Error("Could not add + "+a+" to selection, because it is not a child element!");
}this.__mG.addItem(a);
},removeFromSelection:function(k){if(!qx.ui.core.Widget.contains(this,k)){throw new Error("Could not remove "+k+" from selection, because it is not a child element!");
}this.__mG.removeItem(k);
},selectRange:function(H,I){this.__mG.selectItemRange(H,I);
},resetSelection:function(){this.__mG.clearSelection();
},setSelection:function(f){for(var i=0;i<f.length;i++){if(!qx.ui.core.Widget.contains(this,f[i])){throw new Error("Could not select "+f[i]+", because it is not a child element!");
}}
if(f.length===0){this.resetSelection();
}else{var g=this.getSelection();

if(!qx.lang.Array.equals(g,f)){this.__mG.replaceSelection(f);
}}},getSelection:function(){return this.__mG.getSelection();
},getSortedSelection:function(){return this.__mG.getSortedSelection();
},isSelectionEmpty:function(){return this.__mG.isSelectionEmpty();
},getSelectionContext:function(){return this.__mG.getSelectionContext();
},_getManager:function(){return this.__mG;
},getSelectables:function(b){return this.__mG.getSelectables(b);
},invertSelection:function(){this.__mG.invertSelection();
},_getLeadItem:function(){var m=this.__mG.getMode();

if(m===G||m===E){return this.__mG.getSelectedItem();
}else{return this.__mG.getLeadItem();
}},_applySelectionMode:function(c,d){this.__mG.setMode(c);
},_applyDragSelection:function(h,j){this.__mG.setDrag(h);
},_applyQuickSelection:function(J,K){this.__mG.setQuick(J);
},_onSelectionChange:function(e){this.fireDataEvent(D,e.getData());
}},destruct:function(){this._disposeObjects(o);
}});
})();
(function(){var p="Integer",o="_applyContentPadding",n="resetPaddingRight",m="setPaddingBottom",l="resetPaddingTop",k="qx.ui.core.MContentPadding",j="resetPaddingLeft",i="setPaddingTop",h="setPaddingRight",g="resetPaddingBottom",c="contentPaddingLeft",f="setPaddingLeft",e="contentPaddingTop",b="shorthand",a="contentPaddingRight",d="contentPaddingBottom";
qx.Mixin.define(k,{properties:{contentPaddingTop:{check:p,init:0,apply:o,themeable:true},contentPaddingRight:{check:p,init:0,apply:o,themeable:true},contentPaddingBottom:{check:p,init:0,apply:o,themeable:true},contentPaddingLeft:{check:p,init:0,apply:o,themeable:true},contentPadding:{group:[e,a,d,c],mode:b,themeable:true}},members:{__ko:{contentPaddingTop:i,contentPaddingRight:h,contentPaddingBottom:m,contentPaddingLeft:f},__kp:{contentPaddingTop:l,contentPaddingRight:n,contentPaddingBottom:g,contentPaddingLeft:j},_applyContentPadding:function(q,r,name){var s=this._getContentPaddingTarget();

if(q==null){var t=this.__kp[name];
s[t]();
}else{var u=this.__ko[name];
s[u](q);
}}}});
})();
(function(){var co="one",cn="single",cm="selected",cl="additive",ck="multi",cj="PageUp",ci="under",ch="Left",cg="lead",cf="Down",cM="Up",cL="Boolean",cK="PageDown",cJ="anchor",cI="End",cH="Home",cG="Right",cF="right",cE="click",cD="above",cv="left",cw="Escape",ct="A",cu="Space",cr="_applyMode",cs="interval",cp="changeSelection",cq="qx.event.type.Data",cx="quick",cy="__oj",cA="key",cz="abstract",cC="drag",cB="qx.ui.core.selection.Abstract";
qx.Class.define(cB,{type:cz,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__og={};
},events:{"changeSelection":cq},properties:{mode:{check:[cn,ck,cl,co],init:cn,apply:cr},drag:{check:cL,init:false},quick:{check:cL,init:false}},members:{__oh:0,__oi:0,__oj:null,__ok:null,__ol:null,__om:null,__on:null,__oo:null,__op:null,__oq:null,__or:null,__os:null,__ot:null,__ou:null,__ov:null,__ow:null,__ox:null,__og:null,__oy:null,__oz:null,_userInteraction:false,getSelectionContext:function(){return this.__ow;
},selectAll:function(){var K=this.getMode();

if(K==cn||K==co){throw new Error("Can not select all items in selection mode: "+K);
}this._selectAllItems();
this._fireChange();
},selectItem:function(cN){this._setSelectedItem(cN);
var cO=this.getMode();

if(cO!==cn&&cO!==co){this._setLeadItem(cN);
this._setAnchorItem(cN);
}this._scrollItemIntoView(cN);
this._fireChange();
},addItem:function(cP){var cQ=this.getMode();

if(cQ===cn||cQ===co){this._setSelectedItem(cP);
}else{if(!this._getAnchorItem()){this._setAnchorItem(cP);
}this._setLeadItem(cP);
this._addToSelection(cP);
}this._scrollItemIntoView(cP);
this._fireChange();
},removeItem:function(cR){this._removeFromSelection(cR);

if(this.getMode()===co&&this.isSelectionEmpty()){var cS=this._getFirstSelectable();

if(cS){this.addItem(cS);
}if(cS==cR){return;
}}
if(this.getLeadItem()==cR){this._setLeadItem(null);
}
if(this._getAnchorItem()==cR){this._setAnchorItem(null);
}this._fireChange();
},selectItemRange:function(bU,bV){var bW=this.getMode();

if(bW==cn||bW==co){throw new Error("Can not select multiple items in selection mode: "+bW);
}this._selectItemRange(bU,bV);
this._setAnchorItem(bU);
this._setLeadItem(bV);
this._scrollItemIntoView(bV);
this._fireChange();
},clearSelection:function(){if(this.getMode()==co){return;
}this._clearSelection();
this._setLeadItem(null);
this._setAnchorItem(null);
this._fireChange();
},replaceSelection:function(bh){var bi=this.getMode();

if(bi==co||bi===cn){if(bh.length>1){throw new Error("Could not select more than one items in mode: "+bi+"!");
}
if(bh.length==1){this.selectItem(bh[0]);
}else{this.clearSelection();
}return;
}else{this._replaceMultiSelection(bh);
}},getSelectedItem:function(){var bT=this.getMode();

if(bT===cn||bT===co){return this._getSelectedItem()||null;
}throw new Error("The method getSelectedItem() is only supported in 'single' and 'one' selection mode!");
},getSelection:function(){return qx.lang.Object.getValues(this.__og);
},getSortedSelection:function(){var ba=this.getSelectables();
var Y=qx.lang.Object.getValues(this.__og);
Y.sort(function(a,b){return ba.indexOf(a)-ba.indexOf(b);
});
return Y;
},isItemSelected:function(bx){var by=this._selectableToHashCode(bx);
return this.__og[by]!==undefined;
},isSelectionEmpty:function(){return qx.lang.Object.isEmpty(this.__og);
},invertSelection:function(){var d=this.getMode();

if(d===cn||d===co){throw new Error("The method invertSelection() is only supported in 'multi' and 'additive' selection mode!");
}var c=this.getSelectables();

for(var i=0;i<c.length;i++){this._toggleInSelection(c[i]);
}this._fireChange();
},_setLeadItem:function(bY){var ca=this.__ox;

if(ca!==null){this._styleSelectable(ca,cg,false);
}
if(bY!==null){this._styleSelectable(bY,cg,true);
}this.__ox=bY;
},getLeadItem:function(){return this.__ox!==null?this.__ox:null;
},_setAnchorItem:function(g){var h=this.__oy;

if(h){this._styleSelectable(h,cJ,false);
}
if(g){this._styleSelectable(g,cJ,true);
}this.__oy=g;
},_getAnchorItem:function(){return this.__oy!==null?this.__oy:null;
},_isSelectable:function(bX){throw new Error("Abstract method call: _isSelectable()");
},_getSelectableFromMouseEvent:function(event){var m=event.getTarget();
return this._isSelectable(m)?m:null;
},_selectableToHashCode:function(X){throw new Error("Abstract method call: _selectableToHashCode()");
},_styleSelectable:function(L,M,N){throw new Error("Abstract method call: _styleSelectable()");
},_capture:function(){throw new Error("Abstract method call: _capture()");
},_releaseCapture:function(){throw new Error("Abstract method call: _releaseCapture()");
},_getLocation:function(){throw new Error("Abstract method call: _getLocation()");
},_getDimension:function(){throw new Error("Abstract method call: _getDimension()");
},_getSelectableLocationX:function(O){throw new Error("Abstract method call: _getSelectableLocationX()");
},_getSelectableLocationY:function(cY){throw new Error("Abstract method call: _getSelectableLocationY()");
},_getScroll:function(){throw new Error("Abstract method call: _getScroll()");
},_scrollBy:function(v,w){throw new Error("Abstract method call: _scrollBy()");
},_scrollItemIntoView:function(f){throw new Error("Abstract method call: _scrollItemIntoView()");
},getSelectables:function(j){throw new Error("Abstract method call: getSelectables()");
},_getSelectableRange:function(bb,bc){throw new Error("Abstract method call: _getSelectableRange()");
},_getFirstSelectable:function(){throw new Error("Abstract method call: _getFirstSelectable()");
},_getLastSelectable:function(){throw new Error("Abstract method call: _getLastSelectable()");
},_getRelatedSelectable:function(cW,cX){throw new Error("Abstract method call: _getRelatedSelectable()");
},_getPage:function(bD,bE){throw new Error("Abstract method call: _getPage()");
},_applyMode:function(G,H){this._setLeadItem(null);
this._setAnchorItem(null);
this._clearSelection();
if(G===co){var I=this._getFirstSelectable();

if(I){this._setSelectedItem(I);
this._scrollItemIntoView(I);
}}this._fireChange();
},handleMouseOver:function(event){this._userInteraction=true;

if(!this.getQuick()){this._userInteraction=false;
return;
}var be=this.getMode();

if(be!==co&&be!==cn){this._userInteraction=false;
return;
}var bd=this._getSelectableFromMouseEvent(event);

if(bd===null){this._userInteraction=false;
return;
}this._setSelectedItem(bd);
this._fireChange(cx);
this._userInteraction=false;
},handleMouseDown:function(event){this._userInteraction=true;
var bt=this._getSelectableFromMouseEvent(event);

if(bt===null){this._userInteraction=false;
return;
}var bv=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var bs=event.isShiftPressed();
if(this.isItemSelected(bt)&&!bs&&!bv&&!this.getDrag()){this.__oz=bt;
this._userInteraction=false;
return;
}else{this.__oz=null;
}this._scrollItemIntoView(bt);
switch(this.getMode()){case cn:case co:this._setSelectedItem(bt);
break;
case cl:this._setLeadItem(bt);
this._setAnchorItem(bt);
this._toggleInSelection(bt);
break;
case ck:this._setLeadItem(bt);
if(bs){var bu=this._getAnchorItem();

if(bu===null){bu=this._getFirstSelectable();
this._setAnchorItem(bu);
}this._selectItemRange(bu,bt,bv);
}else if(bv){this._setAnchorItem(bt);
this._toggleInSelection(bt);
}else{this._setAnchorItem(bt);
this._setSelectedItem(bt);
}break;
}var bw=this.getMode();

if(this.getDrag()&&bw!==cn&&bw!==co&&!bs&&!bv){this.__on=this._getLocation();
this.__ok=this._getScroll();
this.__oo=event.getDocumentLeft()+this.__ok.left;
this.__op=event.getDocumentTop()+this.__ok.top;
this.__oq=true;
this._capture();
}this._fireChange(cE);
this._userInteraction=false;
},handleMouseUp:function(event){this._userInteraction=true;
var ce=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var cb=event.isShiftPressed();

if(!ce&&!cb&&this.__oz){var cc=this._getSelectableFromMouseEvent(event);

if(cc===null||!this.isItemSelected(cc)){this._userInteraction=false;
return;
}var cd=this.getMode();

if(cd===cl){this._removeFromSelection(cc);
}else{this._setSelectedItem(cc);

if(this.getMode()===ck){this._setLeadItem(cc);
this._setAnchorItem(cc);
}}this._userInteraction=false;
}this._cleanup();
},handleLoseCapture:function(event){this._cleanup();
},handleMouseMove:function(event){if(!this.__oq){return;
}this.__or=event.getDocumentLeft();
this.__os=event.getDocumentTop();
this._userInteraction=true;
var bk=this.__or+this.__ok.left;

if(bk>this.__oo){this.__ot=1;
}else if(bk<this.__oo){this.__ot=-1;
}else{this.__ot=0;
}var bj=this.__os+this.__ok.top;

if(bj>this.__op){this.__ou=1;
}else if(bj<this.__op){this.__ou=-1;
}else{this.__ou=0;
}var location=this.__on;

if(this.__or<location.left){this.__oh=this.__or-location.left;
}else if(this.__or>location.right){this.__oh=this.__or-location.right;
}else{this.__oh=0;
}
if(this.__os<location.top){this.__oi=this.__os-location.top;
}else if(this.__os>location.bottom){this.__oi=this.__os-location.bottom;
}else{this.__oi=0;
}if(!this.__oj){this.__oj=new qx.event.Timer(100);
this.__oj.addListener(cs,this._onInterval,this);
}this.__oj.start();
this._autoSelect();
event.stopPropagation();
this._userInteraction=false;
},handleAddItem:function(e){var J=e.getData();

if(this.getMode()===co&&this.isSelectionEmpty()){this.addItem(J);
}},handleRemoveItem:function(e){this.removeItem(e.getData());
},_cleanup:function(){if(!this.getDrag()&&this.__oq){return;
}if(this.__ov){this._fireChange(cE);
}delete this.__oq;
delete this.__ol;
delete this.__om;
this._releaseCapture();
if(this.__oj){this.__oj.stop();
}},_onInterval:function(e){this._scrollBy(this.__oh,this.__oi);
this.__ok=this._getScroll();
this._autoSelect();
},_autoSelect:function(){var bN=this._getDimension();
var bG=Math.max(0,Math.min(this.__or-this.__on.left,bN.width))+this.__ok.left;
var bF=Math.max(0,Math.min(this.__os-this.__on.top,bN.height))+this.__ok.top;
if(this.__ol===bG&&this.__om===bF){return;
}this.__ol=bG;
this.__om=bF;
var bP=this._getAnchorItem();
var bI=bP;
var bL=this.__ot;
var bO,bH;

while(bL!==0){bO=bL>0?this._getRelatedSelectable(bI,cF):this._getRelatedSelectable(bI,cv);
if(bO!==null){bH=this._getSelectableLocationX(bO);
if((bL>0&&bH.left<=bG)||(bL<0&&bH.right>=bG)){bI=bO;
continue;
}}break;
}var bM=this.__ou;
var bK,bJ;

while(bM!==0){bK=bM>0?this._getRelatedSelectable(bI,ci):this._getRelatedSelectable(bI,cD);
if(bK!==null){bJ=this._getSelectableLocationY(bK);
if((bM>0&&bJ.top<=bF)||(bM<0&&bJ.bottom>=bF)){bI=bK;
continue;
}}break;
}var bQ=this.getMode();

if(bQ===ck){this._selectItemRange(bP,bI);
}else if(bQ===cl){if(this.isItemSelected(bP)){this._selectItemRange(bP,bI,true);
}else{this._deselectItemRange(bP,bI);
}this._setAnchorItem(bI);
}this._fireChange(cC);
},__oA:{Home:1,Down:1,Right:1,PageDown:1,End:1,Up:1,Left:1,PageUp:1},handleKeyPress:function(event){this._userInteraction=true;
var C,B;
var E=event.getKeyIdentifier();
var D=this.getMode();
var y=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var z=event.isShiftPressed();
var A=false;

if(E===ct&&y){if(D!==cn&&D!==co){this._selectAllItems();
A=true;
}}else if(E===cw){if(D!==cn&&D!==co){this._clearSelection();
A=true;
}}else if(E===cu){var x=this.getLeadItem();

if(x&&!z){if(y||D===cl){this._toggleInSelection(x);
}else{this._setSelectedItem(x);
}A=true;
}}else if(this.__oA[E]){A=true;

if(D===cn||D==co){C=this._getSelectedItem();
}else{C=this.getLeadItem();
}
if(C!==null){switch(E){case cH:B=this._getFirstSelectable();
break;
case cI:B=this._getLastSelectable();
break;
case cM:B=this._getRelatedSelectable(C,cD);
break;
case cf:B=this._getRelatedSelectable(C,ci);
break;
case ch:B=this._getRelatedSelectable(C,cv);
break;
case cG:B=this._getRelatedSelectable(C,cF);
break;
case cj:B=this._getPage(C,true);
break;
case cK:B=this._getPage(C,false);
break;
}}else{switch(E){case cH:case cf:case cG:case cK:B=this._getFirstSelectable();
break;
case cI:case cM:case ch:case cj:B=this._getLastSelectable();
break;
}}if(B!==null){switch(D){case cn:case co:this._setSelectedItem(B);
break;
case cl:this._setLeadItem(B);
break;
case ck:if(z){var F=this._getAnchorItem();

if(F===null){this._setAnchorItem(F=this._getFirstSelectable());
}this._setLeadItem(B);
this._selectItemRange(F,B,y);
}else{this._setAnchorItem(B);
this._setLeadItem(B);

if(!y){this._setSelectedItem(B);
}}break;
}this._scrollItemIntoView(B);
}}
if(A){event.stop();
this._fireChange(cA);
}this._userInteraction=false;
},_selectAllItems:function(){var W=this.getSelectables();

for(var i=0,l=W.length;i<l;i++){this._addToSelection(W[i]);
}},_clearSelection:function(){var bq=this.__og;

for(var br in bq){this._removeFromSelection(bq[br]);
}this.__og={};
},_selectItemRange:function(P,Q,R){var U=this._getSelectableRange(P,Q);
if(!R){var T=this.__og;
var V=this.__oB(U);

for(var S in T){if(!V[S]){this._removeFromSelection(T[S]);
}}}for(var i=0,l=U.length;i<l;i++){this._addToSelection(U[i]);
}},_deselectItemRange:function(bA,bB){var bC=this._getSelectableRange(bA,bB);

for(var i=0,l=bC.length;i<l;i++){this._removeFromSelection(bC[i]);
}},__oB:function(cT){var cV={};
var cU;

for(var i=0,l=cT.length;i<l;i++){cU=cT[i];
cV[this._selectableToHashCode(cU)]=cU;
}return cV;
},_getSelectedItem:function(){for(var k in this.__og){return this.__og[k];
}return null;
},_setSelectedItem:function(bl){if(this._isSelectable(bl)){var bm=this.__og;
var bn=this._selectableToHashCode(bl);

if(!bm[bn]||qx.lang.Object.hasMinLength(bm,2)){this._clearSelection();
this._addToSelection(bl);
}}},_addToSelection:function(bR){var bS=this._selectableToHashCode(bR);

if(!this.__og[bS]&&this._isSelectable(bR)){this.__og[bS]=bR;
this._styleSelectable(bR,cm,true);
this.__ov=true;
}},_toggleInSelection:function(bf){var bg=this._selectableToHashCode(bf);

if(!this.__og[bg]){this.__og[bg]=bf;
this._styleSelectable(bf,cm,true);
}else{delete this.__og[bg];
this._styleSelectable(bf,cm,false);
}this.__ov=true;
},_removeFromSelection:function(bo){var bp=this._selectableToHashCode(bo);

if(this.__og[bp]!=null){delete this.__og[bp];
this._styleSelectable(bo,cm,false);
this.__ov=true;
}},_replaceMultiSelection:function(n){var q=false;
var t,s;
var o={};

for(var i=0,l=n.length;i<l;i++){t=n[i];

if(this._isSelectable(t)){s=this._selectableToHashCode(t);
o[s]=t;
}}var u=n[0];
var p=t;
var r=this.__og;

for(var s in r){if(o[s]){delete o[s];
}else{t=r[s];
delete r[s];
this._styleSelectable(t,cm,false);
q=true;
}}for(var s in o){t=r[s]=o[s];
this._styleSelectable(t,cm,true);
q=true;
}if(!q){return false;
}this._scrollItemIntoView(p);
this._setLeadItem(u);
this._setAnchorItem(u);
this.__ov=true;
this._fireChange();
},_fireChange:function(bz){if(this.__ov){this.__ow=bz||null;
this.fireDataEvent(cp,this.getSelection());
delete this.__ov;
}}},destruct:function(){this._disposeObjects(cy);
this.__og=this.__oz=this.__oy=null;
this.__ox=null;
}});
})();
(function(){var k="vertical",j="under",h="above",g="qx.ui.core.selection.Widget",f="left",e="right";
qx.Class.define(g,{extend:qx.ui.core.selection.Abstract,construct:function(v){qx.ui.core.selection.Abstract.call(this);
this.__mW=v;
},members:{__mW:null,_isSelectable:function(R){return this._isItemSelectable(R)&&R.getLayoutParent()===this.__mW;
},_selectableToHashCode:function(Q){return Q.$$hash;
},_styleSelectable:function(D,E,F){F?D.addState(E):D.removeState(E);
},_capture:function(){this.__mW.capture();
},_releaseCapture:function(){this.__mW.releaseCapture();
},_isItemSelectable:function(P){if(this._userInteraction){return P.isVisible()&&P.isEnabled();
}else{return P.isVisible();
}},_getWidget:function(){return this.__mW;
},_getLocation:function(){var G=this.__mW.getContentElement().getDomElement();
return G?qx.bom.element.Location.get(G):null;
},_getDimension:function(){return this.__mW.getInnerSize();
},_getSelectableLocationX:function(H){var I=H.getBounds();

if(I){return {left:I.left,right:I.left+I.width};
}},_getSelectableLocationY:function(a){var b=a.getBounds();

if(b){return {top:b.top,bottom:b.top+b.height};
}},_getScroll:function(){return {left:0,top:0};
},_scrollBy:function(m,n){},_scrollItemIntoView:function(o){this.__mW.scrollChildIntoView(o);
},getSelectables:function(J){var K=false;

if(!J){K=this._userInteraction;
this._userInteraction=true;
}var N=this.__mW.getChildren();
var L=[];
var M;

for(var i=0,l=N.length;i<l;i++){M=N[i];

if(this._isItemSelectable(M)){L.push(M);
}}this._userInteraction=K;
return L;
},_getSelectableRange:function(x,y){if(x===y){return [x];
}var C=this.__mW.getChildren();
var z=[];
var B=false;
var A;

for(var i=0,l=C.length;i<l;i++){A=C[i];

if(A===x||A===y){if(B){z.push(A);
break;
}else{B=true;
}}
if(B&&this._isItemSelectable(A)){z.push(A);
}}return z;
},_getFirstSelectable:function(){var O=this.__mW.getChildren();

for(var i=0,l=O.length;i<l;i++){if(this._isItemSelectable(O[i])){return O[i];
}}return null;
},_getLastSelectable:function(){var w=this.__mW.getChildren();

for(var i=w.length-1;i>0;i--){if(this._isItemSelectable(w[i])){return w[i];
}}return null;
},_getRelatedSelectable:function(p,q){var t=this.__mW.getOrientation()===k;
var s=this.__mW.getChildren();
var r=s.indexOf(p);
var u;

if((t&&q===h)||(!t&&q===f)){for(var i=r-1;i>=0;i--){u=s[i];

if(this._isItemSelectable(u)){return u;
}}}else if((t&&q===j)||(!t&&q===e)){for(var i=r+1;i<s.length;i++){u=s[i];

if(this._isItemSelectable(u)){return u;
}}}return null;
},_getPage:function(c,d){if(d){return this._getFirstSelectable();
}else{return this._getLastSelectable();
}}},destruct:function(){this.__mW=null;
}});
})();
(function(){var b="qx.ui.core.selection.ScrollArea";
qx.Class.define(b,{extend:qx.ui.core.selection.Widget,members:{_isSelectable:function(s){return this._isItemSelectable(s)&&s.getLayoutParent()===this._getWidget().getChildrenContainer();
},_getDimension:function(){return this._getWidget().getPaneSize();
},_getScroll:function(){var a=this._getWidget();
return {left:a.getScrollX(),top:a.getScrollY()};
},_scrollBy:function(c,d){var e=this._getWidget();
e.scrollByX(c);
e.scrollByY(d);
},_getPage:function(f,g){var l=this.getSelectables();
var length=l.length;
var o=l.indexOf(f);
if(o===-1){throw new Error("Invalid lead item: "+f);
}var h=this._getWidget();
var q=h.getScrollY();
var innerHeight=h.getInnerSize().height;
var top,k,p;

if(g){var n=q;
var i=o;
while(1){for(;i>=0;i--){top=h.getItemTop(l[i]);
if(top<n){p=i+1;
break;
}}if(p==null){var r=this._getFirstSelectable();
return r==f?null:r;
}if(p>=o){n-=innerHeight+q-h.getItemBottom(f);
p=null;
continue;
}return l[p];
}}else{var m=innerHeight+q;
var i=o;
while(1){for(;i<length;i++){k=h.getItemBottom(l[i]);
if(k>m){p=i-1;
break;
}}if(p==null){var j=this._getLastSelectable();
return j==f?null:j;
}if(p<=o){m+=h.getItemTop(f)-q;
p=null;
continue;
}return l[p];
}}}}});
})();
(function(){var k="right",j="above",h="left",g="under",f="qx.ui.tree.SelectionManager";
qx.Class.define(f,{extend:qx.ui.core.selection.ScrollArea,members:{_getSelectableLocationY:function(l){var m=l.getBounds();

if(m){var top=this._getWidget().getItemTop(l);
return {top:top,bottom:top+m.height};
}},_isSelectable:function(x){return this._isItemSelectable(x)&&x instanceof qx.ui.tree.AbstractTreeItem;
},_getSelectableFromMouseEvent:function(event){return this._getWidget().getTreeItem(event.getTarget());
},getSelectables:function(r){var u=false;

if(!r){u=this._userInteraction;
this._userInteraction=true;
}var t=this._getWidget();
var v=[];

if(t.getRoot()!=null){var s=t.getRoot().getItems(true,!!r,t.getHideRoot());

for(var i=0;i<s.length;i++){if(this._isSelectable(s[i])){v.push(s[i]);
}}}this._userInteraction=u;
return v;
},_getSelectableRange:function(a,b){if(a===b){return [a];
}var c=this.getSelectables();
var d=c.indexOf(a);
var e=c.indexOf(b);

if(d<0||e<0){return [];
}
if(d<e){return c.slice(d,e+1);
}else{return c.slice(e,d+1);
}},_getFirstSelectable:function(){return this.getSelectables()[0]||null;
},_getLastSelectable:function(){var w=this.getSelectables();

if(w.length>0){return w[w.length-1];
}else{return null;
}},_getRelatedSelectable:function(n,o){var p=this._getWidget();
var q=null;

switch(o){case j:q=p.getPreviousNodeOf(n,false);
break;
case g:q=p.getNextNodeOf(n,false);
break;
case h:case k:break;
}
if(!q){return null;
}
if(this._isSelectable(q)){return q;
}else{return this._getRelatedSelectable(q,o);
}}}});
})();
(function(){var l="dblclick",k="click",j="Boolean",h="excluded",g="visible",f="qx.event.type.Data",d="_applyOpenMode",c="Space",b="Left",a="Enter",z="changeOpenMode",y="_applyRootOpenClose",x="changeSelection",w="qx.ui.tree.Tree",v="tree",u="_applyHideRoot",t="changeRoot",s="_applyRoot",r="__rl",q="keypress",o="none",p="pane",m="Right",n="qx.ui.tree.AbstractTreeItem";
qx.Class.define(w,{extend:qx.ui.core.scroll.AbstractScrollArea,implement:[qx.ui.core.IMultiSelection,qx.ui.form.IModelSelection,qx.ui.form.IForm],include:[qx.ui.core.MMultiSelectionHandling,qx.ui.core.MContentPadding,qx.ui.form.MModelSelection,qx.ui.form.MForm],construct:function(){qx.ui.core.scroll.AbstractScrollArea.call(this);
this.__rl=new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({allowShrinkY:false,allowGrowX:true});
this.getChildControl(p).add(this.__rl);
this.initOpenMode();
this.initRootOpenClose();
this.addListener(x,this._onChangeSelection,this);
this.addListener(q,this._onKeyPress,this);
},events:{addItem:f,removeItem:f},properties:{openMode:{check:[k,l,o],init:l,apply:d,event:z,themeable:true},root:{check:n,init:null,nullable:true,event:t,apply:s},hideRoot:{check:j,init:false,apply:u},rootOpenClose:{check:j,init:false,apply:y},appearance:{refine:true,init:v},focusable:{refine:true,init:true}},members:{__rl:null,SELECTION_MANAGER:qx.ui.tree.SelectionManager,getChildrenContainer:function(){return this.__rl;
},_applyRoot:function(be,bf){var bg=this.getChildrenContainer();

if(bf){bg.remove(bf);

if(bf.hasChildren()){bg.remove(bf.getChildrenContainer());
}}
if(be){bg.add(be);

if(be.hasChildren()){bg.add(be.getChildrenContainer());
}be.setVisibility(this.getHideRoot()?h:g);
be.recursiveAddToWidgetQueue();
}},_applyHideRoot:function(D,E){var F=this.getRoot();

if(!F){return;
}F.setVisibility(D?h:g);
F.recursiveAddToWidgetQueue();
},_applyRootOpenClose:function(N,O){var P=this.getRoot();

if(!P){return;
}P.recursiveAddToWidgetQueue();
},_getContentPaddingTarget:function(){return this.__rl;
},getNextNodeOf:function(H,I){if((I!==false||H.isOpen())&&H.hasChildren()){return H.getChildren()[0];
}
while(H){var parent=H.getParent();

if(!parent){return null;
}var K=parent.getChildren();
var J=K.indexOf(H);

if(J>-1&&J<K.length-1){return K[J+1];
}H=parent;
}return null;
},getPreviousNodeOf:function(V,W){var parent=V.getParent();

if(!parent){return null;
}
if(this.getHideRoot()){if(parent==this.getRoot()){if(parent.getChildren()[0]==V){return null;
}}}else{if(V==this.getRoot()){return null;
}}var ba=parent.getChildren();
var X=ba.indexOf(V);

if(X>0){var Y=ba[X-1];

while((W!==false||Y.isOpen())&&Y.hasChildren()){var bb=Y.getChildren();
Y=bb[bb.length-1];
}return Y;
}else{return parent;
}},getNextSiblingOf:function(A){if(A==this.getRoot()){return null;
}var parent=A.getParent();
var B=parent.getChildren();
var C=B.indexOf(A);

if(C<B.length-1){return B[C+1];
}return null;
},getPreviousSiblingOf:function(R){if(R==this.getRoot()){return null;
}var parent=R.getParent();
var S=parent.getChildren();
var T=S.indexOf(R);

if(T>0){return S[T-1];
}return null;
},getItems:function(bh,bi){if(this.getRoot()!=null){return this.getRoot().getItems(bh,bi,this.getHideRoot());
}else{return [];
}},getChildren:function(){if(this.getRoot()!=null){return [this.getRoot()];
}else{return [];
}},getTreeItem:function(G){while(G){if(G==this){return null;
}
if(G instanceof qx.ui.tree.AbstractTreeItem){return G;
}G=G.getLayoutParent();
}return null;
},_applyOpenMode:function(bc,bd){if(bd==k){this.removeListener(k,this._onOpen,this);
}else if(bd==l){this.removeListener(l,this._onOpen,this);
}
if(bc==k){this.addListener(k,this._onOpen,this);
}else if(bc==l){this.addListener(l,this._onOpen,this);
}},_onOpen:function(e){var Q=this.getTreeItem(e.getTarget());

if(!Q||!Q.isOpenable()){return;
}Q.setOpen(!Q.isOpen());
e.stopPropagation();
},_onChangeSelection:function(e){var M=e.getData();
for(var i=0;i<M.length;i++){var L=M[i];
while(L.getParent()!=null){L=L.getParent();
L.setOpen(true);
}}},_onKeyPress:function(e){var U=this._getLeadItem();

if(U!==null){switch(e.getKeyIdentifier()){case b:if(U.isOpenable()&&U.isOpen()){U.setOpen(false);
}break;
case m:if(U.isOpenable()&&!U.isOpen()){U.setOpen(true);
}break;
case a:case c:if(U.isOpenable()){U.toggleOpen();
}break;
}}}},destruct:function(){this._disposeObjects(r);
}});
})();
(function(){var b="qx.ui.core.scroll.IScrollBar",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"scroll":a},properties:{orientation:{},maximum:{},position:{},knobFactor:{}},members:{scrollTo:function(d){this.assertNumber(d);
},scrollBy:function(c){this.assertNumber(c);
},scrollBySteps:function(e){this.assertNumber(e);
}}});
})();
(function(){var n="horizontal",m="px",l="scroll",k="vertical",j="-1px",i="qx.client",h="0",g="hidden",f="mousedown",d="qx.ui.core.scroll.NativeScrollBar",C="PositiveNumber",B="Integer",A="__pF",z="mousemove",y="_applyMaximum",x="_applyOrientation",w="appear",v="opera",u="PositiveInteger",t="mshtml",r="mouseup",s="Number",p="_applyPosition",q="scrollbar",o="native";
qx.Class.define(d,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(P){qx.ui.core.Widget.call(this);
this.addState(o);
this.getContentElement().addListener(l,this._onScroll,this);
this.addListener(f,this._stopPropagation,this);
this.addListener(r,this._stopPropagation,this);
this.addListener(z,this._stopPropagation,this);

if(qx.core.Variant.isSet(i,v)){this.addListener(w,this._onAppear,this);
}this.getContentElement().add(this._getScrollPaneElement());
if(P!=null){this.setOrientation(P);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:q},orientation:{check:[n,k],init:n,apply:x},maximum:{check:u,apply:y,init:100},position:{check:s,init:0,apply:p,event:l},singleStep:{check:B,init:20},knobFactor:{check:C,nullable:true}},members:{__pE:null,__pF:null,_getScrollPaneElement:function(){if(!this.__pF){this.__pF=new qx.html.Element();
}return this.__pF;
},renderLayout:function(E,top,F,G){var H=qx.ui.core.Widget.prototype.renderLayout.call(this,E,top,F,G);
this._updateScrollBar();
return H;
},_getContentHint:function(){var W=qx.bom.element.Overflow.getScrollbarWidth();
return {width:this.__pE?100:W,maxWidth:this.__pE?null:W,minWidth:this.__pE?null:W,height:this.__pE?W:100,maxHeight:this.__pE?W:null,minHeight:this.__pE?W:null};
},_applyEnabled:function(U,V){qx.ui.core.Widget.prototype._applyEnabled.call(this,U,V);
this._updateScrollBar();
},_applyMaximum:function(O){this._updateScrollBar();
},_applyPosition:function(D){var content=this.getContentElement();

if(this.__pE){content.scrollToX(D);
}else{content.scrollToY(D);
}},_applyOrientation:function(a,b){var c=this.__pE=a===n;
this.set({allowGrowX:c,allowShrinkX:c,allowGrowY:!c,allowShrinkY:!c});

if(c){this.replaceState(k,n);
}else{this.replaceState(n,k);
}this.getContentElement().setStyles({overflowX:c?l:g,overflowY:c?g:l});
qx.ui.core.queue.Layout.add(this);
},_updateScrollBar:function(){var L=this.__pE;
var M=this.getBounds();

if(!M){return;
}
if(this.isEnabled()){var N=L?M.width:M.height;
var K=this.getMaximum()+N;
}else{K=0;
}if(qx.core.Variant.isSet(i,t)){var M=this.getBounds();
this.getContentElement().setStyles({left:L?h:j,top:L?j:h,width:(L?M.width:M.width+1)+m,height:(L?M.height+1:M.height)+m});
}this._getScrollPaneElement().setStyles({left:0,top:0,width:(L?K:1)+m,height:(L?1:K)+m});
this.scrollTo(this.getPosition());
},scrollTo:function(S){this.setPosition(Math.max(0,Math.min(this.getMaximum(),S)));
},scrollBy:function(T){this.scrollTo(this.getPosition()+T);
},scrollBySteps:function(I){var J=this.getSingleStep();
this.scrollBy(I*J);
},_onScroll:function(e){var R=this.getContentElement();
var Q=this.__pE?R.getScrollX():R.getScrollY();
this.setPosition(Q);
},_onAppear:function(e){this.scrollTo(this.getPosition());
},_stopPropagation:function(e){e.stopPropagation();
}},destruct:function(){this._disposeObjects(A);
}});
})();
(function(){var m="slider",l="horizontal",k="button-begin",j="vertical",i="button-end",h="Integer",g="execute",f="right",d="left",c="down",B="up",A="PositiveNumber",z="changeValue",y="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getMaximum()",x="_applyKnobFactor",w="knob",v="qx.ui.core.scroll.ScrollBar",u="resize",t="_applyOrientation",s="_applyPageStep",q="PositiveInteger",r="scroll",o="_applyPosition",p="scrollbar",n="_applyMaximum";
qx.Class.define(v,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(G){qx.ui.core.Widget.call(this);
this._createChildControl(k);
this._createChildControl(m).addListener(u,this._onResizeSlider,this);
this._createChildControl(i);
if(G!=null){this.setOrientation(G);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:p},orientation:{check:[l,j],init:l,apply:t},maximum:{check:q,apply:n,init:100},position:{check:y,init:0,apply:o,event:r},singleStep:{check:h,init:20},pageStep:{check:h,init:10,apply:s},knobFactor:{check:A,apply:x,nullable:true}},members:{__ne:2,_createChildControlImpl:function(a){var b;

switch(a){case m:b=new qx.ui.core.scroll.ScrollSlider();
b.setPageStep(100);
b.setFocusable(false);
b.addListener(z,this._onChangeSliderValue,this);
this._add(b,{flex:1});
break;
case k:b=new qx.ui.form.RepeatButton();
b.setFocusable(false);
b.addListener(g,this._onExecuteBegin,this);
this._add(b);
break;
case i:b=new qx.ui.form.RepeatButton();
b.setFocusable(false);
b.addListener(g,this._onExecuteEnd,this);
this._add(b);
break;
}return b||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,a);
},_applyMaximum:function(K){this.getChildControl(m).setMaximum(K);
},_applyPosition:function(O){this.getChildControl(m).setValue(O);
},_applyKnobFactor:function(H){this.getChildControl(m).setKnobFactor(H);
},_applyPageStep:function(L){this.getChildControl(m).setPageStep(L);
},_applyOrientation:function(P,Q){var R=this._getLayout();

if(R){R.dispose();
}if(P===l){this._setLayout(new qx.ui.layout.HBox());
this.setAllowStretchX(true);
this.setAllowStretchY(false);
this.replaceState(j,l);
this.getChildControl(k).replaceState(B,d);
this.getChildControl(i).replaceState(c,f);
}else{this._setLayout(new qx.ui.layout.VBox());
this.setAllowStretchX(false);
this.setAllowStretchY(true);
this.replaceState(l,j);
this.getChildControl(k).replaceState(d,B);
this.getChildControl(i).replaceState(f,c);
}this.getChildControl(m).setOrientation(P);
},scrollTo:function(M){this.getChildControl(m).slideTo(M);
},scrollBy:function(N){this.getChildControl(m).slideBy(N);
},scrollBySteps:function(I){var J=this.getSingleStep();
this.getChildControl(m).slideBy(I*J);
},_onExecuteBegin:function(e){this.scrollBy(-this.getSingleStep());
},_onExecuteEnd:function(e){this.scrollBy(this.getSingleStep());
},_onChangeSliderValue:function(e){this.setPosition(e.getData());
},_onResizeSlider:function(e){var C=this.getChildControl(m).getChildControl(w);
var F=C.getSizeHint();
var D=false;
var E=this.getChildControl(m).getInnerSize();

if(this.getOrientation()==j){if(E.height<F.minHeight+this.__ne){D=true;
}}else{if(E.width<F.minWidth+this.__ne){D=true;
}}
if(D){C.exclude();
}else{C.show();
}}}});
})();
(function(){var b="qx.ui.form.INumberForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var a="qx.ui.form.IRange";
qx.Interface.define(a,{members:{setMinimum:function(d){return arguments.length==1;
},getMinimum:function(){},setMaximum:function(e){return arguments.length==1;
},getMaximum:function(){},setSingleStep:function(b){return arguments.length==1;
},getSingleStep:function(){},setPageStep:function(c){return arguments.length==1;
},getPageStep:function(){}}});
})();
(function(){var p="knob",o="horizontal",n="vertical",m="Integer",l="hovered",k="left",j="top",i="mouseup",h="pressed",g="px",bb="changeValue",ba="interval",Y="mousemove",X="resize",W="slider",V="mousedown",U="PageUp",T="mouseout",S='qx.event.type.Data',R="Left",w="Down",x="Up",u="dblclick",v="qx.ui.form.Slider",s="PageDown",t="mousewheel",q="_applyValue",r="_applyKnobFactor",y="End",z="height",G="Right",E="width",K="_applyOrientation",I="Home",N="mouseover",M="floor",B="_applyMinimum",Q="click",P="typeof value==='number'&&value>=this.getMinimum()&&value<=this.getMaximum()",O="keypress",A="ceil",C="losecapture",D="contextmenu",F="_applyMaximum",H="Number",J="changeMaximum",L="changeMinimum";
qx.Class.define(v,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IForm,qx.ui.form.INumberForm,qx.ui.form.IRange],include:[qx.ui.form.MForm],construct:function(bG){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.Canvas());
this.addListener(O,this._onKeyPress);
this.addListener(t,this._onMouseWheel);
this.addListener(V,this._onMouseDown);
this.addListener(i,this._onMouseUp);
this.addListener(C,this._onMouseUp);
this.addListener(X,this._onUpdate);
this.addListener(D,this._onStopEvent);
this.addListener(Q,this._onStopEvent);
this.addListener(u,this._onStopEvent);
if(bG!=null){this.setOrientation(bG);
}else{this.initOrientation();
}},events:{changeValue:S},properties:{appearance:{refine:true,init:W},focusable:{refine:true,init:true},orientation:{check:[o,n],init:o,apply:K},value:{check:P,init:0,apply:q,nullable:true},minimum:{check:m,init:0,apply:B,event:L},maximum:{check:m,init:100,apply:F,event:J},singleStep:{check:m,init:1},pageStep:{check:m,init:10},knobFactor:{check:H,apply:r,nullable:true}},members:{__nA:null,__nB:null,__nC:null,__nD:null,__nE:null,__nF:null,__nG:null,__nH:null,__nI:null,__nJ:null,__nK:null,__nL:null,_forwardStates:{invalid:true},_createChildControlImpl:function(bH){var bI;

switch(bH){case p:bI=new qx.ui.core.Widget();
bI.addListener(X,this._onUpdate,this);
bI.addListener(N,this._onMouseOver);
bI.addListener(T,this._onMouseOut);
this._add(bI);
break;
}return bI||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,bH);
},_onMouseOver:function(e){this.addState(l);
},_onMouseOut:function(e){this.removeState(l);
},_onMouseWheel:function(e){var bP=e.getWheelDelta()>0?1:-1;
this.slideBy(bP*this.getSingleStep());
e.stop();
},_onKeyPress:function(e){var bd=this.getOrientation()===o;
var bc=bd?R:x;
var forward=bd?G:w;

switch(e.getKeyIdentifier()){case forward:this.slideForward();
break;
case bc:this.slideBack();
break;
case s:this.slidePageForward();
break;
case U:this.slidePageBack();
break;
case I:this.slideToBegin();
break;
case y:this.slideToEnd();
break;
default:return;
}e.stop();
},_onMouseDown:function(e){if(this.__nD){return;
}var bV=this.__nN;
var bT=this.getChildControl(p);
var bU=bV?k:j;
var bX=bV?e.getDocumentLeft():e.getDocumentTop();
var bY=this.__nA=qx.bom.element.Location.get(this.getContentElement().getDomElement())[bU];
var bW=this.__nB=qx.bom.element.Location.get(bT.getContainerElement().getDomElement())[bU];

if(e.getTarget()===bT){this.__nD=true;

if(!this.__nJ){this.__nJ=new qx.event.Timer(100);
this.__nJ.addListener(ba,this._fireValue,this);
}this.__nJ.start();
this.__nE=bX+bY-bW;
bT.addState(h);
}else{this.__nF=true;
this.__nG=bX<=bW?-1:1;
this.__nO(e);
this._onInterval();
if(!this.__nI){this.__nI=new qx.event.Timer(100);
this.__nI.addListener(ba,this._onInterval,this);
}this.__nI.start();
}this.addListener(Y,this._onMouseMove);
this.capture();
e.stopPropagation();
},_onMouseUp:function(e){if(this.__nD){this.releaseCapture();
delete this.__nD;
this.__nJ.stop();
this._fireValue();
delete this.__nE;
this.getChildControl(p).removeState(h);
if(e.getType()===i){var cb;
var cc;
var ca;

if(this.__nN){cb=e.getDocumentLeft()-(this._valueToPosition(this.getValue())+this.__nA);
ca=qx.bom.element.Location.get(this.getContentElement().getDomElement())[j];
cc=e.getDocumentTop()-(ca+this.getChildControl(p).getBounds().top);
}else{cb=e.getDocumentTop()-(this._valueToPosition(this.getValue())+this.__nA);
ca=qx.bom.element.Location.get(this.getContentElement().getDomElement())[k];
cc=e.getDocumentLeft()-(ca+this.getChildControl(p).getBounds().left);
}
if(cc<0||cc>this.__nC||cb<0||cb>this.__nC){this.getChildControl(p).removeState(l);
}}}else if(this.__nF){this.__nI.stop();
this.releaseCapture();
delete this.__nF;
delete this.__nG;
delete this.__nH;
}this.removeListener(Y,this._onMouseMove);
if(e.getType()===i){e.stopPropagation();
}},_onMouseMove:function(e){if(this.__nD){var bf=this.__nN?e.getDocumentLeft():e.getDocumentTop();
var be=bf-this.__nE;
this.slideTo(this._positionToValue(be));
}else if(this.__nF){this.__nO(e);
}e.stopPropagation();
},_onInterval:function(e){var ce=this.getValue()+(this.__nG*this.getPageStep());
if(ce<this.getMinimum()){ce=this.getMinimum();
}else if(ce>this.getMaximum()){ce=this.getMaximum();
}var cf=this.__nG==-1;

if((cf&&ce<=this.__nH)||(!cf&&ce>=this.__nH)){ce=this.__nH;
}this.slideTo(ce);
},_onUpdate:function(e){var bk=this.getInnerSize();
var bl=this.getChildControl(p).getBounds();
var bj=this.__nN?E:z;
this._updateKnobSize();
this.__nM=bk[bj]-bl[bj];
this.__nC=bl[bj];
this._updateKnobPosition();
},__nN:false,__nM:0,__nO:function(e){var bm=this.__nN;
var bt=bm?e.getDocumentLeft():e.getDocumentTop();
var bv=this.__nA;
var bn=this.__nB;
var bx=this.__nC;
var bu=bt-bv;

if(bt>=bn){bu-=bx;
}var br=this._positionToValue(bu);
var bo=this.getMinimum();
var bp=this.getMaximum();

if(br<bo){br=bo;
}else if(br>bp){br=bp;
}else{var bs=this.getValue();
var bq=this.getPageStep();
var bw=this.__nG<0?M:A;
br=bs+(Math[bw]((br-bs)/bq)*bq);
}if(this.__nH==null||(this.__nG==-1&&br<=this.__nH)||(this.__nG==1&&br>=this.__nH)){this.__nH=br;
}},_positionToValue:function(bA){var bB=this.__nM;
if(bB==null||bB==0){return 0;
}var bD=bA/bB;

if(bD<0){bD=0;
}else if(bD>1){bD=1;
}var bC=this.getMaximum()-this.getMinimum();
return this.getMinimum()+Math.round(bC*bD);
},_valueToPosition:function(bJ){var bK=this.__nM;

if(bK==null){return 0;
}var bL=this.getMaximum()-this.getMinimum();
if(bL==0){return 0;
}var bJ=bJ-this.getMinimum();
var bM=bJ/bL;

if(bM<0){bM=0;
}else if(bM>1){bM=1;
}return Math.round(bK*bM);
},_updateKnobPosition:function(){this._setKnobPosition(this._valueToPosition(this.getValue()));
},_setKnobPosition:function(d){var f=this.getChildControl(p).getContainerElement();

if(this.__nN){f.setStyle(k,d+g,true);
}else{f.setStyle(j,d+g,true);
}},_updateKnobSize:function(){var bS=this.getKnobFactor();

if(bS==null){return;
}var bR=this.getInnerSize();

if(bR==null){return;
}if(this.__nN){this.getChildControl(p).setWidth(Math.round(bS*bR.width));
}else{this.getChildControl(p).setHeight(Math.round(bS*bR.height));
}},slideToBegin:function(){this.slideTo(this.getMinimum());
},slideToEnd:function(){this.slideTo(this.getMaximum());
},slideForward:function(){this.slideBy(this.getSingleStep());
},slideBack:function(){this.slideBy(-this.getSingleStep());
},slidePageForward:function(){this.slideBy(this.getPageStep());
},slidePageBack:function(){this.slideBy(-this.getPageStep());
},slideBy:function(bg){this.slideTo(this.getValue()+bg);
},slideTo:function(cd){if(cd<this.getMinimum()){cd=this.getMinimum();
}else if(cd>this.getMaximum()){cd=this.getMaximum();
}else{cd=this.getMinimum()+Math.round((cd-this.getMinimum())/this.getSingleStep())*this.getSingleStep();
}this.setValue(cd);
},_applyOrientation:function(a,b){var c=this.getChildControl(p);
this.__nN=a===o;
if(this.__nN){this.removeState(n);
c.removeState(n);
this.addState(o);
c.addState(o);
c.setLayoutProperties({top:0,right:null,bottom:0});
}else{this.removeState(o);
c.removeState(o);
this.addState(n);
c.addState(n);
c.setLayoutProperties({right:0,bottom:null,left:0});
}this._updateKnobPosition();
},_applyKnobFactor:function(by,bz){if(by!=null){this._updateKnobSize();
}else{if(this.__nN){this.getChildControl(p).resetWidth();
}else{this.getChildControl(p).resetHeight();
}}},_applyValue:function(bE,bF){if(bE!=null){this._updateKnobPosition();

if(this.__nD){this.__nL=[bE,bF];
}else{this.fireEvent(bb,qx.event.type.Data,[bE,bF]);
}}else{this.resetValue();
}},_fireValue:function(){if(!this.__nL){return;
}var bQ=this.__nL;
this.__nL=null;
this.fireEvent(bb,qx.event.type.Data,bQ);
},_applyMinimum:function(bh,bi){if(this.getValue()<bh){this.setValue(bh);
}this._updateKnobPosition();
},_applyMaximum:function(bN,bO){if(this.getValue()>bN){this.setValue(bN);
}this._updateKnobPosition();
}}});
})();
(function(){var d="horizontal",c="mousewheel",b="qx.ui.core.scroll.ScrollSlider",a="keypress";
qx.Class.define(b,{extend:qx.ui.form.Slider,construct:function(e){qx.ui.form.Slider.call(this,e);
this.removeListener(a,this._onKeyPress);
this.removeListener(c,this._onMouseWheel);
},members:{getSizeHint:function(f){var g=qx.ui.form.Slider.prototype.getSizeHint.call(this);
if(this.getOrientation()===d){g.width=0;
}else{g.height=0;
}return g;
}}});
})();
(function(){var dg="top",df="left",de="qx.debug",dd="bottom",dc="hAlign",db="vAlign",da="Integer",cY="_applyLayoutChange",cX="center",cW="middle",dw="right",dv="flex",du="on",dt="height",ds="' is not supported by the Grid layout!",dr="Invalid parameter 'column'",dq="The property '",dp="Value must be positive",dn="qx.ui.layout.Grid",dm="maxHeight",dk="width",dl="minHeight",di="minWidth",dj="maxWidth",dh="Invalid parameter 'row'";
qx.Class.define(dn,{extend:qx.ui.layout.Abstract,construct:function(z,A){qx.ui.layout.Abstract.call(this);
this.__hN=[];
this.__hO=[];

if(z){this.setSpacingX(z);
}
if(A){this.setSpacingY(A);
}},properties:{spacingX:{check:da,init:0,apply:cY},spacingY:{check:da,init:0,apply:cY}},members:{__hP:null,__hN:null,__hO:null,__hQ:null,__hR:null,__hS:null,__hT:null,__hU:null,__hV:null,verifyLayoutProperty:qx.core.Variant.select(de,{"on":function(cF,name,cG){var cH={"row":1,"column":1,"rowSpan":1,"colSpan":1};
this.assert(cH[name]==1,dq+name+ds);
this.assertInteger(cG);
this.assert(cG>=0,dp);
},"off":null}),__hW:function(){var cy=[];
var cx=[];
var cz=[];
var cv=-1;
var cu=-1;
var cB=this._getLayoutChildren();

for(var i=0,l=cB.length;i<l;i++){var cw=cB[i];
var cA=cw.getLayoutProperties();
var cC=cA.row;
var ct=cA.column;
cA.colSpan=cA.colSpan||1;
cA.rowSpan=cA.rowSpan||1;
if(cC==null||ct==null){throw new Error("The layout properties 'row' and 'column' of the child widget '"+cw+"' must be defined!");
}
if(cy[cC]&&cy[cC][ct]){throw new Error("Cannot add widget '"+cw+"'!. "+"There is already a widget '"+cy[cC][ct]+"' in this cell ("+cC+", "+ct+")");
}
for(var x=ct;x<ct+cA.colSpan;x++){for(var y=cC;y<cC+cA.rowSpan;y++){if(cy[y]==undefined){cy[y]=[];
}cy[y][x]=cw;
cu=Math.max(cu,x);
cv=Math.max(cv,y);
}}
if(cA.rowSpan>1){cz.push(cw);
}
if(cA.colSpan>1){cx.push(cw);
}}for(var y=0;y<=cv;y++){if(cy[y]==undefined){cy[y]=[];
}}this.__hP=cy;
this.__hQ=cx;
this.__hR=cz;
this.__hS=cv;
this.__hT=cu;
this.__hU=null;
this.__hV=null;
delete this._invalidChildrenCache;
},_setRowData:function(dH,dI,dJ){var dK=this.__hN[dH];

if(!dK){this.__hN[dH]={};
this.__hN[dH][dI]=dJ;
}else{dK[dI]=dJ;
}},_setColumnData:function(t,u,v){var w=this.__hO[t];

if(!w){this.__hO[t]={};
this.__hO[t][u]=v;
}else{w[u]=v;
}},setSpacing:function(em){this.setSpacingY(em);
this.setSpacingX(em);
return this;
},setColumnAlign:function(ck,cl,cm){if(qx.core.Variant.isSet(de,du)){this.assertInteger(ck,dr);
this.assertInArray(cl,[df,cX,dw]);
this.assertInArray(cm,[dg,cW,dd]);
}this._setColumnData(ck,dc,cl);
this._setColumnData(ck,db,cm);
this._applyLayoutChange();
return this;
},getColumnAlign:function(cI){var cJ=this.__hO[cI]||{};
return {vAlign:cJ.vAlign||dg,hAlign:cJ.hAlign||df};
},setRowAlign:function(dN,dO,dP){if(qx.core.Variant.isSet(de,du)){this.assertInteger(dN,dh);
this.assertInArray(dO,[df,cX,dw]);
this.assertInArray(dP,[dg,cW,dd]);
}this._setRowData(dN,dc,dO);
this._setRowData(dN,db,dP);
this._applyLayoutChange();
return this;
},getRowAlign:function(cD){var cE=this.__hN[cD]||{};
return {vAlign:cE.vAlign||dg,hAlign:cE.hAlign||df};
},getCellWidget:function(dQ,dR){if(this._invalidChildrenCache){this.__hW();
}var dQ=this.__hP[dQ]||{};
return dQ[dR]||null;
},getRowCount:function(){if(this._invalidChildrenCache){this.__hW();
}return this.__hS+1;
},getColumnCount:function(){if(this._invalidChildrenCache){this.__hW();
}return this.__hT+1;
},getCellAlign:function(cM,cN){var cT=dg;
var cR=df;
var cS=this.__hN[cM];
var cP=this.__hO[cN];
var cO=this.__hP[cM][cN];

if(cO){var cQ={vAlign:cO.getAlignY(),hAlign:cO.getAlignX()};
}else{cQ={};
}if(cQ.vAlign){cT=cQ.vAlign;
}else if(cS&&cS.vAlign){cT=cS.vAlign;
}else if(cP&&cP.vAlign){cT=cP.vAlign;
}if(cQ.hAlign){cR=cQ.hAlign;
}else if(cP&&cP.hAlign){cR=cP.hAlign;
}else if(cS&&cS.hAlign){cR=cS.hAlign;
}return {vAlign:cT,hAlign:cR};
},setColumnFlex:function(cn,co){this._setColumnData(cn,dv,co);
this._applyLayoutChange();
return this;
},getColumnFlex:function(F){var G=this.__hO[F]||{};
return G.flex!==undefined?G.flex:0;
},setRowFlex:function(D,E){this._setRowData(D,dv,E);
this._applyLayoutChange();
return this;
},getRowFlex:function(dE){var dF=this.__hN[dE]||{};
var dG=dF.flex!==undefined?dF.flex:0;
return dG;
},setColumnMaxWidth:function(cU,cV){this._setColumnData(cU,dj,cV);
this._applyLayoutChange();
return this;
},getColumnMaxWidth:function(dL){var dM=this.__hO[dL]||{};
return dM.maxWidth!==undefined?dM.maxWidth:Infinity;
},setColumnWidth:function(dU,dV){this._setColumnData(dU,dk,dV);
this._applyLayoutChange();
return this;
},getColumnWidth:function(cK){var cL=this.__hO[cK]||{};
return cL.width!==undefined?cL.width:null;
},setColumnMinWidth:function(cr,cs){this._setColumnData(cr,di,cs);
this._applyLayoutChange();
return this;
},getColumnMinWidth:function(dS){var dT=this.__hO[dS]||{};
return dT.minWidth||0;
},setRowMaxHeight:function(ek,el){this._setRowData(ek,dm,el);
this._applyLayoutChange();
return this;
},getRowMaxHeight:function(B){var C=this.__hN[B]||{};
return C.maxHeight||Infinity;
},setRowHeight:function(cp,cq){this._setRowData(cp,dt,cq);
this._applyLayoutChange();
return this;
},getRowHeight:function(en){var eo=this.__hN[en]||{};
return eo.height!==undefined?eo.height:null;
},setRowMinHeight:function(bd,be){this._setRowData(bd,dl,be);
this._applyLayoutChange();
return this;
},getRowMinHeight:function(dW){var dX=this.__hN[dW]||{};
return dX.minHeight||0;
},__hX:function(o){var s=o.getSizeHint();
var r=o.getMarginLeft()+o.getMarginRight();
var q=o.getMarginTop()+o.getMarginBottom();
var p={height:s.height+q,width:s.width+r,minHeight:s.minHeight+q,minWidth:s.minWidth+r,maxHeight:s.maxHeight+q,maxWidth:s.maxWidth+r};
return p;
},_fixHeightsRowSpan:function(bf){var bq=this.getSpacingY();

for(var i=0,l=this.__hR.length;i<l;i++){var bi=this.__hR[i];
var bk=this.__hX(bi);
var bl=bi.getLayoutProperties();
var bh=bl.row;
var bo=bq*(bl.rowSpan-1);
var bg=bo;
var bn={};

for(var j=0;j<bl.rowSpan;j++){var bs=bl.row+j;
var bj=bf[bs];
var br=this.getRowFlex(bs);

if(br>0){bn[bs]={min:bj.minHeight,value:bj.height,max:bj.maxHeight,flex:br};
}bo+=bj.height;
bg+=bj.minHeight;
}if(bo<bk.height){var bp=qx.ui.layout.Util.computeFlexOffsets(bn,bk.height,bo);

for(var j=0;j<bl.rowSpan;j++){var bm=bp[bh+j]?bp[bh+j].offset:0;
bf[bh+j].height+=bm;
}}if(bg<bk.minHeight){var bp=qx.ui.layout.Util.computeFlexOffsets(bn,bk.minHeight,bg);

for(var j=0;j<bl.rowSpan;j++){var bm=bp[bh+j]?bp[bh+j].offset:0;
bf[bh+j].minHeight+=bm;
}}}},_fixWidthsColSpan:function(H){var L=this.getSpacingX();

for(var i=0,l=this.__hQ.length;i<l;i++){var I=this.__hQ[i];
var K=this.__hX(I);
var N=I.getLayoutProperties();
var J=N.column;
var T=L*(N.colSpan-1);
var M=T;
var O={};
var Q;

for(var j=0;j<N.colSpan;j++){var U=N.column+j;
var S=H[U];
var R=this.getColumnFlex(U);
if(R>0){O[U]={min:S.minWidth,value:S.width,max:S.maxWidth,flex:R};
}T+=S.width;
M+=S.minWidth;
}if(T<K.width){var P=qx.ui.layout.Util.computeFlexOffsets(O,K.width,T);

for(var j=0;j<N.colSpan;j++){Q=P[J+j]?P[J+j].offset:0;
H[J+j].width+=Q;
}}if(M<K.minWidth){var P=qx.ui.layout.Util.computeFlexOffsets(O,K.minWidth,M);

for(var j=0;j<N.colSpan;j++){Q=P[J+j]?P[J+j].offset:0;
H[J+j].minWidth+=Q;
}}}},_getRowHeights:function(){if(this.__hU!=null){return this.__hU;
}var m=[];
var c=this.__hS;
var b=this.__hT;

for(var n=0;n<=c;n++){var d=0;
var f=0;
var e=0;

for(var k=0;k<=b;k++){var a=this.__hP[n][k];

if(!a){continue;
}var g=a.getLayoutProperties().rowSpan||0;

if(g>1){continue;
}var h=this.__hX(a);

if(this.getRowFlex(n)>0){d=Math.max(d,h.minHeight);
}else{d=Math.max(d,h.height);
}f=Math.max(f,h.height);
}var d=Math.max(d,this.getRowMinHeight(n));
var e=this.getRowMaxHeight(n);

if(this.getRowHeight(n)!==null){var f=this.getRowHeight(n);
}else{var f=Math.max(d,Math.min(f,e));
}m[n]={minHeight:d,height:f,maxHeight:e};
}
if(this.__hR.length>0){this._fixHeightsRowSpan(m);
}this.__hU=m;
return m;
},_getColWidths:function(){if(this.__hV!=null){return this.__hV;
}var ed=[];
var ea=this.__hT;
var ec=this.__hS;

for(var ei=0;ei<=ea;ei++){var eg=0;
var ef=0;
var eb=Infinity;

for(var ej=0;ej<=ec;ej++){var dY=this.__hP[ej][ei];

if(!dY){continue;
}var ee=dY.getLayoutProperties().colSpan||0;

if(ee>1){continue;
}var eh=this.__hX(dY);

if(this.getColumnFlex(ei)>0){ef=Math.max(ef,eh.minWidth);
}else{ef=Math.max(ef,eh.width);
}eg=Math.max(eg,eh.width);
}var ef=Math.max(ef,this.getColumnMinWidth(ei));
var eb=this.getColumnMaxWidth(ei);

if(this.getColumnWidth(ei)!==null){var eg=this.getColumnWidth(ei);
}else{var eg=Math.max(ef,Math.min(eg,eb));
}ed[ei]={minWidth:ef,width:eg,maxWidth:eb};
}
if(this.__hQ.length>0){this._fixWidthsColSpan(ed);
}this.__hV=ed;
return ed;
},_getColumnFlexOffsets:function(V){var W=this.getSizeHint();
var bb=V-W.width;

if(bb==0){return {};
}var Y=this._getColWidths();
var X={};

for(var i=0,l=Y.length;i<l;i++){var bc=Y[i];
var ba=this.getColumnFlex(i);

if((ba<=0)||(bc.width==bc.maxWidth&&bb>0)||(bc.width==bc.minWidth&&bb<0)){continue;
}X[i]={min:bc.minWidth,value:bc.width,max:bc.maxWidth,flex:ba};
}return qx.ui.layout.Util.computeFlexOffsets(X,V,W.width);
},_getRowFlexOffsets:function(dx){var dy=this.getSizeHint();
var dB=dx-dy.height;

if(dB==0){return {};
}var dC=this._getRowHeights();
var dz={};

for(var i=0,l=dC.length;i<l;i++){var dD=dC[i];
var dA=this.getRowFlex(i);

if((dA<=0)||(dD.height==dD.maxHeight&&dB>0)||(dD.height==dD.minHeight&&dB<0)){continue;
}dz[i]={min:dD.minHeight,value:dD.height,max:dD.maxHeight,flex:dA};
}return qx.ui.layout.Util.computeFlexOffsets(dz,dx,dy.height);
},renderLayout:function(bE,bF){if(this._invalidChildrenCache){this.__hW();
}var bT=qx.ui.layout.Util;
var bH=this.getSpacingX();
var bN=this.getSpacingY();
var bY=this._getColWidths();
var bX=this._getColumnFlexOffsets(bE);
var bI=[];
var cb=this.__hT;
var bG=this.__hS;
var ca;

for(var cc=0;cc<=cb;cc++){ca=bX[cc]?bX[cc].offset:0;
bI[cc]=bY[cc].width+ca;
}var bQ=this._getRowHeights();
var bS=this._getRowFlexOffsets(bF);
var ci=[];

for(var bO=0;bO<=bG;bO++){ca=bS[bO]?bS[bO].offset:0;
ci[bO]=bQ[bO].height+ca;
}var cj=0;

for(var cc=0;cc<=cb;cc++){var top=0;

for(var bO=0;bO<=bG;bO++){var bV=this.__hP[bO][cc];
if(!bV){top+=ci[bO]+bN;
continue;
}var bJ=bV.getLayoutProperties();
if(bJ.row!==bO||bJ.column!==cc){top+=ci[bO]+bN;
continue;
}var ch=bH*(bJ.colSpan-1);

for(var i=0;i<bJ.colSpan;i++){ch+=bI[cc+i];
}var bW=bN*(bJ.rowSpan-1);

for(var i=0;i<bJ.rowSpan;i++){bW+=ci[bO+i];
}var bK=bV.getSizeHint();
var cf=bV.getMarginTop();
var bU=bV.getMarginLeft();
var bR=bV.getMarginBottom();
var bM=bV.getMarginRight();
var bP=Math.max(bK.minWidth,Math.min(ch-bU-bM,bK.maxWidth));
var cg=Math.max(bK.minHeight,Math.min(bW-cf-bR,bK.maxHeight));
var cd=this.getCellAlign(bO,cc);
var ce=cj+bT.computeHorizontalAlignOffset(cd.hAlign,bP,ch,bU,bM);
var bL=top+bT.computeVerticalAlignOffset(cd.vAlign,cg,bW,cf,bR);
bV.renderLayout(ce,bL,bP,cg);
top+=ci[bO]+bN;
}cj+=bI[cc]+bH;
}},invalidateLayoutCache:function(){qx.ui.layout.Abstract.prototype.invalidateLayoutCache.call(this);
this.__hV=null;
this.__hU=null;
},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__hW();
}var bx=this._getColWidths();
var bz=0,bA=0;

for(var i=0,l=bx.length;i<l;i++){var bB=bx[i];

if(this.getColumnFlex(i)>0){bz+=bB.minWidth;
}else{bz+=bB.width;
}bA+=bB.width;
}var bC=this._getRowHeights();
var bv=0,by=0;

for(var i=0,l=bC.length;i<l;i++){var bD=bC[i];

if(this.getRowFlex(i)>0){bv+=bD.minHeight;
}else{bv+=bD.height;
}by+=bD.height;
}var bu=this.getSpacingX()*(bx.length-1);
var bt=this.getSpacingY()*(bC.length-1);
var bw={minWidth:bz+bu,width:bA+bu,minHeight:bv+bt,height:by+bt};
return bw;
}},destruct:function(){this.__hP=this.__hN=this.__hO=this.__hQ=this.__hR=this.__hV=this.__hU=null;
}});
})();
(function(){var bb="open",ba="auto",Y="qx.debug",X="middle",W="icon",V="label",U="on",T="changeOpen",S="excluded",R="visible",bx="String",bw="opened",bv="always",bu="qx.ui.tree.AbstractTreeItem",bt="addItem",bs="Boolean",br="Invalid child index: ",bq="Integer",bp="_applyIndent",bo="changeOpenSymbolMode",bi="_applyOpenSymbolMode",bj="__pj",bg="resize",bh="",be="removeItem",bf="__pn",bc="abstract",bd="never",bk="_applyIcon",bl="__pk",bn="_applyOpen",bm="_applyLabel";
qx.Class.define(bu,{extend:qx.ui.core.Widget,type:bc,include:[qx.ui.form.MModelProperty],implement:[qx.ui.form.IModel],construct:function(){qx.ui.core.Widget.call(this);
this.__pj=[];
this._setLayout(new qx.ui.layout.HBox());
this._addWidgets();
this.initOpen();
},properties:{open:{check:bs,init:false,event:T,apply:bn},openSymbolMode:{check:[bv,bd,ba],init:ba,event:bo,apply:bi},indent:{check:bq,init:19,apply:bp,themeable:true},parent:{check:bu,nullable:true},icon:{check:bx,apply:bk,nullable:true,themeable:true},label:{check:bx,apply:bm,init:bh}},members:{__pj:null,__pk:null,__pl:null,__pm:null,__pn:null,_addWidgets:function(){throw new Error("Abstract method call.");
},_createChildControlImpl:function(bO){var bP;

switch(bO){case V:bP=new qx.ui.basic.Label().set({alignY:X,value:this.getLabel()});
break;
case W:bP=new qx.ui.basic.Image().set({alignY:X,source:this.getIcon()});
break;
case bb:bP=new qx.ui.tree.FolderOpenButton().set({alignY:X});
bP.addListener(T,this._onChangeOpen,this);
bP.addListener(bg,this._updateIndent,this);
break;
}return bP||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,bO);
},getTree:function(){var g=this;

while(g.getParent()){g=g.getParent();
}var f=g.getLayoutParent()?g.getLayoutParent().getLayoutParent():0;

if(f&&f instanceof qx.ui.core.scroll.ScrollPane){return f.getLayoutParent();
}return null;
},addWidget:function(bE,bF){this._add(bE,bF);
},addSpacer:function(){if(!this.__pn){this.__pn=new qx.ui.core.Spacer();
}else{this._remove(this.__pn);
}this._add(this.__pn);
},addOpenButton:function(){this._add(this.getChildControl(bb));
},_onChangeOpen:function(e){if(this.isOpenable()){this.setOpen(e.getData());
}},addIcon:function(){var bA=this.getChildControl(W);

if(this.__pm){this._remove(bA);
}this._add(bA);
this.__pm=true;
},addLabel:function(I){var J=this.getChildControl(V);

if(this.__pl){this._remove(J);
}
if(I){this.setLabel(I);
}else{J.setValue(this.getLabel());
}this._add(J);
this.__pl=true;
},addState:function(k){qx.ui.core.Widget.prototype.addState.call(this,k);
var n=this._getChildren();

for(var i=0,l=n.length;i<l;i++){var m=n[i];

if(m.addState){n[i].addState(k);
}}},removeState:function(bB){qx.ui.core.Widget.prototype.removeState.call(this,bB);
var bD=this._getChildren();

for(var i=0,l=bD.length;i<l;i++){var bC=bD[i];

if(bC.addState){bD[i].removeState(bB);
}}},_applyIcon:function(A,B){var C=this.getChildControl(W,true);

if(C){C.setSource(A);
}},_applyLabel:function(bU,bV){var bW=this.getChildControl(V,true);

if(bW){bW.setValue(bU);
}},_applyOpen:function(by,bz){if(this.hasChildren()){this.getChildrenContainer().setVisibility(by?R:S);
}var open=this.getChildControl(bb,true);

if(open){open.setOpen(by);
}by?this.addState(bw):this.removeState(bw);
},isOpenable:function(){var bX=this.getOpenSymbolMode();
return (bX===bv||bX===ba&&this.hasChildren());
},_shouldShowOpenSymbol:function(){var open=this.getChildControl(bb,true);

if(!open){return false;
}var bG=this.getTree();

if(!bG.getRootOpenClose()){if(bG.getHideRoot()){if(bG.getRoot()==this.getParent()){return false;
}}else{if(bG.getRoot()==this){return false;
}}}return this.isOpenable();
},_applyOpenSymbolMode:function(r,s){this._updateIndent();
},_updateIndent:function(){if(!this.getTree()){return;
}var d=0;
var open=this.getChildControl(bb,true);

if(open){if(this._shouldShowOpenSymbol()){open.show();
var c=open.getBounds();

if(c){d=c.width;
}else{return;
}}else{open.exclude();
}}
if(this.__pn){this.__pn.setWidth((this.getLevel()+1)*this.getIndent()-d);
}},_applyIndent:function(h,j){this._updateIndent();
},getLevel:function(){var o=this.getTree();

if(!o){return;
}var p=this;
var q=-1;

while(p){p=p.getParent();
q+=1;
}if(o.getHideRoot()){q-=1;
}
if(!o.getRootOpenClose()){q-=1;
}return q;
},syncWidget:function(){this._updateIndent();
},getChildrenContainer:function(){if(!this.__pk){this.__pk=new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({visibility:this.isOpen()?R:S});
}return this.__pk;
},hasChildrenContainer:function(){return this.__pk;
},getParentChildrenContainer:function(){if(this.getParent()){return this.getParent().getChildrenContainer();
}else if(this.getLayoutParent()){return this.getLayoutParent();
}else{return null;
}},getChildren:function(){return this.__pj;
},hasChildren:function(){return this.__pj?this.__pj.length>0:false;
},getItems:function(bH,bI,bJ){if(bJ!==false){var bK=[];
}else{var bK=[this];
}var bN=this.hasChildren()&&(bI!==false||this.isOpen());

if(bN){var bM=this.getChildren();

if(bH===false){bK=bK.concat(bM);
}else{for(var i=0,bL=bM.length;i<bL;i++){bK=bK.concat(bM[i].getItems(bH,bI,false));
}}}return bK;
},recursiveAddToWidgetQueue:function(){var t=this.getItems(true,true,false);

for(var i=0,l=t.length;i<l;i++){qx.ui.core.queue.Widget.add(t[i]);
}},__po:function(){if(this.getParentChildrenContainer()){this.getParentChildrenContainer()._addAfter(this.getChildrenContainer(),this);
}},add:function(u){var v=this.getChildrenContainer();
var y=this.getTree();

for(var i=0,l=arguments.length;i<l;i++){var z=arguments[i];
var x=z.getParent();

if(x){x.remove(z);
}z.setParent(this);
var w=this.hasChildren();
v.add(z);

if(z.hasChildren()){v.add(z.getChildrenContainer());
}this.__pj.push(z);

if(!w){this.__po();
}
if(y){z.recursiveAddToWidgetQueue();
y.fireNonBubblingEvent(bt,qx.event.type.Data,[z]);
}}
if(y){qx.ui.core.queue.Widget.add(this);
}},addAt:function(L,M){if(qx.core.Variant.isSet(Y,U)){this.assert(M<=this.__pj.length&&M>=0,br+M);
}
if(M==this.__pj.length){this.add(L);
return;
}var Q=L.getParent();

if(Q){Q.remove(L);
}var O=this.getChildrenContainer();
L.setParent(this);
var P=this.hasChildren();
var N=this.__pj[M];
O.addBefore(L,N);

if(L.hasChildren()){O.addAfter(L.getChildrenContainer(),L);
}qx.lang.Array.insertAt(this.__pj,L,M);

if(!P){this.__po();
}
if(this.getTree()){L.recursiveAddToWidgetQueue();
qx.ui.core.queue.Widget.add(this);
}},addBefore:function(a,b){if(qx.core.Variant.isSet(Y,U)){this.assert(this.__pj.indexOf(b)>=0);
}this.addAt(a,this.__pj.indexOf(b));
},addAfter:function(bQ,bR){if(qx.core.Variant.isSet(Y,U)){this.assert(this.__pj.indexOf(bR)>=0);
}this.addAt(bQ,this.__pj.indexOf(bR)+1);
},addAtBegin:function(K){this.addAt(K,0);
},remove:function(D){for(var i=0,l=arguments.length;i<l;i++){var H=arguments[i];

if(this.__pj.indexOf(H)==-1){this.warn("Cannot remove treeitem '"+H+"'. It is not a child of this tree item.");
return;
}var E=this.getChildrenContainer();

if(H.hasChildrenContainer()){var G=H.getChildrenContainer();

if(E.getChildren().indexOf(G)>=0){E.remove(G);
}}qx.lang.Array.remove(this.__pj,H);
H.setParent(null);
E.remove(H);
}var F=this.getTree();

if(F){F.fireNonBubblingEvent(be,qx.event.type.Data,[H]);
}qx.ui.core.queue.Widget.add(this);
},removeAt:function(bS){var bT=this.__pj[bS];

if(bT){this.remove(bT);
}},removeAll:function(){for(var i=this.__pj.length-1;i>=0;i--){this.remove(this.__pj[i]);
}}},destruct:function(){this._disposeArray(bj);
this._disposeObjects(bf,bl);
}});
})();
(function(){var i="opened",h="click",g="changeOpen",f="Boolean",d="qx.ui.tree.FolderOpenButton",c="_applyOpen",b="mouseup",a="mousedown";
qx.Class.define(d,{extend:qx.ui.basic.Image,include:qx.ui.core.MExecutable,construct:function(){qx.ui.basic.Image.call(this);
this.initOpen();
this.addListener(h,this._onClick);
this.addListener(a,this._stopPropagation,this);
this.addListener(b,this._stopPropagation,this);
},properties:{open:{check:f,init:false,event:g,apply:c}},members:{_applyOpen:function(j,k){j?this.addState(i):this.removeState(i);
this.execute();
},_stopPropagation:function(e){e.stopPropagation();
},_onClick:function(e){this.toggleOpen();
e.stopPropagation();
}}});
})();
(function(){var b="tree-folder",a="qx.ui.tree.TreeFolder";
qx.Class.define(a,{extend:qx.ui.tree.AbstractTreeItem,construct:function(c){qx.ui.tree.AbstractTreeItem.call(this);

if(c){this.setLabel(c);
}},properties:{appearance:{refine:true,init:b}},members:{_addWidgets:function(){this.addSpacer();
this.addOpenButton();
this.addIcon();
this.addLabel();
}}});
})();
(function(){var b="qx.ui.tree.TreeFile",a="tree-file";
qx.Class.define(b,{extend:qx.ui.tree.AbstractTreeItem,construct:function(c){qx.ui.tree.AbstractTreeItem.call(this);

if(c){this.setLabel(c);
}},properties:{appearance:{refine:true,init:a}},members:{_addWidgets:function(){this.addSpacer();
this.addIcon();
this.addLabel();
}}});
})();
(function(){var o="Boolean",n="qx.event.type.Event",m="queued",l="String",k="sending",j="receiving",i="aborted",h="failed",g="nocache",f="completed",W="qx.io.remote.Response",V="POST",U="configured",T="timeout",S="GET",R="Pragma",Q="no-url-params-on-post",P="PUT",O="no-cache",N="Cache-Control",w="Content-Type",x="text/plain",t="application/xml",u="application/json",r="text/html",s="qx.ioRemoteDebug",p="application/x-www-form-urlencoded",q="qx.io.remote.Exchange",y="Integer",z="X-Qooxdoo-Response-Type",F="HEAD",E="qx.io.remote.Request",H="qx.debug",G="_applyResponseType",J="_applyState",I="text/javascript",B="changeState",M="_applyProhibitCaching",L="",K="_applyMethod",A="DELETE",C="boolean",D="on";
qx.Class.define(E,{extend:qx.core.Object,construct:function(bo,bp,bq){qx.core.Object.call(this);
this.__rf={};
this.__rg={};
this.__rh={};
this.__ri={};

if(bo!==undefined){this.setUrl(bo);
}
if(bp!==undefined){this.setMethod(bp);
}
if(bq!==undefined){this.setResponseType(bq);
}this.setProhibitCaching(true);
this.__rj=++qx.io.remote.Request.__rj;
},events:{"created":n,"configured":n,"sending":n,"receiving":n,"completed":W,"aborted":n,"failed":W,"timeout":W},statics:{__rj:0,methodAllowsRequestBody:function(bm){return (bm==V)||(bm==P);
}},properties:{url:{check:l,init:L},method:{check:[S,V,P,F,A],apply:K,init:S},asynchronous:{check:o,init:true},data:{check:l,nullable:true},username:{check:l,nullable:true},password:{check:l,nullable:true},state:{check:[U,m,k,j,f,i,T,h],init:U,apply:J,event:B},responseType:{check:[x,I,u,t,r],init:x,apply:G},timeout:{check:y,nullable:true},prohibitCaching:{check:function(v){return typeof v==C||v===Q;
},init:true,apply:M},crossDomain:{check:o,init:false},fileUpload:{check:o,init:false},transport:{check:q,nullable:true},useBasicHttpAuth:{check:o,init:false},parseJson:{check:o,init:true}},members:{__rf:null,__rg:null,__rh:null,__ri:null,__rj:null,send:function(){qx.io.remote.RequestQueue.getInstance().add(this);
},abort:function(){qx.io.remote.RequestQueue.getInstance().abort(this);
},reset:function(){switch(this.getState()){case k:case j:this.error("Aborting already sent request!");
case m:this.abort();
break;
}},isConfigured:function(){return this.getState()===U;
},isQueued:function(){return this.getState()===m;
},isSending:function(){return this.getState()===k;
},isReceiving:function(){return this.getState()===j;
},isCompleted:function(){return this.getState()===f;
},isAborted:function(){return this.getState()===i;
},isTimeout:function(){return this.getState()===T;
},isFailed:function(){return this.getState()===h;
},__rk:function(e){var be=e.clone();
be.setTarget(this);
this.dispatchEvent(be);
},_onqueued:function(e){this.setState(m);
this.__rk(e);
},_onsending:function(e){this.setState(k);
this.__rk(e);
},_onreceiving:function(e){this.setState(j);
this.__rk(e);
},_oncompleted:function(e){this.setState(f);
this.__rk(e);
this.dispose();
},_onaborted:function(e){this.setState(i);
this.__rk(e);
this.dispose();
},_ontimeout:function(e){this.setState(T);
this.__rk(e);
this.dispose();
},_onfailed:function(e){this.setState(h);
this.__rk(e);
this.dispose();
},_applyState:function(bf,bg){if(qx.core.Variant.isSet(H,D)){if(qx.core.Setting.get(s)){this.debug("State: "+bf);
}}},_applyProhibitCaching:function(X,Y){if(!X){this.removeParameter(g);
this.removeRequestHeader(R);
this.removeRequestHeader(N);
return;
}if(X!==Q||this.getMethod()!=V){this.setParameter(g,new Date().valueOf());
}else{this.removeParameter(g);
}this.setRequestHeader(R,O);
this.setRequestHeader(N,O);
},_applyMethod:function(br,bs){if(qx.io.remote.Request.methodAllowsRequestBody(br)){this.setRequestHeader(w,p);
}else{this.removeRequestHeader(w);
}var bt=this.getProhibitCaching();
this._applyProhibitCaching(bt,bt);
},_applyResponseType:function(ba,bb){this.setRequestHeader(z,ba);
},setRequestHeader:function(bh,bi){this.__rf[bh]=bi;
},removeRequestHeader:function(bw){delete this.__rf[bw];
},getRequestHeader:function(bn){return this.__rf[bn]||null;
},getRequestHeaders:function(){return this.__rf;
},setParameter:function(bj,bk,bl){if(bl){this.__rh[bj]=bk;
}else{this.__rg[bj]=bk;
}},removeParameter:function(c,d){if(d){delete this.__rh[c];
}else{delete this.__rg[c];
}},getParameter:function(a,b){if(b){return this.__rh[a]||null;
}else{return this.__rg[a]||null;
}},getParameters:function(bc){return (bc?this.__rh:this.__rg);
},setFormField:function(bu,bv){this.__ri[bu]=bv;
},removeFormField:function(bd){delete this.__ri[bd];
},getFormField:function(bx){return this.__ri[bx]||null;
},getFormFields:function(){return this.__ri;
},getSequenceNumber:function(){return this.__rj;
}},destruct:function(){this.setTransport(null);
this.__rf=this.__rg=this.__rh=this.__ri=null;
}});
})();
(function(){var b=".",a="qx.bom.client.Transport";
qx.Class.define(a,{statics:{getMaxConcurrentRequestCount:function(){var h;
var c=qx.bom.client.Engine;
var g=c.FULLVERSION.split(b);
var e=0;
var d=0;
var f=0;
if(g[0]){e=g[0];
}if(g[1]){d=g[1];
}if(g[2]){f=g[2];
}if(window.maxConnectionsPerServer){h=window.maxConnectionsPerServer;
}else if(c.OPERA){h=8;
}else if(c.WEBKIT){h=4;
}else if(c.GECKO&&((e>1)||((e==1)&&(d>9))||((e==1)&&(d==9)&&(f>=1)))){h=6;
}else{h=2;
}return h;
}}});
})();
(function(){var s="qx.ioRemoteDebug",r="Integer",q="qx.debug",p="on",o="aborted",n="_onaborted",m="_on",l="Boolean",k="singleton",j="interval",E="receiving",D="Request-Queue Progress: ",C="queued",B="/",A="_applyEnabled",z="sending",y="completed",x="failed",w="qx.io.remote.RequestQueue",v="__oD",t="__oF",u="timeout";
qx.Class.define(w,{type:k,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__oC=[];
this.__oD=[];
this.__oE=0;
this.__oF=new qx.event.Timer(500);
this.__oF.addListener(j,this._oninterval,this);
},properties:{enabled:{init:true,check:l,apply:A},maxTotalRequests:{check:r,nullable:true},maxConcurrentRequests:{check:r,init:qx.bom.client.Transport.getMaxConcurrentRequestCount()},defaultTimeout:{check:r,init:5000}},members:{__oC:null,__oD:null,__oE:null,__oF:null,getRequestQueue:function(){return this.__oC;
},getActiveQueue:function(){return this.__oD;
},_debug:function(){if(qx.core.Variant.isSet(q,p)){if(qx.core.Setting.get(s)){var Q=this.__oD.length+B+(this.__oC.length+this.__oD.length);
this.debug("Progress: "+Q);
window.status=D+Q;
}}},_check:function(){this._debug();
if(this.__oD.length==0&&this.__oC.length==0){this.__oF.stop();
}if(!this.getEnabled()){return;
}if(this.__oC.length==0||(this.__oC[0].isAsynchronous()&&this.__oD.length>=this.getMaxConcurrentRequests())){return;
}if(this.getMaxTotalRequests()!=null&&this.__oE>=this.getMaxTotalRequests()){return;
}var R=this.__oC.shift();
var S=new qx.io.remote.Exchange(R);
this.__oE++;
this.__oD.push(S);
this._debug();
S.addListener(z,this._onsending,this);
S.addListener(E,this._onreceiving,this);
S.addListener(y,this._oncompleted,this);
S.addListener(o,this._oncompleted,this);
S.addListener(u,this._oncompleted,this);
S.addListener(x,this._oncompleted,this);
S._start=(new Date).valueOf();
S.send();
if(this.__oC.length>0){this._check();
}},_remove:function(J){qx.lang.Array.remove(this.__oD,J);
J.dispose();
this._check();
},__oG:0,_onsending:function(e){if(qx.core.Variant.isSet(q,p)){if(qx.core.Setting.get(s)){this.__oG++;
e.getTarget()._counted=true;
this.debug("ActiveCount: "+this.__oG);
}}e.getTarget().getRequest()._onsending(e);
},_onreceiving:function(e){e.getTarget().getRequest()._onreceiving(e);
},_oncompleted:function(e){if(qx.core.Variant.isSet(q,p)){if(qx.core.Setting.get(s)){if(e.getTarget()._counted){this.__oG--;
this.debug("ActiveCount: "+this.__oG);
}}}var M=e.getTarget().getRequest();
var L=m+e.getType();
try{if(M[L]){M[L](e);
}}catch(N){var K=qx.dev.StackTrace.getStackTraceFromError(N);
this.error("Request "+M+" handler "+L+" threw an error: "+N+"\nStack Trace:\n"+K);
try{if(M[n]){var event=qx.event.Registration.createEvent(o,qx.event.type.Event);
M[n](event);
}}catch(F){}}finally{this._remove(e.getTarget());
}},_oninterval:function(e){var h=this.__oD;

if(h.length==0){this.__oF.stop();
return;
}var b=(new Date).valueOf();
var f;
var c;
var g=this.getDefaultTimeout();
var d;
var a;

for(var i=h.length-1;i>=0;i--){f=h[i];
c=f.getRequest();

if(c.isAsynchronous()){d=c.getTimeout();
if(d==0){continue;
}
if(d==null){d=g;
}a=b-f._start;

if(a>d){this.warn("Timeout: transport "+f.toHashCode());
this.warn(a+"ms > "+d+"ms");
f.timeout();
}}}},_applyEnabled:function(O,P){if(O){this._check();
}this.__oF.setEnabled(O);
},add:function(I){I.setState(C);

if(I.isAsynchronous()){this.__oC.push(I);
}else{this.__oC.unshift(I);
}this._check();

if(this.getEnabled()){this.__oF.start();
}},abort:function(G){var H=G.getTransport();

if(H){H.abort();
}else if(qx.lang.Array.contains(this.__oC,G)){qx.lang.Array.remove(this.__oC,G);
}}},destruct:function(){this._disposeArray(v);
this._disposeObjects(t);
this.__oC=null;
}});
})();
(function(){var M="qx.ioRemoteDebug",L="qx.debug",K="on",J="failed",I="sending",H="completed",G="receiving",F="aborted",E="timeout",D="qx.event.type.Event",bO="Connection dropped",bN="qx.io.remote.Response",bM="configured",bL="Unknown status code. ",bK="=",bJ="qx.io.remote.transport.XmlHttp",bI="qx.io.remote.transport.Abstract",bH="Request-URL too large",bG="MSHTML-specific HTTP status code",bF="Not available",T="Precondition failed",U="Server error",R="&",S="qx.io.remote.Exchange",P="Possibly due to a cross-domain request?",Q="Bad gateway",N="Gone",O="See other",ba="Partial content",bb="Server timeout",bl="qx.io.remote.transport.Script",bi="HTTP version not supported",bt="Unauthorized",bo="Possibly due to application URL using 'file:' protocol?",bB="Multiple choices",by="Payment required",be="Not implemented",bE="Proxy authentication required",bD="Length required",bC="_applyState",bd="changeState",bg="Not modified",bh="Not acceptable",bk="qx.io.remote.Request",bm="Connection closed by server",bp="Moved permanently",bv="_applyImplementation",bA="Method not allowed",V="Moved temporarily",W="Forbidden",bf="Use proxy",bs="Ok",br="Conflict",bq="Not found",bx="Request time-out",bw="Bad request",bn="No content",bu="file:",A="qx.io.remote.transport.Iframe",bz="Request entity too large",X="Unknown status code",Y="Unsupported media type",bj="Gateway time-out",B="created",C="Out of resources",bc="undefined";
qx.Class.define(S,{extend:qx.core.Object,construct:function(cg){qx.core.Object.call(this);
this.setRequest(cg);
cg.setTransport(this);
},events:{"sending":D,"receiving":D,"completed":bN,"aborted":D,"failed":bN,"timeout":bN},statics:{typesOrder:[bJ,A,bl],typesReady:false,typesAvailable:{},typesSupported:{},registerType:function(m,n){qx.io.remote.Exchange.typesAvailable[n]=m;
},initTypes:function(){if(qx.io.remote.Exchange.typesReady){return;
}
for(var y in qx.io.remote.Exchange.typesAvailable){var x=qx.io.remote.Exchange.typesAvailable[y];

if(x.isSupported()){qx.io.remote.Exchange.typesSupported[y]=x;
}}qx.io.remote.Exchange.typesReady=true;

if(qx.lang.Object.isEmpty(qx.io.remote.Exchange.typesSupported)){throw new Error("No supported transport types were found!");
}},canHandle:function(b,c,d){if(!qx.lang.Array.contains(b.handles.responseTypes,d)){return false;
}
for(var f in c){if(!b.handles[f]){return false;
}}return true;
},_nativeMap:{0:B,1:bM,2:I,3:G,4:H},wasSuccessful:function(h,j,k){if(k){switch(h){case null:case 0:return true;
case -1:return j<4;
default:return typeof h===bc;
}}else{switch(h){case -1:if(qx.core.Variant.isSet(L,K)){if(qx.core.Setting.get(M)&&j>3){qx.log.Logger.debug(this,"Failed with statuscode: -1 at readyState "+j);
}}return j<4;
case 200:case 304:return true;
case 201:case 202:case 203:case 204:case 205:return true;
case 206:if(qx.core.Variant.isSet(L,K)){if(qx.core.Setting.get(M)&&j===4){qx.log.Logger.debug(this,"Failed with statuscode: 206 (Partial content while being complete!)");
}}return j!==4;
case 300:case 301:case 302:case 303:case 305:case 400:case 401:case 402:case 403:case 404:case 405:case 406:case 407:case 408:case 409:case 410:case 411:case 412:case 413:case 414:case 415:case 500:case 501:case 502:case 503:case 504:case 505:if(qx.core.Variant.isSet(L,K)){if(qx.core.Setting.get(M)){qx.log.Logger.debug(this,"Failed with typical HTTP statuscode: "+h);
}}return false;
case 12002:case 12007:case 12029:case 12030:case 12031:case 12152:case 13030:if(qx.core.Variant.isSet(L,K)){if(qx.core.Setting.get(M)){qx.log.Logger.debug(this,"Failed with MSHTML specific HTTP statuscode: "+h);
}}return false;
default:if(h>206&&h<300){return true;
}qx.log.Logger.debug(this,"Unknown status code: "+h+" ("+j+")");
return false;
}}},statusCodeToString:function(bP){switch(bP){case -1:return bF;
case 0:var bQ=window.location.href;
if(qx.lang.String.startsWith(bQ.toLowerCase(),bu)){return (bL+bo);
}else{return (bL+P);
}break;
case 200:return bs;
case 304:return bg;
case 206:return ba;
case 204:return bn;
case 300:return bB;
case 301:return bp;
case 302:return V;
case 303:return O;
case 305:return bf;
case 400:return bw;
case 401:return bt;
case 402:return by;
case 403:return W;
case 404:return bq;
case 405:return bA;
case 406:return bh;
case 407:return bE;
case 408:return bx;
case 409:return br;
case 410:return N;
case 411:return bD;
case 412:return T;
case 413:return bz;
case 414:return bH;
case 415:return Y;
case 500:return U;
case 501:return be;
case 502:return Q;
case 503:return C;
case 504:return bj;
case 505:return bi;
case 12002:return bb;
case 12029:return bO;
case 12030:return bO;
case 12031:return bO;
case 12152:return bm;
case 13030:return bG;
default:return X;
}}},properties:{request:{check:bk,nullable:true},implementation:{check:bI,nullable:true,apply:bv},state:{check:[bM,I,G,H,F,E,J],init:bM,event:bd,apply:bC}},members:{send:function(){var bV=this.getRequest();

if(!bV){return this.error("Please attach a request object first");
}qx.io.remote.Exchange.initTypes();
var bT=qx.io.remote.Exchange.typesOrder;
var bS=qx.io.remote.Exchange.typesSupported;
var bX=bV.getResponseType();
var bY={};

if(bV.getAsynchronous()){bY.asynchronous=true;
}else{bY.synchronous=true;
}
if(bV.getCrossDomain()){bY.crossDomain=true;
}
if(bV.getFileUpload()){bY.fileUpload=true;
}for(var bW in bV.getFormFields()){bY.programaticFormFields=true;
break;
}var ca,bU;

for(var i=0,l=bT.length;i<l;i++){ca=bS[bT[i]];

if(ca){if(!qx.io.remote.Exchange.canHandle(ca,bY,bX)){continue;
}
try{if(qx.core.Variant.isSet(L,K)){if(qx.core.Setting.get(M)){this.debug("Using implementation: "+ca.classname);
}}bU=new ca;
this.setImplementation(bU);
bU.setUseBasicHttpAuth(bV.getUseBasicHttpAuth());
bU.send();
return true;
}catch(bR){this.error("Request handler throws error");
this.error(bR);
return;
}}}this.error("There is no transport implementation available to handle this request: "+bV);
},abort:function(){var o=this.getImplementation();

if(o){if(qx.core.Variant.isSet(L,K)){if(qx.core.Setting.get(M)){this.debug("Abort: implementation "+o.toHashCode());
}}o.abort();
}else{if(qx.core.Variant.isSet(L,K)){if(qx.core.Setting.get(M)){this.debug("Abort: forcing state to be aborted");
}}this.setState(F);
}},timeout:function(){var g=this.getImplementation();

if(g){this.warn("Timeout: implementation "+g.toHashCode());
g.timeout();
}else{this.warn("Timeout: forcing state to timeout");
this.setState(E);
}this.__qB();
},__qB:function(){var a=this.getRequest();

if(a){a.setTimeout(0);
}},_onsending:function(e){this.setState(I);
},_onreceiving:function(e){this.setState(G);
},_oncompleted:function(e){this.setState(H);
},_onabort:function(e){this.setState(F);
},_onfailed:function(e){this.setState(J);
},_ontimeout:function(e){this.setState(E);
},_applyImplementation:function(p,q){if(q){q.removeListener(I,this._onsending,this);
q.removeListener(G,this._onreceiving,this);
q.removeListener(H,this._oncompleted,this);
q.removeListener(F,this._onabort,this);
q.removeListener(E,this._ontimeout,this);
q.removeListener(J,this._onfailed,this);
}
if(p){var s=this.getRequest();
p.setUrl(s.getUrl());
p.setMethod(s.getMethod());
p.setAsynchronous(s.getAsynchronous());
p.setUsername(s.getUsername());
p.setPassword(s.getPassword());
p.setParameters(s.getParameters(false));
p.setFormFields(s.getFormFields());
p.setRequestHeaders(s.getRequestHeaders());
if(p instanceof qx.io.remote.transport.XmlHttp){p.setParseJson(s.getParseJson());
}var v=s.getData();

if(v===null){var w=s.getParameters(true);
var u=[];

for(var r in w){var t=w[r];

if(t instanceof Array){for(var i=0;i<t.length;i++){u.push(encodeURIComponent(r)+bK+encodeURIComponent(t[i]));
}}else{u.push(encodeURIComponent(r)+bK+encodeURIComponent(t));
}}
if(u.length>0){p.setData(u.join(R));
}}else{p.setData(v);
}p.setResponseType(s.getResponseType());
p.addListener(I,this._onsending,this);
p.addListener(G,this._onreceiving,this);
p.addListener(H,this._oncompleted,this);
p.addListener(F,this._onabort,this);
p.addListener(E,this._ontimeout,this);
p.addListener(J,this._onfailed,this);
}},_applyState:function(cb,cc){if(qx.core.Variant.isSet(L,K)){if(qx.core.Setting.get(M)){this.debug("State: "+cc+" => "+cb);
}}
switch(cb){case I:this.fireEvent(I);
break;
case G:this.fireEvent(G);
break;
case H:case F:case E:case J:var ce=this.getImplementation();

if(!ce){break;
}this.__qB();

if(this.hasListener(cb)){var cf=qx.event.Registration.createEvent(cb,qx.io.remote.Response);

if(cb==H){var cd=ce.getResponseContent();
cf.setContent(cd);
if(cd===null){if(qx.core.Variant.isSet(L,K)){if(qx.core.Setting.get(M)){this.debug("Altered State: "+cb+" => failed");
}}cb=J;
}}else if(cb==J){cf.setContent(ce.getResponseContent());
}cf.setStatusCode(ce.getStatusCode());
cf.setResponseHeaders(ce.getResponseHeaders());
this.dispatchEvent(cf);
}this.setImplementation(null);
ce.dispose();
break;
}}},settings:{"qx.ioRemoteDebug":false,"qx.ioRemoteDebugData":false},destruct:function(){var z=this.getImplementation();

if(z){this.setImplementation(null);
z.dispose();
}this.setRequest(null);
}});
})();
(function(){var t="qx.event.type.Event",s="String",r="qx.ioRemoteDebug",q="qx.debug",p="failed",o="timeout",n="on",m="created",l="aborted",k="sending",d="configured",j="receiving",g="completed",c="Object",b="Boolean",f="abstract",e="_applyState",h="GET",a="changeState",i="qx.io.remote.transport.Abstract";
qx.Class.define(i,{type:f,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.setRequestHeaders({});
this.setParameters({});
this.setFormFields({});
},events:{"created":t,"configured":t,"sending":t,"receiving":t,"completed":t,"aborted":t,"failed":t,"timeout":t},properties:{url:{check:s,nullable:true},method:{check:s,nullable:true,init:h},asynchronous:{check:b,nullable:true,init:true},data:{check:s,nullable:true},username:{check:s,nullable:true},password:{check:s,nullable:true},state:{check:[m,d,k,j,g,l,o,p],init:m,event:a,apply:e},requestHeaders:{check:c,nullable:true},parameters:{check:c,nullable:true},formFields:{check:c,nullable:true},responseType:{check:s,nullable:true},useBasicHttpAuth:{check:b,nullable:true}},members:{send:function(){throw new Error("send is abstract");
},abort:function(){if(qx.core.Variant.isSet(q,n)){if(qx.core.Setting.get(r)){this.warn("Aborting...");
}}this.setState(l);
},timeout:function(){if(qx.core.Variant.isSet(q,n)){if(qx.core.Setting.get(r)){this.warn("Timeout...");
}}this.setState(o);
},failed:function(){if(qx.core.Variant.isSet(q,n)){if(qx.core.Setting.get(r)){this.warn("Failed...");
}}this.setState(p);
},setRequestHeader:function(x,y){throw new Error("setRequestHeader is abstract");
},getResponseHeader:function(w){throw new Error("getResponseHeader is abstract");
},getResponseHeaders:function(){throw new Error("getResponseHeaders is abstract");
},getStatusCode:function(){throw new Error("getStatusCode is abstract");
},getStatusText:function(){throw new Error("getStatusText is abstract");
},getResponseText:function(){throw new Error("getResponseText is abstract");
},getResponseXml:function(){throw new Error("getResponseXml is abstract");
},getFetchedLength:function(){throw new Error("getFetchedLength is abstract");
},_applyState:function(u,v){if(qx.core.Variant.isSet(q,n)){if(qx.core.Setting.get(r)){this.debug("State: "+u);
}}
switch(u){case m:this.fireEvent(m);
break;
case d:this.fireEvent(d);
break;
case k:this.fireEvent(k);
break;
case j:this.fireEvent(j);
break;
case g:this.fireEvent(g);
break;
case l:this.fireEvent(l);
break;
case p:this.fireEvent(p);
break;
case o:this.fireEvent(o);
break;
}return true;
}},destruct:function(){this.setRequestHeaders(null);
this.setParameters(null);
this.setFormFields(null);
}});
})();
(function(){var m="qx.debug",l="on",k="qx.ioRemoteDebugData",j="=",h="&",g="application/xml",f="application/json",d="text/html",c="qx.ioRemoteDebug",b="qx.client",K="textarea",J="none",I="text/plain",H="text/javascript",G="",F="completed",E="?",D="qx.io.remote.transport.Iframe",C="gecko",B="frame_",t="aborted",u="_data_",r="pre",s="javascript:void(0)",p="sending",q="form",n="failed",o='<iframe name="',v="mshtml",w="form_",y='"></iframe>',x="iframe",A="timeout",z="qx/static/blank.gif";
qx.Class.define(D,{extend:qx.io.remote.transport.Abstract,construct:function(){qx.io.remote.transport.Abstract.call(this);
var P=(new Date).valueOf();
var Q=B+P;
var R=w+P;
if(qx.core.Variant.isSet(b,v)){this.__ni=document.createElement(o+Q+y);
}else{this.__ni=document.createElement(x);
}this.__ni.src=s;
this.__ni.id=this.__ni.name=Q;
this.__ni.onload=qx.lang.Function.bind(this._onload,this);
this.__ni.style.display=J;
document.body.appendChild(this.__ni);
this.__nj=document.createElement(q);
this.__nj.target=Q;
this.__nj.id=this.__nj.name=R;
this.__nj.style.display=J;
document.body.appendChild(this.__nj);
this.__nk=document.createElement(K);
this.__nk.id=this.__nk.name=u;
this.__nj.appendChild(this.__nk);
this.__ni.onreadystatechange=qx.lang.Function.bind(this._onreadystatechange,this);
},statics:{handles:{synchronous:false,asynchronous:true,crossDomain:false,fileUpload:true,programaticFormFields:true,responseTypes:[I,H,f,g,d]},isSupported:function(){return true;
},_numericMap:{"uninitialized":1,"loading":2,"loaded":2,"interactive":3,"complete":4}},members:{__nk:null,__nl:0,__nj:null,__ni:null,send:function(){var V=this.getMethod();
var X=this.getUrl();
var bc=this.getParameters(false);
var bb=[];

for(var W in bc){var Y=bc[W];

if(Y instanceof Array){for(var i=0;i<Y.length;i++){bb.push(encodeURIComponent(W)+j+encodeURIComponent(Y[i]));
}}else{bb.push(encodeURIComponent(W)+j+encodeURIComponent(Y));
}}
if(bb.length>0){X+=(X.indexOf(E)>=0?h:E)+bb.join(h);
}if(this.getData()===null){var bc=this.getParameters(true);
var bb=[];

for(var W in bc){var Y=bc[W];

if(Y instanceof Array){for(var i=0;i<Y.length;i++){bb.push(encodeURIComponent(W)+j+encodeURIComponent(Y[i]));
}}else{bb.push(encodeURIComponent(W)+j+encodeURIComponent(Y));
}}
if(bb.length>0){this.setData(bb.join(h));
}}var U=this.getFormFields();

for(var W in U){var ba=document.createElement(K);
ba.name=W;
ba.appendChild(document.createTextNode(U[W]));
this.__nj.appendChild(ba);
}this.__nj.action=X;
this.__nj.method=V;
this.__nk.appendChild(document.createTextNode(this.getData()));
this.__nj.submit();
this.setState(p);
},_onload:qx.event.GlobalError.observeMethod(function(e){if(this.__nj.src){return;
}this._switchReadyState(qx.io.remote.transport.Iframe._numericMap.complete);
}),_onreadystatechange:qx.event.GlobalError.observeMethod(function(e){this._switchReadyState(qx.io.remote.transport.Iframe._numericMap[this.__ni.readyState]);
}),_switchReadyState:function(T){switch(this.getState()){case F:case t:case n:case A:this.warn("Ignore Ready State Change");
return;
}while(this.__nl<T){this.setState(qx.io.remote.Exchange._nativeMap[++this.__nl]);
}},setRequestHeader:function(M,N){},getResponseHeader:function(be){return null;
},getResponseHeaders:function(){return {};
},getStatusCode:function(){return 200;
},getStatusText:function(){return G;
},getIframeWindow:function(){return qx.bom.Iframe.getWindow(this.__ni);
},getIframeDocument:function(){return qx.bom.Iframe.getDocument(this.__ni);
},getIframeBody:function(){return qx.bom.Iframe.getBody(this.__ni);
},getIframeTextContent:function(){var a=this.getIframeBody();

if(!a){return null;
}
if(!a.firstChild){return G;
}if(a.firstChild.tagName&&a.firstChild.tagName.toLowerCase()==r){return a.firstChild.innerHTML;
}else{return a.innerHTML;
}},getIframeHtmlContent:function(){var S=this.getIframeBody();
return S?S.innerHTML:null;
},getFetchedLength:function(){return 0;
},getResponseContent:function(){if(this.getState()!==F){if(qx.core.Variant.isSet(m,l)){if(qx.core.Setting.get(c)){this.warn("Transfer not complete, ignoring content!");
}}return null;
}
if(qx.core.Variant.isSet(m,l)){if(qx.core.Setting.get(c)){this.debug("Returning content for responseType: "+this.getResponseType());
}}var L=this.getIframeTextContent();

switch(this.getResponseType()){case I:if(qx.core.Variant.isSet(m,l)){if(qx.core.Setting.get(k)){this.debug("Response: "+this._responseContent);
}}return L;
break;
case d:L=this.getIframeHtmlContent();

if(qx.core.Variant.isSet(m,l)){if(qx.core.Setting.get(k)){this.debug("Response: "+this._responseContent);
}}return L;
break;
case f:L=this.getIframeHtmlContent();

if(qx.core.Variant.isSet(m,l)){if(qx.core.Setting.get(k)){this.debug("Response: "+this._responseContent);
}}
try{return L&&L.length>0?qx.util.Json.parse(L,false):null;
}catch(O){return this.error("Could not execute json: ("+L+")",O);
}case H:L=this.getIframeHtmlContent();

if(qx.core.Variant.isSet(m,l)){if(qx.core.Setting.get(k)){this.debug("Response: "+this._responseContent);
}}
try{return L&&L.length>0?window.eval(L):null;
}catch(bd){return this.error("Could not execute javascript: ("+L+")",bd);
}case g:L=this.getIframeDocument();

if(qx.core.Variant.isSet(m,l)){if(qx.core.Setting.get(k)){this.debug("Response: "+this._responseContent);
}}return L;
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}}},defer:function(){qx.io.remote.Exchange.registerType(qx.io.remote.transport.Iframe,D);
},destruct:function(){if(this.__ni){this.__ni.onload=null;
this.__ni.onreadystatechange=null;
if(qx.core.Variant.isSet(b,C)){this.__ni.src=qx.util.ResourceManager.getInstance().toUri(z);
}document.body.removeChild(this.__ni);
}
if(this.__nj){document.body.removeChild(this.__nj);
}this.__ni=this.__nj=this.__nk=null;
}});
})();
(function(){var p=",",o="",n="string",m="null",k="new Date(Date.UTC(",j="qx.jsonDebugging",h='"',g="))",f=':',e='-',Q='\\u00',P="__nU",O="__od",N='\\\\',M='\\f',L="__nT",K='\\"',J="__nR",I='Z',H='T',w="}",x='(',u='.',v="{",s='\\r',t=":",q='\\t',r="__oc",y="The default returned parsed date format will change. Use the CONVERT_DATES flag to change the behavior.",z="]",C="[",B="qx.jsonEncodeUndefined",E='\\b',D="__nS",G="qx.util.Json",F=')',A='\\n';
qx.Class.define(G,{statics:{__nP:null,BEAUTIFYING_INDENT:"  ",BEAUTIFYING_LINE_END:"\n",CONVERT_DATES:null,__nQ:{"function":J,"boolean":D,"number":L,"string":P,"object":r,"undefined":O},__nR:function(X,Y){return String(X);
},__nS:function(bp,bq){return String(bp);
},__nT:function(by,bz){return isFinite(by)?String(by):m;
},__nU:function(R,S){var T;

if(/["\\\x00-\x1f]/.test(R)){T=R.replace(/([\x00-\x1f\\"])/g,qx.util.Json.__nW);
}else{T=R;
}return h+T+h;
},__nV:{'\b':E,'\t':q,'\n':A,'\f':M,'\r':s,'"':K,'\\':N},__nW:function(a,b){var bt=qx.util.Json.__nV[b];

if(bt){return bt;
}bt=b.charCodeAt();
return Q+Math.floor(bt/16).toString(16)+(bt%16).toString(16);
},__nX:function(ba,bb){var bd=[],bg=true,bf,bc;
var be=qx.util.Json.__of;
bd.push(C);

if(be){qx.util.Json.__nY+=qx.util.Json.BEAUTIFYING_INDENT;
bd.push(qx.util.Json.__nY);
}
for(var i=0,l=ba.length;i<l;i++){bc=ba[i];
bf=this.__nQ[typeof bc];

if(bf){bc=this[bf](bc,i+o);

if(typeof bc==n){if(!bg){bd.push(p);

if(be){bd.push(qx.util.Json.__nY);
}}bd.push(bc);
bg=false;
}}}
if(be){qx.util.Json.__nY=qx.util.Json.__nY.substring(0,qx.util.Json.__nY.length-qx.util.Json.BEAUTIFYING_INDENT.length);
bd.push(qx.util.Json.__nY);
}bd.push(z);
return bd.join(o);
},__oa:function(bk,bl){if(qx.util.Json.CONVERT_DATES===null){qx.log.Logger.deprecatedMethodWarning(arguments.callee,y);
var bn=bk.getUTCFullYear()+p+bk.getUTCMonth()+p+bk.getUTCDate()+p+bk.getUTCHours()+p+bk.getUTCMinutes()+p+bk.getUTCSeconds()+p+bk.getUTCMilliseconds();
return k+bn+g;
}else if(!qx.util.Json.CONVERT_DATES){if(bk.toJSON){return bk.toJSON();
}var bm=qx.util.format.NumberFormat.getInstance();
bm.setMinimumIntegerDigits(2);
var bo=bk.getUTCFullYear()+e+bm.format(bk.getUTCMonth()+1)+e+bm.format(bk.getUTCDate())+H+bm.format(bk.getUTCHours())+f+bm.format(bk.getUTCMinutes())+f+bm.format(bk.getUTCSeconds())+u;
bm.setMinimumIntegerDigits(3);
return bo+bm.format(bk.getUTCMilliseconds())+I;
}else{var bn=bk.getUTCFullYear()+p+bk.getUTCMonth()+p+bk.getUTCDate()+p+bk.getUTCHours()+p+bk.getUTCMinutes()+p+bk.getUTCSeconds()+p+bk.getUTCMilliseconds();
return k+bn+g;
}},__ob:function(bA,bB){var bE=[],bG=true,bD,bC;
var bF=qx.util.Json.__of;
bE.push(v);

if(bF){qx.util.Json.__nY+=qx.util.Json.BEAUTIFYING_INDENT;
bE.push(qx.util.Json.__nY);
}
for(var bB in bA){bC=bA[bB];
bD=this.__nQ[typeof bC];

if(bD){bC=this[bD](bC,bB);

if(typeof bC==n){if(!bG){bE.push(p);

if(bF){bE.push(qx.util.Json.__nY);
}}bE.push(this.__nU(bB),t,bC);
bG=false;
}}}
if(bF){qx.util.Json.__nY=qx.util.Json.__nY.substring(0,qx.util.Json.__nY.length-qx.util.Json.BEAUTIFYING_INDENT.length);
bE.push(qx.util.Json.__nY);
}bE.push(w);
return bE.join(o);
},__oc:function(V,W){if(V){if(qx.lang.Type.isFunction(V.toJSON)&&V.toJSON!==this.__nP){return this.__oe(V.toJSON(W),W);
}else if(qx.lang.Type.isDate(V)){return this.__oa(V,W);
}else if(qx.lang.Type.isArray(V)){return this.__nX(V,W);
}else if(qx.lang.Type.isObject(V)){return this.__ob(V,W);
}return o;
}return m;
},__od:function(c,d){if(qx.core.Setting.get(B)){return m;
}},__oe:function(br,bs){return this[this.__nQ[typeof br]](br,bs);
},stringify:function(bh,bi){this.__of=bi;
this.__nY=this.BEAUTIFYING_LINE_END;
var bj=this.__oe(bh,o);

if(typeof bj!=n){bj=null;
}if(qx.core.Setting.get(j)){qx.log.Logger.debug(this,"JSON request: "+bj);
}return bj;
},parse:function(bv,bw){if(bw===undefined){bw=true;
}
if(qx.core.Setting.get(j)){qx.log.Logger.debug(this,"JSON response: "+bv);
}
if(bw){if(/[^,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]/.test(bv.replace(/"(\\.|[^"\\])*"/g,o))){throw new Error("Could not parse JSON string!");
}}
try{var bx=(bv&&bv.length>0)?eval(x+bv+F):null;
return bx;
}catch(U){throw new Error("Could not evaluate JSON string: "+U.message);
}}},settings:{"qx.jsonEncodeUndefined":true,"qx.jsonDebugging":false},defer:function(bu){bu.__nP=Date.prototype.toJSON;
}});
})();
(function(){var a="qx.util.format.IFormat";
qx.Interface.define(a,{members:{format:function(c){},parse:function(b){}}});
})();
(function(){var C="",B="Number",A="-",z="0",y="String",x="changeNumberFormat",w='(',v="g",u="Boolean",t="$",m="NaN",s='([0-9]{1,3}(?:',p='{0,1}[0-9]{3}){0,})',l='\\d+){0,1}',k="qx.util.format.NumberFormat",o="Infinity",n="^",q=".",j="-Infinity",r='([-+]){0,1}';
qx.Class.define(k,{extend:qx.core.Object,implement:qx.util.format.IFormat,construct:function(Q){qx.core.Object.call(this);
this.__qw=Q;
},statics:{getIntegerInstance:function(){var D=qx.util.format.NumberFormat;

if(D._integerInstance==null){D._integerInstance=new D();
D._integerInstance.setMaximumFractionDigits(0);
}return D._integerInstance;
},getInstance:function(){if(!this._instance){this._instance=new this;
}return this._instance;
}},properties:{minimumIntegerDigits:{check:B,init:0},maximumIntegerDigits:{check:B,nullable:true},minimumFractionDigits:{check:B,init:0},maximumFractionDigits:{check:B,nullable:true},groupingUsed:{check:u,init:true},prefix:{check:y,init:C,event:x},postfix:{check:y,init:C,event:x}},members:{__qw:null,format:function(E){switch(E){case Infinity:return o;
case -Infinity:return j;
case NaN:return m;
}var I=(E<0);

if(I){E=-E;
}
if(this.getMaximumFractionDigits()!=null){var P=Math.pow(10,this.getMaximumFractionDigits());
E=Math.round(E*P)/P;
}var O=String(Math.floor(E)).length;
var F=C+E;
var L=F.substring(0,O);

while(L.length<this.getMinimumIntegerDigits()){L=z+L;
}
if(this.getMaximumIntegerDigits()!=null&&L.length>this.getMaximumIntegerDigits()){L=L.substring(L.length-this.getMaximumIntegerDigits());
}var K=F.substring(O+1);

while(K.length<this.getMinimumFractionDigits()){K+=z;
}
if(this.getMaximumFractionDigits()!=null&&K.length>this.getMaximumFractionDigits()){K=K.substring(0,this.getMaximumFractionDigits());
}if(this.getGroupingUsed()){var H=L;
L=C;
var N;

for(N=H.length;N>3;N-=3){L=C+qx.locale.Number.getGroupSeparator(this.__qw)+H.substring(N-3,N)+L;
}L=H.substring(0,N)+L;
}var J=this.getPrefix()?this.getPrefix():C;
var G=this.getPostfix()?this.getPostfix():C;
var M=J+(I?A:C)+L;

if(K.length>0){M+=C+qx.locale.Number.getDecimalSeparator(this.__qw)+K;
}M+=G;
return M;
},parse:function(a){var f=qx.lang.String.escapeRegexpChars(qx.locale.Number.getGroupSeparator(this.__qw)+C);
var d=qx.lang.String.escapeRegexpChars(qx.locale.Number.getDecimalSeparator(this.__qw)+C);
var b=new RegExp(n+qx.lang.String.escapeRegexpChars(this.getPrefix())+r+s+f+p+w+d+l+qx.lang.String.escapeRegexpChars(this.getPostfix())+t);
var e=b.exec(a);

if(e==null){throw new Error("Number string '"+a+"' does not match the number format");
}var g=(e[1]==A);
var i=e[2];
var h=e[3];
i=i.replace(new RegExp(f,v),C);
var c=(g?A:C)+i;

if(h!=null&&h.length!=0){h=h.replace(new RegExp(d),C);
c+=q+h;
}return parseFloat(c);
}}});
})();
(function(){var d="cldr_number_decimal_separator",c="cldr_number_percent_format",b="qx.locale.Number",a="cldr_number_group_separator";
qx.Class.define(b,{statics:{getDecimalSeparator:function(f){return qx.locale.Manager.getInstance().localize(d,[],f);
},getGroupSeparator:function(g){return qx.locale.Manager.getInstance().localize(a,[],g);
},getPercentFormat:function(e){return qx.locale.Manager.getInstance().localize(c,[],e);
}}});
})();
(function(){var w="qx.debug",v="on",u="&",t="=",s="qx.ioRemoteDebug",r="application/json",q="completed",p="text/plain",o="qx.ioRemoteDebugData",n="text/javascript",f="?",m="qx.io.remote.transport.Script",j="",d="_ScriptTransport_data",c="failed",h="script",g="timeout",k="_ScriptTransport_",b="_ScriptTransport_id",l="aborted",e="utf-8";
qx.Class.define(m,{extend:qx.io.remote.transport.Abstract,construct:function(){qx.io.remote.transport.Abstract.call(this);
var a=++qx.io.remote.transport.Script.__oH;

if(a>=2000000000){qx.io.remote.transport.Script.__oH=a=1;
}this.__oI=null;
this.__oH=a;
},statics:{__oH:0,_instanceRegistry:{},ScriptTransport_PREFIX:k,ScriptTransport_ID_PARAM:b,ScriptTransport_DATA_PARAM:d,handles:{synchronous:false,asynchronous:true,crossDomain:true,fileUpload:false,programaticFormFields:false,responseTypes:[p,n,r]},isSupported:function(){return true;
},_numericMap:{"uninitialized":1,"loading":2,"loaded":2,"interactive":3,"complete":4},_requestFinished:qx.event.GlobalError.observeMethod(function(x,content){var y=qx.io.remote.transport.Script._instanceRegistry[x];

if(y==null){if(qx.core.Variant.isSet(w,v)){if(qx.core.Setting.get(s)){this.warn("Request finished for an unknown instance (probably aborted or timed out before)");
}}}else{y._responseContent=content;
y._switchReadyState(qx.io.remote.transport.Script._numericMap.complete);
}})},members:{__oJ:0,__oI:null,__oH:null,send:function(){var G=this.getUrl();
G+=(G.indexOf(f)>=0?u:f)+qx.io.remote.transport.Script.ScriptTransport_ID_PARAM+t+this.__oH;
var J=this.getParameters();
var I=[];

for(var F in J){if(F.indexOf(qx.io.remote.transport.Script.ScriptTransport_PREFIX)==0){this.error("Illegal parameter name. The following prefix is used internally by qooxdoo): "+qx.io.remote.transport.Script.ScriptTransport_PREFIX);
}var H=J[F];

if(H instanceof Array){for(var i=0;i<H.length;i++){I.push(encodeURIComponent(F)+t+encodeURIComponent(H[i]));
}}else{I.push(encodeURIComponent(F)+t+encodeURIComponent(H));
}}
if(I.length>0){G+=u+I.join(u);
}var E=this.getData();

if(E!=null){G+=u+qx.io.remote.transport.Script.ScriptTransport_DATA_PARAM+t+encodeURIComponent(E);
}qx.io.remote.transport.Script._instanceRegistry[this.__oH]=this;
this.__oI=document.createElement(h);
this.__oI.charset=e;
this.__oI.src=G;

if(qx.core.Variant.isSet(w,v)){if(qx.core.Setting.get(o)){this.debug("Request: "+G);
}}document.body.appendChild(this.__oI);
},_switchReadyState:function(C){switch(this.getState()){case q:case l:case c:case g:this.warn("Ignore Ready State Change");
return;
}while(this.__oJ<C){this.setState(qx.io.remote.Exchange._nativeMap[++this.__oJ]);
}},setRequestHeader:function(z,A){},getResponseHeader:function(B){return null;
},getResponseHeaders:function(){return {};
},getStatusCode:function(){return 200;
},getStatusText:function(){return j;
},getFetchedLength:function(){return 0;
},getResponseContent:function(){if(this.getState()!==q){if(qx.core.Variant.isSet(w,v)){if(qx.core.Setting.get(s)){this.warn("Transfer not complete, ignoring content!");
}}return null;
}
if(qx.core.Variant.isSet(w,v)){if(qx.core.Setting.get(s)){this.debug("Returning content for responseType: "+this.getResponseType());
}}
switch(this.getResponseType()){case p:case r:case n:if(qx.core.Variant.isSet(w,v)){if(qx.core.Setting.get(o)){this.debug("Response: "+this._responseContent);
}}var D=this._responseContent;
return (D===0?0:(D||null));
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}}},defer:function(){qx.io.remote.Exchange.registerType(qx.io.remote.transport.Script,m);
},destruct:function(){if(this.__oI){delete qx.io.remote.transport.Script._instanceRegistry[this.__oH];
document.body.removeChild(this.__oI);
}this.__oI=this._responseContent=null;
}});
})();
(function(){var S="qx.debug",R="on",Q="qx.ioRemoteDebugData",P="failed",O="qx.ioRemoteDebug",N="completed",M="=",L="aborted",K="",J="sending",bt="&",bs="configured",br="timeout",bq="application/xml",bp="qx.io.remote.transport.XmlHttp",bo="application/json",bn="text/html",bm="qx.client",bl="receiving",bk="text/plain",ba="text/javascript",bb="created",X="?",Y="Boolean",V='Referer',W='Basic ',T="\n</pre>",U="string",bc='Authorization',bd="<pre>Could not execute json: \n",bf="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",be=':',bh="parseerror",bg="file:",bj="webkit",bi="object";
qx.Class.define(bp,{extend:qx.io.remote.transport.Abstract,statics:{handles:{synchronous:true,asynchronous:true,crossDomain:false,fileUpload:false,programaticFormFields:false,responseTypes:[bk,ba,bo,bq,bn]},requestObjects:[],requestObjectCount:0,createRequestObject:qx.core.Variant.select(bm,{"default":function(){return new XMLHttpRequest;
},"mshtml":function(){if(window.ActiveXObject&&qx.xml.Document.XMLHTTP){return new ActiveXObject(qx.xml.Document.XMLHTTP);
}
if(window.XMLHttpRequest){return new XMLHttpRequest;
}}}),isSupported:function(){return !!this.createRequestObject();
}},properties:{parseJson:{check:Y,init:true}},members:{__ms:false,__mt:0,__mu:null,getRequest:function(){if(this.__mu===null){this.__mu=qx.io.remote.transport.XmlHttp.createRequestObject();
this.__mu.onreadystatechange=qx.lang.Function.bind(this._onreadystatechange,this);
}return this.__mu;
},send:function(){this.__mt=0;
var t=this.getRequest();
var o=this.getMethod();
var w=this.getAsynchronous();
var v=this.getUrl();
var q=(window.location.protocol===bg&&!(/^http(s){0,1}\:/.test(v)));
this.__ms=q;
var z=this.getParameters(false);
var x=[];

for(var p in z){var u=z[p];

if(u instanceof Array){for(var i=0;i<u.length;i++){x.push(encodeURIComponent(p)+M+encodeURIComponent(u[i]));
}}else{x.push(encodeURIComponent(p)+M+encodeURIComponent(u));
}}
if(x.length>0){v+=(v.indexOf(X)>=0?bt:X)+x.join(bt);
}if(this.getData()===null){var z=this.getParameters(true);
var x=[];

for(var p in z){var u=z[p];

if(u instanceof Array){for(var i=0;i<u.length;i++){x.push(encodeURIComponent(p)+M+encodeURIComponent(u[i]));
}}else{x.push(encodeURIComponent(p)+M+encodeURIComponent(u));
}}
if(x.length>0){this.setData(x.join(bt));
}}var y=function(bz){var bE=bf;
var bI=K;
var bC,bB,bA;
var bF,bG,bH,bD;
var i=0;

do{bC=bz.charCodeAt(i++);
bB=bz.charCodeAt(i++);
bA=bz.charCodeAt(i++);
bF=bC>>2;
bG=((bC&3)<<4)|(bB>>4);
bH=((bB&15)<<2)|(bA>>6);
bD=bA&63;

if(isNaN(bB)){bH=bD=64;
}else if(isNaN(bA)){bD=64;
}bI+=bE.charAt(bF)+bE.charAt(bG)+bE.charAt(bH)+bE.charAt(bD);
}while(i<bz.length);
return bI;
};
try{if(this.getUsername()){if(this.getUseBasicHttpAuth()){t.open(o,v,w);
t.setRequestHeader(bc,W+y(this.getUsername()+be+this.getPassword()));
}else{t.open(o,v,w,this.getUsername(),this.getPassword());
}}else{t.open(o,v,w);
}}catch(I){this.error("Failed with exception: "+I);
this.failed();
return;
}if(!qx.core.Variant.isSet(bm,bj)){t.setRequestHeader(V,window.location.href);
}var r=this.getRequestHeaders();

for(var p in r){t.setRequestHeader(p,r[p]);
}try{if(qx.core.Variant.isSet(S,R)){if(qx.core.Setting.get(Q)){this.debug("Request: "+this.getData());
}}t.send(this.getData());
}catch(f){if(q){this.failedLocally();
}else{this.error("Failed to send data: "+f,"send");
this.failed();
}return;
}if(!w){this._onreadystatechange();
}},failedLocally:function(){if(this.getState()===P){return;
}this.warn("Could not load from file: "+this.getUrl());
this.failed();
},_onreadystatechange:qx.event.GlobalError.observeMethod(function(e){switch(this.getState()){case N:case L:case P:case br:if(qx.core.Variant.isSet(S,R)){if(qx.core.Setting.get(O)){this.warn("Ignore Ready State Change");
}}return;
}var j=this.getReadyState();

if(j==4){if(!qx.io.remote.Exchange.wasSuccessful(this.getStatusCode(),j,this.__ms)){if(this.getState()===bs){this.setState(J);
}this.failed();
return;
}}while(this.__mt<j){this.setState(qx.io.remote.Exchange._nativeMap[++this.__mt]);
}}),getReadyState:function(){var C=null;

try{C=this.getRequest().readyState;
}catch(k){}return C;
},setRequestHeader:function(A,B){this.getRequestHeaders()[A]=B;
},getResponseHeader:function(bx){var by=null;

try{by=this.getRequest().getResponseHeader(bx)||null;
}catch(n){}return by;
},getStringResponseHeaders:function(){var bw=null;

try{var bv=this.getRequest().getAllResponseHeaders();

if(bv){bw=bv;
}}catch(g){}return bw;
},getResponseHeaders:function(){var c=this.getStringResponseHeaders();
var d={};

if(c){var a=c.split(/[\r\n]+/g);

for(var i=0,l=a.length;i<l;i++){var b=a[i].match(/^([^:]+)\s*:\s*(.+)$/i);

if(b){d[b[1]]=b[2];
}}}return d;
},getStatusCode:function(){var m=-1;

try{m=this.getRequest().status;
}catch(E){}return m;
},getStatusText:function(){var bS=K;

try{bS=this.getRequest().statusText;
}catch(bu){}return bS;
},getResponseText:function(){var h=null;

try{h=this.getRequest().responseText;
}catch(bT){h=null;
}return h;
},getResponseXml:function(){var bR=null;
var bP=this.getStatusCode();
var bQ=this.getReadyState();

if(qx.io.remote.Exchange.wasSuccessful(bP,bQ,this.__ms)){try{bR=this.getRequest().responseXML;
}catch(bM){}}if(typeof bR==bi&&bR!=null){if(!bR.documentElement){var s=String(this.getRequest().responseText).replace(/<\?xml[^\?]*\?>/,K);
bR.loadXML(s);
}if(!bR.documentElement){throw new Error("Missing Document Element!");
}
if(bR.documentElement.tagName==bh){throw new Error("XML-File is not well-formed!");
}}else{throw new Error("Response was not a valid xml document ["+this.getRequest().responseText+"]");
}return bR;
},getFetchedLength:function(){var F=this.getResponseText();
return typeof F==U?F.length:0;
},getResponseContent:function(){var bJ=this.getState();

if(bJ!==N&&bJ!=P){if(qx.core.Variant.isSet(S,R)){if(qx.core.Setting.get(O)){this.warn("Transfer not complete or failed, ignoring content!");
}}return null;
}
if(qx.core.Variant.isSet(S,R)){if(qx.core.Setting.get(O)){this.debug("Returning content for responseType: "+this.getResponseType());
}}var bL=this.getResponseText();

if(bJ==P){if(qx.core.Variant.isSet(S,R)){if(qx.core.Setting.get(Q)){this.debug("Failed: "+bL);
}}return bL;
}
switch(this.getResponseType()){case bk:case bn:if(qx.core.Variant.isSet(S,R)){if(qx.core.Setting.get(Q)){this.debug("Response: "+bL);
}}return bL;
case bo:if(qx.core.Variant.isSet(S,R)){if(qx.core.Setting.get(Q)){this.debug("Response: "+bL);
}}
try{if(bL&&bL.length>0){var bK;

if(this.getParseJson()){bK=qx.util.Json.parse(bL,false);
bK=(bK===0?0:(bK||null));
}else{bK=bL;
}return bK;
}else{return null;
}}catch(G){this.error("Could not execute json: ["+bL+"]",G);
return bd+bL+T;
}case ba:if(qx.core.Variant.isSet(S,R)){if(qx.core.Setting.get(Q)){this.debug("Response: "+bL);
}}
try{if(bL&&bL.length>0){var bK=window.eval(bL);
return (bK===0?0:(bK||null));
}else{return null;
}}catch(H){this.error("Could not execute javascript: ["+bL+"]",H);
return null;
}case bq:bL=this.getResponseXml();

if(qx.core.Variant.isSet(S,R)){if(qx.core.Setting.get(Q)){this.debug("Response: "+bL);
}}return (bL===0?0:(bL||null));
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}},_applyState:function(bN,bO){if(qx.core.Variant.isSet(S,R)){if(qx.core.Setting.get(O)){this.debug("State: "+bN);
}}
switch(bN){case bb:this.fireEvent(bb);
break;
case bs:this.fireEvent(bs);
break;
case J:this.fireEvent(J);
break;
case bl:this.fireEvent(bl);
break;
case N:this.fireEvent(N);
break;
case P:this.fireEvent(P);
break;
case L:this.getRequest().abort();
this.fireEvent(L);
break;
case br:this.getRequest().abort();
this.fireEvent(br);
break;
}}},defer:function(){qx.io.remote.Exchange.registerType(qx.io.remote.transport.XmlHttp,bp);
},destruct:function(){var D=this.getRequest();

if(D){D.onreadystatechange=qx.lang.Function.empty;
switch(D.readyState){case 1:case 2:case 3:D.abort();
}}this.__mu=null;
}});
})();
(function(){var c="Integer",b="Object",a="qx.io.remote.Response";
qx.Class.define(a,{extend:qx.event.type.Event,properties:{state:{check:c,nullable:true},statusCode:{check:c,nullable:true},content:{nullable:true},responseHeaders:{check:b,nullable:true}},members:{clone:function(d){var e=qx.event.type.Event.prototype.clone.call(this,d);
e.setType(this.getType());
e.setState(this.getState());
e.setStatusCode(this.getStatusCode());
e.setContent(this.getContent());
e.setResponseHeaders(this.getResponseHeaders());
return e;
},getResponseHeader:function(f){var g=this.getResponseHeaders();

if(g){return g[f]||null;
}return null;
}}});
})();
(function(){var t="test",s="",r="^",q="demobrowser.TreeDataHandler",p="ttree",o="All",n="\\.[^\\.]+$",m=".",l="depth";
qx.Class.define(q,{extend:qx.core.Object,construct:function(bf){qx.core.Object.call(this);
this.tmap=bf;
this.ttree=this.__KS(bf);
},members:{__KS:function(E){var G=E;
function F(W,X){var bb=X.classname;
var Y=bb.split(".");
function ba(parent,Q){if(!Q.length){return parent;
}else{var R=Q[0];
var S=Q.slice(1,Q.length);
var T=null;
var U=null;
var V=parent.getChildren();

for(var i=0;i<V.length;i++){if(V[i].label==R){U=V[i];
break;
}}if(U==null){U=new demobrowser.Tree(R);
parent.add(U);
}T=ba(U,S);
return T;
}}var bc=ba(W,Y);

if(!bc){throw new Error("No target to insert tests");
}H.readTree(X,bc);
}function I(a,b){return (a.classname<b.classname)?-1:(a.classname>b.classname)?1:0;
}var J=new demobrowser.Tree("All");
var H=this;
G.sort(I);

for(var i=0;i<G.length;i++){F(J,G[i]);
}return J;
},readTree:function(e,f){var h=arguments[1]||new demobrowser.Tree(e.classname);
var f;
function g(a,b){return (a.name<b.name)?-1:(a.name>b.name)?1:0;
}
if(e.tests){e.tests.sort(g);

for(var j=0;j<e.tests.length;j++){f=new demobrowser.Tree(e.tests[j].name);
f.tags=e.tests[j].tags;
f.type=t;
f.desc=e.tests[j].desc;
f.manifest=e.tests[j].manifest;
h.add(f);
}}if(e.children&&e.children.length){for(var j=0;j<e.children.length;j++){var k=this.readTree(e.children[j]);
{};
h.add(k);
}}{};
return h;
},getRoot:function(){if(!this.Root){var bp={classname:s,tests:[]};
var bo=this.tmap;

for(var i=0;i<this.tmap.length;i++){if(bp.classname.length>bo[i].classname.length){bp=bo[i];
}}this.Root=bp;
}return this.Root.classname;
},getChilds:function(v){var w=[];
var y=this.tmap;
var x=r+v+n;
var z=new RegExp(x);

for(var i=0;i<y.length;i++){if(y[i].classname.match(z)){w.push(y[i]);
}}return w;
},getTests:function(c){var d=this.tmap;

for(var i=0;i<d.length;i++){if(d[i].classname==c){return d[i].tests;
}}return [];
},getPath:function(bg){if(!bg){return s;
}var bh=bg.pwd();
bh.shift();
if(this.isClass(bg)){bh=bh.concat(bg.label);
}return bh;
},getChildren:function(N){if(N==o){var O=this.tmap;
var P=[];

for(var i=0;i<O.length;i++){P.push(O[i].classname);
}return P;
}else if(this.isClass(N)){return this.getTests(N);
}else{return [];
}},isClass:function(u){if(u.type&&u.type==t){return false;
}else{return true;
}},hasTests:function(A){if(!this.isClass(A)){return false;
}else{var B=A.getChildren();

for(var i=0;i<B.length;i++){if(B[i].type&&B[i].type==t){return true;
}}return false;
}},classFromTest:function(K){var L=s;
var M=[];
classloop:
for(var i=0;i<this.tmap.length;i++){for(var j=0;j<this.tmap[i].tests.length;j++){if(this.tmap[i].tests[j]==K){L=this.tmap[i].classname;
break classloop;
}}}return L;
},getFullName:function(bd){if(!bd){return s;
}var be=this.getPath(bd);

if(bd.type&&bd.type==t){be=be.concat(bd.label);
}return be.join(m);
},getPreviousNode:function(C){var D=C.getPrevSibling();

if(D){return D;
}},getNextNode:function(bi){var bj=bi.getNextSibling();

if(bj){return bj;
}},testCount:function(bk){if(bk.type&&bk.type==t){return 1;
}else{var bl=0;
var bn=bk.getIterator(l);
var bm;

while(bm=bn()){if(bm.type&&bm.type==t){bl++;
}}return bl;
}}},destruct:function(){this.tmap=null;
this._disposeObjects(p);
}});
})();
(function(){var k="depth",j="tags",h="",g="widgetLinkFlat",e="widgetLinkFull",d="parent",c="manifest",b="children",a="demobrowser.Tree";
qx.Class.define(a,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.label=arguments[0]||h;
this.children=[];
this.tags=null;
this.parent=null;
this.manifest=null;
this.readme=null;
},members:{pwd:function(){if(this.parent==null){return [];
}else{return this.parent.pwd().concat(this.parent.label);
}},hasChildren:function(){return this.children.length;
},getChildren:function(){return this.children;
},map:function(v,w){var x=k;
var y=this;
var z=this.getIterator(x);

while(y=z()){v.apply(y,w);
}},print:function(){this.map(function(){this.debug(this.label);
},[]);
},getIterator:function(p){var r=[this];
var q=p==k?1:0;
function f(){var A;

if(r.length){A=r.shift();
var B=A.getChildren();

if(B.length){if(q){r=B.concat(r);
}else{r=r.concat(B);
}}}else{A=null;
}return A;
}return f;
},getPrevSibling:function(){return this.getSibling(-1);
},getNextSibling:function(){return this.getSibling(1);
},getSibling:function(l){var m=this.parent.getChildren();
var n=this.self(arguments).indexOf(m,this);
var o=n+l;

if(m[o]){return m[o];
}},add:function(u){this.children.push(u);
u.parent=this;
}},statics:{indexOf:function(s,t){for(var i=0;i<s.length;i++){if(s[i]==t){return i;
}}}},destruct:function(){this._disposeObjects(e,g,d);
this._disposeArray(b);
this._disposeArray(j);
this._disposeMap(c);
}});
})();
(function(){var j="mshtml",h="pop.push.reverse.shift.sort.splice.unshift.join.slice",g="number",f="qx.type.BaseArray",e="qx.client",d=".";
qx.Class.define(f,{extend:Array,construct:function(length){},members:{toArray:null,valueOf:null,pop:null,push:null,reverse:null,shift:null,sort:null,splice:null,unshift:null,concat:null,join:null,slice:null,toString:null,indexOf:null,lastIndexOf:null,forEach:null,filter:null,map:null,some:null,every:null}});
(function(){function c(k){if(qx.core.Variant.isSet(e,j)){b.prototype={length:0,$$isArray:true};
var n=h.split(d);

for(var length=n.length;length;){b.prototype[n[--length]]=Array.prototype[n[length]];
}}var o=Array.prototype.slice;
b.prototype.concat=function(){var s=this.slice(0);

for(var i=0,length=arguments.length;i<length;i++){var r;

if(arguments[i] instanceof b){r=o.call(arguments[i],0);
}else if(arguments[i] instanceof Array){r=arguments[i];
}else{r=[arguments[i]];
}s.push.apply(s,r);
}return s;
};
b.prototype.toString=function(){return o.call(this,0).toString();
};
b.prototype.toLocaleString=function(){return o.call(this,0).toLocaleString();
};
b.prototype.constructor=b;
b.prototype.indexOf=qx.lang.Core.arrayIndexOf;
b.prototype.lastIndexOf=qx.lang.Core.arrayLastIndexOf;
b.prototype.forEach=qx.lang.Core.arrayForEach;
b.prototype.some=qx.lang.Core.arraySome;
b.prototype.every=qx.lang.Core.arrayEvery;
var l=qx.lang.Core.arrayFilter;
var m=qx.lang.Core.arrayMap;
b.prototype.filter=function(){var t=new this.constructor;
t.push.apply(t,l.apply(this,arguments));
return t;
};
b.prototype.map=function(){var p=new this.constructor;
p.push.apply(p,m.apply(this,arguments));
return p;
};
b.prototype.slice=function(){var u=new this.constructor;
u.push.apply(u,Array.prototype.slice.apply(this,arguments));
return u;
};
b.prototype.splice=function(){var q=new this.constructor;
q.push.apply(q,Array.prototype.splice.apply(this,arguments));
return q;
};
b.prototype.toArray=function(){return Array.prototype.slice.call(this,0);
};
b.prototype.valueOf=function(){return this.length;
};
return b;
}function b(length){if(arguments.length===1&&typeof length===g){this.length=-1<length&&length===length>>.5?length:this.push(length);
}else if(arguments.length){this.push.apply(this,arguments);
}}function a(){}a.prototype=[];
b.prototype=new a;
b.prototype.length=0;
qx.type.BaseArray=c(b);
})();
})();
(function(){var b="",a="qx.util.StringBuilder";
qx.Class.define(a,{extend:qx.type.BaseArray,members:{clear:function(){this.length=0;
},get:function(){return this.join(b);
},add:null,isEmpty:function(){return this.length===0;
},size:function(){return this.join(b).length;
}},defer:function(c,d){d.add=d.push;
d.toString=d.get;
d.valueOf=d.get;
}});
})();
(function(){var l="</span>",k="sym",j="nl",h="qxkey",g="ws",f=">",e="qqstr",d="<",c="qstr",b="linecomment",bg="ident",bf="keyword",be="regexp",bd="&",bc="|",bb="fullcomment",ba="atom",Y="\\r\\n|\\r|\\n",X="\\s*\\)*",W="\\s",s="^",t='["][^"]*["]',q="real",r="\\s*[,\\)]",o="<span class='string'>",p="[a-zA-Z_][a-zA-Z0-9_]*\\b",m="<span class='comment'>",n="[+-]?\\d+",w="\\s*\\(*\\s*",x="&nbsp;",F="qx.dev.Tokenizer",D="\\t",M="\\s*\\)*\\s*\\)",H="\\.(?:replace)\\s*\\(\\s*\\(*\\s*",S="\\)*\\.(?:test|exec)\\s*\\(\\s*",Q="<span class='regexp'>",z="int",V="'>",U="<span class='",T="(?:\\/(?!\\*)[^\\t\\n\\r\\f\\v\\/]+?\\/[mgi]*)",y=".",B="\\s*\\)*\\s*?,?",C="[\\(,]\\s*",E="<span class='ident'>",G="g",I="[+-]?\\d+(([.]\\d+)*([eE][+-]?\\d+))?",N="\\/\\*(?:.|[\\n\\r])*?\\*\\/",R="\n",u="$",v="['][^']*[']",A="tab",L="\\/\\/.*?[\\n\\r$]",K="<br>",J=" ",P="(?::|=|\\?)\\s*\\(*\\s*",O="\\.(?:match|search|split)\\s*\\(\\s*\\(*\\s*";
qx.Class.define(F,{extend:qx.core.Object,statics:{tokenizeJavaScript:function(bh){var bL={"break":1,"case":1,"catch":1,"continue":1,"default":1,"delete":1,"do":1,"else":1,"finally":1,"for":1,"function":1,"if":1,"in":1,"instanceof":1,"new":1,"return":1,"switch":1,"throw":1,"try":1,"typeof":1,"var":1,"while":1,"with":1};
var bB={"void":1,"null":1,"true":1,"false":1,"NaN":1,"Infinity":1,"this":1};
var bx={"statics":1,"members":1,"construct":1,"destruct":1,"events":1,"properties":1,"extend":1,"implement":1};
var bt=function(bM){return new RegExp(s+bM+u);
};
var bE=L;
var bu=N;
var bo=p;
var bw=n;
var br=I;
var bz=t;
var by=v;
var bm=D;
var bH=Y;
var bJ=W;
var bs=T;
var bv=[O+bs+M,H+bs+B,w+bs+S,P+bs+X,C+bs+r].join(bc);
var bF=bt(bE);
var bp=bt(bu);
var bC=bt(bo);
var bl=bt(bw);
var bI=bt(br);
var bk=bt(bz);
var bj=bt(by);
var bD=bt(bm);
var bq=bt(bH);
var bi=bt(bJ);
var bn=bt(bv);
var bA=new RegExp([bE,bu,bo,bw,br,bz,by,by,bm,bH,bJ,bv,y].join(bc),G);
var bG=[];
var a=bh.match(bA);

for(var i=0;i<a.length;i++){var bK=a[i];

if(bK.match(bF)){bG.push({type:b,value:bK});
}else if(bK.match(bp)){bG.push({type:bb,value:bK});
}else if(bK.match(bn)){bG.push({type:be,value:bK});
}else if(bK.match(bj)){bG.push({type:c,value:bK});
}else if(bK.match(bk)){bG.push({type:e,value:bK});
}else if(bL[bK]){bG.push({type:bf,value:bK});
}else if(bB[bK]){bG.push({type:ba,value:bK});
}else if(bx[bK]){bG.push({type:h,value:bK});
}else if(bK.match(bC)){bG.push({type:bg,value:bK});
}else if(bK.match(bI)){bG.push({type:q,value:bK});
}else if(bK.match(bl)){bG.push({type:z,value:bK});
}else if(bK.match(bq)){bG.push({type:j,value:bK});
}else if(bK.match(bt(bi))){bG.push({type:g,value:bK});
}else if(bK.match(bD)){bG.push({type:A,value:bK});
}else if(bK==f){bG.push({type:k,value:f});
}else if(bK==d){bG.push({type:k,value:d});
}else if(bK==bd){bG.push({type:k,value:bd});
}else{bG.push({type:k,value:bK});
}}return bG;
},javaScriptToHtml:function(bN){var bR=qx.dev.Tokenizer.tokenizeJavaScript(bN);
var bQ=new qx.util.StringBuilder();

for(var i=0;i<bR.length;i++){var bS=bR[i];
var bP=qx.bom.String.escape(bS.value);

switch(bS.type){case be:bQ.add(Q,bP,l);
break;
case bg:bQ.add(E,bP,l);
break;
case b:case bb:bQ.add(m,bP,l);
break;
case c:case e:bQ.add(o,bP,l);
break;
case bf:case ba:case h:bQ.add(U,bS.type,V,bP,l);
break;
case j:var bO=qx.bom.client.Engine.MSHTML?K:R;
bQ.add(bO);
break;
case g:var bT=qx.bom.client.Engine.MSHTML?x:J;
bQ.add(bT);
break;
default:bQ.add(bP);
}}return bQ.get();
}}});
})();
(function(){var g="",f="<br",e=" &nbsp;",d="<br>",c=" ",b="\n",a="qx.bom.String";
qx.Class.define(a,{statics:{TO_CHARCODE:{"quot":34,"amp":38,"lt":60,"gt":62,"nbsp":160,"iexcl":161,"cent":162,"pound":163,"curren":164,"yen":165,"brvbar":166,"sect":167,"uml":168,"copy":169,"ordf":170,"laquo":171,"not":172,"shy":173,"reg":174,"macr":175,"deg":176,"plusmn":177,"sup2":178,"sup3":179,"acute":180,"micro":181,"para":182,"middot":183,"cedil":184,"sup1":185,"ordm":186,"raquo":187,"frac14":188,"frac12":189,"frac34":190,"iquest":191,"Agrave":192,"Aacute":193,"Acirc":194,"Atilde":195,"Auml":196,"Aring":197,"AElig":198,"Ccedil":199,"Egrave":200,"Eacute":201,"Ecirc":202,"Euml":203,"Igrave":204,"Iacute":205,"Icirc":206,"Iuml":207,"ETH":208,"Ntilde":209,"Ograve":210,"Oacute":211,"Ocirc":212,"Otilde":213,"Ouml":214,"times":215,"Oslash":216,"Ugrave":217,"Uacute":218,"Ucirc":219,"Uuml":220,"Yacute":221,"THORN":222,"szlig":223,"agrave":224,"aacute":225,"acirc":226,"atilde":227,"auml":228,"aring":229,"aelig":230,"ccedil":231,"egrave":232,"eacute":233,"ecirc":234,"euml":235,"igrave":236,"iacute":237,"icirc":238,"iuml":239,"eth":240,"ntilde":241,"ograve":242,"oacute":243,"ocirc":244,"otilde":245,"ouml":246,"divide":247,"oslash":248,"ugrave":249,"uacute":250,"ucirc":251,"uuml":252,"yacute":253,"thorn":254,"yuml":255,"fnof":402,"Alpha":913,"Beta":914,"Gamma":915,"Delta":916,"Epsilon":917,"Zeta":918,"Eta":919,"Theta":920,"Iota":921,"Kappa":922,"Lambda":923,"Mu":924,"Nu":925,"Xi":926,"Omicron":927,"Pi":928,"Rho":929,"Sigma":931,"Tau":932,"Upsilon":933,"Phi":934,"Chi":935,"Psi":936,"Omega":937,"alpha":945,"beta":946,"gamma":947,"delta":948,"epsilon":949,"zeta":950,"eta":951,"theta":952,"iota":953,"kappa":954,"lambda":955,"mu":956,"nu":957,"xi":958,"omicron":959,"pi":960,"rho":961,"sigmaf":962,"sigma":963,"tau":964,"upsilon":965,"phi":966,"chi":967,"psi":968,"omega":969,"thetasym":977,"upsih":978,"piv":982,"bull":8226,"hellip":8230,"prime":8242,"Prime":8243,"oline":8254,"frasl":8260,"weierp":8472,"image":8465,"real":8476,"trade":8482,"alefsym":8501,"larr":8592,"uarr":8593,"rarr":8594,"darr":8595,"harr":8596,"crarr":8629,"lArr":8656,"uArr":8657,"rArr":8658,"dArr":8659,"hArr":8660,"forall":8704,"part":8706,"exist":8707,"empty":8709,"nabla":8711,"isin":8712,"notin":8713,"ni":8715,"prod":8719,"sum":8721,"minus":8722,"lowast":8727,"radic":8730,"prop":8733,"infin":8734,"ang":8736,"and":8743,"or":8744,"cap":8745,"cup":8746,"int":8747,"there4":8756,"sim":8764,"cong":8773,"asymp":8776,"ne":8800,"equiv":8801,"le":8804,"ge":8805,"sub":8834,"sup":8835,"sube":8838,"supe":8839,"oplus":8853,"otimes":8855,"perp":8869,"sdot":8901,"lceil":8968,"rceil":8969,"lfloor":8970,"rfloor":8971,"lang":9001,"rang":9002,"loz":9674,"spades":9824,"clubs":9827,"hearts":9829,"diams":9830,"OElig":338,"oelig":339,"Scaron":352,"scaron":353,"Yuml":376,"circ":710,"tilde":732,"ensp":8194,"emsp":8195,"thinsp":8201,"zwnj":8204,"zwj":8205,"lrm":8206,"rlm":8207,"ndash":8211,"mdash":8212,"lsquo":8216,"rsquo":8217,"sbquo":8218,"ldquo":8220,"rdquo":8221,"bdquo":8222,"dagger":8224,"Dagger":8225,"permil":8240,"lsaquo":8249,"rsaquo":8250,"euro":8364},escape:function(i){return qx.util.StringEscape.escape(i,qx.bom.String.FROM_CHARCODE);
},unescape:function(m){return qx.util.StringEscape.unescape(m,qx.bom.String.TO_CHARCODE);
},fromText:function(j){return qx.bom.String.escape(j).replace(/(  |\n)/g,function(n){var o={"  ":e,"\n":d};
return o[n]||n;
});
},toText:function(l){return qx.bom.String.unescape(l.replace(/\s+|<([^>])+>/gi,function(h){if(h.indexOf(f)===0){return b;
}else if(h.length>0&&h.replace(/^\s*/,g).replace(/\s*$/,g)==g){return c;
}else{return g;
}}));
}},defer:function(k){k.FROM_CHARCODE=qx.lang.Object.invert(k.TO_CHARCODE);
}});
})();
(function(){var g=";",f="&",e='X',d="",c='#',b="&#",a="qx.util.StringEscape";
qx.Class.define(a,{statics:{escape:function(h,j){var m,o=d;

for(var i=0,l=h.length;i<l;i++){var n=h.charAt(i);
var k=n.charCodeAt(0);

if(j[k]){m=f+j[k]+g;
}else{if(k>0x7F){m=b+k+g;
}else{m=n;
}}o+=m;
}return o;
},unescape:function(p,q){return p.replace(/&[#\w]+;/gi,function(r){var s=r;
var r=r.substring(1,r.length-1);
var t=q[r];

if(t){s=String.fromCharCode(t);
}else{if(r.charAt(0)==c){if(r.charAt(1).toUpperCase()==e){t=r.substring(2);
if(t.match(/^[0-9A-Fa-f]+$/gi)){s=String.fromCharCode(parseInt(t,16));
}}else{t=r.substring(1);
if(t.match(/^\d+$/gi)){s=String.fromCharCode(parseInt(t,10));
}}}}return s;
});
}}});
})();
(function(){var j="#CCCCCC",i="#F3F3F3",h="#E4E4E4",g="#1a1a1a",f="#084FAB",e="gray",d="#fffefe",c="white",b="#4a4a4a",a="#EEEEEE",K="#80B4EF",J="#C72B2B",I="#ffffdd",H="#334866",G="#00204D",F="#666666",E="#CBC8CD",D="#99C3FE",C="#808080",B="#F4F4F4",q="#001533",r="#909090",o="#FCFCFC",p="#314a6e",m="#B6B6B6",n="#0880EF",k="#4d4d4d",l="#DFDFDF",s="#000000",t="#FF9999",w="#7B7A7E",v="#26364D",y="#990000",x="#AFAFAF",A="#404955",z="#AAAAAA",u="qx.theme.modern.Color";
qx.Theme.define(u,{colors:{"background-application":l,"background-pane":i,"background-light":o,"background-medium":a,"background-splitpane":x,"background-tip":I,"background-tip-error":J,"background-odd":h,"text-light":r,"text-gray":b,"text-label":g,"text-title":p,"text-input":s,"text-hovered":q,"text-disabled":w,"text-selected":d,"text-active":v,"text-inactive":A,"text-placeholder":E,"border-main":k,"border-separator":C,"border-input":H,"border-disabled":m,"border-pane":G,"border-button":F,"border-column":j,"border-focused":D,"invalid":y,"border-focused-invalid":t,"table-pane":i,"table-focus-indicator":n,"table-row-background-focused-selected":f,"table-row-background-focused":K,"table-row-background-selected":f,"table-row-background-even":i,"table-row-background-odd":h,"table-row-selected":d,"table-row":g,"table-row-line":j,"table-column-line":j,"progressive-table-header":z,"progressive-table-row-background-even":B,"progressive-table-row-background-odd":h,"progressive-progressbar-background":e,"progressive-progressbar-indicator-done":j,"progressive-progressbar-indicator-undone":c,"progressive-progressbar-percent-background":e,"progressive-progressbar-percent-text":c}});
})();
(function(){var u="qx.debug",t="_applyStyle",s="on",r="",q="Color",p="px",o="solid",n="dotted",m="double",l="dashed",g="_applyWidth",k="qx.ui.decoration.Uniform",j="px ",f=" ",e="scale",i="PositiveInteger",h="absolute";
qx.Class.define(k,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(E,F,G){qx.ui.decoration.Abstract.call(this);
if(E!=null){this.setWidth(E);
}
if(F!=null){this.setStyle(F);
}
if(G!=null){this.setColor(G);
}},properties:{width:{check:i,init:0,apply:g},style:{nullable:true,check:[o,n,l,m],init:o,apply:t},color:{nullable:true,check:q,apply:t},backgroundColor:{check:q,nullable:true,apply:t}},members:{__qT:null,_getDefaultInsets:function(){var A=this.getWidth();
return {top:A,right:A,bottom:A,left:A};
},_isInitialized:function(){return !!this.__qT;
},getMarkup:function(){if(this.__qT){return this.__qT;
}var a={position:h,top:0,left:0};
var b=this.getWidth();

if(qx.core.Variant.isSet(u,s)){if(b===0){throw new Error("Invalid Uniform decorator (zero border width). Use qx.ui.decorator.Background instead!");
}}var d=qx.theme.manager.Color.getInstance();
a.border=b+j+this.getStyle()+f+(d.resolve(this.getColor())||r);
var c=this._generateBackgroundMarkup(a);
return this.__qT=c;
},resize:function(v,w,x){var z=this.getBackgroundImage()&&this.getBackgroundRepeat()==e;

if(z||qx.bom.client.Feature.CONTENT_BOX){var y=this.getWidth()*2;
w-=y;
x-=y;
if(w<0){w=0;
}
if(x<0){x=0;
}}v.style.width=w+p;
v.style.height=x+p;
},tint:function(B,C){var D=qx.theme.manager.Color.getInstance();

if(C==null){C=this.getBackgroundColor();
}B.style.backgroundColor=D.resolve(C)||r;
},_applyWidth:function(){if(qx.core.Variant.isSet(u,s)){if(this.__qT){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}this._resetInsets();
},_applyStyle:function(){if(qx.core.Variant.isSet(u,s)){if(this.__qT){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}}},destruct:function(){this.__qT=null;
}});
})();
(function(){var j="_applyStyle",i="solid",h="Color",g="",f="double",e="px ",d="dotted",c="_applyWidth",b="dashed",a="Number",H=" ",G="qx.debug",F="shorthand",E="on",D="px",C="widthTop",B="styleRight",A="styleLeft",z="widthLeft",y="widthBottom",q="styleTop",r="colorBottom",o="styleBottom",p="widthRight",m="colorLeft",n="colorRight",k="colorTop",l="scale",s="border-top",t="border-left",v="border-right",u="qx.ui.decoration.Single",x="border-bottom",w="absolute";
qx.Class.define(u,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(S,T,U){qx.ui.decoration.Abstract.call(this);
if(S!=null){this.setWidth(S);
}
if(T!=null){this.setStyle(T);
}
if(U!=null){this.setColor(U);
}},properties:{widthTop:{check:a,init:0,apply:c},widthRight:{check:a,init:0,apply:c},widthBottom:{check:a,init:0,apply:c},widthLeft:{check:a,init:0,apply:c},styleTop:{nullable:true,check:[i,d,b,f],init:i,apply:j},styleRight:{nullable:true,check:[i,d,b,f],init:i,apply:j},styleBottom:{nullable:true,check:[i,d,b,f],init:i,apply:j},styleLeft:{nullable:true,check:[i,d,b,f],init:i,apply:j},colorTop:{nullable:true,check:h,apply:j},colorRight:{nullable:true,check:h,apply:j},colorBottom:{nullable:true,check:h,apply:j},colorLeft:{nullable:true,check:h,apply:j},backgroundColor:{check:h,nullable:true,apply:j},left:{group:[z,A,m]},right:{group:[p,B,n]},top:{group:[C,q,k]},bottom:{group:[y,o,r]},width:{group:[C,p,y,z],mode:F},style:{group:[q,B,o,A],mode:F},color:{group:[k,n,r,m],mode:F}},members:{__pb:null,_getDefaultInsets:function(){return {top:this.getWidthTop(),right:this.getWidthRight(),bottom:this.getWidthBottom(),left:this.getWidthLeft()};
},_isInitialized:function(){return !!this.__pb;
},getMarkup:function(I){if(this.__pb){return this.__pb;
}var J=qx.theme.manager.Color.getInstance();
var K={};
var M=this.getWidthTop();

if(M>0){K[s]=M+e+this.getStyleTop()+H+(J.resolve(this.getColorTop())||g);
}var M=this.getWidthRight();

if(M>0){K[v]=M+e+this.getStyleRight()+H+(J.resolve(this.getColorRight())||g);
}var M=this.getWidthBottom();

if(M>0){K[x]=M+e+this.getStyleBottom()+H+(J.resolve(this.getColorBottom())||g);
}var M=this.getWidthLeft();

if(M>0){K[t]=M+e+this.getStyleLeft()+H+(J.resolve(this.getColorLeft())||g);
}if(qx.core.Variant.isSet(G,E)){if(K.length===0){throw new Error("Invalid Single decorator (zero border width). Use qx.ui.decorator.Background instead!");
}}K.position=w;
K.top=0;
K.left=0;
var L=this._generateBackgroundMarkup(K);
return this.__pb=L;
},resize:function(N,O,P){var R=this.getBackgroundImage()&&this.getBackgroundRepeat()==l;

if(R||qx.bom.client.Feature.CONTENT_BOX){var Q=this.getInsets();
O-=Q.left+Q.right;
P-=Q.top+Q.bottom;
if(O<0){O=0;
}
if(P<0){P=0;
}}N.style.width=O+D;
N.style.height=P+D;
},tint:function(V,W){var X=qx.theme.manager.Color.getInstance();

if(W==null){W=this.getBackgroundColor();
}V.style.backgroundColor=X.resolve(W)||g;
},_applyWidth:function(){if(qx.core.Variant.isSet(G,E)){if(this.__pb){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}this._resetInsets();
},_applyStyle:function(){if(qx.core.Variant.isSet(G,E)){if(this.__pb){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}}},destruct:function(){this.__pb=null;
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
(function(){var j="_applyStyle",i='"></div>',h="Color",g="1px",f='<div style="',e='border:',d="1px solid ",c="",b=";",a="px",x='</div>',w="qx.ui.decoration.Beveled",v="qx.debug",u='<div style="position:absolute;top:1px;left:1px;',t='border-bottom:',s='border-right:',r='border-left:',q='border-top:',p="Number",o='<div style="position:absolute;top:1px;left:0px;',m='position:absolute;top:0px;left:1px;',n='<div style="overflow:hidden;font-size:0;line-height:0;">',k="on",l="absolute";
qx.Class.define(w,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(y,z,A){qx.ui.decoration.Abstract.call(this);
if(y!=null){this.setOuterColor(y);
}
if(z!=null){this.setInnerColor(z);
}
if(A!=null){this.setInnerOpacity(A);
}},properties:{innerColor:{check:h,nullable:true,apply:j},innerOpacity:{check:p,init:1,apply:j},outerColor:{check:h,nullable:true,apply:j},backgroundColor:{check:h,nullable:true,apply:j}},members:{__qC:null,_getDefaultInsets:function(){return {top:2,right:2,bottom:2,left:2};
},_isInitialized:function(){return !!this.__qC;
},_applyStyle:function(){if(qx.core.Variant.isSet(v,k)){if(this.__qC){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}},getMarkup:function(){if(this.__qC){return this.__qC;
}var M=qx.theme.manager.Color.getInstance();
var N=[];
var Q=d+M.resolve(this.getOuterColor())+b;
var P=d+M.resolve(this.getInnerColor())+b;
N.push(n);
N.push(f);
N.push(e,Q);
N.push(qx.bom.element.Opacity.compile(0.35));
N.push(i);
N.push(o);
N.push(r,Q);
N.push(s,Q);
N.push(i);
N.push(f);
N.push(m);
N.push(q,Q);
N.push(t,Q);
N.push(i);
var O={position:l,top:g,left:g};
N.push(this._generateBackgroundMarkup(O));
N.push(u);
N.push(e,P);
N.push(qx.bom.element.Opacity.compile(this.getInnerOpacity()));
N.push(i);
N.push(x);
return this.__qC=N.join(c);
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
},tint:function(R,S){var T=qx.theme.manager.Color.getInstance();

if(S==null){S=this.getBackgroundColor();
}R.childNodes[3].style.backgroundColor=T.resolve(S)||c;
}},destruct:function(){this.__qC=null;
}});
})();
(function(){var m="solid",l="scale",k="border-main",j="white",i="repeat-x",h="border-separator",g="background-light",f="invalid",e="border-focused-invalid",d="border-disabled",bs="decoration/table/header-cell.png",br="decoration/form/input.png",bq="#f8f8f8",bp="decoration/scrollbar/scrollbar-button-bg-horizontal.png",bo="#b6b6b6",bn="background-pane",bm="repeat-y",bl="decoration/form/input-focused.png",bk="#33508D",bj="decoration/selection.png",t="border-input",u="decoration/scrollbar/scrollbar-button-bg-vertical.png",r="decoration/tabview/tab-button-top-active.png",s="black",p="decoration/form/button-c.png",q="decoration/scrollbar/scrollbar-bg-vertical.png",n="decoration/form/button.png",o="decoration/form/button-checked.png",B="decoration/tabview/tab-button-left-inactive.png",C="decoration/groupbox/groupbox.png",O="#FAFAFA",K="decoration/pane/pane.png",W="dotted",R="decoration/toolbar/toolbar-part.gif",bf="decoration/tabview/tab-button-top-inactive.png",bc="decoration/menu/bar-background.png",G="center",bi="decoration/tabview/tab-button-bottom-active.png",bh="decoration/form/button-hovered.png",bg="decoration/form/tooltip-error-arrow.png",F="decoration/window/captionbar-inactive.png",I="qx/decoration/Modern",J="decoration/menu/background.png",M="decoration/window/statusbar.png",P="border-focused",S="table-focus-indicator",Y="#F2F2F2",be="decoration/form/button-checked-c.png",v="decoration/scrollbar/scrollbar-bg-horizontal.png",w="qx.theme.modern.Decoration",H="#f4f4f4",V="decoration/shadow/shadow-small.png",U="decoration/app-header.png",T="decoration/tabview/tabview-pane.png",bb="decoration/form/tooltip-error.png",ba="decoration/form/button-focused.png",Q="decoration/tabview/tab-button-bottom-inactive.png",X="decoration/form/button-disabled.png",a="decoration/tabview/tab-button-right-active.png",bd="decoration/form/button-pressed.png",x="no-repeat",y="decoration/window/captionbar-active.png",L="decoration/tabview/tab-button-left-active.png",b="background-splitpane",c="decoration/form/button-checked-focused.png",E="#C5C5C5",z="decoration/toolbar/toolbar-gradient.png",A="decoration/tabview/tab-button-right-inactive.png",D="#b8b8b8",N="decoration/shadow/shadow.png";
qx.Theme.define(w,{aliases:{decoration:I},decorations:{"main":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:k}},"selected":{decorator:qx.ui.decoration.Background,style:{backgroundImage:bj,backgroundRepeat:l}},"selected-dragover":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bj,backgroundRepeat:l,bottom:[2,m,bk]}},"dragover":{decorator:qx.ui.decoration.Single,style:{bottom:[2,m,bk]}},"pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:K,insets:[0,2,3,0]}},"group":{decorator:qx.ui.decoration.Grid,style:{baseImage:C}},"border-invalid":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:j,innerOpacity:0.5,backgroundImage:br,backgroundRepeat:i,backgroundColor:g}},"keyboard-focus":{decorator:qx.ui.decoration.Single,style:{width:1,color:s,style:W}},"separator-horizontal":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:h}},"separator-vertical":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:h}},"tooltip-error":{decorator:qx.ui.decoration.Grid,style:{baseImage:bb,insets:[2,5,5,2]}},"tooltip-error-arrow":{decorator:qx.ui.decoration.Background,style:{backgroundImage:bg,backgroundPositionY:G,backgroundRepeat:x,insets:[0,0,0,10]}},"shadow-window":{decorator:qx.ui.decoration.Grid,style:{baseImage:N,insets:[4,8,8,4]}},"shadow-popup":{decorator:qx.ui.decoration.Grid,style:{baseImage:V,insets:[0,3,3,0]}},"scrollbar-horizontal":{decorator:qx.ui.decoration.Background,style:{backgroundImage:v,backgroundRepeat:i}},"scrollbar-vertical":{decorator:qx.ui.decoration.Background,style:{backgroundImage:q,backgroundRepeat:bm}},"scrollbar-slider-horizontal":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bp,backgroundRepeat:l,outerColor:k,innerColor:j,innerOpacity:0.5}},"scrollbar-slider-horizontal-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bp,backgroundRepeat:l,outerColor:d,innerColor:j,innerOpacity:0.3}},"scrollbar-slider-vertical":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:u,backgroundRepeat:l,outerColor:k,innerColor:j,innerOpacity:0.5}},"scrollbar-slider-vertical-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:u,backgroundRepeat:l,outerColor:d,innerColor:j,innerOpacity:0.3}},"button":{decorator:qx.ui.decoration.Grid,style:{baseImage:n,insets:2}},"button-disabled":{decorator:qx.ui.decoration.Grid,style:{baseImage:X,insets:2}},"button-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:ba,insets:2}},"button-hovered":{decorator:qx.ui.decoration.Grid,style:{baseImage:bh,insets:2}},"button-pressed":{decorator:qx.ui.decoration.Grid,style:{baseImage:bd,insets:2}},"button-checked":{decorator:qx.ui.decoration.Grid,style:{baseImage:o,insets:2}},"button-checked-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:c,insets:2}},"button-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,insets:[1]}},"checkbox-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,insets:[0]}},"input":{decorator:qx.ui.decoration.Beveled,style:{outerColor:t,innerColor:j,innerOpacity:0.5,backgroundImage:br,backgroundRepeat:i,backgroundColor:g}},"input-focused":{decorator:qx.ui.decoration.Beveled,style:{outerColor:t,innerColor:P,backgroundImage:bl,backgroundRepeat:i,backgroundColor:g}},"input-focused-invalid":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,backgroundImage:bl,backgroundRepeat:i,backgroundColor:g,insets:[2]}},"input-disabled":{decorator:qx.ui.decoration.Beveled,style:{outerColor:d,innerColor:j,innerOpacity:0.5,backgroundImage:br,backgroundRepeat:i,backgroundColor:g}},"toolbar":{decorator:qx.ui.decoration.Background,style:{backgroundImage:z,backgroundRepeat:l}},"toolbar-button-hovered":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bo,innerColor:bq,backgroundImage:p,backgroundRepeat:l}},"toolbar-button-checked":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bo,innerColor:bq,backgroundImage:be,backgroundRepeat:l}},"toolbar-separator":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,widthRight:1,colorLeft:D,colorRight:H,styleLeft:m,styleRight:m}},"toolbar-part":{decorator:qx.ui.decoration.Background,style:{backgroundImage:R,backgroundRepeat:bm}},"tabview-pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:T,insets:[4,6,7,4]}},"tabview-page-button-top-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:r}},"tabview-page-button-top-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:bf}},"tabview-page-button-bottom-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:bi}},"tabview-page-button-bottom-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:Q}},"tabview-page-button-left-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:L}},"tabview-page-button-left-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:B}},"tabview-page-button-right-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:a}},"tabview-page-button-right-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:A}},"splitpane":{decorator:qx.ui.decoration.Uniform,style:{backgroundColor:bn,width:3,color:b,style:m}},"window":{decorator:qx.ui.decoration.Single,style:{backgroundColor:bn,width:1,color:k,widthTop:0}},"window-captionbar-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:y}},"window-captionbar-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:F}},"window-statusbar":{decorator:qx.ui.decoration.Grid,style:{baseImage:M}},"table":{decorator:qx.ui.decoration.Single,style:{width:1,color:k,style:m}},"table-statusbar":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:k,style:m}},"table-scroller-header":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bs,backgroundRepeat:l,widthBottom:1,colorBottom:k,style:m}},"table-header-cell":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:h,styleRight:m}},"table-header-cell-hovered":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:h,styleRight:m,widthBottom:1,colorBottom:j,styleBottom:m}},"table-column-button":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bs,backgroundRepeat:l,widthBottom:1,colorBottom:k,style:m}},"table-scroller-focus-indicator":{decorator:qx.ui.decoration.Single,style:{width:2,color:S,style:m}},"progressive-table-header":{decorator:qx.ui.decoration.Single,style:{width:1,color:k,style:m}},"progressive-table-header-cell":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bs,backgroundRepeat:l,widthRight:1,colorRight:Y,style:m}},"menu":{decorator:qx.ui.decoration.Single,style:{backgroundImage:J,backgroundRepeat:l,width:1,color:k,style:m}},"menu-separator":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:E,widthBottom:1,colorBottom:O}},"menubar":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bc,backgroundRepeat:l,width:1,color:h,style:m}},"app-header":{decorator:qx.ui.decoration.Background,style:{backgroundImage:U,backgroundRepeat:l}}}});
})();
(function(){var n="Liberation Sans",m="Arial",l="Lucida Grande",k="sans-serif",j="Tahoma",i="Candara",h="Segoe UI",g="Consolas",f="Courier New",e="Monaco",b="monospace",d="Lucida Console",c="qx.theme.modern.Font",a="DejaVu Sans Mono";
qx.Theme.define(c,{fonts:{"default":{size:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?12:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[l]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[h,i]:[j,n,m,k]},"bold":{size:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?12:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[l]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[h,i]:[j,n,m,k],bold:true},"small":{size:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?11:10,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[l]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[h,i]:[j,n,m,k]},"monospace":{size:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[d,e]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[g]:[g,a,f,b]}}});
})();
(function(){var c="Tango",b="qx/icon/Tango",a="qx.theme.icon.Tango";
qx.Theme.define(a,{title:c,aliases:{"icon":b},icons:{}});
})();
(function(){var gu="button-frame",gt="atom",gs="widget",gr="main",gq="button",gp="text-selected",go="image",gn="bold",gm="middle",gl="background-light",eY="text-disabled",eX="groupbox",eW="decoration/arrows/down.png",eV="cell",eU="selected",eT="border-invalid",eS="input",eR="input-disabled",eQ="menu-button",eP="input-focused-invalid",gB="toolbar-button",gC="spinner",gz="input-focused",gA="popup",gx="tooltip",gy="label",gv="list",gw="white",gD="tree-item",gE="treevirtual-contract",fT="scrollbar",fS="datechooser/nav-button",fV="text-hovered",fU="center",fX="treevirtual-expand",fW="textfield",ga="decoration/arrows/right.png",fY="background-application",fR="radiobutton",fQ="invalid",cU="combobox",cV="right-top",cW="checkbox",cX="text-title",cY="qx/static/blank.gif",da="scrollbar/button",db="right",dc="combobox/button",dd="icon/16/places/folder.png",de="text-label",gS="decoration/tree/closed.png",gR="scrollbar-slider-horizontal",gQ="decoration/arrows/left.png",gP="button-focused",gW="text-light",gV="menu-slidebar-button",gU="text-input",gT="slidebar/button-forward",gY="background-splitpane",gX=".png",dX="decoration/tree/open.png",dY="default",dV="decoration/arrows/down-small.png",dW="datechooser",ec="slidebar/button-backward",ed="selectbox",ea="treevirtual-folder",eb="shadow-popup",dT="icon/16/mimetypes/office-document.png",dU="background-medium",dz="table",dy="decoration/arrows/up.png",dB="decoration/form/",dA="",dv="-invalid",du="icon/16/places/folder-open.png",dx="button-checked",dw="decoration/window/maximize-active-hovered.png",dt="radiobutton-hovered",ds="keyboard-focus",ej="decoration/cursors/",ek="slidebar",el="tooltip-error-arrow",em="table-scroller-focus-indicator",ef="move-frame",eg="nodrop",eh="decoration/table/boolean-true.png",ei="table-header-cell",en="menu",eo="app-header",dM="row-layer",dL="text-inactive",dK="move",dJ="radiobutton-checked-focused",dI="decoration/window/restore-active-hovered.png",dH="shadow-window",dG="table-column-button",dF="right.png",dQ="tabview-page-button-bottom-inactive",dP="tooltip-error",ep="window-statusbar",eq="button-hovered",er="decoration/scrollbar/scrollbar-",es="background-tip",et="scrollbar-slider-horizontal-disabled",eu="table-scroller-header",ev="button-pressed",ew="table-pane",ex="decoration/window/close-active.png",ey="native",fh="checkbox-hovered",fg="button-invalid-shadow",ff="checkbox-checked",fe="decoration/window/minimize-active-hovered.png",fl="menubar",fk="icon/16/actions/dialog-cancel.png",fj="tabview-page-button-top-inactive",fi="tabview-page-button-left-inactive",fp="menu-slidebar",fo="toolbar-button-checked",fM="decoration/tree/open-selected.png",fN="radiobutton-checked",fK="decoration/window/minimize-inactive.png",fL="icon/16/apps/office-calendar.png",fI="group",fJ="tabview-page-button-right-inactive",fG="decoration/window/minimize-active.png",fH="decoration/window/restore-inactive.png",fO="checkbox-checked-focused",fP="splitpane",ge="combobox/textfield",gd="button-preselected-focused",gg="decoration/window/close-active-hovered.png",gf="qx/icon/Tango/16/actions/window-close.png",gi="checkbox-pressed",gh="button-disabled",gk="selected-dragover",gj="border-separator",gc="decoration/window/maximize-inactive.png",gb="dragover",gL="scrollarea",gM="scrollbar-vertical",gN="decoration/menu/checkbox-invert.gif",gO="decoration/toolbar/toolbar-handle-knob.gif",gH="icon/22/mimetypes/office-document.png",gI="button-preselected",gJ="button-checked-focused",gK="up.png",gF="best-fit",gG="decoration/tree/closed-selected.png",cT="qx.theme.modern.Appearance",cS="text-active",cR="toolbar-button-hovered",cQ="progressive-table-header",cP="decoration/table/select-column-order.png",cO="decoration/menu/radiobutton.gif",cN="decoration/arrows/forward.png",cM="decoration/table/descending.png",cL="window-captionbar-active",cK="checkbox-checked-hovered",dh="scrollbar-slider-vertical",di="toolbar",df="alias",dg="decoration/window/restore-active.png",dl="decoration/table/boolean-false.png",dm="checkbox-checked-disabled",dj="icon/32/mimetypes/office-document.png",dk="radiobutton-checked-disabled",dp="tabview-pane",dq="decoration/arrows/rewind.png",ft="checkbox-focused",fn="top",fA="icon/16/actions/dialog-ok.png",fw="radiobutton-checked-hovered",fc="table-header-cell-hovered",fa="window",dD="text-gray",fd="decoration/menu/radiobutton-invert.gif",dO="text-placeholder",dN="slider",eH="keep-align",eI="down.png",eJ="tabview-page-button-top-active",eK="icon/32/places/folder-open.png",eL="icon/22/places/folder.png",eM="decoration/window/maximize-active.png",eN="checkbox-checked-pressed",eO="decoration/window/close-inactive.png",eF="tabview-page-button-left-active",eG="toolbar-part",fb="decoration/splitpane/knob-vertical.png",fz=".gif",fy="icon/22/places/folder-open.png",fx="radiobutton-checked-pressed",fE="table-statusbar",fD="radiobutton-pressed",fC="window-captionbar-inactive",fB="copy",fv="radiobutton-focused",fu="decoration/arrows/down-invert.png",dn="decoration/menu/checkbox.gif",dS="decoration/splitpane/knob-horizontal.png",dR="icon/32/places/folder.png",fm="toolbar-separator",ee="tabview-page-button-bottom-active",fs="decoration/arrows/up-small.png",fr="decoration/table/ascending.png",fq="decoration/arrows/up-invert.png",dC="small",fF="tabview-page-button-right-active",dr="-disabled",dE="scrollbar-horizontal",ez="progressive-table-header-cell",eA="menu-separator",eB="pane",eC="decoration/arrows/right-invert.png",eD="left.png",eE="icon/16/actions/view-refresh.png";
qx.Theme.define(cT,{appearances:{"widget":{},"root":{style:function(x){return {backgroundColor:fY,textColor:de,font:dY};
}},"label":{style:function(hR){return {textColor:hR.disabled?eY:undefined};
}},"move-frame":{style:function(bP){return {decorator:gr};
}},"resize-frame":ef,"dragdrop-cursor":{style:function(hv){var hw=eg;

if(hv.copy){hw=fB;
}else if(hv.move){hw=dK;
}else if(hv.alias){hw=df;
}return {source:ej+hw+fz,position:cV,offset:[2,16,2,6]};
}},"image":{style:function(I){return {opacity:!I.replacement&&I.disabled?0.3:1};
}},"atom":{},"atom/label":gy,"atom/icon":go,"popup":{style:function(cp){return {decorator:gr,backgroundColor:gl,shadow:eb};
}},"button-frame":{alias:gt,style:function(F){var H,G;

if(F.checked&&F.focused&&!F.inner){H=gJ;
G=undefined;
}else if(F.disabled){H=gh;
G=undefined;
}else if(F.pressed){H=ev;
G=fV;
}else if(F.checked){H=dx;
G=undefined;
}else if(F.hovered){H=eq;
G=fV;
}else if(F.preselected&&F.focused&&!F.inner){H=gd;
G=fV;
}else if(F.preselected){H=gI;
G=fV;
}else if(F.focused&&!F.inner){H=gP;
G=undefined;
}else{H=gq;
G=undefined;
}return {decorator:H,textColor:G,shadow:F.invalid&&!F.disabled?fg:undefined};
}},"button-frame/image":{style:function(cn){return {opacity:!cn.replacement&&cn.disabled?0.5:1};
}},"button":{alias:gu,include:gu,style:function(bn){return {padding:[2,8],center:true};
}},"hover-button":{alias:gt,include:gt,style:function(ht){return {decorator:ht.hovered?eU:undefined,textColor:ht.hovered?gp:undefined};
}},"splitbutton":{},"splitbutton/button":gq,"splitbutton/arrow":{alias:gq,include:gq,style:function(hH){return {icon:eW,padding:2,marginLeft:1};
}},"checkbox":{alias:gt,style:function(cB){var cD;

if(cB.checked&&cB.focused){cD=fO;
}else if(cB.checked&&cB.disabled){cD=dm;
}else if(cB.checked&&cB.pressed){cD=eN;
}else if(cB.checked&&cB.hovered){cD=cK;
}else if(cB.checked){cD=ff;
}else if(cB.focused){cD=ft;
}else if(cB.pressed){cD=gi;
}else if(cB.hovered){cD=fh;
}else{cD=cW;
}var cC=cB.invalid&&!cB.disabled?dv:dA;
return {icon:dB+cD+cC+gX,gap:6};
}},"radiobutton":{alias:gt,style:function(bb){var bd;

if(bb.checked&&bb.focused){bd=dJ;
}else if(bb.checked&&bb.disabled){bd=dk;
}else if(bb.checked&&bb.pressed){bd=fx;
}else if(bb.checked&&bb.hovered){bd=fw;
}else if(bb.checked){bd=fN;
}else if(bb.focused){bd=fv;
}else if(bb.pressed){bd=fD;
}else if(bb.hovered){bd=dt;
}else{bd=fR;
}var bc=bb.invalid&&!bb.disabled?dv:dA;
return {icon:dB+bd+bc+gX,gap:6};
}},"textfield":{style:function(hg){var hl;
var hj=!!hg.focused;
var hk=!!hg.invalid;
var hh=!!hg.disabled;

if(hj&&hk&&!hh){hl=eP;
}else if(hj&&!hk&&!hh){hl=gz;
}else if(hh){hl=eR;
}else if(!hj&&hk&&!hh){hl=eT;
}else{hl=eS;
}var hi;

if(hg.disabled){hi=eY;
}else if(hg.showingPlaceholder){hi=dO;
}else{hi=gU;
}return {decorator:hl,padding:[2,4,1],textColor:hi};
}},"textarea":{include:fW,style:function(bN){return {padding:4};
}},"spinner":{style:function(bv){var bz;
var bx=!!bv.focused;
var by=!!bv.invalid;
var bw=!!bv.disabled;

if(bx&&by&&!bw){bz=eP;
}else if(bx&&!by&&!bw){bz=gz;
}else if(bw){bz=eR;
}else if(!bx&&by&&!bw){bz=eT;
}else{bz=eS;
}return {decorator:bz};
}},"spinner/textfield":{style:function(bT){return {marginRight:2,padding:[2,4,1],textColor:bT.disabled?eY:gU};
}},"spinner/upbutton":{alias:gu,include:gu,style:function(ck){return {icon:fs,padding:ck.pressed?[2,2,0,4]:[1,3,1,3],shadow:undefined};
}},"spinner/downbutton":{alias:gu,include:gu,style:function(hu){return {icon:dV,padding:hu.pressed?[2,2,0,4]:[1,3,1,3],shadow:undefined};
}},"datefield":cU,"datefield/button":{alias:dc,include:dc,style:function(ch){return {icon:fL,padding:[0,3],decorator:undefined};
}},"datefield/textfield":ge,"datefield/list":{alias:dW,include:dW,style:function(cw){return {decorator:undefined};
}},"groupbox":{style:function(ie){return {legendPosition:fn};
}},"groupbox/legend":{alias:gt,style:function(K){return {padding:[1,0,1,4],textColor:K.invalid?fQ:cX,font:gn};
}},"groupbox/frame":{style:function(cr){return {padding:12,decorator:fI};
}},"check-groupbox":eX,"check-groupbox/legend":{alias:cW,include:cW,style:function(cv){return {padding:[1,0,1,4],textColor:cv.invalid?fQ:cX,font:gn};
}},"radio-groupbox":eX,"radio-groupbox/legend":{alias:fR,include:fR,style:function(bi){return {padding:[1,0,1,4],textColor:bi.invalid?fQ:cX,font:gn};
}},"scrollarea":{style:function(cb){return {minWidth:50,minHeight:50};
}},"scrollarea/corner":{style:function(bQ){return {backgroundColor:fY};
}},"scrollarea/pane":gs,"scrollarea/scrollbar-x":fT,"scrollarea/scrollbar-y":fT,"scrollbar":{style:function(hn){if(hn[ey]){return {};
}return {width:hn.horizontal?undefined:16,height:hn.horizontal?16:undefined,decorator:hn.horizontal?dE:gM,padding:1};
}},"scrollbar/slider":{alias:dN,style:function(hI){return {padding:hI.horizontal?[0,1,0,1]:[1,0,1,0]};
}},"scrollbar/slider/knob":{include:gu,style:function(hd){var he=hd.horizontal?gR:dh;

if(hd.disabled){he+=dr;
}return {decorator:he,minHeight:hd.horizontal?undefined:9,minWidth:hd.horizontal?9:undefined};
}},"scrollbar/button":{alias:gu,include:gu,style:function(bf){var bg=er;

if(bf.left){bg+=eD;
}else if(bf.right){bg+=dF;
}else if(bf.up){bg+=gK;
}else{bg+=eI;
}
if(bf.left||bf.right){return {padding:[0,0,0,bf.left?3:4],icon:bg,width:15,height:14};
}else{return {padding:[0,0,0,2],icon:bg,width:14,height:15};
}}},"scrollbar/button-begin":da,"scrollbar/button-end":da,"slider":{style:function(bU){var bY;
var bW=!!bU.focused;
var bX=!!bU.invalid;
var bV=!!bU.disabled;

if(bW&&bX&&!bV){bY=eP;
}else if(bW&&!bX&&!bV){bY=gz;
}else if(bV){bY=eR;
}else if(!bW&&bX&&!bV){bY=eT;
}else{bY=eS;
}return {decorator:bY};
}},"slider/knob":{include:gu,style:function(bR){return {decorator:bR.disabled?et:gR,shadow:undefined,height:14,width:14};
}},"list":{alias:gL,style:function(cc){var cg;
var ce=!!cc.focused;
var cf=!!cc.invalid;
var cd=!!cc.disabled;

if(ce&&cf&&!cd){cg=eP;
}else if(ce&&!cf&&!cd){cg=gz;
}else if(cd){cg=eR;
}else if(!ce&&cf&&!cd){cg=eT;
}else{cg=eS;
}return {backgroundColor:gl,decorator:cg};
}},"list/pane":gs,"listitem":{alias:gt,style:function(k){var l;

if(k.dragover){l=k.selected?gk:gb;
}else{l=k.selected?eU:undefined;
}return {padding:k.dragover?[4,4,2,4]:4,textColor:k.selected?gp:undefined,decorator:l};
}},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:gu,include:gu,style:function(hb){return {padding:5,center:true,icon:hb.vertical?eW:ga};
}},"slidebar/button-backward":{alias:gu,include:gu,style:function(V){return {padding:5,center:true,icon:V.vertical?dy:gQ};
}},"tabview":{style:function(ho){return {contentPadding:16};
}},"tabview/bar":{alias:ek,style:function(R){var S={marginBottom:R.barTop?-1:0,marginTop:R.barBottom?-4:0,marginLeft:R.barRight?-3:0,marginRight:R.barLeft?-1:0,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0};

if(R.barTop||R.barBottom){S.paddingLeft=5;
S.paddingRight=7;
}else{S.paddingTop=5;
S.paddingBottom=7;
}return S;
}},"tabview/bar/button-forward":{include:gT,alias:gT,style:function(cJ){if(cJ.barTop||cJ.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/button-backward":{include:ec,alias:ec,style:function(U){if(U.barTop||U.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/scrollpane":{},"tabview/pane":{style:function(s){return {decorator:dp,minHeight:100,marginBottom:s.barBottom?-1:0,marginTop:s.barTop?-1:0,marginLeft:s.barLeft?-1:0,marginRight:s.barRight?-1:0};
}},"tabview-page":gs,"tabview-page/button":{alias:gt,style:function(hW){var id,hY=0;
var ic=0,hX=0,ia=0,ib=0;

if(hW.checked){if(hW.barTop){id=eJ;
hY=[6,14];
ia=hW.firstTab?0:-5;
ib=hW.lastTab?0:-5;
}else if(hW.barBottom){id=ee;
hY=[6,14];
ia=hW.firstTab?0:-5;
ib=hW.lastTab?0:-5;
}else if(hW.barRight){id=fF;
hY=[6,13];
ic=hW.firstTab?0:-5;
hX=hW.lastTab?0:-5;
}else{id=eF;
hY=[6,13];
ic=hW.firstTab?0:-5;
hX=hW.lastTab?0:-5;
}}else{if(hW.barTop){id=fj;
hY=[4,10];
ic=4;
ia=hW.firstTab?5:1;
ib=1;
}else if(hW.barBottom){id=dQ;
hY=[4,10];
hX=4;
ia=hW.firstTab?5:1;
ib=1;
}else if(hW.barRight){id=fJ;
hY=[4,10];
ib=5;
ic=hW.firstTab?5:1;
hX=1;
ia=1;
}else{id=fi;
hY=[4,10];
ia=5;
ic=hW.firstTab?5:1;
hX=1;
ib=1;
}}return {zIndex:hW.checked?10:5,decorator:id,padding:hY,marginTop:ic,marginBottom:hX,marginLeft:ia,marginRight:ib,textColor:hW.checked?cS:dL};
}},"tabview-page/button/label":{alias:gy,style:function(j){return {padding:[0,1,0,1],margin:j.focused?0:1,decorator:j.focused?ds:undefined};
}},"tabview-page/button/close-button":{alias:gt,style:function(be){return {icon:gf};
}},"toolbar":{style:function(t){return {decorator:di,spacing:2};
}},"toolbar/part":{style:function(hF){return {decorator:eG,spacing:2};
}},"toolbar/part/container":{style:function(cm){return {paddingLeft:2,paddingRight:2};
}},"toolbar/part/handle":{style:function(bO){return {source:gO,marginLeft:3,marginRight:3};
}},"toolbar-button":{alias:gt,style:function(bl){return {marginTop:2,marginBottom:2,padding:(bl.pressed||bl.checked||bl.hovered)&&!bl.disabled||(bl.disabled&&bl.checked)?3:5,decorator:bl.pressed||(bl.checked&&!bl.hovered)||(bl.checked&&bl.disabled)?fo:bl.hovered&&!bl.disabled?cR:undefined};
}},"toolbar-menubutton":{alias:gB,include:gB,style:function(p){return {showArrow:true};
}},"toolbar-menubutton/arrow":{alias:go,include:go,style:function(br){return {source:dV};
}},"toolbar-splitbutton":{style:function(c){return {marginTop:2,marginBottom:2};
}},"toolbar-splitbutton/button":{alias:gB,include:gB,style:function(E){return {icon:eW,marginTop:undefined,marginBottom:undefined};
}},"toolbar-splitbutton/arrow":{alias:gB,include:gB,style:function(cG){return {padding:cG.pressed||cG.checked?1:cG.hovered?1:3,icon:eW,marginTop:undefined,marginBottom:undefined};
}},"toolbar-separator":{style:function(hE){return {decorator:fm,margin:7};
}},"tree":gv,"tree-item":{style:function(bM){return {padding:[2,6],textColor:bM.selected?gp:undefined,decorator:bM.selected?eU:undefined};
}},"tree-item/icon":{include:go,style:function(bD){return {paddingRight:5};
}},"tree-item/label":gy,"tree-item/open":{include:go,style:function(hL){var hM;

if(hL.selected&&hL.opened){hM=fM;
}else if(hL.selected&&!hL.opened){hM=gG;
}else if(hL.opened){hM=dX;
}else{hM=gS;
}return {padding:[0,5,0,2],source:hM};
}},"tree-folder":{include:gD,alias:gD,style:function(W){var X;

if(W.small){X=W.opened?du:dd;
}else if(W.large){X=W.opened?eK:dR;
}else{X=W.opened?fy:eL;
}return {icon:X};
}},"tree-file":{include:gD,alias:gD,style:function(bF){return {icon:bF.small?dT:bF.large?dj:gH};
}},"treevirtual":dz,"treevirtual-folder":{style:function(cs){return {icon:cs.opened?du:dd};
}},"treevirtual-file":{include:ea,alias:ea,style:function(bC){return {icon:dT};
}},"treevirtual-line":{style:function(bk){return {icon:cY};
}},"treevirtual-contract":{style:function(O){return {icon:dX,paddingLeft:5,paddingTop:2};
}},"treevirtual-expand":{style:function(hN){return {icon:gS,paddingLeft:5,paddingTop:2};
}},"treevirtual-only-contract":gE,"treevirtual-only-expand":fX,"treevirtual-start-contract":gE,"treevirtual-start-expand":fX,"treevirtual-end-contract":gE,"treevirtual-end-expand":fX,"treevirtual-cross-contract":gE,"treevirtual-cross-expand":fX,"treevirtual-end":{style:function(J){return {icon:cY};
}},"treevirtual-cross":{style:function(hm){return {icon:cY};
}},"tooltip":{include:gA,style:function(v){return {backgroundColor:es,padding:[1,3,2,3],offset:[15,5,5,5]};
}},"tooltip/atom":gt,"tooltip-error":{include:gx,style:function(bj){return {textColor:gp,placeMethod:gs,offset:[0,0,0,14],marginTop:-2,position:cV,showTimeout:100,hideTimeout:10000,decorator:dP,shadow:el,font:gn};
}},"tooltip-error/atom":gt,"window":{style:function(hS){return {shadow:dH,contentPadding:[10,10,10,10]};
}},"window/pane":{style:function(hO){return {decorator:fa};
}},"window/captionbar":{style:function(cF){return {decorator:cF.active?cL:fC,textColor:cF.active?gw:dD,minHeight:26,paddingRight:2};
}},"window/icon":{style:function(m){return {margin:[5,0,3,6]};
}},"window/title":{style:function(hT){return {alignY:gm,font:gn,marginLeft:6,marginRight:12};
}},"window/minimize-button":{alias:gt,style:function(C){return {icon:C.active?C.hovered?fe:fG:fK,margin:[4,8,2,0]};
}},"window/restore-button":{alias:gt,style:function(hJ){return {icon:hJ.active?hJ.hovered?dI:dg:fH,margin:[5,8,2,0]};
}},"window/maximize-button":{alias:gt,style:function(hr){return {icon:hr.active?hr.hovered?dw:eM:gc,margin:[4,8,2,0]};
}},"window/close-button":{alias:gt,style:function(bH){return {icon:bH.active?bH.hovered?gg:ex:eO,margin:[4,8,2,0]};
}},"window/statusbar":{style:function(bS){return {padding:[2,6],decorator:ep,minHeight:18};
}},"window/statusbar-text":{style:function(N){return {font:dC};
}},"iframe":{style:function(cz){return {decorator:gr};
}},"resizer":{style:function(bp){return {decorator:eB};
}},"splitpane":{style:function(i){return {decorator:fP};
}},"splitpane/splitter":{style:function(hf){return {width:hf.horizontal?3:undefined,height:hf.vertical?3:undefined,backgroundColor:gY};
}},"splitpane/splitter/knob":{style:function(T){return {source:T.horizontal?dS:fb};
}},"splitpane/slider":{style:function(a){return {width:a.horizontal?3:undefined,height:a.vertical?3:undefined,backgroundColor:gY};
}},"selectbox":{alias:gu,include:gu,style:function(cq){return {padding:[2,8]};
}},"selectbox/atom":gt,"selectbox/popup":gA,"selectbox/list":{alias:gv},"selectbox/arrow":{include:go,style:function(bJ){return {source:eW,paddingLeft:5};
}},"datechooser":{style:function(d){var h;
var f=!!d.focused;
var g=!!d.invalid;
var e=!!d.disabled;

if(f&&g&&!e){h=eP;
}else if(f&&!g&&!e){h=gz;
}else if(e){h=eR;
}else if(!f&&g&&!e){h=eT;
}else{h=eS;
}return {padding:2,decorator:h,backgroundColor:gl};
}},"datechooser/navigation-bar":{},"datechooser/nav-button":{include:gu,alias:gu,style:function(ci){var cj={padding:[2,4],shadow:undefined};

if(ci.lastYear){cj.icon=dq;
cj.marginRight=1;
}else if(ci.lastMonth){cj.icon=gQ;
}else if(ci.nextYear){cj.icon=cN;
cj.marginLeft=1;
}else if(ci.nextMonth){cj.icon=ga;
}return cj;
}},"datechooser/last-year-button-tooltip":gx,"datechooser/last-month-button-tooltip":gx,"datechooser/next-year-button-tooltip":gx,"datechooser/next-month-button-tooltip":gx,"datechooser/last-year-button":fS,"datechooser/last-month-button":fS,"datechooser/next-month-button":fS,"datechooser/next-year-button":fS,"datechooser/month-year-label":{style:function(hQ){return {font:gn,textAlign:fU,textColor:hQ.disabled?eY:undefined};
}},"datechooser/date-pane":{style:function(P){return {textColor:P.disabled?eY:undefined,marginTop:2};
}},"datechooser/weekday":{style:function(B){return {textColor:B.disabled?eY:B.weekend?gW:undefined,textAlign:fU,paddingTop:2,backgroundColor:dU};
}},"datechooser/week":{style:function(z){return {textAlign:fU,padding:[2,4],backgroundColor:dU};
}},"datechooser/day":{style:function(bL){return {textAlign:fU,decorator:bL.disabled?undefined:bL.selected?eU:undefined,textColor:bL.disabled?eY:bL.selected?gp:bL.otherMonth?gW:undefined,font:bL.today?gn:undefined,padding:[2,4]};
}},"combobox":{style:function(hx){var hB;
var hz=!!hx.focused;
var hA=!!hx.invalid;
var hy=!!hx.disabled;

if(hz&&hA&&!hy){hB=eP;
}else if(hz&&!hA&&!hy){hB=gz;
}else if(hy){hB=eR;
}else if(!hz&&hA&&!hy){hB=eT;
}else{hB=eS;
}return {decorator:hB};
}},"combobox/popup":gA,"combobox/list":{alias:gv},"combobox/button":{include:gu,alias:gu,style:function(L){var M={icon:eW,padding:2};

if(L.selected){M.decorator=gP;
}return M;
}},"combobox/textfield":{include:fW,style:function(hD){return {decorator:undefined};
}},"menu":{style:function(ct){var cu={decorator:en,shadow:eb,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4,placementModeY:ct.submenu||ct.contextmenu?gF:eH};

if(ct.submenu){cu.position=cV;
cu.offset=[-2,-3];
}return cu;
}},"menu/slidebar":fp,"menu-slidebar":gs,"menu-slidebar-button":{style:function(hc){return {decorator:hc.hovered?eU:undefined,padding:7,center:true};
}},"menu-slidebar/button-backward":{include:gV,style:function(b){return {icon:b.hovered?fq:dy};
}},"menu-slidebar/button-forward":{include:gV,style:function(bB){return {icon:bB.hovered?fu:eW};
}},"menu-separator":{style:function(w){return {height:0,decorator:eA,margin:[4,2]};
}},"menu-button":{alias:gt,style:function(bo){return {decorator:bo.selected?eU:undefined,textColor:bo.selected?gp:undefined,padding:[4,6]};
}},"menu-button/icon":{include:go,style:function(bE){return {alignY:gm};
}},"menu-button/label":{include:gy,style:function(bh){return {alignY:gm,padding:1};
}},"menu-button/shortcut":{include:gy,style:function(cA){return {alignY:gm,marginLeft:14,padding:1};
}},"menu-button/arrow":{include:go,style:function(bu){return {source:bu.selected?eC:ga,alignY:gm};
}},"menu-checkbox":{alias:eQ,include:eQ,style:function(cH){return {icon:!cH.checked?undefined:cH.selected?gN:dn};
}},"menu-radiobutton":{alias:eQ,include:eQ,style:function(q){return {icon:!q.checked?undefined:q.selected?fd:cO};
}},"menubar":{style:function(n){return {decorator:fl};
}},"menubar-button":{alias:gt,style:function(Q){return {decorator:Q.pressed||Q.hovered?eU:undefined,textColor:Q.pressed||Q.hovered?gp:undefined,padding:[3,8]};
}},"colorselector":gs,"colorselector/control-bar":gs,"colorselector/control-pane":gs,"colorselector/visual-pane":eX,"colorselector/preset-grid":gs,"colorselector/colorbucket":{style:function(cx){return {decorator:gr,width:16,height:16};
}},"colorselector/preset-field-set":eX,"colorselector/input-field-set":eX,"colorselector/preview-field-set":eX,"colorselector/hex-field-composite":gs,"colorselector/hex-field":fW,"colorselector/rgb-spinner-composite":gs,"colorselector/rgb-spinner-red":gC,"colorselector/rgb-spinner-green":gC,"colorselector/rgb-spinner-blue":gC,"colorselector/hsb-spinner-composite":gs,"colorselector/hsb-spinner-hue":gC,"colorselector/hsb-spinner-saturation":gC,"colorselector/hsb-spinner-brightness":gC,"colorselector/preview-content-old":{style:function(o){return {decorator:gr,width:50,height:10};
}},"colorselector/preview-content-new":{style:function(bG){return {decorator:gr,backgroundColor:gl,width:50,height:10};
}},"colorselector/hue-saturation-field":{style:function(hC){return {decorator:gr,margin:5};
}},"colorselector/brightness-field":{style:function(hU){return {decorator:gr,margin:[5,7]};
}},"colorselector/hue-saturation-pane":gs,"colorselector/hue-saturation-handle":gs,"colorselector/brightness-pane":gs,"colorselector/brightness-handle":gs,"colorpopup":{alias:gA,include:gA,style:function(hs){return {padding:5,backgroundColor:fY};
}},"colorpopup/field":{style:function(bt){return {decorator:gr,margin:2,width:14,height:14,backgroundColor:gl};
}},"colorpopup/selector-button":gq,"colorpopup/auto-button":gq,"colorpopup/preview-pane":eX,"colorpopup/current-preview":{style:function(bm){return {height:20,padding:4,marginLeft:4,decorator:gr,allowGrowX:true};
}},"colorpopup/selected-preview":{style:function(y){return {height:20,padding:4,marginRight:4,decorator:gr,allowGrowX:true};
}},"colorpopup/colorselector-okbutton":{alias:gq,include:gq,style:function(hP){return {icon:fA};
}},"colorpopup/colorselector-cancelbutton":{alias:gq,include:gq,style:function(cl){return {icon:fk};
}},"table":{alias:gs,style:function(bA){return {decorator:dz};
}},"table-header":{},"table/statusbar":{style:function(Y){return {decorator:fE,padding:[0,2]};
}},"table/column-button":{alias:gu,style:function(bs){return {decorator:dG,padding:3,icon:cP};
}},"table-column-reset-button":{include:eQ,alias:eQ,style:function(){return {icon:eE};
}},"table-scroller":gs,"table-scroller/scrollbar-x":fT,"table-scroller/scrollbar-y":fT,"table-scroller/header":{style:function(r){return {decorator:eu};
}},"table-scroller/pane":{style:function(ca){return {backgroundColor:ew};
}},"table-scroller/focus-indicator":{style:function(u){return {decorator:em};
}},"table-scroller/resize-line":{style:function(D){return {backgroundColor:gj,width:2};
}},"table-header-cell":{alias:gt,style:function(cI){return {minWidth:13,minHeight:20,padding:cI.hovered?[3,4,2,4]:[3,4],decorator:cI.hovered?fc:ei,sortIcon:cI.sorted?(cI.sortedAscending?fr:cM):undefined};
}},"table-header-cell/label":{style:function(hq){return {minWidth:0,alignY:gm,paddingRight:5};
}},"table-header-cell/sort-icon":{style:function(co){return {alignY:gm,alignX:db};
}},"table-header-cell/icon":{style:function(ha){return {minWidth:0,alignY:gm,paddingRight:5};
}},"table-editor-textfield":{include:fW,style:function(hG){return {decorator:undefined,padding:[2,2],backgroundColor:gl};
}},"table-editor-selectbox":{include:ed,alias:ed,style:function(A){return {padding:[0,2],backgroundColor:gl};
}},"table-editor-combobox":{include:cU,alias:cU,style:function(ba){return {decorator:undefined,backgroundColor:gl};
}},"progressive-table-header":{alias:gs,style:function(bI){return {decorator:cQ};
}},"progressive-table-header-cell":{alias:gt,style:function(cy){return {minWidth:40,minHeight:25,paddingLeft:6,decorator:ez};
}},"app-header":{style:function(hK){return {font:gn,textColor:gp,padding:[8,12],decorator:eo};
}},"virtual-list":gv,"virtual-list/row-layer":dM,"row-layer":{style:function(bq){return {colorEven:gw,colorOdd:gw};
}},"column-layer":gs,"cell":{style:function(bK){return {textColor:bK.selected?gp:de,padding:[3,6],font:dY};
}},"cell-string":eV,"cell-number":{include:eV,style:function(cE){return {textAlign:db};
}},"cell-image":eV,"cell-boolean":{include:eV,style:function(hp){return {iconTrue:eh,iconFalse:dl};
}},"cell-atom":eV,"cell-date":eV,"cell-html":eV,"htmlarea":{"include":gs,style:function(hV){return {backgroundColor:gw};
}}}});
})();
(function(){var d="tree",c="main",b="Demo browser",a="demobrowser.Appearance";
qx.Theme.define(a,{extend:qx.theme.modern.Appearance,title:b,appearances:{"demo-tree":{alias:d,include:d,style:function(){return {width:270,decorator:c};
}}}});
})();
(function(){var b="demobrowser.Theme",a="Demo browser";
qx.Theme.define(b,{title:a,meta:{color:qx.theme.modern.Color,decoration:qx.theme.modern.Decoration,font:qx.theme.modern.Font,icon:qx.theme.icon.Tango,appearance:demobrowser.Appearance}});
})();
(function(){var j="_applyStyle",i="stretch",h="Integer",g="px",f=" ",e="repeat",d="round",c="shorthand",b="px ",a="sliceBottom",A=";'></div>",z="<div style='",y="qx.debug",x="sliceLeft",w="sliceRight",v="repeatX",u="String",t="qx.ui.decoration.css3.BorderImage",s="border-box",r="",p='") ',q="sliceTop",n='url("',o="hidden",l="on",m="repeatY",k="absolute";
qx.Class.define(t,{extend:qx.ui.decoration.Abstract,construct:function(G,H){qx.ui.decoration.Abstract.call(this);
if(G!=null){this.setBorderImage(G);
}
if(H!=null){this.setSlice(H);
}},statics:{IS_SUPPORTED:qx.bom.element.Style.isPropertySupported("borderImage")},properties:{borderImage:{check:u,nullable:true,apply:j},sliceTop:{check:h,init:0,apply:j},sliceRight:{check:h,init:0,apply:j},sliceBottom:{check:h,init:0,apply:j},sliceLeft:{check:h,init:0,apply:j},slice:{group:[q,w,a,x],mode:c},repeatX:{check:[i,e,d],init:i,apply:j},repeatY:{check:[i,e,d],init:i,apply:j},repeat:{group:[v,m],mode:c}},members:{__mJ:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__mJ;
},getMarkup:function(){if(this.__mJ){return this.__mJ;
}var D=this._resolveImageUrl(this.getBorderImage());
var E=[this.getSliceTop(),this.getSliceRight(),this.getSliceBottom(),this.getSliceLeft()];
var F=[this.getRepeatX(),this.getRepeatY()].join(f);
this.__mJ=[z,qx.bom.element.Style.compile({"borderImage":n+D+p+E.join(f)+f+F,position:k,lineHeight:0,fontSize:0,overflow:o,boxSizing:s,borderWidth:E.join(b)+g}),A].join(r);
return this.__mJ;
},resize:function(J,K,L){J.style.width=K+g;
J.style.height=L+g;
},tint:function(B,C){},_applyStyle:function(){if(qx.core.Variant.isSet(y,l)){if(this._isInitialized()){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}},_resolveImageUrl:function(I){return qx.util.ResourceManager.getInstance().toUri(qx.util.AliasManager.getInstance().resolve(I));
}},destruct:function(){this.__mJ=null;
}});
})();
(function(){var j="px",i="0px",h="-1px",g="no-repeat",f="scale-x",e="scale-y",d="-tr",c="-l",b='</div>',a="scale",z="qx.client",y="-br",x="-t",w="-tl",v="-r",u='<div style="position:absolute;top:0;left:0;overflow:hidden;font-size:0;line-height:0;">',t="qx.debug",s="_applyBaseImage",r="-b",q="String",o="",p="-bl",m="qx.ui.decoration.GridDiv",n="-c",k="mshtml",l="on";
qx.Class.define(m,{extend:qx.ui.decoration.Abstract,construct:function(A,B){qx.ui.decoration.Abstract.call(this);
if(A!=null){this.setBaseImage(A);
}
if(B!=null){this.setInsets(B);
}},properties:{baseImage:{check:q,nullable:true,apply:s}},members:{__mK:null,__mL:null,__mM:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__mK;
},getMarkup:function(){if(this.__mK){return this.__mK;
}var R=qx.bom.element.Decoration;
var S=this.__mL;
var T=this.__mM;
var U=[];
U.push(u);
U.push(R.create(S.tl,g,{top:0,left:0}));
U.push(R.create(S.t,f,{top:0,left:T.left+j}));
U.push(R.create(S.tr,g,{top:0,right:0}));
U.push(R.create(S.bl,g,{bottom:0,left:0}));
U.push(R.create(S.b,f,{bottom:0,left:T.left+j}));
U.push(R.create(S.br,g,{bottom:0,right:0}));
U.push(R.create(S.l,e,{top:T.top+j,left:0}));
U.push(R.create(S.c,a,{top:T.top+j,left:T.left+j}));
U.push(R.create(S.r,e,{top:T.top+j,right:0}));
U.push(b);
return this.__mK=U.join(o);
},resize:function(N,O,P){var Q=this.__mM;
var innerWidth=O-Q.left-Q.right;
var innerHeight=P-Q.top-Q.bottom;
if(innerWidth<0){innerWidth=0;
}
if(innerHeight<0){innerHeight=0;
}N.style.width=O+j;
N.style.height=P+j;
N.childNodes[1].style.width=innerWidth+j;
N.childNodes[4].style.width=innerWidth+j;
N.childNodes[7].style.width=innerWidth+j;
N.childNodes[6].style.height=innerHeight+j;
N.childNodes[7].style.height=innerHeight+j;
N.childNodes[8].style.height=innerHeight+j;

if(qx.core.Variant.isSet(z,k)){if(qx.bom.client.Engine.VERSION<7||(qx.bom.client.Feature.QUIRKS_MODE&&qx.bom.client.Engine.VERSION<8)){if(O%2==1){N.childNodes[2].style.marginRight=h;
N.childNodes[5].style.marginRight=h;
N.childNodes[8].style.marginRight=h;
}else{N.childNodes[2].style.marginRight=i;
N.childNodes[5].style.marginRight=i;
N.childNodes[8].style.marginRight=i;
}
if(P%2==1){N.childNodes[3].style.marginBottom=h;
N.childNodes[4].style.marginBottom=h;
N.childNodes[5].style.marginBottom=h;
}else{N.childNodes[3].style.marginBottom=i;
N.childNodes[4].style.marginBottom=i;
N.childNodes[5].style.marginBottom=i;
}}}},tint:function(C,D){},_applyBaseImage:function(E,F){if(qx.core.Variant.isSet(t,l)){if(this.__mK){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}
if(E){var J=this._resolveImageUrl(E);
var K=/(.*)(\.[a-z]+)$/.exec(J);
var I=K[1];
var H=K[2];
var G=this.__mL={tl:I+w+H,t:I+x+H,tr:I+d+H,bl:I+p+H,b:I+r+H,br:I+y+H,l:I+c+H,c:I+n+H,r:I+v+H};
this.__mM=this._computeEdgeSizes(G);
}},_resolveImageUrl:function(V){return qx.util.AliasManager.getInstance().resolve(V);
},_computeEdgeSizes:function(L){var M=qx.util.ResourceManager.getInstance();
return {top:M.getImageHeight(L.t),bottom:M.getImageHeight(L.b),left:M.getImageWidth(L.l),right:M.getImageWidth(L.r)};
}},destruct:function(){this.__mK=this.__mL=this.__mM=null;
}});
})();


qx.$$loader.init();

